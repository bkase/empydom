
/*
Forward all function calls and returns
Except:
    Handle Pyeval calls
    */

self.onmessage = function(event) {
    event.preventDefault();
    switch(event.data.action) {
        case "pyeval":
            Python.eval(event.data.code);
            break;
        case "returnBlobIdToPython":
            Python.eval
        Python.eval("pyjs.blobs[" + pythonBlobID + "] = (" + localBlobID + ", " + convertToPythonObject(blobs[localBlobID].isPrimitive) + ")");

    }
};
