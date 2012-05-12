"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 240;
  var $1___SIZE = 16;
  var $2___SIZE = 16;
  var $3___SIZE = 40;
  var $4___SIZE = 24;
  var $5___SIZE = 196;
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
  var $struct_PySliceObject___SIZE = 20;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_mmap_object___SIZE = 36;
  var $struct_mmap_object___FLATTENER = [ 0, 4, 8, 12, 16, 20, 28, 32 ];
  var $struct_stat___SIZE = 96;
  var $struct_stat___FLATTENER = [ 0, 8, 12, 16, 20, 24, 28, 32, 40, 44, 52, 56, 64, 72, 80, 88 ];
  var $struct_timespec___SIZE = 8;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var __str5;
  var ___PRETTY_FUNCTION___8441;
  var __str6;
  var __str7;
  var __str8;
  var __str9;
  var __str10;
  var __str11;
  var __str12;
  var __str13;
  var __str14;
  var _mmap_module_error;
  var __str15;
  var __str16;
  var __str17;
  var __str18;
  var __str19;
  var __str20;
  var __str21;
  var __str22;
  var __str23;
  var __str24;
  var __str25;
  var __str26;
  var __str27;
  var __str28;
  var __str29;
  var __str30;
  var __str31;
  var __str32;
  var __str33;
  var __str34;
  var __str35;
  var __str36;
  var _mmap_object_methods;
  var __str37;
  var __str38;
  var __str39;
  var __str40;
  var __str41;
  var __str42;
  var __str43;
  var __str44;
  var __str45;
  var __str46;
  var __str47;
  var __str48;
  var __str49;
  var _mmap_as_sequence;
  var _mmap_as_mapping;
  var _mmap_as_buffer;
  var _mmap_doc;
  var __str50;
  var _mmap_object_type;
  var __str51;
  var __str52;
  var __str53;
  var _keywords_9396;
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
  var __str74;
  var __str75;
  var __str76;
  var __str77;
  var __str78;
  var __str79;
  var __str80;
  var __str81;
  var __str82;
  function _my_getpagesize() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval = __stackBase__;
      var $0 = __stackBase__ + 4;
      
      var $1 = _sysconf(30);
      HEAP[$0] = $1;
      var $2 = HEAP[$0];
      HEAP[$retval] = $2;
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
  function _mmap_object_dealloc($m_obj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m_obj_addr = __stackBase__;
      
      HEAP[$m_obj_addr] = $m_obj;
      
      
      
      
      if (HEAP[HEAP[$m_obj_addr] + 28] >= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[HEAP[$m_obj_addr] + 28];
      var $7 = _close($6);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$m_obj_addr] + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      
      
      if (HEAP[HEAP[$m_obj_addr] + 32] != 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[HEAP[$m_obj_addr] + 32] != 3) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $22 = HEAP[HEAP[$m_obj_addr] + 12];
      
      
      var $25 = HEAP[HEAP[$m_obj_addr] + 8];
      var $26 = _msync($25, $22, 4);
      __label__ = 6;
      break;
     case 6:
      
      
      var $29 = HEAP[HEAP[$m_obj_addr] + 12];
      
      
      var $32 = HEAP[HEAP[$m_obj_addr] + 8];
      var $33 = _munmap($32, $29);
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      
      var $39 = HEAP[HEAP[HEAP[$m_obj_addr] + 4] + 160];
      
      var $41 = HEAP[$m_obj_addr];
      FUNCTION_TABLE[$39]($41);
      __label__ = 8;
      break;
     case 8:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mmap_close_method($self, $unused) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] >= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 28];
      var $8 = _close($7);
      __label__ = 2;
      break;
     case 2:
      
      var $10 = HEAP[$self_addr] + 28;
      HEAP[$10] = -1;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $17 = HEAP[HEAP[$self_addr] + 12];
      
      
      var $20 = HEAP[HEAP[$self_addr] + 8];
      var $21 = _munmap($20, $17);
      
      var $23 = HEAP[$self_addr] + 8;
      HEAP[$23] = 0;
      __label__ = 4;
      break;
     case 4:
      
      var $25 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $25;
      HEAP[$0] = __Py_NoneStruct;
      var $26 = HEAP[$0];
      HEAP[$retval] = $26;
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
  function _mmap_read_byte_method($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 17;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 17);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $value = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 2:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] < HEAP[HEAP[$self_addr] + 12]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[$self_addr] + 8] + HEAP[HEAP[$self_addr] + 16]];
      HEAP[$value] = $20;
      
      
      
      var $24 = HEAP[HEAP[$self_addr] + 16] + 1;
      
      var $26 = HEAP[$self_addr] + 16;
      HEAP[$26] = $24;
      
      var $28 = HEAP[$value];
      var $29 = __Py_BuildValue_SizeT(__str1, allocate([ $28, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $29;
      __label__ = 5;
      break;
     case 4:
      var $30 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($30, __str2);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $31 = HEAP[$0];
      HEAP[$retval] = $31;
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
  function _mmap_read_line_method($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $start = __stackBase__ + 16;
      var $eof = __stackBase__ + 20;
      var $eol = __stackBase__ + 24;
      var $result = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      
      
      
      
      
      
      var $7 = HEAP[HEAP[$self_addr] + 8] + HEAP[HEAP[$self_addr] + 16];
      HEAP[$start] = $7;
      
      
      
      
      
      
      var $14 = HEAP[HEAP[$self_addr] + 8] + HEAP[HEAP[$self_addr] + 12];
      HEAP[$eof] = $14;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $19 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($19, __str);
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 2:
      
      
      
      
      
      
      var $26 = HEAP[HEAP[$self_addr] + 12] - HEAP[HEAP[$self_addr] + 16];
      var $27 = HEAP[$start];
      var $28 = _memchr($27, 10, $26);
      HEAP[$eol] = $28;
      
      
      if (HEAP[$eol] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $31 = HEAP[$eof];
      HEAP[$eol] = $31;
      __label__ = 5;
      break;
     case 4:
      
      var $33 = HEAP[$eol] + 1;
      HEAP[$eol] = $33;
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      var $38 = HEAP[$eol] - HEAP[$start];
      var $39 = HEAP[$start];
      var $40 = _PyString_FromStringAndSize($39, $38);
      HEAP[$result] = $40;
      
      
      
      
      
      
      
      
      var $49 = HEAP[HEAP[$self_addr] + 16] + (HEAP[$eol] - HEAP[$start]);
      
      var $51 = HEAP[$self_addr] + 16;
      HEAP[$51] = $49;
      var $52 = HEAP[$result];
      HEAP[$0] = $52;
      __label__ = 6;
      break;
     case 6:
      var $53 = HEAP[$0];
      HEAP[$retval] = $53;
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
  function _mmap_read_method($self, $args) {
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
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $num_bytes = __stackBase__ + 16;
      var $n = __stackBase__ + 20;
      var $result = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 2:
      var $6 = HEAP[$args_addr];
      var $7 = __PyArg_ParseTuple_SizeT($6, __str3, allocate([ $num_bytes, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 4:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] < HEAP[HEAP[$self_addr] + 16]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str4, __str5, 251, ___PRETTY_FUNCTION___8441);
      throw "Reached an unreachable!";
     case 6:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[$self_addr] + 12] - HEAP[HEAP[$self_addr] + 16];
      HEAP[$n] = $22;
      
      
      if (HEAP[$n] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$n] = 2147483647;
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$num_bytes] < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      if (HEAP[$num_bytes] > HEAP[$n]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $30 = HEAP[$n];
      HEAP[$num_bytes] = $30;
      __label__ = 11;
      break;
     case 11:
      var $31 = HEAP[$num_bytes];
      
      
      
      
      
      
      var $38 = HEAP[HEAP[$self_addr] + 8] + HEAP[HEAP[$self_addr] + 16];
      var $39 = __Py_BuildValue_SizeT(__str6, allocate([ $38, 0, 0, 0, $31, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $39;
      
      
      
      
      var $44 = HEAP[HEAP[$self_addr] + 16] + HEAP[$num_bytes];
      
      var $46 = HEAP[$self_addr] + 16;
      HEAP[$46] = $44;
      var $47 = HEAP[$result];
      HEAP[$0] = $47;
      __label__ = 12;
      break;
     case 12:
      var $48 = HEAP[$0];
      HEAP[$retval] = $48;
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
  function _mmap_gfind($self, $args, $reverse) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 68;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $reverse_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $iftmp_31 = __stackBase__ + 16;
      var $iftmp_16 = __stackBase__ + 20;
      var $iftmp_15 = __stackBase__ + 24;
      var $0 = __stackBase__ + 28;
      var $start = __stackBase__ + 32;
      var $end = __stackBase__ + 36;
      var $needle = __stackBase__ + 40;
      var $len = __stackBase__ + 44;
      var $p = __stackBase__ + 48;
      var $start_p = __stackBase__ + 52;
      var $end_p = __stackBase__ + 56;
      var $sign = __stackBase__ + 60;
      var $i = __stackBase__ + 64;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$reverse_addr] = $reverse;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 16];
      HEAP[$start] = $3;
      
      
      var $6 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$end] = $6;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $11 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($11, __str);
      HEAP[$0] = 0;
      __label__ = 36;
      break;
     case 2:
      
      
      if (HEAP[$reverse_addr] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$iftmp_15] = __str7;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_15] = __str8;
      __label__ = 5;
      break;
     case 5:
      var $14 = HEAP[$args_addr];
      var $15 = HEAP[$iftmp_15];
      var $16 = __PyArg_ParseTuple_SizeT($14, $15, allocate([ $needle, 0, 0, 0, $len, 0, 0, 0, $start, 0, 0, 0, $end, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($16 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 36;
      break;
     case 7:
      
      
      if (HEAP[$reverse_addr] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$iftmp_16] = -1;
      __label__ = 10;
      break;
     case 9:
      HEAP[$iftmp_16] = 1;
      __label__ = 10;
      break;
     case 10:
      var $20 = HEAP[$iftmp_16];
      HEAP[$sign] = $20;
      
      
      if (HEAP[$start] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $27 = HEAP[HEAP[$self_addr] + 12] + HEAP[$start];
      HEAP[$start] = $27;
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$start] < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$start] = 0;
      __label__ = 16;
      break;
     case 14:
      
      
      
      
      
      if (HEAP[$start] > HEAP[HEAP[$self_addr] + 12]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      var $37 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$start] = $37;
      __label__ = 16;
      break;
     case 16:
      
      
      if (HEAP[$end] < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $44 = HEAP[HEAP[$self_addr] + 12] + HEAP[$end];
      HEAP[$end] = $44;
      __label__ = 18;
      break;
     case 18:
      
      
      if (HEAP[$end] < 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$end] = 0;
      __label__ = 22;
      break;
     case 20:
      
      
      
      
      
      if (HEAP[$end] > HEAP[HEAP[$self_addr] + 12]) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      var $54 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$end] = $54;
      __label__ = 22;
      break;
     case 22:
      
      
      
      
      var $59 = HEAP[HEAP[$self_addr] + 8] + HEAP[$start];
      HEAP[$start_p] = $59;
      
      
      
      
      var $64 = HEAP[HEAP[$self_addr] + 8] + HEAP[$end];
      HEAP[$end_p] = $64;
      
      
      if (HEAP[$reverse_addr] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      var $70 = HEAP[$end_p] + (0 - HEAP[$len]);
      HEAP[$iftmp_31] = $70;
      __label__ = 25;
      break;
     case 24:
      var $71 = HEAP[$start_p];
      HEAP[$iftmp_31] = $71;
      __label__ = 25;
      break;
     case 25:
      var $72 = HEAP[$iftmp_31];
      HEAP[$p] = $72;
      __label__ = 33;
      break;
     case 26:
      HEAP[$i] = 0;
      __label__ = 28;
      break;
     case 27:
      
      var $74 = HEAP[$i] + 1;
      HEAP[$i] = $74;
      __label__ = 28;
      break;
     case 28:
      
      
      
      if (HEAP[$i] >= HEAP[$len]) {
        __label__ = 30;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$needle] + HEAP[$i]] == HEAP[HEAP[$p] + HEAP[$i]]) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      if (HEAP[$i] == HEAP[$len]) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      
      
      var $96 = HEAP[$p] - HEAP[HEAP[$self_addr] + 8];
      var $97 = _PyInt_FromSsize_t($96);
      HEAP[$0] = $97;
      __label__ = 36;
      break;
     case 32:
      
      
      var $100 = HEAP[$p] + HEAP[$sign];
      HEAP[$p] = $100;
      __label__ = 33;
      break;
     case 33:
      
      
      
      if (HEAP[$p] < HEAP[$start_p]) {
        __label__ = 35;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      
      
      if (HEAP[$p] + HEAP[$len] <= HEAP[$end_p]) {
        __label__ = 26;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      var $109 = _PyInt_FromLong(-1);
      HEAP[$0] = $109;
      __label__ = 36;
      break;
     case 36:
      var $110 = HEAP[$0];
      HEAP[$retval] = $110;
      __label__ = 37;
      break;
     case 37:
      var $retval36 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval36;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mmap_find_method($self, $args) {
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
      var $1 = HEAP[$self_addr];
      var $2 = HEAP[$args_addr];
      var $3 = _mmap_gfind($1, $2, 0);
      HEAP[$0] = $3;
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
  function _mmap_rfind_method($self, $args) {
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
      var $1 = HEAP[$self_addr];
      var $2 = HEAP[$args_addr];
      var $3 = _mmap_gfind($1, $2, 1);
      HEAP[$0] = $3;
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
  function _is_writeable($self) {
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
      
      
      
      
      if (HEAP[HEAP[__stackBase__] + 32] != 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 1;
      __label__ = 3;
      break;
     case 2:
      var $5 = HEAP[_PyExc_TypeError];
      var $6 = _PyErr_Format($5, __str9, allocate(1, "i32", ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 3:
      var $7 = HEAP[$0];
      HEAP[$retval] = $7;
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
  function _is_resizeable($self) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] == 2) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 1;
      __label__ = 4;
      break;
     case 3:
      var $9 = HEAP[_PyExc_TypeError];
      var $10 = _PyErr_Format($9, __str10, allocate(1, "i32", ALLOC_STACK));
      HEAP[$0] = 0;
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
  function _mmap_write_method($self, $args) {
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
      var $length = __stackBase__ + 16;
      var $data = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 2:
      var $6 = HEAP[$args_addr];
      var $7 = __PyArg_ParseTuple_SizeT($6, __str11, allocate([ $data, 0, 0, 0, $length, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
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
      var $9 = HEAP[$self_addr];
      var $10 = _is_writeable($9);
      
      if ($10 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 6:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] + HEAP[$length] > HEAP[HEAP[$self_addr] + 12]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $21 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($21, __str12);
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 8:
      var $22 = HEAP[$length];
      var $23 = HEAP[$data];
      
      
      
      
      
      
      var $30 = HEAP[HEAP[$self_addr] + 8] + HEAP[HEAP[$self_addr] + 16];
      _llvm_memcpy_p0i8_p0i8_i32($30, $23, $22, 1, 0);
      
      
      
      
      var $35 = HEAP[HEAP[$self_addr] + 16] + HEAP[$length];
      
      var $37 = HEAP[$self_addr] + 16;
      HEAP[$37] = $35;
      
      var $39 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $39;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 9;
      break;
     case 9:
      var $40 = HEAP[$0];
      HEAP[$retval] = $40;
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
  function _mmap_write_byte_method($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 17;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 17);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $value = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 2:
      var $6 = HEAP[$args_addr];
      var $7 = __PyArg_ParseTuple_SizeT($6, __str13, allocate([ $value, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
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
      var $9 = HEAP[$self_addr];
      var $10 = _is_writeable($9);
      
      if ($10 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 6:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] < HEAP[HEAP[$self_addr] + 12]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $25 = HEAP[$value];
      var $26 = HEAP[HEAP[$self_addr] + 8] + HEAP[HEAP[$self_addr] + 16];
      HEAP[$26] = $25;
      
      
      
      var $30 = HEAP[HEAP[$self_addr] + 16] + 1;
      
      var $32 = HEAP[$self_addr] + 16;
      HEAP[$32] = $30;
      
      var $34 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $34;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 9;
      break;
     case 8:
      var $35 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($35, __str14);
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 9:
      var $36 = HEAP[$0];
      HEAP[$retval] = $36;
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
  function _mmap_size_method($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 112;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 112);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $buf = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 2:
      
      
      var $8 = HEAP[HEAP[$self_addr] + 28];
      var $9 = ___01fstat64_($8, $buf);
      var $10 = $9 == -1;
      if ($10) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = HEAP[_mmap_module_error];
      var $12 = _PyErr_SetFromErrno($11);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      
      var $14 = HEAP[$buf + 44];
      var $15 = _PyLong_FromLongLong($14);
      HEAP[$0] = $15;
      __label__ = 5;
      break;
     case 5:
      var $16 = HEAP[$0];
      HEAP[$retval] = $16;
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
  function _mmap_resize_method($self, $args) {
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
      var $new_size = __stackBase__ + 16;
      var $newmap = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 2:
      var $6 = HEAP[$args_addr];
      var $7 = __PyArg_ParseTuple_SizeT($6, __str15, allocate([ $new_size, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $9 = HEAP[$self_addr];
      var $10 = _is_resizeable($9);
      
      if ($10 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 5:
      
      
      
      
      
      var $17 = HEAP[HEAP[$self_addr] + 20] + HEAP[$new_size];
      
      
      var $20 = HEAP[HEAP[$self_addr] + 28];
      var $21 = ___01ftruncate64_($20, $17);
      var $22 = $21 == -1;
      if ($22) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $23 = HEAP[_mmap_module_error];
      var $24 = _PyErr_SetFromErrno($23);
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 7:
      var $25 = HEAP[$new_size];
      
      
      var $28 = HEAP[HEAP[$self_addr] + 12];
      
      
      var $31 = HEAP[HEAP[$self_addr] + 8];
      var $32 = _mremap($31, $28, $25, 1, allocate(1, "i32", ALLOC_STACK));
      HEAP[$newmap] = $32;
      
      var $34 = HEAP[$newmap] == -1;
      if ($34) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $35 = HEAP[_mmap_module_error];
      var $36 = _PyErr_SetFromErrno($35);
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 9:
      var $37 = HEAP[$newmap];
      
      var $39 = HEAP[$self_addr] + 8;
      HEAP[$39] = $37;
      var $40 = HEAP[$new_size];
      
      var $42 = HEAP[$self_addr] + 12;
      HEAP[$42] = $40;
      
      var $44 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $44;
      HEAP[$0] = __Py_NoneStruct;
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
  function _mmap_tell_method($self, $unused) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      var $8 = HEAP[HEAP[$self_addr] + 16];
      var $9 = _PyInt_FromSize_t($8);
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
  function _mmap_flush_method($self, $args) {
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
      var $offset = __stackBase__ + 16;
      var $size = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$offset] = 0;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$size] = $3;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $8 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($8, __str);
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 2:
      var $9 = HEAP[$args_addr];
      var $10 = __PyArg_ParseTuple_SizeT($9, __str16, allocate([ $offset, 0, 0, 0, $size, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($10 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 4:
      
      
      
      
      
      
      
      if (HEAP[$offset] + HEAP[$size] > HEAP[HEAP[$self_addr] + 12]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $19 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($19, __str17);
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] == 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] == 3) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $28 = _PyLong_FromLong(0);
      HEAP[$0] = $28;
      __label__ = 12;
      break;
     case 9:
      var $29 = HEAP[$size];
      
      
      
      
      var $34 = HEAP[HEAP[$self_addr] + 8] + HEAP[$offset];
      var $35 = _msync($34, $29, 4);
      var $36 = $35 == -1;
      if ($36) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $37 = HEAP[_mmap_module_error];
      var $38 = _PyErr_SetFromErrno($37);
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 11:
      var $39 = _PyInt_FromLong(0);
      HEAP[$0] = $39;
      __label__ = 12;
      break;
     case 12:
      var $40 = HEAP[$0];
      HEAP[$retval] = $40;
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
  function _mmap_seek_method($self, $args) {
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
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $dist = __stackBase__ + 16;
      var $how = __stackBase__ + 20;
      var $where = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$how] = 0;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 2:
      var $6 = HEAP[$args_addr];
      var $7 = __PyArg_ParseTuple_SizeT($6, __str18, allocate([ $dist, 0, 0, 0, $how, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 4:
      var $9 = HEAP[$how];
      if ($9 == 0) {
        __label__ = 5;
        break;
      } else if ($9 == 1) {
        __label__ = 7;
        break;
      } else if ($9 == 2) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 5:
      
      
      if (HEAP[$dist] < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $12 = HEAP[$dist];
      HEAP[$where] = $12;
      __label__ = 12;
      break;
     case 7:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] + HEAP[$dist] < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      var $23 = HEAP[HEAP[$self_addr] + 16] + HEAP[$dist];
      HEAP[$where] = $23;
      __label__ = 12;
      break;
     case 9:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] + HEAP[$dist] < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      var $34 = HEAP[HEAP[$self_addr] + 12] + HEAP[$dist];
      HEAP[$where] = $34;
      __label__ = 12;
      break;
     case 11:
      var $35 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($35, __str19);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 12:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] < HEAP[$where]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      var $42 = HEAP[$self_addr] + 16;
      var $43 = HEAP[$where];
      HEAP[$42] = $43;
      
      var $45 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $45;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 15;
      break;
     case 14:
      var $46 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($46, __str20);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 15:
      var $47 = HEAP[$0];
      HEAP[$retval] = $47;
      __label__ = 16;
      break;
     case 16:
      var $retval14 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mmap_move_method($self, $args) {
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
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $dest = __stackBase__ + 16;
      var $src = __stackBase__ + 20;
      var $cnt = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 2:
      var $6 = HEAP[$args_addr];
      var $7 = __PyArg_ParseTuple_SizeT($6, __str21, allocate([ $dest, 0, 0, 0, $src, 0, 0, 0, $cnt, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $9 = HEAP[$self_addr];
      var $10 = _is_writeable($9);
      
      if ($10 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 5:
      
      
      
      
      
      if (HEAP[$cnt] + HEAP[$dest] < HEAP[$cnt]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      if (HEAP[$cnt] + HEAP[$src] < HEAP[$cnt]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] < HEAP[$src]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      if (HEAP[$src] + HEAP[$cnt] > HEAP[HEAP[$self_addr] + 12]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] < HEAP[$dest]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      if (HEAP[$dest] + HEAP[$cnt] > HEAP[HEAP[$self_addr] + 12]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $46 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($46, __str22);
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 12:
      var $47 = HEAP[$cnt];
      
      
      
      
      var $52 = HEAP[HEAP[$self_addr] + 8] + HEAP[$src];
      
      
      
      
      var $57 = HEAP[HEAP[$self_addr] + 8] + HEAP[$dest];
      _llvm_memmove_p0i8_p0i8_i32($57, $52, $47, 1, 0);
      
      var $59 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $59;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 13;
      break;
     case 13:
      var $60 = HEAP[$0];
      HEAP[$retval] = $60;
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
  function _mmap_buffer_getreadbuf($self, $index, $ptr) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 2:
      
      
      if (HEAP[$index_addr] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_PyExc_SystemError];
      _PyErr_SetString($8, __str37);
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 4:
      
      
      var $11 = HEAP[HEAP[$self_addr] + 8];
      var $12 = HEAP[$ptr_addr];
      HEAP[$12] = $11;
      
      
      var $15 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$0] = $15;
      __label__ = 5;
      break;
     case 5:
      var $16 = HEAP[$0];
      HEAP[$retval] = $16;
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
  function _mmap_buffer_getwritebuf($self, $index, $ptr) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = -1;
      __label__ = 7;
      break;
     case 2:
      
      
      if (HEAP[$index_addr] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_PyExc_SystemError];
      _PyErr_SetString($8, __str37);
      HEAP[$0] = -1;
      __label__ = 7;
      break;
     case 4:
      var $9 = HEAP[$self_addr];
      var $10 = _is_writeable($9);
      
      if ($10 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 7;
      break;
     case 6:
      
      
      var $14 = HEAP[HEAP[$self_addr] + 8];
      var $15 = HEAP[$ptr_addr];
      HEAP[$15] = $14;
      
      
      var $18 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$0] = $18;
      __label__ = 7;
      break;
     case 7:
      var $19 = HEAP[$0];
      HEAP[$retval] = $19;
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
  function _mmap_buffer_getsegcount($self, $lenp) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 2:
      
      
      if (HEAP[$lenp_addr] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $10 = HEAP[HEAP[$self_addr] + 12];
      var $11 = HEAP[$lenp_addr];
      HEAP[$11] = $10;
      __label__ = 4;
      break;
     case 4:
      HEAP[$0] = 1;
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
  function _mmap_buffer_getcharbuffer($self, $index, $ptr) {
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
      _PyErr_SetString($3, __str38);
      HEAP[$0] = -1;
      __label__ = 3;
      break;
     case 2:
      
      
      var $6 = HEAP[HEAP[$self_addr] + 8];
      var $7 = HEAP[$ptr_addr];
      HEAP[$7] = $6;
      
      
      var $10 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$0] = $10;
      __label__ = 3;
      break;
     case 3:
      var $11 = HEAP[$0];
      HEAP[$retval] = $11;
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
  function _mmap_length($self) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = -1;
      __label__ = 3;
      break;
     case 2:
      
      
      var $8 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$0] = $8;
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
  function _mmap_item($self, $i) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$i_addr] = $i;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 2:
      
      
      if (HEAP[$i_addr] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      if (HEAP[$i_addr] >= HEAP[HEAP[$self_addr] + 12]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $13 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($13, __str39);
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 5:
      
      
      
      
      var $18 = HEAP[HEAP[$self_addr] + 8] + HEAP[$i_addr];
      var $19 = _PyString_FromStringAndSize($18, 1);
      HEAP[$0] = $19;
      __label__ = 6;
      break;
     case 6:
      var $20 = HEAP[$0];
      HEAP[$retval] = $20;
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
  function _mmap_slice($self, $ilow, $ihigh) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $ilow_addr = __stackBase__ + 4;
      var $ihigh_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$ilow_addr] = $ilow;
      HEAP[$ihigh_addr] = $ihigh;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 2:
      
      
      if (HEAP[$ilow_addr] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$ilow_addr] = 0;
      __label__ = 6;
      break;
     case 4:
      
      
      
      
      
      if (HEAP[$ilow_addr] > HEAP[HEAP[$self_addr] + 12]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $15 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$ilow_addr] = $15;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$ihigh_addr] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$ihigh_addr] = 0;
      __label__ = 8;
      break;
     case 8:
      
      
      
      if (HEAP[$ihigh_addr] < HEAP[$ilow_addr]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $21 = HEAP[$ilow_addr];
      HEAP[$ihigh_addr] = $21;
      __label__ = 12;
      break;
     case 10:
      
      
      
      
      
      if (HEAP[$ihigh_addr] > HEAP[HEAP[$self_addr] + 12]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      var $29 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$ihigh_addr] = $29;
      __label__ = 12;
      break;
     case 12:
      
      
      var $32 = HEAP[$ihigh_addr] - HEAP[$ilow_addr];
      
      
      
      
      var $37 = HEAP[HEAP[$self_addr] + 8] + HEAP[$ilow_addr];
      var $38 = _PyString_FromStringAndSize($37, $32);
      HEAP[$0] = $38;
      __label__ = 13;
      break;
     case 13:
      var $39 = HEAP[$0];
      HEAP[$retval] = $39;
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
  function _mmap_subscript($self, $item) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 52);
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
      var $slicelen = __stackBase__ + 32;
      var $result_buf = __stackBase__ + 36;
      var $cur = __stackBase__ + 40;
      var $i21 = __stackBase__ + 44;
      var $result = __stackBase__ + 48;
      
      HEAP[$self_addr] = $self;
      HEAP[$item_addr] = $item;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = 0;
      __label__ = 28;
      break;
     case 2:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$item_addr] + 4] + 48] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$item_addr] + 4] + 84] & 131072) == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[HEAP[$item_addr] + 4] + 48] + 152] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $27 = HEAP[_PyExc_IndexError];
      var $28 = HEAP[$item_addr];
      var $29 = _PyNumber_AsSsize_t($28, $27);
      HEAP[$i] = $29;
      
      var $31 = HEAP[$i] == -1;
      if ($31) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      var $32 = _PyErr_Occurred();
      
      if ($32 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 28;
      break;
     case 8:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $40 = HEAP[HEAP[$self_addr] + 12] + HEAP[$i];
      HEAP[$i] = $40;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      if (HEAP[$i] >= HEAP[HEAP[$self_addr] + 12]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $48 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($48, __str39);
      HEAP[$0] = 0;
      __label__ = 28;
      break;
     case 13:
      
      
      
      
      var $53 = HEAP[HEAP[$self_addr] + 8] + HEAP[$i];
      var $54 = _PyString_FromStringAndSize($53, 1);
      HEAP[$0] = $54;
      __label__ = 28;
      break;
     case 14:
      
      
      
      
      if (HEAP[HEAP[$item_addr] + 4] == _PySlice_Type) {
        __label__ = 15;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 15:
      
      
      var $61 = HEAP[HEAP[$self_addr] + 12];
      
      var $63 = HEAP[$item_addr];
      var $64 = _PySlice_GetIndicesEx($63, $61, $start, $stop, $step, $slicelen);
      
      if ($64 < 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      HEAP[$0] = 0;
      __label__ = 28;
      break;
     case 17:
      
      
      if (HEAP[$slicelen] <= 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $68 = _PyString_FromStringAndSize(__str40, 0);
      HEAP[$0] = $68;
      __label__ = 28;
      break;
     case 19:
      
      
      if (HEAP[$step] == 1) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $71 = HEAP[$slicelen];
      
      
      
      
      var $76 = HEAP[HEAP[$self_addr] + 8] + HEAP[$start];
      var $77 = _PyString_FromStringAndSize($76, $71);
      HEAP[$0] = $77;
      __label__ = 28;
      break;
     case 21:
      var $78 = HEAP[$slicelen];
      var $79 = _PyMem_Malloc($78);
      HEAP[$result_buf] = $79;
      
      
      if (HEAP[$result_buf] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      var $82 = _PyErr_NoMemory();
      HEAP[$0] = $82;
      __label__ = 28;
      break;
     case 23:
      var $83 = HEAP[$start];
      HEAP[$cur] = $83;
      HEAP[$i21] = 0;
      __label__ = 25;
      break;
     case 24:
      
      
      
      
      
      var $89 = HEAP[HEAP[HEAP[$self_addr] + 8] + HEAP[$cur]];
      
      
      var $92 = HEAP[$result_buf] + HEAP[$i21];
      HEAP[$92] = $89;
      
      
      var $95 = HEAP[$cur] + HEAP[$step];
      HEAP[$cur] = $95;
      
      var $97 = HEAP[$i21] + 1;
      HEAP[$i21] = $97;
      __label__ = 25;
      break;
     case 25:
      
      
      
      if (HEAP[$i21] < HEAP[$slicelen]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      var $101 = HEAP[$slicelen];
      var $102 = HEAP[$result_buf];
      var $103 = _PyString_FromStringAndSize($102, $101);
      HEAP[$result] = $103;
      var $104 = HEAP[$result_buf];
      _PyMem_Free($104);
      var $105 = HEAP[$result];
      HEAP[$0] = $105;
      __label__ = 28;
      break;
     case 27:
      var $106 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($106, __str41);
      HEAP[$0] = 0;
      __label__ = 28;
      break;
     case 28:
      var $107 = HEAP[$0];
      HEAP[$retval] = $107;
      __label__ = 29;
      break;
     case 29:
      var $retval29 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval29;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mmap_concat($self, $bb) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 2:
      var $6 = HEAP[_PyExc_SystemError];
      _PyErr_SetString($6, __str42);
      HEAP[$0] = 0;
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
  function _mmap_repeat($self, $n) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $n_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$n_addr] = $n;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 2:
      var $6 = HEAP[_PyExc_SystemError];
      _PyErr_SetString($6, __str43);
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 3:
      var $7 = HEAP[$0];
      HEAP[$retval] = $7;
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
  function _mmap_ass_slice($self, $ilow, $ihigh, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $ilow_addr = __stackBase__ + 4;
      var $ihigh_addr = __stackBase__ + 8;
      var $v_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $buf = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$ilow_addr] = $ilow;
      HEAP[$ihigh_addr] = $ihigh;
      HEAP[$v_addr] = $v;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = -1;
      __label__ = 21;
      break;
     case 2:
      
      
      if (HEAP[$ilow_addr] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$ilow_addr] = 0;
      __label__ = 6;
      break;
     case 4:
      
      
      
      
      
      if (HEAP[$ilow_addr] > HEAP[HEAP[$self_addr] + 12]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $15 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$ilow_addr] = $15;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$ihigh_addr] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$ihigh_addr] = 0;
      __label__ = 8;
      break;
     case 8:
      
      
      
      if (HEAP[$ihigh_addr] < HEAP[$ilow_addr]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $21 = HEAP[$ilow_addr];
      HEAP[$ihigh_addr] = $21;
      __label__ = 12;
      break;
     case 10:
      
      
      
      
      
      if (HEAP[$ihigh_addr] > HEAP[HEAP[$self_addr] + 12]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      var $29 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$ihigh_addr] = $29;
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $32 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($32, __str44);
      HEAP[$0] = -1;
      __label__ = 21;
      break;
     case 14:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 134217728) == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $40 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($40, __str45);
      HEAP[$0] = -1;
      __label__ = 21;
      break;
     case 16:
      var $41 = HEAP[$v_addr];
      var $42 = _PyString_Size($41);
      
      
      
      
      if ($42 != HEAP[$ihigh_addr] - HEAP[$ilow_addr]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $47 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($47, __str46);
      HEAP[$0] = -1;
      __label__ = 21;
      break;
     case 18:
      var $48 = HEAP[$self_addr];
      var $49 = _is_writeable($48);
      
      if ($49 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$0] = -1;
      __label__ = 21;
      break;
     case 20:
      var $51 = HEAP[$v_addr];
      var $52 = _PyString_AsString($51);
      HEAP[$buf] = $52;
      
      
      var $55 = HEAP[$ihigh_addr] - HEAP[$ilow_addr];
      
      
      
      
      var $60 = HEAP[HEAP[$self_addr] + 8] + HEAP[$ilow_addr];
      var $61 = HEAP[$buf];
      _llvm_memcpy_p0i8_p0i8_i32($60, $61, $55, 1, 0);
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 21:
      var $62 = HEAP[$0];
      HEAP[$retval] = $62;
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
  function _mmap_ass_item($self, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $v_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $buf = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$i_addr] = $i;
      HEAP[$v_addr] = $v;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 2:
      
      
      if (HEAP[$i_addr] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      if (HEAP[$i_addr] >= HEAP[HEAP[$self_addr] + 12]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $13 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($13, __str39);
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 5:
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $16 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($16, __str47);
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 7:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 134217728) == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $24 = HEAP[$v_addr];
      var $25 = _PyString_Size($24);
      
      if ($25 != 1) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $27 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($27, __str48);
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 10:
      var $28 = HEAP[$self_addr];
      var $29 = _is_writeable($28);
      
      if ($29 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 12:
      var $31 = HEAP[$v_addr];
      var $32 = _PyString_AsString($31);
      HEAP[$buf] = $32;
      
      
      
      
      
      var $38 = HEAP[HEAP[$buf]];
      
      var $40 = HEAP[HEAP[$self_addr] + 8] + HEAP[$i_addr];
      HEAP[$40] = $38;
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 13:
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
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
  function _mmap_ass_subscript($self, $item, $value) {
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
      var $value_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $buf = __stackBase__ + 24;
      var $start = __stackBase__ + 28;
      var $stop = __stackBase__ + 32;
      var $step = __stackBase__ + 36;
      var $slicelen = __stackBase__ + 40;
      var $buf35 = __stackBase__ + 44;
      var $cur = __stackBase__ + 48;
      var $i39 = __stackBase__ + 52;
      var $buf40 = __stackBase__ + 56;
      
      HEAP[$self_addr] = $self;
      HEAP[$item_addr] = $item;
      HEAP[$value_addr] = $value;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = -1;
      __label__ = 45;
      break;
     case 2:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$item_addr] + 4] + 48] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$item_addr] + 4] + 84] & 131072) == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[HEAP[$item_addr] + 4] + 48] + 152] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $27 = HEAP[_PyExc_IndexError];
      var $28 = HEAP[$item_addr];
      var $29 = _PyNumber_AsSsize_t($28, $27);
      HEAP[$i] = $29;
      
      var $31 = HEAP[$i] == -1;
      if ($31) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      var $32 = _PyErr_Occurred();
      
      if ($32 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = -1;
      __label__ = 45;
      break;
     case 8:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $40 = HEAP[HEAP[$self_addr] + 12] + HEAP[$i];
      HEAP[$i] = $40;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      if (HEAP[$i] >= HEAP[HEAP[$self_addr] + 12]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $48 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($48, __str39);
      HEAP[$0] = -1;
      __label__ = 45;
      break;
     case 13:
      
      
      if (HEAP[$value_addr] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $51 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($51, __str47);
      HEAP[$0] = -1;
      __label__ = 45;
      break;
     case 15:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$value_addr] + 4] + 84] & 134217728) == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $59 = HEAP[$value_addr];
      var $60 = _PyString_Size($59);
      
      if ($60 != 1) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $62 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($62, __str48);
      HEAP[$0] = -1;
      __label__ = 45;
      break;
     case 18:
      var $63 = HEAP[$self_addr];
      var $64 = _is_writeable($63);
      
      if ($64 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$0] = -1;
      __label__ = 45;
      break;
     case 20:
      var $66 = HEAP[$value_addr];
      var $67 = _PyString_AsString($66);
      HEAP[$buf] = $67;
      
      
      
      
      
      var $73 = HEAP[HEAP[$buf]];
      
      var $75 = HEAP[HEAP[$self_addr] + 8] + HEAP[$i];
      HEAP[$75] = $73;
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 21:
      
      
      
      
      if (HEAP[HEAP[$item_addr] + 4] == _PySlice_Type) {
        __label__ = 22;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 22:
      
      
      var $82 = HEAP[HEAP[$self_addr] + 12];
      
      var $84 = HEAP[$item_addr];
      var $85 = _PySlice_GetIndicesEx($84, $82, $start, $stop, $step, $slicelen);
      
      if ($85 < 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      HEAP[$0] = -1;
      __label__ = 45;
      break;
     case 24:
      
      
      if (HEAP[$value_addr] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $89 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($89, __str44);
      HEAP[$0] = -1;
      __label__ = 45;
      break;
     case 26:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$value_addr] + 4] + 84] & 134217728) == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $97 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($97, __str45);
      HEAP[$0] = -1;
      __label__ = 45;
      break;
     case 28:
      var $98 = HEAP[$value_addr];
      var $99 = _PyString_Size($98);
      
      
      if ($99 != HEAP[$slicelen]) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $102 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($102, __str46);
      HEAP[$0] = -1;
      __label__ = 45;
      break;
     case 30:
      var $103 = HEAP[$self_addr];
      var $104 = _is_writeable($103);
      
      if ($104 == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      HEAP[$0] = -1;
      __label__ = 45;
      break;
     case 32:
      
      
      if (HEAP[$slicelen] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 34:
      
      
      if (HEAP[$step] == 1) {
        __label__ = 35;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 35:
      var $110 = HEAP[$value_addr];
      var $111 = _PyString_AsString($110);
      HEAP[$buf35] = $111;
      
      
      if (HEAP[$buf35] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      HEAP[$0] = -1;
      __label__ = 45;
      break;
     case 37:
      var $114 = HEAP[$slicelen];
      
      
      
      
      var $119 = HEAP[HEAP[$self_addr] + 8] + HEAP[$start];
      var $120 = HEAP[$buf35];
      _llvm_memcpy_p0i8_p0i8_i32($119, $120, $114, 1, 0);
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 38:
      var $121 = HEAP[$value_addr];
      var $122 = _PyString_AsString($121);
      HEAP[$buf40] = $122;
      
      
      if (HEAP[$buf40] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      HEAP[$0] = -1;
      __label__ = 45;
      break;
     case 40:
      var $125 = HEAP[$start];
      HEAP[$cur] = $125;
      HEAP[$i39] = 0;
      __label__ = 42;
      break;
     case 41:
      
      
      
      
      
      
      var $132 = HEAP[HEAP[$buf40] + HEAP[$i39]];
      
      var $134 = HEAP[HEAP[$self_addr] + 8] + HEAP[$cur];
      HEAP[$134] = $132;
      
      
      var $137 = HEAP[$cur] + HEAP[$step];
      HEAP[$cur] = $137;
      
      var $139 = HEAP[$i39] + 1;
      HEAP[$i39] = $139;
      __label__ = 42;
      break;
     case 42:
      
      
      
      if (HEAP[$i39] < HEAP[$slicelen]) {
        __label__ = 41;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 44:
      var $143 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($143, __str49);
      HEAP[$0] = -1;
      __label__ = 45;
      break;
     case 45:
      var $144 = HEAP[$0];
      HEAP[$retval] = $144;
      __label__ = 46;
      break;
     case 46:
      var $retval48 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval48;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __GetMapSize($o, $param) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $o_addr = __stackBase__;
      var $param_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      
      HEAP[$o_addr] = $o;
      HEAP[$param_addr] = $param;
      
      
      if (HEAP[$o_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 2:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$o_addr] + 4] + 48] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$o_addr] + 4] + 84] & 131072) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[HEAP[$o_addr] + 4] + 48] + 152] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 5:
      var $24 = HEAP[_PyExc_OverflowError];
      var $25 = HEAP[$o_addr];
      var $26 = _PyNumber_AsSsize_t($25, $24);
      HEAP[$i] = $26;
      
      var $28 = HEAP[$i] == -1;
      if ($28) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      var $29 = _PyErr_Occurred();
      
      if ($29 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = -1;
      __label__ = 12;
      break;
     case 8:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $33 = HEAP[_PyExc_OverflowError];
      var $34 = HEAP[$param_addr];
      var $35 = _PyErr_Format($33, __str51, allocate([ $34, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 12;
      break;
     case 10:
      var $36 = HEAP[$i];
      HEAP[$0] = $36;
      __label__ = 12;
      break;
     case 11:
      var $37 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($37, __str52);
      HEAP[$0] = -1;
      __label__ = 12;
      break;
     case 12:
      var $38 = HEAP[$0];
      HEAP[$retval] = $38;
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
  function _new_mmap_object($type, $args, $kwdict) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 164;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 164);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwdict_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $st = __stackBase__ + 20;
      var $m_obj = __stackBase__ + 116;
      var $map_size_obj = __stackBase__ + 120;
      var $map_size = __stackBase__ + 124;
      var $offset = __stackBase__ + 128;
      var $fd = __stackBase__ + 136;
      var $flags = __stackBase__ + 140;
      var $prot = __stackBase__ + 144;
      var $devzero = __stackBase__ + 148;
      var $access = __stackBase__ + 152;
      var $calc_size = __stackBase__ + 156;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwdict_addr] = $kwdict;
      HEAP[$map_size_obj] = 0;
      HEAP[$offset] = 0;
      HEAP[$flags] = 1;
      HEAP[$prot] = 3;
      HEAP[$devzero] = -1;
      HEAP[$access] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwdict_addr];
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str53, _keywords_9396, allocate([ $fd, 0, 0, 0, $map_size_obj, 0, 0, 0, $flags, 0, 0, 0, $prot, 0, 0, 0, $access, 0, 0, 0, $offset, 0, 0, 0 ], [ "i32*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i64*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 48;
      break;
     case 2:
      var $5 = HEAP[$map_size_obj];
      var $6 = __GetMapSize($5, __str33);
      HEAP[$map_size] = $6;
      
      
      if (HEAP[$map_size] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 48;
      break;
     case 4:
      
      
      if (HEAP[$offset] < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $11 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($11, __str60);
      HEAP[$0] = 0;
      __label__ = 48;
      break;
     case 6:
      
      
      if (HEAP[$access] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      if (HEAP[$flags] != 1) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      if (HEAP[$prot] != 3) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $18 = HEAP[_PyExc_ValueError];
      var $19 = _PyErr_Format($18, __str61, allocate(1, "i32", ALLOC_STACK));
      HEAP[$0] = $19;
      __label__ = 48;
      break;
     case 10:
      var $20 = HEAP[$access];
      if ($20 == 0) {
        __label__ = 14;
        break;
      } else if ($20 == 1) {
        __label__ = 11;
        break;
      } else if ($20 == 2) {
        __label__ = 12;
        break;
      } else if ($20 == 3) {
        __label__ = 13;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 11:
      HEAP[$flags] = 1;
      HEAP[$prot] = 1;
      __label__ = 22;
      break;
     case 12:
      HEAP[$flags] = 1;
      HEAP[$prot] = 3;
      __label__ = 22;
      break;
     case 13:
      HEAP[$flags] = 2;
      HEAP[$prot] = 3;
      __label__ = 22;
      break;
     case 14:
      
      
      
      
      
      
      
      if (((HEAP[$prot] & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      if ((HEAP[$prot] & 2) == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      __label__ = 20;
      break;
     case 17:
      
      
      
      if ((HEAP[$prot] & 2) != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      HEAP[$access] = 2;
      __label__ = 20;
      break;
     case 19:
      HEAP[$access] = 1;
      __label__ = 20;
      break;
     case 20:
      __label__ = 22;
      break;
     case 21:
      var $30 = HEAP[_PyExc_ValueError];
      var $31 = _PyErr_Format($30, __str62, allocate(1, "i32", ALLOC_STACK));
      HEAP[$0] = $31;
      __label__ = 48;
      break;
     case 22:
      
      var $33 = HEAP[$fd] != -1;
      if ($33) {
        __label__ = 23;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 23:
      var $34 = HEAP[$fd];
      var $35 = ___01fstat64_($34, $st);
      
      if ($35 == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 24:
      
      
      
      
      if ((HEAP[$st + 16] & 61440) == 32768) {
        __label__ = 25;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 25:
      
      
      if (HEAP[$map_size] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 26:
      
      
      
      
      if (HEAP[$st + 44] <= HEAP[$offset]) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $47 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($47, __str63);
      HEAP[$0] = 0;
      __label__ = 48;
      break;
     case 28:
      
      
      
      var $51 = HEAP[$st + 44] - HEAP[$offset];
      HEAP[$calc_size] = $51;
      
      var $53 = HEAP[$calc_size] & 4294967295;
      HEAP[$map_size] = $53;
      
      
      
      
      if (HEAP[$map_size] != HEAP[$calc_size]) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $58 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($58, __str64);
      HEAP[$0] = 0;
      __label__ = 48;
      break;
     case 30:
      __label__ = 33;
      break;
     case 31:
      
      
      
      
      
      
      
      if (HEAP[$map_size] + HEAP[$offset] > HEAP[$st + 44]) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      var $66 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($66, __str65);
      HEAP[$0] = 0;
      __label__ = 48;
      break;
     case 33:
      
      
      var $69 = HEAP[HEAP[$type_addr] + 152];
      var $70 = HEAP[$type_addr];
      var $71 = FUNCTION_TABLE[$69]($70, 0);
      var $72 = $71;
      HEAP[$m_obj] = $72;
      
      
      if (HEAP[$m_obj] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      HEAP[$0] = 0;
      __label__ = 48;
      break;
     case 35:
      
      var $76 = HEAP[$m_obj] + 8;
      HEAP[$76] = 0;
      var $77 = HEAP[$map_size];
      
      var $79 = HEAP[$m_obj] + 12;
      HEAP[$79] = $77;
      
      var $81 = HEAP[$m_obj] + 16;
      HEAP[$81] = 0;
      var $82 = HEAP[$offset];
      
      var $84 = HEAP[$m_obj] + 20;
      HEAP[$84] = $82;
      
      var $86 = HEAP[$fd] == -1;
      if ($86) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      var $88 = HEAP[$m_obj] + 28;
      HEAP[$88] = -1;
      
      var $90 = HEAP[$flags] | 32;
      HEAP[$flags] = $90;
      __label__ = 41;
      break;
     case 37:
      var $91 = HEAP[$fd];
      var $92 = _dup($91);
      
      var $94 = HEAP[$m_obj] + 28;
      HEAP[$94] = $92;
      
      
      
      var $98 = HEAP[HEAP[$m_obj] + 28] == -1;
      if ($98) {
        __label__ = 38;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 38:
      
      var $100 = HEAP[$m_obj];
      
      
      var $103 = HEAP[$100] - 1;
      var $104 = $100;
      HEAP[$104] = $103;
      
      
      
      if (HEAP[$100] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      
      var $113 = HEAP[HEAP[HEAP[$m_obj] + 4] + 24];
      
      var $115 = HEAP[$m_obj];
      FUNCTION_TABLE[$113]($115);
      __label__ = 40;
      break;
     case 40:
      var $116 = HEAP[_mmap_module_error];
      var $117 = _PyErr_SetFromErrno($116);
      HEAP[$0] = 0;
      __label__ = 48;
      break;
     case 41:
      var $118 = HEAP[$offset];
      var $119 = HEAP[$fd];
      var $120 = HEAP[$flags];
      var $121 = HEAP[$prot];
      var $122 = HEAP[$map_size];
      var $123 = ___01mmap64_(0, $122, $121, $120, $119, $118);
      
      var $125 = HEAP[$m_obj] + 8;
      HEAP[$125] = $123;
      
      var $127 = HEAP[$devzero] != -1;
      if ($127) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      var $128 = HEAP[$devzero];
      var $129 = _close($128);
      __label__ = 43;
      break;
     case 43:
      
      
      
      var $133 = HEAP[HEAP[$m_obj] + 8] == -1;
      if ($133) {
        __label__ = 44;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 44:
      
      var $135 = HEAP[$m_obj] + 8;
      HEAP[$135] = 0;
      
      var $137 = HEAP[$m_obj];
      
      
      var $140 = HEAP[$137] - 1;
      var $141 = $137;
      HEAP[$141] = $140;
      
      
      
      if (HEAP[$137] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      
      var $150 = HEAP[HEAP[HEAP[$m_obj] + 4] + 24];
      
      var $152 = HEAP[$m_obj];
      FUNCTION_TABLE[$150]($152);
      __label__ = 46;
      break;
     case 46:
      var $153 = HEAP[_mmap_module_error];
      var $154 = _PyErr_SetFromErrno($153);
      HEAP[$0] = 0;
      __label__ = 48;
      break;
     case 47:
      var $155 = HEAP[$access];
      
      var $157 = HEAP[$m_obj] + 32;
      HEAP[$157] = $155;
      
      var $159 = HEAP[$m_obj];
      HEAP[$0] = $159;
      __label__ = 48;
      break;
     case 48:
      var $160 = HEAP[$0];
      HEAP[$retval] = $160;
      __label__ = 49;
      break;
     case 49:
      var $retval51 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval51;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _setint($d, $name, $value) {
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
      var $o = __stackBase__ + 12;
      
      HEAP[$d_addr] = $d;
      HEAP[$name_addr] = $name;
      HEAP[$value_addr] = $value;
      var $0 = HEAP[$value_addr];
      var $1 = _PyInt_FromLong($0);
      HEAP[$o] = $1;
      
      
      if (HEAP[$o] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $4 = HEAP[$d_addr];
      var $5 = HEAP[$name_addr];
      var $6 = HEAP[$o];
      var $7 = _PyDict_SetItemString($4, $5, $6);
      
      if ($7 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      var $12 = HEAP[HEAP[$o]] - 1;
      
      var $14 = HEAP[$o];
      HEAP[$14] = $12;
      
      
      
      
      if (HEAP[HEAP[$o]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$o] + 4] + 24];
      var $24 = HEAP[$o];
      FUNCTION_TABLE[$23]($24);
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
  function _initmmap() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dict = __stackBase__;
      var $module = __stackBase__ + 4;
      
      var $0 = _PyType_Ready(_mmap_object_type);
      
      if ($0 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $2 = _Py_InitModule4(__str66, 0, 0, 0, 1013);
      HEAP[$module] = $2;
      
      
      if (HEAP[$module] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $5 = HEAP[$module];
      var $6 = _PyModule_GetDict($5);
      HEAP[$dict] = $6;
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $9 = HEAP[_PyExc_EnvironmentError];
      var $10 = _PyErr_NewException(__str67, $9, 0);
      HEAP[_mmap_module_error] = $10;
      
      
      if (HEAP[_mmap_module_error] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $13 = HEAP[_mmap_module_error];
      var $14 = HEAP[$dict];
      var $15 = _PyDict_SetItemString($14, __str68, $13);
      var $16 = HEAP[$dict];
      var $17 = _PyDict_SetItemString($16, __str66, _mmap_object_type);
      var $18 = HEAP[$dict];
      _setint($18, __str69, 4);
      var $19 = HEAP[$dict];
      _setint($19, __str70, 1);
      var $20 = HEAP[$dict];
      _setint($20, __str71, 2);
      var $21 = HEAP[$dict];
      _setint($21, __str72, 1);
      var $22 = HEAP[$dict];
      _setint($22, __str73, 2);
      var $23 = HEAP[$dict];
      _setint($23, __str74, 2048);
      var $24 = HEAP[$dict];
      _setint($24, __str75, 4096);
      var $25 = HEAP[$dict];
      _setint($25, __str76, 32);
      var $26 = HEAP[$dict];
      _setint($26, __str77, 32);
      var $27 = _my_getpagesize();
      var $28 = HEAP[$dict];
      _setint($28, __str78, $27);
      var $29 = _my_getpagesize();
      var $30 = HEAP[$dict];
      _setint($30, __str79, $29);
      var $31 = HEAP[$dict];
      _setint($31, __str80, 1);
      var $32 = HEAP[$dict];
      _setint($32, __str81, 2);
      var $33 = HEAP[$dict];
      _setint($33, __str82, 3);
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
  Module["_initmmap"] = _initmmap;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _mmap_close_method, 0, _mmap_find_method, 0, _mmap_rfind_method, 0, _mmap_flush_method, 0, _mmap_move_method, 0, _mmap_read_method, 0, _mmap_read_byte_method, 0, _mmap_read_line_method, 0, _mmap_resize_method, 0, _mmap_seek_method, 0, _mmap_size_method, 0, _mmap_tell_method, 0, _mmap_write_method, 0, _mmap_write_byte_method, 0, _mmap_length, 0, _mmap_concat, 0, _mmap_repeat, 0, _mmap_item, 0, _mmap_slice, 0, _mmap_ass_item, 0, _mmap_ass_slice, 0, _mmap_subscript, 0, _mmap_ass_subscript, 0, _mmap_buffer_getreadbuf, 0, _mmap_buffer_getwritebuf, 0, _mmap_buffer_getsegcount, 0, _mmap_buffer_getcharbuffer, 0, _mmap_object_dealloc, 0, _PyObject_GenericGetAttr, 0, _PyType_GenericAlloc, 0, _new_mmap_object, 0, _PyObject_Free, 0 ]);
  function run(args) {
    __str = allocate([ 109, 109, 97, 112, 32, 99, 108, 111, 115, 101, 100, 32, 111, 114, 32, 105, 110, 118, 97, 108, 105, 100, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 99, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 114, 101, 97, 100, 32, 98, 121, 116, 101, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 110, 58, 114, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 115, 101, 108, 102, 45, 62, 115, 105, 122, 101, 32, 62, 61, 32, 115, 101, 108, 102, 45, 62, 112, 111, 115, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 109, 109, 97, 112, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8441 = allocate([ 109, 109, 97, 112, 95, 114, 101, 97, 100, 95, 109, 101, 116, 104, 111, 100, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 115, 35, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 115, 35, 124, 110, 110, 58, 114, 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 115, 35, 124, 110, 110, 58, 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 109, 109, 97, 112, 32, 99, 97, 110, 39, 116, 32, 109, 111, 100, 105, 102, 121, 32, 97, 32, 114, 101, 97, 100, 111, 110, 108, 121, 32, 109, 101, 109, 111, 114, 121, 32, 109, 97, 112, 46, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 109, 109, 97, 112, 32, 99, 97, 110, 39, 116, 32, 114, 101, 115, 105, 122, 101, 32, 97, 32, 114, 101, 97, 100, 111, 110, 108, 121, 32, 111, 114, 32, 99, 111, 112, 121, 45, 111, 110, 45, 119, 114, 105, 116, 101, 32, 109, 101, 109, 111, 114, 121, 32, 109, 97, 112, 46, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 115, 35, 58, 119, 114, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 100, 97, 116, 97, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 99, 58, 119, 114, 105, 116, 101, 95, 98, 121, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 119, 114, 105, 116, 101, 32, 98, 121, 116, 101, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    _mmap_module_error = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str15 = allocate([ 110, 58, 114, 101, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 124, 110, 110, 58, 102, 108, 117, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 102, 108, 117, 115, 104, 32, 118, 97, 108, 117, 101, 115, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 110, 124, 105, 58, 115, 101, 101, 107, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 117, 110, 107, 110, 111, 119, 110, 32, 115, 101, 101, 107, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 115, 101, 101, 107, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 107, 107, 107, 58, 109, 111, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 115, 111, 117, 114, 99, 101, 44, 32, 100, 101, 115, 116, 105, 110, 97, 116, 105, 111, 110, 44, 32, 111, 114, 32, 99, 111, 117, 110, 116, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 99, 108, 111, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 114, 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 102, 108, 117, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 109, 111, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 114, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 114, 101, 97, 100, 95, 98, 121, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 114, 101, 97, 100, 108, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 114, 101, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 115, 101, 101, 107, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 116, 101, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 119, 114, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 119, 114, 105, 116, 101, 95, 98, 121, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _mmap_object_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str37 = allocate([ 65, 99, 99, 101, 115, 115, 105, 110, 103, 32, 110, 111, 110, 45, 101, 120, 105, 115, 116, 101, 110, 116, 32, 109, 109, 97, 112, 32, 115, 101, 103, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 97, 99, 99, 101, 115, 115, 105, 110, 103, 32, 110, 111, 110, 45, 101, 120, 105, 115, 116, 101, 110, 116, 32, 98, 117, 102, 102, 101, 114, 32, 115, 101, 103, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 109, 109, 97, 112, 32, 105, 110, 100, 101, 120, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate(1, "i8", ALLOC_NORMAL);
    __str41 = allocate([ 109, 109, 97, 112, 32, 105, 110, 100, 105, 99, 101, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 116, 101, 103, 101, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 109, 109, 97, 112, 115, 32, 100, 111, 110, 39, 116, 32, 115, 117, 112, 112, 111, 114, 116, 32, 99, 111, 110, 99, 97, 116, 101, 110, 97, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 109, 109, 97, 112, 115, 32, 100, 111, 110, 39, 116, 32, 115, 117, 112, 112, 111, 114, 116, 32, 114, 101, 112, 101, 97, 116, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 109, 109, 97, 112, 32, 111, 98, 106, 101, 99, 116, 32, 100, 111, 101, 115, 110, 39, 116, 32, 115, 117, 112, 112, 111, 114, 116, 32, 115, 108, 105, 99, 101, 32, 100, 101, 108, 101, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 109, 109, 97, 112, 32, 115, 108, 105, 99, 101, 32, 97, 115, 115, 105, 103, 110, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 109, 109, 97, 112, 32, 115, 108, 105, 99, 101, 32, 97, 115, 115, 105, 103, 110, 109, 101, 110, 116, 32, 105, 115, 32, 119, 114, 111, 110, 103, 32, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 109, 109, 97, 112, 32, 111, 98, 106, 101, 99, 116, 32, 100, 111, 101, 115, 110, 39, 116, 32, 115, 117, 112, 112, 111, 114, 116, 32, 105, 116, 101, 109, 32, 100, 101, 108, 101, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 109, 109, 97, 112, 32, 97, 115, 115, 105, 103, 110, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 105, 110, 103, 108, 101, 45, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 109, 109, 97, 112, 32, 105, 110, 100, 105, 99, 101, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _mmap_as_sequence = allocate(40, [ "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32, i32)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, i32, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _mmap_as_mapping = allocate(12, [ "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0 ], ALLOC_NORMAL);
    _mmap_as_buffer = allocate(24, [ "i32 (%struct.PyObject*, i32, i8**)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, i8**)*", 0, 0, 0, "i32 (%struct.PyObject*, i32*)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, i8**)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _mmap_doc = allocate([ 87, 105, 110, 100, 111, 119, 115, 58, 32, 109, 109, 97, 112, 40, 102, 105, 108, 101, 110, 111, 44, 32, 108, 101, 110, 103, 116, 104, 91, 44, 32, 116, 97, 103, 110, 97, 109, 101, 91, 44, 32, 97, 99, 99, 101, 115, 115, 91, 44, 32, 111, 102, 102, 115, 101, 116, 93, 93, 93, 41, 10, 10, 77, 97, 112, 115, 32, 108, 101, 110, 103, 116, 104, 32, 98, 121, 116, 101, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 104, 97, 110, 100, 108, 101, 32, 102, 105, 108, 101, 110, 111, 44, 10, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 115, 32, 97, 32, 109, 109, 97, 112, 32, 111, 98, 106, 101, 99, 116, 46, 32, 32, 73, 102, 32, 108, 101, 110, 103, 116, 104, 32, 105, 115, 32, 108, 97, 114, 103, 101, 114, 32, 116, 104, 97, 110, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 115, 105, 122, 101, 10, 111, 102, 32, 116, 104, 101, 32, 102, 105, 108, 101, 44, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 105, 115, 32, 101, 120, 116, 101, 110, 100, 101, 100, 32, 116, 111, 32, 99, 111, 110, 116, 97, 105, 110, 32, 108, 101, 110, 103, 116, 104, 32, 98, 121, 116, 101, 115, 46, 32, 32, 73, 102, 32, 108, 101, 110, 103, 116, 104, 10, 105, 115, 32, 48, 44, 32, 116, 104, 101, 32, 109, 97, 120, 105, 109, 117, 109, 32, 108, 101, 110, 103, 116, 104, 32, 111, 102, 32, 116, 104, 101, 32, 109, 97, 112, 32, 105, 115, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 115, 105, 122, 101, 32, 111, 102, 32, 116, 104, 101, 32, 102, 105, 108, 101, 44, 10, 101, 120, 99, 101, 112, 116, 32, 116, 104, 97, 116, 32, 105, 102, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 105, 115, 32, 101, 109, 112, 116, 121, 32, 87, 105, 110, 100, 111, 119, 115, 32, 114, 97, 105, 115, 101, 115, 32, 97, 110, 32, 101, 120, 99, 101, 112, 116, 105, 111, 110, 32, 40, 121, 111, 117, 32, 99, 97, 110, 110, 111, 116, 10, 99, 114, 101, 97, 116, 101, 32, 97, 110, 32, 101, 109, 112, 116, 121, 32, 109, 97, 112, 112, 105, 110, 103, 32, 111, 110, 32, 87, 105, 110, 100, 111, 119, 115, 41, 46, 10, 10, 85, 110, 105, 120, 58, 32, 109, 109, 97, 112, 40, 102, 105, 108, 101, 110, 111, 44, 32, 108, 101, 110, 103, 116, 104, 91, 44, 32, 102, 108, 97, 103, 115, 91, 44, 32, 112, 114, 111, 116, 91, 44, 32, 97, 99, 99, 101, 115, 115, 91, 44, 32, 111, 102, 102, 115, 101, 116, 93, 93, 93, 93, 41, 10, 10, 77, 97, 112, 115, 32, 108, 101, 110, 103, 116, 104, 32, 98, 121, 116, 101, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 32, 102, 105, 108, 101, 110, 111, 44, 10, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 115, 32, 97, 32, 109, 109, 97, 112, 32, 111, 98, 106, 101, 99, 116, 46, 32, 32, 73, 102, 32, 108, 101, 110, 103, 116, 104, 32, 105, 115, 32, 48, 44, 32, 116, 104, 101, 32, 109, 97, 120, 105, 109, 117, 109, 32, 108, 101, 110, 103, 116, 104, 32, 111, 102, 32, 116, 104, 101, 32, 109, 97, 112, 10, 119, 105, 108, 108, 32, 98, 101, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 115, 105, 122, 101, 32, 111, 102, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 119, 104, 101, 110, 32, 109, 109, 97, 112, 32, 105, 115, 32, 99, 97, 108, 108, 101, 100, 46, 10, 102, 108, 97, 103, 115, 32, 115, 112, 101, 99, 105, 102, 105, 101, 115, 32, 116, 104, 101, 32, 110, 97, 116, 117, 114, 101, 32, 111, 102, 32, 116, 104, 101, 32, 109, 97, 112, 112, 105, 110, 103, 46, 32, 77, 65, 80, 95, 80, 82, 73, 86, 65, 84, 69, 32, 99, 114, 101, 97, 116, 101, 115, 32, 97, 10, 112, 114, 105, 118, 97, 116, 101, 32, 99, 111, 112, 121, 45, 111, 110, 45, 119, 114, 105, 116, 101, 32, 109, 97, 112, 112, 105, 110, 103, 44, 32, 115, 111, 32, 99, 104, 97, 110, 103, 101, 115, 32, 116, 111, 32, 116, 104, 101, 32, 99, 111, 110, 116, 101, 110, 116, 115, 32, 111, 102, 32, 116, 104, 101, 32, 109, 109, 97, 112, 10, 111, 98, 106, 101, 99, 116, 32, 119, 105, 108, 108, 32, 98, 101, 32, 112, 114, 105, 118, 97, 116, 101, 32, 116, 111, 32, 116, 104, 105, 115, 32, 112, 114, 111, 99, 101, 115, 115, 44, 32, 97, 110, 100, 32, 77, 65, 80, 95, 83, 72, 65, 82, 69, 68, 32, 99, 114, 101, 97, 116, 101, 115, 32, 97, 32, 109, 97, 112, 112, 105, 110, 103, 10, 116, 104, 97, 116, 39, 115, 32, 115, 104, 97, 114, 101, 100, 32, 119, 105, 116, 104, 32, 97, 108, 108, 32, 111, 116, 104, 101, 114, 32, 112, 114, 111, 99, 101, 115, 115, 101, 115, 32, 109, 97, 112, 112, 105, 110, 103, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 97, 114, 101, 97, 115, 32, 111, 102, 32, 116, 104, 101, 32, 102, 105, 108, 101, 46, 10, 84, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 118, 97, 108, 117, 101, 32, 105, 115, 32, 77, 65, 80, 95, 83, 72, 65, 82, 69, 68, 46, 10, 10, 84, 111, 32, 109, 97, 112, 32, 97, 110, 111, 110, 121, 109, 111, 117, 115, 32, 109, 101, 109, 111, 114, 121, 44, 32, 112, 97, 115, 115, 32, 45, 49, 32, 97, 115, 32, 116, 104, 101, 32, 102, 105, 108, 101, 110, 111, 32, 40, 98, 111, 116, 104, 32, 118, 101, 114, 115, 105, 111, 110, 115, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 109, 109, 97, 112, 46, 109, 109, 97, 112, 0 ], "i8", ALLOC_NORMAL);
    _mmap_object_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str51 = allocate([ 109, 101, 109, 111, 114, 121, 32, 109, 97, 112, 112, 101, 100, 32, 37, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 112, 111, 115, 105, 116, 105, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 109, 97, 112, 32, 115, 105, 122, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 110, 32, 105, 110, 116, 101, 103, 114, 97, 108, 32, 118, 97, 108, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 105, 79, 124, 105, 105, 105, 76, 0 ], "i8", ALLOC_NORMAL);
    _keywords_9396 = allocate(28, "i8*", ALLOC_NORMAL);
    __str54 = allocate([ 102, 105, 108, 101, 110, 111, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 108, 101, 110, 103, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 102, 108, 97, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 112, 114, 111, 116, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 97, 99, 99, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 111, 102, 102, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 109, 101, 109, 111, 114, 121, 32, 109, 97, 112, 112, 101, 100, 32, 111, 102, 102, 115, 101, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 112, 111, 115, 105, 116, 105, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 109, 109, 97, 112, 32, 99, 97, 110, 39, 116, 32, 115, 112, 101, 99, 105, 102, 121, 32, 98, 111, 116, 104, 32, 97, 99, 99, 101, 115, 115, 32, 97, 110, 100, 32, 102, 108, 97, 103, 115, 44, 32, 112, 114, 111, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 109, 109, 97, 112, 32, 105, 110, 118, 97, 108, 105, 100, 32, 97, 99, 99, 101, 115, 115, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 109, 109, 97, 112, 32, 111, 102, 102, 115, 101, 116, 32, 105, 115, 32, 103, 114, 101, 97, 116, 101, 114, 32, 116, 104, 97, 110, 32, 102, 105, 108, 101, 32, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 109, 109, 97, 112, 32, 108, 101, 110, 103, 116, 104, 32, 105, 115, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 109, 109, 97, 112, 32, 108, 101, 110, 103, 116, 104, 32, 105, 115, 32, 103, 114, 101, 97, 116, 101, 114, 32, 116, 104, 97, 110, 32, 102, 105, 108, 101, 32, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 109, 109, 97, 112, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 109, 109, 97, 112, 46, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 80, 82, 79, 84, 95, 69, 88, 69, 67, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 80, 82, 79, 84, 95, 82, 69, 65, 68, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 80, 82, 79, 84, 95, 87, 82, 73, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 77, 65, 80, 95, 83, 72, 65, 82, 69, 68, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 77, 65, 80, 95, 80, 82, 73, 86, 65, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 77, 65, 80, 95, 68, 69, 78, 89, 87, 82, 73, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 77, 65, 80, 95, 69, 88, 69, 67, 85, 84, 65, 66, 76, 69, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 77, 65, 80, 95, 65, 78, 79, 78, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 77, 65, 80, 95, 65, 78, 79, 78, 89, 77, 79, 85, 83, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 80, 65, 71, 69, 83, 73, 90, 69, 0 ], "i8", ALLOC_NORMAL);
    __str79 = allocate([ 65, 76, 76, 79, 67, 65, 84, 73, 79, 78, 71, 82, 65, 78, 85, 76, 65, 82, 73, 84, 89, 0 ], "i8", ALLOC_NORMAL);
    __str80 = allocate([ 65, 67, 67, 69, 83, 83, 95, 82, 69, 65, 68, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 65, 67, 67, 69, 83, 83, 95, 87, 82, 73, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str82 = allocate([ 65, 67, 67, 69, 83, 83, 95, 67, 79, 80, 89, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_mmap_object_methods] = __str23;
    HEAP[_mmap_object_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_mmap_object_methods + 16] = __str24;
    HEAP[_mmap_object_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_mmap_object_methods + 32] = __str25;
    HEAP[_mmap_object_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_mmap_object_methods + 48] = __str26;
    HEAP[_mmap_object_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_mmap_object_methods + 64] = __str27;
    HEAP[_mmap_object_methods + 68] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_mmap_object_methods + 80] = __str28;
    HEAP[_mmap_object_methods + 84] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_mmap_object_methods + 96] = __str29;
    HEAP[_mmap_object_methods + 100] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_mmap_object_methods + 112] = __str30;
    HEAP[_mmap_object_methods + 116] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_mmap_object_methods + 128] = __str31;
    HEAP[_mmap_object_methods + 132] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_mmap_object_methods + 144] = __str32;
    HEAP[_mmap_object_methods + 148] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_mmap_object_methods + 160] = __str33;
    HEAP[_mmap_object_methods + 164] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_mmap_object_methods + 176] = __str34;
    HEAP[_mmap_object_methods + 180] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_mmap_object_methods + 192] = __str35;
    HEAP[_mmap_object_methods + 196] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_mmap_object_methods + 208] = __str36;
    HEAP[_mmap_object_methods + 212] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_mmap_as_sequence] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_mmap_as_sequence + 4] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_mmap_as_sequence + 8] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_mmap_as_sequence + 12] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_mmap_as_sequence + 16] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_mmap_as_sequence + 20] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_mmap_as_sequence + 24] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_mmap_as_mapping] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_mmap_as_mapping + 4] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_mmap_as_mapping + 8] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_mmap_as_buffer] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_mmap_as_buffer + 4] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_mmap_as_buffer + 8] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_mmap_as_buffer + 12] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_mmap_object_type + 12] = __str50;
    HEAP[_mmap_object_type + 24] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_mmap_object_type + 52] = _mmap_as_sequence;
    HEAP[_mmap_object_type + 56] = _mmap_as_mapping;
    HEAP[_mmap_object_type + 72] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_mmap_object_type + 80] = _mmap_as_buffer;
    HEAP[_mmap_object_type + 88] = _mmap_doc;
    HEAP[_mmap_object_type + 116] = _mmap_object_methods;
    HEAP[_mmap_object_type + 152] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_mmap_object_type + 156] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_mmap_object_type + 160] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_keywords_9396] = __str54;
    HEAP[_keywords_9396 + 4] = __str55;
    HEAP[_keywords_9396 + 8] = __str56;
    HEAP[_keywords_9396 + 12] = __str57;
    HEAP[_keywords_9396 + 16] = __str58;
    HEAP[_keywords_9396 + 20] = __str59;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
