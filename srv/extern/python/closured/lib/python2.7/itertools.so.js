"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 196;
  var $1___SIZE = 32;
  var $2___SIZE = 16;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
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
  var $struct__grouperobject___SIZE = 16;
  var $struct__typeobject___SIZE = 196;
  var $struct_chainobject___SIZE = 16;
  var $struct_combinationsobject___SIZE = 28;
  var $struct_compressobject___SIZE = 16;
  var $struct_countobject___SIZE = 20;
  var $struct_cwrobject___SIZE = 28;
  var $struct_cycleobject___SIZE = 20;
  var $struct_dropwhileobject___SIZE = 20;
  var $struct_groupbyobject___SIZE = 28;
  var $struct_ifilterfalseobject___SIZE = 16;
  var $struct_ifilterobject___SIZE = 16;
  var $struct_imapobject___SIZE = 16;
  var $struct_isliceobject___SIZE = 28;
  var $struct_iziplongestobject___SIZE = 28;
  var $struct_izipobject___SIZE = 20;
  var $struct_permutationsobject___SIZE = 32;
  var $struct_productobject___SIZE = 24;
  var $struct_repeatobject___SIZE = 16;
  var $struct_starmapobject___SIZE = 16;
  var $struct_takewhileobject___SIZE = 20;
  var $struct_teedataobject___SIZE = 248;
  var $struct_teeobject___SIZE = 20;
  var __str;
  var _kwargs_8299;
  var __str1;
  var __str2;
  var _groupby_doc;
  var __str3;
  var _groupby_type;
  var __str4;
  var __str5;
  var ___PRETTY_FUNCTION___8617;
  var __str6;
  var __str7;
  var __grouper_type;
  var __str8;
  var ___PRETTY_FUNCTION___8716;
  var __str9;
  var _teedataobject_doc;
  var __str10;
  var _teedataobject_type;
  var _teecopy_doc;
  var __str11;
  var _teeobject_doc;
  var __str12;
  var _tee_methods;
  var __str13;
  var _tee_type;
  var __str14;
  var __str15;
  var _tee_doc;
  var __str16;
  var __str17;
  var _cycle_doc;
  var __str18;
  var _cycle_type;
  var __str19;
  var __str20;
  var _dropwhile_doc;
  var __str21;
  var _dropwhile_type;
  var __str22;
  var __str23;
  var _takewhile_doc;
  var __str24;
  var _takewhile_type;
  var __str25;
  var __str26;
  var __str27;
  var __str28;
  var __str29;
  var _islice_doc;
  var __str30;
  var _islice_type;
  var __str31;
  var __str32;
  var _starmap_doc;
  var __str33;
  var _starmap_type;
  var __str34;
  var __str35;
  var _imap_doc;
  var __str36;
  var _imap_type;
  var __str37;
  var _chain_doc;
  var _chain_from_iterable_doc;
  var __str38;
  var _chain_methods;
  var __str39;
  var _chain_type;
  var _C_70_10224;
  var __str40;
  var __str41;
  var __str42;
  var __str43;
  var ___PRETTY_FUNCTION___10213;
  var __str44;
  var ___PRETTY_FUNCTION___10376;
  var _product_doc;
  var __str45;
  var _product_type;
  var __str46;
  var _kwargs_10490;
  var __str47;
  var __str48;
  var __str49;
  var ___PRETTY_FUNCTION___10612;
  var _combinations_doc;
  var __str50;
  var _combinations_type;
  var __str51;
  var _kwargs_10713;
  var ___PRETTY_FUNCTION___10839;
  var _cwr_doc;
  var __str52;
  var _cwr_type;
  var __str53;
  var _kwargs_10941;
  var ___PRETTY_FUNCTION___11077;
  var _permutations_doc;
  var __str54;
  var _permutations_type;
  var __str55;
  var _kwargs_11179;
  var __str56;
  var __str57;
  var _compress_doc;
  var __str58;
  var _compress_type;
  var __str59;
  var __str60;
  var _ifilter_doc;
  var __str61;
  var _ifilter_type;
  var __str62;
  var __str63;
  var _ifilterfalse_doc;
  var __str64;
  var _ifilterfalse_type;
  var __str65;
  var _kwlist_11645;
  var __str66;
  var __str67;
  var __str68;
  var __str69;
  var ___PRETTY_FUNCTION___11646;
  var __str70;
  var __str71;
  var __str72;
  var ___PRETTY_FUNCTION___11833;
  var __str73;
  var __str74;
  var __str75;
  var __str76;
  var __str77;
  var _count_reduce_doc;
  var __str78;
  var _count_methods;
  var _count_doc;
  var __str79;
  var _count_type;
  var __str80;
  var ___PRETTY_FUNCTION___11957;
  var __str81;
  var _izip_doc;
  var __str82;
  var _izip_type;
  var __str83;
  var _kwargs_12177;
  var __str84;
  var __str85;
  var __str86;
  var __str87;
  var __str88;
  var _length_hint_doc;
  var __str89;
  var _repeat_methods;
  var _repeat_doc;
  var __str90;
  var _repeat_type;
  var __str91;
  var __str92;
  var ___PRETTY_FUNCTION___12314;
  var __str93;
  var _izip_longest_doc;
  var __str94;
  var _iziplongest_type;
  var _module_doc;
  var _module_methods;
  var _C_280_12615;
  var __str95;
  var __str96;
  var ___PRETTY_FUNCTION___12611;
  function _groupby_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $gbo = __stackBase__ + 20;
      var $it = __stackBase__ + 24;
      var $keyfunc = __stackBase__ + 28;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$keyfunc] = __Py_NoneStruct;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwds_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str, _kwargs_8299, allocate([ $it, 0, 0, 0, $keyfunc, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      
      var $7 = HEAP[HEAP[$type_addr] + 152];
      var $8 = HEAP[$type_addr];
      var $9 = FUNCTION_TABLE[$7]($8, 0);
      var $10 = $9;
      HEAP[$gbo] = $10;
      
      
      if (HEAP[$gbo] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 4:
      
      var $14 = HEAP[$gbo] + 16;
      HEAP[$14] = 0;
      
      var $16 = HEAP[$gbo] + 20;
      HEAP[$16] = 0;
      
      var $18 = HEAP[$gbo] + 24;
      HEAP[$18] = 0;
      var $19 = HEAP[$keyfunc];
      
      var $21 = HEAP[$gbo] + 12;
      HEAP[$21] = $19;
      
      
      
      var $25 = HEAP[HEAP[$keyfunc]] + 1;
      var $26 = HEAP[$keyfunc];
      HEAP[$26] = $25;
      var $27 = HEAP[$it];
      var $28 = _PyObject_GetIter($27);
      
      var $30 = HEAP[$gbo] + 8;
      HEAP[$30] = $28;
      
      
      
      
      if (HEAP[HEAP[$gbo] + 8] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      var $36 = HEAP[$gbo];
      
      
      var $39 = HEAP[$36] - 1;
      var $40 = $36;
      HEAP[$40] = $39;
      
      
      
      if (HEAP[$36] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[$gbo] + 4] + 24];
      
      var $51 = HEAP[$gbo];
      FUNCTION_TABLE[$49]($51);
      __label__ = 7;
      break;
     case 7:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 8:
      
      var $53 = HEAP[$gbo];
      HEAP[$0] = $53;
      __label__ = 9;
      break;
     case 9:
      var $54 = HEAP[$0];
      HEAP[$retval] = $54;
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
  function _groupby_dealloc($gbo) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $gbo_addr = __stackBase__;
      
      HEAP[$gbo_addr] = $gbo;
      
      var $1 = HEAP[$gbo_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$gbo_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$gbo_addr] + 8];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$gbo_addr] + 8] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$gbo_addr] + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$gbo_addr] + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$gbo_addr] + 12];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[HEAP[$gbo_addr] + 12] + 4] + 24];
      
      
      var $49 = HEAP[HEAP[$gbo_addr] + 12];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$gbo_addr] + 16] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $56 = HEAP[HEAP[$gbo_addr] + 16];
      
      
      var $59 = HEAP[$56] - 1;
      var $60 = $56;
      HEAP[$60] = $59;
      
      
      
      if (HEAP[$56] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $70 = HEAP[HEAP[HEAP[HEAP[$gbo_addr] + 16] + 4] + 24];
      
      
      var $73 = HEAP[HEAP[$gbo_addr] + 16];
      FUNCTION_TABLE[$70]($73);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$gbo_addr] + 20] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $80 = HEAP[HEAP[$gbo_addr] + 20];
      
      
      var $83 = HEAP[$80] - 1;
      var $84 = $80;
      HEAP[$84] = $83;
      
      
      
      if (HEAP[$80] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      var $94 = HEAP[HEAP[HEAP[HEAP[$gbo_addr] + 20] + 4] + 24];
      
      
      var $97 = HEAP[HEAP[$gbo_addr] + 20];
      FUNCTION_TABLE[$94]($97);
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      if (HEAP[HEAP[$gbo_addr] + 24] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      var $104 = HEAP[HEAP[$gbo_addr] + 24];
      
      
      var $107 = HEAP[$104] - 1;
      var $108 = $104;
      HEAP[$108] = $107;
      
      
      
      if (HEAP[$104] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      
      var $118 = HEAP[HEAP[HEAP[HEAP[$gbo_addr] + 24] + 4] + 24];
      
      
      var $121 = HEAP[HEAP[$gbo_addr] + 24];
      FUNCTION_TABLE[$118]($121);
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      
      var $127 = HEAP[HEAP[HEAP[$gbo_addr] + 4] + 160];
      
      var $129 = HEAP[$gbo_addr];
      FUNCTION_TABLE[$127]($129);
      __label__ = 16;
      break;
     case 16:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _groupby_traverse($gbo, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $gbo_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      var $vret8 = __stackBase__ + 28;
      var $vret12 = __stackBase__ + 32;
      var $vret16 = __stackBase__ + 36;
      
      HEAP[$gbo_addr] = $gbo;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$gbo_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$gbo_addr] + 8];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 16;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$gbo_addr] + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$gbo_addr] + 12];
      var $21 = HEAP[$visit_addr];
      var $22 = HEAP[$arg_addr];
      var $23 = FUNCTION_TABLE[$21]($20, $22);
      HEAP[$vret4] = $23;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = HEAP[$vret4];
      HEAP[$0] = $26;
      __label__ = 16;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$gbo_addr] + 16] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $33 = HEAP[HEAP[$gbo_addr] + 16];
      var $34 = HEAP[$visit_addr];
      var $35 = HEAP[$arg_addr];
      var $36 = FUNCTION_TABLE[$34]($33, $35);
      HEAP[$vret8] = $36;
      
      
      if (HEAP[$vret8] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $39 = HEAP[$vret8];
      HEAP[$0] = $39;
      __label__ = 16;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$gbo_addr] + 20] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $46 = HEAP[HEAP[$gbo_addr] + 20];
      var $47 = HEAP[$visit_addr];
      var $48 = HEAP[$arg_addr];
      var $49 = FUNCTION_TABLE[$47]($46, $48);
      HEAP[$vret12] = $49;
      
      
      if (HEAP[$vret12] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $52 = HEAP[$vret12];
      HEAP[$0] = $52;
      __label__ = 16;
      break;
     case 12:
      
      
      
      
      if (HEAP[HEAP[$gbo_addr] + 24] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      var $59 = HEAP[HEAP[$gbo_addr] + 24];
      var $60 = HEAP[$visit_addr];
      var $61 = HEAP[$arg_addr];
      var $62 = FUNCTION_TABLE[$60]($59, $61);
      HEAP[$vret16] = $62;
      
      
      if (HEAP[$vret16] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $65 = HEAP[$vret16];
      HEAP[$0] = $65;
      __label__ = 16;
      break;
     case 15:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 16:
      var $66 = HEAP[$0];
      HEAP[$retval] = $66;
      __label__ = 17;
      break;
     case 17:
      var $retval20 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _groupby_next($gbo) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $gbo_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $newvalue = __stackBase__ + 12;
      var $newkey = __stackBase__ + 16;
      var $r = __stackBase__ + 20;
      var $grouper = __stackBase__ + 24;
      var $tmp = __stackBase__ + 28;
      var $rcmp = __stackBase__ + 32;
      
      HEAP[$gbo_addr] = $gbo;
      __label__ = 1;
      break;
     case 1:
      
      
      
      
      if (HEAP[HEAP[$gbo_addr] + 20] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$gbo_addr] + 16] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $11 = HEAP[HEAP[$gbo_addr] + 20];
      
      
      var $14 = HEAP[HEAP[$gbo_addr] + 16];
      var $15 = _PyObject_RichCompareBool($14, $11, 2);
      HEAP[$rcmp] = $15;
      
      var $17 = HEAP[$rcmp] == -1;
      if ($17) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 5:
      
      
      if (HEAP[$rcmp] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $22 = HEAP[HEAP[$gbo_addr] + 8];
      var $23 = _PyIter_Next($22);
      HEAP[$newvalue] = $23;
      
      
      if (HEAP[$newvalue] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 8:
      
      
      
      
      if (HEAP[HEAP[$gbo_addr] + 12] == __Py_NoneStruct) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $30 = HEAP[$newvalue];
      HEAP[$newkey] = $30;
      
      
      
      var $34 = HEAP[HEAP[$newvalue]] + 1;
      
      var $36 = HEAP[$newvalue];
      HEAP[$36] = $34;
      __label__ = 14;
      break;
     case 10:
      
      
      var $39 = HEAP[HEAP[$gbo_addr] + 12];
      var $40 = HEAP[$newvalue];
      var $41 = _PyObject_CallFunctionObjArgs($39, allocate([ $40, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$newkey] = $41;
      
      
      if (HEAP[$newkey] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      var $47 = HEAP[HEAP[$newvalue]] - 1;
      
      var $49 = HEAP[$newvalue];
      HEAP[$49] = $47;
      
      
      
      
      if (HEAP[HEAP[$newvalue]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $58 = HEAP[HEAP[HEAP[$newvalue] + 4] + 24];
      var $59 = HEAP[$newvalue];
      FUNCTION_TABLE[$58]($59);
      __label__ = 13;
      break;
     case 13:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 14:
      
      
      var $62 = HEAP[HEAP[$gbo_addr] + 20];
      HEAP[$tmp] = $62;
      
      var $64 = HEAP[$gbo_addr] + 20;
      var $65 = HEAP[$newkey];
      HEAP[$64] = $65;
      
      
      if (HEAP[$tmp] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      var $71 = HEAP[HEAP[$tmp]] - 1;
      
      var $73 = HEAP[$tmp];
      HEAP[$73] = $71;
      
      
      
      
      if (HEAP[HEAP[$tmp]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $82 = HEAP[HEAP[HEAP[$tmp] + 4] + 24];
      var $83 = HEAP[$tmp];
      FUNCTION_TABLE[$82]($83);
      __label__ = 17;
      break;
     case 17:
      
      
      var $86 = HEAP[HEAP[$gbo_addr] + 24];
      HEAP[$tmp] = $86;
      
      var $88 = HEAP[$gbo_addr] + 24;
      var $89 = HEAP[$newvalue];
      HEAP[$88] = $89;
      
      
      if (HEAP[$tmp] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      
      
      
      var $95 = HEAP[HEAP[$tmp]] - 1;
      
      var $97 = HEAP[$tmp];
      HEAP[$97] = $95;
      
      
      
      
      if (HEAP[HEAP[$tmp]] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $106 = HEAP[HEAP[HEAP[$tmp] + 4] + 24];
      var $107 = HEAP[$tmp];
      FUNCTION_TABLE[$106]($107);
      __label__ = 20;
      break;
     case 20:
      __label__ = 1;
      break;
     case 21:
      
      
      
      
      
      var $113 = HEAP[HEAP[HEAP[$gbo_addr] + 20]] + 1;
      var $114 = HEAP[HEAP[$gbo_addr] + 20];
      HEAP[$114] = $113;
      
      
      var $117 = HEAP[HEAP[$gbo_addr] + 16];
      HEAP[$tmp] = $117;
      
      
      var $120 = HEAP[HEAP[$gbo_addr] + 20];
      
      var $122 = HEAP[$gbo_addr] + 16;
      HEAP[$122] = $120;
      
      
      if (HEAP[$tmp] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      
      var $128 = HEAP[HEAP[$tmp]] - 1;
      
      var $130 = HEAP[$tmp];
      HEAP[$130] = $128;
      
      
      
      
      if (HEAP[HEAP[$tmp]] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $139 = HEAP[HEAP[HEAP[$tmp] + 4] + 24];
      var $140 = HEAP[$tmp];
      FUNCTION_TABLE[$139]($140);
      __label__ = 24;
      break;
     case 24:
      
      
      var $143 = HEAP[HEAP[$gbo_addr] + 16];
      var $144 = HEAP[$gbo_addr];
      var $145 = __grouper_create($144, $143);
      HEAP[$grouper] = $145;
      
      
      if (HEAP[$grouper] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 26:
      
      
      var $150 = HEAP[HEAP[$gbo_addr] + 20];
      var $151 = HEAP[$grouper];
      var $152 = _PyTuple_Pack(2, allocate([ $150, 0, 0, 0, $151, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$r] = $152;
      
      
      
      var $156 = HEAP[HEAP[$grouper]] - 1;
      
      var $158 = HEAP[$grouper];
      HEAP[$158] = $156;
      
      
      
      
      if (HEAP[HEAP[$grouper]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $167 = HEAP[HEAP[HEAP[$grouper] + 4] + 24];
      var $168 = HEAP[$grouper];
      FUNCTION_TABLE[$167]($168);
      __label__ = 28;
      break;
     case 28:
      var $169 = HEAP[$r];
      HEAP[$0] = $169;
      __label__ = 29;
      break;
     case 29:
      var $170 = HEAP[$0];
      HEAP[$retval] = $170;
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
  function __grouper_create($parent, $tgtkey) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parent_addr = __stackBase__;
      var $tgtkey_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $igo = __stackBase__ + 16;
      
      HEAP[$parent_addr] = $parent;
      HEAP[$tgtkey_addr] = $tgtkey;
      var $1 = __PyObject_GC_New(__grouper_type);
      
      HEAP[$igo] = $1;
      
      
      if (HEAP[$igo] == 0) {
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
      
      var $6 = HEAP[$parent_addr];
      
      var $8 = HEAP[$igo] + 8;
      HEAP[$8] = $6;
      
      
      
      
      var $13 = HEAP[HEAP[$parent_addr]] + 1;
      var $14 = HEAP[$parent_addr];
      HEAP[$14] = $13;
      
      var $16 = HEAP[$igo] + 12;
      var $17 = HEAP[$tgtkey_addr];
      HEAP[$16] = $17;
      
      
      
      var $21 = HEAP[HEAP[$tgtkey_addr]] + 1;
      
      var $23 = HEAP[$tgtkey_addr];
      HEAP[$23] = $21;
      
      var $25 = HEAP[$igo];
      _PyObject_GC_Track($25);
      
      var $27 = HEAP[$igo];
      HEAP[$0] = $27;
      __label__ = 3;
      break;
     case 3:
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
  function __grouper_dealloc($igo) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $igo_addr = __stackBase__;
      
      HEAP[$igo_addr] = $igo;
      
      var $1 = HEAP[$igo_addr];
      _PyObject_GC_UnTrack($1);
      
      
      var $4 = HEAP[HEAP[$igo_addr] + 8];
      
      
      var $7 = HEAP[$4] - 1;
      var $8 = $4;
      HEAP[$8] = $7;
      
      
      
      if (HEAP[$4] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      
      var $18 = HEAP[HEAP[HEAP[HEAP[$igo_addr] + 8] + 4] + 24];
      
      
      var $21 = HEAP[HEAP[$igo_addr] + 8];
      FUNCTION_TABLE[$18]($21);
      __label__ = 2;
      break;
     case 2:
      
      
      var $24 = HEAP[HEAP[$igo_addr] + 12];
      
      
      var $27 = HEAP[$24] - 1;
      var $28 = $24;
      HEAP[$28] = $27;
      
      
      
      if (HEAP[$24] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[HEAP[$igo_addr] + 12] + 4] + 24];
      
      
      var $41 = HEAP[HEAP[$igo_addr] + 12];
      FUNCTION_TABLE[$38]($41);
      __label__ = 4;
      break;
     case 4:
      
      var $43 = HEAP[$igo_addr];
      _PyObject_GC_Del($43);
      __label__ = 5;
      break;
     case 5:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __grouper_traverse($igo, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $igo_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      
      HEAP[$igo_addr] = $igo;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$igo_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$igo_addr] + 8];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$igo_addr] + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$igo_addr] + 12];
      var $21 = HEAP[$visit_addr];
      var $22 = HEAP[$arg_addr];
      var $23 = FUNCTION_TABLE[$21]($20, $22);
      HEAP[$vret4] = $23;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = HEAP[$vret4];
      HEAP[$0] = $26;
      __label__ = 7;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
      __label__ = 8;
      break;
     case 8:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __grouper_next($igo) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $igo_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $gbo = __stackBase__ + 12;
      var $newvalue = __stackBase__ + 16;
      var $newkey = __stackBase__ + 20;
      var $r = __stackBase__ + 24;
      var $rcmp = __stackBase__ + 28;
      var $_py_tmp = __stackBase__ + 32;
      
      HEAP[$igo_addr] = $igo;
      
      
      
      var $4 = HEAP[HEAP[$igo_addr] + 8];
      HEAP[$gbo] = $4;
      
      
      
      
      if (HEAP[HEAP[$gbo] + 24] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 1:
      
      
      var $11 = HEAP[HEAP[$gbo] + 8];
      var $12 = _PyIter_Next($11);
      HEAP[$newvalue] = $12;
      
      
      if (HEAP[$newvalue] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$gbo] + 12] == __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $19 = HEAP[$newvalue];
      HEAP[$newkey] = $19;
      
      
      
      var $23 = HEAP[HEAP[$newvalue]] + 1;
      
      var $25 = HEAP[$newvalue];
      HEAP[$25] = $23;
      __label__ = 9;
      break;
     case 5:
      
      
      var $28 = HEAP[HEAP[$gbo] + 12];
      var $29 = HEAP[$newvalue];
      var $30 = _PyObject_CallFunctionObjArgs($28, allocate([ $29, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$newkey] = $30;
      
      
      if (HEAP[$newkey] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $36 = HEAP[HEAP[$newvalue]] - 1;
      
      var $38 = HEAP[$newvalue];
      HEAP[$38] = $36;
      
      
      
      
      if (HEAP[HEAP[$newvalue]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $47 = HEAP[HEAP[HEAP[$newvalue] + 4] + 24];
      var $48 = HEAP[$newvalue];
      FUNCTION_TABLE[$47]($48);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$gbo] + 20] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str4, __str5, 254, ___PRETTY_FUNCTION___8617);
      throw "Reached an unreachable!";
     case 11:
      
      var $54 = HEAP[$gbo] + 20;
      var $55 = HEAP[$newkey];
      HEAP[$54] = $55;
      
      var $57 = HEAP[$gbo] + 24;
      var $58 = HEAP[$newvalue];
      HEAP[$57] = $58;
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      if (HEAP[HEAP[$gbo] + 20] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      ___assert_fail(__str6, __str5, 259, ___PRETTY_FUNCTION___8617);
      throw "Reached an unreachable!";
     case 14:
      
      
      var $65 = HEAP[HEAP[$gbo] + 20];
      
      
      var $68 = HEAP[HEAP[$igo_addr] + 12];
      var $69 = _PyObject_RichCompareBool($68, $65, 2);
      HEAP[$rcmp] = $69;
      
      
      if (HEAP[$rcmp] <= 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 16:
      
      
      var $74 = HEAP[HEAP[$gbo] + 24];
      HEAP[$r] = $74;
      
      var $76 = HEAP[$gbo] + 24;
      HEAP[$76] = 0;
      
      
      
      
      if (HEAP[HEAP[$gbo] + 20] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      var $83 = HEAP[HEAP[$gbo] + 20];
      HEAP[$_py_tmp] = $83;
      
      var $85 = HEAP[$gbo] + 20;
      HEAP[$85] = 0;
      
      
      
      var $89 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $91 = HEAP[$_py_tmp];
      HEAP[$91] = $89;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $100 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $101 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$100]($101);
      __label__ = 19;
      break;
     case 19:
      var $102 = HEAP[$r];
      HEAP[$0] = $102;
      __label__ = 20;
      break;
     case 20:
      var $103 = HEAP[$0];
      HEAP[$retval] = $103;
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
  function _teedataobject_new($it) {
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
      var $tdo = __stackBase__ + 12;
      
      HEAP[$it_addr] = $it;
      var $1 = __PyObject_GC_New(_teedataobject_type);
      
      HEAP[$tdo] = $1;
      
      
      if (HEAP[$tdo] == 0) {
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
      
      var $6 = HEAP[$tdo] + 12;
      HEAP[$6] = 0;
      
      var $8 = HEAP[$tdo] + 16;
      HEAP[$8] = 0;
      
      
      
      var $12 = HEAP[HEAP[$it_addr]] + 1;
      
      var $14 = HEAP[$it_addr];
      HEAP[$14] = $12;
      
      var $16 = HEAP[$tdo] + 8;
      var $17 = HEAP[$it_addr];
      HEAP[$16] = $17;
      
      var $19 = HEAP[$tdo];
      _PyObject_GC_Track($19);
      
      var $21 = HEAP[$tdo];
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
  function _teedataobject_jumplink($tdo) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tdo_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$tdo_addr] = $tdo;
      
      
      
      
      if (HEAP[HEAP[$tdo_addr] + 16] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$tdo_addr] + 8];
      var $8 = _teedataobject_new($7);
      
      var $10 = HEAP[$tdo_addr] + 16;
      HEAP[$10] = $8;
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$tdo_addr] + 16] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[$tdo_addr] + 16]] + 1;
      var $21 = HEAP[HEAP[$tdo_addr] + 16];
      HEAP[$21] = $20;
      __label__ = 4;
      break;
     case 4:
      
      
      var $24 = HEAP[HEAP[$tdo_addr] + 16];
      HEAP[$0] = $24;
      var $25 = HEAP[$0];
      HEAP[$retval] = $25;
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
  function _teedataobject_getitem($tdo, $i) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tdo_addr = __stackBase__;
      var $i_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $value = __stackBase__ + 16;
      
      HEAP[$tdo_addr] = $tdo;
      HEAP[$i_addr] = $i;
      
      
      if (HEAP[$i_addr] > 56) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str8, __str5, 377, ___PRETTY_FUNCTION___8716);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      
      if (HEAP[HEAP[$tdo_addr] + 12] > HEAP[$i_addr]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $12 = HEAP[HEAP[$tdo_addr] + 20 + HEAP[$i_addr] * 4];
      HEAP[$value] = $12;
      __label__ = 9;
      break;
     case 4:
      
      
      
      
      
      if (HEAP[HEAP[$tdo_addr] + 12] != HEAP[$i_addr]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str9, __str5, 382, ___PRETTY_FUNCTION___8716);
      throw "Reached an unreachable!";
     case 6:
      
      
      var $20 = HEAP[HEAP[$tdo_addr] + 8];
      var $21 = _PyIter_Next($20);
      HEAP[$value] = $21;
      
      
      if (HEAP[$value] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 8:
      
      
      
      var $27 = HEAP[HEAP[$tdo_addr] + 12] + 1;
      
      var $29 = HEAP[$tdo_addr] + 12;
      HEAP[$29] = $27;
      
      
      
      var $33 = HEAP[$tdo_addr] + 20 + HEAP[$i_addr] * 4;
      var $34 = HEAP[$value];
      HEAP[$33] = $34;
      __label__ = 9;
      break;
     case 9:
      
      
      
      var $38 = HEAP[HEAP[$value]] + 1;
      
      var $40 = HEAP[$value];
      HEAP[$40] = $38;
      var $41 = HEAP[$value];
      HEAP[$0] = $41;
      __label__ = 10;
      break;
     case 10:
      var $42 = HEAP[$0];
      HEAP[$retval] = $42;
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
  function _teedataobject_traverse($tdo, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tdo_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $vret = __stackBase__ + 24;
      var $vret5 = __stackBase__ + 28;
      var $vret11 = __stackBase__ + 32;
      
      HEAP[$tdo_addr] = $tdo;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$tdo_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$tdo_addr] + 8];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 13;
      break;
     case 3:
      HEAP[$i] = 0;
      __label__ = 8;
      break;
     case 4:
      
      
      
      
      
      
      if (HEAP[HEAP[$tdo_addr] + 20 + HEAP[$i] * 4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      
      var $24 = HEAP[HEAP[$tdo_addr] + 20 + HEAP[$i] * 4];
      var $25 = HEAP[$visit_addr];
      var $26 = HEAP[$arg_addr];
      var $27 = FUNCTION_TABLE[$25]($24, $26);
      HEAP[$vret5] = $27;
      
      
      if (HEAP[$vret5] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $30 = HEAP[$vret5];
      HEAP[$0] = $30;
      __label__ = 13;
      break;
     case 7:
      
      var $32 = HEAP[$i] + 1;
      HEAP[$i] = $32;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      if (HEAP[HEAP[$tdo_addr] + 12] > HEAP[$i]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[HEAP[$tdo_addr] + 16] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $44 = HEAP[HEAP[$tdo_addr] + 16];
      var $45 = HEAP[$visit_addr];
      var $46 = HEAP[$arg_addr];
      var $47 = FUNCTION_TABLE[$45]($44, $46);
      HEAP[$vret11] = $47;
      
      
      if (HEAP[$vret11] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $50 = HEAP[$vret11];
      HEAP[$0] = $50;
      __label__ = 13;
      break;
     case 12:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 13:
      var $51 = HEAP[$0];
      HEAP[$retval] = $51;
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
  function _teedataobject_clear($tdo) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tdo_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $i = __stackBase__ + 12;
      var $_py_tmp = __stackBase__ + 16;
      var $_py_tmp5 = __stackBase__ + 20;
      var $_py_tmp11 = __stackBase__ + 24;
      
      HEAP[$tdo_addr] = $tdo;
      
      
      
      
      if (HEAP[HEAP[$tdo_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$tdo_addr] + 8];
      HEAP[$_py_tmp] = $7;
      
      var $9 = HEAP[$tdo_addr] + 8;
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
      HEAP[$i] = 0;
      __label__ = 8;
      break;
     case 4:
      
      
      
      
      
      
      if (HEAP[HEAP[$tdo_addr] + 20 + HEAP[$i] * 4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      
      var $36 = HEAP[HEAP[$tdo_addr] + 20 + HEAP[$i] * 4];
      HEAP[$_py_tmp5] = $36;
      
      
      
      var $40 = HEAP[$tdo_addr] + 20 + HEAP[$i] * 4;
      HEAP[$40] = 0;
      
      
      
      var $44 = HEAP[HEAP[$_py_tmp5]] - 1;
      
      var $46 = HEAP[$_py_tmp5];
      HEAP[$46] = $44;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp5]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$_py_tmp5] + 4] + 24];
      var $56 = HEAP[$_py_tmp5];
      FUNCTION_TABLE[$55]($56);
      __label__ = 7;
      break;
     case 7:
      
      var $58 = HEAP[$i] + 1;
      HEAP[$i] = $58;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      if (HEAP[HEAP[$tdo_addr] + 12] > HEAP[$i]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[HEAP[$tdo_addr] + 16] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $70 = HEAP[HEAP[$tdo_addr] + 16];
      HEAP[$_py_tmp11] = $70;
      
      var $72 = HEAP[$tdo_addr] + 16;
      HEAP[$72] = 0;
      
      
      
      var $76 = HEAP[HEAP[$_py_tmp11]] - 1;
      
      var $78 = HEAP[$_py_tmp11];
      HEAP[$78] = $76;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp11]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $87 = HEAP[HEAP[HEAP[$_py_tmp11] + 4] + 24];
      var $88 = HEAP[$_py_tmp11];
      FUNCTION_TABLE[$87]($88);
      __label__ = 12;
      break;
     case 12:
      HEAP[$0] = 0;
      var $89 = HEAP[$0];
      HEAP[$retval] = $89;
      __label__ = 13;
      break;
     case 13:
      var $retval14 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _teedataobject_dealloc($tdo) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tdo_addr = __stackBase__;
      
      HEAP[$tdo_addr] = $tdo;
      
      var $1 = HEAP[$tdo_addr];
      _PyObject_GC_UnTrack($1);
      var $2 = HEAP[$tdo_addr];
      var $3 = _teedataobject_clear($2);
      
      var $5 = HEAP[$tdo_addr];
      _PyObject_GC_Del($5);
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _tee_next($to) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $to_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $value = __stackBase__ + 12;
      var $link = __stackBase__ + 16;
      
      HEAP[$to_addr] = $to;
      
      
      
      
      if (HEAP[HEAP[$to_addr] + 12] > 56) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$to_addr] + 8];
      var $8 = _teedataobject_jumplink($7);
      HEAP[$link] = $8;
      
      
      
      var $12 = HEAP[HEAP[$to_addr] + 8];
      
      
      var $15 = HEAP[$12] - 1;
      var $16 = $12;
      HEAP[$16] = $15;
      
      
      
      if (HEAP[$12] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[HEAP[$to_addr] + 8] + 4] + 24];
      
      
      
      var $31 = HEAP[HEAP[$to_addr] + 8];
      FUNCTION_TABLE[$27]($31);
      __label__ = 3;
      break;
     case 3:
      
      var $33 = HEAP[$link];
      
      var $35 = HEAP[$to_addr] + 8;
      HEAP[$35] = $33;
      
      var $37 = HEAP[$to_addr] + 12;
      HEAP[$37] = 0;
      __label__ = 4;
      break;
     case 4:
      
      
      var $40 = HEAP[HEAP[$to_addr] + 12];
      
      
      var $43 = HEAP[HEAP[$to_addr] + 8];
      var $44 = _teedataobject_getitem($43, $40);
      HEAP[$value] = $44;
      
      
      if (HEAP[$value] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 6:
      
      
      
      var $50 = HEAP[HEAP[$to_addr] + 12] + 1;
      
      var $52 = HEAP[$to_addr] + 12;
      HEAP[$52] = $50;
      var $53 = HEAP[$value];
      HEAP[$0] = $53;
      __label__ = 7;
      break;
     case 7:
      var $54 = HEAP[$0];
      HEAP[$retval] = $54;
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
  function _tee_traverse($to, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $to_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      
      HEAP[$to_addr] = $to;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$to_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[HEAP[$to_addr] + 8];
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
  function _tee_copy($to) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $to_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $newto = __stackBase__ + 12;
      
      HEAP[$to_addr] = $to;
      var $1 = __PyObject_GC_New(_tee_type);
      
      HEAP[$newto] = $1;
      
      
      if (HEAP[$newto] == 0) {
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
      
      
      
      
      
      
      var $11 = HEAP[HEAP[HEAP[$to_addr] + 8]] + 1;
      var $12 = HEAP[HEAP[$to_addr] + 8];
      HEAP[$12] = $11;
      
      
      var $15 = HEAP[HEAP[$to_addr] + 8];
      
      var $17 = HEAP[$newto] + 8;
      HEAP[$17] = $15;
      
      
      var $20 = HEAP[HEAP[$to_addr] + 12];
      
      var $22 = HEAP[$newto] + 12;
      HEAP[$22] = $20;
      
      var $24 = HEAP[$newto] + 16;
      HEAP[$24] = 0;
      
      var $26 = HEAP[$newto];
      _PyObject_GC_Track($26);
      
      var $28 = HEAP[$newto];
      HEAP[$0] = $28;
      __label__ = 3;
      break;
     case 3:
      var $29 = HEAP[$0];
      HEAP[$retval] = $29;
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
  function _tee_fromiterable($iterable) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $iterable_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $to = __stackBase__ + 12;
      var $it = __stackBase__ + 16;
      
      HEAP[$iterable_addr] = $iterable;
      HEAP[$it] = 0;
      var $1 = HEAP[$iterable_addr];
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
      __label__ = 13;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$it] + 4] == _tee_type) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $11 = HEAP[HEAP[$it] + 4];
      var $12 = _PyType_IsSubtype($11, _tee_type);
      
      if ($12 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $15 = HEAP[$it];
      var $16 = _tee_copy($15);
      var $17 = $16;
      HEAP[$to] = $17;
      __label__ = 9;
      break;
     case 5:
      var $18 = __PyObject_GC_New(_tee_type);
      
      HEAP[$to] = $18;
      
      
      if (HEAP[$to] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $22 = HEAP[$it];
      var $23 = _teedataobject_new($22);
      var $24 = $23;
      
      var $26 = HEAP[$to] + 8;
      HEAP[$26] = $24;
      
      
      
      
      if (HEAP[HEAP[$to] + 8] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      var $32 = HEAP[$to];
      _PyObject_GC_Del($32);
      HEAP[$to] = 0;
      __label__ = 9;
      break;
     case 8:
      
      var $34 = HEAP[$to] + 12;
      HEAP[$34] = 0;
      
      var $36 = HEAP[$to] + 16;
      HEAP[$36] = 0;
      
      var $38 = HEAP[$to];
      _PyObject_GC_Track($38);
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$it] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      var $44 = HEAP[HEAP[$it]] - 1;
      
      var $46 = HEAP[$it];
      HEAP[$46] = $44;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $56 = HEAP[$it];
      FUNCTION_TABLE[$55]($56);
      __label__ = 12;
      break;
     case 12:
      
      var $58 = HEAP[$to];
      HEAP[$0] = $58;
      __label__ = 13;
      break;
     case 13:
      var $59 = HEAP[$0];
      HEAP[$retval] = $59;
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
  function _tee_new($type, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $iterable = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str11, 1, 1, allocate([ $iterable, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$iterable];
      var $5 = _tee_fromiterable($4);
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
  function _tee_clear($to) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $to_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $_py_tmp = __stackBase__ + 12;
      
      HEAP[$to_addr] = $to;
      
      
      
      
      if (HEAP[HEAP[$to_addr] + 16] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $6 = HEAP[$to_addr];
      _PyObject_ClearWeakRefs($6);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$to_addr] + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      var $14 = HEAP[HEAP[$to_addr] + 8];
      HEAP[$_py_tmp] = $14;
      
      var $16 = HEAP[$to_addr] + 8;
      HEAP[$16] = 0;
      
      
      
      var $20 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $22 = HEAP[$_py_tmp];
      HEAP[$22] = $20;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $31 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $32 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$31]($32);
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
      var $33 = HEAP[$0];
      HEAP[$retval] = $33;
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
  function _tee_dealloc($to) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $to_addr = __stackBase__;
      
      HEAP[$to_addr] = $to;
      
      var $1 = HEAP[$to_addr];
      _PyObject_GC_UnTrack($1);
      var $2 = HEAP[$to_addr];
      var $3 = _tee_clear($2);
      
      var $5 = HEAP[$to_addr];
      _PyObject_GC_Del($5);
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _tee($self, $args) {
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
      var $i = __stackBase__ + 16;
      var $n = __stackBase__ + 20;
      var $it = __stackBase__ + 24;
      var $iterable = __stackBase__ + 28;
      var $copyable = __stackBase__ + 32;
      var $result = __stackBase__ + 36;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$n] = 2;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str14, allocate([ $iterable, 0, 0, 0, $n, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if (HEAP[$n] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($6, __str15);
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 4:
      var $7 = HEAP[$n];
      var $8 = _PyTuple_New($7);
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
      __label__ = 29;
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
      var $13 = HEAP[$result];
      HEAP[$0] = $13;
      __label__ = 29;
      break;
     case 8:
      var $14 = HEAP[$iterable];
      var $15 = _PyObject_GetIter($14);
      HEAP[$it] = $15;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      var $21 = HEAP[HEAP[$result]] - 1;
      
      var $23 = HEAP[$result];
      HEAP[$23] = $21;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $32 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $33 = HEAP[$result];
      FUNCTION_TABLE[$32]($33);
      __label__ = 11;
      break;
     case 11:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 12:
      var $34 = HEAP[$it];
      var $35 = _PyObject_HasAttrString($34, __str12);
      
      if ($35 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 13:
      var $37 = HEAP[$it];
      var $38 = _tee_fromiterable($37);
      HEAP[$copyable] = $38;
      
      
      
      var $42 = HEAP[HEAP[$it]] - 1;
      
      var $44 = HEAP[$it];
      HEAP[$44] = $42;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $53 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $54 = HEAP[$it];
      FUNCTION_TABLE[$53]($54);
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$copyable] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      
      
      
      var $60 = HEAP[HEAP[$result]] - 1;
      
      var $62 = HEAP[$result];
      HEAP[$62] = $60;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $71 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $72 = HEAP[$result];
      FUNCTION_TABLE[$71]($72);
      __label__ = 18;
      break;
     case 18:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 19:
      __label__ = 21;
      break;
     case 20:
      var $73 = HEAP[$it];
      HEAP[$copyable] = $73;
      __label__ = 21;
      break;
     case 21:
      
      
      
      var $77 = HEAP[$result] + 12;
      var $78 = HEAP[$copyable];
      HEAP[$77] = $78;
      HEAP[$i] = 1;
      __label__ = 27;
      break;
     case 22:
      var $79 = HEAP[$copyable];
      var $80 = _PyObject_CallMethod($79, __str12, 0, allocate(1, "i32", ALLOC_STACK));
      HEAP[$copyable] = $80;
      
      
      if (HEAP[$copyable] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 23:
      
      
      
      var $86 = HEAP[HEAP[$result]] - 1;
      
      var $88 = HEAP[$result];
      HEAP[$88] = $86;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $97 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $98 = HEAP[$result];
      FUNCTION_TABLE[$97]($98);
      __label__ = 25;
      break;
     case 25:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 26:
      
      
      
      
      var $103 = HEAP[$result] + 12 + HEAP[$i] * 4;
      var $104 = HEAP[$copyable];
      HEAP[$103] = $104;
      
      var $106 = HEAP[$i] + 1;
      HEAP[$i] = $106;
      __label__ = 27;
      break;
     case 27:
      
      
      
      if (HEAP[$i] < HEAP[$n]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      var $110 = HEAP[$result];
      HEAP[$0] = $110;
      __label__ = 29;
      break;
     case 29:
      var $111 = HEAP[$0];
      HEAP[$retval] = $111;
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
  function _cycle_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $it = __stackBase__ + 20;
      var $iterable = __stackBase__ + 24;
      var $saved = __stackBase__ + 28;
      var $lz = __stackBase__ + 32;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      
      if (HEAP[$type_addr] == _cycle_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[$kwds_addr];
      var $4 = __PyArg_NoKeywords(__str16, $3);
      
      if ($4 == 0) {
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
      var $6 = HEAP[$args_addr];
      var $7 = _PyArg_UnpackTuple($6, __str17, 1, 1, allocate([ $iterable, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 5:
      var $9 = HEAP[$iterable];
      var $10 = _PyObject_GetIter($9);
      HEAP[$it] = $10;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 7:
      var $13 = _PyList_New(0);
      HEAP[$saved] = $13;
      
      
      if (HEAP[$saved] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $19 = HEAP[HEAP[$it]] - 1;
      
      var $21 = HEAP[$it];
      HEAP[$21] = $19;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $31 = HEAP[$it];
      FUNCTION_TABLE[$30]($31);
      __label__ = 10;
      break;
     case 10:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 11:
      
      
      var $34 = HEAP[HEAP[$type_addr] + 152];
      var $35 = HEAP[$type_addr];
      var $36 = FUNCTION_TABLE[$34]($35, 0);
      var $37 = $36;
      HEAP[$lz] = $37;
      
      
      if (HEAP[$lz] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 12:
      
      
      
      var $43 = HEAP[HEAP[$it]] - 1;
      
      var $45 = HEAP[$it];
      HEAP[$45] = $43;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $55 = HEAP[$it];
      FUNCTION_TABLE[$54]($55);
      __label__ = 14;
      break;
     case 14:
      
      
      
      var $59 = HEAP[HEAP[$saved]] - 1;
      
      var $61 = HEAP[$saved];
      HEAP[$61] = $59;
      
      
      
      
      if (HEAP[HEAP[$saved]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $70 = HEAP[HEAP[HEAP[$saved] + 4] + 24];
      var $71 = HEAP[$saved];
      FUNCTION_TABLE[$70]($71);
      __label__ = 16;
      break;
     case 16:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 17:
      
      var $73 = HEAP[$lz] + 8;
      var $74 = HEAP[$it];
      HEAP[$73] = $74;
      
      var $76 = HEAP[$lz] + 12;
      var $77 = HEAP[$saved];
      HEAP[$76] = $77;
      
      var $79 = HEAP[$lz] + 16;
      HEAP[$79] = 0;
      
      var $81 = HEAP[$lz];
      HEAP[$0] = $81;
      __label__ = 18;
      break;
     case 18:
      var $82 = HEAP[$0];
      HEAP[$retval] = $82;
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
  function _cycle_dealloc($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      
      HEAP[$lz_addr] = $lz;
      
      var $1 = HEAP[$lz_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$lz_addr] + 12];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 12] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$lz_addr] + 12];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$lz_addr] + 8];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 8] + 4] + 24];
      
      
      var $49 = HEAP[HEAP[$lz_addr] + 8];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$lz_addr] + 4] + 160];
      
      var $57 = HEAP[$lz_addr];
      FUNCTION_TABLE[$55]($57);
      __label__ = 7;
      break;
     case 7:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cycle_traverse($lz, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      
      HEAP[$lz_addr] = $lz;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$lz_addr] + 8];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$lz_addr] + 12];
      var $21 = HEAP[$visit_addr];
      var $22 = HEAP[$arg_addr];
      var $23 = FUNCTION_TABLE[$21]($20, $22);
      HEAP[$vret4] = $23;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = HEAP[$vret4];
      HEAP[$0] = $26;
      __label__ = 7;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
      __label__ = 8;
      break;
     case 8:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cycle_next($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $item = __stackBase__ + 12;
      var $it = __stackBase__ + 16;
      var $tmp = __stackBase__ + 20;
      
      HEAP[$lz_addr] = $lz;
      __label__ = 1;
      break;
     case 1:
      
      
      var $3 = HEAP[HEAP[$lz_addr] + 8];
      var $4 = _PyIter_Next($3);
      HEAP[$item] = $4;
      
      
      if (HEAP[$item] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 16] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      var $13 = HEAP[HEAP[$lz_addr] + 12];
      var $14 = HEAP[$item];
      var $15 = _PyList_Append($13, $14);
      
      if ($15 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $20 = HEAP[HEAP[$item]] - 1;
      
      var $22 = HEAP[$item];
      HEAP[$22] = $20;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $31 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $32 = HEAP[$item];
      FUNCTION_TABLE[$31]($32);
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 7:
      var $33 = HEAP[$item];
      HEAP[$0] = $33;
      __label__ = 19;
      break;
     case 8:
      var $34 = _PyErr_Occurred();
      
      if ($34 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      var $36 = HEAP[_PyExc_StopIteration];
      var $37 = _PyErr_ExceptionMatches($36);
      
      if ($37 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      _PyErr_Clear();
      __label__ = 12;
      break;
     case 11:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 12:
      
      
      var $41 = HEAP[HEAP[$lz_addr] + 12];
      var $42 = _PyList_Size($41);
      
      if ($42 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 14:
      
      
      var $46 = HEAP[HEAP[$lz_addr] + 12];
      var $47 = _PyObject_GetIter($46);
      HEAP[$it] = $47;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 16:
      
      
      var $52 = HEAP[HEAP[$lz_addr] + 8];
      HEAP[$tmp] = $52;
      
      var $54 = HEAP[$lz_addr] + 8;
      var $55 = HEAP[$it];
      HEAP[$54] = $55;
      
      var $57 = HEAP[$lz_addr] + 16;
      HEAP[$57] = 1;
      
      
      
      var $61 = HEAP[HEAP[$tmp]] - 1;
      
      var $63 = HEAP[$tmp];
      HEAP[$63] = $61;
      
      
      
      
      if (HEAP[HEAP[$tmp]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $72 = HEAP[HEAP[HEAP[$tmp] + 4] + 24];
      var $73 = HEAP[$tmp];
      FUNCTION_TABLE[$72]($73);
      __label__ = 18;
      break;
     case 18:
      __label__ = 1;
      break;
     case 19:
      var $74 = HEAP[$0];
      HEAP[$retval] = $74;
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
  function _dropwhile_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $func = __stackBase__ + 20;
      var $seq = __stackBase__ + 24;
      var $it = __stackBase__ + 28;
      var $lz = __stackBase__ + 32;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      
      if (HEAP[$type_addr] == _dropwhile_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[$kwds_addr];
      var $4 = __PyArg_NoKeywords(__str19, $3);
      
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
      var $6 = HEAP[$args_addr];
      var $7 = _PyArg_UnpackTuple($6, __str20, 2, 2, allocate([ $func, 0, 0, 0, $seq, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
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
      var $9 = HEAP[$seq];
      var $10 = _PyObject_GetIter($9);
      HEAP[$it] = $10;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 7:
      
      
      var $15 = HEAP[HEAP[$type_addr] + 152];
      var $16 = HEAP[$type_addr];
      var $17 = FUNCTION_TABLE[$15]($16, 0);
      var $18 = $17;
      HEAP[$lz] = $18;
      
      
      if (HEAP[$lz] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $24 = HEAP[HEAP[$it]] - 1;
      
      var $26 = HEAP[$it];
      HEAP[$26] = $24;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $35 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $36 = HEAP[$it];
      FUNCTION_TABLE[$35]($36);
      __label__ = 10;
      break;
     case 10:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 11:
      
      
      
      var $40 = HEAP[HEAP[$func]] + 1;
      var $41 = HEAP[$func];
      HEAP[$41] = $40;
      var $42 = HEAP[$func];
      
      var $44 = HEAP[$lz] + 8;
      HEAP[$44] = $42;
      
      var $46 = HEAP[$lz] + 12;
      var $47 = HEAP[$it];
      HEAP[$46] = $47;
      
      var $49 = HEAP[$lz] + 16;
      HEAP[$49] = 0;
      
      var $51 = HEAP[$lz];
      HEAP[$0] = $51;
      __label__ = 12;
      break;
     case 12:
      var $52 = HEAP[$0];
      HEAP[$retval] = $52;
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
  function _dropwhile_dealloc($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      
      HEAP[$lz_addr] = $lz;
      
      var $1 = HEAP[$lz_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$lz_addr] + 8];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 8] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$lz_addr] + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$lz_addr] + 12];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 12] + 4] + 24];
      
      
      var $49 = HEAP[HEAP[$lz_addr] + 12];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$lz_addr] + 4] + 160];
      
      var $57 = HEAP[$lz_addr];
      FUNCTION_TABLE[$55]($57);
      __label__ = 7;
      break;
     case 7:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dropwhile_traverse($lz, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      
      HEAP[$lz_addr] = $lz;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$lz_addr] + 12];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$lz_addr] + 8];
      var $21 = HEAP[$visit_addr];
      var $22 = HEAP[$arg_addr];
      var $23 = FUNCTION_TABLE[$21]($20, $22);
      HEAP[$vret4] = $23;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = HEAP[$vret4];
      HEAP[$0] = $26;
      __label__ = 7;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
      __label__ = 8;
      break;
     case 8:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dropwhile_next($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $item = __stackBase__ + 12;
      var $good = __stackBase__ + 16;
      var $it = __stackBase__ + 20;
      var $ok = __stackBase__ + 24;
      var $iternext = __stackBase__ + 28;
      
      HEAP[$lz_addr] = $lz;
      
      
      var $3 = HEAP[HEAP[$lz_addr] + 12];
      HEAP[$it] = $3;
      
      
      
      
      var $8 = HEAP[HEAP[HEAP[$it] + 4] + 112];
      HEAP[$iternext] = $8;
      __label__ = 1;
      break;
     case 1:
      var $9 = HEAP[$iternext];
      var $10 = HEAP[$it];
      var $11 = FUNCTION_TABLE[$9]($10);
      HEAP[$item] = $11;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 16] == 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $18 = HEAP[$item];
      HEAP[$0] = $18;
      __label__ = 16;
      break;
     case 5:
      
      
      var $21 = HEAP[HEAP[$lz_addr] + 8];
      var $22 = HEAP[$item];
      var $23 = _PyObject_CallFunctionObjArgs($21, allocate([ $22, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$good] = $23;
      
      
      if (HEAP[$good] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $29 = HEAP[HEAP[$item]] - 1;
      
      var $31 = HEAP[$item];
      HEAP[$31] = $29;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $40 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $41 = HEAP[$item];
      FUNCTION_TABLE[$40]($41);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 9:
      var $42 = HEAP[$good];
      var $43 = _PyObject_IsTrue($42);
      HEAP[$ok] = $43;
      
      
      
      var $47 = HEAP[HEAP[$good]] - 1;
      
      var $49 = HEAP[$good];
      HEAP[$49] = $47;
      
      
      
      
      if (HEAP[HEAP[$good]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $58 = HEAP[HEAP[HEAP[$good] + 4] + 24];
      var $59 = HEAP[$good];
      FUNCTION_TABLE[$58]($59);
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      var $63 = HEAP[$lz_addr] + 16;
      HEAP[$63] = 1;
      var $64 = HEAP[$item];
      HEAP[$0] = $64;
      __label__ = 16;
      break;
     case 13:
      
      
      
      var $68 = HEAP[HEAP[$item]] - 1;
      
      var $70 = HEAP[$item];
      HEAP[$70] = $68;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $79 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $80 = HEAP[$item];
      FUNCTION_TABLE[$79]($80);
      __label__ = 15;
      break;
     case 15:
      __label__ = 1;
      break;
     case 16:
      var $81 = HEAP[$0];
      HEAP[$retval] = $81;
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
  function _takewhile_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $func = __stackBase__ + 20;
      var $seq = __stackBase__ + 24;
      var $it = __stackBase__ + 28;
      var $lz = __stackBase__ + 32;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      
      if (HEAP[$type_addr] == _takewhile_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[$kwds_addr];
      var $4 = __PyArg_NoKeywords(__str22, $3);
      
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
      var $6 = HEAP[$args_addr];
      var $7 = _PyArg_UnpackTuple($6, __str23, 2, 2, allocate([ $func, 0, 0, 0, $seq, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
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
      var $9 = HEAP[$seq];
      var $10 = _PyObject_GetIter($9);
      HEAP[$it] = $10;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 7:
      
      
      var $15 = HEAP[HEAP[$type_addr] + 152];
      var $16 = HEAP[$type_addr];
      var $17 = FUNCTION_TABLE[$15]($16, 0);
      var $18 = $17;
      HEAP[$lz] = $18;
      
      
      if (HEAP[$lz] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $24 = HEAP[HEAP[$it]] - 1;
      
      var $26 = HEAP[$it];
      HEAP[$26] = $24;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $35 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $36 = HEAP[$it];
      FUNCTION_TABLE[$35]($36);
      __label__ = 10;
      break;
     case 10:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 11:
      
      
      
      var $40 = HEAP[HEAP[$func]] + 1;
      var $41 = HEAP[$func];
      HEAP[$41] = $40;
      var $42 = HEAP[$func];
      
      var $44 = HEAP[$lz] + 8;
      HEAP[$44] = $42;
      
      var $46 = HEAP[$lz] + 12;
      var $47 = HEAP[$it];
      HEAP[$46] = $47;
      
      var $49 = HEAP[$lz] + 16;
      HEAP[$49] = 0;
      
      var $51 = HEAP[$lz];
      HEAP[$0] = $51;
      __label__ = 12;
      break;
     case 12:
      var $52 = HEAP[$0];
      HEAP[$retval] = $52;
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
  function _takewhile_dealloc($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      
      HEAP[$lz_addr] = $lz;
      
      var $1 = HEAP[$lz_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$lz_addr] + 8];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 8] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$lz_addr] + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$lz_addr] + 12];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 12] + 4] + 24];
      
      
      var $49 = HEAP[HEAP[$lz_addr] + 12];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$lz_addr] + 4] + 160];
      
      var $57 = HEAP[$lz_addr];
      FUNCTION_TABLE[$55]($57);
      __label__ = 7;
      break;
     case 7:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _takewhile_traverse($lz, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      
      HEAP[$lz_addr] = $lz;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$lz_addr] + 12];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$lz_addr] + 8];
      var $21 = HEAP[$visit_addr];
      var $22 = HEAP[$arg_addr];
      var $23 = FUNCTION_TABLE[$21]($20, $22);
      HEAP[$vret4] = $23;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = HEAP[$vret4];
      HEAP[$0] = $26;
      __label__ = 7;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
      __label__ = 8;
      break;
     case 8:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _takewhile_next($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $item = __stackBase__ + 12;
      var $good = __stackBase__ + 16;
      var $it = __stackBase__ + 20;
      var $ok = __stackBase__ + 24;
      
      HEAP[$lz_addr] = $lz;
      
      
      var $3 = HEAP[HEAP[$lz_addr] + 12];
      HEAP[$it] = $3;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 16] == 1) {
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
      
      
      
      
      var $12 = HEAP[HEAP[HEAP[$it] + 4] + 112];
      var $13 = HEAP[$it];
      var $14 = FUNCTION_TABLE[$12]($13);
      HEAP[$item] = $14;
      
      
      if (HEAP[$item] == 0) {
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
      
      
      var $19 = HEAP[HEAP[$lz_addr] + 8];
      var $20 = HEAP[$item];
      var $21 = _PyObject_CallFunctionObjArgs($19, allocate([ $20, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$good] = $21;
      
      
      if (HEAP[$good] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $27 = HEAP[HEAP[$item]] - 1;
      
      var $29 = HEAP[$item];
      HEAP[$29] = $27;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $39 = HEAP[$item];
      FUNCTION_TABLE[$38]($39);
      __label__ = 7;
      break;
     case 7:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 8:
      var $40 = HEAP[$good];
      var $41 = _PyObject_IsTrue($40);
      HEAP[$ok] = $41;
      
      
      
      var $45 = HEAP[HEAP[$good]] - 1;
      
      var $47 = HEAP[$good];
      HEAP[$47] = $45;
      
      
      
      
      if (HEAP[HEAP[$good]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $56 = HEAP[HEAP[HEAP[$good] + 4] + 24];
      var $57 = HEAP[$good];
      FUNCTION_TABLE[$56]($57);
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$ok] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $60 = HEAP[$item];
      HEAP[$0] = $60;
      __label__ = 15;
      break;
     case 12:
      
      
      
      var $64 = HEAP[HEAP[$item]] - 1;
      
      var $66 = HEAP[$item];
      HEAP[$66] = $64;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $75 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $76 = HEAP[$item];
      FUNCTION_TABLE[$75]($76);
      __label__ = 14;
      break;
     case 14:
      
      var $78 = HEAP[$lz_addr] + 16;
      HEAP[$78] = 1;
      HEAP[$0] = 0;
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
  function _islice_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 60;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $seq = __stackBase__ + 20;
      var $start = __stackBase__ + 24;
      var $stop = __stackBase__ + 28;
      var $step = __stackBase__ + 32;
      var $it = __stackBase__ + 36;
      var $a1 = __stackBase__ + 40;
      var $a2 = __stackBase__ + 44;
      var $a3 = __stackBase__ + 48;
      var $numargs = __stackBase__ + 52;
      var $lz = __stackBase__ + 56;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$start] = 0;
      HEAP[$stop] = -1;
      HEAP[$step] = 1;
      HEAP[$a1] = 0;
      HEAP[$a2] = 0;
      HEAP[$a3] = 0;
      
      
      if (HEAP[$type_addr] == _islice_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[$kwds_addr];
      var $4 = __PyArg_NoKeywords(__str25, $3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 40;
      break;
     case 3:
      var $6 = HEAP[$args_addr];
      var $7 = _PyArg_UnpackTuple($6, __str26, 2, 4, allocate([ $seq, 0, 0, 0, $a1, 0, 0, 0, $a2, 0, 0, 0, $a3, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 40;
      break;
     case 5:
      var $9 = HEAP[$args_addr];
      var $10 = _PyTuple_Size($9);
      HEAP[$numargs] = $10;
      
      
      if (HEAP[$numargs] == 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 6:
      
      
      if (HEAP[$a1] != __Py_NoneStruct) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 7:
      var $15 = HEAP[$a1];
      var $16 = _PyInt_AsSsize_t($15);
      HEAP[$stop] = $16;
      
      var $18 = HEAP[$stop] == -1;
      if ($18) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      var $19 = _PyErr_Occurred();
      
      if ($19 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      _PyErr_Clear();
      __label__ = 10;
      break;
     case 10:
      var $21 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($21, __str27);
      HEAP[$0] = 0;
      __label__ = 40;
      break;
     case 11:
      __label__ = 22;
      break;
     case 12:
      
      
      if (HEAP[$a1] != __Py_NoneStruct) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $24 = HEAP[$a1];
      var $25 = _PyInt_AsSsize_t($24);
      HEAP[$start] = $25;
      __label__ = 14;
      break;
     case 14:
      
      var $27 = HEAP[$start] == -1;
      if ($27) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      var $28 = _PyErr_Occurred();
      
      if ($28 != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      _PyErr_Clear();
      __label__ = 17;
      break;
     case 17:
      
      
      if (HEAP[$a2] != __Py_NoneStruct) {
        __label__ = 18;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 18:
      var $32 = HEAP[$a2];
      var $33 = _PyInt_AsSsize_t($32);
      HEAP[$stop] = $33;
      
      var $35 = HEAP[$stop] == -1;
      if ($35) {
        __label__ = 19;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 19:
      var $36 = _PyErr_Occurred();
      
      if ($36 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      _PyErr_Clear();
      __label__ = 21;
      break;
     case 21:
      var $38 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($38, __str27);
      HEAP[$0] = 0;
      __label__ = 40;
      break;
     case 22:
      
      
      if (HEAP[$start] < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      var $42 = HEAP[$stop] < -1;
      if ($42) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      var $43 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($43, __str28);
      HEAP[$0] = 0;
      __label__ = 40;
      break;
     case 25:
      
      
      if (HEAP[$a3] != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 26:
      
      
      if (HEAP[$a3] != __Py_NoneStruct) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $48 = HEAP[$a3];
      var $49 = _PyInt_AsSsize_t($48);
      HEAP[$step] = $49;
      __label__ = 28;
      break;
     case 28:
      
      var $51 = HEAP[$step] == -1;
      if ($51) {
        __label__ = 29;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 29:
      var $52 = _PyErr_Occurred();
      
      if ($52 != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      _PyErr_Clear();
      __label__ = 31;
      break;
     case 31:
      
      
      if (HEAP[$step] <= 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      var $56 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($56, __str29);
      HEAP[$0] = 0;
      __label__ = 40;
      break;
     case 33:
      var $57 = HEAP[$seq];
      var $58 = _PyObject_GetIter($57);
      HEAP[$it] = $58;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      HEAP[$0] = 0;
      __label__ = 40;
      break;
     case 35:
      
      
      var $63 = HEAP[HEAP[$type_addr] + 152];
      var $64 = HEAP[$type_addr];
      var $65 = FUNCTION_TABLE[$63]($64, 0);
      var $66 = $65;
      HEAP[$lz] = $66;
      
      
      if (HEAP[$lz] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 36:
      
      
      
      var $72 = HEAP[HEAP[$it]] - 1;
      
      var $74 = HEAP[$it];
      HEAP[$74] = $72;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $83 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $84 = HEAP[$it];
      FUNCTION_TABLE[$83]($84);
      __label__ = 38;
      break;
     case 38:
      HEAP[$0] = 0;
      __label__ = 40;
      break;
     case 39:
      
      var $86 = HEAP[$lz] + 8;
      var $87 = HEAP[$it];
      HEAP[$86] = $87;
      
      var $89 = HEAP[$lz] + 12;
      var $90 = HEAP[$start];
      HEAP[$89] = $90;
      
      var $92 = HEAP[$lz] + 16;
      var $93 = HEAP[$stop];
      HEAP[$92] = $93;
      
      var $95 = HEAP[$lz] + 20;
      var $96 = HEAP[$step];
      HEAP[$95] = $96;
      
      var $98 = HEAP[$lz] + 24;
      HEAP[$98] = 0;
      
      var $100 = HEAP[$lz];
      HEAP[$0] = $100;
      __label__ = 40;
      break;
     case 40:
      var $101 = HEAP[$0];
      HEAP[$retval] = $101;
      __label__ = 41;
      break;
     case 41:
      var $retval40 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval40;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _islice_dealloc($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      
      HEAP[$lz_addr] = $lz;
      
      var $1 = HEAP[$lz_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$lz_addr] + 8];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 8] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$lz_addr] + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      var $31 = HEAP[HEAP[HEAP[$lz_addr] + 4] + 160];
      
      var $33 = HEAP[$lz_addr];
      FUNCTION_TABLE[$31]($33);
      __label__ = 4;
      break;
     case 4:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _islice_traverse($lz, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      
      HEAP[$lz_addr] = $lz;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$lz_addr] + 8];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 4;
      break;
     case 3:
      HEAP[$0] = 0;
      __label__ = 4;
      break;
     case 4:
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
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
  function _islice_next($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $item = __stackBase__ + 12;
      var $it = __stackBase__ + 16;
      var $stop = __stackBase__ + 20;
      var $oldnext = __stackBase__ + 24;
      var $iternext = __stackBase__ + 28;
      
      HEAP[$lz_addr] = $lz;
      
      
      var $3 = HEAP[HEAP[$lz_addr] + 8];
      HEAP[$it] = $3;
      
      
      var $6 = HEAP[HEAP[$lz_addr] + 16];
      HEAP[$stop] = $6;
      
      
      
      
      var $11 = HEAP[HEAP[HEAP[$it] + 4] + 112];
      HEAP[$iternext] = $11;
      __label__ = 6;
      break;
     case 1:
      var $12 = HEAP[$iternext];
      var $13 = HEAP[$it];
      var $14 = FUNCTION_TABLE[$12]($13);
      HEAP[$item] = $14;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 3:
      
      
      
      var $20 = HEAP[HEAP[$item]] - 1;
      
      var $22 = HEAP[$item];
      HEAP[$22] = $20;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $31 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $32 = HEAP[$item];
      FUNCTION_TABLE[$31]($32);
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $36 = HEAP[HEAP[$lz_addr] + 24] + 1;
      
      var $38 = HEAP[$lz_addr] + 24;
      HEAP[$38] = $36;
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 24] < HEAP[HEAP[$lz_addr] + 12]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      var $47 = HEAP[$stop] != -1;
      if ($47) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 24] >= HEAP[$stop]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 10:
      var $53 = HEAP[$iternext];
      var $54 = HEAP[$it];
      var $55 = FUNCTION_TABLE[$53]($54);
      HEAP[$item] = $55;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 12:
      
      
      
      var $61 = HEAP[HEAP[$lz_addr] + 24] + 1;
      
      var $63 = HEAP[$lz_addr] + 24;
      HEAP[$63] = $61;
      
      
      var $66 = HEAP[HEAP[$lz_addr] + 12];
      HEAP[$oldnext] = $66;
      
      
      
      
      
      
      var $73 = HEAP[HEAP[$lz_addr] + 12] + HEAP[HEAP[$lz_addr] + 20];
      
      var $75 = HEAP[$lz_addr] + 12;
      HEAP[$75] = $73;
      
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] < HEAP[$oldnext]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      var $82 = HEAP[$stop] == -1;
      if ($82) {
        __label__ = 16;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] > HEAP[$stop]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      var $89 = HEAP[$lz_addr] + 12;
      var $90 = HEAP[$stop];
      HEAP[$89] = $90;
      __label__ = 16;
      break;
     case 16:
      var $91 = HEAP[$item];
      HEAP[$0] = $91;
      __label__ = 17;
      break;
     case 17:
      var $92 = HEAP[$0];
      HEAP[$retval] = $92;
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
  function _starmap_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $func = __stackBase__ + 20;
      var $seq = __stackBase__ + 24;
      var $it = __stackBase__ + 28;
      var $lz = __stackBase__ + 32;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      
      if (HEAP[$type_addr] == _starmap_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[$kwds_addr];
      var $4 = __PyArg_NoKeywords(__str31, $3);
      
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
      var $6 = HEAP[$args_addr];
      var $7 = _PyArg_UnpackTuple($6, __str32, 2, 2, allocate([ $func, 0, 0, 0, $seq, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
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
      var $9 = HEAP[$seq];
      var $10 = _PyObject_GetIter($9);
      HEAP[$it] = $10;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 7:
      
      
      var $15 = HEAP[HEAP[$type_addr] + 152];
      var $16 = HEAP[$type_addr];
      var $17 = FUNCTION_TABLE[$15]($16, 0);
      var $18 = $17;
      HEAP[$lz] = $18;
      
      
      if (HEAP[$lz] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $24 = HEAP[HEAP[$it]] - 1;
      
      var $26 = HEAP[$it];
      HEAP[$26] = $24;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $35 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $36 = HEAP[$it];
      FUNCTION_TABLE[$35]($36);
      __label__ = 10;
      break;
     case 10:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 11:
      
      
      
      var $40 = HEAP[HEAP[$func]] + 1;
      var $41 = HEAP[$func];
      HEAP[$41] = $40;
      var $42 = HEAP[$func];
      
      var $44 = HEAP[$lz] + 8;
      HEAP[$44] = $42;
      
      var $46 = HEAP[$lz] + 12;
      var $47 = HEAP[$it];
      HEAP[$46] = $47;
      
      var $49 = HEAP[$lz];
      HEAP[$0] = $49;
      __label__ = 12;
      break;
     case 12:
      var $50 = HEAP[$0];
      HEAP[$retval] = $50;
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
  function _starmap_dealloc($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      
      HEAP[$lz_addr] = $lz;
      
      var $1 = HEAP[$lz_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$lz_addr] + 8];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 8] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$lz_addr] + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$lz_addr] + 12];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 12] + 4] + 24];
      
      
      var $49 = HEAP[HEAP[$lz_addr] + 12];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$lz_addr] + 4] + 160];
      
      var $57 = HEAP[$lz_addr];
      FUNCTION_TABLE[$55]($57);
      __label__ = 7;
      break;
     case 7:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _starmap_traverse($lz, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      
      HEAP[$lz_addr] = $lz;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$lz_addr] + 12];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$lz_addr] + 8];
      var $21 = HEAP[$visit_addr];
      var $22 = HEAP[$arg_addr];
      var $23 = FUNCTION_TABLE[$21]($20, $22);
      HEAP[$vret4] = $23;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = HEAP[$vret4];
      HEAP[$0] = $26;
      __label__ = 7;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
      __label__ = 8;
      break;
     case 8:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _starmap_next($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $args = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      var $it = __stackBase__ + 20;
      var $newargs = __stackBase__ + 24;
      
      HEAP[$lz_addr] = $lz;
      
      
      var $3 = HEAP[HEAP[$lz_addr] + 12];
      HEAP[$it] = $3;
      
      
      
      
      var $8 = HEAP[HEAP[HEAP[$it] + 4] + 112];
      var $9 = HEAP[$it];
      var $10 = FUNCTION_TABLE[$8]($9);
      HEAP[$args] = $10;
      
      
      if (HEAP[$args] == 0) {
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
      
      
      
      
      if (HEAP[HEAP[$args] + 4] != _PyTuple_Type) {
        __label__ = 3;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 3:
      var $17 = HEAP[$args];
      var $18 = _PySequence_Tuple($17);
      HEAP[$newargs] = $18;
      
      
      
      var $22 = HEAP[HEAP[$args]] - 1;
      
      var $24 = HEAP[$args];
      HEAP[$24] = $22;
      
      
      
      
      if (HEAP[HEAP[$args]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $33 = HEAP[HEAP[HEAP[$args] + 4] + 24];
      var $34 = HEAP[$args];
      FUNCTION_TABLE[$33]($34);
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[$newargs] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 7:
      var $37 = HEAP[$newargs];
      HEAP[$args] = $37;
      __label__ = 8;
      break;
     case 8:
      
      
      var $40 = HEAP[HEAP[$lz_addr] + 8];
      var $41 = HEAP[$args];
      var $42 = _PyObject_Call($40, $41, 0);
      HEAP[$result] = $42;
      
      
      
      var $46 = HEAP[HEAP[$args]] - 1;
      
      var $48 = HEAP[$args];
      HEAP[$48] = $46;
      
      
      
      
      if (HEAP[HEAP[$args]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[$args] + 4] + 24];
      var $58 = HEAP[$args];
      FUNCTION_TABLE[$57]($58);
      __label__ = 10;
      break;
     case 10:
      var $59 = HEAP[$result];
      HEAP[$0] = $59;
      __label__ = 11;
      break;
     case 11:
      var $60 = HEAP[$0];
      HEAP[$retval] = $60;
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
  function _imap_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $it = __stackBase__ + 20;
      var $iters = __stackBase__ + 24;
      var $func = __stackBase__ + 28;
      var $lz = __stackBase__ + 32;
      var $numargs = __stackBase__ + 36;
      var $i = __stackBase__ + 40;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      
      if (HEAP[$type_addr] == _imap_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[$kwds_addr];
      var $4 = __PyArg_NoKeywords(__str34, $3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 3:
      var $6 = HEAP[$args_addr];
      var $7 = _PyTuple_Size($6);
      HEAP[$numargs] = $7;
      
      
      if (HEAP[$numargs] <= 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $10 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($10, __str35);
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 5:
      
      var $12 = HEAP[$numargs] - 1;
      var $13 = _PyTuple_New($12);
      HEAP[$iters] = $13;
      
      
      if (HEAP[$iters] == 0) {
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
      HEAP[$i] = 1;
      __label__ = 13;
      break;
     case 8:
      
      
      
      
      
      var $21 = HEAP[HEAP[$args_addr] + 12 + HEAP[$i] * 4];
      var $22 = _PyObject_GetIter($21);
      HEAP[$it] = $22;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      var $28 = HEAP[HEAP[$iters]] - 1;
      
      var $30 = HEAP[$iters];
      HEAP[$30] = $28;
      
      
      
      
      if (HEAP[HEAP[$iters]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $39 = HEAP[HEAP[HEAP[$iters] + 4] + 24];
      var $40 = HEAP[$iters];
      FUNCTION_TABLE[$39]($40);
      __label__ = 11;
      break;
     case 11:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 12:
      
      
      
      
      
      var $46 = HEAP[$iters] + 12 + (HEAP[$i] - 1) * 4;
      var $47 = HEAP[$it];
      HEAP[$46] = $47;
      
      var $49 = HEAP[$i] + 1;
      HEAP[$i] = $49;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (HEAP[$i] < HEAP[$numargs]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      var $55 = HEAP[HEAP[$type_addr] + 152];
      var $56 = HEAP[$type_addr];
      var $57 = FUNCTION_TABLE[$55]($56, 0);
      var $58 = $57;
      HEAP[$lz] = $58;
      
      
      if (HEAP[$lz] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      
      
      
      var $64 = HEAP[HEAP[$iters]] - 1;
      
      var $66 = HEAP[$iters];
      HEAP[$66] = $64;
      
      
      
      
      if (HEAP[HEAP[$iters]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $75 = HEAP[HEAP[HEAP[$iters] + 4] + 24];
      var $76 = HEAP[$iters];
      FUNCTION_TABLE[$75]($76);
      __label__ = 17;
      break;
     case 17:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 18:
      
      var $78 = HEAP[$lz] + 8;
      var $79 = HEAP[$iters];
      HEAP[$78] = $79;
      
      
      
      
      var $84 = HEAP[HEAP[$args_addr] + 12];
      HEAP[$func] = $84;
      
      
      
      var $88 = HEAP[HEAP[$func]] + 1;
      
      var $90 = HEAP[$func];
      HEAP[$90] = $88;
      
      var $92 = HEAP[$lz] + 12;
      var $93 = HEAP[$func];
      HEAP[$92] = $93;
      
      var $95 = HEAP[$lz];
      HEAP[$0] = $95;
      __label__ = 19;
      break;
     case 19:
      var $96 = HEAP[$0];
      HEAP[$retval] = $96;
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
  function _imap_dealloc($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      
      HEAP[$lz_addr] = $lz;
      
      var $1 = HEAP[$lz_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$lz_addr] + 8];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 8] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$lz_addr] + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$lz_addr] + 12];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 12] + 4] + 24];
      
      
      var $49 = HEAP[HEAP[$lz_addr] + 12];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$lz_addr] + 4] + 160];
      
      var $57 = HEAP[$lz_addr];
      FUNCTION_TABLE[$55]($57);
      __label__ = 7;
      break;
     case 7:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imap_traverse($lz, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      
      HEAP[$lz_addr] = $lz;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$lz_addr] + 8];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$lz_addr] + 12];
      var $21 = HEAP[$visit_addr];
      var $22 = HEAP[$arg_addr];
      var $23 = FUNCTION_TABLE[$21]($20, $22);
      HEAP[$vret4] = $23;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = HEAP[$vret4];
      HEAP[$0] = $26;
      __label__ = 7;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
      __label__ = 8;
      break;
     case 8:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imap_next($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $val = __stackBase__ + 12;
      var $argtuple = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      var $numargs = __stackBase__ + 24;
      var $i = __stackBase__ + 28;
      
      HEAP[$lz_addr] = $lz;
      
      
      var $3 = HEAP[HEAP[$lz_addr] + 8];
      var $4 = _PyTuple_Size($3);
      HEAP[$numargs] = $4;
      var $5 = HEAP[$numargs];
      var $6 = _PyTuple_New($5);
      HEAP[$argtuple] = $6;
      
      
      if (HEAP[$argtuple] == 0) {
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
      HEAP[$i] = 0;
      __label__ = 8;
      break;
     case 3:
      
      
      
      
      
      
      
      var $16 = HEAP[HEAP[HEAP[$lz_addr] + 8] + 12 + HEAP[$i] * 4];
      var $17 = _PyIter_Next($16);
      HEAP[$val] = $17;
      
      
      if (HEAP[$val] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $23 = HEAP[HEAP[$argtuple]] - 1;
      
      var $25 = HEAP[$argtuple];
      HEAP[$25] = $23;
      
      
      
      
      if (HEAP[HEAP[$argtuple]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $34 = HEAP[HEAP[HEAP[$argtuple] + 4] + 24];
      var $35 = HEAP[$argtuple];
      FUNCTION_TABLE[$34]($35);
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 7:
      
      
      
      
      var $40 = HEAP[$argtuple] + 12 + HEAP[$i] * 4;
      var $41 = HEAP[$val];
      HEAP[$40] = $41;
      
      var $43 = HEAP[$i] + 1;
      HEAP[$i] = $43;
      __label__ = 8;
      break;
     case 8:
      
      
      
      if (HEAP[$i] < HEAP[$numargs]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] == __Py_NoneStruct) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $51 = HEAP[$argtuple];
      HEAP[$0] = $51;
      __label__ = 14;
      break;
     case 11:
      
      
      var $54 = HEAP[HEAP[$lz_addr] + 12];
      var $55 = HEAP[$argtuple];
      var $56 = _PyObject_Call($54, $55, 0);
      HEAP[$result] = $56;
      
      
      
      var $60 = HEAP[HEAP[$argtuple]] - 1;
      
      var $62 = HEAP[$argtuple];
      HEAP[$62] = $60;
      
      
      
      
      if (HEAP[HEAP[$argtuple]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $71 = HEAP[HEAP[HEAP[$argtuple] + 4] + 24];
      var $72 = HEAP[$argtuple];
      FUNCTION_TABLE[$71]($72);
      __label__ = 13;
      break;
     case 13:
      var $73 = HEAP[$result];
      HEAP[$0] = $73;
      __label__ = 14;
      break;
     case 14:
      var $74 = HEAP[$0];
      HEAP[$retval] = $74;
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
  function _chain_new_internal($type, $source) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $source_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $lz = __stackBase__ + 16;
      
      HEAP[$type_addr] = $type;
      HEAP[$source_addr] = $source;
      
      
      var $3 = HEAP[HEAP[$type_addr] + 152];
      var $4 = HEAP[$type_addr];
      var $5 = FUNCTION_TABLE[$3]($4, 0);
      var $6 = $5;
      HEAP[$lz] = $6;
      
      
      if (HEAP[$lz] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      var $12 = HEAP[HEAP[$source_addr]] - 1;
      
      var $14 = HEAP[$source_addr];
      HEAP[$14] = $12;
      
      
      
      
      if (HEAP[HEAP[$source_addr]] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$source_addr] + 4] + 24];
      var $24 = HEAP[$source_addr];
      FUNCTION_TABLE[$23]($24);
      __label__ = 3;
      break;
     case 3:
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      
      var $26 = HEAP[$lz] + 8;
      var $27 = HEAP[$source_addr];
      HEAP[$26] = $27;
      
      var $29 = HEAP[$lz] + 12;
      HEAP[$29] = 0;
      
      var $31 = HEAP[$lz];
      HEAP[$0] = $31;
      __label__ = 5;
      break;
     case 5:
      var $32 = HEAP[$0];
      HEAP[$retval] = $32;
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
  function _chain_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $source = __stackBase__ + 20;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      
      if (HEAP[$type_addr] == _chain_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[$kwds_addr];
      var $4 = __PyArg_NoKeywords(__str37, $3);
      
      if ($4 == 0) {
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
      var $6 = HEAP[$args_addr];
      var $7 = _PyObject_GetIter($6);
      HEAP[$source] = $7;
      
      
      if (HEAP[$source] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 5:
      var $10 = HEAP[$type_addr];
      var $11 = HEAP[$source];
      var $12 = _chain_new_internal($10, $11);
      HEAP[$0] = $12;
      __label__ = 6;
      break;
     case 6:
      var $13 = HEAP[$0];
      HEAP[$retval] = $13;
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
  function _chain_new_from_iterable($type, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $source = __stackBase__ + 16;
      
      HEAP[$type_addr] = $type;
      HEAP[$arg_addr] = $arg;
      var $1 = HEAP[$arg_addr];
      var $2 = _PyObject_GetIter($1);
      HEAP[$source] = $2;
      
      
      if (HEAP[$source] == 0) {
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
      var $5 = HEAP[$type_addr];
      var $6 = HEAP[$source];
      var $7 = _chain_new_internal($5, $6);
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
  function _chain_dealloc($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      
      HEAP[$lz_addr] = $lz;
      
      var $1 = HEAP[$lz_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$lz_addr] + 12];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 12] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$lz_addr] + 12];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$lz_addr] + 8];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 8] + 4] + 24];
      
      
      var $49 = HEAP[HEAP[$lz_addr] + 8];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$lz_addr] + 4] + 160];
      
      var $57 = HEAP[$lz_addr];
      FUNCTION_TABLE[$55]($57);
      __label__ = 7;
      break;
     case 7:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _chain_traverse($lz, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      
      HEAP[$lz_addr] = $lz;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$lz_addr] + 8];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$lz_addr] + 12];
      var $21 = HEAP[$visit_addr];
      var $22 = HEAP[$arg_addr];
      var $23 = FUNCTION_TABLE[$21]($20, $22);
      HEAP[$vret4] = $23;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = HEAP[$vret4];
      HEAP[$0] = $26;
      __label__ = 7;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
      __label__ = 8;
      break;
     case 8:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _chain_next($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $item = __stackBase__ + 12;
      var $iterable = __stackBase__ + 16;
      var $_py_tmp = __stackBase__ + 20;
      var $_py_tmp12 = __stackBase__ + 24;
      var $_py_tmp23 = __stackBase__ + 28;
      
      HEAP[$lz_addr] = $lz;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] == 0) {
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
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 3:
      
      
      var $11 = HEAP[HEAP[$lz_addr] + 8];
      var $12 = _PyIter_Next($11);
      HEAP[$iterable] = $12;
      
      
      if (HEAP[$iterable] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      var $21 = HEAP[HEAP[$lz_addr] + 8];
      HEAP[$_py_tmp] = $21;
      
      var $23 = HEAP[$lz_addr] + 8;
      HEAP[$23] = 0;
      
      
      
      var $27 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $29 = HEAP[$_py_tmp];
      HEAP[$29] = $27;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $39 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$38]($39);
      __label__ = 7;
      break;
     case 7:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 8:
      var $40 = HEAP[$iterable];
      var $41 = _PyObject_GetIter($40);
      
      var $43 = HEAP[$lz_addr] + 12;
      HEAP[$43] = $41;
      
      
      
      var $47 = HEAP[HEAP[$iterable]] - 1;
      
      var $49 = HEAP[$iterable];
      HEAP[$49] = $47;
      
      
      
      
      if (HEAP[HEAP[$iterable]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $58 = HEAP[HEAP[HEAP[$iterable] + 4] + 24];
      var $59 = HEAP[$iterable];
      FUNCTION_TABLE[$58]($59);
      __label__ = 10;
      break;
     case 10:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      var $70 = HEAP[HEAP[$lz_addr] + 8];
      HEAP[$_py_tmp12] = $70;
      
      var $72 = HEAP[$lz_addr] + 8;
      HEAP[$72] = 0;
      
      
      
      var $76 = HEAP[HEAP[$_py_tmp12]] - 1;
      
      var $78 = HEAP[$_py_tmp12];
      HEAP[$78] = $76;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp12]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $87 = HEAP[HEAP[HEAP[$_py_tmp12] + 4] + 24];
      var $88 = HEAP[$_py_tmp12];
      FUNCTION_TABLE[$87]($88);
      __label__ = 14;
      break;
     case 14:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 15:
      
      
      var $91 = HEAP[HEAP[$lz_addr] + 12];
      var $92 = _PyIter_Next($91);
      HEAP[$item] = $92;
      
      
      if (HEAP[$item] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $95 = HEAP[$item];
      HEAP[$0] = $95;
      __label__ = 25;
      break;
     case 17:
      var $96 = _PyErr_Occurred();
      
      if ($96 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      var $98 = HEAP[_PyExc_StopIteration];
      var $99 = _PyErr_ExceptionMatches($98);
      
      if ($99 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      _PyErr_Clear();
      __label__ = 21;
      break;
     case 20:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 21:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      var $107 = HEAP[HEAP[$lz_addr] + 12];
      HEAP[$_py_tmp23] = $107;
      
      var $109 = HEAP[$lz_addr] + 12;
      HEAP[$109] = 0;
      
      
      
      var $113 = HEAP[HEAP[$_py_tmp23]] - 1;
      
      var $115 = HEAP[$_py_tmp23];
      HEAP[$115] = $113;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp23]] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $124 = HEAP[HEAP[HEAP[$_py_tmp23] + 4] + 24];
      var $125 = HEAP[$_py_tmp23];
      FUNCTION_TABLE[$124]($125);
      __label__ = 24;
      break;
     case 24:
      var $126 = HEAP[$lz_addr];
      var $127 = _chain_next($126);
      HEAP[$0] = $127;
      __label__ = 25;
      break;
     case 25:
      var $128 = HEAP[$0];
      HEAP[$retval] = $128;
      __label__ = 26;
      break;
     case 26:
      var $retval27 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _product_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 76;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 76);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $iftmp_73 = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $lz = __stackBase__ + 24;
      var $nargs = __stackBase__ + 28;
      var $npools = __stackBase__ + 32;
      var $repeat = __stackBase__ + 36;
      var $pools = __stackBase__ + 40;
      var $indices = __stackBase__ + 44;
      var $i = __stackBase__ + 48;
      var $kwlist = __stackBase__ + 52;
      var $tmpargs = __stackBase__ + 60;
      var $item = __stackBase__ + 64;
      var $pool = __stackBase__ + 68;
      var $pool25 = __stackBase__ + 72;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$repeat] = 1;
      HEAP[$pools] = 0;
      HEAP[$indices] = 0;
      
      
      if (HEAP[$kwds_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 1:
      
      var $4 = HEAP[_C_70_10224];
      HEAP[$kwlist] = $4;
      
      var $6 = HEAP[_C_70_10224 + 4];
      HEAP[$kwlist + 4] = $6;
      var $7 = _PyTuple_New(0);
      HEAP[$tmpargs] = $7;
      
      
      if (HEAP[$tmpargs] == 0) {
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
      var $10 = HEAP[$tmpargs];
      var $11 = HEAP[$kwds_addr];
      var $kwlist3 = $kwlist;
      var $12 = _PyArg_ParseTupleAndKeywords($10, $11, __str41, $kwlist3, allocate([ $repeat, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($12 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $17 = HEAP[HEAP[$tmpargs]] - 1;
      
      var $19 = HEAP[$tmpargs];
      HEAP[$19] = $17;
      
      
      
      
      if (HEAP[HEAP[$tmpargs]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $28 = HEAP[HEAP[HEAP[$tmpargs] + 4] + 24];
      var $29 = HEAP[$tmpargs];
      FUNCTION_TABLE[$28]($29);
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 7:
      
      
      
      var $33 = HEAP[HEAP[$tmpargs]] - 1;
      
      var $35 = HEAP[$tmpargs];
      HEAP[$35] = $33;
      
      
      
      
      if (HEAP[HEAP[$tmpargs]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$tmpargs] + 4] + 24];
      var $45 = HEAP[$tmpargs];
      FUNCTION_TABLE[$44]($45);
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$repeat] < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $48 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($48, __str42);
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 11:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$args_addr] + 4] + 84] & 67108864) == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      ___assert_fail(__str43, __str5, 1814, ___PRETTY_FUNCTION___10213);
      throw "Reached an unreachable!";
     case 13:
      
      
      if (HEAP[$repeat] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      var $61 = HEAP[HEAP[$args_addr] + 8];
      HEAP[$iftmp_73] = $61;
      __label__ = 16;
      break;
     case 15:
      HEAP[$iftmp_73] = 0;
      __label__ = 16;
      break;
     case 16:
      var $62 = HEAP[$iftmp_73];
      HEAP[$nargs] = $62;
      
      
      var $65 = HEAP[$nargs] * HEAP[$repeat];
      HEAP[$npools] = $65;
      
      var $67 = HEAP[$npools] * 4;
      var $68 = _PyMem_Malloc($67);
      var $69 = $68;
      HEAP[$indices] = $69;
      
      
      if (HEAP[$indices] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $72 = _PyErr_NoMemory();
      __label__ = 28;
      break;
     case 18:
      var $73 = HEAP[$npools];
      var $74 = _PyTuple_New($73);
      HEAP[$pools] = $74;
      
      
      if (HEAP[$pools] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      HEAP[$i] = 0;
      __label__ = 22;
      break;
     case 20:
      
      
      
      
      
      var $82 = HEAP[HEAP[$args_addr] + 12 + HEAP[$i] * 4];
      HEAP[$item] = $82;
      var $83 = HEAP[$item];
      var $84 = _PySequence_Tuple($83);
      HEAP[$pool] = $84;
      
      
      if (HEAP[$pool] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      var $91 = HEAP[$pools] + 12 + HEAP[$i] * 4;
      var $92 = HEAP[$pool];
      HEAP[$91] = $92;
      
      
      var $95 = HEAP[$indices] + 4 * HEAP[$i];
      HEAP[$95] = 0;
      
      var $97 = HEAP[$i] + 1;
      HEAP[$i] = $97;
      __label__ = 22;
      break;
     case 22:
      
      
      
      if (HEAP[$i] < HEAP[$nargs]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      __label__ = 25;
      break;
     case 24:
      
      
      
      
      
      
      
      var $108 = HEAP[HEAP[$pools] + 12 + (HEAP[$i] - HEAP[$nargs]) * 4];
      HEAP[$pool25] = $108;
      
      
      
      var $112 = HEAP[HEAP[$pool25]] + 1;
      
      var $114 = HEAP[$pool25];
      HEAP[$114] = $112;
      
      
      
      
      var $119 = HEAP[$pools] + 12 + HEAP[$i] * 4;
      var $120 = HEAP[$pool25];
      HEAP[$119] = $120;
      
      
      var $123 = HEAP[$indices] + 4 * HEAP[$i];
      HEAP[$123] = 0;
      
      var $125 = HEAP[$i] + 1;
      HEAP[$i] = $125;
      __label__ = 25;
      break;
     case 25:
      
      
      
      if (HEAP[$i] < HEAP[$npools]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      var $131 = HEAP[HEAP[$type_addr] + 152];
      var $132 = HEAP[$type_addr];
      var $133 = FUNCTION_TABLE[$131]($132, 0);
      var $134 = $133;
      HEAP[$lz] = $134;
      
      
      if (HEAP[$lz] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      var $138 = HEAP[$lz] + 8;
      var $139 = HEAP[$pools];
      HEAP[$138] = $139;
      
      var $141 = HEAP[$lz] + 12;
      var $142 = HEAP[$indices];
      HEAP[$141] = $142;
      
      var $144 = HEAP[$lz] + 16;
      HEAP[$144] = 0;
      
      var $146 = HEAP[$lz] + 20;
      HEAP[$146] = 0;
      
      var $148 = HEAP[$lz];
      HEAP[$0] = $148;
      __label__ = 34;
      break;
     case 28:
      
      
      if (HEAP[$indices] != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      var $152 = HEAP[$indices];
      _PyMem_Free($152);
      __label__ = 30;
      break;
     case 30:
      
      
      if (HEAP[$pools] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 31:
      
      
      
      var $158 = HEAP[HEAP[$pools]] - 1;
      
      var $160 = HEAP[$pools];
      HEAP[$160] = $158;
      
      
      
      
      if (HEAP[HEAP[$pools]] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      var $169 = HEAP[HEAP[HEAP[$pools] + 4] + 24];
      var $170 = HEAP[$pools];
      FUNCTION_TABLE[$169]($170);
      __label__ = 33;
      break;
     case 33:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 34:
      var $171 = HEAP[$0];
      HEAP[$retval] = $171;
      __label__ = 35;
      break;
     case 35:
      var $retval35 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval35;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _product_dealloc($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      
      HEAP[$lz_addr] = $lz;
      
      var $1 = HEAP[$lz_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$lz_addr] + 8];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 8] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$lz_addr] + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$lz_addr] + 16];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 16] + 4] + 24];
      
      
      var $49 = HEAP[HEAP[$lz_addr] + 16];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      var $57 = HEAP[HEAP[$lz_addr] + 12];
      _PyMem_Free($57);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      var $63 = HEAP[HEAP[HEAP[$lz_addr] + 4] + 160];
      
      var $65 = HEAP[$lz_addr];
      FUNCTION_TABLE[$63]($65);
      __label__ = 9;
      break;
     case 9:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _product_traverse($lz, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      
      HEAP[$lz_addr] = $lz;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$lz_addr] + 8];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$lz_addr] + 16];
      var $21 = HEAP[$visit_addr];
      var $22 = HEAP[$arg_addr];
      var $23 = FUNCTION_TABLE[$21]($20, $22);
      HEAP[$vret4] = $23;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = HEAP[$vret4];
      HEAP[$0] = $26;
      __label__ = 7;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
      __label__ = 8;
      break;
     case 8:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _product_next($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $pool = __stackBase__ + 12;
      var $elem = __stackBase__ + 16;
      var $oldelem = __stackBase__ + 20;
      var $pools = __stackBase__ + 24;
      var $result = __stackBase__ + 28;
      var $npools = __stackBase__ + 32;
      var $i = __stackBase__ + 36;
      var $indices = __stackBase__ + 40;
      var $old_result = __stackBase__ + 44;
      
      HEAP[$lz_addr] = $lz;
      
      
      var $3 = HEAP[HEAP[$lz_addr] + 8];
      HEAP[$pools] = $3;
      
      
      var $6 = HEAP[HEAP[$lz_addr] + 16];
      HEAP[$result] = $6;
      
      
      
      var $10 = HEAP[HEAP[$pools] + 8];
      HEAP[$npools] = $10;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 20] != 0) {
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
      
      
      if (HEAP[$result] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 3:
      var $17 = HEAP[$npools];
      var $18 = _PyTuple_New($17);
      HEAP[$result] = $18;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $22 = HEAP[$lz_addr] + 16;
      var $23 = HEAP[$result];
      HEAP[$22] = $23;
      HEAP[$i] = 0;
      __label__ = 7;
      break;
     case 5:
      
      
      
      
      
      var $29 = HEAP[HEAP[$pools] + 12 + HEAP[$i] * 4];
      HEAP[$pool] = $29;
      
      
      
      
      
      if (HEAP[HEAP[$pool] + 8] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      var $39 = HEAP[HEAP[$pool] + 12];
      HEAP[$elem] = $39;
      
      
      
      var $43 = HEAP[HEAP[$elem]] + 1;
      
      var $45 = HEAP[$elem];
      HEAP[$45] = $43;
      
      
      
      
      var $50 = HEAP[$result] + 12 + HEAP[$i] * 4;
      var $51 = HEAP[$elem];
      HEAP[$50] = $51;
      
      var $53 = HEAP[$i] + 1;
      HEAP[$i] = $53;
      __label__ = 7;
      break;
     case 7:
      
      
      
      if (HEAP[$i] < HEAP[$npools]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      __label__ = 29;
      break;
     case 9:
      
      
      var $59 = HEAP[HEAP[$lz_addr] + 12];
      HEAP[$indices] = $59;
      
      
      
      
      if (HEAP[HEAP[$result]] > 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 10:
      var $64 = HEAP[$result];
      HEAP[$old_result] = $64;
      var $65 = HEAP[$npools];
      var $66 = _PyTuple_New($65);
      HEAP[$result] = $66;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $70 = HEAP[$lz_addr] + 16;
      var $71 = HEAP[$result];
      HEAP[$70] = $71;
      HEAP[$i] = 0;
      __label__ = 13;
      break;
     case 12:
      
      
      
      
      
      var $77 = HEAP[HEAP[$old_result] + 12 + HEAP[$i] * 4];
      HEAP[$elem] = $77;
      
      
      
      var $81 = HEAP[HEAP[$elem]] + 1;
      
      var $83 = HEAP[$elem];
      HEAP[$83] = $81;
      
      
      
      
      var $88 = HEAP[$result] + 12 + HEAP[$i] * 4;
      var $89 = HEAP[$elem];
      HEAP[$88] = $89;
      
      var $91 = HEAP[$i] + 1;
      HEAP[$i] = $91;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (HEAP[$i] < HEAP[$npools]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      var $98 = HEAP[HEAP[$old_result]] - 1;
      
      var $100 = HEAP[$old_result];
      HEAP[$100] = $98;
      
      
      
      
      if (HEAP[HEAP[$old_result]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $109 = HEAP[HEAP[HEAP[$old_result] + 4] + 24];
      var $110 = HEAP[$old_result];
      FUNCTION_TABLE[$109]($110);
      __label__ = 16;
      break;
     case 16:
      
      
      if (HEAP[$npools] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      
      if (HEAP[HEAP[$result]] != 1) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      ___assert_fail(__str44, __str5, 1928, ___PRETTY_FUNCTION___10376);
      throw "Reached an unreachable!";
     case 19:
      
      var $118 = HEAP[$npools] - 1;
      HEAP[$i] = $118;
      __label__ = 27;
      break;
     case 20:
      
      
      
      
      
      var $124 = HEAP[HEAP[$pools] + 12 + HEAP[$i] * 4];
      HEAP[$pool] = $124;
      
      
      
      
      var $129 = HEAP[HEAP[$indices] + 4 * HEAP[$i]] + 1;
      
      
      var $132 = HEAP[$indices] + 4 * HEAP[$i];
      HEAP[$132] = $129;
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$indices] + 4 * HEAP[$i]] == HEAP[HEAP[$pool] + 8]) {
        __label__ = 21;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 21:
      
      
      var $144 = HEAP[$indices] + 4 * HEAP[$i];
      HEAP[$144] = 0;
      
      
      
      
      var $149 = HEAP[HEAP[$pool] + 12];
      HEAP[$elem] = $149;
      
      
      
      var $153 = HEAP[HEAP[$elem]] + 1;
      
      var $155 = HEAP[$elem];
      HEAP[$155] = $153;
      
      
      
      
      
      var $161 = HEAP[HEAP[$result] + 12 + HEAP[$i] * 4];
      HEAP[$oldelem] = $161;
      
      
      
      
      var $166 = HEAP[$result] + 12 + HEAP[$i] * 4;
      var $167 = HEAP[$elem];
      HEAP[$166] = $167;
      
      
      
      var $171 = HEAP[HEAP[$oldelem]] - 1;
      
      var $173 = HEAP[$oldelem];
      HEAP[$173] = $171;
      
      
      
      
      if (HEAP[HEAP[$oldelem]] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $182 = HEAP[HEAP[HEAP[$oldelem] + 4] + 24];
      var $183 = HEAP[$oldelem];
      FUNCTION_TABLE[$182]($183);
      __label__ = 23;
      break;
     case 23:
      
      var $185 = HEAP[$i] - 1;
      HEAP[$i] = $185;
      __label__ = 27;
      break;
     case 24:
      
      
      
      
      
      
      
      
      var $194 = HEAP[HEAP[$pool] + 12 + HEAP[HEAP[$indices] + 4 * HEAP[$i]] * 4];
      HEAP[$elem] = $194;
      
      
      
      var $198 = HEAP[HEAP[$elem]] + 1;
      
      var $200 = HEAP[$elem];
      HEAP[$200] = $198;
      
      
      
      
      
      var $206 = HEAP[HEAP[$result] + 12 + HEAP[$i] * 4];
      HEAP[$oldelem] = $206;
      
      
      
      
      var $211 = HEAP[$result] + 12 + HEAP[$i] * 4;
      var $212 = HEAP[$elem];
      HEAP[$211] = $212;
      
      
      
      var $216 = HEAP[HEAP[$oldelem]] - 1;
      
      var $218 = HEAP[$oldelem];
      HEAP[$218] = $216;
      
      
      
      
      if (HEAP[HEAP[$oldelem]] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $227 = HEAP[HEAP[HEAP[$oldelem] + 4] + 24];
      var $228 = HEAP[$oldelem];
      FUNCTION_TABLE[$227]($228);
      __label__ = 26;
      break;
     case 26:
      __label__ = 28;
      break;
     case 27:
      
      
      if (HEAP[$i] >= 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      var $236 = HEAP[HEAP[$result]] + 1;
      
      var $238 = HEAP[$result];
      HEAP[$238] = $236;
      var $239 = HEAP[$result];
      HEAP[$0] = $239;
      __label__ = 31;
      break;
     case 30:
      
      var $241 = HEAP[$lz_addr] + 20;
      HEAP[$241] = 1;
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 31:
      var $242 = HEAP[$0];
      HEAP[$retval] = $242;
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
  function _combinations_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $co = __stackBase__ + 20;
      var $n = __stackBase__ + 24;
      var $r = __stackBase__ + 28;
      var $pool = __stackBase__ + 32;
      var $iterable = __stackBase__ + 36;
      var $indices = __stackBase__ + 40;
      var $i = __stackBase__ + 44;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$pool] = 0;
      HEAP[$iterable] = 0;
      HEAP[$indices] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwds_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str46, _kwargs_10490, allocate([ $iterable, 0, 0, 0, $r, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$iterable];
      var $6 = _PySequence_Tuple($5);
      HEAP[$pool] = $6;
      
      
      if (HEAP[$pool] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $12 = HEAP[HEAP[$pool] + 8];
      HEAP[$n] = $12;
      
      
      if (HEAP[$r] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $15 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($15, __str48);
      __label__ = 12;
      break;
     case 5:
      
      var $17 = HEAP[$r] * 4;
      var $18 = _PyMem_Malloc($17);
      var $19 = $18;
      HEAP[$indices] = $19;
      
      
      if (HEAP[$indices] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $22 = _PyErr_NoMemory();
      __label__ = 12;
      break;
     case 7:
      HEAP[$i] = 0;
      __label__ = 9;
      break;
     case 8:
      
      
      var $25 = HEAP[$indices] + 4 * HEAP[$i];
      var $26 = HEAP[$i];
      HEAP[$25] = $26;
      
      var $28 = HEAP[$i] + 1;
      HEAP[$i] = $28;
      __label__ = 9;
      break;
     case 9:
      
      
      
      if (HEAP[$i] < HEAP[$r]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      var $34 = HEAP[HEAP[$type_addr] + 152];
      var $35 = HEAP[$type_addr];
      var $36 = FUNCTION_TABLE[$34]($35, 0);
      var $37 = $36;
      HEAP[$co] = $37;
      
      
      if (HEAP[$co] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $41 = HEAP[$co] + 8;
      var $42 = HEAP[$pool];
      HEAP[$41] = $42;
      
      var $44 = HEAP[$co] + 12;
      var $45 = HEAP[$indices];
      HEAP[$44] = $45;
      
      var $47 = HEAP[$co] + 16;
      HEAP[$47] = 0;
      var $48 = HEAP[$r];
      
      var $50 = HEAP[$co] + 20;
      HEAP[$50] = $48;
      
      
      
      var $54 = HEAP[$r] > HEAP[$n];
      
      var $56 = HEAP[$co] + 24;
      HEAP[$56] = $54;
      
      var $58 = HEAP[$co];
      HEAP[$0] = $58;
      __label__ = 18;
      break;
     case 12:
      
      
      if (HEAP[$indices] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      var $62 = HEAP[$indices];
      _PyMem_Free($62);
      __label__ = 14;
      break;
     case 14:
      
      
      if (HEAP[$pool] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      var $68 = HEAP[HEAP[$pool]] - 1;
      
      var $70 = HEAP[$pool];
      HEAP[$70] = $68;
      
      
      
      
      if (HEAP[HEAP[$pool]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $79 = HEAP[HEAP[HEAP[$pool] + 4] + 24];
      var $80 = HEAP[$pool];
      FUNCTION_TABLE[$79]($80);
      __label__ = 17;
      break;
     case 17:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 18:
      var $81 = HEAP[$0];
      HEAP[$retval] = $81;
      __label__ = 19;
      break;
     case 19:
      var $retval17 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _combinations_dealloc($co) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $co_addr = __stackBase__;
      
      HEAP[$co_addr] = $co;
      
      var $1 = HEAP[$co_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$co_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$co_addr] + 8];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$co_addr] + 8] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$co_addr] + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$co_addr] + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$co_addr] + 16];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[HEAP[$co_addr] + 16] + 4] + 24];
      
      
      var $49 = HEAP[HEAP[$co_addr] + 16];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$co_addr] + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      var $57 = HEAP[HEAP[$co_addr] + 12];
      _PyMem_Free($57);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      var $63 = HEAP[HEAP[HEAP[$co_addr] + 4] + 160];
      
      var $65 = HEAP[$co_addr];
      FUNCTION_TABLE[$63]($65);
      __label__ = 9;
      break;
     case 9:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _combinations_traverse($co, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $co_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      
      HEAP[$co_addr] = $co;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$co_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$co_addr] + 8];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$co_addr] + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$co_addr] + 16];
      var $21 = HEAP[$visit_addr];
      var $22 = HEAP[$arg_addr];
      var $23 = FUNCTION_TABLE[$21]($20, $22);
      HEAP[$vret4] = $23;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = HEAP[$vret4];
      HEAP[$0] = $26;
      __label__ = 7;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
      __label__ = 8;
      break;
     case 8:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _combinations_next($co) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $co_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $elem = __stackBase__ + 12;
      var $oldelem = __stackBase__ + 16;
      var $pool = __stackBase__ + 20;
      var $indices = __stackBase__ + 24;
      var $result = __stackBase__ + 28;
      var $n = __stackBase__ + 32;
      var $r = __stackBase__ + 36;
      var $i = __stackBase__ + 40;
      var $j = __stackBase__ + 44;
      var $index = __stackBase__ + 48;
      var $old_result = __stackBase__ + 52;
      
      HEAP[$co_addr] = $co;
      
      
      var $3 = HEAP[HEAP[$co_addr] + 8];
      HEAP[$pool] = $3;
      
      
      var $6 = HEAP[HEAP[$co_addr] + 12];
      HEAP[$indices] = $6;
      
      
      var $9 = HEAP[HEAP[$co_addr] + 16];
      HEAP[$result] = $9;
      
      
      
      var $13 = HEAP[HEAP[$pool] + 8];
      HEAP[$n] = $13;
      
      
      var $16 = HEAP[HEAP[$co_addr] + 20];
      HEAP[$r] = $16;
      
      
      
      
      if (HEAP[HEAP[$co_addr] + 24] != 0) {
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
      
      
      if (HEAP[$result] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 3:
      var $23 = HEAP[$r];
      var $24 = _PyTuple_New($23);
      HEAP[$result] = $24;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $28 = HEAP[$co_addr] + 16;
      var $29 = HEAP[$result];
      HEAP[$28] = $29;
      HEAP[$i] = 0;
      __label__ = 6;
      break;
     case 5:
      
      
      
      var $33 = HEAP[HEAP[$indices] + 4 * HEAP[$i]];
      HEAP[$index] = $33;
      
      
      
      
      
      var $39 = HEAP[HEAP[$pool] + 12 + HEAP[$index] * 4];
      HEAP[$elem] = $39;
      
      
      
      var $43 = HEAP[HEAP[$elem]] + 1;
      
      var $45 = HEAP[$elem];
      HEAP[$45] = $43;
      
      
      
      
      var $50 = HEAP[$result] + 12 + HEAP[$i] * 4;
      var $51 = HEAP[$elem];
      HEAP[$50] = $51;
      
      var $53 = HEAP[$i] + 1;
      HEAP[$i] = $53;
      __label__ = 6;
      break;
     case 6:
      
      
      
      if (HEAP[$i] < HEAP[$r]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      __label__ = 31;
      break;
     case 8:
      
      
      
      
      if (HEAP[HEAP[$result]] > 1) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 9:
      var $61 = HEAP[$result];
      HEAP[$old_result] = $61;
      var $62 = HEAP[$r];
      var $63 = _PyTuple_New($62);
      HEAP[$result] = $63;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      var $67 = HEAP[$co_addr] + 16;
      var $68 = HEAP[$result];
      HEAP[$67] = $68;
      HEAP[$i] = 0;
      __label__ = 12;
      break;
     case 11:
      
      
      
      
      
      var $74 = HEAP[HEAP[$old_result] + 12 + HEAP[$i] * 4];
      HEAP[$elem] = $74;
      
      
      
      var $78 = HEAP[HEAP[$elem]] + 1;
      
      var $80 = HEAP[$elem];
      HEAP[$80] = $78;
      
      
      
      
      var $85 = HEAP[$result] + 12 + HEAP[$i] * 4;
      var $86 = HEAP[$elem];
      HEAP[$85] = $86;
      
      var $88 = HEAP[$i] + 1;
      HEAP[$i] = $88;
      __label__ = 12;
      break;
     case 12:
      
      
      
      if (HEAP[$i] < HEAP[$r]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $95 = HEAP[HEAP[$old_result]] - 1;
      
      var $97 = HEAP[$old_result];
      HEAP[$97] = $95;
      
      
      
      
      if (HEAP[HEAP[$old_result]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $106 = HEAP[HEAP[HEAP[$old_result] + 4] + 24];
      var $107 = HEAP[$old_result];
      FUNCTION_TABLE[$106]($107);
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$r] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      
      if (HEAP[HEAP[$result]] != 1) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      ___assert_fail(__str49, __str5, 2159, ___PRETTY_FUNCTION___10612);
      throw "Reached an unreachable!";
     case 18:
      
      var $115 = HEAP[$r] - 1;
      HEAP[$i] = $115;
      __label__ = 20;
      break;
     case 19:
      
      var $117 = HEAP[$i] - 1;
      HEAP[$i] = $117;
      __label__ = 20;
      break;
     case 20:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$indices] + 4 * HEAP[$i]] == HEAP[$i] + HEAP[$n] - HEAP[$r]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      var $136 = HEAP[HEAP[$indices] + 4 * HEAP[$i]] + 1;
      
      
      var $139 = HEAP[$indices] + 4 * HEAP[$i];
      HEAP[$139] = $136;
      
      var $141 = HEAP[$i] + 1;
      HEAP[$j] = $141;
      __label__ = 25;
      break;
     case 24:
      
      
      
      
      
      var $147 = HEAP[HEAP[$indices] + 4 * (HEAP[$j] - 1)] + 1;
      
      
      var $150 = HEAP[$indices] + 4 * HEAP[$j];
      HEAP[$150] = $147;
      
      var $152 = HEAP[$j] + 1;
      HEAP[$j] = $152;
      __label__ = 25;
      break;
     case 25:
      
      
      
      if (HEAP[$j] < HEAP[$r]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      __label__ = 30;
      break;
     case 27:
      
      
      
      var $159 = HEAP[HEAP[$indices] + 4 * HEAP[$i]];
      HEAP[$index] = $159;
      
      
      
      
      
      var $165 = HEAP[HEAP[$pool] + 12 + HEAP[$index] * 4];
      HEAP[$elem] = $165;
      
      
      
      var $169 = HEAP[HEAP[$elem]] + 1;
      
      var $171 = HEAP[$elem];
      HEAP[$171] = $169;
      
      
      
      
      
      var $177 = HEAP[HEAP[$result] + 12 + HEAP[$i] * 4];
      HEAP[$oldelem] = $177;
      
      
      
      
      var $182 = HEAP[$result] + 12 + HEAP[$i] * 4;
      var $183 = HEAP[$elem];
      HEAP[$182] = $183;
      
      
      
      var $187 = HEAP[HEAP[$oldelem]] - 1;
      
      var $189 = HEAP[$oldelem];
      HEAP[$189] = $187;
      
      
      
      
      if (HEAP[HEAP[$oldelem]] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $198 = HEAP[HEAP[HEAP[$oldelem] + 4] + 24];
      var $199 = HEAP[$oldelem];
      FUNCTION_TABLE[$198]($199);
      __label__ = 29;
      break;
     case 29:
      
      var $201 = HEAP[$i] + 1;
      HEAP[$i] = $201;
      __label__ = 30;
      break;
     case 30:
      
      
      
      if (HEAP[$i] < HEAP[$r]) {
        __label__ = 27;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      
      var $208 = HEAP[HEAP[$result]] + 1;
      
      var $210 = HEAP[$result];
      HEAP[$210] = $208;
      var $211 = HEAP[$result];
      HEAP[$0] = $211;
      __label__ = 33;
      break;
     case 32:
      
      var $213 = HEAP[$co_addr] + 24;
      HEAP[$213] = 1;
      HEAP[$0] = 0;
      __label__ = 33;
      break;
     case 33:
      var $214 = HEAP[$0];
      HEAP[$retval] = $214;
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
  function _cwr_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $iftmp_143 = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $co = __stackBase__ + 24;
      var $n = __stackBase__ + 28;
      var $r = __stackBase__ + 32;
      var $pool = __stackBase__ + 36;
      var $iterable = __stackBase__ + 40;
      var $indices = __stackBase__ + 44;
      var $i = __stackBase__ + 48;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$pool] = 0;
      HEAP[$iterable] = 0;
      HEAP[$indices] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwds_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str51, _kwargs_10713, allocate([ $iterable, 0, 0, 0, $r, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$iterable];
      var $6 = _PySequence_Tuple($5);
      HEAP[$pool] = $6;
      
      
      if (HEAP[$pool] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $12 = HEAP[HEAP[$pool] + 8];
      HEAP[$n] = $12;
      
      
      if (HEAP[$r] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $15 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($15, __str48);
      __label__ = 16;
      break;
     case 5:
      
      var $17 = HEAP[$r] * 4;
      var $18 = _PyMem_Malloc($17);
      var $19 = $18;
      HEAP[$indices] = $19;
      
      
      if (HEAP[$indices] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $22 = _PyErr_NoMemory();
      __label__ = 16;
      break;
     case 7:
      HEAP[$i] = 0;
      __label__ = 9;
      break;
     case 8:
      
      
      var $25 = HEAP[$indices] + 4 * HEAP[$i];
      HEAP[$25] = 0;
      
      var $27 = HEAP[$i] + 1;
      HEAP[$i] = $27;
      __label__ = 9;
      break;
     case 9:
      
      
      
      if (HEAP[$i] < HEAP[$r]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      var $33 = HEAP[HEAP[$type_addr] + 152];
      var $34 = HEAP[$type_addr];
      var $35 = FUNCTION_TABLE[$33]($34, 0);
      var $36 = $35;
      HEAP[$co] = $36;
      
      
      if (HEAP[$co] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $40 = HEAP[$co] + 8;
      var $41 = HEAP[$pool];
      HEAP[$40] = $41;
      
      var $43 = HEAP[$co] + 12;
      var $44 = HEAP[$indices];
      HEAP[$43] = $44;
      
      var $46 = HEAP[$co] + 16;
      HEAP[$46] = 0;
      var $47 = HEAP[$r];
      
      var $49 = HEAP[$co] + 20;
      HEAP[$49] = $47;
      
      
      if (HEAP[$n] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if (HEAP[$r] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      HEAP[$iftmp_143] = 1;
      __label__ = 15;
      break;
     case 14:
      HEAP[$iftmp_143] = 0;
      __label__ = 15;
      break;
     case 15:
      
      var $55 = HEAP[$co] + 24;
      var $56 = HEAP[$iftmp_143];
      HEAP[$55] = $56;
      
      var $58 = HEAP[$co];
      HEAP[$0] = $58;
      __label__ = 22;
      break;
     case 16:
      
      
      if (HEAP[$indices] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      var $62 = HEAP[$indices];
      _PyMem_Free($62);
      __label__ = 18;
      break;
     case 18:
      
      
      if (HEAP[$pool] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      
      var $68 = HEAP[HEAP[$pool]] - 1;
      
      var $70 = HEAP[$pool];
      HEAP[$70] = $68;
      
      
      
      
      if (HEAP[HEAP[$pool]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $79 = HEAP[HEAP[HEAP[$pool] + 4] + 24];
      var $80 = HEAP[$pool];
      FUNCTION_TABLE[$79]($80);
      __label__ = 21;
      break;
     case 21:
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 22:
      var $81 = HEAP[$0];
      HEAP[$retval] = $81;
      __label__ = 23;
      break;
     case 23:
      var $retval21 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval21;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cwr_dealloc($co) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $co_addr = __stackBase__;
      
      HEAP[$co_addr] = $co;
      
      var $1 = HEAP[$co_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$co_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$co_addr] + 8];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$co_addr] + 8] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$co_addr] + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$co_addr] + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$co_addr] + 16];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[HEAP[$co_addr] + 16] + 4] + 24];
      
      
      var $49 = HEAP[HEAP[$co_addr] + 16];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$co_addr] + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      var $57 = HEAP[HEAP[$co_addr] + 12];
      _PyMem_Free($57);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      var $63 = HEAP[HEAP[HEAP[$co_addr] + 4] + 160];
      
      var $65 = HEAP[$co_addr];
      FUNCTION_TABLE[$63]($65);
      __label__ = 9;
      break;
     case 9:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cwr_traverse($co, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $co_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      
      HEAP[$co_addr] = $co;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$co_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$co_addr] + 8];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$co_addr] + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$co_addr] + 16];
      var $21 = HEAP[$visit_addr];
      var $22 = HEAP[$arg_addr];
      var $23 = FUNCTION_TABLE[$21]($20, $22);
      HEAP[$vret4] = $23;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = HEAP[$vret4];
      HEAP[$0] = $26;
      __label__ = 7;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
      __label__ = 8;
      break;
     case 8:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cwr_next($co) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $co_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $elem = __stackBase__ + 12;
      var $oldelem = __stackBase__ + 16;
      var $pool = __stackBase__ + 20;
      var $indices = __stackBase__ + 24;
      var $result = __stackBase__ + 28;
      var $n = __stackBase__ + 32;
      var $r = __stackBase__ + 36;
      var $i = __stackBase__ + 40;
      var $j = __stackBase__ + 44;
      var $index = __stackBase__ + 48;
      var $old_result = __stackBase__ + 52;
      
      HEAP[$co_addr] = $co;
      
      
      var $3 = HEAP[HEAP[$co_addr] + 8];
      HEAP[$pool] = $3;
      
      
      var $6 = HEAP[HEAP[$co_addr] + 12];
      HEAP[$indices] = $6;
      
      
      var $9 = HEAP[HEAP[$co_addr] + 16];
      HEAP[$result] = $9;
      
      
      
      var $13 = HEAP[HEAP[$pool] + 8];
      HEAP[$n] = $13;
      
      
      var $16 = HEAP[HEAP[$co_addr] + 20];
      HEAP[$r] = $16;
      
      
      
      
      if (HEAP[HEAP[$co_addr] + 24] != 0) {
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
      
      
      if (HEAP[$result] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 3:
      var $23 = HEAP[$r];
      var $24 = _PyTuple_New($23);
      HEAP[$result] = $24;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $28 = HEAP[$co_addr] + 16;
      var $29 = HEAP[$result];
      HEAP[$28] = $29;
      HEAP[$i] = 0;
      __label__ = 6;
      break;
     case 5:
      
      
      
      var $33 = HEAP[HEAP[$indices] + 4 * HEAP[$i]];
      HEAP[$index] = $33;
      
      
      
      
      
      var $39 = HEAP[HEAP[$pool] + 12 + HEAP[$index] * 4];
      HEAP[$elem] = $39;
      
      
      
      var $43 = HEAP[HEAP[$elem]] + 1;
      
      var $45 = HEAP[$elem];
      HEAP[$45] = $43;
      
      
      
      
      var $50 = HEAP[$result] + 12 + HEAP[$i] * 4;
      var $51 = HEAP[$elem];
      HEAP[$50] = $51;
      
      var $53 = HEAP[$i] + 1;
      HEAP[$i] = $53;
      __label__ = 6;
      break;
     case 6:
      
      
      
      if (HEAP[$i] < HEAP[$r]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      __label__ = 31;
      break;
     case 8:
      
      
      
      
      if (HEAP[HEAP[$result]] > 1) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 9:
      var $61 = HEAP[$result];
      HEAP[$old_result] = $61;
      var $62 = HEAP[$r];
      var $63 = _PyTuple_New($62);
      HEAP[$result] = $63;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      var $67 = HEAP[$co_addr] + 16;
      var $68 = HEAP[$result];
      HEAP[$67] = $68;
      HEAP[$i] = 0;
      __label__ = 12;
      break;
     case 11:
      
      
      
      
      
      var $74 = HEAP[HEAP[$old_result] + 12 + HEAP[$i] * 4];
      HEAP[$elem] = $74;
      
      
      
      var $78 = HEAP[HEAP[$elem]] + 1;
      
      var $80 = HEAP[$elem];
      HEAP[$80] = $78;
      
      
      
      
      var $85 = HEAP[$result] + 12 + HEAP[$i] * 4;
      var $86 = HEAP[$elem];
      HEAP[$85] = $86;
      
      var $88 = HEAP[$i] + 1;
      HEAP[$i] = $88;
      __label__ = 12;
      break;
     case 12:
      
      
      
      if (HEAP[$i] < HEAP[$r]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $95 = HEAP[HEAP[$old_result]] - 1;
      
      var $97 = HEAP[$old_result];
      HEAP[$97] = $95;
      
      
      
      
      if (HEAP[HEAP[$old_result]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $106 = HEAP[HEAP[HEAP[$old_result] + 4] + 24];
      var $107 = HEAP[$old_result];
      FUNCTION_TABLE[$106]($107);
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$r] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      
      if (HEAP[HEAP[$result]] != 1) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      ___assert_fail(__str49, __str5, 2406, ___PRETTY_FUNCTION___10839);
      throw "Reached an unreachable!";
     case 18:
      
      var $115 = HEAP[$r] - 1;
      HEAP[$i] = $115;
      __label__ = 20;
      break;
     case 19:
      
      var $117 = HEAP[$i] - 1;
      HEAP[$i] = $117;
      __label__ = 20;
      break;
     case 20:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$indices] + 4 * HEAP[$i]] == HEAP[$n] - 1) {
        __label__ = 19;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      var $133 = HEAP[HEAP[$indices] + 4 * HEAP[$i]] + 1;
      
      
      var $136 = HEAP[$indices] + 4 * HEAP[$i];
      HEAP[$136] = $133;
      
      var $138 = HEAP[$i] + 1;
      HEAP[$j] = $138;
      __label__ = 25;
      break;
     case 24:
      
      
      
      
      var $143 = HEAP[HEAP[$indices] + 4 * (HEAP[$j] - 1)];
      
      
      var $146 = HEAP[$indices] + 4 * HEAP[$j];
      HEAP[$146] = $143;
      
      var $148 = HEAP[$j] + 1;
      HEAP[$j] = $148;
      __label__ = 25;
      break;
     case 25:
      
      
      
      if (HEAP[$j] < HEAP[$r]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      __label__ = 30;
      break;
     case 27:
      
      
      
      var $155 = HEAP[HEAP[$indices] + 4 * HEAP[$i]];
      HEAP[$index] = $155;
      
      
      
      
      
      var $161 = HEAP[HEAP[$pool] + 12 + HEAP[$index] * 4];
      HEAP[$elem] = $161;
      
      
      
      var $165 = HEAP[HEAP[$elem]] + 1;
      
      var $167 = HEAP[$elem];
      HEAP[$167] = $165;
      
      
      
      
      
      var $173 = HEAP[HEAP[$result] + 12 + HEAP[$i] * 4];
      HEAP[$oldelem] = $173;
      
      
      
      
      var $178 = HEAP[$result] + 12 + HEAP[$i] * 4;
      var $179 = HEAP[$elem];
      HEAP[$178] = $179;
      
      
      
      var $183 = HEAP[HEAP[$oldelem]] - 1;
      
      var $185 = HEAP[$oldelem];
      HEAP[$185] = $183;
      
      
      
      
      if (HEAP[HEAP[$oldelem]] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $194 = HEAP[HEAP[HEAP[$oldelem] + 4] + 24];
      var $195 = HEAP[$oldelem];
      FUNCTION_TABLE[$194]($195);
      __label__ = 29;
      break;
     case 29:
      
      var $197 = HEAP[$i] + 1;
      HEAP[$i] = $197;
      __label__ = 30;
      break;
     case 30:
      
      
      
      if (HEAP[$i] < HEAP[$r]) {
        __label__ = 27;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      
      var $204 = HEAP[HEAP[$result]] + 1;
      
      var $206 = HEAP[$result];
      HEAP[$206] = $204;
      var $207 = HEAP[$result];
      HEAP[$0] = $207;
      __label__ = 33;
      break;
     case 32:
      
      var $209 = HEAP[$co_addr] + 24;
      HEAP[$209] = 1;
      HEAP[$0] = 0;
      __label__ = 33;
      break;
     case 33:
      var $210 = HEAP[$0];
      HEAP[$retval] = $210;
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
  function _permutations_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $po = __stackBase__ + 20;
      var $n = __stackBase__ + 24;
      var $r = __stackBase__ + 28;
      var $robj = __stackBase__ + 32;
      var $pool = __stackBase__ + 36;
      var $iterable = __stackBase__ + 40;
      var $indices = __stackBase__ + 44;
      var $cycles = __stackBase__ + 48;
      var $i = __stackBase__ + 52;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$robj] = __Py_NoneStruct;
      HEAP[$pool] = 0;
      HEAP[$iterable] = 0;
      HEAP[$indices] = 0;
      HEAP[$cycles] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwds_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str53, _kwargs_10941, allocate([ $iterable, 0, 0, 0, $robj, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$iterable];
      var $6 = _PySequence_Tuple($5);
      HEAP[$pool] = $6;
      
      
      if (HEAP[$pool] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $12 = HEAP[HEAP[$pool] + 8];
      HEAP[$n] = $12;
      var $13 = HEAP[$n];
      HEAP[$r] = $13;
      
      
      if (HEAP[$robj] != __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $16 = HEAP[$robj];
      var $17 = _PyInt_AsSsize_t($16);
      HEAP[$r] = $17;
      
      var $19 = HEAP[$r] == -1;
      if ($19) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $20 = _PyErr_Occurred();
      
      if ($20 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if (HEAP[$r] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $24 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($24, __str48);
      __label__ = 19;
      break;
     case 8:
      
      var $26 = HEAP[$n] * 4;
      var $27 = _PyMem_Malloc($26);
      var $28 = $27;
      HEAP[$indices] = $28;
      
      var $30 = HEAP[$r] * 4;
      var $31 = _PyMem_Malloc($30);
      var $32 = $31;
      HEAP[$cycles] = $32;
      
      
      if (HEAP[$indices] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$cycles] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $37 = _PyErr_NoMemory();
      __label__ = 19;
      break;
     case 11:
      HEAP[$i] = 0;
      __label__ = 13;
      break;
     case 12:
      
      
      var $40 = HEAP[$indices] + 4 * HEAP[$i];
      var $41 = HEAP[$i];
      HEAP[$40] = $41;
      
      var $43 = HEAP[$i] + 1;
      HEAP[$i] = $43;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (HEAP[$i] < HEAP[$n]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      HEAP[$i] = 0;
      __label__ = 16;
      break;
     case 15:
      
      
      var $49 = HEAP[$n] - HEAP[$i];
      
      
      var $52 = HEAP[$cycles] + 4 * HEAP[$i];
      HEAP[$52] = $49;
      
      var $54 = HEAP[$i] + 1;
      HEAP[$i] = $54;
      __label__ = 16;
      break;
     case 16:
      
      
      
      if (HEAP[$i] < HEAP[$r]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      var $60 = HEAP[HEAP[$type_addr] + 152];
      var $61 = HEAP[$type_addr];
      var $62 = FUNCTION_TABLE[$60]($61, 0);
      var $63 = $62;
      HEAP[$po] = $63;
      
      
      if (HEAP[$po] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      var $67 = HEAP[$po] + 8;
      var $68 = HEAP[$pool];
      HEAP[$67] = $68;
      
      var $70 = HEAP[$po] + 12;
      var $71 = HEAP[$indices];
      HEAP[$70] = $71;
      
      var $73 = HEAP[$po] + 16;
      var $74 = HEAP[$cycles];
      HEAP[$73] = $74;
      
      var $76 = HEAP[$po] + 20;
      HEAP[$76] = 0;
      
      var $78 = HEAP[$po] + 24;
      var $79 = HEAP[$r];
      HEAP[$78] = $79;
      
      
      
      var $83 = HEAP[$r] > HEAP[$n];
      
      var $85 = HEAP[$po] + 28;
      HEAP[$85] = $83;
      
      var $87 = HEAP[$po];
      HEAP[$0] = $87;
      __label__ = 27;
      break;
     case 19:
      
      
      if (HEAP[$indices] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      var $91 = HEAP[$indices];
      _PyMem_Free($91);
      __label__ = 21;
      break;
     case 21:
      
      
      if (HEAP[$cycles] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      var $95 = HEAP[$cycles];
      _PyMem_Free($95);
      __label__ = 23;
      break;
     case 23:
      
      
      if (HEAP[$pool] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 24:
      
      
      
      var $101 = HEAP[HEAP[$pool]] - 1;
      
      var $103 = HEAP[$pool];
      HEAP[$103] = $101;
      
      
      
      
      if (HEAP[HEAP[$pool]] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $112 = HEAP[HEAP[HEAP[$pool] + 4] + 24];
      var $113 = HEAP[$pool];
      FUNCTION_TABLE[$112]($113);
      __label__ = 26;
      break;
     case 26:
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 27:
      var $114 = HEAP[$0];
      HEAP[$retval] = $114;
      __label__ = 28;
      break;
     case 28:
      var $retval26 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval26;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _permutations_dealloc($po) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $po_addr = __stackBase__;
      
      HEAP[$po_addr] = $po;
      
      var $1 = HEAP[$po_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$po_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$po_addr] + 8];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$po_addr] + 8] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$po_addr] + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$po_addr] + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$po_addr] + 20];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[HEAP[$po_addr] + 20] + 4] + 24];
      
      
      var $49 = HEAP[HEAP[$po_addr] + 20];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $53 = HEAP[HEAP[$po_addr] + 12];
      _PyMem_Free($53);
      
      
      
      var $57 = HEAP[HEAP[$po_addr] + 16];
      _PyMem_Free($57);
      
      
      
      
      
      var $63 = HEAP[HEAP[HEAP[$po_addr] + 4] + 160];
      
      var $65 = HEAP[$po_addr];
      FUNCTION_TABLE[$63]($65);
      __label__ = 7;
      break;
     case 7:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _permutations_traverse($po, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $po_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      
      HEAP[$po_addr] = $po;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$po_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$po_addr] + 8];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$po_addr] + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$po_addr] + 20];
      var $21 = HEAP[$visit_addr];
      var $22 = HEAP[$arg_addr];
      var $23 = FUNCTION_TABLE[$21]($20, $22);
      HEAP[$vret4] = $23;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = HEAP[$vret4];
      HEAP[$0] = $26;
      __label__ = 7;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
      __label__ = 8;
      break;
     case 8:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _permutations_next($po) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 64;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $po_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $elem = __stackBase__ + 12;
      var $oldelem = __stackBase__ + 16;
      var $pool = __stackBase__ + 20;
      var $indices = __stackBase__ + 24;
      var $cycles = __stackBase__ + 28;
      var $result = __stackBase__ + 32;
      var $n = __stackBase__ + 36;
      var $r = __stackBase__ + 40;
      var $i = __stackBase__ + 44;
      var $j = __stackBase__ + 48;
      var $k = __stackBase__ + 52;
      var $index = __stackBase__ + 56;
      var $old_result = __stackBase__ + 60;
      
      HEAP[$po_addr] = $po;
      
      
      var $3 = HEAP[HEAP[$po_addr] + 8];
      HEAP[$pool] = $3;
      
      
      var $6 = HEAP[HEAP[$po_addr] + 12];
      HEAP[$indices] = $6;
      
      
      var $9 = HEAP[HEAP[$po_addr] + 16];
      HEAP[$cycles] = $9;
      
      
      var $12 = HEAP[HEAP[$po_addr] + 20];
      HEAP[$result] = $12;
      
      
      
      var $16 = HEAP[HEAP[$pool] + 8];
      HEAP[$n] = $16;
      
      
      var $19 = HEAP[HEAP[$po_addr] + 24];
      HEAP[$r] = $19;
      
      
      
      
      if (HEAP[HEAP[$po_addr] + 28] != 0) {
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
      
      
      if (HEAP[$result] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 3:
      var $26 = HEAP[$r];
      var $27 = _PyTuple_New($26);
      HEAP[$result] = $27;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $31 = HEAP[$po_addr] + 20;
      var $32 = HEAP[$result];
      HEAP[$31] = $32;
      HEAP[$i] = 0;
      __label__ = 6;
      break;
     case 5:
      
      
      
      var $36 = HEAP[HEAP[$indices] + 4 * HEAP[$i]];
      HEAP[$index] = $36;
      
      
      
      
      
      var $42 = HEAP[HEAP[$pool] + 12 + HEAP[$index] * 4];
      HEAP[$elem] = $42;
      
      
      
      var $46 = HEAP[HEAP[$elem]] + 1;
      
      var $48 = HEAP[$elem];
      HEAP[$48] = $46;
      
      
      
      
      var $53 = HEAP[$result] + 12 + HEAP[$i] * 4;
      var $54 = HEAP[$elem];
      HEAP[$53] = $54;
      
      var $56 = HEAP[$i] + 1;
      HEAP[$i] = $56;
      __label__ = 6;
      break;
     case 6:
      
      
      
      if (HEAP[$i] < HEAP[$r]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      __label__ = 33;
      break;
     case 8:
      
      
      if (HEAP[$n] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[HEAP[$result]] > 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 10:
      var $66 = HEAP[$result];
      HEAP[$old_result] = $66;
      var $67 = HEAP[$r];
      var $68 = _PyTuple_New($67);
      HEAP[$result] = $68;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $72 = HEAP[$po_addr] + 20;
      var $73 = HEAP[$result];
      HEAP[$72] = $73;
      HEAP[$i] = 0;
      __label__ = 13;
      break;
     case 12:
      
      
      
      
      
      var $79 = HEAP[HEAP[$old_result] + 12 + HEAP[$i] * 4];
      HEAP[$elem] = $79;
      
      
      
      var $83 = HEAP[HEAP[$elem]] + 1;
      
      var $85 = HEAP[$elem];
      HEAP[$85] = $83;
      
      
      
      
      var $90 = HEAP[$result] + 12 + HEAP[$i] * 4;
      var $91 = HEAP[$elem];
      HEAP[$90] = $91;
      
      var $93 = HEAP[$i] + 1;
      HEAP[$i] = $93;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (HEAP[$i] < HEAP[$r]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      var $100 = HEAP[HEAP[$old_result]] - 1;
      
      var $102 = HEAP[$old_result];
      HEAP[$102] = $100;
      
      
      
      
      if (HEAP[HEAP[$old_result]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $111 = HEAP[HEAP[HEAP[$old_result] + 4] + 24];
      var $112 = HEAP[$old_result];
      FUNCTION_TABLE[$111]($112);
      __label__ = 16;
      break;
     case 16:
      
      
      if (HEAP[$r] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      
      if (HEAP[HEAP[$result]] != 1) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      ___assert_fail(__str49, __str5, 2668, ___PRETTY_FUNCTION___11077);
      throw "Reached an unreachable!";
     case 19:
      
      var $120 = HEAP[$r] - 1;
      HEAP[$i] = $120;
      __label__ = 31;
      break;
     case 20:
      
      
      
      
      var $125 = HEAP[HEAP[$cycles] + 4 * HEAP[$i]] - 1;
      
      
      var $128 = HEAP[$cycles] + 4 * HEAP[$i];
      HEAP[$128] = $125;
      
      
      
      
      
      if (HEAP[HEAP[$cycles] + 4 * HEAP[$i]] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 21:
      
      
      
      var $137 = HEAP[HEAP[$indices] + 4 * HEAP[$i]];
      HEAP[$index] = $137;
      var $138 = HEAP[$i];
      HEAP[$j] = $138;
      __label__ = 23;
      break;
     case 22:
      
      
      
      
      var $143 = HEAP[HEAP[$indices] + 4 * (HEAP[$j] + 1)];
      
      
      var $146 = HEAP[$indices] + 4 * HEAP[$j];
      HEAP[$146] = $143;
      
      var $148 = HEAP[$j] + 1;
      HEAP[$j] = $148;
      __label__ = 23;
      break;
     case 23:
      
      
      
      
      if (HEAP[$n] - 1 > HEAP[$j]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      var $156 = HEAP[$indices] + 4 * (HEAP[$n] - 1);
      var $157 = HEAP[$index];
      HEAP[$156] = $157;
      
      
      var $160 = HEAP[$n] - HEAP[$i];
      
      
      var $163 = HEAP[$cycles] + 4 * HEAP[$i];
      HEAP[$163] = $160;
      
      var $165 = HEAP[$i] - 1;
      HEAP[$i] = $165;
      __label__ = 31;
      break;
     case 25:
      
      
      
      var $169 = HEAP[HEAP[$cycles] + 4 * HEAP[$i]];
      HEAP[$j] = $169;
      
      
      
      var $173 = HEAP[HEAP[$indices] + 4 * HEAP[$i]];
      HEAP[$index] = $173;
      
      
      
      
      
      var $179 = HEAP[HEAP[$indices] + 4 * (HEAP[$n] - HEAP[$j])];
      
      
      var $182 = HEAP[$indices] + 4 * HEAP[$i];
      HEAP[$182] = $179;
      
      
      
      
      var $187 = HEAP[$indices] + 4 * (HEAP[$n] - HEAP[$j]);
      var $188 = HEAP[$index];
      HEAP[$187] = $188;
      var $189 = HEAP[$i];
      HEAP[$k] = $189;
      __label__ = 29;
      break;
     case 26:
      
      
      
      var $193 = HEAP[HEAP[$indices] + 4 * HEAP[$k]];
      HEAP[$index] = $193;
      
      
      
      
      
      var $199 = HEAP[HEAP[$pool] + 12 + HEAP[$index] * 4];
      HEAP[$elem] = $199;
      
      
      
      var $203 = HEAP[HEAP[$elem]] + 1;
      
      var $205 = HEAP[$elem];
      HEAP[$205] = $203;
      
      
      
      
      
      var $211 = HEAP[HEAP[$result] + 12 + HEAP[$k] * 4];
      HEAP[$oldelem] = $211;
      
      
      
      
      var $216 = HEAP[$result] + 12 + HEAP[$k] * 4;
      var $217 = HEAP[$elem];
      HEAP[$216] = $217;
      
      
      
      var $221 = HEAP[HEAP[$oldelem]] - 1;
      
      var $223 = HEAP[$oldelem];
      HEAP[$223] = $221;
      
      
      
      
      if (HEAP[HEAP[$oldelem]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $232 = HEAP[HEAP[HEAP[$oldelem] + 4] + 24];
      var $233 = HEAP[$oldelem];
      FUNCTION_TABLE[$232]($233);
      __label__ = 28;
      break;
     case 28:
      
      var $235 = HEAP[$k] + 1;
      HEAP[$k] = $235;
      __label__ = 29;
      break;
     case 29:
      
      
      
      if (HEAP[$k] < HEAP[$r]) {
        __label__ = 26;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      __label__ = 32;
      break;
     case 31:
      
      
      if (HEAP[$i] >= 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      var $246 = HEAP[HEAP[$result]] + 1;
      
      var $248 = HEAP[$result];
      HEAP[$248] = $246;
      var $249 = HEAP[$result];
      HEAP[$0] = $249;
      __label__ = 35;
      break;
     case 34:
      
      var $251 = HEAP[$po_addr] + 28;
      HEAP[$251] = 1;
      HEAP[$0] = 0;
      __label__ = 35;
      break;
     case 35:
      var $252 = HEAP[$0];
      HEAP[$retval] = $252;
      __label__ = 36;
      break;
     case 36:
      var $retval34 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval34;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _compress_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $seq1 = __stackBase__ + 20;
      var $seq2 = __stackBase__ + 24;
      var $data = __stackBase__ + 28;
      var $selectors = __stackBase__ + 32;
      var $lz = __stackBase__ + 36;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$data] = 0;
      HEAP[$selectors] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwds_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str55, _kwargs_11179, allocate([ $seq1, 0, 0, 0, $seq2, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$seq1];
      var $6 = _PyObject_GetIter($5);
      HEAP[$data] = $6;
      
      
      if (HEAP[$data] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $9 = HEAP[$seq2];
      var $10 = _PyObject_GetIter($9);
      HEAP[$selectors] = $10;
      
      
      if (HEAP[$selectors] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      var $15 = HEAP[HEAP[$type_addr] + 152];
      var $16 = HEAP[$type_addr];
      var $17 = FUNCTION_TABLE[$15]($16, 0);
      var $18 = $17;
      HEAP[$lz] = $18;
      
      
      if (HEAP[$lz] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $22 = HEAP[$lz] + 8;
      var $23 = HEAP[$data];
      HEAP[$22] = $23;
      
      var $25 = HEAP[$lz] + 12;
      var $26 = HEAP[$selectors];
      HEAP[$25] = $26;
      
      var $28 = HEAP[$lz];
      HEAP[$0] = $28;
      __label__ = 13;
      break;
     case 6:
      
      
      if (HEAP[$data] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      var $34 = HEAP[HEAP[$data]] - 1;
      
      var $36 = HEAP[$data];
      HEAP[$36] = $34;
      
      
      
      
      if (HEAP[HEAP[$data]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $45 = HEAP[HEAP[HEAP[$data] + 4] + 24];
      var $46 = HEAP[$data];
      FUNCTION_TABLE[$45]($46);
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$selectors] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      var $52 = HEAP[HEAP[$selectors]] - 1;
      
      var $54 = HEAP[$selectors];
      HEAP[$54] = $52;
      
      
      
      
      if (HEAP[HEAP[$selectors]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $63 = HEAP[HEAP[HEAP[$selectors] + 4] + 24];
      var $64 = HEAP[$selectors];
      FUNCTION_TABLE[$63]($64);
      __label__ = 12;
      break;
     case 12:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 13:
      var $65 = HEAP[$0];
      HEAP[$retval] = $65;
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
  function _compress_dealloc($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      
      HEAP[$lz_addr] = $lz;
      
      var $1 = HEAP[$lz_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$lz_addr] + 8];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 8] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$lz_addr] + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$lz_addr] + 12];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 12] + 4] + 24];
      
      
      var $49 = HEAP[HEAP[$lz_addr] + 12];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$lz_addr] + 4] + 160];
      
      var $57 = HEAP[$lz_addr];
      FUNCTION_TABLE[$55]($57);
      __label__ = 7;
      break;
     case 7:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _compress_traverse($lz, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      
      HEAP[$lz_addr] = $lz;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$lz_addr] + 8];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$lz_addr] + 12];
      var $21 = HEAP[$visit_addr];
      var $22 = HEAP[$arg_addr];
      var $23 = FUNCTION_TABLE[$21]($20, $22);
      HEAP[$vret4] = $23;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = HEAP[$vret4];
      HEAP[$0] = $26;
      __label__ = 7;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
      __label__ = 8;
      break;
     case 8:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _compress_next($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $data = __stackBase__ + 12;
      var $selectors = __stackBase__ + 16;
      var $datum = __stackBase__ + 20;
      var $selector = __stackBase__ + 24;
      var $datanext = __stackBase__ + 28;
      var $selectornext = __stackBase__ + 32;
      var $ok = __stackBase__ + 36;
      
      HEAP[$lz_addr] = $lz;
      
      
      var $3 = HEAP[HEAP[$lz_addr] + 8];
      HEAP[$data] = $3;
      
      
      var $6 = HEAP[HEAP[$lz_addr] + 12];
      HEAP[$selectors] = $6;
      
      
      
      
      var $11 = HEAP[HEAP[HEAP[$data] + 4] + 112];
      HEAP[$datanext] = $11;
      
      
      
      
      var $16 = HEAP[HEAP[HEAP[$selectors] + 4] + 112];
      HEAP[$selectornext] = $16;
      __label__ = 1;
      break;
     case 1:
      var $17 = HEAP[$datanext];
      var $18 = HEAP[$data];
      var $19 = FUNCTION_TABLE[$17]($18);
      HEAP[$datum] = $19;
      
      
      if (HEAP[$datum] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 3:
      var $22 = HEAP[$selectornext];
      var $23 = HEAP[$selectors];
      var $24 = FUNCTION_TABLE[$22]($23);
      HEAP[$selector] = $24;
      
      
      if (HEAP[$selector] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $30 = HEAP[HEAP[$datum]] - 1;
      
      var $32 = HEAP[$datum];
      HEAP[$32] = $30;
      
      
      
      
      if (HEAP[HEAP[$datum]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $41 = HEAP[HEAP[HEAP[$datum] + 4] + 24];
      var $42 = HEAP[$datum];
      FUNCTION_TABLE[$41]($42);
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 7:
      var $43 = HEAP[$selector];
      var $44 = _PyObject_IsTrue($43);
      HEAP[$ok] = $44;
      
      
      
      var $48 = HEAP[HEAP[$selector]] - 1;
      
      var $50 = HEAP[$selector];
      HEAP[$50] = $48;
      
      
      
      
      if (HEAP[HEAP[$selector]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $59 = HEAP[HEAP[HEAP[$selector] + 4] + 24];
      var $60 = HEAP[$selector];
      FUNCTION_TABLE[$59]($60);
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$ok] == 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $63 = HEAP[$datum];
      HEAP[$0] = $63;
      __label__ = 16;
      break;
     case 11:
      
      
      
      var $67 = HEAP[HEAP[$datum]] - 1;
      
      var $69 = HEAP[$datum];
      HEAP[$69] = $67;
      
      
      
      
      if (HEAP[HEAP[$datum]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $78 = HEAP[HEAP[HEAP[$datum] + 4] + 24];
      var $79 = HEAP[$datum];
      FUNCTION_TABLE[$78]($79);
      __label__ = 13;
      break;
     case 13:
      
      var $81 = HEAP[$ok] == -1;
      if ($81) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 15:
      __label__ = 1;
      break;
     case 16:
      var $82 = HEAP[$0];
      HEAP[$retval] = $82;
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
  function _ifilter_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $func = __stackBase__ + 20;
      var $seq = __stackBase__ + 24;
      var $it = __stackBase__ + 28;
      var $lz = __stackBase__ + 32;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      
      if (HEAP[$type_addr] == _ifilter_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[$kwds_addr];
      var $4 = __PyArg_NoKeywords(__str59, $3);
      
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
      var $6 = HEAP[$args_addr];
      var $7 = _PyArg_UnpackTuple($6, __str60, 2, 2, allocate([ $func, 0, 0, 0, $seq, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
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
      var $9 = HEAP[$seq];
      var $10 = _PyObject_GetIter($9);
      HEAP[$it] = $10;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 7:
      
      
      var $15 = HEAP[HEAP[$type_addr] + 152];
      var $16 = HEAP[$type_addr];
      var $17 = FUNCTION_TABLE[$15]($16, 0);
      var $18 = $17;
      HEAP[$lz] = $18;
      
      
      if (HEAP[$lz] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $24 = HEAP[HEAP[$it]] - 1;
      
      var $26 = HEAP[$it];
      HEAP[$26] = $24;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $35 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $36 = HEAP[$it];
      FUNCTION_TABLE[$35]($36);
      __label__ = 10;
      break;
     case 10:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 11:
      
      
      
      var $40 = HEAP[HEAP[$func]] + 1;
      var $41 = HEAP[$func];
      HEAP[$41] = $40;
      var $42 = HEAP[$func];
      
      var $44 = HEAP[$lz] + 8;
      HEAP[$44] = $42;
      
      var $46 = HEAP[$lz] + 12;
      var $47 = HEAP[$it];
      HEAP[$46] = $47;
      
      var $49 = HEAP[$lz];
      HEAP[$0] = $49;
      __label__ = 12;
      break;
     case 12:
      var $50 = HEAP[$0];
      HEAP[$retval] = $50;
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
  function _ifilter_dealloc($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      
      HEAP[$lz_addr] = $lz;
      
      var $1 = HEAP[$lz_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$lz_addr] + 8];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 8] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$lz_addr] + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$lz_addr] + 12];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 12] + 4] + 24];
      
      
      var $49 = HEAP[HEAP[$lz_addr] + 12];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$lz_addr] + 4] + 160];
      
      var $57 = HEAP[$lz_addr];
      FUNCTION_TABLE[$55]($57);
      __label__ = 7;
      break;
     case 7:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ifilter_traverse($lz, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      
      HEAP[$lz_addr] = $lz;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$lz_addr] + 12];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$lz_addr] + 8];
      var $21 = HEAP[$visit_addr];
      var $22 = HEAP[$arg_addr];
      var $23 = FUNCTION_TABLE[$21]($20, $22);
      HEAP[$vret4] = $23;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = HEAP[$vret4];
      HEAP[$0] = $26;
      __label__ = 7;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
      __label__ = 8;
      break;
     case 8:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ifilter_next($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $item = __stackBase__ + 12;
      var $it = __stackBase__ + 16;
      var $ok = __stackBase__ + 20;
      var $iternext = __stackBase__ + 24;
      var $good = __stackBase__ + 28;
      
      HEAP[$lz_addr] = $lz;
      
      
      var $3 = HEAP[HEAP[$lz_addr] + 12];
      HEAP[$it] = $3;
      
      
      
      
      var $8 = HEAP[HEAP[HEAP[$it] + 4] + 112];
      HEAP[$iternext] = $8;
      __label__ = 1;
      break;
     case 1:
      var $9 = HEAP[$iternext];
      var $10 = HEAP[$it];
      var $11 = FUNCTION_TABLE[$9]($10);
      HEAP[$item] = $11;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] == __Py_NoneStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] == _PyBool_Type) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $22 = HEAP[$item];
      var $23 = _PyObject_IsTrue($22);
      HEAP[$ok] = $23;
      __label__ = 12;
      break;
     case 6:
      
      
      var $26 = HEAP[HEAP[$lz_addr] + 8];
      var $27 = HEAP[$item];
      var $28 = _PyObject_CallFunctionObjArgs($26, allocate([ $27, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$good] = $28;
      
      
      if (HEAP[$good] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      var $34 = HEAP[HEAP[$item]] - 1;
      
      var $36 = HEAP[$item];
      HEAP[$36] = $34;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $45 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $46 = HEAP[$item];
      FUNCTION_TABLE[$45]($46);
      __label__ = 9;
      break;
     case 9:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 10:
      var $47 = HEAP[$good];
      var $48 = _PyObject_IsTrue($47);
      HEAP[$ok] = $48;
      
      
      
      var $52 = HEAP[HEAP[$good]] - 1;
      
      var $54 = HEAP[$good];
      HEAP[$54] = $52;
      
      
      
      
      if (HEAP[HEAP[$good]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $63 = HEAP[HEAP[HEAP[$good] + 4] + 24];
      var $64 = HEAP[$good];
      FUNCTION_TABLE[$63]($64);
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$ok] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $67 = HEAP[$item];
      HEAP[$0] = $67;
      __label__ = 17;
      break;
     case 14:
      
      
      
      var $71 = HEAP[HEAP[$item]] - 1;
      
      var $73 = HEAP[$item];
      HEAP[$73] = $71;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $82 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $83 = HEAP[$item];
      FUNCTION_TABLE[$82]($83);
      __label__ = 16;
      break;
     case 16:
      __label__ = 1;
      break;
     case 17:
      var $84 = HEAP[$0];
      HEAP[$retval] = $84;
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
  function _ifilterfalse_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $func = __stackBase__ + 20;
      var $seq = __stackBase__ + 24;
      var $it = __stackBase__ + 28;
      var $lz = __stackBase__ + 32;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      
      if (HEAP[$type_addr] == _ifilterfalse_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[$kwds_addr];
      var $4 = __PyArg_NoKeywords(__str62, $3);
      
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
      var $6 = HEAP[$args_addr];
      var $7 = _PyArg_UnpackTuple($6, __str63, 2, 2, allocate([ $func, 0, 0, 0, $seq, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
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
      var $9 = HEAP[$seq];
      var $10 = _PyObject_GetIter($9);
      HEAP[$it] = $10;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 7:
      
      
      var $15 = HEAP[HEAP[$type_addr] + 152];
      var $16 = HEAP[$type_addr];
      var $17 = FUNCTION_TABLE[$15]($16, 0);
      var $18 = $17;
      HEAP[$lz] = $18;
      
      
      if (HEAP[$lz] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $24 = HEAP[HEAP[$it]] - 1;
      
      var $26 = HEAP[$it];
      HEAP[$26] = $24;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $35 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $36 = HEAP[$it];
      FUNCTION_TABLE[$35]($36);
      __label__ = 10;
      break;
     case 10:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 11:
      
      
      
      var $40 = HEAP[HEAP[$func]] + 1;
      var $41 = HEAP[$func];
      HEAP[$41] = $40;
      var $42 = HEAP[$func];
      
      var $44 = HEAP[$lz] + 8;
      HEAP[$44] = $42;
      
      var $46 = HEAP[$lz] + 12;
      var $47 = HEAP[$it];
      HEAP[$46] = $47;
      
      var $49 = HEAP[$lz];
      HEAP[$0] = $49;
      __label__ = 12;
      break;
     case 12:
      var $50 = HEAP[$0];
      HEAP[$retval] = $50;
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
  function _ifilterfalse_dealloc($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      
      HEAP[$lz_addr] = $lz;
      
      var $1 = HEAP[$lz_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$lz_addr] + 8];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 8] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$lz_addr] + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$lz_addr] + 12];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 12] + 4] + 24];
      
      
      var $49 = HEAP[HEAP[$lz_addr] + 12];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$lz_addr] + 4] + 160];
      
      var $57 = HEAP[$lz_addr];
      FUNCTION_TABLE[$55]($57);
      __label__ = 7;
      break;
     case 7:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ifilterfalse_traverse($lz, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      
      HEAP[$lz_addr] = $lz;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$lz_addr] + 12];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$lz_addr] + 8];
      var $21 = HEAP[$visit_addr];
      var $22 = HEAP[$arg_addr];
      var $23 = FUNCTION_TABLE[$21]($20, $22);
      HEAP[$vret4] = $23;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = HEAP[$vret4];
      HEAP[$0] = $26;
      __label__ = 7;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
      __label__ = 8;
      break;
     case 8:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ifilterfalse_next($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $item = __stackBase__ + 12;
      var $it = __stackBase__ + 16;
      var $ok = __stackBase__ + 20;
      var $iternext = __stackBase__ + 24;
      var $good = __stackBase__ + 28;
      
      HEAP[$lz_addr] = $lz;
      
      
      var $3 = HEAP[HEAP[$lz_addr] + 12];
      HEAP[$it] = $3;
      
      
      
      
      var $8 = HEAP[HEAP[HEAP[$it] + 4] + 112];
      HEAP[$iternext] = $8;
      __label__ = 1;
      break;
     case 1:
      var $9 = HEAP[$iternext];
      var $10 = HEAP[$it];
      var $11 = FUNCTION_TABLE[$9]($10);
      HEAP[$item] = $11;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] == __Py_NoneStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] == _PyBool_Type) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $22 = HEAP[$item];
      var $23 = _PyObject_IsTrue($22);
      HEAP[$ok] = $23;
      __label__ = 12;
      break;
     case 6:
      
      
      var $26 = HEAP[HEAP[$lz_addr] + 8];
      var $27 = HEAP[$item];
      var $28 = _PyObject_CallFunctionObjArgs($26, allocate([ $27, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$good] = $28;
      
      
      if (HEAP[$good] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      var $34 = HEAP[HEAP[$item]] - 1;
      
      var $36 = HEAP[$item];
      HEAP[$36] = $34;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $45 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $46 = HEAP[$item];
      FUNCTION_TABLE[$45]($46);
      __label__ = 9;
      break;
     case 9:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 10:
      var $47 = HEAP[$good];
      var $48 = _PyObject_IsTrue($47);
      HEAP[$ok] = $48;
      
      
      
      var $52 = HEAP[HEAP[$good]] - 1;
      
      var $54 = HEAP[$good];
      HEAP[$54] = $52;
      
      
      
      
      if (HEAP[HEAP[$good]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $63 = HEAP[HEAP[HEAP[$good] + 4] + 24];
      var $64 = HEAP[$good];
      FUNCTION_TABLE[$63]($64);
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $67 = HEAP[$item];
      HEAP[$0] = $67;
      __label__ = 17;
      break;
     case 14:
      
      
      
      var $71 = HEAP[HEAP[$item]] - 1;
      
      var $73 = HEAP[$item];
      HEAP[$73] = $71;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $82 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $83 = HEAP[$item];
      FUNCTION_TABLE[$82]($83);
      __label__ = 16;
      break;
     case 16:
      __label__ = 1;
      break;
     case 17:
      var $84 = HEAP[$0];
      HEAP[$retval] = $84;
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
  function _count_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $lz = __stackBase__ + 20;
      var $slow_mode = __stackBase__ + 24;
      var $cnt = __stackBase__ + 28;
      var $long_cnt = __stackBase__ + 32;
      var $long_step = __stackBase__ + 36;
      var $_py_tmp = __stackBase__ + 40;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$slow_mode] = 0;
      HEAP[$cnt] = 0;
      HEAP[$long_cnt] = 0;
      HEAP[$long_step] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwds_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str65, _kwlist_11645, allocate([ $long_cnt, 0, 0, 0, $long_step, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      
      if (HEAP[$long_cnt] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $7 = HEAP[$long_cnt];
      var $8 = _PyNumber_Check($7);
      
      if ($8 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if (HEAP[$long_step] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $12 = HEAP[$long_step];
      var $13 = _PyNumber_Check($12);
      
      if ($13 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $15 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($15, __str68);
      HEAP[$0] = 0;
      __label__ = 49;
      break;
     case 7:
      
      
      if (HEAP[$long_cnt] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 8:
      var $18 = HEAP[$long_cnt];
      var $19 = _PyInt_AsSsize_t($18);
      HEAP[$cnt] = $19;
      
      var $21 = HEAP[$cnt] != -1;
      if ($21) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $22 = _PyErr_Occurred();
      
      if ($22 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$long_cnt] + 4] + 84] & 8388608) == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      _PyErr_Clear();
      HEAP[$slow_mode] = 1;
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $34 = HEAP[HEAP[$long_cnt]] + 1;
      var $35 = HEAP[$long_cnt];
      HEAP[$35] = $34;
      __label__ = 14;
      break;
     case 13:
      HEAP[$cnt] = 0;
      var $36 = _PyInt_FromLong(0);
      HEAP[$long_cnt] = $36;
      __label__ = 14;
      break;
     case 14:
      
      
      if (HEAP[$long_step] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 15:
      var $39 = _PyInt_FromLong(1);
      HEAP[$long_step] = $39;
      
      
      if (HEAP[$long_step] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      var $42 = HEAP[$long_cnt];
      
      
      var $45 = HEAP[$42] - 1;
      var $46 = $42;
      HEAP[$46] = $45;
      
      
      
      if (HEAP[$42] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$long_cnt] + 4] + 24];
      var $55 = HEAP[$long_cnt];
      FUNCTION_TABLE[$54]($55);
      __label__ = 18;
      break;
     case 18:
      HEAP[$0] = 0;
      __label__ = 49;
      break;
     case 19:
      __label__ = 21;
      break;
     case 20:
      
      
      
      var $59 = HEAP[HEAP[$long_step]] + 1;
      var $60 = HEAP[$long_step];
      HEAP[$60] = $59;
      __label__ = 21;
      break;
     case 21:
      
      
      if (HEAP[$long_cnt] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      if (HEAP[$long_step] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      ___assert_fail(__str69, __str5, 3272, ___PRETTY_FUNCTION___11646);
      throw "Reached an unreachable!";
     case 24:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$long_step] + 4] + 84] & 8388608) == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      if (HEAP[HEAP[$long_step] + 8] != 1) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      HEAP[$slow_mode] = 1;
      __label__ = 27;
      break;
     case 27:
      
      
      if (HEAP[$slow_mode] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      HEAP[$cnt] = 2147483647;
      __label__ = 32;
      break;
     case 29:
      
      
      if (HEAP[$long_cnt] != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      var $81 = HEAP[$long_cnt];
      HEAP[$_py_tmp] = $81;
      HEAP[$long_cnt] = 0;
      
      
      
      var $85 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $87 = HEAP[$_py_tmp];
      HEAP[$87] = $85;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $96 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $97 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$96]($97);
      __label__ = 32;
      break;
     case 32:
      
      
      if (HEAP[$cnt] == 2147483647) {
        __label__ = 35;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      if (HEAP[$long_cnt] != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      if (HEAP[$slow_mode] != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 35:
      
      
      if (HEAP[$cnt] != 2147483647) {
        __label__ = 38;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      if (HEAP[$long_cnt] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      if (HEAP[$slow_mode] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      ___assert_fail(__str70, __str5, 3286, ___PRETTY_FUNCTION___11646);
      throw "Reached an unreachable!";
     case 39:
      
      
      if (HEAP[$slow_mode] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 40:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$long_step] + 4] + 84] & 8388608) == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 41:
      
      
      
      
      
      if (HEAP[HEAP[$long_step] + 8] != 1) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      ___assert_fail(__str71, __str5, 3288, ___PRETTY_FUNCTION___11646);
      throw "Reached an unreachable!";
     case 43:
      
      
      var $126 = HEAP[HEAP[$type_addr] + 152];
      var $127 = HEAP[$type_addr];
      var $128 = FUNCTION_TABLE[$126]($127, 0);
      var $129 = $128;
      HEAP[$lz] = $129;
      
      
      if (HEAP[$lz] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 44:
      
      
      if (HEAP[$long_cnt] != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 45:
      var $134 = HEAP[$long_cnt];
      
      
      var $137 = HEAP[$134] - 1;
      var $138 = $134;
      HEAP[$138] = $137;
      
      
      
      if (HEAP[$134] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      
      
      var $146 = HEAP[HEAP[HEAP[$long_cnt] + 4] + 24];
      var $147 = HEAP[$long_cnt];
      FUNCTION_TABLE[$146]($147);
      __label__ = 47;
      break;
     case 47:
      HEAP[$0] = 0;
      __label__ = 49;
      break;
     case 48:
      
      var $149 = HEAP[$lz] + 8;
      var $150 = HEAP[$cnt];
      HEAP[$149] = $150;
      var $151 = HEAP[$long_cnt];
      
      var $153 = HEAP[$lz] + 12;
      HEAP[$153] = $151;
      var $154 = HEAP[$long_step];
      
      var $156 = HEAP[$lz] + 16;
      HEAP[$156] = $154;
      
      var $158 = HEAP[$lz];
      HEAP[$0] = $158;
      __label__ = 49;
      break;
     case 49:
      var $159 = HEAP[$0];
      HEAP[$retval] = $159;
      __label__ = 50;
      break;
     case 50:
      var $retval49 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval49;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _count_dealloc($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      
      HEAP[$lz_addr] = $lz;
      
      var $1 = HEAP[$lz_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$lz_addr] + 12];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 12] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$lz_addr] + 12];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$lz_addr] + 16];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 16] + 4] + 24];
      
      
      var $49 = HEAP[HEAP[$lz_addr] + 16];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$lz_addr] + 4] + 160];
      
      var $57 = HEAP[$lz_addr];
      FUNCTION_TABLE[$55]($57);
      __label__ = 7;
      break;
     case 7:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _count_traverse($lz, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      
      HEAP[$lz_addr] = $lz;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$lz_addr] + 12];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$lz_addr] + 16];
      var $21 = HEAP[$visit_addr];
      var $22 = HEAP[$arg_addr];
      var $23 = FUNCTION_TABLE[$21]($20, $22);
      HEAP[$vret4] = $23;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = HEAP[$vret4];
      HEAP[$0] = $26;
      __label__ = 7;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
      __label__ = 8;
      break;
     case 8:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _count_nextlong($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $long_cnt = __stackBase__ + 12;
      var $stepped_up = __stackBase__ + 16;
      
      HEAP[$lz_addr] = $lz;
      
      
      var $3 = HEAP[HEAP[$lz_addr] + 12];
      HEAP[$long_cnt] = $3;
      
      
      if (HEAP[$long_cnt] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $6 = _PyInt_FromSsize_t(2147483647);
      HEAP[$long_cnt] = $6;
      
      
      if (HEAP[$long_cnt] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 2147483647) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if (HEAP[$long_cnt] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str72, __str5, 3333, ___PRETTY_FUNCTION___11833);
      throw "Reached an unreachable!";
     case 6:
      
      
      var $17 = HEAP[HEAP[$lz_addr] + 16];
      var $18 = HEAP[$long_cnt];
      var $19 = _PyNumber_Add($18, $17);
      HEAP[$stepped_up] = $19;
      
      
      if (HEAP[$stepped_up] == 0) {
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
      
      var $23 = HEAP[$lz_addr] + 12;
      var $24 = HEAP[$stepped_up];
      HEAP[$23] = $24;
      var $25 = HEAP[$long_cnt];
      HEAP[$0] = $25;
      __label__ = 9;
      break;
     case 9:
      var $26 = HEAP[$0];
      HEAP[$retval] = $26;
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
  function _count_next($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$lz_addr] = $lz;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] == 2147483647) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[$lz_addr];
      var $6 = _count_nextlong($5);
      HEAP[$0] = $6;
      __label__ = 3;
      break;
     case 2:
      
      
      var $9 = HEAP[HEAP[$lz_addr] + 8];
      var $10 = $9 + 1;
      
      var $12 = HEAP[$lz_addr] + 8;
      HEAP[$12] = $10;
      var $13 = _PyInt_FromSsize_t($9);
      HEAP[$0] = $13;
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
  function _count_repr($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $cnt_repr = __stackBase__ + 12;
      var $step_repr = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      
      HEAP[$lz_addr] = $lz;
      HEAP[$step_repr] = 0;
      HEAP[$result] = 0;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] != 2147483647) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$lz_addr] + 8];
      var $8 = _PyString_FromFormat(__str73, allocate([ $7, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $8;
      __label__ = 15;
      break;
     case 2:
      
      
      var $11 = HEAP[HEAP[$lz_addr] + 12];
      var $12 = _PyObject_Repr($11);
      HEAP[$cnt_repr] = $12;
      
      
      if (HEAP[$cnt_repr] == 0) {
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
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[HEAP[$lz_addr] + 16] + 4] + 84] & 8388608) == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$lz_addr] + 16] + 8] != 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $34 = HEAP[$cnt_repr] + 20;
      var $35 = _PyString_FromFormat(__str74, allocate([ $34, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $35;
      __label__ = 9;
      break;
     case 7:
      
      
      var $38 = HEAP[HEAP[$lz_addr] + 16];
      var $39 = _PyObject_Repr($38);
      HEAP[$step_repr] = $39;
      
      
      if (HEAP[$step_repr] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      var $45 = HEAP[$step_repr] + 20;
      
      
      
      var $49 = HEAP[$cnt_repr] + 20;
      var $50 = _PyString_FromFormat(__str75, allocate([ $49, 0, 0, 0, $45, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $50;
      __label__ = 9;
      break;
     case 9:
      
      
      
      var $54 = HEAP[HEAP[$cnt_repr]] - 1;
      
      var $56 = HEAP[$cnt_repr];
      HEAP[$56] = $54;
      
      
      
      
      if (HEAP[HEAP[$cnt_repr]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $65 = HEAP[HEAP[HEAP[$cnt_repr] + 4] + 24];
      var $66 = HEAP[$cnt_repr];
      FUNCTION_TABLE[$65]($66);
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$step_repr] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      
      var $72 = HEAP[HEAP[$step_repr]] - 1;
      
      var $74 = HEAP[$step_repr];
      HEAP[$74] = $72;
      
      
      
      
      if (HEAP[HEAP[$step_repr]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $83 = HEAP[HEAP[HEAP[$step_repr] + 4] + 24];
      var $84 = HEAP[$step_repr];
      FUNCTION_TABLE[$83]($84);
      __label__ = 14;
      break;
     case 14:
      var $85 = HEAP[$result];
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
  function _count_reduce($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$lz_addr] = $lz;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 8] == 2147483647) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$lz_addr] + 16];
      
      
      var $10 = HEAP[HEAP[$lz_addr] + 12];
      
      
      
      var $14 = HEAP[HEAP[$lz_addr] + 4];
      var $15 = _Py_BuildValue(__str76, allocate([ $14, 0, 0, 0, $10, 0, 0, 0, $7, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $15;
      __label__ = 3;
      break;
     case 2:
      
      
      var $18 = HEAP[HEAP[$lz_addr] + 8];
      
      
      
      var $22 = HEAP[HEAP[$lz_addr] + 4];
      var $23 = _Py_BuildValue(__str77, allocate([ $22, 0, 0, 0, $18, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $23;
      __label__ = 3;
      break;
     case 3:
      var $24 = HEAP[$0];
      HEAP[$retval] = $24;
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
  function _izip_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $lz = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      var $ittuple = __stackBase__ + 28;
      var $result = __stackBase__ + 32;
      var $tuplesize = __stackBase__ + 36;
      var $item = __stackBase__ + 40;
      var $it = __stackBase__ + 44;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      var $1 = HEAP[$args_addr];
      var $2 = _PySequence_Size($1);
      HEAP[$tuplesize] = $2;
      
      
      if (HEAP[$type_addr] == _izip_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = HEAP[$kwds_addr];
      var $6 = __PyArg_NoKeywords(__str80, $5);
      
      if ($6 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 30;
      break;
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$args_addr] + 4] + 84] & 67108864) == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str43, __str5, 3477, ___PRETTY_FUNCTION___11957);
      throw "Reached an unreachable!";
     case 5:
      var $15 = HEAP[$tuplesize];
      var $16 = _PyTuple_New($15);
      HEAP[$ittuple] = $16;
      
      
      if (HEAP[$ittuple] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 30;
      break;
     case 7:
      HEAP[$i] = 0;
      __label__ = 15;
      break;
     case 8:
      
      
      
      
      
      var $24 = HEAP[HEAP[$args_addr] + 12 + HEAP[$i] * 4];
      HEAP[$item] = $24;
      var $25 = HEAP[$item];
      var $26 = _PyObject_GetIter($25);
      HEAP[$it] = $26;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 9:
      var $29 = HEAP[_PyExc_TypeError];
      var $30 = _PyErr_ExceptionMatches($29);
      
      if ($30 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $33 = HEAP[$i] + 1;
      var $34 = HEAP[_PyExc_TypeError];
      var $35 = _PyErr_Format($34, __str81, allocate([ $33, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 11;
      break;
     case 11:
      
      
      
      var $39 = HEAP[HEAP[$ittuple]] - 1;
      
      var $41 = HEAP[$ittuple];
      HEAP[$41] = $39;
      
      
      
      
      if (HEAP[HEAP[$ittuple]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $50 = HEAP[HEAP[HEAP[$ittuple] + 4] + 24];
      var $51 = HEAP[$ittuple];
      FUNCTION_TABLE[$50]($51);
      __label__ = 13;
      break;
     case 13:
      HEAP[$0] = 0;
      __label__ = 30;
      break;
     case 14:
      
      
      
      
      var $56 = HEAP[$ittuple] + 12 + HEAP[$i] * 4;
      var $57 = HEAP[$it];
      HEAP[$56] = $57;
      
      var $59 = HEAP[$i] + 1;
      HEAP[$i] = $59;
      __label__ = 15;
      break;
     case 15:
      
      
      
      if (HEAP[$i] < HEAP[$tuplesize]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $63 = HEAP[$tuplesize];
      var $64 = _PyTuple_New($63);
      HEAP[$result] = $64;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      
      
      
      var $70 = HEAP[HEAP[$ittuple]] - 1;
      
      var $72 = HEAP[$ittuple];
      HEAP[$72] = $70;
      
      
      
      
      if (HEAP[HEAP[$ittuple]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $81 = HEAP[HEAP[HEAP[$ittuple] + 4] + 24];
      var $82 = HEAP[$ittuple];
      FUNCTION_TABLE[$81]($82);
      __label__ = 19;
      break;
     case 19:
      HEAP[$0] = 0;
      __label__ = 30;
      break;
     case 20:
      HEAP[$i] = 0;
      __label__ = 22;
      break;
     case 21:
      
      var $84 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $84;
      
      
      
      
      var $89 = HEAP[$result] + 12 + HEAP[$i] * 4;
      HEAP[$89] = __Py_NoneStruct;
      
      var $91 = HEAP[$i] + 1;
      HEAP[$i] = $91;
      __label__ = 22;
      break;
     case 22:
      
      
      
      if (HEAP[$i] < HEAP[$tuplesize]) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      var $97 = HEAP[HEAP[$type_addr] + 152];
      var $98 = HEAP[$type_addr];
      var $99 = FUNCTION_TABLE[$97]($98, 0);
      var $100 = $99;
      HEAP[$lz] = $100;
      
      
      if (HEAP[$lz] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 24:
      
      
      
      var $106 = HEAP[HEAP[$ittuple]] - 1;
      
      var $108 = HEAP[$ittuple];
      HEAP[$108] = $106;
      
      
      
      
      if (HEAP[HEAP[$ittuple]] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $117 = HEAP[HEAP[HEAP[$ittuple] + 4] + 24];
      var $118 = HEAP[$ittuple];
      FUNCTION_TABLE[$117]($118);
      __label__ = 26;
      break;
     case 26:
      
      
      
      var $122 = HEAP[HEAP[$result]] - 1;
      
      var $124 = HEAP[$result];
      HEAP[$124] = $122;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $133 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $134 = HEAP[$result];
      FUNCTION_TABLE[$133]($134);
      __label__ = 28;
      break;
     case 28:
      HEAP[$0] = 0;
      __label__ = 30;
      break;
     case 29:
      
      var $136 = HEAP[$lz] + 12;
      var $137 = HEAP[$ittuple];
      HEAP[$136] = $137;
      
      var $139 = HEAP[$lz] + 8;
      var $140 = HEAP[$tuplesize];
      HEAP[$139] = $140;
      
      var $142 = HEAP[$lz] + 16;
      var $143 = HEAP[$result];
      HEAP[$142] = $143;
      
      var $145 = HEAP[$lz];
      HEAP[$0] = $145;
      __label__ = 30;
      break;
     case 30:
      var $146 = HEAP[$0];
      HEAP[$retval] = $146;
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
  function _izip_dealloc($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      
      HEAP[$lz_addr] = $lz;
      
      var $1 = HEAP[$lz_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$lz_addr] + 12];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 12] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$lz_addr] + 12];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$lz_addr] + 16];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 16] + 4] + 24];
      
      
      var $49 = HEAP[HEAP[$lz_addr] + 16];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$lz_addr] + 4] + 160];
      
      var $57 = HEAP[$lz_addr];
      FUNCTION_TABLE[$55]($57);
      __label__ = 7;
      break;
     case 7:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _izip_traverse($lz, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      
      HEAP[$lz_addr] = $lz;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$lz_addr] + 12];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$lz_addr] + 16];
      var $21 = HEAP[$visit_addr];
      var $22 = HEAP[$arg_addr];
      var $23 = FUNCTION_TABLE[$21]($20, $22);
      HEAP[$vret4] = $23;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = HEAP[$vret4];
      HEAP[$0] = $26;
      __label__ = 7;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
      __label__ = 8;
      break;
     case 8:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _izip_next($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $i = __stackBase__ + 12;
      var $tuplesize = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      var $it = __stackBase__ + 24;
      var $item = __stackBase__ + 28;
      var $olditem = __stackBase__ + 32;
      
      HEAP[$lz_addr] = $lz;
      
      
      var $3 = HEAP[HEAP[$lz_addr] + 8];
      HEAP[$tuplesize] = $3;
      
      
      var $6 = HEAP[HEAP[$lz_addr] + 16];
      HEAP[$result] = $6;
      
      
      if (HEAP[$tuplesize] == 0) {
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
      
      
      
      
      if (HEAP[HEAP[$result]] == 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 3:
      
      
      
      var $16 = HEAP[HEAP[$result]] + 1;
      
      var $18 = HEAP[$result];
      HEAP[$18] = $16;
      HEAP[$i] = 0;
      __label__ = 11;
      break;
     case 4:
      
      
      
      
      
      
      
      var $26 = HEAP[HEAP[HEAP[$lz_addr] + 12] + 12 + HEAP[$i] * 4];
      HEAP[$it] = $26;
      
      
      
      
      var $31 = HEAP[HEAP[HEAP[$it] + 4] + 112];
      var $32 = HEAP[$it];
      var $33 = FUNCTION_TABLE[$31]($32);
      HEAP[$item] = $33;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $39 = HEAP[HEAP[$result]] - 1;
      
      var $41 = HEAP[$result];
      HEAP[$41] = $39;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $50 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $51 = HEAP[$result];
      FUNCTION_TABLE[$50]($51);
      __label__ = 7;
      break;
     case 7:
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 8:
      
      
      
      
      
      var $57 = HEAP[HEAP[$result] + 12 + HEAP[$i] * 4];
      HEAP[$olditem] = $57;
      
      
      
      
      var $62 = HEAP[$result] + 12 + HEAP[$i] * 4;
      var $63 = HEAP[$item];
      HEAP[$62] = $63;
      
      
      
      var $67 = HEAP[HEAP[$olditem]] - 1;
      
      var $69 = HEAP[$olditem];
      HEAP[$69] = $67;
      
      
      
      
      if (HEAP[HEAP[$olditem]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $78 = HEAP[HEAP[HEAP[$olditem] + 4] + 24];
      var $79 = HEAP[$olditem];
      FUNCTION_TABLE[$78]($79);
      __label__ = 10;
      break;
     case 10:
      
      var $81 = HEAP[$i] + 1;
      HEAP[$i] = $81;
      __label__ = 11;
      break;
     case 11:
      
      
      
      if (HEAP[$i] < HEAP[$tuplesize]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      __label__ = 22;
      break;
     case 13:
      var $85 = HEAP[$tuplesize];
      var $86 = _PyTuple_New($85);
      HEAP[$result] = $86;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 15:
      HEAP[$i] = 0;
      __label__ = 21;
      break;
     case 16:
      
      
      
      
      
      
      
      var $96 = HEAP[HEAP[HEAP[$lz_addr] + 12] + 12 + HEAP[$i] * 4];
      HEAP[$it] = $96;
      
      
      
      
      var $101 = HEAP[HEAP[HEAP[$it] + 4] + 112];
      var $102 = HEAP[$it];
      var $103 = FUNCTION_TABLE[$101]($102);
      HEAP[$item] = $103;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      
      
      
      var $109 = HEAP[HEAP[$result]] - 1;
      
      var $111 = HEAP[$result];
      HEAP[$111] = $109;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $120 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $121 = HEAP[$result];
      FUNCTION_TABLE[$120]($121);
      __label__ = 19;
      break;
     case 19:
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 20:
      
      
      
      
      var $126 = HEAP[$result] + 12 + HEAP[$i] * 4;
      var $127 = HEAP[$item];
      HEAP[$126] = $127;
      
      var $129 = HEAP[$i] + 1;
      HEAP[$i] = $129;
      __label__ = 21;
      break;
     case 21:
      
      
      
      if (HEAP[$i] < HEAP[$tuplesize]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      var $133 = HEAP[$result];
      HEAP[$0] = $133;
      __label__ = 23;
      break;
     case 23:
      var $134 = HEAP[$0];
      HEAP[$retval] = $134;
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
  function _repeat_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $ro = __stackBase__ + 20;
      var $element = __stackBase__ + 24;
      var $cnt = __stackBase__ + 28;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$cnt] = -1;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwds_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str83, _kwargs_12177, allocate([ $element, 0, 0, 0, $cnt, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$args_addr];
      var $6 = _PyTuple_Size($5);
      
      if ($6 == 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      if (HEAP[$cnt] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$cnt] = 0;
      __label__ = 5;
      break;
     case 5:
      
      
      var $12 = HEAP[HEAP[$type_addr] + 152];
      var $13 = HEAP[$type_addr];
      var $14 = FUNCTION_TABLE[$12]($13, 0);
      var $15 = $14;
      HEAP[$ro] = $15;
      
      
      if (HEAP[$ro] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 7:
      
      
      
      var $21 = HEAP[HEAP[$element]] + 1;
      var $22 = HEAP[$element];
      HEAP[$22] = $21;
      var $23 = HEAP[$element];
      
      var $25 = HEAP[$ro] + 8;
      HEAP[$25] = $23;
      var $26 = HEAP[$cnt];
      
      var $28 = HEAP[$ro] + 12;
      HEAP[$28] = $26;
      
      var $30 = HEAP[$ro];
      HEAP[$0] = $30;
      __label__ = 8;
      break;
     case 8:
      var $31 = HEAP[$0];
      HEAP[$retval] = $31;
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
  function _repeat_dealloc($ro) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ro_addr = __stackBase__;
      
      HEAP[$ro_addr] = $ro;
      
      var $1 = HEAP[$ro_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$ro_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$ro_addr] + 8];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$ro_addr] + 8] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$ro_addr] + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      var $31 = HEAP[HEAP[HEAP[$ro_addr] + 4] + 160];
      
      var $33 = HEAP[$ro_addr];
      FUNCTION_TABLE[$31]($33);
      __label__ = 4;
      break;
     case 4:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _repeat_traverse($ro, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ro_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      
      HEAP[$ro_addr] = $ro;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$ro_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$ro_addr] + 8];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 4;
      break;
     case 3:
      HEAP[$0] = 0;
      __label__ = 4;
      break;
     case 4:
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
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
  function _repeat_next($ro) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ro_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$ro_addr] = $ro;
      
      
      
      
      if (HEAP[HEAP[$ro_addr] + 12] == 0) {
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
      
      
      
      
      if (HEAP[HEAP[$ro_addr] + 12] > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $12 = HEAP[HEAP[$ro_addr] + 12] - 1;
      
      var $14 = HEAP[$ro_addr] + 12;
      HEAP[$14] = $12;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[$ro_addr] + 8]] + 1;
      var $21 = HEAP[HEAP[$ro_addr] + 8];
      HEAP[$21] = $20;
      
      
      var $24 = HEAP[HEAP[$ro_addr] + 8];
      HEAP[$0] = $24;
      __label__ = 5;
      break;
     case 5:
      var $25 = HEAP[$0];
      HEAP[$retval] = $25;
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
  function _repeat_repr($ro) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ro_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $result = __stackBase__ + 12;
      var $objrepr = __stackBase__ + 16;
      
      HEAP[$ro_addr] = $ro;
      
      
      var $3 = HEAP[HEAP[$ro_addr] + 8];
      var $4 = _PyObject_Repr($3);
      HEAP[$objrepr] = $4;
      
      
      if (HEAP[$objrepr] == 0) {
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
      
      
      
      var $10 = HEAP[HEAP[$ro_addr] + 12] == -1;
      if ($10) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $14 = HEAP[$objrepr] + 20;
      var $15 = _PyString_FromFormat(__str86, allocate([ $14, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $15;
      __label__ = 5;
      break;
     case 4:
      
      
      var $18 = HEAP[HEAP[$ro_addr] + 12];
      
      
      
      var $22 = HEAP[$objrepr] + 20;
      var $23 = _PyString_FromFormat(__str87, allocate([ $22, 0, 0, 0, $18, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $23;
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $27 = HEAP[HEAP[$objrepr]] - 1;
      
      var $29 = HEAP[$objrepr];
      HEAP[$29] = $27;
      
      
      
      
      if (HEAP[HEAP[$objrepr]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[$objrepr] + 4] + 24];
      var $39 = HEAP[$objrepr];
      FUNCTION_TABLE[$38]($39);
      __label__ = 7;
      break;
     case 7:
      var $40 = HEAP[$result];
      HEAP[$0] = $40;
      __label__ = 8;
      break;
     case 8:
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
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
  function _repeat_len($ro) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ro_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$ro_addr] = $ro;
      
      
      
      var $4 = HEAP[HEAP[$ro_addr] + 12] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($5, __str88);
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      var $8 = HEAP[HEAP[$ro_addr] + 12];
      var $9 = _PyInt_FromSize_t($8);
      HEAP[$0] = $9;
      __label__ = 3;
      break;
     case 3:
      var $10 = HEAP[$0];
      HEAP[$retval] = $10;
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
  function _izip_longest_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $lz = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      var $ittuple = __stackBase__ + 28;
      var $result = __stackBase__ + 32;
      var $fillvalue = __stackBase__ + 36;
      var $tuplesize = __stackBase__ + 40;
      var $item = __stackBase__ + 44;
      var $it = __stackBase__ + 48;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$fillvalue] = __Py_NoneStruct;
      var $1 = HEAP[$args_addr];
      var $2 = _PySequence_Size($1);
      HEAP[$tuplesize] = $2;
      
      
      if (HEAP[$kwds_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$kwds_addr] + 4] == _PyDict_Type) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      var $9 = HEAP[$kwds_addr];
      var $10 = _PyDict_Size($9);
      
      if ($10 > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      var $12 = HEAP[$kwds_addr];
      var $13 = _PyDict_GetItemString($12, __str91);
      HEAP[$fillvalue] = $13;
      
      
      if (HEAP[$fillvalue] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $16 = HEAP[$kwds_addr];
      var $17 = _PyDict_Size($16);
      
      if ($17 > 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $19 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($19, __str92);
      HEAP[$0] = 0;
      __label__ = 33;
      break;
     case 6:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$args_addr] + 4] + 84] & 67108864) == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      ___assert_fail(__str43, __str5, 3816, ___PRETTY_FUNCTION___12314);
      throw "Reached an unreachable!";
     case 8:
      var $27 = HEAP[$tuplesize];
      var $28 = _PyTuple_New($27);
      HEAP[$ittuple] = $28;
      
      
      if (HEAP[$ittuple] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = 0;
      __label__ = 33;
      break;
     case 10:
      HEAP[$i] = 0;
      __label__ = 18;
      break;
     case 11:
      
      
      
      
      
      var $36 = HEAP[HEAP[$args_addr] + 12 + HEAP[$i] * 4];
      HEAP[$item] = $36;
      var $37 = HEAP[$item];
      var $38 = _PyObject_GetIter($37);
      HEAP[$it] = $38;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 12:
      var $41 = HEAP[_PyExc_TypeError];
      var $42 = _PyErr_ExceptionMatches($41);
      
      if ($42 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      var $45 = HEAP[$i] + 1;
      var $46 = HEAP[_PyExc_TypeError];
      var $47 = _PyErr_Format($46, __str93, allocate([ $45, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 14;
      break;
     case 14:
      
      
      
      var $51 = HEAP[HEAP[$ittuple]] - 1;
      
      var $53 = HEAP[$ittuple];
      HEAP[$53] = $51;
      
      
      
      
      if (HEAP[HEAP[$ittuple]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $62 = HEAP[HEAP[HEAP[$ittuple] + 4] + 24];
      var $63 = HEAP[$ittuple];
      FUNCTION_TABLE[$62]($63);
      __label__ = 16;
      break;
     case 16:
      HEAP[$0] = 0;
      __label__ = 33;
      break;
     case 17:
      
      
      
      
      var $68 = HEAP[$ittuple] + 12 + HEAP[$i] * 4;
      var $69 = HEAP[$it];
      HEAP[$68] = $69;
      
      var $71 = HEAP[$i] + 1;
      HEAP[$i] = $71;
      __label__ = 18;
      break;
     case 18:
      
      
      
      if (HEAP[$i] < HEAP[$tuplesize]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      var $75 = HEAP[$tuplesize];
      var $76 = _PyTuple_New($75);
      HEAP[$result] = $76;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      
      
      
      var $82 = HEAP[HEAP[$ittuple]] - 1;
      
      var $84 = HEAP[$ittuple];
      HEAP[$84] = $82;
      
      
      
      
      if (HEAP[HEAP[$ittuple]] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $93 = HEAP[HEAP[HEAP[$ittuple] + 4] + 24];
      var $94 = HEAP[$ittuple];
      FUNCTION_TABLE[$93]($94);
      __label__ = 22;
      break;
     case 22:
      HEAP[$0] = 0;
      __label__ = 33;
      break;
     case 23:
      HEAP[$i] = 0;
      __label__ = 25;
      break;
     case 24:
      
      var $96 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $96;
      
      
      
      
      var $101 = HEAP[$result] + 12 + HEAP[$i] * 4;
      HEAP[$101] = __Py_NoneStruct;
      
      var $103 = HEAP[$i] + 1;
      HEAP[$i] = $103;
      __label__ = 25;
      break;
     case 25:
      
      
      
      if (HEAP[$i] < HEAP[$tuplesize]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      var $109 = HEAP[HEAP[$type_addr] + 152];
      var $110 = HEAP[$type_addr];
      var $111 = FUNCTION_TABLE[$109]($110, 0);
      var $112 = $111;
      HEAP[$lz] = $112;
      
      
      if (HEAP[$lz] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 27:
      
      
      
      var $118 = HEAP[HEAP[$ittuple]] - 1;
      
      var $120 = HEAP[$ittuple];
      HEAP[$120] = $118;
      
      
      
      
      if (HEAP[HEAP[$ittuple]] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $129 = HEAP[HEAP[HEAP[$ittuple] + 4] + 24];
      var $130 = HEAP[$ittuple];
      FUNCTION_TABLE[$129]($130);
      __label__ = 29;
      break;
     case 29:
      
      
      
      var $134 = HEAP[HEAP[$result]] - 1;
      
      var $136 = HEAP[$result];
      HEAP[$136] = $134;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $145 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $146 = HEAP[$result];
      FUNCTION_TABLE[$145]($146);
      __label__ = 31;
      break;
     case 31:
      HEAP[$0] = 0;
      __label__ = 33;
      break;
     case 32:
      
      var $148 = HEAP[$lz] + 16;
      var $149 = HEAP[$ittuple];
      HEAP[$148] = $149;
      
      var $151 = HEAP[$lz] + 8;
      var $152 = HEAP[$tuplesize];
      HEAP[$151] = $152;
      
      var $154 = HEAP[$lz] + 12;
      var $155 = HEAP[$tuplesize];
      HEAP[$154] = $155;
      
      var $157 = HEAP[$lz] + 20;
      var $158 = HEAP[$result];
      HEAP[$157] = $158;
      
      
      
      var $162 = HEAP[HEAP[$fillvalue]] + 1;
      
      var $164 = HEAP[$fillvalue];
      HEAP[$164] = $162;
      
      var $166 = HEAP[$lz] + 24;
      var $167 = HEAP[$fillvalue];
      HEAP[$166] = $167;
      
      var $169 = HEAP[$lz];
      HEAP[$0] = $169;
      __label__ = 33;
      break;
     case 33:
      var $170 = HEAP[$0];
      HEAP[$retval] = $170;
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
  function _izip_longest_dealloc($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      
      HEAP[$lz_addr] = $lz;
      
      var $1 = HEAP[$lz_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 16] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$lz_addr] + 16];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 16] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$lz_addr] + 16];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$lz_addr] + 20];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 20] + 4] + 24];
      
      
      var $49 = HEAP[HEAP[$lz_addr] + 20];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 24] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $56 = HEAP[HEAP[$lz_addr] + 24];
      
      
      var $59 = HEAP[$56] - 1;
      var $60 = $56;
      HEAP[$60] = $59;
      
      
      
      if (HEAP[$56] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $70 = HEAP[HEAP[HEAP[HEAP[$lz_addr] + 24] + 4] + 24];
      
      
      var $73 = HEAP[HEAP[$lz_addr] + 24];
      FUNCTION_TABLE[$70]($73);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      
      var $79 = HEAP[HEAP[HEAP[$lz_addr] + 4] + 160];
      
      var $81 = HEAP[$lz_addr];
      FUNCTION_TABLE[$79]($81);
      __label__ = 10;
      break;
     case 10:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _izip_longest_traverse($lz, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $visit_addr = __stackBase__ + 4;
      var $arg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $vret = __stackBase__ + 20;
      var $vret4 = __stackBase__ + 24;
      var $vret8 = __stackBase__ + 28;
      
      HEAP[$lz_addr] = $lz;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 16] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$lz_addr] + 16];
      var $8 = HEAP[$visit_addr];
      var $9 = HEAP[$arg_addr];
      var $10 = FUNCTION_TABLE[$8]($7, $9);
      HEAP[$vret] = $10;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[$vret];
      HEAP[$0] = $13;
      __label__ = 10;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$lz_addr] + 20];
      var $21 = HEAP[$visit_addr];
      var $22 = HEAP[$arg_addr];
      var $23 = FUNCTION_TABLE[$21]($20, $22);
      HEAP[$vret4] = $23;
      
      
      if (HEAP[$vret4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = HEAP[$vret4];
      HEAP[$0] = $26;
      __label__ = 10;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 24] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $33 = HEAP[HEAP[$lz_addr] + 24];
      var $34 = HEAP[$visit_addr];
      var $35 = HEAP[$arg_addr];
      var $36 = FUNCTION_TABLE[$34]($33, $35);
      HEAP[$vret8] = $36;
      
      
      if (HEAP[$vret8] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $39 = HEAP[$vret8];
      HEAP[$0] = $39;
      __label__ = 10;
      break;
     case 9:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 10:
      var $40 = HEAP[$0];
      HEAP[$retval] = $40;
      __label__ = 11;
      break;
     case 11:
      var $retval12 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _izip_longest_next($lz) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $i = __stackBase__ + 12;
      var $tuplesize = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      var $it = __stackBase__ + 24;
      var $item = __stackBase__ + 28;
      var $olditem = __stackBase__ + 32;
      
      HEAP[$lz_addr] = $lz;
      
      
      var $3 = HEAP[HEAP[$lz_addr] + 8];
      HEAP[$tuplesize] = $3;
      
      
      var $6 = HEAP[HEAP[$lz_addr] + 20];
      HEAP[$result] = $6;
      
      
      if (HEAP[$tuplesize] == 0) {
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
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] == 0) {
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
      
      
      
      
      if (HEAP[HEAP[$result]] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 5:
      
      
      
      var $20 = HEAP[HEAP[$result]] + 1;
      
      var $22 = HEAP[$result];
      HEAP[$22] = $20;
      HEAP[$i] = 0;
      __label__ = 19;
      break;
     case 6:
      
      
      
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[$lz_addr] + 16] + 12 + HEAP[$i] * 4];
      HEAP[$it] = $30;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[$lz_addr] + 24]] + 1;
      var $39 = HEAP[HEAP[$lz_addr] + 24];
      HEAP[$39] = $38;
      
      
      var $42 = HEAP[HEAP[$lz_addr] + 24];
      HEAP[$item] = $42;
      __label__ = 16;
      break;
     case 8:
      var $43 = HEAP[$it];
      var $44 = _PyIter_Next($43);
      HEAP[$item] = $44;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 9:
      
      
      
      var $50 = HEAP[HEAP[$lz_addr] + 12] - 1;
      
      var $52 = HEAP[$lz_addr] + 12;
      HEAP[$52] = $50;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      var $57 = _PyErr_Occurred();
      
      if ($57 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      var $60 = HEAP[$lz_addr] + 12;
      HEAP[$60] = 0;
      
      
      
      var $64 = HEAP[HEAP[$result]] - 1;
      
      var $66 = HEAP[$result];
      HEAP[$66] = $64;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $75 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $76 = HEAP[$result];
      FUNCTION_TABLE[$75]($76);
      __label__ = 13;
      break;
     case 13:
      HEAP[$0] = 0;
      __label__ = 37;
      break;
     case 14:
      
      
      
      
      
      var $82 = HEAP[HEAP[HEAP[$lz_addr] + 24]] + 1;
      var $83 = HEAP[HEAP[$lz_addr] + 24];
      HEAP[$83] = $82;
      
      
      var $86 = HEAP[HEAP[$lz_addr] + 24];
      HEAP[$item] = $86;
      
      
      
      
      
      
      var $93 = HEAP[HEAP[$lz_addr] + 16] + 12 + HEAP[$i] * 4;
      HEAP[$93] = 0;
      
      
      
      var $97 = HEAP[HEAP[$it]] - 1;
      
      var $99 = HEAP[$it];
      HEAP[$99] = $97;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $108 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $109 = HEAP[$it];
      FUNCTION_TABLE[$108]($109);
      __label__ = 16;
      break;
     case 16:
      
      
      
      
      
      var $115 = HEAP[HEAP[$result] + 12 + HEAP[$i] * 4];
      HEAP[$olditem] = $115;
      
      
      
      
      var $120 = HEAP[$result] + 12 + HEAP[$i] * 4;
      var $121 = HEAP[$item];
      HEAP[$120] = $121;
      
      
      
      var $125 = HEAP[HEAP[$olditem]] - 1;
      
      var $127 = HEAP[$olditem];
      HEAP[$127] = $125;
      
      
      
      
      if (HEAP[HEAP[$olditem]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $136 = HEAP[HEAP[HEAP[$olditem] + 4] + 24];
      var $137 = HEAP[$olditem];
      FUNCTION_TABLE[$136]($137);
      __label__ = 18;
      break;
     case 18:
      
      var $139 = HEAP[$i] + 1;
      HEAP[$i] = $139;
      __label__ = 19;
      break;
     case 19:
      
      
      
      if (HEAP[$i] < HEAP[$tuplesize]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      __label__ = 36;
      break;
     case 21:
      var $143 = HEAP[$tuplesize];
      var $144 = _PyTuple_New($143);
      HEAP[$result] = $144;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      HEAP[$0] = 0;
      __label__ = 37;
      break;
     case 23:
      HEAP[$i] = 0;
      __label__ = 35;
      break;
     case 24:
      
      
      
      
      
      
      
      var $154 = HEAP[HEAP[HEAP[$lz_addr] + 16] + 12 + HEAP[$i] * 4];
      HEAP[$it] = $154;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      
      var $162 = HEAP[HEAP[HEAP[$lz_addr] + 24]] + 1;
      var $163 = HEAP[HEAP[$lz_addr] + 24];
      HEAP[$163] = $162;
      
      
      var $166 = HEAP[HEAP[$lz_addr] + 24];
      HEAP[$item] = $166;
      __label__ = 34;
      break;
     case 26:
      var $167 = HEAP[$it];
      var $168 = _PyIter_Next($167);
      HEAP[$item] = $168;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 27:
      
      
      
      var $174 = HEAP[HEAP[$lz_addr] + 12] - 1;
      
      var $176 = HEAP[$lz_addr] + 12;
      HEAP[$176] = $174;
      
      
      
      
      if (HEAP[HEAP[$lz_addr] + 12] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      var $181 = _PyErr_Occurred();
      
      if ($181 != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 29:
      
      var $184 = HEAP[$lz_addr] + 12;
      HEAP[$184] = 0;
      
      
      
      var $188 = HEAP[HEAP[$result]] - 1;
      
      var $190 = HEAP[$result];
      HEAP[$190] = $188;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $199 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $200 = HEAP[$result];
      FUNCTION_TABLE[$199]($200);
      __label__ = 31;
      break;
     case 31:
      HEAP[$0] = 0;
      __label__ = 37;
      break;
     case 32:
      
      
      
      
      
      var $206 = HEAP[HEAP[HEAP[$lz_addr] + 24]] + 1;
      var $207 = HEAP[HEAP[$lz_addr] + 24];
      HEAP[$207] = $206;
      
      
      var $210 = HEAP[HEAP[$lz_addr] + 24];
      HEAP[$item] = $210;
      
      
      
      
      
      
      var $217 = HEAP[HEAP[$lz_addr] + 16] + 12 + HEAP[$i] * 4;
      HEAP[$217] = 0;
      
      
      
      var $221 = HEAP[HEAP[$it]] - 1;
      
      var $223 = HEAP[$it];
      HEAP[$223] = $221;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $232 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $233 = HEAP[$it];
      FUNCTION_TABLE[$232]($233);
      __label__ = 34;
      break;
     case 34:
      
      
      
      
      var $238 = HEAP[$result] + 12 + HEAP[$i] * 4;
      var $239 = HEAP[$item];
      HEAP[$238] = $239;
      
      var $241 = HEAP[$i] + 1;
      HEAP[$i] = $241;
      __label__ = 35;
      break;
     case 35:
      
      
      
      if (HEAP[$i] < HEAP[$tuplesize]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      var $245 = HEAP[$result];
      HEAP[$0] = $245;
      __label__ = 37;
      break;
     case 37:
      var $246 = HEAP[$0];
      HEAP[$retval] = $246;
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
  function _inititertools() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 92;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 92);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $i = __stackBase__;
      var $m = __stackBase__ + 4;
      var $name = __stackBase__ + 8;
      var $typelist = __stackBase__ + 12;
      
      var $typelist1 = $typelist;
      _llvm_memcpy_p0i8_p0i8_i32($typelist1, _C_280_12615, 80, 4, 0);
      
      HEAP[_teedataobject_type + 4] = _PyType_Type;
      var $1 = _Py_InitModule4(__str95, _module_methods, _module_doc, 0, 1013);
      HEAP[$m] = $1;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      HEAP[$i] = 0;
      __label__ = 6;
      break;
     case 2:
      
      
      var $6 = HEAP[$typelist + HEAP[$i] * 4];
      var $7 = _PyType_Ready($6);
      
      if ($7 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      var $13 = HEAP[HEAP[$typelist + HEAP[$i] * 4] + 12];
      var $14 = _strchr($13, 46);
      HEAP[$name] = $14;
      
      
      if (HEAP[$name] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str96, __str5, 4086, ___PRETTY_FUNCTION___12611);
      throw "Reached an unreachable!";
     case 5:
      
      
      
      
      
      
      var $23 = HEAP[HEAP[$typelist + HEAP[$i] * 4]] + 1;
      var $24 = HEAP[$typelist + HEAP[$i] * 4];
      HEAP[$24] = $23;
      
      
      
      var $28 = HEAP[$typelist + HEAP[$i] * 4];
      
      var $30 = HEAP[$name] + 1;
      var $31 = HEAP[$m];
      var $32 = _PyModule_AddObject($31, $30, $28);
      
      var $34 = HEAP[$i] + 1;
      HEAP[$i] = $34;
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$typelist + HEAP[$i] * 4] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $39 = _PyType_Ready(_teedataobject_type);
      
      if ($39 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $41 = _PyType_Ready(_tee_type);
      
      if ($41 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $43 = _PyType_Ready(__grouper_type);
      __label__ = 10;
      break;
     case 10:
      __label__ = 11;
      break;
     case 11:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_inititertools"] = _inititertools;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _groupby_dealloc, 0, _PyObject_GenericGetAttr, 0, _groupby_traverse, 0, _PyObject_SelfIter, 0, _groupby_next, 0, _groupby_new, 0, _PyObject_GC_Del, 0, __grouper_dealloc, 0, __grouper_traverse, 0, __grouper_next, 0, _teedataobject_dealloc, 0, _teedataobject_traverse, 0, _teedataobject_clear, 0, _tee_copy, 0, _tee_dealloc, 0, _tee_traverse, 0, _tee_clear, 0, _tee_next, 0, _tee_new, 0, _cycle_dealloc, 0, _cycle_traverse, 0, _cycle_next, 0, _cycle_new, 0, _dropwhile_dealloc, 0, _dropwhile_traverse, 0, _dropwhile_next, 0, _dropwhile_new, 0, _takewhile_dealloc, 0, _takewhile_traverse, 0, _takewhile_next, 0, _takewhile_new, 0, _islice_dealloc, 0, _islice_traverse, 0, _islice_next, 0, _islice_new, 0, _starmap_dealloc, 0, _starmap_traverse, 0, _starmap_next, 0, _starmap_new, 0, _imap_dealloc, 0, _imap_traverse, 0, _imap_next, 0, _imap_new, 0, _chain_new_from_iterable, 0, _chain_dealloc, 0, _chain_traverse, 0, _chain_next, 0, _chain_new, 0, _product_dealloc, 0, _product_traverse, 0, _product_next, 0, _product_new, 0, _combinations_dealloc, 0, _combinations_traverse, 0, _combinations_next, 0, _combinations_new, 0, _cwr_dealloc, 0, _cwr_traverse, 0, _cwr_next, 0, _cwr_new, 0, _permutations_dealloc, 0, _permutations_traverse, 0, _permutations_next, 0, _permutations_new, 0, _compress_dealloc, 0, _compress_traverse, 0, _compress_next, 0, _compress_new, 0, _ifilter_dealloc, 0, _ifilter_traverse, 0, _ifilter_next, 0, _ifilter_new, 0, _ifilterfalse_dealloc, 0, _ifilterfalse_traverse, 0, _ifilterfalse_next, 0, _ifilterfalse_new, 0, _count_reduce, 0, _count_dealloc, 0, _count_repr, 0, _count_traverse, 0, _count_next, 0, _count_new, 0, _izip_dealloc, 0, _izip_traverse, 0, _izip_next, 0, _izip_new, 0, _repeat_len, 0, _repeat_dealloc, 0, _repeat_repr, 0, _repeat_traverse, 0, _repeat_next, 0, _repeat_new, 0, _izip_longest_dealloc, 0, _izip_longest_traverse, 0, _izip_longest_next, 0, _izip_longest_new, 0, _tee, 0 ]);
  function run(args) {
    __str = allocate([ 79, 124, 79, 58, 103, 114, 111, 117, 112, 98, 121, 0 ], "i8", ALLOC_NORMAL);
    _kwargs_8299 = allocate(12, "i8*", ALLOC_NORMAL);
    __str1 = allocate([ 105, 116, 101, 114, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 107, 101, 121, 0 ], "i8", ALLOC_NORMAL);
    _groupby_doc = allocate([ 103, 114, 111, 117, 112, 98, 121, 40, 105, 116, 101, 114, 97, 98, 108, 101, 91, 44, 32, 107, 101, 121, 102, 117, 110, 99, 93, 41, 32, 45, 62, 32, 99, 114, 101, 97, 116, 101, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 119, 104, 105, 99, 104, 32, 114, 101, 116, 117, 114, 110, 115, 10, 40, 107, 101, 121, 44, 32, 115, 117, 98, 45, 105, 116, 101, 114, 97, 116, 111, 114, 41, 32, 103, 114, 111, 117, 112, 101, 100, 32, 98, 121, 32, 101, 97, 99, 104, 32, 118, 97, 108, 117, 101, 32, 111, 102, 32, 107, 101, 121, 40, 118, 97, 108, 117, 101, 41, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 103, 114, 111, 117, 112, 98, 121, 0 ], "i8", ALLOC_NORMAL);
    _groupby_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str4 = allocate([ 103, 98, 111, 45, 62, 99, 117, 114, 114, 107, 101, 121, 32, 61, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 105, 116, 101, 114, 116, 111, 111, 108, 115, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8617 = allocate([ 95, 103, 114, 111, 117, 112, 101, 114, 95, 110, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 103, 98, 111, 45, 62, 99, 117, 114, 114, 107, 101, 121, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 95, 103, 114, 111, 117, 112, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __grouper_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str8 = allocate([ 105, 32, 60, 32, 53, 55, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8716 = allocate([ 116, 101, 101, 100, 97, 116, 97, 111, 98, 106, 101, 99, 116, 95, 103, 101, 116, 105, 116, 101, 109, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 105, 32, 61, 61, 32, 116, 100, 111, 45, 62, 110, 117, 109, 114, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    _teedataobject_doc = allocate([ 68, 97, 116, 97, 32, 99, 111, 110, 116, 97, 105, 110, 101, 114, 32, 99, 111, 109, 109, 111, 110, 32, 116, 111, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 116, 101, 101, 32, 111, 98, 106, 101, 99, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 116, 101, 101, 95, 100, 97, 116, 97, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _teedataobject_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _teecopy_doc = allocate([ 82, 101, 116, 117, 114, 110, 115, 32, 97, 110, 32, 105, 110, 100, 101, 112, 101, 110, 100, 101, 110, 116, 32, 105, 116, 101, 114, 97, 116, 111, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 116, 101, 101, 0 ], "i8", ALLOC_NORMAL);
    _teeobject_doc = allocate([ 73, 116, 101, 114, 97, 116, 111, 114, 32, 119, 114, 97, 112, 112, 101, 100, 32, 116, 111, 32, 109, 97, 107, 101, 32, 105, 116, 32, 99, 111, 112, 121, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 95, 95, 99, 111, 112, 121, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _tee_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str13 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 116, 101, 101, 0 ], "i8", ALLOC_NORMAL);
    _tee_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str14 = allocate([ 79, 124, 110, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 110, 32, 109, 117, 115, 116, 32, 98, 101, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    _tee_doc = allocate([ 116, 101, 101, 40, 105, 116, 101, 114, 97, 98, 108, 101, 44, 32, 110, 61, 50, 41, 32, 45, 45, 62, 32, 116, 117, 112, 108, 101, 32, 111, 102, 32, 110, 32, 105, 110, 100, 101, 112, 101, 110, 100, 101, 110, 116, 32, 105, 116, 101, 114, 97, 116, 111, 114, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 99, 121, 99, 108, 101, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 99, 121, 99, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _cycle_doc = allocate([ 99, 121, 99, 108, 101, 40, 105, 116, 101, 114, 97, 98, 108, 101, 41, 32, 45, 45, 62, 32, 99, 121, 99, 108, 101, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 117, 110, 116, 105, 108, 32, 105, 116, 32, 105, 115, 32, 101, 120, 104, 97, 117, 115, 116, 101, 100, 46, 10, 84, 104, 101, 110, 32, 114, 101, 112, 101, 97, 116, 32, 116, 104, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 105, 110, 100, 101, 102, 105, 110, 105, 116, 101, 108, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 99, 121, 99, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _cycle_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str19 = allocate([ 100, 114, 111, 112, 119, 104, 105, 108, 101, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 100, 114, 111, 112, 119, 104, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _dropwhile_doc = allocate([ 100, 114, 111, 112, 119, 104, 105, 108, 101, 40, 112, 114, 101, 100, 105, 99, 97, 116, 101, 44, 32, 105, 116, 101, 114, 97, 98, 108, 101, 41, 32, 45, 45, 62, 32, 100, 114, 111, 112, 119, 104, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 10, 10, 68, 114, 111, 112, 32, 105, 116, 101, 109, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 119, 104, 105, 108, 101, 32, 112, 114, 101, 100, 105, 99, 97, 116, 101, 40, 105, 116, 101, 109, 41, 32, 105, 115, 32, 116, 114, 117, 101, 46, 10, 65, 102, 116, 101, 114, 119, 97, 114, 100, 115, 44, 32, 114, 101, 116, 117, 114, 110, 32, 101, 118, 101, 114, 121, 32, 101, 108, 101, 109, 101, 110, 116, 32, 117, 110, 116, 105, 108, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 105, 115, 32, 101, 120, 104, 97, 117, 115, 116, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 100, 114, 111, 112, 119, 104, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _dropwhile_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str22 = allocate([ 116, 97, 107, 101, 119, 104, 105, 108, 101, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 116, 97, 107, 101, 119, 104, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _takewhile_doc = allocate([ 116, 97, 107, 101, 119, 104, 105, 108, 101, 40, 112, 114, 101, 100, 105, 99, 97, 116, 101, 44, 32, 105, 116, 101, 114, 97, 98, 108, 101, 41, 32, 45, 45, 62, 32, 116, 97, 107, 101, 119, 104, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 115, 117, 99, 99, 101, 115, 115, 105, 118, 101, 32, 101, 110, 116, 114, 105, 101, 115, 32, 102, 114, 111, 109, 32, 97, 110, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 97, 115, 32, 108, 111, 110, 103, 32, 97, 115, 32, 116, 104, 101, 32, 10, 112, 114, 101, 100, 105, 99, 97, 116, 101, 32, 101, 118, 97, 108, 117, 97, 116, 101, 115, 32, 116, 111, 32, 116, 114, 117, 101, 32, 102, 111, 114, 32, 101, 97, 99, 104, 32, 101, 110, 116, 114, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 116, 97, 107, 101, 119, 104, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _takewhile_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str25 = allocate([ 105, 115, 108, 105, 99, 101, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 105, 115, 108, 105, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 83, 116, 111, 112, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 102, 111, 114, 32, 105, 115, 108, 105, 99, 101, 40, 41, 32, 109, 117, 115, 116, 32, 98, 101, 32, 78, 111, 110, 101, 32, 111, 114, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 58, 32, 48, 32, 60, 61, 32, 120, 32, 60, 61, 32, 109, 97, 120, 105, 110, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 73, 110, 100, 105, 99, 101, 115, 32, 102, 111, 114, 32, 105, 115, 108, 105, 99, 101, 40, 41, 32, 109, 117, 115, 116, 32, 98, 101, 32, 78, 111, 110, 101, 32, 111, 114, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 58, 32, 48, 32, 60, 61, 32, 120, 32, 60, 61, 32, 109, 97, 120, 105, 110, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 83, 116, 101, 112, 32, 102, 111, 114, 32, 105, 115, 108, 105, 99, 101, 40, 41, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 112, 111, 115, 105, 116, 105, 118, 101, 32, 105, 110, 116, 101, 103, 101, 114, 32, 111, 114, 32, 78, 111, 110, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _islice_doc = allocate([ 105, 115, 108, 105, 99, 101, 40, 105, 116, 101, 114, 97, 98, 108, 101, 44, 32, 91, 115, 116, 97, 114, 116, 44, 93, 32, 115, 116, 111, 112, 32, 91, 44, 32, 115, 116, 101, 112, 93, 41, 32, 45, 45, 62, 32, 105, 115, 108, 105, 99, 101, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 119, 104, 111, 115, 101, 32, 110, 101, 120, 116, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 114, 101, 116, 117, 114, 110, 115, 32, 115, 101, 108, 101, 99, 116, 101, 100, 32, 118, 97, 108, 117, 101, 115, 32, 102, 114, 111, 109, 32, 97, 110, 10, 105, 116, 101, 114, 97, 98, 108, 101, 46, 32, 32, 73, 102, 32, 115, 116, 97, 114, 116, 32, 105, 115, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 44, 32, 119, 105, 108, 108, 32, 115, 107, 105, 112, 32, 97, 108, 108, 32, 112, 114, 101, 99, 101, 100, 105, 110, 103, 32, 101, 108, 101, 109, 101, 110, 116, 115, 59, 10, 111, 116, 104, 101, 114, 119, 105, 115, 101, 44, 32, 115, 116, 97, 114, 116, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 122, 101, 114, 111, 46, 32, 32, 83, 116, 101, 112, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 111, 110, 101, 46, 32, 32, 73, 102, 10, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 97, 115, 32, 97, 110, 111, 116, 104, 101, 114, 32, 118, 97, 108, 117, 101, 44, 32, 115, 116, 101, 112, 32, 100, 101, 116, 101, 114, 109, 105, 110, 101, 115, 32, 104, 111, 119, 32, 109, 97, 110, 121, 32, 118, 97, 108, 117, 101, 115, 32, 97, 114, 101, 32, 10, 115, 107, 105, 112, 112, 101, 100, 32, 98, 101, 116, 119, 101, 101, 110, 32, 115, 117, 99, 99, 101, 115, 115, 105, 118, 101, 32, 99, 97, 108, 108, 115, 46, 32, 32, 87, 111, 114, 107, 115, 32, 108, 105, 107, 101, 32, 97, 32, 115, 108, 105, 99, 101, 40, 41, 32, 111, 110, 32, 97, 32, 108, 105, 115, 116, 10, 98, 117, 116, 32, 114, 101, 116, 117, 114, 110, 115, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 105, 115, 108, 105, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    _islice_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str31 = allocate([ 115, 116, 97, 114, 109, 97, 112, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 115, 116, 97, 114, 109, 97, 112, 0 ], "i8", ALLOC_NORMAL);
    _starmap_doc = allocate([ 115, 116, 97, 114, 109, 97, 112, 40, 102, 117, 110, 99, 116, 105, 111, 110, 44, 32, 115, 101, 113, 117, 101, 110, 99, 101, 41, 32, 45, 45, 62, 32, 115, 116, 97, 114, 109, 97, 112, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 119, 104, 111, 115, 101, 32, 118, 97, 108, 117, 101, 115, 32, 97, 114, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 101, 118, 97, 108, 117, 97, 116, 101, 100, 10, 119, 105, 116, 104, 32, 97, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 116, 117, 112, 108, 101, 32, 116, 97, 107, 101, 110, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 115, 101, 113, 117, 101, 110, 99, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 115, 116, 97, 114, 109, 97, 112, 0 ], "i8", ALLOC_NORMAL);
    _starmap_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str34 = allocate([ 105, 109, 97, 112, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 105, 109, 97, 112, 40, 41, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 97, 116, 32, 108, 101, 97, 115, 116, 32, 116, 119, 111, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _imap_doc = allocate([ 105, 109, 97, 112, 40, 102, 117, 110, 99, 44, 32, 42, 105, 116, 101, 114, 97, 98, 108, 101, 115, 41, 32, 45, 45, 62, 32, 105, 109, 97, 112, 32, 111, 98, 106, 101, 99, 116, 10, 10, 77, 97, 107, 101, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 116, 104, 97, 116, 32, 99, 111, 109, 112, 117, 116, 101, 115, 32, 116, 104, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 117, 115, 105, 110, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 10, 101, 97, 99, 104, 32, 111, 102, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 115, 46, 32, 32, 76, 105, 107, 101, 32, 109, 97, 112, 40, 41, 32, 101, 120, 99, 101, 112, 116, 32, 116, 104, 97, 116, 32, 105, 116, 32, 114, 101, 116, 117, 114, 110, 115, 10, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 105, 110, 115, 116, 101, 97, 100, 32, 111, 102, 32, 97, 32, 108, 105, 115, 116, 32, 97, 110, 100, 32, 116, 104, 97, 116, 32, 105, 116, 32, 115, 116, 111, 112, 115, 32, 119, 104, 101, 110, 32, 116, 104, 101, 32, 115, 104, 111, 114, 116, 101, 115, 116, 10, 105, 116, 101, 114, 97, 98, 108, 101, 32, 105, 115, 32, 101, 120, 104, 97, 117, 115, 116, 101, 100, 32, 105, 110, 115, 116, 101, 97, 100, 32, 111, 102, 32, 102, 105, 108, 108, 105, 110, 103, 32, 105, 110, 32, 78, 111, 110, 101, 32, 102, 111, 114, 32, 115, 104, 111, 114, 116, 101, 114, 10, 105, 116, 101, 114, 97, 98, 108, 101, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 105, 109, 97, 112, 0 ], "i8", ALLOC_NORMAL);
    _imap_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str37 = allocate([ 99, 104, 97, 105, 110, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    _chain_doc = allocate([ 99, 104, 97, 105, 110, 40, 42, 105, 116, 101, 114, 97, 98, 108, 101, 115, 41, 32, 45, 45, 62, 32, 99, 104, 97, 105, 110, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 104, 97, 105, 110, 32, 111, 98, 106, 101, 99, 116, 32, 119, 104, 111, 115, 101, 32, 46, 110, 101, 120, 116, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 114, 101, 116, 117, 114, 110, 115, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 10, 102, 105, 114, 115, 116, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 117, 110, 116, 105, 108, 32, 105, 116, 32, 105, 115, 32, 101, 120, 104, 97, 117, 115, 116, 101, 100, 44, 32, 116, 104, 101, 110, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 110, 101, 120, 116, 10, 105, 116, 101, 114, 97, 98, 108, 101, 44, 32, 117, 110, 116, 105, 108, 32, 97, 108, 108, 32, 111, 102, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 115, 32, 97, 114, 101, 32, 101, 120, 104, 97, 117, 115, 116, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _chain_from_iterable_doc = allocate([ 99, 104, 97, 105, 110, 46, 102, 114, 111, 109, 95, 105, 116, 101, 114, 97, 98, 108, 101, 40, 105, 116, 101, 114, 97, 98, 108, 101, 41, 32, 45, 45, 62, 32, 99, 104, 97, 105, 110, 32, 111, 98, 106, 101, 99, 116, 10, 10, 65, 108, 116, 101, 114, 110, 97, 116, 101, 32, 99, 104, 97, 105, 110, 40, 41, 32, 99, 111, 110, 116, 114, 117, 99, 116, 111, 114, 32, 116, 97, 107, 105, 110, 103, 32, 97, 32, 115, 105, 110, 103, 108, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 10, 116, 104, 97, 116, 32, 101, 118, 97, 108, 117, 97, 116, 101, 115, 32, 108, 97, 122, 105, 108, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 102, 114, 111, 109, 95, 105, 116, 101, 114, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _chain_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str39 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 99, 104, 97, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    _chain_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _C_70_10224 = allocate(8, "i8*", ALLOC_NORMAL);
    __str40 = allocate([ 114, 101, 112, 101, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 124, 110, 58, 112, 114, 111, 100, 117, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 114, 101, 112, 101, 97, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 99, 97, 110, 110, 111, 116, 32, 98, 101, 32, 110, 101, 103, 97, 116, 105, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 97, 114, 103, 115, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 54, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10213 = allocate([ 112, 114, 111, 100, 117, 99, 116, 95, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 110, 112, 111, 111, 108, 115, 61, 61, 48, 32, 124, 124, 32, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 114, 101, 115, 117, 108, 116, 41, 41, 45, 62, 111, 98, 95, 114, 101, 102, 99, 110, 116, 41, 32, 61, 61, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10376 = allocate([ 112, 114, 111, 100, 117, 99, 116, 95, 110, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    _product_doc = allocate([ 112, 114, 111, 100, 117, 99, 116, 40, 42, 105, 116, 101, 114, 97, 98, 108, 101, 115, 41, 32, 45, 45, 62, 32, 112, 114, 111, 100, 117, 99, 116, 32, 111, 98, 106, 101, 99, 116, 10, 10, 67, 97, 114, 116, 101, 115, 105, 97, 110, 32, 112, 114, 111, 100, 117, 99, 116, 32, 111, 102, 32, 105, 110, 112, 117, 116, 32, 105, 116, 101, 114, 97, 98, 108, 101, 115, 46, 32, 32, 69, 113, 117, 105, 118, 97, 108, 101, 110, 116, 32, 116, 111, 32, 110, 101, 115, 116, 101, 100, 32, 102, 111, 114, 45, 108, 111, 111, 112, 115, 46, 10, 10, 70, 111, 114, 32, 101, 120, 97, 109, 112, 108, 101, 44, 32, 112, 114, 111, 100, 117, 99, 116, 40, 65, 44, 32, 66, 41, 32, 114, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 97, 115, 58, 32, 32, 40, 40, 120, 44, 121, 41, 32, 102, 111, 114, 32, 120, 32, 105, 110, 32, 65, 32, 102, 111, 114, 32, 121, 32, 105, 110, 32, 66, 41, 46, 10, 84, 104, 101, 32, 108, 101, 102, 116, 109, 111, 115, 116, 32, 105, 116, 101, 114, 97, 116, 111, 114, 115, 32, 97, 114, 101, 32, 105, 110, 32, 116, 104, 101, 32, 111, 117, 116, 101, 114, 109, 111, 115, 116, 32, 102, 111, 114, 45, 108, 111, 111, 112, 44, 32, 115, 111, 32, 116, 104, 101, 32, 111, 117, 116, 112, 117, 116, 32, 116, 117, 112, 108, 101, 115, 10, 99, 121, 99, 108, 101, 32, 105, 110, 32, 97, 32, 109, 97, 110, 110, 101, 114, 32, 115, 105, 109, 105, 108, 97, 114, 32, 116, 111, 32, 97, 110, 32, 111, 100, 111, 109, 101, 116, 101, 114, 32, 40, 119, 105, 116, 104, 32, 116, 104, 101, 32, 114, 105, 103, 104, 116, 109, 111, 115, 116, 32, 101, 108, 101, 109, 101, 110, 116, 32, 99, 104, 97, 110, 103, 105, 110, 103, 10, 111, 110, 32, 101, 118, 101, 114, 121, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 41, 46, 10, 10, 84, 111, 32, 99, 111, 109, 112, 117, 116, 101, 32, 116, 104, 101, 32, 112, 114, 111, 100, 117, 99, 116, 32, 111, 102, 32, 97, 110, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 119, 105, 116, 104, 32, 105, 116, 115, 101, 108, 102, 44, 32, 115, 112, 101, 99, 105, 102, 121, 32, 116, 104, 101, 32, 110, 117, 109, 98, 101, 114, 10, 111, 102, 32, 114, 101, 112, 101, 116, 105, 116, 105, 111, 110, 115, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 114, 101, 112, 101, 97, 116, 32, 107, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 46, 32, 70, 111, 114, 32, 101, 120, 97, 109, 112, 108, 101, 44, 10, 112, 114, 111, 100, 117, 99, 116, 40, 65, 44, 32, 114, 101, 112, 101, 97, 116, 61, 52, 41, 32, 109, 101, 97, 110, 115, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 97, 115, 32, 112, 114, 111, 100, 117, 99, 116, 40, 65, 44, 32, 65, 44, 32, 65, 44, 32, 65, 41, 46, 10, 10, 112, 114, 111, 100, 117, 99, 116, 40, 39, 97, 98, 39, 44, 32, 114, 97, 110, 103, 101, 40, 51, 41, 41, 32, 45, 45, 62, 32, 40, 39, 97, 39, 44, 48, 41, 32, 40, 39, 97, 39, 44, 49, 41, 32, 40, 39, 97, 39, 44, 50, 41, 32, 40, 39, 98, 39, 44, 48, 41, 32, 40, 39, 98, 39, 44, 49, 41, 32, 40, 39, 98, 39, 44, 50, 41, 10, 112, 114, 111, 100, 117, 99, 116, 40, 40, 48, 44, 49, 41, 44, 32, 40, 48, 44, 49, 41, 44, 32, 40, 48, 44, 49, 41, 41, 32, 45, 45, 62, 32, 40, 48, 44, 48, 44, 48, 41, 32, 40, 48, 44, 48, 44, 49, 41, 32, 40, 48, 44, 49, 44, 48, 41, 32, 40, 48, 44, 49, 44, 49, 41, 32, 40, 49, 44, 48, 44, 48, 41, 32, 46, 46, 46, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 112, 114, 111, 100, 117, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _product_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str46 = allocate([ 79, 110, 58, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    _kwargs_10490 = allocate(12, "i8*", ALLOC_NORMAL);
    __str47 = allocate([ 114, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 110, 111, 110, 45, 110, 101, 103, 97, 116, 105, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 114, 32, 61, 61, 32, 48, 32, 124, 124, 32, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 114, 101, 115, 117, 108, 116, 41, 41, 45, 62, 111, 98, 95, 114, 101, 102, 99, 110, 116, 41, 32, 61, 61, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10612 = allocate([ 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 95, 110, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    _combinations_doc = allocate([ 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 40, 105, 116, 101, 114, 97, 98, 108, 101, 44, 32, 114, 41, 32, 45, 45, 62, 32, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 115, 117, 99, 99, 101, 115, 115, 105, 118, 101, 32, 114, 45, 108, 101, 110, 103, 116, 104, 32, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 32, 111, 102, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 105, 110, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 46, 10, 10, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 40, 114, 97, 110, 103, 101, 40, 52, 41, 44, 32, 51, 41, 32, 45, 45, 62, 32, 40, 48, 44, 49, 44, 50, 41, 44, 32, 40, 48, 44, 49, 44, 51, 41, 44, 32, 40, 48, 44, 50, 44, 51, 41, 44, 32, 40, 49, 44, 50, 44, 51, 41, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    _combinations_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str51 = allocate([ 79, 110, 58, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 95, 119, 105, 116, 104, 95, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _kwargs_10713 = allocate(12, "i8*", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10839 = allocate([ 99, 119, 114, 95, 110, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    _cwr_doc = allocate([ 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 95, 119, 105, 116, 104, 95, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 40, 105, 116, 101, 114, 97, 98, 108, 101, 44, 32, 114, 41, 32, 45, 45, 62, 32, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 95, 119, 105, 116, 104, 95, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 115, 117, 99, 99, 101, 115, 115, 105, 118, 101, 32, 114, 45, 108, 101, 110, 103, 116, 104, 32, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 32, 111, 102, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 105, 110, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 10, 97, 108, 108, 111, 119, 105, 110, 103, 32, 105, 110, 100, 105, 118, 105, 100, 117, 97, 108, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 116, 111, 32, 104, 97, 118, 101, 32, 115, 117, 99, 99, 101, 115, 115, 105, 118, 101, 32, 114, 101, 112, 101, 97, 116, 115, 46, 10, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 95, 119, 105, 116, 104, 95, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 40, 39, 65, 66, 67, 39, 44, 32, 50, 41, 32, 45, 45, 62, 32, 65, 65, 32, 65, 66, 32, 65, 67, 32, 66, 66, 32, 66, 67, 32, 67, 67, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 95, 119, 105, 116, 104, 95, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _cwr_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str53 = allocate([ 79, 124, 79, 58, 112, 101, 114, 109, 117, 116, 97, 116, 105, 111, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    _kwargs_10941 = allocate(12, "i8*", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___11077 = allocate([ 112, 101, 114, 109, 117, 116, 97, 116, 105, 111, 110, 115, 95, 110, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    _permutations_doc = allocate([ 112, 101, 114, 109, 117, 116, 97, 116, 105, 111, 110, 115, 40, 105, 116, 101, 114, 97, 98, 108, 101, 91, 44, 32, 114, 93, 41, 32, 45, 45, 62, 32, 112, 101, 114, 109, 117, 116, 97, 116, 105, 111, 110, 115, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 115, 117, 99, 99, 101, 115, 115, 105, 118, 101, 32, 114, 45, 108, 101, 110, 103, 116, 104, 32, 112, 101, 114, 109, 117, 116, 97, 116, 105, 111, 110, 115, 32, 111, 102, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 105, 110, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 46, 10, 10, 112, 101, 114, 109, 117, 116, 97, 116, 105, 111, 110, 115, 40, 114, 97, 110, 103, 101, 40, 51, 41, 44, 32, 50, 41, 32, 45, 45, 62, 32, 40, 48, 44, 49, 41, 44, 32, 40, 48, 44, 50, 41, 44, 32, 40, 49, 44, 48, 41, 44, 32, 40, 49, 44, 50, 41, 44, 32, 40, 50, 44, 48, 41, 44, 32, 40, 50, 44, 49, 41, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 112, 101, 114, 109, 117, 116, 97, 116, 105, 111, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    _permutations_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str55 = allocate([ 79, 79, 58, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    _kwargs_11179 = allocate(12, "i8*", ALLOC_NORMAL);
    __str56 = allocate([ 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 115, 101, 108, 101, 99, 116, 111, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    _compress_doc = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 40, 100, 97, 116, 97, 44, 32, 115, 101, 108, 101, 99, 116, 111, 114, 115, 41, 32, 45, 45, 62, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 111, 118, 101, 114, 32, 115, 101, 108, 101, 99, 116, 101, 100, 32, 100, 97, 116, 97, 10, 10, 82, 101, 116, 117, 114, 110, 32, 100, 97, 116, 97, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 99, 111, 114, 114, 101, 115, 112, 111, 110, 100, 105, 110, 103, 32, 116, 111, 32, 116, 114, 117, 101, 32, 115, 101, 108, 101, 99, 116, 111, 114, 32, 101, 108, 101, 109, 101, 110, 116, 115, 46, 10, 70, 111, 114, 109, 115, 32, 97, 32, 115, 104, 111, 114, 116, 101, 114, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 102, 114, 111, 109, 32, 115, 101, 108, 101, 99, 116, 101, 100, 32, 100, 97, 116, 97, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 117, 115, 105, 110, 103, 32, 116, 104, 101, 10, 115, 101, 108, 101, 99, 116, 111, 114, 115, 32, 116, 111, 32, 99, 104, 111, 111, 115, 101, 32, 116, 104, 101, 32, 100, 97, 116, 97, 32, 101, 108, 101, 109, 101, 110, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    _compress_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str59 = allocate([ 105, 102, 105, 108, 116, 101, 114, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 105, 102, 105, 108, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _ifilter_doc = allocate([ 105, 102, 105, 108, 116, 101, 114, 40, 102, 117, 110, 99, 116, 105, 111, 110, 32, 111, 114, 32, 78, 111, 110, 101, 44, 32, 115, 101, 113, 117, 101, 110, 99, 101, 41, 32, 45, 45, 62, 32, 105, 102, 105, 108, 116, 101, 114, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 111, 115, 101, 32, 105, 116, 101, 109, 115, 32, 111, 102, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 102, 111, 114, 32, 119, 104, 105, 99, 104, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 105, 116, 101, 109, 41, 32, 105, 115, 32, 116, 114, 117, 101, 46, 10, 73, 102, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 32, 78, 111, 110, 101, 44, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 105, 116, 101, 109, 115, 32, 116, 104, 97, 116, 32, 97, 114, 101, 32, 116, 114, 117, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 105, 102, 105, 108, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _ifilter_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str62 = allocate([ 105, 102, 105, 108, 116, 101, 114, 102, 97, 108, 115, 101, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 105, 102, 105, 108, 116, 101, 114, 102, 97, 108, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    _ifilterfalse_doc = allocate([ 105, 102, 105, 108, 116, 101, 114, 102, 97, 108, 115, 101, 40, 102, 117, 110, 99, 116, 105, 111, 110, 32, 111, 114, 32, 78, 111, 110, 101, 44, 32, 115, 101, 113, 117, 101, 110, 99, 101, 41, 32, 45, 45, 62, 32, 105, 102, 105, 108, 116, 101, 114, 102, 97, 108, 115, 101, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 111, 115, 101, 32, 105, 116, 101, 109, 115, 32, 111, 102, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 102, 111, 114, 32, 119, 104, 105, 99, 104, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 105, 116, 101, 109, 41, 32, 105, 115, 32, 102, 97, 108, 115, 101, 46, 10, 73, 102, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 32, 78, 111, 110, 101, 44, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 105, 116, 101, 109, 115, 32, 116, 104, 97, 116, 32, 97, 114, 101, 32, 102, 97, 108, 115, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 105, 102, 105, 108, 116, 101, 114, 102, 97, 108, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    _ifilterfalse_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str65 = allocate([ 124, 79, 79, 58, 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_11645 = allocate(12, "i8*", ALLOC_NORMAL);
    __str66 = allocate([ 115, 116, 97, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 115, 116, 101, 112, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 97, 32, 110, 117, 109, 98, 101, 114, 32, 105, 115, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 108, 111, 110, 103, 95, 99, 110, 116, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 32, 38, 38, 32, 108, 111, 110, 103, 95, 115, 116, 101, 112, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___11646 = allocate([ 99, 111, 117, 110, 116, 95, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 40, 99, 110, 116, 32, 33, 61, 32, 40, 40, 80, 121, 95, 115, 115, 105, 122, 101, 95, 116, 41, 40, 40, 40, 115, 105, 122, 101, 95, 116, 41, 45, 49, 41, 62, 62, 49, 41, 41, 32, 38, 38, 32, 108, 111, 110, 103, 95, 99, 110, 116, 32, 61, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 32, 38, 38, 32, 33, 115, 108, 111, 119, 95, 109, 111, 100, 101, 41, 32, 124, 124, 32, 40, 99, 110, 116, 32, 61, 61, 32, 40, 40, 80, 121, 95, 115, 115, 105, 122, 101, 95, 116, 41, 40, 40, 40, 115, 105, 122, 101, 95, 116, 41, 45, 49, 41, 62, 62, 49, 41, 41, 32, 38, 38, 32, 108, 111, 110, 103, 95, 99, 110, 116, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 32, 38, 38, 32, 115, 108, 111, 119, 95, 109, 111, 100, 101, 41, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 115, 108, 111, 119, 95, 109, 111, 100, 101, 32, 124, 124, 32, 40, 40, 40, 40, 40, 108, 111, 110, 103, 95, 115, 116, 101, 112, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 51, 41, 41, 41, 32, 33, 61, 32, 48, 41, 32, 38, 38, 32, 40, 40, 40, 80, 121, 73, 110, 116, 79, 98, 106, 101, 99, 116, 32, 42, 41, 40, 108, 111, 110, 103, 95, 115, 116, 101, 112, 41, 41, 45, 62, 111, 98, 95, 105, 118, 97, 108, 41, 32, 61, 61, 32, 49, 41, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 108, 122, 45, 62, 99, 110, 116, 32, 61, 61, 32, 40, 40, 80, 121, 95, 115, 115, 105, 122, 101, 95, 116, 41, 40, 40, 40, 115, 105, 122, 101, 95, 116, 41, 45, 49, 41, 62, 62, 49, 41, 41, 32, 38, 38, 32, 108, 111, 110, 103, 95, 99, 110, 116, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___11833 = allocate([ 99, 111, 117, 110, 116, 95, 110, 101, 120, 116, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 99, 111, 117, 110, 116, 40, 37, 122, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 99, 111, 117, 110, 116, 40, 37, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 99, 111, 117, 110, 116, 40, 37, 115, 44, 32, 37, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 79, 40, 79, 79, 41, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 79, 40, 110, 41, 0 ], "i8", ALLOC_NORMAL);
    _count_reduce_doc = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 116, 97, 116, 101, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 32, 102, 111, 114, 32, 112, 105, 99, 107, 108, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _count_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _count_doc = allocate([ 99, 111, 117, 110, 116, 40, 115, 116, 97, 114, 116, 61, 48, 44, 32, 115, 116, 101, 112, 61, 49, 41, 32, 45, 45, 62, 32, 99, 111, 117, 110, 116, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 117, 110, 116, 32, 111, 98, 106, 101, 99, 116, 32, 119, 104, 111, 115, 101, 32, 46, 110, 101, 120, 116, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 114, 101, 116, 117, 114, 110, 115, 32, 99, 111, 110, 115, 101, 99, 117, 116, 105, 118, 101, 32, 118, 97, 108, 117, 101, 115, 46, 10, 69, 113, 117, 105, 118, 97, 108, 101, 110, 116, 32, 116, 111, 58, 10, 10, 32, 32, 32, 32, 100, 101, 102, 32, 99, 111, 117, 110, 116, 40, 102, 105, 114, 115, 116, 118, 97, 108, 61, 48, 44, 32, 115, 116, 101, 112, 61, 49, 41, 58, 10, 32, 32, 32, 32, 120, 32, 61, 32, 102, 105, 114, 115, 116, 118, 97, 108, 10, 32, 32, 32, 32, 119, 104, 105, 108, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 121, 105, 101, 108, 100, 32, 120, 10, 32, 32, 32, 32, 32, 32, 32, 32, 120, 32, 43, 61, 32, 115, 116, 101, 112, 10, 0 ], "i8", ALLOC_NORMAL);
    __str79 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _count_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str80 = allocate([ 105, 122, 105, 112, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___11957 = allocate([ 105, 122, 105, 112, 95, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 105, 122, 105, 112, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 35, 37, 122, 100, 32, 109, 117, 115, 116, 32, 115, 117, 112, 112, 111, 114, 116, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    _izip_doc = allocate([ 105, 122, 105, 112, 40, 105, 116, 101, 114, 49, 32, 91, 44, 105, 116, 101, 114, 50, 32, 91, 46, 46, 46, 93, 93, 41, 32, 45, 45, 62, 32, 105, 122, 105, 112, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 105, 122, 105, 112, 32, 111, 98, 106, 101, 99, 116, 32, 119, 104, 111, 115, 101, 32, 46, 110, 101, 120, 116, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 114, 101, 116, 117, 114, 110, 115, 32, 97, 32, 116, 117, 112, 108, 101, 32, 119, 104, 101, 114, 101, 10, 116, 104, 101, 32, 105, 45, 116, 104, 32, 101, 108, 101, 109, 101, 110, 116, 32, 99, 111, 109, 101, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 105, 45, 116, 104, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 46, 32, 32, 84, 104, 101, 32, 46, 110, 101, 120, 116, 40, 41, 10, 109, 101, 116, 104, 111, 100, 32, 99, 111, 110, 116, 105, 110, 117, 101, 115, 32, 117, 110, 116, 105, 108, 32, 116, 104, 101, 32, 115, 104, 111, 114, 116, 101, 115, 116, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 105, 110, 32, 116, 104, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 115, 101, 113, 117, 101, 110, 99, 101, 10, 105, 115, 32, 101, 120, 104, 97, 117, 115, 116, 101, 100, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 105, 116, 32, 114, 97, 105, 115, 101, 115, 32, 83, 116, 111, 112, 73, 116, 101, 114, 97, 116, 105, 111, 110, 46, 32, 32, 87, 111, 114, 107, 115, 32, 108, 105, 107, 101, 32, 116, 104, 101, 32, 122, 105, 112, 40, 41, 10, 102, 117, 110, 99, 116, 105, 111, 110, 32, 98, 117, 116, 32, 99, 111, 110, 115, 117, 109, 101, 115, 32, 108, 101, 115, 115, 32, 109, 101, 109, 111, 114, 121, 32, 98, 121, 32, 114, 101, 116, 117, 114, 110, 105, 110, 103, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 105, 110, 115, 116, 101, 97, 100, 32, 111, 102, 10, 97, 32, 108, 105, 115, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str82 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 105, 122, 105, 112, 0 ], "i8", ALLOC_NORMAL);
    _izip_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str83 = allocate([ 79, 124, 110, 58, 114, 101, 112, 101, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    _kwargs_12177 = allocate(12, "i8*", ALLOC_NORMAL);
    __str84 = allocate([ 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 116, 105, 109, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str86 = allocate([ 114, 101, 112, 101, 97, 116, 40, 37, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str87 = allocate([ 114, 101, 112, 101, 97, 116, 40, 37, 115, 44, 32, 37, 122, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str88 = allocate([ 108, 101, 110, 40, 41, 32, 111, 102, 32, 117, 110, 115, 105, 122, 101, 100, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _length_hint_doc = allocate([ 80, 114, 105, 118, 97, 116, 101, 32, 109, 101, 116, 104, 111, 100, 32, 114, 101, 116, 117, 114, 110, 105, 110, 103, 32, 97, 110, 32, 101, 115, 116, 105, 109, 97, 116, 101, 32, 111, 102, 32, 108, 101, 110, 40, 108, 105, 115, 116, 40, 105, 116, 41, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str89 = allocate([ 95, 95, 108, 101, 110, 103, 116, 104, 95, 104, 105, 110, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _repeat_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _repeat_doc = allocate([ 114, 101, 112, 101, 97, 116, 40, 111, 98, 106, 101, 99, 116, 32, 91, 44, 116, 105, 109, 101, 115, 93, 41, 32, 45, 62, 32, 99, 114, 101, 97, 116, 101, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 119, 104, 105, 99, 104, 32, 114, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 111, 98, 106, 101, 99, 116, 10, 102, 111, 114, 32, 116, 104, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 116, 105, 109, 101, 115, 46, 32, 32, 73, 102, 32, 110, 111, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 44, 32, 114, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 111, 98, 106, 101, 99, 116, 10, 101, 110, 100, 108, 101, 115, 115, 108, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str90 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 114, 101, 112, 101, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    _repeat_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str91 = allocate([ 102, 105, 108, 108, 118, 97, 108, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str92 = allocate([ 105, 122, 105, 112, 95, 108, 111, 110, 103, 101, 115, 116, 40, 41, 32, 103, 111, 116, 32, 97, 110, 32, 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 107, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___12314 = allocate([ 105, 122, 105, 112, 95, 108, 111, 110, 103, 101, 115, 116, 95, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    __str93 = allocate([ 105, 122, 105, 112, 95, 108, 111, 110, 103, 101, 115, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 35, 37, 122, 100, 32, 109, 117, 115, 116, 32, 115, 117, 112, 112, 111, 114, 116, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    _izip_longest_doc = allocate([ 105, 122, 105, 112, 95, 108, 111, 110, 103, 101, 115, 116, 40, 105, 116, 101, 114, 49, 32, 91, 44, 105, 116, 101, 114, 50, 32, 91, 46, 46, 46, 93, 93, 44, 32, 91, 102, 105, 108, 108, 118, 97, 108, 117, 101, 61, 78, 111, 110, 101, 93, 41, 32, 45, 45, 62, 32, 105, 122, 105, 112, 95, 108, 111, 110, 103, 101, 115, 116, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 110, 32, 105, 122, 105, 112, 95, 108, 111, 110, 103, 101, 115, 116, 32, 111, 98, 106, 101, 99, 116, 32, 119, 104, 111, 115, 101, 32, 46, 110, 101, 120, 116, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 114, 101, 116, 117, 114, 110, 115, 32, 97, 32, 116, 117, 112, 108, 101, 32, 119, 104, 101, 114, 101, 10, 116, 104, 101, 32, 105, 45, 116, 104, 32, 101, 108, 101, 109, 101, 110, 116, 32, 99, 111, 109, 101, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 105, 45, 116, 104, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 46, 32, 32, 84, 104, 101, 32, 46, 110, 101, 120, 116, 40, 41, 10, 109, 101, 116, 104, 111, 100, 32, 99, 111, 110, 116, 105, 110, 117, 101, 115, 32, 117, 110, 116, 105, 108, 32, 116, 104, 101, 32, 108, 111, 110, 103, 101, 115, 116, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 105, 110, 32, 116, 104, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 115, 101, 113, 117, 101, 110, 99, 101, 10, 105, 115, 32, 101, 120, 104, 97, 117, 115, 116, 101, 100, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 105, 116, 32, 114, 97, 105, 115, 101, 115, 32, 83, 116, 111, 112, 73, 116, 101, 114, 97, 116, 105, 111, 110, 46, 32, 32, 87, 104, 101, 110, 32, 116, 104, 101, 32, 115, 104, 111, 114, 116, 101, 114, 32, 105, 116, 101, 114, 97, 98, 108, 101, 115, 10, 97, 114, 101, 32, 101, 120, 104, 97, 117, 115, 116, 101, 100, 44, 32, 116, 104, 101, 32, 102, 105, 108, 108, 118, 97, 108, 117, 101, 32, 105, 115, 32, 115, 117, 98, 115, 116, 105, 116, 117, 116, 101, 100, 32, 105, 110, 32, 116, 104, 101, 105, 114, 32, 112, 108, 97, 99, 101, 46, 32, 32, 84, 104, 101, 32, 102, 105, 108, 108, 118, 97, 108, 117, 101, 10, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 78, 111, 110, 101, 32, 111, 114, 32, 99, 97, 110, 32, 98, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 98, 121, 32, 97, 32, 107, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str94 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 105, 122, 105, 112, 95, 108, 111, 110, 103, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _iziplongest_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_doc = allocate([ 70, 117, 110, 99, 116, 105, 111, 110, 97, 108, 32, 116, 111, 111, 108, 115, 32, 102, 111, 114, 32, 99, 114, 101, 97, 116, 105, 110, 103, 32, 97, 110, 100, 32, 117, 115, 105, 110, 103, 32, 105, 116, 101, 114, 97, 116, 111, 114, 115, 46, 10, 10, 73, 110, 102, 105, 110, 105, 116, 101, 32, 105, 116, 101, 114, 97, 116, 111, 114, 115, 58, 10, 99, 111, 117, 110, 116, 40, 91, 110, 93, 41, 32, 45, 45, 62, 32, 110, 44, 32, 110, 43, 49, 44, 32, 110, 43, 50, 44, 32, 46, 46, 46, 10, 99, 121, 99, 108, 101, 40, 112, 41, 32, 45, 45, 62, 32, 112, 48, 44, 32, 112, 49, 44, 32, 46, 46, 46, 32, 112, 108, 97, 115, 116, 44, 32, 112, 48, 44, 32, 112, 49, 44, 32, 46, 46, 46, 10, 114, 101, 112, 101, 97, 116, 40, 101, 108, 101, 109, 32, 91, 44, 110, 93, 41, 32, 45, 45, 62, 32, 101, 108, 101, 109, 44, 32, 101, 108, 101, 109, 44, 32, 101, 108, 101, 109, 44, 32, 46, 46, 46, 32, 101, 110, 100, 108, 101, 115, 115, 108, 121, 32, 111, 114, 32, 117, 112, 32, 116, 111, 32, 110, 32, 116, 105, 109, 101, 115, 10, 10, 73, 116, 101, 114, 97, 116, 111, 114, 115, 32, 116, 101, 114, 109, 105, 110, 97, 116, 105, 110, 103, 32, 111, 110, 32, 116, 104, 101, 32, 115, 104, 111, 114, 116, 101, 115, 116, 32, 105, 110, 112, 117, 116, 32, 115, 101, 113, 117, 101, 110, 99, 101, 58, 10, 99, 104, 97, 105, 110, 40, 112, 44, 32, 113, 44, 32, 46, 46, 46, 41, 32, 45, 45, 62, 32, 112, 48, 44, 32, 112, 49, 44, 32, 46, 46, 46, 32, 112, 108, 97, 115, 116, 44, 32, 113, 48, 44, 32, 113, 49, 44, 32, 46, 46, 46, 32, 10, 99, 111, 109, 112, 114, 101, 115, 115, 40, 100, 97, 116, 97, 44, 32, 115, 101, 108, 101, 99, 116, 111, 114, 115, 41, 32, 45, 45, 62, 32, 40, 100, 91, 48, 93, 32, 105, 102, 32, 115, 91, 48, 93, 41, 44, 32, 40, 100, 91, 49, 93, 32, 105, 102, 32, 115, 91, 49, 93, 41, 44, 32, 46, 46, 46, 10, 100, 114, 111, 112, 119, 104, 105, 108, 101, 40, 112, 114, 101, 100, 44, 32, 115, 101, 113, 41, 32, 45, 45, 62, 32, 115, 101, 113, 91, 110, 93, 44, 32, 115, 101, 113, 91, 110, 43, 49, 93, 44, 32, 115, 116, 97, 114, 116, 105, 110, 103, 32, 119, 104, 101, 110, 32, 112, 114, 101, 100, 32, 102, 97, 105, 108, 115, 10, 103, 114, 111, 117, 112, 98, 121, 40, 105, 116, 101, 114, 97, 98, 108, 101, 91, 44, 32, 107, 101, 121, 102, 117, 110, 99, 93, 41, 32, 45, 45, 62, 32, 115, 117, 98, 45, 105, 116, 101, 114, 97, 116, 111, 114, 115, 32, 103, 114, 111, 117, 112, 101, 100, 32, 98, 121, 32, 118, 97, 108, 117, 101, 32, 111, 102, 32, 107, 101, 121, 102, 117, 110, 99, 40, 118, 41, 10, 105, 102, 105, 108, 116, 101, 114, 40, 112, 114, 101, 100, 44, 32, 115, 101, 113, 41, 32, 45, 45, 62, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 111, 102, 32, 115, 101, 113, 32, 119, 104, 101, 114, 101, 32, 112, 114, 101, 100, 40, 101, 108, 101, 109, 41, 32, 105, 115, 32, 84, 114, 117, 101, 10, 105, 102, 105, 108, 116, 101, 114, 102, 97, 108, 115, 101, 40, 112, 114, 101, 100, 44, 32, 115, 101, 113, 41, 32, 45, 45, 62, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 111, 102, 32, 115, 101, 113, 32, 119, 104, 101, 114, 101, 32, 112, 114, 101, 100, 40, 101, 108, 101, 109, 41, 32, 105, 115, 32, 70, 97, 108, 115, 101, 10, 105, 115, 108, 105, 99, 101, 40, 115, 101, 113, 44, 32, 91, 115, 116, 97, 114, 116, 44, 93, 32, 115, 116, 111, 112, 32, 91, 44, 32, 115, 116, 101, 112, 93, 41, 32, 45, 45, 62, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 10, 32, 32, 32, 32, 32, 32, 32, 115, 101, 113, 91, 115, 116, 97, 114, 116, 58, 115, 116, 111, 112, 58, 115, 116, 101, 112, 93, 10, 105, 109, 97, 112, 40, 102, 117, 110, 44, 32, 112, 44, 32, 113, 44, 32, 46, 46, 46, 41, 32, 45, 45, 62, 32, 102, 117, 110, 40, 112, 48, 44, 32, 113, 48, 41, 44, 32, 102, 117, 110, 40, 112, 49, 44, 32, 113, 49, 41, 44, 32, 46, 46, 46, 10, 115, 116, 97, 114, 109, 97, 112, 40, 102, 117, 110, 44, 32, 115, 101, 113, 41, 32, 45, 45, 62, 32, 102, 117, 110, 40, 42, 115, 101, 113, 91, 48, 93, 41, 44, 32, 102, 117, 110, 40, 42, 115, 101, 113, 91, 49, 93, 41, 44, 32, 46, 46, 46, 10, 116, 101, 101, 40, 105, 116, 44, 32, 110, 61, 50, 41, 32, 45, 45, 62, 32, 40, 105, 116, 49, 44, 32, 105, 116, 50, 32, 44, 32, 46, 46, 46, 32, 105, 116, 110, 41, 32, 115, 112, 108, 105, 116, 115, 32, 111, 110, 101, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 105, 110, 116, 111, 32, 110, 10, 116, 97, 107, 101, 119, 104, 105, 108, 101, 40, 112, 114, 101, 100, 44, 32, 115, 101, 113, 41, 32, 45, 45, 62, 32, 115, 101, 113, 91, 48, 93, 44, 32, 115, 101, 113, 91, 49, 93, 44, 32, 117, 110, 116, 105, 108, 32, 112, 114, 101, 100, 32, 102, 97, 105, 108, 115, 10, 105, 122, 105, 112, 40, 112, 44, 32, 113, 44, 32, 46, 46, 46, 41, 32, 45, 45, 62, 32, 40, 112, 91, 48, 93, 44, 32, 113, 91, 48, 93, 41, 44, 32, 40, 112, 91, 49, 93, 44, 32, 113, 91, 49, 93, 41, 44, 32, 46, 46, 46, 32, 10, 105, 122, 105, 112, 95, 108, 111, 110, 103, 101, 115, 116, 40, 112, 44, 32, 113, 44, 32, 46, 46, 46, 41, 32, 45, 45, 62, 32, 40, 112, 91, 48, 93, 44, 32, 113, 91, 48, 93, 41, 44, 32, 40, 112, 91, 49, 93, 44, 32, 113, 91, 49, 93, 41, 44, 32, 46, 46, 46, 32, 10, 10, 67, 111, 109, 98, 105, 110, 97, 116, 111, 114, 105, 99, 32, 103, 101, 110, 101, 114, 97, 116, 111, 114, 115, 58, 10, 112, 114, 111, 100, 117, 99, 116, 40, 112, 44, 32, 113, 44, 32, 46, 46, 46, 32, 91, 114, 101, 112, 101, 97, 116, 61, 49, 93, 41, 32, 45, 45, 62, 32, 99, 97, 114, 116, 101, 115, 105, 97, 110, 32, 112, 114, 111, 100, 117, 99, 116, 10, 112, 101, 114, 109, 117, 116, 97, 116, 105, 111, 110, 115, 40, 112, 91, 44, 32, 114, 93, 41, 10, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 40, 112, 44, 32, 114, 41, 10, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 95, 119, 105, 116, 104, 95, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 40, 112, 44, 32, 114, 41, 10, 0 ], "i8", ALLOC_NORMAL);
    _module_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _C_280_12615 = allocate(80, "%struct._typeobject*", ALLOC_NORMAL);
    __str95 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    __str96 = allocate([ 110, 97, 109, 101, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___12611 = allocate([ 105, 110, 105, 116, 105, 116, 101, 114, 116, 111, 111, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_kwargs_8299] = __str1;
    HEAP[_kwargs_8299 + 4] = __str2;
    HEAP[_groupby_type + 12] = __str3;
    HEAP[_groupby_type + 24] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_groupby_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_groupby_type + 88] = _groupby_doc;
    HEAP[_groupby_type + 92] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_groupby_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_groupby_type + 112] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_groupby_type + 156] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_groupby_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[__grouper_type + 12] = __str7;
    HEAP[__grouper_type + 24] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[__grouper_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[__grouper_type + 92] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[__grouper_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[__grouper_type + 112] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[__grouper_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_teedataobject_type + 12] = __str10;
    HEAP[_teedataobject_type + 24] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_teedataobject_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_teedataobject_type + 88] = _teedataobject_doc;
    HEAP[_teedataobject_type + 92] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_teedataobject_type + 96] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_teedataobject_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_tee_methods] = __str12;
    HEAP[_tee_methods + 4] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_tee_methods + 12] = _teecopy_doc;
    HEAP[_tee_type + 12] = __str13;
    HEAP[_tee_type + 24] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_tee_type + 88] = _teeobject_doc;
    HEAP[_tee_type + 92] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_tee_type + 96] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_tee_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_tee_type + 112] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_tee_type + 116] = _tee_methods;
    HEAP[_tee_type + 156] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_tee_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_cycle_type + 12] = __str18;
    HEAP[_cycle_type + 24] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_cycle_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_cycle_type + 88] = _cycle_doc;
    HEAP[_cycle_type + 92] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_cycle_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_cycle_type + 112] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_cycle_type + 156] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_cycle_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_dropwhile_type + 12] = __str21;
    HEAP[_dropwhile_type + 24] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_dropwhile_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_dropwhile_type + 88] = _dropwhile_doc;
    HEAP[_dropwhile_type + 92] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_dropwhile_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_dropwhile_type + 112] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_dropwhile_type + 156] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_dropwhile_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_takewhile_type + 12] = __str24;
    HEAP[_takewhile_type + 24] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_takewhile_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_takewhile_type + 88] = _takewhile_doc;
    HEAP[_takewhile_type + 92] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_takewhile_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_takewhile_type + 112] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_takewhile_type + 156] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_takewhile_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_islice_type + 12] = __str30;
    HEAP[_islice_type + 24] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_islice_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_islice_type + 88] = _islice_doc;
    HEAP[_islice_type + 92] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_islice_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_islice_type + 112] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_islice_type + 156] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_islice_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_starmap_type + 12] = __str33;
    HEAP[_starmap_type + 24] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_starmap_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_starmap_type + 88] = _starmap_doc;
    HEAP[_starmap_type + 92] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_starmap_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_starmap_type + 112] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_starmap_type + 156] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_starmap_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_imap_type + 12] = __str36;
    HEAP[_imap_type + 24] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_imap_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_imap_type + 88] = _imap_doc;
    HEAP[_imap_type + 92] = FUNCTION_TABLE_OFFSET + 82;
    HEAP[_imap_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_imap_type + 112] = FUNCTION_TABLE_OFFSET + 84;
    HEAP[_imap_type + 156] = FUNCTION_TABLE_OFFSET + 86;
    HEAP[_imap_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_chain_methods] = __str38;
    HEAP[_chain_methods + 4] = FUNCTION_TABLE_OFFSET + 88;
    HEAP[_chain_methods + 12] = _chain_from_iterable_doc;
    HEAP[_chain_type + 12] = __str39;
    HEAP[_chain_type + 24] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_chain_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_chain_type + 88] = _chain_doc;
    HEAP[_chain_type + 92] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_chain_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_chain_type + 112] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_chain_type + 116] = _chain_methods;
    HEAP[_chain_type + 156] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_chain_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_C_70_10224] = __str40;
    HEAP[_product_type + 12] = __str45;
    HEAP[_product_type + 24] = FUNCTION_TABLE_OFFSET + 98;
    HEAP[_product_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_product_type + 88] = _product_doc;
    HEAP[_product_type + 92] = FUNCTION_TABLE_OFFSET + 100;
    HEAP[_product_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_product_type + 112] = FUNCTION_TABLE_OFFSET + 102;
    HEAP[_product_type + 156] = FUNCTION_TABLE_OFFSET + 104;
    HEAP[_product_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_kwargs_10490] = __str1;
    HEAP[_kwargs_10490 + 4] = __str47;
    HEAP[_combinations_type + 12] = __str50;
    HEAP[_combinations_type + 24] = FUNCTION_TABLE_OFFSET + 106;
    HEAP[_combinations_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_combinations_type + 88] = _combinations_doc;
    HEAP[_combinations_type + 92] = FUNCTION_TABLE_OFFSET + 108;
    HEAP[_combinations_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_combinations_type + 112] = FUNCTION_TABLE_OFFSET + 110;
    HEAP[_combinations_type + 156] = FUNCTION_TABLE_OFFSET + 112;
    HEAP[_combinations_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_kwargs_10713] = __str1;
    HEAP[_kwargs_10713 + 4] = __str47;
    HEAP[_cwr_type + 12] = __str52;
    HEAP[_cwr_type + 24] = FUNCTION_TABLE_OFFSET + 114;
    HEAP[_cwr_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_cwr_type + 88] = _cwr_doc;
    HEAP[_cwr_type + 92] = FUNCTION_TABLE_OFFSET + 116;
    HEAP[_cwr_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_cwr_type + 112] = FUNCTION_TABLE_OFFSET + 118;
    HEAP[_cwr_type + 156] = FUNCTION_TABLE_OFFSET + 120;
    HEAP[_cwr_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_kwargs_10941] = __str1;
    HEAP[_kwargs_10941 + 4] = __str47;
    HEAP[_permutations_type + 12] = __str54;
    HEAP[_permutations_type + 24] = FUNCTION_TABLE_OFFSET + 122;
    HEAP[_permutations_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_permutations_type + 88] = _permutations_doc;
    HEAP[_permutations_type + 92] = FUNCTION_TABLE_OFFSET + 124;
    HEAP[_permutations_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_permutations_type + 112] = FUNCTION_TABLE_OFFSET + 126;
    HEAP[_permutations_type + 156] = FUNCTION_TABLE_OFFSET + 128;
    HEAP[_permutations_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_kwargs_11179] = __str56;
    HEAP[_kwargs_11179 + 4] = __str57;
    HEAP[_compress_type + 12] = __str58;
    HEAP[_compress_type + 24] = FUNCTION_TABLE_OFFSET + 130;
    HEAP[_compress_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_compress_type + 88] = _compress_doc;
    HEAP[_compress_type + 92] = FUNCTION_TABLE_OFFSET + 132;
    HEAP[_compress_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_compress_type + 112] = FUNCTION_TABLE_OFFSET + 134;
    HEAP[_compress_type + 156] = FUNCTION_TABLE_OFFSET + 136;
    HEAP[_compress_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_ifilter_type + 12] = __str61;
    HEAP[_ifilter_type + 24] = FUNCTION_TABLE_OFFSET + 138;
    HEAP[_ifilter_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_ifilter_type + 88] = _ifilter_doc;
    HEAP[_ifilter_type + 92] = FUNCTION_TABLE_OFFSET + 140;
    HEAP[_ifilter_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_ifilter_type + 112] = FUNCTION_TABLE_OFFSET + 142;
    HEAP[_ifilter_type + 156] = FUNCTION_TABLE_OFFSET + 144;
    HEAP[_ifilter_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_ifilterfalse_type + 12] = __str64;
    HEAP[_ifilterfalse_type + 24] = FUNCTION_TABLE_OFFSET + 146;
    HEAP[_ifilterfalse_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_ifilterfalse_type + 88] = _ifilterfalse_doc;
    HEAP[_ifilterfalse_type + 92] = FUNCTION_TABLE_OFFSET + 148;
    HEAP[_ifilterfalse_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_ifilterfalse_type + 112] = FUNCTION_TABLE_OFFSET + 150;
    HEAP[_ifilterfalse_type + 156] = FUNCTION_TABLE_OFFSET + 152;
    HEAP[_ifilterfalse_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_kwlist_11645] = __str66;
    HEAP[_kwlist_11645 + 4] = __str67;
    HEAP[_count_methods] = __str78;
    HEAP[_count_methods + 4] = FUNCTION_TABLE_OFFSET + 154;
    HEAP[_count_methods + 12] = _count_reduce_doc;
    HEAP[_count_type + 12] = __str79;
    HEAP[_count_type + 24] = FUNCTION_TABLE_OFFSET + 156;
    HEAP[_count_type + 44] = FUNCTION_TABLE_OFFSET + 158;
    HEAP[_count_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_count_type + 88] = _count_doc;
    HEAP[_count_type + 92] = FUNCTION_TABLE_OFFSET + 160;
    HEAP[_count_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_count_type + 112] = FUNCTION_TABLE_OFFSET + 162;
    HEAP[_count_type + 116] = _count_methods;
    HEAP[_count_type + 156] = FUNCTION_TABLE_OFFSET + 164;
    HEAP[_count_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_izip_type + 12] = __str82;
    HEAP[_izip_type + 24] = FUNCTION_TABLE_OFFSET + 166;
    HEAP[_izip_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_izip_type + 88] = _izip_doc;
    HEAP[_izip_type + 92] = FUNCTION_TABLE_OFFSET + 168;
    HEAP[_izip_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_izip_type + 112] = FUNCTION_TABLE_OFFSET + 170;
    HEAP[_izip_type + 156] = FUNCTION_TABLE_OFFSET + 172;
    HEAP[_izip_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_kwargs_12177] = __str84;
    HEAP[_kwargs_12177 + 4] = __str85;
    HEAP[_repeat_methods] = __str89;
    HEAP[_repeat_methods + 4] = FUNCTION_TABLE_OFFSET + 174;
    HEAP[_repeat_methods + 12] = _length_hint_doc;
    HEAP[_repeat_type + 12] = __str90;
    HEAP[_repeat_type + 24] = FUNCTION_TABLE_OFFSET + 176;
    HEAP[_repeat_type + 44] = FUNCTION_TABLE_OFFSET + 178;
    HEAP[_repeat_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_repeat_type + 88] = _repeat_doc;
    HEAP[_repeat_type + 92] = FUNCTION_TABLE_OFFSET + 180;
    HEAP[_repeat_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_repeat_type + 112] = FUNCTION_TABLE_OFFSET + 182;
    HEAP[_repeat_type + 116] = _repeat_methods;
    HEAP[_repeat_type + 156] = FUNCTION_TABLE_OFFSET + 184;
    HEAP[_repeat_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iziplongest_type + 12] = __str94;
    HEAP[_iziplongest_type + 24] = FUNCTION_TABLE_OFFSET + 186;
    HEAP[_iziplongest_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_iziplongest_type + 88] = _izip_longest_doc;
    HEAP[_iziplongest_type + 92] = FUNCTION_TABLE_OFFSET + 188;
    HEAP[_iziplongest_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_iziplongest_type + 112] = FUNCTION_TABLE_OFFSET + 190;
    HEAP[_iziplongest_type + 156] = FUNCTION_TABLE_OFFSET + 192;
    HEAP[_iziplongest_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_module_methods] = __str11;
    HEAP[_module_methods + 4] = FUNCTION_TABLE_OFFSET + 194;
    HEAP[_module_methods + 12] = _tee_doc;
    HEAP[_C_280_12615] = _combinations_type;
    HEAP[_C_280_12615 + 4] = _cwr_type;
    HEAP[_C_280_12615 + 8] = _cycle_type;
    HEAP[_C_280_12615 + 12] = _dropwhile_type;
    HEAP[_C_280_12615 + 16] = _takewhile_type;
    HEAP[_C_280_12615 + 20] = _islice_type;
    HEAP[_C_280_12615 + 24] = _starmap_type;
    HEAP[_C_280_12615 + 28] = _imap_type;
    HEAP[_C_280_12615 + 32] = _chain_type;
    HEAP[_C_280_12615 + 36] = _compress_type;
    HEAP[_C_280_12615 + 40] = _ifilter_type;
    HEAP[_C_280_12615 + 44] = _ifilterfalse_type;
    HEAP[_C_280_12615 + 48] = _count_type;
    HEAP[_C_280_12615 + 52] = _izip_type;
    HEAP[_C_280_12615 + 56] = _iziplongest_type;
    HEAP[_C_280_12615 + 60] = _permutations_type;
    HEAP[_C_280_12615 + 64] = _product_type;
    HEAP[_C_280_12615 + 68] = _repeat_type;
    HEAP[_C_280_12615 + 72] = _groupby_type;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
