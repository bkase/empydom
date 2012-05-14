/*
    Forward all function calls and returns
    Except:
        Handle Pyeval calls
   */

var console = {};

self.bifrost = (function() {
    var pending_responses = 0;

    console.log = function() {
        postMessage({
            'funcCall': 'console.log',
            'args': Array.prototype.slice.call(arguments) //convert to Array
        });
    };

    /* 
     * The code has to hang here so that we finish our JS handling before we transfer
     * context back to Python
     *
     * I understand that this is bad JavaScript the alternative is to 
     * rewrite PyEval_EvalFrameEx() in ceval.c and recompile empythoned 
     * or 
     * change _PyEval_EvalFrameEx() in the JS output of CPython
     * 
     * To make everything call a callback and then avoid calling the callback 
     * when calling the JS eval
     */

    var waitForResponse = function() {
        //while(pending_responses > 0) {
            //console.log("pending_responses: " + pending_responses); //NOP
        //}
        console.log("This is right before setTimeout",pending_responses);
        setTimeout(function() { console.log("This is in setTimeout",pending_responses); }, 0);
        console.log("This is physically after the setTimeout",pending_responses);
        //Now safely transfer context back to Python
    }

    /* onMessage handler */
    self.onmessage = function(event) {
        event.preventDefault();
        var d = event.data;

        if(d.action === "pyeval") {
            var result = Python.eval(d.code);
            if (d.wantsResult) {
                self.postMessage({
                    'funcCall': 'resultCallback',
                    'result': result
                });
            }
        }
        else if (d.action === "pyinitialize") {
            Python.initialize(d.obj, function(chr) {
                self.postMessage({
                    'funcCall': 'setChr',
                    'chr': chr
                });
            });
            self.postMessage({
                'funcCall': 'initializeCallback'
            });
        }
        else if (d.action === "pyisFinished") {
            self.postMessage({
                'funcCall': 'isFinishedCallback',
                'isFinished': Python.isFinished(d.code)
            });
        }

        if (event.data.isResponse) {
            pending_responses -= 1;
        }
    };

    var module = {
        'createBlobFromBlobProperty': function(sourceBlobID, property, otherBlobID){
            self.postMessage({ 
                'funcCall': 'createBlobFromBlobProperty', 
                'sourceBlobID': sourceBlobID,  
                'property': property,
                'otherBlobID': otherBlobID
            });
            pending_responses += 1;
            waitForResponse();
            console.log("I waited now pending_responses: ", pending_responses);
        },
        'callBlobFunction': function(parentBlobID, localBlobID, otherBlobID, args){
            self.postMessage({ 
                'funcCall': 'callBlobFunction',
                'parentBlobID': parentBlobID,
                'localBlobID': localBlobID,
                'otherBlobID': otherBlobID,
                'args': args
            });
            pending_responses += 1;
            waitForResponse();
            console.log("I waited now pending_responses: ", pending_responses);
        },
        'getBlobPrimitive': function(localBlobID) {
            self.postMessage({ 
                'funcCall': 'getBlobPrimitive',
                'localBlobID': localBlobID
            });
            pending_responses += 1;
            waitForResponse();
            console.log("I waited now pending_responses: ", pending_responses);
        },
        'setBlobPropertyToPrimitive': function(localBlobID, property, primitive) {
            self.postMessage({
                'localBlobID': localBlobID,
                'property': property,
                'primitive': primitive
            });
            pending_responses += 1;
            waitForResponses();
            console.log("I waited now pending_responses: ", pending_responses);
        }
    }

    
    return module;
})();

//Now import python.js
importScripts('python.js');
