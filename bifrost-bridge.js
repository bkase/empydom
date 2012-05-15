"use strict";

//PyEval is Python.eval;
//var PyEval = require(Python).eval;

//TODO: Blobs on both sides (JavaScript and Python) should be reference counted
window.bifrost = (function() {

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

    var cleanseForPython = function (str) {
        var backslashRe = /\\/g;
        var singleQuoteRe = /\'/g;

        return str.replace(backslashRe, '////').replace(singleQuoteRe, '\\\'');
    };
    
    var returnBlobToPython = function (localBlobID, pythonBlobID) {
        Python.eval("pyjs.blobs[" + pythonBlobID + "] = (" + localBlobID + ", " + convertToPythonObject(blobs[localBlobID].isPrimitive) + ")");
    };

    var throwInPython = function(errorMessage) {
        Python.eval("pyjs.error = '" + cleanseForPython(errorMessage) + "'")
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

    var swapQuotes = function(strWithQuotes) {
        return strWithQuotes.replace(/'/g, '\u2190').replace(/"/g, "'").replace(/\u2190/g, '"');
    };

    var convertJSONtoObj = function(args) {
        if (args.length) {
            for (var i = 0; i < args.length; i++) {
                //if JSON.parse succeeds assume it's an object
                try {
                    args[i] = swapQuotes(args[i]);
                    var obj = JSON.parse(args[i]);
                    args[i] = obj;
                }
                catch(e) { }
            }
        }
        else {
            args = swapQuotes(args);
            //if JSON.parse succeeds assume it's an object
            try {
                var obj = JSON.parse(args);
                args = obj;
            }
            catch(e) { }
        }
        return args;
    };

    var module = {
        'blobs': blobs,
        'createBlobFromJSON': function(jsonStr, otherBlobID) {
            var currID = createBlob(JSON.parse(jsonStr));
            returnBlobToPython(currID, otherBlobID);
        },
        'createBlobFromBlobProperty': function(sourceBlobID, property, otherBlobID){
            try {
                var currID = createBlob(blobs[sourceBlobID].val[property]);
                returnBlobToPython(currID, otherBlobID);
            }
            catch(e) {
                throwInPython(e.toString());
            }
        },
        'callBlobFunction': function(parentBlobID, localBlobID, otherBlobID, args){

            try {
                args = convertJSONtoObj(args);

                //TODO: make this fix less hacky (window.document(10) won't throw an error now)
                if (blobs[localBlobID].val.apply !== undefined) {
                    var currID = createBlob(blobs[localBlobID].val.apply(blobs[parentBlobID].val, args));
                    returnBlobToPython(currID, otherBlobID);
                }
            }
            catch(e) {
                throwInPython(e.toString());
            }
        },
        'getBlobPrimitive': function(localBlobID) {
            try {
                var primitive = blobs[localBlobID].val;
                Python.eval("pyjs.primitive = " + convertToPythonObject(primitive));
            }
            catch(e) {
                throwInPython(e.toString());
            }
        },
        'setBlobPropertyToValue': function(localBlobID, property, value) {
            try {
                blobs[localBlobID].val[property] = value;
            }
            catch(e) {
                throwInPython(e.toString());
            }
        }
    }
    
    return module;

})();
