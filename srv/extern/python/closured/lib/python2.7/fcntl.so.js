"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 80;
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
  var $struct_flock___SIZE = 24;
  var $struct_flock___FLATTENER = [ 0, 2, 4, 12, 20 ];
  var __str;
  var __str1;
  var __str2;
  var _fcntl_doc;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var _ioctl_doc;
  var __str7;
  var _flock_doc;
  var __str8;
  var __str9;
  var _lockf_doc;
  var __str10;
  var __str11;
  var __str12;
  var __str13;
  var _fcntl_methods;
  var _module_doc;
  var __str14;
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
  var __str50;
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
  var __str74;
  var __str75;
  var __str76;
  var __str77;
  var __str78;
  var __str79;
  var __str80;
  var __str81;
  var __str82;
  function _conv_descriptor($object, $target) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $object_addr = __stackBase__;
      var $target_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $fd = __stackBase__ + 16;
      
      HEAP[$object_addr] = $object;
      HEAP[$target_addr] = $target;
      var $1 = HEAP[$object_addr];
      var $2 = _PyObject_AsFileDescriptor($1);
      HEAP[$fd] = $2;
      
      
      if (HEAP[$fd] < 0) {
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
      var $5 = HEAP[$target_addr];
      var $6 = HEAP[$fd];
      HEAP[$5] = $6;
      HEAP[$0] = 1;
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
  function _fcntl_fcntl($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1064;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 1064);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $fd = __stackBase__ + 16;
      var $code = __stackBase__ + 20;
      var $arg = __stackBase__ + 24;
      var $ret = __stackBase__ + 28;
      var $str = __stackBase__ + 32;
      var $len = __stackBase__ + 36;
      var $buf = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str, allocate([ FUNCTION_TABLE_OFFSET + 2, 0, 0, 0, $fd, 0, 0, 0, $code, 0, 0, 0, $str, 0, 0, 0, $len, 0, 0, 0 ], [ "i32 (%struct.PyObject*, i32*)*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      if (HEAP[$len] > 1024) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $6 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($6, __str1);
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 3:
      var $7 = HEAP[$len];
      var $8 = HEAP[$str];
      var $buf3 = $buf;
      _llvm_memcpy_p0i8_p0i8_i32($buf3, $8, $7, 1, 0);
      var $9 = HEAP[$code];
      var $10 = HEAP[$fd];
      var $buf4 = $buf;
      var $11 = _fcntl($10, $9, allocate([ $buf4, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ret] = $11;
      
      
      if (HEAP[$ret] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $14 = HEAP[_PyExc_IOError];
      var $15 = _PyErr_SetFromErrno($14);
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 5:
      var $16 = HEAP[$len];
      var $buf7 = $buf;
      var $17 = _PyString_FromStringAndSize($buf7, $16);
      HEAP[$0] = $17;
      __label__ = 11;
      break;
     case 6:
      _PyErr_Clear();
      HEAP[$arg] = 0;
      var $18 = HEAP[$args_addr];
      var $19 = __PyArg_ParseTuple_SizeT($18, __str2, allocate([ FUNCTION_TABLE_OFFSET + 2, 0, 0, 0, $fd, 0, 0, 0, $code, 0, 0, 0, $arg, 0, 0, 0 ], [ "i32 (%struct.PyObject*, i32*)*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($19 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 8:
      var $21 = HEAP[$arg];
      var $22 = HEAP[$code];
      var $23 = HEAP[$fd];
      var $24 = _fcntl($23, $22, allocate([ $21, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ret] = $24;
      
      
      if (HEAP[$ret] < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $27 = HEAP[_PyExc_IOError];
      var $28 = _PyErr_SetFromErrno($27);
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 10:
      var $29 = HEAP[$ret];
      var $30 = _PyInt_FromLong($29);
      HEAP[$0] = $30;
      __label__ = 11;
      break;
     case 11:
      var $31 = HEAP[$0];
      HEAP[$retval] = $31;
      __label__ = 12;
      break;
     case 12:
      var $retval14 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _fcntl_ioctl($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1073;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 1073);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $fd = __stackBase__ + 16;
      var $code = __stackBase__ + 20;
      var $arg = __stackBase__ + 24;
      var $ret = __stackBase__ + 28;
      var $str = __stackBase__ + 32;
      var $len = __stackBase__ + 36;
      var $mutate_arg = __stackBase__ + 40;
      var $buf = __stackBase__ + 44;
      var $arg1 = __stackBase__ + 1069;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$mutate_arg] = 1;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str3, allocate([ FUNCTION_TABLE_OFFSET + 2, 0, 0, 0, $fd, 0, 0, 0, $code, 0, 0, 0, $str, 0, 0, 0, $len, 0, 0, 0, $mutate_arg, 0, 0, 0 ], [ "i32 (%struct.PyObject*, i32*)*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 1:
      
      
      if (HEAP[$mutate_arg] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      
      
      if (HEAP[$len] <= 1024) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[$len];
      var $9 = HEAP[$str];
      var $buf4 = $buf;
      _llvm_memcpy_p0i8_p0i8_i32($buf4, $9, $8, 1, 0);
      
      var $11 = $buf + HEAP[$len];
      HEAP[$11] = 0;
      
      HEAP[$arg1] = $buf;
      __label__ = 5;
      break;
     case 4:
      var $12 = HEAP[$str];
      HEAP[$arg1] = $12;
      __label__ = 5;
      break;
     case 5:
      __label__ = 9;
      break;
     case 6:
      
      
      if (HEAP[$len] > 1024) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $15 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($15, __str4);
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 8:
      var $16 = HEAP[$len];
      var $17 = HEAP[$str];
      var $buf11 = $buf;
      _llvm_memcpy_p0i8_p0i8_i32($buf11, $17, $16, 1, 0);
      
      var $19 = $buf + HEAP[$len];
      HEAP[$19] = 0;
      
      HEAP[$arg1] = $buf;
      __label__ = 9;
      break;
     case 9:
      
      
      
      if ($buf == HEAP[$arg1]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $22 = HEAP[$code];
      var $23 = HEAP[$fd];
      var $24 = HEAP[$arg1];
      var $25 = _ioctl($23, $22, allocate([ $24, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ret] = $25;
      __label__ = 12;
      break;
     case 11:
      var $26 = HEAP[$code];
      var $27 = HEAP[$fd];
      var $28 = HEAP[$arg1];
      var $29 = _ioctl($27, $26, allocate([ $28, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ret] = $29;
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$mutate_arg] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      if (HEAP[$len] <= 1024) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $34 = HEAP[$len];
      var $35 = HEAP[$str];
      var $buf20 = $buf;
      _llvm_memcpy_p0i8_p0i8_i32($35, $buf20, $34, 1, 0);
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$ret] < 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $38 = HEAP[_PyExc_IOError];
      var $39 = _PyErr_SetFromErrno($38);
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 17:
      
      
      if (HEAP[$mutate_arg] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $42 = HEAP[$ret];
      var $43 = _PyInt_FromLong($42);
      HEAP[$0] = $43;
      __label__ = 31;
      break;
     case 19:
      var $44 = HEAP[$len];
      var $buf26 = $buf;
      var $45 = _PyString_FromStringAndSize($buf26, $44);
      HEAP[$0] = $45;
      __label__ = 31;
      break;
     case 20:
      _PyErr_Clear();
      var $46 = HEAP[$args_addr];
      var $47 = __PyArg_ParseTuple_SizeT($46, __str5, allocate([ FUNCTION_TABLE_OFFSET + 2, 0, 0, 0, $fd, 0, 0, 0, $code, 0, 0, 0, $str, 0, 0, 0, $len, 0, 0, 0 ], [ "i32 (%struct.PyObject*, i32*)*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($47 != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 21:
      
      
      if (HEAP[$len] > 1024) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      var $51 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($51, __str4);
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 23:
      var $52 = HEAP[$len];
      var $53 = HEAP[$str];
      var $buf31 = $buf;
      _llvm_memcpy_p0i8_p0i8_i32($buf31, $53, $52, 1, 0);
      
      var $55 = $buf + HEAP[$len];
      HEAP[$55] = 0;
      var $56 = HEAP[$code];
      var $57 = HEAP[$fd];
      var $buf32 = $buf;
      var $58 = _ioctl($57, $56, allocate([ $buf32, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ret] = $58;
      
      
      if (HEAP[$ret] < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      var $61 = HEAP[_PyExc_IOError];
      var $62 = _PyErr_SetFromErrno($61);
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 25:
      var $63 = HEAP[$len];
      var $buf35 = $buf;
      var $64 = _PyString_FromStringAndSize($buf35, $63);
      HEAP[$0] = $64;
      __label__ = 31;
      break;
     case 26:
      _PyErr_Clear();
      HEAP[$arg] = 0;
      var $65 = HEAP[$args_addr];
      var $66 = __PyArg_ParseTuple_SizeT($65, __str6, allocate([ FUNCTION_TABLE_OFFSET + 2, 0, 0, 0, $fd, 0, 0, 0, $code, 0, 0, 0, $arg, 0, 0, 0 ], [ "i32 (%struct.PyObject*, i32*)*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($66 == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 28:
      var $68 = HEAP[$arg];
      var $69 = HEAP[$code];
      var $70 = HEAP[$fd];
      var $71 = _ioctl($70, $69, allocate([ $68, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ret] = $71;
      
      
      if (HEAP[$ret] < 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $74 = HEAP[_PyExc_IOError];
      var $75 = _PyErr_SetFromErrno($74);
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 30:
      var $76 = HEAP[$ret];
      var $77 = _PyInt_FromLong($76);
      HEAP[$0] = $77;
      __label__ = 31;
      break;
     case 31:
      var $78 = HEAP[$0];
      HEAP[$retval] = $78;
      __label__ = 32;
      break;
     case 32:
      var $retval42 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval42;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _fcntl_flock($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $fd = __stackBase__ + 16;
      var $code = __stackBase__ + 20;
      var $ret = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str7, allocate([ FUNCTION_TABLE_OFFSET + 2, 0, 0, 0, $fd, 0, 0, 0, $code, 0, 0, 0 ], [ "i32 (%struct.PyObject*, i32*)*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$code];
      var $5 = HEAP[$fd];
      var $6 = _flock($5, $4);
      HEAP[$ret] = $6;
      
      
      if (HEAP[$ret] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = HEAP[_PyExc_IOError];
      var $10 = _PyErr_SetFromErrno($9);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      
      var $12 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $12;
      HEAP[$0] = __Py_NoneStruct;
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
  function _fcntl_lockf($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 84;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 84);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_70 = __stackBase__ + 12;
      var $iftmp_65 = __stackBase__ + 16;
      var $iftmp_60 = __stackBase__ + 24;
      var $0 = __stackBase__ + 32;
      var $fd = __stackBase__ + 36;
      var $code = __stackBase__ + 40;
      var $ret = __stackBase__ + 44;
      var $whence = __stackBase__ + 48;
      var $lenobj = __stackBase__ + 52;
      var $startobj = __stackBase__ + 56;
      var $l = __stackBase__ + 60;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$whence] = 0;
      HEAP[$lenobj] = 0;
      HEAP[$startobj] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str8, allocate([ FUNCTION_TABLE_OFFSET + 2, 0, 0, 0, $fd, 0, 0, 0, $code, 0, 0, 0, $lenobj, 0, 0, 0, $startobj, 0, 0, 0, $whence, 0, 0, 0 ], [ "i32 (%struct.PyObject*, i32*)*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 2:
      
      
      if (HEAP[$code] == 8) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      HEAP[$l] = 2;
      __label__ = 9;
      break;
     case 4:
      
      
      
      
      if ((HEAP[$code] & 1 & 255) != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      HEAP[$l] = 0;
      __label__ = 9;
      break;
     case 6:
      
      
      
      if ((HEAP[$code] & 2) != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      HEAP[$l] = 1;
      __label__ = 9;
      break;
     case 8:
      var $15 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($15, __str9);
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 9:
      
      HEAP[$l + 12] = 0;
      
      var $18 = HEAP[$l + 12];
      
      HEAP[$l + 4] = $18;
      
      
      if (HEAP[$startobj] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$startobj] + 4] + 84] & 16777216) != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $29 = HEAP[$startobj];
      var $30 = _PyLong_AsLongLong($29);
      HEAP[$iftmp_60] = $30;
      __label__ = 13;
      break;
     case 12:
      var $31 = HEAP[$startobj];
      var $32 = _PyInt_AsLong($31);
      var $33 = $32;
      HEAP[$iftmp_60] = $33;
      __label__ = 13;
      break;
     case 13:
      
      var $35 = HEAP[$iftmp_60];
      HEAP[$l + 4] = $35;
      var $36 = _PyErr_Occurred();
      
      if ($36 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 15:
      
      
      if (HEAP[$lenobj] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 16:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$lenobj] + 4] + 84] & 16777216) != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $47 = HEAP[$lenobj];
      var $48 = _PyLong_AsLongLong($47);
      HEAP[$iftmp_65] = $48;
      __label__ = 19;
      break;
     case 18:
      var $49 = HEAP[$lenobj];
      var $50 = _PyInt_AsLong($49);
      var $51 = $50;
      HEAP[$iftmp_65] = $51;
      __label__ = 19;
      break;
     case 19:
      
      var $53 = HEAP[$iftmp_65];
      HEAP[$l + 12] = $53;
      var $54 = _PyErr_Occurred();
      
      if ($54 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 21:
      
      var $57 = HEAP[$whence] & 65535;
      
      HEAP[$l + 2] = $57;
      
      
      
      if ((HEAP[$code] & 4) != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      HEAP[$iftmp_70] = 13;
      __label__ = 24;
      break;
     case 23:
      HEAP[$iftmp_70] = 14;
      __label__ = 24;
      break;
     case 24:
      var $62 = HEAP[$fd];
      var $63 = HEAP[$iftmp_70];
      var $64 = _fcntl($62, $63, allocate([ $l, 0, 0, 0 ], [ "%struct.flock*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ret] = $64;
      
      
      if (HEAP[$ret] < 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $67 = HEAP[_PyExc_IOError];
      var $68 = _PyErr_SetFromErrno($67);
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 26:
      
      var $70 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $70;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 27;
      break;
     case 27:
      var $71 = HEAP[$0];
      HEAP[$retval] = $71;
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
  function _ins($d, $symbol, $value) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $d_addr = __stackBase__;
      var $symbol_addr = __stackBase__ + 4;
      var $value_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $v = __stackBase__ + 20;
      
      HEAP[$d_addr] = $d;
      HEAP[$symbol_addr] = $symbol;
      HEAP[$value_addr] = $value;
      var $1 = HEAP[$value_addr];
      var $2 = _PyInt_FromLong($1);
      HEAP[$v] = $2;
      
      
      if (HEAP[$v] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $5 = HEAP[$d_addr];
      var $6 = HEAP[$symbol_addr];
      var $7 = HEAP[$v];
      var $8 = _PyDict_SetItemString($5, $6, $7);
      
      if ($8 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 3:
      
      
      
      var $13 = HEAP[HEAP[$v]] - 1;
      
      var $15 = HEAP[$v];
      HEAP[$15] = $13;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $25 = HEAP[$v];
      FUNCTION_TABLE[$24]($25);
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 6:
      var $26 = HEAP[$0];
      HEAP[$retval] = $26;
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
  function _all_ins($d) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $d_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$d_addr] = $d;
      var $1 = HEAP[$d_addr];
      var $2 = _ins($1, __str14, 1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 2:
      var $4 = HEAP[$d_addr];
      var $5 = _ins($4, __str15, 2);
      
      if ($5 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 4:
      var $7 = HEAP[$d_addr];
      var $8 = _ins($7, __str16, 4);
      
      if ($8 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 6:
      var $10 = HEAP[$d_addr];
      var $11 = _ins($10, __str17, 8);
      
      if ($11 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 8:
      var $13 = HEAP[$d_addr];
      var $14 = _ins($13, __str18, 32);
      
      if ($14 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 10:
      var $16 = HEAP[$d_addr];
      var $17 = _ins($16, __str19, 64);
      
      if ($17 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 12:
      var $19 = HEAP[$d_addr];
      var $20 = _ins($19, __str20, 128);
      
      if ($20 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 14:
      var $22 = HEAP[$d_addr];
      var $23 = _ins($22, __str21, 192);
      
      if ($23 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 16:
      var $25 = HEAP[$d_addr];
      var $26 = _ins($25, __str22, 0);
      
      if ($26 != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 18:
      var $28 = HEAP[$d_addr];
      var $29 = _ins($28, __str23, 1);
      
      if ($29 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 20:
      var $31 = HEAP[$d_addr];
      var $32 = _ins($31, __str24, 2);
      
      if ($32 != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 22:
      var $34 = HEAP[$d_addr];
      var $35 = _ins($34, __str25, 3);
      
      if ($35 != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 24:
      var $37 = HEAP[$d_addr];
      var $38 = _ins($37, __str26, 4);
      
      if ($38 != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 26:
      var $40 = HEAP[$d_addr];
      var $41 = _ins($40, __str27, 12);
      
      if ($41 != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 28:
      var $43 = HEAP[$d_addr];
      var $44 = _ins($43, __str28, 13);
      
      if ($44 != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 30:
      var $46 = HEAP[$d_addr];
      var $47 = _ins($46, __str29, 14);
      
      if ($47 != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 32:
      var $49 = HEAP[$d_addr];
      var $50 = _ins($49, __str30, 9);
      
      if ($50 != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 34:
      var $52 = HEAP[$d_addr];
      var $53 = _ins($52, __str31, 8);
      
      if ($53 != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 36:
      var $55 = HEAP[$d_addr];
      var $56 = _ins($55, __str32, 11);
      
      if ($56 != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 38:
      var $58 = HEAP[$d_addr];
      var $59 = _ins($58, __str33, 10);
      
      if ($59 != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 40:
      var $61 = HEAP[$d_addr];
      var $62 = _ins($61, __str34, 0);
      
      if ($62 != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 42:
      var $64 = HEAP[$d_addr];
      var $65 = _ins($64, __str35, 1);
      
      if ($65 != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 44:
      var $67 = HEAP[$d_addr];
      var $68 = _ins($67, __str36, 2);
      
      if ($68 != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 46:
      var $70 = HEAP[$d_addr];
      var $71 = _ins($70, __str37, 12);
      
      if ($71 != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 48:
      var $73 = HEAP[$d_addr];
      var $74 = _ins($73, __str38, 13);
      
      if ($74 != 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 50:
      var $76 = HEAP[$d_addr];
      var $77 = _ins($76, __str39, 14);
      
      if ($77 != 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 52:
      var $79 = HEAP[$d_addr];
      var $80 = _ins($79, __str40, 8192);
      
      if ($80 != 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 54:
      var $82 = HEAP[$d_addr];
      var $83 = _ins($82, __str41, 1024);
      
      if ($83 != 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 56:
      var $85 = HEAP[$d_addr];
      var $86 = _ins($85, __str42, 1025);
      
      if ($86 != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 58:
      var $88 = HEAP[$d_addr];
      var $89 = _ins($88, __str43, 1026);
      
      if ($89 != 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 60:
      var $91 = HEAP[$d_addr];
      var $92 = _ins($91, __str44, 4);
      
      if ($92 != 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 62:
      var $94 = HEAP[$d_addr];
      var $95 = _ins($94, __str45, 8);
      
      if ($95 != 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 64:
      var $97 = HEAP[$d_addr];
      var $98 = _ins($97, __str46, 1);
      
      if ($98 != 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 66:
      var $100 = HEAP[$d_addr];
      var $101 = _ins($100, __str47, 1);
      
      if ($101 != 0) {
        __label__ = 67;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 67:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 68:
      var $103 = HEAP[$d_addr];
      var $104 = _ins($103, __str48, 2);
      
      if ($104 != 0) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 70:
      var $106 = HEAP[$d_addr];
      var $107 = _ins($106, __str49, 4);
      
      if ($107 != 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 71:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 72:
      var $109 = HEAP[$d_addr];
      var $110 = _ins($109, __str50, 8);
      
      if ($110 != 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 73:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 74:
      var $112 = HEAP[$d_addr];
      var $113 = _ins($112, __str51, 16);
      
      if ($113 != 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 76:
      var $115 = HEAP[$d_addr];
      var $116 = _ins($115, __str52, 32);
      
      if ($116 != 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 77:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 78:
      var $118 = HEAP[$d_addr];
      var $119 = _ins($118, __str53, -2147483648);
      
      if ($119 != 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 79:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 80:
      var $121 = HEAP[$d_addr];
      var $122 = _ins($121, __str54, 21250);
      
      if ($122 != 0) {
        __label__ = 81;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 81:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 82:
      var $124 = HEAP[$d_addr];
      var $125 = _ins($124, __str55, 21251);
      
      if ($125 != 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 84;
        break;
      }
     case 83:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 84:
      var $127 = HEAP[$d_addr];
      var $128 = _ins($127, __str56, 21252);
      
      if ($128 != 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 86:
      var $130 = HEAP[$d_addr];
      var $131 = _ins($130, __str57, 21253);
      
      if ($131 != 0) {
        __label__ = 87;
        break;
      } else {
        __label__ = 88;
        break;
      }
     case 87:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 88:
      var $133 = HEAP[$d_addr];
      var $134 = _ins($133, __str58, 21276);
      
      if ($134 != 0) {
        __label__ = 89;
        break;
      } else {
        __label__ = 90;
        break;
      }
     case 89:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 90:
      var $136 = HEAP[$d_addr];
      var $137 = _ins($136, __str59, 21257);
      
      if ($137 != 0) {
        __label__ = 91;
        break;
      } else {
        __label__ = 92;
        break;
      }
     case 91:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 92:
      var $139 = HEAP[$d_addr];
      var $140 = _ins($139, __str60, 21258);
      
      if ($140 != 0) {
        __label__ = 93;
        break;
      } else {
        __label__ = 94;
        break;
      }
     case 93:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 94:
      var $142 = HEAP[$d_addr];
      var $143 = _ins($142, __str61, 21259);
      
      if ($143 != 0) {
        __label__ = 95;
        break;
      } else {
        __label__ = 96;
        break;
      }
     case 95:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 96:
      var $145 = HEAP[$d_addr];
      var $146 = _ins($145, __str62, 21263);
      
      if ($146 != 0) {
        __label__ = 97;
        break;
      } else {
        __label__ = 98;
        break;
      }
     case 97:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 98:
      var $148 = HEAP[$d_addr];
      var $149 = _ins($148, __str63, 21254);
      
      if ($149 != 0) {
        __label__ = 99;
        break;
      } else {
        __label__ = 100;
        break;
      }
     case 99:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 100:
      var $151 = HEAP[$d_addr];
      var $152 = _ins($151, __str64, 21255);
      
      if ($152 != 0) {
        __label__ = 101;
        break;
      } else {
        __label__ = 102;
        break;
      }
     case 101:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 102:
      var $154 = HEAP[$d_addr];
      var $155 = _ins($154, __str65, 21249);
      
      if ($155 != 0) {
        __label__ = 103;
        break;
      } else {
        __label__ = 104;
        break;
      }
     case 103:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 104:
      var $157 = HEAP[$d_addr];
      var $158 = _ins($157, __str66, 21264);
      
      if ($158 != 0) {
        __label__ = 105;
        break;
      } else {
        __label__ = 106;
        break;
      }
     case 105:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 106:
      var $160 = HEAP[$d_addr];
      var $161 = _ins($160, __str67, 21256);
      
      if ($161 != 0) {
        __label__ = 107;
        break;
      } else {
        __label__ = 108;
        break;
      }
     case 107:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 108:
      var $163 = HEAP[$d_addr];
      var $164 = _ins($163, __str68, 21267);
      
      if ($164 != 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 110;
        break;
      }
     case 109:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 110:
      var $166 = HEAP[$d_addr];
      var $167 = _ins($166, __str69, 21268);
      
      if ($167 != 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 112;
        break;
      }
     case 111:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 112:
      var $169 = HEAP[$d_addr];
      var $170 = _ins($169, __str70, 21265);
      
      if ($170 != 0) {
        __label__ = 113;
        break;
      } else {
        __label__ = 114;
        break;
      }
     case 113:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 114:
      var $172 = HEAP[$d_addr];
      var $173 = _ins($172, __str71, 21262);
      
      if ($173 != 0) {
        __label__ = 115;
        break;
      } else {
        __label__ = 116;
        break;
      }
     case 115:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 116:
      var $175 = HEAP[$d_addr];
      var $176 = _ins($175, __str72, 21269);
      
      if ($176 != 0) {
        __label__ = 117;
        break;
      } else {
        __label__ = 118;
        break;
      }
     case 117:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 118:
      var $178 = HEAP[$d_addr];
      var $179 = _ins($178, __str73, 21279);
      
      if ($179 != 0) {
        __label__ = 119;
        break;
      } else {
        __label__ = 120;
        break;
      }
     case 119:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 120:
      var $181 = HEAP[$d_addr];
      var $182 = _ins($181, __str74, 21277);
      
      if ($182 != 0) {
        __label__ = 121;
        break;
      } else {
        __label__ = 122;
        break;
      }
     case 121:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 122:
      var $184 = HEAP[$d_addr];
      var $185 = _ins($184, __str75, 21278);
      
      if ($185 != 0) {
        __label__ = 123;
        break;
      } else {
        __label__ = 124;
        break;
      }
     case 123:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 124:
      var $187 = HEAP[$d_addr];
      var $188 = _ins($187, __str76, 21282);
      
      if ($188 != 0) {
        __label__ = 125;
        break;
      } else {
        __label__ = 126;
        break;
      }
     case 125:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 126:
      var $190 = HEAP[$d_addr];
      var $191 = _ins($190, __str77, 21280);
      
      if ($191 != 0) {
        __label__ = 127;
        break;
      } else {
        __label__ = 128;
        break;
      }
     case 127:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 128:
      var $193 = HEAP[$d_addr];
      var $194 = _ins($193, __str78, 21281);
      
      if ($194 != 0) {
        __label__ = 129;
        break;
      } else {
        __label__ = 130;
        break;
      }
     case 129:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 130:
      var $196 = HEAP[$d_addr];
      var $197 = _ins($196, __str79, 21260);
      
      if ($197 != 0) {
        __label__ = 131;
        break;
      } else {
        __label__ = 132;
        break;
      }
     case 131:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 132:
      var $199 = HEAP[$d_addr];
      var $200 = _ins($199, __str80, 21261);
      
      if ($200 != 0) {
        __label__ = 133;
        break;
      } else {
        __label__ = 134;
        break;
      }
     case 133:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 134:
      var $202 = HEAP[$d_addr];
      var $203 = _ins($202, __str81, 21270);
      
      if ($203 != 0) {
        __label__ = 135;
        break;
      } else {
        __label__ = 136;
        break;
      }
     case 135:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 136:
      var $205 = HEAP[$d_addr];
      var $206 = _ins($205, __str82, 21271);
      
      if ($206 != 0) {
        __label__ = 137;
        break;
      } else {
        __label__ = 138;
        break;
      }
     case 137:
      HEAP[$0] = -1;
      __label__ = 139;
      break;
     case 138:
      HEAP[$0] = 0;
      __label__ = 139;
      break;
     case 139:
      var $208 = HEAP[$0];
      HEAP[$retval] = $208;
      __label__ = 140;
      break;
     case 140:
      var $retval139 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval139;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initfcntl() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      var $d = __stackBase__ + 4;
      
      var $0 = _Py_InitModule4(__str10, _fcntl_methods, _module_doc, 0, 1013);
      HEAP[$m] = $0;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = HEAP[$m];
      var $4 = _PyModule_GetDict($3);
      HEAP[$d] = $4;
      var $5 = HEAP[$d];
      var $6 = _all_ins($5);
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
  Module["_initfcntl"] = _initfcntl;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _conv_descriptor, 0, _fcntl_fcntl, 0, _fcntl_ioctl, 0, _fcntl_flock, 0, _fcntl_lockf, 0 ]);
  function run(args) {
    __str = allocate([ 79, 38, 105, 115, 35, 58, 102, 99, 110, 116, 108, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 102, 99, 110, 116, 108, 32, 115, 116, 114, 105, 110, 103, 32, 97, 114, 103, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 79, 38, 105, 124, 108, 59, 102, 99, 110, 116, 108, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 32, 102, 105, 108, 101, 32, 111, 114, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 44, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 32, 97, 110, 100, 32, 111, 112, 116, 105, 111, 110, 97, 108, 108, 121, 32, 97, 32, 116, 104, 105, 114, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 111, 114, 32, 97, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _fcntl_doc = allocate([ 102, 99, 110, 116, 108, 40, 102, 100, 44, 32, 111, 112, 116, 44, 32, 91, 97, 114, 103, 93, 41, 10, 10, 80, 101, 114, 102, 111, 114, 109, 32, 116, 104, 101, 32, 114, 101, 113, 117, 101, 115, 116, 101, 100, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 32, 111, 110, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 32, 102, 100, 46, 32, 32, 84, 104, 101, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 10, 105, 115, 32, 100, 101, 102, 105, 110, 101, 100, 32, 98, 121, 32, 111, 112, 32, 97, 110, 100, 32, 105, 115, 32, 111, 112, 101, 114, 97, 116, 105, 110, 103, 32, 115, 121, 115, 116, 101, 109, 32, 100, 101, 112, 101, 110, 100, 101, 110, 116, 46, 32, 32, 84, 104, 101, 115, 101, 32, 99, 111, 110, 115, 116, 97, 110, 116, 115, 32, 97, 114, 101, 10, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 102, 99, 110, 116, 108, 32, 109, 111, 100, 117, 108, 101, 46, 32, 32, 84, 104, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 97, 114, 103, 32, 105, 115, 32, 111, 112, 116, 105, 111, 110, 97, 108, 44, 32, 97, 110, 100, 10, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 48, 59, 32, 105, 116, 32, 109, 97, 121, 32, 98, 101, 32, 97, 110, 32, 105, 110, 116, 32, 111, 114, 32, 97, 32, 115, 116, 114, 105, 110, 103, 46, 32, 32, 73, 102, 32, 97, 114, 103, 32, 105, 115, 32, 103, 105, 118, 101, 110, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 44, 10, 116, 104, 101, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 111, 102, 32, 102, 99, 110, 116, 108, 32, 105, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 116, 104, 97, 116, 32, 108, 101, 110, 103, 116, 104, 44, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 116, 104, 101, 10, 114, 101, 115, 117, 108, 116, 105, 110, 103, 32, 118, 97, 108, 117, 101, 32, 112, 117, 116, 32, 105, 110, 32, 116, 104, 101, 32, 97, 114, 103, 32, 98, 117, 102, 102, 101, 114, 32, 98, 121, 32, 116, 104, 101, 32, 111, 112, 101, 114, 97, 116, 105, 110, 103, 32, 115, 121, 115, 116, 101, 109, 46, 32, 32, 84, 104, 101, 32, 108, 101, 110, 103, 116, 104, 10, 111, 102, 32, 116, 104, 101, 32, 97, 114, 103, 32, 115, 116, 114, 105, 110, 103, 32, 105, 115, 32, 110, 111, 116, 32, 97, 108, 108, 111, 119, 101, 100, 32, 116, 111, 32, 101, 120, 99, 101, 101, 100, 32, 49, 48, 50, 52, 32, 98, 121, 116, 101, 115, 46, 32, 32, 73, 102, 32, 116, 104, 101, 32, 97, 114, 103, 32, 103, 105, 118, 101, 110, 10, 105, 115, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 32, 111, 114, 32, 105, 102, 32, 110, 111, 110, 101, 32, 105, 115, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 44, 32, 116, 104, 101, 32, 114, 101, 115, 117, 108, 116, 32, 118, 97, 108, 117, 101, 32, 105, 115, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 10, 99, 111, 114, 114, 101, 115, 112, 111, 110, 100, 105, 110, 103, 32, 116, 111, 32, 116, 104, 101, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 111, 102, 32, 116, 104, 101, 32, 102, 99, 110, 116, 108, 32, 99, 97, 108, 108, 32, 105, 110, 32, 116, 104, 101, 32, 67, 32, 99, 111, 100, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 79, 38, 73, 119, 35, 124, 105, 58, 105, 111, 99, 116, 108, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 105, 111, 99, 116, 108, 32, 115, 116, 114, 105, 110, 103, 32, 97, 114, 103, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 79, 38, 73, 115, 35, 58, 105, 111, 99, 116, 108, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 79, 38, 73, 124, 105, 59, 105, 111, 99, 116, 108, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 32, 102, 105, 108, 101, 32, 111, 114, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 44, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 32, 97, 110, 100, 32, 111, 112, 116, 105, 111, 110, 97, 108, 108, 121, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 32, 111, 114, 32, 98, 117, 102, 102, 101, 114, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _ioctl_doc = allocate([ 105, 111, 99, 116, 108, 40, 102, 100, 44, 32, 111, 112, 116, 91, 44, 32, 97, 114, 103, 91, 44, 32, 109, 117, 116, 97, 116, 101, 95, 102, 108, 97, 103, 93, 93, 41, 10, 10, 80, 101, 114, 102, 111, 114, 109, 32, 116, 104, 101, 32, 114, 101, 113, 117, 101, 115, 116, 101, 100, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 32, 111, 110, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 32, 102, 100, 46, 32, 32, 84, 104, 101, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 32, 105, 115, 10, 100, 101, 102, 105, 110, 101, 100, 32, 98, 121, 32, 111, 112, 116, 32, 97, 110, 100, 32, 105, 115, 32, 111, 112, 101, 114, 97, 116, 105, 110, 103, 32, 115, 121, 115, 116, 101, 109, 32, 100, 101, 112, 101, 110, 100, 101, 110, 116, 46, 32, 32, 84, 121, 112, 105, 99, 97, 108, 108, 121, 32, 116, 104, 101, 115, 101, 32, 99, 111, 100, 101, 115, 32, 97, 114, 101, 10, 114, 101, 116, 114, 105, 101, 118, 101, 100, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 102, 99, 110, 116, 108, 32, 111, 114, 32, 116, 101, 114, 109, 105, 111, 115, 32, 108, 105, 98, 114, 97, 114, 121, 32, 109, 111, 100, 117, 108, 101, 115, 46, 10, 10, 84, 104, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 97, 114, 103, 32, 105, 115, 32, 111, 112, 116, 105, 111, 110, 97, 108, 44, 32, 97, 110, 100, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 48, 59, 32, 105, 116, 32, 109, 97, 121, 32, 98, 101, 32, 97, 110, 32, 105, 110, 116, 32, 111, 114, 32, 97, 10, 98, 117, 102, 102, 101, 114, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 100, 97, 116, 97, 32, 40, 109, 111, 115, 116, 32, 108, 105, 107, 101, 108, 121, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 114, 32, 97, 110, 32, 97, 114, 114, 97, 121, 41, 46, 32, 10, 10, 73, 102, 32, 116, 104, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 32, 97, 32, 109, 117, 116, 97, 98, 108, 101, 32, 98, 117, 102, 102, 101, 114, 32, 40, 115, 117, 99, 104, 32, 97, 115, 32, 97, 110, 32, 97, 114, 114, 97, 121, 41, 32, 97, 110, 100, 32, 105, 102, 32, 116, 104, 101, 10, 109, 117, 116, 97, 116, 101, 95, 102, 108, 97, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 40, 119, 104, 105, 99, 104, 32, 105, 115, 32, 111, 110, 108, 121, 32, 97, 108, 108, 111, 119, 101, 100, 32, 105, 110, 32, 116, 104, 105, 115, 32, 99, 97, 115, 101, 41, 32, 105, 115, 32, 116, 114, 117, 101, 32, 116, 104, 101, 110, 32, 116, 104, 101, 10, 98, 117, 102, 102, 101, 114, 32, 105, 115, 32, 40, 105, 110, 32, 101, 102, 102, 101, 99, 116, 41, 32, 112, 97, 115, 115, 101, 100, 32, 116, 111, 32, 116, 104, 101, 32, 111, 112, 101, 114, 97, 116, 105, 110, 103, 32, 115, 121, 115, 116, 101, 109, 32, 97, 110, 100, 32, 99, 104, 97, 110, 103, 101, 115, 32, 109, 97, 100, 101, 32, 98, 121, 10, 116, 104, 101, 32, 79, 83, 32, 119, 105, 108, 108, 32, 98, 101, 32, 114, 101, 102, 108, 101, 99, 116, 101, 100, 32, 105, 110, 32, 116, 104, 101, 32, 99, 111, 110, 116, 101, 110, 116, 115, 32, 111, 102, 32, 116, 104, 101, 32, 98, 117, 102, 102, 101, 114, 32, 97, 102, 116, 101, 114, 32, 116, 104, 101, 32, 99, 97, 108, 108, 32, 104, 97, 115, 10, 114, 101, 116, 117, 114, 110, 101, 100, 46, 32, 32, 84, 104, 101, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 105, 115, 32, 116, 104, 101, 32, 105, 110, 116, 101, 103, 101, 114, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 105, 111, 99, 116, 108, 32, 115, 121, 115, 116, 101, 109, 10, 99, 97, 108, 108, 46, 10, 10, 73, 102, 32, 116, 104, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 32, 97, 32, 109, 117, 116, 97, 98, 108, 101, 32, 98, 117, 102, 102, 101, 114, 32, 97, 110, 100, 32, 116, 104, 101, 32, 109, 117, 116, 97, 98, 108, 101, 95, 102, 108, 97, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 32, 110, 111, 116, 10, 112, 97, 115, 115, 101, 100, 32, 111, 114, 32, 105, 115, 32, 102, 97, 108, 115, 101, 44, 32, 116, 104, 101, 32, 98, 101, 104, 97, 118, 105, 111, 114, 32, 105, 115, 32, 97, 115, 32, 105, 102, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 104, 97, 100, 32, 98, 101, 101, 110, 32, 112, 97, 115, 115, 101, 100, 46, 32, 32, 84, 104, 105, 115, 10, 98, 101, 104, 97, 118, 105, 111, 114, 32, 119, 105, 108, 108, 32, 99, 104, 97, 110, 103, 101, 32, 105, 110, 32, 102, 117, 116, 117, 114, 101, 32, 114, 101, 108, 101, 97, 115, 101, 115, 32, 111, 102, 32, 80, 121, 116, 104, 111, 110, 46, 10, 10, 73, 102, 32, 116, 104, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 32, 97, 110, 32, 105, 109, 109, 117, 116, 97, 98, 108, 101, 32, 98, 117, 102, 102, 101, 114, 32, 40, 109, 111, 115, 116, 32, 108, 105, 107, 101, 108, 121, 32, 97, 32, 115, 116, 114, 105, 110, 103, 41, 32, 116, 104, 101, 110, 32, 97, 32, 99, 111, 112, 121, 10, 111, 102, 32, 116, 104, 101, 32, 98, 117, 102, 102, 101, 114, 32, 105, 115, 32, 112, 97, 115, 115, 101, 100, 32, 116, 111, 32, 116, 104, 101, 32, 111, 112, 101, 114, 97, 116, 105, 110, 103, 32, 115, 121, 115, 116, 101, 109, 32, 97, 110, 100, 32, 116, 104, 101, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 105, 115, 32, 97, 10, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 108, 101, 110, 103, 116, 104, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 119, 104, 97, 116, 101, 118, 101, 114, 32, 116, 104, 101, 32, 111, 112, 101, 114, 97, 116, 105, 110, 103, 32, 115, 121, 115, 116, 101, 109, 32, 112, 117, 116, 32, 105, 110, 10, 116, 104, 101, 32, 98, 117, 102, 102, 101, 114, 46, 32, 32, 84, 104, 101, 32, 108, 101, 110, 103, 116, 104, 32, 111, 102, 32, 116, 104, 101, 32, 97, 114, 103, 32, 98, 117, 102, 102, 101, 114, 32, 105, 110, 32, 116, 104, 105, 115, 32, 99, 97, 115, 101, 32, 105, 115, 32, 110, 111, 116, 32, 97, 108, 108, 111, 119, 101, 100, 32, 116, 111, 10, 101, 120, 99, 101, 101, 100, 32, 49, 48, 50, 52, 32, 98, 121, 116, 101, 115, 46, 10, 10, 73, 102, 32, 116, 104, 101, 32, 97, 114, 103, 32, 103, 105, 118, 101, 110, 32, 105, 115, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 32, 111, 114, 32, 105, 102, 32, 110, 111, 110, 101, 32, 105, 115, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 44, 32, 116, 104, 101, 32, 114, 101, 115, 117, 108, 116, 32, 118, 97, 108, 117, 101, 32, 105, 115, 10, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 32, 99, 111, 114, 114, 101, 115, 112, 111, 110, 100, 105, 110, 103, 32, 116, 111, 32, 116, 104, 101, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 111, 102, 32, 116, 104, 101, 32, 105, 111, 99, 116, 108, 32, 99, 97, 108, 108, 32, 105, 110, 32, 116, 104, 101, 32, 67, 10, 99, 111, 100, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 79, 38, 105, 58, 102, 108, 111, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    _flock_doc = allocate([ 102, 108, 111, 99, 107, 40, 102, 100, 44, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 41, 10, 10, 80, 101, 114, 102, 111, 114, 109, 32, 116, 104, 101, 32, 108, 111, 99, 107, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 32, 111, 112, 32, 111, 110, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 32, 102, 100, 46, 32, 32, 83, 101, 101, 32, 116, 104, 101, 32, 85, 110, 105, 120, 32, 10, 109, 97, 110, 117, 97, 108, 32, 112, 97, 103, 101, 32, 102, 111, 114, 32, 102, 108, 111, 99, 107, 40, 51, 41, 32, 102, 111, 114, 32, 100, 101, 116, 97, 105, 108, 115, 46, 32, 32, 40, 79, 110, 32, 115, 111, 109, 101, 32, 115, 121, 115, 116, 101, 109, 115, 44, 32, 116, 104, 105, 115, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 10, 101, 109, 117, 108, 97, 116, 101, 100, 32, 117, 115, 105, 110, 103, 32, 102, 99, 110, 116, 108, 40, 41, 46, 41, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 79, 38, 105, 124, 79, 79, 105, 58, 108, 111, 99, 107, 102, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 117, 110, 114, 101, 99, 111, 103, 110, 105, 122, 101, 100, 32, 108, 111, 99, 107, 102, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _lockf_doc = allocate([ 108, 111, 99, 107, 102, 32, 40, 102, 100, 44, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 44, 32, 108, 101, 110, 103, 116, 104, 61, 48, 44, 32, 115, 116, 97, 114, 116, 61, 48, 44, 32, 119, 104, 101, 110, 99, 101, 61, 48, 41, 10, 10, 84, 104, 105, 115, 32, 105, 115, 32, 101, 115, 115, 101, 110, 116, 105, 97, 108, 108, 121, 32, 97, 32, 119, 114, 97, 112, 112, 101, 114, 32, 97, 114, 111, 117, 110, 100, 32, 116, 104, 101, 32, 102, 99, 110, 116, 108, 40, 41, 32, 108, 111, 99, 107, 105, 110, 103, 32, 99, 97, 108, 108, 115, 46, 32, 32, 102, 100, 32, 105, 115, 32, 116, 104, 101, 10, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 32, 111, 102, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 116, 111, 32, 108, 111, 99, 107, 32, 111, 114, 32, 117, 110, 108, 111, 99, 107, 44, 32, 97, 110, 100, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 32, 105, 115, 32, 111, 110, 101, 32, 111, 102, 32, 116, 104, 101, 10, 102, 111, 108, 108, 111, 119, 105, 110, 103, 32, 118, 97, 108, 117, 101, 115, 58, 10, 10, 32, 32, 32, 32, 76, 79, 67, 75, 95, 85, 78, 32, 45, 32, 117, 110, 108, 111, 99, 107, 10, 32, 32, 32, 32, 76, 79, 67, 75, 95, 83, 72, 32, 45, 32, 97, 99, 113, 117, 105, 114, 101, 32, 97, 32, 115, 104, 97, 114, 101, 100, 32, 108, 111, 99, 107, 10, 32, 32, 32, 32, 76, 79, 67, 75, 95, 69, 88, 32, 45, 32, 97, 99, 113, 117, 105, 114, 101, 32, 97, 110, 32, 101, 120, 99, 108, 117, 115, 105, 118, 101, 32, 108, 111, 99, 107, 10, 10, 87, 104, 101, 110, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 32, 105, 115, 32, 76, 79, 67, 75, 95, 83, 72, 32, 111, 114, 32, 76, 79, 67, 75, 95, 69, 88, 44, 32, 105, 116, 32, 99, 97, 110, 32, 97, 108, 115, 111, 32, 98, 101, 32, 98, 105, 116, 119, 105, 115, 101, 32, 79, 82, 101, 100, 32, 119, 105, 116, 104, 10, 76, 79, 67, 75, 95, 78, 66, 32, 116, 111, 32, 97, 118, 111, 105, 100, 32, 98, 108, 111, 99, 107, 105, 110, 103, 32, 111, 110, 32, 108, 111, 99, 107, 32, 97, 99, 113, 117, 105, 115, 105, 116, 105, 111, 110, 46, 32, 32, 73, 102, 32, 76, 79, 67, 75, 95, 78, 66, 32, 105, 115, 32, 117, 115, 101, 100, 32, 97, 110, 100, 32, 116, 104, 101, 10, 108, 111, 99, 107, 32, 99, 97, 110, 110, 111, 116, 32, 98, 101, 32, 97, 99, 113, 117, 105, 114, 101, 100, 44, 32, 97, 110, 32, 73, 79, 69, 114, 114, 111, 114, 32, 119, 105, 108, 108, 32, 98, 101, 32, 114, 97, 105, 115, 101, 100, 32, 97, 110, 100, 32, 116, 104, 101, 32, 101, 120, 99, 101, 112, 116, 105, 111, 110, 32, 119, 105, 108, 108, 10, 104, 97, 118, 101, 32, 97, 110, 32, 101, 114, 114, 110, 111, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 32, 115, 101, 116, 32, 116, 111, 32, 69, 65, 67, 67, 69, 83, 32, 111, 114, 32, 69, 65, 71, 65, 73, 78, 32, 40, 100, 101, 112, 101, 110, 100, 105, 110, 103, 32, 111, 110, 32, 116, 104, 101, 32, 111, 112, 101, 114, 97, 116, 105, 110, 103, 10, 115, 121, 115, 116, 101, 109, 32, 45, 45, 32, 102, 111, 114, 32, 112, 111, 114, 116, 97, 98, 105, 108, 105, 116, 121, 44, 32, 99, 104, 101, 99, 107, 32, 102, 111, 114, 32, 101, 105, 116, 104, 101, 114, 32, 118, 97, 108, 117, 101, 41, 46, 10, 10, 108, 101, 110, 103, 116, 104, 32, 105, 115, 32, 116, 104, 101, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 98, 121, 116, 101, 115, 32, 116, 111, 32, 108, 111, 99, 107, 44, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 109, 101, 97, 110, 105, 110, 103, 32, 116, 111, 32, 108, 111, 99, 107, 32, 116, 111, 10, 69, 79, 70, 46, 32, 32, 115, 116, 97, 114, 116, 32, 105, 115, 32, 116, 104, 101, 32, 98, 121, 116, 101, 32, 111, 102, 102, 115, 101, 116, 44, 32, 114, 101, 108, 97, 116, 105, 118, 101, 32, 116, 111, 32, 119, 104, 101, 110, 99, 101, 44, 32, 116, 111, 32, 116, 104, 97, 116, 32, 116, 104, 101, 32, 108, 111, 99, 107, 10, 115, 116, 97, 114, 116, 115, 46, 32, 32, 119, 104, 101, 110, 99, 101, 32, 105, 115, 32, 97, 115, 32, 119, 105, 116, 104, 32, 102, 105, 108, 101, 111, 98, 106, 46, 115, 101, 101, 107, 40, 41, 44, 32, 115, 112, 101, 99, 105, 102, 105, 99, 97, 108, 108, 121, 58, 10, 10, 32, 32, 32, 32, 48, 32, 45, 32, 114, 101, 108, 97, 116, 105, 118, 101, 32, 116, 111, 32, 116, 104, 101, 32, 115, 116, 97, 114, 116, 32, 111, 102, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 40, 83, 69, 69, 75, 95, 83, 69, 84, 41, 10, 32, 32, 32, 32, 49, 32, 45, 32, 114, 101, 108, 97, 116, 105, 118, 101, 32, 116, 111, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 98, 117, 102, 102, 101, 114, 32, 112, 111, 115, 105, 116, 105, 111, 110, 32, 40, 83, 69, 69, 75, 95, 67, 85, 82, 41, 10, 32, 32, 32, 32, 50, 32, 45, 32, 114, 101, 108, 97, 116, 105, 118, 101, 32, 116, 111, 32, 116, 104, 101, 32, 101, 110, 100, 32, 111, 102, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 40, 83, 69, 69, 75, 95, 69, 78, 68, 41, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 102, 99, 110, 116, 108, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 105, 111, 99, 116, 108, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 102, 108, 111, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 108, 111, 99, 107, 102, 0 ], "i8", ALLOC_NORMAL);
    _fcntl_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_doc = allocate([ 84, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 112, 101, 114, 102, 111, 114, 109, 115, 32, 102, 105, 108, 101, 32, 99, 111, 110, 116, 114, 111, 108, 32, 97, 110, 100, 32, 73, 47, 79, 32, 99, 111, 110, 116, 114, 111, 108, 32, 111, 110, 32, 102, 105, 108, 101, 32, 10, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 115, 46, 32, 32, 73, 116, 32, 105, 115, 32, 97, 110, 32, 105, 110, 116, 101, 114, 102, 97, 99, 101, 32, 116, 111, 32, 116, 104, 101, 32, 102, 99, 110, 116, 108, 40, 41, 32, 97, 110, 100, 32, 105, 111, 99, 116, 108, 40, 41, 32, 85, 110, 105, 120, 10, 114, 111, 117, 116, 105, 110, 101, 115, 46, 32, 32, 70, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 115, 32, 99, 97, 110, 32, 98, 101, 32, 111, 98, 116, 97, 105, 110, 101, 100, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 102, 105, 108, 101, 110, 111, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 111, 102, 10, 97, 32, 102, 105, 108, 101, 32, 111, 114, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 76, 79, 67, 75, 95, 83, 72, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 76, 79, 67, 75, 95, 69, 88, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 76, 79, 67, 75, 95, 78, 66, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 76, 79, 67, 75, 95, 85, 78, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 76, 79, 67, 75, 95, 77, 65, 78, 68, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 76, 79, 67, 75, 95, 82, 69, 65, 68, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 76, 79, 67, 75, 95, 87, 82, 73, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 76, 79, 67, 75, 95, 82, 87, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 70, 95, 68, 85, 80, 70, 68, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 70, 95, 71, 69, 84, 70, 68, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 70, 95, 83, 69, 84, 70, 68, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 70, 95, 71, 69, 84, 70, 76, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 70, 95, 83, 69, 84, 70, 76, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 70, 95, 71, 69, 84, 76, 75, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 70, 95, 83, 69, 84, 76, 75, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 70, 95, 83, 69, 84, 76, 75, 87, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 70, 95, 71, 69, 84, 79, 87, 78, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 70, 95, 83, 69, 84, 79, 87, 78, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 70, 95, 71, 69, 84, 83, 73, 71, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 70, 95, 83, 69, 84, 83, 73, 71, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 70, 95, 82, 68, 76, 67, 75, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 70, 95, 87, 82, 76, 67, 75, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 70, 95, 85, 78, 76, 67, 75, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 70, 95, 71, 69, 84, 76, 75, 54, 52, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 70, 95, 83, 69, 84, 76, 75, 54, 52, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 70, 95, 83, 69, 84, 76, 75, 87, 54, 52, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 70, 65, 83, 89, 78, 67, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 70, 95, 83, 69, 84, 76, 69, 65, 83, 69, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 70, 95, 71, 69, 84, 76, 69, 65, 83, 69, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 70, 95, 78, 79, 84, 73, 70, 89, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 70, 95, 69, 88, 76, 67, 75, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 70, 95, 83, 72, 76, 67, 75, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 70, 68, 95, 67, 76, 79, 69, 88, 69, 67, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 68, 78, 95, 65, 67, 67, 69, 83, 83, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 68, 78, 95, 77, 79, 68, 73, 70, 89, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 68, 78, 95, 67, 82, 69, 65, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 68, 78, 95, 68, 69, 76, 69, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 68, 78, 95, 82, 69, 78, 65, 77, 69, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 68, 78, 95, 65, 84, 84, 82, 73, 66, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 68, 78, 95, 77, 85, 76, 84, 73, 83, 72, 79, 84, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 73, 95, 80, 85, 83, 72, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 73, 95, 80, 79, 80, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 73, 95, 76, 79, 79, 75, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 73, 95, 70, 76, 85, 83, 72, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 73, 95, 70, 76, 85, 83, 72, 66, 65, 78, 68, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 73, 95, 83, 69, 84, 83, 73, 71, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 73, 95, 71, 69, 84, 83, 73, 71, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 73, 95, 70, 73, 78, 68, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 73, 95, 80, 69, 69, 75, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 73, 95, 83, 82, 68, 79, 80, 84, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 73, 95, 71, 82, 68, 79, 80, 84, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 73, 95, 78, 82, 69, 65, 68, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 73, 95, 70, 68, 73, 78, 83, 69, 82, 84, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 73, 95, 83, 84, 82, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 73, 95, 83, 87, 82, 79, 80, 84, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 73, 95, 71, 87, 82, 79, 80, 84, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 73, 95, 83, 69, 78, 68, 70, 68, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 73, 95, 82, 69, 67, 86, 70, 68, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 73, 95, 76, 73, 83, 84, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 73, 95, 65, 84, 77, 65, 82, 75, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 73, 95, 67, 75, 66, 65, 78, 68, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 73, 95, 71, 69, 84, 66, 65, 78, 68, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 73, 95, 67, 65, 78, 80, 85, 84, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 73, 95, 83, 69, 84, 67, 76, 84, 73, 77, 69, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 73, 95, 71, 69, 84, 67, 76, 84, 73, 77, 69, 0 ], "i8", ALLOC_NORMAL);
    __str79 = allocate([ 73, 95, 76, 73, 78, 75, 0 ], "i8", ALLOC_NORMAL);
    __str80 = allocate([ 73, 95, 85, 78, 76, 73, 78, 75, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 73, 95, 80, 76, 73, 78, 75, 0 ], "i8", ALLOC_NORMAL);
    __str82 = allocate([ 73, 95, 80, 85, 78, 76, 73, 78, 75, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_fcntl_methods] = __str10;
    HEAP[_fcntl_methods + 4] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_fcntl_methods + 12] = _fcntl_doc;
    HEAP[_fcntl_methods + 16] = __str11;
    HEAP[_fcntl_methods + 20] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_fcntl_methods + 28] = _ioctl_doc;
    HEAP[_fcntl_methods + 32] = __str12;
    HEAP[_fcntl_methods + 36] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_fcntl_methods + 44] = _flock_doc;
    HEAP[_fcntl_methods + 48] = __str13;
    HEAP[_fcntl_methods + 52] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_fcntl_methods + 60] = _lockf_doc;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
