"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 196;
  var $1___SIZE = 64;
  var $2___SIZE = 16;
  var $3___SIZE = 60;
  var $4___SIZE = 20;
  var $5___SIZE = 20;
  var $6___SIZE = 100;
  var $7___SIZE = 20;
  var $8___SIZE = 196;
  var $9___SIZE = 48;
  var $10___SIZE = 196;
  var $11___SIZE = 112;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_Pdata___SIZE = 20;
  var $struct_Picklerobject___SIZE = 72;
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyClassObject___SIZE = 36;
  var $struct_PyCompilerFlags___SIZE = 4;
  var $struct_PyFileObject___SIZE = 84;
  var $struct_PyFloatObject___SIZE = 16;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyInterpreterState___SIZE = 40;
  var $struct_PyListObject___SIZE = 20;
  var $struct_PyLongObject___SIZE = 0;
  var $struct_PyLongObject___FLATTENER = [];
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyThreadState___SIZE = 84;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_PyUnicodeObject___SIZE = 24;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct_PycStringIO_CAPI___SIZE = 32;
  var $struct_Unpicklerobject___SIZE = 80;
  var $struct__IO_marker___SIZE = 12;
  var $struct__frame___SIZE = 0;
  var $struct__frame___FLATTENER = [];
  var $struct__typeobject___SIZE = 196;
  var _cPickle_module_documentation;
  var _MARKv;
  var __str;
  var __str1;
  var _PdataType;
  var _UnpicklingError;
  var __str2;
  var _PycStringIO;
  var _empty_tuple;
  var _PicklingError;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var __str7;
  var ___main___str;
  var __str8;
  var _none_9399;
  var _len_9411;
  var _buf_9410;
  var __str9;
  var __str10;
  var __str11;
  var _l_9486;
  var __str12;
  var _string_9625;
  var _hexdigit_9736;
  var __str13;
  var _string_9843;
  var __str14;
  var __str15;
  var ___PRETTY_FUNCTION___9965;
  var _pop_9990;
  var _len2opcode_9992;
  var _pop_mark_9991;
  var _tuple_9989;
  var __str16;
  var ___PRETTY_FUNCTION___10085;
  var _append_10083;
  var _appends_10084;
  var __str17;
  var ___PRETTY_FUNCTION___10274;
  var __str18;
  var _setitem_10272;
  var _setitems_10273;
  var __str19;
  var ___PRETTY_FUNCTION___10449;
  var __str20;
  var _setitem_10447;
  var _setitems_10448;
  var __str21;
  var __str22;
  var __str23;
  var ___class___str;
  var ___getinitargs___str;
  var __str24;
  var _inst_10602;
  var _obj_10603;
  var ___getstate___str;
  var ___dict___str;
  var _build_10604;
  var ___name___str;
  var __str25;
  var __str26;
  var __str27;
  var __str28;
  var __str29;
  var _two_tuple;
  var _extension_registry;
  var __str30;
  var __str31;
  var __str32;
  var __str33;
  var _global_10803;
  var __str34;
  var _persid_10947;
  var _binpersid_10948;
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
  var _newobj_11068;
  var _reduce_11066;
  var _build_11067;
  var _PickleError;
  var _dispatch_table;
  var ___reduce_ex___str;
  var ___reduce___str;
  var _UnpickleableError;
  var __str47;
  var __str48;
  var ___PRETTY_FUNCTION___11640;
  var _stop_11638;
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
  var _Pickler_methods;
  var __str60;
  var __str61;
  var _write_str;
  var __str62;
  var __str63;
  var _dispatch_table_str;
  var __str64;
  var __str65;
  var _kwlist_11959;
  var __str66;
  var __str67;
  var __str68;
  var __str69;
  var __str70;
  var __str71;
  var __str72;
  var __str73;
  var _Pickler_members;
  var __str74;
  var __str75;
  var _Pickler_getsets;
  var _Picklertype__doc__;
  var __str76;
  var _Picklertype;
  var __str77;
  var __str78;
  var __str79;
  var __str80;
  var __str81;
  var ___PRETTY_FUNCTION___12520;
  var __str82;
  var ___PRETTY_FUNCTION___12691;
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
  var _BadPickleGet;
  var __str93;
  var ___PRETTY_FUNCTION___14290;
  var __str94;
  var _extension_cache;
  var _inverted_registry;
  var __str95;
  var __str96;
  var _append_str;
  var ___setstate___str;
  var __str97;
  var __str98;
  var __str99;
  var ___PRETTY_FUNCTION___15090;
  var __str100;
  var __str101;
  var __str102;
  var ___PRETTY_FUNCTION___15506;
  var __str103;
  var __str104;
  var __str105;
  var __str106;
  var _Unpickler_methods;
  var _readline_str;
  var _read_str;
  var __str107;
  var __str108;
  var __str109;
  var __str110;
  var __str111;
  var _kwlist_16302;
  var __str112;
  var __str113;
  var _kwlist_16339;
  var __str114;
  var _Unpicklertype__doc__;
  var __str115;
  var _Unpicklertype;
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
  var _cPickle_methods;
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
  function _Pdata_dealloc($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $i = __stackBase__ + 4;
      var $p = __stackBase__ + 8;
      
      HEAP[$self_addr] = $self;
      
      
      var $2 = HEAP[HEAP[$self_addr] + 8];
      HEAP[$i] = $2;
      
      
      var $5 = HEAP[HEAP[$self_addr] + 16];
      HEAP[$p] = $5;
      __label__ = 4;
      break;
     case 1:
      
      var $7 = HEAP[HEAP[$p]];
      
      
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
      
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[HEAP[$p]] + 4] + 24];
      
      var $22 = HEAP[HEAP[$p]];
      FUNCTION_TABLE[$20]($22);
      __label__ = 3;
      break;
     case 3:
      
      var $24 = HEAP[$p] + 4;
      HEAP[$p] = $24;
      __label__ = 4;
      break;
     case 4:
      
      var $26 = HEAP[$i] - 1;
      HEAP[$i] = $26;
      
      
      if (HEAP[$i] >= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $36 = HEAP[HEAP[$self_addr] + 16];
      _free($36);
      __label__ = 7;
      break;
     case 7:
      
      var $38 = HEAP[$self_addr];
      _PyObject_Free($38);
      __label__ = 8;
      break;
     case 8:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Pdata_New() {
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
      
      var $1 = __PyObject_New(_PdataType);
      
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
      __label__ = 7;
      break;
     case 2:
      
      var $6 = HEAP[$self] + 12;
      HEAP[$6] = 8;
      
      var $8 = HEAP[$self] + 8;
      HEAP[$8] = 0;
      
      
      
      var $12 = HEAP[HEAP[$self] + 12] * 4;
      var $13 = _malloc($12);
      var $14 = $13;
      
      var $16 = HEAP[$self] + 16;
      HEAP[$16] = $14;
      
      
      
      
      if (HEAP[HEAP[$self] + 16] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $22 = HEAP[$self];
      HEAP[$0] = $22;
      __label__ = 7;
      break;
     case 4:
      
      var $24 = HEAP[$self];
      
      
      var $27 = HEAP[$24] - 1;
      var $28 = $24;
      HEAP[$28] = $27;
      
      
      
      if (HEAP[$24] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      var $37 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $39 = HEAP[$self];
      FUNCTION_TABLE[$37]($39);
      __label__ = 6;
      break;
     case 6:
      var $40 = _PyErr_NoMemory();
      HEAP[$0] = $40;
      __label__ = 7;
      break;
     case 7:
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
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
  function _stackUnderflow() {
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
      
      var $1 = HEAP[_UnpicklingError];
      _PyErr_SetString($1, __str2);
      HEAP[$0] = -1;
      var $2 = HEAP[$0];
      HEAP[$retval] = $2;
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
  function _Pdata_clear($self, $clearto) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $clearto_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $p = __stackBase__ + 20;
      var $_py_tmp = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$clearto_addr] = $clearto;
      
      
      if (HEAP[$clearto_addr] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = _stackUnderflow();
      HEAP[$0] = $3;
      __label__ = 11;
      break;
     case 2:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] <= HEAP[$clearto_addr]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 4:
      
      
      var $11 = HEAP[HEAP[$self_addr] + 8];
      HEAP[$i] = $11;
      
      
      
      
      var $16 = HEAP[HEAP[$self_addr] + 16] + 4 * HEAP[$clearto_addr];
      HEAP[$p] = $16;
      __label__ = 9;
      break;
     case 5:
      
      
      
      if (HEAP[HEAP[$p]] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      var $21 = HEAP[HEAP[$p]];
      HEAP[$_py_tmp] = $21;
      var $22 = HEAP[$p];
      HEAP[$22] = 0;
      
      
      
      var $26 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $28 = HEAP[$_py_tmp];
      HEAP[$28] = $26;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $37 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $38 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$37]($38);
      __label__ = 8;
      break;
     case 8:
      
      var $40 = HEAP[$p] + 4;
      HEAP[$p] = $40;
      __label__ = 9;
      break;
     case 9:
      
      var $42 = HEAP[$i] - 1;
      HEAP[$i] = $42;
      
      
      
      if (HEAP[$i] >= HEAP[$clearto_addr]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      var $47 = HEAP[$self_addr] + 8;
      var $48 = HEAP[$clearto_addr];
      HEAP[$47] = $48;
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 11:
      var $49 = HEAP[$0];
      HEAP[$retval] = $49;
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
  function _Pdata_grow($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $bigger = __stackBase__ + 12;
      var $nbytes = __stackBase__ + 16;
      var $tmp = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      
      
      
      var $4 = HEAP[HEAP[$self_addr] + 12] << 1;
      HEAP[$bigger] = $4;
      
      
      if (HEAP[$bigger] <= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $8 = HEAP[$bigger] * 4;
      HEAP[$nbytes] = $8;
      var $9 = HEAP[$nbytes];
      var $10 = Math.floor($9 / 4);
      
      
      if ($10 != HEAP[$bigger]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $16 = HEAP[HEAP[$self_addr] + 16];
      var $17 = HEAP[$nbytes];
      var $18 = _realloc($16, $17);
      var $19 = $18;
      HEAP[$tmp] = $19;
      
      
      if (HEAP[$tmp] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $23 = HEAP[$self_addr] + 16;
      var $24 = HEAP[$tmp];
      HEAP[$23] = $24;
      
      var $26 = HEAP[$self_addr] + 12;
      var $27 = HEAP[$bigger];
      HEAP[$26] = $27;
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      var $28 = _PyErr_NoMemory();
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 5:
      var $29 = HEAP[$0];
      HEAP[$retval] = $29;
      __label__ = 6;
      break;
     case 6:
      var $retval4 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Pdata_popTuple($self, $start) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $start_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $r = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $j = __stackBase__ + 24;
      var $l = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$start_addr] = $start;
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 8] - HEAP[$start_addr];
      HEAP[$l] = $5;
      var $6 = HEAP[$l];
      var $7 = _PyTuple_New($6);
      HEAP[$r] = $7;
      
      
      if (HEAP[$r] == 0) {
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
      var $10 = HEAP[$start_addr];
      HEAP[$i] = $10;
      HEAP[$j] = 0;
      __label__ = 4;
      break;
     case 3:
      
      
      
      
      
      
      
      
      var $19 = HEAP[HEAP[HEAP[$self_addr] + 16] + 4 * HEAP[$i]];
      
      var $21 = HEAP[$r] + 12 + HEAP[$j] * 4;
      HEAP[$21] = $19;
      
      var $23 = HEAP[$i] + 1;
      HEAP[$i] = $23;
      
      var $25 = HEAP[$j] + 1;
      HEAP[$j] = $25;
      __label__ = 4;
      break;
     case 4:
      
      
      
      if (HEAP[$j] < HEAP[$l]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $30 = HEAP[$self_addr] + 8;
      var $31 = HEAP[$start_addr];
      HEAP[$30] = $31;
      var $32 = HEAP[$r];
      HEAP[$0] = $32;
      __label__ = 6;
      break;
     case 6:
      var $33 = HEAP[$0];
      HEAP[$retval] = $33;
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
  function _Pdata_popList($self, $start) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $start_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $r = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $j = __stackBase__ + 24;
      var $l = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$start_addr] = $start;
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 8] - HEAP[$start_addr];
      HEAP[$l] = $5;
      var $6 = HEAP[$l];
      var $7 = _PyList_New($6);
      HEAP[$r] = $7;
      
      
      if (HEAP[$r] == 0) {
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
      var $10 = HEAP[$start_addr];
      HEAP[$i] = $10;
      HEAP[$j] = 0;
      __label__ = 4;
      break;
     case 3:
      
      
      
      
      
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[$self_addr] + 16] + 4 * HEAP[$i]];
      
      var $22 = HEAP[HEAP[$r] + 12] + 4 * HEAP[$j];
      HEAP[$22] = $20;
      
      var $24 = HEAP[$i] + 1;
      HEAP[$i] = $24;
      
      var $26 = HEAP[$j] + 1;
      HEAP[$j] = $26;
      __label__ = 4;
      break;
     case 4:
      
      
      
      if (HEAP[$j] < HEAP[$l]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $31 = HEAP[$self_addr] + 8;
      var $32 = HEAP[$start_addr];
      HEAP[$31] = $32;
      var $33 = HEAP[$r];
      HEAP[$0] = $33;
      __label__ = 6;
      break;
     case 6:
      var $34 = HEAP[$0];
      HEAP[$retval] = $34;
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
  function _cPickle_ErrFormat($ErrType, $stringformat, $format) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ErrType_addr = __stackBase__;
      var $stringformat_addr = __stackBase__ + 4;
      var $format_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $va = __stackBase__ + 20;
      var $args = __stackBase__ + 24;
      var $retval1 = __stackBase__ + 28;
      var $v = __stackBase__ + 32;
      
      HEAP[$ErrType_addr] = $ErrType;
      HEAP[$stringformat_addr] = $stringformat;
      HEAP[$format_addr] = $format;
      HEAP[$args] = 0;
      HEAP[$retval1] = 0;
      
      HEAP[$va] = arguments[_cPickle_ErrFormat.length];
      
      
      if (HEAP[$format_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[$va];
      var $4 = HEAP[$format_addr];
      var $5 = _Py_VaBuildValue($4, $3);
      HEAP[$args] = $5;
      __label__ = 2;
      break;
     case 2:
      
      
      
      if (HEAP[$format_addr] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      if (HEAP[$args] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 5:
      
      
      if (HEAP[$stringformat_addr] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      var $12 = HEAP[$stringformat_addr];
      var $13 = _PyString_FromString($12);
      HEAP[$retval1] = $13;
      
      
      if (HEAP[$retval1] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 8:
      
      
      if (HEAP[$retval1] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 9:
      
      
      if (HEAP[$args] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 10:
      var $20 = HEAP[$retval1];
      var $21 = HEAP[$args];
      var $22 = _PyString_Format($20, $21);
      HEAP[$v] = $22;
      
      
      
      var $26 = HEAP[HEAP[$retval1]] - 1;
      
      var $28 = HEAP[$retval1];
      HEAP[$28] = $26;
      
      
      
      
      if (HEAP[HEAP[$retval1]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $37 = HEAP[HEAP[HEAP[$retval1] + 4] + 24];
      var $38 = HEAP[$retval1];
      FUNCTION_TABLE[$37]($38);
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $42 = HEAP[HEAP[$args]] - 1;
      
      var $44 = HEAP[$args];
      HEAP[$44] = $42;
      
      
      
      
      if (HEAP[HEAP[$args]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $53 = HEAP[HEAP[HEAP[$args] + 4] + 24];
      var $54 = HEAP[$args];
      FUNCTION_TABLE[$53]($54);
      __label__ = 14;
      break;
     case 14:
      
      
      if (HEAP[$v] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 16:
      var $57 = HEAP[$v];
      HEAP[$retval1] = $57;
      __label__ = 17;
      break;
     case 17:
      __label__ = 21;
      break;
     case 18:
      
      
      if (HEAP[$args] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $60 = HEAP[$args];
      HEAP[$retval1] = $60;
      __label__ = 21;
      break;
     case 20:
      var $61 = HEAP[$ErrType_addr];
      _PyErr_SetObject($61, __Py_NoneStruct);
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 21:
      var $62 = HEAP[$ErrType_addr];
      var $63 = HEAP[$retval1];
      _PyErr_SetObject($62, $63);
      
      
      
      var $67 = HEAP[HEAP[$retval1]] - 1;
      
      var $69 = HEAP[$retval1];
      HEAP[$69] = $67;
      
      
      
      
      if (HEAP[HEAP[$retval1]] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $78 = HEAP[HEAP[HEAP[$retval1] + 4] + 24];
      var $79 = HEAP[$retval1];
      FUNCTION_TABLE[$78]($79);
      __label__ = 23;
      break;
     case 23:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 24:
      var $80 = HEAP[$0];
      HEAP[$retval] = $80;
      __label__ = 25;
      break;
     case 25:
      var $retval27 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _write_file($self, $s, $n) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $s_addr = __stackBase__ + 4;
      var $n_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $nbyteswritten = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$s_addr] = $s;
      HEAP[$n_addr] = $n;
      
      
      if (HEAP[$s_addr] == 0) {
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
      
      
      
      var $6 = HEAP[HEAP[$self_addr] + 16];
      _PyFile_IncUseCount($6);
      
      
      var $9 = HEAP[HEAP[$self_addr] + 8];
      var $10 = HEAP[$n_addr];
      var $11 = HEAP[$s_addr];
      var $12 = _fwrite($11, 1, $10, $9);
      HEAP[$nbyteswritten] = $12;
      
      
      
      var $16 = HEAP[HEAP[$self_addr] + 16];
      _PyFile_DecUseCount($16);
      
      
      
      if (HEAP[$n_addr] != HEAP[$nbyteswritten]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $20 = HEAP[_PyExc_IOError];
      var $21 = _PyErr_SetFromErrno($20);
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 4:
      var $22 = HEAP[$n_addr];
      HEAP[$0] = $22;
      __label__ = 5;
      break;
     case 5:
      var $23 = HEAP[$0];
      HEAP[$retval] = $23;
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
  function _write_cStringIO($self, $s, $n) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $s_addr = __stackBase__ + 4;
      var $n_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$s_addr] = $s;
      HEAP[$n_addr] = $n;
      
      
      if (HEAP[$s_addr] == 0) {
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
      
      
      var $5 = HEAP[HEAP[_PycStringIO] + 8];
      
      
      var $8 = HEAP[HEAP[$self_addr] + 16];
      var $9 = HEAP[$s_addr];
      var $10 = HEAP[$n_addr];
      var $11 = FUNCTION_TABLE[$5]($8, $9, $10);
      
      
      if ($11 != HEAP[$n_addr]) {
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
      var $14 = HEAP[$n_addr];
      HEAP[$0] = $14;
      __label__ = 5;
      break;
     case 5:
      var $15 = HEAP[$0];
      HEAP[$retval] = $15;
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
  function _write_none($self, $s, $n) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $s_addr = __stackBase__ + 4;
      var $n_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$s_addr] = $s;
      HEAP[$n_addr] = $n;
      
      
      if (HEAP[$s_addr] == 0) {
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
      var $3 = HEAP[$n_addr];
      HEAP[$0] = $3;
      __label__ = 3;
      break;
     case 3:
      var $4 = HEAP[$0];
      HEAP[$retval] = $4;
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
  function _write_other($self, $s, $_n) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $s_addr = __stackBase__ + 4;
      var $_n_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $py_str = __stackBase__ + 20;
      var $junk = __stackBase__ + 24;
      var $n = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$s_addr] = $s;
      HEAP[$_n_addr] = $_n;
      HEAP[$py_str] = 0;
      HEAP[$junk] = 0;
      var $1 = HEAP[$_n_addr];
      HEAP[$n] = $1;
      
      
      if (HEAP[$s_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 56] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 41;
      break;
     case 3:
      
      
      var $10 = HEAP[HEAP[$self_addr] + 56];
      
      
      var $13 = HEAP[HEAP[$self_addr] + 52];
      var $14 = _PyString_FromStringAndSize($13, $10);
      HEAP[$py_str] = $14;
      
      
      if (HEAP[$py_str] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 41;
      break;
     case 5:
      __label__ = 15;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 56] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 56] + HEAP[$n] > 256) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      var $27 = HEAP[$self_addr];
      var $28 = _write_other($27, 0, 0);
      
      if ($28 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = -1;
      __label__ = 41;
      break;
     case 10:
      
      
      if (HEAP[$n] > 256) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      var $32 = HEAP[$s_addr];
      var $33 = HEAP[$n];
      var $34 = _PyString_FromStringAndSize($32, $33);
      HEAP[$py_str] = $34;
      
      
      if (HEAP[$py_str] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$0] = -1;
      __label__ = 41;
      break;
     case 13:
      __label__ = 15;
      break;
     case 14:
      var $37 = HEAP[$n];
      
      
      
      
      
      
      var $44 = HEAP[HEAP[$self_addr] + 52] + HEAP[HEAP[$self_addr] + 56];
      var $45 = HEAP[$s_addr];
      _llvm_memcpy_p0i8_p0i8_i32($44, $45, $37, 1, 0);
      
      
      
      
      var $50 = HEAP[HEAP[$self_addr] + 56] + HEAP[$n];
      
      var $52 = HEAP[$self_addr] + 56;
      HEAP[$52] = $50;
      var $53 = HEAP[$n];
      HEAP[$0] = $53;
      __label__ = 41;
      break;
     case 15:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 16:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      var $62 = _PyTuple_New(1);
      
      var $64 = HEAP[$self_addr] + 24;
      HEAP[$64] = $62;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 24] + 12] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      
      
      
      
      var $83 = HEAP[HEAP[HEAP[$self_addr] + 24] + 12];
      
      
      var $86 = HEAP[$83] - 1;
      var $87 = $83;
      HEAP[$87] = $86;
      
      
      
      if (HEAP[$83] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      
      
      
      
      
      
      var $101 = HEAP[HEAP[HEAP[HEAP[HEAP[$self_addr] + 24] + 12] + 4] + 24];
      
      
      
      
      
      
      var $108 = HEAP[HEAP[HEAP[$self_addr] + 24] + 12];
      FUNCTION_TABLE[$101]($108);
      __label__ = 21;
      break;
     case 21:
      
      
      
      
      
      var $114 = HEAP[HEAP[$self_addr] + 24] + 12;
      var $115 = HEAP[$py_str];
      HEAP[$114] = $115;
      __label__ = 24;
      break;
     case 22:
      
      
      
      var $119 = HEAP[HEAP[$py_str]] - 1;
      
      var $121 = HEAP[$py_str];
      HEAP[$121] = $119;
      
      
      
      
      if (HEAP[HEAP[$py_str]] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $130 = HEAP[HEAP[HEAP[$py_str] + 4] + 24];
      var $131 = HEAP[$py_str];
      FUNCTION_TABLE[$130]($131);
      __label__ = 24;
      break;
     case 24:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 25:
      
      
      var $138 = HEAP[HEAP[$self_addr] + 24];
      
      
      var $141 = HEAP[HEAP[$self_addr] + 12];
      var $142 = _PyObject_Call($141, $138, 0);
      HEAP[$junk] = $142;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 24]] > 1) {
        __label__ = 26;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 26:
      
      
      var $151 = HEAP[HEAP[$self_addr] + 24];
      
      
      var $154 = HEAP[$151] - 1;
      var $155 = $151;
      HEAP[$155] = $154;
      
      
      
      if (HEAP[$151] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      
      
      var $165 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 24] + 4] + 24];
      
      
      var $168 = HEAP[HEAP[$self_addr] + 24];
      FUNCTION_TABLE[$165]($168);
      __label__ = 28;
      break;
     case 28:
      
      var $170 = HEAP[$self_addr] + 24;
      HEAP[$170] = 0;
      __label__ = 29;
      break;
     case 29:
      
      
      if (HEAP[$junk] != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 30:
      
      
      
      var $176 = HEAP[HEAP[$junk]] - 1;
      
      var $178 = HEAP[$junk];
      HEAP[$178] = $176;
      
      
      
      
      if (HEAP[HEAP[$junk]] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $187 = HEAP[HEAP[HEAP[$junk] + 4] + 24];
      var $188 = HEAP[$junk];
      FUNCTION_TABLE[$187]($188);
      __label__ = 32;
      break;
     case 32:
      __label__ = 40;
      break;
     case 33:
      HEAP[$0] = -1;
      __label__ = 41;
      break;
     case 34:
      
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 16] + 8] == HEAP[HEAP[HEAP[$self_addr] + 16] + 12]) {
        __label__ = 35;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 35:
      
      
      
      var $205 = HEAP[HEAP[$self_addr] + 16];
      var $206 = _Pdata_grow($205);
      
      if ($206 < 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 36:
      
      
      
      var $211 = HEAP[HEAP[$py_str]] - 1;
      
      var $213 = HEAP[$py_str];
      HEAP[$213] = $211;
      
      
      
      
      if (HEAP[HEAP[$py_str]] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $222 = HEAP[HEAP[HEAP[$py_str] + 4] + 24];
      var $223 = HEAP[$py_str];
      FUNCTION_TABLE[$222]($223);
      __label__ = 38;
      break;
     case 38:
      HEAP[$0] = -1;
      __label__ = 41;
      break;
     case 39:
      
      
      
      
      
      
      
      
      
      var $233 = HEAP[HEAP[$self_addr] + 16];
      
      var $235 = HEAP[$233 + 8];
      var $236 = HEAP[HEAP[HEAP[$self_addr] + 16] + 16] + 4 * $235;
      var $237 = HEAP[$py_str];
      HEAP[$236] = $237;
      var $238 = $235 + 1;
      var $239 = $233 + 8;
      HEAP[$239] = $238;
      __label__ = 40;
      break;
     case 40:
      
      var $241 = HEAP[$self_addr] + 56;
      HEAP[$241] = 0;
      var $242 = HEAP[$n];
      HEAP[$0] = $242;
      __label__ = 41;
      break;
     case 41:
      var $243 = HEAP[$0];
      HEAP[$retval] = $243;
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
  function _read_file($self, $s, $n) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $s_addr = __stackBase__ + 4;
      var $n_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $nbytesread = __stackBase__ + 20;
      var $size = __stackBase__ + 24;
      var $newbuf = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$s_addr] = $s;
      HEAP[$n_addr] = $n;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 68] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      var $max = HEAP[$n_addr] >= 32 ? HEAP[$n_addr] : 32;
      HEAP[$size] = $max;
      var $7 = HEAP[$size];
      var $8 = _malloc($7);
      
      var $10 = HEAP[$self_addr] + 72;
      HEAP[$10] = $8;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 72] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $15 = _PyErr_NoMemory();
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 3:
      
      var $17 = HEAP[$self_addr] + 68;
      var $18 = HEAP[$size];
      HEAP[$17] = $18;
      __label__ = 8;
      break;
     case 4:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 68] < HEAP[$n_addr]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $24 = HEAP[$n_addr];
      
      
      var $27 = HEAP[HEAP[$self_addr] + 72];
      var $28 = _realloc($27, $24);
      HEAP[$newbuf] = $28;
      
      
      if (HEAP[$newbuf] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $31 = _PyErr_NoMemory();
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 7:
      
      var $33 = HEAP[$self_addr] + 72;
      var $34 = HEAP[$newbuf];
      HEAP[$33] = $34;
      
      var $36 = HEAP[$self_addr] + 68;
      var $37 = HEAP[$n_addr];
      HEAP[$36] = $37;
      __label__ = 8;
      break;
     case 8:
      
      
      
      var $41 = HEAP[HEAP[$self_addr] + 12];
      _PyFile_IncUseCount($41);
      
      
      var $44 = HEAP[HEAP[$self_addr] + 8];
      var $45 = HEAP[$n_addr];
      
      
      var $48 = HEAP[HEAP[$self_addr] + 72];
      var $49 = _fread($48, 1, $45, $44);
      HEAP[$nbytesread] = $49;
      
      
      
      var $53 = HEAP[HEAP[$self_addr] + 12];
      _PyFile_DecUseCount($53);
      
      
      
      if (HEAP[$n_addr] != HEAP[$nbytesread]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      var $59 = HEAP[HEAP[$self_addr] + 8];
      var $60 = _feof($59);
      
      if ($60 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $62 = HEAP[_PyExc_EOFError];
      _PyErr_SetNone($62);
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 11:
      var $63 = HEAP[_PyExc_IOError];
      var $64 = _PyErr_SetFromErrno($63);
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 12:
      
      
      var $67 = HEAP[HEAP[$self_addr] + 72];
      var $68 = HEAP[$s_addr];
      HEAP[$68] = $67;
      var $69 = HEAP[$n_addr];
      HEAP[$0] = $69;
      __label__ = 13;
      break;
     case 13:
      var $70 = HEAP[$0];
      HEAP[$retval] = $70;
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
  function _readline_file($self, $s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $s_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $bigger = __stackBase__ + 20;
      var $newbuf = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$s_addr] = $s;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 68] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $5 = _malloc(40);
      
      var $7 = HEAP[$self_addr] + 72;
      HEAP[$7] = $5;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 72] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $12 = _PyErr_NoMemory();
      HEAP[$0] = -1;
      __label__ = 16;
      break;
     case 3:
      
      var $14 = HEAP[$self_addr] + 68;
      HEAP[$14] = 40;
      __label__ = 4;
      break;
     case 4:
      HEAP[$i] = 0;
      __label__ = 5;
      break;
     case 5:
      __label__ = 10;
      break;
     case 6:
      
      
      var $17 = HEAP[HEAP[$self_addr] + 8];
      var $18 = _feof($17);
      
      if ($18 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      var $22 = HEAP[HEAP[$self_addr] + 72];
      
      
      var $25 = HEAP[HEAP[$self_addr] + 8];
      var $26 = __IO_getc($25);
      var $27 = $26 & 255;
      
      var $29 = $22 + HEAP[$i];
      HEAP[$29] = $27;
      
      
      
      
      if (HEAP[$22 + HEAP[$i]] == 10) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $39 = HEAP[HEAP[$self_addr] + 72] + (HEAP[$i] + 1);
      HEAP[$39] = 0;
      
      
      var $42 = HEAP[HEAP[$self_addr] + 72];
      var $43 = HEAP[$s_addr];
      HEAP[$43] = $42;
      
      var $45 = HEAP[$i] + 1;
      HEAP[$0] = $45;
      __label__ = 16;
      break;
     case 9:
      
      var $47 = HEAP[$i] + 1;
      HEAP[$i] = $47;
      __label__ = 10;
      break;
     case 10:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 68] - 1 > HEAP[$i]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      var $57 = HEAP[HEAP[$self_addr] + 68] << 1;
      HEAP[$bigger] = $57;
      
      
      if (HEAP[$bigger] <= 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $60 = _PyErr_NoMemory();
      HEAP[$0] = -1;
      __label__ = 16;
      break;
     case 13:
      var $61 = HEAP[$bigger];
      
      
      var $64 = HEAP[HEAP[$self_addr] + 72];
      var $65 = _realloc($64, $61);
      HEAP[$newbuf] = $65;
      
      
      if (HEAP[$newbuf] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $68 = _PyErr_NoMemory();
      HEAP[$0] = -1;
      __label__ = 16;
      break;
     case 15:
      
      var $70 = HEAP[$self_addr] + 72;
      var $71 = HEAP[$newbuf];
      HEAP[$70] = $71;
      
      var $73 = HEAP[$self_addr] + 68;
      var $74 = HEAP[$bigger];
      HEAP[$73] = $74;
      __label__ = 5;
      break;
     case 16:
      var $75 = HEAP[$0];
      HEAP[$retval] = $75;
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
  function _read_cStringIO($self, $s, $n) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $s_addr = __stackBase__ + 4;
      var $n_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $ptr = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$s_addr] = $s;
      HEAP[$n_addr] = $n;
      
      
      var $3 = HEAP[HEAP[_PycStringIO]];
      
      
      var $6 = HEAP[HEAP[$self_addr] + 12];
      var $7 = HEAP[$n_addr];
      var $8 = FUNCTION_TABLE[$3]($6, $ptr, $7);
      
      
      if ($8 != HEAP[$n_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $11 = HEAP[_PyExc_EOFError];
      _PyErr_SetNone($11);
      HEAP[$0] = -1;
      __label__ = 3;
      break;
     case 2:
      var $12 = HEAP[$ptr];
      var $13 = HEAP[$s_addr];
      HEAP[$13] = $12;
      var $14 = HEAP[$n_addr];
      HEAP[$0] = $14;
      __label__ = 3;
      break;
     case 3:
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
  function _readline_cStringIO($self, $s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $s_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $n = __stackBase__ + 16;
      var $ptr = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$s_addr] = $s;
      
      
      var $3 = HEAP[HEAP[_PycStringIO] + 4];
      
      
      var $6 = HEAP[HEAP[$self_addr] + 12];
      var $7 = FUNCTION_TABLE[$3]($6, $ptr);
      HEAP[$n] = $7;
      
      
      if (HEAP[$n] < 0) {
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
      var $10 = HEAP[$ptr];
      var $11 = HEAP[$s_addr];
      HEAP[$11] = $10;
      var $12 = HEAP[$n];
      HEAP[$0] = $12;
      __label__ = 3;
      break;
     case 3:
      var $13 = HEAP[$0];
      HEAP[$retval] = $13;
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
  function _read_other($self, $s, $n) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $s_addr = __stackBase__ + 4;
      var $n_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $bytes = __stackBase__ + 20;
      var $str = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$s_addr] = $s;
      HEAP[$n_addr] = $n;
      HEAP[$str] = 0;
      var $1 = HEAP[$n_addr];
      var $2 = _PyInt_FromSsize_t($1);
      HEAP[$bytes] = $2;
      
      
      if (HEAP[$bytes] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 25;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $9 = _PyTuple_New(1);
      
      var $11 = HEAP[$self_addr] + 28;
      HEAP[$11] = $9;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 28] + 12] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[$self_addr] + 28] + 12];
      
      
      var $33 = HEAP[$30] - 1;
      var $34 = $30;
      HEAP[$34] = $33;
      
      
      
      if (HEAP[$30] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      var $48 = HEAP[HEAP[HEAP[HEAP[HEAP[$self_addr] + 28] + 12] + 4] + 24];
      
      
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$self_addr] + 28] + 12];
      FUNCTION_TABLE[$48]($55);
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      
      var $61 = HEAP[HEAP[$self_addr] + 28] + 12;
      var $62 = HEAP[$bytes];
      HEAP[$61] = $62;
      __label__ = 10;
      break;
     case 8:
      
      
      
      var $66 = HEAP[HEAP[$bytes]] - 1;
      
      var $68 = HEAP[$bytes];
      HEAP[$68] = $66;
      
      
      
      
      if (HEAP[HEAP[$bytes]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $77 = HEAP[HEAP[HEAP[$bytes] + 4] + 24];
      var $78 = HEAP[$bytes];
      FUNCTION_TABLE[$77]($78);
      __label__ = 10;
      break;
     case 10:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      
      var $85 = HEAP[HEAP[$self_addr] + 28];
      
      
      var $88 = HEAP[HEAP[$self_addr] + 20];
      var $89 = _PyObject_Call($88, $85, 0);
      HEAP[$str] = $89;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 28]] > 1) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      
      var $98 = HEAP[HEAP[$self_addr] + 28];
      
      
      var $101 = HEAP[$98] - 1;
      var $102 = $98;
      HEAP[$102] = $101;
      
      
      
      if (HEAP[$98] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      
      var $112 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 28] + 4] + 24];
      
      
      var $115 = HEAP[HEAP[$self_addr] + 28];
      FUNCTION_TABLE[$112]($115);
      __label__ = 14;
      break;
     case 14:
      
      var $117 = HEAP[$self_addr] + 28;
      HEAP[$117] = 0;
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$str] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      HEAP[$0] = -1;
      __label__ = 25;
      break;
     case 17:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      
      
      var $126 = HEAP[HEAP[$self_addr] + 44];
      
      
      var $129 = HEAP[$126] - 1;
      var $130 = $126;
      HEAP[$130] = $129;
      
      
      
      if (HEAP[$126] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      
      var $140 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 44] + 4] + 24];
      
      
      var $143 = HEAP[HEAP[$self_addr] + 44];
      FUNCTION_TABLE[$140]($143);
      __label__ = 20;
      break;
     case 20:
      
      var $145 = HEAP[$self_addr] + 44;
      var $146 = HEAP[$str];
      HEAP[$145] = $146;
      var $147 = HEAP[$str];
      var $148 = _PyString_AsString($147);
      var $149 = HEAP[$s_addr];
      HEAP[$149] = $148;
      
      
      
      if (HEAP[HEAP[$s_addr]] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      HEAP[$0] = -1;
      __label__ = 25;
      break;
     case 22:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 8] != HEAP[$n_addr]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      var $159 = HEAP[_PyExc_EOFError];
      _PyErr_SetNone($159);
      HEAP[$0] = -1;
      __label__ = 25;
      break;
     case 24:
      var $160 = HEAP[$n_addr];
      HEAP[$0] = $160;
      __label__ = 25;
      break;
     case 25:
      var $161 = HEAP[$0];
      HEAP[$retval] = $161;
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
  function _readline_other($self, $s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $s_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $str = __stackBase__ + 16;
      var $str_size = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$s_addr] = $s;
      var $1 = HEAP[_empty_tuple];
      
      
      var $4 = HEAP[HEAP[$self_addr] + 16];
      var $5 = _PyObject_CallObject($4, $1);
      HEAP[$str] = $5;
      
      
      if (HEAP[$str] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 2:
      var $8 = HEAP[$str];
      var $9 = _PyString_Size($8);
      HEAP[$str_size] = $9;
      
      
      if (HEAP[$str_size] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 4:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      var $18 = HEAP[HEAP[$self_addr] + 44];
      
      
      var $21 = HEAP[$18] - 1;
      var $22 = $18;
      HEAP[$22] = $21;
      
      
      
      if (HEAP[$18] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      
      var $32 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 44] + 4] + 24];
      
      
      var $35 = HEAP[HEAP[$self_addr] + 44];
      FUNCTION_TABLE[$32]($35);
      __label__ = 7;
      break;
     case 7:
      
      var $37 = HEAP[$self_addr] + 44;
      var $38 = HEAP[$str];
      HEAP[$37] = $38;
      var $39 = HEAP[$str];
      var $40 = _PyString_AsString($39);
      var $41 = HEAP[$s_addr];
      HEAP[$41] = $40;
      
      
      
      if (HEAP[HEAP[$s_addr]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 9:
      var $45 = HEAP[$str_size];
      HEAP[$0] = $45;
      __label__ = 10;
      break;
     case 10:
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
  function _pystrndup($s, $n) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $n_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $r = __stackBase__ + 16;
      
      HEAP[$s_addr] = $s;
      HEAP[$n_addr] = $n;
      
      var $2 = HEAP[$n_addr] + 1;
      var $3 = _malloc($2);
      HEAP[$r] = $3;
      
      
      if (HEAP[$r] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $6 = _PyErr_NoMemory();
      
      HEAP[$0] = $6;
      __label__ = 3;
      break;
     case 2:
      var $8 = HEAP[$n_addr];
      var $9 = HEAP[$r];
      var $10 = HEAP[$s_addr];
      _llvm_memcpy_p0i8_p0i8_i32($9, $10, $8, 1, 0);
      
      
      var $13 = HEAP[$r] + HEAP[$n_addr];
      HEAP[$13] = 0;
      var $14 = HEAP[$r];
      HEAP[$0] = $14;
      __label__ = 3;
      break;
     case 3:
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
  function _get($self, $id) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 62;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 62);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $id_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $value = __stackBase__ + 16;
      var $mv = __stackBase__ + 20;
      var $c_value = __stackBase__ + 24;
      var $s = __stackBase__ + 28;
      var $len = __stackBase__ + 58;
      
      HEAP[$self_addr] = $self;
      HEAP[$id_addr] = $id;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 20];
      var $4 = HEAP[$id_addr];
      var $5 = _PyDict_GetItem($3, $4);
      HEAP[$mv] = $5;
      
      
      if (HEAP[$mv] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $8 = HEAP[_PyExc_KeyError];
      var $9 = HEAP[$id_addr];
      _PyErr_SetObject($8, $9);
      HEAP[$0] = -1;
      __label__ = 21;
      break;
     case 2:
      var $10 = HEAP[$mv];
      var $11 = _PyTuple_GetItem($10, 0);
      HEAP[$value] = $11;
      
      
      if (HEAP[$value] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 21;
      break;
     case 4:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$value] + 4] + 84] & 8388608) == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $21 = HEAP[_PicklingError];
      _PyErr_SetString($21, __str3);
      HEAP[$0] = -1;
      __label__ = 21;
      break;
     case 6:
      
      
      
      var $25 = HEAP[HEAP[$value] + 8];
      HEAP[$c_value] = $25;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      HEAP[$s] = 103;
      
      var $31 = $s + 1;
      var $32 = HEAP[$c_value];
      var $33 = _PyOS_snprintf($31, 29, __str4, allocate([ $32, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      var $s8 = $s;
      var $34 = _strlen($s8);
      HEAP[$len] = $34;
      __label__ = 18;
      break;
     case 8:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 16] + 4] == _PdataType) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 9:
      var $41 = HEAP[$self_addr];
      var $42 = _write_other($41, 0, 0);
      
      if ($42 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = -1;
      __label__ = 21;
      break;
     case 11:
      
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 16] + 8] == HEAP[HEAP[HEAP[$self_addr] + 16] + 12]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      
      var $60 = HEAP[HEAP[$self_addr] + 16];
      var $61 = _Pdata_grow($60);
      
      if ($61 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$0] = -1;
      __label__ = 21;
      break;
     case 14:
      
      
      
      var $66 = HEAP[HEAP[$mv]] + 1;
      
      var $68 = HEAP[$mv];
      HEAP[$68] = $66;
      
      
      
      
      
      
      
      
      
      var $78 = HEAP[HEAP[$self_addr] + 16];
      
      var $80 = HEAP[$78 + 8];
      var $81 = HEAP[HEAP[HEAP[$self_addr] + 16] + 16] + 4 * $80;
      var $82 = HEAP[$mv];
      HEAP[$81] = $82;
      var $83 = $80 + 1;
      var $84 = $78 + 8;
      HEAP[$84] = $83;
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 15:
      
      
      if (HEAP[$c_value] <= 255) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      HEAP[$s] = 104;
      
      var $89 = HEAP[$c_value] & 255;
      
      HEAP[$s + 1] = $89;
      HEAP[$len] = 2;
      __label__ = 18;
      break;
     case 17:
      
      HEAP[$s] = 106;
      
      var $93 = HEAP[$c_value] & 255;
      
      HEAP[$s + 1] = $93;
      
      
      var $97 = HEAP[$c_value] >> 8 & 255;
      
      HEAP[$s + 2] = $97;
      
      
      var $101 = HEAP[$c_value] >> 16 & 255;
      
      HEAP[$s + 3] = $101;
      
      
      var $105 = HEAP[$c_value] >> 24 & 255;
      
      HEAP[$s + 4] = $105;
      HEAP[$len] = 5;
      __label__ = 18;
      break;
     case 18:
      
      
      var $109 = HEAP[HEAP[$self_addr] + 48];
      var $110 = HEAP[$len];
      var $111 = HEAP[$self_addr];
      var $s20 = $s;
      var $112 = FUNCTION_TABLE[$109]($111, $s20, $110);
      
      if ($112 < 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$0] = -1;
      __label__ = 21;
      break;
     case 20:
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 21:
      var $114 = HEAP[$0];
      HEAP[$retval] = $114;
      __label__ = 22;
      break;
     case 22:
      var $retval24 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _put($self, $ob) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $ob_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$ob_addr] = $ob;
      
      
      
      
      if (HEAP[HEAP[$ob_addr]] <= 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] != 0) {
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
      var $9 = HEAP[$self_addr];
      var $10 = HEAP[$ob_addr];
      var $11 = _put2($9, $10);
      HEAP[$0] = $11;
      __label__ = 4;
      break;
     case 4:
      var $12 = HEAP[$0];
      HEAP[$retval] = $12;
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
  function _put2($self, $ob) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 70;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 70);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $ob_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $c_str = __stackBase__ + 16;
      var $p = __stackBase__ + 46;
      var $len = __stackBase__ + 50;
      var $res = __stackBase__ + 54;
      var $py_ob_id = __stackBase__ + 58;
      var $memo_len = __stackBase__ + 62;
      var $t = __stackBase__ + 66;
      
      HEAP[$self_addr] = $self;
      HEAP[$ob_addr] = $ob;
      HEAP[$res] = -1;
      HEAP[$py_ob_id] = 0;
      HEAP[$memo_len] = 0;
      HEAP[$t] = 0;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] != 0) {
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
      
      
      var $7 = HEAP[HEAP[$self_addr] + 20];
      var $8 = _PyDict_Size($7);
      HEAP[$p] = $8;
      
      
      if (HEAP[$p] < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $12 = HEAP[$p] + 1;
      HEAP[$p] = $12;
      
      var $14 = HEAP[$ob_addr];
      var $15 = _PyLong_FromVoidPtr($14);
      HEAP[$py_ob_id] = $15;
      
      
      if (HEAP[$py_ob_id] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $18 = HEAP[$p];
      var $19 = _PyInt_FromLong($18);
      HEAP[$memo_len] = $19;
      
      
      if (HEAP[$memo_len] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $22 = _PyTuple_New(2);
      HEAP[$t] = $22;
      
      
      if (HEAP[$t] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $28 = HEAP[$t] + 12;
      var $29 = HEAP[$memo_len];
      HEAP[$28] = $29;
      
      
      
      var $33 = HEAP[HEAP[$memo_len]] + 1;
      
      var $35 = HEAP[$memo_len];
      HEAP[$35] = $33;
      
      
      
      var $39 = HEAP[$t] + 12 + 4;
      var $40 = HEAP[$ob_addr];
      HEAP[$39] = $40;
      
      
      
      var $44 = HEAP[HEAP[$ob_addr]] + 1;
      
      var $46 = HEAP[$ob_addr];
      HEAP[$46] = $44;
      
      
      var $49 = HEAP[HEAP[$self_addr] + 20];
      var $50 = HEAP[$py_ob_id];
      var $51 = HEAP[$t];
      var $52 = _PyDict_SetItem($49, $50, $51);
      
      if ($52 < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      HEAP[$c_str] = 112;
      
      var $59 = $c_str + 1;
      var $60 = HEAP[$p];
      var $61 = _PyOS_snprintf($59, 29, __str5, allocate([ $60, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      var $c_str9 = $c_str;
      var $62 = _strlen($c_str9);
      HEAP[$len] = $62;
      __label__ = 19;
      break;
     case 9:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 16] + 4] == _PdataType) {
        __label__ = 10;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 10:
      var $69 = HEAP[$self_addr];
      var $70 = _write_other($69, 0, 0);
      
      if ($70 < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = -1;
      __label__ = 31;
      break;
     case 12:
      
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 16] + 8] == HEAP[HEAP[HEAP[$self_addr] + 16] + 12]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      
      var $88 = HEAP[HEAP[$self_addr] + 16];
      var $89 = _Pdata_grow($88);
      
      if ($89 < 0) {
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
      
      
      
      var $94 = HEAP[HEAP[$memo_len]] + 1;
      
      var $96 = HEAP[$memo_len];
      HEAP[$96] = $94;
      
      
      
      
      
      
      
      
      
      var $106 = HEAP[HEAP[$self_addr] + 16];
      
      var $108 = HEAP[$106 + 8];
      var $109 = HEAP[HEAP[HEAP[$self_addr] + 16] + 16] + 4 * $108;
      var $110 = HEAP[$memo_len];
      HEAP[$109] = $110;
      var $111 = $108 + 1;
      var $112 = $106 + 8;
      HEAP[$112] = $111;
      HEAP[$res] = 0;
      __label__ = 21;
      break;
     case 16:
      
      
      if (HEAP[$p] > 255) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      HEAP[$c_str] = 114;
      
      var $117 = HEAP[$p] & 255;
      
      HEAP[$c_str + 1] = $117;
      
      
      var $121 = HEAP[$p] >> 8 & 255;
      
      HEAP[$c_str + 2] = $121;
      
      
      var $125 = HEAP[$p] >> 16 & 255;
      
      HEAP[$c_str + 3] = $125;
      
      
      var $129 = HEAP[$p] >> 24 & 255;
      
      HEAP[$c_str + 4] = $129;
      HEAP[$len] = 5;
      __label__ = 19;
      break;
     case 18:
      
      HEAP[$c_str] = 113;
      
      var $133 = HEAP[$p] & 255;
      
      HEAP[$c_str + 1] = $133;
      HEAP[$len] = 2;
      __label__ = 19;
      break;
     case 19:
      
      
      var $137 = HEAP[HEAP[$self_addr] + 48];
      var $138 = HEAP[$len];
      var $139 = HEAP[$self_addr];
      var $c_str21 = $c_str;
      var $140 = FUNCTION_TABLE[$137]($139, $c_str21, $138);
      
      if ($140 < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      HEAP[$res] = 0;
      __label__ = 21;
      break;
     case 21:
      
      
      if (HEAP[$py_ob_id] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      
      var $147 = HEAP[HEAP[$py_ob_id]] - 1;
      
      var $149 = HEAP[$py_ob_id];
      HEAP[$149] = $147;
      
      
      
      
      if (HEAP[HEAP[$py_ob_id]] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $158 = HEAP[HEAP[HEAP[$py_ob_id] + 4] + 24];
      var $159 = HEAP[$py_ob_id];
      FUNCTION_TABLE[$158]($159);
      __label__ = 24;
      break;
     case 24:
      
      
      if (HEAP[$memo_len] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      
      var $165 = HEAP[HEAP[$memo_len]] - 1;
      
      var $167 = HEAP[$memo_len];
      HEAP[$167] = $165;
      
      
      
      
      if (HEAP[HEAP[$memo_len]] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $176 = HEAP[HEAP[HEAP[$memo_len] + 4] + 24];
      var $177 = HEAP[$memo_len];
      FUNCTION_TABLE[$176]($177);
      __label__ = 27;
      break;
     case 27:
      
      
      if (HEAP[$t] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      
      
      
      var $183 = HEAP[HEAP[$t]] - 1;
      
      var $185 = HEAP[$t];
      HEAP[$185] = $183;
      
      
      
      
      if (HEAP[HEAP[$t]] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $194 = HEAP[HEAP[HEAP[$t] + 4] + 24];
      var $195 = HEAP[$t];
      FUNCTION_TABLE[$194]($195);
      __label__ = 30;
      break;
     case 30:
      var $196 = HEAP[$res];
      HEAP[$0] = $196;
      __label__ = 31;
      break;
     case 31:
      var $197 = HEAP[$0];
      HEAP[$retval] = $197;
      __label__ = 32;
      break;
     case 32:
      var $retval33 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval33;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _whichmodule($global, $global_name) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $global_addr = __stackBase__;
      var $global_name_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $j = __stackBase__ + 20;
      var $module = __stackBase__ + 24;
      var $modules_dict = __stackBase__ + 28;
      var $global_name_attr = __stackBase__ + 32;
      var $name = __stackBase__ + 36;
      
      HEAP[$global_addr] = $global;
      HEAP[$global_name_addr] = $global_name;
      HEAP[$module] = 0;
      HEAP[$modules_dict] = 0;
      HEAP[$global_name_attr] = 0;
      HEAP[$name] = 0;
      var $1 = HEAP[$global_addr];
      var $2 = _PyObject_GetAttrString($1, __str6);
      HEAP[$module] = $2;
      
      
      if (HEAP[$module] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[$module];
      HEAP[$0] = $5;
      __label__ = 23;
      break;
     case 2:
      var $6 = HEAP[_PyExc_AttributeError];
      var $7 = _PyErr_ExceptionMatches($6);
      
      if ($7 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyErr_Clear();
      var $9 = _PySys_GetObject(__str7);
      HEAP[$modules_dict] = $9;
      
      
      if (HEAP[$modules_dict] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 6:
      HEAP[$i] = 0;
      __label__ = 19;
      break;
     case 7:
      var $12 = HEAP[___main___str];
      var $13 = HEAP[$name];
      var $14 = _PyObject_Compare($13, $12);
      
      if ($14 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $16 = HEAP[$module];
      var $17 = HEAP[$global_name_addr];
      var $18 = _PyObject_GetAttr($16, $17);
      HEAP[$global_name_attr] = $18;
      
      
      if (HEAP[$global_name_attr] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      var $21 = HEAP[_PyExc_AttributeError];
      var $22 = _PyErr_ExceptionMatches($21);
      
      if ($22 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      _PyErr_Clear();
      __label__ = 19;
      break;
     case 11:
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 12:
      
      
      
      if (HEAP[$global_name_attr] != HEAP[$global_addr]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      
      
      
      var $30 = HEAP[HEAP[$global_name_attr]] - 1;
      
      var $32 = HEAP[$global_name_attr];
      HEAP[$32] = $30;
      
      
      
      
      if (HEAP[HEAP[$global_name_attr]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $41 = HEAP[HEAP[HEAP[$global_name_attr] + 4] + 24];
      var $42 = HEAP[$global_name_attr];
      FUNCTION_TABLE[$41]($42);
      __label__ = 15;
      break;
     case 15:
      __label__ = 19;
      break;
     case 16:
      
      
      
      var $46 = HEAP[HEAP[$global_name_attr]] - 1;
      
      var $48 = HEAP[$global_name_attr];
      HEAP[$48] = $46;
      
      
      
      
      if (HEAP[HEAP[$global_name_attr]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[$global_name_attr] + 4] + 24];
      var $58 = HEAP[$global_name_attr];
      FUNCTION_TABLE[$57]($58);
      __label__ = 18;
      break;
     case 18:
      __label__ = 20;
      break;
     case 19:
      var $59 = HEAP[$modules_dict];
      var $60 = _PyDict_Next($59, $i, $name, $module);
      HEAP[$j] = $60;
      
      
      if (HEAP[$j] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      if (HEAP[$j] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      var $65 = HEAP[___main___str];
      HEAP[$name] = $65;
      __label__ = 22;
      break;
     case 22:
      
      
      
      var $69 = HEAP[HEAP[$name]] + 1;
      var $70 = HEAP[$name];
      HEAP[$70] = $69;
      var $71 = HEAP[$name];
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
  function _fast_save_enter($self, $obj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $obj_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $key = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$obj_addr] = $obj;
      
      
      
      var $4 = HEAP[HEAP[$self_addr] + 64] + 1;
      
      var $6 = HEAP[$self_addr] + 64;
      HEAP[$6] = $4;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 64] > 49) {
        __label__ = 1;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 1:
      HEAP[$key] = 0;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 68] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      var $15 = _PyDict_New();
      
      var $17 = HEAP[$self_addr] + 68;
      HEAP[$17] = $15;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 68] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $23 = HEAP[$self_addr] + 64;
      HEAP[$23] = -1;
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 4:
      
      var $25 = HEAP[$obj_addr];
      var $26 = _PyLong_FromVoidPtr($25);
      HEAP[$key] = $26;
      
      
      if (HEAP[$key] == 0) {
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
      
      
      var $31 = HEAP[HEAP[$self_addr] + 68];
      var $32 = HEAP[$key];
      var $33 = _PyDict_GetItem($31, $32);
      
      if ($33 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      var $38 = HEAP[HEAP[$key]] - 1;
      
      var $40 = HEAP[$key];
      HEAP[$40] = $38;
      
      
      
      
      if (HEAP[HEAP[$key]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $50 = HEAP[$key];
      FUNCTION_TABLE[$49]($50);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$obj_addr] + 4] + 12];
      var $56 = HEAP[_PyExc_ValueError];
      var $57 = HEAP[$obj_addr];
      var $58 = _PyErr_Format($56, __str8, allocate([ $55, 0, 0, 0, $57, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      
      var $60 = HEAP[$self_addr] + 64;
      HEAP[$60] = -1;
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 10:
      
      
      var $63 = HEAP[HEAP[$self_addr] + 68];
      var $64 = HEAP[$key];
      var $65 = _PyDict_SetItem($63, $64, __Py_NoneStruct);
      
      if ($65 < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      var $70 = HEAP[HEAP[$key]] - 1;
      
      var $72 = HEAP[$key];
      HEAP[$72] = $70;
      
      
      
      
      if (HEAP[HEAP[$key]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $81 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $82 = HEAP[$key];
      FUNCTION_TABLE[$81]($82);
      __label__ = 13;
      break;
     case 13:
      
      var $84 = HEAP[$self_addr] + 64;
      HEAP[$84] = -1;
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 14:
      
      
      
      var $88 = HEAP[HEAP[$key]] - 1;
      
      var $90 = HEAP[$key];
      HEAP[$90] = $88;
      
      
      
      
      if (HEAP[HEAP[$key]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $99 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $100 = HEAP[$key];
      FUNCTION_TABLE[$99]($100);
      __label__ = 16;
      break;
     case 16:
      HEAP[$0] = 1;
      __label__ = 17;
      break;
     case 17:
      var $101 = HEAP[$0];
      HEAP[$retval] = $101;
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
  function _fast_save_leave($self, $obj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $obj_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $key = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$obj_addr] = $obj;
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 64] > 49;
      var $6 = HEAP[HEAP[$self_addr] + 64] - 1;
      
      var $8 = HEAP[$self_addr] + 64;
      HEAP[$8] = $6;
      
      if ($5 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      
      var $10 = HEAP[$obj_addr];
      var $11 = _PyLong_FromVoidPtr($10);
      HEAP[$key] = $11;
      
      
      if (HEAP[$key] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 3:
      
      
      var $16 = HEAP[HEAP[$self_addr] + 68];
      var $17 = HEAP[$key];
      var $18 = _PyDict_DelItem($16, $17);
      
      if ($18 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $23 = HEAP[HEAP[$key]] - 1;
      
      var $25 = HEAP[$key];
      HEAP[$25] = $23;
      
      
      
      
      if (HEAP[HEAP[$key]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $34 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $35 = HEAP[$key];
      FUNCTION_TABLE[$34]($35);
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 7:
      
      
      
      var $39 = HEAP[HEAP[$key]] - 1;
      
      var $41 = HEAP[$key];
      HEAP[$41] = $39;
      
      
      
      
      if (HEAP[HEAP[$key]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $50 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $51 = HEAP[$key];
      FUNCTION_TABLE[$50]($51);
      __label__ = 9;
      break;
     case 9:
      HEAP[$0] = 1;
      __label__ = 10;
      break;
     case 10:
      var $52 = HEAP[$0];
      HEAP[$retval] = $52;
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
  function _save_none($self, $args) {
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
      
      
      var $3 = HEAP[HEAP[$self_addr] + 48];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, _none_9399, 1);
      
      if ($5 < 0) {
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
      HEAP[$0] = 0;
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
  function _save_bool($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 22;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 22);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $iftmp_52 = __stackBase__ + 16;
      var $l = __stackBase__ + 17;
      var $opcode = __stackBase__ + 21;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      
      
      
      var $4 = HEAP[HEAP[$args_addr] + 8];
      HEAP[$l] = $4;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 36] > 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      if (HEAP[$l] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$iftmp_52] = -120;
      __label__ = 4;
      break;
     case 3:
      HEAP[$iftmp_52] = -119;
      __label__ = 4;
      break;
     case 4:
      var $11 = HEAP[$iftmp_52];
      HEAP[$opcode] = $11;
      
      
      var $14 = HEAP[HEAP[$self_addr] + 48];
      var $15 = HEAP[$self_addr];
      var $16 = FUNCTION_TABLE[$14]($15, $opcode, 1);
      
      if ($16 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 6:
      __label__ = 9;
      break;
     case 7:
      
      
      var $20 = HEAP[HEAP[$self_addr] + 48];
      
      
      
      var $24 = HEAP[_len_9411 + HEAP[$l]];
      
      
      var $27 = HEAP[_buf_9410 + HEAP[$l] * 4];
      var $28 = HEAP[$self_addr];
      var $29 = FUNCTION_TABLE[$20]($28, $27, $24);
      
      if ($29 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 9:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 10:
      var $31 = HEAP[$0];
      HEAP[$retval] = $31;
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
  function _save_int($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $c_str = __stackBase__ + 16;
      var $l = __stackBase__ + 48;
      var $len = __stackBase__ + 52;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      
      
      
      var $4 = HEAP[HEAP[$args_addr] + 8];
      HEAP[$l] = $4;
      HEAP[$len] = 0;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      HEAP[$c_str] = 73;
      
      var $10 = $c_str + 1;
      var $11 = HEAP[$l];
      var $12 = _PyOS_snprintf($10, 31, __str4, allocate([ $11, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      
      
      var $15 = HEAP[HEAP[$self_addr] + 48];
      var $c_str2 = $c_str;
      var $16 = _strlen($c_str2);
      var $17 = HEAP[$self_addr];
      var $c_str3 = $c_str;
      var $18 = FUNCTION_TABLE[$15]($17, $c_str3, $16);
      
      if ($18 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = -1;
      __label__ = 14;
      break;
     case 3:
      __label__ = 13;
      break;
     case 4:
      
      var $21 = HEAP[$l] & 255;
      
      HEAP[$c_str + 1] = $21;
      
      
      var $25 = HEAP[$l] >> 8 & 255;
      
      HEAP[$c_str + 2] = $25;
      
      
      var $29 = HEAP[$l] >> 16 & 255;
      
      HEAP[$c_str + 3] = $29;
      
      
      var $33 = HEAP[$l] >> 24 & 255;
      
      HEAP[$c_str + 4] = $33;
      
      
      
      if (HEAP[$c_str + 4] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      if (HEAP[$c_str + 3] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      if (HEAP[$c_str + 2] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      HEAP[$c_str] = 75;
      HEAP[$len] = 2;
      __label__ = 9;
      break;
     case 8:
      
      HEAP[$c_str] = 77;
      HEAP[$len] = 3;
      __label__ = 9;
      break;
     case 9:
      __label__ = 11;
      break;
     case 10:
      
      HEAP[$c_str] = 74;
      HEAP[$len] = 5;
      __label__ = 11;
      break;
     case 11:
      
      
      var $49 = HEAP[HEAP[$self_addr] + 48];
      var $50 = HEAP[$self_addr];
      var $c_str14 = $c_str;
      var $51 = HEAP[$len];
      var $52 = FUNCTION_TABLE[$49]($50, $c_str14, $51);
      
      if ($52 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$0] = -1;
      __label__ = 14;
      break;
     case 13:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 14:
      var $54 = HEAP[$0];
      HEAP[$retval] = $54;
      __label__ = 15;
      break;
     case 15:
      var $retval18 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _save_long($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 53;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 53);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $size = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      var $repr = __stackBase__ + 24;
      var $nbits = __stackBase__ + 28;
      var $nbytes = __stackBase__ + 32;
      var $pdata = __stackBase__ + 36;
      var $c_str = __stackBase__ + 40;
      var $i = __stackBase__ + 45;
      var $sign = __stackBase__ + 49;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$res] = -1;
      HEAP[$repr] = 0;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 36] > 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 1:
      var $5 = HEAP[$args_addr];
      var $6 = __PyLong_Sign($5);
      HEAP[$sign] = $6;
      
      
      if (HEAP[$sign] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      HEAP[$c_str] = -118;
      
      HEAP[$c_str + 1] = 0;
      
      
      var $13 = HEAP[HEAP[$self_addr] + 48];
      var $14 = HEAP[$self_addr];
      var $c_str2 = $c_str;
      var $15 = FUNCTION_TABLE[$13]($14, $c_str2, 2);
      HEAP[$i] = $15;
      
      
      if (HEAP[$i] < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$res] = 0;
      __label__ = 30;
      break;
     case 4:
      var $18 = HEAP[$args_addr];
      var $19 = __PyLong_NumBits($18);
      HEAP[$nbits] = $19;
      
      var $21 = HEAP[$nbits] == -1;
      if ($21) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $22 = _PyErr_Occurred();
      
      if ($22 != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $26 = (HEAP[$nbits] >>> 3) + 1;
      HEAP[$nbytes] = $26;
      
      
      if (HEAP[$nbytes] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $29 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($29, __str11);
      __label__ = 30;
      break;
     case 8:
      var $30 = HEAP[$nbytes];
      var $31 = _PyString_FromStringAndSize(0, $30);
      HEAP[$repr] = $31;
      
      
      if (HEAP[$repr] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      var $37 = HEAP[$repr] + 20;
      HEAP[$pdata] = $37;
      
      var $39 = HEAP[$args_addr];
      var $40 = HEAP[$pdata];
      var $41 = HEAP[$nbytes];
      var $42 = __PyLong_AsByteArray($39, $40, $41, 1, 1);
      HEAP[$i] = $42;
      
      
      if (HEAP[$i] < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if (HEAP[$sign] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      
      if (HEAP[$nbytes] > 1) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      
      
      
      
      var $54 = HEAP[HEAP[$pdata] + (HEAP[$nbytes] - 1)] == -1;
      if ($54) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      
      
      
      
      if (HEAP[HEAP[$pdata] + (HEAP[$nbytes] - 2)] < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      var $62 = HEAP[$nbytes] - 1;
      HEAP[$nbytes] = $62;
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$nbytes] <= 255) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      HEAP[$c_str] = -118;
      
      var $67 = HEAP[$nbytes] & 255;
      
      HEAP[$c_str + 1] = $67;
      HEAP[$size] = 2;
      __label__ = 21;
      break;
     case 17:
      
      HEAP[$c_str] = -117;
      var $70 = HEAP[$nbytes];
      HEAP[$size] = $70;
      HEAP[$i] = 1;
      __label__ = 19;
      break;
     case 18:
      
      
      var $73 = HEAP[$size] & 255;
      var $74 = $c_str + HEAP[$i];
      HEAP[$74] = $73;
      
      var $76 = HEAP[$size] >> 8;
      HEAP[$size] = $76;
      
      var $78 = HEAP[$i] + 1;
      HEAP[$i] = $78;
      __label__ = 19;
      break;
     case 19:
      
      
      if (HEAP[$i] <= 4) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      HEAP[$size] = 5;
      __label__ = 21;
      break;
     case 21:
      
      
      var $83 = HEAP[HEAP[$self_addr] + 48];
      var $84 = HEAP[$self_addr];
      var $c_str22 = $c_str;
      var $85 = HEAP[$size];
      var $86 = FUNCTION_TABLE[$83]($84, $c_str22, $85);
      HEAP[$i] = $86;
      
      
      if (HEAP[$i] < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      var $91 = HEAP[HEAP[$self_addr] + 48];
      var $92 = HEAP[$nbytes];
      var $93 = HEAP[$pdata];
      var $94 = HEAP[$self_addr];
      var $95 = FUNCTION_TABLE[$91]($94, $93, $92);
      HEAP[$i] = $95;
      
      
      if (HEAP[$i] < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      HEAP[$res] = 0;
      __label__ = 30;
      break;
     case 24:
      var $98 = HEAP[$args_addr];
      var $99 = _PyObject_Repr($98);
      HEAP[$repr] = $99;
      
      
      if (HEAP[$repr] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      var $102 = HEAP[$repr];
      var $103 = _PyString_Size($102);
      HEAP[$size] = $103;
      
      
      if (HEAP[$size] < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      var $108 = HEAP[HEAP[$self_addr] + 48];
      var $109 = HEAP[$self_addr];
      var $110 = FUNCTION_TABLE[$108]($109, _l_9486, 1);
      
      if ($110 < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      var $114 = HEAP[HEAP[$self_addr] + 48];
      
      
      
      var $118 = HEAP[$repr] + 20;
      var $119 = HEAP[$self_addr];
      var $120 = HEAP[$size];
      var $121 = FUNCTION_TABLE[$114]($119, $118, $120);
      
      if ($121 < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      var $125 = HEAP[HEAP[$self_addr] + 48];
      var $126 = HEAP[$self_addr];
      var $127 = FUNCTION_TABLE[$125]($126, __str12, 1);
      
      if ($127 < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      HEAP[$res] = 0;
      __label__ = 30;
      break;
     case 30:
      
      
      if (HEAP[$repr] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 31:
      
      
      
      var $134 = HEAP[HEAP[$repr]] - 1;
      
      var $136 = HEAP[$repr];
      HEAP[$136] = $134;
      
      
      
      
      if (HEAP[HEAP[$repr]] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      var $145 = HEAP[HEAP[HEAP[$repr] + 4] + 24];
      var $146 = HEAP[$repr];
      FUNCTION_TABLE[$145]($146);
      __label__ = 33;
      break;
     case 33:
      var $147 = HEAP[$res];
      HEAP[$0] = $147;
      var $148 = HEAP[$0];
      HEAP[$retval] = $148;
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
  function _save_float($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 42;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 42);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $str = __stackBase__ + 24;
      var $result = __stackBase__ + 33;
      var $buf = __stackBase__ + 37;
      var $op = __stackBase__ + 41;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      
      
      
      var $4 = HEAP[HEAP[$args_addr] + 8];
      HEAP[$x] = $4;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      HEAP[$str] = 71;
      var $10 = $str + 1;
      var $11 = HEAP[$x];
      var $12 = __PyFloat_Pack8($11, $10, 0);
      
      if ($12 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 3:
      
      
      var $16 = HEAP[HEAP[$self_addr] + 48];
      var $17 = HEAP[$self_addr];
      var $str3 = $str;
      var $18 = FUNCTION_TABLE[$16]($17, $str3, 9);
      
      if ($18 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 6:
      HEAP[$result] = -1;
      HEAP[$buf] = 0;
      HEAP[$op] = 70;
      
      
      var $22 = HEAP[HEAP[$self_addr] + 48];
      var $23 = HEAP[$self_addr];
      var $24 = FUNCTION_TABLE[$22]($23, $op, 1);
      
      if ($24 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $26 = HEAP[$x];
      var $27 = _PyOS_double_to_string($26, 103, 17, 0, 0);
      HEAP[$buf] = $27;
      
      
      if (HEAP[$buf] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $30 = _PyErr_NoMemory();
      __label__ = 12;
      break;
     case 9:
      
      
      var $33 = HEAP[HEAP[$self_addr] + 48];
      var $34 = HEAP[$buf];
      var $35 = _strlen($34);
      var $36 = HEAP[$self_addr];
      var $37 = HEAP[$buf];
      var $38 = FUNCTION_TABLE[$33]($36, $37, $35);
      
      if ($38 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      var $42 = HEAP[HEAP[$self_addr] + 48];
      var $43 = HEAP[$self_addr];
      var $44 = FUNCTION_TABLE[$42]($43, __str12, 1);
      
      if ($44 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      HEAP[$result] = 0;
      __label__ = 12;
      break;
     case 12:
      var $46 = HEAP[$buf];
      _PyMem_Free($46);
      var $47 = HEAP[$result];
      HEAP[$0] = $47;
      __label__ = 13;
      break;
     case 13:
      var $48 = HEAP[$0];
      HEAP[$retval] = $48;
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
  function _save_string($self, $args, $doput) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 45;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 45);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $doput_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $size = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $repr = __stackBase__ + 28;
      var $repr_str = __stackBase__ + 32;
      var $i = __stackBase__ + 36;
      var $c_str = __stackBase__ + 40;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$doput_addr] = $doput;
      HEAP[$repr] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyString_Size($1);
      HEAP[$size] = $2;
      
      
      if (HEAP[$size] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 39;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 3:
      var $9 = HEAP[$args_addr];
      var $10 = _PyObject_Repr($9);
      HEAP[$repr] = $10;
      
      
      if (HEAP[$repr] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 39;
      break;
     case 5:
      var $13 = HEAP[$repr];
      var $14 = _PyString_Size($13);
      HEAP[$len] = $14;
      
      
      if (HEAP[$len] < 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $20 = HEAP[$repr] + 20;
      HEAP[$repr_str] = $20;
      
      
      var $23 = HEAP[HEAP[$self_addr] + 48];
      var $24 = HEAP[$self_addr];
      var $25 = FUNCTION_TABLE[$23]($24, _string_9625, 1);
      
      if ($25 < 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      var $29 = HEAP[HEAP[$self_addr] + 48];
      var $30 = HEAP[$self_addr];
      var $31 = HEAP[$repr_str];
      var $32 = HEAP[$len];
      var $33 = FUNCTION_TABLE[$29]($30, $31, $32);
      
      if ($33 < 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      var $37 = HEAP[HEAP[$self_addr] + 48];
      var $38 = HEAP[$self_addr];
      var $39 = FUNCTION_TABLE[$37]($38, __str12, 1);
      
      if ($39 < 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$repr] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      var $46 = HEAP[HEAP[$repr]] - 1;
      
      var $48 = HEAP[$repr];
      HEAP[$48] = $46;
      
      
      
      
      if (HEAP[HEAP[$repr]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[$repr] + 4] + 24];
      var $58 = HEAP[$repr];
      FUNCTION_TABLE[$57]($58);
      __label__ = 12;
      break;
     case 12:
      __label__ = 31;
      break;
     case 13:
      
      
      if (HEAP[$size] <= 255) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      HEAP[$c_str] = 85;
      
      var $63 = HEAP[$size] & 255;
      
      HEAP[$c_str + 1] = $63;
      HEAP[$len] = 2;
      __label__ = 19;
      break;
     case 15:
      
      HEAP[$c_str] = 84;
      HEAP[$i] = 1;
      __label__ = 17;
      break;
     case 16:
      
      
      
      var $69 = HEAP[$i] * 8 + -8;
      
      
      var $72 = HEAP[$size] >> $69 & 255;
      var $73 = $c_str + HEAP[$i];
      HEAP[$73] = $72;
      
      var $75 = HEAP[$i] + 1;
      HEAP[$i] = $75;
      __label__ = 17;
      break;
     case 17:
      
      
      if (HEAP[$i] <= 4) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      HEAP[$len] = 5;
      __label__ = 19;
      break;
     case 19:
      
      
      var $80 = HEAP[HEAP[$self_addr] + 48];
      var $81 = HEAP[$self_addr];
      var $c_str19 = $c_str;
      var $82 = HEAP[$len];
      var $83 = FUNCTION_TABLE[$80]($81, $c_str19, $82);
      
      if ($83 < 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      HEAP[$0] = -1;
      __label__ = 39;
      break;
     case 21:
      
      
      if (HEAP[$size] <= 128) {
        __label__ = 29;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 16] + 4] != _PdataType) {
        __label__ = 29;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      var $93 = HEAP[$self_addr];
      var $94 = _write_other($93, 0, 0);
      
      if ($94 < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      HEAP[$0] = -1;
      __label__ = 39;
      break;
     case 25:
      
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 16] + 8] == HEAP[HEAP[HEAP[$self_addr] + 16] + 12]) {
        __label__ = 26;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 26:
      
      
      
      var $112 = HEAP[HEAP[$self_addr] + 16];
      var $113 = _Pdata_grow($112);
      
      if ($113 < 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      HEAP[$0] = -1;
      __label__ = 39;
      break;
     case 28:
      
      
      
      var $118 = HEAP[HEAP[$args_addr]] + 1;
      
      var $120 = HEAP[$args_addr];
      HEAP[$120] = $118;
      
      
      
      
      
      
      
      
      
      var $130 = HEAP[HEAP[$self_addr] + 16];
      
      var $132 = HEAP[$130 + 8];
      var $133 = HEAP[HEAP[HEAP[$self_addr] + 16] + 16] + 4 * $132;
      var $134 = HEAP[$args_addr];
      HEAP[$133] = $134;
      var $135 = $132 + 1;
      var $136 = $130 + 8;
      HEAP[$136] = $135;
      __label__ = 31;
      break;
     case 29:
      
      
      var $139 = HEAP[HEAP[$self_addr] + 48];
      
      
      
      var $143 = HEAP[$args_addr] + 20;
      var $144 = HEAP[$self_addr];
      var $145 = HEAP[$size];
      var $146 = FUNCTION_TABLE[$139]($144, $143, $145);
      
      if ($146 < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      HEAP[$0] = -1;
      __label__ = 39;
      break;
     case 31:
      
      
      if (HEAP[$doput_addr] != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 32:
      var $150 = HEAP[$self_addr];
      var $151 = HEAP[$args_addr];
      var $152 = _put($150, $151);
      
      if ($152 < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      HEAP[$0] = -1;
      __label__ = 39;
      break;
     case 34:
      HEAP[$0] = 0;
      __label__ = 39;
      break;
     case 35:
      
      
      if (HEAP[$repr] != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 36:
      
      
      
      var $159 = HEAP[HEAP[$repr]] - 1;
      
      var $161 = HEAP[$repr];
      HEAP[$161] = $159;
      
      
      
      
      if (HEAP[HEAP[$repr]] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $170 = HEAP[HEAP[HEAP[$repr] + 4] + 24];
      var $171 = HEAP[$repr];
      FUNCTION_TABLE[$170]($171);
      __label__ = 38;
      break;
     case 38:
      HEAP[$0] = -1;
      __label__ = 39;
      break;
     case 39:
      var $172 = HEAP[$0];
      HEAP[$retval] = $172;
      __label__ = 40;
      break;
     case 40:
      var $retval39 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval39;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _modified_EncodeRawUnicodeEscape($s, $size) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $size_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $repr = __stackBase__ + 16;
      var $p = __stackBase__ + 20;
      var $q = __stackBase__ + 24;
      var $expandsize = __stackBase__ + 28;
      var $ch = __stackBase__ + 32;
      var $ch2 = __stackBase__ + 34;
      var $ucs = __stackBase__ + 36;
      
      HEAP[$s_addr] = $s;
      HEAP[$size_addr] = $size;
      HEAP[$expandsize] = 6;
      
      
      
      
      if ((2147483647 / HEAP[$expandsize] | 0) < HEAP[$size_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = _PyErr_NoMemory();
      HEAP[$0] = $5;
      __label__ = 20;
      break;
     case 2:
      
      
      var $8 = HEAP[$expandsize] * HEAP[$size_addr];
      var $9 = _PyString_FromStringAndSize(0, $8);
      HEAP[$repr] = $9;
      
      
      if (HEAP[$repr] == 0) {
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
      
      
      if (HEAP[$size_addr] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $14 = HEAP[$repr];
      HEAP[$0] = $14;
      __label__ = 20;
      break;
     case 6:
      
      
      
      var $18 = HEAP[$repr] + 20;
      HEAP[$q] = $18;
      var $19 = HEAP[$q];
      HEAP[$p] = $19;
      __label__ = 18;
      break;
     case 7:
      
      var $21 = HEAP[HEAP[$s_addr]];
      HEAP[$ch] = $21;
      
      var $23 = HEAP[$s_addr] + 2;
      HEAP[$s_addr] = $23;
      
      
      if (HEAP[$ch] > 55295) {
        __label__ = 8;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 8:
      
      
      if (HEAP[$ch] <= 56319) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      var $29 = HEAP[HEAP[$s_addr]];
      HEAP[$ch2] = $29;
      
      var $31 = HEAP[$s_addr] + 2;
      HEAP[$s_addr] = $31;
      
      var $33 = HEAP[$size_addr] - 1;
      HEAP[$size_addr] = $33;
      
      
      if (HEAP[$ch2] > 56319) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      if (HEAP[$ch2] <= 57343) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      
      
      var $46 = ((HEAP[$ch] & 1023) << 10 | HEAP[$ch2] & 1023) + 65536;
      HEAP[$ucs] = $46;
      var $47 = HEAP[$p];
      HEAP[$47] = 92;
      
      var $49 = HEAP[$p] + 1;
      HEAP[$p] = $49;
      var $50 = HEAP[$p];
      HEAP[$50] = 85;
      
      var $52 = HEAP[$p] + 1;
      HEAP[$p] = $52;
      
      
      
      
      
      var $58 = HEAP[HEAP[_hexdigit_9736] + (HEAP[$ucs] >>> 28 & 15)];
      var $59 = HEAP[$p];
      HEAP[$59] = $58;
      
      var $61 = HEAP[$p] + 1;
      HEAP[$p] = $61;
      
      
      
      
      
      var $67 = HEAP[HEAP[_hexdigit_9736] + (HEAP[$ucs] >>> 24 & 15)];
      var $68 = HEAP[$p];
      HEAP[$68] = $67;
      
      var $70 = HEAP[$p] + 1;
      HEAP[$p] = $70;
      
      
      
      
      
      var $76 = HEAP[HEAP[_hexdigit_9736] + (HEAP[$ucs] >>> 20 & 15)];
      var $77 = HEAP[$p];
      HEAP[$77] = $76;
      
      var $79 = HEAP[$p] + 1;
      HEAP[$p] = $79;
      
      
      
      
      
      var $85 = HEAP[HEAP[_hexdigit_9736] + (HEAP[$ucs] >>> 16 & 15)];
      var $86 = HEAP[$p];
      HEAP[$86] = $85;
      
      var $88 = HEAP[$p] + 1;
      HEAP[$p] = $88;
      
      
      
      
      
      var $94 = HEAP[HEAP[_hexdigit_9736] + (HEAP[$ucs] >>> 12 & 15)];
      var $95 = HEAP[$p];
      HEAP[$95] = $94;
      
      var $97 = HEAP[$p] + 1;
      HEAP[$p] = $97;
      
      
      
      
      
      var $103 = HEAP[HEAP[_hexdigit_9736] + (HEAP[$ucs] >>> 8 & 15)];
      var $104 = HEAP[$p];
      HEAP[$104] = $103;
      
      var $106 = HEAP[$p] + 1;
      HEAP[$p] = $106;
      
      
      
      
      
      var $112 = HEAP[HEAP[_hexdigit_9736] + (HEAP[$ucs] >>> 4 & 15)];
      var $113 = HEAP[$p];
      HEAP[$113] = $112;
      
      var $115 = HEAP[$p] + 1;
      HEAP[$p] = $115;
      
      
      
      
      var $120 = HEAP[HEAP[_hexdigit_9736] + (HEAP[$ucs] & 15)];
      var $121 = HEAP[$p];
      HEAP[$121] = $120;
      
      var $123 = HEAP[$p] + 1;
      HEAP[$p] = $123;
      __label__ = 18;
      break;
     case 12:
      
      var $125 = HEAP[$s_addr] + -2;
      HEAP[$s_addr] = $125;
      
      var $127 = HEAP[$size_addr] + 1;
      HEAP[$size_addr] = $127;
      __label__ = 13;
      break;
     case 13:
      
      
      if (HEAP[$ch] > 255) {
        __label__ = 16;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if (HEAP[$ch] == 92) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      if (HEAP[$ch] == 10) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $134 = HEAP[$p];
      HEAP[$134] = 92;
      
      var $136 = HEAP[$p] + 1;
      HEAP[$p] = $136;
      var $137 = HEAP[$p];
      HEAP[$137] = 117;
      
      var $139 = HEAP[$p] + 1;
      HEAP[$p] = $139;
      
      
      
      
      
      
      var $146 = HEAP[HEAP[_hexdigit_9736] + (HEAP[$ch] >>> 12 & 15)];
      var $147 = HEAP[$p];
      HEAP[$147] = $146;
      
      var $149 = HEAP[$p] + 1;
      HEAP[$p] = $149;
      
      
      
      
      
      
      var $156 = HEAP[HEAP[_hexdigit_9736] + (HEAP[$ch] >>> 8 & 15)];
      var $157 = HEAP[$p];
      HEAP[$157] = $156;
      
      var $159 = HEAP[$p] + 1;
      HEAP[$p] = $159;
      
      
      
      
      
      
      var $166 = HEAP[HEAP[_hexdigit_9736] + (HEAP[$ch] >>> 4 & 15)];
      var $167 = HEAP[$p];
      HEAP[$167] = $166;
      
      var $169 = HEAP[$p] + 1;
      HEAP[$p] = $169;
      
      
      
      
      
      var $175 = HEAP[HEAP[_hexdigit_9736] + (HEAP[$ch] & 15)];
      var $176 = HEAP[$p];
      HEAP[$176] = $175;
      
      var $178 = HEAP[$p] + 1;
      HEAP[$p] = $178;
      __label__ = 18;
      break;
     case 17:
      
      var $180 = HEAP[$ch] & 255;
      var $181 = HEAP[$p];
      HEAP[$181] = $180;
      
      var $183 = HEAP[$p] + 1;
      HEAP[$p] = $183;
      __label__ = 18;
      break;
     case 18:
      
      
      var $186 = HEAP[$size_addr] > 0;
      
      var $188 = HEAP[$size_addr] - 1;
      HEAP[$size_addr] = $188;
      
      if ($186 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      var $189 = HEAP[$p];
      HEAP[$189] = 0;
      
      
      
      
      var $194 = HEAP[$p] - HEAP[$q];
      var $195 = __PyString_Resize($repr, $194);
      var $196 = HEAP[$repr];
      HEAP[$0] = $196;
      __label__ = 20;
      break;
     case 20:
      var $197 = HEAP[$0];
      HEAP[$retval] = $197;
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
  function _save_unicode($self, $args, $doput) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 45;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 45);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $doput_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $size = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $repr = __stackBase__ + 28;
      var $repr_str = __stackBase__ + 32;
      var $i = __stackBase__ + 36;
      var $c_str = __stackBase__ + 40;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$doput_addr] = $doput;
      HEAP[$repr] = 0;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$args_addr] + 4] + 84] & 268435456) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 38;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 3:
      
      
      
      var $15 = HEAP[HEAP[$args_addr] + 8];
      
      
      
      var $19 = HEAP[HEAP[$args_addr] + 12];
      var $20 = _modified_EncodeRawUnicodeEscape($19, $15);
      HEAP[$repr] = $20;
      
      
      if (HEAP[$repr] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 38;
      break;
     case 5:
      var $23 = HEAP[$repr];
      var $24 = _PyString_Size($23);
      HEAP[$len] = $24;
      
      
      if (HEAP[$len] < 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $30 = HEAP[$repr] + 20;
      HEAP[$repr_str] = $30;
      
      
      var $33 = HEAP[HEAP[$self_addr] + 48];
      var $34 = HEAP[$self_addr];
      var $35 = FUNCTION_TABLE[$33]($34, _string_9843, 1);
      
      if ($35 < 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      var $39 = HEAP[HEAP[$self_addr] + 48];
      var $40 = HEAP[$self_addr];
      var $41 = HEAP[$repr_str];
      var $42 = HEAP[$len];
      var $43 = FUNCTION_TABLE[$39]($40, $41, $42);
      
      if ($43 < 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      var $47 = HEAP[HEAP[$self_addr] + 48];
      var $48 = HEAP[$self_addr];
      var $49 = FUNCTION_TABLE[$47]($48, __str12, 1);
      
      if ($49 < 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$repr] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      var $56 = HEAP[HEAP[$repr]] - 1;
      
      var $58 = HEAP[$repr];
      HEAP[$58] = $56;
      
      
      
      
      if (HEAP[HEAP[$repr]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[$repr] + 4] + 24];
      var $68 = HEAP[$repr];
      FUNCTION_TABLE[$67]($68);
      __label__ = 12;
      break;
     case 12:
      __label__ = 30;
      break;
     case 13:
      var $69 = HEAP[$args_addr];
      var $70 = _PyUnicodeUCS2_AsUTF8String($69);
      HEAP[$repr] = $70;
      
      
      if (HEAP[$repr] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = -1;
      __label__ = 38;
      break;
     case 15:
      var $73 = HEAP[$repr];
      var $74 = _PyString_Size($73);
      HEAP[$size] = $74;
      
      
      if (HEAP[$size] < 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      HEAP[$c_str] = 88;
      HEAP[$i] = 1;
      __label__ = 18;
      break;
     case 17:
      
      
      
      var $81 = HEAP[$i] * 8 + -8;
      
      
      var $84 = HEAP[$size] >> $81 & 255;
      var $85 = $c_str + HEAP[$i];
      HEAP[$85] = $84;
      
      var $87 = HEAP[$i] + 1;
      HEAP[$i] = $87;
      __label__ = 18;
      break;
     case 18:
      
      
      if (HEAP[$i] <= 4) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      HEAP[$len] = 5;
      
      
      var $92 = HEAP[HEAP[$self_addr] + 48];
      var $93 = HEAP[$self_addr];
      var $c_str19 = $c_str;
      var $94 = HEAP[$len];
      var $95 = FUNCTION_TABLE[$92]($93, $c_str19, $94);
      
      if ($95 < 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      if (HEAP[$size] <= 128) {
        __label__ = 27;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 16] + 4] != _PdataType) {
        __label__ = 27;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      var $105 = HEAP[$self_addr];
      var $106 = _write_other($105, 0, 0);
      
      if ($106 < 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 16] + 8] == HEAP[HEAP[HEAP[$self_addr] + 16] + 12]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 24:
      
      
      
      var $124 = HEAP[HEAP[$self_addr] + 16];
      var $125 = _Pdata_grow($124);
      
      if ($125 < 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      HEAP[$0] = -1;
      __label__ = 38;
      break;
     case 26:
      
      
      
      var $130 = HEAP[HEAP[$repr]] + 1;
      
      var $132 = HEAP[$repr];
      HEAP[$132] = $130;
      
      
      
      
      
      
      
      
      
      var $142 = HEAP[HEAP[$self_addr] + 16];
      
      var $144 = HEAP[$142 + 8];
      var $145 = HEAP[HEAP[HEAP[$self_addr] + 16] + 16] + 4 * $144;
      var $146 = HEAP[$repr];
      HEAP[$145] = $146;
      var $147 = $144 + 1;
      var $148 = $142 + 8;
      HEAP[$148] = $147;
      __label__ = 28;
      break;
     case 27:
      
      
      var $151 = HEAP[HEAP[$self_addr] + 48];
      
      
      
      var $155 = HEAP[$repr] + 20;
      var $156 = HEAP[$self_addr];
      var $157 = HEAP[$size];
      var $158 = FUNCTION_TABLE[$151]($156, $155, $157);
      
      if ($158 < 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      var $163 = HEAP[HEAP[$repr]] - 1;
      
      var $165 = HEAP[$repr];
      HEAP[$165] = $163;
      
      
      
      
      if (HEAP[HEAP[$repr]] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $174 = HEAP[HEAP[HEAP[$repr] + 4] + 24];
      var $175 = HEAP[$repr];
      FUNCTION_TABLE[$174]($175);
      __label__ = 30;
      break;
     case 30:
      
      
      if (HEAP[$doput_addr] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 31:
      var $178 = HEAP[$self_addr];
      var $179 = HEAP[$args_addr];
      var $180 = _put($178, $179);
      
      if ($180 < 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      HEAP[$0] = -1;
      __label__ = 38;
      break;
     case 33:
      HEAP[$0] = 0;
      __label__ = 38;
      break;
     case 34:
      
      
      if (HEAP[$repr] != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 35:
      
      
      
      var $187 = HEAP[HEAP[$repr]] - 1;
      
      var $189 = HEAP[$repr];
      HEAP[$189] = $187;
      
      
      
      
      if (HEAP[HEAP[$repr]] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      var $198 = HEAP[HEAP[HEAP[$repr] + 4] + 24];
      var $199 = HEAP[$repr];
      FUNCTION_TABLE[$198]($199);
      __label__ = 37;
      break;
     case 37:
      HEAP[$0] = -1;
      __label__ = 38;
      break;
     case 38:
      var $200 = HEAP[$0];
      HEAP[$retval] = $200;
      __label__ = 39;
      break;
     case 39:
      var $retval38 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval38;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _store_tuple_elements($self, $t, $len) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $t_addr = __stackBase__ + 4;
      var $len_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      var $element = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$t_addr] = $t;
      HEAP[$len_addr] = $len;
      HEAP[$res] = -1;
      var $1 = HEAP[$t_addr];
      var $2 = _PyTuple_Size($1);
      
      
      if ($2 != HEAP[$len_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str14, __str15, 1454, ___PRETTY_FUNCTION___9965);
      throw "Reached an unreachable!";
     case 2:
      HEAP[$i] = 0;
      __label__ = 6;
      break;
     case 3:
      
      
      
      
      
      var $10 = HEAP[HEAP[$t_addr] + 12 + HEAP[$i] * 4];
      HEAP[$element] = $10;
      
      
      if (HEAP[$element] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $13 = HEAP[$self_addr];
      var $14 = HEAP[$element];
      var $15 = _save($13, $14, 0);
      
      if ($15 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $18 = HEAP[$i] + 1;
      HEAP[$i] = $18;
      __label__ = 6;
      break;
     case 6:
      
      
      
      if (HEAP[$i] < HEAP[$len_addr]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      HEAP[$res] = 0;
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
      var $retval7 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _save_tuple($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 34;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 34);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $py_tuple_id = __stackBase__ + 16;
      var $len = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      var $c_str = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$py_tuple_id] = 0;
      HEAP[$res] = -1;
      var $1 = HEAP[$args_addr];
      var $2 = _PyTuple_Size($1);
      HEAP[$len] = $2;
      
      
      if (HEAP[$len] < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$len] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 36] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      HEAP[$c_str] = 41;
      HEAP[$len] = 1;
      __label__ = 5;
      break;
     case 4:
      
      HEAP[$c_str] = 40;
      
      HEAP[$c_str + 1] = 116;
      HEAP[$len] = 2;
      __label__ = 5;
      break;
     case 5:
      
      
      var $16 = HEAP[HEAP[$self_addr] + 48];
      var $17 = HEAP[$self_addr];
      var $c_str5 = $c_str;
      var $18 = HEAP[$len];
      var $19 = FUNCTION_TABLE[$16]($17, $c_str5, $18);
      
      if ($19 >= 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$res] = 0;
      __label__ = 7;
      break;
     case 7:
      __label__ = 37;
      break;
     case 8:
      
      var $22 = HEAP[$args_addr];
      var $23 = _PyLong_FromVoidPtr($22);
      HEAP[$py_tuple_id] = $23;
      
      
      if (HEAP[$py_tuple_id] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$len] <= 3) {
        __label__ = 10;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 10:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 36] > 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 11:
      var $32 = HEAP[$self_addr];
      var $33 = HEAP[$args_addr];
      var $34 = HEAP[$len];
      var $35 = _store_tuple_elements($32, $33, $34);
      
      if ($35 < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      var $39 = HEAP[HEAP[$self_addr] + 20];
      var $40 = HEAP[$py_tuple_id];
      var $41 = _PyDict_GetItem($39, $40);
      
      if ($41 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 13:
      HEAP[$i] = 0;
      __label__ = 16;
      break;
     case 14:
      
      
      var $45 = HEAP[HEAP[$self_addr] + 48];
      var $46 = HEAP[$self_addr];
      var $47 = FUNCTION_TABLE[$45]($46, _pop_9990, 1);
      
      if ($47 < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      var $50 = HEAP[$i] + 1;
      HEAP[$i] = $50;
      __label__ = 16;
      break;
     case 16:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      var $54 = HEAP[$self_addr];
      var $55 = HEAP[$py_tuple_id];
      var $56 = _get($54, $55);
      
      if ($56 < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      HEAP[$res] = 0;
      __label__ = 37;
      break;
     case 19:
      
      
      var $60 = HEAP[HEAP[$self_addr] + 48];
      
      var $62 = _len2opcode_9992 + HEAP[$len];
      var $63 = HEAP[$self_addr];
      var $64 = FUNCTION_TABLE[$60]($63, $62, 1);
      
      if ($64 < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      __label__ = 35;
      break;
     case 21:
      
      
      var $68 = HEAP[HEAP[$self_addr] + 48];
      var $69 = HEAP[$self_addr];
      var $70 = FUNCTION_TABLE[$68]($69, _MARKv, 1);
      
      if ($70 < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      var $72 = HEAP[$self_addr];
      var $73 = HEAP[$args_addr];
      var $74 = HEAP[$len];
      var $75 = _store_tuple_elements($72, $73, $74);
      
      if ($75 < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      var $79 = HEAP[HEAP[$self_addr] + 20];
      var $80 = HEAP[$py_tuple_id];
      var $81 = _PyDict_GetItem($79, $80);
      
      if ($81 != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 24:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      var $89 = HEAP[HEAP[$self_addr] + 48];
      var $90 = HEAP[$self_addr];
      var $91 = FUNCTION_TABLE[$89]($90, _pop_mark_9991, 1);
      
      if ($91 < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      __label__ = 31;
      break;
     case 27:
      HEAP[$i] = 0;
      __label__ = 30;
      break;
     case 28:
      
      
      var $95 = HEAP[HEAP[$self_addr] + 48];
      var $96 = HEAP[$self_addr];
      var $97 = FUNCTION_TABLE[$95]($96, _pop_9990, 1);
      
      if ($97 < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      var $100 = HEAP[$i] + 1;
      HEAP[$i] = $100;
      __label__ = 30;
      break;
     case 30:
      
      
      
      if (HEAP[$i] <= HEAP[$len]) {
        __label__ = 28;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      var $104 = HEAP[$self_addr];
      var $105 = HEAP[$py_tuple_id];
      var $106 = _get($104, $105);
      
      if ($106 >= 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      HEAP[$res] = 0;
      __label__ = 33;
      break;
     case 33:
      __label__ = 37;
      break;
     case 34:
      
      
      var $110 = HEAP[HEAP[$self_addr] + 48];
      var $111 = HEAP[$self_addr];
      var $112 = FUNCTION_TABLE[$110]($111, _tuple_9989, 1);
      
      if ($112 < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      var $114 = HEAP[$self_addr];
      var $115 = HEAP[$args_addr];
      var $116 = _put($114, $115);
      
      if ($116 >= 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      HEAP[$res] = 0;
      __label__ = 37;
      break;
     case 37:
      
      
      if (HEAP[$py_tuple_id] != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 38:
      
      
      
      var $123 = HEAP[HEAP[$py_tuple_id]] - 1;
      
      var $125 = HEAP[$py_tuple_id];
      HEAP[$125] = $123;
      
      
      
      
      if (HEAP[HEAP[$py_tuple_id]] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      var $134 = HEAP[HEAP[HEAP[$py_tuple_id] + 4] + 24];
      var $135 = HEAP[$py_tuple_id];
      FUNCTION_TABLE[$134]($135);
      __label__ = 40;
      break;
     case 40:
      var $136 = HEAP[$res];
      HEAP[$0] = $136;
      var $137 = HEAP[$0];
      HEAP[$retval] = $137;
      __label__ = 41;
      break;
     case 41:
      var $retval39 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval39;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _batch_list($self, $iter) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $iter_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $obj = __stackBase__ + 16;
      var $firstitem = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      var $n = __stackBase__ + 28;
      var $_py_tmp = __stackBase__ + 32;
      var $_py_tmp28 = __stackBase__ + 36;
      var $_py_tmp34 = __stackBase__ + 40;
      
      HEAP[$self_addr] = $self;
      HEAP[$iter_addr] = $iter;
      HEAP[$obj] = 0;
      HEAP[$firstitem] = 0;
      
      
      if (HEAP[$iter_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str16, __str15, 1599, ___PRETTY_FUNCTION___10085);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 36] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 3:
      var $7 = HEAP[$iter_addr];
      var $8 = _PyIter_Next($7);
      HEAP[$obj] = $8;
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      var $11 = _PyErr_Occurred();
      
      if ($11 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 50;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 50;
      break;
     case 7:
      var $13 = HEAP[$self_addr];
      var $14 = HEAP[$obj];
      var $15 = _save($13, $14, 0);
      HEAP[$i] = $15;
      
      
      
      var $19 = HEAP[HEAP[$obj]] - 1;
      
      var $21 = HEAP[$obj];
      HEAP[$21] = $19;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $31 = HEAP[$obj];
      FUNCTION_TABLE[$30]($31);
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = -1;
      __label__ = 50;
      break;
     case 11:
      
      
      var $36 = HEAP[HEAP[$self_addr] + 48];
      var $37 = HEAP[$self_addr];
      var $38 = FUNCTION_TABLE[$36]($37, _append_10083, 1);
      
      if ($38 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$0] = -1;
      __label__ = 50;
      break;
     case 13:
      __label__ = 3;
      break;
     case 14:
      var $40 = HEAP[$iter_addr];
      var $41 = _PyIter_Next($40);
      HEAP[$firstitem] = $41;
      
      
      if (HEAP[$firstitem] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      var $44 = _PyErr_Occurred();
      
      if ($44 != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      __label__ = 42;
      break;
     case 17:
      var $46 = HEAP[$iter_addr];
      var $47 = _PyIter_Next($46);
      HEAP[$obj] = $47;
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 18:
      var $50 = _PyErr_Occurred();
      
      if ($50 != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      var $52 = HEAP[$self_addr];
      var $53 = HEAP[$firstitem];
      var $54 = _save($52, $53, 0);
      
      if ($54 < 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      var $58 = HEAP[HEAP[$self_addr] + 48];
      var $59 = HEAP[$self_addr];
      var $60 = FUNCTION_TABLE[$58]($59, _append_10083, 1);
      
      if ($60 < 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      if (HEAP[$firstitem] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      var $64 = HEAP[$firstitem];
      HEAP[$_py_tmp] = $64;
      HEAP[$firstitem] = 0;
      
      
      
      var $68 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $70 = HEAP[$_py_tmp];
      HEAP[$70] = $68;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $79 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $80 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$79]($80);
      __label__ = 24;
      break;
     case 24:
      __label__ = 42;
      break;
     case 25:
      
      
      var $83 = HEAP[HEAP[$self_addr] + 48];
      var $84 = HEAP[$self_addr];
      var $85 = FUNCTION_TABLE[$83]($84, _MARKv, 1);
      
      if ($85 < 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      var $87 = HEAP[$self_addr];
      var $88 = HEAP[$firstitem];
      var $89 = _save($87, $88, 0);
      
      if ($89 < 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      if (HEAP[$firstitem] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      var $93 = HEAP[$firstitem];
      HEAP[$_py_tmp28] = $93;
      HEAP[$firstitem] = 0;
      
      
      
      var $97 = HEAP[HEAP[$_py_tmp28]] - 1;
      
      var $99 = HEAP[$_py_tmp28];
      HEAP[$99] = $97;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp28]] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $108 = HEAP[HEAP[HEAP[$_py_tmp28] + 4] + 24];
      var $109 = HEAP[$_py_tmp28];
      FUNCTION_TABLE[$108]($109);
      __label__ = 30;
      break;
     case 30:
      HEAP[$n] = 1;
      __label__ = 39;
      break;
     case 31:
      var $110 = HEAP[$self_addr];
      var $111 = HEAP[$obj];
      var $112 = _save($110, $111, 0);
      
      if ($112 < 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      if (HEAP[$obj] != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 33:
      var $116 = HEAP[$obj];
      HEAP[$_py_tmp34] = $116;
      HEAP[$obj] = 0;
      
      
      
      var $120 = HEAP[HEAP[$_py_tmp34]] - 1;
      
      var $122 = HEAP[$_py_tmp34];
      HEAP[$122] = $120;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp34]] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $131 = HEAP[HEAP[HEAP[$_py_tmp34] + 4] + 24];
      var $132 = HEAP[$_py_tmp34];
      FUNCTION_TABLE[$131]($132);
      __label__ = 35;
      break;
     case 35:
      
      var $134 = HEAP[$n] + 1;
      HEAP[$n] = $134;
      
      
      if (HEAP[$n] == 1e3) {
        __label__ = 40;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      var $137 = HEAP[$iter_addr];
      var $138 = _PyIter_Next($137);
      HEAP[$obj] = $138;
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 37:
      var $141 = _PyErr_Occurred();
      
      if ($141 != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      __label__ = 40;
      break;
     case 39:
      
      
      if (HEAP[$obj] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      
      
      var $147 = HEAP[HEAP[$self_addr] + 48];
      var $148 = HEAP[$self_addr];
      var $149 = FUNCTION_TABLE[$147]($148, _appends_10084, 1);
      
      if ($149 < 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 41:
      
      
      if (HEAP[$n] == 1e3) {
        __label__ = 14;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      HEAP[$0] = 0;
      __label__ = 50;
      break;
     case 43:
      
      
      if (HEAP[$firstitem] != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 44:
      
      
      
      var $158 = HEAP[HEAP[$firstitem]] - 1;
      
      var $160 = HEAP[$firstitem];
      HEAP[$160] = $158;
      
      
      
      
      if (HEAP[HEAP[$firstitem]] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      var $169 = HEAP[HEAP[HEAP[$firstitem] + 4] + 24];
      var $170 = HEAP[$firstitem];
      FUNCTION_TABLE[$169]($170);
      __label__ = 46;
      break;
     case 46:
      
      
      if (HEAP[$obj] != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 47:
      
      
      
      var $176 = HEAP[HEAP[$obj]] - 1;
      
      var $178 = HEAP[$obj];
      HEAP[$178] = $176;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      
      
      
      var $187 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $188 = HEAP[$obj];
      FUNCTION_TABLE[$187]($188);
      __label__ = 49;
      break;
     case 49:
      HEAP[$0] = -1;
      __label__ = 50;
      break;
     case 50:
      var $189 = HEAP[$0];
      HEAP[$retval] = $189;
      __label__ = 51;
      break;
     case 51:
      var $retval51 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval51;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _save_list($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 35;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 35);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $iftmp_93 = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      var $s = __stackBase__ + 24;
      var $len = __stackBase__ + 27;
      var $iter = __stackBase__ + 31;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$res] = -1;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[$self_addr];
      var $6 = HEAP[$args_addr];
      var $7 = _fast_save_enter($5, $6);
      
      if ($7 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      HEAP[$s] = 93;
      HEAP[$len] = 1;
      __label__ = 5;
      break;
     case 4:
      
      HEAP[$s] = 40;
      
      HEAP[$s + 1] = 108;
      HEAP[$len] = 2;
      __label__ = 5;
      break;
     case 5:
      
      
      var $18 = HEAP[HEAP[$self_addr] + 48];
      var $19 = HEAP[$self_addr];
      var $s5 = $s;
      var $20 = HEAP[$len];
      var $21 = FUNCTION_TABLE[$18]($19, $s5, $20);
      
      if ($21 < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $23 = HEAP[$args_addr];
      var $24 = _PyList_Size($23);
      HEAP[$len] = $24;
      
      
      if (HEAP[$len] < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if (HEAP[$len] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      var $29 = HEAP[$self_addr];
      var $30 = HEAP[$args_addr];
      var $31 = _put($29, $30);
      
      if ($31 >= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$res] = 0;
      __label__ = 10;
      break;
     case 10:
      __label__ = 21;
      break;
     case 11:
      var $33 = HEAP[$self_addr];
      var $34 = HEAP[$args_addr];
      var $35 = _put2($33, $34);
      
      if ($35 < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $37 = HEAP[$args_addr];
      var $38 = _PyObject_GetIter($37);
      HEAP[$iter] = $38;
      
      
      if (HEAP[$iter] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $41 = HEAP[__PyThreadState_Current];
      
      
      var $44 = HEAP[$41 + 12] + 1;
      var $45 = $41 + 12;
      HEAP[$45] = $44;
      
      
      
      
      if (HEAP[$41 + 12] <= HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      var $50 = __Py_CheckRecursiveCall(__str17);
      
      if ($50 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      HEAP[$iftmp_93] = 1;
      __label__ = 17;
      break;
     case 16:
      HEAP[$iftmp_93] = 0;
      __label__ = 17;
      break;
     case 17:
      
      
      if (HEAP[$iftmp_93] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $54 = HEAP[$self_addr];
      var $55 = HEAP[$iter];
      var $56 = _batch_list($54, $55);
      HEAP[$res] = $56;
      
      
      
      var $60 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $61 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$61] = $60;
      __label__ = 19;
      break;
     case 19:
      
      
      
      var $65 = HEAP[HEAP[$iter]] - 1;
      
      var $67 = HEAP[$iter];
      HEAP[$67] = $65;
      
      
      
      
      if (HEAP[HEAP[$iter]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $76 = HEAP[HEAP[HEAP[$iter] + 4] + 24];
      var $77 = HEAP[$iter];
      FUNCTION_TABLE[$76]($77);
      __label__ = 21;
      break;
     case 21:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      var $82 = HEAP[$self_addr];
      var $83 = HEAP[$args_addr];
      var $84 = _fast_save_leave($82, $83);
      
      if ($84 == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      HEAP[$res] = -1;
      __label__ = 24;
      break;
     case 24:
      var $86 = HEAP[$res];
      HEAP[$0] = $86;
      var $87 = HEAP[$0];
      HEAP[$retval] = $87;
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
  function _batch_dict($self, $iter) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $iter_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $p = __stackBase__ + 16;
      var $firstitem = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      var $n = __stackBase__ + 28;
      var $_py_tmp = __stackBase__ + 32;
      var $_py_tmp38 = __stackBase__ + 36;
      var $_py_tmp48 = __stackBase__ + 40;
      
      HEAP[$self_addr] = $self;
      HEAP[$iter_addr] = $iter;
      HEAP[$p] = 0;
      HEAP[$firstitem] = 0;
      
      
      if (HEAP[$iter_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str16, __str15, 1767, ___PRETTY_FUNCTION___10274);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 36] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 3:
      var $7 = HEAP[$iter_addr];
      var $8 = _PyIter_Next($7);
      HEAP[$p] = $8;
      
      
      if (HEAP[$p] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      var $11 = _PyErr_Occurred();
      
      if ($11 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 64;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 7:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$p] + 4] + 84] & 67108864) == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $20 = HEAP[$p];
      var $21 = _PyTuple_Size($20);
      
      if ($21 != 2) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $23 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($23, __str18);
      HEAP[$0] = -1;
      __label__ = 64;
      break;
     case 10:
      
      
      
      
      var $28 = HEAP[HEAP[$p] + 12];
      var $29 = HEAP[$self_addr];
      var $30 = _save($29, $28, 0);
      HEAP[$i] = $30;
      
      
      if (HEAP[$i] >= 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $37 = HEAP[HEAP[$p] + 12 + 4];
      var $38 = HEAP[$self_addr];
      var $39 = _save($38, $37, 0);
      HEAP[$i] = $39;
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $43 = HEAP[HEAP[$p]] - 1;
      
      var $45 = HEAP[$p];
      HEAP[$45] = $43;
      
      
      
      
      if (HEAP[HEAP[$p]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$p] + 4] + 24];
      var $55 = HEAP[$p];
      FUNCTION_TABLE[$54]($55);
      __label__ = 14;
      break;
     case 14:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$0] = -1;
      __label__ = 64;
      break;
     case 16:
      
      
      var $60 = HEAP[HEAP[$self_addr] + 48];
      var $61 = HEAP[$self_addr];
      var $62 = FUNCTION_TABLE[$60]($61, _setitem_10272, 1);
      
      if ($62 < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      HEAP[$0] = -1;
      __label__ = 64;
      break;
     case 18:
      __label__ = 3;
      break;
     case 19:
      var $64 = HEAP[$iter_addr];
      var $65 = _PyIter_Next($64);
      HEAP[$firstitem] = $65;
      
      
      if (HEAP[$firstitem] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      var $68 = _PyErr_Occurred();
      
      if ($68 != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      __label__ = 56;
      break;
     case 22:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$firstitem] + 4] + 84] & 67108864) == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      var $77 = HEAP[$firstitem];
      var $78 = _PyTuple_Size($77);
      
      if ($78 != 2) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      var $80 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($80, __str18);
      __label__ = 57;
      break;
     case 25:
      var $81 = HEAP[$iter_addr];
      var $82 = _PyIter_Next($81);
      HEAP[$p] = $82;
      
      
      if (HEAP[$p] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 26:
      var $85 = _PyErr_Occurred();
      
      if ($85 != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      var $91 = HEAP[HEAP[$firstitem] + 12];
      var $92 = HEAP[$self_addr];
      var $93 = _save($92, $91, 0);
      
      if ($93 < 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      
      var $99 = HEAP[HEAP[$firstitem] + 12 + 4];
      var $100 = HEAP[$self_addr];
      var $101 = _save($100, $99, 0);
      
      if ($101 < 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      var $105 = HEAP[HEAP[$self_addr] + 48];
      var $106 = HEAP[$self_addr];
      var $107 = FUNCTION_TABLE[$105]($106, _setitem_10272, 1);
      
      if ($107 < 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      if (HEAP[$firstitem] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 31:
      var $111 = HEAP[$firstitem];
      HEAP[$_py_tmp] = $111;
      HEAP[$firstitem] = 0;
      
      
      
      var $115 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $117 = HEAP[$_py_tmp];
      HEAP[$117] = $115;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      var $126 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $127 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$126]($127);
      __label__ = 33;
      break;
     case 33:
      __label__ = 56;
      break;
     case 34:
      
      
      var $130 = HEAP[HEAP[$self_addr] + 48];
      var $131 = HEAP[$self_addr];
      var $132 = FUNCTION_TABLE[$130]($131, _MARKv, 1);
      
      if ($132 < 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      
      var $138 = HEAP[HEAP[$firstitem] + 12];
      var $139 = HEAP[$self_addr];
      var $140 = _save($139, $138, 0);
      
      if ($140 < 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      
      
      var $146 = HEAP[HEAP[$firstitem] + 12 + 4];
      var $147 = HEAP[$self_addr];
      var $148 = _save($147, $146, 0);
      
      if ($148 < 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      if (HEAP[$firstitem] != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 38:
      var $152 = HEAP[$firstitem];
      HEAP[$_py_tmp38] = $152;
      HEAP[$firstitem] = 0;
      
      
      
      var $156 = HEAP[HEAP[$_py_tmp38]] - 1;
      
      var $158 = HEAP[$_py_tmp38];
      HEAP[$158] = $156;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp38]] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      var $167 = HEAP[HEAP[HEAP[$_py_tmp38] + 4] + 24];
      var $168 = HEAP[$_py_tmp38];
      FUNCTION_TABLE[$167]($168);
      __label__ = 40;
      break;
     case 40:
      HEAP[$n] = 1;
      __label__ = 53;
      break;
     case 41:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$p] + 4] + 84] & 67108864) == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      var $176 = HEAP[$p];
      var $177 = _PyTuple_Size($176);
      
      if ($177 != 2) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      var $179 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($179, __str18);
      __label__ = 57;
      break;
     case 44:
      
      
      
      
      var $184 = HEAP[HEAP[$p] + 12];
      var $185 = HEAP[$self_addr];
      var $186 = _save($185, $184, 0);
      
      if ($186 < 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 45:
      
      
      
      
      var $192 = HEAP[HEAP[$p] + 12 + 4];
      var $193 = HEAP[$self_addr];
      var $194 = _save($193, $192, 0);
      
      if ($194 < 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 46:
      
      
      if (HEAP[$p] != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 47:
      var $198 = HEAP[$p];
      HEAP[$_py_tmp48] = $198;
      HEAP[$p] = 0;
      
      
      
      var $202 = HEAP[HEAP[$_py_tmp48]] - 1;
      
      var $204 = HEAP[$_py_tmp48];
      HEAP[$204] = $202;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp48]] == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      
      
      
      var $213 = HEAP[HEAP[HEAP[$_py_tmp48] + 4] + 24];
      var $214 = HEAP[$_py_tmp48];
      FUNCTION_TABLE[$213]($214);
      __label__ = 49;
      break;
     case 49:
      
      var $216 = HEAP[$n] + 1;
      HEAP[$n] = $216;
      
      
      if (HEAP[$n] == 1e3) {
        __label__ = 54;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 50:
      var $219 = HEAP[$iter_addr];
      var $220 = _PyIter_Next($219);
      HEAP[$p] = $220;
      
      
      if (HEAP[$p] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 51:
      var $223 = _PyErr_Occurred();
      
      if ($223 != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 52:
      __label__ = 54;
      break;
     case 53:
      
      
      if (HEAP[$p] != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 54:
      
      
      var $229 = HEAP[HEAP[$self_addr] + 48];
      var $230 = HEAP[$self_addr];
      var $231 = FUNCTION_TABLE[$229]($230, _setitems_10273, 1);
      
      if ($231 < 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 55:
      
      
      if (HEAP[$n] == 1e3) {
        __label__ = 19;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 56:
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 57:
      
      
      if (HEAP[$firstitem] != 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 58:
      
      
      
      var $240 = HEAP[HEAP[$firstitem]] - 1;
      
      var $242 = HEAP[$firstitem];
      HEAP[$242] = $240;
      
      
      
      
      if (HEAP[HEAP[$firstitem]] == 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      
      
      
      
      var $251 = HEAP[HEAP[HEAP[$firstitem] + 4] + 24];
      var $252 = HEAP[$firstitem];
      FUNCTION_TABLE[$251]($252);
      __label__ = 60;
      break;
     case 60:
      
      
      if (HEAP[$p] != 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 61:
      
      
      
      var $258 = HEAP[HEAP[$p]] - 1;
      
      var $260 = HEAP[$p];
      HEAP[$260] = $258;
      
      
      
      
      if (HEAP[HEAP[$p]] == 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 62:
      
      
      
      
      var $269 = HEAP[HEAP[HEAP[$p] + 4] + 24];
      var $270 = HEAP[$p];
      FUNCTION_TABLE[$269]($270);
      __label__ = 63;
      break;
     case 63:
      HEAP[$0] = -1;
      __label__ = 64;
      break;
     case 64:
      var $271 = HEAP[$0];
      HEAP[$retval] = $271;
      __label__ = 65;
      break;
     case 65:
      var $retval65 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval65;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _batch_dict_exact($self, $obj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $obj_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $key = __stackBase__ + 16;
      var $value = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      var $dict_size = __stackBase__ + 28;
      var $ppos = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$obj_addr] = $obj;
      HEAP[$key] = 0;
      HEAP[$value] = 0;
      HEAP[$ppos] = 0;
      
      
      if (HEAP[$obj_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str19, __str15, 1898, ___PRETTY_FUNCTION___10449);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 36] <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str20, __str15, 1899, ___PRETTY_FUNCTION___10449);
      throw "Reached an unreachable!";
     case 4:
      var $7 = HEAP[$obj_addr];
      var $8 = _PyDict_Size($7);
      HEAP[$dict_size] = $8;
      
      
      if (HEAP[$dict_size] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 5:
      var $11 = HEAP[$obj_addr];
      var $12 = _PyDict_Next($11, $ppos, $key, $value);
      var $13 = HEAP[$key];
      var $14 = HEAP[$self_addr];
      var $15 = _save($14, $13, 0);
      
      if ($15 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = -1;
      __label__ = 27;
      break;
     case 7:
      var $17 = HEAP[$value];
      var $18 = HEAP[$self_addr];
      var $19 = _save($18, $17, 0);
      
      if ($19 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = -1;
      __label__ = 27;
      break;
     case 9:
      
      
      var $23 = HEAP[HEAP[$self_addr] + 48];
      var $24 = HEAP[$self_addr];
      var $25 = FUNCTION_TABLE[$23]($24, _setitem_10447, 1);
      
      if ($25 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = -1;
      __label__ = 27;
      break;
     case 11:
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 12:
      HEAP[$i] = 0;
      
      
      var $29 = HEAP[HEAP[$self_addr] + 48];
      var $30 = HEAP[$self_addr];
      var $31 = FUNCTION_TABLE[$29]($30, _MARKv, 1);
      
      if ($31 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$0] = -1;
      __label__ = 27;
      break;
     case 14:
      __label__ = 20;
      break;
     case 15:
      var $33 = HEAP[$key];
      var $34 = HEAP[$self_addr];
      var $35 = _save($34, $33, 0);
      
      if ($35 < 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      HEAP[$0] = -1;
      __label__ = 27;
      break;
     case 17:
      var $37 = HEAP[$value];
      var $38 = HEAP[$self_addr];
      var $39 = _save($38, $37, 0);
      
      if ($39 < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      HEAP[$0] = -1;
      __label__ = 27;
      break;
     case 19:
      
      var $42 = HEAP[$i] + 1;
      HEAP[$i] = $42;
      
      
      if (HEAP[$i] == 1e3) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      var $45 = HEAP[$obj_addr];
      var $46 = _PyDict_Next($45, $ppos, $key, $value);
      
      if ($46 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      var $50 = HEAP[HEAP[$self_addr] + 48];
      var $51 = HEAP[$self_addr];
      var $52 = FUNCTION_TABLE[$50]($51, _setitems_10448, 1);
      
      if ($52 < 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      HEAP[$0] = -1;
      __label__ = 27;
      break;
     case 23:
      var $54 = HEAP[$obj_addr];
      var $55 = _PyDict_Size($54);
      
      
      if ($55 != HEAP[$dict_size]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      var $58 = HEAP[_PyExc_RuntimeError];
      var $59 = _PyErr_Format($58, __str21, allocate(1, "i32", ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 27;
      break;
     case 25:
      
      
      if (HEAP[$i] == 1e3) {
        __label__ = 12;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 27:
      var $62 = HEAP[$0];
      HEAP[$retval] = $62;
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
  function _save_dict($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 39;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 39);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $iftmp_117 = __stackBase__ + 16;
      var $iftmp_113 = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      var $s = __stackBase__ + 28;
      var $len = __stackBase__ + 31;
      var $iter = __stackBase__ + 35;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$res] = -1;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[$self_addr];
      var $6 = HEAP[$args_addr];
      var $7 = _fast_save_enter($5, $6);
      
      if ($7 == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      HEAP[$s] = 125;
      HEAP[$len] = 1;
      __label__ = 5;
      break;
     case 4:
      
      HEAP[$s] = 40;
      
      HEAP[$s + 1] = 100;
      HEAP[$len] = 2;
      __label__ = 5;
      break;
     case 5:
      
      
      var $18 = HEAP[HEAP[$self_addr] + 48];
      var $19 = HEAP[$self_addr];
      var $s5 = $s;
      var $20 = HEAP[$len];
      var $21 = FUNCTION_TABLE[$18]($19, $s5, $20);
      
      if ($21 < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $23 = HEAP[$args_addr];
      var $24 = _PyDict_Size($23);
      HEAP[$len] = $24;
      
      
      if (HEAP[$len] < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if (HEAP[$len] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      var $29 = HEAP[$self_addr];
      var $30 = HEAP[$args_addr];
      var $31 = _put($29, $30);
      
      if ($31 >= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$res] = 0;
      __label__ = 10;
      break;
     case 10:
      __label__ = 30;
      break;
     case 11:
      var $33 = HEAP[$self_addr];
      var $34 = HEAP[$args_addr];
      var $35 = _put2($33, $34);
      
      if ($35 < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      if (HEAP[HEAP[$args_addr] + 4] != _PyDict_Type) {
        __label__ = 21;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 36] <= 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      var $45 = HEAP[__PyThreadState_Current];
      
      
      var $48 = HEAP[$45 + 12] + 1;
      var $49 = $45 + 12;
      HEAP[$49] = $48;
      
      
      
      
      if (HEAP[$45 + 12] <= HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $54 = __Py_CheckRecursiveCall(__str17);
      
      if ($54 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      HEAP[$iftmp_113] = 1;
      __label__ = 18;
      break;
     case 17:
      HEAP[$iftmp_113] = 0;
      __label__ = 18;
      break;
     case 18:
      
      
      if (HEAP[$iftmp_113] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $58 = HEAP[$self_addr];
      var $59 = HEAP[$args_addr];
      var $60 = _batch_dict_exact($58, $59);
      HEAP[$res] = $60;
      
      
      
      var $64 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $65 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$65] = $64;
      __label__ = 20;
      break;
     case 20:
      __label__ = 30;
      break;
     case 21:
      var $66 = HEAP[$args_addr];
      var $67 = _PyObject_CallMethod($66, __str22, __str23, allocate(1, "i32", ALLOC_STACK));
      HEAP[$iter] = $67;
      
      
      if (HEAP[$iter] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      var $70 = HEAP[__PyThreadState_Current];
      
      
      var $73 = HEAP[$70 + 12] + 1;
      var $74 = $70 + 12;
      HEAP[$74] = $73;
      
      
      
      
      if (HEAP[$70 + 12] <= HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 25;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      var $79 = __Py_CheckRecursiveCall(__str17);
      
      if ($79 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      HEAP[$iftmp_117] = 1;
      __label__ = 26;
      break;
     case 25:
      HEAP[$iftmp_117] = 0;
      __label__ = 26;
      break;
     case 26:
      
      
      if (HEAP[$iftmp_117] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $83 = HEAP[$self_addr];
      var $84 = HEAP[$iter];
      var $85 = _batch_dict($83, $84);
      HEAP[$res] = $85;
      
      
      
      var $89 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $90 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$90] = $89;
      __label__ = 28;
      break;
     case 28:
      
      
      
      var $94 = HEAP[HEAP[$iter]] - 1;
      
      var $96 = HEAP[$iter];
      HEAP[$96] = $94;
      
      
      
      
      if (HEAP[HEAP[$iter]] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $105 = HEAP[HEAP[HEAP[$iter] + 4] + 24];
      var $106 = HEAP[$iter];
      FUNCTION_TABLE[$105]($106);
      __label__ = 30;
      break;
     case 30:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 31:
      var $111 = HEAP[$self_addr];
      var $112 = HEAP[$args_addr];
      var $113 = _fast_save_leave($111, $112);
      
      if ($113 == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      HEAP[$res] = -1;
      __label__ = 33;
      break;
     case 33:
      var $115 = HEAP[$res];
      HEAP[$0] = $115;
      var $116 = HEAP[$0];
      HEAP[$retval] = $116;
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
  function _save_inst($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 76;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 76);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $class = __stackBase__ + 16;
      var $module = __stackBase__ + 20;
      var $name = __stackBase__ + 24;
      var $state = __stackBase__ + 28;
      var $getinitargs_func = __stackBase__ + 32;
      var $getstate_func = __stackBase__ + 36;
      var $class_args = __stackBase__ + 40;
      var $module_str = __stackBase__ + 44;
      var $name_str = __stackBase__ + 48;
      var $module_size = __stackBase__ + 52;
      var $name_size = __stackBase__ + 56;
      var $res = __stackBase__ + 60;
      var $element = __stackBase__ + 64;
      var $i = __stackBase__ + 68;
      var $len = __stackBase__ + 72;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$class] = 0;
      HEAP[$module] = 0;
      HEAP[$name] = 0;
      HEAP[$state] = 0;
      HEAP[$getinitargs_func] = 0;
      HEAP[$getstate_func] = 0;
      HEAP[$class_args] = 0;
      HEAP[$res] = -1;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[$self_addr];
      var $6 = HEAP[$args_addr];
      var $7 = _fast_save_enter($5, $6);
      
      if ($7 == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $11 = HEAP[HEAP[$self_addr] + 48];
      var $12 = HEAP[$self_addr];
      var $13 = FUNCTION_TABLE[$11]($12, _MARKv, 1);
      
      if ($13 < 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $15 = HEAP[___class___str];
      var $16 = HEAP[$args_addr];
      var $17 = _PyObject_GetAttr($16, $15);
      HEAP[$class] = $17;
      
      
      if (HEAP[$class] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $24 = HEAP[$self_addr];
      var $25 = HEAP[$class];
      var $26 = _save($24, $25, 0);
      
      if ($26 < 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $28 = HEAP[___getinitargs___str];
      var $29 = HEAP[$args_addr];
      var $30 = _PyObject_GetAttr($29, $28);
      HEAP[$getinitargs_func] = $30;
      
      
      if (HEAP[$getinitargs_func] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 7:
      HEAP[$element] = 0;
      var $33 = HEAP[_empty_tuple];
      var $34 = HEAP[$getinitargs_func];
      var $35 = _PyObject_Call($34, $33, 0);
      HEAP[$class_args] = $35;
      
      
      if (HEAP[$class_args] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $38 = HEAP[$class_args];
      var $39 = _PyObject_Size($38);
      HEAP[$len] = $39;
      
      
      if (HEAP[$len] < 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      HEAP[$i] = 0;
      __label__ = 18;
      break;
     case 10:
      var $42 = HEAP[$class_args];
      var $43 = HEAP[$i];
      var $44 = _PySequence_GetItem($42, $43);
      HEAP[$element] = $44;
      
      
      if (HEAP[$element] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $47 = HEAP[$self_addr];
      var $48 = HEAP[$element];
      var $49 = _save($47, $48, 0);
      
      if ($49 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      
      
      var $54 = HEAP[HEAP[$element]] - 1;
      
      var $56 = HEAP[$element];
      HEAP[$56] = $54;
      
      
      
      
      if (HEAP[HEAP[$element]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $65 = HEAP[HEAP[HEAP[$element] + 4] + 24];
      var $66 = HEAP[$element];
      FUNCTION_TABLE[$65]($66);
      __label__ = 14;
      break;
     case 14:
      __label__ = 49;
      break;
     case 15:
      
      
      
      var $70 = HEAP[HEAP[$element]] - 1;
      
      var $72 = HEAP[$element];
      HEAP[$72] = $70;
      
      
      
      
      if (HEAP[HEAP[$element]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $81 = HEAP[HEAP[HEAP[$element] + 4] + 24];
      var $82 = HEAP[$element];
      FUNCTION_TABLE[$81]($82);
      __label__ = 17;
      break;
     case 17:
      
      var $84 = HEAP[$i] + 1;
      HEAP[$i] = $84;
      __label__ = 18;
      break;
     case 18:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      __label__ = 22;
      break;
     case 20:
      var $88 = HEAP[_PyExc_AttributeError];
      var $89 = _PyErr_ExceptionMatches($88);
      
      if ($89 != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 21:
      _PyErr_Clear();
      __label__ = 22;
      break;
     case 22:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 23:
      
      
      
      var $98 = HEAP[HEAP[$class] + 16];
      HEAP[$name] = $98;
      
      
      if (HEAP[$name] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      var $101 = HEAP[_PicklingError];
      _PyErr_SetString($101, __str24);
      __label__ = 49;
      break;
     case 25:
      var $102 = HEAP[$class];
      var $103 = HEAP[$name];
      var $104 = _whichmodule($102, $103);
      HEAP[$module] = $104;
      
      
      if (HEAP[$module] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      var $107 = HEAP[$module];
      var $108 = _PyString_Size($107);
      HEAP[$module_size] = $108;
      
      
      if (HEAP[$module_size] < 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      var $111 = HEAP[$name];
      var $112 = _PyString_Size($111);
      HEAP[$name_size] = $112;
      
      
      if (HEAP[$name_size] < 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      var $118 = HEAP[$module] + 20;
      HEAP[$module_str] = $118;
      
      
      
      var $122 = HEAP[$name] + 20;
      HEAP[$name_str] = $122;
      
      
      var $125 = HEAP[HEAP[$self_addr] + 48];
      var $126 = HEAP[$self_addr];
      var $127 = FUNCTION_TABLE[$125]($126, _inst_10602, 1);
      
      if ($127 < 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      var $131 = HEAP[HEAP[$self_addr] + 48];
      var $132 = HEAP[$self_addr];
      var $133 = HEAP[$module_str];
      var $134 = HEAP[$module_size];
      var $135 = FUNCTION_TABLE[$131]($132, $133, $134);
      
      if ($135 < 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      var $139 = HEAP[HEAP[$self_addr] + 48];
      var $140 = HEAP[$self_addr];
      var $141 = FUNCTION_TABLE[$139]($140, __str12, 1);
      
      if ($141 < 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      var $145 = HEAP[HEAP[$self_addr] + 48];
      var $146 = HEAP[$self_addr];
      var $147 = HEAP[$name_str];
      var $148 = HEAP[$name_size];
      var $149 = FUNCTION_TABLE[$145]($146, $147, $148);
      
      if ($149 < 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      var $153 = HEAP[HEAP[$self_addr] + 48];
      var $154 = HEAP[$self_addr];
      var $155 = FUNCTION_TABLE[$153]($154, __str12, 1);
      
      if ($155 < 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      __label__ = 35;
      break;
     case 34:
      
      
      var $159 = HEAP[HEAP[$self_addr] + 48];
      var $160 = HEAP[$self_addr];
      var $161 = FUNCTION_TABLE[$159]($160, _obj_10603, 1);
      
      if ($161 < 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      var $163 = HEAP[___getstate___str];
      var $164 = HEAP[$args_addr];
      var $165 = _PyObject_GetAttr($164, $163);
      HEAP[$getstate_func] = $165;
      
      
      if (HEAP[$getstate_func] != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 36:
      var $168 = HEAP[_empty_tuple];
      var $169 = HEAP[$getstate_func];
      var $170 = _PyObject_Call($169, $168, 0);
      HEAP[$state] = $170;
      
      
      if (HEAP[$state] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      __label__ = 42;
      break;
     case 38:
      var $173 = HEAP[_PyExc_AttributeError];
      var $174 = _PyErr_ExceptionMatches($173);
      
      if ($174 != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 39:
      _PyErr_Clear();
      var $176 = HEAP[___dict___str];
      var $177 = HEAP[$args_addr];
      var $178 = _PyObject_GetAttr($177, $176);
      HEAP[$state] = $178;
      
      
      if (HEAP[$state] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 40:
      var $181 = HEAP[_PyExc_AttributeError];
      var $182 = _PyErr_ExceptionMatches($181);
      
      if ($182 != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 41:
      _PyErr_Clear();
      HEAP[$res] = 0;
      __label__ = 49;
      break;
     case 42:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$state] + 4] + 84] & 536870912) == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 43:
      var $191 = HEAP[$self_addr];
      var $192 = HEAP[$args_addr];
      var $193 = _put2($191, $192);
      
      if ($193 < 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      __label__ = 46;
      break;
     case 45:
      var $195 = HEAP[$self_addr];
      var $196 = HEAP[$args_addr];
      var $197 = _put($195, $196);
      
      if ($197 < 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 46:
      var $199 = HEAP[$self_addr];
      var $200 = HEAP[$state];
      var $201 = _save($199, $200, 0);
      
      if ($201 < 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 47:
      
      
      var $205 = HEAP[HEAP[$self_addr] + 48];
      var $206 = HEAP[$self_addr];
      var $207 = FUNCTION_TABLE[$205]($206, _build_10604, 1);
      
      if ($207 < 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      HEAP[$res] = 0;
      __label__ = 49;
      break;
     case 49:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] != 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 50:
      var $213 = HEAP[$self_addr];
      var $214 = HEAP[$args_addr];
      var $215 = _fast_save_leave($213, $214);
      
      if ($215 == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      HEAP[$res] = -1;
      __label__ = 52;
      break;
     case 52:
      
      
      if (HEAP[$module] != 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 53:
      
      
      
      var $222 = HEAP[HEAP[$module]] - 1;
      
      var $224 = HEAP[$module];
      HEAP[$224] = $222;
      
      
      
      
      if (HEAP[HEAP[$module]] == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      
      
      
      
      var $233 = HEAP[HEAP[HEAP[$module] + 4] + 24];
      var $234 = HEAP[$module];
      FUNCTION_TABLE[$233]($234);
      __label__ = 55;
      break;
     case 55:
      
      
      if (HEAP[$class] != 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 56:
      
      
      
      var $240 = HEAP[HEAP[$class]] - 1;
      
      var $242 = HEAP[$class];
      HEAP[$242] = $240;
      
      
      
      
      if (HEAP[HEAP[$class]] == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      
      
      
      
      var $251 = HEAP[HEAP[HEAP[$class] + 4] + 24];
      var $252 = HEAP[$class];
      FUNCTION_TABLE[$251]($252);
      __label__ = 58;
      break;
     case 58:
      
      
      if (HEAP[$state] != 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 59:
      
      
      
      var $258 = HEAP[HEAP[$state]] - 1;
      
      var $260 = HEAP[$state];
      HEAP[$260] = $258;
      
      
      
      
      if (HEAP[HEAP[$state]] == 0) {
        __label__ = 60;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 60:
      
      
      
      
      var $269 = HEAP[HEAP[HEAP[$state] + 4] + 24];
      var $270 = HEAP[$state];
      FUNCTION_TABLE[$269]($270);
      __label__ = 61;
      break;
     case 61:
      
      
      if (HEAP[$getinitargs_func] != 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 62:
      
      
      
      var $276 = HEAP[HEAP[$getinitargs_func]] - 1;
      
      var $278 = HEAP[$getinitargs_func];
      HEAP[$278] = $276;
      
      
      
      
      if (HEAP[HEAP[$getinitargs_func]] == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      
      
      
      
      var $287 = HEAP[HEAP[HEAP[$getinitargs_func] + 4] + 24];
      var $288 = HEAP[$getinitargs_func];
      FUNCTION_TABLE[$287]($288);
      __label__ = 64;
      break;
     case 64:
      
      
      if (HEAP[$getstate_func] != 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 65:
      
      
      
      var $294 = HEAP[HEAP[$getstate_func]] - 1;
      
      var $296 = HEAP[$getstate_func];
      HEAP[$296] = $294;
      
      
      
      
      if (HEAP[HEAP[$getstate_func]] == 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 66:
      
      
      
      
      var $305 = HEAP[HEAP[HEAP[$getstate_func] + 4] + 24];
      var $306 = HEAP[$getstate_func];
      FUNCTION_TABLE[$305]($306);
      __label__ = 67;
      break;
     case 67:
      
      
      if (HEAP[$class_args] != 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 68:
      
      
      
      var $312 = HEAP[HEAP[$class_args]] - 1;
      
      var $314 = HEAP[$class_args];
      HEAP[$314] = $312;
      
      
      
      
      if (HEAP[HEAP[$class_args]] == 0) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      
      
      
      
      var $323 = HEAP[HEAP[HEAP[$class_args] + 4] + 24];
      var $324 = HEAP[$class_args];
      FUNCTION_TABLE[$323]($324);
      __label__ = 70;
      break;
     case 70:
      var $325 = HEAP[$res];
      HEAP[$0] = $325;
      var $326 = HEAP[$0];
      HEAP[$retval] = $326;
      __label__ = 71;
      break;
     case 71:
      var $retval69 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval69;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _save_global($self, $args, $name) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 73;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 73);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $name_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $global_name = __stackBase__ + 20;
      var $module = __stackBase__ + 24;
      var $mod = __stackBase__ + 28;
      var $klass = __stackBase__ + 32;
      var $name_str = __stackBase__ + 36;
      var $module_str = __stackBase__ + 40;
      var $module_size = __stackBase__ + 44;
      var $name_size = __stackBase__ + 48;
      var $res = __stackBase__ + 52;
      var $py_code = __stackBase__ + 56;
      var $code = __stackBase__ + 60;
      var $c_str = __stackBase__ + 64;
      var $n = __stackBase__ + 69;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$name_addr] = $name;
      HEAP[$global_name] = 0;
      HEAP[$module] = 0;
      HEAP[$mod] = 0;
      HEAP[$klass] = 0;
      HEAP[$res] = -1;
      
      
      if (HEAP[$name_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[$name_addr];
      HEAP[$global_name] = $3;
      
      
      
      var $7 = HEAP[HEAP[$global_name]] + 1;
      
      var $9 = HEAP[$global_name];
      HEAP[$9] = $7;
      __label__ = 3;
      break;
     case 2:
      var $10 = HEAP[___name___str];
      var $11 = HEAP[$args_addr];
      var $12 = _PyObject_GetAttr($11, $10);
      HEAP[$global_name] = $12;
      
      
      if (HEAP[$global_name] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $15 = HEAP[$args_addr];
      var $16 = HEAP[$global_name];
      var $17 = _whichmodule($15, $16);
      HEAP[$module] = $17;
      
      
      if (HEAP[$module] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $20 = HEAP[$module];
      var $21 = _PyString_Size($20);
      HEAP[$module_size] = $21;
      
      
      if (HEAP[$module_size] < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $24 = HEAP[$global_name];
      var $25 = _PyString_Size($24);
      HEAP[$name_size] = $25;
      
      
      if (HEAP[$name_size] < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $31 = HEAP[$module] + 20;
      HEAP[$module_str] = $31;
      
      
      
      var $35 = HEAP[$global_name] + 20;
      HEAP[$name_str] = $35;
      var $36 = HEAP[$module_str];
      var $37 = _PyImport_ImportModule($36);
      HEAP[$mod] = $37;
      
      
      if (HEAP[$mod] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $40 = HEAP[_PicklingError];
      var $41 = HEAP[$args_addr];
      var $42 = HEAP[$module];
      var $43 = _cPickle_ErrFormat($40, __str25, __str26, allocate([ $41, 0, 0, 0, $42, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 37;
      break;
     case 8:
      var $44 = HEAP[$mod];
      var $45 = HEAP[$name_str];
      var $46 = _PyObject_GetAttrString($44, $45);
      HEAP[$klass] = $46;
      
      
      if (HEAP[$klass] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $49 = HEAP[_PicklingError];
      var $50 = HEAP[$args_addr];
      var $51 = HEAP[$module];
      var $52 = HEAP[$global_name];
      var $53 = _cPickle_ErrFormat($49, __str27, __str28, allocate([ $50, 0, 0, 0, $51, 0, 0, 0, $52, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 37;
      break;
     case 10:
      
      
      
      if (HEAP[$klass] != HEAP[$args_addr]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      var $60 = HEAP[HEAP[$klass]] - 1;
      
      var $62 = HEAP[$klass];
      HEAP[$62] = $60;
      
      
      
      
      if (HEAP[HEAP[$klass]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $71 = HEAP[HEAP[HEAP[$klass] + 4] + 24];
      var $72 = HEAP[$klass];
      FUNCTION_TABLE[$71]($72);
      __label__ = 13;
      break;
     case 13:
      var $73 = HEAP[_PicklingError];
      var $74 = HEAP[$args_addr];
      var $75 = HEAP[$module];
      var $76 = HEAP[$global_name];
      var $77 = _cPickle_ErrFormat($73, __str29, __str28, allocate([ $74, 0, 0, 0, $75, 0, 0, 0, $76, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 37;
      break;
     case 14:
      
      
      
      var $81 = HEAP[HEAP[$klass]] - 1;
      
      var $83 = HEAP[$klass];
      HEAP[$83] = $81;
      
      
      
      
      if (HEAP[HEAP[$klass]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $92 = HEAP[HEAP[HEAP[$klass] + 4] + 24];
      var $93 = HEAP[$klass];
      FUNCTION_TABLE[$92]($93);
      __label__ = 16;
      break;
     case 16:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 36] > 1) {
        __label__ = 17;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 17:
      
      
      
      var $101 = HEAP[_two_tuple] + 12;
      var $102 = HEAP[$module];
      HEAP[$101] = $102;
      
      
      
      var $106 = HEAP[_two_tuple] + 12 + 4;
      var $107 = HEAP[$global_name];
      HEAP[$106] = $107;
      var $108 = HEAP[_two_tuple];
      var $109 = HEAP[_extension_registry];
      var $110 = _PyDict_GetItem($109, $108);
      HEAP[$py_code] = $110;
      
      
      if (HEAP[$py_code] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$py_code] + 4] + 84] & 8388608) == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $120 = HEAP[_PicklingError];
      var $121 = HEAP[$args_addr];
      var $122 = HEAP[$py_code];
      var $123 = _cPickle_ErrFormat($120, __str30, __str31, allocate([ $121, 0, 0, 0, $122, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 37;
      break;
     case 20:
      
      
      
      var $127 = HEAP[HEAP[$py_code] + 8];
      HEAP[$code] = $127;
      
      
      if (HEAP[$code] <= 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      var $130 = HEAP[_PicklingError];
      var $131 = HEAP[$args_addr];
      var $132 = HEAP[$code];
      var $133 = _cPickle_ErrFormat($130, __str32, __str33, allocate([ $131, 0, 0, 0, $132, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 37;
      break;
     case 22:
      
      
      if (HEAP[$code] <= 255) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      HEAP[$c_str] = -126;
      
      var $138 = HEAP[$code] & 255;
      
      HEAP[$c_str + 1] = $138;
      HEAP[$n] = 2;
      __label__ = 27;
      break;
     case 24:
      
      
      if (HEAP[$code] <= 65535) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      HEAP[$c_str] = -125;
      
      var $144 = HEAP[$code] & 255;
      
      HEAP[$c_str + 1] = $144;
      
      
      var $148 = HEAP[$code] >> 8 & 255;
      
      HEAP[$c_str + 2] = $148;
      HEAP[$n] = 3;
      __label__ = 27;
      break;
     case 26:
      
      HEAP[$c_str] = -124;
      
      var $152 = HEAP[$code] & 255;
      
      HEAP[$c_str + 1] = $152;
      
      
      var $156 = HEAP[$code] >> 8 & 255;
      
      HEAP[$c_str + 2] = $156;
      
      
      var $160 = HEAP[$code] >> 16 & 255;
      
      HEAP[$c_str + 3] = $160;
      
      
      var $164 = HEAP[$code] >> 24 & 255;
      
      HEAP[$c_str + 4] = $164;
      HEAP[$n] = 5;
      __label__ = 27;
      break;
     case 27:
      
      
      var $168 = HEAP[HEAP[$self_addr] + 48];
      var $169 = HEAP[$self_addr];
      var $c_str27 = $c_str;
      var $170 = HEAP[$n];
      var $171 = FUNCTION_TABLE[$168]($169, $c_str27, $170);
      
      if ($171 >= 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      HEAP[$res] = 0;
      __label__ = 29;
      break;
     case 29:
      __label__ = 37;
      break;
     case 30:
      
      
      var $175 = HEAP[HEAP[$self_addr] + 48];
      var $176 = HEAP[$self_addr];
      var $177 = FUNCTION_TABLE[$175]($176, _global_10803, 1);
      
      if ($177 < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      var $181 = HEAP[HEAP[$self_addr] + 48];
      var $182 = HEAP[$self_addr];
      var $183 = HEAP[$module_str];
      var $184 = HEAP[$module_size];
      var $185 = FUNCTION_TABLE[$181]($182, $183, $184);
      
      if ($185 < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      var $189 = HEAP[HEAP[$self_addr] + 48];
      var $190 = HEAP[$self_addr];
      var $191 = FUNCTION_TABLE[$189]($190, __str12, 1);
      
      if ($191 < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      var $195 = HEAP[HEAP[$self_addr] + 48];
      var $196 = HEAP[$self_addr];
      var $197 = HEAP[$name_str];
      var $198 = HEAP[$name_size];
      var $199 = FUNCTION_TABLE[$195]($196, $197, $198);
      
      if ($199 < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      var $203 = HEAP[HEAP[$self_addr] + 48];
      var $204 = HEAP[$self_addr];
      var $205 = FUNCTION_TABLE[$203]($204, __str12, 1);
      
      if ($205 < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      var $207 = HEAP[$self_addr];
      var $208 = HEAP[$args_addr];
      var $209 = _put($207, $208);
      
      if ($209 < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      HEAP[$res] = 0;
      __label__ = 37;
      break;
     case 37:
      
      
      if (HEAP[$module] != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 38:
      
      
      
      var $216 = HEAP[HEAP[$module]] - 1;
      
      var $218 = HEAP[$module];
      HEAP[$218] = $216;
      
      
      
      
      if (HEAP[HEAP[$module]] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      var $227 = HEAP[HEAP[HEAP[$module] + 4] + 24];
      var $228 = HEAP[$module];
      FUNCTION_TABLE[$227]($228);
      __label__ = 40;
      break;
     case 40:
      
      
      if (HEAP[$global_name] != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 41:
      
      
      
      var $234 = HEAP[HEAP[$global_name]] - 1;
      
      var $236 = HEAP[$global_name];
      HEAP[$236] = $234;
      
      
      
      
      if (HEAP[HEAP[$global_name]] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $245 = HEAP[HEAP[HEAP[$global_name] + 4] + 24];
      var $246 = HEAP[$global_name];
      FUNCTION_TABLE[$245]($246);
      __label__ = 43;
      break;
     case 43:
      
      
      if (HEAP[$mod] != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 44:
      
      
      
      var $252 = HEAP[HEAP[$mod]] - 1;
      
      var $254 = HEAP[$mod];
      HEAP[$254] = $252;
      
      
      
      
      if (HEAP[HEAP[$mod]] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      var $263 = HEAP[HEAP[HEAP[$mod] + 4] + 24];
      var $264 = HEAP[$mod];
      FUNCTION_TABLE[$263]($264);
      __label__ = 46;
      break;
     case 46:
      var $265 = HEAP[$res];
      HEAP[$0] = $265;
      var $266 = HEAP[$0];
      HEAP[$retval] = $266;
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
  function _save_pers($self, $args, $f) {
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
      var $f_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $pid = __stackBase__ + 20;
      var $size = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$f_addr] = $f;
      HEAP[$pid] = 0;
      HEAP[$res] = -1;
      
      
      
      var $4 = HEAP[HEAP[$args_addr]] + 1;
      
      var $6 = HEAP[$args_addr];
      HEAP[$6] = $4;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $11 = _PyTuple_New(1);
      
      var $13 = HEAP[$self_addr] + 24;
      HEAP[$13] = $11;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 24] + 12] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $32 = HEAP[HEAP[HEAP[$self_addr] + 24] + 12];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      var $50 = HEAP[HEAP[HEAP[HEAP[HEAP[$self_addr] + 24] + 12] + 4] + 24];
      
      
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[$self_addr] + 24] + 12];
      FUNCTION_TABLE[$50]($57);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      
      var $63 = HEAP[HEAP[$self_addr] + 24] + 12;
      var $64 = HEAP[$args_addr];
      HEAP[$63] = $64;
      __label__ = 8;
      break;
     case 6:
      
      
      
      var $68 = HEAP[HEAP[$args_addr]] - 1;
      
      var $70 = HEAP[$args_addr];
      HEAP[$70] = $68;
      
      
      
      
      if (HEAP[HEAP[$args_addr]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $79 = HEAP[HEAP[HEAP[$args_addr] + 4] + 24];
      var $80 = HEAP[$args_addr];
      FUNCTION_TABLE[$79]($80);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      
      var $87 = HEAP[HEAP[$self_addr] + 24];
      var $88 = HEAP[$f_addr];
      var $89 = _PyObject_Call($88, $87, 0);
      HEAP[$pid] = $89;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 24]] > 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      var $98 = HEAP[HEAP[$self_addr] + 24];
      
      
      var $101 = HEAP[$98] - 1;
      var $102 = $98;
      HEAP[$102] = $101;
      
      
      
      if (HEAP[$98] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      var $112 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 24] + 4] + 24];
      
      
      var $115 = HEAP[HEAP[$self_addr] + 24];
      FUNCTION_TABLE[$112]($115);
      __label__ = 12;
      break;
     case 12:
      
      var $117 = HEAP[$self_addr] + 24;
      HEAP[$117] = 0;
      __label__ = 13;
      break;
     case 13:
      
      
      if (HEAP[$pid] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = -1;
      __label__ = 34;
      break;
     case 15:
      
      
      if (HEAP[$pid] != __Py_NoneStruct) {
        __label__ = 16;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 16:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$pid] + 4] + 84] & 134217728) == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $133 = HEAP[_PicklingError];
      _PyErr_SetString($133, __str34);
      __label__ = 30;
      break;
     case 19:
      
      
      var $136 = HEAP[HEAP[$self_addr] + 48];
      var $137 = HEAP[$self_addr];
      var $138 = FUNCTION_TABLE[$136]($137, _persid_10947, 1);
      
      if ($138 < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      var $140 = HEAP[$pid];
      var $141 = _PyString_Size($140);
      HEAP[$size] = $141;
      
      
      if (HEAP[$size] < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      var $146 = HEAP[HEAP[$self_addr] + 48];
      
      
      
      var $150 = HEAP[$pid] + 20;
      var $151 = HEAP[$self_addr];
      var $152 = HEAP[$size];
      var $153 = FUNCTION_TABLE[$146]($151, $150, $152);
      
      if ($153 < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      var $157 = HEAP[HEAP[$self_addr] + 48];
      var $158 = HEAP[$self_addr];
      var $159 = FUNCTION_TABLE[$157]($158, __str12, 1);
      
      if ($159 < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      HEAP[$res] = 1;
      __label__ = 30;
      break;
     case 24:
      var $161 = HEAP[$self_addr];
      var $162 = HEAP[$pid];
      var $163 = _save($161, $162, 1);
      
      if ($163 >= 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 25:
      
      
      var $167 = HEAP[HEAP[$self_addr] + 48];
      var $168 = HEAP[$self_addr];
      var $169 = FUNCTION_TABLE[$167]($168, _binpersid_10948, 1);
      
      if ($169 < 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      HEAP[$res] = -1;
      __label__ = 28;
      break;
     case 27:
      HEAP[$res] = 1;
      __label__ = 28;
      break;
     case 28:
      __label__ = 30;
      break;
     case 29:
      HEAP[$res] = 0;
      __label__ = 30;
      break;
     case 30:
      
      
      if (HEAP[$pid] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 31:
      
      
      
      var $176 = HEAP[HEAP[$pid]] - 1;
      
      var $178 = HEAP[$pid];
      HEAP[$178] = $176;
      
      
      
      
      if (HEAP[HEAP[$pid]] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      var $187 = HEAP[HEAP[HEAP[$pid] + 4] + 24];
      var $188 = HEAP[$pid];
      FUNCTION_TABLE[$187]($188);
      __label__ = 33;
      break;
     case 33:
      var $189 = HEAP[$res];
      HEAP[$0] = $189;
      __label__ = 34;
      break;
     case 34:
      var $190 = HEAP[$0];
      HEAP[$retval] = $190;
      __label__ = 35;
      break;
     case 35:
      var $retval33 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval33;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _save_reduce($self, $args, $fn, $ob) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 84;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 84);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $fn_addr = __stackBase__ + 8;
      var $ob_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $iftmp_170 = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $callable = __stackBase__ + 28;
      var $argtup = __stackBase__ + 32;
      var $state = __stackBase__ + 36;
      var $listitems = __stackBase__ + 40;
      var $dictitems = __stackBase__ + 44;
      var $size = __stackBase__ + 48;
      var $use_newobj = __stackBase__ + 52;
      var $temp = __stackBase__ + 56;
      var $cls = __stackBase__ + 60;
      var $newargtup = __stackBase__ + 64;
      var $n = __stackBase__ + 68;
      var $i = __stackBase__ + 72;
      var $ob_dot_class = __stackBase__ + 76;
      var $temp52 = __stackBase__ + 80;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$fn_addr] = $fn;
      HEAP[$ob_addr] = $ob;
      HEAP[$state] = 0;
      HEAP[$listitems] = __Py_NoneStruct;
      HEAP[$dictitems] = __Py_NoneStruct;
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 36] > 1;
      HEAP[$use_newobj] = $5;
      var $6 = HEAP[$args_addr];
      var $7 = _PyTuple_Size($6);
      HEAP[$size] = $7;
      
      
      if (HEAP[$size] <= 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$size] > 5) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $12 = HEAP[_PicklingError];
      var $13 = HEAP[$fn_addr];
      var $14 = _cPickle_ErrFormat($12, __str35, __str36, allocate([ $13, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 3:
      var $15 = HEAP[$args_addr];
      var $16 = _PyArg_UnpackTuple($15, __str37, 2, 5, allocate([ $callable, 0, 0, 0, $argtup, 0, 0, 0, $state, 0, 0, 0, $listitems, 0, 0, 0, $dictitems, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($16 == 0) {
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
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$argtup] + 4] + 84] & 67108864) == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $25 = HEAP[_PicklingError];
      var $26 = HEAP[$fn_addr];
      var $27 = _cPickle_ErrFormat($25, __str38, __str36, allocate([ $26, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 7:
      
      
      if (HEAP[$state] == __Py_NoneStruct) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$state] = 0;
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$listitems] == __Py_NoneStruct) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$listitems] = 0;
      __label__ = 15;
      break;
     case 11:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$listitems] + 4] + 84] & 128) == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$listitems] + 4] + 112] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$listitems] + 4] + 112] == FUNCTION_TABLE_OFFSET + 2) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$listitems] + 4] + 12];
      var $56 = HEAP[_PicklingError];
      var $57 = HEAP[$fn_addr];
      var $58 = _cPickle_ErrFormat($56, __str39, __str40, allocate([ $57, 0, 0, 0, $55, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 15:
      
      
      if (HEAP[$dictitems] == __Py_NoneStruct) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      HEAP[$dictitems] = 0;
      __label__ = 21;
      break;
     case 17:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$dictitems] + 4] + 84] & 128) == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$dictitems] + 4] + 112] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$dictitems] + 4] + 112] == FUNCTION_TABLE_OFFSET + 2) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $84 = HEAP[HEAP[HEAP[$dictitems] + 4] + 12];
      var $85 = HEAP[_PicklingError];
      var $86 = HEAP[$fn_addr];
      var $87 = _cPickle_ErrFormat($85, __str41, __str40, allocate([ $86, 0, 0, 0, $84, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 21:
      
      
      if (HEAP[$use_newobj] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 22:
      var $90 = HEAP[___name___str];
      var $91 = HEAP[$callable];
      var $92 = _PyObject_GetAttr($91, $90);
      HEAP[$temp] = $92;
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 23:
      var $95 = HEAP[_PyExc_AttributeError];
      var $96 = _PyErr_ExceptionMatches($95);
      
      if ($96 != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      _PyErr_Clear();
      HEAP[$use_newobj] = 0;
      __label__ = 32;
      break;
     case 25:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 26:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$temp] + 4] + 84] & 134217728) == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      var $108 = HEAP[$temp] + 20;
      var $109 = _strcmp($108, __str42);
      
      if ($109 != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      HEAP[$iftmp_170] = 1;
      __label__ = 30;
      break;
     case 29:
      HEAP[$iftmp_170] = 0;
      __label__ = 30;
      break;
     case 30:
      var $111 = HEAP[$iftmp_170];
      HEAP[$use_newobj] = $111;
      
      
      
      var $115 = HEAP[HEAP[$temp]] - 1;
      
      var $117 = HEAP[$temp];
      HEAP[$117] = $115;
      
      
      
      
      if (HEAP[HEAP[$temp]] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $126 = HEAP[HEAP[HEAP[$temp] + 4] + 24];
      var $127 = HEAP[$temp];
      FUNCTION_TABLE[$126]($127);
      __label__ = 32;
      break;
     case 32:
      
      
      if (HEAP[$use_newobj] != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 33:
      var $130 = HEAP[$argtup];
      var $131 = _PyTuple_Size($130);
      HEAP[$n] = $131;
      
      
      if (HEAP[$n] <= 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      var $134 = HEAP[_PicklingError];
      _PyErr_SetString($134, __str43);
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 35:
      
      
      
      
      var $139 = HEAP[HEAP[$argtup] + 12];
      HEAP[$cls] = $139;
      var $140 = HEAP[$cls];
      var $141 = _PyObject_HasAttrString($140, __str44);
      
      if ($141 == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      var $143 = HEAP[_PicklingError];
      _PyErr_SetString($143, __str45);
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 37:
      
      
      if (HEAP[$ob_addr] != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 38:
      var $146 = HEAP[___class___str];
      var $147 = HEAP[$ob_addr];
      var $148 = _PyObject_GetAttr($147, $146);
      HEAP[$ob_dot_class] = $148;
      
      
      if (HEAP[$ob_dot_class] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 39:
      var $151 = HEAP[_PyExc_AttributeError];
      var $152 = _PyErr_ExceptionMatches($151);
      
      if ($152 != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      _PyErr_Clear();
      __label__ = 42;
      break;
     case 41:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 42:
      
      
      
      var $157 = HEAP[$ob_dot_class] != HEAP[$cls];
      HEAP[$i] = $157;
      
      
      if (HEAP[$ob_dot_class] != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 43:
      
      
      
      var $163 = HEAP[HEAP[$ob_dot_class]] - 1;
      
      var $165 = HEAP[$ob_dot_class];
      HEAP[$165] = $163;
      
      
      
      
      if (HEAP[HEAP[$ob_dot_class]] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      var $174 = HEAP[HEAP[HEAP[$ob_dot_class] + 4] + 24];
      var $175 = HEAP[$ob_dot_class];
      FUNCTION_TABLE[$174]($175);
      __label__ = 45;
      break;
     case 45:
      
      
      if (HEAP[$i] != 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      var $178 = HEAP[_PicklingError];
      _PyErr_SetString($178, __str46);
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 47:
      var $179 = HEAP[$self_addr];
      var $180 = HEAP[$cls];
      var $181 = _save($179, $180, 0);
      
      if ($181 < 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 49:
      
      var $184 = HEAP[$n] - 1;
      var $185 = _PyTuple_New($184);
      HEAP[$newargtup] = $185;
      
      
      if (HEAP[$newargtup] == 0) {
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
      HEAP[$i] = 1;
      __label__ = 53;
      break;
     case 52:
      
      
      
      
      
      var $193 = HEAP[HEAP[$argtup] + 12 + HEAP[$i] * 4];
      HEAP[$temp52] = $193;
      
      
      
      var $197 = HEAP[HEAP[$temp52]] + 1;
      
      var $199 = HEAP[$temp52];
      HEAP[$199] = $197;
      
      
      
      
      
      var $205 = HEAP[$newargtup] + 12 + (HEAP[$i] - 1) * 4;
      var $206 = HEAP[$temp52];
      HEAP[$205] = $206;
      
      var $208 = HEAP[$i] + 1;
      HEAP[$i] = $208;
      __label__ = 53;
      break;
     case 53:
      
      
      
      if (HEAP[$i] < HEAP[$n]) {
        __label__ = 52;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 54:
      var $212 = HEAP[$self_addr];
      var $213 = HEAP[$newargtup];
      var $214 = _save($212, $213, 0);
      HEAP[$i] = $214;
      
      
      
      var $218 = HEAP[HEAP[$newargtup]] - 1;
      
      var $220 = HEAP[$newargtup];
      HEAP[$220] = $218;
      
      
      
      
      if (HEAP[HEAP[$newargtup]] == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      
      
      
      
      var $229 = HEAP[HEAP[HEAP[$newargtup] + 4] + 24];
      var $230 = HEAP[$newargtup];
      FUNCTION_TABLE[$229]($230);
      __label__ = 56;
      break;
     case 56:
      
      
      if (HEAP[$i] < 0) {
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
      
      
      var $235 = HEAP[HEAP[$self_addr] + 48];
      var $236 = HEAP[$self_addr];
      var $237 = FUNCTION_TABLE[$235]($236, _newobj_11068, 1);
      
      if ($237 < 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 60:
      __label__ = 65;
      break;
     case 61:
      var $239 = HEAP[$callable];
      var $240 = HEAP[$self_addr];
      var $241 = _save($240, $239, 0);
      
      if ($241 < 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 62:
      var $243 = HEAP[$argtup];
      var $244 = HEAP[$self_addr];
      var $245 = _save($244, $243, 0);
      
      if ($245 < 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 63:
      
      
      var $249 = HEAP[HEAP[$self_addr] + 48];
      var $250 = HEAP[$self_addr];
      var $251 = FUNCTION_TABLE[$249]($250, _reduce_11066, 1);
      
      if ($251 < 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 64:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 65:
      
      
      if (HEAP[$ob_addr] != 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 66:
      
      
      if (HEAP[$state] == 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 67:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$state] + 4] + 84] & 536870912) != 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 68:
      var $264 = HEAP[$self_addr];
      var $265 = HEAP[$ob_addr];
      var $266 = _put2($264, $265);
      
      if ($266 < 0) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 70:
      __label__ = 73;
      break;
     case 71:
      var $268 = HEAP[$self_addr];
      var $269 = HEAP[$ob_addr];
      var $270 = _put($268, $269);
      
      if ($270 < 0) {
        __label__ = 72;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 72:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 73:
      
      
      if (HEAP[$listitems] != 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 74:
      var $274 = HEAP[$listitems];
      var $275 = HEAP[$self_addr];
      var $276 = _batch_list($275, $274);
      
      if ($276 < 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 76:
      
      
      if (HEAP[$dictitems] != 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 77:
      var $280 = HEAP[$dictitems];
      var $281 = HEAP[$self_addr];
      var $282 = _batch_dict($281, $280);
      
      if ($282 < 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 78:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 79:
      
      
      if (HEAP[$state] != 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 80:
      var $286 = HEAP[$state];
      var $287 = HEAP[$self_addr];
      var $288 = _save($287, $286, 0);
      
      if ($288 < 0) {
        __label__ = 82;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 81:
      
      
      var $292 = HEAP[HEAP[$self_addr] + 48];
      var $293 = HEAP[$self_addr];
      var $294 = FUNCTION_TABLE[$292]($293, _build_11067, 1);
      
      if ($294 < 0) {
        __label__ = 82;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 82:
      HEAP[$0] = -1;
      __label__ = 84;
      break;
     case 83:
      HEAP[$0] = 0;
      __label__ = 84;
      break;
     case 84:
      var $296 = HEAP[$0];
      HEAP[$retval] = $296;
      __label__ = 85;
      break;
     case 85:
      var $retval85 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval85;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _save($self, $args, $pers_save) {
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
      var $pers_save_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $type = __stackBase__ + 20;
      var $py_ob_id = __stackBase__ + 24;
      var $__reduce__ = __stackBase__ + 28;
      var $t = __stackBase__ + 32;
      var $res = __stackBase__ + 36;
      var $tmp = __stackBase__ + 40;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$pers_save_addr] = $pers_save;
      HEAP[$py_ob_id] = 0;
      HEAP[$__reduce__] = 0;
      HEAP[$t] = 0;
      HEAP[$res] = -1;
      var $1 = HEAP[__PyThreadState_Current];
      
      
      var $4 = HEAP[$1 + 12] + 1;
      var $5 = $1 + 12;
      HEAP[$5] = $4;
      
      
      
      
      if (HEAP[$1 + 12] > HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $10 = __Py_CheckRecursiveCall(__str17);
      
      if ($10 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = -1;
      __label__ = 128;
      break;
     case 3:
      
      
      if (HEAP[$pers_save_addr] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      var $20 = HEAP[HEAP[$self_addr] + 28];
      var $21 = HEAP[$self_addr];
      var $22 = HEAP[$args_addr];
      var $23 = _save_pers($21, $22, $20);
      HEAP[$tmp] = $23;
      
      
      if (HEAP[$tmp] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $26 = HEAP[$tmp];
      HEAP[$res] = $26;
      __label__ = 118;
      break;
     case 7:
      
      
      if (HEAP[$args_addr] == __Py_NoneStruct) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $29 = HEAP[$self_addr];
      var $30 = HEAP[$args_addr];
      var $31 = _save_none($29, $30);
      HEAP[$res] = $31;
      __label__ = 118;
      break;
     case 9:
      
      
      var $34 = HEAP[HEAP[$args_addr] + 4];
      HEAP[$type] = $34;
      
      
      
      
      
      var $40 = HEAP[HEAP[HEAP[$type] + 12]];
      if ($40 == 98) {
        __label__ = 10;
        break;
      } else if ($40 == 102) {
        __label__ = 20;
        break;
      } else if ($40 == 105) {
        __label__ = 14;
        break;
      } else if ($40 == 108) {
        __label__ = 17;
        break;
      } else if ($40 == 115) {
        __label__ = 27;
        break;
      } else if ($40 == 116) {
        __label__ = 23;
        break;
      } else if ($40 == 117) {
        __label__ = 31;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 10:
      
      
      if (HEAP[$args_addr] == __Py_ZeroStruct) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      if (HEAP[$args_addr] == __Py_TrueStruct) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $45 = HEAP[$self_addr];
      var $46 = HEAP[$args_addr];
      var $47 = _save_bool($45, $46);
      HEAP[$res] = $47;
      __label__ = 118;
      break;
     case 13:
      __label__ = 34;
      break;
     case 14:
      
      
      if (HEAP[$type] == _PyInt_Type) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $50 = HEAP[$self_addr];
      var $51 = HEAP[$args_addr];
      var $52 = _save_int($50, $51);
      HEAP[$res] = $52;
      __label__ = 118;
      break;
     case 16:
      __label__ = 34;
      break;
     case 17:
      
      
      if (HEAP[$type] == _PyLong_Type) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $55 = HEAP[$self_addr];
      var $56 = HEAP[$args_addr];
      var $57 = _save_long($55, $56);
      HEAP[$res] = $57;
      __label__ = 118;
      break;
     case 19:
      __label__ = 34;
      break;
     case 20:
      
      
      if (HEAP[$type] == _PyFloat_Type) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      var $60 = HEAP[$self_addr];
      var $61 = HEAP[$args_addr];
      var $62 = _save_float($60, $61);
      HEAP[$res] = $62;
      __label__ = 118;
      break;
     case 22:
      __label__ = 34;
      break;
     case 23:
      
      
      if (HEAP[$type] == _PyTuple_Type) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 24:
      var $65 = HEAP[$args_addr];
      var $66 = _PyTuple_Size($65);
      
      if ($66 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $68 = HEAP[$self_addr];
      var $69 = HEAP[$args_addr];
      var $70 = _save_tuple($68, $69);
      HEAP[$res] = $70;
      __label__ = 118;
      break;
     case 26:
      __label__ = 34;
      break;
     case 27:
      
      
      if (HEAP[$type] == _PyString_Type) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      
      
      
      
      
      if (HEAP[HEAP[$args_addr] + 8] <= 1) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $78 = HEAP[$self_addr];
      var $79 = HEAP[$args_addr];
      var $80 = _save_string($78, $79, 0);
      HEAP[$res] = $80;
      __label__ = 118;
      break;
     case 30:
      __label__ = 34;
      break;
     case 31:
      
      
      if (HEAP[$type] == _PyUnicode_Type) {
        __label__ = 32;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 32:
      
      
      
      
      
      if (HEAP[HEAP[$args_addr] + 8] <= 1) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      var $88 = HEAP[$self_addr];
      var $89 = HEAP[$args_addr];
      var $90 = _save_unicode($88, $89, 0);
      HEAP[$res] = $90;
      __label__ = 118;
      break;
     case 34:
      
      
      
      
      if (HEAP[HEAP[$args_addr]] > 1) {
        __label__ = 35;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 35:
      
      var $96 = HEAP[$args_addr];
      var $97 = _PyLong_FromVoidPtr($96);
      HEAP[$py_ob_id] = $97;
      
      
      if (HEAP[$py_ob_id] == 0) {
        __label__ = 118;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      var $102 = HEAP[HEAP[$self_addr] + 20];
      var $103 = HEAP[$py_ob_id];
      var $104 = _PyDict_GetItem($102, $103);
      
      if ($104 != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 37:
      var $106 = HEAP[$self_addr];
      var $107 = HEAP[$py_ob_id];
      var $108 = _get($106, $107);
      
      if ($108 < 0) {
        __label__ = 118;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      HEAP[$res] = 0;
      __label__ = 118;
      break;
     case 39:
      
      
      
      
      
      var $115 = HEAP[HEAP[HEAP[$type] + 12]];
      if ($115 == 98) {
        __label__ = 69;
        break;
      } else if ($115 == 99) {
        __label__ = 60;
        break;
      } else if ($115 == 100) {
        __label__ = 54;
        break;
      } else if ($115 == 102) {
        __label__ = 63;
        break;
      } else if ($115 == 105) {
        __label__ = 57;
        break;
      } else if ($115 == 108) {
        __label__ = 51;
        break;
      } else if ($115 == 115) {
        __label__ = 40;
        break;
      } else if ($115 == 116) {
        __label__ = 46;
        break;
      } else if ($115 == 117) {
        __label__ = 43;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 40:
      
      
      if (HEAP[$type] == _PyString_Type) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      var $118 = HEAP[$self_addr];
      var $119 = HEAP[$args_addr];
      var $120 = _save_string($118, $119, 1);
      HEAP[$res] = $120;
      __label__ = 118;
      break;
     case 42:
      __label__ = 71;
      break;
     case 43:
      
      
      if (HEAP[$type] == _PyUnicode_Type) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      var $123 = HEAP[$self_addr];
      var $124 = HEAP[$args_addr];
      var $125 = _save_unicode($123, $124, 1);
      HEAP[$res] = $125;
      __label__ = 118;
      break;
     case 45:
      __label__ = 71;
      break;
     case 46:
      
      
      if (HEAP[$type] == _PyTuple_Type) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      var $128 = HEAP[$self_addr];
      var $129 = HEAP[$args_addr];
      var $130 = _save_tuple($128, $129);
      HEAP[$res] = $130;
      __label__ = 118;
      break;
     case 48:
      
      
      if (HEAP[$type] == _PyType_Type) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      var $133 = HEAP[$self_addr];
      var $134 = HEAP[$args_addr];
      var $135 = _save_global($133, $134, 0);
      HEAP[$res] = $135;
      __label__ = 118;
      break;
     case 50:
      __label__ = 71;
      break;
     case 51:
      
      
      if (HEAP[$type] == _PyList_Type) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      var $138 = HEAP[$self_addr];
      var $139 = HEAP[$args_addr];
      var $140 = _save_list($138, $139);
      HEAP[$res] = $140;
      __label__ = 118;
      break;
     case 53:
      __label__ = 71;
      break;
     case 54:
      
      
      if (HEAP[$type] == _PyDict_Type) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      var $143 = HEAP[$self_addr];
      var $144 = HEAP[$args_addr];
      var $145 = _save_dict($143, $144);
      HEAP[$res] = $145;
      __label__ = 118;
      break;
     case 56:
      __label__ = 71;
      break;
     case 57:
      
      
      if (HEAP[$type] == _PyInstance_Type) {
        __label__ = 58;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 58:
      var $148 = HEAP[$self_addr];
      var $149 = HEAP[$args_addr];
      var $150 = _save_inst($148, $149);
      HEAP[$res] = $150;
      __label__ = 118;
      break;
     case 59:
      __label__ = 71;
      break;
     case 60:
      
      
      if (HEAP[$type] == _PyClass_Type) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      var $153 = HEAP[$self_addr];
      var $154 = HEAP[$args_addr];
      var $155 = _save_global($153, $154, 0);
      HEAP[$res] = $155;
      __label__ = 118;
      break;
     case 62:
      __label__ = 71;
      break;
     case 63:
      
      
      if (HEAP[$type] == _PyFunction_Type) {
        __label__ = 64;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 64:
      var $158 = HEAP[$self_addr];
      var $159 = HEAP[$args_addr];
      var $160 = _save_global($158, $159, 0);
      HEAP[$res] = $160;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 65:
      var $163 = HEAP[_PickleError];
      var $164 = _PyErr_ExceptionMatches($163);
      
      if ($164 != 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 66:
      _PyErr_Clear();
      __label__ = 71;
      break;
     case 67:
      __label__ = 118;
      break;
     case 68:
      __label__ = 71;
      break;
     case 69:
      
      
      if (HEAP[$type] == _PyCFunction_Type) {
        __label__ = 70;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 70:
      var $168 = HEAP[$self_addr];
      var $169 = HEAP[$args_addr];
      var $170 = _save_global($168, $169, 0);
      HEAP[$res] = $170;
      __label__ = 118;
      break;
     case 71:
      
      
      if (HEAP[$pers_save_addr] == 0) {
        __label__ = 72;
        break;
      } else {
        __label__ = 75;
        break;
      }
     case 72:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] != 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 75;
        break;
      }
     case 73:
      
      
      var $179 = HEAP[HEAP[$self_addr] + 32];
      var $180 = HEAP[$self_addr];
      var $181 = HEAP[$args_addr];
      var $182 = _save_pers($180, $181, $179);
      HEAP[$tmp] = $182;
      
      
      if (HEAP[$tmp] != 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 75;
        break;
      }
     case 74:
      var $185 = HEAP[$tmp];
      HEAP[$res] = $185;
      __label__ = 118;
      break;
     case 75:
      var $186 = HEAP[$type];
      var $187 = _PyType_IsSubtype($186, _PyType_Type);
      
      if ($187 != 0) {
        __label__ = 76;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 76:
      var $189 = HEAP[$self_addr];
      var $190 = HEAP[$args_addr];
      var $191 = _save_global($189, $190, 0);
      HEAP[$res] = $191;
      __label__ = 118;
      break;
     case 77:
      
      var $193 = HEAP[$type];
      var $194 = HEAP[_dispatch_table];
      var $195 = _PyDict_GetItem($194, $193);
      HEAP[$__reduce__] = $195;
      
      
      if (HEAP[$__reduce__] != 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 92;
        break;
      }
     case 78:
      
      
      
      var $201 = HEAP[HEAP[$__reduce__]] + 1;
      
      var $203 = HEAP[$__reduce__];
      HEAP[$203] = $201;
      
      
      
      var $207 = HEAP[HEAP[$args_addr]] + 1;
      
      var $209 = HEAP[$args_addr];
      HEAP[$209] = $207;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 79:
      var $214 = _PyTuple_New(1);
      
      var $216 = HEAP[$self_addr] + 24;
      HEAP[$216] = $214;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 84;
        break;
      }
     case 80:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 24] + 12] != 0) {
        __label__ = 81;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 81:
      
      
      
      
      
      
      var $235 = HEAP[HEAP[HEAP[$self_addr] + 24] + 12];
      
      
      var $238 = HEAP[$235] - 1;
      var $239 = $235;
      HEAP[$239] = $238;
      
      
      
      if (HEAP[$235] == 0) {
        __label__ = 82;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 82:
      
      
      
      
      
      
      
      
      
      
      var $253 = HEAP[HEAP[HEAP[HEAP[HEAP[$self_addr] + 24] + 12] + 4] + 24];
      
      
      
      
      
      
      var $260 = HEAP[HEAP[HEAP[$self_addr] + 24] + 12];
      FUNCTION_TABLE[$253]($260);
      __label__ = 83;
      break;
     case 83:
      
      
      
      
      
      var $266 = HEAP[HEAP[$self_addr] + 24] + 12;
      var $267 = HEAP[$args_addr];
      HEAP[$266] = $267;
      __label__ = 86;
      break;
     case 84:
      
      
      
      var $271 = HEAP[HEAP[$args_addr]] - 1;
      
      var $273 = HEAP[$args_addr];
      HEAP[$273] = $271;
      
      
      
      
      if (HEAP[HEAP[$args_addr]] == 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      
      
      
      
      var $282 = HEAP[HEAP[HEAP[$args_addr] + 4] + 24];
      var $283 = HEAP[$args_addr];
      FUNCTION_TABLE[$282]($283);
      __label__ = 86;
      break;
     case 86:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 87;
        break;
      } else {
        __label__ = 91;
        break;
      }
     case 87:
      
      
      var $290 = HEAP[HEAP[$self_addr] + 24];
      var $291 = HEAP[$__reduce__];
      var $292 = _PyObject_Call($291, $290, 0);
      HEAP[$t] = $292;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 24]] > 1) {
        __label__ = 88;
        break;
      } else {
        __label__ = 91;
        break;
      }
     case 88:
      
      
      var $301 = HEAP[HEAP[$self_addr] + 24];
      
      
      var $304 = HEAP[$301] - 1;
      var $305 = $301;
      HEAP[$305] = $304;
      
      
      
      if (HEAP[$301] == 0) {
        __label__ = 89;
        break;
      } else {
        __label__ = 90;
        break;
      }
     case 89:
      
      
      
      
      
      
      var $315 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 24] + 4] + 24];
      
      
      var $318 = HEAP[HEAP[$self_addr] + 24];
      FUNCTION_TABLE[$315]($318);
      __label__ = 90;
      break;
     case 90:
      
      var $320 = HEAP[$self_addr] + 24;
      HEAP[$320] = 0;
      __label__ = 91;
      break;
     case 91:
      __label__ = 112;
      break;
     case 92:
      var $321 = HEAP[___reduce_ex___str];
      var $322 = HEAP[$args_addr];
      var $323 = _PyObject_GetAttr($322, $321);
      HEAP[$__reduce__] = $323;
      
      
      if (HEAP[$__reduce__] != 0) {
        __label__ = 93;
        break;
      } else {
        __label__ = 108;
        break;
      }
     case 93:
      
      
      var $328 = HEAP[HEAP[$self_addr] + 36];
      var $329 = _PyInt_FromLong($328);
      HEAP[$t] = $329;
      
      
      if (HEAP[$t] != 0) {
        __label__ = 94;
        break;
      } else {
        __label__ = 107;
        break;
      }
     case 94:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 96;
        break;
      } else {
        __label__ = 95;
        break;
      }
     case 95:
      var $336 = _PyTuple_New(1);
      
      var $338 = HEAP[$self_addr] + 24;
      HEAP[$338] = $336;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 96;
        break;
      } else {
        __label__ = 100;
        break;
      }
     case 96:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 24] + 12] != 0) {
        __label__ = 97;
        break;
      } else {
        __label__ = 99;
        break;
      }
     case 97:
      
      
      
      
      
      
      var $357 = HEAP[HEAP[HEAP[$self_addr] + 24] + 12];
      
      
      var $360 = HEAP[$357] - 1;
      var $361 = $357;
      HEAP[$361] = $360;
      
      
      
      if (HEAP[$357] == 0) {
        __label__ = 98;
        break;
      } else {
        __label__ = 99;
        break;
      }
     case 98:
      
      
      
      
      
      
      
      
      
      
      var $375 = HEAP[HEAP[HEAP[HEAP[HEAP[$self_addr] + 24] + 12] + 4] + 24];
      
      
      
      
      
      
      var $382 = HEAP[HEAP[HEAP[$self_addr] + 24] + 12];
      FUNCTION_TABLE[$375]($382);
      __label__ = 99;
      break;
     case 99:
      
      
      
      
      
      var $388 = HEAP[HEAP[$self_addr] + 24] + 12;
      var $389 = HEAP[$t];
      HEAP[$388] = $389;
      __label__ = 102;
      break;
     case 100:
      
      
      
      var $393 = HEAP[HEAP[$t]] - 1;
      
      var $395 = HEAP[$t];
      HEAP[$395] = $393;
      
      
      
      
      if (HEAP[HEAP[$t]] == 0) {
        __label__ = 101;
        break;
      } else {
        __label__ = 102;
        break;
      }
     case 101:
      
      
      
      
      var $404 = HEAP[HEAP[HEAP[$t] + 4] + 24];
      var $405 = HEAP[$t];
      FUNCTION_TABLE[$404]($405);
      __label__ = 102;
      break;
     case 102:
      HEAP[$t] = 0;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 103;
        break;
      } else {
        __label__ = 107;
        break;
      }
     case 103:
      
      
      var $412 = HEAP[HEAP[$self_addr] + 24];
      var $413 = HEAP[$__reduce__];
      var $414 = _PyObject_Call($413, $412, 0);
      HEAP[$t] = $414;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 24]] > 1) {
        __label__ = 104;
        break;
      } else {
        __label__ = 107;
        break;
      }
     case 104:
      
      
      var $423 = HEAP[HEAP[$self_addr] + 24];
      
      
      var $426 = HEAP[$423] - 1;
      var $427 = $423;
      HEAP[$427] = $426;
      
      
      
      if (HEAP[$423] == 0) {
        __label__ = 105;
        break;
      } else {
        __label__ = 106;
        break;
      }
     case 105:
      
      
      
      
      
      
      var $437 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 24] + 4] + 24];
      
      
      var $440 = HEAP[HEAP[$self_addr] + 24];
      FUNCTION_TABLE[$437]($440);
      __label__ = 106;
      break;
     case 106:
      
      var $442 = HEAP[$self_addr] + 24;
      HEAP[$442] = 0;
      __label__ = 107;
      break;
     case 107:
      __label__ = 112;
      break;
     case 108:
      var $443 = HEAP[_PyExc_AttributeError];
      var $444 = _PyErr_ExceptionMatches($443);
      
      if ($444 != 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 118;
        break;
      }
     case 109:
      _PyErr_Clear();
      var $446 = HEAP[___reduce___str];
      var $447 = HEAP[$args_addr];
      var $448 = _PyObject_GetAttr($447, $446);
      HEAP[$__reduce__] = $448;
      
      
      if (HEAP[$__reduce__] != 0) {
        __label__ = 110;
        break;
      } else {
        __label__ = 111;
        break;
      }
     case 110:
      var $451 = HEAP[_empty_tuple];
      var $452 = HEAP[$__reduce__];
      var $453 = _PyObject_Call($452, $451, 0);
      HEAP[$t] = $453;
      __label__ = 112;
      break;
     case 111:
      var $454 = HEAP[_UnpickleableError];
      var $455 = HEAP[$args_addr];
      _PyErr_SetObject($454, $455);
      __label__ = 118;
      break;
     case 112:
      
      
      if (HEAP[$t] == 0) {
        __label__ = 118;
        break;
      } else {
        __label__ = 113;
        break;
      }
     case 113:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$t] + 4] + 84] & 134217728) != 0) {
        __label__ = 114;
        break;
      } else {
        __label__ = 115;
        break;
      }
     case 114:
      var $465 = HEAP[$self_addr];
      var $466 = HEAP[$args_addr];
      var $467 = HEAP[$t];
      var $468 = _save_global($465, $466, $467);
      HEAP[$res] = $468;
      __label__ = 118;
      break;
     case 115:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$t] + 4] + 84] & 67108864) == 0) {
        __label__ = 116;
        break;
      } else {
        __label__ = 117;
        break;
      }
     case 116:
      var $476 = HEAP[_PicklingError];
      var $477 = HEAP[$__reduce__];
      var $478 = _cPickle_ErrFormat($476, __str47, __str36, allocate([ $477, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 118;
      break;
     case 117:
      var $479 = HEAP[$self_addr];
      var $480 = HEAP[$t];
      var $481 = HEAP[$__reduce__];
      var $482 = HEAP[$args_addr];
      var $483 = _save_reduce($479, $480, $481, $482);
      HEAP[$res] = $483;
      __label__ = 118;
      break;
     case 118:
      
      
      
      var $487 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $488 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$488] = $487;
      
      
      if (HEAP[$py_ob_id] != 0) {
        __label__ = 119;
        break;
      } else {
        __label__ = 121;
        break;
      }
     case 119:
      
      
      
      var $494 = HEAP[HEAP[$py_ob_id]] - 1;
      
      var $496 = HEAP[$py_ob_id];
      HEAP[$496] = $494;
      
      
      
      
      if (HEAP[HEAP[$py_ob_id]] == 0) {
        __label__ = 120;
        break;
      } else {
        __label__ = 121;
        break;
      }
     case 120:
      
      
      
      
      var $505 = HEAP[HEAP[HEAP[$py_ob_id] + 4] + 24];
      var $506 = HEAP[$py_ob_id];
      FUNCTION_TABLE[$505]($506);
      __label__ = 121;
      break;
     case 121:
      
      
      if (HEAP[$__reduce__] != 0) {
        __label__ = 122;
        break;
      } else {
        __label__ = 124;
        break;
      }
     case 122:
      
      
      
      var $512 = HEAP[HEAP[$__reduce__]] - 1;
      
      var $514 = HEAP[$__reduce__];
      HEAP[$514] = $512;
      
      
      
      
      if (HEAP[HEAP[$__reduce__]] == 0) {
        __label__ = 123;
        break;
      } else {
        __label__ = 124;
        break;
      }
     case 123:
      
      
      
      
      var $523 = HEAP[HEAP[HEAP[$__reduce__] + 4] + 24];
      var $524 = HEAP[$__reduce__];
      FUNCTION_TABLE[$523]($524);
      __label__ = 124;
      break;
     case 124:
      
      
      if (HEAP[$t] != 0) {
        __label__ = 125;
        break;
      } else {
        __label__ = 127;
        break;
      }
     case 125:
      
      
      
      var $530 = HEAP[HEAP[$t]] - 1;
      
      var $532 = HEAP[$t];
      HEAP[$532] = $530;
      
      
      
      
      if (HEAP[HEAP[$t]] == 0) {
        __label__ = 126;
        break;
      } else {
        __label__ = 127;
        break;
      }
     case 126:
      
      
      
      
      var $541 = HEAP[HEAP[HEAP[$t] + 4] + 24];
      var $542 = HEAP[$t];
      FUNCTION_TABLE[$541]($542);
      __label__ = 127;
      break;
     case 127:
      var $543 = HEAP[$res];
      HEAP[$0] = $543;
      __label__ = 128;
      break;
     case 128:
      var $544 = HEAP[$0];
      HEAP[$retval] = $544;
      __label__ = 129;
      break;
     case 129:
      var $retval127 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval127;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dump($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 18;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $bytes = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 36] > 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      HEAP[$bytes] = -128;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 36] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 36] > 255) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str48, __str15, 2788, ___PRETTY_FUNCTION___11640);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      var $17 = HEAP[HEAP[$self_addr] + 36] & 255;
      
      HEAP[$bytes + 1] = $17;
      
      
      var $21 = HEAP[HEAP[$self_addr] + 48];
      var $22 = HEAP[$self_addr];
      var $bytes4 = $bytes;
      var $23 = FUNCTION_TABLE[$21]($22, $bytes4, 2);
      
      if ($23 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 6:
      var $25 = HEAP[$self_addr];
      var $26 = HEAP[$args_addr];
      var $27 = _save($25, $26, 0);
      
      if ($27 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 8:
      
      
      var $31 = HEAP[HEAP[$self_addr] + 48];
      var $32 = HEAP[$self_addr];
      var $33 = FUNCTION_TABLE[$31]($32, _stop_11638, 1);
      
      if ($33 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 10:
      
      
      var $37 = HEAP[HEAP[$self_addr] + 48];
      var $38 = HEAP[$self_addr];
      var $39 = FUNCTION_TABLE[$37]($38, 0, 0);
      
      if ($39 < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
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
      var $retval14 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Pickle_clear_memo($self, $args) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 20];
      _PyDict_Clear($7);
      __label__ = 2;
      break;
     case 2:
      
      var $9 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $9;
      HEAP[$0] = __Py_NoneStruct;
      var $10 = HEAP[$0];
      HEAP[$retval] = $10;
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
  function _Pickle_getvalue($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 76;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 76);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_222 = __stackBase__ + 12;
      var $iftmp_216 = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $l = __stackBase__ + 24;
      var $i = __stackBase__ + 28;
      var $rsize = __stackBase__ + 32;
      var $ssize = __stackBase__ + 36;
      var $clear = __stackBase__ + 40;
      var $lm = __stackBase__ + 44;
      var $ik = __stackBase__ + 48;
      var $k = __stackBase__ + 52;
      var $r = __stackBase__ + 56;
      var $s = __stackBase__ + 60;
      var $p = __stackBase__ + 64;
      var $have_get = __stackBase__ + 68;
      var $data = __stackBase__ + 72;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$clear] = 1;
      
      
      if (HEAP[$args_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[$args_addr];
      var $4 = _PyArg_ParseTuple($3, __str49, allocate([ $clear, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 59;
      break;
     case 3:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 16] + 4] != _PdataType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $12 = HEAP[_PicklingError];
      _PyErr_SetString($12, __str50);
      HEAP[$0] = 0;
      __label__ = 59;
      break;
     case 5:
      var $13 = HEAP[$self_addr];
      var $14 = _write_other($13, 0, 0);
      
      if ($14 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 59;
      break;
     case 7:
      
      
      
      var $19 = HEAP[HEAP[$self_addr] + 16];
      HEAP[$data] = $19;
      
      
      var $22 = HEAP[HEAP[$data] + 8];
      HEAP[$l] = $22;
      
      
      var $25 = HEAP[HEAP[$self_addr] + 20];
      var $26 = _PyDict_Size($25);
      HEAP[$lm] = $26;
      
      
      if (HEAP[$lm] < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 59;
      break;
     case 9:
      
      var $30 = HEAP[$lm] + 1;
      HEAP[$lm] = $30;
      var $31 = HEAP[$lm];
      var $32 = _malloc($31);
      HEAP[$have_get] = $32;
      
      
      if (HEAP[$have_get] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $35 = _PyErr_NoMemory();
      HEAP[$0] = $35;
      __label__ = 59;
      break;
     case 11:
      var $36 = HEAP[$lm];
      var $37 = HEAP[$have_get];
      _llvm_memset_p0i8_i32($37, 0, $36, 1, 0);
      HEAP[$rsize] = 0;
      var $38 = HEAP[$l];
      HEAP[$i] = $38;
      __label__ = 35;
      break;
     case 12:
      
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$data] + 16] + 4 * HEAP[$i]];
      HEAP[$k] = $44;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$k] + 4] + 84] & 134217728) != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      var $57 = HEAP[HEAP[$k] + 8] + HEAP[$rsize];
      HEAP[$rsize] = $57;
      __label__ = 35;
      break;
     case 14:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$k] + 4] + 84] & 8388608) != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 15:
      
      
      
      var $68 = HEAP[HEAP[$k] + 8];
      HEAP[$ik] = $68;
      
      
      
      if (HEAP[$ik] >= HEAP[$lm]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      if (HEAP[$ik] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $74 = HEAP[_PicklingError];
      _PyErr_SetString($74, __str51);
      __label__ = 58;
      break;
     case 18:
      
      
      
      
      
      if (HEAP[HEAP[$have_get] + HEAP[$ik]] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 19:
      
      
      if (HEAP[$ik] <= 255) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      HEAP[$iftmp_216] = 2;
      __label__ = 22;
      break;
     case 21:
      HEAP[$iftmp_216] = 5;
      __label__ = 22;
      break;
     case 22:
      
      
      var $84 = HEAP[$iftmp_216] + HEAP[$rsize];
      HEAP[$rsize] = $84;
      __label__ = 23;
      break;
     case 23:
      __label__ = 35;
      break;
     case 24:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$k] + 4] + 84] & 67108864) == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      if (HEAP[HEAP[$k] + 8] != 2) {
        __label__ = 27;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      var $101 = HEAP[HEAP[$k] + 12];
      HEAP[$k] = $101;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$k] + 4] + 84] & 8388608) == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $109 = HEAP[_PicklingError];
      _PyErr_SetString($109, __str52);
      __label__ = 58;
      break;
     case 28:
      
      
      
      var $113 = HEAP[HEAP[$k] + 8];
      HEAP[$ik] = $113;
      
      
      
      if (HEAP[$ik] >= HEAP[$lm]) {
        __label__ = 30;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      if (HEAP[$ik] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      var $119 = HEAP[_PicklingError];
      _PyErr_SetString($119, __str51);
      HEAP[$0] = 0;
      __label__ = 59;
      break;
     case 31:
      
      
      var $122 = HEAP[$have_get] + HEAP[$ik];
      HEAP[$122] = 1;
      
      
      if (HEAP[$ik] <= 255) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      HEAP[$iftmp_222] = 2;
      __label__ = 34;
      break;
     case 33:
      HEAP[$iftmp_222] = 5;
      __label__ = 34;
      break;
     case 34:
      
      
      var $127 = HEAP[$iftmp_222] + HEAP[$rsize];
      HEAP[$rsize] = $127;
      __label__ = 35;
      break;
     case 35:
      
      var $129 = HEAP[$i] - 1;
      HEAP[$i] = $129;
      
      
      if (HEAP[$i] >= 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      var $132 = HEAP[$rsize];
      var $133 = _PyString_FromStringAndSize(0, $132);
      HEAP[$r] = $133;
      
      
      if (HEAP[$r] == 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      
      var $139 = HEAP[$r] + 20;
      HEAP[$s] = $139;
      HEAP[$i] = 0;
      __label__ = 54;
      break;
     case 38:
      
      
      
      
      
      var $145 = HEAP[HEAP[HEAP[$data] + 16] + 4 * HEAP[$i]];
      HEAP[$k] = $145;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$k] + 4] + 84] & 134217728) != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 39:
      
      
      
      var $156 = HEAP[HEAP[$k] + 8];
      HEAP[$ssize] = $156;
      
      
      if (HEAP[$ssize] != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 40:
      
      
      
      var $162 = HEAP[$k] + 20;
      HEAP[$p] = $162;
      __label__ = 42;
      break;
     case 41:
      
      var $164 = HEAP[HEAP[$p]];
      var $165 = HEAP[$s];
      HEAP[$165] = $164;
      
      var $167 = HEAP[$s] + 1;
      HEAP[$s] = $167;
      
      var $169 = HEAP[$p] + 1;
      HEAP[$p] = $169;
      __label__ = 42;
      break;
     case 42:
      
      var $171 = HEAP[$ssize] - 1;
      HEAP[$ssize] = $171;
      
      
      if (HEAP[$ssize] >= 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      __label__ = 53;
      break;
     case 44:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$k] + 4] + 84] & 67108864) != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 45:
      
      
      
      
      
      
      
      var $188 = HEAP[HEAP[HEAP[$k] + 12] + 8];
      HEAP[$ik] = $188;
      
      
      if (HEAP[$ik] <= 255) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      var $191 = HEAP[$s];
      HEAP[$191] = 104;
      
      var $193 = HEAP[$s] + 1;
      HEAP[$s] = $193;
      
      var $195 = HEAP[$ik] & 255;
      var $196 = HEAP[$s];
      HEAP[$196] = $195;
      
      var $198 = HEAP[$s] + 1;
      HEAP[$s] = $198;
      __label__ = 48;
      break;
     case 47:
      var $199 = HEAP[$s];
      HEAP[$199] = 106;
      
      var $201 = HEAP[$s] + 1;
      HEAP[$s] = $201;
      
      var $203 = HEAP[$ik] & 255;
      var $204 = HEAP[$s];
      HEAP[$204] = $203;
      
      var $206 = HEAP[$s] + 1;
      HEAP[$s] = $206;
      
      
      var $209 = HEAP[$ik] >> 8 & 255;
      var $210 = HEAP[$s];
      HEAP[$210] = $209;
      
      var $212 = HEAP[$s] + 1;
      HEAP[$s] = $212;
      
      
      var $215 = HEAP[$ik] >> 16 & 255;
      var $216 = HEAP[$s];
      HEAP[$216] = $215;
      
      var $218 = HEAP[$s] + 1;
      HEAP[$s] = $218;
      
      
      var $221 = HEAP[$ik] >> 24 & 255;
      var $222 = HEAP[$s];
      HEAP[$222] = $221;
      
      var $224 = HEAP[$s] + 1;
      HEAP[$s] = $224;
      __label__ = 48;
      break;
     case 48:
      __label__ = 53;
      break;
     case 49:
      
      
      
      var $228 = HEAP[HEAP[$k] + 8];
      HEAP[$ik] = $228;
      
      
      
      
      
      if (HEAP[HEAP[$have_get] + HEAP[$ik]] != 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 50:
      
      
      if (HEAP[$ik] <= 255) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      var $236 = HEAP[$s];
      HEAP[$236] = 113;
      
      var $238 = HEAP[$s] + 1;
      HEAP[$s] = $238;
      
      var $240 = HEAP[$ik] & 255;
      var $241 = HEAP[$s];
      HEAP[$241] = $240;
      
      var $243 = HEAP[$s] + 1;
      HEAP[$s] = $243;
      __label__ = 53;
      break;
     case 52:
      var $244 = HEAP[$s];
      HEAP[$244] = 114;
      
      var $246 = HEAP[$s] + 1;
      HEAP[$s] = $246;
      
      var $248 = HEAP[$ik] & 255;
      var $249 = HEAP[$s];
      HEAP[$249] = $248;
      
      var $251 = HEAP[$s] + 1;
      HEAP[$s] = $251;
      
      
      var $254 = HEAP[$ik] >> 8 & 255;
      var $255 = HEAP[$s];
      HEAP[$255] = $254;
      
      var $257 = HEAP[$s] + 1;
      HEAP[$s] = $257;
      
      
      var $260 = HEAP[$ik] >> 16 & 255;
      var $261 = HEAP[$s];
      HEAP[$261] = $260;
      
      var $263 = HEAP[$s] + 1;
      HEAP[$s] = $263;
      
      
      var $266 = HEAP[$ik] >> 24 & 255;
      var $267 = HEAP[$s];
      HEAP[$267] = $266;
      
      var $269 = HEAP[$s] + 1;
      HEAP[$s] = $269;
      __label__ = 53;
      break;
     case 53:
      
      var $271 = HEAP[$i] + 1;
      HEAP[$i] = $271;
      __label__ = 54;
      break;
     case 54:
      
      
      
      if (HEAP[$i] < HEAP[$l]) {
        __label__ = 38;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 55:
      
      
      if (HEAP[$clear] != 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      
      
      var $279 = HEAP[HEAP[$self_addr] + 20];
      _PyDict_Clear($279);
      var $280 = HEAP[$data];
      var $281 = _Pdata_clear($280, 0);
      __label__ = 57;
      break;
     case 57:
      var $282 = HEAP[$have_get];
      _free($282);
      var $283 = HEAP[$r];
      HEAP[$0] = $283;
      __label__ = 59;
      break;
     case 58:
      var $284 = HEAP[$have_get];
      _free($284);
      HEAP[$0] = 0;
      __label__ = 59;
      break;
     case 59:
      var $285 = HEAP[$0];
      HEAP[$retval] = $285;
      __label__ = 60;
      break;
     case 60:
      var $retval58 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval58;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Pickler_dump($self, $args) {
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
      var $ob = __stackBase__ + 16;
      var $get = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$get] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str53, allocate([ $ob, 0, 0, 0, $get, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$ob];
      var $5 = HEAP[$self_addr];
      var $6 = _dump($5, $4);
      
      if ($6 < 0) {
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
      
      
      if (HEAP[$get] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $10 = HEAP[$self_addr];
      var $11 = _Pickle_getvalue($10, 0);
      HEAP[$0] = $11;
      __label__ = 7;
      break;
     case 6:
      
      
      
      
      var $16 = HEAP[HEAP[$self_addr]] + 1;
      var $17 = HEAP[$self_addr];
      HEAP[$17] = $16;
      
      var $19 = HEAP[$self_addr];
      HEAP[$0] = $19;
      __label__ = 7;
      break;
     case 7:
      var $20 = HEAP[$0];
      HEAP[$retval] = $20;
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
  function _newPicklerobject($file, $proto) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $file_addr = __stackBase__;
      var $proto_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $self = __stackBase__ + 16;
      var $m = __stackBase__ + 20;
      
      HEAP[$file_addr] = $file;
      HEAP[$proto_addr] = $proto;
      
      
      if (HEAP[$proto_addr] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$proto_addr] = 2;
      __label__ = 2;
      break;
     case 2:
      
      
      if (HEAP[$proto_addr] > 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $5 = HEAP[_PyExc_ValueError];
      var $6 = HEAP[$proto_addr];
      var $7 = _PyErr_Format($5, __str60, allocate([ $6, 0, 0, 0, 2, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 35;
      break;
     case 4:
      var $8 = __PyObject_GC_New(_Picklertype);
      
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
      __label__ = 35;
      break;
     case 6:
      
      var $13 = HEAP[$self] + 36;
      var $14 = HEAP[$proto_addr];
      HEAP[$13] = $14;
      
      
      var $17 = HEAP[$proto_addr] > 0;
      
      var $19 = HEAP[$self] + 40;
      HEAP[$19] = $17;
      
      var $21 = HEAP[$self] + 8;
      HEAP[$21] = 0;
      
      var $23 = HEAP[$self] + 12;
      HEAP[$23] = 0;
      
      var $25 = HEAP[$self] + 20;
      HEAP[$25] = 0;
      
      var $27 = HEAP[$self] + 24;
      HEAP[$27] = 0;
      
      var $29 = HEAP[$self] + 28;
      HEAP[$29] = 0;
      
      var $31 = HEAP[$self] + 32;
      HEAP[$31] = 0;
      
      var $33 = HEAP[$self] + 52;
      HEAP[$33] = 0;
      
      var $35 = HEAP[$self] + 44;
      HEAP[$35] = 0;
      
      var $37 = HEAP[$self] + 64;
      HEAP[$37] = 0;
      
      var $39 = HEAP[$self] + 68;
      HEAP[$39] = 0;
      
      var $41 = HEAP[$self] + 56;
      HEAP[$41] = 0;
      
      var $43 = HEAP[$self] + 60;
      HEAP[$43] = 0;
      
      var $45 = HEAP[$self] + 16;
      HEAP[$45] = 0;
      
      
      if (HEAP[$file_addr] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      var $51 = HEAP[HEAP[$file_addr]] + 1;
      
      var $53 = HEAP[$file_addr];
      HEAP[$53] = $51;
      __label__ = 9;
      break;
     case 8:
      var $54 = _Pdata_New();
      HEAP[$file_addr] = $54;
      
      
      if (HEAP[$file_addr] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      var $58 = HEAP[$self] + 16;
      var $59 = HEAP[$file_addr];
      HEAP[$58] = $59;
      var $60 = _PyDict_New();
      
      var $62 = HEAP[$self] + 20;
      HEAP[$62] = $60;
      
      
      
      
      if (HEAP[HEAP[$self] + 20] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      if (HEAP[HEAP[$file_addr] + 4] == _PyFile_Type) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $73 = HEAP[HEAP[$file_addr] + 4];
      var $74 = _PyType_IsSubtype($73, _PyFile_Type);
      
      if ($74 != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      var $76 = HEAP[$file_addr];
      var $77 = _PyFile_AsFile($76);
      
      var $79 = HEAP[$self] + 8;
      HEAP[$79] = $77;
      
      
      
      
      if (HEAP[HEAP[$self] + 8] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $84 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($84, __str61);
      __label__ = 32;
      break;
     case 14:
      
      var $86 = HEAP[$self] + 48;
      HEAP[$86] = FUNCTION_TABLE_OFFSET + 4;
      __label__ = 24;
      break;
     case 15:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$file_addr] + 4] == HEAP[HEAP[_PycStringIO] + 28]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      var $95 = HEAP[$self] + 48;
      HEAP[$95] = FUNCTION_TABLE_OFFSET + 6;
      __label__ = 24;
      break;
     case 17:
      
      
      if (HEAP[$file_addr] == __Py_NoneStruct) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      var $99 = HEAP[$self] + 48;
      HEAP[$99] = FUNCTION_TABLE_OFFSET + 8;
      __label__ = 24;
      break;
     case 19:
      
      var $101 = HEAP[$self] + 48;
      HEAP[$101] = FUNCTION_TABLE_OFFSET + 10;
      
      
      
      
      if (HEAP[HEAP[$file_addr] + 4] != _PdataType) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      var $106 = HEAP[_write_str];
      var $107 = HEAP[$file_addr];
      var $108 = _PyObject_GetAttr($107, $106);
      
      var $110 = HEAP[$self] + 12;
      HEAP[$110] = $108;
      
      
      
      
      if (HEAP[HEAP[$self] + 12] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      _PyErr_Clear();
      var $115 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($115, __str62);
      __label__ = 32;
      break;
     case 22:
      var $116 = _PyMem_Malloc(256);
      
      var $118 = HEAP[$self] + 52;
      HEAP[$118] = $116;
      
      
      
      
      if (HEAP[HEAP[$self] + 52] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      var $123 = _PyErr_NoMemory();
      __label__ = 32;
      break;
     case 24:
      var $124 = _PyEval_GetRestricted();
      
      if ($124 != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 25:
      var $126 = _PyImport_ImportModule(__str63);
      HEAP[$m] = $126;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      var $129 = HEAP[_dispatch_table_str];
      var $130 = HEAP[$m];
      var $131 = _PyObject_GetAttr($130, $129);
      
      var $133 = HEAP[$self] + 60;
      HEAP[$133] = $131;
      
      
      
      var $137 = HEAP[HEAP[$m]] - 1;
      
      var $139 = HEAP[$m];
      HEAP[$139] = $137;
      
      
      
      
      if (HEAP[HEAP[$m]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $148 = HEAP[HEAP[HEAP[$m] + 4] + 24];
      var $149 = HEAP[$m];
      FUNCTION_TABLE[$148]($149);
      __label__ = 28;
      break;
     case 28:
      
      
      
      
      if (HEAP[HEAP[$self] + 60] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      __label__ = 31;
      break;
     case 30:
      var $154 = HEAP[_dispatch_table];
      
      var $156 = HEAP[$self] + 60;
      HEAP[$156] = $154;
      
      
      
      var $160 = HEAP[HEAP[_dispatch_table]] + 1;
      var $161 = HEAP[_dispatch_table];
      HEAP[$161] = $160;
      __label__ = 31;
      break;
     case 31:
      
      var $163 = HEAP[$self];
      _PyObject_GC_Track($163);
      var $164 = HEAP[$self];
      HEAP[$0] = $164;
      __label__ = 35;
      break;
     case 32:
      
      var $166 = HEAP[$self];
      
      
      var $169 = HEAP[$166] - 1;
      var $170 = $166;
      HEAP[$170] = $169;
      
      
      
      if (HEAP[$166] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      
      var $179 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $181 = HEAP[$self];
      FUNCTION_TABLE[$179]($181);
      __label__ = 34;
      break;
     case 34:
      HEAP[$0] = 0;
      __label__ = 35;
      break;
     case 35:
      var $182 = HEAP[$0];
      HEAP[$retval] = $182;
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
  function _get_Pickler($self, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $file = __stackBase__ + 20;
      var $proto = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$file] = 0;
      HEAP[$proto] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str64, allocate([ $proto, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      _PyErr_Clear();
      HEAP[$proto] = 0;
      var $4 = HEAP[$args_addr];
      var $5 = HEAP[$kwds_addr];
      var $6 = _PyArg_ParseTupleAndKeywords($4, $5, __str65, _kwlist_11959, allocate([ $file, 0, 0, 0, $proto, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($6 == 0) {
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
      var $8 = HEAP[$proto];
      var $9 = HEAP[$file];
      var $10 = _newPicklerobject($9, $8);
      var $11 = $10;
      HEAP[$0] = $11;
      __label__ = 4;
      break;
     case 4:
      var $12 = HEAP[$0];
      HEAP[$retval] = $12;
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
  function _Pickler_dealloc($self) {
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
      
      var $1 = HEAP[$self_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$self_addr] + 12];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 12] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$self_addr] + 12];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$self_addr] + 20];
      
      
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
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 4] + 24];
      
      
      var $49 = HEAP[HEAP[$self_addr] + 20];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 68] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $56 = HEAP[HEAP[$self_addr] + 68];
      
      
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
      
      
      
      
      
      
      var $70 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 68] + 4] + 24];
      
      
      var $73 = HEAP[HEAP[$self_addr] + 68];
      FUNCTION_TABLE[$70]($73);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $80 = HEAP[HEAP[$self_addr] + 24];
      
      
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
      
      
      
      
      
      
      var $94 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 24] + 4] + 24];
      
      
      var $97 = HEAP[HEAP[$self_addr] + 24];
      FUNCTION_TABLE[$94]($97);
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      var $104 = HEAP[HEAP[$self_addr] + 16];
      
      
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
      
      
      
      
      
      
      var $118 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 16] + 4] + 24];
      
      
      var $121 = HEAP[HEAP[$self_addr] + 16];
      FUNCTION_TABLE[$118]($121);
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
      
      
      var $128 = HEAP[HEAP[$self_addr] + 28];
      
      
      var $131 = HEAP[$128] - 1;
      var $132 = $128;
      HEAP[$132] = $131;
      
      
      
      if (HEAP[$128] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      
      var $142 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 28] + 4] + 24];
      
      
      var $145 = HEAP[HEAP[$self_addr] + 28];
      FUNCTION_TABLE[$142]($145);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $152 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $155 = HEAP[$152] - 1;
      var $156 = $152;
      HEAP[$156] = $155;
      
      
      
      if (HEAP[$152] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      
      
      var $166 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 4] + 24];
      
      
      var $169 = HEAP[HEAP[$self_addr] + 32];
      FUNCTION_TABLE[$166]($169);
      __label__ = 21;
      break;
     case 21:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 60] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      var $176 = HEAP[HEAP[$self_addr] + 60];
      
      
      var $179 = HEAP[$176] - 1;
      var $180 = $176;
      HEAP[$180] = $179;
      
      
      
      if (HEAP[$176] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      
      
      var $190 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 60] + 4] + 24];
      
      
      var $193 = HEAP[HEAP[$self_addr] + 60];
      FUNCTION_TABLE[$190]($193);
      __label__ = 24;
      break;
     case 24:
      
      
      var $196 = HEAP[HEAP[$self_addr] + 52];
      _PyMem_Free($196);
      
      
      
      
      
      var $202 = HEAP[HEAP[HEAP[$self_addr] + 4] + 160];
      
      var $204 = HEAP[$self_addr];
      FUNCTION_TABLE[$202]($204);
      __label__ = 25;
      break;
     case 25:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Pickler_traverse($self, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 52);
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
      var $vret4 = __stackBase__ + 24;
      var $vret8 = __stackBase__ + 28;
      var $vret12 = __stackBase__ + 32;
      var $vret16 = __stackBase__ + 36;
      var $vret20 = __stackBase__ + 40;
      var $vret24 = __stackBase__ + 44;
      var $vret28 = __stackBase__ + 48;
      
      HEAP[$self_addr] = $self;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 12];
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
      __label__ = 25;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$self_addr] + 20];
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
      __label__ = 25;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 68] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $33 = HEAP[HEAP[$self_addr] + 68];
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
      __label__ = 25;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $46 = HEAP[HEAP[$self_addr] + 24];
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
      __label__ = 25;
      break;
     case 12:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      var $59 = HEAP[HEAP[$self_addr] + 16];
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
      __label__ = 25;
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
      
      
      var $72 = HEAP[HEAP[$self_addr] + 28];
      var $73 = HEAP[$visit_addr];
      var $74 = HEAP[$arg_addr];
      var $75 = FUNCTION_TABLE[$73]($72, $74);
      HEAP[$vret20] = $75;
      
      
      if (HEAP[$vret20] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $78 = HEAP[$vret20];
      HEAP[$0] = $78;
      __label__ = 25;
      break;
     case 18:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $85 = HEAP[HEAP[$self_addr] + 32];
      var $86 = HEAP[$visit_addr];
      var $87 = HEAP[$arg_addr];
      var $88 = FUNCTION_TABLE[$86]($85, $87);
      HEAP[$vret24] = $88;
      
      
      if (HEAP[$vret24] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $91 = HEAP[$vret24];
      HEAP[$0] = $91;
      __label__ = 25;
      break;
     case 21:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 60] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      var $98 = HEAP[HEAP[$self_addr] + 60];
      var $99 = HEAP[$visit_addr];
      var $100 = HEAP[$arg_addr];
      var $101 = FUNCTION_TABLE[$99]($98, $100);
      HEAP[$vret28] = $101;
      
      
      if (HEAP[$vret28] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      var $104 = HEAP[$vret28];
      HEAP[$0] = $104;
      __label__ = 25;
      break;
     case 24:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 25:
      var $105 = HEAP[$0];
      HEAP[$retval] = $105;
      __label__ = 26;
      break;
     case 26:
      var $retval32 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval32;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Pickler_clear($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $_py_tmp = __stackBase__ + 12;
      var $_py_tmp4 = __stackBase__ + 16;
      var $_py_tmp8 = __stackBase__ + 20;
      var $_py_tmp12 = __stackBase__ + 24;
      var $_py_tmp16 = __stackBase__ + 28;
      var $_py_tmp20 = __stackBase__ + 32;
      var $_py_tmp24 = __stackBase__ + 36;
      var $_py_tmp28 = __stackBase__ + 40;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$_py_tmp] = $7;
      
      var $9 = HEAP[$self_addr] + 12;
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$self_addr] + 20];
      HEAP[$_py_tmp4] = $32;
      
      var $34 = HEAP[$self_addr] + 20;
      HEAP[$34] = 0;
      
      
      
      var $38 = HEAP[HEAP[$_py_tmp4]] - 1;
      
      var $40 = HEAP[$_py_tmp4];
      HEAP[$40] = $38;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp4]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[$_py_tmp4] + 4] + 24];
      var $50 = HEAP[$_py_tmp4];
      FUNCTION_TABLE[$49]($50);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 68] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $57 = HEAP[HEAP[$self_addr] + 68];
      HEAP[$_py_tmp8] = $57;
      
      var $59 = HEAP[$self_addr] + 68;
      HEAP[$59] = 0;
      
      
      
      var $63 = HEAP[HEAP[$_py_tmp8]] - 1;
      
      var $65 = HEAP[$_py_tmp8];
      HEAP[$65] = $63;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp8]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $74 = HEAP[HEAP[HEAP[$_py_tmp8] + 4] + 24];
      var $75 = HEAP[$_py_tmp8];
      FUNCTION_TABLE[$74]($75);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $82 = HEAP[HEAP[$self_addr] + 24];
      HEAP[$_py_tmp12] = $82;
      
      var $84 = HEAP[$self_addr] + 24;
      HEAP[$84] = 0;
      
      
      
      var $88 = HEAP[HEAP[$_py_tmp12]] - 1;
      
      var $90 = HEAP[$_py_tmp12];
      HEAP[$90] = $88;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp12]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $99 = HEAP[HEAP[HEAP[$_py_tmp12] + 4] + 24];
      var $100 = HEAP[$_py_tmp12];
      FUNCTION_TABLE[$99]($100);
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      var $107 = HEAP[HEAP[$self_addr] + 16];
      HEAP[$_py_tmp16] = $107;
      
      var $109 = HEAP[$self_addr] + 16;
      HEAP[$109] = 0;
      
      
      
      var $113 = HEAP[HEAP[$_py_tmp16]] - 1;
      
      var $115 = HEAP[$_py_tmp16];
      HEAP[$115] = $113;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp16]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $124 = HEAP[HEAP[HEAP[$_py_tmp16] + 4] + 24];
      var $125 = HEAP[$_py_tmp16];
      FUNCTION_TABLE[$124]($125);
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
      HEAP[$_py_tmp20] = $132;
      
      var $134 = HEAP[$self_addr] + 28;
      HEAP[$134] = 0;
      
      
      
      var $138 = HEAP[HEAP[$_py_tmp20]] - 1;
      
      var $140 = HEAP[$_py_tmp20];
      HEAP[$140] = $138;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp20]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $149 = HEAP[HEAP[HEAP[$_py_tmp20] + 4] + 24];
      var $150 = HEAP[$_py_tmp20];
      FUNCTION_TABLE[$149]($150);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $157 = HEAP[HEAP[$self_addr] + 32];
      HEAP[$_py_tmp24] = $157;
      
      var $159 = HEAP[$self_addr] + 32;
      HEAP[$159] = 0;
      
      
      
      var $163 = HEAP[HEAP[$_py_tmp24]] - 1;
      
      var $165 = HEAP[$_py_tmp24];
      HEAP[$165] = $163;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp24]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $174 = HEAP[HEAP[HEAP[$_py_tmp24] + 4] + 24];
      var $175 = HEAP[$_py_tmp24];
      FUNCTION_TABLE[$174]($175);
      __label__ = 21;
      break;
     case 21:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 60] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      var $182 = HEAP[HEAP[$self_addr] + 60];
      HEAP[$_py_tmp28] = $182;
      
      var $184 = HEAP[$self_addr] + 60;
      HEAP[$184] = 0;
      
      
      
      var $188 = HEAP[HEAP[$_py_tmp28]] - 1;
      
      var $190 = HEAP[$_py_tmp28];
      HEAP[$190] = $188;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp28]] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $199 = HEAP[HEAP[HEAP[$_py_tmp28] + 4] + 24];
      var $200 = HEAP[$_py_tmp28];
      FUNCTION_TABLE[$199]($200);
      __label__ = 24;
      break;
     case 24:
      HEAP[$0] = 0;
      var $201 = HEAP[$0];
      HEAP[$retval] = $201;
      __label__ = 25;
      break;
     case 25:
      var $retval31 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval31;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Pickler_get_pers_func($p) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$p_addr] = $p;
      
      
      
      
      if (HEAP[HEAP[$p_addr] + 28] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_AttributeError];
      _PyErr_SetString($5, __str68);
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      
      var $11 = HEAP[HEAP[HEAP[$p_addr] + 28]] + 1;
      var $12 = HEAP[HEAP[$p_addr] + 28];
      HEAP[$12] = $11;
      __label__ = 3;
      break;
     case 3:
      
      
      var $15 = HEAP[HEAP[$p_addr] + 28];
      HEAP[$0] = $15;
      var $16 = HEAP[$0];
      HEAP[$retval] = $16;
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
  function _Pickler_set_pers_func($p, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($3, __str69);
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$p_addr] + 28] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $10 = HEAP[HEAP[$p_addr] + 28];
      
      
      var $13 = HEAP[$10] - 1;
      var $14 = $10;
      HEAP[$14] = $13;
      
      
      
      if (HEAP[$10] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[HEAP[$p_addr] + 28] + 4] + 24];
      
      
      var $27 = HEAP[HEAP[$p_addr] + 28];
      FUNCTION_TABLE[$24]($27);
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $31 = HEAP[HEAP[$v_addr]] + 1;
      
      var $33 = HEAP[$v_addr];
      HEAP[$33] = $31;
      
      var $35 = HEAP[$p_addr] + 28;
      var $36 = HEAP[$v_addr];
      HEAP[$35] = $36;
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 6:
      var $37 = HEAP[$0];
      HEAP[$retval] = $37;
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
  function _Pickler_set_inst_pers_func($p, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($3, __str69);
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$p_addr] + 32] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $10 = HEAP[HEAP[$p_addr] + 32];
      
      
      var $13 = HEAP[$10] - 1;
      var $14 = $10;
      HEAP[$14] = $13;
      
      
      
      if (HEAP[$10] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[HEAP[$p_addr] + 32] + 4] + 24];
      
      
      var $27 = HEAP[HEAP[$p_addr] + 32];
      FUNCTION_TABLE[$24]($27);
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $31 = HEAP[HEAP[$v_addr]] + 1;
      
      var $33 = HEAP[$v_addr];
      HEAP[$33] = $31;
      
      var $35 = HEAP[$p_addr] + 32;
      var $36 = HEAP[$v_addr];
      HEAP[$35] = $36;
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 6:
      var $37 = HEAP[$0];
      HEAP[$retval] = $37;
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
  function _Pickler_get_memo($p) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$p_addr] = $p;
      
      
      
      
      if (HEAP[HEAP[$p_addr] + 20] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_AttributeError];
      _PyErr_SetString($5, __str70);
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      
      var $11 = HEAP[HEAP[HEAP[$p_addr] + 20]] + 1;
      var $12 = HEAP[HEAP[$p_addr] + 20];
      HEAP[$12] = $11;
      __label__ = 3;
      break;
     case 3:
      
      
      var $15 = HEAP[HEAP[$p_addr] + 20];
      HEAP[$0] = $15;
      var $16 = HEAP[$0];
      HEAP[$retval] = $16;
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
  function _Pickler_set_memo($p, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $v_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$p_addr] = $p;
      HEAP[$v_addr] = $v;
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($3, __str69);
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v_addr] + 4] + 84] & 536870912) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($11, __str71);
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 4:
      
      
      
      
      if (HEAP[HEAP[$p_addr] + 20] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      var $18 = HEAP[HEAP[$p_addr] + 20];
      
      
      var $21 = HEAP[$18] - 1;
      var $22 = $18;
      HEAP[$22] = $21;
      
      
      
      if (HEAP[$18] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      
      var $32 = HEAP[HEAP[HEAP[HEAP[$p_addr] + 20] + 4] + 24];
      
      
      var $35 = HEAP[HEAP[$p_addr] + 20];
      FUNCTION_TABLE[$32]($35);
      __label__ = 7;
      break;
     case 7:
      
      
      
      var $39 = HEAP[HEAP[$v_addr]] + 1;
      
      var $41 = HEAP[$v_addr];
      HEAP[$41] = $39;
      
      var $43 = HEAP[$p_addr] + 20;
      var $44 = HEAP[$v_addr];
      HEAP[$43] = $44;
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 8:
      var $45 = HEAP[$0];
      HEAP[$retval] = $45;
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
  function _Pickler_get_error($p) {
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
      
      HEAP[__stackBase__] = $p;
      
      
      
      var $4 = HEAP[HEAP[_PicklingError]] + 1;
      var $5 = HEAP[_PicklingError];
      HEAP[$5] = $4;
      var $6 = HEAP[_PicklingError];
      HEAP[$0] = $6;
      var $7 = HEAP[$0];
      HEAP[$retval] = $7;
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
  function _find_class($py_module_name, $py_global_name, $fc) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $py_module_name_addr = __stackBase__;
      var $py_global_name_addr = __stackBase__ + 4;
      var $fc_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $global = __stackBase__ + 20;
      var $module = __stackBase__ + 24;
      
      HEAP[$py_module_name_addr] = $py_module_name;
      HEAP[$py_global_name_addr] = $py_global_name;
      HEAP[$fc_addr] = $fc;
      HEAP[$global] = 0;
      
      
      if (HEAP[$fc_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      if (HEAP[$fc_addr] == __Py_NoneStruct) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $5 = HEAP[_UnpicklingError];
      _PyErr_SetString($5, __str77);
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 3:
      var $6 = HEAP[$fc_addr];
      var $7 = HEAP[$py_module_name_addr];
      var $8 = HEAP[$py_global_name_addr];
      var $9 = _PyObject_CallFunctionObjArgs($6, allocate([ $7, 0, 0, 0, $8, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $9;
      __label__ = 14;
      break;
     case 4:
      var $10 = _PySys_GetObject(__str7);
      HEAP[$module] = $10;
      
      
      if (HEAP[$module] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 6:
      var $13 = HEAP[$module];
      var $14 = HEAP[$py_module_name_addr];
      var $15 = _PyDict_GetItem($13, $14);
      HEAP[$module] = $15;
      
      
      if (HEAP[$module] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      var $18 = HEAP[$py_module_name_addr];
      var $19 = _PyImport_Import($18);
      HEAP[$module] = $19;
      
      
      if (HEAP[$module] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 9:
      var $22 = HEAP[$module];
      var $23 = HEAP[$py_global_name_addr];
      var $24 = _PyObject_GetAttr($22, $23);
      HEAP[$global] = $24;
      
      
      
      var $28 = HEAP[HEAP[$module]] - 1;
      
      var $30 = HEAP[$module];
      HEAP[$30] = $28;
      
      
      
      
      if (HEAP[HEAP[$module]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $39 = HEAP[HEAP[HEAP[$module] + 4] + 24];
      var $40 = HEAP[$module];
      FUNCTION_TABLE[$39]($40);
      __label__ = 11;
      break;
     case 11:
      __label__ = 13;
      break;
     case 12:
      var $41 = HEAP[$module];
      var $42 = HEAP[$py_global_name_addr];
      var $43 = _PyObject_GetAttr($41, $42);
      HEAP[$global] = $43;
      __label__ = 13;
      break;
     case 13:
      var $44 = HEAP[$global];
      HEAP[$0] = $44;
      __label__ = 14;
      break;
     case 14:
      var $45 = HEAP[$0];
      HEAP[$retval] = $45;
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
  function _marker($self) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 52] <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_UnpicklingError];
      _PyErr_SetString($5, __str78);
      HEAP[$0] = -1;
      __label__ = 3;
      break;
     case 2:
      
      
      var $8 = HEAP[HEAP[$self_addr] + 48];
      
      
      
      var $12 = HEAP[HEAP[$self_addr] + 52] - 1;
      
      var $14 = HEAP[$self_addr] + 52;
      HEAP[$14] = $12;
      
      
      
      
      var $19 = HEAP[$8 + 4 * HEAP[HEAP[$self_addr] + 52]];
      HEAP[$0] = $19;
      __label__ = 3;
      break;
     case 3:
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
  function _load_none($self) {
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
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $14 = HEAP[HEAP[$self_addr] + 32];
      var $15 = _Pdata_grow($14);
      
      if ($15 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = -1;
      __label__ = 4;
      break;
     case 3:
      
      var $18 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $18;
      
      
      
      
      
      
      
      var $26 = HEAP[HEAP[$self_addr] + 32];
      
      var $28 = HEAP[$26 + 8];
      var $29 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $28;
      HEAP[$29] = __Py_NoneStruct;
      var $30 = $28 + 1;
      var $31 = $26 + 8;
      HEAP[$31] = $30;
      HEAP[$0] = 0;
      __label__ = 4;
      break;
     case 4:
      var $32 = HEAP[$0];
      HEAP[$retval] = $32;
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
  function _bad_readline() {
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
      
      var $1 = HEAP[_UnpicklingError];
      _PyErr_SetString($1, __str79);
      HEAP[$0] = -1;
      var $2 = HEAP[$0];
      HEAP[$retval] = $2;
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
  function _load_int($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $py_int = __stackBase__ + 12;
      var $endptr = __stackBase__ + 16;
      var $s = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      var $l = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$py_int] = 0;
      HEAP[$res] = -1;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 64];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $s);
      HEAP[$len] = $5;
      
      
      if (HEAP[$len] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 25;
      break;
     case 2:
      
      
      if (HEAP[$len] <= 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _bad_readline();
      HEAP[$0] = $10;
      __label__ = 25;
      break;
     case 4:
      var $11 = HEAP[$s];
      var $12 = HEAP[$len];
      var $13 = _pystrndup($11, $12);
      HEAP[$s] = $13;
      
      
      if (HEAP[$s] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 25;
      break;
     case 6:
      var $16 = ___errno_location();
      HEAP[$16] = 0;
      var $17 = HEAP[$s];
      var $18 = _strtol($17, $endptr, 0);
      HEAP[$l] = $18;
      var $19 = ___errno_location();
      
      
      if (HEAP[$19] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      if (HEAP[HEAP[$endptr]] != 10) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[HEAP[$endptr] + 1] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      var $29 = ___errno_location();
      HEAP[$29] = 0;
      var $30 = HEAP[$s];
      var $31 = _PyLong_FromString($30, 0, 0);
      HEAP[$py_int] = $31;
      
      
      if (HEAP[$py_int] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $34 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($34, __str80);
      __label__ = 24;
      break;
     case 11:
      __label__ = 18;
      break;
     case 12:
      
      
      if (HEAP[$len] != 3) {
        __label__ = 17;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      if (HEAP[$l] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if (HEAP[$l] == 1) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      var $41 = HEAP[$l];
      var $42 = _PyBool_FromLong($41);
      HEAP[$py_int] = $42;
      
      
      if (HEAP[$py_int] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      __label__ = 18;
      break;
     case 17:
      var $45 = HEAP[$l];
      var $46 = _PyInt_FromLong($45);
      HEAP[$py_int] = $46;
      
      
      if (HEAP[$py_int] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      var $49 = HEAP[$s];
      _free($49);
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 19:
      
      
      var $63 = HEAP[HEAP[$self_addr] + 32];
      var $64 = _Pdata_grow($63);
      
      if ($64 < 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      
      
      
      var $69 = HEAP[HEAP[$py_int]] - 1;
      
      var $71 = HEAP[$py_int];
      HEAP[$71] = $69;
      
      
      
      
      if (HEAP[HEAP[$py_int]] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $80 = HEAP[HEAP[HEAP[$py_int] + 4] + 24];
      var $81 = HEAP[$py_int];
      FUNCTION_TABLE[$80]($81);
      __label__ = 22;
      break;
     case 22:
      HEAP[$0] = -1;
      __label__ = 25;
      break;
     case 23:
      
      
      
      
      
      
      
      var $89 = HEAP[HEAP[$self_addr] + 32];
      
      var $91 = HEAP[$89 + 8];
      var $92 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $91;
      var $93 = HEAP[$py_int];
      HEAP[$92] = $93;
      var $94 = $91 + 1;
      var $95 = $89 + 8;
      HEAP[$95] = $94;
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 24:
      var $96 = HEAP[$s];
      _free($96);
      var $97 = HEAP[$res];
      HEAP[$0] = $97;
      __label__ = 25;
      break;
     case 25:
      var $98 = HEAP[$0];
      HEAP[$retval] = $98;
      __label__ = 26;
      break;
     case 26:
      var $retval24 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_bool($self, $boolean) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $boolean_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$boolean_addr] = $boolean;
      
      
      if (HEAP[$boolean_addr] != __Py_TrueStruct) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      if (HEAP[$boolean_addr] != __Py_ZeroStruct) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str81, __str15, 3391, ___PRETTY_FUNCTION___12520);
      throw "Reached an unreachable!";
     case 3:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $18 = HEAP[HEAP[$self_addr] + 32];
      var $19 = _Pdata_grow($18);
      
      if ($19 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 7;
      break;
     case 6:
      
      
      
      var $24 = HEAP[HEAP[$boolean_addr]] + 1;
      
      var $26 = HEAP[$boolean_addr];
      HEAP[$26] = $24;
      
      
      
      
      
      
      
      var $34 = HEAP[HEAP[$self_addr] + 32];
      
      var $36 = HEAP[$34 + 8];
      var $37 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $36;
      var $38 = HEAP[$boolean_addr];
      HEAP[$37] = $38;
      var $39 = $36 + 1;
      var $40 = $34 + 8;
      HEAP[$40] = $39;
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
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
  function _calc_binint($s, $x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 25;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 25);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $x_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $c = __stackBase__ + 16;
      var $i = __stackBase__ + 17;
      var $l = __stackBase__ + 21;
      
      HEAP[$s_addr] = $s;
      HEAP[$x_addr] = $x;
      HEAP[$i] = 0;
      HEAP[$l] = 0;
      __label__ = 2;
      break;
     case 1:
      
      
      
      var $4 = HEAP[HEAP[$s_addr] + HEAP[$i]];
      HEAP[$c] = $4;
      
      
      
      
      
      
      var $11 = HEAP[$c] << HEAP[$i] * 8 | HEAP[$l];
      HEAP[$l] = $11;
      
      var $13 = HEAP[$i] + 1;
      HEAP[$i] = $13;
      __label__ = 2;
      break;
     case 2:
      
      
      
      if (HEAP[$i] < HEAP[$x_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $17 = HEAP[$l];
      HEAP[$0] = $17;
      var $18 = HEAP[$0];
      HEAP[$retval] = $18;
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
  function _load_binintx($self, $s, $x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $s_addr = __stackBase__ + 4;
      var $x_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $py_int = __stackBase__ + 20;
      var $l = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$s_addr] = $s;
      HEAP[$x_addr] = $x;
      HEAP[$py_int] = 0;
      var $1 = HEAP[$s_addr];
      var $2 = HEAP[$x_addr];
      var $3 = _calc_binint($1, $2);
      HEAP[$l] = $3;
      var $4 = HEAP[$l];
      var $5 = _PyInt_FromLong($4);
      HEAP[$py_int] = $5;
      
      
      if (HEAP[$py_int] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 2:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      var $21 = HEAP[HEAP[$self_addr] + 32];
      var $22 = _Pdata_grow($21);
      
      if ($22 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $27 = HEAP[HEAP[$py_int]] - 1;
      
      var $29 = HEAP[$py_int];
      HEAP[$29] = $27;
      
      
      
      
      if (HEAP[HEAP[$py_int]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[$py_int] + 4] + 24];
      var $39 = HEAP[$py_int];
      FUNCTION_TABLE[$38]($39);
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      
      
      
      var $47 = HEAP[HEAP[$self_addr] + 32];
      
      var $49 = HEAP[$47 + 8];
      var $50 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $49;
      var $51 = HEAP[$py_int];
      HEAP[$50] = $51;
      var $52 = $49 + 1;
      var $53 = $47 + 8;
      HEAP[$53] = $52;
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 8:
      var $54 = HEAP[$0];
      HEAP[$retval] = $54;
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
  function _load_binint($self) {
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
      var $s = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 60];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $s, 4);
      
      if ($5 < 0) {
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
      var $7 = HEAP[$s];
      var $8 = HEAP[$self_addr];
      var $9 = _load_binintx($8, $7, 4);
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
  function _load_binint1($self) {
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
      var $s = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 60];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $s, 1);
      
      if ($5 < 0) {
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
      var $7 = HEAP[$s];
      var $8 = HEAP[$self_addr];
      var $9 = _load_binintx($8, $7, 1);
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
  function _load_binint2($self) {
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
      var $s = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 60];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $s, 2);
      
      if ($5 < 0) {
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
      var $7 = HEAP[$s];
      var $8 = HEAP[$self_addr];
      var $9 = _load_binintx($8, $7, 2);
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
  function _load_long($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $l = __stackBase__ + 12;
      var $end = __stackBase__ + 16;
      var $s = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$l] = 0;
      HEAP[$res] = -1;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 64];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $s);
      HEAP[$len] = $5;
      
      
      if (HEAP[$len] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 14;
      break;
     case 2:
      
      
      if (HEAP[$len] <= 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _bad_readline();
      HEAP[$0] = $10;
      __label__ = 14;
      break;
     case 4:
      var $11 = HEAP[$s];
      var $12 = HEAP[$len];
      var $13 = _pystrndup($11, $12);
      HEAP[$s] = $13;
      
      
      if (HEAP[$s] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 14;
      break;
     case 6:
      var $16 = HEAP[$s];
      var $17 = _PyLong_FromString($16, $end, 0);
      HEAP[$l] = $17;
      
      
      if (HEAP[$l] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $20 = HEAP[$s];
      _free($20);
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      var $34 = HEAP[HEAP[$self_addr] + 32];
      var $35 = _Pdata_grow($34);
      
      if ($35 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      var $40 = HEAP[HEAP[$l]] - 1;
      
      var $42 = HEAP[$l];
      HEAP[$42] = $40;
      
      
      
      
      if (HEAP[HEAP[$l]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $51 = HEAP[HEAP[HEAP[$l] + 4] + 24];
      var $52 = HEAP[$l];
      FUNCTION_TABLE[$51]($52);
      __label__ = 11;
      break;
     case 11:
      HEAP[$0] = -1;
      __label__ = 14;
      break;
     case 12:
      
      
      
      
      
      
      
      var $60 = HEAP[HEAP[$self_addr] + 32];
      
      var $62 = HEAP[$60 + 8];
      var $63 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $62;
      var $64 = HEAP[$l];
      HEAP[$63] = $64;
      var $65 = $62 + 1;
      var $66 = $60 + 8;
      HEAP[$66] = $65;
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 13:
      var $67 = HEAP[$s];
      _free($67);
      var $68 = HEAP[$res];
      HEAP[$0] = $68;
      __label__ = 14;
      break;
     case 14:
      var $69 = HEAP[$0];
      HEAP[$retval] = $69;
      __label__ = 15;
      break;
     case 15:
      var $retval13 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_counted_long($self, $size) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $size_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $nbytes = __stackBase__ + 20;
      var $pdata = __stackBase__ + 24;
      var $along = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$size_addr] = $size;
      
      
      if (HEAP[$size_addr] != 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      if (HEAP[$size_addr] != 4) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str82, __str15, 3510, ___PRETTY_FUNCTION___12691);
      throw "Reached an unreachable!";
     case 3:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 60];
      var $8 = HEAP[$self_addr];
      var $9 = HEAP[$size_addr];
      var $10 = FUNCTION_TABLE[$7]($8, $nbytes, $9);
      HEAP[$i] = $10;
      
      
      if (HEAP[$i] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 20;
      break;
     case 5:
      var $13 = HEAP[$nbytes];
      var $14 = HEAP[$size_addr];
      var $15 = _calc_binint($13, $14);
      HEAP[$size_addr] = $15;
      
      
      if (HEAP[$size_addr] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $18 = HEAP[_UnpicklingError];
      _PyErr_SetString($18, __str83);
      HEAP[$0] = -1;
      __label__ = 20;
      break;
     case 7:
      
      
      if (HEAP[$size_addr] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $21 = _PyLong_FromLong(0);
      HEAP[$along] = $21;
      __label__ = 12;
      break;
     case 9:
      
      
      var $24 = HEAP[HEAP[$self_addr] + 60];
      var $25 = HEAP[$self_addr];
      var $26 = HEAP[$size_addr];
      var $27 = FUNCTION_TABLE[$24]($25, $pdata, $26);
      HEAP[$i] = $27;
      
      
      if (HEAP[$i] < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = -1;
      __label__ = 20;
      break;
     case 11:
      var $30 = HEAP[$size_addr];
      var $31 = HEAP[$pdata];
      var $32 = __PyLong_FromByteArray($31, $30, 1, 1);
      HEAP[$along] = $32;
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$along] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$0] = -1;
      __label__ = 20;
      break;
     case 14:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 15:
      
      
      var $48 = HEAP[HEAP[$self_addr] + 32];
      var $49 = _Pdata_grow($48);
      
      if ($49 < 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      
      
      
      var $54 = HEAP[HEAP[$along]] - 1;
      
      var $56 = HEAP[$along];
      HEAP[$56] = $54;
      
      
      
      
      if (HEAP[HEAP[$along]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $65 = HEAP[HEAP[HEAP[$along] + 4] + 24];
      var $66 = HEAP[$along];
      FUNCTION_TABLE[$65]($66);
      __label__ = 18;
      break;
     case 18:
      HEAP[$0] = -1;
      __label__ = 20;
      break;
     case 19:
      
      
      
      
      
      
      
      var $74 = HEAP[HEAP[$self_addr] + 32];
      
      var $76 = HEAP[$74 + 8];
      var $77 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $76;
      var $78 = HEAP[$along];
      HEAP[$77] = $78;
      var $79 = $76 + 1;
      var $80 = $74 + 8;
      HEAP[$80] = $79;
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 20:
      var $81 = HEAP[$0];
      HEAP[$retval] = $81;
      __label__ = 21;
      break;
     case 21:
      var $retval21 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval21;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_float($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $py_float = __stackBase__ + 12;
      var $endptr = __stackBase__ + 16;
      var $s = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      var $d = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$py_float] = 0;
      HEAP[$res] = -1;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 64];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $s);
      HEAP[$len] = $5;
      
      
      if (HEAP[$len] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 19;
      break;
     case 2:
      
      
      if (HEAP[$len] <= 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _bad_readline();
      HEAP[$0] = $10;
      __label__ = 19;
      break;
     case 4:
      var $11 = HEAP[$s];
      var $12 = HEAP[$len];
      var $13 = _pystrndup($11, $12);
      HEAP[$s] = $13;
      
      
      if (HEAP[$s] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 19;
      break;
     case 6:
      var $16 = HEAP[_PyExc_OverflowError];
      var $17 = HEAP[$s];
      var $18 = _PyOS_string_to_double($17, $endptr, $16);
      HEAP[$d] = $18;
      
      var $20 = HEAP[$d] != -1;
      if ($20) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $21 = _PyErr_Occurred();
      
      if ($21 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[HEAP[$endptr]] != 10) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[HEAP[$endptr] + 1] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $31 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($31, __str84);
      __label__ = 18;
      break;
     case 11:
      var $32 = HEAP[$d];
      var $33 = _PyFloat_FromDouble($32);
      HEAP[$py_float] = $33;
      
      
      if (HEAP[$py_float] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $36 = HEAP[$s];
      _free($36);
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 13:
      
      
      var $50 = HEAP[HEAP[$self_addr] + 32];
      var $51 = _Pdata_grow($50);
      
      if ($51 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      
      
      var $56 = HEAP[HEAP[$py_float]] - 1;
      
      var $58 = HEAP[$py_float];
      HEAP[$58] = $56;
      
      
      
      
      if (HEAP[HEAP[$py_float]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[$py_float] + 4] + 24];
      var $68 = HEAP[$py_float];
      FUNCTION_TABLE[$67]($68);
      __label__ = 16;
      break;
     case 16:
      HEAP[$0] = -1;
      __label__ = 19;
      break;
     case 17:
      
      
      
      
      
      
      
      var $76 = HEAP[HEAP[$self_addr] + 32];
      
      var $78 = HEAP[$76 + 8];
      var $79 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $78;
      var $80 = HEAP[$py_float];
      HEAP[$79] = $80;
      var $81 = $78 + 1;
      var $82 = $76 + 8;
      HEAP[$82] = $81;
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 18:
      var $83 = HEAP[$s];
      _free($83);
      var $84 = HEAP[$res];
      HEAP[$0] = $84;
      __label__ = 19;
      break;
     case 19:
      var $85 = HEAP[$0];
      HEAP[$retval] = $85;
      __label__ = 20;
      break;
     case 20:
      var $retval18 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_binfloat($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $py_float = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $p = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 60];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $p, 8);
      
      if ($5 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 2:
      var $7 = HEAP[$p];
      var $8 = __PyFloat_Unpack8($7, 0);
      HEAP[$x] = $8;
      
      var $10 = HEAP[$x] == -1;
      if ($10) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $11 = _PyErr_Occurred();
      
      if ($11 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 5:
      var $13 = HEAP[$x];
      var $14 = _PyFloat_FromDouble($13);
      HEAP[$py_float] = $14;
      
      
      if (HEAP[$py_float] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 7:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      var $30 = HEAP[HEAP[$self_addr] + 32];
      var $31 = _Pdata_grow($30);
      
      if ($31 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      var $36 = HEAP[HEAP[$py_float]] - 1;
      
      var $38 = HEAP[$py_float];
      HEAP[$38] = $36;
      
      
      
      
      if (HEAP[HEAP[$py_float]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $47 = HEAP[HEAP[HEAP[$py_float] + 4] + 24];
      var $48 = HEAP[$py_float];
      FUNCTION_TABLE[$47]($48);
      __label__ = 11;
      break;
     case 11:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 12:
      
      
      
      
      
      
      
      var $56 = HEAP[HEAP[$self_addr] + 32];
      
      var $58 = HEAP[$56 + 8];
      var $59 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $58;
      var $60 = HEAP[$py_float];
      HEAP[$59] = $60;
      var $61 = $58 + 1;
      var $62 = $56 + 8;
      HEAP[$62] = $61;
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 13:
      var $63 = HEAP[$0];
      HEAP[$retval] = $63;
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
  function _load_string($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $str = __stackBase__ + 12;
      var $len = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      var $s = __stackBase__ + 24;
      var $p = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$str] = 0;
      HEAP[$res] = -1;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 64];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $s);
      HEAP[$len] = $5;
      
      
      if (HEAP[$len] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 24;
      break;
     case 2:
      
      
      if (HEAP[$len] <= 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _bad_readline();
      HEAP[$0] = $10;
      __label__ = 24;
      break;
     case 4:
      var $11 = HEAP[$s];
      var $12 = HEAP[$len];
      var $13 = _pystrndup($11, $12);
      HEAP[$s] = $13;
      
      
      if (HEAP[$s] == 0) {
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
      __label__ = 8;
      break;
     case 7:
      
      var $17 = HEAP[$len] - 1;
      HEAP[$len] = $17;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      
      if (HEAP[HEAP[$s] + (HEAP[$len] - 1)] <= 32) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[HEAP[$s]] != 34) {
        __label__ = 12;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      if (HEAP[HEAP[$s] + (HEAP[$len] - 1)] != 34) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      var $37 = HEAP[$s] + (HEAP[$len] - 1);
      HEAP[$37] = 0;
      
      var $39 = HEAP[$s] + 1;
      HEAP[$p] = $39;
      
      var $41 = HEAP[$len] - 2;
      HEAP[$len] = $41;
      __label__ = 15;
      break;
     case 12:
      
      
      
      
      if (HEAP[HEAP[$s]] != 39) {
        __label__ = 23;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      
      if (HEAP[HEAP[$s] + (HEAP[$len] - 1)] != 39) {
        __label__ = 23;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      var $55 = HEAP[$s] + (HEAP[$len] - 1);
      HEAP[$55] = 0;
      
      var $57 = HEAP[$s] + 1;
      HEAP[$p] = $57;
      
      var $59 = HEAP[$len] - 2;
      HEAP[$len] = $59;
      __label__ = 15;
      break;
     case 15:
      var $60 = HEAP[$p];
      var $61 = HEAP[$len];
      var $62 = _PyString_DecodeEscape($60, $61, 0, 0, 0);
      HEAP[$str] = $62;
      var $63 = HEAP[$s];
      _free($63);
      
      
      if (HEAP[$str] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 16:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 17:
      
      
      var $79 = HEAP[HEAP[$self_addr] + 32];
      var $80 = _Pdata_grow($79);
      
      if ($80 < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      
      
      
      var $85 = HEAP[HEAP[$str]] - 1;
      
      var $87 = HEAP[$str];
      HEAP[$87] = $85;
      
      
      
      
      if (HEAP[HEAP[$str]] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $96 = HEAP[HEAP[HEAP[$str] + 4] + 24];
      var $97 = HEAP[$str];
      FUNCTION_TABLE[$96]($97);
      __label__ = 20;
      break;
     case 20:
      HEAP[$0] = -1;
      __label__ = 24;
      break;
     case 21:
      
      
      
      
      
      
      
      var $105 = HEAP[HEAP[$self_addr] + 32];
      
      var $107 = HEAP[$105 + 8];
      var $108 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $107;
      var $109 = HEAP[$str];
      HEAP[$108] = $109;
      var $110 = $107 + 1;
      var $111 = $105 + 8;
      HEAP[$111] = $110;
      HEAP[$res] = 0;
      __label__ = 22;
      break;
     case 22:
      var $112 = HEAP[$res];
      HEAP[$0] = $112;
      __label__ = 24;
      break;
     case 23:
      var $113 = HEAP[$s];
      _free($113);
      var $114 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($114, __str85);
      HEAP[$0] = -1;
      __label__ = 24;
      break;
     case 24:
      var $115 = HEAP[$0];
      HEAP[$retval] = $115;
      __label__ = 25;
      break;
     case 25:
      var $retval23 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval23;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_binstring($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $py_string = __stackBase__ + 12;
      var $l = __stackBase__ + 16;
      var $s = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$py_string] = 0;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 60];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $s, 4);
      
      if ($5 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 14;
      break;
     case 2:
      var $7 = HEAP[$s];
      var $8 = _calc_binint($7, 4);
      HEAP[$l] = $8;
      
      
      if (HEAP[$l] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = HEAP[_UnpicklingError];
      _PyErr_SetString($11, __str86);
      HEAP[$0] = -1;
      __label__ = 14;
      break;
     case 4:
      
      
      var $14 = HEAP[HEAP[$self_addr] + 60];
      var $15 = HEAP[$self_addr];
      var $16 = HEAP[$l];
      var $17 = FUNCTION_TABLE[$14]($15, $s, $16);
      
      if ($17 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 14;
      break;
     case 6:
      var $19 = HEAP[$s];
      var $20 = HEAP[$l];
      var $21 = _PyString_FromStringAndSize($19, $20);
      HEAP[$py_string] = $21;
      
      
      if (HEAP[$py_string] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = -1;
      __label__ = 14;
      break;
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      
      var $37 = HEAP[HEAP[$self_addr] + 32];
      var $38 = _Pdata_grow($37);
      
      if ($38 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      var $43 = HEAP[HEAP[$py_string]] - 1;
      
      var $45 = HEAP[$py_string];
      HEAP[$45] = $43;
      
      
      
      
      if (HEAP[HEAP[$py_string]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$py_string] + 4] + 24];
      var $55 = HEAP[$py_string];
      FUNCTION_TABLE[$54]($55);
      __label__ = 12;
      break;
     case 12:
      HEAP[$0] = -1;
      __label__ = 14;
      break;
     case 13:
      
      
      
      
      
      
      
      var $63 = HEAP[HEAP[$self_addr] + 32];
      
      var $65 = HEAP[$63 + 8];
      var $66 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $65;
      var $67 = HEAP[$py_string];
      HEAP[$66] = $67;
      var $68 = $65 + 1;
      var $69 = $63 + 8;
      HEAP[$69] = $68;
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 14:
      var $70 = HEAP[$0];
      HEAP[$retval] = $70;
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
  function _load_short_binstring($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 21;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 21);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $py_string = __stackBase__ + 12;
      var $l = __stackBase__ + 16;
      var $s = __stackBase__ + 17;
      
      HEAP[$self_addr] = $self;
      HEAP[$py_string] = 0;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 60];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $s, 1);
      
      if ($5 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 12;
      break;
     case 2:
      
      
      var $9 = HEAP[HEAP[$s]];
      HEAP[$l] = $9;
      
      
      var $12 = HEAP[HEAP[$self_addr] + 60];
      
      var $14 = HEAP[$l];
      var $15 = HEAP[$self_addr];
      var $16 = FUNCTION_TABLE[$12]($15, $s, $14);
      
      if ($16 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 12;
      break;
     case 4:
      
      var $19 = HEAP[$l];
      var $20 = HEAP[$s];
      var $21 = _PyString_FromStringAndSize($20, $19);
      HEAP[$py_string] = $21;
      
      
      if (HEAP[$py_string] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 12;
      break;
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 7:
      
      
      var $37 = HEAP[HEAP[$self_addr] + 32];
      var $38 = _Pdata_grow($37);
      
      if ($38 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $43 = HEAP[HEAP[$py_string]] - 1;
      
      var $45 = HEAP[$py_string];
      HEAP[$45] = $43;
      
      
      
      
      if (HEAP[HEAP[$py_string]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$py_string] + 4] + 24];
      var $55 = HEAP[$py_string];
      FUNCTION_TABLE[$54]($55);
      __label__ = 10;
      break;
     case 10:
      HEAP[$0] = -1;
      __label__ = 12;
      break;
     case 11:
      
      
      
      
      
      
      
      var $63 = HEAP[HEAP[$self_addr] + 32];
      
      var $65 = HEAP[$63 + 8];
      var $66 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $65;
      var $67 = HEAP[$py_string];
      HEAP[$66] = $67;
      var $68 = $65 + 1;
      var $69 = $63 + 8;
      HEAP[$69] = $68;
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 12:
      var $70 = HEAP[$0];
      HEAP[$retval] = $70;
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
  function _load_unicode($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $str = __stackBase__ + 12;
      var $len = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      var $s = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$str] = 0;
      HEAP[$res] = -1;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 64];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $s);
      HEAP[$len] = $5;
      
      
      if (HEAP[$len] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 12;
      break;
     case 2:
      
      
      if (HEAP[$len] <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _bad_readline();
      HEAP[$0] = $10;
      __label__ = 12;
      break;
     case 4:
      
      var $12 = HEAP[$len] - 1;
      var $13 = HEAP[$s];
      var $14 = _PyUnicodeUCS2_DecodeRawUnicodeEscape($13, $12, 0);
      HEAP[$str] = $14;
      
      
      if (HEAP[$str] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      
      
      var $30 = HEAP[HEAP[$self_addr] + 32];
      var $31 = _Pdata_grow($30);
      
      if ($31 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      var $36 = HEAP[HEAP[$str]] - 1;
      
      var $38 = HEAP[$str];
      HEAP[$38] = $36;
      
      
      
      
      if (HEAP[HEAP[$str]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $47 = HEAP[HEAP[HEAP[$str] + 4] + 24];
      var $48 = HEAP[$str];
      FUNCTION_TABLE[$47]($48);
      __label__ = 9;
      break;
     case 9:
      HEAP[$0] = -1;
      __label__ = 12;
      break;
     case 10:
      
      
      
      
      
      
      
      var $56 = HEAP[HEAP[$self_addr] + 32];
      
      var $58 = HEAP[$56 + 8];
      var $59 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $58;
      var $60 = HEAP[$str];
      HEAP[$59] = $60;
      var $61 = $58 + 1;
      var $62 = $56 + 8;
      HEAP[$62] = $61;
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 11:
      var $63 = HEAP[$res];
      HEAP[$0] = $63;
      __label__ = 12;
      break;
     case 12:
      var $64 = HEAP[$0];
      HEAP[$retval] = $64;
      __label__ = 13;
      break;
     case 13:
      var $retval11 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_binunicode($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $unicode = __stackBase__ + 12;
      var $l = __stackBase__ + 16;
      var $s = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 60];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $s, 4);
      
      if ($5 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 14;
      break;
     case 2:
      var $7 = HEAP[$s];
      var $8 = _calc_binint($7, 4);
      HEAP[$l] = $8;
      
      
      if (HEAP[$l] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = HEAP[_UnpicklingError];
      _PyErr_SetString($11, __str87);
      HEAP[$0] = -1;
      __label__ = 14;
      break;
     case 4:
      
      
      var $14 = HEAP[HEAP[$self_addr] + 60];
      var $15 = HEAP[$self_addr];
      var $16 = HEAP[$l];
      var $17 = FUNCTION_TABLE[$14]($15, $s, $16);
      
      if ($17 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 14;
      break;
     case 6:
      var $19 = HEAP[$s];
      var $20 = HEAP[$l];
      var $21 = _PyUnicodeUCS2_DecodeUTF8($19, $20, 0);
      HEAP[$unicode] = $21;
      
      
      if (HEAP[$unicode] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = -1;
      __label__ = 14;
      break;
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      
      var $37 = HEAP[HEAP[$self_addr] + 32];
      var $38 = _Pdata_grow($37);
      
      if ($38 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      var $43 = HEAP[HEAP[$unicode]] - 1;
      
      var $45 = HEAP[$unicode];
      HEAP[$45] = $43;
      
      
      
      
      if (HEAP[HEAP[$unicode]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$unicode] + 4] + 24];
      var $55 = HEAP[$unicode];
      FUNCTION_TABLE[$54]($55);
      __label__ = 12;
      break;
     case 12:
      HEAP[$0] = -1;
      __label__ = 14;
      break;
     case 13:
      
      
      
      
      
      
      
      var $63 = HEAP[HEAP[$self_addr] + 32];
      
      var $65 = HEAP[$63 + 8];
      var $66 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $65;
      var $67 = HEAP[$unicode];
      HEAP[$66] = $67;
      var $68 = $65 + 1;
      var $69 = $63 + 8;
      HEAP[$69] = $68;
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 14:
      var $70 = HEAP[$0];
      HEAP[$retval] = $70;
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
  function _load_tuple($self) {
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
      var $tup = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      var $1 = HEAP[$self_addr];
      var $2 = _marker($1);
      HEAP[$i] = $2;
      
      
      if (HEAP[$i] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 2:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 32];
      var $8 = HEAP[$i];
      var $9 = _Pdata_popTuple($7, $8);
      HEAP[$tup] = $9;
      
      
      if (HEAP[$tup] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      
      var $25 = HEAP[HEAP[$self_addr] + 32];
      var $26 = _Pdata_grow($25);
      
      if ($26 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $31 = HEAP[HEAP[$tup]] - 1;
      
      var $33 = HEAP[$tup];
      HEAP[$33] = $31;
      
      
      
      
      if (HEAP[HEAP[$tup]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $42 = HEAP[HEAP[HEAP[$tup] + 4] + 24];
      var $43 = HEAP[$tup];
      FUNCTION_TABLE[$42]($43);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 9:
      
      
      
      
      
      
      
      var $51 = HEAP[HEAP[$self_addr] + 32];
      
      var $53 = HEAP[$51 + 8];
      var $54 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $53;
      var $55 = HEAP[$tup];
      HEAP[$54] = $55;
      var $56 = $53 + 1;
      var $57 = $51 + 8;
      HEAP[$57] = $56;
      HEAP[$0] = 0;
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
  function _load_counted_tuple($self, $len) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $len_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $tup = __stackBase__ + 16;
      var $element = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$len_addr] = $len;
      var $1 = HEAP[$len_addr];
      var $2 = _PyTuple_New($1);
      HEAP[$tup] = $2;
      
      
      if (HEAP[$tup] == 0) {
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
      __label__ = 9;
      break;
     case 3:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $15 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16];
      
      
      var $18 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $21 = HEAP[$18 + 8] - 1;
      var $22 = $18 + 8;
      HEAP[$22] = $21;
      
      
      
      var $26 = HEAP[$15 + 4 * HEAP[$18 + 8]];
      HEAP[$element] = $26;
      __label__ = 6;
      break;
     case 5:
      var $27 = HEAP[_UnpicklingError];
      _PyErr_SetString($27, __str88);
      HEAP[$element] = 0;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$element] == 0) {
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
      
      
      
      
      var $34 = HEAP[$tup] + 12 + HEAP[$len_addr] * 4;
      var $35 = HEAP[$element];
      HEAP[$34] = $35;
      __label__ = 9;
      break;
     case 9:
      
      var $37 = HEAP[$len_addr] - 1;
      HEAP[$len_addr] = $37;
      
      
      if (HEAP[$len_addr] >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      
      var $53 = HEAP[HEAP[$self_addr] + 32];
      var $54 = _Pdata_grow($53);
      
      if ($54 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      
      
      var $59 = HEAP[HEAP[$tup]] - 1;
      
      var $61 = HEAP[$tup];
      HEAP[$61] = $59;
      
      
      
      
      if (HEAP[HEAP[$tup]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $70 = HEAP[HEAP[HEAP[$tup] + 4] + 24];
      var $71 = HEAP[$tup];
      FUNCTION_TABLE[$70]($71);
      __label__ = 14;
      break;
     case 14:
      HEAP[$0] = -1;
      __label__ = 16;
      break;
     case 15:
      
      
      
      
      
      
      
      var $79 = HEAP[HEAP[$self_addr] + 32];
      
      var $81 = HEAP[$79 + 8];
      var $82 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $81;
      var $83 = HEAP[$tup];
      HEAP[$82] = $83;
      var $84 = $81 + 1;
      var $85 = $79 + 8;
      HEAP[$85] = $84;
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 16:
      var $86 = HEAP[$0];
      HEAP[$retval] = $86;
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
  function _load_empty_list($self) {
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
      var $list = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
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
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 2:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      var $17 = HEAP[HEAP[$self_addr] + 32];
      var $18 = _Pdata_grow($17);
      
      if ($18 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $23 = HEAP[HEAP[$list]] - 1;
      
      var $25 = HEAP[$list];
      HEAP[$25] = $23;
      
      
      
      
      if (HEAP[HEAP[$list]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $34 = HEAP[HEAP[HEAP[$list] + 4] + 24];
      var $35 = HEAP[$list];
      FUNCTION_TABLE[$34]($35);
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      
      
      
      var $43 = HEAP[HEAP[$self_addr] + 32];
      
      var $45 = HEAP[$43 + 8];
      var $46 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $45;
      var $47 = HEAP[$list];
      HEAP[$46] = $47;
      var $48 = $45 + 1;
      var $49 = $43 + 8;
      HEAP[$49] = $48;
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 8:
      var $50 = HEAP[$0];
      HEAP[$retval] = $50;
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
  function _load_empty_dict($self) {
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
      var $dict = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      var $1 = _PyDict_New();
      HEAP[$dict] = $1;
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 2:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      var $17 = HEAP[HEAP[$self_addr] + 32];
      var $18 = _Pdata_grow($17);
      
      if ($18 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $23 = HEAP[HEAP[$dict]] - 1;
      
      var $25 = HEAP[$dict];
      HEAP[$25] = $23;
      
      
      
      
      if (HEAP[HEAP[$dict]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $34 = HEAP[HEAP[HEAP[$dict] + 4] + 24];
      var $35 = HEAP[$dict];
      FUNCTION_TABLE[$34]($35);
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      
      
      
      var $43 = HEAP[HEAP[$self_addr] + 32];
      
      var $45 = HEAP[$43 + 8];
      var $46 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $45;
      var $47 = HEAP[$dict];
      HEAP[$46] = $47;
      var $48 = $45 + 1;
      var $49 = $43 + 8;
      HEAP[$49] = $48;
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 8:
      var $50 = HEAP[$0];
      HEAP[$retval] = $50;
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
  function _load_list($self) {
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
      var $list = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$list] = 0;
      var $1 = HEAP[$self_addr];
      var $2 = _marker($1);
      HEAP[$i] = $2;
      
      
      if (HEAP[$i] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 2:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 32];
      var $8 = HEAP[$i];
      var $9 = _Pdata_popList($7, $8);
      HEAP[$list] = $9;
      
      
      if (HEAP[$list] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      
      var $25 = HEAP[HEAP[$self_addr] + 32];
      var $26 = _Pdata_grow($25);
      
      if ($26 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $31 = HEAP[HEAP[$list]] - 1;
      
      var $33 = HEAP[$list];
      HEAP[$33] = $31;
      
      
      
      
      if (HEAP[HEAP[$list]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $42 = HEAP[HEAP[HEAP[$list] + 4] + 24];
      var $43 = HEAP[$list];
      FUNCTION_TABLE[$42]($43);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 9:
      
      
      
      
      
      
      
      var $51 = HEAP[HEAP[$self_addr] + 32];
      
      var $53 = HEAP[$51 + 8];
      var $54 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $53;
      var $55 = HEAP[$list];
      HEAP[$54] = $55;
      var $56 = $53 + 1;
      var $57 = $51 + 8;
      HEAP[$57] = $56;
      HEAP[$0] = 0;
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
  function _load_dict($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $dict = __stackBase__ + 12;
      var $key = __stackBase__ + 16;
      var $value = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      var $j = __stackBase__ + 28;
      var $k = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      var $1 = HEAP[$self_addr];
      var $2 = _marker($1);
      HEAP[$i] = $2;
      
      
      if (HEAP[$i] < 0) {
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
      
      
      
      
      var $9 = HEAP[HEAP[HEAP[$self_addr] + 32] + 8];
      HEAP[$j] = $9;
      var $10 = _PyDict_New();
      HEAP[$dict] = $10;
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 4:
      
      var $14 = HEAP[$i] + 1;
      HEAP[$k] = $14;
      __label__ = 10;
      break;
     case 5:
      
      
      
      
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * (HEAP[$k] - 1)];
      HEAP[$key] = $23;
      
      
      
      
      
      
      
      var $31 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * HEAP[$k]];
      HEAP[$value] = $31;
      var $32 = HEAP[$dict];
      var $33 = HEAP[$key];
      var $34 = HEAP[$value];
      var $35 = _PyDict_SetItem($32, $33, $34);
      
      if ($35 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $40 = HEAP[HEAP[$dict]] - 1;
      
      var $42 = HEAP[$dict];
      HEAP[$42] = $40;
      
      
      
      
      if (HEAP[HEAP[$dict]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $51 = HEAP[HEAP[HEAP[$dict] + 4] + 24];
      var $52 = HEAP[$dict];
      FUNCTION_TABLE[$51]($52);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 9:
      
      var $54 = HEAP[$k] + 2;
      HEAP[$k] = $54;
      __label__ = 10;
      break;
     case 10:
      
      
      
      if (HEAP[$k] < HEAP[$j]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $60 = HEAP[HEAP[$self_addr] + 32];
      var $61 = HEAP[$i];
      var $62 = _Pdata_clear($60, $61);
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 12:
      
      
      var $76 = HEAP[HEAP[$self_addr] + 32];
      var $77 = _Pdata_grow($76);
      
      if ($77 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      
      
      
      var $82 = HEAP[HEAP[$dict]] - 1;
      
      var $84 = HEAP[$dict];
      HEAP[$84] = $82;
      
      
      
      
      if (HEAP[HEAP[$dict]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $93 = HEAP[HEAP[HEAP[$dict] + 4] + 24];
      var $94 = HEAP[$dict];
      FUNCTION_TABLE[$93]($94);
      __label__ = 15;
      break;
     case 15:
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 16:
      
      
      
      
      
      
      
      var $102 = HEAP[HEAP[$self_addr] + 32];
      
      var $104 = HEAP[$102 + 8];
      var $105 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $104;
      var $106 = HEAP[$dict];
      HEAP[$105] = $106;
      var $107 = $104 + 1;
      var $108 = $102 + 8;
      HEAP[$108] = $107;
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 17:
      var $109 = HEAP[$0];
      HEAP[$retval] = $109;
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
  function _Instance_New($cls, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $r = __stackBase__ + 16;
      var $l = __stackBase__ + 20;
      var $__getinitargs__ = __stackBase__ + 24;
      var $inst = __stackBase__ + 28;
      var $tp = __stackBase__ + 32;
      var $v = __stackBase__ + 36;
      var $tb = __stackBase__ + 40;
      var $tmp_value = __stackBase__ + 44;
      
      HEAP[$cls_addr] = $cls;
      HEAP[$args_addr] = $args;
      HEAP[$r] = 0;
      
      
      
      
      if (HEAP[HEAP[$cls_addr] + 4] == _PyClass_Type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      var $5 = HEAP[$args_addr];
      var $6 = _PyObject_Size($5);
      HEAP[$l] = $6;
      
      
      if (HEAP[$l] < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$l] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 3:
      var $11 = HEAP[___getinitargs___str];
      var $12 = HEAP[$cls_addr];
      var $13 = _PyObject_GetAttr($12, $11);
      HEAP[$__getinitargs__] = $13;
      
      
      if (HEAP[$__getinitargs__] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      _PyErr_Clear();
      var $16 = HEAP[$cls_addr];
      var $17 = _PyInstance_NewRaw($16, 0);
      HEAP[$inst] = $17;
      
      
      if (HEAP[$inst] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $20 = HEAP[$inst];
      HEAP[$0] = $20;
      __label__ = 20;
      break;
     case 6:
      
      
      
      var $24 = HEAP[HEAP[$__getinitargs__]] - 1;
      
      var $26 = HEAP[$__getinitargs__];
      HEAP[$26] = $24;
      
      
      
      
      if (HEAP[HEAP[$__getinitargs__]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $35 = HEAP[HEAP[HEAP[$__getinitargs__] + 4] + 24];
      var $36 = HEAP[$__getinitargs__];
      FUNCTION_TABLE[$35]($36);
      __label__ = 8;
      break;
     case 8:
      var $37 = HEAP[$cls_addr];
      var $38 = HEAP[$args_addr];
      var $39 = _PyInstance_New($37, $38, 0);
      HEAP[$r] = $39;
      
      
      if (HEAP[$r] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      var $42 = HEAP[$r];
      HEAP[$0] = $42;
      __label__ = 20;
      break;
     case 10:
      var $43 = HEAP[$cls_addr];
      var $44 = HEAP[$args_addr];
      var $45 = _PyObject_CallObject($43, $44);
      HEAP[$r] = $45;
      
      
      if (HEAP[$r] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $48 = HEAP[$r];
      HEAP[$0] = $48;
      __label__ = 20;
      break;
     case 12:
      _PyErr_Fetch($tp, $v, $tb);
      var $49 = HEAP[$v];
      HEAP[$tmp_value] = $49;
      
      
      if (HEAP[$tmp_value] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$tmp_value] = __Py_NoneStruct;
      __label__ = 14;
      break;
     case 14:
      var $52 = HEAP[$tmp_value];
      var $53 = HEAP[$cls_addr];
      var $54 = HEAP[$args_addr];
      var $55 = _PyTuple_Pack(3, allocate([ $52, 0, 0, 0, $53, 0, 0, 0, $54, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$r] = $55;
      
      
      if (HEAP[$r] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 15:
      
      
      if (HEAP[$v] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      var $60 = HEAP[$v];
      
      
      var $63 = HEAP[$60] - 1;
      var $64 = $60;
      HEAP[$64] = $63;
      
      
      
      if (HEAP[$60] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $72 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $73 = HEAP[$v];
      FUNCTION_TABLE[$72]($73);
      __label__ = 18;
      break;
     case 18:
      var $74 = HEAP[$r];
      HEAP[$v] = $74;
      __label__ = 19;
      break;
     case 19:
      var $75 = HEAP[$tb];
      var $76 = HEAP[$v];
      var $77 = HEAP[$tp];
      _PyErr_Restore($77, $76, $75);
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 20:
      var $78 = HEAP[$0];
      HEAP[$retval] = $78;
      __label__ = 21;
      break;
     case 21:
      var $retval19 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_obj($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $class = __stackBase__ + 12;
      var $tup = __stackBase__ + 16;
      var $obj = __stackBase__ + 20;
      var $i = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$obj] = 0;
      var $1 = HEAP[$self_addr];
      var $2 = _marker($1);
      HEAP[$i] = $2;
      
      
      if (HEAP[$i] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 20;
      break;
     case 2:
      
      var $6 = HEAP[$i] + 1;
      
      
      var $9 = HEAP[HEAP[$self_addr] + 32];
      var $10 = _Pdata_popTuple($9, $6);
      HEAP[$tup] = $10;
      
      
      if (HEAP[$tup] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 20;
      break;
     case 4:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16];
      
      
      var $26 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $29 = HEAP[$26 + 8] - 1;
      var $30 = $26 + 8;
      HEAP[$30] = $29;
      
      
      
      var $34 = HEAP[$23 + 4 * HEAP[$26 + 8]];
      HEAP[$class] = $34;
      __label__ = 7;
      break;
     case 6:
      var $35 = HEAP[_UnpicklingError];
      _PyErr_SetString($35, __str88);
      HEAP[$class] = 0;
      __label__ = 7;
      break;
     case 7:
      
      
      if (HEAP[$class] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      var $38 = HEAP[$class];
      var $39 = HEAP[$tup];
      var $40 = _Instance_New($38, $39);
      HEAP[$obj] = $40;
      
      
      
      var $44 = HEAP[HEAP[$class]] - 1;
      
      var $46 = HEAP[$class];
      HEAP[$46] = $44;
      
      
      
      
      if (HEAP[HEAP[$class]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $55 = HEAP[HEAP[HEAP[$class] + 4] + 24];
      var $56 = HEAP[$class];
      FUNCTION_TABLE[$55]($56);
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $60 = HEAP[HEAP[$tup]] - 1;
      
      var $62 = HEAP[$tup];
      HEAP[$62] = $60;
      
      
      
      
      if (HEAP[HEAP[$tup]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $71 = HEAP[HEAP[HEAP[$tup] + 4] + 24];
      var $72 = HEAP[$tup];
      FUNCTION_TABLE[$71]($72);
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$0] = -1;
      __label__ = 20;
      break;
     case 14:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 15:
      
      
      var $88 = HEAP[HEAP[$self_addr] + 32];
      var $89 = _Pdata_grow($88);
      
      if ($89 < 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      
      
      
      var $94 = HEAP[HEAP[$obj]] - 1;
      
      var $96 = HEAP[$obj];
      HEAP[$96] = $94;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $105 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $106 = HEAP[$obj];
      FUNCTION_TABLE[$105]($106);
      __label__ = 18;
      break;
     case 18:
      HEAP[$0] = -1;
      __label__ = 20;
      break;
     case 19:
      
      
      
      
      
      
      
      var $114 = HEAP[HEAP[$self_addr] + 32];
      
      var $116 = HEAP[$114 + 8];
      var $117 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $116;
      var $118 = HEAP[$obj];
      HEAP[$117] = $118;
      var $119 = $116 + 1;
      var $120 = $114 + 8;
      HEAP[$120] = $119;
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 20:
      var $121 = HEAP[$0];
      HEAP[$retval] = $121;
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
  function _load_inst($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $tup = __stackBase__ + 12;
      var $class = __stackBase__ + 16;
      var $obj = __stackBase__ + 20;
      var $module_name = __stackBase__ + 24;
      var $class_name = __stackBase__ + 28;
      var $i = __stackBase__ + 32;
      var $len = __stackBase__ + 36;
      var $s = __stackBase__ + 40;
      
      HEAP[$self_addr] = $self;
      HEAP[$class] = 0;
      HEAP[$obj] = 0;
      var $1 = HEAP[$self_addr];
      var $2 = _marker($1);
      HEAP[$i] = $2;
      
      
      if (HEAP[$i] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 31;
      break;
     case 2:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 64];
      var $8 = HEAP[$self_addr];
      var $9 = FUNCTION_TABLE[$7]($8, $s);
      HEAP[$len] = $9;
      
      
      if (HEAP[$len] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 31;
      break;
     case 4:
      
      
      if (HEAP[$len] <= 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $14 = _bad_readline();
      HEAP[$0] = $14;
      __label__ = 31;
      break;
     case 6:
      
      var $16 = HEAP[$len] - 1;
      var $17 = HEAP[$s];
      var $18 = _PyString_FromStringAndSize($17, $16);
      HEAP[$module_name] = $18;
      
      
      if (HEAP[$module_name] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = -1;
      __label__ = 31;
      break;
     case 8:
      
      
      var $23 = HEAP[HEAP[$self_addr] + 64];
      var $24 = HEAP[$self_addr];
      var $25 = FUNCTION_TABLE[$23]($24, $s);
      HEAP[$len] = $25;
      
      
      if (HEAP[$len] >= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 9:
      
      
      if (HEAP[$len] <= 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $30 = _bad_readline();
      HEAP[$0] = $30;
      __label__ = 31;
      break;
     case 11:
      
      var $32 = HEAP[$len] - 1;
      var $33 = HEAP[$s];
      var $34 = _PyString_FromStringAndSize($33, $32);
      HEAP[$class_name] = $34;
      
      
      if (HEAP[$class_name] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      var $39 = HEAP[HEAP[$self_addr] + 76];
      var $40 = HEAP[$module_name];
      var $41 = HEAP[$class_name];
      var $42 = _find_class($40, $41, $39);
      HEAP[$class] = $42;
      
      
      
      var $46 = HEAP[HEAP[$class_name]] - 1;
      
      var $48 = HEAP[$class_name];
      HEAP[$48] = $46;
      
      
      
      
      if (HEAP[HEAP[$class_name]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[$class_name] + 4] + 24];
      var $58 = HEAP[$class_name];
      FUNCTION_TABLE[$57]($58);
      __label__ = 14;
      break;
     case 14:
      
      
      
      var $62 = HEAP[HEAP[$module_name]] - 1;
      
      var $64 = HEAP[$module_name];
      HEAP[$64] = $62;
      
      
      
      
      if (HEAP[HEAP[$module_name]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[$module_name] + 4] + 24];
      var $74 = HEAP[$module_name];
      FUNCTION_TABLE[$73]($74);
      __label__ = 16;
      break;
     case 16:
      
      
      if (HEAP[$class] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      HEAP[$0] = -1;
      __label__ = 31;
      break;
     case 18:
      
      
      var $79 = HEAP[HEAP[$self_addr] + 32];
      var $80 = HEAP[$i];
      var $81 = _Pdata_popTuple($79, $80);
      HEAP[$tup] = $81;
      
      
      if (HEAP[$tup] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      var $84 = HEAP[$class];
      var $85 = HEAP[$tup];
      var $86 = _Instance_New($84, $85);
      HEAP[$obj] = $86;
      
      
      
      var $90 = HEAP[HEAP[$tup]] - 1;
      
      var $92 = HEAP[$tup];
      HEAP[$92] = $90;
      
      
      
      
      if (HEAP[HEAP[$tup]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $101 = HEAP[HEAP[HEAP[$tup] + 4] + 24];
      var $102 = HEAP[$tup];
      FUNCTION_TABLE[$101]($102);
      __label__ = 21;
      break;
     case 21:
      
      
      
      var $106 = HEAP[HEAP[$class]] - 1;
      
      var $108 = HEAP[$class];
      HEAP[$108] = $106;
      
      
      
      
      if (HEAP[HEAP[$class]] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $117 = HEAP[HEAP[HEAP[$class] + 4] + 24];
      var $118 = HEAP[$class];
      FUNCTION_TABLE[$117]($118);
      __label__ = 23;
      break;
     case 23:
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      HEAP[$0] = -1;
      __label__ = 31;
      break;
     case 25:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 26;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 26:
      
      
      var $134 = HEAP[HEAP[$self_addr] + 32];
      var $135 = _Pdata_grow($134);
      
      if ($135 < 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      
      
      
      var $140 = HEAP[HEAP[$obj]] - 1;
      
      var $142 = HEAP[$obj];
      HEAP[$142] = $140;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $151 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $152 = HEAP[$obj];
      FUNCTION_TABLE[$151]($152);
      __label__ = 29;
      break;
     case 29:
      HEAP[$0] = -1;
      __label__ = 31;
      break;
     case 30:
      
      
      
      
      
      
      
      var $160 = HEAP[HEAP[$self_addr] + 32];
      
      var $162 = HEAP[$160 + 8];
      var $163 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $162;
      var $164 = HEAP[$obj];
      HEAP[$163] = $164;
      var $165 = $162 + 1;
      var $166 = $160 + 8;
      HEAP[$166] = $165;
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 31:
      var $167 = HEAP[$0];
      HEAP[$retval] = $167;
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
  function _load_newobj($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $args = __stackBase__ + 12;
      var $clsraw = __stackBase__ + 16;
      var $cls = __stackBase__ + 20;
      var $obj = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$args] = 0;
      HEAP[$clsraw] = 0;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      var $11 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16];
      
      
      var $14 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $17 = HEAP[$14 + 8] - 1;
      var $18 = $14 + 8;
      HEAP[$18] = $17;
      
      
      
      var $22 = HEAP[$11 + 4 * HEAP[$14 + 8]];
      HEAP[$args] = $22;
      __label__ = 3;
      break;
     case 2:
      var $23 = HEAP[_UnpicklingError];
      _PyErr_SetString($23, __str88);
      HEAP[$args] = 0;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$args] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$args] + 4] + 84] & 67108864) == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $33 = HEAP[_UnpicklingError];
      _PyErr_SetString($33, __str89);
      __label__ = 25;
      break;
     case 6:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16];
      
      
      var $47 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $50 = HEAP[$47 + 8] - 1;
      var $51 = $47 + 8;
      HEAP[$51] = $50;
      
      
      
      var $55 = HEAP[$44 + 4 * HEAP[$47 + 8]];
      HEAP[$clsraw] = $55;
      __label__ = 9;
      break;
     case 8:
      var $56 = HEAP[_UnpicklingError];
      _PyErr_SetString($56, __str88);
      HEAP[$clsraw] = 0;
      __label__ = 9;
      break;
     case 9:
      
      var $58 = HEAP[$clsraw];
      HEAP[$cls] = $58;
      
      
      if (HEAP[$cls] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$cls] + 4] + 84] >= 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $68 = HEAP[_UnpicklingError];
      _PyErr_SetString($68, __str90);
      __label__ = 25;
      break;
     case 12:
      
      
      
      
      if (HEAP[HEAP[$cls] + 156] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $73 = HEAP[_UnpicklingError];
      _PyErr_SetString($73, __str91);
      __label__ = 25;
      break;
     case 14:
      
      
      var $76 = HEAP[HEAP[$cls] + 156];
      var $77 = HEAP[$cls];
      var $78 = HEAP[$args];
      var $79 = FUNCTION_TABLE[$76]($77, $78, 0);
      HEAP[$obj] = $79;
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      var $85 = HEAP[HEAP[$args]] - 1;
      
      var $87 = HEAP[$args];
      HEAP[$87] = $85;
      
      
      
      
      if (HEAP[HEAP[$args]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $96 = HEAP[HEAP[HEAP[$args] + 4] + 24];
      var $97 = HEAP[$args];
      FUNCTION_TABLE[$96]($97);
      __label__ = 17;
      break;
     case 17:
      
      
      
      var $101 = HEAP[HEAP[$clsraw]] - 1;
      
      var $103 = HEAP[$clsraw];
      HEAP[$103] = $101;
      
      
      
      
      if (HEAP[HEAP[$clsraw]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $112 = HEAP[HEAP[HEAP[$clsraw] + 4] + 24];
      var $113 = HEAP[$clsraw];
      FUNCTION_TABLE[$112]($113);
      __label__ = 19;
      break;
     case 19:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 20:
      
      
      var $127 = HEAP[HEAP[$self_addr] + 32];
      var $128 = _Pdata_grow($127);
      
      if ($128 < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 21:
      
      
      
      var $133 = HEAP[HEAP[$obj]] - 1;
      
      var $135 = HEAP[$obj];
      HEAP[$135] = $133;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $144 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $145 = HEAP[$obj];
      FUNCTION_TABLE[$144]($145);
      __label__ = 23;
      break;
     case 23:
      HEAP[$0] = -1;
      __label__ = 32;
      break;
     case 24:
      
      
      
      
      
      
      
      var $153 = HEAP[HEAP[$self_addr] + 32];
      
      var $155 = HEAP[$153 + 8];
      var $156 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $155;
      var $157 = HEAP[$obj];
      HEAP[$156] = $157;
      var $158 = $155 + 1;
      var $159 = $153 + 8;
      HEAP[$159] = $158;
      HEAP[$0] = 0;
      __label__ = 32;
      break;
     case 25:
      
      
      if (HEAP[$args] != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 26:
      
      
      
      var $165 = HEAP[HEAP[$args]] - 1;
      
      var $167 = HEAP[$args];
      HEAP[$167] = $165;
      
      
      
      
      if (HEAP[HEAP[$args]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $176 = HEAP[HEAP[HEAP[$args] + 4] + 24];
      var $177 = HEAP[$args];
      FUNCTION_TABLE[$176]($177);
      __label__ = 28;
      break;
     case 28:
      
      
      if (HEAP[$clsraw] != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 29:
      
      
      
      var $183 = HEAP[HEAP[$clsraw]] - 1;
      
      var $185 = HEAP[$clsraw];
      HEAP[$185] = $183;
      
      
      
      
      if (HEAP[HEAP[$clsraw]] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $194 = HEAP[HEAP[HEAP[$clsraw] + 4] + 24];
      var $195 = HEAP[$clsraw];
      FUNCTION_TABLE[$194]($195);
      __label__ = 31;
      break;
     case 31:
      HEAP[$0] = -1;
      __label__ = 32;
      break;
     case 32:
      var $196 = HEAP[$0];
      HEAP[$retval] = $196;
      __label__ = 33;
      break;
     case 33:
      var $retval31 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval31;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_global($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $class = __stackBase__ + 12;
      var $module_name = __stackBase__ + 16;
      var $class_name = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $s = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$class] = 0;
      HEAP[$module_name] = 0;
      HEAP[$class_name] = 0;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 64];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $s);
      HEAP[$len] = $5;
      
      
      if (HEAP[$len] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 24;
      break;
     case 2:
      
      
      if (HEAP[$len] <= 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _bad_readline();
      HEAP[$0] = $10;
      __label__ = 24;
      break;
     case 4:
      
      var $12 = HEAP[$len] - 1;
      var $13 = HEAP[$s];
      var $14 = _PyString_FromStringAndSize($13, $12);
      HEAP[$module_name] = $14;
      
      
      if (HEAP[$module_name] == 0) {
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
      
      
      var $19 = HEAP[HEAP[$self_addr] + 64];
      var $20 = HEAP[$self_addr];
      var $21 = FUNCTION_TABLE[$19]($20, $s);
      HEAP[$len] = $21;
      
      
      if (HEAP[$len] >= 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 7:
      
      
      if (HEAP[$len] <= 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $29 = HEAP[HEAP[$module_name]] - 1;
      
      var $31 = HEAP[$module_name];
      HEAP[$31] = $29;
      
      
      
      
      if (HEAP[HEAP[$module_name]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $40 = HEAP[HEAP[HEAP[$module_name] + 4] + 24];
      var $41 = HEAP[$module_name];
      FUNCTION_TABLE[$40]($41);
      __label__ = 10;
      break;
     case 10:
      var $42 = _bad_readline();
      HEAP[$0] = $42;
      __label__ = 24;
      break;
     case 11:
      
      var $44 = HEAP[$len] - 1;
      var $45 = HEAP[$s];
      var $46 = _PyString_FromStringAndSize($45, $44);
      HEAP[$class_name] = $46;
      
      
      if (HEAP[$class_name] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      var $51 = HEAP[HEAP[$self_addr] + 76];
      var $52 = HEAP[$module_name];
      var $53 = HEAP[$class_name];
      var $54 = _find_class($52, $53, $51);
      HEAP[$class] = $54;
      
      
      
      var $58 = HEAP[HEAP[$class_name]] - 1;
      
      var $60 = HEAP[$class_name];
      HEAP[$60] = $58;
      
      
      
      
      if (HEAP[HEAP[$class_name]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $69 = HEAP[HEAP[HEAP[$class_name] + 4] + 24];
      var $70 = HEAP[$class_name];
      FUNCTION_TABLE[$69]($70);
      __label__ = 14;
      break;
     case 14:
      
      
      
      var $74 = HEAP[HEAP[$module_name]] - 1;
      
      var $76 = HEAP[$module_name];
      HEAP[$76] = $74;
      
      
      
      
      if (HEAP[HEAP[$module_name]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $85 = HEAP[HEAP[HEAP[$module_name] + 4] + 24];
      var $86 = HEAP[$module_name];
      FUNCTION_TABLE[$85]($86);
      __label__ = 16;
      break;
     case 16:
      
      
      if (HEAP[$class] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      HEAP[$0] = -1;
      __label__ = 24;
      break;
     case 18:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 19:
      
      
      var $102 = HEAP[HEAP[$self_addr] + 32];
      var $103 = _Pdata_grow($102);
      
      if ($103 < 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      
      
      
      var $108 = HEAP[HEAP[$class]] - 1;
      
      var $110 = HEAP[$class];
      HEAP[$110] = $108;
      
      
      
      
      if (HEAP[HEAP[$class]] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $119 = HEAP[HEAP[HEAP[$class] + 4] + 24];
      var $120 = HEAP[$class];
      FUNCTION_TABLE[$119]($120);
      __label__ = 22;
      break;
     case 22:
      HEAP[$0] = -1;
      __label__ = 24;
      break;
     case 23:
      
      
      
      
      
      
      
      var $128 = HEAP[HEAP[$self_addr] + 32];
      
      var $130 = HEAP[$128 + 8];
      var $131 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $130;
      var $132 = HEAP[$class];
      HEAP[$131] = $132;
      var $133 = $130 + 1;
      var $134 = $128 + 8;
      HEAP[$134] = $133;
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 24:
      var $135 = HEAP[$0];
      HEAP[$retval] = $135;
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
  function _load_persid($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $pid = __stackBase__ + 12;
      var $len = __stackBase__ + 16;
      var $s = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$pid] = 0;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 64];
      var $8 = HEAP[$self_addr];
      var $9 = FUNCTION_TABLE[$7]($8, $s);
      HEAP[$len] = $9;
      
      
      if (HEAP[$len] < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = -1;
      __label__ = 35;
      break;
     case 3:
      
      
      if (HEAP[$len] <= 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $14 = _bad_readline();
      HEAP[$0] = $14;
      __label__ = 35;
      break;
     case 5:
      
      var $16 = HEAP[$len] - 1;
      var $17 = HEAP[$s];
      var $18 = _PyString_FromStringAndSize($17, $16);
      HEAP[$pid] = $18;
      
      
      if (HEAP[$pid] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = -1;
      __label__ = 35;
      break;
     case 7:
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[HEAP[$self_addr] + 40] + 4] + 84] & 33554432) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 8:
      
      
      var $32 = HEAP[HEAP[$self_addr] + 40];
      var $33 = HEAP[$pid];
      var $34 = _PyList_Append($32, $33);
      
      if ($34 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      var $39 = HEAP[HEAP[$pid]] - 1;
      
      var $41 = HEAP[$pid];
      HEAP[$41] = $39;
      
      
      
      
      if (HEAP[HEAP[$pid]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $50 = HEAP[HEAP[HEAP[$pid] + 4] + 24];
      var $51 = HEAP[$pid];
      FUNCTION_TABLE[$50]($51);
      __label__ = 11;
      break;
     case 11:
      HEAP[$0] = -1;
      __label__ = 35;
      break;
     case 12:
      __label__ = 26;
      break;
     case 13:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      var $56 = _PyTuple_New(1);
      
      var $58 = HEAP[$self_addr] + 28;
      HEAP[$58] = $56;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 28] + 12] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      
      
      
      var $77 = HEAP[HEAP[HEAP[$self_addr] + 28] + 12];
      
      
      var $80 = HEAP[$77] - 1;
      var $81 = $77;
      HEAP[$81] = $80;
      
      
      
      if (HEAP[$77] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      
      
      
      var $95 = HEAP[HEAP[HEAP[HEAP[HEAP[$self_addr] + 28] + 12] + 4] + 24];
      
      
      
      
      
      
      var $102 = HEAP[HEAP[HEAP[$self_addr] + 28] + 12];
      FUNCTION_TABLE[$95]($102);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      
      var $108 = HEAP[HEAP[$self_addr] + 28] + 12;
      var $109 = HEAP[$pid];
      HEAP[$108] = $109;
      __label__ = 21;
      break;
     case 19:
      
      
      
      var $113 = HEAP[HEAP[$pid]] - 1;
      
      var $115 = HEAP[$pid];
      HEAP[$115] = $113;
      
      
      
      
      if (HEAP[HEAP[$pid]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $124 = HEAP[HEAP[HEAP[$pid] + 4] + 24];
      var $125 = HEAP[$pid];
      FUNCTION_TABLE[$124]($125);
      __label__ = 21;
      break;
     case 21:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 22:
      
      
      var $132 = HEAP[HEAP[$self_addr] + 28];
      
      
      var $135 = HEAP[HEAP[$self_addr] + 40];
      var $136 = _PyObject_Call($135, $132, 0);
      HEAP[$pid] = $136;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 28]] > 1) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 23:
      
      
      var $145 = HEAP[HEAP[$self_addr] + 28];
      
      
      var $148 = HEAP[$145] - 1;
      var $149 = $145;
      HEAP[$149] = $148;
      
      
      
      if (HEAP[$145] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      
      
      var $159 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 28] + 4] + 24];
      
      
      var $162 = HEAP[HEAP[$self_addr] + 28];
      FUNCTION_TABLE[$159]($162);
      __label__ = 25;
      break;
     case 25:
      
      var $164 = HEAP[$self_addr] + 28;
      HEAP[$164] = 0;
      __label__ = 26;
      break;
     case 26:
      
      
      if (HEAP[$pid] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      HEAP[$0] = -1;
      __label__ = 35;
      break;
     case 28:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 29;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 29:
      
      
      var $180 = HEAP[HEAP[$self_addr] + 32];
      var $181 = _Pdata_grow($180);
      
      if ($181 < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 30:
      
      
      
      var $186 = HEAP[HEAP[$pid]] - 1;
      
      var $188 = HEAP[$pid];
      HEAP[$188] = $186;
      
      
      
      
      if (HEAP[HEAP[$pid]] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $197 = HEAP[HEAP[HEAP[$pid] + 4] + 24];
      var $198 = HEAP[$pid];
      FUNCTION_TABLE[$197]($198);
      __label__ = 32;
      break;
     case 32:
      HEAP[$0] = -1;
      __label__ = 35;
      break;
     case 33:
      
      
      
      
      
      
      
      var $206 = HEAP[HEAP[$self_addr] + 32];
      
      var $208 = HEAP[$206 + 8];
      var $209 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $208;
      var $210 = HEAP[$pid];
      HEAP[$209] = $210;
      var $211 = $208 + 1;
      var $212 = $206 + 8;
      HEAP[$212] = $211;
      HEAP[$0] = 0;
      __label__ = 35;
      break;
     case 34:
      var $213 = HEAP[_UnpicklingError];
      _PyErr_SetString($213, __str92);
      HEAP[$0] = -1;
      __label__ = 35;
      break;
     case 35:
      var $214 = HEAP[$0];
      HEAP[$retval] = $214;
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
  function _load_binpersid($self) {
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
      var $pid = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$pid] = 0;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 1:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $15 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16];
      
      
      var $18 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $21 = HEAP[$18 + 8] - 1;
      var $22 = $18 + 8;
      HEAP[$22] = $21;
      
      
      
      var $26 = HEAP[$15 + 4 * HEAP[$18 + 8]];
      HEAP[$pid] = $26;
      __label__ = 4;
      break;
     case 3:
      var $27 = HEAP[_UnpicklingError];
      _PyErr_SetString($27, __str88);
      HEAP[$pid] = 0;
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[$pid] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 34;
      break;
     case 6:
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[HEAP[$self_addr] + 40] + 4] + 84] & 33554432) != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      
      
      var $41 = HEAP[HEAP[$self_addr] + 40];
      var $42 = HEAP[$pid];
      var $43 = _PyList_Append($41, $42);
      
      if ($43 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $48 = HEAP[HEAP[$pid]] - 1;
      
      var $50 = HEAP[$pid];
      HEAP[$50] = $48;
      
      
      
      
      if (HEAP[HEAP[$pid]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $59 = HEAP[HEAP[HEAP[$pid] + 4] + 24];
      var $60 = HEAP[$pid];
      FUNCTION_TABLE[$59]($60);
      __label__ = 10;
      break;
     case 10:
      HEAP[$0] = -1;
      __label__ = 34;
      break;
     case 11:
      __label__ = 27;
      break;
     case 12:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $65 = _PyTuple_New(1);
      
      var $67 = HEAP[$self_addr] + 28;
      HEAP[$67] = $65;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 28] + 12] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      
      
      
      var $86 = HEAP[HEAP[HEAP[$self_addr] + 28] + 12];
      
      
      var $89 = HEAP[$86] - 1;
      var $90 = $86;
      HEAP[$90] = $89;
      
      
      
      if (HEAP[$86] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      
      
      
      
      
      var $104 = HEAP[HEAP[HEAP[HEAP[HEAP[$self_addr] + 28] + 12] + 4] + 24];
      
      
      
      
      
      
      var $111 = HEAP[HEAP[HEAP[$self_addr] + 28] + 12];
      FUNCTION_TABLE[$104]($111);
      __label__ = 17;
      break;
     case 17:
      
      
      
      
      
      var $117 = HEAP[HEAP[$self_addr] + 28] + 12;
      var $118 = HEAP[$pid];
      HEAP[$117] = $118;
      __label__ = 20;
      break;
     case 18:
      
      
      
      var $122 = HEAP[HEAP[$pid]] - 1;
      
      var $124 = HEAP[$pid];
      HEAP[$124] = $122;
      
      
      
      
      if (HEAP[HEAP[$pid]] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $133 = HEAP[HEAP[HEAP[$pid] + 4] + 24];
      var $134 = HEAP[$pid];
      FUNCTION_TABLE[$133]($134);
      __label__ = 20;
      break;
     case 20:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 21:
      
      
      var $141 = HEAP[HEAP[$self_addr] + 28];
      
      
      var $144 = HEAP[HEAP[$self_addr] + 40];
      var $145 = _PyObject_Call($144, $141, 0);
      HEAP[$pid] = $145;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 28]] > 1) {
        __label__ = 22;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 22:
      
      
      var $154 = HEAP[HEAP[$self_addr] + 28];
      
      
      var $157 = HEAP[$154] - 1;
      var $158 = $154;
      HEAP[$158] = $157;
      
      
      
      if (HEAP[$154] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      
      
      var $168 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 28] + 4] + 24];
      
      
      var $171 = HEAP[HEAP[$self_addr] + 28];
      FUNCTION_TABLE[$168]($171);
      __label__ = 24;
      break;
     case 24:
      
      var $173 = HEAP[$self_addr] + 28;
      HEAP[$173] = 0;
      __label__ = 25;
      break;
     case 25:
      
      
      if (HEAP[$pid] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      HEAP[$0] = -1;
      __label__ = 34;
      break;
     case 27:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 28;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 28:
      
      
      var $189 = HEAP[HEAP[$self_addr] + 32];
      var $190 = _Pdata_grow($189);
      
      if ($190 < 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 29:
      
      
      
      var $195 = HEAP[HEAP[$pid]] - 1;
      
      var $197 = HEAP[$pid];
      HEAP[$197] = $195;
      
      
      
      
      if (HEAP[HEAP[$pid]] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $206 = HEAP[HEAP[HEAP[$pid] + 4] + 24];
      var $207 = HEAP[$pid];
      FUNCTION_TABLE[$206]($207);
      __label__ = 31;
      break;
     case 31:
      HEAP[$0] = -1;
      __label__ = 34;
      break;
     case 32:
      
      
      
      
      
      
      
      var $215 = HEAP[HEAP[$self_addr] + 32];
      
      var $217 = HEAP[$215 + 8];
      var $218 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $217;
      var $219 = HEAP[$pid];
      HEAP[$218] = $219;
      var $220 = $217 + 1;
      var $221 = $215 + 8;
      HEAP[$221] = $220;
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 33:
      var $222 = HEAP[_UnpicklingError];
      _PyErr_SetString($222, __str92);
      HEAP[$0] = -1;
      __label__ = 34;
      break;
     case 34:
      var $223 = HEAP[$0];
      HEAP[$retval] = $223;
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
  function _load_pop($self) {
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
      var $len = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      var $5 = HEAP[HEAP[HEAP[$self_addr] + 32] + 8];
      HEAP[$len] = $5;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 52] <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 48] + 4 * (HEAP[HEAP[$self_addr] + 52] - 1)] != HEAP[$len]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $24 = HEAP[HEAP[$self_addr] + 52] - 1;
      
      var $26 = HEAP[$self_addr] + 52;
      HEAP[$26] = $24;
      __label__ = 8;
      break;
     case 3:
      
      
      if (HEAP[$len] > 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      var $30 = HEAP[$len] - 1;
      HEAP[$len] = $30;
      
      
      
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * HEAP[$len]];
      
      
      var $41 = HEAP[$38] - 1;
      var $42 = $38;
      HEAP[$42] = $41;
      
      
      
      if (HEAP[$38] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * HEAP[$len]] + 4] + 24];
      
      
      
      
      
      
      
      var $65 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * HEAP[$len]];
      FUNCTION_TABLE[$57]($65);
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $69 = HEAP[HEAP[$self_addr] + 32] + 8;
      var $70 = HEAP[$len];
      HEAP[$69] = $70;
      __label__ = 8;
      break;
     case 7:
      var $71 = _stackUnderflow();
      HEAP[$0] = $71;
      __label__ = 9;
      break;
     case 8:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 9:
      var $72 = HEAP[$0];
      HEAP[$retval] = $72;
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
  function _load_pop_mark($self) {
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
      var $i = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      var $1 = HEAP[$self_addr];
      var $2 = _marker($1);
      HEAP[$i] = $2;
      
      
      if (HEAP[$i] < 0) {
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
      
      
      var $7 = HEAP[HEAP[$self_addr] + 32];
      var $8 = HEAP[$i];
      var $9 = _Pdata_clear($7, $8);
      HEAP[$0] = 0;
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
  function _load_dup($self) {
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
      var $last = __stackBase__ + 12;
      var $len = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      var $5 = HEAP[HEAP[HEAP[$self_addr] + 32] + 8];
      HEAP[$len] = $5;
      
      
      if (HEAP[$len] <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $8 = _stackUnderflow();
      HEAP[$0] = $8;
      __label__ = 8;
      break;
     case 2:
      
      
      
      
      
      
      
      
      var $17 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * (HEAP[$len] - 1)];
      HEAP[$last] = $17;
      
      
      
      var $21 = HEAP[HEAP[$last]] + 1;
      
      var $23 = HEAP[$last];
      HEAP[$23] = $21;
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      var $37 = HEAP[HEAP[$self_addr] + 32];
      var $38 = _Pdata_grow($37);
      
      if ($38 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $43 = HEAP[HEAP[$last]] - 1;
      
      var $45 = HEAP[$last];
      HEAP[$45] = $43;
      
      
      
      
      if (HEAP[HEAP[$last]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$last] + 4] + 24];
      var $55 = HEAP[$last];
      FUNCTION_TABLE[$54]($55);
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      
      
      
      var $63 = HEAP[HEAP[$self_addr] + 32];
      
      var $65 = HEAP[$63 + 8];
      var $66 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $65;
      var $67 = HEAP[$last];
      HEAP[$66] = $67;
      var $68 = $65 + 1;
      var $69 = $63 + 8;
      HEAP[$69] = $68;
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 8:
      var $70 = HEAP[$0];
      HEAP[$retval] = $70;
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
  function _load_get($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $py_str = __stackBase__ + 12;
      var $value = __stackBase__ + 16;
      var $len = __stackBase__ + 20;
      var $s = __stackBase__ + 24;
      var $rc = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$py_str] = 0;
      HEAP[$value] = 0;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 64];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $s);
      HEAP[$len] = $5;
      
      
      if (HEAP[$len] < 0) {
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
      
      
      if (HEAP[$len] <= 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _bad_readline();
      HEAP[$0] = $10;
      __label__ = 15;
      break;
     case 4:
      
      var $12 = HEAP[$len] - 1;
      var $13 = HEAP[$s];
      var $14 = _PyString_FromStringAndSize($13, $12);
      HEAP[$py_str] = $14;
      
      
      if (HEAP[$py_str] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 15;
      break;
     case 6:
      
      
      var $19 = HEAP[HEAP[$self_addr] + 24];
      var $20 = HEAP[$py_str];
      var $21 = _PyDict_GetItem($19, $20);
      HEAP[$value] = $21;
      
      
      if (HEAP[$value] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $24 = HEAP[_BadPickleGet];
      var $25 = HEAP[$py_str];
      _PyErr_SetObject($24, $25);
      HEAP[$rc] = -1;
      __label__ = 12;
      break;
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      var $39 = HEAP[HEAP[$self_addr] + 32];
      var $40 = _Pdata_grow($39);
      
      if ($40 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = -1;
      __label__ = 15;
      break;
     case 11:
      
      
      
      var $45 = HEAP[HEAP[$value]] + 1;
      
      var $47 = HEAP[$value];
      HEAP[$47] = $45;
      
      
      
      
      
      
      
      var $55 = HEAP[HEAP[$self_addr] + 32];
      
      var $57 = HEAP[$55 + 8];
      var $58 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $57;
      var $59 = HEAP[$value];
      HEAP[$58] = $59;
      var $60 = $57 + 1;
      var $61 = $55 + 8;
      HEAP[$61] = $60;
      HEAP[$rc] = 0;
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $65 = HEAP[HEAP[$py_str]] - 1;
      
      var $67 = HEAP[$py_str];
      HEAP[$67] = $65;
      
      
      
      
      if (HEAP[HEAP[$py_str]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $76 = HEAP[HEAP[HEAP[$py_str] + 4] + 24];
      var $77 = HEAP[$py_str];
      FUNCTION_TABLE[$76]($77);
      __label__ = 14;
      break;
     case 14:
      var $78 = HEAP[$rc];
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
  function _load_binget($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 29;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 29);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $py_key = __stackBase__ + 12;
      var $value = __stackBase__ + 16;
      var $key = __stackBase__ + 20;
      var $s = __stackBase__ + 21;
      var $rc = __stackBase__ + 25;
      
      HEAP[$self_addr] = $self;
      HEAP[$py_key] = 0;
      HEAP[$value] = 0;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 60];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $s, 1);
      
      if ($5 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 2:
      
      
      var $9 = HEAP[HEAP[$s]];
      HEAP[$key] = $9;
      
      var $11 = HEAP[$key];
      var $12 = _PyInt_FromLong($11);
      HEAP[$py_key] = $12;
      
      
      if (HEAP[$py_key] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 4:
      
      
      var $17 = HEAP[HEAP[$self_addr] + 24];
      var $18 = HEAP[$py_key];
      var $19 = _PyDict_GetItem($17, $18);
      HEAP[$value] = $19;
      
      
      if (HEAP[$value] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $22 = HEAP[_BadPickleGet];
      var $23 = HEAP[$py_key];
      _PyErr_SetObject($22, $23);
      HEAP[$rc] = -1;
      __label__ = 10;
      break;
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $37 = HEAP[HEAP[$self_addr] + 32];
      var $38 = _Pdata_grow($37);
      
      if ($38 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 9:
      
      
      
      var $43 = HEAP[HEAP[$value]] + 1;
      
      var $45 = HEAP[$value];
      HEAP[$45] = $43;
      
      
      
      
      
      
      
      var $53 = HEAP[HEAP[$self_addr] + 32];
      
      var $55 = HEAP[$53 + 8];
      var $56 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $55;
      var $57 = HEAP[$value];
      HEAP[$56] = $57;
      var $58 = $55 + 1;
      var $59 = $53 + 8;
      HEAP[$59] = $58;
      HEAP[$rc] = 0;
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $63 = HEAP[HEAP[$py_key]] - 1;
      
      var $65 = HEAP[$py_key];
      HEAP[$65] = $63;
      
      
      
      
      if (HEAP[HEAP[$py_key]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $74 = HEAP[HEAP[HEAP[$py_key] + 4] + 24];
      var $75 = HEAP[$py_key];
      FUNCTION_TABLE[$74]($75);
      __label__ = 12;
      break;
     case 12:
      var $76 = HEAP[$rc];
      HEAP[$0] = $76;
      __label__ = 13;
      break;
     case 13:
      var $77 = HEAP[$0];
      HEAP[$retval] = $77;
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
  function _load_long_binget($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 33;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 33);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $py_key = __stackBase__ + 12;
      var $value = __stackBase__ + 16;
      var $c = __stackBase__ + 20;
      var $s = __stackBase__ + 21;
      var $key = __stackBase__ + 25;
      var $rc = __stackBase__ + 29;
      
      HEAP[$self_addr] = $self;
      HEAP[$py_key] = 0;
      HEAP[$value] = 0;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 60];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $s, 4);
      
      if ($5 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 2:
      
      
      var $9 = HEAP[HEAP[$s]];
      HEAP[$c] = $9;
      
      var $11 = HEAP[$c];
      HEAP[$key] = $11;
      
      
      var $14 = HEAP[HEAP[$s] + 1];
      HEAP[$c] = $14;
      
      
      
      
      var $19 = HEAP[$c] << 8 | HEAP[$key];
      HEAP[$key] = $19;
      
      
      var $22 = HEAP[HEAP[$s] + 2];
      HEAP[$c] = $22;
      
      
      
      
      var $27 = HEAP[$c] << 16 | HEAP[$key];
      HEAP[$key] = $27;
      
      
      var $30 = HEAP[HEAP[$s] + 3];
      HEAP[$c] = $30;
      
      
      
      
      var $35 = HEAP[$c] << 24 | HEAP[$key];
      HEAP[$key] = $35;
      var $36 = HEAP[$key];
      var $37 = _PyInt_FromLong($36);
      HEAP[$py_key] = $37;
      
      
      if (HEAP[$py_key] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 4:
      
      
      var $42 = HEAP[HEAP[$self_addr] + 24];
      var $43 = HEAP[$py_key];
      var $44 = _PyDict_GetItem($42, $43);
      HEAP[$value] = $44;
      
      
      if (HEAP[$value] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $47 = HEAP[_BadPickleGet];
      var $48 = HEAP[$py_key];
      _PyErr_SetObject($47, $48);
      HEAP[$rc] = -1;
      __label__ = 10;
      break;
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $62 = HEAP[HEAP[$self_addr] + 32];
      var $63 = _Pdata_grow($62);
      
      if ($63 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 9:
      
      
      
      var $68 = HEAP[HEAP[$value]] + 1;
      
      var $70 = HEAP[$value];
      HEAP[$70] = $68;
      
      
      
      
      
      
      
      var $78 = HEAP[HEAP[$self_addr] + 32];
      
      var $80 = HEAP[$78 + 8];
      var $81 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $80;
      var $82 = HEAP[$value];
      HEAP[$81] = $82;
      var $83 = $80 + 1;
      var $84 = $78 + 8;
      HEAP[$84] = $83;
      HEAP[$rc] = 0;
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $88 = HEAP[HEAP[$py_key]] - 1;
      
      var $90 = HEAP[$py_key];
      HEAP[$90] = $88;
      
      
      
      
      if (HEAP[HEAP[$py_key]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $99 = HEAP[HEAP[HEAP[$py_key] + 4] + 24];
      var $100 = HEAP[$py_key];
      FUNCTION_TABLE[$99]($100);
      __label__ = 12;
      break;
     case 12:
      var $101 = HEAP[$rc];
      HEAP[$0] = $101;
      __label__ = 13;
      break;
     case 13:
      var $102 = HEAP[$0];
      HEAP[$retval] = $102;
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
  function _load_extension($self, $nbytes) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $nbytes_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $codebytes = __stackBase__ + 16;
      var $code = __stackBase__ + 20;
      var $py_code = __stackBase__ + 24;
      var $obj = __stackBase__ + 28;
      var $pair = __stackBase__ + 32;
      var $module_name = __stackBase__ + 36;
      var $class_name = __stackBase__ + 40;
      
      HEAP[$self_addr] = $self;
      HEAP[$nbytes_addr] = $nbytes;
      
      
      if (HEAP[$nbytes_addr] != 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      if (HEAP[$nbytes_addr] != 2) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      if (HEAP[$nbytes_addr] != 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str93, __str15, 4260, ___PRETTY_FUNCTION___14290);
      throw "Reached an unreachable!";
     case 4:
      
      
      var $9 = HEAP[HEAP[$self_addr] + 60];
      var $10 = HEAP[$self_addr];
      var $11 = HEAP[$nbytes_addr];
      var $12 = FUNCTION_TABLE[$9]($10, $codebytes, $11);
      
      if ($12 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 44;
      break;
     case 6:
      var $14 = HEAP[$codebytes];
      var $15 = HEAP[$nbytes_addr];
      var $16 = _calc_binint($14, $15);
      HEAP[$code] = $16;
      
      
      if (HEAP[$code] <= 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $19 = HEAP[_UnpicklingError];
      _PyErr_SetString($19, __str94);
      HEAP[$0] = -1;
      __label__ = 44;
      break;
     case 8:
      var $20 = HEAP[$code];
      var $21 = _PyInt_FromLong($20);
      HEAP[$py_code] = $21;
      
      
      if (HEAP[$py_code] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = -1;
      __label__ = 44;
      break;
     case 10:
      var $24 = HEAP[_extension_cache];
      var $25 = HEAP[$py_code];
      var $26 = _PyDict_GetItem($24, $25);
      HEAP[$obj] = $26;
      
      
      if (HEAP[$obj] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 11:
      
      
      
      var $32 = HEAP[HEAP[$py_code]] - 1;
      
      var $34 = HEAP[$py_code];
      HEAP[$34] = $32;
      
      
      
      
      if (HEAP[HEAP[$py_code]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $43 = HEAP[HEAP[HEAP[$py_code] + 4] + 24];
      var $44 = HEAP[$py_code];
      FUNCTION_TABLE[$43]($44);
      __label__ = 13;
      break;
     case 13:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      var $58 = HEAP[HEAP[$self_addr] + 32];
      var $59 = _Pdata_grow($58);
      
      if ($59 < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$0] = -1;
      __label__ = 44;
      break;
     case 16:
      
      
      
      var $64 = HEAP[HEAP[$obj]] + 1;
      
      var $66 = HEAP[$obj];
      HEAP[$66] = $64;
      
      
      
      
      
      
      
      var $74 = HEAP[HEAP[$self_addr] + 32];
      
      var $76 = HEAP[$74 + 8];
      var $77 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $76;
      var $78 = HEAP[$obj];
      HEAP[$77] = $78;
      var $79 = $76 + 1;
      var $80 = $74 + 8;
      HEAP[$80] = $79;
      HEAP[$0] = 0;
      __label__ = 44;
      break;
     case 17:
      var $81 = HEAP[_inverted_registry];
      var $82 = HEAP[$py_code];
      var $83 = _PyDict_GetItem($81, $82);
      HEAP[$pair] = $83;
      
      
      if (HEAP[$pair] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      
      
      
      var $89 = HEAP[HEAP[$py_code]] - 1;
      
      var $91 = HEAP[$py_code];
      HEAP[$91] = $89;
      
      
      
      
      if (HEAP[HEAP[$py_code]] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $100 = HEAP[HEAP[HEAP[$py_code] + 4] + 24];
      var $101 = HEAP[$py_code];
      FUNCTION_TABLE[$100]($101);
      __label__ = 20;
      break;
     case 20:
      var $102 = HEAP[_PyExc_ValueError];
      var $103 = HEAP[$code];
      var $104 = _PyErr_Format($102, __str95, allocate([ $103, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 44;
      break;
     case 21:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$pair] + 4] + 84] & 67108864) == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      var $112 = HEAP[$pair];
      var $113 = _PyTuple_Size($112);
      
      if ($113 != 2) {
        __label__ = 25;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      var $119 = HEAP[HEAP[$pair] + 12];
      HEAP[$module_name] = $119;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$module_name] + 4] + 84] & 134217728) == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      var $131 = HEAP[HEAP[$pair] + 12 + 4];
      HEAP[$class_name] = $131;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$class_name] + 4] + 84] & 134217728) == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 25:
      
      
      
      var $142 = HEAP[HEAP[$py_code]] - 1;
      
      var $144 = HEAP[$py_code];
      HEAP[$144] = $142;
      
      
      
      
      if (HEAP[HEAP[$py_code]] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $153 = HEAP[HEAP[HEAP[$py_code] + 4] + 24];
      var $154 = HEAP[$py_code];
      FUNCTION_TABLE[$153]($154);
      __label__ = 27;
      break;
     case 27:
      var $155 = HEAP[_PyExc_ValueError];
      var $156 = HEAP[$code];
      var $157 = _PyErr_Format($155, __str96, allocate([ $156, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 44;
      break;
     case 28:
      
      
      var $160 = HEAP[HEAP[$self_addr] + 76];
      var $161 = HEAP[$module_name];
      var $162 = HEAP[$class_name];
      var $163 = _find_class($161, $162, $160);
      HEAP[$obj] = $163;
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 29:
      
      
      
      var $169 = HEAP[HEAP[$py_code]] - 1;
      
      var $171 = HEAP[$py_code];
      HEAP[$171] = $169;
      
      
      
      
      if (HEAP[HEAP[$py_code]] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $180 = HEAP[HEAP[HEAP[$py_code] + 4] + 24];
      var $181 = HEAP[$py_code];
      FUNCTION_TABLE[$180]($181);
      __label__ = 31;
      break;
     case 31:
      HEAP[$0] = -1;
      __label__ = 44;
      break;
     case 32:
      var $182 = HEAP[_extension_cache];
      var $183 = HEAP[$py_code];
      var $184 = HEAP[$obj];
      var $185 = _PyDict_SetItem($182, $183, $184);
      HEAP[$code] = $185;
      
      
      
      var $189 = HEAP[HEAP[$py_code]] - 1;
      
      var $191 = HEAP[$py_code];
      HEAP[$191] = $189;
      
      
      
      
      if (HEAP[HEAP[$py_code]] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $200 = HEAP[HEAP[HEAP[$py_code] + 4] + 24];
      var $201 = HEAP[$py_code];
      FUNCTION_TABLE[$200]($201);
      __label__ = 34;
      break;
     case 34:
      
      
      if (HEAP[$code] < 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 35:
      
      
      
      var $207 = HEAP[HEAP[$obj]] - 1;
      
      var $209 = HEAP[$obj];
      HEAP[$209] = $207;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      var $218 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $219 = HEAP[$obj];
      FUNCTION_TABLE[$218]($219);
      __label__ = 37;
      break;
     case 37:
      HEAP[$0] = -1;
      __label__ = 44;
      break;
     case 38:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 39;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 39:
      
      
      var $233 = HEAP[HEAP[$self_addr] + 32];
      var $234 = _Pdata_grow($233);
      
      if ($234 < 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 40:
      
      
      
      var $239 = HEAP[HEAP[$obj]] - 1;
      
      var $241 = HEAP[$obj];
      HEAP[$241] = $239;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $250 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $251 = HEAP[$obj];
      FUNCTION_TABLE[$250]($251);
      __label__ = 42;
      break;
     case 42:
      HEAP[$0] = -1;
      __label__ = 44;
      break;
     case 43:
      
      
      
      
      
      
      
      var $259 = HEAP[HEAP[$self_addr] + 32];
      
      var $261 = HEAP[$259 + 8];
      var $262 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $261;
      var $263 = HEAP[$obj];
      HEAP[$262] = $263;
      var $264 = $261 + 1;
      var $265 = $259 + 8;
      HEAP[$265] = $264;
      HEAP[$0] = 0;
      __label__ = 44;
      break;
     case 44:
      var $266 = HEAP[$0];
      HEAP[$retval] = $266;
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
  function _load_put($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $py_str = __stackBase__ + 12;
      var $value = __stackBase__ + 16;
      var $len = __stackBase__ + 20;
      var $l = __stackBase__ + 24;
      var $s = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$py_str] = 0;
      HEAP[$value] = 0;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 64];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $s);
      HEAP[$l] = $5;
      
      
      if (HEAP[$l] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 11;
      break;
     case 2:
      
      
      if (HEAP[$l] <= 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _bad_readline();
      HEAP[$0] = $10;
      __label__ = 11;
      break;
     case 4:
      
      
      
      
      var $15 = HEAP[HEAP[HEAP[$self_addr] + 32] + 8];
      HEAP[$len] = $15;
      
      
      if (HEAP[$len] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $18 = _stackUnderflow();
      HEAP[$0] = $18;
      __label__ = 11;
      break;
     case 6:
      
      var $20 = HEAP[$l] - 1;
      var $21 = HEAP[$s];
      var $22 = _PyString_FromStringAndSize($21, $20);
      HEAP[$py_str] = $22;
      
      
      if (HEAP[$py_str] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = -1;
      __label__ = 11;
      break;
     case 8:
      
      
      
      
      
      
      
      
      var $33 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * (HEAP[$len] - 1)];
      HEAP[$value] = $33;
      
      
      var $36 = HEAP[HEAP[$self_addr] + 24];
      var $37 = HEAP[$py_str];
      var $38 = HEAP[$value];
      var $39 = _PyDict_SetItem($36, $37, $38);
      HEAP[$l] = $39;
      
      
      
      var $43 = HEAP[HEAP[$py_str]] - 1;
      
      var $45 = HEAP[$py_str];
      HEAP[$45] = $43;
      
      
      
      
      if (HEAP[HEAP[$py_str]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$py_str] + 4] + 24];
      var $55 = HEAP[$py_str];
      FUNCTION_TABLE[$54]($55);
      __label__ = 10;
      break;
     case 10:
      var $56 = HEAP[$l];
      HEAP[$0] = $56;
      __label__ = 11;
      break;
     case 11:
      var $57 = HEAP[$0];
      HEAP[$retval] = $57;
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
  function _load_binput($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 29;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 29);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $py_key = __stackBase__ + 12;
      var $value = __stackBase__ + 16;
      var $key = __stackBase__ + 20;
      var $s = __stackBase__ + 21;
      var $len = __stackBase__ + 25;
      
      HEAP[$self_addr] = $self;
      HEAP[$py_key] = 0;
      HEAP[$value] = 0;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 60];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $s, 1);
      
      if ($5 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 9;
      break;
     case 2:
      
      
      
      
      var $11 = HEAP[HEAP[HEAP[$self_addr] + 32] + 8];
      HEAP[$len] = $11;
      
      
      if (HEAP[$len] <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $14 = _stackUnderflow();
      HEAP[$0] = $14;
      __label__ = 9;
      break;
     case 4:
      
      
      var $17 = HEAP[HEAP[$s]];
      HEAP[$key] = $17;
      
      var $19 = HEAP[$key];
      var $20 = _PyInt_FromLong($19);
      HEAP[$py_key] = $20;
      
      
      if (HEAP[$py_key] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 9;
      break;
     case 6:
      
      
      
      
      
      
      
      
      var $31 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * (HEAP[$len] - 1)];
      HEAP[$value] = $31;
      
      
      var $34 = HEAP[HEAP[$self_addr] + 24];
      var $35 = HEAP[$py_key];
      var $36 = HEAP[$value];
      var $37 = _PyDict_SetItem($34, $35, $36);
      HEAP[$len] = $37;
      
      
      
      var $41 = HEAP[HEAP[$py_key]] - 1;
      
      var $43 = HEAP[$py_key];
      HEAP[$43] = $41;
      
      
      
      
      if (HEAP[HEAP[$py_key]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $52 = HEAP[HEAP[HEAP[$py_key] + 4] + 24];
      var $53 = HEAP[$py_key];
      FUNCTION_TABLE[$52]($53);
      __label__ = 8;
      break;
     case 8:
      var $54 = HEAP[$len];
      HEAP[$0] = $54;
      __label__ = 9;
      break;
     case 9:
      var $55 = HEAP[$0];
      HEAP[$retval] = $55;
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
  function _load_long_binput($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 33;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 33);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $py_key = __stackBase__ + 12;
      var $value = __stackBase__ + 16;
      var $key = __stackBase__ + 20;
      var $c = __stackBase__ + 24;
      var $s = __stackBase__ + 25;
      var $len = __stackBase__ + 29;
      
      HEAP[$self_addr] = $self;
      HEAP[$py_key] = 0;
      HEAP[$value] = 0;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 60];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $s, 4);
      
      if ($5 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 9;
      break;
     case 2:
      
      
      
      
      var $11 = HEAP[HEAP[HEAP[$self_addr] + 32] + 8];
      HEAP[$len] = $11;
      
      
      if (HEAP[$len] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $14 = _stackUnderflow();
      HEAP[$0] = $14;
      __label__ = 9;
      break;
     case 4:
      
      
      var $17 = HEAP[HEAP[$s]];
      HEAP[$c] = $17;
      
      var $19 = HEAP[$c];
      HEAP[$key] = $19;
      
      
      var $22 = HEAP[HEAP[$s] + 1];
      HEAP[$c] = $22;
      
      
      
      
      var $27 = HEAP[$c] << 8 | HEAP[$key];
      HEAP[$key] = $27;
      
      
      var $30 = HEAP[HEAP[$s] + 2];
      HEAP[$c] = $30;
      
      
      
      
      var $35 = HEAP[$c] << 16 | HEAP[$key];
      HEAP[$key] = $35;
      
      
      var $38 = HEAP[HEAP[$s] + 3];
      HEAP[$c] = $38;
      
      
      
      
      var $43 = HEAP[$c] << 24 | HEAP[$key];
      HEAP[$key] = $43;
      var $44 = HEAP[$key];
      var $45 = _PyInt_FromLong($44);
      HEAP[$py_key] = $45;
      
      
      if (HEAP[$py_key] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 9;
      break;
     case 6:
      
      
      
      
      
      
      
      
      var $56 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * (HEAP[$len] - 1)];
      HEAP[$value] = $56;
      
      
      var $59 = HEAP[HEAP[$self_addr] + 24];
      var $60 = HEAP[$py_key];
      var $61 = HEAP[$value];
      var $62 = _PyDict_SetItem($59, $60, $61);
      HEAP[$len] = $62;
      
      
      
      var $66 = HEAP[HEAP[$py_key]] - 1;
      
      var $68 = HEAP[$py_key];
      HEAP[$68] = $66;
      
      
      
      
      if (HEAP[HEAP[$py_key]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $77 = HEAP[HEAP[HEAP[$py_key] + 4] + 24];
      var $78 = HEAP[$py_key];
      FUNCTION_TABLE[$77]($78);
      __label__ = 8;
      break;
     case 8:
      var $79 = HEAP[$len];
      HEAP[$0] = $79;
      __label__ = 9;
      break;
     case 9:
      var $80 = HEAP[$0];
      HEAP[$retval] = $80;
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
  function _do_append($self, $x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $x_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $value = __stackBase__ + 16;
      var $list = __stackBase__ + 20;
      var $append_method = __stackBase__ + 24;
      var $len = __stackBase__ + 28;
      var $i = __stackBase__ + 32;
      var $slice = __stackBase__ + 36;
      var $list_len = __stackBase__ + 40;
      var $junk = __stackBase__ + 44;
      
      HEAP[$self_addr] = $self;
      HEAP[$x_addr] = $x;
      HEAP[$value] = 0;
      HEAP[$list] = 0;
      HEAP[$append_method] = 0;
      
      
      
      
      var $5 = HEAP[HEAP[HEAP[$self_addr] + 32] + 8];
      HEAP[$len] = $5;
      
      
      
      if (HEAP[$len] < HEAP[$x_addr]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$x_addr] <= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $11 = _stackUnderflow();
      HEAP[$0] = $11;
      __label__ = 38;
      break;
     case 3:
      
      
      
      if (HEAP[$len] == HEAP[$x_addr]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 38;
      break;
     case 5:
      
      
      
      
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * (HEAP[$x_addr] - 1)];
      HEAP[$list] = $23;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$list] + 4] + 84] & 33554432) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 6:
      
      
      var $33 = HEAP[HEAP[$self_addr] + 32];
      var $34 = HEAP[$x_addr];
      var $35 = _Pdata_popList($33, $34);
      HEAP[$slice] = $35;
      
      
      if (HEAP[$slice] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = -1;
      __label__ = 38;
      break;
     case 8:
      
      
      
      var $41 = HEAP[HEAP[$list] + 8];
      HEAP[$list_len] = $41;
      var $42 = HEAP[$list];
      var $43 = HEAP[$list_len];
      var $44 = HEAP[$list_len];
      var $45 = HEAP[$slice];
      var $46 = _PyList_SetSlice($42, $43, $44, $45);
      HEAP[$i] = $46;
      
      
      
      var $50 = HEAP[HEAP[$slice]] - 1;
      
      var $52 = HEAP[$slice];
      HEAP[$52] = $50;
      
      
      
      
      if (HEAP[HEAP[$slice]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $61 = HEAP[HEAP[HEAP[$slice] + 4] + 24];
      var $62 = HEAP[$slice];
      FUNCTION_TABLE[$61]($62);
      __label__ = 10;
      break;
     case 10:
      var $63 = HEAP[$i];
      HEAP[$0] = $63;
      __label__ = 38;
      break;
     case 11:
      var $64 = HEAP[_append_str];
      var $65 = HEAP[$list];
      var $66 = _PyObject_GetAttr($65, $64);
      HEAP[$append_method] = $66;
      
      
      if (HEAP[$append_method] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$0] = -1;
      __label__ = 38;
      break;
     case 13:
      var $69 = HEAP[$x_addr];
      HEAP[$i] = $69;
      __label__ = 34;
      break;
     case 14:
      
      
      
      
      
      
      
      var $77 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * HEAP[$i]];
      HEAP[$value] = $77;
      HEAP[$junk] = 0;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $82 = _PyTuple_New(1);
      
      var $84 = HEAP[$self_addr] + 28;
      HEAP[$84] = $82;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 16:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 28] + 12] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      
      
      
      var $103 = HEAP[HEAP[HEAP[$self_addr] + 28] + 12];
      
      
      var $106 = HEAP[$103] - 1;
      var $107 = $103;
      HEAP[$107] = $106;
      
      
      
      if (HEAP[$103] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      
      
      
      var $121 = HEAP[HEAP[HEAP[HEAP[HEAP[$self_addr] + 28] + 12] + 4] + 24];
      
      
      
      
      
      
      var $128 = HEAP[HEAP[HEAP[$self_addr] + 28] + 12];
      FUNCTION_TABLE[$121]($128);
      __label__ = 19;
      break;
     case 19:
      
      
      
      
      
      var $134 = HEAP[HEAP[$self_addr] + 28] + 12;
      var $135 = HEAP[$value];
      HEAP[$134] = $135;
      __label__ = 22;
      break;
     case 20:
      
      
      
      var $139 = HEAP[HEAP[$value]] - 1;
      
      var $141 = HEAP[$value];
      HEAP[$141] = $139;
      
      
      
      
      if (HEAP[HEAP[$value]] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $150 = HEAP[HEAP[HEAP[$value] + 4] + 24];
      var $151 = HEAP[$value];
      FUNCTION_TABLE[$150]($151);
      __label__ = 22;
      break;
     case 22:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 23:
      
      
      var $158 = HEAP[HEAP[$self_addr] + 28];
      var $159 = HEAP[$append_method];
      var $160 = _PyObject_Call($159, $158, 0);
      HEAP[$junk] = $160;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 28]] > 1) {
        __label__ = 24;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 24:
      
      
      var $169 = HEAP[HEAP[$self_addr] + 28];
      
      
      var $172 = HEAP[$169] - 1;
      var $173 = $169;
      HEAP[$173] = $172;
      
      
      
      if (HEAP[$169] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      
      
      var $183 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 28] + 4] + 24];
      
      
      var $186 = HEAP[HEAP[$self_addr] + 28];
      FUNCTION_TABLE[$183]($186);
      __label__ = 26;
      break;
     case 26:
      
      var $188 = HEAP[$self_addr] + 28;
      HEAP[$188] = 0;
      __label__ = 27;
      break;
     case 27:
      
      
      if (HEAP[$junk] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 28:
      
      var $192 = HEAP[$i] + 1;
      
      
      var $195 = HEAP[HEAP[$self_addr] + 32];
      var $196 = _Pdata_clear($195, $192);
      
      
      
      var $200 = HEAP[HEAP[$self_addr] + 32] + 8;
      var $201 = HEAP[$x_addr];
      HEAP[$200] = $201;
      
      
      
      var $205 = HEAP[HEAP[$append_method]] - 1;
      
      var $207 = HEAP[$append_method];
      HEAP[$207] = $205;
      
      
      
      
      if (HEAP[HEAP[$append_method]] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $216 = HEAP[HEAP[HEAP[$append_method] + 4] + 24];
      var $217 = HEAP[$append_method];
      FUNCTION_TABLE[$216]($217);
      __label__ = 30;
      break;
     case 30:
      HEAP[$0] = -1;
      __label__ = 38;
      break;
     case 31:
      
      
      
      var $221 = HEAP[HEAP[$junk]] - 1;
      
      var $223 = HEAP[$junk];
      HEAP[$223] = $221;
      
      
      
      
      if (HEAP[HEAP[$junk]] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      var $232 = HEAP[HEAP[HEAP[$junk] + 4] + 24];
      var $233 = HEAP[$junk];
      FUNCTION_TABLE[$232]($233);
      __label__ = 33;
      break;
     case 33:
      
      var $235 = HEAP[$i] + 1;
      HEAP[$i] = $235;
      __label__ = 34;
      break;
     case 34:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      var $242 = HEAP[HEAP[$self_addr] + 32] + 8;
      var $243 = HEAP[$x_addr];
      HEAP[$242] = $243;
      
      
      
      var $247 = HEAP[HEAP[$append_method]] - 1;
      
      var $249 = HEAP[$append_method];
      HEAP[$249] = $247;
      
      
      
      
      if (HEAP[HEAP[$append_method]] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      var $258 = HEAP[HEAP[HEAP[$append_method] + 4] + 24];
      var $259 = HEAP[$append_method];
      FUNCTION_TABLE[$258]($259);
      __label__ = 37;
      break;
     case 37:
      HEAP[$0] = 0;
      __label__ = 38;
      break;
     case 38:
      var $260 = HEAP[$0];
      HEAP[$retval] = $260;
      __label__ = 39;
      break;
     case 39:
      var $retval38 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval38;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_append($self) {
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
      
      HEAP[__stackBase__] = $self;
      
      
      
      
      
      var $6 = HEAP[HEAP[HEAP[__stackBase__] + 32] + 8] - 1;
      var $7 = HEAP[__stackBase__];
      var $8 = _do_append($7, $6);
      HEAP[$0] = $8;
      var $9 = HEAP[$0];
      HEAP[$retval] = $9;
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
  function _load_appends($self) {
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
      var $1 = HEAP[$self_addr];
      var $2 = _marker($1);
      var $3 = HEAP[$self_addr];
      var $4 = _do_append($3, $2);
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
  function _do_setitems($self, $x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $x_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $value = __stackBase__ + 16;
      var $key = __stackBase__ + 20;
      var $dict = __stackBase__ + 24;
      var $len = __stackBase__ + 28;
      var $i = __stackBase__ + 32;
      var $r = __stackBase__ + 36;
      
      HEAP[$self_addr] = $self;
      HEAP[$x_addr] = $x;
      HEAP[$value] = 0;
      HEAP[$key] = 0;
      HEAP[$dict] = 0;
      HEAP[$r] = 0;
      
      
      
      
      var $5 = HEAP[HEAP[HEAP[$self_addr] + 32] + 8];
      HEAP[$len] = $5;
      
      
      
      if (HEAP[$len] < HEAP[$x_addr]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$x_addr] <= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $11 = _stackUnderflow();
      HEAP[$0] = $11;
      __label__ = 9;
      break;
     case 3:
      
      
      
      
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * (HEAP[$x_addr] - 1)];
      HEAP[$dict] = $20;
      
      var $22 = HEAP[$x_addr] + 1;
      HEAP[$i] = $22;
      __label__ = 7;
      break;
     case 4:
      
      
      
      
      
      
      
      
      var $31 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * (HEAP[$i] - 1)];
      HEAP[$key] = $31;
      
      
      
      
      
      
      
      var $39 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * HEAP[$i]];
      HEAP[$value] = $39;
      var $40 = HEAP[$dict];
      var $41 = HEAP[$key];
      var $42 = HEAP[$value];
      var $43 = _PyObject_SetItem($40, $41, $42);
      
      if ($43 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$r] = -1;
      __label__ = 8;
      break;
     case 6:
      
      var $46 = HEAP[$i] + 2;
      HEAP[$i] = $46;
      __label__ = 7;
      break;
     case 7:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      var $52 = HEAP[HEAP[$self_addr] + 32];
      var $53 = HEAP[$x_addr];
      var $54 = _Pdata_clear($52, $53);
      var $55 = HEAP[$r];
      HEAP[$0] = $55;
      __label__ = 9;
      break;
     case 9:
      var $56 = HEAP[$0];
      HEAP[$retval] = $56;
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
  function _load_setitem($self) {
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
      
      HEAP[__stackBase__] = $self;
      
      
      
      
      
      var $6 = HEAP[HEAP[HEAP[__stackBase__] + 32] + 8] - 2;
      var $7 = HEAP[__stackBase__];
      var $8 = _do_setitems($7, $6);
      HEAP[$0] = $8;
      var $9 = HEAP[$0];
      HEAP[$retval] = $9;
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
  function _load_setitems($self) {
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
      var $1 = HEAP[$self_addr];
      var $2 = _marker($1);
      var $3 = HEAP[$self_addr];
      var $4 = _do_setitems($3, $2);
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
  function _load_build($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $state = __stackBase__ + 12;
      var $inst = __stackBase__ + 16;
      var $slotstate = __stackBase__ + 20;
      var $__setstate__ = __stackBase__ + 24;
      var $d_key = __stackBase__ + 28;
      var $d_value = __stackBase__ + 32;
      var $i = __stackBase__ + 36;
      var $res = __stackBase__ + 40;
      var $junk = __stackBase__ + 44;
      var $temp = __stackBase__ + 48;
      var $dict = __stackBase__ + 52;
      
      HEAP[$self_addr] = $self;
      HEAP[$res] = -1;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] <= 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = _stackUnderflow();
      HEAP[$0] = $7;
      __label__ = 65;
      break;
     case 2:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $18 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16];
      
      
      var $21 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $24 = HEAP[$21 + 8] - 1;
      var $25 = $21 + 8;
      HEAP[$25] = $24;
      
      
      
      var $29 = HEAP[$18 + 4 * HEAP[$21 + 8]];
      HEAP[$state] = $29;
      __label__ = 5;
      break;
     case 4:
      var $30 = HEAP[_UnpicklingError];
      _PyErr_SetString($30, __str88);
      HEAP[$state] = 0;
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[$state] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = -1;
      __label__ = 65;
      break;
     case 7:
      
      
      
      
      
      
      
      
      
      
      
      
      var $45 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] - 1)];
      HEAP[$inst] = $45;
      var $46 = HEAP[___setstate___str];
      var $47 = HEAP[$inst];
      var $48 = _PyObject_GetAttr($47, $46);
      HEAP[$__setstate__] = $48;
      
      
      if (HEAP[$__setstate__] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 8:
      HEAP[$junk] = 0;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $55 = _PyTuple_New(1);
      
      var $57 = HEAP[$self_addr] + 28;
      HEAP[$57] = $55;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 28] + 12] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      
      
      
      
      var $76 = HEAP[HEAP[HEAP[$self_addr] + 28] + 12];
      
      
      var $79 = HEAP[$76] - 1;
      var $80 = $76;
      HEAP[$80] = $79;
      
      
      
      if (HEAP[$76] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      
      
      
      var $94 = HEAP[HEAP[HEAP[HEAP[HEAP[$self_addr] + 28] + 12] + 4] + 24];
      
      
      
      
      
      
      var $101 = HEAP[HEAP[HEAP[$self_addr] + 28] + 12];
      FUNCTION_TABLE[$94]($101);
      __label__ = 13;
      break;
     case 13:
      
      
      
      
      
      var $107 = HEAP[HEAP[$self_addr] + 28] + 12;
      var $108 = HEAP[$state];
      HEAP[$107] = $108;
      __label__ = 16;
      break;
     case 14:
      
      
      
      var $112 = HEAP[HEAP[$state]] - 1;
      
      var $114 = HEAP[$state];
      HEAP[$114] = $112;
      
      
      
      
      if (HEAP[HEAP[$state]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $123 = HEAP[HEAP[HEAP[$state] + 4] + 24];
      var $124 = HEAP[$state];
      FUNCTION_TABLE[$123]($124);
      __label__ = 16;
      break;
     case 16:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 17:
      
      
      var $131 = HEAP[HEAP[$self_addr] + 28];
      var $132 = HEAP[$__setstate__];
      var $133 = _PyObject_Call($132, $131, 0);
      HEAP[$junk] = $133;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 28]] > 1) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      
      
      var $142 = HEAP[HEAP[$self_addr] + 28];
      
      
      var $145 = HEAP[$142] - 1;
      var $146 = $142;
      HEAP[$146] = $145;
      
      
      
      if (HEAP[$142] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      
      var $156 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 28] + 4] + 24];
      
      
      var $159 = HEAP[HEAP[$self_addr] + 28];
      FUNCTION_TABLE[$156]($159);
      __label__ = 20;
      break;
     case 20:
      
      var $161 = HEAP[$self_addr] + 28;
      HEAP[$161] = 0;
      __label__ = 21;
      break;
     case 21:
      
      
      
      var $165 = HEAP[HEAP[$__setstate__]] - 1;
      
      var $167 = HEAP[$__setstate__];
      HEAP[$167] = $165;
      
      
      
      
      if (HEAP[HEAP[$__setstate__]] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $176 = HEAP[HEAP[HEAP[$__setstate__] + 4] + 24];
      var $177 = HEAP[$__setstate__];
      FUNCTION_TABLE[$176]($177);
      __label__ = 23;
      break;
     case 23:
      
      
      if (HEAP[$junk] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      HEAP[$0] = -1;
      __label__ = 65;
      break;
     case 25:
      
      
      
      var $183 = HEAP[HEAP[$junk]] - 1;
      
      var $185 = HEAP[$junk];
      HEAP[$185] = $183;
      
      
      
      
      if (HEAP[HEAP[$junk]] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $194 = HEAP[HEAP[HEAP[$junk] + 4] + 24];
      var $195 = HEAP[$junk];
      FUNCTION_TABLE[$194]($195);
      __label__ = 27;
      break;
     case 27:
      HEAP[$0] = 0;
      __label__ = 65;
      break;
     case 28:
      var $196 = HEAP[_PyExc_AttributeError];
      var $197 = _PyErr_ExceptionMatches($196);
      
      if ($197 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      HEAP[$0] = -1;
      __label__ = 65;
      break;
     case 30:
      _PyErr_Clear();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$state] + 4] + 84] & 67108864) == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      var $206 = HEAP[$state];
      var $207 = _PyTuple_Size($206);
      
      if ($207 != 2) {
        __label__ = 35;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      var $209 = HEAP[$state];
      HEAP[$temp] = $209;
      
      
      
      
      var $214 = HEAP[HEAP[$temp] + 12];
      HEAP[$state] = $214;
      
      
      
      
      var $219 = HEAP[HEAP[$temp] + 12 + 4];
      HEAP[$slotstate] = $219;
      
      
      
      var $223 = HEAP[HEAP[$state]] + 1;
      
      var $225 = HEAP[$state];
      HEAP[$225] = $223;
      
      
      
      var $229 = HEAP[HEAP[$slotstate]] + 1;
      
      var $231 = HEAP[$slotstate];
      HEAP[$231] = $229;
      
      
      
      var $235 = HEAP[HEAP[$temp]] - 1;
      
      var $237 = HEAP[$temp];
      HEAP[$237] = $235;
      
      
      
      
      if (HEAP[HEAP[$temp]] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $246 = HEAP[HEAP[HEAP[$temp] + 4] + 24];
      var $247 = HEAP[$temp];
      FUNCTION_TABLE[$246]($247);
      __label__ = 34;
      break;
     case 34:
      __label__ = 36;
      break;
     case 35:
      HEAP[$slotstate] = 0;
      __label__ = 36;
      break;
     case 36:
      
      
      if (HEAP[$state] != __Py_NoneStruct) {
        __label__ = 37;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 37:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$state] + 4] + 84] & 536870912) == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      var $257 = HEAP[_UnpicklingError];
      _PyErr_SetString($257, __str97);
      __label__ = 59;
      break;
     case 39:
      var $258 = HEAP[___dict___str];
      var $259 = HEAP[$inst];
      var $260 = _PyObject_GetAttr($259, $258);
      HEAP[$dict] = $260;
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      HEAP[$i] = 0;
      __label__ = 49;
      break;
     case 41:
      
      
      
      var $266 = HEAP[HEAP[$d_key]] + 1;
      var $267 = HEAP[$d_key];
      HEAP[$267] = $266;
      
      
      
      
      if (HEAP[HEAP[$d_key] + 4] == _PyString_Type) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      _PyString_InternInPlace($d_key);
      __label__ = 43;
      break;
     case 43:
      var $272 = HEAP[$d_value];
      var $273 = HEAP[$d_key];
      var $274 = HEAP[$dict];
      var $275 = _PyObject_SetItem($274, $273, $272);
      
      if ($275 < 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 44:
      var $277 = HEAP[$d_key];
      
      
      var $280 = HEAP[$277] - 1;
      var $281 = $277;
      HEAP[$281] = $280;
      
      
      
      if (HEAP[$277] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      var $289 = HEAP[HEAP[HEAP[$d_key] + 4] + 24];
      var $290 = HEAP[$d_key];
      FUNCTION_TABLE[$289]($290);
      __label__ = 46;
      break;
     case 46:
      __label__ = 59;
      break;
     case 47:
      var $291 = HEAP[$d_key];
      
      
      var $294 = HEAP[$291] - 1;
      var $295 = $291;
      HEAP[$295] = $294;
      
      
      
      if (HEAP[$291] == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      
      
      
      var $303 = HEAP[HEAP[HEAP[$d_key] + 4] + 24];
      var $304 = HEAP[$d_key];
      FUNCTION_TABLE[$303]($304);
      __label__ = 49;
      break;
     case 49:
      var $305 = HEAP[$state];
      var $306 = _PyDict_Next($305, $i, $d_key, $d_value);
      
      if ($306 != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 50:
      
      
      
      var $311 = HEAP[HEAP[$dict]] - 1;
      
      var $313 = HEAP[$dict];
      HEAP[$313] = $311;
      
      
      
      
      if (HEAP[HEAP[$dict]] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      
      
      
      
      var $322 = HEAP[HEAP[HEAP[$dict] + 4] + 24];
      var $323 = HEAP[$dict];
      FUNCTION_TABLE[$322]($323);
      __label__ = 52;
      break;
     case 52:
      
      
      if (HEAP[$slotstate] != 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 53:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$slotstate] + 4] + 84] & 536870912) == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      var $333 = HEAP[_UnpicklingError];
      _PyErr_SetString($333, __str98);
      __label__ = 59;
      break;
     case 55:
      HEAP[$i] = 0;
      __label__ = 57;
      break;
     case 56:
      var $334 = HEAP[$d_value];
      var $335 = HEAP[$d_key];
      var $336 = HEAP[$inst];
      var $337 = _PyObject_SetAttr($336, $335, $334);
      
      if ($337 < 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 57:
      var $339 = HEAP[$slotstate];
      var $340 = _PyDict_Next($339, $i, $d_key, $d_value);
      
      if ($340 != 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 58:
      HEAP[$res] = 0;
      __label__ = 59;
      break;
     case 59:
      
      
      
      var $345 = HEAP[HEAP[$state]] - 1;
      
      var $347 = HEAP[$state];
      HEAP[$347] = $345;
      
      
      
      
      if (HEAP[HEAP[$state]] == 0) {
        __label__ = 60;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 60:
      
      
      
      
      var $356 = HEAP[HEAP[HEAP[$state] + 4] + 24];
      var $357 = HEAP[$state];
      FUNCTION_TABLE[$356]($357);
      __label__ = 61;
      break;
     case 61:
      
      
      if (HEAP[$slotstate] != 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 62:
      
      
      
      var $363 = HEAP[HEAP[$slotstate]] - 1;
      
      var $365 = HEAP[$slotstate];
      HEAP[$365] = $363;
      
      
      
      
      if (HEAP[HEAP[$slotstate]] == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      
      
      
      
      var $374 = HEAP[HEAP[HEAP[$slotstate] + 4] + 24];
      var $375 = HEAP[$slotstate];
      FUNCTION_TABLE[$374]($375);
      __label__ = 64;
      break;
     case 64:
      var $376 = HEAP[$res];
      HEAP[$0] = $376;
      __label__ = 65;
      break;
     case 65:
      var $377 = HEAP[$0];
      HEAP[$retval] = $377;
      __label__ = 66;
      break;
     case 66:
      var $retval64 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval64;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_mark($self) {
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
      var $s = __stackBase__ + 12;
      var $marks = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 52] + 1 >= HEAP[HEAP[$self_addr] + 56]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      
      
      
      var $12 = HEAP[HEAP[$self_addr] + 56] + 20;
      HEAP[$s] = $12;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 52] >= HEAP[$s]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $21 = HEAP[HEAP[$self_addr] + 52] + 1;
      HEAP[$s] = $21;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 48] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $27 = HEAP[$s] * 4;
      var $28 = _malloc($27);
      var $29 = $28;
      HEAP[$marks] = $29;
      __label__ = 6;
      break;
     case 5:
      
      var $31 = HEAP[$s] * 4;
      
      
      
      var $35 = HEAP[HEAP[$self_addr] + 48];
      var $36 = _realloc($35, $31);
      var $37 = $36;
      HEAP[$marks] = $37;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$marks] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $40 = _PyErr_NoMemory();
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 8:
      
      var $42 = HEAP[$self_addr] + 48;
      var $43 = HEAP[$marks];
      HEAP[$42] = $43;
      
      var $45 = HEAP[$self_addr] + 56;
      var $46 = HEAP[$s];
      HEAP[$45] = $46;
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      
      var $52 = HEAP[HEAP[$self_addr] + 52];
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[$self_addr] + 32] + 8];
      var $58 = HEAP[HEAP[$self_addr] + 48] + 4 * $52;
      HEAP[$58] = $57;
      var $59 = $52 + 1;
      
      var $61 = HEAP[$self_addr] + 52;
      HEAP[$61] = $59;
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 10:
      var $62 = HEAP[$0];
      HEAP[$retval] = $62;
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
  function _load_reduce($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $callable = __stackBase__ + 12;
      var $arg_tup = __stackBase__ + 16;
      var $ob = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$callable] = 0;
      HEAP[$arg_tup] = 0;
      HEAP[$ob] = 0;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      var $11 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16];
      
      
      var $14 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $17 = HEAP[$14 + 8] - 1;
      var $18 = $14 + 8;
      HEAP[$18] = $17;
      
      
      
      var $22 = HEAP[$11 + 4 * HEAP[$14 + 8]];
      HEAP[$arg_tup] = $22;
      __label__ = 3;
      break;
     case 2:
      var $23 = HEAP[_UnpicklingError];
      _PyErr_SetString($23, __str88);
      HEAP[$arg_tup] = 0;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$arg_tup] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 21;
      break;
     case 5:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16];
      
      
      var $39 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $42 = HEAP[$39 + 8] - 1;
      var $43 = $39 + 8;
      HEAP[$43] = $42;
      
      
      
      var $47 = HEAP[$36 + 4 * HEAP[$39 + 8]];
      HEAP[$callable] = $47;
      __label__ = 8;
      break;
     case 7:
      var $48 = HEAP[_UnpicklingError];
      _PyErr_SetString($48, __str88);
      HEAP[$callable] = 0;
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$callable] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      var $51 = HEAP[$callable];
      var $52 = HEAP[$arg_tup];
      var $53 = _Instance_New($51, $52);
      HEAP[$ob] = $53;
      
      
      
      var $57 = HEAP[HEAP[$callable]] - 1;
      
      var $59 = HEAP[$callable];
      HEAP[$59] = $57;
      
      
      
      
      if (HEAP[HEAP[$callable]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $68 = HEAP[HEAP[HEAP[$callable] + 4] + 24];
      var $69 = HEAP[$callable];
      FUNCTION_TABLE[$68]($69);
      __label__ = 11;
      break;
     case 11:
      
      
      
      var $73 = HEAP[HEAP[$arg_tup]] - 1;
      
      var $75 = HEAP[$arg_tup];
      HEAP[$75] = $73;
      
      
      
      
      if (HEAP[HEAP[$arg_tup]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $84 = HEAP[HEAP[HEAP[$arg_tup] + 4] + 24];
      var $85 = HEAP[$arg_tup];
      FUNCTION_TABLE[$84]($85);
      __label__ = 13;
      break;
     case 13:
      
      
      if (HEAP[$ob] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = -1;
      __label__ = 21;
      break;
     case 15:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 16:
      
      
      var $101 = HEAP[HEAP[$self_addr] + 32];
      var $102 = _Pdata_grow($101);
      
      if ($102 < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      
      
      
      var $107 = HEAP[HEAP[$ob]] - 1;
      
      var $109 = HEAP[$ob];
      HEAP[$109] = $107;
      
      
      
      
      if (HEAP[HEAP[$ob]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $118 = HEAP[HEAP[HEAP[$ob] + 4] + 24];
      var $119 = HEAP[$ob];
      FUNCTION_TABLE[$118]($119);
      __label__ = 19;
      break;
     case 19:
      HEAP[$0] = -1;
      __label__ = 21;
      break;
     case 20:
      
      
      
      
      
      
      
      var $127 = HEAP[HEAP[$self_addr] + 32];
      
      var $129 = HEAP[$127 + 8];
      var $130 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $129;
      var $131 = HEAP[$ob];
      HEAP[$130] = $131;
      var $132 = $129 + 1;
      var $133 = $127 + 8;
      HEAP[$133] = $132;
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 21:
      var $134 = HEAP[$0];
      HEAP[$retval] = $134;
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
  function _load_proto($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $i = __stackBase__ + 12;
      var $protobyte = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      
      
      var $3 = HEAP[HEAP[__stackBase__] + 60];
      var $4 = HEAP[__stackBase__];
      var $5 = FUNCTION_TABLE[$3]($4, $protobyte, 1);
      HEAP[$i] = $5;
      
      
      if (HEAP[$i] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 7;
      break;
     case 2:
      var $8 = HEAP[$protobyte];
      var $9 = _calc_binint($8, 1);
      HEAP[$i] = $9;
      
      
      if (HEAP[$i] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str99, __str15, 4665, ___PRETTY_FUNCTION___15090);
      throw "Reached an unreachable!";
     case 4:
      
      
      if (HEAP[$i] <= 2) {
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
      var $14 = HEAP[_PyExc_ValueError];
      var $15 = HEAP[$i];
      var $16 = _PyErr_Format($14, __str100, allocate([ $15, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
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
  function _load($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $err = __stackBase__ + 12;
      var $val = __stackBase__ + 16;
      var $s = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$err] = 0;
      HEAP[$val] = 0;
      
      var $2 = HEAP[$self_addr] + 52;
      HEAP[$2] = 0;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $11 = HEAP[HEAP[$self_addr] + 32];
      var $12 = _Pdata_clear($11, 0);
      __label__ = 2;
      break;
     case 2:
      
      
      var $15 = HEAP[HEAP[$self_addr] + 60];
      var $16 = HEAP[$self_addr];
      var $17 = FUNCTION_TABLE[$15]($16, $s, 1);
      
      if ($17 < 0) {
        __label__ = 113;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $21 = HEAP[HEAP[$s]];
      var $22 = reSign($21, 8, 1);
      if ($22 == -128) {
        __label__ = 103;
        break;
      } else if ($22 == -127) {
        __label__ = 56;
        break;
      } else if ($22 == -126) {
        __label__ = 74;
        break;
      } else if ($22 == -125) {
        __label__ = 76;
        break;
      } else if ($22 == -124) {
        __label__ = 78;
        break;
      } else if ($22 == -123) {
        __label__ = 36;
        break;
      } else if ($22 == -122) {
        __label__ = 38;
        break;
      } else if ($22 == -121) {
        __label__ = 40;
        break;
      } else if ($22 == -120) {
        __label__ = 105;
        break;
      } else if ($22 == -119) {
        __label__ = 107;
        break;
      } else if ($22 == -118) {
        __label__ = 16;
        break;
      } else if ($22 == -117) {
        __label__ = 18;
        break;
      } else if ($22 == 0) {
        __label__ = 109;
        break;
      } else if ($22 == 40) {
        __label__ = 80;
        break;
      } else if ($22 == 41) {
        __label__ = 34;
        break;
      } else if ($22 == 46) {
        __label__ = 96;
        break;
      } else if ($22 == 48) {
        __label__ = 88;
        break;
      } else if ($22 == 49) {
        __label__ = 90;
        break;
      } else if ($22 == 50) {
        __label__ = 66;
        break;
      } else if ($22 == 70) {
        __label__ = 20;
        break;
      } else if ($22 == 71) {
        __label__ = 22;
        break;
      } else if ($22 == 73) {
        __label__ = 12;
        break;
      } else if ($22 == 74) {
        __label__ = 6;
        break;
      } else if ($22 == 75) {
        __label__ = 8;
        break;
      } else if ($22 == 76) {
        __label__ = 14;
        break;
      } else if ($22 == 77) {
        __label__ = 10;
        break;
      } else if ($22 == 78) {
        __label__ = 4;
        break;
      } else if ($22 == 80) {
        __label__ = 97;
        break;
      } else if ($22 == 81) {
        __label__ = 99;
        break;
      } else if ($22 == 82) {
        __label__ = 101;
        break;
      } else if ($22 == 83) {
        __label__ = 28;
        break;
      } else if ($22 == 84) {
        __label__ = 24;
        break;
      } else if ($22 == 85) {
        __label__ = 26;
        break;
      } else if ($22 == 86) {
        __label__ = 30;
        break;
      } else if ($22 == 88) {
        __label__ = 32;
        break;
      } else if ($22 == 93) {
        __label__ = 44;
        break;
      } else if ($22 == 97) {
        __label__ = 60;
        break;
      } else if ($22 == 98) {
        __label__ = 64;
        break;
      } else if ($22 == 99) {
        __label__ = 58;
        break;
      } else if ($22 == 100) {
        __label__ = 50;
        break;
      } else if ($22 == 101) {
        __label__ = 62;
        break;
      } else if ($22 == 103) {
        __label__ = 72;
        break;
      } else if ($22 == 104) {
        __label__ = 68;
        break;
      } else if ($22 == 105) {
        __label__ = 54;
        break;
      } else if ($22 == 106) {
        __label__ = 70;
        break;
      } else if ($22 == 108) {
        __label__ = 46;
        break;
      } else if ($22 == 111) {
        __label__ = 52;
        break;
      } else if ($22 == 112) {
        __label__ = 86;
        break;
      } else if ($22 == 113) {
        __label__ = 82;
        break;
      } else if ($22 == 114) {
        __label__ = 84;
        break;
      } else if ($22 == 115) {
        __label__ = 92;
        break;
      } else if ($22 == 116) {
        __label__ = 42;
        break;
      } else if ($22 == 117) {
        __label__ = 94;
        break;
      } else if ($22 == 125) {
        __label__ = 48;
        break;
      } else {
        __label__ = 110;
        break;
      }
     case 4:
      var $23 = HEAP[$self_addr];
      var $24 = _load_none($23);
      
      if ($24 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      __label__ = 112;
      break;
     case 6:
      var $26 = HEAP[$self_addr];
      var $27 = _load_binint($26);
      
      if ($27 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      __label__ = 112;
      break;
     case 8:
      var $29 = HEAP[$self_addr];
      var $30 = _load_binint1($29);
      
      if ($30 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      __label__ = 112;
      break;
     case 10:
      var $32 = HEAP[$self_addr];
      var $33 = _load_binint2($32);
      
      if ($33 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      __label__ = 112;
      break;
     case 12:
      var $35 = HEAP[$self_addr];
      var $36 = _load_int($35);
      
      if ($36 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      __label__ = 112;
      break;
     case 14:
      var $38 = HEAP[$self_addr];
      var $39 = _load_long($38);
      
      if ($39 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      __label__ = 112;
      break;
     case 16:
      var $41 = HEAP[$self_addr];
      var $42 = _load_counted_long($41, 1);
      
      if ($42 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      __label__ = 112;
      break;
     case 18:
      var $44 = HEAP[$self_addr];
      var $45 = _load_counted_long($44, 4);
      
      if ($45 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      __label__ = 112;
      break;
     case 20:
      var $47 = HEAP[$self_addr];
      var $48 = _load_float($47);
      
      if ($48 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      __label__ = 112;
      break;
     case 22:
      var $50 = HEAP[$self_addr];
      var $51 = _load_binfloat($50);
      
      if ($51 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      __label__ = 112;
      break;
     case 24:
      var $53 = HEAP[$self_addr];
      var $54 = _load_binstring($53);
      
      if ($54 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      __label__ = 112;
      break;
     case 26:
      var $56 = HEAP[$self_addr];
      var $57 = _load_short_binstring($56);
      
      if ($57 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      __label__ = 112;
      break;
     case 28:
      var $59 = HEAP[$self_addr];
      var $60 = _load_string($59);
      
      if ($60 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      __label__ = 112;
      break;
     case 30:
      var $62 = HEAP[$self_addr];
      var $63 = _load_unicode($62);
      
      if ($63 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      __label__ = 112;
      break;
     case 32:
      var $65 = HEAP[$self_addr];
      var $66 = _load_binunicode($65);
      
      if ($66 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      __label__ = 112;
      break;
     case 34:
      var $68 = HEAP[$self_addr];
      var $69 = _load_counted_tuple($68, 0);
      
      if ($69 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      __label__ = 112;
      break;
     case 36:
      var $71 = HEAP[$self_addr];
      var $72 = _load_counted_tuple($71, 1);
      
      if ($72 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      __label__ = 112;
      break;
     case 38:
      var $74 = HEAP[$self_addr];
      var $75 = _load_counted_tuple($74, 2);
      
      if ($75 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      __label__ = 112;
      break;
     case 40:
      var $77 = HEAP[$self_addr];
      var $78 = _load_counted_tuple($77, 3);
      
      if ($78 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 41:
      __label__ = 112;
      break;
     case 42:
      var $80 = HEAP[$self_addr];
      var $81 = _load_tuple($80);
      
      if ($81 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      __label__ = 112;
      break;
     case 44:
      var $83 = HEAP[$self_addr];
      var $84 = _load_empty_list($83);
      
      if ($84 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 45:
      __label__ = 112;
      break;
     case 46:
      var $86 = HEAP[$self_addr];
      var $87 = _load_list($86);
      
      if ($87 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 47:
      __label__ = 112;
      break;
     case 48:
      var $89 = HEAP[$self_addr];
      var $90 = _load_empty_dict($89);
      
      if ($90 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 49:
      __label__ = 112;
      break;
     case 50:
      var $92 = HEAP[$self_addr];
      var $93 = _load_dict($92);
      
      if ($93 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 51:
      __label__ = 112;
      break;
     case 52:
      var $95 = HEAP[$self_addr];
      var $96 = _load_obj($95);
      
      if ($96 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 53:
      __label__ = 112;
      break;
     case 54:
      var $98 = HEAP[$self_addr];
      var $99 = _load_inst($98);
      
      if ($99 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 55:
      __label__ = 112;
      break;
     case 56:
      var $101 = HEAP[$self_addr];
      var $102 = _load_newobj($101);
      
      if ($102 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 57:
      __label__ = 112;
      break;
     case 58:
      var $104 = HEAP[$self_addr];
      var $105 = _load_global($104);
      
      if ($105 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 59:
      __label__ = 112;
      break;
     case 60:
      var $107 = HEAP[$self_addr];
      var $108 = _load_append($107);
      
      if ($108 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 61:
      __label__ = 112;
      break;
     case 62:
      var $110 = HEAP[$self_addr];
      var $111 = _load_appends($110);
      
      if ($111 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 63:
      __label__ = 112;
      break;
     case 64:
      var $113 = HEAP[$self_addr];
      var $114 = _load_build($113);
      
      if ($114 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 65:
      __label__ = 112;
      break;
     case 66:
      var $116 = HEAP[$self_addr];
      var $117 = _load_dup($116);
      
      if ($117 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 67:
      __label__ = 112;
      break;
     case 68:
      var $119 = HEAP[$self_addr];
      var $120 = _load_binget($119);
      
      if ($120 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 69:
      __label__ = 112;
      break;
     case 70:
      var $122 = HEAP[$self_addr];
      var $123 = _load_long_binget($122);
      
      if ($123 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 71:
      __label__ = 112;
      break;
     case 72:
      var $125 = HEAP[$self_addr];
      var $126 = _load_get($125);
      
      if ($126 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 73:
      __label__ = 112;
      break;
     case 74:
      var $128 = HEAP[$self_addr];
      var $129 = _load_extension($128, 1);
      
      if ($129 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 75;
        break;
      }
     case 75:
      __label__ = 112;
      break;
     case 76:
      var $131 = HEAP[$self_addr];
      var $132 = _load_extension($131, 2);
      
      if ($132 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 77:
      __label__ = 112;
      break;
     case 78:
      var $134 = HEAP[$self_addr];
      var $135 = _load_extension($134, 4);
      
      if ($135 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 79:
      __label__ = 112;
      break;
     case 80:
      var $137 = HEAP[$self_addr];
      var $138 = _load_mark($137);
      
      if ($138 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 81:
      __label__ = 112;
      break;
     case 82:
      var $140 = HEAP[$self_addr];
      var $141 = _load_binput($140);
      
      if ($141 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 83:
      __label__ = 112;
      break;
     case 84:
      var $143 = HEAP[$self_addr];
      var $144 = _load_long_binput($143);
      
      if ($144 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 85;
        break;
      }
     case 85:
      __label__ = 112;
      break;
     case 86:
      var $146 = HEAP[$self_addr];
      var $147 = _load_put($146);
      
      if ($147 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 87:
      __label__ = 112;
      break;
     case 88:
      var $149 = HEAP[$self_addr];
      var $150 = _load_pop($149);
      
      if ($150 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 89:
      __label__ = 112;
      break;
     case 90:
      var $152 = HEAP[$self_addr];
      var $153 = _load_pop_mark($152);
      
      if ($153 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 91;
        break;
      }
     case 91:
      __label__ = 112;
      break;
     case 92:
      var $155 = HEAP[$self_addr];
      var $156 = _load_setitem($155);
      
      if ($156 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 93;
        break;
      }
     case 93:
      __label__ = 112;
      break;
     case 94:
      var $158 = HEAP[$self_addr];
      var $159 = _load_setitems($158);
      
      if ($159 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 95;
        break;
      }
     case 95:
      __label__ = 112;
      break;
     case 96:
      __label__ = 111;
      break;
     case 97:
      var $161 = HEAP[$self_addr];
      var $162 = _load_persid($161);
      
      if ($162 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 98;
        break;
      }
     case 98:
      __label__ = 112;
      break;
     case 99:
      var $164 = HEAP[$self_addr];
      var $165 = _load_binpersid($164);
      
      if ($165 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 100;
        break;
      }
     case 100:
      __label__ = 112;
      break;
     case 101:
      var $167 = HEAP[$self_addr];
      var $168 = _load_reduce($167);
      
      if ($168 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 102;
        break;
      }
     case 102:
      __label__ = 112;
      break;
     case 103:
      var $170 = HEAP[$self_addr];
      var $171 = _load_proto($170);
      
      if ($171 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 104;
        break;
      }
     case 104:
      __label__ = 112;
      break;
     case 105:
      var $173 = HEAP[$self_addr];
      var $174 = _load_bool($173, __Py_TrueStruct);
      
      if ($174 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 106;
        break;
      }
     case 106:
      __label__ = 112;
      break;
     case 107:
      var $176 = HEAP[$self_addr];
      var $177 = _load_bool($176, __Py_ZeroStruct);
      
      if ($177 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 108;
        break;
      }
     case 108:
      __label__ = 112;
      break;
     case 109:
      var $179 = HEAP[_PyExc_EOFError];
      _PyErr_SetNone($179);
      __label__ = 111;
      break;
     case 110:
      
      
      
      var $183 = HEAP[HEAP[$s]];
      var $184 = HEAP[_UnpicklingError];
      var $185 = _cPickle_ErrFormat($184, __str101, __str102, allocate([ $183, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 121;
      break;
     case 111:
      __label__ = 113;
      break;
     case 112:
      __label__ = 2;
      break;
     case 113:
      var $186 = _PyErr_Occurred();
      HEAP[$err] = $186;
      
      
      if (HEAP[$err] != 0) {
        __label__ = 114;
        break;
      } else {
        __label__ = 117;
        break;
      }
     case 114:
      
      
      
      if (HEAP[$err] == HEAP[_PyExc_EOFError]) {
        __label__ = 115;
        break;
      } else {
        __label__ = 116;
        break;
      }
     case 115:
      var $192 = HEAP[_PyExc_EOFError];
      _PyErr_SetNone($192);
      __label__ = 116;
      break;
     case 116:
      HEAP[$0] = 0;
      __label__ = 121;
      break;
     case 117:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] != 0) {
        __label__ = 118;
        break;
      } else {
        __label__ = 119;
        break;
      }
     case 118:
      
      
      
      
      var $203 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16];
      
      
      var $206 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $209 = HEAP[$206 + 8] - 1;
      var $210 = $206 + 8;
      HEAP[$210] = $209;
      
      
      
      var $214 = HEAP[$203 + 4 * HEAP[$206 + 8]];
      HEAP[$val] = $214;
      __label__ = 120;
      break;
     case 119:
      var $215 = HEAP[_UnpicklingError];
      _PyErr_SetString($215, __str88);
      HEAP[$val] = 0;
      __label__ = 120;
      break;
     case 120:
      var $216 = HEAP[$val];
      HEAP[$0] = $216;
      __label__ = 121;
      break;
     case 121:
      var $217 = HEAP[$0];
      HEAP[$retval] = $217;
      __label__ = 122;
      break;
     case 122:
      var $retval121 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval121;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _noload_obj($self) {
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
      var $i = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      var $1 = HEAP[$self_addr];
      var $2 = _marker($1);
      HEAP[$i] = $2;
      
      
      if (HEAP[$i] < 0) {
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
      
      var $6 = HEAP[$i] + 1;
      
      
      var $9 = HEAP[HEAP[$self_addr] + 32];
      var $10 = _Pdata_clear($9, $6);
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
  function _noload_inst($self) {
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
      var $i = __stackBase__ + 12;
      var $s = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      var $1 = HEAP[$self_addr];
      var $2 = _marker($1);
      HEAP[$i] = $2;
      
      
      if (HEAP[$i] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 2:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 32];
      var $8 = HEAP[$i];
      var $9 = _Pdata_clear($7, $8);
      
      
      var $12 = HEAP[HEAP[$self_addr] + 64];
      var $13 = HEAP[$self_addr];
      var $14 = FUNCTION_TABLE[$12]($13, $s);
      
      if ($14 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 4:
      
      
      var $18 = HEAP[HEAP[$self_addr] + 64];
      var $19 = HEAP[$self_addr];
      var $20 = FUNCTION_TABLE[$18]($19, $s);
      
      if ($20 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $35 = HEAP[HEAP[$self_addr] + 32];
      var $36 = _Pdata_grow($35);
      
      if ($36 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 9:
      
      var $39 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $39;
      
      
      
      
      
      
      
      var $47 = HEAP[HEAP[$self_addr] + 32];
      
      var $49 = HEAP[$47 + 8];
      var $50 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $49;
      HEAP[$50] = __Py_NoneStruct;
      var $51 = $49 + 1;
      var $52 = $47 + 8;
      HEAP[$52] = $51;
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 10:
      var $53 = HEAP[$0];
      HEAP[$retval] = $53;
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
  function _noload_newobj($self) {
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
      var $obj = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      var $11 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16];
      
      
      var $14 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $17 = HEAP[$14 + 8] - 1;
      var $18 = $14 + 8;
      HEAP[$18] = $17;
      
      
      
      var $22 = HEAP[$11 + 4 * HEAP[$14 + 8]];
      HEAP[$obj] = $22;
      __label__ = 3;
      break;
     case 2:
      var $23 = HEAP[_UnpicklingError];
      _PyErr_SetString($23, __str88);
      HEAP[$obj] = 0;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 18;
      break;
     case 5:
      
      
      
      var $29 = HEAP[HEAP[$obj]] - 1;
      
      var $31 = HEAP[$obj];
      HEAP[$31] = $29;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $40 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $41 = HEAP[$obj];
      FUNCTION_TABLE[$40]($41);
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $52 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16];
      
      
      var $55 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $58 = HEAP[$55 + 8] - 1;
      var $59 = $55 + 8;
      HEAP[$59] = $58;
      
      
      
      var $63 = HEAP[$52 + 4 * HEAP[$55 + 8]];
      HEAP[$obj] = $63;
      __label__ = 10;
      break;
     case 9:
      var $64 = HEAP[_UnpicklingError];
      _PyErr_SetString($64, __str88);
      HEAP[$obj] = 0;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = -1;
      __label__ = 18;
      break;
     case 12:
      
      
      
      var $70 = HEAP[HEAP[$obj]] - 1;
      
      var $72 = HEAP[$obj];
      HEAP[$72] = $70;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $81 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $82 = HEAP[$obj];
      FUNCTION_TABLE[$81]($82);
      __label__ = 14;
      break;
     case 14:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      var $96 = HEAP[HEAP[$self_addr] + 32];
      var $97 = _Pdata_grow($96);
      
      if ($97 < 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      HEAP[$0] = -1;
      __label__ = 18;
      break;
     case 17:
      
      var $100 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $100;
      
      
      
      
      
      
      
      var $108 = HEAP[HEAP[$self_addr] + 32];
      
      var $110 = HEAP[$108 + 8];
      var $111 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $110;
      HEAP[$111] = __Py_NoneStruct;
      var $112 = $110 + 1;
      var $113 = $108 + 8;
      HEAP[$113] = $112;
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 18:
      var $114 = HEAP[$0];
      HEAP[$retval] = $114;
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
  function _noload_global($self) {
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
      var $s = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 64];
      var $4 = HEAP[$self_addr];
      var $5 = FUNCTION_TABLE[$3]($4, $s);
      
      if ($5 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 2:
      
      
      var $9 = HEAP[HEAP[$self_addr] + 64];
      var $10 = HEAP[$self_addr];
      var $11 = FUNCTION_TABLE[$9]($10, $s);
      
      if ($11 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      var $26 = HEAP[HEAP[$self_addr] + 32];
      var $27 = _Pdata_grow($26);
      
      if ($27 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 7:
      
      var $30 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $30;
      
      
      
      
      
      
      
      var $38 = HEAP[HEAP[$self_addr] + 32];
      
      var $40 = HEAP[$38 + 8];
      var $41 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $40;
      HEAP[$41] = __Py_NoneStruct;
      var $42 = $40 + 1;
      var $43 = $38 + 8;
      HEAP[$43] = $42;
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 8:
      var $44 = HEAP[$0];
      HEAP[$retval] = $44;
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
  function _noload_reduce($self) {
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
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] <= 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = _stackUnderflow();
      HEAP[$0] = $7;
      __label__ = 6;
      break;
     case 2:
      
      
      
      
      
      var $13 = HEAP[HEAP[HEAP[$self_addr] + 32] + 8] - 2;
      
      
      var $16 = HEAP[HEAP[$self_addr] + 32];
      var $17 = _Pdata_clear($16, $13);
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $31 = HEAP[HEAP[$self_addr] + 32];
      var $32 = _Pdata_grow($31);
      
      if ($32 < 0) {
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
      
      var $35 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $35;
      
      
      
      
      
      
      
      var $43 = HEAP[HEAP[$self_addr] + 32];
      
      var $45 = HEAP[$43 + 8];
      var $46 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $45;
      HEAP[$46] = __Py_NoneStruct;
      var $47 = $45 + 1;
      var $48 = $43 + 8;
      HEAP[$48] = $47;
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 6:
      var $49 = HEAP[$0];
      HEAP[$retval] = $49;
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
  function _noload_build($self) {
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
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = _stackUnderflow();
      HEAP[$0] = $7;
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      
      var $13 = HEAP[HEAP[HEAP[$self_addr] + 32] + 8] - 1;
      
      
      var $16 = HEAP[HEAP[$self_addr] + 32];
      var $17 = _Pdata_clear($16, $13);
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 3:
      var $18 = HEAP[$0];
      HEAP[$retval] = $18;
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
  function _noload_extension($self, $nbytes) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $nbytes_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $codebytes = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$nbytes_addr] = $nbytes;
      
      
      if (HEAP[$nbytes_addr] != 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      if (HEAP[$nbytes_addr] != 2) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      if (HEAP[$nbytes_addr] != 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str93, __str15, 5056, ___PRETTY_FUNCTION___15506);
      throw "Reached an unreachable!";
     case 4:
      
      
      var $9 = HEAP[HEAP[$self_addr] + 60];
      var $10 = HEAP[$self_addr];
      var $11 = HEAP[$nbytes_addr];
      var $12 = FUNCTION_TABLE[$9]($10, $codebytes, $11);
      
      if ($12 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] == HEAP[HEAP[HEAP[$self_addr] + 32] + 12]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $27 = HEAP[HEAP[$self_addr] + 32];
      var $28 = _Pdata_grow($27);
      
      if ($28 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 9:
      
      var $31 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $31;
      
      
      
      
      
      
      
      var $39 = HEAP[HEAP[$self_addr] + 32];
      
      var $41 = HEAP[$39 + 8];
      var $42 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16] + 4 * $41;
      HEAP[$42] = __Py_NoneStruct;
      var $43 = $41 + 1;
      var $44 = $39 + 8;
      HEAP[$44] = $43;
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 10:
      var $45 = HEAP[$0];
      HEAP[$retval] = $45;
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
  function _noload_append($self) {
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
      
      HEAP[__stackBase__] = $self;
      
      
      
      
      
      var $6 = HEAP[HEAP[HEAP[__stackBase__] + 32] + 8] - 1;
      
      
      var $9 = HEAP[HEAP[__stackBase__] + 32];
      var $10 = _Pdata_clear($9, $6);
      HEAP[$0] = $10;
      var $11 = HEAP[$0];
      HEAP[$retval] = $11;
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
  function _noload_appends($self) {
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
      var $i = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      var $1 = HEAP[$self_addr];
      var $2 = _marker($1);
      HEAP[$i] = $2;
      
      
      if (HEAP[$i] < 0) {
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
      
      
      var $7 = HEAP[HEAP[$self_addr] + 32];
      var $8 = HEAP[$i];
      var $9 = _Pdata_clear($7, $8);
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
  function _noload_setitem($self) {
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
      
      HEAP[__stackBase__] = $self;
      
      
      
      
      
      var $6 = HEAP[HEAP[HEAP[__stackBase__] + 32] + 8] - 2;
      
      
      var $9 = HEAP[HEAP[__stackBase__] + 32];
      var $10 = _Pdata_clear($9, $6);
      HEAP[$0] = $10;
      var $11 = HEAP[$0];
      HEAP[$retval] = $11;
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
  function _noload_setitems($self) {
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
      var $i = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      var $1 = HEAP[$self_addr];
      var $2 = _marker($1);
      HEAP[$i] = $2;
      
      
      if (HEAP[$i] < 0) {
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
      
      
      var $7 = HEAP[HEAP[$self_addr] + 32];
      var $8 = HEAP[$i];
      var $9 = _Pdata_clear($7, $8);
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
  function _noload($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $err = __stackBase__ + 12;
      var $val = __stackBase__ + 16;
      var $s = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$err] = 0;
      HEAP[$val] = 0;
      
      var $2 = HEAP[$self_addr] + 52;
      HEAP[$2] = 0;
      
      
      var $5 = HEAP[HEAP[$self_addr] + 32];
      var $6 = _Pdata_clear($5, 0);
      __label__ = 1;
      break;
     case 1:
      
      
      var $9 = HEAP[HEAP[$self_addr] + 60];
      var $10 = HEAP[$self_addr];
      var $11 = FUNCTION_TABLE[$9]($10, $s, 1);
      
      if ($11 < 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $16 = HEAP[HEAP[$s]];
      if ($16 == -128) {
        __label__ = 102;
        break;
      } else if ($16 == -127) {
        __label__ = 55;
        break;
      } else if ($16 == -126) {
        __label__ = 73;
        break;
      } else if ($16 == -125) {
        __label__ = 75;
        break;
      } else if ($16 == -124) {
        __label__ = 77;
        break;
      } else if ($16 == -123) {
        __label__ = 35;
        break;
      } else if ($16 == -122) {
        __label__ = 37;
        break;
      } else if ($16 == -121) {
        __label__ = 39;
        break;
      } else if ($16 == -120) {
        __label__ = 104;
        break;
      } else if ($16 == -119) {
        __label__ = 106;
        break;
      } else if ($16 == -118) {
        __label__ = 15;
        break;
      } else if ($16 == -117) {
        __label__ = 17;
        break;
      } else if ($16 == 40) {
        __label__ = 79;
        break;
      } else if ($16 == 41) {
        __label__ = 33;
        break;
      } else if ($16 == 46) {
        __label__ = 95;
        break;
      } else if ($16 == 48) {
        __label__ = 87;
        break;
      } else if ($16 == 49) {
        __label__ = 89;
        break;
      } else if ($16 == 50) {
        __label__ = 65;
        break;
      } else if ($16 == 70) {
        __label__ = 19;
        break;
      } else if ($16 == 71) {
        __label__ = 21;
        break;
      } else if ($16 == 73) {
        __label__ = 11;
        break;
      } else if ($16 == 74) {
        __label__ = 5;
        break;
      } else if ($16 == 75) {
        __label__ = 7;
        break;
      } else if ($16 == 76) {
        __label__ = 13;
        break;
      } else if ($16 == 77) {
        __label__ = 9;
        break;
      } else if ($16 == 78) {
        __label__ = 3;
        break;
      } else if ($16 == 80) {
        __label__ = 96;
        break;
      } else if ($16 == 81) {
        __label__ = 98;
        break;
      } else if ($16 == 82) {
        __label__ = 100;
        break;
      } else if ($16 == 83) {
        __label__ = 27;
        break;
      } else if ($16 == 84) {
        __label__ = 23;
        break;
      } else if ($16 == 85) {
        __label__ = 25;
        break;
      } else if ($16 == 86) {
        __label__ = 29;
        break;
      } else if ($16 == 88) {
        __label__ = 31;
        break;
      } else if ($16 == 93) {
        __label__ = 43;
        break;
      } else if ($16 == 97) {
        __label__ = 59;
        break;
      } else if ($16 == 98) {
        __label__ = 63;
        break;
      } else if ($16 == 99) {
        __label__ = 57;
        break;
      } else if ($16 == 100) {
        __label__ = 49;
        break;
      } else if ($16 == 101) {
        __label__ = 61;
        break;
      } else if ($16 == 103) {
        __label__ = 71;
        break;
      } else if ($16 == 104) {
        __label__ = 67;
        break;
      } else if ($16 == 105) {
        __label__ = 53;
        break;
      } else if ($16 == 106) {
        __label__ = 69;
        break;
      } else if ($16 == 108) {
        __label__ = 45;
        break;
      } else if ($16 == 111) {
        __label__ = 51;
        break;
      } else if ($16 == 112) {
        __label__ = 85;
        break;
      } else if ($16 == 113) {
        __label__ = 81;
        break;
      } else if ($16 == 114) {
        __label__ = 83;
        break;
      } else if ($16 == 115) {
        __label__ = 91;
        break;
      } else if ($16 == 116) {
        __label__ = 41;
        break;
      } else if ($16 == 117) {
        __label__ = 93;
        break;
      } else if ($16 == 125) {
        __label__ = 47;
        break;
      } else {
        __label__ = 108;
        break;
      }
     case 3:
      var $17 = HEAP[$self_addr];
      var $18 = _load_none($17);
      
      if ($18 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      __label__ = 110;
      break;
     case 5:
      var $20 = HEAP[$self_addr];
      var $21 = _load_binint($20);
      
      if ($21 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      __label__ = 110;
      break;
     case 7:
      var $23 = HEAP[$self_addr];
      var $24 = _load_binint1($23);
      
      if ($24 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      __label__ = 110;
      break;
     case 9:
      var $26 = HEAP[$self_addr];
      var $27 = _load_binint2($26);
      
      if ($27 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      __label__ = 110;
      break;
     case 11:
      var $29 = HEAP[$self_addr];
      var $30 = _load_int($29);
      
      if ($30 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      __label__ = 110;
      break;
     case 13:
      var $32 = HEAP[$self_addr];
      var $33 = _load_long($32);
      
      if ($33 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      __label__ = 110;
      break;
     case 15:
      var $35 = HEAP[$self_addr];
      var $36 = _load_counted_long($35, 1);
      
      if ($36 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      __label__ = 110;
      break;
     case 17:
      var $38 = HEAP[$self_addr];
      var $39 = _load_counted_long($38, 4);
      
      if ($39 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      __label__ = 110;
      break;
     case 19:
      var $41 = HEAP[$self_addr];
      var $42 = _load_float($41);
      
      if ($42 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      __label__ = 110;
      break;
     case 21:
      var $44 = HEAP[$self_addr];
      var $45 = _load_binfloat($44);
      
      if ($45 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      __label__ = 110;
      break;
     case 23:
      var $47 = HEAP[$self_addr];
      var $48 = _load_binstring($47);
      
      if ($48 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      __label__ = 110;
      break;
     case 25:
      var $50 = HEAP[$self_addr];
      var $51 = _load_short_binstring($50);
      
      if ($51 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      __label__ = 110;
      break;
     case 27:
      var $53 = HEAP[$self_addr];
      var $54 = _load_string($53);
      
      if ($54 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      __label__ = 110;
      break;
     case 29:
      var $56 = HEAP[$self_addr];
      var $57 = _load_unicode($56);
      
      if ($57 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      __label__ = 110;
      break;
     case 31:
      var $59 = HEAP[$self_addr];
      var $60 = _load_binunicode($59);
      
      if ($60 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      __label__ = 110;
      break;
     case 33:
      var $62 = HEAP[$self_addr];
      var $63 = _load_counted_tuple($62, 0);
      
      if ($63 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      __label__ = 110;
      break;
     case 35:
      var $65 = HEAP[$self_addr];
      var $66 = _load_counted_tuple($65, 1);
      
      if ($66 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      __label__ = 110;
      break;
     case 37:
      var $68 = HEAP[$self_addr];
      var $69 = _load_counted_tuple($68, 2);
      
      if ($69 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      __label__ = 110;
      break;
     case 39:
      var $71 = HEAP[$self_addr];
      var $72 = _load_counted_tuple($71, 3);
      
      if ($72 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      __label__ = 110;
      break;
     case 41:
      var $74 = HEAP[$self_addr];
      var $75 = _load_tuple($74);
      
      if ($75 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      __label__ = 110;
      break;
     case 43:
      var $77 = HEAP[$self_addr];
      var $78 = _load_empty_list($77);
      
      if ($78 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      __label__ = 110;
      break;
     case 45:
      var $80 = HEAP[$self_addr];
      var $81 = _load_list($80);
      
      if ($81 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 46:
      __label__ = 110;
      break;
     case 47:
      var $83 = HEAP[$self_addr];
      var $84 = _load_empty_dict($83);
      
      if ($84 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      __label__ = 110;
      break;
     case 49:
      var $86 = HEAP[$self_addr];
      var $87 = _load_dict($86);
      
      if ($87 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 50:
      __label__ = 110;
      break;
     case 51:
      var $89 = HEAP[$self_addr];
      var $90 = _noload_obj($89);
      
      if ($90 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 52:
      __label__ = 110;
      break;
     case 53:
      var $92 = HEAP[$self_addr];
      var $93 = _noload_inst($92);
      
      if ($93 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 54:
      __label__ = 110;
      break;
     case 55:
      var $95 = HEAP[$self_addr];
      var $96 = _noload_newobj($95);
      
      if ($96 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 56:
      __label__ = 110;
      break;
     case 57:
      var $98 = HEAP[$self_addr];
      var $99 = _noload_global($98);
      
      if ($99 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 58:
      __label__ = 110;
      break;
     case 59:
      var $101 = HEAP[$self_addr];
      var $102 = _noload_append($101);
      
      if ($102 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 60:
      __label__ = 110;
      break;
     case 61:
      var $104 = HEAP[$self_addr];
      var $105 = _noload_appends($104);
      
      if ($105 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 62:
      __label__ = 110;
      break;
     case 63:
      var $107 = HEAP[$self_addr];
      var $108 = _noload_build($107);
      
      if ($108 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 64:
      __label__ = 110;
      break;
     case 65:
      var $110 = HEAP[$self_addr];
      var $111 = _load_dup($110);
      
      if ($111 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 66:
      __label__ = 110;
      break;
     case 67:
      var $113 = HEAP[$self_addr];
      var $114 = _load_binget($113);
      
      if ($114 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 68:
      __label__ = 110;
      break;
     case 69:
      var $116 = HEAP[$self_addr];
      var $117 = _load_long_binget($116);
      
      if ($117 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 70:
      __label__ = 110;
      break;
     case 71:
      var $119 = HEAP[$self_addr];
      var $120 = _load_get($119);
      
      if ($120 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 72:
      __label__ = 110;
      break;
     case 73:
      var $122 = HEAP[$self_addr];
      var $123 = _noload_extension($122, 1);
      
      if ($123 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 74:
      __label__ = 110;
      break;
     case 75:
      var $125 = HEAP[$self_addr];
      var $126 = _noload_extension($125, 2);
      
      if ($126 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 76:
      __label__ = 110;
      break;
     case 77:
      var $128 = HEAP[$self_addr];
      var $129 = _noload_extension($128, 4);
      
      if ($129 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 78:
      __label__ = 110;
      break;
     case 79:
      var $131 = HEAP[$self_addr];
      var $132 = _load_mark($131);
      
      if ($132 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 80:
      __label__ = 110;
      break;
     case 81:
      var $134 = HEAP[$self_addr];
      var $135 = _load_binput($134);
      
      if ($135 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 82:
      __label__ = 110;
      break;
     case 83:
      var $137 = HEAP[$self_addr];
      var $138 = _load_long_binput($137);
      
      if ($138 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 84;
        break;
      }
     case 84:
      __label__ = 110;
      break;
     case 85:
      var $140 = HEAP[$self_addr];
      var $141 = _load_put($140);
      
      if ($141 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 86:
      __label__ = 110;
      break;
     case 87:
      var $143 = HEAP[$self_addr];
      var $144 = _load_pop($143);
      
      if ($144 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 88;
        break;
      }
     case 88:
      __label__ = 110;
      break;
     case 89:
      var $146 = HEAP[$self_addr];
      var $147 = _load_pop_mark($146);
      
      if ($147 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 90;
        break;
      }
     case 90:
      __label__ = 110;
      break;
     case 91:
      var $149 = HEAP[$self_addr];
      var $150 = _noload_setitem($149);
      
      if ($150 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 92;
        break;
      }
     case 92:
      __label__ = 110;
      break;
     case 93:
      var $152 = HEAP[$self_addr];
      var $153 = _noload_setitems($152);
      
      if ($153 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 94;
        break;
      }
     case 94:
      __label__ = 110;
      break;
     case 95:
      __label__ = 109;
      break;
     case 96:
      var $155 = HEAP[$self_addr];
      var $156 = _load_persid($155);
      
      if ($156 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 97;
        break;
      }
     case 97:
      __label__ = 110;
      break;
     case 98:
      var $158 = HEAP[$self_addr];
      var $159 = _load_binpersid($158);
      
      if ($159 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 99;
        break;
      }
     case 99:
      __label__ = 110;
      break;
     case 100:
      var $161 = HEAP[$self_addr];
      var $162 = _noload_reduce($161);
      
      if ($162 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 101;
        break;
      }
     case 101:
      __label__ = 110;
      break;
     case 102:
      var $164 = HEAP[$self_addr];
      var $165 = _load_proto($164);
      
      if ($165 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 103;
        break;
      }
     case 103:
      __label__ = 110;
      break;
     case 104:
      var $167 = HEAP[$self_addr];
      var $168 = _load_bool($167, __Py_TrueStruct);
      
      if ($168 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 105;
        break;
      }
     case 105:
      __label__ = 110;
      break;
     case 106:
      var $170 = HEAP[$self_addr];
      var $171 = _load_bool($170, __Py_ZeroStruct);
      
      if ($171 < 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 107;
        break;
      }
     case 107:
      __label__ = 110;
      break;
     case 108:
      
      
      
      var $176 = HEAP[HEAP[$s]];
      var $177 = HEAP[_UnpicklingError];
      var $178 = _cPickle_ErrFormat($177, __str101, __str102, allocate([ $176, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 119;
      break;
     case 109:
      __label__ = 111;
      break;
     case 110:
      __label__ = 1;
      break;
     case 111:
      var $179 = _PyErr_Occurred();
      HEAP[$err] = $179;
      
      
      if (HEAP[$err] != 0) {
        __label__ = 112;
        break;
      } else {
        __label__ = 115;
        break;
      }
     case 112:
      
      
      
      if (HEAP[$err] == HEAP[_PyExc_EOFError]) {
        __label__ = 113;
        break;
      } else {
        __label__ = 114;
        break;
      }
     case 113:
      var $185 = HEAP[_PyExc_EOFError];
      _PyErr_SetNone($185);
      __label__ = 114;
      break;
     case 114:
      HEAP[$0] = 0;
      __label__ = 119;
      break;
     case 115:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 32] + 8] != 0) {
        __label__ = 116;
        break;
      } else {
        __label__ = 117;
        break;
      }
     case 116:
      
      
      
      
      var $196 = HEAP[HEAP[HEAP[$self_addr] + 32] + 16];
      
      
      var $199 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $202 = HEAP[$199 + 8] - 1;
      var $203 = $199 + 8;
      HEAP[$203] = $202;
      
      
      
      var $207 = HEAP[$196 + 4 * HEAP[$199 + 8]];
      HEAP[$val] = $207;
      __label__ = 118;
      break;
     case 117:
      var $208 = HEAP[_UnpicklingError];
      _PyErr_SetString($208, __str88);
      HEAP[$val] = 0;
      __label__ = 118;
      break;
     case 118:
      var $209 = HEAP[$val];
      HEAP[$0] = $209;
      __label__ = 119;
      break;
     case 119:
      var $210 = HEAP[$0];
      HEAP[$retval] = $210;
      __label__ = 120;
      break;
     case 120:
      var $retval119 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval119;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Unpickler_load($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      var $1 = HEAP[$self_addr];
      var $2 = _load($1);
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
  function _Unpickler_noload($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      var $1 = HEAP[$self_addr];
      var $2 = _noload($1);
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
  function _newUnpicklerobject($f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $f_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $self = __stackBase__ + 12;
      
      HEAP[$f_addr] = $f;
      var $1 = __PyObject_GC_New(_Unpicklertype);
      
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
      __label__ = 18;
      break;
     case 2:
      
      var $6 = HEAP[$self] + 12;
      HEAP[$6] = 0;
      
      var $8 = HEAP[$self] + 28;
      HEAP[$8] = 0;
      var $9 = _Pdata_New();
      
      
      var $12 = HEAP[$self] + 32;
      HEAP[$12] = $9;
      
      var $14 = HEAP[$self] + 40;
      HEAP[$14] = 0;
      
      var $16 = HEAP[$self] + 44;
      HEAP[$16] = 0;
      
      var $18 = HEAP[$self] + 48;
      HEAP[$18] = 0;
      
      var $20 = HEAP[$self] + 52;
      HEAP[$20] = 0;
      
      var $22 = HEAP[$self] + 56;
      HEAP[$22] = 0;
      
      var $24 = HEAP[$self] + 68;
      HEAP[$24] = 0;
      
      var $26 = HEAP[$self] + 20;
      HEAP[$26] = 0;
      
      var $28 = HEAP[$self] + 16;
      HEAP[$28] = 0;
      
      var $30 = HEAP[$self] + 76;
      HEAP[$30] = 0;
      var $31 = _PyDict_New();
      
      var $33 = HEAP[$self] + 24;
      HEAP[$33] = $31;
      
      
      
      
      if (HEAP[HEAP[$self] + 24] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      if (HEAP[HEAP[$self] + 32] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $45 = HEAP[HEAP[$f_addr]] + 1;
      
      var $47 = HEAP[$f_addr];
      HEAP[$47] = $45;
      
      var $49 = HEAP[$self] + 12;
      var $50 = HEAP[$f_addr];
      HEAP[$49] = $50;
      
      
      
      
      if (HEAP[HEAP[$f_addr] + 4] == _PyFile_Type) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      var $57 = HEAP[HEAP[$f_addr] + 4];
      var $58 = _PyType_IsSubtype($57, _PyFile_Type);
      
      if ($58 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      var $60 = HEAP[$f_addr];
      var $61 = _PyFile_AsFile($60);
      
      var $63 = HEAP[$self] + 8;
      HEAP[$63] = $61;
      
      
      
      
      if (HEAP[HEAP[$self] + 8] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $68 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($68, __str61);
      __label__ = 15;
      break;
     case 8:
      
      var $70 = HEAP[$self] + 60;
      HEAP[$70] = FUNCTION_TABLE_OFFSET + 12;
      
      var $72 = HEAP[$self] + 64;
      HEAP[$72] = FUNCTION_TABLE_OFFSET + 14;
      __label__ = 14;
      break;
     case 9:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$f_addr] + 4] == HEAP[HEAP[_PycStringIO] + 24]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $81 = HEAP[$self] + 8;
      HEAP[$81] = 0;
      
      var $83 = HEAP[$self] + 60;
      HEAP[$83] = FUNCTION_TABLE_OFFSET + 16;
      
      var $85 = HEAP[$self] + 64;
      HEAP[$85] = FUNCTION_TABLE_OFFSET + 18;
      __label__ = 14;
      break;
     case 11:
      
      var $87 = HEAP[$self] + 8;
      HEAP[$87] = 0;
      
      var $89 = HEAP[$self] + 60;
      HEAP[$89] = FUNCTION_TABLE_OFFSET + 20;
      
      var $91 = HEAP[$self] + 64;
      HEAP[$91] = FUNCTION_TABLE_OFFSET + 22;
      var $92 = HEAP[_readline_str];
      var $93 = HEAP[$f_addr];
      var $94 = _PyObject_GetAttr($93, $92);
      
      var $96 = HEAP[$self] + 16;
      HEAP[$96] = $94;
      
      
      
      
      if (HEAP[HEAP[$self] + 16] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $101 = HEAP[_read_str];
      var $102 = HEAP[$f_addr];
      var $103 = _PyObject_GetAttr($102, $101);
      
      var $105 = HEAP[$self] + 20;
      HEAP[$105] = $103;
      
      
      
      
      if (HEAP[HEAP[$self] + 20] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      _PyErr_Clear();
      var $110 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($110, __str107);
      __label__ = 15;
      break;
     case 14:
      
      var $112 = HEAP[$self];
      _PyObject_GC_Track($112);
      var $113 = HEAP[$self];
      HEAP[$0] = $113;
      __label__ = 18;
      break;
     case 15:
      
      var $115 = HEAP[$self];
      
      
      var $118 = HEAP[$115] - 1;
      var $119 = $115;
      HEAP[$119] = $118;
      
      
      
      if (HEAP[$115] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      var $128 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $130 = HEAP[$self];
      FUNCTION_TABLE[$128]($130);
      __label__ = 17;
      break;
     case 17:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 18:
      var $131 = HEAP[$0];
      HEAP[$retval] = $131;
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
  function _get_Unpickler($self, $file) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $file_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $self;
      HEAP[$file_addr] = $file;
      var $1 = HEAP[$file_addr];
      var $2 = _newUnpicklerobject($1);
      var $3 = $2;
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
  function _Unpickler_dealloc($self) {
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
      
      var $1 = HEAP[$self_addr];
      _PyObject_GC_UnTrack($1);
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$self_addr] + 16];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 16] + 4] + 24];
      
      
      var $25 = HEAP[HEAP[$self_addr] + 16];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$self_addr] + 20];
      
      
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
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 4] + 24];
      
      
      var $49 = HEAP[HEAP[$self_addr] + 20];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $56 = HEAP[HEAP[$self_addr] + 12];
      
      
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
      
      
      
      
      
      
      var $70 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 12] + 4] + 24];
      
      
      var $73 = HEAP[HEAP[$self_addr] + 12];
      FUNCTION_TABLE[$70]($73);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $80 = HEAP[HEAP[$self_addr] + 24];
      
      
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
      
      
      
      
      
      
      var $94 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 24] + 4] + 24];
      
      
      var $97 = HEAP[HEAP[$self_addr] + 24];
      FUNCTION_TABLE[$94]($97);
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
      
      
      
      var $105 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $108 = HEAP[$105] - 1;
      var $109 = $105;
      HEAP[$109] = $108;
      
      
      
      if (HEAP[$105] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      
      
      var $120 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 4] + 24];
      
      
      
      var $124 = HEAP[HEAP[$self_addr] + 32];
      FUNCTION_TABLE[$120]($124);
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      var $131 = HEAP[HEAP[$self_addr] + 40];
      
      
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
      
      
      
      
      
      
      var $145 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 40] + 4] + 24];
      
      
      var $148 = HEAP[HEAP[$self_addr] + 40];
      FUNCTION_TABLE[$145]($148);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $155 = HEAP[HEAP[$self_addr] + 28];
      
      
      var $158 = HEAP[$155] - 1;
      var $159 = $155;
      HEAP[$159] = $158;
      
      
      
      if (HEAP[$155] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      
      
      var $169 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 28] + 4] + 24];
      
      
      var $172 = HEAP[HEAP[$self_addr] + 28];
      FUNCTION_TABLE[$169]($172);
      __label__ = 21;
      break;
     case 21:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      var $179 = HEAP[HEAP[$self_addr] + 44];
      
      
      var $182 = HEAP[$179] - 1;
      var $183 = $179;
      HEAP[$183] = $182;
      
      
      
      if (HEAP[$179] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      
      
      var $193 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 44] + 4] + 24];
      
      
      var $196 = HEAP[HEAP[$self_addr] + 44];
      FUNCTION_TABLE[$193]($196);
      __label__ = 24;
      break;
     case 24:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 76] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      var $203 = HEAP[HEAP[$self_addr] + 76];
      
      
      var $206 = HEAP[$203] - 1;
      var $207 = $203;
      HEAP[$207] = $206;
      
      
      
      if (HEAP[$203] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      
      
      var $217 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 76] + 4] + 24];
      
      
      var $220 = HEAP[HEAP[$self_addr] + 76];
      FUNCTION_TABLE[$217]($220);
      __label__ = 27;
      break;
     case 27:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 48] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      var $228 = HEAP[HEAP[$self_addr] + 48];
      _free($228);
      __label__ = 29;
      break;
     case 29:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 68] != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      var $235 = HEAP[HEAP[$self_addr] + 72];
      _free($235);
      __label__ = 31;
      break;
     case 31:
      
      
      
      
      
      var $241 = HEAP[HEAP[HEAP[$self_addr] + 4] + 160];
      
      var $243 = HEAP[$self_addr];
      FUNCTION_TABLE[$241]($243);
      __label__ = 32;
      break;
     case 32:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Unpickler_traverse($self, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 56);
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
      var $vret4 = __stackBase__ + 24;
      var $vret8 = __stackBase__ + 28;
      var $vret12 = __stackBase__ + 32;
      var $vret16 = __stackBase__ + 36;
      var $vret20 = __stackBase__ + 40;
      var $vret24 = __stackBase__ + 44;
      var $vret28 = __stackBase__ + 48;
      var $vret32 = __stackBase__ + 52;
      
      HEAP[$self_addr] = $self;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 16];
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
      __label__ = 28;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[HEAP[$self_addr] + 20];
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
      __label__ = 28;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $33 = HEAP[HEAP[$self_addr] + 12];
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
      __label__ = 28;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $46 = HEAP[HEAP[$self_addr] + 24];
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
      __label__ = 28;
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
      
      
      
      var $60 = HEAP[HEAP[$self_addr] + 32];
      var $61 = HEAP[$visit_addr];
      var $62 = HEAP[$arg_addr];
      var $63 = FUNCTION_TABLE[$61]($60, $62);
      HEAP[$vret16] = $63;
      
      
      if (HEAP[$vret16] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $66 = HEAP[$vret16];
      HEAP[$0] = $66;
      __label__ = 28;
      break;
     case 15:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      var $73 = HEAP[HEAP[$self_addr] + 40];
      var $74 = HEAP[$visit_addr];
      var $75 = HEAP[$arg_addr];
      var $76 = FUNCTION_TABLE[$74]($73, $75);
      HEAP[$vret20] = $76;
      
      
      if (HEAP[$vret20] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $79 = HEAP[$vret20];
      HEAP[$0] = $79;
      __label__ = 28;
      break;
     case 18:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $86 = HEAP[HEAP[$self_addr] + 28];
      var $87 = HEAP[$visit_addr];
      var $88 = HEAP[$arg_addr];
      var $89 = FUNCTION_TABLE[$87]($86, $88);
      HEAP[$vret24] = $89;
      
      
      if (HEAP[$vret24] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $92 = HEAP[$vret24];
      HEAP[$0] = $92;
      __label__ = 28;
      break;
     case 21:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      var $99 = HEAP[HEAP[$self_addr] + 44];
      var $100 = HEAP[$visit_addr];
      var $101 = HEAP[$arg_addr];
      var $102 = FUNCTION_TABLE[$100]($99, $101);
      HEAP[$vret28] = $102;
      
      
      if (HEAP[$vret28] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      var $105 = HEAP[$vret28];
      HEAP[$0] = $105;
      __label__ = 28;
      break;
     case 24:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 76] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      var $112 = HEAP[HEAP[$self_addr] + 76];
      var $113 = HEAP[$visit_addr];
      var $114 = HEAP[$arg_addr];
      var $115 = FUNCTION_TABLE[$113]($112, $114);
      HEAP[$vret32] = $115;
      
      
      if (HEAP[$vret32] != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      var $118 = HEAP[$vret32];
      HEAP[$0] = $118;
      __label__ = 28;
      break;
     case 27:
      HEAP[$0] = 0;
      __label__ = 28;
      break;
     case 28:
      var $119 = HEAP[$0];
      HEAP[$retval] = $119;
      __label__ = 29;
      break;
     case 29:
      var $retval36 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval36;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Unpickler_clear($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $_py_tmp = __stackBase__ + 12;
      var $_py_tmp4 = __stackBase__ + 16;
      var $_py_tmp8 = __stackBase__ + 20;
      var $_py_tmp12 = __stackBase__ + 24;
      var $_py_tmp16 = __stackBase__ + 28;
      var $_py_tmp20 = __stackBase__ + 32;
      var $_py_tmp24 = __stackBase__ + 36;
      var $_py_tmp28 = __stackBase__ + 40;
      var $_py_tmp32 = __stackBase__ + 44;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 16];
      HEAP[$_py_tmp] = $7;
      
      var $9 = HEAP[$self_addr] + 16;
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[HEAP[$self_addr] + 20];
      HEAP[$_py_tmp4] = $32;
      
      var $34 = HEAP[$self_addr] + 20;
      HEAP[$34] = 0;
      
      
      
      var $38 = HEAP[HEAP[$_py_tmp4]] - 1;
      
      var $40 = HEAP[$_py_tmp4];
      HEAP[$40] = $38;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp4]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[$_py_tmp4] + 4] + 24];
      var $50 = HEAP[$_py_tmp4];
      FUNCTION_TABLE[$49]($50);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $57 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$_py_tmp8] = $57;
      
      var $59 = HEAP[$self_addr] + 12;
      HEAP[$59] = 0;
      
      
      
      var $63 = HEAP[HEAP[$_py_tmp8]] - 1;
      
      var $65 = HEAP[$_py_tmp8];
      HEAP[$65] = $63;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp8]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $74 = HEAP[HEAP[HEAP[$_py_tmp8] + 4] + 24];
      var $75 = HEAP[$_py_tmp8];
      FUNCTION_TABLE[$74]($75);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $82 = HEAP[HEAP[$self_addr] + 24];
      HEAP[$_py_tmp12] = $82;
      
      var $84 = HEAP[$self_addr] + 24;
      HEAP[$84] = 0;
      
      
      
      var $88 = HEAP[HEAP[$_py_tmp12]] - 1;
      
      var $90 = HEAP[$_py_tmp12];
      HEAP[$90] = $88;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp12]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $99 = HEAP[HEAP[HEAP[$_py_tmp12] + 4] + 24];
      var $100 = HEAP[$_py_tmp12];
      FUNCTION_TABLE[$99]($100);
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
      HEAP[$_py_tmp16] = $108;
      
      var $110 = HEAP[$self_addr] + 32;
      HEAP[$110] = 0;
      
      
      
      var $114 = HEAP[HEAP[$_py_tmp16]] - 1;
      
      var $116 = HEAP[$_py_tmp16];
      HEAP[$116] = $114;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp16]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $125 = HEAP[HEAP[HEAP[$_py_tmp16] + 4] + 24];
      var $126 = HEAP[$_py_tmp16];
      FUNCTION_TABLE[$125]($126);
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      var $133 = HEAP[HEAP[$self_addr] + 40];
      HEAP[$_py_tmp20] = $133;
      
      var $135 = HEAP[$self_addr] + 40;
      HEAP[$135] = 0;
      
      
      
      var $139 = HEAP[HEAP[$_py_tmp20]] - 1;
      
      var $141 = HEAP[$_py_tmp20];
      HEAP[$141] = $139;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp20]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $150 = HEAP[HEAP[HEAP[$_py_tmp20] + 4] + 24];
      var $151 = HEAP[$_py_tmp20];
      FUNCTION_TABLE[$150]($151);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 28] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $158 = HEAP[HEAP[$self_addr] + 28];
      HEAP[$_py_tmp24] = $158;
      
      var $160 = HEAP[$self_addr] + 28;
      HEAP[$160] = 0;
      
      
      
      var $164 = HEAP[HEAP[$_py_tmp24]] - 1;
      
      var $166 = HEAP[$_py_tmp24];
      HEAP[$166] = $164;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp24]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $175 = HEAP[HEAP[HEAP[$_py_tmp24] + 4] + 24];
      var $176 = HEAP[$_py_tmp24];
      FUNCTION_TABLE[$175]($176);
      __label__ = 21;
      break;
     case 21:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      var $183 = HEAP[HEAP[$self_addr] + 44];
      HEAP[$_py_tmp28] = $183;
      
      var $185 = HEAP[$self_addr] + 44;
      HEAP[$185] = 0;
      
      
      
      var $189 = HEAP[HEAP[$_py_tmp28]] - 1;
      
      var $191 = HEAP[$_py_tmp28];
      HEAP[$191] = $189;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp28]] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $200 = HEAP[HEAP[HEAP[$_py_tmp28] + 4] + 24];
      var $201 = HEAP[$_py_tmp28];
      FUNCTION_TABLE[$200]($201);
      __label__ = 24;
      break;
     case 24:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 76] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      var $208 = HEAP[HEAP[$self_addr] + 76];
      HEAP[$_py_tmp32] = $208;
      
      var $210 = HEAP[$self_addr] + 76;
      HEAP[$210] = 0;
      
      
      
      var $214 = HEAP[HEAP[$_py_tmp32]] - 1;
      
      var $216 = HEAP[$_py_tmp32];
      HEAP[$216] = $214;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp32]] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $225 = HEAP[HEAP[HEAP[$_py_tmp32] + 4] + 24];
      var $226 = HEAP[$_py_tmp32];
      FUNCTION_TABLE[$225]($226);
      __label__ = 27;
      break;
     case 27:
      HEAP[$0] = 0;
      var $227 = HEAP[$0];
      HEAP[$retval] = $227;
      __label__ = 28;
      break;
     case 28:
      var $retval35 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval35;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Unpickler_getattr($self, $name) {
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
      var $1 = HEAP[$name_addr];
      var $2 = _strcmp($1, __str108);
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $8 = HEAP[_PyExc_AttributeError];
      var $9 = HEAP[$name_addr];
      _PyErr_SetString($8, $9);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 3:
      
      
      
      
      
      var $15 = HEAP[HEAP[HEAP[$self_addr] + 40]] + 1;
      var $16 = HEAP[HEAP[$self_addr] + 40];
      HEAP[$16] = $15;
      
      
      var $19 = HEAP[HEAP[$self_addr] + 40];
      HEAP[$0] = $19;
      __label__ = 15;
      break;
     case 4:
      var $20 = HEAP[$name_addr];
      var $21 = _strcmp($20, __str109);
      
      if ($21 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 76] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $27 = HEAP[_PyExc_AttributeError];
      var $28 = HEAP[$name_addr];
      _PyErr_SetString($27, $28);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 7:
      
      
      
      
      
      var $34 = HEAP[HEAP[HEAP[$self_addr] + 76]] + 1;
      var $35 = HEAP[HEAP[$self_addr] + 76];
      HEAP[$35] = $34;
      
      
      var $38 = HEAP[HEAP[$self_addr] + 76];
      HEAP[$0] = $38;
      __label__ = 15;
      break;
     case 8:
      var $39 = HEAP[$name_addr];
      var $40 = _strcmp($39, __str70);
      
      if ($40 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $46 = HEAP[_PyExc_AttributeError];
      var $47 = HEAP[$name_addr];
      _PyErr_SetString($46, $47);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 11:
      
      
      
      
      
      var $53 = HEAP[HEAP[HEAP[$self_addr] + 24]] + 1;
      var $54 = HEAP[HEAP[$self_addr] + 24];
      HEAP[$54] = $53;
      
      
      var $57 = HEAP[HEAP[$self_addr] + 24];
      HEAP[$0] = $57;
      __label__ = 15;
      break;
     case 12:
      var $58 = HEAP[$name_addr];
      var $59 = _strcmp($58, __str110);
      
      if ($59 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      var $64 = HEAP[HEAP[_UnpicklingError]] + 1;
      var $65 = HEAP[_UnpicklingError];
      HEAP[$65] = $64;
      var $66 = HEAP[_UnpicklingError];
      HEAP[$0] = $66;
      __label__ = 15;
      break;
     case 14:
      
      var $68 = HEAP[$self_addr];
      var $69 = HEAP[$name_addr];
      var $70 = _Py_FindMethod(_Unpickler_methods, $68, $69);
      HEAP[$0] = $70;
      __label__ = 15;
      break;
     case 15:
      var $71 = HEAP[$0];
      HEAP[$retval] = $71;
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
  function _Unpickler_setattr($self, $name, $value) {
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
      var $1 = HEAP[$name_addr];
      var $2 = _strcmp($1, __str108);
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      var $10 = HEAP[HEAP[$self_addr] + 40];
      
      
      var $13 = HEAP[$10] - 1;
      var $14 = $10;
      HEAP[$14] = $13;
      
      
      
      if (HEAP[$10] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 40] + 4] + 24];
      
      
      var $27 = HEAP[HEAP[$self_addr] + 40];
      FUNCTION_TABLE[$24]($27);
      __label__ = 4;
      break;
     case 4:
      
      var $29 = HEAP[$self_addr] + 40;
      var $30 = HEAP[$value_addr];
      HEAP[$29] = $30;
      
      
      if (HEAP[$value_addr] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      var $36 = HEAP[HEAP[$value_addr]] + 1;
      
      var $38 = HEAP[$value_addr];
      HEAP[$38] = $36;
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 7:
      var $39 = HEAP[$name_addr];
      var $40 = _strcmp($39, __str109);
      
      if ($40 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 76] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      var $48 = HEAP[HEAP[$self_addr] + 76];
      
      
      var $51 = HEAP[$48] - 1;
      var $52 = $48;
      HEAP[$52] = $51;
      
      
      
      if (HEAP[$48] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      var $62 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 76] + 4] + 24];
      
      
      var $65 = HEAP[HEAP[$self_addr] + 76];
      FUNCTION_TABLE[$62]($65);
      __label__ = 11;
      break;
     case 11:
      
      var $67 = HEAP[$self_addr] + 76;
      var $68 = HEAP[$value_addr];
      HEAP[$67] = $68;
      
      
      if (HEAP[$value_addr] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      var $74 = HEAP[HEAP[$value_addr]] + 1;
      
      var $76 = HEAP[$value_addr];
      HEAP[$76] = $74;
      __label__ = 13;
      break;
     case 13:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 14:
      
      
      if (HEAP[$value_addr] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $79 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($79, __str69);
      HEAP[$0] = -1;
      __label__ = 24;
      break;
     case 16:
      var $80 = HEAP[$name_addr];
      var $81 = _strcmp($80, __str70);
      
      if ($81 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$value_addr] + 4] + 84] & 536870912) == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $90 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($90, __str71);
      HEAP[$0] = -1;
      __label__ = 24;
      break;
     case 19:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      
      
      var $97 = HEAP[HEAP[$self_addr] + 24];
      
      
      var $100 = HEAP[$97] - 1;
      var $101 = $97;
      HEAP[$101] = $100;
      
      
      
      if (HEAP[$97] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      
      
      var $111 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 24] + 4] + 24];
      
      
      var $114 = HEAP[HEAP[$self_addr] + 24];
      FUNCTION_TABLE[$111]($114);
      __label__ = 22;
      break;
     case 22:
      
      var $116 = HEAP[$self_addr] + 24;
      var $117 = HEAP[$value_addr];
      HEAP[$116] = $117;
      
      
      
      var $121 = HEAP[HEAP[$value_addr]] + 1;
      
      var $123 = HEAP[$value_addr];
      HEAP[$123] = $121;
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 23:
      var $124 = HEAP[_PyExc_AttributeError];
      var $125 = HEAP[$name_addr];
      _PyErr_SetString($124, $125);
      HEAP[$0] = -1;
      __label__ = 24;
      break;
     case 24:
      var $126 = HEAP[$0];
      HEAP[$retval] = $126;
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
  function _cpm_dump($self, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $ob = __stackBase__ + 20;
      var $file = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      var $pickler = __stackBase__ + 32;
      var $proto = __stackBase__ + 36;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$res] = 0;
      HEAP[$pickler] = 0;
      HEAP[$proto] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwds_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str111, _kwlist_16302, allocate([ $ob, 0, 0, 0, $file, 0, 0, 0, $proto, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $5 = HEAP[$proto];
      var $6 = HEAP[$file];
      var $7 = _newPicklerobject($6, $5);
      HEAP[$pickler] = $7;
      
      
      if (HEAP[$pickler] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $10 = HEAP[$ob];
      var $11 = HEAP[$pickler];
      var $12 = _dump($11, $10);
      
      if ($12 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $15 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $15;
      HEAP[$res] = __Py_NoneStruct;
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[$pickler] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      var $19 = HEAP[$pickler];
      
      
      var $22 = HEAP[$19] - 1;
      var $23 = $19;
      HEAP[$23] = $22;
      
      
      
      if (HEAP[$19] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      var $32 = HEAP[HEAP[HEAP[$pickler] + 4] + 24];
      
      var $34 = HEAP[$pickler];
      FUNCTION_TABLE[$32]($34);
      __label__ = 7;
      break;
     case 7:
      var $35 = HEAP[$res];
      HEAP[$0] = $35;
      var $36 = HEAP[$0];
      HEAP[$retval] = $36;
      __label__ = 8;
      break;
     case 8:
      var $retval6 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cpm_dumps($self, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $ob = __stackBase__ + 20;
      var $file = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      var $pickler = __stackBase__ + 32;
      var $proto = __stackBase__ + 36;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$file] = 0;
      HEAP[$res] = 0;
      HEAP[$pickler] = 0;
      HEAP[$proto] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwds_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str113, _kwlist_16339, allocate([ $ob, 0, 0, 0, $proto, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[_PycStringIO] + 16];
      var $8 = FUNCTION_TABLE[$7](128);
      HEAP[$file] = $8;
      
      
      if (HEAP[$file] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $11 = HEAP[$proto];
      var $12 = HEAP[$file];
      var $13 = _newPicklerobject($12, $11);
      HEAP[$pickler] = $13;
      
      
      if (HEAP[$pickler] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $16 = HEAP[$ob];
      var $17 = HEAP[$pickler];
      var $18 = _dump($17, $16);
      
      if ($18 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      var $22 = HEAP[HEAP[_PycStringIO] + 12];
      var $23 = HEAP[$file];
      var $24 = FUNCTION_TABLE[$22]($23);
      HEAP[$res] = $24;
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[$pickler] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      var $28 = HEAP[$pickler];
      
      
      var $31 = HEAP[$28] - 1;
      var $32 = $28;
      HEAP[$32] = $31;
      
      
      
      if (HEAP[$28] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      var $41 = HEAP[HEAP[HEAP[$pickler] + 4] + 24];
      
      var $43 = HEAP[$pickler];
      FUNCTION_TABLE[$41]($43);
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$file] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      var $49 = HEAP[HEAP[$file]] - 1;
      
      var $51 = HEAP[$file];
      HEAP[$51] = $49;
      
      
      
      
      if (HEAP[HEAP[$file]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[$file] + 4] + 24];
      var $61 = HEAP[$file];
      FUNCTION_TABLE[$60]($61);
      __label__ = 11;
      break;
     case 11:
      var $62 = HEAP[$res];
      HEAP[$0] = $62;
      var $63 = HEAP[$0];
      HEAP[$retval] = $63;
      __label__ = 12;
      break;
     case 12:
      var $retval10 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cpm_load($self, $ob) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $ob_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $unpickler = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$ob_addr] = $ob;
      HEAP[$unpickler] = 0;
      HEAP[$res] = 0;
      var $1 = HEAP[$ob_addr];
      var $2 = _newUnpicklerobject($1);
      HEAP[$unpickler] = $2;
      
      
      if (HEAP[$unpickler] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $5 = HEAP[$unpickler];
      var $6 = _load($5);
      HEAP[$res] = $6;
      __label__ = 2;
      break;
     case 2:
      
      
      if (HEAP[$unpickler] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      var $10 = HEAP[$unpickler];
      
      
      var $13 = HEAP[$10] - 1;
      var $14 = $10;
      HEAP[$14] = $13;
      
      
      
      if (HEAP[$10] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$unpickler] + 4] + 24];
      
      var $25 = HEAP[$unpickler];
      FUNCTION_TABLE[$23]($25);
      __label__ = 5;
      break;
     case 5:
      var $26 = HEAP[$res];
      HEAP[$0] = $26;
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
      __label__ = 6;
      break;
     case 6:
      var $retval4 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cpm_loads($self, $args) {
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
      var $ob = __stackBase__ + 16;
      var $file = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      var $unpickler = __stackBase__ + 28;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$file] = 0;
      HEAP[$res] = 0;
      HEAP[$unpickler] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str114, allocate([ $ob, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[HEAP[_PycStringIO] + 20];
      var $7 = HEAP[$ob];
      var $8 = FUNCTION_TABLE[$6]($7);
      HEAP[$file] = $8;
      
      
      if (HEAP[$file] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $11 = HEAP[$file];
      var $12 = _newUnpicklerobject($11);
      HEAP[$unpickler] = $12;
      
      
      if (HEAP[$unpickler] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $15 = HEAP[$unpickler];
      var $16 = _load($15);
      HEAP[$res] = $16;
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[$file] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      var $22 = HEAP[HEAP[$file]] - 1;
      
      var $24 = HEAP[$file];
      HEAP[$24] = $22;
      
      
      
      
      if (HEAP[HEAP[$file]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $33 = HEAP[HEAP[HEAP[$file] + 4] + 24];
      var $34 = HEAP[$file];
      FUNCTION_TABLE[$33]($34);
      __label__ = 7;
      break;
     case 7:
      
      
      if (HEAP[$unpickler] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      var $38 = HEAP[$unpickler];
      
      
      var $41 = HEAP[$38] - 1;
      var $42 = $38;
      HEAP[$42] = $41;
      
      
      
      if (HEAP[$38] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      var $51 = HEAP[HEAP[HEAP[$unpickler] + 4] + 24];
      
      var $53 = HEAP[$unpickler];
      FUNCTION_TABLE[$51]($53);
      __label__ = 10;
      break;
     case 10:
      var $54 = HEAP[$res];
      HEAP[$0] = $54;
      var $55 = HEAP[$0];
      HEAP[$retval] = $55;
      __label__ = 11;
      break;
     case 11:
      var $retval9 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _init_stuff($module_dict) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $module_dict_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $copyreg = __stackBase__ + 12;
      var $t = __stackBase__ + 16;
      var $r = __stackBase__ + 20;
      
      HEAP[$module_dict_addr] = $module_dict;
      var $1 = _PyType_Ready(_Unpicklertype);
      
      if ($1 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 2:
      var $3 = _PyType_Ready(_Picklertype);
      
      if ($3 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 4:
      var $5 = _PyString_InternFromString(__str126);
      HEAP[___class___str] = $5;
      
      
      if (HEAP[___class___str] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 6:
      var $8 = _PyString_InternFromString(__str127);
      HEAP[___getinitargs___str] = $8;
      
      
      if (HEAP[___getinitargs___str] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 8:
      var $11 = _PyString_InternFromString(__str128);
      HEAP[___dict___str] = $11;
      
      
      if (HEAP[___dict___str] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 10:
      var $14 = _PyString_InternFromString(__str129);
      HEAP[___getstate___str] = $14;
      
      
      if (HEAP[___getstate___str] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 12:
      var $17 = _PyString_InternFromString(__str130);
      HEAP[___setstate___str] = $17;
      
      
      if (HEAP[___setstate___str] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 14:
      var $20 = _PyString_InternFromString(__str131);
      HEAP[___name___str] = $20;
      
      
      if (HEAP[___name___str] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 16:
      var $23 = _PyString_InternFromString(__str132);
      HEAP[___main___str] = $23;
      
      
      if (HEAP[___main___str] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 18:
      var $26 = _PyString_InternFromString(__str133);
      HEAP[___reduce___str] = $26;
      
      
      if (HEAP[___reduce___str] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 20:
      var $29 = _PyString_InternFromString(__str134);
      HEAP[___reduce_ex___str] = $29;
      
      
      if (HEAP[___reduce_ex___str] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 22:
      var $32 = _PyString_InternFromString(__str135);
      HEAP[_write_str] = $32;
      
      
      if (HEAP[_write_str] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 24:
      var $35 = _PyString_InternFromString(__str136);
      HEAP[_append_str] = $35;
      
      
      if (HEAP[_append_str] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 26:
      var $38 = _PyString_InternFromString(__str137);
      HEAP[_read_str] = $38;
      
      
      if (HEAP[_read_str] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 28:
      var $41 = _PyString_InternFromString(__str138);
      HEAP[_readline_str] = $41;
      
      
      if (HEAP[_readline_str] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 30:
      var $44 = _PyString_InternFromString(__str139);
      HEAP[_dispatch_table_str] = $44;
      
      
      if (HEAP[_dispatch_table_str] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 32:
      var $47 = _PyImport_ImportModule(__str63);
      HEAP[$copyreg] = $47;
      
      
      if (HEAP[$copyreg] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 34:
      var $50 = HEAP[_dispatch_table_str];
      var $51 = HEAP[$copyreg];
      var $52 = _PyObject_GetAttr($51, $50);
      HEAP[_dispatch_table] = $52;
      
      
      if (HEAP[_dispatch_table] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 36:
      var $55 = HEAP[$copyreg];
      var $56 = _PyObject_GetAttrString($55, __str140);
      HEAP[_extension_registry] = $56;
      
      
      if (HEAP[_extension_registry] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 38:
      var $59 = HEAP[$copyreg];
      var $60 = _PyObject_GetAttrString($59, __str141);
      HEAP[_inverted_registry] = $60;
      
      
      if (HEAP[_inverted_registry] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 40:
      var $63 = HEAP[$copyreg];
      var $64 = _PyObject_GetAttrString($63, __str142);
      HEAP[_extension_cache] = $64;
      
      
      if (HEAP[_extension_cache] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 42:
      
      
      
      var $70 = HEAP[HEAP[$copyreg]] - 1;
      
      var $72 = HEAP[$copyreg];
      HEAP[$72] = $70;
      
      
      
      
      if (HEAP[HEAP[$copyreg]] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      
      
      var $81 = HEAP[HEAP[HEAP[$copyreg] + 4] + 24];
      var $82 = HEAP[$copyreg];
      FUNCTION_TABLE[$81]($82);
      __label__ = 44;
      break;
     case 44:
      var $83 = _PyTuple_New(0);
      HEAP[_empty_tuple] = $83;
      
      
      if (HEAP[_empty_tuple] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 46:
      var $86 = _PyTuple_New(2);
      HEAP[_two_tuple] = $86;
      
      
      if (HEAP[_two_tuple] == 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 48:
      
      var $90 = HEAP[_two_tuple];
      _PyObject_GC_UnTrack($90);
      var $91 = _PyImport_ImportModule(__str143);
      HEAP[$t] = $91;
      
      
      if (HEAP[$t] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 50:
      var $94 = HEAP[$module_dict_addr];
      var $95 = HEAP[$t];
      var $96 = _PyDict_SetItemString($94, __str144, $95);
      
      if ($96 < 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 52:
      var $98 = _PyDict_New();
      HEAP[$t] = $98;
      
      
      if (HEAP[$t] == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 54:
      var $101 = HEAP[$module_dict_addr];
      var $102 = HEAP[$t];
      var $103 = _PyRun_StringFlags(__str145, 257, $101, $102, 0);
      HEAP[$r] = $103;
      
      
      if (HEAP[$r] == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 56:
      
      
      
      var $109 = HEAP[HEAP[$r]] - 1;
      
      var $111 = HEAP[$r];
      HEAP[$111] = $109;
      
      
      
      
      if (HEAP[HEAP[$r]] == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      
      
      
      
      var $120 = HEAP[HEAP[HEAP[$r] + 4] + 24];
      var $121 = HEAP[$r];
      FUNCTION_TABLE[$120]($121);
      __label__ = 58;
      break;
     case 58:
      var $122 = HEAP[$t];
      var $123 = _PyErr_NewException(__str146, 0, $122);
      HEAP[_PickleError] = $123;
      
      
      if (HEAP[_PickleError] == 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 60:
      
      
      
      var $129 = HEAP[HEAP[$t]] - 1;
      
      var $131 = HEAP[$t];
      HEAP[$131] = $129;
      
      
      
      
      if (HEAP[HEAP[$t]] == 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      
      
      
      
      var $140 = HEAP[HEAP[HEAP[$t] + 4] + 24];
      var $141 = HEAP[$t];
      FUNCTION_TABLE[$140]($141);
      __label__ = 62;
      break;
     case 62:
      var $142 = HEAP[_PickleError];
      var $143 = _PyErr_NewException(__str147, $142, 0);
      HEAP[_PicklingError] = $143;
      
      
      if (HEAP[_PicklingError] == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 64:
      var $146 = _PyDict_New();
      HEAP[$t] = $146;
      
      
      if (HEAP[$t] == 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 66:
      var $149 = HEAP[$module_dict_addr];
      var $150 = HEAP[$t];
      var $151 = _PyRun_StringFlags(__str148, 257, $149, $150, 0);
      HEAP[$r] = $151;
      
      
      if (HEAP[$r] == 0) {
        __label__ = 67;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 67:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 68:
      
      
      
      var $157 = HEAP[HEAP[$r]] - 1;
      
      var $159 = HEAP[$r];
      HEAP[$159] = $157;
      
      
      
      
      if (HEAP[HEAP[$r]] == 0) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      
      
      
      
      var $168 = HEAP[HEAP[HEAP[$r] + 4] + 24];
      var $169 = HEAP[$r];
      FUNCTION_TABLE[$168]($169);
      __label__ = 70;
      break;
     case 70:
      var $170 = HEAP[_PicklingError];
      var $171 = HEAP[$t];
      var $172 = _PyErr_NewException(__str149, $170, $171);
      HEAP[_UnpickleableError] = $172;
      
      
      if (HEAP[_UnpickleableError] == 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 71:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 72:
      
      
      
      var $178 = HEAP[HEAP[$t]] - 1;
      
      var $180 = HEAP[$t];
      HEAP[$180] = $178;
      
      
      
      
      if (HEAP[HEAP[$t]] == 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 73:
      
      
      
      
      var $189 = HEAP[HEAP[HEAP[$t] + 4] + 24];
      var $190 = HEAP[$t];
      FUNCTION_TABLE[$189]($190);
      __label__ = 74;
      break;
     case 74:
      var $191 = HEAP[_PickleError];
      var $192 = _PyErr_NewException(__str150, $191, 0);
      HEAP[_UnpicklingError] = $192;
      
      
      if (HEAP[_UnpicklingError] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 76:
      var $195 = HEAP[_UnpicklingError];
      var $196 = _PyErr_NewException(__str151, $195, 0);
      HEAP[_BadPickleGet] = $196;
      
      
      if (HEAP[_BadPickleGet] == 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 77:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 78:
      var $199 = HEAP[_PickleError];
      var $200 = HEAP[$module_dict_addr];
      var $201 = _PyDict_SetItemString($200, __str152, $199);
      
      if ($201 < 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 79:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 80:
      var $203 = HEAP[_PicklingError];
      var $204 = HEAP[$module_dict_addr];
      var $205 = _PyDict_SetItemString($204, __str75, $203);
      
      if ($205 < 0) {
        __label__ = 81;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 81:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 82:
      var $207 = HEAP[_UnpicklingError];
      var $208 = HEAP[$module_dict_addr];
      var $209 = _PyDict_SetItemString($208, __str110, $207);
      
      if ($209 < 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 84;
        break;
      }
     case 83:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 84:
      var $211 = HEAP[_UnpickleableError];
      var $212 = HEAP[$module_dict_addr];
      var $213 = _PyDict_SetItemString($212, __str153, $211);
      
      if ($213 < 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 86:
      var $215 = HEAP[_BadPickleGet];
      var $216 = HEAP[$module_dict_addr];
      var $217 = _PyDict_SetItemString($216, __str154, $215);
      
      if ($217 < 0) {
        __label__ = 87;
        break;
      } else {
        __label__ = 88;
        break;
      }
     case 87:
      HEAP[$0] = -1;
      __label__ = 89;
      break;
     case 88:
      var $219 = _PyCapsule_Import(__str155, 0);
      
      HEAP[_PycStringIO] = $219;
      HEAP[$0] = 0;
      __label__ = 89;
      break;
     case 89:
      var $221 = HEAP[$0];
      HEAP[$retval] = $221;
      __label__ = 90;
      break;
     case 90:
      var $retval89 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval89;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initcPickle() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      var $d = __stackBase__ + 4;
      var $di = __stackBase__ + 8;
      var $v = __stackBase__ + 12;
      var $k = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $rev = __stackBase__ + 24;
      var $format_version = __stackBase__ + 28;
      var $compatible_formats = __stackBase__ + 32;
      
      HEAP[$rev] = __str156;
      
      HEAP[_Picklertype + 4] = _PyType_Type;
      
      HEAP[_Unpicklertype + 4] = _PyType_Type;
      
      HEAP[_PdataType + 4] = _PyType_Type;
      var $3 = _PyDict_New();
      HEAP[$di] = $3;
      
      
      if (HEAP[$di] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $6 = HEAP[$di];
      var $7 = _init_stuff($6);
      
      if ($7 < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $9 = _Py_InitModule4(__str157, _cPickle_methods, _cPickle_module_documentation, 0, 1013);
      HEAP[$m] = $9;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $12 = HEAP[$m];
      var $13 = _PyModule_GetDict($12);
      HEAP[$d] = $13;
      var $14 = HEAP[$rev];
      var $15 = _PyString_FromString($14);
      HEAP[$v] = $15;
      var $16 = HEAP[$v];
      var $17 = HEAP[$d];
      var $18 = _PyDict_SetItemString($17, __str158, $16);
      
      
      if (HEAP[$v] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $21 = HEAP[$v];
      
      
      var $24 = HEAP[$21] - 1;
      var $25 = $21;
      HEAP[$25] = $24;
      
      
      
      if (HEAP[$21] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $33 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $34 = HEAP[$v];
      FUNCTION_TABLE[$33]($34);
      __label__ = 6;
      break;
     case 6:
      HEAP[$i] = 0;
      __label__ = 11;
      break;
     case 7:
      var $35 = HEAP[$v];
      var $36 = HEAP[$k];
      var $37 = HEAP[$d];
      var $38 = _PyObject_SetItem($37, $36, $35);
      
      if ($38 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $43 = HEAP[HEAP[$di]] - 1;
      
      var $45 = HEAP[$di];
      HEAP[$45] = $43;
      
      
      
      
      if (HEAP[HEAP[$di]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$di] + 4] + 24];
      var $55 = HEAP[$di];
      FUNCTION_TABLE[$54]($55);
      __label__ = 10;
      break;
     case 10:
      __label__ = 21;
      break;
     case 11:
      var $56 = HEAP[$di];
      var $57 = _PyDict_Next($56, $i, $k, $v);
      
      if ($57 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      var $62 = HEAP[HEAP[$di]] - 1;
      
      var $64 = HEAP[$di];
      HEAP[$64] = $62;
      
      
      
      
      if (HEAP[HEAP[$di]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[$di] + 4] + 24];
      var $74 = HEAP[$di];
      FUNCTION_TABLE[$73]($74);
      __label__ = 14;
      break;
     case 14:
      var $75 = HEAP[$m];
      var $76 = _PyModule_AddIntConstant($75, __str159, 2);
      HEAP[$i] = $76;
      
      
      if (HEAP[$i] < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $79 = _PyString_FromString(__str160);
      HEAP[$format_version] = $79;
      var $80 = _Py_BuildValue(__str161, allocate([ __str162, 0, 0, 0, __str163, 0, 0, 0, __str164, 0, 0, 0, __str165, 0, 0, 0, __str160, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$compatible_formats] = $80;
      var $81 = HEAP[$d];
      var $82 = HEAP[$format_version];
      var $83 = _PyDict_SetItemString($81, __str166, $82);
      var $84 = HEAP[$d];
      var $85 = HEAP[$compatible_formats];
      var $86 = _PyDict_SetItemString($84, __str167, $85);
      
      
      if (HEAP[$format_version] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      var $92 = HEAP[HEAP[$format_version]] - 1;
      
      var $94 = HEAP[$format_version];
      HEAP[$94] = $92;
      
      
      
      
      if (HEAP[HEAP[$format_version]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $103 = HEAP[HEAP[HEAP[$format_version] + 4] + 24];
      var $104 = HEAP[$format_version];
      FUNCTION_TABLE[$103]($104);
      __label__ = 18;
      break;
     case 18:
      
      
      if (HEAP[$compatible_formats] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      
      var $110 = HEAP[HEAP[$compatible_formats]] - 1;
      
      var $112 = HEAP[$compatible_formats];
      HEAP[$112] = $110;
      
      
      
      
      if (HEAP[HEAP[$compatible_formats]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $121 = HEAP[HEAP[HEAP[$compatible_formats] + 4] + 24];
      var $122 = HEAP[$compatible_formats];
      FUNCTION_TABLE[$121]($122);
      __label__ = 21;
      break;
     case 21:
      __label__ = 22;
      break;
     case 22:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initcPickle"] = _initcPickle;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, __PyObject_NextNotImplemented, 0, _write_file, 0, _write_cStringIO, 0, _write_none, 0, _write_other, 0, _read_file, 0, _readline_file, 0, _read_cStringIO, 0, _readline_cStringIO, 0, _read_other, 0, _readline_other, 0, _Pdata_dealloc, 0, _Pickler_dump, 0, _Pickle_clear_memo, 0, _Pickle_getvalue, 0, _Pickler_get_pers_func, 0, _Pickler_set_pers_func, 0, _Pickler_set_inst_pers_func, 0, _Pickler_get_memo, 0, _Pickler_set_memo, 0, _Pickler_get_error, 0, _Pickler_dealloc, 0, _PyObject_GenericGetAttr, 0, _PyObject_GenericSetAttr, 0, _Pickler_traverse, 0, _Pickler_clear, 0, _Unpickler_load, 0, _Unpickler_noload, 0, _Unpickler_dealloc, 0, _Unpickler_getattr, 0, _Unpickler_setattr, 0, _Unpickler_traverse, 0, _Unpickler_clear, 0, _cpm_dump, 0, _cpm_dumps, 0, _cpm_load, 0, _cpm_loads, 0, _get_Pickler, 0, _get_Unpickler, 0 ]);
  function run(args) {
    _cPickle_module_documentation = allocate([ 67, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 97, 116, 105, 111, 110, 32, 97, 110, 100, 32, 111, 112, 116, 105, 109, 105, 122, 97, 116, 105, 111, 110, 32, 111, 102, 32, 116, 104, 101, 32, 80, 121, 116, 104, 111, 110, 32, 112, 105, 99, 107, 108, 101, 32, 109, 111, 100, 117, 108, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _MARKv = allocate([ 40 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str = allocate([ 99, 80, 105, 99, 107, 108, 101, 46, 80, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate(1, "i8", ALLOC_NORMAL);
    _PdataType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _UnpicklingError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str2 = allocate([ 117, 110, 112, 105, 99, 107, 108, 105, 110, 103, 32, 115, 116, 97, 99, 107, 32, 117, 110, 100, 101, 114, 102, 108, 111, 119, 0 ], "i8", ALLOC_NORMAL);
    _PycStringIO = allocate(1, "%struct.PycStringIO_CAPI*", ALLOC_NORMAL);
    _empty_tuple = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _PicklingError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str3 = allocate([ 110, 111, 32, 105, 110, 116, 32, 119, 104, 101, 114, 101, 32, 105, 110, 116, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 105, 110, 32, 109, 101, 109, 111, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 37, 108, 100, 10, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 37, 100, 10, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 95, 95, 109, 111, 100, 117, 108, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 109, 111, 100, 117, 108, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    ___main___str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str8 = allocate([ 102, 97, 115, 116, 32, 109, 111, 100, 101, 58, 32, 99, 97, 110, 39, 116, 32, 112, 105, 99, 107, 108, 101, 32, 99, 121, 99, 108, 105, 99, 32, 111, 98, 106, 101, 99, 116, 115, 32, 105, 110, 99, 108, 117, 100, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 32, 116, 121, 112, 101, 32, 37, 115, 32, 97, 116, 32, 37, 112, 0 ], "i8", ALLOC_NORMAL);
    _none_9399 = allocate([ 78 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _len_9411 = allocate([ 4, 4 ], "i8", ALLOC_NORMAL);
    _buf_9410 = allocate(8, "i8*", ALLOC_NORMAL);
    __str9 = allocate([ 73, 48, 48, 10, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 73, 48, 49, 10, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 108, 111, 110, 103, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 32, 116, 111, 32, 112, 105, 99, 107, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _l_9486 = allocate([ 76 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str12 = allocate([ 10, 0 ], "i8", ALLOC_NORMAL);
    _string_9625 = allocate([ 83 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _hexdigit_9736 = allocate(1, "i8*", ALLOC_NORMAL);
    __str13 = allocate([ 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102, 0 ], "i8", ALLOC_NORMAL);
    _string_9843 = allocate([ 86 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str14 = allocate([ 80, 121, 84, 117, 112, 108, 101, 95, 83, 105, 122, 101, 40, 116, 41, 32, 61, 61, 32, 108, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 99, 80, 105, 99, 107, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9965 = allocate([ 115, 116, 111, 114, 101, 95, 116, 117, 112, 108, 101, 95, 101, 108, 101, 109, 101, 110, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    _pop_9990 = allocate([ 48 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _len2opcode_9992 = allocate([ 41, 133, 134, 135 ], "i8", ALLOC_NORMAL);
    _pop_mark_9991 = allocate([ 49 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _tuple_9989 = allocate([ 116 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str16 = allocate([ 105, 116, 101, 114, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10085 = allocate([ 98, 97, 116, 99, 104, 95, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _append_10083 = allocate([ 97 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _appends_10084 = allocate([ 101 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str17 = allocate([ 32, 119, 104, 105, 108, 101, 32, 112, 105, 99, 107, 108, 105, 110, 103, 32, 97, 110, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10274 = allocate([ 98, 97, 116, 99, 104, 95, 100, 105, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 100, 105, 99, 116, 32, 105, 116, 101, 109, 115, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 109, 117, 115, 116, 32, 114, 101, 116, 117, 114, 110, 32, 50, 45, 116, 117, 112, 108, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _setitem_10272 = allocate([ 115 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _setitems_10273 = allocate([ 117 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str19 = allocate([ 111, 98, 106, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10449 = allocate([ 98, 97, 116, 99, 104, 95, 100, 105, 99, 116, 95, 101, 120, 97, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 115, 101, 108, 102, 45, 62, 112, 114, 111, 116, 111, 32, 62, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    _setitem_10447 = allocate([ 115 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _setitems_10448 = allocate([ 117 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str21 = allocate([ 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 32, 99, 104, 97, 110, 103, 101, 100, 32, 115, 105, 122, 101, 32, 100, 117, 114, 105, 110, 103, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 105, 116, 101, 114, 105, 116, 101, 109, 115, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 40, 41, 0 ], "i8", ALLOC_NORMAL);
    ___class___str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    ___getinitargs___str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str24 = allocate([ 99, 108, 97, 115, 115, 32, 104, 97, 115, 32, 110, 111, 32, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _inst_10602 = allocate([ 105 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _obj_10603 = allocate([ 111 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    ___getstate___str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    ___dict___str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _build_10604 = allocate([ 98 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    ___name___str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str25 = allocate([ 67, 97, 110, 39, 116, 32, 112, 105, 99, 107, 108, 101, 32, 37, 115, 58, 32, 105, 109, 112, 111, 114, 116, 32, 111, 102, 32, 109, 111, 100, 117, 108, 101, 32, 37, 115, 32, 102, 97, 105, 108, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 79, 83, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 67, 97, 110, 39, 116, 32, 112, 105, 99, 107, 108, 101, 32, 37, 115, 58, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 32, 108, 111, 111, 107, 117, 112, 32, 37, 115, 46, 37, 115, 32, 102, 97, 105, 108, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 79, 83, 83, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 67, 97, 110, 39, 116, 32, 112, 105, 99, 107, 108, 101, 32, 37, 115, 58, 32, 105, 116, 39, 115, 32, 110, 111, 116, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 111, 98, 106, 101, 99, 116, 32, 97, 115, 32, 37, 115, 46, 37, 115, 0 ], "i8", ALLOC_NORMAL);
    _two_tuple = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _extension_registry = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str30 = allocate([ 67, 97, 110, 39, 116, 32, 112, 105, 99, 107, 108, 101, 32, 37, 115, 58, 32, 101, 120, 116, 101, 110, 115, 105, 111, 110, 32, 99, 111, 100, 101, 32, 37, 115, 32, 105, 115, 110, 39, 116, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 79, 79, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 67, 97, 110, 39, 116, 32, 112, 105, 99, 107, 108, 101, 32, 37, 115, 58, 32, 101, 120, 116, 101, 110, 115, 105, 111, 110, 32, 99, 111, 100, 101, 32, 37, 108, 100, 32, 105, 115, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 79, 108, 0 ], "i8", ALLOC_NORMAL);
    _global_10803 = allocate([ 99 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str34 = allocate([ 112, 101, 114, 115, 105, 115, 116, 101, 110, 116, 32, 105, 100, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _persid_10947 = allocate([ 80 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _binpersid_10948 = allocate([ 81 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str35 = allocate([ 116, 117, 112, 108, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 37, 115, 32, 109, 117, 115, 116, 32, 99, 111, 110, 116, 97, 105, 110, 32, 50, 32, 116, 104, 114, 111, 117, 103, 104, 32, 53, 32, 101, 108, 101, 109, 101, 110, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 79, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 115, 97, 118, 101, 95, 114, 101, 100, 117, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 83, 101, 99, 111, 110, 100, 32, 101, 108, 101, 109, 101, 110, 116, 32, 111, 102, 32, 116, 117, 112, 108, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 37, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 70, 111, 117, 114, 116, 104, 32, 101, 108, 101, 109, 101, 110, 116, 32, 111, 102, 32, 116, 117, 112, 108, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 37, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 44, 32, 110, 111, 116, 32, 37, 115, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 79, 115, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 70, 105, 102, 116, 104, 32, 101, 108, 101, 109, 101, 110, 116, 32, 111, 102, 32, 116, 117, 112, 108, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 37, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 44, 32, 110, 111, 116, 32, 37, 115, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 95, 95, 110, 101, 119, 111, 98, 106, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 95, 95, 110, 101, 119, 111, 98, 106, 95, 95, 32, 97, 114, 103, 108, 105, 115, 116, 32, 105, 115, 32, 101, 109, 112, 116, 121, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 95, 95, 110, 101, 119, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 97, 114, 103, 115, 91, 48, 93, 32, 102, 114, 111, 109, 32, 95, 95, 110, 101, 119, 111, 98, 106, 95, 95, 32, 97, 114, 103, 115, 32, 104, 97, 115, 32, 110, 111, 32, 95, 95, 110, 101, 119, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 97, 114, 103, 115, 91, 48, 93, 32, 102, 114, 111, 109, 32, 95, 95, 110, 101, 119, 111, 98, 106, 95, 95, 32, 97, 114, 103, 115, 32, 104, 97, 115, 32, 116, 104, 101, 32, 119, 114, 111, 110, 103, 32, 99, 108, 97, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    _newobj_11068 = allocate([ -127 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _reduce_11066 = allocate([ 82 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _build_11067 = allocate([ 98 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _PickleError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _dispatch_table = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    ___reduce_ex___str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    ___reduce___str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _UnpickleableError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str47 = allocate([ 86, 97, 108, 117, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 37, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 116, 114, 105, 110, 103, 32, 111, 114, 32, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 115, 101, 108, 102, 45, 62, 112, 114, 111, 116, 111, 32, 62, 61, 32, 48, 32, 38, 38, 32, 115, 101, 108, 102, 45, 62, 112, 114, 111, 116, 111, 32, 60, 32, 50, 53, 54, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___11640 = allocate([ 100, 117, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    _stop_11638 = allocate([ 46 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str49 = allocate([ 124, 105, 58, 103, 101, 116, 118, 97, 108, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 65, 116, 116, 101, 109, 112, 116, 32, 116, 111, 32, 103, 101, 116, 118, 97, 108, 117, 101, 40, 41, 32, 97, 32, 110, 111, 110, 45, 108, 105, 115, 116, 45, 98, 97, 115, 101, 100, 32, 112, 105, 99, 107, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 73, 110, 118, 97, 108, 105, 100, 32, 103, 101, 116, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 85, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 100, 97, 116, 97, 32, 105, 110, 32, 105, 110, 116, 101, 114, 110, 97, 108, 32, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 79, 124, 105, 58, 100, 117, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 100, 117, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 100, 117, 109, 112, 40, 111, 98, 106, 101, 99, 116, 41, 32, 45, 45, 32, 87, 114, 105, 116, 101, 32, 97, 110, 32, 111, 98, 106, 101, 99, 116, 32, 105, 110, 32, 112, 105, 99, 107, 108, 101, 32, 102, 111, 114, 109, 97, 116, 32, 116, 111, 32, 116, 104, 101, 32, 111, 98, 106, 101, 99, 116, 39, 115, 32, 112, 105, 99, 107, 108, 101, 32, 115, 116, 114, 101, 97, 109, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 99, 108, 101, 97, 114, 95, 109, 101, 109, 111, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 99, 108, 101, 97, 114, 95, 109, 101, 109, 111, 40, 41, 32, 45, 45, 32, 67, 108, 101, 97, 114, 32, 116, 104, 101, 32, 112, 105, 99, 107, 108, 101, 114, 115, 32, 109, 101, 109, 111, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 103, 101, 116, 118, 97, 108, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 103, 101, 116, 118, 97, 108, 117, 101, 40, 41, 32, 45, 45, 32, 70, 105, 110, 105, 115, 104, 32, 112, 105, 99, 107, 105, 110, 103, 32, 97, 32, 108, 105, 115, 116, 45, 98, 97, 115, 101, 100, 32, 112, 105, 99, 107, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _Pickler_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str60 = allocate([ 112, 105, 99, 107, 108, 101, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 37, 100, 32, 97, 115, 107, 101, 100, 32, 102, 111, 114, 59, 32, 116, 104, 101, 32, 104, 105, 103, 104, 101, 115, 116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 105, 115, 32, 37, 100, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 73, 47, 79, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 32, 111, 110, 32, 99, 108, 111, 115, 101, 100, 32, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _write_str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str62 = allocate([ 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 39, 119, 114, 105, 116, 101, 39, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 99, 111, 112, 121, 95, 114, 101, 103, 0 ], "i8", ALLOC_NORMAL);
    _dispatch_table_str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str64 = allocate([ 124, 105, 58, 80, 105, 99, 107, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 79, 124, 105, 58, 80, 105, 99, 107, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_11959 = allocate(12, "i8*", ALLOC_NORMAL);
    __str66 = allocate([ 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 112, 114, 111, 116, 111, 99, 111, 108, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 112, 101, 114, 115, 105, 115, 116, 101, 110, 116, 95, 105, 100, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 97, 116, 116, 114, 105, 98, 117, 116, 101, 32, 100, 101, 108, 101, 116, 105, 111, 110, 32, 105, 115, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 109, 101, 109, 111, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 109, 101, 109, 111, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 98, 105, 110, 97, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 102, 97, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _Pickler_members = allocate([ 0, 0, 0, 0, 1, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str74 = allocate([ 105, 110, 115, 116, 95, 112, 101, 114, 115, 105, 115, 116, 101, 110, 116, 95, 105, 100, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 80, 105, 99, 107, 108, 105, 110, 103, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _Pickler_getsets = allocate(100, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _Picklertype__doc__ = allocate([ 79, 98, 106, 101, 99, 116, 115, 32, 116, 104, 97, 116, 32, 107, 110, 111, 119, 32, 104, 111, 119, 32, 116, 111, 32, 112, 105, 99, 107, 108, 101, 32, 111, 98, 106, 101, 99, 116, 115, 10, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 99, 80, 105, 99, 107, 108, 101, 46, 80, 105, 99, 107, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _Picklertype = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str77 = allocate([ 71, 108, 111, 98, 97, 108, 32, 97, 110, 100, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 112, 105, 99, 107, 108, 101, 115, 32, 97, 114, 101, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 99, 111, 117, 108, 100, 32, 110, 111, 116, 32, 102, 105, 110, 100, 32, 77, 65, 82, 75, 0 ], "i8", ALLOC_NORMAL);
    __str79 = allocate([ 112, 105, 99, 107, 108, 101, 32, 100, 97, 116, 97, 32, 119, 97, 115, 32, 116, 114, 117, 110, 99, 97, 116, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str80 = allocate([ 99, 111, 117, 108, 100, 32, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 98, 111, 111, 108, 101, 97, 110, 32, 61, 61, 32, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 32, 42, 41, 32, 38, 95, 80, 121, 95, 84, 114, 117, 101, 83, 116, 114, 117, 99, 116, 41, 32, 124, 124, 32, 98, 111, 111, 108, 101, 97, 110, 32, 61, 61, 32, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 32, 42, 41, 32, 38, 95, 80, 121, 95, 90, 101, 114, 111, 83, 116, 114, 117, 99, 116, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___12520 = allocate([ 108, 111, 97, 100, 95, 98, 111, 111, 108, 0 ], "i8", ALLOC_NORMAL);
    __str82 = allocate([ 115, 105, 122, 101, 32, 61, 61, 32, 49, 32, 124, 124, 32, 115, 105, 122, 101, 32, 61, 61, 32, 52, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___12691 = allocate([ 108, 111, 97, 100, 95, 99, 111, 117, 110, 116, 101, 100, 95, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str83 = allocate([ 76, 79, 78, 71, 32, 112, 105, 99, 107, 108, 101, 32, 104, 97, 115, 32, 110, 101, 103, 97, 116, 105, 118, 101, 32, 98, 121, 116, 101, 32, 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str84 = allocate([ 99, 111, 117, 108, 100, 32, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 102, 108, 111, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 105, 110, 115, 101, 99, 117, 114, 101, 32, 115, 116, 114, 105, 110, 103, 32, 112, 105, 99, 107, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str86 = allocate([ 66, 73, 78, 83, 84, 82, 73, 78, 71, 32, 112, 105, 99, 107, 108, 101, 32, 104, 97, 115, 32, 110, 101, 103, 97, 116, 105, 118, 101, 32, 98, 121, 116, 101, 32, 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str87 = allocate([ 66, 73, 78, 85, 78, 73, 67, 79, 68, 69, 32, 112, 105, 99, 107, 108, 101, 32, 104, 97, 115, 32, 110, 101, 103, 97, 116, 105, 118, 101, 32, 98, 121, 116, 101, 32, 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str88 = allocate([ 98, 97, 100, 32, 112, 105, 99, 107, 108, 101, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str89 = allocate([ 78, 69, 87, 79, 66, 74, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 97, 110, 32, 97, 114, 103, 32, 116, 117, 112, 108, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str90 = allocate([ 78, 69, 87, 79, 66, 74, 32, 99, 108, 97, 115, 115, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 110, 39, 116, 32, 97, 32, 116, 121, 112, 101, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str91 = allocate([ 78, 69, 87, 79, 66, 74, 32, 99, 108, 97, 115, 115, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 104, 97, 115, 32, 78, 85, 76, 76, 32, 116, 112, 95, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    __str92 = allocate([ 65, 32, 108, 111, 97, 100, 32, 112, 101, 114, 115, 105, 115, 116, 101, 110, 116, 32, 105, 100, 32, 105, 110, 115, 116, 114, 117, 99, 116, 105, 111, 110, 32, 119, 97, 115, 32, 101, 110, 99, 111, 117, 110, 116, 101, 114, 101, 100, 44, 10, 98, 117, 116, 32, 110, 111, 32, 112, 101, 114, 115, 105, 115, 116, 101, 110, 116, 95, 108, 111, 97, 100, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 119, 97, 115, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _BadPickleGet = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str93 = allocate([ 110, 98, 121, 116, 101, 115, 32, 61, 61, 32, 49, 32, 124, 124, 32, 110, 98, 121, 116, 101, 115, 32, 61, 61, 32, 50, 32, 124, 124, 32, 110, 98, 121, 116, 101, 115, 32, 61, 61, 32, 52, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___14290 = allocate([ 108, 111, 97, 100, 95, 101, 120, 116, 101, 110, 115, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str94 = allocate([ 69, 88, 84, 32, 115, 112, 101, 99, 105, 102, 105, 101, 115, 32, 99, 111, 100, 101, 32, 60, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    _extension_cache = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _inverted_registry = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str95 = allocate([ 117, 110, 114, 101, 103, 105, 115, 116, 101, 114, 101, 100, 32, 101, 120, 116, 101, 110, 115, 105, 111, 110, 32, 99, 111, 100, 101, 32, 37, 108, 100, 0 ], "i8", ALLOC_NORMAL);
    __str96 = allocate([ 95, 105, 110, 118, 101, 114, 116, 101, 100, 95, 114, 101, 103, 105, 115, 116, 114, 121, 91, 37, 108, 100, 93, 32, 105, 115, 110, 39, 116, 32, 97, 32, 50, 45, 116, 117, 112, 108, 101, 32, 111, 102, 32, 115, 116, 114, 105, 110, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    _append_str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    ___setstate___str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str97 = allocate([ 115, 116, 97, 116, 101, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str98 = allocate([ 115, 108, 111, 116, 32, 115, 116, 97, 116, 101, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str99 = allocate([ 105, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___15090 = allocate([ 108, 111, 97, 100, 95, 112, 114, 111, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str100 = allocate([ 117, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 112, 105, 99, 107, 108, 101, 32, 112, 114, 111, 116, 111, 99, 111, 108, 58, 32, 37, 100, 0 ], "i8", ALLOC_NORMAL);
    __str101 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 108, 111, 97, 100, 32, 107, 101, 121, 44, 32, 39, 37, 115, 39, 46, 0 ], "i8", ALLOC_NORMAL);
    __str102 = allocate([ 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___15506 = allocate([ 110, 111, 108, 111, 97, 100, 95, 101, 120, 116, 101, 110, 115, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str103 = allocate([ 108, 111, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str104 = allocate([ 108, 111, 97, 100, 40, 41, 32, 45, 45, 32, 76, 111, 97, 100, 32, 97, 32, 112, 105, 99, 107, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str105 = allocate([ 110, 111, 108, 111, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str106 = allocate([ 110, 111, 108, 111, 97, 100, 40, 41, 32, 45, 45, 32, 110, 111, 116, 32, 108, 111, 97, 100, 32, 97, 32, 112, 105, 99, 107, 108, 101, 44, 32, 98, 117, 116, 32, 103, 111, 32, 116, 104, 114, 111, 117, 103, 104, 32, 109, 111, 115, 116, 32, 111, 102, 32, 116, 104, 101, 32, 109, 111, 116, 105, 111, 110, 115, 10, 10, 84, 104, 105, 115, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 99, 97, 110, 32, 98, 101, 32, 117, 115, 101, 100, 32, 116, 111, 32, 114, 101, 97, 100, 32, 112, 97, 115, 116, 32, 97, 32, 112, 105, 99, 107, 108, 101, 32, 119, 105, 116, 104, 111, 117, 116, 32, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 105, 110, 103, 10, 97, 110, 121, 32, 111, 98, 106, 101, 99, 116, 115, 32, 111, 114, 32, 105, 109, 112, 111, 114, 116, 105, 110, 103, 32, 97, 110, 121, 32, 109, 111, 100, 117, 108, 101, 115, 46, 32, 32, 73, 116, 32, 99, 97, 110, 32, 97, 108, 115, 111, 32, 98, 101, 32, 117, 115, 101, 100, 32, 116, 111, 32, 102, 105, 110, 100, 32, 97, 108, 108, 10, 112, 101, 114, 115, 105, 115, 116, 101, 110, 116, 32, 114, 101, 102, 101, 114, 101, 110, 99, 101, 115, 32, 119, 105, 116, 104, 111, 117, 116, 32, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 105, 110, 103, 32, 97, 110, 121, 32, 111, 98, 106, 101, 99, 116, 115, 32, 111, 114, 32, 105, 109, 112, 111, 114, 116, 105, 110, 103, 10, 97, 110, 121, 32, 109, 111, 100, 117, 108, 101, 115, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _Unpickler_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _readline_str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _read_str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str107 = allocate([ 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 39, 114, 101, 97, 100, 39, 32, 97, 110, 100, 32, 39, 114, 101, 97, 100, 108, 105, 110, 101, 39, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str108 = allocate([ 112, 101, 114, 115, 105, 115, 116, 101, 110, 116, 95, 108, 111, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str109 = allocate([ 102, 105, 110, 100, 95, 103, 108, 111, 98, 97, 108, 0 ], "i8", ALLOC_NORMAL);
    __str110 = allocate([ 85, 110, 112, 105, 99, 107, 108, 105, 110, 103, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str111 = allocate([ 79, 79, 124, 105, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_16302 = allocate(16, "i8*", ALLOC_NORMAL);
    __str112 = allocate([ 111, 98, 106, 0 ], "i8", ALLOC_NORMAL);
    __str113 = allocate([ 79, 124, 105, 58, 100, 117, 109, 112, 115, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_16339 = allocate(12, "i8*", ALLOC_NORMAL);
    __str114 = allocate([ 83, 58, 108, 111, 97, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    _Unpicklertype__doc__ = allocate([ 79, 98, 106, 101, 99, 116, 115, 32, 116, 104, 97, 116, 32, 107, 110, 111, 119, 32, 104, 111, 119, 32, 116, 111, 32, 117, 110, 112, 105, 99, 107, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str115 = allocate([ 99, 80, 105, 99, 107, 108, 101, 46, 85, 110, 112, 105, 99, 107, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _Unpicklertype = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str116 = allocate([ 100, 117, 109, 112, 40, 111, 98, 106, 44, 32, 102, 105, 108, 101, 44, 32, 112, 114, 111, 116, 111, 99, 111, 108, 61, 48, 41, 32, 45, 45, 32, 87, 114, 105, 116, 101, 32, 97, 110, 32, 111, 98, 106, 101, 99, 116, 32, 105, 110, 32, 112, 105, 99, 107, 108, 101, 32, 102, 111, 114, 109, 97, 116, 32, 116, 111, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 102, 105, 108, 101, 46, 10, 10, 83, 101, 101, 32, 116, 104, 101, 32, 80, 105, 99, 107, 108, 101, 114, 32, 100, 111, 99, 115, 116, 114, 105, 110, 103, 32, 102, 111, 114, 32, 116, 104, 101, 32, 109, 101, 97, 110, 105, 110, 103, 32, 111, 102, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 112, 114, 111, 116, 111, 46, 0 ], "i8", ALLOC_NORMAL);
    __str117 = allocate([ 100, 117, 109, 112, 115, 0 ], "i8", ALLOC_NORMAL);
    __str118 = allocate([ 100, 117, 109, 112, 115, 40, 111, 98, 106, 44, 32, 112, 114, 111, 116, 111, 99, 111, 108, 61, 48, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 97, 110, 32, 111, 98, 106, 101, 99, 116, 32, 105, 110, 32, 112, 105, 99, 107, 108, 101, 32, 102, 111, 114, 109, 97, 116, 46, 10, 10, 83, 101, 101, 32, 116, 104, 101, 32, 80, 105, 99, 107, 108, 101, 114, 32, 100, 111, 99, 115, 116, 114, 105, 110, 103, 32, 102, 111, 114, 32, 116, 104, 101, 32, 109, 101, 97, 110, 105, 110, 103, 32, 111, 102, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 112, 114, 111, 116, 111, 46, 0 ], "i8", ALLOC_NORMAL);
    __str119 = allocate([ 108, 111, 97, 100, 40, 102, 105, 108, 101, 41, 32, 45, 45, 32, 76, 111, 97, 100, 32, 97, 32, 112, 105, 99, 107, 108, 101, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str120 = allocate([ 108, 111, 97, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str121 = allocate([ 108, 111, 97, 100, 115, 40, 115, 116, 114, 105, 110, 103, 41, 32, 45, 45, 32, 76, 111, 97, 100, 32, 97, 32, 112, 105, 99, 107, 108, 101, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str122 = allocate([ 80, 105, 99, 107, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str123 = allocate([ 80, 105, 99, 107, 108, 101, 114, 40, 102, 105, 108, 101, 44, 32, 112, 114, 111, 116, 111, 99, 111, 108, 61, 48, 41, 32, 45, 45, 32, 67, 114, 101, 97, 116, 101, 32, 97, 32, 112, 105, 99, 107, 108, 101, 114, 46, 10, 10, 84, 104, 105, 115, 32, 116, 97, 107, 101, 115, 32, 97, 32, 102, 105, 108, 101, 45, 108, 105, 107, 101, 32, 111, 98, 106, 101, 99, 116, 32, 102, 111, 114, 32, 119, 114, 105, 116, 105, 110, 103, 32, 97, 32, 112, 105, 99, 107, 108, 101, 32, 100, 97, 116, 97, 32, 115, 116, 114, 101, 97, 109, 46, 10, 84, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 112, 114, 111, 116, 111, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 116, 101, 108, 108, 115, 32, 116, 104, 101, 32, 112, 105, 99, 107, 108, 101, 114, 32, 116, 111, 32, 117, 115, 101, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 10, 112, 114, 111, 116, 111, 99, 111, 108, 59, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 112, 114, 111, 116, 111, 99, 111, 108, 115, 32, 97, 114, 101, 32, 48, 44, 32, 49, 44, 32, 50, 46, 32, 32, 84, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 10, 112, 114, 111, 116, 111, 99, 111, 108, 32, 105, 115, 32, 48, 44, 32, 116, 111, 32, 98, 101, 32, 98, 97, 99, 107, 119, 97, 114, 100, 115, 32, 99, 111, 109, 112, 97, 116, 105, 98, 108, 101, 46, 32, 32, 40, 80, 114, 111, 116, 111, 99, 111, 108, 32, 48, 32, 105, 115, 32, 116, 104, 101, 10, 111, 110, 108, 121, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 116, 104, 97, 116, 32, 99, 97, 110, 32, 98, 101, 32, 119, 114, 105, 116, 116, 101, 110, 32, 116, 111, 32, 97, 32, 102, 105, 108, 101, 32, 111, 112, 101, 110, 101, 100, 32, 105, 110, 32, 116, 101, 120, 116, 10, 109, 111, 100, 101, 32, 97, 110, 100, 32, 114, 101, 97, 100, 32, 98, 97, 99, 107, 32, 115, 117, 99, 99, 101, 115, 115, 102, 117, 108, 108, 121, 46, 32, 32, 87, 104, 101, 110, 32, 117, 115, 105, 110, 103, 32, 97, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 104, 105, 103, 104, 101, 114, 10, 116, 104, 97, 110, 32, 48, 44, 32, 109, 97, 107, 101, 32, 115, 117, 114, 101, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 105, 115, 32, 111, 112, 101, 110, 101, 100, 32, 105, 110, 32, 98, 105, 110, 97, 114, 121, 32, 109, 111, 100, 101, 44, 32, 98, 111, 116, 104, 32, 119, 104, 101, 110, 10, 112, 105, 99, 107, 108, 105, 110, 103, 32, 97, 110, 100, 32, 117, 110, 112, 105, 99, 107, 108, 105, 110, 103, 46, 41, 10, 10, 80, 114, 111, 116, 111, 99, 111, 108, 32, 49, 32, 105, 115, 32, 109, 111, 114, 101, 32, 101, 102, 102, 105, 99, 105, 101, 110, 116, 32, 116, 104, 97, 110, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 48, 59, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 50, 32, 105, 115, 10, 109, 111, 114, 101, 32, 101, 102, 102, 105, 99, 105, 101, 110, 116, 32, 116, 104, 97, 110, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 49, 46, 10, 10, 83, 112, 101, 99, 105, 102, 121, 105, 110, 103, 32, 97, 32, 110, 101, 103, 97, 116, 105, 118, 101, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 115, 101, 108, 101, 99, 116, 115, 32, 116, 104, 101, 32, 104, 105, 103, 104, 101, 115, 116, 10, 112, 114, 111, 116, 111, 99, 111, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 46, 32, 32, 84, 104, 101, 32, 104, 105, 103, 104, 101, 114, 32, 116, 104, 101, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 117, 115, 101, 100, 44, 32, 116, 104, 101, 10, 109, 111, 114, 101, 32, 114, 101, 99, 101, 110, 116, 32, 116, 104, 101, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32, 80, 121, 116, 104, 111, 110, 32, 110, 101, 101, 100, 101, 100, 32, 116, 111, 32, 114, 101, 97, 100, 32, 116, 104, 101, 32, 112, 105, 99, 107, 108, 101, 10, 112, 114, 111, 100, 117, 99, 101, 100, 46, 10, 10, 84, 104, 101, 32, 102, 105, 108, 101, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 97, 32, 119, 114, 105, 116, 101, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 116, 104, 97, 116, 32, 97, 99, 99, 101, 112, 116, 115, 32, 97, 32, 115, 105, 110, 103, 108, 101, 10, 115, 116, 114, 105, 110, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 46, 32, 32, 73, 116, 32, 99, 97, 110, 32, 116, 104, 117, 115, 32, 98, 101, 32, 97, 110, 32, 111, 112, 101, 110, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 44, 32, 97, 32, 83, 116, 114, 105, 110, 103, 73, 79, 10, 111, 98, 106, 101, 99, 116, 44, 32, 111, 114, 32, 97, 110, 121, 32, 111, 116, 104, 101, 114, 32, 99, 117, 115, 116, 111, 109, 32, 111, 98, 106, 101, 99, 116, 32, 116, 104, 97, 116, 32, 109, 101, 101, 116, 115, 32, 116, 104, 105, 115, 32, 105, 110, 116, 101, 114, 102, 97, 99, 101, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str124 = allocate([ 85, 110, 112, 105, 99, 107, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str125 = allocate([ 85, 110, 112, 105, 99, 107, 108, 101, 114, 40, 102, 105, 108, 101, 41, 32, 45, 45, 32, 67, 114, 101, 97, 116, 101, 32, 97, 110, 32, 117, 110, 112, 105, 99, 107, 108, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    _cPickle_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str126 = allocate([ 95, 95, 99, 108, 97, 115, 115, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str127 = allocate([ 95, 95, 103, 101, 116, 105, 110, 105, 116, 97, 114, 103, 115, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str128 = allocate([ 95, 95, 100, 105, 99, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str129 = allocate([ 95, 95, 103, 101, 116, 115, 116, 97, 116, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str130 = allocate([ 95, 95, 115, 101, 116, 115, 116, 97, 116, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str131 = allocate([ 95, 95, 110, 97, 109, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str132 = allocate([ 95, 95, 109, 97, 105, 110, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str133 = allocate([ 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str134 = allocate([ 95, 95, 114, 101, 100, 117, 99, 101, 95, 101, 120, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str135 = allocate([ 119, 114, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str136 = allocate([ 97, 112, 112, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str137 = allocate([ 114, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str138 = allocate([ 114, 101, 97, 100, 108, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str139 = allocate([ 100, 105, 115, 112, 97, 116, 99, 104, 95, 116, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str140 = allocate([ 95, 101, 120, 116, 101, 110, 115, 105, 111, 110, 95, 114, 101, 103, 105, 115, 116, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str141 = allocate([ 95, 105, 110, 118, 101, 114, 116, 101, 100, 95, 114, 101, 103, 105, 115, 116, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str142 = allocate([ 95, 101, 120, 116, 101, 110, 115, 105, 111, 110, 95, 99, 97, 99, 104, 101, 0 ], "i8", ALLOC_NORMAL);
    __str143 = allocate([ 95, 95, 98, 117, 105, 108, 116, 105, 110, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str144 = allocate([ 95, 95, 98, 117, 105, 108, 116, 105, 110, 115, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str145 = allocate([ 100, 101, 102, 32, 95, 95, 115, 116, 114, 95, 95, 40, 115, 101, 108, 102, 41, 58, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 115, 101, 108, 102, 46, 97, 114, 103, 115, 32, 97, 110, 100, 32, 40, 39, 37, 115, 39, 32, 37, 32, 115, 101, 108, 102, 46, 97, 114, 103, 115, 91, 48, 93, 41, 32, 111, 114, 32, 39, 40, 119, 104, 97, 116, 41, 39, 10, 0 ], "i8", ALLOC_NORMAL);
    __str146 = allocate([ 99, 80, 105, 99, 107, 108, 101, 46, 80, 105, 99, 107, 108, 101, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str147 = allocate([ 99, 80, 105, 99, 107, 108, 101, 46, 80, 105, 99, 107, 108, 105, 110, 103, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str148 = allocate([ 100, 101, 102, 32, 95, 95, 115, 116, 114, 95, 95, 40, 115, 101, 108, 102, 41, 58, 10, 32, 32, 97, 61, 115, 101, 108, 102, 46, 97, 114, 103, 115, 10, 32, 32, 97, 61, 97, 32, 97, 110, 100, 32, 116, 121, 112, 101, 40, 97, 91, 48, 93, 41, 32, 111, 114, 32, 39, 40, 119, 104, 97, 116, 41, 39, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 39, 67, 97, 110, 110, 111, 116, 32, 112, 105, 99, 107, 108, 101, 32, 37, 115, 32, 111, 98, 106, 101, 99, 116, 115, 39, 32, 37, 32, 97, 10, 0 ], "i8", ALLOC_NORMAL);
    __str149 = allocate([ 99, 80, 105, 99, 107, 108, 101, 46, 85, 110, 112, 105, 99, 107, 108, 101, 97, 98, 108, 101, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str150 = allocate([ 99, 80, 105, 99, 107, 108, 101, 46, 85, 110, 112, 105, 99, 107, 108, 105, 110, 103, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str151 = allocate([ 99, 80, 105, 99, 107, 108, 101, 46, 66, 97, 100, 80, 105, 99, 107, 108, 101, 71, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str152 = allocate([ 80, 105, 99, 107, 108, 101, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str153 = allocate([ 85, 110, 112, 105, 99, 107, 108, 101, 97, 98, 108, 101, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str154 = allocate([ 66, 97, 100, 80, 105, 99, 107, 108, 101, 71, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str155 = allocate([ 99, 83, 116, 114, 105, 110, 103, 73, 79, 46, 99, 83, 116, 114, 105, 110, 103, 73, 79, 95, 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str156 = allocate([ 49, 46, 55, 49, 0 ], "i8", ALLOC_NORMAL);
    __str157 = allocate([ 99, 80, 105, 99, 107, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str158 = allocate([ 95, 95, 118, 101, 114, 115, 105, 111, 110, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str159 = allocate([ 72, 73, 71, 72, 69, 83, 84, 95, 80, 82, 79, 84, 79, 67, 79, 76, 0 ], "i8", ALLOC_NORMAL);
    __str160 = allocate([ 50, 46, 48, 0 ], "i8", ALLOC_NORMAL);
    __str161 = allocate([ 91, 115, 115, 115, 115, 115, 93, 0 ], "i8", ALLOC_NORMAL);
    __str162 = allocate([ 49, 46, 48, 0 ], "i8", ALLOC_NORMAL);
    __str163 = allocate([ 49, 46, 49, 0 ], "i8", ALLOC_NORMAL);
    __str164 = allocate([ 49, 46, 50, 0 ], "i8", ALLOC_NORMAL);
    __str165 = allocate([ 49, 46, 51, 0 ], "i8", ALLOC_NORMAL);
    __str166 = allocate([ 102, 111, 114, 109, 97, 116, 95, 118, 101, 114, 115, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str167 = allocate([ 99, 111, 109, 112, 97, 116, 105, 98, 108, 101, 95, 102, 111, 114, 109, 97, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_PdataType + 12] = __str;
    HEAP[_PdataType + 24] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_PdataType + 88] = __str1;
    HEAP[_buf_9410] = __str9;
    HEAP[_buf_9410 + 4] = __str10;
    HEAP[_hexdigit_9736] = __str13;
    HEAP[_Pickler_methods] = __str54;
    HEAP[_Pickler_methods + 4] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_Pickler_methods + 12] = __str55;
    HEAP[_Pickler_methods + 16] = __str56;
    HEAP[_Pickler_methods + 20] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_Pickler_methods + 28] = __str57;
    HEAP[_Pickler_methods + 32] = __str58;
    HEAP[_Pickler_methods + 36] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_Pickler_methods + 44] = __str59;
    HEAP[_kwlist_11959] = __str66;
    HEAP[_kwlist_11959 + 4] = __str67;
    HEAP[_Pickler_members] = __str72;
    HEAP[_Pickler_members + 20] = __str73;
    HEAP[_Pickler_getsets] = __str68;
    HEAP[_Pickler_getsets + 4] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_Pickler_getsets + 8] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_Pickler_getsets + 20] = __str74;
    HEAP[_Pickler_getsets + 28] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_Pickler_getsets + 40] = __str70;
    HEAP[_Pickler_getsets + 44] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_Pickler_getsets + 48] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_Pickler_getsets + 60] = __str75;
    HEAP[_Pickler_getsets + 64] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_Picklertype + 12] = __str76;
    HEAP[_Picklertype + 24] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_Picklertype + 72] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_Picklertype + 76] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_Picklertype + 88] = _Picklertype__doc__;
    HEAP[_Picklertype + 92] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_Picklertype + 96] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_Picklertype + 116] = _Pickler_methods;
    HEAP[_Picklertype + 120] = _Pickler_members;
    HEAP[_Picklertype + 124] = _Pickler_getsets;
    HEAP[_Unpickler_methods] = __str103;
    HEAP[_Unpickler_methods + 4] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_Unpickler_methods + 12] = __str104;
    HEAP[_Unpickler_methods + 16] = __str105;
    HEAP[_Unpickler_methods + 20] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_Unpickler_methods + 28] = __str106;
    HEAP[_kwlist_16302] = __str112;
    HEAP[_kwlist_16302 + 4] = __str66;
    HEAP[_kwlist_16302 + 8] = __str67;
    HEAP[_kwlist_16339] = __str112;
    HEAP[_kwlist_16339 + 4] = __str67;
    HEAP[_Unpicklertype + 12] = __str115;
    HEAP[_Unpicklertype + 24] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_Unpicklertype + 32] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_Unpicklertype + 36] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_Unpicklertype + 88] = _Unpicklertype__doc__;
    HEAP[_Unpicklertype + 92] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_Unpicklertype + 96] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_cPickle_methods] = __str54;
    HEAP[_cPickle_methods + 4] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_cPickle_methods + 12] = __str116;
    HEAP[_cPickle_methods + 16] = __str117;
    HEAP[_cPickle_methods + 20] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_cPickle_methods + 28] = __str118;
    HEAP[_cPickle_methods + 32] = __str103;
    HEAP[_cPickle_methods + 36] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_cPickle_methods + 44] = __str119;
    HEAP[_cPickle_methods + 48] = __str120;
    HEAP[_cPickle_methods + 52] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_cPickle_methods + 60] = __str121;
    HEAP[_cPickle_methods + 64] = __str122;
    HEAP[_cPickle_methods + 68] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_cPickle_methods + 76] = __str123;
    HEAP[_cPickle_methods + 80] = __str124;
    HEAP[_cPickle_methods + 84] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_cPickle_methods + 92] = __str125;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
