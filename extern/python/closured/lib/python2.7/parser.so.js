"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 20;
  var $1___SIZE = 20;
  var $2___SIZE = 12;
  var $3___SIZE = 12;
  var $4___SIZE = 196;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyArena___SIZE = 0;
  var $struct_PyArena___FLATTENER = [];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyCodeObject___SIZE = 72;
  var $struct_PyCompilerFlags___SIZE = 4;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PyST_Object___SIZE = 20;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__arguments___SIZE = 16;
  var $struct__expr___SIZE = 32;
  var $struct__expr___FLATTENER = [ 0, 4, 24, 28 ];
  var $struct__mod___SIZE = 8;
  var $struct__slice___SIZE = 16;
  var $struct__typeobject___SIZE = 196;
  var $struct_anon___SIZE = 4;
  var $struct_arc___SIZE = 4;
  var $struct_asdl_int_seq___SIZE = 8;
  var $struct_asdl_seq___SIZE = 8;
  var $struct_dfa___SIZE = 24;
  var $struct_grammar___SIZE = 24;
  var $struct_grammar___FLATTENER = [ 0, 4, 8, 16, 20 ];
  var $struct_label___SIZE = 8;
  var $struct_labellist___SIZE = 8;
  var $struct_node___SIZE = 24;
  var $struct_perrdetail___SIZE = 28;
  var $struct_state___SIZE = 24;
  var $union_anon___SIZE = 4;
  var _parser_copyright_string;
  var _parser_doc_string;
  var _parser_version_string;
  var __str;
  var _parser_error;
  var __str1;
  var __str2;
  var _PyST_Type;
  var __str3;
  var _keywords_9350;
  var __str4;
  var __str5;
  var __str6;
  var __str7;
  var __str8;
  var __str9;
  var _keywords_9400;
  var __str10;
  var __str11;
  var __str12;
  var __str13;
  var _keywords_9451;
  var __str14;
  var __str15;
  var __str16;
  var __str17;
  var _keywords_9499;
  var __str18;
  var __str19;
  var _keywords_9525;
  var __str20;
  var _parser_methods;
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
  var _keywords_9566;
  var __str31;
  var __str32;
  var __str33;
  var __str34;
  var _keywords_9620;
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
  var __str83;
  var __str84;
  var __str85;
  var __str86;
  var __str87;
  var __str88;
  var __str89;
  var __str90;
  var __str91;
  var __str92;
  var __str93;
  var __str94;
  var __str95;
  var __str96;
  var __str97;
  var __str98;
  var __str99;
  var __str100;
  var __str101;
  var __str102;
  var __str103;
  var __str104;
  var __str105;
  var __str106;
  var __str107;
  var __str108;
  var __str109;
  var __str110;
  var __str111;
  var __str112;
  var __str113;
  var __str114;
  var __str115;
  var __str116;
  var __str117;
  var __str118;
  var __str119;
  var __str120;
  var __str121;
  var __str122;
  var __str123;
  var __str124;
  var __str125;
  var __str126;
  var __str127;
  var __str128;
  var __str129;
  var __str130;
  var __str131;
  var __str132;
  var __str133;
  var __str134;
  var __str135;
  var __str136;
  var __str137;
  var __str138;
  var __str139;
  var __str140;
  var __str141;
  var __str142;
  var __str143;
  var __str144;
  var __str145;
  var __str146;
  var __str147;
  var __str148;
  var __str149;
  var __str150;
  var __str151;
  var __str152;
  var __str153;
  var __str154;
  var __str155;
  var __str156;
  var __str157;
  var __str158;
  var __str159;
  var __str160;
  var __str161;
  var __str162;
  var __str163;
  var __str164;
  var __str165;
  var __str166;
  var __str167;
  var __str168;
  var __str169;
  var __str170;
  var __str171;
  var __str172;
  var __str173;
  var ___PRETTY_FUNCTION___13742;
  var __str174;
  var __str175;
  var __str176;
  var __str177;
  var __str178;
  var __str179;
  var __str180;
  var __str181;
  var __str182;
  var __str183;
  var __str184;
  var _pickle_constructor;
  var __str185;
  var __str186;
  var __str187;
  var _parser_functions;
  var __str188;
  var __str189;
  var __str190;
  var __str191;
  var __str192;
  var __str193;
  var __str194;
  var __str195;
  var __str196;
  var __str197;
  var __str198;
  var __str199;
  var __str200;
  var __str201;
  var __str202;
  var __str203;
  var __str204;
  var __str205;
  var __str206;
  var __str207;
  var __str208;
  var __str209;
  var __str210;
  var __str211;
  var __str212;
  var __str213;
  var __str214;
  var __str215;
  var __str216;
  var __str217;
  var __str218;
  function _node2tuple($n, $mkseq, $addelem, $lineno, $col_offset) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $n_addr = __stackBase__;
      var $mkseq_addr = __stackBase__ + 4;
      var $addelem_addr = __stackBase__ + 8;
      var $lineno_addr = __stackBase__ + 12;
      var $col_offset_addr = __stackBase__ + 16;
      var $retval = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $i = __stackBase__ + 28;
      var $v = __stackBase__ + 32;
      var $w = __stackBase__ + 36;
      var $result = __stackBase__ + 40;
      
      HEAP[$n_addr] = $n;
      HEAP[$mkseq_addr] = $mkseq;
      HEAP[$addelem_addr] = $addelem;
      HEAP[$lineno_addr] = $lineno;
      HEAP[$col_offset_addr] = $col_offset;
      
      
      if (HEAP[$n_addr] == 0) {
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
      __label__ = 27;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$n_addr]] > 255) {
        __label__ = 3;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      var $18 = HEAP[HEAP[$n_addr] + 16] + 1 + (HEAP[HEAP[$n_addr]] == 339);
      var $19 = HEAP[$mkseq_addr];
      var $20 = FUNCTION_TABLE[$19]($18);
      HEAP[$v] = $20;
      
      
      if (HEAP[$v] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $23 = HEAP[$v];
      HEAP[$0] = $23;
      __label__ = 27;
      break;
     case 5:
      
      
      
      var $27 = HEAP[HEAP[$n_addr]];
      var $28 = _PyInt_FromLong($27);
      HEAP[$w] = $28;
      
      
      if (HEAP[$w] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $34 = HEAP[HEAP[$v]] - 1;
      
      var $36 = HEAP[$v];
      HEAP[$36] = $34;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $45 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $46 = HEAP[$v];
      FUNCTION_TABLE[$45]($46);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 9:
      var $47 = HEAP[$addelem_addr];
      var $48 = HEAP[$v];
      var $49 = HEAP[$w];
      var $50 = FUNCTION_TABLE[$47]($48, 0, $49);
      HEAP[$i] = 0;
      __label__ = 15;
      break;
     case 10:
      
      
      
      
      var $55 = HEAP[HEAP[$n_addr] + 20] + 24 * HEAP[$i];
      var $56 = HEAP[$mkseq_addr];
      var $57 = HEAP[$addelem_addr];
      var $58 = HEAP[$lineno_addr];
      var $59 = HEAP[$col_offset_addr];
      var $60 = _node2tuple($55, $56, $57, $58, $59);
      HEAP[$w] = $60;
      
      
      if (HEAP[$w] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      var $66 = HEAP[HEAP[$v]] - 1;
      
      var $68 = HEAP[$v];
      HEAP[$68] = $66;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $77 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $78 = HEAP[$v];
      FUNCTION_TABLE[$77]($78);
      __label__ = 13;
      break;
     case 13:
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 14:
      
      var $80 = HEAP[$i] + 1;
      var $81 = HEAP[$addelem_addr];
      var $82 = HEAP[$v];
      var $83 = HEAP[$w];
      var $84 = FUNCTION_TABLE[$81]($82, $80, $83);
      
      var $86 = HEAP[$i] + 1;
      HEAP[$i] = $86;
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      
      if (HEAP[HEAP[$n_addr] + 16] > HEAP[$i]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      if (HEAP[HEAP[$n_addr]] == 339) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      var $98 = HEAP[HEAP[$n_addr] + 4];
      var $99 = _PyString_FromString($98);
      
      var $101 = HEAP[$i] + 1;
      var $102 = HEAP[$addelem_addr];
      var $103 = HEAP[$v];
      var $104 = FUNCTION_TABLE[$102]($103, $101, $99);
      __label__ = 18;
      break;
     case 18:
      var $105 = HEAP[$v];
      HEAP[$0] = $105;
      __label__ = 27;
      break;
     case 19:
      
      
      
      
      if (HEAP[HEAP[$n_addr]] <= 255) {
        __label__ = 20;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 20:
      
      
      
      var $113 = HEAP[$lineno_addr] + 2 + HEAP[$col_offset_addr];
      var $114 = HEAP[$mkseq_addr];
      var $115 = FUNCTION_TABLE[$114]($113);
      HEAP[$result] = $115;
      
      
      if (HEAP[$result] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 21:
      
      
      
      var $121 = HEAP[HEAP[$n_addr]];
      var $122 = _PyInt_FromLong($121);
      var $123 = HEAP[$addelem_addr];
      var $124 = HEAP[$result];
      var $125 = FUNCTION_TABLE[$123]($124, 0, $122);
      
      
      var $128 = HEAP[HEAP[$n_addr] + 4];
      var $129 = _PyString_FromString($128);
      var $130 = HEAP[$addelem_addr];
      var $131 = HEAP[$result];
      var $132 = FUNCTION_TABLE[$130]($131, 1, $129);
      
      
      if (HEAP[$lineno_addr] == 1) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      var $137 = HEAP[HEAP[$n_addr] + 8];
      var $138 = _PyInt_FromLong($137);
      var $139 = HEAP[$addelem_addr];
      var $140 = HEAP[$result];
      var $141 = FUNCTION_TABLE[$139]($140, 2, $138);
      __label__ = 23;
      break;
     case 23:
      
      
      if (HEAP[$col_offset_addr] == 1) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      var $146 = HEAP[HEAP[$n_addr] + 12];
      var $147 = _PyInt_FromLong($146);
      var $148 = HEAP[$addelem_addr];
      var $149 = HEAP[$result];
      var $150 = FUNCTION_TABLE[$148]($149, 3, $147);
      __label__ = 25;
      break;
     case 25:
      var $151 = HEAP[$result];
      HEAP[$0] = $151;
      __label__ = 27;
      break;
     case 26:
      var $152 = HEAP[_PyExc_SystemError];
      _PyErr_SetString($152, __str);
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 27:
      var $153 = HEAP[$0];
      HEAP[$retval] = $153;
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
  function _parser_compare_nodes($left, $right) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $left_addr = __stackBase__;
      var $right_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $j = __stackBase__ + 16;
      var $v = __stackBase__ + 20;
      
      HEAP[$left_addr] = $left;
      HEAP[$right_addr] = $right;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$left_addr]] < HEAP[HEAP[$right_addr]]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 16;
      break;
     case 2:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$right_addr]] < HEAP[HEAP[$left_addr]]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 1;
      __label__ = 16;
      break;
     case 4:
      
      
      
      
      if (HEAP[HEAP[$left_addr]] <= 255) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $21 = HEAP[HEAP[$right_addr] + 4];
      
      
      var $24 = HEAP[HEAP[$left_addr] + 4];
      var $25 = _strcmp($24, $21);
      HEAP[$0] = $25;
      __label__ = 16;
      break;
     case 6:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$left_addr] + 16] < HEAP[HEAP[$right_addr] + 16]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = -1;
      __label__ = 16;
      break;
     case 8:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$right_addr] + 16] < HEAP[HEAP[$left_addr] + 16]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = 1;
      __label__ = 16;
      break;
     case 10:
      HEAP[$j] = 0;
      __label__ = 14;
      break;
     case 11:
      
      
      
      
      var $44 = HEAP[HEAP[$right_addr] + 20] + 24 * HEAP[$j];
      
      
      
      
      var $49 = HEAP[HEAP[$left_addr] + 20] + 24 * HEAP[$j];
      var $50 = _parser_compare_nodes($49, $44);
      HEAP[$v] = $50;
      
      
      if (HEAP[$v] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $53 = HEAP[$v];
      HEAP[$0] = $53;
      __label__ = 16;
      break;
     case 13:
      
      var $55 = HEAP[$j] + 1;
      HEAP[$j] = $55;
      __label__ = 14;
      break;
     case 14:
      
      
      
      
      
      if (HEAP[HEAP[$left_addr] + 16] > HEAP[$j]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 16:
      var $61 = HEAP[$0];
      HEAP[$retval] = $61;
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
  function _parser_compare($left, $right) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $left_addr = __stackBase__;
      var $right_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$left_addr] = $left;
      HEAP[$right_addr] = $right;
      
      
      
      if (HEAP[$left_addr] == HEAP[$right_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 2:
      
      
      if (HEAP[$left_addr] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$right_addr] == 0) {
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
      
      
      var $10 = HEAP[HEAP[$right_addr] + 8];
      
      
      var $13 = HEAP[HEAP[$left_addr] + 8];
      var $14 = _parser_compare_nodes($13, $10);
      HEAP[$0] = $14;
      __label__ = 6;
      break;
     case 6:
      var $15 = HEAP[$0];
      HEAP[$retval] = $15;
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
  function _parser_newstobject($st, $type) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $st_addr = __stackBase__;
      var $type_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $o = __stackBase__ + 16;
      
      HEAP[$st_addr] = $st;
      HEAP[$type_addr] = $type;
      var $1 = __PyObject_New(_PyST_Type);
      
      HEAP[$o] = $1;
      
      
      if (HEAP[$o] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $6 = HEAP[$o] + 8;
      var $7 = HEAP[$st_addr];
      HEAP[$6] = $7;
      
      var $9 = HEAP[$o] + 12;
      var $10 = HEAP[$type_addr];
      HEAP[$9] = $10;
      
      
      var $13 = HEAP[$o] + 16;
      HEAP[$13] = 0;
      __label__ = 3;
      break;
     case 2:
      var $14 = HEAP[$st_addr];
      _PyNode_Free($14);
      __label__ = 3;
      break;
     case 3:
      
      var $16 = HEAP[$o];
      HEAP[$0] = $16;
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
  function _parser_free($st) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $st_addr = __stackBase__;
      
      HEAP[$st_addr] = $st;
      
      
      var $2 = HEAP[HEAP[$st_addr] + 8];
      _PyNode_Free($2);
      
      var $4 = HEAP[$st_addr];
      _PyObject_Free($4);
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parser_st2tuple($self, $args, $kw) {
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
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $line_option = __stackBase__ + 20;
      var $col_option = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      var $ok = __stackBase__ + 32;
      var $lineno = __stackBase__ + 36;
      var $col_offset = __stackBase__ + 40;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$line_option] = 0;
      HEAP[$col_option] = 0;
      HEAP[$res] = 0;
      
      
      if (HEAP[$self_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[$args_addr];
      var $4 = HEAP[$kw_addr];
      var $5 = _PyArg_ParseTupleAndKeywords($3, $4, __str3, _keywords_9350, allocate([ _PyST_Type, 0, 0, 0, $self_addr, 0, 0, 0, $line_option, 0, 0, 0, $col_option, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyST_Object**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ok] = $5;
      __label__ = 3;
      break;
     case 2:
      var $6 = HEAP[$args_addr];
      var $7 = HEAP[$kw_addr];
      var $8 = _PyArg_ParseTupleAndKeywords($6, $7, __str7, _keywords_9350 + 4, allocate([ $line_option, 0, 0, 0, $col_option, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ok] = $8;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$ok] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      HEAP[$lineno] = 0;
      HEAP[$col_offset] = 0;
      
      
      if (HEAP[$line_option] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $13 = HEAP[$line_option];
      var $14 = _PyObject_IsTrue($13);
      
      var $16 = $14 != 0;
      HEAP[$lineno] = $16;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$col_option] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $19 = HEAP[$col_option];
      var $20 = _PyObject_IsTrue($19);
      
      var $22 = $20 != 0;
      HEAP[$col_offset] = $22;
      __label__ = 8;
      break;
     case 8:
      
      
      var $25 = HEAP[HEAP[$self_addr] + 8];
      var $26 = HEAP[$lineno];
      var $27 = HEAP[$col_offset];
      var $28 = _node2tuple($25, FUNCTION_TABLE_OFFSET + 2, FUNCTION_TABLE_OFFSET + 4, $26, $27);
      HEAP[$res] = $28;
      __label__ = 9;
      break;
     case 9:
      var $29 = HEAP[$res];
      HEAP[$0] = $29;
      var $30 = HEAP[$0];
      HEAP[$retval] = $30;
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
  function _parser_ast2tuple($self, $args, $kw) {
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
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      
      
      if (HEAP[_Py_Py3kWarningFlag] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_DeprecationWarning];
      var $4 = _PyErr_WarnEx($3, __str8, 1);
      
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
      var $8 = HEAP[$kw_addr];
      var $9 = _parser_st2tuple($6, $7, $8);
      HEAP[$0] = $9;
      __label__ = 4;
      break;
     case 4:
      var $10 = HEAP[$0];
      HEAP[$retval] = $10;
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
  function _parser_st2list($self, $args, $kw) {
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
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $line_option = __stackBase__ + 20;
      var $col_option = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      var $ok = __stackBase__ + 32;
      var $lineno = __stackBase__ + 36;
      var $col_offset = __stackBase__ + 40;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$line_option] = 0;
      HEAP[$col_option] = 0;
      HEAP[$res] = 0;
      
      
      if (HEAP[$self_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[$args_addr];
      var $4 = HEAP[$kw_addr];
      var $5 = _PyArg_ParseTupleAndKeywords($3, $4, __str9, _keywords_9400, allocate([ _PyST_Type, 0, 0, 0, $self_addr, 0, 0, 0, $line_option, 0, 0, 0, $col_option, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyST_Object**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ok] = $5;
      __label__ = 3;
      break;
     case 2:
      var $6 = HEAP[$args_addr];
      var $7 = HEAP[$kw_addr];
      var $8 = _PyArg_ParseTupleAndKeywords($6, $7, __str10, _keywords_9400 + 4, allocate([ $line_option, 0, 0, 0, $col_option, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ok] = $8;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$ok] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      HEAP[$lineno] = 0;
      HEAP[$col_offset] = 0;
      
      
      if (HEAP[$line_option] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $13 = HEAP[$line_option];
      var $14 = _PyObject_IsTrue($13);
      
      var $16 = $14 != 0;
      HEAP[$lineno] = $16;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$col_option] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $19 = HEAP[$col_option];
      var $20 = _PyObject_IsTrue($19);
      
      var $22 = $20 != 0;
      HEAP[$col_offset] = $22;
      __label__ = 8;
      break;
     case 8:
      
      
      var $25 = HEAP[HEAP[$self_addr] + 8];
      var $26 = HEAP[$lineno];
      var $27 = HEAP[$col_offset];
      var $28 = _node2tuple($25, FUNCTION_TABLE_OFFSET + 6, FUNCTION_TABLE_OFFSET + 8, $26, $27);
      HEAP[$res] = $28;
      __label__ = 9;
      break;
     case 9:
      var $29 = HEAP[$res];
      HEAP[$0] = $29;
      var $30 = HEAP[$0];
      HEAP[$retval] = $30;
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
  function _parser_ast2list($self, $args, $kw) {
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
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      
      
      if (HEAP[_Py_Py3kWarningFlag] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_DeprecationWarning];
      var $4 = _PyErr_WarnEx($3, __str11, 1);
      
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
      var $8 = HEAP[$kw_addr];
      var $9 = _parser_st2list($6, $7, $8);
      HEAP[$0] = $9;
      __label__ = 4;
      break;
     case 4:
      var $10 = HEAP[$0];
      HEAP[$retval] = $10;
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
  function _parser_compilest($self, $args, $kw) {
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
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      var $arena = __stackBase__ + 24;
      var $mod = __stackBase__ + 28;
      var $str = __stackBase__ + 32;
      var $ok = __stackBase__ + 36;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$res] = 0;
      HEAP[$str] = __str12;
      
      
      if (HEAP[$self_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[$args_addr];
      var $4 = HEAP[$kw_addr];
      var $5 = _PyArg_ParseTupleAndKeywords($3, $4, __str13, _keywords_9451, allocate([ _PyST_Type, 0, 0, 0, $self_addr, 0, 0, 0, $str, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyST_Object**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ok] = $5;
      __label__ = 3;
      break;
     case 2:
      var $6 = HEAP[$args_addr];
      var $7 = HEAP[$kw_addr];
      var $8 = _PyArg_ParseTupleAndKeywords($6, $7, __str15, _keywords_9451 + 4, allocate([ $str, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ok] = $8;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$ok] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      var $11 = _PyArena_New();
      HEAP[$arena] = $11;
      
      
      if (HEAP[$arena] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $14 = HEAP[$str];
      
      var $16 = HEAP[$self_addr] + 16;
      
      
      var $19 = HEAP[HEAP[$self_addr] + 8];
      var $20 = HEAP[$arena];
      var $21 = _PyAST_FromNode($19, $16, $14, $20);
      HEAP[$mod] = $21;
      
      
      if (HEAP[$mod] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $25 = HEAP[$self_addr] + 16;
      var $26 = HEAP[$str];
      var $27 = HEAP[$mod];
      var $28 = HEAP[$arena];
      var $29 = _PyAST_Compile($27, $26, $25, $28);
      var $30 = $29;
      HEAP[$res] = $30;
      __label__ = 7;
      break;
     case 7:
      var $31 = HEAP[$arena];
      _PyArena_Free($31);
      __label__ = 8;
      break;
     case 8:
      var $32 = HEAP[$res];
      HEAP[$0] = $32;
      var $33 = HEAP[$0];
      HEAP[$retval] = $33;
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
  function _parser_compileast($self, $args, $kw) {
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
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      
      
      if (HEAP[_Py_Py3kWarningFlag] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_DeprecationWarning];
      var $4 = _PyErr_WarnEx($3, __str16, 1);
      
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
      var $8 = HEAP[$kw_addr];
      var $9 = _parser_compilest($6, $7, $8);
      HEAP[$0] = $9;
      __label__ = 4;
      break;
     case 4:
      var $10 = HEAP[$0];
      HEAP[$retval] = $10;
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
  function _parser_isexpr($self, $args, $kw) {
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
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $iftmp_26 = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      var $ok = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$res] = 0;
      
      
      if (HEAP[$self_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[$args_addr];
      var $4 = HEAP[$kw_addr];
      var $5 = _PyArg_ParseTupleAndKeywords($3, $4, __str17, _keywords_9499, allocate([ _PyST_Type, 0, 0, 0, $self_addr, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyST_Object**", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ok] = $5;
      __label__ = 3;
      break;
     case 2:
      var $6 = HEAP[$args_addr];
      var $7 = HEAP[$kw_addr];
      var $8 = _PyArg_ParseTupleAndKeywords($6, $7, __str18, _keywords_9499 + 4, allocate(1, "i32", ALLOC_STACK));
      HEAP[$ok] = $8;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$ok] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$iftmp_26] = __Py_TrueStruct;
      __label__ = 7;
      break;
     case 6:
      HEAP[$iftmp_26] = __Py_ZeroStruct;
      __label__ = 7;
      break;
     case 7:
      var $15 = HEAP[$iftmp_26];
      HEAP[$res] = $15;
      
      
      
      var $19 = HEAP[HEAP[$res]] + 1;
      
      var $21 = HEAP[$res];
      HEAP[$21] = $19;
      __label__ = 8;
      break;
     case 8:
      var $22 = HEAP[$res];
      HEAP[$0] = $22;
      var $23 = HEAP[$0];
      HEAP[$retval] = $23;
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
  function _parser_issuite($self, $args, $kw) {
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
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $iftmp_29 = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      var $ok = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$res] = 0;
      
      
      if (HEAP[$self_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[$args_addr];
      var $4 = HEAP[$kw_addr];
      var $5 = _PyArg_ParseTupleAndKeywords($3, $4, __str19, _keywords_9525, allocate([ _PyST_Type, 0, 0, 0, $self_addr, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyST_Object**", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ok] = $5;
      __label__ = 3;
      break;
     case 2:
      var $6 = HEAP[$args_addr];
      var $7 = HEAP[$kw_addr];
      var $8 = _PyArg_ParseTupleAndKeywords($6, $7, __str20, _keywords_9525 + 4, allocate(1, "i32", ALLOC_STACK));
      HEAP[$ok] = $8;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$ok] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$iftmp_29] = __Py_ZeroStruct;
      __label__ = 7;
      break;
     case 6:
      HEAP[$iftmp_29] = __Py_TrueStruct;
      __label__ = 7;
      break;
     case 7:
      var $15 = HEAP[$iftmp_29];
      HEAP[$res] = $15;
      
      
      
      var $19 = HEAP[HEAP[$res]] + 1;
      
      var $21 = HEAP[$res];
      HEAP[$21] = $19;
      __label__ = 8;
      break;
     case 8:
      var $22 = HEAP[$res];
      HEAP[$0] = $22;
      var $23 = HEAP[$0];
      HEAP[$retval] = $23;
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
  function _parser_getattr($self, $name) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $name_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$name_addr] = $name;
      var $1 = HEAP[$self_addr];
      var $2 = HEAP[$name_addr];
      var $3 = _Py_FindMethod(_parser_methods, $1, $2);
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
  function _err_string($message) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      
      HEAP[__stackBase__] = $message;
      var $0 = HEAP[_parser_error];
      var $1 = HEAP[__stackBase__];
      _PyErr_SetString($0, $1);
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parser_do_parse($args, $kw, $argspec, $type) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 72;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $args_addr = __stackBase__;
      var $kw_addr = __stackBase__ + 4;
      var $argspec_addr = __stackBase__ + 8;
      var $type_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $iftmp_32 = __stackBase__ + 24;
      var $string = __stackBase__ + 28;
      var $res = __stackBase__ + 32;
      var $flags = __stackBase__ + 36;
      var $err = __stackBase__ + 40;
      var $n = __stackBase__ + 68;
      
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$argspec_addr] = $argspec;
      HEAP[$type_addr] = $type;
      HEAP[$string] = 0;
      HEAP[$res] = 0;
      HEAP[$flags] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kw_addr];
      var $3 = HEAP[$argspec_addr];
      var $4 = _PyArg_ParseTupleAndKeywords($1, $2, $3, _keywords_9566, allocate([ $string, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($4 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      
      
      if (HEAP[$type_addr] == 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$iftmp_32] = 258;
      __label__ = 4;
      break;
     case 3:
      HEAP[$iftmp_32] = 257;
      __label__ = 4;
      break;
     case 4:
      var $8 = HEAP[$string];
      var $9 = HEAP[$iftmp_32];
      var $10 = _PyParser_ParseStringFlagsFilenameEx($8, 0, __PyParser_Grammar, $9, $err, $flags);
      HEAP[$n] = $10;
      
      
      if (HEAP[$n] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $13 = HEAP[$n];
      var $14 = HEAP[$type_addr];
      var $15 = _parser_newstobject($13, $14);
      HEAP[$res] = $15;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $21 = HEAP[$flags] & 253952;
      
      var $23 = HEAP[$res] + 16;
      HEAP[$23] = $21;
      __label__ = 7;
      break;
     case 7:
      __label__ = 9;
      break;
     case 8:
      _PyParser_SetError($err);
      __label__ = 9;
      break;
     case 9:
      var $24 = HEAP[$res];
      HEAP[$0] = $24;
      var $25 = HEAP[$0];
      HEAP[$retval] = $25;
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
  function _parser_expr($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kw_addr];
      var $3 = _parser_do_parse($1, $2, __str32, 1);
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
  function _parser_suite($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kw_addr];
      var $3 = _parser_do_parse($1, $2, __str33, 2);
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
  function _parser_tuple2st($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $st = __stackBase__ + 20;
      var $tuple = __stackBase__ + 24;
      var $tree = __stackBase__ + 28;
      var $start_sym = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$st] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kw_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str34, _keywords_9620, allocate([ $tuple, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$tuple];
      var $6 = _PySequence_Check($5);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($8, __str36);
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 4:
      var $9 = HEAP[$tuple];
      var $10 = _build_node_tree($9);
      HEAP[$tree] = $10;
      
      
      if (HEAP[$tree] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 5:
      
      
      
      var $16 = HEAP[HEAP[$tree]];
      HEAP[$start_sym] = $16;
      
      
      if (HEAP[$start_sym] == 258) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      var $19 = HEAP[$tree];
      var $20 = _validate_expr_tree($19);
      
      if ($20 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $22 = HEAP[$tree];
      var $23 = _parser_newstobject($22, 1);
      HEAP[$st] = $23;
      __label__ = 9;
      break;
     case 8:
      var $24 = HEAP[$tree];
      _PyNode_Free($24);
      __label__ = 9;
      break;
     case 9:
      __label__ = 21;
      break;
     case 10:
      
      
      if (HEAP[$start_sym] == 257) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      var $27 = HEAP[$tree];
      var $28 = _validate_file_input($27);
      
      if ($28 != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $30 = HEAP[$tree];
      var $31 = _parser_newstobject($30, 2);
      HEAP[$st] = $31;
      __label__ = 14;
      break;
     case 13:
      var $32 = HEAP[$tree];
      _PyNode_Free($32);
      __label__ = 14;
      break;
     case 14:
      __label__ = 21;
      break;
     case 15:
      
      
      if (HEAP[$start_sym] == 339) {
        __label__ = 16;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 16:
      var $35 = HEAP[$tree];
      var $36 = _validate_encoding_decl($35);
      
      if ($36 != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $38 = HEAP[$tree];
      var $39 = _parser_newstobject($38, 2);
      HEAP[$st] = $39;
      __label__ = 19;
      break;
     case 18:
      var $40 = HEAP[$tree];
      _PyNode_Free($40);
      __label__ = 19;
      break;
     case 19:
      __label__ = 21;
      break;
     case 20:
      var $41 = HEAP[$tree];
      _PyNode_Free($41);
      _err_string(__str37);
      __label__ = 21;
      break;
     case 21:
      
      
      if (HEAP[$st] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      var $44 = _PyErr_Occurred();
      
      if ($44 == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      _err_string(__str38);
      __label__ = 24;
      break;
     case 24:
      var $46 = HEAP[$st];
      HEAP[$0] = $46;
      __label__ = 25;
      break;
     case 25:
      var $47 = HEAP[$0];
      HEAP[$retval] = $47;
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
  function _parser_tuple2ast($self, $args, $kw) {
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
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      
      
      if (HEAP[_Py_Py3kWarningFlag] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_DeprecationWarning];
      var $4 = _PyErr_WarnEx($3, __str39, 1);
      
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
      var $8 = HEAP[$kw_addr];
      var $9 = _parser_tuple2st($6, $7, $8);
      HEAP[$0] = $9;
      __label__ = 4;
      break;
     case 4:
      var $10 = HEAP[$0];
      HEAP[$retval] = $10;
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
  function _build_node_children($tuple, $root, $line_num) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 84;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 84);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tuple_addr = __stackBase__;
      var $root_addr = __stackBase__ + 4;
      var $line_num_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $iftmp_48 = __stackBase__ + 16;
      var $iftmp_47 = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $len = __stackBase__ + 28;
      var $i = __stackBase__ + 32;
      var $err = __stackBase__ + 36;
      var $elem = __stackBase__ + 40;
      var $ok = __stackBase__ + 44;
      var $type = __stackBase__ + 48;
      var $strn = __stackBase__ + 52;
      var $temp = __stackBase__ + 56;
      var $err11 = __stackBase__ + 60;
      var $len20 = __stackBase__ + 64;
      var $temp21 = __stackBase__ + 68;
      var $o = __stackBase__ + 72;
      var $err53 = __stackBase__ + 76;
      var $new_child = __stackBase__ + 80;
      
      HEAP[$tuple_addr] = $tuple;
      HEAP[$root_addr] = $root;
      HEAP[$line_num_addr] = $line_num;
      var $1 = HEAP[$tuple_addr];
      var $2 = _PyObject_Size($1);
      HEAP[$len] = $2;
      HEAP[$i] = 1;
      __label__ = 74;
      break;
     case 1:
      var $3 = HEAP[$tuple_addr];
      var $4 = HEAP[$i];
      var $5 = _PySequence_GetItem($3, $4);
      HEAP[$elem] = $5;
      
      
      var $8 = HEAP[$elem] != 0;
      HEAP[$ok] = $8;
      HEAP[$type] = 0;
      HEAP[$strn] = 0;
      
      
      if (HEAP[$ok] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $11 = HEAP[$elem];
      var $12 = _PySequence_Check($11);
      HEAP[$ok] = $12;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$ok] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 4:
      var $15 = HEAP[$elem];
      var $16 = _PySequence_GetItem($15, 0);
      HEAP[$temp] = $16;
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$ok] = 0;
      __label__ = 10;
      break;
     case 6:
      
      
      
      
      
      
      
      var $26 = (HEAP[HEAP[HEAP[$temp] + 4] + 84] & 8388608) != 0;
      HEAP[$ok] = $26;
      
      
      if (HEAP[$ok] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      var $32 = HEAP[HEAP[$temp] + 8];
      HEAP[$type] = $32;
      __label__ = 8;
      break;
     case 8:
      
      
      
      var $36 = HEAP[HEAP[$temp]] - 1;
      
      var $38 = HEAP[$temp];
      HEAP[$38] = $36;
      
      
      
      
      if (HEAP[HEAP[$temp]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $47 = HEAP[HEAP[HEAP[$temp] + 4] + 24];
      var $48 = HEAP[$temp];
      FUNCTION_TABLE[$47]($48);
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 11:
      var $51 = HEAP[$elem];
      var $52 = _Py_BuildValue(__str40, allocate([ $51, 0, 0, 0, __str41, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$err11] = $52;
      var $53 = HEAP[_parser_error];
      var $54 = HEAP[$err11];
      _PyErr_SetObject($53, $54);
      
      
      if (HEAP[$err11] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      
      var $60 = HEAP[HEAP[$err11]] - 1;
      
      var $62 = HEAP[$err11];
      HEAP[$62] = $60;
      
      
      
      
      if (HEAP[HEAP[$err11]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $71 = HEAP[HEAP[HEAP[$err11] + 4] + 24];
      var $72 = HEAP[$err11];
      FUNCTION_TABLE[$71]($72);
      __label__ = 14;
      break;
     case 14:
      
      
      if (HEAP[$elem] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      var $78 = HEAP[HEAP[$elem]] - 1;
      
      var $80 = HEAP[$elem];
      HEAP[$80] = $78;
      
      
      
      
      if (HEAP[HEAP[$elem]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $89 = HEAP[HEAP[HEAP[$elem] + 4] + 24];
      var $90 = HEAP[$elem];
      FUNCTION_TABLE[$89]($90);
      __label__ = 17;
      break;
     case 17:
      HEAP[$0] = 0;
      __label__ = 76;
      break;
     case 18:
      
      
      if (HEAP[$type] <= 255) {
        __label__ = 19;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 19:
      var $93 = HEAP[$elem];
      var $94 = _PyObject_Size($93);
      HEAP[$len20] = $94;
      
      
      if (HEAP[$len20] != 2) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      
      
      if (HEAP[$len20] != 3) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      _err_string(__str42);
      HEAP[$0] = 0;
      __label__ = 76;
      break;
     case 22:
      var $99 = HEAP[$elem];
      var $100 = _PySequence_GetItem($99, 1);
      HEAP[$temp21] = $100;
      
      
      if (HEAP[$temp21] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      HEAP[$0] = 0;
      __label__ = 76;
      break;
     case 24:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$temp21] + 4] + 84] & 134217728) == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 25:
      
      
      
      
      var $114 = HEAP[HEAP[HEAP[$temp21] + 4] + 12];
      var $115 = HEAP[_parser_error];
      var $116 = _PyErr_Format($115, __str43, allocate([ $114, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      
      
      var $120 = HEAP[HEAP[$temp21]] - 1;
      
      var $122 = HEAP[$temp21];
      HEAP[$122] = $120;
      
      
      
      
      if (HEAP[HEAP[$temp21]] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $131 = HEAP[HEAP[HEAP[$temp21] + 4] + 24];
      var $132 = HEAP[$temp21];
      FUNCTION_TABLE[$131]($132);
      __label__ = 27;
      break;
     case 27:
      HEAP[$0] = 0;
      __label__ = 76;
      break;
     case 28:
      
      
      if (HEAP[$len20] == 3) {
        __label__ = 29;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 29:
      var $135 = HEAP[$elem];
      var $136 = _PySequence_GetItem($135, 2);
      HEAP[$o] = $136;
      
      
      if (HEAP[$o] != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 30:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$o] + 4] + 84] & 8388608) != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      var $149 = HEAP[HEAP[$o] + 8];
      var $150 = HEAP[$line_num_addr];
      HEAP[$150] = $149;
      
      
      
      var $154 = HEAP[HEAP[$o]] - 1;
      
      var $156 = HEAP[$o];
      HEAP[$156] = $154;
      
      
      
      
      if (HEAP[HEAP[$o]] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 32:
      
      
      
      
      var $165 = HEAP[HEAP[HEAP[$temp21] + 4] + 12];
      var $166 = HEAP[_parser_error];
      var $167 = _PyErr_Format($166, __str44, allocate([ $165, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      
      
      var $171 = HEAP[HEAP[$o]] - 1;
      
      var $173 = HEAP[$o];
      HEAP[$173] = $171;
      
      
      
      
      if (HEAP[HEAP[$o]] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $182 = HEAP[HEAP[HEAP[$o] + 4] + 24];
      var $183 = HEAP[$o];
      FUNCTION_TABLE[$182]($183);
      __label__ = 34;
      break;
     case 34:
      
      
      
      var $187 = HEAP[HEAP[$temp21]] - 1;
      
      var $189 = HEAP[$temp21];
      HEAP[$189] = $187;
      
      
      
      
      if (HEAP[HEAP[$temp21]] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $198 = HEAP[HEAP[HEAP[$temp21] + 4] + 24];
      var $199 = HEAP[$temp21];
      FUNCTION_TABLE[$198]($199);
      __label__ = 36;
      break;
     case 36:
      HEAP[$0] = 0;
      __label__ = 76;
      break;
     case 37:
      
      
      
      
      var $204 = HEAP[HEAP[HEAP[$o] + 4] + 24];
      var $205 = HEAP[$o];
      FUNCTION_TABLE[$204]($205);
      __label__ = 38;
      break;
     case 38:
      
      
      
      
      var $210 = HEAP[HEAP[$temp21] + 8] + 1;
      HEAP[$len20] = $210;
      
      
      if (HEAP[$len20] >= 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 39:
      
      
      if (HEAP[$len20] != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      var $215 = HEAP[$len20];
      HEAP[$iftmp_48] = $215;
      __label__ = 42;
      break;
     case 41:
      HEAP[$iftmp_48] = 1;
      __label__ = 42;
      break;
     case 42:
      var $216 = HEAP[$iftmp_48];
      var $217 = _malloc($216);
      HEAP[$iftmp_47] = $217;
      __label__ = 44;
      break;
     case 43:
      HEAP[$iftmp_47] = 0;
      __label__ = 44;
      break;
     case 44:
      var $218 = HEAP[$iftmp_47];
      HEAP[$strn] = $218;
      
      
      if (HEAP[$strn] != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      var $221 = HEAP[$len20];
      
      
      
      var $225 = HEAP[$temp21] + 20;
      var $226 = HEAP[$strn];
      _llvm_memcpy_p0i8_p0i8_i32($226, $225, $221, 1, 0);
      __label__ = 46;
      break;
     case 46:
      
      
      
      var $230 = HEAP[HEAP[$temp21]] - 1;
      
      var $232 = HEAP[$temp21];
      HEAP[$232] = $230;
      
      
      
      
      if (HEAP[HEAP[$temp21]] == 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      
      
      
      
      var $241 = HEAP[HEAP[HEAP[$temp21] + 4] + 24];
      var $242 = HEAP[$temp21];
      FUNCTION_TABLE[$241]($242);
      __label__ = 48;
      break;
     case 48:
      __label__ = 57;
      break;
     case 49:
      
      
      if (HEAP[$type] <= 255) {
        __label__ = 50;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 50:
      var $245 = HEAP[$elem];
      var $246 = _Py_BuildValue(__str40, allocate([ $245, 0, 0, 0, __str45, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$err53] = $246;
      var $247 = HEAP[_parser_error];
      var $248 = HEAP[$err53];
      _PyErr_SetObject($247, $248);
      
      
      if (HEAP[$err53] != 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 51:
      
      
      
      var $254 = HEAP[HEAP[$err53]] - 1;
      
      var $256 = HEAP[$err53];
      HEAP[$256] = $254;
      
      
      
      
      if (HEAP[HEAP[$err53]] == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      
      
      
      
      var $265 = HEAP[HEAP[HEAP[$err53] + 4] + 24];
      var $266 = HEAP[$err53];
      FUNCTION_TABLE[$265]($266);
      __label__ = 53;
      break;
     case 53:
      
      
      if (HEAP[$elem] != 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 54:
      
      
      
      var $272 = HEAP[HEAP[$elem]] - 1;
      
      var $274 = HEAP[$elem];
      HEAP[$274] = $272;
      
      
      
      
      if (HEAP[HEAP[$elem]] == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      
      
      
      
      var $283 = HEAP[HEAP[HEAP[$elem] + 4] + 24];
      var $284 = HEAP[$elem];
      FUNCTION_TABLE[$283]($284);
      __label__ = 56;
      break;
     case 56:
      HEAP[$0] = 0;
      __label__ = 76;
      break;
     case 57:
      
      var $286 = HEAP[HEAP[$line_num_addr]];
      var $287 = HEAP[$root_addr];
      var $288 = HEAP[$type];
      var $289 = HEAP[$strn];
      var $290 = _PyNode_AddChild($287, $288, $289, $286, 0);
      HEAP[$err] = $290;
      
      
      if (HEAP[$err] == 15) {
        __label__ = 58;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 58:
      var $293 = HEAP[$strn];
      _free($293);
      var $294 = _PyErr_NoMemory();
      
      HEAP[$0] = $294;
      __label__ = 76;
      break;
     case 59:
      
      
      if (HEAP[$err] == 19) {
        __label__ = 60;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 60:
      var $298 = HEAP[$strn];
      _free($298);
      var $299 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($299, __str46);
      HEAP[$0] = 0;
      __label__ = 76;
      break;
     case 61:
      
      
      if (HEAP[$type] > 255) {
        __label__ = 62;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 62:
      
      
      
      
      
      var $307 = HEAP[HEAP[$root_addr] + 20] + 24 * (HEAP[$i] - 1);
      HEAP[$new_child] = $307;
      var $308 = HEAP[$elem];
      var $309 = HEAP[$new_child];
      var $310 = HEAP[$line_num_addr];
      var $311 = _build_node_children($308, $309, $310);
      
      
      if ($311 != HEAP[$new_child]) {
        __label__ = 63;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 63:
      
      
      if (HEAP[$elem] != 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 64:
      
      
      
      var $319 = HEAP[HEAP[$elem]] - 1;
      
      var $321 = HEAP[$elem];
      HEAP[$321] = $319;
      
      
      
      
      if (HEAP[HEAP[$elem]] == 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      
      
      
      
      var $330 = HEAP[HEAP[HEAP[$elem] + 4] + 24];
      var $331 = HEAP[$elem];
      FUNCTION_TABLE[$330]($331);
      __label__ = 66;
      break;
     case 66:
      HEAP[$0] = 0;
      __label__ = 76;
      break;
     case 67:
      __label__ = 70;
      break;
     case 68:
      
      
      if (HEAP[$type] == 4) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      
      
      var $336 = HEAP[HEAP[$line_num_addr]] + 1;
      var $337 = HEAP[$line_num_addr];
      HEAP[$337] = $336;
      __label__ = 70;
      break;
     case 70:
      
      
      if (HEAP[$elem] != 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 71:
      
      
      
      var $343 = HEAP[HEAP[$elem]] - 1;
      
      var $345 = HEAP[$elem];
      HEAP[$345] = $343;
      
      
      
      
      if (HEAP[HEAP[$elem]] == 0) {
        __label__ = 72;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 72:
      
      
      
      
      var $354 = HEAP[HEAP[HEAP[$elem] + 4] + 24];
      var $355 = HEAP[$elem];
      FUNCTION_TABLE[$354]($355);
      __label__ = 73;
      break;
     case 73:
      
      var $357 = HEAP[$i] + 1;
      HEAP[$i] = $357;
      __label__ = 74;
      break;
     case 74:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 75;
        break;
      }
     case 75:
      var $361 = HEAP[$root_addr];
      HEAP[$0] = $361;
      __label__ = 76;
      break;
     case 76:
      var $362 = HEAP[$0];
      HEAP[$retval] = $362;
      __label__ = 77;
      break;
     case 77:
      var $retval80 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval80;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _build_node_tree($tuple) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tuple_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_56 = __stackBase__ + 12;
      var $iftmp_55 = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      var $temp = __stackBase__ + 24;
      var $num = __stackBase__ + 28;
      var $line_num = __stackBase__ + 32;
      var $encoding = __stackBase__ + 36;
      var $len = __stackBase__ + 40;
      var $err = __stackBase__ + 44;
      
      HEAP[$tuple_addr] = $tuple;
      HEAP[$res] = 0;
      var $1 = HEAP[$tuple_addr];
      var $2 = _PySequence_GetItem($1, 0);
      HEAP[$temp] = $2;
      HEAP[$num] = -1;
      
      
      if (HEAP[$temp] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[$temp];
      var $6 = _PyInt_AsLong($5);
      HEAP[$num] = $6;
      __label__ = 2;
      break;
     case 2:
      
      
      if (HEAP[$temp] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      var $12 = HEAP[HEAP[$temp]] - 1;
      
      var $14 = HEAP[$temp];
      HEAP[$14] = $12;
      
      
      
      
      if (HEAP[HEAP[$temp]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$temp] + 4] + 24];
      var $24 = HEAP[$temp];
      FUNCTION_TABLE[$23]($24);
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[$num] <= 255) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      var $27 = HEAP[$tuple_addr];
      var $28 = _Py_BuildValue(__str40, allocate([ $27, 0, 0, 0, __str47, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$tuple_addr] = $28;
      var $29 = HEAP[_parser_error];
      var $30 = HEAP[$tuple_addr];
      _PyErr_SetObject($29, $30);
      
      
      if (HEAP[$tuple_addr] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      var $36 = HEAP[HEAP[$tuple_addr]] - 1;
      
      var $38 = HEAP[$tuple_addr];
      HEAP[$38] = $36;
      
      
      
      
      if (HEAP[HEAP[$tuple_addr]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $47 = HEAP[HEAP[HEAP[$tuple_addr] + 4] + 24];
      var $48 = HEAP[$tuple_addr];
      FUNCTION_TABLE[$47]($48);
      __label__ = 9;
      break;
     case 9:
      __label__ = 34;
      break;
     case 10:
      
      
      if (HEAP[$num] > 255) {
        __label__ = 11;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 11:
      HEAP[$line_num] = 0;
      HEAP[$encoding] = 0;
      
      
      if (HEAP[$num] == 339) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $53 = HEAP[$tuple_addr];
      var $54 = _PySequence_GetItem($53, 2);
      HEAP[$encoding] = $54;
      var $55 = HEAP[$tuple_addr];
      var $56 = _PySequence_GetSlice($55, 0, 2);
      HEAP[$tuple_addr] = $56;
      __label__ = 13;
      break;
     case 13:
      var $57 = HEAP[$num];
      var $58 = _PyNode_New($57);
      HEAP[$res] = $58;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 14:
      var $61 = HEAP[$tuple_addr];
      var $62 = HEAP[$res];
      var $63 = _build_node_children($61, $62, $line_num);
      
      
      if ($63 != HEAP[$res]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $66 = HEAP[$res];
      _PyNode_Free($66);
      HEAP[$res] = 0;
      __label__ = 16;
      break;
     case 16:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 17:
      
      
      if (HEAP[$encoding] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 18:
      
      
      
      
      var $75 = HEAP[HEAP[$encoding] + 8] + 1;
      HEAP[$len] = $75;
      
      
      if (HEAP[$len] >= 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 19:
      
      
      if (HEAP[$len] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $80 = HEAP[$len];
      HEAP[$iftmp_56] = $80;
      __label__ = 22;
      break;
     case 21:
      HEAP[$iftmp_56] = 1;
      __label__ = 22;
      break;
     case 22:
      var $81 = HEAP[$iftmp_56];
      var $82 = _malloc($81);
      HEAP[$iftmp_55] = $82;
      __label__ = 24;
      break;
     case 23:
      HEAP[$iftmp_55] = 0;
      __label__ = 24;
      break;
     case 24:
      
      var $84 = HEAP[$res] + 4;
      var $85 = HEAP[$iftmp_55];
      HEAP[$84] = $85;
      
      
      
      
      if (HEAP[HEAP[$res] + 4] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $90 = HEAP[$len];
      
      
      
      var $94 = HEAP[$encoding] + 20;
      
      
      var $97 = HEAP[HEAP[$res] + 4];
      _llvm_memcpy_p0i8_p0i8_i32($97, $94, $90, 1, 0);
      __label__ = 26;
      break;
     case 26:
      
      
      
      var $101 = HEAP[HEAP[$encoding]] - 1;
      
      var $103 = HEAP[$encoding];
      HEAP[$103] = $101;
      
      
      
      
      if (HEAP[HEAP[$encoding]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $112 = HEAP[HEAP[HEAP[$encoding] + 4] + 24];
      var $113 = HEAP[$encoding];
      FUNCTION_TABLE[$112]($113);
      __label__ = 28;
      break;
     case 28:
      
      
      
      var $117 = HEAP[HEAP[$tuple_addr]] - 1;
      
      var $119 = HEAP[$tuple_addr];
      HEAP[$119] = $117;
      
      
      
      
      if (HEAP[HEAP[$tuple_addr]] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $128 = HEAP[HEAP[HEAP[$tuple_addr] + 4] + 24];
      var $129 = HEAP[$tuple_addr];
      FUNCTION_TABLE[$128]($129);
      __label__ = 30;
      break;
     case 30:
      __label__ = 34;
      break;
     case 31:
      var $130 = HEAP[$tuple_addr];
      var $131 = _Py_BuildValue(__str40, allocate([ $130, 0, 0, 0, __str48, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$err] = $131;
      var $132 = HEAP[_parser_error];
      var $133 = HEAP[$err];
      _PyErr_SetObject($132, $133);
      
      
      if (HEAP[$err] != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 32:
      
      
      
      var $139 = HEAP[HEAP[$err]] - 1;
      
      var $141 = HEAP[$err];
      HEAP[$141] = $139;
      
      
      
      
      if (HEAP[HEAP[$err]] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $150 = HEAP[HEAP[HEAP[$err] + 4] + 24];
      var $151 = HEAP[$err];
      FUNCTION_TABLE[$150]($151);
      __label__ = 34;
      break;
     case 34:
      var $152 = HEAP[$res];
      HEAP[$0] = $152;
      var $153 = HEAP[$0];
      HEAP[$retval] = $153;
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
  function _validate_ntype($n, $t) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $n_addr = __stackBase__;
      var $t_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$n_addr] = $n;
      HEAP[$t_addr] = $t;
      
      
      
      
      
      
      if (HEAP[HEAP[$n_addr]] != HEAP[$t_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $10 = HEAP[HEAP[$n_addr]];
      var $11 = HEAP[_parser_error];
      var $12 = HEAP[$t_addr];
      var $13 = _PyErr_Format($11, __str49, allocate([ $12, 0, 0, 0, $10, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 2:
      HEAP[$0] = 1;
      __label__ = 3;
      break;
     case 3:
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
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
  function _validate_numnodes($n, $num, $name) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $n_addr = __stackBase__;
      var $num_addr = __stackBase__ + 4;
      var $name_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$n_addr] = $n;
      HEAP[$num_addr] = $num;
      HEAP[$name_addr] = $name;
      
      
      
      
      
      if (HEAP[HEAP[$n_addr] + 16] != HEAP[$num_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $6 = HEAP[_parser_error];
      var $7 = HEAP[$name_addr];
      var $8 = _PyErr_Format($6, __str50, allocate([ $7, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 2:
      HEAP[$0] = 1;
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
  function _validate_terminal($terminal, $type, $string) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $terminal_addr = __stackBase__;
      var $type_addr = __stackBase__ + 4;
      var $string_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $iftmp_62 = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      
      HEAP[$terminal_addr] = $terminal;
      HEAP[$type_addr] = $type;
      HEAP[$string_addr] = $string;
      var $1 = HEAP[$terminal_addr];
      var $2 = HEAP[$type_addr];
      var $3 = _validate_ntype($1, $2);
      
      if ($3 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$string_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $9 = HEAP[HEAP[$terminal_addr] + 4];
      var $10 = HEAP[$string_addr];
      var $11 = _strcmp($10, $9);
      
      if ($11 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$iftmp_62] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_62] = 0;
      __label__ = 5;
      break;
     case 5:
      var $13 = HEAP[$iftmp_62];
      HEAP[$res] = $13;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      var $16 = _PyErr_Occurred();
      
      if ($16 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $18 = HEAP[_parser_error];
      var $19 = HEAP[$string_addr];
      var $20 = _PyErr_Format($18, __str51, allocate([ $19, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 8;
      break;
     case 8:
      var $21 = HEAP[$res];
      HEAP[$0] = $21;
      var $22 = HEAP[$0];
      HEAP[$retval] = $22;
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
  function _validate_repeating_list($tree, $ntype, $vfunc, $name) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $ntype_addr = __stackBase__ + 4;
      var $vfunc_addr = __stackBase__ + 8;
      var $name_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $iftmp_65 = __stackBase__ + 24;
      var $iftmp_64 = __stackBase__ + 28;
      var $nch = __stackBase__ + 32;
      var $res = __stackBase__ + 36;
      var $pos = __stackBase__ + 40;
      
      HEAP[$tree_addr] = $tree;
      HEAP[$ntype_addr] = $ntype;
      HEAP[$vfunc_addr] = $vfunc;
      HEAP[$name_addr] = $name;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      
      
      if (HEAP[$nch] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $6 = HEAP[$tree_addr];
      var $7 = HEAP[$ntype_addr];
      var $8 = _validate_ntype($6, $7);
      
      if ($8 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[HEAP[$tree_addr] + 20];
      var $14 = HEAP[$vfunc_addr];
      var $15 = FUNCTION_TABLE[$14]($13);
      
      if ($15 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$iftmp_64] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_64] = 0;
      __label__ = 5;
      break;
     case 5:
      var $17 = HEAP[$iftmp_64];
      HEAP[$res] = $17;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $20 = _PyErr_Occurred();
      
      if ($20 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $22 = HEAP[$tree_addr];
      var $23 = HEAP[$name_addr];
      var $24 = _validate_numnodes($22, 1, $23);
      __label__ = 20;
      break;
     case 8:
      
      
      
      if ((HEAP[$nch] & 1) == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      var $30 = HEAP[HEAP[$tree_addr] + 20];
      
      var $32 = HEAP[$nch] - 1;
      HEAP[$nch] = $32;
      
      var $34 = $30 + 24 * HEAP[$nch];
      var $35 = _validate_terminal($34, 12, __str52);
      HEAP[$res] = $35;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 11:
      
      
      if (HEAP[$nch] > 1) {
        __label__ = 12;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 12:
      HEAP[$pos] = 1;
      __label__ = 18;
      break;
     case 13:
      
      
      
      
      var $44 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos];
      var $45 = _validate_terminal($44, 12, __str52);
      
      if ($45 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      
      var $52 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$pos] + 1);
      var $53 = HEAP[$vfunc_addr];
      var $54 = FUNCTION_TABLE[$53]($52);
      
      if ($54 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      HEAP[$iftmp_65] = 1;
      __label__ = 17;
      break;
     case 16:
      HEAP[$iftmp_65] = 0;
      __label__ = 17;
      break;
     case 17:
      var $56 = HEAP[$iftmp_65];
      HEAP[$res] = $56;
      
      var $58 = HEAP[$pos] + 2;
      HEAP[$pos] = $58;
      __label__ = 18;
      break;
     case 18:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      if (HEAP[$pos] < HEAP[$nch]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      var $64 = HEAP[$res];
      HEAP[$0] = $64;
      var $65 = HEAP[$0];
      HEAP[$retval] = $65;
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
  function _validate_class($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_69 = __stackBase__ + 12;
      var $iftmp_68 = __stackBase__ + 16;
      var $iftmp_67 = __stackBase__ + 20;
      var $iftmp_66 = __stackBase__ + 24;
      var $nch = __stackBase__ + 28;
      var $res = __stackBase__ + 32;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 329);
      
      if ($5 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 4) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] == 6) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$nch] == 7) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$iftmp_66] = 1;
      __label__ = 6;
      break;
     case 5:
      HEAP[$iftmp_66] = 0;
      __label__ = 6;
      break;
     case 6:
      var $13 = HEAP[$iftmp_66];
      HEAP[$res] = $13;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 7:
      
      
      
      var $19 = HEAP[HEAP[$tree_addr] + 20];
      var $20 = _validate_terminal($19, 1, __str53);
      
      if ($20 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      var $25 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $26 = _validate_ntype($25, 1);
      
      if ($26 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      var $33 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 2);
      var $34 = _validate_terminal($33, 11, __str54);
      
      if ($34 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      var $41 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 1);
      var $42 = _validate_suite($41);
      
      if ($42 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      HEAP[$iftmp_67] = 1;
      __label__ = 13;
      break;
     case 12:
      HEAP[$iftmp_67] = 0;
      __label__ = 13;
      break;
     case 13:
      var $44 = HEAP[$iftmp_67];
      HEAP[$res] = $44;
      __label__ = 15;
      break;
     case 14:
      var $45 = HEAP[$tree_addr];
      var $46 = _validate_numnodes($45, 4, __str53);
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 16:
      
      
      if (HEAP[$nch] == 7) {
        __label__ = 17;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 17:
      
      
      
      var $54 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $55 = _validate_terminal($54, 7, __str55);
      
      if ($55 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      var $60 = HEAP[HEAP[$tree_addr] + 20] + 72;
      var $61 = _validate_testlist($60);
      
      if ($61 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      var $66 = HEAP[HEAP[$tree_addr] + 20] + 96;
      var $67 = _validate_terminal($66, 8, __str56);
      
      if ($67 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      HEAP[$iftmp_68] = 1;
      __label__ = 22;
      break;
     case 21:
      HEAP[$iftmp_68] = 0;
      __label__ = 22;
      break;
     case 22:
      var $69 = HEAP[$iftmp_68];
      HEAP[$res] = $69;
      __label__ = 29;
      break;
     case 23:
      
      
      if (HEAP[$nch] == 6) {
        __label__ = 24;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 24:
      
      
      
      var $75 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $76 = _validate_terminal($75, 7, __str55);
      
      if ($76 == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      var $81 = HEAP[HEAP[$tree_addr] + 20] + 72;
      var $82 = _validate_terminal($81, 8, __str56);
      
      if ($82 == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      HEAP[$iftmp_69] = 1;
      __label__ = 28;
      break;
     case 27:
      HEAP[$iftmp_69] = 0;
      __label__ = 28;
      break;
     case 28:
      var $84 = HEAP[$iftmp_69];
      HEAP[$res] = $84;
      __label__ = 29;
      break;
     case 29:
      var $85 = HEAP[$res];
      HEAP[$0] = $85;
      var $86 = HEAP[$0];
      HEAP[$retval] = $86;
      __label__ = 30;
      break;
     case 30:
      var $retval29 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval29;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_if($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_73 = __stackBase__ + 12;
      var $iftmp_71 = __stackBase__ + 16;
      var $iftmp_70 = __stackBase__ + 20;
      var $nch = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      var $j = __stackBase__ + 32;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 293);
      
      if ($5 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] <= 3) {
        __label__ = 7;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $12 = HEAP[HEAP[$tree_addr] + 20];
      var $13 = _validate_terminal($12, 1, __str57);
      
      if ($13 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $18 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $19 = _validate_test($18);
      
      if ($19 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $24 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $25 = _validate_terminal($24, 11, __str54);
      
      if ($25 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $30 = HEAP[HEAP[$tree_addr] + 20] + 72;
      var $31 = _validate_suite($30);
      
      if ($31 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      HEAP[$iftmp_70] = 1;
      __label__ = 8;
      break;
     case 7:
      HEAP[$iftmp_70] = 0;
      __label__ = 8;
      break;
     case 8:
      var $33 = HEAP[$iftmp_70];
      HEAP[$res] = $33;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      if (HEAP[$nch] % 4 != 3) {
        __label__ = 16;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      var $44 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 3);
      var $45 = _validate_terminal($44, 1, __str58);
      
      if ($45 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      var $52 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 2);
      var $53 = _validate_terminal($52, 11, __str54);
      
      if ($53 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      var $60 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 1);
      var $61 = _validate_suite($60);
      
      if ($61 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      HEAP[$iftmp_71] = 1;
      __label__ = 15;
      break;
     case 14:
      HEAP[$iftmp_71] = 0;
      __label__ = 15;
      break;
     case 15:
      var $63 = HEAP[$iftmp_71];
      HEAP[$res] = $63;
      
      var $65 = HEAP[$nch] - 3;
      HEAP[$nch] = $65;
      __label__ = 19;
      break;
     case 16:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      var $68 = _PyErr_Occurred();
      
      if ($68 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $70 = HEAP[$tree_addr];
      var $71 = _validate_numnodes($70, 4, __str57);
      __label__ = 19;
      break;
     case 19:
      
      
      
      if ((HEAP[$nch] & 3) != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $75 = HEAP[$tree_addr];
      var $76 = _validate_numnodes($75, 0, __str57);
      HEAP[$res] = $76;
      __label__ = 33;
      break;
     case 21:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 22:
      
      
      if (HEAP[$nch] > 4) {
        __label__ = 23;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 23:
      HEAP[$j] = 4;
      __label__ = 31;
      break;
     case 24:
      
      
      
      
      var $85 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$j];
      var $86 = _validate_terminal($85, 1, __str59);
      
      if ($86 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      var $93 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$j] + 2);
      var $94 = _validate_terminal($93, 11, __str54);
      
      if ($94 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      
      var $101 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$j] + 1);
      var $102 = _validate_test($101);
      
      if ($102 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      
      var $109 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$j] + 3);
      var $110 = _validate_suite($109);
      
      if ($110 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      HEAP[$iftmp_73] = 1;
      __label__ = 30;
      break;
     case 29:
      HEAP[$iftmp_73] = 0;
      __label__ = 30;
      break;
     case 30:
      var $112 = HEAP[$iftmp_73];
      HEAP[$res] = $112;
      
      var $114 = HEAP[$j] + 4;
      HEAP[$j] = $114;
      __label__ = 31;
      break;
     case 31:
      
      
      
      if (HEAP[$j] >= HEAP[$nch]) {
        __label__ = 33;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      var $120 = HEAP[$res];
      HEAP[$0] = $120;
      var $121 = HEAP[$0];
      HEAP[$retval] = $121;
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
  function _validate_parameters($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_75 = __stackBase__ + 12;
      var $iftmp_74 = __stackBase__ + 16;
      var $nch = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 263);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] == 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$iftmp_74] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_74] = 0;
      __label__ = 5;
      break;
     case 5:
      var $11 = HEAP[$iftmp_74];
      HEAP[$res] = $11;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 6:
      
      
      
      var $17 = HEAP[HEAP[$tree_addr] + 20];
      var $18 = _validate_terminal($17, 7, __str55);
      
      if ($18 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      var $25 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 1);
      var $26 = _validate_terminal($25, 8, __str56);
      
      if ($26 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      HEAP[$iftmp_75] = 1;
      __label__ = 10;
      break;
     case 9:
      HEAP[$iftmp_75] = 0;
      __label__ = 10;
      break;
     case 10:
      var $28 = HEAP[$iftmp_75];
      HEAP[$res] = $28;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      if (HEAP[$nch] == 3) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      var $36 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $37 = _validate_varargslist($36);
      HEAP[$res] = $37;
      __label__ = 13;
      break;
     case 13:
      __label__ = 15;
      break;
     case 14:
      var $38 = HEAP[$tree_addr];
      var $39 = _validate_numnodes($38, 2, __str60);
      __label__ = 15;
      break;
     case 15:
      var $40 = HEAP[$res];
      HEAP[$0] = $40;
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
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
  function _validate_suite($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_77 = __stackBase__ + 12;
      var $iftmp_76 = __stackBase__ + 16;
      var $nch = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      var $i = __stackBase__ + 28;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 300);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] > 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$iftmp_76] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_76] = 0;
      __label__ = 5;
      break;
     case 5:
      var $11 = HEAP[$iftmp_76];
      HEAP[$res] = $11;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if (HEAP[$nch] != 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $19 = HEAP[HEAP[$tree_addr] + 20];
      var $20 = _validate_simple_stmt($19);
      HEAP[$res] = $20;
      __label__ = 24;
      break;
     case 8:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 9:
      
      
      
      var $26 = HEAP[HEAP[$tree_addr] + 20];
      var $27 = _validate_terminal($26, 4, 0);
      
      if ($27 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $32 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $33 = _validate_terminal($32, 5, 0);
      
      if ($33 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      var $38 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $39 = _validate_stmt($38);
      
      if ($39 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      var $46 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 1);
      var $47 = _validate_terminal($46, 6, __str61);
      
      if ($47 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      HEAP[$iftmp_77] = 1;
      __label__ = 15;
      break;
     case 14:
      HEAP[$iftmp_77] = 0;
      __label__ = 15;
      break;
     case 15:
      var $49 = HEAP[$iftmp_77];
      HEAP[$res] = $49;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      if (HEAP[$nch] <= 4) {
        __label__ = 22;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      HEAP[$i] = 3;
      
      var $55 = HEAP[$nch] - 1;
      HEAP[$nch] = $55;
      __label__ = 19;
      break;
     case 18:
      
      
      
      
      var $60 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $61 = _validate_stmt($60);
      HEAP[$res] = $61;
      
      var $63 = HEAP[$i] + 1;
      HEAP[$i] = $63;
      __label__ = 19;
      break;
     case 19:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      if (HEAP[$i] < HEAP[$nch]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      __label__ = 24;
      break;
     case 22:
      
      
      if (HEAP[$nch] <= 3) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      var $71 = HEAP[$tree_addr];
      var $72 = _validate_numnodes($71, 4, __str62);
      HEAP[$res] = $72;
      __label__ = 24;
      break;
     case 24:
      var $73 = HEAP[$res];
      HEAP[$0] = $73;
      var $74 = HEAP[$0];
      HEAP[$retval] = $74;
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
  function _validate_testlist($tree) {
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
      
      HEAP[__stackBase__] = $tree;
      var $1 = HEAP[__stackBase__];
      var $2 = _validate_repeating_list($1, 327, FUNCTION_TABLE_OFFSET + 10, __str63);
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
  function _validate_testlist1($tree) {
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
      
      HEAP[__stackBase__] = $tree;
      var $1 = HEAP[__stackBase__];
      var $2 = _validate_repeating_list($1, 338, FUNCTION_TABLE_OFFSET + 10, __str64);
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
  function _validate_testlist_safe($tree) {
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
      
      HEAP[__stackBase__] = $tree;
      var $1 = HEAP[__stackBase__];
      var $2 = _validate_repeating_list($1, 301, FUNCTION_TABLE_OFFSET + 12, __str65);
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
  function _validate_varargslist_trailer($tree, $start) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $start_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_78 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $nch = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      var $sym = __stackBase__ + 28;
      
      HEAP[$tree_addr] = $tree;
      HEAP[$start_addr] = $start;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      HEAP[$res] = 0;
      
      
      
      if (HEAP[$nch] <= HEAP[$start_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      _err_string(__str66);
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 2:
      
      
      
      
      
      
      
      var $14 = HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$start_addr]];
      HEAP[$sym] = $14;
      
      
      if (HEAP[$sym] == 16) {
        __label__ = 3;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 3:
      
      
      
      
      if (HEAP[$nch] - HEAP[$start_addr] == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      var $26 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$start_addr] + 1);
      var $27 = _validate_terminal($26, 1, 0);
      HEAP[$res] = $27;
      __label__ = 13;
      break;
     case 5:
      
      
      
      
      if (HEAP[$nch] - HEAP[$start_addr] == 5) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 6:
      
      
      
      
      
      var $37 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$start_addr] + 1);
      var $38 = _validate_terminal($37, 1, 0);
      
      if ($38 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      var $45 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$start_addr] + 2);
      var $46 = _validate_terminal($45, 12, __str52);
      
      if ($46 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      var $53 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$start_addr] + 3);
      var $54 = _validate_terminal($53, 36, __str67);
      
      if ($54 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      var $61 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$start_addr] + 4);
      var $62 = _validate_terminal($61, 1, 0);
      
      if ($62 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      HEAP[$iftmp_78] = 1;
      __label__ = 12;
      break;
     case 11:
      HEAP[$iftmp_78] = 0;
      __label__ = 12;
      break;
     case 12:
      var $64 = HEAP[$iftmp_78];
      HEAP[$res] = $64;
      __label__ = 13;
      break;
     case 13:
      __label__ = 17;
      break;
     case 14:
      
      
      if (HEAP[$sym] == 36) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      
      if (HEAP[$nch] - HEAP[$start_addr] == 2) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      var $76 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$start_addr] + 1);
      var $77 = _validate_terminal($76, 1, 0);
      HEAP[$res] = $77;
      __label__ = 17;
      break;
     case 17:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      _err_string(__str68);
      __label__ = 19;
      break;
     case 19:
      var $80 = HEAP[$res];
      HEAP[$0] = $80;
      __label__ = 20;
      break;
     case 20:
      var $81 = HEAP[$0];
      HEAP[$retval] = $81;
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
  function _validate_varargslist($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $iftmp_83 = __stackBase__ + 8;
      var $iftmp_82 = __stackBase__ + 12;
      var $iftmp_81 = __stackBase__ + 16;
      var $iftmp_80 = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $iftmp_79 = __stackBase__ + 28;
      var $nch = __stackBase__ + 32;
      var $res = __stackBase__ + 36;
      var $sym = __stackBase__ + 40;
      var $i = __stackBase__ + 44;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 264);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[$iftmp_79] = 1;
      __label__ = 4;
      break;
     case 3:
      HEAP[$iftmp_79] = 0;
      __label__ = 4;
      break;
     case 4:
      var $9 = HEAP[$iftmp_79];
      HEAP[$res] = $9;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 65;
      break;
     case 6:
      
      
      if (HEAP[$nch] <= 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _err_string(__str69);
      HEAP[$0] = 0;
      __label__ = 65;
      break;
     case 8:
      
      
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[$tree_addr] + 20]];
      HEAP[$sym] = $20;
      
      
      if (HEAP[$sym] == 16) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$sym] == 36) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $25 = HEAP[$tree_addr];
      var $26 = _validate_varargslist_trailer($25, 0);
      HEAP[$res] = $26;
      __label__ = 64;
      break;
     case 11:
      
      
      if (HEAP[$sym] == 265) {
        __label__ = 12;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 12:
      HEAP[$i] = 0;
      
      
      
      
      
      
      
      
      var $37 = HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 1)];
      HEAP[$sym] = $37;
      
      
      if (HEAP[$sym] == 1) {
        __label__ = 13;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 13:
      __label__ = 29;
      break;
     case 14:
      
      
      
      
      var $44 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $45 = _validate_fpdef($44);
      HEAP[$res] = $45;
      
      var $47 = HEAP[$i] + 1;
      HEAP[$i] = $47;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i]] == 22) {
        __label__ = 16;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 16:
      
      
      
      
      if (HEAP[$i] + 2 <= HEAP[$nch]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 17:
      
      
      
      
      var $66 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $67 = _validate_terminal($66, 22, __str70);
      
      if ($67 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      var $74 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 1);
      var $75 = _validate_test($74);
      
      if ($75 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      HEAP[$iftmp_80] = 1;
      __label__ = 21;
      break;
     case 20:
      HEAP[$iftmp_80] = 0;
      __label__ = 21;
      break;
     case 21:
      var $77 = HEAP[$iftmp_80];
      HEAP[$res] = $77;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      var $81 = HEAP[$i] + 2;
      HEAP[$i] = $81;
      __label__ = 23;
      break;
     case 23:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 24:
      
      
      
      if (HEAP[$i] < HEAP[$nch]) {
        __label__ = 25;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 25:
      
      
      
      
      var $91 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $92 = _validate_terminal($91, 12, __str52);
      HEAP[$res] = $92;
      
      var $94 = HEAP[$i] + 1;
      HEAP[$i] = $94;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 26:
      
      
      
      if (HEAP[$i] < HEAP[$nch]) {
        __label__ = 27;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 27:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i]] == 36) {
        __label__ = 31;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i]] == 16) {
        __label__ = 31;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      
      if (HEAP[$i] + 2 <= HEAP[$nch]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      var $124 = HEAP[$tree_addr];
      var $125 = HEAP[$i];
      var $126 = _validate_varargslist_trailer($124, $125);
      HEAP[$res] = $126;
      __label__ = 33;
      break;
     case 33:
      __label__ = 64;
      break;
     case 34:
      
      
      if (HEAP[$sym] == 12) {
        __label__ = 35;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 35:
      
      
      
      
      
      var $134 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 1);
      var $135 = _validate_terminal($134, 12, __str52);
      HEAP[$res] = $135;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      HEAP[$0] = 0;
      __label__ = 65;
      break;
     case 37:
      
      var $139 = HEAP[$nch] - 1;
      HEAP[$nch] = $139;
      __label__ = 38;
      break;
     case 38:
      
      
      
      var $143 = HEAP[HEAP[$tree_addr] + 20];
      var $144 = _validate_fpdef($143);
      HEAP[$res] = $144;
      
      var $146 = HEAP[$i] + 1;
      HEAP[$i] = $146;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 39:
      
      
      
      
      if (HEAP[$i] + 2 <= HEAP[$nch]) {
        __label__ = 40;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 40:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i]] == 22) {
        __label__ = 41;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 41:
      
      
      
      
      var $165 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $166 = _validate_terminal($165, 22, __str70);
      
      if ($166 == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      
      
      
      
      
      var $173 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 1);
      var $174 = _validate_test($173);
      
      if ($174 == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      HEAP[$iftmp_81] = 1;
      __label__ = 45;
      break;
     case 44:
      HEAP[$iftmp_81] = 0;
      __label__ = 45;
      break;
     case 45:
      var $176 = HEAP[$iftmp_81];
      HEAP[$res] = $176;
      
      var $178 = HEAP[$i] + 2;
      HEAP[$i] = $178;
      __label__ = 46;
      break;
     case 46:
      __label__ = 59;
      break;
     case 47:
      
      
      
      
      var $183 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $184 = _validate_terminal($183, 12, __str52);
      
      if ($184 == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      
      
      
      
      
      var $191 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 1);
      var $192 = _validate_fpdef($191);
      
      if ($192 == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 49:
      HEAP[$iftmp_82] = 1;
      __label__ = 51;
      break;
     case 50:
      HEAP[$iftmp_82] = 0;
      __label__ = 51;
      break;
     case 51:
      var $194 = HEAP[$iftmp_82];
      HEAP[$res] = $194;
      
      var $196 = HEAP[$i] + 2;
      HEAP[$i] = $196;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 52:
      
      
      
      
      if (HEAP[$nch] - HEAP[$i] > 1) {
        __label__ = 53;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 53:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i]] == 22) {
        __label__ = 54;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 54:
      
      
      
      
      var $215 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $216 = _validate_terminal($215, 22, __str70);
      
      if ($216 == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 55:
      
      
      
      
      
      var $223 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 1);
      var $224 = _validate_test($223);
      
      if ($224 == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 56:
      HEAP[$iftmp_83] = 1;
      __label__ = 58;
      break;
     case 57:
      HEAP[$iftmp_83] = 0;
      __label__ = 58;
      break;
     case 58:
      var $226 = HEAP[$iftmp_83];
      HEAP[$res] = $226;
      
      var $228 = HEAP[$i] + 2;
      HEAP[$i] = $228;
      __label__ = 59;
      break;
     case 59:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 60:
      
      
      
      
      if (HEAP[$nch] - HEAP[$i] > 1) {
        __label__ = 47;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 61:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 62:
      
      
      
      if (HEAP[$nch] != HEAP[$i]) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      HEAP[$res] = 0;
      _err_string(__str71);
      __label__ = 64;
      break;
     case 64:
      var $240 = HEAP[$res];
      HEAP[$0] = $240;
      __label__ = 65;
      break;
     case 65:
      var $241 = HEAP[$0];
      HEAP[$retval] = $241;
      __label__ = 66;
      break;
     case 66:
      var $retval65 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval65;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_list_iter($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_84 = __stackBase__ + 12;
      var $res = __stackBase__ + 16;
      
      HEAP[$tree_addr] = $tree;
      var $1 = HEAP[$tree_addr];
      var $2 = _validate_ntype($1, 332);
      
      if ($2 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_numnodes($4, 1, __str72);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[$iftmp_84] = 1;
      __label__ = 4;
      break;
     case 3:
      HEAP[$iftmp_84] = 0;
      __label__ = 4;
      break;
     case 4:
      var $7 = HEAP[$iftmp_84];
      HEAP[$res] = $7;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20]] != 333) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $20 = HEAP[HEAP[$tree_addr] + 20];
      var $21 = _validate_list_for($20);
      HEAP[$res] = $21;
      __label__ = 8;
      break;
     case 7:
      
      
      
      var $25 = HEAP[HEAP[$tree_addr] + 20];
      var $26 = _validate_list_if($25);
      HEAP[$res] = $26;
      __label__ = 8;
      break;
     case 8:
      var $27 = HEAP[$res];
      HEAP[$0] = $27;
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
  function _validate_comp_iter($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_85 = __stackBase__ + 12;
      var $res = __stackBase__ + 16;
      
      HEAP[$tree_addr] = $tree;
      var $1 = HEAP[$tree_addr];
      var $2 = _validate_ntype($1, 335);
      
      if ($2 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_numnodes($4, 1, __str73);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[$iftmp_85] = 1;
      __label__ = 4;
      break;
     case 3:
      HEAP[$iftmp_85] = 0;
      __label__ = 4;
      break;
     case 4:
      var $7 = HEAP[$iftmp_85];
      HEAP[$res] = $7;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20]] != 336) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $20 = HEAP[HEAP[$tree_addr] + 20];
      var $21 = _validate_comp_for($20);
      HEAP[$res] = $21;
      __label__ = 8;
      break;
     case 7:
      
      
      
      var $25 = HEAP[HEAP[$tree_addr] + 20];
      var $26 = _validate_comp_if($25);
      HEAP[$res] = $26;
      __label__ = 8;
      break;
     case 8:
      var $27 = HEAP[$res];
      HEAP[$0] = $27;
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
  function _validate_list_for($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_86 = __stackBase__ + 12;
      var $nch = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      
      
      if (HEAP[$nch] == 5) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[HEAP[$tree_addr] + 20] + 96;
      var $10 = _validate_list_iter($9);
      HEAP[$res] = $10;
      __label__ = 3;
      break;
     case 2:
      var $11 = HEAP[$tree_addr];
      var $12 = _validate_numnodes($11, 4, __str74);
      HEAP[$res] = $12;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 4:
      
      
      
      var $18 = HEAP[HEAP[$tree_addr] + 20];
      var $19 = _validate_terminal($18, 1, __str75);
      
      if ($19 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $24 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $25 = _validate_exprlist($24);
      
      if ($25 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $30 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $31 = _validate_terminal($30, 1, __str76);
      
      if ($31 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $36 = HEAP[HEAP[$tree_addr] + 20] + 72;
      var $37 = _validate_testlist_safe($36);
      
      if ($37 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      HEAP[$iftmp_86] = 1;
      __label__ = 10;
      break;
     case 9:
      HEAP[$iftmp_86] = 0;
      __label__ = 10;
      break;
     case 10:
      var $39 = HEAP[$iftmp_86];
      HEAP[$res] = $39;
      __label__ = 11;
      break;
     case 11:
      var $40 = HEAP[$res];
      HEAP[$0] = $40;
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
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
  function _validate_comp_for($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_87 = __stackBase__ + 12;
      var $nch = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      
      
      if (HEAP[$nch] == 5) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[HEAP[$tree_addr] + 20] + 96;
      var $10 = _validate_comp_iter($9);
      HEAP[$res] = $10;
      __label__ = 3;
      break;
     case 2:
      var $11 = HEAP[$tree_addr];
      var $12 = _validate_numnodes($11, 4, __str77);
      HEAP[$res] = $12;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 4:
      
      
      
      var $18 = HEAP[HEAP[$tree_addr] + 20];
      var $19 = _validate_terminal($18, 1, __str75);
      
      if ($19 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $24 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $25 = _validate_exprlist($24);
      
      if ($25 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $30 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $31 = _validate_terminal($30, 1, __str76);
      
      if ($31 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $36 = HEAP[HEAP[$tree_addr] + 20] + 72;
      var $37 = _validate_or_test($36);
      
      if ($37 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      HEAP[$iftmp_87] = 1;
      __label__ = 10;
      break;
     case 9:
      HEAP[$iftmp_87] = 0;
      __label__ = 10;
      break;
     case 10:
      var $39 = HEAP[$iftmp_87];
      HEAP[$res] = $39;
      __label__ = 11;
      break;
     case 11:
      var $40 = HEAP[$res];
      HEAP[$0] = $40;
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
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
  function _validate_list_if($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_88 = __stackBase__ + 12;
      var $nch = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      
      
      if (HEAP[$nch] == 3) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $10 = _validate_list_iter($9);
      HEAP[$res] = $10;
      __label__ = 3;
      break;
     case 2:
      var $11 = HEAP[$tree_addr];
      var $12 = _validate_numnodes($11, 2, __str78);
      HEAP[$res] = $12;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      
      
      
      var $18 = HEAP[HEAP[$tree_addr] + 20];
      var $19 = _validate_terminal($18, 1, __str57);
      
      if ($19 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $24 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $25 = _validate_old_test($24);
      
      if ($25 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      HEAP[$iftmp_88] = 1;
      __label__ = 8;
      break;
     case 7:
      HEAP[$iftmp_88] = 0;
      __label__ = 8;
      break;
     case 8:
      var $27 = HEAP[$iftmp_88];
      HEAP[$res] = $27;
      __label__ = 9;
      break;
     case 9:
      var $28 = HEAP[$res];
      HEAP[$0] = $28;
      var $29 = HEAP[$0];
      HEAP[$retval] = $29;
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
  function _validate_comp_if($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_89 = __stackBase__ + 12;
      var $nch = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      
      
      if (HEAP[$nch] == 3) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $10 = _validate_comp_iter($9);
      HEAP[$res] = $10;
      __label__ = 3;
      break;
     case 2:
      var $11 = HEAP[$tree_addr];
      var $12 = _validate_numnodes($11, 2, __str79);
      HEAP[$res] = $12;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      
      
      
      var $18 = HEAP[HEAP[$tree_addr] + 20];
      var $19 = _validate_terminal($18, 1, __str57);
      
      if ($19 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $24 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $25 = _validate_old_test($24);
      
      if ($25 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      HEAP[$iftmp_89] = 1;
      __label__ = 8;
      break;
     case 7:
      HEAP[$iftmp_89] = 0;
      __label__ = 8;
      break;
     case 8:
      var $27 = HEAP[$iftmp_89];
      HEAP[$res] = $27;
      __label__ = 9;
      break;
     case 9:
      var $28 = HEAP[$res];
      HEAP[$0] = $28;
      var $29 = HEAP[$0];
      HEAP[$retval] = $29;
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
  function _validate_fpdef($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_90 = __stackBase__ + 12;
      var $nch = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 265);
      HEAP[$res] = $5;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[HEAP[$tree_addr] + 20];
      var $14 = _validate_ntype($13, 1);
      HEAP[$res] = $14;
      __label__ = 11;
      break;
     case 3:
      
      
      if (HEAP[$nch] == 3) {
        __label__ = 4;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 4:
      
      
      
      var $20 = HEAP[HEAP[$tree_addr] + 20];
      var $21 = _validate_terminal($20, 7, __str55);
      
      if ($21 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $26 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $27 = _validate_fplist($26);
      
      if ($27 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $32 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $33 = _validate_terminal($32, 8, __str56);
      
      if ($33 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      HEAP[$iftmp_90] = 1;
      __label__ = 9;
      break;
     case 8:
      HEAP[$iftmp_90] = 0;
      __label__ = 9;
      break;
     case 9:
      var $35 = HEAP[$iftmp_90];
      HEAP[$res] = $35;
      __label__ = 11;
      break;
     case 10:
      var $36 = HEAP[$tree_addr];
      var $37 = _validate_numnodes($36, 1, __str80);
      HEAP[$res] = $37;
      __label__ = 11;
      break;
     case 11:
      var $38 = HEAP[$res];
      HEAP[$0] = $38;
      var $39 = HEAP[$0];
      HEAP[$retval] = $39;
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
  function _validate_fplist($tree) {
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
      
      HEAP[__stackBase__] = $tree;
      var $1 = HEAP[__stackBase__];
      var $2 = _validate_repeating_list($1, 266, FUNCTION_TABLE_OFFSET + 14, __str81);
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
  function _validate_stmt($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_91 = __stackBase__ + 12;
      var $res = __stackBase__ + 16;
      
      HEAP[$tree_addr] = $tree;
      var $1 = HEAP[$tree_addr];
      var $2 = _validate_ntype($1, 267);
      
      if ($2 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_numnodes($4, 1, __str82);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[$iftmp_91] = 1;
      __label__ = 4;
      break;
     case 3:
      HEAP[$iftmp_91] = 0;
      __label__ = 4;
      break;
     case 4:
      var $7 = HEAP[$iftmp_91];
      HEAP[$res] = $7;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $13 = HEAP[HEAP[$tree_addr] + 20];
      HEAP[$tree_addr] = $13;
      
      
      
      
      if (HEAP[HEAP[$tree_addr]] == 268) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $18 = HEAP[$tree_addr];
      var $19 = _validate_simple_stmt($18);
      HEAP[$res] = $19;
      __label__ = 8;
      break;
     case 7:
      var $20 = HEAP[$tree_addr];
      var $21 = _validate_compound_stmt($20);
      HEAP[$res] = $21;
      __label__ = 8;
      break;
     case 8:
      var $22 = HEAP[$res];
      HEAP[$0] = $22;
      var $23 = HEAP[$0];
      HEAP[$retval] = $23;
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
  function _validate_simple_stmt($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_93 = __stackBase__ + 12;
      var $iftmp_92 = __stackBase__ + 16;
      var $nch = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      var $i = __stackBase__ + 28;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 268);
      
      if ($5 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] <= 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $12 = HEAP[HEAP[$tree_addr] + 20];
      var $13 = _validate_small_stmt($12);
      
      if ($13 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      var $20 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 1);
      var $21 = _validate_terminal($20, 4, 0);
      
      if ($21 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      HEAP[$iftmp_92] = 1;
      __label__ = 6;
      break;
     case 5:
      HEAP[$iftmp_92] = 0;
      __label__ = 6;
      break;
     case 6:
      var $23 = HEAP[$iftmp_92];
      HEAP[$res] = $23;
      
      
      if (HEAP[$nch] <= 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $26 = HEAP[$tree_addr];
      var $27 = _validate_numnodes($26, 2, __str83);
      HEAP[$res] = $27;
      __label__ = 8;
      break;
     case 8:
      
      var $29 = HEAP[$nch] - 1;
      HEAP[$nch] = $29;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      if ((HEAP[$nch] & 1) == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      var $37 = HEAP[HEAP[$tree_addr] + 20];
      
      var $39 = HEAP[$nch] - 1;
      HEAP[$nch] = $39;
      
      var $41 = $37 + 24 * HEAP[$nch];
      var $42 = _validate_terminal($41, 13, __str84);
      HEAP[$res] = $42;
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 12:
      
      
      if (HEAP[$nch] > 2) {
        __label__ = 13;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 13:
      HEAP[$i] = 1;
      __label__ = 19;
      break;
     case 14:
      
      
      
      
      var $51 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $52 = _validate_terminal($51, 13, __str84);
      
      if ($52 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      
      var $59 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 1);
      var $60 = _validate_small_stmt($59);
      
      if ($60 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      HEAP[$iftmp_93] = 1;
      __label__ = 18;
      break;
     case 17:
      HEAP[$iftmp_93] = 0;
      __label__ = 18;
      break;
     case 18:
      var $62 = HEAP[$iftmp_93];
      HEAP[$res] = $62;
      
      var $64 = HEAP[$i] + 2;
      HEAP[$i] = $64;
      __label__ = 19;
      break;
     case 19:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      if (HEAP[$i] < HEAP[$nch]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      var $70 = HEAP[$res];
      HEAP[$0] = $70;
      var $71 = HEAP[$0];
      HEAP[$retval] = $71;
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
  function _validate_small_stmt($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $nch = __stackBase__ + 12;
      var $res = __stackBase__ + 16;
      var $ntype = __stackBase__ + 20;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_numnodes($4, 1, __str85);
      HEAP[$res] = $5;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 1:
      
      
      
      
      
      
      var $14 = HEAP[HEAP[HEAP[$tree_addr] + 20]];
      HEAP[$ntype] = $14;
      
      
      if (HEAP[$ntype] == 270) {
        __label__ = 10;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$ntype] == 272) {
        __label__ = 10;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$ntype] == 273) {
        __label__ = 10;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if (HEAP[$ntype] == 274) {
        __label__ = 10;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      if (HEAP[$ntype] == 275) {
        __label__ = 10;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if (HEAP[$ntype] == 281) {
        __label__ = 10;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if (HEAP[$ntype] == 289) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      if (HEAP[$ntype] == 291) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$ntype] == 290) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      var $36 = HEAP[HEAP[$tree_addr] + 20];
      var $37 = _validate_node($36);
      HEAP[$res] = $37;
      __label__ = 12;
      break;
     case 11:
      HEAP[$res] = 0;
      _err_string(__str86);
      __label__ = 12;
      break;
     case 12:
      __label__ = 15;
      break;
     case 13:
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$res] = 0;
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$tree_addr] + 20]];
      var $47 = HEAP[_parser_error];
      var $48 = _PyErr_Format($47, __str87, allocate([ $46, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 15;
      break;
     case 15:
      var $49 = HEAP[$res];
      HEAP[$0] = $49;
      var $50 = HEAP[$0];
      HEAP[$retval] = $50;
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
  function _validate_compound_stmt($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_95 = __stackBase__ + 12;
      var $res = __stackBase__ + 16;
      var $ntype = __stackBase__ + 20;
      
      HEAP[$tree_addr] = $tree;
      var $1 = HEAP[$tree_addr];
      var $2 = _validate_ntype($1, 292);
      
      if ($2 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_numnodes($4, 1, __str88);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[$iftmp_95] = 1;
      __label__ = 4;
      break;
     case 3:
      HEAP[$iftmp_95] = 0;
      __label__ = 4;
      break;
     case 4:
      var $7 = HEAP[$iftmp_95];
      HEAP[$res] = $7;
      
      
      if (HEAP[$res] == 0) {
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
      
      
      
      var $13 = HEAP[HEAP[$tree_addr] + 20];
      HEAP[$tree_addr] = $13;
      
      
      
      var $17 = HEAP[HEAP[$tree_addr]];
      HEAP[$ntype] = $17;
      
      
      if (HEAP[$ntype] == 293) {
        __label__ = 14;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if (HEAP[$ntype] == 294) {
        __label__ = 14;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      if (HEAP[$ntype] == 295) {
        __label__ = 14;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$ntype] == 296) {
        __label__ = 14;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if (HEAP[$ntype] == 297) {
        __label__ = 14;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      if (HEAP[$ntype] == 262) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if (HEAP[$ntype] == 329) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      if (HEAP[$ntype] == 261) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $34 = HEAP[$tree_addr];
      var $35 = _validate_node($34);
      HEAP[$res] = $35;
      __label__ = 16;
      break;
     case 15:
      HEAP[$res] = 0;
      
      
      
      var $39 = HEAP[HEAP[$tree_addr]];
      var $40 = HEAP[_parser_error];
      var $41 = _PyErr_Format($40, __str89, allocate([ $39, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 16;
      break;
     case 16:
      var $42 = HEAP[$res];
      HEAP[$0] = $42;
      __label__ = 17;
      break;
     case 17:
      var $43 = HEAP[$0];
      HEAP[$retval] = $43;
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
  function _validate_yield_or_testlist($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$tree_addr] = $tree;
      
      
      
      
      if (HEAP[HEAP[$tree_addr]] == 340) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[$tree_addr];
      var $6 = _validate_yield_expr($5);
      HEAP[$0] = $6;
      __label__ = 3;
      break;
     case 2:
      var $7 = HEAP[$tree_addr];
      var $8 = _validate_testlist($7);
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
  function _validate_expr_stmt($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_100 = __stackBase__ + 12;
      var $iftmp_99 = __stackBase__ + 16;
      var $iftmp_98 = __stackBase__ + 20;
      var $iftmp_97 = __stackBase__ + 24;
      var $j = __stackBase__ + 28;
      var $nch = __stackBase__ + 32;
      var $res = __stackBase__ + 36;
      var $s = __stackBase__ + 40;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 270);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if (((HEAP[$nch] & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[HEAP[$tree_addr] + 20];
      var $14 = _validate_testlist($13);
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$iftmp_97] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_97] = 0;
      __label__ = 5;
      break;
     case 5:
      var $16 = HEAP[$iftmp_97];
      HEAP[$res] = $16;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if (HEAP[$nch] != 3) {
        __label__ = 30;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24] != 271) {
        __label__ = 30;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      var $31 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $32 = _validate_numnodes($31, 1, __str90);
      
      if ($32 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      var $37 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $38 = _validate_yield_or_testlist($37);
      
      if ($38 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      HEAP[$iftmp_98] = 1;
      __label__ = 12;
      break;
     case 11:
      HEAP[$iftmp_98] = 0;
      __label__ = 12;
      break;
     case 12:
      var $40 = HEAP[$iftmp_98];
      HEAP[$res] = $40;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 13:
      
      
      
      
      
      
      
      
      var $51 = HEAP[HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 + 20] + 4];
      HEAP[$s] = $51;
      var $52 = HEAP[$s];
      var $53 = _strcmp($52, __str91);
      
      if ($53 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      var $55 = HEAP[$s];
      var $56 = _strcmp($55, __str92);
      
      if ($56 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $58 = HEAP[$s];
      var $59 = _strcmp($58, __str93);
      
      if ($59 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $61 = HEAP[$s];
      var $62 = _strcmp($61, __str94);
      
      if ($62 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      var $64 = HEAP[$s];
      var $65 = _strcmp($64, __str95);
      
      if ($65 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      var $67 = HEAP[$s];
      var $68 = _strcmp($67, __str96);
      
      if ($68 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      var $70 = HEAP[$s];
      var $71 = _strcmp($70, __str97);
      
      if ($71 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      var $73 = HEAP[$s];
      var $74 = _strcmp($73, __str98);
      
      if ($74 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      var $76 = HEAP[$s];
      var $77 = _strcmp($76, __str99);
      
      if ($77 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      var $79 = HEAP[$s];
      var $80 = _strcmp($79, __str100);
      
      if ($80 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      var $82 = HEAP[$s];
      var $83 = _strcmp($82, __str101);
      
      if ($83 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      var $85 = HEAP[$s];
      var $86 = _strcmp($85, __str102);
      
      if ($86 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      HEAP[$iftmp_99] = 1;
      __label__ = 27;
      break;
     case 26:
      HEAP[$iftmp_99] = 0;
      __label__ = 27;
      break;
     case 27:
      var $88 = HEAP[$iftmp_99];
      HEAP[$res] = $88;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      _err_string(__str103);
      __label__ = 29;
      break;
     case 29:
      __label__ = 38;
      break;
     case 30:
      HEAP[$j] = 1;
      __label__ = 36;
      break;
     case 31:
      
      
      
      
      var $95 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$j];
      var $96 = _validate_terminal($95, 22, __str70);
      
      if ($96 == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      
      
      
      var $103 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$j] + 1);
      var $104 = _validate_yield_or_testlist($103);
      
      if ($104 == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      HEAP[$iftmp_100] = 1;
      __label__ = 35;
      break;
     case 34:
      HEAP[$iftmp_100] = 0;
      __label__ = 35;
      break;
     case 35:
      var $106 = HEAP[$iftmp_100];
      HEAP[$res] = $106;
      
      var $108 = HEAP[$j] + 2;
      HEAP[$j] = $108;
      __label__ = 36;
      break;
     case 36:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      
      if (HEAP[$j] < HEAP[$nch]) {
        __label__ = 31;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      var $114 = HEAP[$res];
      HEAP[$0] = $114;
      var $115 = HEAP[$0];
      HEAP[$retval] = $115;
      __label__ = 39;
      break;
     case 39:
      var $retval41 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval41;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_print_stmt($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_103 = __stackBase__ + 12;
      var $iftmp_102 = __stackBase__ + 16;
      var $iftmp_101 = __stackBase__ + 20;
      var $nch = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      var $sym = __stackBase__ + 32;
      var $i = __stackBase__ + 36;
      var $allow_trailing_comma = __stackBase__ + 40;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 272);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] <= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $12 = HEAP[HEAP[$tree_addr] + 20];
      var $13 = _validate_terminal($12, 1, __str104);
      
      if ($13 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$iftmp_101] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_101] = 0;
      __label__ = 5;
      break;
     case 5:
      var $15 = HEAP[$iftmp_101];
      HEAP[$res] = $15;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 6:
      
      
      if (HEAP[$nch] > 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $26 = HEAP[HEAP[HEAP[$tree_addr] + 20] + 24];
      HEAP[$sym] = $26;
      HEAP[$i] = 1;
      HEAP[$allow_trailing_comma] = 1;
      
      
      if (HEAP[$sym] == 304) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $33 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      
      var $35 = HEAP[$i] + 1;
      HEAP[$i] = $35;
      var $36 = _validate_test($33);
      HEAP[$res] = $36;
      __label__ = 16;
      break;
     case 9:
      
      
      if (HEAP[$nch] <= 2) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $39 = HEAP[$tree_addr];
      var $40 = _validate_numnodes($39, 3, __str105);
      HEAP[$res] = $40;
      __label__ = 16;
      break;
     case 11:
      
      
      
      
      var $45 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $46 = _validate_ntype($45, 35);
      
      if ($46 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      var $53 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 1);
      var $54 = _validate_test($53);
      
      if ($54 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      HEAP[$iftmp_102] = 1;
      __label__ = 15;
      break;
     case 14:
      HEAP[$iftmp_102] = 0;
      __label__ = 15;
      break;
     case 15:
      var $56 = HEAP[$iftmp_102];
      HEAP[$res] = $56;
      
      var $58 = HEAP[$i] + 2;
      HEAP[$i] = $58;
      HEAP[$allow_trailing_comma] = 0;
      __label__ = 16;
      break;
     case 16:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 17:
      __label__ = 23;
      break;
     case 18:
      
      
      
      
      var $65 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $66 = _validate_terminal($65, 12, __str52);
      
      if ($66 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      
      var $73 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 1);
      var $74 = _validate_test($73);
      
      if ($74 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      HEAP[$iftmp_103] = 1;
      __label__ = 22;
      break;
     case 21:
      HEAP[$iftmp_103] = 0;
      __label__ = 22;
      break;
     case 22:
      var $76 = HEAP[$iftmp_103];
      HEAP[$res] = $76;
      HEAP[$allow_trailing_comma] = 1;
      
      var $78 = HEAP[$i] + 2;
      HEAP[$i] = $78;
      __label__ = 23;
      break;
     case 23:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      if (HEAP[$i] + 2 <= HEAP[$nch]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      if (HEAP[$allow_trailing_comma] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      var $89 = HEAP[$tree_addr];
      var $90 = HEAP[$i];
      var $91 = _validate_numnodes($89, $90, __str105);
      HEAP[$res] = $91;
      __label__ = 31;
      break;
     case 28:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 29:
      
      
      
      if (HEAP[$i] < HEAP[$nch]) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $101 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $102 = _validate_terminal($101, 12, __str52);
      HEAP[$res] = $102;
      __label__ = 31;
      break;
     case 31:
      var $103 = HEAP[$res];
      HEAP[$0] = $103;
      var $104 = HEAP[$0];
      HEAP[$retval] = $104;
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
  function _validate_del_stmt($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $iftmp_104 = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$tree_addr] = $tree;
      var $1 = HEAP[$tree_addr];
      var $2 = _validate_numnodes($1, 2, __str106);
      
      if ($2 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      var $7 = HEAP[HEAP[$tree_addr] + 20];
      var $8 = _validate_terminal($7, 1, __str107);
      
      if ($8 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $14 = _validate_exprlist($13);
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$iftmp_104] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_104] = 0;
      __label__ = 5;
      break;
     case 5:
      var $16 = HEAP[$iftmp_104];
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
  function _validate_return_stmt($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_105 = __stackBase__ + 12;
      var $nch = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 278);
      
      if ($5 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] == 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      var $14 = HEAP[HEAP[$tree_addr] + 20];
      var $15 = _validate_terminal($14, 1, __str108);
      
      if ($15 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      HEAP[$iftmp_105] = 1;
      __label__ = 6;
      break;
     case 5:
      HEAP[$iftmp_105] = 0;
      __label__ = 6;
      break;
     case 6:
      var $17 = HEAP[$iftmp_105];
      HEAP[$res] = $17;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      if (HEAP[$nch] == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      var $25 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $26 = _validate_testlist($25);
      HEAP[$res] = $26;
      __label__ = 9;
      break;
     case 9:
      var $27 = HEAP[$res];
      HEAP[$0] = $27;
      var $28 = HEAP[$0];
      HEAP[$retval] = $28;
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
  function _validate_raise_stmt($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_109 = __stackBase__ + 12;
      var $iftmp_108 = __stackBase__ + 16;
      var $iftmp_107 = __stackBase__ + 20;
      var $iftmp_106 = __stackBase__ + 24;
      var $nch = __stackBase__ + 28;
      var $res = __stackBase__ + 32;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 280);
      
      if ($5 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] == 2) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$nch] == 4) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if (HEAP[$nch] == 6) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$iftmp_106] = 1;
      __label__ = 7;
      break;
     case 6:
      HEAP[$iftmp_106] = 0;
      __label__ = 7;
      break;
     case 7:
      var $15 = HEAP[$iftmp_106];
      HEAP[$res] = $15;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 8:
      
      
      
      var $21 = HEAP[HEAP[$tree_addr] + 20];
      var $22 = _validate_terminal($21, 1, __str109);
      HEAP[$res] = $22;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      if (HEAP[$nch] > 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      var $30 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $31 = _validate_test($30);
      HEAP[$res] = $31;
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 12:
      
      
      if (HEAP[$nch] > 2) {
        __label__ = 13;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 13:
      
      
      
      var $39 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $40 = _validate_terminal($39, 12, __str52);
      
      if ($40 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      var $45 = HEAP[HEAP[$tree_addr] + 20] + 72;
      var $46 = _validate_test($45);
      
      if ($46 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      HEAP[$iftmp_107] = 1;
      __label__ = 17;
      break;
     case 16:
      HEAP[$iftmp_107] = 0;
      __label__ = 17;
      break;
     case 17:
      var $48 = HEAP[$iftmp_107];
      HEAP[$res] = $48;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 18:
      
      
      if (HEAP[$nch] > 4) {
        __label__ = 19;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 19:
      
      
      
      var $56 = HEAP[HEAP[$tree_addr] + 20] + 96;
      var $57 = _validate_terminal($56, 12, __str52);
      
      if ($57 == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      var $62 = HEAP[HEAP[$tree_addr] + 20] + 120;
      var $63 = _validate_test($62);
      
      if ($63 == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      HEAP[$iftmp_108] = 1;
      __label__ = 23;
      break;
     case 22:
      HEAP[$iftmp_108] = 0;
      __label__ = 23;
      break;
     case 23:
      var $65 = HEAP[$iftmp_108];
      HEAP[$res] = $65;
      __label__ = 24;
      break;
     case 24:
      __label__ = 26;
      break;
     case 25:
      var $66 = HEAP[$tree_addr];
      var $67 = _validate_numnodes($66, 2, __str109);
      __label__ = 26;
      break;
     case 26:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 27:
      
      
      if (HEAP[$nch] == 4) {
        __label__ = 28;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 28:
      
      
      
      var $75 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $76 = _validate_terminal($75, 12, __str52);
      
      if ($76 == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      var $81 = HEAP[HEAP[$tree_addr] + 20] + 72;
      var $82 = _validate_test($81);
      
      if ($82 == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      HEAP[$iftmp_109] = 1;
      __label__ = 32;
      break;
     case 31:
      HEAP[$iftmp_109] = 0;
      __label__ = 32;
      break;
     case 32:
      var $84 = HEAP[$iftmp_109];
      HEAP[$res] = $84;
      __label__ = 33;
      break;
     case 33:
      var $85 = HEAP[$res];
      HEAP[$0] = $85;
      var $86 = HEAP[$0];
      HEAP[$retval] = $86;
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
  function _validate_yield_expr($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_110 = __stackBase__ + 12;
      var $nch = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 340);
      
      if ($5 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] == 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      var $14 = HEAP[HEAP[$tree_addr] + 20];
      var $15 = _validate_terminal($14, 1, __str110);
      
      if ($15 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      HEAP[$iftmp_110] = 1;
      __label__ = 6;
      break;
     case 5:
      HEAP[$iftmp_110] = 0;
      __label__ = 6;
      break;
     case 6:
      var $17 = HEAP[$iftmp_110];
      HEAP[$res] = $17;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      if (HEAP[$nch] == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      var $25 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $26 = _validate_testlist($25);
      HEAP[$res] = $26;
      __label__ = 9;
      break;
     case 9:
      var $27 = HEAP[$res];
      HEAP[$0] = $27;
      var $28 = HEAP[$0];
      HEAP[$retval] = $28;
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
  function _validate_yield_stmt($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $iftmp_111 = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$tree_addr] = $tree;
      var $1 = HEAP[$tree_addr];
      var $2 = _validate_ntype($1, 279);
      
      if ($2 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_numnodes($4, 1, __str111);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $10 = HEAP[HEAP[$tree_addr] + 20];
      var $11 = _validate_yield_expr($10);
      
      if ($11 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$iftmp_111] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_111] = 0;
      __label__ = 5;
      break;
     case 5:
      var $13 = HEAP[$iftmp_111];
      HEAP[$0] = $13;
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
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
  function _validate_import_as_name($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_112 = __stackBase__ + 12;
      var $nch = __stackBase__ + 16;
      var $ok = __stackBase__ + 20;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 284);
      HEAP[$ok] = $5;
      
      
      if (HEAP[$ok] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[HEAP[$tree_addr] + 20];
      var $14 = _validate_terminal($13, 1, 0);
      HEAP[$ok] = $14;
      __label__ = 11;
      break;
     case 3:
      
      
      if (HEAP[$nch] == 3) {
        __label__ = 4;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 4:
      
      
      
      var $20 = HEAP[HEAP[$tree_addr] + 20];
      var $21 = _validate_terminal($20, 1, 0);
      
      if ($21 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $26 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $27 = _validate_terminal($26, 1, __str112);
      
      if ($27 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $32 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $33 = _validate_terminal($32, 1, 0);
      
      if ($33 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      HEAP[$iftmp_112] = 1;
      __label__ = 9;
      break;
     case 8:
      HEAP[$iftmp_112] = 0;
      __label__ = 9;
      break;
     case 9:
      var $35 = HEAP[$iftmp_112];
      HEAP[$ok] = $35;
      __label__ = 11;
      break;
     case 10:
      var $36 = HEAP[$tree_addr];
      var $37 = _validate_numnodes($36, 3, __str113);
      HEAP[$ok] = $37;
      __label__ = 11;
      break;
     case 11:
      var $38 = HEAP[$ok];
      HEAP[$0] = $38;
      var $39 = HEAP[$0];
      HEAP[$retval] = $39;
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
  function _validate_dotted_name($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_114 = __stackBase__ + 12;
      var $iftmp_113 = __stackBase__ + 16;
      var $nch = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      var $i = __stackBase__ + 28;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 288);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if (((HEAP[$nch] & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[HEAP[$tree_addr] + 20];
      var $14 = _validate_terminal($13, 1, 0);
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$iftmp_113] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_113] = 0;
      __label__ = 5;
      break;
     case 5:
      var $16 = HEAP[$iftmp_113];
      HEAP[$res] = $16;
      HEAP[$i] = 1;
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      var $21 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $22 = _validate_terminal($21, 23, __str114);
      
      if ($22 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      var $29 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 1);
      var $30 = _validate_terminal($29, 1, 0);
      
      if ($30 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      HEAP[$iftmp_114] = 1;
      __label__ = 10;
      break;
     case 9:
      HEAP[$iftmp_114] = 0;
      __label__ = 10;
      break;
     case 10:
      var $32 = HEAP[$iftmp_114];
      HEAP[$res] = $32;
      
      var $34 = HEAP[$i] + 2;
      HEAP[$i] = $34;
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      if (HEAP[$i] < HEAP[$nch]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $40 = HEAP[$res];
      HEAP[$0] = $40;
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
      __label__ = 14;
      break;
     case 14:
      var $retval16 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_dotted_as_name($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_115 = __stackBase__ + 12;
      var $nch = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 285);
      HEAP[$res] = $5;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[HEAP[$tree_addr] + 20];
      var $14 = _validate_dotted_name($13);
      HEAP[$res] = $14;
      __label__ = 11;
      break;
     case 3:
      
      
      if (HEAP[$nch] == 3) {
        __label__ = 4;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 4:
      
      
      
      var $20 = HEAP[HEAP[$tree_addr] + 20];
      var $21 = _validate_dotted_name($20);
      
      if ($21 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $26 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $27 = _validate_terminal($26, 1, __str112);
      
      if ($27 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $32 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $33 = _validate_terminal($32, 1, 0);
      
      if ($33 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      HEAP[$iftmp_115] = 1;
      __label__ = 9;
      break;
     case 8:
      HEAP[$iftmp_115] = 0;
      __label__ = 9;
      break;
     case 9:
      var $35 = HEAP[$iftmp_115];
      HEAP[$res] = $35;
      __label__ = 11;
      break;
     case 10:
      HEAP[$res] = 0;
      _err_string(__str115);
      __label__ = 11;
      break;
     case 11:
      var $36 = HEAP[$res];
      HEAP[$0] = $36;
      var $37 = HEAP[$0];
      HEAP[$retval] = $37;
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
  function _validate_dotted_as_names($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_117 = __stackBase__ + 12;
      var $iftmp_116 = __stackBase__ + 16;
      var $nch = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      var $i = __stackBase__ + 28;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      
      
      
      
      
      
      
      if (((HEAP[$nch] & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      var $10 = HEAP[HEAP[$tree_addr] + 20];
      var $11 = _validate_dotted_as_name($10);
      
      if ($11 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[$iftmp_116] = 1;
      __label__ = 4;
      break;
     case 3:
      HEAP[$iftmp_116] = 0;
      __label__ = 4;
      break;
     case 4:
      var $13 = HEAP[$iftmp_116];
      HEAP[$res] = $13;
      HEAP[$i] = 1;
      __label__ = 10;
      break;
     case 5:
      
      
      
      
      var $18 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $19 = _validate_terminal($18, 12, __str52);
      
      if ($19 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      var $26 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 1);
      var $27 = _validate_dotted_as_name($26);
      
      if ($27 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      HEAP[$iftmp_117] = 1;
      __label__ = 9;
      break;
     case 8:
      HEAP[$iftmp_117] = 0;
      __label__ = 9;
      break;
     case 9:
      var $29 = HEAP[$iftmp_117];
      HEAP[$res] = $29;
      
      var $31 = HEAP[$i] + 2;
      HEAP[$i] = $31;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      if (HEAP[$i] < HEAP[$nch]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $37 = HEAP[$res];
      HEAP[$0] = $37;
      var $38 = HEAP[$0];
      HEAP[$retval] = $38;
      __label__ = 13;
      break;
     case 13:
      var $retval15 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_import_as_names($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_118 = __stackBase__ + 12;
      var $nch = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      
      
      
      var $7 = HEAP[HEAP[$tree_addr] + 20];
      var $8 = _validate_import_as_name($7);
      HEAP[$res] = $8;
      HEAP[$i] = 1;
      __label__ = 6;
      break;
     case 1:
      
      
      
      
      var $13 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $14 = _validate_terminal($13, 12, __str52);
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      var $21 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 1);
      var $22 = _validate_import_as_name($21);
      
      if ($22 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$iftmp_118] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_118] = 0;
      __label__ = 5;
      break;
     case 5:
      var $24 = HEAP[$iftmp_118];
      HEAP[$res] = $24;
      
      var $26 = HEAP[$i] + 2;
      HEAP[$i] = $26;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[$i] + 1 < HEAP[$nch]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $33 = HEAP[$res];
      HEAP[$0] = $33;
      var $34 = HEAP[$0];
      HEAP[$retval] = $34;
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
  function _validate_import_name($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $iftmp_119 = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$tree_addr] = $tree;
      var $1 = HEAP[$tree_addr];
      var $2 = _validate_ntype($1, 282);
      
      if ($2 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_numnodes($4, 2, __str116);
      
      if ($5 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $10 = HEAP[HEAP[$tree_addr] + 20];
      var $11 = _validate_terminal($10, 1, __str117);
      
      if ($11 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $16 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $17 = _validate_dotted_as_names($16);
      
      if ($17 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      HEAP[$iftmp_119] = 1;
      __label__ = 6;
      break;
     case 5:
      HEAP[$iftmp_119] = 0;
      __label__ = 6;
      break;
     case 6:
      var $19 = HEAP[$iftmp_119];
      HEAP[$0] = $19;
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
  function _count_from_dots($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $i = __stackBase__ + 12;
      
      HEAP[$tree_addr] = $tree;
      HEAP[$i] = 1;
      __label__ = 3;
      break;
     case 1:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i]] != 23) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      var $10 = HEAP[$i] + 1;
      HEAP[$i] = $10;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr] + 16] > HEAP[$i]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $17 = HEAP[$i] - 1;
      HEAP[$0] = $17;
      var $18 = HEAP[$0];
      HEAP[$retval] = $18;
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
  function _validate_import_from($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_121 = __stackBase__ + 12;
      var $iftmp_120 = __stackBase__ + 16;
      var $nch = __stackBase__ + 20;
      var $ndots = __stackBase__ + 24;
      var $havename = __stackBase__ + 28;
      var $offset = __stackBase__ + 32;
      var $res = __stackBase__ + 36;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _count_from_dots($4);
      HEAP[$ndots] = $5;
      
      
      
      
      
      
      
      
      
      var $15 = HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$ndots] + 1)] == 288;
      HEAP[$havename] = $15;
      
      
      var $18 = HEAP[$ndots] + HEAP[$havename];
      HEAP[$offset] = $18;
      var $19 = HEAP[$tree_addr];
      var $20 = _validate_ntype($19, 283);
      
      if ($20 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$offset] <= 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$offset] + 3 > HEAP[$nch]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $31 = HEAP[HEAP[$tree_addr] + 20];
      var $32 = _validate_terminal($31, 1, __str118);
      
      if ($32 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if (HEAP[$havename] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      var $41 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$ndots] + 1);
      var $42 = _validate_dotted_name($41);
      
      if ($42 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      
      var $49 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$offset] + 1);
      var $50 = _validate_terminal($49, 1, __str117);
      
      if ($50 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      HEAP[$iftmp_120] = 1;
      __label__ = 9;
      break;
     case 8:
      HEAP[$iftmp_120] = 0;
      __label__ = 9;
      break;
     case 9:
      var $52 = HEAP[$iftmp_120];
      HEAP[$res] = $52;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$offset] + 2)] != 7) {
        __label__ = 18;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      if (HEAP[$offset] + 5 != HEAP[$nch]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      var $73 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$offset] + 2);
      var $74 = _validate_terminal($73, 7, __str55);
      
      if ($74 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      var $81 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$offset] + 3);
      var $82 = _validate_import_as_names($81);
      
      if ($82 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      
      var $89 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$offset] + 4);
      var $90 = _validate_terminal($89, 8, __str56);
      
      if ($90 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      HEAP[$iftmp_121] = 1;
      __label__ = 17;
      break;
     case 16:
      HEAP[$iftmp_121] = 0;
      __label__ = 17;
      break;
     case 17:
      var $92 = HEAP[$iftmp_121];
      HEAP[$res] = $92;
      __label__ = 21;
      break;
     case 18:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$offset] + 2)] != 16) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      
      var $109 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$offset] + 2);
      var $110 = _validate_import_as_names($109);
      HEAP[$res] = $110;
      __label__ = 21;
      break;
     case 21:
      var $111 = HEAP[$res];
      HEAP[$0] = $111;
      var $112 = HEAP[$0];
      HEAP[$retval] = $112;
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
  function _validate_import_stmt($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $nch = __stackBase__ + 12;
      var $res = __stackBase__ + 16;
      var $ntype = __stackBase__ + 20;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_numnodes($4, 1, __str119);
      HEAP[$res] = $5;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      
      
      
      
      var $14 = HEAP[HEAP[HEAP[$tree_addr] + 20]];
      HEAP[$ntype] = $14;
      
      
      if (HEAP[$ntype] == 282) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$ntype] == 283) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $22 = HEAP[HEAP[$tree_addr] + 20];
      var $23 = _validate_node($22);
      HEAP[$res] = $23;
      __label__ = 5;
      break;
     case 4:
      HEAP[$res] = 0;
      _err_string(__str120);
      __label__ = 5;
      break;
     case 5:
      __label__ = 8;
      break;
     case 6:
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$res] = 0;
      
      
      
      
      
      
      var $32 = HEAP[HEAP[HEAP[$tree_addr] + 20]];
      var $33 = HEAP[_parser_error];
      var $34 = _PyErr_Format($33, __str121, allocate([ $32, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 8;
      break;
     case 8:
      var $35 = HEAP[$res];
      HEAP[$0] = $35;
      var $36 = HEAP[$0];
      HEAP[$retval] = $36;
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
  function _validate_global_stmt($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_125 = __stackBase__ + 12;
      var $iftmp_124 = __stackBase__ + 16;
      var $iftmp_123 = __stackBase__ + 20;
      var $j = __stackBase__ + 24;
      var $nch = __stackBase__ + 28;
      var $res = __stackBase__ + 32;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 289);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      if ((HEAP[$nch] & 1) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] <= 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$iftmp_123] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_123] = 0;
      __label__ = 5;
      break;
     case 5:
      var $12 = HEAP[$iftmp_123];
      HEAP[$res] = $12;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      var $15 = _PyErr_Occurred();
      
      if ($15 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _err_string(__str122);
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 9:
      
      
      
      var $22 = HEAP[HEAP[$tree_addr] + 20];
      var $23 = _validate_terminal($22, 1, __str123);
      
      if ($23 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $28 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $29 = _validate_ntype($28, 1);
      
      if ($29 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      HEAP[$iftmp_124] = 1;
      __label__ = 13;
      break;
     case 12:
      HEAP[$iftmp_124] = 0;
      __label__ = 13;
      break;
     case 13:
      var $31 = HEAP[$iftmp_124];
      HEAP[$res] = $31;
      __label__ = 14;
      break;
     case 14:
      HEAP[$j] = 2;
      __label__ = 20;
      break;
     case 15:
      
      
      
      
      var $36 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$j];
      var $37 = _validate_terminal($36, 12, __str52);
      
      if ($37 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      var $44 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$j] + 1);
      var $45 = _validate_ntype($44, 1);
      
      if ($45 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      HEAP[$iftmp_125] = 1;
      __label__ = 19;
      break;
     case 18:
      HEAP[$iftmp_125] = 0;
      __label__ = 19;
      break;
     case 19:
      var $47 = HEAP[$iftmp_125];
      HEAP[$res] = $47;
      
      var $49 = HEAP[$j] + 2;
      HEAP[$j] = $49;
      __label__ = 20;
      break;
     case 20:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      if (HEAP[$j] < HEAP[$nch]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      var $55 = HEAP[$res];
      HEAP[$0] = $55;
      var $56 = HEAP[$0];
      HEAP[$retval] = $56;
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
  function _validate_exec_stmt($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_128 = __stackBase__ + 12;
      var $iftmp_127 = __stackBase__ + 16;
      var $iftmp_126 = __stackBase__ + 20;
      var $nch = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 290);
      
      if ($5 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] == 4) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$nch] == 6) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $16 = HEAP[HEAP[$tree_addr] + 20];
      var $17 = _validate_terminal($16, 1, __str124);
      
      if ($17 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $22 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $23 = _validate_expr($22);
      
      if ($23 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      HEAP[$iftmp_126] = 1;
      __label__ = 8;
      break;
     case 7:
      HEAP[$iftmp_126] = 0;
      __label__ = 8;
      break;
     case 8:
      var $25 = HEAP[$iftmp_126];
      HEAP[$res] = $25;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      var $28 = _PyErr_Occurred();
      
      if ($28 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      _err_string(__str125);
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 12:
      
      
      if (HEAP[$nch] > 2) {
        __label__ = 13;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 13:
      
      
      
      var $37 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $38 = _validate_terminal($37, 1, __str76);
      
      if ($38 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      var $43 = HEAP[HEAP[$tree_addr] + 20] + 72;
      var $44 = _validate_test($43);
      
      if ($44 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      HEAP[$iftmp_127] = 1;
      __label__ = 17;
      break;
     case 16:
      HEAP[$iftmp_127] = 0;
      __label__ = 17;
      break;
     case 17:
      var $46 = HEAP[$iftmp_127];
      HEAP[$res] = $46;
      __label__ = 18;
      break;
     case 18:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 19:
      
      
      if (HEAP[$nch] == 6) {
        __label__ = 20;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 20:
      
      
      
      var $54 = HEAP[HEAP[$tree_addr] + 20] + 96;
      var $55 = _validate_terminal($54, 12, __str52);
      
      if ($55 == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      var $60 = HEAP[HEAP[$tree_addr] + 20] + 120;
      var $61 = _validate_test($60);
      
      if ($61 == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      HEAP[$iftmp_128] = 1;
      __label__ = 24;
      break;
     case 23:
      HEAP[$iftmp_128] = 0;
      __label__ = 24;
      break;
     case 24:
      var $63 = HEAP[$iftmp_128];
      HEAP[$res] = $63;
      __label__ = 25;
      break;
     case 25:
      var $64 = HEAP[$res];
      HEAP[$0] = $64;
      var $65 = HEAP[$0];
      HEAP[$retval] = $65;
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
  function _validate_assert_stmt($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_130 = __stackBase__ + 12;
      var $iftmp_129 = __stackBase__ + 16;
      var $nch = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 291);
      
      if ($5 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] == 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      var $14 = HEAP[HEAP[$tree_addr] + 20];
      var $15 = _validate_terminal($14, 1, __str126);
      
      if ($15 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $20 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $21 = _validate_test($20);
      
      if ($21 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      HEAP[$iftmp_129] = 1;
      __label__ = 7;
      break;
     case 6:
      HEAP[$iftmp_129] = 0;
      __label__ = 7;
      break;
     case 7:
      var $23 = HEAP[$iftmp_129];
      HEAP[$res] = $23;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      var $26 = _PyErr_Occurred();
      
      if ($26 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      _err_string(__str127);
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 11:
      
      
      if (HEAP[$nch] > 2) {
        __label__ = 12;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 12:
      
      
      
      var $35 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $36 = _validate_terminal($35, 12, __str52);
      
      if ($36 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $41 = HEAP[HEAP[$tree_addr] + 20] + 72;
      var $42 = _validate_test($41);
      
      if ($42 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      HEAP[$iftmp_130] = 1;
      __label__ = 16;
      break;
     case 15:
      HEAP[$iftmp_130] = 0;
      __label__ = 16;
      break;
     case 16:
      var $44 = HEAP[$iftmp_130];
      HEAP[$res] = $44;
      __label__ = 17;
      break;
     case 17:
      var $45 = HEAP[$res];
      HEAP[$0] = $45;
      var $46 = HEAP[$0];
      HEAP[$retval] = $46;
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
  function _validate_while($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_132 = __stackBase__ + 12;
      var $iftmp_131 = __stackBase__ + 16;
      var $nch = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 294);
      
      if ($5 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] == 7) {
        __label__ = 3;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 3:
      
      
      
      var $14 = HEAP[HEAP[$tree_addr] + 20];
      var $15 = _validate_terminal($14, 1, __str128);
      
      if ($15 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $20 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $21 = _validate_test($20);
      
      if ($21 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $26 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $27 = _validate_terminal($26, 11, __str54);
      
      if ($27 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $32 = HEAP[HEAP[$tree_addr] + 20] + 72;
      var $33 = _validate_suite($32);
      
      if ($33 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      HEAP[$iftmp_131] = 1;
      __label__ = 9;
      break;
     case 8:
      HEAP[$iftmp_131] = 0;
      __label__ = 9;
      break;
     case 9:
      var $35 = HEAP[$iftmp_131];
      HEAP[$res] = $35;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 10:
      
      
      if (HEAP[$nch] == 7) {
        __label__ = 11;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 11:
      
      
      
      var $43 = HEAP[HEAP[$tree_addr] + 20] + 96;
      var $44 = _validate_terminal($43, 1, __str58);
      
      if ($44 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      var $49 = HEAP[HEAP[$tree_addr] + 20] + 120;
      var $50 = _validate_terminal($49, 11, __str54);
      
      if ($50 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $55 = HEAP[HEAP[$tree_addr] + 20] + 144;
      var $56 = _validate_suite($55);
      
      if ($56 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      HEAP[$iftmp_132] = 1;
      __label__ = 16;
      break;
     case 15:
      HEAP[$iftmp_132] = 0;
      __label__ = 16;
      break;
     case 16:
      var $58 = HEAP[$iftmp_132];
      HEAP[$res] = $58;
      __label__ = 17;
      break;
     case 17:
      var $59 = HEAP[$res];
      HEAP[$0] = $59;
      var $60 = HEAP[$0];
      HEAP[$retval] = $60;
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
  function _validate_for($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_134 = __stackBase__ + 12;
      var $iftmp_133 = __stackBase__ + 16;
      var $nch = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 295);
      
      if ($5 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 6) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] == 9) {
        __label__ = 3;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 3:
      
      
      
      var $14 = HEAP[HEAP[$tree_addr] + 20];
      var $15 = _validate_terminal($14, 1, __str75);
      
      if ($15 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $20 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $21 = _validate_exprlist($20);
      
      if ($21 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $26 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $27 = _validate_terminal($26, 1, __str76);
      
      if ($27 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $32 = HEAP[HEAP[$tree_addr] + 20] + 72;
      var $33 = _validate_testlist($32);
      
      if ($33 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $38 = HEAP[HEAP[$tree_addr] + 20] + 96;
      var $39 = _validate_terminal($38, 11, __str54);
      
      if ($39 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      var $44 = HEAP[HEAP[$tree_addr] + 20] + 120;
      var $45 = _validate_suite($44);
      
      if ($45 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      HEAP[$iftmp_133] = 1;
      __label__ = 11;
      break;
     case 10:
      HEAP[$iftmp_133] = 0;
      __label__ = 11;
      break;
     case 11:
      var $47 = HEAP[$iftmp_133];
      HEAP[$res] = $47;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 12:
      
      
      if (HEAP[$nch] == 9) {
        __label__ = 13;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 13:
      
      
      
      var $55 = HEAP[HEAP[$tree_addr] + 20] + 144;
      var $56 = _validate_terminal($55, 1, __str58);
      
      if ($56 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      var $61 = HEAP[HEAP[$tree_addr] + 20] + 168;
      var $62 = _validate_terminal($61, 11, __str54);
      
      if ($62 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      var $67 = HEAP[HEAP[$tree_addr] + 20] + 192;
      var $68 = _validate_suite($67);
      
      if ($68 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      HEAP[$iftmp_134] = 1;
      __label__ = 18;
      break;
     case 17:
      HEAP[$iftmp_134] = 0;
      __label__ = 18;
      break;
     case 18:
      var $70 = HEAP[$iftmp_134];
      HEAP[$res] = $70;
      __label__ = 19;
      break;
     case 19:
      var $71 = HEAP[$res];
      HEAP[$0] = $71;
      var $72 = HEAP[$0];
      HEAP[$retval] = $72;
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
  function _validate_try($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $iftmp_141 = __stackBase__ + 8;
      var $iftmp_140 = __stackBase__ + 12;
      var $iftmp_139 = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $iftmp_138 = __stackBase__ + 24;
      var $iftmp_136 = __stackBase__ + 28;
      var $iftmp_135 = __stackBase__ + 32;
      var $nch = __stackBase__ + 36;
      var $pos = __stackBase__ + 40;
      var $res = __stackBase__ + 44;
      var $name = __stackBase__ + 48;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      HEAP[$pos] = 3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 296);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] <= 5) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      if (HEAP[$nch] % 3 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$iftmp_135] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_135] = 0;
      __label__ = 5;
      break;
     case 5:
      var $12 = HEAP[$iftmp_135];
      HEAP[$res] = $12;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 6:
      
      
      
      var $18 = HEAP[HEAP[$tree_addr] + 20];
      var $19 = _validate_terminal($18, 1, __str129);
      
      if ($19 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $24 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $25 = _validate_terminal($24, 11, __str54);
      
      if ($25 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      var $30 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $31 = _validate_suite($30);
      
      if ($31 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      var $38 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 2);
      var $39 = _validate_terminal($38, 11, __str54);
      
      if ($39 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      var $46 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 1);
      var $47 = _validate_suite($46);
      
      if ($47 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      HEAP[$iftmp_136] = 1;
      __label__ = 13;
      break;
     case 12:
      HEAP[$iftmp_136] = 0;
      __label__ = 13;
      break;
     case 13:
      var $49 = HEAP[$iftmp_136];
      HEAP[$res] = $49;
      __label__ = 18;
      break;
     case 14:
      var $50 = _PyErr_Occurred();
      
      if ($50 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      HEAP[$name] = __str130;
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 3)] != 299) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      
      
      var $68 = HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 3) + 4];
      HEAP[$name] = $68;
      __label__ = 17;
      break;
     case 17:
      var $69 = HEAP[_parser_error];
      var $70 = HEAP[$name];
      var $71 = _PyErr_Format($69, __str131, allocate([ $70, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 18;
      break;
     case 18:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 19:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos]] == 1) {
        __label__ = 20;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 20:
      
      
      
      
      
      
      var $88 = HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos] + 4];
      var $89 = _strcmp($88, __str132);
      
      if ($89 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 21:
      var $91 = HEAP[$tree_addr];
      var $92 = _validate_numnodes($91, 6, __str133);
      
      if ($92 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      var $97 = HEAP[HEAP[$tree_addr] + 20] + 96;
      var $98 = _validate_terminal($97, 11, __str54);
      
      if ($98 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      var $103 = HEAP[HEAP[$tree_addr] + 20] + 120;
      var $104 = _validate_suite($103);
      
      if ($104 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      HEAP[$iftmp_138] = 1;
      __label__ = 26;
      break;
     case 25:
      HEAP[$iftmp_138] = 0;
      __label__ = 26;
      break;
     case 26:
      var $106 = HEAP[$iftmp_138];
      HEAP[$res] = $106;
      var $107 = HEAP[$res];
      HEAP[$0] = $107;
      __label__ = 56;
      break;
     case 27:
      __label__ = 34;
      break;
     case 28:
      
      
      
      
      var $112 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos];
      var $113 = _validate_except_clause($112);
      
      if ($113 == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      
      
      var $120 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$pos] + 1);
      var $121 = _validate_terminal($120, 11, __str54);
      
      if ($121 == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      
      
      var $128 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$pos] + 2);
      var $129 = _validate_suite($128);
      
      if ($129 == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      HEAP[$iftmp_139] = 1;
      __label__ = 33;
      break;
     case 32:
      HEAP[$iftmp_139] = 0;
      __label__ = 33;
      break;
     case 33:
      var $131 = HEAP[$iftmp_139];
      HEAP[$res] = $131;
      
      var $133 = HEAP[$pos] + 3;
      HEAP[$pos] = $133;
      __label__ = 34;
      break;
     case 34:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      if (HEAP[$pos] >= HEAP[$nch]) {
        __label__ = 37;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos]] == 299) {
        __label__ = 28;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 38:
      
      
      
      if (HEAP[$pos] < HEAP[$nch]) {
        __label__ = 39;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 39:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos]] == 1) {
        __label__ = 40;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 40:
      
      
      
      
      
      
      var $166 = HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos] + 4];
      var $167 = _strcmp($166, __str58);
      
      if ($167 == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 41:
      
      
      
      
      
      var $174 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$pos] + 1);
      var $175 = _validate_terminal($174, 11, __str54);
      
      if ($175 == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      
      
      
      
      
      var $182 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$pos] + 2);
      var $183 = _validate_suite($182);
      
      if ($183 == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      HEAP[$iftmp_140] = 1;
      __label__ = 45;
      break;
     case 44:
      HEAP[$iftmp_140] = 0;
      __label__ = 45;
      break;
     case 45:
      var $185 = HEAP[$iftmp_140];
      HEAP[$res] = $185;
      
      var $187 = HEAP[$pos] + 3;
      HEAP[$pos] = $187;
      __label__ = 46;
      break;
     case 46:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 47:
      
      
      
      if (HEAP[$pos] < HEAP[$nch]) {
        __label__ = 48;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 48:
      
      
      
      
      var $197 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos];
      var $198 = _validate_terminal($197, 1, __str132);
      
      if ($198 == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 49:
      
      var $201 = HEAP[$pos] + 3;
      var $202 = HEAP[$tree_addr];
      var $203 = _validate_numnodes($202, $201, __str134);
      
      if ($203 == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 50:
      
      
      
      
      
      var $210 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$pos] + 1);
      var $211 = _validate_terminal($210, 11, __str54);
      
      if ($211 == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 51:
      
      
      
      
      
      var $218 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$pos] + 2);
      var $219 = _validate_suite($218);
      
      if ($219 == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 52:
      HEAP[$iftmp_141] = 1;
      __label__ = 54;
      break;
     case 53:
      HEAP[$iftmp_141] = 0;
      __label__ = 54;
      break;
     case 54:
      var $221 = HEAP[$iftmp_141];
      HEAP[$res] = $221;
      __label__ = 55;
      break;
     case 55:
      var $222 = HEAP[$res];
      HEAP[$0] = $222;
      __label__ = 56;
      break;
     case 56:
      var $223 = HEAP[$0];
      HEAP[$retval] = $223;
      __label__ = 57;
      break;
     case 57:
      var $retval56 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval56;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_except_clause($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_143 = __stackBase__ + 12;
      var $iftmp_142 = __stackBase__ + 16;
      var $nch = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 299);
      
      if ($5 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$nch] == 4) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      var $16 = HEAP[HEAP[$tree_addr] + 20];
      var $17 = _validate_terminal($16, 1, __str130);
      
      if ($17 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      HEAP[$iftmp_142] = 1;
      __label__ = 7;
      break;
     case 6:
      HEAP[$iftmp_142] = 0;
      __label__ = 7;
      break;
     case 7:
      var $19 = HEAP[$iftmp_142];
      HEAP[$res] = $19;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      if (HEAP[$nch] > 1) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      var $27 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $28 = _validate_test($27);
      HEAP[$res] = $28;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 11:
      
      
      if (HEAP[$nch] == 4) {
        __label__ = 12;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 48] == 1) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      var $43 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $44 = _validate_terminal($43, 1, __str112);
      HEAP[$res] = $44;
      __label__ = 15;
      break;
     case 14:
      
      
      
      var $48 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $49 = _validate_terminal($48, 12, __str52);
      HEAP[$res] = $49;
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      var $55 = HEAP[HEAP[$tree_addr] + 20] + 72;
      var $56 = _validate_test($55);
      
      if ($56 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      HEAP[$iftmp_143] = 1;
      __label__ = 19;
      break;
     case 18:
      HEAP[$iftmp_143] = 0;
      __label__ = 19;
      break;
     case 19:
      var $58 = HEAP[$iftmp_143];
      HEAP[$res] = $58;
      __label__ = 20;
      break;
     case 20:
      var $59 = HEAP[$res];
      HEAP[$0] = $59;
      var $60 = HEAP[$0];
      HEAP[$retval] = $60;
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
  function _validate_test($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_146 = __stackBase__ + 12;
      var $iftmp_145 = __stackBase__ + 16;
      var $iftmp_144 = __stackBase__ + 20;
      var $nch = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 304);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if (((HEAP[$nch] & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[$iftmp_144] = 1;
      __label__ = 4;
      break;
     case 3:
      HEAP[$iftmp_144] = 0;
      __label__ = 4;
      break;
     case 4:
      var $10 = HEAP[$iftmp_144];
      HEAP[$res] = $10;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20]] != 321) {
        __label__ = 11;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if (HEAP[$nch] != 1) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $25 = HEAP[HEAP[$tree_addr] + 20];
      var $26 = _validate_lambdef($25);
      
      if ($26 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      HEAP[$iftmp_145] = 1;
      __label__ = 10;
      break;
     case 9:
      HEAP[$iftmp_145] = 0;
      __label__ = 10;
      break;
     case 10:
      var $28 = HEAP[$iftmp_145];
      HEAP[$res] = $28;
      __label__ = 22;
      break;
     case 11:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 12:
      
      
      
      var $34 = HEAP[HEAP[$tree_addr] + 20];
      var $35 = _validate_or_test($34);
      HEAP[$res] = $35;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 19;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if (HEAP[$nch] != 5) {
        __label__ = 20;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      var $45 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $46 = _validate_terminal($45, 1, __str57);
      
      if ($46 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      var $51 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $52 = _validate_or_test($51);
      
      if ($52 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      var $57 = HEAP[HEAP[$tree_addr] + 20] + 72;
      var $58 = _validate_terminal($57, 1, __str58);
      
      if ($58 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      var $63 = HEAP[HEAP[$tree_addr] + 20] + 96;
      var $64 = _validate_test($63);
      
      if ($64 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$iftmp_146] = 1;
      __label__ = 21;
      break;
     case 20:
      HEAP[$iftmp_146] = 0;
      __label__ = 21;
      break;
     case 21:
      var $66 = HEAP[$iftmp_146];
      HEAP[$res] = $66;
      __label__ = 22;
      break;
     case 22:
      var $67 = HEAP[$res];
      HEAP[$0] = $67;
      var $68 = HEAP[$0];
      HEAP[$retval] = $68;
      __label__ = 23;
      break;
     case 23:
      var $retval25 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval25;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_old_test($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_147 = __stackBase__ + 12;
      var $nch = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 302);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] != 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[$iftmp_147] = 1;
      __label__ = 4;
      break;
     case 3:
      HEAP[$iftmp_147] = 0;
      __label__ = 4;
      break;
     case 4:
      var $9 = HEAP[$iftmp_147];
      HEAP[$res] = $9;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20]] != 303) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $22 = HEAP[HEAP[$tree_addr] + 20];
      var $23 = _validate_old_lambdef($22);
      HEAP[$res] = $23;
      __label__ = 9;
      break;
     case 7:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      var $29 = HEAP[HEAP[$tree_addr] + 20];
      var $30 = _validate_or_test($29);
      HEAP[$res] = $30;
      __label__ = 9;
      break;
     case 9:
      var $31 = HEAP[$res];
      HEAP[$0] = $31;
      var $32 = HEAP[$0];
      HEAP[$retval] = $32;
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
  function _validate_or_test($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_149 = __stackBase__ + 12;
      var $iftmp_148 = __stackBase__ + 16;
      var $nch = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      var $pos = __stackBase__ + 28;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 305);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if (((HEAP[$nch] & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[$iftmp_148] = 1;
      __label__ = 4;
      break;
     case 3:
      HEAP[$iftmp_148] = 0;
      __label__ = 4;
      break;
     case 4:
      var $10 = HEAP[$iftmp_148];
      HEAP[$res] = $10;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 5:
      
      
      
      var $16 = HEAP[HEAP[$tree_addr] + 20];
      var $17 = _validate_and_test($16);
      HEAP[$res] = $17;
      HEAP[$pos] = 1;
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      var $22 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos];
      var $23 = _validate_terminal($22, 1, __str135);
      
      if ($23 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      var $30 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$pos] + 1);
      var $31 = _validate_and_test($30);
      
      if ($31 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      HEAP[$iftmp_149] = 1;
      __label__ = 10;
      break;
     case 9:
      HEAP[$iftmp_149] = 0;
      __label__ = 10;
      break;
     case 10:
      var $33 = HEAP[$iftmp_149];
      HEAP[$res] = $33;
      
      var $35 = HEAP[$pos] + 2;
      HEAP[$pos] = $35;
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      if (HEAP[$pos] < HEAP[$nch]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $41 = HEAP[$res];
      HEAP[$0] = $41;
      var $42 = HEAP[$0];
      HEAP[$retval] = $42;
      __label__ = 14;
      break;
     case 14:
      var $retval16 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_and_test($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_151 = __stackBase__ + 12;
      var $iftmp_150 = __stackBase__ + 16;
      var $pos = __stackBase__ + 20;
      var $nch = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 306);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if (((HEAP[$nch] & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[HEAP[$tree_addr] + 20];
      var $14 = _validate_not_test($13);
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$iftmp_150] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_150] = 0;
      __label__ = 5;
      break;
     case 5:
      var $16 = HEAP[$iftmp_150];
      HEAP[$res] = $16;
      HEAP[$pos] = 1;
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      var $21 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos];
      var $22 = _validate_terminal($21, 1, __str136);
      
      if ($22 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $27 = HEAP[HEAP[$tree_addr] + 20];
      var $28 = _validate_not_test($27);
      
      if ($28 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      HEAP[$iftmp_151] = 1;
      __label__ = 10;
      break;
     case 9:
      HEAP[$iftmp_151] = 0;
      __label__ = 10;
      break;
     case 10:
      var $30 = HEAP[$iftmp_151];
      HEAP[$res] = $30;
      
      var $32 = HEAP[$pos] + 2;
      HEAP[$pos] = $32;
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      if (HEAP[$pos] < HEAP[$nch]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $38 = HEAP[$res];
      HEAP[$0] = $38;
      var $39 = HEAP[$0];
      HEAP[$retval] = $39;
      __label__ = 14;
      break;
     case 14:
      var $retval16 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_not_test($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_153 = __stackBase__ + 12;
      var $iftmp_152 = __stackBase__ + 16;
      var $nch = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 307);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] == 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$iftmp_152] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_152] = 0;
      __label__ = 5;
      break;
     case 5:
      var $11 = HEAP[$iftmp_152];
      HEAP[$res] = $11;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 6:
      
      
      if (HEAP[$nch] == 2) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      
      
      
      var $19 = HEAP[HEAP[$tree_addr] + 20];
      var $20 = _validate_terminal($19, 1, __str137);
      
      if ($20 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      var $25 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $26 = _validate_not_test($25);
      
      if ($26 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      HEAP[$iftmp_153] = 1;
      __label__ = 11;
      break;
     case 10:
      HEAP[$iftmp_153] = 0;
      __label__ = 11;
      break;
     case 11:
      var $28 = HEAP[$iftmp_153];
      HEAP[$res] = $28;
      __label__ = 14;
      break;
     case 12:
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      var $34 = HEAP[HEAP[$tree_addr] + 20];
      var $35 = _validate_comparison($34);
      HEAP[$res] = $35;
      __label__ = 14;
      break;
     case 14:
      var $36 = HEAP[$res];
      HEAP[$0] = $36;
      var $37 = HEAP[$0];
      HEAP[$retval] = $37;
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
  function _validate_comparison($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_155 = __stackBase__ + 12;
      var $iftmp_154 = __stackBase__ + 16;
      var $pos = __stackBase__ + 20;
      var $nch = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 308);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if (((HEAP[$nch] & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[HEAP[$tree_addr] + 20];
      var $14 = _validate_expr($13);
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$iftmp_154] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_154] = 0;
      __label__ = 5;
      break;
     case 5:
      var $16 = HEAP[$iftmp_154];
      HEAP[$res] = $16;
      HEAP[$pos] = 1;
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      var $21 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos];
      var $22 = _validate_comp_op($21);
      
      if ($22 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      var $29 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$pos] + 1);
      var $30 = _validate_expr($29);
      
      if ($30 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      HEAP[$iftmp_155] = 1;
      __label__ = 10;
      break;
     case 9:
      HEAP[$iftmp_155] = 0;
      __label__ = 10;
      break;
     case 10:
      var $32 = HEAP[$iftmp_155];
      HEAP[$res] = $32;
      
      var $34 = HEAP[$pos] + 2;
      HEAP[$pos] = $34;
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      if (HEAP[$pos] < HEAP[$nch]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $40 = HEAP[$res];
      HEAP[$0] = $40;
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
      __label__ = 14;
      break;
     case 14:
      var $retval16 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_comp_op($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $iftmp_158 = __stackBase__ + 8;
      var $iftmp_156 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      var $nch = __stackBase__ + 24;
      
      HEAP[$tree_addr] = $tree;
      HEAP[$res] = 0;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 309);
      
      if ($5 == 0) {
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
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 3:
      
      
      
      var $12 = HEAP[HEAP[$tree_addr] + 20];
      HEAP[$tree_addr] = $12;
      
      
      
      var $16 = HEAP[HEAP[$tree_addr]];
      if ($16 == 1) {
        __label__ = 5;
        break;
      } else if ($16 == 20) {
        __label__ = 4;
        break;
      } else if ($16 == 21) {
        __label__ = 4;
        break;
      } else if ($16 == 22) {
        __label__ = 4;
        break;
      } else if ($16 == 28) {
        __label__ = 4;
        break;
      } else if ($16 == 29) {
        __label__ = 4;
        break;
      } else if ($16 == 30) {
        __label__ = 4;
        break;
      } else if ($16 == 31) {
        __label__ = 4;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 4:
      HEAP[$res] = 1;
      __label__ = 13;
      break;
     case 5:
      
      
      var $19 = HEAP[HEAP[$tree_addr] + 4];
      var $20 = _strcmp($19, __str76);
      
      if ($20 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $24 = HEAP[HEAP[$tree_addr] + 4];
      var $25 = _strcmp($24, __str138);
      
      if ($25 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$iftmp_156] = 1;
      __label__ = 9;
      break;
     case 8:
      HEAP[$iftmp_156] = 0;
      __label__ = 9;
      break;
     case 9:
      var $27 = HEAP[$iftmp_156];
      HEAP[$res] = $27;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      var $32 = HEAP[HEAP[$tree_addr] + 4];
      var $33 = HEAP[_parser_error];
      var $34 = _PyErr_Format($33, __str139, allocate([ $32, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 11;
      break;
     case 11:
      __label__ = 13;
      break;
     case 12:
      _err_string(__str140);
      __label__ = 13;
      break;
     case 13:
      __label__ = 26;
      break;
     case 14:
      var $35 = HEAP[$tree_addr];
      var $36 = _validate_numnodes($35, 2, __str141);
      HEAP[$res] = $36;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 15:
      
      
      
      var $42 = HEAP[HEAP[$tree_addr] + 20];
      var $43 = _validate_ntype($42, 1);
      
      if ($43 == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      var $48 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $49 = _validate_ntype($48, 1);
      
      if ($49 == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      
      var $56 = HEAP[HEAP[HEAP[$tree_addr] + 20] + 4];
      var $57 = _strcmp($56, __str138);
      
      if ($57 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      var $64 = HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 + 4];
      var $65 = _strcmp($64, __str137);
      
      if ($65 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      
      var $72 = HEAP[HEAP[HEAP[$tree_addr] + 20] + 4];
      var $73 = _strcmp($72, __str137);
      
      if ($73 != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      
      var $80 = HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 + 4];
      var $81 = _strcmp($80, __str76);
      
      if ($81 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      HEAP[$iftmp_158] = 1;
      __label__ = 23;
      break;
     case 22:
      HEAP[$iftmp_158] = 0;
      __label__ = 23;
      break;
     case 23:
      var $83 = HEAP[$iftmp_158];
      HEAP[$res] = $83;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 24:
      var $86 = _PyErr_Occurred();
      
      if ($86 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      _err_string(__str142);
      __label__ = 26;
      break;
     case 26:
      var $88 = HEAP[$res];
      HEAP[$0] = $88;
      __label__ = 27;
      break;
     case 27:
      var $89 = HEAP[$0];
      HEAP[$retval] = $89;
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
  function _validate_expr($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_160 = __stackBase__ + 12;
      var $iftmp_159 = __stackBase__ + 16;
      var $j = __stackBase__ + 20;
      var $nch = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 310);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if (((HEAP[$nch] & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[HEAP[$tree_addr] + 20];
      var $14 = _validate_xor_expr($13);
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$iftmp_159] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_159] = 0;
      __label__ = 5;
      break;
     case 5:
      var $16 = HEAP[$iftmp_159];
      HEAP[$res] = $16;
      HEAP[$j] = 2;
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      var $21 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$j];
      var $22 = _validate_xor_expr($21);
      
      if ($22 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      var $29 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$j] - 1);
      var $30 = _validate_terminal($29, 18, __str143);
      
      if ($30 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      HEAP[$iftmp_160] = 1;
      __label__ = 10;
      break;
     case 9:
      HEAP[$iftmp_160] = 0;
      __label__ = 10;
      break;
     case 10:
      var $32 = HEAP[$iftmp_160];
      HEAP[$res] = $32;
      
      var $34 = HEAP[$j] + 2;
      HEAP[$j] = $34;
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      if (HEAP[$j] < HEAP[$nch]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $40 = HEAP[$res];
      HEAP[$0] = $40;
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
      __label__ = 14;
      break;
     case 14:
      var $retval16 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_xor_expr($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_162 = __stackBase__ + 12;
      var $iftmp_161 = __stackBase__ + 16;
      var $j = __stackBase__ + 20;
      var $nch = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 311);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if (((HEAP[$nch] & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[HEAP[$tree_addr] + 20];
      var $14 = _validate_and_expr($13);
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$iftmp_161] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_161] = 0;
      __label__ = 5;
      break;
     case 5:
      var $16 = HEAP[$iftmp_161];
      HEAP[$res] = $16;
      HEAP[$j] = 2;
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      
      var $22 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$j] - 1);
      var $23 = _validate_terminal($22, 33, __str144);
      
      if ($23 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      var $29 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$j];
      var $30 = _validate_and_expr($29);
      
      if ($30 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      HEAP[$iftmp_162] = 1;
      __label__ = 10;
      break;
     case 9:
      HEAP[$iftmp_162] = 0;
      __label__ = 10;
      break;
     case 10:
      var $32 = HEAP[$iftmp_162];
      HEAP[$res] = $32;
      
      var $34 = HEAP[$j] + 2;
      HEAP[$j] = $34;
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      if (HEAP[$j] < HEAP[$nch]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $40 = HEAP[$res];
      HEAP[$0] = $40;
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
      __label__ = 14;
      break;
     case 14:
      var $retval16 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_and_expr($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_164 = __stackBase__ + 12;
      var $iftmp_163 = __stackBase__ + 16;
      var $pos = __stackBase__ + 20;
      var $nch = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 312);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if (((HEAP[$nch] & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[HEAP[$tree_addr] + 20];
      var $14 = _validate_shift_expr($13);
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$iftmp_163] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_163] = 0;
      __label__ = 5;
      break;
     case 5:
      var $16 = HEAP[$iftmp_163];
      HEAP[$res] = $16;
      HEAP[$pos] = 1;
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      var $21 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos];
      var $22 = _validate_terminal($21, 19, __str145);
      
      if ($22 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      var $29 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$pos] + 1);
      var $30 = _validate_shift_expr($29);
      
      if ($30 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      HEAP[$iftmp_164] = 1;
      __label__ = 10;
      break;
     case 9:
      HEAP[$iftmp_164] = 0;
      __label__ = 10;
      break;
     case 10:
      var $32 = HEAP[$iftmp_164];
      HEAP[$res] = $32;
      
      var $34 = HEAP[$pos] + 2;
      HEAP[$pos] = $34;
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      if (HEAP[$pos] < HEAP[$nch]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $40 = HEAP[$res];
      HEAP[$0] = $40;
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
      __label__ = 14;
      break;
     case 14:
      var $retval16 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_chain_two_ops($tree, $termvalid, $op1, $op2) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $termvalid_addr = __stackBase__ + 4;
      var $op1_addr = __stackBase__ + 8;
      var $op2_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $iftmp_165 = __stackBase__ + 24;
      var $pos = __stackBase__ + 28;
      var $nch = __stackBase__ + 32;
      var $res = __stackBase__ + 36;
      
      HEAP[$tree_addr] = $tree;
      HEAP[$termvalid_addr] = $termvalid;
      HEAP[$op1_addr] = $op1;
      HEAP[$op2_addr] = $op2;
      HEAP[$pos] = 1;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      
      
      
      
      
      
      
      if (((HEAP[$nch] & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      var $10 = HEAP[HEAP[$tree_addr] + 20];
      var $11 = HEAP[$termvalid_addr];
      var $12 = FUNCTION_TABLE[$11]($10);
      
      if ($12 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[$iftmp_165] = 1;
      __label__ = 4;
      break;
     case 3:
      HEAP[$iftmp_165] = 0;
      __label__ = 4;
      break;
     case 4:
      var $14 = HEAP[$iftmp_165];
      HEAP[$res] = $14;
      __label__ = 10;
      break;
     case 5:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos]] != HEAP[$op1_addr]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $29 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos];
      var $30 = HEAP[$op2_addr];
      var $31 = _validate_ntype($29, $30);
      HEAP[$res] = $31;
      __label__ = 7;
      break;
     case 7:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $39 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$pos] + 1);
      var $40 = HEAP[$termvalid_addr];
      var $41 = FUNCTION_TABLE[$40]($39);
      HEAP[$res] = $41;
      __label__ = 9;
      break;
     case 9:
      
      var $43 = HEAP[$pos] + 2;
      HEAP[$pos] = $43;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      if (HEAP[$pos] < HEAP[$nch]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $49 = HEAP[$res];
      HEAP[$0] = $49;
      var $50 = HEAP[$0];
      HEAP[$retval] = $50;
      __label__ = 13;
      break;
     case 13:
      var $retval15 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_shift_expr($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $iftmp_166 = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$tree_addr] = $tree;
      var $1 = HEAP[$tree_addr];
      var $2 = _validate_ntype($1, 313);
      
      if ($2 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_chain_two_ops($4, FUNCTION_TABLE_OFFSET + 16, 34, 35);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[$iftmp_166] = 1;
      __label__ = 4;
      break;
     case 3:
      HEAP[$iftmp_166] = 0;
      __label__ = 4;
      break;
     case 4:
      var $7 = HEAP[$iftmp_166];
      HEAP[$0] = $7;
      var $8 = HEAP[$0];
      HEAP[$retval] = $8;
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
  function _validate_arith_expr($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $iftmp_167 = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$tree_addr] = $tree;
      var $1 = HEAP[$tree_addr];
      var $2 = _validate_ntype($1, 314);
      
      if ($2 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_chain_two_ops($4, FUNCTION_TABLE_OFFSET + 18, 14, 15);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[$iftmp_167] = 1;
      __label__ = 4;
      break;
     case 3:
      HEAP[$iftmp_167] = 0;
      __label__ = 4;
      break;
     case 4:
      var $7 = HEAP[$iftmp_167];
      HEAP[$0] = $7;
      var $8 = HEAP[$0];
      HEAP[$retval] = $8;
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
  function _validate_term($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_169 = __stackBase__ + 12;
      var $iftmp_168 = __stackBase__ + 16;
      var $pos = __stackBase__ + 20;
      var $nch = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      
      HEAP[$tree_addr] = $tree;
      HEAP[$pos] = 1;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 315);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if (((HEAP[$nch] & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[HEAP[$tree_addr] + 20];
      var $14 = _validate_factor($13);
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$iftmp_168] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_168] = 0;
      __label__ = 5;
      break;
     case 5:
      var $16 = HEAP[$iftmp_168];
      HEAP[$res] = $16;
      __label__ = 14;
      break;
     case 6:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos]] == 16) {
        __label__ = 10;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos]] == 17) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos]] == 48) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos]] == 24) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      
      
      var $54 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$pos] + 1);
      var $55 = _validate_factor($54);
      
      if ($55 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      HEAP[$iftmp_169] = 1;
      __label__ = 13;
      break;
     case 12:
      HEAP[$iftmp_169] = 0;
      __label__ = 13;
      break;
     case 13:
      var $57 = HEAP[$iftmp_169];
      HEAP[$res] = $57;
      
      var $59 = HEAP[$pos] + 2;
      HEAP[$pos] = $59;
      __label__ = 14;
      break;
     case 14:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      if (HEAP[$pos] < HEAP[$nch]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $65 = HEAP[$res];
      HEAP[$0] = $65;
      var $66 = HEAP[$0];
      HEAP[$retval] = $66;
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
  function _validate_factor($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_170 = __stackBase__ + 12;
      var $nch = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 316);
      
      if ($5 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] != 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20]] == 14) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20]] == 15) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20]] == 32) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      var $33 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $34 = _validate_factor($33);
      
      if ($34 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if (HEAP[$nch] != 1) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $41 = HEAP[HEAP[$tree_addr] + 20];
      var $42 = _validate_power($41);
      
      if ($42 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$iftmp_170] = 1;
      __label__ = 10;
      break;
     case 9:
      HEAP[$iftmp_170] = 0;
      __label__ = 10;
      break;
     case 10:
      var $44 = HEAP[$iftmp_170];
      HEAP[$res] = $44;
      var $45 = HEAP[$res];
      HEAP[$0] = $45;
      var $46 = HEAP[$0];
      HEAP[$retval] = $46;
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
  function _validate_power($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $iftmp_172 = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $iftmp_171 = __stackBase__ + 16;
      var $pos = __stackBase__ + 20;
      var $nch = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      
      HEAP[$tree_addr] = $tree;
      HEAP[$pos] = 1;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 317);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] <= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $12 = HEAP[HEAP[$tree_addr] + 20];
      var $13 = _validate_atom($12);
      
      if ($13 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$iftmp_171] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_171] = 0;
      __label__ = 5;
      break;
     case 5:
      var $15 = HEAP[$iftmp_171];
      HEAP[$res] = $15;
      __label__ = 7;
      break;
     case 6:
      
      
      
      
      var $20 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos];
      
      var $22 = HEAP[$pos] + 1;
      HEAP[$pos] = $22;
      var $23 = _validate_trailer($20);
      HEAP[$res] = $23;
      __label__ = 7;
      break;
     case 7:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      if (HEAP[$pos] >= HEAP[$nch]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos]] == 322) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 11:
      
      
      
      if (HEAP[$pos] < HEAP[$nch]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 12:
      
      
      
      
      
      if ((HEAP[$nch] - HEAP[$pos] & 1) != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      _err_string(__str146);
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 14:
      __label__ = 20;
      break;
     case 15:
      
      
      
      
      var $51 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos];
      var $52 = _validate_terminal($51, 36, __str67);
      
      if ($52 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      var $59 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$pos] + 1);
      var $60 = _validate_factor($59);
      
      if ($60 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      HEAP[$iftmp_172] = 1;
      __label__ = 19;
      break;
     case 18:
      HEAP[$iftmp_172] = 0;
      __label__ = 19;
      break;
     case 19:
      var $62 = HEAP[$iftmp_172];
      HEAP[$res] = $62;
      
      var $64 = HEAP[$pos] + 2;
      HEAP[$pos] = $64;
      __label__ = 20;
      break;
     case 20:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      if (HEAP[$nch] - 1 > HEAP[$pos]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      var $71 = HEAP[$res];
      HEAP[$0] = $71;
      __label__ = 23;
      break;
     case 23:
      var $72 = HEAP[$0];
      HEAP[$retval] = $72;
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
  function _validate_atom($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_176 = __stackBase__ + 12;
      var $iftmp_175 = __stackBase__ + 16;
      var $iftmp_174 = __stackBase__ + 20;
      var $iftmp_173 = __stackBase__ + 24;
      var $pos = __stackBase__ + 28;
      var $nch = __stackBase__ + 32;
      var $res = __stackBase__ + 36;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 318);
      HEAP[$res] = $5;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] <= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $11 = HEAP[$nch] + 1;
      var $12 = HEAP[$tree_addr];
      var $13 = _validate_numnodes($12, $11, __str147);
      HEAP[$res] = $13;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$tree_addr] + 20]];
      if ($22 == 1) {
        __label__ = 39;
        break;
      } else if ($22 == 2) {
        __label__ = 39;
        break;
      } else if ($22 == 3) {
        __label__ = 40;
        break;
      } else if ($22 == 7) {
        __label__ = 5;
        break;
      } else if ($22 == 9) {
        __label__ = 15;
        break;
      } else if ($22 == 25) {
        __label__ = 33;
        break;
      } else if ($22 == 26) {
        __label__ = 25;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 5:
      
      
      if (HEAP[$nch] > 3) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      var $30 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 1);
      var $31 = _validate_terminal($30, 8, __str56);
      
      if ($31 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      HEAP[$iftmp_173] = 1;
      __label__ = 9;
      break;
     case 8:
      HEAP[$iftmp_173] = 0;
      __label__ = 9;
      break;
     case 9:
      var $33 = HEAP[$iftmp_173];
      HEAP[$res] = $33;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      
      
      if (HEAP[$nch] == 3) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24] == 340) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      var $48 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $49 = _validate_yield_expr($48);
      HEAP[$res] = $49;
      __label__ = 14;
      break;
     case 13:
      
      
      
      var $53 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $54 = _validate_testlist_comp($53);
      HEAP[$res] = $54;
      __label__ = 14;
      break;
     case 14:
      __label__ = 46;
      break;
     case 15:
      
      
      if (HEAP[$nch] == 2) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      var $60 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $61 = _validate_ntype($60, 10);
      HEAP[$res] = $61;
      __label__ = 24;
      break;
     case 17:
      
      
      if (HEAP[$nch] == 3) {
        __label__ = 18;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 18:
      
      
      
      var $67 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $68 = _validate_listmaker($67);
      
      if ($68 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      var $73 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $74 = _validate_ntype($73, 10);
      
      if ($74 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      HEAP[$iftmp_174] = 1;
      __label__ = 22;
      break;
     case 21:
      HEAP[$iftmp_174] = 0;
      __label__ = 22;
      break;
     case 22:
      var $76 = HEAP[$iftmp_174];
      HEAP[$res] = $76;
      __label__ = 24;
      break;
     case 23:
      HEAP[$res] = 0;
      _err_string(__str148);
      __label__ = 24;
      break;
     case 24:
      __label__ = 46;
      break;
     case 25:
      
      
      if (HEAP[$nch] > 3) {
        __label__ = 28;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      
      var $84 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 1);
      var $85 = _validate_ntype($84, 27);
      
      if ($85 == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      HEAP[$iftmp_175] = 1;
      __label__ = 29;
      break;
     case 28:
      HEAP[$iftmp_175] = 0;
      __label__ = 29;
      break;
     case 29:
      var $87 = HEAP[$iftmp_175];
      HEAP[$res] = $87;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      
      
      if (HEAP[$nch] == 3) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      var $95 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $96 = _validate_dictorsetmaker($95);
      HEAP[$res] = $96;
      __label__ = 32;
      break;
     case 32:
      __label__ = 46;
      break;
     case 33:
      
      
      if (HEAP[$nch] != 3) {
        __label__ = 37;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      var $102 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $103 = _validate_testlist1($102);
      
      if ($103 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      var $108 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $109 = _validate_ntype($108, 25);
      
      if ($109 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      HEAP[$iftmp_176] = 1;
      __label__ = 38;
      break;
     case 37:
      HEAP[$iftmp_176] = 0;
      __label__ = 38;
      break;
     case 38:
      var $111 = HEAP[$iftmp_176];
      HEAP[$res] = $111;
      __label__ = 46;
      break;
     case 39:
      
      
      var $114 = HEAP[$nch] == 1;
      HEAP[$res] = $114;
      __label__ = 46;
      break;
     case 40:
      HEAP[$pos] = 1;
      __label__ = 42;
      break;
     case 41:
      
      
      
      
      var $119 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos];
      var $120 = _validate_ntype($119, 3);
      HEAP[$res] = $120;
      
      var $122 = HEAP[$pos] + 1;
      HEAP[$pos] = $122;
      __label__ = 42;
      break;
     case 42:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      
      
      
      if (HEAP[$pos] < HEAP[$nch]) {
        __label__ = 41;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      __label__ = 46;
      break;
     case 45:
      HEAP[$res] = 0;
      __label__ = 46;
      break;
     case 46:
      var $128 = HEAP[$res];
      HEAP[$0] = $128;
      var $129 = HEAP[$0];
      HEAP[$retval] = $129;
      __label__ = 47;
      break;
     case 47:
      var $retval46 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval46;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_listmaker($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_177 = __stackBase__ + 12;
      var $nch = __stackBase__ + 16;
      var $ok = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$nch];
      HEAP[$ok] = $4;
      
      
      if (HEAP[$nch] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      _err_string(__str149);
      __label__ = 3;
      break;
     case 2:
      
      
      
      var $10 = HEAP[HEAP[$tree_addr] + 20];
      var $11 = _validate_test($10);
      HEAP[$ok] = $11;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$nch] != 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24] != 333) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $24 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $25 = _validate_list_for($24);
      HEAP[$ok] = $25;
      __label__ = 19;
      break;
     case 6:
      HEAP[$i] = 1;
      __label__ = 12;
      break;
     case 7:
      
      
      
      
      var $30 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $31 = _validate_terminal($30, 12, __str52);
      
      if ($31 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      var $38 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 1);
      var $39 = _validate_test($38);
      
      if ($39 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      HEAP[$iftmp_177] = 1;
      __label__ = 11;
      break;
     case 10:
      HEAP[$iftmp_177] = 0;
      __label__ = 11;
      break;
     case 11:
      var $41 = HEAP[$iftmp_177];
      HEAP[$ok] = $41;
      
      var $43 = HEAP[$i] + 2;
      HEAP[$i] = $43;
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      if (HEAP[$nch] - HEAP[$i] > 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      if (HEAP[$nch] - 1 != HEAP[$i]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      var $60 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $61 = _validate_terminal($60, 12, __str52);
      HEAP[$ok] = $61;
      __label__ = 19;
      break;
     case 17:
      
      
      
      if (HEAP[$i] != HEAP[$nch]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      HEAP[$ok] = 0;
      _err_string(__str150);
      __label__ = 19;
      break;
     case 19:
      var $65 = HEAP[$ok];
      HEAP[$0] = $65;
      var $66 = HEAP[$0];
      HEAP[$retval] = $66;
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
  function _validate_testlist_comp($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_178 = __stackBase__ + 12;
      var $nch = __stackBase__ + 16;
      var $ok = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$nch];
      HEAP[$ok] = $4;
      
      
      if (HEAP[$nch] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      _err_string(__str151);
      __label__ = 3;
      break;
     case 2:
      
      
      
      var $10 = HEAP[HEAP[$tree_addr] + 20];
      var $11 = _validate_test($10);
      HEAP[$ok] = $11;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$nch] != 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24] != 336) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $24 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $25 = _validate_comp_for($24);
      HEAP[$ok] = $25;
      __label__ = 19;
      break;
     case 6:
      HEAP[$i] = 1;
      __label__ = 12;
      break;
     case 7:
      
      
      
      
      var $30 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $31 = _validate_terminal($30, 12, __str52);
      
      if ($31 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      var $38 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 1);
      var $39 = _validate_test($38);
      
      if ($39 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      HEAP[$iftmp_178] = 1;
      __label__ = 11;
      break;
     case 10:
      HEAP[$iftmp_178] = 0;
      __label__ = 11;
      break;
     case 11:
      var $41 = HEAP[$iftmp_178];
      HEAP[$ok] = $41;
      
      var $43 = HEAP[$i] + 2;
      HEAP[$i] = $43;
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      if (HEAP[$nch] - HEAP[$i] > 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      if (HEAP[$nch] - 1 != HEAP[$i]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      var $60 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $61 = _validate_terminal($60, 12, __str52);
      HEAP[$ok] = $61;
      __label__ = 19;
      break;
     case 17:
      
      
      
      if (HEAP[$i] != HEAP[$nch]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      HEAP[$ok] = 0;
      _err_string(__str152);
      __label__ = 19;
      break;
     case 19:
      var $65 = HEAP[$ok];
      HEAP[$0] = $65;
      var $66 = HEAP[$0];
      HEAP[$retval] = $66;
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
  function _validate_decorator($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_180 = __stackBase__ + 12;
      var $iftmp_179 = __stackBase__ + 16;
      var $ok = __stackBase__ + 20;
      var $nch = __stackBase__ + 24;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 259);
      
      if ($5 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 3) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] == 5) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$nch] == 6) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      
      var $16 = HEAP[HEAP[$tree_addr] + 20];
      var $17 = _validate_terminal($16, 50, __str153);
      
      if ($17 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $22 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $23 = _validate_dotted_name($22);
      
      if ($23 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      var $31 = HEAP[HEAP[$tree_addr] + 16] + -1;
      var $32 = HEAP[HEAP[$tree_addr] + 20] + 24 * $31;
      var $33 = _validate_terminal($32, 4, 0);
      
      if ($33 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      HEAP[$iftmp_179] = 1;
      __label__ = 9;
      break;
     case 8:
      HEAP[$iftmp_179] = 0;
      __label__ = 9;
      break;
     case 9:
      var $35 = HEAP[$iftmp_179];
      HEAP[$ok] = $35;
      
      
      if (HEAP[$ok] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 10:
      
      
      if (HEAP[$nch] != 3) {
        __label__ = 11;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 11:
      
      
      
      var $43 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $44 = _validate_terminal($43, 7, __str55);
      
      if ($44 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      
      var $52 = HEAP[HEAP[$tree_addr] + 16] + -2;
      var $53 = HEAP[HEAP[$tree_addr] + 20] + 24 * $52;
      var $54 = _validate_terminal($53, 8, __str56);
      
      if ($54 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      HEAP[$iftmp_180] = 1;
      __label__ = 15;
      break;
     case 14:
      HEAP[$iftmp_180] = 0;
      __label__ = 15;
      break;
     case 15:
      var $56 = HEAP[$iftmp_180];
      HEAP[$ok] = $56;
      
      
      if (HEAP[$ok] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      if (HEAP[$nch] == 6) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      var $64 = HEAP[HEAP[$tree_addr] + 20] + 72;
      var $65 = _validate_arglist($64);
      HEAP[$ok] = $65;
      __label__ = 18;
      break;
     case 18:
      var $66 = HEAP[$ok];
      HEAP[$0] = $66;
      var $67 = HEAP[$0];
      HEAP[$retval] = $67;
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
  function _validate_decorators($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_181 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $nch = __stackBase__ + 20;
      var $ok = __stackBase__ + 24;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 260);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[$iftmp_181] = 1;
      __label__ = 4;
      break;
     case 3:
      HEAP[$iftmp_181] = 0;
      __label__ = 4;
      break;
     case 4:
      var $9 = HEAP[$iftmp_181];
      HEAP[$ok] = $9;
      HEAP[$i] = 0;
      __label__ = 6;
      break;
     case 5:
      
      
      
      
      var $14 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $15 = _validate_decorator($14);
      HEAP[$ok] = $15;
      
      var $17 = HEAP[$i] + 1;
      HEAP[$i] = $17;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      if (HEAP[$i] < HEAP[$nch]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $23 = HEAP[$ok];
      HEAP[$0] = $23;
      var $24 = HEAP[$0];
      HEAP[$retval] = $24;
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
  function _validate_with_item($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_183 = __stackBase__ + 12;
      var $iftmp_182 = __stackBase__ + 16;
      var $nch = __stackBase__ + 20;
      var $ok = __stackBase__ + 24;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 298);
      
      if ($5 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] == 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      var $14 = HEAP[HEAP[$tree_addr] + 20];
      var $15 = _validate_test($14);
      
      if ($15 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      HEAP[$iftmp_182] = 1;
      __label__ = 6;
      break;
     case 5:
      HEAP[$iftmp_182] = 0;
      __label__ = 6;
      break;
     case 6:
      var $17 = HEAP[$iftmp_182];
      HEAP[$ok] = $17;
      
      
      if (HEAP[$ok] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 7:
      
      
      if (HEAP[$nch] == 3) {
        __label__ = 8;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 8:
      
      
      
      var $25 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $26 = _validate_terminal($25, 1, __str112);
      
      if ($26 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      var $31 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $32 = _validate_expr($31);
      
      if ($32 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      HEAP[$iftmp_183] = 1;
      __label__ = 12;
      break;
     case 11:
      HEAP[$iftmp_183] = 0;
      __label__ = 12;
      break;
     case 12:
      var $34 = HEAP[$iftmp_183];
      HEAP[$ok] = $34;
      __label__ = 13;
      break;
     case 13:
      var $35 = HEAP[$ok];
      HEAP[$0] = $35;
      var $36 = HEAP[$0];
      HEAP[$retval] = $36;
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
  function _validate_with_stmt($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_184 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $nch = __stackBase__ + 20;
      var $ok = __stackBase__ + 24;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 297);
      
      if ($5 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      if ((HEAP[$nch] & 1) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[HEAP[$tree_addr] + 20];
      var $14 = _validate_terminal($13, 1, __str154);
      
      if ($14 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[$tree_addr] + 16] + -2;
      var $23 = HEAP[HEAP[$tree_addr] + 20] + 24 * $22;
      var $24 = _validate_terminal($23, 11, __str54);
      
      if ($24 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $32 = HEAP[HEAP[$tree_addr] + 16] + -1;
      var $33 = HEAP[HEAP[$tree_addr] + 20] + 24 * $32;
      var $34 = _validate_suite($33);
      
      if ($34 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      HEAP[$iftmp_184] = 1;
      __label__ = 7;
      break;
     case 6:
      HEAP[$iftmp_184] = 0;
      __label__ = 7;
      break;
     case 7:
      var $36 = HEAP[$iftmp_184];
      HEAP[$ok] = $36;
      HEAP[$i] = 1;
      __label__ = 9;
      break;
     case 8:
      
      
      
      
      var $41 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $42 = _validate_with_item($41);
      HEAP[$ok] = $42;
      
      var $44 = HEAP[$i] + 2;
      HEAP[$i] = $44;
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      if (HEAP[$nch] - 2 > HEAP[$i]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $51 = HEAP[$ok];
      HEAP[$0] = $51;
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
  function _validate_funcdef($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_186 = __stackBase__ + 12;
      var $nch = __stackBase__ + 16;
      var $ok = __stackBase__ + 20;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 262);
      
      if ($5 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] != 5) {
        __label__ = 8;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $15 = HEAP[HEAP[$tree_addr] + 16] + -5;
      var $16 = HEAP[HEAP[$tree_addr] + 20] + 24 * $15;
      var $17 = _validate_terminal($16, 1, __str155);
      
      if ($17 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $25 = HEAP[HEAP[$tree_addr] + 16] + -4;
      var $26 = HEAP[HEAP[$tree_addr] + 20] + 24 * $25;
      var $27 = _validate_ntype($26, 1);
      
      if ($27 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $35 = HEAP[HEAP[$tree_addr] + 16] + -2;
      var $36 = HEAP[HEAP[$tree_addr] + 20] + 24 * $35;
      var $37 = _validate_terminal($36, 11, __str54);
      
      if ($37 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $45 = HEAP[HEAP[$tree_addr] + 16] + -3;
      var $46 = HEAP[HEAP[$tree_addr] + 20] + 24 * $45;
      var $47 = _validate_parameters($46);
      
      if ($47 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      var $55 = HEAP[HEAP[$tree_addr] + 16] + -1;
      var $56 = HEAP[HEAP[$tree_addr] + 20] + 24 * $55;
      var $57 = _validate_suite($56);
      
      if ($57 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      HEAP[$iftmp_186] = 1;
      __label__ = 9;
      break;
     case 8:
      HEAP[$iftmp_186] = 0;
      __label__ = 9;
      break;
     case 9:
      var $59 = HEAP[$iftmp_186];
      HEAP[$ok] = $59;
      var $60 = HEAP[$ok];
      HEAP[$0] = $60;
      var $61 = HEAP[$0];
      HEAP[$retval] = $61;
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
  function _validate_decorated($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_189 = __stackBase__ + 12;
      var $iftmp_188 = __stackBase__ + 16;
      var $iftmp_187 = __stackBase__ + 20;
      var $nch = __stackBase__ + 24;
      var $ok = __stackBase__ + 28;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 261);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] != 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $15 = HEAP[HEAP[$tree_addr] + 16] + -2;
      var $16 = HEAP[HEAP[$tree_addr] + 20] + 24 * $15;
      var $17 = _validate_decorators($16);
      
      if ($17 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$iftmp_187] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_187] = 0;
      __label__ = 5;
      break;
     case 5:
      var $19 = HEAP[$iftmp_187];
      HEAP[$ok] = $19;
      
      
      
      
      
      
      var $26 = HEAP[HEAP[$tree_addr] + 16] + -1;
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * $26] == 262) {
        __label__ = 6;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 6:
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $39 = HEAP[HEAP[$tree_addr] + 16] + -1;
      var $40 = HEAP[HEAP[$tree_addr] + 20] + 24 * $39;
      var $41 = _validate_funcdef($40);
      
      if ($41 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      HEAP[$iftmp_188] = 1;
      __label__ = 10;
      break;
     case 9:
      HEAP[$iftmp_188] = 0;
      __label__ = 10;
      break;
     case 10:
      var $43 = HEAP[$iftmp_188];
      HEAP[$ok] = $43;
      __label__ = 16;
      break;
     case 11:
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      
      var $52 = HEAP[HEAP[$tree_addr] + 16] + -1;
      var $53 = HEAP[HEAP[$tree_addr] + 20] + 24 * $52;
      var $54 = _validate_class($53);
      
      if ($54 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      HEAP[$iftmp_189] = 1;
      __label__ = 15;
      break;
     case 14:
      HEAP[$iftmp_189] = 0;
      __label__ = 15;
      break;
     case 15:
      var $56 = HEAP[$iftmp_189];
      HEAP[$ok] = $56;
      __label__ = 16;
      break;
     case 16:
      var $57 = HEAP[$ok];
      HEAP[$0] = $57;
      var $58 = HEAP[$0];
      HEAP[$retval] = $58;
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
  function _validate_lambdef($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_190 = __stackBase__ + 12;
      var $nch = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 321);
      
      if ($5 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] == 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      
      var $14 = HEAP[HEAP[$tree_addr] + 20];
      var $15 = _validate_terminal($14, 1, __str156);
      
      if ($15 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      var $22 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 2);
      var $23 = _validate_terminal($22, 11, __str54);
      
      if ($23 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      var $30 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 1);
      var $31 = _validate_test($30);
      
      if ($31 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      HEAP[$iftmp_190] = 1;
      __label__ = 8;
      break;
     case 7:
      HEAP[$iftmp_190] = 0;
      __label__ = 8;
      break;
     case 8:
      var $33 = HEAP[$iftmp_190];
      HEAP[$res] = $33;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$nch] != 4) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $41 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $42 = _validate_varargslist($41);
      HEAP[$res] = $42;
      __label__ = 14;
      break;
     case 11:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      var $45 = _PyErr_Occurred();
      
      if ($45 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $47 = HEAP[$tree_addr];
      var $48 = _validate_numnodes($47, 3, __str157);
      __label__ = 14;
      break;
     case 14:
      var $49 = HEAP[$res];
      HEAP[$0] = $49;
      var $50 = HEAP[$0];
      HEAP[$retval] = $50;
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
  function _validate_old_lambdef($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_191 = __stackBase__ + 12;
      var $nch = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 303);
      
      if ($5 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] == 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      
      var $14 = HEAP[HEAP[$tree_addr] + 20];
      var $15 = _validate_terminal($14, 1, __str156);
      
      if ($15 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      var $22 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 2);
      var $23 = _validate_terminal($22, 11, __str54);
      
      if ($23 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      var $30 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 1);
      var $31 = _validate_test($30);
      
      if ($31 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      HEAP[$iftmp_191] = 1;
      __label__ = 8;
      break;
     case 7:
      HEAP[$iftmp_191] = 0;
      __label__ = 8;
      break;
     case 8:
      var $33 = HEAP[$iftmp_191];
      HEAP[$res] = $33;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$nch] != 4) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $41 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $42 = _validate_varargslist($41);
      HEAP[$res] = $42;
      __label__ = 14;
      break;
     case 11:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      var $45 = _PyErr_Occurred();
      
      if ($45 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $47 = HEAP[$tree_addr];
      var $48 = _validate_numnodes($47, 3, __str158);
      __label__ = 14;
      break;
     case 14:
      var $49 = HEAP[$res];
      HEAP[$0] = $49;
      var $50 = HEAP[$0];
      HEAP[$retval] = $50;
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
  function _validate_arglist($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $iftmp_194 = __stackBase__ + 8;
      var $iftmp_193 = __stackBase__ + 12;
      var $iftmp_192 = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $nch = __stackBase__ + 24;
      var $i = __stackBase__ + 28;
      var $ok = __stackBase__ + 32;
      var $ch = __stackBase__ + 36;
      var $sym = __stackBase__ + 40;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      HEAP[$i] = 0;
      HEAP[$ok] = 1;
      
      
      if (HEAP[$nch] <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $7 = HEAP[$nch] + 1;
      var $8 = HEAP[$tree_addr];
      var $9 = _validate_numnodes($8, $7, __str159);
      HEAP[$0] = $9;
      __label__ = 52;
      break;
     case 2:
      
      
      if (HEAP[$nch] > 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 3:
      HEAP[$i] = 0;
      __label__ = 9;
      break;
     case 4:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i]] == 331) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      
      var $24 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      HEAP[$ch] = $24;
      
      
      
      
      if (HEAP[HEAP[$ch] + 16] == 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$ch] + 20] + 24] == 336) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _err_string(__str160);
      HEAP[$0] = 0;
      __label__ = 52;
      break;
     case 8:
      
      var $37 = HEAP[$i] + 1;
      HEAP[$i] = $37;
      __label__ = 9;
      break;
     case 9:
      
      
      
      if (HEAP[$i] < HEAP[$nch]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      __label__ = 18;
      break;
     case 11:
      
      
      
      
      var $45 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $46 = _validate_argument($45);
      
      if ($46 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      var $53 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 1);
      var $54 = _validate_terminal($53, 12, __str52);
      
      if ($54 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      HEAP[$iftmp_192] = 1;
      __label__ = 15;
      break;
     case 14:
      HEAP[$iftmp_192] = 0;
      __label__ = 15;
      break;
     case 15:
      var $56 = HEAP[$iftmp_192];
      HEAP[$ok] = $56;
      
      
      if (HEAP[$ok] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      var $60 = HEAP[$i] + 2;
      HEAP[$i] = $60;
      __label__ = 18;
      break;
     case 17:
      _PyErr_Clear();
      __label__ = 18;
      break;
     case 18:
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      if (HEAP[$nch] - HEAP[$i] > 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      HEAP[$ok] = 1;
      
      
      
      
      if (HEAP[$nch] - HEAP[$i] > 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 21:
      
      
      
      
      
      
      
      var $78 = HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i]];
      HEAP[$sym] = $78;
      
      
      if (HEAP[$sym] == 331) {
        __label__ = 22;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 22:
      
      
      
      
      var $85 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $86 = _validate_argument($85);
      HEAP[$ok] = $86;
      
      
      if (HEAP[$ok] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 23:
      
      
      
      
      if (HEAP[$i] + 1 != HEAP[$nch]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      _err_string(__str161);
      HEAP[$ok] = 0;
      __label__ = 25;
      break;
     case 25:
      __label__ = 51;
      break;
     case 26:
      
      
      if (HEAP[$sym] == 16) {
        __label__ = 27;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 27:
      
      
      
      
      var $99 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $100 = _validate_terminal($99, 16, __str162);
      HEAP[$ok] = $100;
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      
      if (HEAP[$nch] - HEAP[$i] != 2) {
        __label__ = 30;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      
      
      var $112 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 1);
      var $113 = _validate_test($112);
      HEAP[$ok] = $113;
      __label__ = 40;
      break;
     case 30:
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      
      
      if (HEAP[$nch] - HEAP[$i] != 5) {
        __label__ = 39;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      
      
      
      var $125 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 1);
      var $126 = _validate_test($125);
      
      if ($126 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      
      
      var $133 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 2);
      var $134 = _validate_terminal($133, 12, __str52);
      
      if ($134 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      
      
      var $141 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 3);
      var $142 = _validate_terminal($141, 36, __str67);
      
      if ($142 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      
      
      var $149 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 4);
      var $150 = _validate_test($149);
      
      if ($150 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      HEAP[$iftmp_193] = 1;
      __label__ = 38;
      break;
     case 37:
      HEAP[$iftmp_193] = 0;
      __label__ = 38;
      break;
     case 38:
      var $152 = HEAP[$iftmp_193];
      HEAP[$ok] = $152;
      __label__ = 40;
      break;
     case 39:
      _err_string(__str163);
      HEAP[$ok] = 0;
      __label__ = 40;
      break;
     case 40:
      __label__ = 51;
      break;
     case 41:
      
      
      if (HEAP[$sym] == 36) {
        __label__ = 42;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 42:
      
      
      
      
      if (HEAP[$nch] - HEAP[$i] == 2) {
        __label__ = 43;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 43:
      
      
      
      
      var $163 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $164 = _validate_terminal($163, 36, __str67);
      
      if ($164 == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      
      
      
      
      
      var $171 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 1);
      var $172 = _validate_test($171);
      
      if ($172 == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 45:
      HEAP[$iftmp_194] = 1;
      __label__ = 47;
      break;
     case 46:
      HEAP[$iftmp_194] = 0;
      __label__ = 47;
      break;
     case 47:
      var $174 = HEAP[$iftmp_194];
      HEAP[$ok] = $174;
      __label__ = 49;
      break;
     case 48:
      _err_string(__str164);
      HEAP[$ok] = 0;
      __label__ = 49;
      break;
     case 49:
      __label__ = 51;
      break;
     case 50:
      _err_string(__str165);
      HEAP[$ok] = 0;
      __label__ = 51;
      break;
     case 51:
      var $175 = HEAP[$ok];
      HEAP[$0] = $175;
      __label__ = 52;
      break;
     case 52:
      var $176 = HEAP[$0];
      HEAP[$retval] = $176;
      __label__ = 53;
      break;
     case 53:
      var $retval52 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval52;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_argument($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_196 = __stackBase__ + 12;
      var $iftmp_195 = __stackBase__ + 16;
      var $nch = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 331);
      
      if ($5 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$nch] == 3) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      var $16 = HEAP[HEAP[$tree_addr] + 20];
      var $17 = _validate_test($16);
      
      if ($17 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      HEAP[$iftmp_195] = 1;
      __label__ = 7;
      break;
     case 6:
      HEAP[$iftmp_195] = 0;
      __label__ = 7;
      break;
     case 7:
      var $19 = HEAP[$iftmp_195];
      HEAP[$res] = $19;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      if (HEAP[$nch] != 2) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      var $27 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $28 = _validate_comp_for($27);
      HEAP[$res] = $28;
      __label__ = 17;
      break;
     case 10:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 11:
      
      
      if (HEAP[$nch] == 3) {
        __label__ = 12;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 12:
      
      
      
      var $36 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $37 = _validate_terminal($36, 22, __str70);
      
      if ($37 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $42 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $43 = _validate_test($42);
      
      if ($43 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      HEAP[$iftmp_196] = 1;
      __label__ = 16;
      break;
     case 15:
      HEAP[$iftmp_196] = 0;
      __label__ = 16;
      break;
     case 16:
      var $45 = HEAP[$iftmp_196];
      HEAP[$res] = $45;
      __label__ = 17;
      break;
     case 17:
      var $46 = HEAP[$res];
      HEAP[$0] = $46;
      var $47 = HEAP[$0];
      HEAP[$retval] = $47;
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
  function _validate_trailer($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_199 = __stackBase__ + 12;
      var $iftmp_198 = __stackBase__ + 16;
      var $iftmp_197 = __stackBase__ + 20;
      var $nch = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 322);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] == 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] == 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$iftmp_197] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_197] = 0;
      __label__ = 5;
      break;
     case 5:
      var $11 = HEAP[$iftmp_197];
      HEAP[$res] = $11;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 6:
      
      
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[$tree_addr] + 20]];
      if ($20 == 7) {
        __label__ = 7;
        break;
      } else if ($20 == 9) {
        __label__ = 11;
        break;
      } else if ($20 == 23) {
        __label__ = 17;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 7:
      
      
      
      
      
      var $26 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 1);
      var $27 = _validate_terminal($26, 8, __str56);
      HEAP[$res] = $27;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      if (HEAP[$nch] == 3) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      var $35 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $36 = _validate_arglist($35);
      HEAP[$res] = $36;
      __label__ = 10;
      break;
     case 10:
      __label__ = 23;
      break;
     case 11:
      var $37 = HEAP[$tree_addr];
      var $38 = _validate_numnodes($37, 3, __str166);
      
      if ($38 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      var $43 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $44 = _validate_subscriptlist($43);
      
      if ($44 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $49 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $50 = _validate_ntype($49, 10);
      
      if ($50 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      HEAP[$iftmp_198] = 1;
      __label__ = 16;
      break;
     case 15:
      HEAP[$iftmp_198] = 0;
      __label__ = 16;
      break;
     case 16:
      var $52 = HEAP[$iftmp_198];
      HEAP[$res] = $52;
      __label__ = 23;
      break;
     case 17:
      var $53 = HEAP[$tree_addr];
      var $54 = _validate_numnodes($53, 2, __str166);
      
      if ($54 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      var $59 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $60 = _validate_ntype($59, 1);
      
      if ($60 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      HEAP[$iftmp_199] = 1;
      __label__ = 21;
      break;
     case 20:
      HEAP[$iftmp_199] = 0;
      __label__ = 21;
      break;
     case 21:
      var $62 = HEAP[$iftmp_199];
      HEAP[$res] = $62;
      __label__ = 23;
      break;
     case 22:
      HEAP[$res] = 0;
      __label__ = 23;
      break;
     case 23:
      __label__ = 25;
      break;
     case 24:
      var $63 = HEAP[$tree_addr];
      var $64 = _validate_numnodes($63, 2, __str166);
      __label__ = 25;
      break;
     case 25:
      var $65 = HEAP[$res];
      HEAP[$0] = $65;
      var $66 = HEAP[$0];
      HEAP[$retval] = $66;
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
  function _validate_subscriptlist($tree) {
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
      
      HEAP[__stackBase__] = $tree;
      var $1 = HEAP[__stackBase__];
      var $2 = _validate_repeating_list($1, 323, FUNCTION_TABLE_OFFSET + 20, __str167);
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
  function _validate_subscript($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $iftmp_201 = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $iftmp_200 = __stackBase__ + 16;
      var $offset = __stackBase__ + 20;
      var $nch = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      var $rem = __stackBase__ + 32;
      
      HEAP[$tree_addr] = $tree;
      HEAP[$offset] = 0;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 324);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] <= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$nch] > 4) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$iftmp_200] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_200] = 0;
      __label__ = 5;
      break;
     case 5:
      var $11 = HEAP[$iftmp_200];
      HEAP[$res] = $11;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      var $14 = _PyErr_Occurred();
      
      if ($14 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _err_string(__str168);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = 0;
      __label__ = 35;
      break;
     case 9:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20]] == 23) {
        __label__ = 10;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 10:
      var $23 = HEAP[$tree_addr];
      var $24 = _validate_numnodes($23, 3, __str169);
      
      if ($24 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      var $29 = HEAP[HEAP[$tree_addr] + 20];
      var $30 = _validate_terminal($29, 23, __str114);
      
      if ($30 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      var $35 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $36 = _validate_terminal($35, 23, __str114);
      
      if ($36 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $41 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $42 = _validate_terminal($41, 23, __str114);
      
      if ($42 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      HEAP[$iftmp_201] = 1;
      __label__ = 16;
      break;
     case 15:
      HEAP[$iftmp_201] = 0;
      __label__ = 16;
      break;
     case 16:
      var $44 = HEAP[$iftmp_201];
      HEAP[$0] = $44;
      __label__ = 35;
      break;
     case 17:
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 18;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20]] == 304) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      var $57 = HEAP[HEAP[$tree_addr] + 20];
      var $58 = _validate_test($57);
      HEAP[$res] = $58;
      __label__ = 21;
      break;
     case 20:
      
      
      
      var $62 = HEAP[HEAP[$tree_addr] + 20];
      var $63 = _validate_terminal($62, 11, __str54);
      HEAP[$res] = $63;
      __label__ = 21;
      break;
     case 21:
      var $64 = HEAP[$res];
      HEAP[$0] = $64;
      __label__ = 35;
      break;
     case 22:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20]] != 11) {
        __label__ = 24;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      if (HEAP[$nch] == 4) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      var $77 = HEAP[HEAP[$tree_addr] + 20];
      var $78 = _validate_test($77);
      HEAP[$res] = $78;
      HEAP[$offset] = 1;
      __label__ = 25;
      break;
     case 25:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $85 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$offset];
      var $86 = _validate_terminal($85, 11, __str54);
      HEAP[$res] = $86;
      __label__ = 27;
      break;
     case 27:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 28:
      
      var $90 = HEAP[$offset] + 1;
      HEAP[$offset] = $90;
      
      
      var $93 = HEAP[$nch] - HEAP[$offset];
      HEAP[$rem] = $93;
      
      
      if (HEAP[$rem] != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 29:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$offset]] == 304) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $108 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$offset];
      var $109 = _validate_test($108);
      HEAP[$res] = $109;
      
      var $111 = HEAP[$offset] + 1;
      HEAP[$offset] = $111;
      
      var $113 = HEAP[$rem] - 1;
      HEAP[$rem] = $113;
      __label__ = 31;
      break;
     case 31:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 32:
      
      
      if (HEAP[$rem] != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $122 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$offset];
      var $123 = _validate_sliceop($122);
      HEAP[$res] = $123;
      __label__ = 34;
      break;
     case 34:
      var $124 = HEAP[$res];
      HEAP[$0] = $124;
      __label__ = 35;
      break;
     case 35:
      var $125 = HEAP[$0];
      HEAP[$retval] = $125;
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
  function _validate_sliceop($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_202 = __stackBase__ + 12;
      var $nch = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $6 = HEAP[$tree_addr];
      var $7 = _validate_numnodes($6, 2, __str170);
      
      if ($7 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      var $9 = HEAP[$tree_addr];
      var $10 = _validate_ntype($9, 325);
      
      if ($10 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$iftmp_202] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_202] = 0;
      __label__ = 5;
      break;
     case 5:
      var $12 = HEAP[$iftmp_202];
      HEAP[$res] = $12;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      var $15 = _PyErr_Occurred();
      
      if ($15 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $17 = HEAP[$tree_addr];
      var $18 = _validate_numnodes($17, 1, __str170);
      HEAP[$res] = $18;
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      var $24 = HEAP[HEAP[$tree_addr] + 20];
      var $25 = _validate_terminal($24, 11, __str54);
      HEAP[$res] = $25;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      if (HEAP[$nch] == 2) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      var $33 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $34 = _validate_test($33);
      HEAP[$res] = $34;
      __label__ = 13;
      break;
     case 13:
      var $35 = HEAP[$res];
      HEAP[$0] = $35;
      var $36 = HEAP[$0];
      HEAP[$retval] = $36;
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
  function _validate_exprlist($tree) {
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
      
      HEAP[__stackBase__] = $tree;
      var $1 = HEAP[__stackBase__];
      var $2 = _validate_repeating_list($1, 326, FUNCTION_TABLE_OFFSET + 22, __str171);
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
  function _validate_dictorsetmaker($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_207 = __stackBase__ + 12;
      var $iftmp_206 = __stackBase__ + 16;
      var $iftmp_205 = __stackBase__ + 20;
      var $iftmp_204 = __stackBase__ + 24;
      var $iftmp_203 = __stackBase__ + 28;
      var $nch = __stackBase__ + 32;
      var $ok = __stackBase__ + 36;
      var $i = __stackBase__ + 40;
      var $check_trailing_comma = __stackBase__ + 44;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 328);
      HEAP[$ok] = $5;
      HEAP[$i] = 0;
      HEAP[$check_trailing_comma] = 0;
      
      
      if (HEAP[$nch] <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str172, __str173, 2987, ___PRETTY_FUNCTION___13742);
      throw "Reached an unreachable!";
     case 2:
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24] == 12) {
        __label__ = 5;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 5:
      
      
      
      
      var $23 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      
      var $25 = HEAP[$i] + 1;
      HEAP[$i] = $25;
      var $26 = _validate_test($23);
      HEAP[$ok] = $26;
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      var $31 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $32 = _validate_terminal($31, 12, __str52);
      
      if ($32 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      var $39 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 1);
      var $40 = _validate_test($39);
      
      if ($40 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      HEAP[$iftmp_203] = 1;
      __label__ = 10;
      break;
     case 9:
      HEAP[$iftmp_203] = 0;
      __label__ = 10;
      break;
     case 10:
      var $42 = HEAP[$iftmp_203];
      HEAP[$ok] = $42;
      
      var $44 = HEAP[$i] + 2;
      HEAP[$i] = $44;
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      if (HEAP[$nch] - HEAP[$i] > 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      HEAP[$check_trailing_comma] = 1;
      __label__ = 51;
      break;
     case 14:
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24] != 336) {
        __label__ = 21;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      var $63 = HEAP[HEAP[$tree_addr] + 20];
      var $64 = _validate_test($63);
      
      if ($64 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      var $69 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $70 = _validate_comp_for($69);
      
      if ($70 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      HEAP[$iftmp_204] = 1;
      __label__ = 20;
      break;
     case 19:
      HEAP[$iftmp_204] = 0;
      __label__ = 20;
      break;
     case 20:
      var $72 = HEAP[$iftmp_204];
      HEAP[$ok] = $72;
      __label__ = 51;
      break;
     case 21:
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      if (HEAP[HEAP[$tree_addr] + 16] <= 3) {
        __label__ = 31;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 72] != 336) {
        __label__ = 31;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      var $89 = HEAP[HEAP[$tree_addr] + 20];
      var $90 = _validate_test($89);
      
      if ($90 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      var $95 = HEAP[HEAP[$tree_addr] + 20] + 24;
      var $96 = _validate_terminal($95, 11, __str54);
      
      if ($96 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      var $101 = HEAP[HEAP[$tree_addr] + 20] + 48;
      var $102 = _validate_test($101);
      
      if ($102 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      var $107 = HEAP[HEAP[$tree_addr] + 20] + 72;
      var $108 = _validate_comp_for($107);
      
      if ($108 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      HEAP[$iftmp_205] = 1;
      __label__ = 30;
      break;
     case 29:
      HEAP[$iftmp_205] = 0;
      __label__ = 30;
      break;
     case 30:
      var $110 = HEAP[$iftmp_205];
      HEAP[$ok] = $110;
      __label__ = 51;
      break;
     case 31:
      
      
      if (HEAP[$ok] != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 32:
      
      
      if (HEAP[$nch] > 2) {
        __label__ = 33;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 33:
      
      
      
      
      var $119 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $120 = _validate_test($119);
      
      if ($120 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      
      
      var $127 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 1);
      var $128 = _validate_terminal($127, 11, __str54);
      
      if ($128 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      
      
      var $135 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 2);
      var $136 = _validate_test($135);
      
      if ($136 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      HEAP[$iftmp_206] = 1;
      __label__ = 38;
      break;
     case 37:
      HEAP[$iftmp_206] = 0;
      __label__ = 38;
      break;
     case 38:
      var $138 = HEAP[$iftmp_206];
      HEAP[$ok] = $138;
      
      var $140 = HEAP[$i] + 3;
      HEAP[$i] = $140;
      __label__ = 40;
      break;
     case 39:
      HEAP[$ok] = 0;
      _err_string(__str174);
      __label__ = 40;
      break;
     case 40:
      __label__ = 48;
      break;
     case 41:
      
      
      
      
      var $145 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $146 = _validate_terminal($145, 12, __str52);
      
      if ($146 == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      
      
      
      
      
      var $153 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 1);
      var $154 = _validate_test($153);
      
      if ($154 == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      
      
      
      
      
      var $161 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 2);
      var $162 = _validate_terminal($161, 11, __str54);
      
      if ($162 == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      
      
      
      
      
      var $169 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$i] + 3);
      var $170 = _validate_test($169);
      
      if ($170 == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 45:
      HEAP[$iftmp_207] = 1;
      __label__ = 47;
      break;
     case 46:
      HEAP[$iftmp_207] = 0;
      __label__ = 47;
      break;
     case 47:
      var $172 = HEAP[$iftmp_207];
      HEAP[$ok] = $172;
      
      var $174 = HEAP[$i] + 4;
      HEAP[$i] = $174;
      __label__ = 48;
      break;
     case 48:
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 49:
      
      
      
      
      if (HEAP[$nch] - HEAP[$i] > 3) {
        __label__ = 41;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 50:
      HEAP[$check_trailing_comma] = 1;
      __label__ = 51;
      break;
     case 51:
      
      
      if (HEAP[$ok] != 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 52:
      
      
      if (HEAP[$check_trailing_comma] != 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 53:
      
      
      
      
      if (HEAP[$nch] - 1 == HEAP[$i]) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      
      
      
      
      var $193 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$i];
      var $194 = _validate_terminal($193, 12, __str52);
      HEAP[$ok] = $194;
      __label__ = 57;
      break;
     case 55:
      
      
      
      if (HEAP[$i] != HEAP[$nch]) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      HEAP[$ok] = 0;
      _err_string(__str175);
      __label__ = 57;
      break;
     case 57:
      var $198 = HEAP[$ok];
      HEAP[$0] = $198;
      var $199 = HEAP[$0];
      HEAP[$retval] = $199;
      __label__ = 58;
      break;
     case 58:
      var $retval57 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval57;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_eval_input($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_208 = __stackBase__ + 12;
      var $pos = __stackBase__ + 16;
      var $nch = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      var $4 = HEAP[$tree_addr];
      var $5 = _validate_ntype($4, 258);
      
      if ($5 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$nch] <= 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $12 = HEAP[HEAP[$tree_addr] + 20];
      var $13 = _validate_testlist($12);
      
      if ($13 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      var $20 = HEAP[HEAP[$tree_addr] + 20] + 24 * (HEAP[$nch] - 1);
      var $21 = _validate_ntype($20, 0);
      
      if ($21 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      HEAP[$iftmp_208] = 1;
      __label__ = 6;
      break;
     case 5:
      HEAP[$iftmp_208] = 0;
      __label__ = 6;
      break;
     case 6:
      var $23 = HEAP[$iftmp_208];
      HEAP[$res] = $23;
      HEAP[$pos] = 1;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      var $28 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$pos];
      var $29 = _validate_ntype($28, 4);
      HEAP[$res] = $29;
      
      var $31 = HEAP[$pos] + 1;
      HEAP[$pos] = $31;
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[$nch] - 1 > HEAP[$pos]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      var $38 = HEAP[$res];
      HEAP[$0] = $38;
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
  function _validate_node($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_212 = __stackBase__ + 12;
      var $iftmp_211 = __stackBase__ + 16;
      var $iftmp_210 = __stackBase__ + 20;
      var $iftmp_209 = __stackBase__ + 24;
      var $nch = __stackBase__ + 28;
      var $res = __stackBase__ + 32;
      var $next = __stackBase__ + 36;
      
      HEAP[$tree_addr] = $tree;
      HEAP[$nch] = 0;
      HEAP[$res] = 1;
      HEAP[$next] = 0;
      __label__ = 75;
      break;
     case 1:
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      HEAP[$next] = 0;
      
      
      
      var $7 = HEAP[HEAP[$tree_addr]];
      if ($7 == 261) {
        __label__ = 5;
        break;
      } else if ($7 == 262) {
        __label__ = 2;
        break;
      } else if ($7 == 267) {
        __label__ = 6;
        break;
      } else if ($7 == 268) {
        __label__ = 22;
        break;
      } else if ($7 == 269) {
        __label__ = 7;
        break;
      } else if ($7 == 270) {
        __label__ = 24;
        break;
      } else if ($7 == 272) {
        __label__ = 25;
        break;
      } else if ($7 == 273) {
        __label__ = 26;
        break;
      } else if ($7 == 274) {
        __label__ = 27;
        break;
      } else if ($7 == 275) {
        __label__ = 8;
        break;
      } else if ($7 == 276) {
        __label__ = 32;
        break;
      } else if ($7 == 277) {
        __label__ = 37;
        break;
      } else if ($7 == 278) {
        __label__ = 42;
        break;
      } else if ($7 == 279) {
        __label__ = 21;
        break;
      } else if ($7 == 280) {
        __label__ = 43;
        break;
      } else if ($7 == 281) {
        __label__ = 44;
        break;
      } else if ($7 == 282) {
        __label__ = 45;
        break;
      } else if ($7 == 283) {
        __label__ = 46;
        break;
      } else if ($7 == 289) {
        __label__ = 47;
        break;
      } else if ($7 == 290) {
        __label__ = 48;
        break;
      } else if ($7 == 291) {
        __label__ = 49;
        break;
      } else if ($7 == 292) {
        __label__ = 23;
        break;
      } else if ($7 == 293) {
        __label__ = 50;
        break;
      } else if ($7 == 294) {
        __label__ = 51;
        break;
      } else if ($7 == 295) {
        __label__ = 52;
        break;
      } else if ($7 == 296) {
        __label__ = 53;
        break;
      } else if ($7 == 297) {
        __label__ = 3;
        break;
      } else if ($7 == 300) {
        __label__ = 54;
        break;
      } else if ($7 == 304) {
        __label__ = 58;
        break;
      } else if ($7 == 306) {
        __label__ = 59;
        break;
      } else if ($7 == 307) {
        __label__ = 60;
        break;
      } else if ($7 == 308) {
        __label__ = 61;
        break;
      } else if ($7 == 309) {
        __label__ = 63;
        break;
      } else if ($7 == 310) {
        __label__ = 64;
        break;
      } else if ($7 == 311) {
        __label__ = 65;
        break;
      } else if ($7 == 312) {
        __label__ = 66;
        break;
      } else if ($7 == 313) {
        __label__ = 67;
        break;
      } else if ($7 == 314) {
        __label__ = 68;
        break;
      } else if ($7 == 315) {
        __label__ = 69;
        break;
      } else if ($7 == 316) {
        __label__ = 70;
        break;
      } else if ($7 == 317) {
        __label__ = 71;
        break;
      } else if ($7 == 318) {
        __label__ = 72;
        break;
      } else if ($7 == 326) {
        __label__ = 62;
        break;
      } else if ($7 == 327) {
        __label__ = 55;
        break;
      } else if ($7 == 329) {
        __label__ = 4;
        break;
      } else if ($7 == 338) {
        __label__ = 57;
        break;
      } else if ($7 == 340) {
        __label__ = 56;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 2:
      var $8 = HEAP[$tree_addr];
      var $9 = _validate_funcdef($8);
      HEAP[$res] = $9;
      __label__ = 74;
      break;
     case 3:
      var $10 = HEAP[$tree_addr];
      var $11 = _validate_with_stmt($10);
      HEAP[$res] = $11;
      __label__ = 74;
      break;
     case 4:
      var $12 = HEAP[$tree_addr];
      var $13 = _validate_class($12);
      HEAP[$res] = $13;
      __label__ = 74;
      break;
     case 5:
      var $14 = HEAP[$tree_addr];
      var $15 = _validate_decorated($14);
      HEAP[$res] = $15;
      __label__ = 74;
      break;
     case 6:
      var $16 = HEAP[$tree_addr];
      var $17 = _validate_stmt($16);
      HEAP[$res] = $17;
      __label__ = 74;
      break;
     case 7:
      var $18 = HEAP[$tree_addr];
      var $19 = _validate_small_stmt($18);
      HEAP[$res] = $19;
      __label__ = 74;
      break;
     case 8:
      var $20 = HEAP[$tree_addr];
      var $21 = _validate_numnodes($20, 1, __str176);
      
      if ($21 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20]] == 276) {
        __label__ = 14;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20]] == 277) {
        __label__ = 14;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20]] == 279) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20]] == 278) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20]] == 280) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$iftmp_209] = 1;
      __label__ = 16;
      break;
     case 15:
      HEAP[$iftmp_209] = 0;
      __label__ = 16;
      break;
     case 16:
      var $58 = HEAP[$iftmp_209];
      HEAP[$res] = $58;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      var $64 = HEAP[HEAP[$tree_addr] + 20];
      HEAP[$next] = $64;
      __label__ = 20;
      break;
     case 18:
      
      
      if (HEAP[$nch] == 1) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      _err_string(__str177);
      __label__ = 20;
      break;
     case 20:
      __label__ = 74;
      break;
     case 21:
      var $67 = HEAP[$tree_addr];
      var $68 = _validate_yield_stmt($67);
      HEAP[$res] = $68;
      __label__ = 74;
      break;
     case 22:
      var $69 = HEAP[$tree_addr];
      var $70 = _validate_simple_stmt($69);
      HEAP[$res] = $70;
      __label__ = 74;
      break;
     case 23:
      var $71 = HEAP[$tree_addr];
      var $72 = _validate_compound_stmt($71);
      HEAP[$res] = $72;
      __label__ = 74;
      break;
     case 24:
      var $73 = HEAP[$tree_addr];
      var $74 = _validate_expr_stmt($73);
      HEAP[$res] = $74;
      __label__ = 74;
      break;
     case 25:
      var $75 = HEAP[$tree_addr];
      var $76 = _validate_print_stmt($75);
      HEAP[$res] = $76;
      __label__ = 74;
      break;
     case 26:
      var $77 = HEAP[$tree_addr];
      var $78 = _validate_del_stmt($77);
      HEAP[$res] = $78;
      __label__ = 74;
      break;
     case 27:
      var $79 = HEAP[$tree_addr];
      var $80 = _validate_numnodes($79, 1, __str178);
      
      if ($80 == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      var $85 = HEAP[HEAP[$tree_addr] + 20];
      var $86 = _validate_terminal($85, 1, __str178);
      
      if ($86 == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      HEAP[$iftmp_210] = 1;
      __label__ = 31;
      break;
     case 30:
      HEAP[$iftmp_210] = 0;
      __label__ = 31;
      break;
     case 31:
      var $88 = HEAP[$iftmp_210];
      HEAP[$res] = $88;
      __label__ = 74;
      break;
     case 32:
      var $89 = HEAP[$tree_addr];
      var $90 = _validate_numnodes($89, 1, __str179);
      
      if ($90 == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      var $95 = HEAP[HEAP[$tree_addr] + 20];
      var $96 = _validate_terminal($95, 1, __str179);
      
      if ($96 == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      HEAP[$iftmp_211] = 1;
      __label__ = 36;
      break;
     case 35:
      HEAP[$iftmp_211] = 0;
      __label__ = 36;
      break;
     case 36:
      var $98 = HEAP[$iftmp_211];
      HEAP[$res] = $98;
      __label__ = 74;
      break;
     case 37:
      var $99 = HEAP[$tree_addr];
      var $100 = _validate_numnodes($99, 1, __str180);
      
      if ($100 == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      
      
      
      var $105 = HEAP[HEAP[$tree_addr] + 20];
      var $106 = _validate_terminal($105, 1, __str180);
      
      if ($106 == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      HEAP[$iftmp_212] = 1;
      __label__ = 41;
      break;
     case 40:
      HEAP[$iftmp_212] = 0;
      __label__ = 41;
      break;
     case 41:
      var $108 = HEAP[$iftmp_212];
      HEAP[$res] = $108;
      __label__ = 74;
      break;
     case 42:
      var $109 = HEAP[$tree_addr];
      var $110 = _validate_return_stmt($109);
      HEAP[$res] = $110;
      __label__ = 74;
      break;
     case 43:
      var $111 = HEAP[$tree_addr];
      var $112 = _validate_raise_stmt($111);
      HEAP[$res] = $112;
      __label__ = 74;
      break;
     case 44:
      var $113 = HEAP[$tree_addr];
      var $114 = _validate_import_stmt($113);
      HEAP[$res] = $114;
      __label__ = 74;
      break;
     case 45:
      var $115 = HEAP[$tree_addr];
      var $116 = _validate_import_name($115);
      HEAP[$res] = $116;
      __label__ = 74;
      break;
     case 46:
      var $117 = HEAP[$tree_addr];
      var $118 = _validate_import_from($117);
      HEAP[$res] = $118;
      __label__ = 74;
      break;
     case 47:
      var $119 = HEAP[$tree_addr];
      var $120 = _validate_global_stmt($119);
      HEAP[$res] = $120;
      __label__ = 74;
      break;
     case 48:
      var $121 = HEAP[$tree_addr];
      var $122 = _validate_exec_stmt($121);
      HEAP[$res] = $122;
      __label__ = 74;
      break;
     case 49:
      var $123 = HEAP[$tree_addr];
      var $124 = _validate_assert_stmt($123);
      HEAP[$res] = $124;
      __label__ = 74;
      break;
     case 50:
      var $125 = HEAP[$tree_addr];
      var $126 = _validate_if($125);
      HEAP[$res] = $126;
      __label__ = 74;
      break;
     case 51:
      var $127 = HEAP[$tree_addr];
      var $128 = _validate_while($127);
      HEAP[$res] = $128;
      __label__ = 74;
      break;
     case 52:
      var $129 = HEAP[$tree_addr];
      var $130 = _validate_for($129);
      HEAP[$res] = $130;
      __label__ = 74;
      break;
     case 53:
      var $131 = HEAP[$tree_addr];
      var $132 = _validate_try($131);
      HEAP[$res] = $132;
      __label__ = 74;
      break;
     case 54:
      var $133 = HEAP[$tree_addr];
      var $134 = _validate_suite($133);
      HEAP[$res] = $134;
      __label__ = 74;
      break;
     case 55:
      var $135 = HEAP[$tree_addr];
      var $136 = _validate_testlist($135);
      HEAP[$res] = $136;
      __label__ = 74;
      break;
     case 56:
      var $137 = HEAP[$tree_addr];
      var $138 = _validate_yield_expr($137);
      HEAP[$res] = $138;
      __label__ = 74;
      break;
     case 57:
      var $139 = HEAP[$tree_addr];
      var $140 = _validate_testlist1($139);
      HEAP[$res] = $140;
      __label__ = 74;
      break;
     case 58:
      var $141 = HEAP[$tree_addr];
      var $142 = _validate_test($141);
      HEAP[$res] = $142;
      __label__ = 74;
      break;
     case 59:
      var $143 = HEAP[$tree_addr];
      var $144 = _validate_and_test($143);
      HEAP[$res] = $144;
      __label__ = 74;
      break;
     case 60:
      var $145 = HEAP[$tree_addr];
      var $146 = _validate_not_test($145);
      HEAP[$res] = $146;
      __label__ = 74;
      break;
     case 61:
      var $147 = HEAP[$tree_addr];
      var $148 = _validate_comparison($147);
      HEAP[$res] = $148;
      __label__ = 74;
      break;
     case 62:
      var $149 = HEAP[$tree_addr];
      var $150 = _validate_exprlist($149);
      HEAP[$res] = $150;
      __label__ = 74;
      break;
     case 63:
      var $151 = HEAP[$tree_addr];
      var $152 = _validate_comp_op($151);
      HEAP[$res] = $152;
      __label__ = 74;
      break;
     case 64:
      var $153 = HEAP[$tree_addr];
      var $154 = _validate_expr($153);
      HEAP[$res] = $154;
      __label__ = 74;
      break;
     case 65:
      var $155 = HEAP[$tree_addr];
      var $156 = _validate_xor_expr($155);
      HEAP[$res] = $156;
      __label__ = 74;
      break;
     case 66:
      var $157 = HEAP[$tree_addr];
      var $158 = _validate_and_expr($157);
      HEAP[$res] = $158;
      __label__ = 74;
      break;
     case 67:
      var $159 = HEAP[$tree_addr];
      var $160 = _validate_shift_expr($159);
      HEAP[$res] = $160;
      __label__ = 74;
      break;
     case 68:
      var $161 = HEAP[$tree_addr];
      var $162 = _validate_arith_expr($161);
      HEAP[$res] = $162;
      __label__ = 74;
      break;
     case 69:
      var $163 = HEAP[$tree_addr];
      var $164 = _validate_term($163);
      HEAP[$res] = $164;
      __label__ = 74;
      break;
     case 70:
      var $165 = HEAP[$tree_addr];
      var $166 = _validate_factor($165);
      HEAP[$res] = $166;
      __label__ = 74;
      break;
     case 71:
      var $167 = HEAP[$tree_addr];
      var $168 = _validate_power($167);
      HEAP[$res] = $168;
      __label__ = 74;
      break;
     case 72:
      var $169 = HEAP[$tree_addr];
      var $170 = _validate_atom($169);
      HEAP[$res] = $170;
      __label__ = 74;
      break;
     case 73:
      _err_string(__str181);
      HEAP[$res] = 0;
      __label__ = 74;
      break;
     case 74:
      var $171 = HEAP[$next];
      HEAP[$tree_addr] = $171;
      __label__ = 75;
      break;
     case 75:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 76:
      
      
      if (HEAP[$tree_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 77:
      var $176 = HEAP[$res];
      HEAP[$0] = $176;
      var $177 = HEAP[$0];
      HEAP[$retval] = $177;
      __label__ = 78;
      break;
     case 78:
      var $retval77 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval77;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_expr_tree($tree) {
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
      var $res = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $tree;
      var $1 = HEAP[__stackBase__];
      var $2 = _validate_eval_input($1);
      HEAP[$res] = $2;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      _err_string(__str182);
      __label__ = 3;
      break;
     case 3:
      var $7 = HEAP[$res];
      HEAP[$0] = $7;
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
  function _validate_file_input($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_213 = __stackBase__ + 12;
      var $j = __stackBase__ + 16;
      var $nch = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      
      HEAP[$tree_addr] = $tree;
      
      
      
      var $4 = HEAP[HEAP[$tree_addr] + 16] - 1;
      HEAP[$nch] = $4;
      
      
      if (HEAP[$nch] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      var $11 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$nch];
      var $12 = _validate_ntype($11, 0);
      
      if ($12 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[$iftmp_213] = 1;
      __label__ = 4;
      break;
     case 3:
      HEAP[$iftmp_213] = 0;
      __label__ = 4;
      break;
     case 4:
      var $14 = HEAP[$iftmp_213];
      HEAP[$res] = $14;
      HEAP[$j] = 0;
      __label__ = 9;
      break;
     case 5:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$j]] == 267) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $27 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$j];
      var $28 = _validate_stmt($27);
      HEAP[$res] = $28;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      var $33 = HEAP[HEAP[$tree_addr] + 20] + 24 * HEAP[$j];
      var $34 = _validate_terminal($33, 4, 0);
      HEAP[$res] = $34;
      __label__ = 8;
      break;
     case 8:
      
      var $36 = HEAP[$j] + 1;
      HEAP[$j] = $36;
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      if (HEAP[$j] < HEAP[$nch]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      var $44 = _PyErr_Occurred();
      
      if ($44 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      _err_string(__str183);
      __label__ = 14;
      break;
     case 14:
      var $46 = HEAP[$res];
      HEAP[$0] = $46;
      var $47 = HEAP[$0];
      HEAP[$retval] = $47;
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
  function _validate_encoding_decl($tree) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_214 = __stackBase__ + 12;
      var $nch = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$tree_addr] = $tree;
      
      
      var $3 = HEAP[HEAP[$tree_addr] + 16];
      HEAP[$nch] = $3;
      
      
      if (HEAP[$nch] != 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[HEAP[$tree_addr] + 20];
      var $10 = _validate_file_input($9);
      
      if ($10 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[$iftmp_214] = 1;
      __label__ = 4;
      break;
     case 3:
      HEAP[$iftmp_214] = 0;
      __label__ = 4;
      break;
     case 4:
      var $12 = HEAP[$iftmp_214];
      HEAP[$res] = $12;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      var $15 = _PyErr_Occurred();
      
      if ($15 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      _err_string(__str184);
      __label__ = 7;
      break;
     case 7:
      var $17 = HEAP[$res];
      HEAP[$0] = $17;
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
  function _parser__pickler($self, $args) {
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
      var $result = __stackBase__ + 16;
      var $st = __stackBase__ + 20;
      var $empty_dict = __stackBase__ + 24;
      var $newargs = __stackBase__ + 28;
      var $tuple = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$result] = 0;
      HEAP[$st] = 0;
      HEAP[$empty_dict] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str185, allocate([ _PyST_Type, 0, 0, 0, $st, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      var $4 = _PyDict_New();
      HEAP[$empty_dict] = $4;
      
      
      if (HEAP[$empty_dict] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $7 = HEAP[$st];
      var $8 = _Py_BuildValue(__str186, allocate([ $7, 0, 0, 0, 1, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$newargs] = $8;
      
      
      if (HEAP[$newargs] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $11 = HEAP[$newargs];
      var $12 = HEAP[$empty_dict];
      var $13 = _parser_st2tuple(0, $11, $12);
      HEAP[$tuple] = $13;
      
      
      if (HEAP[$tuple] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $16 = HEAP[_pickle_constructor];
      var $17 = HEAP[$tuple];
      var $18 = _Py_BuildValue(__str187, allocate([ $16, 0, 0, 0, $17, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $18;
      
      
      
      var $22 = HEAP[HEAP[$tuple]] - 1;
      
      var $24 = HEAP[$tuple];
      HEAP[$24] = $22;
      
      
      
      
      if (HEAP[HEAP[$tuple]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $33 = HEAP[HEAP[HEAP[$tuple] + 4] + 24];
      var $34 = HEAP[$tuple];
      FUNCTION_TABLE[$33]($34);
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $38 = HEAP[HEAP[$empty_dict]] - 1;
      
      var $40 = HEAP[$empty_dict];
      HEAP[$40] = $38;
      
      
      
      
      if (HEAP[HEAP[$empty_dict]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[$empty_dict] + 4] + 24];
      var $50 = HEAP[$empty_dict];
      FUNCTION_TABLE[$49]($50);
      __label__ = 8;
      break;
     case 8:
      
      
      
      var $54 = HEAP[HEAP[$newargs]] - 1;
      
      var $56 = HEAP[$newargs];
      HEAP[$56] = $54;
      
      
      
      
      if (HEAP[HEAP[$newargs]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $65 = HEAP[HEAP[HEAP[$newargs] + 4] + 24];
      var $66 = HEAP[$newargs];
      FUNCTION_TABLE[$65]($66);
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$empty_dict] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      
      var $72 = HEAP[HEAP[$empty_dict]] - 1;
      
      var $74 = HEAP[$empty_dict];
      HEAP[$74] = $72;
      
      
      
      
      if (HEAP[HEAP[$empty_dict]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $83 = HEAP[HEAP[HEAP[$empty_dict] + 4] + 24];
      var $84 = HEAP[$empty_dict];
      FUNCTION_TABLE[$83]($84);
      __label__ = 13;
      break;
     case 13:
      var $85 = HEAP[$result];
      HEAP[$0] = $85;
      var $86 = HEAP[$0];
      HEAP[$retval] = $86;
      __label__ = 14;
      break;
     case 14:
      var $retval12 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initparser() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $module = __stackBase__;
      var $copyreg = __stackBase__ + 4;
      var $func = __stackBase__ + 8;
      var $pickler = __stackBase__ + 12;
      var $res = __stackBase__ + 16;
      
      
      HEAP[_PyST_Type + 4] = _PyType_Type;
      var $1 = _Py_InitModule4(__str209, _parser_functions, 0, 0, 1013);
      HEAP[$module] = $1;
      
      
      if (HEAP[$module] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[_parser_error] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $6 = _PyErr_NewException(__str210, 0, 0);
      HEAP[_parser_error] = $6;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[_parser_error] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $12 = HEAP[HEAP[_parser_error]] + 1;
      var $13 = HEAP[_parser_error];
      HEAP[$13] = $12;
      var $14 = HEAP[_parser_error];
      var $15 = HEAP[$module];
      var $16 = _PyModule_AddObject($15, __str211, $14);
      
      if ($16 != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      var $20 = HEAP[_PyST_Type] + 1;
      
      HEAP[_PyST_Type] = $20;
      var $22 = HEAP[$module];
      var $23 = _PyModule_AddObject($22, __str212, _PyST_Type);
      
      
      var $26 = HEAP[_PyST_Type] + 1;
      
      HEAP[_PyST_Type] = $26;
      var $28 = HEAP[$module];
      var $29 = _PyModule_AddObject($28, __str213, _PyST_Type);
      var $30 = HEAP[$module];
      var $31 = _PyModule_AddStringConstant($30, __str214, _parser_copyright_string);
      var $32 = HEAP[$module];
      var $33 = _PyModule_AddStringConstant($32, __str215, _parser_doc_string);
      var $34 = HEAP[$module];
      var $35 = _PyModule_AddStringConstant($34, __str216, _parser_version_string);
      var $36 = _PyImport_ImportModuleNoBlock(__str217);
      HEAP[$copyreg] = $36;
      
      
      if (HEAP[$copyreg] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 6:
      var $39 = HEAP[$copyreg];
      var $40 = _PyObject_GetAttrString($39, __str218);
      HEAP[$func] = $40;
      var $41 = HEAP[$module];
      var $42 = _PyObject_GetAttrString($41, __str202);
      HEAP[_pickle_constructor] = $42;
      var $43 = HEAP[$module];
      var $44 = _PyObject_GetAttrString($43, __str207);
      HEAP[$pickler] = $44;
      
      
      if (HEAP[_pickle_constructor] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      var $50 = HEAP[HEAP[_pickle_constructor]] + 1;
      var $51 = HEAP[_pickle_constructor];
      HEAP[$51] = $50;
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$func] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 9:
      
      
      if (HEAP[_pickle_constructor] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      
      
      if (HEAP[$pickler] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      var $58 = HEAP[_pickle_constructor];
      var $59 = HEAP[$func];
      var $60 = HEAP[$pickler];
      var $61 = _PyObject_CallFunctionObjArgs($59, allocate([ _PyST_Type, 0, 0, 0, $60, 0, 0, 0, $58, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$res] = $61;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      
      var $67 = HEAP[HEAP[$res]] - 1;
      
      var $69 = HEAP[$res];
      HEAP[$69] = $67;
      
      
      
      
      if (HEAP[HEAP[$res]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $78 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $79 = HEAP[$res];
      FUNCTION_TABLE[$78]($79);
      __label__ = 14;
      break;
     case 14:
      
      
      if (HEAP[$func] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      var $85 = HEAP[HEAP[$func]] - 1;
      
      var $87 = HEAP[$func];
      HEAP[$87] = $85;
      
      
      
      
      if (HEAP[HEAP[$func]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $96 = HEAP[HEAP[HEAP[$func] + 4] + 24];
      var $97 = HEAP[$func];
      FUNCTION_TABLE[$96]($97);
      __label__ = 17;
      break;
     case 17:
      
      
      if (HEAP[_pickle_constructor] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      var $100 = HEAP[_pickle_constructor];
      
      
      var $103 = HEAP[$100] - 1;
      var $104 = $100;
      HEAP[$104] = $103;
      
      
      
      if (HEAP[$100] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $112 = HEAP[HEAP[HEAP[_pickle_constructor] + 4] + 24];
      var $113 = HEAP[_pickle_constructor];
      FUNCTION_TABLE[$112]($113);
      __label__ = 20;
      break;
     case 20:
      
      
      if (HEAP[$pickler] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      
      
      
      var $119 = HEAP[HEAP[$pickler]] - 1;
      
      var $121 = HEAP[$pickler];
      HEAP[$121] = $119;
      
      
      
      
      if (HEAP[HEAP[$pickler]] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $130 = HEAP[HEAP[HEAP[$pickler] + 4] + 24];
      var $131 = HEAP[$pickler];
      FUNCTION_TABLE[$130]($131);
      __label__ = 23;
      break;
     case 23:
      
      
      
      var $135 = HEAP[HEAP[$copyreg]] - 1;
      
      var $137 = HEAP[$copyreg];
      HEAP[$137] = $135;
      
      
      
      
      if (HEAP[HEAP[$copyreg]] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $146 = HEAP[HEAP[HEAP[$copyreg] + 4] + 24];
      var $147 = HEAP[$copyreg];
      FUNCTION_TABLE[$146]($147);
      __label__ = 25;
      break;
     case 25:
      __label__ = 26;
      break;
     case 26:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initparser"] = _initparser;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _PyTuple_New, 0, _PyTuple_SetItem, 0, _PyList_New, 0, _PyList_SetItem, 0, _validate_test, 0, _validate_old_test, 0, _validate_fpdef, 0, _validate_arith_expr, 0, _validate_term, 0, _validate_subscript, 0, _validate_expr, 0, _parser_free, 0, _parser_getattr, 0, _parser_compare, 0, _parser_compilest, 0, _parser_isexpr, 0, _parser_issuite, 0, _parser_st2list, 0, _parser_st2tuple, 0, _parser_ast2tuple, 0, _parser_ast2list, 0, _parser_compileast, 0, _parser_expr, 0, _parser_suite, 0, _parser_tuple2ast, 0, _parser_tuple2st, 0, _parser__pickler, 0 ]);
  function run(args) {
    _parser_copyright_string = allocate([ 67, 111, 112, 121, 114, 105, 103, 104, 116, 32, 49, 57, 57, 53, 45, 49, 57, 57, 54, 32, 98, 121, 32, 86, 105, 114, 103, 105, 110, 105, 97, 32, 80, 111, 108, 121, 116, 101, 99, 104, 110, 105, 99, 32, 73, 110, 115, 116, 105, 116, 117, 116, 101, 32, 38, 32, 83, 116, 97, 116, 101, 10, 85, 110, 105, 118, 101, 114, 115, 105, 116, 121, 44, 32, 66, 108, 97, 99, 107, 115, 98, 117, 114, 103, 44, 32, 86, 105, 114, 103, 105, 110, 105, 97, 44, 32, 85, 83, 65, 44, 32, 97, 110, 100, 32, 70, 114, 101, 100, 32, 76, 46, 32, 68, 114, 97, 107, 101, 44, 32, 74, 114, 46, 44, 32, 82, 101, 115, 116, 111, 110, 44, 10, 86, 105, 114, 103, 105, 110, 105, 97, 44, 32, 85, 83, 65, 46, 32, 32, 80, 111, 114, 116, 105, 111, 110, 115, 32, 99, 111, 112, 121, 114, 105, 103, 104, 116, 32, 49, 57, 57, 49, 45, 49, 57, 57, 53, 32, 98, 121, 32, 83, 116, 105, 99, 104, 116, 105, 110, 103, 32, 77, 97, 116, 104, 101, 109, 97, 116, 105, 115, 99, 104, 10, 67, 101, 110, 116, 114, 117, 109, 44, 32, 65, 109, 115, 116, 101, 114, 100, 97, 109, 44, 32, 84, 104, 101, 32, 78, 101, 116, 104, 101, 114, 108, 97, 110, 100, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _parser_doc_string = allocate([ 84, 104, 105, 115, 32, 105, 115, 32, 97, 110, 32, 105, 110, 116, 101, 114, 102, 97, 99, 101, 32, 116, 111, 32, 80, 121, 116, 104, 111, 110, 39, 115, 32, 105, 110, 116, 101, 114, 110, 97, 108, 32, 112, 97, 114, 115, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    _parser_version_string = allocate([ 48, 46, 53, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 117, 110, 114, 101, 99, 111, 103, 110, 105, 122, 101, 100, 32, 112, 97, 114, 115, 101, 32, 116, 114, 101, 101, 32, 110, 111, 100, 101, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    _parser_error = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str1 = allocate([ 112, 97, 114, 115, 101, 114, 46, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 73, 110, 116, 101, 114, 109, 101, 100, 105, 97, 116, 101, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 97, 32, 80, 121, 116, 104, 111, 110, 32, 112, 97, 114, 115, 101, 32, 116, 114, 101, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _PyST_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str3 = allocate([ 79, 33, 124, 79, 79, 58, 115, 116, 50, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _keywords_9350 = allocate(16, "i8*", ALLOC_NORMAL);
    __str4 = allocate([ 97, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 108, 105, 110, 101, 95, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 99, 111, 108, 95, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 124, 79, 79, 58, 116, 111, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 97, 115, 116, 50, 116, 117, 112, 108, 101, 32, 105, 115, 32, 114, 101, 109, 111, 118, 101, 100, 32, 105, 110, 32, 51, 46, 120, 59, 32, 117, 115, 101, 32, 115, 116, 50, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 79, 33, 124, 79, 79, 58, 115, 116, 50, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _keywords_9400 = allocate(16, "i8*", ALLOC_NORMAL);
    __str10 = allocate([ 124, 79, 79, 58, 116, 111, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 97, 115, 116, 50, 108, 105, 115, 116, 32, 105, 115, 32, 114, 101, 109, 111, 118, 101, 100, 32, 105, 110, 32, 51, 46, 120, 59, 32, 117, 115, 101, 32, 115, 116, 50, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 60, 115, 121, 110, 116, 97, 120, 45, 116, 114, 101, 101, 62, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 79, 33, 124, 115, 58, 99, 111, 109, 112, 105, 108, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _keywords_9451 = allocate(12, "i8*", ALLOC_NORMAL);
    __str14 = allocate([ 102, 105, 108, 101, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 124, 115, 58, 99, 111, 109, 112, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 99, 111, 109, 112, 105, 108, 101, 97, 115, 116, 32, 105, 115, 32, 114, 101, 109, 111, 118, 101, 100, 32, 105, 110, 32, 51, 46, 120, 59, 32, 117, 115, 101, 32, 99, 111, 109, 112, 105, 108, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 79, 33, 58, 105, 115, 101, 120, 112, 114, 0 ], "i8", ALLOC_NORMAL);
    _keywords_9499 = allocate(8, "i8*", ALLOC_NORMAL);
    __str18 = allocate([ 58, 105, 115, 101, 120, 112, 114, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 79, 33, 58, 105, 115, 115, 117, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _keywords_9525 = allocate(8, "i8*", ALLOC_NORMAL);
    __str20 = allocate([ 58, 105, 115, 115, 117, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _parser_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_NORMAL);
    __str21 = allocate([ 99, 111, 109, 112, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 67, 111, 109, 112, 105, 108, 101, 32, 116, 104, 105, 115, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 32, 105, 110, 116, 111, 32, 97, 32, 99, 111, 100, 101, 32, 111, 98, 106, 101, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 105, 115, 101, 120, 112, 114, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 68, 101, 116, 101, 114, 109, 105, 110, 101, 115, 32, 105, 102, 32, 116, 104, 105, 115, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 32, 119, 97, 115, 32, 99, 114, 101, 97, 116, 101, 100, 32, 102, 114, 111, 109, 32, 97, 110, 32, 101, 120, 112, 114, 101, 115, 115, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 105, 115, 115, 117, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 68, 101, 116, 101, 114, 109, 105, 110, 101, 115, 32, 105, 102, 32, 116, 104, 105, 115, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 32, 119, 97, 115, 32, 99, 114, 101, 97, 116, 101, 100, 32, 102, 114, 111, 109, 32, 97, 32, 115, 117, 105, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 116, 111, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 67, 114, 101, 97, 116, 101, 115, 32, 97, 32, 108, 105, 115, 116, 45, 116, 114, 101, 101, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 116, 104, 105, 115, 32, 83, 84, 46, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 116, 111, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 67, 114, 101, 97, 116, 101, 115, 32, 97, 32, 116, 117, 112, 108, 101, 45, 116, 114, 101, 101, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 116, 104, 105, 115, 32, 83, 84, 46, 0 ], "i8", ALLOC_NORMAL);
    _keywords_9566 = allocate(8, "i8*", ALLOC_NORMAL);
    __str31 = allocate([ 115, 111, 117, 114, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 115, 58, 101, 120, 112, 114, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 115, 58, 115, 117, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 79, 58, 115, 101, 113, 117, 101, 110, 99, 101, 50, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _keywords_9620 = allocate(8, "i8*", ALLOC_NORMAL);
    __str35 = allocate([ 115, 101, 113, 117, 101, 110, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 115, 101, 113, 117, 101, 110, 99, 101, 50, 115, 116, 40, 41, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 32, 115, 105, 110, 103, 108, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 112, 97, 114, 115, 101, 32, 116, 114, 101, 101, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 117, 115, 101, 32, 97, 32, 118, 97, 108, 105, 100, 32, 115, 116, 97, 114, 116, 32, 115, 121, 109, 98, 111, 108, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 117, 110, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 83, 84, 32, 101, 114, 114, 111, 114, 32, 111, 99, 99, 117, 114, 114, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 116, 117, 112, 108, 101, 50, 97, 115, 116, 32, 105, 115, 32, 114, 101, 109, 111, 118, 101, 100, 32, 105, 110, 32, 51, 46, 120, 59, 32, 117, 115, 101, 32, 116, 117, 112, 108, 101, 50, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 111, 115, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 73, 108, 108, 101, 103, 97, 108, 32, 110, 111, 100, 101, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 116, 101, 114, 109, 105, 110, 97, 108, 32, 110, 111, 100, 101, 115, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 50, 32, 111, 114, 32, 51, 32, 101, 110, 116, 114, 105, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 115, 101, 99, 111, 110, 100, 32, 105, 116, 101, 109, 32, 105, 110, 32, 116, 101, 114, 109, 105, 110, 97, 108, 32, 110, 111, 100, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 44, 32, 102, 111, 117, 110, 100, 32, 37, 115, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 116, 104, 105, 114, 100, 32, 105, 116, 101, 109, 32, 105, 110, 32, 116, 101, 114, 109, 105, 110, 97, 108, 32, 110, 111, 100, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 44, 32, 102, 111, 117, 110, 100, 32, 37, 115, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 117, 110, 107, 110, 111, 119, 110, 32, 110, 111, 100, 101, 32, 116, 121, 112, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 117, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 99, 104, 105, 108, 100, 32, 110, 111, 100, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 73, 108, 108, 101, 103, 97, 108, 32, 115, 121, 110, 116, 97, 120, 45, 116, 114, 101, 101, 59, 32, 99, 97, 110, 110, 111, 116, 32, 115, 116, 97, 114, 116, 32, 119, 105, 116, 104, 32, 116, 101, 114, 109, 105, 110, 97, 108, 32, 115, 121, 109, 98, 111, 108, 46, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 73, 108, 108, 101, 103, 97, 108, 32, 99, 111, 109, 112, 111, 110, 101, 110, 116, 32, 116, 117, 112, 108, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 69, 120, 112, 101, 99, 116, 101, 100, 32, 110, 111, 100, 101, 32, 116, 121, 112, 101, 32, 37, 100, 44, 32, 103, 111, 116, 32, 37, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 73, 108, 108, 101, 103, 97, 108, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 99, 104, 105, 108, 100, 114, 101, 110, 32, 102, 111, 114, 32, 37, 115, 32, 110, 111, 100, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 73, 108, 108, 101, 103, 97, 108, 32, 116, 101, 114, 109, 105, 110, 97, 108, 58, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 34, 37, 115, 34, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 44, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 99, 108, 97, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 58, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 40, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 41, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 105, 102, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 101, 108, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 101, 108, 105, 102, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate(1, "i8", ALLOC_NORMAL);
    __str62 = allocate([ 115, 117, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 116, 101, 115, 116, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 116, 101, 115, 116, 108, 105, 115, 116, 49, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 116, 101, 115, 116, 108, 105, 115, 116, 95, 115, 97, 102, 101, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 101, 120, 112, 101, 99, 116, 101, 100, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 116, 114, 97, 105, 108, 101, 114, 32, 102, 111, 114, 32, 118, 97, 114, 97, 114, 103, 115, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 42, 42, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 116, 114, 97, 105, 108, 101, 114, 32, 102, 111, 114, 32, 118, 97, 114, 97, 114, 103, 115, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 118, 97, 114, 97, 114, 103, 115, 108, 105, 115, 116, 32, 109, 105, 115, 115, 105, 110, 103, 32, 99, 104, 105, 108, 100, 32, 110, 111, 100, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 61, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 102, 111, 114, 109, 97, 116, 105, 111, 110, 32, 102, 111, 114, 32, 118, 97, 114, 97, 114, 103, 115, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 108, 105, 115, 116, 95, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 99, 111, 109, 112, 95, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 108, 105, 115, 116, 95, 102, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 102, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 99, 111, 109, 112, 95, 102, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 108, 105, 115, 116, 95, 105, 102, 0 ], "i8", ALLOC_NORMAL);
    __str79 = allocate([ 99, 111, 109, 112, 95, 105, 102, 0 ], "i8", ALLOC_NORMAL);
    __str80 = allocate([ 102, 112, 100, 101, 102, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 102, 112, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str82 = allocate([ 115, 116, 109, 116, 0 ], "i8", ALLOC_NORMAL);
    __str83 = allocate([ 115, 105, 109, 112, 108, 101, 95, 115, 116, 109, 116, 0 ], "i8", ALLOC_NORMAL);
    __str84 = allocate([ 59, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 115, 109, 97, 108, 108, 95, 115, 116, 109, 116, 0 ], "i8", ALLOC_NORMAL);
    __str86 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 115, 109, 97, 108, 108, 95, 115, 116, 109, 116, 32, 99, 104, 105, 108, 100, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str87 = allocate([ 85, 110, 114, 101, 99, 111, 103, 110, 105, 122, 101, 100, 32, 99, 104, 105, 108, 100, 32, 110, 111, 100, 101, 32, 111, 102, 32, 115, 109, 97, 108, 108, 95, 115, 116, 109, 116, 58, 32, 37, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str88 = allocate([ 99, 111, 109, 112, 111, 117, 110, 100, 95, 115, 116, 109, 116, 0 ], "i8", ALLOC_NORMAL);
    __str89 = allocate([ 73, 108, 108, 101, 103, 97, 108, 32, 99, 111, 109, 112, 111, 117, 110, 100, 32, 115, 116, 97, 116, 101, 109, 101, 110, 116, 32, 116, 121, 112, 101, 58, 32, 37, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str90 = allocate([ 97, 117, 103, 97, 115, 115, 105, 103, 110, 0 ], "i8", ALLOC_NORMAL);
    __str91 = allocate([ 43, 61, 0 ], "i8", ALLOC_NORMAL);
    __str92 = allocate([ 45, 61, 0 ], "i8", ALLOC_NORMAL);
    __str93 = allocate([ 42, 61, 0 ], "i8", ALLOC_NORMAL);
    __str94 = allocate([ 47, 61, 0 ], "i8", ALLOC_NORMAL);
    __str95 = allocate([ 47, 47, 61, 0 ], "i8", ALLOC_NORMAL);
    __str96 = allocate([ 37, 61, 0 ], "i8", ALLOC_NORMAL);
    __str97 = allocate([ 38, 61, 0 ], "i8", ALLOC_NORMAL);
    __str98 = allocate([ 124, 61, 0 ], "i8", ALLOC_NORMAL);
    __str99 = allocate([ 94, 61, 0 ], "i8", ALLOC_NORMAL);
    __str100 = allocate([ 60, 60, 61, 0 ], "i8", ALLOC_NORMAL);
    __str101 = allocate([ 62, 62, 61, 0 ], "i8", ALLOC_NORMAL);
    __str102 = allocate([ 42, 42, 61, 0 ], "i8", ALLOC_NORMAL);
    __str103 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 97, 117, 103, 109, 101, 110, 116, 101, 100, 32, 97, 115, 115, 105, 103, 110, 109, 101, 110, 116, 32, 111, 112, 101, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str104 = allocate([ 112, 114, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str105 = allocate([ 112, 114, 105, 110, 116, 95, 115, 116, 109, 116, 0 ], "i8", ALLOC_NORMAL);
    __str106 = allocate([ 100, 101, 108, 95, 115, 116, 109, 116, 0 ], "i8", ALLOC_NORMAL);
    __str107 = allocate([ 100, 101, 108, 0 ], "i8", ALLOC_NORMAL);
    __str108 = allocate([ 114, 101, 116, 117, 114, 110, 0 ], "i8", ALLOC_NORMAL);
    __str109 = allocate([ 114, 97, 105, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str110 = allocate([ 121, 105, 101, 108, 100, 0 ], "i8", ALLOC_NORMAL);
    __str111 = allocate([ 121, 105, 101, 108, 100, 95, 115, 116, 109, 116, 0 ], "i8", ALLOC_NORMAL);
    __str112 = allocate([ 97, 115, 0 ], "i8", ALLOC_NORMAL);
    __str113 = allocate([ 105, 109, 112, 111, 114, 116, 95, 97, 115, 95, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str114 = allocate([ 46, 0 ], "i8", ALLOC_NORMAL);
    __str115 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 99, 104, 105, 108, 100, 114, 101, 110, 32, 102, 111, 114, 32, 100, 111, 116, 116, 101, 100, 95, 97, 115, 95, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str116 = allocate([ 105, 109, 112, 111, 114, 116, 95, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str117 = allocate([ 105, 109, 112, 111, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str118 = allocate([ 102, 114, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    __str119 = allocate([ 105, 109, 112, 111, 114, 116, 95, 115, 116, 109, 116, 0 ], "i8", ALLOC_NORMAL);
    __str120 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 105, 109, 112, 111, 114, 116, 95, 115, 116, 109, 116, 32, 99, 104, 105, 108, 100, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str121 = allocate([ 85, 110, 114, 101, 99, 111, 103, 110, 105, 122, 101, 100, 32, 99, 104, 105, 108, 100, 32, 110, 111, 100, 101, 32, 111, 102, 32, 105, 109, 112, 111, 114, 116, 95, 115, 116, 109, 116, 58, 32, 37, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str122 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 103, 108, 111, 98, 97, 108, 32, 115, 116, 97, 116, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str123 = allocate([ 103, 108, 111, 98, 97, 108, 0 ], "i8", ALLOC_NORMAL);
    __str124 = allocate([ 101, 120, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    __str125 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 101, 120, 101, 99, 32, 115, 116, 97, 116, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str126 = allocate([ 97, 115, 115, 101, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str127 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 97, 115, 115, 101, 114, 116, 32, 115, 116, 97, 116, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str128 = allocate([ 119, 104, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str129 = allocate([ 116, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str130 = allocate([ 101, 120, 99, 101, 112, 116, 0 ], "i8", ALLOC_NORMAL);
    __str131 = allocate([ 73, 108, 108, 101, 103, 97, 108, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 99, 104, 105, 108, 100, 114, 101, 110, 32, 102, 111, 114, 32, 116, 114, 121, 47, 37, 115, 32, 110, 111, 100, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str132 = allocate([ 102, 105, 110, 97, 108, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str133 = allocate([ 116, 114, 121, 47, 102, 105, 110, 97, 108, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str134 = allocate([ 116, 114, 121, 47, 101, 120, 99, 101, 112, 116, 47, 102, 105, 110, 97, 108, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str135 = allocate([ 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str136 = allocate([ 97, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str137 = allocate([ 110, 111, 116, 0 ], "i8", ALLOC_NORMAL);
    __str138 = allocate([ 105, 115, 0 ], "i8", ALLOC_NORMAL);
    __str139 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 111, 112, 101, 114, 97, 116, 111, 114, 32, 39, 37, 115, 39, 0 ], "i8", ALLOC_NORMAL);
    __str140 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 99, 111, 109, 112, 97, 114, 105, 115, 111, 110, 32, 111, 112, 101, 114, 97, 116, 111, 114, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str141 = allocate([ 99, 111, 109, 112, 95, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str142 = allocate([ 117, 110, 107, 110, 111, 119, 110, 32, 99, 111, 109, 112, 97, 114, 105, 115, 111, 110, 32, 111, 112, 101, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str143 = allocate([ 124, 0 ], "i8", ALLOC_NORMAL);
    __str144 = allocate([ 94, 0 ], "i8", ALLOC_NORMAL);
    __str145 = allocate([ 38, 0 ], "i8", ALLOC_NORMAL);
    __str146 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 110, 111, 100, 101, 115, 32, 102, 111, 114, 32, 39, 112, 111, 119, 101, 114, 39, 0 ], "i8", ALLOC_NORMAL);
    __str147 = allocate([ 97, 116, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    __str148 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 108, 105, 115, 116, 32, 100, 105, 115, 112, 108, 97, 121, 32, 97, 116, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    __str149 = allocate([ 109, 105, 115, 115, 105, 110, 103, 32, 99, 104, 105, 108, 100, 32, 110, 111, 100, 101, 115, 32, 111, 102, 32, 108, 105, 115, 116, 109, 97, 107, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str150 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 116, 114, 97, 105, 108, 105, 110, 103, 32, 110, 111, 100, 101, 115, 32, 102, 111, 114, 32, 108, 105, 115, 116, 109, 97, 107, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str151 = allocate([ 109, 105, 115, 115, 105, 110, 103, 32, 99, 104, 105, 108, 100, 32, 110, 111, 100, 101, 115, 32, 111, 102, 32, 116, 101, 115, 116, 108, 105, 115, 116, 95, 99, 111, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str152 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 116, 114, 97, 105, 108, 105, 110, 103, 32, 110, 111, 100, 101, 115, 32, 102, 111, 114, 32, 116, 101, 115, 116, 108, 105, 115, 116, 95, 99, 111, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str153 = allocate([ 64, 0 ], "i8", ALLOC_NORMAL);
    __str154 = allocate([ 119, 105, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str155 = allocate([ 100, 101, 102, 0 ], "i8", ALLOC_NORMAL);
    __str156 = allocate([ 108, 97, 109, 98, 100, 97, 0 ], "i8", ALLOC_NORMAL);
    __str157 = allocate([ 108, 97, 109, 98, 100, 101, 102, 0 ], "i8", ALLOC_NORMAL);
    __str158 = allocate([ 111, 108, 100, 95, 108, 97, 109, 98, 100, 101, 102, 0 ], "i8", ALLOC_NORMAL);
    __str159 = allocate([ 97, 114, 103, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str160 = allocate([ 110, 101, 101, 100, 32, 39, 40, 39, 44, 32, 39, 41, 39, 32, 102, 111, 114, 32, 103, 101, 110, 101, 114, 97, 116, 111, 114, 32, 101, 120, 112, 114, 101, 115, 115, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str161 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 97, 114, 103, 108, 105, 115, 116, 32, 115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 32, 40, 101, 120, 116, 114, 97, 32, 115, 116, 117, 102, 102, 32, 111, 110, 32, 101, 110, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str162 = allocate([ 42, 0 ], "i8", ALLOC_NORMAL);
    __str163 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 117, 115, 101, 32, 111, 102, 32, 39, 42, 39, 32, 105, 110, 32, 97, 114, 103, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str164 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 117, 115, 101, 32, 111, 102, 32, 39, 42, 42, 39, 32, 105, 110, 32, 97, 114, 103, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str165 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 97, 114, 103, 108, 105, 115, 116, 32, 115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str166 = allocate([ 116, 114, 97, 105, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str167 = allocate([ 115, 117, 98, 115, 99, 114, 105, 112, 116, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str168 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 102, 111, 114, 32, 115, 117, 98, 115, 99, 114, 105, 112, 116, 32, 110, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str169 = allocate([ 115, 117, 98, 115, 99, 114, 105, 112, 116, 0 ], "i8", ALLOC_NORMAL);
    __str170 = allocate([ 115, 108, 105, 99, 101, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str171 = allocate([ 101, 120, 112, 114, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str172 = allocate([ 110, 99, 104, 32, 62, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str173 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 112, 97, 114, 115, 101, 114, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___13742 = allocate([ 118, 97, 108, 105, 100, 97, 116, 101, 95, 100, 105, 99, 116, 111, 114, 115, 101, 116, 109, 97, 107, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str174 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 110, 111, 100, 101, 115, 32, 102, 111, 114, 32, 100, 105, 99, 116, 111, 114, 115, 101, 116, 109, 97, 107, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str175 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 116, 114, 97, 105, 108, 105, 110, 103, 32, 110, 111, 100, 101, 115, 32, 102, 111, 114, 32, 100, 105, 99, 116, 111, 114, 115, 101, 116, 109, 97, 107, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str176 = allocate([ 102, 108, 111, 119, 95, 115, 116, 109, 116, 0 ], "i8", ALLOC_NORMAL);
    __str177 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 102, 108, 111, 119, 95, 115, 116, 109, 116, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str178 = allocate([ 112, 97, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str179 = allocate([ 98, 114, 101, 97, 107, 0 ], "i8", ALLOC_NORMAL);
    __str180 = allocate([ 99, 111, 110, 116, 105, 110, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str181 = allocate([ 117, 110, 114, 101, 99, 111, 103, 110, 105, 122, 101, 100, 32, 110, 111, 100, 101, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str182 = allocate([ 99, 111, 117, 108, 100, 32, 110, 111, 116, 32, 118, 97, 108, 105, 100, 97, 116, 101, 32, 101, 120, 112, 114, 101, 115, 115, 105, 111, 110, 32, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str183 = allocate([ 86, 65, 76, 73, 68, 65, 84, 73, 79, 78, 32, 70, 65, 73, 76, 85, 82, 69, 58, 32, 114, 101, 112, 111, 114, 116, 32, 116, 104, 105, 115, 32, 116, 111, 32, 116, 104, 101, 32, 109, 97, 105, 110, 116, 97, 105, 110, 101, 114, 33, 0 ], "i8", ALLOC_NORMAL);
    __str184 = allocate([ 69, 114, 114, 111, 114, 32, 80, 97, 114, 115, 105, 110, 103, 32, 101, 110, 99, 111, 100, 105, 110, 103, 95, 100, 101, 99, 108, 0 ], "i8", ALLOC_NORMAL);
    _pickle_constructor = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str185 = allocate([ 79, 33, 58, 95, 112, 105, 99, 107, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str186 = allocate([ 79, 105, 0 ], "i8", ALLOC_NORMAL);
    __str187 = allocate([ 79, 40, 79, 41, 0 ], "i8", ALLOC_NORMAL);
    _parser_functions = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_NORMAL);
    __str188 = allocate([ 97, 115, 116, 50, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str189 = allocate([ 67, 114, 101, 97, 116, 101, 115, 32, 97, 32, 116, 117, 112, 108, 101, 45, 116, 114, 101, 101, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 97, 110, 32, 83, 84, 46, 0 ], "i8", ALLOC_NORMAL);
    __str190 = allocate([ 97, 115, 116, 50, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str191 = allocate([ 67, 114, 101, 97, 116, 101, 115, 32, 97, 32, 108, 105, 115, 116, 45, 116, 114, 101, 101, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 97, 110, 32, 83, 84, 46, 0 ], "i8", ALLOC_NORMAL);
    __str192 = allocate([ 99, 111, 109, 112, 105, 108, 101, 97, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str193 = allocate([ 67, 111, 109, 112, 105, 108, 101, 115, 32, 97, 110, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 32, 105, 110, 116, 111, 32, 97, 32, 99, 111, 100, 101, 32, 111, 98, 106, 101, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str194 = allocate([ 99, 111, 109, 112, 105, 108, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str195 = allocate([ 101, 120, 112, 114, 0 ], "i8", ALLOC_NORMAL);
    __str196 = allocate([ 67, 114, 101, 97, 116, 101, 115, 32, 97, 110, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 32, 102, 114, 111, 109, 32, 97, 110, 32, 101, 120, 112, 114, 101, 115, 115, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str197 = allocate([ 68, 101, 116, 101, 114, 109, 105, 110, 101, 115, 32, 105, 102, 32, 97, 110, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 32, 119, 97, 115, 32, 99, 114, 101, 97, 116, 101, 100, 32, 102, 114, 111, 109, 32, 97, 110, 32, 101, 120, 112, 114, 101, 115, 115, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str198 = allocate([ 68, 101, 116, 101, 114, 109, 105, 110, 101, 115, 32, 105, 102, 32, 97, 110, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 32, 119, 97, 115, 32, 99, 114, 101, 97, 116, 101, 100, 32, 102, 114, 111, 109, 32, 97, 32, 115, 117, 105, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str199 = allocate([ 67, 114, 101, 97, 116, 101, 115, 32, 97, 110, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 32, 102, 114, 111, 109, 32, 97, 32, 115, 117, 105, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str200 = allocate([ 115, 101, 113, 117, 101, 110, 99, 101, 50, 97, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str201 = allocate([ 67, 114, 101, 97, 116, 101, 115, 32, 97, 110, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 32, 102, 114, 111, 109, 32, 97, 32, 116, 114, 101, 101, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str202 = allocate([ 115, 101, 113, 117, 101, 110, 99, 101, 50, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str203 = allocate([ 115, 116, 50, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str204 = allocate([ 115, 116, 50, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str205 = allocate([ 116, 117, 112, 108, 101, 50, 97, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str206 = allocate([ 116, 117, 112, 108, 101, 50, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str207 = allocate([ 95, 112, 105, 99, 107, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str208 = allocate([ 82, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 112, 105, 99, 107, 108, 101, 32, 109, 97, 103, 105, 99, 32, 116, 111, 32, 97, 108, 108, 111, 119, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 115, 32, 116, 111, 32, 98, 101, 32, 112, 105, 99, 107, 108, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str209 = allocate([ 112, 97, 114, 115, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str210 = allocate([ 112, 97, 114, 115, 101, 114, 46, 80, 97, 114, 115, 101, 114, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str211 = allocate([ 80, 97, 114, 115, 101, 114, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str212 = allocate([ 65, 83, 84, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str213 = allocate([ 83, 84, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str214 = allocate([ 95, 95, 99, 111, 112, 121, 114, 105, 103, 104, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str215 = allocate([ 95, 95, 100, 111, 99, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str216 = allocate([ 95, 95, 118, 101, 114, 115, 105, 111, 110, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str217 = allocate([ 99, 111, 112, 121, 95, 114, 101, 103, 0 ], "i8", ALLOC_NORMAL);
    __str218 = allocate([ 112, 105, 99, 107, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_PyST_Type + 12] = __str1;
    HEAP[_PyST_Type + 24] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_PyST_Type + 32] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_PyST_Type + 40] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_PyST_Type + 88] = __str2;
    HEAP[_keywords_9350] = __str4;
    HEAP[_keywords_9350 + 4] = __str5;
    HEAP[_keywords_9350 + 8] = __str6;
    HEAP[_keywords_9400] = __str4;
    HEAP[_keywords_9400 + 4] = __str5;
    HEAP[_keywords_9400 + 8] = __str6;
    HEAP[_keywords_9451] = __str4;
    HEAP[_keywords_9451 + 4] = __str14;
    HEAP[_keywords_9499] = __str4;
    HEAP[_keywords_9525] = __str4;
    HEAP[_parser_methods] = __str21;
    HEAP[_parser_methods + 4] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_parser_methods + 12] = __str22;
    HEAP[_parser_methods + 16] = __str23;
    HEAP[_parser_methods + 20] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_parser_methods + 28] = __str24;
    HEAP[_parser_methods + 32] = __str25;
    HEAP[_parser_methods + 36] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_parser_methods + 44] = __str26;
    HEAP[_parser_methods + 48] = __str27;
    HEAP[_parser_methods + 52] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_parser_methods + 60] = __str28;
    HEAP[_parser_methods + 64] = __str29;
    HEAP[_parser_methods + 68] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_parser_methods + 76] = __str30;
    HEAP[_keywords_9566] = __str31;
    HEAP[_keywords_9620] = __str35;
    HEAP[_parser_functions] = __str188;
    HEAP[_parser_functions + 4] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_parser_functions + 12] = __str189;
    HEAP[_parser_functions + 16] = __str190;
    HEAP[_parser_functions + 20] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_parser_functions + 28] = __str191;
    HEAP[_parser_functions + 32] = __str192;
    HEAP[_parser_functions + 36] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_parser_functions + 44] = __str193;
    HEAP[_parser_functions + 48] = __str194;
    HEAP[_parser_functions + 52] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_parser_functions + 60] = __str193;
    HEAP[_parser_functions + 64] = __str195;
    HEAP[_parser_functions + 68] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_parser_functions + 76] = __str196;
    HEAP[_parser_functions + 80] = __str23;
    HEAP[_parser_functions + 84] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_parser_functions + 92] = __str197;
    HEAP[_parser_functions + 96] = __str25;
    HEAP[_parser_functions + 100] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_parser_functions + 108] = __str198;
    HEAP[_parser_functions + 112] = __str62;
    HEAP[_parser_functions + 116] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_parser_functions + 124] = __str199;
    HEAP[_parser_functions + 128] = __str200;
    HEAP[_parser_functions + 132] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_parser_functions + 140] = __str201;
    HEAP[_parser_functions + 144] = __str202;
    HEAP[_parser_functions + 148] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_parser_functions + 156] = __str201;
    HEAP[_parser_functions + 160] = __str203;
    HEAP[_parser_functions + 164] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_parser_functions + 172] = __str189;
    HEAP[_parser_functions + 176] = __str204;
    HEAP[_parser_functions + 180] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_parser_functions + 188] = __str191;
    HEAP[_parser_functions + 192] = __str205;
    HEAP[_parser_functions + 196] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_parser_functions + 204] = __str201;
    HEAP[_parser_functions + 208] = __str206;
    HEAP[_parser_functions + 212] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_parser_functions + 220] = __str201;
    HEAP[_parser_functions + 224] = __str207;
    HEAP[_parser_functions + 228] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_parser_functions + 236] = __str208;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
