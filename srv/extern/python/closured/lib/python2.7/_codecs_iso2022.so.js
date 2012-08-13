"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 32;
  var $1___SIZE = 16;
  var $2___SIZE = 32;
  var $3___SIZE = 16;
  var $4___SIZE = 64;
  var $5___SIZE = 80;
  var $6___SIZE = 144;
  var $7___SIZE = 96;
  var $8___SIZE = 288;
  var $9___SIZE = 36;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_MultibyteCodec___SIZE = 36;
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
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_dbcs_index___SIZE = 8;
  var $struct_dbcs_index___FLATTENER = [ 0, 4, 5 ];
  var $struct_dbcs_map___SIZE = 12;
  var $struct_iso2022_config___SIZE = 8;
  var $struct_iso2022_designation___SIZE = 16;
  var $struct_iso2022_designation___FLATTENER = [ 0, 1, 2, 4, 8, 12 ];
  var $struct_pair_encodemap___SIZE = 8;
  var $struct_unim_index___SIZE = 8;
  var $struct_unim_index___FLATTENER = [ 0, 4, 5 ];
  var $struct_widedbcs_index___SIZE = 8;
  var $struct_widedbcs_index___FLATTENER = [ 0, 4, 5 ];
  var $union_MultibyteCodec_State___SIZE = 8;
  var _cofunc_8401;
  var __str;
  var __str1;
  var __str2;
  var _codec_list;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var ___methods;
  var _mapping_list;
  var __str7;
  var __str8;
  var __str9;
  var __str10;
  var ___PRETTY_FUNCTION___8664;
  var __str11;
  var ___PRETTY_FUNCTION___9190;
  var _cp949_encmap;
  var _ksx1001_decmap;
  var _jisxcommon_encmap;
  var _jisx0208_decmap;
  var _jisx0212_decmap;
  var _jisx0213_bmp_encmap;
  var _jisx0213_1_bmp_decmap;
  var _jisx0213_2_bmp_decmap;
  var _jisx0213_emp_encmap;
  var _jisx0213_1_emp_decmap;
  var _jisx0213_2_emp_decmap;
  var _gbcommon_encmap;
  var _gb2312_decmap;
  var _initialized_9425;
  var __str12;
  var __str13;
  var __str14;
  var __str15;
  var ___PRETTY_FUNCTION___9487;
  var _initialized_9546;
  var __str16;
  var __str17;
  var __str18;
  var ___PRETTY_FUNCTION___9613;
  var _initialized_9675;
  var __str19;
  var ___PRETTY_FUNCTION___9737;
  var _initialized_9797;
  var __str20;
  var __str21;
  var __str22;
  var __str23;
  var __str24;
  var __str25;
  var _jisx0213_pair_decmap;
  var _jisx0213_pair_encmap;
  var __str26;
  var _initialized_10770;
  var __str27;
  var __str28;
  var __str29;
  var ___PRETTY_FUNCTION___10832;
  var _iso2022_kr_designations;
  var _iso2022_kr_config;
  var _iso2022_jp_designations;
  var _iso2022_jp_config;
  var _iso2022_jp_1_designations;
  var _iso2022_jp_1_config;
  var _iso2022_jp_2_designations;
  var _iso2022_jp_2_config;
  var _iso2022_jp_2004_designations;
  var _iso2022_jp_2004_config;
  var _iso2022_jp_3_designations;
  var _iso2022_jp_3_config;
  var _iso2022_jp_ext_designations;
  var _iso2022_jp_ext_config;
  var __mapping_list;
  var __str30;
  var __str31;
  var __str32;
  var __str33;
  var __str34;
  var __str35;
  var __str36;
  var __codec_list;
  var __str37;
  function _getmultibytecodec() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval = __stackBase__;
      var $0 = __stackBase__ + 4;
      var $mod = __stackBase__ + 8;
      
      
      
      if (HEAP[_cofunc_8401] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      var $3 = _PyImport_ImportModuleNoBlock(__str);
      HEAP[$mod] = $3;
      
      
      if (HEAP[$mod] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 3:
      var $6 = HEAP[$mod];
      var $7 = _PyObject_GetAttrString($6, __str1);
      HEAP[_cofunc_8401] = $7;
      
      
      
      var $11 = HEAP[HEAP[$mod]] - 1;
      
      var $13 = HEAP[$mod];
      HEAP[$13] = $11;
      
      
      
      
      if (HEAP[HEAP[$mod]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$mod] + 4] + 24];
      var $23 = HEAP[$mod];
      FUNCTION_TABLE[$22]($23);
      __label__ = 5;
      break;
     case 5:
      var $24 = HEAP[_cofunc_8401];
      HEAP[$0] = $24;
      __label__ = 6;
      break;
     case 6:
      var $25 = HEAP[$0];
      HEAP[$retval] = $25;
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
  function _getcodec($self, $encoding) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $encoding_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $codecobj = __stackBase__ + 16;
      var $r = __stackBase__ + 20;
      var $cofunc = __stackBase__ + 24;
      var $codec = __stackBase__ + 28;
      var $enc = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      HEAP[$encoding_addr] = $encoding;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$encoding_addr] + 4] + 84] & 134217728) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $8 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($8, __str2);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 2:
      var $9 = _getmultibytecodec();
      HEAP[$cofunc] = $9;
      
      
      if (HEAP[$cofunc] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 4:
      
      
      
      var $15 = HEAP[$encoding_addr] + 20;
      HEAP[$enc] = $15;
      var $16 = HEAP[_codec_list];
      HEAP[$codec] = $16;
      __label__ = 7;
      break;
     case 5:
      
      
      var $19 = HEAP[HEAP[$codec]];
      var $20 = HEAP[$enc];
      var $21 = _strcmp($19, $20);
      
      if ($21 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      var $24 = HEAP[$codec] + 36;
      HEAP[$codec] = $24;
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$codec]]] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$codec]]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $37 = HEAP[_PyExc_LookupError];
      _PyErr_SetString($37, __str3);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 10:
      
      var $39 = HEAP[$codec];
      var $40 = _PyCapsule_New($39, __str4, 0);
      HEAP[$codecobj] = $40;
      
      
      if (HEAP[$codecobj] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 12:
      var $43 = HEAP[$cofunc];
      var $44 = HEAP[$codecobj];
      var $45 = _PyObject_CallFunctionObjArgs($43, allocate([ $44, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$r] = $45;
      
      
      
      var $49 = HEAP[HEAP[$codecobj]] - 1;
      
      var $51 = HEAP[$codecobj];
      HEAP[$51] = $49;
      
      
      
      
      if (HEAP[HEAP[$codecobj]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[$codecobj] + 4] + 24];
      var $61 = HEAP[$codecobj];
      FUNCTION_TABLE[$60]($61);
      __label__ = 14;
      break;
     case 14:
      var $62 = HEAP[$r];
      HEAP[$0] = $62;
      __label__ = 15;
      break;
     case 15:
      var $63 = HEAP[$0];
      HEAP[$retval] = $63;
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
  function _register_maps($module) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 276;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 276);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $module_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $h = __stackBase__ + 12;
      var $mhname = __stackBase__ + 16;
      var $r = __stackBase__ + 272;
      
      HEAP[$module_addr] = $module;
      var $1 = HEAP[_mapping_list];
      HEAP[$h] = $1;
      __label__ = 4;
      break;
     case 1:
      var $mhname1 = $mhname;
      _llvm_memcpy_p0i8_p0i8_i32($mhname1, __str7, 256, 1, 0);
      
      
      var $4 = HEAP[HEAP[$h]];
      
      
      var $6 = $mhname + 7 + -1;
      var $7 = _strcpy($6, $4);
      
      var $9 = HEAP[$h];
      var $10 = _PyCapsule_New($9, __str4, 0);
      var $11 = HEAP[$module_addr];
      var $mhname3 = $mhname;
      var $12 = _PyModule_AddObject($11, $mhname3, $10);
      HEAP[$r] = $12;
      
      var $14 = HEAP[$r] == -1;
      if ($14) {
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
      
      var $16 = HEAP[$h] + 12;
      HEAP[$h] = $16;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$h]]] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 6:
      var $23 = HEAP[$0];
      HEAP[$retval] = $23;
      __label__ = 7;
      break;
     case 7:
      var $retval9 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _find_pairencmap($body, $modifier, $haystack, $haystacksize) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $body_addr = __stackBase__;
      var $modifier_addr = __stackBase__ + 2;
      var $haystack_addr = __stackBase__ + 4;
      var $haystacksize_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $pos = __stackBase__ + 20;
      var $min = __stackBase__ + 24;
      var $max = __stackBase__ + 28;
      var $value = __stackBase__ + 32;
      
      HEAP[$body_addr] = $body;
      HEAP[$modifier_addr] = $modifier;
      HEAP[$haystack_addr] = $haystack;
      HEAP[$haystacksize_addr] = $haystacksize;
      
      
      
      
      
      var $6 = HEAP[$body_addr] << 16 | HEAP[$modifier_addr];
      HEAP[$value] = $6;
      HEAP[$min] = 0;
      var $7 = HEAP[$haystacksize_addr];
      HEAP[$max] = $7;
      
      var $9 = HEAP[$haystacksize_addr] >> 1;
      HEAP[$pos] = $9;
      __label__ = 8;
      break;
     case 1:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$haystack_addr] + 8 * HEAP[$pos]] > HEAP[$value]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      if (HEAP[$max] == HEAP[$pos]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $20 = HEAP[$pos];
      HEAP[$max] = $20;
      __label__ = 7;
      break;
     case 4:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$haystack_addr] + 8 * HEAP[$pos]] < HEAP[$value]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      
      
      if (HEAP[$min] == HEAP[$pos]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $31 = HEAP[$pos];
      HEAP[$min] = $31;
      __label__ = 7;
      break;
     case 7:
      
      
      
      var $35 = HEAP[$min] + HEAP[$max] >> 1;
      HEAP[$pos] = $35;
      __label__ = 8;
      break;
     case 8:
      
      
      
      if (HEAP[$min] != HEAP[$max]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$haystack_addr] + 8 * HEAP[$pos]] == HEAP[$value]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      var $51 = HEAP[HEAP[$haystack_addr] + 8 * HEAP[$pos] + 4];
      HEAP[$0] = $51;
      __label__ = 12;
      break;
     case 11:
      HEAP[$0] = 65533;
      __label__ = 12;
      break;
     case 12:
      var $52 = HEAP[$0];
      HEAP[$retval] = $52;
      __label__ = 13;
      break;
     case 13:
      
      var $retval1213 = HEAP[$retval] & 65535;
      STACKTOP = __stackBase__;
      return $retval1213;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _importmap($modname, $symbol, $encmap, $decmap) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $modname_addr = __stackBase__;
      var $symbol_addr = __stackBase__ + 4;
      var $encmap_addr = __stackBase__ + 8;
      var $decmap_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $o = __stackBase__ + 24;
      var $mod = __stackBase__ + 28;
      var $map = __stackBase__ + 32;
      
      HEAP[$modname_addr] = $modname;
      HEAP[$symbol_addr] = $symbol;
      HEAP[$encmap_addr] = $encmap;
      HEAP[$decmap_addr] = $decmap;
      var $1 = HEAP[$modname_addr];
      var $2 = _PyImport_ImportModule($1);
      HEAP[$mod] = $2;
      
      
      if (HEAP[$mod] == 0) {
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
      var $5 = HEAP[$mod];
      var $6 = HEAP[$symbol_addr];
      var $7 = _PyObject_GetAttrString($5, $6);
      HEAP[$o] = $7;
      
      
      if (HEAP[$o] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $10 = HEAP[$o];
      var $11 = _PyCapsule_IsValid($10, __str4);
      
      if ($11 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $13 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($13, __str8);
      __label__ = 14;
      break;
     case 5:
      var $14 = HEAP[$o];
      var $15 = _PyCapsule_GetPointer($14, __str4);
      var $16 = $15;
      HEAP[$map] = $16;
      
      
      if (HEAP[$encmap_addr] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $22 = HEAP[$encmap_addr];
      var $23 = HEAP[HEAP[$map] + 4];
      HEAP[$22] = $23;
      __label__ = 7;
      break;
     case 7:
      
      
      if (HEAP[$decmap_addr] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      var $29 = HEAP[$decmap_addr];
      var $30 = HEAP[HEAP[$map] + 8];
      HEAP[$29] = $30;
      __label__ = 9;
      break;
     case 9:
      
      
      
      var $34 = HEAP[HEAP[$o]] - 1;
      
      var $36 = HEAP[$o];
      HEAP[$36] = $34;
      
      
      
      
      if (HEAP[HEAP[$o]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $45 = HEAP[HEAP[HEAP[$o] + 4] + 24];
      var $46 = HEAP[$o];
      FUNCTION_TABLE[$45]($46);
      __label__ = 11;
      break;
     case 11:
      
      
      
      var $50 = HEAP[HEAP[$mod]] - 1;
      
      var $52 = HEAP[$mod];
      HEAP[$52] = $50;
      
      
      
      
      if (HEAP[HEAP[$mod]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $61 = HEAP[HEAP[HEAP[$mod] + 4] + 24];
      var $62 = HEAP[$mod];
      FUNCTION_TABLE[$61]($62);
      __label__ = 13;
      break;
     case 13:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 14:
      
      
      
      var $66 = HEAP[HEAP[$mod]] - 1;
      
      var $68 = HEAP[$mod];
      HEAP[$68] = $66;
      
      
      
      
      if (HEAP[HEAP[$mod]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $77 = HEAP[HEAP[HEAP[$mod] + 4] + 24];
      var $78 = HEAP[$mod];
      FUNCTION_TABLE[$77]($78);
      __label__ = 16;
      break;
     case 16:
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 17:
      var $79 = HEAP[$0];
      HEAP[$retval] = $79;
      __label__ = 18;
      break;
     case 18:
      var $retval16 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _iso2022_codec_init($config) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $config_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $desig = __stackBase__ + 12;
      
      HEAP[$config_addr] = $config;
      
      
      
      var $4 = HEAP[HEAP[$config_addr] + 4];
      HEAP[$desig] = $4;
      
      
      
      var $8 = HEAP[HEAP[$config_addr] + 4];
      HEAP[$desig] = $8;
      __label__ = 5;
      break;
     case 1:
      
      
      
      
      if (HEAP[HEAP[$desig] + 4] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      var $15 = HEAP[HEAP[$desig] + 4];
      var $16 = FUNCTION_TABLE[$15]();
      
      if ($16 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 7;
      break;
     case 4:
      
      var $19 = HEAP[$desig] + 16;
      HEAP[$desig] = $19;
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[HEAP[$desig]] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $24 = HEAP[$0];
      HEAP[$retval] = $24;
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
  function _iso2022_encode_init($state, $config) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr = __stackBase__;
      var $config_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$state_addr] = $state;
      HEAP[$config_addr] = $config;
      
      
      
      var $4 = HEAP[$state_addr] + 4;
      HEAP[$4] = 0;
      
      
      
      var $8 = HEAP[$state_addr];
      HEAP[$8] = 66;
      
      
      
      var $12 = HEAP[$state_addr] + 1;
      HEAP[$12] = 66;
      HEAP[$0] = 0;
      var $13 = HEAP[$0];
      HEAP[$retval] = $13;
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
  function _iso2022_encode_reset($state, $config, $outbuf, $outleft) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr = __stackBase__;
      var $config_addr = __stackBase__ + 4;
      var $outbuf_addr = __stackBase__ + 8;
      var $outleft_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      
      HEAP[$state_addr] = $state;
      HEAP[$config_addr] = $config;
      HEAP[$outbuf_addr] = $outbuf;
      HEAP[$outleft_addr] = $outleft;
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$state_addr] + 4] & 1 & 255) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      if (HEAP[$outleft_addr] <= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = -1;
      __label__ = 9;
      break;
     case 3:
      
      
      var $13 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$13] = 15;
      
      
      var $16 = HEAP[HEAP[$outbuf_addr]] + 1;
      var $17 = HEAP[$outbuf_addr];
      HEAP[$17] = $16;
      
      var $19 = HEAP[$outleft_addr] - 1;
      HEAP[$outleft_addr] = $19;
      
      
      
      
      
      var $25 = HEAP[HEAP[$state_addr] + 4] & -2;
      
      
      
      var $29 = HEAP[$state_addr] + 4;
      HEAP[$29] = $25;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      
      if (HEAP[HEAP[$state_addr]] != 66) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      if (HEAP[$outleft_addr] <= 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = -1;
      __label__ = 9;
      break;
     case 7:
      
      
      var $40 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$40] = 27;
      
      
      var $43 = HEAP[HEAP[$outbuf_addr]] + 1;
      HEAP[$43] = 40;
      
      
      var $46 = HEAP[HEAP[$outbuf_addr]] + 2;
      HEAP[$46] = 66;
      
      
      var $49 = HEAP[HEAP[$outbuf_addr]] + 3;
      var $50 = HEAP[$outbuf_addr];
      HEAP[$50] = $49;
      
      var $52 = HEAP[$outleft_addr] - 3;
      HEAP[$outleft_addr] = $52;
      
      
      
      var $56 = HEAP[$state_addr];
      HEAP[$56] = 66;
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 9:
      var $57 = HEAP[$0];
      HEAP[$retval] = $57;
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
  function _iso2022_encode($state, $config, $inbuf, $inleft, $outbuf, $outleft, $flags) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 66;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 66);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr = __stackBase__;
      var $config_addr = __stackBase__ + 4;
      var $inbuf_addr = __stackBase__ + 8;
      var $inleft_addr = __stackBase__ + 12;
      var $outbuf_addr = __stackBase__ + 16;
      var $outleft_addr = __stackBase__ + 20;
      var $flags_addr = __stackBase__ + 24;
      var $retval = __stackBase__ + 28;
      var $iftmp_13 = __stackBase__ + 32;
      var $0 = __stackBase__ + 36;
      var $dsg = __stackBase__ + 40;
      var $encoded = __stackBase__ + 44;
      var $c = __stackBase__ + 46;
      var $insize = __stackBase__ + 50;
      var $length = __stackBase__ + 54;
      var $u4in = __stackBase__ + 58;
      
      HEAP[$state_addr] = $state;
      HEAP[$config_addr] = $config;
      HEAP[$inbuf_addr] = $inbuf;
      HEAP[$inleft_addr] = $inleft;
      HEAP[$outbuf_addr] = $outbuf;
      HEAP[$outleft_addr] = $outleft;
      HEAP[$flags_addr] = $flags;
      __label__ = 82;
      break;
     case 1:
      
      
      
      var $4 = HEAP[HEAP[HEAP[$inbuf_addr]]];
      HEAP[$c] = $4;
      
      
      if (HEAP[$c] <= 127) {
        __label__ = 2;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 2:
      
      
      
      
      
      
      if (HEAP[HEAP[$state_addr]] != 66) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      if (HEAP[$outleft_addr] <= 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 5:
      
      
      var $17 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$17] = 27;
      
      
      var $20 = HEAP[HEAP[$outbuf_addr]] + 1;
      HEAP[$20] = 40;
      
      
      var $23 = HEAP[HEAP[$outbuf_addr]] + 2;
      HEAP[$23] = 66;
      
      
      
      var $27 = HEAP[$state_addr];
      HEAP[$27] = 66;
      
      
      var $30 = HEAP[HEAP[$outbuf_addr]] + 3;
      var $31 = HEAP[$outbuf_addr];
      HEAP[$31] = $30;
      
      var $33 = HEAP[$outleft_addr] - 3;
      HEAP[$outleft_addr] = $33;
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$state_addr] + 4] & 1 & 255) != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      if (HEAP[$outleft_addr] <= 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 9:
      
      
      var $46 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$46] = 15;
      
      
      
      
      
      var $52 = HEAP[HEAP[$state_addr] + 4] & -2;
      
      
      
      var $56 = HEAP[$state_addr] + 4;
      HEAP[$56] = $52;
      
      
      var $59 = HEAP[HEAP[$outbuf_addr]] + 1;
      var $60 = HEAP[$outbuf_addr];
      HEAP[$60] = $59;
      
      var $62 = HEAP[$outleft_addr] - 1;
      HEAP[$outleft_addr] = $62;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$outleft_addr] <= 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 12:
      
      
      
      var $68 = HEAP[$c] & 255;
      var $69 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$69] = $68;
      
      
      var $72 = HEAP[HEAP[$inbuf_addr]] + 2;
      var $73 = HEAP[$inbuf_addr];
      HEAP[$73] = $72;
      
      var $75 = HEAP[$inleft_addr] - 1;
      HEAP[$inleft_addr] = $75;
      
      
      var $78 = HEAP[HEAP[$outbuf_addr]] + 1;
      var $79 = HEAP[$outbuf_addr];
      HEAP[$79] = $78;
      
      var $81 = HEAP[$outleft_addr] - 1;
      HEAP[$outleft_addr] = $81;
      __label__ = 82;
      break;
     case 13:
      
      
      
      if (HEAP[$c] >>> 10 == 54) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      
      
      if (HEAP[$inleft_addr] <= 1) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$0] = -2;
      __label__ = 84;
      break;
     case 16:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 2] >>> 10 == 55) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      
      
      var $102 = (HEAP[$c] - 55296 << 10) + HEAP[HEAP[HEAP[$inbuf_addr]] + 2] + 9216;
      HEAP[$c] = $102;
      __label__ = 18;
      break;
     case 18:
      
      
      if (HEAP[$c] > 65535) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$iftmp_13] = 2;
      __label__ = 21;
      break;
     case 20:
      HEAP[$iftmp_13] = 1;
      __label__ = 21;
      break;
     case 21:
      var $105 = HEAP[$iftmp_13];
      HEAP[$insize] = $105;
      HEAP[$encoded] = -1;
      
      
      
      var $109 = HEAP[HEAP[$config_addr] + 4];
      HEAP[$dsg] = $109;
      __label__ = 36;
      break;
     case 22:
      HEAP[$length] = 1;
      
      
      var $112 = HEAP[HEAP[$dsg] + 12];
      var $113 = FUNCTION_TABLE[$112]($c, $length);
      HEAP[$encoded] = $113;
      
      var $115 = HEAP[$encoded] == -2;
      if ($115) {
        __label__ = 23;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 23:
      
      
      if (HEAP[$inleft_addr] <= 1) {
        __label__ = 24;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 24:
      
      
      
      if ((HEAP[$flags_addr] & 1) == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      HEAP[$0] = -2;
      __label__ = 84;
      break;
     case 26:
      HEAP[$length] = -1;
      __label__ = 28;
      break;
     case 27:
      HEAP[$length] = 2;
      __label__ = 28;
      break;
     case 28:
      
      
      if (HEAP[$length] == 2) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $127 = HEAP[HEAP[HEAP[$inbuf_addr]]];
      
      HEAP[$u4in] = $127;
      
      
      
      
      var $133 = HEAP[HEAP[HEAP[$inbuf_addr]] + 2];
      
      HEAP[$u4in + 4] = $133;
      
      
      var $137 = HEAP[HEAP[$dsg] + 12];
      var $u4in29 = $u4in;
      var $138 = FUNCTION_TABLE[$137]($u4in29, $length);
      HEAP[$encoded] = $138;
      __label__ = 31;
      break;
     case 30:
      
      
      var $141 = HEAP[HEAP[$dsg] + 12];
      var $142 = FUNCTION_TABLE[$141]($c, $length);
      HEAP[$encoded] = $142;
      __label__ = 31;
      break;
     case 31:
      
      var $144 = HEAP[$encoded] != -1;
      if ($144) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      var $145 = HEAP[$length];
      HEAP[$insize] = $145;
      __label__ = 37;
      break;
     case 33:
      __label__ = 35;
      break;
     case 34:
      
      var $147 = HEAP[$encoded] != -1;
      if ($147) {
        __label__ = 37;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      var $149 = HEAP[$dsg] + 16;
      HEAP[$dsg] = $149;
      __label__ = 36;
      break;
     case 36:
      
      
      
      
      if (HEAP[HEAP[$dsg]] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      
      
      if (HEAP[HEAP[$dsg]] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      HEAP[$0] = 1;
      __label__ = 84;
      break;
     case 39:
      
      
      
      
      if (HEAP[HEAP[$dsg] + 2] != 1) {
        __label__ = 40;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 40:
      
      
      
      
      if (HEAP[HEAP[$dsg] + 2] != 2) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      ___assert_fail(__str9, __str10, 219, ___PRETTY_FUNCTION___8664);
      throw "Reached an unreachable!";
     case 42:
      
      
      
      var $169 = HEAP[HEAP[$dsg] + 1];
      if ($169 == 0) {
        __label__ = 43;
        break;
      } else if ($169 == 1) {
        __label__ = 60;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 43:
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$state_addr] + 4] & 1 & 255) != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 44:
      
      
      if (HEAP[$outleft_addr] <= 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 46:
      
      
      var $182 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$182] = 15;
      
      
      
      
      
      var $188 = HEAP[HEAP[$state_addr] + 4] & -2;
      
      
      
      var $192 = HEAP[$state_addr] + 4;
      HEAP[$192] = $188;
      
      
      var $195 = HEAP[HEAP[$outbuf_addr]] + 1;
      var $196 = HEAP[$outbuf_addr];
      HEAP[$196] = $195;
      
      var $198 = HEAP[$outleft_addr] - 1;
      HEAP[$outleft_addr] = $198;
      __label__ = 47;
      break;
     case 47:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$state_addr]] != HEAP[HEAP[$dsg]]) {
        __label__ = 48;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 48:
      
      
      
      
      if (HEAP[HEAP[$dsg] + 2] == 1) {
        __label__ = 49;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 49:
      
      
      if (HEAP[$outleft_addr] <= 2) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 51:
      
      
      var $216 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$216] = 27;
      
      
      var $219 = HEAP[HEAP[$outbuf_addr]] + 1;
      HEAP[$219] = 40;
      
      
      
      
      
      var $225 = HEAP[HEAP[$dsg]] & 127;
      var $226 = HEAP[HEAP[$outbuf_addr]] + 2;
      HEAP[$226] = $225;
      
      
      var $229 = HEAP[HEAP[$dsg]];
      
      
      
      var $233 = HEAP[$state_addr];
      HEAP[$233] = $229;
      
      
      var $236 = HEAP[HEAP[$outbuf_addr]] + 3;
      var $237 = HEAP[$outbuf_addr];
      HEAP[$237] = $236;
      
      var $239 = HEAP[$outleft_addr] - 3;
      HEAP[$outleft_addr] = $239;
      __label__ = 59;
      break;
     case 52:
      
      
      
      var $243 = HEAP[HEAP[$dsg]] == -62;
      if ($243) {
        __label__ = 53;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 53:
      
      
      if (HEAP[$outleft_addr] <= 2) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 55:
      
      
      var $248 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$248] = 27;
      
      
      var $251 = HEAP[HEAP[$outbuf_addr]] + 1;
      HEAP[$251] = 36;
      
      
      
      
      
      var $257 = HEAP[HEAP[$dsg]] & 127;
      var $258 = HEAP[HEAP[$outbuf_addr]] + 2;
      HEAP[$258] = $257;
      
      
      var $261 = HEAP[HEAP[$dsg]];
      
      
      
      var $265 = HEAP[$state_addr];
      HEAP[$265] = $261;
      
      
      var $268 = HEAP[HEAP[$outbuf_addr]] + 3;
      var $269 = HEAP[$outbuf_addr];
      HEAP[$269] = $268;
      
      var $271 = HEAP[$outleft_addr] - 3;
      HEAP[$outleft_addr] = $271;
      __label__ = 59;
      break;
     case 56:
      
      
      if (HEAP[$outleft_addr] <= 3) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 58:
      
      
      var $276 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$276] = 27;
      
      
      var $279 = HEAP[HEAP[$outbuf_addr]] + 1;
      HEAP[$279] = 36;
      
      
      var $282 = HEAP[HEAP[$outbuf_addr]] + 2;
      HEAP[$282] = 40;
      
      
      
      
      
      var $288 = HEAP[HEAP[$dsg]] & 127;
      var $289 = HEAP[HEAP[$outbuf_addr]] + 3;
      HEAP[$289] = $288;
      
      
      var $292 = HEAP[HEAP[$dsg]];
      
      
      
      var $296 = HEAP[$state_addr];
      HEAP[$296] = $292;
      
      
      var $299 = HEAP[HEAP[$outbuf_addr]] + 4;
      var $300 = HEAP[$outbuf_addr];
      HEAP[$300] = $299;
      
      var $302 = HEAP[$outleft_addr] - 4;
      HEAP[$outleft_addr] = $302;
      __label__ = 59;
      break;
     case 59:
      __label__ = 74;
      break;
     case 60:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$state_addr] + 1] != HEAP[HEAP[$dsg]]) {
        __label__ = 61;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 61:
      
      
      
      
      if (HEAP[HEAP[$dsg] + 2] == 1) {
        __label__ = 62;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 62:
      
      
      if (HEAP[$outleft_addr] <= 2) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 64:
      
      
      var $320 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$320] = 27;
      
      
      var $323 = HEAP[HEAP[$outbuf_addr]] + 1;
      HEAP[$323] = 41;
      
      
      
      
      
      var $329 = HEAP[HEAP[$dsg]] & 127;
      var $330 = HEAP[HEAP[$outbuf_addr]] + 2;
      HEAP[$330] = $329;
      
      
      var $333 = HEAP[HEAP[$dsg]];
      
      
      
      var $337 = HEAP[$state_addr] + 1;
      HEAP[$337] = $333;
      
      
      var $340 = HEAP[HEAP[$outbuf_addr]] + 3;
      var $341 = HEAP[$outbuf_addr];
      HEAP[$341] = $340;
      
      var $343 = HEAP[$outleft_addr] - 3;
      HEAP[$outleft_addr] = $343;
      __label__ = 68;
      break;
     case 65:
      
      
      if (HEAP[$outleft_addr] <= 3) {
        __label__ = 66;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 66:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 67:
      
      
      var $348 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$348] = 27;
      
      
      var $351 = HEAP[HEAP[$outbuf_addr]] + 1;
      HEAP[$351] = 36;
      
      
      var $354 = HEAP[HEAP[$outbuf_addr]] + 2;
      HEAP[$354] = 41;
      
      
      
      
      
      var $360 = HEAP[HEAP[$dsg]] & 127;
      var $361 = HEAP[HEAP[$outbuf_addr]] + 3;
      HEAP[$361] = $360;
      
      
      var $364 = HEAP[HEAP[$dsg]];
      
      
      
      var $368 = HEAP[$state_addr] + 1;
      HEAP[$368] = $364;
      
      
      var $371 = HEAP[HEAP[$outbuf_addr]] + 4;
      var $372 = HEAP[$outbuf_addr];
      HEAP[$372] = $371;
      
      var $374 = HEAP[$outleft_addr] - 4;
      HEAP[$outleft_addr] = $374;
      __label__ = 68;
      break;
     case 68:
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$state_addr] + 4] & 1) == 0) {
        __label__ = 69;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 69:
      
      
      if (HEAP[$outleft_addr] <= 0) {
        __label__ = 70;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 70:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 71:
      
      
      var $387 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$387] = 14;
      
      
      
      
      
      var $393 = HEAP[HEAP[$state_addr] + 4] | 1;
      
      
      
      var $397 = HEAP[$state_addr] + 4;
      HEAP[$397] = $393;
      
      
      var $400 = HEAP[HEAP[$outbuf_addr]] + 1;
      var $401 = HEAP[$outbuf_addr];
      HEAP[$401] = $400;
      
      var $403 = HEAP[$outleft_addr] - 1;
      HEAP[$outleft_addr] = $403;
      __label__ = 72;
      break;
     case 72:
      __label__ = 74;
      break;
     case 73:
      HEAP[$0] = -3;
      __label__ = 84;
      break;
     case 74:
      
      
      
      
      if (HEAP[HEAP[$dsg] + 2] == 1) {
        __label__ = 75;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 75:
      
      
      if (HEAP[$outleft_addr] <= 0) {
        __label__ = 76;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 76:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 77:
      
      
      
      var $413 = HEAP[$encoded] & 255;
      var $414 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$414] = $413;
      
      
      var $417 = HEAP[HEAP[$outbuf_addr]] + 1;
      var $418 = HEAP[$outbuf_addr];
      HEAP[$418] = $417;
      
      var $420 = HEAP[$outleft_addr] - 1;
      HEAP[$outleft_addr] = $420;
      __label__ = 81;
      break;
     case 78:
      
      
      if (HEAP[$outleft_addr] <= 1) {
        __label__ = 79;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 79:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 80:
      
      
      
      
      var $427 = HEAP[$encoded] >>> 8 & 255;
      var $428 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$428] = $427;
      
      
      
      var $432 = HEAP[$encoded] & 255;
      var $433 = HEAP[HEAP[$outbuf_addr]] + 1;
      HEAP[$433] = $432;
      
      
      var $436 = HEAP[HEAP[$outbuf_addr]] + 2;
      var $437 = HEAP[$outbuf_addr];
      HEAP[$437] = $436;
      
      var $439 = HEAP[$outleft_addr] - 2;
      HEAP[$outleft_addr] = $439;
      __label__ = 81;
      break;
     case 81:
      
      
      
      var $443 = HEAP[HEAP[$inbuf_addr]] + 2 * HEAP[$insize];
      var $444 = HEAP[$inbuf_addr];
      HEAP[$444] = $443;
      
      
      var $447 = HEAP[$inleft_addr] - HEAP[$insize];
      HEAP[$inleft_addr] = $447;
      __label__ = 82;
      break;
     case 82:
      
      
      if (HEAP[$inleft_addr] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 83:
      HEAP[$0] = 0;
      __label__ = 84;
      break;
     case 84:
      var $450 = HEAP[$0];
      HEAP[$retval] = $450;
      __label__ = 85;
      break;
     case 85:
      var $retval86 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval86;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _iso2022_decode_init($state, $config) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr = __stackBase__;
      var $config_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$state_addr] = $state;
      HEAP[$config_addr] = $config;
      
      
      
      var $4 = HEAP[$state_addr] + 4;
      HEAP[$4] = 0;
      
      
      
      var $8 = HEAP[$state_addr];
      HEAP[$8] = 66;
      
      
      
      var $12 = HEAP[$state_addr] + 1;
      HEAP[$12] = 66;
      
      
      
      var $16 = HEAP[$state_addr] + 2;
      HEAP[$16] = 66;
      HEAP[$0] = 0;
      var $17 = HEAP[$0];
      HEAP[$retval] = $17;
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
  function _iso2022_decode_reset($state, $config) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr = __stackBase__;
      var $config_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$state_addr] = $state;
      HEAP[$config_addr] = $config;
      
      
      
      var $4 = HEAP[$state_addr];
      HEAP[$4] = 66;
      
      
      
      
      
      var $10 = HEAP[HEAP[$state_addr] + 4] & -2;
      
      
      
      var $14 = HEAP[$state_addr] + 4;
      HEAP[$14] = $10;
      HEAP[$0] = 0;
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
  function _iso2022processesc($config, $state, $inbuf, $inleft) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 38;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 38);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $config_addr = __stackBase__;
      var $state_addr = __stackBase__ + 4;
      var $inbuf_addr = __stackBase__ + 8;
      var $inleft_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $charset = __stackBase__ + 24;
      var $designation = __stackBase__ + 25;
      var $i = __stackBase__ + 26;
      var $esclen = __stackBase__ + 30;
      var $dsg = __stackBase__ + 34;
      
      HEAP[$config_addr] = $config;
      HEAP[$state_addr] = $state;
      HEAP[$inbuf_addr] = $inbuf;
      HEAP[$inleft_addr] = $inleft;
      HEAP[$i] = 1;
      __label__ = 13;
      break;
     case 1:
      
      
      
      
      if (HEAP[HEAP[$inleft_addr]] <= HEAP[$i]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = -2;
      __label__ = 51;
      break;
     case 3:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + HEAP[$i]] <= 64) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + HEAP[$i]] <= 90) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + HEAP[$i]] == 64) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $24 = HEAP[$i] + 1;
      HEAP[$esclen] = $24;
      __label__ = 14;
      break;
     case 7:
      
      
      
      
      
      
      if ((HEAP[HEAP[$config_addr]] & 4) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[$i] + 1 < HEAP[HEAP[$inleft_addr]]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + HEAP[$i]] == 38) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + (HEAP[$i] + 1)] == 64) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      var $50 = HEAP[$i] + 2;
      HEAP[$i] = $50;
      __label__ = 12;
      break;
     case 12:
      
      var $52 = HEAP[$i] + 1;
      HEAP[$i] = $52;
      __label__ = 13;
      break;
     case 13:
      
      
      if (HEAP[$i] <= 15) {
        __label__ = 1;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if (HEAP[$i] > 15) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$0] = 1;
      __label__ = 51;
      break;
     case 16:
      var $57 = HEAP[$esclen];
      if ($57 == 3) {
        __label__ = 17;
        break;
      } else if ($57 == 4) {
        __label__ = 28;
        break;
      } else if ($57 == 6) {
        __label__ = 36;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 17:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 1] == 36) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[$inbuf_addr]] + 2] | -128;
      HEAP[$charset] = $67;
      HEAP[$designation] = 0;
      __label__ = 27;
      break;
     case 19:
      
      
      
      var $71 = HEAP[HEAP[HEAP[$inbuf_addr]] + 2];
      HEAP[$charset] = $71;
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 1] == 40) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      HEAP[$designation] = 0;
      __label__ = 27;
      break;
     case 21:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 1] == 41) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      HEAP[$designation] = 1;
      __label__ = 27;
      break;
     case 23:
      
      
      
      
      
      
      if ((HEAP[HEAP[$config_addr]] & 2) == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 1] != 46) {
        __label__ = 26;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      HEAP[$designation] = 2;
      __label__ = 27;
      break;
     case 26:
      HEAP[$0] = 3;
      __label__ = 51;
      break;
     case 27:
      __label__ = 43;
      break;
     case 28:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 1] != 36) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      HEAP[$0] = 4;
      __label__ = 51;
      break;
     case 30:
      
      
      
      
      var $102 = HEAP[HEAP[HEAP[$inbuf_addr]] + 3] | -128;
      HEAP[$charset] = $102;
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 2] == 40) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      HEAP[$designation] = 0;
      __label__ = 35;
      break;
     case 32:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 2] == 41) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      HEAP[$designation] = 1;
      __label__ = 35;
      break;
     case 34:
      HEAP[$0] = 4;
      __label__ = 51;
      break;
     case 35:
      __label__ = 43;
      break;
     case 36:
      
      
      
      
      
      
      if ((HEAP[HEAP[$config_addr]] & 4) == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 3] != 27) {
        __label__ = 41;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 4] != 36) {
        __label__ = 41;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 5] != 66) {
        __label__ = 41;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      HEAP[$charset] = -62;
      HEAP[$designation] = 0;
      __label__ = 43;
      break;
     case 41:
      HEAP[$0] = 6;
      __label__ = 51;
      break;
     case 42:
      var $134 = HEAP[$esclen];
      HEAP[$0] = $134;
      __label__ = 51;
      break;
     case 43:
      
      
      if (HEAP[$charset] != 66) {
        __label__ = 44;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 44:
      
      
      
      var $140 = HEAP[HEAP[$config_addr] + 4];
      HEAP[$dsg] = $140;
      __label__ = 47;
      break;
     case 45:
      
      
      
      
      
      if (HEAP[HEAP[$dsg]] == HEAP[$charset]) {
        __label__ = 48;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 46:
      
      var $147 = HEAP[$dsg] + 16;
      HEAP[$dsg] = $147;
      __label__ = 47;
      break;
     case 47:
      
      
      
      
      if (HEAP[HEAP[$dsg]] != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      
      
      
      
      if (HEAP[HEAP[$dsg]] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      var $156 = HEAP[$esclen];
      HEAP[$0] = $156;
      __label__ = 51;
      break;
     case 50:
      
      
      
      
      
      var $162 = HEAP[$state_addr] + HEAP[$designation];
      var $163 = HEAP[$charset];
      HEAP[$162] = $163;
      
      
      
      var $167 = HEAP[HEAP[$inleft_addr]] - HEAP[$esclen];
      var $168 = HEAP[$inleft_addr];
      HEAP[$168] = $167;
      
      
      
      var $172 = HEAP[HEAP[$inbuf_addr]] + HEAP[$esclen];
      var $173 = HEAP[$inbuf_addr];
      HEAP[$173] = $172;
      HEAP[$0] = 0;
      __label__ = 51;
      break;
     case 51:
      var $174 = HEAP[$0];
      HEAP[$retval] = $174;
      __label__ = 52;
      break;
     case 52:
      var $retval51 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval51;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _iso2022processg2($config, $state, $inbuf, $inleft, $outbuf, $outleft) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $state_addr = __stackBase__ + 4;
      var $inbuf_addr = __stackBase__ + 8;
      var $inleft_addr = __stackBase__ + 12;
      var $outbuf_addr = __stackBase__ + 16;
      var $outleft_addr = __stackBase__ + 20;
      var $retval = __stackBase__ + 24;
      var $0 = __stackBase__ + 28;
      
      HEAP[__stackBase__] = $config;
      HEAP[$state_addr] = $state;
      HEAP[$inbuf_addr] = $inbuf;
      HEAP[$inleft_addr] = $inleft;
      HEAP[$outbuf_addr] = $outbuf;
      HEAP[$outleft_addr] = $outleft;
      
      
      
      
      
      
      if (HEAP[HEAP[$state_addr] + 2] == 65) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 2] >= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      var $19 = HEAP[HEAP[HEAP[$inbuf_addr]] + 2] + 128;
      var $20 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$20] = $19;
      __label__ = 28;
      break;
     case 3:
      HEAP[$0] = 3;
      __label__ = 29;
      break;
     case 4:
      
      
      
      
      
      
      if (HEAP[HEAP[$state_addr] + 2] == 70) {
        __label__ = 5;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 5:
      
      
      
      
      var $31 = HEAP[HEAP[HEAP[$inbuf_addr]] + 2] ^ -128;
      
      if ($31 <= 159) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $34 = HEAP[HEAP[$outbuf_addr]];
      
      
      
      
      var $39 = HEAP[HEAP[HEAP[$inbuf_addr]] + 2] ^ -128;
      var $40 = $39;
      HEAP[$34] = $40;
      __label__ = 22;
      break;
     case 7:
      
      
      
      
      var $45 = HEAP[HEAP[HEAP[$inbuf_addr]] + 2] ^ -128;
      
      if ($45 > 191) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      var $51 = HEAP[HEAP[HEAP[$inbuf_addr]] + 2] ^ -128;
      
      
      
      
      
      
      
      
      
      if (((680475593 >> $51 - 160 & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      var $58 = HEAP[HEAP[$outbuf_addr]];
      
      
      
      
      var $63 = HEAP[HEAP[HEAP[$inbuf_addr]] + 2] ^ -128;
      var $64 = $63;
      HEAP[$58] = $64;
      __label__ = 22;
      break;
     case 10:
      
      
      
      
      var $69 = HEAP[HEAP[HEAP[$inbuf_addr]] + 2] ^ -128;
      
      if ($69 <= 179) {
        __label__ = 15;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 2] == 127) {
        __label__ = 15;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      var $80 = HEAP[HEAP[HEAP[$inbuf_addr]] + 2] ^ -128;
      
      if ($80 > 211) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      var $86 = HEAP[HEAP[HEAP[$inbuf_addr]] + 2] ^ -128;
      
      
      
      var $90 = 1 << $86 - 180 & -1073742473;
      
      if ($90 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      var $93 = HEAP[HEAP[$outbuf_addr]];
      
      
      
      
      var $98 = HEAP[HEAP[HEAP[$inbuf_addr]] + 2] ^ -128;
      
      var $100 = $98 + 720;
      HEAP[$93] = $100;
      __label__ = 22;
      break;
     case 15:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 2] == 33) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      var $107 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$107] = 8216;
      __label__ = 22;
      break;
     case 17:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 2] == 34) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      var $114 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$114] = 8217;
      __label__ = 22;
      break;
     case 19:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 2] == 47) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      var $121 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$121] = 8213;
      __label__ = 22;
      break;
     case 21:
      HEAP[$0] = 3;
      __label__ = 29;
      break;
     case 22:
      __label__ = 28;
      break;
     case 23:
      
      
      
      
      
      
      if (HEAP[HEAP[$state_addr] + 2] == 66) {
        __label__ = 24;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 24:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 2] < 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      HEAP[$0] = 3;
      __label__ = 29;
      break;
     case 26:
      
      var $134 = HEAP[HEAP[$outbuf_addr]];
      
      
      
      
      var $139 = HEAP[HEAP[HEAP[$inbuf_addr]] + 2];
      HEAP[$134] = $139;
      __label__ = 28;
      break;
     case 27:
      HEAP[$0] = -3;
      __label__ = 29;
      break;
     case 28:
      
      
      var $142 = HEAP[HEAP[$inbuf_addr]] + 3;
      var $143 = HEAP[$inbuf_addr];
      HEAP[$143] = $142;
      
      
      var $146 = HEAP[HEAP[$inleft_addr]] - 3;
      var $147 = HEAP[$inleft_addr];
      HEAP[$147] = $146;
      
      
      var $150 = HEAP[HEAP[$outbuf_addr]] + 2;
      var $151 = HEAP[$outbuf_addr];
      HEAP[$151] = $150;
      
      
      var $154 = HEAP[HEAP[$outleft_addr]] - 1;
      var $155 = HEAP[$outleft_addr];
      HEAP[$155] = $154;
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 29:
      var $156 = HEAP[$0];
      HEAP[$retval] = $156;
      __label__ = 30;
      break;
     case 30:
      var $retval32 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval32;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _iso2022_decode($state, $config, $inbuf, $inleft, $outbuf, $outleft) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 50;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 50);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr = __stackBase__;
      var $config_addr = __stackBase__ + 4;
      var $inbuf_addr = __stackBase__ + 8;
      var $inleft_addr = __stackBase__ + 12;
      var $outbuf_addr = __stackBase__ + 16;
      var $outleft_addr = __stackBase__ + 20;
      var $retval = __stackBase__ + 24;
      var $0 = __stackBase__ + 28;
      var $dsgcache = __stackBase__ + 32;
      var $c = __stackBase__ + 36;
      var $err = __stackBase__ + 37;
      var $dsg = __stackBase__ + 41;
      var $charset = __stackBase__ + 45;
      var $decoded = __stackBase__ + 46;
      
      HEAP[$state_addr] = $state;
      HEAP[$config_addr] = $config;
      HEAP[$inbuf_addr] = $inbuf;
      HEAP[$inleft_addr] = $inleft;
      HEAP[$outbuf_addr] = $outbuf;
      HEAP[$outleft_addr] = $outleft;
      HEAP[$dsgcache] = 0;
      __label__ = 73;
      break;
     case 1:
      
      
      
      var $4 = HEAP[HEAP[HEAP[$inbuf_addr]]];
      HEAP[$c] = $4;
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$state_addr] + 4] & 2) != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 2:
      
      
      if (HEAP[$outleft_addr] <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 75;
      break;
     case 4:
      
      
      
      var $18 = HEAP[$c];
      var $19 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$19] = $18;
      
      
      var $22 = HEAP[HEAP[$inbuf_addr]] + 1;
      var $23 = HEAP[$inbuf_addr];
      HEAP[$23] = $22;
      
      var $25 = HEAP[$inleft_addr] - 1;
      HEAP[$inleft_addr] = $25;
      
      
      var $28 = HEAP[HEAP[$outbuf_addr]] + 2;
      var $29 = HEAP[$outbuf_addr];
      HEAP[$29] = $28;
      
      var $31 = HEAP[$outleft_addr] - 1;
      HEAP[$outleft_addr] = $31;
      
      
      if (HEAP[$c] <= 64) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      if (HEAP[$c] <= 90) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if (HEAP[$c] == 64) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      var $43 = HEAP[HEAP[$state_addr] + 4] & -3;
      
      
      
      var $47 = HEAP[$state_addr] + 4;
      HEAP[$47] = $43;
      __label__ = 8;
      break;
     case 8:
      __label__ = 73;
      break;
     case 9:
      
      var $49 = HEAP[$c];
      if ($49 == 10) {
        __label__ = 35;
        break;
      } else if ($49 == 14) {
        __label__ = 33;
        break;
      } else if ($49 == 15) {
        __label__ = 31;
        break;
      } else if ($49 == 27) {
        __label__ = 10;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 10:
      
      
      if (HEAP[$inleft_addr] <= 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = -2;
      __label__ = 75;
      break;
     case 12:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 1] == 40) {
        __label__ = 17;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 1] == 41) {
        __label__ = 17;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 1] == 36) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 1] == 46) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 1] == 38) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      var $77 = HEAP[$config_addr];
      var $78 = HEAP[$state_addr];
      var $79 = HEAP[$inbuf_addr];
      var $80 = _iso2022processesc($77, $78, $79, $inleft_addr);
      HEAP[$err] = $80;
      
      
      if (HEAP[$err] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $83 = HEAP[$err];
      HEAP[$0] = $83;
      __label__ = 75;
      break;
     case 19:
      __label__ = 30;
      break;
     case 20:
      
      
      
      
      
      
      if ((HEAP[HEAP[$config_addr]] & 2) == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$inbuf_addr]] + 1] != 78) {
        __label__ = 27;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      if (HEAP[$inleft_addr] <= 2) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      HEAP[$0] = -2;
      __label__ = 75;
      break;
     case 24:
      var $97 = HEAP[$config_addr];
      var $98 = HEAP[$state_addr];
      var $99 = HEAP[$inbuf_addr];
      var $100 = HEAP[$outbuf_addr];
      var $101 = _iso2022processg2($97, $98, $99, $inleft_addr, $100, $outleft_addr);
      HEAP[$err] = $101;
      
      
      if (HEAP[$err] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $104 = HEAP[$err];
      HEAP[$0] = $104;
      __label__ = 75;
      break;
     case 26:
      __label__ = 30;
      break;
     case 27:
      
      
      if (HEAP[$outleft_addr] <= 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      HEAP[$0] = -1;
      __label__ = 75;
      break;
     case 29:
      
      
      var $109 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$109] = 27;
      
      
      
      
      
      var $115 = HEAP[HEAP[$state_addr] + 4] | 2;
      
      
      
      var $119 = HEAP[$state_addr] + 4;
      HEAP[$119] = $115;
      
      
      var $122 = HEAP[HEAP[$inbuf_addr]] + 1;
      var $123 = HEAP[$inbuf_addr];
      HEAP[$123] = $122;
      
      var $125 = HEAP[$inleft_addr] - 1;
      HEAP[$inleft_addr] = $125;
      
      
      var $128 = HEAP[HEAP[$outbuf_addr]] + 2;
      var $129 = HEAP[$outbuf_addr];
      HEAP[$129] = $128;
      
      var $131 = HEAP[$outleft_addr] - 1;
      HEAP[$outleft_addr] = $131;
      __label__ = 30;
      break;
     case 30:
      __label__ = 73;
      break;
     case 31:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$config_addr]] & 1 & 255) != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      
      
      
      var $143 = HEAP[HEAP[$state_addr] + 4] & -2;
      
      
      
      var $147 = HEAP[$state_addr] + 4;
      HEAP[$147] = $143;
      
      
      var $150 = HEAP[HEAP[$inbuf_addr]] + 1;
      var $151 = HEAP[$inbuf_addr];
      HEAP[$151] = $150;
      
      var $153 = HEAP[$inleft_addr] - 1;
      HEAP[$inleft_addr] = $153;
      __label__ = 73;
      break;
     case 33:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$config_addr]] & 1 & 255) != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      
      
      var $165 = HEAP[HEAP[$state_addr] + 4] | 1;
      
      
      
      var $169 = HEAP[$state_addr] + 4;
      HEAP[$169] = $165;
      
      
      var $172 = HEAP[HEAP[$inbuf_addr]] + 1;
      var $173 = HEAP[$inbuf_addr];
      HEAP[$173] = $172;
      
      var $175 = HEAP[$inleft_addr] - 1;
      HEAP[$inleft_addr] = $175;
      __label__ = 73;
      break;
     case 35:
      
      
      
      
      
      var $181 = HEAP[HEAP[$state_addr] + 4] & -2;
      
      
      
      var $185 = HEAP[$state_addr] + 4;
      HEAP[$185] = $181;
      
      
      if (HEAP[$outleft_addr] <= 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      HEAP[$0] = -1;
      __label__ = 75;
      break;
     case 37:
      
      
      var $190 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$190] = 10;
      
      
      var $193 = HEAP[HEAP[$inbuf_addr]] + 1;
      var $194 = HEAP[$inbuf_addr];
      HEAP[$194] = $193;
      
      var $196 = HEAP[$inleft_addr] - 1;
      HEAP[$inleft_addr] = $196;
      
      
      var $199 = HEAP[HEAP[$outbuf_addr]] + 2;
      var $200 = HEAP[$outbuf_addr];
      HEAP[$200] = $199;
      
      var $202 = HEAP[$outleft_addr] - 1;
      HEAP[$outleft_addr] = $202;
      __label__ = 73;
      break;
     case 38:
      
      
      if (HEAP[$c] <= 31) {
        __label__ = 45;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      
      if (HEAP[$c] < 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      HEAP[$0] = 1;
      __label__ = 75;
      break;
     case 41:
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$state_addr] + 4] & 1 & 255) != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $219 = HEAP[HEAP[$state_addr] + 1];
      HEAP[$charset] = $219;
      __label__ = 44;
      break;
     case 43:
      
      
      
      
      var $224 = HEAP[HEAP[$state_addr]];
      HEAP[$charset] = $224;
      __label__ = 44;
      break;
     case 44:
      
      
      if (HEAP[$charset] == 66) {
        __label__ = 45;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 45:
      
      
      if (HEAP[$outleft_addr] <= 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      HEAP[$0] = -1;
      __label__ = 75;
      break;
     case 47:
      
      
      
      var $232 = HEAP[$c];
      var $233 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$233] = $232;
      
      
      var $236 = HEAP[HEAP[$inbuf_addr]] + 1;
      var $237 = HEAP[$inbuf_addr];
      HEAP[$237] = $236;
      
      var $239 = HEAP[$inleft_addr] - 1;
      HEAP[$inleft_addr] = $239;
      
      
      var $242 = HEAP[HEAP[$outbuf_addr]] + 2;
      var $243 = HEAP[$outbuf_addr];
      HEAP[$243] = $242;
      
      var $245 = HEAP[$outleft_addr] - 1;
      HEAP[$outleft_addr] = $245;
      __label__ = 73;
      break;
     case 48:
      
      
      
      if (HEAP[$dsgcache] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 49:
      
      
      
      
      
      if (HEAP[HEAP[$dsgcache]] != HEAP[$charset]) {
        __label__ = 51;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 50:
      var $254 = HEAP[$dsgcache];
      HEAP[$dsg] = $254;
      __label__ = 57;
      break;
     case 51:
      
      
      
      var $258 = HEAP[HEAP[$config_addr] + 4];
      HEAP[$dsg] = $258;
      __label__ = 53;
      break;
     case 52:
      
      var $260 = HEAP[$dsg] + 16;
      HEAP[$dsg] = $260;
      __label__ = 53;
      break;
     case 53:
      
      
      
      
      
      if (HEAP[HEAP[$dsg]] != HEAP[$charset]) {
        __label__ = 52;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 54:
      
      
      
      
      if (HEAP[HEAP[$dsg]] == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      ___assert_fail(__str11, __str10, 511, ___PRETTY_FUNCTION___9190);
      throw "Reached an unreachable!";
     case 56:
      var $270 = HEAP[$dsg];
      HEAP[$dsgcache] = $270;
      __label__ = 57;
      break;
     case 57:
      
      
      
      
      
      
      if (HEAP[HEAP[$dsg] + 2] > HEAP[$inleft_addr]) {
        __label__ = 58;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 58:
      HEAP[$0] = -2;
      __label__ = 75;
      break;
     case 59:
      
      
      var $279 = HEAP[HEAP[$dsg] + 8];
      
      var $281 = HEAP[HEAP[$inbuf_addr]];
      var $282 = FUNCTION_TABLE[$279]($281);
      HEAP[$decoded] = $282;
      
      
      if (HEAP[$decoded] == 65535) {
        __label__ = 60;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 60:
      
      
      
      var $288 = HEAP[HEAP[$dsg] + 2];
      HEAP[$0] = $288;
      __label__ = 75;
      break;
     case 61:
      
      
      if (HEAP[$decoded] <= 65535) {
        __label__ = 62;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 62:
      
      
      if (HEAP[$outleft_addr] <= 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      HEAP[$0] = -1;
      __label__ = 75;
      break;
     case 64:
      
      
      
      var $296 = HEAP[$decoded] & 65535;
      var $297 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$297] = $296;
      
      
      var $300 = HEAP[HEAP[$outbuf_addr]] + 2;
      var $301 = HEAP[$outbuf_addr];
      HEAP[$301] = $300;
      
      var $303 = HEAP[$outleft_addr] - 1;
      HEAP[$outleft_addr] = $303;
      __label__ = 72;
      break;
     case 65:
      
      
      if (HEAP[$decoded] <= 196607) {
        __label__ = 66;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 66:
      
      
      if (HEAP[$outleft_addr] <= 1) {
        __label__ = 67;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 67:
      HEAP[$0] = -1;
      __label__ = 75;
      break;
     case 68:
      
      
      
      
      
      
      var $314 = (HEAP[$decoded] - 65536 >>> 10 & 65535) + -10240;
      var $315 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$315] = $314;
      
      
      
      
      
      var $321 = (HEAP[$decoded] & 65535 & 1023) + -9216;
      var $322 = HEAP[HEAP[$outbuf_addr]] + 2;
      HEAP[$322] = $321;
      
      
      var $325 = HEAP[HEAP[$outbuf_addr]] + 4;
      var $326 = HEAP[$outbuf_addr];
      HEAP[$326] = $325;
      
      var $328 = HEAP[$outleft_addr] - 2;
      HEAP[$outleft_addr] = $328;
      __label__ = 72;
      break;
     case 69:
      
      
      if (HEAP[$outleft_addr] <= 1) {
        __label__ = 70;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 70:
      HEAP[$0] = -1;
      __label__ = 75;
      break;
     case 71:
      
      
      
      
      var $335 = HEAP[$decoded] >>> 16 & 65535;
      var $336 = HEAP[HEAP[$outbuf_addr]];
      HEAP[$336] = $335;
      
      
      
      var $340 = HEAP[$decoded] & 65535;
      var $341 = HEAP[HEAP[$outbuf_addr]] + 2;
      HEAP[$341] = $340;
      
      
      var $344 = HEAP[HEAP[$outbuf_addr]] + 4;
      var $345 = HEAP[$outbuf_addr];
      HEAP[$345] = $344;
      
      var $347 = HEAP[$outleft_addr] - 2;
      HEAP[$outleft_addr] = $347;
      __label__ = 72;
      break;
     case 72:
      
      
      
      
      
      
      var $354 = HEAP[HEAP[$inbuf_addr]] + HEAP[HEAP[$dsg] + 2];
      var $355 = HEAP[$inbuf_addr];
      HEAP[$355] = $354;
      
      
      
      
      
      var $361 = HEAP[$inleft_addr] - HEAP[HEAP[$dsg] + 2];
      HEAP[$inleft_addr] = $361;
      __label__ = 73;
      break;
     case 73:
      
      
      if (HEAP[$inleft_addr] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 74:
      HEAP[$0] = 0;
      __label__ = 75;
      break;
     case 75:
      var $364 = HEAP[$0];
      HEAP[$retval] = $364;
      __label__ = 76;
      break;
     case 76:
      var $retval76 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval76;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ksx1001_init() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval = __stackBase__;
      var $0 = __stackBase__ + 4;
      
      
      
      if (HEAP[_initialized_9425] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $3 = _importmap(__str12, __str13, _cp949_encmap, 0);
      
      if ($3 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $5 = _importmap(__str12, __str14, 0, _ksx1001_decmap);
      
      if ($5 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 4:
      HEAP[_initialized_9425] = 1;
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $7 = HEAP[$0];
      HEAP[$retval] = $7;
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
  function _ksx1001_decoder($data) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $u = __stackBase__ + 12;
      
      HEAP[$data_addr] = $data;
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_ksx1001_decmap] + 8 * HEAP[HEAP[$data_addr]]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] < HEAP[HEAP[_ksx1001_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] > HEAP[HEAP[_ksx1001_decmap] + 8 * HEAP[HEAP[$data_addr]] + 5]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $59 = HEAP[HEAP[HEAP[_ksx1001_decmap] + 8 * HEAP[HEAP[$data_addr]]] + 2 * (HEAP[HEAP[$data_addr] + 1] - HEAP[HEAP[_ksx1001_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4])];
      HEAP[$u] = $59;
      
      
      if (HEAP[$u] == 65534) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $62 = HEAP[$u];
      HEAP[$0] = $62;
      __label__ = 6;
      break;
     case 5:
      HEAP[$0] = 65535;
      __label__ = 6;
      break;
     case 6:
      var $63 = HEAP[$0];
      HEAP[$retval] = $63;
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
  function _ksx1001_encoder($data, $length) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 18;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $length_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $coded = __stackBase__ + 16;
      
      HEAP[$data_addr] = $data;
      HEAP[$length_addr] = $length;
      
      
      
      if (HEAP[HEAP[$length_addr]] != 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str15, __str10, 594, ___PRETTY_FUNCTION___9487);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      if (HEAP[HEAP[$data_addr]] <= 65535) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_cp949_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8)] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$data_addr]] & 255) >= HEAP[HEAP[_cp949_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8) + 4]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$data_addr]] & 255) <= HEAP[HEAP[_cp949_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8) + 5]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[_cp949_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8)] + 2 * ((HEAP[HEAP[$data_addr]] & 255) - HEAP[HEAP[_cp949_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8) + 4])];
      HEAP[$coded] = $60;
      
      var $62 = HEAP[$coded] != -1;
      if ($62) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      if (HEAP[$coded] >= 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $66 = HEAP[$coded];
      HEAP[$0] = $66;
      __label__ = 10;
      break;
     case 9:
      HEAP[$0] = 65535;
      __label__ = 10;
      break;
     case 10:
      var $67 = HEAP[$0];
      HEAP[$retval] = $67;
      __label__ = 11;
      break;
     case 11:
      
      var $retval1011 = HEAP[$retval] & 65535;
      STACKTOP = __stackBase__;
      return $retval1011;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0208_init() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval = __stackBase__;
      var $0 = __stackBase__ + 4;
      
      
      
      if (HEAP[_initialized_9546] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $3 = _importmap(__str16, __str17, _jisxcommon_encmap, 0);
      
      if ($3 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $5 = _importmap(__str16, __str18, 0, _jisx0208_decmap);
      
      if ($5 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 4:
      HEAP[_initialized_9546] = 1;
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $7 = HEAP[$0];
      HEAP[$retval] = $7;
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
  function _jisx0208_decoder($data) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $u = __stackBase__ + 12;
      
      HEAP[$data_addr] = $data;
      
      
      
      
      if (HEAP[HEAP[$data_addr]] != 33) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] != 64) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[$0] = 65340;
      __label__ = 9;
      break;
     case 3:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[HEAP[$data_addr]]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] < HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] > HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[HEAP[$data_addr]] + 5]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[HEAP[$data_addr]]] + 2 * (HEAP[HEAP[$data_addr] + 1] - HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4])];
      HEAP[$u] = $67;
      
      
      if (HEAP[$u] == 65534) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $70 = HEAP[$u];
      HEAP[$0] = $70;
      __label__ = 9;
      break;
     case 8:
      HEAP[$0] = 65535;
      __label__ = 9;
      break;
     case 9:
      var $71 = HEAP[$0];
      HEAP[$retval] = $71;
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
  function _jisx0208_encoder($data, $length) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 18;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $length_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $coded = __stackBase__ + 16;
      
      HEAP[$data_addr] = $data;
      HEAP[$length_addr] = $length;
      
      
      
      if (HEAP[HEAP[$length_addr]] != 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str15, __str10, 632, ___PRETTY_FUNCTION___9613);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      if (HEAP[HEAP[$data_addr]] <= 65535) {
        __label__ = 3;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 3:
      
      
      
      if (HEAP[HEAP[$data_addr]] == 65340) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 8512;
      __label__ = 12;
      break;
     case 5:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8)] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$data_addr]] & 255) >= HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8) + 4]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$data_addr]] & 255) <= HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8) + 5]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $63 = HEAP[HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8)] + 2 * ((HEAP[HEAP[$data_addr]] & 255) - HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8) + 4])];
      HEAP[$coded] = $63;
      
      var $65 = HEAP[$coded] != -1;
      if ($65) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      if (HEAP[$coded] >= 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $69 = HEAP[$coded];
      HEAP[$0] = $69;
      __label__ = 12;
      break;
     case 11:
      HEAP[$0] = 65535;
      __label__ = 12;
      break;
     case 12:
      var $70 = HEAP[$0];
      HEAP[$retval] = $70;
      __label__ = 13;
      break;
     case 13:
      
      var $retval1213 = HEAP[$retval] & 65535;
      STACKTOP = __stackBase__;
      return $retval1213;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0212_init() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval = __stackBase__;
      var $0 = __stackBase__ + 4;
      
      
      
      if (HEAP[_initialized_9675] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $3 = _importmap(__str16, __str17, _jisxcommon_encmap, 0);
      
      if ($3 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $5 = _importmap(__str16, __str19, 0, _jisx0212_decmap);
      
      if ($5 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 4:
      HEAP[_initialized_9675] = 1;
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $7 = HEAP[$0];
      HEAP[$retval] = $7;
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
  function _jisx0212_decoder($data) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $u = __stackBase__ + 12;
      
      HEAP[$data_addr] = $data;
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0212_decmap] + 8 * HEAP[HEAP[$data_addr]]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] < HEAP[HEAP[_jisx0212_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] > HEAP[HEAP[_jisx0212_decmap] + 8 * HEAP[HEAP[$data_addr]] + 5]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $59 = HEAP[HEAP[HEAP[_jisx0212_decmap] + 8 * HEAP[HEAP[$data_addr]]] + 2 * (HEAP[HEAP[$data_addr] + 1] - HEAP[HEAP[_jisx0212_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4])];
      HEAP[$u] = $59;
      
      
      if (HEAP[$u] == 65534) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $62 = HEAP[$u];
      HEAP[$0] = $62;
      __label__ = 6;
      break;
     case 5:
      HEAP[$0] = 65535;
      __label__ = 6;
      break;
     case 6:
      var $63 = HEAP[$0];
      HEAP[$retval] = $63;
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
  function _jisx0212_encoder($data, $length) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 18;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $length_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $coded = __stackBase__ + 16;
      
      HEAP[$data_addr] = $data;
      HEAP[$length_addr] = $length;
      
      
      
      if (HEAP[HEAP[$length_addr]] != 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str15, __str10, 671, ___PRETTY_FUNCTION___9737);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      if (HEAP[HEAP[$data_addr]] <= 65535) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8)] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$data_addr]] & 255) >= HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8) + 4]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$data_addr]] & 255) <= HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8) + 5]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8)] + 2 * ((HEAP[HEAP[$data_addr]] & 255) - HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8) + 4])];
      HEAP[$coded] = $60;
      
      var $62 = HEAP[$coded] != -1;
      if ($62) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      if (HEAP[$coded] < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      var $67 = HEAP[$coded] & 32767;
      HEAP[$0] = $67;
      __label__ = 10;
      break;
     case 9:
      HEAP[$0] = 65535;
      __label__ = 10;
      break;
     case 10:
      var $68 = HEAP[$0];
      HEAP[$retval] = $68;
      __label__ = 11;
      break;
     case 11:
      
      var $retval1011 = HEAP[$retval] & 65535;
      STACKTOP = __stackBase__;
      return $retval1011;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0213_init() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval = __stackBase__;
      var $0 = __stackBase__ + 4;
      
      
      
      if (HEAP[_initialized_9797] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      var $3 = _jisx0208_init();
      
      if ($3 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $5 = _importmap(__str16, __str20, _jisx0213_bmp_encmap, 0);
      
      if ($5 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $7 = _importmap(__str16, __str21, 0, _jisx0213_1_bmp_decmap);
      
      if ($7 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $9 = _importmap(__str16, __str22, 0, _jisx0213_2_bmp_decmap);
      
      if ($9 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $11 = _importmap(__str16, __str23, _jisx0213_emp_encmap, 0);
      
      if ($11 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $13 = _importmap(__str16, __str24, 0, _jisx0213_1_emp_decmap);
      
      if ($13 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $15 = _importmap(__str16, __str25, 0, _jisx0213_2_emp_decmap);
      
      if ($15 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $17 = _importmap(__str16, __str26, _jisx0213_pair_encmap, _jisx0213_pair_decmap);
      
      if ($17 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = -1;
      __label__ = 11;
      break;
     case 10:
      HEAP[_initialized_9797] = 1;
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 11:
      var $19 = HEAP[$0];
      HEAP[$retval] = $19;
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
  function _jisx0213_2000_1_decoder($data) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $u = __stackBase__ + 12;
      
      HEAP[$data_addr] = $data;
      
      
      
      
      if (HEAP[HEAP[$data_addr]] != 46) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] == 33) {
        __label__ = 20;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$data_addr]] != 47) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] == 126) {
        __label__ = 20;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[HEAP[$data_addr]] != 79) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] == 84) {
        __label__ = 20;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      if (HEAP[HEAP[$data_addr]] != 79) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] == 126) {
        __label__ = 20;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[HEAP[$data_addr]] != 116) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] == 39) {
        __label__ = 20;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      if (HEAP[HEAP[$data_addr]] != 126) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] == 122) {
        __label__ = 20;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      if (HEAP[HEAP[$data_addr]] != 126) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] == 123) {
        __label__ = 20;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      if (HEAP[HEAP[$data_addr]] != 126) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] == 124) {
        __label__ = 20;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      if (HEAP[HEAP[$data_addr]] != 126) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] == 125) {
        __label__ = 20;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      if (HEAP[HEAP[$data_addr]] != 126) {
        __label__ = 21;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] == 126) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      HEAP[$0] = 65535;
      __label__ = 46;
      break;
     case 21:
      
      
      
      
      if (HEAP[HEAP[$data_addr]] != 33) {
        __label__ = 24;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] != 64) {
        __label__ = 24;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      HEAP[$0] = 65340;
      __label__ = 46;
      break;
     case 24:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[HEAP[$data_addr]]] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] < HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4]) {
        __label__ = 29;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] > HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[HEAP[$data_addr]] + 5]) {
        __label__ = 29;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $147 = HEAP[HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[HEAP[$data_addr]]] + 2 * (HEAP[HEAP[$data_addr] + 1] - HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4])];
      HEAP[$u] = $147;
      
      
      if (HEAP[$u] == 65534) {
        __label__ = 29;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      __label__ = 45;
      break;
     case 29:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]]] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] < HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4]) {
        __label__ = 34;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] > HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 5]) {
        __label__ = 34;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $208 = HEAP[HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]]] + 2 * (HEAP[HEAP[$data_addr] + 1] - HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4])];
      HEAP[$u] = $208;
      
      
      if (HEAP[$u] == 65534) {
        __label__ = 34;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      __label__ = 45;
      break;
     case 34:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[HEAP[$data_addr]]] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] < HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4]) {
        __label__ = 39;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] > HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 5]) {
        __label__ = 39;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $269 = HEAP[HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[HEAP[$data_addr]]] + 2 * (HEAP[HEAP[$data_addr] + 1] - HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4])];
      HEAP[$u] = $269;
      
      
      if (HEAP[$u] == 65534) {
        __label__ = 39;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      
      var $273 = HEAP[$u] | 131072;
      HEAP[$u] = $273;
      __label__ = 45;
      break;
     case 39:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[HEAP[$data_addr]]] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] < HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4]) {
        __label__ = 44;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 41:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] > HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[HEAP[$data_addr]] + 5]) {
        __label__ = 44;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $331 = HEAP[HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[HEAP[$data_addr]]] + 4 * (HEAP[HEAP[$data_addr] + 1] - HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4])];
      HEAP[$u] = $331;
      
      
      if (HEAP[$u] == 65534) {
        __label__ = 44;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      __label__ = 45;
      break;
     case 44:
      HEAP[$0] = 65535;
      __label__ = 46;
      break;
     case 45:
      var $334 = HEAP[$u];
      HEAP[$0] = $334;
      __label__ = 46;
      break;
     case 46:
      var $335 = HEAP[$0];
      HEAP[$retval] = $335;
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
  function _jisx0213_2000_2_decoder($data) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $u = __stackBase__ + 12;
      
      HEAP[$data_addr] = $data;
      
      
      
      
      if (HEAP[HEAP[$data_addr]] == 125) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] == 59) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$u] = 39709;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] < HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] > HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 5]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]]] + 2 * (HEAP[HEAP[$data_addr] + 1] - HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4])];
      HEAP[$u] = $67;
      
      
      if (HEAP[$u] == 65534) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      __label__ = 14;
      break;
     case 8:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[HEAP[$data_addr]]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] < HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] > HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 5]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $128 = HEAP[HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[HEAP[$data_addr]]] + 2 * (HEAP[HEAP[$data_addr] + 1] - HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4])];
      HEAP[$u] = $128;
      
      
      if (HEAP[$u] == 65534) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      var $132 = HEAP[$u] | 131072;
      HEAP[$u] = $132;
      __label__ = 14;
      break;
     case 13:
      HEAP[$0] = 65535;
      __label__ = 15;
      break;
     case 14:
      var $133 = HEAP[$u];
      HEAP[$0] = $133;
      __label__ = 15;
      break;
     case 15:
      var $134 = HEAP[$0];
      HEAP[$retval] = $134;
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
  function _jisx0213_2004_1_decoder($data) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $u = __stackBase__ + 12;
      
      HEAP[$data_addr] = $data;
      
      
      
      
      if (HEAP[HEAP[$data_addr]] != 33) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] != 64) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[$0] = 65340;
      __label__ = 25;
      break;
     case 3:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[HEAP[$data_addr]]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] < HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] > HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[HEAP[$data_addr]] + 5]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[HEAP[$data_addr]]] + 2 * (HEAP[HEAP[$data_addr] + 1] - HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4])];
      HEAP[$u] = $67;
      
      
      if (HEAP[$u] == 65534) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      __label__ = 24;
      break;
     case 8:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] < HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] > HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 5]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $128 = HEAP[HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]]] + 2 * (HEAP[HEAP[$data_addr] + 1] - HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4])];
      HEAP[$u] = $128;
      
      
      if (HEAP[$u] == 65534) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      __label__ = 24;
      break;
     case 13:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[HEAP[$data_addr]]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] < HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] > HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 5]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $189 = HEAP[HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[HEAP[$data_addr]]] + 2 * (HEAP[HEAP[$data_addr] + 1] - HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4])];
      HEAP[$u] = $189;
      
      
      if (HEAP[$u] == 65534) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      var $193 = HEAP[$u] | 131072;
      HEAP[$u] = $193;
      __label__ = 24;
      break;
     case 18:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[HEAP[$data_addr]]] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] < HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] > HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[HEAP[$data_addr]] + 5]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $251 = HEAP[HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[HEAP[$data_addr]]] + 4 * (HEAP[HEAP[$data_addr] + 1] - HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4])];
      HEAP[$u] = $251;
      
      
      if (HEAP[$u] == 65534) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      __label__ = 24;
      break;
     case 23:
      HEAP[$0] = 65535;
      __label__ = 25;
      break;
     case 24:
      var $254 = HEAP[$u];
      HEAP[$0] = $254;
      __label__ = 25;
      break;
     case 25:
      var $255 = HEAP[$0];
      HEAP[$retval] = $255;
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
  function _jisx0213_2004_2_decoder($data) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $u = __stackBase__ + 12;
      
      HEAP[$data_addr] = $data;
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] < HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] > HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 5]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $59 = HEAP[HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]]] + 2 * (HEAP[HEAP[$data_addr] + 1] - HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4])];
      HEAP[$u] = $59;
      
      
      if (HEAP[$u] == 65534) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      __label__ = 11;
      break;
     case 5:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[HEAP[$data_addr]]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] < HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] > HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 5]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $120 = HEAP[HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[HEAP[$data_addr]]] + 2 * (HEAP[HEAP[$data_addr] + 1] - HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4])];
      HEAP[$u] = $120;
      
      
      if (HEAP[$u] == 65534) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      var $124 = HEAP[$u] | 131072;
      HEAP[$u] = $124;
      __label__ = 11;
      break;
     case 10:
      HEAP[$0] = 65535;
      __label__ = 12;
      break;
     case 11:
      var $125 = HEAP[$u];
      HEAP[$0] = $125;
      __label__ = 12;
      break;
     case 12:
      var $126 = HEAP[$0];
      HEAP[$retval] = $126;
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
  function _jisx0213_encoder($data, $length, $config) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 22;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 22);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $length_addr = __stackBase__ + 4;
      var $config_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $coded = __stackBase__ + 20;
      
      HEAP[$data_addr] = $data;
      HEAP[$length_addr] = $length;
      HEAP[$config_addr] = $config;
      
      var $2 = HEAP[HEAP[$length_addr]];
      if ($2 == -1) {
        __label__ = 48;
        break;
      } else if ($2 == 1) {
        __label__ = 1;
        break;
      } else if ($2 == 2) {
        __label__ = 43;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 1:
      
      
      
      if (HEAP[HEAP[$data_addr]] > 65535) {
        __label__ = 2;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$data_addr]] >>> 16 == 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 3:
      
      
      if (HEAP[$config_addr] != 2e3) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      if (HEAP[HEAP[$data_addr]] != 134047) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      HEAP[$0] = 65535;
      __label__ = 52;
      break;
     case 6:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_emp_encmap] + 8 * ((HEAP[HEAP[$data_addr]] & 65535) >>> 8)] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$data_addr]] & 255) >= HEAP[HEAP[_jisx0213_emp_encmap] + 8 * ((HEAP[HEAP[$data_addr]] & 65535) >>> 8) + 4]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$data_addr]] & 255) <= HEAP[HEAP[_jisx0213_emp_encmap] + 8 * ((HEAP[HEAP[$data_addr]] & 65535) >>> 8) + 5]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[_jisx0213_emp_encmap] + 8 * ((HEAP[HEAP[$data_addr]] & 65535) >>> 8)] + 2 * ((HEAP[HEAP[$data_addr]] & 255) - HEAP[HEAP[_jisx0213_emp_encmap] + 8 * ((HEAP[HEAP[$data_addr]] & 65535) >>> 8) + 4])];
      HEAP[$coded] = $73;
      
      var $75 = HEAP[$coded] != -1;
      if ($75) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $77 = HEAP[$coded];
      HEAP[$0] = $77;
      __label__ = 52;
      break;
     case 11:
      HEAP[$0] = 65535;
      __label__ = 52;
      break;
     case 12:
      
      
      if (HEAP[$config_addr] != 2e3) {
        __label__ = 24;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      if (HEAP[HEAP[$data_addr]] == 39708) {
        __label__ = 23;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      if (HEAP[HEAP[$data_addr]] == 20465) {
        __label__ = 23;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      if (HEAP[HEAP[$data_addr]] == 21085) {
        __label__ = 23;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      if (HEAP[HEAP[$data_addr]] == 21534) {
        __label__ = 23;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      if (HEAP[HEAP[$data_addr]] == 22099) {
        __label__ = 23;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      if (HEAP[HEAP[$data_addr]] == 23032) {
        __label__ = 23;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      if (HEAP[HEAP[$data_addr]] == 23643) {
        __label__ = 23;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      if (HEAP[HEAP[$data_addr]] == 24183) {
        __label__ = 23;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      if (HEAP[HEAP[$data_addr]] == 30246) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      if (HEAP[HEAP[$data_addr]] == 32363) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      HEAP[$0] = 65535;
      __label__ = 52;
      break;
     case 24:
      
      
      if (HEAP[$config_addr] != 2e3) {
        __label__ = 27;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      if (HEAP[HEAP[$data_addr]] != 39709) {
        __label__ = 27;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      HEAP[$coded] = -709;
      __label__ = 42;
      break;
     case 27:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_bmp_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8)] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$data_addr]] & 255) < HEAP[HEAP[_jisx0213_bmp_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8) + 4]) {
        __label__ = 34;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$data_addr]] & 255) > HEAP[HEAP[_jisx0213_bmp_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8) + 5]) {
        __label__ = 34;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $168 = HEAP[HEAP[HEAP[_jisx0213_bmp_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8)] + 2 * ((HEAP[HEAP[$data_addr]] & 255) - HEAP[HEAP[_jisx0213_bmp_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8) + 4])];
      HEAP[$coded] = $168;
      
      var $170 = HEAP[$coded] == -1;
      if ($170) {
        __label__ = 34;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      var $172 = HEAP[$coded] == -2;
      if ($172) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      HEAP[$0] = 65534;
      __label__ = 52;
      break;
     case 33:
      __label__ = 42;
      break;
     case 34:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8)] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$data_addr]] & 255) < HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8) + 4]) {
        __label__ = 41;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$data_addr]] & 255) > HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8) + 5]) {
        __label__ = 41;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $226 = HEAP[HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8)] + 2 * ((HEAP[HEAP[$data_addr]] & 255) - HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8) + 4])];
      HEAP[$coded] = $226;
      
      var $228 = HEAP[$coded] == -1;
      if ($228) {
        __label__ = 41;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      
      
      if (HEAP[$coded] < 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      HEAP[$0] = 65535;
      __label__ = 52;
      break;
     case 40:
      __label__ = 42;
      break;
     case 41:
      HEAP[$0] = 65535;
      __label__ = 52;
      break;
     case 42:
      
      var $232 = HEAP[$coded];
      HEAP[$0] = $232;
      __label__ = 52;
      break;
     case 43:
      var $233 = HEAP[_jisx0213_pair_encmap];
      
      
      
      
      
      
      
      
      
      
      var $244 = HEAP[HEAP[$data_addr]] & 65535 & 65535;
      var $245 = HEAP[HEAP[$data_addr] + 4] & 65535 & 65535;
      var $246 = _find_pairencmap($244, $245, $233, 46);
      HEAP[$coded] = $246;
      
      var $248 = HEAP[$coded] == -3;
      if ($248) {
        __label__ = 44;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 44:
      var $249 = HEAP[$length_addr];
      HEAP[$249] = 1;
      var $250 = HEAP[_jisx0213_pair_encmap];
      
      
      
      
      
      var $256 = HEAP[HEAP[$data_addr]] & 65535 & 65535;
      var $257 = _find_pairencmap($256, 0, $250, 46);
      HEAP[$coded] = $257;
      
      var $259 = HEAP[$coded] == -3;
      if ($259) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      HEAP[$0] = 65535;
      __label__ = 52;
      break;
     case 46:
      __label__ = 48;
      break;
     case 47:
      
      var $261 = HEAP[$coded];
      HEAP[$0] = $261;
      __label__ = 52;
      break;
     case 48:
      var $262 = HEAP[$length_addr];
      HEAP[$262] = 1;
      var $263 = HEAP[_jisx0213_pair_encmap];
      
      
      
      
      
      var $269 = HEAP[HEAP[$data_addr]] & 65535 & 65535;
      var $270 = _find_pairencmap($269, 0, $263, 46);
      HEAP[$coded] = $270;
      
      var $272 = HEAP[$coded] == -3;
      if ($272) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      HEAP[$0] = 65535;
      __label__ = 52;
      break;
     case 50:
      
      var $274 = HEAP[$coded];
      HEAP[$0] = $274;
      __label__ = 52;
      break;
     case 51:
      HEAP[$0] = 65535;
      __label__ = 52;
      break;
     case 52:
      var $275 = HEAP[$0];
      HEAP[$retval] = $275;
      __label__ = 53;
      break;
     case 53:
      
      var $retval5253 = HEAP[$retval] & 65535;
      STACKTOP = __stackBase__;
      return $retval5253;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0213_2000_1_encoder($data, $length) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 18;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $length_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $coded = __stackBase__ + 16;
      
      HEAP[$data_addr] = $data;
      HEAP[$length_addr] = $length;
      var $1 = HEAP[$data_addr];
      var $2 = HEAP[$length_addr];
      var $3 = _jisx0213_encoder($1, $2, 2e3);
      HEAP[$coded] = $3;
      
      var $5 = HEAP[$coded] == -1;
      if ($5) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$coded] == -2;
      if ($7) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $9 = HEAP[$coded];
      HEAP[$0] = $9;
      __label__ = 6;
      break;
     case 3:
      
      
      if (HEAP[$coded] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 65535;
      __label__ = 6;
      break;
     case 5:
      
      var $13 = HEAP[$coded];
      HEAP[$0] = $13;
      __label__ = 6;
      break;
     case 6:
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
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
  function _jisx0213_2000_1_encoder_paironly($data, $length) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 22;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 22);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $length_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $coded = __stackBase__ + 16;
      var $ilength = __stackBase__ + 18;
      
      HEAP[$data_addr] = $data;
      HEAP[$length_addr] = $length;
      
      var $2 = HEAP[HEAP[$length_addr]];
      HEAP[$ilength] = $2;
      var $3 = HEAP[$data_addr];
      var $4 = HEAP[$length_addr];
      var $5 = _jisx0213_encoder($3, $4, 2e3);
      HEAP[$coded] = $5;
      var $6 = HEAP[$ilength];
      if ($6 == 1) {
        __label__ = 1;
        break;
      } else if ($6 == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      var $8 = HEAP[$coded] == -2;
      if ($8) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 65534;
      __label__ = 8;
      break;
     case 3:
      HEAP[$0] = 65535;
      __label__ = 8;
      break;
     case 4:
      
      
      
      if (HEAP[HEAP[$length_addr]] != 2) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 65535;
      __label__ = 8;
      break;
     case 6:
      
      var $13 = HEAP[$coded];
      HEAP[$0] = $13;
      __label__ = 8;
      break;
     case 7:
      HEAP[$0] = 65535;
      __label__ = 8;
      break;
     case 8:
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
      __label__ = 9;
      break;
     case 9:
      
      var $retval89 = HEAP[$retval] & 65535;
      STACKTOP = __stackBase__;
      return $retval89;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0213_2000_2_encoder($data, $length) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 18;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $length_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $coded = __stackBase__ + 16;
      
      HEAP[$data_addr] = $data;
      HEAP[$length_addr] = $length;
      var $1 = HEAP[$data_addr];
      var $2 = HEAP[$length_addr];
      var $3 = _jisx0213_encoder($1, $2, 2e3);
      HEAP[$coded] = $3;
      
      var $5 = HEAP[$coded] == -1;
      if ($5) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$coded] == -2;
      if ($7) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $9 = HEAP[$coded];
      HEAP[$0] = $9;
      __label__ = 6;
      break;
     case 3:
      
      
      if (HEAP[$coded] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $14 = HEAP[$coded] & 32767;
      HEAP[$0] = $14;
      __label__ = 6;
      break;
     case 5:
      HEAP[$0] = 65535;
      __label__ = 6;
      break;
     case 6:
      var $15 = HEAP[$0];
      HEAP[$retval] = $15;
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
  function _jisx0213_2004_1_encoder($data, $length) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 18;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $length_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $coded = __stackBase__ + 16;
      
      HEAP[$data_addr] = $data;
      HEAP[$length_addr] = $length;
      var $1 = HEAP[$data_addr];
      var $2 = HEAP[$length_addr];
      var $3 = _jisx0213_encoder($1, $2, 0);
      HEAP[$coded] = $3;
      
      var $5 = HEAP[$coded] == -1;
      if ($5) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$coded] == -2;
      if ($7) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $9 = HEAP[$coded];
      HEAP[$0] = $9;
      __label__ = 6;
      break;
     case 3:
      
      
      if (HEAP[$coded] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 65535;
      __label__ = 6;
      break;
     case 5:
      
      var $13 = HEAP[$coded];
      HEAP[$0] = $13;
      __label__ = 6;
      break;
     case 6:
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
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
  function _jisx0213_2004_1_encoder_paironly($data, $length) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 22;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 22);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $length_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $coded = __stackBase__ + 16;
      var $ilength = __stackBase__ + 18;
      
      HEAP[$data_addr] = $data;
      HEAP[$length_addr] = $length;
      
      var $2 = HEAP[HEAP[$length_addr]];
      HEAP[$ilength] = $2;
      var $3 = HEAP[$data_addr];
      var $4 = HEAP[$length_addr];
      var $5 = _jisx0213_encoder($3, $4, 0);
      HEAP[$coded] = $5;
      var $6 = HEAP[$ilength];
      if ($6 == 1) {
        __label__ = 1;
        break;
      } else if ($6 == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      var $8 = HEAP[$coded] == -2;
      if ($8) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 65534;
      __label__ = 8;
      break;
     case 3:
      HEAP[$0] = 65535;
      __label__ = 8;
      break;
     case 4:
      
      
      
      if (HEAP[HEAP[$length_addr]] != 2) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 65535;
      __label__ = 8;
      break;
     case 6:
      
      var $13 = HEAP[$coded];
      HEAP[$0] = $13;
      __label__ = 8;
      break;
     case 7:
      HEAP[$0] = 65535;
      __label__ = 8;
      break;
     case 8:
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
      __label__ = 9;
      break;
     case 9:
      
      var $retval89 = HEAP[$retval] & 65535;
      STACKTOP = __stackBase__;
      return $retval89;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0213_2004_2_encoder($data, $length) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 18;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $length_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $coded = __stackBase__ + 16;
      
      HEAP[$data_addr] = $data;
      HEAP[$length_addr] = $length;
      var $1 = HEAP[$data_addr];
      var $2 = HEAP[$length_addr];
      var $3 = _jisx0213_encoder($1, $2, 0);
      HEAP[$coded] = $3;
      
      var $5 = HEAP[$coded] == -1;
      if ($5) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$coded] == -2;
      if ($7) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $9 = HEAP[$coded];
      HEAP[$0] = $9;
      __label__ = 6;
      break;
     case 3:
      
      
      if (HEAP[$coded] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $14 = HEAP[$coded] & 32767;
      HEAP[$0] = $14;
      __label__ = 6;
      break;
     case 5:
      HEAP[$0] = 65535;
      __label__ = 6;
      break;
     case 6:
      var $15 = HEAP[$0];
      HEAP[$retval] = $15;
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
  function _jisx0201_r_decoder($data) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $u = __stackBase__ + 12;
      
      HEAP[$data_addr] = $data;
      
      
      
      if (HEAP[HEAP[$data_addr]] <= 91) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[HEAP[$data_addr]];
      HEAP[$u] = $6;
      __label__ = 11;
      break;
     case 2:
      
      
      
      if (HEAP[HEAP[$data_addr]] == 92) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$u] = 165;
      __label__ = 11;
      break;
     case 4:
      
      
      
      if (HEAP[HEAP[$data_addr]] <= 125) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $15 = HEAP[HEAP[$data_addr]];
      HEAP[$u] = $15;
      __label__ = 11;
      break;
     case 6:
      
      
      
      if (HEAP[HEAP[$data_addr]] == 126) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$u] = 8254;
      __label__ = 11;
      break;
     case 8:
      
      
      
      if (HEAP[HEAP[$data_addr]] == 127) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$u] = 127;
      __label__ = 11;
      break;
     case 10:
      HEAP[$0] = 65535;
      __label__ = 12;
      break;
     case 11:
      var $22 = HEAP[$u];
      HEAP[$0] = $22;
      __label__ = 12;
      break;
     case 12:
      var $23 = HEAP[$0];
      HEAP[$retval] = $23;
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
  function _jisx0201_r_encoder($data, $length) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 18;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $length_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $coded = __stackBase__ + 16;
      
      HEAP[$data_addr] = $data;
      HEAP[$length_addr] = $length;
      
      
      
      if (HEAP[HEAP[$data_addr]] > 127) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      if (HEAP[HEAP[$data_addr]] == 92) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      if (HEAP[HEAP[$data_addr]] == 126) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $12 = HEAP[HEAP[$data_addr]] & 65535;
      HEAP[$coded] = $12;
      __label__ = 9;
      break;
     case 4:
      
      
      
      if (HEAP[HEAP[$data_addr]] == 165) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$coded] = 92;
      __label__ = 9;
      break;
     case 6:
      
      
      
      if (HEAP[HEAP[$data_addr]] == 8254) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$coded] = 126;
      __label__ = 9;
      break;
     case 8:
      HEAP[$0] = 65535;
      __label__ = 10;
      break;
     case 9:
      
      var $20 = HEAP[$coded];
      HEAP[$0] = $20;
      __label__ = 10;
      break;
     case 10:
      var $21 = HEAP[$0];
      HEAP[$retval] = $21;
      __label__ = 11;
      break;
     case 11:
      
      var $retval1011 = HEAP[$retval] & 65535;
      STACKTOP = __stackBase__;
      return $retval1011;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0201_k_decoder($data) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $u = __stackBase__ + 12;
      
      HEAP[$data_addr] = $data;
      
      
      var $3 = HEAP[HEAP[$data_addr]] ^ -128;
      
      if ($3 <= 160) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$data_addr]] ^ -128;
      
      if ($7 > 223) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $11 = HEAP[HEAP[$data_addr]] ^ -128;
      
      var $13 = $11 + 65216;
      HEAP[$u] = $13;
      var $14 = HEAP[$u];
      HEAP[$0] = $14;
      __label__ = 4;
      break;
     case 3:
      HEAP[$0] = 65535;
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
  function _jisx0201_k_encoder($data, $length) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 18;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $length_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $coded = __stackBase__ + 16;
      
      HEAP[$data_addr] = $data;
      HEAP[$length_addr] = $length;
      
      
      
      if (HEAP[HEAP[$data_addr]] <= 65376) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      if (HEAP[HEAP[$data_addr]] > 65439) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $10 = (HEAP[HEAP[$data_addr]] & 65535) - -320;
      HEAP[$coded] = $10;
      
      
      var $13 = HEAP[$coded] - 128;
      HEAP[$0] = $13;
      __label__ = 4;
      break;
     case 3:
      HEAP[$0] = 65535;
      __label__ = 4;
      break;
     case 4:
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
      __label__ = 5;
      break;
     case 5:
      
      var $retval45 = HEAP[$retval] & 65535;
      STACKTOP = __stackBase__;
      return $retval45;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _gb2312_init() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval = __stackBase__;
      var $0 = __stackBase__ + 4;
      
      
      
      if (HEAP[_initialized_10770] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $3 = _importmap(__str27, __str28, _gbcommon_encmap, 0);
      
      if ($3 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $5 = _importmap(__str27, __str29, 0, _gb2312_decmap);
      
      if ($5 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 4:
      HEAP[_initialized_10770] = 1;
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $7 = HEAP[$0];
      HEAP[$retval] = $7;
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
  function _gb2312_decoder($data) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $u = __stackBase__ + 12;
      
      HEAP[$data_addr] = $data;
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_gb2312_decmap] + 8 * HEAP[HEAP[$data_addr]]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] < HEAP[HEAP[_gb2312_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 1] > HEAP[HEAP[_gb2312_decmap] + 8 * HEAP[HEAP[$data_addr]] + 5]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $59 = HEAP[HEAP[HEAP[_gb2312_decmap] + 8 * HEAP[HEAP[$data_addr]]] + 2 * (HEAP[HEAP[$data_addr] + 1] - HEAP[HEAP[_gb2312_decmap] + 8 * HEAP[HEAP[$data_addr]] + 4])];
      HEAP[$u] = $59;
      
      
      if (HEAP[$u] == 65534) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $62 = HEAP[$u];
      HEAP[$0] = $62;
      __label__ = 6;
      break;
     case 5:
      HEAP[$0] = 65535;
      __label__ = 6;
      break;
     case 6:
      var $63 = HEAP[$0];
      HEAP[$retval] = $63;
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
  function _gb2312_encoder($data, $length) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 18;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr = __stackBase__;
      var $length_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $coded = __stackBase__ + 16;
      
      HEAP[$data_addr] = $data;
      HEAP[$length_addr] = $length;
      
      
      
      if (HEAP[HEAP[$length_addr]] != 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str15, __str10, 978, ___PRETTY_FUNCTION___10832);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      if (HEAP[HEAP[$data_addr]] <= 65535) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_gbcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8)] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$data_addr]] & 255) >= HEAP[HEAP[_gbcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8) + 4]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$data_addr]] & 255) <= HEAP[HEAP[_gbcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8) + 5]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[_gbcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8)] + 2 * ((HEAP[HEAP[$data_addr]] & 255) - HEAP[HEAP[_gbcommon_encmap] + 8 * (HEAP[HEAP[$data_addr]] >>> 8) + 4])];
      HEAP[$coded] = $60;
      
      var $62 = HEAP[$coded] != -1;
      if ($62) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      if (HEAP[$coded] >= 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $66 = HEAP[$coded];
      HEAP[$0] = $66;
      __label__ = 10;
      break;
     case 9:
      HEAP[$0] = 65535;
      __label__ = 10;
      break;
     case 10:
      var $67 = HEAP[$0];
      HEAP[$retval] = $67;
      __label__ = 11;
      break;
     case 11:
      
      var $retval1011 = HEAP[$retval] & 65535;
      STACKTOP = __stackBase__;
      return $retval1011;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dummy_decoder($data) {
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
      
      HEAP[__stackBase__] = $data;
      HEAP[$0] = 65535;
      var $1 = HEAP[$0];
      HEAP[$retval] = $1;
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
  function _dummy_encoder($data, $length) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $length_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $data;
      HEAP[$length_addr] = $length;
      HEAP[$0] = 65535;
      var $1 = HEAP[$0];
      HEAP[$retval] = $1;
      __label__ = 1;
      break;
     case 1:
      
      var $retval12 = HEAP[$retval] & 65535;
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _init_codecs_iso2022() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      
      var $0 = _Py_InitModule4(__str37, ___methods, 0, 0, 1013);
      HEAP[$m] = $0;
      
      
      if (HEAP[$m] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[$m];
      var $4 = _register_maps($3);
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
  Module["_init_codecs_iso2022"] = _init_codecs_iso2022;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _getcodec, 0, _ksx1001_init, 0, _ksx1001_decoder, 0, _ksx1001_encoder, 0, _jisx0208_init, 0, _jisx0208_decoder, 0, _jisx0208_encoder, 0, _jisx0201_r_decoder, 0, _jisx0201_r_encoder, 0, _jisx0212_init, 0, _jisx0212_decoder, 0, _jisx0212_encoder, 0, _gb2312_init, 0, _gb2312_decoder, 0, _gb2312_encoder, 0, _dummy_decoder, 0, _dummy_encoder, 0, _jisx0213_init, 0, _jisx0213_2004_1_decoder, 0, _jisx0213_2004_1_encoder_paironly, 0, _jisx0213_2004_1_encoder, 0, _jisx0213_2004_2_decoder, 0, _jisx0213_2004_2_encoder, 0, _jisx0213_2000_1_decoder, 0, _jisx0213_2000_1_encoder_paironly, 0, _jisx0213_2000_1_encoder, 0, _jisx0213_2000_2_decoder, 0, _jisx0213_2000_2_encoder, 0, _jisx0201_k_decoder, 0, _jisx0201_k_encoder, 0, _iso2022_codec_init, 0, _iso2022_encode, 0, _iso2022_encode_init, 0, _iso2022_encode_reset, 0, _iso2022_decode, 0, _iso2022_decode_init, 0, _iso2022_decode_reset, 0 ]);
  function run(args) {
    _cofunc_8401 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str = allocate([ 95, 109, 117, 108, 116, 105, 98, 121, 116, 101, 99, 111, 100, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 95, 95, 99, 114, 101, 97, 116, 101, 95, 99, 111, 100, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 101, 110, 99, 111, 100, 105, 110, 103, 32, 110, 97, 109, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    _codec_list = allocate(1, "%struct.MultibyteCodec*", ALLOC_NORMAL);
    __str3 = allocate([ 110, 111, 32, 115, 117, 99, 104, 32, 99, 111, 100, 101, 99, 32, 105, 115, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 109, 117, 108, 116, 105, 98, 121, 116, 101, 99, 111, 100, 101, 99, 46, 95, 95, 109, 97, 112, 95, 42, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 103, 101, 116, 99, 111, 100, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate(1, "i8", ALLOC_NORMAL);
    ___methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _mapping_list = allocate(1, "%struct.dbcs_map*", ALLOC_NORMAL);
    __str7 = allocate([ 95, 95, 109, 97, 112, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 109, 97, 112, 32, 100, 97, 116, 97, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 67, 97, 112, 115, 117, 108, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 100, 115, 103, 45, 62, 119, 105, 100, 116, 104, 32, 61, 61, 32, 49, 32, 124, 124, 32, 100, 115, 103, 45, 62, 119, 105, 100, 116, 104, 32, 61, 61, 32, 50, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 99, 106, 107, 99, 111, 100, 101, 99, 115, 47, 95, 99, 111, 100, 101, 99, 115, 95, 105, 115, 111, 50, 48, 50, 50, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8664 = allocate([ 105, 115, 111, 50, 48, 50, 50, 95, 101, 110, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 100, 115, 103, 45, 62, 109, 97, 114, 107, 32, 33, 61, 32, 39, 92, 48, 39, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9190 = allocate([ 105, 115, 111, 50, 48, 50, 50, 95, 100, 101, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    _cp949_encmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _ksx1001_decmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _jisxcommon_encmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _jisx0208_decmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _jisx0212_decmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _jisx0213_bmp_encmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _jisx0213_1_bmp_decmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _jisx0213_2_bmp_decmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _jisx0213_emp_encmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _jisx0213_1_emp_decmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _jisx0213_2_emp_decmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _gbcommon_encmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _gb2312_decmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _initialized_9425 = allocate(1, "i32", ALLOC_NORMAL);
    __str12 = allocate([ 95, 99, 111, 100, 101, 99, 115, 95, 107, 114, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 95, 95, 109, 97, 112, 95, 99, 112, 57, 52, 57, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 95, 95, 109, 97, 112, 95, 107, 115, 120, 49, 48, 48, 49, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 42, 108, 101, 110, 103, 116, 104, 32, 61, 61, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9487 = allocate([ 107, 115, 120, 49, 48, 48, 49, 95, 101, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _initialized_9546 = allocate(1, "i32", ALLOC_NORMAL);
    __str16 = allocate([ 95, 99, 111, 100, 101, 99, 115, 95, 106, 112, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 99, 111, 109, 109, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 48, 50, 48, 56, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9613 = allocate([ 106, 105, 115, 120, 48, 50, 48, 56, 95, 101, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _initialized_9675 = allocate(1, "i32", ALLOC_NORMAL);
    __str19 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 48, 50, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9737 = allocate([ 106, 105, 115, 120, 48, 50, 49, 50, 95, 101, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _initialized_9797 = allocate(1, "i32", ALLOC_NORMAL);
    __str20 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 48, 50, 49, 51, 95, 98, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 48, 50, 49, 51, 95, 49, 95, 98, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 48, 50, 49, 51, 95, 50, 95, 98, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 48, 50, 49, 51, 95, 101, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 48, 50, 49, 51, 95, 49, 95, 101, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 48, 50, 49, 51, 95, 50, 95, 101, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    _jisx0213_pair_decmap = allocate(1, "%struct.widedbcs_index*", ALLOC_NORMAL);
    _jisx0213_pair_encmap = allocate(1, "%struct.pair_encodemap*", ALLOC_NORMAL);
    __str26 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 48, 50, 49, 51, 95, 112, 97, 105, 114, 0 ], "i8", ALLOC_NORMAL);
    _initialized_10770 = allocate(1, "i32", ALLOC_NORMAL);
    __str27 = allocate([ 95, 99, 111, 100, 101, 99, 115, 95, 99, 110, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 95, 95, 109, 97, 112, 95, 103, 98, 99, 111, 109, 109, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 95, 95, 109, 97, 112, 95, 103, 98, 50, 51, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10832 = allocate([ 103, 98, 50, 51, 49, 50, 95, 101, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _iso2022_kr_designations = allocate([ -61, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _iso2022_kr_config = allocate(8, [ "i32", 0, 0, 0, "%struct.iso2022_designation*", 0, 0, 0 ], ALLOC_NORMAL);
    _iso2022_jp_designations = allocate([ -62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -64, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _iso2022_jp_config = allocate([ 5, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct.iso2022_designation*", 0, 0, 0 ], ALLOC_NORMAL);
    _iso2022_jp_1_designations = allocate([ -62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -60, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -64, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _iso2022_jp_1_config = allocate([ 5, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct.iso2022_designation*", 0, 0, 0 ], ALLOC_NORMAL);
    _iso2022_jp_2_designations = allocate([ -62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -60, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -61, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -63, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -64, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _iso2022_jp_2_config = allocate([ 7, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct.iso2022_designation*", 0, 0, 0 ], ALLOC_NORMAL);
    _iso2022_jp_2004_designations = allocate([ -47, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -47, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -48, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _iso2022_jp_2004_config = allocate([ 5, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct.iso2022_designation*", 0, 0, 0 ], ALLOC_NORMAL);
    _iso2022_jp_3_designations = allocate([ -49, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -49, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -48, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _iso2022_jp_3_config = allocate([ 5, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct.iso2022_designation*", 0, 0, 0 ], ALLOC_NORMAL);
    _iso2022_jp_ext_designations = allocate([ -62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -60, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -64, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _iso2022_jp_ext_config = allocate([ 5, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct.iso2022_designation*", 0, 0, 0 ], ALLOC_NORMAL);
    __mapping_list = allocate(12, [ "i8*", 0, 0, 0, "%struct.dbcs_index*", 0, 0, 0, "%struct.dbcs_index*", 0, 0, 0 ], ALLOC_NORMAL);
    __str30 = allocate([ 105, 115, 111, 50, 48, 50, 50, 95, 107, 114, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 105, 115, 111, 50, 48, 50, 50, 95, 106, 112, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 105, 115, 111, 50, 48, 50, 50, 95, 106, 112, 95, 49, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 105, 115, 111, 50, 48, 50, 50, 95, 106, 112, 95, 50, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 105, 115, 111, 50, 48, 50, 50, 95, 106, 112, 95, 50, 48, 48, 52, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 105, 115, 111, 50, 48, 50, 50, 95, 106, 112, 95, 51, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 105, 115, 111, 50, 48, 50, 50, 95, 106, 112, 95, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __codec_list = allocate(288, [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str37 = allocate([ 95, 99, 111, 100, 101, 99, 115, 95, 105, 115, 111, 50, 48, 50, 50, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_codec_list] = __codec_list;
    HEAP[___methods] = __str5;
    HEAP[___methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[___methods + 12] = __str6;
    HEAP[_mapping_list] = __mapping_list;
    HEAP[_iso2022_kr_designations + 4] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_iso2022_kr_designations + 8] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_iso2022_kr_designations + 12] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_iso2022_kr_config + 4] = _iso2022_kr_designations;
    HEAP[_iso2022_jp_designations + 4] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_designations + 8] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_designations + 12] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_designations + 24] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_iso2022_jp_designations + 28] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_iso2022_jp_designations + 36] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_designations + 40] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_designations + 44] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_config + 4] = _iso2022_jp_designations;
    HEAP[_iso2022_jp_1_designations + 4] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_1_designations + 8] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_1_designations + 12] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_1_designations + 20] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_iso2022_jp_1_designations + 24] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_iso2022_jp_1_designations + 28] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_iso2022_jp_1_designations + 40] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_iso2022_jp_1_designations + 44] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_iso2022_jp_1_designations + 52] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_1_designations + 56] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_1_designations + 60] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_1_config + 4] = _iso2022_jp_1_designations;
    HEAP[_iso2022_jp_2_designations + 4] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_2_designations + 8] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_2_designations + 12] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_2_designations + 20] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_iso2022_jp_2_designations + 24] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_iso2022_jp_2_designations + 28] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_iso2022_jp_2_designations + 36] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_iso2022_jp_2_designations + 40] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_iso2022_jp_2_designations + 44] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_iso2022_jp_2_designations + 52] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_iso2022_jp_2_designations + 56] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_iso2022_jp_2_designations + 60] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_iso2022_jp_2_designations + 72] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_iso2022_jp_2_designations + 76] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_iso2022_jp_2_designations + 84] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_2_designations + 88] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_2_designations + 92] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_2_designations + 104] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_iso2022_jp_2_designations + 108] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_iso2022_jp_2_designations + 120] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_iso2022_jp_2_designations + 124] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_iso2022_jp_2_config + 4] = _iso2022_jp_2_designations;
    HEAP[_iso2022_jp_2004_designations + 4] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_iso2022_jp_2004_designations + 8] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_iso2022_jp_2004_designations + 12] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_iso2022_jp_2004_designations + 20] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_2004_designations + 24] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_2004_designations + 28] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_2004_designations + 36] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_iso2022_jp_2004_designations + 40] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_iso2022_jp_2004_designations + 44] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_iso2022_jp_2004_designations + 52] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_iso2022_jp_2004_designations + 56] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_iso2022_jp_2004_designations + 60] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_iso2022_jp_2004_config + 4] = _iso2022_jp_2004_designations;
    HEAP[_iso2022_jp_3_designations + 4] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_iso2022_jp_3_designations + 8] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_iso2022_jp_3_designations + 12] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_iso2022_jp_3_designations + 20] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_3_designations + 24] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_3_designations + 28] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_3_designations + 36] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_iso2022_jp_3_designations + 40] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_iso2022_jp_3_designations + 44] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_iso2022_jp_3_designations + 52] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_iso2022_jp_3_designations + 56] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_iso2022_jp_3_designations + 60] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_iso2022_jp_3_config + 4] = _iso2022_jp_3_designations;
    HEAP[_iso2022_jp_ext_designations + 4] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_ext_designations + 8] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_ext_designations + 12] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_ext_designations + 20] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_iso2022_jp_ext_designations + 24] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_iso2022_jp_ext_designations + 28] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_iso2022_jp_ext_designations + 40] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_iso2022_jp_ext_designations + 44] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_iso2022_jp_ext_designations + 56] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_iso2022_jp_ext_designations + 60] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_iso2022_jp_ext_designations + 68] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_ext_designations + 72] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_ext_designations + 76] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_ext_config + 4] = _iso2022_jp_ext_designations;
    HEAP[__mapping_list] = __str6;
    HEAP[__codec_list] = __str30;
    HEAP[__codec_list + 4] = _iso2022_kr_config;
    HEAP[__codec_list + 8] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[__codec_list + 12] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[__codec_list + 16] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[__codec_list + 20] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[__codec_list + 24] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[__codec_list + 28] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[__codec_list + 32] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[__codec_list + 36] = __str31;
    HEAP[__codec_list + 40] = _iso2022_jp_config;
    HEAP[__codec_list + 44] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[__codec_list + 48] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[__codec_list + 52] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[__codec_list + 56] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[__codec_list + 60] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[__codec_list + 64] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[__codec_list + 68] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[__codec_list + 72] = __str32;
    HEAP[__codec_list + 76] = _iso2022_jp_1_config;
    HEAP[__codec_list + 80] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[__codec_list + 84] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[__codec_list + 88] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[__codec_list + 92] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[__codec_list + 96] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[__codec_list + 100] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[__codec_list + 104] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[__codec_list + 108] = __str33;
    HEAP[__codec_list + 112] = _iso2022_jp_2_config;
    HEAP[__codec_list + 116] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[__codec_list + 120] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[__codec_list + 124] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[__codec_list + 128] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[__codec_list + 132] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[__codec_list + 136] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[__codec_list + 140] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[__codec_list + 144] = __str34;
    HEAP[__codec_list + 148] = _iso2022_jp_2004_config;
    HEAP[__codec_list + 152] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[__codec_list + 156] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[__codec_list + 160] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[__codec_list + 164] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[__codec_list + 168] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[__codec_list + 172] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[__codec_list + 176] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[__codec_list + 180] = __str35;
    HEAP[__codec_list + 184] = _iso2022_jp_3_config;
    HEAP[__codec_list + 188] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[__codec_list + 192] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[__codec_list + 196] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[__codec_list + 200] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[__codec_list + 204] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[__codec_list + 208] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[__codec_list + 212] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[__codec_list + 216] = __str36;
    HEAP[__codec_list + 220] = _iso2022_jp_ext_config;
    HEAP[__codec_list + 224] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[__codec_list + 228] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[__codec_list + 232] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[__codec_list + 236] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[__codec_list + 240] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[__codec_list + 244] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[__codec_list + 248] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[__codec_list + 252] = __str6;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
