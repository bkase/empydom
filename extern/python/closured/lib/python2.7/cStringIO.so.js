"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 40;
  var $1___SIZE = 20;
  var $2___SIZE = 20;
  var $3___SIZE = 224;
  var $4___SIZE = 16;
  var $5___SIZE = 40;
  var $6___SIZE = 196;
  var $7___SIZE = 192;
  var $8___SIZE = 32;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_IOobject___SIZE = 20;
  var $struct_Iobject___SIZE = 24;
  var $struct_Oobject___SIZE = 28;
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct_PycStringIO_CAPI___SIZE = 32;
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _cStringIO_module_documentation;
  var _IO_flush__doc__;
  var __str;
  var __str1;
  var __str2;
  var _file_getsetlist;
  var _IO_getval__doc__;
  var __str3;
  var __str4;
  var ___PRETTY_FUNCTION___8365;
  var __str5;
  var __str6;
  var ___PRETTY_FUNCTION___8387;
  var _IO_isatty__doc__;
  var _IO_read__doc__;
  var ___PRETTY_FUNCTION___8429;
  var __str7;
  var __str8;
  var _IO_readline__doc__;
  var __str9;
  var ___PRETTY_FUNCTION___8493;
  var __str10;
  var ___PRETTY_FUNCTION___8548;
  var _IO_readlines__doc__;
  var __str11;
  var _IO_reset__doc__;
  var _IO_tell__doc__;
  var ___PRETTY_FUNCTION___8652;
  var _IO_truncate__doc__;
  var __str12;
  var _IO_seek__doc__;
  var __str13;
  var _O_write__doc__;
  var __str14;
  var ___PRETTY_FUNCTION___8760;
  var __str15;
  var __str16;
  var __str17;
  var _O_close__doc__;
  var _O_writelines__doc__;
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
  var _O_methods;
  var __str31;
  var __str32;
  var _O_memberlist;
  var _Otype__doc__;
  var __str33;
  var _Otype;
  var _I_methods;
  var _Itype__doc__;
  var __str34;
  var _Itype;
  var __str35;
  var _IO_StringIO__doc__;
  var __str36;
  var _IO_methods;
  var _CAPI;
  var __str37;
  var __str38;
  var __str39;
  var __str40;
  var __str41;
  var _PycStringIO;
  function _IO__opencheck($self) {
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
      
      
      
      
      if (HEAP[HEAP[__stackBase__] + 8] == 0) {
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
      HEAP[$0] = 1;
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
  function _IO_get_closed($self, $closure) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $closure_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$closure_addr] = $closure;
      HEAP[$result] = __Py_ZeroStruct;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$result] = __Py_TrueStruct;
      __label__ = 2;
      break;
     case 2:
      
      
      
      var $8 = HEAP[HEAP[$result]] + 1;
      
      var $10 = HEAP[$result];
      HEAP[$10] = $8;
      var $11 = HEAP[$result];
      HEAP[$0] = $11;
      var $12 = HEAP[$0];
      HEAP[$retval] = $12;
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
  function _IO_flush($self, $unused) {
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
      var $1 = HEAP[$self_addr];
      var $2 = _IO__opencheck($1);
      
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
      
      var $5 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $5;
      HEAP[$0] = __Py_NoneStruct;
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
  function _IO_cgetval($self) {
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
      
      var $2 = HEAP[$self_addr];
      var $3 = _IO__opencheck($2);
      
      if ($3 == 0) {
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
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str3, __str4, 122, ___PRETTY_FUNCTION___8365);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      var $13 = HEAP[HEAP[$self_addr] + 12];
      
      
      
      var $17 = HEAP[HEAP[$self_addr] + 8];
      var $18 = _PyString_FromStringAndSize($17, $13);
      HEAP[$0] = $18;
      __label__ = 5;
      break;
     case 5:
      var $19 = HEAP[$0];
      HEAP[$retval] = $19;
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
  function _IO_getval($self, $args) {
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
      var $use_pos = __stackBase__ + 16;
      var $s = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$use_pos] = __Py_NoneStruct;
      var $1 = HEAP[$self_addr];
      var $2 = _IO__opencheck($1);
      
      if ($2 == 0) {
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
      var $4 = HEAP[$args_addr];
      var $5 = _PyArg_UnpackTuple($4, __str5, 0, 1, allocate([ $use_pos, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
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
      var $7 = HEAP[$use_pos];
      var $8 = _PyObject_IsTrue($7);
      
      if ($8 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      var $12 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$s] = $12;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] < HEAP[$s]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      var $20 = HEAP[HEAP[$self_addr] + 16];
      HEAP[$s] = $20;
      __label__ = 7;
      break;
     case 7:
      __label__ = 9;
      break;
     case 8:
      
      
      var $23 = HEAP[HEAP[$self_addr] + 16];
      HEAP[$s] = $23;
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str6, __str4, 141, ___PRETTY_FUNCTION___8387);
      throw "Reached an unreachable!";
     case 11:
      
      
      var $30 = HEAP[HEAP[$self_addr] + 8];
      var $31 = HEAP[$s];
      var $32 = _PyString_FromStringAndSize($30, $31);
      HEAP[$0] = $32;
      __label__ = 12;
      break;
     case 12:
      var $33 = HEAP[$0];
      HEAP[$retval] = $33;
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
  function _IO_isatty($self, $unused) {
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
      var $1 = HEAP[$self_addr];
      var $2 = _IO__opencheck($1);
      
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
      
      
      var $6 = HEAP[__Py_ZeroStruct] + 1;
      
      HEAP[__Py_ZeroStruct] = $6;
      HEAP[$0] = __Py_ZeroStruct;
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
  function _IO_cread($self, $output, $n) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $output_addr = __stackBase__ + 4;
      var $n_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $l = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$output_addr] = $output;
      HEAP[$n_addr] = $n;
      
      var $2 = HEAP[$self_addr];
      var $3 = _IO__opencheck($2);
      
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
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str3, __str4, 162, ___PRETTY_FUNCTION___8429);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str7, __str4, 163, ___PRETTY_FUNCTION___8429);
      throw "Reached an unreachable!";
     case 6:
      
      
      
      
      
      
      
      
      var $23 = HEAP[HEAP[$self_addr] + 16] - HEAP[HEAP[$self_addr] + 12];
      HEAP[$l] = $23;
      
      
      if (HEAP[$n_addr] < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      if (HEAP[$n_addr] > HEAP[$l]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      var $29 = HEAP[$l];
      HEAP[$n_addr] = $29;
      
      
      if (HEAP[$n_addr] < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$n_addr] = 0;
      __label__ = 10;
      break;
     case 10:
      
      
      
      
      
      
      
      
      var $40 = HEAP[HEAP[$self_addr] + 8] + HEAP[HEAP[$self_addr] + 12];
      var $41 = HEAP[$output_addr];
      HEAP[$41] = $40;
      
      
      
      
      
      
      
      var $49 = HEAP[HEAP[$self_addr] + 12] + HEAP[$n_addr];
      var $50 = HEAP[$self_addr] + 12;
      HEAP[$50] = $49;
      var $51 = HEAP[$n_addr];
      HEAP[$0] = $51;
      __label__ = 11;
      break;
     case 11:
      var $52 = HEAP[$0];
      HEAP[$retval] = $52;
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
  function _IO_read($self, $args) {
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
      var $n = __stackBase__ + 16;
      var $output = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$n] = -1;
      HEAP[$output] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str8, allocate([ $n, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$n];
      
      var $6 = HEAP[$self_addr];
      var $7 = _IO_cread($6, $output, $4);
      HEAP[$n] = $7;
      
      
      if (HEAP[$n] < 0) {
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
      var $10 = HEAP[$n];
      var $11 = HEAP[$output];
      var $12 = _PyString_FromStringAndSize($11, $10);
      HEAP[$0] = $12;
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
  function _IO_creadline($self, $output) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $output_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $n = __stackBase__ + 16;
      var $s = __stackBase__ + 20;
      var $l = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$output_addr] = $output;
      
      var $2 = HEAP[$self_addr];
      var $3 = _IO__opencheck($2);
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 15;
      break;
     case 2:
      
      
      
      
      
      
      
      
      var $13 = HEAP[HEAP[$self_addr] + 8] + HEAP[HEAP[$self_addr] + 12];
      HEAP[$n] = $13;
      
      
      
      
      
      
      
      
      var $22 = HEAP[HEAP[$self_addr] + 8] + HEAP[HEAP[$self_addr] + 16];
      HEAP[$s] = $22;
      __label__ = 4;
      break;
     case 3:
      
      var $24 = HEAP[$n] + 1;
      HEAP[$n] = $24;
      __label__ = 4;
      break;
     case 4:
      
      
      
      if (HEAP[$n] >= HEAP[$s]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      if (HEAP[HEAP[$n]] != 10) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      if (HEAP[$n] < HEAP[$s]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      var $35 = HEAP[$n] + 1;
      HEAP[$n] = $35;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      
      
      
      var $44 = HEAP[HEAP[$self_addr] + 8] + HEAP[HEAP[$self_addr] + 12];
      var $45 = HEAP[$output_addr];
      HEAP[$45] = $44;
      
      
      
      
      
      
      
      
      
      
      
      
      var $58 = HEAP[$n] - HEAP[HEAP[$self_addr] + 8] - HEAP[HEAP[$self_addr] + 12];
      HEAP[$l] = $58;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] > 2147483647 - HEAP[$l]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      ___assert_fail(__str9, __str4, 205, ___PRETTY_FUNCTION___8493);
      throw "Reached an unreachable!";
     case 10:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      ___assert_fail(__str3, __str4, 206, ___PRETTY_FUNCTION___8493);
      throw "Reached an unreachable!";
     case 12:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      ___assert_fail(__str7, __str4, 207, ___PRETTY_FUNCTION___8493);
      throw "Reached an unreachable!";
     case 14:
      
      
      
      
      
      
      
      var $83 = HEAP[HEAP[$self_addr] + 12] + HEAP[$l];
      var $84 = HEAP[$self_addr] + 12;
      HEAP[$84] = $83;
      var $85 = HEAP[$l];
      HEAP[$0] = $85;
      __label__ = 15;
      break;
     case 15:
      var $86 = HEAP[$0];
      HEAP[$retval] = $86;
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
  function _IO_readline($self, $args) {
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
      var $n = __stackBase__ + 16;
      var $m = __stackBase__ + 20;
      var $output = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$m] = -1;
      
      
      if (HEAP[$args_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[$args_addr];
      var $4 = _PyArg_ParseTuple($3, __str10, allocate([ $m, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($4 == 0) {
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
      
      var $7 = HEAP[$self_addr];
      var $8 = _IO_creadline($7, $output);
      HEAP[$n] = $8;
      
      
      if (HEAP[$n] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 5:
      
      
      if (HEAP[$m] >= 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      if (HEAP[$m] < HEAP[$n]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $18 = HEAP[$n] - HEAP[$m];
      HEAP[$m] = $18;
      
      
      var $21 = HEAP[$n] - HEAP[$m];
      HEAP[$n] = $21;
      
      
      
      
      var $26 = HEAP[HEAP[$self_addr] + 12] - HEAP[$m];
      
      var $28 = HEAP[$self_addr] + 12;
      HEAP[$28] = $26;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      ___assert_fail(__str3, __str4, 227, ___PRETTY_FUNCTION___8548);
      throw "Reached an unreachable!";
     case 10:
      var $33 = HEAP[$output];
      var $34 = HEAP[$n];
      var $35 = _PyString_FromStringAndSize($33, $34);
      HEAP[$0] = $35;
      __label__ = 11;
      break;
     case 11:
      var $36 = HEAP[$0];
      HEAP[$retval] = $36;
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
  function _IO_readlines($self, $args) {
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
      var $0 = __stackBase__ + 12;
      var $n = __stackBase__ + 16;
      var $output = __stackBase__ + 20;
      var $result = __stackBase__ + 24;
      var $line = __stackBase__ + 28;
      var $hint = __stackBase__ + 32;
      var $length = __stackBase__ + 36;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$hint] = 0;
      HEAP[$length] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str11, allocate([ $hint, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = _PyList_New(0);
      HEAP[$result] = $4;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 4:
      
      var $8 = HEAP[$self_addr];
      var $9 = _IO_creadline($8, $output);
      HEAP[$n] = $9;
      
      
      if (HEAP[$n] < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      if (HEAP[$n] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $14 = HEAP[$output];
      var $15 = HEAP[$n];
      var $16 = _PyString_FromStringAndSize($14, $15);
      HEAP[$line] = $16;
      
      
      if (HEAP[$line] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $19 = HEAP[$result];
      var $20 = HEAP[$line];
      var $21 = _PyList_Append($19, $20);
      var $22 = $21 == -1;
      if ($22) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $26 = HEAP[HEAP[$line]] - 1;
      
      var $28 = HEAP[$line];
      HEAP[$28] = $26;
      
      
      
      
      if (HEAP[HEAP[$line]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $37 = HEAP[HEAP[HEAP[$line] + 4] + 24];
      var $38 = HEAP[$line];
      FUNCTION_TABLE[$37]($38);
      __label__ = 10;
      break;
     case 10:
      __label__ = 17;
      break;
     case 11:
      
      
      
      var $42 = HEAP[HEAP[$line]] - 1;
      
      var $44 = HEAP[$line];
      HEAP[$44] = $42;
      
      
      
      
      if (HEAP[HEAP[$line]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $53 = HEAP[HEAP[HEAP[$line] + 4] + 24];
      var $54 = HEAP[$line];
      FUNCTION_TABLE[$53]($54);
      __label__ = 13;
      break;
     case 13:
      
      
      var $57 = HEAP[$length] + HEAP[$n];
      HEAP[$length] = $57;
      
      
      if (HEAP[$hint] > 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      if (HEAP[$length] >= HEAP[$hint]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      __label__ = 4;
      break;
     case 16:
      var $63 = HEAP[$result];
      HEAP[$0] = $63;
      __label__ = 20;
      break;
     case 17:
      
      
      
      var $67 = HEAP[HEAP[$result]] - 1;
      
      var $69 = HEAP[$result];
      HEAP[$69] = $67;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $78 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $79 = HEAP[$result];
      FUNCTION_TABLE[$78]($79);
      __label__ = 19;
      break;
     case 19:
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 20:
      var $80 = HEAP[$0];
      HEAP[$retval] = $80;
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
  function _IO_reset($self, $unused) {
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
      var $1 = HEAP[$self_addr];
      var $2 = _IO__opencheck($1);
      
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
      
      var $5 = HEAP[$self_addr] + 12;
      HEAP[$5] = 0;
      
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
  function _IO_tell($self, $unused) {
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
      var $1 = HEAP[$self_addr];
      var $2 = _IO__opencheck($1);
      
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str6, __str4, 290, ___PRETTY_FUNCTION___8652);
      throw "Reached an unreachable!";
     case 4:
      
      
      var $10 = HEAP[HEAP[$self_addr] + 12];
      var $11 = _PyInt_FromSsize_t($10);
      HEAP[$0] = $11;
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
  function _IO_truncate($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $pos = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$pos] = -1;
      var $1 = HEAP[$self_addr];
      var $2 = _IO__opencheck($1);
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 2:
      var $4 = HEAP[$args_addr];
      var $5 = _PyArg_ParseTuple($4, __str12, allocate([ $pos, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 4:
      var $7 = HEAP[$args_addr];
      var $8 = _PyTuple_Size($7);
      
      if ($8 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $12 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$pos] = $12;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$pos] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $15 = ___errno_location();
      HEAP[$15] = 22;
      var $16 = HEAP[_PyExc_IOError];
      var $17 = _PyErr_SetFromErrno($16);
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 8:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] > HEAP[$pos]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $23 = HEAP[$pos];
      
      var $25 = HEAP[$self_addr] + 16;
      HEAP[$25] = $23;
      __label__ = 10;
      break;
     case 10:
      
      
      var $28 = HEAP[HEAP[$self_addr] + 16];
      
      var $30 = HEAP[$self_addr] + 12;
      HEAP[$30] = $28;
      
      var $32 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $32;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 11;
      break;
     case 11:
      var $33 = HEAP[$0];
      HEAP[$retval] = $33;
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
  function _IO_iternext($self) {
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
      var $next = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $self;
      
      var $2 = HEAP[__stackBase__];
      var $3 = _IO_readline($2, 0);
      HEAP[$next] = $3;
      
      
      if (HEAP[$next] == 0) {
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
      
      
      
      
      
      if (HEAP[HEAP[$next] + 8] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      var $14 = HEAP[HEAP[$next]] - 1;
      
      var $16 = HEAP[$next];
      HEAP[$16] = $14;
      
      
      
      
      if (HEAP[HEAP[$next]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $25 = HEAP[HEAP[HEAP[$next] + 4] + 24];
      var $26 = HEAP[$next];
      FUNCTION_TABLE[$25]($26);
      __label__ = 5;
      break;
     case 5:
      var $27 = HEAP[_PyExc_StopIteration];
      _PyErr_SetNone($27);
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 6:
      var $28 = HEAP[$next];
      HEAP[$0] = $28;
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
  function _IO_seek($self, $args) {
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
      var $position = __stackBase__ + 16;
      var $mode = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$mode] = 0;
      
      var $2 = HEAP[$self_addr];
      var $3 = _IO__opencheck($2);
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 2:
      var $5 = HEAP[$args_addr];
      var $6 = _PyArg_ParseTuple($5, __str13, allocate([ $position, 0, 0, 0, $mode, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 4:
      
      
      if (HEAP[$mode] == 2) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $14 = HEAP[HEAP[$self_addr] + 16] + HEAP[$position];
      HEAP[$position] = $14;
      __label__ = 8;
      break;
     case 6:
      
      
      if (HEAP[$mode] == 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $21 = HEAP[HEAP[$self_addr] + 12] + HEAP[$position];
      HEAP[$position] = $21;
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$position] < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$position] = 0;
      __label__ = 10;
      break;
     case 10:
      var $24 = HEAP[$position];
      
      var $26 = HEAP[$self_addr] + 12;
      HEAP[$26] = $24;
      
      var $28 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $28;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 11;
      break;
     case 11:
      var $29 = HEAP[$0];
      HEAP[$retval] = $29;
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
  function _O_cwrite($self, $c, $l) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $c_addr = __stackBase__ + 4;
      var $l_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $newl = __stackBase__ + 20;
      var $oself = __stackBase__ + 24;
      var $newbuf = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$c_addr] = $c;
      HEAP[$l_addr] = $l;
      
      var $2 = HEAP[$self_addr];
      var $3 = _IO__opencheck($2);
      
      if ($3 == 0) {
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
      
      var $6 = HEAP[$self_addr];
      HEAP[$oself] = $6;
      
      
      
      
      var $11 = HEAP[HEAP[$oself] + 12] + HEAP[$l_addr];
      HEAP[$newl] = $11;
      
      
      
      
      
      if (HEAP[HEAP[$oself] + 20] <= HEAP[$newl]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 3:
      
      
      
      var $20 = HEAP[HEAP[$oself] + 20] * 2;
      
      var $22 = HEAP[$oself] + 20;
      HEAP[$22] = $20;
      
      
      
      
      
      if (HEAP[HEAP[$oself] + 20] <= HEAP[$newl]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      if (HEAP[$newl] == 2147483646) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str14, __str4, 388, ___PRETTY_FUNCTION___8760);
      throw "Reached an unreachable!";
     case 6:
      
      var $31 = HEAP[$newl] + 1;
      
      var $33 = HEAP[$oself] + 20;
      HEAP[$33] = $31;
      __label__ = 7;
      break;
     case 7:
      
      
      var $36 = HEAP[HEAP[$oself] + 20];
      
      
      var $39 = HEAP[HEAP[$oself] + 8];
      var $40 = _realloc($39, $36);
      HEAP[$newbuf] = $40;
      
      
      if (HEAP[$newbuf] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $43 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($43, __str15);
      
      
      var $46 = HEAP[HEAP[$oself] + 8];
      _free($46);
      
      var $48 = HEAP[$oself] + 8;
      HEAP[$48] = 0;
      
      var $50 = HEAP[$oself] + 12;
      HEAP[$50] = 0;
      
      
      var $53 = HEAP[HEAP[$oself] + 12];
      
      var $55 = HEAP[$oself] + 20;
      HEAP[$55] = $53;
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 9:
      
      var $57 = HEAP[$oself] + 8;
      var $58 = HEAP[$newbuf];
      HEAP[$57] = $58;
      __label__ = 10;
      break;
     case 10:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$oself] + 16] < HEAP[HEAP[$oself] + 12]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      var $72 = HEAP[HEAP[$oself] + 12] - HEAP[HEAP[$oself] + 16];
      
      
      
      
      
      
      var $79 = HEAP[HEAP[$oself] + 8] + HEAP[HEAP[$oself] + 16];
      _llvm_memset_p0i8_i32($79, 0, $72, 1, 0);
      __label__ = 12;
      break;
     case 12:
      var $80 = HEAP[$l_addr];
      
      
      
      
      
      
      var $87 = HEAP[HEAP[$oself] + 8] + HEAP[HEAP[$oself] + 12];
      var $88 = HEAP[$c_addr];
      _llvm_memcpy_p0i8_p0i8_i32($87, $88, $80, 1, 0);
      
      
      
      
      
      
      if (HEAP[HEAP[$oself] + 12] + HEAP[$l_addr] == 2147483647) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      ___assert_fail(__str16, __str4, 417, ___PRETTY_FUNCTION___8760);
      throw "Reached an unreachable!";
     case 14:
      
      
      
      
      var $99 = HEAP[HEAP[$oself] + 12] + HEAP[$l_addr];
      
      var $101 = HEAP[$oself] + 12;
      HEAP[$101] = $99;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$oself] + 16] < HEAP[HEAP[$oself] + 12]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      var $111 = HEAP[HEAP[$oself] + 12];
      
      var $113 = HEAP[$oself] + 16;
      HEAP[$113] = $111;
      __label__ = 16;
      break;
     case 16:
      var $114 = HEAP[$l_addr];
      HEAP[$0] = $114;
      __label__ = 17;
      break;
     case 17:
      var $115 = HEAP[$0];
      HEAP[$retval] = $115;
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
  function _O_write($self, $args) {
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
      var $c = __stackBase__ + 16;
      var $l = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str17, allocate([ $c, 0, 0, 0, $l, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$l];
      var $5 = HEAP[$c];
      
      var $7 = HEAP[$self_addr];
      var $8 = _O_cwrite($7, $5, $4);
      
      if ($8 < 0) {
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
      
      var $11 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $11;
      HEAP[$0] = __Py_NoneStruct;
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
  function _O_close($self, $unused) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 8];
      _free($7);
      __label__ = 2;
      break;
     case 2:
      
      var $9 = HEAP[$self_addr] + 8;
      HEAP[$9] = 0;
      
      var $11 = HEAP[$self_addr] + 20;
      HEAP[$11] = 0;
      
      
      var $14 = HEAP[HEAP[$self_addr] + 20];
      
      var $16 = HEAP[$self_addr] + 16;
      HEAP[$16] = $14;
      
      
      var $19 = HEAP[HEAP[$self_addr] + 16];
      
      var $21 = HEAP[$self_addr] + 12;
      HEAP[$21] = $19;
      
      var $23 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $23;
      HEAP[$0] = __Py_NoneStruct;
      var $24 = HEAP[$0];
      HEAP[$retval] = $24;
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
  function _O_writelines($self, $args) {
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
      var $it = __stackBase__ + 16;
      var $s = __stackBase__ + 20;
      var $n = __stackBase__ + 24;
      var $c = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
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
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 2:
      __label__ = 17;
      break;
     case 3:
      var $5 = HEAP[$s];
      var $6 = _PyString_AsStringAndSize($5, $c, $n);
      var $7 = $6 == -1;
      if ($7) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      
      
      
      var $11 = HEAP[HEAP[$it]] - 1;
      
      var $13 = HEAP[$it];
      HEAP[$13] = $11;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $23 = HEAP[$it];
      FUNCTION_TABLE[$22]($23);
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $27 = HEAP[HEAP[$s]] - 1;
      
      var $29 = HEAP[$s];
      HEAP[$29] = $27;
      
      
      
      
      if (HEAP[HEAP[$s]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[$s] + 4] + 24];
      var $39 = HEAP[$s];
      FUNCTION_TABLE[$38]($39);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 9:
      var $40 = HEAP[$n];
      var $41 = HEAP[$c];
      
      var $43 = HEAP[$self_addr];
      var $44 = _O_cwrite($43, $41, $40);
      var $45 = $44 == -1;
      if ($45) {
        __label__ = 10;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 10:
      
      
      
      var $49 = HEAP[HEAP[$it]] - 1;
      
      var $51 = HEAP[$it];
      HEAP[$51] = $49;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $61 = HEAP[$it];
      FUNCTION_TABLE[$60]($61);
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $65 = HEAP[HEAP[$s]] - 1;
      
      var $67 = HEAP[$s];
      HEAP[$67] = $65;
      
      
      
      
      if (HEAP[HEAP[$s]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $76 = HEAP[HEAP[HEAP[$s] + 4] + 24];
      var $77 = HEAP[$s];
      FUNCTION_TABLE[$76]($77);
      __label__ = 14;
      break;
     case 14:
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 15:
      
      
      
      var $81 = HEAP[HEAP[$s]] - 1;
      
      var $83 = HEAP[$s];
      HEAP[$83] = $81;
      
      
      
      
      if (HEAP[HEAP[$s]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $92 = HEAP[HEAP[HEAP[$s] + 4] + 24];
      var $93 = HEAP[$s];
      FUNCTION_TABLE[$92]($93);
      __label__ = 17;
      break;
     case 17:
      var $94 = HEAP[$it];
      var $95 = _PyIter_Next($94);
      HEAP[$s] = $95;
      
      
      if (HEAP[$s] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      var $101 = HEAP[HEAP[$it]] - 1;
      
      var $103 = HEAP[$it];
      HEAP[$103] = $101;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $112 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $113 = HEAP[$it];
      FUNCTION_TABLE[$112]($113);
      __label__ = 20;
      break;
     case 20:
      var $114 = _PyErr_Occurred();
      
      if ($114 != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 22:
      
      var $117 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $117;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 23;
      break;
     case 23:
      var $118 = HEAP[$0];
      HEAP[$retval] = $118;
      __label__ = 24;
      break;
     case 24:
      var $retval23 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval23;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _O_dealloc($self) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[HEAP[$self_addr] + 8];
      _free($6);
      __label__ = 2;
      break;
     case 2:
      
      var $8 = HEAP[$self_addr];
      _PyObject_Free($8);
      __label__ = 3;
      break;
     case 3:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _newOobject($size) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $size_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $self = __stackBase__ + 12;
      
      HEAP[$size_addr] = $size;
      var $1 = __PyObject_New(_Otype);
      
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
      __label__ = 7;
      break;
     case 2:
      
      var $6 = HEAP[$self] + 12;
      HEAP[$6] = 0;
      
      var $8 = HEAP[$self] + 16;
      HEAP[$8] = 0;
      
      var $10 = HEAP[$self] + 24;
      HEAP[$10] = 0;
      var $11 = HEAP[$size_addr];
      var $12 = _malloc($11);
      
      var $14 = HEAP[$self] + 8;
      HEAP[$14] = $12;
      
      
      
      
      if (HEAP[HEAP[$self] + 8] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      var $19 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($19, __str15);
      
      var $21 = HEAP[$self] + 20;
      HEAP[$21] = 0;
      
      var $23 = HEAP[$self];
      
      
      var $26 = HEAP[$23] - 1;
      var $27 = $23;
      HEAP[$27] = $26;
      
      
      
      if (HEAP[$23] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $38 = HEAP[$self];
      FUNCTION_TABLE[$36]($38);
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 6:
      
      var $40 = HEAP[$self] + 20;
      var $41 = HEAP[$size_addr];
      HEAP[$40] = $41;
      
      var $43 = HEAP[$self];
      HEAP[$0] = $43;
      __label__ = 7;
      break;
     case 7:
      var $44 = HEAP[$0];
      HEAP[$retval] = $44;
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
  function _I_close($self, $unused) {
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
      var $_py_tmp = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 20];
      HEAP[$_py_tmp] = $7;
      
      var $9 = HEAP[$self_addr] + 20;
      HEAP[$9] = 0;
      
      
      
      var $13 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $15 = HEAP[$_py_tmp];
      HEAP[$15] = $13;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $25 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$24]($25);
      __label__ = 3;
      break;
     case 3:
      
      var $27 = HEAP[$self_addr] + 8;
      HEAP[$27] = 0;
      
      var $29 = HEAP[$self_addr] + 16;
      HEAP[$29] = 0;
      
      
      var $32 = HEAP[HEAP[$self_addr] + 16];
      
      var $34 = HEAP[$self_addr] + 12;
      HEAP[$34] = $32;
      
      var $36 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $36;
      HEAP[$0] = __Py_NoneStruct;
      var $37 = HEAP[$0];
      HEAP[$retval] = $37;
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
  function _I_dealloc($self) {
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
      
      var $25 = HEAP[$self_addr];
      _PyObject_Free($25);
      __label__ = 4;
      break;
     case 4:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _newIobject($s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $self = __stackBase__ + 12;
      var $buf = __stackBase__ + 16;
      var $size = __stackBase__ + 20;
      
      HEAP[$s_addr] = $s;
      var $1 = HEAP[$s_addr];
      var $2 = _PyObject_AsReadBuffer($1, $buf, $size);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      var $8 = HEAP[HEAP[HEAP[$s_addr] + 4] + 12];
      var $9 = HEAP[_PyExc_TypeError];
      var $10 = _PyErr_Format($9, __str35, allocate([ $8, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 2:
      var $11 = __PyObject_New(_Itype);
      
      HEAP[$self] = $11;
      
      
      if (HEAP[$self] == 0) {
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
      
      
      
      var $18 = HEAP[HEAP[$s_addr]] + 1;
      
      var $20 = HEAP[$s_addr];
      HEAP[$20] = $18;
      var $21 = HEAP[$buf];
      
      var $23 = HEAP[$self] + 8;
      HEAP[$23] = $21;
      var $24 = HEAP[$size];
      
      var $26 = HEAP[$self] + 16;
      HEAP[$26] = $24;
      
      var $28 = HEAP[$self] + 20;
      var $29 = HEAP[$s_addr];
      HEAP[$28] = $29;
      
      var $31 = HEAP[$self] + 12;
      HEAP[$31] = 0;
      
      var $33 = HEAP[$self];
      HEAP[$0] = $33;
      __label__ = 5;
      break;
     case 5:
      var $34 = HEAP[$0];
      HEAP[$retval] = $34;
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
  function _IO_StringIO($self, $args) {
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
      var $s = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$s] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str36, 0, 1, allocate([ $s, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$s] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[$s];
      var $7 = _newIobject($6);
      HEAP[$0] = $7;
      __label__ = 5;
      break;
     case 4:
      var $8 = _newOobject(128);
      HEAP[$0] = $8;
      __label__ = 5;
      break;
     case 5:
      var $9 = HEAP[$0];
      HEAP[$retval] = $9;
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
  function _initcStringIO() {
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
      var $v = __stackBase__ + 8;
      
      var $0 = _Py_InitModule4(__str37, _IO_methods, _cStringIO_module_documentation, 0, 1013);
      HEAP[$m] = $0;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = HEAP[$m];
      var $4 = _PyModule_GetDict($3);
      HEAP[$d] = $4;
      
      HEAP[_Itype + 4] = _PyType_Type;
      
      HEAP[_Otype + 4] = _PyType_Type;
      var $7 = _PyType_Ready(_Otype);
      
      if ($7 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $9 = _PyType_Ready(_Itype);
      
      if ($9 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $11 = _PyCapsule_New(_CAPI, __str38, 0);
      HEAP[$v] = $11;
      var $12 = HEAP[$d];
      var $13 = HEAP[$v];
      var $14 = _PyDict_SetItemString($12, __str39, $13);
      
      
      if (HEAP[$v] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      var $20 = HEAP[HEAP[$v]] - 1;
      
      var $22 = HEAP[$v];
      HEAP[$22] = $20;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $31 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $32 = HEAP[$v];
      FUNCTION_TABLE[$31]($32);
      __label__ = 6;
      break;
     case 6:
      var $33 = HEAP[$d];
      var $34 = _PyDict_SetItemString($33, __str40, _Itype);
      var $35 = HEAP[$d];
      var $36 = _PyDict_SetItemString($35, __str41, _Otype);
      __label__ = 7;
      break;
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
  Module["_initcStringIO"] = _initcStringIO;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _IO_get_closed, 0, _IO_flush, 0, _IO_getval, 0, _IO_isatty, 0, _IO_read, 0, _IO_readline, 0, _IO_readlines, 0, _IO_reset, 0, _IO_seek, 0, _IO_tell, 0, _IO_truncate, 0, _O_close, 0, _O_write, 0, _O_writelines, 0, _O_dealloc, 0, _PyObject_SelfIter, 0, _IO_iternext, 0, _I_close, 0, _I_dealloc, 0, _IO_StringIO, 0, _IO_cread, 0, _IO_creadline, 0, _O_cwrite, 0, _IO_cgetval, 0, _newOobject, 0, _newIobject, 0 ]);
  function run(args) {
    _cStringIO_module_documentation = allocate([ 65, 32, 115, 105, 109, 112, 108, 101, 32, 102, 97, 115, 116, 32, 112, 97, 114, 116, 105, 97, 108, 32, 83, 116, 114, 105, 110, 103, 73, 79, 32, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 46, 10, 10, 84, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 112, 114, 111, 118, 105, 100, 101, 115, 32, 97, 32, 115, 105, 109, 112, 108, 101, 32, 117, 115, 101, 102, 117, 108, 32, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 32, 102, 111, 114, 10, 116, 104, 101, 32, 83, 116, 114, 105, 110, 103, 73, 79, 32, 109, 111, 100, 117, 108, 101, 32, 116, 104, 97, 116, 32, 105, 115, 32, 119, 114, 105, 116, 116, 101, 110, 32, 105, 110, 32, 67, 46, 32, 32, 73, 116, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 112, 114, 111, 118, 105, 100, 101, 32, 116, 104, 101, 10, 102, 117, 108, 108, 32, 103, 101, 110, 101, 114, 97, 108, 105, 116, 121, 32, 111, 102, 32, 83, 116, 114, 105, 110, 103, 73, 79, 44, 32, 98, 117, 116, 32, 105, 116, 32, 112, 114, 111, 118, 105, 100, 101, 115, 32, 101, 110, 111, 117, 103, 104, 32, 102, 111, 114, 32, 109, 111, 115, 116, 10, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 115, 32, 97, 110, 100, 32, 105, 115, 32, 101, 115, 112, 101, 99, 105, 97, 108, 108, 121, 32, 117, 115, 101, 102, 117, 108, 32, 105, 110, 32, 99, 111, 110, 106, 117, 110, 99, 116, 105, 111, 110, 32, 119, 105, 116, 104, 32, 116, 104, 101, 10, 112, 105, 99, 107, 108, 101, 32, 109, 111, 100, 117, 108, 101, 46, 10, 10, 85, 115, 97, 103, 101, 58, 10, 10, 32, 32, 102, 114, 111, 109, 32, 99, 83, 116, 114, 105, 110, 103, 73, 79, 32, 105, 109, 112, 111, 114, 116, 32, 83, 116, 114, 105, 110, 103, 73, 79, 10, 10, 32, 32, 97, 110, 95, 111, 117, 116, 112, 117, 116, 95, 115, 116, 114, 101, 97, 109, 61, 83, 116, 114, 105, 110, 103, 73, 79, 40, 41, 10, 32, 32, 97, 110, 95, 111, 117, 116, 112, 117, 116, 95, 115, 116, 114, 101, 97, 109, 46, 119, 114, 105, 116, 101, 40, 115, 111, 109, 101, 95, 115, 116, 117, 102, 102, 41, 10, 32, 32, 46, 46, 46, 10, 32, 32, 118, 97, 108, 117, 101, 61, 97, 110, 95, 111, 117, 116, 112, 117, 116, 95, 115, 116, 114, 101, 97, 109, 46, 103, 101, 116, 118, 97, 108, 117, 101, 40, 41, 10, 10, 32, 32, 97, 110, 95, 105, 110, 112, 117, 116, 95, 115, 116, 114, 101, 97, 109, 61, 83, 116, 114, 105, 110, 103, 73, 79, 40, 97, 95, 115, 116, 114, 105, 110, 103, 41, 10, 32, 32, 115, 112, 97, 109, 61, 97, 110, 95, 105, 110, 112, 117, 116, 95, 115, 116, 114, 101, 97, 109, 46, 114, 101, 97, 100, 108, 105, 110, 101, 40, 41, 10, 32, 32, 115, 112, 97, 109, 61, 97, 110, 95, 105, 110, 112, 117, 116, 95, 115, 116, 114, 101, 97, 109, 46, 114, 101, 97, 100, 40, 53, 41, 10, 32, 32, 97, 110, 95, 105, 110, 112, 117, 116, 95, 115, 116, 114, 101, 97, 109, 46, 115, 101, 101, 107, 40, 48, 41, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 35, 32, 79, 75, 44, 32, 115, 116, 97, 114, 116, 32, 111, 118, 101, 114, 10, 32, 32, 115, 112, 97, 109, 61, 97, 110, 95, 105, 110, 112, 117, 116, 95, 115, 116, 114, 101, 97, 109, 46, 114, 101, 97, 100, 40, 41, 32, 32, 32, 32, 32, 32, 32, 35, 32, 97, 110, 100, 32, 114, 101, 97, 100, 32, 105, 116, 32, 97, 108, 108, 10, 32, 32, 10, 73, 102, 32, 115, 111, 109, 101, 111, 110, 101, 32, 101, 108, 115, 101, 32, 119, 97, 110, 116, 115, 32, 116, 111, 32, 112, 114, 111, 118, 105, 100, 101, 32, 97, 32, 109, 111, 114, 101, 32, 99, 111, 109, 112, 108, 101, 116, 101, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 97, 116, 105, 111, 110, 44, 10, 103, 111, 32, 102, 111, 114, 32, 105, 116, 46, 32, 58, 45, 41, 32, 32, 10, 10, 99, 83, 116, 114, 105, 110, 103, 73, 79, 46, 99, 44, 118, 32, 49, 46, 50, 57, 32, 49, 57, 57, 57, 47, 48, 54, 47, 49, 53, 32, 49, 52, 58, 49, 48, 58, 50, 55, 32, 106, 105, 109, 32, 69, 120, 112, 10, 0 ], "i8", ALLOC_NORMAL);
    _IO_flush__doc__ = allocate([ 102, 108, 117, 115, 104, 40, 41, 58, 32, 100, 111, 101, 115, 32, 110, 111, 116, 104, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 73, 47, 79, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 32, 111, 110, 32, 99, 108, 111, 115, 101, 100, 32, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 99, 108, 111, 115, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 84, 114, 117, 101, 32, 105, 102, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 105, 115, 32, 99, 108, 111, 115, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    _file_getsetlist = allocate(40, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _IO_getval__doc__ = allocate([ 103, 101, 116, 118, 97, 108, 117, 101, 40, 91, 117, 115, 101, 95, 112, 111, 115, 93, 41, 32, 45, 45, 32, 71, 101, 116, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 118, 97, 108, 117, 101, 46, 10, 73, 102, 32, 117, 115, 101, 95, 112, 111, 115, 32, 105, 115, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 97, 110, 100, 32, 105, 115, 32, 97, 32, 116, 114, 117, 101, 32, 118, 97, 108, 117, 101, 44, 32, 116, 104, 101, 110, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 114, 101, 116, 117, 114, 110, 101, 100, 10, 119, 105, 108, 108, 32, 105, 110, 99, 108, 117, 100, 101, 32, 111, 110, 108, 121, 32, 116, 104, 101, 32, 116, 101, 120, 116, 32, 117, 112, 32, 116, 111, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 102, 105, 108, 101, 32, 112, 111, 115, 105, 116, 105, 111, 110, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 40, 40, 73, 79, 111, 98, 106, 101, 99, 116, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 112, 111, 115, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 99, 83, 116, 114, 105, 110, 103, 73, 79, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8365 = allocate([ 73, 79, 95, 99, 103, 101, 116, 118, 97, 108, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 103, 101, 116, 118, 97, 108, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 115, 101, 108, 102, 45, 62, 112, 111, 115, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8387 = allocate([ 73, 79, 95, 103, 101, 116, 118, 97, 108, 0 ], "i8", ALLOC_NORMAL);
    _IO_isatty__doc__ = allocate([ 105, 115, 97, 116, 116, 121, 40, 41, 58, 32, 97, 108, 119, 97, 121, 115, 32, 114, 101, 116, 117, 114, 110, 115, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    _IO_read__doc__ = allocate([ 114, 101, 97, 100, 40, 91, 115, 93, 41, 32, 45, 45, 32, 82, 101, 97, 100, 32, 115, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 44, 32, 111, 114, 32, 116, 104, 101, 32, 114, 101, 115, 116, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8429 = allocate([ 73, 79, 95, 99, 114, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 40, 40, 73, 79, 111, 98, 106, 101, 99, 116, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 115, 116, 114, 105, 110, 103, 95, 115, 105, 122, 101, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 124, 110, 58, 114, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    _IO_readline__doc__ = allocate([ 114, 101, 97, 100, 108, 105, 110, 101, 40, 41, 32, 45, 45, 32, 82, 101, 97, 100, 32, 111, 110, 101, 32, 108, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 40, 40, 73, 79, 111, 98, 106, 101, 99, 116, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 112, 111, 115, 32, 60, 61, 32, 40, 40, 80, 121, 95, 115, 115, 105, 122, 101, 95, 116, 41, 40, 40, 40, 115, 105, 122, 101, 95, 116, 41, 45, 49, 41, 62, 62, 49, 41, 41, 32, 45, 32, 108, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8493 = allocate([ 73, 79, 95, 99, 114, 101, 97, 100, 108, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 124, 105, 58, 114, 101, 97, 100, 108, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8548 = allocate([ 73, 79, 95, 114, 101, 97, 100, 108, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    _IO_readlines__doc__ = allocate([ 114, 101, 97, 100, 108, 105, 110, 101, 115, 40, 41, 32, 45, 45, 32, 82, 101, 97, 100, 32, 97, 108, 108, 32, 108, 105, 110, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 124, 105, 58, 114, 101, 97, 100, 108, 105, 110, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _IO_reset__doc__ = allocate([ 114, 101, 115, 101, 116, 40, 41, 32, 45, 45, 32, 82, 101, 115, 101, 116, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 112, 111, 115, 105, 116, 105, 111, 110, 32, 116, 111, 32, 116, 104, 101, 32, 98, 101, 103, 105, 110, 110, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _IO_tell__doc__ = allocate([ 116, 101, 108, 108, 40, 41, 32, 45, 45, 32, 103, 101, 116, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 112, 111, 115, 105, 116, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8652 = allocate([ 73, 79, 95, 116, 101, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    _IO_truncate__doc__ = allocate([ 116, 114, 117, 110, 99, 97, 116, 101, 40, 41, 58, 32, 116, 114, 117, 110, 99, 97, 116, 101, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 97, 116, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 112, 111, 115, 105, 116, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 124, 110, 58, 116, 114, 117, 110, 99, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _IO_seek__doc__ = allocate([ 115, 101, 101, 107, 40, 112, 111, 115, 105, 116, 105, 111, 110, 41, 32, 32, 32, 32, 32, 32, 32, 45, 45, 32, 115, 101, 116, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 112, 111, 115, 105, 116, 105, 111, 110, 10, 115, 101, 101, 107, 40, 112, 111, 115, 105, 116, 105, 111, 110, 44, 32, 109, 111, 100, 101, 41, 32, 45, 45, 32, 109, 111, 100, 101, 32, 48, 58, 32, 97, 98, 115, 111, 108, 117, 116, 101, 59, 32, 49, 58, 32, 114, 101, 108, 97, 116, 105, 118, 101, 59, 32, 50, 58, 32, 114, 101, 108, 97, 116, 105, 118, 101, 32, 116, 111, 32, 69, 79, 70, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 110, 124, 105, 58, 115, 101, 101, 107, 0 ], "i8", ALLOC_NORMAL);
    _O_write__doc__ = allocate([ 119, 114, 105, 116, 101, 40, 115, 41, 32, 45, 45, 32, 87, 114, 105, 116, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 116, 104, 101, 32, 102, 105, 108, 101, 10, 10, 78, 111, 116, 101, 32, 40, 104, 97, 99, 107, 58, 41, 32, 119, 114, 105, 116, 105, 110, 103, 32, 78, 111, 110, 101, 32, 114, 101, 115, 101, 116, 115, 32, 116, 104, 101, 32, 98, 117, 102, 102, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 110, 101, 119, 108, 32, 43, 32, 49, 32, 60, 32, 50, 49, 52, 55, 52, 56, 51, 54, 52, 55, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8760 = allocate([ 79, 95, 99, 119, 114, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 111, 117, 116, 32, 111, 102, 32, 109, 101, 109, 111, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 111, 115, 101, 108, 102, 45, 62, 112, 111, 115, 32, 43, 32, 108, 32, 60, 32, 50, 49, 52, 55, 52, 56, 51, 54, 52, 55, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 116, 35, 58, 119, 114, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _O_close__doc__ = allocate([ 99, 108, 111, 115, 101, 40, 41, 58, 32, 101, 120, 112, 108, 105, 99, 105, 116, 108, 121, 32, 114, 101, 108, 101, 97, 115, 101, 32, 114, 101, 115, 111, 117, 114, 99, 101, 115, 32, 104, 101, 108, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _O_writelines__doc__ = allocate([ 119, 114, 105, 116, 101, 108, 105, 110, 101, 115, 40, 115, 101, 113, 117, 101, 110, 99, 101, 95, 111, 102, 95, 115, 116, 114, 105, 110, 103, 115, 41, 32, 45, 62, 32, 78, 111, 110, 101, 46, 32, 32, 87, 114, 105, 116, 101, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 115, 32, 116, 111, 32, 116, 104, 101, 32, 102, 105, 108, 101, 46, 10, 10, 78, 111, 116, 101, 32, 116, 104, 97, 116, 32, 110, 101, 119, 108, 105, 110, 101, 115, 32, 97, 114, 101, 32, 110, 111, 116, 32, 97, 100, 100, 101, 100, 46, 32, 32, 84, 104, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 99, 97, 110, 32, 98, 101, 32, 97, 110, 121, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 111, 98, 106, 101, 99, 116, 10, 112, 114, 111, 100, 117, 99, 105, 110, 103, 32, 115, 116, 114, 105, 110, 103, 115, 46, 32, 84, 104, 105, 115, 32, 105, 115, 32, 101, 113, 117, 105, 118, 97, 108, 101, 110, 116, 32, 116, 111, 32, 99, 97, 108, 108, 105, 110, 103, 32, 119, 114, 105, 116, 101, 40, 41, 32, 102, 111, 114, 32, 101, 97, 99, 104, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 102, 108, 117, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 103, 101, 116, 118, 97, 108, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 105, 115, 97, 116, 116, 121, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 114, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 114, 101, 97, 100, 108, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 114, 101, 97, 100, 108, 105, 110, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 114, 101, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 115, 101, 101, 107, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 116, 101, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 116, 114, 117, 110, 99, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 99, 108, 111, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 119, 114, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 119, 114, 105, 116, 101, 108, 105, 110, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _O_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str31 = allocate([ 115, 111, 102, 116, 115, 112, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 102, 108, 97, 103, 32, 105, 110, 100, 105, 99, 97, 116, 105, 110, 103, 32, 116, 104, 97, 116, 32, 97, 32, 115, 112, 97, 99, 101, 32, 110, 101, 101, 100, 115, 32, 116, 111, 32, 98, 101, 32, 112, 114, 105, 110, 116, 101, 100, 59, 32, 117, 115, 101, 100, 32, 98, 121, 32, 112, 114, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _O_memberlist = allocate([ 0, 0, 0, 0, 1, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _Otype__doc__ = allocate([ 83, 105, 109, 112, 108, 101, 32, 116, 121, 112, 101, 32, 102, 111, 114, 32, 111, 117, 116, 112, 117, 116, 32, 116, 111, 32, 115, 116, 114, 105, 110, 103, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 99, 83, 116, 114, 105, 110, 103, 73, 79, 46, 83, 116, 114, 105, 110, 103, 79, 0 ], "i8", ALLOC_NORMAL);
    _Otype = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _I_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _Itype__doc__ = allocate([ 83, 105, 109, 112, 108, 101, 32, 116, 121, 112, 101, 32, 102, 111, 114, 32, 116, 114, 101, 97, 116, 105, 110, 103, 32, 115, 116, 114, 105, 110, 103, 115, 32, 97, 115, 32, 105, 110, 112, 117, 116, 32, 102, 105, 108, 101, 32, 115, 116, 114, 101, 97, 109, 115, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 99, 83, 116, 114, 105, 110, 103, 73, 79, 46, 83, 116, 114, 105, 110, 103, 73, 0 ], "i8", ALLOC_NORMAL);
    _Itype = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str35 = allocate([ 101, 120, 112, 101, 99, 116, 101, 100, 32, 114, 101, 97, 100, 32, 98, 117, 102, 102, 101, 114, 44, 32, 37, 46, 50, 48, 48, 115, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _IO_StringIO__doc__ = allocate([ 83, 116, 114, 105, 110, 103, 73, 79, 40, 91, 115, 93, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 83, 116, 114, 105, 110, 103, 73, 79, 45, 108, 105, 107, 101, 32, 115, 116, 114, 101, 97, 109, 32, 102, 111, 114, 32, 114, 101, 97, 100, 105, 110, 103, 32, 111, 114, 32, 119, 114, 105, 116, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 83, 116, 114, 105, 110, 103, 73, 79, 0 ], "i8", ALLOC_NORMAL);
    _IO_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _CAPI = allocate(32, [ "i32 (%struct.PyObject*, i8**, i32)*", 0, 0, 0, "i32 (%struct.PyObject*, i8**)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0 ], ALLOC_NORMAL);
    __str37 = allocate([ 99, 83, 116, 114, 105, 110, 103, 73, 79, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 99, 83, 116, 114, 105, 110, 103, 73, 79, 46, 99, 83, 116, 114, 105, 110, 103, 73, 79, 95, 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 99, 83, 116, 114, 105, 110, 103, 73, 79, 95, 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 73, 110, 112, 117, 116, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 79, 117, 116, 112, 117, 116, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    _PycStringIO = allocate(1, "%struct.PycStringIO_CAPI*", ALLOC_NORMAL);
    HEAP[_file_getsetlist] = __str1;
    HEAP[_file_getsetlist + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_file_getsetlist + 12] = __str2;
    HEAP[_O_methods] = __str18;
    HEAP[_O_methods + 4] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_O_methods + 12] = _IO_flush__doc__;
    HEAP[_O_methods + 16] = __str19;
    HEAP[_O_methods + 20] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_O_methods + 28] = _IO_getval__doc__;
    HEAP[_O_methods + 32] = __str20;
    HEAP[_O_methods + 36] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_O_methods + 44] = _IO_isatty__doc__;
    HEAP[_O_methods + 48] = __str21;
    HEAP[_O_methods + 52] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_O_methods + 60] = _IO_read__doc__;
    HEAP[_O_methods + 64] = __str22;
    HEAP[_O_methods + 68] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_O_methods + 76] = _IO_readline__doc__;
    HEAP[_O_methods + 80] = __str23;
    HEAP[_O_methods + 84] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_O_methods + 92] = _IO_readlines__doc__;
    HEAP[_O_methods + 96] = __str24;
    HEAP[_O_methods + 100] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_O_methods + 108] = _IO_reset__doc__;
    HEAP[_O_methods + 112] = __str25;
    HEAP[_O_methods + 116] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_O_methods + 124] = _IO_seek__doc__;
    HEAP[_O_methods + 128] = __str26;
    HEAP[_O_methods + 132] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_O_methods + 140] = _IO_tell__doc__;
    HEAP[_O_methods + 144] = __str27;
    HEAP[_O_methods + 148] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_O_methods + 156] = _IO_truncate__doc__;
    HEAP[_O_methods + 160] = __str28;
    HEAP[_O_methods + 164] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_O_methods + 172] = _O_close__doc__;
    HEAP[_O_methods + 176] = __str29;
    HEAP[_O_methods + 180] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_O_methods + 188] = _O_write__doc__;
    HEAP[_O_methods + 192] = __str30;
    HEAP[_O_methods + 196] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_O_methods + 204] = _O_writelines__doc__;
    HEAP[_O_memberlist] = __str31;
    HEAP[_O_memberlist + 16] = __str32;
    HEAP[_Otype + 12] = __str33;
    HEAP[_Otype + 24] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_Otype + 88] = _Otype__doc__;
    HEAP[_Otype + 108] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_Otype + 112] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_Otype + 116] = _O_methods;
    HEAP[_Otype + 120] = _O_memberlist;
    HEAP[_Otype + 124] = _file_getsetlist;
    HEAP[_I_methods] = __str18;
    HEAP[_I_methods + 4] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_I_methods + 12] = _IO_flush__doc__;
    HEAP[_I_methods + 16] = __str19;
    HEAP[_I_methods + 20] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_I_methods + 28] = _IO_getval__doc__;
    HEAP[_I_methods + 32] = __str20;
    HEAP[_I_methods + 36] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_I_methods + 44] = _IO_isatty__doc__;
    HEAP[_I_methods + 48] = __str21;
    HEAP[_I_methods + 52] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_I_methods + 60] = _IO_read__doc__;
    HEAP[_I_methods + 64] = __str22;
    HEAP[_I_methods + 68] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_I_methods + 76] = _IO_readline__doc__;
    HEAP[_I_methods + 80] = __str23;
    HEAP[_I_methods + 84] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_I_methods + 92] = _IO_readlines__doc__;
    HEAP[_I_methods + 96] = __str24;
    HEAP[_I_methods + 100] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_I_methods + 108] = _IO_reset__doc__;
    HEAP[_I_methods + 112] = __str25;
    HEAP[_I_methods + 116] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_I_methods + 124] = _IO_seek__doc__;
    HEAP[_I_methods + 128] = __str26;
    HEAP[_I_methods + 132] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_I_methods + 140] = _IO_tell__doc__;
    HEAP[_I_methods + 144] = __str27;
    HEAP[_I_methods + 148] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_I_methods + 156] = _IO_truncate__doc__;
    HEAP[_I_methods + 160] = __str28;
    HEAP[_I_methods + 164] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_I_methods + 172] = _O_close__doc__;
    HEAP[_Itype + 12] = __str34;
    HEAP[_Itype + 24] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_Itype + 88] = _Itype__doc__;
    HEAP[_Itype + 108] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_Itype + 112] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_Itype + 116] = _I_methods;
    HEAP[_Itype + 124] = _file_getsetlist;
    HEAP[_IO_methods] = __str36;
    HEAP[_IO_methods + 4] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_IO_methods + 12] = _IO_StringIO__doc__;
    HEAP[_CAPI] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_CAPI + 4] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_CAPI + 8] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_CAPI + 12] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_CAPI + 16] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_CAPI + 20] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_CAPI + 24] = _Itype;
    HEAP[_CAPI + 28] = _Otype;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
