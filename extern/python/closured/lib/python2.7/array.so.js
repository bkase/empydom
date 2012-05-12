"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 60;
  var $1___SIZE = 20;
  var $2___SIZE = 20;
  var $3___SIZE = 384;
  var $4___SIZE = 16;
  var $5___SIZE = 24;
  var $6___SIZE = 196;
  var $7___SIZE = 196;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PySliceObject___SIZE = 20;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_PyUnicodeObject___SIZE = 24;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_arraydescr___SIZE = 16;
  var $struct_arrayiterobject___SIZE = 20;
  var $struct_arrayobject___SIZE = 28;
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
  var _descriptors;
  var __str15;
  var __str16;
  var ___PRETTY_FUNCTION___8806;
  var __str17;
  var __str18;
  var _copy_doc;
  var __str19;
  var __str20;
  var __str21;
  var __str22;
  var ___PRETTY_FUNCTION___9418;
  var __str23;
  var __str24;
  var _count_doc;
  var __str25;
  var _index_doc;
  var __str26;
  var _remove_doc;
  var __str27;
  var __str28;
  var __str29;
  var _pop_doc;
  var _extend_doc;
  var __str30;
  var _insert_doc;
  var _buffer_info_doc;
  var _append_doc;
  var __str31;
  var _byteswap_doc;
  var __str32;
  var ___PRETTY_FUNCTION___9957;
  var _reverse_doc;
  var __str33;
  var __str34;
  var __str35;
  var _fromfile_doc;
  var __str36;
  var __str37;
  var _tofile_doc;
  var __str38;
  var __str39;
  var _fromlist_doc;
  var _tolist_doc;
  var __str40;
  var __str41;
  var _fromstring_doc;
  var _tostring_doc;
  var __str42;
  var __str43;
  var _fromunicode_doc;
  var __str44;
  var _tounicode_doc;
  var __str45;
  var __str46;
  var _reduce_doc;
  var __str47;
  var __str48;
  var __str49;
  var __str50;
  var _array_getsets;
  var __str51;
  var __str52;
  var __str53;
  var __str54;
  var __str55;
  var __str56;
  var __str57;
  var __str58;
  var __str59;
  var __str60;
  var __str61;
  var __str62;
  var __str63;
  var __str64;
  var __str65;
  var __str66;
  var __str67;
  var __str68;
  var __str69;
  var __str70;
  var __str71;
  var __str72;
  var __str73;
  var _array_methods;
  var __str74;
  var __str75;
  var __str76;
  var __str77;
  var __str78;
  var __str79;
  var _array_as_mapping;
  var _emptybuf;
  var __str80;
  var __str81;
  var _array_as_sequence;
  var _array_as_buffer;
  var __str82;
  var __str83;
  var __str84;
  var _module_doc;
  var _arraytype_doc;
  var __str85;
  var _Arraytype;
  var __str86;
  var ___PRETTY_FUNCTION___11336;
  var __str87;
  var _PyArrayIter_Type;
  var _a_methods;
  var __str88;
  var __str89;
  function _array_resize($self, $newsize) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $newsize_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_6 = __stackBase__ + 12;
      var $iftmp_5 = __stackBase__ + 16;
      var $iftmp_4 = __stackBase__ + 20;
      var $iftmp_2 = __stackBase__ + 24;
      var $0 = __stackBase__ + 28;
      var $items = __stackBase__ + 32;
      var $_new_size = __stackBase__ + 36;
      
      HEAP[$self_addr] = $self;
      HEAP[$newsize_addr] = $newsize;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] >= HEAP[$newsize_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] < HEAP[$newsize_addr] + 16) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $19 = HEAP[$self_addr] + 8;
      var $20 = HEAP[$newsize_addr];
      HEAP[$19] = $20;
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 4:
      
      var $22 = HEAP[$newsize_addr] >> 4;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] <= 7) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$iftmp_2] = 3;
      __label__ = 7;
      break;
     case 6:
      HEAP[$iftmp_2] = 7;
      __label__ = 7;
      break;
     case 7:
      
      
      
      var $31 = $22 + HEAP[$iftmp_2] + HEAP[$newsize_addr];
      HEAP[$_new_size] = $31;
      
      
      var $34 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$items] = $34;
      
      
      
      
      var $39 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      var $40 = Math.floor(4294967295 / $39);
      
      
      if ($40 >= HEAP[$_new_size]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] * HEAP[$_new_size] >= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] * HEAP[$_new_size] >= 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] * HEAP[$_new_size] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4] * HEAP[$_new_size];
      HEAP[$iftmp_6] = $73;
      __label__ = 13;
      break;
     case 12:
      HEAP[$iftmp_6] = 1;
      __label__ = 13;
      break;
     case 13:
      var $74 = HEAP[$items];
      var $75 = HEAP[$iftmp_6];
      var $76 = _realloc($74, $75);
      HEAP[$iftmp_5] = $76;
      __label__ = 15;
      break;
     case 14:
      HEAP[$iftmp_5] = 0;
      __label__ = 15;
      break;
     case 15:
      var $77 = HEAP[$iftmp_5];
      HEAP[$iftmp_4] = $77;
      __label__ = 17;
      break;
     case 16:
      HEAP[$iftmp_4] = 0;
      __label__ = 17;
      break;
     case 17:
      var $78 = HEAP[$iftmp_4];
      HEAP[$items] = $78;
      __label__ = 19;
      break;
     case 18:
      HEAP[$items] = 0;
      __label__ = 19;
      break;
     case 19:
      
      
      if (HEAP[$items] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $81 = _PyErr_NoMemory();
      HEAP[$0] = -1;
      __label__ = 22;
      break;
     case 21:
      
      var $83 = HEAP[$self_addr] + 12;
      var $84 = HEAP[$items];
      HEAP[$83] = $84;
      
      
      var $87 = HEAP[$self_addr] + 8;
      var $88 = HEAP[$newsize_addr];
      HEAP[$87] = $88;
      var $89 = HEAP[$_new_size];
      
      var $91 = HEAP[$self_addr] + 16;
      HEAP[$91] = $89;
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 22:
      var $92 = HEAP[$0];
      HEAP[$retval] = $92;
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
  function _c_getitem($ap, $i) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      
      
      
      
      var $5 = HEAP[HEAP[$ap_addr] + 12] + HEAP[$i_addr];
      var $6 = _PyString_FromStringAndSize($5, 1);
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
  function _c_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 21;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 21);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $v_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      HEAP[$v_addr] = $v;
      var $1 = HEAP[$v_addr];
      var $2 = __PyArg_Parse_SizeT($1, __str, allocate([ $x, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if (HEAP[$i_addr] >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $9 = HEAP[$x];
      
      var $11 = HEAP[HEAP[$ap_addr] + 12] + HEAP[$i_addr];
      HEAP[$11] = $9;
      __label__ = 4;
      break;
     case 4:
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $12 = HEAP[$0];
      HEAP[$retval] = $12;
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
  function _b_getitem($ap, $i) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      
      
      
      
      
      
      var $7 = HEAP[HEAP[HEAP[$ap_addr] + 12] + HEAP[$i_addr]];
      HEAP[$x] = $7;
      
      
      if (HEAP[$x] > 127) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $11 = HEAP[$x] - 256;
      HEAP[$x] = $11;
      __label__ = 2;
      break;
     case 2:
      var $12 = HEAP[$x];
      var $13 = _PyInt_FromLong($12);
      HEAP[$0] = $13;
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
  function _b_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 22;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 22);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $v_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      HEAP[$v_addr] = $v;
      var $1 = HEAP[$v_addr];
      var $2 = __PyArg_Parse_SizeT($1, __str1, allocate([ $x, 0, 0, 0 ], [ "i16*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      var $5 = HEAP[$x] < -128;
      if ($5) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($6, __str2);
      HEAP[$0] = -1;
      __label__ = 9;
      break;
     case 4:
      
      
      if (HEAP[$x] > 127) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $9 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($9, __str3);
      HEAP[$0] = -1;
      __label__ = 9;
      break;
     case 6:
      
      
      if (HEAP[$i_addr] >= 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $16 = HEAP[$x] & 255;
      
      var $18 = HEAP[HEAP[$ap_addr] + 12] + HEAP[$i_addr];
      HEAP[$18] = $16;
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 9:
      var $19 = HEAP[$0];
      HEAP[$retval] = $19;
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
  function _BB_getitem($ap, $i) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      
      
      
      
      
      
      var $7 = HEAP[HEAP[HEAP[$ap_addr] + 12] + HEAP[$i_addr]];
      HEAP[$x] = $7;
      var $8 = HEAP[$x];
      var $9 = _PyInt_FromLong($8);
      HEAP[$0] = $9;
      var $10 = HEAP[$0];
      HEAP[$retval] = $10;
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
  function _BB_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 21;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 21);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $v_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      HEAP[$v_addr] = $v;
      var $1 = HEAP[$v_addr];
      var $2 = __PyArg_Parse_SizeT($1, __str4, allocate([ $x, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if (HEAP[$i_addr] >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $9 = HEAP[$x];
      
      var $11 = HEAP[HEAP[$ap_addr] + 12] + HEAP[$i_addr];
      HEAP[$11] = $9;
      __label__ = 4;
      break;
     case 4:
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $12 = HEAP[$0];
      HEAP[$retval] = $12;
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
  function _u_getitem($ap, $i) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      
      
      
      
      
      var $6 = HEAP[HEAP[$ap_addr] + 12] + 2 * HEAP[$i_addr];
      var $7 = _PyUnicodeUCS2_FromUnicode($6, 1);
      HEAP[$0] = $7;
      var $8 = HEAP[$0];
      HEAP[$retval] = $8;
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
  function _u_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $v_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $p = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      HEAP[$v_addr] = $v;
      var $1 = HEAP[$v_addr];
      var $2 = __PyArg_Parse_SizeT($1, __str5, allocate([ $p, 0, 0, 0, $len, 0, 0, 0 ], [ "i16**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if (HEAP[$len] != 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($6, __str6);
      HEAP[$0] = -1;
      __label__ = 7;
      break;
     case 4:
      
      
      if (HEAP[$i_addr] >= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $15 = HEAP[HEAP[$p]];
      
      var $17 = HEAP[HEAP[$ap_addr] + 12] + 2 * HEAP[$i_addr];
      HEAP[$17] = $15;
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $18 = HEAP[$0];
      HEAP[$retval] = $18;
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
  function _h_getitem($ap, $i) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      
      
      
      
      
      
      
      var $8 = HEAP[HEAP[HEAP[$ap_addr] + 12] + 2 * HEAP[$i_addr]];
      var $9 = _PyInt_FromLong($8);
      HEAP[$0] = $9;
      var $10 = HEAP[$0];
      HEAP[$retval] = $10;
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
  function _h_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 22;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 22);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $v_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      HEAP[$v_addr] = $v;
      var $1 = HEAP[$v_addr];
      var $2 = __PyArg_Parse_SizeT($1, __str1, allocate([ $x, 0, 0, 0 ], [ "i16*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if (HEAP[$i_addr] >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $10 = HEAP[$x];
      
      var $12 = HEAP[HEAP[$ap_addr] + 12] + 2 * HEAP[$i_addr];
      HEAP[$12] = $10;
      __label__ = 4;
      break;
     case 4:
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $13 = HEAP[$0];
      HEAP[$retval] = $13;
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
  function _HH_getitem($ap, $i) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      
      
      
      
      
      
      
      var $8 = HEAP[HEAP[HEAP[$ap_addr] + 12] + 2 * HEAP[$i_addr]];
      var $9 = _PyInt_FromLong($8);
      HEAP[$0] = $9;
      var $10 = HEAP[$0];
      HEAP[$retval] = $10;
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
  function _HH_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $v_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      HEAP[$v_addr] = $v;
      var $1 = HEAP[$v_addr];
      var $2 = __PyArg_Parse_SizeT($1, __str7, allocate([ $x, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if (HEAP[$x] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($6, __str8);
      HEAP[$0] = -1;
      __label__ = 9;
      break;
     case 4:
      
      
      if (HEAP[$x] > 65535) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $9 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($9, __str9);
      HEAP[$0] = -1;
      __label__ = 9;
      break;
     case 6:
      
      
      if (HEAP[$i_addr] >= 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      var $17 = HEAP[$x] & 65535;
      
      var $19 = HEAP[HEAP[$ap_addr] + 12] + 2 * HEAP[$i_addr];
      HEAP[$19] = $17;
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = 0;
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
  function _i_getitem($ap, $i) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      
      
      
      
      
      
      var $7 = HEAP[HEAP[HEAP[$ap_addr] + 12] + 4 * HEAP[$i_addr]];
      var $8 = _PyInt_FromLong($7);
      HEAP[$0] = $8;
      var $9 = HEAP[$0];
      HEAP[$retval] = $9;
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
  function _i_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $v_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      HEAP[$v_addr] = $v;
      var $1 = HEAP[$v_addr];
      var $2 = __PyArg_Parse_SizeT($1, __str7, allocate([ $x, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if (HEAP[$i_addr] >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $10 = HEAP[$x];
      
      var $12 = HEAP[HEAP[$ap_addr] + 12] + 4 * HEAP[$i_addr];
      HEAP[$12] = $10;
      __label__ = 4;
      break;
     case 4:
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $13 = HEAP[$0];
      HEAP[$retval] = $13;
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
  function _II_getitem($ap, $i) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      
      
      
      
      
      
      var $7 = HEAP[HEAP[HEAP[$ap_addr] + 12] + 4 * HEAP[$i_addr]];
      var $8 = _PyLong_FromUnsignedLong($7);
      HEAP[$0] = $8;
      var $9 = HEAP[$0];
      HEAP[$retval] = $9;
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
  function _II_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $v_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      var $y = __stackBase__ + 24;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      HEAP[$v_addr] = $v;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 16777216) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      var $8 = HEAP[$v_addr];
      var $9 = _PyLong_AsUnsignedLong($8);
      HEAP[$x] = $9;
      
      var $11 = HEAP[$x] == -1;
      if ($11) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      var $12 = _PyErr_Occurred();
      
      if ($12 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 4:
      __label__ = 10;
      break;
     case 5:
      var $14 = HEAP[$v_addr];
      var $15 = __PyArg_Parse_SizeT($14, __str10, allocate([ $y, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($15 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 7:
      
      
      if (HEAP[$y] < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $19 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($19, __str11);
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 9:
      var $20 = HEAP[$y];
      HEAP[$x] = $20;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$i_addr] >= 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      var $28 = HEAP[HEAP[$ap_addr] + 12] + 4 * HEAP[$i_addr];
      var $29 = HEAP[$x];
      HEAP[$28] = $29;
      __label__ = 12;
      break;
     case 12:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 13:
      var $30 = HEAP[$0];
      HEAP[$retval] = $30;
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
  function _l_getitem($ap, $i) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      
      
      
      
      
      
      var $7 = HEAP[HEAP[HEAP[$ap_addr] + 12] + 4 * HEAP[$i_addr]];
      var $8 = _PyInt_FromLong($7);
      HEAP[$0] = $8;
      var $9 = HEAP[$0];
      HEAP[$retval] = $9;
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
  function _l_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $v_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      HEAP[$v_addr] = $v;
      var $1 = HEAP[$v_addr];
      var $2 = __PyArg_Parse_SizeT($1, __str10, allocate([ $x, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if (HEAP[$i_addr] >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $10 = HEAP[$x];
      
      var $12 = HEAP[HEAP[$ap_addr] + 12] + 4 * HEAP[$i_addr];
      HEAP[$12] = $10;
      __label__ = 4;
      break;
     case 4:
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $13 = HEAP[$0];
      HEAP[$retval] = $13;
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
  function _LL_getitem($ap, $i) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      
      
      
      
      
      
      var $7 = HEAP[HEAP[HEAP[$ap_addr] + 12] + 4 * HEAP[$i_addr]];
      var $8 = _PyLong_FromUnsignedLong($7);
      HEAP[$0] = $8;
      var $9 = HEAP[$0];
      HEAP[$retval] = $9;
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
  function _LL_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $v_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      var $y = __stackBase__ + 24;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      HEAP[$v_addr] = $v;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 16777216) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      var $8 = HEAP[$v_addr];
      var $9 = _PyLong_AsUnsignedLong($8);
      HEAP[$x] = $9;
      
      var $11 = HEAP[$x] == -1;
      if ($11) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      var $12 = _PyErr_Occurred();
      
      if ($12 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 4:
      __label__ = 10;
      break;
     case 5:
      var $14 = HEAP[$v_addr];
      var $15 = __PyArg_Parse_SizeT($14, __str10, allocate([ $y, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($15 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 7:
      
      
      if (HEAP[$y] < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $19 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($19, __str12);
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 9:
      var $20 = HEAP[$y];
      HEAP[$x] = $20;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$i_addr] >= 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      var $28 = HEAP[HEAP[$ap_addr] + 12] + 4 * HEAP[$i_addr];
      var $29 = HEAP[$x];
      HEAP[$28] = $29;
      __label__ = 12;
      break;
     case 12:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 13:
      var $30 = HEAP[$0];
      HEAP[$retval] = $30;
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
  function _f_getitem($ap, $i) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      
      
      
      
      
      
      
      var $8 = HEAP[HEAP[HEAP[$ap_addr] + 12] + 4 * HEAP[$i_addr]];
      var $9 = _PyFloat_FromDouble($8);
      HEAP[$0] = $9;
      var $10 = HEAP[$0];
      HEAP[$retval] = $10;
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
  function _f_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $v_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      HEAP[$v_addr] = $v;
      var $1 = HEAP[$v_addr];
      var $2 = __PyArg_Parse_SizeT($1, __str13, allocate([ $x, 0, 0, 0 ], [ "float*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if (HEAP[$i_addr] >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $10 = HEAP[$x];
      
      var $12 = HEAP[HEAP[$ap_addr] + 12] + 4 * HEAP[$i_addr];
      HEAP[$12] = $10;
      __label__ = 4;
      break;
     case 4:
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $13 = HEAP[$0];
      HEAP[$retval] = $13;
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
  function _d_getitem($ap, $i) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      
      
      
      
      
      
      var $7 = HEAP[HEAP[HEAP[$ap_addr] + 12] + 8 * HEAP[$i_addr]];
      var $8 = _PyFloat_FromDouble($7);
      HEAP[$0] = $8;
      var $9 = HEAP[$0];
      HEAP[$retval] = $9;
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
  function _d_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $v_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$ap_addr] = $ap;
      HEAP[$i_addr] = $i;
      HEAP[$v_addr] = $v;
      var $1 = HEAP[$v_addr];
      var $2 = __PyArg_Parse_SizeT($1, __str14, allocate([ $x, 0, 0, 0 ], [ "double*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if (HEAP[$i_addr] >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $10 = HEAP[$x];
      
      var $12 = HEAP[HEAP[$ap_addr] + 12] + 8 * HEAP[$i_addr];
      HEAP[$12] = $10;
      __label__ = 4;
      break;
     case 4:
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $13 = HEAP[$0];
      HEAP[$retval] = $13;
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
  function _newarrayobject($type, $size, $descr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $size_addr = __stackBase__ + 4;
      var $descr_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $iftmp_44 = __stackBase__ + 16;
      var $iftmp_42 = __stackBase__ + 20;
      var $iftmp_40 = __stackBase__ + 24;
      var $0 = __stackBase__ + 28;
      var $op = __stackBase__ + 32;
      var $nbytes = __stackBase__ + 36;
      
      HEAP[$type_addr] = $type;
      HEAP[$size_addr] = $size;
      HEAP[$descr_addr] = $descr;
      
      
      if (HEAP[$size_addr] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      __PyErr_BadInternalCall(__str15, 422);
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 2:
      
      
      
      
      var $7 = HEAP[HEAP[$descr_addr] + 4] * HEAP[$size_addr];
      HEAP[$nbytes] = $7;
      
      
      var $10 = HEAP[HEAP[$descr_addr] + 4];
      var $11 = HEAP[$nbytes];
      var $12 = Math.floor($11 / $10);
      
      
      if ($12 != HEAP[$size_addr]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $15 = _PyErr_NoMemory();
      HEAP[$0] = $15;
      __label__ = 22;
      break;
     case 4:
      
      
      var $18 = HEAP[HEAP[$type_addr] + 152];
      var $19 = HEAP[$type_addr];
      var $20 = FUNCTION_TABLE[$18]($19, 0);
      var $21 = $20;
      HEAP[$op] = $21;
      
      
      if (HEAP[$op] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 6:
      
      var $25 = HEAP[$op] + 20;
      var $26 = HEAP[$descr_addr];
      HEAP[$25] = $26;
      
      var $28 = HEAP[$op] + 16;
      var $29 = HEAP[$size_addr];
      HEAP[$28] = $29;
      
      var $31 = HEAP[$op] + 24;
      HEAP[$31] = 0;
      
      
      var $34 = HEAP[$op] + 8;
      var $35 = HEAP[$size_addr];
      HEAP[$34] = $35;
      
      
      if (HEAP[$size_addr] <= 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      var $39 = HEAP[$op] + 12;
      HEAP[$39] = 0;
      __label__ = 21;
      break;
     case 8:
      
      
      if (HEAP[$nbytes] >= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 9:
      
      
      if (HEAP[$nbytes] >= 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      
      
      if (HEAP[$nbytes] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $46 = HEAP[$nbytes];
      HEAP[$iftmp_44] = $46;
      __label__ = 13;
      break;
     case 12:
      HEAP[$iftmp_44] = 1;
      __label__ = 13;
      break;
     case 13:
      var $47 = HEAP[$iftmp_44];
      var $48 = _malloc($47);
      HEAP[$iftmp_42] = $48;
      __label__ = 15;
      break;
     case 14:
      HEAP[$iftmp_42] = 0;
      __label__ = 15;
      break;
     case 15:
      var $49 = HEAP[$iftmp_42];
      HEAP[$iftmp_40] = $49;
      __label__ = 17;
      break;
     case 16:
      HEAP[$iftmp_40] = 0;
      __label__ = 17;
      break;
     case 17:
      
      var $51 = HEAP[$op] + 12;
      var $52 = HEAP[$iftmp_40];
      HEAP[$51] = $52;
      
      
      
      
      if (HEAP[HEAP[$op] + 12] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      
      var $58 = HEAP[$op];
      
      
      var $61 = HEAP[$58] - 1;
      var $62 = $58;
      HEAP[$62] = $61;
      
      
      
      if (HEAP[$58] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      var $71 = HEAP[HEAP[HEAP[$op] + 4] + 24];
      
      var $73 = HEAP[$op];
      FUNCTION_TABLE[$71]($73);
      __label__ = 20;
      break;
     case 20:
      var $74 = _PyErr_NoMemory();
      HEAP[$0] = $74;
      __label__ = 22;
      break;
     case 21:
      
      var $76 = HEAP[$op];
      HEAP[$0] = $76;
      __label__ = 22;
      break;
     case 22:
      var $77 = HEAP[$0];
      HEAP[$retval] = $77;
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
  function _getarrayitem($op, $i) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $op_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $ap = __stackBase__ + 16;
      
      HEAP[$op_addr] = $op;
      HEAP[$i_addr] = $i;
      
      
      
      
      if (HEAP[HEAP[$op_addr] + 4] != _Arraytype) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$op_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _Arraytype);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str16, __str15, 456, ___PRETTY_FUNCTION___8806);
      throw "Reached an unreachable!";
     case 3:
      
      var $11 = HEAP[$op_addr];
      HEAP[$ap] = $11;
      
      
      if (HEAP[$i_addr] < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      if (HEAP[HEAP[$ap] + 8] <= HEAP[$i_addr]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str17, __str15, 458, ___PRETTY_FUNCTION___8806);
      throw "Reached an unreachable!";
     case 6:
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[$ap] + 20] + 8];
      var $25 = HEAP[$ap];
      var $26 = HEAP[$i_addr];
      var $27 = FUNCTION_TABLE[$24]($25, $26);
      HEAP[$0] = $27;
      var $28 = HEAP[$0];
      HEAP[$retval] = $28;
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
  function _ins1($self, $where, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $where_addr = __stackBase__ + 4;
      var $v_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $items = __stackBase__ + 20;
      var $n = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$where_addr] = $where;
      HEAP[$v_addr] = $v;
      
      
      
      var $4 = HEAP[HEAP[$self_addr] + 8];
      HEAP[$n] = $4;
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      __PyErr_BadInternalCall(__str15, 468);
      HEAP[$0] = -1;
      __label__ = 14;
      break;
     case 2:
      
      
      
      
      var $11 = HEAP[HEAP[HEAP[$self_addr] + 20] + 12];
      var $12 = HEAP[$self_addr];
      var $13 = HEAP[$v_addr];
      var $14 = FUNCTION_TABLE[$11]($12, -1, $13);
      
      if ($14 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 14;
      break;
     case 4:
      
      var $17 = HEAP[$n] + 1;
      var $18 = HEAP[$self_addr];
      var $19 = _array_resize($18, $17);
      var $20 = $19 == -1;
      if ($20) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 14;
      break;
     case 6:
      
      
      var $23 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$items] = $23;
      
      
      if (HEAP[$where_addr] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $28 = HEAP[$where_addr] + HEAP[$n];
      HEAP[$where_addr] = $28;
      
      
      if (HEAP[$where_addr] < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$where_addr] = 0;
      __label__ = 9;
      break;
     case 9:
      
      
      
      if (HEAP[$where_addr] > HEAP[$n]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $34 = HEAP[$n];
      HEAP[$where_addr] = $34;
      __label__ = 11;
      break;
     case 11:
      
      
      
      if (HEAP[$where_addr] != HEAP[$n]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      
      var $46 = (HEAP[$n] - HEAP[$where_addr]) * HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      
      
      
      
      
      
      
      
      var $55 = HEAP[$items] + HEAP[HEAP[HEAP[$self_addr] + 20] + 4] * HEAP[$where_addr];
      
      
      
      
      
      
      
      
      
      var $65 = HEAP[$items] + (HEAP[$where_addr] + 1) * HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      _llvm_memmove_p0i8_p0i8_i32($65, $55, $46, 1, 0);
      __label__ = 13;
      break;
     case 13:
      
      
      
      
      var $70 = HEAP[HEAP[HEAP[$self_addr] + 20] + 12];
      var $71 = HEAP[$self_addr];
      var $72 = HEAP[$where_addr];
      var $73 = HEAP[$v_addr];
      var $74 = FUNCTION_TABLE[$70]($71, $72, $73);
      HEAP[$0] = $74;
      __label__ = 14;
      break;
     case 14:
      var $75 = HEAP[$0];
      HEAP[$retval] = $75;
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
  function _array_dealloc($op) {
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
      
      
      
      
      if (HEAP[HEAP[$op_addr] + 24] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $5 = HEAP[$op_addr];
      _PyObject_ClearWeakRefs($5);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$op_addr] + 12] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $12 = HEAP[HEAP[$op_addr] + 12];
      _free($12);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      var $18 = HEAP[HEAP[HEAP[$op_addr] + 4] + 160];
      
      var $20 = HEAP[$op_addr];
      FUNCTION_TABLE[$18]($20);
      __label__ = 5;
      break;
     case 5:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_richcompare($v, $w, $op) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 60;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $v_addr = __stackBase__;
      var $w_addr = __stackBase__ + 4;
      var $op_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $va = __stackBase__ + 20;
      var $wa = __stackBase__ + 24;
      var $vi = __stackBase__ + 28;
      var $wi = __stackBase__ + 32;
      var $i = __stackBase__ + 36;
      var $k = __stackBase__ + 40;
      var $res = __stackBase__ + 44;
      var $vs = __stackBase__ + 48;
      var $ws = __stackBase__ + 52;
      var $cmp = __stackBase__ + 56;
      
      HEAP[$v_addr] = $v;
      HEAP[$w_addr] = $w;
      HEAP[$op_addr] = $op;
      HEAP[$vi] = 0;
      HEAP[$wi] = 0;
      
      
      
      
      if (HEAP[HEAP[$v_addr] + 4] == _Arraytype) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$v_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _Arraytype);
      
      if ($8 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$w_addr] + 4] == _Arraytype) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[HEAP[$w_addr] + 4];
      var $17 = _PyType_IsSubtype($16, _Arraytype);
      
      if ($17 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $20 = HEAP[__Py_NotImplementedStruct] + 1;
      HEAP[__Py_NotImplementedStruct] = $20;
      HEAP[$0] = __Py_NotImplementedStruct;
      __label__ = 55;
      break;
     case 5:
      
      var $22 = HEAP[$v_addr];
      HEAP[$va] = $22;
      
      var $24 = HEAP[$w_addr];
      HEAP[$wa] = $24;
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$va] + 8] != HEAP[HEAP[$wa] + 8]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 6:
      
      
      if (HEAP[$op_addr] == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if (HEAP[$op_addr] == 3) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      if (HEAP[$op_addr] == 2) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$res] = __Py_ZeroStruct;
      __label__ = 11;
      break;
     case 10:
      HEAP[$res] = __Py_TrueStruct;
      __label__ = 11;
      break;
     case 11:
      
      
      
      var $43 = HEAP[HEAP[$res]] + 1;
      
      var $45 = HEAP[$res];
      HEAP[$45] = $43;
      var $46 = HEAP[$res];
      HEAP[$0] = $46;
      __label__ = 55;
      break;
     case 12:
      HEAP[$k] = 1;
      HEAP[$i] = 0;
      __label__ = 30;
      break;
     case 13:
      var $47 = HEAP[$v_addr];
      var $48 = HEAP[$i];
      var $49 = _getarrayitem($47, $48);
      HEAP[$vi] = $49;
      var $50 = HEAP[$w_addr];
      var $51 = HEAP[$i];
      var $52 = _getarrayitem($50, $51);
      HEAP[$wi] = $52;
      
      
      if (HEAP[$vi] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if (HEAP[$wi] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 15:
      
      
      if (HEAP[$vi] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      var $62 = HEAP[HEAP[$vi]] - 1;
      
      var $64 = HEAP[$vi];
      HEAP[$64] = $62;
      
      
      
      
      if (HEAP[HEAP[$vi]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[$vi] + 4] + 24];
      var $74 = HEAP[$vi];
      FUNCTION_TABLE[$73]($74);
      __label__ = 18;
      break;
     case 18:
      
      
      if (HEAP[$wi] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      
      var $80 = HEAP[HEAP[$wi]] - 1;
      
      var $82 = HEAP[$wi];
      HEAP[$82] = $80;
      
      
      
      
      if (HEAP[HEAP[$wi]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $91 = HEAP[HEAP[HEAP[$wi] + 4] + 24];
      var $92 = HEAP[$wi];
      FUNCTION_TABLE[$91]($92);
      __label__ = 21;
      break;
     case 21:
      HEAP[$0] = 0;
      __label__ = 55;
      break;
     case 22:
      var $93 = HEAP[$vi];
      var $94 = HEAP[$wi];
      var $95 = _PyObject_RichCompareBool($93, $94, 2);
      HEAP[$k] = $95;
      
      
      if (HEAP[$k] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      var $101 = HEAP[HEAP[$vi]] - 1;
      
      var $103 = HEAP[$vi];
      HEAP[$103] = $101;
      
      
      
      
      if (HEAP[HEAP[$vi]] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $112 = HEAP[HEAP[HEAP[$vi] + 4] + 24];
      var $113 = HEAP[$vi];
      FUNCTION_TABLE[$112]($113);
      __label__ = 25;
      break;
     case 25:
      
      
      
      var $117 = HEAP[HEAP[$wi]] - 1;
      
      var $119 = HEAP[$wi];
      HEAP[$119] = $117;
      
      
      
      
      if (HEAP[HEAP[$wi]] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $128 = HEAP[HEAP[HEAP[$wi] + 4] + 24];
      var $129 = HEAP[$wi];
      FUNCTION_TABLE[$128]($129);
      __label__ = 27;
      break;
     case 27:
      
      
      if (HEAP[$k] < 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      HEAP[$0] = 0;
      __label__ = 55;
      break;
     case 29:
      
      var $133 = HEAP[$i] + 1;
      HEAP[$i] = $133;
      __label__ = 30;
      break;
     case 30:
      
      
      
      
      
      
      if (HEAP[HEAP[$va] + 8] <= HEAP[$i]) {
        __label__ = 32;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      
      
      
      
      if (HEAP[HEAP[$wa] + 8] > HEAP[$i]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      if (HEAP[$k] != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 33:
      
      
      
      var $151 = HEAP[HEAP[$va] + 8];
      HEAP[$vs] = $151;
      
      
      
      var $155 = HEAP[HEAP[$wa] + 8];
      HEAP[$ws] = $155;
      var $156 = HEAP[$op_addr];
      if ($156 == 0) {
        __label__ = 34;
        break;
      } else if ($156 == 1) {
        __label__ = 35;
        break;
      } else if ($156 == 2) {
        __label__ = 36;
        break;
      } else if ($156 == 3) {
        __label__ = 37;
        break;
      } else if ($156 == 4) {
        __label__ = 38;
        break;
      } else if ($156 == 5) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 34:
      
      
      
      var $160 = HEAP[$vs] < HEAP[$ws];
      HEAP[$cmp] = $160;
      __label__ = 41;
      break;
     case 35:
      
      
      
      var $164 = HEAP[$vs] <= HEAP[$ws];
      HEAP[$cmp] = $164;
      __label__ = 41;
      break;
     case 36:
      
      
      
      var $168 = HEAP[$vs] == HEAP[$ws];
      HEAP[$cmp] = $168;
      __label__ = 41;
      break;
     case 37:
      
      
      
      var $172 = HEAP[$vs] != HEAP[$ws];
      HEAP[$cmp] = $172;
      __label__ = 41;
      break;
     case 38:
      
      
      
      var $176 = HEAP[$vs] > HEAP[$ws];
      HEAP[$cmp] = $176;
      __label__ = 41;
      break;
     case 39:
      
      
      
      var $180 = HEAP[$vs] >= HEAP[$ws];
      HEAP[$cmp] = $180;
      __label__ = 41;
      break;
     case 40:
      HEAP[$0] = 0;
      __label__ = 55;
      break;
     case 41:
      
      
      if (HEAP[$cmp] != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      HEAP[$res] = __Py_TrueStruct;
      __label__ = 44;
      break;
     case 43:
      HEAP[$res] = __Py_ZeroStruct;
      __label__ = 44;
      break;
     case 44:
      
      
      
      var $186 = HEAP[HEAP[$res]] + 1;
      
      var $188 = HEAP[$res];
      HEAP[$188] = $186;
      var $189 = HEAP[$res];
      HEAP[$0] = $189;
      __label__ = 55;
      break;
     case 45:
      
      
      if (HEAP[$op_addr] == 2) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      var $194 = HEAP[__Py_ZeroStruct] + 1;
      
      HEAP[__Py_ZeroStruct] = $194;
      HEAP[$res] = __Py_ZeroStruct;
      __label__ = 50;
      break;
     case 47:
      
      
      if (HEAP[$op_addr] == 3) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      
      var $200 = HEAP[__Py_TrueStruct] + 1;
      
      HEAP[__Py_TrueStruct] = $200;
      HEAP[$res] = __Py_TrueStruct;
      __label__ = 50;
      break;
     case 49:
      var $202 = HEAP[$vi];
      var $203 = HEAP[$wi];
      var $204 = HEAP[$op_addr];
      var $205 = _PyObject_RichCompare($202, $203, $204);
      HEAP[$res] = $205;
      __label__ = 50;
      break;
     case 50:
      
      
      
      var $209 = HEAP[HEAP[$vi]] - 1;
      
      var $211 = HEAP[$vi];
      HEAP[$211] = $209;
      
      
      
      
      if (HEAP[HEAP[$vi]] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      
      
      
      
      var $220 = HEAP[HEAP[HEAP[$vi] + 4] + 24];
      var $221 = HEAP[$vi];
      FUNCTION_TABLE[$220]($221);
      __label__ = 52;
      break;
     case 52:
      
      
      
      var $225 = HEAP[HEAP[$wi]] - 1;
      
      var $227 = HEAP[$wi];
      HEAP[$227] = $225;
      
      
      
      
      if (HEAP[HEAP[$wi]] == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      
      
      
      
      var $236 = HEAP[HEAP[HEAP[$wi] + 4] + 24];
      var $237 = HEAP[$wi];
      FUNCTION_TABLE[$236]($237);
      __label__ = 54;
      break;
     case 54:
      var $238 = HEAP[$res];
      HEAP[$0] = $238;
      __label__ = 55;
      break;
     case 55:
      var $239 = HEAP[$0];
      HEAP[$retval] = $239;
      __label__ = 56;
      break;
     case 56:
      var $retval55 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval55;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_length($a) {
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
      
      HEAP[__stackBase__] = $a;
      
      
      
      var $4 = HEAP[HEAP[__stackBase__] + 8];
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
  function _array_item($a, $i) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$a_addr] = $a;
      HEAP[$i_addr] = $i;
      
      
      if (HEAP[$i_addr] < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      if (HEAP[HEAP[$a_addr] + 8] <= HEAP[$i_addr]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $9 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($9, __str18);
      HEAP[$0] = 0;
      __label__ = 4;
      break;
     case 3:
      
      var $11 = HEAP[$a_addr];
      var $12 = HEAP[$i_addr];
      var $13 = _getarrayitem($11, $12);
      HEAP[$0] = $13;
      __label__ = 4;
      break;
     case 4:
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
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
  function _array_slice($a, $ilow, $ihigh) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr = __stackBase__;
      var $ilow_addr = __stackBase__ + 4;
      var $ihigh_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $np = __stackBase__ + 20;
      
      HEAP[$a_addr] = $a;
      HEAP[$ilow_addr] = $ilow;
      HEAP[$ihigh_addr] = $ihigh;
      
      
      if (HEAP[$ilow_addr] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$ilow_addr] = 0;
      __label__ = 4;
      break;
     case 2:
      
      
      
      
      
      
      if (HEAP[HEAP[$a_addr] + 8] < HEAP[$ilow_addr]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $12 = HEAP[HEAP[$a_addr] + 8];
      HEAP[$ilow_addr] = $12;
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[$ihigh_addr] < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$ihigh_addr] = 0;
      __label__ = 6;
      break;
     case 6:
      
      
      
      if (HEAP[$ihigh_addr] < HEAP[$ilow_addr]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $18 = HEAP[$ilow_addr];
      HEAP[$ihigh_addr] = $18;
      __label__ = 10;
      break;
     case 8:
      
      
      
      
      
      
      if (HEAP[HEAP[$a_addr] + 8] < HEAP[$ihigh_addr]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      var $28 = HEAP[HEAP[$a_addr] + 8];
      HEAP[$ihigh_addr] = $28;
      __label__ = 10;
      break;
     case 10:
      
      
      var $31 = HEAP[HEAP[$a_addr] + 20];
      
      
      var $34 = HEAP[$ihigh_addr] - HEAP[$ilow_addr];
      var $35 = _newarrayobject(_Arraytype, $34, $31);
      var $36 = $35;
      HEAP[$np] = $36;
      
      
      if (HEAP[$np] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 12:
      
      
      
      
      
      
      
      
      var $47 = (HEAP[$ihigh_addr] - HEAP[$ilow_addr]) * HEAP[HEAP[HEAP[$a_addr] + 20] + 4];
      
      
      
      
      
      
      
      
      
      
      var $58 = HEAP[HEAP[$a_addr] + 12] + HEAP[HEAP[HEAP[$a_addr] + 20] + 4] * HEAP[$ilow_addr];
      
      
      var $61 = HEAP[HEAP[$np] + 12];
      _llvm_memcpy_p0i8_p0i8_i32($61, $58, $47, 1, 0);
      
      var $63 = HEAP[$np];
      HEAP[$0] = $63;
      __label__ = 13;
      break;
     case 13:
      var $64 = HEAP[$0];
      HEAP[$retval] = $64;
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
  function _array_copy($a, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$a_addr] = $a;
      HEAP[$unused_addr] = $unused;
      
      
      
      var $4 = HEAP[HEAP[$a_addr] + 8];
      var $5 = HEAP[$a_addr];
      var $6 = _array_slice($5, 0, $4);
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
  function _array_concat($a, $bb) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr = __stackBase__;
      var $bb_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $size = __stackBase__ + 16;
      var $np = __stackBase__ + 20;
      
      HEAP[$a_addr] = $a;
      HEAP[$bb_addr] = $bb;
      
      
      
      
      if (HEAP[HEAP[$bb_addr] + 4] != _Arraytype) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$bb_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _Arraytype);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $14 = HEAP[HEAP[HEAP[$bb_addr] + 4] + 12];
      var $15 = HEAP[_PyExc_TypeError];
      var $16 = _PyErr_Format($15, __str19, allocate([ $14, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 3:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$a_addr] + 20] != HEAP[HEAP[$bb_addr] + 20]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $25 = _PyErr_BadArgument();
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 5:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$a_addr] + 8] > 2147483647 - HEAP[HEAP[$bb_addr] + 8]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $36 = _PyErr_NoMemory();
      HEAP[$0] = $36;
      __label__ = 10;
      break;
     case 7:
      
      
      
      
      
      
      
      
      var $45 = HEAP[HEAP[$a_addr] + 8] + HEAP[HEAP[$bb_addr] + 8];
      HEAP[$size] = $45;
      
      
      var $48 = HEAP[HEAP[$a_addr] + 20];
      var $49 = HEAP[$size];
      var $50 = _newarrayobject(_Arraytype, $49, $48);
      var $51 = $50;
      HEAP[$np] = $51;
      
      
      if (HEAP[$np] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 9:
      
      
      
      
      
      
      
      
      
      var $63 = HEAP[HEAP[$a_addr] + 8] * HEAP[HEAP[HEAP[$a_addr] + 20] + 4];
      
      
      var $66 = HEAP[HEAP[$a_addr] + 12];
      
      
      var $69 = HEAP[HEAP[$np] + 12];
      _llvm_memcpy_p0i8_p0i8_i32($69, $66, $63, 1, 0);
      
      
      
      
      
      
      
      
      
      
      var $80 = HEAP[HEAP[$bb_addr] + 8] * HEAP[HEAP[HEAP[$bb_addr] + 20] + 4];
      
      
      
      var $84 = HEAP[HEAP[$bb_addr] + 12];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $98 = HEAP[HEAP[$np] + 12] + HEAP[HEAP[$a_addr] + 8] * HEAP[HEAP[HEAP[$a_addr] + 20] + 4];
      _llvm_memcpy_p0i8_p0i8_i32($98, $84, $80, 1, 0);
      
      var $100 = HEAP[$np];
      HEAP[$0] = $100;
      __label__ = 10;
      break;
     case 10:
      var $101 = HEAP[$0];
      HEAP[$retval] = $101;
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
  function _array_repeat($a, $n) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr = __stackBase__;
      var $n_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $size = __stackBase__ + 20;
      var $np = __stackBase__ + 24;
      var $p = __stackBase__ + 28;
      var $nbytes = __stackBase__ + 32;
      
      HEAP[$a_addr] = $a;
      HEAP[$n_addr] = $n;
      
      
      if (HEAP[$n_addr] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$n_addr] = 0;
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      
      if (HEAP[HEAP[$a_addr] + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((2147483647 / HEAP[HEAP[$a_addr] + 8] | 0) < HEAP[$n_addr]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $15 = _PyErr_NoMemory();
      HEAP[$0] = $15;
      __label__ = 11;
      break;
     case 5:
      
      
      
      
      
      var $21 = HEAP[HEAP[$a_addr] + 8] * HEAP[$n_addr];
      HEAP[$size] = $21;
      
      
      var $24 = HEAP[HEAP[$a_addr] + 20];
      var $25 = HEAP[$size];
      var $26 = _newarrayobject(_Arraytype, $25, $24);
      var $27 = $26;
      HEAP[$np] = $27;
      
      
      if (HEAP[$np] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 7:
      
      
      var $32 = HEAP[HEAP[$np] + 12];
      HEAP[$p] = $32;
      
      
      
      
      
      
      
      
      
      var $42 = HEAP[HEAP[$a_addr] + 8] * HEAP[HEAP[HEAP[$a_addr] + 20] + 4];
      HEAP[$nbytes] = $42;
      HEAP[$i] = 0;
      __label__ = 9;
      break;
     case 8:
      var $43 = HEAP[$nbytes];
      
      
      var $46 = HEAP[HEAP[$a_addr] + 12];
      var $47 = HEAP[$p];
      _llvm_memcpy_p0i8_p0i8_i32($47, $46, $43, 1, 0);
      
      
      var $50 = HEAP[$p] + HEAP[$nbytes];
      HEAP[$p] = $50;
      
      var $52 = HEAP[$i] + 1;
      HEAP[$i] = $52;
      __label__ = 9;
      break;
     case 9:
      
      
      
      if (HEAP[$i] < HEAP[$n_addr]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      var $57 = HEAP[$np];
      HEAP[$0] = $57;
      __label__ = 11;
      break;
     case 11:
      var $58 = HEAP[$0];
      HEAP[$retval] = $58;
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
  function _array_ass_slice($a, $ilow, $ihigh, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 64;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr = __stackBase__;
      var $ilow_addr = __stackBase__ + 4;
      var $ihigh_addr = __stackBase__ + 8;
      var $v_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $iftmp_109 = __stackBase__ + 20;
      var $iftmp_107 = __stackBase__ + 24;
      var $iftmp_105 = __stackBase__ + 28;
      var $iftmp_101 = __stackBase__ + 32;
      var $iftmp_99 = __stackBase__ + 36;
      var $iftmp_97 = __stackBase__ + 40;
      var $0 = __stackBase__ + 44;
      var $item = __stackBase__ + 48;
      var $n = __stackBase__ + 52;
      var $d = __stackBase__ + 56;
      var $ret = __stackBase__ + 60;
      
      HEAP[$a_addr] = $a;
      HEAP[$ilow_addr] = $ilow;
      HEAP[$ihigh_addr] = $ihigh;
      HEAP[$v_addr] = $v;
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$n] = 0;
      __label__ = 14;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$v_addr] + 4] == _Arraytype) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $9 = HEAP[HEAP[$v_addr] + 4];
      var $10 = _PyType_IsSubtype($9, _Arraytype);
      
      if ($10 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 4:
      
      
      
      var $15 = HEAP[HEAP[$v_addr] + 8];
      HEAP[$n] = $15;
      
      
      
      
      if (HEAP[$a_addr] == HEAP[$v_addr]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 5:
      
      var $21 = HEAP[$v_addr];
      var $22 = HEAP[$n];
      var $23 = _array_slice($21, 0, $22);
      HEAP[$v_addr] = $23;
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = -1;
      __label__ = 51;
      break;
     case 7:
      var $26 = HEAP[$a_addr];
      var $27 = HEAP[$ilow_addr];
      var $28 = HEAP[$ihigh_addr];
      var $29 = HEAP[$v_addr];
      var $30 = _array_ass_slice($26, $27, $28, $29);
      HEAP[$ret] = $30;
      
      
      
      var $34 = HEAP[HEAP[$v_addr]] - 1;
      
      var $36 = HEAP[$v_addr];
      HEAP[$36] = $34;
      
      
      
      
      if (HEAP[HEAP[$v_addr]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $45 = HEAP[HEAP[HEAP[$v_addr] + 4] + 24];
      var $46 = HEAP[$v_addr];
      FUNCTION_TABLE[$45]($46);
      __label__ = 9;
      break;
     case 9:
      var $47 = HEAP[$ret];
      HEAP[$0] = $47;
      __label__ = 51;
      break;
     case 10:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$v_addr] + 20] != HEAP[HEAP[$a_addr] + 20]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $56 = _PyErr_BadArgument();
      HEAP[$0] = -1;
      __label__ = 51;
      break;
     case 12:
      __label__ = 14;
      break;
     case 13:
      
      
      
      
      var $61 = HEAP[HEAP[HEAP[$v_addr] + 4] + 12];
      var $62 = HEAP[_PyExc_TypeError];
      var $63 = _PyErr_Format($62, __str20, allocate([ $61, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 51;
      break;
     case 14:
      
      
      if (HEAP[$ilow_addr] < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$ilow_addr] = 0;
      __label__ = 18;
      break;
     case 16:
      
      
      
      
      
      
      if (HEAP[HEAP[$a_addr] + 8] < HEAP[$ilow_addr]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      var $75 = HEAP[HEAP[$a_addr] + 8];
      HEAP[$ilow_addr] = $75;
      __label__ = 18;
      break;
     case 18:
      
      
      if (HEAP[$ihigh_addr] < 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$ihigh_addr] = 0;
      __label__ = 20;
      break;
     case 20:
      
      
      
      if (HEAP[$ihigh_addr] < HEAP[$ilow_addr]) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      var $81 = HEAP[$ilow_addr];
      HEAP[$ihigh_addr] = $81;
      __label__ = 24;
      break;
     case 22:
      
      
      
      
      
      
      if (HEAP[HEAP[$a_addr] + 8] < HEAP[$ihigh_addr]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      var $91 = HEAP[HEAP[$a_addr] + 8];
      HEAP[$ihigh_addr] = $91;
      __label__ = 24;
      break;
     case 24:
      
      
      var $94 = HEAP[HEAP[$a_addr] + 12];
      HEAP[$item] = $94;
      
      
      
      
      var $99 = HEAP[$n] - (HEAP[$ihigh_addr] - HEAP[$ilow_addr]);
      HEAP[$d] = $99;
      
      
      if (HEAP[$d] < 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 25:
      
      
      
      
      
      
      
      
      
      
      
      var $113 = (HEAP[HEAP[$a_addr] + 8] - HEAP[$ihigh_addr]) * HEAP[HEAP[HEAP[$a_addr] + 20] + 4];
      
      
      
      
      
      
      
      
      var $122 = HEAP[$item] + HEAP[HEAP[HEAP[$a_addr] + 20] + 4] * HEAP[$ihigh_addr];
      
      
      
      
      
      
      
      
      
      
      var $133 = HEAP[$item] + (HEAP[$ihigh_addr] + HEAP[$d]) * HEAP[HEAP[HEAP[$a_addr] + 20] + 4];
      _llvm_memmove_p0i8_p0i8_i32($133, $122, $113, 1, 0);
      
      
      
      
      
      
      
      var $141 = HEAP[HEAP[$a_addr] + 8] + HEAP[$d];
      var $142 = HEAP[$a_addr] + 8;
      HEAP[$142] = $141;
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$a_addr] + 8] * HEAP[HEAP[HEAP[$a_addr] + 20] + 4] >= 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 26:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$a_addr] + 8] * HEAP[HEAP[HEAP[$a_addr] + 20] + 4] >= 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 27:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$a_addr] + 8] * HEAP[HEAP[HEAP[$a_addr] + 20] + 4] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      
      
      
      
      
      var $185 = HEAP[HEAP[$a_addr] + 8] * HEAP[HEAP[HEAP[$a_addr] + 20] + 4];
      HEAP[$iftmp_101] = $185;
      __label__ = 30;
      break;
     case 29:
      HEAP[$iftmp_101] = 1;
      __label__ = 30;
      break;
     case 30:
      var $186 = HEAP[$item];
      var $187 = HEAP[$iftmp_101];
      var $188 = _realloc($186, $187);
      HEAP[$iftmp_99] = $188;
      __label__ = 32;
      break;
     case 31:
      HEAP[$iftmp_99] = 0;
      __label__ = 32;
      break;
     case 32:
      var $189 = HEAP[$iftmp_99];
      HEAP[$iftmp_97] = $189;
      __label__ = 34;
      break;
     case 33:
      HEAP[$iftmp_97] = 0;
      __label__ = 34;
      break;
     case 34:
      var $190 = HEAP[$iftmp_97];
      HEAP[$item] = $190;
      
      var $192 = HEAP[$a_addr] + 12;
      var $193 = HEAP[$item];
      HEAP[$192] = $193;
      
      
      
      var $197 = HEAP[HEAP[$a_addr] + 8];
      
      var $199 = HEAP[$a_addr] + 16;
      HEAP[$199] = $197;
      __label__ = 48;
      break;
     case 35:
      
      
      if (HEAP[$d] > 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 36:
      
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$a_addr] + 8] + HEAP[$d]) * HEAP[HEAP[HEAP[$a_addr] + 20] + 4] >= 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 37:
      
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$a_addr] + 8] + HEAP[$d]) * HEAP[HEAP[HEAP[$a_addr] + 20] + 4] >= 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 38:
      
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$a_addr] + 8] + HEAP[$d]) * HEAP[HEAP[HEAP[$a_addr] + 20] + 4] != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      
      
      
      
      
      
      
      var $252 = (HEAP[HEAP[$a_addr] + 8] + HEAP[$d]) * HEAP[HEAP[HEAP[$a_addr] + 20] + 4];
      HEAP[$iftmp_109] = $252;
      __label__ = 41;
      break;
     case 40:
      HEAP[$iftmp_109] = 1;
      __label__ = 41;
      break;
     case 41:
      var $253 = HEAP[$item];
      var $254 = HEAP[$iftmp_109];
      var $255 = _realloc($253, $254);
      HEAP[$iftmp_107] = $255;
      __label__ = 43;
      break;
     case 42:
      HEAP[$iftmp_107] = 0;
      __label__ = 43;
      break;
     case 43:
      var $256 = HEAP[$iftmp_107];
      HEAP[$iftmp_105] = $256;
      __label__ = 45;
      break;
     case 44:
      HEAP[$iftmp_105] = 0;
      __label__ = 45;
      break;
     case 45:
      var $257 = HEAP[$iftmp_105];
      HEAP[$item] = $257;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      var $260 = _PyErr_NoMemory();
      HEAP[$0] = -1;
      __label__ = 51;
      break;
     case 47:
      
      
      
      
      
      
      
      
      
      
      
      var $272 = (HEAP[HEAP[$a_addr] + 8] - HEAP[$ihigh_addr]) * HEAP[HEAP[HEAP[$a_addr] + 20] + 4];
      
      
      
      
      
      
      
      
      var $281 = HEAP[$item] + HEAP[HEAP[HEAP[$a_addr] + 20] + 4] * HEAP[$ihigh_addr];
      
      
      
      
      
      
      
      
      
      
      var $292 = HEAP[$item] + (HEAP[$ihigh_addr] + HEAP[$d]) * HEAP[HEAP[HEAP[$a_addr] + 20] + 4];
      _llvm_memmove_p0i8_p0i8_i32($292, $281, $272, 1, 0);
      
      var $294 = HEAP[$a_addr] + 12;
      var $295 = HEAP[$item];
      HEAP[$294] = $295;
      
      
      
      
      
      
      
      var $303 = HEAP[HEAP[$a_addr] + 8] + HEAP[$d];
      var $304 = HEAP[$a_addr] + 8;
      HEAP[$304] = $303;
      
      
      
      var $308 = HEAP[HEAP[$a_addr] + 8];
      
      var $310 = HEAP[$a_addr] + 16;
      HEAP[$310] = $308;
      __label__ = 48;
      break;
     case 48:
      
      
      if (HEAP[$n] > 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      
      
      
      
      
      var $320 = HEAP[HEAP[HEAP[$v_addr] + 20] + 4] * HEAP[$n];
      
      
      
      var $324 = HEAP[HEAP[$v_addr] + 12];
      
      
      
      
      
      
      
      
      var $333 = HEAP[$item] + HEAP[HEAP[HEAP[$a_addr] + 20] + 4] * HEAP[$ilow_addr];
      _llvm_memcpy_p0i8_p0i8_i32($333, $324, $320, 1, 0);
      __label__ = 50;
      break;
     case 50:
      HEAP[$0] = 0;
      __label__ = 51;
      break;
     case 51:
      var $334 = HEAP[$0];
      HEAP[$retval] = $334;
      __label__ = 52;
      break;
     case 52:
      var $retval51 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval51;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_ass_item($a, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $v_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$a_addr] = $a;
      HEAP[$i_addr] = $i;
      HEAP[$v_addr] = $v;
      
      
      if (HEAP[$i_addr] < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      if (HEAP[HEAP[$a_addr] + 8] <= HEAP[$i_addr]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $9 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($9, __str21);
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 3:
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $13 = HEAP[$i_addr] + 1;
      var $14 = HEAP[$a_addr];
      var $15 = HEAP[$i_addr];
      var $16 = HEAP[$v_addr];
      var $17 = _array_ass_slice($14, $15, $13, $16);
      HEAP[$0] = $17;
      __label__ = 6;
      break;
     case 5:
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$a_addr] + 20] + 12];
      var $23 = HEAP[$a_addr];
      var $24 = HEAP[$i_addr];
      var $25 = HEAP[$v_addr];
      var $26 = FUNCTION_TABLE[$22]($23, $24, $25);
      HEAP[$0] = $26;
      __label__ = 6;
      break;
     case 6:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
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
  function _setarrayitem($a, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $v_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$a_addr] = $a;
      HEAP[$i_addr] = $i;
      HEAP[$v_addr] = $v;
      
      
      
      
      if (HEAP[HEAP[$a_addr] + 4] != _Arraytype) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$a_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _Arraytype);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str22, __str15, 787, ___PRETTY_FUNCTION___9418);
      throw "Reached an unreachable!";
     case 3:
      
      var $11 = HEAP[$a_addr];
      var $12 = HEAP[$i_addr];
      var $13 = HEAP[$v_addr];
      var $14 = _array_ass_item($11, $12, $13);
      HEAP[$0] = $14;
      var $15 = HEAP[$0];
      HEAP[$retval] = $15;
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
  function _array_iter_extend($self, $bb) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $bb_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $it = __stackBase__ + 16;
      var $v = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$bb_addr] = $bb;
      var $1 = HEAP[$bb_addr];
      var $2 = _PyObject_GetIter($1);
      HEAP[$it] = $2;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 2:
      __label__ = 11;
      break;
     case 3:
      
      
      
      var $8 = HEAP[HEAP[$self_addr] + 8];
      var $9 = HEAP[$self_addr];
      var $10 = HEAP[$v];
      var $11 = _ins1($9, $8, $10);
      
      if ($11 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      
      
      
      var $16 = HEAP[HEAP[$v]] - 1;
      
      var $18 = HEAP[$v];
      HEAP[$18] = $16;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $28 = HEAP[$v];
      FUNCTION_TABLE[$27]($28);
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $32 = HEAP[HEAP[$it]] - 1;
      
      var $34 = HEAP[$it];
      HEAP[$34] = $32;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $43 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $44 = HEAP[$it];
      FUNCTION_TABLE[$43]($44);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 9:
      
      
      
      var $48 = HEAP[HEAP[$v]] - 1;
      
      var $50 = HEAP[$v];
      HEAP[$50] = $48;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $59 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $60 = HEAP[$v];
      FUNCTION_TABLE[$59]($60);
      __label__ = 11;
      break;
     case 11:
      var $61 = HEAP[$it];
      var $62 = _PyIter_Next($61);
      HEAP[$v] = $62;
      
      
      if (HEAP[$v] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      var $68 = HEAP[HEAP[$it]] - 1;
      
      var $70 = HEAP[$it];
      HEAP[$70] = $68;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $79 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $80 = HEAP[$it];
      FUNCTION_TABLE[$79]($80);
      __label__ = 14;
      break;
     case 14:
      var $81 = _PyErr_Occurred();
      
      if ($81 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 16:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 17:
      var $83 = HEAP[$0];
      HEAP[$retval] = $83;
      __label__ = 18;
      break;
     case 18:
      var $retval18 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_do_extend($self, $bb) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $bb_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_132 = __stackBase__ + 12;
      var $iftmp_131 = __stackBase__ + 16;
      var $iftmp_130 = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $size = __stackBase__ + 28;
      var $old_item = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$bb_addr] = $bb;
      
      
      
      
      if (HEAP[HEAP[$bb_addr] + 4] != _Arraytype) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$bb_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _Arraytype);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $10 = HEAP[$self_addr];
      var $11 = HEAP[$bb_addr];
      var $12 = _array_iter_extend($10, $11);
      HEAP[$0] = $12;
      __label__ = 20;
      break;
     case 3:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != HEAP[HEAP[$bb_addr] + 20]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $21 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($21, __str23);
      HEAP[$0] = -1;
      __label__ = 20;
      break;
     case 5:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] > 2147483647 - HEAP[HEAP[$bb_addr] + 8]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] + HEAP[HEAP[$bb_addr] + 8] > (2147483647 / HEAP[HEAP[HEAP[$self_addr] + 20] + 4] | 0)) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $48 = _PyErr_NoMemory();
      HEAP[$0] = -1;
      __label__ = 20;
      break;
     case 8:
      
      
      
      
      
      
      
      
      var $57 = HEAP[HEAP[$self_addr] + 8] + HEAP[HEAP[$bb_addr] + 8];
      HEAP[$size] = $57;
      
      
      var $60 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$old_item] = $60;
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] * HEAP[$size] >= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] * HEAP[$size] >= 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] * HEAP[$size] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      var $91 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4] * HEAP[$size];
      HEAP[$iftmp_132] = $91;
      __label__ = 13;
      break;
     case 12:
      HEAP[$iftmp_132] = 1;
      __label__ = 13;
      break;
     case 13:
      
      
      var $94 = HEAP[HEAP[$self_addr] + 12];
      var $95 = HEAP[$iftmp_132];
      var $96 = _realloc($94, $95);
      HEAP[$iftmp_131] = $96;
      __label__ = 15;
      break;
     case 14:
      HEAP[$iftmp_131] = 0;
      __label__ = 15;
      break;
     case 15:
      var $97 = HEAP[$iftmp_131];
      HEAP[$iftmp_130] = $97;
      __label__ = 17;
      break;
     case 16:
      HEAP[$iftmp_130] = 0;
      __label__ = 17;
      break;
     case 17:
      
      var $99 = HEAP[$self_addr] + 12;
      var $100 = HEAP[$iftmp_130];
      HEAP[$99] = $100;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      var $106 = HEAP[$self_addr] + 12;
      var $107 = HEAP[$old_item];
      HEAP[$106] = $107;
      var $108 = _PyErr_NoMemory();
      HEAP[$0] = -1;
      __label__ = 20;
      break;
     case 19:
      
      
      
      
      
      
      
      
      
      
      var $119 = HEAP[HEAP[$bb_addr] + 8] * HEAP[HEAP[HEAP[$bb_addr] + 20] + 4];
      
      
      
      var $123 = HEAP[HEAP[$bb_addr] + 12];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $137 = HEAP[HEAP[$self_addr] + 12] + HEAP[HEAP[$self_addr] + 8] * HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      _llvm_memcpy_p0i8_p0i8_i32($137, $123, $119, 1, 0);
      
      
      var $140 = HEAP[$self_addr] + 8;
      var $141 = HEAP[$size];
      HEAP[$140] = $141;
      
      var $143 = HEAP[$self_addr] + 16;
      var $144 = HEAP[$size];
      HEAP[$143] = $144;
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 20:
      var $145 = HEAP[$0];
      HEAP[$retval] = $145;
      __label__ = 21;
      break;
     case 21:
      var $retval21 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval21;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_inplace_concat($self, $bb) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $bb_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$bb_addr] = $bb;
      
      
      
      
      if (HEAP[HEAP[$bb_addr] + 4] != _Arraytype) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$bb_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _Arraytype);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $14 = HEAP[HEAP[HEAP[$bb_addr] + 4] + 12];
      var $15 = HEAP[_PyExc_TypeError];
      var $16 = _PyErr_Format($15, __str24, allocate([ $14, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 3:
      var $17 = HEAP[$self_addr];
      var $18 = HEAP[$bb_addr];
      var $19 = _array_do_extend($17, $18);
      var $20 = $19 == -1;
      if ($20) {
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
      
      
      
      
      var $25 = HEAP[HEAP[$self_addr]] + 1;
      var $26 = HEAP[$self_addr];
      HEAP[$26] = $25;
      
      var $28 = HEAP[$self_addr];
      HEAP[$0] = $28;
      __label__ = 6;
      break;
     case 6:
      var $29 = HEAP[$0];
      HEAP[$retval] = $29;
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
  function _array_inplace_repeat($self, $n) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $n_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_146 = __stackBase__ + 12;
      var $iftmp_145 = __stackBase__ + 16;
      var $iftmp_144 = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $items = __stackBase__ + 28;
      var $p = __stackBase__ + 32;
      var $size = __stackBase__ + 36;
      var $i = __stackBase__ + 40;
      
      HEAP[$self_addr] = $self;
      HEAP[$n_addr] = $n;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 1:
      
      
      if (HEAP[$n_addr] < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$n_addr] = 0;
      __label__ = 3;
      break;
     case 3:
      
      
      var $10 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$items] = $10;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] > (2147483647 / HEAP[HEAP[HEAP[$self_addr] + 20] + 4] | 0)) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $28 = _PyErr_NoMemory();
      HEAP[$0] = $28;
      __label__ = 26;
      break;
     case 6:
      
      
      
      
      
      
      
      
      
      var $38 = HEAP[HEAP[$self_addr] + 8] * HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      HEAP[$size] = $38;
      
      
      if (HEAP[$n_addr] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $41 = HEAP[$items];
      _free($41);
      
      var $43 = HEAP[$self_addr] + 12;
      HEAP[$43] = 0;
      
      
      var $46 = HEAP[$self_addr] + 8;
      HEAP[$46] = 0;
      
      var $48 = HEAP[$self_addr] + 16;
      HEAP[$48] = 0;
      __label__ = 25;
      break;
     case 8:
      
      
      
      
      if ((2147483647 / HEAP[$n_addr] | 0) < HEAP[$size]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $53 = _PyErr_NoMemory();
      HEAP[$0] = $53;
      __label__ = 26;
      break;
     case 10:
      
      
      
      
      if (HEAP[$n_addr] * HEAP[$size] >= 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 11:
      
      
      
      
      if (HEAP[$n_addr] * HEAP[$size] >= 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 12:
      
      
      
      
      if (HEAP[$n_addr] * HEAP[$size] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      var $68 = HEAP[$n_addr] * HEAP[$size];
      HEAP[$iftmp_146] = $68;
      __label__ = 15;
      break;
     case 14:
      HEAP[$iftmp_146] = 1;
      __label__ = 15;
      break;
     case 15:
      var $69 = HEAP[$items];
      var $70 = HEAP[$iftmp_146];
      var $71 = _realloc($69, $70);
      HEAP[$iftmp_145] = $71;
      __label__ = 17;
      break;
     case 16:
      HEAP[$iftmp_145] = 0;
      __label__ = 17;
      break;
     case 17:
      var $72 = HEAP[$iftmp_145];
      HEAP[$iftmp_144] = $72;
      __label__ = 19;
      break;
     case 18:
      HEAP[$iftmp_144] = 0;
      __label__ = 19;
      break;
     case 19:
      var $73 = HEAP[$iftmp_144];
      HEAP[$items] = $73;
      
      
      if (HEAP[$items] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $76 = _PyErr_NoMemory();
      HEAP[$0] = $76;
      __label__ = 26;
      break;
     case 21:
      var $77 = HEAP[$items];
      HEAP[$p] = $77;
      HEAP[$i] = 1;
      __label__ = 23;
      break;
     case 22:
      
      
      var $80 = HEAP[$p] + HEAP[$size];
      HEAP[$p] = $80;
      var $81 = HEAP[$size];
      var $82 = HEAP[$p];
      var $83 = HEAP[$items];
      _llvm_memcpy_p0i8_p0i8_i32($82, $83, $81, 1, 0);
      
      var $85 = HEAP[$i] + 1;
      HEAP[$i] = $85;
      __label__ = 23;
      break;
     case 23:
      
      
      
      if (HEAP[$i] < HEAP[$n_addr]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      var $90 = HEAP[$self_addr] + 12;
      var $91 = HEAP[$items];
      HEAP[$90] = $91;
      
      
      
      
      
      
      
      var $99 = HEAP[HEAP[$self_addr] + 8] * HEAP[$n_addr];
      var $100 = HEAP[$self_addr] + 8;
      HEAP[$100] = $99;
      
      
      
      var $104 = HEAP[HEAP[$self_addr] + 8];
      
      var $106 = HEAP[$self_addr] + 16;
      HEAP[$106] = $104;
      __label__ = 25;
      break;
     case 25:
      
      
      
      
      var $111 = HEAP[HEAP[$self_addr]] + 1;
      var $112 = HEAP[$self_addr];
      HEAP[$112] = $111;
      
      var $114 = HEAP[$self_addr];
      HEAP[$0] = $114;
      __label__ = 26;
      break;
     case 26:
      var $115 = HEAP[$0];
      HEAP[$retval] = $115;
      __label__ = 27;
      break;
     case 27:
      var $retval26 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval26;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ins($self, $where, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $where_addr = __stackBase__ + 4;
      var $v_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$where_addr] = $where;
      HEAP[$v_addr] = $v;
      var $1 = HEAP[$self_addr];
      var $2 = HEAP[$where_addr];
      var $3 = HEAP[$v_addr];
      var $4 = _ins1($1, $2, $3);
      
      if ($4 != 0) {
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
      
      var $7 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $7;
      HEAP[$0] = __Py_NoneStruct;
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
  function _array_count($self, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $count = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $selfi = __stackBase__ + 24;
      var $cmp = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$v_addr] = $v;
      HEAP[$count] = 0;
      HEAP[$i] = 0;
      __label__ = 8;
      break;
     case 1:
      
      var $2 = HEAP[$self_addr];
      var $3 = HEAP[$i];
      var $4 = _getarrayitem($2, $3);
      HEAP[$selfi] = $4;
      var $5 = HEAP[$selfi];
      var $6 = HEAP[$v_addr];
      var $7 = _PyObject_RichCompareBool($5, $6, 2);
      HEAP[$cmp] = $7;
      
      
      
      var $11 = HEAP[HEAP[$selfi]] - 1;
      
      var $13 = HEAP[$selfi];
      HEAP[$13] = $11;
      
      
      
      
      if (HEAP[HEAP[$selfi]] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$selfi] + 4] + 24];
      var $23 = HEAP[$selfi];
      FUNCTION_TABLE[$22]($23);
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$cmp] > 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $27 = HEAP[$count] + 1;
      HEAP[$count] = $27;
      __label__ = 7;
      break;
     case 5:
      
      
      if (HEAP[$cmp] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 7:
      
      var $31 = HEAP[$i] + 1;
      HEAP[$i] = $31;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] > HEAP[$i]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $38 = HEAP[$count];
      var $39 = _PyInt_FromSsize_t($38);
      HEAP[$0] = $39;
      __label__ = 10;
      break;
     case 10:
      var $40 = HEAP[$0];
      HEAP[$retval] = $40;
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
  function _array_index($self, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $selfi = __stackBase__ + 20;
      var $cmp = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$v_addr] = $v;
      HEAP[$i] = 0;
      __label__ = 8;
      break;
     case 1:
      
      var $2 = HEAP[$self_addr];
      var $3 = HEAP[$i];
      var $4 = _getarrayitem($2, $3);
      HEAP[$selfi] = $4;
      var $5 = HEAP[$selfi];
      var $6 = HEAP[$v_addr];
      var $7 = _PyObject_RichCompareBool($5, $6, 2);
      HEAP[$cmp] = $7;
      
      
      
      var $11 = HEAP[HEAP[$selfi]] - 1;
      
      var $13 = HEAP[$selfi];
      HEAP[$13] = $11;
      
      
      
      
      if (HEAP[HEAP[$selfi]] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$selfi] + 4] + 24];
      var $23 = HEAP[$selfi];
      FUNCTION_TABLE[$22]($23);
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$cmp] > 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $26 = HEAP[$i];
      var $27 = _PyInt_FromLong($26);
      HEAP[$0] = $27;
      __label__ = 10;
      break;
     case 5:
      
      
      if (HEAP[$cmp] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 7:
      
      var $31 = HEAP[$i] + 1;
      HEAP[$i] = $31;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] > HEAP[$i]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $38 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($38, __str25);
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 10:
      var $39 = HEAP[$0];
      HEAP[$retval] = $39;
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
  function _array_contains($self, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $cmp = __stackBase__ + 20;
      var $selfi = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$v_addr] = $v;
      HEAP[$i] = 0;
      HEAP[$cmp] = 0;
      __label__ = 4;
      break;
     case 1:
      
      var $2 = HEAP[$self_addr];
      var $3 = HEAP[$i];
      var $4 = _getarrayitem($2, $3);
      HEAP[$selfi] = $4;
      var $5 = HEAP[$selfi];
      var $6 = HEAP[$v_addr];
      var $7 = _PyObject_RichCompareBool($5, $6, 2);
      HEAP[$cmp] = $7;
      
      
      
      var $11 = HEAP[HEAP[$selfi]] - 1;
      
      var $13 = HEAP[$selfi];
      HEAP[$13] = $11;
      
      
      
      
      if (HEAP[HEAP[$selfi]] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$selfi] + 4] + 24];
      var $23 = HEAP[$selfi];
      FUNCTION_TABLE[$22]($23);
      __label__ = 3;
      break;
     case 3:
      
      var $25 = HEAP[$i] + 1;
      HEAP[$i] = $25;
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[$cmp] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] > HEAP[$i]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $34 = HEAP[$cmp];
      HEAP[$0] = $34;
      var $35 = HEAP[$0];
      HEAP[$retval] = $35;
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
  function _array_remove($self, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $selfi = __stackBase__ + 20;
      var $cmp = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$v_addr] = $v;
      HEAP[$i] = 0;
      __label__ = 10;
      break;
     case 1:
      
      var $2 = HEAP[$self_addr];
      var $3 = HEAP[$i];
      var $4 = _getarrayitem($2, $3);
      HEAP[$selfi] = $4;
      var $5 = HEAP[$selfi];
      var $6 = HEAP[$v_addr];
      var $7 = _PyObject_RichCompareBool($5, $6, 2);
      HEAP[$cmp] = $7;
      
      
      
      var $11 = HEAP[HEAP[$selfi]] - 1;
      
      var $13 = HEAP[$selfi];
      HEAP[$13] = $11;
      
      
      
      
      if (HEAP[HEAP[$selfi]] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$selfi] + 4] + 24];
      var $23 = HEAP[$selfi];
      FUNCTION_TABLE[$22]($23);
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$cmp] > 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      var $27 = HEAP[$i] + 1;
      var $28 = HEAP[$self_addr];
      var $29 = HEAP[$i];
      var $30 = _array_ass_slice($28, $29, $27, 0);
      
      if ($30 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 6:
      
      var $33 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $33;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 12;
      break;
     case 7:
      
      
      if (HEAP[$cmp] < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 9:
      
      var $37 = HEAP[$i] + 1;
      HEAP[$i] = $37;
      __label__ = 10;
      break;
     case 10:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] > HEAP[$i]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $44 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($44, __str26);
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 12:
      var $45 = HEAP[$0];
      HEAP[$retval] = $45;
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
  function _array_pop($self, $args) {
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
      var $i = __stackBase__ + 16;
      var $v = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$i] = -1;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str27, allocate([ $i, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($9, __str28);
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 4:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      var $17 = HEAP[HEAP[$self_addr] + 8] + HEAP[$i];
      HEAP[$i] = $17;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] <= HEAP[$i]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $26 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($26, __str29);
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 9:
      var $27 = HEAP[$i];
      
      var $29 = HEAP[$self_addr];
      var $30 = _getarrayitem($29, $27);
      HEAP[$v] = $30;
      
      var $32 = HEAP[$i] + 1;
      var $33 = HEAP[$i];
      var $34 = HEAP[$self_addr];
      var $35 = _array_ass_slice($34, $33, $32, 0);
      
      if ($35 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      var $40 = HEAP[HEAP[$v]] - 1;
      
      var $42 = HEAP[$v];
      HEAP[$42] = $40;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $51 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $52 = HEAP[$v];
      FUNCTION_TABLE[$51]($52);
      __label__ = 12;
      break;
     case 12:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 13:
      var $53 = HEAP[$v];
      HEAP[$0] = $53;
      __label__ = 14;
      break;
     case 14:
      var $54 = HEAP[$0];
      HEAP[$retval] = $54;
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
  function _array_extend($self, $bb) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $bb_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$bb_addr] = $bb;
      var $1 = HEAP[$self_addr];
      var $2 = HEAP[$bb_addr];
      var $3 = _array_do_extend($1, $2);
      var $4 = $3 == -1;
      if ($4) {
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
      
      var $6 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $6;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      var $7 = HEAP[$0];
      HEAP[$retval] = $7;
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
  function _array_insert($self, $args) {
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
      var $i = __stackBase__ + 16;
      var $v = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str30, allocate([ $i, 0, 0, 0, $v, 0, 0, 0 ], [ "i32*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$v];
      var $5 = HEAP[$i];
      var $6 = HEAP[$self_addr];
      var $7 = _ins($6, $5, $4);
      HEAP[$0] = $7;
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
  function _array_buffer_info($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $retval1 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      HEAP[$retval1] = 0;
      var $1 = _PyTuple_New(2);
      HEAP[$retval1] = $1;
      
      
      if (HEAP[$retval1] == 0) {
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
      
      var $5 = HEAP[$retval1];
      
      
      var $8 = HEAP[HEAP[$self_addr] + 12];
      var $9 = _PyLong_FromVoidPtr($8);
      
      var $11 = $5 + 12;
      HEAP[$11] = $9;
      
      var $13 = HEAP[$retval1];
      
      
      
      var $17 = HEAP[HEAP[$self_addr] + 8];
      var $18 = _PyInt_FromLong($17);
      
      var $20 = $13 + 12 + 4;
      HEAP[$20] = $18;
      var $21 = HEAP[$retval1];
      HEAP[$0] = $21;
      __label__ = 3;
      break;
     case 3:
      var $22 = HEAP[$0];
      HEAP[$retval] = $22;
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
  function _array_append($self, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$v_addr] = $v;
      
      
      
      var $4 = HEAP[HEAP[$self_addr] + 8];
      var $5 = HEAP[$self_addr];
      var $6 = HEAP[$v_addr];
      var $7 = _ins($5, $4, $6);
      HEAP[$0] = $7;
      var $8 = HEAP[$0];
      HEAP[$retval] = $8;
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
  function _array_byteswap($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 31;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 31);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $p = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $p0 = __stackBase__ + 24;
      var $p07 = __stackBase__ + 25;
      var $p1 = __stackBase__ + 26;
      var $p012 = __stackBase__ + 27;
      var $p113 = __stackBase__ + 28;
      var $p2 = __stackBase__ + 29;
      var $p3 = __stackBase__ + 30;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      
      
      
      
      var $5 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      if ($5 == 1) {
        __label__ = 1;
        break;
      } else if ($5 == 2) {
        __label__ = 2;
        break;
      } else if ($5 == 4) {
        __label__ = 6;
        break;
      } else if ($5 == 8) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 1:
      __label__ = 15;
      break;
     case 2:
      
      
      var $8 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$p] = $8;
      
      
      
      var $12 = HEAP[HEAP[$self_addr] + 8];
      HEAP[$i] = $12;
      __label__ = 4;
      break;
     case 3:
      
      
      var $15 = HEAP[HEAP[$p]];
      HEAP[$p0] = $15;
      
      
      var $18 = HEAP[HEAP[$p] + 1];
      
      var $20 = HEAP[$p];
      HEAP[$20] = $18;
      
      var $22 = HEAP[$p] + 1;
      var $23 = HEAP[$p0];
      HEAP[$22] = $23;
      
      var $25 = HEAP[$p] + 2;
      HEAP[$p] = $25;
      __label__ = 4;
      break;
     case 4:
      
      var $27 = HEAP[$i] - 1;
      HEAP[$i] = $27;
      
      
      if (HEAP[$i] >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      __label__ = 15;
      break;
     case 6:
      
      
      var $32 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$p] = $32;
      
      
      
      var $36 = HEAP[HEAP[$self_addr] + 8];
      HEAP[$i] = $36;
      __label__ = 8;
      break;
     case 7:
      
      
      var $39 = HEAP[HEAP[$p]];
      HEAP[$p07] = $39;
      
      
      var $42 = HEAP[HEAP[$p] + 1];
      HEAP[$p1] = $42;
      
      
      var $45 = HEAP[HEAP[$p] + 3];
      
      var $47 = HEAP[$p];
      HEAP[$47] = $45;
      
      
      var $50 = HEAP[HEAP[$p] + 2];
      
      var $52 = HEAP[$p] + 1;
      HEAP[$52] = $50;
      
      var $54 = HEAP[$p] + 2;
      var $55 = HEAP[$p1];
      HEAP[$54] = $55;
      
      var $57 = HEAP[$p] + 3;
      var $58 = HEAP[$p07];
      HEAP[$57] = $58;
      
      var $60 = HEAP[$p] + 4;
      HEAP[$p] = $60;
      __label__ = 8;
      break;
     case 8:
      
      var $62 = HEAP[$i] - 1;
      HEAP[$i] = $62;
      
      
      if (HEAP[$i] >= 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      __label__ = 15;
      break;
     case 10:
      
      
      var $67 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$p] = $67;
      
      
      
      var $71 = HEAP[HEAP[$self_addr] + 8];
      HEAP[$i] = $71;
      __label__ = 12;
      break;
     case 11:
      
      
      var $74 = HEAP[HEAP[$p]];
      HEAP[$p012] = $74;
      
      
      var $77 = HEAP[HEAP[$p] + 1];
      HEAP[$p113] = $77;
      
      
      var $80 = HEAP[HEAP[$p] + 2];
      HEAP[$p2] = $80;
      
      
      var $83 = HEAP[HEAP[$p] + 3];
      HEAP[$p3] = $83;
      
      
      var $86 = HEAP[HEAP[$p] + 7];
      
      var $88 = HEAP[$p];
      HEAP[$88] = $86;
      
      
      var $91 = HEAP[HEAP[$p] + 6];
      
      var $93 = HEAP[$p] + 1;
      HEAP[$93] = $91;
      
      
      var $96 = HEAP[HEAP[$p] + 5];
      
      var $98 = HEAP[$p] + 2;
      HEAP[$98] = $96;
      
      
      var $101 = HEAP[HEAP[$p] + 4];
      
      var $103 = HEAP[$p] + 3;
      HEAP[$103] = $101;
      
      var $105 = HEAP[$p] + 4;
      var $106 = HEAP[$p3];
      HEAP[$105] = $106;
      
      var $108 = HEAP[$p] + 5;
      var $109 = HEAP[$p2];
      HEAP[$108] = $109;
      
      var $111 = HEAP[$p] + 6;
      var $112 = HEAP[$p113];
      HEAP[$111] = $112;
      
      var $114 = HEAP[$p] + 7;
      var $115 = HEAP[$p012];
      HEAP[$114] = $115;
      
      var $117 = HEAP[$p] + 8;
      HEAP[$p] = $117;
      __label__ = 12;
      break;
     case 12:
      
      var $119 = HEAP[$i] - 1;
      HEAP[$i] = $119;
      
      
      if (HEAP[$i] >= 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      __label__ = 15;
      break;
     case 14:
      var $122 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($122, __str31);
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 15:
      
      var $124 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $124;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 16;
      break;
     case 16:
      var $125 = HEAP[$0];
      HEAP[$retval] = $125;
      __label__ = 17;
      break;
     case 17:
      var $retval19 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_reverse($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 284;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 284);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $itemsize = __stackBase__ + 16;
      var $p = __stackBase__ + 20;
      var $q = __stackBase__ + 24;
      var $tmp = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      
      
      
      
      var $5 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      HEAP[$itemsize] = $5;
      
      
      if (HEAP[$itemsize] > 256) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str32, __str15, 1166, ___PRETTY_FUNCTION___9957);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] > 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      var $15 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$p] = $15;
      
      
      
      
      
      
      
      
      
      
      var $26 = HEAP[HEAP[$self_addr] + 12] + (HEAP[HEAP[$self_addr] + 8] - 1) * HEAP[$itemsize];
      HEAP[$q] = $26;
      __label__ = 5;
      break;
     case 4:
      var $27 = HEAP[$itemsize];
      var $tmp4 = $tmp;
      var $28 = HEAP[$p];
      _llvm_memcpy_p0i8_p0i8_i32($tmp4, $28, $27, 1, 0);
      var $29 = HEAP[$itemsize];
      var $30 = HEAP[$p];
      var $31 = HEAP[$q];
      _llvm_memcpy_p0i8_p0i8_i32($30, $31, $29, 1, 0);
      var $32 = HEAP[$itemsize];
      var $33 = HEAP[$q];
      var $tmp5 = $tmp;
      _llvm_memcpy_p0i8_p0i8_i32($33, $tmp5, $32, 1, 0);
      
      
      var $36 = HEAP[$p] + HEAP[$itemsize];
      HEAP[$p] = $36;
      
      
      
      var $40 = HEAP[$q] + (0 - HEAP[$itemsize]);
      HEAP[$q] = $40;
      __label__ = 5;
      break;
     case 5:
      
      
      
      if (HEAP[$p] < HEAP[$q]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      var $45 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $45;
      HEAP[$0] = __Py_NoneStruct;
      var $46 = HEAP[$0];
      HEAP[$retval] = $46;
      __label__ = 7;
      break;
     case 7:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_fromfile($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 72;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_222 = __stackBase__ + 12;
      var $iftmp_220 = __stackBase__ + 16;
      var $iftmp_218 = __stackBase__ + 20;
      var $iftmp_202 = __stackBase__ + 24;
      var $iftmp_200 = __stackBase__ + 28;
      var $iftmp_198 = __stackBase__ + 32;
      var $0 = __stackBase__ + 36;
      var $f = __stackBase__ + 40;
      var $n = __stackBase__ + 44;
      var $fp = __stackBase__ + 48;
      var $item = __stackBase__ + 52;
      var $itemsize = __stackBase__ + 56;
      var $nread = __stackBase__ + 60;
      var $newlength = __stackBase__ + 64;
      var $newbytes = __stackBase__ + 68;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str33, allocate([ $f, 0, 0, 0, $n, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 33;
      break;
     case 2:
      var $4 = HEAP[$f];
      var $5 = _PyFile_AsFile($4);
      HEAP[$fp] = $5;
      
      
      if (HEAP[$fp] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($8, __str34);
      HEAP[$0] = 0;
      __label__ = 33;
      break;
     case 4:
      
      
      if (HEAP[$n] > 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 5:
      
      
      var $13 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$item] = $13;
      
      
      
      
      var $18 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      HEAP[$itemsize] = $18;
      
      
      
      
      
      var $24 = HEAP[HEAP[$self_addr] + 8] + HEAP[$n];
      HEAP[$newlength] = $24;
      
      
      if (HEAP[$newlength] <= 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $29 = HEAP[$newlength] * HEAP[$itemsize];
      HEAP[$newbytes] = $29;
      var $30 = HEAP[$itemsize];
      var $31 = HEAP[$newbytes];
      var $32 = Math.floor($31 / $30);
      
      
      if ($32 != HEAP[$newlength]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if (HEAP[$newbytes] >= 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 8:
      
      
      if (HEAP[$newbytes] >= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      
      if (HEAP[$newbytes] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $41 = HEAP[$newbytes];
      HEAP[$iftmp_202] = $41;
      __label__ = 12;
      break;
     case 11:
      HEAP[$iftmp_202] = 1;
      __label__ = 12;
      break;
     case 12:
      var $42 = HEAP[$item];
      var $43 = HEAP[$iftmp_202];
      var $44 = _realloc($42, $43);
      HEAP[$iftmp_200] = $44;
      __label__ = 14;
      break;
     case 13:
      HEAP[$iftmp_200] = 0;
      __label__ = 14;
      break;
     case 14:
      var $45 = HEAP[$iftmp_200];
      HEAP[$iftmp_198] = $45;
      __label__ = 16;
      break;
     case 15:
      HEAP[$iftmp_198] = 0;
      __label__ = 16;
      break;
     case 16:
      var $46 = HEAP[$iftmp_198];
      HEAP[$item] = $46;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $49 = _PyErr_NoMemory();
      HEAP[$0] = 0;
      __label__ = 33;
      break;
     case 18:
      
      var $51 = HEAP[$self_addr] + 12;
      var $52 = HEAP[$item];
      HEAP[$51] = $52;
      
      
      
      
      
      
      
      var $60 = HEAP[HEAP[$self_addr] + 8] + HEAP[$n];
      var $61 = HEAP[$self_addr] + 8;
      HEAP[$61] = $60;
      
      
      
      var $65 = HEAP[HEAP[$self_addr] + 8];
      
      var $67 = HEAP[$self_addr] + 16;
      HEAP[$67] = $65;
      var $68 = HEAP[$n];
      var $69 = HEAP[$itemsize];
      
      
      
      
      
      
      
      
      
      var $79 = HEAP[$item] + (HEAP[HEAP[$self_addr] + 8] - HEAP[$n]) * HEAP[$itemsize];
      var $80 = HEAP[$fp];
      var $81 = _fread($79, $69, $68, $80);
      HEAP[$nread] = $81;
      
      
      
      if (HEAP[$n] > HEAP[$nread]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 19:
      
      
      
      
      
      
      
      
      
      var $94 = HEAP[HEAP[$self_addr] + 8] - (HEAP[$n] - HEAP[$nread]);
      var $95 = HEAP[$self_addr] + 8;
      HEAP[$95] = $94;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] * HEAP[$itemsize] >= 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 20:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] * HEAP[$itemsize] >= 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 21:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] * HEAP[$itemsize] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      
      var $122 = HEAP[HEAP[$self_addr] + 8] * HEAP[$itemsize];
      HEAP[$iftmp_222] = $122;
      __label__ = 24;
      break;
     case 23:
      HEAP[$iftmp_222] = 1;
      __label__ = 24;
      break;
     case 24:
      var $123 = HEAP[$item];
      var $124 = HEAP[$iftmp_222];
      var $125 = _realloc($123, $124);
      HEAP[$iftmp_220] = $125;
      __label__ = 26;
      break;
     case 25:
      HEAP[$iftmp_220] = 0;
      __label__ = 26;
      break;
     case 26:
      var $126 = HEAP[$iftmp_220];
      HEAP[$iftmp_218] = $126;
      __label__ = 28;
      break;
     case 27:
      HEAP[$iftmp_218] = 0;
      __label__ = 28;
      break;
     case 28:
      var $127 = HEAP[$iftmp_218];
      HEAP[$item] = $127;
      
      var $129 = HEAP[$self_addr] + 12;
      var $130 = HEAP[$item];
      HEAP[$129] = $130;
      
      
      
      var $134 = HEAP[HEAP[$self_addr] + 8];
      
      var $136 = HEAP[$self_addr] + 16;
      HEAP[$136] = $134;
      var $137 = HEAP[$fp];
      var $138 = _ferror($137);
      
      if ($138 != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $140 = HEAP[_PyExc_IOError];
      var $141 = _PyErr_SetFromErrno($140);
      var $142 = HEAP[$fp];
      _clearerr($142);
      __label__ = 31;
      break;
     case 30:
      var $143 = HEAP[_PyExc_EOFError];
      _PyErr_SetString($143, __str35);
      __label__ = 31;
      break;
     case 31:
      HEAP[$0] = 0;
      __label__ = 33;
      break;
     case 32:
      
      var $145 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $145;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 33;
      break;
     case 33:
      var $146 = HEAP[$0];
      HEAP[$retval] = $146;
      __label__ = 34;
      break;
     case 34:
      var $retval32 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval32;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_fromfile_as_read($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      
      
      if (HEAP[_Py_Py3kWarningFlag] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_DeprecationWarning];
      var $4 = _PyErr_WarnEx($3, __str36, 1);
      
      if ($4 < 0) {
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
      var $6 = HEAP[$self_addr];
      var $7 = HEAP[$args_addr];
      var $8 = _array_fromfile($6, $7);
      HEAP[$0] = $8;
      __label__ = 4;
      break;
     case 4:
      var $9 = HEAP[$0];
      HEAP[$retval] = $9;
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
  function _array_tofile($self, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $fp = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$f_addr];
      var $2 = _PyFile_AsFile($1);
      HEAP[$fp] = $2;
      
      
      if (HEAP[$fp] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($5, __str37);
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $12 = HEAP[HEAP[$self_addr] + 8];
      
      
      
      
      var $17 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      
      
      var $20 = HEAP[HEAP[$self_addr] + 12];
      var $21 = HEAP[$fp];
      var $22 = _fwrite($20, $17, $12, $21);
      
      
      
      
      if ($22 != HEAP[HEAP[$self_addr] + 8]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $27 = HEAP[_PyExc_IOError];
      var $28 = _PyErr_SetFromErrno($27);
      var $29 = HEAP[$fp];
      _clearerr($29);
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 5:
      
      var $31 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $31;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 6;
      break;
     case 6:
      var $32 = HEAP[$0];
      HEAP[$retval] = $32;
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
  function _array_tofile_as_write($self, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$f_addr] = $f;
      
      
      if (HEAP[_Py_Py3kWarningFlag] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_DeprecationWarning];
      var $4 = _PyErr_WarnEx($3, __str38, 1);
      
      if ($4 < 0) {
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
      var $6 = HEAP[$self_addr];
      var $7 = HEAP[$f_addr];
      var $8 = _array_tofile($6, $7);
      HEAP[$0] = $8;
      __label__ = 4;
      break;
     case 4:
      var $9 = HEAP[$0];
      HEAP[$retval] = $9;
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
  function _array_fromlist($self, $list) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 60;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $list_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_252 = __stackBase__ + 12;
      var $iftmp_250 = __stackBase__ + 16;
      var $iftmp_248 = __stackBase__ + 20;
      var $iftmp_239 = __stackBase__ + 24;
      var $iftmp_237 = __stackBase__ + 28;
      var $iftmp_235 = __stackBase__ + 32;
      var $0 = __stackBase__ + 36;
      var $n = __stackBase__ + 40;
      var $itemsize = __stackBase__ + 44;
      var $item = __stackBase__ + 48;
      var $i = __stackBase__ + 52;
      var $v = __stackBase__ + 56;
      
      HEAP[$self_addr] = $self;
      HEAP[$list_addr] = $list;
      
      
      
      
      var $5 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      HEAP[$itemsize] = $5;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$list_addr] + 4] + 84] & 33554432) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $13 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($13, __str39);
      HEAP[$0] = 0;
      __label__ = 32;
      break;
     case 2:
      var $14 = HEAP[$list_addr];
      var $15 = _PyList_Size($14);
      HEAP[$n] = $15;
      
      
      if (HEAP[$n] > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 3:
      
      
      var $20 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$item] = $20;
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$self_addr] + 8] + HEAP[$n]) * HEAP[$itemsize] >= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$self_addr] + 8] + HEAP[$n]) * HEAP[$itemsize] >= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$self_addr] + 8] + HEAP[$n]) * HEAP[$itemsize] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      var $55 = (HEAP[HEAP[$self_addr] + 8] + HEAP[$n]) * HEAP[$itemsize];
      HEAP[$iftmp_239] = $55;
      __label__ = 8;
      break;
     case 7:
      HEAP[$iftmp_239] = 1;
      __label__ = 8;
      break;
     case 8:
      var $56 = HEAP[$item];
      var $57 = HEAP[$iftmp_239];
      var $58 = _realloc($56, $57);
      HEAP[$iftmp_237] = $58;
      __label__ = 10;
      break;
     case 9:
      HEAP[$iftmp_237] = 0;
      __label__ = 10;
      break;
     case 10:
      var $59 = HEAP[$iftmp_237];
      HEAP[$iftmp_235] = $59;
      __label__ = 12;
      break;
     case 11:
      HEAP[$iftmp_235] = 0;
      __label__ = 12;
      break;
     case 12:
      var $60 = HEAP[$iftmp_235];
      HEAP[$item] = $60;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $63 = _PyErr_NoMemory();
      HEAP[$0] = 0;
      __label__ = 32;
      break;
     case 14:
      
      var $65 = HEAP[$self_addr] + 12;
      var $66 = HEAP[$item];
      HEAP[$65] = $66;
      
      
      
      
      
      
      
      var $74 = HEAP[HEAP[$self_addr] + 8] + HEAP[$n];
      var $75 = HEAP[$self_addr] + 8;
      HEAP[$75] = $74;
      
      
      
      var $79 = HEAP[HEAP[$self_addr] + 8];
      
      var $81 = HEAP[$self_addr] + 16;
      HEAP[$81] = $79;
      HEAP[$i] = 0;
      __label__ = 30;
      break;
     case 15:
      var $82 = HEAP[$list_addr];
      var $83 = HEAP[$i];
      var $84 = _PyList_GetItem($82, $83);
      HEAP[$v] = $84;
      
      
      
      
      var $89 = HEAP[HEAP[HEAP[$self_addr] + 20] + 12];
      
      
      
      
      
      
      
      var $97 = HEAP[HEAP[$self_addr] + 8] - HEAP[$n] + HEAP[$i];
      var $98 = HEAP[$self_addr];
      var $99 = HEAP[$v];
      var $100 = FUNCTION_TABLE[$89]($98, $97, $99);
      
      if ($100 != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 16:
      
      
      
      
      
      
      
      var $109 = HEAP[HEAP[$self_addr] + 8] - HEAP[$n];
      var $110 = HEAP[$self_addr] + 8;
      HEAP[$110] = $109;
      
      
      if (HEAP[$itemsize] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] > (2147483647 / HEAP[$itemsize] | 0)) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $119 = _PyErr_NoMemory();
      HEAP[$0] = $119;
      __label__ = 32;
      break;
     case 19:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] * HEAP[$itemsize] >= 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 20:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] * HEAP[$itemsize] >= 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 21:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] * HEAP[$itemsize] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      
      var $146 = HEAP[HEAP[$self_addr] + 8] * HEAP[$itemsize];
      HEAP[$iftmp_252] = $146;
      __label__ = 24;
      break;
     case 23:
      HEAP[$iftmp_252] = 1;
      __label__ = 24;
      break;
     case 24:
      var $147 = HEAP[$item];
      var $148 = HEAP[$iftmp_252];
      var $149 = _realloc($147, $148);
      HEAP[$iftmp_250] = $149;
      __label__ = 26;
      break;
     case 25:
      HEAP[$iftmp_250] = 0;
      __label__ = 26;
      break;
     case 26:
      var $150 = HEAP[$iftmp_250];
      HEAP[$iftmp_248] = $150;
      __label__ = 28;
      break;
     case 27:
      HEAP[$iftmp_248] = 0;
      __label__ = 28;
      break;
     case 28:
      var $151 = HEAP[$iftmp_248];
      HEAP[$item] = $151;
      
      var $153 = HEAP[$self_addr] + 12;
      var $154 = HEAP[$item];
      HEAP[$153] = $154;
      
      
      
      var $158 = HEAP[HEAP[$self_addr] + 8];
      
      var $160 = HEAP[$self_addr] + 16;
      HEAP[$160] = $158;
      HEAP[$0] = 0;
      __label__ = 32;
      break;
     case 29:
      
      var $162 = HEAP[$i] + 1;
      HEAP[$i] = $162;
      __label__ = 30;
      break;
     case 30:
      
      
      
      if (HEAP[$i] < HEAP[$n]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      var $167 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $167;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 32;
      break;
     case 32:
      var $168 = HEAP[$0];
      HEAP[$retval] = $168;
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
  function _array_tolist($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $list = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $v = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      
      
      
      var $4 = HEAP[HEAP[$self_addr] + 8];
      var $5 = _PyList_New($4);
      HEAP[$list] = $5;
      
      
      if (HEAP[$list] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 2:
      HEAP[$i] = 0;
      __label__ = 8;
      break;
     case 3:
      
      var $9 = HEAP[$self_addr];
      var $10 = HEAP[$i];
      var $11 = _getarrayitem($9, $10);
      HEAP[$v] = $11;
      
      
      if (HEAP[$v] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $17 = HEAP[HEAP[$list]] - 1;
      
      var $19 = HEAP[$list];
      HEAP[$19] = $17;
      
      
      
      
      if (HEAP[HEAP[$list]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $28 = HEAP[HEAP[HEAP[$list] + 4] + 24];
      var $29 = HEAP[$list];
      FUNCTION_TABLE[$28]($29);
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 7:
      var $30 = HEAP[$list];
      var $31 = HEAP[$i];
      var $32 = HEAP[$v];
      var $33 = _PyList_SetItem($30, $31, $32);
      
      var $35 = HEAP[$i] + 1;
      HEAP[$i] = $35;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] > HEAP[$i]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $42 = HEAP[$list];
      HEAP[$0] = $42;
      __label__ = 10;
      break;
     case 10:
      var $43 = HEAP[$0];
      HEAP[$retval] = $43;
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
  function _array_fromstring($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_273 = __stackBase__ + 12;
      var $iftmp_270 = __stackBase__ + 16;
      var $iftmp_267 = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $str = __stackBase__ + 28;
      var $n = __stackBase__ + 32;
      var $itemsize = __stackBase__ + 36;
      var $item = __stackBase__ + 40;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      
      
      
      
      var $5 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      HEAP[$itemsize] = $5;
      var $6 = HEAP[$args_addr];
      var $7 = __PyArg_ParseTuple_SizeT($6, __str40, allocate([ $str, 0, 0, 0, $n, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 2:
      
      
      
      
      if (HEAP[$n] % HEAP[$itemsize] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $13 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($13, __str41);
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 4:
      
      
      var $16 = HEAP[$n] / HEAP[$itemsize] | 0;
      HEAP[$n] = $16;
      
      
      if (HEAP[$n] > 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 5:
      
      
      var $21 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$item] = $21;
      
      
      
      
      
      
      
      if (2147483647 - HEAP[HEAP[$self_addr] + 8] < HEAP[$n]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] + HEAP[$n] > (2147483647 / HEAP[$itemsize] | 0)) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $38 = _PyErr_NoMemory();
      HEAP[$0] = $38;
      __label__ = 21;
      break;
     case 8:
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$self_addr] + 8] + HEAP[$n]) * HEAP[$itemsize] >= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$self_addr] + 8] + HEAP[$n]) * HEAP[$itemsize] >= 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$self_addr] + 8] + HEAP[$n]) * HEAP[$itemsize] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      
      var $73 = (HEAP[HEAP[$self_addr] + 8] + HEAP[$n]) * HEAP[$itemsize];
      HEAP[$iftmp_273] = $73;
      __label__ = 13;
      break;
     case 12:
      HEAP[$iftmp_273] = 1;
      __label__ = 13;
      break;
     case 13:
      var $74 = HEAP[$item];
      var $75 = HEAP[$iftmp_273];
      var $76 = _realloc($74, $75);
      HEAP[$iftmp_270] = $76;
      __label__ = 15;
      break;
     case 14:
      HEAP[$iftmp_270] = 0;
      __label__ = 15;
      break;
     case 15:
      var $77 = HEAP[$iftmp_270];
      HEAP[$iftmp_267] = $77;
      __label__ = 17;
      break;
     case 16:
      HEAP[$iftmp_267] = 0;
      __label__ = 17;
      break;
     case 17:
      var $78 = HEAP[$iftmp_267];
      HEAP[$item] = $78;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $81 = _PyErr_NoMemory();
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 19:
      
      var $83 = HEAP[$self_addr] + 12;
      var $84 = HEAP[$item];
      HEAP[$83] = $84;
      
      
      
      
      
      
      
      var $92 = HEAP[HEAP[$self_addr] + 8] + HEAP[$n];
      var $93 = HEAP[$self_addr] + 8;
      HEAP[$93] = $92;
      
      
      
      var $97 = HEAP[HEAP[$self_addr] + 8];
      
      var $99 = HEAP[$self_addr] + 16;
      HEAP[$99] = $97;
      
      
      var $102 = HEAP[$itemsize] * HEAP[$n];
      var $103 = HEAP[$str];
      
      
      
      
      
      
      
      
      
      var $113 = HEAP[$item] + (HEAP[HEAP[$self_addr] + 8] - HEAP[$n]) * HEAP[$itemsize];
      _llvm_memcpy_p0i8_p0i8_i32($113, $103, $102, 1, 0);
      __label__ = 20;
      break;
     case 20:
      
      var $115 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $115;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 21;
      break;
     case 21:
      var $116 = HEAP[$0];
      HEAP[$retval] = $116;
      __label__ = 22;
      break;
     case 22:
      var $retval21 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval21;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_tostring($self, $unused) {
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
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] <= (2147483647 / HEAP[HEAP[HEAP[$self_addr] + 20] + 4] | 0)) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      var $20 = HEAP[HEAP[$self_addr] + 8] * HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      
      
      var $23 = HEAP[HEAP[$self_addr] + 12];
      var $24 = _PyString_FromStringAndSize($23, $20);
      HEAP[$0] = $24;
      __label__ = 3;
      break;
     case 2:
      var $25 = _PyErr_NoMemory();
      HEAP[$0] = $25;
      __label__ = 3;
      break;
     case 3:
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
  function _array_fromunicode($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_297 = __stackBase__ + 12;
      var $iftmp_294 = __stackBase__ + 16;
      var $iftmp_291 = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $ustr = __stackBase__ + 28;
      var $n = __stackBase__ + 32;
      var $item = __stackBase__ + 36;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str42, allocate([ $ustr, 0, 0, 0, $n, 0, 0, 0 ], [ "i16**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 2:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20]] != 117) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($10, __str43);
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 4:
      
      
      if (HEAP[$n] > 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 5:
      
      
      
      var $16 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$item] = $16;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] > 2147483647 - HEAP[$n]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $24 = _PyErr_NoMemory();
      HEAP[$0] = $24;
      __label__ = 20;
      break;
     case 7:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] + HEAP[$n] <= 1073741823) {
        __label__ = 8;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$self_addr] + 8] + HEAP[$n]) * 2 >= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$self_addr] + 8] + HEAP[$n]) * 2 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      var $54 = (HEAP[HEAP[$self_addr] + 8] + HEAP[$n]) * 2;
      HEAP[$iftmp_297] = $54;
      __label__ = 12;
      break;
     case 11:
      HEAP[$iftmp_297] = 1;
      __label__ = 12;
      break;
     case 12:
      
      var $56 = HEAP[$item];
      var $57 = HEAP[$iftmp_297];
      var $58 = _realloc($56, $57);
      var $59 = $58;
      HEAP[$iftmp_294] = $59;
      __label__ = 14;
      break;
     case 13:
      HEAP[$iftmp_294] = 0;
      __label__ = 14;
      break;
     case 14:
      var $60 = HEAP[$iftmp_294];
      HEAP[$iftmp_291] = $60;
      __label__ = 16;
      break;
     case 15:
      HEAP[$iftmp_291] = 0;
      __label__ = 16;
      break;
     case 16:
      var $61 = HEAP[$iftmp_291];
      HEAP[$item] = $61;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $64 = _PyErr_NoMemory();
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 18:
      
      var $66 = HEAP[$item];
      
      var $68 = HEAP[$self_addr] + 12;
      HEAP[$68] = $66;
      
      
      
      
      
      
      
      var $76 = HEAP[HEAP[$self_addr] + 8] + HEAP[$n];
      var $77 = HEAP[$self_addr] + 8;
      HEAP[$77] = $76;
      
      
      
      var $81 = HEAP[HEAP[$self_addr] + 8];
      
      var $83 = HEAP[$self_addr] + 16;
      HEAP[$83] = $81;
      
      var $85 = HEAP[$n] * 2;
      
      
      
      
      
      
      
      
      
      
      var $96 = HEAP[$item] + 2 * HEAP[HEAP[$self_addr] + 8] + 2 * (0 - HEAP[$n]);
      var $97 = HEAP[$ustr];
      _llvm_memcpy_p0i8_p0i8_i32($96, $97, $85, 1, 0);
      __label__ = 19;
      break;
     case 19:
      
      var $99 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $99;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 20;
      break;
     case 20:
      var $100 = HEAP[$0];
      HEAP[$retval] = $100;
      __label__ = 21;
      break;
     case 21:
      var $retval20 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_tounicode($self, $unused) {
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
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20]] != 117) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($7, __str44);
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      
      var $11 = HEAP[HEAP[$self_addr] + 8];
      
      
      
      var $15 = HEAP[HEAP[$self_addr] + 12];
      var $16 = _PyUnicodeUCS2_FromUnicode($15, $11);
      HEAP[$0] = $16;
      __label__ = 3;
      break;
     case 3:
      var $17 = HEAP[$0];
      HEAP[$retval] = $17;
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
  function _array_reduce($array) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $array_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $dict = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      var $list = __stackBase__ + 20;
      
      HEAP[$array_addr] = $array;
      
      var $2 = HEAP[$array_addr];
      var $3 = _PyObject_GetAttrString($2, __str45);
      HEAP[$dict] = $3;
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $6 = HEAP[_PyExc_AttributeError];
      var $7 = _PyErr_ExceptionMatches($6);
      
      if ($7 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 3:
      _PyErr_Clear();
      HEAP[$dict] = __Py_NoneStruct;
      
      
      
      var $12 = HEAP[HEAP[$dict]] + 1;
      
      var $14 = HEAP[$dict];
      HEAP[$14] = $12;
      __label__ = 4;
      break;
     case 4:
      var $15 = HEAP[$array_addr];
      var $16 = _array_tolist($15, 0);
      HEAP[$list] = $16;
      
      
      if (HEAP[$list] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $22 = HEAP[HEAP[$dict]] - 1;
      
      var $24 = HEAP[$dict];
      HEAP[$24] = $22;
      
      
      
      
      if (HEAP[HEAP[$dict]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $33 = HEAP[HEAP[HEAP[$dict] + 4] + 24];
      var $34 = HEAP[$dict];
      FUNCTION_TABLE[$33]($34);
      __label__ = 7;
      break;
     case 7:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 8:
      
      
      
      
      var $39 = HEAP[HEAP[HEAP[$array_addr] + 20]];
      
      
      
      var $43 = HEAP[HEAP[$array_addr] + 4];
      var $44 = HEAP[$list];
      var $45 = HEAP[$dict];
      var $46 = __Py_BuildValue_SizeT(__str46, allocate([ $43, 0, 0, 0, $39, 0, 0, 0, $44, 0, 0, 0, $45, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $46;
      
      
      
      var $50 = HEAP[HEAP[$list]] - 1;
      
      var $52 = HEAP[$list];
      HEAP[$52] = $50;
      
      
      
      
      if (HEAP[HEAP[$list]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $61 = HEAP[HEAP[HEAP[$list] + 4] + 24];
      var $62 = HEAP[$list];
      FUNCTION_TABLE[$61]($62);
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $66 = HEAP[HEAP[$dict]] - 1;
      
      var $68 = HEAP[$dict];
      HEAP[$68] = $66;
      
      
      
      
      if (HEAP[HEAP[$dict]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $77 = HEAP[HEAP[HEAP[$dict] + 4] + 24];
      var $78 = HEAP[$dict];
      FUNCTION_TABLE[$77]($78);
      __label__ = 12;
      break;
     case 12:
      var $79 = HEAP[$result];
      HEAP[$0] = $79;
      __label__ = 13;
      break;
     case 13:
      var $80 = HEAP[$0];
      HEAP[$retval] = $80;
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
  function _array_get_typecode($a, $closure) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 17;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 17);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr = __stackBase__;
      var $closure_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $tc = __stackBase__ + 16;
      
      HEAP[$a_addr] = $a;
      HEAP[$closure_addr] = $closure;
      
      
      
      
      
      var $6 = HEAP[HEAP[HEAP[$a_addr] + 20]] & 255;
      HEAP[$tc] = $6;
      var $7 = _PyString_FromStringAndSize($tc, 1);
      HEAP[$0] = $7;
      var $8 = HEAP[$0];
      HEAP[$retval] = $8;
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
  function _array_get_itemsize($a, $closure) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr = __stackBase__;
      var $closure_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$a_addr] = $a;
      HEAP[$closure_addr] = $closure;
      
      
      
      
      var $5 = HEAP[HEAP[HEAP[$a_addr] + 20] + 4];
      var $6 = _PyInt_FromLong($5);
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
  function _array_repr($a) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 285;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 285);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $buf = __stackBase__ + 12;
      var $typecode = __stackBase__ + 268;
      var $s = __stackBase__ + 269;
      var $t = __stackBase__ + 273;
      var $v = __stackBase__ + 277;
      var $len = __stackBase__ + 281;
      
      HEAP[$a_addr] = $a;
      HEAP[$v] = 0;
      
      
      
      var $4 = HEAP[HEAP[$a_addr] + 8];
      HEAP[$len] = $4;
      
      
      
      
      
      var $10 = HEAP[HEAP[HEAP[$a_addr] + 20]] & 255;
      HEAP[$typecode] = $10;
      
      
      if (HEAP[$len] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $14 = HEAP[$typecode];
      var $buf1 = $buf;
      var $15 = _PyOS_snprintf($buf1, 256, __str74, allocate([ $14, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      var $buf2 = $buf;
      var $16 = _PyString_FromString($buf2);
      HEAP[$0] = $16;
      __label__ = 11;
      break;
     case 2:
      
      
      if (HEAP[$typecode] == 99) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $19 = HEAP[$a_addr];
      var $20 = _array_tostring($19, 0);
      HEAP[$v] = $20;
      __label__ = 7;
      break;
     case 4:
      
      
      if (HEAP[$typecode] == 117) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $23 = HEAP[$a_addr];
      var $24 = _array_tounicode($23, 0);
      HEAP[$v] = $24;
      __label__ = 7;
      break;
     case 6:
      var $25 = HEAP[$a_addr];
      var $26 = _array_tolist($25, 0);
      HEAP[$v] = $26;
      __label__ = 7;
      break;
     case 7:
      var $27 = HEAP[$v];
      var $28 = _PyObject_Repr($27);
      HEAP[$t] = $28;
      
      
      if (HEAP[$v] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      var $34 = HEAP[HEAP[$v]] - 1;
      
      var $36 = HEAP[$v];
      HEAP[$36] = $34;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $45 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $46 = HEAP[$v];
      FUNCTION_TABLE[$45]($46);
      __label__ = 10;
      break;
     case 10:
      
      var $48 = HEAP[$typecode];
      var $buf12 = $buf;
      var $49 = _PyOS_snprintf($buf12, 256, __str75, allocate([ $48, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      var $buf13 = $buf;
      var $50 = _PyString_FromString($buf13);
      HEAP[$s] = $50;
      var $51 = HEAP[$t];
      _PyString_ConcatAndDel($s, $51);
      var $52 = _PyString_FromString(__str76);
      _PyString_ConcatAndDel($s, $52);
      var $53 = HEAP[$s];
      HEAP[$0] = $53;
      __label__ = 11;
      break;
     case 11:
      var $54 = HEAP[$0];
      HEAP[$retval] = $54;
      __label__ = 12;
      break;
     case 12:
      var $retval15 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_subscr($self, $item) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 60;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $item_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $start = __stackBase__ + 20;
      var $stop = __stackBase__ + 24;
      var $step = __stackBase__ + 28;
      var $slicelength = __stackBase__ + 32;
      var $cur = __stackBase__ + 36;
      var $i10 = __stackBase__ + 40;
      var $result = __stackBase__ + 44;
      var $ar = __stackBase__ + 48;
      var $itemsize = __stackBase__ + 52;
      var $result16 = __stackBase__ + 56;
      
      HEAP[$self_addr] = $self;
      HEAP[$item_addr] = $item;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$item_addr] + 4] + 48] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$item_addr] + 4] + 84] & 131072) == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[HEAP[$item_addr] + 4] + 48] + 152] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $22 = HEAP[_PyExc_IndexError];
      var $23 = HEAP[$item_addr];
      var $24 = _PyNumber_AsSsize_t($23, $22);
      HEAP[$i] = $24;
      
      var $26 = HEAP[$i] == -1;
      if ($26) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $27 = _PyErr_Occurred();
      
      if ($27 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 6:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      var $36 = HEAP[HEAP[$self_addr] + 8] + HEAP[$i];
      HEAP[$i] = $36;
      __label__ = 8;
      break;
     case 8:
      var $37 = HEAP[$self_addr];
      var $38 = HEAP[$i];
      var $39 = _array_item($37, $38);
      HEAP[$0] = $39;
      __label__ = 25;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$item_addr] + 4] == _PySlice_Type) {
        __label__ = 10;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 10:
      
      
      
      
      var $48 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      HEAP[$itemsize] = $48;
      
      
      
      var $52 = HEAP[HEAP[$self_addr] + 8];
      
      var $54 = HEAP[$item_addr];
      var $55 = _PySlice_GetIndicesEx($54, $52, $start, $stop, $step, $slicelength);
      
      if ($55 < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 12:
      
      
      if (HEAP[$slicelength] <= 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      var $61 = HEAP[HEAP[$self_addr] + 20];
      var $62 = _newarrayobject(_Arraytype, 0, $61);
      HEAP[$0] = $62;
      __label__ = 25;
      break;
     case 14:
      
      
      if (HEAP[$step] == 1) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      
      
      var $67 = HEAP[HEAP[$self_addr] + 20];
      var $68 = HEAP[$slicelength];
      var $69 = _newarrayobject(_Arraytype, $68, $67);
      HEAP[$result16] = $69;
      
      
      if (HEAP[$result16] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 17:
      
      
      var $74 = HEAP[$slicelength] * HEAP[$itemsize];
      
      
      
      
      
      
      var $81 = HEAP[HEAP[$self_addr] + 12] + HEAP[$start] * HEAP[$itemsize];
      
      
      
      var $85 = HEAP[HEAP[$result16] + 12];
      _llvm_memcpy_p0i8_p0i8_i32($85, $81, $74, 1, 0);
      var $86 = HEAP[$result16];
      HEAP[$0] = $86;
      __label__ = 25;
      break;
     case 18:
      
      
      var $89 = HEAP[HEAP[$self_addr] + 20];
      var $90 = HEAP[$slicelength];
      var $91 = _newarrayobject(_Arraytype, $90, $89);
      HEAP[$result] = $91;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 20:
      
      var $95 = HEAP[$result];
      HEAP[$ar] = $95;
      var $96 = HEAP[$start];
      HEAP[$cur] = $96;
      HEAP[$i10] = 0;
      __label__ = 22;
      break;
     case 21:
      var $97 = HEAP[$itemsize];
      
      
      
      
      
      
      var $104 = HEAP[HEAP[$self_addr] + 12] + HEAP[$cur] * HEAP[$itemsize];
      
      
      
      
      
      
      var $111 = HEAP[HEAP[$ar] + 12] + HEAP[$i10] * HEAP[$itemsize];
      _llvm_memcpy_p0i8_p0i8_i32($111, $104, $97, 1, 0);
      
      
      var $114 = HEAP[$cur] + HEAP[$step];
      HEAP[$cur] = $114;
      
      var $116 = HEAP[$i10] + 1;
      HEAP[$i10] = $116;
      __label__ = 22;
      break;
     case 22:
      
      
      
      if (HEAP[$i10] < HEAP[$slicelength]) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      var $120 = HEAP[$result];
      HEAP[$0] = $120;
      __label__ = 25;
      break;
     case 24:
      var $121 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($121, __str77);
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 25:
      var $122 = HEAP[$0];
      HEAP[$retval] = $122;
      __label__ = 26;
      break;
     case 26:
      var $retval27 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_ass_subscr($self, $item, $value) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 76;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 76);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $item_addr = __stackBase__ + 4;
      var $value_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $start = __stackBase__ + 20;
      var $stop = __stackBase__ + 24;
      var $step = __stackBase__ + 28;
      var $slicelength = __stackBase__ + 32;
      var $needed = __stackBase__ + 36;
      var $other = __stackBase__ + 40;
      var $itemsize = __stackBase__ + 44;
      var $i = __stackBase__ + 48;
      var $ret = __stackBase__ + 52;
      var $cur = __stackBase__ + 56;
      var $i51 = __stackBase__ + 60;
      var $lim = __stackBase__ + 64;
      var $cur64 = __stackBase__ + 68;
      var $i65 = __stackBase__ + 72;
      
      HEAP[$self_addr] = $self;
      HEAP[$item_addr] = $item;
      HEAP[$value_addr] = $value;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$item_addr] + 4] + 48] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$item_addr] + 4] + 84] & 131072) == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[HEAP[$item_addr] + 4] + 48] + 152] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $22 = HEAP[_PyExc_IndexError];
      var $23 = HEAP[$item_addr];
      var $24 = _PyNumber_AsSsize_t($23, $22);
      HEAP[$i] = $24;
      
      var $26 = HEAP[$i] == -1;
      if ($26) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $27 = _PyErr_Occurred();
      
      if ($27 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 69;
      break;
     case 6:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      var $36 = HEAP[HEAP[$self_addr] + 8] + HEAP[$i];
      HEAP[$i] = $36;
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] <= HEAP[$i]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $45 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($45, __str21);
      HEAP[$0] = -1;
      __label__ = 69;
      break;
     case 11:
      
      
      if (HEAP[$value_addr] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $48 = HEAP[$i];
      HEAP[$start] = $48;
      
      var $50 = HEAP[$i] + 1;
      HEAP[$stop] = $50;
      HEAP[$step] = 1;
      HEAP[$slicelength] = 1;
      __label__ = 19;
      break;
     case 13:
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$self_addr] + 20] + 12];
      var $56 = HEAP[$self_addr];
      var $57 = HEAP[$i];
      var $58 = HEAP[$value_addr];
      var $59 = FUNCTION_TABLE[$55]($56, $57, $58);
      HEAP[$0] = $59;
      __label__ = 69;
      break;
     case 14:
      
      
      
      
      if (HEAP[HEAP[$item_addr] + 4] == _PySlice_Type) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      
      
      
      var $67 = HEAP[HEAP[$self_addr] + 8];
      
      var $69 = HEAP[$item_addr];
      var $70 = _PySlice_GetIndicesEx($69, $67, $start, $stop, $step, $slicelength);
      
      if ($70 < 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      HEAP[$0] = -1;
      __label__ = 69;
      break;
     case 17:
      __label__ = 19;
      break;
     case 18:
      var $72 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($72, __str78);
      HEAP[$0] = -1;
      __label__ = 69;
      break;
     case 19:
      
      
      if (HEAP[$value_addr] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      HEAP[$other] = 0;
      HEAP[$needed] = 0;
      __label__ = 33;
      break;
     case 21:
      
      
      
      
      if (HEAP[HEAP[$value_addr] + 4] == _Arraytype) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      var $81 = HEAP[HEAP[$value_addr] + 4];
      var $82 = _PyType_IsSubtype($81, _Arraytype);
      
      if ($82 != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 23:
      
      var $85 = HEAP[$value_addr];
      HEAP[$other] = $85;
      
      
      
      var $89 = HEAP[HEAP[$other] + 8];
      HEAP[$needed] = $89;
      
      
      
      if (HEAP[$self_addr] == HEAP[$other]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 24:
      var $93 = HEAP[$other];
      var $94 = HEAP[$needed];
      var $95 = _array_slice($93, 0, $94);
      HEAP[$value_addr] = $95;
      
      
      if (HEAP[$value_addr] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      HEAP[$0] = -1;
      __label__ = 69;
      break;
     case 26:
      var $98 = HEAP[$self_addr];
      var $99 = HEAP[$item_addr];
      var $100 = HEAP[$value_addr];
      var $101 = _array_ass_subscr($98, $99, $100);
      HEAP[$ret] = $101;
      
      
      
      var $105 = HEAP[HEAP[$value_addr]] - 1;
      
      var $107 = HEAP[$value_addr];
      HEAP[$107] = $105;
      
      
      
      
      if (HEAP[HEAP[$value_addr]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $116 = HEAP[HEAP[HEAP[$value_addr] + 4] + 24];
      var $117 = HEAP[$value_addr];
      FUNCTION_TABLE[$116]($117);
      __label__ = 28;
      break;
     case 28:
      var $118 = HEAP[$ret];
      HEAP[$0] = $118;
      __label__ = 69;
      break;
     case 29:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$other] + 20] != HEAP[HEAP[$self_addr] + 20]) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      var $126 = _PyErr_BadArgument();
      HEAP[$0] = -1;
      __label__ = 69;
      break;
     case 31:
      __label__ = 33;
      break;
     case 32:
      
      
      
      
      var $131 = HEAP[HEAP[HEAP[$value_addr] + 4] + 12];
      var $132 = HEAP[_PyExc_TypeError];
      var $133 = _PyErr_Format($132, __str20, allocate([ $131, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 69;
      break;
     case 33:
      
      
      
      
      var $138 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      HEAP[$itemsize] = $138;
      
      
      if (HEAP[$step] <= 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      if (HEAP[$stop] < HEAP[$start]) {
        __label__ = 37;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      if (HEAP[$step] >= 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      
      if (HEAP[$stop] > HEAP[$start]) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      var $149 = HEAP[$start];
      HEAP[$stop] = $149;
      __label__ = 38;
      break;
     case 38:
      
      
      if (HEAP[$step] == 1) {
        __label__ = 39;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 39:
      
      
      
      if (HEAP[$slicelength] > HEAP[$needed]) {
        __label__ = 40;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 40:
      
      
      
      
      
      
      
      var $162 = (HEAP[HEAP[$self_addr] + 8] - HEAP[$stop]) * HEAP[$itemsize];
      
      
      
      
      
      
      var $169 = HEAP[HEAP[$self_addr] + 12] + HEAP[$stop] * HEAP[$itemsize];
      
      
      
      
      
      
      
      
      var $178 = HEAP[HEAP[$self_addr] + 12] + (HEAP[$start] + HEAP[$needed]) * HEAP[$itemsize];
      _llvm_memmove_p0i8_p0i8_i32($178, $169, $162, 1, 0);
      
      
      
      
      
      
      
      var $186 = HEAP[HEAP[$self_addr] + 8] + HEAP[$needed] - HEAP[$slicelength];
      var $187 = HEAP[$self_addr];
      var $188 = _array_resize($187, $186);
      
      if ($188 < 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      HEAP[$0] = -1;
      __label__ = 69;
      break;
     case 42:
      __label__ = 47;
      break;
     case 43:
      
      
      
      if (HEAP[$slicelength] < HEAP[$needed]) {
        __label__ = 44;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 44:
      
      
      
      
      
      
      
      var $200 = HEAP[HEAP[$self_addr] + 8] + HEAP[$needed] - HEAP[$slicelength];
      var $201 = HEAP[$self_addr];
      var $202 = _array_resize($201, $200);
      
      if ($202 < 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      HEAP[$0] = -1;
      __label__ = 69;
      break;
     case 46:
      
      
      
      
      
      
      
      
      
      var $213 = (HEAP[HEAP[$self_addr] + 8] - HEAP[$start] - HEAP[$needed]) * HEAP[$itemsize];
      
      
      
      
      
      
      var $220 = HEAP[HEAP[$self_addr] + 12] + HEAP[$stop] * HEAP[$itemsize];
      
      
      
      
      
      
      
      
      var $229 = HEAP[HEAP[$self_addr] + 12] + (HEAP[$start] + HEAP[$needed]) * HEAP[$itemsize];
      _llvm_memmove_p0i8_p0i8_i32($229, $220, $213, 1, 0);
      __label__ = 47;
      break;
     case 47:
      
      
      if (HEAP[$needed] > 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      
      var $234 = HEAP[$needed] * HEAP[$itemsize];
      
      
      var $237 = HEAP[HEAP[$other] + 12];
      
      
      
      
      
      
      var $244 = HEAP[HEAP[$self_addr] + 12] + HEAP[$start] * HEAP[$itemsize];
      _llvm_memcpy_p0i8_p0i8_i32($244, $237, $234, 1, 0);
      __label__ = 49;
      break;
     case 49:
      HEAP[$0] = 0;
      __label__ = 69;
      break;
     case 50:
      
      
      if (HEAP[$needed] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 51:
      
      
      if (HEAP[$step] < 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      
      var $250 = HEAP[$start] + 1;
      HEAP[$stop] = $250;
      
      
      
      
      
      
      var $257 = (HEAP[$slicelength] - 1) * HEAP[$step] + HEAP[$stop] - 1;
      HEAP[$start] = $257;
      
      var $259 = 0 - HEAP[$step];
      HEAP[$step] = $259;
      __label__ = 53;
      break;
     case 53:
      var $260 = HEAP[$start];
      HEAP[$cur] = $260;
      HEAP[$i51] = 0;
      __label__ = 57;
      break;
     case 54:
      
      var $262 = HEAP[$step] - 1;
      HEAP[$lim] = $262;
      
      
      
      
      
      
      
      
      if (HEAP[$cur] + HEAP[$step] >= HEAP[HEAP[$self_addr] + 8]) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      
      
      
      
      
      
      var $277 = HEAP[HEAP[$self_addr] + 8] - HEAP[$cur] - 1;
      HEAP[$lim] = $277;
      __label__ = 56;
      break;
     case 56:
      
      
      var $280 = HEAP[$lim] * HEAP[$itemsize];
      
      
      
      
      
      
      
      var $288 = HEAP[HEAP[$self_addr] + 12] + (HEAP[$cur] + 1) * HEAP[$itemsize];
      
      
      
      
      
      
      
      
      var $297 = HEAP[HEAP[$self_addr] + 12] + (HEAP[$cur] - HEAP[$i51]) * HEAP[$itemsize];
      _llvm_memmove_p0i8_p0i8_i32($297, $288, $280, 1, 0);
      
      
      var $300 = HEAP[$cur] + HEAP[$step];
      HEAP[$cur] = $300;
      
      var $302 = HEAP[$i51] + 1;
      HEAP[$i51] = $302;
      __label__ = 57;
      break;
     case 57:
      
      
      
      if (HEAP[$i51] < HEAP[$slicelength]) {
        __label__ = 54;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 58:
      
      
      
      
      var $310 = HEAP[$slicelength] * HEAP[$step] + HEAP[$start];
      HEAP[$cur] = $310;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] > HEAP[$cur]) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      
      
      
      
      
      
      
      var $324 = (HEAP[HEAP[$self_addr] + 8] - HEAP[$cur]) * HEAP[$itemsize];
      
      
      
      
      
      
      var $331 = HEAP[HEAP[$self_addr] + 12] + HEAP[$cur] * HEAP[$itemsize];
      
      
      
      
      
      
      
      
      var $340 = HEAP[HEAP[$self_addr] + 12] + (HEAP[$cur] - HEAP[$slicelength]) * HEAP[$itemsize];
      _llvm_memmove_p0i8_p0i8_i32($340, $331, $324, 1, 0);
      __label__ = 60;
      break;
     case 60:
      
      
      
      
      
      var $346 = HEAP[HEAP[$self_addr] + 8] - HEAP[$slicelength];
      var $347 = HEAP[$self_addr];
      var $348 = _array_resize($347, $346);
      
      if ($348 < 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      HEAP[$0] = -1;
      __label__ = 69;
      break;
     case 62:
      HEAP[$0] = 0;
      __label__ = 69;
      break;
     case 63:
      
      
      
      if (HEAP[$needed] != HEAP[$slicelength]) {
        __label__ = 64;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 64:
      var $353 = HEAP[$slicelength];
      var $354 = HEAP[_PyExc_ValueError];
      var $355 = HEAP[$needed];
      var $356 = _PyErr_Format($354, __str79, allocate([ $355, 0, 0, 0, $353, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 69;
      break;
     case 65:
      var $357 = HEAP[$start];
      HEAP[$cur64] = $357;
      HEAP[$i65] = 0;
      __label__ = 67;
      break;
     case 66:
      var $358 = HEAP[$itemsize];
      
      
      
      
      
      
      var $365 = HEAP[HEAP[$other] + 12] + HEAP[$i65] * HEAP[$itemsize];
      
      
      
      
      
      
      var $372 = HEAP[HEAP[$self_addr] + 12] + HEAP[$cur64] * HEAP[$itemsize];
      _llvm_memcpy_p0i8_p0i8_i32($372, $365, $358, 1, 0);
      
      
      var $375 = HEAP[$cur64] + HEAP[$step];
      HEAP[$cur64] = $375;
      
      var $377 = HEAP[$i65] + 1;
      HEAP[$i65] = $377;
      __label__ = 67;
      break;
     case 67:
      
      
      
      if (HEAP[$i65] < HEAP[$slicelength]) {
        __label__ = 66;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 68:
      HEAP[$0] = 0;
      __label__ = 69;
      break;
     case 69:
      var $381 = HEAP[$0];
      HEAP[$retval] = $381;
      __label__ = 70;
      break;
     case 70:
      var $retval72 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval72;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_buffer_getreadbuf($self, $index, $ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $index_addr = __stackBase__ + 4;
      var $ptr_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$index_addr] = $index;
      HEAP[$ptr_addr] = $ptr;
      
      
      if (HEAP[$index_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_SystemError];
      _PyErr_SetString($3, __str81);
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 2:
      
      
      var $6 = HEAP[HEAP[$self_addr] + 12];
      var $7 = HEAP[$ptr_addr];
      HEAP[$7] = $6;
      
      
      
      if (HEAP[HEAP[$ptr_addr]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = HEAP[_emptybuf];
      var $12 = HEAP[$ptr_addr];
      HEAP[$12] = $11;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      
      
      
      
      var $22 = HEAP[HEAP[$self_addr] + 8] * HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
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
  function _array_buffer_getwritebuf($self, $index, $ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $index_addr = __stackBase__ + 4;
      var $ptr_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$index_addr] = $index;
      HEAP[$ptr_addr] = $ptr;
      
      
      if (HEAP[$index_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_SystemError];
      _PyErr_SetString($3, __str81);
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 2:
      
      
      var $6 = HEAP[HEAP[$self_addr] + 12];
      var $7 = HEAP[$ptr_addr];
      HEAP[$7] = $6;
      
      
      
      if (HEAP[HEAP[$ptr_addr]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = HEAP[_emptybuf];
      var $12 = HEAP[$ptr_addr];
      HEAP[$12] = $11;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      
      
      
      
      var $22 = HEAP[HEAP[$self_addr] + 8] * HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
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
  function _array_buffer_getsegcount($self, $lenp) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $lenp_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$lenp_addr] = $lenp;
      
      
      if (HEAP[$lenp_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      var $12 = HEAP[HEAP[$self_addr] + 8] * HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      var $13 = HEAP[$lenp_addr];
      HEAP[$13] = $12;
      __label__ = 2;
      break;
     case 2:
      HEAP[$0] = 1;
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
  function _array_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 69;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 69);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $c = __stackBase__ + 20;
      var $initial = __stackBase__ + 21;
      var $it = __stackBase__ + 25;
      var $descr = __stackBase__ + 29;
      var $a = __stackBase__ + 33;
      var $len = __stackBase__ + 37;
      var $i = __stackBase__ + 41;
      var $v = __stackBase__ + 45;
      var $t_initial = __stackBase__ + 49;
      var $v42 = __stackBase__ + 53;
      var $n = __stackBase__ + 57;
      var $self = __stackBase__ + 61;
      var $item = __stackBase__ + 65;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$initial] = 0;
      HEAP[$it] = 0;
      
      
      if (HEAP[$type_addr] == _Arraytype) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[$kwds_addr];
      var $4 = __PyArg_NoKeywords(__str82, $3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 76;
      break;
     case 3:
      var $6 = HEAP[$args_addr];
      var $7 = __PyArg_ParseTuple_SizeT($6, __str83, allocate([ $c, 0, 0, 0, $initial, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 76;
      break;
     case 5:
      
      
      if (HEAP[$initial] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$initial] + 4] + 84] & 33554432) == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$initial] + 4] + 84] & 134217728) == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$initial] + 4] + 84] & 67108864) == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 9:
      
      
      if (HEAP[$c] != 117) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$initial] + 4] + 84] & 268435456) == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      var $41 = HEAP[$initial];
      var $42 = _PyObject_GetIter($41);
      HEAP[$it] = $42;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$0] = 0;
      __label__ = 76;
      break;
     case 13:
      HEAP[$initial] = 0;
      __label__ = 14;
      break;
     case 14:
      HEAP[$descr] = _descriptors;
      __label__ = 74;
      break;
     case 15:
      
      
      
      
      
      
      if (HEAP[HEAP[$descr]] == HEAP[$c]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 16:
      
      
      if (HEAP[$initial] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$initial] + 4] + 84] & 33554432) != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$initial] + 4] + 84] & 67108864) == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$len] = 0;
      __label__ = 21;
      break;
     case 20:
      var $67 = HEAP[$initial];
      var $68 = _PySequence_Size($67);
      HEAP[$len] = $68;
      __label__ = 21;
      break;
     case 21:
      var $69 = HEAP[$type_addr];
      var $70 = HEAP[$len];
      var $71 = HEAP[$descr];
      var $72 = _newarrayobject($69, $70, $71);
      HEAP[$a] = $72;
      
      
      if (HEAP[$a] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      HEAP[$0] = 0;
      __label__ = 76;
      break;
     case 23:
      
      
      if (HEAP[$len] > 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 24:
      HEAP[$i] = 0;
      __label__ = 38;
      break;
     case 25:
      var $77 = HEAP[$initial];
      var $78 = HEAP[$i];
      var $79 = _PySequence_GetItem($77, $78);
      HEAP[$v] = $79;
      
      
      if (HEAP[$v] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 26:
      
      
      
      var $85 = HEAP[HEAP[$a]] - 1;
      
      var $87 = HEAP[$a];
      HEAP[$87] = $85;
      
      
      
      
      if (HEAP[HEAP[$a]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $96 = HEAP[HEAP[HEAP[$a] + 4] + 24];
      var $97 = HEAP[$a];
      FUNCTION_TABLE[$96]($97);
      __label__ = 28;
      break;
     case 28:
      HEAP[$0] = 0;
      __label__ = 76;
      break;
     case 29:
      var $98 = HEAP[$a];
      var $99 = HEAP[$i];
      var $100 = HEAP[$v];
      var $101 = _setarrayitem($98, $99, $100);
      
      if ($101 != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 30:
      
      
      
      var $106 = HEAP[HEAP[$v]] - 1;
      
      var $108 = HEAP[$v];
      HEAP[$108] = $106;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $117 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $118 = HEAP[$v];
      FUNCTION_TABLE[$117]($118);
      __label__ = 32;
      break;
     case 32:
      
      
      
      var $122 = HEAP[HEAP[$a]] - 1;
      
      var $124 = HEAP[$a];
      HEAP[$124] = $122;
      
      
      
      
      if (HEAP[HEAP[$a]] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $133 = HEAP[HEAP[HEAP[$a] + 4] + 24];
      var $134 = HEAP[$a];
      FUNCTION_TABLE[$133]($134);
      __label__ = 34;
      break;
     case 34:
      HEAP[$0] = 0;
      __label__ = 76;
      break;
     case 35:
      
      
      
      var $138 = HEAP[HEAP[$v]] - 1;
      
      var $140 = HEAP[$v];
      HEAP[$140] = $138;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      var $149 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $150 = HEAP[$v];
      FUNCTION_TABLE[$149]($150);
      __label__ = 37;
      break;
     case 37:
      
      var $152 = HEAP[$i] + 1;
      HEAP[$i] = $152;
      __label__ = 38;
      break;
     case 38:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 25;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      __label__ = 63;
      break;
     case 40:
      
      
      if (HEAP[$initial] == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 41:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$initial] + 4] + 84] & 134217728) == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      var $165 = HEAP[$initial];
      var $166 = _PyTuple_Pack(1, allocate([ $165, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$t_initial] = $166;
      
      
      if (HEAP[$t_initial] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 43:
      
      
      
      var $172 = HEAP[HEAP[$a]] - 1;
      
      var $174 = HEAP[$a];
      HEAP[$174] = $172;
      
      
      
      
      if (HEAP[HEAP[$a]] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      var $183 = HEAP[HEAP[HEAP[$a] + 4] + 24];
      var $184 = HEAP[$a];
      FUNCTION_TABLE[$183]($184);
      __label__ = 45;
      break;
     case 45:
      HEAP[$0] = 0;
      __label__ = 76;
      break;
     case 46:
      
      var $186 = HEAP[$a];
      var $187 = HEAP[$t_initial];
      var $188 = _array_fromstring($186, $187);
      HEAP[$v42] = $188;
      
      
      
      var $192 = HEAP[HEAP[$t_initial]] - 1;
      
      var $194 = HEAP[$t_initial];
      HEAP[$194] = $192;
      
      
      
      
      if (HEAP[HEAP[$t_initial]] == 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      
      
      
      
      var $203 = HEAP[HEAP[HEAP[$t_initial] + 4] + 24];
      var $204 = HEAP[$t_initial];
      FUNCTION_TABLE[$203]($204);
      __label__ = 48;
      break;
     case 48:
      
      
      if (HEAP[$v42] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 49:
      
      
      
      var $210 = HEAP[HEAP[$a]] - 1;
      
      var $212 = HEAP[$a];
      HEAP[$212] = $210;
      
      
      
      
      if (HEAP[HEAP[$a]] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      
      
      
      var $221 = HEAP[HEAP[HEAP[$a] + 4] + 24];
      var $222 = HEAP[$a];
      FUNCTION_TABLE[$221]($222);
      __label__ = 51;
      break;
     case 51:
      HEAP[$0] = 0;
      __label__ = 76;
      break;
     case 52:
      
      
      
      var $226 = HEAP[HEAP[$v42]] - 1;
      
      var $228 = HEAP[$v42];
      HEAP[$228] = $226;
      
      
      
      
      if (HEAP[HEAP[$v42]] == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      
      
      
      
      var $237 = HEAP[HEAP[HEAP[$v42] + 4] + 24];
      var $238 = HEAP[$v42];
      FUNCTION_TABLE[$237]($238);
      __label__ = 54;
      break;
     case 54:
      __label__ = 63;
      break;
     case 55:
      
      
      if (HEAP[$initial] != 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 56:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$initial] + 4] + 84] & 268435456) != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 57:
      
      
      
      
      var $252 = HEAP[HEAP[$initial] + 8] * 2;
      HEAP[$n] = $252;
      
      
      if (HEAP[$n] > 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 58:
      
      var $256 = HEAP[$a];
      HEAP[$self] = $256;
      
      
      var $259 = HEAP[HEAP[$self] + 12];
      HEAP[$item] = $259;
      var $260 = HEAP[$n];
      var $261 = HEAP[$item];
      var $262 = _PyMem_Realloc($261, $260);
      HEAP[$item] = $262;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 59:
      var $265 = _PyErr_NoMemory();
      
      
      
      var $269 = HEAP[HEAP[$a]] - 1;
      
      var $271 = HEAP[$a];
      HEAP[$271] = $269;
      
      
      
      
      if (HEAP[HEAP[$a]] == 0) {
        __label__ = 60;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 60:
      
      
      
      
      var $280 = HEAP[HEAP[HEAP[$a] + 4] + 24];
      var $281 = HEAP[$a];
      FUNCTION_TABLE[$280]($281);
      __label__ = 61;
      break;
     case 61:
      HEAP[$0] = 0;
      __label__ = 76;
      break;
     case 62:
      
      var $283 = HEAP[$self] + 12;
      var $284 = HEAP[$item];
      HEAP[$283] = $284;
      
      var $286 = HEAP[$self];
      var $287 = HEAP[$n];
      var $288 = Math.floor($287 / 2);
      var $289 = $286 + 8;
      HEAP[$289] = $288;
      var $290 = HEAP[$n];
      
      
      
      
      var $295 = HEAP[$item];
      var $296 = HEAP[HEAP[$initial] + 12];
      _llvm_memcpy_p0i8_p0i8_i32($295, $296, $290, 1, 0);
      
      
      
      var $300 = HEAP[HEAP[$self] + 8];
      
      var $302 = HEAP[$self] + 16;
      HEAP[$302] = $300;
      __label__ = 63;
      break;
     case 63:
      
      
      if (HEAP[$it] != 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 64:
      
      var $306 = HEAP[$a];
      var $307 = HEAP[$it];
      var $308 = _array_iter_extend($306, $307);
      var $309 = $308 == -1;
      if ($309) {
        __label__ = 65;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 65:
      
      
      
      var $313 = HEAP[HEAP[$it]] - 1;
      
      var $315 = HEAP[$it];
      HEAP[$315] = $313;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 66:
      
      
      
      
      var $324 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $325 = HEAP[$it];
      FUNCTION_TABLE[$324]($325);
      __label__ = 67;
      break;
     case 67:
      
      
      
      var $329 = HEAP[HEAP[$a]] - 1;
      
      var $331 = HEAP[$a];
      HEAP[$331] = $329;
      
      
      
      
      if (HEAP[HEAP[$a]] == 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 68:
      
      
      
      
      var $340 = HEAP[HEAP[HEAP[$a] + 4] + 24];
      var $341 = HEAP[$a];
      FUNCTION_TABLE[$340]($341);
      __label__ = 69;
      break;
     case 69:
      HEAP[$0] = 0;
      __label__ = 76;
      break;
     case 70:
      
      
      
      var $345 = HEAP[HEAP[$it]] - 1;
      
      var $347 = HEAP[$it];
      HEAP[$347] = $345;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 71:
      
      
      
      
      var $356 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $357 = HEAP[$it];
      FUNCTION_TABLE[$356]($357);
      __label__ = 72;
      break;
     case 72:
      var $358 = HEAP[$a];
      HEAP[$0] = $358;
      __label__ = 76;
      break;
     case 73:
      
      var $360 = HEAP[$descr] + 16;
      HEAP[$descr] = $360;
      __label__ = 74;
      break;
     case 74:
      
      
      
      
      if (HEAP[HEAP[$descr]] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 75;
        break;
      }
     case 75:
      var $365 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($365, __str84);
      HEAP[$0] = 0;
      __label__ = 76;
      break;
     case 76:
      var $366 = HEAP[$0];
      HEAP[$retval] = $366;
      __label__ = 77;
      break;
     case 77:
      var $retval77 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval77;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_iter($ao) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ao_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $it = __stackBase__ + 12;
      
      HEAP[$ao_addr] = $ao;
      
      
      
      
      
      if (HEAP[HEAP[$ao_addr] + 4] != _Arraytype) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[HEAP[$ao_addr] + 4];
      var $10 = _PyType_IsSubtype($9, _Arraytype);
      
      if ($10 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      __PyErr_BadInternalCall(__str15, 2149);
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 3:
      var $12 = __PyObject_GC_New(_PyArrayIter_Type);
      
      HEAP[$it] = $12;
      
      
      if (HEAP[$it] == 0) {
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
      
      
      
      
      var $20 = HEAP[HEAP[$ao_addr]] + 1;
      var $21 = HEAP[$ao_addr];
      HEAP[$21] = $20;
      
      var $23 = HEAP[$it] + 12;
      var $24 = HEAP[$ao_addr];
      HEAP[$23] = $24;
      
      var $26 = HEAP[$it] + 8;
      HEAP[$26] = 0;
      
      
      
      
      var $31 = HEAP[HEAP[HEAP[$ao_addr] + 20] + 8];
      
      var $33 = HEAP[$it] + 16;
      HEAP[$33] = $31;
      
      var $35 = HEAP[$it];
      _PyObject_GC_Track($35);
      
      var $37 = HEAP[$it];
      HEAP[$0] = $37;
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
  function _arrayiter_next($it) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $it_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$it_addr] = $it;
      
      
      
      
      
      if (HEAP[HEAP[$it_addr] + 4] != _PyArrayIter_Type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[HEAP[$it_addr] + 4];
      var $10 = _PyType_IsSubtype($9, _PyArrayIter_Type);
      
      if ($10 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str86, __str15, 2168, ___PRETTY_FUNCTION___11336);
      throw "Reached an unreachable!";
     case 3:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$it_addr] + 8] < HEAP[HEAP[HEAP[$it_addr] + 12] + 8]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $24 = HEAP[HEAP[$it_addr] + 16];
      
      
      var $27 = HEAP[HEAP[$it_addr] + 8];
      var $28 = $27 + 1;
      
      var $30 = HEAP[$it_addr] + 8;
      HEAP[$30] = $28;
      
      
      var $33 = HEAP[HEAP[$it_addr] + 12];
      var $34 = FUNCTION_TABLE[$24]($33, $27);
      HEAP[$0] = $34;
      __label__ = 6;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 6:
      var $35 = HEAP[$0];
      HEAP[$retval] = $35;
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
  function _arrayiter_dealloc($it) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $it_addr = __stackBase__;
      
      HEAP[$it_addr] = $it;
      
      var $1 = HEAP[$it_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$it_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[HEAP[$it_addr] + 12];
      
      
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
      
      
      
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[HEAP[$it_addr] + 12] + 4] + 24];
      
      
      
      var $28 = HEAP[HEAP[$it_addr] + 12];
      FUNCTION_TABLE[$24]($28);
      __label__ = 3;
      break;
     case 3:
      
      var $30 = HEAP[$it_addr];
      _PyObject_GC_Del($30);
      __label__ = 4;
      break;
     case 4:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _arrayiter_traverse($it, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $it_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      
      HEAP[$it_addr] = $it;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$it_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[HEAP[$it_addr] + 12];
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
      __label__ = 4;
      break;
     case 3:
      HEAP[$0] = 0;
      __label__ = 4;
      break;
     case 4:
      var $15 = HEAP[$0];
      HEAP[$retval] = $15;
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
  function _initarray() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      
      HEAP[_Arraytype + 4] = _PyType_Type;
      HEAP[_PyArrayIter_Type + 4] = _PyType_Type;
      var $0 = _Py_InitModule4(__str88, _a_methods, _module_doc, 0, 1013);
      HEAP[$m] = $0;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $5 = HEAP[_Arraytype] + 1;
      
      HEAP[_Arraytype] = $5;
      var $7 = HEAP[$m];
      var $8 = _PyModule_AddObject($7, __str89, _Arraytype);
      
      
      var $11 = HEAP[_Arraytype] + 1;
      
      HEAP[_Arraytype] = $11;
      var $13 = HEAP[$m];
      var $14 = _PyModule_AddObject($13, __str88, _Arraytype);
      __label__ = 2;
      break;
     case 2:
      __label__ = 3;
      break;
     case 3:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initarray"] = _initarray;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _c_getitem, 0, _c_setitem, 0, _b_getitem, 0, _b_setitem, 0, _BB_getitem, 0, _BB_setitem, 0, _u_getitem, 0, _u_setitem, 0, _h_getitem, 0, _h_setitem, 0, _HH_getitem, 0, _HH_setitem, 0, _i_getitem, 0, _i_setitem, 0, _II_getitem, 0, _II_setitem, 0, _l_getitem, 0, _l_setitem, 0, _LL_getitem, 0, _LL_setitem, 0, _f_getitem, 0, _f_setitem, 0, _d_getitem, 0, _d_setitem, 0, _array_get_typecode, 0, _array_get_itemsize, 0, _array_append, 0, _array_buffer_info, 0, _array_byteswap, 0, _array_copy, 0, _array_count, 0, _array_extend, 0, _array_fromfile, 0, _array_fromlist, 0, _array_fromstring, 0, _array_fromunicode, 0, _array_index, 0, _array_insert, 0, _array_pop, 0, _array_fromfile_as_read, 0, _array_reduce, 0, _array_remove, 0, _array_reverse, 0, _array_tofile, 0, _array_tolist, 0, _array_tostring, 0, _array_tounicode, 0, _array_tofile_as_write, 0, _array_length, 0, _array_subscr, 0, _array_ass_subscr, 0, _array_concat, 0, _array_repeat, 0, _array_item, 0, _array_slice, 0, _array_ass_item, 0, _array_ass_slice, 0, _array_contains, 0, _array_inplace_concat, 0, _array_inplace_repeat, 0, _array_buffer_getreadbuf, 0, _array_buffer_getwritebuf, 0, _array_buffer_getsegcount, 0, _array_dealloc, 0, _array_repr, 0, _PyObject_GenericGetAttr, 0, _array_richcompare, 0, _array_iter, 0, _PyType_GenericAlloc, 0, _array_new, 0, _PyObject_Free, 0, _arrayiter_dealloc, 0, _arrayiter_traverse, 0, _PyObject_SelfIter, 0, _arrayiter_next, 0 ]);
  function run(args) {
    __str = allocate([ 99, 59, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 32, 109, 117, 115, 116, 32, 98, 101, 32, 99, 104, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 104, 59, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 115, 105, 103, 110, 101, 100, 32, 99, 104, 97, 114, 32, 105, 115, 32, 108, 101, 115, 115, 32, 116, 104, 97, 110, 32, 109, 105, 110, 105, 109, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 115, 105, 103, 110, 101, 100, 32, 99, 104, 97, 114, 32, 105, 115, 32, 103, 114, 101, 97, 116, 101, 114, 32, 116, 104, 97, 110, 32, 109, 97, 120, 105, 109, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 98, 59, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 117, 35, 59, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 32, 109, 117, 115, 116, 32, 98, 101, 32, 117, 110, 105, 99, 111, 100, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 32, 109, 117, 115, 116, 32, 98, 101, 32, 117, 110, 105, 99, 111, 100, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 105, 59, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 115, 104, 111, 114, 116, 32, 105, 115, 32, 108, 101, 115, 115, 32, 116, 104, 97, 110, 32, 109, 105, 110, 105, 109, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 115, 104, 111, 114, 116, 32, 105, 115, 32, 103, 114, 101, 97, 116, 101, 114, 32, 116, 104, 97, 110, 32, 109, 97, 120, 105, 109, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 108, 59, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 32, 105, 115, 32, 108, 101, 115, 115, 32, 116, 104, 97, 110, 32, 109, 105, 110, 105, 109, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 108, 111, 110, 103, 32, 105, 115, 32, 108, 101, 115, 115, 32, 116, 104, 97, 110, 32, 109, 105, 110, 105, 109, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 102, 59, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 32, 109, 117, 115, 116, 32, 98, 101, 32, 102, 108, 111, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 100, 59, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 32, 109, 117, 115, 116, 32, 98, 101, 32, 102, 108, 111, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    _descriptors = allocate([ 99, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0 ], ALLOC_NORMAL);
    __str15 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 97, 114, 114, 97, 121, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 111, 112, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 32, 61, 61, 32, 40, 38, 65, 114, 114, 97, 121, 116, 121, 112, 101, 41, 32, 124, 124, 32, 80, 121, 84, 121, 112, 101, 95, 73, 115, 83, 117, 98, 116, 121, 112, 101, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 111, 112, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 44, 32, 40, 38, 65, 114, 114, 97, 121, 116, 121, 112, 101, 41, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8806 = allocate([ 103, 101, 116, 97, 114, 114, 97, 121, 105, 116, 101, 109, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 105, 62, 61, 48, 32, 38, 38, 32, 105, 60, 40, 40, 40, 80, 121, 86, 97, 114, 79, 98, 106, 101, 99, 116, 42, 41, 40, 97, 112, 41, 41, 45, 62, 111, 98, 95, 115, 105, 122, 101, 41, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 97, 114, 114, 97, 121, 32, 105, 110, 100, 101, 120, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    _copy_doc = allocate([ 99, 111, 112, 121, 40, 97, 114, 114, 97, 121, 41, 10, 10, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 99, 97, 110, 32, 111, 110, 108, 121, 32, 97, 112, 112, 101, 110, 100, 32, 97, 114, 114, 97, 121, 32, 40, 110, 111, 116, 32, 34, 37, 46, 50, 48, 48, 115, 34, 41, 32, 116, 111, 32, 97, 114, 114, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 99, 97, 110, 32, 111, 110, 108, 121, 32, 97, 115, 115, 105, 103, 110, 32, 97, 114, 114, 97, 121, 32, 40, 110, 111, 116, 32, 34, 37, 46, 50, 48, 48, 115, 34, 41, 32, 116, 111, 32, 97, 114, 114, 97, 121, 32, 115, 108, 105, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 97, 114, 114, 97, 121, 32, 97, 115, 115, 105, 103, 110, 109, 101, 110, 116, 32, 105, 110, 100, 101, 120, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 97, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 32, 61, 61, 32, 40, 38, 65, 114, 114, 97, 121, 116, 121, 112, 101, 41, 32, 124, 124, 32, 80, 121, 84, 121, 112, 101, 95, 73, 115, 83, 117, 98, 116, 121, 112, 101, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 97, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 44, 32, 40, 38, 65, 114, 114, 97, 121, 116, 121, 112, 101, 41, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9418 = allocate([ 115, 101, 116, 97, 114, 114, 97, 121, 105, 116, 101, 109, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 99, 97, 110, 32, 111, 110, 108, 121, 32, 101, 120, 116, 101, 110, 100, 32, 119, 105, 116, 104, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 115, 97, 109, 101, 32, 107, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 99, 97, 110, 32, 111, 110, 108, 121, 32, 101, 120, 116, 101, 110, 100, 32, 97, 114, 114, 97, 121, 32, 119, 105, 116, 104, 32, 97, 114, 114, 97, 121, 32, 40, 110, 111, 116, 32, 34, 37, 46, 50, 48, 48, 115, 34, 41, 0 ], "i8", ALLOC_NORMAL);
    _count_doc = allocate([ 99, 111, 117, 110, 116, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 115, 32, 111, 102, 32, 120, 32, 105, 110, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 97, 114, 114, 97, 121, 46, 105, 110, 100, 101, 120, 40, 120, 41, 58, 32, 120, 32, 110, 111, 116, 32, 105, 110, 32, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _index_doc = allocate([ 105, 110, 100, 101, 120, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 105, 110, 100, 101, 120, 32, 111, 102, 32, 102, 105, 114, 115, 116, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 32, 111, 102, 32, 120, 32, 105, 110, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 97, 114, 114, 97, 121, 46, 114, 101, 109, 111, 118, 101, 40, 120, 41, 58, 32, 120, 32, 110, 111, 116, 32, 105, 110, 32, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _remove_doc = allocate([ 114, 101, 109, 111, 118, 101, 40, 120, 41, 10, 10, 82, 101, 109, 111, 118, 101, 32, 116, 104, 101, 32, 102, 105, 114, 115, 116, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 32, 111, 102, 32, 120, 32, 105, 110, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 124, 110, 58, 112, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 112, 111, 112, 32, 102, 114, 111, 109, 32, 101, 109, 112, 116, 121, 32, 97, 114, 114, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 112, 111, 112, 32, 105, 110, 100, 101, 120, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    _pop_doc = allocate([ 112, 111, 112, 40, 91, 105, 93, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 105, 45, 116, 104, 32, 101, 108, 101, 109, 101, 110, 116, 32, 97, 110, 100, 32, 100, 101, 108, 101, 116, 101, 32, 105, 116, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 46, 32, 105, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 45, 49, 46, 0 ], "i8", ALLOC_NORMAL);
    _extend_doc = allocate([ 101, 120, 116, 101, 110, 100, 40, 97, 114, 114, 97, 121, 32, 111, 114, 32, 105, 116, 101, 114, 97, 98, 108, 101, 41, 10, 10, 32, 65, 112, 112, 101, 110, 100, 32, 105, 116, 101, 109, 115, 32, 116, 111, 32, 116, 104, 101, 32, 101, 110, 100, 32, 111, 102, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 110, 79, 58, 105, 110, 115, 101, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    _insert_doc = allocate([ 105, 110, 115, 101, 114, 116, 40, 105, 44, 120, 41, 10, 10, 73, 110, 115, 101, 114, 116, 32, 97, 32, 110, 101, 119, 32, 105, 116, 101, 109, 32, 120, 32, 105, 110, 116, 111, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 32, 98, 101, 102, 111, 114, 101, 32, 112, 111, 115, 105, 116, 105, 111, 110, 32, 105, 46, 0 ], "i8", ALLOC_NORMAL);
    _buffer_info_doc = allocate([ 98, 117, 102, 102, 101, 114, 95, 105, 110, 102, 111, 40, 41, 32, 45, 62, 32, 40, 97, 100, 100, 114, 101, 115, 115, 44, 32, 108, 101, 110, 103, 116, 104, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 116, 117, 112, 108, 101, 32, 40, 97, 100, 100, 114, 101, 115, 115, 44, 32, 108, 101, 110, 103, 116, 104, 41, 32, 103, 105, 118, 105, 110, 103, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 109, 101, 109, 111, 114, 121, 32, 97, 100, 100, 114, 101, 115, 115, 32, 97, 110, 100, 10, 116, 104, 101, 32, 108, 101, 110, 103, 116, 104, 32, 105, 110, 32, 105, 116, 101, 109, 115, 32, 111, 102, 32, 116, 104, 101, 32, 98, 117, 102, 102, 101, 114, 32, 117, 115, 101, 100, 32, 116, 111, 32, 104, 111, 108, 100, 32, 97, 114, 114, 97, 121, 39, 115, 32, 99, 111, 110, 116, 101, 110, 116, 115, 10, 84, 104, 101, 32, 108, 101, 110, 103, 116, 104, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 109, 117, 108, 116, 105, 112, 108, 105, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 105, 116, 101, 109, 115, 105, 122, 101, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 32, 116, 111, 32, 99, 97, 108, 99, 117, 108, 97, 116, 101, 10, 116, 104, 101, 32, 98, 117, 102, 102, 101, 114, 32, 108, 101, 110, 103, 116, 104, 32, 105, 110, 32, 98, 121, 116, 101, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _append_doc = allocate([ 97, 112, 112, 101, 110, 100, 40, 120, 41, 10, 10, 65, 112, 112, 101, 110, 100, 32, 110, 101, 119, 32, 118, 97, 108, 117, 101, 32, 120, 32, 116, 111, 32, 116, 104, 101, 32, 101, 110, 100, 32, 111, 102, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 100, 111, 110, 39, 116, 32, 107, 110, 111, 119, 32, 104, 111, 119, 32, 116, 111, 32, 98, 121, 116, 101, 115, 119, 97, 112, 32, 116, 104, 105, 115, 32, 97, 114, 114, 97, 121, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    _byteswap_doc = allocate([ 98, 121, 116, 101, 115, 119, 97, 112, 40, 41, 10, 10, 66, 121, 116, 101, 115, 119, 97, 112, 32, 97, 108, 108, 32, 105, 116, 101, 109, 115, 32, 111, 102, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 46, 32, 32, 73, 102, 32, 116, 104, 101, 32, 105, 116, 101, 109, 115, 32, 105, 110, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 32, 97, 114, 101, 32, 110, 111, 116, 32, 49, 44, 32, 50, 44, 10, 52, 44, 32, 111, 114, 32, 56, 32, 98, 121, 116, 101, 115, 32, 105, 110, 32, 115, 105, 122, 101, 44, 32, 82, 117, 110, 116, 105, 109, 101, 69, 114, 114, 111, 114, 32, 105, 115, 32, 114, 97, 105, 115, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 40, 115, 105, 122, 101, 95, 116, 41, 105, 116, 101, 109, 115, 105, 122, 101, 32, 60, 61, 32, 115, 105, 122, 101, 111, 102, 40, 116, 109, 112, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9957 = allocate([ 97, 114, 114, 97, 121, 95, 114, 101, 118, 101, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    _reverse_doc = allocate([ 114, 101, 118, 101, 114, 115, 101, 40, 41, 10, 10, 82, 101, 118, 101, 114, 115, 101, 32, 116, 104, 101, 32, 111, 114, 100, 101, 114, 32, 111, 102, 32, 116, 104, 101, 32, 105, 116, 101, 109, 115, 32, 105, 110, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 79, 110, 58, 102, 114, 111, 109, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 97, 114, 103, 49, 32, 109, 117, 115, 116, 32, 98, 101, 32, 111, 112, 101, 110, 32, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 110, 111, 116, 32, 101, 110, 111, 117, 103, 104, 32, 105, 116, 101, 109, 115, 32, 105, 110, 32, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _fromfile_doc = allocate([ 102, 114, 111, 109, 102, 105, 108, 101, 40, 102, 44, 32, 110, 41, 10, 10, 82, 101, 97, 100, 32, 110, 32, 111, 98, 106, 101, 99, 116, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 32, 102, 32, 97, 110, 100, 32, 97, 112, 112, 101, 110, 100, 32, 116, 104, 101, 109, 32, 116, 111, 32, 116, 104, 101, 32, 101, 110, 100, 32, 111, 102, 32, 116, 104, 101, 10, 97, 114, 114, 97, 121, 46, 32, 32, 65, 108, 115, 111, 32, 99, 97, 108, 108, 101, 100, 32, 97, 115, 32, 114, 101, 97, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 97, 114, 114, 97, 121, 46, 114, 101, 97, 100, 40, 41, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 105, 110, 32, 51, 46, 120, 59, 32, 117, 115, 101, 32, 97, 114, 114, 97, 121, 46, 102, 114, 111, 109, 102, 105, 108, 101, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 97, 114, 103, 32, 109, 117, 115, 116, 32, 98, 101, 32, 111, 112, 101, 110, 32, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _tofile_doc = allocate([ 116, 111, 102, 105, 108, 101, 40, 102, 41, 10, 10, 87, 114, 105, 116, 101, 32, 97, 108, 108, 32, 105, 116, 101, 109, 115, 32, 40, 97, 115, 32, 109, 97, 99, 104, 105, 110, 101, 32, 118, 97, 108, 117, 101, 115, 41, 32, 116, 111, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 32, 102, 46, 32, 32, 65, 108, 115, 111, 32, 99, 97, 108, 108, 101, 100, 32, 97, 115, 10, 119, 114, 105, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 97, 114, 114, 97, 121, 46, 119, 114, 105, 116, 101, 40, 41, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 105, 110, 32, 51, 46, 120, 59, 32, 117, 115, 101, 32, 97, 114, 114, 97, 121, 46, 116, 111, 102, 105, 108, 101, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 97, 114, 103, 32, 109, 117, 115, 116, 32, 98, 101, 32, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _fromlist_doc = allocate([ 102, 114, 111, 109, 108, 105, 115, 116, 40, 108, 105, 115, 116, 41, 10, 10, 65, 112, 112, 101, 110, 100, 32, 105, 116, 101, 109, 115, 32, 116, 111, 32, 97, 114, 114, 97, 121, 32, 102, 114, 111, 109, 32, 108, 105, 115, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    _tolist_doc = allocate([ 116, 111, 108, 105, 115, 116, 40, 41, 32, 45, 62, 32, 108, 105, 115, 116, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 114, 114, 97, 121, 32, 116, 111, 32, 97, 110, 32, 111, 114, 100, 105, 110, 97, 114, 121, 32, 108, 105, 115, 116, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 105, 116, 101, 109, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 115, 35, 58, 102, 114, 111, 109, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 115, 116, 114, 105, 110, 103, 32, 108, 101, 110, 103, 116, 104, 32, 110, 111, 116, 32, 97, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 111, 102, 32, 105, 116, 101, 109, 32, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    _fromstring_doc = allocate([ 102, 114, 111, 109, 115, 116, 114, 105, 110, 103, 40, 115, 116, 114, 105, 110, 103, 41, 10, 10, 65, 112, 112, 101, 110, 100, 115, 32, 105, 116, 101, 109, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 44, 32, 105, 110, 116, 101, 114, 112, 114, 101, 116, 105, 110, 103, 32, 105, 116, 32, 97, 115, 32, 97, 110, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 109, 97, 99, 104, 105, 110, 101, 10, 118, 97, 108, 117, 101, 115, 44, 97, 115, 32, 105, 102, 32, 105, 116, 32, 104, 97, 100, 32, 98, 101, 101, 110, 32, 114, 101, 97, 100, 32, 102, 114, 111, 109, 32, 97, 32, 102, 105, 108, 101, 32, 117, 115, 105, 110, 103, 32, 116, 104, 101, 32, 102, 114, 111, 109, 102, 105, 108, 101, 40, 41, 32, 109, 101, 116, 104, 111, 100, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _tostring_doc = allocate([ 116, 111, 115, 116, 114, 105, 110, 103, 40, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 32, 116, 111, 32, 97, 110, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 109, 97, 99, 104, 105, 110, 101, 32, 118, 97, 108, 117, 101, 115, 32, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 10, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 117, 35, 58, 102, 114, 111, 109, 117, 110, 105, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 102, 114, 111, 109, 117, 110, 105, 99, 111, 100, 101, 40, 41, 32, 109, 97, 121, 32, 111, 110, 108, 121, 32, 98, 101, 32, 99, 97, 108, 108, 101, 100, 32, 111, 110, 32, 116, 121, 112, 101, 32, 39, 117, 39, 32, 97, 114, 114, 97, 121, 115, 0 ], "i8", ALLOC_NORMAL);
    _fromunicode_doc = allocate([ 102, 114, 111, 109, 117, 110, 105, 99, 111, 100, 101, 40, 117, 115, 116, 114, 41, 10, 10, 69, 120, 116, 101, 110, 100, 115, 32, 116, 104, 105, 115, 32, 97, 114, 114, 97, 121, 32, 119, 105, 116, 104, 32, 100, 97, 116, 97, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 117, 110, 105, 99, 111, 100, 101, 32, 115, 116, 114, 105, 110, 103, 32, 117, 115, 116, 114, 46, 10, 84, 104, 101, 32, 97, 114, 114, 97, 121, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 116, 121, 112, 101, 32, 39, 117, 39, 32, 97, 114, 114, 97, 121, 59, 32, 111, 116, 104, 101, 114, 119, 105, 115, 101, 32, 97, 32, 86, 97, 108, 117, 101, 69, 114, 114, 111, 114, 10, 105, 115, 32, 114, 97, 105, 115, 101, 100, 46, 32, 32, 85, 115, 101, 32, 97, 114, 114, 97, 121, 46, 102, 114, 111, 109, 115, 116, 114, 105, 110, 103, 40, 117, 115, 116, 114, 46, 100, 101, 99, 111, 100, 101, 40, 46, 46, 46, 41, 41, 32, 116, 111, 10, 97, 112, 112, 101, 110, 100, 32, 85, 110, 105, 99, 111, 100, 101, 32, 100, 97, 116, 97, 32, 116, 111, 32, 97, 110, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 115, 111, 109, 101, 32, 111, 116, 104, 101, 114, 32, 116, 121, 112, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 116, 111, 117, 110, 105, 99, 111, 100, 101, 40, 41, 32, 109, 97, 121, 32, 111, 110, 108, 121, 32, 98, 101, 32, 99, 97, 108, 108, 101, 100, 32, 111, 110, 32, 116, 121, 112, 101, 32, 39, 117, 39, 32, 97, 114, 114, 97, 121, 115, 0 ], "i8", ALLOC_NORMAL);
    _tounicode_doc = allocate([ 116, 111, 117, 110, 105, 99, 111, 100, 101, 40, 41, 32, 45, 62, 32, 117, 110, 105, 99, 111, 100, 101, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 32, 116, 111, 32, 97, 32, 117, 110, 105, 99, 111, 100, 101, 32, 115, 116, 114, 105, 110, 103, 46, 32, 32, 84, 104, 101, 32, 97, 114, 114, 97, 121, 32, 109, 117, 115, 116, 32, 98, 101, 10, 97, 32, 116, 121, 112, 101, 32, 39, 117, 39, 32, 97, 114, 114, 97, 121, 59, 32, 111, 116, 104, 101, 114, 119, 105, 115, 101, 32, 97, 32, 86, 97, 108, 117, 101, 69, 114, 114, 111, 114, 32, 105, 115, 32, 114, 97, 105, 115, 101, 100, 46, 32, 32, 85, 115, 101, 10, 97, 114, 114, 97, 121, 46, 116, 111, 115, 116, 114, 105, 110, 103, 40, 41, 46, 100, 101, 99, 111, 100, 101, 40, 41, 32, 116, 111, 32, 111, 98, 116, 97, 105, 110, 32, 97, 32, 117, 110, 105, 99, 111, 100, 101, 32, 115, 116, 114, 105, 110, 103, 32, 102, 114, 111, 109, 10, 97, 110, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 115, 111, 109, 101, 32, 111, 116, 104, 101, 114, 32, 116, 121, 112, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 95, 95, 100, 105, 99, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 79, 40, 99, 79, 41, 79, 0 ], "i8", ALLOC_NORMAL);
    _reduce_doc = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 116, 97, 116, 101, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 32, 102, 111, 114, 32, 112, 105, 99, 107, 108, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 116, 121, 112, 101, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 116, 104, 101, 32, 116, 121, 112, 101, 99, 111, 100, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 117, 115, 101, 100, 32, 116, 111, 32, 99, 114, 101, 97, 116, 101, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 105, 116, 101, 109, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 116, 104, 101, 32, 115, 105, 122, 101, 44, 32, 105, 110, 32, 98, 121, 116, 101, 115, 44, 32, 111, 102, 32, 111, 110, 101, 32, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 0 ], "i8", ALLOC_NORMAL);
    _array_getsets = allocate(60, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str51 = allocate([ 97, 112, 112, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 98, 117, 102, 102, 101, 114, 95, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 98, 121, 116, 101, 115, 119, 97, 112, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 95, 95, 99, 111, 112, 121, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 95, 95, 100, 101, 101, 112, 99, 111, 112, 121, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 101, 120, 116, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 102, 114, 111, 109, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 102, 114, 111, 109, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 102, 114, 111, 109, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 102, 114, 111, 109, 117, 110, 105, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 105, 110, 100, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 105, 110, 115, 101, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 112, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 114, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 114, 101, 109, 111, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 114, 101, 118, 101, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 116, 111, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 116, 111, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 116, 111, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 116, 111, 117, 110, 105, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 119, 114, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _array_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str74 = allocate([ 97, 114, 114, 97, 121, 40, 39, 37, 99, 39, 41, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 97, 114, 114, 97, 121, 40, 39, 37, 99, 39, 44, 32, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 41, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 97, 114, 114, 97, 121, 32, 105, 110, 100, 105, 99, 101, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 116, 101, 103, 101, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 97, 114, 114, 97, 121, 32, 105, 110, 100, 105, 99, 101, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str79 = allocate([ 97, 116, 116, 101, 109, 112, 116, 32, 116, 111, 32, 97, 115, 115, 105, 103, 110, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 115, 105, 122, 101, 32, 37, 122, 100, 32, 116, 111, 32, 101, 120, 116, 101, 110, 100, 101, 100, 32, 115, 108, 105, 99, 101, 32, 111, 102, 32, 115, 105, 122, 101, 32, 37, 122, 100, 0 ], "i8", ALLOC_NORMAL);
    _array_as_mapping = allocate(12, [ "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0 ], ALLOC_NORMAL);
    _emptybuf = allocate(1, "i8*", ALLOC_NORMAL);
    __str80 = allocate(1, "i8", ALLOC_NORMAL);
    __str81 = allocate([ 65, 99, 99, 101, 115, 115, 105, 110, 103, 32, 110, 111, 110, 45, 101, 120, 105, 115, 116, 101, 110, 116, 32, 97, 114, 114, 97, 121, 32, 115, 101, 103, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _array_as_sequence = allocate(40, [ "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32, i32)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, i32, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0 ], ALLOC_NORMAL);
    _array_as_buffer = allocate(24, [ "i32 (%struct.PyObject*, i32, i8**)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, i8**)*", 0, 0, 0, "i32 (%struct.PyObject*, i32*)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, i8**)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str82 = allocate([ 97, 114, 114, 97, 121, 46, 97, 114, 114, 97, 121, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str83 = allocate([ 99, 124, 79, 58, 97, 114, 114, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str84 = allocate([ 98, 97, 100, 32, 116, 121, 112, 101, 99, 111, 100, 101, 32, 40, 109, 117, 115, 116, 32, 98, 101, 32, 99, 44, 32, 98, 44, 32, 66, 44, 32, 117, 44, 32, 104, 44, 32, 72, 44, 32, 105, 44, 32, 73, 44, 32, 108, 44, 32, 76, 44, 32, 102, 32, 111, 114, 32, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    _module_doc = allocate([ 84, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 100, 101, 102, 105, 110, 101, 115, 32, 97, 110, 32, 111, 98, 106, 101, 99, 116, 32, 116, 121, 112, 101, 32, 119, 104, 105, 99, 104, 32, 99, 97, 110, 32, 101, 102, 102, 105, 99, 105, 101, 110, 116, 108, 121, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 10, 97, 110, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 98, 97, 115, 105, 99, 32, 118, 97, 108, 117, 101, 115, 58, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 44, 32, 105, 110, 116, 101, 103, 101, 114, 115, 44, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 10, 110, 117, 109, 98, 101, 114, 115, 46, 32, 32, 65, 114, 114, 97, 121, 115, 32, 97, 114, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 116, 121, 112, 101, 115, 32, 97, 110, 100, 32, 98, 101, 104, 97, 118, 101, 32, 118, 101, 114, 121, 32, 109, 117, 99, 104, 32, 108, 105, 107, 101, 32, 108, 105, 115, 116, 115, 44, 10, 101, 120, 99, 101, 112, 116, 32, 116, 104, 97, 116, 32, 116, 104, 101, 32, 116, 121, 112, 101, 32, 111, 102, 32, 111, 98, 106, 101, 99, 116, 115, 32, 115, 116, 111, 114, 101, 100, 32, 105, 110, 32, 116, 104, 101, 109, 32, 105, 115, 32, 99, 111, 110, 115, 116, 114, 97, 105, 110, 101, 100, 46, 32, 32, 84, 104, 101, 10, 116, 121, 112, 101, 32, 105, 115, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 97, 116, 32, 111, 98, 106, 101, 99, 116, 32, 99, 114, 101, 97, 116, 105, 111, 110, 32, 116, 105, 109, 101, 32, 98, 121, 32, 117, 115, 105, 110, 103, 32, 97, 32, 116, 121, 112, 101, 32, 99, 111, 100, 101, 44, 32, 119, 104, 105, 99, 104, 10, 105, 115, 32, 97, 32, 115, 105, 110, 103, 108, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 46, 32, 32, 84, 104, 101, 32, 102, 111, 108, 108, 111, 119, 105, 110, 103, 32, 116, 121, 112, 101, 32, 99, 111, 100, 101, 115, 32, 97, 114, 101, 32, 100, 101, 102, 105, 110, 101, 100, 58, 10, 10, 32, 32, 32, 32, 84, 121, 112, 101, 32, 99, 111, 100, 101, 32, 32, 32, 67, 32, 84, 121, 112, 101, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 105, 110, 105, 109, 117, 109, 32, 115, 105, 122, 101, 32, 105, 110, 32, 98, 121, 116, 101, 115, 32, 10, 32, 32, 32, 32, 39, 99, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 32, 10, 32, 32, 32, 32, 39, 98, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 32, 32, 32, 32, 49, 32, 10, 32, 32, 32, 32, 39, 66, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 110, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 32, 32, 49, 32, 10, 32, 32, 32, 32, 39, 117, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 110, 105, 99, 111, 100, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 32, 50, 32, 10, 32, 32, 32, 32, 39, 104, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 32, 32, 32, 32, 50, 32, 10, 32, 32, 32, 32, 39, 72, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 110, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 32, 32, 50, 32, 10, 32, 32, 32, 32, 39, 105, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 32, 32, 32, 32, 50, 32, 10, 32, 32, 32, 32, 39, 73, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 110, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 32, 32, 50, 32, 10, 32, 32, 32, 32, 39, 108, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 32, 32, 32, 32, 52, 32, 10, 32, 32, 32, 32, 39, 76, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 110, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 32, 32, 52, 32, 10, 32, 32, 32, 32, 39, 102, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 32, 32, 32, 32, 52, 32, 10, 32, 32, 32, 32, 39, 100, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 32, 32, 32, 32, 56, 32, 10, 10, 84, 104, 101, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 105, 115, 58, 10, 10, 97, 114, 114, 97, 121, 40, 116, 121, 112, 101, 99, 111, 100, 101, 32, 91, 44, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 114, 93, 41, 32, 45, 45, 32, 99, 114, 101, 97, 116, 101, 32, 97, 32, 110, 101, 119, 32, 97, 114, 114, 97, 121, 10, 0 ], "i8", ALLOC_NORMAL);
    _arraytype_doc = allocate([ 97, 114, 114, 97, 121, 40, 116, 121, 112, 101, 99, 111, 100, 101, 32, 91, 44, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 114, 93, 41, 32, 45, 62, 32, 97, 114, 114, 97, 121, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 97, 114, 114, 97, 121, 32, 119, 104, 111, 115, 101, 32, 105, 116, 101, 109, 115, 32, 97, 114, 101, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 98, 121, 32, 116, 121, 112, 101, 99, 111, 100, 101, 44, 32, 97, 110, 100, 10, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 114, 32, 118, 97, 108, 117, 101, 44, 32, 119, 104, 105, 99, 104, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 108, 105, 115, 116, 44, 10, 115, 116, 114, 105, 110, 103, 46, 32, 111, 114, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 111, 118, 101, 114, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 111, 102, 32, 116, 104, 101, 32, 97, 112, 112, 114, 111, 112, 114, 105, 97, 116, 101, 32, 116, 121, 112, 101, 46, 10, 10, 65, 114, 114, 97, 121, 115, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 32, 98, 97, 115, 105, 99, 32, 118, 97, 108, 117, 101, 115, 32, 97, 110, 100, 32, 98, 101, 104, 97, 118, 101, 32, 118, 101, 114, 121, 32, 109, 117, 99, 104, 32, 108, 105, 107, 101, 32, 108, 105, 115, 116, 115, 44, 32, 101, 120, 99, 101, 112, 116, 10, 116, 104, 101, 32, 116, 121, 112, 101, 32, 111, 102, 32, 111, 98, 106, 101, 99, 116, 115, 32, 115, 116, 111, 114, 101, 100, 32, 105, 110, 32, 116, 104, 101, 109, 32, 105, 115, 32, 99, 111, 110, 115, 116, 114, 97, 105, 110, 101, 100, 46, 10, 10, 77, 101, 116, 104, 111, 100, 115, 58, 10, 10, 97, 112, 112, 101, 110, 100, 40, 41, 32, 45, 45, 32, 97, 112, 112, 101, 110, 100, 32, 97, 32, 110, 101, 119, 32, 105, 116, 101, 109, 32, 116, 111, 32, 116, 104, 101, 32, 101, 110, 100, 32, 111, 102, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 10, 98, 117, 102, 102, 101, 114, 95, 105, 110, 102, 111, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 32, 103, 105, 118, 105, 110, 103, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 109, 101, 109, 111, 114, 121, 32, 105, 110, 102, 111, 10, 98, 121, 116, 101, 115, 119, 97, 112, 40, 41, 32, 45, 45, 32, 98, 121, 116, 101, 115, 119, 97, 112, 32, 97, 108, 108, 32, 116, 104, 101, 32, 105, 116, 101, 109, 115, 32, 111, 102, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 10, 99, 111, 117, 110, 116, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 115, 32, 111, 102, 32, 97, 110, 32, 111, 98, 106, 101, 99, 116, 10, 101, 120, 116, 101, 110, 100, 40, 41, 32, 45, 45, 32, 101, 120, 116, 101, 110, 100, 32, 97, 114, 114, 97, 121, 32, 98, 121, 32, 97, 112, 112, 101, 110, 100, 105, 110, 103, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 32, 97, 110, 32, 105, 116, 101, 114, 97, 98, 108, 101, 10, 102, 114, 111, 109, 102, 105, 108, 101, 40, 41, 32, 45, 45, 32, 114, 101, 97, 100, 32, 105, 116, 101, 109, 115, 32, 102, 114, 111, 109, 32, 97, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 10, 102, 114, 111, 109, 108, 105, 115, 116, 40, 41, 32, 45, 45, 32, 97, 112, 112, 101, 110, 100, 32, 105, 116, 101, 109, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 108, 105, 115, 116, 10, 102, 114, 111, 109, 115, 116, 114, 105, 110, 103, 40, 41, 32, 45, 45, 32, 97, 112, 112, 101, 110, 100, 32, 105, 116, 101, 109, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 10, 105, 110, 100, 101, 120, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 100, 101, 120, 32, 111, 102, 32, 102, 105, 114, 115, 116, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 32, 111, 102, 32, 97, 110, 32, 111, 98, 106, 101, 99, 116, 10, 105, 110, 115, 101, 114, 116, 40, 41, 32, 45, 45, 32, 105, 110, 115, 101, 114, 116, 32, 97, 32, 110, 101, 119, 32, 105, 116, 101, 109, 32, 105, 110, 116, 111, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 32, 97, 116, 32, 97, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 112, 111, 115, 105, 116, 105, 111, 110, 10, 112, 111, 112, 40, 41, 32, 45, 45, 32, 114, 101, 109, 111, 118, 101, 32, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 32, 105, 116, 101, 109, 32, 40, 100, 101, 102, 97, 117, 108, 116, 32, 108, 97, 115, 116, 41, 10, 114, 101, 97, 100, 40, 41, 32, 45, 45, 32, 68, 69, 80, 82, 69, 67, 65, 84, 69, 68, 44, 32, 117, 115, 101, 32, 102, 114, 111, 109, 102, 105, 108, 101, 40, 41, 10, 114, 101, 109, 111, 118, 101, 40, 41, 32, 45, 45, 32, 114, 101, 109, 111, 118, 101, 32, 102, 105, 114, 115, 116, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 32, 111, 102, 32, 97, 110, 32, 111, 98, 106, 101, 99, 116, 10, 114, 101, 118, 101, 114, 115, 101, 40, 41, 32, 45, 45, 32, 114, 101, 118, 101, 114, 115, 101, 32, 116, 104, 101, 32, 111, 114, 100, 101, 114, 32, 111, 102, 32, 116, 104, 101, 32, 105, 116, 101, 109, 115, 32, 105, 110, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 10, 116, 111, 102, 105, 108, 101, 40, 41, 32, 45, 45, 32, 119, 114, 105, 116, 101, 32, 97, 108, 108, 32, 105, 116, 101, 109, 115, 32, 116, 111, 32, 97, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 10, 116, 111, 108, 105, 115, 116, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 32, 99, 111, 110, 118, 101, 114, 116, 101, 100, 32, 116, 111, 32, 97, 110, 32, 111, 114, 100, 105, 110, 97, 114, 121, 32, 108, 105, 115, 116, 10, 116, 111, 115, 116, 114, 105, 110, 103, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 32, 99, 111, 110, 118, 101, 114, 116, 101, 100, 32, 116, 111, 32, 97, 32, 115, 116, 114, 105, 110, 103, 10, 119, 114, 105, 116, 101, 40, 41, 32, 45, 45, 32, 68, 69, 80, 82, 69, 67, 65, 84, 69, 68, 44, 32, 117, 115, 101, 32, 116, 111, 102, 105, 108, 101, 40, 41, 10, 10, 65, 116, 116, 114, 105, 98, 117, 116, 101, 115, 58, 10, 10, 116, 121, 112, 101, 99, 111, 100, 101, 32, 45, 45, 32, 116, 104, 101, 32, 116, 121, 112, 101, 99, 111, 100, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 117, 115, 101, 100, 32, 116, 111, 32, 99, 114, 101, 97, 116, 101, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 10, 105, 116, 101, 109, 115, 105, 122, 101, 32, 45, 45, 32, 116, 104, 101, 32, 108, 101, 110, 103, 116, 104, 32, 105, 110, 32, 98, 121, 116, 101, 115, 32, 111, 102, 32, 111, 110, 101, 32, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 10, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 97, 114, 114, 97, 121, 46, 97, 114, 114, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    _Arraytype = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str86 = allocate([ 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 105, 116, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 32, 61, 61, 32, 40, 38, 80, 121, 65, 114, 114, 97, 121, 73, 116, 101, 114, 95, 84, 121, 112, 101, 41, 32, 124, 124, 32, 80, 121, 84, 121, 112, 101, 95, 73, 115, 83, 117, 98, 116, 121, 112, 101, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 105, 116, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 44, 32, 40, 38, 80, 121, 65, 114, 114, 97, 121, 73, 116, 101, 114, 95, 84, 121, 112, 101, 41, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___11336 = allocate([ 97, 114, 114, 97, 121, 105, 116, 101, 114, 95, 110, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str87 = allocate([ 97, 114, 114, 97, 121, 105, 116, 101, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _PyArrayIter_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _a_methods = allocate(16, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_NORMAL);
    __str88 = allocate([ 97, 114, 114, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str89 = allocate([ 65, 114, 114, 97, 121, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_descriptors + 8] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_descriptors + 12] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_descriptors + 24] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_descriptors + 28] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_descriptors + 40] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_descriptors + 44] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_descriptors + 56] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_descriptors + 60] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_descriptors + 72] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_descriptors + 76] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_descriptors + 88] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_descriptors + 92] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_descriptors + 104] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_descriptors + 108] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_descriptors + 120] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_descriptors + 124] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_descriptors + 136] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_descriptors + 140] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_descriptors + 152] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_descriptors + 156] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_descriptors + 168] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_descriptors + 172] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_descriptors + 184] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_descriptors + 188] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_array_getsets] = __str47;
    HEAP[_array_getsets + 4] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_array_getsets + 12] = __str48;
    HEAP[_array_getsets + 20] = __str49;
    HEAP[_array_getsets + 24] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_array_getsets + 32] = __str50;
    HEAP[_array_methods] = __str51;
    HEAP[_array_methods + 4] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_array_methods + 12] = _append_doc;
    HEAP[_array_methods + 16] = __str52;
    HEAP[_array_methods + 20] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_array_methods + 28] = _buffer_info_doc;
    HEAP[_array_methods + 32] = __str53;
    HEAP[_array_methods + 36] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_array_methods + 44] = _byteswap_doc;
    HEAP[_array_methods + 48] = __str54;
    HEAP[_array_methods + 52] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_array_methods + 60] = _copy_doc;
    HEAP[_array_methods + 64] = __str55;
    HEAP[_array_methods + 68] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_array_methods + 76] = _count_doc;
    HEAP[_array_methods + 80] = __str56;
    HEAP[_array_methods + 84] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_array_methods + 92] = _copy_doc;
    HEAP[_array_methods + 96] = __str57;
    HEAP[_array_methods + 100] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_array_methods + 108] = _extend_doc;
    HEAP[_array_methods + 112] = __str58;
    HEAP[_array_methods + 116] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_array_methods + 124] = _fromfile_doc;
    HEAP[_array_methods + 128] = __str59;
    HEAP[_array_methods + 132] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_array_methods + 140] = _fromlist_doc;
    HEAP[_array_methods + 144] = __str60;
    HEAP[_array_methods + 148] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_array_methods + 156] = _fromstring_doc;
    HEAP[_array_methods + 160] = __str61;
    HEAP[_array_methods + 164] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_array_methods + 172] = _fromunicode_doc;
    HEAP[_array_methods + 176] = __str62;
    HEAP[_array_methods + 180] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_array_methods + 188] = _index_doc;
    HEAP[_array_methods + 192] = __str63;
    HEAP[_array_methods + 196] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_array_methods + 204] = _insert_doc;
    HEAP[_array_methods + 208] = __str64;
    HEAP[_array_methods + 212] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_array_methods + 220] = _pop_doc;
    HEAP[_array_methods + 224] = __str65;
    HEAP[_array_methods + 228] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_array_methods + 236] = _fromfile_doc;
    HEAP[_array_methods + 240] = __str66;
    HEAP[_array_methods + 244] = FUNCTION_TABLE_OFFSET + 82;
    HEAP[_array_methods + 252] = _reduce_doc;
    HEAP[_array_methods + 256] = __str67;
    HEAP[_array_methods + 260] = FUNCTION_TABLE_OFFSET + 84;
    HEAP[_array_methods + 268] = _remove_doc;
    HEAP[_array_methods + 272] = __str68;
    HEAP[_array_methods + 276] = FUNCTION_TABLE_OFFSET + 86;
    HEAP[_array_methods + 284] = _reverse_doc;
    HEAP[_array_methods + 288] = __str69;
    HEAP[_array_methods + 292] = FUNCTION_TABLE_OFFSET + 88;
    HEAP[_array_methods + 300] = _tofile_doc;
    HEAP[_array_methods + 304] = __str70;
    HEAP[_array_methods + 308] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_array_methods + 316] = _tolist_doc;
    HEAP[_array_methods + 320] = __str71;
    HEAP[_array_methods + 324] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_array_methods + 332] = _tostring_doc;
    HEAP[_array_methods + 336] = __str72;
    HEAP[_array_methods + 340] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_array_methods + 348] = _tounicode_doc;
    HEAP[_array_methods + 352] = __str73;
    HEAP[_array_methods + 356] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_array_methods + 364] = _tofile_doc;
    HEAP[_array_as_mapping] = FUNCTION_TABLE_OFFSET + 98;
    HEAP[_array_as_mapping + 4] = FUNCTION_TABLE_OFFSET + 100;
    HEAP[_array_as_mapping + 8] = FUNCTION_TABLE_OFFSET + 102;
    HEAP[_emptybuf] = __str80;
    HEAP[_array_as_sequence] = FUNCTION_TABLE_OFFSET + 98;
    HEAP[_array_as_sequence + 4] = FUNCTION_TABLE_OFFSET + 104;
    HEAP[_array_as_sequence + 8] = FUNCTION_TABLE_OFFSET + 106;
    HEAP[_array_as_sequence + 12] = FUNCTION_TABLE_OFFSET + 108;
    HEAP[_array_as_sequence + 16] = FUNCTION_TABLE_OFFSET + 110;
    HEAP[_array_as_sequence + 20] = FUNCTION_TABLE_OFFSET + 112;
    HEAP[_array_as_sequence + 24] = FUNCTION_TABLE_OFFSET + 114;
    HEAP[_array_as_sequence + 28] = FUNCTION_TABLE_OFFSET + 116;
    HEAP[_array_as_sequence + 32] = FUNCTION_TABLE_OFFSET + 118;
    HEAP[_array_as_sequence + 36] = FUNCTION_TABLE_OFFSET + 120;
    HEAP[_array_as_buffer] = FUNCTION_TABLE_OFFSET + 122;
    HEAP[_array_as_buffer + 4] = FUNCTION_TABLE_OFFSET + 124;
    HEAP[_array_as_buffer + 8] = FUNCTION_TABLE_OFFSET + 126;
    HEAP[_Arraytype + 12] = __str85;
    HEAP[_Arraytype + 24] = FUNCTION_TABLE_OFFSET + 128;
    HEAP[_Arraytype + 44] = FUNCTION_TABLE_OFFSET + 130;
    HEAP[_Arraytype + 52] = _array_as_sequence;
    HEAP[_Arraytype + 56] = _array_as_mapping;
    HEAP[_Arraytype + 72] = FUNCTION_TABLE_OFFSET + 132;
    HEAP[_Arraytype + 80] = _array_as_buffer;
    HEAP[_Arraytype + 88] = _arraytype_doc;
    HEAP[_Arraytype + 100] = FUNCTION_TABLE_OFFSET + 134;
    HEAP[_Arraytype + 108] = FUNCTION_TABLE_OFFSET + 136;
    HEAP[_Arraytype + 116] = _array_methods;
    HEAP[_Arraytype + 124] = _array_getsets;
    HEAP[_Arraytype + 152] = FUNCTION_TABLE_OFFSET + 138;
    HEAP[_Arraytype + 156] = FUNCTION_TABLE_OFFSET + 140;
    HEAP[_Arraytype + 160] = FUNCTION_TABLE_OFFSET + 142;
    HEAP[_PyArrayIter_Type + 12] = __str87;
    HEAP[_PyArrayIter_Type + 24] = FUNCTION_TABLE_OFFSET + 144;
    HEAP[_PyArrayIter_Type + 72] = FUNCTION_TABLE_OFFSET + 132;
    HEAP[_PyArrayIter_Type + 92] = FUNCTION_TABLE_OFFSET + 146;
    HEAP[_PyArrayIter_Type + 108] = FUNCTION_TABLE_OFFSET + 148;
    HEAP[_PyArrayIter_Type + 112] = FUNCTION_TABLE_OFFSET + 150;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
