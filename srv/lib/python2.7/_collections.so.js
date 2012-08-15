"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 40;
  var $1___SIZE = 20;
  var $2___SIZE = 20;
  var $3___SIZE = 240;
  var $4___SIZE = 16;
  var $5___SIZE = 196;
  var $6___SIZE = 32;
  var $7___SIZE = 196;
  var $8___SIZE = 80;
  var $9___SIZE = 16;
  var $10___SIZE = 40;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyDictEntry___SIZE = 12;
  var $struct_PyDictObject___SIZE = 124;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_block___SIZE = 256;
  var $struct_defdictobject___SIZE = 128;
  var $struct_dequeiterobject___SIZE = 28;
  var $struct_dequeobject___SIZE = 40;
  var _numfreeblocks;
  var __str;
  var _freeblocks;
  var __str1;
  var __str2;
  var __str3;
  var ___PRETTY_FUNCTION___8365;
  var __str4;
  var __str5;
  var _pop_doc;
  var __str6;
  var ___PRETTY_FUNCTION___8409;
  var __str7;
  var _popleft_doc;
  var __str8;
  var ___PRETTY_FUNCTION___8457;
  var __str9;
  var _append_doc;
  var __str10;
  var ___PRETTY_FUNCTION___8512;
  var _appendleft_doc;
  var ___PRETTY_FUNCTION___8600;
  var _extend_doc;
  var ___PRETTY_FUNCTION___8706;
  var _extendleft_doc;
  var __str11;
  var ___PRETTY_FUNCTION___8832;
  var __str12;
  var _rotate_doc;
  var __str13;
  var ___PRETTY_FUNCTION___8922;
  var _reverse_doc;
  var __str14;
  var _count_doc;
  var __str15;
  var __str16;
  var ___PRETTY_FUNCTION___8997;
  var __str17;
  var _remove_doc;
  var ___PRETTY_FUNCTION___9035;
  var __str18;
  var __str19;
  var __str20;
  var ___PRETTY_FUNCTION___9110;
  var __str21;
  var ___PRETTY_FUNCTION___9182;
  var _clear_doc;
  var ___PRETTY_FUNCTION___9194;
  var __str22;
  var __str23;
  var _copy_doc;
  var __str24;
  var __str25;
  var __str26;
  var __str27;
  var __str28;
  var _reduce_doc;
  var __str29;
  var __str30;
  var __str31;
  var __str32;
  var __str33;
  var __str34;
  var __str35;
  var __str36;
  var _C_53_9608;
  var __str37;
  var __str38;
  var __str39;
  var __str40;
  var __str41;
  var _deque_getset;
  var _deque_as_sequence;
  var _reversed_doc;
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
  var _deque_methods;
  var _deque_doc;
  var __str56;
  var _deque_type;
  var __str57;
  var ___PRETTY_FUNCTION___9731;
  var __str58;
  var _length_hint_doc;
  var __str59;
  var _dequeiter_methods;
  var __str60;
  var _dequeiter_type;
  var __str61;
  var ___PRETTY_FUNCTION___9804;
  var __str62;
  var __str63;
  var _dequereviter_type;
  var _defdict_missing_doc;
  var _defdict_copy_doc;
  var __str64;
  var __str65;
  var __str66;
  var __str67;
  var _defdict_methods;
  var __str68;
  var __str69;
  var _defdict_members;
  var __str70;
  var __str71;
  var __str72;
  var __str73;
  var __str74;
  var _defdict_doc;
  var __str75;
  var _defdict_type;
  var _module_doc;
  var __str76;
  var __str77;
  var __str78;
  function _newblock($leftlink, $rightlink, $len) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $leftlink_addr = __stackBase__;
      var $rightlink_addr = __stackBase__ + 4;
      var $len_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $b = __stackBase__ + 20;
      
      HEAP[$leftlink_addr] = $leftlink;
      HEAP[$rightlink_addr] = $rightlink;
      HEAP[$len_addr] = $len;
      
      
      if (HEAP[$len_addr] > 2147483522) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($3, __str);
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 2:
      
      
      if (HEAP[_numfreeblocks] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $7 = HEAP[_numfreeblocks] - 1;
      HEAP[_numfreeblocks] = $7;
      
      
      var $10 = HEAP[_freeblocks + HEAP[_numfreeblocks] * 4];
      HEAP[$b] = $10;
      __label__ = 6;
      break;
     case 4:
      var $11 = _PyMem_Malloc(256);
      
      HEAP[$b] = $11;
      
      
      if (HEAP[$b] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $15 = _PyErr_NoMemory();
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 6:
      
      var $17 = HEAP[$b];
      var $18 = HEAP[$leftlink_addr];
      HEAP[$17] = $18;
      
      var $20 = HEAP[$b] + 4;
      var $21 = HEAP[$rightlink_addr];
      HEAP[$20] = $21;
      var $22 = HEAP[$b];
      HEAP[$0] = $22;
      __label__ = 7;
      break;
     case 7:
      var $23 = HEAP[$0];
      HEAP[$retval] = $23;
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
  function _freeblock($b) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $b_addr = __stackBase__;
      
      HEAP[$b_addr] = $b;
      
      
      if (HEAP[_numfreeblocks] <= 9) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $3 = _freeblocks + HEAP[_numfreeblocks] * 4;
      var $4 = HEAP[$b_addr];
      HEAP[$3] = $4;
      
      var $6 = HEAP[_numfreeblocks] + 1;
      HEAP[_numfreeblocks] = $6;
      __label__ = 3;
      break;
     case 2:
      
      var $8 = HEAP[$b_addr];
      _PyMem_Free($8);
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
  function _deque_new($type, $args, $kwds) {
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
      var $deque = __stackBase__ + 20;
      var $b = __stackBase__ + 24;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      
      var $3 = HEAP[HEAP[$type_addr] + 152];
      var $4 = HEAP[$type_addr];
      var $5 = FUNCTION_TABLE[$3]($4, 0);
      var $6 = $5;
      HEAP[$deque] = $6;
      
      
      if (HEAP[$deque] == 0) {
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
      var $9 = _newblock(0, 0, 0);
      HEAP[$b] = $9;
      
      
      if (HEAP[$b] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      var $13 = HEAP[$deque];
      
      
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
      
      
      
      
      
      var $26 = HEAP[HEAP[HEAP[$deque] + 4] + 24];
      
      var $28 = HEAP[$deque];
      FUNCTION_TABLE[$26]($28);
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 6:
      
      var $30 = HEAP[$deque] + 8;
      var $31 = HEAP[$b];
      HEAP[$30] = $31;
      
      var $33 = HEAP[$deque] + 12;
      var $34 = HEAP[$b];
      HEAP[$33] = $34;
      
      var $36 = HEAP[$deque] + 16;
      HEAP[$36] = 31;
      
      var $38 = HEAP[$deque] + 20;
      HEAP[$38] = 30;
      
      var $40 = HEAP[$deque] + 24;
      HEAP[$40] = 0;
      
      var $42 = HEAP[$deque] + 32;
      HEAP[$42] = 0;
      
      var $44 = HEAP[$deque] + 36;
      HEAP[$44] = 0;
      
      var $46 = HEAP[$deque] + 28;
      HEAP[$46] = -1;
      
      var $48 = HEAP[$deque];
      HEAP[$0] = $48;
      __label__ = 7;
      break;
     case 7:
      var $49 = HEAP[$0];
      HEAP[$retval] = $49;
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
  function _deque_pop($deque, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $item = __stackBase__ + 16;
      var $prevblock = __stackBase__ + 20;
      
      HEAP[$deque_addr] = $deque;
      HEAP[$unused_addr] = $unused;
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 24] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($5, __str1);
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 2:
      
      
      
      
      
      
      
      
      var $14 = HEAP[HEAP[HEAP[$deque_addr] + 12] + 8 + HEAP[HEAP[$deque_addr] + 20] * 4];
      HEAP[$item] = $14;
      
      
      
      var $18 = HEAP[HEAP[$deque_addr] + 20] - 1;
      
      var $20 = HEAP[$deque_addr] + 20;
      HEAP[$20] = $18;
      
      
      
      var $24 = HEAP[HEAP[$deque_addr] + 24] - 1;
      
      var $26 = HEAP[$deque_addr] + 24;
      HEAP[$26] = $24;
      
      
      
      var $30 = HEAP[HEAP[$deque_addr] + 32] + 1;
      
      var $32 = HEAP[$deque_addr] + 32;
      HEAP[$32] = $30;
      
      
      
      var $36 = HEAP[HEAP[$deque_addr] + 20] == -1;
      if ($36) {
        __label__ = 3;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 3:
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 24] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 8] != HEAP[HEAP[$deque_addr] + 12]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str2, __str3, 176, ___PRETTY_FUNCTION___8365);
      throw "Reached an unreachable!";
     case 6:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 16] != HEAP[HEAP[$deque_addr] + 20] + 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      ___assert_fail(__str4, __str3, 177, ___PRETTY_FUNCTION___8365);
      throw "Reached an unreachable!";
     case 8:
      
      var $57 = HEAP[$deque_addr] + 16;
      HEAP[$57] = 31;
      
      var $59 = HEAP[$deque_addr] + 20;
      HEAP[$59] = 30;
      __label__ = 12;
      break;
     case 9:
      
      
      
      
      var $64 = HEAP[HEAP[HEAP[$deque_addr] + 12]];
      HEAP[$prevblock] = $64;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 8] == HEAP[HEAP[$deque_addr] + 12]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str5, __str3, 183, ___PRETTY_FUNCTION___8365);
      throw "Reached an unreachable!";
     case 11:
      
      
      var $74 = HEAP[HEAP[$deque_addr] + 12];
      _freeblock($74);
      
      var $76 = HEAP[$prevblock] + 4;
      HEAP[$76] = 0;
      
      var $78 = HEAP[$deque_addr] + 12;
      var $79 = HEAP[$prevblock];
      HEAP[$78] = $79;
      
      var $81 = HEAP[$deque_addr] + 20;
      HEAP[$81] = 61;
      __label__ = 12;
      break;
     case 12:
      var $82 = HEAP[$item];
      HEAP[$0] = $82;
      __label__ = 13;
      break;
     case 13:
      var $83 = HEAP[$0];
      HEAP[$retval] = $83;
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
  function _deque_popleft($deque, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $item = __stackBase__ + 16;
      var $prevblock = __stackBase__ + 20;
      
      HEAP[$deque_addr] = $deque;
      HEAP[$unused_addr] = $unused;
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 24] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($5, __str1);
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 8] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str6, __str3, 205, ___PRETTY_FUNCTION___8409);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      
      
      
      
      
      var $18 = HEAP[HEAP[HEAP[$deque_addr] + 8] + 8 + HEAP[HEAP[$deque_addr] + 16] * 4];
      HEAP[$item] = $18;
      
      
      
      var $22 = HEAP[HEAP[$deque_addr] + 16] + 1;
      
      var $24 = HEAP[$deque_addr] + 16;
      HEAP[$24] = $22;
      
      
      
      var $28 = HEAP[HEAP[$deque_addr] + 24] - 1;
      
      var $30 = HEAP[$deque_addr] + 24;
      HEAP[$30] = $28;
      
      
      
      var $34 = HEAP[HEAP[$deque_addr] + 32] + 1;
      
      var $36 = HEAP[$deque_addr] + 32;
      HEAP[$36] = $34;
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 16] == 62) {
        __label__ = 5;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 24] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 8] != HEAP[HEAP[$deque_addr] + 12]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      ___assert_fail(__str2, __str3, 213, ___PRETTY_FUNCTION___8409);
      throw "Reached an unreachable!";
     case 8:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 16] != HEAP[HEAP[$deque_addr] + 20] + 1) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      ___assert_fail(__str4, __str3, 214, ___PRETTY_FUNCTION___8409);
      throw "Reached an unreachable!";
     case 10:
      
      var $61 = HEAP[$deque_addr] + 16;
      HEAP[$61] = 31;
      
      var $63 = HEAP[$deque_addr] + 20;
      HEAP[$63] = 30;
      __label__ = 16;
      break;
     case 11:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 8] == HEAP[HEAP[$deque_addr] + 12]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      ___assert_fail(__str5, __str3, 219, ___PRETTY_FUNCTION___8409);
      throw "Reached an unreachable!";
     case 13:
      
      
      
      
      var $75 = HEAP[HEAP[HEAP[$deque_addr] + 8] + 4];
      HEAP[$prevblock] = $75;
      
      
      var $78 = HEAP[HEAP[$deque_addr] + 8];
      _freeblock($78);
      
      
      if (HEAP[$prevblock] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      ___assert_fail(__str7, __str3, 222, ___PRETTY_FUNCTION___8409);
      throw "Reached an unreachable!";
     case 15:
      
      var $82 = HEAP[$prevblock];
      HEAP[$82] = 0;
      
      var $84 = HEAP[$deque_addr] + 8;
      var $85 = HEAP[$prevblock];
      HEAP[$84] = $85;
      
      var $87 = HEAP[$deque_addr] + 16;
      HEAP[$87] = 0;
      __label__ = 16;
      break;
     case 16:
      var $88 = HEAP[$item];
      HEAP[$0] = $88;
      __label__ = 17;
      break;
     case 17:
      var $89 = HEAP[$0];
      HEAP[$retval] = $89;
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
  function _deque_append($deque, $item) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $item_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $b = __stackBase__ + 16;
      var $rv = __stackBase__ + 20;
      
      HEAP[$deque_addr] = $deque;
      HEAP[$item_addr] = $item;
      
      
      
      var $4 = HEAP[HEAP[$deque_addr] + 32] + 1;
      
      var $6 = HEAP[$deque_addr] + 32;
      HEAP[$6] = $4;
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 20] == 61) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      var $13 = HEAP[HEAP[$deque_addr] + 24];
      
      
      var $16 = HEAP[HEAP[$deque_addr] + 12];
      var $17 = _newblock($16, 0, $13);
      HEAP[$b] = $17;
      
      
      if (HEAP[$b] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 3:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$deque_addr] + 12] + 4] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str8, __str3, 241, ___PRETTY_FUNCTION___8457);
      throw "Reached an unreachable!";
     case 5:
      
      
      
      var $29 = HEAP[HEAP[$deque_addr] + 12] + 4;
      var $30 = HEAP[$b];
      HEAP[$29] = $30;
      
      var $32 = HEAP[$deque_addr] + 12;
      var $33 = HEAP[$b];
      HEAP[$32] = $33;
      
      var $35 = HEAP[$deque_addr] + 20;
      HEAP[$35] = -1;
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $39 = HEAP[HEAP[$item_addr]] + 1;
      
      var $41 = HEAP[$item_addr];
      HEAP[$41] = $39;
      
      
      
      var $45 = HEAP[HEAP[$deque_addr] + 24] + 1;
      
      var $47 = HEAP[$deque_addr] + 24;
      HEAP[$47] = $45;
      
      
      
      var $51 = HEAP[HEAP[$deque_addr] + 20] + 1;
      
      var $53 = HEAP[$deque_addr] + 20;
      HEAP[$53] = $51;
      
      
      
      
      
      
      
      var $61 = HEAP[HEAP[$deque_addr] + 12] + 8 + HEAP[HEAP[$deque_addr] + 20] * 4;
      var $62 = HEAP[$item_addr];
      HEAP[$61] = $62;
      
      
      
      var $66 = HEAP[HEAP[$deque_addr] + 28] != -1;
      if ($66) {
        __label__ = 7;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 24] > HEAP[HEAP[$deque_addr] + 28]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 8:
      var $74 = HEAP[$deque_addr];
      var $75 = _deque_popleft($74, 0);
      HEAP[$rv] = $75;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 24] > HEAP[HEAP[$deque_addr] + 28]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str9, __str3, 250, ___PRETTY_FUNCTION___8457);
      throw "Reached an unreachable!";
     case 11:
      
      
      
      var $88 = HEAP[HEAP[$rv]] - 1;
      
      var $90 = HEAP[$rv];
      HEAP[$90] = $88;
      
      
      
      
      if (HEAP[HEAP[$rv]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $99 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $100 = HEAP[$rv];
      FUNCTION_TABLE[$99]($100);
      __label__ = 13;
      break;
     case 13:
      
      var $102 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $102;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 14;
      break;
     case 14:
      var $103 = HEAP[$0];
      HEAP[$retval] = $103;
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
  function _deque_appendleft($deque, $item) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $item_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $b = __stackBase__ + 16;
      var $rv = __stackBase__ + 20;
      
      HEAP[$deque_addr] = $deque;
      HEAP[$item_addr] = $item;
      
      
      
      var $4 = HEAP[HEAP[$deque_addr] + 32] + 1;
      
      var $6 = HEAP[$deque_addr] + 32;
      HEAP[$6] = $4;
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 16] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      var $13 = HEAP[HEAP[$deque_addr] + 24];
      
      
      var $16 = HEAP[HEAP[$deque_addr] + 8];
      var $17 = _newblock(0, $16, $13);
      HEAP[$b] = $17;
      
      
      if (HEAP[$b] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 3:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$deque_addr] + 8]] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str10, __str3, 264, ___PRETTY_FUNCTION___8512);
      throw "Reached an unreachable!";
     case 5:
      
      
      
      var $29 = HEAP[HEAP[$deque_addr] + 8];
      var $30 = HEAP[$b];
      HEAP[$29] = $30;
      
      var $32 = HEAP[$deque_addr] + 8;
      var $33 = HEAP[$b];
      HEAP[$32] = $33;
      
      var $35 = HEAP[$deque_addr] + 16;
      HEAP[$35] = 62;
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $39 = HEAP[HEAP[$item_addr]] + 1;
      
      var $41 = HEAP[$item_addr];
      HEAP[$41] = $39;
      
      
      
      var $45 = HEAP[HEAP[$deque_addr] + 24] + 1;
      
      var $47 = HEAP[$deque_addr] + 24;
      HEAP[$47] = $45;
      
      
      
      var $51 = HEAP[HEAP[$deque_addr] + 16] - 1;
      
      var $53 = HEAP[$deque_addr] + 16;
      HEAP[$53] = $51;
      
      
      
      
      
      
      
      var $61 = HEAP[HEAP[$deque_addr] + 8] + 8 + HEAP[HEAP[$deque_addr] + 16] * 4;
      var $62 = HEAP[$item_addr];
      HEAP[$61] = $62;
      
      
      
      var $66 = HEAP[HEAP[$deque_addr] + 28] != -1;
      if ($66) {
        __label__ = 7;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 24] > HEAP[HEAP[$deque_addr] + 28]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 8:
      var $74 = HEAP[$deque_addr];
      var $75 = _deque_pop($74, 0);
      HEAP[$rv] = $75;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 24] > HEAP[HEAP[$deque_addr] + 28]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str9, __str3, 273, ___PRETTY_FUNCTION___8512);
      throw "Reached an unreachable!";
     case 11:
      
      
      
      var $88 = HEAP[HEAP[$rv]] - 1;
      
      var $90 = HEAP[$rv];
      HEAP[$90] = $88;
      
      
      
      
      if (HEAP[HEAP[$rv]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $99 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $100 = HEAP[$rv];
      FUNCTION_TABLE[$99]($100);
      __label__ = 13;
      break;
     case 13:
      
      var $102 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $102;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 14;
      break;
     case 14:
      var $103 = HEAP[$0];
      HEAP[$retval] = $103;
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
  function _consume_iterator($it) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $it_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $item = __stackBase__ + 12;
      
      HEAP[$it_addr] = $it;
      __label__ = 3;
      break;
     case 1:
      
      
      
      var $4 = HEAP[HEAP[$item]] - 1;
      
      var $6 = HEAP[$item];
      HEAP[$6] = $4;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $15 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $16 = HEAP[$item];
      FUNCTION_TABLE[$15]($16);
      __label__ = 3;
      break;
     case 3:
      var $17 = HEAP[$it_addr];
      var $18 = _PyIter_Next($17);
      HEAP[$item] = $18;
      
      
      if (HEAP[$item] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $24 = HEAP[HEAP[$it_addr]] - 1;
      
      var $26 = HEAP[$it_addr];
      HEAP[$26] = $24;
      
      
      
      
      if (HEAP[HEAP[$it_addr]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $35 = HEAP[HEAP[HEAP[$it_addr] + 4] + 24];
      var $36 = HEAP[$it_addr];
      FUNCTION_TABLE[$35]($36);
      __label__ = 6;
      break;
     case 6:
      var $37 = _PyErr_Occurred();
      
      if ($37 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 8:
      
      var $40 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $40;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 9;
      break;
     case 9:
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
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
  function _deque_extend($deque, $iterable) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $iterable_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $it = __stackBase__ + 16;
      var $item = __stackBase__ + 20;
      var $result = __stackBase__ + 24;
      var $s = __stackBase__ + 28;
      var $b = __stackBase__ + 32;
      var $rv = __stackBase__ + 36;
      
      HEAP[$deque_addr] = $deque;
      HEAP[$iterable_addr] = $iterable;
      
      
      
      
      if (HEAP[$deque_addr] == HEAP[$iterable_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      var $5 = HEAP[$iterable_addr];
      var $6 = _PySequence_List($5);
      HEAP[$s] = $6;
      
      
      if (HEAP[$s] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 3:
      var $9 = HEAP[$deque_addr];
      var $10 = HEAP[$s];
      var $11 = _deque_extend($9, $10);
      HEAP[$result] = $11;
      
      
      
      var $15 = HEAP[HEAP[$s]] - 1;
      
      var $17 = HEAP[$s];
      HEAP[$17] = $15;
      
      
      
      
      if (HEAP[HEAP[$s]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $26 = HEAP[HEAP[HEAP[$s] + 4] + 24];
      var $27 = HEAP[$s];
      FUNCTION_TABLE[$26]($27);
      __label__ = 5;
      break;
     case 5:
      var $28 = HEAP[$result];
      HEAP[$0] = $28;
      __label__ = 34;
      break;
     case 6:
      var $29 = HEAP[$iterable_addr];
      var $30 = _PyObject_GetIter($29);
      HEAP[$it] = $30;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 8:
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 28] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $37 = HEAP[$it];
      var $38 = _consume_iterator($37);
      HEAP[$0] = $38;
      __label__ = 34;
      break;
     case 10:
      __label__ = 28;
      break;
     case 11:
      
      
      
      var $42 = HEAP[HEAP[$deque_addr] + 32] + 1;
      
      var $44 = HEAP[$deque_addr] + 32;
      HEAP[$44] = $42;
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 20] == 61) {
        __label__ = 12;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 12:
      
      
      var $51 = HEAP[HEAP[$deque_addr] + 24];
      
      
      var $54 = HEAP[HEAP[$deque_addr] + 12];
      var $55 = _newblock($54, 0, $51);
      HEAP[$b] = $55;
      
      
      if (HEAP[$b] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 13:
      
      
      
      var $61 = HEAP[HEAP[$item]] - 1;
      
      var $63 = HEAP[$item];
      HEAP[$63] = $61;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $72 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $73 = HEAP[$item];
      FUNCTION_TABLE[$72]($73);
      __label__ = 15;
      break;
     case 15:
      
      
      
      var $77 = HEAP[HEAP[$it]] - 1;
      
      var $79 = HEAP[$it];
      HEAP[$79] = $77;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $88 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $89 = HEAP[$it];
      FUNCTION_TABLE[$88]($89);
      __label__ = 17;
      break;
     case 17:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 18:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$deque_addr] + 12] + 4] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      ___assert_fail(__str8, __str3, 329, ___PRETTY_FUNCTION___8600);
      throw "Reached an unreachable!";
     case 20:
      
      
      
      var $99 = HEAP[HEAP[$deque_addr] + 12] + 4;
      var $100 = HEAP[$b];
      HEAP[$99] = $100;
      
      var $102 = HEAP[$deque_addr] + 12;
      var $103 = HEAP[$b];
      HEAP[$102] = $103;
      
      var $105 = HEAP[$deque_addr] + 20;
      HEAP[$105] = -1;
      __label__ = 21;
      break;
     case 21:
      
      
      
      var $109 = HEAP[HEAP[$deque_addr] + 24] + 1;
      
      var $111 = HEAP[$deque_addr] + 24;
      HEAP[$111] = $109;
      
      
      
      var $115 = HEAP[HEAP[$deque_addr] + 20] + 1;
      
      var $117 = HEAP[$deque_addr] + 20;
      HEAP[$117] = $115;
      
      
      
      
      
      
      
      var $125 = HEAP[HEAP[$deque_addr] + 12] + 8 + HEAP[HEAP[$deque_addr] + 20] * 4;
      var $126 = HEAP[$item];
      HEAP[$125] = $126;
      
      
      
      var $130 = HEAP[HEAP[$deque_addr] + 28] != -1;
      if ($130) {
        __label__ = 22;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 22:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 24] > HEAP[HEAP[$deque_addr] + 28]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 23:
      var $138 = HEAP[$deque_addr];
      var $139 = _deque_popleft($138, 0);
      HEAP[$rv] = $139;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 24] > HEAP[HEAP[$deque_addr] + 28]) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      ___assert_fail(__str9, __str3, 337, ___PRETTY_FUNCTION___8600);
      throw "Reached an unreachable!";
     case 26:
      
      
      
      var $152 = HEAP[HEAP[$rv]] - 1;
      
      var $154 = HEAP[$rv];
      HEAP[$154] = $152;
      
      
      
      
      if (HEAP[HEAP[$rv]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $163 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $164 = HEAP[$rv];
      FUNCTION_TABLE[$163]($164);
      __label__ = 28;
      break;
     case 28:
      var $165 = HEAP[$it];
      var $166 = _PyIter_Next($165);
      HEAP[$item] = $166;
      
      
      if (HEAP[$item] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      var $172 = HEAP[HEAP[$it]] - 1;
      
      var $174 = HEAP[$it];
      HEAP[$174] = $172;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $183 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $184 = HEAP[$it];
      FUNCTION_TABLE[$183]($184);
      __label__ = 31;
      break;
     case 31:
      var $185 = _PyErr_Occurred();
      
      if ($185 != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 33:
      
      var $188 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $188;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 34;
      break;
     case 34:
      var $189 = HEAP[$0];
      HEAP[$retval] = $189;
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
  function _deque_extendleft($deque, $iterable) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $iterable_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $it = __stackBase__ + 16;
      var $item = __stackBase__ + 20;
      var $result = __stackBase__ + 24;
      var $s = __stackBase__ + 28;
      var $b = __stackBase__ + 32;
      var $rv = __stackBase__ + 36;
      
      HEAP[$deque_addr] = $deque;
      HEAP[$iterable_addr] = $iterable;
      
      
      
      
      if (HEAP[$deque_addr] == HEAP[$iterable_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      var $5 = HEAP[$iterable_addr];
      var $6 = _PySequence_List($5);
      HEAP[$s] = $6;
      
      
      if (HEAP[$s] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 3:
      var $9 = HEAP[$deque_addr];
      var $10 = HEAP[$s];
      var $11 = _deque_extendleft($9, $10);
      HEAP[$result] = $11;
      
      
      
      var $15 = HEAP[HEAP[$s]] - 1;
      
      var $17 = HEAP[$s];
      HEAP[$17] = $15;
      
      
      
      
      if (HEAP[HEAP[$s]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $26 = HEAP[HEAP[HEAP[$s] + 4] + 24];
      var $27 = HEAP[$s];
      FUNCTION_TABLE[$26]($27);
      __label__ = 5;
      break;
     case 5:
      var $28 = HEAP[$result];
      HEAP[$0] = $28;
      __label__ = 34;
      break;
     case 6:
      var $29 = HEAP[$iterable_addr];
      var $30 = _PyObject_GetIter($29);
      HEAP[$it] = $30;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 8:
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 28] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $37 = HEAP[$it];
      var $38 = _consume_iterator($37);
      HEAP[$0] = $38;
      __label__ = 34;
      break;
     case 10:
      __label__ = 28;
      break;
     case 11:
      
      
      
      var $42 = HEAP[HEAP[$deque_addr] + 32] + 1;
      
      var $44 = HEAP[$deque_addr] + 32;
      HEAP[$44] = $42;
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 16] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 12:
      
      
      var $51 = HEAP[HEAP[$deque_addr] + 24];
      
      
      var $54 = HEAP[HEAP[$deque_addr] + 8];
      var $55 = _newblock(0, $54, $51);
      HEAP[$b] = $55;
      
      
      if (HEAP[$b] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 13:
      
      
      
      var $61 = HEAP[HEAP[$item]] - 1;
      
      var $63 = HEAP[$item];
      HEAP[$63] = $61;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $72 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $73 = HEAP[$item];
      FUNCTION_TABLE[$72]($73);
      __label__ = 15;
      break;
     case 15:
      
      
      
      var $77 = HEAP[HEAP[$it]] - 1;
      
      var $79 = HEAP[$it];
      HEAP[$79] = $77;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $88 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $89 = HEAP[$it];
      FUNCTION_TABLE[$88]($89);
      __label__ = 17;
      break;
     case 17:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 18:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$deque_addr] + 8]] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      ___assert_fail(__str10, __str3, 381, ___PRETTY_FUNCTION___8706);
      throw "Reached an unreachable!";
     case 20:
      
      
      
      var $99 = HEAP[HEAP[$deque_addr] + 8];
      var $100 = HEAP[$b];
      HEAP[$99] = $100;
      
      var $102 = HEAP[$deque_addr] + 8;
      var $103 = HEAP[$b];
      HEAP[$102] = $103;
      
      var $105 = HEAP[$deque_addr] + 16;
      HEAP[$105] = 62;
      __label__ = 21;
      break;
     case 21:
      
      
      
      var $109 = HEAP[HEAP[$deque_addr] + 24] + 1;
      
      var $111 = HEAP[$deque_addr] + 24;
      HEAP[$111] = $109;
      
      
      
      var $115 = HEAP[HEAP[$deque_addr] + 16] - 1;
      
      var $117 = HEAP[$deque_addr] + 16;
      HEAP[$117] = $115;
      
      
      
      
      
      
      
      var $125 = HEAP[HEAP[$deque_addr] + 8] + 8 + HEAP[HEAP[$deque_addr] + 16] * 4;
      var $126 = HEAP[$item];
      HEAP[$125] = $126;
      
      
      
      var $130 = HEAP[HEAP[$deque_addr] + 28] != -1;
      if ($130) {
        __label__ = 22;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 22:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 24] > HEAP[HEAP[$deque_addr] + 28]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 23:
      var $138 = HEAP[$deque_addr];
      var $139 = _deque_pop($138, 0);
      HEAP[$rv] = $139;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 24] > HEAP[HEAP[$deque_addr] + 28]) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      ___assert_fail(__str9, __str3, 389, ___PRETTY_FUNCTION___8706);
      throw "Reached an unreachable!";
     case 26:
      
      
      
      var $152 = HEAP[HEAP[$rv]] - 1;
      
      var $154 = HEAP[$rv];
      HEAP[$154] = $152;
      
      
      
      
      if (HEAP[HEAP[$rv]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $163 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $164 = HEAP[$rv];
      FUNCTION_TABLE[$163]($164);
      __label__ = 28;
      break;
     case 28:
      var $165 = HEAP[$it];
      var $166 = _PyIter_Next($165);
      HEAP[$item] = $166;
      
      
      if (HEAP[$item] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      var $172 = HEAP[HEAP[$it]] - 1;
      
      var $174 = HEAP[$it];
      HEAP[$174] = $172;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $183 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $184 = HEAP[$it];
      FUNCTION_TABLE[$183]($184);
      __label__ = 31;
      break;
     case 31:
      var $185 = _PyErr_Occurred();
      
      if ($185 != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 33:
      
      var $188 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $188;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 34;
      break;
     case 34:
      var $189 = HEAP[$0];
      HEAP[$retval] = $189;
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
  function _deque_inplace_concat($deque, $other) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $other_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      
      HEAP[$deque_addr] = $deque;
      HEAP[$other_addr] = $other;
      var $1 = HEAP[$deque_addr];
      var $2 = HEAP[$other_addr];
      var $3 = _deque_extend($1, $2);
      HEAP[$result] = $3;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $6 = HEAP[$result];
      HEAP[$0] = $6;
      __label__ = 5;
      break;
     case 2:
      
      
      
      var $10 = HEAP[HEAP[$result]] - 1;
      
      var $12 = HEAP[$result];
      HEAP[$12] = $10;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $21 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $22 = HEAP[$result];
      FUNCTION_TABLE[$21]($22);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      var $27 = HEAP[HEAP[$deque_addr]] + 1;
      var $28 = HEAP[$deque_addr];
      HEAP[$28] = $27;
      
      var $30 = HEAP[$deque_addr];
      HEAP[$0] = $30;
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
  function __deque_rotate($deque, $n) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $n_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $len = __stackBase__ + 20;
      var $halflen = __stackBase__ + 24;
      var $item = __stackBase__ + 28;
      var $rv = __stackBase__ + 32;
      
      HEAP[$deque_addr] = $deque;
      HEAP[$n_addr] = $n;
      
      
      var $3 = HEAP[HEAP[$deque_addr] + 24];
      HEAP[$len] = $3;
      
      
      var $6 = HEAP[$len] + 1 >> 1;
      HEAP[$halflen] = $6;
      
      
      if (HEAP[$len] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 2:
      
      
      
      if (HEAP[$n_addr] > HEAP[$halflen]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      if (0 - HEAP[$halflen] > HEAP[$n_addr]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      var $18 = HEAP[$n_addr] % HEAP[$len];
      HEAP[$n_addr] = $18;
      
      
      
      if (HEAP[$n_addr] > HEAP[$halflen]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $24 = HEAP[$n_addr] - HEAP[$len];
      HEAP[$n_addr] = $24;
      __label__ = 8;
      break;
     case 6:
      
      
      
      
      if (0 - HEAP[$halflen] > HEAP[$n_addr]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $31 = HEAP[$n_addr] + HEAP[$len];
      HEAP[$n_addr] = $31;
      __label__ = 8;
      break;
     case 8:
      HEAP[$i] = 0;
      __label__ = 18;
      break;
     case 9:
      var $32 = HEAP[$deque_addr];
      var $33 = _deque_pop($32, 0);
      HEAP[$item] = $33;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str11, __str3, 431, ___PRETTY_FUNCTION___8832);
      throw "Reached an unreachable!";
     case 11:
      var $36 = HEAP[$deque_addr];
      var $37 = HEAP[$item];
      var $38 = _deque_appendleft($36, $37);
      HEAP[$rv] = $38;
      
      
      
      var $42 = HEAP[HEAP[$item]] - 1;
      
      var $44 = HEAP[$item];
      HEAP[$44] = $42;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $53 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $54 = HEAP[$item];
      FUNCTION_TABLE[$53]($54);
      __label__ = 13;
      break;
     case 13:
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = -1;
      __label__ = 31;
      break;
     case 15:
      
      
      
      var $60 = HEAP[HEAP[$rv]] - 1;
      
      var $62 = HEAP[$rv];
      HEAP[$62] = $60;
      
      
      
      
      if (HEAP[HEAP[$rv]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $71 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $72 = HEAP[$rv];
      FUNCTION_TABLE[$71]($72);
      __label__ = 17;
      break;
     case 17:
      
      var $74 = HEAP[$i] + 1;
      HEAP[$i] = $74;
      __label__ = 18;
      break;
     case 18:
      
      
      
      if (HEAP[$i] < HEAP[$n_addr]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      HEAP[$i] = 0;
      __label__ = 29;
      break;
     case 20:
      var $78 = HEAP[$deque_addr];
      var $79 = _deque_popleft($78, 0);
      HEAP[$item] = $79;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      ___assert_fail(__str11, __str3, 440, ___PRETTY_FUNCTION___8832);
      throw "Reached an unreachable!";
     case 22:
      var $82 = HEAP[$deque_addr];
      var $83 = HEAP[$item];
      var $84 = _deque_append($82, $83);
      HEAP[$rv] = $84;
      
      
      
      var $88 = HEAP[HEAP[$item]] - 1;
      
      var $90 = HEAP[$item];
      HEAP[$90] = $88;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $99 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $100 = HEAP[$item];
      FUNCTION_TABLE[$99]($100);
      __label__ = 24;
      break;
     case 24:
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      HEAP[$0] = -1;
      __label__ = 31;
      break;
     case 26:
      
      
      
      var $106 = HEAP[HEAP[$rv]] - 1;
      
      var $108 = HEAP[$rv];
      HEAP[$108] = $106;
      
      
      
      
      if (HEAP[HEAP[$rv]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $117 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $118 = HEAP[$rv];
      FUNCTION_TABLE[$117]($118);
      __label__ = 28;
      break;
     case 28:
      
      var $120 = HEAP[$i] - 1;
      HEAP[$i] = $120;
      __label__ = 29;
      break;
     case 29:
      
      
      
      if (HEAP[$i] > HEAP[$n_addr]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 31:
      var $124 = HEAP[$0];
      HEAP[$retval] = $124;
      __label__ = 32;
      break;
     case 32:
      var $retval31 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval31;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _deque_rotate($deque, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $n = __stackBase__ + 16;
      
      HEAP[$deque_addr] = $deque;
      HEAP[$args_addr] = $args;
      HEAP[$n] = 1;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str12, allocate([ $n, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $5 = HEAP[$deque_addr];
      var $6 = __deque_rotate($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $9 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $9;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 5;
      break;
     case 4:
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $10 = HEAP[$0];
      HEAP[$retval] = $10;
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
  function _deque_reverse($deque, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $leftblock = __stackBase__ + 16;
      var $rightblock = __stackBase__ + 20;
      var $leftindex = __stackBase__ + 24;
      var $rightindex = __stackBase__ + 28;
      var $n = __stackBase__ + 32;
      var $i = __stackBase__ + 36;
      var $tmp = __stackBase__ + 40;
      
      HEAP[$deque_addr] = $deque;
      HEAP[$unused_addr] = $unused;
      
      
      var $3 = HEAP[HEAP[$deque_addr] + 8];
      HEAP[$leftblock] = $3;
      
      
      var $6 = HEAP[HEAP[$deque_addr] + 12];
      HEAP[$rightblock] = $6;
      
      
      var $9 = HEAP[HEAP[$deque_addr] + 16];
      HEAP[$leftindex] = $9;
      
      
      var $12 = HEAP[HEAP[$deque_addr] + 20];
      HEAP[$rightindex] = $12;
      
      
      
      var $16 = HEAP[HEAP[$deque_addr] + 24] / 2 | 0;
      HEAP[$n] = $16;
      HEAP[$i] = 0;
      __label__ = 11;
      break;
     case 1:
      
      
      
      if (HEAP[$leftblock] == HEAP[$rightblock]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      if (HEAP[$leftindex] >= HEAP[$rightindex]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str13, __str3, 478, ___PRETTY_FUNCTION___8922);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      
      var $27 = HEAP[HEAP[$leftblock] + 8 + HEAP[$leftindex] * 4];
      HEAP[$tmp] = $27;
      
      
      
      
      
      var $33 = HEAP[HEAP[$rightblock] + 8 + HEAP[$rightindex] * 4];
      
      
      var $36 = HEAP[$leftblock] + 8 + HEAP[$leftindex] * 4;
      HEAP[$36] = $33;
      
      
      
      var $40 = HEAP[$rightblock] + 8 + HEAP[$rightindex] * 4;
      var $41 = HEAP[$tmp];
      HEAP[$40] = $41;
      
      var $43 = HEAP[$leftindex] + 1;
      HEAP[$leftindex] = $43;
      
      
      if (HEAP[$leftindex] == 62) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[HEAP[$leftblock] + 4] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $52 = HEAP[HEAP[$leftblock] + 4];
      HEAP[$leftblock] = $52;
      HEAP[$leftindex] = 0;
      __label__ = 7;
      break;
     case 7:
      
      var $54 = HEAP[$rightindex] - 1;
      HEAP[$rightindex] = $54;
      
      var $56 = HEAP[$rightindex] == -1;
      if ($56) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[HEAP[$rightblock]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      var $63 = HEAP[HEAP[$rightblock]];
      HEAP[$rightblock] = $63;
      HEAP[$rightindex] = 61;
      __label__ = 10;
      break;
     case 10:
      
      var $65 = HEAP[$i] + 1;
      HEAP[$i] = $65;
      __label__ = 11;
      break;
     case 11:
      
      
      
      if (HEAP[$i] < HEAP[$n]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      var $70 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $70;
      HEAP[$0] = __Py_NoneStruct;
      var $71 = HEAP[$0];
      HEAP[$retval] = $71;
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
  function _deque_count($deque, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $leftblock = __stackBase__ + 16;
      var $leftindex = __stackBase__ + 20;
      var $n = __stackBase__ + 24;
      var $i = __stackBase__ + 28;
      var $count = __stackBase__ + 32;
      var $item = __stackBase__ + 36;
      var $start_state = __stackBase__ + 40;
      var $cmp = __stackBase__ + 44;
      
      HEAP[$deque_addr] = $deque;
      HEAP[$v_addr] = $v;
      
      
      var $3 = HEAP[HEAP[$deque_addr] + 8];
      HEAP[$leftblock] = $3;
      
      
      var $6 = HEAP[HEAP[$deque_addr] + 16];
      HEAP[$leftindex] = $6;
      
      
      var $9 = HEAP[HEAP[$deque_addr] + 24];
      HEAP[$n] = $9;
      HEAP[$count] = 0;
      
      
      var $12 = HEAP[HEAP[$deque_addr] + 32];
      HEAP[$start_state] = $12;
      HEAP[$i] = 0;
      __label__ = 11;
      break;
     case 1:
      
      
      
      
      var $17 = HEAP[HEAP[$leftblock] + 8 + HEAP[$leftindex] * 4];
      HEAP[$item] = $17;
      var $18 = HEAP[$item];
      var $19 = HEAP[$v_addr];
      var $20 = _PyObject_RichCompareBool($18, $19, 2);
      HEAP[$cmp] = $20;
      
      
      if (HEAP[$cmp] > 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $24 = HEAP[$count] + 1;
      HEAP[$count] = $24;
      __label__ = 5;
      break;
     case 3:
      
      
      if (HEAP[$cmp] < 0) {
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
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 32] != HEAP[$start_state]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $32 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($32, __str14);
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 7:
      
      var $34 = HEAP[$leftindex] + 1;
      HEAP[$leftindex] = $34;
      
      
      if (HEAP[$leftindex] == 62) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[HEAP[$leftblock] + 4] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      var $43 = HEAP[HEAP[$leftblock] + 4];
      HEAP[$leftblock] = $43;
      HEAP[$leftindex] = 0;
      __label__ = 10;
      break;
     case 10:
      
      var $45 = HEAP[$i] + 1;
      HEAP[$i] = $45;
      __label__ = 11;
      break;
     case 11:
      
      
      
      if (HEAP[$i] < HEAP[$n]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $49 = HEAP[$count];
      var $50 = _PyInt_FromSsize_t($49);
      HEAP[$0] = $50;
      __label__ = 13;
      break;
     case 13:
      var $51 = HEAP[$0];
      HEAP[$retval] = $51;
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
  function _deque_len($deque) {
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
      
      HEAP[__stackBase__] = $deque;
      
      
      var $3 = HEAP[HEAP[__stackBase__] + 24];
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
  function _deque_remove($deque, $value) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $value_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $n = __stackBase__ + 20;
      var $item = __stackBase__ + 24;
      var $cmp = __stackBase__ + 28;
      var $tgt = __stackBase__ + 32;
      
      HEAP[$deque_addr] = $deque;
      HEAP[$value_addr] = $value;
      
      
      var $3 = HEAP[HEAP[$deque_addr] + 24];
      HEAP[$n] = $3;
      HEAP[$i] = 0;
      __label__ = 14;
      break;
     case 1:
      
      
      
      
      
      
      
      
      var $12 = HEAP[HEAP[HEAP[$deque_addr] + 8] + 8 + HEAP[HEAP[$deque_addr] + 16] * 4];
      HEAP[$item] = $12;
      var $13 = HEAP[$item];
      var $14 = HEAP[$value_addr];
      var $15 = _PyObject_RichCompareBool($13, $14, 2);
      HEAP[$cmp] = $15;
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 24] != HEAP[$n]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $21 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($21, __str15);
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 3:
      
      
      if (HEAP[$cmp] > 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 4:
      var $24 = HEAP[$deque_addr];
      var $25 = _deque_popleft($24, 0);
      HEAP[$tgt] = $25;
      
      
      if (HEAP[$tgt] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str16, __str3, 572, ___PRETTY_FUNCTION___8997);
      throw "Reached an unreachable!";
     case 6:
      
      
      
      var $31 = HEAP[HEAP[$tgt]] - 1;
      
      var $33 = HEAP[$tgt];
      HEAP[$33] = $31;
      
      
      
      
      if (HEAP[HEAP[$tgt]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $42 = HEAP[HEAP[HEAP[$tgt] + 4] + 24];
      var $43 = HEAP[$tgt];
      FUNCTION_TABLE[$42]($43);
      __label__ = 8;
      break;
     case 8:
      var $44 = HEAP[$deque_addr];
      var $45 = HEAP[$i];
      var $46 = __deque_rotate($44, $45);
      var $47 = $46 == -1;
      if ($47) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 10:
      
      var $49 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $49;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 16;
      break;
     case 11:
      
      
      if (HEAP[$cmp] < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $52 = HEAP[$deque_addr];
      var $53 = HEAP[$i];
      var $54 = __deque_rotate($52, $53);
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 13:
      var $55 = HEAP[$deque_addr];
      var $56 = __deque_rotate($55, -1);
      
      var $58 = HEAP[$i] + 1;
      HEAP[$i] = $58;
      __label__ = 14;
      break;
     case 14:
      
      
      
      if (HEAP[$i] < HEAP[$n]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $62 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($62, __str17);
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 16:
      var $63 = HEAP[$0];
      HEAP[$retval] = $63;
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
  function _deque_clear($deque) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $item = __stackBase__ + 12;
      
      HEAP[$deque_addr] = $deque;
      __label__ = 5;
      break;
     case 1:
      var $1 = HEAP[$deque_addr];
      var $2 = _deque_pop($1, 0);
      HEAP[$item] = $2;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str11, __str3, 598, ___PRETTY_FUNCTION___9035);
      throw "Reached an unreachable!";
     case 3:
      
      
      
      var $8 = HEAP[HEAP[$item]] - 1;
      
      var $10 = HEAP[$item];
      HEAP[$10] = $8;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $19 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $20 = HEAP[$item];
      FUNCTION_TABLE[$19]($20);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 24] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 8] != HEAP[HEAP[$deque_addr] + 12]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 16] - 1 != HEAP[HEAP[$deque_addr] + 20]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 24] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      ___assert_fail(__str18, __str3, 603, ___PRETTY_FUNCTION___9035);
      throw "Reached an unreachable!";
     case 10:
      HEAP[$0] = 0;
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
  function _deque_item($deque, $i) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $b = __stackBase__ + 16;
      var $item = __stackBase__ + 20;
      var $n = __stackBase__ + 24;
      var $index = __stackBase__ + 28;
      
      HEAP[$deque_addr] = $deque;
      HEAP[$i_addr] = $i;
      var $1 = HEAP[$i_addr];
      HEAP[$index] = $1;
      
      
      if (HEAP[$i_addr] < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 24] <= HEAP[$i_addr]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $9 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($9, __str19);
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 3:
      
      
      if (HEAP[$i_addr] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $14 = HEAP[HEAP[$deque_addr] + 16];
      HEAP[$i_addr] = $14;
      
      
      var $17 = HEAP[HEAP[$deque_addr] + 8];
      HEAP[$b] = $17;
      __label__ = 15;
      break;
     case 5:
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 24] - 1 == HEAP[$i_addr]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      var $26 = HEAP[HEAP[$deque_addr] + 20];
      HEAP[$i_addr] = $26;
      
      
      var $29 = HEAP[HEAP[$deque_addr] + 12];
      HEAP[$b] = $29;
      __label__ = 15;
      break;
     case 7:
      
      
      
      
      var $34 = HEAP[HEAP[$deque_addr] + 16] + HEAP[$i_addr];
      HEAP[$i_addr] = $34;
      
      var $36 = HEAP[$i_addr] / 62 | 0;
      HEAP[$n] = $36;
      
      var $38 = HEAP[$i_addr] % 62;
      HEAP[$i_addr] = $38;
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 24] >> 1 > HEAP[$index]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      var $47 = HEAP[HEAP[$deque_addr] + 8];
      HEAP[$b] = $47;
      __label__ = 10;
      break;
     case 9:
      
      
      var $50 = HEAP[HEAP[$b] + 4];
      HEAP[$b] = $50;
      __label__ = 10;
      break;
     case 10:
      
      var $52 = HEAP[$n] - 1;
      HEAP[$n] = $52;
      
      var $54 = HEAP[$n] != -1;
      if ($54) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      __label__ = 15;
      break;
     case 12:
      
      
      
      
      
      
      
      
      
      
      var $65 = ((HEAP[HEAP[$deque_addr] + 16] + HEAP[HEAP[$deque_addr] + 24] - 1) / 62 | 0) - HEAP[$n];
      HEAP[$n] = $65;
      
      
      var $68 = HEAP[HEAP[$deque_addr] + 12];
      HEAP[$b] = $68;
      __label__ = 14;
      break;
     case 13:
      
      
      var $71 = HEAP[HEAP[$b]];
      HEAP[$b] = $71;
      __label__ = 14;
      break;
     case 14:
      
      var $73 = HEAP[$n] - 1;
      HEAP[$n] = $73;
      
      var $75 = HEAP[$n] != -1;
      if ($75) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      var $80 = HEAP[HEAP[$b] + 8 + HEAP[$i_addr] * 4];
      HEAP[$item] = $80;
      
      
      
      var $84 = HEAP[HEAP[$item]] + 1;
      
      var $86 = HEAP[$item];
      HEAP[$86] = $84;
      var $87 = HEAP[$item];
      HEAP[$0] = $87;
      __label__ = 16;
      break;
     case 16:
      var $88 = HEAP[$0];
      HEAP[$retval] = $88;
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
  function _deque_del_item($deque, $i) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $item = __stackBase__ + 16;
      
      HEAP[$deque_addr] = $deque;
      HEAP[$i_addr] = $i;
      
      
      if (HEAP[$i_addr] < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 24] <= HEAP[$i_addr]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str20, __str3, 658, ___PRETTY_FUNCTION___9110);
      throw "Reached an unreachable!";
     case 3:
      
      var $9 = 0 - HEAP[$i_addr];
      var $10 = HEAP[$deque_addr];
      var $11 = __deque_rotate($10, $9);
      var $12 = $11 == -1;
      if ($12) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 5:
      var $13 = HEAP[$deque_addr];
      var $14 = _deque_popleft($13, 0);
      HEAP[$item] = $14;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      ___assert_fail(__str11, __str3, 663, ___PRETTY_FUNCTION___9110);
      throw "Reached an unreachable!";
     case 7:
      
      
      
      var $20 = HEAP[HEAP[$item]] - 1;
      
      var $22 = HEAP[$item];
      HEAP[$22] = $20;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $31 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $32 = HEAP[$item];
      FUNCTION_TABLE[$31]($32);
      __label__ = 9;
      break;
     case 9:
      var $33 = HEAP[$deque_addr];
      var $34 = HEAP[$i_addr];
      var $35 = __deque_rotate($33, $34);
      HEAP[$0] = $35;
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
  function _deque_ass_item($deque, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $v_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $old_value = __stackBase__ + 20;
      var $b = __stackBase__ + 24;
      var $n = __stackBase__ + 28;
      var $len = __stackBase__ + 32;
      var $halflen = __stackBase__ + 36;
      var $index = __stackBase__ + 40;
      
      HEAP[$deque_addr] = $deque;
      HEAP[$i_addr] = $i;
      HEAP[$v_addr] = $v;
      
      
      var $3 = HEAP[HEAP[$deque_addr] + 24];
      HEAP[$len] = $3;
      
      
      var $6 = HEAP[$len] + 1 >> 1;
      HEAP[$halflen] = $6;
      var $7 = HEAP[$i_addr];
      HEAP[$index] = $7;
      
      
      if (HEAP[$i_addr] < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      if (HEAP[$i_addr] >= HEAP[$len]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($13, __str19);
      HEAP[$0] = -1;
      __label__ = 16;
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
      var $16 = HEAP[$deque_addr];
      var $17 = HEAP[$i_addr];
      var $18 = _deque_del_item($16, $17);
      HEAP[$0] = $18;
      __label__ = 16;
      break;
     case 5:
      
      
      
      
      var $23 = HEAP[HEAP[$deque_addr] + 16] + HEAP[$i_addr];
      HEAP[$i_addr] = $23;
      
      var $25 = HEAP[$i_addr] / 62 | 0;
      HEAP[$n] = $25;
      
      var $27 = HEAP[$i_addr] % 62;
      HEAP[$i_addr] = $27;
      
      
      
      if (HEAP[$index] <= HEAP[$halflen]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      
      
      var $33 = HEAP[HEAP[$deque_addr] + 8];
      HEAP[$b] = $33;
      __label__ = 8;
      break;
     case 7:
      
      
      var $36 = HEAP[HEAP[$b] + 4];
      HEAP[$b] = $36;
      __label__ = 8;
      break;
     case 8:
      
      var $38 = HEAP[$n] - 1;
      HEAP[$n] = $38;
      
      var $40 = HEAP[$n] != -1;
      if ($40) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      __label__ = 13;
      break;
     case 10:
      
      
      
      
      
      
      
      
      var $49 = ((HEAP[HEAP[$deque_addr] + 16] + HEAP[$len] - 1) / 62 | 0) - HEAP[$n];
      HEAP[$n] = $49;
      
      
      var $52 = HEAP[HEAP[$deque_addr] + 12];
      HEAP[$b] = $52;
      __label__ = 12;
      break;
     case 11:
      
      
      var $55 = HEAP[HEAP[$b]];
      HEAP[$b] = $55;
      __label__ = 12;
      break;
     case 12:
      
      var $57 = HEAP[$n] - 1;
      HEAP[$n] = $57;
      
      var $59 = HEAP[$n] != -1;
      if ($59) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $63 = HEAP[HEAP[$v_addr]] + 1;
      
      var $65 = HEAP[$v_addr];
      HEAP[$65] = $63;
      
      
      
      
      var $70 = HEAP[HEAP[$b] + 8 + HEAP[$i_addr] * 4];
      HEAP[$old_value] = $70;
      
      
      
      var $74 = HEAP[$b] + 8 + HEAP[$i_addr] * 4;
      var $75 = HEAP[$v_addr];
      HEAP[$74] = $75;
      
      
      
      var $79 = HEAP[HEAP[$old_value]] - 1;
      
      var $81 = HEAP[$old_value];
      HEAP[$81] = $79;
      
      
      
      
      if (HEAP[HEAP[$old_value]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $90 = HEAP[HEAP[HEAP[$old_value] + 4] + 24];
      var $91 = HEAP[$old_value];
      FUNCTION_TABLE[$90]($91);
      __label__ = 15;
      break;
     case 15:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 16:
      var $92 = HEAP[$0];
      HEAP[$retval] = $92;
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
  function _deque_clearmethod($deque) {
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
      var $rv = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $deque;
      var $1 = HEAP[__stackBase__];
      var $2 = _deque_clear($1);
      HEAP[$rv] = $2;
      
      var $4 = HEAP[$rv] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str21, __str3, 710, ___PRETTY_FUNCTION___9182);
      throw "Reached an unreachable!";
     case 2:
      
      var $6 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $6;
      HEAP[$0] = __Py_NoneStruct;
      var $7 = HEAP[$0];
      HEAP[$retval] = $7;
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
  function _deque_dealloc($deque) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      
      HEAP[$deque_addr] = $deque;
      
      var $1 = HEAP[$deque_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 36] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $7 = HEAP[$deque_addr];
      _PyObject_ClearWeakRefs($7);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      var $12 = HEAP[$deque_addr];
      var $13 = _deque_clear($12);
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 8] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str6, __str3, 724, ___PRETTY_FUNCTION___9194);
      throw "Reached an unreachable!";
     case 5:
      
      
      var $20 = HEAP[HEAP[$deque_addr] + 8];
      _freeblock($20);
      __label__ = 6;
      break;
     case 6:
      
      var $22 = HEAP[$deque_addr] + 8;
      HEAP[$22] = 0;
      
      var $24 = HEAP[$deque_addr] + 12;
      HEAP[$24] = 0;
      
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[$deque_addr] + 4] + 160];
      
      var $32 = HEAP[$deque_addr];
      FUNCTION_TABLE[$30]($32);
      __label__ = 7;
      break;
     case 7:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _deque_traverse($deque, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $iftmp_31 = __stackBase__ + 20;
      var $b = __stackBase__ + 24;
      var $item = __stackBase__ + 28;
      var $index = __stackBase__ + 32;
      var $indexlo = __stackBase__ + 36;
      var $indexhi = __stackBase__ + 40;
      var $vret = __stackBase__ + 44;
      
      HEAP[$deque_addr] = $deque;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      var $3 = HEAP[HEAP[$deque_addr] + 16];
      HEAP[$indexlo] = $3;
      
      
      var $6 = HEAP[HEAP[$deque_addr] + 8];
      HEAP[$b] = $6;
      __label__ = 11;
      break;
     case 1:
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr] + 12] == HEAP[$b]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      var $14 = HEAP[HEAP[$deque_addr] + 20];
      HEAP[$iftmp_31] = $14;
      __label__ = 4;
      break;
     case 3:
      HEAP[$iftmp_31] = 61;
      __label__ = 4;
      break;
     case 4:
      var $15 = HEAP[$iftmp_31];
      HEAP[$indexhi] = $15;
      var $16 = HEAP[$indexlo];
      HEAP[$index] = $16;
      __label__ = 9;
      break;
     case 5:
      
      
      
      
      var $21 = HEAP[HEAP[$b] + 8 + HEAP[$index] * 4];
      HEAP[$item] = $21;
      
      
      if (HEAP[$item] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      var $24 = HEAP[$visit_addr];
      var $25 = HEAP[$item];
      var $26 = HEAP[$arg_addr];
      var $27 = FUNCTION_TABLE[$24]($25, $26);
      HEAP[$vret] = $27;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $30 = HEAP[$vret];
      HEAP[$0] = $30;
      __label__ = 13;
      break;
     case 8:
      
      var $32 = HEAP[$index] + 1;
      HEAP[$index] = $32;
      __label__ = 9;
      break;
     case 9:
      
      
      
      if (HEAP[$index] <= HEAP[$indexhi]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      HEAP[$indexlo] = 0;
      
      
      var $38 = HEAP[HEAP[$b] + 4];
      HEAP[$b] = $38;
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$b] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
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
  function _deque_copy($deque) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$deque_addr] = $deque;
      
      
      
      
      var $5 = HEAP[HEAP[$deque_addr] + 28] == -1;
      if ($5) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[HEAP[$deque_addr] + 4];
      var $10 = HEAP[$deque_addr];
      var $11 = _PyObject_CallFunction($9, __str22, allocate([ $10, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $11;
      __label__ = 3;
      break;
     case 2:
      
      
      
      var $15 = HEAP[HEAP[$deque_addr] + 28];
      
      
      
      var $19 = HEAP[HEAP[$deque_addr] + 4];
      var $20 = HEAP[$deque_addr];
      var $21 = _PyObject_CallFunction($19, __str23, allocate([ $20, 0, 0, 0, $15, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $21;
      __label__ = 3;
      break;
     case 3:
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
  function _deque_reduce($deque) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $dict = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      var $aslist = __stackBase__ + 20;
      
      HEAP[$deque_addr] = $deque;
      
      var $2 = HEAP[$deque_addr];
      var $3 = _PyObject_GetAttrString($2, __str24);
      HEAP[$dict] = $3;
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      _PyErr_Clear();
      __label__ = 2;
      break;
     case 2:
      
      var $7 = HEAP[$deque_addr];
      var $8 = _PySequence_List($7);
      HEAP[$aslist] = $8;
      
      
      if (HEAP[$aslist] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      if (HEAP[$dict] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      var $16 = HEAP[HEAP[$dict]] - 1;
      
      var $18 = HEAP[$dict];
      HEAP[$18] = $16;
      
      
      
      
      if (HEAP[HEAP[$dict]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[$dict] + 4] + 24];
      var $28 = HEAP[$dict];
      FUNCTION_TABLE[$27]($28);
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 7:
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      
      var $34 = HEAP[HEAP[$deque_addr] + 28] == -1;
      if ($34) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      var $38 = HEAP[HEAP[$deque_addr] + 4];
      var $39 = HEAP[$aslist];
      var $40 = _Py_BuildValue(__str25, allocate([ $38, 0, 0, 0, $39, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $40;
      __label__ = 11;
      break;
     case 10:
      
      
      var $43 = HEAP[HEAP[$deque_addr] + 28];
      
      
      
      var $47 = HEAP[HEAP[$deque_addr] + 4];
      var $48 = HEAP[$aslist];
      var $49 = _Py_BuildValue(__str26, allocate([ $47, 0, 0, 0, $48, 0, 0, 0, $43, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $49;
      __label__ = 11;
      break;
     case 11:
      __label__ = 15;
      break;
     case 12:
      
      
      
      var $53 = HEAP[HEAP[$deque_addr] + 28] == -1;
      if ($53) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      var $57 = HEAP[HEAP[$deque_addr] + 4];
      var $58 = HEAP[$aslist];
      var $59 = HEAP[$dict];
      var $60 = _Py_BuildValue(__str27, allocate([ $57, 0, 0, 0, $58, 0, 0, 0, __Py_NoneStruct, 0, 0, 0, $59, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $60;
      __label__ = 15;
      break;
     case 14:
      
      
      var $63 = HEAP[HEAP[$deque_addr] + 28];
      
      
      
      var $67 = HEAP[HEAP[$deque_addr] + 4];
      var $68 = HEAP[$aslist];
      var $69 = HEAP[$dict];
      var $70 = _Py_BuildValue(__str28, allocate([ $67, 0, 0, 0, $68, 0, 0, 0, $63, 0, 0, 0, $69, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $70;
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$dict] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      var $76 = HEAP[HEAP[$dict]] - 1;
      
      var $78 = HEAP[$dict];
      HEAP[$78] = $76;
      
      
      
      
      if (HEAP[HEAP[$dict]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $87 = HEAP[HEAP[HEAP[$dict] + 4] + 24];
      var $88 = HEAP[$dict];
      FUNCTION_TABLE[$87]($88);
      __label__ = 18;
      break;
     case 18:
      
      
      
      var $92 = HEAP[HEAP[$aslist]] - 1;
      
      var $94 = HEAP[$aslist];
      HEAP[$94] = $92;
      
      
      
      
      if (HEAP[HEAP[$aslist]] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $103 = HEAP[HEAP[HEAP[$aslist] + 4] + 24];
      var $104 = HEAP[$aslist];
      FUNCTION_TABLE[$103]($104);
      __label__ = 20;
      break;
     case 20:
      var $105 = HEAP[$result];
      HEAP[$0] = $105;
      __label__ = 21;
      break;
     case 21:
      var $106 = HEAP[$0];
      HEAP[$retval] = $106;
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
  function _deque_repr($deque) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $aslist = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      var $fmt = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      
      HEAP[$deque_addr] = $deque;
      var $1 = HEAP[$deque_addr];
      var $2 = _Py_ReprEnter($1);
      HEAP[$i] = $2;
      
      
      if (HEAP[$i] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 3:
      var $7 = _PyString_FromString(__str29);
      HEAP[$0] = $7;
      __label__ = 18;
      break;
     case 4:
      var $8 = HEAP[$deque_addr];
      var $9 = _PySequence_List($8);
      HEAP[$aslist] = $9;
      
      
      if (HEAP[$aslist] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $12 = HEAP[$deque_addr];
      _Py_ReprLeave($12);
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 6:
      
      
      
      
      var $17 = HEAP[HEAP[$deque_addr] + 28] != -1;
      if ($17) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      var $21 = HEAP[HEAP[$deque_addr] + 28];
      var $22 = _PyString_FromFormat(__str30, allocate([ $21, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$fmt] = $22;
      __label__ = 9;
      break;
     case 8:
      var $23 = _PyString_FromString(__str31);
      HEAP[$fmt] = $23;
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$fmt] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      var $29 = HEAP[HEAP[$aslist]] - 1;
      
      var $31 = HEAP[$aslist];
      HEAP[$31] = $29;
      
      
      
      
      if (HEAP[HEAP[$aslist]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $40 = HEAP[HEAP[HEAP[$aslist] + 4] + 24];
      var $41 = HEAP[$aslist];
      FUNCTION_TABLE[$40]($41);
      __label__ = 12;
      break;
     case 12:
      var $42 = HEAP[$deque_addr];
      _Py_ReprLeave($42);
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 13:
      var $43 = HEAP[$fmt];
      var $44 = HEAP[$aslist];
      var $45 = _PyString_Format($43, $44);
      HEAP[$result] = $45;
      
      
      
      var $49 = HEAP[HEAP[$fmt]] - 1;
      
      var $51 = HEAP[$fmt];
      HEAP[$51] = $49;
      
      
      
      
      if (HEAP[HEAP[$fmt]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[$fmt] + 4] + 24];
      var $61 = HEAP[$fmt];
      FUNCTION_TABLE[$60]($61);
      __label__ = 15;
      break;
     case 15:
      
      
      
      var $65 = HEAP[HEAP[$aslist]] - 1;
      
      var $67 = HEAP[$aslist];
      HEAP[$67] = $65;
      
      
      
      
      if (HEAP[HEAP[$aslist]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $76 = HEAP[HEAP[HEAP[$aslist] + 4] + 24];
      var $77 = HEAP[$aslist];
      FUNCTION_TABLE[$76]($77);
      __label__ = 17;
      break;
     case 17:
      var $78 = HEAP[$deque_addr];
      _Py_ReprLeave($78);
      var $79 = HEAP[$result];
      HEAP[$0] = $79;
      __label__ = 18;
      break;
     case 18:
      var $80 = HEAP[$0];
      HEAP[$retval] = $80;
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
  function _deque_tp_print($deque, $fp, $flags) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $fp_addr = __stackBase__ + 4;
      var $flags_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $it = __stackBase__ + 20;
      var $item = __stackBase__ + 24;
      var $emit = __stackBase__ + 28;
      var $separator = __stackBase__ + 32;
      var $i = __stackBase__ + 36;
      
      HEAP[$deque_addr] = $deque;
      HEAP[$fp_addr] = $fp;
      HEAP[$flags_addr] = $flags;
      HEAP[$emit] = __str32;
      HEAP[$separator] = __str33;
      var $1 = HEAP[$deque_addr];
      var $2 = _Py_ReprEnter($1);
      HEAP[$i] = $2;
      
      
      if (HEAP[$i] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $7 = HEAP[$i];
      HEAP[$0] = $7;
      __label__ = 24;
      break;
     case 3:
      
      var $9 = HEAP[$fp_addr];
      var $10 = _fwrite(__str29, 1, 5, $9);
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 4:
      var $11 = HEAP[$deque_addr];
      var $12 = _PyObject_GetIter($11);
      HEAP[$it] = $12;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 24;
      break;
     case 6:
      
      var $16 = HEAP[$fp_addr];
      var $17 = _fwrite(__str34, 1, 7, $16);
      __label__ = 15;
      break;
     case 7:
      var $18 = HEAP[$emit];
      var $19 = HEAP[$fp_addr];
      var $20 = _fputs($18, $19);
      var $21 = HEAP[$separator];
      HEAP[$emit] = $21;
      var $22 = HEAP[$item];
      var $23 = HEAP[$fp_addr];
      var $24 = _PyObject_Print($22, $23, 0);
      
      if ($24 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 8:
      
      
      
      var $29 = HEAP[HEAP[$item]] - 1;
      
      var $31 = HEAP[$item];
      HEAP[$31] = $29;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $40 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $41 = HEAP[$item];
      FUNCTION_TABLE[$40]($41);
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $45 = HEAP[HEAP[$it]] - 1;
      
      var $47 = HEAP[$it];
      HEAP[$47] = $45;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $56 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $57 = HEAP[$it];
      FUNCTION_TABLE[$56]($57);
      __label__ = 12;
      break;
     case 12:
      var $58 = HEAP[$deque_addr];
      _Py_ReprLeave($58);
      HEAP[$0] = -1;
      __label__ = 24;
      break;
     case 13:
      
      
      
      var $62 = HEAP[HEAP[$item]] - 1;
      
      var $64 = HEAP[$item];
      HEAP[$64] = $62;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $74 = HEAP[$item];
      FUNCTION_TABLE[$73]($74);
      __label__ = 15;
      break;
     case 15:
      var $75 = HEAP[$it];
      var $76 = _PyIter_Next($75);
      HEAP[$item] = $76;
      
      
      if (HEAP[$item] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $79 = HEAP[$deque_addr];
      _Py_ReprLeave($79);
      
      
      
      var $83 = HEAP[HEAP[$it]] - 1;
      
      var $85 = HEAP[$it];
      HEAP[$85] = $83;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $94 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $95 = HEAP[$it];
      FUNCTION_TABLE[$94]($95);
      __label__ = 18;
      break;
     case 18:
      var $96 = _PyErr_Occurred();
      
      if ($96 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$0] = -1;
      __label__ = 24;
      break;
     case 20:
      
      
      
      
      var $102 = HEAP[HEAP[$deque_addr] + 28] == -1;
      if ($102) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      var $104 = HEAP[$fp_addr];
      var $105 = _fwrite(__str35, 1, 2, $104);
      __label__ = 23;
      break;
     case 22:
      
      
      
      var $109 = HEAP[HEAP[$deque_addr] + 28];
      var $110 = HEAP[$fp_addr];
      var $111 = _fprintf($110, __str36, allocate([ $109, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 23;
      break;
     case 23:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 24:
      var $112 = HEAP[$0];
      HEAP[$retval] = $112;
      __label__ = 25;
      break;
     case 25:
      var $retval24 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _deque_richcompare($v, $w, $op) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $v_addr = __stackBase__;
      var $w_addr = __stackBase__ + 4;
      var $op_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $it1 = __stackBase__ + 20;
      var $it2 = __stackBase__ + 24;
      var $x = __stackBase__ + 28;
      var $y = __stackBase__ + 32;
      var $vs = __stackBase__ + 36;
      var $ws = __stackBase__ + 40;
      var $b = __stackBase__ + 44;
      var $cmp = __stackBase__ + 48;
      
      HEAP[$v_addr] = $v;
      HEAP[$w_addr] = $w;
      HEAP[$op_addr] = $op;
      HEAP[$it1] = 0;
      HEAP[$it2] = 0;
      HEAP[$cmp] = -1;
      
      
      
      
      if (HEAP[HEAP[$v_addr] + 4] == _deque_type) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$v_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _deque_type);
      
      if ($8 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$w_addr] + 4] == _deque_type) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[HEAP[$w_addr] + 4];
      var $17 = _PyType_IsSubtype($16, _deque_type);
      
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
      __label__ = 58;
      break;
     case 5:
      
      
      
      var $24 = HEAP[HEAP[$v_addr] + 24];
      HEAP[$vs] = $24;
      
      
      
      var $28 = HEAP[HEAP[$w_addr] + 24];
      HEAP[$ws] = $28;
      
      
      if (HEAP[$op_addr] == 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      
      
      
      if (HEAP[$v_addr] == HEAP[$w_addr]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $36 = HEAP[__Py_TrueStruct] + 1;
      
      HEAP[__Py_TrueStruct] = $36;
      HEAP[$0] = __Py_TrueStruct;
      __label__ = 58;
      break;
     case 8:
      
      
      
      if (HEAP[$vs] != HEAP[$ws]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      var $43 = HEAP[__Py_ZeroStruct] + 1;
      
      HEAP[__Py_ZeroStruct] = $43;
      HEAP[$0] = __Py_ZeroStruct;
      __label__ = 58;
      break;
     case 10:
      
      
      if (HEAP[$op_addr] == 3) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      
      
      if (HEAP[$v_addr] == HEAP[$w_addr]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      var $52 = HEAP[__Py_ZeroStruct] + 1;
      
      HEAP[__Py_ZeroStruct] = $52;
      HEAP[$0] = __Py_ZeroStruct;
      __label__ = 58;
      break;
     case 13:
      
      
      
      if (HEAP[$vs] != HEAP[$ws]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      var $59 = HEAP[__Py_TrueStruct] + 1;
      
      HEAP[__Py_TrueStruct] = $59;
      HEAP[$0] = __Py_TrueStruct;
      __label__ = 58;
      break;
     case 15:
      var $61 = HEAP[$v_addr];
      var $62 = _PyObject_GetIter($61);
      HEAP[$it1] = $62;
      
      
      if (HEAP[$it1] == 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $65 = HEAP[$w_addr];
      var $66 = _PyObject_GetIter($65);
      HEAP[$it2] = $66;
      
      
      if (HEAP[$it2] == 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      var $69 = HEAP[$it1];
      var $70 = _PyIter_Next($69);
      HEAP[$x] = $70;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $73 = _PyErr_Occurred();
      
      if ($73 != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      var $75 = HEAP[$it2];
      var $76 = _PyIter_Next($75);
      HEAP[$y] = $76;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      if (HEAP[$y] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      var $81 = HEAP[$x];
      var $82 = HEAP[$y];
      var $83 = _PyObject_RichCompareBool($81, $82, 2);
      HEAP[$b] = $83;
      
      
      if (HEAP[$b] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 22:
      var $86 = HEAP[$x];
      var $87 = HEAP[$y];
      var $88 = HEAP[$op_addr];
      var $89 = _PyObject_RichCompareBool($86, $87, $88);
      HEAP[$cmp] = $89;
      
      
      
      var $93 = HEAP[HEAP[$x]] - 1;
      
      var $95 = HEAP[$x];
      HEAP[$95] = $93;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $104 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $105 = HEAP[$x];
      FUNCTION_TABLE[$104]($105);
      __label__ = 24;
      break;
     case 24:
      
      
      
      var $109 = HEAP[HEAP[$y]] - 1;
      
      var $111 = HEAP[$y];
      HEAP[$111] = $109;
      
      
      
      
      if (HEAP[HEAP[$y]] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $120 = HEAP[HEAP[HEAP[$y] + 4] + 24];
      var $121 = HEAP[$y];
      FUNCTION_TABLE[$120]($121);
      __label__ = 26;
      break;
     case 26:
      __label__ = 47;
      break;
     case 27:
      
      
      
      var $125 = HEAP[HEAP[$x]] - 1;
      
      var $127 = HEAP[$x];
      HEAP[$127] = $125;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $136 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $137 = HEAP[$x];
      FUNCTION_TABLE[$136]($137);
      __label__ = 29;
      break;
     case 29:
      
      
      
      var $141 = HEAP[HEAP[$y]] - 1;
      
      var $143 = HEAP[$y];
      HEAP[$143] = $141;
      
      
      
      
      if (HEAP[HEAP[$y]] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $152 = HEAP[HEAP[HEAP[$y] + 4] + 24];
      var $153 = HEAP[$y];
      FUNCTION_TABLE[$152]($153);
      __label__ = 31;
      break;
     case 31:
      
      var $155 = HEAP[$b] == -1;
      if ($155) {
        __label__ = 47;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      __label__ = 17;
      break;
     case 33:
      
      
      if (HEAP[$x] != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 34:
      
      
      
      var $161 = HEAP[HEAP[$x]] - 1;
      
      var $163 = HEAP[$x];
      HEAP[$163] = $161;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $172 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $173 = HEAP[$x];
      FUNCTION_TABLE[$172]($173);
      __label__ = 36;
      break;
     case 36:
      
      
      if (HEAP[$y] != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 37:
      
      
      
      var $179 = HEAP[HEAP[$y]] - 1;
      
      var $181 = HEAP[$y];
      HEAP[$181] = $179;
      
      
      
      
      if (HEAP[HEAP[$y]] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      var $190 = HEAP[HEAP[HEAP[$y] + 4] + 24];
      var $191 = HEAP[$y];
      FUNCTION_TABLE[$190]($191);
      __label__ = 39;
      break;
     case 39:
      var $192 = _PyErr_Occurred();
      
      if ($192 != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      var $194 = HEAP[$op_addr];
      if ($194 == 0) {
        __label__ = 41;
        break;
      } else if ($194 == 1) {
        __label__ = 42;
        break;
      } else if ($194 == 2) {
        __label__ = 43;
        break;
      } else if ($194 == 3) {
        __label__ = 44;
        break;
      } else if ($194 == 4) {
        __label__ = 45;
        break;
      } else if ($194 == 5) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 41:
      
      
      var $197 = HEAP[$y] != 0;
      HEAP[$cmp] = $197;
      __label__ = 47;
      break;
     case 42:
      
      
      var $200 = HEAP[$x] == 0;
      HEAP[$cmp] = $200;
      __label__ = 47;
      break;
     case 43:
      
      
      
      var $204 = HEAP[$x] == HEAP[$y];
      HEAP[$cmp] = $204;
      __label__ = 47;
      break;
     case 44:
      
      
      
      var $208 = HEAP[$x] != HEAP[$y];
      HEAP[$cmp] = $208;
      __label__ = 47;
      break;
     case 45:
      
      
      var $211 = HEAP[$x] != 0;
      HEAP[$cmp] = $211;
      __label__ = 47;
      break;
     case 46:
      
      
      var $214 = HEAP[$y] == 0;
      HEAP[$cmp] = $214;
      __label__ = 47;
      break;
     case 47:
      
      
      if (HEAP[$it1] != 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 48:
      
      
      
      var $220 = HEAP[HEAP[$it1]] - 1;
      
      var $222 = HEAP[$it1];
      HEAP[$222] = $220;
      
      
      
      
      if (HEAP[HEAP[$it1]] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      
      
      var $231 = HEAP[HEAP[HEAP[$it1] + 4] + 24];
      var $232 = HEAP[$it1];
      FUNCTION_TABLE[$231]($232);
      __label__ = 50;
      break;
     case 50:
      
      
      if (HEAP[$it2] != 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 51:
      
      
      
      var $238 = HEAP[HEAP[$it2]] - 1;
      
      var $240 = HEAP[$it2];
      HEAP[$240] = $238;
      
      
      
      
      if (HEAP[HEAP[$it2]] == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      
      
      
      
      var $249 = HEAP[HEAP[HEAP[$it2] + 4] + 24];
      var $250 = HEAP[$it2];
      FUNCTION_TABLE[$249]($250);
      __label__ = 53;
      break;
     case 53:
      
      
      if (HEAP[$cmp] == 1) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      
      
      var $255 = HEAP[__Py_TrueStruct] + 1;
      
      HEAP[__Py_TrueStruct] = $255;
      HEAP[$0] = __Py_TrueStruct;
      __label__ = 58;
      break;
     case 55:
      
      
      if (HEAP[$cmp] == 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      
      
      var $261 = HEAP[__Py_ZeroStruct] + 1;
      
      HEAP[__Py_ZeroStruct] = $261;
      HEAP[$0] = __Py_ZeroStruct;
      __label__ = 58;
      break;
     case 57:
      HEAP[$0] = 0;
      __label__ = 58;
      break;
     case 58:
      var $263 = HEAP[$0];
      HEAP[$retval] = $263;
      __label__ = 59;
      break;
     case 59:
      var $retval57 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval57;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _deque_init($deque, $args, $kwdargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwdargs_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $iterable = __stackBase__ + 20;
      var $maxlenobj = __stackBase__ + 24;
      var $maxlen = __stackBase__ + 28;
      var $kwlist = __stackBase__ + 32;
      var $rv = __stackBase__ + 44;
      
      HEAP[$deque_addr] = $deque;
      HEAP[$args_addr] = $args;
      HEAP[$kwdargs_addr] = $kwdargs;
      HEAP[$iterable] = 0;
      HEAP[$maxlenobj] = 0;
      HEAP[$maxlen] = -1;
      
      var $2 = HEAP[_C_53_9608];
      HEAP[$kwlist] = $2;
      
      var $4 = HEAP[_C_53_9608 + 4];
      HEAP[$kwlist + 4] = $4;
      
      var $6 = HEAP[_C_53_9608 + 8];
      HEAP[$kwlist + 8] = $6;
      var $7 = HEAP[$args_addr];
      var $8 = HEAP[$kwdargs_addr];
      var $kwlist1 = $kwlist;
      var $9 = _PyArg_ParseTupleAndKeywords($7, $8, __str39, $kwlist1, allocate([ $iterable, 0, 0, 0, $maxlenobj, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($9 == 0) {
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
      
      
      if (HEAP[$maxlenobj] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 3:
      
      
      if (HEAP[$maxlenobj] != __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      var $15 = HEAP[$maxlenobj];
      var $16 = _PyInt_AsSsize_t($15);
      HEAP[$maxlen] = $16;
      
      var $18 = HEAP[$maxlen] == -1;
      if ($18) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      var $19 = _PyErr_Occurred();
      
      if ($19 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = -1;
      __label__ = 15;
      break;
     case 7:
      
      
      if (HEAP[$maxlen] < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $23 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($23, __str40);
      HEAP[$0] = -1;
      __label__ = 15;
      break;
     case 9:
      
      var $25 = HEAP[$deque_addr] + 28;
      var $26 = HEAP[$maxlen];
      HEAP[$25] = $26;
      var $27 = HEAP[$deque_addr];
      var $28 = _deque_clear($27);
      
      
      if (HEAP[$iterable] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      var $31 = HEAP[$iterable];
      var $32 = HEAP[$deque_addr];
      var $33 = _deque_extend($32, $31);
      HEAP[$rv] = $33;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = -1;
      __label__ = 15;
      break;
     case 12:
      
      
      
      var $39 = HEAP[HEAP[$rv]] - 1;
      
      var $41 = HEAP[$rv];
      HEAP[$41] = $39;
      
      
      
      
      if (HEAP[HEAP[$rv]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $50 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $51 = HEAP[$rv];
      FUNCTION_TABLE[$50]($51);
      __label__ = 14;
      break;
     case 14:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 15:
      var $52 = HEAP[$0];
      HEAP[$retval] = $52;
      __label__ = 16;
      break;
     case 16:
      var $retval16 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _deque_get_maxlen($deque) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$deque_addr] = $deque;
      
      
      
      var $4 = HEAP[HEAP[$deque_addr] + 28] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $6 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $6;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 2:
      
      
      var $9 = HEAP[HEAP[$deque_addr] + 28];
      var $10 = _PyInt_FromSsize_t($9);
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
  function _deque_iter($deque) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $it = __stackBase__ + 12;
      
      HEAP[$deque_addr] = $deque;
      var $1 = __PyObject_GC_New(_dequeiter_type);
      
      HEAP[$it] = $1;
      
      
      if (HEAP[$it] == 0) {
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
      
      
      var $7 = HEAP[HEAP[$deque_addr] + 8];
      
      var $9 = HEAP[$it] + 12;
      HEAP[$9] = $7;
      
      
      var $12 = HEAP[HEAP[$deque_addr] + 16];
      
      var $14 = HEAP[$it] + 8;
      HEAP[$14] = $12;
      
      
      
      
      var $19 = HEAP[HEAP[$deque_addr]] + 1;
      var $20 = HEAP[$deque_addr];
      HEAP[$20] = $19;
      
      var $22 = HEAP[$it] + 16;
      var $23 = HEAP[$deque_addr];
      HEAP[$22] = $23;
      
      
      var $26 = HEAP[HEAP[$deque_addr] + 32];
      
      var $28 = HEAP[$it] + 20;
      HEAP[$28] = $26;
      
      
      var $31 = HEAP[HEAP[$deque_addr] + 24];
      
      var $33 = HEAP[$it] + 24;
      HEAP[$33] = $31;
      
      var $35 = HEAP[$it];
      _PyObject_GC_Track($35);
      
      var $37 = HEAP[$it];
      HEAP[$0] = $37;
      __label__ = 3;
      break;
     case 3:
      var $38 = HEAP[$0];
      HEAP[$retval] = $38;
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
  function _dequeiter_traverse($dio, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dio_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      
      HEAP[$dio_addr] = $dio;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$dio_addr] + 16] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[HEAP[$dio_addr] + 16];
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
  function _dequeiter_dealloc($dio) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dio_addr = __stackBase__;
      
      HEAP[$dio_addr] = $dio;
      
      
      
      
      if (HEAP[HEAP[$dio_addr] + 16] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $7 = HEAP[HEAP[$dio_addr] + 16];
      
      
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
      
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$dio_addr] + 16] + 4] + 24];
      
      
      
      var $26 = HEAP[HEAP[$dio_addr] + 16];
      FUNCTION_TABLE[$22]($26);
      __label__ = 3;
      break;
     case 3:
      
      var $28 = HEAP[$dio_addr];
      _PyObject_GC_Del($28);
      __label__ = 4;
      break;
     case 4:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dequeiter_next($it) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $it_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $item = __stackBase__ + 12;
      
      HEAP[$it_addr] = $it;
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$it_addr] + 16] + 32] != HEAP[HEAP[$it_addr] + 20]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $11 = HEAP[$it_addr] + 24;
      HEAP[$11] = 0;
      var $12 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($12, __str14);
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$it_addr] + 24] == 0) {
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
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$it_addr] + 12] == HEAP[HEAP[HEAP[$it_addr] + 16] + 12]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$it_addr] + 8] > HEAP[HEAP[HEAP[$it_addr] + 16] + 20]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      ___assert_fail(__str57, __str3, 1168, ___PRETTY_FUNCTION___9731);
      throw "Reached an unreachable!";
     case 7:
      
      
      
      
      
      
      
      
      var $43 = HEAP[HEAP[HEAP[$it_addr] + 12] + 8 + HEAP[HEAP[$it_addr] + 8] * 4];
      HEAP[$item] = $43;
      
      
      
      var $47 = HEAP[HEAP[$it_addr] + 8] + 1;
      
      var $49 = HEAP[$it_addr] + 8;
      HEAP[$49] = $47;
      
      
      
      var $53 = HEAP[HEAP[$it_addr] + 24] - 1;
      
      var $55 = HEAP[$it_addr] + 24;
      HEAP[$55] = $53;
      
      
      
      
      if (HEAP[HEAP[$it_addr] + 8] == 62) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[HEAP[$it_addr] + 24] > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$it_addr] + 12] + 4] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str58, __str3, 1174, ___PRETTY_FUNCTION___9731);
      throw "Reached an unreachable!";
     case 11:
      
      
      
      
      var $74 = HEAP[HEAP[HEAP[$it_addr] + 12] + 4];
      
      var $76 = HEAP[$it_addr] + 12;
      HEAP[$76] = $74;
      
      var $78 = HEAP[$it_addr] + 8;
      HEAP[$78] = 0;
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $82 = HEAP[HEAP[$item]] + 1;
      
      var $84 = HEAP[$item];
      HEAP[$84] = $82;
      var $85 = HEAP[$item];
      HEAP[$0] = $85;
      __label__ = 13;
      break;
     case 13:
      var $86 = HEAP[$0];
      HEAP[$retval] = $86;
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
  function _dequeiter_len($it) {
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
      
      HEAP[__stackBase__] = $it;
      
      
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
  function _deque_reviter($deque) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $it = __stackBase__ + 12;
      
      HEAP[$deque_addr] = $deque;
      var $1 = __PyObject_GC_New(_dequereviter_type);
      
      HEAP[$it] = $1;
      
      
      if (HEAP[$it] == 0) {
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
      
      
      var $7 = HEAP[HEAP[$deque_addr] + 12];
      
      var $9 = HEAP[$it] + 12;
      HEAP[$9] = $7;
      
      
      var $12 = HEAP[HEAP[$deque_addr] + 20];
      
      var $14 = HEAP[$it] + 8;
      HEAP[$14] = $12;
      
      
      
      
      var $19 = HEAP[HEAP[$deque_addr]] + 1;
      var $20 = HEAP[$deque_addr];
      HEAP[$20] = $19;
      
      var $22 = HEAP[$it] + 16;
      var $23 = HEAP[$deque_addr];
      HEAP[$22] = $23;
      
      
      var $26 = HEAP[HEAP[$deque_addr] + 32];
      
      var $28 = HEAP[$it] + 20;
      HEAP[$28] = $26;
      
      
      var $31 = HEAP[HEAP[$deque_addr] + 24];
      
      var $33 = HEAP[$it] + 24;
      HEAP[$33] = $31;
      
      var $35 = HEAP[$it];
      _PyObject_GC_Track($35);
      
      var $37 = HEAP[$it];
      HEAP[$0] = $37;
      __label__ = 3;
      break;
     case 3:
      var $38 = HEAP[$0];
      HEAP[$retval] = $38;
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
  function _dequereviter_next($it) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $it_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $item = __stackBase__ + 12;
      
      HEAP[$it_addr] = $it;
      
      
      
      
      if (HEAP[HEAP[$it_addr] + 24] == 0) {
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
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$it_addr] + 16] + 32] != HEAP[HEAP[$it_addr] + 20]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $15 = HEAP[$it_addr] + 24;
      HEAP[$15] = 0;
      var $16 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($16, __str14);
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 4:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$it_addr] + 12] == HEAP[HEAP[HEAP[$it_addr] + 16] + 8]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$it_addr] + 8] < HEAP[HEAP[HEAP[$it_addr] + 16] + 16]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      ___assert_fail(__str61, __str3, 1264, ___PRETTY_FUNCTION___9804);
      throw "Reached an unreachable!";
     case 7:
      
      
      
      
      
      
      
      
      var $43 = HEAP[HEAP[HEAP[$it_addr] + 12] + 8 + HEAP[HEAP[$it_addr] + 8] * 4];
      HEAP[$item] = $43;
      
      
      
      var $47 = HEAP[HEAP[$it_addr] + 8] - 1;
      
      var $49 = HEAP[$it_addr] + 8;
      HEAP[$49] = $47;
      
      
      
      var $53 = HEAP[HEAP[$it_addr] + 24] - 1;
      
      var $55 = HEAP[$it_addr] + 24;
      HEAP[$55] = $53;
      
      
      
      var $59 = HEAP[HEAP[$it_addr] + 8] == -1;
      if ($59) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[HEAP[$it_addr] + 24] > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$it_addr] + 12]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str62, __str3, 1270, ___PRETTY_FUNCTION___9804);
      throw "Reached an unreachable!";
     case 11:
      
      
      
      
      var $74 = HEAP[HEAP[HEAP[$it_addr] + 12]];
      
      var $76 = HEAP[$it_addr] + 12;
      HEAP[$76] = $74;
      
      var $78 = HEAP[$it_addr] + 8;
      HEAP[$78] = 61;
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $82 = HEAP[HEAP[$item]] + 1;
      
      var $84 = HEAP[$item];
      HEAP[$84] = $82;
      var $85 = HEAP[$item];
      HEAP[$0] = $85;
      __label__ = 13;
      break;
     case 13:
      var $86 = HEAP[$0];
      HEAP[$retval] = $86;
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
  function _defdict_missing($dd, $key) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dd_addr = __stackBase__;
      var $key_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $factory = __stackBase__ + 16;
      var $value = __stackBase__ + 20;
      var $tup = __stackBase__ + 24;
      
      HEAP[$dd_addr] = $dd;
      HEAP[$key_addr] = $key;
      
      
      var $3 = HEAP[HEAP[$dd_addr] + 124];
      HEAP[$factory] = $3;
      
      
      if (HEAP[$factory] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$factory] == __Py_NoneStruct) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 2:
      var $8 = HEAP[$key_addr];
      var $9 = _PyTuple_Pack(1, allocate([ $8, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$tup] = $9;
      
      
      if (HEAP[$tup] == 0) {
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
      var $12 = HEAP[_PyExc_KeyError];
      var $13 = HEAP[$tup];
      _PyErr_SetObject($12, $13);
      
      
      
      var $17 = HEAP[HEAP[$tup]] - 1;
      
      var $19 = HEAP[$tup];
      HEAP[$19] = $17;
      
      
      
      
      if (HEAP[HEAP[$tup]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $28 = HEAP[HEAP[HEAP[$tup] + 4] + 24];
      var $29 = HEAP[$tup];
      FUNCTION_TABLE[$28]($29);
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 7:
      var $30 = HEAP[$factory];
      var $31 = _PyEval_CallObjectWithKeywords($30, 0, 0);
      HEAP[$value] = $31;
      
      
      if (HEAP[$value] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $34 = HEAP[$value];
      HEAP[$0] = $34;
      __label__ = 14;
      break;
     case 9:
      
      var $36 = HEAP[$dd_addr];
      var $37 = HEAP[$key_addr];
      var $38 = HEAP[$value];
      var $39 = _PyObject_SetItem($36, $37, $38);
      
      if ($39 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      var $44 = HEAP[HEAP[$value]] - 1;
      
      var $46 = HEAP[$value];
      HEAP[$46] = $44;
      
      
      
      
      if (HEAP[HEAP[$value]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$value] + 4] + 24];
      var $56 = HEAP[$value];
      FUNCTION_TABLE[$55]($56);
      __label__ = 12;
      break;
     case 12:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 13:
      var $57 = HEAP[$value];
      HEAP[$0] = $57;
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
  function _defdict_copy($dd) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dd_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$dd_addr] = $dd;
      
      
      
      
      if (HEAP[HEAP[$dd_addr] + 124] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      var $9 = HEAP[HEAP[$dd_addr] + 4];
      var $10 = HEAP[$dd_addr];
      var $11 = _PyObject_CallFunctionObjArgs($9, allocate([ __Py_NoneStruct, 0, 0, 0, $10, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.defdictobject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $11;
      __label__ = 3;
      break;
     case 2:
      
      
      var $14 = HEAP[HEAP[$dd_addr] + 124];
      
      
      
      
      var $19 = HEAP[HEAP[$dd_addr] + 4];
      var $20 = HEAP[$dd_addr];
      var $21 = _PyObject_CallFunctionObjArgs($19, allocate([ $14, 0, 0, 0, $20, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.defdictobject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $21;
      __label__ = 3;
      break;
     case 3:
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
  function _defdict_reduce($dd) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dd_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $args = __stackBase__ + 12;
      var $items = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      
      HEAP[$dd_addr] = $dd;
      
      
      
      
      if (HEAP[HEAP[$dd_addr] + 124] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$dd_addr] + 124] == __Py_NoneStruct) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $9 = _PyTuple_New(0);
      HEAP[$args] = $9;
      __label__ = 4;
      break;
     case 3:
      
      
      var $12 = HEAP[HEAP[$dd_addr] + 124];
      var $13 = _PyTuple_Pack(1, allocate([ $12, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$args] = $13;
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[$args] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 6:
      
      var $17 = HEAP[$dd_addr];
      var $18 = _PyObject_CallMethod($17, __str64, __str65, allocate(1, "i32", ALLOC_STACK));
      HEAP[$items] = $18;
      
      
      if (HEAP[$items] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      var $24 = HEAP[HEAP[$args]] - 1;
      
      var $26 = HEAP[$args];
      HEAP[$26] = $24;
      
      
      
      
      if (HEAP[HEAP[$args]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $35 = HEAP[HEAP[HEAP[$args] + 4] + 24];
      var $36 = HEAP[$args];
      FUNCTION_TABLE[$35]($36);
      __label__ = 9;
      break;
     case 9:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 10:
      
      
      
      var $40 = HEAP[HEAP[$dd_addr] + 4];
      var $41 = HEAP[$args];
      var $42 = HEAP[$items];
      var $43 = _PyTuple_Pack(5, allocate([ $40, 0, 0, 0, $41, 0, 0, 0, __Py_NoneStruct, 0, 0, 0, __Py_NoneStruct, 0, 0, 0, $42, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $43;
      
      
      
      var $47 = HEAP[HEAP[$items]] - 1;
      
      var $49 = HEAP[$items];
      HEAP[$49] = $47;
      
      
      
      
      if (HEAP[HEAP[$items]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $58 = HEAP[HEAP[HEAP[$items] + 4] + 24];
      var $59 = HEAP[$items];
      FUNCTION_TABLE[$58]($59);
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $63 = HEAP[HEAP[$args]] - 1;
      
      var $65 = HEAP[$args];
      HEAP[$65] = $63;
      
      
      
      
      if (HEAP[HEAP[$args]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $74 = HEAP[HEAP[HEAP[$args] + 4] + 24];
      var $75 = HEAP[$args];
      FUNCTION_TABLE[$74]($75);
      __label__ = 14;
      break;
     case 14:
      var $76 = HEAP[$result];
      HEAP[$0] = $76;
      __label__ = 15;
      break;
     case 15:
      var $77 = HEAP[$0];
      HEAP[$retval] = $77;
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
  function _defdict_dealloc($dd) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dd_addr = __stackBase__;
      var $_py_tmp = __stackBase__ + 4;
      
      HEAP[$dd_addr] = $dd;
      
      
      
      
      if (HEAP[HEAP[$dd_addr] + 124] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[HEAP[$dd_addr] + 124];
      HEAP[$_py_tmp] = $6;
      
      var $8 = HEAP[$dd_addr] + 124;
      HEAP[$8] = 0;
      
      
      
      var $12 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $14 = HEAP[$_py_tmp];
      HEAP[$14] = $12;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $24 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$23]($24);
      __label__ = 3;
      break;
     case 3:
      var $25 = HEAP[_PyDict_Type + 24];
      
      var $27 = HEAP[$dd_addr];
      FUNCTION_TABLE[$25]($27);
      __label__ = 4;
      break;
     case 4:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _defdict_print($dd, $fp, $flags) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dd_addr = __stackBase__;
      var $fp_addr = __stackBase__ + 4;
      var $flags_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $sts = __stackBase__ + 20;
      
      HEAP[$dd_addr] = $dd;
      HEAP[$fp_addr] = $fp;
      HEAP[$flags_addr] = $flags;
      
      var $2 = HEAP[$fp_addr];
      var $3 = _fwrite(__str70, 1, 12, $2);
      
      
      
      
      if (HEAP[HEAP[$dd_addr] + 124] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $9 = HEAP[$fp_addr];
      var $10 = _fwrite(__str71, 1, 4, $9);
      __label__ = 3;
      break;
     case 2:
      
      
      var $13 = HEAP[HEAP[$dd_addr] + 124];
      var $14 = HEAP[$fp_addr];
      var $15 = _PyObject_Print($13, $14, 0);
      __label__ = 3;
      break;
     case 3:
      
      var $17 = HEAP[$fp_addr];
      var $18 = _fwrite(__str33, 1, 2, $17);
      var $19 = HEAP[_PyDict_Type + 28];
      
      var $21 = HEAP[$dd_addr];
      var $22 = HEAP[$fp_addr];
      var $23 = FUNCTION_TABLE[$19]($21, $22, 0);
      HEAP[$sts] = $23;
      
      var $25 = HEAP[$fp_addr];
      var $26 = _fputc(41, $25);
      var $27 = HEAP[$sts];
      HEAP[$0] = $27;
      var $28 = HEAP[$0];
      HEAP[$retval] = $28;
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
  function _defdict_repr($dd) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dd_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $defrepr = __stackBase__ + 12;
      var $baserepr = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      var $status = __stackBase__ + 24;
      
      HEAP[$dd_addr] = $dd;
      var $1 = HEAP[_PyDict_Type + 44];
      
      var $3 = HEAP[$dd_addr];
      var $4 = FUNCTION_TABLE[$1]($3);
      HEAP[$baserepr] = $4;
      
      
      if (HEAP[$baserepr] == 0) {
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
      
      
      
      
      if (HEAP[HEAP[$dd_addr] + 124] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = _PyString_FromString(__str71);
      HEAP[$defrepr] = $11;
      __label__ = 10;
      break;
     case 4:
      
      
      var $14 = HEAP[HEAP[$dd_addr] + 124];
      var $15 = _Py_ReprEnter($14);
      HEAP[$status] = $15;
      
      
      if (HEAP[$status] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      if (HEAP[$status] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 7:
      var $20 = _PyString_FromString(__str72);
      HEAP[$defrepr] = $20;
      __label__ = 9;
      break;
     case 8:
      
      
      var $23 = HEAP[HEAP[$dd_addr] + 124];
      var $24 = _PyObject_Repr($23);
      HEAP[$defrepr] = $24;
      __label__ = 9;
      break;
     case 9:
      
      
      var $27 = HEAP[HEAP[$dd_addr] + 124];
      _Py_ReprLeave($27);
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$defrepr] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      var $33 = HEAP[HEAP[$baserepr]] - 1;
      
      var $35 = HEAP[$baserepr];
      HEAP[$35] = $33;
      
      
      
      
      if (HEAP[HEAP[$baserepr]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$baserepr] + 4] + 24];
      var $45 = HEAP[$baserepr];
      FUNCTION_TABLE[$44]($45);
      __label__ = 13;
      break;
     case 13:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 14:
      
      
      
      var $49 = HEAP[$baserepr] + 20;
      
      
      
      var $53 = HEAP[$defrepr] + 20;
      var $54 = _PyString_FromFormat(__str73, allocate([ $53, 0, 0, 0, $49, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $54;
      
      
      
      var $58 = HEAP[HEAP[$defrepr]] - 1;
      
      var $60 = HEAP[$defrepr];
      HEAP[$60] = $58;
      
      
      
      
      if (HEAP[HEAP[$defrepr]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $69 = HEAP[HEAP[HEAP[$defrepr] + 4] + 24];
      var $70 = HEAP[$defrepr];
      FUNCTION_TABLE[$69]($70);
      __label__ = 16;
      break;
     case 16:
      
      
      
      var $74 = HEAP[HEAP[$baserepr]] - 1;
      
      var $76 = HEAP[$baserepr];
      HEAP[$76] = $74;
      
      
      
      
      if (HEAP[HEAP[$baserepr]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $85 = HEAP[HEAP[HEAP[$baserepr] + 4] + 24];
      var $86 = HEAP[$baserepr];
      FUNCTION_TABLE[$85]($86);
      __label__ = 18;
      break;
     case 18:
      var $87 = HEAP[$result];
      HEAP[$0] = $87;
      __label__ = 19;
      break;
     case 19:
      var $88 = HEAP[$0];
      HEAP[$retval] = $88;
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
  function _defdict_traverse($self, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
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
      
      HEAP[$self_addr] = $self;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 124] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[HEAP[$self_addr] + 124];
      var $10 = HEAP[$visit_addr];
      var $11 = HEAP[$arg_addr];
      var $12 = FUNCTION_TABLE[$10]($9, $11);
      HEAP[$vret] = $12;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $15 = HEAP[$vret];
      HEAP[$0] = $15;
      __label__ = 4;
      break;
     case 3:
      var $16 = HEAP[_PyDict_Type + 92];
      var $17 = HEAP[$self_addr];
      var $18 = HEAP[$visit_addr];
      var $19 = HEAP[$arg_addr];
      var $20 = FUNCTION_TABLE[$16]($17, $18, $19);
      HEAP[$0] = $20;
      __label__ = 4;
      break;
     case 4:
      var $21 = HEAP[$0];
      HEAP[$retval] = $21;
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
  function _defdict_tp_clear($dd) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dd_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $_py_tmp = __stackBase__ + 12;
      
      HEAP[$dd_addr] = $dd;
      
      
      
      
      if (HEAP[HEAP[$dd_addr] + 124] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$dd_addr] + 124];
      HEAP[$_py_tmp] = $7;
      
      var $9 = HEAP[$dd_addr] + 124;
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
      var $26 = HEAP[_PyDict_Type + 96];
      
      var $28 = HEAP[$dd_addr];
      var $29 = FUNCTION_TABLE[$26]($28);
      HEAP[$0] = $29;
      var $30 = HEAP[$0];
      HEAP[$retval] = $30;
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
  function _defdict_init($self, $args, $kwds) {
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
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $dd = __stackBase__ + 20;
      var $olddefault = __stackBase__ + 24;
      var $newdefault = __stackBase__ + 28;
      var $newargs = __stackBase__ + 32;
      var $result = __stackBase__ + 36;
      var $n = __stackBase__ + 40;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      var $2 = HEAP[$self_addr];
      HEAP[$dd] = $2;
      
      
      var $5 = HEAP[HEAP[$dd] + 124];
      HEAP[$olddefault] = $5;
      HEAP[$newdefault] = 0;
      
      
      if (HEAP[$args_addr] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$args_addr] + 4] + 84] & 67108864) == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $15 = _PyTuple_New(0);
      HEAP[$newargs] = $15;
      __label__ = 8;
      break;
     case 3:
      
      
      
      var $19 = HEAP[HEAP[$args_addr] + 8];
      HEAP[$n] = $19;
      
      
      if (HEAP[$n] > 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      
      var $26 = HEAP[HEAP[$args_addr] + 12];
      HEAP[$newdefault] = $26;
      var $27 = HEAP[$newdefault];
      var $28 = _PyCallable_Check($27);
      
      if ($28 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      if (HEAP[$newdefault] != __Py_NoneStruct) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $32 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($32, __str74);
      HEAP[$0] = -1;
      __label__ = 18;
      break;
     case 7:
      var $33 = HEAP[$args_addr];
      var $34 = HEAP[$n];
      var $35 = _PySequence_GetSlice($33, 1, $34);
      HEAP[$newargs] = $35;
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$newargs] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = -1;
      __label__ = 18;
      break;
     case 10:
      
      
      if (HEAP[$newdefault] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      var $43 = HEAP[HEAP[$newdefault]] + 1;
      
      var $45 = HEAP[$newdefault];
      HEAP[$45] = $43;
      __label__ = 12;
      break;
     case 12:
      
      var $47 = HEAP[$dd] + 124;
      var $48 = HEAP[$newdefault];
      HEAP[$47] = $48;
      var $49 = HEAP[_PyDict_Type + 148];
      var $50 = HEAP[$self_addr];
      var $51 = HEAP[$newargs];
      var $52 = HEAP[$kwds_addr];
      var $53 = FUNCTION_TABLE[$49]($50, $51, $52);
      HEAP[$result] = $53;
      
      
      
      var $57 = HEAP[HEAP[$newargs]] - 1;
      
      var $59 = HEAP[$newargs];
      HEAP[$59] = $57;
      
      
      
      
      if (HEAP[HEAP[$newargs]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $68 = HEAP[HEAP[HEAP[$newargs] + 4] + 24];
      var $69 = HEAP[$newargs];
      FUNCTION_TABLE[$68]($69);
      __label__ = 14;
      break;
     case 14:
      
      
      if (HEAP[$olddefault] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      var $75 = HEAP[HEAP[$olddefault]] - 1;
      
      var $77 = HEAP[$olddefault];
      HEAP[$77] = $75;
      
      
      
      
      if (HEAP[HEAP[$olddefault]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $86 = HEAP[HEAP[HEAP[$olddefault] + 4] + 24];
      var $87 = HEAP[$olddefault];
      FUNCTION_TABLE[$86]($87);
      __label__ = 17;
      break;
     case 17:
      var $88 = HEAP[$result];
      HEAP[$0] = $88;
      __label__ = 18;
      break;
     case 18:
      var $89 = HEAP[$0];
      HEAP[$retval] = $89;
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
  function _init_collections() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      
      var $0 = _Py_InitModule4(__str76, 0, _module_doc, 0, 1013);
      HEAP[$m] = $0;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = _PyType_Ready(_deque_type);
      
      if ($3 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $7 = HEAP[_deque_type] + 1;
      
      HEAP[_deque_type] = $7;
      var $9 = HEAP[$m];
      var $10 = _PyModule_AddObject($9, __str77, _deque_type);
      HEAP[_defdict_type + 128] = _PyDict_Type;
      var $11 = _PyType_Ready(_defdict_type);
      
      if ($11 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $15 = HEAP[_defdict_type] + 1;
      
      HEAP[_defdict_type] = $15;
      var $17 = HEAP[$m];
      var $18 = _PyModule_AddObject($17, __str78, _defdict_type);
      var $19 = _PyType_Ready(_dequeiter_type);
      
      if ($19 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $21 = _PyType_Ready(_dequereviter_type);
      
      if ($21 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      __label__ = 6;
      break;
     case 6:
      __label__ = 7;
      break;
     case 7:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_collections"] = _init_collections;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _deque_get_maxlen, 0, _deque_len, 0, _deque_item, 0, _deque_ass_item, 0, _deque_inplace_concat, 0, _deque_append, 0, _deque_appendleft, 0, _deque_clearmethod, 0, _deque_copy, 0, _deque_count, 0, _deque_extend, 0, _deque_extendleft, 0, _deque_pop, 0, _deque_popleft, 0, _deque_reduce, 0, _deque_remove, 0, _deque_reviter, 0, _deque_reverse, 0, _deque_rotate, 0, _deque_dealloc, 0, _deque_tp_print, 0, _deque_repr, 0, _PyObject_HashNotImplemented, 0, _PyObject_GenericGetAttr, 0, _deque_traverse, 0, _deque_clear, 0, _deque_richcompare, 0, _deque_iter, 0, _deque_init, 0, _PyType_GenericAlloc, 0, _deque_new, 0, _PyObject_GC_Del, 0, _dequeiter_len, 0, _dequeiter_dealloc, 0, _dequeiter_traverse, 0, _PyObject_SelfIter, 0, _dequeiter_next, 0, _dequereviter_next, 0, _defdict_missing, 0, _defdict_copy, 0, _defdict_reduce, 0, _defdict_dealloc, 0, _defdict_print, 0, _defdict_repr, 0, _defdict_traverse, 0, _defdict_tp_clear, 0, _defdict_init, 0 ]);
  function run(args) {
    _numfreeblocks = allocate(1, "i32", ALLOC_NORMAL);
    __str = allocate([ 99, 97, 110, 110, 111, 116, 32, 97, 100, 100, 32, 109, 111, 114, 101, 32, 98, 108, 111, 99, 107, 115, 32, 116, 111, 32, 116, 104, 101, 32, 100, 101, 113, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    _freeblocks = allocate(40, "%struct.block*", ALLOC_NORMAL);
    __str1 = allocate([ 112, 111, 112, 32, 102, 114, 111, 109, 32, 97, 110, 32, 101, 109, 112, 116, 121, 32, 100, 101, 113, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 100, 101, 113, 117, 101, 45, 62, 108, 101, 102, 116, 98, 108, 111, 99, 107, 32, 61, 61, 32, 100, 101, 113, 117, 101, 45, 62, 114, 105, 103, 104, 116, 98, 108, 111, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 95, 99, 111, 108, 108, 101, 99, 116, 105, 111, 110, 115, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8365 = allocate([ 100, 101, 113, 117, 101, 95, 112, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 100, 101, 113, 117, 101, 45, 62, 108, 101, 102, 116, 105, 110, 100, 101, 120, 32, 61, 61, 32, 100, 101, 113, 117, 101, 45, 62, 114, 105, 103, 104, 116, 105, 110, 100, 101, 120, 43, 49, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 100, 101, 113, 117, 101, 45, 62, 108, 101, 102, 116, 98, 108, 111, 99, 107, 32, 33, 61, 32, 100, 101, 113, 117, 101, 45, 62, 114, 105, 103, 104, 116, 98, 108, 111, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    _pop_doc = allocate([ 82, 101, 109, 111, 118, 101, 32, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 114, 105, 103, 104, 116, 109, 111, 115, 116, 32, 101, 108, 101, 109, 101, 110, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 100, 101, 113, 117, 101, 45, 62, 108, 101, 102, 116, 98, 108, 111, 99, 107, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8409 = allocate([ 100, 101, 113, 117, 101, 95, 112, 111, 112, 108, 101, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 112, 114, 101, 118, 98, 108, 111, 99, 107, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    _popleft_doc = allocate([ 82, 101, 109, 111, 118, 101, 32, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 108, 101, 102, 116, 109, 111, 115, 116, 32, 101, 108, 101, 109, 101, 110, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 100, 101, 113, 117, 101, 45, 62, 114, 105, 103, 104, 116, 98, 108, 111, 99, 107, 45, 62, 114, 105, 103, 104, 116, 108, 105, 110, 107, 32, 61, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8457 = allocate([ 100, 101, 113, 117, 101, 95, 97, 112, 112, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 114, 118, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 32, 38, 38, 32, 100, 101, 113, 117, 101, 45, 62, 108, 101, 110, 32, 60, 61, 32, 100, 101, 113, 117, 101, 45, 62, 109, 97, 120, 108, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    _append_doc = allocate([ 65, 100, 100, 32, 97, 110, 32, 101, 108, 101, 109, 101, 110, 116, 32, 116, 111, 32, 116, 104, 101, 32, 114, 105, 103, 104, 116, 32, 115, 105, 100, 101, 32, 111, 102, 32, 116, 104, 101, 32, 100, 101, 113, 117, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 100, 101, 113, 117, 101, 45, 62, 108, 101, 102, 116, 98, 108, 111, 99, 107, 45, 62, 108, 101, 102, 116, 108, 105, 110, 107, 32, 61, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8512 = allocate([ 100, 101, 113, 117, 101, 95, 97, 112, 112, 101, 110, 100, 108, 101, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    _appendleft_doc = allocate([ 65, 100, 100, 32, 97, 110, 32, 101, 108, 101, 109, 101, 110, 116, 32, 116, 111, 32, 116, 104, 101, 32, 108, 101, 102, 116, 32, 115, 105, 100, 101, 32, 111, 102, 32, 116, 104, 101, 32, 100, 101, 113, 117, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8600 = allocate([ 100, 101, 113, 117, 101, 95, 101, 120, 116, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _extend_doc = allocate([ 69, 120, 116, 101, 110, 100, 32, 116, 104, 101, 32, 114, 105, 103, 104, 116, 32, 115, 105, 100, 101, 32, 111, 102, 32, 116, 104, 101, 32, 100, 101, 113, 117, 101, 32, 119, 105, 116, 104, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8706 = allocate([ 100, 101, 113, 117, 101, 95, 101, 120, 116, 101, 110, 100, 108, 101, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    _extendleft_doc = allocate([ 69, 120, 116, 101, 110, 100, 32, 116, 104, 101, 32, 108, 101, 102, 116, 32, 115, 105, 100, 101, 32, 111, 102, 32, 116, 104, 101, 32, 100, 101, 113, 117, 101, 32, 119, 105, 116, 104, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 105, 116, 101, 109, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8832 = allocate([ 95, 100, 101, 113, 117, 101, 95, 114, 111, 116, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 124, 110, 58, 114, 111, 116, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _rotate_doc = allocate([ 82, 111, 116, 97, 116, 101, 32, 116, 104, 101, 32, 100, 101, 113, 117, 101, 32, 110, 32, 115, 116, 101, 112, 115, 32, 116, 111, 32, 116, 104, 101, 32, 114, 105, 103, 104, 116, 32, 40, 100, 101, 102, 97, 117, 108, 116, 32, 110, 61, 49, 41, 46, 32, 32, 73, 102, 32, 110, 32, 105, 115, 32, 110, 101, 103, 97, 116, 105, 118, 101, 44, 32, 114, 111, 116, 97, 116, 101, 115, 32, 108, 101, 102, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 108, 101, 102, 116, 98, 108, 111, 99, 107, 32, 33, 61, 32, 114, 105, 103, 104, 116, 98, 108, 111, 99, 107, 32, 124, 124, 32, 108, 101, 102, 116, 105, 110, 100, 101, 120, 32, 60, 32, 114, 105, 103, 104, 116, 105, 110, 100, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8922 = allocate([ 100, 101, 113, 117, 101, 95, 114, 101, 118, 101, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    _reverse_doc = allocate([ 68, 46, 114, 101, 118, 101, 114, 115, 101, 40, 41, 32, 45, 45, 32, 114, 101, 118, 101, 114, 115, 101, 32, 42, 73, 78, 32, 80, 76, 65, 67, 69, 42, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 100, 101, 113, 117, 101, 32, 109, 117, 116, 97, 116, 101, 100, 32, 100, 117, 114, 105, 110, 103, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    _count_doc = allocate([ 68, 46, 99, 111, 117, 110, 116, 40, 118, 97, 108, 117, 101, 41, 32, 45, 62, 32, 105, 110, 116, 101, 103, 101, 114, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 115, 32, 111, 102, 32, 118, 97, 108, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 100, 101, 113, 117, 101, 32, 109, 117, 116, 97, 116, 101, 100, 32, 100, 117, 114, 105, 110, 103, 32, 114, 101, 109, 111, 118, 101, 40, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 116, 103, 116, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8997 = allocate([ 100, 101, 113, 117, 101, 95, 114, 101, 109, 111, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 100, 101, 113, 117, 101, 46, 114, 101, 109, 111, 118, 101, 40, 120, 41, 58, 32, 120, 32, 110, 111, 116, 32, 105, 110, 32, 100, 101, 113, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    _remove_doc = allocate([ 68, 46, 114, 101, 109, 111, 118, 101, 40, 118, 97, 108, 117, 101, 41, 32, 45, 45, 32, 114, 101, 109, 111, 118, 101, 32, 102, 105, 114, 115, 116, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 32, 111, 102, 32, 118, 97, 108, 117, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9035 = allocate([ 100, 101, 113, 117, 101, 95, 99, 108, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 100, 101, 113, 117, 101, 45, 62, 108, 101, 102, 116, 98, 108, 111, 99, 107, 32, 61, 61, 32, 100, 101, 113, 117, 101, 45, 62, 114, 105, 103, 104, 116, 98, 108, 111, 99, 107, 32, 38, 38, 32, 100, 101, 113, 117, 101, 45, 62, 108, 101, 102, 116, 105, 110, 100, 101, 120, 32, 45, 32, 49, 32, 61, 61, 32, 100, 101, 113, 117, 101, 45, 62, 114, 105, 103, 104, 116, 105, 110, 100, 101, 120, 32, 38, 38, 32, 100, 101, 113, 117, 101, 45, 62, 108, 101, 110, 32, 61, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 100, 101, 113, 117, 101, 32, 105, 110, 100, 101, 120, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 105, 32, 62, 61, 32, 48, 32, 38, 38, 32, 105, 32, 60, 32, 100, 101, 113, 117, 101, 45, 62, 108, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9110 = allocate([ 100, 101, 113, 117, 101, 95, 100, 101, 108, 95, 105, 116, 101, 109, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 114, 118, 32, 33, 61, 32, 45, 49, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9182 = allocate([ 100, 101, 113, 117, 101, 95, 99, 108, 101, 97, 114, 109, 101, 116, 104, 111, 100, 0 ], "i8", ALLOC_NORMAL);
    _clear_doc = allocate([ 82, 101, 109, 111, 118, 101, 32, 97, 108, 108, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 100, 101, 113, 117, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9194 = allocate([ 100, 101, 113, 117, 101, 95, 100, 101, 97, 108, 108, 111, 99, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 79, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 79, 105, 0 ], "i8", ALLOC_NORMAL);
    _copy_doc = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 115, 104, 97, 108, 108, 111, 119, 32, 99, 111, 112, 121, 32, 111, 102, 32, 97, 32, 100, 101, 113, 117, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 95, 95, 100, 105, 99, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 79, 40, 79, 41, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 79, 40, 79, 110, 41, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 79, 40, 79, 79, 41, 79, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 79, 40, 79, 110, 41, 79, 0 ], "i8", ALLOC_NORMAL);
    _reduce_doc = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 116, 97, 116, 101, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 32, 102, 111, 114, 32, 112, 105, 99, 107, 108, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 91, 46, 46, 46, 93, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 100, 101, 113, 117, 101, 40, 37, 37, 114, 44, 32, 109, 97, 120, 108, 101, 110, 61, 37, 122, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 100, 101, 113, 117, 101, 40, 37, 114, 41, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate(1, "i8", ALLOC_NORMAL);
    __str33 = allocate([ 44, 32, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 100, 101, 113, 117, 101, 40, 91, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 93, 41, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 93, 44, 32, 109, 97, 120, 108, 101, 110, 61, 37, 122, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    _C_53_9608 = allocate(12, "i8*", ALLOC_NORMAL);
    __str37 = allocate([ 105, 116, 101, 114, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 109, 97, 120, 108, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 124, 79, 79, 58, 100, 101, 113, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 109, 97, 120, 108, 101, 110, 32, 109, 117, 115, 116, 32, 98, 101, 32, 110, 111, 110, 45, 110, 101, 103, 97, 116, 105, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 109, 97, 120, 105, 109, 117, 109, 32, 115, 105, 122, 101, 32, 111, 102, 32, 97, 32, 100, 101, 113, 117, 101, 32, 111, 114, 32, 78, 111, 110, 101, 32, 105, 102, 32, 117, 110, 98, 111, 117, 110, 100, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    _deque_getset = allocate(40, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _deque_as_sequence = allocate(40, [ "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32, i32)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, i32, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0 ], ALLOC_NORMAL);
    _reversed_doc = allocate([ 68, 46, 95, 95, 114, 101, 118, 101, 114, 115, 101, 100, 95, 95, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 97, 32, 114, 101, 118, 101, 114, 115, 101, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 111, 118, 101, 114, 32, 116, 104, 101, 32, 100, 101, 113, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 97, 112, 112, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 97, 112, 112, 101, 110, 100, 108, 101, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 99, 108, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 95, 95, 99, 111, 112, 121, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 101, 120, 116, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 101, 120, 116, 101, 110, 100, 108, 101, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 112, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 112, 111, 112, 108, 101, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 114, 101, 109, 111, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 95, 95, 114, 101, 118, 101, 114, 115, 101, 100, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 114, 101, 118, 101, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 114, 111, 116, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _deque_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _deque_doc = allocate([ 100, 101, 113, 117, 101, 40, 105, 116, 101, 114, 97, 98, 108, 101, 91, 44, 32, 109, 97, 120, 108, 101, 110, 93, 41, 32, 45, 45, 62, 32, 100, 101, 113, 117, 101, 32, 111, 98, 106, 101, 99, 116, 10, 10, 66, 117, 105, 108, 100, 32, 97, 110, 32, 111, 114, 100, 101, 114, 101, 100, 32, 99, 111, 108, 108, 101, 99, 116, 105, 111, 110, 32, 119, 105, 116, 104, 32, 111, 112, 116, 105, 109, 105, 122, 101, 100, 32, 97, 99, 99, 101, 115, 115, 32, 102, 114, 111, 109, 32, 105, 116, 115, 32, 101, 110, 100, 112, 111, 105, 110, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 99, 111, 108, 108, 101, 99, 116, 105, 111, 110, 115, 46, 100, 101, 113, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    _deque_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str57 = allocate([ 33, 40, 105, 116, 45, 62, 98, 32, 61, 61, 32, 105, 116, 45, 62, 100, 101, 113, 117, 101, 45, 62, 114, 105, 103, 104, 116, 98, 108, 111, 99, 107, 32, 38, 38, 32, 105, 116, 45, 62, 105, 110, 100, 101, 120, 32, 62, 32, 105, 116, 45, 62, 100, 101, 113, 117, 101, 45, 62, 114, 105, 103, 104, 116, 105, 110, 100, 101, 120, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9731 = allocate([ 100, 101, 113, 117, 101, 105, 116, 101, 114, 95, 110, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 105, 116, 45, 62, 98, 45, 62, 114, 105, 103, 104, 116, 108, 105, 110, 107, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    _length_hint_doc = allocate([ 80, 114, 105, 118, 97, 116, 101, 32, 109, 101, 116, 104, 111, 100, 32, 114, 101, 116, 117, 114, 110, 105, 110, 103, 32, 97, 110, 32, 101, 115, 116, 105, 109, 97, 116, 101, 32, 111, 102, 32, 108, 101, 110, 40, 108, 105, 115, 116, 40, 105, 116, 41, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 95, 95, 108, 101, 110, 103, 116, 104, 95, 104, 105, 110, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _dequeiter_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str60 = allocate([ 100, 101, 113, 117, 101, 95, 105, 116, 101, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _dequeiter_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str61 = allocate([ 33, 40, 105, 116, 45, 62, 98, 32, 61, 61, 32, 105, 116, 45, 62, 100, 101, 113, 117, 101, 45, 62, 108, 101, 102, 116, 98, 108, 111, 99, 107, 32, 38, 38, 32, 105, 116, 45, 62, 105, 110, 100, 101, 120, 32, 60, 32, 105, 116, 45, 62, 100, 101, 113, 117, 101, 45, 62, 108, 101, 102, 116, 105, 110, 100, 101, 120, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9804 = allocate([ 100, 101, 113, 117, 101, 114, 101, 118, 105, 116, 101, 114, 95, 110, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 105, 116, 45, 62, 98, 45, 62, 108, 101, 102, 116, 108, 105, 110, 107, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 100, 101, 113, 117, 101, 95, 114, 101, 118, 101, 114, 115, 101, 95, 105, 116, 101, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _dequereviter_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _defdict_missing_doc = allocate([ 95, 95, 109, 105, 115, 115, 105, 110, 103, 95, 95, 40, 107, 101, 121, 41, 32, 35, 32, 67, 97, 108, 108, 101, 100, 32, 98, 121, 32, 95, 95, 103, 101, 116, 105, 116, 101, 109, 95, 95, 32, 102, 111, 114, 32, 109, 105, 115, 115, 105, 110, 103, 32, 107, 101, 121, 59, 32, 112, 115, 101, 117, 100, 111, 45, 99, 111, 100, 101, 58, 10, 32, 32, 105, 102, 32, 115, 101, 108, 102, 46, 100, 101, 102, 97, 117, 108, 116, 95, 102, 97, 99, 116, 111, 114, 121, 32, 105, 115, 32, 78, 111, 110, 101, 58, 32, 114, 97, 105, 115, 101, 32, 75, 101, 121, 69, 114, 114, 111, 114, 40, 40, 107, 101, 121, 44, 41, 41, 10, 32, 32, 115, 101, 108, 102, 91, 107, 101, 121, 93, 32, 61, 32, 118, 97, 108, 117, 101, 32, 61, 32, 115, 101, 108, 102, 46, 100, 101, 102, 97, 117, 108, 116, 95, 102, 97, 99, 116, 111, 114, 121, 40, 41, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 10, 0 ], "i8", ALLOC_NORMAL);
    _defdict_copy_doc = allocate([ 68, 46, 99, 111, 112, 121, 40, 41, 32, 45, 62, 32, 97, 32, 115, 104, 97, 108, 108, 111, 119, 32, 99, 111, 112, 121, 32, 111, 102, 32, 68, 46, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 105, 116, 101, 114, 105, 116, 101, 109, 115, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 95, 95, 109, 105, 115, 115, 105, 110, 103, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 99, 111, 112, 121, 0 ], "i8", ALLOC_NORMAL);
    _defdict_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str68 = allocate([ 100, 101, 102, 97, 117, 108, 116, 95, 102, 97, 99, 116, 111, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 70, 97, 99, 116, 111, 114, 121, 32, 102, 111, 114, 32, 100, 101, 102, 97, 117, 108, 116, 32, 118, 97, 108, 117, 101, 32, 99, 97, 108, 108, 101, 100, 32, 98, 121, 32, 95, 95, 109, 105, 115, 115, 105, 110, 103, 95, 95, 40, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _defdict_members = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str70 = allocate([ 100, 101, 102, 97, 117, 108, 116, 100, 105, 99, 116, 40, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 78, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 46, 46, 46, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 100, 101, 102, 97, 117, 108, 116, 100, 105, 99, 116, 40, 37, 115, 44, 32, 37, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 102, 105, 114, 115, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 99, 97, 108, 108, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _defdict_doc = allocate([ 100, 101, 102, 97, 117, 108, 116, 100, 105, 99, 116, 40, 100, 101, 102, 97, 117, 108, 116, 95, 102, 97, 99, 116, 111, 114, 121, 41, 32, 45, 45, 62, 32, 100, 105, 99, 116, 32, 119, 105, 116, 104, 32, 100, 101, 102, 97, 117, 108, 116, 32, 102, 97, 99, 116, 111, 114, 121, 10, 10, 84, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 102, 97, 99, 116, 111, 114, 121, 32, 105, 115, 32, 99, 97, 108, 108, 101, 100, 32, 119, 105, 116, 104, 111, 117, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 116, 111, 32, 112, 114, 111, 100, 117, 99, 101, 10, 97, 32, 110, 101, 119, 32, 118, 97, 108, 117, 101, 32, 119, 104, 101, 110, 32, 97, 32, 107, 101, 121, 32, 105, 115, 32, 110, 111, 116, 32, 112, 114, 101, 115, 101, 110, 116, 44, 32, 105, 110, 32, 95, 95, 103, 101, 116, 105, 116, 101, 109, 95, 95, 32, 111, 110, 108, 121, 46, 10, 65, 32, 100, 101, 102, 97, 117, 108, 116, 100, 105, 99, 116, 32, 99, 111, 109, 112, 97, 114, 101, 115, 32, 101, 113, 117, 97, 108, 32, 116, 111, 32, 97, 32, 100, 105, 99, 116, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 105, 116, 101, 109, 115, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 99, 111, 108, 108, 101, 99, 116, 105, 111, 110, 115, 46, 100, 101, 102, 97, 117, 108, 116, 100, 105, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _defdict_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_doc = allocate([ 72, 105, 103, 104, 32, 112, 101, 114, 102, 111, 114, 109, 97, 110, 99, 101, 32, 100, 97, 116, 97, 32, 115, 116, 114, 117, 99, 116, 117, 114, 101, 115, 46, 10, 45, 32, 100, 101, 113, 117, 101, 58, 32, 32, 32, 32, 32, 32, 32, 32, 111, 114, 100, 101, 114, 101, 100, 32, 99, 111, 108, 108, 101, 99, 116, 105, 111, 110, 32, 97, 99, 99, 101, 115, 115, 105, 98, 108, 101, 32, 102, 114, 111, 109, 32, 101, 110, 100, 112, 111, 105, 110, 116, 115, 32, 111, 110, 108, 121, 10, 45, 32, 100, 101, 102, 97, 117, 108, 116, 100, 105, 99, 116, 58, 32, 32, 100, 105, 99, 116, 32, 115, 117, 98, 99, 108, 97, 115, 115, 32, 119, 105, 116, 104, 32, 97, 32, 100, 101, 102, 97, 117, 108, 116, 32, 118, 97, 108, 117, 101, 32, 102, 97, 99, 116, 111, 114, 121, 10, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 95, 99, 111, 108, 108, 101, 99, 116, 105, 111, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 100, 101, 113, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 100, 101, 102, 97, 117, 108, 116, 100, 105, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_C_53_9608] = __str37;
    HEAP[_C_53_9608 + 4] = __str38;
    HEAP[_deque_getset] = __str38;
    HEAP[_deque_getset + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_deque_getset + 12] = __str41;
    HEAP[_deque_as_sequence] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_deque_as_sequence + 12] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_deque_as_sequence + 20] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_deque_as_sequence + 32] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_deque_methods] = __str42;
    HEAP[_deque_methods + 4] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_deque_methods + 12] = _append_doc;
    HEAP[_deque_methods + 16] = __str43;
    HEAP[_deque_methods + 20] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_deque_methods + 28] = _appendleft_doc;
    HEAP[_deque_methods + 32] = __str44;
    HEAP[_deque_methods + 36] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_deque_methods + 44] = _clear_doc;
    HEAP[_deque_methods + 48] = __str45;
    HEAP[_deque_methods + 52] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_deque_methods + 60] = _copy_doc;
    HEAP[_deque_methods + 64] = __str46;
    HEAP[_deque_methods + 68] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_deque_methods + 76] = _count_doc;
    HEAP[_deque_methods + 80] = __str47;
    HEAP[_deque_methods + 84] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_deque_methods + 92] = _extend_doc;
    HEAP[_deque_methods + 96] = __str48;
    HEAP[_deque_methods + 100] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_deque_methods + 108] = _extendleft_doc;
    HEAP[_deque_methods + 112] = __str49;
    HEAP[_deque_methods + 116] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_deque_methods + 124] = _pop_doc;
    HEAP[_deque_methods + 128] = __str50;
    HEAP[_deque_methods + 132] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_deque_methods + 140] = _popleft_doc;
    HEAP[_deque_methods + 144] = __str51;
    HEAP[_deque_methods + 148] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_deque_methods + 156] = _reduce_doc;
    HEAP[_deque_methods + 160] = __str52;
    HEAP[_deque_methods + 164] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_deque_methods + 172] = _remove_doc;
    HEAP[_deque_methods + 176] = __str53;
    HEAP[_deque_methods + 180] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_deque_methods + 188] = _reversed_doc;
    HEAP[_deque_methods + 192] = __str54;
    HEAP[_deque_methods + 196] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_deque_methods + 204] = _reverse_doc;
    HEAP[_deque_methods + 208] = __str55;
    HEAP[_deque_methods + 212] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_deque_methods + 220] = _rotate_doc;
    HEAP[_deque_type + 12] = __str56;
    HEAP[_deque_type + 24] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_deque_type + 28] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_deque_type + 44] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_deque_type + 52] = _deque_as_sequence;
    HEAP[_deque_type + 60] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_deque_type + 72] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_deque_type + 88] = _deque_doc;
    HEAP[_deque_type + 92] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_deque_type + 96] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_deque_type + 100] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_deque_type + 108] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_deque_type + 116] = _deque_methods;
    HEAP[_deque_type + 124] = _deque_getset;
    HEAP[_deque_type + 148] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_deque_type + 152] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_deque_type + 156] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_deque_type + 160] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_dequeiter_methods] = __str59;
    HEAP[_dequeiter_methods + 4] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_dequeiter_methods + 12] = _length_hint_doc;
    HEAP[_dequeiter_type + 12] = __str60;
    HEAP[_dequeiter_type + 24] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_dequeiter_type + 72] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_dequeiter_type + 92] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_dequeiter_type + 108] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_dequeiter_type + 112] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_dequeiter_type + 116] = _dequeiter_methods;
    HEAP[_dequereviter_type + 12] = __str63;
    HEAP[_dequereviter_type + 24] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_dequereviter_type + 72] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_dequereviter_type + 92] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_dequereviter_type + 108] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_dequereviter_type + 112] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_dequereviter_type + 116] = _dequeiter_methods;
    HEAP[_defdict_methods] = __str66;
    HEAP[_defdict_methods + 4] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_defdict_methods + 12] = _defdict_missing_doc;
    HEAP[_defdict_methods + 16] = __str67;
    HEAP[_defdict_methods + 20] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_defdict_methods + 28] = _defdict_copy_doc;
    HEAP[_defdict_methods + 32] = __str45;
    HEAP[_defdict_methods + 36] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_defdict_methods + 44] = _defdict_copy_doc;
    HEAP[_defdict_methods + 48] = __str51;
    HEAP[_defdict_methods + 52] = FUNCTION_TABLE_OFFSET + 82;
    HEAP[_defdict_methods + 60] = _reduce_doc;
    HEAP[_defdict_members] = __str68;
    HEAP[_defdict_members + 16] = __str69;
    HEAP[_defdict_type + 12] = __str75;
    HEAP[_defdict_type + 24] = FUNCTION_TABLE_OFFSET + 84;
    HEAP[_defdict_type + 28] = FUNCTION_TABLE_OFFSET + 86;
    HEAP[_defdict_type + 44] = FUNCTION_TABLE_OFFSET + 88;
    HEAP[_defdict_type + 72] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_defdict_type + 88] = _defdict_doc;
    HEAP[_defdict_type + 92] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_defdict_type + 96] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_defdict_type + 116] = _defdict_methods;
    HEAP[_defdict_type + 120] = _defdict_members;
    HEAP[_defdict_type + 148] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_defdict_type + 152] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_defdict_type + 160] = FUNCTION_TABLE_OFFSET + 64;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
