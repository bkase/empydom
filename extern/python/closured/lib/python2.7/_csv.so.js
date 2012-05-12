"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 40;
  var $1___SIZE = 8;
  var $2___SIZE = 100;
  var $3___SIZE = 20;
  var $4___SIZE = 20;
  var $5___SIZE = 100;
  var $6___SIZE = 20;
  var $7___SIZE = 196;
  var $8___SIZE = 16;
  var $9___SIZE = 60;
  var $10___SIZE = 196;
  var $11___SIZE = 48;
  var $12___SIZE = 40;
  var $13___SIZE = 128;
  var $struct_DialectObj___SIZE = 32;
  var $struct_DialectObj___FLATTENER = [ 0, 4, 8, 12, 13, 14, 16, 20, 24, 28 ];
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
  var $struct_PyStringObject___SIZE = 24;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct_ReaderObj___SIZE = 44;
  var $struct_StyleDesc___SIZE = 8;
  var $struct_WriterObj___SIZE = 32;
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _field_limit;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var _quote_styles;
  var _dialects;
  var _error_obj;
  var __str4;
  var __str5;
  var __str6;
  var __str7;
  var __str8;
  var __str9;
  var __str10;
  var __str11;
  var __str12;
  var _Dialect_memberlist;
  var __str13;
  var __str14;
  var __str15;
  var __str16;
  var _Dialect_getsetlist;
  var _dialect_kws;
  var __str17;
  var __str18;
  var __str19;
  var __str20;
  var __str21;
  var __str22;
  var _Dialect_Type_doc;
  var __str23;
  var _Dialect_Type;
  var __str24;
  var __str25;
  var __str26;
  var __str27;
  var __str28;
  var __str29;
  var __str30;
  var _Reader_Type_doc;
  var _Reader_methods;
  var __str31;
  var _Reader_memberlist;
  var __str32;
  var _Reader_Type;
  var __str33;
  var __str34;
  var __str35;
  var __str36;
  var _csv_writerow_doc;
  var __str37;
  var __str38;
  var _csv_writerows_doc;
  var __str39;
  var __str40;
  var __str41;
  var _Writer_methods;
  var _Writer_memberlist;
  var _Writer_Type_doc;
  var __str42;
  var _Writer_Type;
  var __str43;
  var __str44;
  var __str45;
  var __str46;
  var __str47;
  var _csv_module_doc;
  var _csv_reader_doc;
  var _csv_writer_doc;
  var _csv_list_dialects_doc;
  var _csv_get_dialect_doc;
  var _csv_register_dialect_doc;
  var _csv_unregister_dialect_doc;
  var _csv_field_size_limit_doc;
  var __str48;
  var __str49;
  var __str50;
  var __str51;
  var __str52;
  var __str53;
  var _csv_methods;
  var __str54;
  var __str55;
  var __str56;
  var __str57;
  var __str58;
  var __str59;
  var __str60;
  function _get_dialect_from_registry($name_obj) {
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
      var $dialect_obj = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $name_obj;
      var $1 = HEAP[_dialects];
      var $2 = HEAP[__stackBase__];
      var $3 = _PyDict_GetItem($1, $2);
      HEAP[$dialect_obj] = $3;
      
      
      if (HEAP[$dialect_obj] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $6 = _PyErr_Occurred();
      
      if ($6 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $8 = HEAP[_error_obj];
      var $9 = _PyErr_Format($8, __str4, allocate(1, "i32", ALLOC_STACK));
      __label__ = 3;
      break;
     case 3:
      __label__ = 5;
      break;
     case 4:
      
      
      
      var $13 = HEAP[HEAP[$dialect_obj]] + 1;
      
      var $15 = HEAP[$dialect_obj];
      HEAP[$15] = $13;
      __label__ = 5;
      break;
     case 5:
      var $16 = HEAP[$dialect_obj];
      HEAP[$0] = $16;
      var $17 = HEAP[$0];
      HEAP[$retval] = $17;
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
  function _get_string($str) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $str_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$str_addr] = $str;
      
      
      if (HEAP[$str_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $6 = HEAP[HEAP[$str_addr]] + 1;
      
      var $8 = HEAP[$str_addr];
      HEAP[$8] = $6;
      __label__ = 2;
      break;
     case 2:
      var $9 = HEAP[$str_addr];
      HEAP[$0] = $9;
      var $10 = HEAP[$0];
      HEAP[$retval] = $10;
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
  function _get_nullchar_as_None($c) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 9;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 9);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $c_addr = __stackBase__;
      var $retval = __stackBase__ + 1;
      var $0 = __stackBase__ + 5;
      
      HEAP[$c_addr] = $c;
      
      
      if (HEAP[$c_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $4 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $4;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 2:
      var $5 = _PyString_FromStringAndSize($c_addr, 1);
      HEAP[$0] = $5;
      __label__ = 3;
      break;
     case 3:
      var $6 = HEAP[$0];
      HEAP[$retval] = $6;
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
  function _Dialect_get_lineterminator($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[__stackBase__] = $self;
      
      
      var $3 = HEAP[HEAP[__stackBase__] + 20];
      var $4 = _get_string($3);
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
  function _Dialect_get_escapechar($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[__stackBase__] = $self;
      
      
      
      
      var $5 = HEAP[HEAP[__stackBase__] + 14] & 255;
      var $6 = _get_nullchar_as_None($5);
      HEAP[$0] = $6;
      var $7 = HEAP[$0];
      HEAP[$retval] = $7;
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
  function _Dialect_get_quotechar($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[__stackBase__] = $self;
      
      
      
      
      var $5 = HEAP[HEAP[__stackBase__] + 13] & 255;
      var $6 = _get_nullchar_as_None($5);
      HEAP[$0] = $6;
      var $7 = HEAP[$0];
      HEAP[$retval] = $7;
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
  function _Dialect_get_quoting($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[__stackBase__] = $self;
      
      
      var $3 = HEAP[HEAP[__stackBase__] + 24];
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
  function __set_bool($name, $target, $src, $dflt) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $target_addr = __stackBase__ + 4;
      var $src_addr = __stackBase__ + 8;
      var $dflt_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $name;
      HEAP[$target_addr] = $target;
      HEAP[$src_addr] = $src;
      HEAP[$dflt_addr] = $dflt;
      
      
      if (HEAP[$src_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[$target_addr];
      var $4 = HEAP[$dflt_addr];
      HEAP[$3] = $4;
      __label__ = 3;
      break;
     case 2:
      var $5 = HEAP[$src_addr];
      var $6 = _PyObject_IsTrue($5);
      var $7 = HEAP[$target_addr];
      HEAP[$7] = $6;
      __label__ = 3;
      break;
     case 3:
      HEAP[$0] = 0;
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
  function __set_int($name, $target, $src, $dflt) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $name_addr = __stackBase__;
      var $target_addr = __stackBase__ + 4;
      var $src_addr = __stackBase__ + 8;
      var $dflt_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      
      HEAP[$name_addr] = $name;
      HEAP[$target_addr] = $target;
      HEAP[$src_addr] = $src;
      HEAP[$dflt_addr] = $dflt;
      
      
      if (HEAP[$src_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[$target_addr];
      var $4 = HEAP[$dflt_addr];
      HEAP[$3] = $4;
      __label__ = 5;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$src_addr] + 4] + 84] & 8388608) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $12 = HEAP[_PyExc_TypeError];
      var $13 = HEAP[$name_addr];
      var $14 = _PyErr_Format($12, __str5, allocate([ $13, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 4:
      var $15 = HEAP[$src_addr];
      var $16 = _PyInt_AsLong($15);
      var $17 = HEAP[$target_addr];
      HEAP[$17] = $16;
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 6:
      var $18 = HEAP[$0];
      HEAP[$retval] = $18;
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
  function __set_char($name, $target, $src, $dflt) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 25;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 25);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $name_addr = __stackBase__;
      var $target_addr = __stackBase__ + 4;
      var $src_addr = __stackBase__ + 8;
      var $dflt_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 13;
      var $0 = __stackBase__ + 17;
      var $s = __stackBase__ + 21;
      
      HEAP[$name_addr] = $name;
      HEAP[$target_addr] = $target;
      HEAP[$src_addr] = $src;
      HEAP[$dflt_addr] = $dflt;
      
      
      if (HEAP[$src_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[$target_addr];
      var $4 = HEAP[$dflt_addr];
      HEAP[$3] = $4;
      __label__ = 11;
      break;
     case 2:
      
      
      if (HEAP[$src_addr] == __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $7 = HEAP[$src_addr];
      var $8 = _PyString_Size($7);
      
      if ($8 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $10 = HEAP[$target_addr];
      HEAP[$10] = 0;
      __label__ = 11;
      break;
     case 5:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$src_addr] + 4] + 84] & 134217728) == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $18 = HEAP[$src_addr];
      var $19 = _PyString_Size($18);
      
      if ($19 != 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $21 = HEAP[_PyExc_TypeError];
      var $22 = HEAP[$name_addr];
      var $23 = _PyErr_Format($21, __str6, allocate([ $22, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 12;
      break;
     case 8:
      var $24 = HEAP[$src_addr];
      var $25 = _PyString_AsString($24);
      HEAP[$s] = $25;
      
      
      if (HEAP[$s] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = -1;
      __label__ = 12;
      break;
     case 10:
      
      
      var $30 = HEAP[HEAP[$s]];
      var $31 = HEAP[$target_addr];
      HEAP[$31] = $30;
      __label__ = 11;
      break;
     case 11:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 12:
      var $32 = HEAP[$0];
      HEAP[$retval] = $32;
      __label__ = 13;
      break;
     case 13:
      var $retval12 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __set_str($name, $target, $src, $dflt) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $name_addr = __stackBase__;
      var $target_addr = __stackBase__ + 4;
      var $src_addr = __stackBase__ + 8;
      var $dflt_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      
      HEAP[$name_addr] = $name;
      HEAP[$target_addr] = $target;
      HEAP[$src_addr] = $src;
      HEAP[$dflt_addr] = $dflt;
      
      
      if (HEAP[$src_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[$dflt_addr];
      var $4 = _PyString_FromString($3);
      var $5 = HEAP[$target_addr];
      HEAP[$5] = $4;
      __label__ = 11;
      break;
     case 2:
      
      
      if (HEAP[$src_addr] == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[$target_addr];
      HEAP[$8] = 0;
      __label__ = 11;
      break;
     case 4:
      
      
      
      
      if (HEAP[HEAP[$src_addr] + 4] == _PyBaseString_Type) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      var $15 = HEAP[HEAP[$src_addr] + 4];
      var $16 = _PyType_IsSubtype($15, _PyBaseString_Type);
      
      if ($16 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $18 = HEAP[_PyExc_TypeError];
      var $19 = HEAP[$name_addr];
      var $20 = _PyErr_Format($18, __str7, allocate([ $19, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 12;
      break;
     case 7:
      
      
      
      if (HEAP[HEAP[$target_addr]] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      var $25 = HEAP[HEAP[$target_addr]];
      
      
      var $28 = HEAP[$25] - 1;
      var $29 = $25;
      HEAP[$29] = $28;
      
      
      
      if (HEAP[$25] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[HEAP[$target_addr]] + 4] + 24];
      
      var $40 = HEAP[HEAP[$target_addr]];
      FUNCTION_TABLE[$38]($40);
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $44 = HEAP[HEAP[$src_addr]] + 1;
      
      var $46 = HEAP[$src_addr];
      HEAP[$46] = $44;
      var $47 = HEAP[$target_addr];
      var $48 = HEAP[$src_addr];
      HEAP[$47] = $48;
      __label__ = 11;
      break;
     case 11:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 12:
      var $49 = HEAP[$0];
      HEAP[$retval] = $49;
      __label__ = 13;
      break;
     case 13:
      var $retval12 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dialect_check_quoting($quoting) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $quoting_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $qs = __stackBase__ + 12;
      
      HEAP[$quoting_addr] = $quoting;
      HEAP[$qs] = _quote_styles;
      HEAP[$qs] = _quote_styles;
      __label__ = 4;
      break;
     case 1:
      
      
      
      
      
      if (HEAP[HEAP[$qs]] == HEAP[$quoting_addr]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 3:
      
      var $7 = HEAP[$qs] + 8;
      HEAP[$qs] = $7;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      if (HEAP[HEAP[$qs] + 4] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $12 = HEAP[_PyExc_TypeError];
      var $13 = _PyErr_Format($12, __str8, allocate(1, "i32", ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 6:
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
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
  function _Dialect_dealloc($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[HEAP[$self_addr] + 20];
      
      
      var $9 = HEAP[$6] - 1;
      var $10 = $6;
      HEAP[$10] = $9;
      
      
      
      if (HEAP[$6] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 4] + 24];
      
      
      var $23 = HEAP[HEAP[$self_addr] + 20];
      FUNCTION_TABLE[$20]($23);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      var $29 = HEAP[HEAP[HEAP[$self_addr] + 4] + 160];
      
      var $31 = HEAP[$self_addr];
      FUNCTION_TABLE[$29]($31);
      __label__ = 4;
      break;
     case 4:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dialect_new($type, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 64;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwargs_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $self = __stackBase__ + 20;
      var $ret = __stackBase__ + 24;
      var $dialect = __stackBase__ + 28;
      var $delimiter = __stackBase__ + 32;
      var $doublequote = __stackBase__ + 36;
      var $escapechar = __stackBase__ + 40;
      var $lineterminator = __stackBase__ + 44;
      var $quotechar = __stackBase__ + 48;
      var $quoting = __stackBase__ + 52;
      var $skipinitialspace = __stackBase__ + 56;
      var $strict = __stackBase__ + 60;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwargs_addr] = $kwargs;
      HEAP[$ret] = 0;
      HEAP[$dialect] = 0;
      HEAP[$delimiter] = 0;
      HEAP[$doublequote] = 0;
      HEAP[$escapechar] = 0;
      HEAP[$lineterminator] = 0;
      HEAP[$quotechar] = 0;
      HEAP[$quoting] = 0;
      HEAP[$skipinitialspace] = 0;
      HEAP[$strict] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwargs_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str18, _dialect_kws, allocate([ $dialect, 0, 0, 0, $delimiter, 0, 0, 0, $doublequote, 0, 0, 0, $escapechar, 0, 0, 0, $lineterminator, 0, 0, 0, $quotechar, 0, 0, 0, $quoting, 0, 0, 0, $skipinitialspace, 0, 0, 0, $strict, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 110;
      break;
     case 2:
      
      
      if (HEAP[$dialect] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 3:
      
      
      
      
      if (HEAP[HEAP[$dialect] + 4] == _PyBaseString_Type) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      var $13 = HEAP[HEAP[$dialect] + 4];
      var $14 = _PyType_IsSubtype($13, _PyBaseString_Type);
      
      if ($14 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $16 = HEAP[$dialect];
      var $17 = _get_dialect_from_registry($16);
      HEAP[$dialect] = $17;
      
      
      if (HEAP[$dialect] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 110;
      break;
     case 7:
      __label__ = 9;
      break;
     case 8:
      
      
      
      var $23 = HEAP[HEAP[$dialect]] + 1;
      var $24 = HEAP[$dialect];
      HEAP[$24] = $23;
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$dialect] + 4] == _Dialect_Type) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      var $31 = HEAP[HEAP[$dialect] + 4];
      var $32 = _PyType_IsSubtype($31, _Dialect_Type);
      
      if ($32 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 11:
      
      
      if (HEAP[$delimiter] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 12:
      
      
      if (HEAP[$doublequote] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 13:
      
      
      if (HEAP[$escapechar] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 14:
      
      
      if (HEAP[$lineterminator] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 15:
      
      
      if (HEAP[$quotechar] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 16:
      
      
      if (HEAP[$quoting] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      
      
      if (HEAP[$skipinitialspace] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      
      
      if (HEAP[$strict] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $50 = HEAP[$dialect];
      HEAP[$0] = $50;
      __label__ = 110;
      break;
     case 20:
      
      
      var $53 = HEAP[HEAP[$type_addr] + 152];
      var $54 = HEAP[$type_addr];
      var $55 = FUNCTION_TABLE[$53]($54, 0);
      var $56 = $55;
      HEAP[$self] = $56;
      
      
      if (HEAP[$self] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 21:
      
      
      if (HEAP[$dialect] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      var $61 = HEAP[$dialect];
      
      
      var $64 = HEAP[$61] - 1;
      var $65 = $61;
      HEAP[$65] = $64;
      
      
      
      if (HEAP[$61] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[$dialect] + 4] + 24];
      var $74 = HEAP[$dialect];
      FUNCTION_TABLE[$73]($74);
      __label__ = 24;
      break;
     case 24:
      HEAP[$0] = 0;
      __label__ = 110;
      break;
     case 25:
      
      var $76 = HEAP[$self] + 20;
      HEAP[$76] = 0;
      
      
      if (HEAP[$delimiter] != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      var $82 = HEAP[HEAP[$delimiter]] + 1;
      var $83 = HEAP[$delimiter];
      HEAP[$83] = $82;
      __label__ = 27;
      break;
     case 27:
      
      
      if (HEAP[$doublequote] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      var $89 = HEAP[HEAP[$doublequote]] + 1;
      var $90 = HEAP[$doublequote];
      HEAP[$90] = $89;
      __label__ = 29;
      break;
     case 29:
      
      
      if (HEAP[$escapechar] != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      var $96 = HEAP[HEAP[$escapechar]] + 1;
      var $97 = HEAP[$escapechar];
      HEAP[$97] = $96;
      __label__ = 31;
      break;
     case 31:
      
      
      if (HEAP[$lineterminator] != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      var $103 = HEAP[HEAP[$lineterminator]] + 1;
      var $104 = HEAP[$lineterminator];
      HEAP[$104] = $103;
      __label__ = 33;
      break;
     case 33:
      
      
      if (HEAP[$quotechar] != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      var $110 = HEAP[HEAP[$quotechar]] + 1;
      var $111 = HEAP[$quotechar];
      HEAP[$111] = $110;
      __label__ = 35;
      break;
     case 35:
      
      
      if (HEAP[$quoting] != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      var $117 = HEAP[HEAP[$quoting]] + 1;
      var $118 = HEAP[$quoting];
      HEAP[$118] = $117;
      __label__ = 37;
      break;
     case 37:
      
      
      if (HEAP[$skipinitialspace] != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      var $124 = HEAP[HEAP[$skipinitialspace]] + 1;
      var $125 = HEAP[$skipinitialspace];
      HEAP[$125] = $124;
      __label__ = 39;
      break;
     case 39:
      
      
      if (HEAP[$strict] != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      
      var $131 = HEAP[HEAP[$strict]] + 1;
      var $132 = HEAP[$strict];
      HEAP[$132] = $131;
      __label__ = 41;
      break;
     case 41:
      
      
      if (HEAP[$dialect] != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 42:
      
      
      if (HEAP[$delimiter] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      var $137 = HEAP[$dialect];
      var $138 = _PyObject_GetAttrString($137, __str9);
      HEAP[$delimiter] = $138;
      __label__ = 44;
      break;
     case 44:
      
      
      if (HEAP[$doublequote] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      var $141 = HEAP[$dialect];
      var $142 = _PyObject_GetAttrString($141, __str11);
      HEAP[$doublequote] = $142;
      __label__ = 46;
      break;
     case 46:
      
      
      if (HEAP[$escapechar] == 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      var $145 = HEAP[$dialect];
      var $146 = _PyObject_GetAttrString($145, __str13);
      HEAP[$escapechar] = $146;
      __label__ = 48;
      break;
     case 48:
      
      
      if (HEAP[$lineterminator] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      var $149 = HEAP[$dialect];
      var $150 = _PyObject_GetAttrString($149, __str14);
      HEAP[$lineterminator] = $150;
      __label__ = 50;
      break;
     case 50:
      
      
      if (HEAP[$quotechar] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      var $153 = HEAP[$dialect];
      var $154 = _PyObject_GetAttrString($153, __str15);
      HEAP[$quotechar] = $154;
      __label__ = 52;
      break;
     case 52:
      
      
      if (HEAP[$quoting] == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      var $157 = HEAP[$dialect];
      var $158 = _PyObject_GetAttrString($157, __str16);
      HEAP[$quoting] = $158;
      __label__ = 54;
      break;
     case 54:
      
      
      if (HEAP[$skipinitialspace] == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      var $161 = HEAP[$dialect];
      var $162 = _PyObject_GetAttrString($161, __str10);
      HEAP[$skipinitialspace] = $162;
      __label__ = 56;
      break;
     case 56:
      
      
      if (HEAP[$strict] == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      var $165 = HEAP[$dialect];
      var $166 = _PyObject_GetAttrString($165, __str12);
      HEAP[$strict] = $166;
      __label__ = 58;
      break;
     case 58:
      _PyErr_Clear();
      __label__ = 59;
      break;
     case 59:
      var $167 = HEAP[$delimiter];
      
      var $169 = HEAP[$self] + 12;
      var $170 = __set_char(__str9, $169, $167, 44);
      
      if ($170 != 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 60:
      var $172 = HEAP[$doublequote];
      
      var $174 = HEAP[$self] + 8;
      var $175 = __set_bool(__str11, $174, $172, 1);
      
      if ($175 != 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 61:
      var $177 = HEAP[$escapechar];
      
      var $179 = HEAP[$self] + 14;
      var $180 = __set_char(__str13, $179, $177, 0);
      
      if ($180 != 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 62:
      var $182 = HEAP[$lineterminator];
      
      var $184 = HEAP[$self] + 20;
      var $185 = __set_str(__str14, $184, $182, __str19);
      
      if ($185 != 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 63:
      var $187 = HEAP[$quotechar];
      
      var $189 = HEAP[$self] + 13;
      var $190 = __set_char(__str15, $189, $187, 34);
      
      if ($190 != 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 64:
      var $192 = HEAP[$quoting];
      
      var $194 = HEAP[$self] + 24;
      var $195 = __set_int(__str16, $194, $192, 0);
      
      if ($195 != 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 65:
      var $197 = HEAP[$skipinitialspace];
      
      var $199 = HEAP[$self] + 16;
      var $200 = __set_bool(__str10, $199, $197, 0);
      
      if ($200 != 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 66:
      var $202 = HEAP[$strict];
      
      var $204 = HEAP[$self] + 28;
      var $205 = __set_bool(__str12, $204, $202, 0);
      
      if ($205 != 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 67:
      
      
      var $209 = HEAP[HEAP[$self] + 24];
      var $210 = _dialect_check_quoting($209);
      
      if ($210 != 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 68:
      
      
      
      
      if (HEAP[HEAP[$self] + 12] == 0) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      var $216 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($216, __str20);
      __label__ = 79;
      break;
     case 70:
      
      
      if (HEAP[$quotechar] == __Py_NoneStruct) {
        __label__ = 71;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 71:
      
      
      if (HEAP[$quoting] == 0) {
        __label__ = 72;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 72:
      
      var $222 = HEAP[$self] + 24;
      HEAP[$222] = 3;
      __label__ = 73;
      break;
     case 73:
      
      
      
      
      if (HEAP[HEAP[$self] + 24] != 3) {
        __label__ = 74;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 74:
      
      
      
      
      if (HEAP[HEAP[$self] + 13] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      var $231 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($231, __str21);
      __label__ = 79;
      break;
     case 76:
      
      
      
      
      if (HEAP[HEAP[$self] + 20] == 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 77:
      var $236 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($236, __str22);
      __label__ = 79;
      break;
     case 78:
      
      var $238 = HEAP[$self];
      HEAP[$ret] = $238;
      
      
      
      
      var $243 = HEAP[HEAP[$self]] + 1;
      var $244 = HEAP[$self];
      HEAP[$244] = $243;
      __label__ = 79;
      break;
     case 79:
      
      
      if (HEAP[$self] != 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 80:
      
      var $248 = HEAP[$self];
      
      
      var $251 = HEAP[$248] - 1;
      var $252 = $248;
      HEAP[$252] = $251;
      
      
      
      if (HEAP[$248] == 0) {
        __label__ = 81;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 81:
      
      
      
      
      
      var $261 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $263 = HEAP[$self];
      FUNCTION_TABLE[$261]($263);
      __label__ = 82;
      break;
     case 82:
      
      
      if (HEAP[$dialect] != 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 85;
        break;
      }
     case 83:
      var $266 = HEAP[$dialect];
      
      
      var $269 = HEAP[$266] - 1;
      var $270 = $266;
      HEAP[$270] = $269;
      
      
      
      if (HEAP[$266] == 0) {
        __label__ = 84;
        break;
      } else {
        __label__ = 85;
        break;
      }
     case 84:
      
      
      
      
      var $278 = HEAP[HEAP[HEAP[$dialect] + 4] + 24];
      var $279 = HEAP[$dialect];
      FUNCTION_TABLE[$278]($279);
      __label__ = 85;
      break;
     case 85:
      
      
      if (HEAP[$delimiter] != 0) {
        __label__ = 86;
        break;
      } else {
        __label__ = 88;
        break;
      }
     case 86:
      var $282 = HEAP[$delimiter];
      
      
      var $285 = HEAP[$282] - 1;
      var $286 = $282;
      HEAP[$286] = $285;
      
      
      
      if (HEAP[$282] == 0) {
        __label__ = 87;
        break;
      } else {
        __label__ = 88;
        break;
      }
     case 87:
      
      
      
      
      var $294 = HEAP[HEAP[HEAP[$delimiter] + 4] + 24];
      var $295 = HEAP[$delimiter];
      FUNCTION_TABLE[$294]($295);
      __label__ = 88;
      break;
     case 88:
      
      
      if (HEAP[$doublequote] != 0) {
        __label__ = 89;
        break;
      } else {
        __label__ = 91;
        break;
      }
     case 89:
      var $298 = HEAP[$doublequote];
      
      
      var $301 = HEAP[$298] - 1;
      var $302 = $298;
      HEAP[$302] = $301;
      
      
      
      if (HEAP[$298] == 0) {
        __label__ = 90;
        break;
      } else {
        __label__ = 91;
        break;
      }
     case 90:
      
      
      
      
      var $310 = HEAP[HEAP[HEAP[$doublequote] + 4] + 24];
      var $311 = HEAP[$doublequote];
      FUNCTION_TABLE[$310]($311);
      __label__ = 91;
      break;
     case 91:
      
      
      if (HEAP[$escapechar] != 0) {
        __label__ = 92;
        break;
      } else {
        __label__ = 94;
        break;
      }
     case 92:
      var $314 = HEAP[$escapechar];
      
      
      var $317 = HEAP[$314] - 1;
      var $318 = $314;
      HEAP[$318] = $317;
      
      
      
      if (HEAP[$314] == 0) {
        __label__ = 93;
        break;
      } else {
        __label__ = 94;
        break;
      }
     case 93:
      
      
      
      
      var $326 = HEAP[HEAP[HEAP[$escapechar] + 4] + 24];
      var $327 = HEAP[$escapechar];
      FUNCTION_TABLE[$326]($327);
      __label__ = 94;
      break;
     case 94:
      
      
      if (HEAP[$lineterminator] != 0) {
        __label__ = 95;
        break;
      } else {
        __label__ = 97;
        break;
      }
     case 95:
      var $330 = HEAP[$lineterminator];
      
      
      var $333 = HEAP[$330] - 1;
      var $334 = $330;
      HEAP[$334] = $333;
      
      
      
      if (HEAP[$330] == 0) {
        __label__ = 96;
        break;
      } else {
        __label__ = 97;
        break;
      }
     case 96:
      
      
      
      
      var $342 = HEAP[HEAP[HEAP[$lineterminator] + 4] + 24];
      var $343 = HEAP[$lineterminator];
      FUNCTION_TABLE[$342]($343);
      __label__ = 97;
      break;
     case 97:
      
      
      if (HEAP[$quotechar] != 0) {
        __label__ = 98;
        break;
      } else {
        __label__ = 100;
        break;
      }
     case 98:
      var $346 = HEAP[$quotechar];
      
      
      var $349 = HEAP[$346] - 1;
      var $350 = $346;
      HEAP[$350] = $349;
      
      
      
      if (HEAP[$346] == 0) {
        __label__ = 99;
        break;
      } else {
        __label__ = 100;
        break;
      }
     case 99:
      
      
      
      
      var $358 = HEAP[HEAP[HEAP[$quotechar] + 4] + 24];
      var $359 = HEAP[$quotechar];
      FUNCTION_TABLE[$358]($359);
      __label__ = 100;
      break;
     case 100:
      
      
      if (HEAP[$quoting] != 0) {
        __label__ = 101;
        break;
      } else {
        __label__ = 103;
        break;
      }
     case 101:
      var $362 = HEAP[$quoting];
      
      
      var $365 = HEAP[$362] - 1;
      var $366 = $362;
      HEAP[$366] = $365;
      
      
      
      if (HEAP[$362] == 0) {
        __label__ = 102;
        break;
      } else {
        __label__ = 103;
        break;
      }
     case 102:
      
      
      
      
      var $374 = HEAP[HEAP[HEAP[$quoting] + 4] + 24];
      var $375 = HEAP[$quoting];
      FUNCTION_TABLE[$374]($375);
      __label__ = 103;
      break;
     case 103:
      
      
      if (HEAP[$skipinitialspace] != 0) {
        __label__ = 104;
        break;
      } else {
        __label__ = 106;
        break;
      }
     case 104:
      var $378 = HEAP[$skipinitialspace];
      
      
      var $381 = HEAP[$378] - 1;
      var $382 = $378;
      HEAP[$382] = $381;
      
      
      
      if (HEAP[$378] == 0) {
        __label__ = 105;
        break;
      } else {
        __label__ = 106;
        break;
      }
     case 105:
      
      
      
      
      var $390 = HEAP[HEAP[HEAP[$skipinitialspace] + 4] + 24];
      var $391 = HEAP[$skipinitialspace];
      FUNCTION_TABLE[$390]($391);
      __label__ = 106;
      break;
     case 106:
      
      
      if (HEAP[$strict] != 0) {
        __label__ = 107;
        break;
      } else {
        __label__ = 109;
        break;
      }
     case 107:
      var $394 = HEAP[$strict];
      
      
      var $397 = HEAP[$394] - 1;
      var $398 = $394;
      HEAP[$398] = $397;
      
      
      
      if (HEAP[$394] == 0) {
        __label__ = 108;
        break;
      } else {
        __label__ = 109;
        break;
      }
     case 108:
      
      
      
      
      var $406 = HEAP[HEAP[HEAP[$strict] + 4] + 24];
      var $407 = HEAP[$strict];
      FUNCTION_TABLE[$406]($407);
      __label__ = 109;
      break;
     case 109:
      var $408 = HEAP[$ret];
      HEAP[$0] = $408;
      __label__ = 110;
      break;
     case 110:
      var $409 = HEAP[$0];
      HEAP[$retval] = $409;
      __label__ = 111;
      break;
     case 111:
      var $retval109 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval109;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __call_dialect($dialect_inst, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dialect_inst_addr = __stackBase__;
      var $kwargs_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $iftmp_115 = __stackBase__ + 16;
      var $ctor_args = __stackBase__ + 20;
      var $dialect = __stackBase__ + 24;
      
      HEAP[$dialect_inst_addr] = $dialect_inst;
      HEAP[$kwargs_addr] = $kwargs;
      
      
      if (HEAP[$dialect_inst_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$iftmp_115] = __str24;
      __label__ = 3;
      break;
     case 2:
      HEAP[$iftmp_115] = __str25;
      __label__ = 3;
      break;
     case 3:
      var $3 = HEAP[$iftmp_115];
      var $4 = HEAP[$dialect_inst_addr];
      var $5 = _Py_BuildValue($3, allocate([ $4, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ctor_args] = $5;
      
      
      if (HEAP[$ctor_args] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 5:
      var $8 = HEAP[$ctor_args];
      var $9 = HEAP[$kwargs_addr];
      var $10 = _PyObject_Call(_Dialect_Type, $8, $9);
      HEAP[$dialect] = $10;
      
      
      
      var $14 = HEAP[HEAP[$ctor_args]] - 1;
      
      var $16 = HEAP[$ctor_args];
      HEAP[$16] = $14;
      
      
      
      
      if (HEAP[HEAP[$ctor_args]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $25 = HEAP[HEAP[HEAP[$ctor_args] + 4] + 24];
      var $26 = HEAP[$ctor_args];
      FUNCTION_TABLE[$25]($26);
      __label__ = 7;
      break;
     case 7:
      var $27 = HEAP[$dialect];
      HEAP[$0] = $27;
      __label__ = 8;
      break;
     case 8:
      var $28 = HEAP[$0];
      HEAP[$retval] = $28;
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
  function _parse_save_field($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $field = __stackBase__ + 12;
      var $tmp = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $6 = HEAP[HEAP[$self_addr] + 24];
      var $7 = _PyString_FromStringAndSize($6, $3);
      HEAP[$field] = $7;
      
      
      if (HEAP[$field] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 2:
      
      var $11 = HEAP[$self_addr] + 32;
      HEAP[$11] = 0;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 36] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 3:
      
      var $17 = HEAP[$self_addr] + 36;
      HEAP[$17] = 0;
      var $18 = HEAP[$field];
      var $19 = _PyNumber_Float($18);
      HEAP[$tmp] = $19;
      
      
      if (HEAP[$tmp] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $25 = HEAP[HEAP[$field]] - 1;
      
      var $27 = HEAP[$field];
      HEAP[$27] = $25;
      
      
      
      
      if (HEAP[HEAP[$field]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[$field] + 4] + 24];
      var $37 = HEAP[$field];
      FUNCTION_TABLE[$36]($37);
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 7:
      
      
      
      var $41 = HEAP[HEAP[$field]] - 1;
      
      var $43 = HEAP[$field];
      HEAP[$43] = $41;
      
      
      
      
      if (HEAP[HEAP[$field]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $52 = HEAP[HEAP[HEAP[$field] + 4] + 24];
      var $53 = HEAP[$field];
      FUNCTION_TABLE[$52]($53);
      __label__ = 9;
      break;
     case 9:
      var $54 = HEAP[$tmp];
      HEAP[$field] = $54;
      __label__ = 10;
      break;
     case 10:
      
      
      var $57 = HEAP[HEAP[$self_addr] + 16];
      var $58 = HEAP[$field];
      var $59 = _PyList_Append($57, $58);
      
      
      
      var $63 = HEAP[HEAP[$field]] - 1;
      
      var $65 = HEAP[$field];
      HEAP[$65] = $63;
      
      
      
      
      if (HEAP[HEAP[$field]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $74 = HEAP[HEAP[HEAP[$field] + 4] + 24];
      var $75 = HEAP[$field];
      FUNCTION_TABLE[$74]($75);
      __label__ = 12;
      break;
     case 12:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 13:
      var $76 = HEAP[$0];
      HEAP[$retval] = $76;
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
  function _parse_grow_buff($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      var $6 = HEAP[$self_addr] + 28;
      HEAP[$6] = 4096;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      var $13 = HEAP[HEAP[$self_addr] + 24];
      _PyMem_Free($13);
      __label__ = 3;
      break;
     case 3:
      
      
      var $16 = HEAP[HEAP[$self_addr] + 28];
      var $17 = _PyMem_Malloc($16);
      
      var $19 = HEAP[$self_addr] + 24;
      HEAP[$19] = $17;
      __label__ = 7;
      break;
     case 4:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] > 1073741823) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $24 = _PyErr_NoMemory();
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 6:
      
      
      
      var $28 = HEAP[HEAP[$self_addr] + 28] * 2;
      
      var $30 = HEAP[$self_addr] + 28;
      HEAP[$30] = $28;
      
      
      var $33 = HEAP[HEAP[$self_addr] + 28];
      
      
      var $36 = HEAP[HEAP[$self_addr] + 24];
      var $37 = _PyMem_Realloc($36, $33);
      
      var $39 = HEAP[$self_addr] + 24;
      HEAP[$39] = $37;
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $44 = _PyErr_NoMemory();
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 9:
      HEAP[$0] = 1;
      __label__ = 10;
      break;
     case 10:
      var $45 = HEAP[$0];
      HEAP[$retval] = $45;
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
  function _parse_add_char($self, $c) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 13;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 13);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $c_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 5;
      var $0 = __stackBase__ + 9;
      
      HEAP[$self_addr] = $self;
      HEAP[$c_addr] = $c;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] >= HEAP[_field_limit]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $6 = HEAP[_field_limit];
      var $7 = HEAP[_error_obj];
      var $8 = _PyErr_Format($7, __str26, allocate([ $6, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 2:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] == HEAP[HEAP[$self_addr] + 28]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $16 = HEAP[$self_addr];
      var $17 = _parse_grow_buff($16);
      
      if ($17 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 5:
      
      
      
      
      
      var $24 = HEAP[HEAP[$self_addr] + 32];
      var $25 = HEAP[HEAP[$self_addr] + 24] + $24;
      var $26 = HEAP[$c_addr];
      HEAP[$25] = $26;
      var $27 = $24 + 1;
      
      var $29 = HEAP[$self_addr] + 32;
      HEAP[$29] = $27;
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 6:
      var $30 = HEAP[$0];
      HEAP[$retval] = $30;
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
  function _parse_process_char($self, $c) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 29;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 29);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $c_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 5;
      var $iftmp_122 = __stackBase__ + 9;
      var $iftmp_121 = __stackBase__ + 13;
      var $iftmp_120 = __stackBase__ + 17;
      var $0 = __stackBase__ + 21;
      var $dialect = __stackBase__ + 25;
      
      HEAP[$self_addr] = $self;
      HEAP[$c_addr] = $c;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$dialect] = $3;
      
      
      var $6 = HEAP[HEAP[$self_addr] + 20];
      if ($6 == 0) {
        __label__ = 1;
        break;
      } else if ($6 == 1) {
        __label__ = 6;
        break;
      } else if ($6 == 2) {
        __label__ = 33;
        break;
      } else if ($6 == 3) {
        __label__ = 38;
        break;
      } else if ($6 == 4) {
        __label__ = 56;
        break;
      } else if ($6 == 5) {
        __label__ = 68;
        break;
      } else if ($6 == 6) {
        __label__ = 73;
        break;
      } else if ($6 == 7) {
        __label__ = 97;
        break;
      } else {
        __label__ = 102;
        break;
      }
     case 1:
      
      
      if (HEAP[$c_addr] == 0) {
        __label__ = 102;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$c_addr] == 10) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$c_addr] == 13) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $14 = HEAP[$self_addr] + 20;
      HEAP[$14] = 7;
      __label__ = 102;
      break;
     case 5:
      
      var $16 = HEAP[$self_addr] + 20;
      HEAP[$16] = 1;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$c_addr] == 10) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if (HEAP[$c_addr] == 13) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      if (HEAP[$c_addr] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 9:
      var $23 = HEAP[$self_addr];
      var $24 = _parse_save_field($23);
      
      if ($24 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = -1;
      __label__ = 103;
      break;
     case 11:
      
      
      if (HEAP[$c_addr] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$iftmp_120] = 0;
      __label__ = 14;
      break;
     case 13:
      HEAP[$iftmp_120] = 7;
      __label__ = 14;
      break;
     case 14:
      
      var $29 = HEAP[$self_addr] + 20;
      var $30 = HEAP[$iftmp_120];
      HEAP[$29] = $30;
      __label__ = 32;
      break;
     case 15:
      
      
      
      
      
      if (HEAP[HEAP[$dialect] + 13] != HEAP[$c_addr]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      if (HEAP[HEAP[$dialect] + 24] == 3) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      var $41 = HEAP[$self_addr] + 20;
      HEAP[$41] = 4;
      __label__ = 32;
      break;
     case 18:
      
      
      
      
      
      if (HEAP[HEAP[$dialect] + 14] == HEAP[$c_addr]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      var $48 = HEAP[$self_addr] + 20;
      HEAP[$48] = 2;
      __label__ = 32;
      break;
     case 20:
      
      
      if (HEAP[$c_addr] != 32) {
        __label__ = 23;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      if (HEAP[HEAP[$dialect] + 16] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      __label__ = 32;
      break;
     case 23:
      
      
      
      
      
      if (HEAP[HEAP[$dialect] + 12] == HEAP[$c_addr]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 24:
      var $60 = HEAP[$self_addr];
      var $61 = _parse_save_field($60);
      
      if ($61 < 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      HEAP[$0] = -1;
      __label__ = 103;
      break;
     case 26:
      __label__ = 32;
      break;
     case 27:
      
      
      
      
      if (HEAP[HEAP[$dialect] + 24] == 2) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      var $68 = HEAP[$self_addr] + 36;
      HEAP[$68] = 1;
      __label__ = 29;
      break;
     case 29:
      
      
      var $71 = HEAP[$self_addr];
      var $72 = HEAP[$c_addr] & 255;
      var $73 = _parse_add_char($71, $72);
      
      if ($73 < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      HEAP[$0] = -1;
      __label__ = 103;
      break;
     case 31:
      
      var $76 = HEAP[$self_addr] + 20;
      HEAP[$76] = 3;
      __label__ = 32;
      break;
     case 32:
      __label__ = 102;
      break;
     case 33:
      
      
      if (HEAP[$c_addr] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      HEAP[$c_addr] = 10;
      __label__ = 35;
      break;
     case 35:
      
      
      var $81 = HEAP[$self_addr];
      var $82 = HEAP[$c_addr] & 255;
      var $83 = _parse_add_char($81, $82);
      
      if ($83 < 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      HEAP[$0] = -1;
      __label__ = 103;
      break;
     case 37:
      
      var $86 = HEAP[$self_addr] + 20;
      HEAP[$86] = 3;
      __label__ = 102;
      break;
     case 38:
      
      
      if (HEAP[$c_addr] == 10) {
        __label__ = 41;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      
      if (HEAP[$c_addr] == 13) {
        __label__ = 41;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      
      
      if (HEAP[$c_addr] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 41:
      var $93 = HEAP[$self_addr];
      var $94 = _parse_save_field($93);
      
      if ($94 < 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      HEAP[$0] = -1;
      __label__ = 103;
      break;
     case 43:
      
      
      if (HEAP[$c_addr] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      HEAP[$iftmp_121] = 0;
      __label__ = 46;
      break;
     case 45:
      HEAP[$iftmp_121] = 7;
      __label__ = 46;
      break;
     case 46:
      
      var $99 = HEAP[$self_addr] + 20;
      var $100 = HEAP[$iftmp_121];
      HEAP[$99] = $100;
      __label__ = 55;
      break;
     case 47:
      
      
      
      
      
      if (HEAP[HEAP[$dialect] + 14] == HEAP[$c_addr]) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      var $107 = HEAP[$self_addr] + 20;
      HEAP[$107] = 2;
      __label__ = 55;
      break;
     case 49:
      
      
      
      
      
      if (HEAP[HEAP[$dialect] + 12] == HEAP[$c_addr]) {
        __label__ = 50;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 50:
      var $113 = HEAP[$self_addr];
      var $114 = _parse_save_field($113);
      
      if ($114 < 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      HEAP[$0] = -1;
      __label__ = 103;
      break;
     case 52:
      
      var $117 = HEAP[$self_addr] + 20;
      HEAP[$117] = 1;
      __label__ = 55;
      break;
     case 53:
      
      
      var $120 = HEAP[$self_addr];
      var $121 = HEAP[$c_addr] & 255;
      var $122 = _parse_add_char($120, $121);
      
      if ($122 < 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      HEAP[$0] = -1;
      __label__ = 103;
      break;
     case 55:
      __label__ = 102;
      break;
     case 56:
      
      
      if (HEAP[$c_addr] != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 57:
      
      
      
      
      
      if (HEAP[HEAP[$dialect] + 14] == HEAP[$c_addr]) {
        __label__ = 58;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 58:
      
      var $132 = HEAP[$self_addr] + 20;
      HEAP[$132] = 5;
      __label__ = 67;
      break;
     case 59:
      
      
      
      
      
      if (HEAP[HEAP[$dialect] + 13] != HEAP[$c_addr]) {
        __label__ = 65;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 60:
      
      
      
      
      if (HEAP[HEAP[$dialect] + 24] == 3) {
        __label__ = 65;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 61:
      
      
      
      
      if (HEAP[HEAP[$dialect] + 8] != 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 62:
      
      var $147 = HEAP[$self_addr] + 20;
      HEAP[$147] = 6;
      __label__ = 64;
      break;
     case 63:
      
      var $149 = HEAP[$self_addr] + 20;
      HEAP[$149] = 3;
      __label__ = 64;
      break;
     case 64:
      __label__ = 67;
      break;
     case 65:
      
      
      var $152 = HEAP[$self_addr];
      var $153 = HEAP[$c_addr] & 255;
      var $154 = _parse_add_char($152, $153);
      
      if ($154 < 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 66:
      HEAP[$0] = -1;
      __label__ = 103;
      break;
     case 67:
      __label__ = 102;
      break;
     case 68:
      
      
      if (HEAP[$c_addr] == 0) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      HEAP[$c_addr] = 10;
      __label__ = 70;
      break;
     case 70:
      
      
      var $160 = HEAP[$self_addr];
      var $161 = HEAP[$c_addr] & 255;
      var $162 = _parse_add_char($160, $161);
      
      if ($162 < 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 71:
      HEAP[$0] = -1;
      __label__ = 103;
      break;
     case 72:
      
      var $165 = HEAP[$self_addr] + 20;
      HEAP[$165] = 4;
      __label__ = 102;
      break;
     case 73:
      
      
      
      
      if (HEAP[HEAP[$dialect] + 24] == 3) {
        __label__ = 78;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 74:
      
      
      
      
      
      if (HEAP[HEAP[$dialect] + 13] != HEAP[$c_addr]) {
        __label__ = 78;
        break;
      } else {
        __label__ = 75;
        break;
      }
     case 75:
      
      
      var $177 = HEAP[$self_addr];
      var $178 = HEAP[$c_addr] & 255;
      var $179 = _parse_add_char($177, $178);
      
      if ($179 < 0) {
        __label__ = 76;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 76:
      HEAP[$0] = -1;
      __label__ = 103;
      break;
     case 77:
      
      var $182 = HEAP[$self_addr] + 20;
      HEAP[$182] = 4;
      __label__ = 96;
      break;
     case 78:
      
      
      
      
      
      if (HEAP[HEAP[$dialect] + 12] == HEAP[$c_addr]) {
        __label__ = 79;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 79:
      var $188 = HEAP[$self_addr];
      var $189 = _parse_save_field($188);
      
      if ($189 < 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 80:
      HEAP[$0] = -1;
      __label__ = 103;
      break;
     case 81:
      
      var $192 = HEAP[$self_addr] + 20;
      HEAP[$192] = 1;
      __label__ = 96;
      break;
     case 82:
      
      
      if (HEAP[$c_addr] == 10) {
        __label__ = 85;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 83:
      
      
      if (HEAP[$c_addr] == 13) {
        __label__ = 85;
        break;
      } else {
        __label__ = 84;
        break;
      }
     case 84:
      
      
      if (HEAP[$c_addr] == 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 91;
        break;
      }
     case 85:
      var $199 = HEAP[$self_addr];
      var $200 = _parse_save_field($199);
      
      if ($200 < 0) {
        __label__ = 86;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 86:
      HEAP[$0] = -1;
      __label__ = 103;
      break;
     case 87:
      
      
      if (HEAP[$c_addr] == 0) {
        __label__ = 88;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 88:
      HEAP[$iftmp_122] = 0;
      __label__ = 90;
      break;
     case 89:
      HEAP[$iftmp_122] = 7;
      __label__ = 90;
      break;
     case 90:
      
      var $205 = HEAP[$self_addr] + 20;
      var $206 = HEAP[$iftmp_122];
      HEAP[$205] = $206;
      __label__ = 96;
      break;
     case 91:
      
      
      
      
      if (HEAP[HEAP[$dialect] + 28] == 0) {
        __label__ = 92;
        break;
      } else {
        __label__ = 95;
        break;
      }
     case 92:
      
      
      var $213 = HEAP[$self_addr];
      var $214 = HEAP[$c_addr] & 255;
      var $215 = _parse_add_char($213, $214);
      
      if ($215 < 0) {
        __label__ = 93;
        break;
      } else {
        __label__ = 94;
        break;
      }
     case 93:
      HEAP[$0] = -1;
      __label__ = 103;
      break;
     case 94:
      
      var $218 = HEAP[$self_addr] + 20;
      HEAP[$218] = 3;
      __label__ = 96;
      break;
     case 95:
      
      
      
      var $222 = HEAP[HEAP[$dialect] + 13];
      
      
      
      var $226 = HEAP[HEAP[$dialect] + 12];
      var $227 = HEAP[_error_obj];
      var $228 = _PyErr_Format($227, __str27, allocate([ $226, 0, 0, 0, $222, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 103;
      break;
     case 96:
      __label__ = 102;
      break;
     case 97:
      
      
      if (HEAP[$c_addr] != 10) {
        __label__ = 98;
        break;
      } else {
        __label__ = 102;
        break;
      }
     case 98:
      
      
      if (HEAP[$c_addr] != 13) {
        __label__ = 99;
        break;
      } else {
        __label__ = 102;
        break;
      }
     case 99:
      
      
      if (HEAP[$c_addr] == 0) {
        __label__ = 100;
        break;
      } else {
        __label__ = 101;
        break;
      }
     case 100:
      
      var $236 = HEAP[$self_addr] + 20;
      HEAP[$236] = 0;
      __label__ = 102;
      break;
     case 101:
      var $237 = HEAP[_error_obj];
      var $238 = _PyErr_Format($237, __str28, allocate(1, "i32", ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 103;
      break;
     case 102:
      HEAP[$0] = 0;
      __label__ = 103;
      break;
     case 103:
      var $239 = HEAP[$0];
      HEAP[$retval] = $239;
      __label__ = 104;
      break;
     case 104:
      var $retval103 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval103;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parse_reset($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 16];
      
      
      var $10 = HEAP[$7] - 1;
      var $11 = $7;
      HEAP[$11] = $10;
      
      
      
      if (HEAP[$7] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $21 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 16] + 4] + 24];
      
      
      var $24 = HEAP[HEAP[$self_addr] + 16];
      FUNCTION_TABLE[$21]($24);
      __label__ = 3;
      break;
     case 3:
      var $25 = _PyList_New(0);
      
      var $27 = HEAP[$self_addr] + 16;
      HEAP[$27] = $25;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 5:
      
      var $33 = HEAP[$self_addr] + 32;
      HEAP[$33] = 0;
      
      var $35 = HEAP[$self_addr] + 20;
      HEAP[$35] = 0;
      
      var $37 = HEAP[$self_addr] + 36;
      HEAP[$37] = 0;
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 6:
      var $38 = HEAP[$0];
      HEAP[$retval] = $38;
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
  function _Reader_iternext($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 29;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 29);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $lineobj = __stackBase__ + 12;
      var $fields = __stackBase__ + 16;
      var $line = __stackBase__ + 20;
      var $c = __stackBase__ + 24;
      var $linelen = __stackBase__ + 25;
      
      HEAP[$self_addr] = $self;
      HEAP[$fields] = 0;
      var $1 = HEAP[$self_addr];
      var $2 = _parse_reset($1);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 28;
      break;
     case 2:
      
      
      var $6 = HEAP[HEAP[$self_addr] + 8];
      var $7 = _PyIter_Next($6);
      HEAP[$lineobj] = $7;
      
      
      if (HEAP[$lineobj] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      var $10 = _PyErr_Occurred();
      
      if ($10 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $16 = HEAP[_error_obj];
      var $17 = _PyErr_Format($16, __str29, allocate(1, "i32", ALLOC_STACK));
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 28;
      break;
     case 7:
      
      
      
      var $21 = HEAP[HEAP[$self_addr] + 40] + 1;
      
      var $23 = HEAP[$self_addr] + 40;
      HEAP[$23] = $21;
      var $24 = HEAP[$lineobj];
      var $25 = _PyString_AsString($24);
      HEAP[$line] = $25;
      var $26 = HEAP[$lineobj];
      var $27 = _PyString_Size($26);
      HEAP[$linelen] = $27;
      
      
      if (HEAP[$line] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      if (HEAP[$linelen] < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      var $35 = HEAP[HEAP[$lineobj]] - 1;
      
      var $37 = HEAP[$lineobj];
      HEAP[$37] = $35;
      
      
      
      
      if (HEAP[HEAP[$lineobj]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$lineobj] + 4] + 24];
      var $47 = HEAP[$lineobj];
      FUNCTION_TABLE[$46]($47);
      __label__ = 11;
      break;
     case 11:
      HEAP[$0] = 0;
      __label__ = 28;
      break;
     case 12:
      __label__ = 21;
      break;
     case 13:
      
      var $49 = HEAP[HEAP[$line]];
      HEAP[$c] = $49;
      
      var $51 = HEAP[$line] + 1;
      HEAP[$line] = $51;
      
      
      if (HEAP[$c] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      
      
      var $57 = HEAP[HEAP[$lineobj]] - 1;
      
      var $59 = HEAP[$lineobj];
      HEAP[$59] = $57;
      
      
      
      
      if (HEAP[HEAP[$lineobj]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $68 = HEAP[HEAP[HEAP[$lineobj] + 4] + 24];
      var $69 = HEAP[$lineobj];
      FUNCTION_TABLE[$68]($69);
      __label__ = 16;
      break;
     case 16:
      var $70 = HEAP[_error_obj];
      var $71 = _PyErr_Format($70, __str30, allocate(1, "i32", ALLOC_STACK));
      __label__ = 27;
      break;
     case 17:
      
      
      var $74 = HEAP[$self_addr];
      var $75 = HEAP[$c] & 255;
      var $76 = _parse_process_char($74, $75);
      
      if ($76 < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      
      
      
      var $81 = HEAP[HEAP[$lineobj]] - 1;
      
      var $83 = HEAP[$lineobj];
      HEAP[$83] = $81;
      
      
      
      
      if (HEAP[HEAP[$lineobj]] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $92 = HEAP[HEAP[HEAP[$lineobj] + 4] + 24];
      var $93 = HEAP[$lineobj];
      FUNCTION_TABLE[$92]($93);
      __label__ = 20;
      break;
     case 20:
      __label__ = 27;
      break;
     case 21:
      
      var $95 = HEAP[$linelen] - 1;
      HEAP[$linelen] = $95;
      
      var $97 = HEAP[$linelen] != -1;
      if ($97) {
        __label__ = 13;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      var $101 = HEAP[HEAP[$lineobj]] - 1;
      
      var $103 = HEAP[$lineobj];
      HEAP[$103] = $101;
      
      
      
      
      if (HEAP[HEAP[$lineobj]] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $112 = HEAP[HEAP[HEAP[$lineobj] + 4] + 24];
      var $113 = HEAP[$lineobj];
      FUNCTION_TABLE[$112]($113);
      __label__ = 24;
      break;
     case 24:
      var $114 = HEAP[$self_addr];
      var $115 = _parse_process_char($114, 0);
      
      if ($115 < 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      var $123 = HEAP[HEAP[$self_addr] + 16];
      HEAP[$fields] = $123;
      
      var $125 = HEAP[$self_addr] + 16;
      HEAP[$125] = 0;
      __label__ = 27;
      break;
     case 27:
      var $126 = HEAP[$fields];
      HEAP[$0] = $126;
      __label__ = 28;
      break;
     case 28:
      var $127 = HEAP[$0];
      HEAP[$retval] = $127;
      __label__ = 29;
      break;
     case 29:
      var $retval27 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Reader_dealloc($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      
      HEAP[$self_addr] = $self;
      
      var $1 = HEAP[$self_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[HEAP[$self_addr] + 12];
      
      
      var $12 = HEAP[$9] - 1;
      var $13 = $9;
      HEAP[$13] = $12;
      
      
      
      if (HEAP[$9] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 12] + 4] + 24];
      
      
      
      var $28 = HEAP[HEAP[$self_addr] + 12];
      FUNCTION_TABLE[$24]($28);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $35 = HEAP[HEAP[$self_addr] + 8];
      
      
      var $38 = HEAP[$35] - 1;
      var $39 = $35;
      HEAP[$39] = $38;
      
      
      
      if (HEAP[$35] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 8] + 4] + 24];
      
      
      var $52 = HEAP[HEAP[$self_addr] + 8];
      FUNCTION_TABLE[$49]($52);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $59 = HEAP[HEAP[$self_addr] + 16];
      
      
      var $62 = HEAP[$59] - 1;
      var $63 = $59;
      HEAP[$63] = $62;
      
      
      
      if (HEAP[$59] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 16] + 4] + 24];
      
      
      var $76 = HEAP[HEAP[$self_addr] + 16];
      FUNCTION_TABLE[$73]($76);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      var $83 = HEAP[HEAP[$self_addr] + 24];
      _PyMem_Free($83);
      __label__ = 11;
      break;
     case 11:
      
      var $85 = HEAP[$self_addr];
      _PyObject_GC_Del($85);
      __label__ = 12;
      break;
     case 12:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Reader_traverse($self, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      var $vret8 = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[HEAP[$self_addr] + 12];
      var $9 = HEAP[$visit_addr];
      var $10 = HEAP[$arg_addr];
      var $11 = FUNCTION_TABLE[$9]($8, $10);
      HEAP[$vret] = $11;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $14 = HEAP[$vret];
      HEAP[$0] = $14;
      __label__ = 10;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $21 = HEAP[HEAP[$self_addr] + 8];
      var $22 = HEAP[$visit_addr];
      var $23 = HEAP[$arg_addr];
      var $24 = FUNCTION_TABLE[$22]($21, $23);
      HEAP[$vret4] = $24;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $27 = HEAP[$vret4];
      HEAP[$0] = $27;
      __label__ = 10;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $34 = HEAP[HEAP[$self_addr] + 16];
      var $35 = HEAP[$visit_addr];
      var $36 = HEAP[$arg_addr];
      var $37 = FUNCTION_TABLE[$35]($34, $36);
      HEAP[$vret8] = $37;
      
      
      if (HEAP[$vret8] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $40 = HEAP[$vret8];
      HEAP[$0] = $40;
      __label__ = 10;
      break;
     case 9:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 10:
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
      __label__ = 11;
      break;
     case 11:
      var $retval12 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Reader_clear($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $_py_tmp = __stackBase__ + 12;
      var $_py_tmp4 = __stackBase__ + 16;
      var $_py_tmp8 = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$_py_tmp] = $8;
      
      var $10 = HEAP[$self_addr] + 12;
      HEAP[$10] = 0;
      
      
      
      var $14 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $16 = HEAP[$_py_tmp];
      HEAP[$16] = $14;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $25 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $26 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$25]($26);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $33 = HEAP[HEAP[$self_addr] + 8];
      HEAP[$_py_tmp4] = $33;
      
      var $35 = HEAP[$self_addr] + 8;
      HEAP[$35] = 0;
      
      
      
      var $39 = HEAP[HEAP[$_py_tmp4]] - 1;
      
      var $41 = HEAP[$_py_tmp4];
      HEAP[$41] = $39;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp4]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $50 = HEAP[HEAP[HEAP[$_py_tmp4] + 4] + 24];
      var $51 = HEAP[$_py_tmp4];
      FUNCTION_TABLE[$50]($51);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $58 = HEAP[HEAP[$self_addr] + 16];
      HEAP[$_py_tmp8] = $58;
      
      var $60 = HEAP[$self_addr] + 16;
      HEAP[$60] = 0;
      
      
      
      var $64 = HEAP[HEAP[$_py_tmp8]] - 1;
      
      var $66 = HEAP[$_py_tmp8];
      HEAP[$66] = $64;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp8]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $75 = HEAP[HEAP[HEAP[$_py_tmp8] + 4] + 24];
      var $76 = HEAP[$_py_tmp8];
      FUNCTION_TABLE[$75]($76);
      __label__ = 9;
      break;
     case 9:
      HEAP[$0] = 0;
      var $77 = HEAP[$0];
      HEAP[$retval] = $77;
      __label__ = 10;
      break;
     case 10:
      var $retval11 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _csv_reader($module, $args, $keyword_args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $keyword_args_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $iterator = __stackBase__ + 20;
      var $dialect = __stackBase__ + 24;
      var $self = __stackBase__ + 28;
      
      HEAP[__stackBase__] = $module;
      HEAP[$args_addr] = $args;
      HEAP[$keyword_args_addr] = $keyword_args;
      HEAP[$dialect] = 0;
      var $1 = __PyObject_GC_New(_Reader_Type);
      
      HEAP[$self] = $1;
      
      
      if (HEAP[$self] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 2:
      
      var $6 = HEAP[$self] + 12;
      HEAP[$6] = 0;
      
      var $8 = HEAP[$self] + 16;
      HEAP[$8] = 0;
      
      var $10 = HEAP[$self] + 8;
      HEAP[$10] = 0;
      
      var $12 = HEAP[$self] + 24;
      HEAP[$12] = 0;
      
      var $14 = HEAP[$self] + 28;
      HEAP[$14] = 0;
      
      var $16 = HEAP[$self] + 40;
      HEAP[$16] = 0;
      var $17 = HEAP[$self];
      var $18 = _parse_reset($17);
      
      if ($18 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      var $21 = HEAP[$self];
      
      
      var $24 = HEAP[$21] - 1;
      var $25 = $21;
      HEAP[$25] = $24;
      
      
      
      if (HEAP[$21] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      var $34 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $36 = HEAP[$self];
      FUNCTION_TABLE[$34]($36);
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 6:
      var $37 = HEAP[$args_addr];
      var $38 = _PyArg_UnpackTuple($37, __str33, 1, 2, allocate([ $iterator, 0, 0, 0, $dialect, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($38 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      var $41 = HEAP[$self];
      
      
      var $44 = HEAP[$41] - 1;
      var $45 = $41;
      HEAP[$45] = $44;
      
      
      
      if (HEAP[$41] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $56 = HEAP[$self];
      FUNCTION_TABLE[$54]($56);
      __label__ = 9;
      break;
     case 9:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 10:
      var $57 = HEAP[$iterator];
      var $58 = _PyObject_GetIter($57);
      
      var $60 = HEAP[$self] + 8;
      HEAP[$60] = $58;
      
      
      
      
      if (HEAP[HEAP[$self] + 8] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      var $65 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($65, __str34);
      
      var $67 = HEAP[$self];
      
      
      var $70 = HEAP[$67] - 1;
      var $71 = $67;
      HEAP[$71] = $70;
      
      
      
      if (HEAP[$67] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      var $80 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $82 = HEAP[$self];
      FUNCTION_TABLE[$80]($82);
      __label__ = 13;
      break;
     case 13:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 14:
      var $83 = HEAP[$dialect];
      var $84 = HEAP[$keyword_args_addr];
      var $85 = __call_dialect($83, $84);
      var $86 = $85;
      
      var $88 = HEAP[$self] + 12;
      HEAP[$88] = $86;
      
      
      
      
      if (HEAP[HEAP[$self] + 12] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      
      var $94 = HEAP[$self];
      
      
      var $97 = HEAP[$94] - 1;
      var $98 = $94;
      HEAP[$98] = $97;
      
      
      
      if (HEAP[$94] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      var $107 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $109 = HEAP[$self];
      FUNCTION_TABLE[$107]($109);
      __label__ = 17;
      break;
     case 17:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 18:
      
      var $111 = HEAP[$self];
      _PyObject_GC_Track($111);
      
      var $113 = HEAP[$self];
      HEAP[$0] = $113;
      __label__ = 19;
      break;
     case 19:
      var $114 = HEAP[$0];
      HEAP[$retval] = $114;
      __label__ = 20;
      break;
     case 20:
      var $retval19 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _join_reset($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      
      HEAP[$self_addr] = $self;
      
      var $1 = HEAP[$self_addr] + 24;
      HEAP[$1] = 0;
      
      var $3 = HEAP[$self_addr] + 28;
      HEAP[$3] = 0;
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _join_append_data($self, $field, $quote_empty, $quoted, $copy_phase) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 49;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 49);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $field_addr = __stackBase__ + 4;
      var $quote_empty_addr = __stackBase__ + 8;
      var $quoted_addr = __stackBase__ + 12;
      var $copy_phase_addr = __stackBase__ + 16;
      var $retval = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $dialect = __stackBase__ + 28;
      var $i = __stackBase__ + 32;
      var $rec_len = __stackBase__ + 36;
      var $lineterm = __stackBase__ + 40;
      var $c = __stackBase__ + 44;
      var $want_escape = __stackBase__ + 45;
      
      HEAP[$self_addr] = $self;
      HEAP[$field_addr] = $field;
      HEAP[$quote_empty_addr] = $quote_empty;
      HEAP[$quoted_addr] = $quoted;
      HEAP[$copy_phase_addr] = $copy_phase;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$dialect] = $3;
      
      
      var $6 = HEAP[HEAP[$dialect] + 20];
      var $7 = _PyString_AsString($6);
      HEAP[$lineterm] = $7;
      
      
      if (HEAP[$lineterm] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 48;
      break;
     case 2:
      
      
      var $12 = HEAP[HEAP[$self_addr] + 24];
      HEAP[$rec_len] = $12;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      if (HEAP[$copy_phase_addr] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      var $24 = HEAP[HEAP[$dialect] + 12];
      
      var $26 = HEAP[HEAP[$self_addr] + 16] + HEAP[$rec_len];
      HEAP[$26] = $24;
      __label__ = 5;
      break;
     case 5:
      
      var $28 = HEAP[$rec_len] + 1;
      HEAP[$rec_len] = $28;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$copy_phase_addr] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 7:
      
      
      
      if (HEAP[HEAP[$quoted_addr]] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      if (HEAP[$copy_phase_addr] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      var $41 = HEAP[HEAP[$dialect] + 13];
      
      var $43 = HEAP[HEAP[$self_addr] + 16] + HEAP[$rec_len];
      HEAP[$43] = $41;
      __label__ = 10;
      break;
     case 10:
      
      var $45 = HEAP[$rec_len] + 1;
      HEAP[$rec_len] = $45;
      __label__ = 11;
      break;
     case 11:
      HEAP[$i] = 0;
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $49 = HEAP[HEAP[$field_addr] + HEAP[$i]];
      HEAP[$c] = $49;
      HEAP[$want_escape] = 0;
      
      
      if (HEAP[$c] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      if (HEAP[HEAP[$dialect] + 12] == HEAP[$c]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      
      if (HEAP[HEAP[$dialect] + 14] == HEAP[$c]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      
      if (HEAP[HEAP[$dialect] + 13] == HEAP[$c]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      var $68 = HEAP[$c];
      var $69 = HEAP[$lineterm];
      var $70 = _strchr($69, $68);
      
      if ($70 != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 17:
      
      
      
      
      if (HEAP[HEAP[$dialect] + 24] == 3) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      HEAP[$want_escape] = 1;
      __label__ = 27;
      break;
     case 19:
      
      
      
      
      
      if (HEAP[HEAP[$dialect] + 13] == HEAP[$c]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 20:
      
      
      
      
      if (HEAP[HEAP[$dialect] + 8] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 21:
      
      
      if (HEAP[$copy_phase_addr] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      
      var $92 = HEAP[HEAP[$dialect] + 13];
      
      var $94 = HEAP[HEAP[$self_addr] + 16] + HEAP[$rec_len];
      HEAP[$94] = $92;
      __label__ = 23;
      break;
     case 23:
      
      var $96 = HEAP[$rec_len] + 1;
      HEAP[$rec_len] = $96;
      __label__ = 25;
      break;
     case 24:
      HEAP[$want_escape] = 1;
      __label__ = 25;
      break;
     case 25:
      
      
      if (HEAP[$want_escape] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      var $99 = HEAP[$quoted_addr];
      HEAP[$99] = 1;
      __label__ = 27;
      break;
     case 27:
      
      
      if (HEAP[$want_escape] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 28:
      
      
      
      
      if (HEAP[HEAP[$dialect] + 14] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $106 = HEAP[_error_obj];
      var $107 = _PyErr_Format($106, __str35, allocate(1, "i32", ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 48;
      break;
     case 30:
      
      
      if (HEAP[$copy_phase_addr] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      
      var $115 = HEAP[HEAP[$dialect] + 14];
      
      var $117 = HEAP[HEAP[$self_addr] + 16] + HEAP[$rec_len];
      HEAP[$117] = $115;
      __label__ = 32;
      break;
     case 32:
      
      var $119 = HEAP[$rec_len] + 1;
      HEAP[$rec_len] = $119;
      __label__ = 33;
      break;
     case 33:
      
      
      if (HEAP[$copy_phase_addr] != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $126 = HEAP[HEAP[$self_addr] + 16] + HEAP[$rec_len];
      var $127 = HEAP[$c];
      HEAP[$126] = $127;
      __label__ = 35;
      break;
     case 35:
      
      var $129 = HEAP[$rec_len] + 1;
      HEAP[$rec_len] = $129;
      
      var $131 = HEAP[$i] + 1;
      HEAP[$i] = $131;
      __label__ = 12;
      break;
     case 36:
      
      
      if (HEAP[$i] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 37:
      
      
      if (HEAP[$quote_empty_addr] != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 38:
      
      
      
      
      if (HEAP[HEAP[$dialect] + 24] == 3) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      var $140 = HEAP[_error_obj];
      var $141 = _PyErr_Format($140, __str36, allocate(1, "i32", ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 48;
      break;
     case 40:
      var $142 = HEAP[$quoted_addr];
      HEAP[$142] = 1;
      __label__ = 41;
      break;
     case 41:
      
      
      
      if (HEAP[HEAP[$quoted_addr]] != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 42:
      
      
      if (HEAP[$copy_phase_addr] != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 43:
      
      
      if (HEAP[$copy_phase_addr] != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      
      var $155 = HEAP[HEAP[$dialect] + 13];
      
      var $157 = HEAP[HEAP[$self_addr] + 16] + HEAP[$rec_len];
      HEAP[$157] = $155;
      __label__ = 45;
      break;
     case 45:
      
      var $159 = HEAP[$rec_len] + 1;
      HEAP[$rec_len] = $159;
      __label__ = 47;
      break;
     case 46:
      
      var $161 = HEAP[$rec_len] + 2;
      HEAP[$rec_len] = $161;
      __label__ = 47;
      break;
     case 47:
      var $162 = HEAP[$rec_len];
      HEAP[$0] = $162;
      __label__ = 48;
      break;
     case 48:
      var $163 = HEAP[$0];
      HEAP[$retval] = $163;
      __label__ = 49;
      break;
     case 49:
      var $retval48 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval48;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _join_check_rec_size($self, $rec_len) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $rec_len_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $old_rec = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$rec_len_addr] = $rec_len;
      
      
      if (HEAP[$rec_len_addr] < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$rec_len_addr] > 2147450879) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $5 = _PyErr_NoMemory();
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 3:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] < HEAP[$rec_len_addr]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $18 = ((HEAP[$rec_len_addr] / 32768 | 0) + 1) * 32768;
      
      var $20 = HEAP[$self_addr] + 20;
      HEAP[$20] = $18;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      var $27 = HEAP[HEAP[$self_addr] + 16];
      _PyMem_Free($27);
      __label__ = 7;
      break;
     case 7:
      
      
      var $30 = HEAP[HEAP[$self_addr] + 20];
      var $31 = _PyMem_Malloc($30);
      
      var $33 = HEAP[$self_addr] + 16;
      HEAP[$33] = $31;
      __label__ = 10;
      break;
     case 8:
      
      
      var $36 = HEAP[HEAP[$self_addr] + 16];
      HEAP[$old_rec] = $36;
      
      
      
      var $40 = ((HEAP[$rec_len_addr] / 32768 | 0) + 1) * 32768;
      
      var $42 = HEAP[$self_addr] + 20;
      HEAP[$42] = $40;
      
      
      var $45 = HEAP[HEAP[$self_addr] + 20];
      
      
      var $48 = HEAP[HEAP[$self_addr] + 16];
      var $49 = _PyMem_Realloc($48, $45);
      
      var $51 = HEAP[$self_addr] + 16;
      HEAP[$51] = $49;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $56 = HEAP[$old_rec];
      _PyMem_Free($56);
      __label__ = 10;
      break;
     case 10:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $61 = _PyErr_NoMemory();
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 12:
      HEAP[$0] = 1;
      __label__ = 13;
      break;
     case 13:
      var $62 = HEAP[$0];
      HEAP[$retval] = $62;
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
  function _join_append($self, $field, $quoted, $quote_empty) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $field_addr = __stackBase__ + 4;
      var $quoted_addr = __stackBase__ + 8;
      var $quote_empty_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $rec_len = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$field_addr] = $field;
      HEAP[$quoted_addr] = $quoted;
      HEAP[$quote_empty_addr] = $quote_empty;
      var $1 = HEAP[$self_addr];
      var $2 = HEAP[$field_addr];
      var $3 = HEAP[$quote_empty_addr];
      var $4 = HEAP[$quoted_addr];
      var $5 = _join_append_data($1, $2, $3, $4, 0);
      HEAP[$rec_len] = $5;
      
      
      if (HEAP[$rec_len] < 0) {
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
      var $8 = HEAP[$self_addr];
      var $9 = HEAP[$rec_len];
      var $10 = _join_check_rec_size($8, $9);
      
      if ($10 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      var $12 = HEAP[$self_addr];
      var $13 = HEAP[$field_addr];
      var $14 = HEAP[$quote_empty_addr];
      var $15 = HEAP[$quoted_addr];
      var $16 = _join_append_data($12, $13, $14, $15, 1);
      
      var $18 = HEAP[$self_addr] + 24;
      HEAP[$18] = $16;
      
      
      
      var $22 = HEAP[HEAP[$self_addr] + 28] + 1;
      
      var $24 = HEAP[$self_addr] + 28;
      HEAP[$24] = $22;
      HEAP[$0] = 1;
      __label__ = 5;
      break;
     case 5:
      var $25 = HEAP[$0];
      HEAP[$retval] = $25;
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
  function _join_append_lineterminator($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $terminator_len = __stackBase__ + 12;
      var $terminator = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      var $5 = HEAP[HEAP[HEAP[$self_addr] + 12] + 20];
      var $6 = _PyString_Size($5);
      HEAP[$terminator_len] = $6;
      
      var $8 = HEAP[$terminator_len] == -1;
      if ($8) {
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
      
      
      
      
      var $13 = HEAP[HEAP[$self_addr] + 24] + HEAP[$terminator_len];
      var $14 = HEAP[$self_addr];
      var $15 = _join_check_rec_size($14, $13);
      
      if ($15 == 0) {
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
      
      
      
      
      var $21 = HEAP[HEAP[HEAP[$self_addr] + 12] + 20];
      var $22 = _PyString_AsString($21);
      HEAP[$terminator] = $22;
      
      
      if (HEAP[$terminator] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 6:
      var $25 = HEAP[$terminator_len];
      
      
      
      
      
      
      var $32 = HEAP[HEAP[$self_addr] + 16] + HEAP[HEAP[$self_addr] + 24];
      var $33 = HEAP[$terminator];
      _llvm_memmove_p0i8_p0i8_i32($32, $33, $25, 1, 0);
      
      
      
      
      var $38 = HEAP[HEAP[$self_addr] + 24] + HEAP[$terminator_len];
      
      var $40 = HEAP[$self_addr] + 24;
      HEAP[$40] = $38;
      HEAP[$0] = 1;
      __label__ = 7;
      break;
     case 7:
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
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
  function _csv_writerow($self, $seq) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $seq_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $dialect = __stackBase__ + 16;
      var $len = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      var $field = __stackBase__ + 28;
      var $append_ok = __stackBase__ + 32;
      var $quoted = __stackBase__ + 36;
      var $str = __stackBase__ + 40;
      
      HEAP[$self_addr] = $self;
      HEAP[$seq_addr] = $seq;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$dialect] = $3;
      var $4 = HEAP[$seq_addr];
      var $5 = _PySequence_Check($4);
      
      if ($5 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = HEAP[_error_obj];
      var $8 = _PyErr_Format($7, __str37, allocate(1, "i32", ALLOC_STACK));
      HEAP[$0] = $8;
      __label__ = 32;
      break;
     case 2:
      var $9 = HEAP[$seq_addr];
      var $10 = _PySequence_Size($9);
      HEAP[$len] = $10;
      
      
      if (HEAP[$len] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 32;
      break;
     case 4:
      var $13 = HEAP[$self_addr];
      _join_reset($13);
      HEAP[$i] = 0;
      __label__ = 28;
      break;
     case 5:
      var $14 = HEAP[$seq_addr];
      var $15 = HEAP[$i];
      var $16 = _PySequence_GetItem($14, $15);
      HEAP[$field] = $16;
      
      
      if (HEAP[$field] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 32;
      break;
     case 7:
      
      
      var $21 = HEAP[HEAP[$dialect] + 24];
      if ($21 == 1) {
        __label__ = 9;
        break;
      } else if ($21 == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      var $22 = HEAP[$field];
      var $23 = _PyNumber_Check($22);
      
      var $25 = $23 == 0;
      HEAP[$quoted] = $25;
      __label__ = 11;
      break;
     case 9:
      HEAP[$quoted] = 1;
      __label__ = 11;
      break;
     case 10:
      HEAP[$quoted] = 0;
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$field] + 4] + 84] & 134217728) != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      
      var $35 = HEAP[$len] == 1;
      
      
      
      var $39 = HEAP[$field] + 20;
      var $40 = HEAP[$self_addr];
      var $41 = _join_append($40, $39, $quoted, $35);
      HEAP[$append_ok] = $41;
      
      
      
      var $45 = HEAP[HEAP[$field]] - 1;
      
      var $47 = HEAP[$field];
      HEAP[$47] = $45;
      
      
      
      
      if (HEAP[HEAP[$field]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $56 = HEAP[HEAP[HEAP[$field] + 4] + 24];
      var $57 = HEAP[$field];
      FUNCTION_TABLE[$56]($57);
      __label__ = 14;
      break;
     case 14:
      __label__ = 25;
      break;
     case 15:
      
      
      if (HEAP[$field] == __Py_NoneStruct) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      
      
      var $62 = HEAP[$len] == 1;
      var $63 = HEAP[$self_addr];
      var $64 = _join_append($63, __str33, $quoted, $62);
      HEAP[$append_ok] = $64;
      
      
      
      var $68 = HEAP[HEAP[$field]] - 1;
      
      var $70 = HEAP[$field];
      HEAP[$70] = $68;
      
      
      
      
      if (HEAP[HEAP[$field]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $79 = HEAP[HEAP[HEAP[$field] + 4] + 24];
      var $80 = HEAP[$field];
      FUNCTION_TABLE[$79]($80);
      __label__ = 18;
      break;
     case 18:
      __label__ = 25;
      break;
     case 19:
      var $81 = HEAP[$field];
      var $82 = _PyObject_Str($81);
      HEAP[$str] = $82;
      
      
      
      var $86 = HEAP[HEAP[$field]] - 1;
      
      var $88 = HEAP[$field];
      HEAP[$88] = $86;
      
      
      
      
      if (HEAP[HEAP[$field]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $97 = HEAP[HEAP[HEAP[$field] + 4] + 24];
      var $98 = HEAP[$field];
      FUNCTION_TABLE[$97]($98);
      __label__ = 21;
      break;
     case 21:
      
      
      if (HEAP[$str] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      HEAP[$0] = 0;
      __label__ = 32;
      break;
     case 23:
      
      
      var $103 = HEAP[$len] == 1;
      
      
      
      var $107 = HEAP[$str] + 20;
      var $108 = HEAP[$self_addr];
      var $109 = _join_append($108, $107, $quoted, $103);
      HEAP[$append_ok] = $109;
      
      
      
      var $113 = HEAP[HEAP[$str]] - 1;
      
      var $115 = HEAP[$str];
      HEAP[$115] = $113;
      
      
      
      
      if (HEAP[HEAP[$str]] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $124 = HEAP[HEAP[HEAP[$str] + 4] + 24];
      var $125 = HEAP[$str];
      FUNCTION_TABLE[$124]($125);
      __label__ = 25;
      break;
     case 25:
      
      
      if (HEAP[$append_ok] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      HEAP[$0] = 0;
      __label__ = 32;
      break;
     case 27:
      
      var $129 = HEAP[$i] + 1;
      HEAP[$i] = $129;
      __label__ = 28;
      break;
     case 28:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      var $133 = HEAP[$self_addr];
      var $134 = _join_append_lineterminator($133);
      
      if ($134 == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      HEAP[$0] = 0;
      __label__ = 32;
      break;
     case 31:
      
      
      var $138 = HEAP[HEAP[$self_addr] + 24];
      
      
      var $141 = HEAP[HEAP[$self_addr] + 16];
      
      
      var $144 = HEAP[HEAP[$self_addr] + 8];
      var $145 = _PyObject_CallFunction($144, __str38, allocate([ $141, 0, 0, 0, $138, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $145;
      __label__ = 32;
      break;
     case 32:
      var $146 = HEAP[$0];
      HEAP[$retval] = $146;
      __label__ = 33;
      break;
     case 33:
      var $retval32 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval32;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _csv_writerows($self, $seqseq) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $seqseq_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $row_iter = __stackBase__ + 16;
      var $row_obj = __stackBase__ + 20;
      var $result = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$seqseq_addr] = $seqseq;
      var $1 = HEAP[$seqseq_addr];
      var $2 = _PyObject_GetIter($1);
      HEAP[$row_iter] = $2;
      
      
      if (HEAP[$row_iter] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($5, __str39);
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 2:
      __label__ = 11;
      break;
     case 3:
      var $6 = HEAP[$self_addr];
      var $7 = HEAP[$row_obj];
      var $8 = _csv_writerow($6, $7);
      HEAP[$result] = $8;
      
      
      
      var $12 = HEAP[HEAP[$row_obj]] - 1;
      
      var $14 = HEAP[$row_obj];
      HEAP[$14] = $12;
      
      
      
      
      if (HEAP[HEAP[$row_obj]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$row_obj] + 4] + 24];
      var $24 = HEAP[$row_obj];
      FUNCTION_TABLE[$23]($24);
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[$result] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $30 = HEAP[HEAP[$row_iter]] - 1;
      
      var $32 = HEAP[$row_iter];
      HEAP[$32] = $30;
      
      
      
      
      if (HEAP[HEAP[$row_iter]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $41 = HEAP[HEAP[HEAP[$row_iter] + 4] + 24];
      var $42 = HEAP[$row_iter];
      FUNCTION_TABLE[$41]($42);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 9:
      
      
      
      var $46 = HEAP[HEAP[$result]] - 1;
      
      var $48 = HEAP[$result];
      HEAP[$48] = $46;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $58 = HEAP[$result];
      FUNCTION_TABLE[$57]($58);
      __label__ = 11;
      break;
     case 11:
      var $59 = HEAP[$row_iter];
      var $60 = _PyIter_Next($59);
      HEAP[$row_obj] = $60;
      
      
      if (HEAP[$row_obj] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      var $66 = HEAP[HEAP[$row_iter]] - 1;
      
      var $68 = HEAP[$row_iter];
      HEAP[$68] = $66;
      
      
      
      
      if (HEAP[HEAP[$row_iter]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $77 = HEAP[HEAP[HEAP[$row_iter] + 4] + 24];
      var $78 = HEAP[$row_iter];
      FUNCTION_TABLE[$77]($78);
      __label__ = 14;
      break;
     case 14:
      var $79 = _PyErr_Occurred();
      
      if ($79 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 16:
      
      var $82 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $82;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 17;
      break;
     case 17:
      var $83 = HEAP[$0];
      HEAP[$retval] = $83;
      __label__ = 18;
      break;
     case 18:
      var $retval17 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Writer_dealloc($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      
      HEAP[$self_addr] = $self;
      
      var $1 = HEAP[$self_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[HEAP[$self_addr] + 12];
      
      
      var $12 = HEAP[$9] - 1;
      var $13 = $9;
      HEAP[$13] = $12;
      
      
      
      if (HEAP[$9] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 12] + 4] + 24];
      
      
      
      var $28 = HEAP[HEAP[$self_addr] + 12];
      FUNCTION_TABLE[$24]($28);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $35 = HEAP[HEAP[$self_addr] + 8];
      
      
      var $38 = HEAP[$35] - 1;
      var $39 = $35;
      HEAP[$39] = $38;
      
      
      
      if (HEAP[$35] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 8] + 4] + 24];
      
      
      var $52 = HEAP[HEAP[$self_addr] + 8];
      FUNCTION_TABLE[$49]($52);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $59 = HEAP[HEAP[$self_addr] + 16];
      _PyMem_Free($59);
      __label__ = 8;
      break;
     case 8:
      
      var $61 = HEAP[$self_addr];
      _PyObject_GC_Del($61);
      __label__ = 9;
      break;
     case 9:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Writer_traverse($self, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[HEAP[$self_addr] + 12];
      var $9 = HEAP[$visit_addr];
      var $10 = HEAP[$arg_addr];
      var $11 = FUNCTION_TABLE[$9]($8, $10);
      HEAP[$vret] = $11;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $14 = HEAP[$vret];
      HEAP[$0] = $14;
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $21 = HEAP[HEAP[$self_addr] + 8];
      var $22 = HEAP[$visit_addr];
      var $23 = HEAP[$arg_addr];
      var $24 = FUNCTION_TABLE[$22]($21, $23);
      HEAP[$vret4] = $24;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $27 = HEAP[$vret4];
      HEAP[$0] = $27;
      __label__ = 7;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $28 = HEAP[$0];
      HEAP[$retval] = $28;
      __label__ = 8;
      break;
     case 8:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Writer_clear($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $_py_tmp = __stackBase__ + 12;
      var $_py_tmp4 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$_py_tmp] = $8;
      
      var $10 = HEAP[$self_addr] + 12;
      HEAP[$10] = 0;
      
      
      
      var $14 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $16 = HEAP[$_py_tmp];
      HEAP[$16] = $14;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $25 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $26 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$25]($26);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $33 = HEAP[HEAP[$self_addr] + 8];
      HEAP[$_py_tmp4] = $33;
      
      var $35 = HEAP[$self_addr] + 8;
      HEAP[$35] = 0;
      
      
      
      var $39 = HEAP[HEAP[$_py_tmp4]] - 1;
      
      var $41 = HEAP[$_py_tmp4];
      HEAP[$41] = $39;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp4]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $50 = HEAP[HEAP[HEAP[$_py_tmp4] + 4] + 24];
      var $51 = HEAP[$_py_tmp4];
      FUNCTION_TABLE[$50]($51);
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = 0;
      var $52 = HEAP[$0];
      HEAP[$retval] = $52;
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
  function _csv_writer($module, $args, $keyword_args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $keyword_args_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $output_file = __stackBase__ + 20;
      var $dialect = __stackBase__ + 24;
      var $self = __stackBase__ + 28;
      
      HEAP[__stackBase__] = $module;
      HEAP[$args_addr] = $args;
      HEAP[$keyword_args_addr] = $keyword_args;
      HEAP[$dialect] = 0;
      var $1 = __PyObject_GC_New(_Writer_Type);
      
      HEAP[$self] = $1;
      
      
      if (HEAP[$self] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 2:
      
      var $6 = HEAP[$self] + 12;
      HEAP[$6] = 0;
      
      var $8 = HEAP[$self] + 8;
      HEAP[$8] = 0;
      
      var $10 = HEAP[$self] + 16;
      HEAP[$10] = 0;
      
      var $12 = HEAP[$self] + 20;
      HEAP[$12] = 0;
      
      var $14 = HEAP[$self] + 24;
      HEAP[$14] = 0;
      
      var $16 = HEAP[$self] + 28;
      HEAP[$16] = 0;
      var $17 = HEAP[$args_addr];
      var $18 = _PyArg_UnpackTuple($17, __str33, 1, 2, allocate([ $output_file, 0, 0, 0, $dialect, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($18 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      var $21 = HEAP[$self];
      
      
      var $24 = HEAP[$21] - 1;
      var $25 = $21;
      HEAP[$25] = $24;
      
      
      
      if (HEAP[$21] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      var $34 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $36 = HEAP[$self];
      FUNCTION_TABLE[$34]($36);
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 6:
      var $37 = HEAP[$output_file];
      var $38 = _PyObject_GetAttrString($37, __str43);
      
      var $40 = HEAP[$self] + 8;
      HEAP[$40] = $38;
      
      
      
      
      if (HEAP[HEAP[$self] + 8] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      var $47 = HEAP[HEAP[$self] + 8];
      var $48 = _PyCallable_Check($47);
      
      if ($48 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      var $50 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($50, __str44);
      
      var $52 = HEAP[$self];
      
      
      var $55 = HEAP[$52] - 1;
      var $56 = $52;
      HEAP[$56] = $55;
      
      
      
      if (HEAP[$52] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      var $65 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $67 = HEAP[$self];
      FUNCTION_TABLE[$65]($67);
      __label__ = 10;
      break;
     case 10:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 11:
      var $68 = HEAP[$dialect];
      var $69 = HEAP[$keyword_args_addr];
      var $70 = __call_dialect($68, $69);
      var $71 = $70;
      
      var $73 = HEAP[$self] + 12;
      HEAP[$73] = $71;
      
      
      
      
      if (HEAP[HEAP[$self] + 12] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      var $79 = HEAP[$self];
      
      
      var $82 = HEAP[$79] - 1;
      var $83 = $79;
      HEAP[$83] = $82;
      
      
      
      if (HEAP[$79] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      var $92 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $94 = HEAP[$self];
      FUNCTION_TABLE[$92]($94);
      __label__ = 14;
      break;
     case 14:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 15:
      
      var $96 = HEAP[$self];
      _PyObject_GC_Track($96);
      
      var $98 = HEAP[$self];
      HEAP[$0] = $98;
      __label__ = 16;
      break;
     case 16:
      var $99 = HEAP[$0];
      HEAP[$retval] = $99;
      __label__ = 17;
      break;
     case 17:
      var $retval16 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _csv_list_dialects($module, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $module;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[_dialects];
      var $2 = _PyDict_Keys($1);
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
  function _csv_register_dialect($module, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kwargs_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $name_obj = __stackBase__ + 20;
      var $dialect_obj = __stackBase__ + 24;
      var $dialect = __stackBase__ + 28;
      
      HEAP[__stackBase__] = $module;
      HEAP[$args_addr] = $args;
      HEAP[$kwargs_addr] = $kwargs;
      HEAP[$dialect_obj] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str33, 1, 2, allocate([ $name_obj, 0, 0, 0, $dialect_obj, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      
      
      if (HEAP[HEAP[$name_obj] + 4] != _PyBaseString_Type) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $10 = HEAP[HEAP[$name_obj] + 4];
      var $11 = _PyType_IsSubtype($10, _PyBaseString_Type);
      
      if ($11 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $13 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($13, __str45);
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 5:
      var $14 = HEAP[$dialect_obj];
      var $15 = HEAP[$kwargs_addr];
      var $16 = __call_dialect($14, $15);
      HEAP[$dialect] = $16;
      
      
      if (HEAP[$dialect] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 7:
      var $19 = HEAP[$name_obj];
      var $20 = HEAP[_dialects];
      var $21 = HEAP[$dialect];
      var $22 = _PyDict_SetItem($20, $19, $21);
      
      if ($22 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $27 = HEAP[HEAP[$dialect]] - 1;
      
      var $29 = HEAP[$dialect];
      HEAP[$29] = $27;
      
      
      
      
      if (HEAP[HEAP[$dialect]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[$dialect] + 4] + 24];
      var $39 = HEAP[$dialect];
      FUNCTION_TABLE[$38]($39);
      __label__ = 10;
      break;
     case 10:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 11:
      
      
      
      var $43 = HEAP[HEAP[$dialect]] - 1;
      
      var $45 = HEAP[$dialect];
      HEAP[$45] = $43;
      
      
      
      
      if (HEAP[HEAP[$dialect]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$dialect] + 4] + 24];
      var $55 = HEAP[$dialect];
      FUNCTION_TABLE[$54]($55);
      __label__ = 13;
      break;
     case 13:
      
      var $57 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $57;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 14;
      break;
     case 14:
      var $58 = HEAP[$0];
      HEAP[$retval] = $58;
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
  function _csv_unregister_dialect($module, $name_obj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $name_obj_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $module;
      HEAP[$name_obj_addr] = $name_obj;
      var $1 = HEAP[_dialects];
      var $2 = HEAP[$name_obj_addr];
      var $3 = _PyDict_DelItem($1, $2);
      
      if ($3 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_error_obj];
      var $6 = _PyErr_Format($5, __str4, allocate(1, "i32", ALLOC_STACK));
      HEAP[$0] = $6;
      __label__ = 3;
      break;
     case 2:
      
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
  function _csv_get_dialect($module, $name_obj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $name_obj_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $module;
      HEAP[$name_obj_addr] = $name_obj;
      var $1 = HEAP[$name_obj_addr];
      var $2 = _get_dialect_from_registry($1);
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
  function _csv_field_size_limit($module, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $new_limit = __stackBase__ + 16;
      var $old_limit = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $module;
      HEAP[$args_addr] = $args;
      HEAP[$new_limit] = 0;
      var $1 = HEAP[_field_limit];
      HEAP[$old_limit] = $1;
      var $2 = HEAP[$args_addr];
      var $3 = _PyArg_UnpackTuple($2, __str46, 0, 1, allocate([ $new_limit, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      
      if (HEAP[$new_limit] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$new_limit] + 4] + 84] & 8388608) == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $14 = HEAP[_PyExc_TypeError];
      var $15 = _PyErr_Format($14, __str47, allocate(1, "i32", ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 5:
      var $16 = HEAP[$new_limit];
      var $17 = _PyInt_AsLong($16);
      HEAP[_field_limit] = $17;
      __label__ = 6;
      break;
     case 6:
      var $18 = HEAP[$old_limit];
      var $19 = _PyInt_FromLong($18);
      HEAP[$0] = $19;
      __label__ = 7;
      break;
     case 7:
      var $20 = HEAP[$0];
      HEAP[$retval] = $20;
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
  function _init_csv() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $module = __stackBase__;
      var $style = __stackBase__ + 4;
      
      var $0 = _PyType_Ready(_Dialect_Type);
      
      if ($0 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $2 = _PyType_Ready(_Reader_Type);
      
      if ($2 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $4 = _PyType_Ready(_Writer_Type);
      
      if ($4 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $6 = _Py_InitModule4(__str54, _csv_methods, _csv_module_doc, 0, 1013);
      HEAP[$module] = $6;
      
      
      if (HEAP[$module] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $9 = HEAP[$module];
      var $10 = _PyModule_AddStringConstant($9, __str55, __str56);
      var $11 = $10 == -1;
      if ($11) {
        __label__ = 14;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $12 = _PyDict_New();
      HEAP[_dialects] = $12;
      
      
      if (HEAP[_dialects] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $15 = HEAP[_dialects];
      var $16 = HEAP[$module];
      var $17 = _PyModule_AddObject($16, __str57, $15);
      
      if ($17 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      HEAP[$style] = _quote_styles;
      __label__ = 10;
      break;
     case 8:
      
      
      var $21 = HEAP[HEAP[$style]];
      
      
      var $24 = HEAP[HEAP[$style] + 4];
      var $25 = HEAP[$module];
      var $26 = _PyModule_AddIntConstant($25, $24, $21);
      var $27 = $26 == -1;
      if ($27) {
        __label__ = 14;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      var $29 = HEAP[$style] + 8;
      HEAP[$style] = $29;
      __label__ = 10;
      break;
     case 10:
      
      
      
      
      if (HEAP[HEAP[$style] + 4] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $36 = HEAP[_Dialect_Type] + 1;
      
      HEAP[_Dialect_Type] = $36;
      var $38 = HEAP[$module];
      var $39 = _PyModule_AddObject($38, __str58, _Dialect_Type);
      
      if ($39 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $41 = _PyErr_NewException(__str59, 0, 0);
      HEAP[_error_obj] = $41;
      
      
      if (HEAP[_error_obj] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $44 = HEAP[_error_obj];
      var $45 = HEAP[$module];
      var $46 = _PyModule_AddObject($45, __str60, $44);
      __label__ = 14;
      break;
     case 14:
      __label__ = 15;
      break;
     case 15:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_csv"] = _init_csv;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _Dialect_get_escapechar, 0, _Dialect_get_lineterminator, 0, _Dialect_get_quotechar, 0, _Dialect_get_quoting, 0, _Dialect_dealloc, 0, _dialect_new, 0, _Reader_dealloc, 0, _Reader_traverse, 0, _Reader_clear, 0, _PyObject_SelfIter, 0, _Reader_iternext, 0, _csv_writerow, 0, _csv_writerows, 0, _Writer_dealloc, 0, _Writer_traverse, 0, _Writer_clear, 0, _csv_reader, 0, _csv_writer, 0, _csv_list_dialects, 0, _csv_register_dialect, 0, _csv_unregister_dialect, 0, _csv_get_dialect, 0, _csv_field_size_limit, 0 ]);
  function run(args) {
    _field_limit = allocate([ 131072 ], [ "i32", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str = allocate([ 81, 85, 79, 84, 69, 95, 77, 73, 78, 73, 77, 65, 76, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 81, 85, 79, 84, 69, 95, 65, 76, 76, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 81, 85, 79, 84, 69, 95, 78, 79, 78, 78, 85, 77, 69, 82, 73, 67, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 81, 85, 79, 84, 69, 95, 78, 79, 78, 69, 0 ], "i8", ALLOC_NORMAL);
    _quote_styles = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _dialects = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _error_obj = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str4 = allocate([ 117, 110, 107, 110, 111, 119, 110, 32, 100, 105, 97, 108, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 34, 37, 115, 34, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 34, 37, 115, 34, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 110, 32, 49, 45, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 34, 37, 115, 34, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 110, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 98, 97, 100, 32, 34, 113, 117, 111, 116, 105, 110, 103, 34, 32, 118, 97, 108, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 100, 101, 108, 105, 109, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 115, 107, 105, 112, 105, 110, 105, 116, 105, 97, 108, 115, 112, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 100, 111, 117, 98, 108, 101, 113, 117, 111, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 115, 116, 114, 105, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _Dialect_memberlist = allocate([ 0, 0, 0, 0, 7, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str13 = allocate([ 101, 115, 99, 97, 112, 101, 99, 104, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 108, 105, 110, 101, 116, 101, 114, 109, 105, 110, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 113, 117, 111, 116, 101, 99, 104, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 113, 117, 111, 116, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _Dialect_getsetlist = allocate(100, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _dialect_kws = allocate(40, "i8*", ALLOC_NORMAL);
    __str17 = allocate([ 100, 105, 97, 108, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 124, 79, 79, 79, 79, 79, 79, 79, 79, 79, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 13, 10, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 100, 101, 108, 105, 109, 105, 116, 101, 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 113, 117, 111, 116, 101, 99, 104, 97, 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 101, 116, 32, 105, 102, 32, 113, 117, 111, 116, 105, 110, 103, 32, 101, 110, 97, 98, 108, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 108, 105, 110, 101, 116, 101, 114, 109, 105, 110, 97, 116, 111, 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    _Dialect_Type_doc = allocate([ 67, 83, 86, 32, 100, 105, 97, 108, 101, 99, 116, 10, 10, 84, 104, 101, 32, 68, 105, 97, 108, 101, 99, 116, 32, 116, 121, 112, 101, 32, 114, 101, 99, 111, 114, 100, 115, 32, 67, 83, 86, 32, 112, 97, 114, 115, 105, 110, 103, 32, 97, 110, 100, 32, 103, 101, 110, 101, 114, 97, 116, 105, 111, 110, 32, 111, 112, 116, 105, 111, 110, 115, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 95, 99, 115, 118, 46, 68, 105, 97, 108, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _Dialect_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str24 = allocate([ 40, 79, 41, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 102, 105, 101, 108, 100, 32, 108, 97, 114, 103, 101, 114, 32, 116, 104, 97, 110, 32, 102, 105, 101, 108, 100, 32, 108, 105, 109, 105, 116, 32, 40, 37, 108, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 39, 37, 99, 39, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 97, 102, 116, 101, 114, 32, 39, 37, 99, 39, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 110, 101, 119, 45, 108, 105, 110, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 115, 101, 101, 110, 32, 105, 110, 32, 117, 110, 113, 117, 111, 116, 101, 100, 32, 102, 105, 101, 108, 100, 32, 45, 32, 100, 111, 32, 121, 111, 117, 32, 110, 101, 101, 100, 32, 116, 111, 32, 111, 112, 101, 110, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 105, 110, 32, 117, 110, 105, 118, 101, 114, 115, 97, 108, 45, 110, 101, 119, 108, 105, 110, 101, 32, 109, 111, 100, 101, 63, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 110, 101, 119, 108, 105, 110, 101, 32, 105, 110, 115, 105, 100, 101, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 108, 105, 110, 101, 32, 99, 111, 110, 116, 97, 105, 110, 115, 32, 78, 85, 76, 76, 32, 98, 121, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _Reader_Type_doc = allocate([ 67, 83, 86, 32, 114, 101, 97, 100, 101, 114, 10, 10, 82, 101, 97, 100, 101, 114, 32, 111, 98, 106, 101, 99, 116, 115, 32, 97, 114, 101, 32, 114, 101, 115, 112, 111, 110, 115, 105, 98, 108, 101, 32, 102, 111, 114, 32, 114, 101, 97, 100, 105, 110, 103, 32, 97, 110, 100, 32, 112, 97, 114, 115, 105, 110, 103, 32, 116, 97, 98, 117, 108, 97, 114, 32, 100, 97, 116, 97, 10, 105, 110, 32, 67, 83, 86, 32, 102, 111, 114, 109, 97, 116, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _Reader_methods = allocate(16, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str31 = allocate([ 108, 105, 110, 101, 95, 110, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    _Reader_memberlist = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 40, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str32 = allocate([ 95, 99, 115, 118, 46, 114, 101, 97, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _Reader_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str33 = allocate(1, "i8", ALLOC_NORMAL);
    __str34 = allocate([ 97, 114, 103, 117, 109, 101, 110, 116, 32, 49, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 110, 101, 101, 100, 32, 116, 111, 32, 101, 115, 99, 97, 112, 101, 44, 32, 98, 117, 116, 32, 110, 111, 32, 101, 115, 99, 97, 112, 101, 99, 104, 97, 114, 32, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 115, 105, 110, 103, 108, 101, 32, 101, 109, 112, 116, 121, 32, 102, 105, 101, 108, 100, 32, 114, 101, 99, 111, 114, 100, 32, 109, 117, 115, 116, 32, 98, 101, 32, 113, 117, 111, 116, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    _csv_writerow_doc = allocate([ 119, 114, 105, 116, 101, 114, 111, 119, 40, 115, 101, 113, 117, 101, 110, 99, 101, 41, 10, 10, 67, 111, 110, 115, 116, 114, 117, 99, 116, 32, 97, 110, 100, 32, 119, 114, 105, 116, 101, 32, 97, 32, 67, 83, 86, 32, 114, 101, 99, 111, 114, 100, 32, 102, 114, 111, 109, 32, 97, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 102, 32, 102, 105, 101, 108, 100, 115, 46, 32, 32, 78, 111, 110, 45, 115, 116, 114, 105, 110, 103, 10, 101, 108, 101, 109, 101, 110, 116, 115, 32, 119, 105, 108, 108, 32, 98, 101, 32, 99, 111, 110, 118, 101, 114, 116, 101, 100, 32, 116, 111, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 115, 101, 113, 117, 101, 110, 99, 101, 32, 101, 120, 112, 101, 99, 116, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 40, 115, 35, 41, 0 ], "i8", ALLOC_NORMAL);
    _csv_writerows_doc = allocate([ 119, 114, 105, 116, 101, 114, 111, 119, 115, 40, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 102, 32, 115, 101, 113, 117, 101, 110, 99, 101, 115, 41, 10, 10, 67, 111, 110, 115, 116, 114, 117, 99, 116, 32, 97, 110, 100, 32, 119, 114, 105, 116, 101, 32, 97, 32, 115, 101, 114, 105, 101, 115, 32, 111, 102, 32, 115, 101, 113, 117, 101, 110, 99, 101, 115, 32, 116, 111, 32, 97, 32, 99, 115, 118, 32, 102, 105, 108, 101, 46, 32, 32, 78, 111, 110, 45, 115, 116, 114, 105, 110, 103, 10, 101, 108, 101, 109, 101, 110, 116, 115, 32, 119, 105, 108, 108, 32, 98, 101, 32, 99, 111, 110, 118, 101, 114, 116, 101, 100, 32, 116, 111, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 119, 114, 105, 116, 101, 114, 111, 119, 115, 40, 41, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 119, 114, 105, 116, 101, 114, 111, 119, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 119, 114, 105, 116, 101, 114, 111, 119, 115, 0 ], "i8", ALLOC_NORMAL);
    _Writer_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _Writer_memberlist = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _Writer_Type_doc = allocate([ 67, 83, 86, 32, 119, 114, 105, 116, 101, 114, 10, 10, 87, 114, 105, 116, 101, 114, 32, 111, 98, 106, 101, 99, 116, 115, 32, 97, 114, 101, 32, 114, 101, 115, 112, 111, 110, 115, 105, 98, 108, 101, 32, 102, 111, 114, 32, 103, 101, 110, 101, 114, 97, 116, 105, 110, 103, 32, 116, 97, 98, 117, 108, 97, 114, 32, 100, 97, 116, 97, 10, 105, 110, 32, 67, 83, 86, 32, 102, 111, 114, 109, 97, 116, 32, 102, 114, 111, 109, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 105, 110, 112, 117, 116, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 95, 99, 115, 118, 46, 119, 114, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _Writer_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str43 = allocate([ 119, 114, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 97, 114, 103, 117, 109, 101, 110, 116, 32, 49, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 97, 32, 34, 119, 114, 105, 116, 101, 34, 32, 109, 101, 116, 104, 111, 100, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 100, 105, 97, 108, 101, 99, 116, 32, 110, 97, 109, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 114, 32, 117, 110, 105, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 102, 105, 101, 108, 100, 95, 115, 105, 122, 101, 95, 108, 105, 109, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 108, 105, 109, 105, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _csv_module_doc = allocate([ 67, 83, 86, 32, 112, 97, 114, 115, 105, 110, 103, 32, 97, 110, 100, 32, 119, 114, 105, 116, 105, 110, 103, 46, 10, 10, 84, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 112, 114, 111, 118, 105, 100, 101, 115, 32, 99, 108, 97, 115, 115, 101, 115, 32, 116, 104, 97, 116, 32, 97, 115, 115, 105, 115, 116, 32, 105, 110, 32, 116, 104, 101, 32, 114, 101, 97, 100, 105, 110, 103, 32, 97, 110, 100, 32, 119, 114, 105, 116, 105, 110, 103, 10, 111, 102, 32, 67, 111, 109, 109, 97, 32, 83, 101, 112, 97, 114, 97, 116, 101, 100, 32, 86, 97, 108, 117, 101, 32, 40, 67, 83, 86, 41, 32, 102, 105, 108, 101, 115, 44, 32, 97, 110, 100, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 115, 32, 116, 104, 101, 32, 105, 110, 116, 101, 114, 102, 97, 99, 101, 10, 100, 101, 115, 99, 114, 105, 98, 101, 100, 32, 98, 121, 32, 80, 69, 80, 32, 51, 48, 53, 46, 32, 32, 65, 108, 116, 104, 111, 117, 103, 104, 32, 109, 97, 110, 121, 32, 67, 83, 86, 32, 102, 105, 108, 101, 115, 32, 97, 114, 101, 32, 115, 105, 109, 112, 108, 101, 32, 116, 111, 32, 112, 97, 114, 115, 101, 44, 10, 116, 104, 101, 32, 102, 111, 114, 109, 97, 116, 32, 105, 115, 32, 110, 111, 116, 32, 102, 111, 114, 109, 97, 108, 108, 121, 32, 100, 101, 102, 105, 110, 101, 100, 32, 98, 121, 32, 97, 32, 115, 116, 97, 98, 108, 101, 32, 115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 32, 97, 110, 100, 10, 105, 115, 32, 115, 117, 98, 116, 108, 101, 32, 101, 110, 111, 117, 103, 104, 32, 116, 104, 97, 116, 32, 112, 97, 114, 115, 105, 110, 103, 32, 108, 105, 110, 101, 115, 32, 111, 102, 32, 97, 32, 67, 83, 86, 32, 102, 105, 108, 101, 32, 119, 105, 116, 104, 32, 115, 111, 109, 101, 116, 104, 105, 110, 103, 10, 108, 105, 107, 101, 32, 108, 105, 110, 101, 46, 115, 112, 108, 105, 116, 40, 34, 44, 34, 41, 32, 105, 115, 32, 98, 111, 117, 110, 100, 32, 116, 111, 32, 102, 97, 105, 108, 46, 32, 32, 84, 104, 101, 32, 109, 111, 100, 117, 108, 101, 32, 115, 117, 112, 112, 111, 114, 116, 115, 32, 116, 104, 114, 101, 101, 10, 98, 97, 115, 105, 99, 32, 65, 80, 73, 115, 58, 32, 114, 101, 97, 100, 105, 110, 103, 44, 32, 119, 114, 105, 116, 105, 110, 103, 44, 32, 97, 110, 100, 32, 114, 101, 103, 105, 115, 116, 114, 97, 116, 105, 111, 110, 32, 111, 102, 32, 100, 105, 97, 108, 101, 99, 116, 115, 46, 10, 10, 10, 68, 73, 65, 76, 69, 67, 84, 32, 82, 69, 71, 73, 83, 84, 82, 65, 84, 73, 79, 78, 58, 10, 10, 82, 101, 97, 100, 101, 114, 115, 32, 97, 110, 100, 32, 119, 114, 105, 116, 101, 114, 115, 32, 115, 117, 112, 112, 111, 114, 116, 32, 97, 32, 100, 105, 97, 108, 101, 99, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 44, 32, 119, 104, 105, 99, 104, 32, 105, 115, 32, 97, 32, 99, 111, 110, 118, 101, 110, 105, 101, 110, 116, 10, 104, 97, 110, 100, 108, 101, 32, 111, 110, 32, 97, 32, 103, 114, 111, 117, 112, 32, 111, 102, 32, 115, 101, 116, 116, 105, 110, 103, 115, 46, 32, 32, 87, 104, 101, 110, 32, 116, 104, 101, 32, 100, 105, 97, 108, 101, 99, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 44, 10, 105, 116, 32, 105, 100, 101, 110, 116, 105, 102, 105, 101, 115, 32, 111, 110, 101, 32, 111, 102, 32, 116, 104, 101, 32, 100, 105, 97, 108, 101, 99, 116, 115, 32, 112, 114, 101, 118, 105, 111, 117, 115, 108, 121, 32, 114, 101, 103, 105, 115, 116, 101, 114, 101, 100, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 109, 111, 100, 117, 108, 101, 46, 10, 73, 102, 32, 105, 116, 32, 105, 115, 32, 97, 32, 99, 108, 97, 115, 115, 32, 111, 114, 32, 105, 110, 115, 116, 97, 110, 99, 101, 44, 32, 116, 104, 101, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 115, 32, 111, 102, 32, 116, 104, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 97, 114, 101, 32, 117, 115, 101, 100, 32, 97, 115, 10, 116, 104, 101, 32, 115, 101, 116, 116, 105, 110, 103, 115, 32, 102, 111, 114, 32, 116, 104, 101, 32, 114, 101, 97, 100, 101, 114, 32, 111, 114, 32, 119, 114, 105, 116, 101, 114, 58, 10, 10, 32, 32, 32, 32, 99, 108, 97, 115, 115, 32, 101, 120, 99, 101, 108, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 108, 105, 109, 105, 116, 101, 114, 32, 61, 32, 39, 44, 39, 10, 32, 32, 32, 32, 32, 32, 32, 32, 113, 117, 111, 116, 101, 99, 104, 97, 114, 32, 61, 32, 39, 34, 39, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 115, 99, 97, 112, 101, 99, 104, 97, 114, 32, 61, 32, 78, 111, 110, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 111, 117, 98, 108, 101, 113, 117, 111, 116, 101, 32, 61, 32, 84, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 107, 105, 112, 105, 110, 105, 116, 105, 97, 108, 115, 112, 97, 99, 101, 32, 61, 32, 70, 97, 108, 115, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 105, 110, 101, 116, 101, 114, 109, 105, 110, 97, 116, 111, 114, 32, 61, 32, 39, 92, 114, 92, 110, 39, 10, 32, 32, 32, 32, 32, 32, 32, 32, 113, 117, 111, 116, 105, 110, 103, 32, 61, 32, 81, 85, 79, 84, 69, 95, 77, 73, 78, 73, 77, 65, 76, 10, 10, 83, 69, 84, 84, 73, 78, 71, 83, 58, 10, 10, 32, 32, 32, 32, 42, 32, 113, 117, 111, 116, 101, 99, 104, 97, 114, 32, 45, 32, 115, 112, 101, 99, 105, 102, 105, 101, 115, 32, 97, 32, 111, 110, 101, 45, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 117, 115, 101, 32, 97, 115, 32, 116, 104, 101, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 113, 117, 111, 116, 105, 110, 103, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 46, 32, 32, 73, 116, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 39, 34, 39, 46, 10, 32, 32, 32, 32, 42, 32, 100, 101, 108, 105, 109, 105, 116, 101, 114, 32, 45, 32, 115, 112, 101, 99, 105, 102, 105, 101, 115, 32, 97, 32, 111, 110, 101, 45, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 117, 115, 101, 32, 97, 115, 32, 116, 104, 101, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 105, 101, 108, 100, 32, 115, 101, 112, 97, 114, 97, 116, 111, 114, 46, 32, 32, 73, 116, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 39, 44, 39, 46, 10, 32, 32, 32, 32, 42, 32, 115, 107, 105, 112, 105, 110, 105, 116, 105, 97, 108, 115, 112, 97, 99, 101, 32, 45, 32, 115, 112, 101, 99, 105, 102, 105, 101, 115, 32, 104, 111, 119, 32, 116, 111, 32, 105, 110, 116, 101, 114, 112, 114, 101, 116, 32, 119, 104, 105, 116, 101, 115, 112, 97, 99, 101, 32, 119, 104, 105, 99, 104, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 109, 109, 101, 100, 105, 97, 116, 101, 108, 121, 32, 102, 111, 108, 108, 111, 119, 115, 32, 97, 32, 100, 101, 108, 105, 109, 105, 116, 101, 114, 46, 32, 32, 73, 116, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 70, 97, 108, 115, 101, 44, 32, 119, 104, 105, 99, 104, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 97, 110, 115, 32, 116, 104, 97, 116, 32, 119, 104, 105, 116, 101, 115, 112, 97, 99, 101, 32, 105, 109, 109, 101, 100, 105, 97, 116, 101, 108, 121, 32, 102, 111, 108, 108, 111, 119, 105, 110, 103, 32, 97, 32, 100, 101, 108, 105, 109, 105, 116, 101, 114, 32, 105, 115, 32, 112, 97, 114, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 111, 102, 32, 116, 104, 101, 32, 102, 111, 108, 108, 111, 119, 105, 110, 103, 32, 102, 105, 101, 108, 100, 46, 10, 32, 32, 32, 32, 42, 32, 108, 105, 110, 101, 116, 101, 114, 109, 105, 110, 97, 116, 111, 114, 32, 45, 32, 32, 115, 112, 101, 99, 105, 102, 105, 101, 115, 32, 116, 104, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 119, 104, 105, 99, 104, 32, 115, 104, 111, 117, 108, 100, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 101, 114, 109, 105, 110, 97, 116, 101, 32, 114, 111, 119, 115, 46, 10, 32, 32, 32, 32, 42, 32, 113, 117, 111, 116, 105, 110, 103, 32, 45, 32, 99, 111, 110, 116, 114, 111, 108, 115, 32, 119, 104, 101, 110, 32, 113, 117, 111, 116, 101, 115, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 103, 101, 110, 101, 114, 97, 116, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 119, 114, 105, 116, 101, 114, 46, 10, 32, 32, 32, 32, 32, 32, 32, 32, 73, 116, 32, 99, 97, 110, 32, 116, 97, 107, 101, 32, 111, 110, 32, 97, 110, 121, 32, 111, 102, 32, 116, 104, 101, 32, 102, 111, 108, 108, 111, 119, 105, 110, 103, 32, 109, 111, 100, 117, 108, 101, 32, 99, 111, 110, 115, 116, 97, 110, 116, 115, 58, 10, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 115, 118, 46, 81, 85, 79, 84, 69, 95, 77, 73, 78, 73, 77, 65, 76, 32, 109, 101, 97, 110, 115, 32, 111, 110, 108, 121, 32, 119, 104, 101, 110, 32, 114, 101, 113, 117, 105, 114, 101, 100, 44, 32, 102, 111, 114, 32, 101, 120, 97, 109, 112, 108, 101, 44, 32, 119, 104, 101, 110, 32, 97, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 105, 101, 108, 100, 32, 99, 111, 110, 116, 97, 105, 110, 115, 32, 101, 105, 116, 104, 101, 114, 32, 116, 104, 101, 32, 113, 117, 111, 116, 101, 99, 104, 97, 114, 32, 111, 114, 32, 116, 104, 101, 32, 100, 101, 108, 105, 109, 105, 116, 101, 114, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 115, 118, 46, 81, 85, 79, 84, 69, 95, 65, 76, 76, 32, 109, 101, 97, 110, 115, 32, 116, 104, 97, 116, 32, 113, 117, 111, 116, 101, 115, 32, 97, 114, 101, 32, 97, 108, 119, 97, 121, 115, 32, 112, 108, 97, 99, 101, 100, 32, 97, 114, 111, 117, 110, 100, 32, 102, 105, 101, 108, 100, 115, 46, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 115, 118, 46, 81, 85, 79, 84, 69, 95, 78, 79, 78, 78, 85, 77, 69, 82, 73, 67, 32, 109, 101, 97, 110, 115, 32, 116, 104, 97, 116, 32, 113, 117, 111, 116, 101, 115, 32, 97, 114, 101, 32, 97, 108, 119, 97, 121, 115, 32, 112, 108, 97, 99, 101, 100, 32, 97, 114, 111, 117, 110, 100, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 105, 101, 108, 100, 115, 32, 119, 104, 105, 99, 104, 32, 100, 111, 32, 110, 111, 116, 32, 112, 97, 114, 115, 101, 32, 97, 115, 32, 105, 110, 116, 101, 103, 101, 114, 115, 32, 111, 114, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 109, 98, 101, 114, 115, 46, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 115, 118, 46, 81, 85, 79, 84, 69, 95, 78, 79, 78, 69, 32, 109, 101, 97, 110, 115, 32, 116, 104, 97, 116, 32, 113, 117, 111, 116, 101, 115, 32, 97, 114, 101, 32, 110, 101, 118, 101, 114, 32, 112, 108, 97, 99, 101, 100, 32, 97, 114, 111, 117, 110, 100, 32, 102, 105, 101, 108, 100, 115, 46, 10, 32, 32, 32, 32, 42, 32, 101, 115, 99, 97, 112, 101, 99, 104, 97, 114, 32, 45, 32, 115, 112, 101, 99, 105, 102, 105, 101, 115, 32, 97, 32, 111, 110, 101, 45, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 115, 116, 114, 105, 110, 103, 32, 117, 115, 101, 100, 32, 116, 111, 32, 101, 115, 99, 97, 112, 101, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 101, 32, 100, 101, 108, 105, 109, 105, 116, 101, 114, 32, 119, 104, 101, 110, 32, 113, 117, 111, 116, 105, 110, 103, 32, 105, 115, 32, 115, 101, 116, 32, 116, 111, 32, 81, 85, 79, 84, 69, 95, 78, 79, 78, 69, 46, 10, 32, 32, 32, 32, 42, 32, 100, 111, 117, 98, 108, 101, 113, 117, 111, 116, 101, 32, 45, 32, 99, 111, 110, 116, 114, 111, 108, 115, 32, 116, 104, 101, 32, 104, 97, 110, 100, 108, 105, 110, 103, 32, 111, 102, 32, 113, 117, 111, 116, 101, 115, 32, 105, 110, 115, 105, 100, 101, 32, 102, 105, 101, 108, 100, 115, 46, 32, 32, 87, 104, 101, 110, 10, 32, 32, 32, 32, 32, 32, 32, 32, 84, 114, 117, 101, 44, 32, 116, 119, 111, 32, 99, 111, 110, 115, 101, 99, 117, 116, 105, 118, 101, 32, 113, 117, 111, 116, 101, 115, 32, 97, 114, 101, 32, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 32, 97, 115, 32, 111, 110, 101, 32, 100, 117, 114, 105, 110, 103, 32, 114, 101, 97, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 110, 100, 32, 119, 104, 101, 110, 32, 119, 114, 105, 116, 105, 110, 103, 44, 32, 101, 97, 99, 104, 32, 113, 117, 111, 116, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 101, 109, 98, 101, 100, 100, 101, 100, 32, 105, 110, 32, 116, 104, 101, 32, 100, 97, 116, 97, 32, 105, 115, 10, 32, 32, 32, 32, 32, 32, 32, 32, 119, 114, 105, 116, 116, 101, 110, 32, 97, 115, 32, 116, 119, 111, 32, 113, 117, 111, 116, 101, 115, 10, 0 ], "i8", ALLOC_NORMAL);
    _csv_reader_doc = allocate([ 32, 32, 32, 32, 99, 115, 118, 95, 114, 101, 97, 100, 101, 114, 32, 61, 32, 114, 101, 97, 100, 101, 114, 40, 105, 116, 101, 114, 97, 98, 108, 101, 32, 91, 44, 32, 100, 105, 97, 108, 101, 99, 116, 61, 39, 101, 120, 99, 101, 108, 39, 93, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 91, 111, 112, 116, 105, 111, 110, 97, 108, 32, 107, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 115, 93, 41, 10, 32, 32, 32, 32, 102, 111, 114, 32, 114, 111, 119, 32, 105, 110, 32, 99, 115, 118, 95, 114, 101, 97, 100, 101, 114, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 112, 114, 111, 99, 101, 115, 115, 40, 114, 111, 119, 41, 10, 10, 84, 104, 101, 32, 34, 105, 116, 101, 114, 97, 98, 108, 101, 34, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 99, 97, 110, 32, 98, 101, 32, 97, 110, 121, 32, 111, 98, 106, 101, 99, 116, 32, 116, 104, 97, 116, 32, 114, 101, 116, 117, 114, 110, 115, 32, 97, 32, 108, 105, 110, 101, 10, 111, 102, 32, 105, 110, 112, 117, 116, 32, 102, 111, 114, 32, 101, 97, 99, 104, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 44, 32, 115, 117, 99, 104, 32, 97, 115, 32, 97, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 32, 111, 114, 32, 97, 32, 108, 105, 115, 116, 46, 32, 32, 84, 104, 101, 10, 111, 112, 116, 105, 111, 110, 97, 108, 32, 34, 100, 105, 97, 108, 101, 99, 116, 34, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 105, 115, 32, 100, 105, 115, 99, 117, 115, 115, 101, 100, 32, 98, 101, 108, 111, 119, 46, 32, 32, 84, 104, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 10, 97, 108, 115, 111, 32, 97, 99, 99, 101, 112, 116, 115, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 107, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 119, 104, 105, 99, 104, 32, 111, 118, 101, 114, 114, 105, 100, 101, 32, 115, 101, 116, 116, 105, 110, 103, 115, 10, 112, 114, 111, 118, 105, 100, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 100, 105, 97, 108, 101, 99, 116, 46, 10, 10, 84, 104, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 105, 115, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 46, 32, 32, 69, 97, 99, 104, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 32, 114, 101, 116, 117, 114, 110, 115, 32, 97, 32, 114, 111, 119, 10, 111, 102, 32, 116, 104, 101, 32, 67, 83, 86, 32, 102, 105, 108, 101, 32, 40, 119, 104, 105, 99, 104, 32, 99, 97, 110, 32, 115, 112, 97, 110, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 105, 110, 112, 117, 116, 32, 108, 105, 110, 101, 115, 41, 58, 10, 0 ], "i8", ALLOC_NORMAL);
    _csv_writer_doc = allocate([ 32, 32, 32, 32, 99, 115, 118, 95, 119, 114, 105, 116, 101, 114, 32, 61, 32, 99, 115, 118, 46, 119, 114, 105, 116, 101, 114, 40, 102, 105, 108, 101, 111, 98, 106, 32, 91, 44, 32, 100, 105, 97, 108, 101, 99, 116, 61, 39, 101, 120, 99, 101, 108, 39, 93, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 91, 111, 112, 116, 105, 111, 110, 97, 108, 32, 107, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 115, 93, 41, 10, 32, 32, 32, 32, 102, 111, 114, 32, 114, 111, 119, 32, 105, 110, 32, 115, 101, 113, 117, 101, 110, 99, 101, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 115, 118, 95, 119, 114, 105, 116, 101, 114, 46, 119, 114, 105, 116, 101, 114, 111, 119, 40, 114, 111, 119, 41, 10, 10, 32, 32, 32, 32, 91, 111, 114, 93, 10, 10, 32, 32, 32, 32, 99, 115, 118, 95, 119, 114, 105, 116, 101, 114, 32, 61, 32, 99, 115, 118, 46, 119, 114, 105, 116, 101, 114, 40, 102, 105, 108, 101, 111, 98, 106, 32, 91, 44, 32, 100, 105, 97, 108, 101, 99, 116, 61, 39, 101, 120, 99, 101, 108, 39, 93, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 91, 111, 112, 116, 105, 111, 110, 97, 108, 32, 107, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 115, 93, 41, 10, 32, 32, 32, 32, 99, 115, 118, 95, 119, 114, 105, 116, 101, 114, 46, 119, 114, 105, 116, 101, 114, 111, 119, 115, 40, 114, 111, 119, 115, 41, 10, 10, 84, 104, 101, 32, 34, 102, 105, 108, 101, 111, 98, 106, 34, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 99, 97, 110, 32, 98, 101, 32, 97, 110, 121, 32, 111, 98, 106, 101, 99, 116, 32, 116, 104, 97, 116, 32, 115, 117, 112, 112, 111, 114, 116, 115, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 65, 80, 73, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _csv_list_dialects_doc = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 108, 105, 115, 116, 32, 111, 102, 32, 97, 108, 108, 32, 107, 110, 111, 119, 32, 100, 105, 97, 108, 101, 99, 116, 32, 110, 97, 109, 101, 115, 46, 10, 32, 32, 32, 32, 110, 97, 109, 101, 115, 32, 61, 32, 99, 115, 118, 46, 108, 105, 115, 116, 95, 100, 105, 97, 108, 101, 99, 116, 115, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    _csv_get_dialect_doc = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 100, 105, 97, 108, 101, 99, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 97, 115, 115, 111, 99, 105, 97, 116, 101, 100, 32, 119, 105, 116, 104, 32, 110, 97, 109, 101, 46, 10, 32, 32, 32, 32, 100, 105, 97, 108, 101, 99, 116, 32, 61, 32, 99, 115, 118, 46, 103, 101, 116, 95, 100, 105, 97, 108, 101, 99, 116, 40, 110, 97, 109, 101, 41, 0 ], "i8", ALLOC_NORMAL);
    _csv_register_dialect_doc = allocate([ 67, 114, 101, 97, 116, 101, 32, 97, 32, 109, 97, 112, 112, 105, 110, 103, 32, 102, 114, 111, 109, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 110, 97, 109, 101, 32, 116, 111, 32, 97, 32, 100, 105, 97, 108, 101, 99, 116, 32, 99, 108, 97, 115, 115, 46, 10, 32, 32, 32, 32, 100, 105, 97, 108, 101, 99, 116, 32, 61, 32, 99, 115, 118, 46, 114, 101, 103, 105, 115, 116, 101, 114, 95, 100, 105, 97, 108, 101, 99, 116, 40, 110, 97, 109, 101, 44, 32, 100, 105, 97, 108, 101, 99, 116, 41, 0 ], "i8", ALLOC_NORMAL);
    _csv_unregister_dialect_doc = allocate([ 68, 101, 108, 101, 116, 101, 32, 116, 104, 101, 32, 110, 97, 109, 101, 47, 100, 105, 97, 108, 101, 99, 116, 32, 109, 97, 112, 112, 105, 110, 103, 32, 97, 115, 115, 111, 99, 105, 97, 116, 101, 100, 32, 119, 105, 116, 104, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 110, 97, 109, 101, 46, 10, 32, 32, 32, 32, 99, 115, 118, 46, 117, 110, 114, 101, 103, 105, 115, 116, 101, 114, 95, 100, 105, 97, 108, 101, 99, 116, 40, 110, 97, 109, 101, 41, 0 ], "i8", ALLOC_NORMAL);
    _csv_field_size_limit_doc = allocate([ 83, 101, 116, 115, 32, 97, 110, 32, 117, 112, 112, 101, 114, 32, 108, 105, 109, 105, 116, 32, 111, 110, 32, 112, 97, 114, 115, 101, 100, 32, 102, 105, 101, 108, 100, 115, 46, 10, 32, 32, 32, 32, 99, 115, 118, 46, 102, 105, 101, 108, 100, 95, 115, 105, 122, 101, 95, 108, 105, 109, 105, 116, 40, 91, 108, 105, 109, 105, 116, 93, 41, 10, 10, 82, 101, 116, 117, 114, 110, 115, 32, 111, 108, 100, 32, 108, 105, 109, 105, 116, 46, 32, 73, 102, 32, 108, 105, 109, 105, 116, 32, 105, 115, 32, 110, 111, 116, 32, 103, 105, 118, 101, 110, 44, 32, 110, 111, 32, 110, 101, 119, 32, 108, 105, 109, 105, 116, 32, 105, 115, 32, 115, 101, 116, 32, 97, 110, 100, 10, 116, 104, 101, 32, 111, 108, 100, 32, 108, 105, 109, 105, 116, 32, 105, 115, 32, 114, 101, 116, 117, 114, 110, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 114, 101, 97, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 119, 114, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 108, 105, 115, 116, 95, 100, 105, 97, 108, 101, 99, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 114, 101, 103, 105, 115, 116, 101, 114, 95, 100, 105, 97, 108, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 117, 110, 114, 101, 103, 105, 115, 116, 101, 114, 95, 100, 105, 97, 108, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 103, 101, 116, 95, 100, 105, 97, 108, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _csv_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str54 = allocate([ 95, 99, 115, 118, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 95, 95, 118, 101, 114, 115, 105, 111, 110, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 49, 46, 48, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 95, 100, 105, 97, 108, 101, 99, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 68, 105, 97, 108, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 95, 99, 115, 118, 46, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_quote_styles + 4] = __str;
    HEAP[_quote_styles + 12] = __str1;
    HEAP[_quote_styles + 20] = __str2;
    HEAP[_quote_styles + 28] = __str3;
    HEAP[_Dialect_memberlist] = __str9;
    HEAP[_Dialect_memberlist + 20] = __str10;
    HEAP[_Dialect_memberlist + 40] = __str11;
    HEAP[_Dialect_memberlist + 60] = __str12;
    HEAP[_Dialect_getsetlist] = __str13;
    HEAP[_Dialect_getsetlist + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_Dialect_getsetlist + 20] = __str14;
    HEAP[_Dialect_getsetlist + 24] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_Dialect_getsetlist + 40] = __str15;
    HEAP[_Dialect_getsetlist + 44] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_Dialect_getsetlist + 60] = __str16;
    HEAP[_Dialect_getsetlist + 64] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_dialect_kws] = __str17;
    HEAP[_dialect_kws + 4] = __str9;
    HEAP[_dialect_kws + 8] = __str11;
    HEAP[_dialect_kws + 12] = __str13;
    HEAP[_dialect_kws + 16] = __str14;
    HEAP[_dialect_kws + 20] = __str15;
    HEAP[_dialect_kws + 24] = __str16;
    HEAP[_dialect_kws + 28] = __str10;
    HEAP[_dialect_kws + 32] = __str12;
    HEAP[_Dialect_Type + 12] = __str23;
    HEAP[_Dialect_Type + 24] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_Dialect_Type + 88] = _Dialect_Type_doc;
    HEAP[_Dialect_Type + 120] = _Dialect_memberlist;
    HEAP[_Dialect_Type + 124] = _Dialect_getsetlist;
    HEAP[_Dialect_Type + 156] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_Reader_memberlist] = __str17;
    HEAP[_Reader_memberlist + 20] = __str31;
    HEAP[_Reader_Type + 12] = __str32;
    HEAP[_Reader_Type + 24] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_Reader_Type + 88] = _Reader_Type_doc;
    HEAP[_Reader_Type + 92] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_Reader_Type + 96] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_Reader_Type + 108] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_Reader_Type + 112] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_Reader_Type + 116] = _Reader_methods;
    HEAP[_Reader_Type + 120] = _Reader_memberlist;
    HEAP[_Writer_methods] = __str40;
    HEAP[_Writer_methods + 4] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_Writer_methods + 12] = _csv_writerow_doc;
    HEAP[_Writer_methods + 16] = __str41;
    HEAP[_Writer_methods + 20] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_Writer_methods + 28] = _csv_writerows_doc;
    HEAP[_Writer_memberlist] = __str17;
    HEAP[_Writer_Type + 12] = __str42;
    HEAP[_Writer_Type + 24] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_Writer_Type + 88] = _Writer_Type_doc;
    HEAP[_Writer_Type + 92] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_Writer_Type + 96] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_Writer_Type + 116] = _Writer_methods;
    HEAP[_Writer_Type + 120] = _Writer_memberlist;
    HEAP[_csv_methods] = __str48;
    HEAP[_csv_methods + 4] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_csv_methods + 12] = _csv_reader_doc;
    HEAP[_csv_methods + 16] = __str49;
    HEAP[_csv_methods + 20] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_csv_methods + 28] = _csv_writer_doc;
    HEAP[_csv_methods + 32] = __str50;
    HEAP[_csv_methods + 36] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_csv_methods + 44] = _csv_list_dialects_doc;
    HEAP[_csv_methods + 48] = __str51;
    HEAP[_csv_methods + 52] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_csv_methods + 60] = _csv_register_dialect_doc;
    HEAP[_csv_methods + 64] = __str52;
    HEAP[_csv_methods + 68] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_csv_methods + 76] = _csv_unregister_dialect_doc;
    HEAP[_csv_methods + 80] = __str53;
    HEAP[_csv_methods + 84] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_csv_methods + 92] = _csv_get_dialect_doc;
    HEAP[_csv_methods + 96] = __str46;
    HEAP[_csv_methods + 100] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_csv_methods + 108] = _csv_field_size_limit_doc;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
