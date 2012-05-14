"use strict";

var Python = {};

//TODO: Blobs on both sides (JavaScript and Python) should be reference counted
window.bifrost = (function() {

    
    var resultCallback, initCallback, chrToFunc, isFinishedCallback;

    // a blob is an object with properties 'val' and 'isPrimitive'
    var blobs = {};
    blobs[0] = {};
    blobs[0].val = window;
    blobs[0].isPrimitive = false;
    var nextID = 1;

    var capitalize = function(lowercase) {
        var str = "" + lowercase;
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    var convertToPythonObject = function (obj) {
        if (typeof(obj) === "boolean"){
            if (obj === true) return "True";
            else return "False";
        }
        if (typeof(obj) === "number") {
            return obj;
        }
        else { //typeof(obj) === "string"
            return JSON.stringify(obj);
        }
    };

    var pyeval = function(code, isResponse) {
        console.log("About to post with ", code, " and ", isResponse);
        worker.postMessage({
            'action': 'pyeval',
            'code': code,
            'isResponse': isResponse
        });
    };

    var pyevalForResult = function(code) {
        worker.postMessage({
            'action': 'pyeval',
            'code': code,
            'isResponse': false,
            'wantsResult': true
        });
    };

    var pyinitialize = function(obj) {
        worker.postMessage({
            'action': 'pyinitialize',
            'obj': obj,
        });
    };

    var pyisFinished = function(code) {
        worker.postMessage({
            'action': 'pyisFinished',
            'code': code
        });
    }

    Python.initialize = function(obj, passedChrToFunc, callback) {
        pyinitialize(obj);
        initCallback = callback;
        chrToFunc = passedChrToFunc;
    };

    Python.eval = function(code, callback) {
        pyevalForResult(code);
        resultCallback = callback;
    };

    Python.isFinished = function(code, callback) {
        pyisFinished(code);
        isFinishedCallback = callback;
    };

    var cleanseForPython = function (str) {
        var backslashRe = /\\/g;
        var singleQuoteRe = /\'/g;

        return str.replace(backslashRe, '////').replace(singleQuoteRe, '\\\'');
    };

    var returnBlobToPython = function (localBlobID, pythonBlobID) {
        pyeval("pyjs.blobs[" + pythonBlobID + "] = (" + localBlobID + ", " + convertToPythonObject(blobs[localBlobID].isPrimitive) + ")", true);
        console.log("sent the pyeval from returnBlobToPython");
    };

    var throwInPython = function(errorMessage, isResponse) {
        pyeval("pyjs.error = '" + cleanseForPython(errorMessage) + "'", isResponse);
    };

    var setPrimitiveInPython = function(value) {
    };

    var objIsPrimitive = function(obj){
        return (typeof(obj) === "string" ||
                typeof(obj) === "boolean" ||
                typeof(obj) === "number");
    };

    var createBlob = function (val){
        var currID = nextID;
        blobs[currID] = {};
        blobs[currID].val = val;
        if (objIsPrimitive(blobs[currID].val)){
            blobs[currID].isPrimitive = true;
        }
        else {
            blobs[currID].isPrimitive = false;
        }
        nextID += 1;
        return currID;
    };

    var makeAlias = function(object, name) {
        var fn = object ? object[name] : null;
        if (typeof fn == 'undefined')
            return function() {};
        return function() {
            return fn.apply(object, arguments);
        }
    };

    var respondToWorker = function() {
        worker.postMessage({
            'isResponse': true
        });
    };

    var createBlobFromBlobProperty = function(sourceBlobID, property, otherBlobID){
        try {
            var currID = createBlob(blobs[sourceBlobID].val[property]);
            returnBlobToPython(currID, otherBlobID);
        }
        catch(e) {
            throwInPython(e.toString(), true);
        }
    },
    callBlobFunction = function(parentBlobID, localBlobID, otherBlobID, args) {

            try {
                //TODO: make this fix less hacky (window.document(10) won't throw an error now)
                if (blobs[localBlobID].val.apply !== undefined) {
                    var currID = createBlob(blobs[localBlobID].val.apply(blobs[parentBlobID].val, args));
                    returnBlobToPython(currID, otherBlobID);
                }
            }
            catch(e) {
                throwInPython(e.toString(), true);
            }
    },
    getBlobPrimitive = function(localBlobID) {
            try {
                var primitive = blobs[localBlobID].val;
                pyeval("pyjs.primitive = " + convertToPythonObject(primitive), true);
            }
            catch(e) {
                throwInPython(e.toString(), true);
            }
    },
    setBlobPropertyToPrimitive = function(localBlobID, property, primitive) {
            try {
                blobs[localBlobID].val[property] = primitive;
                respondToWorker();
            }
            catch(e) {
                throwInPython(e.toString(), true);
            }
    }

    var worker = new Worker('worker-bridge.js');
    worker.onerror = function(error) {
        console.log(error);
        throw(error);
    }
    worker.onmessage = function(event) {
        event.preventDefault();
        var d = event.data;
        switch(event.data.funcCall) {
            case 'createBlobFromBlobProperty':
                createBlobFromBlobProperty(d.sourceBlobID, d.property, d.otherBlobID);
                break;
            case 'callBlobFunction':
                callBlobFunction(d.parentBlobID, d.localBlobID, d.otherBlobID, d.args);
                break;
            case 'getBlobPrimitive':
                getBlobPrimitive(d.localBlobID);
                break;
            case 'setBlobPropertyToPrimitive':
                setBlobPropertyToPrimitive(d.localBlobID, d.property, d.primitive);
                break;
            case 'console.log':
                console.log.apply(console, d.args);
                break;
            case 'resultCallback':
                resultCallback(d.result);
                break;
            case 'initializeCallback':
                initCallback();
                break;
            case 'setChr':
                chrToFunc(d.chr);
                break;
            case 'isFinishedCallback':
                isFinishedCallback(d.isFinished);
                break;

            default:
                throw('This is not a proper function name');
                break;
        }
    };

    var module = { };

    return module;

})();

