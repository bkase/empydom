"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 416;
  var $1___SIZE = 16;
  var $2___SIZE = 16;
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
  var _seg_aend;
  var _seg_uend;
  var __st_ulaw2linear16;
  var __st_alaw2linear16;
  var _indexTable;
  var _stepsizeTable;
  var _AudioopError;
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
  var _audioop_methods;
  var __str72;
  var __str73;
  var __str74;
  function _search($val, $table, $size) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 22;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 22);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $val_addr = __stackBase__;
      var $table_addr = __stackBase__ + 2;
      var $size_addr = __stackBase__ + 6;
      var $retval = __stackBase__ + 10;
      var $0 = __stackBase__ + 14;
      var $i = __stackBase__ + 18;
      
      HEAP[$val_addr] = $val;
      HEAP[$table_addr] = $table;
      HEAP[$size_addr] = $size;
      HEAP[$i] = 0;
      __label__ = 4;
      break;
     case 1:
      
      
      
      
      var $5 = HEAP[HEAP[$table_addr]] >= HEAP[$val_addr];
      
      var $7 = HEAP[$table_addr] + 2;
      HEAP[$table_addr] = $7;
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      var $10 = HEAP[$i] & 65535;
      HEAP[$0] = $10;
      __label__ = 6;
      break;
     case 3:
      
      var $12 = HEAP[$i] + 1;
      HEAP[$i] = $12;
      __label__ = 4;
      break;
     case 4:
      
      
      
      if (HEAP[$i] < HEAP[$size_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      var $18 = HEAP[$size_addr] & 65535;
      HEAP[$0] = $18;
      __label__ = 6;
      break;
     case 6:
      var $19 = HEAP[$0];
      HEAP[$retval] = $19;
      __label__ = 7;
      break;
     case 7:
      
      var $retval67 = HEAP[$retval] & 65535;
      STACKTOP = __stackBase__;
      return $retval67;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _st_14linear2ulaw($pcm_val) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 15;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 15);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pcm_val_addr = __stackBase__;
      var $retval = __stackBase__ + 2;
      var $0 = __stackBase__ + 6;
      var $mask = __stackBase__ + 10;
      var $seg = __stackBase__ + 12;
      var $uval = __stackBase__ + 14;
      
      HEAP[$pcm_val_addr] = $pcm_val;
      
      var $2 = HEAP[$pcm_val_addr] >> 2;
      HEAP[$pcm_val_addr] = $2;
      
      
      if (HEAP[$pcm_val_addr] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $6 = 0 - HEAP[$pcm_val_addr];
      HEAP[$pcm_val_addr] = $6;
      HEAP[$mask] = 127;
      __label__ = 3;
      break;
     case 2:
      HEAP[$mask] = 255;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$pcm_val_addr] > 32635) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$pcm_val_addr] = 32635;
      __label__ = 5;
      break;
     case 5:
      
      var $10 = HEAP[$pcm_val_addr] + 33;
      HEAP[$pcm_val_addr] = $10;
      
      
      var $13 = HEAP[$pcm_val_addr] & 65535;
      var $14 = _search($13, _seg_uend, 8);
      HEAP[$seg] = $14;
      
      
      if (HEAP[$seg] > 7) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $20 = HEAP[$mask] & 255 ^ 127;
      HEAP[$0] = $20;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      
      
      
      
      
      
      
      var $32 = (HEAP[$seg] & 255) << 4 | HEAP[$pcm_val_addr] >> HEAP[$seg] + 1 & 255 & 15;
      HEAP[$uval] = $32;
      
      
      
      
      var $37 = HEAP[$mask] & 255 ^ HEAP[$uval];
      HEAP[$0] = $37;
      __label__ = 8;
      break;
     case 8:
      var $38 = HEAP[$0];
      HEAP[$retval] = $38;
      __label__ = 9;
      break;
     case 9:
      
      var $retval89 = HEAP[$retval] & 255;
      STACKTOP = __stackBase__;
      return $retval89;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _st_linear2alaw($pcm_val) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 15;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 15);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pcm_val_addr = __stackBase__;
      var $retval = __stackBase__ + 2;
      var $0 = __stackBase__ + 6;
      var $mask = __stackBase__ + 10;
      var $seg = __stackBase__ + 12;
      var $aval = __stackBase__ + 14;
      
      HEAP[$pcm_val_addr] = $pcm_val;
      
      var $2 = HEAP[$pcm_val_addr] >> 3;
      HEAP[$pcm_val_addr] = $2;
      
      
      if (HEAP[$pcm_val_addr] >= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$mask] = 213;
      __label__ = 3;
      break;
     case 2:
      HEAP[$mask] = 85;
      
      var $not = HEAP[$pcm_val_addr] ^ -1;
      HEAP[$pcm_val_addr] = $not;
      __label__ = 3;
      break;
     case 3:
      
      
      var $8 = HEAP[$pcm_val_addr] & 65535;
      var $9 = _search($8, _seg_aend, 8);
      HEAP[$seg] = $9;
      
      
      if (HEAP[$seg] > 7) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      var $15 = HEAP[$mask] & 255 ^ 127;
      HEAP[$0] = $15;
      __label__ = 9;
      break;
     case 5:
      
      
      var $18 = (HEAP[$seg] & 255) << 4;
      HEAP[$aval] = $18;
      
      
      if (HEAP[$seg] <= 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      var $26 = HEAP[$pcm_val_addr] >> 1 & 255 & 15 | HEAP[$aval];
      HEAP[$aval] = $26;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      
      
      
      
      var $35 = HEAP[$pcm_val_addr] >> HEAP[$seg] & 255 & 15 | HEAP[$aval];
      HEAP[$aval] = $35;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      var $40 = HEAP[$mask] & 255 ^ HEAP[$aval];
      HEAP[$0] = $40;
      __label__ = 9;
      break;
     case 9:
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
      __label__ = 10;
      break;
     case 10:
      
      var $retval910 = HEAP[$retval] & 255;
      STACKTOP = __stackBase__;
      return $retval910;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_check_size($size) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $size_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$size_addr] = $size;
      
      
      if (HEAP[$size_addr] == 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$size_addr] == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$size_addr] == 4) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $7 = HEAP[_AudioopError];
      _PyErr_SetString($7, __str);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      HEAP[$0] = 1;
      __label__ = 5;
      break;
     case 5:
      var $8 = HEAP[$0];
      HEAP[$retval] = $8;
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
  function _audioop_check_parameters($len, $size) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $len_addr = __stackBase__;
      var $size_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$len_addr] = $len;
      HEAP[$size_addr] = $size;
      var $1 = HEAP[$size_addr];
      var $2 = _audioop_check_size($1);
      
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
      
      
      
      
      if (HEAP[$len_addr] % HEAP[$size_addr] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_AudioopError];
      _PyErr_SetString($8, __str1);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      HEAP[$0] = 1;
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
  function _audioop_getsample($self, $args) {
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
      var $cp = __stackBase__ + 16;
      var $len = __stackBase__ + 20;
      var $size = __stackBase__ + 24;
      var $val = __stackBase__ + 28;
      var $i = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$val] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str2, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $i, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 4:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      if ((HEAP[$len] / HEAP[$size] | 0) <= HEAP[$i]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $15 = HEAP[_AudioopError];
      _PyErr_SetString($15, __str3);
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 7:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $22 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $22;
      __label__ = 13;
      break;
     case 9:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      var $31 = HEAP[HEAP[$cp] + HEAP[$i] * 2];
      HEAP[$val] = $31;
      __label__ = 13;
      break;
     case 11:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      var $39 = HEAP[HEAP[$cp] + HEAP[$i] * 4];
      HEAP[$val] = $39;
      __label__ = 13;
      break;
     case 13:
      var $40 = HEAP[$val];
      var $41 = _PyInt_FromLong($40);
      HEAP[$0] = $41;
      __label__ = 14;
      break;
     case 14:
      var $42 = HEAP[$0];
      HEAP[$retval] = $42;
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
  function _audioop_max($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp = __stackBase__ + 16;
      var $len = __stackBase__ + 20;
      var $size = __stackBase__ + 24;
      var $val = __stackBase__ + 28;
      var $i = __stackBase__ + 32;
      var $max = __stackBase__ + 36;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$val] = 0;
      HEAP[$max] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str4, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 4:
      HEAP[$i] = 0;
      __label__ = 16;
      break;
     case 5:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $14 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $14;
      __label__ = 11;
      break;
     case 7:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $22 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $22;
      __label__ = 11;
      break;
     case 9:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $29 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $29;
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$val] < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      var $33 = 0 - HEAP[$val];
      HEAP[$val] = $33;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (HEAP[$val] > HEAP[$max]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $37 = HEAP[$val];
      HEAP[$max] = $37;
      __label__ = 15;
      break;
     case 15:
      
      
      var $40 = HEAP[$i] + HEAP[$size];
      HEAP[$i] = $40;
      __label__ = 16;
      break;
     case 16:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      var $44 = HEAP[$max];
      var $45 = _PyInt_FromLong($44);
      HEAP[$0] = $45;
      __label__ = 18;
      break;
     case 18:
      var $46 = HEAP[$0];
      HEAP[$retval] = $46;
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
  function _audioop_minmax($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp = __stackBase__ + 16;
      var $len = __stackBase__ + 20;
      var $size = __stackBase__ + 24;
      var $val = __stackBase__ + 28;
      var $i = __stackBase__ + 32;
      var $min = __stackBase__ + 36;
      var $max = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$val] = 0;
      HEAP[$min] = 2147483647;
      HEAP[$max] = -2147483647;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str5, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 4:
      HEAP[$i] = 0;
      __label__ = 16;
      break;
     case 5:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $14 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $14;
      __label__ = 11;
      break;
     case 7:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $22 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $22;
      __label__ = 11;
      break;
     case 9:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $29 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $29;
      __label__ = 11;
      break;
     case 11:
      
      
      
      if (HEAP[$val] > HEAP[$max]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $33 = HEAP[$val];
      HEAP[$max] = $33;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (HEAP[$val] < HEAP[$min]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $37 = HEAP[$val];
      HEAP[$min] = $37;
      __label__ = 15;
      break;
     case 15:
      
      
      var $40 = HEAP[$i] + HEAP[$size];
      HEAP[$i] = $40;
      __label__ = 16;
      break;
     case 16:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      var $44 = HEAP[$min];
      var $45 = HEAP[$max];
      var $46 = _Py_BuildValue(__str6, allocate([ $44, 0, 0, 0, $45, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $46;
      __label__ = 18;
      break;
     case 18:
      var $47 = HEAP[$0];
      HEAP[$retval] = $47;
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
  function _audioop_avg($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp = __stackBase__ + 16;
      var $len = __stackBase__ + 20;
      var $size = __stackBase__ + 24;
      var $val = __stackBase__ + 28;
      var $i = __stackBase__ + 32;
      var $avg = __stackBase__ + 36;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$val] = 0;
      HEAP[$avg] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str7, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 4:
      HEAP[$i] = 0;
      __label__ = 12;
      break;
     case 5:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $14 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $14;
      __label__ = 11;
      break;
     case 7:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $22 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $22;
      __label__ = 11;
      break;
     case 9:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $29 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $29;
      __label__ = 11;
      break;
     case 11:
      
      
      
      var $33 = HEAP[$val] + HEAP[$avg];
      HEAP[$avg] = $33;
      
      
      var $36 = HEAP[$i] + HEAP[$size];
      HEAP[$i] = $36;
      __label__ = 12;
      break;
     case 12:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      if (HEAP[$len] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$val] = 0;
      __label__ = 16;
      break;
     case 15:
      
      
      
      
      
      
      var $48 = HEAP[$avg] / (HEAP[$len] / HEAP[$size] | 0) | 0;
      HEAP[$val] = $48;
      __label__ = 16;
      break;
     case 16:
      var $49 = HEAP[$val];
      var $50 = _PyInt_FromLong($49);
      HEAP[$0] = $50;
      __label__ = 17;
      break;
     case 17:
      var $51 = HEAP[$0];
      HEAP[$retval] = $51;
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
  function _audioop_rms($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp = __stackBase__ + 16;
      var $len = __stackBase__ + 20;
      var $size = __stackBase__ + 24;
      var $val = __stackBase__ + 28;
      var $i = __stackBase__ + 32;
      var $sum_squares = __stackBase__ + 36;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$val] = 0;
      HEAP[$sum_squares] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str8, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 4:
      HEAP[$i] = 0;
      __label__ = 12;
      break;
     case 5:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $14 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $14;
      __label__ = 11;
      break;
     case 7:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $22 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $22;
      __label__ = 11;
      break;
     case 9:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $29 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $29;
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      
      
      var $36 = HEAP[$val] * HEAP[$val] + HEAP[$sum_squares];
      HEAP[$sum_squares] = $36;
      
      
      var $39 = HEAP[$i] + HEAP[$size];
      HEAP[$i] = $39;
      __label__ = 12;
      break;
     case 12:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      if (HEAP[$len] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$val] = 0;
      __label__ = 16;
      break;
     case 15:
      
      
      
      
      
      var $50 = HEAP[$sum_squares] / (HEAP[$len] / HEAP[$size] | 0);
      var $51 = _sqrt($50);
      var $52 = $51 | 0;
      HEAP[$val] = $52;
      __label__ = 16;
      break;
     case 16:
      var $53 = HEAP[$val];
      var $54 = _PyInt_FromLong($53);
      HEAP[$0] = $54;
      __label__ = 17;
      break;
     case 17:
      var $55 = HEAP[$0];
      HEAP[$retval] = $55;
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
  function __sum2($a, $b, $len) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr = __stackBase__;
      var $b_addr = __stackBase__ + 4;
      var $len_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 20;
      var $i = __stackBase__ + 28;
      var $sum = __stackBase__ + 32;
      
      HEAP[$a_addr] = $a;
      HEAP[$b_addr] = $b;
      HEAP[$len_addr] = $len;
      HEAP[$sum] = 0;
      HEAP[$i] = 0;
      __label__ = 2;
      break;
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      var $13 = HEAP[HEAP[$a_addr] + 2 * HEAP[$i]] * HEAP[HEAP[$b_addr] + 2 * HEAP[$i]] + HEAP[$sum];
      HEAP[$sum] = $13;
      
      var $15 = HEAP[$i] + 1;
      HEAP[$i] = $15;
      __label__ = 2;
      break;
     case 2:
      
      
      
      if (HEAP[$i] < HEAP[$len_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $19 = HEAP[$sum];
      HEAP[$0] = $19;
      var $20 = HEAP[$0];
      HEAP[$retval] = $20;
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
  function _audioop_findfit($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 104;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 104);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp1 = __stackBase__ + 16;
      var $cp2 = __stackBase__ + 20;
      var $len1 = __stackBase__ + 24;
      var $len2 = __stackBase__ + 28;
      var $j = __stackBase__ + 32;
      var $best_j = __stackBase__ + 36;
      var $aj_m1 = __stackBase__ + 40;
      var $aj_lm1 = __stackBase__ + 48;
      var $sum_ri_2 = __stackBase__ + 56;
      var $sum_aij_2 = __stackBase__ + 64;
      var $sum_aij_ri = __stackBase__ + 72;
      var $result = __stackBase__ + 80;
      var $best_result = __stackBase__ + 88;
      var $factor = __stackBase__ + 96;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $cp21 = $cp2;
      var $cp13 = $cp1;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str9, allocate([ $cp13, 0, 0, 0, $len1, 0, 0, 0, $cp21, 0, 0, 0, $len2, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 2:
      
      
      
      
      if ((HEAP[$len1] & 1 & 255) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      if ((HEAP[$len2] & 1 & 255) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $10 = HEAP[_AudioopError];
      _PyErr_SetString($10, __str10);
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 5:
      
      var $12 = HEAP[$len1] >> 1;
      HEAP[$len1] = $12;
      
      var $14 = HEAP[$len2] >> 1;
      HEAP[$len2] = $14;
      
      
      
      if (HEAP[$len1] < HEAP[$len2]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $18 = HEAP[_AudioopError];
      _PyErr_SetString($18, __str11);
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 7:
      var $19 = HEAP[$len2];
      var $20 = HEAP[$cp2];
      var $21 = HEAP[$cp2];
      var $22 = __sum2($21, $20, $19);
      HEAP[$sum_ri_2] = $22;
      var $23 = HEAP[$len2];
      var $24 = HEAP[$cp1];
      var $25 = HEAP[$cp1];
      var $26 = __sum2($25, $24, $23);
      HEAP[$sum_aij_2] = $26;
      var $27 = HEAP[$len2];
      var $28 = HEAP[$cp2];
      var $29 = HEAP[$cp1];
      var $30 = __sum2($29, $28, $27);
      HEAP[$sum_aij_ri] = $30;
      
      
      
      
      
      
      
      
      var $39 = (HEAP[$sum_ri_2] * HEAP[$sum_aij_2] - HEAP[$sum_aij_ri] * HEAP[$sum_aij_ri]) / HEAP[$sum_aij_2];
      HEAP[$result] = $39;
      var $40 = HEAP[$result];
      HEAP[$best_result] = $40;
      HEAP[$best_j] = 0;
      HEAP[$j] = 1;
      __label__ = 11;
      break;
     case 8:
      
      
      
      
      
      var $46 = HEAP[HEAP[$cp1] + 2 * (HEAP[$j] - 1)];
      HEAP[$aj_m1] = $46;
      
      
      
      
      
      
      
      var $54 = HEAP[HEAP[$cp1] + 2 * (HEAP[$j] + HEAP[$len2] - 1)];
      HEAP[$aj_lm1] = $54;
      
      
      
      
      
      
      
      
      var $63 = HEAP[$aj_lm1] * HEAP[$aj_lm1] + HEAP[$sum_aij_2] - HEAP[$aj_m1] * HEAP[$aj_m1];
      HEAP[$sum_aij_2] = $63;
      var $64 = HEAP[$len2];
      var $65 = HEAP[$cp2];
      
      
      var $68 = HEAP[$cp1] + 2 * HEAP[$j];
      var $69 = __sum2($68, $65, $64);
      HEAP[$sum_aij_ri] = $69;
      
      
      
      
      
      
      
      
      var $78 = (HEAP[$sum_ri_2] * HEAP[$sum_aij_2] - HEAP[$sum_aij_ri] * HEAP[$sum_aij_ri]) / HEAP[$sum_aij_2];
      HEAP[$result] = $78;
      
      
      
      if (HEAP[$result] < HEAP[$best_result]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $82 = HEAP[$result];
      HEAP[$best_result] = $82;
      var $83 = HEAP[$j];
      HEAP[$best_j] = $83;
      __label__ = 10;
      break;
     case 10:
      
      var $85 = HEAP[$j] + 1;
      HEAP[$j] = $85;
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      
      if (HEAP[$len1] - HEAP[$len2] >= HEAP[$j]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $91 = HEAP[$len2];
      var $92 = HEAP[$cp2];
      
      
      var $95 = HEAP[$cp1] + 2 * HEAP[$best_j];
      var $96 = __sum2($95, $92, $91);
      
      var $98 = $96 / HEAP[$sum_ri_2];
      HEAP[$factor] = $98;
      var $99 = HEAP[$best_j];
      var $100 = HEAP[$factor];
      var $101 = _Py_BuildValue(__str12, allocate([ $99, 0, 0, 0, $100, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $101;
      __label__ = 13;
      break;
     case 13:
      var $102 = HEAP[$0];
      HEAP[$retval] = $102;
      __label__ = 14;
      break;
     case 14:
      var $retval18 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_findfactor($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp1 = __stackBase__ + 16;
      var $cp2 = __stackBase__ + 20;
      var $len1 = __stackBase__ + 24;
      var $len2 = __stackBase__ + 28;
      var $sum_ri_2 = __stackBase__ + 32;
      var $sum_aij_ri = __stackBase__ + 40;
      var $result = __stackBase__ + 48;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $cp21 = $cp2;
      var $cp13 = $cp1;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str13, allocate([ $cp13, 0, 0, 0, $len1, 0, 0, 0, $cp21, 0, 0, 0, $len2, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 2:
      
      
      
      
      if ((HEAP[$len1] & 1 & 255) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      if ((HEAP[$len2] & 1 & 255) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $10 = HEAP[_AudioopError];
      _PyErr_SetString($10, __str10);
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 5:
      
      
      
      if (HEAP[$len1] != HEAP[$len2]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $14 = HEAP[_AudioopError];
      _PyErr_SetString($14, __str14);
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 7:
      
      var $16 = HEAP[$len2] >> 1;
      HEAP[$len2] = $16;
      var $17 = HEAP[$len2];
      var $18 = HEAP[$cp2];
      var $19 = HEAP[$cp2];
      var $20 = __sum2($19, $18, $17);
      HEAP[$sum_ri_2] = $20;
      var $21 = HEAP[$len2];
      var $22 = HEAP[$cp2];
      var $23 = HEAP[$cp1];
      var $24 = __sum2($23, $22, $21);
      HEAP[$sum_aij_ri] = $24;
      
      
      var $27 = HEAP[$sum_aij_ri] / HEAP[$sum_ri_2];
      HEAP[$result] = $27;
      var $28 = HEAP[$result];
      var $29 = _PyFloat_FromDouble($28);
      HEAP[$0] = $29;
      __label__ = 8;
      break;
     case 8:
      var $30 = HEAP[$0];
      HEAP[$retval] = $30;
      __label__ = 9;
      break;
     case 9:
      var $retval13 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_findmax($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 68;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp1 = __stackBase__ + 16;
      var $len1 = __stackBase__ + 20;
      var $len2 = __stackBase__ + 24;
      var $j = __stackBase__ + 28;
      var $best_j = __stackBase__ + 32;
      var $aj_m1 = __stackBase__ + 36;
      var $aj_lm1 = __stackBase__ + 44;
      var $result = __stackBase__ + 52;
      var $best_result = __stackBase__ + 60;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $cp11 = $cp1;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str15, allocate([ $cp11, 0, 0, 0, $len1, 0, 0, 0, $len2, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 2:
      
      
      
      
      if ((HEAP[$len1] & 1 & 255) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $7 = HEAP[_AudioopError];
      _PyErr_SetString($7, __str10);
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 4:
      
      var $9 = HEAP[$len1] >> 1;
      HEAP[$len1] = $9;
      
      
      if (HEAP[$len2] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      if (HEAP[$len1] < HEAP[$len2]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $15 = HEAP[_AudioopError];
      _PyErr_SetString($15, __str16);
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 7:
      var $16 = HEAP[$len2];
      var $17 = HEAP[$cp1];
      var $18 = HEAP[$cp1];
      var $19 = __sum2($18, $17, $16);
      HEAP[$result] = $19;
      var $20 = HEAP[$result];
      HEAP[$best_result] = $20;
      HEAP[$best_j] = 0;
      HEAP[$j] = 1;
      __label__ = 11;
      break;
     case 8:
      
      
      
      
      
      var $26 = HEAP[HEAP[$cp1] + 2 * (HEAP[$j] - 1)];
      HEAP[$aj_m1] = $26;
      
      
      
      
      
      
      
      var $34 = HEAP[HEAP[$cp1] + 2 * (HEAP[$j] + HEAP[$len2] - 1)];
      HEAP[$aj_lm1] = $34;
      
      
      
      
      
      
      
      
      var $43 = HEAP[$aj_lm1] * HEAP[$aj_lm1] + HEAP[$result] - HEAP[$aj_m1] * HEAP[$aj_m1];
      HEAP[$result] = $43;
      
      
      
      if (HEAP[$result] > HEAP[$best_result]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $47 = HEAP[$result];
      HEAP[$best_result] = $47;
      var $48 = HEAP[$j];
      HEAP[$best_j] = $48;
      __label__ = 10;
      break;
     case 10:
      
      var $50 = HEAP[$j] + 1;
      HEAP[$j] = $50;
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      
      if (HEAP[$len1] - HEAP[$len2] >= HEAP[$j]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $56 = HEAP[$best_j];
      var $57 = _PyInt_FromLong($56);
      HEAP[$0] = $57;
      __label__ = 13;
      break;
     case 13:
      var $58 = HEAP[$0];
      HEAP[$retval] = $58;
      __label__ = 14;
      break;
     case 14:
      var $retval15 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_avgpp($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 72;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp = __stackBase__ + 16;
      var $len = __stackBase__ + 20;
      var $size = __stackBase__ + 24;
      var $val = __stackBase__ + 28;
      var $prevval = __stackBase__ + 32;
      var $prevextremevalid = __stackBase__ + 36;
      var $prevextreme = __stackBase__ + 40;
      var $i = __stackBase__ + 44;
      var $avg = __stackBase__ + 48;
      var $diff = __stackBase__ + 56;
      var $prevdiff = __stackBase__ + 60;
      var $extremediff = __stackBase__ + 64;
      var $nextreme = __stackBase__ + 68;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$val] = 0;
      HEAP[$prevval] = 0;
      HEAP[$prevextremevalid] = 0;
      HEAP[$prevextreme] = 0;
      HEAP[$avg] = 0;
      HEAP[$nextreme] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str17, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 37;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 37;
      break;
     case 4:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      var $13 = HEAP[HEAP[$cp]];
      HEAP[$prevval] = $13;
      __label__ = 10;
      break;
     case 6:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $20 = HEAP[HEAP[$cp]];
      HEAP[$prevval] = $20;
      __label__ = 10;
      break;
     case 8:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      var $26 = HEAP[HEAP[$cp]];
      HEAP[$prevval] = $26;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $33 = HEAP[HEAP[$cp] + HEAP[$size]];
      HEAP[$val] = $33;
      __label__ = 16;
      break;
     case 12:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      var $41 = HEAP[HEAP[$cp] + HEAP[$size]];
      HEAP[$val] = $41;
      __label__ = 16;
      break;
     case 14:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $48 = HEAP[HEAP[$cp] + HEAP[$size]];
      HEAP[$val] = $48;
      __label__ = 16;
      break;
     case 16:
      
      
      var $51 = HEAP[$val] - HEAP[$prevval];
      HEAP[$prevdiff] = $51;
      var $52 = HEAP[$size];
      HEAP[$i] = $52;
      __label__ = 32;
      break;
     case 17:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $59 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $59;
      __label__ = 23;
      break;
     case 19:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      
      var $67 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $67;
      __label__ = 23;
      break;
     case 21:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $74 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $74;
      __label__ = 23;
      break;
     case 23:
      
      
      var $77 = HEAP[$val] - HEAP[$prevval];
      HEAP[$diff] = $77;
      
      
      
      
      if (HEAP[$diff] * HEAP[$prevdiff] < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 24:
      
      
      if (HEAP[$prevextremevalid] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 25:
      
      
      var $86 = HEAP[$prevval] - HEAP[$prevextreme];
      HEAP[$extremediff] = $86;
      
      
      if (HEAP[$extremediff] < 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      var $90 = 0 - HEAP[$extremediff];
      HEAP[$extremediff] = $90;
      __label__ = 27;
      break;
     case 27:
      
      
      
      var $94 = HEAP[$extremediff] + HEAP[$avg];
      HEAP[$avg] = $94;
      
      var $96 = HEAP[$nextreme] + 1;
      HEAP[$nextreme] = $96;
      __label__ = 28;
      break;
     case 28:
      HEAP[$prevextremevalid] = 1;
      var $97 = HEAP[$prevval];
      HEAP[$prevextreme] = $97;
      __label__ = 29;
      break;
     case 29:
      var $98 = HEAP[$val];
      HEAP[$prevval] = $98;
      
      
      if (HEAP[$diff] != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      var $101 = HEAP[$diff];
      HEAP[$prevdiff] = $101;
      __label__ = 31;
      break;
     case 31:
      
      
      var $104 = HEAP[$i] + HEAP[$size];
      HEAP[$i] = $104;
      __label__ = 32;
      break;
     case 32:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      if (HEAP[$nextreme] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      HEAP[$val] = 0;
      __label__ = 36;
      break;
     case 35:
      
      
      
      
      var $114 = HEAP[$avg] / HEAP[$nextreme] | 0;
      HEAP[$val] = $114;
      __label__ = 36;
      break;
     case 36:
      var $115 = HEAP[$val];
      var $116 = _PyInt_FromLong($115);
      HEAP[$0] = $116;
      __label__ = 37;
      break;
     case 37:
      var $117 = HEAP[$0];
      HEAP[$retval] = $117;
      __label__ = 38;
      break;
     case 38:
      var $retval37 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval37;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_maxpp($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 64;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp = __stackBase__ + 16;
      var $len = __stackBase__ + 20;
      var $size = __stackBase__ + 24;
      var $val = __stackBase__ + 28;
      var $prevval = __stackBase__ + 32;
      var $prevextremevalid = __stackBase__ + 36;
      var $prevextreme = __stackBase__ + 40;
      var $i = __stackBase__ + 44;
      var $max = __stackBase__ + 48;
      var $diff = __stackBase__ + 52;
      var $prevdiff = __stackBase__ + 56;
      var $extremediff = __stackBase__ + 60;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$val] = 0;
      HEAP[$prevval] = 0;
      HEAP[$prevextremevalid] = 0;
      HEAP[$prevextreme] = 0;
      HEAP[$max] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str18, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 35;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 35;
      break;
     case 4:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      var $13 = HEAP[HEAP[$cp]];
      HEAP[$prevval] = $13;
      __label__ = 10;
      break;
     case 6:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $20 = HEAP[HEAP[$cp]];
      HEAP[$prevval] = $20;
      __label__ = 10;
      break;
     case 8:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      var $26 = HEAP[HEAP[$cp]];
      HEAP[$prevval] = $26;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $33 = HEAP[HEAP[$cp] + HEAP[$size]];
      HEAP[$val] = $33;
      __label__ = 16;
      break;
     case 12:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      var $41 = HEAP[HEAP[$cp] + HEAP[$size]];
      HEAP[$val] = $41;
      __label__ = 16;
      break;
     case 14:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $48 = HEAP[HEAP[$cp] + HEAP[$size]];
      HEAP[$val] = $48;
      __label__ = 16;
      break;
     case 16:
      
      
      var $51 = HEAP[$val] - HEAP[$prevval];
      HEAP[$prevdiff] = $51;
      var $52 = HEAP[$size];
      HEAP[$i] = $52;
      __label__ = 33;
      break;
     case 17:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $59 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $59;
      __label__ = 23;
      break;
     case 19:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      
      var $67 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $67;
      __label__ = 23;
      break;
     case 21:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $74 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $74;
      __label__ = 23;
      break;
     case 23:
      
      
      var $77 = HEAP[$val] - HEAP[$prevval];
      HEAP[$diff] = $77;
      
      
      
      
      if (HEAP[$diff] * HEAP[$prevdiff] < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 24:
      
      
      if (HEAP[$prevextremevalid] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 25:
      
      
      var $86 = HEAP[$prevval] - HEAP[$prevextreme];
      HEAP[$extremediff] = $86;
      
      
      if (HEAP[$extremediff] < 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      var $90 = 0 - HEAP[$extremediff];
      HEAP[$extremediff] = $90;
      __label__ = 27;
      break;
     case 27:
      
      
      
      if (HEAP[$extremediff] > HEAP[$max]) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      var $94 = HEAP[$extremediff];
      HEAP[$max] = $94;
      __label__ = 29;
      break;
     case 29:
      HEAP[$prevextremevalid] = 1;
      var $95 = HEAP[$prevval];
      HEAP[$prevextreme] = $95;
      __label__ = 30;
      break;
     case 30:
      var $96 = HEAP[$val];
      HEAP[$prevval] = $96;
      
      
      if (HEAP[$diff] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      var $99 = HEAP[$diff];
      HEAP[$prevdiff] = $99;
      __label__ = 32;
      break;
     case 32:
      
      
      var $102 = HEAP[$i] + HEAP[$size];
      HEAP[$i] = $102;
      __label__ = 33;
      break;
     case 33:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      var $106 = HEAP[$max];
      var $107 = _PyInt_FromLong($106);
      HEAP[$0] = $107;
      __label__ = 35;
      break;
     case 35:
      var $108 = HEAP[$0];
      HEAP[$retval] = $108;
      __label__ = 36;
      break;
     case 36:
      var $retval35 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval35;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_cross($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp = __stackBase__ + 16;
      var $len = __stackBase__ + 20;
      var $size = __stackBase__ + 24;
      var $val = __stackBase__ + 28;
      var $i = __stackBase__ + 32;
      var $prevval = __stackBase__ + 36;
      var $ncross = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$val] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str19, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 4:
      HEAP[$ncross] = -1;
      HEAP[$prevval] = 17;
      HEAP[$i] = 0;
      __label__ = 14;
      break;
     case 5:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      var $15 = HEAP[HEAP[$cp] + HEAP[$i]] >> 7;
      HEAP[$val] = $15;
      __label__ = 11;
      break;
     case 7:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $24 = HEAP[HEAP[$cp] + HEAP[$i]] >> 15;
      HEAP[$val] = $24;
      __label__ = 11;
      break;
     case 9:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      var $32 = HEAP[HEAP[$cp] + HEAP[$i]] >> 31;
      HEAP[$val] = $32;
      __label__ = 11;
      break;
     case 11:
      
      var $34 = HEAP[$val] & 1;
      HEAP[$val] = $34;
      
      
      
      if (HEAP[$val] != HEAP[$prevval]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      var $39 = HEAP[$ncross] + 1;
      HEAP[$ncross] = $39;
      __label__ = 13;
      break;
     case 13:
      var $40 = HEAP[$val];
      HEAP[$prevval] = $40;
      
      
      var $43 = HEAP[$i] + HEAP[$size];
      HEAP[$i] = $43;
      __label__ = 14;
      break;
     case 14:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $47 = HEAP[$ncross];
      var $48 = _PyInt_FromLong($47);
      HEAP[$0] = $48;
      __label__ = 16;
      break;
     case 16:
      var $49 = HEAP[$0];
      HEAP[$retval] = $49;
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
  function _audioop_mul($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 68;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp = __stackBase__ + 16;
      var $ncp = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $size = __stackBase__ + 28;
      var $val = __stackBase__ + 32;
      var $factor = __stackBase__ + 36;
      var $fval = __stackBase__ + 44;
      var $maxval = __stackBase__ + 52;
      var $rv = __stackBase__ + 60;
      var $i = __stackBase__ + 64;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$val] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str20, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $factor, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "double*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 33;
      break;
     case 4:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$maxval] = 127;
      __label__ = 11;
      break;
     case 6:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$maxval] = 32767;
      __label__ = 11;
      break;
     case 8:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$maxval] = 2147483647;
      __label__ = 11;
      break;
     case 10:
      var $14 = HEAP[_AudioopError];
      _PyErr_SetString($14, __str);
      HEAP[$0] = 0;
      __label__ = 33;
      break;
     case 11:
      var $15 = HEAP[$len];
      var $16 = _PyString_FromStringAndSize(0, $15);
      HEAP[$rv] = $16;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$0] = 0;
      __label__ = 33;
      break;
     case 13:
      var $19 = HEAP[$rv];
      var $20 = _PyString_AsString($19);
      HEAP[$ncp] = $20;
      HEAP[$i] = 0;
      __label__ = 31;
      break;
     case 14:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $27 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $27;
      __label__ = 20;
      break;
     case 16:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      var $35 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $35;
      __label__ = 20;
      break;
     case 18:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $42 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $42;
      __label__ = 20;
      break;
     case 20:
      
      
      
      var $46 = HEAP[$val] * HEAP[$factor];
      HEAP[$fval] = $46;
      
      
      
      if (HEAP[$fval] > HEAP[$maxval]) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      var $50 = HEAP[$maxval];
      HEAP[$fval] = $50;
      __label__ = 24;
      break;
     case 22:
      
      
      
      
      if (0 - HEAP[$maxval] > HEAP[$fval]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      var $56 = 0 - HEAP[$maxval];
      HEAP[$fval] = $56;
      __label__ = 24;
      break;
     case 24:
      
      var $58 = HEAP[$fval] | 0;
      HEAP[$val] = $58;
      
      
      if (HEAP[$size] == 1) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      var $62 = HEAP[$val] & 255;
      
      
      var $65 = HEAP[$ncp] + HEAP[$i];
      HEAP[$65] = $62;
      __label__ = 30;
      break;
     case 26:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      var $71 = HEAP[$ncp] + HEAP[$i];
      
      var $73 = HEAP[$val] & 65535;
      HEAP[$71] = $73;
      __label__ = 30;
      break;
     case 28:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      var $79 = HEAP[$ncp] + HEAP[$i];
      var $80 = HEAP[$val];
      HEAP[$79] = $80;
      __label__ = 30;
      break;
     case 30:
      
      
      var $83 = HEAP[$i] + HEAP[$size];
      HEAP[$i] = $83;
      __label__ = 31;
      break;
     case 31:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      var $87 = HEAP[$rv];
      HEAP[$0] = $87;
      __label__ = 33;
      break;
     case 33:
      var $88 = HEAP[$0];
      HEAP[$retval] = $88;
      __label__ = 34;
      break;
     case 34:
      var $retval33 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval33;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_tomono($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 80;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 80);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp = __stackBase__ + 16;
      var $ncp = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $size = __stackBase__ + 28;
      var $val1 = __stackBase__ + 32;
      var $val2 = __stackBase__ + 36;
      var $fac1 = __stackBase__ + 40;
      var $fac2 = __stackBase__ + 48;
      var $fval = __stackBase__ + 56;
      var $maxval = __stackBase__ + 64;
      var $rv = __stackBase__ + 72;
      var $i = __stackBase__ + 76;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$val1] = 0;
      HEAP[$val2] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str21, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $fac1, 0, 0, 0, $fac2, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "double*", 0, 0, 0, "double*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 41;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 41;
      break;
     case 4:
      
      
      
      
      
      
      if (((HEAP[$len] / HEAP[$size] | 0) & 1 & 255) != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $13 = HEAP[_AudioopError];
      _PyErr_SetString($13, __str1);
      HEAP[$0] = 0;
      __label__ = 41;
      break;
     case 6:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$maxval] = 127;
      __label__ = 13;
      break;
     case 8:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$maxval] = 32767;
      __label__ = 13;
      break;
     case 10:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$maxval] = 2147483647;
      __label__ = 13;
      break;
     case 12:
      var $20 = HEAP[_AudioopError];
      _PyErr_SetString($20, __str);
      HEAP[$0] = 0;
      __label__ = 41;
      break;
     case 13:
      
      var $22 = HEAP[$len] / 2 | 0;
      var $23 = _PyString_FromStringAndSize(0, $22);
      HEAP[$rv] = $23;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = 0;
      __label__ = 41;
      break;
     case 15:
      var $26 = HEAP[$rv];
      var $27 = _PyString_AsString($26);
      HEAP[$ncp] = $27;
      HEAP[$i] = 0;
      __label__ = 39;
      break;
     case 16:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $34 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val1] = $34;
      __label__ = 22;
      break;
     case 18:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      var $42 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val1] = $42;
      __label__ = 22;
      break;
     case 20:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $49 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val1] = $49;
      __label__ = 22;
      break;
     case 22:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      
      var $57 = HEAP[HEAP[$cp] + HEAP[$i] + 1];
      HEAP[$val2] = $57;
      __label__ = 28;
      break;
     case 24:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      
      
      var $66 = HEAP[HEAP[$cp] + HEAP[$i] + 2];
      HEAP[$val2] = $66;
      __label__ = 28;
      break;
     case 26:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      
      var $74 = HEAP[HEAP[$cp] + HEAP[$i] + 4];
      HEAP[$val2] = $74;
      __label__ = 28;
      break;
     case 28:
      
      
      
      
      
      
      
      
      var $83 = HEAP[$val1] * HEAP[$fac1] + HEAP[$val2] * HEAP[$fac2];
      HEAP[$fval] = $83;
      
      
      
      if (HEAP[$fval] > HEAP[$maxval]) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $87 = HEAP[$maxval];
      HEAP[$fval] = $87;
      __label__ = 32;
      break;
     case 30:
      
      
      
      
      if (0 - HEAP[$maxval] > HEAP[$fval]) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      var $93 = 0 - HEAP[$maxval];
      HEAP[$fval] = $93;
      __label__ = 32;
      break;
     case 32:
      
      var $95 = HEAP[$fval] | 0;
      HEAP[$val1] = $95;
      
      
      if (HEAP[$size] == 1) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      var $101 = HEAP[$val1] & 255;
      
      var $103 = HEAP[$ncp] + (HEAP[$i] / 2 | 0);
      HEAP[$103] = $101;
      __label__ = 38;
      break;
     case 34:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $110 = HEAP[$ncp] + (HEAP[$i] / 2 | 0);
      
      var $112 = HEAP[$val1] & 65535;
      HEAP[$110] = $112;
      __label__ = 38;
      break;
     case 36:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $119 = HEAP[$ncp] + (HEAP[$i] / 2 | 0);
      var $120 = HEAP[$val1];
      HEAP[$119] = $120;
      __label__ = 38;
      break;
     case 38:
      
      
      
      var $124 = HEAP[$size] * 2 + HEAP[$i];
      HEAP[$i] = $124;
      __label__ = 39;
      break;
     case 39:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      var $128 = HEAP[$rv];
      HEAP[$0] = $128;
      __label__ = 41;
      break;
     case 41:
      var $129 = HEAP[$0];
      HEAP[$retval] = $129;
      __label__ = 42;
      break;
     case 42:
      var $retval41 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval41;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_tostereo($self, $args) {
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
      var $0 = __stackBase__ + 12;
      var $cp = __stackBase__ + 16;
      var $ncp = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $size = __stackBase__ + 28;
      var $val1 = __stackBase__ + 32;
      var $val2 = __stackBase__ + 36;
      var $val = __stackBase__ + 40;
      var $fac1 = __stackBase__ + 44;
      var $fac2 = __stackBase__ + 52;
      var $fval = __stackBase__ + 60;
      var $maxval = __stackBase__ + 68;
      var $rv = __stackBase__ + 76;
      var $i = __stackBase__ + 80;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$val] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str22, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $fac1, 0, 0, 0, $fac2, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "double*", 0, 0, 0, "double*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 4:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$maxval] = 127;
      __label__ = 11;
      break;
     case 6:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$maxval] = 32767;
      __label__ = 11;
      break;
     case 8:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$maxval] = 2147483647;
      __label__ = 11;
      break;
     case 10:
      var $14 = HEAP[_AudioopError];
      _PyErr_SetString($14, __str);
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 11:
      
      
      if (HEAP[$len] > 1073741823) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $17 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($17, __str23);
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 13:
      
      var $19 = HEAP[$len] * 2;
      var $20 = _PyString_FromStringAndSize(0, $19);
      HEAP[$rv] = $20;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 15:
      var $23 = HEAP[$rv];
      var $24 = _PyString_AsString($23);
      HEAP[$ncp] = $24;
      HEAP[$i] = 0;
      __label__ = 43;
      break;
     case 16:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $31 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $31;
      __label__ = 22;
      break;
     case 18:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      var $39 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $39;
      __label__ = 22;
      break;
     case 20:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $46 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $46;
      __label__ = 22;
      break;
     case 22:
      
      
      
      var $50 = HEAP[$val] * HEAP[$fac1];
      HEAP[$fval] = $50;
      
      
      
      if (HEAP[$fval] > HEAP[$maxval]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      var $54 = HEAP[$maxval];
      HEAP[$fval] = $54;
      __label__ = 26;
      break;
     case 24:
      
      
      
      
      if (0 - HEAP[$maxval] > HEAP[$fval]) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      var $60 = 0 - HEAP[$maxval];
      HEAP[$fval] = $60;
      __label__ = 26;
      break;
     case 26:
      
      var $62 = HEAP[$fval] | 0;
      HEAP[$val1] = $62;
      
      
      
      var $66 = HEAP[$val] * HEAP[$fac2];
      HEAP[$fval] = $66;
      
      
      
      if (HEAP[$fval] > HEAP[$maxval]) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $70 = HEAP[$maxval];
      HEAP[$fval] = $70;
      __label__ = 30;
      break;
     case 28:
      
      
      
      
      if (0 - HEAP[$maxval] > HEAP[$fval]) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      var $76 = 0 - HEAP[$maxval];
      HEAP[$fval] = $76;
      __label__ = 30;
      break;
     case 30:
      
      var $78 = HEAP[$fval] | 0;
      HEAP[$val2] = $78;
      
      
      if (HEAP[$size] == 1) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      var $84 = HEAP[$val1] & 255;
      
      var $86 = HEAP[$ncp] + HEAP[$i] * 2;
      HEAP[$86] = $84;
      __label__ = 36;
      break;
     case 32:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $93 = HEAP[$ncp] + HEAP[$i] * 2;
      
      var $95 = HEAP[$val1] & 65535;
      HEAP[$93] = $95;
      __label__ = 36;
      break;
     case 34:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $102 = HEAP[$ncp] + HEAP[$i] * 2;
      var $103 = HEAP[$val1];
      HEAP[$102] = $103;
      __label__ = 36;
      break;
     case 36:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      
      var $111 = HEAP[$val2] & 255;
      var $112 = HEAP[$ncp] + HEAP[$i] * 2 + 1;
      HEAP[$112] = $111;
      __label__ = 42;
      break;
     case 38:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      
      var $120 = HEAP[$ncp] + HEAP[$i] * 2 + 2;
      
      var $122 = HEAP[$val2] & 65535;
      HEAP[$120] = $122;
      __label__ = 42;
      break;
     case 40:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      
      var $130 = HEAP[$ncp] + HEAP[$i] * 2 + 4;
      var $131 = HEAP[$val2];
      HEAP[$130] = $131;
      __label__ = 42;
      break;
     case 42:
      
      
      var $134 = HEAP[$i] + HEAP[$size];
      HEAP[$i] = $134;
      __label__ = 43;
      break;
     case 43:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      var $138 = HEAP[$rv];
      HEAP[$0] = $138;
      __label__ = 45;
      break;
     case 45:
      var $139 = HEAP[$0];
      HEAP[$retval] = $139;
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
  function _audioop_add($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 68;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_286 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $cp1 = __stackBase__ + 20;
      var $cp2 = __stackBase__ + 24;
      var $ncp = __stackBase__ + 28;
      var $len1 = __stackBase__ + 32;
      var $len2 = __stackBase__ + 36;
      var $size = __stackBase__ + 40;
      var $val1 = __stackBase__ + 44;
      var $val2 = __stackBase__ + 48;
      var $maxval = __stackBase__ + 52;
      var $newval = __stackBase__ + 56;
      var $rv = __stackBase__ + 60;
      var $i = __stackBase__ + 64;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$val1] = 0;
      HEAP[$val2] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str24, allocate([ $cp1, 0, 0, 0, $len1, 0, 0, 0, $cp2, 0, 0, 0, $len2, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len1];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
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
      
      
      
      if (HEAP[$len1] != HEAP[$len2]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $11 = HEAP[_AudioopError];
      _PyErr_SetString($11, __str25);
      HEAP[$0] = 0;
      __label__ = 48;
      break;
     case 6:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$maxval] = 127;
      __label__ = 13;
      break;
     case 8:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$maxval] = 32767;
      __label__ = 13;
      break;
     case 10:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$maxval] = 2147483647;
      __label__ = 13;
      break;
     case 12:
      var $18 = HEAP[_AudioopError];
      _PyErr_SetString($18, __str);
      HEAP[$0] = 0;
      __label__ = 48;
      break;
     case 13:
      var $19 = HEAP[$len1];
      var $20 = _PyString_FromStringAndSize(0, $19);
      HEAP[$rv] = $20;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = 0;
      __label__ = 48;
      break;
     case 15:
      var $23 = HEAP[$rv];
      var $24 = _PyString_AsString($23);
      HEAP[$ncp] = $24;
      HEAP[$i] = 0;
      __label__ = 46;
      break;
     case 16:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $31 = HEAP[HEAP[$cp1] + HEAP[$i]];
      HEAP[$val1] = $31;
      __label__ = 22;
      break;
     case 18:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      var $39 = HEAP[HEAP[$cp1] + HEAP[$i]];
      HEAP[$val1] = $39;
      __label__ = 22;
      break;
     case 20:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $46 = HEAP[HEAP[$cp1] + HEAP[$i]];
      HEAP[$val1] = $46;
      __label__ = 22;
      break;
     case 22:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $53 = HEAP[HEAP[$cp2] + HEAP[$i]];
      HEAP[$val2] = $53;
      __label__ = 28;
      break;
     case 24:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      
      var $61 = HEAP[HEAP[$cp2] + HEAP[$i]];
      HEAP[$val2] = $61;
      __label__ = 28;
      break;
     case 26:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $68 = HEAP[HEAP[$cp2] + HEAP[$i]];
      HEAP[$val2] = $68;
      __label__ = 28;
      break;
     case 28:
      
      
      var $71 = HEAP[$val1] + HEAP[$val2];
      HEAP[$newval] = $71;
      
      
      
      if (HEAP[$newval] > HEAP[$maxval]) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $75 = HEAP[$maxval];
      HEAP[$newval] = $75;
      __label__ = 39;
      break;
     case 30:
      
      
      
      
      if (0 - HEAP[$maxval] > HEAP[$newval]) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      var $81 = 0 - HEAP[$maxval];
      HEAP[$newval] = $81;
      __label__ = 39;
      break;
     case 32:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 33;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 33:
      
      
      
      
      if ((HEAP[$newval] ^ HEAP[$val1]) < 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 34:
      
      
      
      
      if ((HEAP[$newval] ^ HEAP[$val2]) < 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 35:
      
      
      if (HEAP[$val1] <= 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      var $95 = 0 - HEAP[$maxval];
      HEAP[$iftmp_286] = $95;
      __label__ = 38;
      break;
     case 37:
      var $96 = HEAP[$maxval];
      HEAP[$iftmp_286] = $96;
      __label__ = 38;
      break;
     case 38:
      var $97 = HEAP[$iftmp_286];
      HEAP[$newval] = $97;
      __label__ = 39;
      break;
     case 39:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      var $101 = HEAP[$newval] & 255;
      
      
      var $104 = HEAP[$ncp] + HEAP[$i];
      HEAP[$104] = $101;
      __label__ = 45;
      break;
     case 41:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      var $110 = HEAP[$ncp] + HEAP[$i];
      
      var $112 = HEAP[$newval] & 65535;
      HEAP[$110] = $112;
      __label__ = 45;
      break;
     case 43:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      var $118 = HEAP[$ncp] + HEAP[$i];
      var $119 = HEAP[$newval];
      HEAP[$118] = $119;
      __label__ = 45;
      break;
     case 45:
      
      
      var $122 = HEAP[$i] + HEAP[$size];
      HEAP[$i] = $122;
      __label__ = 46;
      break;
     case 46:
      
      
      
      if (HEAP[$i] < HEAP[$len1]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 47:
      var $126 = HEAP[$rv];
      HEAP[$0] = $126;
      __label__ = 48;
      break;
     case 48:
      var $127 = HEAP[$0];
      HEAP[$retval] = $127;
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
  function _audioop_bias($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp = __stackBase__ + 16;
      var $ncp = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $size = __stackBase__ + 28;
      var $val = __stackBase__ + 32;
      var $rv = __stackBase__ + 36;
      var $i = __stackBase__ + 40;
      var $bias = __stackBase__ + 44;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$val] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str26, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $bias, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 4:
      var $8 = HEAP[$len];
      var $9 = _PyString_FromStringAndSize(0, $8);
      HEAP[$rv] = $9;
      
      
      if (HEAP[$rv] == 0) {
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
      var $12 = HEAP[$rv];
      var $13 = _PyString_AsString($12);
      HEAP[$ncp] = $13;
      HEAP[$i] = 0;
      __label__ = 20;
      break;
     case 7:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $20 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $20;
      __label__ = 13;
      break;
     case 9:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      var $28 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $28;
      __label__ = 13;
      break;
     case 11:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $35 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $35;
      __label__ = 13;
      break;
     case 13:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $42 = (HEAP[$val] & 255) + (HEAP[$bias] & 255);
      
      
      var $45 = HEAP[$ncp] + HEAP[$i];
      HEAP[$45] = $42;
      __label__ = 19;
      break;
     case 15:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      var $51 = HEAP[$ncp] + HEAP[$i];
      
      
      
      
      var $56 = (HEAP[$val] & 65535) + (HEAP[$bias] & 65535);
      HEAP[$51] = $56;
      __label__ = 19;
      break;
     case 17:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      var $62 = HEAP[$ncp] + HEAP[$i];
      
      
      var $65 = HEAP[$val] + HEAP[$bias];
      HEAP[$62] = $65;
      __label__ = 19;
      break;
     case 19:
      
      
      var $68 = HEAP[$i] + HEAP[$size];
      HEAP[$i] = $68;
      __label__ = 20;
      break;
     case 20:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      var $72 = HEAP[$rv];
      HEAP[$0] = $72;
      __label__ = 22;
      break;
     case 22:
      var $73 = HEAP[$0];
      HEAP[$retval] = $73;
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
  function _audioop_reverse($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp = __stackBase__ + 16;
      var $ncp = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $size = __stackBase__ + 28;
      var $val = __stackBase__ + 32;
      var $rv = __stackBase__ + 36;
      var $i = __stackBase__ + 40;
      var $j = __stackBase__ + 44;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$val] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str27, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 4:
      var $8 = HEAP[$len];
      var $9 = _PyString_FromStringAndSize(0, $8);
      HEAP[$rv] = $9;
      
      
      if (HEAP[$rv] == 0) {
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
      var $12 = HEAP[$rv];
      var $13 = _PyString_AsString($12);
      HEAP[$ncp] = $13;
      HEAP[$i] = 0;
      __label__ = 20;
      break;
     case 7:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $21 = HEAP[HEAP[$cp] + HEAP[$i]] << 8;
      HEAP[$val] = $21;
      __label__ = 13;
      break;
     case 9:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      var $29 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $29;
      __label__ = 13;
      break;
     case 11:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      var $37 = HEAP[HEAP[$cp] + HEAP[$i]] >> 16;
      HEAP[$val] = $37;
      __label__ = 13;
      break;
     case 13:
      
      
      
      
      var $42 = HEAP[$len] - HEAP[$i] - HEAP[$size];
      HEAP[$j] = $42;
      
      
      if (HEAP[$size] == 1) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      var $47 = HEAP[$ncp] + HEAP[$j];
      
      
      var $50 = HEAP[$val] >> 8 & 255;
      HEAP[$47] = $50;
      __label__ = 19;
      break;
     case 15:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      var $56 = HEAP[$ncp] + HEAP[$j];
      
      var $58 = HEAP[$val] & 65535;
      HEAP[$56] = $58;
      __label__ = 19;
      break;
     case 17:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      var $64 = HEAP[$ncp] + HEAP[$j];
      
      var $66 = HEAP[$val] << 16;
      HEAP[$64] = $66;
      __label__ = 19;
      break;
     case 19:
      
      
      var $69 = HEAP[$i] + HEAP[$size];
      HEAP[$i] = $69;
      __label__ = 20;
      break;
     case 20:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      var $73 = HEAP[$rv];
      HEAP[$0] = $73;
      __label__ = 22;
      break;
     case 22:
      var $74 = HEAP[$0];
      HEAP[$retval] = $74;
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
  function _audioop_lin2lin($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp = __stackBase__ + 16;
      var $ncp = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $size = __stackBase__ + 28;
      var $size2 = __stackBase__ + 32;
      var $val = __stackBase__ + 36;
      var $rv = __stackBase__ + 40;
      var $i = __stackBase__ + 44;
      var $j = __stackBase__ + 48;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$val] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str28, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $size2, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 26;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 26;
      break;
     case 4:
      var $8 = HEAP[$size2];
      var $9 = _audioop_check_size($8);
      
      if ($9 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 26;
      break;
     case 6:
      
      
      
      
      
      
      if ((HEAP[$len] / HEAP[$size] | 0) > (2147483647 / HEAP[$size2] | 0)) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $17 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($17, __str23);
      HEAP[$0] = 0;
      __label__ = 26;
      break;
     case 8:
      
      
      
      
      var $22 = (HEAP[$len] / HEAP[$size] | 0) * HEAP[$size2];
      var $23 = _PyString_FromStringAndSize(0, $22);
      HEAP[$rv] = $23;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = 0;
      __label__ = 26;
      break;
     case 10:
      var $26 = HEAP[$rv];
      var $27 = _PyString_AsString($26);
      HEAP[$ncp] = $27;
      HEAP[$i] = 0;
      HEAP[$j] = 0;
      __label__ = 24;
      break;
     case 11:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      var $35 = HEAP[HEAP[$cp] + HEAP[$i]] << 8;
      HEAP[$val] = $35;
      __label__ = 17;
      break;
     case 13:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      var $43 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $43;
      __label__ = 17;
      break;
     case 15:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      var $51 = HEAP[HEAP[$cp] + HEAP[$i]] >> 16;
      HEAP[$val] = $51;
      __label__ = 17;
      break;
     case 17:
      
      
      if (HEAP[$size2] == 1) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      var $56 = HEAP[$ncp] + HEAP[$j];
      
      
      var $59 = HEAP[$val] >> 8 & 255;
      HEAP[$56] = $59;
      __label__ = 23;
      break;
     case 19:
      
      
      if (HEAP[$size2] == 2) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      var $65 = HEAP[$ncp] + HEAP[$j];
      
      var $67 = HEAP[$val] & 65535;
      HEAP[$65] = $67;
      __label__ = 23;
      break;
     case 21:
      
      
      if (HEAP[$size2] == 4) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      var $73 = HEAP[$ncp] + HEAP[$j];
      
      var $75 = HEAP[$val] << 16;
      HEAP[$73] = $75;
      __label__ = 23;
      break;
     case 23:
      
      
      var $78 = HEAP[$i] + HEAP[$size];
      HEAP[$i] = $78;
      
      
      var $81 = HEAP[$j] + HEAP[$size2];
      HEAP[$j] = $81;
      __label__ = 24;
      break;
     case 24:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      var $85 = HEAP[$rv];
      HEAP[$0] = $85;
      __label__ = 26;
      break;
     case 26:
      var $86 = HEAP[$0];
      HEAP[$retval] = $86;
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
  function _gcd($a, $b) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr = __stackBase__;
      var $b_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $tmp = __stackBase__ + 16;
      
      HEAP[$a_addr] = $a;
      HEAP[$b_addr] = $b;
      __label__ = 2;
      break;
     case 1:
      
      
      var $3 = HEAP[$a_addr] % HEAP[$b_addr];
      HEAP[$tmp] = $3;
      var $4 = HEAP[$b_addr];
      HEAP[$a_addr] = $4;
      var $5 = HEAP[$tmp];
      HEAP[$b_addr] = $5;
      __label__ = 2;
      break;
     case 2:
      
      
      if (HEAP[$b_addr] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $8 = HEAP[$a_addr];
      HEAP[$0] = $8;
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
  function _audioop_ratecv($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 100;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 100);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_386 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $cp = __stackBase__ + 20;
      var $ncp = __stackBase__ + 24;
      var $len = __stackBase__ + 28;
      var $size = __stackBase__ + 32;
      var $nchannels = __stackBase__ + 36;
      var $inrate = __stackBase__ + 40;
      var $outrate = __stackBase__ + 44;
      var $weightA = __stackBase__ + 48;
      var $weightB = __stackBase__ + 52;
      var $chan = __stackBase__ + 56;
      var $d = __stackBase__ + 60;
      var $prev_i = __stackBase__ + 64;
      var $cur_i = __stackBase__ + 68;
      var $cur_o = __stackBase__ + 72;
      var $state = __stackBase__ + 76;
      var $samps = __stackBase__ + 80;
      var $str = __stackBase__ + 84;
      var $rv = __stackBase__ + 88;
      var $bytes_per_frame = __stackBase__ + 92;
      var $q = __stackBase__ + 96;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$rv] = 0;
      HEAP[$weightA] = 1;
      HEAP[$weightB] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str29, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $nchannels, 0, 0, 0, $inrate, 0, 0, 0, $outrate, 0, 0, 0, $state, 0, 0, 0, $weightA, 0, 0, 0, $weightB, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = _audioop_check_size($4);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 4:
      
      
      if (HEAP[$nchannels] <= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $9 = HEAP[_AudioopError];
      _PyErr_SetString($9, __str30);
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 6:
      
      
      var $12 = HEAP[$size] * HEAP[$nchannels];
      HEAP[$bytes_per_frame] = $12;
      
      
      
      
      
      if ((HEAP[$bytes_per_frame] / HEAP[$nchannels] | 0) != HEAP[$size]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $18 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($18, __str31);
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 8:
      
      
      if (HEAP[$weightA] <= 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$weightB] < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $23 = HEAP[_AudioopError];
      _PyErr_SetString($23, __str32);
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 11:
      
      
      
      
      if (HEAP[$len] % HEAP[$bytes_per_frame] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $28 = HEAP[_AudioopError];
      _PyErr_SetString($28, __str1);
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 13:
      
      
      if (HEAP[$inrate] <= 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if (HEAP[$outrate] <= 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $33 = HEAP[_AudioopError];
      _PyErr_SetString($33, __str33);
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 16:
      var $34 = HEAP[$outrate];
      var $35 = HEAP[$inrate];
      var $36 = _gcd($35, $34);
      HEAP[$d] = $36;
      
      
      var $39 = HEAP[$inrate] / HEAP[$d] | 0;
      HEAP[$inrate] = $39;
      
      
      var $42 = HEAP[$outrate] / HEAP[$d] | 0;
      HEAP[$outrate] = $42;
      
      
      if (HEAP[$nchannels] > 1073741823) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $45 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($45, __str23);
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 18:
      
      var $47 = HEAP[$nchannels] * 4;
      var $48 = _malloc($47);
      var $49 = $48;
      HEAP[$prev_i] = $49;
      
      var $51 = HEAP[$nchannels] * 4;
      var $52 = _malloc($51);
      var $53 = $52;
      HEAP[$cur_i] = $53;
      
      
      if (HEAP[$prev_i] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      if (HEAP[$cur_i] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $58 = _PyErr_NoMemory();
      __label__ = 83;
      break;
     case 21:
      
      
      var $61 = HEAP[$len] / HEAP[$bytes_per_frame] | 0;
      HEAP[$len] = $61;
      
      
      if (HEAP[$state] == __Py_NoneStruct) {
        __label__ = 22;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 22:
      
      var $65 = 0 - HEAP[$outrate];
      HEAP[$d] = $65;
      HEAP[$chan] = 0;
      __label__ = 24;
      break;
     case 23:
      
      
      var $68 = HEAP[$cur_i] + 4 * HEAP[$chan];
      HEAP[$68] = 0;
      
      
      
      var $72 = HEAP[HEAP[$cur_i] + 4 * HEAP[$chan]];
      
      
      var $75 = HEAP[$prev_i] + 4 * HEAP[$chan];
      HEAP[$75] = $72;
      
      var $77 = HEAP[$chan] + 1;
      HEAP[$chan] = $77;
      __label__ = 24;
      break;
     case 24:
      
      
      
      if (HEAP[$chan] < HEAP[$nchannels]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      __label__ = 33;
      break;
     case 26:
      var $81 = HEAP[$state];
      var $82 = _PyArg_ParseTuple($81, __str34, allocate([ $d, 0, 0, 0, _PyTuple_Type, 0, 0, 0, $samps, 0, 0, 0 ], [ "i32*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($82 == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      var $84 = HEAP[$samps];
      var $85 = _PyTuple_Size($84);
      
      
      if ($85 != HEAP[$nchannels]) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      var $88 = HEAP[_AudioopError];
      _PyErr_SetString($88, __str35);
      __label__ = 83;
      break;
     case 29:
      HEAP[$chan] = 0;
      __label__ = 32;
      break;
     case 30:
      
      
      var $91 = HEAP[$cur_i] + 4 * HEAP[$chan];
      
      
      var $94 = HEAP[$prev_i] + 4 * HEAP[$chan];
      var $95 = HEAP[$samps];
      var $96 = HEAP[$chan];
      var $97 = _PyTuple_GetItem($95, $96);
      var $98 = _PyArg_ParseTuple($97, __str36, allocate([ $94, 0, 0, 0, $91, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($98 == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      var $101 = HEAP[$chan] + 1;
      HEAP[$chan] = $101;
      __label__ = 32;
      break;
     case 32:
      
      
      
      if (HEAP[$chan] < HEAP[$nchannels]) {
        __label__ = 30;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      if (HEAP[$len] > 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $111 = ((HEAP[$len] - 1) / HEAP[$inrate] | 0) + 1;
      HEAP[$iftmp_386] = $111;
      __label__ = 36;
      break;
     case 35:
      HEAP[$iftmp_386] = 0;
      __label__ = 36;
      break;
     case 36:
      var $112 = HEAP[$iftmp_386];
      HEAP[$q] = $112;
      
      
      
      
      
      
      if (((2147483647 / HEAP[$q] | 0) / HEAP[$bytes_per_frame] | 0) < HEAP[$outrate]) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      HEAP[$str] = 0;
      __label__ = 39;
      break;
     case 38:
      
      
      
      
      var $123 = HEAP[$q] * HEAP[$outrate] * HEAP[$bytes_per_frame];
      var $124 = _PyString_FromStringAndSize(0, $123);
      HEAP[$str] = $124;
      __label__ = 39;
      break;
     case 39:
      
      
      if (HEAP[$str] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      var $127 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($127, __str23);
      __label__ = 83;
      break;
     case 41:
      var $128 = HEAP[$str];
      var $129 = _PyString_AsString($128);
      HEAP[$ncp] = $129;
      __label__ = 42;
      break;
     case 42:
      __label__ = 69;
      break;
     case 43:
      
      
      if (HEAP[$len] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 44:
      var $132 = HEAP[$nchannels];
      var $133 = _PyTuple_New($132);
      HEAP[$samps] = $133;
      
      
      if (HEAP[$samps] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 45:
      HEAP[$chan] = 0;
      __label__ = 47;
      break;
     case 46:
      
      
      
      var $139 = HEAP[HEAP[$cur_i] + 4 * HEAP[$chan]];
      
      
      
      var $143 = HEAP[HEAP[$prev_i] + 4 * HEAP[$chan]];
      var $144 = _Py_BuildValue(__str6, allocate([ $143, 0, 0, 0, $139, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      var $145 = HEAP[$samps];
      var $146 = HEAP[$chan];
      var $147 = _PyTuple_SetItem($145, $146, $144);
      
      var $149 = HEAP[$chan] + 1;
      HEAP[$chan] = $149;
      __label__ = 47;
      break;
     case 47:
      
      
      
      if (HEAP[$chan] < HEAP[$nchannels]) {
        __label__ = 46;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      var $153 = _PyErr_Occurred();
      
      if ($153 != 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 49:
      
      var $156 = HEAP[$ncp];
      var $157 = HEAP[$str];
      var $158 = _PyString_AsString($157);
      
      var $160 = $156 - $158;
      HEAP[$len] = $160;
      
      
      if (HEAP[$len] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 50:
      var $163 = _PyString_FromStringAndSize(__str37, 0);
      HEAP[$rv] = $163;
      var $164 = HEAP[$str];
      
      
      var $167 = HEAP[$164] - 1;
      var $168 = $164;
      HEAP[$168] = $167;
      
      
      
      if (HEAP[$164] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      
      
      
      
      var $176 = HEAP[HEAP[HEAP[$str] + 4] + 24];
      var $177 = HEAP[$str];
      FUNCTION_TABLE[$176]($177);
      __label__ = 52;
      break;
     case 52:
      var $178 = HEAP[$rv];
      HEAP[$str] = $178;
      __label__ = 54;
      break;
     case 53:
      var $179 = HEAP[$len];
      var $180 = __PyString_Resize($str, $179);
      
      if ($180 < 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 54:
      var $182 = HEAP[$samps];
      var $183 = HEAP[$d];
      var $184 = HEAP[$str];
      var $185 = _Py_BuildValue(__str38, allocate([ $184, 0, 0, 0, $183, 0, 0, 0, $182, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$rv] = $185;
      var $186 = HEAP[$samps];
      
      
      var $189 = HEAP[$186] - 1;
      var $190 = $186;
      HEAP[$190] = $189;
      
      
      
      if (HEAP[$186] == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      
      
      
      
      var $198 = HEAP[HEAP[HEAP[$samps] + 4] + 24];
      var $199 = HEAP[$samps];
      FUNCTION_TABLE[$198]($199);
      __label__ = 56;
      break;
     case 56:
      var $200 = HEAP[$str];
      
      
      var $203 = HEAP[$200] - 1;
      var $204 = $200;
      HEAP[$204] = $203;
      
      
      
      if (HEAP[$200] == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      
      
      
      
      var $212 = HEAP[HEAP[HEAP[$str] + 4] + 24];
      var $213 = HEAP[$str];
      FUNCTION_TABLE[$212]($213);
      __label__ = 58;
      break;
     case 58:
      __label__ = 83;
      break;
     case 59:
      HEAP[$chan] = 0;
      __label__ = 67;
      break;
     case 60:
      
      
      
      var $217 = HEAP[HEAP[$cur_i] + 4 * HEAP[$chan]];
      
      
      var $220 = HEAP[$prev_i] + 4 * HEAP[$chan];
      HEAP[$220] = $217;
      
      
      if (HEAP[$size] == 1) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      
      
      
      
      var $227 = HEAP[HEAP[$cp]] << 8;
      
      
      var $230 = HEAP[$cur_i] + 4 * HEAP[$chan];
      HEAP[$230] = $227;
      __label__ = 66;
      break;
     case 62:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      
      
      
      
      var $237 = HEAP[HEAP[$cp]];
      
      
      var $240 = HEAP[$cur_i] + 4 * HEAP[$chan];
      HEAP[$240] = $237;
      __label__ = 66;
      break;
     case 64:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      
      
      
      
      var $247 = HEAP[HEAP[$cp]] >> 16;
      
      
      var $250 = HEAP[$cur_i] + 4 * HEAP[$chan];
      HEAP[$250] = $247;
      __label__ = 66;
      break;
     case 66:
      
      
      var $253 = HEAP[$cp] + HEAP[$size];
      HEAP[$cp] = $253;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $270 = (HEAP[HEAP[$cur_i] + 4 * HEAP[$chan]] * HEAP[$weightA] + HEAP[HEAP[$prev_i] + 4 * HEAP[$chan]] * HEAP[$weightB]) / (HEAP[$weightA] + HEAP[$weightB]) | 0;
      
      
      var $273 = HEAP[$cur_i] + 4 * HEAP[$chan];
      HEAP[$273] = $270;
      
      var $275 = HEAP[$chan] + 1;
      HEAP[$chan] = $275;
      __label__ = 67;
      break;
     case 67:
      
      
      
      if (HEAP[$chan] < HEAP[$nchannels]) {
        __label__ = 60;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 68:
      
      var $280 = HEAP[$len] - 1;
      HEAP[$len] = $280;
      
      
      var $283 = HEAP[$d] + HEAP[$outrate];
      HEAP[$d] = $283;
      __label__ = 69;
      break;
     case 69:
      
      
      if (HEAP[$d] < 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 70:
      __label__ = 81;
      break;
     case 71:
      HEAP[$chan] = 0;
      __label__ = 79;
      break;
     case 72:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $302 = (HEAP[HEAP[$prev_i] + 4 * HEAP[$chan]] * HEAP[$d] + HEAP[HEAP[$cur_i] + 4 * HEAP[$chan]] * (HEAP[$outrate] - HEAP[$d])) / HEAP[$outrate] | 0;
      HEAP[$cur_o] = $302;
      
      
      if (HEAP[$size] == 1) {
        __label__ = 73;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 73:
      
      var $306 = HEAP[$ncp];
      
      
      var $309 = HEAP[$cur_o] >> 8 & 255;
      HEAP[$306] = $309;
      __label__ = 78;
      break;
     case 74:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      
      
      var $314 = HEAP[$ncp];
      
      var $316 = HEAP[$cur_o] & 65535;
      HEAP[$314] = $316;
      __label__ = 78;
      break;
     case 76:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 77;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 77:
      
      
      var $321 = HEAP[$ncp];
      
      var $323 = HEAP[$cur_o] << 16;
      HEAP[$321] = $323;
      __label__ = 78;
      break;
     case 78:
      
      
      var $326 = HEAP[$ncp] + HEAP[$size];
      HEAP[$ncp] = $326;
      
      var $328 = HEAP[$chan] + 1;
      HEAP[$chan] = $328;
      __label__ = 79;
      break;
     case 79:
      
      
      
      if (HEAP[$chan] < HEAP[$nchannels]) {
        __label__ = 72;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 80:
      
      
      var $334 = HEAP[$d] - HEAP[$inrate];
      HEAP[$d] = $334;
      __label__ = 81;
      break;
     case 81:
      
      
      if (HEAP[$d] >= 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 82:
      __label__ = 42;
      break;
     case 83:
      
      
      if (HEAP[$prev_i] != 0) {
        __label__ = 84;
        break;
      } else {
        __label__ = 85;
        break;
      }
     case 84:
      
      var $340 = HEAP[$prev_i];
      _free($340);
      __label__ = 85;
      break;
     case 85:
      
      
      if (HEAP[$cur_i] != 0) {
        __label__ = 86;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 86:
      
      var $344 = HEAP[$cur_i];
      _free($344);
      __label__ = 87;
      break;
     case 87:
      var $345 = HEAP[$rv];
      HEAP[$0] = $345;
      __label__ = 88;
      break;
     case 88:
      var $346 = HEAP[$0];
      HEAP[$retval] = $346;
      __label__ = 89;
      break;
     case 89:
      var $retval87 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval87;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_lin2ulaw($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp = __stackBase__ + 16;
      var $ncp = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $size = __stackBase__ + 28;
      var $val = __stackBase__ + 32;
      var $rv = __stackBase__ + 36;
      var $i = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$val] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str39, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 4:
      
      
      var $10 = HEAP[$len] / HEAP[$size] | 0;
      var $11 = _PyString_FromStringAndSize(0, $10);
      HEAP[$rv] = $11;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 6:
      var $14 = HEAP[$rv];
      var $15 = _PyString_AsString($14);
      HEAP[$ncp] = $15;
      HEAP[$i] = 0;
      __label__ = 14;
      break;
     case 7:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $23 = HEAP[HEAP[$cp] + HEAP[$i]] << 8;
      HEAP[$val] = $23;
      __label__ = 13;
      break;
     case 9:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      var $31 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $31;
      __label__ = 13;
      break;
     case 11:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      var $39 = HEAP[HEAP[$cp] + HEAP[$i]] >> 16;
      HEAP[$val] = $39;
      __label__ = 13;
      break;
     case 13:
      
      
      
      var $43 = HEAP[$val] & 65535 & 65535;
      var $44 = _st_14linear2ulaw($43);
      var $45 = HEAP[$ncp];
      HEAP[$45] = $44;
      
      var $47 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $47;
      
      
      var $50 = HEAP[$i] + HEAP[$size];
      HEAP[$i] = $50;
      __label__ = 14;
      break;
     case 14:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $54 = HEAP[$rv];
      HEAP[$0] = $54;
      __label__ = 16;
      break;
     case 16:
      var $55 = HEAP[$0];
      HEAP[$retval] = $55;
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
  function _audioop_ulaw2lin($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 45;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 45);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp = __stackBase__ + 16;
      var $cval = __stackBase__ + 20;
      var $ncp = __stackBase__ + 21;
      var $len = __stackBase__ + 25;
      var $size = __stackBase__ + 29;
      var $val = __stackBase__ + 33;
      var $rv = __stackBase__ + 37;
      var $i = __stackBase__ + 41;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str40, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 4:
      
      
      
      
      if ((2147483647 / HEAP[$size] | 0) < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $12 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($12, __str23);
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 6:
      
      
      var $15 = HEAP[$len] * HEAP[$size];
      var $16 = _PyString_FromStringAndSize(0, $15);
      HEAP[$rv] = $16;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 8:
      var $19 = HEAP[$rv];
      var $20 = _PyString_AsString($19);
      HEAP[$ncp] = $20;
      HEAP[$i] = 0;
      __label__ = 16;
      break;
     case 9:
      var $21 = HEAP[$cp];
      var $22 = HEAP[$21];
      HEAP[$cval] = $22;
      var $23 = $21 + 1;
      HEAP[$cp] = $23;
      
      
      
      
      var $28 = HEAP[__st_ulaw2linear16 + HEAP[$cval] * 2];
      HEAP[$val] = $28;
      
      
      if (HEAP[$size] == 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      var $33 = HEAP[$val] >> 8 & 255;
      
      
      var $36 = HEAP[$ncp] + HEAP[$i];
      HEAP[$36] = $33;
      __label__ = 15;
      break;
     case 11:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      var $42 = HEAP[$ncp] + HEAP[$i];
      
      var $44 = HEAP[$val] & 65535;
      HEAP[$42] = $44;
      __label__ = 15;
      break;
     case 13:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      var $50 = HEAP[$ncp] + HEAP[$i];
      
      var $52 = HEAP[$val] << 16;
      HEAP[$50] = $52;
      __label__ = 15;
      break;
     case 15:
      
      
      var $55 = HEAP[$i] + HEAP[$size];
      HEAP[$i] = $55;
      __label__ = 16;
      break;
     case 16:
      
      
      
      
      
      if (HEAP[$len] * HEAP[$size] > HEAP[$i]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      var $61 = HEAP[$rv];
      HEAP[$0] = $61;
      __label__ = 18;
      break;
     case 18:
      var $62 = HEAP[$0];
      HEAP[$retval] = $62;
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
  function _audioop_lin2alaw($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp = __stackBase__ + 16;
      var $ncp = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $size = __stackBase__ + 28;
      var $val = __stackBase__ + 32;
      var $rv = __stackBase__ + 36;
      var $i = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$val] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str41, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 4:
      
      
      var $10 = HEAP[$len] / HEAP[$size] | 0;
      var $11 = _PyString_FromStringAndSize(0, $10);
      HEAP[$rv] = $11;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 6:
      var $14 = HEAP[$rv];
      var $15 = _PyString_AsString($14);
      HEAP[$ncp] = $15;
      HEAP[$i] = 0;
      __label__ = 14;
      break;
     case 7:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $23 = HEAP[HEAP[$cp] + HEAP[$i]] << 8;
      HEAP[$val] = $23;
      __label__ = 13;
      break;
     case 9:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      var $31 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $31;
      __label__ = 13;
      break;
     case 11:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      var $39 = HEAP[HEAP[$cp] + HEAP[$i]] >> 16;
      HEAP[$val] = $39;
      __label__ = 13;
      break;
     case 13:
      
      
      
      var $43 = HEAP[$val] & 65535 & 65535;
      var $44 = _st_linear2alaw($43);
      var $45 = HEAP[$ncp];
      HEAP[$45] = $44;
      
      var $47 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $47;
      
      
      var $50 = HEAP[$i] + HEAP[$size];
      HEAP[$i] = $50;
      __label__ = 14;
      break;
     case 14:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $54 = HEAP[$rv];
      HEAP[$0] = $54;
      __label__ = 16;
      break;
     case 16:
      var $55 = HEAP[$0];
      HEAP[$retval] = $55;
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
  function _audioop_alaw2lin($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 45;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 45);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp = __stackBase__ + 16;
      var $cval = __stackBase__ + 20;
      var $ncp = __stackBase__ + 21;
      var $len = __stackBase__ + 25;
      var $size = __stackBase__ + 29;
      var $val = __stackBase__ + 33;
      var $rv = __stackBase__ + 37;
      var $i = __stackBase__ + 41;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str42, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 4:
      
      
      
      
      if ((2147483647 / HEAP[$size] | 0) < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $12 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($12, __str23);
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 6:
      
      
      var $15 = HEAP[$len] * HEAP[$size];
      var $16 = _PyString_FromStringAndSize(0, $15);
      HEAP[$rv] = $16;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 8:
      var $19 = HEAP[$rv];
      var $20 = _PyString_AsString($19);
      HEAP[$ncp] = $20;
      HEAP[$i] = 0;
      __label__ = 16;
      break;
     case 9:
      var $21 = HEAP[$cp];
      var $22 = HEAP[$21];
      HEAP[$cval] = $22;
      var $23 = $21 + 1;
      HEAP[$cp] = $23;
      
      
      
      
      var $28 = HEAP[__st_alaw2linear16 + HEAP[$cval] * 2];
      HEAP[$val] = $28;
      
      
      if (HEAP[$size] == 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      var $33 = HEAP[$val] >> 8 & 255;
      
      
      var $36 = HEAP[$ncp] + HEAP[$i];
      HEAP[$36] = $33;
      __label__ = 15;
      break;
     case 11:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      var $42 = HEAP[$ncp] + HEAP[$i];
      
      var $44 = HEAP[$val] & 65535;
      HEAP[$42] = $44;
      __label__ = 15;
      break;
     case 13:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      var $50 = HEAP[$ncp] + HEAP[$i];
      
      var $52 = HEAP[$val] << 16;
      HEAP[$50] = $52;
      __label__ = 15;
      break;
     case 15:
      
      
      var $55 = HEAP[$i] + HEAP[$size];
      HEAP[$i] = $55;
      __label__ = 16;
      break;
     case 16:
      
      
      
      
      
      if (HEAP[$len] * HEAP[$size] > HEAP[$i]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      var $61 = HEAP[$rv];
      HEAP[$0] = $61;
      __label__ = 18;
      break;
     case 18:
      var $62 = HEAP[$0];
      HEAP[$retval] = $62;
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
  function _audioop_lin2adpcm($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 92;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 92);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_511 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $cp = __stackBase__ + 20;
      var $ncp = __stackBase__ + 24;
      var $len = __stackBase__ + 28;
      var $size = __stackBase__ + 32;
      var $val = __stackBase__ + 36;
      var $step = __stackBase__ + 40;
      var $valpred = __stackBase__ + 44;
      var $delta = __stackBase__ + 48;
      var $index = __stackBase__ + 52;
      var $sign = __stackBase__ + 56;
      var $vpdiff = __stackBase__ + 60;
      var $diff = __stackBase__ + 64;
      var $rv = __stackBase__ + 68;
      var $state = __stackBase__ + 72;
      var $str = __stackBase__ + 76;
      var $i = __stackBase__ + 80;
      var $outputbuffer = __stackBase__ + 84;
      var $bufferstep = __stackBase__ + 88;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$val] = 0;
      HEAP[$outputbuffer] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str43, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $state, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 47;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 47;
      break;
     case 4:
      
      
      
      var $11 = HEAP[$len] / (HEAP[$size] * 2) | 0;
      var $12 = _PyString_FromStringAndSize(0, $11);
      HEAP[$str] = $12;
      
      
      if (HEAP[$str] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 47;
      break;
     case 6:
      var $15 = HEAP[$str];
      var $16 = _PyString_AsString($15);
      HEAP[$ncp] = $16;
      
      
      if (HEAP[$state] == __Py_NoneStruct) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$valpred] = 0;
      HEAP[$index] = 0;
      __label__ = 10;
      break;
     case 8:
      var $19 = HEAP[$state];
      var $20 = _PyArg_ParseTuple($19, __str44, allocate([ $valpred, 0, 0, 0, $index, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($20 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = 0;
      __label__ = 47;
      break;
     case 10:
      
      
      var $24 = HEAP[_stepsizeTable + HEAP[$index] * 4];
      HEAP[$step] = $24;
      HEAP[$bufferstep] = 1;
      HEAP[$i] = 0;
      __label__ = 43;
      break;
     case 11:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      var $32 = HEAP[HEAP[$cp] + HEAP[$i]] << 8;
      HEAP[$val] = $32;
      __label__ = 17;
      break;
     case 13:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      var $40 = HEAP[HEAP[$cp] + HEAP[$i]];
      HEAP[$val] = $40;
      __label__ = 17;
      break;
     case 15:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      var $48 = HEAP[HEAP[$cp] + HEAP[$i]] >> 16;
      HEAP[$val] = $48;
      __label__ = 17;
      break;
     case 17:
      
      
      var $51 = HEAP[$val] - HEAP[$valpred];
      HEAP[$diff] = $51;
      
      
      if (HEAP[$diff] < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      HEAP[$iftmp_511] = 8;
      __label__ = 20;
      break;
     case 19:
      HEAP[$iftmp_511] = 0;
      __label__ = 20;
      break;
     case 20:
      var $54 = HEAP[$iftmp_511];
      HEAP[$sign] = $54;
      
      
      if (HEAP[$sign] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      var $58 = 0 - HEAP[$diff];
      HEAP[$diff] = $58;
      __label__ = 22;
      break;
     case 22:
      HEAP[$delta] = 0;
      
      var $60 = HEAP[$step] >> 3;
      HEAP[$vpdiff] = $60;
      
      
      
      if (HEAP[$diff] >= HEAP[$step]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      HEAP[$delta] = 4;
      
      
      var $66 = HEAP[$diff] - HEAP[$step];
      HEAP[$diff] = $66;
      
      
      var $69 = HEAP[$vpdiff] + HEAP[$step];
      HEAP[$vpdiff] = $69;
      __label__ = 24;
      break;
     case 24:
      
      var $71 = HEAP[$step] >> 1;
      HEAP[$step] = $71;
      
      
      
      if (HEAP[$diff] >= HEAP[$step]) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      var $76 = HEAP[$delta] | 2;
      HEAP[$delta] = $76;
      
      
      var $79 = HEAP[$diff] - HEAP[$step];
      HEAP[$diff] = $79;
      
      
      var $82 = HEAP[$vpdiff] + HEAP[$step];
      HEAP[$vpdiff] = $82;
      __label__ = 26;
      break;
     case 26:
      
      var $84 = HEAP[$step] >> 1;
      HEAP[$step] = $84;
      
      
      
      if (HEAP[$diff] >= HEAP[$step]) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      var $89 = HEAP[$delta] | 1;
      HEAP[$delta] = $89;
      
      
      var $92 = HEAP[$vpdiff] + HEAP[$step];
      HEAP[$vpdiff] = $92;
      __label__ = 28;
      break;
     case 28:
      
      
      if (HEAP[$sign] != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      var $97 = HEAP[$valpred] - HEAP[$vpdiff];
      HEAP[$valpred] = $97;
      __label__ = 31;
      break;
     case 30:
      
      
      var $100 = HEAP[$valpred] + HEAP[$vpdiff];
      HEAP[$valpred] = $100;
      __label__ = 31;
      break;
     case 31:
      
      
      if (HEAP[$valpred] > 32767) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      HEAP[$valpred] = 32767;
      __label__ = 35;
      break;
     case 33:
      
      var $104 = HEAP[$valpred] < -32768;
      if ($104) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      HEAP[$valpred] = -32768;
      __label__ = 35;
      break;
     case 35:
      
      
      var $107 = HEAP[$delta] | HEAP[$sign];
      HEAP[$delta] = $107;
      
      
      
      
      var $112 = HEAP[_indexTable + HEAP[$delta] * 4] + HEAP[$index];
      HEAP[$index] = $112;
      
      
      if (HEAP[$index] < 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      HEAP[$index] = 0;
      __label__ = 37;
      break;
     case 37:
      
      
      if (HEAP[$index] > 88) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      HEAP[$index] = 88;
      __label__ = 39;
      break;
     case 39:
      
      
      var $119 = HEAP[_stepsizeTable + HEAP[$index] * 4];
      HEAP[$step] = $119;
      
      
      if (HEAP[$bufferstep] != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      var $124 = HEAP[$delta] << 4 & 240;
      HEAP[$outputbuffer] = $124;
      __label__ = 42;
      break;
     case 41:
      
      
      
      
      
      var $130 = HEAP[$delta] & 255 & 15 | HEAP[$outputbuffer] & 255;
      var $131 = HEAP[$ncp];
      HEAP[$131] = $130;
      
      var $133 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $133;
      __label__ = 42;
      break;
     case 42:
      
      
      var $136 = HEAP[$bufferstep] == 0;
      HEAP[$bufferstep] = $136;
      
      
      var $139 = HEAP[$i] + HEAP[$size];
      HEAP[$i] = $139;
      __label__ = 43;
      break;
     case 43:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      var $143 = HEAP[$index];
      var $144 = HEAP[$valpred];
      var $145 = HEAP[$str];
      var $146 = _Py_BuildValue(__str45, allocate([ $145, 0, 0, 0, $144, 0, 0, 0, $143, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$rv] = $146;
      
      
      
      var $150 = HEAP[HEAP[$str]] - 1;
      
      var $152 = HEAP[$str];
      HEAP[$152] = $150;
      
      
      
      
      if (HEAP[HEAP[$str]] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      var $161 = HEAP[HEAP[HEAP[$str] + 4] + 24];
      var $162 = HEAP[$str];
      FUNCTION_TABLE[$161]($162);
      __label__ = 46;
      break;
     case 46:
      var $163 = HEAP[$rv];
      HEAP[$0] = $163;
      __label__ = 47;
      break;
     case 47:
      var $164 = HEAP[$0];
      HEAP[$retval] = $164;
      __label__ = 48;
      break;
     case 48:
      var $retval47 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval47;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_adpcm2lin($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 80;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 80);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cp = __stackBase__ + 16;
      var $ncp = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $size = __stackBase__ + 28;
      var $valpred = __stackBase__ + 32;
      var $step = __stackBase__ + 36;
      var $delta = __stackBase__ + 40;
      var $index = __stackBase__ + 44;
      var $sign = __stackBase__ + 48;
      var $vpdiff = __stackBase__ + 52;
      var $rv = __stackBase__ + 56;
      var $str = __stackBase__ + 60;
      var $state = __stackBase__ + 64;
      var $i = __stackBase__ + 68;
      var $inputbuffer = __stackBase__ + 72;
      var $bufferstep = __stackBase__ + 76;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$inputbuffer] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str46, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $state, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 44;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 44;
      break;
     case 4:
      
      
      if (HEAP[$state] == __Py_NoneStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$valpred] = 0;
      HEAP[$index] = 0;
      __label__ = 8;
      break;
     case 6:
      var $10 = HEAP[$state];
      var $11 = _PyArg_ParseTuple($10, __str44, allocate([ $valpred, 0, 0, 0, $index, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($11 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 44;
      break;
     case 8:
      
      
      
      
      if ((1073741823 / HEAP[$size] | 0) < HEAP[$len]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $17 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($17, __str23);
      HEAP[$0] = 0;
      __label__ = 44;
      break;
     case 10:
      
      
      
      var $21 = HEAP[$len] * HEAP[$size] * 2;
      var $22 = _PyString_FromStringAndSize(0, $21);
      HEAP[$str] = $22;
      
      
      if (HEAP[$str] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = 0;
      __label__ = 44;
      break;
     case 12:
      var $25 = HEAP[$str];
      var $26 = _PyString_AsString($25);
      HEAP[$ncp] = $26;
      
      
      var $29 = HEAP[_stepsizeTable + HEAP[$index] * 4];
      HEAP[$step] = $29;
      HEAP[$bufferstep] = 0;
      HEAP[$i] = 0;
      __label__ = 40;
      break;
     case 13:
      
      
      if (HEAP[$bufferstep] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      var $33 = HEAP[$inputbuffer] & 15;
      HEAP[$delta] = $33;
      __label__ = 16;
      break;
     case 15:
      var $34 = HEAP[$cp];
      
      var $36 = HEAP[$34];
      HEAP[$inputbuffer] = $36;
      var $37 = $34 + 1;
      HEAP[$cp] = $37;
      
      
      var $40 = HEAP[$inputbuffer] >> 4 & 15;
      HEAP[$delta] = $40;
      __label__ = 16;
      break;
     case 16:
      
      
      var $43 = HEAP[$bufferstep] == 0;
      HEAP[$bufferstep] = $43;
      
      
      
      
      var $48 = HEAP[_indexTable + HEAP[$delta] * 4] + HEAP[$index];
      HEAP[$index] = $48;
      
      
      if (HEAP[$index] < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      HEAP[$index] = 0;
      __label__ = 18;
      break;
     case 18:
      
      
      if (HEAP[$index] > 88) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$index] = 88;
      __label__ = 20;
      break;
     case 20:
      
      var $54 = HEAP[$delta] & 8;
      HEAP[$sign] = $54;
      
      var $56 = HEAP[$delta] & 7;
      HEAP[$delta] = $56;
      
      var $58 = HEAP[$step] >> 3;
      HEAP[$vpdiff] = $58;
      
      
      
      if ((HEAP[$delta] & 4) != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      var $64 = HEAP[$vpdiff] + HEAP[$step];
      HEAP[$vpdiff] = $64;
      __label__ = 22;
      break;
     case 22:
      
      
      
      if ((HEAP[$delta] & 2) != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      var $71 = (HEAP[$step] >> 1) + HEAP[$vpdiff];
      HEAP[$vpdiff] = $71;
      __label__ = 24;
      break;
     case 24:
      
      
      
      
      if ((HEAP[$delta] & 1 & 255) != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      var $78 = (HEAP[$step] >> 2) + HEAP[$vpdiff];
      HEAP[$vpdiff] = $78;
      __label__ = 26;
      break;
     case 26:
      
      
      if (HEAP[$sign] != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      var $83 = HEAP[$valpred] - HEAP[$vpdiff];
      HEAP[$valpred] = $83;
      __label__ = 29;
      break;
     case 28:
      
      
      var $86 = HEAP[$valpred] + HEAP[$vpdiff];
      HEAP[$valpred] = $86;
      __label__ = 29;
      break;
     case 29:
      
      
      if (HEAP[$valpred] > 32767) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      HEAP[$valpred] = 32767;
      __label__ = 33;
      break;
     case 31:
      
      var $90 = HEAP[$valpred] < -32768;
      if ($90) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      HEAP[$valpred] = -32768;
      __label__ = 33;
      break;
     case 33:
      
      
      var $93 = HEAP[_stepsizeTable + HEAP[$index] * 4];
      HEAP[$step] = $93;
      
      
      if (HEAP[$size] == 1) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      var $98 = HEAP[$valpred] >> 8 & 255;
      
      
      var $101 = HEAP[$ncp] + HEAP[$i];
      HEAP[$101] = $98;
      __label__ = 39;
      break;
     case 35:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      var $107 = HEAP[$ncp] + HEAP[$i];
      
      var $109 = HEAP[$valpred] & 65535;
      HEAP[$107] = $109;
      __label__ = 39;
      break;
     case 37:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      var $115 = HEAP[$ncp] + HEAP[$i];
      
      var $117 = HEAP[$valpred] << 16;
      HEAP[$115] = $117;
      __label__ = 39;
      break;
     case 39:
      
      
      var $120 = HEAP[$i] + HEAP[$size];
      HEAP[$i] = $120;
      __label__ = 40;
      break;
     case 40:
      
      
      
      
      
      
      if (HEAP[$len] * HEAP[$size] * 2 > HEAP[$i]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 41:
      var $127 = HEAP[$index];
      var $128 = HEAP[$valpred];
      var $129 = HEAP[$str];
      var $130 = _Py_BuildValue(__str45, allocate([ $129, 0, 0, 0, $128, 0, 0, 0, $127, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$rv] = $130;
      
      
      
      var $134 = HEAP[HEAP[$str]] - 1;
      
      var $136 = HEAP[$str];
      HEAP[$136] = $134;
      
      
      
      
      if (HEAP[HEAP[$str]] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $145 = HEAP[HEAP[HEAP[$str] + 4] + 24];
      var $146 = HEAP[$str];
      FUNCTION_TABLE[$145]($146);
      __label__ = 43;
      break;
     case 43:
      var $147 = HEAP[$rv];
      HEAP[$0] = $147;
      __label__ = 44;
      break;
     case 44:
      var $148 = HEAP[$0];
      HEAP[$retval] = $148;
      __label__ = 45;
      break;
     case 45:
      var $retval44 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval44;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initaudioop() {
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
      
      var $0 = _Py_InitModule4(__str72, _audioop_methods, 0, 0, 1013);
      HEAP[$m] = $0;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = HEAP[$m];
      var $4 = _PyModule_GetDict($3);
      HEAP[$d] = $4;
      
      
      if (HEAP[$d] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $7 = _PyErr_NewException(__str73, 0, 0);
      HEAP[_AudioopError] = $7;
      
      
      if (HEAP[_AudioopError] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = HEAP[_AudioopError];
      var $11 = HEAP[$d];
      var $12 = _PyDict_SetItemString($11, __str74, $10);
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
  Module["_initaudioop"] = _initaudioop;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _audioop_max, 0, _audioop_minmax, 0, _audioop_avg, 0, _audioop_maxpp, 0, _audioop_avgpp, 0, _audioop_rms, 0, _audioop_findfit, 0, _audioop_findmax, 0, _audioop_findfactor, 0, _audioop_cross, 0, _audioop_mul, 0, _audioop_add, 0, _audioop_bias, 0, _audioop_ulaw2lin, 0, _audioop_lin2ulaw, 0, _audioop_alaw2lin, 0, _audioop_lin2alaw, 0, _audioop_lin2lin, 0, _audioop_adpcm2lin, 0, _audioop_lin2adpcm, 0, _audioop_tomono, 0, _audioop_tostereo, 0, _audioop_getsample, 0, _audioop_reverse, 0, _audioop_ratecv, 0 ]);
  function run(args) {
    _seg_aend = allocate([ 31, 0, 63, 0, 127, 0, 255, 0, 511, 0, 1023, 0, 2047, 0, 4095, 0 ], [ "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0 ], ALLOC_NORMAL);
    _seg_uend = allocate([ 63, 0, 127, 0, 255, 0, 511, 0, 1023, 0, 2047, 0, 4095, 0, 8191, 0 ], [ "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0 ], ALLOC_NORMAL);
    __st_ulaw2linear16 = allocate([ -32124, 0, -31100, 0, -30076, 0, -29052, 0, -28028, 0, -27004, 0, -25980, 0, -24956, 0, -23932, 0, -22908, 0, -21884, 0, -20860, 0, -19836, 0, -18812, 0, -17788, 0, -16764, 0, -15996, 0, -15484, 0, -14972, 0, -14460, 0, -13948, 0, -13436, 0, -12924, 0, -12412, 0, -11900, 0, -11388, 0, -10876, 0, -10364, 0, -9852, 0, -9340, 0, -8828, 0, -8316, 0, -7932, 0, -7676, 0, -7420, 0, -7164, 0, -6908, 0, -6652, 0, -6396, 0, -6140, 0, -5884, 0, -5628, 0, -5372, 0, -5116, 0, -4860, 0, -4604, 0, -4348, 0, -4092, 0, -3900, 0, -3772, 0, -3644, 0, -3516, 0, -3388, 0, -3260, 0, -3132, 0, -3004, 0, -2876, 0, -2748, 0, -2620, 0, -2492, 0, -2364, 0, -2236, 0, -2108, 0, -1980, 0, -1884, 0, -1820, 0, -1756, 0, -1692, 0, -1628, 0, -1564, 0, -1500, 0, -1436, 0, -1372, 0, -1308, 0, -1244, 0, -1180, 0, -1116, 0, -1052, 0, -988, 0, -924, 0, -876, 0, -844, 0, -812, 0, -780, 0, -748, 0, -716, 0, -684, 0, -652, 0, -620, 0, -588, 0, -556, 0, -524, 0, -492, 0, -460, 0, -428, 0, -396, 0, -372, 0, -356, 0, -340, 0, -324, 0, -308, 0, -292, 0, -276, 0, -260, 0, -244, 0, -228, 0, -212, 0, -196, 0, -180, 0, -164, 0, -148, 0, -132, 0, -120, 0, -112, 0, -104, 0, -96, 0, -88, 0, -80, 0, -72, 0, -64, 0, -56, 0, -48, 0, -40, 0, -32, 0, -24, 0, -16, 0, -8, 0, 0, 0, 32124, 0, 31100, 0, 30076, 0, 29052, 0, 28028, 0, 27004, 0, 25980, 0, 24956, 0, 23932, 0, 22908, 0, 21884, 0, 20860, 0, 19836, 0, 18812, 0, 17788, 0, 16764, 0, 15996, 0, 15484, 0, 14972, 0, 14460, 0, 13948, 0, 13436, 0, 12924, 0, 12412, 0, 11900, 0, 11388, 0, 10876, 0, 10364, 0, 9852, 0, 9340, 0, 8828, 0, 8316, 0, 7932, 0, 7676, 0, 7420, 0, 7164, 0, 6908, 0, 6652, 0, 6396, 0, 6140, 0, 5884, 0, 5628, 0, 5372, 0, 5116, 0, 4860, 0, 4604, 0, 4348, 0, 4092, 0, 3900, 0, 3772, 0, 3644, 0, 3516, 0, 3388, 0, 3260, 0, 3132, 0, 3004, 0, 2876, 0, 2748, 0, 2620, 0, 2492, 0, 2364, 0, 2236, 0, 2108, 0, 1980, 0, 1884, 0, 1820, 0, 1756, 0, 1692, 0, 1628, 0, 1564, 0, 1500, 0, 1436, 0, 1372, 0, 1308, 0, 1244, 0, 1180, 0, 1116, 0, 1052, 0, 988, 0, 924, 0, 876, 0, 844, 0, 812, 0, 780, 0, 748, 0, 716, 0, 684, 0, 652, 0, 620, 0, 588, 0, 556, 0, 524, 0, 492, 0, 460, 0, 428, 0, 396, 0, 372, 0, 356, 0, 340, 0, 324, 0, 308, 0, 292, 0, 276, 0, 260, 0, 244, 0, 228, 0, 212, 0, 196, 0, 180, 0, 164, 0, 148, 0, 132, 0, 120, 0, 112, 0, 104, 0, 96, 0, 88, 0, 80, 0, 72, 0, 64, 0, 56, 0, 48, 0, 40, 0, 32, 0, 24, 0, 16, 0, 8, 0, 0, 0 ], [ "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0 ], ALLOC_NORMAL);
    __st_alaw2linear16 = allocate([ -5504, 0, -5248, 0, -6016, 0, -5760, 0, -4480, 0, -4224, 0, -4992, 0, -4736, 0, -7552, 0, -7296, 0, -8064, 0, -7808, 0, -6528, 0, -6272, 0, -7040, 0, -6784, 0, -2752, 0, -2624, 0, -3008, 0, -2880, 0, -2240, 0, -2112, 0, -2496, 0, -2368, 0, -3776, 0, -3648, 0, -4032, 0, -3904, 0, -3264, 0, -3136, 0, -3520, 0, -3392, 0, -22016, 0, -20992, 0, -24064, 0, -23040, 0, -17920, 0, -16896, 0, -19968, 0, -18944, 0, -30208, 0, -29184, 0, -32256, 0, -31232, 0, -26112, 0, -25088, 0, -28160, 0, -27136, 0, -11008, 0, -10496, 0, -12032, 0, -11520, 0, -8960, 0, -8448, 0, -9984, 0, -9472, 0, -15104, 0, -14592, 0, -16128, 0, -15616, 0, -13056, 0, -12544, 0, -14080, 0, -13568, 0, -344, 0, -328, 0, -376, 0, -360, 0, -280, 0, -264, 0, -312, 0, -296, 0, -472, 0, -456, 0, -504, 0, -488, 0, -408, 0, -392, 0, -440, 0, -424, 0, -88, 0, -72, 0, -120, 0, -104, 0, -24, 0, -8, 0, -56, 0, -40, 0, -216, 0, -200, 0, -248, 0, -232, 0, -152, 0, -136, 0, -184, 0, -168, 0, -1376, 0, -1312, 0, -1504, 0, -1440, 0, -1120, 0, -1056, 0, -1248, 0, -1184, 0, -1888, 0, -1824, 0, -2016, 0, -1952, 0, -1632, 0, -1568, 0, -1760, 0, -1696, 0, -688, 0, -656, 0, -752, 0, -720, 0, -560, 0, -528, 0, -624, 0, -592, 0, -944, 0, -912, 0, -1008, 0, -976, 0, -816, 0, -784, 0, -880, 0, -848, 0, 5504, 0, 5248, 0, 6016, 0, 5760, 0, 4480, 0, 4224, 0, 4992, 0, 4736, 0, 7552, 0, 7296, 0, 8064, 0, 7808, 0, 6528, 0, 6272, 0, 7040, 0, 6784, 0, 2752, 0, 2624, 0, 3008, 0, 2880, 0, 2240, 0, 2112, 0, 2496, 0, 2368, 0, 3776, 0, 3648, 0, 4032, 0, 3904, 0, 3264, 0, 3136, 0, 3520, 0, 3392, 0, 22016, 0, 20992, 0, 24064, 0, 23040, 0, 17920, 0, 16896, 0, 19968, 0, 18944, 0, 30208, 0, 29184, 0, 32256, 0, 31232, 0, 26112, 0, 25088, 0, 28160, 0, 27136, 0, 11008, 0, 10496, 0, 12032, 0, 11520, 0, 8960, 0, 8448, 0, 9984, 0, 9472, 0, 15104, 0, 14592, 0, 16128, 0, 15616, 0, 13056, 0, 12544, 0, 14080, 0, 13568, 0, 344, 0, 328, 0, 376, 0, 360, 0, 280, 0, 264, 0, 312, 0, 296, 0, 472, 0, 456, 0, 504, 0, 488, 0, 408, 0, 392, 0, 440, 0, 424, 0, 88, 0, 72, 0, 120, 0, 104, 0, 24, 0, 8, 0, 56, 0, 40, 0, 216, 0, 200, 0, 248, 0, 232, 0, 152, 0, 136, 0, 184, 0, 168, 0, 1376, 0, 1312, 0, 1504, 0, 1440, 0, 1120, 0, 1056, 0, 1248, 0, 1184, 0, 1888, 0, 1824, 0, 2016, 0, 1952, 0, 1632, 0, 1568, 0, 1760, 0, 1696, 0, 688, 0, 656, 0, 752, 0, 720, 0, 560, 0, 528, 0, 624, 0, 592, 0, 944, 0, 912, 0, 1008, 0, 976, 0, 816, 0, 784, 0, 880, 0, 848, 0 ], [ "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0 ], ALLOC_NORMAL);
    _indexTable = allocate([ -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    _stepsizeTable = allocate([ 7, 0, 0, 0, 8, 0, 0, 0, 9, 0, 0, 0, 10, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 14, 0, 0, 0, 16, 0, 0, 0, 17, 0, 0, 0, 19, 0, 0, 0, 21, 0, 0, 0, 23, 0, 0, 0, 25, 0, 0, 0, 28, 0, 0, 0, 31, 0, 0, 0, 34, 0, 0, 0, 37, 0, 0, 0, 41, 0, 0, 0, 45, 0, 0, 0, 50, 0, 0, 0, 55, 0, 0, 0, 60, 0, 0, 0, 66, 0, 0, 0, 73, 0, 0, 0, 80, 0, 0, 0, 88, 0, 0, 0, 97, 0, 0, 0, 107, 0, 0, 0, 118, 0, 0, 0, 130, 0, 0, 0, 143, 0, 0, 0, 157, 0, 0, 0, 173, 0, 0, 0, 190, 0, 0, 0, 209, 0, 0, 0, 230, 0, 0, 0, 253, 0, 0, 0, 279, 0, 0, 0, 307, 0, 0, 0, 337, 0, 0, 0, 371, 0, 0, 0, 408, 0, 0, 0, 449, 0, 0, 0, 494, 0, 0, 0, 544, 0, 0, 0, 598, 0, 0, 0, 658, 0, 0, 0, 724, 0, 0, 0, 796, 0, 0, 0, 876, 0, 0, 0, 963, 0, 0, 0, 1060, 0, 0, 0, 1166, 0, 0, 0, 1282, 0, 0, 0, 1411, 0, 0, 0, 1552, 0, 0, 0, 1707, 0, 0, 0, 1878, 0, 0, 0, 2066, 0, 0, 0, 2272, 0, 0, 0, 2499, 0, 0, 0, 2749, 0, 0, 0, 3024, 0, 0, 0, 3327, 0, 0, 0, 3660, 0, 0, 0, 4026, 0, 0, 0, 4428, 0, 0, 0, 4871, 0, 0, 0, 5358, 0, 0, 0, 5894, 0, 0, 0, 6484, 0, 0, 0, 7132, 0, 0, 0, 7845, 0, 0, 0, 8630, 0, 0, 0, 9493, 0, 0, 0, 10442, 0, 0, 0, 11487, 0, 0, 0, 12635, 0, 0, 0, 13899, 0, 0, 0, 15289, 0, 0, 0, 16818, 0, 0, 0, 18500, 0, 0, 0, 20350, 0, 0, 0, 22385, 0, 0, 0, 24623, 0, 0, 0, 27086, 0, 0, 0, 29794, 0, 0, 0, 32767, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    _AudioopError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str = allocate([ 83, 105, 122, 101, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 49, 44, 32, 50, 32, 111, 114, 32, 52, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 110, 111, 116, 32, 97, 32, 119, 104, 111, 108, 101, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 102, 114, 97, 109, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 115, 35, 105, 105, 58, 103, 101, 116, 115, 97, 109, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 73, 110, 100, 101, 120, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 115, 35, 105, 58, 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 115, 35, 105, 58, 109, 105, 110, 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 40, 105, 105, 41, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 115, 35, 105, 58, 97, 118, 103, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 115, 35, 105, 58, 114, 109, 115, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 115, 35, 115, 35, 58, 102, 105, 110, 100, 102, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 83, 116, 114, 105, 110, 103, 115, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 101, 118, 101, 110, 45, 115, 105, 122, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 70, 105, 114, 115, 116, 32, 115, 97, 109, 112, 108, 101, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 108, 111, 110, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 40, 105, 102, 41, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 115, 35, 115, 35, 58, 102, 105, 110, 100, 102, 97, 99, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 83, 97, 109, 112, 108, 101, 115, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 115, 97, 109, 101, 32, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 115, 35, 105, 58, 102, 105, 110, 100, 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 73, 110, 112, 117, 116, 32, 115, 97, 109, 112, 108, 101, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 108, 111, 110, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 115, 35, 105, 58, 97, 118, 103, 112, 112, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 115, 35, 105, 58, 109, 97, 120, 112, 112, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 115, 35, 105, 58, 99, 114, 111, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 115, 35, 105, 100, 58, 109, 117, 108, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 115, 35, 105, 100, 100, 58, 116, 111, 109, 111, 110, 111, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 115, 35, 105, 100, 100, 58, 116, 111, 115, 116, 101, 114, 101, 111, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 110, 111, 116, 32, 101, 110, 111, 117, 103, 104, 32, 109, 101, 109, 111, 114, 121, 32, 102, 111, 114, 32, 111, 117, 116, 112, 117, 116, 32, 98, 117, 102, 102, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 115, 35, 115, 35, 105, 58, 97, 100, 100, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 76, 101, 110, 103, 116, 104, 115, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 116, 104, 101, 32, 115, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 115, 35, 105, 105, 58, 98, 105, 97, 115, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 115, 35, 105, 58, 114, 101, 118, 101, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 115, 35, 105, 105, 58, 108, 105, 110, 50, 108, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 115, 35, 105, 105, 105, 105, 79, 124, 105, 105, 58, 114, 97, 116, 101, 99, 118, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 35, 32, 111, 102, 32, 99, 104, 97, 110, 110, 101, 108, 115, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 62, 61, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 119, 105, 100, 116, 104, 32, 42, 32, 110, 99, 104, 97, 110, 110, 101, 108, 115, 32, 116, 111, 111, 32, 98, 105, 103, 32, 102, 111, 114, 32, 97, 32, 67, 32, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 119, 101, 105, 103, 104, 116, 65, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 62, 61, 32, 49, 44, 32, 119, 101, 105, 103, 104, 116, 66, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 115, 97, 109, 112, 108, 105, 110, 103, 32, 114, 97, 116, 101, 32, 110, 111, 116, 32, 62, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 105, 79, 33, 59, 97, 117, 100, 105, 111, 111, 112, 46, 114, 97, 116, 101, 99, 118, 58, 32, 105, 108, 108, 101, 103, 97, 108, 32, 115, 116, 97, 116, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 115, 116, 97, 116, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 105, 105, 58, 114, 97, 116, 101, 99, 118, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate(1, "i8", ALLOC_NORMAL);
    __str38 = allocate([ 40, 79, 40, 105, 79, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 115, 35, 105, 58, 108, 105, 110, 50, 117, 108, 97, 119, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 115, 35, 105, 58, 117, 108, 97, 119, 50, 108, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 115, 35, 105, 58, 108, 105, 110, 50, 97, 108, 97, 119, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 115, 35, 105, 58, 97, 108, 97, 119, 50, 108, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 115, 35, 105, 79, 58, 108, 105, 110, 50, 97, 100, 112, 99, 109, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 40, 79, 40, 105, 105, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 115, 35, 105, 79, 58, 97, 100, 112, 99, 109, 50, 108, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 109, 105, 110, 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 97, 118, 103, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 109, 97, 120, 112, 112, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 97, 118, 103, 112, 112, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 114, 109, 115, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 102, 105, 110, 100, 102, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 102, 105, 110, 100, 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 102, 105, 110, 100, 102, 97, 99, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 99, 114, 111, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 109, 117, 108, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 97, 100, 100, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 98, 105, 97, 115, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 117, 108, 97, 119, 50, 108, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 108, 105, 110, 50, 117, 108, 97, 119, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 97, 108, 97, 119, 50, 108, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 108, 105, 110, 50, 97, 108, 97, 119, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 108, 105, 110, 50, 108, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 97, 100, 112, 99, 109, 50, 108, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 108, 105, 110, 50, 97, 100, 112, 99, 109, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 116, 111, 109, 111, 110, 111, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 116, 111, 115, 116, 101, 114, 101, 111, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 103, 101, 116, 115, 97, 109, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 114, 101, 118, 101, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 114, 97, 116, 101, 99, 118, 0 ], "i8", ALLOC_NORMAL);
    _audioop_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str72 = allocate([ 97, 117, 100, 105, 111, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 97, 117, 100, 105, 111, 111, 112, 46, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_audioop_methods] = __str47;
    HEAP[_audioop_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_audioop_methods + 16] = __str48;
    HEAP[_audioop_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_audioop_methods + 32] = __str49;
    HEAP[_audioop_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_audioop_methods + 48] = __str50;
    HEAP[_audioop_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_audioop_methods + 64] = __str51;
    HEAP[_audioop_methods + 68] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_audioop_methods + 80] = __str52;
    HEAP[_audioop_methods + 84] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_audioop_methods + 96] = __str53;
    HEAP[_audioop_methods + 100] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_audioop_methods + 112] = __str54;
    HEAP[_audioop_methods + 116] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_audioop_methods + 128] = __str55;
    HEAP[_audioop_methods + 132] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_audioop_methods + 144] = __str56;
    HEAP[_audioop_methods + 148] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_audioop_methods + 160] = __str57;
    HEAP[_audioop_methods + 164] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_audioop_methods + 176] = __str58;
    HEAP[_audioop_methods + 180] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_audioop_methods + 192] = __str59;
    HEAP[_audioop_methods + 196] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_audioop_methods + 208] = __str60;
    HEAP[_audioop_methods + 212] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_audioop_methods + 224] = __str61;
    HEAP[_audioop_methods + 228] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_audioop_methods + 240] = __str62;
    HEAP[_audioop_methods + 244] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_audioop_methods + 256] = __str63;
    HEAP[_audioop_methods + 260] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_audioop_methods + 272] = __str64;
    HEAP[_audioop_methods + 276] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_audioop_methods + 288] = __str65;
    HEAP[_audioop_methods + 292] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_audioop_methods + 304] = __str66;
    HEAP[_audioop_methods + 308] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_audioop_methods + 320] = __str67;
    HEAP[_audioop_methods + 324] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_audioop_methods + 336] = __str68;
    HEAP[_audioop_methods + 340] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_audioop_methods + 352] = __str69;
    HEAP[_audioop_methods + 356] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_audioop_methods + 368] = __str70;
    HEAP[_audioop_methods + 372] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_audioop_methods + 384] = __str71;
    HEAP[_audioop_methods + 388] = FUNCTION_TABLE_OFFSET + 50;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
