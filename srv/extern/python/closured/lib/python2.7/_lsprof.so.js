"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 56;
  var $1___SIZE = 8;
  var $2___SIZE = 48;
  var $3___SIZE = 80;
  var $4___SIZE = 16;
  var $5___SIZE = 196;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_ProfilerContext___SIZE = 24;
  var $struct_ProfilerContext___FLATTENER = [ 0, 8, 16, 20 ];
  var $struct_ProfilerEntry___SIZE = 48;
  var $struct_ProfilerEntry___FLATTENER = [ 0, 12, 16, 24, 32, 36, 40, 44 ];
  var $struct_ProfilerObject___SIZE = 36;
  var $struct_ProfilerSubEntry___SIZE = 40;
  var $struct_ProfilerSubEntry___FLATTENER = [ 0, 12, 20, 28, 32, 36 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyCFunctionObject___SIZE = 20;
  var $struct_PyCodeObject___SIZE = 72;
  var $struct_PyFrameObject___SIZE = 316;
  var $struct_PyFrameObject___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 312 ];
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyInterpreterState___SIZE = 40;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyStructSequence_Desc___SIZE = 16;
  var $struct_PyStructSequence_Field___SIZE = 8;
  var $struct_PyThreadState___SIZE = 84;
  var $struct_PyTryBlock___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_rotating_node_t___SIZE = 12;
  var $struct_statscollector_t___SIZE = 16;
  var $struct_timeval___SIZE = 8;
  var $struct_timezone___SIZE = 8;
  var _empty_tuple;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var __str7;
  var __str8;
  var __str9;
  var __str10;
  var __str11;
  var __str12;
  var __str13;
  var __str14;
  var __str15;
  var __str16;
  var _profiler_entry_fields;
  var __str17;
  var __str18;
  var __str19;
  var __str20;
  var __str21;
  var _profiler_subentry_fields;
  var _profiler_entry_desc;
  var __str22;
  var _profiler_subentry_desc;
  var __str23;
  var _StatsSubEntryType;
  var __str24;
  var _StatsEntryType;
  var __str25;
  var _getstats_doc;
  var _enable_doc;
  var __str26;
  var _kwlist_9075;
  var __str27;
  var __str28;
  var _disable_doc;
  var _clear_doc;
  var __str29;
  var _kwlist_9165;
  var __str30;
  var __str31;
  var __str32;
  var __str33;
  var __str34;
  var __str35;
  var _profiler_methods;
  var _profiler_doc;
  var __str36;
  var _PyProfiler_Type;
  var _moduleMethods;
  var __str37;
  var __str38;
  var __str39;
  var _initialized;
  var __str40;
  var __str41;
  var _random_value;
  var _random_stream;
  function _hpTimer() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval = __stackBase__;
      var $0 = __stackBase__ + 8;
      var $tv = __stackBase__ + 16;
      var $ret = __stackBase__ + 24;
      
      var $1 = _gettimeofday($tv, 0);
      
      
      var $4 = HEAP[$tv];
      HEAP[$ret] = $4;
      
      
      
      
      
      var $10 = HEAP[$ret] * 1e6 + HEAP[$tv + 4];
      HEAP[$ret] = $10;
      var $11 = HEAP[$ret];
      HEAP[$0] = $11;
      var $12 = HEAP[$0];
      HEAP[$retval] = $12;
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
  function _hpTimerUnit() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval = __stackBase__;
      
      
      HEAP[__stackBase__ + 8] = 1e-6;
      var $1 = HEAP[__stackBase__ + 8];
      HEAP[$retval] = $1;
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
  function _CallExternalTimer($pObj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 12;
      var $result = __stackBase__ + 20;
      var $o = __stackBase__ + 28;
      var $val = __stackBase__ + 32;
      
      HEAP[$pObj_addr] = $pObj;
      var $1 = HEAP[_empty_tuple];
      
      
      var $4 = HEAP[HEAP[$pObj_addr] + 24];
      var $5 = _PyObject_Call($4, $1, 0);
      HEAP[$o] = $5;
      
      
      if (HEAP[$o] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $10 = HEAP[HEAP[$pObj_addr] + 24];
      _PyErr_WriteUnraisable($10);
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$pObj_addr] + 28] > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $15 = HEAP[$o];
      var $16 = _PyLong_AsLongLong($15);
      HEAP[$result] = $16;
      __label__ = 5;
      break;
     case 4:
      var $17 = HEAP[$o];
      var $18 = _PyFloat_AsDouble($17);
      HEAP[$val] = $18;
      
      var $20 = HEAP[$val] * 4294967296;
      var $21 = cRound($20);
      HEAP[$result] = $21;
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $25 = HEAP[HEAP[$o]] - 1;
      
      var $27 = HEAP[$o];
      HEAP[$27] = $25;
      
      
      
      
      if (HEAP[HEAP[$o]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[$o] + 4] + 24];
      var $37 = HEAP[$o];
      FUNCTION_TABLE[$36]($37);
      __label__ = 7;
      break;
     case 7:
      var $38 = _PyErr_Occurred();
      
      if ($38 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      var $42 = HEAP[HEAP[$pObj_addr] + 24];
      _PyErr_WriteUnraisable($42);
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 9:
      var $43 = HEAP[$result];
      HEAP[$0] = $43;
      __label__ = 10;
      break;
     case 10:
      var $44 = HEAP[$0];
      HEAP[$retval] = $44;
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
  function _normalizeUserObj($obj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $obj_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $fn = __stackBase__ + 12;
      var $mod = __stackBase__ + 16;
      var $modname = __stackBase__ + 20;
      var $self = __stackBase__ + 24;
      var $name = __stackBase__ + 28;
      var $mo = __stackBase__ + 32;
      var $res = __stackBase__ + 36;
      
      HEAP[$obj_addr] = $obj;
      
      
      
      
      if (HEAP[HEAP[$obj_addr] + 4] != _PyCFunction_Type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[HEAP[$obj_addr]] + 1;
      
      var $10 = HEAP[$obj_addr];
      HEAP[$10] = $8;
      var $11 = HEAP[$obj_addr];
      HEAP[$0] = $11;
      __label__ = 27;
      break;
     case 2:
      
      var $13 = HEAP[$obj_addr];
      HEAP[$fn] = $13;
      
      
      
      
      if (HEAP[HEAP[$fn] + 12] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 3:
      
      
      var $20 = HEAP[HEAP[$fn] + 16];
      HEAP[$mod] = $20;
      
      
      if (HEAP[$mod] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$mod] + 4] + 84] & 134217728) == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $33 = HEAP[$mod] + 20;
      HEAP[$modname] = $33;
      __label__ = 13;
      break;
     case 6:
      
      
      if (HEAP[$mod] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[HEAP[$mod] + 4] == _PyModule_Type) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      var $42 = HEAP[HEAP[$mod] + 4];
      var $43 = _PyType_IsSubtype($42, _PyModule_Type);
      
      if ($43 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      var $45 = HEAP[$mod];
      var $46 = _PyModule_GetName($45);
      HEAP[$modname] = $46;
      
      
      if (HEAP[$modname] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      _PyErr_Clear();
      HEAP[$modname] = __str;
      __label__ = 11;
      break;
     case 11:
      __label__ = 13;
      break;
     case 12:
      HEAP[$modname] = __str;
      __label__ = 13;
      break;
     case 13:
      var $49 = HEAP[$modname];
      var $50 = _strcmp($49, __str);
      
      if ($50 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $56 = HEAP[HEAP[HEAP[$fn] + 8]];
      var $57 = HEAP[$modname];
      var $58 = _PyString_FromFormat(__str1, allocate([ $57, 0, 0, 0, $56, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $58;
      __label__ = 27;
      break;
     case 15:
      
      
      
      
      var $63 = HEAP[HEAP[HEAP[$fn] + 8]];
      var $64 = _PyString_FromFormat(__str2, allocate([ $63, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $64;
      __label__ = 27;
      break;
     case 16:
      
      
      var $67 = HEAP[HEAP[$fn] + 12];
      HEAP[$self] = $67;
      
      
      
      
      var $72 = HEAP[HEAP[HEAP[$fn] + 8]];
      var $73 = _PyString_FromString($72);
      HEAP[$name] = $73;
      
      
      if (HEAP[$name] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 17:
      
      
      var $78 = HEAP[HEAP[$self] + 4];
      var $79 = HEAP[$name];
      var $80 = __PyType_Lookup($78, $79);
      HEAP[$mo] = $80;
      
      
      if (HEAP[$mo] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      var $86 = HEAP[HEAP[$mo]] + 1;
      
      var $88 = HEAP[$mo];
      HEAP[$88] = $86;
      __label__ = 19;
      break;
     case 19:
      
      
      
      var $92 = HEAP[HEAP[$name]] - 1;
      
      var $94 = HEAP[$name];
      HEAP[$94] = $92;
      
      
      
      
      if (HEAP[HEAP[$name]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $103 = HEAP[HEAP[HEAP[$name] + 4] + 24];
      var $104 = HEAP[$name];
      FUNCTION_TABLE[$103]($104);
      __label__ = 21;
      break;
     case 21:
      
      
      if (HEAP[$mo] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 22:
      var $107 = HEAP[$mo];
      var $108 = _PyObject_Repr($107);
      HEAP[$res] = $108;
      
      
      
      var $112 = HEAP[HEAP[$mo]] - 1;
      
      var $114 = HEAP[$mo];
      HEAP[$114] = $112;
      
      
      
      
      if (HEAP[HEAP[$mo]] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $123 = HEAP[HEAP[HEAP[$mo] + 4] + 24];
      var $124 = HEAP[$mo];
      FUNCTION_TABLE[$123]($124);
      __label__ = 24;
      break;
     case 24:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $127 = HEAP[$res];
      HEAP[$0] = $127;
      __label__ = 27;
      break;
     case 26:
      _PyErr_Clear();
      
      
      
      
      var $132 = HEAP[HEAP[HEAP[$fn] + 8]];
      var $133 = _PyString_FromFormat(__str3, allocate([ $132, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $133;
      __label__ = 27;
      break;
     case 27:
      var $134 = HEAP[$0];
      HEAP[$retval] = $134;
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
  function _newProfilerEntry($pObj, $key, $userObj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr = __stackBase__;
      var $key_addr = __stackBase__ + 4;
      var $userObj_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $self = __stackBase__ + 20;
      
      HEAP[$pObj_addr] = $pObj;
      HEAP[$key_addr] = $key;
      HEAP[$userObj_addr] = $userObj;
      var $1 = _malloc(48);
      
      HEAP[$self] = $1;
      
      
      if (HEAP[$self] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[HEAP[$pObj_addr] + 20] | 256;
      
      var $10 = HEAP[$pObj_addr] + 20;
      HEAP[$10] = $8;
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 2:
      var $11 = HEAP[$userObj_addr];
      var $12 = _normalizeUserObj($11);
      HEAP[$userObj_addr] = $12;
      
      
      if (HEAP[$userObj_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyErr_Clear();
      
      var $16 = HEAP[$self];
      _free($16);
      
      
      
      var $20 = HEAP[HEAP[$pObj_addr] + 20] | 256;
      
      var $22 = HEAP[$pObj_addr] + 20;
      HEAP[$22] = $20;
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      
      
      var $25 = HEAP[$self];
      var $26 = HEAP[$key_addr];
      HEAP[$25] = $26;
      
      var $28 = HEAP[$self] + 12;
      var $29 = HEAP[$userObj_addr];
      HEAP[$28] = $29;
      
      var $31 = HEAP[$self] + 16;
      HEAP[$31] = 0;
      
      var $33 = HEAP[$self] + 24;
      HEAP[$33] = 0;
      
      var $35 = HEAP[$self] + 32;
      HEAP[$35] = 0;
      
      var $37 = HEAP[$self] + 36;
      HEAP[$37] = 0;
      
      var $39 = HEAP[$self] + 40;
      HEAP[$39] = 0;
      
      var $41 = HEAP[$self] + 44;
      HEAP[$41] = 0;
      
      var $43 = HEAP[$self];
      
      var $45 = HEAP[$pObj_addr] + 8;
      _RotatingTree_Add($45, $43);
      var $46 = HEAP[$self];
      HEAP[$0] = $46;
      __label__ = 5;
      break;
     case 5:
      var $47 = HEAP[$0];
      HEAP[$retval] = $47;
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
  function _getEntry($pObj, $key) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr = __stackBase__;
      var $key_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$pObj_addr] = $pObj;
      HEAP[$key_addr] = $key;
      
      var $2 = HEAP[$pObj_addr] + 8;
      var $3 = HEAP[$key_addr];
      var $4 = _RotatingTree_Get($2, $3);
      var $5 = $4;
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
  function _getSubEntry($pObj, $caller, $entry1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $caller_addr = __stackBase__ + 4;
      var $entry_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $pObj;
      HEAP[$caller_addr] = $caller;
      HEAP[$entry_addr] = $entry1;
      
      var $2 = HEAP[$caller_addr] + 44;
      
      var $4 = HEAP[$entry_addr];
      var $5 = _RotatingTree_Get($2, $4);
      var $6 = $5;
      HEAP[$0] = $6;
      var $7 = HEAP[$0];
      HEAP[$retval] = $7;
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
  function _newSubEntry($pObj, $caller, $entry1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr = __stackBase__;
      var $caller_addr = __stackBase__ + 4;
      var $entry_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $self = __stackBase__ + 20;
      
      HEAP[$pObj_addr] = $pObj;
      HEAP[$caller_addr] = $caller;
      HEAP[$entry_addr] = $entry1;
      var $1 = _malloc(40);
      
      HEAP[$self] = $1;
      
      
      if (HEAP[$self] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[HEAP[$pObj_addr] + 20] | 256;
      
      var $10 = HEAP[$pObj_addr] + 20;
      HEAP[$10] = $8;
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      var $13 = HEAP[$self];
      
      var $15 = HEAP[$entry_addr];
      HEAP[$13] = $15;
      
      var $17 = HEAP[$self] + 12;
      HEAP[$17] = 0;
      
      var $19 = HEAP[$self] + 20;
      HEAP[$19] = 0;
      
      var $21 = HEAP[$self] + 28;
      HEAP[$21] = 0;
      
      var $23 = HEAP[$self] + 32;
      HEAP[$23] = 0;
      
      var $25 = HEAP[$self] + 36;
      HEAP[$25] = 0;
      
      var $27 = HEAP[$self];
      
      var $29 = HEAP[$caller_addr] + 44;
      _RotatingTree_Add($29, $27);
      var $30 = HEAP[$self];
      HEAP[$0] = $30;
      __label__ = 3;
      break;
     case 3:
      var $31 = HEAP[$0];
      HEAP[$retval] = $31;
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
  function _freeSubEntry($header, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $header_addr = __stackBase__;
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $subentry = __stackBase__ + 16;
      
      HEAP[$header_addr] = $header;
      HEAP[$arg_addr] = $arg;
      
      var $2 = HEAP[$header_addr];
      HEAP[$subentry] = $2;
      
      var $4 = HEAP[$subentry];
      _free($4);
      HEAP[$0] = 0;
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
  function _freeEntry($header, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $header_addr = __stackBase__;
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $entry1 = __stackBase__ + 16;
      
      HEAP[$header_addr] = $header;
      HEAP[$arg_addr] = $arg;
      
      var $2 = HEAP[$header_addr];
      HEAP[$entry1] = $2;
      
      
      var $5 = HEAP[HEAP[$entry1] + 44];
      var $6 = _RotatingTree_Enum($5, FUNCTION_TABLE_OFFSET + 2, 0);
      
      
      var $9 = HEAP[HEAP[$entry1] + 12];
      
      
      var $12 = HEAP[$9] - 1;
      var $13 = $9;
      HEAP[$13] = $12;
      
      
      
      if (HEAP[$9] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[HEAP[$entry1] + 12] + 4] + 24];
      
      
      var $26 = HEAP[HEAP[$entry1] + 12];
      FUNCTION_TABLE[$23]($26);
      __label__ = 2;
      break;
     case 2:
      
      var $28 = HEAP[$entry1];
      _free($28);
      HEAP[$0] = 0;
      var $29 = HEAP[$0];
      HEAP[$retval] = $29;
      __label__ = 3;
      break;
     case 3:
      var $retval3 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _clearEntries($pObj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr = __stackBase__;
      var $c = __stackBase__ + 4;
      
      HEAP[$pObj_addr] = $pObj;
      
      
      var $2 = HEAP[HEAP[$pObj_addr] + 8];
      var $3 = _RotatingTree_Enum($2, FUNCTION_TABLE_OFFSET + 4, 0);
      
      var $5 = HEAP[$pObj_addr] + 8;
      HEAP[$5] = 0;
      
      
      
      
      if (HEAP[HEAP[$pObj_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $13 = HEAP[HEAP[$pObj_addr] + 12];
      _free($13);
      
      var $15 = HEAP[$pObj_addr] + 12;
      HEAP[$15] = 0;
      __label__ = 2;
      break;
     case 2:
      __label__ = 4;
      break;
     case 3:
      
      
      var $18 = HEAP[HEAP[$pObj_addr] + 16];
      HEAP[$c] = $18;
      
      
      var $21 = HEAP[HEAP[$c] + 16];
      
      var $23 = HEAP[$pObj_addr] + 16;
      HEAP[$23] = $21;
      
      var $25 = HEAP[$c];
      _free($25);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      if (HEAP[HEAP[$pObj_addr] + 16] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $31 = HEAP[$pObj_addr] + 16;
      HEAP[$31] = 0;
      __label__ = 6;
      break;
     case 6:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initContext($pObj, $self, $entry1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr = __stackBase__;
      var $self_addr = __stackBase__ + 4;
      var $entry_addr = __stackBase__ + 8;
      var $iftmp_2 = __stackBase__ + 12;
      var $caller = __stackBase__ + 20;
      var $subentry = __stackBase__ + 24;
      
      HEAP[$pObj_addr] = $pObj;
      HEAP[$self_addr] = $self;
      HEAP[$entry_addr] = $entry1;
      
      var $1 = HEAP[$self_addr] + 20;
      var $2 = HEAP[$entry_addr];
      HEAP[$1] = $2;
      
      var $4 = HEAP[$self_addr] + 8;
      HEAP[$4] = 0;
      
      
      var $7 = HEAP[HEAP[$pObj_addr] + 12];
      
      var $9 = HEAP[$self_addr] + 16;
      HEAP[$9] = $7;
      
      var $11 = HEAP[$pObj_addr] + 12;
      var $12 = HEAP[$self_addr];
      HEAP[$11] = $12;
      
      
      
      var $16 = HEAP[HEAP[$entry_addr] + 40] + 1;
      
      var $18 = HEAP[$entry_addr] + 40;
      HEAP[$18] = $16;
      
      
      
      
      
      if ((HEAP[HEAP[$pObj_addr] + 20] & 2) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      
      
      
      
      var $32 = HEAP[HEAP[HEAP[$self_addr] + 16] + 20];
      HEAP[$caller] = $32;
      var $33 = HEAP[$pObj_addr];
      var $34 = HEAP[$caller];
      var $35 = HEAP[$entry_addr];
      var $36 = _getSubEntry($33, $34, $35);
      HEAP[$subentry] = $36;
      
      
      if (HEAP[$subentry] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $39 = HEAP[$pObj_addr];
      var $40 = HEAP[$caller];
      var $41 = HEAP[$entry_addr];
      var $42 = _newSubEntry($39, $40, $41);
      HEAP[$subentry] = $42;
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[$subentry] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      var $48 = HEAP[HEAP[$subentry] + 36] + 1;
      
      var $50 = HEAP[$subentry] + 36;
      HEAP[$50] = $48;
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$pObj_addr] + 24] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $55 = HEAP[$pObj_addr];
      var $56 = _CallExternalTimer($55);
      HEAP[$iftmp_2] = $56;
      __label__ = 9;
      break;
     case 8:
      var $57 = _hpTimer();
      HEAP[$iftmp_2] = $57;
      __label__ = 9;
      break;
     case 9:
      
      var $59 = HEAP[$self_addr];
      var $60 = HEAP[$iftmp_2];
      HEAP[$59] = $60;
      __label__ = 10;
      break;
     case 10:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Stop($pObj, $self, $entry1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr = __stackBase__;
      var $self_addr = __stackBase__ + 4;
      var $entry_addr = __stackBase__ + 8;
      var $iftmp_3 = __stackBase__ + 12;
      var $tt = __stackBase__ + 20;
      var $it = __stackBase__ + 28;
      var $caller = __stackBase__ + 36;
      var $subentry = __stackBase__ + 40;
      
      HEAP[$pObj_addr] = $pObj;
      HEAP[$self_addr] = $self;
      HEAP[$entry_addr] = $entry1;
      
      
      
      
      if (HEAP[HEAP[$pObj_addr] + 24] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[$pObj_addr];
      var $5 = _CallExternalTimer($4);
      HEAP[$iftmp_3] = $5;
      __label__ = 3;
      break;
     case 2:
      var $6 = _hpTimer();
      HEAP[$iftmp_3] = $6;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      var $11 = HEAP[$iftmp_3] - HEAP[HEAP[$self_addr]];
      HEAP[$tt] = $11;
      
      
      
      
      var $16 = HEAP[$tt] - HEAP[HEAP[$self_addr] + 8];
      HEAP[$it] = $16;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[$self_addr] + 16] + 8] + HEAP[$tt];
      var $31 = HEAP[HEAP[$self_addr] + 16] + 8;
      HEAP[$31] = $30;
      __label__ = 5;
      break;
     case 5:
      
      
      var $34 = HEAP[HEAP[$self_addr] + 16];
      
      var $36 = HEAP[$pObj_addr] + 12;
      HEAP[$36] = $34;
      
      
      
      var $40 = HEAP[HEAP[$entry_addr] + 40] - 1;
      
      var $42 = HEAP[$entry_addr] + 40;
      HEAP[$42] = $40;
      
      
      
      
      if (HEAP[HEAP[$entry_addr] + 40] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $51 = HEAP[HEAP[$entry_addr] + 16] + HEAP[$tt];
      
      var $53 = HEAP[$entry_addr] + 16;
      HEAP[$53] = $51;
      __label__ = 8;
      break;
     case 7:
      
      
      
      var $57 = HEAP[HEAP[$entry_addr] + 36] + 1;
      
      var $59 = HEAP[$entry_addr] + 36;
      HEAP[$59] = $57;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      var $64 = HEAP[HEAP[$entry_addr] + 24] + HEAP[$it];
      
      var $66 = HEAP[$entry_addr] + 24;
      HEAP[$66] = $64;
      
      
      
      var $70 = HEAP[HEAP[$entry_addr] + 32] + 1;
      
      var $72 = HEAP[$entry_addr] + 32;
      HEAP[$72] = $70;
      
      
      
      
      
      if ((HEAP[HEAP[$pObj_addr] + 20] & 2) != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 10:
      
      
      
      
      var $86 = HEAP[HEAP[HEAP[$self_addr] + 16] + 20];
      HEAP[$caller] = $86;
      var $87 = HEAP[$pObj_addr];
      var $88 = HEAP[$caller];
      var $89 = HEAP[$entry_addr];
      var $90 = _getSubEntry($87, $88, $89);
      HEAP[$subentry] = $90;
      
      
      if (HEAP[$subentry] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      
      
      var $96 = HEAP[HEAP[$subentry] + 36] - 1;
      
      var $98 = HEAP[$subentry] + 36;
      HEAP[$98] = $96;
      
      
      
      
      if (HEAP[HEAP[$subentry] + 36] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $107 = HEAP[HEAP[$subentry] + 12] + HEAP[$tt];
      
      var $109 = HEAP[$subentry] + 12;
      HEAP[$109] = $107;
      __label__ = 14;
      break;
     case 13:
      
      
      
      var $113 = HEAP[HEAP[$subentry] + 32] + 1;
      
      var $115 = HEAP[$subentry] + 32;
      HEAP[$115] = $113;
      __label__ = 14;
      break;
     case 14:
      
      
      
      
      var $120 = HEAP[HEAP[$subentry] + 20] + HEAP[$it];
      
      var $122 = HEAP[$subentry] + 20;
      HEAP[$122] = $120;
      
      
      
      var $126 = HEAP[HEAP[$subentry] + 28] + 1;
      
      var $128 = HEAP[$subentry] + 28;
      HEAP[$128] = $126;
      __label__ = 15;
      break;
     case 15:
      __label__ = 16;
      break;
     case 16:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ptrace_enter_call($self, $key, $userObj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $key_addr = __stackBase__ + 4;
      var $userObj_addr = __stackBase__ + 8;
      var $pObj = __stackBase__ + 12;
      var $profEntry = __stackBase__ + 16;
      var $pContext = __stackBase__ + 20;
      var $last_type = __stackBase__ + 24;
      var $last_value = __stackBase__ + 28;
      var $last_tb = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$key_addr] = $key;
      HEAP[$userObj_addr] = $userObj;
      
      var $1 = HEAP[$self_addr];
      HEAP[$pObj] = $1;
      _PyErr_Fetch($last_type, $last_value, $last_tb);
      var $2 = HEAP[$pObj];
      var $3 = HEAP[$key_addr];
      var $4 = _getEntry($2, $3);
      HEAP[$profEntry] = $4;
      
      
      if (HEAP[$profEntry] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = HEAP[$pObj];
      var $8 = HEAP[$key_addr];
      var $9 = HEAP[$userObj_addr];
      var $10 = _newProfilerEntry($7, $8, $9);
      HEAP[$profEntry] = $10;
      
      
      if (HEAP[$profEntry] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $15 = HEAP[HEAP[$pObj] + 16];
      HEAP[$pContext] = $15;
      
      
      if (HEAP[$pContext] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $20 = HEAP[HEAP[$pContext] + 16];
      
      var $22 = HEAP[$pObj] + 16;
      HEAP[$22] = $20;
      __label__ = 6;
      break;
     case 4:
      var $23 = _malloc(24);
      
      HEAP[$pContext] = $23;
      
      
      if (HEAP[$pContext] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      var $30 = HEAP[HEAP[$pObj] + 20] | 256;
      
      var $32 = HEAP[$pObj] + 20;
      HEAP[$32] = $30;
      __label__ = 7;
      break;
     case 6:
      var $33 = HEAP[$pObj];
      var $34 = HEAP[$pContext];
      var $35 = HEAP[$profEntry];
      _initContext($33, $34, $35);
      __label__ = 7;
      break;
     case 7:
      var $36 = HEAP[$last_tb];
      var $37 = HEAP[$last_value];
      var $38 = HEAP[$last_type];
      _PyErr_Restore($38, $37, $36);
      __label__ = 8;
      break;
     case 8:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ptrace_leave_call($self, $key) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $key_addr = __stackBase__ + 4;
      var $pObj = __stackBase__ + 8;
      var $profEntry = __stackBase__ + 12;
      var $pContext = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$key_addr] = $key;
      
      var $1 = HEAP[$self_addr];
      HEAP[$pObj] = $1;
      
      
      var $4 = HEAP[HEAP[$pObj] + 12];
      HEAP[$pContext] = $4;
      
      
      if (HEAP[$pContext] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $7 = HEAP[$pObj];
      var $8 = HEAP[$key_addr];
      var $9 = _getEntry($7, $8);
      HEAP[$profEntry] = $9;
      
      
      if (HEAP[$profEntry] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $12 = HEAP[$pObj];
      var $13 = HEAP[$pContext];
      var $14 = HEAP[$profEntry];
      _Stop($12, $13, $14);
      __label__ = 4;
      break;
     case 3:
      
      
      var $17 = HEAP[HEAP[$pContext] + 16];
      
      var $19 = HEAP[$pObj] + 12;
      HEAP[$19] = $17;
      __label__ = 4;
      break;
     case 4:
      
      
      var $22 = HEAP[HEAP[$pObj] + 16];
      
      var $24 = HEAP[$pContext] + 16;
      HEAP[$24] = $22;
      
      var $26 = HEAP[$pObj] + 16;
      var $27 = HEAP[$pContext];
      HEAP[$26] = $27;
      __label__ = 5;
      break;
     case 5:
      __label__ = 6;
      break;
     case 6:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _profiler_callback($self, $frame, $what, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $frame_addr = __stackBase__ + 4;
      var $what_addr = __stackBase__ + 8;
      var $arg_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$frame_addr] = $frame;
      HEAP[$what_addr] = $what;
      HEAP[$arg_addr] = $arg;
      var $1 = HEAP[$what_addr];
      if ($1 == 0) {
        __label__ = 1;
        break;
      } else if ($1 == 3) {
        __label__ = 2;
        break;
      } else if ($1 == 4) {
        __label__ = 3;
        break;
      } else if ($1 == 5) {
        __label__ = 7;
        break;
      } else if ($1 == 6) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      
      
      
      var $5 = HEAP[HEAP[$frame_addr] + 16];
      
      
      
      var $9 = HEAP[$self_addr];
      var $10 = HEAP[HEAP[$frame_addr] + 16];
      _ptrace_enter_call($9, $10, $5);
      __label__ = 10;
      break;
     case 2:
      
      
      
      var $14 = HEAP[$self_addr];
      var $15 = HEAP[HEAP[$frame_addr] + 16];
      _ptrace_leave_call($14, $15);
      __label__ = 10;
      break;
     case 3:
      
      
      
      
      
      
      if ((HEAP[HEAP[$self_addr] + 20] & 4) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[HEAP[$arg_addr] + 4] == _PyCFunction_Type) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $30 = HEAP[$self_addr];
      var $31 = HEAP[HEAP[$arg_addr] + 8];
      var $32 = HEAP[$arg_addr];
      _ptrace_enter_call($30, $31, $32);
      __label__ = 6;
      break;
     case 6:
      __label__ = 10;
      break;
     case 7:
      
      
      
      
      
      
      if ((HEAP[HEAP[$self_addr] + 20] & 4) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[HEAP[$arg_addr] + 4] == _PyCFunction_Type) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $47 = HEAP[$self_addr];
      var $48 = HEAP[HEAP[$arg_addr] + 8];
      _ptrace_leave_call($47, $48);
      __label__ = 10;
      break;
     case 10:
      HEAP[$0] = 0;
      var $49 = HEAP[$0];
      HEAP[$retval] = $49;
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
  function _pending_exception($pObj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$pObj_addr] = $pObj;
      
      
      
      
      
      if ((HEAP[HEAP[$pObj_addr] + 20] & 256) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[HEAP[$pObj_addr] + 20] - 256;
      
      var $11 = HEAP[$pObj_addr] + 20;
      HEAP[$11] = $9;
      var $12 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($12, __str4);
      HEAP[$0] = -1;
      __label__ = 3;
      break;
     case 2:
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 3:
      var $13 = HEAP[$0];
      HEAP[$retval] = $13;
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
  function _statsForSubEntry($node, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $node_addr = __stackBase__;
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $sentry = __stackBase__ + 16;
      var $collect = __stackBase__ + 20;
      var $entry1 = __stackBase__ + 24;
      var $err = __stackBase__ + 28;
      var $sinfo = __stackBase__ + 32;
      
      HEAP[$node_addr] = $node;
      HEAP[$arg_addr] = $arg;
      
      var $2 = HEAP[$node_addr];
      HEAP[$sentry] = $2;
      
      var $4 = HEAP[$arg_addr];
      HEAP[$collect] = $4;
      
      
      
      
      var $9 = HEAP[HEAP[$sentry]];
      HEAP[$entry1] = $9;
      
      
      
      
      
      
      
      var $17 = HEAP[HEAP[$collect] + 8] * HEAP[HEAP[$sentry] + 20];
      
      
      
      
      
      
      
      var $25 = HEAP[HEAP[$collect] + 8] * HEAP[HEAP[$sentry] + 12];
      
      
      var $28 = HEAP[HEAP[$sentry] + 32];
      
      
      var $31 = HEAP[HEAP[$sentry] + 28];
      
      
      var $34 = HEAP[HEAP[$entry1] + 12];
      var $35 = _PyObject_CallFunction(_StatsSubEntryType, __str24, allocate([ $34, 0, 0, 0, $31, 0, 0, 0, $28, 0, 0, 0, $25, 0, 0, 0, 0, 0, 0, 0, $17, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_STACK));
      HEAP[$sinfo] = $35;
      
      
      if (HEAP[$sinfo] == 0) {
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
      
      
      var $40 = HEAP[HEAP[$collect] + 4];
      var $41 = HEAP[$sinfo];
      var $42 = _PyList_Append($40, $41);
      HEAP[$err] = $42;
      
      
      
      var $46 = HEAP[HEAP[$sinfo]] - 1;
      
      var $48 = HEAP[$sinfo];
      HEAP[$48] = $46;
      
      
      
      
      if (HEAP[HEAP[$sinfo]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[$sinfo] + 4] + 24];
      var $58 = HEAP[$sinfo];
      FUNCTION_TABLE[$57]($58);
      __label__ = 4;
      break;
     case 4:
      var $59 = HEAP[$err];
      HEAP[$0] = $59;
      __label__ = 5;
      break;
     case 5:
      var $60 = HEAP[$0];
      HEAP[$retval] = $60;
      __label__ = 6;
      break;
     case 6:
      var $retval6 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _statsForEntry($node, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $node_addr = __stackBase__;
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $entry1 = __stackBase__ + 16;
      var $collect = __stackBase__ + 20;
      var $info = __stackBase__ + 24;
      var $err = __stackBase__ + 28;
      
      HEAP[$node_addr] = $node;
      HEAP[$arg_addr] = $arg;
      
      var $2 = HEAP[$node_addr];
      HEAP[$entry1] = $2;
      
      var $4 = HEAP[$arg_addr];
      HEAP[$collect] = $4;
      
      
      
      
      if (HEAP[HEAP[$entry1] + 32] == 0) {
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
      
      
      
      
      if (HEAP[HEAP[$entry1] + 44] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 3:
      var $13 = _PyList_New(0);
      
      var $15 = HEAP[$collect] + 4;
      HEAP[$15] = $13;
      
      
      
      
      if (HEAP[HEAP[$collect] + 4] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 18;
      break;
     case 5:
      
      
      var $22 = HEAP[HEAP[$entry1] + 44];
      
      var $24 = HEAP[$collect];
      var $25 = _RotatingTree_Enum($22, FUNCTION_TABLE_OFFSET + 6, $24);
      
      if ($25 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      var $29 = HEAP[HEAP[$collect] + 4];
      
      
      var $32 = HEAP[$29] - 1;
      var $33 = $29;
      HEAP[$33] = $32;
      
      
      
      if (HEAP[$29] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $43 = HEAP[HEAP[HEAP[HEAP[$collect] + 4] + 4] + 24];
      
      
      var $46 = HEAP[HEAP[$collect] + 4];
      FUNCTION_TABLE[$43]($46);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = -1;
      __label__ = 18;
      break;
     case 9:
      __label__ = 11;
      break;
     case 10:
      
      var $48 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $48;
      
      var $50 = HEAP[$collect] + 4;
      HEAP[$50] = __Py_NoneStruct;
      __label__ = 11;
      break;
     case 11:
      
      
      var $53 = HEAP[HEAP[$collect] + 4];
      
      
      
      
      
      
      
      var $61 = HEAP[HEAP[$collect] + 8] * HEAP[HEAP[$entry1] + 24];
      
      
      
      
      
      
      
      var $69 = HEAP[HEAP[$collect] + 8] * HEAP[HEAP[$entry1] + 16];
      
      
      var $72 = HEAP[HEAP[$entry1] + 36];
      
      
      var $75 = HEAP[HEAP[$entry1] + 32];
      
      
      var $78 = HEAP[HEAP[$entry1] + 12];
      var $79 = _PyObject_CallFunction(_StatsEntryType, __str25, allocate([ $78, 0, 0, 0, $75, 0, 0, 0, $72, 0, 0, 0, $69, 0, 0, 0, 0, 0, 0, 0, $61, 0, 0, 0, 0, 0, 0, 0, $53, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$info] = $79;
      
      
      var $82 = HEAP[HEAP[$collect] + 4];
      
      
      var $85 = HEAP[$82] - 1;
      var $86 = $82;
      HEAP[$86] = $85;
      
      
      
      if (HEAP[$82] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      var $96 = HEAP[HEAP[HEAP[HEAP[$collect] + 4] + 4] + 24];
      
      
      var $99 = HEAP[HEAP[$collect] + 4];
      FUNCTION_TABLE[$96]($99);
      __label__ = 13;
      break;
     case 13:
      
      
      if (HEAP[$info] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = -1;
      __label__ = 18;
      break;
     case 15:
      
      
      var $104 = HEAP[HEAP[$collect]];
      var $105 = HEAP[$info];
      var $106 = _PyList_Append($104, $105);
      HEAP[$err] = $106;
      
      
      
      var $110 = HEAP[HEAP[$info]] - 1;
      
      var $112 = HEAP[$info];
      HEAP[$112] = $110;
      
      
      
      
      if (HEAP[HEAP[$info]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $121 = HEAP[HEAP[HEAP[$info] + 4] + 24];
      var $122 = HEAP[$info];
      FUNCTION_TABLE[$121]($122);
      __label__ = 17;
      break;
     case 17:
      var $123 = HEAP[$err];
      HEAP[$0] = $123;
      __label__ = 18;
      break;
     case 18:
      var $124 = HEAP[$0];
      HEAP[$retval] = $124;
      __label__ = 19;
      break;
     case 19:
      var $retval19 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _profiler_getstats($pObj, $noarg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr = __stackBase__;
      var $noarg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $collect = __stackBase__ + 16;
      
      HEAP[$pObj_addr] = $pObj;
      HEAP[$noarg_addr] = $noarg;
      var $1 = HEAP[$pObj_addr];
      var $2 = _pending_exception($1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$pObj_addr] + 24] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = _hpTimerUnit();
      
      HEAP[$collect + 8] = $8;
      __label__ = 7;
      break;
     case 4:
      
      
      
      
      if (HEAP[HEAP[$pObj_addr] + 28] > 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $16 = HEAP[HEAP[$pObj_addr] + 28];
      
      HEAP[$collect + 8] = $16;
      __label__ = 7;
      break;
     case 6:
      
      HEAP[$collect + 8] = 2.3283064365386963e-10;
      __label__ = 7;
      break;
     case 7:
      var $19 = _PyList_New(0);
      
      HEAP[$collect] = $19;
      
      
      
      if (HEAP[$collect] == 0) {
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
      
      
      var $26 = HEAP[HEAP[$pObj_addr] + 8];
      var $collect9 = $collect;
      var $27 = _RotatingTree_Enum($26, FUNCTION_TABLE_OFFSET + 8, $collect9);
      
      if ($27 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      var $30 = HEAP[$collect];
      
      
      var $33 = HEAP[$30] - 1;
      var $34 = $30;
      HEAP[$34] = $33;
      
      
      
      if (HEAP[$30] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      var $43 = HEAP[HEAP[HEAP[$collect] + 4] + 24];
      
      var $45 = HEAP[$collect];
      FUNCTION_TABLE[$43]($45);
      __label__ = 12;
      break;
     case 12:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 13:
      
      var $47 = HEAP[$collect];
      HEAP[$0] = $47;
      __label__ = 14;
      break;
     case 14:
      var $48 = HEAP[$0];
      HEAP[$retval] = $48;
      __label__ = 15;
      break;
     case 15:
      var $retval15 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _setSubcalls($pObj, $nvalue) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr = __stackBase__;
      var $nvalue_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$pObj_addr] = $pObj;
      HEAP[$nvalue_addr] = $nvalue;
      
      
      if (HEAP[$nvalue_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $6 = HEAP[HEAP[$pObj_addr] + 20] & -3;
      
      var $8 = HEAP[$pObj_addr] + 20;
      HEAP[$8] = $6;
      __label__ = 4;
      break;
     case 2:
      
      
      if (HEAP[$nvalue_addr] > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $14 = HEAP[HEAP[$pObj_addr] + 20] | 2;
      
      var $16 = HEAP[$pObj_addr] + 20;
      HEAP[$16] = $14;
      __label__ = 4;
      break;
     case 4:
      HEAP[$0] = 0;
      var $17 = HEAP[$0];
      HEAP[$retval] = $17;
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
  function _setBuiltins($pObj, $nvalue) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr = __stackBase__;
      var $nvalue_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$pObj_addr] = $pObj;
      HEAP[$nvalue_addr] = $nvalue;
      
      
      if (HEAP[$nvalue_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $6 = HEAP[HEAP[$pObj_addr] + 20] & -5;
      
      var $8 = HEAP[$pObj_addr] + 20;
      HEAP[$8] = $6;
      __label__ = 4;
      break;
     case 2:
      
      
      if (HEAP[$nvalue_addr] > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $14 = HEAP[HEAP[$pObj_addr] + 20] | 4;
      
      var $16 = HEAP[$pObj_addr] + 20;
      HEAP[$16] = $14;
      __label__ = 4;
      break;
     case 4:
      HEAP[$0] = 0;
      var $17 = HEAP[$0];
      HEAP[$retval] = $17;
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
  function _profiler_enable($self, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $subcalls = __stackBase__ + 20;
      var $builtins = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$subcalls] = -1;
      HEAP[$builtins] = -1;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwds_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str26, _kwlist_9075, allocate([ $subcalls, 0, 0, 0, $builtins, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 2:
      var $5 = HEAP[$subcalls];
      var $6 = HEAP[$self_addr];
      var $7 = _setSubcalls($6, $5);
      
      if ($7 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $9 = HEAP[$builtins];
      var $10 = HEAP[$self_addr];
      var $11 = _setBuiltins($10, $9);
      
      if ($11 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 5:
      
      var $14 = HEAP[$self_addr];
      _PyEval_SetProfile(FUNCTION_TABLE_OFFSET + 10, $14);
      
      
      
      var $18 = HEAP[HEAP[$self_addr] + 20] | 1;
      
      var $20 = HEAP[$self_addr] + 20;
      HEAP[$20] = $18;
      
      var $22 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $22;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 6;
      break;
     case 6:
      var $23 = HEAP[$0];
      HEAP[$retval] = $23;
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
  function _flush_unmatched($pObj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr = __stackBase__;
      var $pContext = __stackBase__ + 4;
      var $profEntry = __stackBase__ + 8;
      
      HEAP[$pObj_addr] = $pObj;
      __label__ = 6;
      break;
     case 1:
      
      
      var $2 = HEAP[HEAP[$pObj_addr] + 12];
      HEAP[$pContext] = $2;
      
      
      var $5 = HEAP[HEAP[$pContext] + 20];
      HEAP[$profEntry] = $5;
      
      
      if (HEAP[$profEntry] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $8 = HEAP[$pObj_addr];
      var $9 = HEAP[$pContext];
      var $10 = HEAP[$profEntry];
      _Stop($8, $9, $10);
      __label__ = 4;
      break;
     case 3:
      
      
      var $13 = HEAP[HEAP[$pContext] + 16];
      
      var $15 = HEAP[$pObj_addr] + 12;
      HEAP[$15] = $13;
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[$pContext] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $19 = HEAP[$pContext];
      _free($19);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$pObj_addr] + 12] != 0) {
        __label__ = 1;
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
  function _profiler_disable($self, $noarg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $noarg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$noarg_addr] = $noarg;
      
      
      
      var $4 = HEAP[HEAP[$self_addr] + 20] & -2;
      
      var $6 = HEAP[$self_addr] + 20;
      HEAP[$6] = $4;
      _PyEval_SetProfile(0, 0);
      var $7 = HEAP[$self_addr];
      _flush_unmatched($7);
      var $8 = HEAP[$self_addr];
      var $9 = _pending_exception($8);
      
      if ($9 != 0) {
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
      
      var $12 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $12;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      var $13 = HEAP[$0];
      HEAP[$retval] = $13;
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
  function _profiler_clear($pObj, $noarg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr = __stackBase__;
      var $noarg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$pObj_addr] = $pObj;
      HEAP[$noarg_addr] = $noarg;
      var $1 = HEAP[$pObj_addr];
      _clearEntries($1);
      
      var $3 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $3;
      HEAP[$0] = __Py_NoneStruct;
      var $4 = HEAP[$0];
      HEAP[$retval] = $4;
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
  function _profiler_dealloc($op) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $op_addr = __stackBase__;
      
      HEAP[$op_addr] = $op;
      
      
      
      
      
      
      if ((HEAP[HEAP[$op_addr] + 20] & 1 & 255) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      _PyEval_SetProfile(0, 0);
      __label__ = 2;
      break;
     case 2:
      var $5 = HEAP[$op_addr];
      _flush_unmatched($5);
      var $6 = HEAP[$op_addr];
      _clearEntries($6);
      
      
      
      
      if (HEAP[HEAP[$op_addr] + 24] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $13 = HEAP[HEAP[$op_addr] + 24];
      
      
      var $16 = HEAP[$13] - 1;
      var $17 = $13;
      HEAP[$17] = $16;
      
      
      
      if (HEAP[$13] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[HEAP[$op_addr] + 24] + 4] + 24];
      
      
      var $30 = HEAP[HEAP[$op_addr] + 24];
      FUNCTION_TABLE[$27]($30);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[$op_addr] + 4] + 160];
      
      var $38 = HEAP[$op_addr];
      FUNCTION_TABLE[$36]($38);
      __label__ = 6;
      break;
     case 6:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _profiler_init($pObj, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $o = __stackBase__ + 20;
      var $timer = __stackBase__ + 24;
      var $timeunit = __stackBase__ + 28;
      var $subcalls = __stackBase__ + 36;
      var $builtins = __stackBase__ + 40;
      
      HEAP[$pObj_addr] = $pObj;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$timer] = 0;
      HEAP[$timeunit] = 0;
      HEAP[$subcalls] = 1;
      HEAP[$builtins] = 1;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kw_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str29, _kwlist_9165, allocate([ $timer, 0, 0, 0, $timeunit, 0, 0, 0, $subcalls, 0, 0, 0, $builtins, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "double*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 11;
      break;
     case 2:
      var $5 = HEAP[$subcalls];
      var $6 = HEAP[$pObj_addr];
      var $7 = _setSubcalls($6, $5);
      
      if ($7 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $9 = HEAP[$builtins];
      var $10 = HEAP[$pObj_addr];
      var $11 = _setBuiltins($10, $9);
      
      if ($11 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 11;
      break;
     case 5:
      
      
      var $15 = HEAP[HEAP[$pObj_addr] + 24];
      HEAP[$o] = $15;
      var $16 = HEAP[$timer];
      
      var $18 = HEAP[$pObj_addr] + 24;
      HEAP[$18] = $16;
      
      
      if (HEAP[$timer] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $24 = HEAP[HEAP[$timer]] + 1;
      var $25 = HEAP[$timer];
      HEAP[$25] = $24;
      __label__ = 7;
      break;
     case 7:
      
      
      if (HEAP[$o] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      var $31 = HEAP[HEAP[$o]] - 1;
      
      var $33 = HEAP[$o];
      HEAP[$33] = $31;
      
      
      
      
      if (HEAP[HEAP[$o]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $42 = HEAP[HEAP[HEAP[$o] + 4] + 24];
      var $43 = HEAP[$o];
      FUNCTION_TABLE[$42]($43);
      __label__ = 10;
      break;
     case 10:
      var $44 = HEAP[$timeunit];
      
      var $46 = HEAP[$pObj_addr] + 28;
      HEAP[$46] = $44;
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 11:
      var $47 = HEAP[$0];
      HEAP[$retval] = $47;
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
  function _init_lsprof() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $module = __stackBase__;
      var $d = __stackBase__ + 4;
      
      var $0 = _Py_InitModule4(__str37, _moduleMethods, __str38, 0, 1013);
      HEAP[$module] = $0;
      
      
      if (HEAP[$module] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = HEAP[$module];
      var $4 = _PyModule_GetDict($3);
      HEAP[$d] = $4;
      var $5 = _PyType_Ready(_PyProfiler_Type);
      
      if ($5 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $7 = HEAP[$d];
      var $8 = _PyDict_SetItemString($7, __str39, _PyProfiler_Type);
      
      
      if (HEAP[_initialized] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyStructSequence_InitType(_StatsEntryType, _profiler_entry_desc);
      _PyStructSequence_InitType(_StatsSubEntryType, _profiler_subentry_desc);
      __label__ = 4;
      break;
     case 4:
      
      
      var $13 = HEAP[_StatsEntryType] + 1;
      
      HEAP[_StatsEntryType] = $13;
      
      
      var $17 = HEAP[_StatsSubEntryType] + 1;
      
      HEAP[_StatsSubEntryType] = $17;
      var $19 = HEAP[$module];
      var $20 = _PyModule_AddObject($19, __str40, _StatsEntryType);
      var $21 = HEAP[$module];
      var $22 = _PyModule_AddObject($21, __str41, _StatsSubEntryType);
      var $23 = _PyTuple_New(0);
      HEAP[_empty_tuple] = $23;
      HEAP[_initialized] = 1;
      __label__ = 5;
      break;
     case 5:
      __label__ = 6;
      break;
     case 6:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_lsprof"] = _init_lsprof;
  function _randombits($bits) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $bits_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $result = __stackBase__ + 12;
      
      HEAP[$bits_addr] = $bits;
      
      
      
      
      if (1 << HEAP[$bits_addr] > HEAP[_random_stream]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $6 = HEAP[_random_value] * 1082527;
      HEAP[_random_value] = $6;
      var $7 = HEAP[_random_value];
      HEAP[_random_stream] = $7;
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      var $12 = (1 << HEAP[$bits_addr]) - 1 & HEAP[_random_stream];
      HEAP[$result] = $12;
      
      
      var $15 = HEAP[_random_stream] >>> HEAP[$bits_addr];
      HEAP[_random_stream] = $15;
      var $16 = HEAP[$result];
      HEAP[$0] = $16;
      var $17 = HEAP[$0];
      HEAP[$retval] = $17;
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
  function _RotatingTree_Add($root, $node) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $root_addr = __stackBase__;
      var $node_addr = __stackBase__ + 4;
      
      HEAP[$root_addr] = $root;
      HEAP[$node_addr] = $node;
      __label__ = 4;
      break;
     case 1:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$node_addr]] < HEAP[HEAP[HEAP[$root_addr]]]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      var $10 = HEAP[HEAP[$root_addr]] + 4;
      HEAP[$root_addr] = $10;
      __label__ = 4;
      break;
     case 3:
      
      
      var $13 = HEAP[HEAP[$root_addr]] + 8;
      HEAP[$root_addr] = $13;
      __label__ = 4;
      break;
     case 4:
      
      
      
      if (HEAP[HEAP[$root_addr]] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $18 = HEAP[$node_addr] + 4;
      HEAP[$18] = 0;
      
      var $20 = HEAP[$node_addr] + 8;
      HEAP[$20] = 0;
      var $21 = HEAP[$root_addr];
      var $22 = HEAP[$node_addr];
      HEAP[$21] = $22;
      __label__ = 6;
      break;
     case 6:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _RotatingTree_Get($root, $key) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $root_addr = __stackBase__;
      var $key_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $node = __stackBase__ + 16;
      var $pnode = __stackBase__ + 20;
      var $node9 = __stackBase__ + 24;
      var $next = __stackBase__ + 28;
      var $rotate = __stackBase__ + 32;
      
      HEAP[$root_addr] = $root;
      HEAP[$key_addr] = $key;
      var $1 = _randombits(3);
      
      if ($1 != 4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      
      var $4 = HEAP[HEAP[$root_addr]];
      HEAP[$node] = $4;
      __label__ = 7;
      break;
     case 2:
      
      
      
      
      
      if (HEAP[HEAP[$node]] == HEAP[$key_addr]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = HEAP[$node];
      HEAP[$0] = $10;
      __label__ = 26;
      break;
     case 4:
      
      
      
      
      
      if (HEAP[HEAP[$node]] > HEAP[$key_addr]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $18 = HEAP[HEAP[$node] + 4];
      HEAP[$node] = $18;
      __label__ = 7;
      break;
     case 6:
      
      
      var $21 = HEAP[HEAP[$node] + 8];
      HEAP[$node] = $21;
      __label__ = 7;
      break;
     case 7:
      
      
      if (HEAP[$node] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 26;
      break;
     case 9:
      var $24 = HEAP[$root_addr];
      HEAP[$pnode] = $24;
      
      var $26 = HEAP[HEAP[$pnode]];
      HEAP[$node9] = $26;
      
      
      if (HEAP[$node9] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = 0;
      __label__ = 26;
      break;
     case 11:
      
      
      
      
      
      if (HEAP[HEAP[$node9]] == HEAP[$key_addr]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $34 = HEAP[$node9];
      HEAP[$0] = $34;
      __label__ = 26;
      break;
     case 13:
      var $35 = _randombits(1);
      
      
      HEAP[$rotate] = $35 == 0;
      
      
      
      
      
      if (HEAP[HEAP[$node9]] > HEAP[$key_addr]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 14:
      
      
      var $45 = HEAP[HEAP[$node9] + 4];
      HEAP[$next] = $45;
      
      
      if (HEAP[$next] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$0] = 0;
      __label__ = 26;
      break;
     case 16:
      
      
      if (HEAP[$rotate] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      var $52 = HEAP[HEAP[$next] + 8];
      
      var $54 = HEAP[$node9] + 4;
      HEAP[$54] = $52;
      
      var $56 = HEAP[$next] + 8;
      var $57 = HEAP[$node9];
      HEAP[$56] = $57;
      var $58 = HEAP[$pnode];
      var $59 = HEAP[$next];
      HEAP[$58] = $59;
      __label__ = 19;
      break;
     case 18:
      
      var $61 = HEAP[$node9] + 4;
      HEAP[$pnode] = $61;
      __label__ = 19;
      break;
     case 19:
      __label__ = 25;
      break;
     case 20:
      
      
      var $64 = HEAP[HEAP[$node9] + 8];
      HEAP[$next] = $64;
      
      
      if (HEAP[$next] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      HEAP[$0] = 0;
      __label__ = 26;
      break;
     case 22:
      
      
      if (HEAP[$rotate] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      var $71 = HEAP[HEAP[$next] + 4];
      
      var $73 = HEAP[$node9] + 8;
      HEAP[$73] = $71;
      
      var $75 = HEAP[$next] + 4;
      var $76 = HEAP[$node9];
      HEAP[$75] = $76;
      var $77 = HEAP[$pnode];
      var $78 = HEAP[$next];
      HEAP[$77] = $78;
      __label__ = 25;
      break;
     case 24:
      
      var $80 = HEAP[$node9] + 8;
      HEAP[$pnode] = $80;
      __label__ = 25;
      break;
     case 25:
      var $81 = HEAP[$next];
      HEAP[$node9] = $81;
      __label__ = 11;
      break;
     case 26:
      var $82 = HEAP[$0];
      HEAP[$retval] = $82;
      __label__ = 27;
      break;
     case 27:
      var $retval27 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _RotatingTree_Enum($root, $enumfn, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $root_addr = __stackBase__;
      var $enumfn_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      var $node = __stackBase__ + 24;
      
      HEAP[$root_addr] = $root;
      HEAP[$enumfn_addr] = $enumfn;
      HEAP[$arg_addr] = $arg;
      __label__ = 6;
      break;
     case 1:
      
      
      var $3 = HEAP[HEAP[$root_addr] + 4];
      var $4 = HEAP[$enumfn_addr];
      var $5 = HEAP[$arg_addr];
      var $6 = _RotatingTree_Enum($3, $4, $5);
      HEAP[$result] = $6;
      
      
      if (HEAP[$result] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $9 = HEAP[$result];
      HEAP[$0] = $9;
      __label__ = 8;
      break;
     case 3:
      
      
      var $12 = HEAP[HEAP[$root_addr] + 8];
      HEAP[$node] = $12;
      var $13 = HEAP[$enumfn_addr];
      var $14 = HEAP[$root_addr];
      var $15 = HEAP[$arg_addr];
      var $16 = FUNCTION_TABLE[$13]($14, $15);
      HEAP[$result] = $16;
      
      
      if (HEAP[$result] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $19 = HEAP[$result];
      HEAP[$0] = $19;
      __label__ = 8;
      break;
     case 5:
      var $20 = HEAP[$node];
      HEAP[$root_addr] = $20;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$root_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 8:
      var $23 = HEAP[$0];
      HEAP[$retval] = $23;
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
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _freeSubEntry, 0, _freeEntry, 0, _statsForSubEntry, 0, _statsForEntry, 0, _profiler_callback, 0, _profiler_getstats, 0, _profiler_enable, 0, _profiler_disable, 0, _profiler_clear, 0, _profiler_dealloc, 0, _profiler_init, 0, _PyType_GenericAlloc, 0, _PyType_GenericNew, 0, _PyObject_Free, 0 ]);
  function run(args) {
    _empty_tuple = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str = allocate([ 95, 95, 98, 117, 105, 108, 116, 105, 110, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 60, 37, 115, 46, 37, 115, 62, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 60, 37, 115, 62, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 60, 98, 117, 105, 108, 116, 45, 105, 110, 32, 109, 101, 116, 104, 111, 100, 32, 37, 115, 62, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 109, 101, 109, 111, 114, 121, 32, 119, 97, 115, 32, 101, 120, 104, 97, 117, 115, 116, 101, 100, 32, 119, 104, 105, 108, 101, 32, 112, 114, 111, 102, 105, 108, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 99, 111, 100, 101, 32, 111, 98, 106, 101, 99, 116, 32, 111, 114, 32, 98, 117, 105, 108, 116, 45, 105, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 99, 97, 108, 108, 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 104, 111, 119, 32, 109, 97, 110, 121, 32, 116, 105, 109, 101, 115, 32, 116, 104, 105, 115, 32, 119, 97, 115, 32, 99, 97, 108, 108, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 114, 101, 99, 99, 97, 108, 108, 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 104, 111, 119, 32, 109, 97, 110, 121, 32, 116, 105, 109, 101, 115, 32, 99, 97, 108, 108, 101, 100, 32, 114, 101, 99, 117, 114, 115, 105, 118, 101, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 116, 111, 116, 97, 108, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 116, 111, 116, 97, 108, 32, 116, 105, 109, 101, 32, 105, 110, 32, 116, 104, 105, 115, 32, 101, 110, 116, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 105, 110, 108, 105, 110, 101, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 105, 110, 108, 105, 110, 101, 32, 116, 105, 109, 101, 32, 105, 110, 32, 116, 104, 105, 115, 32, 101, 110, 116, 114, 121, 32, 40, 110, 111, 116, 32, 105, 110, 32, 115, 117, 98, 99, 97, 108, 108, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 99, 97, 108, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 100, 101, 116, 97, 105, 108, 115, 32, 111, 102, 32, 116, 104, 101, 32, 99, 97, 108, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    _profiler_entry_fields = allocate(56, [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str17 = allocate([ 99, 97, 108, 108, 101, 100, 32, 99, 111, 100, 101, 32, 111, 98, 106, 101, 99, 116, 32, 111, 114, 32, 98, 117, 105, 108, 116, 45, 105, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 104, 111, 119, 32, 109, 97, 110, 121, 32, 116, 105, 109, 101, 115, 32, 116, 104, 105, 115, 32, 105, 115, 32, 99, 97, 108, 108, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 104, 111, 119, 32, 109, 97, 110, 121, 32, 116, 105, 109, 101, 115, 32, 116, 104, 105, 115, 32, 105, 115, 32, 99, 97, 108, 108, 101, 100, 32, 114, 101, 99, 117, 114, 115, 105, 118, 101, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 116, 111, 116, 97, 108, 32, 116, 105, 109, 101, 32, 115, 112, 101, 110, 116, 32, 105, 110, 32, 116, 104, 105, 115, 32, 99, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 105, 110, 108, 105, 110, 101, 32, 116, 105, 109, 101, 32, 40, 110, 111, 116, 32, 105, 110, 32, 102, 117, 114, 116, 104, 101, 114, 32, 115, 117, 98, 99, 97, 108, 108, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    _profiler_subentry_fields = allocate(48, [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _profiler_entry_desc = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyStructSequence_Field*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str22 = allocate([ 95, 108, 115, 112, 114, 111, 102, 46, 112, 114, 111, 102, 105, 108, 101, 114, 95, 101, 110, 116, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    _profiler_subentry_desc = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyStructSequence_Field*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str23 = allocate([ 95, 108, 115, 112, 114, 111, 102, 46, 112, 114, 111, 102, 105, 108, 101, 114, 95, 115, 117, 98, 101, 110, 116, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    _StatsSubEntryType = allocate(196, [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str24 = allocate([ 40, 40, 79, 108, 108, 100, 100, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    _StatsEntryType = allocate(196, [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str25 = allocate([ 40, 40, 79, 108, 108, 100, 100, 79, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    _getstats_doc = allocate([ 103, 101, 116, 115, 116, 97, 116, 115, 40, 41, 32, 45, 62, 32, 108, 105, 115, 116, 32, 111, 102, 32, 112, 114, 111, 102, 105, 108, 101, 114, 95, 101, 110, 116, 114, 121, 32, 111, 98, 106, 101, 99, 116, 115, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 108, 108, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 32, 99, 111, 108, 108, 101, 99, 116, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 112, 114, 111, 102, 105, 108, 101, 114, 46, 10, 69, 97, 99, 104, 32, 112, 114, 111, 102, 105, 108, 101, 114, 95, 101, 110, 116, 114, 121, 32, 105, 115, 32, 97, 32, 116, 117, 112, 108, 101, 45, 108, 105, 107, 101, 32, 111, 98, 106, 101, 99, 116, 32, 119, 105, 116, 104, 32, 116, 104, 101, 10, 102, 111, 108, 108, 111, 119, 105, 110, 103, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 115, 58, 10, 10, 32, 32, 32, 32, 99, 111, 100, 101, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 100, 101, 32, 111, 98, 106, 101, 99, 116, 10, 32, 32, 32, 32, 99, 97, 108, 108, 99, 111, 117, 110, 116, 32, 32, 32, 32, 32, 104, 111, 119, 32, 109, 97, 110, 121, 32, 116, 105, 109, 101, 115, 32, 116, 104, 105, 115, 32, 119, 97, 115, 32, 99, 97, 108, 108, 101, 100, 10, 32, 32, 32, 32, 114, 101, 99, 99, 97, 108, 108, 99, 111, 117, 110, 116, 32, 32, 104, 111, 119, 32, 109, 97, 110, 121, 32, 116, 105, 109, 101, 115, 32, 99, 97, 108, 108, 101, 100, 32, 114, 101, 99, 117, 114, 115, 105, 118, 101, 108, 121, 10, 32, 32, 32, 32, 116, 111, 116, 97, 108, 116, 105, 109, 101, 32, 32, 32, 32, 32, 116, 111, 116, 97, 108, 32, 116, 105, 109, 101, 32, 105, 110, 32, 116, 104, 105, 115, 32, 101, 110, 116, 114, 121, 10, 32, 32, 32, 32, 105, 110, 108, 105, 110, 101, 116, 105, 109, 101, 32, 32, 32, 32, 105, 110, 108, 105, 110, 101, 32, 116, 105, 109, 101, 32, 105, 110, 32, 116, 104, 105, 115, 32, 101, 110, 116, 114, 121, 32, 40, 110, 111, 116, 32, 105, 110, 32, 115, 117, 98, 99, 97, 108, 108, 115, 41, 10, 32, 32, 32, 32, 99, 97, 108, 108, 115, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 116, 97, 105, 108, 115, 32, 111, 102, 32, 116, 104, 101, 32, 99, 97, 108, 108, 115, 10, 10, 84, 104, 101, 32, 99, 97, 108, 108, 115, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 32, 105, 115, 32, 101, 105, 116, 104, 101, 114, 32, 78, 111, 110, 101, 32, 111, 114, 32, 97, 32, 108, 105, 115, 116, 32, 111, 102, 10, 112, 114, 111, 102, 105, 108, 101, 114, 95, 115, 117, 98, 101, 110, 116, 114, 121, 32, 111, 98, 106, 101, 99, 116, 115, 58, 10, 10, 32, 32, 32, 32, 99, 111, 100, 101, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 101, 100, 32, 99, 111, 100, 101, 32, 111, 98, 106, 101, 99, 116, 10, 32, 32, 32, 32, 99, 97, 108, 108, 99, 111, 117, 110, 116, 32, 32, 32, 32, 32, 104, 111, 119, 32, 109, 97, 110, 121, 32, 116, 105, 109, 101, 115, 32, 116, 104, 105, 115, 32, 105, 115, 32, 99, 97, 108, 108, 101, 100, 10, 32, 32, 32, 32, 114, 101, 99, 99, 97, 108, 108, 99, 111, 117, 110, 116, 32, 32, 104, 111, 119, 32, 109, 97, 110, 121, 32, 116, 105, 109, 101, 115, 32, 116, 104, 105, 115, 32, 105, 115, 32, 99, 97, 108, 108, 101, 100, 32, 114, 101, 99, 117, 114, 115, 105, 118, 101, 108, 121, 10, 32, 32, 32, 32, 116, 111, 116, 97, 108, 116, 105, 109, 101, 32, 32, 32, 32, 32, 116, 111, 116, 97, 108, 32, 116, 105, 109, 101, 32, 115, 112, 101, 110, 116, 32, 105, 110, 32, 116, 104, 105, 115, 32, 99, 97, 108, 108, 10, 32, 32, 32, 32, 105, 110, 108, 105, 110, 101, 116, 105, 109, 101, 32, 32, 32, 32, 105, 110, 108, 105, 110, 101, 32, 116, 105, 109, 101, 32, 40, 110, 111, 116, 32, 105, 110, 32, 102, 117, 114, 116, 104, 101, 114, 32, 115, 117, 98, 99, 97, 108, 108, 115, 41, 10, 0 ], "i8", ALLOC_NORMAL);
    _enable_doc = allocate([ 101, 110, 97, 98, 108, 101, 40, 115, 117, 98, 99, 97, 108, 108, 115, 61, 84, 114, 117, 101, 44, 32, 98, 117, 105, 108, 116, 105, 110, 115, 61, 84, 114, 117, 101, 41, 10, 10, 83, 116, 97, 114, 116, 32, 99, 111, 108, 108, 101, 99, 116, 105, 110, 103, 32, 112, 114, 111, 102, 105, 108, 105, 110, 103, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 46, 10, 73, 102, 32, 39, 115, 117, 98, 99, 97, 108, 108, 115, 39, 32, 105, 115, 32, 84, 114, 117, 101, 44, 32, 97, 108, 115, 111, 32, 114, 101, 99, 111, 114, 100, 115, 32, 102, 111, 114, 32, 101, 97, 99, 104, 32, 102, 117, 110, 99, 116, 105, 111, 110, 10, 115, 116, 97, 116, 105, 115, 116, 105, 99, 115, 32, 115, 101, 112, 97, 114, 97, 116, 101, 100, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 105, 116, 115, 32, 99, 117, 114, 114, 101, 110, 116, 32, 99, 97, 108, 108, 101, 114, 46, 10, 73, 102, 32, 39, 98, 117, 105, 108, 116, 105, 110, 115, 39, 32, 105, 115, 32, 84, 114, 117, 101, 44, 32, 114, 101, 99, 111, 114, 100, 115, 32, 116, 104, 101, 32, 116, 105, 109, 101, 32, 115, 112, 101, 110, 116, 32, 105, 110, 10, 98, 117, 105, 108, 116, 45, 105, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 115, 101, 112, 97, 114, 97, 116, 101, 108, 121, 32, 102, 114, 111, 109, 32, 116, 104, 101, 105, 114, 32, 99, 97, 108, 108, 101, 114, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 124, 105, 105, 58, 101, 110, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9075 = allocate(12, "i8*", ALLOC_NORMAL);
    __str27 = allocate([ 115, 117, 98, 99, 97, 108, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 98, 117, 105, 108, 116, 105, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    _disable_doc = allocate([ 100, 105, 115, 97, 98, 108, 101, 40, 41, 10, 10, 83, 116, 111, 112, 32, 99, 111, 108, 108, 101, 99, 116, 105, 110, 103, 32, 112, 114, 111, 102, 105, 108, 105, 110, 103, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _clear_doc = allocate([ 99, 108, 101, 97, 114, 40, 41, 10, 10, 67, 108, 101, 97, 114, 32, 97, 108, 108, 32, 112, 114, 111, 102, 105, 108, 105, 110, 103, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 32, 99, 111, 108, 108, 101, 99, 116, 101, 100, 32, 115, 111, 32, 102, 97, 114, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 124, 79, 100, 105, 105, 58, 80, 114, 111, 102, 105, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9165 = allocate(20, "i8*", ALLOC_NORMAL);
    __str30 = allocate([ 116, 105, 109, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 116, 105, 109, 101, 117, 110, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 103, 101, 116, 115, 116, 97, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 101, 110, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 100, 105, 115, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 99, 108, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    _profiler_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _profiler_doc = allocate([ 80, 114, 111, 102, 105, 108, 101, 114, 40, 99, 117, 115, 116, 111, 109, 95, 116, 105, 109, 101, 114, 61, 78, 111, 110, 101, 44, 32, 116, 105, 109, 101, 95, 117, 110, 105, 116, 61, 78, 111, 110, 101, 44, 32, 115, 117, 98, 99, 97, 108, 108, 115, 61, 84, 114, 117, 101, 44, 32, 98, 117, 105, 108, 116, 105, 110, 115, 61, 84, 114, 117, 101, 41, 10, 10, 32, 32, 32, 32, 66, 117, 105, 108, 100, 115, 32, 97, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 111, 98, 106, 101, 99, 116, 32, 117, 115, 105, 110, 103, 32, 116, 104, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 116, 105, 109, 101, 114, 32, 102, 117, 110, 99, 116, 105, 111, 110, 46, 10, 32, 32, 32, 32, 84, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 116, 105, 109, 101, 114, 32, 105, 115, 32, 97, 32, 102, 97, 115, 116, 32, 98, 117, 105, 108, 116, 45, 105, 110, 32, 111, 110, 101, 32, 98, 97, 115, 101, 100, 32, 111, 110, 32, 114, 101, 97, 108, 32, 116, 105, 109, 101, 46, 10, 32, 32, 32, 32, 70, 111, 114, 32, 99, 117, 115, 116, 111, 109, 32, 116, 105, 109, 101, 114, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 114, 101, 116, 117, 114, 110, 105, 110, 103, 32, 105, 110, 116, 101, 103, 101, 114, 115, 44, 32, 116, 105, 109, 101, 95, 117, 110, 105, 116, 32, 99, 97, 110, 10, 32, 32, 32, 32, 98, 101, 32, 97, 32, 102, 108, 111, 97, 116, 32, 115, 112, 101, 99, 105, 102, 121, 105, 110, 103, 32, 97, 32, 115, 99, 97, 108, 101, 32, 40, 105, 46, 101, 46, 32, 104, 111, 119, 32, 108, 111, 110, 103, 32, 101, 97, 99, 104, 32, 105, 110, 116, 101, 103, 101, 114, 32, 117, 110, 105, 116, 10, 32, 32, 32, 32, 105, 115, 44, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 41, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 95, 108, 115, 112, 114, 111, 102, 46, 80, 114, 111, 102, 105, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _PyProfiler_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _moduleMethods = allocate(16, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str37 = allocate([ 95, 108, 115, 112, 114, 111, 102, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 70, 97, 115, 116, 32, 112, 114, 111, 102, 105, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 80, 114, 111, 102, 105, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _initialized = allocate(1, "i32", ALLOC_NORMAL);
    __str40 = allocate([ 112, 114, 111, 102, 105, 108, 101, 114, 95, 101, 110, 116, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 112, 114, 111, 102, 105, 108, 101, 114, 95, 115, 117, 98, 101, 110, 116, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    _random_value = allocate([ 1 ], [ "i32", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _random_stream = allocate(1, "i32", ALLOC_NORMAL);
    HEAP[_profiler_entry_fields] = __str5;
    HEAP[_profiler_entry_fields + 4] = __str6;
    HEAP[_profiler_entry_fields + 8] = __str7;
    HEAP[_profiler_entry_fields + 12] = __str8;
    HEAP[_profiler_entry_fields + 16] = __str9;
    HEAP[_profiler_entry_fields + 20] = __str10;
    HEAP[_profiler_entry_fields + 24] = __str11;
    HEAP[_profiler_entry_fields + 28] = __str12;
    HEAP[_profiler_entry_fields + 32] = __str13;
    HEAP[_profiler_entry_fields + 36] = __str14;
    HEAP[_profiler_entry_fields + 40] = __str15;
    HEAP[_profiler_entry_fields + 44] = __str16;
    HEAP[_profiler_subentry_fields] = __str5;
    HEAP[_profiler_subentry_fields + 4] = __str17;
    HEAP[_profiler_subentry_fields + 8] = __str7;
    HEAP[_profiler_subentry_fields + 12] = __str18;
    HEAP[_profiler_subentry_fields + 16] = __str9;
    HEAP[_profiler_subentry_fields + 20] = __str19;
    HEAP[_profiler_subentry_fields + 24] = __str11;
    HEAP[_profiler_subentry_fields + 28] = __str20;
    HEAP[_profiler_subentry_fields + 32] = __str13;
    HEAP[_profiler_subentry_fields + 36] = __str21;
    HEAP[_profiler_entry_desc] = __str22;
    HEAP[_profiler_entry_desc + 8] = _profiler_entry_fields;
    HEAP[_profiler_subentry_desc] = __str23;
    HEAP[_profiler_subentry_desc + 8] = _profiler_subentry_fields;
    HEAP[_kwlist_9075] = __str27;
    HEAP[_kwlist_9075 + 4] = __str28;
    HEAP[_kwlist_9165] = __str30;
    HEAP[_kwlist_9165 + 4] = __str31;
    HEAP[_kwlist_9165 + 8] = __str27;
    HEAP[_kwlist_9165 + 12] = __str28;
    HEAP[_profiler_methods] = __str32;
    HEAP[_profiler_methods + 4] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_profiler_methods + 12] = _getstats_doc;
    HEAP[_profiler_methods + 16] = __str33;
    HEAP[_profiler_methods + 20] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_profiler_methods + 28] = _enable_doc;
    HEAP[_profiler_methods + 32] = __str34;
    HEAP[_profiler_methods + 36] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_profiler_methods + 44] = _disable_doc;
    HEAP[_profiler_methods + 48] = __str35;
    HEAP[_profiler_methods + 52] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_profiler_methods + 60] = _clear_doc;
    HEAP[_PyProfiler_Type + 12] = __str36;
    HEAP[_PyProfiler_Type + 24] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_PyProfiler_Type + 88] = _profiler_doc;
    HEAP[_PyProfiler_Type + 116] = _profiler_methods;
    HEAP[_PyProfiler_Type + 148] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_PyProfiler_Type + 152] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_PyProfiler_Type + 156] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_PyProfiler_Type + 160] = FUNCTION_TABLE_OFFSET + 28;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
