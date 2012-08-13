"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 80;
  var $1___SIZE = 20;
  var $2___SIZE = 40;
  var $3___SIZE = 20;
  var $4___SIZE = 48;
  var $5___SIZE = 16;
  var $6___SIZE = 16;
  var $7___SIZE = 196;
  var $8___SIZE = 32;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_partialobject___SIZE = 28;
  var __str;
  var __str1;
  var __str2;
  var _reduce_doc;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var ___PRETTY_FUNCTION___8536;
  var __str7;
  var __str8;
  var _partial_doc;
  var __str9;
  var __str10;
  var __str11;
  var __str12;
  var __str13;
  var __str14;
  var _partial_memberlist;
  var __str15;
  var __str16;
  var __str17;
  var _partial_getsetlist;
  var __str18;
  var __str19;
  var __str20;
  var __str21;
  var _partial_methods;
  var __str22;
  var _partial_type;
  var _module_doc;
  var _module_methods;
  var _C_44_8838;
  var __str23;
  var __str24;
  var ___PRETTY_FUNCTION___8834;
  function _functools_reduce($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $seq = __stackBase__ + 16;
      var $func = __stackBase__ + 20;
      var $result = __stackBase__ + 24;
      var $it = __stackBase__ + 28;
      var $op2 = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$result] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str, 2, 3, allocate([ $func, 0, 0, 0, $seq, 0, 0, 0, $result, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 36;
      break;
     case 2:
      
      
      if (HEAP[$result] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $9 = HEAP[HEAP[$result]] + 1;
      var $10 = HEAP[$result];
      HEAP[$10] = $9;
      __label__ = 4;
      break;
     case 4:
      var $11 = HEAP[$seq];
      var $12 = _PyObject_GetIter($11);
      HEAP[$it] = $12;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      var $15 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($15, __str1);
      
      
      if (HEAP[$result] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      var $18 = HEAP[$result];
      
      
      var $21 = HEAP[$18] - 1;
      var $22 = $18;
      HEAP[$22] = $21;
      
      
      
      if (HEAP[$18] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $31 = HEAP[$result];
      FUNCTION_TABLE[$30]($31);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = 0;
      __label__ = 36;
      break;
     case 9:
      var $32 = _PyTuple_New(2);
      HEAP[$args_addr] = $32;
      
      
      if (HEAP[$args_addr] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      if (HEAP[HEAP[$args_addr]] > 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      var $42 = HEAP[HEAP[$args_addr]] - 1;
      
      var $44 = HEAP[$args_addr];
      HEAP[$44] = $42;
      
      
      
      
      if (HEAP[HEAP[$args_addr]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $53 = HEAP[HEAP[HEAP[$args_addr] + 4] + 24];
      var $54 = HEAP[$args_addr];
      FUNCTION_TABLE[$53]($54);
      __label__ = 13;
      break;
     case 13:
      var $55 = _PyTuple_New(2);
      HEAP[$args_addr] = $55;
      
      
      if (HEAP[$args_addr] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      var $58 = HEAP[$it];
      var $59 = _PyIter_Next($58);
      HEAP[$op2] = $59;
      
      
      if (HEAP[$op2] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      var $62 = _PyErr_Occurred();
      
      if ($62 != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      var $67 = HEAP[HEAP[$args_addr]] - 1;
      
      var $69 = HEAP[$args_addr];
      HEAP[$69] = $67;
      
      
      
      
      if (HEAP[HEAP[$args_addr]] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 17:
      
      
      if (HEAP[$result] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $76 = HEAP[$op2];
      HEAP[$result] = $76;
      __label__ = 20;
      break;
     case 19:
      var $77 = HEAP[$result];
      var $78 = HEAP[$args_addr];
      var $79 = _PyTuple_SetItem($78, 0, $77);
      var $80 = HEAP[$args_addr];
      var $81 = HEAP[$op2];
      var $82 = _PyTuple_SetItem($80, 1, $81);
      var $83 = HEAP[$func];
      var $84 = HEAP[$args_addr];
      var $85 = _PyEval_CallObjectWithKeywords($83, $84, 0);
      HEAP[$result] = $85;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      __label__ = 10;
      break;
     case 21:
      
      
      
      
      var $92 = HEAP[HEAP[HEAP[$args_addr] + 4] + 24];
      var $93 = HEAP[$args_addr];
      FUNCTION_TABLE[$92]($93);
      __label__ = 22;
      break;
     case 22:
      
      
      if (HEAP[$result] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      var $96 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($96, __str2);
      __label__ = 24;
      break;
     case 24:
      
      
      
      var $100 = HEAP[HEAP[$it]] - 1;
      
      var $102 = HEAP[$it];
      HEAP[$102] = $100;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $111 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $112 = HEAP[$it];
      FUNCTION_TABLE[$111]($112);
      __label__ = 26;
      break;
     case 26:
      var $113 = HEAP[$result];
      HEAP[$0] = $113;
      __label__ = 36;
      break;
     case 27:
      
      
      if (HEAP[$args_addr] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      
      
      
      var $119 = HEAP[HEAP[$args_addr]] - 1;
      
      var $121 = HEAP[$args_addr];
      HEAP[$121] = $119;
      
      
      
      
      if (HEAP[HEAP[$args_addr]] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $130 = HEAP[HEAP[HEAP[$args_addr] + 4] + 24];
      var $131 = HEAP[$args_addr];
      FUNCTION_TABLE[$130]($131);
      __label__ = 30;
      break;
     case 30:
      
      
      if (HEAP[$result] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 31:
      var $134 = HEAP[$result];
      
      
      var $137 = HEAP[$134] - 1;
      var $138 = $134;
      HEAP[$138] = $137;
      
      
      
      if (HEAP[$134] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      var $146 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $147 = HEAP[$result];
      FUNCTION_TABLE[$146]($147);
      __label__ = 33;
      break;
     case 33:
      
      
      
      var $151 = HEAP[HEAP[$it]] - 1;
      
      var $153 = HEAP[$it];
      HEAP[$153] = $151;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $162 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $163 = HEAP[$it];
      FUNCTION_TABLE[$162]($163);
      __label__ = 35;
      break;
     case 35:
      HEAP[$0] = 0;
      __label__ = 36;
      break;
     case 36:
      var $164 = HEAP[$0];
      HEAP[$retval] = $164;
      __label__ = 37;
      break;
     case 37:
      var $retval35 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval35;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _partial_new($type, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $func = __stackBase__ + 20;
      var $pto = __stackBase__ + 24;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      
      
      
      
      
      if (HEAP[HEAP[$args_addr] + 8] <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $6 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($6, __str3);
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 2:
      
      
      
      
      var $11 = HEAP[HEAP[$args_addr] + 12];
      HEAP[$func] = $11;
      var $12 = HEAP[$func];
      var $13 = _PyCallable_Check($12);
      
      if ($13 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $15 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($15, __str4);
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 4:
      
      
      var $18 = HEAP[HEAP[$type_addr] + 152];
      var $19 = HEAP[$type_addr];
      var $20 = FUNCTION_TABLE[$18]($19, 0);
      var $21 = $20;
      HEAP[$pto] = $21;
      
      
      if (HEAP[$pto] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 6:
      
      var $25 = HEAP[$pto] + 8;
      var $26 = HEAP[$func];
      HEAP[$25] = $26;
      
      
      
      var $30 = HEAP[HEAP[$func]] + 1;
      
      var $32 = HEAP[$func];
      HEAP[$32] = $30;
      var $33 = HEAP[$args_addr];
      var $34 = _PyTuple_GetSlice($33, 1, 2147483647);
      
      var $36 = HEAP[$pto] + 12;
      HEAP[$36] = $34;
      
      
      
      
      if (HEAP[HEAP[$pto] + 12] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      var $42 = HEAP[$pto] + 16;
      HEAP[$42] = 0;
      
      var $44 = HEAP[$pto];
      
      
      var $47 = HEAP[$44] - 1;
      var $48 = $44;
      HEAP[$48] = $47;
      
      
      
      if (HEAP[$44] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[$pto] + 4] + 24];
      
      var $59 = HEAP[$pto];
      FUNCTION_TABLE[$57]($59);
      __label__ = 9;
      break;
     case 9:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 10:
      
      
      if (HEAP[$kw_addr] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 11:
      var $62 = HEAP[$kw_addr];
      var $63 = _PyDict_Copy($62);
      
      var $65 = HEAP[$pto] + 16;
      HEAP[$65] = $63;
      
      
      
      
      if (HEAP[HEAP[$pto] + 16] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      var $71 = HEAP[$pto];
      
      
      var $74 = HEAP[$71] - 1;
      var $75 = $71;
      HEAP[$75] = $74;
      
      
      
      if (HEAP[$71] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      var $84 = HEAP[HEAP[HEAP[$pto] + 4] + 24];
      
      var $86 = HEAP[$pto];
      FUNCTION_TABLE[$84]($86);
      __label__ = 14;
      break;
     case 14:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 15:
      __label__ = 17;
      break;
     case 16:
      
      var $88 = HEAP[$pto] + 16;
      HEAP[$88] = __Py_NoneStruct;
      
      var $90 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $90;
      __label__ = 17;
      break;
     case 17:
      
      var $92 = HEAP[$pto] + 24;
      HEAP[$92] = 0;
      
      var $94 = HEAP[$pto] + 20;
      HEAP[$94] = 0;
      
      var $96 = HEAP[$pto];
      HEAP[$0] = $96;
      __label__ = 18;
      break;
     case 18:
      var $97 = HEAP[$0];
      HEAP[$retval] = $97;
      __label__ = 19;
      break;
     case 19:
      var $retval18 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _partial_dealloc($pto) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pto_addr = __stackBase__;
      
      HEAP[$pto_addr] = $pto;
      
      var $1 = HEAP[$pto_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$pto_addr] + 24] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $7 = HEAP[$pto_addr];
      _PyObject_ClearWeakRefs($7);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$pto_addr] + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $14 = HEAP[HEAP[$pto_addr] + 8];
      
      
      var $17 = HEAP[$14] - 1;
      var $18 = $14;
      HEAP[$18] = $17;
      
      
      
      if (HEAP[$14] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $28 = HEAP[HEAP[HEAP[HEAP[$pto_addr] + 8] + 4] + 24];
      
      
      var $31 = HEAP[HEAP[$pto_addr] + 8];
      FUNCTION_TABLE[$28]($31);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[HEAP[$pto_addr] + 12] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $38 = HEAP[HEAP[$pto_addr] + 12];
      
      
      var $41 = HEAP[$38] - 1;
      var $42 = $38;
      HEAP[$42] = $41;
      
      
      
      if (HEAP[$38] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $52 = HEAP[HEAP[HEAP[HEAP[$pto_addr] + 12] + 4] + 24];
      
      
      var $55 = HEAP[HEAP[$pto_addr] + 12];
      FUNCTION_TABLE[$52]($55);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      if (HEAP[HEAP[$pto_addr] + 16] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      var $62 = HEAP[HEAP[$pto_addr] + 16];
      
      
      var $65 = HEAP[$62] - 1;
      var $66 = $62;
      HEAP[$66] = $65;
      
      
      
      if (HEAP[$62] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      var $76 = HEAP[HEAP[HEAP[HEAP[$pto_addr] + 16] + 4] + 24];
      
      
      var $79 = HEAP[HEAP[$pto_addr] + 16];
      FUNCTION_TABLE[$76]($79);
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      if (HEAP[HEAP[$pto_addr] + 20] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      var $86 = HEAP[HEAP[$pto_addr] + 20];
      
      
      var $89 = HEAP[$86] - 1;
      var $90 = $86;
      HEAP[$90] = $89;
      
      
      
      if (HEAP[$86] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      
      var $100 = HEAP[HEAP[HEAP[HEAP[$pto_addr] + 20] + 4] + 24];
      
      
      var $103 = HEAP[HEAP[$pto_addr] + 20];
      FUNCTION_TABLE[$100]($103);
      __label__ = 14;
      break;
     case 14:
      
      
      
      
      
      var $109 = HEAP[HEAP[HEAP[$pto_addr] + 4] + 160];
      
      var $111 = HEAP[$pto_addr];
      FUNCTION_TABLE[$109]($111);
      __label__ = 15;
      break;
     case 15:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _partial_call($pto, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pto_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $ret = __stackBase__ + 20;
      var $argappl = __stackBase__ + 24;
      var $kwappl = __stackBase__ + 28;
      
      HEAP[$pto_addr] = $pto;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$argappl] = 0;
      HEAP[$kwappl] = 0;
      
      
      var $3 = HEAP[HEAP[$pto_addr] + 8];
      var $4 = _PyCallable_Check($3);
      
      if ($4 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str5, __str6, 171, ___PRETTY_FUNCTION___8536);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[HEAP[$pto_addr] + 12] + 4] + 84] & 67108864) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str7, __str6, 172, ___PRETTY_FUNCTION___8536);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      
      if (HEAP[HEAP[$pto_addr] + 16] != __Py_NoneStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[HEAP[$pto_addr] + 16] + 4] + 84] & 536870912) == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      ___assert_fail(__str8, __str6, 173, ___PRETTY_FUNCTION___8536);
      throw "Reached an unreachable!";
     case 7:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$pto_addr] + 12] + 8] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $35 = HEAP[$args_addr];
      HEAP[$argappl] = $35;
      
      
      
      var $39 = HEAP[HEAP[$args_addr]] + 1;
      
      var $41 = HEAP[$args_addr];
      HEAP[$41] = $39;
      __label__ = 13;
      break;
     case 9:
      
      
      
      
      
      if (HEAP[HEAP[$args_addr] + 8] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      var $49 = HEAP[HEAP[$pto_addr] + 12];
      HEAP[$argappl] = $49;
      
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$pto_addr] + 12]] + 1;
      var $56 = HEAP[HEAP[$pto_addr] + 12];
      HEAP[$56] = $55;
      __label__ = 13;
      break;
     case 11:
      
      
      var $59 = HEAP[HEAP[$pto_addr] + 12];
      var $60 = HEAP[$args_addr];
      var $61 = _PySequence_Concat($59, $60);
      HEAP[$argappl] = $61;
      
      
      if (HEAP[$argappl] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 13:
      
      
      
      
      if (HEAP[HEAP[$pto_addr] + 16] == __Py_NoneStruct) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      var $68 = HEAP[$kw_addr];
      HEAP[$kwappl] = $68;
      
      
      if (HEAP[$kw_addr] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      var $74 = HEAP[HEAP[$kw_addr]] + 1;
      
      var $76 = HEAP[$kw_addr];
      HEAP[$76] = $74;
      __label__ = 16;
      break;
     case 16:
      __label__ = 28;
      break;
     case 17:
      
      
      var $79 = HEAP[HEAP[$pto_addr] + 16];
      var $80 = _PyDict_Copy($79);
      HEAP[$kwappl] = $80;
      
      
      if (HEAP[$kwappl] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      
      
      
      var $86 = HEAP[HEAP[$argappl]] - 1;
      
      var $88 = HEAP[$argappl];
      HEAP[$88] = $86;
      
      
      
      
      if (HEAP[HEAP[$argappl]] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $97 = HEAP[HEAP[HEAP[$argappl] + 4] + 24];
      var $98 = HEAP[$argappl];
      FUNCTION_TABLE[$97]($98);
      __label__ = 20;
      break;
     case 20:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 21:
      
      
      if (HEAP[$kw_addr] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 22:
      var $101 = HEAP[$kwappl];
      var $102 = HEAP[$kw_addr];
      var $103 = _PyDict_Merge($101, $102, 1);
      
      if ($103 != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 23:
      
      
      
      var $108 = HEAP[HEAP[$argappl]] - 1;
      
      var $110 = HEAP[$argappl];
      HEAP[$110] = $108;
      
      
      
      
      if (HEAP[HEAP[$argappl]] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $119 = HEAP[HEAP[HEAP[$argappl] + 4] + 24];
      var $120 = HEAP[$argappl];
      FUNCTION_TABLE[$119]($120);
      __label__ = 25;
      break;
     case 25:
      
      
      
      var $124 = HEAP[HEAP[$kwappl]] - 1;
      
      var $126 = HEAP[$kwappl];
      HEAP[$126] = $124;
      
      
      
      
      if (HEAP[HEAP[$kwappl]] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $135 = HEAP[HEAP[HEAP[$kwappl] + 4] + 24];
      var $136 = HEAP[$kwappl];
      FUNCTION_TABLE[$135]($136);
      __label__ = 27;
      break;
     case 27:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 28:
      
      
      var $139 = HEAP[HEAP[$pto_addr] + 8];
      var $140 = HEAP[$argappl];
      var $141 = HEAP[$kwappl];
      var $142 = _PyObject_Call($139, $140, $141);
      HEAP[$ret] = $142;
      
      
      
      var $146 = HEAP[HEAP[$argappl]] - 1;
      
      var $148 = HEAP[$argappl];
      HEAP[$148] = $146;
      
      
      
      
      if (HEAP[HEAP[$argappl]] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $157 = HEAP[HEAP[HEAP[$argappl] + 4] + 24];
      var $158 = HEAP[$argappl];
      FUNCTION_TABLE[$157]($158);
      __label__ = 30;
      break;
     case 30:
      
      
      if (HEAP[$kwappl] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 31:
      
      
      
      var $164 = HEAP[HEAP[$kwappl]] - 1;
      
      var $166 = HEAP[$kwappl];
      HEAP[$166] = $164;
      
      
      
      
      if (HEAP[HEAP[$kwappl]] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      var $175 = HEAP[HEAP[HEAP[$kwappl] + 4] + 24];
      var $176 = HEAP[$kwappl];
      FUNCTION_TABLE[$175]($176);
      __label__ = 33;
      break;
     case 33:
      var $177 = HEAP[$ret];
      HEAP[$0] = $177;
      __label__ = 34;
      break;
     case 34:
      var $178 = HEAP[$0];
      HEAP[$retval] = $178;
      __label__ = 35;
      break;
     case 35:
      var $retval34 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval34;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _partial_traverse($pto, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pto_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      var $vret8 = __stackBase__ + 28;
      var $vret12 = __stackBase__ + 32;
      
      HEAP[$pto_addr] = $pto;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$pto_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$pto_addr] + 8];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 13;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$pto_addr] + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$pto_addr] + 12];
      var $21 = HEAP[$visit_addr];
      var $22 = HEAP[$arg_addr];
      var $23 = FUNCTION_TABLE[$21]($20, $22);
      HEAP[$vret4] = $23;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = HEAP[$vret4];
      HEAP[$0] = $26;
      __label__ = 13;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$pto_addr] + 16] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $33 = HEAP[HEAP[$pto_addr] + 16];
      var $34 = HEAP[$visit_addr];
      var $35 = HEAP[$arg_addr];
      var $36 = FUNCTION_TABLE[$34]($33, $35);
      HEAP[$vret8] = $36;
      
      
      if (HEAP[$vret8] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $39 = HEAP[$vret8];
      HEAP[$0] = $39;
      __label__ = 13;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$pto_addr] + 20] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $46 = HEAP[HEAP[$pto_addr] + 20];
      var $47 = HEAP[$visit_addr];
      var $48 = HEAP[$arg_addr];
      var $49 = FUNCTION_TABLE[$47]($46, $48);
      HEAP[$vret12] = $49;
      
      
      if (HEAP[$vret12] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $52 = HEAP[$vret12];
      HEAP[$0] = $52;
      __label__ = 13;
      break;
     case 12:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 13:
      var $53 = HEAP[$0];
      HEAP[$retval] = $53;
      __label__ = 14;
      break;
     case 14:
      var $retval16 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _partial_get_dict($pto) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pto_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$pto_addr] = $pto;
      
      
      
      
      if (HEAP[HEAP[$pto_addr] + 20] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyDict_New();
      
      var $7 = HEAP[$pto_addr] + 20;
      HEAP[$7] = $5;
      
      
      
      
      if (HEAP[HEAP[$pto_addr] + 20] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 4;
      break;
     case 3:
      
      
      
      
      
      var $17 = HEAP[HEAP[HEAP[$pto_addr] + 20]] + 1;
      var $18 = HEAP[HEAP[$pto_addr] + 20];
      HEAP[$18] = $17;
      
      
      var $21 = HEAP[HEAP[$pto_addr] + 20];
      HEAP[$0] = $21;
      __label__ = 4;
      break;
     case 4:
      var $22 = HEAP[$0];
      HEAP[$retval] = $22;
      __label__ = 5;
      break;
     case 5:
      var $retval4 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _partial_set_dict($pto, $value) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pto_addr = __stackBase__;
      var $value_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $tmp = __stackBase__ + 16;
      
      HEAP[$pto_addr] = $pto;
      HEAP[$value_addr] = $value;
      
      
      if (HEAP[$value_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($3, __str15);
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$value_addr] + 4] + 84] & 536870912) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($11, __str16);
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 4:
      
      
      var $14 = HEAP[HEAP[$pto_addr] + 20];
      HEAP[$tmp] = $14;
      
      
      
      var $18 = HEAP[HEAP[$value_addr]] + 1;
      
      var $20 = HEAP[$value_addr];
      HEAP[$20] = $18;
      
      var $22 = HEAP[$pto_addr] + 20;
      var $23 = HEAP[$value_addr];
      HEAP[$22] = $23;
      
      
      if (HEAP[$tmp] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      var $29 = HEAP[HEAP[$tmp]] - 1;
      
      var $31 = HEAP[$tmp];
      HEAP[$31] = $29;
      
      
      
      
      if (HEAP[HEAP[$tmp]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $40 = HEAP[HEAP[HEAP[$tmp] + 4] + 24];
      var $41 = HEAP[$tmp];
      FUNCTION_TABLE[$40]($41);
      __label__ = 7;
      break;
     case 7:
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 8:
      var $42 = HEAP[$0];
      HEAP[$retval] = $42;
      __label__ = 9;
      break;
     case 9:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _partial_reduce($pto, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pto_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_33 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$pto_addr] = $pto;
      HEAP[$unused_addr] = $unused;
      
      
      
      
      if (HEAP[HEAP[$pto_addr] + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$pto_addr] + 20];
      HEAP[$iftmp_33] = $7;
      __label__ = 3;
      break;
     case 2:
      HEAP[$iftmp_33] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      
      
      var $10 = HEAP[HEAP[$pto_addr] + 16];
      
      
      var $13 = HEAP[HEAP[$pto_addr] + 12];
      
      
      var $16 = HEAP[HEAP[$pto_addr] + 8];
      
      
      var $19 = HEAP[HEAP[$pto_addr] + 8];
      
      
      
      var $23 = HEAP[HEAP[$pto_addr] + 4];
      var $24 = HEAP[$iftmp_33];
      var $25 = _Py_BuildValue(__str18, allocate([ $23, 0, 0, 0, $19, 0, 0, 0, $16, 0, 0, 0, $13, 0, 0, 0, $10, 0, 0, 0, $24, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $25;
      var $26 = HEAP[$0];
      HEAP[$retval] = $26;
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
  function _partial_setstate($pto, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pto_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $fn = __stackBase__ + 16;
      var $fnargs = __stackBase__ + 20;
      var $kw = __stackBase__ + 24;
      var $dict = __stackBase__ + 28;
      
      HEAP[$pto_addr] = $pto;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str19, allocate([ $fn, 0, 0, 0, $fnargs, 0, 0, 0, $kw, 0, 0, 0, $dict, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$pto_addr] + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $10 = HEAP[HEAP[$pto_addr] + 8];
      
      
      var $13 = HEAP[$10] - 1;
      var $14 = $10;
      HEAP[$14] = $13;
      
      
      
      if (HEAP[$10] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[HEAP[$pto_addr] + 8] + 4] + 24];
      
      
      var $27 = HEAP[HEAP[$pto_addr] + 8];
      FUNCTION_TABLE[$24]($27);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[HEAP[$pto_addr] + 12] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $34 = HEAP[HEAP[$pto_addr] + 12];
      
      
      var $37 = HEAP[$34] - 1;
      var $38 = $34;
      HEAP[$38] = $37;
      
      
      
      if (HEAP[$34] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $48 = HEAP[HEAP[HEAP[HEAP[$pto_addr] + 12] + 4] + 24];
      
      
      var $51 = HEAP[HEAP[$pto_addr] + 12];
      FUNCTION_TABLE[$48]($51);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      if (HEAP[HEAP[$pto_addr] + 16] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      var $58 = HEAP[HEAP[$pto_addr] + 16];
      
      
      var $61 = HEAP[$58] - 1;
      var $62 = $58;
      HEAP[$62] = $61;
      
      
      
      if (HEAP[$58] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      var $72 = HEAP[HEAP[HEAP[HEAP[$pto_addr] + 16] + 4] + 24];
      
      
      var $75 = HEAP[HEAP[$pto_addr] + 16];
      FUNCTION_TABLE[$72]($75);
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      if (HEAP[HEAP[$pto_addr] + 20] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      var $82 = HEAP[HEAP[$pto_addr] + 20];
      
      
      var $85 = HEAP[$82] - 1;
      var $86 = $82;
      HEAP[$86] = $85;
      
      
      
      if (HEAP[$82] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      
      var $96 = HEAP[HEAP[HEAP[HEAP[$pto_addr] + 20] + 4] + 24];
      
      
      var $99 = HEAP[HEAP[$pto_addr] + 20];
      FUNCTION_TABLE[$96]($99);
      __label__ = 14;
      break;
     case 14:
      var $100 = HEAP[$fn];
      
      var $102 = HEAP[$pto_addr] + 8;
      HEAP[$102] = $100;
      var $103 = HEAP[$fnargs];
      
      var $105 = HEAP[$pto_addr] + 12;
      HEAP[$105] = $103;
      var $106 = HEAP[$kw];
      
      var $108 = HEAP[$pto_addr] + 16;
      HEAP[$108] = $106;
      
      
      if (HEAP[$dict] != __Py_NoneStruct) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $111 = HEAP[$dict];
      
      var $113 = HEAP[$pto_addr] + 20;
      HEAP[$113] = $111;
      
      
      
      var $117 = HEAP[HEAP[$dict]] + 1;
      var $118 = HEAP[$dict];
      HEAP[$118] = $117;
      __label__ = 17;
      break;
     case 16:
      
      var $120 = HEAP[$pto_addr] + 20;
      HEAP[$120] = 0;
      __label__ = 17;
      break;
     case 17:
      
      
      
      var $124 = HEAP[HEAP[$fn]] + 1;
      var $125 = HEAP[$fn];
      HEAP[$125] = $124;
      
      
      
      var $129 = HEAP[HEAP[$fnargs]] + 1;
      var $130 = HEAP[$fnargs];
      HEAP[$130] = $129;
      
      
      
      var $134 = HEAP[HEAP[$kw]] + 1;
      var $135 = HEAP[$kw];
      HEAP[$135] = $134;
      
      var $137 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $137;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 18;
      break;
     case 18:
      var $138 = HEAP[$0];
      HEAP[$retval] = $138;
      __label__ = 19;
      break;
     case 19:
      var $retval18 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _init_functools() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $i = __stackBase__;
      var $m = __stackBase__ + 4;
      var $name = __stackBase__ + 8;
      var $typelist = __stackBase__ + 12;
      
      
      var $1 = HEAP[_C_44_8838];
      HEAP[$typelist] = $1;
      
      var $3 = HEAP[_C_44_8838 + 4];
      HEAP[$typelist + 4] = $3;
      var $4 = _Py_InitModule4(__str23, _module_methods, _module_doc, 0, 1013);
      HEAP[$m] = $4;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      HEAP[$i] = 0;
      __label__ = 6;
      break;
     case 2:
      
      
      var $9 = HEAP[$typelist + HEAP[$i] * 4];
      var $10 = _PyType_Ready($9);
      
      if ($10 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      var $16 = HEAP[HEAP[$typelist + HEAP[$i] * 4] + 12];
      var $17 = _strchr($16, 46);
      HEAP[$name] = $17;
      
      
      if (HEAP[$name] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str24, __str6, 398, ___PRETTY_FUNCTION___8834);
      throw "Reached an unreachable!";
     case 5:
      
      
      
      
      
      
      var $26 = HEAP[HEAP[$typelist + HEAP[$i] * 4]] + 1;
      var $27 = HEAP[$typelist + HEAP[$i] * 4];
      HEAP[$27] = $26;
      
      
      
      var $31 = HEAP[$typelist + HEAP[$i] * 4];
      
      var $33 = HEAP[$name] + 1;
      var $34 = HEAP[$m];
      var $35 = _PyModule_AddObject($34, $33, $31);
      
      var $37 = HEAP[$i] + 1;
      HEAP[$i] = $37;
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$typelist + HEAP[$i] * 4] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      __label__ = 8;
      break;
     case 8:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_functools"] = _init_functools;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _partial_get_dict, 0, _partial_set_dict, 0, _partial_reduce, 0, _partial_setstate, 0, _partial_dealloc, 0, _partial_call, 0, _PyObject_GenericGetAttr, 0, _PyObject_GenericSetAttr, 0, _partial_traverse, 0, _partial_new, 0, _PyObject_GC_Del, 0, _functools_reduce, 0 ]);
  function run(args) {
    __str = allocate([ 114, 101, 100, 117, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 114, 101, 100, 117, 99, 101, 40, 41, 32, 97, 114, 103, 32, 50, 32, 109, 117, 115, 116, 32, 115, 117, 112, 112, 111, 114, 116, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 114, 101, 100, 117, 99, 101, 40, 41, 32, 111, 102, 32, 101, 109, 112, 116, 121, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 119, 105, 116, 104, 32, 110, 111, 32, 105, 110, 105, 116, 105, 97, 108, 32, 118, 97, 108, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    _reduce_doc = allocate([ 114, 101, 100, 117, 99, 101, 40, 102, 117, 110, 99, 116, 105, 111, 110, 44, 32, 115, 101, 113, 117, 101, 110, 99, 101, 91, 44, 32, 105, 110, 105, 116, 105, 97, 108, 93, 41, 32, 45, 62, 32, 118, 97, 108, 117, 101, 10, 10, 65, 112, 112, 108, 121, 32, 97, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 111, 102, 32, 116, 119, 111, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 99, 117, 109, 117, 108, 97, 116, 105, 118, 101, 108, 121, 32, 116, 111, 32, 116, 104, 101, 32, 105, 116, 101, 109, 115, 32, 111, 102, 32, 97, 32, 115, 101, 113, 117, 101, 110, 99, 101, 44, 10, 102, 114, 111, 109, 32, 108, 101, 102, 116, 32, 116, 111, 32, 114, 105, 103, 104, 116, 44, 32, 115, 111, 32, 97, 115, 32, 116, 111, 32, 114, 101, 100, 117, 99, 101, 32, 116, 104, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 116, 111, 32, 97, 32, 115, 105, 110, 103, 108, 101, 32, 118, 97, 108, 117, 101, 46, 10, 70, 111, 114, 32, 101, 120, 97, 109, 112, 108, 101, 44, 32, 114, 101, 100, 117, 99, 101, 40, 108, 97, 109, 98, 100, 97, 32, 120, 44, 32, 121, 58, 32, 120, 43, 121, 44, 32, 91, 49, 44, 32, 50, 44, 32, 51, 44, 32, 52, 44, 32, 53, 93, 41, 32, 99, 97, 108, 99, 117, 108, 97, 116, 101, 115, 10, 40, 40, 40, 40, 49, 43, 50, 41, 43, 51, 41, 43, 52, 41, 43, 53, 41, 46, 32, 32, 73, 102, 32, 105, 110, 105, 116, 105, 97, 108, 32, 105, 115, 32, 112, 114, 101, 115, 101, 110, 116, 44, 32, 105, 116, 32, 105, 115, 32, 112, 108, 97, 99, 101, 100, 32, 98, 101, 102, 111, 114, 101, 32, 116, 104, 101, 32, 105, 116, 101, 109, 115, 10, 111, 102, 32, 116, 104, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 105, 110, 32, 116, 104, 101, 32, 99, 97, 108, 99, 117, 108, 97, 116, 105, 111, 110, 44, 32, 97, 110, 100, 32, 115, 101, 114, 118, 101, 115, 32, 97, 115, 32, 97, 32, 100, 101, 102, 97, 117, 108, 116, 32, 119, 104, 101, 110, 32, 116, 104, 101, 10, 115, 101, 113, 117, 101, 110, 99, 101, 32, 105, 115, 32, 101, 109, 112, 116, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 116, 121, 112, 101, 32, 39, 112, 97, 114, 116, 105, 97, 108, 39, 32, 116, 97, 107, 101, 115, 32, 97, 116, 32, 108, 101, 97, 115, 116, 32, 111, 110, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 116, 104, 101, 32, 102, 105, 114, 115, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 99, 97, 108, 108, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 80, 121, 67, 97, 108, 108, 97, 98, 108, 101, 95, 67, 104, 101, 99, 107, 40, 112, 116, 111, 45, 62, 102, 110, 41, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 95, 102, 117, 110, 99, 116, 111, 111, 108, 115, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8536 = allocate([ 112, 97, 114, 116, 105, 97, 108, 95, 99, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 112, 116, 111, 45, 62, 97, 114, 103, 115, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 54, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 112, 116, 111, 45, 62, 107, 119, 32, 61, 61, 32, 40, 38, 95, 80, 121, 95, 78, 111, 110, 101, 83, 116, 114, 117, 99, 116, 41, 32, 124, 124, 32, 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 112, 116, 111, 45, 62, 107, 119, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 57, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    _partial_doc = allocate([ 112, 97, 114, 116, 105, 97, 108, 40, 102, 117, 110, 99, 44, 32, 42, 97, 114, 103, 115, 44, 32, 42, 42, 107, 101, 121, 119, 111, 114, 100, 115, 41, 32, 45, 32, 110, 101, 119, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 119, 105, 116, 104, 32, 112, 97, 114, 116, 105, 97, 108, 32, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 10, 32, 32, 32, 32, 111, 102, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 97, 110, 100, 32, 107, 101, 121, 119, 111, 114, 100, 115, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 102, 117, 110, 99, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 102, 117, 110, 99, 116, 105, 111, 110, 32, 111, 98, 106, 101, 99, 116, 32, 116, 111, 32, 117, 115, 101, 32, 105, 110, 32, 102, 117, 116, 117, 114, 101, 32, 112, 97, 114, 116, 105, 97, 108, 32, 99, 97, 108, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 97, 114, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 116, 117, 112, 108, 101, 32, 111, 102, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 116, 111, 32, 102, 117, 116, 117, 114, 101, 32, 112, 97, 114, 116, 105, 97, 108, 32, 99, 97, 108, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 107, 101, 121, 119, 111, 114, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 32, 111, 102, 32, 107, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 116, 111, 32, 102, 117, 116, 117, 114, 101, 32, 112, 97, 114, 116, 105, 97, 108, 32, 99, 97, 108, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    _partial_memberlist = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str15 = allocate([ 97, 32, 112, 97, 114, 116, 105, 97, 108, 32, 111, 98, 106, 101, 99, 116, 39, 115, 32, 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 32, 109, 97, 121, 32, 110, 111, 116, 32, 98, 101, 32, 100, 101, 108, 101, 116, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 115, 101, 116, 116, 105, 110, 103, 32, 112, 97, 114, 116, 105, 97, 108, 32, 111, 98, 106, 101, 99, 116, 39, 115, 32, 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 32, 116, 111, 32, 97, 32, 110, 111, 110, 45, 100, 105, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 95, 95, 100, 105, 99, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _partial_getsetlist = allocate(40, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str18 = allocate([ 79, 40, 79, 41, 40, 79, 79, 79, 79, 41, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 40, 79, 79, 79, 79, 41, 58, 95, 95, 115, 101, 116, 115, 116, 97, 116, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 95, 95, 115, 101, 116, 115, 116, 97, 116, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _partial_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str22 = allocate([ 102, 117, 110, 99, 116, 111, 111, 108, 115, 46, 112, 97, 114, 116, 105, 97, 108, 0 ], "i8", ALLOC_NORMAL);
    _partial_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_doc = allocate([ 84, 111, 111, 108, 115, 32, 116, 104, 97, 116, 32, 111, 112, 101, 114, 97, 116, 101, 32, 111, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _module_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _C_44_8838 = allocate(8, "%struct._typeobject*", ALLOC_NORMAL);
    __str23 = allocate([ 95, 102, 117, 110, 99, 116, 111, 111, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 110, 97, 109, 101, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8834 = allocate([ 105, 110, 105, 116, 95, 102, 117, 110, 99, 116, 111, 111, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_partial_memberlist] = __str9;
    HEAP[_partial_memberlist + 16] = __str10;
    HEAP[_partial_memberlist + 20] = __str11;
    HEAP[_partial_memberlist + 36] = __str12;
    HEAP[_partial_memberlist + 40] = __str13;
    HEAP[_partial_memberlist + 56] = __str14;
    HEAP[_partial_getsetlist] = __str17;
    HEAP[_partial_getsetlist + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_partial_getsetlist + 8] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_partial_methods] = __str20;
    HEAP[_partial_methods + 4] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_partial_methods + 16] = __str21;
    HEAP[_partial_methods + 20] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_partial_type + 12] = __str22;
    HEAP[_partial_type + 24] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_partial_type + 64] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_partial_type + 72] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_partial_type + 76] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_partial_type + 88] = _partial_doc;
    HEAP[_partial_type + 92] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_partial_type + 116] = _partial_methods;
    HEAP[_partial_type + 120] = _partial_memberlist;
    HEAP[_partial_type + 124] = _partial_getsetlist;
    HEAP[_partial_type + 156] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_partial_type + 160] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_module_methods] = __str;
    HEAP[_module_methods + 4] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_module_methods + 12] = _reduce_doc;
    HEAP[_C_44_8838] = _partial_type;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
