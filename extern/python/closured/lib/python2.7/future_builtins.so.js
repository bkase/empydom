"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 64;
  var $1___SIZE = 16;
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
  var _module_doc;
  var _hex_doc;
  var _oct_doc;
  var _ascii_doc;
  var __str;
  var __str1;
  var __str2;
  var _module_functions;
  var _C_0_8290;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var __str7;
  function _builtin_hex($self, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $v_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $self;
      HEAP[$v_addr] = $v;
      var $1 = HEAP[$v_addr];
      var $2 = _PyNumber_ToBase($1, 16);
      HEAP[$0] = $2;
      var $3 = HEAP[$0];
      HEAP[$retval] = $3;
      __label__ = 1;
      break;
     case 1:
      var $retval1 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval1;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _builtin_oct($self, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $v_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $self;
      HEAP[$v_addr] = $v;
      var $1 = HEAP[$v_addr];
      var $2 = _PyNumber_ToBase($1, 8);
      HEAP[$0] = $2;
      var $3 = HEAP[$0];
      HEAP[$retval] = $3;
      __label__ = 1;
      break;
     case 1:
      var $retval1 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval1;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _builtin_ascii($self, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $v_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $self;
      HEAP[$v_addr] = $v;
      var $1 = HEAP[$v_addr];
      var $2 = _PyObject_Repr($1);
      HEAP[$0] = $2;
      var $3 = HEAP[$0];
      HEAP[$retval] = $3;
      __label__ = 1;
      break;
     case 1:
      var $retval1 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval1;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initfuture_builtins() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      var $itertools = __stackBase__ + 4;
      var $iter_func = __stackBase__ + 8;
      var $it_funcs = __stackBase__ + 12;
      var $cur_func = __stackBase__ + 28;
      
      
      var $1 = HEAP[_C_0_8290];
      HEAP[$it_funcs] = $1;
      
      var $3 = HEAP[_C_0_8290 + 4];
      HEAP[$it_funcs + 4] = $3;
      
      var $5 = HEAP[_C_0_8290 + 8];
      HEAP[$it_funcs + 8] = $5;
      
      var $7 = HEAP[_C_0_8290 + 12];
      HEAP[$it_funcs + 12] = $7;
      var $8 = _Py_InitModule4(__str6, _module_functions, _module_doc, 0, 1013);
      HEAP[$m] = $8;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $11 = _PyImport_ImportModuleNoBlock(__str7);
      HEAP[$itertools] = $11;
      
      
      if (HEAP[$itertools] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      HEAP[$cur_func] = $it_funcs;
      __label__ = 6;
      break;
     case 3:
      
      var $15 = HEAP[HEAP[$cur_func]];
      var $16 = HEAP[$itertools];
      var $17 = _PyObject_GetAttrString($16, $15);
      HEAP[$iter_func] = $17;
      
      
      if (HEAP[$iter_func] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      var $22 = HEAP[HEAP[$cur_func]] + 1;
      var $23 = HEAP[$m];
      var $24 = HEAP[$iter_func];
      var $25 = _PyModule_AddObject($23, $22, $24);
      
      if ($25 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $28 = HEAP[$cur_func] + 4;
      HEAP[$cur_func] = $28;
      __label__ = 6;
      break;
     case 6:
      
      
      
      if (HEAP[HEAP[$cur_func]] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $35 = HEAP[HEAP[$itertools]] - 1;
      
      var $37 = HEAP[$itertools];
      HEAP[$37] = $35;
      
      
      
      
      if (HEAP[HEAP[$itertools]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$itertools] + 4] + 24];
      var $47 = HEAP[$itertools];
      FUNCTION_TABLE[$46]($47);
      __label__ = 9;
      break;
     case 9:
      __label__ = 10;
      break;
     case 10:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initfuture_builtins"] = _initfuture_builtins;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _builtin_hex, 0, _builtin_oct, 0, _builtin_ascii, 0 ]);
  function run(args) {
    _module_doc = allocate([ 84, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 112, 114, 111, 118, 105, 100, 101, 115, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 116, 104, 97, 116, 32, 119, 105, 108, 108, 32, 98, 101, 32, 98, 117, 105, 108, 116, 105, 110, 115, 32, 105, 110, 32, 80, 121, 116, 104, 111, 110, 32, 51, 46, 48, 44, 10, 98, 117, 116, 32, 116, 104, 97, 116, 32, 99, 111, 110, 102, 108, 105, 99, 116, 32, 119, 105, 116, 104, 32, 98, 117, 105, 108, 116, 105, 110, 115, 32, 116, 104, 97, 116, 32, 97, 108, 114, 101, 97, 100, 121, 32, 101, 120, 105, 115, 116, 32, 105, 110, 32, 80, 121, 116, 104, 111, 110, 32, 50, 46, 120, 46, 10, 10, 70, 117, 110, 99, 116, 105, 111, 110, 115, 58, 10, 10, 97, 115, 99, 105, 105, 40, 97, 114, 103, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 99, 97, 110, 111, 110, 105, 99, 97, 108, 32, 115, 116, 114, 105, 110, 103, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 97, 110, 32, 111, 98, 106, 101, 99, 116, 46, 10, 102, 105, 108, 116, 101, 114, 40, 112, 114, 101, 100, 44, 32, 105, 116, 101, 114, 97, 98, 108, 101, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 115, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 121, 105, 101, 108, 100, 105, 110, 103, 32, 116, 104, 111, 115, 101, 32, 105, 116, 101, 109, 115, 32, 111, 102, 32, 10, 32, 32, 32, 32, 32, 32, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 102, 111, 114, 32, 119, 104, 105, 99, 104, 32, 112, 114, 101, 100, 40, 105, 116, 101, 109, 41, 32, 105, 115, 32, 116, 114, 117, 101, 46, 10, 104, 101, 120, 40, 97, 114, 103, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 104, 101, 120, 97, 100, 101, 99, 105, 109, 97, 108, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 46, 10, 109, 97, 112, 40, 102, 117, 110, 99, 44, 32, 42, 105, 116, 101, 114, 97, 98, 108, 101, 115, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 115, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 116, 104, 97, 116, 32, 99, 111, 109, 112, 117, 116, 101, 115, 32, 116, 104, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 10, 32, 32, 32, 32, 117, 115, 105, 110, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 32, 101, 97, 99, 104, 32, 111, 102, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 115, 46, 10, 111, 99, 116, 40, 97, 114, 103, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 111, 99, 116, 97, 108, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 46, 10, 122, 105, 112, 40, 105, 116, 101, 114, 49, 32, 91, 44, 105, 116, 101, 114, 50, 32, 91, 46, 46, 46, 93, 93, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 115, 32, 97, 32, 122, 105, 112, 32, 111, 98, 106, 101, 99, 116, 32, 119, 104, 111, 115, 101, 32, 46, 110, 101, 120, 116, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 115, 32, 97, 32, 116, 117, 112, 108, 101, 32, 119, 104, 101, 114, 101, 32, 116, 104, 101, 32, 105, 45, 116, 104, 32, 101, 108, 101, 109, 101, 110, 116, 32, 99, 111, 109, 101, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 105, 45, 116, 104, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 10, 32, 32, 32, 32, 97, 114, 103, 117, 109, 101, 110, 116, 46, 10, 10, 84, 104, 101, 32, 116, 121, 112, 105, 99, 97, 108, 32, 117, 115, 97, 103, 101, 32, 111, 102, 32, 116, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 105, 115, 32, 116, 111, 32, 114, 101, 112, 108, 97, 99, 101, 32, 101, 120, 105, 115, 116, 105, 110, 103, 32, 98, 117, 105, 108, 116, 105, 110, 115, 32, 105, 110, 32, 97, 10, 109, 111, 100, 117, 108, 101, 39, 115, 32, 110, 97, 109, 101, 115, 112, 97, 99, 101, 58, 10, 32, 10, 102, 114, 111, 109, 32, 102, 117, 116, 117, 114, 101, 95, 98, 117, 105, 108, 116, 105, 110, 115, 32, 105, 109, 112, 111, 114, 116, 32, 97, 115, 99, 105, 105, 44, 32, 102, 105, 108, 116, 101, 114, 44, 32, 109, 97, 112, 44, 32, 104, 101, 120, 44, 32, 111, 99, 116, 44, 32, 122, 105, 112, 10, 0 ], "i8", ALLOC_NORMAL);
    _hex_doc = allocate([ 104, 101, 120, 40, 110, 117, 109, 98, 101, 114, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 101, 120, 97, 100, 101, 99, 105, 109, 97, 108, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 32, 111, 114, 32, 108, 111, 110, 103, 32, 105, 110, 116, 101, 103, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    _oct_doc = allocate([ 111, 99, 116, 40, 110, 117, 109, 98, 101, 114, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 111, 99, 116, 97, 108, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 32, 111, 114, 32, 108, 111, 110, 103, 32, 105, 110, 116, 101, 103, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    _ascii_doc = allocate([ 97, 115, 99, 105, 105, 40, 111, 98, 106, 101, 99, 116, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 97, 115, 32, 114, 101, 112, 114, 40, 41, 46, 32, 32, 73, 110, 32, 80, 121, 116, 104, 111, 110, 32, 51, 46, 120, 44, 32, 116, 104, 101, 32, 114, 101, 112, 114, 40, 41, 32, 114, 101, 115, 117, 108, 116, 32, 119, 105, 108, 108, 10, 99, 111, 110, 116, 97, 105, 110, 32, 112, 114, 105, 110, 116, 97, 98, 108, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 32, 117, 110, 101, 115, 99, 97, 112, 101, 100, 44, 32, 119, 104, 105, 108, 101, 32, 116, 104, 101, 32, 97, 115, 99, 105, 105, 40, 41, 32, 114, 101, 115, 117, 108, 116, 10, 119, 105, 108, 108, 32, 104, 97, 118, 101, 32, 115, 117, 99, 104, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 32, 98, 97, 99, 107, 115, 108, 97, 115, 104, 45, 101, 115, 99, 97, 112, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 104, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 111, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 97, 115, 99, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    _module_functions = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _C_0_8290 = allocate(16, "i8*", ALLOC_NORMAL);
    __str3 = allocate([ 105, 109, 97, 112, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 105, 102, 105, 108, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 105, 122, 105, 112, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 102, 117, 116, 117, 114, 101, 95, 98, 117, 105, 108, 116, 105, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_module_functions] = __str;
    HEAP[_module_functions + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_module_functions + 12] = _hex_doc;
    HEAP[_module_functions + 16] = __str1;
    HEAP[_module_functions + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_module_functions + 28] = _oct_doc;
    HEAP[_module_functions + 32] = __str2;
    HEAP[_module_functions + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_module_functions + 44] = _ascii_doc;
    HEAP[_C_0_8290] = __str3;
    HEAP[_C_0_8290 + 4] = __str4;
    HEAP[_C_0_8290 + 8] = __str5;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
