"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 352;
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
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _strop_module__doc__;
  var _splitfields__doc__;
  var __str;
  var __str1;
  var __str2;
  var _joinfields__doc__;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var __str7;
  var _find__doc__;
  var __str8;
  var _rfind__doc__;
  var __str9;
  var _strip__doc__;
  var _lstrip__doc__;
  var _rstrip__doc__;
  var _lower__doc__;
  var _upper__doc__;
  var _capitalize__doc__;
  var _expandtabs__doc__;
  var __str10;
  var __str11;
  var __str12;
  var _count__doc__;
  var __str13;
  var _swapcase__doc__;
  var _atoi__doc__;
  var __str14;
  var __str15;
  var __str16;
  var __str17;
  var _atol__doc__;
  var __str18;
  var __str19;
  var __str20;
  var __str21;
  var _atof__doc__;
  var __str22;
  var __str23;
  var __str24;
  var _maketrans__doc__;
  var __str25;
  var __str26;
  var _translate__doc__;
  var __str27;
  var __str28;
  var __str29;
  var __str30;
  var ___PRETTY_FUNCTION___9840;
  var _replace__doc__;
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
  var _strop_methods;
  var __str54;
  var __str55;
  var __str56;
  var __str57;
  function _split_whitespace($s, $len, $maxsplit) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $len_addr = __stackBase__ + 4;
      var $maxsplit_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $j = __stackBase__ + 24;
      var $err = __stackBase__ + 28;
      var $countsplit = __stackBase__ + 32;
      var $item = __stackBase__ + 36;
      var $list = __stackBase__ + 40;
      
      HEAP[$s_addr] = $s;
      HEAP[$len_addr] = $len;
      HEAP[$maxsplit_addr] = $maxsplit;
      HEAP[$i] = 0;
      HEAP[$countsplit] = 0;
      var $1 = _PyList_New(0);
      HEAP[$list] = $1;
      
      
      if (HEAP[$list] == 0) {
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
      __label__ = 28;
      break;
     case 3:
      __label__ = 5;
      break;
     case 4:
      
      var $5 = HEAP[$i] + 1;
      HEAP[$i] = $5;
      __label__ = 5;
      break;
     case 5:
      
      
      
      if (HEAP[$i] >= HEAP[$len_addr]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $9 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$9] + 2 * HEAP[HEAP[$s_addr] + HEAP[$i]]] & 8192) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $21 = HEAP[$i];
      HEAP[$j] = $21;
      __label__ = 9;
      break;
     case 8:
      
      var $23 = HEAP[$i] + 1;
      HEAP[$i] = $23;
      __label__ = 9;
      break;
     case 9:
      
      
      
      if (HEAP[$i] >= HEAP[$len_addr]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      var $27 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$27] + 2 * HEAP[HEAP[$s_addr] + HEAP[$i]]] & 8192) == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      if (HEAP[$j] < HEAP[$i]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 12:
      
      
      var $44 = HEAP[$i] - HEAP[$j];
      
      
      var $47 = HEAP[$s_addr] + HEAP[$j];
      var $48 = _PyString_FromStringAndSize($47, $44);
      HEAP[$item] = $48;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $51 = HEAP[$list];
      var $52 = HEAP[$item];
      var $53 = _PyList_Append($51, $52);
      HEAP[$err] = $53;
      
      
      
      var $57 = HEAP[HEAP[$item]] - 1;
      
      var $59 = HEAP[$item];
      HEAP[$59] = $57;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $68 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $69 = HEAP[$item];
      FUNCTION_TABLE[$68]($69);
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$err] < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      var $73 = HEAP[$countsplit] + 1;
      HEAP[$countsplit] = $73;
      __label__ = 18;
      break;
     case 17:
      
      var $75 = HEAP[$i] + 1;
      HEAP[$i] = $75;
      __label__ = 18;
      break;
     case 18:
      
      
      
      if (HEAP[$i] >= HEAP[$len_addr]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      var $79 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$79] + 2 * HEAP[HEAP[$s_addr] + HEAP[$i]]] & 8192) != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      if (HEAP[$maxsplit_addr] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 21:
      
      
      
      if (HEAP[$countsplit] >= HEAP[$maxsplit_addr]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 22:
      
      
      
      if (HEAP[$i] < HEAP[$len_addr]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 23:
      
      
      var $101 = HEAP[$len_addr] - HEAP[$i];
      
      
      var $104 = HEAP[$s_addr] + HEAP[$i];
      var $105 = _PyString_FromStringAndSize($104, $101);
      HEAP[$item] = $105;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      var $108 = HEAP[$list];
      var $109 = HEAP[$item];
      var $110 = _PyList_Append($108, $109);
      HEAP[$err] = $110;
      
      
      
      var $114 = HEAP[HEAP[$item]] - 1;
      
      var $116 = HEAP[$item];
      HEAP[$116] = $114;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $125 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $126 = HEAP[$item];
      FUNCTION_TABLE[$125]($126);
      __label__ = 26;
      break;
     case 26:
      
      
      if (HEAP[$err] < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      var $129 = HEAP[$len_addr];
      HEAP[$i] = $129;
      __label__ = 28;
      break;
     case 28:
      
      
      
      if (HEAP[$i] < HEAP[$len_addr]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      var $133 = HEAP[$list];
      HEAP[$0] = $133;
      __label__ = 33;
      break;
     case 30:
      
      
      
      var $137 = HEAP[HEAP[$list]] - 1;
      
      var $139 = HEAP[$list];
      HEAP[$139] = $137;
      
      
      
      
      if (HEAP[HEAP[$list]] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $148 = HEAP[HEAP[HEAP[$list] + 4] + 24];
      var $149 = HEAP[$list];
      FUNCTION_TABLE[$148]($149);
      __label__ = 32;
      break;
     case 32:
      HEAP[$0] = 0;
      __label__ = 33;
      break;
     case 33:
      var $150 = HEAP[$0];
      HEAP[$retval] = $150;
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
  function _strop_splitfields($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 60;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $len = __stackBase__ + 16;
      var $n = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      var $j = __stackBase__ + 28;
      var $err = __stackBase__ + 32;
      var $splitcount = __stackBase__ + 36;
      var $maxsplit = __stackBase__ + 40;
      var $s = __stackBase__ + 44;
      var $sub = __stackBase__ + 48;
      var $list = __stackBase__ + 52;
      var $item = __stackBase__ + 56;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      HEAP[$sub] = 0;
      HEAP[$n] = 0;
      HEAP[$splitcount] = 0;
      HEAP[$maxsplit] = 0;
      var $4 = HEAP[$args_addr];
      var $5 = __PyArg_ParseTuple_SizeT($4, __str1, allocate([ $s, 0, 0, 0, $len, 0, 0, 0, $sub, 0, 0, 0, $n, 0, 0, 0, $maxsplit, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 4:
      
      
      if (HEAP[$sub] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $9 = HEAP[$maxsplit];
      var $10 = HEAP[$len];
      var $11 = HEAP[$s];
      var $12 = _split_whitespace($11, $10, $9);
      HEAP[$0] = $12;
      __label__ = 31;
      break;
     case 6:
      
      
      if (HEAP[$n] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $15 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($15, __str2);
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 8:
      var $16 = _PyList_New(0);
      HEAP[$list] = $16;
      
      
      if (HEAP[$list] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 10:
      HEAP[$j] = 0;
      var $19 = HEAP[$j];
      HEAP[$i] = $19;
      __label__ = 22;
      break;
     case 11:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$s] + HEAP[$i]] != HEAP[HEAP[$sub]]) {
        __label__ = 21;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if (HEAP[$n] == 1) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $30 = HEAP[$n];
      var $31 = HEAP[$sub];
      
      
      var $34 = HEAP[$s] + HEAP[$i];
      var $35 = _memcmp($34, $31, $30);
      
      if ($35 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 14:
      
      
      var $39 = HEAP[$i] - HEAP[$j];
      
      
      var $42 = HEAP[$s] + HEAP[$j];
      var $43 = _PyString_FromStringAndSize($42, $39);
      HEAP[$item] = $43;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $46 = HEAP[$list];
      var $47 = HEAP[$item];
      var $48 = _PyList_Append($46, $47);
      HEAP[$err] = $48;
      
      
      
      var $52 = HEAP[HEAP[$item]] - 1;
      
      var $54 = HEAP[$item];
      HEAP[$54] = $52;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $63 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $64 = HEAP[$item];
      FUNCTION_TABLE[$63]($64);
      __label__ = 17;
      break;
     case 17:
      
      
      if (HEAP[$err] < 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      var $69 = HEAP[$i] + HEAP[$n];
      HEAP[$j] = $69;
      var $70 = HEAP[$j];
      HEAP[$i] = $70;
      
      var $72 = HEAP[$splitcount] + 1;
      HEAP[$splitcount] = $72;
      
      
      if (HEAP[$maxsplit] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      if (HEAP[$splitcount] >= HEAP[$maxsplit]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      __label__ = 22;
      break;
     case 21:
      
      var $79 = HEAP[$i] + 1;
      HEAP[$i] = $79;
      __label__ = 22;
      break;
     case 22:
      
      
      
      
      
      if (HEAP[$i] + HEAP[$n] <= HEAP[$len]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      var $87 = HEAP[$len] - HEAP[$j];
      
      
      var $90 = HEAP[$s] + HEAP[$j];
      var $91 = _PyString_FromStringAndSize($90, $87);
      HEAP[$item] = $91;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      var $94 = HEAP[$list];
      var $95 = HEAP[$item];
      var $96 = _PyList_Append($94, $95);
      HEAP[$err] = $96;
      
      
      
      var $100 = HEAP[HEAP[$item]] - 1;
      
      var $102 = HEAP[$item];
      HEAP[$102] = $100;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $111 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $112 = HEAP[$item];
      FUNCTION_TABLE[$111]($112);
      __label__ = 26;
      break;
     case 26:
      
      
      if (HEAP[$err] < 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      var $115 = HEAP[$list];
      HEAP[$0] = $115;
      __label__ = 31;
      break;
     case 28:
      
      
      
      var $119 = HEAP[HEAP[$list]] - 1;
      
      var $121 = HEAP[$list];
      HEAP[$121] = $119;
      
      
      
      
      if (HEAP[HEAP[$list]] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $130 = HEAP[HEAP[HEAP[$list] + 4] + 24];
      var $131 = HEAP[$list];
      FUNCTION_TABLE[$130]($131);
      __label__ = 30;
      break;
     case 30:
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 31:
      var $132 = HEAP[$0];
      HEAP[$retval] = $132;
      __label__ = 32;
      break;
     case 32:
      var $retval30 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval30;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_joinfields($self, $args) {
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
      var $seq = __stackBase__ + 16;
      var $sep = __stackBase__ + 20;
      var $seqlen = __stackBase__ + 24;
      var $seplen = __stackBase__ + 28;
      var $i = __stackBase__ + 32;
      var $reslen = __stackBase__ + 36;
      var $slen = __stackBase__ + 40;
      var $sz = __stackBase__ + 44;
      var $res = __stackBase__ + 48;
      var $p = __stackBase__ + 52;
      var $getitemfunc = __stackBase__ + 56;
      var $item = __stackBase__ + 60;
      var $item20 = __stackBase__ + 64;
      var $item44 = __stackBase__ + 68;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$sep] = 0;
      HEAP[$seplen] = 0;
      HEAP[$reslen] = 0;
      HEAP[$slen] = 0;
      HEAP[$sz] = 100;
      HEAP[$res] = 0;
      HEAP[$p] = 0;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 73;
      break;
     case 2:
      var $4 = HEAP[$args_addr];
      var $5 = __PyArg_ParseTuple_SizeT($4, __str3, allocate([ $seq, 0, 0, 0, $sep, 0, 0, 0, $seplen, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 73;
      break;
     case 4:
      
      
      if (HEAP[$sep] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$sep] = __str4;
      HEAP[$seplen] = 1;
      __label__ = 6;
      break;
     case 6:
      var $9 = HEAP[$seq];
      var $10 = _PySequence_Size($9);
      HEAP[$seqlen] = $10;
      
      
      if (HEAP[$seqlen] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $13 = _PyErr_Occurred();
      
      if ($13 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 73;
      break;
     case 9:
      
      
      if (HEAP[$seqlen] == 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 10:
      var $17 = HEAP[$seq];
      var $18 = _PySequence_GetItem($17, 0);
      HEAP[$item] = $18;
      
      
      if (HEAP[$item] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$item] + 4] + 84] & 134217728) == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      var $28 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($28, __str5);
      
      
      
      var $32 = HEAP[HEAP[$item]] - 1;
      
      var $34 = HEAP[$item];
      HEAP[$34] = $32;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $43 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $44 = HEAP[$item];
      FUNCTION_TABLE[$43]($44);
      __label__ = 14;
      break;
     case 14:
      HEAP[$0] = 0;
      __label__ = 73;
      break;
     case 15:
      var $45 = HEAP[$item];
      HEAP[$0] = $45;
      __label__ = 73;
      break;
     case 16:
      var $46 = HEAP[$sz];
      var $47 = _PyString_FromStringAndSize(0, $46);
      HEAP[$res] = $47;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      HEAP[$0] = 0;
      __label__ = 73;
      break;
     case 18:
      var $50 = HEAP[$res];
      var $51 = _PyString_AsString($50);
      HEAP[$p] = $51;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$seq] + 4] + 84] & 33554432) != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 19:
      HEAP[$i] = 0;
      __label__ = 37;
      break;
     case 20:
      
      
      
      
      
      
      var $65 = HEAP[HEAP[HEAP[$seq] + 12] + 4 * HEAP[$i]];
      HEAP[$item20] = $65;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$item20] + 4] + 84] & 134217728) == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 21:
      var $73 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($73, __str5);
      var $74 = HEAP[$res];
      
      
      var $77 = HEAP[$74] - 1;
      var $78 = $74;
      HEAP[$78] = $77;
      
      
      
      if (HEAP[$74] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $86 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $87 = HEAP[$res];
      FUNCTION_TABLE[$86]($87);
      __label__ = 23;
      break;
     case 23:
      HEAP[$0] = 0;
      __label__ = 73;
      break;
     case 24:
      
      
      
      var $91 = HEAP[HEAP[$item20] + 8];
      HEAP[$slen] = $91;
      
      
      
      
      if (2147483647 - HEAP[$reslen] < HEAP[$slen]) {
        __label__ = 26;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      
      if (2147483647 - HEAP[$reslen] - HEAP[$seplen] < HEAP[$seplen]) {
        __label__ = 26;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 26:
      var $102 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($102, __str6);
      var $103 = HEAP[$res];
      
      
      var $106 = HEAP[$103] - 1;
      var $107 = $103;
      HEAP[$107] = $106;
      
      
      
      if (HEAP[$103] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $115 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $116 = HEAP[$res];
      FUNCTION_TABLE[$115]($116);
      __label__ = 28;
      break;
     case 28:
      HEAP[$0] = 0;
      __label__ = 73;
      break;
     case 29:
      __label__ = 33;
      break;
     case 30:
      
      var $118 = HEAP[$sz] * 2;
      var $119 = __PyString_Resize($res, $118);
      
      if ($119 < 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      HEAP[$0] = 0;
      __label__ = 73;
      break;
     case 32:
      
      var $122 = HEAP[$sz] * 2;
      HEAP[$sz] = $122;
      var $123 = HEAP[$res];
      var $124 = _PyString_AsString($123);
      
      var $126 = $124 + HEAP[$reslen];
      HEAP[$p] = $126;
      __label__ = 33;
      break;
     case 33:
      
      
      
      
      
      
      
      if (HEAP[$reslen] + HEAP[$slen] + HEAP[$seplen] >= HEAP[$sz]) {
        __label__ = 30;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      if (HEAP[$i] > 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      var $136 = HEAP[$seplen];
      var $137 = HEAP[$sep];
      var $138 = HEAP[$p];
      _llvm_memcpy_p0i8_p0i8_i32($138, $137, $136, 1, 0);
      
      
      var $141 = HEAP[$p] + HEAP[$seplen];
      HEAP[$p] = $141;
      
      
      var $144 = HEAP[$reslen] + HEAP[$seplen];
      HEAP[$reslen] = $144;
      __label__ = 36;
      break;
     case 36:
      var $145 = HEAP[$slen];
      
      
      
      var $149 = HEAP[$item20] + 20;
      var $150 = HEAP[$p];
      _llvm_memcpy_p0i8_p0i8_i32($150, $149, $145, 1, 0);
      
      
      var $153 = HEAP[$p] + HEAP[$slen];
      HEAP[$p] = $153;
      
      
      var $156 = HEAP[$reslen] + HEAP[$slen];
      HEAP[$reslen] = $156;
      
      var $158 = HEAP[$i] + 1;
      HEAP[$i] = $158;
      __label__ = 37;
      break;
     case 37:
      
      
      
      if (HEAP[$i] < HEAP[$seqlen]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      var $162 = HEAP[$reslen];
      var $163 = __PyString_Resize($res, $162);
      var $164 = HEAP[$res];
      HEAP[$0] = $164;
      __label__ = 73;
      break;
     case 39:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$seq] + 4] + 52] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      
      
      
      
      
      
      var $177 = HEAP[HEAP[HEAP[HEAP[$seq] + 4] + 52] + 12];
      HEAP[$getitemfunc] = $177;
      
      
      if (HEAP[$getitemfunc] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      var $180 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($180, __str7);
      HEAP[$0] = 0;
      __label__ = 73;
      break;
     case 42:
      HEAP[$i] = 0;
      __label__ = 71;
      break;
     case 43:
      var $181 = HEAP[$seq];
      var $182 = HEAP[$getitemfunc];
      var $183 = HEAP[$i];
      var $184 = FUNCTION_TABLE[$182]($181, $183);
      HEAP[$item44] = $184;
      
      
      if (HEAP[$item44] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$item44] + 4] + 84] & 134217728) == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 45:
      var $194 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($194, __str5);
      var $195 = HEAP[$res];
      
      
      var $198 = HEAP[$195] - 1;
      var $199 = $195;
      HEAP[$199] = $198;
      
      
      
      if (HEAP[$195] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      
      
      var $207 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $208 = HEAP[$res];
      FUNCTION_TABLE[$207]($208);
      __label__ = 47;
      break;
     case 47:
      
      
      if (HEAP[$item44] != 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 48:
      
      
      
      var $214 = HEAP[HEAP[$item44]] - 1;
      
      var $216 = HEAP[$item44];
      HEAP[$216] = $214;
      
      
      
      
      if (HEAP[HEAP[$item44]] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      
      
      var $225 = HEAP[HEAP[HEAP[$item44] + 4] + 24];
      var $226 = HEAP[$item44];
      FUNCTION_TABLE[$225]($226);
      __label__ = 50;
      break;
     case 50:
      HEAP[$0] = 0;
      __label__ = 73;
      break;
     case 51:
      
      
      
      var $230 = HEAP[HEAP[$item44] + 8];
      HEAP[$slen] = $230;
      
      
      
      
      if (2147483647 - HEAP[$reslen] < HEAP[$slen]) {
        __label__ = 53;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 52:
      
      
      
      
      
      
      if (2147483647 - HEAP[$reslen] - HEAP[$seplen] < HEAP[$seplen]) {
        __label__ = 53;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 53:
      var $241 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($241, __str6);
      var $242 = HEAP[$res];
      
      
      var $245 = HEAP[$242] - 1;
      var $246 = $242;
      HEAP[$246] = $245;
      
      
      
      if (HEAP[$242] == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      
      
      
      
      var $254 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $255 = HEAP[$res];
      FUNCTION_TABLE[$254]($255);
      __label__ = 55;
      break;
     case 55:
      
      
      if (HEAP[$item44] != 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 56:
      
      
      
      var $261 = HEAP[HEAP[$item44]] - 1;
      
      var $263 = HEAP[$item44];
      HEAP[$263] = $261;
      
      
      
      
      if (HEAP[HEAP[$item44]] == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      
      
      
      
      var $272 = HEAP[HEAP[HEAP[$item44] + 4] + 24];
      var $273 = HEAP[$item44];
      FUNCTION_TABLE[$272]($273);
      __label__ = 58;
      break;
     case 58:
      HEAP[$0] = 0;
      __label__ = 73;
      break;
     case 59:
      __label__ = 65;
      break;
     case 60:
      
      var $275 = HEAP[$sz] * 2;
      var $276 = __PyString_Resize($res, $275);
      
      if ($276 < 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 61:
      
      
      
      var $281 = HEAP[HEAP[$item44]] - 1;
      
      var $283 = HEAP[$item44];
      HEAP[$283] = $281;
      
      
      
      
      if (HEAP[HEAP[$item44]] == 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 62:
      
      
      
      
      var $292 = HEAP[HEAP[HEAP[$item44] + 4] + 24];
      var $293 = HEAP[$item44];
      FUNCTION_TABLE[$292]($293);
      __label__ = 63;
      break;
     case 63:
      HEAP[$0] = 0;
      __label__ = 73;
      break;
     case 64:
      
      var $295 = HEAP[$sz] * 2;
      HEAP[$sz] = $295;
      var $296 = HEAP[$res];
      var $297 = _PyString_AsString($296);
      
      var $299 = $297 + HEAP[$reslen];
      HEAP[$p] = $299;
      __label__ = 65;
      break;
     case 65:
      
      
      
      
      
      
      
      if (HEAP[$reslen] + HEAP[$slen] + HEAP[$seplen] >= HEAP[$sz]) {
        __label__ = 60;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 66:
      
      
      if (HEAP[$i] > 0) {
        __label__ = 67;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 67:
      var $309 = HEAP[$seplen];
      var $310 = HEAP[$sep];
      var $311 = HEAP[$p];
      _llvm_memcpy_p0i8_p0i8_i32($311, $310, $309, 1, 0);
      
      
      var $314 = HEAP[$p] + HEAP[$seplen];
      HEAP[$p] = $314;
      
      
      var $317 = HEAP[$reslen] + HEAP[$seplen];
      HEAP[$reslen] = $317;
      __label__ = 68;
      break;
     case 68:
      var $318 = HEAP[$slen];
      
      
      
      var $322 = HEAP[$item44] + 20;
      var $323 = HEAP[$p];
      _llvm_memcpy_p0i8_p0i8_i32($323, $322, $318, 1, 0);
      
      
      var $326 = HEAP[$p] + HEAP[$slen];
      HEAP[$p] = $326;
      
      
      var $329 = HEAP[$reslen] + HEAP[$slen];
      HEAP[$reslen] = $329;
      
      
      
      var $333 = HEAP[HEAP[$item44]] - 1;
      
      var $335 = HEAP[$item44];
      HEAP[$335] = $333;
      
      
      
      
      if (HEAP[HEAP[$item44]] == 0) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      
      
      
      
      var $344 = HEAP[HEAP[HEAP[$item44] + 4] + 24];
      var $345 = HEAP[$item44];
      FUNCTION_TABLE[$344]($345);
      __label__ = 70;
      break;
     case 70:
      
      var $347 = HEAP[$i] + 1;
      HEAP[$i] = $347;
      __label__ = 71;
      break;
     case 71:
      
      
      
      if (HEAP[$i] < HEAP[$seqlen]) {
        __label__ = 43;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 72:
      var $351 = HEAP[$reslen];
      var $352 = __PyString_Resize($res, $351);
      var $353 = HEAP[$res];
      HEAP[$0] = $353;
      __label__ = 73;
      break;
     case 73:
      var $354 = HEAP[$0];
      HEAP[$retval] = $354;
      __label__ = 74;
      break;
     case 74:
      var $retval75 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval75;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_find($self, $args) {
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
      var $s = __stackBase__ + 16;
      var $sub = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $n = __stackBase__ + 28;
      var $i = __stackBase__ + 32;
      var $last = __stackBase__ + 36;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$i] = 0;
      HEAP[$last] = 2147483647;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 2:
      var $4 = HEAP[$args_addr];
      var $5 = __PyArg_ParseTuple_SizeT($4, __str8, allocate([ $s, 0, 0, 0, $len, 0, 0, 0, $sub, 0, 0, 0, $n, 0, 0, 0, $i, 0, 0, 0, $last, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 4:
      
      
      
      if (HEAP[$last] > HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $10 = HEAP[$len];
      HEAP[$last] = $10;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$last] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $15 = HEAP[$last] + HEAP[$len];
      HEAP[$last] = $15;
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$last] < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$last] = 0;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      var $22 = HEAP[$i] + HEAP[$len];
      HEAP[$i] = $22;
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$i] = 0;
      __label__ = 14;
      break;
     case 14:
      
      
      if (HEAP[$n] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      if (HEAP[$i] <= HEAP[$last]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $30 = HEAP[$i];
      var $31 = _PyInt_FromLong($30);
      HEAP[$0] = $31;
      __label__ = 25;
      break;
     case 17:
      
      
      var $34 = HEAP[$last] - HEAP[$n];
      HEAP[$last] = $34;
      __label__ = 23;
      break;
     case 18:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$s] + HEAP[$i]] == HEAP[HEAP[$sub]]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 19:
      
      
      if (HEAP[$n] == 1) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      var $46 = HEAP[$n] - 1;
      
      var $48 = HEAP[$sub] + 1;
      
      
      
      var $52 = HEAP[$s] + (HEAP[$i] + 1);
      var $53 = _memcmp($52, $48, $46);
      
      if ($53 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      var $55 = HEAP[$i];
      var $56 = _PyInt_FromLong($55);
      HEAP[$0] = $56;
      __label__ = 25;
      break;
     case 22:
      
      var $58 = HEAP[$i] + 1;
      HEAP[$i] = $58;
      __label__ = 23;
      break;
     case 23:
      
      
      
      if (HEAP[$i] <= HEAP[$last]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      var $62 = _PyInt_FromLong(-1);
      HEAP[$0] = $62;
      __label__ = 25;
      break;
     case 25:
      var $63 = HEAP[$0];
      HEAP[$retval] = $63;
      __label__ = 26;
      break;
     case 26:
      var $retval25 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval25;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_rfind($self, $args) {
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
      var $s = __stackBase__ + 16;
      var $sub = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $n = __stackBase__ + 28;
      var $j = __stackBase__ + 32;
      var $i = __stackBase__ + 36;
      var $last = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$i] = 0;
      HEAP[$last] = 2147483647;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 2:
      var $4 = HEAP[$args_addr];
      var $5 = __PyArg_ParseTuple_SizeT($4, __str9, allocate([ $s, 0, 0, 0, $len, 0, 0, 0, $sub, 0, 0, 0, $n, 0, 0, 0, $i, 0, 0, 0, $last, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 4:
      
      
      
      if (HEAP[$last] > HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $10 = HEAP[$len];
      HEAP[$last] = $10;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$last] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $15 = HEAP[$last] + HEAP[$len];
      HEAP[$last] = $15;
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$last] < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$last] = 0;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      var $22 = HEAP[$i] + HEAP[$len];
      HEAP[$i] = $22;
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$i] = 0;
      __label__ = 14;
      break;
     case 14:
      
      
      if (HEAP[$n] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      if (HEAP[$i] <= HEAP[$last]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $30 = HEAP[$last];
      var $31 = _PyInt_FromLong($30);
      HEAP[$0] = $31;
      __label__ = 25;
      break;
     case 17:
      
      
      var $34 = HEAP[$last] - HEAP[$n];
      HEAP[$j] = $34;
      __label__ = 23;
      break;
     case 18:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$s] + HEAP[$j]] == HEAP[HEAP[$sub]]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 19:
      
      
      if (HEAP[$n] == 1) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      var $46 = HEAP[$n] - 1;
      
      var $48 = HEAP[$sub] + 1;
      
      
      
      var $52 = HEAP[$s] + (HEAP[$j] + 1);
      var $53 = _memcmp($52, $48, $46);
      
      if ($53 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      var $55 = HEAP[$j];
      var $56 = _PyInt_FromLong($55);
      HEAP[$0] = $56;
      __label__ = 25;
      break;
     case 22:
      
      var $58 = HEAP[$j] - 1;
      HEAP[$j] = $58;
      __label__ = 23;
      break;
     case 23:
      
      
      
      if (HEAP[$j] >= HEAP[$i]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      var $62 = _PyInt_FromLong(-1);
      HEAP[$0] = $62;
      __label__ = 25;
      break;
     case 25:
      var $63 = HEAP[$0];
      HEAP[$retval] = $63;
      __label__ = 26;
      break;
     case 26:
      var $retval25 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval25;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _do_strip($args, $striptype) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $args_addr = __stackBase__;
      var $striptype_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $s = __stackBase__ + 16;
      var $len = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      var $j = __stackBase__ + 28;
      
      HEAP[$args_addr] = $args;
      HEAP[$striptype_addr] = $striptype;
      var $1 = HEAP[$args_addr];
      var $2 = _PyString_AsStringAndSize($1, $s, $len);
      
      if ($2 != 0) {
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
      HEAP[$i] = 0;
      
      
      if (HEAP[$striptype_addr] != 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      __label__ = 5;
      break;
     case 4:
      
      var $7 = HEAP[$i] + 1;
      HEAP[$i] = $7;
      __label__ = 5;
      break;
     case 5:
      
      
      
      if (HEAP[$i] >= HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $11 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$11] + 2 * HEAP[HEAP[$s] + HEAP[$i]]] & 8192) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $23 = HEAP[$len];
      HEAP[$j] = $23;
      
      
      if (HEAP[$striptype_addr] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      var $27 = HEAP[$j] - 1;
      HEAP[$j] = $27;
      
      
      
      if (HEAP[$j] < HEAP[$i]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $31 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$31] + 2 * HEAP[HEAP[$s] + HEAP[$j]]] & 8192) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      var $44 = HEAP[$j] + 1;
      HEAP[$j] = $44;
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$i] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      if (HEAP[$j] != HEAP[$len]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $53 = HEAP[HEAP[$args_addr]] + 1;
      
      var $55 = HEAP[$args_addr];
      HEAP[$55] = $53;
      var $56 = HEAP[$args_addr];
      HEAP[$0] = $56;
      __label__ = 15;
      break;
     case 14:
      
      
      var $59 = HEAP[$j] - HEAP[$i];
      
      
      var $62 = HEAP[$s] + HEAP[$i];
      var $63 = _PyString_FromStringAndSize($62, $59);
      HEAP[$0] = $63;
      __label__ = 15;
      break;
     case 15:
      var $64 = HEAP[$0];
      HEAP[$retval] = $64;
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
  function _strop_strip($self, $args) {
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
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      var $4 = HEAP[$args_addr];
      var $5 = _do_strip($4, 2);
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
  function _strop_lstrip($self, $args) {
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
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      var $4 = HEAP[$args_addr];
      var $5 = _do_strip($4, 0);
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
  function _strop_rstrip($self, $args) {
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
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      var $4 = HEAP[$args_addr];
      var $5 = _do_strip($4, 1);
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
  function _strop_lower($self, $args) {
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
      var $s = __stackBase__ + 16;
      var $s_new = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      var $n = __stackBase__ + 28;
      var $newstr = __stackBase__ + 32;
      var $changed = __stackBase__ + 36;
      var $c = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      var $4 = HEAP[$args_addr];
      var $5 = _PyString_AsStringAndSize($4, $s, $n);
      
      if ($5 != 0) {
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
      var $7 = HEAP[$n];
      var $8 = _PyString_FromStringAndSize(0, $7);
      HEAP[$newstr] = $8;
      
      
      if (HEAP[$newstr] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 6:
      var $11 = HEAP[$newstr];
      var $12 = _PyString_AsString($11);
      HEAP[$s_new] = $12;
      HEAP[$changed] = 0;
      HEAP[$i] = 0;
      __label__ = 11;
      break;
     case 7:
      var $13 = HEAP[$s];
      
      var $15 = HEAP[$13];
      HEAP[$c] = $15;
      var $16 = $13 + 1;
      HEAP[$s] = $16;
      var $17 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$17] + 2 * HEAP[$c]] & 256) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$changed] = 1;
      var $25 = HEAP[$c];
      var $26 = _tolower($25);
      var $27 = $26 & 255;
      var $28 = HEAP[$s_new];
      HEAP[$28] = $27;
      __label__ = 10;
      break;
     case 9:
      
      var $30 = HEAP[$c] & 255;
      var $31 = HEAP[$s_new];
      HEAP[$31] = $30;
      __label__ = 10;
      break;
     case 10:
      
      var $33 = HEAP[$s_new] + 1;
      HEAP[$s_new] = $33;
      
      var $35 = HEAP[$i] + 1;
      HEAP[$i] = $35;
      __label__ = 11;
      break;
     case 11:
      
      
      
      if (HEAP[$i] < HEAP[$n]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if (HEAP[$changed] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      
      
      
      var $44 = HEAP[HEAP[$newstr]] - 1;
      
      var $46 = HEAP[$newstr];
      HEAP[$46] = $44;
      
      
      
      
      if (HEAP[HEAP[$newstr]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$newstr] + 4] + 24];
      var $56 = HEAP[$newstr];
      FUNCTION_TABLE[$55]($56);
      __label__ = 15;
      break;
     case 15:
      
      
      
      var $60 = HEAP[HEAP[$args_addr]] + 1;
      
      var $62 = HEAP[$args_addr];
      HEAP[$62] = $60;
      var $63 = HEAP[$args_addr];
      HEAP[$0] = $63;
      __label__ = 17;
      break;
     case 16:
      var $64 = HEAP[$newstr];
      HEAP[$0] = $64;
      __label__ = 17;
      break;
     case 17:
      var $65 = HEAP[$0];
      HEAP[$retval] = $65;
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
  function _strop_upper($self, $args) {
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
      var $s = __stackBase__ + 16;
      var $s_new = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      var $n = __stackBase__ + 28;
      var $newstr = __stackBase__ + 32;
      var $changed = __stackBase__ + 36;
      var $c = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      var $4 = HEAP[$args_addr];
      var $5 = _PyString_AsStringAndSize($4, $s, $n);
      
      if ($5 != 0) {
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
      var $7 = HEAP[$n];
      var $8 = _PyString_FromStringAndSize(0, $7);
      HEAP[$newstr] = $8;
      
      
      if (HEAP[$newstr] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 6:
      var $11 = HEAP[$newstr];
      var $12 = _PyString_AsString($11);
      HEAP[$s_new] = $12;
      HEAP[$changed] = 0;
      HEAP[$i] = 0;
      __label__ = 11;
      break;
     case 7:
      var $13 = HEAP[$s];
      
      var $15 = HEAP[$13];
      HEAP[$c] = $15;
      var $16 = $13 + 1;
      HEAP[$s] = $16;
      var $17 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$17] + 2 * HEAP[$c]] & 512) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$changed] = 1;
      var $25 = HEAP[$c];
      var $26 = _toupper($25);
      var $27 = $26 & 255;
      var $28 = HEAP[$s_new];
      HEAP[$28] = $27;
      __label__ = 10;
      break;
     case 9:
      
      var $30 = HEAP[$c] & 255;
      var $31 = HEAP[$s_new];
      HEAP[$31] = $30;
      __label__ = 10;
      break;
     case 10:
      
      var $33 = HEAP[$s_new] + 1;
      HEAP[$s_new] = $33;
      
      var $35 = HEAP[$i] + 1;
      HEAP[$i] = $35;
      __label__ = 11;
      break;
     case 11:
      
      
      
      if (HEAP[$i] < HEAP[$n]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if (HEAP[$changed] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      
      
      
      var $44 = HEAP[HEAP[$newstr]] - 1;
      
      var $46 = HEAP[$newstr];
      HEAP[$46] = $44;
      
      
      
      
      if (HEAP[HEAP[$newstr]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$newstr] + 4] + 24];
      var $56 = HEAP[$newstr];
      FUNCTION_TABLE[$55]($56);
      __label__ = 15;
      break;
     case 15:
      
      
      
      var $60 = HEAP[HEAP[$args_addr]] + 1;
      
      var $62 = HEAP[$args_addr];
      HEAP[$62] = $60;
      var $63 = HEAP[$args_addr];
      HEAP[$0] = $63;
      __label__ = 17;
      break;
     case 16:
      var $64 = HEAP[$newstr];
      HEAP[$0] = $64;
      __label__ = 17;
      break;
     case 17:
      var $65 = HEAP[$0];
      HEAP[$retval] = $65;
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
  function _strop_capitalize($self, $args) {
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
      var $s = __stackBase__ + 16;
      var $s_new = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      var $n = __stackBase__ + 28;
      var $newstr = __stackBase__ + 32;
      var $changed = __stackBase__ + 36;
      var $c = __stackBase__ + 40;
      var $c12 = __stackBase__ + 44;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      var $4 = HEAP[$args_addr];
      var $5 = _PyString_AsStringAndSize($4, $s, $n);
      
      if ($5 != 0) {
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
      var $7 = HEAP[$n];
      var $8 = _PyString_FromStringAndSize(0, $7);
      HEAP[$newstr] = $8;
      
      
      if (HEAP[$newstr] == 0) {
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
      var $11 = HEAP[$newstr];
      var $12 = _PyString_AsString($11);
      HEAP[$s_new] = $12;
      HEAP[$changed] = 0;
      
      
      if (HEAP[$n] > 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 7:
      var $15 = HEAP[$s];
      
      var $17 = HEAP[$15];
      HEAP[$c] = $17;
      var $18 = $15 + 1;
      HEAP[$s] = $18;
      var $19 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$19] + 2 * HEAP[$c]] & 512) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$changed] = 1;
      var $27 = HEAP[$c];
      var $28 = _toupper($27);
      var $29 = $28 & 255;
      var $30 = HEAP[$s_new];
      HEAP[$30] = $29;
      __label__ = 10;
      break;
     case 9:
      
      var $32 = HEAP[$c] & 255;
      var $33 = HEAP[$s_new];
      HEAP[$33] = $32;
      __label__ = 10;
      break;
     case 10:
      
      var $35 = HEAP[$s_new] + 1;
      HEAP[$s_new] = $35;
      __label__ = 11;
      break;
     case 11:
      HEAP[$i] = 1;
      __label__ = 16;
      break;
     case 12:
      var $36 = HEAP[$s];
      
      var $38 = HEAP[$36];
      HEAP[$c12] = $38;
      var $39 = $36 + 1;
      HEAP[$s] = $39;
      var $40 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$40] + 2 * HEAP[$c12]] & 256) != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$changed] = 1;
      var $48 = HEAP[$c12];
      var $49 = _tolower($48);
      var $50 = $49 & 255;
      var $51 = HEAP[$s_new];
      HEAP[$51] = $50;
      __label__ = 15;
      break;
     case 14:
      
      var $53 = HEAP[$c12] & 255;
      var $54 = HEAP[$s_new];
      HEAP[$54] = $53;
      __label__ = 15;
      break;
     case 15:
      
      var $56 = HEAP[$s_new] + 1;
      HEAP[$s_new] = $56;
      
      var $58 = HEAP[$i] + 1;
      HEAP[$i] = $58;
      __label__ = 16;
      break;
     case 16:
      
      
      
      if (HEAP[$i] < HEAP[$n]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      if (HEAP[$changed] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      
      
      
      var $67 = HEAP[HEAP[$newstr]] - 1;
      
      var $69 = HEAP[$newstr];
      HEAP[$69] = $67;
      
      
      
      
      if (HEAP[HEAP[$newstr]] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $78 = HEAP[HEAP[HEAP[$newstr] + 4] + 24];
      var $79 = HEAP[$newstr];
      FUNCTION_TABLE[$78]($79);
      __label__ = 20;
      break;
     case 20:
      
      
      
      var $83 = HEAP[HEAP[$args_addr]] + 1;
      
      var $85 = HEAP[$args_addr];
      HEAP[$85] = $83;
      var $86 = HEAP[$args_addr];
      HEAP[$0] = $86;
      __label__ = 22;
      break;
     case 21:
      var $87 = HEAP[$newstr];
      HEAP[$0] = $87;
      __label__ = 22;
      break;
     case 22:
      var $88 = HEAP[$0];
      HEAP[$retval] = $88;
      __label__ = 23;
      break;
     case 23:
      var $retval23 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval23;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_expandtabs($self, $args) {
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
      var $e = __stackBase__ + 16;
      var $p = __stackBase__ + 20;
      var $q = __stackBase__ + 24;
      var $i = __stackBase__ + 28;
      var $j = __stackBase__ + 32;
      var $old_j = __stackBase__ + 36;
      var $out = __stackBase__ + 40;
      var $string = __stackBase__ + 44;
      var $stringlen = __stackBase__ + 48;
      var $tabsize = __stackBase__ + 52;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$tabsize] = 8;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 30;
      break;
     case 2:
      var $4 = HEAP[$args_addr];
      var $5 = __PyArg_ParseTuple_SizeT($4, __str10, allocate([ $string, 0, 0, 0, $stringlen, 0, 0, 0, $tabsize, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 30;
      break;
     case 4:
      
      
      if (HEAP[$tabsize] <= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $9 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($9, __str11);
      HEAP[$0] = 0;
      __label__ = 30;
      break;
     case 6:
      HEAP[$old_j] = 0;
      var $10 = HEAP[$old_j];
      HEAP[$j] = $10;
      var $11 = HEAP[$j];
      HEAP[$i] = $11;
      
      
      var $14 = HEAP[$string] + HEAP[$stringlen];
      HEAP[$e] = $14;
      var $15 = HEAP[$string];
      HEAP[$p] = $15;
      __label__ = 14;
      break;
     case 7:
      
      
      
      if (HEAP[HEAP[$p]] == 9) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $25 = HEAP[$tabsize] - HEAP[$j] % HEAP[$tabsize] + HEAP[$j];
      HEAP[$j] = $25;
      
      
      
      if (HEAP[$old_j] > HEAP[$j]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $29 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($29, __str12);
      HEAP[$0] = 0;
      __label__ = 30;
      break;
     case 10:
      var $30 = HEAP[$j];
      HEAP[$old_j] = $30;
      __label__ = 13;
      break;
     case 11:
      
      var $32 = HEAP[$j] + 1;
      HEAP[$j] = $32;
      
      
      
      if (HEAP[HEAP[$p]] == 10) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      var $38 = HEAP[$i] + HEAP[$j];
      HEAP[$i] = $38;
      HEAP[$j] = 0;
      __label__ = 13;
      break;
     case 13:
      
      var $40 = HEAP[$p] + 1;
      HEAP[$p] = $40;
      __label__ = 14;
      break;
     case 14:
      
      
      
      if (HEAP[$p] < HEAP[$e]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      if (HEAP[$i] + HEAP[$j] < 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $48 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($48, __str12);
      HEAP[$0] = 0;
      __label__ = 30;
      break;
     case 17:
      
      
      var $51 = HEAP[$i] + HEAP[$j];
      var $52 = _PyString_FromStringAndSize(0, $51);
      HEAP[$out] = $52;
      
      
      if (HEAP[$out] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      HEAP[$0] = 0;
      __label__ = 30;
      break;
     case 19:
      HEAP[$i] = 0;
      
      
      
      var $58 = HEAP[$out] + 20;
      HEAP[$q] = $58;
      var $59 = HEAP[$string];
      HEAP[$p] = $59;
      __label__ = 28;
      break;
     case 20:
      
      
      
      if (HEAP[HEAP[$p]] == 9) {
        __label__ = 21;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 21:
      
      
      
      
      var $67 = HEAP[$tabsize] - HEAP[$i] % HEAP[$tabsize];
      HEAP[$j] = $67;
      
      
      var $70 = HEAP[$i] + HEAP[$j];
      HEAP[$i] = $70;
      __label__ = 23;
      break;
     case 22:
      var $71 = HEAP[$q];
      HEAP[$71] = 32;
      
      var $73 = HEAP[$q] + 1;
      HEAP[$q] = $73;
      __label__ = 23;
      break;
     case 23:
      
      
      var $76 = HEAP[$j] > 0;
      
      var $78 = HEAP[$j] - 1;
      HEAP[$j] = $78;
      
      if ($76 != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      __label__ = 27;
      break;
     case 25:
      
      var $80 = HEAP[HEAP[$p]];
      var $81 = HEAP[$q];
      HEAP[$81] = $80;
      
      var $83 = HEAP[$q] + 1;
      HEAP[$q] = $83;
      
      var $85 = HEAP[$i] + 1;
      HEAP[$i] = $85;
      
      
      
      if (HEAP[HEAP[$p]] == 10) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      HEAP[$i] = 0;
      __label__ = 27;
      break;
     case 27:
      
      var $90 = HEAP[$p] + 1;
      HEAP[$p] = $90;
      __label__ = 28;
      break;
     case 28:
      
      
      
      if (HEAP[$p] < HEAP[$e]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      var $94 = HEAP[$out];
      HEAP[$0] = $94;
      __label__ = 30;
      break;
     case 30:
      var $95 = HEAP[$0];
      HEAP[$retval] = $95;
      __label__ = 31;
      break;
     case 31:
      var $retval30 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval30;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_count($self, $args) {
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
      var $s = __stackBase__ + 16;
      var $sub = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $n = __stackBase__ + 28;
      var $i = __stackBase__ + 32;
      var $last = __stackBase__ + 36;
      var $m = __stackBase__ + 40;
      var $r = __stackBase__ + 44;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$i] = 0;
      HEAP[$last] = 2147483647;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      var $4 = HEAP[$args_addr];
      var $5 = __PyArg_ParseTuple_SizeT($4, __str13, allocate([ $s, 0, 0, 0, $len, 0, 0, 0, $sub, 0, 0, 0, $n, 0, 0, 0, $i, 0, 0, 0, $last, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
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
      
      
      
      if (HEAP[$last] > HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $10 = HEAP[$len];
      HEAP[$last] = $10;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$last] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $15 = HEAP[$last] + HEAP[$len];
      HEAP[$last] = $15;
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$last] < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$last] = 0;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      var $22 = HEAP[$i] + HEAP[$len];
      HEAP[$i] = $22;
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$i] = 0;
      __label__ = 14;
      break;
     case 14:
      
      
      
      var $28 = HEAP[$last] + 1 - HEAP[$n];
      HEAP[$m] = $28;
      
      
      if (HEAP[$n] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      var $33 = HEAP[$m] - HEAP[$i];
      var $34 = _PyInt_FromLong($33);
      HEAP[$0] = $34;
      __label__ = 22;
      break;
     case 16:
      HEAP[$r] = 0;
      __label__ = 20;
      break;
     case 17:
      var $35 = HEAP[$n];
      var $36 = HEAP[$sub];
      
      
      var $39 = HEAP[$s] + HEAP[$i];
      var $40 = _memcmp($39, $36, $35);
      
      if ($40 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      var $43 = HEAP[$r] + 1;
      HEAP[$r] = $43;
      
      
      var $46 = HEAP[$i] + HEAP[$n];
      HEAP[$i] = $46;
      __label__ = 20;
      break;
     case 19:
      
      var $48 = HEAP[$i] + 1;
      HEAP[$i] = $48;
      __label__ = 20;
      break;
     case 20:
      
      
      
      if (HEAP[$i] < HEAP[$m]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      var $52 = HEAP[$r];
      var $53 = _PyInt_FromLong($52);
      HEAP[$0] = $53;
      __label__ = 22;
      break;
     case 22:
      var $54 = HEAP[$0];
      HEAP[$retval] = $54;
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
  function _strop_swapcase($self, $args) {
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
      var $s = __stackBase__ + 16;
      var $s_new = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      var $n = __stackBase__ + 28;
      var $newstr = __stackBase__ + 32;
      var $changed = __stackBase__ + 36;
      var $c = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      var $4 = HEAP[$args_addr];
      var $5 = _PyString_AsStringAndSize($4, $s, $n);
      
      if ($5 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 4:
      var $7 = HEAP[$n];
      var $8 = _PyString_FromStringAndSize(0, $7);
      HEAP[$newstr] = $8;
      
      
      if (HEAP[$newstr] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 6:
      var $11 = HEAP[$newstr];
      var $12 = _PyString_AsString($11);
      HEAP[$s_new] = $12;
      HEAP[$changed] = 0;
      HEAP[$i] = 0;
      __label__ = 13;
      break;
     case 7:
      var $13 = HEAP[$s];
      
      var $15 = HEAP[$13];
      HEAP[$c] = $15;
      var $16 = $13 + 1;
      HEAP[$s] = $16;
      var $17 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$17] + 2 * HEAP[$c]] & 512) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$changed] = 1;
      var $25 = HEAP[$c];
      var $26 = _toupper($25);
      var $27 = $26 & 255;
      var $28 = HEAP[$s_new];
      HEAP[$28] = $27;
      __label__ = 12;
      break;
     case 9:
      var $29 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$29] + 2 * HEAP[$c]] & 256) != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$changed] = 1;
      var $37 = HEAP[$c];
      var $38 = _tolower($37);
      var $39 = $38 & 255;
      var $40 = HEAP[$s_new];
      HEAP[$40] = $39;
      __label__ = 12;
      break;
     case 11:
      
      var $42 = HEAP[$c] & 255;
      var $43 = HEAP[$s_new];
      HEAP[$43] = $42;
      __label__ = 12;
      break;
     case 12:
      
      var $45 = HEAP[$s_new] + 1;
      HEAP[$s_new] = $45;
      
      var $47 = HEAP[$i] + 1;
      HEAP[$i] = $47;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (HEAP[$i] < HEAP[$n]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if (HEAP[$changed] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      
      
      
      var $56 = HEAP[HEAP[$newstr]] - 1;
      
      var $58 = HEAP[$newstr];
      HEAP[$58] = $56;
      
      
      
      
      if (HEAP[HEAP[$newstr]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[$newstr] + 4] + 24];
      var $68 = HEAP[$newstr];
      FUNCTION_TABLE[$67]($68);
      __label__ = 17;
      break;
     case 17:
      
      
      
      var $72 = HEAP[HEAP[$args_addr]] + 1;
      
      var $74 = HEAP[$args_addr];
      HEAP[$74] = $72;
      var $75 = HEAP[$args_addr];
      HEAP[$0] = $75;
      __label__ = 19;
      break;
     case 18:
      var $76 = HEAP[$newstr];
      HEAP[$0] = $76;
      __label__ = 19;
      break;
     case 19:
      var $77 = HEAP[$0];
      HEAP[$retval] = $77;
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
  function _strop_atoi($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 288;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 288);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $s = __stackBase__ + 16;
      var $end = __stackBase__ + 20;
      var $base = __stackBase__ + 24;
      var $x = __stackBase__ + 28;
      var $buffer = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$base] = 10;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      var $4 = HEAP[$args_addr];
      var $5 = __PyArg_ParseTuple_SizeT($4, __str14, allocate([ $s, 0, 0, 0, $base, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 4:
      
      
      if (HEAP[$base] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      if (HEAP[$base] <= 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if (HEAP[$base] > 36) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $13 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($13, __str15);
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 8:
      __label__ = 10;
      break;
     case 9:
      
      var $15 = HEAP[$s] + 1;
      HEAP[$s] = $15;
      __label__ = 10;
      break;
     case 10:
      
      
      
      if (HEAP[HEAP[$s]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $19 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$19] + 2 * HEAP[HEAP[$s]]] & 8192) != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $29 = ___errno_location();
      HEAP[$29] = 0;
      
      
      if (HEAP[$base] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      if (HEAP[HEAP[$s]] != 48) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      var $36 = HEAP[$base];
      var $37 = HEAP[$s];
      var $38 = _PyOS_strtoul($37, $end, $36);
      HEAP[$x] = $38;
      __label__ = 16;
      break;
     case 15:
      var $39 = HEAP[$base];
      var $40 = HEAP[$s];
      var $41 = _PyOS_strtol($40, $end, $39);
      HEAP[$x] = $41;
      __label__ = 16;
      break;
     case 16:
      
      
      
      if (HEAP[$end] == HEAP[$s]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      var $45 = ___ctype_b_loc();
      
      
      var $48 = HEAP[$end] + -1;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$45] + 2 * HEAP[$48]] & 8) == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      __label__ = 20;
      break;
     case 19:
      
      var $57 = HEAP[$end] + 1;
      HEAP[$end] = $57;
      __label__ = 20;
      break;
     case 20:
      
      
      
      if (HEAP[HEAP[$end]] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      var $61 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$61] + 2 * HEAP[HEAP[$end]]] & 8192) != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      if (HEAP[HEAP[$end]] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      var $74 = HEAP[$s];
      var $buffer22 = $buffer;
      var $75 = _PyOS_snprintf($buffer22, 256, __str16, allocate([ $74, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      var $76 = HEAP[_PyExc_ValueError];
      var $buffer23 = $buffer;
      _PyErr_SetString($76, $buffer23);
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 24:
      var $77 = ___errno_location();
      
      
      if (HEAP[$77] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $80 = HEAP[$s];
      var $buffer26 = $buffer;
      var $81 = _PyOS_snprintf($buffer26, 256, __str17, allocate([ $80, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      var $82 = HEAP[_PyExc_ValueError];
      var $buffer27 = $buffer;
      _PyErr_SetString($82, $buffer27);
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 26:
      var $83 = HEAP[$x];
      var $84 = _PyInt_FromLong($83);
      HEAP[$0] = $84;
      __label__ = 27;
      break;
     case 27:
      var $85 = HEAP[$0];
      HEAP[$retval] = $85;
      __label__ = 28;
      break;
     case 28:
      var $retval30 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval30;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_atol($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 288;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 288);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $s = __stackBase__ + 16;
      var $end = __stackBase__ + 20;
      var $base = __stackBase__ + 24;
      var $x = __stackBase__ + 28;
      var $buffer = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$base] = 10;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 2:
      var $4 = HEAP[$args_addr];
      var $5 = __PyArg_ParseTuple_SizeT($4, __str18, allocate([ $s, 0, 0, 0, $base, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 4:
      
      
      if (HEAP[$base] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      if (HEAP[$base] <= 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if (HEAP[$base] > 36) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $13 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($13, __str19);
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 8:
      __label__ = 10;
      break;
     case 9:
      
      var $15 = HEAP[$s] + 1;
      HEAP[$s] = $15;
      __label__ = 10;
      break;
     case 10:
      
      
      
      if (HEAP[HEAP[$s]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $19 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$19] + 2 * HEAP[HEAP[$s]]] & 8192) != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      if (HEAP[HEAP[$s]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $33 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($33, __str20);
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 14:
      var $34 = HEAP[$base];
      var $35 = HEAP[$s];
      var $36 = _PyLong_FromString($35, $end, $34);
      HEAP[$x] = $36;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 16:
      
      
      if (HEAP[$base] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      
      
      
      if (HEAP[HEAP[$end]] == 108) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      if (HEAP[HEAP[$end]] == 76) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      var $48 = HEAP[$end] + 1;
      HEAP[$end] = $48;
      __label__ = 20;
      break;
     case 20:
      __label__ = 22;
      break;
     case 21:
      
      var $50 = HEAP[$end] + 1;
      HEAP[$end] = $50;
      __label__ = 22;
      break;
     case 22:
      
      
      
      if (HEAP[HEAP[$end]] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      var $54 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$54] + 2 * HEAP[HEAP[$end]]] & 8192) != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      if (HEAP[HEAP[$end]] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 25:
      var $67 = HEAP[$s];
      var $buffer25 = $buffer;
      var $68 = _PyOS_snprintf($buffer25, 256, __str21, allocate([ $67, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      var $69 = HEAP[_PyExc_ValueError];
      var $buffer26 = $buffer;
      _PyErr_SetString($69, $buffer26);
      
      
      
      var $73 = HEAP[HEAP[$x]] - 1;
      
      var $75 = HEAP[$x];
      HEAP[$75] = $73;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $84 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $85 = HEAP[$x];
      FUNCTION_TABLE[$84]($85);
      __label__ = 27;
      break;
     case 27:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 28:
      var $86 = HEAP[$x];
      HEAP[$0] = $86;
      __label__ = 29;
      break;
     case 29:
      var $87 = HEAP[$0];
      HEAP[$retval] = $87;
      __label__ = 30;
      break;
     case 30:
      var $retval31 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval31;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_atof($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 288;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 288);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $s = __stackBase__ + 16;
      var $end = __stackBase__ + 20;
      var $x = __stackBase__ + 24;
      var $buffer = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      var $4 = HEAP[$args_addr];
      var $5 = __PyArg_ParseTuple_SizeT($4, __str22, allocate([ $s, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
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
      __label__ = 6;
      break;
     case 5:
      
      var $8 = HEAP[$s] + 1;
      HEAP[$s] = $8;
      __label__ = 6;
      break;
     case 6:
      
      
      
      if (HEAP[HEAP[$s]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $12 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$12] + 2 * HEAP[HEAP[$s]]] & 8192) != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[HEAP[$s]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $26 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($26, __str23);
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 10:
      var $27 = HEAP[_PyExc_OverflowError];
      var $28 = HEAP[$s];
      var $29 = _PyOS_string_to_double($28, $end, $27);
      HEAP[$x] = $29;
      
      var $31 = HEAP[$x] == -1;
      if ($31) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      var $32 = _PyErr_Occurred();
      
      if ($32 != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 13:
      __label__ = 15;
      break;
     case 14:
      
      var $35 = HEAP[$end] + 1;
      HEAP[$end] = $35;
      __label__ = 15;
      break;
     case 15:
      
      
      
      if (HEAP[HEAP[$end]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $39 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$39] + 2 * HEAP[HEAP[$end]]] & 8192) != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      if (HEAP[HEAP[$end]] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $52 = HEAP[$s];
      var $buffer18 = $buffer;
      var $53 = _PyOS_snprintf($buffer18, 256, __str24, allocate([ $52, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      var $54 = HEAP[_PyExc_ValueError];
      var $buffer19 = $buffer;
      _PyErr_SetString($54, $buffer19);
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 19:
      var $55 = HEAP[$x];
      var $56 = _PyFloat_FromDouble($55);
      HEAP[$0] = $56;
      __label__ = 20;
      break;
     case 20:
      var $57 = HEAP[$0];
      HEAP[$retval] = $57;
      __label__ = 21;
      break;
     case 21:
      var $retval22 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_maketrans($self, $args) {
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
      var $c = __stackBase__ + 16;
      var $from = __stackBase__ + 20;
      var $to = __stackBase__ + 24;
      var $i = __stackBase__ + 28;
      var $fromlen = __stackBase__ + 32;
      var $tolen = __stackBase__ + 36;
      var $result = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$from] = 0;
      HEAP[$to] = 0;
      HEAP[$fromlen] = 0;
      HEAP[$tolen] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str25, allocate([ $from, 0, 0, 0, $fromlen, 0, 0, 0, $to, 0, 0, 0, $tolen, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      if (HEAP[$fromlen] != HEAP[$tolen]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $7 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($7, __str26);
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 4:
      var $8 = _PyString_FromStringAndSize(0, 256);
      HEAP[$result] = $8;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 6:
      
      
      
      var $14 = HEAP[$result] + 20;
      HEAP[$c] = $14;
      HEAP[$i] = 0;
      __label__ = 8;
      break;
     case 7:
      
      var $16 = HEAP[$i] & 255;
      
      
      var $19 = HEAP[$c] + HEAP[$i];
      HEAP[$19] = $16;
      
      var $21 = HEAP[$i] + 1;
      HEAP[$i] = $21;
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$i] <= 255) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      HEAP[$i] = 0;
      __label__ = 11;
      break;
     case 10:
      
      
      
      
      
      
      
      
      var $32 = HEAP[HEAP[$to] + HEAP[$i]];
      
      var $34 = HEAP[$c] + HEAP[HEAP[$from] + HEAP[$i]];
      HEAP[$34] = $32;
      
      var $36 = HEAP[$i] + 1;
      HEAP[$i] = $36;
      __label__ = 11;
      break;
     case 11:
      
      
      
      if (HEAP[$i] < HEAP[$fromlen]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $40 = HEAP[$result];
      HEAP[$0] = $40;
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
  function _strop_translate($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1096;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 1096);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $input = __stackBase__ + 16;
      var $table = __stackBase__ + 20;
      var $output = __stackBase__ + 24;
      var $i = __stackBase__ + 28;
      var $c = __stackBase__ + 32;
      var $changed = __stackBase__ + 36;
      var $input_obj = __stackBase__ + 40;
      var $table1 = __stackBase__ + 44;
      var $output_start = __stackBase__ + 48;
      var $del_table = __stackBase__ + 52;
      var $inlen = __stackBase__ + 56;
      var $tablen = __stackBase__ + 60;
      var $dellen = __stackBase__ + 64;
      var $result = __stackBase__ + 68;
      var $trans_table = __stackBase__ + 72;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$changed] = 0;
      HEAP[$del_table] = 0;
      HEAP[$dellen] = 0;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 36;
      break;
     case 2:
      var $4 = HEAP[$args_addr];
      var $5 = __PyArg_ParseTuple_SizeT($4, __str27, allocate([ $input_obj, 0, 0, 0, $table1, 0, 0, 0, $tablen, 0, 0, 0, $del_table, 0, 0, 0, $dellen, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 36;
      break;
     case 4:
      
      
      if (HEAP[$tablen] != 256) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $9 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($9, __str28);
      HEAP[$0] = 0;
      __label__ = 36;
      break;
     case 6:
      var $10 = HEAP[$table1];
      HEAP[$table] = $10;
      
      
      
      var $14 = HEAP[HEAP[$input_obj] + 8];
      HEAP[$inlen] = $14;
      var $15 = HEAP[$inlen];
      var $16 = _PyString_FromStringAndSize(0, $15);
      HEAP[$result] = $16;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 36;
      break;
     case 8:
      var $19 = HEAP[$result];
      var $20 = _PyString_AsString($19);
      HEAP[$output] = $20;
      var $21 = HEAP[$output];
      HEAP[$output_start] = $21;
      var $22 = HEAP[$input_obj];
      var $23 = _PyString_AsString($22);
      HEAP[$input] = $23;
      
      
      if (HEAP[$dellen] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 9:
      var $26 = HEAP[$inlen];
      HEAP[$i] = $26;
      __label__ = 12;
      break;
     case 10:
      
      
      var $29 = HEAP[HEAP[$input]];
      HEAP[$c] = $29;
      
      var $31 = HEAP[$input] + 1;
      HEAP[$input] = $31;
      
      
      
      var $35 = HEAP[HEAP[$table] + HEAP[$c]];
      var $36 = HEAP[$output];
      HEAP[$36] = $35;
      
      
      
      
      
      var $42 = HEAP[HEAP[$output]] != HEAP[$c];
      
      var $44 = HEAP[$output] + 1;
      HEAP[$output] = $44;
      
      if ($42 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$changed] = 1;
      __label__ = 12;
      break;
     case 12:
      
      var $46 = HEAP[$i] - 1;
      HEAP[$i] = $46;
      
      
      if (HEAP[$i] >= 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      if (HEAP[$changed] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $51 = HEAP[$result];
      HEAP[$0] = $51;
      __label__ = 36;
      break;
     case 15:
      var $52 = HEAP[$result];
      
      
      var $55 = HEAP[$52] - 1;
      var $56 = $52;
      HEAP[$56] = $55;
      
      
      
      if (HEAP[$52] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $64 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $65 = HEAP[$result];
      FUNCTION_TABLE[$64]($65);
      __label__ = 17;
      break;
     case 17:
      
      
      
      var $69 = HEAP[HEAP[$input_obj]] + 1;
      var $70 = HEAP[$input_obj];
      HEAP[$70] = $69;
      var $71 = HEAP[$input_obj];
      HEAP[$0] = $71;
      __label__ = 36;
      break;
     case 18:
      HEAP[$i] = 0;
      __label__ = 20;
      break;
     case 19:
      
      
      
      
      
      var $77 = HEAP[HEAP[$table] + HEAP[$i]];
      var $78 = $trans_table + HEAP[$i] * 4;
      HEAP[$78] = $77;
      
      var $80 = HEAP[$i] + 1;
      HEAP[$i] = $80;
      __label__ = 20;
      break;
     case 20:
      
      
      if (HEAP[$i] <= 255) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      HEAP[$i] = 0;
      __label__ = 23;
      break;
     case 22:
      
      
      
      
      
      var $88 = $trans_table + HEAP[HEAP[$del_table] + HEAP[$i]] * 4;
      HEAP[$88] = -1;
      
      var $90 = HEAP[$i] + 1;
      HEAP[$i] = $90;
      __label__ = 23;
      break;
     case 23:
      
      
      
      if (HEAP[$i] < HEAP[$dellen]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      var $94 = HEAP[$inlen];
      HEAP[$i] = $94;
      __label__ = 28;
      break;
     case 25:
      
      
      var $97 = HEAP[HEAP[$input]];
      HEAP[$c] = $97;
      
      var $99 = HEAP[$input] + 1;
      HEAP[$input] = $99;
      
      
      
      var $103 = HEAP[$trans_table + HEAP[$c] * 4] != -1;
      if ($103) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      var $107 = HEAP[$trans_table + HEAP[$c] * 4] & 255;
      var $108 = HEAP[$output];
      HEAP[$108] = $107;
      
      
      
      
      
      var $114 = HEAP[HEAP[$output]] == HEAP[$c];
      
      var $116 = HEAP[$output] + 1;
      HEAP[$output] = $116;
      
      if ($114 != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      HEAP[$changed] = 1;
      __label__ = 28;
      break;
     case 28:
      
      var $118 = HEAP[$i] - 1;
      HEAP[$i] = $118;
      
      
      if (HEAP[$i] >= 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      if (HEAP[$changed] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 30:
      var $123 = HEAP[$result];
      
      
      var $126 = HEAP[$123] - 1;
      var $127 = $123;
      HEAP[$127] = $126;
      
      
      
      if (HEAP[$123] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $135 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $136 = HEAP[$result];
      FUNCTION_TABLE[$135]($136);
      __label__ = 32;
      break;
     case 32:
      
      
      
      var $140 = HEAP[HEAP[$input_obj]] + 1;
      var $141 = HEAP[$input_obj];
      HEAP[$141] = $140;
      var $142 = HEAP[$input_obj];
      HEAP[$0] = $142;
      __label__ = 36;
      break;
     case 33:
      
      
      if (HEAP[$inlen] > 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $149 = HEAP[$output] - HEAP[$output_start];
      var $150 = __PyString_Resize($result, $149);
      __label__ = 35;
      break;
     case 35:
      var $151 = HEAP[$result];
      HEAP[$0] = $151;
      __label__ = 36;
      break;
     case 36:
      var $152 = HEAP[$0];
      HEAP[$retval] = $152;
      __label__ = 37;
      break;
     case 37:
      var $retval37 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval37;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mymemfind($mem, $len, $pat, $pat_len) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $mem_addr = __stackBase__;
      var $len_addr = __stackBase__ + 4;
      var $pat_addr = __stackBase__ + 8;
      var $pat_len_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $ii = __stackBase__ + 24;
      
      HEAP[$mem_addr] = $mem;
      HEAP[$len_addr] = $len;
      HEAP[$pat_addr] = $pat;
      HEAP[$pat_len_addr] = $pat_len;
      
      
      var $3 = HEAP[$len_addr] - HEAP[$pat_len_addr];
      HEAP[$len_addr] = $3;
      HEAP[$ii] = 0;
      __label__ = 6;
      break;
     case 1:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$mem_addr] + HEAP[$ii]] == HEAP[HEAP[$pat_addr]]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      if (HEAP[$pat_len_addr] == 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $15 = HEAP[$pat_len_addr] - 1;
      
      var $17 = HEAP[$pat_addr] + 1;
      
      
      
      var $21 = HEAP[$mem_addr] + (HEAP[$ii] + 1);
      var $22 = _memcmp($21, $17, $15);
      
      if ($22 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $24 = HEAP[$ii];
      HEAP[$0] = $24;
      __label__ = 8;
      break;
     case 5:
      
      var $26 = HEAP[$ii] + 1;
      HEAP[$ii] = $26;
      __label__ = 6;
      break;
     case 6:
      
      
      
      if (HEAP[$ii] <= HEAP[$len_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 8:
      var $30 = HEAP[$0];
      HEAP[$retval] = $30;
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
  function _mymemcnt($mem, $len, $pat, $pat_len) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $mem_addr = __stackBase__;
      var $len_addr = __stackBase__ + 4;
      var $pat_addr = __stackBase__ + 8;
      var $pat_len_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $offset = __stackBase__ + 24;
      var $nfound = __stackBase__ + 28;
      
      HEAP[$mem_addr] = $mem;
      HEAP[$len_addr] = $len;
      HEAP[$pat_addr] = $pat;
      HEAP[$pat_len_addr] = $pat_len;
      HEAP[$offset] = 0;
      HEAP[$nfound] = 0;
      __label__ = 3;
      break;
     case 1:
      var $1 = HEAP[$mem_addr];
      var $2 = HEAP[$len_addr];
      var $3 = HEAP[$pat_addr];
      var $4 = HEAP[$pat_len_addr];
      var $5 = _mymemfind($1, $2, $3, $4);
      HEAP[$offset] = $5;
      
      var $7 = HEAP[$offset] == -1;
      if ($7) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      var $12 = HEAP[$mem_addr] + (HEAP[$offset] + HEAP[$pat_len_addr]);
      HEAP[$mem_addr] = $12;
      
      
      
      
      var $17 = HEAP[$len_addr] - (HEAP[$offset] + HEAP[$pat_len_addr]);
      HEAP[$len_addr] = $17;
      
      var $19 = HEAP[$nfound] + 1;
      HEAP[$nfound] = $19;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$len_addr] >= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $22 = HEAP[$nfound];
      HEAP[$0] = $22;
      var $23 = HEAP[$0];
      HEAP[$retval] = $23;
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
  function _mymemreplace($str, $len, $pat, $pat_len, $sub, $sub_len, $count, $out_len) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 68;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $str_addr = __stackBase__;
      var $len_addr = __stackBase__ + 4;
      var $pat_addr = __stackBase__ + 8;
      var $pat_len_addr = __stackBase__ + 12;
      var $sub_addr = __stackBase__ + 16;
      var $sub_len_addr = __stackBase__ + 20;
      var $count_addr = __stackBase__ + 24;
      var $out_len_addr = __stackBase__ + 28;
      var $retval = __stackBase__ + 32;
      var $iftmp_287 = __stackBase__ + 36;
      var $iftmp_286 = __stackBase__ + 40;
      var $0 = __stackBase__ + 44;
      var $out_s = __stackBase__ + 48;
      var $new_s = __stackBase__ + 52;
      var $nfound = __stackBase__ + 56;
      var $offset = __stackBase__ + 60;
      var $new_len = __stackBase__ + 64;
      
      HEAP[$str_addr] = $str;
      HEAP[$len_addr] = $len;
      HEAP[$pat_addr] = $pat;
      HEAP[$pat_len_addr] = $pat_len;
      HEAP[$sub_addr] = $sub;
      HEAP[$sub_len_addr] = $sub_len;
      HEAP[$count_addr] = $count;
      HEAP[$out_len_addr] = $out_len;
      
      
      if (HEAP[$len_addr] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      if (HEAP[$pat_len_addr] > HEAP[$len_addr]) {
        __label__ = 29;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $6 = HEAP[$str_addr];
      var $7 = HEAP[$len_addr];
      var $8 = HEAP[$pat_addr];
      var $9 = HEAP[$pat_len_addr];
      var $10 = _mymemcnt($6, $7, $8, $9);
      HEAP[$nfound] = $10;
      
      
      if (HEAP[$count_addr] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$count_addr] = 2147483647;
      __label__ = 6;
      break;
     case 4:
      
      
      
      if (HEAP[$nfound] > HEAP[$count_addr]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $16 = HEAP[$count_addr];
      HEAP[$nfound] = $16;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$nfound] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $25 = (HEAP[$sub_len_addr] - HEAP[$pat_len_addr]) * HEAP[$nfound] + HEAP[$len_addr];
      HEAP[$new_len] = $25;
      
      
      if (HEAP[$new_len] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      var $28 = _malloc(1);
      HEAP[$out_s] = $28;
      
      
      if (HEAP[$out_s] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = 0;
      __label__ = 30;
      break;
     case 10:
      
      var $32 = HEAP[$out_s];
      HEAP[$32] = 0;
      __label__ = 28;
      break;
     case 11:
      
      
      if (HEAP[$new_len] <= 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      ___assert_fail(__str29, __str30, 1118, ___PRETTY_FUNCTION___9840);
      throw "Reached an unreachable!";
     case 13:
      
      
      if (HEAP[$new_len] >= 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      
      
      if (HEAP[$new_len] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $39 = HEAP[$new_len];
      HEAP[$iftmp_287] = $39;
      __label__ = 17;
      break;
     case 16:
      HEAP[$iftmp_287] = 1;
      __label__ = 17;
      break;
     case 17:
      var $40 = HEAP[$iftmp_287];
      var $41 = _malloc($40);
      HEAP[$iftmp_286] = $41;
      __label__ = 19;
      break;
     case 18:
      HEAP[$iftmp_286] = 0;
      __label__ = 19;
      break;
     case 19:
      var $42 = HEAP[$iftmp_286];
      HEAP[$new_s] = $42;
      
      
      if (HEAP[$new_s] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      HEAP[$0] = 0;
      __label__ = 30;
      break;
     case 21:
      var $45 = HEAP[$new_s];
      HEAP[$out_s] = $45;
      __label__ = 24;
      break;
     case 22:
      var $46 = HEAP[$str_addr];
      var $47 = HEAP[$len_addr];
      var $48 = HEAP[$pat_addr];
      var $49 = HEAP[$pat_len_addr];
      var $50 = _mymemfind($46, $47, $48, $49);
      HEAP[$offset] = $50;
      
      var $52 = HEAP[$offset] == -1;
      if ($52) {
        __label__ = 26;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      var $53 = HEAP[$offset];
      var $54 = HEAP[$new_s];
      var $55 = HEAP[$str_addr];
      _llvm_memcpy_p0i8_p0i8_i32($54, $55, $53, 1, 0);
      
      
      
      
      var $60 = HEAP[$str_addr] + (HEAP[$offset] + HEAP[$pat_len_addr]);
      HEAP[$str_addr] = $60;
      
      
      
      
      var $65 = HEAP[$len_addr] - (HEAP[$offset] + HEAP[$pat_len_addr]);
      HEAP[$len_addr] = $65;
      
      
      var $68 = HEAP[$new_s] + HEAP[$offset];
      HEAP[$new_s] = $68;
      var $69 = HEAP[$sub_len_addr];
      var $70 = HEAP[$new_s];
      var $71 = HEAP[$sub_addr];
      _llvm_memcpy_p0i8_p0i8_i32($70, $71, $69, 1, 0);
      
      
      var $74 = HEAP[$new_s] + HEAP[$sub_len_addr];
      HEAP[$new_s] = $74;
      
      var $76 = HEAP[$count_addr] - 1;
      HEAP[$count_addr] = $76;
      __label__ = 24;
      break;
     case 24:
      
      
      if (HEAP[$count_addr] <= 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      if (HEAP[$len_addr] > 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      if (HEAP[$len_addr] > 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $83 = HEAP[$len_addr];
      var $84 = HEAP[$new_s];
      var $85 = HEAP[$str_addr];
      _llvm_memcpy_p0i8_p0i8_i32($84, $85, $83, 1, 0);
      __label__ = 28;
      break;
     case 28:
      var $86 = HEAP[$out_len_addr];
      var $87 = HEAP[$new_len];
      HEAP[$86] = $87;
      var $88 = HEAP[$out_s];
      HEAP[$0] = $88;
      __label__ = 30;
      break;
     case 29:
      var $89 = HEAP[$out_len_addr];
      HEAP[$89] = -1;
      var $90 = HEAP[$str_addr];
      HEAP[$0] = $90;
      __label__ = 30;
      break;
     case 30:
      var $91 = HEAP[$0];
      HEAP[$retval] = $91;
      __label__ = 31;
      break;
     case 31:
      var $retval29 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval29;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_replace($self, $args) {
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
      var $str = __stackBase__ + 16;
      var $pat = __stackBase__ + 20;
      var $sub = __stackBase__ + 24;
      var $new_s = __stackBase__ + 28;
      var $len = __stackBase__ + 32;
      var $pat_len = __stackBase__ + 36;
      var $sub_len = __stackBase__ + 40;
      var $out_len = __stackBase__ + 44;
      var $count = __stackBase__ + 48;
      var $newstr = __stackBase__ + 52;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$count] = -1;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      var $4 = HEAP[$args_addr];
      var $5 = __PyArg_ParseTuple_SizeT($4, __str31, allocate([ $str, 0, 0, 0, $len, 0, 0, 0, $pat, 0, 0, 0, $pat_len, 0, 0, 0, $sub, 0, 0, 0, $sub_len, 0, 0, 0, $count, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
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
      
      
      if (HEAP[$pat_len] <= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $9 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($9, __str32);
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 6:
      
      
      if (HEAP[$count] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$count] = -1;
      __label__ = 8;
      break;
     case 8:
      var $12 = HEAP[$count];
      var $13 = HEAP[$sub_len];
      var $14 = HEAP[$sub];
      var $15 = HEAP[$pat_len];
      var $16 = HEAP[$pat];
      var $17 = HEAP[$len];
      var $18 = HEAP[$str];
      var $19 = _mymemreplace($18, $17, $16, $15, $14, $13, $12, $out_len);
      HEAP[$new_s] = $19;
      
      
      if (HEAP[$new_s] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $22 = _PyErr_NoMemory();
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 10:
      
      var $24 = HEAP[$out_len] == -1;
      if ($24) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      var $25 = HEAP[$args_addr];
      var $26 = _PyTuple_GetItem($25, 0);
      HEAP[$newstr] = $26;
      
      
      if (HEAP[$newstr] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      var $32 = HEAP[HEAP[$newstr]] + 1;
      
      var $34 = HEAP[$newstr];
      HEAP[$34] = $32;
      __label__ = 13;
      break;
     case 13:
      __label__ = 15;
      break;
     case 14:
      var $35 = HEAP[$out_len];
      var $36 = HEAP[$new_s];
      var $37 = _PyString_FromStringAndSize($36, $35);
      HEAP[$newstr] = $37;
      var $38 = HEAP[$new_s];
      _free($38);
      __label__ = 15;
      break;
     case 15:
      var $39 = HEAP[$newstr];
      HEAP[$0] = $39;
      __label__ = 16;
      break;
     case 16:
      var $40 = HEAP[$0];
      HEAP[$retval] = $40;
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
  function _initstrop() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 272;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 272);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      var $s = __stackBase__ + 4;
      var $buf = __stackBase__ + 8;
      var $c = __stackBase__ + 264;
      var $n = __stackBase__ + 268;
      
      var $0 = _Py_InitModule4(__str54, _strop_methods, _strop_module__doc__, 0, 1013);
      HEAP[$m] = $0;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      HEAP[$n] = 0;
      HEAP[$c] = 0;
      __label__ = 5;
      break;
     case 2:
      var $3 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$3] + 2 * HEAP[$c]] & 8192) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $13 = HEAP[$c] & 255;
      var $14 = $buf + HEAP[$n];
      HEAP[$14] = $13;
      
      var $16 = HEAP[$n] + 1;
      HEAP[$n] = $16;
      __label__ = 4;
      break;
     case 4:
      
      var $18 = HEAP[$c] + 1;
      HEAP[$c] = $18;
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[$c] <= 255) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $buf6 = $buf;
      var $21 = HEAP[$n];
      var $22 = _PyString_FromStringAndSize($buf6, $21);
      HEAP[$s] = $22;
      
      
      if (HEAP[$s] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $25 = HEAP[$m];
      var $26 = HEAP[$s];
      var $27 = _PyModule_AddObject($25, __str55, $26);
      __label__ = 8;
      break;
     case 8:
      HEAP[$n] = 0;
      HEAP[$c] = 0;
      __label__ = 12;
      break;
     case 9:
      var $28 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$28] + 2 * HEAP[$c]] & 512) != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      var $38 = HEAP[$c] & 255;
      var $39 = $buf + HEAP[$n];
      HEAP[$39] = $38;
      
      var $41 = HEAP[$n] + 1;
      HEAP[$n] = $41;
      __label__ = 11;
      break;
     case 11:
      
      var $43 = HEAP[$c] + 1;
      HEAP[$c] = $43;
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$c] <= 255) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $buf14 = $buf;
      var $46 = HEAP[$n];
      var $47 = _PyString_FromStringAndSize($buf14, $46);
      HEAP[$s] = $47;
      
      
      if (HEAP[$s] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $50 = HEAP[$m];
      var $51 = HEAP[$s];
      var $52 = _PyModule_AddObject($50, __str56, $51);
      __label__ = 15;
      break;
     case 15:
      HEAP[$n] = 0;
      HEAP[$c] = 0;
      __label__ = 19;
      break;
     case 16:
      var $53 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$53] + 2 * HEAP[$c]] & 256) != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      var $63 = HEAP[$c] & 255;
      var $64 = $buf + HEAP[$n];
      HEAP[$64] = $63;
      
      var $66 = HEAP[$n] + 1;
      HEAP[$n] = $66;
      __label__ = 18;
      break;
     case 18:
      
      var $68 = HEAP[$c] + 1;
      HEAP[$c] = $68;
      __label__ = 19;
      break;
     case 19:
      
      
      if (HEAP[$c] <= 255) {
        __label__ = 16;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      var $buf22 = $buf;
      var $71 = HEAP[$n];
      var $72 = _PyString_FromStringAndSize($buf22, $71);
      HEAP[$s] = $72;
      
      
      if (HEAP[$s] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      var $75 = HEAP[$m];
      var $76 = HEAP[$s];
      var $77 = _PyModule_AddObject($75, __str57, $76);
      __label__ = 22;
      break;
     case 22:
      __label__ = 23;
      break;
     case 23:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initstrop"] = _initstrop;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _strop_atof, 0, _strop_atoi, 0, _strop_atol, 0, _strop_capitalize, 0, _strop_count, 0, _strop_expandtabs, 0, _strop_find, 0, _strop_joinfields, 0, _strop_lstrip, 0, _strop_lower, 0, _strop_maketrans, 0, _strop_replace, 0, _strop_rfind, 0, _strop_rstrip, 0, _strop_splitfields, 0, _strop_strip, 0, _strop_swapcase, 0, _strop_translate, 0, _strop_upper, 0 ]);
  function run(args) {
    _strop_module__doc__ = allocate([ 67, 111, 109, 109, 111, 110, 32, 115, 116, 114, 105, 110, 103, 32, 109, 97, 110, 105, 112, 117, 108, 97, 116, 105, 111, 110, 115, 44, 32, 111, 112, 116, 105, 109, 105, 122, 101, 100, 32, 102, 111, 114, 32, 115, 112, 101, 101, 100, 46, 10, 10, 65, 108, 119, 97, 121, 115, 32, 117, 115, 101, 32, 34, 105, 109, 112, 111, 114, 116, 32, 115, 116, 114, 105, 110, 103, 34, 32, 114, 97, 116, 104, 101, 114, 32, 116, 104, 97, 110, 32, 114, 101, 102, 101, 114, 101, 110, 99, 105, 110, 103, 10, 116, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 100, 105, 114, 101, 99, 116, 108, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    _splitfields__doc__ = allocate([ 115, 112, 108, 105, 116, 40, 115, 32, 91, 44, 115, 101, 112, 32, 91, 44, 109, 97, 120, 115, 112, 108, 105, 116, 93, 93, 41, 32, 45, 62, 32, 108, 105, 115, 116, 32, 111, 102, 32, 115, 116, 114, 105, 110, 103, 115, 10, 115, 112, 108, 105, 116, 102, 105, 101, 108, 100, 115, 40, 115, 32, 91, 44, 115, 101, 112, 32, 91, 44, 109, 97, 120, 115, 112, 108, 105, 116, 93, 93, 41, 32, 45, 62, 32, 108, 105, 115, 116, 32, 111, 102, 32, 115, 116, 114, 105, 110, 103, 115, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 108, 105, 115, 116, 32, 111, 102, 32, 116, 104, 101, 32, 119, 111, 114, 100, 115, 32, 105, 110, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 44, 32, 117, 115, 105, 110, 103, 32, 115, 101, 112, 32, 97, 115, 32, 116, 104, 101, 10, 100, 101, 108, 105, 109, 105, 116, 101, 114, 32, 115, 116, 114, 105, 110, 103, 46, 32, 32, 73, 102, 32, 109, 97, 120, 115, 112, 108, 105, 116, 32, 105, 115, 32, 110, 111, 110, 122, 101, 114, 111, 44, 32, 115, 112, 108, 105, 116, 115, 32, 105, 110, 116, 111, 32, 97, 116, 32, 109, 111, 115, 116, 10, 109, 97, 120, 115, 112, 108, 105, 116, 32, 119, 111, 114, 100, 115, 46, 32, 32, 73, 102, 32, 115, 101, 112, 32, 105, 115, 32, 110, 111, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 44, 32, 97, 110, 121, 32, 119, 104, 105, 116, 101, 115, 112, 97, 99, 101, 32, 115, 116, 114, 105, 110, 103, 10, 105, 115, 32, 97, 32, 115, 101, 112, 97, 114, 97, 116, 111, 114, 46, 32, 32, 77, 97, 120, 115, 112, 108, 105, 116, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 48, 46, 10, 10, 40, 115, 112, 108, 105, 116, 32, 97, 110, 100, 32, 115, 112, 108, 105, 116, 102, 105, 101, 108, 100, 115, 32, 97, 114, 101, 32, 115, 121, 110, 111, 110, 121, 109, 111, 117, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 115, 116, 114, 111, 112, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 97, 114, 101, 32, 111, 98, 115, 111, 108, 101, 116, 101, 59, 32, 117, 115, 101, 32, 115, 116, 114, 105, 110, 103, 32, 109, 101, 116, 104, 111, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 116, 35, 124, 122, 35, 110, 58, 115, 112, 108, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 101, 109, 112, 116, 121, 32, 115, 101, 112, 97, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _joinfields__doc__ = allocate([ 106, 111, 105, 110, 40, 108, 105, 115, 116, 32, 91, 44, 115, 101, 112, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 106, 111, 105, 110, 102, 105, 101, 108, 100, 115, 40, 108, 105, 115, 116, 32, 91, 44, 115, 101, 112, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 99, 111, 109, 112, 111, 115, 101, 100, 32, 111, 102, 32, 116, 104, 101, 32, 119, 111, 114, 100, 115, 32, 105, 110, 32, 108, 105, 115, 116, 44, 32, 119, 105, 116, 104, 10, 105, 110, 116, 101, 114, 118, 101, 110, 105, 110, 103, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 115, 32, 111, 102, 32, 115, 101, 112, 46, 32, 32, 83, 101, 112, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 97, 32, 115, 105, 110, 103, 108, 101, 10, 115, 112, 97, 99, 101, 46, 10, 10, 40, 106, 111, 105, 110, 32, 97, 110, 100, 32, 106, 111, 105, 110, 102, 105, 101, 108, 100, 115, 32, 97, 114, 101, 32, 115, 121, 110, 111, 110, 121, 109, 111, 117, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 79, 124, 116, 35, 58, 106, 111, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 32, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 102, 105, 114, 115, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 102, 32, 115, 116, 114, 105, 110, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 105, 110, 112, 117, 116, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 102, 105, 114, 115, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 101, 113, 117, 101, 110, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    _find__doc__ = allocate([ 102, 105, 110, 100, 40, 115, 44, 32, 115, 117, 98, 32, 91, 44, 115, 116, 97, 114, 116, 32, 91, 44, 101, 110, 100, 93, 93, 41, 32, 45, 62, 32, 105, 110, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 108, 111, 119, 101, 115, 116, 32, 105, 110, 100, 101, 120, 32, 105, 110, 32, 115, 32, 119, 104, 101, 114, 101, 32, 115, 117, 98, 115, 116, 114, 105, 110, 103, 32, 115, 117, 98, 32, 105, 115, 32, 102, 111, 117, 110, 100, 44, 10, 115, 117, 99, 104, 32, 116, 104, 97, 116, 32, 115, 117, 98, 32, 105, 115, 32, 99, 111, 110, 116, 97, 105, 110, 101, 100, 32, 119, 105, 116, 104, 105, 110, 32, 115, 91, 115, 116, 97, 114, 116, 44, 101, 110, 100, 93, 46, 32, 32, 79, 112, 116, 105, 111, 110, 97, 108, 10, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 115, 116, 97, 114, 116, 32, 97, 110, 100, 32, 101, 110, 100, 32, 97, 114, 101, 32, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 32, 97, 115, 32, 105, 110, 32, 115, 108, 105, 99, 101, 32, 110, 111, 116, 97, 116, 105, 111, 110, 46, 10, 10, 82, 101, 116, 117, 114, 110, 32, 45, 49, 32, 111, 110, 32, 102, 97, 105, 108, 117, 114, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 116, 35, 116, 35, 124, 110, 110, 58, 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _rfind__doc__ = allocate([ 114, 102, 105, 110, 100, 40, 115, 44, 32, 115, 117, 98, 32, 91, 44, 115, 116, 97, 114, 116, 32, 91, 44, 101, 110, 100, 93, 93, 41, 32, 45, 62, 32, 105, 110, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 105, 103, 104, 101, 115, 116, 32, 105, 110, 100, 101, 120, 32, 105, 110, 32, 115, 32, 119, 104, 101, 114, 101, 32, 115, 117, 98, 115, 116, 114, 105, 110, 103, 32, 115, 117, 98, 32, 105, 115, 32, 102, 111, 117, 110, 100, 44, 10, 115, 117, 99, 104, 32, 116, 104, 97, 116, 32, 115, 117, 98, 32, 105, 115, 32, 99, 111, 110, 116, 97, 105, 110, 101, 100, 32, 119, 105, 116, 104, 105, 110, 32, 115, 91, 115, 116, 97, 114, 116, 44, 101, 110, 100, 93, 46, 32, 32, 79, 112, 116, 105, 111, 110, 97, 108, 10, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 115, 116, 97, 114, 116, 32, 97, 110, 100, 32, 101, 110, 100, 32, 97, 114, 101, 32, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 32, 97, 115, 32, 105, 110, 32, 115, 108, 105, 99, 101, 32, 110, 111, 116, 97, 116, 105, 111, 110, 46, 10, 10, 82, 101, 116, 117, 114, 110, 32, 45, 49, 32, 111, 110, 32, 102, 97, 105, 108, 117, 114, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 116, 35, 116, 35, 124, 110, 110, 58, 114, 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _strip__doc__ = allocate([ 115, 116, 114, 105, 112, 40, 115, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 119, 105, 116, 104, 32, 108, 101, 97, 100, 105, 110, 103, 32, 97, 110, 100, 32, 116, 114, 97, 105, 108, 105, 110, 103, 10, 119, 104, 105, 116, 101, 115, 112, 97, 99, 101, 32, 114, 101, 109, 111, 118, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _lstrip__doc__ = allocate([ 108, 115, 116, 114, 105, 112, 40, 115, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 119, 105, 116, 104, 32, 108, 101, 97, 100, 105, 110, 103, 32, 119, 104, 105, 116, 101, 115, 112, 97, 99, 101, 32, 114, 101, 109, 111, 118, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _rstrip__doc__ = allocate([ 114, 115, 116, 114, 105, 112, 40, 115, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 119, 105, 116, 104, 32, 116, 114, 97, 105, 108, 105, 110, 103, 32, 119, 104, 105, 116, 101, 115, 112, 97, 99, 101, 32, 114, 101, 109, 111, 118, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _lower__doc__ = allocate([ 108, 111, 119, 101, 114, 40, 115, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 99, 111, 110, 118, 101, 114, 116, 101, 100, 32, 116, 111, 32, 108, 111, 119, 101, 114, 99, 97, 115, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _upper__doc__ = allocate([ 117, 112, 112, 101, 114, 40, 115, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 99, 111, 110, 118, 101, 114, 116, 101, 100, 32, 116, 111, 32, 117, 112, 112, 101, 114, 99, 97, 115, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _capitalize__doc__ = allocate([ 99, 97, 112, 105, 116, 97, 108, 105, 122, 101, 40, 115, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 119, 105, 116, 104, 32, 111, 110, 108, 121, 32, 105, 116, 115, 32, 102, 105, 114, 115, 116, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 10, 99, 97, 112, 105, 116, 97, 108, 105, 122, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _expandtabs__doc__ = allocate([ 101, 120, 112, 97, 110, 100, 116, 97, 98, 115, 40, 115, 116, 114, 105, 110, 103, 44, 32, 91, 116, 97, 98, 115, 105, 122, 101, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 69, 120, 112, 97, 110, 100, 32, 116, 97, 98, 115, 32, 105, 110, 32, 97, 32, 115, 116, 114, 105, 110, 103, 44, 32, 105, 46, 101, 46, 32, 114, 101, 112, 108, 97, 99, 101, 32, 116, 104, 101, 109, 32, 98, 121, 32, 111, 110, 101, 32, 111, 114, 32, 109, 111, 114, 101, 32, 115, 112, 97, 99, 101, 115, 44, 10, 100, 101, 112, 101, 110, 100, 105, 110, 103, 32, 111, 110, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 99, 111, 108, 117, 109, 110, 32, 97, 110, 100, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 116, 97, 98, 32, 115, 105, 122, 101, 32, 40, 100, 101, 102, 97, 117, 108, 116, 32, 56, 41, 46, 10, 84, 104, 101, 32, 99, 111, 108, 117, 109, 110, 32, 110, 117, 109, 98, 101, 114, 32, 105, 115, 32, 114, 101, 115, 101, 116, 32, 116, 111, 32, 122, 101, 114, 111, 32, 97, 102, 116, 101, 114, 32, 101, 97, 99, 104, 32, 110, 101, 119, 108, 105, 110, 101, 32, 111, 99, 99, 117, 114, 114, 105, 110, 103, 32, 105, 110, 32, 116, 104, 101, 10, 115, 116, 114, 105, 110, 103, 46, 32, 32, 84, 104, 105, 115, 32, 100, 111, 101, 115, 110, 39, 116, 32, 117, 110, 100, 101, 114, 115, 116, 97, 110, 100, 32, 111, 116, 104, 101, 114, 32, 110, 111, 110, 45, 112, 114, 105, 110, 116, 105, 110, 103, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 115, 35, 124, 105, 58, 101, 120, 112, 97, 110, 100, 116, 97, 98, 115, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 116, 97, 98, 115, 105, 122, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 116, 32, 108, 101, 97, 115, 116, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 110, 101, 119, 32, 115, 116, 114, 105, 110, 103, 32, 105, 115, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _count__doc__ = allocate([ 99, 111, 117, 110, 116, 40, 115, 44, 32, 115, 117, 98, 91, 44, 32, 115, 116, 97, 114, 116, 91, 44, 32, 101, 110, 100, 93, 93, 41, 32, 45, 62, 32, 105, 110, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 115, 32, 111, 102, 32, 115, 117, 98, 115, 116, 114, 105, 110, 103, 32, 115, 117, 98, 32, 105, 110, 32, 115, 116, 114, 105, 110, 103, 10, 115, 91, 115, 116, 97, 114, 116, 58, 101, 110, 100, 93, 46, 32, 32, 79, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 115, 116, 97, 114, 116, 32, 97, 110, 100, 32, 101, 110, 100, 32, 97, 114, 101, 10, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 32, 97, 115, 32, 105, 110, 32, 115, 108, 105, 99, 101, 32, 110, 111, 116, 97, 116, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 116, 35, 116, 35, 124, 110, 110, 58, 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _swapcase__doc__ = allocate([ 115, 119, 97, 112, 99, 97, 115, 101, 40, 115, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 119, 105, 116, 104, 32, 117, 112, 112, 101, 114, 32, 99, 97, 115, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 10, 99, 111, 110, 118, 101, 114, 116, 101, 100, 32, 116, 111, 32, 108, 111, 119, 101, 114, 99, 97, 115, 101, 32, 97, 110, 100, 32, 118, 105, 99, 101, 32, 118, 101, 114, 115, 97, 46, 0 ], "i8", ALLOC_NORMAL);
    _atoi__doc__ = allocate([ 97, 116, 111, 105, 40, 115, 32, 91, 44, 98, 97, 115, 101, 93, 41, 32, 45, 62, 32, 105, 110, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 105, 110, 116, 101, 103, 101, 114, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 105, 110, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 10, 98, 97, 115, 101, 44, 32, 119, 104, 105, 99, 104, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 49, 48, 46, 32, 32, 84, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 109, 117, 115, 116, 32, 99, 111, 110, 115, 105, 115, 116, 32, 111, 102, 32, 111, 110, 101, 10, 111, 114, 32, 109, 111, 114, 101, 32, 100, 105, 103, 105, 116, 115, 44, 32, 112, 111, 115, 115, 105, 98, 108, 121, 32, 112, 114, 101, 99, 101, 100, 101, 100, 32, 98, 121, 32, 97, 32, 115, 105, 103, 110, 46, 32, 32, 73, 102, 32, 98, 97, 115, 101, 32, 105, 115, 32, 48, 44, 32, 105, 116, 10, 105, 115, 32, 99, 104, 111, 115, 101, 110, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 108, 101, 97, 100, 105, 110, 103, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 32, 111, 102, 32, 115, 44, 32, 48, 32, 102, 111, 114, 32, 111, 99, 116, 97, 108, 44, 32, 48, 120, 32, 111, 114, 10, 48, 88, 32, 102, 111, 114, 32, 104, 101, 120, 97, 100, 101, 99, 105, 109, 97, 108, 46, 32, 32, 73, 102, 32, 98, 97, 115, 101, 32, 105, 115, 32, 49, 54, 44, 32, 97, 32, 112, 114, 101, 99, 101, 100, 105, 110, 103, 32, 48, 120, 32, 111, 114, 32, 48, 88, 32, 105, 115, 10, 97, 99, 99, 101, 112, 116, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 115, 124, 105, 58, 97, 116, 111, 105, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 98, 97, 115, 101, 32, 102, 111, 114, 32, 97, 116, 111, 105, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 108, 105, 116, 101, 114, 97, 108, 32, 102, 111, 114, 32, 97, 116, 111, 105, 40, 41, 58, 32, 37, 46, 50, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 97, 116, 111, 105, 40, 41, 32, 108, 105, 116, 101, 114, 97, 108, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 58, 32, 37, 46, 50, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    _atol__doc__ = allocate([ 97, 116, 111, 108, 40, 115, 32, 91, 44, 98, 97, 115, 101, 93, 41, 32, 45, 62, 32, 108, 111, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 108, 111, 110, 103, 32, 105, 110, 116, 101, 103, 101, 114, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 105, 110, 32, 116, 104, 101, 10, 103, 105, 118, 101, 110, 32, 98, 97, 115, 101, 44, 32, 119, 104, 105, 99, 104, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 49, 48, 46, 32, 32, 84, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 109, 117, 115, 116, 32, 99, 111, 110, 115, 105, 115, 116, 10, 111, 102, 32, 111, 110, 101, 32, 111, 114, 32, 109, 111, 114, 101, 32, 100, 105, 103, 105, 116, 115, 44, 32, 112, 111, 115, 115, 105, 98, 108, 121, 32, 112, 114, 101, 99, 101, 100, 101, 100, 32, 98, 121, 32, 97, 32, 115, 105, 103, 110, 46, 32, 32, 73, 102, 32, 98, 97, 115, 101, 10, 105, 115, 32, 48, 44, 32, 105, 116, 32, 105, 115, 32, 99, 104, 111, 115, 101, 110, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 108, 101, 97, 100, 105, 110, 103, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 32, 111, 102, 32, 115, 44, 32, 48, 32, 102, 111, 114, 10, 111, 99, 116, 97, 108, 44, 32, 48, 120, 32, 111, 114, 32, 48, 88, 32, 102, 111, 114, 32, 104, 101, 120, 97, 100, 101, 99, 105, 109, 97, 108, 46, 32, 32, 73, 102, 32, 98, 97, 115, 101, 32, 105, 115, 32, 49, 54, 44, 32, 97, 32, 112, 114, 101, 99, 101, 100, 105, 110, 103, 10, 48, 120, 32, 111, 114, 32, 48, 88, 32, 105, 115, 32, 97, 99, 99, 101, 112, 116, 101, 100, 46, 32, 32, 65, 32, 116, 114, 97, 105, 108, 105, 110, 103, 32, 76, 32, 111, 114, 32, 108, 32, 105, 115, 32, 110, 111, 116, 32, 97, 99, 99, 101, 112, 116, 101, 100, 44, 10, 117, 110, 108, 101, 115, 115, 32, 98, 97, 115, 101, 32, 105, 115, 32, 48, 46, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 115, 124, 105, 58, 97, 116, 111, 108, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 98, 97, 115, 101, 32, 102, 111, 114, 32, 97, 116, 111, 108, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 101, 109, 112, 116, 121, 32, 115, 116, 114, 105, 110, 103, 32, 102, 111, 114, 32, 97, 116, 111, 108, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 108, 105, 116, 101, 114, 97, 108, 32, 102, 111, 114, 32, 97, 116, 111, 108, 40, 41, 58, 32, 37, 46, 50, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    _atof__doc__ = allocate([ 97, 116, 111, 102, 40, 115, 41, 32, 45, 62, 32, 102, 108, 111, 97, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 110, 117, 109, 98, 101, 114, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 115, 58, 97, 116, 111, 102, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 101, 109, 112, 116, 121, 32, 115, 116, 114, 105, 110, 103, 32, 102, 111, 114, 32, 97, 116, 111, 102, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 108, 105, 116, 101, 114, 97, 108, 32, 102, 111, 114, 32, 97, 116, 111, 102, 40, 41, 58, 32, 37, 46, 50, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    _maketrans__doc__ = allocate([ 109, 97, 107, 101, 116, 114, 97, 110, 115, 40, 102, 114, 109, 44, 32, 116, 111, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 116, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 116, 97, 98, 108, 101, 32, 40, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 50, 53, 54, 32, 98, 121, 116, 101, 115, 32, 108, 111, 110, 103, 41, 10, 115, 117, 105, 116, 97, 98, 108, 101, 32, 102, 111, 114, 32, 117, 115, 101, 32, 105, 110, 32, 115, 116, 114, 105, 110, 103, 46, 116, 114, 97, 110, 115, 108, 97, 116, 101, 46, 32, 32, 84, 104, 101, 32, 115, 116, 114, 105, 110, 103, 115, 32, 102, 114, 109, 32, 97, 110, 100, 32, 116, 111, 10, 109, 117, 115, 116, 32, 98, 101, 32, 111, 102, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 108, 101, 110, 103, 116, 104, 46, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 116, 35, 116, 35, 58, 109, 97, 107, 101, 116, 114, 97, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 109, 97, 107, 101, 116, 114, 97, 110, 115, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 115, 97, 109, 101, 32, 108, 101, 110, 103, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    _translate__doc__ = allocate([ 116, 114, 97, 110, 115, 108, 97, 116, 101, 40, 115, 44, 116, 97, 98, 108, 101, 32, 91, 44, 100, 101, 108, 101, 116, 101, 99, 104, 97, 114, 115, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 44, 32, 119, 104, 101, 114, 101, 32, 97, 108, 108, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 32, 111, 99, 99, 117, 114, 114, 105, 110, 103, 10, 105, 110, 32, 116, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 100, 101, 108, 101, 116, 101, 99, 104, 97, 114, 115, 32, 97, 114, 101, 32, 114, 101, 109, 111, 118, 101, 100, 44, 32, 97, 110, 100, 32, 116, 104, 101, 10, 114, 101, 109, 97, 105, 110, 105, 110, 103, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 32, 104, 97, 118, 101, 32, 98, 101, 101, 110, 32, 109, 97, 112, 112, 101, 100, 32, 116, 104, 114, 111, 117, 103, 104, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 10, 116, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 116, 97, 98, 108, 101, 44, 32, 119, 104, 105, 99, 104, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 108, 101, 110, 103, 116, 104, 32, 50, 53, 54, 46, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 83, 116, 35, 124, 116, 35, 58, 116, 114, 97, 110, 115, 108, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 116, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 116, 97, 98, 108, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 50, 53, 54, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 32, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 110, 101, 119, 95, 108, 101, 110, 32, 62, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 115, 116, 114, 111, 112, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9840 = allocate([ 109, 121, 109, 101, 109, 114, 101, 112, 108, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    _replace__doc__ = allocate([ 114, 101, 112, 108, 97, 99, 101, 32, 40, 115, 116, 114, 44, 32, 111, 108, 100, 44, 32, 110, 101, 119, 91, 44, 32, 109, 97, 120, 115, 112, 108, 105, 116, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 115, 116, 114, 105, 110, 103, 32, 115, 116, 114, 32, 119, 105, 116, 104, 32, 97, 108, 108, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 115, 32, 111, 102, 32, 115, 117, 98, 115, 116, 114, 105, 110, 103, 10, 111, 108, 100, 32, 114, 101, 112, 108, 97, 99, 101, 100, 32, 98, 121, 32, 110, 101, 119, 46, 32, 73, 102, 32, 116, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 97, 120, 115, 112, 108, 105, 116, 32, 105, 115, 10, 103, 105, 118, 101, 110, 44, 32, 111, 110, 108, 121, 32, 116, 104, 101, 32, 102, 105, 114, 115, 116, 32, 109, 97, 120, 115, 112, 108, 105, 116, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 115, 32, 97, 114, 101, 32, 114, 101, 112, 108, 97, 99, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 116, 35, 116, 35, 116, 35, 124, 110, 58, 114, 101, 112, 108, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 101, 109, 112, 116, 121, 32, 112, 97, 116, 116, 101, 114, 110, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 97, 116, 111, 102, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 97, 116, 111, 105, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 97, 116, 111, 108, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 99, 97, 112, 105, 116, 97, 108, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 101, 120, 112, 97, 110, 100, 116, 97, 98, 115, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 106, 111, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 106, 111, 105, 110, 102, 105, 101, 108, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 108, 115, 116, 114, 105, 112, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 108, 111, 119, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 109, 97, 107, 101, 116, 114, 97, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 114, 101, 112, 108, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 114, 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 114, 115, 116, 114, 105, 112, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 115, 112, 108, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 115, 112, 108, 105, 116, 102, 105, 101, 108, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 115, 116, 114, 105, 112, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 115, 119, 97, 112, 99, 97, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 116, 114, 97, 110, 115, 108, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 117, 112, 112, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _strop_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str54 = allocate([ 115, 116, 114, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 119, 104, 105, 116, 101, 115, 112, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 108, 111, 119, 101, 114, 99, 97, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 117, 112, 112, 101, 114, 99, 97, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_strop_methods] = __str33;
    HEAP[_strop_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_strop_methods + 12] = _atof__doc__;
    HEAP[_strop_methods + 16] = __str34;
    HEAP[_strop_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_strop_methods + 28] = _atoi__doc__;
    HEAP[_strop_methods + 32] = __str35;
    HEAP[_strop_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_strop_methods + 44] = _atol__doc__;
    HEAP[_strop_methods + 48] = __str36;
    HEAP[_strop_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_strop_methods + 60] = _capitalize__doc__;
    HEAP[_strop_methods + 64] = __str37;
    HEAP[_strop_methods + 68] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_strop_methods + 76] = _count__doc__;
    HEAP[_strop_methods + 80] = __str38;
    HEAP[_strop_methods + 84] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_strop_methods + 92] = _expandtabs__doc__;
    HEAP[_strop_methods + 96] = __str39;
    HEAP[_strop_methods + 100] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_strop_methods + 108] = _find__doc__;
    HEAP[_strop_methods + 112] = __str40;
    HEAP[_strop_methods + 116] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_strop_methods + 124] = _joinfields__doc__;
    HEAP[_strop_methods + 128] = __str41;
    HEAP[_strop_methods + 132] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_strop_methods + 140] = _joinfields__doc__;
    HEAP[_strop_methods + 144] = __str42;
    HEAP[_strop_methods + 148] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_strop_methods + 156] = _lstrip__doc__;
    HEAP[_strop_methods + 160] = __str43;
    HEAP[_strop_methods + 164] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_strop_methods + 172] = _lower__doc__;
    HEAP[_strop_methods + 176] = __str44;
    HEAP[_strop_methods + 180] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_strop_methods + 188] = _maketrans__doc__;
    HEAP[_strop_methods + 192] = __str45;
    HEAP[_strop_methods + 196] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_strop_methods + 204] = _replace__doc__;
    HEAP[_strop_methods + 208] = __str46;
    HEAP[_strop_methods + 212] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_strop_methods + 220] = _rfind__doc__;
    HEAP[_strop_methods + 224] = __str47;
    HEAP[_strop_methods + 228] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_strop_methods + 236] = _rstrip__doc__;
    HEAP[_strop_methods + 240] = __str48;
    HEAP[_strop_methods + 244] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_strop_methods + 252] = _splitfields__doc__;
    HEAP[_strop_methods + 256] = __str49;
    HEAP[_strop_methods + 260] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_strop_methods + 268] = _splitfields__doc__;
    HEAP[_strop_methods + 272] = __str50;
    HEAP[_strop_methods + 276] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_strop_methods + 284] = _strip__doc__;
    HEAP[_strop_methods + 288] = __str51;
    HEAP[_strop_methods + 292] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_strop_methods + 300] = _swapcase__doc__;
    HEAP[_strop_methods + 304] = __str52;
    HEAP[_strop_methods + 308] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_strop_methods + 316] = _translate__doc__;
    HEAP[_strop_methods + 320] = __str53;
    HEAP[_strop_methods + 324] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_strop_methods + 332] = _upper__doc__;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
