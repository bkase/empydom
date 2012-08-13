"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 40;
  var $1___SIZE = 8;
  var $2___SIZE = 64;
  var $3___SIZE = 16;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyStructSequence___SIZE = 16;
  var $struct_PyStructSequence_Desc___SIZE = 16;
  var $struct_PyStructSequence_Field___SIZE = 8;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_group___SIZE = 16;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var __str7;
  var _struct_group_type_fields;
  var _struct_group__doc__;
  var _struct_group_type_desc;
  var __str8;
  var _StructGrpType;
  var __str9;
  var __str10;
  var __str11;
  var __str12;
  var __str13;
  var __str14;
  var __str15;
  var __str16;
  var _grp_methods;
  var _grp__doc__;
  var __str17;
  var _initialized;
  var __str18;
  function _mkgrent($p) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $setIndex = __stackBase__ + 12;
      var $v = __stackBase__ + 16;
      var $w = __stackBase__ + 20;
      var $member = __stackBase__ + 24;
      var $x = __stackBase__ + 28;
      
      HEAP[$p_addr] = $p;
      HEAP[$setIndex] = 0;
      var $1 = _PyStructSequence_New(_StructGrpType);
      HEAP[$v] = $1;
      
      
      if (HEAP[$v] == 0) {
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
      var $4 = _PyList_New(0);
      HEAP[$w] = $4;
      
      
      if (HEAP[$w] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      var $10 = HEAP[HEAP[$v]] - 1;
      
      var $12 = HEAP[$v];
      HEAP[$12] = $10;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $21 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $22 = HEAP[$v];
      FUNCTION_TABLE[$21]($22);
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 6:
      
      
      var $25 = HEAP[HEAP[$p_addr] + 12];
      HEAP[$member] = $25;
      __label__ = 20;
      break;
     case 7:
      
      var $27 = HEAP[HEAP[$member]];
      var $28 = _PyString_FromString($27);
      HEAP[$x] = $28;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $31 = HEAP[$w];
      var $32 = HEAP[$x];
      var $33 = _PyList_Append($31, $32);
      
      if ($33 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 9:
      
      
      if (HEAP[$x] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      var $40 = HEAP[HEAP[$x]] - 1;
      
      var $42 = HEAP[$x];
      HEAP[$42] = $40;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $51 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $52 = HEAP[$x];
      FUNCTION_TABLE[$51]($52);
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $56 = HEAP[HEAP[$w]] - 1;
      
      var $58 = HEAP[$w];
      HEAP[$58] = $56;
      
      
      
      
      if (HEAP[HEAP[$w]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[$w] + 4] + 24];
      var $68 = HEAP[$w];
      FUNCTION_TABLE[$67]($68);
      __label__ = 14;
      break;
     case 14:
      
      
      
      var $72 = HEAP[HEAP[$v]] - 1;
      
      var $74 = HEAP[$v];
      HEAP[$74] = $72;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $83 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $84 = HEAP[$v];
      FUNCTION_TABLE[$83]($84);
      __label__ = 16;
      break;
     case 16:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 17:
      
      
      
      var $88 = HEAP[HEAP[$x]] - 1;
      
      var $90 = HEAP[$x];
      HEAP[$90] = $88;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $99 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $100 = HEAP[$x];
      FUNCTION_TABLE[$99]($100);
      __label__ = 19;
      break;
     case 19:
      
      var $102 = HEAP[$member] + 4;
      HEAP[$member] = $102;
      __label__ = 20;
      break;
     case 20:
      
      
      
      if (HEAP[HEAP[$member]] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      var $107 = HEAP[$v];
      var $108 = HEAP[$setIndex];
      
      
      var $111 = HEAP[HEAP[$p_addr]];
      var $112 = _PyString_FromString($111);
      
      var $114 = $107 + 12 + $108 * 4;
      HEAP[$114] = $112;
      
      var $116 = HEAP[$setIndex] + 1;
      HEAP[$setIndex] = $116;
      
      
      
      
      if (HEAP[HEAP[$p_addr] + 4] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      var $122 = HEAP[$v];
      var $123 = HEAP[$setIndex];
      
      
      var $126 = HEAP[HEAP[$p_addr] + 4];
      var $127 = _PyString_FromString($126);
      
      var $129 = $122 + 12 + $123 * 4;
      HEAP[$129] = $127;
      
      var $131 = HEAP[$setIndex] + 1;
      HEAP[$setIndex] = $131;
      __label__ = 24;
      break;
     case 23:
      
      
      
      
      var $136 = HEAP[$v] + 12 + HEAP[$setIndex] * 4;
      HEAP[$136] = __Py_NoneStruct;
      
      var $138 = HEAP[$setIndex] + 1;
      HEAP[$setIndex] = $138;
      
      var $140 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $140;
      __label__ = 24;
      break;
     case 24:
      
      var $142 = HEAP[$v];
      var $143 = HEAP[$setIndex];
      
      
      var $146 = HEAP[HEAP[$p_addr] + 8];
      var $147 = _PyInt_FromLong($146);
      
      var $149 = $142 + 12 + $143 * 4;
      HEAP[$149] = $147;
      
      var $151 = HEAP[$setIndex] + 1;
      HEAP[$setIndex] = $151;
      
      
      
      
      var $156 = HEAP[$v] + 12 + HEAP[$setIndex] * 4;
      var $157 = HEAP[$w];
      HEAP[$156] = $157;
      
      var $159 = HEAP[$setIndex] + 1;
      HEAP[$setIndex] = $159;
      var $160 = _PyErr_Occurred();
      
      if ($160 != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 25:
      
      
      
      var $165 = HEAP[HEAP[$v]] - 1;
      
      var $167 = HEAP[$v];
      HEAP[$167] = $165;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $176 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $177 = HEAP[$v];
      FUNCTION_TABLE[$176]($177);
      __label__ = 27;
      break;
     case 27:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 28:
      var $178 = HEAP[$v];
      HEAP[$0] = $178;
      __label__ = 29;
      break;
     case 29:
      var $179 = HEAP[$0];
      HEAP[$retval] = $179;
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
  function _grp_getgrgid($self, $pyo_id) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $pyo_id_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $py_int_id = __stackBase__ + 16;
      var $gid = __stackBase__ + 20;
      var $p = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      HEAP[$pyo_id_addr] = $pyo_id;
      var $1 = HEAP[$pyo_id_addr];
      var $2 = _PyNumber_Int($1);
      HEAP[$py_int_id] = $2;
      
      
      if (HEAP[$py_int_id] == 0) {
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
      
      
      
      var $8 = HEAP[HEAP[$py_int_id] + 8];
      HEAP[$gid] = $8;
      
      
      
      var $12 = HEAP[HEAP[$py_int_id]] - 1;
      
      var $14 = HEAP[$py_int_id];
      HEAP[$14] = $12;
      
      
      
      
      if (HEAP[HEAP[$py_int_id]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$py_int_id] + 4] + 24];
      var $24 = HEAP[$py_int_id];
      FUNCTION_TABLE[$23]($24);
      __label__ = 4;
      break;
     case 4:
      var $25 = HEAP[$gid];
      var $26 = _getgrgid($25);
      HEAP[$p] = $26;
      
      
      if (HEAP[$p] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $29 = HEAP[_PyExc_KeyError];
      var $30 = HEAP[$gid];
      var $31 = _PyErr_Format($29, __str9, allocate([ $30, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 6:
      var $32 = HEAP[$p];
      var $33 = _mkgrent($32);
      HEAP[$0] = $33;
      __label__ = 7;
      break;
     case 7:
      var $34 = HEAP[$0];
      HEAP[$retval] = $34;
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
  function _grp_getgrnam($self, $pyo_name) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $pyo_name_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $py_str_name = __stackBase__ + 16;
      var $name = __stackBase__ + 20;
      var $p = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      HEAP[$pyo_name_addr] = $pyo_name;
      var $1 = HEAP[$pyo_name_addr];
      var $2 = _PyObject_Str($1);
      HEAP[$py_str_name] = $2;
      
      
      if (HEAP[$py_str_name] == 0) {
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
      
      
      
      var $8 = HEAP[$py_str_name] + 20;
      HEAP[$name] = $8;
      var $9 = HEAP[$name];
      var $10 = _getgrnam($9);
      HEAP[$p] = $10;
      
      
      if (HEAP[$p] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      var $13 = HEAP[_PyExc_KeyError];
      var $14 = HEAP[$name];
      var $15 = _PyErr_Format($13, __str10, allocate([ $14, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      
      
      var $19 = HEAP[HEAP[$py_str_name]] - 1;
      
      var $21 = HEAP[$py_str_name];
      HEAP[$21] = $19;
      
      
      
      
      if (HEAP[HEAP[$py_str_name]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[$py_str_name] + 4] + 24];
      var $31 = HEAP[$py_str_name];
      FUNCTION_TABLE[$30]($31);
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 6:
      
      
      
      var $35 = HEAP[HEAP[$py_str_name]] - 1;
      
      var $37 = HEAP[$py_str_name];
      HEAP[$37] = $35;
      
      
      
      
      if (HEAP[HEAP[$py_str_name]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$py_str_name] + 4] + 24];
      var $47 = HEAP[$py_str_name];
      FUNCTION_TABLE[$46]($47);
      __label__ = 8;
      break;
     case 8:
      var $48 = HEAP[$p];
      var $49 = _mkgrent($48);
      HEAP[$0] = $49;
      __label__ = 9;
      break;
     case 9:
      var $50 = HEAP[$0];
      HEAP[$retval] = $50;
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
  function _grp_getgrall($self, $ignore) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $ignore_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $d = __stackBase__ + 16;
      var $p = __stackBase__ + 20;
      var $v = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      HEAP[$ignore_addr] = $ignore;
      var $1 = _PyList_New(0);
      HEAP[$d] = $1;
      
      
      if (HEAP[$d] == 0) {
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
      _setgrent();
      __label__ = 13;
      break;
     case 3:
      var $4 = HEAP[$p];
      var $5 = _mkgrent($4);
      HEAP[$v] = $5;
      
      
      if (HEAP[$v] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $8 = HEAP[$d];
      var $9 = HEAP[$v];
      var $10 = _PyList_Append($8, $9);
      
      if ($10 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 5:
      
      
      if (HEAP[$v] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      var $17 = HEAP[HEAP[$v]] - 1;
      
      var $19 = HEAP[$v];
      HEAP[$19] = $17;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $28 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $29 = HEAP[$v];
      FUNCTION_TABLE[$28]($29);
      __label__ = 8;
      break;
     case 8:
      
      
      
      var $33 = HEAP[HEAP[$d]] - 1;
      
      var $35 = HEAP[$d];
      HEAP[$35] = $33;
      
      
      
      
      if (HEAP[HEAP[$d]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$d] + 4] + 24];
      var $45 = HEAP[$d];
      FUNCTION_TABLE[$44]($45);
      __label__ = 10;
      break;
     case 10:
      _endgrent();
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 11:
      
      
      
      var $49 = HEAP[HEAP[$v]] - 1;
      
      var $51 = HEAP[$v];
      HEAP[$51] = $49;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $61 = HEAP[$v];
      FUNCTION_TABLE[$60]($61);
      __label__ = 13;
      break;
     case 13:
      var $62 = _getgrent();
      HEAP[$p] = $62;
      
      
      if (HEAP[$p] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      _endgrent();
      var $65 = HEAP[$d];
      HEAP[$0] = $65;
      __label__ = 15;
      break;
     case 15:
      var $66 = HEAP[$0];
      HEAP[$retval] = $66;
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
  function _initgrp() {
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
      
      var $0 = _Py_InitModule4(__str17, _grp_methods, _grp__doc__, 0, 1013);
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
      
      
      if (HEAP[_initialized] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      _PyStructSequence_InitType(_StructGrpType, _struct_group_type_desc);
      __label__ = 3;
      break;
     case 3:
      var $7 = HEAP[$d];
      var $8 = _PyDict_SetItemString($7, __str18, _StructGrpType);
      HEAP[_initialized] = 1;
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
  Module["_initgrp"] = _initgrp;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _grp_getgrgid, 0, _grp_getgrnam, 0, _grp_getgrall, 0 ]);
  function run(args) {
    __str = allocate([ 103, 114, 95, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 103, 114, 111, 117, 112, 32, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 103, 114, 95, 112, 97, 115, 115, 119, 100, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 112, 97, 115, 115, 119, 111, 114, 100, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 103, 114, 95, 103, 105, 100, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 103, 114, 111, 117, 112, 32, 105, 100, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 103, 114, 95, 109, 101, 109, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 103, 114, 111, 117, 112, 32, 109, 101, 109, 101, 98, 101, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    _struct_group_type_fields = allocate(40, [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _struct_group__doc__ = allocate([ 103, 114, 112, 46, 115, 116, 114, 117, 99, 116, 95, 103, 114, 111, 117, 112, 58, 32, 82, 101, 115, 117, 108, 116, 115, 32, 102, 114, 111, 109, 32, 103, 101, 116, 103, 114, 42, 40, 41, 32, 114, 111, 117, 116, 105, 110, 101, 115, 46, 10, 10, 84, 104, 105, 115, 32, 111, 98, 106, 101, 99, 116, 32, 109, 97, 121, 32, 98, 101, 32, 97, 99, 99, 101, 115, 115, 101, 100, 32, 101, 105, 116, 104, 101, 114, 32, 97, 115, 32, 97, 32, 116, 117, 112, 108, 101, 32, 111, 102, 10, 32, 32, 40, 103, 114, 95, 110, 97, 109, 101, 44, 103, 114, 95, 112, 97, 115, 115, 119, 100, 44, 103, 114, 95, 103, 105, 100, 44, 103, 114, 95, 109, 101, 109, 41, 10, 111, 114, 32, 118, 105, 97, 32, 116, 104, 101, 32, 111, 98, 106, 101, 99, 116, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 115, 32, 97, 115, 32, 110, 97, 109, 101, 100, 32, 105, 110, 32, 116, 104, 101, 32, 97, 98, 111, 118, 101, 32, 116, 117, 112, 108, 101, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _struct_group_type_desc = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyStructSequence_Field*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str8 = allocate([ 103, 114, 112, 46, 115, 116, 114, 117, 99, 116, 95, 103, 114, 111, 117, 112, 0 ], "i8", ALLOC_NORMAL);
    _StructGrpType = allocate(196, [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str9 = allocate([ 103, 101, 116, 103, 114, 103, 105, 100, 40, 41, 58, 32, 103, 105, 100, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 58, 32, 37, 100, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 103, 101, 116, 103, 114, 110, 97, 109, 40, 41, 58, 32, 110, 97, 109, 101, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 58, 32, 37, 115, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 103, 101, 116, 103, 114, 103, 105, 100, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 103, 101, 116, 103, 114, 103, 105, 100, 40, 105, 100, 41, 32, 45, 62, 32, 116, 117, 112, 108, 101, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 103, 114, 111, 117, 112, 32, 100, 97, 116, 97, 98, 97, 115, 101, 32, 101, 110, 116, 114, 121, 32, 102, 111, 114, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 110, 117, 109, 101, 114, 105, 99, 32, 103, 114, 111, 117, 112, 32, 73, 68, 46, 32, 32, 73, 102, 10, 105, 100, 32, 105, 115, 32, 110, 111, 116, 32, 118, 97, 108, 105, 100, 44, 32, 114, 97, 105, 115, 101, 32, 75, 101, 121, 69, 114, 114, 111, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 103, 101, 116, 103, 114, 110, 97, 109, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 103, 101, 116, 103, 114, 110, 97, 109, 40, 110, 97, 109, 101, 41, 32, 45, 62, 32, 116, 117, 112, 108, 101, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 103, 114, 111, 117, 112, 32, 100, 97, 116, 97, 98, 97, 115, 101, 32, 101, 110, 116, 114, 121, 32, 102, 111, 114, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 103, 114, 111, 117, 112, 32, 110, 97, 109, 101, 46, 32, 32, 73, 102, 10, 110, 97, 109, 101, 32, 105, 115, 32, 110, 111, 116, 32, 118, 97, 108, 105, 100, 44, 32, 114, 97, 105, 115, 101, 32, 75, 101, 121, 69, 114, 114, 111, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 103, 101, 116, 103, 114, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 103, 101, 116, 103, 114, 97, 108, 108, 40, 41, 32, 45, 62, 32, 108, 105, 115, 116, 32, 111, 102, 32, 116, 117, 112, 108, 101, 115, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 108, 105, 115, 116, 32, 111, 102, 32, 97, 108, 108, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 103, 114, 111, 117, 112, 32, 101, 110, 116, 114, 105, 101, 115, 44, 32, 105, 110, 32, 97, 114, 98, 105, 116, 114, 97, 114, 121, 32, 111, 114, 100, 101, 114, 46, 10, 65, 110, 32, 101, 110, 116, 114, 121, 32, 119, 104, 111, 115, 101, 32, 110, 97, 109, 101, 32, 115, 116, 97, 114, 116, 115, 32, 119, 105, 116, 104, 32, 39, 43, 39, 32, 111, 114, 32, 39, 45, 39, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 115, 32, 97, 110, 32, 105, 110, 115, 116, 114, 117, 99, 116, 105, 111, 110, 10, 116, 111, 32, 117, 115, 101, 32, 89, 80, 47, 78, 73, 83, 32, 97, 110, 100, 32, 109, 97, 121, 32, 110, 111, 116, 32, 98, 101, 32, 97, 99, 99, 101, 115, 115, 105, 98, 108, 101, 32, 118, 105, 97, 32, 103, 101, 116, 103, 114, 110, 97, 109, 32, 111, 114, 32, 103, 101, 116, 103, 114, 103, 105, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _grp_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _grp__doc__ = allocate([ 65, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 32, 85, 110, 105, 120, 32, 103, 114, 111, 117, 112, 32, 100, 97, 116, 97, 98, 97, 115, 101, 46, 10, 10, 71, 114, 111, 117, 112, 32, 101, 110, 116, 114, 105, 101, 115, 32, 97, 114, 101, 32, 114, 101, 112, 111, 114, 116, 101, 100, 32, 97, 115, 32, 52, 45, 116, 117, 112, 108, 101, 115, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 116, 104, 101, 32, 102, 111, 108, 108, 111, 119, 105, 110, 103, 32, 102, 105, 101, 108, 100, 115, 10, 102, 114, 111, 109, 32, 116, 104, 101, 32, 103, 114, 111, 117, 112, 32, 100, 97, 116, 97, 98, 97, 115, 101, 44, 32, 105, 110, 32, 111, 114, 100, 101, 114, 58, 10, 10, 32, 32, 110, 97, 109, 101, 32, 32, 32, 45, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 103, 114, 111, 117, 112, 10, 32, 32, 112, 97, 115, 115, 119, 100, 32, 45, 32, 103, 114, 111, 117, 112, 32, 112, 97, 115, 115, 119, 111, 114, 100, 32, 40, 101, 110, 99, 114, 121, 112, 116, 101, 100, 41, 59, 32, 111, 102, 116, 101, 110, 32, 101, 109, 112, 116, 121, 10, 32, 32, 103, 105, 100, 32, 32, 32, 32, 45, 32, 110, 117, 109, 101, 114, 105, 99, 32, 73, 68, 32, 111, 102, 32, 116, 104, 101, 32, 103, 114, 111, 117, 112, 10, 32, 32, 109, 101, 109, 32, 32, 32, 32, 45, 32, 108, 105, 115, 116, 32, 111, 102, 32, 109, 101, 109, 98, 101, 114, 115, 10, 10, 84, 104, 101, 32, 103, 105, 100, 32, 105, 115, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 44, 32, 110, 97, 109, 101, 32, 97, 110, 100, 32, 112, 97, 115, 115, 119, 111, 114, 100, 32, 97, 114, 101, 32, 115, 116, 114, 105, 110, 103, 115, 46, 32, 32, 40, 78, 111, 116, 101, 32, 116, 104, 97, 116, 32, 109, 111, 115, 116, 10, 117, 115, 101, 114, 115, 32, 97, 114, 101, 32, 110, 111, 116, 32, 101, 120, 112, 108, 105, 99, 105, 116, 108, 121, 32, 108, 105, 115, 116, 101, 100, 32, 97, 115, 32, 109, 101, 109, 98, 101, 114, 115, 32, 111, 102, 32, 116, 104, 101, 32, 103, 114, 111, 117, 112, 115, 32, 116, 104, 101, 121, 32, 97, 114, 101, 32, 105, 110, 10, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 116, 104, 101, 32, 112, 97, 115, 115, 119, 111, 114, 100, 32, 100, 97, 116, 97, 98, 97, 115, 101, 46, 32, 32, 67, 104, 101, 99, 107, 32, 98, 111, 116, 104, 32, 100, 97, 116, 97, 98, 97, 115, 101, 115, 32, 116, 111, 32, 103, 101, 116, 10, 99, 111, 109, 112, 108, 101, 116, 101, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 46, 41, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 103, 114, 112, 0 ], "i8", ALLOC_NORMAL);
    _initialized = allocate(1, "i32", ALLOC_NORMAL);
    __str18 = allocate([ 115, 116, 114, 117, 99, 116, 95, 103, 114, 111, 117, 112, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_struct_group_type_fields] = __str;
    HEAP[_struct_group_type_fields + 4] = __str1;
    HEAP[_struct_group_type_fields + 8] = __str2;
    HEAP[_struct_group_type_fields + 12] = __str3;
    HEAP[_struct_group_type_fields + 16] = __str4;
    HEAP[_struct_group_type_fields + 20] = __str5;
    HEAP[_struct_group_type_fields + 24] = __str6;
    HEAP[_struct_group_type_fields + 28] = __str7;
    HEAP[_struct_group_type_desc] = __str8;
    HEAP[_struct_group_type_desc + 4] = _struct_group__doc__;
    HEAP[_struct_group_type_desc + 8] = _struct_group_type_fields;
    HEAP[_grp_methods] = __str11;
    HEAP[_grp_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_grp_methods + 12] = __str12;
    HEAP[_grp_methods + 16] = __str13;
    HEAP[_grp_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_grp_methods + 28] = __str14;
    HEAP[_grp_methods + 32] = __str15;
    HEAP[_grp_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_grp_methods + 44] = __str16;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
