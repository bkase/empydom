"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 352;
  var $1___SIZE = 16;
  var $2___SIZE = 16;
  var $3___SIZE = 40;
  var $4___SIZE = 196;
  var $5___SIZE = 96;
  var $6___SIZE = 196;
  var $7___SIZE = 80;
  var $struct_ElementObject___SIZE = 24;
  var $struct_ElementObjectExtra___SIZE = 32;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyCompilerFlags___SIZE = 4;
  var $struct_PyExpat_CAPI___SIZE = 80;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyListObject___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PySliceObject___SIZE = 20;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_PyUnicodeObject___SIZE = 24;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct_TreeBuilderObject___SIZE = 52;
  var $struct_XMLParserObject___SIZE = 52;
  var $struct_XML_Encoding___SIZE = 1036;
  var $struct_XML_Encoding___FLATTENER = [ 0, 1024, 1028, 1032 ];
  var $struct_XML_Memory_Handling_Suite___SIZE = 12;
  var $struct_XML_ParserStruct___SIZE = 0;
  var $struct_XML_ParserStruct___FLATTENER = [];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _elementtree_deepcopy_obj;
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
  var _elementpath_obj;
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
  var _elementtree_iter_obj;
  var __str24;
  var __str25;
  var _elementtree_itertext_obj;
  var __str26;
  var __str27;
  var __str28;
  var __str29;
  var __str30;
  var __str31;
  var __str32;
  var _elementtree_copyelement_obj;
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
  var _element_methods;
  var __str59;
  var __str60;
  var __str61;
  var __str62;
  var __str63;
  var _element_as_sequence;
  var _element_as_mapping;
  var __str64;
  var _Element_Type;
  var __str65;
  var _elementtree_parseerror_obj;
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
  var _treebuilder_methods;
  var __str79;
  var _TreeBuilder_Type;
  var __str80;
  var __str81;
  var __str82;
  var __str83;
  var __str84;
  var __str85;
  var __str86;
  var _expat_capi;
  var __str87;
  var __str88;
  var _kwlist_12155;
  var __str89;
  var __str90;
  var __str91;
  var _memory_handler_12152;
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
  var _xmlparser_methods;
  var __str108;
  var __str109;
  var __str110;
  var __str111;
  var _XMLParser_Type;
  var __str112;
  var __str113;
  var __functions;
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
  function _deepcopy($object, $memo) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $object_addr = __stackBase__;
      var $memo_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $args = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      
      HEAP[$object_addr] = $object;
      HEAP[$memo_addr] = $memo;
      
      
      if (HEAP[_elementtree_deepcopy_obj] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($3, __str);
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 2:
      var $4 = _PyTuple_New(2);
      HEAP[$args] = $4;
      
      
      if (HEAP[$args] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 4:
      
      
      
      var $10 = HEAP[HEAP[$object_addr]] + 1;
      
      var $12 = HEAP[$object_addr];
      HEAP[$12] = $10;
      
      
      
      var $16 = HEAP[$args] + 12;
      var $17 = HEAP[$object_addr];
      HEAP[$16] = $17;
      
      
      
      var $21 = HEAP[HEAP[$memo_addr]] + 1;
      
      var $23 = HEAP[$memo_addr];
      HEAP[$23] = $21;
      
      
      
      var $27 = HEAP[$args] + 12 + 4;
      var $28 = HEAP[$memo_addr];
      HEAP[$27] = $28;
      var $29 = HEAP[_elementtree_deepcopy_obj];
      var $30 = HEAP[$args];
      var $31 = _PyObject_CallObject($29, $30);
      HEAP[$result] = $31;
      
      
      
      var $35 = HEAP[HEAP[$args]] - 1;
      
      var $37 = HEAP[$args];
      HEAP[$37] = $35;
      
      
      
      
      if (HEAP[HEAP[$args]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$args] + 4] + 24];
      var $47 = HEAP[$args];
      FUNCTION_TABLE[$46]($47);
      __label__ = 6;
      break;
     case 6:
      var $48 = HEAP[$result];
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
  function _list_join($list) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $list_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $joiner = __stackBase__ + 12;
      var $function = __stackBase__ + 16;
      var $args = __stackBase__ + 20;
      var $result = __stackBase__ + 24;
      
      HEAP[$list_addr] = $list;
      
      
      
      var $4 = HEAP[HEAP[$list_addr] + 8];
      if ($4 == 0) {
        __label__ = 1;
        break;
      } else if ($4 == 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[HEAP[$list_addr]] - 1;
      
      var $10 = HEAP[$list_addr];
      HEAP[$10] = $8;
      
      
      
      
      if (HEAP[HEAP[$list_addr]] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $19 = HEAP[HEAP[HEAP[$list_addr] + 4] + 24];
      var $20 = HEAP[$list_addr];
      FUNCTION_TABLE[$19]($20);
      __label__ = 3;
      break;
     case 3:
      var $21 = _PyString_FromString(__str1);
      HEAP[$0] = $21;
      __label__ = 22;
      break;
     case 4:
      
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[$list_addr] + 12]];
      HEAP[$result] = $27;
      
      
      
      var $31 = HEAP[HEAP[$result]] + 1;
      
      var $33 = HEAP[$result];
      HEAP[$33] = $31;
      
      
      
      var $37 = HEAP[HEAP[$list_addr]] - 1;
      
      var $39 = HEAP[$list_addr];
      HEAP[$39] = $37;
      
      
      
      
      if (HEAP[HEAP[$list_addr]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $48 = HEAP[HEAP[HEAP[$list_addr] + 4] + 24];
      var $49 = HEAP[$list_addr];
      FUNCTION_TABLE[$48]($49);
      __label__ = 6;
      break;
     case 6:
      var $50 = HEAP[$result];
      HEAP[$0] = $50;
      __label__ = 22;
      break;
     case 7:
      
      
      
      
      
      var $56 = HEAP[HEAP[HEAP[$list_addr] + 12]];
      var $57 = _PySequence_GetSlice($56, 0, 0);
      HEAP[$joiner] = $57;
      
      
      if (HEAP[$joiner] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 9:
      var $60 = HEAP[$joiner];
      var $61 = _PyObject_GetAttrString($60, __str2);
      HEAP[$function] = $61;
      
      
      if (HEAP[$function] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      var $67 = HEAP[HEAP[$joiner]] - 1;
      
      var $69 = HEAP[$joiner];
      HEAP[$69] = $67;
      
      
      
      
      if (HEAP[HEAP[$joiner]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $78 = HEAP[HEAP[HEAP[$joiner] + 4] + 24];
      var $79 = HEAP[$joiner];
      FUNCTION_TABLE[$78]($79);
      __label__ = 12;
      break;
     case 12:
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 13:
      var $80 = _PyTuple_New(1);
      HEAP[$args] = $80;
      
      
      if (HEAP[$args] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 15:
      
      
      
      var $86 = HEAP[$args] + 12;
      var $87 = HEAP[$list_addr];
      HEAP[$86] = $87;
      var $88 = HEAP[$function];
      var $89 = HEAP[$args];
      var $90 = _PyObject_CallObject($88, $89);
      HEAP[$result] = $90;
      
      
      
      var $94 = HEAP[HEAP[$args]] - 1;
      
      var $96 = HEAP[$args];
      HEAP[$96] = $94;
      
      
      
      
      if (HEAP[HEAP[$args]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $105 = HEAP[HEAP[HEAP[$args] + 4] + 24];
      var $106 = HEAP[$args];
      FUNCTION_TABLE[$105]($106);
      __label__ = 17;
      break;
     case 17:
      
      
      
      var $110 = HEAP[HEAP[$function]] - 1;
      
      var $112 = HEAP[$function];
      HEAP[$112] = $110;
      
      
      
      
      if (HEAP[HEAP[$function]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $121 = HEAP[HEAP[HEAP[$function] + 4] + 24];
      var $122 = HEAP[$function];
      FUNCTION_TABLE[$121]($122);
      __label__ = 19;
      break;
     case 19:
      
      
      
      var $126 = HEAP[HEAP[$joiner]] - 1;
      
      var $128 = HEAP[$joiner];
      HEAP[$128] = $126;
      
      
      
      
      if (HEAP[HEAP[$joiner]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $137 = HEAP[HEAP[HEAP[$joiner] + 4] + 24];
      var $138 = HEAP[$joiner];
      FUNCTION_TABLE[$137]($138);
      __label__ = 21;
      break;
     case 21:
      var $139 = HEAP[$result];
      HEAP[$0] = $139;
      __label__ = 22;
      break;
     case 22:
      var $140 = HEAP[$0];
      HEAP[$retval] = $140;
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
  function _element_new_extra($self, $attrib) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $attrib_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$attrib_addr] = $attrib;
      var $1 = _PyObject_Malloc(32);
      
      
      var $4 = HEAP[$self_addr] + 20;
      HEAP[$4] = $1;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 2:
      
      
      if (HEAP[$attrib_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$attrib_addr] = __Py_NoneStruct;
      __label__ = 4;
      break;
     case 4:
      
      
      
      var $14 = HEAP[HEAP[$attrib_addr]] + 1;
      
      var $16 = HEAP[$attrib_addr];
      HEAP[$16] = $14;
      
      
      
      var $20 = HEAP[HEAP[$self_addr] + 20];
      var $21 = HEAP[$attrib_addr];
      HEAP[$20] = $21;
      
      
      
      var $25 = HEAP[HEAP[$self_addr] + 20] + 4;
      HEAP[$25] = 0;
      
      
      
      var $29 = HEAP[HEAP[$self_addr] + 20] + 8;
      HEAP[$29] = 4;
      
      
      
      
      
      
      
      var $37 = HEAP[HEAP[$self_addr] + 20] + 16;
      var $38 = HEAP[HEAP[$self_addr] + 20] + 12;
      HEAP[$38] = $37;
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $39 = HEAP[$0];
      HEAP[$retval] = $39;
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
  function _element_dealloc_extra($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $i = __stackBase__ + 4;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      var $4 = HEAP[HEAP[HEAP[$self_addr] + 20]];
      
      
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
      
      
      
      
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[HEAP[HEAP[$self_addr] + 20]] + 4] + 24];
      
      
      
      
      var $25 = HEAP[HEAP[HEAP[$self_addr] + 20]];
      FUNCTION_TABLE[$20]($25);
      __label__ = 2;
      break;
     case 2:
      HEAP[$i] = 0;
      __label__ = 6;
      break;
     case 3:
      
      
      
      
      
      
      
      var $33 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[$i]];
      
      
      var $36 = HEAP[$33] - 1;
      var $37 = $33;
      HEAP[$37] = $36;
      
      
      
      if (HEAP[$33] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      var $52 = HEAP[HEAP[HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[$i]] + 4] + 24];
      
      
      
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[$i]];
      FUNCTION_TABLE[$52]($60);
      __label__ = 5;
      break;
     case 5:
      
      var $62 = HEAP[$i] + 1;
      HEAP[$i] = $62;
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] > HEAP[$i]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 12] != HEAP[HEAP[$self_addr] + 20] + 16) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $86 = HEAP[HEAP[HEAP[$self_addr] + 20] + 12];
      _PyObject_Free($86);
      __label__ = 9;
      break;
     case 9:
      
      
      
      var $90 = HEAP[HEAP[$self_addr] + 20];
      _PyObject_Free($90);
      __label__ = 10;
      break;
     case 10:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element_new($tag, $attrib) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tag_addr = __stackBase__;
      var $attrib_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $self = __stackBase__ + 16;
      
      HEAP[$tag_addr] = $tag;
      HEAP[$attrib_addr] = $attrib;
      var $1 = __PyObject_New(_Element_Type);
      
      HEAP[$self] = $1;
      
      
      if (HEAP[$self] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$attrib_addr] + 4] == _PyDict_Type) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $9 = HEAP[$attrib_addr];
      var $10 = _PyDict_Size($9);
      
      if ($10 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$attrib_addr] = __Py_NoneStruct;
      __label__ = 5;
      break;
     case 5:
      
      var $13 = HEAP[$self] + 20;
      HEAP[$13] = 0;
      
      
      if (HEAP[$attrib_addr] != __Py_NoneStruct) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      var $16 = HEAP[$self];
      var $17 = HEAP[$attrib_addr];
      var $18 = _element_new_extra($16, $17);
      
      if ($18 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      var $21 = HEAP[$self];
      _PyObject_Free($21);
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 8:
      
      
      
      var $25 = HEAP[HEAP[$self] + 20] + 4;
      HEAP[$25] = 0;
      
      
      
      var $29 = HEAP[HEAP[$self] + 20] + 8;
      HEAP[$29] = 4;
      
      
      
      
      
      
      
      var $37 = HEAP[HEAP[$self] + 20] + 16;
      var $38 = HEAP[HEAP[$self] + 20] + 12;
      HEAP[$38] = $37;
      __label__ = 9;
      break;
     case 9:
      
      
      
      var $42 = HEAP[HEAP[$tag_addr]] + 1;
      
      var $44 = HEAP[$tag_addr];
      HEAP[$44] = $42;
      
      var $46 = HEAP[$self] + 8;
      var $47 = HEAP[$tag_addr];
      HEAP[$46] = $47;
      
      var $49 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $49;
      
      var $51 = HEAP[$self] + 12;
      HEAP[$51] = __Py_NoneStruct;
      
      var $53 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $53;
      
      var $55 = HEAP[$self] + 16;
      HEAP[$55] = __Py_NoneStruct;
      
      var $57 = HEAP[$self];
      HEAP[$0] = $57;
      __label__ = 10;
      break;
     case 10:
      var $58 = HEAP[$0];
      HEAP[$retval] = $58;
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
  function _element_resize($self, $extra) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $extra_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $iftmp_10 = __stackBase__ + 16;
      var $iftmp_9 = __stackBase__ + 20;
      var $size = __stackBase__ + 24;
      var $children = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$extra_addr] = $extra;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[$self_addr];
      var $6 = _element_new_extra($5, 0);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      
      
      var $13 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4] + HEAP[$extra_addr];
      HEAP[$size] = $13;
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 8] < HEAP[$size]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 3:
      
      var $22 = HEAP[$size] >> 3;
      
      
      if (HEAP[$size] <= 8) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$iftmp_9] = 3;
      __label__ = 6;
      break;
     case 5:
      HEAP[$iftmp_9] = 6;
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $28 = $22 + HEAP[$iftmp_9] + HEAP[$size];
      HEAP[$size] = $28;
      
      
      if (HEAP[$size] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $31 = HEAP[$size];
      HEAP[$iftmp_10] = $31;
      __label__ = 9;
      break;
     case 8:
      HEAP[$iftmp_10] = 1;
      __label__ = 9;
      break;
     case 9:
      var $32 = HEAP[$iftmp_10];
      HEAP[$size] = $32;
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 12] != HEAP[HEAP[$self_addr] + 20] + 16) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      var $45 = HEAP[$size] * 4;
      
      
      
      
      
      var $51 = HEAP[HEAP[HEAP[$self_addr] + 20] + 12];
      var $52 = _PyObject_Realloc($51, $45);
      var $53 = $52;
      HEAP[$children] = $53;
      
      
      if (HEAP[$children] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      __label__ = 14;
      break;
     case 12:
      
      var $57 = HEAP[$size] * 4;
      var $58 = _PyObject_Malloc($57);
      var $59 = $58;
      HEAP[$children] = $59;
      
      
      if (HEAP[$children] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4] * 4;
      
      
      
      
      
      
      var $74 = HEAP[$children];
      var $75 = HEAP[HEAP[HEAP[$self_addr] + 20] + 12];
      _llvm_memcpy_p0i8_p0i8_i32($74, $75, $67, 1, 0);
      __label__ = 14;
      break;
     case 14:
      
      
      
      var $79 = HEAP[HEAP[$self_addr] + 20] + 12;
      var $80 = HEAP[$children];
      HEAP[$79] = $80;
      
      
      
      var $84 = HEAP[HEAP[$self_addr] + 20] + 8;
      var $85 = HEAP[$size];
      HEAP[$84] = $85;
      __label__ = 15;
      break;
     case 15:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 16:
      var $86 = _PyErr_NoMemory();
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 17:
      var $87 = HEAP[$0];
      HEAP[$retval] = $87;
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
  function _element_add_subelement($self, $element) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $element_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$element_addr] = $element;
      var $1 = HEAP[$self_addr];
      var $2 = _element_resize($1, 1);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 3;
      break;
     case 2:
      
      
      
      var $7 = HEAP[HEAP[$element_addr]] + 1;
      
      var $9 = HEAP[$element_addr];
      HEAP[$9] = $7;
      
      
      
      
      
      
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      var $21 = HEAP[$element_addr];
      HEAP[$20] = $21;
      
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4] + 1;
      var $28 = HEAP[HEAP[$self_addr] + 20] + 4;
      HEAP[$28] = $27;
      HEAP[$0] = 0;
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
  function _element_get_attrib($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $res = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      var $5 = HEAP[HEAP[HEAP[$self_addr] + 20]];
      HEAP[$res] = $5;
      
      
      if (HEAP[$res] == __Py_NoneStruct) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      
      var $11 = HEAP[HEAP[$res]] - 1;
      
      var $13 = HEAP[$res];
      HEAP[$13] = $11;
      
      
      
      
      if (HEAP[HEAP[$res]] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $23 = HEAP[$res];
      FUNCTION_TABLE[$22]($23);
      __label__ = 3;
      break;
     case 3:
      var $24 = _PyDict_New();
      HEAP[$res] = $24;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 5:
      
      
      
      var $30 = HEAP[HEAP[$self_addr] + 20];
      var $31 = HEAP[$res];
      HEAP[$30] = $31;
      __label__ = 6;
      break;
     case 6:
      var $32 = HEAP[$res];
      HEAP[$0] = $32;
      __label__ = 7;
      break;
     case 7:
      var $33 = HEAP[$0];
      HEAP[$retval] = $33;
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
  function _element_get_text($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $res = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$res] = $3;
      
      
      
      
      
      if ((HEAP[$res] & 1 & 255) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      var $10 = HEAP[$res] & -2;
      var $11 = $10;
      HEAP[$res] = $11;
      
      
      
      
      if (HEAP[HEAP[$res] + 4] == _PyList_Type) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      var $16 = HEAP[$res];
      var $17 = _list_join($16);
      HEAP[$res] = $17;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 4:
      
      var $21 = HEAP[$self_addr] + 12;
      var $22 = HEAP[$res];
      HEAP[$21] = $22;
      __label__ = 5;
      break;
     case 5:
      var $23 = HEAP[$res];
      HEAP[$0] = $23;
      __label__ = 6;
      break;
     case 6:
      var $24 = HEAP[$0];
      HEAP[$retval] = $24;
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
  function _element_get_tail($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $res = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 16];
      HEAP[$res] = $3;
      
      
      
      
      
      if ((HEAP[$res] & 1 & 255) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      var $10 = HEAP[$res] & -2;
      var $11 = $10;
      HEAP[$res] = $11;
      
      
      
      
      if (HEAP[HEAP[$res] + 4] == _PyList_Type) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      var $16 = HEAP[$res];
      var $17 = _list_join($16);
      HEAP[$res] = $17;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 4:
      
      var $21 = HEAP[$self_addr] + 16;
      var $22 = HEAP[$res];
      HEAP[$21] = $22;
      __label__ = 5;
      break;
     case 5:
      var $23 = HEAP[$res];
      HEAP[$0] = $23;
      __label__ = 6;
      break;
     case 6:
      var $24 = HEAP[$0];
      HEAP[$retval] = $24;
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
  function _element($self, $args, $kw) {
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
      var $iftmp_20 = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $elem = __stackBase__ + 24;
      var $tag = __stackBase__ + 28;
      var $attrib = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$attrib] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str3, allocate([ $tag, 0, 0, 0, _PyDict_Type, 0, 0, 0, $attrib, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$attrib] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$kw_addr] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 4:
      
      
      if (HEAP[$attrib] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $10 = HEAP[$attrib];
      var $11 = _PyDict_Copy($10);
      HEAP[$iftmp_20] = $11;
      __label__ = 7;
      break;
     case 6:
      var $12 = _PyDict_New();
      HEAP[$iftmp_20] = $12;
      __label__ = 7;
      break;
     case 7:
      var $13 = HEAP[$iftmp_20];
      HEAP[$attrib] = $13;
      
      
      if (HEAP[$attrib] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 9:
      
      
      if (HEAP[$kw_addr] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $18 = HEAP[$attrib];
      var $19 = HEAP[$kw_addr];
      var $20 = _PyDict_Update($18, $19);
      __label__ = 11;
      break;
     case 11:
      __label__ = 13;
      break;
     case 12:
      
      var $22 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $22;
      HEAP[$attrib] = __Py_NoneStruct;
      __label__ = 13;
      break;
     case 13:
      var $23 = HEAP[$attrib];
      var $24 = HEAP[$tag];
      var $25 = _element_new($24, $23);
      HEAP[$elem] = $25;
      var $26 = HEAP[$attrib];
      
      
      var $29 = HEAP[$26] - 1;
      var $30 = $26;
      HEAP[$30] = $29;
      
      
      
      if (HEAP[$26] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[$attrib] + 4] + 24];
      var $39 = HEAP[$attrib];
      FUNCTION_TABLE[$38]($39);
      __label__ = 15;
      break;
     case 15:
      var $40 = HEAP[$elem];
      HEAP[$0] = $40;
      __label__ = 16;
      break;
     case 16:
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
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
  function _subelement($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $iftmp_31 = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $elem = __stackBase__ + 24;
      var $parent = __stackBase__ + 28;
      var $tag = __stackBase__ + 32;
      var $attrib = __stackBase__ + 36;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$attrib] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str4, allocate([ _Element_Type, 0, 0, 0, $parent, 0, 0, 0, $tag, 0, 0, 0, _PyDict_Type, 0, 0, 0, $attrib, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.ElementObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if (HEAP[$attrib] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$kw_addr] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 4:
      
      
      if (HEAP[$attrib] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $10 = HEAP[$attrib];
      var $11 = _PyDict_Copy($10);
      HEAP[$iftmp_31] = $11;
      __label__ = 7;
      break;
     case 6:
      var $12 = _PyDict_New();
      HEAP[$iftmp_31] = $12;
      __label__ = 7;
      break;
     case 7:
      var $13 = HEAP[$iftmp_31];
      HEAP[$attrib] = $13;
      
      
      if (HEAP[$attrib] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 9:
      
      
      if (HEAP[$kw_addr] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $18 = HEAP[$attrib];
      var $19 = HEAP[$kw_addr];
      var $20 = _PyDict_Update($18, $19);
      __label__ = 11;
      break;
     case 11:
      __label__ = 13;
      break;
     case 12:
      
      var $22 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $22;
      HEAP[$attrib] = __Py_NoneStruct;
      __label__ = 13;
      break;
     case 13:
      var $23 = HEAP[$attrib];
      var $24 = HEAP[$tag];
      var $25 = _element_new($24, $23);
      HEAP[$elem] = $25;
      var $26 = HEAP[$attrib];
      
      
      var $29 = HEAP[$26] - 1;
      var $30 = $26;
      HEAP[$30] = $29;
      
      
      
      if (HEAP[$26] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[$attrib] + 4] + 24];
      var $39 = HEAP[$attrib];
      FUNCTION_TABLE[$38]($39);
      __label__ = 15;
      break;
     case 15:
      var $40 = HEAP[$parent];
      var $41 = HEAP[$elem];
      var $42 = _element_add_subelement($40, $41);
      
      if ($42 < 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      
      
      
      var $47 = HEAP[HEAP[$elem]] - 1;
      
      var $49 = HEAP[$elem];
      HEAP[$49] = $47;
      
      
      
      
      if (HEAP[HEAP[$elem]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $58 = HEAP[HEAP[HEAP[$elem] + 4] + 24];
      var $59 = HEAP[$elem];
      FUNCTION_TABLE[$58]($59);
      __label__ = 18;
      break;
     case 18:
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 19:
      var $60 = HEAP[$elem];
      HEAP[$0] = $60;
      __label__ = 20;
      break;
     case 20:
      var $61 = HEAP[$0];
      HEAP[$retval] = $61;
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
  function _element_dealloc($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[$self_addr];
      _element_dealloc_extra($4);
      __label__ = 2;
      break;
     case 2:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 8];
      
      
      var $10 = HEAP[$7] - 1;
      var $11 = $7;
      HEAP[$11] = $10;
      
      
      
      if (HEAP[$7] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $21 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 8] + 4] + 24];
      
      
      var $24 = HEAP[HEAP[$self_addr] + 8];
      FUNCTION_TABLE[$21]($24);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      var $29 = HEAP[HEAP[$self_addr] + 12] & -2;
      var $30 = $29;
      
      
      var $33 = HEAP[$30] - 1;
      var $34 = $30;
      HEAP[$34] = $33;
      
      
      
      if (HEAP[$30] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $42 = HEAP[HEAP[$self_addr] + 12] & -2;
      
      
      
      
      var $47 = HEAP[HEAP[$42 + 4] + 24];
      
      
      
      
      var $52 = HEAP[HEAP[$self_addr] + 12] & -2;
      var $53 = $52;
      FUNCTION_TABLE[$47]($53);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      var $58 = HEAP[HEAP[$self_addr] + 16] & -2;
      var $59 = $58;
      
      
      var $62 = HEAP[$59] - 1;
      var $63 = $59;
      HEAP[$63] = $62;
      
      
      
      if (HEAP[$59] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $71 = HEAP[HEAP[$self_addr] + 16] & -2;
      
      
      
      
      var $76 = HEAP[HEAP[$71 + 4] + 24];
      
      
      
      
      var $81 = HEAP[HEAP[$self_addr] + 16] & -2;
      var $82 = $81;
      FUNCTION_TABLE[$76]($82);
      __label__ = 8;
      break;
     case 8:
      
      var $84 = HEAP[$self_addr];
      _PyObject_Free($84);
      __label__ = 9;
      break;
     case 9:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element_append($self, $args) {
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
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $element = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str5, allocate([ _Element_Type, 0, 0, 0, $element, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$element];
      var $5 = HEAP[$self_addr];
      var $6 = _element_add_subelement($5, $4);
      
      if ($6 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      
      var $9 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $9;
      HEAP[$0] = __Py_NoneStruct;
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
  function _element_clear($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str6, allocate(1, "i32", ALLOC_STACK));
      
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[$self_addr];
      _element_dealloc_extra($8);
      
      var $10 = HEAP[$self_addr] + 20;
      HEAP[$10] = 0;
      __label__ = 4;
      break;
     case 4:
      
      var $12 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $12;
      
      
      
      
      var $17 = HEAP[HEAP[$self_addr] + 12] & -2;
      var $18 = $17;
      
      
      var $21 = HEAP[$18] - 1;
      var $22 = $18;
      HEAP[$22] = $21;
      
      
      
      if (HEAP[$18] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $30 = HEAP[HEAP[$self_addr] + 12] & -2;
      
      
      
      
      var $35 = HEAP[HEAP[$30 + 4] + 24];
      
      
      
      
      var $40 = HEAP[HEAP[$self_addr] + 12] & -2;
      var $41 = $40;
      FUNCTION_TABLE[$35]($41);
      __label__ = 6;
      break;
     case 6:
      
      var $43 = HEAP[$self_addr] + 12;
      HEAP[$43] = __Py_NoneStruct;
      
      var $45 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $45;
      
      
      
      
      var $50 = HEAP[HEAP[$self_addr] + 16] & -2;
      var $51 = $50;
      
      
      var $54 = HEAP[$51] - 1;
      var $55 = $51;
      HEAP[$55] = $54;
      
      
      
      if (HEAP[$51] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $63 = HEAP[HEAP[$self_addr] + 16] & -2;
      
      
      
      
      var $68 = HEAP[HEAP[$63 + 4] + 24];
      
      
      
      
      var $73 = HEAP[HEAP[$self_addr] + 16] & -2;
      var $74 = $73;
      FUNCTION_TABLE[$68]($74);
      __label__ = 8;
      break;
     case 8:
      
      var $76 = HEAP[$self_addr] + 16;
      HEAP[$76] = __Py_NoneStruct;
      
      var $78 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $78;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 9;
      break;
     case 9:
      var $79 = HEAP[$0];
      HEAP[$retval] = $79;
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
  function _element_copy($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_43 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $element = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str7, allocate(1, "i32", ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $12 = HEAP[HEAP[HEAP[$self_addr] + 20]];
      HEAP[$iftmp_43] = $12;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_43] = __Py_NoneStruct;
      __label__ = 5;
      break;
     case 5:
      
      
      var $15 = HEAP[HEAP[$self_addr] + 8];
      var $16 = HEAP[$iftmp_43];
      var $17 = _element_new($15, $16);
      var $18 = $17;
      HEAP[$element] = $18;
      
      
      if (HEAP[$element] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 7:
      
      
      
      
      var $25 = HEAP[HEAP[$element] + 12] & -2;
      var $26 = $25;
      
      
      var $29 = HEAP[$26] - 1;
      var $30 = $26;
      HEAP[$30] = $29;
      
      
      
      if (HEAP[$26] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $38 = HEAP[HEAP[$element] + 12] & -2;
      
      
      
      
      var $43 = HEAP[HEAP[$38 + 4] + 24];
      
      
      
      
      var $48 = HEAP[HEAP[$element] + 12] & -2;
      var $49 = $48;
      FUNCTION_TABLE[$43]($49);
      __label__ = 9;
      break;
     case 9:
      
      
      var $52 = HEAP[HEAP[$self_addr] + 12];
      
      var $54 = HEAP[$element] + 12;
      HEAP[$54] = $52;
      
      
      
      
      var $59 = HEAP[HEAP[$element] + 12] & -2;
      
      
      
      var $63 = HEAP[$59] + 1;
      var $64 = $59;
      HEAP[$64] = $63;
      
      
      
      
      var $69 = HEAP[HEAP[$element] + 16] & -2;
      var $70 = $69;
      
      
      var $73 = HEAP[$70] - 1;
      var $74 = $70;
      HEAP[$74] = $73;
      
      
      
      if (HEAP[$70] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $82 = HEAP[HEAP[$element] + 16] & -2;
      
      
      
      
      var $87 = HEAP[HEAP[$82 + 4] + 24];
      
      
      
      
      var $92 = HEAP[HEAP[$element] + 16] & -2;
      var $93 = $92;
      FUNCTION_TABLE[$87]($93);
      __label__ = 11;
      break;
     case 11:
      
      
      var $96 = HEAP[HEAP[$self_addr] + 16];
      
      var $98 = HEAP[$element] + 16;
      HEAP[$98] = $96;
      
      
      
      
      var $103 = HEAP[HEAP[$element] + 16] & -2;
      
      
      
      var $107 = HEAP[$103] + 1;
      var $108 = $103;
      HEAP[$108] = $107;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 12:
      
      
      
      
      var $117 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      var $118 = HEAP[$element];
      var $119 = _element_resize($118, $117);
      
      if ($119 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      
      var $122 = HEAP[$element];
      
      
      var $125 = HEAP[$122] - 1;
      var $126 = $122;
      HEAP[$126] = $125;
      
      
      
      if (HEAP[$122] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      var $135 = HEAP[HEAP[HEAP[$element] + 4] + 24];
      
      var $137 = HEAP[$element];
      FUNCTION_TABLE[$135]($137);
      __label__ = 15;
      break;
     case 15:
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 16:
      HEAP[$i] = 0;
      __label__ = 18;
      break;
     case 17:
      
      
      
      
      
      
      
      
      
      
      var $148 = HEAP[HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[$i]]] + 1;
      var $149 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[$i]];
      HEAP[$149] = $148;
      
      
      
      
      
      
      
      
      
      
      
      
      var $162 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[$i]];
      
      var $164 = HEAP[HEAP[HEAP[$element] + 20] + 12] + 4 * HEAP[$i];
      HEAP[$164] = $162;
      
      var $166 = HEAP[$i] + 1;
      HEAP[$i] = $166;
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] > HEAP[$i]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      
      
      
      var $181 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      var $182 = HEAP[HEAP[$element] + 20] + 4;
      HEAP[$182] = $181;
      __label__ = 20;
      break;
     case 20:
      
      var $184 = HEAP[$element];
      HEAP[$0] = $184;
      __label__ = 21;
      break;
     case 21:
      var $185 = HEAP[$0];
      HEAP[$retval] = $185;
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
  function _element_deepcopy($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $element = __stackBase__ + 20;
      var $tag = __stackBase__ + 24;
      var $attrib = __stackBase__ + 28;
      var $text = __stackBase__ + 32;
      var $tail = __stackBase__ + 36;
      var $id = __stackBase__ + 40;
      var $memo = __stackBase__ + 44;
      var $child = __stackBase__ + 48;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str8, allocate([ $memo, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 39;
      break;
     case 2:
      var $4 = HEAP[$memo];
      
      
      var $7 = HEAP[HEAP[$self_addr] + 8];
      var $8 = _deepcopy($7, $4);
      HEAP[$tag] = $8;
      
      
      if (HEAP[$tag] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 39;
      break;
     case 4:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 5:
      var $15 = HEAP[$memo];
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[$self_addr] + 20]];
      var $21 = _deepcopy($20, $15);
      HEAP[$attrib] = $21;
      
      
      if (HEAP[$attrib] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $27 = HEAP[HEAP[$tag]] - 1;
      
      var $29 = HEAP[$tag];
      HEAP[$29] = $27;
      
      
      
      
      if (HEAP[HEAP[$tag]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[$tag] + 4] + 24];
      var $39 = HEAP[$tag];
      FUNCTION_TABLE[$38]($39);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = 0;
      __label__ = 39;
      break;
     case 9:
      __label__ = 11;
      break;
     case 10:
      
      var $41 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $41;
      HEAP[$attrib] = __Py_NoneStruct;
      __label__ = 11;
      break;
     case 11:
      var $42 = HEAP[$tag];
      var $43 = HEAP[$attrib];
      var $44 = _element_new($42, $43);
      var $45 = $44;
      HEAP[$element] = $45;
      
      
      
      var $49 = HEAP[HEAP[$tag]] - 1;
      
      var $51 = HEAP[$tag];
      HEAP[$51] = $49;
      
      
      
      
      if (HEAP[HEAP[$tag]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[$tag] + 4] + 24];
      var $61 = HEAP[$tag];
      FUNCTION_TABLE[$60]($61);
      __label__ = 13;
      break;
     case 13:
      
      
      
      var $65 = HEAP[HEAP[$attrib]] - 1;
      
      var $67 = HEAP[$attrib];
      HEAP[$67] = $65;
      
      
      
      
      if (HEAP[HEAP[$attrib]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $76 = HEAP[HEAP[HEAP[$attrib] + 4] + 24];
      var $77 = HEAP[$attrib];
      FUNCTION_TABLE[$76]($77);
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$element] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      HEAP[$0] = 0;
      __label__ = 39;
      break;
     case 17:
      var $80 = HEAP[$memo];
      
      
      
      
      var $85 = HEAP[HEAP[$self_addr] + 12] & -2;
      var $86 = $85;
      var $87 = _deepcopy($86, $80);
      HEAP[$text] = $87;
      
      
      if (HEAP[$text] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      var $92 = HEAP[HEAP[$element] + 12];
      
      
      var $95 = HEAP[$92] - 1;
      var $96 = $92;
      HEAP[$96] = $95;
      
      
      
      if (HEAP[$92] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      
      var $106 = HEAP[HEAP[HEAP[HEAP[$element] + 12] + 4] + 24];
      
      
      var $109 = HEAP[HEAP[$element] + 12];
      FUNCTION_TABLE[$106]($109);
      __label__ = 20;
      break;
     case 20:
      
      
      var $112 = HEAP[$text] & -2;
      
      
      
      
      
      
      var $119 = $112 | HEAP[HEAP[$self_addr] + 12] & 1;
      
      var $121 = HEAP[$element] + 12;
      HEAP[$121] = $119;
      var $122 = HEAP[$memo];
      
      
      
      
      var $127 = HEAP[HEAP[$self_addr] + 16] & -2;
      var $128 = $127;
      var $129 = _deepcopy($128, $122);
      HEAP[$tail] = $129;
      
      
      if (HEAP[$tail] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      var $134 = HEAP[HEAP[$element] + 16];
      
      
      var $137 = HEAP[$134] - 1;
      var $138 = $134;
      HEAP[$138] = $137;
      
      
      
      if (HEAP[$134] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      
      
      var $148 = HEAP[HEAP[HEAP[HEAP[$element] + 16] + 4] + 24];
      
      
      var $151 = HEAP[HEAP[$element] + 16];
      FUNCTION_TABLE[$148]($151);
      __label__ = 23;
      break;
     case 23:
      
      
      var $154 = HEAP[$tail] & -2;
      
      
      
      
      
      
      var $161 = $154 | HEAP[HEAP[$self_addr] + 16] & 1;
      
      var $163 = HEAP[$element] + 16;
      HEAP[$163] = $161;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 24:
      
      
      
      
      var $172 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      var $173 = HEAP[$element];
      var $174 = _element_resize($173, $172);
      
      if ($174 < 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      HEAP[$i] = 0;
      __label__ = 29;
      break;
     case 26:
      var $176 = HEAP[$memo];
      
      
      
      
      
      
      
      var $184 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[$i]];
      var $185 = _deepcopy($184, $176);
      HEAP[$child] = $185;
      
      
      if (HEAP[$child] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      var $191 = HEAP[HEAP[$element] + 20] + 4;
      var $192 = HEAP[$i];
      HEAP[$191] = $192;
      __label__ = 36;
      break;
     case 28:
      
      
      
      
      
      
      var $199 = HEAP[HEAP[HEAP[$element] + 20] + 12] + 4 * HEAP[$i];
      var $200 = HEAP[$child];
      HEAP[$199] = $200;
      
      var $202 = HEAP[$i] + 1;
      HEAP[$i] = $202;
      __label__ = 29;
      break;
     case 29:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] > HEAP[$i]) {
        __label__ = 26;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      
      
      
      
      var $217 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      var $218 = HEAP[HEAP[$element] + 20] + 4;
      HEAP[$218] = $217;
      __label__ = 31;
      break;
     case 31:
      
      var $220 = HEAP[$self_addr];
      var $221 = _PyInt_FromLong($220);
      HEAP[$id] = $221;
      
      
      if (HEAP[$id] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      var $225 = HEAP[$element];
      var $226 = HEAP[$memo];
      var $227 = HEAP[$id];
      var $228 = _PyDict_SetItem($226, $227, $225);
      HEAP[$i] = $228;
      
      
      
      var $232 = HEAP[HEAP[$id]] - 1;
      
      var $234 = HEAP[$id];
      HEAP[$234] = $232;
      
      
      
      
      if (HEAP[HEAP[$id]] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $243 = HEAP[HEAP[HEAP[$id] + 4] + 24];
      var $244 = HEAP[$id];
      FUNCTION_TABLE[$243]($244);
      __label__ = 34;
      break;
     case 34:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      var $248 = HEAP[$element];
      HEAP[$0] = $248;
      __label__ = 39;
      break;
     case 36:
      
      var $250 = HEAP[$element];
      
      
      var $253 = HEAP[$250] - 1;
      var $254 = $250;
      HEAP[$254] = $253;
      
      
      
      if (HEAP[$250] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      
      var $263 = HEAP[HEAP[HEAP[$element] + 4] + 24];
      
      var $265 = HEAP[$element];
      FUNCTION_TABLE[$263]($265);
      __label__ = 38;
      break;
     case 38:
      HEAP[$0] = 0;
      __label__ = 39;
      break;
     case 39:
      var $266 = HEAP[$0];
      HEAP[$retval] = $266;
      __label__ = 40;
      break;
     case 40:
      var $retval38 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval38;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _checkpath($tag) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tag_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $i = __stackBase__ + 12;
      var $check = __stackBase__ + 16;
      var $p = __stackBase__ + 20;
      var $p17 = __stackBase__ + 24;
      
      HEAP[$tag_addr] = $tag;
      HEAP[$check] = 1;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$tag_addr] + 4] + 84] & 268435456) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 1:
      
      
      
      var $11 = HEAP[HEAP[$tag_addr] + 12];
      HEAP[$p] = $11;
      HEAP[$i] = 0;
      __label__ = 14;
      break;
     case 2:
      
      
      
      
      
      if (HEAP[HEAP[$p] + 2 * HEAP[$i]] == 123) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$check] = 0;
      __label__ = 13;
      break;
     case 4:
      
      
      
      
      
      if (HEAP[HEAP[$p] + 2 * HEAP[$i]] == 125) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$check] = 1;
      __label__ = 13;
      break;
     case 6:
      
      
      if (HEAP[$check] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 7:
      
      
      
      
      
      if (HEAP[HEAP[$p] + 2 * HEAP[$i]] == 47) {
        __label__ = 12;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[HEAP[$p] + 2 * HEAP[$i]] == 42) {
        __label__ = 12;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      if (HEAP[HEAP[$p] + 2 * HEAP[$i]] == 91) {
        __label__ = 12;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      if (HEAP[HEAP[$p] + 2 * HEAP[$i]] == 64) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      if (HEAP[HEAP[$p] + 2 * HEAP[$i]] == 46) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$0] = 1;
      __label__ = 33;
      break;
     case 13:
      
      var $50 = HEAP[$i] + 1;
      HEAP[$i] = $50;
      __label__ = 14;
      break;
     case 14:
      
      
      
      
      
      
      if (HEAP[HEAP[$tag_addr] + 8] > HEAP[$i]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      HEAP[$0] = 0;
      __label__ = 33;
      break;
     case 16:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$tag_addr] + 4] + 84] & 134217728) != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 17:
      
      
      
      var $67 = HEAP[$tag_addr] + 20;
      HEAP[$p17] = $67;
      HEAP[$i] = 0;
      __label__ = 30;
      break;
     case 18:
      
      
      
      
      
      if (HEAP[HEAP[$p17] + HEAP[$i]] == 123) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$check] = 0;
      __label__ = 29;
      break;
     case 20:
      
      
      
      
      
      if (HEAP[HEAP[$p17] + HEAP[$i]] == 125) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      HEAP[$check] = 1;
      __label__ = 29;
      break;
     case 22:
      
      
      if (HEAP[$check] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 23:
      
      
      
      
      
      if (HEAP[HEAP[$p17] + HEAP[$i]] == 47) {
        __label__ = 28;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      
      if (HEAP[HEAP[$p17] + HEAP[$i]] == 42) {
        __label__ = 28;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      if (HEAP[HEAP[$p17] + HEAP[$i]] == 91) {
        __label__ = 28;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      
      if (HEAP[HEAP[$p17] + HEAP[$i]] == 64) {
        __label__ = 28;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      
      if (HEAP[HEAP[$p17] + HEAP[$i]] == 46) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      HEAP[$0] = 1;
      __label__ = 33;
      break;
     case 29:
      
      var $106 = HEAP[$i] + 1;
      HEAP[$i] = $106;
      __label__ = 30;
      break;
     case 30:
      
      
      
      
      
      
      if (HEAP[HEAP[$tag_addr] + 8] > HEAP[$i]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      HEAP[$0] = 0;
      __label__ = 33;
      break;
     case 32:
      HEAP[$0] = 1;
      __label__ = 33;
      break;
     case 33:
      var $113 = HEAP[$0];
      HEAP[$retval] = $113;
      __label__ = 34;
      break;
     case 34:
      var $retval34 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval34;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element_extend($self, $args) {
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
      var $iftmp_69 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $seq = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      var $seqlen = __stackBase__ + 28;
      var $seq_in = __stackBase__ + 32;
      var $element = __stackBase__ + 36;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$seqlen] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str9, allocate([ $seq_in, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$seq_in];
      var $5 = _PySequence_Fast($4, __str1);
      HEAP[$seq] = $5;
      
      
      if (HEAP[$seq] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $12 = HEAP[HEAP[HEAP[$seq_in] + 4] + 12];
      var $13 = HEAP[_PyExc_TypeError];
      var $14 = _PyErr_Format($13, __str10, allocate([ $12, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 4:
      var $15 = HEAP[$seq];
      var $16 = _PySequence_Size($15);
      HEAP[$seqlen] = $16;
      HEAP[$i] = 0;
      __label__ = 13;
      break;
     case 5:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$seq] + 4] + 84] & 33554432) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[$seq] + 12] + 4 * HEAP[$i]];
      HEAP[$iftmp_69] = $30;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      
      var $36 = HEAP[HEAP[$seq] + 12 + HEAP[$i] * 4];
      HEAP[$iftmp_69] = $36;
      __label__ = 8;
      break;
     case 8:
      var $37 = HEAP[$iftmp_69];
      HEAP[$element] = $37;
      var $38 = HEAP[$self_addr];
      var $39 = HEAP[$element];
      var $40 = _element_add_subelement($38, $39);
      
      if ($40 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      var $45 = HEAP[HEAP[$seq]] - 1;
      
      var $47 = HEAP[$seq];
      HEAP[$47] = $45;
      
      
      
      
      if (HEAP[HEAP[$seq]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $56 = HEAP[HEAP[HEAP[$seq] + 4] + 24];
      var $57 = HEAP[$seq];
      FUNCTION_TABLE[$56]($57);
      __label__ = 11;
      break;
     case 11:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 12:
      
      var $59 = HEAP[$i] + 1;
      HEAP[$i] = $59;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (HEAP[$i] < HEAP[$seqlen]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      var $66 = HEAP[HEAP[$seq]] - 1;
      
      var $68 = HEAP[$seq];
      HEAP[$68] = $66;
      
      
      
      
      if (HEAP[HEAP[$seq]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $77 = HEAP[HEAP[HEAP[$seq] + 4] + 24];
      var $78 = HEAP[$seq];
      FUNCTION_TABLE[$77]($78);
      __label__ = 16;
      break;
     case 16:
      
      var $80 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $80;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 17;
      break;
     case 17:
      var $81 = HEAP[$0];
      HEAP[$retval] = $81;
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
  function _element_find($self, $args) {
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
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $tag = __stackBase__ + 20;
      var $namespaces = __stackBase__ + 24;
      var $item = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$namespaces] = __Py_NoneStruct;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str11, allocate([ $tag, 0, 0, 0, $namespaces, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$tag];
      var $5 = _checkpath($4);
      
      if ($5 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$namespaces] != __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $9 = HEAP[$namespaces];
      var $10 = HEAP[$tag];
      var $11 = HEAP[_elementpath_obj];
      var $12 = HEAP[$self_addr];
      var $13 = _PyObject_CallMethod($11, __str12, __str13, allocate([ $12, 0, 0, 0, $10, 0, 0, 0, $9, 0, 0, 0 ], [ "%struct.ElementObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $13;
      __label__ = 14;
      break;
     case 5:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $19 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $19;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 14;
      break;
     case 7:
      HEAP[$i] = 0;
      __label__ = 12;
      break;
     case 8:
      
      
      
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[$i]];
      HEAP[$item] = $27;
      
      
      
      
      if (HEAP[HEAP[$item] + 4] == _Element_Type) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      var $32 = HEAP[$tag];
      
      
      
      var $36 = HEAP[HEAP[$item] + 8];
      var $37 = _PyObject_Compare($36, $32);
      
      if ($37 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      var $42 = HEAP[HEAP[$item]] + 1;
      
      var $44 = HEAP[$item];
      HEAP[$44] = $42;
      var $45 = HEAP[$item];
      HEAP[$0] = $45;
      __label__ = 14;
      break;
     case 11:
      
      var $47 = HEAP[$i] + 1;
      HEAP[$i] = $47;
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] > HEAP[$i]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      var $56 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $56;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 14;
      break;
     case 14:
      var $57 = HEAP[$0];
      HEAP[$retval] = $57;
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
  function _element_findtext($self, $args) {
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
      var $i = __stackBase__ + 16;
      var $tag = __stackBase__ + 20;
      var $default_value = __stackBase__ + 24;
      var $namespaces = __stackBase__ + 28;
      var $item = __stackBase__ + 32;
      var $text = __stackBase__ + 36;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$default_value] = __Py_NoneStruct;
      HEAP[$namespaces] = __Py_NoneStruct;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str14, allocate([ $tag, 0, 0, 0, $default_value, 0, 0, 0, $namespaces, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$tag];
      var $5 = _checkpath($4);
      
      if ($5 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$namespaces] != __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $9 = HEAP[$namespaces];
      var $10 = HEAP[$default_value];
      var $11 = HEAP[$tag];
      var $12 = HEAP[_elementpath_obj];
      var $13 = HEAP[$self_addr];
      var $14 = _PyObject_CallMethod($12, __str15, __str16, allocate([ $13, 0, 0, 0, $11, 0, 0, 0, $10, 0, 0, 0, $9, 0, 0, 0 ], [ "%struct.ElementObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $14;
      __label__ = 18;
      break;
     case 5:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $22 = HEAP[HEAP[$default_value]] + 1;
      var $23 = HEAP[$default_value];
      HEAP[$23] = $22;
      var $24 = HEAP[$default_value];
      HEAP[$0] = $24;
      __label__ = 18;
      break;
     case 7:
      HEAP[$i] = 0;
      __label__ = 16;
      break;
     case 8:
      
      
      
      
      
      
      
      
      var $33 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[$i]];
      HEAP[$item] = $33;
      
      
      
      
      
      if (HEAP[HEAP[$item] + 4] == _Element_Type) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 9:
      var $39 = HEAP[$tag];
      
      
      var $42 = HEAP[HEAP[$item] + 8];
      var $43 = _PyObject_Compare($42, $39);
      
      if ($43 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 10:
      var $45 = HEAP[$item];
      var $46 = _element_get_text($45);
      HEAP[$text] = $46;
      
      
      if (HEAP[$text] == __Py_NoneStruct) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $49 = _PyString_FromString(__str1);
      HEAP[$0] = $49;
      __label__ = 18;
      break;
     case 12:
      
      
      if (HEAP[$text] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      var $55 = HEAP[HEAP[$text]] + 1;
      
      var $57 = HEAP[$text];
      HEAP[$57] = $55;
      __label__ = 14;
      break;
     case 14:
      var $58 = HEAP[$text];
      HEAP[$0] = $58;
      __label__ = 18;
      break;
     case 15:
      
      var $60 = HEAP[$i] + 1;
      HEAP[$i] = $60;
      __label__ = 16;
      break;
     case 16:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] > HEAP[$i]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      var $71 = HEAP[HEAP[$default_value]] + 1;
      var $72 = HEAP[$default_value];
      HEAP[$72] = $71;
      var $73 = HEAP[$default_value];
      HEAP[$0] = $73;
      __label__ = 18;
      break;
     case 18:
      var $74 = HEAP[$0];
      HEAP[$retval] = $74;
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
  function _element_findall($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $out = __stackBase__ + 20;
      var $tag = __stackBase__ + 24;
      var $namespaces = __stackBase__ + 28;
      var $item = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$namespaces] = __Py_NoneStruct;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str17, allocate([ $tag, 0, 0, 0, $namespaces, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$tag];
      var $5 = _checkpath($4);
      
      if ($5 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$namespaces] != __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $9 = HEAP[$namespaces];
      var $10 = HEAP[$tag];
      var $11 = HEAP[_elementpath_obj];
      var $12 = HEAP[$self_addr];
      var $13 = _PyObject_CallMethod($11, __str18, __str13, allocate([ $12, 0, 0, 0, $10, 0, 0, 0, $9, 0, 0, 0 ], [ "%struct.ElementObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $13;
      __label__ = 19;
      break;
     case 5:
      var $14 = _PyList_New(0);
      HEAP[$out] = $14;
      
      
      if (HEAP[$out] == 0) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $21 = HEAP[$out];
      HEAP[$0] = $21;
      __label__ = 19;
      break;
     case 9:
      HEAP[$i] = 0;
      __label__ = 17;
      break;
     case 10:
      
      
      
      
      
      
      
      var $29 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[$i]];
      HEAP[$item] = $29;
      
      
      
      
      if (HEAP[HEAP[$item] + 4] == _Element_Type) {
        __label__ = 11;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 11:
      var $34 = HEAP[$tag];
      
      
      
      var $38 = HEAP[HEAP[$item] + 8];
      var $39 = _PyObject_Compare($38, $34);
      
      if ($39 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 12:
      var $41 = HEAP[$out];
      var $42 = HEAP[$item];
      var $43 = _PyList_Append($41, $42);
      
      if ($43 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      
      
      
      var $48 = HEAP[HEAP[$out]] - 1;
      
      var $50 = HEAP[$out];
      HEAP[$50] = $48;
      
      
      
      
      if (HEAP[HEAP[$out]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $59 = HEAP[HEAP[HEAP[$out] + 4] + 24];
      var $60 = HEAP[$out];
      FUNCTION_TABLE[$59]($60);
      __label__ = 15;
      break;
     case 15:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 16:
      
      var $62 = HEAP[$i] + 1;
      HEAP[$i] = $62;
      __label__ = 17;
      break;
     case 17:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] > HEAP[$i]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      var $70 = HEAP[$out];
      HEAP[$0] = $70;
      __label__ = 19;
      break;
     case 19:
      var $71 = HEAP[$0];
      HEAP[$retval] = $71;
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
  function _element_iterfind($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $tag = __stackBase__ + 16;
      var $namespaces = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$namespaces] = __Py_NoneStruct;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str19, allocate([ $tag, 0, 0, 0, $namespaces, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$namespaces];
      var $5 = HEAP[$tag];
      var $6 = HEAP[_elementpath_obj];
      var $7 = HEAP[$self_addr];
      var $8 = _PyObject_CallMethod($6, __str20, __str13, allocate([ $7, 0, 0, 0, $5, 0, 0, 0, $4, 0, 0, 0 ], [ "%struct.ElementObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
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
  function _element_get($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $value = __stackBase__ + 16;
      var $key = __stackBase__ + 20;
      var $default_value = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$default_value] = __Py_NoneStruct;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str21, allocate([ $key, 0, 0, 0, $default_value, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20]] == __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $14 = HEAP[$default_value];
      HEAP[$value] = $14;
      __label__ = 7;
      break;
     case 5:
      var $15 = HEAP[$key];
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[$self_addr] + 20]];
      var $21 = _PyDict_GetItem($20, $15);
      HEAP[$value] = $21;
      
      
      if (HEAP[$value] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $24 = HEAP[$default_value];
      HEAP[$value] = $24;
      __label__ = 7;
      break;
     case 7:
      
      
      
      var $28 = HEAP[HEAP[$value]] + 1;
      
      var $30 = HEAP[$value];
      HEAP[$30] = $28;
      var $31 = HEAP[$value];
      HEAP[$0] = $31;
      __label__ = 8;
      break;
     case 8:
      var $32 = HEAP[$0];
      HEAP[$retval] = $32;
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
  function _element_getchildren($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $list = __stackBase__ + 20;
      var $item = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str22, allocate(1, "i32", ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = _PyList_New(0);
      HEAP[$0] = $8;
      __label__ = 10;
      break;
     case 4:
      
      
      
      
      var $13 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      var $14 = _PyList_New($13);
      HEAP[$list] = $14;
      
      
      if (HEAP[$list] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 6:
      HEAP[$i] = 0;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[$i]];
      HEAP[$item] = $24;
      
      
      
      var $28 = HEAP[HEAP[$item]] + 1;
      
      var $30 = HEAP[$item];
      HEAP[$30] = $28;
      
      
      
      
      
      var $36 = HEAP[HEAP[$list] + 12] + 4 * HEAP[$i];
      var $37 = HEAP[$item];
      HEAP[$36] = $37;
      
      var $39 = HEAP[$i] + 1;
      HEAP[$i] = $39;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] > HEAP[$i]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $47 = HEAP[$list];
      HEAP[$0] = $47;
      __label__ = 10;
      break;
     case 10:
      var $48 = HEAP[$0];
      HEAP[$retval] = $48;
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
  function _element_iter($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      var $tag = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$tag] = __Py_NoneStruct;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str23, allocate([ $tag, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[_elementtree_iter_obj] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($6, __str24);
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 4:
      var $7 = _PyTuple_New(2);
      HEAP[$args_addr] = $7;
      
      
      if (HEAP[$args_addr] == 0) {
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
      
      
      
      
      var $14 = HEAP[HEAP[$self_addr]] + 1;
      var $15 = HEAP[$self_addr];
      HEAP[$15] = $14;
      
      
      
      var $19 = HEAP[$self_addr];
      
      var $21 = HEAP[$args_addr] + 12;
      HEAP[$21] = $19;
      
      
      
      var $25 = HEAP[HEAP[$tag]] + 1;
      var $26 = HEAP[$tag];
      HEAP[$26] = $25;
      
      
      var $29 = HEAP[$tag];
      
      var $31 = HEAP[$args_addr] + 12 + 4;
      HEAP[$31] = $29;
      var $32 = HEAP[_elementtree_iter_obj];
      var $33 = HEAP[$args_addr];
      var $34 = _PyObject_CallObject($32, $33);
      HEAP[$result] = $34;
      
      
      
      var $38 = HEAP[HEAP[$args_addr]] - 1;
      
      var $40 = HEAP[$args_addr];
      HEAP[$40] = $38;
      
      
      
      
      if (HEAP[HEAP[$args_addr]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[$args_addr] + 4] + 24];
      var $50 = HEAP[$args_addr];
      FUNCTION_TABLE[$49]($50);
      __label__ = 8;
      break;
     case 8:
      var $51 = HEAP[$result];
      HEAP[$0] = $51;
      __label__ = 9;
      break;
     case 9:
      var $52 = HEAP[$0];
      HEAP[$retval] = $52;
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
  function _element_itertext($self, $args) {
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
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str25, allocate(1, "i32", ALLOC_STACK));
      
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
      
      
      if (HEAP[_elementtree_itertext_obj] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($6, __str26);
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 4:
      var $7 = _PyTuple_New(1);
      HEAP[$args_addr] = $7;
      
      
      if (HEAP[$args_addr] == 0) {
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
      
      
      
      
      var $14 = HEAP[HEAP[$self_addr]] + 1;
      var $15 = HEAP[$self_addr];
      HEAP[$15] = $14;
      
      
      
      var $19 = HEAP[$self_addr];
      
      var $21 = HEAP[$args_addr] + 12;
      HEAP[$21] = $19;
      var $22 = HEAP[_elementtree_itertext_obj];
      var $23 = HEAP[$args_addr];
      var $24 = _PyObject_CallObject($22, $23);
      HEAP[$result] = $24;
      
      
      
      var $28 = HEAP[HEAP[$args_addr]] - 1;
      
      var $30 = HEAP[$args_addr];
      HEAP[$30] = $28;
      
      
      
      
      if (HEAP[HEAP[$args_addr]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $39 = HEAP[HEAP[HEAP[$args_addr] + 4] + 24];
      var $40 = HEAP[$args_addr];
      FUNCTION_TABLE[$39]($40);
      __label__ = 8;
      break;
     case 8:
      var $41 = HEAP[$result];
      HEAP[$0] = $41;
      __label__ = 9;
      break;
     case 9:
      var $42 = HEAP[$0];
      HEAP[$retval] = $42;
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
  function _element_getitem($self_, $index) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self__addr = __stackBase__;
      var $index_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $self = __stackBase__ + 16;
      
      HEAP[$self__addr] = $self_;
      HEAP[$index_addr] = $index;
      
      var $2 = HEAP[$self__addr];
      HEAP[$self] = $2;
      
      
      
      
      if (HEAP[HEAP[$self] + 20] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$index_addr] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self] + 20] + 4] <= HEAP[$index_addr]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $16 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($16, __str27);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      
      
      
      
      
      
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[HEAP[HEAP[$self] + 20] + 12] + 4 * HEAP[$index_addr]]] + 1;
      var $28 = HEAP[HEAP[HEAP[HEAP[$self] + 20] + 12] + 4 * HEAP[$index_addr]];
      HEAP[$28] = $27;
      
      
      
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[HEAP[$self] + 20] + 12] + 4 * HEAP[$index_addr]];
      HEAP[$0] = $36;
      __label__ = 5;
      break;
     case 5:
      var $37 = HEAP[$0];
      HEAP[$retval] = $37;
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
  function _element_insert($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $index = __stackBase__ + 20;
      var $element = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str28, allocate([ $index, 0, 0, 0, _Element_Type, 0, 0, 0, $element, 0, 0, 0 ], [ "i32*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[$self_addr];
      var $9 = _element_new_extra($8, 0);
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[$index] < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $18 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4] + HEAP[$index];
      HEAP[$index] = $18;
      
      
      if (HEAP[$index] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$index] = 0;
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] < HEAP[$index]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $32 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      HEAP[$index] = $32;
      __label__ = 9;
      break;
     case 9:
      var $33 = HEAP[$self_addr];
      var $34 = _element_resize($33, 1);
      
      if ($34 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 11:
      
      
      
      
      var $40 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
      HEAP[$i] = $40;
      __label__ = 13;
      break;
     case 12:
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * (HEAP[$i] - 1)];
      
      var $56 = HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[$i];
      HEAP[$56] = $54;
      
      var $58 = HEAP[$i] - 1;
      HEAP[$i] = $58;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (HEAP[$i] > HEAP[$index]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      var $65 = HEAP[HEAP[$element]] + 1;
      var $66 = HEAP[$element];
      HEAP[$66] = $65;
      
      
      
      
      
      
      var $73 = HEAP[$element];
      var $74 = HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[$index];
      HEAP[$74] = $73;
      
      
      
      
      
      var $80 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4] + 1;
      var $81 = HEAP[HEAP[$self_addr] + 20] + 4;
      HEAP[$81] = $80;
      
      var $83 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $83;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 15;
      break;
     case 15:
      var $84 = HEAP[$0];
      HEAP[$retval] = $84;
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
  function _element_items($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str29, allocate(1, "i32", ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20]] == __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $14 = _PyList_New(0);
      HEAP[$0] = $14;
      __label__ = 6;
      break;
     case 5:
      
      
      
      
      var $19 = HEAP[HEAP[HEAP[$self_addr] + 20]];
      var $20 = _PyDict_Items($19);
      HEAP[$0] = $20;
      __label__ = 6;
      break;
     case 6:
      var $21 = HEAP[$0];
      HEAP[$retval] = $21;
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
  function _element_keys($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str30, allocate(1, "i32", ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20]] == __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $14 = _PyList_New(0);
      HEAP[$0] = $14;
      __label__ = 6;
      break;
     case 5:
      
      
      
      
      var $19 = HEAP[HEAP[HEAP[$self_addr] + 20]];
      var $20 = _PyDict_Keys($19);
      HEAP[$0] = $20;
      __label__ = 6;
      break;
     case 6:
      var $21 = HEAP[$0];
      HEAP[$retval] = $21;
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
  function _element_length($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
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
      
      
      
      
      var $9 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4];
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
  function _element_makeelement($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $elem = __stackBase__ + 20;
      var $tag = __stackBase__ + 24;
      var $attrib = __stackBase__ + 28;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str31, allocate([ $tag, 0, 0, 0, $attrib, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$attrib];
      var $5 = _PyDict_Copy($4);
      HEAP[$attrib] = $5;
      
      
      if (HEAP[$attrib] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 4:
      var $8 = HEAP[$attrib];
      var $9 = HEAP[$tag];
      var $10 = _element_new($9, $8);
      HEAP[$elem] = $10;
      var $11 = HEAP[$attrib];
      
      
      var $14 = HEAP[$11] - 1;
      var $15 = $11;
      HEAP[$15] = $14;
      
      
      
      if (HEAP[$11] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$attrib] + 4] + 24];
      var $24 = HEAP[$attrib];
      FUNCTION_TABLE[$23]($24);
      __label__ = 6;
      break;
     case 6:
      var $25 = HEAP[$elem];
      HEAP[$0] = $25;
      __label__ = 7;
      break;
     case 7:
      var $26 = HEAP[$0];
      HEAP[$retval] = $26;
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
  function _element_reduce($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str32, allocate(1, "i32", ALLOC_STACK));
      
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
      
      
      if (HEAP[_elementtree_copyelement_obj] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($6, __str33);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      var $7 = HEAP[$self_addr];
      var $8 = HEAP[$args_addr];
      var $9 = _element_copy($7, $8);
      var $10 = HEAP[_elementtree_copyelement_obj];
      var $11 = _Py_BuildValue(__str34, allocate([ $10, 0, 0, 0, $9, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
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
  function _element_remove($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $element = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str35, allocate([ _Element_Type, 0, 0, 0, $element, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
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
      __label__ = 17;
      break;
     case 4:
      HEAP[$i] = 0;
      __label__ = 8;
      break;
     case 5:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[$i]] == HEAP[$element]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $19 = HEAP[$element];
      
      
      
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[$i]];
      var $28 = _PyObject_Compare($27, $19);
      
      if ($28 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      var $31 = HEAP[$i] + 1;
      HEAP[$i] = $31;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] > HEAP[$i]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] == HEAP[$i]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $46 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($46, __str36);
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 11:
      
      
      
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[$i]];
      
      
      var $57 = HEAP[$54] - 1;
      var $58 = $54;
      HEAP[$58] = $57;
      
      
      
      if (HEAP[$54] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[$i]] + 4] + 24];
      
      
      
      
      
      
      
      var $81 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[$i]];
      FUNCTION_TABLE[$73]($81);
      __label__ = 13;
      break;
     case 13:
      
      
      
      
      
      var $87 = HEAP[HEAP[HEAP[$self_addr] + 20] + 4] - 1;
      var $88 = HEAP[HEAP[$self_addr] + 20] + 4;
      HEAP[$88] = $87;
      __label__ = 15;
      break;
     case 14:
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $102 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * (HEAP[$i] + 1)];
      
      var $104 = HEAP[HEAP[HEAP[$self_addr] + 20] + 12] + 4 * HEAP[$i];
      HEAP[$104] = $102;
      
      var $106 = HEAP[$i] + 1;
      HEAP[$i] = $106;
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] > HEAP[$i]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      var $115 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $115;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 17;
      break;
     case 17:
      var $116 = HEAP[$0];
      HEAP[$retval] = $116;
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
  function _element_repr($self) {
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
      var $repr = __stackBase__ + 12;
      var $tag = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 8];
      var $4 = _PyObject_Repr($3);
      HEAP[$tag] = $4;
      
      
      if (HEAP[$tag] == 0) {
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
      
      
      
      var $10 = HEAP[$tag] + 20;
      var $11 = HEAP[$self_addr];
      var $12 = _PyString_FromFormat(__str37, allocate([ $10, 0, 0, 0, $11, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.ElementObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$repr] = $12;
      
      
      
      var $16 = HEAP[HEAP[$tag]] - 1;
      
      var $18 = HEAP[$tag];
      HEAP[$18] = $16;
      
      
      
      
      if (HEAP[HEAP[$tag]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[$tag] + 4] + 24];
      var $28 = HEAP[$tag];
      FUNCTION_TABLE[$27]($28);
      __label__ = 4;
      break;
     case 4:
      var $29 = HEAP[$repr];
      HEAP[$0] = $29;
      __label__ = 5;
      break;
     case 5:
      var $30 = HEAP[$0];
      HEAP[$retval] = $30;
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
  function _element_set($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $attrib = __stackBase__ + 16;
      var $key = __stackBase__ + 20;
      var $value = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str38, allocate([ $key, 0, 0, 0, $value, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[$self_addr];
      var $9 = _element_new_extra($8, 0);
      __label__ = 4;
      break;
     case 4:
      var $10 = HEAP[$self_addr];
      var $11 = _element_get_attrib($10);
      HEAP[$attrib] = $11;
      
      
      if (HEAP[$attrib] == 0) {
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
      var $14 = HEAP[$value];
      var $15 = HEAP[$key];
      var $16 = HEAP[$attrib];
      var $17 = _PyDict_SetItem($16, $15, $14);
      
      if ($17 < 0) {
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
      
      var $20 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $20;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 9;
      break;
     case 9:
      var $21 = HEAP[$0];
      HEAP[$retval] = $21;
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
  function _element_setitem($self_, $index, $item) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self__addr = __stackBase__;
      var $index_addr = __stackBase__ + 4;
      var $item_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $self = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      var $old = __stackBase__ + 28;
      
      HEAP[$self__addr] = $self_;
      HEAP[$index_addr] = $index;
      HEAP[$item_addr] = $item;
      
      var $2 = HEAP[$self__addr];
      HEAP[$self] = $2;
      
      
      
      
      if (HEAP[HEAP[$self] + 20] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$index_addr] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self] + 20] + 4] <= HEAP[$index_addr]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $16 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($16, __str39);
      HEAP[$0] = -1;
      __label__ = 12;
      break;
     case 4:
      
      
      
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[HEAP[$self] + 20] + 12] + 4 * HEAP[$index_addr]];
      HEAP[$old] = $24;
      
      
      if (HEAP[$item_addr] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      var $30 = HEAP[HEAP[$item_addr]] + 1;
      
      var $32 = HEAP[$item_addr];
      HEAP[$32] = $30;
      
      
      
      
      
      
      var $39 = HEAP[HEAP[HEAP[$self] + 20] + 12] + 4 * HEAP[$index_addr];
      var $40 = HEAP[$item_addr];
      HEAP[$39] = $40;
      __label__ = 9;
      break;
     case 6:
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$self] + 20] + 4] - 1;
      var $47 = HEAP[HEAP[$self] + 20] + 4;
      HEAP[$47] = $46;
      var $48 = HEAP[$index_addr];
      HEAP[$i] = $48;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $62 = HEAP[HEAP[HEAP[HEAP[$self] + 20] + 12] + 4 * (HEAP[$i] + 1)];
      
      var $64 = HEAP[HEAP[HEAP[$self] + 20] + 12] + 4 * HEAP[$i];
      HEAP[$64] = $62;
      
      var $66 = HEAP[$i] + 1;
      HEAP[$i] = $66;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self] + 20] + 4] > HEAP[$i]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      var $77 = HEAP[HEAP[$old]] - 1;
      
      var $79 = HEAP[$old];
      HEAP[$79] = $77;
      
      
      
      
      if (HEAP[HEAP[$old]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $88 = HEAP[HEAP[HEAP[$old] + 4] + 24];
      var $89 = HEAP[$old];
      FUNCTION_TABLE[$88]($89);
      __label__ = 11;
      break;
     case 11:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 12:
      var $90 = HEAP[$0];
      HEAP[$retval] = $90;
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
  function _element_subscr($self_, $item) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self__addr = __stackBase__;
      var $item_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $self = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $start = __stackBase__ + 24;
      var $stop = __stackBase__ + 28;
      var $step = __stackBase__ + 32;
      var $slicelen = __stackBase__ + 36;
      var $cur = __stackBase__ + 40;
      var $i11 = __stackBase__ + 44;
      var $list = __stackBase__ + 48;
      var $item21 = __stackBase__ + 52;
      
      HEAP[$self__addr] = $self_;
      HEAP[$item_addr] = $item;
      
      var $2 = HEAP[$self__addr];
      HEAP[$self] = $2;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$item_addr] + 4] + 48] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$item_addr] + 4] + 84] & 131072) == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[HEAP[$item_addr] + 4] + 48] + 152] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $24 = HEAP[_PyExc_IndexError];
      var $25 = HEAP[$item_addr];
      var $26 = _PyNumber_AsSsize_t($25, $24);
      HEAP[$i] = $26;
      
      var $28 = HEAP[$i] == -1;
      if ($28) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $29 = _PyErr_Occurred();
      
      if ($29 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 6:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[HEAP[$self] + 20] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $43 = HEAP[HEAP[HEAP[$self] + 20] + 4] + HEAP[$i];
      HEAP[$i] = $43;
      __label__ = 9;
      break;
     case 9:
      var $44 = HEAP[$self__addr];
      var $45 = HEAP[$i];
      var $46 = _element_getitem($44, $45);
      HEAP[$0] = $46;
      __label__ = 24;
      break;
     case 10:
      
      
      
      
      if (HEAP[HEAP[$item_addr] + 4] == _PySlice_Type) {
        __label__ = 11;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 11:
      
      
      
      
      if (HEAP[HEAP[$self] + 20] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $55 = _PyList_New(0);
      HEAP[$0] = $55;
      __label__ = 24;
      break;
     case 13:
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[$self] + 20] + 4];
      
      var $62 = HEAP[$item_addr];
      var $63 = _PySlice_GetIndicesEx($62, $60, $start, $stop, $step, $slicelen);
      
      if ($63 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 15:
      
      
      if (HEAP[$slicelen] <= 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $67 = _PyList_New(0);
      HEAP[$0] = $67;
      __label__ = 24;
      break;
     case 17:
      var $68 = HEAP[$slicelen];
      var $69 = _PyList_New($68);
      HEAP[$list] = $69;
      
      
      if (HEAP[$list] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 19:
      var $72 = HEAP[$start];
      HEAP[$cur] = $72;
      HEAP[$i11] = 0;
      __label__ = 21;
      break;
     case 20:
      
      
      
      
      
      
      
      var $80 = HEAP[HEAP[HEAP[HEAP[$self] + 20] + 12] + 4 * HEAP[$cur]];
      HEAP[$item21] = $80;
      
      
      
      var $84 = HEAP[HEAP[$item21]] + 1;
      
      var $86 = HEAP[$item21];
      HEAP[$86] = $84;
      
      
      
      
      
      var $92 = HEAP[HEAP[$list] + 12] + 4 * HEAP[$i11];
      var $93 = HEAP[$item21];
      HEAP[$92] = $93;
      
      
      var $96 = HEAP[$cur] + HEAP[$step];
      HEAP[$cur] = $96;
      
      var $98 = HEAP[$i11] + 1;
      HEAP[$i11] = $98;
      __label__ = 21;
      break;
     case 21:
      
      
      
      if (HEAP[$i11] < HEAP[$slicelen]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      var $102 = HEAP[$list];
      HEAP[$0] = $102;
      __label__ = 24;
      break;
     case 23:
      var $103 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($103, __str40);
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 24:
      var $104 = HEAP[$0];
      HEAP[$retval] = $104;
      __label__ = 25;
      break;
     case 25:
      var $retval26 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval26;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element_ass_subscr($self_, $item, $value) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 72;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self__addr = __stackBase__;
      var $item_addr = __stackBase__ + 4;
      var $value_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $iftmp_171 = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $self = __stackBase__ + 24;
      var $i = __stackBase__ + 28;
      var $start = __stackBase__ + 32;
      var $stop = __stackBase__ + 36;
      var $step = __stackBase__ + 40;
      var $slicelen = __stackBase__ + 44;
      var $newlen = __stackBase__ + 48;
      var $cur = __stackBase__ + 52;
      var $i11 = __stackBase__ + 56;
      var $recycle = __stackBase__ + 60;
      var $seq = __stackBase__ + 64;
      var $element = __stackBase__ + 68;
      
      HEAP[$self__addr] = $self_;
      HEAP[$item_addr] = $item;
      HEAP[$value_addr] = $value;
      
      var $2 = HEAP[$self__addr];
      HEAP[$self] = $2;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$item_addr] + 4] + 48] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$item_addr] + 4] + 84] & 131072) == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[HEAP[$item_addr] + 4] + 48] + 152] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $24 = HEAP[_PyExc_IndexError];
      var $25 = HEAP[$item_addr];
      var $26 = _PyNumber_AsSsize_t($25, $24);
      HEAP[$i] = $26;
      
      var $28 = HEAP[$i] == -1;
      if ($28) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $29 = _PyErr_Occurred();
      
      if ($29 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 61;
      break;
     case 6:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[HEAP[$self] + 20] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $43 = HEAP[HEAP[HEAP[$self] + 20] + 4] + HEAP[$i];
      HEAP[$i] = $43;
      __label__ = 9;
      break;
     case 9:
      var $44 = HEAP[$self__addr];
      var $45 = HEAP[$i];
      var $46 = HEAP[$value_addr];
      var $47 = _element_setitem($44, $45, $46);
      HEAP[$0] = $47;
      __label__ = 61;
      break;
     case 10:
      
      
      
      
      if (HEAP[HEAP[$item_addr] + 4] == _PySlice_Type) {
        __label__ = 11;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 11:
      HEAP[$recycle] = 0;
      HEAP[$seq] = 0;
      
      
      
      
      if (HEAP[HEAP[$self] + 20] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $56 = HEAP[$self];
      var $57 = _element_new_extra($56, 0);
      __label__ = 13;
      break;
     case 13:
      
      
      
      
      var $62 = HEAP[HEAP[HEAP[$self] + 20] + 4];
      
      var $64 = HEAP[$item_addr];
      var $65 = _PySlice_GetIndicesEx($64, $62, $start, $stop, $step, $slicelen);
      
      if ($65 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = -1;
      __label__ = 61;
      break;
     case 15:
      
      
      if (HEAP[$value_addr] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      HEAP[$newlen] = 0;
      __label__ = 20;
      break;
     case 17:
      var $69 = HEAP[$value_addr];
      var $70 = _PySequence_Fast($69, __str1);
      HEAP[$seq] = $70;
      
      
      if (HEAP[$seq] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $77 = HEAP[HEAP[HEAP[$value_addr] + 4] + 12];
      var $78 = HEAP[_PyExc_TypeError];
      var $79 = _PyErr_Format($78, __str10, allocate([ $77, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 61;
      break;
     case 19:
      var $80 = HEAP[$seq];
      var $81 = _PySequence_Size($80);
      HEAP[$newlen] = $81;
      __label__ = 20;
      break;
     case 20:
      
      
      if (HEAP[$step] != 1) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      
      
      
      if (HEAP[$newlen] != HEAP[$slicelen]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      var $87 = HEAP[$slicelen];
      var $88 = HEAP[_PyExc_ValueError];
      var $89 = HEAP[$newlen];
      var $90 = _PyErr_Format($88, __str41, allocate([ $89, 0, 0, 0, $87, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 61;
      break;
     case 23:
      
      
      
      if (HEAP[$newlen] > HEAP[$slicelen]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 24:
      
      
      var $96 = HEAP[$newlen] - HEAP[$slicelen];
      var $97 = HEAP[$self];
      var $98 = _element_resize($97, $96);
      
      if ($98 < 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 25:
      
      
      if (HEAP[$seq] != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 26:
      
      
      
      var $105 = HEAP[HEAP[$seq]] - 1;
      
      var $107 = HEAP[$seq];
      HEAP[$107] = $105;
      
      
      
      
      if (HEAP[HEAP[$seq]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $116 = HEAP[HEAP[HEAP[$seq] + 4] + 24];
      var $117 = HEAP[$seq];
      FUNCTION_TABLE[$116]($117);
      __label__ = 28;
      break;
     case 28:
      HEAP[$0] = -1;
      __label__ = 61;
      break;
     case 29:
      
      
      if (HEAP[$slicelen] > 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 30:
      var $120 = HEAP[$slicelen];
      var $121 = _PyList_New($120);
      HEAP[$recycle] = $121;
      
      
      if (HEAP[$recycle] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 31:
      
      
      if (HEAP[$seq] != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 32:
      
      
      
      var $129 = HEAP[HEAP[$seq]] - 1;
      
      var $131 = HEAP[$seq];
      HEAP[$131] = $129;
      
      
      
      
      if (HEAP[HEAP[$seq]] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $140 = HEAP[HEAP[HEAP[$seq] + 4] + 24];
      var $141 = HEAP[$seq];
      FUNCTION_TABLE[$140]($141);
      __label__ = 34;
      break;
     case 34:
      HEAP[$0] = -1;
      __label__ = 61;
      break;
     case 35:
      var $142 = HEAP[$start];
      HEAP[$cur] = $142;
      HEAP[$i11] = 0;
      __label__ = 37;
      break;
     case 36:
      
      
      
      
      
      
      
      
      
      
      
      var $154 = HEAP[HEAP[HEAP[HEAP[$self] + 20] + 12] + 4 * HEAP[$cur]];
      
      var $156 = HEAP[HEAP[$recycle] + 12] + 4 * HEAP[$i11];
      HEAP[$156] = $154;
      
      
      var $159 = HEAP[$cur] + HEAP[$step];
      HEAP[$cur] = $159;
      
      var $161 = HEAP[$i11] + 1;
      HEAP[$i11] = $161;
      __label__ = 37;
      break;
     case 37:
      
      
      
      if (HEAP[$i11] < HEAP[$slicelen]) {
        __label__ = 36;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      
      
      
      if (HEAP[$newlen] < HEAP[$slicelen]) {
        __label__ = 39;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 39:
      var $168 = HEAP[$stop];
      HEAP[$i11] = $168;
      __label__ = 41;
      break;
     case 40:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $186 = HEAP[HEAP[HEAP[HEAP[$self] + 20] + 12] + 4 * HEAP[$i11]];
      var $187 = HEAP[HEAP[HEAP[$self] + 20] + 12] + 4 * (HEAP[$i11] + HEAP[$newlen] - HEAP[$slicelen]);
      HEAP[$187] = $186;
      
      var $189 = HEAP[$i11] + 1;
      HEAP[$i11] = $189;
      __label__ = 41;
      break;
     case 41:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self] + 20] + 4] > HEAP[$i11]) {
        __label__ = 40;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      __label__ = 47;
      break;
     case 43:
      
      
      
      if (HEAP[$newlen] > HEAP[$slicelen]) {
        __label__ = 44;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 44:
      
      
      
      
      
      var $205 = HEAP[HEAP[HEAP[$self] + 20] + 4] - 1;
      HEAP[$i11] = $205;
      __label__ = 46;
      break;
     case 45:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $223 = HEAP[HEAP[HEAP[HEAP[$self] + 20] + 12] + 4 * HEAP[$i11]];
      var $224 = HEAP[HEAP[HEAP[$self] + 20] + 12] + 4 * (HEAP[$i11] + HEAP[$newlen] - HEAP[$slicelen]);
      HEAP[$224] = $223;
      
      var $226 = HEAP[$i11] - 1;
      HEAP[$i11] = $226;
      __label__ = 46;
      break;
     case 46:
      
      
      
      if (HEAP[$i11] >= HEAP[$stop]) {
        __label__ = 45;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 47:
      var $230 = HEAP[$start];
      HEAP[$cur] = $230;
      HEAP[$i11] = 0;
      __label__ = 52;
      break;
     case 48:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$seq] + 4] + 84] & 33554432) != 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      
      
      
      
      var $244 = HEAP[HEAP[HEAP[$seq] + 12] + 4 * HEAP[$i11]];
      HEAP[$iftmp_171] = $244;
      __label__ = 51;
      break;
     case 50:
      
      
      
      
      
      var $250 = HEAP[HEAP[$seq] + 12 + HEAP[$i11] * 4];
      HEAP[$iftmp_171] = $250;
      __label__ = 51;
      break;
     case 51:
      var $251 = HEAP[$iftmp_171];
      HEAP[$element] = $251;
      
      
      
      var $255 = HEAP[HEAP[$element]] + 1;
      
      var $257 = HEAP[$element];
      HEAP[$257] = $255;
      
      
      
      
      
      
      var $264 = HEAP[HEAP[HEAP[$self] + 20] + 12] + 4 * HEAP[$cur];
      var $265 = HEAP[$element];
      HEAP[$264] = $265;
      
      
      var $268 = HEAP[$cur] + HEAP[$step];
      HEAP[$cur] = $268;
      
      var $270 = HEAP[$i11] + 1;
      HEAP[$i11] = $270;
      __label__ = 52;
      break;
     case 52:
      
      
      
      if (HEAP[$i11] < HEAP[$newlen]) {
        __label__ = 48;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 53:
      
      
      
      
      
      
      
      
      
      
      
      var $285 = HEAP[HEAP[HEAP[$self] + 20] + 4] + (HEAP[$newlen] - HEAP[$slicelen]);
      var $286 = HEAP[HEAP[$self] + 20] + 4;
      HEAP[$286] = $285;
      
      
      if (HEAP[$seq] != 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 54:
      
      
      
      var $292 = HEAP[HEAP[$seq]] - 1;
      
      var $294 = HEAP[$seq];
      HEAP[$294] = $292;
      
      
      
      
      if (HEAP[HEAP[$seq]] == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      
      
      
      
      var $303 = HEAP[HEAP[HEAP[$seq] + 4] + 24];
      var $304 = HEAP[$seq];
      FUNCTION_TABLE[$303]($304);
      __label__ = 56;
      break;
     case 56:
      
      
      if (HEAP[$recycle] != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 57:
      
      
      
      var $310 = HEAP[HEAP[$recycle]] - 1;
      
      var $312 = HEAP[$recycle];
      HEAP[$312] = $310;
      
      
      
      
      if (HEAP[HEAP[$recycle]] == 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 58:
      
      
      
      
      var $321 = HEAP[HEAP[HEAP[$recycle] + 4] + 24];
      var $322 = HEAP[$recycle];
      FUNCTION_TABLE[$321]($322);
      __label__ = 59;
      break;
     case 59:
      HEAP[$0] = 0;
      __label__ = 61;
      break;
     case 60:
      var $323 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($323, __str40);
      HEAP[$0] = -1;
      __label__ = 61;
      break;
     case 61:
      var $324 = HEAP[$0];
      HEAP[$retval] = $324;
      __label__ = 62;
      break;
     case 62:
      var $retval62 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval62;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element_getattr($self, $name) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $name_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $res = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$name_addr] = $name;
      var $1 = HEAP[$name_addr];
      var $2 = _strcmp($1, __str59);
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[HEAP[$self_addr] + 8];
      HEAP[$res] = $6;
      
      
      
      var $10 = HEAP[HEAP[$res]] + 1;
      
      var $12 = HEAP[$res];
      HEAP[$12] = $10;
      var $13 = HEAP[$res];
      HEAP[$0] = $13;
      __label__ = 16;
      break;
     case 2:
      var $14 = HEAP[$name_addr];
      var $15 = _strcmp($14, __str60);
      
      if ($15 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $17 = HEAP[$self_addr];
      var $18 = _element_get_text($17);
      HEAP[$res] = $18;
      
      
      
      var $22 = HEAP[HEAP[$res]] + 1;
      
      var $24 = HEAP[$res];
      HEAP[$24] = $22;
      var $25 = HEAP[$res];
      HEAP[$0] = $25;
      __label__ = 16;
      break;
     case 4:
      
      var $27 = HEAP[$self_addr];
      var $28 = HEAP[$name_addr];
      var $29 = _Py_FindMethod(_element_methods, $27, $28);
      HEAP[$res] = $29;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $32 = HEAP[$res];
      HEAP[$0] = $32;
      __label__ = 16;
      break;
     case 6:
      _PyErr_Clear();
      var $33 = HEAP[$name_addr];
      var $34 = _strcmp($33, __str61);
      
      if ($34 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $36 = HEAP[$self_addr];
      var $37 = _element_get_tail($36);
      HEAP[$res] = $37;
      __label__ = 13;
      break;
     case 8:
      var $38 = HEAP[$name_addr];
      var $39 = _strcmp($38, __str62);
      
      if ($39 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $45 = HEAP[$self_addr];
      var $46 = _element_new_extra($45, 0);
      __label__ = 11;
      break;
     case 11:
      var $47 = HEAP[$self_addr];
      var $48 = _element_get_attrib($47);
      HEAP[$res] = $48;
      __label__ = 13;
      break;
     case 12:
      var $49 = HEAP[_PyExc_AttributeError];
      var $50 = HEAP[$name_addr];
      _PyErr_SetString($49, $50);
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 13:
      
      
      if (HEAP[$res] == 0) {
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
      
      
      
      var $56 = HEAP[HEAP[$res]] + 1;
      
      var $58 = HEAP[$res];
      HEAP[$58] = $56;
      var $59 = HEAP[$res];
      HEAP[$0] = $59;
      __label__ = 16;
      break;
     case 16:
      var $60 = HEAP[$0];
      HEAP[$retval] = $60;
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
  function _element_setattr($self, $name, $value) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $name_addr = __stackBase__ + 4;
      var $value_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$name_addr] = $name;
      HEAP[$value_addr] = $value;
      
      
      if (HEAP[$value_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_AttributeError];
      _PyErr_SetString($3, __str63);
      HEAP[$0] = -1;
      __label__ = 22;
      break;
     case 2:
      var $4 = HEAP[$name_addr];
      var $5 = _strcmp($4, __str59);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      var $9 = HEAP[HEAP[$self_addr] + 8];
      
      
      var $12 = HEAP[$9] - 1;
      var $13 = $9;
      HEAP[$13] = $12;
      
      
      
      if (HEAP[$9] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 8] + 4] + 24];
      
      
      var $26 = HEAP[HEAP[$self_addr] + 8];
      FUNCTION_TABLE[$23]($26);
      __label__ = 5;
      break;
     case 5:
      
      var $28 = HEAP[$self_addr] + 8;
      var $29 = HEAP[$value_addr];
      HEAP[$28] = $29;
      
      
      
      
      
      var $35 = HEAP[HEAP[HEAP[$self_addr] + 8]] + 1;
      var $36 = HEAP[HEAP[$self_addr] + 8];
      HEAP[$36] = $35;
      __label__ = 21;
      break;
     case 6:
      var $37 = HEAP[$name_addr];
      var $38 = _strcmp($37, __str60);
      
      if ($38 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      
      var $44 = HEAP[HEAP[$self_addr] + 12] & -2;
      var $45 = $44;
      
      
      var $48 = HEAP[$45] - 1;
      var $49 = $45;
      HEAP[$49] = $48;
      
      
      
      if (HEAP[$45] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $57 = HEAP[HEAP[$self_addr] + 12] & -2;
      
      
      
      
      var $62 = HEAP[HEAP[$57 + 4] + 24];
      
      
      
      
      var $67 = HEAP[HEAP[$self_addr] + 12] & -2;
      var $68 = $67;
      FUNCTION_TABLE[$62]($68);
      __label__ = 9;
      break;
     case 9:
      
      var $70 = HEAP[$self_addr] + 12;
      var $71 = HEAP[$value_addr];
      HEAP[$70] = $71;
      
      
      
      
      
      var $77 = HEAP[HEAP[HEAP[$self_addr] + 12]] + 1;
      var $78 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$78] = $77;
      __label__ = 21;
      break;
     case 10:
      var $79 = HEAP[$name_addr];
      var $80 = _strcmp($79, __str61);
      
      if ($80 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      
      var $86 = HEAP[HEAP[$self_addr] + 16] & -2;
      var $87 = $86;
      
      
      var $90 = HEAP[$87] - 1;
      var $91 = $87;
      HEAP[$91] = $90;
      
      
      
      if (HEAP[$87] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $99 = HEAP[HEAP[$self_addr] + 16] & -2;
      
      
      
      
      var $104 = HEAP[HEAP[$99 + 4] + 24];
      
      
      
      
      var $109 = HEAP[HEAP[$self_addr] + 16] & -2;
      var $110 = $109;
      FUNCTION_TABLE[$104]($110);
      __label__ = 13;
      break;
     case 13:
      
      var $112 = HEAP[$self_addr] + 16;
      var $113 = HEAP[$value_addr];
      HEAP[$112] = $113;
      
      
      
      
      
      var $119 = HEAP[HEAP[HEAP[$self_addr] + 16]] + 1;
      var $120 = HEAP[HEAP[$self_addr] + 16];
      HEAP[$120] = $119;
      __label__ = 21;
      break;
     case 14:
      var $121 = HEAP[$name_addr];
      var $122 = _strcmp($121, __str62);
      
      if ($122 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 15:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $128 = HEAP[$self_addr];
      var $129 = _element_new_extra($128, 0);
      __label__ = 17;
      break;
     case 17:
      
      
      
      
      var $134 = HEAP[HEAP[HEAP[$self_addr] + 20]];
      
      
      var $137 = HEAP[$134] - 1;
      var $138 = $134;
      HEAP[$138] = $137;
      
      
      
      if (HEAP[$134] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      
      var $150 = HEAP[HEAP[HEAP[HEAP[HEAP[$self_addr] + 20]] + 4] + 24];
      
      
      
      
      var $155 = HEAP[HEAP[HEAP[$self_addr] + 20]];
      FUNCTION_TABLE[$150]($155);
      __label__ = 19;
      break;
     case 19:
      
      
      
      var $159 = HEAP[HEAP[$self_addr] + 20];
      var $160 = HEAP[$value_addr];
      HEAP[$159] = $160;
      
      
      
      
      
      
      
      var $168 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20]]] + 1;
      var $169 = HEAP[HEAP[HEAP[$self_addr] + 20]];
      HEAP[$169] = $168;
      __label__ = 21;
      break;
     case 20:
      var $170 = HEAP[_PyExc_AttributeError];
      var $171 = HEAP[$name_addr];
      _PyErr_SetString($170, $171);
      HEAP[$0] = -1;
      __label__ = 22;
      break;
     case 21:
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 22:
      var $172 = HEAP[$0];
      HEAP[$retval] = $172;
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
  function _treebuilder_new() {
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
      var $self = __stackBase__ + 8;
      
      var $1 = __PyObject_New(_TreeBuilder_Type);
      
      HEAP[$self] = $1;
      
      
      if (HEAP[$self] == 0) {
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
      
      var $6 = HEAP[$self] + 8;
      HEAP[$6] = 0;
      
      var $8 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $8;
      
      var $10 = HEAP[$self] + 12;
      HEAP[$10] = __Py_NoneStruct;
      
      var $12 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $12;
      
      var $14 = HEAP[$self] + 16;
      HEAP[$14] = __Py_NoneStruct;
      
      var $16 = HEAP[$self] + 20;
      HEAP[$16] = 0;
      var $17 = _PyList_New(20);
      
      var $19 = HEAP[$self] + 24;
      HEAP[$19] = $17;
      
      var $21 = HEAP[$self] + 28;
      HEAP[$21] = 0;
      
      var $23 = HEAP[$self] + 32;
      HEAP[$23] = 0;
      
      var $25 = HEAP[$self] + 40;
      HEAP[$25] = 0;
      
      
      var $28 = HEAP[HEAP[$self] + 40];
      
      var $30 = HEAP[$self] + 36;
      HEAP[$30] = $28;
      
      var $32 = HEAP[$self] + 48;
      HEAP[$32] = 0;
      
      
      var $35 = HEAP[HEAP[$self] + 48];
      
      var $37 = HEAP[$self] + 44;
      HEAP[$37] = $35;
      
      var $39 = HEAP[$self];
      HEAP[$0] = $39;
      __label__ = 3;
      break;
     case 3:
      var $40 = HEAP[$0];
      HEAP[$retval] = $40;
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
  function _treebuilder($self_, $args) {
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
      
      HEAP[__stackBase__] = $self_;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str65, allocate(1, "i32", ALLOC_STACK));
      
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
      var $4 = _treebuilder_new();
      HEAP[$0] = $4;
      __label__ = 3;
      break;
     case 3:
      var $5 = HEAP[$0];
      HEAP[$retval] = $5;
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
  function _treebuilder_dealloc($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 48] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[HEAP[$self_addr] + 48];
      
      
      var $9 = HEAP[$6] - 1;
      var $10 = $6;
      HEAP[$10] = $9;
      
      
      
      if (HEAP[$6] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 48] + 4] + 24];
      
      
      var $23 = HEAP[HEAP[$self_addr] + 48];
      FUNCTION_TABLE[$20]($23);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $30 = HEAP[HEAP[$self_addr] + 44];
      
      
      var $33 = HEAP[$30] - 1;
      var $34 = $30;
      HEAP[$34] = $33;
      
      
      
      if (HEAP[$30] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 44] + 4] + 24];
      
      
      var $47 = HEAP[HEAP[$self_addr] + 44];
      FUNCTION_TABLE[$44]($47);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $54 = HEAP[HEAP[$self_addr] + 40];
      
      
      var $57 = HEAP[$54] - 1;
      var $58 = $54;
      HEAP[$58] = $57;
      
      
      
      if (HEAP[$54] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $68 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 40] + 4] + 24];
      
      
      var $71 = HEAP[HEAP[$self_addr] + 40];
      FUNCTION_TABLE[$68]($71);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 36] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $78 = HEAP[HEAP[$self_addr] + 36];
      
      
      var $81 = HEAP[$78] - 1;
      var $82 = $78;
      HEAP[$82] = $81;
      
      
      
      if (HEAP[$78] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      var $92 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 36] + 4] + 24];
      
      
      var $95 = HEAP[HEAP[$self_addr] + 36];
      FUNCTION_TABLE[$92]($95);
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      var $102 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $105 = HEAP[$102] - 1;
      var $106 = $102;
      HEAP[$106] = $105;
      
      
      
      if (HEAP[$102] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      
      var $116 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 4] + 24];
      
      
      var $119 = HEAP[HEAP[$self_addr] + 32];
      FUNCTION_TABLE[$116]($119);
      __label__ = 15;
      break;
     case 15:
      
      
      var $122 = HEAP[HEAP[$self_addr] + 24];
      
      
      var $125 = HEAP[$122] - 1;
      var $126 = $122;
      HEAP[$126] = $125;
      
      
      
      if (HEAP[$122] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      
      var $136 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 24] + 4] + 24];
      
      
      var $139 = HEAP[HEAP[$self_addr] + 24];
      FUNCTION_TABLE[$136]($139);
      __label__ = 17;
      break;
     case 17:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      
      
      var $146 = HEAP[HEAP[$self_addr] + 20];
      
      
      var $149 = HEAP[$146] - 1;
      var $150 = $146;
      HEAP[$150] = $149;
      
      
      
      if (HEAP[$146] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      
      var $160 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 4] + 24];
      
      
      var $163 = HEAP[HEAP[$self_addr] + 20];
      FUNCTION_TABLE[$160]($163);
      __label__ = 20;
      break;
     case 20:
      
      
      
      var $167 = HEAP[HEAP[$self_addr] + 16];
      
      
      var $170 = HEAP[$167] - 1;
      var $171 = $167;
      HEAP[$171] = $170;
      
      
      
      if (HEAP[$167] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      
      
      
      var $182 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 16] + 4] + 24];
      
      
      
      var $186 = HEAP[HEAP[$self_addr] + 16];
      FUNCTION_TABLE[$182]($186);
      __label__ = 22;
      break;
     case 22:
      
      
      
      var $190 = HEAP[HEAP[$self_addr] + 12];
      
      
      var $193 = HEAP[$190] - 1;
      var $194 = $190;
      HEAP[$194] = $193;
      
      
      
      if (HEAP[$190] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      
      
      
      var $205 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 12] + 4] + 24];
      
      
      
      var $209 = HEAP[HEAP[$self_addr] + 12];
      FUNCTION_TABLE[$205]($209);
      __label__ = 24;
      break;
     case 24:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      var $216 = HEAP[HEAP[$self_addr] + 8];
      
      
      var $219 = HEAP[$216] - 1;
      var $220 = $216;
      HEAP[$220] = $219;
      
      
      
      if (HEAP[$216] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      
      
      var $230 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 8] + 4] + 24];
      
      
      var $233 = HEAP[HEAP[$self_addr] + 8];
      FUNCTION_TABLE[$230]($233);
      __label__ = 27;
      break;
     case 27:
      
      var $235 = HEAP[$self_addr];
      _PyObject_Free($235);
      __label__ = 28;
      break;
     case 28:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _treebuilder_handle_xml($self, $encoding, $standalone) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $encoding_addr = __stackBase__ + 4;
      var $standalone_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$encoding_addr] = $encoding;
      HEAP[$standalone_addr] = $standalone;
      
      var $2 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $2;
      HEAP[$0] = __Py_NoneStruct;
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
  function _treebuilder_handle_start($self, $tag, $attrib) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $tag_addr = __stackBase__ + 4;
      var $attrib_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $node = __stackBase__ + 20;
      var $this = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      var $action = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$tag_addr] = $tag;
      HEAP[$attrib_addr] = $attrib;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] == HEAP[HEAP[$self_addr] + 16]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $18 = HEAP[HEAP[HEAP[$self_addr] + 16] + 12] & -2;
      var $19 = $18;
      
      
      var $22 = HEAP[$19] - 1;
      var $23 = $19;
      HEAP[$23] = $22;
      
      
      
      if (HEAP[$19] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $33 = HEAP[HEAP[HEAP[$self_addr] + 16] + 12] & -2;
      
      
      
      
      var $38 = HEAP[HEAP[$33 + 4] + 24];
      
      
      
      
      
      
      var $45 = HEAP[HEAP[HEAP[$self_addr] + 16] + 12] & -2;
      var $46 = $45;
      FUNCTION_TABLE[$38]($46);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      
      
      var $54 = HEAP[HEAP[$self_addr] + 20] & -2;
      
      
      
      
      
      
      
      
      var $63 = $54 | HEAP[HEAP[HEAP[$self_addr] + 20] + 4] == _PyList_Type;
      var $64 = HEAP[HEAP[$self_addr] + 16] + 12;
      HEAP[$64] = $63;
      __label__ = 8;
      break;
     case 5:
      
      
      
      
      
      
      var $71 = HEAP[HEAP[HEAP[$self_addr] + 16] + 16] & -2;
      var $72 = $71;
      
      
      var $75 = HEAP[$72] - 1;
      var $76 = $72;
      HEAP[$76] = $75;
      
      
      
      if (HEAP[$72] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      
      var $86 = HEAP[HEAP[HEAP[$self_addr] + 16] + 16] & -2;
      
      
      
      
      var $91 = HEAP[HEAP[$86 + 4] + 24];
      
      
      
      
      
      
      var $98 = HEAP[HEAP[HEAP[$self_addr] + 16] + 16] & -2;
      var $99 = $98;
      FUNCTION_TABLE[$91]($99);
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      
      
      
      var $107 = HEAP[HEAP[$self_addr] + 20] & -2;
      
      
      
      
      
      
      
      
      var $116 = $107 | HEAP[HEAP[HEAP[$self_addr] + 20] + 4] == _PyList_Type;
      var $117 = HEAP[HEAP[$self_addr] + 16] + 16;
      HEAP[$117] = $116;
      __label__ = 8;
      break;
     case 8:
      
      var $119 = HEAP[$self_addr] + 20;
      HEAP[$119] = 0;
      __label__ = 9;
      break;
     case 9:
      var $120 = HEAP[$tag_addr];
      var $121 = HEAP[$attrib_addr];
      var $122 = _element_new($120, $121);
      HEAP[$node] = $122;
      
      
      if (HEAP[$node] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = 0;
      __label__ = 35;
      break;
     case 11:
      
      
      
      var $128 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$this] = $128;
      
      
      if (HEAP[$this] != __Py_NoneStruct) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      var $132 = HEAP[$this];
      var $133 = HEAP[$node];
      var $134 = _element_add_subelement($132, $133);
      
      if ($134 < 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      __label__ = 17;
      break;
     case 14:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $140 = HEAP[_elementtree_parseerror_obj];
      _PyErr_SetString($140, __str66);
      __label__ = 32;
      break;
     case 16:
      
      
      
      var $144 = HEAP[HEAP[$node]] + 1;
      
      var $146 = HEAP[$node];
      HEAP[$146] = $144;
      
      var $148 = HEAP[$self_addr] + 8;
      var $149 = HEAP[$node];
      HEAP[$148] = $149;
      __label__ = 17;
      break;
     case 17:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] < HEAP[HEAP[HEAP[$self_addr] + 24] + 8]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      
      
      var $162 = HEAP[HEAP[$self_addr] + 28];
      
      
      var $165 = HEAP[HEAP[$self_addr] + 24];
      var $166 = HEAP[$this];
      var $167 = _PyList_SetItem($165, $162, $166);
      
      if ($167 < 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      var $172 = HEAP[HEAP[$this]] + 1;
      
      var $174 = HEAP[$this];
      HEAP[$174] = $172;
      __label__ = 21;
      break;
     case 20:
      
      
      var $177 = HEAP[HEAP[$self_addr] + 24];
      var $178 = HEAP[$this];
      var $179 = _PyList_Append($177, $178);
      
      if ($179 < 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      var $184 = HEAP[HEAP[$self_addr] + 28] + 1;
      
      var $186 = HEAP[$self_addr] + 28;
      HEAP[$186] = $184;
      
      
      
      var $190 = HEAP[HEAP[$this]] - 1;
      
      var $192 = HEAP[$this];
      HEAP[$192] = $190;
      
      
      
      
      if (HEAP[HEAP[$this]] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $201 = HEAP[HEAP[HEAP[$this] + 4] + 24];
      var $202 = HEAP[$this];
      FUNCTION_TABLE[$201]($202);
      __label__ = 23;
      break;
     case 23:
      
      
      
      var $206 = HEAP[HEAP[$node]] + 1;
      
      var $208 = HEAP[$node];
      HEAP[$208] = $206;
      
      var $210 = HEAP[$node];
      
      var $212 = HEAP[$self_addr] + 12;
      HEAP[$212] = $210;
      
      
      
      var $216 = HEAP[HEAP[$self_addr] + 16];
      
      
      var $219 = HEAP[$216] - 1;
      var $220 = $216;
      HEAP[$220] = $219;
      
      
      
      if (HEAP[$216] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      
      
      
      var $231 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 16] + 4] + 24];
      
      
      
      var $235 = HEAP[HEAP[$self_addr] + 16];
      FUNCTION_TABLE[$231]($235);
      __label__ = 25;
      break;
     case 25:
      
      
      
      var $239 = HEAP[HEAP[$node]] + 1;
      
      var $241 = HEAP[$node];
      HEAP[$241] = $239;
      
      var $243 = HEAP[$node];
      
      var $245 = HEAP[$self_addr] + 16;
      HEAP[$245] = $243;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 36] != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 26:
      
      
      var $252 = HEAP[HEAP[$self_addr] + 36];
      HEAP[$action] = $252;
      var $253 = _PyTuple_New(2);
      HEAP[$res] = $253;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      
      
      
      var $259 = HEAP[HEAP[$action]] + 1;
      
      var $261 = HEAP[$action];
      HEAP[$261] = $259;
      
      
      
      var $265 = HEAP[$res] + 12;
      var $266 = HEAP[$action];
      HEAP[$265] = $266;
      
      
      
      var $270 = HEAP[HEAP[$node]] + 1;
      
      var $272 = HEAP[$node];
      HEAP[$272] = $270;
      
      
      
      var $276 = HEAP[$res] + 12 + 4;
      var $277 = HEAP[$node];
      HEAP[$276] = $277;
      
      
      var $280 = HEAP[HEAP[$self_addr] + 32];
      var $281 = HEAP[$res];
      var $282 = _PyList_Append($280, $281);
      
      
      
      var $286 = HEAP[HEAP[$res]] - 1;
      
      var $288 = HEAP[$res];
      HEAP[$288] = $286;
      
      
      
      
      if (HEAP[HEAP[$res]] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $297 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $298 = HEAP[$res];
      FUNCTION_TABLE[$297]($298);
      __label__ = 29;
      break;
     case 29:
      __label__ = 31;
      break;
     case 30:
      _PyErr_Clear();
      __label__ = 31;
      break;
     case 31:
      var $299 = HEAP[$node];
      HEAP[$0] = $299;
      __label__ = 35;
      break;
     case 32:
      
      
      
      var $303 = HEAP[HEAP[$node]] - 1;
      
      var $305 = HEAP[$node];
      HEAP[$305] = $303;
      
      
      
      
      if (HEAP[HEAP[$node]] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $314 = HEAP[HEAP[HEAP[$node] + 4] + 24];
      var $315 = HEAP[$node];
      FUNCTION_TABLE[$314]($315);
      __label__ = 34;
      break;
     case 34:
      HEAP[$0] = 0;
      __label__ = 35;
      break;
     case 35:
      var $316 = HEAP[$0];
      HEAP[$retval] = $316;
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
  function _treebuilder_handle_data($self, $data) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $data_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $size = __stackBase__ + 16;
      var $list = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$data_addr] = $data;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] == __Py_NoneStruct) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $10 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $10;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 19;
      break;
     case 3:
      
      
      
      var $14 = HEAP[HEAP[$data_addr]] + 1;
      
      var $16 = HEAP[$data_addr];
      HEAP[$16] = $14;
      
      var $18 = HEAP[$self_addr] + 20;
      var $19 = HEAP[$data_addr];
      HEAP[$18] = $19;
      __label__ = 18;
      break;
     case 4:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] != _PyString_Type) {
        __label__ = 11;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20]] != 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 4] != _PyString_Type) {
        __label__ = 11;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      if (HEAP[HEAP[$data_addr] + 8] != 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$self_addr] + 20] + 8];
      HEAP[$size] = $46;
      
      var $48 = HEAP[$size] + 1;
      
      var $50 = HEAP[$self_addr] + 20;
      var $51 = __PyString_Resize($50, $48);
      
      if ($51 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 10:
      
      
      
      
      
      
      
      
      
      var $62 = HEAP[HEAP[$data_addr] + 20];
      
      var $64 = HEAP[HEAP[$self_addr] + 20] + 20 + HEAP[$size];
      HEAP[$64] = $62;
      __label__ = 18;
      break;
     case 11:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 20] + 4] == _PyList_Type) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      
      var $73 = HEAP[HEAP[$self_addr] + 20];
      var $74 = HEAP[$data_addr];
      var $75 = _PyList_Append($73, $74);
      
      if ($75 < 0) {
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
      __label__ = 18;
      break;
     case 15:
      var $77 = _PyList_New(2);
      HEAP[$list] = $77;
      
      
      if (HEAP[$list] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 17:
      
      
      
      
      
      
      var $86 = HEAP[HEAP[$self_addr] + 20];
      var $87 = HEAP[HEAP[$list] + 12];
      HEAP[$87] = $86;
      
      
      
      var $91 = HEAP[HEAP[$data_addr]] + 1;
      
      var $93 = HEAP[$data_addr];
      HEAP[$93] = $91;
      
      
      
      
      var $98 = HEAP[HEAP[$list] + 12] + 4;
      var $99 = HEAP[$data_addr];
      HEAP[$98] = $99;
      
      var $101 = HEAP[$self_addr] + 20;
      var $102 = HEAP[$list];
      HEAP[$101] = $102;
      __label__ = 18;
      break;
     case 18:
      
      var $104 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $104;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 19;
      break;
     case 19:
      var $105 = HEAP[$0];
      HEAP[$retval] = $105;
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
  function _treebuilder_handle_end($self, $tag) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $tag_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $item = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      var $action = __stackBase__ + 24;
      var $node = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$tag_addr] = $tag;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] == HEAP[HEAP[$self_addr] + 16]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $18 = HEAP[HEAP[HEAP[$self_addr] + 16] + 12] & -2;
      var $19 = $18;
      
      
      var $22 = HEAP[$19] - 1;
      var $23 = $19;
      HEAP[$23] = $22;
      
      
      
      if (HEAP[$19] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $33 = HEAP[HEAP[HEAP[$self_addr] + 16] + 12] & -2;
      
      
      
      
      var $38 = HEAP[HEAP[$33 + 4] + 24];
      
      
      
      
      
      
      var $45 = HEAP[HEAP[HEAP[$self_addr] + 16] + 12] & -2;
      var $46 = $45;
      FUNCTION_TABLE[$38]($46);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      
      
      var $54 = HEAP[HEAP[$self_addr] + 20] & -2;
      
      
      
      
      
      
      
      
      var $63 = $54 | HEAP[HEAP[HEAP[$self_addr] + 20] + 4] == _PyList_Type;
      var $64 = HEAP[HEAP[$self_addr] + 16] + 12;
      HEAP[$64] = $63;
      __label__ = 8;
      break;
     case 5:
      
      
      
      
      
      
      var $71 = HEAP[HEAP[HEAP[$self_addr] + 16] + 16] & -2;
      var $72 = $71;
      
      
      var $75 = HEAP[$72] - 1;
      var $76 = $72;
      HEAP[$76] = $75;
      
      
      
      if (HEAP[$72] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      
      var $86 = HEAP[HEAP[HEAP[$self_addr] + 16] + 16] & -2;
      
      
      
      
      var $91 = HEAP[HEAP[$86 + 4] + 24];
      
      
      
      
      
      
      var $98 = HEAP[HEAP[HEAP[$self_addr] + 16] + 16] & -2;
      var $99 = $98;
      FUNCTION_TABLE[$91]($99);
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      
      
      
      var $107 = HEAP[HEAP[$self_addr] + 20] & -2;
      
      
      
      
      
      
      
      
      var $116 = $107 | HEAP[HEAP[HEAP[$self_addr] + 20] + 4] == _PyList_Type;
      var $117 = HEAP[HEAP[$self_addr] + 16] + 16;
      HEAP[$117] = $116;
      __label__ = 8;
      break;
     case 8:
      
      var $119 = HEAP[$self_addr] + 20;
      HEAP[$119] = 0;
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $124 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($124, __str67);
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 11:
      
      
      
      var $128 = HEAP[HEAP[$self_addr] + 28] - 1;
      
      var $130 = HEAP[$self_addr] + 28;
      HEAP[$130] = $128;
      
      
      
      
      
      
      
      
      
      
      var $141 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 24] + 12] + 4 * HEAP[HEAP[$self_addr] + 28]];
      HEAP[$item] = $141;
      
      
      
      var $145 = HEAP[HEAP[$item]] + 1;
      
      var $147 = HEAP[$item];
      HEAP[$147] = $145;
      
      
      
      var $151 = HEAP[HEAP[$self_addr] + 16];
      
      
      var $154 = HEAP[$151] - 1;
      var $155 = $151;
      HEAP[$155] = $154;
      
      
      
      if (HEAP[$151] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      var $166 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 16] + 4] + 24];
      
      
      
      var $170 = HEAP[HEAP[$self_addr] + 16];
      FUNCTION_TABLE[$166]($170);
      __label__ = 13;
      break;
     case 13:
      
      
      var $173 = HEAP[HEAP[$self_addr] + 12];
      
      var $175 = HEAP[$self_addr] + 16;
      HEAP[$175] = $173;
      
      var $177 = HEAP[$item];
      
      var $179 = HEAP[$self_addr] + 12;
      HEAP[$179] = $177;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 14:
      
      
      var $186 = HEAP[HEAP[$self_addr] + 40];
      HEAP[$action] = $186;
      
      
      
      var $190 = HEAP[HEAP[$self_addr] + 16];
      HEAP[$node] = $190;
      var $191 = _PyTuple_New(2);
      HEAP[$res] = $191;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      
      
      
      var $197 = HEAP[HEAP[$action]] + 1;
      
      var $199 = HEAP[$action];
      HEAP[$199] = $197;
      
      
      
      var $203 = HEAP[$res] + 12;
      var $204 = HEAP[$action];
      HEAP[$203] = $204;
      
      
      
      var $208 = HEAP[HEAP[$node]] + 1;
      
      var $210 = HEAP[$node];
      HEAP[$210] = $208;
      
      
      
      var $214 = HEAP[$res] + 12 + 4;
      var $215 = HEAP[$node];
      HEAP[$214] = $215;
      
      
      var $218 = HEAP[HEAP[$self_addr] + 32];
      var $219 = HEAP[$res];
      var $220 = _PyList_Append($218, $219);
      
      
      
      var $224 = HEAP[HEAP[$res]] - 1;
      
      var $226 = HEAP[$res];
      HEAP[$226] = $224;
      
      
      
      
      if (HEAP[HEAP[$res]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $235 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $236 = HEAP[$res];
      FUNCTION_TABLE[$235]($236);
      __label__ = 17;
      break;
     case 17:
      __label__ = 19;
      break;
     case 18:
      _PyErr_Clear();
      __label__ = 19;
      break;
     case 19:
      
      
      
      
      
      
      var $243 = HEAP[HEAP[HEAP[$self_addr] + 16]] + 1;
      var $244 = HEAP[HEAP[$self_addr] + 16];
      HEAP[$244] = $243;
      
      
      
      var $248 = HEAP[HEAP[$self_addr] + 16];
      HEAP[$0] = $248;
      __label__ = 20;
      break;
     case 20:
      var $249 = HEAP[$0];
      HEAP[$retval] = $249;
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
  function _treebuilder_handle_namespace($self, $start, $prefix, $uri) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $start_addr = __stackBase__ + 4;
      var $prefix_addr = __stackBase__ + 8;
      var $uri_addr = __stackBase__ + 12;
      var $res = __stackBase__ + 16;
      var $action = __stackBase__ + 20;
      var $parcel = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$start_addr] = $start;
      HEAP[$prefix_addr] = $prefix;
      HEAP[$uri_addr] = $uri;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$start_addr] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $12 = HEAP[HEAP[$self_addr] + 44];
      HEAP[$action] = $12;
      var $13 = HEAP[$prefix_addr];
      var $14 = HEAP[$uri_addr];
      var $15 = _Py_BuildValue(__str68, allocate([ $13, 0, 0, 0, $14, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$parcel] = $15;
      
      
      if (HEAP[$parcel] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $21 = HEAP[HEAP[$action]] + 1;
      
      var $23 = HEAP[$action];
      HEAP[$23] = $21;
      __label__ = 7;
      break;
     case 5:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 48] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $30 = HEAP[HEAP[$self_addr] + 48];
      HEAP[$action] = $30;
      
      
      
      var $34 = HEAP[HEAP[$action]] + 1;
      
      var $36 = HEAP[$action];
      HEAP[$36] = $34;
      HEAP[$parcel] = __Py_NoneStruct;
      
      
      
      var $40 = HEAP[HEAP[$parcel]] + 1;
      
      var $42 = HEAP[$parcel];
      HEAP[$42] = $40;
      __label__ = 7;
      break;
     case 7:
      var $43 = _PyTuple_New(2);
      HEAP[$res] = $43;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $49 = HEAP[$res] + 12;
      var $50 = HEAP[$action];
      HEAP[$49] = $50;
      
      
      
      var $54 = HEAP[$res] + 12 + 4;
      var $55 = HEAP[$parcel];
      HEAP[$54] = $55;
      
      
      var $58 = HEAP[HEAP[$self_addr] + 32];
      var $59 = HEAP[$res];
      var $60 = _PyList_Append($58, $59);
      
      
      
      var $64 = HEAP[HEAP[$res]] - 1;
      
      var $66 = HEAP[$res];
      HEAP[$66] = $64;
      
      
      
      
      if (HEAP[HEAP[$res]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $75 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $76 = HEAP[$res];
      FUNCTION_TABLE[$75]($76);
      __label__ = 10;
      break;
     case 10:
      __label__ = 12;
      break;
     case 11:
      _PyErr_Clear();
      __label__ = 12;
      break;
     case 12:
      __label__ = 13;
      break;
     case 13:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _treebuilder_data($self, $args) {
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
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $data = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str69, allocate([ $data, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$data];
      var $5 = HEAP[$self_addr];
      var $6 = _treebuilder_handle_data($5, $4);
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
  function _treebuilder_end($self, $args) {
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
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $tag = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str70, allocate([ $tag, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$tag];
      var $5 = HEAP[$self_addr];
      var $6 = _treebuilder_handle_end($5, $4);
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
  function _treebuilder_done($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $res = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 8];
      HEAP[$res] = $7;
      __label__ = 3;
      break;
     case 2:
      HEAP[$res] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      
      
      
      var $11 = HEAP[HEAP[$res]] + 1;
      
      var $13 = HEAP[$res];
      HEAP[$13] = $11;
      var $14 = HEAP[$res];
      HEAP[$0] = $14;
      var $15 = HEAP[$0];
      HEAP[$retval] = $15;
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
  function _treebuilder_close($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str71, allocate(1, "i32", ALLOC_STACK));
      
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
      var $4 = HEAP[$self_addr];
      var $5 = _treebuilder_done($4);
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
  function _treebuilder_start($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $tag = __stackBase__ + 16;
      var $attrib = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$attrib] = __Py_NoneStruct;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str72, allocate([ $tag, 0, 0, 0, $attrib, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$attrib];
      var $5 = HEAP[$tag];
      var $6 = HEAP[$self_addr];
      var $7 = _treebuilder_handle_start($6, $5, $4);
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
  function _treebuilder_xml($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $encoding = __stackBase__ + 16;
      var $standalone = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str73, allocate([ $encoding, 0, 0, 0, $standalone, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$standalone];
      var $5 = HEAP[$encoding];
      var $6 = HEAP[$self_addr];
      var $7 = _treebuilder_handle_xml($6, $5, $4);
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
  function _treebuilder_getattr($self, $name) {
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
      
      var $2 = HEAP[$self_addr];
      var $3 = HEAP[$name_addr];
      var $4 = _Py_FindMethod(_treebuilder_methods, $2, $3);
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
  function _checkstring($string, $size) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $string_addr = __stackBase__;
      var $size_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      
      HEAP[$string_addr] = $string;
      HEAP[$size_addr] = $size;
      HEAP[$i] = 0;
      __label__ = 4;
      break;
     case 1:
      
      
      
      
      
      if (HEAP[HEAP[$string_addr] + HEAP[$i]] < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 1;
      __label__ = 6;
      break;
     case 3:
      
      var $7 = HEAP[$i] + 1;
      HEAP[$i] = $7;
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
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 6:
      var $11 = HEAP[$0];
      HEAP[$retval] = $11;
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
  function _makestring($string, $size) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $string_addr = __stackBase__;
      var $size_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$string_addr] = $string;
      HEAP[$size_addr] = $size;
      var $1 = HEAP[$string_addr];
      var $2 = HEAP[$size_addr];
      var $3 = _checkstring($1, $2);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[$string_addr];
      var $6 = HEAP[$size_addr];
      var $7 = _PyUnicodeUCS2_DecodeUTF8($5, $6, __str80);
      HEAP[$0] = $7;
      __label__ = 3;
      break;
     case 2:
      var $8 = HEAP[$string_addr];
      var $9 = HEAP[$size_addr];
      var $10 = _PyString_FromStringAndSize($8, $9);
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
  function _makeuniversal($self, $string) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $string_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $size = __stackBase__ + 16;
      var $key = __stackBase__ + 20;
      var $value = __stackBase__ + 24;
      var $tag = __stackBase__ + 28;
      var $p = __stackBase__ + 32;
      var $i = __stackBase__ + 36;
      
      HEAP[$self_addr] = $self;
      HEAP[$string_addr] = $string;
      var $1 = HEAP[$string_addr];
      var $2 = _strlen($1);
      HEAP[$size] = $2;
      var $3 = HEAP[$string_addr];
      var $4 = HEAP[$size];
      var $5 = _PyString_FromStringAndSize($3, $4);
      HEAP[$key] = $5;
      
      
      if (HEAP[$key] == 0) {
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
      
      
      var $10 = HEAP[HEAP[$self_addr] + 20];
      var $11 = HEAP[$key];
      var $12 = _PyDict_GetItem($10, $11);
      HEAP[$value] = $12;
      
      
      if (HEAP[$value] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $18 = HEAP[HEAP[$value]] + 1;
      
      var $20 = HEAP[$value];
      HEAP[$20] = $18;
      __label__ = 26;
      break;
     case 4:
      HEAP[$i] = 0;
      __label__ = 7;
      break;
     case 5:
      
      
      
      
      
      if (HEAP[HEAP[$string_addr] + HEAP[$i]] == 125) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      var $27 = HEAP[$i] + 1;
      HEAP[$i] = $27;
      __label__ = 7;
      break;
     case 7:
      
      
      
      if (HEAP[$i] < HEAP[$size]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      if (HEAP[$i] != HEAP[$size]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      var $35 = HEAP[$size] + 1;
      var $36 = _PyString_FromStringAndSize(0, $35);
      HEAP[$tag] = $36;
      
      
      
      var $40 = HEAP[$tag] + 20;
      HEAP[$p] = $40;
      
      var $42 = HEAP[$p];
      HEAP[$42] = 123;
      var $43 = HEAP[$size];
      
      var $45 = HEAP[$p] + 1;
      var $46 = HEAP[$string_addr];
      _llvm_memcpy_p0i8_p0i8_i32($45, $46, $43, 1, 0);
      
      var $48 = HEAP[$size] + 1;
      HEAP[$size] = $48;
      __label__ = 11;
      break;
     case 10:
      
      
      
      var $52 = HEAP[HEAP[$key]] + 1;
      
      var $54 = HEAP[$key];
      HEAP[$54] = $52;
      var $55 = HEAP[$key];
      HEAP[$tag] = $55;
      __label__ = 11;
      break;
     case 11:
      
      
      
      var $59 = HEAP[$tag] + 20;
      HEAP[$p] = $59;
      var $60 = HEAP[$p];
      var $61 = HEAP[$size];
      var $62 = _checkstring($60, $61);
      
      if ($62 != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 12:
      var $64 = HEAP[$p];
      var $65 = HEAP[$size];
      var $66 = _PyUnicodeUCS2_DecodeUTF8($64, $65, __str80);
      HEAP[$value] = $66;
      
      
      
      var $70 = HEAP[HEAP[$tag]] - 1;
      
      var $72 = HEAP[$tag];
      HEAP[$72] = $70;
      
      
      
      
      if (HEAP[HEAP[$tag]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $81 = HEAP[HEAP[HEAP[$tag] + 4] + 24];
      var $82 = HEAP[$tag];
      FUNCTION_TABLE[$81]($82);
      __label__ = 14;
      break;
     case 14:
      
      
      if (HEAP[$value] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      
      
      
      var $88 = HEAP[HEAP[$key]] - 1;
      
      var $90 = HEAP[$key];
      HEAP[$90] = $88;
      
      
      
      
      if (HEAP[HEAP[$key]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $99 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $100 = HEAP[$key];
      FUNCTION_TABLE[$99]($100);
      __label__ = 17;
      break;
     case 17:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 18:
      __label__ = 20;
      break;
     case 19:
      var $101 = HEAP[$tag];
      HEAP[$value] = $101;
      __label__ = 20;
      break;
     case 20:
      
      
      var $104 = HEAP[HEAP[$self_addr] + 20];
      var $105 = HEAP[$key];
      var $106 = HEAP[$value];
      var $107 = _PyDict_SetItem($104, $105, $106);
      
      if ($107 < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 21:
      
      
      
      var $112 = HEAP[HEAP[$key]] - 1;
      
      var $114 = HEAP[$key];
      HEAP[$114] = $112;
      
      
      
      
      if (HEAP[HEAP[$key]] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $123 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $124 = HEAP[$key];
      FUNCTION_TABLE[$123]($124);
      __label__ = 23;
      break;
     case 23:
      
      
      
      var $128 = HEAP[HEAP[$value]] - 1;
      
      var $130 = HEAP[$value];
      HEAP[$130] = $128;
      
      
      
      
      if (HEAP[HEAP[$value]] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $139 = HEAP[HEAP[HEAP[$value] + 4] + 24];
      var $140 = HEAP[$value];
      FUNCTION_TABLE[$139]($140);
      __label__ = 25;
      break;
     case 25:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 26:
      
      
      
      var $144 = HEAP[HEAP[$key]] - 1;
      
      var $146 = HEAP[$key];
      HEAP[$146] = $144;
      
      
      
      
      if (HEAP[HEAP[$key]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $155 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $156 = HEAP[$key];
      FUNCTION_TABLE[$155]($156);
      __label__ = 28;
      break;
     case 28:
      var $157 = HEAP[$value];
      HEAP[$0] = $157;
      __label__ = 29;
      break;
     case 29:
      var $158 = HEAP[$0];
      HEAP[$retval] = $158;
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
  function _expat_set_error($message, $line, $column) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 276;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 276);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $message_addr = __stackBase__;
      var $line_addr = __stackBase__ + 4;
      var $column_addr = __stackBase__ + 8;
      var $error = __stackBase__ + 12;
      var $position = __stackBase__ + 16;
      var $buffer = __stackBase__ + 20;
      
      HEAP[$message_addr] = $message;
      HEAP[$line_addr] = $line;
      HEAP[$column_addr] = $column;
      var $buffer1 = $buffer;
      var $0 = HEAP[$message_addr];
      var $1 = HEAP[$line_addr];
      var $2 = HEAP[$column_addr];
      var $3 = _sprintf($buffer1, __str81, allocate([ $0, 0, 0, 0, $1, 0, 0, 0, $2, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      var $4 = HEAP[_elementtree_parseerror_obj];
      var $buffer2 = $buffer;
      var $5 = _PyObject_CallFunction($4, __str82, allocate([ $buffer2, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$error] = $5;
      
      
      if (HEAP[$error] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $8 = HEAP[$line_addr];
      var $9 = HEAP[$column_addr];
      var $10 = _Py_BuildValue(__str83, allocate([ $8, 0, 0, 0, $9, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$position] = $10;
      
      
      if (HEAP[$position] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      var $16 = HEAP[HEAP[$error]] - 1;
      
      var $18 = HEAP[$error];
      HEAP[$18] = $16;
      
      
      
      
      if (HEAP[HEAP[$error]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[$error] + 4] + 24];
      var $28 = HEAP[$error];
      FUNCTION_TABLE[$27]($28);
      __label__ = 4;
      break;
     case 4:
      __label__ = 15;
      break;
     case 5:
      var $29 = HEAP[$error];
      var $30 = HEAP[$position];
      var $31 = _PyObject_SetAttrString($29, __str84, $30);
      var $32 = $31 == -1;
      if ($32) {
        __label__ = 6;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 6:
      
      
      
      var $36 = HEAP[HEAP[$error]] - 1;
      
      var $38 = HEAP[$error];
      HEAP[$38] = $36;
      
      
      
      
      if (HEAP[HEAP[$error]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $47 = HEAP[HEAP[HEAP[$error] + 4] + 24];
      var $48 = HEAP[$error];
      FUNCTION_TABLE[$47]($48);
      __label__ = 8;
      break;
     case 8:
      
      
      
      var $52 = HEAP[HEAP[$position]] - 1;
      
      var $54 = HEAP[$position];
      HEAP[$54] = $52;
      
      
      
      
      if (HEAP[HEAP[$position]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $63 = HEAP[HEAP[HEAP[$position] + 4] + 24];
      var $64 = HEAP[$position];
      FUNCTION_TABLE[$63]($64);
      __label__ = 10;
      break;
     case 10:
      __label__ = 15;
      break;
     case 11:
      
      
      
      var $68 = HEAP[HEAP[$position]] - 1;
      
      var $70 = HEAP[$position];
      HEAP[$70] = $68;
      
      
      
      
      if (HEAP[HEAP[$position]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $79 = HEAP[HEAP[HEAP[$position] + 4] + 24];
      var $80 = HEAP[$position];
      FUNCTION_TABLE[$79]($80);
      __label__ = 13;
      break;
     case 13:
      var $81 = HEAP[_elementtree_parseerror_obj];
      var $82 = HEAP[$error];
      _PyErr_SetObject($81, $82);
      
      
      
      var $86 = HEAP[HEAP[$error]] - 1;
      
      var $88 = HEAP[$error];
      HEAP[$88] = $86;
      
      
      
      
      if (HEAP[HEAP[$error]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $97 = HEAP[HEAP[HEAP[$error] + 4] + 24];
      var $98 = HEAP[$error];
      FUNCTION_TABLE[$97]($98);
      __label__ = 15;
      break;
     case 15:
      __label__ = 16;
      break;
     case 16:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _expat_default_handler($self, $data_in, $data_len) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 152;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 152);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $data_in_addr = __stackBase__ + 4;
      var $data_len_addr = __stackBase__ + 8;
      var $key = __stackBase__ + 12;
      var $value = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      var $message = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$data_in_addr] = $data_in;
      HEAP[$data_len_addr] = $data_len;
      
      
      if (HEAP[$data_len_addr] <= 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$data_in_addr]] != 38) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      __label__ = 18;
      break;
     case 3:
      
      var $7 = HEAP[$data_len_addr] - 2;
      
      var $9 = HEAP[$data_in_addr] + 1;
      var $10 = _makestring($9, $7);
      HEAP[$key] = $10;
      
      
      if (HEAP[$key] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      var $15 = HEAP[HEAP[$self_addr] + 16];
      var $16 = HEAP[$key];
      var $17 = _PyDict_GetItem($15, $16);
      HEAP[$value] = $17;
      
      
      if (HEAP[$value] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 5:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 12] + 4] == _TreeBuilder_Type) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $29 = HEAP[HEAP[$self_addr] + 12];
      var $30 = HEAP[$value];
      var $31 = _treebuilder_handle_data($29, $30);
      HEAP[$res] = $31;
      __label__ = 10;
      break;
     case 7:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      var $38 = HEAP[HEAP[$self_addr] + 32];
      var $39 = HEAP[$value];
      var $40 = _PyObject_CallFunction($38, __str85, allocate([ $39, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$res] = $40;
      __label__ = 10;
      break;
     case 9:
      HEAP[$res] = 0;
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
      
      
      
      var $46 = HEAP[HEAP[$res]] - 1;
      
      var $48 = HEAP[$res];
      HEAP[$48] = $46;
      
      
      
      
      if (HEAP[HEAP[$res]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $58 = HEAP[$res];
      FUNCTION_TABLE[$57]($58);
      __label__ = 13;
      break;
     case 13:
      __label__ = 16;
      break;
     case 14:
      var $59 = _PyErr_Occurred();
      
      if ($59 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      var $64 = HEAP[$key] + 20;
      var $message15 = $message;
      var $65 = _sprintf($message15, __str86, allocate([ $64, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      
      var $68 = HEAP[HEAP[_expat_capi] + 28];
      
      
      var $71 = HEAP[HEAP[$self_addr] + 8];
      var $72 = FUNCTION_TABLE[$68]($71);
      
      
      var $75 = HEAP[HEAP[_expat_capi] + 32];
      
      
      var $78 = HEAP[HEAP[$self_addr] + 8];
      var $79 = FUNCTION_TABLE[$75]($78);
      var $message16 = $message;
      _expat_set_error($message16, $79, $72);
      __label__ = 16;
      break;
     case 16:
      
      
      
      var $83 = HEAP[HEAP[$key]] - 1;
      
      var $85 = HEAP[$key];
      HEAP[$85] = $83;
      
      
      
      
      if (HEAP[HEAP[$key]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $94 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $95 = HEAP[$key];
      FUNCTION_TABLE[$94]($95);
      __label__ = 18;
      break;
     case 18:
      __label__ = 19;
      break;
     case 19:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _expat_start_handler($self, $tag_in, $attrib_in) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $tag_in_addr = __stackBase__ + 4;
      var $attrib_in_addr = __stackBase__ + 8;
      var $res = __stackBase__ + 12;
      var $tag = __stackBase__ + 16;
      var $attrib = __stackBase__ + 20;
      var $ok = __stackBase__ + 24;
      var $key = __stackBase__ + 28;
      var $value = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$tag_in_addr] = $tag_in;
      HEAP[$attrib_in_addr] = $attrib_in;
      var $0 = HEAP[$self_addr];
      var $1 = HEAP[$tag_in_addr];
      var $2 = _makeuniversal($0, $1);
      HEAP[$tag] = $2;
      
      
      if (HEAP[$tag] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$attrib_in_addr]] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 2:
      var $9 = _PyDict_New();
      HEAP[$attrib] = $9;
      
      
      if (HEAP[$attrib] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      __label__ = 24;
      break;
     case 4:
      
      
      var $14 = HEAP[HEAP[$attrib_in_addr]];
      var $15 = HEAP[$self_addr];
      var $16 = _makeuniversal($15, $14);
      HEAP[$key] = $16;
      
      
      var $19 = HEAP[HEAP[$attrib_in_addr] + 4];
      var $20 = _strlen($19);
      
      
      var $23 = HEAP[HEAP[$attrib_in_addr] + 4];
      var $24 = _makestring($23, $20);
      HEAP[$value] = $24;
      
      
      if (HEAP[$key] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      if (HEAP[$value] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 6:
      
      
      if (HEAP[$value] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      var $34 = HEAP[HEAP[$value]] - 1;
      
      var $36 = HEAP[$value];
      HEAP[$36] = $34;
      
      
      
      
      if (HEAP[HEAP[$value]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $45 = HEAP[HEAP[HEAP[$value] + 4] + 24];
      var $46 = HEAP[$value];
      FUNCTION_TABLE[$45]($46);
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$key] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      var $52 = HEAP[HEAP[$key]] - 1;
      
      var $54 = HEAP[$key];
      HEAP[$54] = $52;
      
      
      
      
      if (HEAP[HEAP[$key]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $63 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $64 = HEAP[$key];
      FUNCTION_TABLE[$63]($64);
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $68 = HEAP[HEAP[$attrib]] - 1;
      
      var $70 = HEAP[$attrib];
      HEAP[$70] = $68;
      
      
      
      
      if (HEAP[HEAP[$attrib]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $79 = HEAP[HEAP[HEAP[$attrib] + 4] + 24];
      var $80 = HEAP[$attrib];
      FUNCTION_TABLE[$79]($80);
      __label__ = 14;
      break;
     case 14:
      __label__ = 44;
      break;
     case 15:
      var $81 = HEAP[$attrib];
      var $82 = HEAP[$key];
      var $83 = HEAP[$value];
      var $84 = _PyDict_SetItem($81, $82, $83);
      HEAP[$ok] = $84;
      
      
      
      var $88 = HEAP[HEAP[$value]] - 1;
      
      var $90 = HEAP[$value];
      HEAP[$90] = $88;
      
      
      
      
      if (HEAP[HEAP[$value]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $99 = HEAP[HEAP[HEAP[$value] + 4] + 24];
      var $100 = HEAP[$value];
      FUNCTION_TABLE[$99]($100);
      __label__ = 17;
      break;
     case 17:
      
      
      
      var $104 = HEAP[HEAP[$key]] - 1;
      
      var $106 = HEAP[$key];
      HEAP[$106] = $104;
      
      
      
      
      if (HEAP[HEAP[$key]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $115 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $116 = HEAP[$key];
      FUNCTION_TABLE[$115]($116);
      __label__ = 19;
      break;
     case 19:
      
      
      if (HEAP[$ok] < 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      
      
      
      var $122 = HEAP[HEAP[$attrib]] - 1;
      
      var $124 = HEAP[$attrib];
      HEAP[$124] = $122;
      
      
      
      
      if (HEAP[HEAP[$attrib]] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $133 = HEAP[HEAP[HEAP[$attrib] + 4] + 24];
      var $134 = HEAP[$attrib];
      FUNCTION_TABLE[$133]($134);
      __label__ = 22;
      break;
     case 22:
      __label__ = 44;
      break;
     case 23:
      
      var $136 = HEAP[$attrib_in_addr] + 8;
      HEAP[$attrib_in_addr] = $136;
      __label__ = 24;
      break;
     case 24:
      
      
      
      
      if (HEAP[HEAP[$attrib_in_addr]] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      if (HEAP[HEAP[$attrib_in_addr] + 4] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      __label__ = 28;
      break;
     case 27:
      
      var $146 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $146;
      HEAP[$attrib] = __Py_NoneStruct;
      __label__ = 28;
      break;
     case 28:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 12] + 4] == _TreeBuilder_Type) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      var $156 = HEAP[HEAP[$self_addr] + 12];
      var $157 = HEAP[$tag];
      var $158 = HEAP[$attrib];
      var $159 = _treebuilder_handle_start($156, $157, $158);
      HEAP[$res] = $159;
      __label__ = 37;
      break;
     case 30:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 31:
      
      
      if (HEAP[$attrib] == __Py_NoneStruct) {
        __label__ = 32;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 32:
      
      
      
      var $169 = HEAP[HEAP[$attrib]] - 1;
      
      var $171 = HEAP[$attrib];
      HEAP[$171] = $169;
      
      
      
      
      if (HEAP[HEAP[$attrib]] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $180 = HEAP[HEAP[HEAP[$attrib] + 4] + 24];
      var $181 = HEAP[$attrib];
      FUNCTION_TABLE[$180]($181);
      __label__ = 34;
      break;
     case 34:
      var $182 = _PyDict_New();
      HEAP[$attrib] = $182;
      
      
      if (HEAP[$attrib] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      var $187 = HEAP[HEAP[$self_addr] + 28];
      var $188 = HEAP[$tag];
      var $189 = HEAP[$attrib];
      var $190 = _PyObject_CallFunction($187, __str68, allocate([ $188, 0, 0, 0, $189, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$res] = $190;
      __label__ = 37;
      break;
     case 36:
      HEAP[$res] = 0;
      __label__ = 37;
      break;
     case 37:
      
      
      
      var $194 = HEAP[HEAP[$tag]] - 1;
      
      var $196 = HEAP[$tag];
      HEAP[$196] = $194;
      
      
      
      
      if (HEAP[HEAP[$tag]] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      var $205 = HEAP[HEAP[HEAP[$tag] + 4] + 24];
      var $206 = HEAP[$tag];
      FUNCTION_TABLE[$205]($206);
      __label__ = 39;
      break;
     case 39:
      
      
      
      var $210 = HEAP[HEAP[$attrib]] - 1;
      
      var $212 = HEAP[$attrib];
      HEAP[$212] = $210;
      
      
      
      
      if (HEAP[HEAP[$attrib]] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      
      
      var $221 = HEAP[HEAP[HEAP[$attrib] + 4] + 24];
      var $222 = HEAP[$attrib];
      FUNCTION_TABLE[$221]($222);
      __label__ = 41;
      break;
     case 41:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 42:
      
      
      
      var $228 = HEAP[HEAP[$res]] - 1;
      
      var $230 = HEAP[$res];
      HEAP[$230] = $228;
      
      
      
      
      if (HEAP[HEAP[$res]] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      
      
      var $239 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $240 = HEAP[$res];
      FUNCTION_TABLE[$239]($240);
      __label__ = 44;
      break;
     case 44:
      __label__ = 45;
      break;
     case 45:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _expat_data_handler($self, $data_in, $data_len) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $data_in_addr = __stackBase__ + 4;
      var $data_len_addr = __stackBase__ + 8;
      var $data = __stackBase__ + 12;
      var $res = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$data_in_addr] = $data_in;
      HEAP[$data_len_addr] = $data_len;
      var $0 = HEAP[$data_in_addr];
      var $1 = HEAP[$data_len_addr];
      var $2 = _makestring($0, $1);
      HEAP[$data] = $2;
      
      
      if (HEAP[$data] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 12] + 4] == _TreeBuilder_Type) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $14 = HEAP[HEAP[$self_addr] + 12];
      var $15 = HEAP[$data];
      var $16 = _treebuilder_handle_data($14, $15);
      HEAP[$res] = $16;
      __label__ = 6;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $23 = HEAP[HEAP[$self_addr] + 32];
      var $24 = HEAP[$data];
      var $25 = _PyObject_CallFunction($23, __str85, allocate([ $24, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$res] = $25;
      __label__ = 6;
      break;
     case 5:
      HEAP[$res] = 0;
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $29 = HEAP[HEAP[$data]] - 1;
      
      var $31 = HEAP[$data];
      HEAP[$31] = $29;
      
      
      
      
      if (HEAP[HEAP[$data]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $40 = HEAP[HEAP[HEAP[$data] + 4] + 24];
      var $41 = HEAP[$data];
      FUNCTION_TABLE[$40]($41);
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      var $47 = HEAP[HEAP[$res]] - 1;
      
      var $49 = HEAP[$res];
      HEAP[$49] = $47;
      
      
      
      
      if (HEAP[HEAP[$res]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $58 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $59 = HEAP[$res];
      FUNCTION_TABLE[$58]($59);
      __label__ = 11;
      break;
     case 11:
      __label__ = 12;
      break;
     case 12:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _expat_end_handler($self, $tag_in) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $tag_in_addr = __stackBase__ + 4;
      var $tag = __stackBase__ + 8;
      var $res = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$tag_in_addr] = $tag_in;
      HEAP[$res] = 0;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 12] + 4] == _TreeBuilder_Type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[HEAP[$self_addr] + 12];
      var $10 = _treebuilder_handle_end($9, __Py_NoneStruct);
      HEAP[$res] = $10;
      __label__ = 6;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 36] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      var $15 = HEAP[$self_addr];
      var $16 = HEAP[$tag_in_addr];
      var $17 = _makeuniversal($15, $16);
      HEAP[$tag] = $17;
      
      
      if (HEAP[$tag] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $22 = HEAP[HEAP[$self_addr] + 36];
      var $23 = HEAP[$tag];
      var $24 = _PyObject_CallFunction($22, __str85, allocate([ $23, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$res] = $24;
      
      
      
      var $28 = HEAP[HEAP[$tag]] - 1;
      
      var $30 = HEAP[$tag];
      HEAP[$30] = $28;
      
      
      
      
      if (HEAP[HEAP[$tag]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $39 = HEAP[HEAP[HEAP[$tag] + 4] + 24];
      var $40 = HEAP[$tag];
      FUNCTION_TABLE[$39]($40);
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      var $46 = HEAP[HEAP[$res]] - 1;
      
      var $48 = HEAP[$res];
      HEAP[$48] = $46;
      
      
      
      
      if (HEAP[HEAP[$res]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $58 = HEAP[$res];
      FUNCTION_TABLE[$57]($58);
      __label__ = 9;
      break;
     case 9:
      __label__ = 10;
      break;
     case 10:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _expat_start_ns_handler($self, $prefix, $uri) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $prefix_addr = __stackBase__ + 4;
      var $uri_addr = __stackBase__ + 8;
      var $sprefix = __stackBase__ + 12;
      var $suri = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$prefix_addr] = $prefix;
      HEAP[$uri_addr] = $uri;
      HEAP[$sprefix] = 0;
      HEAP[$suri] = 0;
      var $0 = HEAP[$uri_addr];
      var $1 = _strlen($0);
      var $2 = HEAP[$uri_addr];
      var $3 = _makestring($2, $1);
      HEAP[$suri] = $3;
      
      
      if (HEAP[$suri] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$prefix_addr] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $8 = HEAP[$prefix_addr];
      var $9 = _strlen($8);
      var $10 = HEAP[$prefix_addr];
      var $11 = _makestring($10, $9);
      HEAP[$sprefix] = $11;
      __label__ = 4;
      break;
     case 3:
      var $12 = _PyString_FromStringAndSize(__str1, 0);
      HEAP[$sprefix] = $12;
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[$sprefix] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $18 = HEAP[HEAP[$suri]] - 1;
      
      var $20 = HEAP[$suri];
      HEAP[$20] = $18;
      
      
      
      
      if (HEAP[HEAP[$suri]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $29 = HEAP[HEAP[HEAP[$suri] + 4] + 24];
      var $30 = HEAP[$suri];
      FUNCTION_TABLE[$29]($30);
      __label__ = 7;
      break;
     case 7:
      __label__ = 12;
      break;
     case 8:
      
      
      
      var $34 = HEAP[HEAP[$self_addr] + 12];
      var $35 = HEAP[$sprefix];
      var $36 = HEAP[$suri];
      _treebuilder_handle_namespace($34, 1, $35, $36);
      
      
      
      var $40 = HEAP[HEAP[$sprefix]] - 1;
      
      var $42 = HEAP[$sprefix];
      HEAP[$42] = $40;
      
      
      
      
      if (HEAP[HEAP[$sprefix]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $51 = HEAP[HEAP[HEAP[$sprefix] + 4] + 24];
      var $52 = HEAP[$sprefix];
      FUNCTION_TABLE[$51]($52);
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $56 = HEAP[HEAP[$suri]] - 1;
      
      var $58 = HEAP[$suri];
      HEAP[$58] = $56;
      
      
      
      
      if (HEAP[HEAP[$suri]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[$suri] + 4] + 24];
      var $68 = HEAP[$suri];
      FUNCTION_TABLE[$67]($68);
      __label__ = 12;
      break;
     case 12:
      __label__ = 13;
      break;
     case 13:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _expat_end_ns_handler($self, $prefix_in) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $prefix_in_addr = __stackBase__ + 4;
      
      HEAP[$self_addr] = $self;
      HEAP[$prefix_in_addr] = $prefix_in;
      
      
      
      var $3 = HEAP[HEAP[$self_addr] + 12];
      _treebuilder_handle_namespace($3, 0, 0, 0);
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _expat_comment_handler($self, $comment_in) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $comment_in_addr = __stackBase__ + 4;
      var $comment = __stackBase__ + 8;
      var $res = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$comment_in_addr] = $comment_in;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      var $4 = HEAP[$comment_in_addr];
      var $5 = _strlen($4);
      var $6 = HEAP[$comment_in_addr];
      var $7 = _makestring($6, $5);
      HEAP[$comment] = $7;
      
      
      if (HEAP[$comment] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 2:
      
      
      var $12 = HEAP[HEAP[$self_addr] + 40];
      var $13 = HEAP[$comment];
      var $14 = _PyObject_CallFunction($12, __str85, allocate([ $13, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$res] = $14;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      var $20 = HEAP[HEAP[$res]] - 1;
      
      var $22 = HEAP[$res];
      HEAP[$22] = $20;
      
      
      
      
      if (HEAP[HEAP[$res]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $31 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $32 = HEAP[$res];
      FUNCTION_TABLE[$31]($32);
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $36 = HEAP[HEAP[$comment]] - 1;
      
      var $38 = HEAP[$comment];
      HEAP[$38] = $36;
      
      
      
      
      if (HEAP[HEAP[$comment]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $47 = HEAP[HEAP[HEAP[$comment] + 4] + 24];
      var $48 = HEAP[$comment];
      FUNCTION_TABLE[$47]($48);
      __label__ = 7;
      break;
     case 7:
      __label__ = 8;
      break;
     case 8:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _expat_pi_handler($self, $target_in, $data_in) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $target_in_addr = __stackBase__ + 4;
      var $data_in_addr = __stackBase__ + 8;
      var $target = __stackBase__ + 12;
      var $data = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$target_in_addr] = $target_in;
      HEAP[$data_in_addr] = $data_in;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 1:
      var $4 = HEAP[$target_in_addr];
      var $5 = _strlen($4);
      var $6 = HEAP[$target_in_addr];
      var $7 = _makestring($6, $5);
      HEAP[$target] = $7;
      var $8 = HEAP[$data_in_addr];
      var $9 = _strlen($8);
      var $10 = HEAP[$data_in_addr];
      var $11 = _makestring($10, $9);
      HEAP[$data] = $11;
      
      
      if (HEAP[$target] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$data] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $18 = HEAP[HEAP[$self_addr] + 44];
      var $19 = HEAP[$target];
      var $20 = HEAP[$data];
      var $21 = _PyObject_CallFunction($18, __str68, allocate([ $19, 0, 0, 0, $20, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$res] = $21;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      var $27 = HEAP[HEAP[$res]] - 1;
      
      var $29 = HEAP[$res];
      HEAP[$29] = $27;
      
      
      
      
      if (HEAP[HEAP[$res]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $39 = HEAP[$res];
      FUNCTION_TABLE[$38]($39);
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $43 = HEAP[HEAP[$data]] - 1;
      
      var $45 = HEAP[$data];
      HEAP[$45] = $43;
      
      
      
      
      if (HEAP[HEAP[$data]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$data] + 4] + 24];
      var $55 = HEAP[$data];
      FUNCTION_TABLE[$54]($55);
      __label__ = 8;
      break;
     case 8:
      
      
      
      var $59 = HEAP[HEAP[$target]] - 1;
      
      var $61 = HEAP[$target];
      HEAP[$61] = $59;
      
      
      
      
      if (HEAP[HEAP[$target]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $70 = HEAP[HEAP[HEAP[$target] + 4] + 24];
      var $71 = HEAP[$target];
      FUNCTION_TABLE[$70]($71);
      __label__ = 10;
      break;
     case 10:
      __label__ = 17;
      break;
     case 11:
      
      
      if (HEAP[$data] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      
      var $77 = HEAP[HEAP[$data]] - 1;
      
      var $79 = HEAP[$data];
      HEAP[$79] = $77;
      
      
      
      
      if (HEAP[HEAP[$data]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $88 = HEAP[HEAP[HEAP[$data] + 4] + 24];
      var $89 = HEAP[$data];
      FUNCTION_TABLE[$88]($89);
      __label__ = 14;
      break;
     case 14:
      
      
      if (HEAP[$target] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      var $95 = HEAP[HEAP[$target]] - 1;
      
      var $97 = HEAP[$target];
      HEAP[$97] = $95;
      
      
      
      
      if (HEAP[HEAP[$target]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $106 = HEAP[HEAP[HEAP[$target] + 4] + 24];
      var $107 = HEAP[$target];
      FUNCTION_TABLE[$106]($107);
      __label__ = 17;
      break;
     case 17:
      __label__ = 18;
      break;
     case 18:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _expat_unknown_encoding_handler($self, $name, $info) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 288;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 288);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $name_addr = __stackBase__ + 4;
      var $info_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $u = __stackBase__ + 20;
      var $p = __stackBase__ + 24;
      var $s = __stackBase__ + 28;
      var $i = __stackBase__ + 284;
      
      HEAP[__stackBase__] = $self;
      HEAP[$name_addr] = $name;
      HEAP[$info_addr] = $info;
      
      var $2 = HEAP[$info_addr];
      _llvm_memset_p0i8_i32($2, 0, 1036, 1, 0);
      HEAP[$i] = 0;
      __label__ = 2;
      break;
     case 1:
      
      
      var $5 = HEAP[$i] & 255;
      var $6 = $s + HEAP[$i];
      HEAP[$6] = $5;
      
      var $8 = HEAP[$i] + 1;
      HEAP[$i] = $8;
      __label__ = 2;
      break;
     case 2:
      
      
      if (HEAP[$i] <= 255) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $s3 = $s;
      var $11 = HEAP[$name_addr];
      var $12 = _PyUnicodeUCS2_Decode($s3, 256, $11, __str87);
      HEAP[$u] = $12;
      
      
      if (HEAP[$u] == 0) {
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
      
      
      
      
      
      if (HEAP[HEAP[$u] + 8] != 256) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $23 = HEAP[HEAP[$u]] - 1;
      
      var $25 = HEAP[$u];
      HEAP[$25] = $23;
      
      
      
      
      if (HEAP[HEAP[$u]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $34 = HEAP[HEAP[HEAP[$u] + 4] + 24];
      var $35 = HEAP[$u];
      FUNCTION_TABLE[$34]($35);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 9:
      
      
      
      var $39 = HEAP[HEAP[$u] + 12];
      HEAP[$p] = $39;
      HEAP[$i] = 0;
      __label__ = 14;
      break;
     case 10:
      
      
      
      
      var $44 = HEAP[HEAP[$p] + 2 * HEAP[$i]] != -3;
      if ($44) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      var $50 = HEAP[HEAP[$p] + 2 * HEAP[$i]];
      
      
      var $53 = HEAP[$info_addr] + HEAP[$i] * 4;
      HEAP[$53] = $50;
      __label__ = 13;
      break;
     case 12:
      
      
      
      var $57 = HEAP[$info_addr] + HEAP[$i] * 4;
      HEAP[$57] = -1;
      __label__ = 13;
      break;
     case 13:
      
      var $59 = HEAP[$i] + 1;
      HEAP[$i] = $59;
      __label__ = 14;
      break;
     case 14:
      
      
      if (HEAP[$i] <= 255) {
        __label__ = 10;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      var $65 = HEAP[HEAP[$u]] - 1;
      
      var $67 = HEAP[$u];
      HEAP[$67] = $65;
      
      
      
      
      if (HEAP[HEAP[$u]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $76 = HEAP[HEAP[HEAP[$u] + 4] + 24];
      var $77 = HEAP[$u];
      FUNCTION_TABLE[$76]($77);
      __label__ = 17;
      break;
     case 17:
      HEAP[$0] = 1;
      __label__ = 18;
      break;
     case 18:
      var $78 = HEAP[$0];
      HEAP[$retval] = $78;
      __label__ = 19;
      break;
     case 19:
      var $retval20 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _xmlparser($self_, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $self = __stackBase__ + 20;
      var $target = __stackBase__ + 24;
      var $encoding = __stackBase__ + 28;
      
      HEAP[__stackBase__] = $self_;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$target] = 0;
      HEAP[$encoding] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kw_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str88, _kwlist_12155, allocate([ $target, 0, 0, 0, $encoding, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[_expat_capi] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $7 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($7, __str91);
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 4:
      var $8 = __PyObject_New(_XMLParser_Type);
      
      HEAP[$self] = $8;
      
      
      if (HEAP[$self] == 0) {
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
      var $12 = _PyDict_New();
      
      var $14 = HEAP[$self] + 16;
      HEAP[$14] = $12;
      
      
      
      
      if (HEAP[HEAP[$self] + 16] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      var $20 = HEAP[$self];
      _PyObject_Free($20);
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 8:
      var $21 = _PyDict_New();
      
      var $23 = HEAP[$self] + 20;
      HEAP[$23] = $21;
      
      
      
      
      if (HEAP[HEAP[$self] + 20] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      var $31 = HEAP[HEAP[$self] + 16];
      _PyObject_Free($31);
      
      var $33 = HEAP[$self];
      _PyObject_Free($33);
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 10:
      HEAP[_memory_handler_12152] = FUNCTION_TABLE_OFFSET + 2;
      HEAP[_memory_handler_12152 + 4] = FUNCTION_TABLE_OFFSET + 4;
      HEAP[_memory_handler_12152 + 8] = FUNCTION_TABLE_OFFSET + 6;
      
      
      var $36 = HEAP[HEAP[_expat_capi] + 40];
      var $37 = HEAP[$encoding];
      var $38 = FUNCTION_TABLE[$36]($37, _memory_handler_12152, __str92);
      
      var $40 = HEAP[$self] + 8;
      HEAP[$40] = $38;
      
      
      
      
      if (HEAP[HEAP[$self] + 8] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      var $48 = HEAP[HEAP[$self] + 20];
      _PyObject_Free($48);
      
      
      
      var $52 = HEAP[HEAP[$self] + 16];
      _PyObject_Free($52);
      
      var $54 = HEAP[$self];
      _PyObject_Free($54);
      var $55 = _PyErr_NoMemory();
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 12:
      
      
      if (HEAP[$target] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      var $58 = _treebuilder_new();
      HEAP[$target] = $58;
      
      
      if (HEAP[$target] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      var $63 = HEAP[HEAP[_expat_capi] + 44];
      
      
      var $66 = HEAP[HEAP[$self] + 8];
      FUNCTION_TABLE[$63]($66);
      
      
      
      var $70 = HEAP[HEAP[$self] + 20];
      _PyObject_Free($70);
      
      
      
      var $74 = HEAP[HEAP[$self] + 16];
      _PyObject_Free($74);
      
      var $76 = HEAP[$self];
      _PyObject_Free($76);
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 15:
      __label__ = 17;
      break;
     case 16:
      
      
      
      var $80 = HEAP[HEAP[$target]] + 1;
      var $81 = HEAP[$target];
      HEAP[$81] = $80;
      __label__ = 17;
      break;
     case 17:
      var $82 = HEAP[$target];
      
      var $84 = HEAP[$self] + 12;
      HEAP[$84] = $82;
      var $85 = HEAP[$target];
      var $86 = _PyObject_GetAttrString($85, __str77);
      
      var $88 = HEAP[$self] + 24;
      HEAP[$88] = $86;
      var $89 = HEAP[$target];
      var $90 = _PyObject_GetAttrString($89, __str75);
      
      var $92 = HEAP[$self] + 28;
      HEAP[$92] = $90;
      var $93 = HEAP[$target];
      var $94 = _PyObject_GetAttrString($93, __str74);
      
      var $96 = HEAP[$self] + 32;
      HEAP[$96] = $94;
      var $97 = HEAP[$target];
      var $98 = _PyObject_GetAttrString($97, __str76);
      
      var $100 = HEAP[$self] + 36;
      HEAP[$100] = $98;
      var $101 = HEAP[$target];
      var $102 = _PyObject_GetAttrString($101, __str93);
      
      var $104 = HEAP[$self] + 40;
      HEAP[$104] = $102;
      var $105 = HEAP[$target];
      var $106 = _PyObject_GetAttrString($105, __str94);
      
      var $108 = HEAP[$self] + 44;
      HEAP[$108] = $106;
      var $109 = HEAP[$target];
      var $110 = _PyObject_GetAttrString($109, __str78);
      
      var $112 = HEAP[$self] + 48;
      HEAP[$112] = $110;
      _PyErr_Clear();
      
      
      var $115 = HEAP[HEAP[_expat_capi] + 76];
      
      
      var $118 = HEAP[HEAP[$self] + 8];
      
      var $120 = HEAP[$self];
      FUNCTION_TABLE[$115]($118, $120);
      
      
      var $123 = HEAP[HEAP[_expat_capi] + 60];
      
      
      var $126 = HEAP[HEAP[$self] + 8];
      FUNCTION_TABLE[$123]($126, FUNCTION_TABLE_OFFSET + 8, FUNCTION_TABLE_OFFSET + 10);
      
      
      var $129 = HEAP[HEAP[_expat_capi] + 56];
      
      
      var $132 = HEAP[HEAP[$self] + 8];
      FUNCTION_TABLE[$129]($132, FUNCTION_TABLE_OFFSET + 12);
      
      
      var $135 = HEAP[HEAP[_expat_capi] + 48];
      
      
      var $138 = HEAP[HEAP[$self] + 8];
      FUNCTION_TABLE[$135]($138, FUNCTION_TABLE_OFFSET + 14);
      
      
      
      
      if (HEAP[HEAP[$self] + 40] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      var $145 = HEAP[HEAP[_expat_capi] + 52];
      
      
      var $148 = HEAP[HEAP[$self] + 8];
      FUNCTION_TABLE[$145]($148, FUNCTION_TABLE_OFFSET + 16);
      __label__ = 19;
      break;
     case 19:
      
      
      
      
      if (HEAP[HEAP[$self] + 44] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      var $155 = HEAP[HEAP[_expat_capi] + 68];
      
      
      var $158 = HEAP[HEAP[$self] + 8];
      FUNCTION_TABLE[$155]($158, FUNCTION_TABLE_OFFSET + 18);
      __label__ = 21;
      break;
     case 21:
      
      
      var $161 = HEAP[HEAP[_expat_capi] + 72];
      
      
      var $164 = HEAP[HEAP[$self] + 8];
      FUNCTION_TABLE[$161]($164, FUNCTION_TABLE_OFFSET + 20, 0);
      
      var $166 = HEAP[$self];
      HEAP[$0] = $166;
      __label__ = 22;
      break;
     case 22:
      var $167 = HEAP[$0];
      HEAP[$retval] = $167;
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
  function _xmlparser_dealloc($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      
      HEAP[$self_addr] = $self;
      
      
      var $2 = HEAP[HEAP[_expat_capi] + 44];
      
      
      var $5 = HEAP[HEAP[$self_addr] + 8];
      FUNCTION_TABLE[$2]($5);
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 48] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $12 = HEAP[HEAP[$self_addr] + 48];
      
      
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
      
      
      
      
      
      
      var $26 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 48] + 4] + 24];
      
      
      var $29 = HEAP[HEAP[$self_addr] + 48];
      FUNCTION_TABLE[$26]($29);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $36 = HEAP[HEAP[$self_addr] + 44];
      
      
      var $39 = HEAP[$36] - 1;
      var $40 = $36;
      HEAP[$40] = $39;
      
      
      
      if (HEAP[$36] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $50 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 44] + 4] + 24];
      
      
      var $53 = HEAP[HEAP[$self_addr] + 44];
      FUNCTION_TABLE[$50]($53);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $60 = HEAP[HEAP[$self_addr] + 40];
      
      
      var $63 = HEAP[$60] - 1;
      var $64 = $60;
      HEAP[$64] = $63;
      
      
      
      if (HEAP[$60] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $74 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 40] + 4] + 24];
      
      
      var $77 = HEAP[HEAP[$self_addr] + 40];
      FUNCTION_TABLE[$74]($77);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 36] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $84 = HEAP[HEAP[$self_addr] + 36];
      
      
      var $87 = HEAP[$84] - 1;
      var $88 = $84;
      HEAP[$88] = $87;
      
      
      
      if (HEAP[$84] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      var $98 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 36] + 4] + 24];
      
      
      var $101 = HEAP[HEAP[$self_addr] + 36];
      FUNCTION_TABLE[$98]($101);
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      var $108 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $111 = HEAP[$108] - 1;
      var $112 = $108;
      HEAP[$112] = $111;
      
      
      
      if (HEAP[$108] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      
      var $122 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 4] + 24];
      
      
      var $125 = HEAP[HEAP[$self_addr] + 32];
      FUNCTION_TABLE[$122]($125);
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      var $132 = HEAP[HEAP[$self_addr] + 28];
      
      
      var $135 = HEAP[$132] - 1;
      var $136 = $132;
      HEAP[$136] = $135;
      
      
      
      if (HEAP[$132] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      
      var $146 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 28] + 4] + 24];
      
      
      var $149 = HEAP[HEAP[$self_addr] + 28];
      FUNCTION_TABLE[$146]($149);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $156 = HEAP[HEAP[$self_addr] + 24];
      
      
      var $159 = HEAP[$156] - 1;
      var $160 = $156;
      HEAP[$160] = $159;
      
      
      
      if (HEAP[$156] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      
      
      var $170 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 24] + 4] + 24];
      
      
      var $173 = HEAP[HEAP[$self_addr] + 24];
      FUNCTION_TABLE[$170]($173);
      __label__ = 21;
      break;
     case 21:
      
      
      var $176 = HEAP[HEAP[$self_addr] + 12];
      
      
      var $179 = HEAP[$176] - 1;
      var $180 = $176;
      HEAP[$180] = $179;
      
      
      
      if (HEAP[$176] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      
      
      var $190 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 12] + 4] + 24];
      
      
      var $193 = HEAP[HEAP[$self_addr] + 12];
      FUNCTION_TABLE[$190]($193);
      __label__ = 23;
      break;
     case 23:
      
      
      var $196 = HEAP[HEAP[$self_addr] + 16];
      
      
      var $199 = HEAP[$196] - 1;
      var $200 = $196;
      HEAP[$200] = $199;
      
      
      
      if (HEAP[$196] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      
      
      var $210 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 16] + 4] + 24];
      
      
      var $213 = HEAP[HEAP[$self_addr] + 16];
      FUNCTION_TABLE[$210]($213);
      __label__ = 25;
      break;
     case 25:
      
      
      var $216 = HEAP[HEAP[$self_addr] + 20];
      
      
      var $219 = HEAP[$216] - 1;
      var $220 = $216;
      HEAP[$220] = $219;
      
      
      
      if (HEAP[$216] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      
      
      var $230 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 4] + 24];
      
      
      var $233 = HEAP[HEAP[$self_addr] + 20];
      FUNCTION_TABLE[$230]($233);
      __label__ = 27;
      break;
     case 27:
      
      var $235 = HEAP[$self_addr];
      _PyObject_Free($235);
      __label__ = 28;
      break;
     case 28:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _expat_parse($self, $data, $data_len, $final) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $data_addr = __stackBase__ + 4;
      var $data_len_addr = __stackBase__ + 8;
      var $final_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $ok = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$data_addr] = $data;
      HEAP[$data_len_addr] = $data_len;
      HEAP[$final_addr] = $final;
      
      
      var $3 = HEAP[HEAP[_expat_capi] + 36];
      
      
      var $6 = HEAP[HEAP[$self_addr] + 8];
      var $7 = HEAP[$data_addr];
      var $8 = HEAP[$data_len_addr];
      var $9 = HEAP[$final_addr];
      var $10 = FUNCTION_TABLE[$3]($6, $7, $8, $9);
      HEAP[$ok] = $10;
      var $11 = _PyErr_Occurred();
      
      if ($11 != 0) {
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
      
      
      if (HEAP[$ok] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $17 = HEAP[HEAP[_expat_capi] + 28];
      
      
      var $20 = HEAP[HEAP[$self_addr] + 8];
      var $21 = FUNCTION_TABLE[$17]($20);
      
      
      var $24 = HEAP[HEAP[_expat_capi] + 32];
      
      
      var $27 = HEAP[HEAP[$self_addr] + 8];
      var $28 = FUNCTION_TABLE[$24]($27);
      
      
      var $31 = HEAP[HEAP[_expat_capi] + 20];
      
      
      var $34 = HEAP[HEAP[_expat_capi] + 24];
      
      
      var $37 = HEAP[HEAP[$self_addr] + 8];
      var $38 = FUNCTION_TABLE[$34]($37);
      var $39 = FUNCTION_TABLE[$31]($38);
      _expat_set_error($39, $28, $21);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      
      var $41 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $41;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 5;
      break;
     case 5:
      var $42 = HEAP[$0];
      HEAP[$retval] = $42;
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
  function _xmlparser_close($self, $args) {
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
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $res = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str71, allocate(1, "i32", ALLOC_STACK));
      
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
      var $4 = HEAP[$self_addr];
      var $5 = _expat_parse($4, __str1, 0, 1);
      HEAP[$res] = $5;
      
      
      if (HEAP[$res] == 0) {
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
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 12] + 4] == _TreeBuilder_Type) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $17 = HEAP[HEAP[$res]] - 1;
      
      var $19 = HEAP[$res];
      HEAP[$19] = $17;
      
      
      
      
      if (HEAP[HEAP[$res]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $28 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $29 = HEAP[$res];
      FUNCTION_TABLE[$28]($29);
      __label__ = 7;
      break;
     case 7:
      
      
      
      var $33 = HEAP[HEAP[$self_addr] + 12];
      var $34 = _treebuilder_done($33);
      HEAP[$0] = $34;
      __label__ = 13;
      break;
     case 8:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 48] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      var $42 = HEAP[HEAP[$res]] - 1;
      
      var $44 = HEAP[$res];
      HEAP[$44] = $42;
      
      
      
      
      if (HEAP[HEAP[$res]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $53 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $54 = HEAP[$res];
      FUNCTION_TABLE[$53]($54);
      __label__ = 11;
      break;
     case 11:
      
      
      var $57 = HEAP[HEAP[$self_addr] + 48];
      var $58 = _PyObject_CallFunction($57, __str1, allocate(1, "i32", ALLOC_STACK));
      HEAP[$0] = $58;
      __label__ = 13;
      break;
     case 12:
      var $59 = HEAP[$res];
      HEAP[$0] = $59;
      __label__ = 13;
      break;
     case 13:
      var $60 = HEAP[$0];
      HEAP[$retval] = $60;
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
  function _xmlparser_feed($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $data = __stackBase__ + 16;
      var $data_len = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str95, allocate([ $data, 0, 0, 0, $data_len, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$data_len];
      var $5 = HEAP[$data];
      var $6 = HEAP[$self_addr];
      var $7 = _expat_parse($6, $5, $4, 0);
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
  function _xmlparser_parse($self, $args) {
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
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $reader = __stackBase__ + 16;
      var $buffer = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      var $fileobj = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str96, allocate([ $fileobj, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$fileobj];
      var $5 = _PyObject_GetAttrString($4, __str97);
      HEAP[$reader] = $5;
      
      
      if (HEAP[$reader] == 0) {
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
      var $8 = HEAP[$reader];
      var $9 = _PyObject_CallFunction($8, __str98, allocate([ 65536, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$buffer] = $9;
      
      
      if (HEAP[$buffer] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $15 = HEAP[HEAP[$reader]] - 1;
      
      var $17 = HEAP[$reader];
      HEAP[$17] = $15;
      
      
      
      
      if (HEAP[HEAP[$reader]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $26 = HEAP[HEAP[HEAP[$reader] + 4] + 24];
      var $27 = HEAP[$reader];
      FUNCTION_TABLE[$26]($27);
      __label__ = 7;
      break;
     case 7:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 8:
      
      
      
      
      if (HEAP[HEAP[$buffer] + 4] != _PyString_Type) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      if (HEAP[HEAP[$buffer] + 8] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      var $40 = HEAP[HEAP[$buffer]] - 1;
      
      var $42 = HEAP[$buffer];
      HEAP[$42] = $40;
      
      
      
      
      if (HEAP[HEAP[$buffer]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $51 = HEAP[HEAP[HEAP[$buffer] + 4] + 24];
      var $52 = HEAP[$buffer];
      FUNCTION_TABLE[$51]($52);
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $56 = HEAP[HEAP[$reader]] - 1;
      
      var $58 = HEAP[$reader];
      HEAP[$58] = $56;
      
      
      
      
      if (HEAP[HEAP[$reader]] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 13:
      
      
      
      var $66 = HEAP[HEAP[$buffer] + 8];
      
      
      
      var $70 = HEAP[$buffer] + 20;
      var $71 = HEAP[$self_addr];
      var $72 = _expat_parse($71, $70, $66, 0);
      HEAP[$res] = $72;
      
      
      
      var $76 = HEAP[HEAP[$buffer]] - 1;
      
      var $78 = HEAP[$buffer];
      HEAP[$78] = $76;
      
      
      
      
      if (HEAP[HEAP[$buffer]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $87 = HEAP[HEAP[HEAP[$buffer] + 4] + 24];
      var $88 = HEAP[$buffer];
      FUNCTION_TABLE[$87]($88);
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      
      
      
      var $94 = HEAP[HEAP[$reader]] - 1;
      
      var $96 = HEAP[$reader];
      HEAP[$96] = $94;
      
      
      
      
      if (HEAP[HEAP[$reader]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $105 = HEAP[HEAP[HEAP[$reader] + 4] + 24];
      var $106 = HEAP[$reader];
      FUNCTION_TABLE[$105]($106);
      __label__ = 18;
      break;
     case 18:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 19:
      
      
      
      var $110 = HEAP[HEAP[$res]] - 1;
      
      var $112 = HEAP[$res];
      HEAP[$112] = $110;
      
      
      
      
      if (HEAP[HEAP[$res]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $121 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $122 = HEAP[$res];
      FUNCTION_TABLE[$121]($122);
      __label__ = 21;
      break;
     case 21:
      __label__ = 4;
      break;
     case 22:
      
      
      
      
      var $127 = HEAP[HEAP[HEAP[$reader] + 4] + 24];
      var $128 = HEAP[$reader];
      FUNCTION_TABLE[$127]($128);
      __label__ = 23;
      break;
     case 23:
      var $129 = HEAP[$self_addr];
      var $130 = _expat_parse($129, __str1, 0, 1);
      HEAP[$res] = $130;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 24:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 12] + 4] == _TreeBuilder_Type) {
        __label__ = 25;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 25:
      
      
      
      var $142 = HEAP[HEAP[$res]] - 1;
      
      var $144 = HEAP[$res];
      HEAP[$144] = $142;
      
      
      
      
      if (HEAP[HEAP[$res]] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $153 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $154 = HEAP[$res];
      FUNCTION_TABLE[$153]($154);
      __label__ = 27;
      break;
     case 27:
      
      
      
      var $158 = HEAP[HEAP[$self_addr] + 12];
      var $159 = _treebuilder_done($158);
      HEAP[$0] = $159;
      __label__ = 29;
      break;
     case 28:
      var $160 = HEAP[$res];
      HEAP[$0] = $160;
      __label__ = 29;
      break;
     case 29:
      var $161 = HEAP[$0];
      HEAP[$retval] = $161;
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
  function _xmlparser_setevents($self, $args) {
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
      var $i = __stackBase__ + 16;
      var $target = __stackBase__ + 20;
      var $events = __stackBase__ + 24;
      var $event_set = __stackBase__ + 28;
      var $item = __stackBase__ + 32;
      var $event = __stackBase__ + 36;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$event_set] = __Py_NoneStruct;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str99, allocate([ _PyList_Type, 0, 0, 0, $events, 0, 0, 0, $event_set, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 12] + 4] != _TreeBuilder_Type) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($10, __str100);
      HEAP[$0] = 0;
      __label__ = 46;
      break;
     case 4:
      
      
      
      var $14 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$target] = $14;
      
      
      
      var $18 = HEAP[HEAP[$events]] + 1;
      var $19 = HEAP[$events];
      HEAP[$19] = $18;
      
      
      
      
      if (HEAP[HEAP[$target] + 32] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      var $26 = HEAP[HEAP[$target] + 32];
      
      
      var $29 = HEAP[$26] - 1;
      var $30 = $26;
      HEAP[$30] = $29;
      
      
      
      if (HEAP[$26] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      
      var $40 = HEAP[HEAP[HEAP[HEAP[$target] + 32] + 4] + 24];
      
      
      var $43 = HEAP[HEAP[$target] + 32];
      FUNCTION_TABLE[$40]($43);
      __label__ = 7;
      break;
     case 7:
      var $44 = HEAP[$events];
      
      var $46 = HEAP[$target] + 32;
      HEAP[$46] = $44;
      
      
      
      
      if (HEAP[HEAP[$target] + 36] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      var $53 = HEAP[HEAP[$target] + 36];
      
      
      var $56 = HEAP[$53] - 1;
      var $57 = $53;
      HEAP[$57] = $56;
      
      
      
      if (HEAP[$53] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[HEAP[$target] + 36] + 4] + 24];
      
      
      var $70 = HEAP[HEAP[$target] + 36];
      FUNCTION_TABLE[$67]($70);
      __label__ = 10;
      break;
     case 10:
      
      var $72 = HEAP[$target] + 36;
      HEAP[$72] = 0;
      
      
      
      
      if (HEAP[HEAP[$target] + 40] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      var $79 = HEAP[HEAP[$target] + 40];
      
      
      var $82 = HEAP[$79] - 1;
      var $83 = $79;
      HEAP[$83] = $82;
      
      
      
      if (HEAP[$79] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      var $93 = HEAP[HEAP[HEAP[HEAP[$target] + 40] + 4] + 24];
      
      
      var $96 = HEAP[HEAP[$target] + 40];
      FUNCTION_TABLE[$93]($96);
      __label__ = 13;
      break;
     case 13:
      
      var $98 = HEAP[$target] + 40;
      HEAP[$98] = 0;
      
      
      
      
      if (HEAP[HEAP[$target] + 44] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      var $105 = HEAP[HEAP[$target] + 44];
      
      
      var $108 = HEAP[$105] - 1;
      var $109 = $105;
      HEAP[$109] = $108;
      
      
      
      if (HEAP[$105] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      
      var $119 = HEAP[HEAP[HEAP[HEAP[$target] + 44] + 4] + 24];
      
      
      var $122 = HEAP[HEAP[$target] + 44];
      FUNCTION_TABLE[$119]($122);
      __label__ = 16;
      break;
     case 16:
      
      var $124 = HEAP[$target] + 44;
      HEAP[$124] = 0;
      
      
      
      
      if (HEAP[HEAP[$target] + 48] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      var $131 = HEAP[HEAP[$target] + 48];
      
      
      var $134 = HEAP[$131] - 1;
      var $135 = $131;
      HEAP[$135] = $134;
      
      
      
      if (HEAP[$131] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      
      
      var $145 = HEAP[HEAP[HEAP[HEAP[$target] + 48] + 4] + 24];
      
      
      var $148 = HEAP[HEAP[$target] + 48];
      FUNCTION_TABLE[$145]($148);
      __label__ = 19;
      break;
     case 19:
      
      var $150 = HEAP[$target] + 48;
      HEAP[$150] = 0;
      
      
      if (HEAP[$event_set] == __Py_NoneStruct) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $153 = _PyString_FromString(__str76);
      
      var $155 = HEAP[$target] + 40;
      HEAP[$155] = $153;
      
      var $157 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $157;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 46;
      break;
     case 21:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$event_set] + 4] + 84] & 67108864) == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      HEAP[$i] = 0;
      __label__ = 43;
      break;
     case 23:
      
      
      
      
      
      var $170 = HEAP[HEAP[$event_set] + 12 + HEAP[$i] * 4];
      HEAP[$item] = $170;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$item] + 4] + 84] & 134217728) == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      var $181 = HEAP[$item] + 20;
      HEAP[$event] = $181;
      var $182 = HEAP[$event];
      var $183 = _strcmp($182, __str75);
      
      if ($183 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      var $188 = HEAP[HEAP[$item]] + 1;
      
      var $190 = HEAP[$item];
      HEAP[$190] = $188;
      
      var $192 = HEAP[$target] + 36;
      var $193 = HEAP[$item];
      HEAP[$192] = $193;
      __label__ = 42;
      break;
     case 26:
      var $194 = HEAP[$event];
      var $195 = _strcmp($194, __str76);
      
      if ($195 == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 27:
      
      
      
      var $200 = HEAP[HEAP[$item]] + 1;
      
      var $202 = HEAP[$item];
      HEAP[$202] = $200;
      
      
      
      
      if (HEAP[HEAP[$target] + 40] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      
      
      var $209 = HEAP[HEAP[$target] + 40];
      
      
      var $212 = HEAP[$209] - 1;
      var $213 = $209;
      HEAP[$213] = $212;
      
      
      
      if (HEAP[$209] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      
      
      var $223 = HEAP[HEAP[HEAP[HEAP[$target] + 40] + 4] + 24];
      
      
      var $226 = HEAP[HEAP[$target] + 40];
      FUNCTION_TABLE[$223]($226);
      __label__ = 30;
      break;
     case 30:
      
      var $228 = HEAP[$target] + 40;
      var $229 = HEAP[$item];
      HEAP[$228] = $229;
      __label__ = 42;
      break;
     case 31:
      var $230 = HEAP[$event];
      var $231 = _strcmp($230, __str101);
      
      if ($231 == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 32:
      
      
      
      var $236 = HEAP[HEAP[$item]] + 1;
      
      var $238 = HEAP[$item];
      HEAP[$238] = $236;
      
      
      
      
      if (HEAP[HEAP[$target] + 44] != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 33:
      
      
      var $245 = HEAP[HEAP[$target] + 44];
      
      
      var $248 = HEAP[$245] - 1;
      var $249 = $245;
      HEAP[$249] = $248;
      
      
      
      if (HEAP[$245] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      
      
      var $259 = HEAP[HEAP[HEAP[HEAP[$target] + 44] + 4] + 24];
      
      
      var $262 = HEAP[HEAP[$target] + 44];
      FUNCTION_TABLE[$259]($262);
      __label__ = 35;
      break;
     case 35:
      
      var $264 = HEAP[$target] + 44;
      var $265 = HEAP[$item];
      HEAP[$264] = $265;
      
      
      var $268 = HEAP[HEAP[_expat_capi] + 64];
      
      
      var $271 = HEAP[HEAP[$self_addr] + 8];
      FUNCTION_TABLE[$268]($271, FUNCTION_TABLE_OFFSET + 22, FUNCTION_TABLE_OFFSET + 24);
      __label__ = 42;
      break;
     case 36:
      var $272 = HEAP[$event];
      var $273 = _strcmp($272, __str102);
      
      if ($273 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 37:
      
      
      
      var $278 = HEAP[HEAP[$item]] + 1;
      
      var $280 = HEAP[$item];
      HEAP[$280] = $278;
      
      
      
      
      if (HEAP[HEAP[$target] + 48] != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 38:
      
      
      var $287 = HEAP[HEAP[$target] + 48];
      
      
      var $290 = HEAP[$287] - 1;
      var $291 = $287;
      HEAP[$291] = $290;
      
      
      
      if (HEAP[$287] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      
      
      var $301 = HEAP[HEAP[HEAP[HEAP[$target] + 48] + 4] + 24];
      
      
      var $304 = HEAP[HEAP[$target] + 48];
      FUNCTION_TABLE[$301]($304);
      __label__ = 40;
      break;
     case 40:
      
      var $306 = HEAP[$target] + 48;
      var $307 = HEAP[$item];
      HEAP[$306] = $307;
      
      
      var $310 = HEAP[HEAP[_expat_capi] + 64];
      
      
      var $313 = HEAP[HEAP[$self_addr] + 8];
      FUNCTION_TABLE[$310]($313, FUNCTION_TABLE_OFFSET + 22, FUNCTION_TABLE_OFFSET + 24);
      __label__ = 42;
      break;
     case 41:
      var $314 = HEAP[_PyExc_ValueError];
      var $315 = HEAP[$event];
      var $316 = _PyErr_Format($314, __str103, allocate([ $315, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 46;
      break;
     case 42:
      
      var $318 = HEAP[$i] + 1;
      HEAP[$i] = $318;
      __label__ = 43;
      break;
     case 43:
      
      
      
      
      
      
      if (HEAP[HEAP[$event_set] + 8] > HEAP[$i]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      
      var $326 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $326;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 46;
      break;
     case 45:
      var $327 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($327, __str104);
      HEAP[$0] = 0;
      __label__ = 46;
      break;
     case 46:
      var $328 = HEAP[$0];
      HEAP[$retval] = $328;
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
  function _xmlparser_getattr($self, $name) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 120;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 120);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $name_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $res = __stackBase__ + 16;
      var $buffer = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$name_addr] = $name;
      
      var $2 = HEAP[$self_addr];
      var $3 = HEAP[$name_addr];
      var $4 = _Py_FindMethod(_xmlparser_methods, $2, $3);
      HEAP[$res] = $4;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = HEAP[$res];
      HEAP[$0] = $7;
      __label__ = 10;
      break;
     case 2:
      _PyErr_Clear();
      var $8 = HEAP[$name_addr];
      var $9 = _strcmp($8, __str108);
      
      if ($9 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $13 = HEAP[HEAP[$self_addr] + 16];
      HEAP[$res] = $13;
      __label__ = 9;
      break;
     case 4:
      var $14 = HEAP[$name_addr];
      var $15 = _strcmp($14, __str89);
      
      if ($15 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $19 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$res] = $19;
      __label__ = 9;
      break;
     case 6:
      var $20 = HEAP[$name_addr];
      var $21 = _strcmp($20, __str109);
      
      if ($21 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $buffer7 = $buffer;
      var $23 = _sprintf($buffer7, __str110, allocate([ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      var $buffer8 = $buffer;
      var $24 = _PyString_FromString($buffer8);
      HEAP[$0] = $24;
      __label__ = 10;
      break;
     case 8:
      var $25 = HEAP[_PyExc_AttributeError];
      var $26 = HEAP[$name_addr];
      _PyErr_SetString($25, $26);
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 9:
      
      
      
      var $30 = HEAP[HEAP[$res]] + 1;
      
      var $32 = HEAP[$res];
      HEAP[$32] = $30;
      var $33 = HEAP[$res];
      HEAP[$0] = $33;
      __label__ = 10;
      break;
     case 10:
      var $34 = HEAP[$0];
      HEAP[$retval] = $34;
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
  function _init_elementtree() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      var $g = __stackBase__ + 4;
      var $bootstrap = __stackBase__ + 8;
      var $mp = __stackBase__ + 12;
      
      
      HEAP[_TreeBuilder_Type + 4] = _PyType_Type;
      
      var $2 = HEAP[_TreeBuilder_Type + 4];
      
      HEAP[_Element_Type + 4] = $2;
      
      HEAP[_XMLParser_Type + 4] = _PyType_Type;
      var $5 = _Py_InitModule4(__str114, __functions, 0, 0, 1013);
      HEAP[$m] = $5;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $8 = _PyDict_New();
      HEAP[$g] = $8;
      
      
      if (HEAP[$g] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $11 = _PyEval_GetBuiltins();
      var $12 = HEAP[$g];
      var $13 = _PyDict_SetItemString($12, __str115, $11);
      HEAP[$bootstrap] = __str116;
      var $14 = HEAP[$bootstrap];
      var $15 = HEAP[$g];
      var $16 = _PyRun_StringFlags($14, 257, $15, 0, 0);
      
      if ($16 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $18 = HEAP[$g];
      var $19 = _PyDict_GetItemString($18, __str117);
      HEAP[_elementpath_obj] = $19;
      var $20 = HEAP[$g];
      var $21 = _PyDict_GetItemString($20, __str118);
      HEAP[_elementtree_copyelement_obj] = $21;
      
      
      if (HEAP[_elementtree_copyelement_obj] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 4:
      HEAP[$mp] = _element_methods;
      __label__ = 8;
      break;
     case 5:
      
      
      
      
      if (HEAP[HEAP[$mp] + 4] == FUNCTION_TABLE_OFFSET + 26) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $29 = HEAP[$mp];
      HEAP[$29] = __str119;
      __label__ = 9;
      break;
     case 7:
      
      var $31 = HEAP[$mp] + 16;
      HEAP[$mp] = $31;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      if (HEAP[HEAP[$mp]] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      __label__ = 11;
      break;
     case 10:
      _PyErr_Clear();
      __label__ = 11;
      break;
     case 11:
      var $36 = HEAP[$g];
      var $37 = _PyDict_GetItemString($36, __str120);
      HEAP[_elementtree_deepcopy_obj] = $37;
      var $38 = HEAP[$g];
      var $39 = _PyDict_GetItemString($38, __str49);
      HEAP[_elementtree_iter_obj] = $39;
      var $40 = HEAP[$g];
      var $41 = _PyDict_GetItemString($40, __str50);
      HEAP[_elementtree_itertext_obj] = $41;
      var $42 = _PyCapsule_Import(__str121, 0);
      
      HEAP[_expat_capi] = $42;
      
      
      if (HEAP[_expat_capi] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 12:
      
      
      var $48 = HEAP[HEAP[_expat_capi]];
      var $49 = _strcmp($48, __str122);
      
      if ($49 != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      if (HEAP[HEAP[_expat_capi] + 4] <= 79) {
        __label__ = 17;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      if (HEAP[HEAP[_expat_capi] + 8] != 2) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      if (HEAP[HEAP[_expat_capi] + 12] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      if (HEAP[HEAP[_expat_capi] + 16] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      HEAP[_expat_capi] = 0;
      __label__ = 18;
      break;
     case 18:
      var $67 = HEAP[_PyExc_SyntaxError];
      var $68 = _PyErr_NewException(__str123, $67, 0);
      HEAP[_elementtree_parseerror_obj] = $68;
      
      
      
      var $72 = HEAP[HEAP[_elementtree_parseerror_obj]] + 1;
      var $73 = HEAP[_elementtree_parseerror_obj];
      HEAP[$73] = $72;
      var $74 = HEAP[_elementtree_parseerror_obj];
      var $75 = HEAP[$m];
      var $76 = _PyModule_AddObject($75, __str124, $74);
      __label__ = 19;
      break;
     case 19:
      __label__ = 20;
      break;
     case 20:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_elementtree"] = _init_elementtree;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _PyObject_Malloc, 0, _PyObject_Realloc, 0, _PyObject_Free, 0, _expat_start_handler, 0, _expat_end_handler, 0, _expat_default_handler, 0, _expat_data_handler, 0, _expat_comment_handler, 0, _expat_pi_handler, 0, _expat_unknown_encoding_handler, 0, _expat_start_ns_handler, 0, _expat_end_ns_handler, 0, _element_reduce, 0, _element_clear, 0, _element_get, 0, _element_set, 0, _element_find, 0, _element_findtext, 0, _element_findall, 0, _element_append, 0, _element_extend, 0, _element_insert, 0, _element_remove, 0, _element_iter, 0, _element_itertext, 0, _element_iterfind, 0, _element_getchildren, 0, _element_items, 0, _element_keys, 0, _element_makeelement, 0, _element_copy, 0, _element_deepcopy, 0, _element_length, 0, _element_getitem, 0, _element_setitem, 0, _element_subscr, 0, _element_ass_subscr, 0, _element_dealloc, 0, _element_getattr, 0, _element_setattr, 0, _element_repr, 0, _treebuilder_data, 0, _treebuilder_start, 0, _treebuilder_end, 0, _treebuilder_xml, 0, _treebuilder_close, 0, _treebuilder_dealloc, 0, _treebuilder_getattr, 0, _xmlparser_feed, 0, _xmlparser_close, 0, _xmlparser_parse, 0, _xmlparser_setevents, 0, _xmlparser_dealloc, 0, _xmlparser_getattr, 0, _element, 0, _subelement, 0, _treebuilder, 0, _xmlparser, 0 ]);
  function run(args) {
    _elementtree_deepcopy_obj = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str = allocate([ 100, 101, 101, 112, 99, 111, 112, 121, 32, 104, 101, 108, 112, 101, 114, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate(1, "i8", ALLOC_NORMAL);
    __str2 = allocate([ 106, 111, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 79, 124, 79, 33, 58, 69, 108, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 79, 33, 79, 124, 79, 33, 58, 83, 117, 98, 69, 108, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 79, 33, 58, 97, 112, 112, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 58, 99, 108, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 58, 95, 95, 99, 111, 112, 121, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 79, 58, 95, 95, 100, 101, 101, 112, 99, 111, 112, 121, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 79, 58, 101, 120, 116, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 101, 120, 112, 101, 99, 116, 101, 100, 32, 115, 101, 113, 117, 101, 110, 99, 101, 44, 32, 110, 111, 116, 32, 34, 37, 46, 50, 48, 48, 115, 34, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 79, 124, 79, 58, 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _elementpath_obj = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str12 = allocate([ 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 79, 79, 79, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 79, 124, 79, 79, 58, 102, 105, 110, 100, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 102, 105, 110, 100, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 79, 79, 79, 79, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 79, 124, 79, 58, 102, 105, 110, 100, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 102, 105, 110, 100, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 79, 124, 79, 58, 105, 116, 101, 114, 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 105, 116, 101, 114, 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 79, 124, 79, 58, 103, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 58, 103, 101, 116, 99, 104, 105, 108, 100, 114, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 124, 79, 58, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _elementtree_iter_obj = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str24 = allocate([ 105, 116, 101, 114, 32, 104, 101, 108, 112, 101, 114, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 58, 105, 116, 101, 114, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    _elementtree_itertext_obj = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str26 = allocate([ 105, 116, 101, 114, 116, 101, 120, 116, 32, 104, 101, 108, 112, 101, 114, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 99, 104, 105, 108, 100, 32, 105, 110, 100, 101, 120, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 105, 79, 33, 58, 105, 110, 115, 101, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 58, 105, 116, 101, 109, 115, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 58, 107, 101, 121, 115, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 79, 79, 58, 109, 97, 107, 101, 101, 108, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 58, 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _elementtree_copyelement_obj = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str33 = allocate([ 99, 111, 112, 121, 101, 108, 101, 109, 101, 110, 116, 32, 104, 101, 108, 112, 101, 114, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 79, 40, 78, 41, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 79, 33, 58, 114, 101, 109, 111, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 108, 105, 115, 116, 46, 114, 101, 109, 111, 118, 101, 40, 120, 41, 58, 32, 120, 32, 110, 111, 116, 32, 105, 110, 32, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 60, 69, 108, 101, 109, 101, 110, 116, 32, 37, 115, 32, 97, 116, 32, 37, 112, 62, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 79, 79, 58, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 99, 104, 105, 108, 100, 32, 97, 115, 115, 105, 103, 110, 109, 101, 110, 116, 32, 105, 110, 100, 101, 120, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 101, 108, 101, 109, 101, 110, 116, 32, 105, 110, 100, 105, 99, 101, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 116, 101, 103, 101, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 97, 116, 116, 101, 109, 112, 116, 32, 116, 111, 32, 97, 115, 115, 105, 103, 110, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 102, 32, 115, 105, 122, 101, 32, 37, 122, 100, 32, 116, 111, 32, 101, 120, 116, 101, 110, 100, 101, 100, 32, 115, 108, 105, 99, 101, 32, 111, 102, 32, 115, 105, 122, 101, 32, 37, 122, 100, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 99, 108, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 103, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 97, 112, 112, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 101, 120, 116, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 105, 110, 115, 101, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 114, 101, 109, 111, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 105, 116, 101, 114, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 103, 101, 116, 105, 116, 101, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 103, 101, 116, 99, 104, 105, 108, 100, 114, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 105, 116, 101, 109, 115, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 107, 101, 121, 115, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 109, 97, 107, 101, 101, 108, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 95, 95, 99, 111, 112, 121, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 95, 95, 100, 101, 101, 112, 99, 111, 112, 121, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 33, 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _element_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str59 = allocate([ 116, 97, 103, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 116, 97, 105, 108, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 97, 116, 116, 114, 105, 98, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 99, 97, 110, 39, 116, 32, 100, 101, 108, 101, 116, 101, 32, 101, 108, 101, 109, 101, 110, 116, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _element_as_sequence = allocate(40, [ "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32, i32)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, i32, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _element_as_mapping = allocate(12, [ "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0 ], ALLOC_NORMAL);
    __str64 = allocate([ 69, 108, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _Element_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str65 = allocate([ 58, 84, 114, 101, 101, 66, 117, 105, 108, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _elementtree_parseerror_obj = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str66 = allocate([ 109, 117, 108, 116, 105, 112, 108, 101, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 111, 110, 32, 116, 111, 112, 32, 108, 101, 118, 101, 108, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 112, 111, 112, 32, 102, 114, 111, 109, 32, 101, 109, 112, 116, 121, 32, 115, 116, 97, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 79, 79, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 79, 58, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 79, 58, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 58, 99, 108, 111, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 79, 124, 79, 58, 115, 116, 97, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 79, 79, 58, 120, 109, 108, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 115, 116, 97, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 120, 109, 108, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 99, 108, 111, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    _treebuilder_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str79 = allocate([ 84, 114, 101, 101, 66, 117, 105, 108, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _TreeBuilder_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str80 = allocate([ 115, 116, 114, 105, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 37, 115, 58, 32, 108, 105, 110, 101, 32, 37, 100, 44, 32, 99, 111, 108, 117, 109, 110, 32, 37, 100, 0 ], "i8", ALLOC_NORMAL);
    __str82 = allocate([ 115, 0 ], "i8", ALLOC_NORMAL);
    __str83 = allocate([ 40, 105, 105, 41, 0 ], "i8", ALLOC_NORMAL);
    __str84 = allocate([ 112, 111, 115, 105, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 79, 0 ], "i8", ALLOC_NORMAL);
    __str86 = allocate([ 117, 110, 100, 101, 102, 105, 110, 101, 100, 32, 101, 110, 116, 105, 116, 121, 32, 38, 37, 46, 49, 48, 48, 115, 59, 0 ], "i8", ALLOC_NORMAL);
    _expat_capi = allocate(1, "%struct.PyExpat_CAPI*", ALLOC_NORMAL);
    __str87 = allocate([ 114, 101, 112, 108, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str88 = allocate([ 124, 79, 122, 58, 88, 77, 76, 80, 97, 114, 115, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_12155 = allocate(12, "i8*", ALLOC_NORMAL);
    __str89 = allocate([ 116, 97, 114, 103, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str90 = allocate([ 101, 110, 99, 111, 100, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str91 = allocate([ 99, 97, 110, 110, 111, 116, 32, 108, 111, 97, 100, 32, 100, 105, 115, 112, 97, 116, 99, 104, 32, 116, 97, 98, 108, 101, 32, 102, 114, 111, 109, 32, 112, 121, 101, 120, 112, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    _memory_handler_12152 = allocate(12, [ "i8* (i32)*", 0, 0, 0, "i8* (i8*, i32)*", 0, 0, 0, "void (i8*)*", 0, 0, 0 ], ALLOC_NORMAL);
    __str92 = allocate([ 125, 0 ], "i8", ALLOC_NORMAL);
    __str93 = allocate([ 99, 111, 109, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str94 = allocate([ 112, 105, 0 ], "i8", ALLOC_NORMAL);
    __str95 = allocate([ 115, 35, 58, 102, 101, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str96 = allocate([ 79, 58, 95, 112, 97, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str97 = allocate([ 114, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str98 = allocate([ 105, 0 ], "i8", ALLOC_NORMAL);
    __str99 = allocate([ 79, 33, 124, 79, 58, 95, 115, 101, 116, 101, 118, 101, 110, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str100 = allocate([ 101, 118, 101, 110, 116, 32, 104, 97, 110, 100, 108, 105, 110, 103, 32, 111, 110, 108, 121, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 102, 111, 114, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 84, 114, 101, 101, 98, 117, 105, 108, 100, 101, 114, 32, 116, 97, 114, 103, 101, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str101 = allocate([ 115, 116, 97, 114, 116, 45, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    __str102 = allocate([ 101, 110, 100, 45, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    __str103 = allocate([ 117, 110, 107, 110, 111, 119, 110, 32, 101, 118, 101, 110, 116, 32, 39, 37, 115, 39, 0 ], "i8", ALLOC_NORMAL);
    __str104 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 101, 118, 101, 110, 116, 32, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str105 = allocate([ 102, 101, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str106 = allocate([ 95, 112, 97, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str107 = allocate([ 95, 115, 101, 116, 101, 118, 101, 110, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    _xmlparser_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str108 = allocate([ 101, 110, 116, 105, 116, 121, 0 ], "i8", ALLOC_NORMAL);
    __str109 = allocate([ 118, 101, 114, 115, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str110 = allocate([ 69, 120, 112, 97, 116, 32, 37, 100, 46, 37, 100, 46, 37, 100, 0 ], "i8", ALLOC_NORMAL);
    __str111 = allocate([ 88, 77, 76, 80, 97, 114, 115, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _XMLParser_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str112 = allocate([ 83, 117, 98, 69, 108, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str113 = allocate([ 88, 77, 76, 84, 114, 101, 101, 66, 117, 105, 108, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __functions = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str114 = allocate([ 95, 101, 108, 101, 109, 101, 110, 116, 116, 114, 101, 101, 0 ], "i8", ALLOC_NORMAL);
    __str115 = allocate([ 95, 95, 98, 117, 105, 108, 116, 105, 110, 115, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str116 = allocate([ 102, 114, 111, 109, 32, 99, 111, 112, 121, 32, 105, 109, 112, 111, 114, 116, 32, 99, 111, 112, 121, 44, 32, 100, 101, 101, 112, 99, 111, 112, 121, 10, 116, 114, 121, 58, 10, 32, 32, 102, 114, 111, 109, 32, 120, 109, 108, 46, 101, 116, 114, 101, 101, 32, 105, 109, 112, 111, 114, 116, 32, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 10, 101, 120, 99, 101, 112, 116, 32, 73, 109, 112, 111, 114, 116, 69, 114, 114, 111, 114, 58, 10, 32, 32, 105, 109, 112, 111, 114, 116, 32, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 10, 69, 84, 32, 61, 32, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 10, 100, 101, 108, 32, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 10, 105, 109, 112, 111, 114, 116, 32, 95, 101, 108, 101, 109, 101, 110, 116, 116, 114, 101, 101, 32, 97, 115, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 10, 116, 114, 121, 58, 10, 32, 32, 99, 111, 112, 121, 40, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 69, 108, 101, 109, 101, 110, 116, 40, 39, 120, 39, 41, 41, 10, 101, 120, 99, 101, 112, 116, 58, 10, 32, 32, 100, 101, 102, 32, 99, 111, 112, 121, 101, 108, 101, 109, 101, 110, 116, 40, 101, 108, 101, 109, 41, 58, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 101, 108, 101, 109, 10, 99, 108, 97, 115, 115, 32, 67, 111, 109, 109, 101, 110, 116, 80, 114, 111, 120, 121, 58, 10, 32, 100, 101, 102, 32, 95, 95, 99, 97, 108, 108, 95, 95, 40, 115, 101, 108, 102, 44, 32, 116, 101, 120, 116, 61, 78, 111, 110, 101, 41, 58, 10, 32, 32, 101, 108, 101, 109, 101, 110, 116, 32, 61, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 69, 108, 101, 109, 101, 110, 116, 40, 69, 84, 46, 67, 111, 109, 109, 101, 110, 116, 41, 10, 32, 32, 101, 108, 101, 109, 101, 110, 116, 46, 116, 101, 120, 116, 32, 61, 32, 116, 101, 120, 116, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 101, 108, 101, 109, 101, 110, 116, 10, 32, 100, 101, 102, 32, 95, 95, 99, 109, 112, 95, 95, 40, 115, 101, 108, 102, 44, 32, 111, 116, 104, 101, 114, 41, 58, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 109, 112, 40, 69, 84, 46, 67, 111, 109, 109, 101, 110, 116, 44, 32, 111, 116, 104, 101, 114, 41, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 67, 111, 109, 109, 101, 110, 116, 32, 61, 32, 67, 111, 109, 109, 101, 110, 116, 80, 114, 111, 120, 121, 40, 41, 10, 99, 108, 97, 115, 115, 32, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 40, 69, 84, 46, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 41, 58, 10, 32, 32, 100, 101, 102, 32, 112, 97, 114, 115, 101, 40, 115, 101, 108, 102, 44, 32, 115, 111, 117, 114, 99, 101, 44, 32, 112, 97, 114, 115, 101, 114, 61, 78, 111, 110, 101, 41, 58, 10, 32, 32, 32, 32, 105, 102, 32, 110, 111, 116, 32, 104, 97, 115, 97, 116, 116, 114, 40, 115, 111, 117, 114, 99, 101, 44, 32, 39, 114, 101, 97, 100, 39, 41, 58, 10, 32, 32, 32, 32, 32, 32, 115, 111, 117, 114, 99, 101, 32, 61, 32, 111, 112, 101, 110, 40, 115, 111, 117, 114, 99, 101, 44, 32, 39, 114, 98, 39, 41, 10, 32, 32, 32, 32, 105, 102, 32, 112, 97, 114, 115, 101, 114, 32, 105, 115, 32, 110, 111, 116, 32, 78, 111, 110, 101, 58, 10, 32, 32, 32, 32, 32, 32, 119, 104, 105, 108, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 97, 116, 97, 32, 61, 32, 115, 111, 117, 114, 99, 101, 46, 114, 101, 97, 100, 40, 54, 53, 53, 51, 54, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 110, 111, 116, 32, 100, 97, 116, 97, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 10, 32, 32, 32, 32, 32, 32, 32, 32, 112, 97, 114, 115, 101, 114, 46, 102, 101, 101, 100, 40, 100, 97, 116, 97, 41, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 95, 114, 111, 111, 116, 32, 61, 32, 112, 97, 114, 115, 101, 114, 46, 99, 108, 111, 115, 101, 40, 41, 10, 32, 32, 32, 32, 101, 108, 115, 101, 58, 10, 32, 32, 32, 32, 32, 32, 112, 97, 114, 115, 101, 114, 32, 61, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 88, 77, 76, 80, 97, 114, 115, 101, 114, 40, 41, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 95, 114, 111, 111, 116, 32, 61, 32, 112, 97, 114, 115, 101, 114, 46, 95, 112, 97, 114, 115, 101, 40, 115, 111, 117, 114, 99, 101, 41, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 115, 101, 108, 102, 46, 95, 114, 111, 111, 116, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 32, 61, 32, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 10, 100, 101, 102, 32, 105, 116, 101, 114, 40, 110, 111, 100, 101, 44, 32, 116, 97, 103, 61, 78, 111, 110, 101, 41, 58, 10, 32, 32, 105, 102, 32, 116, 97, 103, 32, 61, 61, 32, 39, 42, 39, 58, 10, 32, 32, 32, 32, 116, 97, 103, 32, 61, 32, 78, 111, 110, 101, 10, 32, 32, 105, 102, 32, 116, 97, 103, 32, 105, 115, 32, 78, 111, 110, 101, 32, 111, 114, 32, 110, 111, 100, 101, 46, 116, 97, 103, 32, 61, 61, 32, 116, 97, 103, 58, 10, 32, 32, 32, 32, 121, 105, 101, 108, 100, 32, 110, 111, 100, 101, 10, 32, 32, 102, 111, 114, 32, 110, 111, 100, 101, 32, 105, 110, 32, 110, 111, 100, 101, 58, 10, 32, 32, 32, 32, 102, 111, 114, 32, 110, 111, 100, 101, 32, 105, 110, 32, 105, 116, 101, 114, 40, 110, 111, 100, 101, 44, 32, 116, 97, 103, 41, 58, 10, 32, 32, 32, 32, 32, 32, 121, 105, 101, 108, 100, 32, 110, 111, 100, 101, 10, 100, 101, 102, 32, 105, 116, 101, 114, 116, 101, 120, 116, 40, 110, 111, 100, 101, 41, 58, 10, 32, 32, 105, 102, 32, 110, 111, 100, 101, 46, 116, 101, 120, 116, 58, 10, 32, 32, 32, 32, 121, 105, 101, 108, 100, 32, 110, 111, 100, 101, 46, 116, 101, 120, 116, 10, 32, 32, 102, 111, 114, 32, 101, 32, 105, 110, 32, 110, 111, 100, 101, 58, 10, 32, 32, 32, 32, 102, 111, 114, 32, 115, 32, 105, 110, 32, 101, 46, 105, 116, 101, 114, 116, 101, 120, 116, 40, 41, 58, 10, 32, 32, 32, 32, 32, 32, 121, 105, 101, 108, 100, 32, 115, 10, 32, 32, 32, 32, 105, 102, 32, 101, 46, 116, 97, 105, 108, 58, 10, 32, 32, 32, 32, 32, 32, 121, 105, 101, 108, 100, 32, 101, 46, 116, 97, 105, 108, 10, 100, 101, 102, 32, 112, 97, 114, 115, 101, 40, 115, 111, 117, 114, 99, 101, 44, 32, 112, 97, 114, 115, 101, 114, 61, 78, 111, 110, 101, 41, 58, 10, 32, 32, 116, 114, 101, 101, 32, 61, 32, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 40, 41, 10, 32, 32, 116, 114, 101, 101, 46, 112, 97, 114, 115, 101, 40, 115, 111, 117, 114, 99, 101, 44, 32, 112, 97, 114, 115, 101, 114, 41, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 101, 101, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 112, 97, 114, 115, 101, 32, 61, 32, 112, 97, 114, 115, 101, 10, 99, 108, 97, 115, 115, 32, 105, 116, 101, 114, 112, 97, 114, 115, 101, 40, 111, 98, 106, 101, 99, 116, 41, 58, 10, 32, 114, 111, 111, 116, 32, 61, 32, 78, 111, 110, 101, 10, 32, 100, 101, 102, 32, 95, 95, 105, 110, 105, 116, 95, 95, 40, 115, 101, 108, 102, 44, 32, 102, 105, 108, 101, 44, 32, 101, 118, 101, 110, 116, 115, 61, 78, 111, 110, 101, 41, 58, 10, 32, 32, 105, 102, 32, 110, 111, 116, 32, 104, 97, 115, 97, 116, 116, 114, 40, 102, 105, 108, 101, 44, 32, 39, 114, 101, 97, 100, 39, 41, 58, 10, 32, 32, 32, 32, 102, 105, 108, 101, 32, 61, 32, 111, 112, 101, 110, 40, 102, 105, 108, 101, 44, 32, 39, 114, 98, 39, 41, 10, 32, 32, 115, 101, 108, 102, 46, 95, 102, 105, 108, 101, 32, 61, 32, 102, 105, 108, 101, 10, 32, 32, 115, 101, 108, 102, 46, 95, 101, 118, 101, 110, 116, 115, 32, 61, 32, 91, 93, 10, 32, 32, 115, 101, 108, 102, 46, 95, 105, 110, 100, 101, 120, 32, 61, 32, 48, 10, 32, 32, 115, 101, 108, 102, 46, 114, 111, 111, 116, 32, 61, 32, 115, 101, 108, 102, 46, 95, 114, 111, 111, 116, 32, 61, 32, 78, 111, 110, 101, 10, 32, 32, 98, 32, 61, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 84, 114, 101, 101, 66, 117, 105, 108, 100, 101, 114, 40, 41, 10, 32, 32, 115, 101, 108, 102, 46, 95, 112, 97, 114, 115, 101, 114, 32, 61, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 88, 77, 76, 80, 97, 114, 115, 101, 114, 40, 98, 41, 10, 32, 32, 115, 101, 108, 102, 46, 95, 112, 97, 114, 115, 101, 114, 46, 95, 115, 101, 116, 101, 118, 101, 110, 116, 115, 40, 115, 101, 108, 102, 46, 95, 101, 118, 101, 110, 116, 115, 44, 32, 101, 118, 101, 110, 116, 115, 41, 10, 32, 100, 101, 102, 32, 110, 101, 120, 116, 40, 115, 101, 108, 102, 41, 58, 10, 32, 32, 119, 104, 105, 108, 101, 32, 49, 58, 10, 32, 32, 32, 32, 116, 114, 121, 58, 10, 32, 32, 32, 32, 32, 32, 105, 116, 101, 109, 32, 61, 32, 115, 101, 108, 102, 46, 95, 101, 118, 101, 110, 116, 115, 91, 115, 101, 108, 102, 46, 95, 105, 110, 100, 101, 120, 93, 10, 32, 32, 32, 32, 101, 120, 99, 101, 112, 116, 32, 73, 110, 100, 101, 120, 69, 114, 114, 111, 114, 58, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 115, 101, 108, 102, 46, 95, 112, 97, 114, 115, 101, 114, 32, 105, 115, 32, 78, 111, 110, 101, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 114, 111, 111, 116, 32, 61, 32, 115, 101, 108, 102, 46, 95, 114, 111, 111, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 97, 105, 115, 101, 32, 83, 116, 111, 112, 73, 116, 101, 114, 97, 116, 105, 111, 110, 10, 32, 32, 32, 32, 32, 32, 35, 32, 108, 111, 97, 100, 32, 101, 118, 101, 110, 116, 32, 98, 117, 102, 102, 101, 114, 10, 32, 32, 32, 32, 32, 32, 100, 101, 108, 32, 115, 101, 108, 102, 46, 95, 101, 118, 101, 110, 116, 115, 91, 58, 93, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 95, 105, 110, 100, 101, 120, 32, 61, 32, 48, 10, 32, 32, 32, 32, 32, 32, 100, 97, 116, 97, 32, 61, 32, 115, 101, 108, 102, 46, 95, 102, 105, 108, 101, 46, 114, 101, 97, 100, 40, 49, 54, 51, 56, 52, 41, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 100, 97, 116, 97, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 95, 112, 97, 114, 115, 101, 114, 46, 102, 101, 101, 100, 40, 100, 97, 116, 97, 41, 10, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 95, 114, 111, 111, 116, 32, 61, 32, 115, 101, 108, 102, 46, 95, 112, 97, 114, 115, 101, 114, 46, 99, 108, 111, 115, 101, 40, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 95, 112, 97, 114, 115, 101, 114, 32, 61, 32, 78, 111, 110, 101, 10, 32, 32, 32, 32, 101, 108, 115, 101, 58, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 95, 105, 110, 100, 101, 120, 32, 61, 32, 115, 101, 108, 102, 46, 95, 105, 110, 100, 101, 120, 32, 43, 32, 49, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 116, 101, 109, 10, 32, 100, 101, 102, 32, 95, 95, 105, 116, 101, 114, 95, 95, 40, 115, 101, 108, 102, 41, 58, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 115, 101, 108, 102, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 105, 116, 101, 114, 112, 97, 114, 115, 101, 32, 61, 32, 105, 116, 101, 114, 112, 97, 114, 115, 101, 10, 99, 108, 97, 115, 115, 32, 80, 73, 80, 114, 111, 120, 121, 58, 10, 32, 100, 101, 102, 32, 95, 95, 99, 97, 108, 108, 95, 95, 40, 115, 101, 108, 102, 44, 32, 116, 97, 114, 103, 101, 116, 44, 32, 116, 101, 120, 116, 61, 78, 111, 110, 101, 41, 58, 10, 32, 32, 101, 108, 101, 109, 101, 110, 116, 32, 61, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 69, 108, 101, 109, 101, 110, 116, 40, 69, 84, 46, 80, 73, 41, 10, 32, 32, 101, 108, 101, 109, 101, 110, 116, 46, 116, 101, 120, 116, 32, 61, 32, 116, 97, 114, 103, 101, 116, 10, 32, 32, 105, 102, 32, 116, 101, 120, 116, 58, 10, 32, 32, 32, 32, 101, 108, 101, 109, 101, 110, 116, 46, 116, 101, 120, 116, 32, 61, 32, 101, 108, 101, 109, 101, 110, 116, 46, 116, 101, 120, 116, 32, 43, 32, 39, 32, 39, 32, 43, 32, 116, 101, 120, 116, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 101, 108, 101, 109, 101, 110, 116, 10, 32, 100, 101, 102, 32, 95, 95, 99, 109, 112, 95, 95, 40, 115, 101, 108, 102, 44, 32, 111, 116, 104, 101, 114, 41, 58, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 109, 112, 40, 69, 84, 46, 80, 73, 44, 32, 111, 116, 104, 101, 114, 41, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 80, 73, 32, 61, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 80, 114, 111, 99, 101, 115, 115, 105, 110, 103, 73, 110, 115, 116, 114, 117, 99, 116, 105, 111, 110, 32, 61, 32, 80, 73, 80, 114, 111, 120, 121, 40, 41, 10, 100, 101, 102, 32, 88, 77, 76, 40, 116, 101, 120, 116, 41, 58, 10, 32, 32, 112, 97, 114, 115, 101, 114, 32, 61, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 88, 77, 76, 80, 97, 114, 115, 101, 114, 40, 41, 10, 32, 32, 112, 97, 114, 115, 101, 114, 46, 102, 101, 101, 100, 40, 116, 101, 120, 116, 41, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 112, 97, 114, 115, 101, 114, 46, 99, 108, 111, 115, 101, 40, 41, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 88, 77, 76, 32, 61, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 102, 114, 111, 109, 115, 116, 114, 105, 110, 103, 32, 61, 32, 88, 77, 76, 10, 100, 101, 102, 32, 88, 77, 76, 73, 68, 40, 116, 101, 120, 116, 41, 58, 10, 32, 32, 116, 114, 101, 101, 32, 61, 32, 88, 77, 76, 40, 116, 101, 120, 116, 41, 10, 32, 32, 105, 100, 115, 32, 61, 32, 123, 125, 10, 32, 32, 102, 111, 114, 32, 101, 108, 101, 109, 32, 105, 110, 32, 116, 114, 101, 101, 46, 105, 116, 101, 114, 40, 41, 58, 10, 32, 32, 32, 32, 105, 100, 32, 61, 32, 101, 108, 101, 109, 46, 103, 101, 116, 40, 39, 105, 100, 39, 41, 10, 32, 32, 32, 32, 105, 102, 32, 105, 100, 58, 10, 32, 32, 32, 32, 32, 32, 105, 100, 115, 91, 105, 100, 93, 32, 61, 32, 101, 108, 101, 109, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 101, 101, 44, 32, 105, 100, 115, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 88, 77, 76, 73, 68, 32, 61, 32, 88, 77, 76, 73, 68, 10, 116, 114, 121, 58, 10, 32, 114, 101, 103, 105, 115, 116, 101, 114, 95, 110, 97, 109, 101, 115, 112, 97, 99, 101, 32, 61, 32, 69, 84, 46, 114, 101, 103, 105, 115, 116, 101, 114, 95, 110, 97, 109, 101, 115, 112, 97, 99, 101, 10, 101, 120, 99, 101, 112, 116, 32, 65, 116, 116, 114, 105, 98, 117, 116, 101, 69, 114, 114, 111, 114, 58, 10, 32, 100, 101, 102, 32, 114, 101, 103, 105, 115, 116, 101, 114, 95, 110, 97, 109, 101, 115, 112, 97, 99, 101, 40, 112, 114, 101, 102, 105, 120, 44, 32, 117, 114, 105, 41, 58, 10, 32, 32, 69, 84, 46, 95, 110, 97, 109, 101, 115, 112, 97, 99, 101, 95, 109, 97, 112, 91, 117, 114, 105, 93, 32, 61, 32, 112, 114, 101, 102, 105, 120, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 114, 101, 103, 105, 115, 116, 101, 114, 95, 110, 97, 109, 101, 115, 112, 97, 99, 101, 32, 61, 32, 114, 101, 103, 105, 115, 116, 101, 114, 95, 110, 97, 109, 101, 115, 112, 97, 99, 101, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 100, 117, 109, 112, 32, 61, 32, 69, 84, 46, 100, 117, 109, 112, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 69, 108, 101, 109, 101, 110, 116, 80, 97, 116, 104, 32, 61, 32, 69, 108, 101, 109, 101, 110, 116, 80, 97, 116, 104, 32, 61, 32, 69, 84, 46, 69, 108, 101, 109, 101, 110, 116, 80, 97, 116, 104, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 105, 115, 101, 108, 101, 109, 101, 110, 116, 32, 61, 32, 69, 84, 46, 105, 115, 101, 108, 101, 109, 101, 110, 116, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 81, 78, 97, 109, 101, 32, 61, 32, 69, 84, 46, 81, 78, 97, 109, 101, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 116, 111, 115, 116, 114, 105, 110, 103, 32, 61, 32, 69, 84, 46, 116, 111, 115, 116, 114, 105, 110, 103, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 102, 114, 111, 109, 115, 116, 114, 105, 110, 103, 108, 105, 115, 116, 32, 61, 32, 69, 84, 46, 102, 114, 111, 109, 115, 116, 114, 105, 110, 103, 108, 105, 115, 116, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 116, 111, 115, 116, 114, 105, 110, 103, 108, 105, 115, 116, 32, 61, 32, 69, 84, 46, 116, 111, 115, 116, 114, 105, 110, 103, 108, 105, 115, 116, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 86, 69, 82, 83, 73, 79, 78, 32, 61, 32, 39, 49, 46, 48, 46, 54, 39, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 95, 95, 118, 101, 114, 115, 105, 111, 110, 95, 95, 32, 61, 32, 39, 49, 46, 48, 46, 54, 39, 10, 0 ], "i8", ALLOC_NORMAL);
    __str117 = allocate([ 69, 108, 101, 109, 101, 110, 116, 80, 97, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str118 = allocate([ 99, 111, 112, 121, 101, 108, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str119 = allocate([ 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str120 = allocate([ 100, 101, 101, 112, 99, 111, 112, 121, 0 ], "i8", ALLOC_NORMAL);
    __str121 = allocate([ 112, 121, 101, 120, 112, 97, 116, 46, 101, 120, 112, 97, 116, 95, 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str122 = allocate([ 112, 121, 101, 120, 112, 97, 116, 46, 101, 120, 112, 97, 116, 95, 67, 65, 80, 73, 32, 49, 46, 48, 0 ], "i8", ALLOC_NORMAL);
    __str123 = allocate([ 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 80, 97, 114, 115, 101, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str124 = allocate([ 80, 97, 114, 115, 101, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_element_methods] = __str42;
    HEAP[_element_methods + 4] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_element_methods + 16] = __str43;
    HEAP[_element_methods + 20] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_element_methods + 32] = __str44;
    HEAP[_element_methods + 36] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_element_methods + 48] = __str12;
    HEAP[_element_methods + 52] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_element_methods + 64] = __str15;
    HEAP[_element_methods + 68] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_element_methods + 80] = __str18;
    HEAP[_element_methods + 84] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_element_methods + 96] = __str45;
    HEAP[_element_methods + 100] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_element_methods + 112] = __str46;
    HEAP[_element_methods + 116] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_element_methods + 128] = __str47;
    HEAP[_element_methods + 132] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_element_methods + 144] = __str48;
    HEAP[_element_methods + 148] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_element_methods + 160] = __str49;
    HEAP[_element_methods + 164] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_element_methods + 176] = __str50;
    HEAP[_element_methods + 180] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_element_methods + 192] = __str20;
    HEAP[_element_methods + 196] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_element_methods + 208] = __str51;
    HEAP[_element_methods + 212] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_element_methods + 224] = __str52;
    HEAP[_element_methods + 228] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_element_methods + 240] = __str53;
    HEAP[_element_methods + 244] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_element_methods + 256] = __str54;
    HEAP[_element_methods + 260] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_element_methods + 272] = __str55;
    HEAP[_element_methods + 276] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_element_methods + 288] = __str56;
    HEAP[_element_methods + 292] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_element_methods + 304] = __str57;
    HEAP[_element_methods + 308] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_element_methods + 320] = __str58;
    HEAP[_element_methods + 324] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_element_as_sequence] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_element_as_sequence + 12] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_element_as_sequence + 20] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_element_as_mapping] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_element_as_mapping + 4] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_element_as_mapping + 8] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_Element_Type + 12] = __str64;
    HEAP[_Element_Type + 24] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_Element_Type + 32] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_Element_Type + 36] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_Element_Type + 44] = FUNCTION_TABLE_OFFSET + 82;
    HEAP[_Element_Type + 52] = _element_as_sequence;
    HEAP[_Element_Type + 56] = _element_as_mapping;
    HEAP[_treebuilder_methods] = __str74;
    HEAP[_treebuilder_methods + 4] = FUNCTION_TABLE_OFFSET + 84;
    HEAP[_treebuilder_methods + 16] = __str75;
    HEAP[_treebuilder_methods + 20] = FUNCTION_TABLE_OFFSET + 86;
    HEAP[_treebuilder_methods + 32] = __str76;
    HEAP[_treebuilder_methods + 36] = FUNCTION_TABLE_OFFSET + 88;
    HEAP[_treebuilder_methods + 48] = __str77;
    HEAP[_treebuilder_methods + 52] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_treebuilder_methods + 64] = __str78;
    HEAP[_treebuilder_methods + 68] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_TreeBuilder_Type + 12] = __str79;
    HEAP[_TreeBuilder_Type + 24] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_TreeBuilder_Type + 32] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_kwlist_12155] = __str89;
    HEAP[_kwlist_12155 + 4] = __str90;
    HEAP[_xmlparser_methods] = __str105;
    HEAP[_xmlparser_methods + 4] = FUNCTION_TABLE_OFFSET + 98;
    HEAP[_xmlparser_methods + 16] = __str78;
    HEAP[_xmlparser_methods + 20] = FUNCTION_TABLE_OFFSET + 100;
    HEAP[_xmlparser_methods + 32] = __str106;
    HEAP[_xmlparser_methods + 36] = FUNCTION_TABLE_OFFSET + 102;
    HEAP[_xmlparser_methods + 48] = __str107;
    HEAP[_xmlparser_methods + 52] = FUNCTION_TABLE_OFFSET + 104;
    HEAP[_XMLParser_Type + 12] = __str111;
    HEAP[_XMLParser_Type + 24] = FUNCTION_TABLE_OFFSET + 106;
    HEAP[_XMLParser_Type + 32] = FUNCTION_TABLE_OFFSET + 108;
    HEAP[__functions] = __str64;
    HEAP[__functions + 4] = FUNCTION_TABLE_OFFSET + 110;
    HEAP[__functions + 16] = __str112;
    HEAP[__functions + 20] = FUNCTION_TABLE_OFFSET + 112;
    HEAP[__functions + 32] = __str79;
    HEAP[__functions + 36] = FUNCTION_TABLE_OFFSET + 114;
    HEAP[__functions + 48] = __str111;
    HEAP[__functions + 52] = FUNCTION_TABLE_OFFSET + 116;
    HEAP[__functions + 64] = __str113;
    HEAP[__functions + 68] = FUNCTION_TABLE_OFFSET + 116;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
