"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 380;
  var $1___SIZE = 20;
  var $2___SIZE = 20;
  var $3___SIZE = 360;
  var $4___SIZE = 80;
  var $5___SIZE = 16;
  var $6___SIZE = 60;
  var $7___SIZE = 20;
  var $8___SIZE = 196;
  var $9___SIZE = 112;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyLongObject___SIZE = 0;
  var $struct_PyLongObject___FLATTENER = [];
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyStructObject___SIZE = 28;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_formatcode___SIZE = 12;
  var $struct_formatdef___SIZE = 20;
  var _integer_codes;
  var __str;
  var __str1;
  var __str2;
  var ___PRETTY_FUNCTION___8367;
  var __str3;
  var __str4;
  var __str5;
  var _StructError;
  var __str6;
  var __str7;
  var __str8;
  var __str9;
  var ___PRETTY_FUNCTION___8491;
  var ___PRETTY_FUNCTION___8520;
  var ___PRETTY_FUNCTION___8549;
  var ___PRETTY_FUNCTION___8578;
  var __str10;
  var ___PRETTY_FUNCTION___8637;
  var __str11;
  var __str12;
  var __str13;
  var __str14;
  var __str15;
  var __str16;
  var __str17;
  var __str18;
  var ___PRETTY_FUNCTION___9045;
  var _native_table;
  var _bigendian_table;
  var _lilendian_table;
  var __str19;
  var __str20;
  var __str21;
  var ___PRETTY_FUNCTION___9778;
  var __str22;
  var ___PRETTY_FUNCTION___9801;
  var __str23;
  var _kwlist_9800;
  var __str24;
  var _s_unpack__doc__;
  var ___PRETTY_FUNCTION___9921;
  var __str25;
  var __str26;
  var __str27;
  var _s_unpack_from__doc__;
  var ___PRETTY_FUNCTION___9989;
  var _fmt_9984;
  var __str28;
  var _kwlist_9983;
  var __str29;
  var __str30;
  var __str31;
  var __str32;
  var __str33;
  var __str34;
  var __str35;
  var _s_pack__doc__;
  var ___PRETTY_FUNCTION___10122;
  var __str36;
  var _s_pack_into__doc__;
  var ___PRETTY_FUNCTION___10167;
  var __str37;
  var __str38;
  var __str39;
  var __str40;
  var __str41;
  var __str42;
  var __str43;
  var _s_methods;
  var _s__doc__;
  var __str44;
  var __str45;
  var __str46;
  var _s_getsetlist;
  var __str47;
  var _PyStructType;
  var _cache;
  var _clearcache_doc;
  var _calcsize_doc;
  var _pack_doc;
  var __str48;
  var _pack_into_doc;
  var _unpack_doc;
  var _unpack_from_doc;
  var __str49;
  var __str50;
  var _module_functions;
  var _module_doc;
  var __str51;
  var __str52;
  var __str53;
  var __str54;
  var __str55;
  var __str56;
  var __str57;
  function _get_pylong($v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $v_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $r = __stackBase__ + 12;
      var $w = __stackBase__ + 16;
      var $converted = __stackBase__ + 20;
      var $m = __stackBase__ + 24;
      
      HEAP[$v_addr] = $v;
      HEAP[$converted] = 0;
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str1, __str2, 112, ___PRETTY_FUNCTION___8367);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 8388608) != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 16777216) != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      var $21 = HEAP[HEAP[HEAP[$v_addr] + 4] + 48];
      HEAP[$m] = $21;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$v_addr] + 4] + 48] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 131072) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[HEAP[$v_addr] + 4] + 48] + 152] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      var $43 = HEAP[$v_addr];
      var $44 = _PyNumber_Index($43);
      HEAP[$w] = $44;
      
      
      if (HEAP[$w] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $47 = HEAP[$w];
      HEAP[$v_addr] = $47;
      HEAP[$converted] = 1;
      __label__ = 12;
      break;
     case 9:
      var $48 = HEAP[_PyExc_TypeError];
      var $49 = _PyErr_ExceptionMatches($48);
      
      if ($49 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      _PyErr_Clear();
      __label__ = 12;
      break;
     case 11:
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 12:
      
      
      if (HEAP[$converted] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 13:
      
      
      if (HEAP[$m] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 14:
      
      
      
      
      if (HEAP[HEAP[$m] + 72] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 15:
      
      
      
      
      if (HEAP[HEAP[$v_addr] + 4] == _PyFloat_Type) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      var $65 = HEAP[HEAP[$v_addr] + 4];
      var $66 = _PyType_IsSubtype($65, _PyFloat_Type);
      
      if ($66 != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      var $68 = HEAP[_PyExc_DeprecationWarning];
      var $69 = _PyErr_WarnEx($68, __str3, 1);
      
      if ($69 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 19:
      __label__ = 22;
      break;
     case 20:
      var $71 = HEAP[_PyExc_DeprecationWarning];
      var $72 = _PyErr_WarnEx($71, __str4, 1);
      
      if ($72 != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 22:
      
      
      var $76 = HEAP[HEAP[$m] + 72];
      var $77 = HEAP[$v_addr];
      var $78 = FUNCTION_TABLE[$76]($77);
      HEAP[$v_addr] = $78;
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 24:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 8388608) == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 16777216) == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      var $95 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($95, __str5);
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 27:
      HEAP[$converted] = 1;
      __label__ = 28;
      break;
     case 28:
      
      
      if (HEAP[$converted] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $98 = HEAP[_StructError];
      _PyErr_SetString($98, __str6);
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 30:
      __label__ = 32;
      break;
     case 31:
      
      
      
      var $102 = HEAP[HEAP[$v_addr]] + 1;
      
      var $104 = HEAP[$v_addr];
      HEAP[$104] = $102;
      __label__ = 32;
      break;
     case 32:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 8388608) == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 33:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 16777216) == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      ___assert_fail(__str7, __str2, 172, ___PRETTY_FUNCTION___8367);
      throw "Reached an unreachable!";
     case 35:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 8388608) != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 36:
      
      
      
      var $129 = HEAP[HEAP[$v_addr] + 8];
      var $130 = _PyLong_FromLong($129);
      HEAP[$r] = $130;
      
      
      
      var $134 = HEAP[HEAP[$v_addr]] - 1;
      
      var $136 = HEAP[$v_addr];
      HEAP[$136] = $134;
      
      
      
      
      if (HEAP[HEAP[$v_addr]] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $145 = HEAP[HEAP[HEAP[$v_addr] + 4] + 24];
      var $146 = HEAP[$v_addr];
      FUNCTION_TABLE[$145]($146);
      __label__ = 38;
      break;
     case 38:
      __label__ = 44;
      break;
     case 39:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 16777216) != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 40:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 16777216) == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      ___assert_fail(__str8, __str2, 178, ___PRETTY_FUNCTION___8367);
      throw "Reached an unreachable!";
     case 42:
      var $161 = HEAP[$v_addr];
      HEAP[$r] = $161;
      __label__ = 44;
      break;
     case 43:
      HEAP[$r] = 0;
      ___assert_fail(__str9, __str2, 184, ___PRETTY_FUNCTION___8367);
      throw "Reached an unreachable!";
     case 44:
      var $162 = HEAP[$r];
      HEAP[$0] = $162;
      __label__ = 45;
      break;
     case 45:
      var $163 = HEAP[$0];
      HEAP[$retval] = $163;
      __label__ = 46;
      break;
     case 46:
      var $retval45 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval45;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _get_long($v, $p) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $v_addr = __stackBase__;
      var $p_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$v_addr] = $v;
      HEAP[$p_addr] = $p;
      var $1 = HEAP[$v_addr];
      var $2 = _get_pylong($1);
      HEAP[$v_addr] = $2;
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 16777216) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str8, __str2, 202, ___PRETTY_FUNCTION___8491);
      throw "Reached an unreachable!";
     case 4:
      var $12 = HEAP[$v_addr];
      var $13 = _PyLong_AsLong($12);
      HEAP[$x] = $13;
      
      
      
      var $17 = HEAP[HEAP[$v_addr]] - 1;
      
      var $19 = HEAP[$v_addr];
      HEAP[$19] = $17;
      
      
      
      
      if (HEAP[HEAP[$v_addr]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $28 = HEAP[HEAP[HEAP[$v_addr] + 4] + 24];
      var $29 = HEAP[$v_addr];
      FUNCTION_TABLE[$28]($29);
      __label__ = 6;
      break;
     case 6:
      
      var $31 = HEAP[$x] == -1;
      if ($31) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $32 = _PyErr_Occurred();
      
      if ($32 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 9:
      var $34 = HEAP[$p_addr];
      var $35 = HEAP[$x];
      HEAP[$34] = $35;
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 10:
      var $36 = HEAP[$0];
      HEAP[$retval] = $36;
      __label__ = 11;
      break;
     case 11:
      var $retval10 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _get_ulong($v, $p) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $v_addr = __stackBase__;
      var $p_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$v_addr] = $v;
      HEAP[$p_addr] = $p;
      var $1 = HEAP[$v_addr];
      var $2 = _get_pylong($1);
      HEAP[$v_addr] = $2;
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 16777216) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str8, __str2, 221, ___PRETTY_FUNCTION___8520);
      throw "Reached an unreachable!";
     case 4:
      var $12 = HEAP[$v_addr];
      var $13 = _PyLong_AsUnsignedLong($12);
      HEAP[$x] = $13;
      
      
      
      var $17 = HEAP[HEAP[$v_addr]] - 1;
      
      var $19 = HEAP[$v_addr];
      HEAP[$19] = $17;
      
      
      
      
      if (HEAP[HEAP[$v_addr]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $28 = HEAP[HEAP[HEAP[$v_addr] + 4] + 24];
      var $29 = HEAP[$v_addr];
      FUNCTION_TABLE[$28]($29);
      __label__ = 6;
      break;
     case 6:
      
      var $31 = HEAP[$x] == -1;
      if ($31) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $32 = _PyErr_Occurred();
      
      if ($32 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 9:
      var $34 = HEAP[$p_addr];
      var $35 = HEAP[$x];
      HEAP[$34] = $35;
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 10:
      var $36 = HEAP[$0];
      HEAP[$retval] = $36;
      __label__ = 11;
      break;
     case 11:
      var $retval10 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _get_longlong($v, $p) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $v_addr = __stackBase__;
      var $p_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$v_addr] = $v;
      HEAP[$p_addr] = $p;
      var $1 = HEAP[$v_addr];
      var $2 = _get_pylong($1);
      HEAP[$v_addr] = $2;
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 16777216) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str8, __str2, 242, ___PRETTY_FUNCTION___8549);
      throw "Reached an unreachable!";
     case 4:
      var $12 = HEAP[$v_addr];
      var $13 = _PyLong_AsLongLong($12);
      HEAP[$x] = $13;
      
      
      
      var $17 = HEAP[HEAP[$v_addr]] - 1;
      
      var $19 = HEAP[$v_addr];
      HEAP[$19] = $17;
      
      
      
      
      if (HEAP[HEAP[$v_addr]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $28 = HEAP[HEAP[HEAP[$v_addr] + 4] + 24];
      var $29 = HEAP[$v_addr];
      FUNCTION_TABLE[$28]($29);
      __label__ = 6;
      break;
     case 6:
      
      var $31 = HEAP[$x] == -1;
      if ($31) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $32 = _PyErr_Occurred();
      
      if ($32 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 9:
      var $34 = HEAP[$p_addr];
      var $35 = HEAP[$x];
      HEAP[$34] = $35;
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 10:
      var $36 = HEAP[$0];
      HEAP[$retval] = $36;
      __label__ = 11;
      break;
     case 11:
      var $retval10 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _get_ulonglong($v, $p) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $v_addr = __stackBase__;
      var $p_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$v_addr] = $v;
      HEAP[$p_addr] = $p;
      var $1 = HEAP[$v_addr];
      var $2 = _get_pylong($1);
      HEAP[$v_addr] = $2;
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 16777216) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str8, __str2, 261, ___PRETTY_FUNCTION___8578);
      throw "Reached an unreachable!";
     case 4:
      var $12 = HEAP[$v_addr];
      var $13 = _PyLong_AsUnsignedLongLong($12);
      HEAP[$x] = $13;
      
      
      
      var $17 = HEAP[HEAP[$v_addr]] - 1;
      
      var $19 = HEAP[$v_addr];
      HEAP[$19] = $17;
      
      
      
      
      if (HEAP[HEAP[$v_addr]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $28 = HEAP[HEAP[HEAP[$v_addr] + 4] + 24];
      var $29 = HEAP[$v_addr];
      FUNCTION_TABLE[$28]($29);
      __label__ = 6;
      break;
     case 6:
      
      var $31 = HEAP[$x] == -1;
      if ($31) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $32 = _PyErr_Occurred();
      
      if ($32 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 9:
      var $34 = HEAP[$p_addr];
      var $35 = HEAP[$x];
      HEAP[$34] = $35;
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 10:
      var $36 = HEAP[$0];
      HEAP[$retval] = $36;
      __label__ = 11;
      break;
     case 11:
      var $retval10 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _unpack_float($p, $le) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $le_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$p_addr] = $p;
      HEAP[$le_addr] = $le;
      var $1 = HEAP[$p_addr];
      var $2 = HEAP[$le_addr];
      var $3 = __PyFloat_Unpack4($1, $2);
      HEAP[$x] = $3;
      
      var $5 = HEAP[$x] == -1;
      if ($5) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $6 = _PyErr_Occurred();
      
      if ($6 != 0) {
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
      var $8 = HEAP[$x];
      var $9 = _PyFloat_FromDouble($8);
      HEAP[$0] = $9;
      __label__ = 4;
      break;
     case 4:
      var $10 = HEAP[$0];
      HEAP[$retval] = $10;
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
  function _unpack_double($p, $le) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $le_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$p_addr] = $p;
      HEAP[$le_addr] = $le;
      var $1 = HEAP[$p_addr];
      var $2 = HEAP[$le_addr];
      var $3 = __PyFloat_Unpack8($1, $2);
      HEAP[$x] = $3;
      
      var $5 = HEAP[$x] == -1;
      if ($5) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $6 = _PyErr_Occurred();
      
      if ($6 != 0) {
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
      var $8 = HEAP[$x];
      var $9 = _PyFloat_FromDouble($8);
      HEAP[$0] = $9;
      __label__ = 4;
      break;
     case 4:
      var $10 = HEAP[$0];
      HEAP[$retval] = $10;
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
  function __range_error($f, $is_unsigned) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $f_addr = __stackBase__;
      var $is_unsigned_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $ulargest = __stackBase__ + 16;
      var $largest = __stackBase__ + 20;
      
      HEAP[$f_addr] = $f;
      HEAP[$is_unsigned_addr] = $is_unsigned;
      
      
      
      
      
      var $6 = 4294967295 >>> (4 - HEAP[HEAP[$f_addr] + 4]) * 8;
      HEAP[$ulargest] = $6;
      
      
      
      
      if (HEAP[HEAP[$f_addr] + 4] <= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$f_addr] + 4] > 4) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str10, __str2, 311, ___PRETTY_FUNCTION___8637);
      throw "Reached an unreachable!";
     case 3:
      
      
      if (HEAP[$is_unsigned_addr] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      var $20 = HEAP[HEAP[$f_addr]];
      var $21 = HEAP[_StructError];
      var $22 = HEAP[$ulargest];
      var $23 = _PyErr_Format($21, __str11, allocate([ $20, 0, 0, 0, $22, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 6;
      break;
     case 5:
      
      var $25 = HEAP[$ulargest] >>> 1;
      HEAP[$largest] = $25;
      
      var $not = HEAP[$largest] ^ -1;
      
      
      
      var $30 = HEAP[HEAP[$f_addr]];
      var $31 = HEAP[_StructError];
      var $32 = HEAP[$largest];
      var $33 = _PyErr_Format($31, __str12, allocate([ $30, 0, 0, 0, $not, 0, 0, 0, $32, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = -1;
      var $34 = HEAP[$0];
      HEAP[$retval] = $34;
      __label__ = 7;
      break;
     case 7:
      var $retval7 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nu_char($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$p_addr];
      var $2 = _PyString_FromStringAndSize($1, 1);
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
  function _nu_byte($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      
      
      var $3 = HEAP[HEAP[$p_addr]];
      var $4 = _PyInt_FromLong($3);
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
  function _nu_ubyte($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      
      
      var $3 = HEAP[HEAP[$p_addr]];
      var $4 = _PyInt_FromLong($3);
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
  function _nu_short($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 18;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$p_addr];
      var $x1 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 2, 1, 0);
      
      var $3 = HEAP[$x];
      var $4 = _PyInt_FromLong($3);
      HEAP[$0] = $4;
      var $5 = HEAP[$0];
      HEAP[$retval] = $5;
      __label__ = 1;
      break;
     case 1:
      var $retval2 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nu_ushort($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 18;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$p_addr];
      var $x1 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 2, 1, 0);
      
      var $3 = HEAP[$x];
      var $4 = _PyInt_FromLong($3);
      HEAP[$0] = $4;
      var $5 = HEAP[$0];
      HEAP[$retval] = $5;
      __label__ = 1;
      break;
     case 1:
      var $retval2 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nu_int($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$p_addr];
      var $x1 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 4, 1, 0);
      var $2 = HEAP[$x];
      var $3 = _PyInt_FromLong($2);
      HEAP[$0] = $3;
      var $4 = HEAP[$0];
      HEAP[$retval] = $4;
      __label__ = 1;
      break;
     case 1:
      var $retval2 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nu_uint($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$p_addr];
      var $x1 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 4, 1, 0);
      
      
      if (HEAP[$x] >= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[$x];
      var $5 = _PyInt_FromLong($4);
      HEAP[$0] = $5;
      __label__ = 3;
      break;
     case 2:
      var $6 = HEAP[$x];
      var $7 = _PyLong_FromUnsignedLong($6);
      HEAP[$0] = $7;
      __label__ = 3;
      break;
     case 3:
      var $8 = HEAP[$0];
      HEAP[$retval] = $8;
      __label__ = 4;
      break;
     case 4:
      var $retval4 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nu_long($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$p_addr];
      var $x1 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 4, 1, 0);
      var $2 = HEAP[$x];
      var $3 = _PyInt_FromLong($2);
      HEAP[$0] = $3;
      var $4 = HEAP[$0];
      HEAP[$retval] = $4;
      __label__ = 1;
      break;
     case 1:
      var $retval2 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nu_ulong($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$p_addr];
      var $x1 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 4, 1, 0);
      
      
      if (HEAP[$x] >= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[$x];
      var $5 = _PyInt_FromLong($4);
      HEAP[$0] = $5;
      __label__ = 3;
      break;
     case 2:
      var $6 = HEAP[$x];
      var $7 = _PyLong_FromUnsignedLong($6);
      HEAP[$0] = $7;
      __label__ = 3;
      break;
     case 3:
      var $8 = HEAP[$0];
      HEAP[$retval] = $8;
      __label__ = 4;
      break;
     case 4:
      var $retval4 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nu_longlong($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$p_addr];
      var $x1 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 8, 1, 0);
      
      var $3 = HEAP[$x] >= -2147483648;
      if ($3) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      if (HEAP[$x] <= 2147483647) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $7 = HEAP[$x] & 4294967295;
      var $8 = _PyInt_FromLong($7);
      HEAP[$0] = $8;
      __label__ = 4;
      break;
     case 3:
      var $9 = HEAP[$x];
      var $10 = _PyLong_FromLongLong($9);
      HEAP[$0] = $10;
      __label__ = 4;
      break;
     case 4:
      var $11 = HEAP[$0];
      HEAP[$retval] = $11;
      __label__ = 5;
      break;
     case 5:
      var $retval5 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nu_ulonglong($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$p_addr];
      var $x1 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 8, 1, 0);
      
      
      if (HEAP[$x] <= 2147483647) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $5 = HEAP[$x] & 4294967295;
      var $6 = _PyInt_FromLong($5);
      HEAP[$0] = $6;
      __label__ = 3;
      break;
     case 2:
      var $7 = HEAP[$x];
      var $8 = _PyLong_FromUnsignedLongLong($7);
      HEAP[$0] = $8;
      __label__ = 3;
      break;
     case 3:
      var $9 = HEAP[$0];
      HEAP[$retval] = $9;
      __label__ = 4;
      break;
     case 4:
      var $retval4 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nu_bool($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 17;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 17);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$p_addr];
      _llvm_memcpy_p0i8_p0i8_i32($x, $1, 1, 1, 0);
      
      var $3 = HEAP[$x];
      var $4 = _PyBool_FromLong($3);
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
  function _nu_float($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$p_addr];
      var $x1 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 4, 1, 0);
      
      var $3 = HEAP[$x];
      var $4 = _PyFloat_FromDouble($3);
      HEAP[$0] = $4;
      var $5 = HEAP[$0];
      HEAP[$retval] = $5;
      __label__ = 1;
      break;
     case 1:
      var $retval2 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nu_double($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$p_addr];
      var $x1 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 8, 1, 0);
      var $2 = HEAP[$x];
      var $3 = _PyFloat_FromDouble($2);
      HEAP[$0] = $3;
      var $4 = HEAP[$0];
      HEAP[$retval] = $4;
      __label__ = 1;
      break;
     case 1:
      var $retval2 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nu_void_p($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$p_addr];
      var $x1 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 4, 1, 0);
      var $2 = HEAP[$x];
      var $3 = _PyLong_FromVoidPtr($2);
      HEAP[$0] = $3;
      var $4 = HEAP[$0];
      HEAP[$retval] = $4;
      __label__ = 1;
      break;
     case 1:
      var $retval2 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_byte($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _get_long($1, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 2:
      
      var $5 = HEAP[$x] < -128;
      if ($5) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$x] > 127) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $8 = HEAP[_StructError];
      _PyErr_SetString($8, __str13);
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 5:
      
      var $10 = HEAP[$x] & 255;
      var $11 = HEAP[$p_addr];
      HEAP[$11] = $10;
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 6:
      var $12 = HEAP[$0];
      HEAP[$retval] = $12;
      __label__ = 7;
      break;
     case 7:
      var $retval6 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_ubyte($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _get_long($1, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 2:
      
      
      if (HEAP[$x] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$x] > 255) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $8 = HEAP[_StructError];
      _PyErr_SetString($8, __str14);
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 5:
      
      var $10 = HEAP[$x] & 255;
      var $11 = HEAP[$p_addr];
      HEAP[$11] = $10;
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 6:
      var $12 = HEAP[$0];
      HEAP[$retval] = $12;
      __label__ = 7;
      break;
     case 7:
      var $retval6 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_char($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 134217728) == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $8 = HEAP[$v_addr];
      var $9 = _PyString_Size($8);
      
      if ($9 != 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $11 = HEAP[_StructError];
      _PyErr_SetString($11, __str15);
      HEAP[$0] = -1;
      __label__ = 4;
      break;
     case 3:
      var $12 = HEAP[$v_addr];
      var $13 = _PyString_AsString($12);
      var $14 = HEAP[$13];
      var $15 = HEAP[$p_addr];
      HEAP[$15] = $14;
      HEAP[$0] = 0;
      __label__ = 4;
      break;
     case 4:
      var $16 = HEAP[$0];
      HEAP[$retval] = $16;
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
  function _np_short($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 26;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 26);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      var $y = __stackBase__ + 24;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _get_long($1, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 2:
      
      var $5 = HEAP[$x] < -32768;
      if ($5) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$x] > 32767) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $8 = HEAP[_StructError];
      _PyErr_SetString($8, __str16);
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 5:
      
      var $10 = HEAP[$x] & 65535;
      HEAP[$y] = $10;
      var $11 = HEAP[$p_addr];
      var $y5 = $y;
      _llvm_memcpy_p0i8_p0i8_i32($11, $y5, 2, 1, 0);
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 6:
      var $12 = HEAP[$0];
      HEAP[$retval] = $12;
      __label__ = 7;
      break;
     case 7:
      var $retval7 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_ushort($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 26;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 26);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      var $y = __stackBase__ + 24;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _get_long($1, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 2:
      
      
      if (HEAP[$x] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$x] > 65535) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $8 = HEAP[_StructError];
      _PyErr_SetString($8, __str17);
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 5:
      
      var $10 = HEAP[$x] & 65535;
      HEAP[$y] = $10;
      var $11 = HEAP[$p_addr];
      var $y5 = $y;
      _llvm_memcpy_p0i8_p0i8_i32($11, $y5, 2, 1, 0);
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 6:
      var $12 = HEAP[$0];
      HEAP[$retval] = $12;
      __label__ = 7;
      break;
     case 7:
      var $retval7 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_int($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      var $y = __stackBase__ + 24;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _get_long($1, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 3;
      break;
     case 2:
      var $4 = HEAP[$x];
      HEAP[$y] = $4;
      var $5 = HEAP[$p_addr];
      var $y2 = $y;
      _llvm_memcpy_p0i8_p0i8_i32($5, $y2, 4, 1, 0);
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 3:
      var $6 = HEAP[$0];
      HEAP[$retval] = $6;
      __label__ = 4;
      break;
     case 4:
      var $retval4 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_uint($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      var $y = __stackBase__ + 24;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _get_ulong($1, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 3;
      break;
     case 2:
      var $4 = HEAP[$x];
      HEAP[$y] = $4;
      var $5 = HEAP[$p_addr];
      var $y2 = $y;
      _llvm_memcpy_p0i8_p0i8_i32($5, $y2, 4, 1, 0);
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 3:
      var $6 = HEAP[$0];
      HEAP[$retval] = $6;
      __label__ = 4;
      break;
     case 4:
      var $retval4 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_long($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _get_long($1, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 3;
      break;
     case 2:
      var $4 = HEAP[$p_addr];
      var $x2 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($4, $x2, 4, 1, 0);
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 3:
      var $5 = HEAP[$0];
      HEAP[$retval] = $5;
      __label__ = 4;
      break;
     case 4:
      var $retval4 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_ulong($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _get_ulong($1, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 3;
      break;
     case 2:
      var $4 = HEAP[$p_addr];
      var $x2 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($4, $x2, 4, 1, 0);
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 3:
      var $5 = HEAP[$0];
      HEAP[$retval] = $5;
      __label__ = 4;
      break;
     case 4:
      var $retval4 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_longlong($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _get_longlong($1, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 3;
      break;
     case 2:
      var $4 = HEAP[$p_addr];
      var $x2 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($4, $x2, 8, 1, 0);
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 3:
      var $5 = HEAP[$0];
      HEAP[$retval] = $5;
      __label__ = 4;
      break;
     case 4:
      var $retval4 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_ulonglong($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _get_ulonglong($1, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 3;
      break;
     case 2:
      var $4 = HEAP[$p_addr];
      var $x2 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($4, $x2, 8, 1, 0);
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 3:
      var $5 = HEAP[$0];
      HEAP[$retval] = $5;
      __label__ = 4;
      break;
     case 4:
      var $retval4 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_bool($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 25;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 25);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $y = __stackBase__ + 20;
      var $x = __stackBase__ + 24;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _PyObject_IsTrue($1);
      HEAP[$y] = $2;
      
      
      if (HEAP[$y] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 3;
      break;
     case 2:
      
      
      var $7 = HEAP[$y] != 0;
      HEAP[$x] = $7;
      var $8 = HEAP[$p_addr];
      _llvm_memcpy_p0i8_p0i8_i32($8, $x, 1, 1, 0);
      HEAP[$0] = 0;
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
  function _np_float($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _PyFloat_AsDouble($1);
      var $3 = $2;
      HEAP[$x] = $3;
      
      var $5 = HEAP[$x] == -1;
      if ($5) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $6 = _PyErr_Occurred();
      
      if ($6 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $8 = HEAP[_StructError];
      _PyErr_SetString($8, __str18);
      HEAP[$0] = -1;
      __label__ = 4;
      break;
     case 3:
      var $9 = HEAP[$p_addr];
      var $x3 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($9, $x3, 4, 1, 0);
      HEAP[$0] = 0;
      __label__ = 4;
      break;
     case 4:
      var $10 = HEAP[$0];
      HEAP[$retval] = $10;
      __label__ = 5;
      break;
     case 5:
      var $retval5 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_double($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _PyFloat_AsDouble($1);
      HEAP[$x] = $2;
      
      var $4 = HEAP[$x] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $7 = HEAP[_StructError];
      _PyErr_SetString($7, __str18);
      HEAP[$0] = -1;
      __label__ = 4;
      break;
     case 3:
      var $8 = HEAP[$p_addr];
      var $x3 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($8, $x3, 8, 1, 0);
      HEAP[$0] = 0;
      __label__ = 4;
      break;
     case 4:
      var $9 = HEAP[$0];
      HEAP[$retval] = $9;
      __label__ = 5;
      break;
     case 5:
      var $retval5 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_void_p($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _get_pylong($1);
      HEAP[$v_addr] = $2;
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 16777216) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str8, __str2, 683, ___PRETTY_FUNCTION___9045);
      throw "Reached an unreachable!";
     case 4:
      var $12 = HEAP[$v_addr];
      var $13 = _PyLong_AsVoidPtr($12);
      HEAP[$x] = $13;
      
      
      
      var $17 = HEAP[HEAP[$v_addr]] - 1;
      
      var $19 = HEAP[$v_addr];
      HEAP[$19] = $17;
      
      
      
      
      if (HEAP[HEAP[$v_addr]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $28 = HEAP[HEAP[HEAP[$v_addr] + 4] + 24];
      var $29 = HEAP[$v_addr];
      FUNCTION_TABLE[$28]($29);
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$x] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $32 = _PyErr_Occurred();
      
      if ($32 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 9:
      var $34 = HEAP[$p_addr];
      var $x9 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($34, $x9, 4, 1, 0);
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 10:
      var $35 = HEAP[$0];
      HEAP[$retval] = $35;
      __label__ = 11;
      break;
     case 11:
      var $retval11 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _bu_int($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $bytes = __stackBase__ + 24;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      HEAP[$x] = 0;
      
      
      var $3 = HEAP[HEAP[$f_addr] + 4];
      HEAP[$i] = $3;
      var $4 = HEAP[$p_addr];
      HEAP[$bytes] = $4;
      __label__ = 1;
      break;
     case 1:
      
      
      
      
      
      var $10 = HEAP[$x] << 8 | HEAP[HEAP[$bytes]];
      HEAP[$x] = $10;
      
      var $12 = HEAP[$bytes] + 1;
      HEAP[$bytes] = $12;
      
      var $14 = HEAP[$i] - 1;
      HEAP[$i] = $14;
      
      
      if (HEAP[$i] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$f_addr] + 4] <= 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      
      var $31 = 0 - (1 << HEAP[HEAP[$f_addr] + 4] * 8 - 1 & HEAP[$x]) | HEAP[$x];
      HEAP[$x] = $31;
      __label__ = 4;
      break;
     case 4:
      var $32 = HEAP[$x];
      var $33 = _PyInt_FromLong($32);
      HEAP[$0] = $33;
      var $34 = HEAP[$0];
      HEAP[$retval] = $34;
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
  function _bu_uint($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $bytes = __stackBase__ + 24;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      HEAP[$x] = 0;
      
      
      var $3 = HEAP[HEAP[$f_addr] + 4];
      HEAP[$i] = $3;
      var $4 = HEAP[$p_addr];
      HEAP[$bytes] = $4;
      __label__ = 1;
      break;
     case 1:
      
      
      
      
      
      var $10 = HEAP[$x] << 8 | HEAP[HEAP[$bytes]];
      HEAP[$x] = $10;
      
      var $12 = HEAP[$bytes] + 1;
      HEAP[$bytes] = $12;
      
      var $14 = HEAP[$i] - 1;
      HEAP[$i] = $14;
      
      
      if (HEAP[$i] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$x] >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $19 = HEAP[$x];
      var $20 = _PyInt_FromLong($19);
      HEAP[$0] = $20;
      __label__ = 5;
      break;
     case 4:
      var $21 = HEAP[$x];
      var $22 = _PyLong_FromUnsignedLong($21);
      HEAP[$0] = $22;
      __label__ = 5;
      break;
     case 5:
      var $23 = HEAP[$0];
      HEAP[$retval] = $23;
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
  function _bu_longlong($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $i = __stackBase__ + 24;
      var $bytes = __stackBase__ + 28;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      HEAP[$x] = 0;
      
      
      var $3 = HEAP[HEAP[$f_addr] + 4];
      HEAP[$i] = $3;
      var $4 = HEAP[$p_addr];
      HEAP[$bytes] = $4;
      __label__ = 1;
      break;
     case 1:
      
      var $6 = HEAP[$x] * Math.pow(2, 8);
      
      
      var $9 = HEAP[HEAP[$bytes]];
      var $10 = Runtime.or64($6, $9);
      HEAP[$x] = $10;
      
      var $12 = HEAP[$bytes] + 1;
      HEAP[$bytes] = $12;
      
      var $14 = HEAP[$i] - 1;
      HEAP[$i] = $14;
      
      
      if (HEAP[$i] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$f_addr] + 4] <= 7) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      var $_cast = HEAP[HEAP[$f_addr] + 4] * 8 - 1;
      var $26 = 1 * Math.pow(2, $_cast);
      var $27 = HEAP[$x];
      var $28 = Runtime.and64($26, $27);
      var $29 = 0 - $28;
      var $30 = HEAP[$x];
      var $31 = Runtime.or64($29, $30);
      HEAP[$x] = $31;
      __label__ = 4;
      break;
     case 4:
      
      var $33 = HEAP[$x] >= -2147483648;
      if ($33) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      if (HEAP[$x] <= 2147483647) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $37 = HEAP[$x] & 4294967295;
      var $38 = _PyInt_FromLong($37);
      HEAP[$0] = $38;
      __label__ = 8;
      break;
     case 7:
      var $39 = HEAP[$x];
      var $40 = _PyLong_FromLongLong($39);
      HEAP[$0] = $40;
      __label__ = 8;
      break;
     case 8:
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
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
  function _bu_ulonglong($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $i = __stackBase__ + 24;
      var $bytes = __stackBase__ + 28;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      HEAP[$x] = 0;
      
      
      var $3 = HEAP[HEAP[$f_addr] + 4];
      HEAP[$i] = $3;
      var $4 = HEAP[$p_addr];
      HEAP[$bytes] = $4;
      __label__ = 1;
      break;
     case 1:
      
      var $6 = HEAP[$x] * Math.pow(2, 8);
      
      
      var $9 = HEAP[HEAP[$bytes]];
      var $10 = Runtime.or64($6, $9);
      HEAP[$x] = $10;
      
      var $12 = HEAP[$bytes] + 1;
      HEAP[$bytes] = $12;
      
      var $14 = HEAP[$i] - 1;
      HEAP[$i] = $14;
      
      
      if (HEAP[$i] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$x] <= 2147483647) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $20 = HEAP[$x] & 4294967295;
      var $21 = _PyInt_FromLong($20);
      HEAP[$0] = $21;
      __label__ = 5;
      break;
     case 4:
      var $22 = HEAP[$x];
      var $23 = _PyLong_FromUnsignedLongLong($22);
      HEAP[$0] = $23;
      __label__ = 5;
      break;
     case 5:
      var $24 = HEAP[$0];
      HEAP[$retval] = $24;
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
  function _bu_float($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$p_addr];
      var $2 = _unpack_float($1, 0);
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
  function _bu_double($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$p_addr];
      var $2 = _unpack_double($1, 0);
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
  function _bu_bool($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 17;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 17);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$p_addr];
      _llvm_memcpy_p0i8_p0i8_i32($x, $1, 1, 1, 0);
      
      
      var $4 = HEAP[$x] != 0;
      var $5 = _PyBool_FromLong($4);
      HEAP[$0] = $5;
      var $6 = HEAP[$0];
      HEAP[$retval] = $6;
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
  function _bp_int($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _get_long($1, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 9;
      break;
     case 2:
      
      
      var $6 = HEAP[HEAP[$f_addr] + 4];
      HEAP[$i] = $6;
      
      
      if (HEAP[$i] != 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      if (HEAP[$i] == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      var $12 = HEAP[$x] < -32768;
      if ($12) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      if (HEAP[$x] > 32767) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $15 = HEAP[$f_addr];
      var $16 = __range_error($15, 0);
      HEAP[$0] = $16;
      __label__ = 9;
      break;
     case 7:
      
      var $18 = HEAP[$i] - 1;
      HEAP[$i] = $18;
      
      var $20 = HEAP[$x] & 255;
      
      
      var $23 = HEAP[$p_addr] + HEAP[$i];
      HEAP[$23] = $20;
      
      var $25 = HEAP[$x] >> 8;
      HEAP[$x] = $25;
      
      
      if (HEAP[$i] > 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 9:
      var $28 = HEAP[$0];
      HEAP[$retval] = $28;
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
  function _bp_uint($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      var $maxint = __stackBase__ + 28;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _get_ulong($1, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 7;
      break;
     case 2:
      
      
      var $6 = HEAP[HEAP[$f_addr] + 4];
      HEAP[$i] = $6;
      
      
      if (HEAP[$i] != 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      HEAP[$maxint] = 1;
      
      
      
      var $12 = HEAP[$maxint] << HEAP[$i] * 8;
      HEAP[$maxint] = $12;
      
      
      
      if (HEAP[$x] >= HEAP[$maxint]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $16 = HEAP[$f_addr];
      var $17 = __range_error($16, 1);
      HEAP[$0] = $17;
      __label__ = 7;
      break;
     case 5:
      
      var $19 = HEAP[$i] - 1;
      HEAP[$i] = $19;
      
      var $21 = HEAP[$x] & 255;
      
      
      var $24 = HEAP[$p_addr] + HEAP[$i];
      HEAP[$24] = $21;
      
      var $26 = HEAP[$x] >>> 8;
      HEAP[$x] = $26;
      
      
      if (HEAP[$i] > 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $29 = HEAP[$0];
      HEAP[$retval] = $29;
      __label__ = 8;
      break;
     case 8:
      var $retval7 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _bp_longlong($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _get_pylong($1);
      HEAP[$v_addr] = $2;
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 2:
      var $5 = HEAP[$p_addr];
      
      var $7 = HEAP[$v_addr];
      var $8 = __PyLong_AsByteArray($7, $5, 8, 0, 1);
      HEAP[$res] = $8;
      
      
      
      var $12 = HEAP[HEAP[$v_addr]] - 1;
      
      var $14 = HEAP[$v_addr];
      HEAP[$14] = $12;
      
      
      
      
      if (HEAP[HEAP[$v_addr]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$v_addr] + 4] + 24];
      var $24 = HEAP[$v_addr];
      FUNCTION_TABLE[$23]($24);
      __label__ = 4;
      break;
     case 4:
      var $25 = HEAP[$res];
      HEAP[$0] = $25;
      __label__ = 5;
      break;
     case 5:
      var $26 = HEAP[$0];
      HEAP[$retval] = $26;
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
  function _bp_ulonglong($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _get_pylong($1);
      HEAP[$v_addr] = $2;
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 2:
      var $5 = HEAP[$p_addr];
      
      var $7 = HEAP[$v_addr];
      var $8 = __PyLong_AsByteArray($7, $5, 8, 0, 0);
      HEAP[$res] = $8;
      
      
      
      var $12 = HEAP[HEAP[$v_addr]] - 1;
      
      var $14 = HEAP[$v_addr];
      HEAP[$14] = $12;
      
      
      
      
      if (HEAP[HEAP[$v_addr]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$v_addr] + 4] + 24];
      var $24 = HEAP[$v_addr];
      FUNCTION_TABLE[$23]($24);
      __label__ = 4;
      break;
     case 4:
      var $25 = HEAP[$res];
      HEAP[$0] = $25;
      __label__ = 5;
      break;
     case 5:
      var $26 = HEAP[$0];
      HEAP[$retval] = $26;
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
  function _bp_float($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _PyFloat_AsDouble($1);
      HEAP[$x] = $2;
      
      var $4 = HEAP[$x] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $7 = HEAP[_StructError];
      _PyErr_SetString($7, __str18);
      HEAP[$0] = -1;
      __label__ = 4;
      break;
     case 3:
      var $8 = HEAP[$p_addr];
      var $9 = HEAP[$x];
      var $10 = __PyFloat_Pack4($9, $8, 0);
      HEAP[$0] = $10;
      __label__ = 4;
      break;
     case 4:
      var $11 = HEAP[$0];
      HEAP[$retval] = $11;
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
  function _bp_double($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _PyFloat_AsDouble($1);
      HEAP[$x] = $2;
      
      var $4 = HEAP[$x] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $7 = HEAP[_StructError];
      _PyErr_SetString($7, __str18);
      HEAP[$0] = -1;
      __label__ = 4;
      break;
     case 3:
      var $8 = HEAP[$p_addr];
      var $9 = HEAP[$x];
      var $10 = __PyFloat_Pack8($9, $8, 0);
      HEAP[$0] = $10;
      __label__ = 4;
      break;
     case 4:
      var $11 = HEAP[$0];
      HEAP[$retval] = $11;
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
  function _bp_bool($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $y = __stackBase__ + 20;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _PyObject_IsTrue($1);
      HEAP[$y] = $2;
      
      
      if (HEAP[$y] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 3;
      break;
     case 2:
      
      var $6 = HEAP[$y] & 255;
      var $7 = HEAP[$p_addr];
      HEAP[$7] = $6;
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 3:
      var $8 = HEAP[$0];
      HEAP[$retval] = $8;
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
  function _lu_int($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $bytes = __stackBase__ + 24;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      HEAP[$x] = 0;
      
      
      var $3 = HEAP[HEAP[$f_addr] + 4];
      HEAP[$i] = $3;
      var $4 = HEAP[$p_addr];
      HEAP[$bytes] = $4;
      __label__ = 1;
      break;
     case 1:
      
      var $6 = HEAP[$x] << 8;
      
      var $8 = HEAP[$i] - 1;
      HEAP[$i] = $8;
      
      
      
      
      
      var $14 = $6 | HEAP[HEAP[$bytes] + HEAP[$i]];
      HEAP[$x] = $14;
      
      
      if (HEAP[$i] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$f_addr] + 4] <= 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      
      var $31 = 0 - (1 << HEAP[HEAP[$f_addr] + 4] * 8 - 1 & HEAP[$x]) | HEAP[$x];
      HEAP[$x] = $31;
      __label__ = 4;
      break;
     case 4:
      var $32 = HEAP[$x];
      var $33 = _PyInt_FromLong($32);
      HEAP[$0] = $33;
      var $34 = HEAP[$0];
      HEAP[$retval] = $34;
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
  function _lu_uint($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $bytes = __stackBase__ + 24;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      HEAP[$x] = 0;
      
      
      var $3 = HEAP[HEAP[$f_addr] + 4];
      HEAP[$i] = $3;
      var $4 = HEAP[$p_addr];
      HEAP[$bytes] = $4;
      __label__ = 1;
      break;
     case 1:
      
      var $6 = HEAP[$x] << 8;
      
      var $8 = HEAP[$i] - 1;
      HEAP[$i] = $8;
      
      
      
      
      
      var $14 = $6 | HEAP[HEAP[$bytes] + HEAP[$i]];
      HEAP[$x] = $14;
      
      
      if (HEAP[$i] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$x] >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $19 = HEAP[$x];
      var $20 = _PyInt_FromLong($19);
      HEAP[$0] = $20;
      __label__ = 5;
      break;
     case 4:
      var $21 = HEAP[$x];
      var $22 = _PyLong_FromUnsignedLong($21);
      HEAP[$0] = $22;
      __label__ = 5;
      break;
     case 5:
      var $23 = HEAP[$0];
      HEAP[$retval] = $23;
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
  function _lu_longlong($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $i = __stackBase__ + 24;
      var $bytes = __stackBase__ + 28;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      HEAP[$x] = 0;
      
      
      var $3 = HEAP[HEAP[$f_addr] + 4];
      HEAP[$i] = $3;
      var $4 = HEAP[$p_addr];
      HEAP[$bytes] = $4;
      __label__ = 1;
      break;
     case 1:
      
      var $6 = HEAP[$x] * Math.pow(2, 8);
      
      var $8 = HEAP[$i] - 1;
      HEAP[$i] = $8;
      
      
      
      
      var $13 = HEAP[HEAP[$bytes] + HEAP[$i]];
      var $14 = Runtime.or64($6, $13);
      HEAP[$x] = $14;
      
      
      if (HEAP[$i] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$f_addr] + 4] <= 7) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      var $_cast = HEAP[HEAP[$f_addr] + 4] * 8 - 1;
      var $26 = 1 * Math.pow(2, $_cast);
      var $27 = HEAP[$x];
      var $28 = Runtime.and64($26, $27);
      var $29 = 0 - $28;
      var $30 = HEAP[$x];
      var $31 = Runtime.or64($29, $30);
      HEAP[$x] = $31;
      __label__ = 4;
      break;
     case 4:
      
      var $33 = HEAP[$x] >= -2147483648;
      if ($33) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      if (HEAP[$x] <= 2147483647) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $37 = HEAP[$x] & 4294967295;
      var $38 = _PyInt_FromLong($37);
      HEAP[$0] = $38;
      __label__ = 8;
      break;
     case 7:
      var $39 = HEAP[$x];
      var $40 = _PyLong_FromLongLong($39);
      HEAP[$0] = $40;
      __label__ = 8;
      break;
     case 8:
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
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
  function _lu_ulonglong($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $i = __stackBase__ + 24;
      var $bytes = __stackBase__ + 28;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      HEAP[$x] = 0;
      
      
      var $3 = HEAP[HEAP[$f_addr] + 4];
      HEAP[$i] = $3;
      var $4 = HEAP[$p_addr];
      HEAP[$bytes] = $4;
      __label__ = 1;
      break;
     case 1:
      
      var $6 = HEAP[$x] * Math.pow(2, 8);
      
      var $8 = HEAP[$i] - 1;
      HEAP[$i] = $8;
      
      
      
      
      var $13 = HEAP[HEAP[$bytes] + HEAP[$i]];
      var $14 = Runtime.or64($6, $13);
      HEAP[$x] = $14;
      
      
      if (HEAP[$i] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$x] <= 2147483647) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $20 = HEAP[$x] & 4294967295;
      var $21 = _PyInt_FromLong($20);
      HEAP[$0] = $21;
      __label__ = 5;
      break;
     case 4:
      var $22 = HEAP[$x];
      var $23 = _PyLong_FromUnsignedLongLong($22);
      HEAP[$0] = $23;
      __label__ = 5;
      break;
     case 5:
      var $24 = HEAP[$0];
      HEAP[$retval] = $24;
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
  function _lu_float($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$p_addr];
      var $2 = _unpack_float($1, 1);
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
  function _lu_double($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$p_addr] = $p;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$p_addr];
      var $2 = _unpack_double($1, 1);
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
  function _lp_int($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _get_long($1, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 9;
      break;
     case 2:
      
      
      var $6 = HEAP[HEAP[$f_addr] + 4];
      HEAP[$i] = $6;
      
      
      if (HEAP[$i] != 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      if (HEAP[$i] == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      var $12 = HEAP[$x] < -32768;
      if ($12) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      if (HEAP[$x] > 32767) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $15 = HEAP[$f_addr];
      var $16 = __range_error($15, 0);
      HEAP[$0] = $16;
      __label__ = 9;
      break;
     case 7:
      
      var $18 = HEAP[$x] & 255;
      var $19 = HEAP[$p_addr];
      HEAP[$19] = $18;
      
      var $21 = HEAP[$p_addr] + 1;
      HEAP[$p_addr] = $21;
      
      var $23 = HEAP[$x] >> 8;
      HEAP[$x] = $23;
      
      var $25 = HEAP[$i] - 1;
      HEAP[$i] = $25;
      
      
      if (HEAP[$i] > 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 9:
      var $28 = HEAP[$0];
      HEAP[$retval] = $28;
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
  function _lp_uint($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      var $maxint = __stackBase__ + 28;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _get_ulong($1, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 7;
      break;
     case 2:
      
      
      var $6 = HEAP[HEAP[$f_addr] + 4];
      HEAP[$i] = $6;
      
      
      if (HEAP[$i] != 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      HEAP[$maxint] = 1;
      
      
      
      var $12 = HEAP[$maxint] << HEAP[$i] * 8;
      HEAP[$maxint] = $12;
      
      
      
      if (HEAP[$x] >= HEAP[$maxint]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $16 = HEAP[$f_addr];
      var $17 = __range_error($16, 1);
      HEAP[$0] = $17;
      __label__ = 7;
      break;
     case 5:
      
      var $19 = HEAP[$x] & 255;
      var $20 = HEAP[$p_addr];
      HEAP[$20] = $19;
      
      var $22 = HEAP[$p_addr] + 1;
      HEAP[$p_addr] = $22;
      
      var $24 = HEAP[$x] >>> 8;
      HEAP[$x] = $24;
      
      var $26 = HEAP[$i] - 1;
      HEAP[$i] = $26;
      
      
      if (HEAP[$i] > 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $29 = HEAP[$0];
      HEAP[$retval] = $29;
      __label__ = 8;
      break;
     case 8:
      var $retval7 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _lp_longlong($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _get_pylong($1);
      HEAP[$v_addr] = $2;
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 2:
      var $5 = HEAP[$p_addr];
      
      var $7 = HEAP[$v_addr];
      var $8 = __PyLong_AsByteArray($7, $5, 8, 1, 1);
      HEAP[$res] = $8;
      
      
      
      var $12 = HEAP[HEAP[$v_addr]] - 1;
      
      var $14 = HEAP[$v_addr];
      HEAP[$14] = $12;
      
      
      
      
      if (HEAP[HEAP[$v_addr]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$v_addr] + 4] + 24];
      var $24 = HEAP[$v_addr];
      FUNCTION_TABLE[$23]($24);
      __label__ = 4;
      break;
     case 4:
      var $25 = HEAP[$res];
      HEAP[$0] = $25;
      __label__ = 5;
      break;
     case 5:
      var $26 = HEAP[$0];
      HEAP[$retval] = $26;
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
  function _lp_ulonglong($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _get_pylong($1);
      HEAP[$v_addr] = $2;
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 2:
      var $5 = HEAP[$p_addr];
      
      var $7 = HEAP[$v_addr];
      var $8 = __PyLong_AsByteArray($7, $5, 8, 1, 0);
      HEAP[$res] = $8;
      
      
      
      var $12 = HEAP[HEAP[$v_addr]] - 1;
      
      var $14 = HEAP[$v_addr];
      HEAP[$14] = $12;
      
      
      
      
      if (HEAP[HEAP[$v_addr]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$v_addr] + 4] + 24];
      var $24 = HEAP[$v_addr];
      FUNCTION_TABLE[$23]($24);
      __label__ = 4;
      break;
     case 4:
      var $25 = HEAP[$res];
      HEAP[$0] = $25;
      __label__ = 5;
      break;
     case 5:
      var $26 = HEAP[$0];
      HEAP[$retval] = $26;
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
  function _lp_float($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _PyFloat_AsDouble($1);
      HEAP[$x] = $2;
      
      var $4 = HEAP[$x] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $7 = HEAP[_StructError];
      _PyErr_SetString($7, __str18);
      HEAP[$0] = -1;
      __label__ = 4;
      break;
     case 3:
      var $8 = HEAP[$p_addr];
      var $9 = HEAP[$x];
      var $10 = __PyFloat_Pack4($9, $8, 1);
      HEAP[$0] = $10;
      __label__ = 4;
      break;
     case 4:
      var $11 = HEAP[$0];
      HEAP[$retval] = $11;
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
  function _lp_double($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$v_addr];
      var $2 = _PyFloat_AsDouble($1);
      HEAP[$x] = $2;
      
      var $4 = HEAP[$x] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $7 = HEAP[_StructError];
      _PyErr_SetString($7, __str18);
      HEAP[$0] = -1;
      __label__ = 4;
      break;
     case 3:
      var $8 = HEAP[$p_addr];
      var $9 = HEAP[$x];
      var $10 = __PyFloat_Pack8($9, $8, 1);
      HEAP[$0] = $10;
      __label__ = 4;
      break;
     case 4:
      var $11 = HEAP[$0];
      HEAP[$retval] = $11;
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
  function _whichtable($pfmt) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pfmt_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $fmt = __stackBase__ + 12;
      var $n = __stackBase__ + 16;
      var $p = __stackBase__ + 20;
      
      HEAP[$pfmt_addr] = $pfmt;
      
      var $2 = HEAP[HEAP[$pfmt_addr]];
      HEAP[$fmt] = $2;
      var $3 = $2 + 1;
      var $4 = HEAP[$pfmt_addr];
      HEAP[$4] = $3;
      
      
      var $7 = HEAP[HEAP[$fmt]];
      if ($7 == 33) {
        __label__ = 2;
        break;
      } else if ($7 == 60) {
        __label__ = 1;
        break;
      } else if ($7 == 61) {
        __label__ = 3;
        break;
      } else if ($7 == 62) {
        __label__ = 2;
        break;
      } else if ($7 == 64) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      HEAP[$0] = _lilendian_table;
      __label__ = 8;
      break;
     case 2:
      HEAP[$0] = _bigendian_table;
      __label__ = 8;
      break;
     case 3:
      HEAP[$n] = 1;
      
      HEAP[$p] = $n;
      
      
      
      if (HEAP[HEAP[$p]] == 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = _lilendian_table;
      __label__ = 8;
      break;
     case 5:
      HEAP[$0] = _bigendian_table;
      __label__ = 8;
      break;
     case 6:
      
      
      var $13 = HEAP[HEAP[$pfmt_addr]] + -1;
      var $14 = HEAP[$pfmt_addr];
      HEAP[$14] = $13;
      __label__ = 7;
      break;
     case 7:
      HEAP[$0] = _native_table;
      __label__ = 8;
      break;
     case 8:
      var $15 = HEAP[$0];
      HEAP[$retval] = $15;
      __label__ = 9;
      break;
     case 9:
      var $retval9 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _getentry($c, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $c_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$c_addr] = $c;
      HEAP[$f_addr] = $f;
      __label__ = 4;
      break;
     case 1:
      
      
      
      
      
      
      if (HEAP[HEAP[$f_addr]] == HEAP[$c_addr]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $7 = HEAP[$f_addr];
      HEAP[$0] = $7;
      __label__ = 6;
      break;
     case 3:
      
      var $9 = HEAP[$f_addr] + 20;
      HEAP[$f_addr] = $9;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      if (HEAP[HEAP[$f_addr]] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $14 = HEAP[_StructError];
      _PyErr_SetString($14, __str19);
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 6:
      var $15 = HEAP[$0];
      HEAP[$retval] = $15;
      __label__ = 7;
      break;
     case 7:
      var $retval6 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _align($size, $c, $e) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 21;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 21);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $size_addr = __stackBase__;
      var $c_addr = __stackBase__ + 4;
      var $e_addr = __stackBase__ + 5;
      var $retval = __stackBase__ + 9;
      var $0 = __stackBase__ + 13;
      var $extra = __stackBase__ + 17;
      
      HEAP[$size_addr] = $size;
      HEAP[$c_addr] = $c;
      HEAP[$e_addr] = $e;
      
      
      
      
      
      if (HEAP[HEAP[$e_addr]] == HEAP[$c_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$e_addr] + 8] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      
      
      if (HEAP[$size_addr] > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      
      var $22 = HEAP[HEAP[$e_addr] + 8] - 1 - (HEAP[$size_addr] - 1) % HEAP[HEAP[$e_addr] + 8];
      HEAP[$extra] = $22;
      
      
      
      
      if (2147483647 - HEAP[$size_addr] < HEAP[$extra]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 7;
      break;
     case 5:
      
      
      var $29 = HEAP[$size_addr] + HEAP[$extra];
      HEAP[$size_addr] = $29;
      __label__ = 6;
      break;
     case 6:
      var $30 = HEAP[$size_addr];
      HEAP[$0] = $30;
      __label__ = 7;
      break;
     case 7:
      var $31 = HEAP[$0];
      HEAP[$retval] = $31;
      __label__ = 8;
      break;
     case 8:
      var $retval7 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _prepare_s($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 57;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 57);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $iftmp_101 = __stackBase__ + 8;
      var $iftmp_100 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $f = __stackBase__ + 20;
      var $e = __stackBase__ + 24;
      var $codes = __stackBase__ + 28;
      var $s = __stackBase__ + 32;
      var $fmt = __stackBase__ + 36;
      var $c = __stackBase__ + 40;
      var $size = __stackBase__ + 41;
      var $len = __stackBase__ + 45;
      var $num = __stackBase__ + 49;
      var $itemsize = __stackBase__ + 53;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      
      var $6 = HEAP[HEAP[$self_addr] + 20] + 20;
      HEAP[$fmt] = $6;
      var $7 = _whichtable($fmt);
      HEAP[$f] = $7;
      var $8 = HEAP[$fmt];
      HEAP[$s] = $8;
      HEAP[$size] = 0;
      HEAP[$len] = 0;
      __label__ = 23;
      break;
     case 1:
      var $9 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$9] + 2 * HEAP[$c]] & 8192) != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$c] <= 47) {
        __label__ = 13;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$c] > 57) {
        __label__ = 13;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      var $24 = HEAP[$c] - 48;
      HEAP[$num] = $24;
      __label__ = 9;
      break;
     case 5:
      
      
      if (HEAP[$num] > 214748363) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      if (HEAP[$num] > 214748364) {
        __label__ = 57;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[$c] - 48 > 7) {
        __label__ = 57;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      var $38 = HEAP[$num] * 10 + (HEAP[$c] - 48);
      HEAP[$num] = $38;
      __label__ = 9;
      break;
     case 9:
      
      var $40 = HEAP[HEAP[$s]];
      HEAP[$c] = $40;
      
      
      var $43 = HEAP[$c] > 47;
      
      var $45 = HEAP[$s] + 1;
      HEAP[$s] = $45;
      
      
      
      
      if (($43 != 0 ^ 1) != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if (HEAP[$c] <= 57) {
        __label__ = 5;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      if (HEAP[$c] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      __label__ = 14;
      break;
     case 13:
      HEAP[$num] = 1;
      __label__ = 14;
      break;
     case 14:
      
      var $51 = HEAP[$c];
      var $52 = HEAP[$f];
      var $53 = _getentry($51, $52);
      HEAP[$e] = $53;
      
      
      
      if (HEAP[$e] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$0] = -1;
      __label__ = 58;
      break;
     case 16:
      
      var $58 = HEAP[$c];
      if ($58 == 112) {
        __label__ = 17;
        break;
      } else if ($58 == 115) {
        __label__ = 17;
        break;
      } else if ($58 == 120) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      var $60 = HEAP[$len] + 1;
      HEAP[$len] = $60;
      __label__ = 20;
      break;
     case 18:
      __label__ = 20;
      break;
     case 19:
      
      
      var $63 = HEAP[$len] + HEAP[$num];
      HEAP[$len] = $63;
      __label__ = 20;
      break;
     case 20:
      
      
      var $66 = HEAP[HEAP[$e] + 4];
      HEAP[$itemsize] = $66;
      
      
      var $69 = HEAP[$size];
      var $70 = HEAP[$c] & 255;
      var $71 = HEAP[$e];
      var $72 = _align($69, $70, $71);
      HEAP[$size] = $72;
      
      var $74 = HEAP[$size] == -1;
      if ($74) {
        __label__ = 57;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      
      if (((2147483647 - HEAP[$size]) / HEAP[$itemsize] | 0) < HEAP[$num]) {
        __label__ = 57;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      var $85 = HEAP[$num] * HEAP[$itemsize] + HEAP[$size];
      HEAP[$size] = $85;
      __label__ = 23;
      break;
     case 23:
      
      var $87 = HEAP[HEAP[$s]];
      HEAP[$c] = $87;
      
      
      var $90 = HEAP[$c] != 0;
      
      var $92 = HEAP[$s] + 1;
      HEAP[$s] = $92;
      
      if ($90 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      if (HEAP[$len] + 1 > 178956970) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $96 = _PyErr_NoMemory();
      HEAP[$0] = -1;
      __label__ = 58;
      break;
     case 26:
      
      var $98 = HEAP[$self_addr] + 8;
      var $99 = HEAP[$size];
      HEAP[$98] = $99;
      
      var $101 = HEAP[$self_addr] + 12;
      var $102 = HEAP[$len];
      HEAP[$101] = $102;
      
      
      
      
      if ((HEAP[$len] + 1) * 12 >= 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 27:
      
      
      
      
      if ((HEAP[$len] + 1) * 12 != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      var $113 = (HEAP[$len] + 1) * 12;
      HEAP[$iftmp_101] = $113;
      __label__ = 30;
      break;
     case 29:
      HEAP[$iftmp_101] = 1;
      __label__ = 30;
      break;
     case 30:
      var $114 = HEAP[$iftmp_101];
      var $115 = _malloc($114);
      var $116 = $115;
      HEAP[$iftmp_100] = $116;
      __label__ = 32;
      break;
     case 31:
      HEAP[$iftmp_100] = 0;
      __label__ = 32;
      break;
     case 32:
      var $117 = HEAP[$iftmp_100];
      HEAP[$codes] = $117;
      
      
      if (HEAP[$codes] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      var $120 = _PyErr_NoMemory();
      HEAP[$0] = -1;
      __label__ = 58;
      break;
     case 34:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      var $128 = HEAP[HEAP[$self_addr] + 16];
      _free($128);
      __label__ = 36;
      break;
     case 36:
      
      var $130 = HEAP[$self_addr] + 16;
      var $131 = HEAP[$codes];
      HEAP[$130] = $131;
      var $132 = HEAP[$fmt];
      HEAP[$s] = $132;
      HEAP[$size] = 0;
      __label__ = 55;
      break;
     case 37:
      var $133 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$133] + 2 * HEAP[$c]] & 8192) != 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      
      
      if (HEAP[$c] <= 47) {
        __label__ = 46;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      
      if (HEAP[$c] > 57) {
        __label__ = 46;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      
      
      var $148 = HEAP[$c] - 48;
      HEAP[$num] = $148;
      __label__ = 42;
      break;
     case 41:
      
      
      
      
      
      var $154 = HEAP[$num] * 10 + (HEAP[$c] - 48);
      HEAP[$num] = $154;
      __label__ = 42;
      break;
     case 42:
      
      var $156 = HEAP[HEAP[$s]];
      HEAP[$c] = $156;
      
      
      var $159 = HEAP[$c] > 47;
      
      var $161 = HEAP[$s] + 1;
      HEAP[$s] = $161;
      
      
      
      
      if (($159 != 0 ^ 1) != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      
      
      if (HEAP[$c] <= 57) {
        __label__ = 41;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      
      
      if (HEAP[$c] == 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 45:
      __label__ = 47;
      break;
     case 46:
      HEAP[$num] = 1;
      __label__ = 47;
      break;
     case 47:
      
      var $167 = HEAP[$c];
      var $168 = HEAP[$f];
      var $169 = _getentry($167, $168);
      HEAP[$e] = $169;
      
      
      var $172 = HEAP[$size];
      var $173 = HEAP[$c] & 255;
      var $174 = HEAP[$e];
      var $175 = _align($172, $173, $174);
      HEAP[$size] = $175;
      
      
      if (HEAP[$c] == 115) {
        __label__ = 49;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      
      
      if (HEAP[$c] == 112) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      var $181 = HEAP[$codes] + 4;
      var $182 = HEAP[$size];
      HEAP[$181] = $182;
      
      var $184 = HEAP[$codes] + 8;
      var $185 = HEAP[$num];
      HEAP[$184] = $185;
      
      var $187 = HEAP[$codes];
      var $188 = HEAP[$e];
      HEAP[$187] = $188;
      
      var $190 = HEAP[$codes] + 12;
      HEAP[$codes] = $190;
      
      
      var $193 = HEAP[$size] + HEAP[$num];
      HEAP[$size] = $193;
      __label__ = 55;
      break;
     case 50:
      
      
      if (HEAP[$c] == 120) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      
      
      var $198 = HEAP[$size] + HEAP[$num];
      HEAP[$size] = $198;
      __label__ = 55;
      break;
     case 52:
      __label__ = 54;
      break;
     case 53:
      
      var $200 = HEAP[$codes] + 4;
      var $201 = HEAP[$size];
      HEAP[$200] = $201;
      
      
      var $204 = HEAP[HEAP[$e] + 4];
      
      var $206 = HEAP[$codes] + 8;
      HEAP[$206] = $204;
      
      var $208 = HEAP[$codes];
      var $209 = HEAP[$e];
      HEAP[$208] = $209;
      
      var $211 = HEAP[$codes] + 12;
      HEAP[$codes] = $211;
      
      
      
      
      var $216 = HEAP[HEAP[$e] + 4] + HEAP[$size];
      HEAP[$size] = $216;
      __label__ = 54;
      break;
     case 54:
      
      var $218 = HEAP[$num] - 1;
      HEAP[$num] = $218;
      
      
      if (HEAP[$num] >= 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 55:
      
      var $222 = HEAP[HEAP[$s]];
      HEAP[$c] = $222;
      
      
      var $225 = HEAP[$c] != 0;
      
      var $227 = HEAP[$s] + 1;
      HEAP[$s] = $227;
      
      if ($225 != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 56:
      
      var $229 = HEAP[$codes];
      HEAP[$229] = 0;
      
      var $231 = HEAP[$codes] + 4;
      var $232 = HEAP[$size];
      HEAP[$231] = $232;
      
      var $234 = HEAP[$codes] + 8;
      HEAP[$234] = 0;
      HEAP[$0] = 0;
      __label__ = 58;
      break;
     case 57:
      var $235 = HEAP[_StructError];
      _PyErr_SetString($235, __str20);
      HEAP[$0] = -1;
      __label__ = 58;
      break;
     case 58:
      var $236 = HEAP[$0];
      HEAP[$retval] = $236;
      __label__ = 59;
      break;
     case 59:
      var $retval67 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval67;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _s_new($type, $args, $kwds) {
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
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $self = __stackBase__ + 20;
      var $s = __stackBase__ + 24;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      
      if (HEAP[$type_addr] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$type_addr] + 152] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str21, __str2, 1350, ___PRETTY_FUNCTION___9778);
      throw "Reached an unreachable!";
     case 3:
      
      
      var $9 = HEAP[HEAP[$type_addr] + 152];
      var $10 = HEAP[$type_addr];
      var $11 = FUNCTION_TABLE[$9]($10, 0);
      HEAP[$self] = $11;
      
      
      if (HEAP[$self] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $15 = HEAP[$self];
      HEAP[$s] = $15;
      
      var $17 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $17;
      
      var $19 = HEAP[$s] + 20;
      HEAP[$19] = __Py_NoneStruct;
      
      var $21 = HEAP[$s] + 16;
      HEAP[$21] = 0;
      
      var $23 = HEAP[$s] + 8;
      HEAP[$23] = -1;
      
      var $25 = HEAP[$s] + 12;
      HEAP[$25] = -1;
      __label__ = 5;
      break;
     case 5:
      var $26 = HEAP[$self];
      HEAP[$0] = $26;
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
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
  function _s_init($self, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $soself = __stackBase__ + 20;
      var $o_format = __stackBase__ + 24;
      var $ret = __stackBase__ + 28;
      var $_py_tmp = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      var $2 = HEAP[$self_addr];
      HEAP[$soself] = $2;
      HEAP[$o_format] = 0;
      HEAP[$ret] = 0;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 4] != _PyStructType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $9 = HEAP[HEAP[$self_addr] + 4];
      var $10 = _PyType_IsSubtype($9, _PyStructType);
      
      if ($10 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str22, __str2, 1372, ___PRETTY_FUNCTION___9801);
      throw "Reached an unreachable!";
     case 3:
      var $12 = HEAP[$args_addr];
      var $13 = HEAP[$kwds_addr];
      var $14 = __PyArg_ParseTupleAndKeywords_SizeT($12, $13, __str23, _kwlist_9800, allocate([ $o_format, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 9;
      break;
     case 5:
      
      
      
      var $19 = HEAP[HEAP[$o_format]] + 1;
      var $20 = HEAP[$o_format];
      HEAP[$20] = $19;
      
      
      
      
      if (HEAP[HEAP[$soself] + 20] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $27 = HEAP[HEAP[$soself] + 20];
      HEAP[$_py_tmp] = $27;
      
      var $29 = HEAP[$soself] + 20;
      HEAP[$29] = 0;
      
      
      
      var $33 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $35 = HEAP[$_py_tmp];
      HEAP[$35] = $33;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $45 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$44]($45);
      __label__ = 8;
      break;
     case 8:
      var $46 = HEAP[$o_format];
      
      var $48 = HEAP[$soself] + 20;
      HEAP[$48] = $46;
      var $49 = HEAP[$soself];
      var $50 = _prepare_s($49);
      HEAP[$ret] = $50;
      var $51 = HEAP[$ret];
      HEAP[$0] = $51;
      __label__ = 9;
      break;
     case 9:
      var $52 = HEAP[$0];
      HEAP[$retval] = $52;
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
  function _s_dealloc($s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      
      HEAP[$s_addr] = $s;
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 24] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $5 = HEAP[$s_addr];
      _PyObject_ClearWeakRefs($5);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 16] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $13 = HEAP[HEAP[$s_addr] + 16];
      _free($13);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 20] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      var $20 = HEAP[HEAP[$s_addr] + 20];
      
      
      var $23 = HEAP[$20] - 1;
      var $24 = $20;
      HEAP[$24] = $23;
      
      
      
      if (HEAP[$20] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      
      var $34 = HEAP[HEAP[HEAP[HEAP[$s_addr] + 20] + 4] + 24];
      
      
      var $37 = HEAP[HEAP[$s_addr] + 20];
      FUNCTION_TABLE[$34]($37);
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      
      var $43 = HEAP[HEAP[HEAP[$s_addr] + 4] + 160];
      
      var $45 = HEAP[$s_addr];
      FUNCTION_TABLE[$43]($45);
      __label__ = 8;
      break;
     case 8:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _s_unpack_internal($soself, $startfrom) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $soself_addr = __stackBase__;
      var $startfrom_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $code = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $result = __stackBase__ + 24;
      var $v = __stackBase__ + 28;
      var $e = __stackBase__ + 32;
      var $res = __stackBase__ + 36;
      var $n = __stackBase__ + 40;
      
      HEAP[$soself_addr] = $soself;
      HEAP[$startfrom_addr] = $startfrom;
      HEAP[$i] = 0;
      
      
      var $3 = HEAP[HEAP[$soself_addr] + 12];
      var $4 = _PyTuple_New($3);
      HEAP[$result] = $4;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 2:
      
      
      var $9 = HEAP[HEAP[$soself_addr] + 16];
      HEAP[$code] = $9;
      __label__ = 12;
      break;
     case 3:
      
      
      var $12 = HEAP[HEAP[$code]];
      HEAP[$e] = $12;
      
      
      
      
      var $17 = HEAP[$startfrom_addr] + HEAP[HEAP[$code] + 4];
      HEAP[$res] = $17;
      
      
      
      
      if (HEAP[HEAP[$e]] == 115) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $24 = HEAP[HEAP[$code] + 8];
      var $25 = HEAP[$res];
      var $26 = _PyString_FromStringAndSize($25, $24);
      HEAP[$v] = $26;
      __label__ = 10;
      break;
     case 5:
      
      
      
      
      if (HEAP[HEAP[$e]] == 112) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      var $33 = HEAP[HEAP[$res]];
      HEAP[$n] = $33;
      
      
      
      
      
      if (HEAP[HEAP[$code] + 8] <= HEAP[$n]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      var $42 = HEAP[HEAP[$code] + 8] - 1;
      HEAP[$n] = $42;
      __label__ = 8;
      break;
     case 8:
      
      var $44 = HEAP[$res] + 1;
      var $45 = HEAP[$n];
      var $46 = _PyString_FromStringAndSize($44, $45);
      HEAP[$v] = $46;
      __label__ = 10;
      break;
     case 9:
      
      
      var $49 = HEAP[HEAP[$e] + 12];
      var $50 = HEAP[$res];
      var $51 = HEAP[$e];
      var $52 = FUNCTION_TABLE[$49]($50, $51);
      HEAP[$v] = $52;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$v] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      var $59 = HEAP[$result] + 12 + HEAP[$i] * 4;
      var $60 = HEAP[$v];
      HEAP[$59] = $60;
      
      var $62 = HEAP[$i] + 1;
      HEAP[$i] = $62;
      
      var $64 = HEAP[$code] + 12;
      HEAP[$code] = $64;
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      
      if (HEAP[HEAP[$code]] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $70 = HEAP[$result];
      HEAP[$0] = $70;
      __label__ = 17;
      break;
     case 14:
      
      
      
      var $74 = HEAP[HEAP[$result]] - 1;
      
      var $76 = HEAP[$result];
      HEAP[$76] = $74;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $85 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $86 = HEAP[$result];
      FUNCTION_TABLE[$85]($86);
      __label__ = 16;
      break;
     case 16:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 17:
      var $87 = HEAP[$0];
      HEAP[$retval] = $87;
      __label__ = 18;
      break;
     case 18:
      var $retval16 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _s_unpack($self, $inputstr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $inputstr_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $start = __stackBase__ + 16;
      var $len = __stackBase__ + 20;
      var $args = __stackBase__ + 24;
      var $result = __stackBase__ + 28;
      var $soself = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$inputstr_addr] = $inputstr;
      HEAP[$args] = 0;
      
      var $2 = HEAP[$self_addr];
      HEAP[$soself] = $2;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 4] != _PyStructType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $9 = HEAP[HEAP[$self_addr] + 4];
      var $10 = _PyType_IsSubtype($9, _PyStructType);
      
      if ($10 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str22, __str2, 1446, ___PRETTY_FUNCTION___9921);
      throw "Reached an unreachable!";
     case 3:
      
      
      
      
      if (HEAP[HEAP[$soself] + 16] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str25, __str2, 1447, ___PRETTY_FUNCTION___9921);
      throw "Reached an unreachable!";
     case 5:
      
      
      if (HEAP[$inputstr_addr] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$inputstr_addr] + 4] + 84] & 134217728) != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$inputstr_addr] + 8] == HEAP[HEAP[$soself] + 8]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      var $36 = HEAP[$inputstr_addr] + 20;
      var $37 = HEAP[$soself];
      var $38 = _s_unpack_internal($37, $36);
      HEAP[$0] = $38;
      __label__ = 20;
      break;
     case 9:
      var $39 = HEAP[$inputstr_addr];
      var $40 = _PyTuple_Pack(1, allocate([ $39, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$args] = $40;
      
      
      if (HEAP[$args] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 11:
      var $43 = HEAP[$args];
      var $44 = __PyArg_ParseTuple_SizeT($43, __str26, allocate([ $start, 0, 0, 0, $len, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($44 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      if (HEAP[HEAP[$soself] + 8] != HEAP[$len]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $51 = HEAP[$start];
      var $52 = HEAP[$soself];
      var $53 = _s_unpack_internal($52, $51);
      HEAP[$result] = $53;
      
      
      
      var $57 = HEAP[HEAP[$args]] - 1;
      
      var $59 = HEAP[$args];
      HEAP[$59] = $57;
      
      
      
      
      if (HEAP[HEAP[$args]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $68 = HEAP[HEAP[HEAP[$args] + 4] + 24];
      var $69 = HEAP[$args];
      FUNCTION_TABLE[$68]($69);
      __label__ = 15;
      break;
     case 15:
      var $70 = HEAP[$result];
      HEAP[$0] = $70;
      __label__ = 20;
      break;
     case 16:
      
      
      if (HEAP[$args] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      var $76 = HEAP[HEAP[$args]] - 1;
      
      var $78 = HEAP[$args];
      HEAP[$78] = $76;
      
      
      
      
      if (HEAP[HEAP[$args]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $87 = HEAP[HEAP[HEAP[$args] + 4] + 24];
      var $88 = HEAP[$args];
      FUNCTION_TABLE[$87]($88);
      __label__ = 19;
      break;
     case 19:
      
      
      var $91 = HEAP[HEAP[$soself] + 8];
      var $92 = HEAP[_StructError];
      var $93 = _PyErr_Format($92, __str27, allocate([ $91, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 20:
      var $94 = HEAP[$0];
      HEAP[$retval] = $94;
      __label__ = 21;
      break;
     case 21:
      var $retval19 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _s_unpack_from($self, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $buffer_len = __stackBase__ + 20;
      var $offset = __stackBase__ + 24;
      var $buffer = __stackBase__ + 28;
      var $soself = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$buffer_len] = 0;
      HEAP[$offset] = 0;
      HEAP[$buffer] = 0;
      
      var $2 = HEAP[$self_addr];
      HEAP[$soself] = $2;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 4] != _PyStructType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $9 = HEAP[HEAP[$self_addr] + 4];
      var $10 = _PyType_IsSubtype($9, _PyStructType);
      
      if ($10 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str22, __str2, 1493, ___PRETTY_FUNCTION___9989);
      throw "Reached an unreachable!";
     case 3:
      
      
      
      
      if (HEAP[HEAP[$soself] + 16] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str25, __str2, 1494, ___PRETTY_FUNCTION___9989);
      throw "Reached an unreachable!";
     case 5:
      var $16 = HEAP[_fmt_9984];
      var $17 = HEAP[$args_addr];
      var $18 = HEAP[$kwds_addr];
      var $19 = __PyArg_ParseTupleAndKeywords_SizeT($17, $18, $16, _kwlist_9983, allocate([ $buffer, 0, 0, 0, $buffer_len, 0, 0, 0, $offset, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($19 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 7:
      
      
      if (HEAP[$buffer] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $23 = HEAP[_StructError];
      var $24 = _PyErr_Format($23, __str31, allocate(1, "i32", ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 9:
      
      
      if (HEAP[$offset] < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      var $29 = HEAP[$offset] + HEAP[$buffer_len];
      HEAP[$offset] = $29;
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$offset] < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      if (HEAP[$buffer_len] - HEAP[$offset] < HEAP[HEAP[$soself] + 8]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      var $41 = HEAP[HEAP[$soself] + 8];
      var $42 = HEAP[_StructError];
      var $43 = _PyErr_Format($42, __str32, allocate([ $41, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 14:
      
      
      var $46 = HEAP[$buffer] + HEAP[$offset];
      var $47 = HEAP[$soself];
      var $48 = _s_unpack_internal($47, $46);
      HEAP[$0] = $48;
      __label__ = 15;
      break;
     case 15:
      var $49 = HEAP[$0];
      HEAP[$retval] = $49;
      __label__ = 16;
      break;
     case 16:
      var $retval15 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _s_pack_internal($soself, $args, $offset, $buf) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $soself_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $offset_addr = __stackBase__ + 8;
      var $buf_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $code = __stackBase__ + 24;
      var $i = __stackBase__ + 28;
      var $n = __stackBase__ + 32;
      var $v = __stackBase__ + 36;
      var $e = __stackBase__ + 40;
      var $res = __stackBase__ + 44;
      
      HEAP[$soself_addr] = $soself;
      HEAP[$args_addr] = $args;
      HEAP[$offset_addr] = $offset;
      HEAP[$buf_addr] = $buf;
      
      
      var $3 = HEAP[HEAP[$soself_addr] + 8];
      var $4 = HEAP[$buf_addr];
      _llvm_memset_p0i8_i32($4, 0, $3, 1, 0);
      var $5 = HEAP[$offset_addr];
      HEAP[$i] = $5;
      
      
      var $8 = HEAP[HEAP[$soself_addr] + 16];
      HEAP[$code] = $8;
      __label__ = 25;
      break;
     case 1:
      
      
      
      
      
      var $14 = HEAP[HEAP[$args_addr] + 12 + HEAP[$i] * 4];
      HEAP[$v] = $14;
      
      var $16 = HEAP[$i] + 1;
      HEAP[$i] = $16;
      
      
      var $19 = HEAP[HEAP[$code]];
      HEAP[$e] = $19;
      
      
      
      
      var $24 = HEAP[$buf_addr] + HEAP[HEAP[$code] + 4];
      HEAP[$res] = $24;
      
      
      
      
      if (HEAP[HEAP[$e]] == 115) {
        __label__ = 2;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v] + 4] + 84] & 134217728) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $36 = HEAP[_StructError];
      _PyErr_SetString($36, __str33);
      HEAP[$0] = -1;
      __label__ = 27;
      break;
     case 4:
      
      
      
      var $40 = HEAP[HEAP[$v] + 8];
      HEAP[$n] = $40;
      
      
      
      
      
      if (HEAP[HEAP[$code] + 8] < HEAP[$n]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $48 = HEAP[HEAP[$code] + 8];
      HEAP[$n] = $48;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$n] > 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $51 = HEAP[$n];
      
      
      
      var $55 = HEAP[$v] + 20;
      var $56 = HEAP[$res];
      _llvm_memcpy_p0i8_p0i8_i32($56, $55, $51, 1, 0);
      __label__ = 8;
      break;
     case 8:
      __label__ = 24;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$e]] == 112) {
        __label__ = 10;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v] + 4] + 84] & 134217728) == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $68 = HEAP[_StructError];
      _PyErr_SetString($68, __str34);
      HEAP[$0] = -1;
      __label__ = 27;
      break;
     case 12:
      
      
      
      var $72 = HEAP[HEAP[$v] + 8];
      HEAP[$n] = $72;
      
      
      
      
      
      
      if (HEAP[HEAP[$code] + 8] - 1 < HEAP[$n]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      var $82 = HEAP[HEAP[$code] + 8] - 1;
      HEAP[$n] = $82;
      __label__ = 14;
      break;
     case 14:
      
      
      if (HEAP[$n] > 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $85 = HEAP[$n];
      
      
      
      var $89 = HEAP[$v] + 20;
      
      var $91 = HEAP[$res] + 1;
      _llvm_memcpy_p0i8_p0i8_i32($91, $89, $85, 1, 0);
      __label__ = 16;
      break;
     case 16:
      
      
      if (HEAP[$n] > 255) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      HEAP[$n] = 255;
      __label__ = 18;
      break;
     case 18:
      
      var $95 = HEAP[$n] & 255;
      var $96 = HEAP[$res];
      HEAP[$96] = $95;
      __label__ = 24;
      break;
     case 19:
      
      
      var $99 = HEAP[HEAP[$e] + 16];
      var $100 = HEAP[$res];
      var $101 = HEAP[$v];
      var $102 = HEAP[$e];
      var $103 = FUNCTION_TABLE[$99]($100, $101, $102);
      
      if ($103 < 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 20:
      
      
      
      var $108 = HEAP[HEAP[$e]];
      var $109 = HEAP[_integer_codes];
      var $110 = _strchr($109, $108);
      
      if ($110 != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      var $112 = HEAP[_PyExc_OverflowError];
      var $113 = _PyErr_ExceptionMatches($112);
      
      if ($113 != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      var $118 = HEAP[HEAP[$e]];
      var $119 = HEAP[_StructError];
      var $120 = _PyErr_Format($119, __str35, allocate([ $118, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 23;
      break;
     case 23:
      HEAP[$0] = -1;
      __label__ = 27;
      break;
     case 24:
      
      var $122 = HEAP[$code] + 12;
      HEAP[$code] = $122;
      __label__ = 25;
      break;
     case 25:
      
      
      
      
      
      if (HEAP[HEAP[$code]] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 27:
      var $128 = HEAP[$0];
      HEAP[$retval] = $128;
      __label__ = 28;
      break;
     case 28:
      var $retval27 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _s_pack($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $soself = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      
      var $2 = HEAP[$self_addr];
      HEAP[$soself] = $2;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 4] != _PyStructType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $9 = HEAP[HEAP[$self_addr] + 4];
      var $10 = _PyType_IsSubtype($9, _PyStructType);
      
      if ($10 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str22, __str2, 1601, ___PRETTY_FUNCTION___10122);
      throw "Reached an unreachable!";
     case 3:
      
      
      
      
      if (HEAP[HEAP[$soself] + 16] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str25, __str2, 1602, ___PRETTY_FUNCTION___10122);
      throw "Reached an unreachable!";
     case 5:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$args_addr] + 8] != HEAP[HEAP[$soself] + 12]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      var $26 = HEAP[HEAP[$soself] + 12];
      var $27 = HEAP[_StructError];
      var $28 = _PyErr_Format($27, __str36, allocate([ $26, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 7:
      
      
      var $31 = HEAP[HEAP[$soself] + 8];
      var $32 = _PyString_FromStringAndSize(0, $31);
      HEAP[$result] = $32;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 9:
      
      
      
      var $38 = HEAP[$result] + 20;
      var $39 = HEAP[$soself];
      var $40 = HEAP[$args_addr];
      var $41 = _s_pack_internal($39, $40, 0, $38);
      
      if ($41 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      var $46 = HEAP[HEAP[$result]] - 1;
      
      var $48 = HEAP[$result];
      HEAP[$48] = $46;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $58 = HEAP[$result];
      FUNCTION_TABLE[$57]($58);
      __label__ = 12;
      break;
     case 12:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 13:
      var $59 = HEAP[$result];
      HEAP[$0] = $59;
      __label__ = 14;
      break;
     case 14:
      var $60 = HEAP[$0];
      HEAP[$retval] = $60;
      __label__ = 15;
      break;
     case 15:
      var $retval14 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _s_pack_into($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $soself = __stackBase__ + 16;
      var $buffer = __stackBase__ + 20;
      var $buffer_len = __stackBase__ + 24;
      var $offset = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      
      var $2 = HEAP[$self_addr];
      HEAP[$soself] = $2;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 4] != _PyStructType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $9 = HEAP[HEAP[$self_addr] + 4];
      var $10 = _PyType_IsSubtype($9, _PyStructType);
      
      if ($10 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str22, __str2, 1641, ___PRETTY_FUNCTION___10167);
      throw "Reached an unreachable!";
     case 3:
      
      
      
      
      if (HEAP[HEAP[$soself] + 16] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str25, __str2, 1642, ___PRETTY_FUNCTION___10167);
      throw "Reached an unreachable!";
     case 5:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$args_addr] + 8] != HEAP[HEAP[$soself] + 12] + 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $28 = HEAP[HEAP[$soself] + 12] + 2;
      var $29 = HEAP[_StructError];
      var $30 = _PyErr_Format($29, __str37, allocate([ $28, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 7:
      
      
      
      
      var $35 = HEAP[HEAP[$args_addr] + 12];
      var $36 = _PyObject_AsWriteBuffer($35, $buffer, $buffer_len);
      var $37 = $36 == -1;
      if ($37) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 9:
      
      
      if (HEAP[$buffer_len] < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str38, __str2, 1656, ___PRETTY_FUNCTION___10167);
      throw "Reached an unreachable!";
     case 11:
      
      
      
      
      var $44 = HEAP[HEAP[$args_addr] + 12 + 4];
      var $45 = _PyInt_AsSsize_t($44);
      HEAP[$offset] = $45;
      
      var $47 = HEAP[$offset] == -1;
      if ($47) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      var $48 = _PyErr_Occurred();
      
      if ($48 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 14:
      
      
      if (HEAP[$offset] < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      var $54 = HEAP[$offset] + HEAP[$buffer_len];
      HEAP[$offset] = $54;
      __label__ = 16;
      break;
     case 16:
      
      
      if (HEAP[$offset] < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      if (HEAP[$buffer_len] - HEAP[$offset] < HEAP[HEAP[$soself] + 8]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      var $66 = HEAP[HEAP[$soself] + 8];
      var $67 = HEAP[_StructError];
      var $68 = _PyErr_Format($67, __str39, allocate([ $66, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 19:
      
      
      var $71 = HEAP[$buffer] + HEAP[$offset];
      var $72 = HEAP[$soself];
      var $73 = HEAP[$args_addr];
      var $74 = _s_pack_internal($72, $73, 2, $71);
      
      if ($74 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 21:
      
      var $77 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $77;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 22;
      break;
     case 22:
      var $78 = HEAP[$0];
      HEAP[$retval] = $78;
      __label__ = 23;
      break;
     case 23:
      var $retval23 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval23;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _s_get_format($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      
      
      
      
      
      var $6 = HEAP[HEAP[HEAP[$self_addr] + 20]] + 1;
      var $7 = HEAP[HEAP[$self_addr] + 20];
      HEAP[$7] = $6;
      
      
      var $10 = HEAP[HEAP[$self_addr] + 20];
      HEAP[$0] = $10;
      var $11 = HEAP[$0];
      HEAP[$retval] = $11;
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
  function _s_get_size($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 8];
      var $4 = _PyInt_FromSsize_t($3);
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
  function _cache_struct($fmt) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $fmt_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $s_object = __stackBase__ + 12;
      
      HEAP[$fmt_addr] = $fmt;
      
      
      if (HEAP[_cache] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = _PyDict_New();
      HEAP[_cache] = $3;
      
      
      if (HEAP[_cache] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 3:
      var $6 = HEAP[_cache];
      var $7 = HEAP[$fmt_addr];
      var $8 = _PyDict_GetItem($6, $7);
      HEAP[$s_object] = $8;
      
      
      if (HEAP[$s_object] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      var $14 = HEAP[HEAP[$s_object]] + 1;
      
      var $16 = HEAP[$s_object];
      HEAP[$16] = $14;
      var $17 = HEAP[$s_object];
      HEAP[$0] = $17;
      __label__ = 11;
      break;
     case 5:
      var $18 = HEAP[$fmt_addr];
      var $19 = _PyObject_CallFunctionObjArgs(_PyStructType, allocate([ $18, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$s_object] = $19;
      
      
      if (HEAP[$s_object] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      var $22 = HEAP[_cache];
      var $23 = _PyDict_Size($22);
      
      if ($23 > 99) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $25 = HEAP[_cache];
      _PyDict_Clear($25);
      __label__ = 8;
      break;
     case 8:
      var $26 = HEAP[_cache];
      var $27 = HEAP[$fmt_addr];
      var $28 = HEAP[$s_object];
      var $29 = _PyDict_SetItem($26, $27, $28);
      var $30 = $29 == -1;
      if ($30) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      _PyErr_Clear();
      __label__ = 10;
      break;
     case 10:
      var $31 = HEAP[$s_object];
      HEAP[$0] = $31;
      __label__ = 11;
      break;
     case 11:
      var $32 = HEAP[$0];
      HEAP[$retval] = $32;
      __label__ = 12;
      break;
     case 12:
      var $retval11 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _clearcache($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $_py_tmp = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $self;
      
      
      if (HEAP[_cache] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[_cache];
      HEAP[$_py_tmp] = $3;
      HEAP[_cache] = 0;
      
      
      
      var $7 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $9 = HEAP[$_py_tmp];
      HEAP[$9] = $7;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $18 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $19 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$18]($19);
      __label__ = 3;
      break;
     case 3:
      
      var $21 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $21;
      HEAP[$0] = __Py_NoneStruct;
      var $22 = HEAP[$0];
      HEAP[$retval] = $22;
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
  function _calcsize($self, $fmt) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $fmt_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $n = __stackBase__ + 16;
      var $s_object = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$fmt_addr] = $fmt;
      var $1 = HEAP[$fmt_addr];
      var $2 = _cache_struct($1);
      HEAP[$s_object] = $2;
      
      
      if (HEAP[$s_object] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 2:
      
      
      
      var $8 = HEAP[HEAP[$s_object] + 8];
      HEAP[$n] = $8;
      
      
      
      var $12 = HEAP[HEAP[$s_object]] - 1;
      
      var $14 = HEAP[$s_object];
      HEAP[$14] = $12;
      
      
      
      
      if (HEAP[HEAP[$s_object]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$s_object] + 4] + 24];
      var $24 = HEAP[$s_object];
      FUNCTION_TABLE[$23]($24);
      __label__ = 4;
      break;
     case 4:
      var $25 = HEAP[$n];
      var $26 = _PyInt_FromSsize_t($25);
      HEAP[$0] = $26;
      __label__ = 5;
      break;
     case 5:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
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
  function _pack($self, $args) {
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
      var $s_object = __stackBase__ + 16;
      var $fmt = __stackBase__ + 20;
      var $newargs = __stackBase__ + 24;
      var $result = __stackBase__ + 28;
      var $n = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      
      
      
      var $4 = HEAP[HEAP[$args_addr] + 8];
      HEAP[$n] = $4;
      
      
      if (HEAP[$n] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($7, __str48);
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 2:
      
      
      
      
      var $12 = HEAP[HEAP[$args_addr] + 12];
      HEAP[$fmt] = $12;
      var $13 = HEAP[$args_addr];
      var $14 = HEAP[$n];
      var $15 = _PyTuple_GetSlice($13, 1, $14);
      HEAP[$newargs] = $15;
      
      
      if (HEAP[$newargs] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 4:
      var $18 = HEAP[$fmt];
      var $19 = _cache_struct($18);
      HEAP[$s_object] = $19;
      
      
      if (HEAP[$s_object] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $25 = HEAP[HEAP[$newargs]] - 1;
      
      var $27 = HEAP[$newargs];
      HEAP[$27] = $25;
      
      
      
      
      if (HEAP[HEAP[$newargs]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[$newargs] + 4] + 24];
      var $37 = HEAP[$newargs];
      FUNCTION_TABLE[$36]($37);
      __label__ = 7;
      break;
     case 7:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 8:
      var $38 = HEAP[$s_object];
      var $39 = HEAP[$newargs];
      var $40 = _s_pack($38, $39);
      HEAP[$result] = $40;
      
      
      
      var $44 = HEAP[HEAP[$newargs]] - 1;
      
      var $46 = HEAP[$newargs];
      HEAP[$46] = $44;
      
      
      
      
      if (HEAP[HEAP[$newargs]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$newargs] + 4] + 24];
      var $56 = HEAP[$newargs];
      FUNCTION_TABLE[$55]($56);
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $60 = HEAP[HEAP[$s_object]] - 1;
      
      var $62 = HEAP[$s_object];
      HEAP[$62] = $60;
      
      
      
      
      if (HEAP[HEAP[$s_object]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $71 = HEAP[HEAP[HEAP[$s_object] + 4] + 24];
      var $72 = HEAP[$s_object];
      FUNCTION_TABLE[$71]($72);
      __label__ = 12;
      break;
     case 12:
      var $73 = HEAP[$result];
      HEAP[$0] = $73;
      __label__ = 13;
      break;
     case 13:
      var $74 = HEAP[$0];
      HEAP[$retval] = $74;
      __label__ = 14;
      break;
     case 14:
      var $retval13 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _pack_into($self, $args) {
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
      var $s_object = __stackBase__ + 16;
      var $fmt = __stackBase__ + 20;
      var $newargs = __stackBase__ + 24;
      var $result = __stackBase__ + 28;
      var $n = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      
      
      
      var $4 = HEAP[HEAP[$args_addr] + 8];
      HEAP[$n] = $4;
      
      
      if (HEAP[$n] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($7, __str48);
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 2:
      
      
      
      
      var $12 = HEAP[HEAP[$args_addr] + 12];
      HEAP[$fmt] = $12;
      var $13 = HEAP[$args_addr];
      var $14 = HEAP[$n];
      var $15 = _PyTuple_GetSlice($13, 1, $14);
      HEAP[$newargs] = $15;
      
      
      if (HEAP[$newargs] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 4:
      var $18 = HEAP[$fmt];
      var $19 = _cache_struct($18);
      HEAP[$s_object] = $19;
      
      
      if (HEAP[$s_object] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $25 = HEAP[HEAP[$newargs]] - 1;
      
      var $27 = HEAP[$newargs];
      HEAP[$27] = $25;
      
      
      
      
      if (HEAP[HEAP[$newargs]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[$newargs] + 4] + 24];
      var $37 = HEAP[$newargs];
      FUNCTION_TABLE[$36]($37);
      __label__ = 7;
      break;
     case 7:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 8:
      var $38 = HEAP[$s_object];
      var $39 = HEAP[$newargs];
      var $40 = _s_pack_into($38, $39);
      HEAP[$result] = $40;
      
      
      
      var $44 = HEAP[HEAP[$newargs]] - 1;
      
      var $46 = HEAP[$newargs];
      HEAP[$46] = $44;
      
      
      
      
      if (HEAP[HEAP[$newargs]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$newargs] + 4] + 24];
      var $56 = HEAP[$newargs];
      FUNCTION_TABLE[$55]($56);
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $60 = HEAP[HEAP[$s_object]] - 1;
      
      var $62 = HEAP[$s_object];
      HEAP[$62] = $60;
      
      
      
      
      if (HEAP[HEAP[$s_object]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $71 = HEAP[HEAP[HEAP[$s_object] + 4] + 24];
      var $72 = HEAP[$s_object];
      FUNCTION_TABLE[$71]($72);
      __label__ = 12;
      break;
     case 12:
      var $73 = HEAP[$result];
      HEAP[$0] = $73;
      __label__ = 13;
      break;
     case 13:
      var $74 = HEAP[$0];
      HEAP[$retval] = $74;
      __label__ = 14;
      break;
     case 14:
      var $retval13 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _unpack($self, $args) {
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
      var $s_object = __stackBase__ + 16;
      var $fmt = __stackBase__ + 20;
      var $inputstr = __stackBase__ + 24;
      var $result = __stackBase__ + 28;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str42, 2, 2, allocate([ $fmt, 0, 0, 0, $inputstr, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 2:
      var $4 = HEAP[$fmt];
      var $5 = _cache_struct($4);
      HEAP[$s_object] = $5;
      
      
      if (HEAP[$s_object] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 4:
      var $8 = HEAP[$inputstr];
      var $9 = HEAP[$s_object];
      var $10 = _s_unpack($9, $8);
      HEAP[$result] = $10;
      
      
      
      var $14 = HEAP[HEAP[$s_object]] - 1;
      
      var $16 = HEAP[$s_object];
      HEAP[$16] = $14;
      
      
      
      
      if (HEAP[HEAP[$s_object]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $25 = HEAP[HEAP[HEAP[$s_object] + 4] + 24];
      var $26 = HEAP[$s_object];
      FUNCTION_TABLE[$25]($26);
      __label__ = 6;
      break;
     case 6:
      var $27 = HEAP[$result];
      HEAP[$0] = $27;
      __label__ = 7;
      break;
     case 7:
      var $28 = HEAP[$0];
      HEAP[$retval] = $28;
      __label__ = 8;
      break;
     case 8:
      var $retval7 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _unpack_from($self, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $s_object = __stackBase__ + 20;
      var $fmt = __stackBase__ + 24;
      var $newargs = __stackBase__ + 28;
      var $result = __stackBase__ + 32;
      var $n = __stackBase__ + 36;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      
      
      var $4 = HEAP[HEAP[$args_addr] + 8];
      HEAP[$n] = $4;
      
      
      if (HEAP[$n] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($7, __str48);
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 2:
      
      
      
      
      var $12 = HEAP[HEAP[$args_addr] + 12];
      HEAP[$fmt] = $12;
      var $13 = HEAP[$args_addr];
      var $14 = HEAP[$n];
      var $15 = _PyTuple_GetSlice($13, 1, $14);
      HEAP[$newargs] = $15;
      
      
      if (HEAP[$newargs] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 4:
      var $18 = HEAP[$fmt];
      var $19 = _cache_struct($18);
      HEAP[$s_object] = $19;
      
      
      if (HEAP[$s_object] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $25 = HEAP[HEAP[$newargs]] - 1;
      
      var $27 = HEAP[$newargs];
      HEAP[$27] = $25;
      
      
      
      
      if (HEAP[HEAP[$newargs]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[$newargs] + 4] + 24];
      var $37 = HEAP[$newargs];
      FUNCTION_TABLE[$36]($37);
      __label__ = 7;
      break;
     case 7:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 8:
      var $38 = HEAP[$s_object];
      var $39 = HEAP[$newargs];
      var $40 = HEAP[$kwds_addr];
      var $41 = _s_unpack_from($38, $39, $40);
      HEAP[$result] = $41;
      
      
      
      var $45 = HEAP[HEAP[$newargs]] - 1;
      
      var $47 = HEAP[$newargs];
      HEAP[$47] = $45;
      
      
      
      
      if (HEAP[HEAP[$newargs]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $56 = HEAP[HEAP[HEAP[$newargs] + 4] + 24];
      var $57 = HEAP[$newargs];
      FUNCTION_TABLE[$56]($57);
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $61 = HEAP[HEAP[$s_object]] - 1;
      
      var $63 = HEAP[$s_object];
      HEAP[$63] = $61;
      
      
      
      
      if (HEAP[HEAP[$s_object]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $72 = HEAP[HEAP[HEAP[$s_object] + 4] + 24];
      var $73 = HEAP[$s_object];
      FUNCTION_TABLE[$72]($73);
      __label__ = 12;
      break;
     case 12:
      var $74 = HEAP[$result];
      HEAP[$0] = $74;
      __label__ = 13;
      break;
     case 13:
      var $75 = HEAP[$0];
      HEAP[$retval] = $75;
      __label__ = 14;
      break;
     case 14:
      var $retval13 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _init_struct() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ver = __stackBase__;
      var $m = __stackBase__ + 4;
      var $one = __stackBase__ + 8;
      var $native = __stackBase__ + 12;
      var $other = __stackBase__ + 16;
      var $ptr = __stackBase__ + 20;
      
      var $0 = _PyString_FromString(__str51);
      HEAP[$ver] = $0;
      
      
      if (HEAP[$ver] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = _Py_InitModule4(__str52, _module_functions, _module_doc, 0, 1013);
      HEAP[$m] = $3;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      HEAP[_PyStructType + 4] = _PyType_Type;
      var $7 = _PyType_Ready(_PyStructType);
      
      if ($7 < 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$one] = 1;
      HEAP[$native] = _native_table;
      
      
      
      if (HEAP[$one] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$other] = _lilendian_table;
      __label__ = 6;
      break;
     case 5:
      HEAP[$other] = _bigendian_table;
      __label__ = 6;
      break;
     case 6:
      __label__ = 18;
      break;
     case 7:
      var $11 = HEAP[$other];
      HEAP[$ptr] = $11;
      __label__ = 16;
      break;
     case 8:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$ptr]] == HEAP[HEAP[$native]]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 9:
      
      
      
      if (HEAP[$ptr] == HEAP[$other]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $23 = HEAP[$other] + 20;
      HEAP[$other] = $23;
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$ptr] + 4] != HEAP[HEAP[$native] + 4]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      if (HEAP[HEAP[$ptr]] == 100) {
        __label__ = 17;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      if (HEAP[HEAP[$ptr]] == 102) {
        __label__ = 17;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      var $41 = HEAP[HEAP[$native] + 16];
      
      var $43 = HEAP[$ptr] + 16;
      HEAP[$43] = $41;
      
      
      var $46 = HEAP[HEAP[$native] + 12];
      
      var $48 = HEAP[$ptr] + 12;
      HEAP[$48] = $46;
      __label__ = 17;
      break;
     case 15:
      
      var $50 = HEAP[$ptr] + 20;
      HEAP[$ptr] = $50;
      __label__ = 16;
      break;
     case 16:
      
      
      
      
      if (HEAP[HEAP[$ptr]] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      var $56 = HEAP[$native] + 20;
      HEAP[$native] = $56;
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      if (HEAP[HEAP[$native]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      if (HEAP[HEAP[$other]] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      if (HEAP[_StructError] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      var $67 = _PyErr_NewException(__str53, 0, 0);
      HEAP[_StructError] = $67;
      
      
      if (HEAP[_StructError] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      var $73 = HEAP[HEAP[_StructError]] + 1;
      var $74 = HEAP[_StructError];
      HEAP[$74] = $73;
      var $75 = HEAP[_StructError];
      var $76 = HEAP[$m];
      var $77 = _PyModule_AddObject($76, __str54, $75);
      
      
      var $80 = HEAP[_PyStructType] + 1;
      
      HEAP[_PyStructType] = $80;
      var $82 = HEAP[$m];
      var $83 = _PyModule_AddObject($82, __str47, _PyStructType);
      var $84 = HEAP[$m];
      var $85 = HEAP[$ver];
      var $86 = _PyModule_AddObject($84, __str55, $85);
      var $87 = HEAP[$m];
      var $88 = _PyModule_AddIntConstant($87, __str56, 1);
      var $89 = HEAP[$m];
      var $90 = _PyModule_AddIntConstant($89, __str57, 1);
      __label__ = 23;
      break;
     case 23:
      __label__ = 24;
      break;
     case 24:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_struct"] = _init_struct;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _nu_byte, 0, _np_byte, 0, _nu_ubyte, 0, _np_ubyte, 0, _nu_char, 0, _np_char, 0, _nu_short, 0, _np_short, 0, _nu_ushort, 0, _np_ushort, 0, _nu_int, 0, _np_int, 0, _nu_uint, 0, _np_uint, 0, _nu_long, 0, _np_long, 0, _nu_ulong, 0, _np_ulong, 0, _nu_longlong, 0, _np_longlong, 0, _nu_ulonglong, 0, _np_ulonglong, 0, _nu_bool, 0, _np_bool, 0, _nu_float, 0, _np_float, 0, _nu_double, 0, _np_double, 0, _nu_void_p, 0, _np_void_p, 0, _bu_int, 0, _bp_int, 0, _bu_uint, 0, _bp_uint, 0, _bu_longlong, 0, _bp_longlong, 0, _bu_ulonglong, 0, _bp_ulonglong, 0, _bu_bool, 0, _bp_bool, 0, _bu_float, 0, _bp_float, 0, _bu_double, 0, _bp_double, 0, _lu_int, 0, _lp_int, 0, _lu_uint, 0, _lp_uint, 0, _lu_longlong, 0, _lp_longlong, 0, _lu_ulonglong, 0, _lp_ulonglong, 0, _lu_float, 0, _lp_float, 0, _lu_double, 0, _lp_double, 0, _s_pack, 0, _s_pack_into, 0, _s_unpack, 0, _s_unpack_from, 0, _s_get_format, 0, _s_get_size, 0, _s_dealloc, 0, _PyObject_GenericGetAttr, 0, _PyObject_GenericSetAttr, 0, _s_init, 0, _PyType_GenericAlloc, 0, _s_new, 0, _PyObject_Free, 0, _clearcache, 0, _calcsize, 0, _pack, 0, _pack_into, 0, _unpack, 0, _unpack_from, 0 ]);
  function run(args) {
    _integer_codes = allocate(1, "i8*", ALLOC_NORMAL);
    __str = allocate([ 98, 66, 104, 72, 105, 73, 108, 76, 113, 81, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 118, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 95, 115, 116, 114, 117, 99, 116, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8367 = allocate([ 103, 101, 116, 95, 112, 121, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 105, 110, 116, 101, 103, 101, 114, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 101, 120, 112, 101, 99, 116, 101, 100, 44, 32, 103, 111, 116, 32, 102, 108, 111, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 105, 110, 116, 101, 103, 101, 114, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 101, 120, 112, 101, 99, 116, 101, 100, 44, 32, 103, 111, 116, 32, 110, 111, 110, 45, 105, 110, 116, 101, 103, 101, 114, 32, 40, 105, 109, 112, 108, 105, 99, 105, 116, 32, 99, 111, 110, 118, 101, 114, 115, 105, 111, 110, 32, 117, 115, 105, 110, 103, 32, 95, 95, 105, 110, 116, 95, 95, 32, 105, 115, 32, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 95, 95, 105, 110, 116, 95, 95, 32, 109, 101, 116, 104, 111, 100, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 110, 111, 110, 45, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _StructError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str6 = allocate([ 99, 97, 110, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 116, 111, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 40, 40, 40, 40, 118, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 51, 41, 41, 41, 32, 33, 61, 32, 48, 41, 32, 124, 124, 32, 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 118, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 52, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 118, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 52, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8491 = allocate([ 103, 101, 116, 95, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8520 = allocate([ 103, 101, 116, 95, 117, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8549 = allocate([ 103, 101, 116, 95, 108, 111, 110, 103, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8578 = allocate([ 103, 101, 116, 95, 117, 108, 111, 110, 103, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 102, 45, 62, 115, 105, 122, 101, 32, 62, 61, 32, 49, 32, 38, 38, 32, 102, 45, 62, 115, 105, 122, 101, 32, 60, 61, 32, 52, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8637 = allocate([ 95, 114, 97, 110, 103, 101, 95, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 39, 37, 99, 39, 32, 102, 111, 114, 109, 97, 116, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 48, 32, 60, 61, 32, 110, 117, 109, 98, 101, 114, 32, 60, 61, 32, 37, 122, 117, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 39, 37, 99, 39, 32, 102, 111, 114, 109, 97, 116, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 37, 122, 100, 32, 60, 61, 32, 110, 117, 109, 98, 101, 114, 32, 60, 61, 32, 37, 122, 100, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 98, 121, 116, 101, 32, 102, 111, 114, 109, 97, 116, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 45, 49, 50, 56, 32, 60, 61, 32, 110, 117, 109, 98, 101, 114, 32, 60, 61, 32, 49, 50, 55, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 117, 98, 121, 116, 101, 32, 102, 111, 114, 109, 97, 116, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 48, 32, 60, 61, 32, 110, 117, 109, 98, 101, 114, 32, 60, 61, 32, 50, 53, 53, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 99, 104, 97, 114, 32, 102, 111, 114, 109, 97, 116, 32, 114, 101, 113, 117, 105, 114, 101, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 108, 101, 110, 103, 116, 104, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 115, 104, 111, 114, 116, 32, 102, 111, 114, 109, 97, 116, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 83, 72, 82, 84, 95, 77, 73, 78, 32, 60, 61, 32, 110, 117, 109, 98, 101, 114, 32, 60, 61, 32, 83, 72, 82, 84, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 117, 115, 104, 111, 114, 116, 32, 102, 111, 114, 109, 97, 116, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 48, 32, 60, 61, 32, 110, 117, 109, 98, 101, 114, 32, 60, 61, 32, 85, 83, 72, 82, 84, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 114, 101, 113, 117, 105, 114, 101, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 102, 108, 111, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9045 = allocate([ 110, 112, 95, 118, 111, 105, 100, 95, 112, 0 ], "i8", ALLOC_NORMAL);
    _native_table = allocate([ 120, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _bigendian_table = allocate([ 120, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _lilendian_table = allocate([ 120, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str19 = allocate([ 98, 97, 100, 32, 99, 104, 97, 114, 32, 105, 110, 32, 115, 116, 114, 117, 99, 116, 32, 102, 111, 114, 109, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 116, 111, 116, 97, 108, 32, 115, 116, 114, 117, 99, 116, 32, 115, 105, 122, 101, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 116, 121, 112, 101, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 32, 38, 38, 32, 116, 121, 112, 101, 45, 62, 116, 112, 95, 97, 108, 108, 111, 99, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9778 = allocate([ 115, 95, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 32, 61, 61, 32, 40, 38, 80, 121, 83, 116, 114, 117, 99, 116, 84, 121, 112, 101, 41, 32, 124, 124, 32, 80, 121, 84, 121, 112, 101, 95, 73, 115, 83, 117, 98, 116, 121, 112, 101, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 44, 32, 40, 38, 80, 121, 83, 116, 114, 117, 99, 116, 84, 121, 112, 101, 41, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9801 = allocate([ 115, 95, 105, 110, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 83, 58, 83, 116, 114, 117, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9800 = allocate(8, "i8*", ALLOC_NORMAL);
    __str24 = allocate([ 102, 111, 114, 109, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    _s_unpack__doc__ = allocate([ 83, 46, 117, 110, 112, 97, 99, 107, 40, 115, 116, 114, 41, 32, 45, 62, 32, 40, 118, 49, 44, 32, 118, 50, 44, 32, 46, 46, 46, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 117, 112, 108, 101, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 118, 97, 108, 117, 101, 115, 32, 117, 110, 112, 97, 99, 107, 101, 100, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 116, 104, 105, 115, 32, 83, 116, 114, 117, 99, 116, 39, 115, 32, 102, 111, 114, 109, 97, 116, 46, 10, 82, 101, 113, 117, 105, 114, 101, 115, 32, 108, 101, 110, 40, 115, 116, 114, 41, 32, 61, 61, 32, 115, 101, 108, 102, 46, 115, 105, 122, 101, 46, 32, 83, 101, 101, 32, 115, 116, 114, 117, 99, 116, 46, 95, 95, 100, 111, 99, 95, 95, 32, 102, 111, 114, 32, 109, 111, 114, 101, 32, 111, 110, 32, 102, 111, 114, 109, 97, 116, 10, 115, 116, 114, 105, 110, 103, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9921 = allocate([ 115, 95, 117, 110, 112, 97, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 115, 111, 115, 101, 108, 102, 45, 62, 115, 95, 99, 111, 100, 101, 115, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 115, 35, 58, 117, 110, 112, 97, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 117, 110, 112, 97, 99, 107, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 111, 102, 32, 108, 101, 110, 103, 116, 104, 32, 37, 122, 100, 0 ], "i8", ALLOC_NORMAL);
    _s_unpack_from__doc__ = allocate([ 83, 46, 117, 110, 112, 97, 99, 107, 95, 102, 114, 111, 109, 40, 98, 117, 102, 102, 101, 114, 91, 44, 32, 111, 102, 102, 115, 101, 116, 93, 41, 32, 45, 62, 32, 40, 118, 49, 44, 32, 118, 50, 44, 32, 46, 46, 46, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 117, 112, 108, 101, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 118, 97, 108, 117, 101, 115, 32, 117, 110, 112, 97, 99, 107, 101, 100, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 116, 104, 105, 115, 32, 83, 116, 114, 117, 99, 116, 39, 115, 32, 102, 111, 114, 109, 97, 116, 46, 10, 85, 110, 108, 105, 107, 101, 32, 117, 110, 112, 97, 99, 107, 44, 32, 117, 110, 112, 97, 99, 107, 95, 102, 114, 111, 109, 32, 99, 97, 110, 32, 117, 110, 112, 97, 99, 107, 32, 118, 97, 108, 117, 101, 115, 32, 102, 114, 111, 109, 32, 97, 110, 121, 32, 111, 98, 106, 101, 99, 116, 32, 115, 117, 112, 112, 111, 114, 116, 105, 110, 103, 10, 116, 104, 101, 32, 98, 117, 102, 102, 101, 114, 32, 65, 80, 73, 44, 32, 110, 111, 116, 32, 106, 117, 115, 116, 32, 115, 116, 114, 46, 32, 82, 101, 113, 117, 105, 114, 101, 115, 32, 108, 101, 110, 40, 98, 117, 102, 102, 101, 114, 91, 111, 102, 102, 115, 101, 116, 58, 93, 41, 32, 62, 61, 32, 115, 101, 108, 102, 46, 115, 105, 122, 101, 46, 10, 83, 101, 101, 32, 115, 116, 114, 117, 99, 116, 46, 95, 95, 100, 111, 99, 95, 95, 32, 102, 111, 114, 32, 109, 111, 114, 101, 32, 111, 110, 32, 102, 111, 114, 109, 97, 116, 32, 115, 116, 114, 105, 110, 103, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9989 = allocate([ 115, 95, 117, 110, 112, 97, 99, 107, 95, 102, 114, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    _fmt_9984 = allocate(1, "i8*", ALLOC_NORMAL);
    __str28 = allocate([ 122, 35, 124, 110, 58, 117, 110, 112, 97, 99, 107, 95, 102, 114, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9983 = allocate(12, "i8*", ALLOC_NORMAL);
    __str29 = allocate([ 98, 117, 102, 102, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 111, 102, 102, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 117, 110, 112, 97, 99, 107, 95, 102, 114, 111, 109, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 32, 98, 117, 102, 102, 101, 114, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 117, 110, 112, 97, 99, 107, 95, 102, 114, 111, 109, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 32, 98, 117, 102, 102, 101, 114, 32, 111, 102, 32, 97, 116, 32, 108, 101, 97, 115, 116, 32, 37, 122, 100, 32, 98, 121, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 97, 114, 103, 117, 109, 101, 110, 116, 32, 102, 111, 114, 32, 39, 115, 39, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 97, 114, 103, 117, 109, 101, 110, 116, 32, 102, 111, 114, 32, 39, 112, 39, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 105, 110, 116, 101, 103, 101, 114, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 32, 102, 111, 114, 32, 39, 37, 99, 39, 32, 102, 111, 114, 109, 97, 116, 32, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    _s_pack__doc__ = allocate([ 83, 46, 112, 97, 99, 107, 40, 118, 49, 44, 32, 118, 50, 44, 32, 46, 46, 46, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 118, 97, 108, 117, 101, 115, 32, 118, 49, 44, 32, 118, 50, 44, 32, 46, 46, 46, 32, 112, 97, 99, 107, 101, 100, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 116, 104, 105, 115, 10, 83, 116, 114, 117, 99, 116, 39, 115, 32, 102, 111, 114, 109, 97, 116, 46, 32, 83, 101, 101, 32, 115, 116, 114, 117, 99, 116, 46, 95, 95, 100, 111, 99, 95, 95, 32, 102, 111, 114, 32, 109, 111, 114, 101, 32, 111, 110, 32, 102, 111, 114, 109, 97, 116, 32, 115, 116, 114, 105, 110, 103, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10122 = allocate([ 115, 95, 112, 97, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 112, 97, 99, 107, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 101, 120, 97, 99, 116, 108, 121, 32, 37, 122, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    _s_pack_into__doc__ = allocate([ 83, 46, 112, 97, 99, 107, 95, 105, 110, 116, 111, 40, 98, 117, 102, 102, 101, 114, 44, 32, 111, 102, 102, 115, 101, 116, 44, 32, 118, 49, 44, 32, 118, 50, 44, 32, 46, 46, 46, 41, 10, 10, 80, 97, 99, 107, 32, 116, 104, 101, 32, 118, 97, 108, 117, 101, 115, 32, 118, 49, 44, 32, 118, 50, 44, 32, 46, 46, 46, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 116, 104, 105, 115, 32, 83, 116, 114, 117, 99, 116, 39, 115, 32, 102, 111, 114, 109, 97, 116, 44, 32, 119, 114, 105, 116, 101, 32, 10, 116, 104, 101, 32, 112, 97, 99, 107, 101, 100, 32, 98, 121, 116, 101, 115, 32, 105, 110, 116, 111, 32, 116, 104, 101, 32, 119, 114, 105, 116, 97, 98, 108, 101, 32, 98, 117, 102, 102, 101, 114, 32, 98, 117, 102, 32, 115, 116, 97, 114, 116, 105, 110, 103, 32, 97, 116, 32, 111, 102, 102, 115, 101, 116, 46, 32, 32, 78, 111, 116, 101, 10, 116, 104, 97, 116, 32, 116, 104, 101, 32, 111, 102, 102, 115, 101, 116, 32, 105, 115, 32, 110, 111, 116, 32, 97, 110, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 117, 109, 101, 110, 116, 46, 32, 32, 83, 101, 101, 32, 115, 116, 114, 117, 99, 116, 46, 95, 95, 100, 111, 99, 95, 95, 32, 102, 111, 114, 32, 10, 109, 111, 114, 101, 32, 111, 110, 32, 102, 111, 114, 109, 97, 116, 32, 115, 116, 114, 105, 110, 103, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10167 = allocate([ 115, 95, 112, 97, 99, 107, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 112, 97, 99, 107, 95, 105, 110, 116, 111, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 101, 120, 97, 99, 116, 108, 121, 32, 37, 122, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 98, 117, 102, 102, 101, 114, 95, 108, 101, 110, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 112, 97, 99, 107, 95, 105, 110, 116, 111, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 32, 98, 117, 102, 102, 101, 114, 32, 111, 102, 32, 97, 116, 32, 108, 101, 97, 115, 116, 32, 37, 122, 100, 32, 98, 121, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 112, 97, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 112, 97, 99, 107, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 117, 110, 112, 97, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 117, 110, 112, 97, 99, 107, 95, 102, 114, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    _s_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _s__doc__ = allocate([ 67, 111, 109, 112, 105, 108, 101, 100, 32, 115, 116, 114, 117, 99, 116, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 115, 116, 114, 117, 99, 116, 32, 102, 111, 114, 109, 97, 116, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 115, 116, 114, 117, 99, 116, 32, 115, 105, 122, 101, 32, 105, 110, 32, 98, 121, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _s_getsetlist = allocate(60, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str47 = allocate([ 83, 116, 114, 117, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _PyStructType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _cache = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _clearcache_doc = allocate([ 67, 108, 101, 97, 114, 32, 116, 104, 101, 32, 105, 110, 116, 101, 114, 110, 97, 108, 32, 99, 97, 99, 104, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _calcsize_doc = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 105, 122, 101, 32, 111, 102, 32, 67, 32, 115, 116, 114, 117, 99, 116, 32, 100, 101, 115, 99, 114, 105, 98, 101, 100, 32, 98, 121, 32, 102, 111, 114, 109, 97, 116, 32, 115, 116, 114, 105, 110, 103, 32, 102, 109, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    _pack_doc = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 116, 114, 105, 110, 103, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 118, 97, 108, 117, 101, 115, 32, 118, 49, 44, 32, 118, 50, 44, 32, 46, 46, 46, 32, 112, 97, 99, 107, 101, 100, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 102, 109, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 109, 105, 115, 115, 105, 110, 103, 32, 102, 111, 114, 109, 97, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _pack_into_doc = allocate([ 80, 97, 99, 107, 32, 116, 104, 101, 32, 118, 97, 108, 117, 101, 115, 32, 118, 49, 44, 32, 118, 50, 44, 32, 46, 46, 46, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 102, 109, 116, 46, 10, 87, 114, 105, 116, 101, 32, 116, 104, 101, 32, 112, 97, 99, 107, 101, 100, 32, 98, 121, 116, 101, 115, 32, 105, 110, 116, 111, 32, 116, 104, 101, 32, 119, 114, 105, 116, 97, 98, 108, 101, 32, 98, 117, 102, 102, 101, 114, 32, 98, 117, 102, 32, 115, 116, 97, 114, 116, 105, 110, 103, 32, 97, 116, 32, 111, 102, 102, 115, 101, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    _unpack_doc = allocate([ 85, 110, 112, 97, 99, 107, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 112, 97, 99, 107, 101, 100, 32, 67, 32, 115, 116, 114, 117, 99, 116, 117, 114, 101, 32, 100, 97, 116, 97, 44, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 102, 109, 116, 46, 10, 82, 101, 113, 117, 105, 114, 101, 115, 32, 108, 101, 110, 40, 115, 116, 114, 105, 110, 103, 41, 32, 61, 61, 32, 99, 97, 108, 99, 115, 105, 122, 101, 40, 102, 109, 116, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _unpack_from_doc = allocate([ 85, 110, 112, 97, 99, 107, 32, 116, 104, 101, 32, 98, 117, 102, 102, 101, 114, 44, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 112, 97, 99, 107, 101, 100, 32, 67, 32, 115, 116, 114, 117, 99, 116, 117, 114, 101, 32, 100, 97, 116, 97, 44, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 10, 102, 109, 116, 44, 32, 115, 116, 97, 114, 116, 105, 110, 103, 32, 97, 116, 32, 111, 102, 102, 115, 101, 116, 46, 32, 82, 101, 113, 117, 105, 114, 101, 115, 32, 108, 101, 110, 40, 98, 117, 102, 102, 101, 114, 91, 111, 102, 102, 115, 101, 116, 58, 93, 41, 32, 62, 61, 32, 99, 97, 108, 99, 115, 105, 122, 101, 40, 102, 109, 116, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 95, 99, 108, 101, 97, 114, 99, 97, 99, 104, 101, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 99, 97, 108, 99, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    _module_functions = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_doc = allocate([ 70, 117, 110, 99, 116, 105, 111, 110, 115, 32, 116, 111, 32, 99, 111, 110, 118, 101, 114, 116, 32, 98, 101, 116, 119, 101, 101, 110, 32, 80, 121, 116, 104, 111, 110, 32, 118, 97, 108, 117, 101, 115, 32, 97, 110, 100, 32, 67, 32, 115, 116, 114, 117, 99, 116, 115, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 101, 100, 10, 97, 115, 32, 80, 121, 116, 104, 111, 110, 32, 115, 116, 114, 105, 110, 103, 115, 46, 32, 73, 116, 32, 117, 115, 101, 115, 32, 102, 111, 114, 109, 97, 116, 32, 115, 116, 114, 105, 110, 103, 115, 32, 40, 101, 120, 112, 108, 97, 105, 110, 101, 100, 32, 98, 101, 108, 111, 119, 41, 32, 97, 115, 32, 99, 111, 109, 112, 97, 99, 116, 10, 100, 101, 115, 99, 114, 105, 112, 116, 105, 111, 110, 115, 32, 111, 102, 32, 116, 104, 101, 32, 108, 97, 121, 45, 111, 117, 116, 32, 111, 102, 32, 116, 104, 101, 32, 67, 32, 115, 116, 114, 117, 99, 116, 115, 32, 97, 110, 100, 32, 116, 104, 101, 32, 105, 110, 116, 101, 110, 100, 101, 100, 32, 99, 111, 110, 118, 101, 114, 115, 105, 111, 110, 10, 116, 111, 47, 102, 114, 111, 109, 32, 80, 121, 116, 104, 111, 110, 32, 118, 97, 108, 117, 101, 115, 46, 10, 10, 84, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 102, 105, 114, 115, 116, 32, 102, 111, 114, 109, 97, 116, 32, 99, 104, 97, 114, 32, 105, 110, 100, 105, 99, 97, 116, 101, 115, 32, 98, 121, 116, 101, 32, 111, 114, 100, 101, 114, 44, 32, 115, 105, 122, 101, 32, 97, 110, 100, 32, 97, 108, 105, 103, 110, 109, 101, 110, 116, 58, 10, 32, 32, 64, 58, 32, 110, 97, 116, 105, 118, 101, 32, 111, 114, 100, 101, 114, 44, 32, 115, 105, 122, 101, 32, 38, 32, 97, 108, 105, 103, 110, 109, 101, 110, 116, 32, 40, 100, 101, 102, 97, 117, 108, 116, 41, 10, 32, 32, 61, 58, 32, 110, 97, 116, 105, 118, 101, 32, 111, 114, 100, 101, 114, 44, 32, 115, 116, 100, 46, 32, 115, 105, 122, 101, 32, 38, 32, 97, 108, 105, 103, 110, 109, 101, 110, 116, 10, 32, 32, 60, 58, 32, 108, 105, 116, 116, 108, 101, 45, 101, 110, 100, 105, 97, 110, 44, 32, 115, 116, 100, 46, 32, 115, 105, 122, 101, 32, 38, 32, 97, 108, 105, 103, 110, 109, 101, 110, 116, 10, 32, 32, 62, 58, 32, 98, 105, 103, 45, 101, 110, 100, 105, 97, 110, 44, 32, 115, 116, 100, 46, 32, 115, 105, 122, 101, 32, 38, 32, 97, 108, 105, 103, 110, 109, 101, 110, 116, 10, 32, 32, 33, 58, 32, 115, 97, 109, 101, 32, 97, 115, 32, 62, 10, 10, 84, 104, 101, 32, 114, 101, 109, 97, 105, 110, 105, 110, 103, 32, 99, 104, 97, 114, 115, 32, 105, 110, 100, 105, 99, 97, 116, 101, 32, 116, 121, 112, 101, 115, 32, 111, 102, 32, 97, 114, 103, 115, 32, 97, 110, 100, 32, 109, 117, 115, 116, 32, 109, 97, 116, 99, 104, 32, 101, 120, 97, 99, 116, 108, 121, 59, 10, 116, 104, 101, 115, 101, 32, 99, 97, 110, 32, 98, 101, 32, 112, 114, 101, 99, 101, 100, 101, 100, 32, 98, 121, 32, 97, 32, 100, 101, 99, 105, 109, 97, 108, 32, 114, 101, 112, 101, 97, 116, 32, 99, 111, 117, 110, 116, 58, 10, 32, 32, 120, 58, 32, 112, 97, 100, 32, 98, 121, 116, 101, 32, 40, 110, 111, 32, 100, 97, 116, 97, 41, 59, 32, 99, 58, 99, 104, 97, 114, 59, 32, 98, 58, 115, 105, 103, 110, 101, 100, 32, 98, 121, 116, 101, 59, 32, 66, 58, 117, 110, 115, 105, 103, 110, 101, 100, 32, 98, 121, 116, 101, 59, 10, 32, 32, 63, 58, 32, 95, 66, 111, 111, 108, 32, 40, 114, 101, 113, 117, 105, 114, 101, 115, 32, 67, 57, 57, 59, 32, 105, 102, 32, 110, 111, 116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 44, 32, 99, 104, 97, 114, 32, 105, 115, 32, 117, 115, 101, 100, 32, 105, 110, 115, 116, 101, 97, 100, 41, 10, 32, 32, 104, 58, 115, 104, 111, 114, 116, 59, 32, 72, 58, 117, 110, 115, 105, 103, 110, 101, 100, 32, 115, 104, 111, 114, 116, 59, 32, 105, 58, 105, 110, 116, 59, 32, 73, 58, 117, 110, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 59, 10, 32, 32, 108, 58, 108, 111, 110, 103, 59, 32, 76, 58, 117, 110, 115, 105, 103, 110, 101, 100, 32, 108, 111, 110, 103, 59, 32, 102, 58, 102, 108, 111, 97, 116, 59, 32, 100, 58, 100, 111, 117, 98, 108, 101, 46, 10, 83, 112, 101, 99, 105, 97, 108, 32, 99, 97, 115, 101, 115, 32, 40, 112, 114, 101, 99, 101, 100, 105, 110, 103, 32, 100, 101, 99, 105, 109, 97, 108, 32, 99, 111, 117, 110, 116, 32, 105, 110, 100, 105, 99, 97, 116, 101, 115, 32, 108, 101, 110, 103, 116, 104, 41, 58, 10, 32, 32, 115, 58, 115, 116, 114, 105, 110, 103, 32, 40, 97, 114, 114, 97, 121, 32, 111, 102, 32, 99, 104, 97, 114, 41, 59, 32, 112, 58, 32, 112, 97, 115, 99, 97, 108, 32, 115, 116, 114, 105, 110, 103, 32, 40, 119, 105, 116, 104, 32, 99, 111, 117, 110, 116, 32, 98, 121, 116, 101, 41, 46, 10, 83, 112, 101, 99, 105, 97, 108, 32, 99, 97, 115, 101, 32, 40, 111, 110, 108, 121, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 105, 110, 32, 110, 97, 116, 105, 118, 101, 32, 102, 111, 114, 109, 97, 116, 41, 58, 10, 32, 32, 80, 58, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 32, 116, 121, 112, 101, 32, 116, 104, 97, 116, 32, 105, 115, 32, 119, 105, 100, 101, 32, 101, 110, 111, 117, 103, 104, 32, 116, 111, 32, 104, 111, 108, 100, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 46, 10, 83, 112, 101, 99, 105, 97, 108, 32, 99, 97, 115, 101, 32, 40, 110, 111, 116, 32, 105, 110, 32, 110, 97, 116, 105, 118, 101, 32, 109, 111, 100, 101, 32, 117, 110, 108, 101, 115, 115, 32, 39, 108, 111, 110, 103, 32, 108, 111, 110, 103, 39, 32, 105, 110, 32, 112, 108, 97, 116, 102, 111, 114, 109, 32, 67, 41, 58, 10, 32, 32, 113, 58, 108, 111, 110, 103, 32, 108, 111, 110, 103, 59, 32, 81, 58, 117, 110, 115, 105, 103, 110, 101, 100, 32, 108, 111, 110, 103, 32, 108, 111, 110, 103, 10, 87, 104, 105, 116, 101, 115, 112, 97, 99, 101, 32, 98, 101, 116, 119, 101, 101, 110, 32, 102, 111, 114, 109, 97, 116, 115, 32, 105, 115, 32, 105, 103, 110, 111, 114, 101, 100, 46, 10, 10, 84, 104, 101, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 115, 116, 114, 117, 99, 116, 46, 101, 114, 114, 111, 114, 32, 105, 115, 32, 97, 110, 32, 101, 120, 99, 101, 112, 116, 105, 111, 110, 32, 114, 97, 105, 115, 101, 100, 32, 111, 110, 32, 101, 114, 114, 111, 114, 115, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 48, 46, 50, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 95, 115, 116, 114, 117, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 115, 116, 114, 117, 99, 116, 46, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 95, 95, 118, 101, 114, 115, 105, 111, 110, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 95, 80, 89, 95, 83, 84, 82, 85, 67, 84, 95, 82, 65, 78, 71, 69, 95, 67, 72, 69, 67, 75, 73, 78, 71, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 95, 80, 89, 95, 83, 84, 82, 85, 67, 84, 95, 70, 76, 79, 65, 84, 95, 67, 79, 69, 82, 67, 69, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_integer_codes] = __str;
    HEAP[_native_table + 32] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_native_table + 36] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_native_table + 52] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_native_table + 56] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_native_table + 72] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_native_table + 76] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_native_table + 132] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_native_table + 136] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_native_table + 152] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_native_table + 156] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_native_table + 172] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_native_table + 176] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_native_table + 192] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_native_table + 196] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_native_table + 212] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_native_table + 216] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_native_table + 232] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_native_table + 236] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_native_table + 252] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_native_table + 256] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_native_table + 272] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_native_table + 276] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_native_table + 292] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_native_table + 296] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_native_table + 312] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_native_table + 316] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_native_table + 332] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_native_table + 336] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_native_table + 352] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_native_table + 356] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_bigendian_table + 32] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_bigendian_table + 36] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_bigendian_table + 52] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_bigendian_table + 56] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_bigendian_table + 72] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_bigendian_table + 76] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_bigendian_table + 132] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_bigendian_table + 136] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_bigendian_table + 152] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_bigendian_table + 156] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_bigendian_table + 172] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_bigendian_table + 176] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_bigendian_table + 192] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_bigendian_table + 196] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_bigendian_table + 212] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_bigendian_table + 216] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_bigendian_table + 232] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_bigendian_table + 236] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_bigendian_table + 252] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_bigendian_table + 256] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_bigendian_table + 272] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_bigendian_table + 276] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_bigendian_table + 292] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_bigendian_table + 296] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_bigendian_table + 312] = FUNCTION_TABLE_OFFSET + 82;
    HEAP[_bigendian_table + 316] = FUNCTION_TABLE_OFFSET + 84;
    HEAP[_bigendian_table + 332] = FUNCTION_TABLE_OFFSET + 86;
    HEAP[_bigendian_table + 336] = FUNCTION_TABLE_OFFSET + 88;
    HEAP[_lilendian_table + 32] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_lilendian_table + 36] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_lilendian_table + 52] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_lilendian_table + 56] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_lilendian_table + 72] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_lilendian_table + 76] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_lilendian_table + 132] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_lilendian_table + 136] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_lilendian_table + 152] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_lilendian_table + 156] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_lilendian_table + 172] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_lilendian_table + 176] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_lilendian_table + 192] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_lilendian_table + 196] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_lilendian_table + 212] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_lilendian_table + 216] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_lilendian_table + 232] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_lilendian_table + 236] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_lilendian_table + 252] = FUNCTION_TABLE_OFFSET + 98;
    HEAP[_lilendian_table + 256] = FUNCTION_TABLE_OFFSET + 100;
    HEAP[_lilendian_table + 272] = FUNCTION_TABLE_OFFSET + 102;
    HEAP[_lilendian_table + 276] = FUNCTION_TABLE_OFFSET + 104;
    HEAP[_lilendian_table + 292] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_lilendian_table + 296] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_lilendian_table + 312] = FUNCTION_TABLE_OFFSET + 106;
    HEAP[_lilendian_table + 316] = FUNCTION_TABLE_OFFSET + 108;
    HEAP[_lilendian_table + 332] = FUNCTION_TABLE_OFFSET + 110;
    HEAP[_lilendian_table + 336] = FUNCTION_TABLE_OFFSET + 112;
    HEAP[_kwlist_9800] = __str24;
    HEAP[_fmt_9984] = __str28;
    HEAP[_kwlist_9983] = __str29;
    HEAP[_kwlist_9983 + 4] = __str30;
    HEAP[_s_methods] = __str40;
    HEAP[_s_methods + 4] = FUNCTION_TABLE_OFFSET + 114;
    HEAP[_s_methods + 12] = _s_pack__doc__;
    HEAP[_s_methods + 16] = __str41;
    HEAP[_s_methods + 20] = FUNCTION_TABLE_OFFSET + 116;
    HEAP[_s_methods + 28] = _s_pack_into__doc__;
    HEAP[_s_methods + 32] = __str42;
    HEAP[_s_methods + 36] = FUNCTION_TABLE_OFFSET + 118;
    HEAP[_s_methods + 44] = _s_unpack__doc__;
    HEAP[_s_methods + 48] = __str43;
    HEAP[_s_methods + 52] = FUNCTION_TABLE_OFFSET + 120;
    HEAP[_s_methods + 60] = _s_unpack_from__doc__;
    HEAP[_s_getsetlist] = __str24;
    HEAP[_s_getsetlist + 4] = FUNCTION_TABLE_OFFSET + 122;
    HEAP[_s_getsetlist + 12] = __str44;
    HEAP[_s_getsetlist + 20] = __str45;
    HEAP[_s_getsetlist + 24] = FUNCTION_TABLE_OFFSET + 124;
    HEAP[_s_getsetlist + 32] = __str46;
    HEAP[_PyStructType + 12] = __str47;
    HEAP[_PyStructType + 24] = FUNCTION_TABLE_OFFSET + 126;
    HEAP[_PyStructType + 72] = FUNCTION_TABLE_OFFSET + 128;
    HEAP[_PyStructType + 76] = FUNCTION_TABLE_OFFSET + 130;
    HEAP[_PyStructType + 88] = _s__doc__;
    HEAP[_PyStructType + 116] = _s_methods;
    HEAP[_PyStructType + 124] = _s_getsetlist;
    HEAP[_PyStructType + 148] = FUNCTION_TABLE_OFFSET + 132;
    HEAP[_PyStructType + 152] = FUNCTION_TABLE_OFFSET + 134;
    HEAP[_PyStructType + 156] = FUNCTION_TABLE_OFFSET + 136;
    HEAP[_PyStructType + 160] = FUNCTION_TABLE_OFFSET + 138;
    HEAP[_module_functions] = __str49;
    HEAP[_module_functions + 4] = FUNCTION_TABLE_OFFSET + 140;
    HEAP[_module_functions + 12] = _clearcache_doc;
    HEAP[_module_functions + 16] = __str50;
    HEAP[_module_functions + 20] = FUNCTION_TABLE_OFFSET + 142;
    HEAP[_module_functions + 28] = _calcsize_doc;
    HEAP[_module_functions + 32] = __str40;
    HEAP[_module_functions + 36] = FUNCTION_TABLE_OFFSET + 144;
    HEAP[_module_functions + 44] = _pack_doc;
    HEAP[_module_functions + 48] = __str41;
    HEAP[_module_functions + 52] = FUNCTION_TABLE_OFFSET + 146;
    HEAP[_module_functions + 60] = _pack_into_doc;
    HEAP[_module_functions + 64] = __str42;
    HEAP[_module_functions + 68] = FUNCTION_TABLE_OFFSET + 148;
    HEAP[_module_functions + 76] = _unpack_doc;
    HEAP[_module_functions + 80] = __str43;
    HEAP[_module_functions + 84] = FUNCTION_TABLE_OFFSET + 150;
    HEAP[_module_functions + 92] = _unpack_from_doc;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
