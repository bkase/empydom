"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var __str;
  var __str1;
  var _BifrostMethods;
  var __str2;
  var __str3;
  var __str4;
  function _run($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $script = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str, allocate([ $script, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 2:
      var $4 = HEAP[$script];
      //var $5 = _printf(__str1, allocate([ $4, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      var $6 = HEAP[$script];
      //_emscripten_run_script($6);
      eval(Pointer_stringify($6));
      //console.log(eval(Pointer_stringify($6)));
      
      var $8 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $8;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      var $9 = HEAP[$0];
      HEAP[$retval] = $9;
      __label__ = 4;
      break;
     case 4:
      var $retval3 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initbifrost() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $0 = _Py_InitModule4(__str4, _BifrostMethods, 0, 0, 1013);
      __label__ = 1;
      break;
     case 1:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initbifrost"] = _initbifrost;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _run, 0 ]);
  function run(args) {
    __str = allocate([ 115, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 82, 117, 110, 110, 105, 110, 103, 58, 32, 37, 115, 10, 0 ], "i8", ALLOC_NORMAL);
    _BifrostMethods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_NORMAL);
    __str2 = allocate([ 114, 117, 110, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 82, 117, 110, 32, 106, 97, 118, 97, 115, 99, 114, 105, 112, 116, 32, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 98, 105, 102, 114, 111, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_BifrostMethods] = __str2;
    HEAP[_BifrostMethods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_BifrostMethods + 12] = __str3;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
