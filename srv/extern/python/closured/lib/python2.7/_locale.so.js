"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 192;
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
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyUnicodeObject___SIZE = 24;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_langinfo_constant___SIZE = 8;
  var $struct_lconv___SIZE = 56;
  var $struct_lconv___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53 ];
  var _locale__doc__;
  var _setlocale__doc__;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var __str5;
  var _Error;
  var __str6;
  var __str7;
  var _localeconv__doc__;
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
  var _strcoll__doc__;
  var __str26;
  var __str27;
  var _strxfrm__doc__;
  var __str28;
  var _langinfo_constants;
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
  var __str83;
  var __str84;
  var _nl_langinfo__doc__;
  var __str85;
  var __str86;
  var __str87;
  var _gettext__doc__;
  var __str88;
  var _dgettext__doc__;
  var __str89;
  var _dcgettext__doc__;
  var __str90;
  var _textdomain__doc__;
  var __str91;
  var _bindtextdomain__doc__;
  var __str92;
  var __str93;
  var _bind_textdomain_codeset__doc__;
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
  var _PyLocale_Methods;
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
  function _copy_grouping($s) {
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
      var $i = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      var $val = __stackBase__ + 20;
      
      HEAP[$s_addr] = $s;
      HEAP[$val] = 0;
      
      
      
      
      if (HEAP[HEAP[$s_addr]] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = _PyList_New(0);
      HEAP[$0] = $5;
      __label__ = 21;
      break;
     case 2:
      HEAP[$i] = 0;
      __label__ = 4;
      break;
     case 3:
      
      var $7 = HEAP[$i] + 1;
      HEAP[$i] = $7;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      if (HEAP[HEAP[$s_addr] + HEAP[$i]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      if (HEAP[HEAP[$s_addr] + HEAP[$i]] != 127) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      var $19 = HEAP[$i] + 1;
      var $20 = _PyList_New($19);
      HEAP[$result] = $20;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 8:
      HEAP[$i] = -1;
      __label__ = 9;
      break;
     case 9:
      
      var $24 = HEAP[$i] + 1;
      HEAP[$i] = $24;
      
      
      
      
      var $29 = HEAP[HEAP[$s_addr] + HEAP[$i]];
      var $30 = _PyInt_FromLong($29);
      HEAP[$val] = $30;
      
      
      if (HEAP[$val] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      var $33 = HEAP[$result];
      var $34 = HEAP[$i];
      var $35 = HEAP[$val];
      var $36 = _PyList_SetItem($33, $34, $35);
      
      if ($36 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      var $41 = HEAP[HEAP[$val]] - 1;
      
      var $43 = HEAP[$val];
      HEAP[$43] = $41;
      
      
      
      
      if (HEAP[HEAP[$val]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $52 = HEAP[HEAP[HEAP[$val] + 4] + 24];
      var $53 = HEAP[$val];
      FUNCTION_TABLE[$52]($53);
      __label__ = 13;
      break;
     case 13:
      HEAP[$val] = 0;
      __label__ = 16;
      break;
     case 14:
      
      
      
      
      
      if (HEAP[HEAP[$s_addr] + HEAP[$i]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      
      if (HEAP[HEAP[$s_addr] + HEAP[$i]] != 127) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      if (HEAP[$val] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      
      
      
      var $69 = HEAP[HEAP[$result]] - 1;
      
      var $71 = HEAP[$result];
      HEAP[$71] = $69;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $80 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $81 = HEAP[$result];
      FUNCTION_TABLE[$80]($81);
      __label__ = 19;
      break;
     case 19:
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 20:
      var $82 = HEAP[$result];
      HEAP[$0] = $82;
      __label__ = 21;
      break;
     case 21:
      var $83 = HEAP[$0];
      HEAP[$retval] = $83;
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
  function _fixup_ulcase() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 280;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 280);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $mods = __stackBase__;
      var $strop = __stackBase__ + 4;
      var $string = __stackBase__ + 8;
      var $ulo = __stackBase__ + 12;
      var $ul = __stackBase__ + 16;
      var $n = __stackBase__ + 272;
      var $c = __stackBase__ + 276;
      
      var $0 = _PyImport_GetModuleDict();
      HEAP[$mods] = $0;
      
      
      if (HEAP[$mods] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = HEAP[$mods];
      var $4 = _PyDict_GetItemString($3, __str);
      HEAP[$string] = $4;
      
      
      if (HEAP[$string] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $7 = HEAP[$string];
      var $8 = _PyModule_GetDict($7);
      HEAP[$string] = $8;
      __label__ = 3;
      break;
     case 3:
      var $9 = HEAP[$mods];
      var $10 = _PyDict_GetItemString($9, __str1);
      HEAP[$strop] = $10;
      
      
      if (HEAP[$strop] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $13 = HEAP[$strop];
      var $14 = _PyModule_GetDict($13);
      HEAP[$strop] = $14;
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[$string] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      if (HEAP[$strop] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      HEAP[$n] = 0;
      HEAP[$c] = 0;
      __label__ = 11;
      break;
     case 8:
      var $19 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$19] + 2 * HEAP[$c]] & 256) != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      var $29 = HEAP[$c] & 255;
      var $30 = $ul + HEAP[$n];
      HEAP[$30] = $29;
      
      var $32 = HEAP[$n] + 1;
      HEAP[$n] = $32;
      __label__ = 10;
      break;
     case 10:
      
      var $34 = HEAP[$c] + 1;
      HEAP[$c] = $34;
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$c] <= 255) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $ul12 = $ul;
      var $37 = HEAP[$n];
      var $38 = _PyString_FromStringAndSize($ul12, $37);
      HEAP[$ulo] = $38;
      
      
      if (HEAP[$ulo] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      if (HEAP[$string] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $43 = HEAP[$string];
      var $44 = HEAP[$ulo];
      var $45 = _PyDict_SetItemString($43, __str2, $44);
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$strop] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $48 = HEAP[$strop];
      var $49 = HEAP[$ulo];
      var $50 = _PyDict_SetItemString($48, __str2, $49);
      __label__ = 17;
      break;
     case 17:
      
      
      
      var $54 = HEAP[HEAP[$ulo]] - 1;
      
      var $56 = HEAP[$ulo];
      HEAP[$56] = $54;
      
      
      
      
      if (HEAP[HEAP[$ulo]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $65 = HEAP[HEAP[HEAP[$ulo] + 4] + 24];
      var $66 = HEAP[$ulo];
      FUNCTION_TABLE[$65]($66);
      __label__ = 19;
      break;
     case 19:
      HEAP[$n] = 0;
      HEAP[$c] = 0;
      __label__ = 23;
      break;
     case 20:
      var $67 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$67] + 2 * HEAP[$c]] & 512) != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      var $77 = HEAP[$c] & 255;
      var $78 = $ul + HEAP[$n];
      HEAP[$78] = $77;
      
      var $80 = HEAP[$n] + 1;
      HEAP[$n] = $80;
      __label__ = 22;
      break;
     case 22:
      
      var $82 = HEAP[$c] + 1;
      HEAP[$c] = $82;
      __label__ = 23;
      break;
     case 23:
      
      
      if (HEAP[$c] <= 255) {
        __label__ = 20;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      var $ul26 = $ul;
      var $85 = HEAP[$n];
      var $86 = _PyString_FromStringAndSize($ul26, $85);
      HEAP[$ulo] = $86;
      
      
      if (HEAP[$ulo] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      if (HEAP[$string] != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      var $91 = HEAP[$string];
      var $92 = HEAP[$ulo];
      var $93 = _PyDict_SetItemString($91, __str3, $92);
      __label__ = 27;
      break;
     case 27:
      
      
      if (HEAP[$strop] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      var $96 = HEAP[$strop];
      var $97 = HEAP[$ulo];
      var $98 = _PyDict_SetItemString($96, __str3, $97);
      __label__ = 29;
      break;
     case 29:
      
      
      
      var $102 = HEAP[HEAP[$ulo]] - 1;
      
      var $104 = HEAP[$ulo];
      HEAP[$104] = $102;
      
      
      
      
      if (HEAP[HEAP[$ulo]] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $113 = HEAP[HEAP[HEAP[$ulo] + 4] + 24];
      var $114 = HEAP[$ulo];
      FUNCTION_TABLE[$113]($114);
      __label__ = 31;
      break;
     case 31:
      HEAP[$n] = 0;
      HEAP[$c] = 0;
      __label__ = 35;
      break;
     case 32:
      var $115 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$115] + 2 * HEAP[$c]] & 1024) != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      var $125 = HEAP[$c] & 255;
      var $126 = $ul + HEAP[$n];
      HEAP[$126] = $125;
      
      var $128 = HEAP[$n] + 1;
      HEAP[$n] = $128;
      __label__ = 34;
      break;
     case 34:
      
      var $130 = HEAP[$c] + 1;
      HEAP[$c] = $130;
      __label__ = 35;
      break;
     case 35:
      
      
      if (HEAP[$c] <= 255) {
        __label__ = 32;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      var $ul40 = $ul;
      var $133 = HEAP[$n];
      var $134 = _PyString_FromStringAndSize($ul40, $133);
      HEAP[$ulo] = $134;
      
      
      if (HEAP[$ulo] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      if (HEAP[$string] != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      var $139 = HEAP[$string];
      var $140 = HEAP[$ulo];
      var $141 = _PyDict_SetItemString($139, __str4, $140);
      __label__ = 39;
      break;
     case 39:
      
      
      
      var $145 = HEAP[HEAP[$ulo]] - 1;
      
      var $147 = HEAP[$ulo];
      HEAP[$147] = $145;
      
      
      
      
      if (HEAP[HEAP[$ulo]] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      
      
      var $156 = HEAP[HEAP[HEAP[$ulo] + 4] + 24];
      var $157 = HEAP[$ulo];
      FUNCTION_TABLE[$156]($157);
      __label__ = 41;
      break;
     case 41:
      __label__ = 42;
      break;
     case 42:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyLocale_setlocale($self, $args) {
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
      var $category = __stackBase__ + 16;
      var $locale = __stackBase__ + 20;
      var $result = __stackBase__ + 24;
      var $result_object = __stackBase__ + 28;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$locale] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str5, allocate([ $category, 0, 0, 0, $locale, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$locale] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 3:
      var $6 = HEAP[$locale];
      var $7 = HEAP[$category];
      var $8 = _setlocale($7, $6);
      HEAP[$result] = $8;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $11 = HEAP[_Error];
      _PyErr_SetString($11, __str6);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 5:
      var $12 = HEAP[$result];
      var $13 = _PyString_FromString($12);
      HEAP[$result_object] = $13;
      
      
      if (HEAP[$result_object] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 7:
      
      
      if (HEAP[$category] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      if (HEAP[$category] == 6) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      _fixup_ulcase();
      __label__ = 10;
      break;
     case 10:
      _PyErr_Clear();
      __label__ = 14;
      break;
     case 11:
      var $20 = HEAP[$category];
      var $21 = _setlocale($20, 0);
      HEAP[$result] = $21;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $24 = HEAP[_Error];
      _PyErr_SetString($24, __str7);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 13:
      var $25 = HEAP[$result];
      var $26 = _PyString_FromString($25);
      HEAP[$result_object] = $26;
      __label__ = 14;
      break;
     case 14:
      var $27 = HEAP[$result_object];
      HEAP[$0] = $27;
      __label__ = 15;
      break;
     case 15:
      var $28 = HEAP[$0];
      HEAP[$retval] = $28;
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
  function _PyLocale_localeconv($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $result = __stackBase__ + 12;
      var $l = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      var $1 = _PyDict_New();
      HEAP[$result] = $1;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 82;
      break;
     case 2:
      var $4 = _localeconv();
      HEAP[$l] = $4;
      
      
      var $7 = HEAP[HEAP[$l]];
      var $8 = _PyString_FromString($7);
      HEAP[$x] = $8;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $11 = HEAP[$result];
      var $12 = HEAP[$x];
      var $13 = _PyDict_SetItemString($11, __str8, $12);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      var $19 = HEAP[HEAP[$x]] - 1;
      
      var $21 = HEAP[$x];
      HEAP[$21] = $19;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $31 = HEAP[$x];
      FUNCTION_TABLE[$30]($31);
      __label__ = 6;
      break;
     case 6:
      
      
      var $34 = HEAP[HEAP[$l] + 4];
      var $35 = _PyString_FromString($34);
      HEAP[$x] = $35;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $38 = HEAP[$result];
      var $39 = HEAP[$x];
      var $40 = _PyDict_SetItemString($38, __str9, $39);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      var $46 = HEAP[HEAP[$x]] - 1;
      
      var $48 = HEAP[$x];
      HEAP[$48] = $46;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $58 = HEAP[$x];
      FUNCTION_TABLE[$57]($58);
      __label__ = 10;
      break;
     case 10:
      
      
      var $61 = HEAP[HEAP[$l] + 8];
      var $62 = _copy_grouping($61);
      HEAP[$x] = $62;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $65 = HEAP[$result];
      var $66 = HEAP[$x];
      var $67 = _PyDict_SetItemString($65, __str10, $66);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      
      var $73 = HEAP[HEAP[$x]] - 1;
      
      var $75 = HEAP[$x];
      HEAP[$75] = $73;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $84 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $85 = HEAP[$x];
      FUNCTION_TABLE[$84]($85);
      __label__ = 14;
      break;
     case 14:
      
      
      var $88 = HEAP[HEAP[$l] + 12];
      var $89 = _PyString_FromString($88);
      HEAP[$x] = $89;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $92 = HEAP[$result];
      var $93 = HEAP[$x];
      var $94 = _PyDict_SetItemString($92, __str11, $93);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      var $100 = HEAP[HEAP[$x]] - 1;
      
      var $102 = HEAP[$x];
      HEAP[$102] = $100;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $111 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $112 = HEAP[$x];
      FUNCTION_TABLE[$111]($112);
      __label__ = 18;
      break;
     case 18:
      
      
      var $115 = HEAP[HEAP[$l] + 16];
      var $116 = _PyString_FromString($115);
      HEAP[$x] = $116;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      var $119 = HEAP[$result];
      var $120 = HEAP[$x];
      var $121 = _PyDict_SetItemString($119, __str12, $120);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      
      
      
      var $127 = HEAP[HEAP[$x]] - 1;
      
      var $129 = HEAP[$x];
      HEAP[$129] = $127;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $138 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $139 = HEAP[$x];
      FUNCTION_TABLE[$138]($139);
      __label__ = 22;
      break;
     case 22:
      
      
      var $142 = HEAP[HEAP[$l] + 20];
      var $143 = _PyString_FromString($142);
      HEAP[$x] = $143;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      var $146 = HEAP[$result];
      var $147 = HEAP[$x];
      var $148 = _PyDict_SetItemString($146, __str13, $147);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 24:
      
      
      
      var $154 = HEAP[HEAP[$x]] - 1;
      
      var $156 = HEAP[$x];
      HEAP[$156] = $154;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $165 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $166 = HEAP[$x];
      FUNCTION_TABLE[$165]($166);
      __label__ = 26;
      break;
     case 26:
      
      
      var $169 = HEAP[HEAP[$l] + 24];
      var $170 = _PyString_FromString($169);
      HEAP[$x] = $170;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      var $173 = HEAP[$result];
      var $174 = HEAP[$x];
      var $175 = _PyDict_SetItemString($173, __str14, $174);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      
      
      
      var $181 = HEAP[HEAP[$x]] - 1;
      
      var $183 = HEAP[$x];
      HEAP[$183] = $181;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $192 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $193 = HEAP[$x];
      FUNCTION_TABLE[$192]($193);
      __label__ = 30;
      break;
     case 30:
      
      
      var $196 = HEAP[HEAP[$l] + 28];
      var $197 = _copy_grouping($196);
      HEAP[$x] = $197;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      var $200 = HEAP[$result];
      var $201 = HEAP[$x];
      var $202 = _PyDict_SetItemString($200, __str15, $201);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 32:
      
      
      
      var $208 = HEAP[HEAP[$x]] - 1;
      
      var $210 = HEAP[$x];
      HEAP[$210] = $208;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $219 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $220 = HEAP[$x];
      FUNCTION_TABLE[$219]($220);
      __label__ = 34;
      break;
     case 34:
      
      
      var $223 = HEAP[HEAP[$l] + 32];
      var $224 = _PyString_FromString($223);
      HEAP[$x] = $224;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      var $227 = HEAP[$result];
      var $228 = HEAP[$x];
      var $229 = _PyDict_SetItemString($227, __str16, $228);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 36:
      
      
      
      var $235 = HEAP[HEAP[$x]] - 1;
      
      var $237 = HEAP[$x];
      HEAP[$237] = $235;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $246 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $247 = HEAP[$x];
      FUNCTION_TABLE[$246]($247);
      __label__ = 38;
      break;
     case 38:
      
      
      var $250 = HEAP[HEAP[$l] + 36];
      var $251 = _PyString_FromString($250);
      HEAP[$x] = $251;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      var $254 = HEAP[$result];
      var $255 = HEAP[$x];
      var $256 = _PyDict_SetItemString($254, __str17, $255);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 40:
      
      
      
      var $262 = HEAP[HEAP[$x]] - 1;
      
      var $264 = HEAP[$x];
      HEAP[$264] = $262;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $273 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $274 = HEAP[$x];
      FUNCTION_TABLE[$273]($274);
      __label__ = 42;
      break;
     case 42:
      
      
      
      var $278 = HEAP[HEAP[$l] + 40];
      var $279 = _PyInt_FromLong($278);
      HEAP[$x] = $279;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      var $282 = HEAP[$result];
      var $283 = HEAP[$x];
      var $284 = _PyDict_SetItemString($282, __str18, $283);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 44:
      
      
      
      var $290 = HEAP[HEAP[$x]] - 1;
      
      var $292 = HEAP[$x];
      HEAP[$292] = $290;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      var $301 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $302 = HEAP[$x];
      FUNCTION_TABLE[$301]($302);
      __label__ = 46;
      break;
     case 46:
      
      
      
      var $306 = HEAP[HEAP[$l] + 41];
      var $307 = _PyInt_FromLong($306);
      HEAP[$x] = $307;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 47:
      var $310 = HEAP[$result];
      var $311 = HEAP[$x];
      var $312 = _PyDict_SetItemString($310, __str19, $311);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 48:
      
      
      
      var $318 = HEAP[HEAP[$x]] - 1;
      
      var $320 = HEAP[$x];
      HEAP[$320] = $318;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      
      
      var $329 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $330 = HEAP[$x];
      FUNCTION_TABLE[$329]($330);
      __label__ = 50;
      break;
     case 50:
      
      
      
      var $334 = HEAP[HEAP[$l] + 42];
      var $335 = _PyInt_FromLong($334);
      HEAP[$x] = $335;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 51:
      var $338 = HEAP[$result];
      var $339 = HEAP[$x];
      var $340 = _PyDict_SetItemString($338, __str20, $339);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 52:
      
      
      
      var $346 = HEAP[HEAP[$x]] - 1;
      
      var $348 = HEAP[$x];
      HEAP[$348] = $346;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      
      
      
      
      var $357 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $358 = HEAP[$x];
      FUNCTION_TABLE[$357]($358);
      __label__ = 54;
      break;
     case 54:
      
      
      
      var $362 = HEAP[HEAP[$l] + 43];
      var $363 = _PyInt_FromLong($362);
      HEAP[$x] = $363;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 55:
      var $366 = HEAP[$result];
      var $367 = HEAP[$x];
      var $368 = _PyDict_SetItemString($366, __str21, $367);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 56:
      
      
      
      var $374 = HEAP[HEAP[$x]] - 1;
      
      var $376 = HEAP[$x];
      HEAP[$376] = $374;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      
      
      
      
      var $385 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $386 = HEAP[$x];
      FUNCTION_TABLE[$385]($386);
      __label__ = 58;
      break;
     case 58:
      
      
      
      var $390 = HEAP[HEAP[$l] + 44];
      var $391 = _PyInt_FromLong($390);
      HEAP[$x] = $391;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 59:
      var $394 = HEAP[$result];
      var $395 = HEAP[$x];
      var $396 = _PyDict_SetItemString($394, __str22, $395);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 60;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 60:
      
      
      
      var $402 = HEAP[HEAP[$x]] - 1;
      
      var $404 = HEAP[$x];
      HEAP[$404] = $402;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      
      
      
      
      var $413 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $414 = HEAP[$x];
      FUNCTION_TABLE[$413]($414);
      __label__ = 62;
      break;
     case 62:
      
      
      
      var $418 = HEAP[HEAP[$l] + 45];
      var $419 = _PyInt_FromLong($418);
      HEAP[$x] = $419;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 63:
      var $422 = HEAP[$result];
      var $423 = HEAP[$x];
      var $424 = _PyDict_SetItemString($422, __str23, $423);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 64:
      
      
      
      var $430 = HEAP[HEAP[$x]] - 1;
      
      var $432 = HEAP[$x];
      HEAP[$432] = $430;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      
      
      
      
      var $441 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $442 = HEAP[$x];
      FUNCTION_TABLE[$441]($442);
      __label__ = 66;
      break;
     case 66:
      
      
      
      var $446 = HEAP[HEAP[$l] + 46];
      var $447 = _PyInt_FromLong($446);
      HEAP[$x] = $447;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 67:
      var $450 = HEAP[$result];
      var $451 = HEAP[$x];
      var $452 = _PyDict_SetItemString($450, __str24, $451);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 68:
      
      
      
      var $458 = HEAP[HEAP[$x]] - 1;
      
      var $460 = HEAP[$x];
      HEAP[$460] = $458;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      
      
      
      
      var $469 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $470 = HEAP[$x];
      FUNCTION_TABLE[$469]($470);
      __label__ = 70;
      break;
     case 70:
      
      
      
      var $474 = HEAP[HEAP[$l] + 47];
      var $475 = _PyInt_FromLong($474);
      HEAP[$x] = $475;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 71:
      var $478 = HEAP[$result];
      var $479 = HEAP[$x];
      var $480 = _PyDict_SetItemString($478, __str25, $479);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 72;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 72:
      
      
      
      var $486 = HEAP[HEAP[$x]] - 1;
      
      var $488 = HEAP[$x];
      HEAP[$488] = $486;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 73:
      
      
      
      
      var $497 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $498 = HEAP[$x];
      FUNCTION_TABLE[$497]($498);
      __label__ = 74;
      break;
     case 74:
      var $499 = HEAP[$result];
      HEAP[$0] = $499;
      __label__ = 82;
      break;
     case 75:
      
      
      if (HEAP[$result] != 0) {
        __label__ = 76;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 76:
      
      
      
      var $505 = HEAP[HEAP[$result]] - 1;
      
      var $507 = HEAP[$result];
      HEAP[$507] = $505;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 77:
      
      
      
      
      var $516 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $517 = HEAP[$result];
      FUNCTION_TABLE[$516]($517);
      __label__ = 78;
      break;
     case 78:
      
      
      if (HEAP[$x] != 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 79:
      
      
      
      var $523 = HEAP[HEAP[$x]] - 1;
      
      var $525 = HEAP[$x];
      HEAP[$525] = $523;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 80:
      
      
      
      
      var $534 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $535 = HEAP[$x];
      FUNCTION_TABLE[$534]($535);
      __label__ = 81;
      break;
     case 81:
      HEAP[$0] = 0;
      __label__ = 82;
      break;
     case 82:
      var $536 = HEAP[$0];
      HEAP[$retval] = $536;
      __label__ = 83;
      break;
     case 83:
      var $retval81 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval81;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyLocale_strcoll($self, $args) {
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
      var $iftmp_45 = __stackBase__ + 12;
      var $iftmp_43 = __stackBase__ + 16;
      var $iftmp_36 = __stackBase__ + 20;
      var $iftmp_34 = __stackBase__ + 24;
      var $0 = __stackBase__ + 28;
      var $os1 = __stackBase__ + 32;
      var $os2 = __stackBase__ + 36;
      var $result = __stackBase__ + 40;
      var $ws1 = __stackBase__ + 44;
      var $ws2 = __stackBase__ + 48;
      var $rel1 = __stackBase__ + 52;
      var $rel2 = __stackBase__ + 56;
      var $len1 = __stackBase__ + 60;
      var $len2 = __stackBase__ + 64;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$result] = 0;
      HEAP[$ws1] = 0;
      HEAP[$ws2] = 0;
      HEAP[$rel1] = 0;
      HEAP[$rel2] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str26, 2, 2, allocate([ $os1, 0, 0, 0, $os2, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 49;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$os1] + 4] + 84] & 134217728) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$os2] + 4] + 84] & 134217728) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      var $21 = HEAP[$os2] + 20;
      
      
      
      var $25 = HEAP[$os1] + 20;
      var $26 = _strcoll($25, $21);
      var $27 = _PyInt_FromLong($26);
      HEAP[$0] = $27;
      __label__ = 49;
      break;
     case 5:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$os1] + 4] + 84] & 268435456) == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$os2] + 4] + 84] & 268435456) == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $42 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($42, __str27);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$os1] + 4] + 84] & 268435456) == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      var $50 = HEAP[$os1];
      var $51 = _PyUnicodeUCS2_FromObject($50);
      HEAP[$os1] = $51;
      
      
      if (HEAP[$os1] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = 0;
      __label__ = 49;
      break;
     case 11:
      HEAP[$rel1] = 1;
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$os2] + 4] + 84] & 268435456) == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 13:
      var $61 = HEAP[$os2];
      var $62 = _PyUnicodeUCS2_FromObject($61);
      HEAP[$os2] = $62;
      
      
      if (HEAP[$os2] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      
      
      if (HEAP[$rel1] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      var $67 = HEAP[$os1];
      
      
      var $70 = HEAP[$67] - 1;
      var $71 = $67;
      HEAP[$71] = $70;
      
      
      
      if (HEAP[$67] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $79 = HEAP[HEAP[HEAP[$os1] + 4] + 24];
      var $80 = HEAP[$os1];
      FUNCTION_TABLE[$79]($80);
      __label__ = 17;
      break;
     case 17:
      HEAP[$0] = 0;
      __label__ = 49;
      break;
     case 18:
      HEAP[$rel2] = 1;
      __label__ = 19;
      break;
     case 19:
      
      
      
      
      var $85 = HEAP[HEAP[$os1] + 8] + 1;
      HEAP[$len1] = $85;
      
      
      
      if (HEAP[$len1] * 4 >= 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 20:
      
      
      
      if (HEAP[$len1] * 4 != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      var $93 = HEAP[$len1] * 4;
      HEAP[$iftmp_36] = $93;
      __label__ = 23;
      break;
     case 22:
      HEAP[$iftmp_36] = 1;
      __label__ = 23;
      break;
     case 23:
      var $94 = HEAP[$iftmp_36];
      var $95 = _malloc($94);
      var $96 = $95;
      HEAP[$iftmp_34] = $96;
      __label__ = 25;
      break;
     case 24:
      HEAP[$iftmp_34] = 0;
      __label__ = 25;
      break;
     case 25:
      var $97 = HEAP[$iftmp_34];
      HEAP[$ws1] = $97;
      
      
      if (HEAP[$ws1] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      var $100 = _PyErr_NoMemory();
      __label__ = 38;
      break;
     case 27:
      
      var $102 = HEAP[$os1];
      var $103 = HEAP[$ws1];
      var $104 = HEAP[$len1];
      var $105 = _PyUnicodeUCS2_AsWideChar($102, $103, $104);
      var $106 = $105 == -1;
      if ($106) {
        __label__ = 38;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      var $110 = HEAP[$ws1] + 4 * (HEAP[$len1] - 1);
      HEAP[$110] = 0;
      
      
      
      
      var $115 = HEAP[HEAP[$os2] + 8] + 1;
      HEAP[$len2] = $115;
      
      
      
      if (HEAP[$len2] * 4 >= 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 29:
      
      
      
      if (HEAP[$len2] * 4 != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      var $123 = HEAP[$len2] * 4;
      HEAP[$iftmp_45] = $123;
      __label__ = 32;
      break;
     case 31:
      HEAP[$iftmp_45] = 1;
      __label__ = 32;
      break;
     case 32:
      var $124 = HEAP[$iftmp_45];
      var $125 = _malloc($124);
      var $126 = $125;
      HEAP[$iftmp_43] = $126;
      __label__ = 34;
      break;
     case 33:
      HEAP[$iftmp_43] = 0;
      __label__ = 34;
      break;
     case 34:
      var $127 = HEAP[$iftmp_43];
      HEAP[$ws2] = $127;
      
      
      if (HEAP[$ws2] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      var $130 = _PyErr_NoMemory();
      __label__ = 38;
      break;
     case 36:
      
      var $132 = HEAP[$os2];
      var $133 = HEAP[$ws2];
      var $134 = HEAP[$len2];
      var $135 = _PyUnicodeUCS2_AsWideChar($132, $133, $134);
      var $136 = $135 == -1;
      if ($136) {
        __label__ = 38;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      
      var $140 = HEAP[$ws2] + 4 * (HEAP[$len2] - 1);
      HEAP[$140] = 0;
      var $141 = HEAP[$ws1];
      var $142 = HEAP[$ws2];
      var $143 = _wcscoll($141, $142);
      var $144 = _PyInt_FromLong($143);
      HEAP[$result] = $144;
      __label__ = 38;
      break;
     case 38:
      
      
      if (HEAP[$ws1] != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      var $148 = HEAP[$ws1];
      _free($148);
      __label__ = 40;
      break;
     case 40:
      
      
      if (HEAP[$ws2] != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      var $152 = HEAP[$ws2];
      _free($152);
      __label__ = 42;
      break;
     case 42:
      
      
      if (HEAP[$rel1] != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 43:
      var $155 = HEAP[$os1];
      
      
      var $158 = HEAP[$155] - 1;
      var $159 = $155;
      HEAP[$159] = $158;
      
      
      
      if (HEAP[$155] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      var $167 = HEAP[HEAP[HEAP[$os1] + 4] + 24];
      var $168 = HEAP[$os1];
      FUNCTION_TABLE[$167]($168);
      __label__ = 45;
      break;
     case 45:
      
      
      if (HEAP[$rel2] != 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 46:
      var $171 = HEAP[$os2];
      
      
      var $174 = HEAP[$171] - 1;
      var $175 = $171;
      HEAP[$175] = $174;
      
      
      
      if (HEAP[$171] == 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      
      
      
      
      var $183 = HEAP[HEAP[HEAP[$os2] + 4] + 24];
      var $184 = HEAP[$os2];
      FUNCTION_TABLE[$183]($184);
      __label__ = 48;
      break;
     case 48:
      var $185 = HEAP[$result];
      HEAP[$0] = $185;
      __label__ = 49;
      break;
     case 49:
      var $186 = HEAP[$0];
      HEAP[$retval] = $186;
      __label__ = 50;
      break;
     case 50:
      var $retval48 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval48;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyLocale_strxfrm($self, $args) {
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
      var $s = __stackBase__ + 16;
      var $buf = __stackBase__ + 20;
      var $n1 = __stackBase__ + 24;
      var $n2 = __stackBase__ + 28;
      var $result = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str28, allocate([ $s, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$s];
      var $5 = _strlen($4);
      var $6 = $5 + 1;
      HEAP[$n1] = $6;
      var $7 = HEAP[$n1];
      var $8 = _PyMem_Malloc($7);
      HEAP[$buf] = $8;
      
      
      if (HEAP[$buf] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = _PyErr_NoMemory();
      HEAP[$0] = $11;
      __label__ = 9;
      break;
     case 4:
      var $12 = HEAP[$s];
      var $13 = HEAP[$buf];
      var $14 = HEAP[$n1];
      var $15 = _strxfrm($13, $12, $14);
      var $16 = $15 + 1;
      HEAP[$n2] = $16;
      
      
      
      if (HEAP[$n2] > HEAP[$n1]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $20 = HEAP[$buf];
      var $21 = HEAP[$n2];
      var $22 = _PyMem_Realloc($20, $21);
      HEAP[$buf] = $22;
      
      
      if (HEAP[$buf] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $25 = _PyErr_NoMemory();
      HEAP[$0] = $25;
      __label__ = 9;
      break;
     case 7:
      var $26 = HEAP[$s];
      var $27 = HEAP[$buf];
      var $28 = HEAP[$n2];
      var $29 = _strxfrm($27, $26, $28);
      __label__ = 8;
      break;
     case 8:
      var $30 = HEAP[$buf];
      var $31 = _PyString_FromString($30);
      HEAP[$result] = $31;
      var $32 = HEAP[$buf];
      _PyMem_Free($32);
      var $33 = HEAP[$result];
      HEAP[$0] = $33;
      __label__ = 9;
      break;
     case 9:
      var $34 = HEAP[$0];
      HEAP[$retval] = $34;
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
  function _PyLocale_nl_langinfo($self, $args) {
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
      var $iftmp_62 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $item = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      var $result = __stackBase__ + 28;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str85, allocate([ $item, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      HEAP[$i] = 0;
      __label__ = 9;
      break;
     case 3:
      
      
      
      
      
      
      if (HEAP[_langinfo_constants + HEAP[$i] * 8 + 4] == HEAP[$item]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      var $10 = HEAP[$item];
      var $11 = _nl_langinfo($10);
      HEAP[$result] = $11;
      
      
      if (HEAP[$result] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $14 = HEAP[$result];
      HEAP[$iftmp_62] = $14;
      __label__ = 7;
      break;
     case 6:
      HEAP[$iftmp_62] = __str86;
      __label__ = 7;
      break;
     case 7:
      var $15 = HEAP[$iftmp_62];
      var $16 = _PyString_FromString($15);
      HEAP[$0] = $16;
      __label__ = 11;
      break;
     case 8:
      
      var $18 = HEAP[$i] + 1;
      HEAP[$i] = $18;
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      
      if (HEAP[_langinfo_constants + HEAP[$i] * 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      var $24 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($24, __str87);
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 11:
      var $25 = HEAP[$0];
      HEAP[$retval] = $25;
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
  function _PyIntl_gettext($self, $args) {
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
      var $in = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str88, allocate([ $in, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$in];
      var $5 = _gettext($4);
      var $6 = _PyString_FromString($5);
      HEAP[$0] = $6;
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
  function _PyIntl_dgettext($self, $args) {
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
      var $domain = __stackBase__ + 16;
      var $in = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str89, allocate([ $domain, 0, 0, 0, $in, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$in];
      var $5 = HEAP[$domain];
      var $6 = _dgettext($5, $4);
      var $7 = _PyString_FromString($6);
      HEAP[$0] = $7;
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
  function _PyIntl_dcgettext($self, $args) {
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
      var $domain = __stackBase__ + 16;
      var $msgid = __stackBase__ + 20;
      var $category = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str90, allocate([ $domain, 0, 0, 0, $msgid, 0, 0, 0, $category, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$category];
      var $5 = HEAP[$msgid];
      var $6 = HEAP[$domain];
      var $7 = _dcgettext($6, $5, $4);
      var $8 = _PyString_FromString($7);
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
  function _PyIntl_textdomain($self, $args) {
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
      var $domain = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str91, allocate([ $domain, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$domain];
      var $5 = _textdomain($4);
      HEAP[$domain] = $5;
      
      
      if (HEAP[$domain] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_PyExc_OSError];
      var $9 = _PyErr_SetFromErrno($8);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      var $10 = HEAP[$domain];
      var $11 = _PyString_FromString($10);
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
  function _PyIntl_bindtextdomain($self, $args) {
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
      var $domain = __stackBase__ + 16;
      var $dirname = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str92, allocate([ $domain, 0, 0, 0, $dirname, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      
      if (HEAP[HEAP[$domain]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $7 = HEAP[_Error];
      _PyErr_SetString($7, __str93);
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 4:
      var $8 = HEAP[$dirname];
      var $9 = HEAP[$domain];
      var $10 = _bindtextdomain($9, $8);
      HEAP[$dirname] = $10;
      
      
      if (HEAP[$dirname] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $13 = HEAP[_PyExc_OSError];
      var $14 = _PyErr_SetFromErrno($13);
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 6:
      var $15 = HEAP[$dirname];
      var $16 = _PyString_FromString($15);
      HEAP[$0] = $16;
      __label__ = 7;
      break;
     case 7:
      var $17 = HEAP[$0];
      HEAP[$retval] = $17;
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
  function _PyIntl_bind_textdomain_codeset($self, $args) {
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
      var $domain = __stackBase__ + 16;
      var $codeset = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str92, allocate([ $domain, 0, 0, 0, $codeset, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$codeset];
      var $5 = HEAP[$domain];
      var $6 = _bind_textdomain_codeset($5, $4);
      HEAP[$codeset] = $6;
      
      
      if (HEAP[$codeset] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = HEAP[$codeset];
      var $10 = _PyString_FromString($9);
      HEAP[$0] = $10;
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
  function _init_locale() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      var $d = __stackBase__ + 4;
      var $x = __stackBase__ + 8;
      var $i = __stackBase__ + 12;
      
      var $0 = _Py_InitModule4(__str104, _PyLocale_Methods, 0, 0, 1013);
      HEAP[$m] = $0;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = HEAP[$m];
      var $4 = _PyModule_GetDict($3);
      HEAP[$d] = $4;
      var $5 = _PyInt_FromLong(0);
      HEAP[$x] = $5;
      var $6 = HEAP[$d];
      var $7 = HEAP[$x];
      var $8 = _PyDict_SetItemString($6, __str105, $7);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      var $14 = HEAP[HEAP[$x]] - 1;
      
      var $16 = HEAP[$x];
      HEAP[$16] = $14;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $25 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $26 = HEAP[$x];
      FUNCTION_TABLE[$25]($26);
      __label__ = 4;
      break;
     case 4:
      var $27 = _PyInt_FromLong(2);
      HEAP[$x] = $27;
      var $28 = HEAP[$d];
      var $29 = HEAP[$x];
      var $30 = _PyDict_SetItemString($28, __str106, $29);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      var $36 = HEAP[HEAP[$x]] - 1;
      
      var $38 = HEAP[$x];
      HEAP[$38] = $36;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $47 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $48 = HEAP[$x];
      FUNCTION_TABLE[$47]($48);
      __label__ = 7;
      break;
     case 7:
      var $49 = _PyInt_FromLong(3);
      HEAP[$x] = $49;
      var $50 = HEAP[$d];
      var $51 = HEAP[$x];
      var $52 = _PyDict_SetItemString($50, __str107, $51);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      var $58 = HEAP[HEAP[$x]] - 1;
      
      var $60 = HEAP[$x];
      HEAP[$60] = $58;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $69 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $70 = HEAP[$x];
      FUNCTION_TABLE[$69]($70);
      __label__ = 10;
      break;
     case 10:
      var $71 = _PyInt_FromLong(4);
      HEAP[$x] = $71;
      var $72 = HEAP[$d];
      var $73 = HEAP[$x];
      var $74 = _PyDict_SetItemString($72, __str108, $73);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      
      var $80 = HEAP[HEAP[$x]] - 1;
      
      var $82 = HEAP[$x];
      HEAP[$82] = $80;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $91 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $92 = HEAP[$x];
      FUNCTION_TABLE[$91]($92);
      __label__ = 13;
      break;
     case 13:
      var $93 = _PyInt_FromLong(5);
      HEAP[$x] = $93;
      var $94 = HEAP[$d];
      var $95 = HEAP[$x];
      var $96 = _PyDict_SetItemString($94, __str109, $95);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      var $102 = HEAP[HEAP[$x]] - 1;
      
      var $104 = HEAP[$x];
      HEAP[$104] = $102;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $113 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $114 = HEAP[$x];
      FUNCTION_TABLE[$113]($114);
      __label__ = 16;
      break;
     case 16:
      var $115 = _PyInt_FromLong(1);
      HEAP[$x] = $115;
      var $116 = HEAP[$d];
      var $117 = HEAP[$x];
      var $118 = _PyDict_SetItemString($116, __str110, $117);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      var $124 = HEAP[HEAP[$x]] - 1;
      
      var $126 = HEAP[$x];
      HEAP[$126] = $124;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $135 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $136 = HEAP[$x];
      FUNCTION_TABLE[$135]($136);
      __label__ = 19;
      break;
     case 19:
      var $137 = _PyInt_FromLong(6);
      HEAP[$x] = $137;
      var $138 = HEAP[$d];
      var $139 = HEAP[$x];
      var $140 = _PyDict_SetItemString($138, __str111, $139);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      
      
      
      var $146 = HEAP[HEAP[$x]] - 1;
      
      var $148 = HEAP[$x];
      HEAP[$148] = $146;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $157 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $158 = HEAP[$x];
      FUNCTION_TABLE[$157]($158);
      __label__ = 22;
      break;
     case 22:
      var $159 = _PyInt_FromLong(127);
      HEAP[$x] = $159;
      var $160 = HEAP[$d];
      var $161 = HEAP[$x];
      var $162 = _PyDict_SetItemString($160, __str112, $161);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 23:
      
      
      
      var $168 = HEAP[HEAP[$x]] - 1;
      
      var $170 = HEAP[$x];
      HEAP[$170] = $168;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $179 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $180 = HEAP[$x];
      FUNCTION_TABLE[$179]($180);
      __label__ = 25;
      break;
     case 25:
      var $181 = _PyErr_NewException(__str113, 0, 0);
      HEAP[_Error] = $181;
      var $182 = HEAP[_Error];
      var $183 = HEAP[$d];
      var $184 = _PyDict_SetItemString($183, __str114, $182);
      var $185 = _PyString_FromString(_locale__doc__);
      HEAP[$x] = $185;
      var $186 = HEAP[$d];
      var $187 = HEAP[$x];
      var $188 = _PyDict_SetItemString($186, __str115, $187);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 26:
      
      
      
      var $194 = HEAP[HEAP[$x]] - 1;
      
      var $196 = HEAP[$x];
      HEAP[$196] = $194;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $205 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $206 = HEAP[$x];
      FUNCTION_TABLE[$205]($206);
      __label__ = 28;
      break;
     case 28:
      HEAP[$i] = 0;
      __label__ = 30;
      break;
     case 29:
      
      
      
      var $210 = HEAP[_langinfo_constants + HEAP[$i] * 8 + 4];
      
      
      
      var $214 = HEAP[_langinfo_constants + HEAP[$i] * 8];
      var $215 = HEAP[$m];
      var $216 = _PyModule_AddIntConstant($215, $214, $210);
      
      var $218 = HEAP[$i] + 1;
      HEAP[$i] = $218;
      __label__ = 30;
      break;
     case 30:
      
      
      
      
      
      if (HEAP[_langinfo_constants + HEAP[$i] * 8] != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      __label__ = 32;
      break;
     case 32:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_locale"] = _init_locale;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _PyLocale_setlocale, 0, _PyLocale_localeconv, 0, _PyLocale_strcoll, 0, _PyLocale_strxfrm, 0, _PyLocale_nl_langinfo, 0, _PyIntl_gettext, 0, _PyIntl_dgettext, 0, _PyIntl_dcgettext, 0, _PyIntl_textdomain, 0, _PyIntl_bindtextdomain, 0, _PyIntl_bind_textdomain_codeset, 0 ]);
  function run(args) {
    _locale__doc__ = allocate([ 83, 117, 112, 112, 111, 114, 116, 32, 102, 111, 114, 32, 80, 79, 83, 73, 88, 32, 108, 111, 99, 97, 108, 101, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _setlocale__doc__ = allocate([ 40, 105, 110, 116, 101, 103, 101, 114, 44, 115, 116, 114, 105, 110, 103, 61, 78, 111, 110, 101, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 46, 32, 65, 99, 116, 105, 118, 97, 116, 101, 115, 47, 113, 117, 101, 114, 105, 101, 115, 32, 108, 111, 99, 97, 108, 101, 32, 112, 114, 111, 99, 101, 115, 115, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 115, 116, 114, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 117, 112, 112, 101, 114, 99, 97, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 108, 111, 119, 101, 114, 99, 97, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 108, 101, 116, 116, 101, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 105, 124, 122, 58, 115, 101, 116, 108, 111, 99, 97, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _Error = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str6 = allocate([ 117, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 108, 111, 99, 97, 108, 101, 32, 115, 101, 116, 116, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 108, 111, 99, 97, 108, 101, 32, 113, 117, 101, 114, 121, 32, 102, 97, 105, 108, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    _localeconv__doc__ = allocate([ 40, 41, 32, 45, 62, 32, 100, 105, 99, 116, 46, 32, 82, 101, 116, 117, 114, 110, 115, 32, 110, 117, 109, 101, 114, 105, 99, 32, 97, 110, 100, 32, 109, 111, 110, 101, 116, 97, 114, 121, 32, 108, 111, 99, 97, 108, 101, 45, 115, 112, 101, 99, 105, 102, 105, 99, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 100, 101, 99, 105, 109, 97, 108, 95, 112, 111, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 116, 104, 111, 117, 115, 97, 110, 100, 115, 95, 115, 101, 112, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 103, 114, 111, 117, 112, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 105, 110, 116, 95, 99, 117, 114, 114, 95, 115, 121, 109, 98, 111, 108, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 99, 117, 114, 114, 101, 110, 99, 121, 95, 115, 121, 109, 98, 111, 108, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 109, 111, 110, 95, 100, 101, 99, 105, 109, 97, 108, 95, 112, 111, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 109, 111, 110, 95, 116, 104, 111, 117, 115, 97, 110, 100, 115, 95, 115, 101, 112, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 109, 111, 110, 95, 103, 114, 111, 117, 112, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 112, 111, 115, 105, 116, 105, 118, 101, 95, 115, 105, 103, 110, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 110, 101, 103, 97, 116, 105, 118, 101, 95, 115, 105, 103, 110, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 105, 110, 116, 95, 102, 114, 97, 99, 95, 100, 105, 103, 105, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 102, 114, 97, 99, 95, 100, 105, 103, 105, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 112, 95, 99, 115, 95, 112, 114, 101, 99, 101, 100, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 112, 95, 115, 101, 112, 95, 98, 121, 95, 115, 112, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 110, 95, 99, 115, 95, 112, 114, 101, 99, 101, 100, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 110, 95, 115, 101, 112, 95, 98, 121, 95, 115, 112, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 112, 95, 115, 105, 103, 110, 95, 112, 111, 115, 110, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 110, 95, 115, 105, 103, 110, 95, 112, 111, 115, 110, 0 ], "i8", ALLOC_NORMAL);
    _strcoll__doc__ = allocate([ 115, 116, 114, 105, 110, 103, 44, 115, 116, 114, 105, 110, 103, 32, 45, 62, 32, 105, 110, 116, 46, 32, 67, 111, 109, 112, 97, 114, 101, 115, 32, 116, 119, 111, 32, 115, 116, 114, 105, 110, 103, 115, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 116, 104, 101, 32, 108, 111, 99, 97, 108, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 115, 116, 114, 99, 111, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 115, 116, 114, 99, 111, 108, 108, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 116, 114, 105, 110, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    _strxfrm__doc__ = allocate([ 115, 116, 114, 105, 110, 103, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 46, 32, 82, 101, 116, 117, 114, 110, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 116, 104, 97, 116, 32, 98, 101, 104, 97, 118, 101, 115, 32, 102, 111, 114, 32, 99, 109, 112, 32, 108, 111, 99, 97, 108, 101, 45, 97, 119, 97, 114, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 115, 58, 115, 116, 114, 120, 102, 114, 109, 0 ], "i8", ALLOC_NORMAL);
    _langinfo_constants = allocate([ 0, 0, 0, 0, 131079, 0, 0, 0, 0, 0, 0, 0, 131080, 0, 0, 0, 0, 0, 0, 0, 131081, 0, 0, 0, 0, 0, 0, 0, 131082, 0, 0, 0, 0, 0, 0, 0, 131083, 0, 0, 0, 0, 0, 0, 0, 131084, 0, 0, 0, 0, 0, 0, 0, 131085, 0, 0, 0, 0, 0, 0, 0, 131072, 0, 0, 0, 0, 0, 0, 0, 131073, 0, 0, 0, 0, 0, 0, 0, 131074, 0, 0, 0, 0, 0, 0, 0, 131075, 0, 0, 0, 0, 0, 0, 0, 131076, 0, 0, 0, 0, 0, 0, 0, 131077, 0, 0, 0, 0, 0, 0, 0, 131078, 0, 0, 0, 0, 0, 0, 0, 131098, 0, 0, 0, 0, 0, 0, 0, 131099, 0, 0, 0, 0, 0, 0, 0, 131100, 0, 0, 0, 0, 0, 0, 0, 131101, 0, 0, 0, 0, 0, 0, 0, 131102, 0, 0, 0, 0, 0, 0, 0, 131103, 0, 0, 0, 0, 0, 0, 0, 131104, 0, 0, 0, 0, 0, 0, 0, 131105, 0, 0, 0, 0, 0, 0, 0, 131106, 0, 0, 0, 0, 0, 0, 0, 131107, 0, 0, 0, 0, 0, 0, 0, 131108, 0, 0, 0, 0, 0, 0, 0, 131109, 0, 0, 0, 0, 0, 0, 0, 131086, 0, 0, 0, 0, 0, 0, 0, 131087, 0, 0, 0, 0, 0, 0, 0, 131088, 0, 0, 0, 0, 0, 0, 0, 131089, 0, 0, 0, 0, 0, 0, 0, 131090, 0, 0, 0, 0, 0, 0, 0, 131091, 0, 0, 0, 0, 0, 0, 0, 131092, 0, 0, 0, 0, 0, 0, 0, 131093, 0, 0, 0, 0, 0, 0, 0, 131094, 0, 0, 0, 0, 0, 0, 0, 131095, 0, 0, 0, 0, 0, 0, 0, 131096, 0, 0, 0, 0, 0, 0, 0, 131097, 0, 0, 0, 0, 0, 0, 0, 65536, 0, 0, 0, 0, 0, 0, 0, 65537, 0, 0, 0, 0, 0, 0, 0, 262159, 0, 0, 0, 0, 0, 0, 0, 131112, 0, 0, 0, 0, 0, 0, 0, 131113, 0, 0, 0, 0, 0, 0, 0, 131114, 0, 0, 0, 0, 0, 0, 0, 131110, 0, 0, 0, 0, 0, 0, 0, 131111, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 131115, 0, 0, 0, 0, 0, 0, 0, 131116, 0, 0, 0, 0, 0, 0, 0, 131118, 0, 0, 0, 0, 0, 0, 0, 131120, 0, 0, 0, 0, 0, 0, 0, 131121, 0, 0, 0, 0, 0, 0, 0, 131119, 0, 0, 0, 0, 0, 0, 0, 327680, 0, 0, 0, 0, 0, 0, 0, 327681, 0, 0, 0, 0, 0, 0, 0, 131180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str29 = allocate([ 68, 65, 89, 95, 49, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 68, 65, 89, 95, 50, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 68, 65, 89, 95, 51, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 68, 65, 89, 95, 52, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 68, 65, 89, 95, 53, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 68, 65, 89, 95, 54, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 68, 65, 89, 95, 55, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 65, 66, 68, 65, 89, 95, 49, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 65, 66, 68, 65, 89, 95, 50, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 65, 66, 68, 65, 89, 95, 51, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 65, 66, 68, 65, 89, 95, 52, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 65, 66, 68, 65, 89, 95, 53, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 65, 66, 68, 65, 89, 95, 54, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 65, 66, 68, 65, 89, 95, 55, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 77, 79, 78, 95, 49, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 77, 79, 78, 95, 50, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 77, 79, 78, 95, 51, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 77, 79, 78, 95, 52, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 77, 79, 78, 95, 53, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 77, 79, 78, 95, 54, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 77, 79, 78, 95, 55, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 77, 79, 78, 95, 56, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 77, 79, 78, 95, 57, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 77, 79, 78, 95, 49, 48, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 77, 79, 78, 95, 49, 49, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 77, 79, 78, 95, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 65, 66, 77, 79, 78, 95, 49, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 65, 66, 77, 79, 78, 95, 50, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 65, 66, 77, 79, 78, 95, 51, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 65, 66, 77, 79, 78, 95, 52, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 65, 66, 77, 79, 78, 95, 53, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 65, 66, 77, 79, 78, 95, 54, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 65, 66, 77, 79, 78, 95, 55, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 65, 66, 77, 79, 78, 95, 56, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 65, 66, 77, 79, 78, 95, 57, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 65, 66, 77, 79, 78, 95, 49, 48, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 65, 66, 77, 79, 78, 95, 49, 49, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 65, 66, 77, 79, 78, 95, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 82, 65, 68, 73, 88, 67, 72, 65, 82, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 84, 72, 79, 85, 83, 69, 80, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 67, 82, 78, 67, 89, 83, 84, 82, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 68, 95, 84, 95, 70, 77, 84, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 68, 95, 70, 77, 84, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 84, 95, 70, 77, 84, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 65, 77, 95, 83, 84, 82, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 80, 77, 95, 83, 84, 82, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 67, 79, 68, 69, 83, 69, 84, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 84, 95, 70, 77, 84, 95, 65, 77, 80, 77, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 69, 82, 65, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 69, 82, 65, 95, 68, 95, 70, 77, 84, 0 ], "i8", ALLOC_NORMAL);
    __str79 = allocate([ 69, 82, 65, 95, 68, 95, 84, 95, 70, 77, 84, 0 ], "i8", ALLOC_NORMAL);
    __str80 = allocate([ 69, 82, 65, 95, 84, 95, 70, 77, 84, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 65, 76, 84, 95, 68, 73, 71, 73, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str82 = allocate([ 89, 69, 83, 69, 88, 80, 82, 0 ], "i8", ALLOC_NORMAL);
    __str83 = allocate([ 78, 79, 69, 88, 80, 82, 0 ], "i8", ALLOC_NORMAL);
    __str84 = allocate([ 95, 68, 65, 84, 69, 95, 70, 77, 84, 0 ], "i8", ALLOC_NORMAL);
    _nl_langinfo__doc__ = allocate([ 110, 108, 95, 108, 97, 110, 103, 105, 110, 102, 111, 40, 107, 101, 121, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 116, 104, 101, 32, 108, 111, 99, 97, 108, 101, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 32, 97, 115, 115, 111, 99, 105, 97, 116, 101, 100, 32, 119, 105, 116, 104, 32, 107, 101, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 105, 58, 110, 108, 95, 108, 97, 110, 103, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str86 = allocate(1, "i8", ALLOC_NORMAL);
    __str87 = allocate([ 117, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 108, 97, 110, 103, 105, 110, 102, 111, 32, 99, 111, 110, 115, 116, 97, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _gettext__doc__ = allocate([ 103, 101, 116, 116, 101, 120, 116, 40, 109, 115, 103, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 82, 101, 116, 117, 114, 110, 32, 116, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 111, 102, 32, 109, 115, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str88 = allocate([ 115, 0 ], "i8", ALLOC_NORMAL);
    _dgettext__doc__ = allocate([ 100, 103, 101, 116, 116, 101, 120, 116, 40, 100, 111, 109, 97, 105, 110, 44, 32, 109, 115, 103, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 82, 101, 116, 117, 114, 110, 32, 116, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 111, 102, 32, 109, 115, 103, 32, 105, 110, 32, 100, 111, 109, 97, 105, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str89 = allocate([ 122, 115, 0 ], "i8", ALLOC_NORMAL);
    _dcgettext__doc__ = allocate([ 100, 99, 103, 101, 116, 116, 101, 120, 116, 40, 100, 111, 109, 97, 105, 110, 44, 32, 109, 115, 103, 44, 32, 99, 97, 116, 101, 103, 111, 114, 121, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 82, 101, 116, 117, 114, 110, 32, 116, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 111, 102, 32, 109, 115, 103, 32, 105, 110, 32, 100, 111, 109, 97, 105, 110, 32, 97, 110, 100, 32, 99, 97, 116, 101, 103, 111, 114, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str90 = allocate([ 122, 115, 105, 0 ], "i8", ALLOC_NORMAL);
    _textdomain__doc__ = allocate([ 116, 101, 120, 116, 100, 111, 109, 97, 105, 110, 40, 100, 111, 109, 97, 105, 110, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 83, 101, 116, 32, 116, 104, 101, 32, 67, 32, 108, 105, 98, 114, 97, 114, 121, 39, 115, 32, 116, 101, 120, 116, 100, 109, 97, 105, 110, 32, 116, 111, 32, 100, 111, 109, 97, 105, 110, 44, 32, 114, 101, 116, 117, 114, 110, 105, 110, 103, 32, 116, 104, 101, 32, 110, 101, 119, 32, 100, 111, 109, 97, 105, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str91 = allocate([ 122, 0 ], "i8", ALLOC_NORMAL);
    _bindtextdomain__doc__ = allocate([ 98, 105, 110, 100, 116, 101, 120, 116, 100, 111, 109, 97, 105, 110, 40, 100, 111, 109, 97, 105, 110, 44, 32, 100, 105, 114, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 66, 105, 110, 100, 32, 116, 104, 101, 32, 67, 32, 108, 105, 98, 114, 97, 114, 121, 39, 115, 32, 100, 111, 109, 97, 105, 110, 32, 116, 111, 32, 100, 105, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str92 = allocate([ 115, 122, 0 ], "i8", ALLOC_NORMAL);
    __str93 = allocate([ 100, 111, 109, 97, 105, 110, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 110, 111, 110, 45, 101, 109, 112, 116, 121, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _bind_textdomain_codeset__doc__ = allocate([ 98, 105, 110, 100, 95, 116, 101, 120, 116, 100, 111, 109, 97, 105, 110, 95, 99, 111, 100, 101, 115, 101, 116, 40, 100, 111, 109, 97, 105, 110, 44, 32, 99, 111, 100, 101, 115, 101, 116, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 66, 105, 110, 100, 32, 116, 104, 101, 32, 67, 32, 108, 105, 98, 114, 97, 114, 121, 39, 115, 32, 100, 111, 109, 97, 105, 110, 32, 116, 111, 32, 99, 111, 100, 101, 115, 101, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str94 = allocate([ 115, 101, 116, 108, 111, 99, 97, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str95 = allocate([ 108, 111, 99, 97, 108, 101, 99, 111, 110, 118, 0 ], "i8", ALLOC_NORMAL);
    __str96 = allocate([ 115, 116, 114, 120, 102, 114, 109, 0 ], "i8", ALLOC_NORMAL);
    __str97 = allocate([ 110, 108, 95, 108, 97, 110, 103, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str98 = allocate([ 103, 101, 116, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str99 = allocate([ 100, 103, 101, 116, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str100 = allocate([ 100, 99, 103, 101, 116, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str101 = allocate([ 116, 101, 120, 116, 100, 111, 109, 97, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str102 = allocate([ 98, 105, 110, 100, 116, 101, 120, 116, 100, 111, 109, 97, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str103 = allocate([ 98, 105, 110, 100, 95, 116, 101, 120, 116, 100, 111, 109, 97, 105, 110, 95, 99, 111, 100, 101, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    _PyLocale_Methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str104 = allocate([ 95, 108, 111, 99, 97, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str105 = allocate([ 76, 67, 95, 67, 84, 89, 80, 69, 0 ], "i8", ALLOC_NORMAL);
    __str106 = allocate([ 76, 67, 95, 84, 73, 77, 69, 0 ], "i8", ALLOC_NORMAL);
    __str107 = allocate([ 76, 67, 95, 67, 79, 76, 76, 65, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str108 = allocate([ 76, 67, 95, 77, 79, 78, 69, 84, 65, 82, 89, 0 ], "i8", ALLOC_NORMAL);
    __str109 = allocate([ 76, 67, 95, 77, 69, 83, 83, 65, 71, 69, 83, 0 ], "i8", ALLOC_NORMAL);
    __str110 = allocate([ 76, 67, 95, 78, 85, 77, 69, 82, 73, 67, 0 ], "i8", ALLOC_NORMAL);
    __str111 = allocate([ 76, 67, 95, 65, 76, 76, 0 ], "i8", ALLOC_NORMAL);
    __str112 = allocate([ 67, 72, 65, 82, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str113 = allocate([ 108, 111, 99, 97, 108, 101, 46, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str114 = allocate([ 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str115 = allocate([ 95, 95, 100, 111, 99, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_langinfo_constants] = __str29;
    HEAP[_langinfo_constants + 8] = __str30;
    HEAP[_langinfo_constants + 16] = __str31;
    HEAP[_langinfo_constants + 24] = __str32;
    HEAP[_langinfo_constants + 32] = __str33;
    HEAP[_langinfo_constants + 40] = __str34;
    HEAP[_langinfo_constants + 48] = __str35;
    HEAP[_langinfo_constants + 56] = __str36;
    HEAP[_langinfo_constants + 64] = __str37;
    HEAP[_langinfo_constants + 72] = __str38;
    HEAP[_langinfo_constants + 80] = __str39;
    HEAP[_langinfo_constants + 88] = __str40;
    HEAP[_langinfo_constants + 96] = __str41;
    HEAP[_langinfo_constants + 104] = __str42;
    HEAP[_langinfo_constants + 112] = __str43;
    HEAP[_langinfo_constants + 120] = __str44;
    HEAP[_langinfo_constants + 128] = __str45;
    HEAP[_langinfo_constants + 136] = __str46;
    HEAP[_langinfo_constants + 144] = __str47;
    HEAP[_langinfo_constants + 152] = __str48;
    HEAP[_langinfo_constants + 160] = __str49;
    HEAP[_langinfo_constants + 168] = __str50;
    HEAP[_langinfo_constants + 176] = __str51;
    HEAP[_langinfo_constants + 184] = __str52;
    HEAP[_langinfo_constants + 192] = __str53;
    HEAP[_langinfo_constants + 200] = __str54;
    HEAP[_langinfo_constants + 208] = __str55;
    HEAP[_langinfo_constants + 216] = __str56;
    HEAP[_langinfo_constants + 224] = __str57;
    HEAP[_langinfo_constants + 232] = __str58;
    HEAP[_langinfo_constants + 240] = __str59;
    HEAP[_langinfo_constants + 248] = __str60;
    HEAP[_langinfo_constants + 256] = __str61;
    HEAP[_langinfo_constants + 264] = __str62;
    HEAP[_langinfo_constants + 272] = __str63;
    HEAP[_langinfo_constants + 280] = __str64;
    HEAP[_langinfo_constants + 288] = __str65;
    HEAP[_langinfo_constants + 296] = __str66;
    HEAP[_langinfo_constants + 304] = __str67;
    HEAP[_langinfo_constants + 312] = __str68;
    HEAP[_langinfo_constants + 320] = __str69;
    HEAP[_langinfo_constants + 328] = __str70;
    HEAP[_langinfo_constants + 336] = __str71;
    HEAP[_langinfo_constants + 344] = __str72;
    HEAP[_langinfo_constants + 352] = __str73;
    HEAP[_langinfo_constants + 360] = __str74;
    HEAP[_langinfo_constants + 368] = __str75;
    HEAP[_langinfo_constants + 376] = __str76;
    HEAP[_langinfo_constants + 384] = __str77;
    HEAP[_langinfo_constants + 392] = __str78;
    HEAP[_langinfo_constants + 400] = __str79;
    HEAP[_langinfo_constants + 408] = __str80;
    HEAP[_langinfo_constants + 416] = __str81;
    HEAP[_langinfo_constants + 424] = __str82;
    HEAP[_langinfo_constants + 432] = __str83;
    HEAP[_langinfo_constants + 440] = __str84;
    HEAP[_PyLocale_Methods] = __str94;
    HEAP[_PyLocale_Methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_PyLocale_Methods + 12] = _setlocale__doc__;
    HEAP[_PyLocale_Methods + 16] = __str95;
    HEAP[_PyLocale_Methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_PyLocale_Methods + 28] = _localeconv__doc__;
    HEAP[_PyLocale_Methods + 32] = __str26;
    HEAP[_PyLocale_Methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_PyLocale_Methods + 44] = _strcoll__doc__;
    HEAP[_PyLocale_Methods + 48] = __str96;
    HEAP[_PyLocale_Methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_PyLocale_Methods + 60] = _strxfrm__doc__;
    HEAP[_PyLocale_Methods + 64] = __str97;
    HEAP[_PyLocale_Methods + 68] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_PyLocale_Methods + 76] = _nl_langinfo__doc__;
    HEAP[_PyLocale_Methods + 80] = __str98;
    HEAP[_PyLocale_Methods + 84] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_PyLocale_Methods + 92] = _gettext__doc__;
    HEAP[_PyLocale_Methods + 96] = __str99;
    HEAP[_PyLocale_Methods + 100] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_PyLocale_Methods + 108] = _dgettext__doc__;
    HEAP[_PyLocale_Methods + 112] = __str100;
    HEAP[_PyLocale_Methods + 116] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_PyLocale_Methods + 124] = _dcgettext__doc__;
    HEAP[_PyLocale_Methods + 128] = __str101;
    HEAP[_PyLocale_Methods + 132] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_PyLocale_Methods + 140] = _textdomain__doc__;
    HEAP[_PyLocale_Methods + 144] = __str102;
    HEAP[_PyLocale_Methods + 148] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_PyLocale_Methods + 156] = _bindtextdomain__doc__;
    HEAP[_PyLocale_Methods + 160] = __str103;
    HEAP[_PyLocale_Methods + 164] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_PyLocale_Methods + 172] = _bind_textdomain_codeset__doc__;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
