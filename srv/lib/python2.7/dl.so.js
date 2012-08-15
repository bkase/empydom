"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 64;
  var $1___SIZE = 16;
  var $2___SIZE = 16;
  var $3___SIZE = 196;
  var $4___SIZE = 32;
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
  var $struct_PyStringObject___SIZE = 24;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_dlobject___SIZE = 12;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var __str7;
  var _dlobject_methods;
  var __str8;
  var _Dltype;
  var __str9;
  var __str10;
  var __str11;
  var _Dlerror;
  var __str12;
  var _dl_methods;
  var __str13;
  var __str14;
  var __str15;
  var __str16;
  var __str17;
  var __str18;
  var __str19;
  var __str20;
  var __str21;
  var __str22;
  function _newdlobject($handle) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $handle_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $xp = __stackBase__ + 12;
      
      HEAP[$handle_addr] = $handle;
      var $1 = __PyObject_New(_Dltype);
      
      HEAP[$xp] = $1;
      
      
      if (HEAP[$xp] == 0) {
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
      
      var $6 = HEAP[$xp] + 8;
      var $7 = HEAP[$handle_addr];
      HEAP[$6] = $7;
      
      var $9 = HEAP[$xp];
      HEAP[$0] = $9;
      __label__ = 3;
      break;
     case 3:
      var $10 = HEAP[$0];
      HEAP[$retval] = $10;
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
  function _dl_dealloc($xp) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $xp_addr = __stackBase__;
      
      HEAP[$xp_addr] = $xp;
      
      
      
      
      if (HEAP[HEAP[$xp_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $7 = HEAP[HEAP[$xp_addr] + 8];
      var $8 = _dlclose($7);
      __label__ = 2;
      break;
     case 2:
      
      var $10 = HEAP[$xp_addr];
      _PyObject_Free($10);
      __label__ = 3;
      break;
     case 3:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dl_close($xp) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $xp_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$xp_addr] = $xp;
      
      
      
      
      if (HEAP[HEAP[$xp_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[HEAP[$xp_addr] + 8];
      var $9 = _dlclose($8);
      
      var $11 = HEAP[$xp_addr] + 8;
      HEAP[$11] = 0;
      __label__ = 2;
      break;
     case 2:
      
      var $13 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $13;
      HEAP[$0] = __Py_NoneStruct;
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
      __label__ = 3;
      break;
     case 3:
      var $retval2 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dl_sym($xp, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $xp_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $name = __stackBase__ + 16;
      var $func = __stackBase__ + 20;
      
      HEAP[$xp_addr] = $xp;
      HEAP[$args_addr] = $args;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$args_addr] + 4] + 84] & 134217728) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $11 = HEAP[$args_addr] + 20;
      HEAP[$name] = $11;
      
      
      
      var $15 = HEAP[HEAP[$xp_addr] + 8];
      var $16 = HEAP[$name];
      var $17 = _dlsym($15, $16);
      var $18 = $17;
      HEAP[$func] = $18;
      
      
      if (HEAP[$func] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      
      var $25 = HEAP[HEAP[HEAP[$args_addr] + 4] + 12];
      var $26 = HEAP[_PyExc_TypeError];
      var $27 = _PyErr_Format($26, __str, allocate([ $25, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 3:
      
      var $29 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $29;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 5;
      break;
     case 4:
      
      var $31 = HEAP[$func];
      var $32 = _PyInt_FromLong($31);
      HEAP[$0] = $32;
      __label__ = 5;
      break;
     case 5:
      var $33 = HEAP[$0];
      HEAP[$retval] = $33;
      __label__ = 6;
      break;
     case 6:
      var $retval5 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dl_call($xp, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 80;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 80);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $xp_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $name = __stackBase__ + 16;
      var $func = __stackBase__ + 20;
      var $alist = __stackBase__ + 24;
      var $res = __stackBase__ + 64;
      var $i = __stackBase__ + 68;
      var $n = __stackBase__ + 72;
      var $v = __stackBase__ + 76;
      
      HEAP[$xp_addr] = $xp;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyTuple_Size($1);
      HEAP[$n] = $2;
      
      
      if (HEAP[$n] <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($5, __str1);
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 2:
      var $6 = HEAP[$args_addr];
      var $7 = _PyTuple_GetItem($6, 0);
      HEAP[$name] = $7;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$name] + 4] + 84] & 134217728) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $15 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($15, __str2);
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 4:
      var $16 = HEAP[$name];
      var $17 = _PyString_AsString($16);
      
      
      
      var $21 = HEAP[HEAP[$xp_addr] + 8];
      var $22 = _dlsym($21, $17);
      var $23 = $22;
      HEAP[$func] = $23;
      
      
      if (HEAP[$func] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = _dlerror();
      var $27 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($27, $26);
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 6:
      
      
      
      if (HEAP[$n] - 1 > 10) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $31 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($31, __str3);
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 8:
      HEAP[$i] = 1;
      __label__ = 17;
      break;
     case 9:
      var $32 = HEAP[$args_addr];
      var $33 = HEAP[$i];
      var $34 = _PyTuple_GetItem($32, $33);
      HEAP[$v] = $34;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v] + 4] + 84] & 8388608) != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $43 = HEAP[$i] - 1;
      var $44 = HEAP[$v];
      var $45 = _PyInt_AsLong($44);
      var $46 = $alist + $43 * 4;
      HEAP[$46] = $45;
      __label__ = 16;
      break;
     case 11:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v] + 4] + 84] & 134217728) != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      var $55 = HEAP[$i] - 1;
      var $56 = HEAP[$v];
      var $57 = _PyString_AsString($56);
      var $58 = $57;
      var $59 = $alist + $55 * 4;
      HEAP[$59] = $58;
      __label__ = 16;
      break;
     case 13:
      
      
      if (HEAP[$v] == __Py_NoneStruct) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      var $64 = $alist + (HEAP[$i] - 1) * 4;
      HEAP[$64] = 0;
      __label__ = 16;
      break;
     case 15:
      var $65 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($65, __str4);
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 16:
      
      var $67 = HEAP[$i] + 1;
      HEAP[$i] = $67;
      __label__ = 17;
      break;
     case 17:
      
      
      
      if (HEAP[$i] < HEAP[$n]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      __label__ = 20;
      break;
     case 19:
      
      
      var $73 = $alist + (HEAP[$i] - 1) * 4;
      HEAP[$73] = 0;
      
      var $75 = HEAP[$i] + 1;
      HEAP[$i] = $75;
      __label__ = 20;
      break;
     case 20:
      
      
      if (HEAP[$i] <= 10) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      var $79 = HEAP[$alist + 36];
      
      var $81 = HEAP[$alist + 32];
      
      var $83 = HEAP[$alist + 28];
      
      var $85 = HEAP[$alist + 24];
      
      var $87 = HEAP[$alist + 20];
      
      var $89 = HEAP[$alist + 16];
      
      var $91 = HEAP[$alist + 12];
      
      var $93 = HEAP[$alist + 8];
      
      var $95 = HEAP[$alist + 4];
      
      var $97 = HEAP[$alist];
      var $98 = HEAP[$func];
      var $99 = FUNCTION_TABLE[$98]($97, $95, $93, $91, $89, $87, $85, $83, $81, $79);
      HEAP[$res] = $99;
      var $100 = HEAP[$res];
      var $101 = _PyInt_FromLong($100);
      HEAP[$0] = $101;
      __label__ = 22;
      break;
     case 22:
      var $102 = HEAP[$0];
      HEAP[$retval] = $102;
      __label__ = 23;
      break;
     case 23:
      var $retval22 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dl_getattr($xp, $name) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $xp_addr = __stackBase__;
      var $name_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$xp_addr] = $xp;
      HEAP[$name_addr] = $name;
      
      var $2 = HEAP[$xp_addr];
      var $3 = HEAP[$name_addr];
      var $4 = _Py_FindMethod(_dlobject_methods, $2, $3);
      HEAP[$0] = $4;
      var $5 = HEAP[$0];
      HEAP[$retval] = $5;
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
  function _dl_open($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $name = __stackBase__ + 16;
      var $mode = __stackBase__ + 20;
      var $handle = __stackBase__ + 24;
      var $errmsg = __stackBase__ + 28;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str9, allocate([ $name, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$mode] = 1;
      __label__ = 4;
      break;
     case 2:
      _PyErr_Clear();
      var $4 = HEAP[$args_addr];
      var $5 = _PyArg_ParseTuple($4, __str10, allocate([ $name, 0, 0, 0, $mode, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 4:
      var $7 = HEAP[$mode];
      var $8 = HEAP[$name];
      var $9 = _dlopen($8, $7);
      var $10 = $9;
      HEAP[$handle] = $10;
      
      
      if (HEAP[$handle] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $13 = _dlerror();
      HEAP[$errmsg] = $13;
      
      
      if (HEAP[$errmsg] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$errmsg] = __str11;
      __label__ = 7;
      break;
     case 7:
      var $16 = HEAP[_Dlerror];
      var $17 = HEAP[$errmsg];
      _PyErr_SetString($16, $17);
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 8:
      var $18 = HEAP[$handle];
      var $19 = _newdlobject($18);
      HEAP[$0] = $19;
      __label__ = 9;
      break;
     case 9:
      var $20 = HEAP[$0];
      HEAP[$retval] = $20;
      __label__ = 10;
      break;
     case 10:
      var $retval9 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _insint($d, $name, $value) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $d_addr = __stackBase__;
      var $name_addr = __stackBase__ + 4;
      var $value_addr = __stackBase__ + 8;
      var $v = __stackBase__ + 12;
      
      HEAP[$d_addr] = $d;
      HEAP[$name_addr] = $name;
      HEAP[$value_addr] = $value;
      var $0 = HEAP[$value_addr];
      var $1 = _PyInt_FromLong($0);
      HEAP[$v] = $1;
      
      
      if (HEAP[$v] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $4 = HEAP[$d_addr];
      var $5 = HEAP[$name_addr];
      var $6 = HEAP[$v];
      var $7 = _PyDict_SetItemString($4, $5, $6);
      
      if ($7 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      _PyErr_Clear();
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$v] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      var $14 = HEAP[HEAP[$v]] - 1;
      
      var $16 = HEAP[$v];
      HEAP[$16] = $14;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $25 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $26 = HEAP[$v];
      FUNCTION_TABLE[$25]($26);
      __label__ = 6;
      break;
     case 6:
      __label__ = 7;
      break;
     case 7:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initdl() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      var $d = __stackBase__ + 4;
      var $x = __stackBase__ + 8;
      
      
      
      if (HEAP[_Py_Py3kWarningFlag] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $2 = HEAP[_PyExc_DeprecationWarning];
      var $3 = _PyErr_WarnEx($2, __str13, 2);
      
      if ($3 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      HEAP[_Dltype + 4] = _PyType_Type;
      var $6 = _Py_InitModule4(__str14, _dl_methods, 0, 0, 1013);
      HEAP[$m] = $6;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $9 = HEAP[$m];
      var $10 = _PyModule_GetDict($9);
      HEAP[$d] = $10;
      var $11 = _PyErr_NewException(__str15, 0, 0);
      HEAP[$x] = $11;
      var $12 = HEAP[$x];
      HEAP[_Dlerror] = $12;
      var $13 = HEAP[$d];
      var $14 = HEAP[$x];
      var $15 = _PyDict_SetItemString($13, __str16, $14);
      var $16 = _PyInt_FromLong(1);
      HEAP[$x] = $16;
      var $17 = HEAP[$d];
      var $18 = HEAP[$x];
      var $19 = _PyDict_SetItemString($17, __str17, $18);
      var $20 = HEAP[$d];
      _insint($20, __str18, 2);
      var $21 = HEAP[$d];
      _insint($21, __str19, 4);
      var $22 = HEAP[$d];
      _insint($22, __str20, 256);
      var $23 = HEAP[$d];
      _insint($23, __str21, 0);
      var $24 = HEAP[$d];
      _insint($24, __str22, 4096);
      __label__ = 4;
      break;
     case 4:
      __label__ = 5;
      break;
     case 5:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initdl"] = _initdl;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _dl_call, 0, _dl_sym, 0, _dl_close, 0, _dl_dealloc, 0, _dl_getattr, 0, _dl_open, 0 ]);
  function run(args) {
    __str = allocate([ 101, 120, 112, 101, 99, 116, 101, 100, 32, 115, 116, 114, 105, 110, 103, 44, 32, 102, 111, 117, 110, 100, 32, 37, 46, 50, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 97, 116, 32, 108, 101, 97, 115, 116, 32, 97, 32, 110, 97, 109, 101, 32, 105, 115, 32, 110, 101, 101, 100, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 102, 117, 110, 99, 116, 105, 111, 110, 32, 110, 97, 109, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 116, 111, 111, 32, 109, 97, 110, 121, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 40, 109, 97, 120, 32, 49, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 116, 44, 32, 115, 116, 114, 105, 110, 103, 32, 111, 114, 32, 78, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 99, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 115, 121, 109, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 99, 108, 111, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    _dlobject_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str8 = allocate([ 100, 108, 46, 100, 108, 0 ], "i8", ALLOC_NORMAL);
    _Dltype = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str9 = allocate([ 122, 58, 111, 112, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 122, 105, 58, 111, 112, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 100, 108, 111, 112, 101, 110, 40, 41, 32, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _Dlerror = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str12 = allocate([ 111, 112, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    _dl_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str13 = allocate([ 116, 104, 101, 32, 100, 108, 32, 109, 111, 100, 117, 108, 101, 32, 104, 97, 115, 32, 98, 101, 101, 110, 32, 114, 101, 109, 111, 118, 101, 100, 32, 105, 110, 32, 80, 121, 116, 104, 111, 110, 32, 51, 46, 48, 59, 32, 117, 115, 101, 32, 116, 104, 101, 32, 99, 116, 121, 112, 101, 115, 32, 109, 111, 100, 117, 108, 101, 32, 105, 110, 115, 116, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 100, 108, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 100, 108, 46, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 82, 84, 76, 68, 95, 76, 65, 90, 89, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 82, 84, 76, 68, 95, 78, 79, 87, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 82, 84, 76, 68, 95, 78, 79, 76, 79, 65, 68, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 82, 84, 76, 68, 95, 71, 76, 79, 66, 65, 76, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 82, 84, 76, 68, 95, 76, 79, 67, 65, 76, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 82, 84, 76, 68, 95, 78, 79, 68, 69, 76, 69, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_dlobject_methods] = __str5;
    HEAP[_dlobject_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_dlobject_methods + 16] = __str6;
    HEAP[_dlobject_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_dlobject_methods + 32] = __str7;
    HEAP[_dlobject_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_Dltype + 12] = __str8;
    HEAP[_Dltype + 24] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_Dltype + 32] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_dl_methods] = __str12;
    HEAP[_dl_methods + 4] = FUNCTION_TABLE_OFFSET + 12;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
