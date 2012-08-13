"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 128;
  var $1___SIZE = 16;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyListObject___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _lt_8258;
  var __str;
  var __str1;
  var __str2;
  var ___PRETTY_FUNCTION___8285;
  var __str3;
  var ___PRETTY_FUNCTION___8359;
  var __str4;
  var __str5;
  var _heappush_doc;
  var _heappop_doc;
  var __str6;
  var _heapreplace_doc;
  var __str7;
  var _heappushpop_doc;
  var _heapify_doc;
  var __str8;
  var _nlargest_doc;
  var ___PRETTY_FUNCTION___8788;
  var ___PRETTY_FUNCTION___8862;
  var __str9;
  var _nsmallest_doc;
  var __str10;
  var __str11;
  var __str12;
  var __str13;
  var _heapq_methods;
  var _module_doc;
  var ___about__;
  var __str14;
  var __str15;
  function _cmp_lt($x, $y) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr = __stackBase__;
      var $y_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $cmp = __stackBase__ + 16;
      
      HEAP[$x_addr] = $x;
      HEAP[$y_addr] = $y;
      
      
      if (HEAP[_lt_8258] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = _PyString_FromString(__str);
      HEAP[_lt_8258] = $3;
      
      
      if (HEAP[_lt_8258] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 3:
      var $6 = HEAP[_lt_8258];
      var $7 = HEAP[$x_addr];
      var $8 = _PyObject_HasAttr($7, $6);
      
      if ($8 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $10 = HEAP[$x_addr];
      var $11 = HEAP[$y_addr];
      var $12 = _PyObject_RichCompareBool($10, $11, 0);
      HEAP[$0] = $12;
      __label__ = 8;
      break;
     case 5:
      var $13 = HEAP[$y_addr];
      var $14 = HEAP[$x_addr];
      var $15 = _PyObject_RichCompareBool($13, $14, 1);
      HEAP[$cmp] = $15;
      
      var $17 = HEAP[$cmp] != -1;
      if ($17) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $19 = 1 - HEAP[$cmp];
      HEAP[$cmp] = $19;
      __label__ = 7;
      break;
     case 7:
      var $20 = HEAP[$cmp];
      HEAP[$0] = $20;
      __label__ = 8;
      break;
     case 8:
      var $21 = HEAP[$0];
      HEAP[$retval] = $21;
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
  function __siftdown($heap, $startpos, $pos) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $heap_addr = __stackBase__;
      var $startpos_addr = __stackBase__ + 4;
      var $pos_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $newitem = __stackBase__ + 20;
      var $parent = __stackBase__ + 24;
      var $cmp = __stackBase__ + 28;
      var $parentpos = __stackBase__ + 32;
      
      HEAP[$heap_addr] = $heap;
      HEAP[$startpos_addr] = $startpos;
      HEAP[$pos_addr] = $pos;
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$heap_addr] + 4] + 84] & 33554432) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str1, __str2, 42, ___PRETTY_FUNCTION___8285);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      
      
      if (HEAP[HEAP[$heap_addr] + 8] <= HEAP[$pos_addr]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $15 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($15, __str3);
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 4:
      
      
      
      
      
      var $21 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      HEAP[$newitem] = $21;
      
      
      
      var $25 = HEAP[HEAP[$newitem]] + 1;
      
      var $27 = HEAP[$newitem];
      HEAP[$27] = $25;
      __label__ = 13;
      break;
     case 5:
      
      
      var $30 = HEAP[$pos_addr] - 1 >> 1;
      HEAP[$parentpos] = $30;
      
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$parentpos]];
      HEAP[$parent] = $36;
      var $37 = HEAP[$newitem];
      var $38 = HEAP[$parent];
      var $39 = _cmp_lt($37, $38);
      HEAP[$cmp] = $39;
      
      var $41 = HEAP[$cmp] == -1;
      if ($41) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $45 = HEAP[HEAP[$newitem]] - 1;
      
      var $47 = HEAP[$newitem];
      HEAP[$47] = $45;
      
      
      
      
      if (HEAP[HEAP[$newitem]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $56 = HEAP[HEAP[HEAP[$newitem] + 4] + 24];
      var $57 = HEAP[$newitem];
      FUNCTION_TABLE[$56]($57);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 9:
      
      
      if (HEAP[$cmp] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $63 = HEAP[HEAP[$parent]] + 1;
      
      var $65 = HEAP[$parent];
      HEAP[$65] = $63;
      
      
      
      
      
      var $71 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      
      
      var $74 = HEAP[$71] - 1;
      var $75 = $71;
      HEAP[$75] = $74;
      
      
      
      if (HEAP[$71] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      
      
      
      var $88 = HEAP[HEAP[HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]] + 4] + 24];
      
      
      
      
      
      var $94 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      FUNCTION_TABLE[$88]($94);
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      var $99 = HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr];
      var $100 = HEAP[$parent];
      HEAP[$99] = $100;
      var $101 = HEAP[$parentpos];
      HEAP[$pos_addr] = $101;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (HEAP[$pos_addr] > HEAP[$startpos_addr]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      
      var $110 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      
      
      var $113 = HEAP[$110] - 1;
      var $114 = $110;
      HEAP[$114] = $113;
      
      
      
      if (HEAP[$110] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      
      
      var $127 = HEAP[HEAP[HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]] + 4] + 24];
      
      
      
      
      
      var $133 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      FUNCTION_TABLE[$127]($133);
      __label__ = 16;
      break;
     case 16:
      
      
      
      
      var $138 = HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr];
      var $139 = HEAP[$newitem];
      HEAP[$138] = $139;
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 17:
      var $140 = HEAP[$0];
      HEAP[$retval] = $140;
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
  function __siftup($heap, $pos) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $heap_addr = __stackBase__;
      var $pos_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $startpos = __stackBase__ + 16;
      var $endpos = __stackBase__ + 20;
      var $childpos = __stackBase__ + 24;
      var $rightpos = __stackBase__ + 28;
      var $cmp = __stackBase__ + 32;
      var $newitem = __stackBase__ + 36;
      var $tmp = __stackBase__ + 40;
      
      HEAP[$heap_addr] = $heap;
      HEAP[$pos_addr] = $pos;
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$heap_addr] + 4] + 84] & 33554432) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str1, __str2, 79, ___PRETTY_FUNCTION___8359);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      var $12 = HEAP[HEAP[$heap_addr] + 8];
      HEAP[$endpos] = $12;
      var $13 = HEAP[$pos_addr];
      HEAP[$startpos] = $13;
      
      
      
      if (HEAP[$pos_addr] >= HEAP[$endpos]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $17 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($17, __str3);
      HEAP[$0] = -1;
      __label__ = 19;
      break;
     case 4:
      
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      HEAP[$newitem] = $23;
      
      
      
      var $27 = HEAP[HEAP[$newitem]] + 1;
      
      var $29 = HEAP[$newitem];
      HEAP[$29] = $27;
      
      
      var $32 = HEAP[$pos_addr] * 2 + 1;
      HEAP[$childpos] = $32;
      __label__ = 15;
      break;
     case 5:
      
      var $34 = HEAP[$childpos] + 1;
      HEAP[$rightpos] = $34;
      
      
      
      if (HEAP[$rightpos] < HEAP[$endpos]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 6:
      
      
      
      
      
      var $43 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$rightpos]];
      
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$childpos]];
      var $50 = _cmp_lt($49, $43);
      HEAP[$cmp] = $50;
      
      var $52 = HEAP[$cmp] == -1;
      if ($52) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      var $56 = HEAP[HEAP[$newitem]] - 1;
      
      var $58 = HEAP[$newitem];
      HEAP[$58] = $56;
      
      
      
      
      if (HEAP[HEAP[$newitem]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[$newitem] + 4] + 24];
      var $68 = HEAP[$newitem];
      FUNCTION_TABLE[$67]($68);
      __label__ = 9;
      break;
     case 9:
      HEAP[$0] = -1;
      __label__ = 19;
      break;
     case 10:
      
      
      if (HEAP[$cmp] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $71 = HEAP[$rightpos];
      HEAP[$childpos] = $71;
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      
      var $77 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$childpos]];
      HEAP[$tmp] = $77;
      
      
      
      var $81 = HEAP[HEAP[$tmp]] + 1;
      
      var $83 = HEAP[$tmp];
      HEAP[$83] = $81;
      
      
      
      
      
      var $89 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      
      
      var $92 = HEAP[$89] - 1;
      var $93 = $89;
      HEAP[$93] = $92;
      
      
      
      if (HEAP[$89] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      
      
      
      
      var $106 = HEAP[HEAP[HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]] + 4] + 24];
      
      
      
      
      
      var $112 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      FUNCTION_TABLE[$106]($112);
      __label__ = 14;
      break;
     case 14:
      
      
      
      
      var $117 = HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr];
      var $118 = HEAP[$tmp];
      HEAP[$117] = $118;
      var $119 = HEAP[$childpos];
      HEAP[$pos_addr] = $119;
      
      
      var $122 = HEAP[$pos_addr] * 2 + 1;
      HEAP[$childpos] = $122;
      __label__ = 15;
      break;
     case 15:
      
      
      
      if (HEAP[$childpos] < HEAP[$endpos]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      var $131 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      
      
      var $134 = HEAP[$131] - 1;
      var $135 = $131;
      HEAP[$135] = $134;
      
      
      
      if (HEAP[$131] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      
      
      var $148 = HEAP[HEAP[HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]] + 4] + 24];
      
      
      
      
      
      var $154 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      FUNCTION_TABLE[$148]($154);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      var $159 = HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr];
      var $160 = HEAP[$newitem];
      HEAP[$159] = $160;
      var $161 = HEAP[$heap_addr];
      var $162 = HEAP[$startpos];
      var $163 = HEAP[$pos_addr];
      var $164 = __siftdown($161, $162, $163);
      HEAP[$0] = $164;
      __label__ = 19;
      break;
     case 19:
      var $165 = HEAP[$0];
      HEAP[$retval] = $165;
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
  function _heappush($self, $args) {
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
      var $heap = __stackBase__ + 16;
      var $item = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str4, 2, 2, allocate([ $heap, 0, 0, 0, $item, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$heap] + 4] + 84] & 33554432) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($11, __str5);
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 4:
      var $12 = HEAP[$item];
      var $13 = HEAP[$heap];
      var $14 = _PyList_Append($13, $12);
      var $15 = $14 == -1;
      if ($15) {
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
      
      
      
      
      var $20 = HEAP[HEAP[$heap] + 8] - 1;
      
      var $22 = HEAP[$heap];
      var $23 = __siftdown($22, 0, $20);
      var $24 = $23 == -1;
      if ($24) {
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
      
      var $26 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $26;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 9;
      break;
     case 9:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
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
  function _heappop($self, $heap) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $heap_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $lastelt = __stackBase__ + 16;
      var $returnitem = __stackBase__ + 20;
      var $n = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      HEAP[$heap_addr] = $heap;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$heap_addr] + 4] + 84] & 33554432) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $8 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($8, __str5);
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 2:
      
      
      
      var $12 = HEAP[HEAP[$heap_addr] + 8];
      HEAP[$n] = $12;
      
      
      if (HEAP[$n] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $15 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($15, __str3);
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 4:
      
      
      
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * (HEAP[$n] - 1)];
      HEAP[$lastelt] = $23;
      
      
      
      var $27 = HEAP[HEAP[$lastelt]] + 1;
      
      var $29 = HEAP[$lastelt];
      HEAP[$29] = $27;
      
      var $31 = HEAP[$n] - 1;
      var $32 = HEAP[$heap_addr];
      var $33 = HEAP[$n];
      var $34 = _PyList_SetSlice($32, $31, $33, 0);
      
      var $36 = HEAP[$n] - 1;
      HEAP[$n] = $36;
      
      
      if (HEAP[$n] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $39 = HEAP[$lastelt];
      HEAP[$0] = $39;
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      
      var $45 = HEAP[HEAP[HEAP[$heap_addr] + 12]];
      HEAP[$returnitem] = $45;
      
      
      
      
      var $50 = HEAP[HEAP[$heap_addr] + 12];
      var $51 = HEAP[$lastelt];
      HEAP[$50] = $51;
      
      var $53 = HEAP[$heap_addr];
      var $54 = __siftup($53, 0);
      var $55 = $54 == -1;
      if ($55) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      var $59 = HEAP[HEAP[$returnitem]] - 1;
      
      var $61 = HEAP[$returnitem];
      HEAP[$61] = $59;
      
      
      
      
      if (HEAP[HEAP[$returnitem]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $70 = HEAP[HEAP[HEAP[$returnitem] + 4] + 24];
      var $71 = HEAP[$returnitem];
      FUNCTION_TABLE[$70]($71);
      __label__ = 9;
      break;
     case 9:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 10:
      var $72 = HEAP[$returnitem];
      HEAP[$0] = $72;
      __label__ = 11;
      break;
     case 11:
      var $73 = HEAP[$0];
      HEAP[$retval] = $73;
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
  function _heapreplace($self, $args) {
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
      var $heap = __stackBase__ + 16;
      var $item = __stackBase__ + 20;
      var $returnitem = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str6, 2, 2, allocate([ $heap, 0, 0, 0, $item, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$heap] + 4] + 84] & 33554432) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($11, __str5);
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 4:
      
      
      
      
      
      if (HEAP[HEAP[$heap] + 8] <= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $17 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($17, __str3);
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$heap] + 12]];
      HEAP[$returnitem] = $23;
      
      
      
      var $27 = HEAP[HEAP[$item]] + 1;
      var $28 = HEAP[$item];
      HEAP[$28] = $27;
      
      
      
      
      var $33 = HEAP[$item];
      var $34 = HEAP[HEAP[$heap] + 12];
      HEAP[$34] = $33;
      
      var $36 = HEAP[$heap];
      var $37 = __siftup($36, 0);
      var $38 = $37 == -1;
      if ($38) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      var $42 = HEAP[HEAP[$returnitem]] - 1;
      
      var $44 = HEAP[$returnitem];
      HEAP[$44] = $42;
      
      
      
      
      if (HEAP[HEAP[$returnitem]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $53 = HEAP[HEAP[HEAP[$returnitem] + 4] + 24];
      var $54 = HEAP[$returnitem];
      FUNCTION_TABLE[$53]($54);
      __label__ = 9;
      break;
     case 9:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 10:
      var $55 = HEAP[$returnitem];
      HEAP[$0] = $55;
      __label__ = 11;
      break;
     case 11:
      var $56 = HEAP[$0];
      HEAP[$retval] = $56;
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
  function _heappushpop($self, $args) {
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
      var $heap = __stackBase__ + 16;
      var $item = __stackBase__ + 20;
      var $returnitem = __stackBase__ + 24;
      var $cmp = __stackBase__ + 28;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str7, 2, 2, allocate([ $heap, 0, 0, 0, $item, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$heap] + 4] + 84] & 33554432) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($11, __str5);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 4:
      
      
      
      
      
      if (HEAP[HEAP[$heap] + 8] <= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      var $20 = HEAP[HEAP[$item]] + 1;
      var $21 = HEAP[$item];
      HEAP[$21] = $20;
      var $22 = HEAP[$item];
      HEAP[$0] = $22;
      __label__ = 15;
      break;
     case 6:
      var $23 = HEAP[$item];
      
      
      
      
      
      var $29 = HEAP[HEAP[HEAP[$heap] + 12]];
      var $30 = _cmp_lt($29, $23);
      HEAP[$cmp] = $30;
      
      var $32 = HEAP[$cmp] == -1;
      if ($32) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 8:
      
      
      if (HEAP[$cmp] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      var $38 = HEAP[HEAP[$item]] + 1;
      var $39 = HEAP[$item];
      HEAP[$39] = $38;
      var $40 = HEAP[$item];
      HEAP[$0] = $40;
      __label__ = 15;
      break;
     case 10:
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$heap] + 12]];
      HEAP[$returnitem] = $46;
      
      
      
      var $50 = HEAP[HEAP[$item]] + 1;
      var $51 = HEAP[$item];
      HEAP[$51] = $50;
      
      
      
      
      var $56 = HEAP[$item];
      var $57 = HEAP[HEAP[$heap] + 12];
      HEAP[$57] = $56;
      
      var $59 = HEAP[$heap];
      var $60 = __siftup($59, 0);
      var $61 = $60 == -1;
      if ($61) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      var $65 = HEAP[HEAP[$returnitem]] - 1;
      
      var $67 = HEAP[$returnitem];
      HEAP[$67] = $65;
      
      
      
      
      if (HEAP[HEAP[$returnitem]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $76 = HEAP[HEAP[HEAP[$returnitem] + 4] + 24];
      var $77 = HEAP[$returnitem];
      FUNCTION_TABLE[$76]($77);
      __label__ = 13;
      break;
     case 13:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 14:
      var $78 = HEAP[$returnitem];
      HEAP[$0] = $78;
      __label__ = 15;
      break;
     case 15:
      var $79 = HEAP[$0];
      HEAP[$retval] = $79;
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
  function _heapify($self, $heap) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $heap_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $n = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$heap_addr] = $heap;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$heap_addr] + 4] + 84] & 33554432) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $8 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($8, __str5);
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 2:
      
      
      
      var $12 = HEAP[HEAP[$heap_addr] + 8];
      HEAP[$n] = $12;
      
      
      var $15 = (HEAP[$n] / 2 | 0) - 1;
      HEAP[$i] = $15;
      __label__ = 6;
      break;
     case 3:
      
      var $17 = HEAP[$heap_addr];
      var $18 = HEAP[$i];
      var $19 = __siftup($17, $18);
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
      __label__ = 8;
      break;
     case 5:
      
      var $22 = HEAP[$i] - 1;
      HEAP[$i] = $22;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$i] >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      var $26 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $26;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 8;
      break;
     case 8:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
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
  function _nlargest($self, $args) {
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
      var $heap = __stackBase__ + 16;
      var $elem = __stackBase__ + 20;
      var $iterable = __stackBase__ + 24;
      var $sol = __stackBase__ + 28;
      var $it = __stackBase__ + 32;
      var $oldelem = __stackBase__ + 36;
      var $i = __stackBase__ + 40;
      var $n = __stackBase__ + 44;
      var $cmp = __stackBase__ + 48;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$heap] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str8, allocate([ $n, 0, 0, 0, $iterable, 0, 0, 0 ], [ "i32*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$iterable];
      var $5 = _PyObject_GetIter($4);
      HEAP[$it] = $5;
      
      
      if (HEAP[$it] == 0) {
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
      var $8 = _PyList_New(0);
      HEAP[$heap] = $8;
      
      
      if (HEAP[$heap] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      HEAP[$i] = 0;
      __label__ = 15;
      break;
     case 6:
      var $11 = HEAP[$it];
      var $12 = _PyIter_Next($11);
      HEAP[$elem] = $12;
      
      
      if (HEAP[$elem] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $15 = _PyErr_Occurred();
      
      if ($15 != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 8:
      var $17 = HEAP[$heap];
      var $18 = HEAP[$elem];
      var $19 = _PyList_Append($17, $18);
      var $20 = $19 == -1;
      if ($20) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      var $24 = HEAP[HEAP[$elem]] - 1;
      
      var $26 = HEAP[$elem];
      HEAP[$26] = $24;
      
      
      
      
      if (HEAP[HEAP[$elem]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $35 = HEAP[HEAP[HEAP[$elem] + 4] + 24];
      var $36 = HEAP[$elem];
      FUNCTION_TABLE[$35]($36);
      __label__ = 11;
      break;
     case 11:
      __label__ = 42;
      break;
     case 12:
      
      
      
      var $40 = HEAP[HEAP[$elem]] - 1;
      
      var $42 = HEAP[$elem];
      HEAP[$42] = $40;
      
      
      
      
      if (HEAP[HEAP[$elem]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $51 = HEAP[HEAP[HEAP[$elem] + 4] + 24];
      var $52 = HEAP[$elem];
      FUNCTION_TABLE[$51]($52);
      __label__ = 14;
      break;
     case 14:
      
      var $54 = HEAP[$i] + 1;
      HEAP[$i] = $54;
      __label__ = 15;
      break;
     case 15:
      
      
      
      if (HEAP[$i] < HEAP[$n]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      if (HEAP[HEAP[$heap] + 8] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      var $65 = (HEAP[$n] / 2 | 0) - 1;
      HEAP[$i] = $65;
      __label__ = 20;
      break;
     case 18:
      
      var $67 = HEAP[$heap];
      var $68 = HEAP[$i];
      var $69 = __siftup($67, $68);
      var $70 = $69 == -1;
      if ($70) {
        __label__ = 42;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      var $72 = HEAP[$i] - 1;
      HEAP[$i] = $72;
      __label__ = 20;
      break;
     case 20:
      
      
      if (HEAP[$i] >= 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      var $80 = HEAP[HEAP[HEAP[$heap] + 12]];
      HEAP[$sol] = $80;
      __label__ = 22;
      break;
     case 22:
      var $81 = HEAP[$it];
      var $82 = _PyIter_Next($81);
      HEAP[$elem] = $82;
      
      
      if (HEAP[$elem] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      var $85 = _PyErr_Occurred();
      
      if ($85 != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 24:
      var $87 = HEAP[$sol];
      var $88 = HEAP[$elem];
      var $89 = _cmp_lt($87, $88);
      HEAP[$cmp] = $89;
      
      var $91 = HEAP[$cmp] == -1;
      if ($91) {
        __label__ = 25;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 25:
      
      
      
      var $95 = HEAP[HEAP[$elem]] - 1;
      
      var $97 = HEAP[$elem];
      HEAP[$97] = $95;
      
      
      
      
      if (HEAP[HEAP[$elem]] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $106 = HEAP[HEAP[HEAP[$elem] + 4] + 24];
      var $107 = HEAP[$elem];
      FUNCTION_TABLE[$106]($107);
      __label__ = 27;
      break;
     case 27:
      __label__ = 42;
      break;
     case 28:
      
      
      if (HEAP[$cmp] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 29:
      
      
      
      var $113 = HEAP[HEAP[$elem]] - 1;
      
      var $115 = HEAP[$elem];
      HEAP[$115] = $113;
      
      
      
      
      if (HEAP[HEAP[$elem]] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $124 = HEAP[HEAP[HEAP[$elem] + 4] + 24];
      var $125 = HEAP[$elem];
      FUNCTION_TABLE[$124]($125);
      __label__ = 31;
      break;
     case 31:
      __label__ = 36;
      break;
     case 32:
      
      
      
      
      
      var $131 = HEAP[HEAP[HEAP[$heap] + 12]];
      HEAP[$oldelem] = $131;
      
      
      
      
      var $136 = HEAP[HEAP[$heap] + 12];
      var $137 = HEAP[$elem];
      HEAP[$136] = $137;
      
      
      
      var $141 = HEAP[HEAP[$oldelem]] - 1;
      
      var $143 = HEAP[$oldelem];
      HEAP[$143] = $141;
      
      
      
      
      if (HEAP[HEAP[$oldelem]] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $152 = HEAP[HEAP[HEAP[$oldelem] + 4] + 24];
      var $153 = HEAP[$oldelem];
      FUNCTION_TABLE[$152]($153);
      __label__ = 34;
      break;
     case 34:
      
      var $155 = HEAP[$heap];
      var $156 = __siftup($155, 0);
      var $157 = $156 == -1;
      if ($157) {
        __label__ = 42;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      
      
      var $163 = HEAP[HEAP[HEAP[$heap] + 12]];
      HEAP[$sol] = $163;
      __label__ = 36;
      break;
     case 36:
      __label__ = 22;
      break;
     case 37:
      var $164 = HEAP[$heap];
      var $165 = _PyList_Sort($164);
      var $166 = $165 == -1;
      if ($166) {
        __label__ = 42;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      var $167 = HEAP[$heap];
      var $168 = _PyList_Reverse($167);
      var $169 = $168 == -1;
      if ($169) {
        __label__ = 42;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      
      
      var $173 = HEAP[HEAP[$it]] - 1;
      
      var $175 = HEAP[$it];
      HEAP[$175] = $173;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      
      
      var $184 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $185 = HEAP[$it];
      FUNCTION_TABLE[$184]($185);
      __label__ = 41;
      break;
     case 41:
      var $186 = HEAP[$heap];
      HEAP[$0] = $186;
      __label__ = 48;
      break;
     case 42:
      
      
      
      var $190 = HEAP[HEAP[$it]] - 1;
      
      var $192 = HEAP[$it];
      HEAP[$192] = $190;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      
      
      var $201 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $202 = HEAP[$it];
      FUNCTION_TABLE[$201]($202);
      __label__ = 44;
      break;
     case 44:
      
      
      if (HEAP[$heap] != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 45:
      
      
      
      var $208 = HEAP[HEAP[$heap]] - 1;
      
      var $210 = HEAP[$heap];
      HEAP[$210] = $208;
      
      
      
      
      if (HEAP[HEAP[$heap]] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      
      
      var $219 = HEAP[HEAP[HEAP[$heap] + 4] + 24];
      var $220 = HEAP[$heap];
      FUNCTION_TABLE[$219]($220);
      __label__ = 47;
      break;
     case 47:
      HEAP[$0] = 0;
      __label__ = 48;
      break;
     case 48:
      var $221 = HEAP[$0];
      HEAP[$retval] = $221;
      __label__ = 49;
      break;
     case 49:
      var $retval46 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval46;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __siftdownmax($heap, $startpos, $pos) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $heap_addr = __stackBase__;
      var $startpos_addr = __stackBase__ + 4;
      var $pos_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $newitem = __stackBase__ + 20;
      var $parent = __stackBase__ + 24;
      var $cmp = __stackBase__ + 28;
      var $parentpos = __stackBase__ + 32;
      
      HEAP[$heap_addr] = $heap;
      HEAP[$startpos_addr] = $startpos;
      HEAP[$pos_addr] = $pos;
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$heap_addr] + 4] + 84] & 33554432) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str1, __str2, 381, ___PRETTY_FUNCTION___8788);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      
      
      if (HEAP[HEAP[$heap_addr] + 8] <= HEAP[$pos_addr]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $15 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($15, __str3);
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 4:
      
      
      
      
      
      var $21 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      HEAP[$newitem] = $21;
      
      
      
      var $25 = HEAP[HEAP[$newitem]] + 1;
      
      var $27 = HEAP[$newitem];
      HEAP[$27] = $25;
      __label__ = 13;
      break;
     case 5:
      
      
      var $30 = HEAP[$pos_addr] - 1 >> 1;
      HEAP[$parentpos] = $30;
      
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$parentpos]];
      HEAP[$parent] = $36;
      var $37 = HEAP[$parent];
      var $38 = HEAP[$newitem];
      var $39 = _cmp_lt($37, $38);
      HEAP[$cmp] = $39;
      
      var $41 = HEAP[$cmp] == -1;
      if ($41) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $45 = HEAP[HEAP[$newitem]] - 1;
      
      var $47 = HEAP[$newitem];
      HEAP[$47] = $45;
      
      
      
      
      if (HEAP[HEAP[$newitem]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $56 = HEAP[HEAP[HEAP[$newitem] + 4] + 24];
      var $57 = HEAP[$newitem];
      FUNCTION_TABLE[$56]($57);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 9:
      
      
      if (HEAP[$cmp] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $63 = HEAP[HEAP[$parent]] + 1;
      
      var $65 = HEAP[$parent];
      HEAP[$65] = $63;
      
      
      
      
      
      var $71 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      
      
      var $74 = HEAP[$71] - 1;
      var $75 = $71;
      HEAP[$75] = $74;
      
      
      
      if (HEAP[$71] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      
      
      
      var $88 = HEAP[HEAP[HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]] + 4] + 24];
      
      
      
      
      
      var $94 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      FUNCTION_TABLE[$88]($94);
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      var $99 = HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr];
      var $100 = HEAP[$parent];
      HEAP[$99] = $100;
      var $101 = HEAP[$parentpos];
      HEAP[$pos_addr] = $101;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (HEAP[$pos_addr] > HEAP[$startpos_addr]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      
      var $110 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      
      
      var $113 = HEAP[$110] - 1;
      var $114 = $110;
      HEAP[$114] = $113;
      
      
      
      if (HEAP[$110] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      
      
      var $127 = HEAP[HEAP[HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]] + 4] + 24];
      
      
      
      
      
      var $133 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      FUNCTION_TABLE[$127]($133);
      __label__ = 16;
      break;
     case 16:
      
      
      
      
      var $138 = HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr];
      var $139 = HEAP[$newitem];
      HEAP[$138] = $139;
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 17:
      var $140 = HEAP[$0];
      HEAP[$retval] = $140;
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
  function __siftupmax($heap, $pos) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $heap_addr = __stackBase__;
      var $pos_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $startpos = __stackBase__ + 16;
      var $endpos = __stackBase__ + 20;
      var $childpos = __stackBase__ + 24;
      var $rightpos = __stackBase__ + 28;
      var $cmp = __stackBase__ + 32;
      var $newitem = __stackBase__ + 36;
      var $tmp = __stackBase__ + 40;
      
      HEAP[$heap_addr] = $heap;
      HEAP[$pos_addr] = $pos;
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$heap_addr] + 4] + 84] & 33554432) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str1, __str2, 418, ___PRETTY_FUNCTION___8862);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      var $12 = HEAP[HEAP[$heap_addr] + 8];
      HEAP[$endpos] = $12;
      var $13 = HEAP[$pos_addr];
      HEAP[$startpos] = $13;
      
      
      
      if (HEAP[$pos_addr] >= HEAP[$endpos]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $17 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($17, __str3);
      HEAP[$0] = -1;
      __label__ = 19;
      break;
     case 4:
      
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      HEAP[$newitem] = $23;
      
      
      
      var $27 = HEAP[HEAP[$newitem]] + 1;
      
      var $29 = HEAP[$newitem];
      HEAP[$29] = $27;
      
      
      var $32 = HEAP[$pos_addr] * 2 + 1;
      HEAP[$childpos] = $32;
      __label__ = 15;
      break;
     case 5:
      
      var $34 = HEAP[$childpos] + 1;
      HEAP[$rightpos] = $34;
      
      
      
      if (HEAP[$rightpos] < HEAP[$endpos]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 6:
      
      
      
      
      
      var $43 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$childpos]];
      
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$rightpos]];
      var $50 = _cmp_lt($49, $43);
      HEAP[$cmp] = $50;
      
      var $52 = HEAP[$cmp] == -1;
      if ($52) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      var $56 = HEAP[HEAP[$newitem]] - 1;
      
      var $58 = HEAP[$newitem];
      HEAP[$58] = $56;
      
      
      
      
      if (HEAP[HEAP[$newitem]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[$newitem] + 4] + 24];
      var $68 = HEAP[$newitem];
      FUNCTION_TABLE[$67]($68);
      __label__ = 9;
      break;
     case 9:
      HEAP[$0] = -1;
      __label__ = 19;
      break;
     case 10:
      
      
      if (HEAP[$cmp] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $71 = HEAP[$rightpos];
      HEAP[$childpos] = $71;
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      
      var $77 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$childpos]];
      HEAP[$tmp] = $77;
      
      
      
      var $81 = HEAP[HEAP[$tmp]] + 1;
      
      var $83 = HEAP[$tmp];
      HEAP[$83] = $81;
      
      
      
      
      
      var $89 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      
      
      var $92 = HEAP[$89] - 1;
      var $93 = $89;
      HEAP[$93] = $92;
      
      
      
      if (HEAP[$89] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      
      
      
      
      var $106 = HEAP[HEAP[HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]] + 4] + 24];
      
      
      
      
      
      var $112 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      FUNCTION_TABLE[$106]($112);
      __label__ = 14;
      break;
     case 14:
      
      
      
      
      var $117 = HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr];
      var $118 = HEAP[$tmp];
      HEAP[$117] = $118;
      var $119 = HEAP[$childpos];
      HEAP[$pos_addr] = $119;
      
      
      var $122 = HEAP[$pos_addr] * 2 + 1;
      HEAP[$childpos] = $122;
      __label__ = 15;
      break;
     case 15:
      
      
      
      if (HEAP[$childpos] < HEAP[$endpos]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      var $131 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      
      
      var $134 = HEAP[$131] - 1;
      var $135 = $131;
      HEAP[$135] = $134;
      
      
      
      if (HEAP[$131] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      
      
      var $148 = HEAP[HEAP[HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]] + 4] + 24];
      
      
      
      
      
      var $154 = HEAP[HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr]];
      FUNCTION_TABLE[$148]($154);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      var $159 = HEAP[HEAP[$heap_addr] + 12] + 4 * HEAP[$pos_addr];
      var $160 = HEAP[$newitem];
      HEAP[$159] = $160;
      var $161 = HEAP[$heap_addr];
      var $162 = HEAP[$startpos];
      var $163 = HEAP[$pos_addr];
      var $164 = __siftdownmax($161, $162, $163);
      HEAP[$0] = $164;
      __label__ = 19;
      break;
     case 19:
      var $165 = HEAP[$0];
      HEAP[$retval] = $165;
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
  function _nsmallest($self, $args) {
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
      var $heap = __stackBase__ + 16;
      var $elem = __stackBase__ + 20;
      var $iterable = __stackBase__ + 24;
      var $los = __stackBase__ + 28;
      var $it = __stackBase__ + 32;
      var $oldelem = __stackBase__ + 36;
      var $i = __stackBase__ + 40;
      var $n = __stackBase__ + 44;
      var $cmp = __stackBase__ + 48;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$heap] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str9, allocate([ $n, 0, 0, 0, $iterable, 0, 0, 0 ], [ "i32*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$iterable];
      var $5 = _PyObject_GetIter($4);
      HEAP[$it] = $5;
      
      
      if (HEAP[$it] == 0) {
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
      var $8 = _PyList_New(0);
      HEAP[$heap] = $8;
      
      
      if (HEAP[$heap] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      HEAP[$i] = 0;
      __label__ = 15;
      break;
     case 6:
      var $11 = HEAP[$it];
      var $12 = _PyIter_Next($11);
      HEAP[$elem] = $12;
      
      
      if (HEAP[$elem] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $15 = _PyErr_Occurred();
      
      if ($15 != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 8:
      var $17 = HEAP[$heap];
      var $18 = HEAP[$elem];
      var $19 = _PyList_Append($17, $18);
      var $20 = $19 == -1;
      if ($20) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      var $24 = HEAP[HEAP[$elem]] - 1;
      
      var $26 = HEAP[$elem];
      HEAP[$26] = $24;
      
      
      
      
      if (HEAP[HEAP[$elem]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $35 = HEAP[HEAP[HEAP[$elem] + 4] + 24];
      var $36 = HEAP[$elem];
      FUNCTION_TABLE[$35]($36);
      __label__ = 11;
      break;
     case 11:
      __label__ = 41;
      break;
     case 12:
      
      
      
      var $40 = HEAP[HEAP[$elem]] - 1;
      
      var $42 = HEAP[$elem];
      HEAP[$42] = $40;
      
      
      
      
      if (HEAP[HEAP[$elem]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $51 = HEAP[HEAP[HEAP[$elem] + 4] + 24];
      var $52 = HEAP[$elem];
      FUNCTION_TABLE[$51]($52);
      __label__ = 14;
      break;
     case 14:
      
      var $54 = HEAP[$i] + 1;
      HEAP[$i] = $54;
      __label__ = 15;
      break;
     case 15:
      
      
      
      if (HEAP[$i] < HEAP[$n]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      var $61 = HEAP[HEAP[$heap] + 8];
      HEAP[$n] = $61;
      
      
      if (HEAP[$n] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      var $66 = (HEAP[$n] / 2 | 0) - 1;
      HEAP[$i] = $66;
      __label__ = 20;
      break;
     case 18:
      
      var $68 = HEAP[$heap];
      var $69 = HEAP[$i];
      var $70 = __siftupmax($68, $69);
      var $71 = $70 == -1;
      if ($71) {
        __label__ = 41;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      var $73 = HEAP[$i] - 1;
      HEAP[$i] = $73;
      __label__ = 20;
      break;
     case 20:
      
      
      if (HEAP[$i] >= 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      var $81 = HEAP[HEAP[HEAP[$heap] + 12]];
      HEAP[$los] = $81;
      __label__ = 22;
      break;
     case 22:
      var $82 = HEAP[$it];
      var $83 = _PyIter_Next($82);
      HEAP[$elem] = $83;
      
      
      if (HEAP[$elem] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      var $86 = _PyErr_Occurred();
      
      if ($86 != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 24:
      var $88 = HEAP[$elem];
      var $89 = HEAP[$los];
      var $90 = _cmp_lt($88, $89);
      HEAP[$cmp] = $90;
      
      var $92 = HEAP[$cmp] == -1;
      if ($92) {
        __label__ = 25;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 25:
      
      
      
      var $96 = HEAP[HEAP[$elem]] - 1;
      
      var $98 = HEAP[$elem];
      HEAP[$98] = $96;
      
      
      
      
      if (HEAP[HEAP[$elem]] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $107 = HEAP[HEAP[HEAP[$elem] + 4] + 24];
      var $108 = HEAP[$elem];
      FUNCTION_TABLE[$107]($108);
      __label__ = 27;
      break;
     case 27:
      __label__ = 41;
      break;
     case 28:
      
      
      if (HEAP[$cmp] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 29:
      
      
      
      var $114 = HEAP[HEAP[$elem]] - 1;
      
      var $116 = HEAP[$elem];
      HEAP[$116] = $114;
      
      
      
      
      if (HEAP[HEAP[$elem]] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $125 = HEAP[HEAP[HEAP[$elem] + 4] + 24];
      var $126 = HEAP[$elem];
      FUNCTION_TABLE[$125]($126);
      __label__ = 31;
      break;
     case 31:
      __label__ = 36;
      break;
     case 32:
      
      
      
      
      
      var $132 = HEAP[HEAP[HEAP[$heap] + 12]];
      HEAP[$oldelem] = $132;
      
      
      
      
      var $137 = HEAP[HEAP[$heap] + 12];
      var $138 = HEAP[$elem];
      HEAP[$137] = $138;
      
      
      
      var $142 = HEAP[HEAP[$oldelem]] - 1;
      
      var $144 = HEAP[$oldelem];
      HEAP[$144] = $142;
      
      
      
      
      if (HEAP[HEAP[$oldelem]] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $153 = HEAP[HEAP[HEAP[$oldelem] + 4] + 24];
      var $154 = HEAP[$oldelem];
      FUNCTION_TABLE[$153]($154);
      __label__ = 34;
      break;
     case 34:
      
      var $156 = HEAP[$heap];
      var $157 = __siftupmax($156, 0);
      var $158 = $157 == -1;
      if ($158) {
        __label__ = 41;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      
      
      var $164 = HEAP[HEAP[HEAP[$heap] + 12]];
      HEAP[$los] = $164;
      __label__ = 36;
      break;
     case 36:
      __label__ = 22;
      break;
     case 37:
      var $165 = HEAP[$heap];
      var $166 = _PyList_Sort($165);
      var $167 = $166 == -1;
      if ($167) {
        __label__ = 41;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      
      
      
      var $171 = HEAP[HEAP[$it]] - 1;
      
      var $173 = HEAP[$it];
      HEAP[$173] = $171;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      var $182 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $183 = HEAP[$it];
      FUNCTION_TABLE[$182]($183);
      __label__ = 40;
      break;
     case 40:
      var $184 = HEAP[$heap];
      HEAP[$0] = $184;
      __label__ = 47;
      break;
     case 41:
      
      
      
      var $188 = HEAP[HEAP[$it]] - 1;
      
      var $190 = HEAP[$it];
      HEAP[$190] = $188;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $199 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $200 = HEAP[$it];
      FUNCTION_TABLE[$199]($200);
      __label__ = 43;
      break;
     case 43:
      
      
      if (HEAP[$heap] != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 44:
      
      
      
      var $206 = HEAP[HEAP[$heap]] - 1;
      
      var $208 = HEAP[$heap];
      HEAP[$208] = $206;
      
      
      
      
      if (HEAP[HEAP[$heap]] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      var $217 = HEAP[HEAP[HEAP[$heap] + 4] + 24];
      var $218 = HEAP[$heap];
      FUNCTION_TABLE[$217]($218);
      __label__ = 46;
      break;
     case 46:
      HEAP[$0] = 0;
      __label__ = 47;
      break;
     case 47:
      var $219 = HEAP[$0];
      HEAP[$retval] = $219;
      __label__ = 48;
      break;
     case 48:
      var $retval45 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval45;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _init_heapq() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      
      var $0 = _Py_InitModule4(__str14, _heapq_methods, _module_doc, 0, 1013);
      HEAP[$m] = $0;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = _PyString_FromString(___about__);
      var $4 = HEAP[$m];
      var $5 = _PyModule_AddObject($4, __str15, $3);
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
  Module["_init_heapq"] = _init_heapq;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _heappush, 0, _heappushpop, 0, _heappop, 0, _heapreplace, 0, _heapify, 0, _nlargest, 0, _nsmallest, 0 ]);
  function run(args) {
    _lt_8258 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str = allocate([ 95, 95, 108, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 104, 101, 97, 112, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 53, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 95, 104, 101, 97, 112, 113, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8285 = allocate([ 95, 115, 105, 102, 116, 100, 111, 119, 110, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 105, 110, 100, 101, 120, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8359 = allocate([ 95, 115, 105, 102, 116, 117, 112, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 104, 101, 97, 112, 112, 117, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 104, 101, 97, 112, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _heappush_doc = allocate([ 80, 117, 115, 104, 32, 105, 116, 101, 109, 32, 111, 110, 116, 111, 32, 104, 101, 97, 112, 44, 32, 109, 97, 105, 110, 116, 97, 105, 110, 105, 110, 103, 32, 116, 104, 101, 32, 104, 101, 97, 112, 32, 105, 110, 118, 97, 114, 105, 97, 110, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    _heappop_doc = allocate([ 80, 111, 112, 32, 116, 104, 101, 32, 115, 109, 97, 108, 108, 101, 115, 116, 32, 105, 116, 101, 109, 32, 111, 102, 102, 32, 116, 104, 101, 32, 104, 101, 97, 112, 44, 32, 109, 97, 105, 110, 116, 97, 105, 110, 105, 110, 103, 32, 116, 104, 101, 32, 104, 101, 97, 112, 32, 105, 110, 118, 97, 114, 105, 97, 110, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 104, 101, 97, 112, 114, 101, 112, 108, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    _heapreplace_doc = allocate([ 80, 111, 112, 32, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 115, 109, 97, 108, 108, 101, 115, 116, 32, 118, 97, 108, 117, 101, 44, 32, 97, 110, 100, 32, 97, 100, 100, 32, 116, 104, 101, 32, 110, 101, 119, 32, 105, 116, 101, 109, 46, 10, 10, 84, 104, 105, 115, 32, 105, 115, 32, 109, 111, 114, 101, 32, 101, 102, 102, 105, 99, 105, 101, 110, 116, 32, 116, 104, 97, 110, 32, 104, 101, 97, 112, 112, 111, 112, 40, 41, 32, 102, 111, 108, 108, 111, 119, 101, 100, 32, 98, 121, 32, 104, 101, 97, 112, 112, 117, 115, 104, 40, 41, 44, 32, 97, 110, 100, 32, 99, 97, 110, 32, 98, 101, 10, 109, 111, 114, 101, 32, 97, 112, 112, 114, 111, 112, 114, 105, 97, 116, 101, 32, 119, 104, 101, 110, 32, 117, 115, 105, 110, 103, 32, 97, 32, 102, 105, 120, 101, 100, 45, 115, 105, 122, 101, 32, 104, 101, 97, 112, 46, 32, 32, 78, 111, 116, 101, 32, 116, 104, 97, 116, 32, 116, 104, 101, 32, 118, 97, 108, 117, 101, 10, 114, 101, 116, 117, 114, 110, 101, 100, 32, 109, 97, 121, 32, 98, 101, 32, 108, 97, 114, 103, 101, 114, 32, 116, 104, 97, 110, 32, 105, 116, 101, 109, 33, 32, 32, 84, 104, 97, 116, 32, 99, 111, 110, 115, 116, 114, 97, 105, 110, 115, 32, 114, 101, 97, 115, 111, 110, 97, 98, 108, 101, 32, 117, 115, 101, 115, 32, 111, 102, 10, 116, 104, 105, 115, 32, 114, 111, 117, 116, 105, 110, 101, 32, 117, 110, 108, 101, 115, 115, 32, 119, 114, 105, 116, 116, 101, 110, 32, 97, 115, 32, 112, 97, 114, 116, 32, 111, 102, 32, 97, 32, 99, 111, 110, 100, 105, 116, 105, 111, 110, 97, 108, 32, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 58, 10, 10, 32, 32, 32, 32, 105, 102, 32, 105, 116, 101, 109, 32, 62, 32, 104, 101, 97, 112, 91, 48, 93, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 116, 101, 109, 32, 61, 32, 104, 101, 97, 112, 114, 101, 112, 108, 97, 99, 101, 40, 104, 101, 97, 112, 44, 32, 105, 116, 101, 109, 41, 10, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 104, 101, 97, 112, 112, 117, 115, 104, 112, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    _heappushpop_doc = allocate([ 80, 117, 115, 104, 32, 105, 116, 101, 109, 32, 111, 110, 32, 116, 104, 101, 32, 104, 101, 97, 112, 44, 32, 116, 104, 101, 110, 32, 112, 111, 112, 32, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 115, 109, 97, 108, 108, 101, 115, 116, 32, 105, 116, 101, 109, 10, 102, 114, 111, 109, 32, 116, 104, 101, 32, 104, 101, 97, 112, 46, 32, 84, 104, 101, 32, 99, 111, 109, 98, 105, 110, 101, 100, 32, 97, 99, 116, 105, 111, 110, 32, 114, 117, 110, 115, 32, 109, 111, 114, 101, 32, 101, 102, 102, 105, 99, 105, 101, 110, 116, 108, 121, 32, 116, 104, 97, 110, 10, 104, 101, 97, 112, 112, 117, 115, 104, 40, 41, 32, 102, 111, 108, 108, 111, 119, 101, 100, 32, 98, 121, 32, 97, 32, 115, 101, 112, 97, 114, 97, 116, 101, 32, 99, 97, 108, 108, 32, 116, 111, 32, 104, 101, 97, 112, 112, 111, 112, 40, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _heapify_doc = allocate([ 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 108, 105, 115, 116, 32, 105, 110, 116, 111, 32, 97, 32, 104, 101, 97, 112, 44, 32, 105, 110, 45, 112, 108, 97, 99, 101, 44, 32, 105, 110, 32, 79, 40, 108, 101, 110, 40, 104, 101, 97, 112, 41, 41, 32, 116, 105, 109, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 110, 79, 58, 110, 108, 97, 114, 103, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _nlargest_doc = allocate([ 70, 105, 110, 100, 32, 116, 104, 101, 32, 110, 32, 108, 97, 114, 103, 101, 115, 116, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 105, 110, 32, 97, 32, 100, 97, 116, 97, 115, 101, 116, 46, 10, 10, 69, 113, 117, 105, 118, 97, 108, 101, 110, 116, 32, 116, 111, 58, 32, 32, 115, 111, 114, 116, 101, 100, 40, 105, 116, 101, 114, 97, 98, 108, 101, 44, 32, 114, 101, 118, 101, 114, 115, 101, 61, 84, 114, 117, 101, 41, 91, 58, 110, 93, 10, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8788 = allocate([ 95, 115, 105, 102, 116, 100, 111, 119, 110, 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8862 = allocate([ 95, 115, 105, 102, 116, 117, 112, 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 110, 79, 58, 110, 115, 109, 97, 108, 108, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _nsmallest_doc = allocate([ 70, 105, 110, 100, 32, 116, 104, 101, 32, 110, 32, 115, 109, 97, 108, 108, 101, 115, 116, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 105, 110, 32, 97, 32, 100, 97, 116, 97, 115, 101, 116, 46, 10, 10, 69, 113, 117, 105, 118, 97, 108, 101, 110, 116, 32, 116, 111, 58, 32, 32, 115, 111, 114, 116, 101, 100, 40, 105, 116, 101, 114, 97, 98, 108, 101, 41, 91, 58, 110, 93, 10, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 104, 101, 97, 112, 112, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 104, 101, 97, 112, 105, 102, 121, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 110, 108, 97, 114, 103, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 110, 115, 109, 97, 108, 108, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _heapq_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_doc = allocate([ 72, 101, 97, 112, 32, 113, 117, 101, 117, 101, 32, 97, 108, 103, 111, 114, 105, 116, 104, 109, 32, 40, 97, 46, 107, 46, 97, 46, 32, 112, 114, 105, 111, 114, 105, 116, 121, 32, 113, 117, 101, 117, 101, 41, 46, 10, 10, 72, 101, 97, 112, 115, 32, 97, 114, 101, 32, 97, 114, 114, 97, 121, 115, 32, 102, 111, 114, 32, 119, 104, 105, 99, 104, 32, 97, 91, 107, 93, 32, 60, 61, 32, 97, 91, 50, 42, 107, 43, 49, 93, 32, 97, 110, 100, 32, 97, 91, 107, 93, 32, 60, 61, 32, 97, 91, 50, 42, 107, 43, 50, 93, 32, 102, 111, 114, 10, 97, 108, 108, 32, 107, 44, 32, 99, 111, 117, 110, 116, 105, 110, 103, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 32, 48, 46, 32, 32, 70, 111, 114, 32, 116, 104, 101, 32, 115, 97, 107, 101, 32, 111, 102, 32, 99, 111, 109, 112, 97, 114, 105, 115, 111, 110, 44, 10, 110, 111, 110, 45, 101, 120, 105, 115, 116, 105, 110, 103, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 97, 114, 101, 32, 99, 111, 110, 115, 105, 100, 101, 114, 101, 100, 32, 116, 111, 32, 98, 101, 32, 105, 110, 102, 105, 110, 105, 116, 101, 46, 32, 32, 84, 104, 101, 32, 105, 110, 116, 101, 114, 101, 115, 116, 105, 110, 103, 10, 112, 114, 111, 112, 101, 114, 116, 121, 32, 111, 102, 32, 97, 32, 104, 101, 97, 112, 32, 105, 115, 32, 116, 104, 97, 116, 32, 97, 91, 48, 93, 32, 105, 115, 32, 97, 108, 119, 97, 121, 115, 32, 105, 116, 115, 32, 115, 109, 97, 108, 108, 101, 115, 116, 32, 101, 108, 101, 109, 101, 110, 116, 46, 10, 10, 85, 115, 97, 103, 101, 58, 10, 10, 104, 101, 97, 112, 32, 61, 32, 91, 93, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 35, 32, 99, 114, 101, 97, 116, 101, 115, 32, 97, 110, 32, 101, 109, 112, 116, 121, 32, 104, 101, 97, 112, 10, 104, 101, 97, 112, 112, 117, 115, 104, 40, 104, 101, 97, 112, 44, 32, 105, 116, 101, 109, 41, 32, 35, 32, 112, 117, 115, 104, 101, 115, 32, 97, 32, 110, 101, 119, 32, 105, 116, 101, 109, 32, 111, 110, 32, 116, 104, 101, 32, 104, 101, 97, 112, 10, 105, 116, 101, 109, 32, 61, 32, 104, 101, 97, 112, 112, 111, 112, 40, 104, 101, 97, 112, 41, 32, 35, 32, 112, 111, 112, 115, 32, 116, 104, 101, 32, 115, 109, 97, 108, 108, 101, 115, 116, 32, 105, 116, 101, 109, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 104, 101, 97, 112, 10, 105, 116, 101, 109, 32, 61, 32, 104, 101, 97, 112, 91, 48, 93, 32, 32, 32, 32, 32, 32, 32, 35, 32, 115, 109, 97, 108, 108, 101, 115, 116, 32, 105, 116, 101, 109, 32, 111, 110, 32, 116, 104, 101, 32, 104, 101, 97, 112, 32, 119, 105, 116, 104, 111, 117, 116, 32, 112, 111, 112, 112, 105, 110, 103, 32, 105, 116, 10, 104, 101, 97, 112, 105, 102, 121, 40, 120, 41, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 35, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 115, 32, 108, 105, 115, 116, 32, 105, 110, 116, 111, 32, 97, 32, 104, 101, 97, 112, 44, 32, 105, 110, 45, 112, 108, 97, 99, 101, 44, 32, 105, 110, 32, 108, 105, 110, 101, 97, 114, 32, 116, 105, 109, 101, 10, 105, 116, 101, 109, 32, 61, 32, 104, 101, 97, 112, 114, 101, 112, 108, 97, 99, 101, 40, 104, 101, 97, 112, 44, 32, 105, 116, 101, 109, 41, 32, 35, 32, 112, 111, 112, 115, 32, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 115, 32, 115, 109, 97, 108, 108, 101, 115, 116, 32, 105, 116, 101, 109, 44, 32, 97, 110, 100, 32, 97, 100, 100, 115, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 35, 32, 110, 101, 119, 32, 105, 116, 101, 109, 59, 32, 116, 104, 101, 32, 104, 101, 97, 112, 32, 115, 105, 122, 101, 32, 105, 115, 32, 117, 110, 99, 104, 97, 110, 103, 101, 100, 10, 10, 79, 117, 114, 32, 65, 80, 73, 32, 100, 105, 102, 102, 101, 114, 115, 32, 102, 114, 111, 109, 32, 116, 101, 120, 116, 98, 111, 111, 107, 32, 104, 101, 97, 112, 32, 97, 108, 103, 111, 114, 105, 116, 104, 109, 115, 32, 97, 115, 32, 102, 111, 108, 108, 111, 119, 115, 58, 10, 10, 45, 32, 87, 101, 32, 117, 115, 101, 32, 48, 45, 98, 97, 115, 101, 100, 32, 105, 110, 100, 101, 120, 105, 110, 103, 46, 32, 32, 84, 104, 105, 115, 32, 109, 97, 107, 101, 115, 32, 116, 104, 101, 32, 114, 101, 108, 97, 116, 105, 111, 110, 115, 104, 105, 112, 32, 98, 101, 116, 119, 101, 101, 110, 32, 116, 104, 101, 10, 32, 32, 105, 110, 100, 101, 120, 32, 102, 111, 114, 32, 97, 32, 110, 111, 100, 101, 32, 97, 110, 100, 32, 116, 104, 101, 32, 105, 110, 100, 101, 120, 101, 115, 32, 102, 111, 114, 32, 105, 116, 115, 32, 99, 104, 105, 108, 100, 114, 101, 110, 32, 115, 108, 105, 103, 104, 116, 108, 121, 32, 108, 101, 115, 115, 10, 32, 32, 111, 98, 118, 105, 111, 117, 115, 44, 32, 98, 117, 116, 32, 105, 115, 32, 109, 111, 114, 101, 32, 115, 117, 105, 116, 97, 98, 108, 101, 32, 115, 105, 110, 99, 101, 32, 80, 121, 116, 104, 111, 110, 32, 117, 115, 101, 115, 32, 48, 45, 98, 97, 115, 101, 100, 32, 105, 110, 100, 101, 120, 105, 110, 103, 46, 10, 10, 45, 32, 79, 117, 114, 32, 104, 101, 97, 112, 112, 111, 112, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 114, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 115, 109, 97, 108, 108, 101, 115, 116, 32, 105, 116, 101, 109, 44, 32, 110, 111, 116, 32, 116, 104, 101, 32, 108, 97, 114, 103, 101, 115, 116, 46, 10, 10, 84, 104, 101, 115, 101, 32, 116, 119, 111, 32, 109, 97, 107, 101, 32, 105, 116, 32, 112, 111, 115, 115, 105, 98, 108, 101, 32, 116, 111, 32, 118, 105, 101, 119, 32, 116, 104, 101, 32, 104, 101, 97, 112, 32, 97, 115, 32, 97, 32, 114, 101, 103, 117, 108, 97, 114, 32, 80, 121, 116, 104, 111, 110, 32, 108, 105, 115, 116, 10, 119, 105, 116, 104, 111, 117, 116, 32, 115, 117, 114, 112, 114, 105, 115, 101, 115, 58, 32, 104, 101, 97, 112, 91, 48, 93, 32, 105, 115, 32, 116, 104, 101, 32, 115, 109, 97, 108, 108, 101, 115, 116, 32, 105, 116, 101, 109, 44, 32, 97, 110, 100, 32, 104, 101, 97, 112, 46, 115, 111, 114, 116, 40, 41, 10, 109, 97, 105, 110, 116, 97, 105, 110, 115, 32, 116, 104, 101, 32, 104, 101, 97, 112, 32, 105, 110, 118, 97, 114, 105, 97, 110, 116, 33, 10, 0 ], "i8", ALLOC_NORMAL);
    ___about__ = allocate([ 72, 101, 97, 112, 32, 113, 117, 101, 117, 101, 115, 10, 10, 91, 101, 120, 112, 108, 97, 110, 97, 116, 105, 111, 110, 32, 98, 121, 32, 70, 114, 97, 110, 231, 111, 105, 115, 32, 80, 105, 110, 97, 114, 100, 93, 10, 10, 72, 101, 97, 112, 115, 32, 97, 114, 101, 32, 97, 114, 114, 97, 121, 115, 32, 102, 111, 114, 32, 119, 104, 105, 99, 104, 32, 97, 91, 107, 93, 32, 60, 61, 32, 97, 91, 50, 42, 107, 43, 49, 93, 32, 97, 110, 100, 32, 97, 91, 107, 93, 32, 60, 61, 32, 97, 91, 50, 42, 107, 43, 50, 93, 32, 102, 111, 114, 10, 97, 108, 108, 32, 107, 44, 32, 99, 111, 117, 110, 116, 105, 110, 103, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 32, 48, 46, 32, 32, 70, 111, 114, 32, 116, 104, 101, 32, 115, 97, 107, 101, 32, 111, 102, 32, 99, 111, 109, 112, 97, 114, 105, 115, 111, 110, 44, 10, 110, 111, 110, 45, 101, 120, 105, 115, 116, 105, 110, 103, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 97, 114, 101, 32, 99, 111, 110, 115, 105, 100, 101, 114, 101, 100, 32, 116, 111, 32, 98, 101, 32, 105, 110, 102, 105, 110, 105, 116, 101, 46, 32, 32, 84, 104, 101, 32, 105, 110, 116, 101, 114, 101, 115, 116, 105, 110, 103, 10, 112, 114, 111, 112, 101, 114, 116, 121, 32, 111, 102, 32, 97, 32, 104, 101, 97, 112, 32, 105, 115, 32, 116, 104, 97, 116, 32, 97, 91, 48, 93, 32, 105, 115, 32, 97, 108, 119, 97, 121, 115, 32, 105, 116, 115, 32, 115, 109, 97, 108, 108, 101, 115, 116, 32, 101, 108, 101, 109, 101, 110, 116, 46, 10, 10, 84, 104, 101, 32, 115, 116, 114, 97, 110, 103, 101, 32, 105, 110, 118, 97, 114, 105, 97, 110, 116, 32, 97, 98, 111, 118, 101, 32, 105, 115, 32, 109, 101, 97, 110, 116, 32, 116, 111, 32, 98, 101, 32, 97, 110, 32, 101, 102, 102, 105, 99, 105, 101, 110, 116, 32, 109, 101, 109, 111, 114, 121, 10, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 102, 111, 114, 32, 97, 32, 116, 111, 117, 114, 110, 97, 109, 101, 110, 116, 46, 32, 32, 84, 104, 101, 32, 110, 117, 109, 98, 101, 114, 115, 32, 98, 101, 108, 111, 119, 32, 97, 114, 101, 32, 96, 107, 39, 44, 32, 110, 111, 116, 32, 97, 91, 107, 93, 58, 10, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 10, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 50, 10, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 51, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 52, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 53, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 10, 10, 32, 32, 32, 32, 32, 32, 55, 32, 32, 32, 32, 32, 32, 32, 56, 32, 32, 32, 32, 32, 32, 32, 57, 32, 32, 32, 32, 32, 32, 32, 49, 48, 32, 32, 32, 32, 32, 32, 49, 49, 32, 32, 32, 32, 32, 32, 49, 50, 32, 32, 32, 32, 32, 32, 49, 51, 32, 32, 32, 32, 32, 32, 49, 52, 10, 10, 32, 32, 32, 32, 49, 53, 32, 49, 54, 32, 32, 32, 49, 55, 32, 49, 56, 32, 32, 32, 49, 57, 32, 50, 48, 32, 32, 32, 50, 49, 32, 50, 50, 32, 32, 32, 50, 51, 32, 50, 52, 32, 32, 32, 50, 53, 32, 50, 54, 32, 32, 32, 50, 55, 32, 50, 56, 32, 32, 32, 50, 57, 32, 51, 48, 10, 10, 10, 73, 110, 32, 116, 104, 101, 32, 116, 114, 101, 101, 32, 97, 98, 111, 118, 101, 44, 32, 101, 97, 99, 104, 32, 99, 101, 108, 108, 32, 96, 107, 39, 32, 105, 115, 32, 116, 111, 112, 112, 105, 110, 103, 32, 96, 50, 42, 107, 43, 49, 39, 32, 97, 110, 100, 32, 96, 50, 42, 107, 43, 50, 39, 46, 32, 32, 73, 110, 10, 97, 110, 32, 117, 115, 117, 97, 108, 32, 98, 105, 110, 97, 114, 121, 32, 116, 111, 117, 114, 110, 97, 109, 101, 110, 116, 32, 119, 101, 32, 115, 101, 101, 32, 105, 110, 32, 115, 112, 111, 114, 116, 115, 44, 32, 101, 97, 99, 104, 32, 99, 101, 108, 108, 32, 105, 115, 32, 116, 104, 101, 32, 119, 105, 110, 110, 101, 114, 10, 111, 118, 101, 114, 32, 116, 104, 101, 32, 116, 119, 111, 32, 99, 101, 108, 108, 115, 32, 105, 116, 32, 116, 111, 112, 115, 44, 32, 97, 110, 100, 32, 119, 101, 32, 99, 97, 110, 32, 116, 114, 97, 99, 101, 32, 116, 104, 101, 32, 119, 105, 110, 110, 101, 114, 32, 100, 111, 119, 110, 32, 116, 104, 101, 32, 116, 114, 101, 101, 10, 116, 111, 32, 115, 101, 101, 32, 97, 108, 108, 32, 111, 112, 112, 111, 110, 101, 110, 116, 115, 32, 115, 47, 104, 101, 32, 104, 97, 100, 46, 32, 32, 72, 111, 119, 101, 118, 101, 114, 44, 32, 105, 110, 32, 109, 97, 110, 121, 32, 99, 111, 109, 112, 117, 116, 101, 114, 32, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 115, 10, 111, 102, 32, 115, 117, 99, 104, 32, 116, 111, 117, 114, 110, 97, 109, 101, 110, 116, 115, 44, 32, 119, 101, 32, 100, 111, 32, 110, 111, 116, 32, 110, 101, 101, 100, 32, 116, 111, 32, 116, 114, 97, 99, 101, 32, 116, 104, 101, 32, 104, 105, 115, 116, 111, 114, 121, 32, 111, 102, 32, 97, 32, 119, 105, 110, 110, 101, 114, 46, 10, 84, 111, 32, 98, 101, 32, 109, 111, 114, 101, 32, 109, 101, 109, 111, 114, 121, 32, 101, 102, 102, 105, 99, 105, 101, 110, 116, 44, 32, 119, 104, 101, 110, 32, 97, 32, 119, 105, 110, 110, 101, 114, 32, 105, 115, 32, 112, 114, 111, 109, 111, 116, 101, 100, 44, 32, 119, 101, 32, 116, 114, 121, 32, 116, 111, 10, 114, 101, 112, 108, 97, 99, 101, 32, 105, 116, 32, 98, 121, 32, 115, 111, 109, 101, 116, 104, 105, 110, 103, 32, 101, 108, 115, 101, 32, 97, 116, 32, 97, 32, 108, 111, 119, 101, 114, 32, 108, 101, 118, 101, 108, 44, 32, 97, 110, 100, 32, 116, 104, 101, 32, 114, 117, 108, 101, 32, 98, 101, 99, 111, 109, 101, 115, 10, 116, 104, 97, 116, 32, 97, 32, 99, 101, 108, 108, 32, 97, 110, 100, 32, 116, 104, 101, 32, 116, 119, 111, 32, 99, 101, 108, 108, 115, 32, 105, 116, 32, 116, 111, 112, 115, 32, 99, 111, 110, 116, 97, 105, 110, 32, 116, 104, 114, 101, 101, 32, 100, 105, 102, 102, 101, 114, 101, 110, 116, 32, 105, 116, 101, 109, 115, 44, 10, 98, 117, 116, 32, 116, 104, 101, 32, 116, 111, 112, 32, 99, 101, 108, 108, 32, 34, 119, 105, 110, 115, 34, 32, 111, 118, 101, 114, 32, 116, 104, 101, 32, 116, 119, 111, 32, 116, 111, 112, 112, 101, 100, 32, 99, 101, 108, 108, 115, 46, 10, 10, 73, 102, 32, 116, 104, 105, 115, 32, 104, 101, 97, 112, 32, 105, 110, 118, 97, 114, 105, 97, 110, 116, 32, 105, 115, 32, 112, 114, 111, 116, 101, 99, 116, 101, 100, 32, 97, 116, 32, 97, 108, 108, 32, 116, 105, 109, 101, 44, 32, 105, 110, 100, 101, 120, 32, 48, 32, 105, 115, 32, 99, 108, 101, 97, 114, 108, 121, 10, 116, 104, 101, 32, 111, 118, 101, 114, 97, 108, 108, 32, 119, 105, 110, 110, 101, 114, 46, 32, 32, 84, 104, 101, 32, 115, 105, 109, 112, 108, 101, 115, 116, 32, 97, 108, 103, 111, 114, 105, 116, 104, 109, 105, 99, 32, 119, 97, 121, 32, 116, 111, 32, 114, 101, 109, 111, 118, 101, 32, 105, 116, 32, 97, 110, 100, 10, 102, 105, 110, 100, 32, 116, 104, 101, 32, 34, 110, 101, 120, 116, 34, 32, 119, 105, 110, 110, 101, 114, 32, 105, 115, 32, 116, 111, 32, 109, 111, 118, 101, 32, 115, 111, 109, 101, 32, 108, 111, 115, 101, 114, 32, 40, 108, 101, 116, 39, 115, 32, 115, 97, 121, 32, 99, 101, 108, 108, 32, 51, 48, 32, 105, 110, 32, 116, 104, 101, 10, 100, 105, 97, 103, 114, 97, 109, 32, 97, 98, 111, 118, 101, 41, 32, 105, 110, 116, 111, 32, 116, 104, 101, 32, 48, 32, 112, 111, 115, 105, 116, 105, 111, 110, 44, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 112, 101, 114, 99, 111, 108, 97, 116, 101, 32, 116, 104, 105, 115, 32, 110, 101, 119, 32, 48, 32, 100, 111, 119, 110, 10, 116, 104, 101, 32, 116, 114, 101, 101, 44, 32, 101, 120, 99, 104, 97, 110, 103, 105, 110, 103, 32, 118, 97, 108, 117, 101, 115, 44, 32, 117, 110, 116, 105, 108, 32, 116, 104, 101, 32, 105, 110, 118, 97, 114, 105, 97, 110, 116, 32, 105, 115, 32, 114, 101, 45, 101, 115, 116, 97, 98, 108, 105, 115, 104, 101, 100, 46, 10, 84, 104, 105, 115, 32, 105, 115, 32, 99, 108, 101, 97, 114, 108, 121, 32, 108, 111, 103, 97, 114, 105, 116, 104, 109, 105, 99, 32, 111, 110, 32, 116, 104, 101, 32, 116, 111, 116, 97, 108, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 105, 116, 101, 109, 115, 32, 105, 110, 32, 116, 104, 101, 32, 116, 114, 101, 101, 46, 10, 66, 121, 32, 105, 116, 101, 114, 97, 116, 105, 110, 103, 32, 111, 118, 101, 114, 32, 97, 108, 108, 32, 105, 116, 101, 109, 115, 44, 32, 121, 111, 117, 32, 103, 101, 116, 32, 97, 110, 32, 79, 40, 110, 32, 108, 110, 32, 110, 41, 32, 115, 111, 114, 116, 46, 10, 10, 65, 32, 110, 105, 99, 101, 32, 102, 101, 97, 116, 117, 114, 101, 32, 111, 102, 32, 116, 104, 105, 115, 32, 115, 111, 114, 116, 32, 105, 115, 32, 116, 104, 97, 116, 32, 121, 111, 117, 32, 99, 97, 110, 32, 101, 102, 102, 105, 99, 105, 101, 110, 116, 108, 121, 32, 105, 110, 115, 101, 114, 116, 32, 110, 101, 119, 10, 105, 116, 101, 109, 115, 32, 119, 104, 105, 108, 101, 32, 116, 104, 101, 32, 115, 111, 114, 116, 32, 105, 115, 32, 103, 111, 105, 110, 103, 32, 111, 110, 44, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 116, 104, 97, 116, 32, 116, 104, 101, 32, 105, 110, 115, 101, 114, 116, 101, 100, 32, 105, 116, 101, 109, 115, 32, 97, 114, 101, 10, 110, 111, 116, 32, 34, 98, 101, 116, 116, 101, 114, 34, 32, 116, 104, 97, 110, 32, 116, 104, 101, 32, 108, 97, 115, 116, 32, 48, 39, 116, 104, 32, 101, 108, 101, 109, 101, 110, 116, 32, 121, 111, 117, 32, 101, 120, 116, 114, 97, 99, 116, 101, 100, 46, 32, 32, 84, 104, 105, 115, 32, 105, 115, 10, 101, 115, 112, 101, 99, 105, 97, 108, 108, 121, 32, 117, 115, 101, 102, 117, 108, 32, 105, 110, 32, 115, 105, 109, 117, 108, 97, 116, 105, 111, 110, 32, 99, 111, 110, 116, 101, 120, 116, 115, 44, 32, 119, 104, 101, 114, 101, 32, 116, 104, 101, 32, 116, 114, 101, 101, 32, 104, 111, 108, 100, 115, 32, 97, 108, 108, 10, 105, 110, 99, 111, 109, 105, 110, 103, 32, 101, 118, 101, 110, 116, 115, 44, 32, 97, 110, 100, 32, 116, 104, 101, 32, 34, 119, 105, 110, 34, 32, 99, 111, 110, 100, 105, 116, 105, 111, 110, 32, 109, 101, 97, 110, 115, 32, 116, 104, 101, 32, 115, 109, 97, 108, 108, 101, 115, 116, 32, 115, 99, 104, 101, 100, 117, 108, 101, 100, 10, 116, 105, 109, 101, 46, 32, 32, 87, 104, 101, 110, 32, 97, 110, 32, 101, 118, 101, 110, 116, 32, 115, 99, 104, 101, 100, 117, 108, 101, 32, 111, 116, 104, 101, 114, 32, 101, 118, 101, 110, 116, 115, 32, 102, 111, 114, 32, 101, 120, 101, 99, 117, 116, 105, 111, 110, 44, 32, 116, 104, 101, 121, 32, 97, 114, 101, 10, 115, 99, 104, 101, 100, 117, 108, 101, 100, 32, 105, 110, 116, 111, 32, 116, 104, 101, 32, 102, 117, 116, 117, 114, 101, 44, 32, 115, 111, 32, 116, 104, 101, 121, 32, 99, 97, 110, 32, 101, 97, 115, 105, 108, 121, 32, 103, 111, 32, 105, 110, 116, 111, 32, 116, 104, 101, 32, 104, 101, 97, 112, 46, 32, 32, 83, 111, 44, 32, 97, 10, 104, 101, 97, 112, 32, 105, 115, 32, 97, 32, 103, 111, 111, 100, 32, 115, 116, 114, 117, 99, 116, 117, 114, 101, 32, 102, 111, 114, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 105, 110, 103, 32, 115, 99, 104, 101, 100, 117, 108, 101, 114, 115, 32, 40, 116, 104, 105, 115, 32, 105, 115, 32, 119, 104, 97, 116, 32, 73, 10, 117, 115, 101, 100, 32, 102, 111, 114, 32, 109, 121, 32, 77, 73, 68, 73, 32, 115, 101, 113, 117, 101, 110, 99, 101, 114, 32, 58, 45, 41, 46, 10, 10, 86, 97, 114, 105, 111, 117, 115, 32, 115, 116, 114, 117, 99, 116, 117, 114, 101, 115, 32, 102, 111, 114, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 105, 110, 103, 32, 115, 99, 104, 101, 100, 117, 108, 101, 114, 115, 32, 104, 97, 118, 101, 32, 98, 101, 101, 110, 32, 101, 120, 116, 101, 110, 115, 105, 118, 101, 108, 121, 10, 115, 116, 117, 100, 105, 101, 100, 44, 32, 97, 110, 100, 32, 104, 101, 97, 112, 115, 32, 97, 114, 101, 32, 103, 111, 111, 100, 32, 102, 111, 114, 32, 116, 104, 105, 115, 44, 32, 97, 115, 32, 116, 104, 101, 121, 32, 97, 114, 101, 32, 114, 101, 97, 115, 111, 110, 97, 98, 108, 121, 32, 115, 112, 101, 101, 100, 121, 44, 10, 116, 104, 101, 32, 115, 112, 101, 101, 100, 32, 105, 115, 32, 97, 108, 109, 111, 115, 116, 32, 99, 111, 110, 115, 116, 97, 110, 116, 44, 32, 97, 110, 100, 32, 116, 104, 101, 32, 119, 111, 114, 115, 116, 32, 99, 97, 115, 101, 32, 105, 115, 32, 110, 111, 116, 32, 109, 117, 99, 104, 32, 100, 105, 102, 102, 101, 114, 101, 110, 116, 10, 116, 104, 97, 110, 32, 116, 104, 101, 32, 97, 118, 101, 114, 97, 103, 101, 32, 99, 97, 115, 101, 46, 32, 32, 72, 111, 119, 101, 118, 101, 114, 44, 32, 116, 104, 101, 114, 101, 32, 97, 114, 101, 32, 111, 116, 104, 101, 114, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 115, 32, 119, 104, 105, 99, 104, 10, 97, 114, 101, 32, 109, 111, 114, 101, 32, 101, 102, 102, 105, 99, 105, 101, 110, 116, 32, 111, 118, 101, 114, 97, 108, 108, 44, 32, 121, 101, 116, 32, 116, 104, 101, 32, 119, 111, 114, 115, 116, 32, 99, 97, 115, 101, 115, 32, 109, 105, 103, 104, 116, 32, 98, 101, 32, 116, 101, 114, 114, 105, 98, 108, 101, 46, 10, 10, 72, 101, 97, 112, 115, 32, 97, 114, 101, 32, 97, 108, 115, 111, 32, 118, 101, 114, 121, 32, 117, 115, 101, 102, 117, 108, 32, 105, 110, 32, 98, 105, 103, 32, 100, 105, 115, 107, 32, 115, 111, 114, 116, 115, 46, 32, 32, 89, 111, 117, 32, 109, 111, 115, 116, 32, 112, 114, 111, 98, 97, 98, 108, 121, 32, 97, 108, 108, 10, 107, 110, 111, 119, 32, 116, 104, 97, 116, 32, 97, 32, 98, 105, 103, 32, 115, 111, 114, 116, 32, 105, 109, 112, 108, 105, 101, 115, 32, 112, 114, 111, 100, 117, 99, 105, 110, 103, 32, 34, 114, 117, 110, 115, 34, 32, 40, 119, 104, 105, 99, 104, 32, 97, 114, 101, 32, 112, 114, 101, 45, 115, 111, 114, 116, 101, 100, 10, 115, 101, 113, 117, 101, 110, 99, 101, 115, 44, 32, 119, 104, 105, 99, 104, 32, 115, 105, 122, 101, 32, 105, 115, 32, 117, 115, 117, 97, 108, 108, 121, 32, 114, 101, 108, 97, 116, 101, 100, 32, 116, 111, 32, 116, 104, 101, 32, 97, 109, 111, 117, 110, 116, 32, 111, 102, 32, 67, 80, 85, 32, 109, 101, 109, 111, 114, 121, 41, 44, 10, 102, 111, 108, 108, 111, 119, 101, 100, 32, 98, 121, 32, 97, 32, 109, 101, 114, 103, 105, 110, 103, 32, 112, 97, 115, 115, 101, 115, 32, 102, 111, 114, 32, 116, 104, 101, 115, 101, 32, 114, 117, 110, 115, 44, 32, 119, 104, 105, 99, 104, 32, 109, 101, 114, 103, 105, 110, 103, 32, 105, 115, 32, 111, 102, 116, 101, 110, 10, 118, 101, 114, 121, 32, 99, 108, 101, 118, 101, 114, 108, 121, 32, 111, 114, 103, 97, 110, 105, 115, 101, 100, 91, 49, 93, 46, 32, 32, 73, 116, 32, 105, 115, 32, 118, 101, 114, 121, 32, 105, 109, 112, 111, 114, 116, 97, 110, 116, 32, 116, 104, 97, 116, 32, 116, 104, 101, 32, 105, 110, 105, 116, 105, 97, 108, 10, 115, 111, 114, 116, 32, 112, 114, 111, 100, 117, 99, 101, 115, 32, 116, 104, 101, 32, 108, 111, 110, 103, 101, 115, 116, 32, 114, 117, 110, 115, 32, 112, 111, 115, 115, 105, 98, 108, 101, 46, 32, 32, 84, 111, 117, 114, 110, 97, 109, 101, 110, 116, 115, 32, 97, 114, 101, 32, 97, 32, 103, 111, 111, 100, 32, 119, 97, 121, 10, 116, 111, 32, 116, 104, 97, 116, 46, 32, 32, 73, 102, 44, 32, 117, 115, 105, 110, 103, 32, 97, 108, 108, 32, 116, 104, 101, 32, 109, 101, 109, 111, 114, 121, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 116, 111, 32, 104, 111, 108, 100, 32, 97, 32, 116, 111, 117, 114, 110, 97, 109, 101, 110, 116, 44, 32, 121, 111, 117, 10, 114, 101, 112, 108, 97, 99, 101, 32, 97, 110, 100, 32, 112, 101, 114, 99, 111, 108, 97, 116, 101, 32, 105, 116, 101, 109, 115, 32, 116, 104, 97, 116, 32, 104, 97, 112, 112, 101, 110, 32, 116, 111, 32, 102, 105, 116, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 114, 117, 110, 44, 32, 121, 111, 117, 39, 108, 108, 10, 112, 114, 111, 100, 117, 99, 101, 32, 114, 117, 110, 115, 32, 119, 104, 105, 99, 104, 32, 97, 114, 101, 32, 116, 119, 105, 99, 101, 32, 116, 104, 101, 32, 115, 105, 122, 101, 32, 111, 102, 32, 116, 104, 101, 32, 109, 101, 109, 111, 114, 121, 32, 102, 111, 114, 32, 114, 97, 110, 100, 111, 109, 32, 105, 110, 112, 117, 116, 44, 10, 97, 110, 100, 32, 109, 117, 99, 104, 32, 98, 101, 116, 116, 101, 114, 32, 102, 111, 114, 32, 105, 110, 112, 117, 116, 32, 102, 117, 122, 122, 105, 108, 121, 32, 111, 114, 100, 101, 114, 101, 100, 46, 10, 10, 77, 111, 114, 101, 111, 118, 101, 114, 44, 32, 105, 102, 32, 121, 111, 117, 32, 111, 117, 116, 112, 117, 116, 32, 116, 104, 101, 32, 48, 39, 116, 104, 32, 105, 116, 101, 109, 32, 111, 110, 32, 100, 105, 115, 107, 32, 97, 110, 100, 32, 103, 101, 116, 32, 97, 110, 32, 105, 110, 112, 117, 116, 32, 119, 104, 105, 99, 104, 10, 109, 97, 121, 32, 110, 111, 116, 32, 102, 105, 116, 32, 105, 110, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 111, 117, 114, 110, 97, 109, 101, 110, 116, 32, 40, 98, 101, 99, 97, 117, 115, 101, 32, 116, 104, 101, 32, 118, 97, 108, 117, 101, 32, 34, 119, 105, 110, 115, 34, 32, 111, 118, 101, 114, 10, 116, 104, 101, 32, 108, 97, 115, 116, 32, 111, 117, 116, 112, 117, 116, 32, 118, 97, 108, 117, 101, 41, 44, 32, 105, 116, 32, 99, 97, 110, 110, 111, 116, 32, 102, 105, 116, 32, 105, 110, 32, 116, 104, 101, 32, 104, 101, 97, 112, 44, 32, 115, 111, 32, 116, 104, 101, 32, 115, 105, 122, 101, 32, 111, 102, 32, 116, 104, 101, 10, 104, 101, 97, 112, 32, 100, 101, 99, 114, 101, 97, 115, 101, 115, 46, 32, 32, 84, 104, 101, 32, 102, 114, 101, 101, 100, 32, 109, 101, 109, 111, 114, 121, 32, 99, 111, 117, 108, 100, 32, 98, 101, 32, 99, 108, 101, 118, 101, 114, 108, 121, 32, 114, 101, 117, 115, 101, 100, 32, 105, 109, 109, 101, 100, 105, 97, 116, 101, 108, 121, 10, 102, 111, 114, 32, 112, 114, 111, 103, 114, 101, 115, 115, 105, 118, 101, 108, 121, 32, 98, 117, 105, 108, 100, 105, 110, 103, 32, 97, 32, 115, 101, 99, 111, 110, 100, 32, 104, 101, 97, 112, 44, 32, 119, 104, 105, 99, 104, 32, 103, 114, 111, 119, 115, 32, 97, 116, 32, 101, 120, 97, 99, 116, 108, 121, 32, 116, 104, 101, 10, 115, 97, 109, 101, 32, 114, 97, 116, 101, 32, 116, 104, 101, 32, 102, 105, 114, 115, 116, 32, 104, 101, 97, 112, 32, 105, 115, 32, 109, 101, 108, 116, 105, 110, 103, 46, 32, 32, 87, 104, 101, 110, 32, 116, 104, 101, 32, 102, 105, 114, 115, 116, 32, 104, 101, 97, 112, 32, 99, 111, 109, 112, 108, 101, 116, 101, 108, 121, 10, 118, 97, 110, 105, 115, 104, 101, 115, 44, 32, 121, 111, 117, 32, 115, 119, 105, 116, 99, 104, 32, 104, 101, 97, 112, 115, 32, 97, 110, 100, 32, 115, 116, 97, 114, 116, 32, 97, 32, 110, 101, 119, 32, 114, 117, 110, 46, 32, 32, 67, 108, 101, 118, 101, 114, 32, 97, 110, 100, 32, 113, 117, 105, 116, 101, 10, 101, 102, 102, 101, 99, 116, 105, 118, 101, 33, 10, 10, 73, 110, 32, 97, 32, 119, 111, 114, 100, 44, 32, 104, 101, 97, 112, 115, 32, 97, 114, 101, 32, 117, 115, 101, 102, 117, 108, 32, 109, 101, 109, 111, 114, 121, 32, 115, 116, 114, 117, 99, 116, 117, 114, 101, 115, 32, 116, 111, 32, 107, 110, 111, 119, 46, 32, 32, 73, 32, 117, 115, 101, 32, 116, 104, 101, 109, 32, 105, 110, 10, 97, 32, 102, 101, 119, 32, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 115, 44, 32, 97, 110, 100, 32, 73, 32, 116, 104, 105, 110, 107, 32, 105, 116, 32, 105, 115, 32, 103, 111, 111, 100, 32, 116, 111, 32, 107, 101, 101, 112, 32, 97, 32, 96, 104, 101, 97, 112, 39, 32, 109, 111, 100, 117, 108, 101, 10, 97, 114, 111, 117, 110, 100, 46, 32, 58, 45, 41, 10, 10, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 10, 91, 49, 93, 32, 84, 104, 101, 32, 100, 105, 115, 107, 32, 98, 97, 108, 97, 110, 99, 105, 110, 103, 32, 97, 108, 103, 111, 114, 105, 116, 104, 109, 115, 32, 119, 104, 105, 99, 104, 32, 97, 114, 101, 32, 99, 117, 114, 114, 101, 110, 116, 44, 32, 110, 111, 119, 97, 100, 97, 121, 115, 44, 32, 97, 114, 101, 10, 109, 111, 114, 101, 32, 97, 110, 110, 111, 121, 105, 110, 103, 32, 116, 104, 97, 110, 32, 99, 108, 101, 118, 101, 114, 44, 32, 97, 110, 100, 32, 116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 99, 111, 110, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 102, 32, 116, 104, 101, 32, 115, 101, 101, 107, 105, 110, 103, 10, 99, 97, 112, 97, 98, 105, 108, 105, 116, 105, 101, 115, 32, 111, 102, 32, 116, 104, 101, 32, 100, 105, 115, 107, 115, 46, 32, 32, 79, 110, 32, 100, 101, 118, 105, 99, 101, 115, 32, 119, 104, 105, 99, 104, 32, 99, 97, 110, 110, 111, 116, 32, 115, 101, 101, 107, 44, 32, 108, 105, 107, 101, 32, 98, 105, 103, 10, 116, 97, 112, 101, 32, 100, 114, 105, 118, 101, 115, 44, 32, 116, 104, 101, 32, 115, 116, 111, 114, 121, 32, 119, 97, 115, 32, 113, 117, 105, 116, 101, 32, 100, 105, 102, 102, 101, 114, 101, 110, 116, 44, 32, 97, 110, 100, 32, 111, 110, 101, 32, 104, 97, 100, 32, 116, 111, 32, 98, 101, 32, 118, 101, 114, 121, 10, 99, 108, 101, 118, 101, 114, 32, 116, 111, 32, 101, 110, 115, 117, 114, 101, 32, 40, 102, 97, 114, 32, 105, 110, 32, 97, 100, 118, 97, 110, 99, 101, 41, 32, 116, 104, 97, 116, 32, 101, 97, 99, 104, 32, 116, 97, 112, 101, 32, 109, 111, 118, 101, 109, 101, 110, 116, 32, 119, 105, 108, 108, 32, 98, 101, 32, 116, 104, 101, 10, 109, 111, 115, 116, 32, 101, 102, 102, 101, 99, 116, 105, 118, 101, 32, 112, 111, 115, 115, 105, 98, 108, 101, 32, 40, 116, 104, 97, 116, 32, 105, 115, 44, 32, 119, 105, 108, 108, 32, 98, 101, 115, 116, 32, 112, 97, 114, 116, 105, 99, 105, 112, 97, 116, 101, 32, 97, 116, 10, 34, 112, 114, 111, 103, 114, 101, 115, 115, 105, 110, 103, 34, 32, 116, 104, 101, 32, 109, 101, 114, 103, 101, 41, 46, 32, 32, 83, 111, 109, 101, 32, 116, 97, 112, 101, 115, 32, 119, 101, 114, 101, 32, 101, 118, 101, 110, 32, 97, 98, 108, 101, 32, 116, 111, 32, 114, 101, 97, 100, 10, 98, 97, 99, 107, 119, 97, 114, 100, 115, 44, 32, 97, 110, 100, 32, 116, 104, 105, 115, 32, 119, 97, 115, 32, 97, 108, 115, 111, 32, 117, 115, 101, 100, 32, 116, 111, 32, 97, 118, 111, 105, 100, 32, 116, 104, 101, 32, 114, 101, 119, 105, 110, 100, 105, 110, 103, 32, 116, 105, 109, 101, 46, 10, 66, 101, 108, 105, 101, 118, 101, 32, 109, 101, 44, 32, 114, 101, 97, 108, 32, 103, 111, 111, 100, 32, 116, 97, 112, 101, 32, 115, 111, 114, 116, 115, 32, 119, 101, 114, 101, 32, 113, 117, 105, 116, 101, 32, 115, 112, 101, 99, 116, 97, 99, 117, 108, 97, 114, 32, 116, 111, 32, 119, 97, 116, 99, 104, 33, 10, 70, 114, 111, 109, 32, 97, 108, 108, 32, 116, 105, 109, 101, 115, 44, 32, 115, 111, 114, 116, 105, 110, 103, 32, 104, 97, 115, 32, 97, 108, 119, 97, 121, 115, 32, 98, 101, 101, 110, 32, 97, 32, 71, 114, 101, 97, 116, 32, 65, 114, 116, 33, 32, 58, 45, 41, 10, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 95, 104, 101, 97, 112, 113, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 95, 95, 97, 98, 111, 117, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_heapq_methods] = __str4;
    HEAP[_heapq_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_heapq_methods + 12] = _heappush_doc;
    HEAP[_heapq_methods + 16] = __str7;
    HEAP[_heapq_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_heapq_methods + 28] = _heappushpop_doc;
    HEAP[_heapq_methods + 32] = __str10;
    HEAP[_heapq_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_heapq_methods + 44] = _heappop_doc;
    HEAP[_heapq_methods + 48] = __str6;
    HEAP[_heapq_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_heapq_methods + 60] = _heapreplace_doc;
    HEAP[_heapq_methods + 64] = __str11;
    HEAP[_heapq_methods + 68] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_heapq_methods + 76] = _heapify_doc;
    HEAP[_heapq_methods + 80] = __str12;
    HEAP[_heapq_methods + 84] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_heapq_methods + 92] = _nlargest_doc;
    HEAP[_heapq_methods + 96] = __str13;
    HEAP[_heapq_methods + 100] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_heapq_methods + 108] = _nsmallest_doc;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
