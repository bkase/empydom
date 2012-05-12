"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 112;
  var $1___SIZE = 16;
  var $2___SIZE = 196;
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
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct_RandomObject___SIZE = 2508;
  var $struct_RandomObject___FLATTENER = [ 0, 4, 8, 2504 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _mag01_8264;
  var __str;
  var __str1;
  var __str2;
  var ___PRETTY_FUNCTION___8426;
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
  var __str17;
  var __str18;
  var __str19;
  var _random_methods;
  var _random_doc;
  var __str20;
  var _Random_Type;
  var _module_doc;
  var __str21;
  var __str22;
  function _genrand_int32($self) {
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
      var $y = __stackBase__ + 12;
      var $mt = __stackBase__ + 16;
      var $kk = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      
      
      var $3 = HEAP[$self_addr] + 8;
      HEAP[$mt] = $3;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 2504] > 623) {
        __label__ = 1;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 1:
      HEAP[$kk] = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      var $12 = HEAP[HEAP[$mt] + 4 * HEAP[$kk]] & -2147483648;
      
      
      
      
      
      
      var $19 = $12 | HEAP[HEAP[$mt] + 4 * (HEAP[$kk] + 1)] & 2147483647;
      HEAP[$y] = $19;
      
      
      
      
      
      
      
      
      
      
      
      
      var $32 = HEAP[HEAP[$mt] + 4 * (HEAP[$kk] + 397)] ^ HEAP[$y] >>> 0 >>> 1 ^ HEAP[_mag01_8264 + (HEAP[$y] & 1) * 4];
      
      
      var $35 = HEAP[$mt] + 4 * HEAP[$kk];
      HEAP[$35] = $32;
      
      var $37 = HEAP[$kk] + 1;
      HEAP[$kk] = $37;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$kk] <= 226) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      __label__ = 6;
      break;
     case 5:
      
      
      
      
      var $44 = HEAP[HEAP[$mt] + 4 * HEAP[$kk]] & -2147483648;
      
      
      
      
      
      
      var $51 = $44 | HEAP[HEAP[$mt] + 4 * (HEAP[$kk] + 1)] & 2147483647;
      HEAP[$y] = $51;
      
      var $53 = HEAP[$kk] + -227;
      
      
      
      
      
      
      
      
      
      
      var $64 = HEAP[HEAP[$mt] + 4 * $53] ^ HEAP[$y] >>> 0 >>> 1 ^ HEAP[_mag01_8264 + (HEAP[$y] & 1) * 4];
      
      
      var $67 = HEAP[$mt] + 4 * HEAP[$kk];
      HEAP[$67] = $64;
      
      var $69 = HEAP[$kk] + 1;
      HEAP[$kk] = $69;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$kk] <= 622) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $75 = HEAP[HEAP[$mt] + 2492] & -2147483648;
      
      
      
      
      var $80 = $75 | HEAP[HEAP[$mt]] & 2147483647;
      HEAP[$y] = $80;
      
      
      
      
      
      
      
      
      
      
      var $91 = HEAP[HEAP[$mt] + 1584] ^ HEAP[$y] >>> 0 >>> 1 ^ HEAP[_mag01_8264 + (HEAP[$y] & 1) * 4];
      
      var $93 = HEAP[$mt] + 2492;
      HEAP[$93] = $91;
      
      var $95 = HEAP[$self_addr] + 2504;
      HEAP[$95] = 0;
      __label__ = 8;
      break;
     case 8:
      
      
      var $98 = HEAP[HEAP[$self_addr] + 2504];
      
      
      var $101 = HEAP[HEAP[$mt] + 4 * $98];
      HEAP[$y] = $101;
      var $102 = $98 + 1;
      
      var $104 = HEAP[$self_addr] + 2504;
      HEAP[$104] = $102;
      
      
      
      var $108 = HEAP[$y] >>> 0 >>> 11 ^ HEAP[$y];
      HEAP[$y] = $108;
      
      
      var $111 = HEAP[$y] << 7 & -1658038656;
      
      var $113 = $111 ^ HEAP[$y];
      HEAP[$y] = $113;
      
      
      var $116 = HEAP[$y] << 15 & -272236544;
      
      var $118 = $116 ^ HEAP[$y];
      HEAP[$y] = $118;
      
      
      
      var $122 = HEAP[$y] >>> 0 >>> 18 ^ HEAP[$y];
      HEAP[$y] = $122;
      var $123 = HEAP[$y];
      HEAP[$0] = $123;
      var $124 = HEAP[$0];
      HEAP[$retval] = $124;
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
  function _random_random($self) {
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
      var $a = __stackBase__ + 12;
      var $b = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      var $1 = HEAP[$self_addr];
      var $2 = _genrand_int32($1);
      var $3 = $2 >>> 0 >>> 5;
      HEAP[$a] = $3;
      var $4 = HEAP[$self_addr];
      var $5 = _genrand_int32($4);
      var $6 = $5 >>> 0 >>> 6;
      HEAP[$b] = $6;
      
      
      
      
      
      
      var $13 = (HEAP[$a] * 67108864 + HEAP[$b]) * 1.1102230246251565e-16;
      var $14 = _PyFloat_FromDouble($13);
      HEAP[$0] = $14;
      var $15 = HEAP[$0];
      HEAP[$retval] = $15;
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
  function _init_genrand($self, $s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $s_addr = __stackBase__ + 4;
      var $mti = __stackBase__ + 8;
      var $mt = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$s_addr] = $s;
      
      
      var $2 = HEAP[$self_addr] + 8;
      HEAP[$mt] = $2;
      
      var $4 = HEAP[$mt];
      var $5 = HEAP[$s_addr];
      HEAP[$4] = $5;
      HEAP[$mti] = 1;
      __label__ = 2;
      break;
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $20 = ((HEAP[HEAP[$mt] + 4 * (HEAP[$mti] - 1 & 4294967295) & 4294967295] ^ HEAP[HEAP[$mt] + 4 * (HEAP[$mti] - 1 & 4294967295) & 4294967295] >>> 0 >>> 30) * 1812433253 & 4294967295) + HEAP[$mti] & 4294967295;
      
      
      var $23 = HEAP[$mt] + 4 * HEAP[$mti] & 4294967295;
      HEAP[$23] = $20;
      
      
      
      var $27 = HEAP[HEAP[$mt] + 4 * HEAP[$mti]];
      
      
      var $30 = HEAP[$mt] + 4 * HEAP[$mti];
      HEAP[$30] = $27;
      
      var $32 = HEAP[$mti] + 1;
      HEAP[$mti] = $32;
      __label__ = 2;
      break;
     case 2:
      
      
      if (HEAP[$mti] <= 623) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $36 = HEAP[$self_addr] + 2504;
      var $37 = HEAP[$mti];
      HEAP[$36] = $37;
      __label__ = 4;
      break;
     case 4:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _init_by_array($self, $init_key, $key_length) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $init_key_addr = __stackBase__ + 4;
      var $key_length_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $j = __stackBase__ + 24;
      var $k = __stackBase__ + 28;
      var $mt = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$init_key_addr] = $init_key;
      HEAP[$key_length_addr] = $key_length;
      
      
      var $3 = HEAP[$self_addr] + 8;
      HEAP[$mt] = $3;
      var $4 = HEAP[$self_addr];
      _init_genrand($4, 19650218);
      HEAP[$i] = 1;
      HEAP[$j] = 0;
      
      
      var $max = HEAP[$key_length_addr] >= 624 ? HEAP[$key_length_addr] : 624;
      HEAP[$k] = $max;
      __label__ = 6;
      break;
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $31 = ((HEAP[HEAP[$mt] + 4 * HEAP[$i] & 4294967295] ^ (HEAP[HEAP[$mt] + 4 * (HEAP[$i] - 1 & 4294967295) & 4294967295] ^ HEAP[HEAP[$mt] + 4 * (HEAP[$i] - 1 & 4294967295) & 4294967295] >>> 0 >>> 30) * 1664525 & 4294967295) + HEAP[HEAP[$init_key_addr] + 4 * HEAP[$j] & 4294967295] & 4294967295) + HEAP[$j] & 4294967295;
      
      
      var $34 = HEAP[$mt] + 4 * HEAP[$i] & 4294967295;
      HEAP[$34] = $31;
      
      
      
      var $38 = HEAP[HEAP[$mt] + 4 * HEAP[$i]];
      
      
      var $41 = HEAP[$mt] + 4 * HEAP[$i];
      HEAP[$41] = $38;
      
      var $43 = HEAP[$i] + 1;
      HEAP[$i] = $43;
      
      var $45 = HEAP[$j] + 1;
      HEAP[$j] = $45;
      
      
      if (HEAP[$i] > 623) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      var $50 = HEAP[HEAP[$mt] + 2492];
      
      var $52 = HEAP[$mt];
      HEAP[$52] = $50;
      HEAP[$i] = 1;
      __label__ = 3;
      break;
     case 3:
      
      
      
      if (HEAP[$j] >= HEAP[$key_length_addr]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$j] = 0;
      __label__ = 5;
      break;
     case 5:
      
      var $57 = HEAP[$k] - 1;
      HEAP[$k] = $57;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$k] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      HEAP[$k] = 623;
      __label__ = 11;
      break;
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $79 = (HEAP[HEAP[$mt] + 4 * HEAP[$i] & 4294967295] ^ (HEAP[HEAP[$mt] + 4 * (HEAP[$i] - 1 & 4294967295) & 4294967295] ^ HEAP[HEAP[$mt] + 4 * (HEAP[$i] - 1 & 4294967295) & 4294967295] >>> 0 >>> 30) * 1566083941 & 4294967295) - HEAP[$i] & 4294967295;
      
      
      var $82 = HEAP[$mt] + 4 * HEAP[$i] & 4294967295;
      HEAP[$82] = $79;
      
      
      
      var $86 = HEAP[HEAP[$mt] + 4 * HEAP[$i]];
      
      
      var $89 = HEAP[$mt] + 4 * HEAP[$i];
      HEAP[$89] = $86;
      
      var $91 = HEAP[$i] + 1;
      HEAP[$i] = $91;
      
      
      if (HEAP[$i] > 623) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      var $96 = HEAP[HEAP[$mt] + 2492];
      
      var $98 = HEAP[$mt];
      HEAP[$98] = $96;
      HEAP[$i] = 1;
      __label__ = 10;
      break;
     case 10:
      
      var $100 = HEAP[$k] - 1;
      HEAP[$k] = $100;
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$k] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      var $104 = HEAP[$mt];
      HEAP[$104] = -2147483648;
      
      var $106 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $106;
      HEAP[$0] = __Py_NoneStruct;
      var $107 = HEAP[$0];
      HEAP[$retval] = $107;
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
  function _random_seed($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 76;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 76);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      var $masklower = __stackBase__ + 20;
      var $thirtytwo = __stackBase__ + 24;
      var $n = __stackBase__ + 28;
      var $key = __stackBase__ + 32;
      var $keymax = __stackBase__ + 36;
      var $keyused = __stackBase__ + 40;
      var $err = __stackBase__ + 44;
      var $arg = __stackBase__ + 48;
      var $now = __stackBase__ + 52;
      var $hash = __stackBase__ + 56;
      var $newn = __stackBase__ + 60;
      var $pychunk = __stackBase__ + 64;
      var $chunk = __stackBase__ + 68;
      var $bigger = __stackBase__ + 72;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$result] = 0;
      HEAP[$masklower] = 0;
      HEAP[$thirtytwo] = 0;
      HEAP[$n] = 0;
      HEAP[$key] = 0;
      HEAP[$arg] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str, 0, 1, allocate([ $arg, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 46;
      break;
     case 2:
      
      
      if (HEAP[$arg] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$arg] == __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $8 = _time($now);
      var $9 = HEAP[$now];
      var $10 = HEAP[$self_addr];
      _init_genrand($10, $9);
      
      var $12 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $12;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 46;
      break;
     case 5:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$arg] + 4] + 84] & 8388608) != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$arg] + 4] + 84] & 16777216) != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $27 = HEAP[$arg];
      var $28 = _PyNumber_Absolute($27);
      HEAP[$n] = $28;
      __label__ = 10;
      break;
     case 8:
      var $29 = HEAP[$arg];
      var $30 = _PyObject_Hash($29);
      HEAP[$hash] = $30;
      
      var $32 = HEAP[$hash] == -1;
      if ($32) {
        __label__ = 36;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $33 = HEAP[$hash];
      var $34 = _PyLong_FromUnsignedLong($33);
      HEAP[$n] = $34;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$n] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      HEAP[$keymax] = 8;
      HEAP[$keyused] = 0;
      
      var $38 = HEAP[$keymax] * 4;
      var $39 = _PyMem_Malloc($38);
      var $40 = $39;
      HEAP[$key] = $40;
      
      
      if (HEAP[$key] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $43 = _PyLong_FromUnsignedLong(-1);
      HEAP[$masklower] = $43;
      
      
      if (HEAP[$masklower] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $46 = _PyInt_FromLong(32);
      HEAP[$thirtytwo] = $46;
      
      
      if (HEAP[$thirtytwo] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      __label__ = 32;
      break;
     case 15:
      
      var $50 = HEAP[$err] == -1;
      if ($50) {
        __label__ = 36;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $51 = HEAP[$n];
      var $52 = HEAP[$masklower];
      var $53 = _PyNumber_And($51, $52);
      HEAP[$pychunk] = $53;
      
      
      if (HEAP[$pychunk] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      var $56 = HEAP[$pychunk];
      var $57 = _PyLong_AsUnsignedLong($56);
      HEAP[$chunk] = $57;
      
      
      
      var $61 = HEAP[HEAP[$pychunk]] - 1;
      
      var $63 = HEAP[$pychunk];
      HEAP[$63] = $61;
      
      
      
      
      if (HEAP[HEAP[$pychunk]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $72 = HEAP[HEAP[HEAP[$pychunk] + 4] + 24];
      var $73 = HEAP[$pychunk];
      FUNCTION_TABLE[$72]($73);
      __label__ = 19;
      break;
     case 19:
      
      var $75 = HEAP[$chunk] == -1;
      if ($75) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $76 = _PyErr_Occurred();
      
      if ($76 != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      var $78 = HEAP[$n];
      var $79 = HEAP[$thirtytwo];
      var $80 = _PyNumber_Rshift($78, $79);
      HEAP[$newn] = $80;
      
      
      if (HEAP[$newn] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      var $86 = HEAP[HEAP[$n]] - 1;
      
      var $88 = HEAP[$n];
      HEAP[$88] = $86;
      
      
      
      
      if (HEAP[HEAP[$n]] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $97 = HEAP[HEAP[HEAP[$n] + 4] + 24];
      var $98 = HEAP[$n];
      FUNCTION_TABLE[$97]($98);
      __label__ = 24;
      break;
     case 24:
      var $99 = HEAP[$newn];
      HEAP[$n] = $99;
      
      
      
      if (HEAP[$keyused] >= HEAP[$keymax]) {
        __label__ = 25;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 25:
      
      var $104 = HEAP[$keymax] << 1;
      HEAP[$bigger] = $104;
      
      
      
      
      if (HEAP[$bigger] >>> 1 != HEAP[$keymax]) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      var $109 = _PyErr_NoMemory();
      __label__ = 36;
      break;
     case 27:
      
      var $111 = HEAP[$bigger] * 4;
      
      var $113 = HEAP[$key];
      var $114 = _PyMem_Realloc($113, $111);
      var $115 = $114;
      HEAP[$key] = $115;
      
      
      if (HEAP[$key] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      var $118 = HEAP[$bigger];
      HEAP[$keymax] = $118;
      __label__ = 29;
      break;
     case 29:
      
      
      
      if (HEAP[$keyused] >= HEAP[$keymax]) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      ___assert_fail(__str1, __str2, 296, ___PRETTY_FUNCTION___8426);
      throw "Reached an unreachable!";
     case 31:
      
      
      var $124 = HEAP[$key] + 4 * HEAP[$keyused];
      var $125 = HEAP[$chunk];
      HEAP[$124] = $125;
      
      var $127 = HEAP[$keyused] + 1;
      HEAP[$keyused] = $127;
      __label__ = 32;
      break;
     case 32:
      var $128 = HEAP[$n];
      var $129 = _PyObject_IsTrue($128);
      HEAP[$err] = $129;
      
      
      if (HEAP[$err] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      if (HEAP[$keyused] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      var $136 = HEAP[$key] + 4 * HEAP[$keyused];
      HEAP[$136] = 0;
      
      var $138 = HEAP[$keyused] + 1;
      HEAP[$keyused] = $138;
      __label__ = 35;
      break;
     case 35:
      var $139 = HEAP[$self_addr];
      var $140 = HEAP[$key];
      var $141 = HEAP[$keyused];
      var $142 = _init_by_array($139, $140, $141);
      HEAP[$result] = $142;
      __label__ = 36;
      break;
     case 36:
      
      
      if (HEAP[$masklower] != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 37:
      
      
      
      var $148 = HEAP[HEAP[$masklower]] - 1;
      
      var $150 = HEAP[$masklower];
      HEAP[$150] = $148;
      
      
      
      
      if (HEAP[HEAP[$masklower]] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      var $159 = HEAP[HEAP[HEAP[$masklower] + 4] + 24];
      var $160 = HEAP[$masklower];
      FUNCTION_TABLE[$159]($160);
      __label__ = 39;
      break;
     case 39:
      
      
      if (HEAP[$thirtytwo] != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 40:
      
      
      
      var $166 = HEAP[HEAP[$thirtytwo]] - 1;
      
      var $168 = HEAP[$thirtytwo];
      HEAP[$168] = $166;
      
      
      
      
      if (HEAP[HEAP[$thirtytwo]] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $177 = HEAP[HEAP[HEAP[$thirtytwo] + 4] + 24];
      var $178 = HEAP[$thirtytwo];
      FUNCTION_TABLE[$177]($178);
      __label__ = 42;
      break;
     case 42:
      
      
      if (HEAP[$n] != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 43:
      
      
      
      var $184 = HEAP[HEAP[$n]] - 1;
      
      var $186 = HEAP[$n];
      HEAP[$186] = $184;
      
      
      
      
      if (HEAP[HEAP[$n]] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      var $195 = HEAP[HEAP[HEAP[$n] + 4] + 24];
      var $196 = HEAP[$n];
      FUNCTION_TABLE[$195]($196);
      __label__ = 45;
      break;
     case 45:
      
      var $198 = HEAP[$key];
      _PyMem_Free($198);
      var $199 = HEAP[$result];
      HEAP[$0] = $199;
      __label__ = 46;
      break;
     case 46:
      var $200 = HEAP[$0];
      HEAP[$retval] = $200;
      __label__ = 47;
      break;
     case 47:
      var $retval45 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval45;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _random_getstate($self) {
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
      var $state = __stackBase__ + 12;
      var $element = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      var $1 = _PyTuple_New(625);
      HEAP[$state] = $1;
      
      
      if (HEAP[$state] == 0) {
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
      HEAP[$i] = 0;
      __label__ = 5;
      break;
     case 3:
      
      
      
      
      var $8 = HEAP[HEAP[$self_addr] + 8 + HEAP[$i] * 4];
      var $9 = _PyLong_FromUnsignedLong($8);
      HEAP[$element] = $9;
      
      
      if (HEAP[$element] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      var $16 = HEAP[$state] + 12 + HEAP[$i] * 4;
      var $17 = HEAP[$element];
      HEAP[$16] = $17;
      
      var $19 = HEAP[$i] + 1;
      HEAP[$i] = $19;
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[$i] <= 623) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $24 = HEAP[HEAP[$self_addr] + 2504];
      var $25 = _PyLong_FromLong($24);
      HEAP[$element] = $25;
      
      
      if (HEAP[$element] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      var $32 = HEAP[$state] + 12 + HEAP[$i] * 4;
      var $33 = HEAP[$element];
      HEAP[$32] = $33;
      var $34 = HEAP[$state];
      HEAP[$0] = $34;
      __label__ = 11;
      break;
     case 8:
      
      
      
      var $38 = HEAP[HEAP[$state]] - 1;
      
      var $40 = HEAP[$state];
      HEAP[$40] = $38;
      
      
      
      
      if (HEAP[HEAP[$state]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[$state] + 4] + 24];
      var $50 = HEAP[$state];
      FUNCTION_TABLE[$49]($50);
      __label__ = 10;
      break;
     case 10:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 11:
      var $51 = HEAP[$0];
      HEAP[$retval] = $51;
      __label__ = 12;
      break;
     case 12:
      var $retval10 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _random_setstate($self, $state) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $state_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $element = __stackBase__ + 20;
      var $index = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$state_addr] = $state;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$state_addr] + 4] + 84] & 67108864) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $8 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($8, __str3);
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 2:
      var $9 = HEAP[$state_addr];
      var $10 = _PyTuple_Size($9);
      
      if ($10 != 625) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $12 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($12, __str4);
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 4:
      HEAP[$i] = 0;
      __label__ = 9;
      break;
     case 5:
      
      
      
      
      
      var $18 = HEAP[HEAP[$state_addr] + 12 + HEAP[$i] * 4];
      var $19 = _PyLong_AsUnsignedLong($18);
      HEAP[$element] = $19;
      
      var $21 = HEAP[$element] == -1;
      if ($21) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      var $22 = _PyErr_Occurred();
      
      if ($22 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 8:
      
      
      
      var $27 = HEAP[$self_addr] + 8 + HEAP[$i] * 4;
      var $28 = HEAP[$element];
      HEAP[$27] = $28;
      
      var $30 = HEAP[$i] + 1;
      HEAP[$i] = $30;
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$i] <= 623) {
        __label__ = 5;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      var $38 = HEAP[HEAP[$state_addr] + 12 + HEAP[$i] * 4];
      var $39 = _PyLong_AsLong($38);
      HEAP[$index] = $39;
      
      var $41 = HEAP[$index] == -1;
      if ($41) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      var $42 = _PyErr_Occurred();
      
      if ($42 != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 13:
      
      var $45 = HEAP[$self_addr] + 2504;
      var $46 = HEAP[$index];
      HEAP[$45] = $46;
      
      var $48 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $48;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 14;
      break;
     case 14:
      var $49 = HEAP[$0];
      HEAP[$retval] = $49;
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
  function _random_jumpahead($self, $n) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $n_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $j = __stackBase__ + 20;
      var $iobj = __stackBase__ + 24;
      var $remobj = __stackBase__ + 28;
      var $mt = __stackBase__ + 32;
      var $tmp = __stackBase__ + 36;
      
      HEAP[$self_addr] = $self;
      HEAP[$n_addr] = $n;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$n_addr] + 4] + 84] & 8388608) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$n_addr] + 4] + 84] & 16777216) == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $19 = HEAP[HEAP[HEAP[$n_addr] + 4] + 12];
      var $20 = HEAP[_PyExc_TypeError];
      var $21 = _PyErr_Format($20, __str5, allocate([ $19, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 3:
      
      
      var $24 = HEAP[$self_addr] + 8;
      HEAP[$mt] = $24;
      HEAP[$i] = 623;
      __label__ = 16;
      break;
     case 4:
      var $25 = HEAP[$i];
      var $26 = _PyInt_FromLong($25);
      HEAP[$iobj] = $26;
      
      
      if (HEAP[$iobj] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 6:
      var $29 = HEAP[$n_addr];
      var $30 = HEAP[$iobj];
      var $31 = _PyNumber_Remainder($29, $30);
      HEAP[$remobj] = $31;
      
      
      
      var $35 = HEAP[HEAP[$iobj]] - 1;
      
      var $37 = HEAP[$iobj];
      HEAP[$37] = $35;
      
      
      
      
      if (HEAP[HEAP[$iobj]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$iobj] + 4] + 24];
      var $47 = HEAP[$iobj];
      FUNCTION_TABLE[$46]($47);
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$remobj] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 10:
      var $50 = HEAP[$remobj];
      var $51 = _PyInt_AsLong($50);
      HEAP[$j] = $51;
      
      
      
      var $55 = HEAP[HEAP[$remobj]] - 1;
      
      var $57 = HEAP[$remobj];
      HEAP[$57] = $55;
      
      
      
      
      if (HEAP[HEAP[$remobj]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $66 = HEAP[HEAP[HEAP[$remobj] + 4] + 24];
      var $67 = HEAP[$remobj];
      FUNCTION_TABLE[$66]($67);
      __label__ = 12;
      break;
     case 12:
      
      var $69 = HEAP[$j] == -1;
      if ($69) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      var $70 = _PyErr_Occurred();
      
      if ($70 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 15:
      
      
      
      var $75 = HEAP[HEAP[$mt] + 4 * HEAP[$i]];
      HEAP[$tmp] = $75;
      
      
      
      var $79 = HEAP[HEAP[$mt] + 4 * HEAP[$j]];
      
      
      var $82 = HEAP[$mt] + 4 * HEAP[$i];
      HEAP[$82] = $79;
      
      
      var $85 = HEAP[$mt] + 4 * HEAP[$j];
      var $86 = HEAP[$tmp];
      HEAP[$85] = $86;
      
      var $88 = HEAP[$i] - 1;
      HEAP[$i] = $88;
      __label__ = 16;
      break;
     case 16:
      
      
      if (HEAP[$i] > 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      HEAP[$i] = 0;
      __label__ = 19;
      break;
     case 18:
      
      
      
      
      
      
      var $97 = HEAP[HEAP[$mt] + 4 * HEAP[$i]] + HEAP[$i] + 1;
      
      
      var $100 = HEAP[$mt] + 4 * HEAP[$i];
      HEAP[$100] = $97;
      
      var $102 = HEAP[$i] + 1;
      HEAP[$i] = $102;
      __label__ = 19;
      break;
     case 19:
      
      
      if (HEAP[$i] <= 623) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      var $106 = HEAP[$self_addr] + 2504;
      HEAP[$106] = 624;
      
      var $108 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $108;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 21;
      break;
     case 21:
      var $109 = HEAP[$0];
      HEAP[$retval] = $109;
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
  function _random_getrandbits($self, $args) {
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
      var $k = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $bytes = __stackBase__ + 24;
      var $r = __stackBase__ + 28;
      var $bytearray = __stackBase__ + 32;
      var $result = __stackBase__ + 36;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str6, allocate([ $k, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$k] <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($6, __str7);
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 4:
      
      
      
      
      var $11 = (((HEAP[$k] - 1) / 32 | 0) + 1) * 4;
      HEAP[$bytes] = $11;
      var $12 = HEAP[$bytes];
      var $13 = _PyMem_Malloc($12);
      HEAP[$bytearray] = $13;
      
      
      if (HEAP[$bytearray] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $16 = _PyErr_NoMemory();
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 6:
      HEAP[$i] = 0;
      __label__ = 10;
      break;
     case 7:
      var $17 = HEAP[$self_addr];
      var $18 = _genrand_int32($17);
      HEAP[$r] = $18;
      
      
      if (HEAP[$k] <= 31) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      var $24 = HEAP[$r] >>> 32 - HEAP[$k];
      HEAP[$r] = $24;
      __label__ = 9;
      break;
     case 9:
      
      var $26 = HEAP[$r] & 255;
      
      
      var $29 = HEAP[$bytearray] + HEAP[$i];
      HEAP[$29] = $26;
      
      
      
      
      var $34 = HEAP[$r] >>> 8 & 255;
      
      var $36 = HEAP[$bytearray] + (HEAP[$i] + 1);
      HEAP[$36] = $34;
      
      
      
      
      var $41 = HEAP[$r] >>> 16 & 255;
      
      var $43 = HEAP[$bytearray] + (HEAP[$i] + 2);
      HEAP[$43] = $41;
      
      
      
      
      var $48 = HEAP[$r] >>> 24 & 255;
      
      var $50 = HEAP[$bytearray] + (HEAP[$i] + 3);
      HEAP[$50] = $48;
      
      var $52 = HEAP[$i] + 4;
      HEAP[$i] = $52;
      
      var $54 = HEAP[$k] - 32;
      HEAP[$k] = $54;
      __label__ = 10;
      break;
     case 10:
      
      
      
      if (HEAP[$i] < HEAP[$bytes]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $58 = HEAP[$bytes];
      var $59 = HEAP[$bytearray];
      var $60 = __PyLong_FromByteArray($59, $58, 1, 0);
      HEAP[$result] = $60;
      var $61 = HEAP[$bytearray];
      _PyMem_Free($61);
      var $62 = HEAP[$result];
      HEAP[$0] = $62;
      __label__ = 12;
      break;
     case 12:
      var $63 = HEAP[$0];
      HEAP[$retval] = $63;
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
  function _random_new($type, $args, $kwds) {
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
      var $tmp = __stackBase__ + 24;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      
      if (HEAP[$type_addr] == _Random_Type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[$kwds_addr];
      var $4 = __PyArg_NoKeywords(__str8, $3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 3:
      
      
      var $8 = HEAP[HEAP[$type_addr] + 152];
      var $9 = HEAP[$type_addr];
      var $10 = FUNCTION_TABLE[$8]($9, 0);
      var $11 = $10;
      HEAP[$self] = $11;
      
      
      if (HEAP[$self] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 5:
      var $14 = HEAP[$self];
      var $15 = HEAP[$args_addr];
      var $16 = _random_seed($14, $15);
      HEAP[$tmp] = $16;
      
      
      if (HEAP[$tmp] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      var $20 = HEAP[$self];
      
      
      var $23 = HEAP[$20] - 1;
      var $24 = $20;
      HEAP[$24] = $23;
      
      
      
      if (HEAP[$20] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      var $33 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $35 = HEAP[$self];
      FUNCTION_TABLE[$33]($35);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 9:
      
      
      
      var $39 = HEAP[HEAP[$tmp]] - 1;
      
      var $41 = HEAP[$tmp];
      HEAP[$41] = $39;
      
      
      
      
      if (HEAP[HEAP[$tmp]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $50 = HEAP[HEAP[HEAP[$tmp] + 4] + 24];
      var $51 = HEAP[$tmp];
      FUNCTION_TABLE[$50]($51);
      __label__ = 11;
      break;
     case 11:
      
      var $53 = HEAP[$self];
      HEAP[$0] = $53;
      __label__ = 12;
      break;
     case 12:
      var $54 = HEAP[$0];
      HEAP[$retval] = $54;
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
  function _init_random() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      
      var $0 = _PyType_Ready(_Random_Type);
      
      if ($0 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $2 = _Py_InitModule4(__str21, 0, _module_doc, 0, 1013);
      HEAP[$m] = $2;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $7 = HEAP[_Random_Type] + 1;
      
      HEAP[_Random_Type] = $7;
      var $9 = HEAP[$m];
      var $10 = _PyModule_AddObject($9, __str22, _Random_Type);
      __label__ = 3;
      break;
     case 3:
      __label__ = 4;
      break;
     case 4:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_random"] = _init_random;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _random_random, 0, _random_seed, 0, _random_getstate, 0, _random_setstate, 0, _random_jumpahead, 0, _random_getrandbits, 0, _PyObject_GenericGetAttr, 0, _random_new, 0, _PyObject_Free, 0 ]);
  function run(args) {
    _mag01_8264 = allocate([ 0, 0, 0, 0, -1727483681, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str = allocate([ 115, 101, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 107, 101, 121, 117, 115, 101, 100, 32, 60, 32, 107, 101, 121, 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 95, 114, 97, 110, 100, 111, 109, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8426 = allocate([ 114, 97, 110, 100, 111, 109, 95, 115, 101, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 115, 116, 97, 116, 101, 32, 118, 101, 99, 116, 111, 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 115, 116, 97, 116, 101, 32, 118, 101, 99, 116, 111, 114, 32, 105, 115, 32, 116, 104, 101, 32, 119, 114, 111, 110, 103, 32, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 106, 117, 109, 112, 97, 104, 101, 97, 100, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 44, 32, 110, 111, 116, 32, 39, 37, 115, 39, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 105, 58, 103, 101, 116, 114, 97, 110, 100, 98, 105, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 98, 105, 116, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 103, 114, 101, 97, 116, 101, 114, 32, 116, 104, 97, 110, 32, 122, 101, 114, 111, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 82, 97, 110, 100, 111, 109, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 114, 97, 110, 100, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 114, 97, 110, 100, 111, 109, 40, 41, 32, 45, 62, 32, 120, 32, 105, 110, 32, 116, 104, 101, 32, 105, 110, 116, 101, 114, 118, 97, 108, 32, 91, 48, 44, 32, 49, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 115, 101, 101, 100, 40, 91, 110, 93, 41, 32, 45, 62, 32, 78, 111, 110, 101, 46, 32, 32, 68, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 103, 101, 116, 115, 116, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 103, 101, 116, 115, 116, 97, 116, 101, 40, 41, 32, 45, 62, 32, 116, 117, 112, 108, 101, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 115, 116, 97, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 115, 101, 116, 115, 116, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 115, 101, 116, 115, 116, 97, 116, 101, 40, 115, 116, 97, 116, 101, 41, 32, 45, 62, 32, 78, 111, 110, 101, 46, 32, 32, 82, 101, 115, 116, 111, 114, 101, 115, 32, 103, 101, 110, 101, 114, 97, 116, 111, 114, 32, 115, 116, 97, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 106, 117, 109, 112, 97, 104, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 106, 117, 109, 112, 97, 104, 101, 97, 100, 40, 105, 110, 116, 41, 32, 45, 62, 32, 78, 111, 110, 101, 46, 32, 32, 67, 114, 101, 97, 116, 101, 32, 110, 101, 119, 32, 115, 116, 97, 116, 101, 32, 102, 114, 111, 109, 32, 101, 120, 105, 115, 116, 105, 110, 103, 32, 115, 116, 97, 116, 101, 32, 97, 110, 100, 32, 105, 110, 116, 101, 103, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 103, 101, 116, 114, 97, 110, 100, 98, 105, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 103, 101, 116, 114, 97, 110, 100, 98, 105, 116, 115, 40, 107, 41, 32, 45, 62, 32, 120, 46, 32, 32, 71, 101, 110, 101, 114, 97, 116, 101, 115, 32, 97, 32, 108, 111, 110, 103, 32, 105, 110, 116, 32, 119, 105, 116, 104, 32, 107, 32, 114, 97, 110, 100, 111, 109, 32, 98, 105, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _random_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _random_doc = allocate([ 82, 97, 110, 100, 111, 109, 40, 41, 32, 45, 62, 32, 99, 114, 101, 97, 116, 101, 32, 97, 32, 114, 97, 110, 100, 111, 109, 32, 110, 117, 109, 98, 101, 114, 32, 103, 101, 110, 101, 114, 97, 116, 111, 114, 32, 119, 105, 116, 104, 32, 105, 116, 115, 32, 111, 119, 110, 32, 105, 110, 116, 101, 114, 110, 97, 108, 32, 115, 116, 97, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 95, 114, 97, 110, 100, 111, 109, 46, 82, 97, 110, 100, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    _Random_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2508, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_doc = allocate([ 77, 111, 100, 117, 108, 101, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 115, 32, 116, 104, 101, 32, 77, 101, 114, 115, 101, 110, 110, 101, 32, 84, 119, 105, 115, 116, 101, 114, 32, 114, 97, 110, 100, 111, 109, 32, 110, 117, 109, 98, 101, 114, 32, 103, 101, 110, 101, 114, 97, 116, 111, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 95, 114, 97, 110, 100, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 82, 97, 110, 100, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_random_methods] = __str9;
    HEAP[_random_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_random_methods + 12] = __str10;
    HEAP[_random_methods + 16] = __str;
    HEAP[_random_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_random_methods + 28] = __str11;
    HEAP[_random_methods + 32] = __str12;
    HEAP[_random_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_random_methods + 44] = __str13;
    HEAP[_random_methods + 48] = __str14;
    HEAP[_random_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_random_methods + 60] = __str15;
    HEAP[_random_methods + 64] = __str16;
    HEAP[_random_methods + 68] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_random_methods + 76] = __str17;
    HEAP[_random_methods + 80] = __str18;
    HEAP[_random_methods + 84] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_random_methods + 92] = __str19;
    HEAP[_Random_Type + 12] = __str20;
    HEAP[_Random_Type + 72] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_Random_Type + 88] = _random_doc;
    HEAP[_Random_Type + 116] = _random_methods;
    HEAP[_Random_Type + 156] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_Random_Type + 160] = FUNCTION_TABLE_OFFSET + 18;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
