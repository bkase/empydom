import bifrost
 
class JSWrapper:
  def __init__(self, pyjs, jsID, parentJSID):
    self.createLocal__("pyjs__")
    self.createLocal__("jsID__")
    self.createLocal__("parentJSID__")
    self.pyjs__ = pyjs
    self.jsID__ = jsID
    self.parentJSID__ = parentJSID

  def createLocal__(self, attr):
    self.__dict__[attr] = None

  def __setattr__(self, attr, value):
    if attr in self.__dict__:
      self.__dict__[attr] = value
    else :
      self.pyjs__.setJSBlobPrimitive(self.jsID__, attr, value)

  def __getattr__(self, attr):
    newID = self.pyjs__.getJSBlobProperty(self.jsID__, attr)
    return self.getWrappedBlob__(newID)

  def __call__(self, *args):
    newID = self.pyjs__.callJSBlob(self.parentJSID__, self.jsID__, args)
    return self.getWrappedBlob__(newID)

  def __del__(self):
    self.pyjs__.delBlob(self.jsID__)

  def getWrappedBlob__(self, id):
    isPrimitive = self.pyjs__.blobs[id][1]
    if isPrimitive:
      primitive = self.pyjs__.getJSBlobPrimitive(id)
      #TODO: delete the reference
      return primitive
    else :
      return JSWrapper(self.pyjs__, id, self.jsID__)


class Empydom:
  def __init__(self):
    self.windowId = 0
    self.nextId = 1
    self.blobs = {0: (self.windowId, False)}
    self.primitive = None
    self.error = None
    self.funcs = []

  def jserror(self):
    err = self.error
    self.nextId -= 1 #throw out that blob index
    self.error = None #reset error
    raise Exception(err)

  def call(self, jsstring):
    bifrost.run(jsstring)

  def delBlob(self, jsID):
    self.call("window.empydom.delBlob(" + str(jsID) + ")")
    del self.blobs[jsID]

  #rewrite, messy hack at 5am
  def callJSBlob(self, parentjsid, jsid, args):
    jsID = self.blobs[jsid][0]
    jsArgs = []
    for arg in args:
      jsArgs.append(self.convertToJSObject(arg,True))
    currentId = self.nextId
    self.call("window.empydom.callBlobFunction(" + str(parentjsid) +", " + str(jsid) + ", " + str(currentId) + ", " + str(jsArgs) + ")") 
    self.nextId += 1
    if (self.error is not None):
      self.jserror()
    return currentId

  def getJSBlobProperty(self, jsID, prop): 
    currentId = self.nextId
    self.call("window.empydom.createBlobFromBlobProperty(" + str(jsID) + ", \"" + str(prop) + "\", " + str(currentId) + ")") 
    self.nextId += 1
    if (self.error is not None):
      self.jserror()
    return currentId

  def getJSBlobPrimitive(self, pythonID):
    jsID = self.blobs[pythonID][0]
    self.call("window.empydom.getBlobPrimitive(" + str(jsID) + ")")
    if (self.error is not None):
      self.jserror()
    return self.primitive

  def setJSBlobPrimitive(self, pythonID, prop, value):
    jsID = self.blobs[pythonID][0]
    self.call("window.empydom.setBlobPropertyToValue(" + str(jsID) + ", \"" + str(prop) + "\", " + self.convertToJSObject(value,False) + ")")
    if (self.error is not None):
      self.jserror()

  def wrapFunction(self, func):
    self.funcs.append(func)
    index = len(self.funcs)-1
    return """==%%==%%==function() {var argString = window.empydom.explodeArgs(arguments); Python.eval( "pyjs.funcs[""" + str(index) + """](" + argString + ")");}"""

  #If the object is in a list than even if str,
  #it needs to be same due to str() reprs
  def convertToJSObject(self, pythonObj, isInList):
    if (type(pythonObj) == str and isInList == False):
      return "\"" + pythonObj + "\""
    elif (type(pythonObj) == type(lambda x: x)):
      return self.wrapFunction(pythonObj)
    return str(pythonObj)

pyjs = Empydom()
window = JSWrapper(pyjs, pyjs.windowId, pyjs.windowId)

