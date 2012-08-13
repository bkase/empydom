"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 196;
  var $1___SIZE = 640;
  var $2___SIZE = 16;
  var $3___SIZE = 16;
  var $4___SIZE = 300;
  var $5___SIZE = 20;
  var $struct__0triple___SIZE = 12;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyCodeObject___SIZE = 72;
  var $struct_PyDateTime_CAPI___SIZE = 44;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyListObject___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_PyUnicodeObject___SIZE = 24;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_all_structmembers___SIZE = 60;
  var $struct_all_structmembers___FLATTENER = [ 0, 1, 2, 4, 6, 8, 12, 16, 20, 24, 28, 36, 44, 52 ];
  var $struct_known_capsule___SIZE = 12;
  var $struct_test_structmembers___SIZE = 68;
  var _PyDateTimeAPI;
  var _TestError;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var __str5;
  var __HashInheritanceTester_Type;
  var __str6;
  var __str7;
  var __str8;
  var __str9;
  var __str10;
  var __str11;
  var _memoryviewtester_as_buffer;
  var __str12;
  var __MemoryViewTester_Type;
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
  var __str26;
  var __str27;
  var __str28;
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
  var _C_59_9728;
  var _fmt_9726;
  var __str58;
  var _keywords_9725;
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
  var _x;
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
  var _kwlist_10077;
  var __str94;
  var __str95;
  var _C_92_10153;
  var __str96;
  var __str97;
  var __str98;
  var __str99;
  var __str100;
  var _test_run_counter;
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
  var _capsule_name;
  var __str121;
  var _capsule_pointer;
  var __str122;
  var _capsule_context;
  var __str123;
  var _capsule_error;
  var _capsule_destructor_call_count;
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
  var _buffer_10470;
  var __str143;
  var __str144;
  var __str145;
  var __str146;
  var __str147;
  var __str148;
  var __str149;
  var __str150;
  var _kwlist_10671;
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
  var _TestMethods;
  var __str184;
  var __str185;
  var __str186;
  var __str187;
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
  var _test_members;
  var _fmt_10711;
  var __str198;
  var _keywords_10710;
  var __str199;
  var __str200;
  var __str201;
  var __str202;
  var _test_structmembersType;
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
  var __str219;
  var __str220;
  var __str221;
  var __str222;
  var __str223;
  var __str224;
  var __str225;
  var __str226;
  var __str227;
  var __str228;
  function _raiseTestError($test_name, $msg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 2064;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 2064);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $test_name_addr = __stackBase__;
      var $msg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $buf = __stackBase__ + 16;
      
      HEAP[$test_name_addr] = $test_name;
      HEAP[$msg_addr] = $msg;
      var $1 = HEAP[$test_name_addr];
      var $2 = _strlen($1);
      var $3 = HEAP[$msg_addr];
      var $4 = _strlen($3);
      
      
      if ($2 + $4 > 1998) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = HEAP[_TestError];
      _PyErr_SetString($7, __str);
      __label__ = 3;
      break;
     case 2:
      var $buf2 = $buf;
      var $8 = HEAP[$test_name_addr];
      var $9 = HEAP[$msg_addr];
      var $10 = _PyOS_snprintf($buf2, 2048, __str1, allocate([ $8, 0, 0, 0, $9, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      var $11 = HEAP[_TestError];
      var $buf3 = $buf;
      _PyErr_SetString($11, $buf3);
      __label__ = 3;
      break;
     case 3:
      HEAP[$0] = 0;
      var $12 = HEAP[$0];
      HEAP[$retval] = $12;
      __label__ = 4;
      break;
     case 4:
      var $retval5 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sizeof_error($fatname, $typname, $expected, $got) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1048;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 1048);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $fatname_addr = __stackBase__;
      var $typname_addr = __stackBase__ + 4;
      var $expected_addr = __stackBase__ + 8;
      var $got_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $buf = __stackBase__ + 24;
      
      HEAP[$fatname_addr] = $fatname;
      HEAP[$typname_addr] = $typname;
      HEAP[$expected_addr] = $expected;
      HEAP[$got_addr] = $got;
      var $buf1 = $buf;
      var $1 = HEAP[$fatname_addr];
      var $2 = HEAP[$expected_addr];
      var $3 = HEAP[$typname_addr];
      var $4 = HEAP[$got_addr];
      var $5 = _PyOS_snprintf($buf1, 1024, __str2, allocate([ $1, 0, 0, 0, $2, 0, 0, 0, $3, 0, 0, 0, $4, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      var $6 = HEAP[_TestError];
      var $buf2 = $buf;
      _PyErr_SetString($6, $buf2);
      HEAP[$0] = 0;
      var $7 = HEAP[$0];
      HEAP[$retval] = $7;
      __label__ = 1;
      break;
     case 1:
      var $retval3 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_config($self) {
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
  function _test_list_api($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $list = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $anint = __stackBase__ + 20;
      var $anint14 = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      var $1 = _PyList_New(30);
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
      __label__ = 23;
      break;
     case 2:
      HEAP[$i] = 0;
      __label__ = 8;
      break;
     case 3:
      var $4 = HEAP[$i];
      var $5 = _PyInt_FromLong($4);
      HEAP[$anint] = $5;
      
      
      if (HEAP[$anint] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $11 = HEAP[HEAP[$list]] - 1;
      
      var $13 = HEAP[$list];
      HEAP[$13] = $11;
      
      
      
      
      if (HEAP[HEAP[$list]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$list] + 4] + 24];
      var $23 = HEAP[$list];
      FUNCTION_TABLE[$22]($23);
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 7:
      
      
      
      
      
      var $29 = HEAP[HEAP[$list] + 12] + 4 * HEAP[$i];
      var $30 = HEAP[$anint];
      HEAP[$29] = $30;
      
      var $32 = HEAP[$i] + 1;
      HEAP[$i] = $32;
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$i] <= 29) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $35 = HEAP[$list];
      var $36 = _PyList_Reverse($35);
      HEAP[$i] = $36;
      
      
      if (HEAP[$i] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      var $42 = HEAP[HEAP[$list]] - 1;
      
      var $44 = HEAP[$list];
      HEAP[$44] = $42;
      
      
      
      
      if (HEAP[HEAP[$list]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $53 = HEAP[HEAP[HEAP[$list] + 4] + 24];
      var $54 = HEAP[$list];
      FUNCTION_TABLE[$53]($54);
      __label__ = 12;
      break;
     case 12:
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 13:
      HEAP[$i] = 0;
      __label__ = 19;
      break;
     case 14:
      
      
      
      
      
      
      var $61 = HEAP[HEAP[HEAP[$list] + 12] + 4 * HEAP[$i]];
      HEAP[$anint14] = $61;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$anint14] + 8] != 29 - HEAP[$i]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      var $69 = HEAP[_TestError];
      _PyErr_SetString($69, __str3);
      
      
      
      var $73 = HEAP[HEAP[$list]] - 1;
      
      var $75 = HEAP[$list];
      HEAP[$75] = $73;
      
      
      
      
      if (HEAP[HEAP[$list]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $84 = HEAP[HEAP[HEAP[$list] + 4] + 24];
      var $85 = HEAP[$list];
      FUNCTION_TABLE[$84]($85);
      __label__ = 17;
      break;
     case 17:
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 18:
      
      var $87 = HEAP[$i] + 1;
      HEAP[$i] = $87;
      __label__ = 19;
      break;
     case 19:
      
      
      if (HEAP[$i] <= 29) {
        __label__ = 14;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      var $93 = HEAP[HEAP[$list]] - 1;
      
      var $95 = HEAP[$list];
      HEAP[$95] = $93;
      
      
      
      
      if (HEAP[HEAP[$list]] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $104 = HEAP[HEAP[HEAP[$list] + 4] + 24];
      var $105 = HEAP[$list];
      FUNCTION_TABLE[$104]($105);
      __label__ = 22;
      break;
     case 22:
      
      var $107 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $107;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 23;
      break;
     case 23:
      var $108 = HEAP[$0];
      HEAP[$retval] = $108;
      __label__ = 24;
      break;
     case 24:
      var $retval24 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_dict_inner($count) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $count_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $pos = __stackBase__ + 12;
      var $iterations = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $dict = __stackBase__ + 24;
      var $v = __stackBase__ + 28;
      var $k = __stackBase__ + 32;
      var $o = __stackBase__ + 36;
      
      HEAP[$count_addr] = $count;
      HEAP[$pos] = 0;
      HEAP[$iterations] = 0;
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
      __label__ = 22;
      break;
     case 2:
      HEAP[$i] = 0;
      __label__ = 6;
      break;
     case 3:
      var $4 = HEAP[$i];
      var $5 = _PyInt_FromLong($4);
      HEAP[$v] = $5;
      var $6 = HEAP[$v];
      var $7 = HEAP[$v];
      var $8 = HEAP[$dict];
      var $9 = _PyDict_SetItem($8, $7, $6);
      var $10 = HEAP[$v];
      
      
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
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $23 = HEAP[$v];
      FUNCTION_TABLE[$22]($23);
      __label__ = 5;
      break;
     case 5:
      
      var $25 = HEAP[$i] + 1;
      HEAP[$i] = $25;
      __label__ = 6;
      break;
     case 6:
      
      
      
      if (HEAP[$i] < HEAP[$count_addr]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      __label__ = 16;
      break;
     case 8:
      
      var $30 = HEAP[$iterations] + 1;
      HEAP[$iterations] = $30;
      
      
      
      
      var $35 = HEAP[HEAP[$v] + 8] + 1;
      HEAP[$i] = $35;
      var $36 = HEAP[$i];
      var $37 = _PyInt_FromLong($36);
      HEAP[$o] = $37;
      
      
      if (HEAP[$o] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = -1;
      __label__ = 22;
      break;
     case 10:
      var $40 = HEAP[$k];
      var $41 = HEAP[$dict];
      var $42 = HEAP[$o];
      var $43 = _PyDict_SetItem($41, $40, $42);
      
      if ($43 < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      var $48 = HEAP[HEAP[$o]] - 1;
      
      var $50 = HEAP[$o];
      HEAP[$50] = $48;
      
      
      
      
      if (HEAP[HEAP[$o]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $59 = HEAP[HEAP[HEAP[$o] + 4] + 24];
      var $60 = HEAP[$o];
      FUNCTION_TABLE[$59]($60);
      __label__ = 13;
      break;
     case 13:
      HEAP[$0] = -1;
      __label__ = 22;
      break;
     case 14:
      
      
      
      var $64 = HEAP[HEAP[$o]] - 1;
      
      var $66 = HEAP[$o];
      HEAP[$66] = $64;
      
      
      
      
      if (HEAP[HEAP[$o]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $75 = HEAP[HEAP[HEAP[$o] + 4] + 24];
      var $76 = HEAP[$o];
      FUNCTION_TABLE[$75]($76);
      __label__ = 16;
      break;
     case 16:
      var $77 = HEAP[$dict];
      var $78 = _PyDict_Next($77, $pos, $k, $v);
      
      if ($78 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      var $83 = HEAP[HEAP[$dict]] - 1;
      
      var $85 = HEAP[$dict];
      HEAP[$85] = $83;
      
      
      
      
      if (HEAP[HEAP[$dict]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $94 = HEAP[HEAP[HEAP[$dict] + 4] + 24];
      var $95 = HEAP[$dict];
      FUNCTION_TABLE[$94]($95);
      __label__ = 19;
      break;
     case 19:
      
      
      
      if (HEAP[$iterations] != HEAP[$count_addr]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $99 = HEAP[_TestError];
      _PyErr_SetString($99, __str4);
      HEAP[$0] = -1;
      __label__ = 22;
      break;
     case 21:
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 22:
      var $100 = HEAP[$0];
      HEAP[$retval] = $100;
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
  function _test_dict_iteration($self) {
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
      var $i = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $self;
      HEAP[$i] = 0;
      __label__ = 4;
      break;
     case 1:
      var $1 = HEAP[$i];
      var $2 = _test_dict_inner($1);
      
      if ($2 < 0) {
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
      
      var $5 = HEAP[$i] + 1;
      HEAP[$i] = $5;
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[$i] <= 199) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $9 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $9;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 6;
      break;
     case 6:
      var $10 = HEAP[$0];
      HEAP[$retval] = $10;
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
  function _test_lazy_hash_inheritance($self) {
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
      var $type = __stackBase__ + 12;
      var $obj = __stackBase__ + 16;
      var $hash = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$type] = __HashInheritanceTester_Type;
      
      
      
      
      if (HEAP[HEAP[$type] + 132] != 0) {
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
      __label__ = 24;
      break;
     case 2:
      var $7 = HEAP[$type];
      var $8 = __PyObject_New($7);
      HEAP[$obj] = $8;
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyErr_Clear();
      var $11 = HEAP[_TestError];
      _PyErr_SetString($11, __str6);
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 4:
      
      
      
      
      if (HEAP[HEAP[$type] + 132] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $16 = HEAP[_TestError];
      _PyErr_SetString($16, __str7);
      
      
      
      var $20 = HEAP[HEAP[$obj]] - 1;
      
      var $22 = HEAP[$obj];
      HEAP[$22] = $20;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $31 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $32 = HEAP[$obj];
      FUNCTION_TABLE[$31]($32);
      __label__ = 7;
      break;
     case 7:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 8:
      var $33 = HEAP[$obj];
      var $34 = _PyObject_Hash($33);
      HEAP[$hash] = $34;
      
      var $36 = HEAP[$hash] == -1;
      if ($36) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      var $37 = _PyErr_Occurred();
      
      if ($37 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      _PyErr_Clear();
      var $39 = HEAP[_TestError];
      _PyErr_SetString($39, __str8);
      
      
      
      var $43 = HEAP[HEAP[$obj]] - 1;
      
      var $45 = HEAP[$obj];
      HEAP[$45] = $43;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $55 = HEAP[$obj];
      FUNCTION_TABLE[$54]($55);
      __label__ = 12;
      break;
     case 12:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 13:
      
      
      
      
      if (HEAP[HEAP[$type] + 132] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      var $60 = HEAP[_TestError];
      _PyErr_SetString($60, __str9);
      
      
      
      var $64 = HEAP[HEAP[$obj]] - 1;
      
      var $66 = HEAP[$obj];
      HEAP[$66] = $64;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $75 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $76 = HEAP[$obj];
      FUNCTION_TABLE[$75]($76);
      __label__ = 16;
      break;
     case 16:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 17:
      
      
      
      
      
      if (HEAP[HEAP[$type] + 60] != HEAP[_PyType_Type + 60]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      var $82 = HEAP[_TestError];
      _PyErr_SetString($82, __str10);
      
      
      
      var $86 = HEAP[HEAP[$obj]] - 1;
      
      var $88 = HEAP[$obj];
      HEAP[$88] = $86;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $97 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $98 = HEAP[$obj];
      FUNCTION_TABLE[$97]($98);
      __label__ = 20;
      break;
     case 20:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 21:
      
      
      
      var $102 = HEAP[HEAP[$obj]] - 1;
      
      var $104 = HEAP[$obj];
      HEAP[$104] = $102;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $113 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $114 = HEAP[$obj];
      FUNCTION_TABLE[$113]($114);
      __label__ = 23;
      break;
     case 23:
      
      var $116 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $116;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 24;
      break;
     case 24:
      var $117 = HEAP[$0];
      HEAP[$retval] = $117;
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
  function _broken_buffer_getbuffer($self, $view, $flags) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $view_addr = __stackBase__ + 4;
      var $flags_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$view_addr] = $view;
      HEAP[$flags_addr] = $flags;
      var $1 = HEAP[_TestError];
      _PyErr_SetString($1, __str11);
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
  function _test_broken_memoryview($self) {
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
      var $obj = __stackBase__ + 12;
      var $res = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      var $1 = __PyObject_New(__MemoryViewTester_Type);
      HEAP[$obj] = $1;
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      _PyErr_Clear();
      var $4 = HEAP[_TestError];
      _PyErr_SetString($4, __str13);
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 2:
      var $5 = HEAP[$obj];
      var $6 = _PyMemoryView_FromObject($5);
      HEAP[$res] = $6;
      
      
      if (HEAP[$res] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $9 = _PyErr_Occurred();
      
      if ($9 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 4:
      var $11 = HEAP[_TestError];
      _PyErr_SetString($11, __str14);
      
      
      if (HEAP[$res] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
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
      
      
      
      var $33 = HEAP[HEAP[$obj]] - 1;
      
      var $35 = HEAP[$obj];
      HEAP[$35] = $33;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $45 = HEAP[$obj];
      FUNCTION_TABLE[$44]($45);
      __label__ = 9;
      break;
     case 9:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 10:
      _PyErr_Clear();
      
      
      
      var $49 = HEAP[HEAP[$obj]] - 1;
      
      var $51 = HEAP[$obj];
      HEAP[$51] = $49;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $61 = HEAP[$obj];
      FUNCTION_TABLE[$60]($61);
      __label__ = 12;
      break;
     case 12:
      
      var $63 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $63;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 13;
      break;
     case 13:
      var $64 = HEAP[$0];
      HEAP[$retval] = $64;
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
  function _raise_test_long_error($msg) {
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
      
      HEAP[__stackBase__] = $msg;
      var $1 = HEAP[__stackBase__];
      var $2 = _raiseTestError(__str15, $1);
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
  function _test_long_api_inner($error) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 72;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $error_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_24 = __stackBase__ + 12;
      var $NBITS = __stackBase__ + 16;
      var $base = __stackBase__ + 20;
      var $pyresult = __stackBase__ + 24;
      var $i = __stackBase__ + 28;
      var $j = __stackBase__ + 32;
      var $in = __stackBase__ + 36;
      var $out = __stackBase__ + 40;
      var $uin = __stackBase__ + 44;
      var $uout = __stackBase__ + 48;
      var $one = __stackBase__ + 52;
      var $x = __stackBase__ + 56;
      var $y = __stackBase__ + 60;
      var $out27 = __stackBase__ + 64;
      var $uout28 = __stackBase__ + 68;
      
      HEAP[$error_addr] = $error;
      HEAP[$NBITS] = 32;
      HEAP[$base] = 1;
      HEAP[$i] = 0;
      __label__ = 26;
      break;
     case 1:
      HEAP[$j] = 0;
      __label__ = 24;
      break;
     case 2:
      
      
      if (HEAP[$j] > 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $4 = 0 - HEAP[$base];
      HEAP[$iftmp_24] = $4;
      __label__ = 5;
      break;
     case 4:
      var $5 = HEAP[$base];
      HEAP[$iftmp_24] = $5;
      __label__ = 5;
      break;
     case 5:
      var $6 = HEAP[$iftmp_24];
      HEAP[$uin] = $6;
      
      
      
      
      var $11 = HEAP[$j] % 3 + HEAP[$uin] - 1;
      HEAP[$uin] = $11;
      var $12 = HEAP[$uin];
      var $13 = _PyLong_FromUnsignedLong($12);
      HEAP[$pyresult] = $13;
      
      
      if (HEAP[$pyresult] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $16 = HEAP[$error_addr];
      var $17 = FUNCTION_TABLE[$16](__str16);
      HEAP[$0] = $17;
      __label__ = 82;
      break;
     case 7:
      var $18 = HEAP[$pyresult];
      var $19 = _PyLong_AsUnsignedLong($18);
      HEAP[$uout] = $19;
      
      var $21 = HEAP[$uout] == -1;
      if ($21) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      var $22 = _PyErr_Occurred();
      
      if ($22 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $24 = HEAP[$error_addr];
      var $25 = FUNCTION_TABLE[$24](__str17);
      HEAP[$0] = $25;
      __label__ = 82;
      break;
     case 10:
      
      
      
      if (HEAP[$uout] != HEAP[$uin]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $29 = HEAP[$error_addr];
      var $30 = FUNCTION_TABLE[$29](__str18);
      HEAP[$0] = $30;
      __label__ = 82;
      break;
     case 12:
      
      
      
      var $34 = HEAP[HEAP[$pyresult]] - 1;
      
      var $36 = HEAP[$pyresult];
      HEAP[$36] = $34;
      
      
      
      
      if (HEAP[HEAP[$pyresult]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $45 = HEAP[HEAP[HEAP[$pyresult] + 4] + 24];
      var $46 = HEAP[$pyresult];
      FUNCTION_TABLE[$45]($46);
      __label__ = 14;
      break;
     case 14:
      HEAP[$pyresult] = 0;
      var $47 = HEAP[$uin];
      HEAP[$in] = $47;
      var $48 = HEAP[$in];
      var $49 = _PyLong_FromLong($48);
      HEAP[$pyresult] = $49;
      
      
      if (HEAP[$pyresult] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $52 = HEAP[$error_addr];
      var $53 = FUNCTION_TABLE[$52](__str19);
      HEAP[$0] = $53;
      __label__ = 82;
      break;
     case 16:
      var $54 = HEAP[$pyresult];
      var $55 = _PyLong_AsLong($54);
      HEAP[$out] = $55;
      
      var $57 = HEAP[$out] == -1;
      if ($57) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      var $58 = _PyErr_Occurred();
      
      if ($58 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $60 = HEAP[$error_addr];
      var $61 = FUNCTION_TABLE[$60](__str20);
      HEAP[$0] = $61;
      __label__ = 82;
      break;
     case 19:
      
      
      
      if (HEAP[$out] != HEAP[$in]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $65 = HEAP[$error_addr];
      var $66 = FUNCTION_TABLE[$65](__str21);
      HEAP[$0] = $66;
      __label__ = 82;
      break;
     case 21:
      
      
      
      var $70 = HEAP[HEAP[$pyresult]] - 1;
      
      var $72 = HEAP[$pyresult];
      HEAP[$72] = $70;
      
      
      
      
      if (HEAP[HEAP[$pyresult]] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $81 = HEAP[HEAP[HEAP[$pyresult] + 4] + 24];
      var $82 = HEAP[$pyresult];
      FUNCTION_TABLE[$81]($82);
      __label__ = 23;
      break;
     case 23:
      HEAP[$pyresult] = 0;
      
      var $84 = HEAP[$j] + 1;
      HEAP[$j] = $84;
      __label__ = 24;
      break;
     case 24:
      
      
      if (HEAP[$j] <= 5) {
        __label__ = 2;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      var $88 = HEAP[$i] + 1;
      HEAP[$i] = $88;
      
      var $90 = HEAP[$base] << 1;
      HEAP[$base] = $90;
      __label__ = 26;
      break;
     case 26:
      
      
      
      
      if (HEAP[$NBITS] + 1 > HEAP[$i]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      var $95 = _PyLong_FromLong(1);
      HEAP[$one] = $95;
      
      
      if (HEAP[$one] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      var $98 = HEAP[$error_addr];
      var $99 = FUNCTION_TABLE[$98](__str22);
      HEAP[$0] = $99;
      __label__ = 82;
      break;
     case 29:
      var $100 = HEAP[$one];
      var $101 = _PyNumber_Negative($100);
      HEAP[$x] = $101;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      var $104 = HEAP[$error_addr];
      var $105 = FUNCTION_TABLE[$104](__str23);
      HEAP[$0] = $105;
      __label__ = 82;
      break;
     case 31:
      var $106 = HEAP[$x];
      var $107 = _PyLong_AsUnsignedLong($106);
      HEAP[$uout28] = $107;
      
      var $109 = HEAP[$uout28] != -1;
      if ($109) {
        __label__ = 33;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      var $110 = _PyErr_Occurred();
      
      if ($110 == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      var $112 = HEAP[$error_addr];
      var $113 = FUNCTION_TABLE[$112](__str24);
      HEAP[$0] = $113;
      __label__ = 82;
      break;
     case 34:
      var $114 = HEAP[_PyExc_OverflowError];
      var $115 = _PyErr_ExceptionMatches($114);
      
      if ($115 == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      var $117 = HEAP[$error_addr];
      var $118 = FUNCTION_TABLE[$117](__str25);
      HEAP[$0] = $118;
      __label__ = 82;
      break;
     case 36:
      _PyErr_Clear();
      
      
      
      var $122 = HEAP[HEAP[$x]] - 1;
      
      var $124 = HEAP[$x];
      HEAP[$124] = $122;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $133 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $134 = HEAP[$x];
      FUNCTION_TABLE[$133]($134);
      __label__ = 38;
      break;
     case 38:
      HEAP[$x] = 0;
      var $135 = HEAP[$NBITS];
      var $136 = _PyLong_FromLong($135);
      HEAP[$y] = $136;
      
      
      if (HEAP[$y] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      var $139 = HEAP[$error_addr];
      var $140 = FUNCTION_TABLE[$139](__str22);
      HEAP[$0] = $140;
      __label__ = 82;
      break;
     case 40:
      var $141 = HEAP[$one];
      var $142 = HEAP[$y];
      var $143 = _PyNumber_Lshift($141, $142);
      HEAP[$x] = $143;
      
      
      
      var $147 = HEAP[HEAP[$y]] - 1;
      
      var $149 = HEAP[$y];
      HEAP[$149] = $147;
      
      
      
      
      if (HEAP[HEAP[$y]] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $158 = HEAP[HEAP[HEAP[$y] + 4] + 24];
      var $159 = HEAP[$y];
      FUNCTION_TABLE[$158]($159);
      __label__ = 42;
      break;
     case 42:
      HEAP[$y] = 0;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      var $162 = HEAP[$error_addr];
      var $163 = FUNCTION_TABLE[$162](__str26);
      HEAP[$0] = $163;
      __label__ = 82;
      break;
     case 44:
      var $164 = HEAP[$x];
      var $165 = _PyLong_AsUnsignedLong($164);
      HEAP[$uout28] = $165;
      
      var $167 = HEAP[$uout28] != -1;
      if ($167) {
        __label__ = 46;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 45:
      var $168 = _PyErr_Occurred();
      
      if ($168 == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      var $170 = HEAP[$error_addr];
      var $171 = FUNCTION_TABLE[$170](__str27);
      HEAP[$0] = $171;
      __label__ = 82;
      break;
     case 47:
      var $172 = HEAP[_PyExc_OverflowError];
      var $173 = _PyErr_ExceptionMatches($172);
      
      if ($173 == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      var $175 = HEAP[$error_addr];
      var $176 = FUNCTION_TABLE[$175](__str28);
      HEAP[$0] = $176;
      __label__ = 82;
      break;
     case 49:
      _PyErr_Clear();
      var $177 = HEAP[$x];
      var $178 = HEAP[$one];
      var $179 = _PyNumber_Rshift($177, $178);
      HEAP[$y] = $179;
      
      
      
      var $183 = HEAP[HEAP[$x]] - 1;
      
      var $185 = HEAP[$x];
      HEAP[$185] = $183;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      
      
      
      var $194 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $195 = HEAP[$x];
      FUNCTION_TABLE[$194]($195);
      __label__ = 51;
      break;
     case 51:
      HEAP[$x] = 0;
      
      
      if (HEAP[$y] == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      var $198 = HEAP[$error_addr];
      var $199 = FUNCTION_TABLE[$198](__str29);
      HEAP[$0] = $199;
      __label__ = 82;
      break;
     case 53:
      var $200 = HEAP[$y];
      var $201 = _PyLong_AsLong($200);
      HEAP[$out27] = $201;
      
      var $203 = HEAP[$out27] != -1;
      if ($203) {
        __label__ = 55;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 54:
      var $204 = _PyErr_Occurred();
      
      if ($204 == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      var $206 = HEAP[$error_addr];
      var $207 = FUNCTION_TABLE[$206](__str30);
      HEAP[$0] = $207;
      __label__ = 82;
      break;
     case 56:
      var $208 = HEAP[_PyExc_OverflowError];
      var $209 = _PyErr_ExceptionMatches($208);
      
      if ($209 == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      var $211 = HEAP[$error_addr];
      var $212 = FUNCTION_TABLE[$211](__str31);
      HEAP[$0] = $212;
      __label__ = 82;
      break;
     case 58:
      _PyErr_Clear();
      var $213 = HEAP[$y];
      var $214 = _PyNumber_Negative($213);
      HEAP[$x] = $214;
      
      
      
      var $218 = HEAP[HEAP[$y]] - 1;
      
      var $220 = HEAP[$y];
      HEAP[$220] = $218;
      
      
      
      
      if (HEAP[HEAP[$y]] == 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      
      
      
      
      var $229 = HEAP[HEAP[HEAP[$y] + 4] + 24];
      var $230 = HEAP[$y];
      FUNCTION_TABLE[$229]($230);
      __label__ = 60;
      break;
     case 60:
      HEAP[$y] = 0;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      var $233 = HEAP[$error_addr];
      var $234 = FUNCTION_TABLE[$233](__str23);
      HEAP[$0] = $234;
      __label__ = 82;
      break;
     case 62:
      var $235 = HEAP[$x];
      var $236 = HEAP[$one];
      var $237 = _PyNumber_Subtract($235, $236);
      HEAP[$y] = $237;
      
      
      
      var $241 = HEAP[HEAP[$x]] - 1;
      
      var $243 = HEAP[$x];
      HEAP[$243] = $241;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      
      
      
      
      var $252 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $253 = HEAP[$x];
      FUNCTION_TABLE[$252]($253);
      __label__ = 64;
      break;
     case 64:
      HEAP[$x] = 0;
      
      
      if (HEAP[$y] == 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      var $256 = HEAP[$error_addr];
      var $257 = FUNCTION_TABLE[$256](__str32);
      HEAP[$0] = $257;
      __label__ = 82;
      break;
     case 66:
      var $258 = HEAP[$y];
      var $259 = _PyLong_AsLong($258);
      HEAP[$out27] = $259;
      
      var $261 = HEAP[$out27] != -1;
      if ($261) {
        __label__ = 68;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 67:
      var $262 = _PyErr_Occurred();
      
      if ($262 == 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 68:
      var $264 = HEAP[$error_addr];
      var $265 = FUNCTION_TABLE[$264](__str33);
      HEAP[$0] = $265;
      __label__ = 82;
      break;
     case 69:
      var $266 = HEAP[_PyExc_OverflowError];
      var $267 = _PyErr_ExceptionMatches($266);
      
      if ($267 == 0) {
        __label__ = 70;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 70:
      var $269 = HEAP[$error_addr];
      var $270 = FUNCTION_TABLE[$269](__str34);
      HEAP[$0] = $270;
      __label__ = 82;
      break;
     case 71:
      _PyErr_Clear();
      
      
      
      var $274 = HEAP[HEAP[$y]] - 1;
      
      var $276 = HEAP[$y];
      HEAP[$276] = $274;
      
      
      
      
      if (HEAP[HEAP[$y]] == 0) {
        __label__ = 72;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 72:
      
      
      
      
      var $285 = HEAP[HEAP[HEAP[$y] + 4] + 24];
      var $286 = HEAP[$y];
      FUNCTION_TABLE[$285]($286);
      __label__ = 73;
      break;
     case 73:
      HEAP[$y] = 0;
      
      
      if (HEAP[$x] != 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 74:
      
      
      
      var $292 = HEAP[HEAP[$x]] - 1;
      
      var $294 = HEAP[$x];
      HEAP[$294] = $292;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      
      
      
      
      var $303 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $304 = HEAP[$x];
      FUNCTION_TABLE[$303]($304);
      __label__ = 76;
      break;
     case 76:
      
      
      if (HEAP[$y] != 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 77:
      
      
      
      var $310 = HEAP[HEAP[$y]] - 1;
      
      var $312 = HEAP[$y];
      HEAP[$312] = $310;
      
      
      
      
      if (HEAP[HEAP[$y]] == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 78:
      
      
      
      
      var $321 = HEAP[HEAP[HEAP[$y] + 4] + 24];
      var $322 = HEAP[$y];
      FUNCTION_TABLE[$321]($322);
      __label__ = 79;
      break;
     case 79:
      
      
      
      var $326 = HEAP[HEAP[$one]] - 1;
      
      var $328 = HEAP[$one];
      HEAP[$328] = $326;
      
      
      
      
      if (HEAP[HEAP[$one]] == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 80:
      
      
      
      
      var $337 = HEAP[HEAP[HEAP[$one] + 4] + 24];
      var $338 = HEAP[$one];
      FUNCTION_TABLE[$337]($338);
      __label__ = 81;
      break;
     case 81:
      
      var $340 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $340;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 82;
      break;
     case 82:
      var $341 = HEAP[$0];
      HEAP[$retval] = $341;
      __label__ = 83;
      break;
     case 83:
      var $retval84 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval84;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_long_api($self) {
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
      var $1 = _test_long_api_inner(FUNCTION_TABLE_OFFSET + 2);
      HEAP[$0] = $1;
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
  function _raise_test_longlong_error($msg) {
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
      
      HEAP[__stackBase__] = $msg;
      var $1 = HEAP[__stackBase__];
      var $2 = _raiseTestError(__str35, $1);
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
  function _test_longlong_api_inner($error) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 104;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 104);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $error_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_30 = __stackBase__ + 12;
      var $NBITS = __stackBase__ + 20;
      var $base = __stackBase__ + 24;
      var $pyresult = __stackBase__ + 32;
      var $i = __stackBase__ + 36;
      var $j = __stackBase__ + 40;
      var $in = __stackBase__ + 44;
      var $out = __stackBase__ + 52;
      var $uin = __stackBase__ + 60;
      var $uout = __stackBase__ + 68;
      var $one = __stackBase__ + 76;
      var $x = __stackBase__ + 80;
      var $y = __stackBase__ + 84;
      var $out27 = __stackBase__ + 88;
      var $uout28 = __stackBase__ + 96;
      
      HEAP[$error_addr] = $error;
      HEAP[$NBITS] = 64;
      HEAP[$base] = 1;
      HEAP[$i] = 0;
      __label__ = 26;
      break;
     case 1:
      HEAP[$j] = 0;
      __label__ = 24;
      break;
     case 2:
      
      
      if (HEAP[$j] > 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $4 = 0 - HEAP[$base];
      HEAP[$iftmp_30] = $4;
      __label__ = 5;
      break;
     case 4:
      var $5 = HEAP[$base];
      HEAP[$iftmp_30] = $5;
      __label__ = 5;
      break;
     case 5:
      var $6 = HEAP[$iftmp_30];
      HEAP[$uin] = $6;
      
      
      
      
      
      var $12 = HEAP[$j] % 3 - 1 + HEAP[$uin];
      HEAP[$uin] = $12;
      var $13 = HEAP[$uin];
      var $14 = _PyLong_FromUnsignedLongLong($13);
      HEAP[$pyresult] = $14;
      
      
      if (HEAP[$pyresult] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $17 = HEAP[$error_addr];
      var $18 = FUNCTION_TABLE[$17](__str16);
      HEAP[$0] = $18;
      __label__ = 82;
      break;
     case 7:
      var $19 = HEAP[$pyresult];
      var $20 = _PyLong_AsUnsignedLongLong($19);
      HEAP[$uout] = $20;
      
      var $22 = HEAP[$uout] == -1;
      if ($22) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      var $23 = _PyErr_Occurred();
      
      if ($23 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $25 = HEAP[$error_addr];
      var $26 = FUNCTION_TABLE[$25](__str17);
      HEAP[$0] = $26;
      __label__ = 82;
      break;
     case 10:
      
      
      
      if (HEAP[$uout] != HEAP[$uin]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $30 = HEAP[$error_addr];
      var $31 = FUNCTION_TABLE[$30](__str18);
      HEAP[$0] = $31;
      __label__ = 82;
      break;
     case 12:
      
      
      
      var $35 = HEAP[HEAP[$pyresult]] - 1;
      
      var $37 = HEAP[$pyresult];
      HEAP[$37] = $35;
      
      
      
      
      if (HEAP[HEAP[$pyresult]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$pyresult] + 4] + 24];
      var $47 = HEAP[$pyresult];
      FUNCTION_TABLE[$46]($47);
      __label__ = 14;
      break;
     case 14:
      HEAP[$pyresult] = 0;
      var $48 = HEAP[$uin];
      HEAP[$in] = $48;
      var $49 = HEAP[$in];
      var $50 = _PyLong_FromLongLong($49);
      HEAP[$pyresult] = $50;
      
      
      if (HEAP[$pyresult] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $53 = HEAP[$error_addr];
      var $54 = FUNCTION_TABLE[$53](__str19);
      HEAP[$0] = $54;
      __label__ = 82;
      break;
     case 16:
      var $55 = HEAP[$pyresult];
      var $56 = _PyLong_AsLongLong($55);
      HEAP[$out] = $56;
      
      var $58 = HEAP[$out] == -1;
      if ($58) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      var $59 = _PyErr_Occurred();
      
      if ($59 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $61 = HEAP[$error_addr];
      var $62 = FUNCTION_TABLE[$61](__str20);
      HEAP[$0] = $62;
      __label__ = 82;
      break;
     case 19:
      
      
      
      if (HEAP[$out] != HEAP[$in]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $66 = HEAP[$error_addr];
      var $67 = FUNCTION_TABLE[$66](__str21);
      HEAP[$0] = $67;
      __label__ = 82;
      break;
     case 21:
      
      
      
      var $71 = HEAP[HEAP[$pyresult]] - 1;
      
      var $73 = HEAP[$pyresult];
      HEAP[$73] = $71;
      
      
      
      
      if (HEAP[HEAP[$pyresult]] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $82 = HEAP[HEAP[HEAP[$pyresult] + 4] + 24];
      var $83 = HEAP[$pyresult];
      FUNCTION_TABLE[$82]($83);
      __label__ = 23;
      break;
     case 23:
      HEAP[$pyresult] = 0;
      
      var $85 = HEAP[$j] + 1;
      HEAP[$j] = $85;
      __label__ = 24;
      break;
     case 24:
      
      
      if (HEAP[$j] <= 5) {
        __label__ = 2;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      var $89 = HEAP[$i] + 1;
      HEAP[$i] = $89;
      
      var $91 = HEAP[$base] * Math.pow(2, 1);
      HEAP[$base] = $91;
      __label__ = 26;
      break;
     case 26:
      
      
      
      
      if (HEAP[$NBITS] + 1 > HEAP[$i]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      var $96 = _PyLong_FromLong(1);
      HEAP[$one] = $96;
      
      
      if (HEAP[$one] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      var $99 = HEAP[$error_addr];
      var $100 = FUNCTION_TABLE[$99](__str22);
      HEAP[$0] = $100;
      __label__ = 82;
      break;
     case 29:
      var $101 = HEAP[$one];
      var $102 = _PyNumber_Negative($101);
      HEAP[$x] = $102;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      var $105 = HEAP[$error_addr];
      var $106 = FUNCTION_TABLE[$105](__str23);
      HEAP[$0] = $106;
      __label__ = 82;
      break;
     case 31:
      var $107 = HEAP[$x];
      var $108 = _PyLong_AsUnsignedLongLong($107);
      HEAP[$uout28] = $108;
      
      var $110 = HEAP[$uout28] != -1;
      if ($110) {
        __label__ = 33;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      var $111 = _PyErr_Occurred();
      
      if ($111 == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      var $113 = HEAP[$error_addr];
      var $114 = FUNCTION_TABLE[$113](__str24);
      HEAP[$0] = $114;
      __label__ = 82;
      break;
     case 34:
      var $115 = HEAP[_PyExc_OverflowError];
      var $116 = _PyErr_ExceptionMatches($115);
      
      if ($116 == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      var $118 = HEAP[$error_addr];
      var $119 = FUNCTION_TABLE[$118](__str25);
      HEAP[$0] = $119;
      __label__ = 82;
      break;
     case 36:
      _PyErr_Clear();
      
      
      
      var $123 = HEAP[HEAP[$x]] - 1;
      
      var $125 = HEAP[$x];
      HEAP[$125] = $123;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $134 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $135 = HEAP[$x];
      FUNCTION_TABLE[$134]($135);
      __label__ = 38;
      break;
     case 38:
      HEAP[$x] = 0;
      var $136 = HEAP[$NBITS];
      var $137 = _PyLong_FromLong($136);
      HEAP[$y] = $137;
      
      
      if (HEAP[$y] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      var $140 = HEAP[$error_addr];
      var $141 = FUNCTION_TABLE[$140](__str22);
      HEAP[$0] = $141;
      __label__ = 82;
      break;
     case 40:
      var $142 = HEAP[$one];
      var $143 = HEAP[$y];
      var $144 = _PyNumber_Lshift($142, $143);
      HEAP[$x] = $144;
      
      
      
      var $148 = HEAP[HEAP[$y]] - 1;
      
      var $150 = HEAP[$y];
      HEAP[$150] = $148;
      
      
      
      
      if (HEAP[HEAP[$y]] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $159 = HEAP[HEAP[HEAP[$y] + 4] + 24];
      var $160 = HEAP[$y];
      FUNCTION_TABLE[$159]($160);
      __label__ = 42;
      break;
     case 42:
      HEAP[$y] = 0;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      var $163 = HEAP[$error_addr];
      var $164 = FUNCTION_TABLE[$163](__str26);
      HEAP[$0] = $164;
      __label__ = 82;
      break;
     case 44:
      var $165 = HEAP[$x];
      var $166 = _PyLong_AsUnsignedLongLong($165);
      HEAP[$uout28] = $166;
      
      var $168 = HEAP[$uout28] != -1;
      if ($168) {
        __label__ = 46;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 45:
      var $169 = _PyErr_Occurred();
      
      if ($169 == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      var $171 = HEAP[$error_addr];
      var $172 = FUNCTION_TABLE[$171](__str27);
      HEAP[$0] = $172;
      __label__ = 82;
      break;
     case 47:
      var $173 = HEAP[_PyExc_OverflowError];
      var $174 = _PyErr_ExceptionMatches($173);
      
      if ($174 == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      var $176 = HEAP[$error_addr];
      var $177 = FUNCTION_TABLE[$176](__str28);
      HEAP[$0] = $177;
      __label__ = 82;
      break;
     case 49:
      _PyErr_Clear();
      var $178 = HEAP[$x];
      var $179 = HEAP[$one];
      var $180 = _PyNumber_Rshift($178, $179);
      HEAP[$y] = $180;
      
      
      
      var $184 = HEAP[HEAP[$x]] - 1;
      
      var $186 = HEAP[$x];
      HEAP[$186] = $184;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      
      
      
      var $195 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $196 = HEAP[$x];
      FUNCTION_TABLE[$195]($196);
      __label__ = 51;
      break;
     case 51:
      HEAP[$x] = 0;
      
      
      if (HEAP[$y] == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      var $199 = HEAP[$error_addr];
      var $200 = FUNCTION_TABLE[$199](__str29);
      HEAP[$0] = $200;
      __label__ = 82;
      break;
     case 53:
      var $201 = HEAP[$y];
      var $202 = _PyLong_AsLongLong($201);
      HEAP[$out27] = $202;
      
      var $204 = HEAP[$out27] != -1;
      if ($204) {
        __label__ = 55;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 54:
      var $205 = _PyErr_Occurred();
      
      if ($205 == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      var $207 = HEAP[$error_addr];
      var $208 = FUNCTION_TABLE[$207](__str30);
      HEAP[$0] = $208;
      __label__ = 82;
      break;
     case 56:
      var $209 = HEAP[_PyExc_OverflowError];
      var $210 = _PyErr_ExceptionMatches($209);
      
      if ($210 == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      var $212 = HEAP[$error_addr];
      var $213 = FUNCTION_TABLE[$212](__str31);
      HEAP[$0] = $213;
      __label__ = 82;
      break;
     case 58:
      _PyErr_Clear();
      var $214 = HEAP[$y];
      var $215 = _PyNumber_Negative($214);
      HEAP[$x] = $215;
      
      
      
      var $219 = HEAP[HEAP[$y]] - 1;
      
      var $221 = HEAP[$y];
      HEAP[$221] = $219;
      
      
      
      
      if (HEAP[HEAP[$y]] == 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      
      
      
      
      var $230 = HEAP[HEAP[HEAP[$y] + 4] + 24];
      var $231 = HEAP[$y];
      FUNCTION_TABLE[$230]($231);
      __label__ = 60;
      break;
     case 60:
      HEAP[$y] = 0;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      var $234 = HEAP[$error_addr];
      var $235 = FUNCTION_TABLE[$234](__str23);
      HEAP[$0] = $235;
      __label__ = 82;
      break;
     case 62:
      var $236 = HEAP[$x];
      var $237 = HEAP[$one];
      var $238 = _PyNumber_Subtract($236, $237);
      HEAP[$y] = $238;
      
      
      
      var $242 = HEAP[HEAP[$x]] - 1;
      
      var $244 = HEAP[$x];
      HEAP[$244] = $242;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      
      
      
      
      var $253 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $254 = HEAP[$x];
      FUNCTION_TABLE[$253]($254);
      __label__ = 64;
      break;
     case 64:
      HEAP[$x] = 0;
      
      
      if (HEAP[$y] == 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      var $257 = HEAP[$error_addr];
      var $258 = FUNCTION_TABLE[$257](__str32);
      HEAP[$0] = $258;
      __label__ = 82;
      break;
     case 66:
      var $259 = HEAP[$y];
      var $260 = _PyLong_AsLongLong($259);
      HEAP[$out27] = $260;
      
      var $262 = HEAP[$out27] != -1;
      if ($262) {
        __label__ = 68;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 67:
      var $263 = _PyErr_Occurred();
      
      if ($263 == 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 68:
      var $265 = HEAP[$error_addr];
      var $266 = FUNCTION_TABLE[$265](__str33);
      HEAP[$0] = $266;
      __label__ = 82;
      break;
     case 69:
      var $267 = HEAP[_PyExc_OverflowError];
      var $268 = _PyErr_ExceptionMatches($267);
      
      if ($268 == 0) {
        __label__ = 70;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 70:
      var $270 = HEAP[$error_addr];
      var $271 = FUNCTION_TABLE[$270](__str34);
      HEAP[$0] = $271;
      __label__ = 82;
      break;
     case 71:
      _PyErr_Clear();
      
      
      
      var $275 = HEAP[HEAP[$y]] - 1;
      
      var $277 = HEAP[$y];
      HEAP[$277] = $275;
      
      
      
      
      if (HEAP[HEAP[$y]] == 0) {
        __label__ = 72;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 72:
      
      
      
      
      var $286 = HEAP[HEAP[HEAP[$y] + 4] + 24];
      var $287 = HEAP[$y];
      FUNCTION_TABLE[$286]($287);
      __label__ = 73;
      break;
     case 73:
      HEAP[$y] = 0;
      
      
      if (HEAP[$x] != 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 74:
      
      
      
      var $293 = HEAP[HEAP[$x]] - 1;
      
      var $295 = HEAP[$x];
      HEAP[$295] = $293;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      
      
      
      
      var $304 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $305 = HEAP[$x];
      FUNCTION_TABLE[$304]($305);
      __label__ = 76;
      break;
     case 76:
      
      
      if (HEAP[$y] != 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 77:
      
      
      
      var $311 = HEAP[HEAP[$y]] - 1;
      
      var $313 = HEAP[$y];
      HEAP[$313] = $311;
      
      
      
      
      if (HEAP[HEAP[$y]] == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 78:
      
      
      
      
      var $322 = HEAP[HEAP[HEAP[$y] + 4] + 24];
      var $323 = HEAP[$y];
      FUNCTION_TABLE[$322]($323);
      __label__ = 79;
      break;
     case 79:
      
      
      
      var $327 = HEAP[HEAP[$one]] - 1;
      
      var $329 = HEAP[$one];
      HEAP[$329] = $327;
      
      
      
      
      if (HEAP[HEAP[$one]] == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 80:
      
      
      
      
      var $338 = HEAP[HEAP[HEAP[$one] + 4] + 24];
      var $339 = HEAP[$one];
      FUNCTION_TABLE[$338]($339);
      __label__ = 81;
      break;
     case 81:
      
      var $341 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $341;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 82;
      break;
     case 82:
      var $342 = HEAP[$0];
      HEAP[$retval] = $342;
      __label__ = 83;
      break;
     case 83:
      var $retval84 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval84;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_longlong_api($self, $args) {
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
      var $1 = _test_longlong_api_inner(FUNCTION_TABLE_OFFSET + 4);
      HEAP[$0] = $1;
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
  function _test_long_and_overflow($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $num = __stackBase__ + 12;
      var $one = __stackBase__ + 16;
      var $temp = __stackBase__ + 20;
      var $value = __stackBase__ + 24;
      var $overflow = __stackBase__ + 28;
      
      HEAP[__stackBase__] = $self;
      var $1 = _PyLong_FromString(__str36, 0, 16);
      HEAP[$num] = $1;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 2:
      HEAP[$overflow] = 1234;
      var $4 = HEAP[$num];
      var $5 = _PyLong_AsLongAndOverflow($4, $overflow);
      HEAP[$value] = $5;
      
      
      
      var $9 = HEAP[HEAP[$num]] - 1;
      
      var $11 = HEAP[$num];
      HEAP[$11] = $9;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $21 = HEAP[$num];
      FUNCTION_TABLE[$20]($21);
      __label__ = 4;
      break;
     case 4:
      
      var $23 = HEAP[$value] == -1;
      if ($23) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      var $24 = _PyErr_Occurred();
      
      if ($24 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 7:
      
      var $27 = HEAP[$value] != -1;
      if ($27) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $28 = _raiseTestError(__str37, __str38);
      HEAP[$0] = $28;
      __label__ = 109;
      break;
     case 9:
      
      
      if (HEAP[$overflow] != 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $31 = _raiseTestError(__str37, __str39);
      HEAP[$0] = $31;
      __label__ = 109;
      break;
     case 11:
      var $32 = _PyLong_FromLong(2147483647);
      HEAP[$num] = $32;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 13:
      var $35 = _PyLong_FromLong(1);
      HEAP[$one] = $35;
      
      
      if (HEAP[$one] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      
      
      var $41 = HEAP[HEAP[$num]] - 1;
      
      var $43 = HEAP[$num];
      HEAP[$43] = $41;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $52 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $53 = HEAP[$num];
      FUNCTION_TABLE[$52]($53);
      __label__ = 16;
      break;
     case 16:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 17:
      var $54 = HEAP[$num];
      var $55 = HEAP[$one];
      var $56 = _PyNumber_Add($54, $55);
      HEAP[$temp] = $56;
      
      
      
      var $60 = HEAP[HEAP[$one]] - 1;
      
      var $62 = HEAP[$one];
      HEAP[$62] = $60;
      
      
      
      
      if (HEAP[HEAP[$one]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $71 = HEAP[HEAP[HEAP[$one] + 4] + 24];
      var $72 = HEAP[$one];
      FUNCTION_TABLE[$71]($72);
      __label__ = 19;
      break;
     case 19:
      
      
      
      var $76 = HEAP[HEAP[$num]] - 1;
      
      var $78 = HEAP[$num];
      HEAP[$78] = $76;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $87 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $88 = HEAP[$num];
      FUNCTION_TABLE[$87]($88);
      __label__ = 21;
      break;
     case 21:
      var $89 = HEAP[$temp];
      HEAP[$num] = $89;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 23:
      HEAP[$overflow] = 0;
      var $92 = HEAP[$num];
      var $93 = _PyLong_AsLongAndOverflow($92, $overflow);
      HEAP[$value] = $93;
      
      
      
      var $97 = HEAP[HEAP[$num]] - 1;
      
      var $99 = HEAP[$num];
      HEAP[$99] = $97;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $108 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $109 = HEAP[$num];
      FUNCTION_TABLE[$108]($109);
      __label__ = 25;
      break;
     case 25:
      
      var $111 = HEAP[$value] == -1;
      if ($111) {
        __label__ = 26;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 26:
      var $112 = _PyErr_Occurred();
      
      if ($112 != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 28:
      
      var $115 = HEAP[$value] != -1;
      if ($115) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $116 = _raiseTestError(__str37, __str38);
      HEAP[$0] = $116;
      __label__ = 109;
      break;
     case 30:
      
      
      if (HEAP[$overflow] != 1) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      var $119 = _raiseTestError(__str37, __str39);
      HEAP[$0] = $119;
      __label__ = 109;
      break;
     case 32:
      var $120 = _PyLong_FromString(__str40, 0, 16);
      HEAP[$num] = $120;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 34:
      HEAP[$overflow] = 1234;
      var $123 = HEAP[$num];
      var $124 = _PyLong_AsLongAndOverflow($123, $overflow);
      HEAP[$value] = $124;
      
      
      
      var $128 = HEAP[HEAP[$num]] - 1;
      
      var $130 = HEAP[$num];
      HEAP[$130] = $128;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $139 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $140 = HEAP[$num];
      FUNCTION_TABLE[$139]($140);
      __label__ = 36;
      break;
     case 36:
      
      var $142 = HEAP[$value] == -1;
      if ($142) {
        __label__ = 37;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 37:
      var $143 = _PyErr_Occurred();
      
      if ($143 != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 39:
      
      var $146 = HEAP[$value] != -1;
      if ($146) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      var $147 = _raiseTestError(__str37, __str38);
      HEAP[$0] = $147;
      __label__ = 109;
      break;
     case 41:
      
      var $149 = HEAP[$overflow] != -1;
      if ($149) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      var $150 = _raiseTestError(__str37, __str41);
      HEAP[$0] = $150;
      __label__ = 109;
      break;
     case 43:
      var $151 = _PyLong_FromLong(-2147483648);
      HEAP[$num] = $151;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 45:
      var $154 = _PyLong_FromLong(1);
      HEAP[$one] = $154;
      
      
      if (HEAP[$one] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 46:
      
      
      
      var $160 = HEAP[HEAP[$num]] - 1;
      
      var $162 = HEAP[$num];
      HEAP[$162] = $160;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      
      
      
      
      var $171 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $172 = HEAP[$num];
      FUNCTION_TABLE[$171]($172);
      __label__ = 48;
      break;
     case 48:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 49:
      var $173 = HEAP[$num];
      var $174 = HEAP[$one];
      var $175 = _PyNumber_Subtract($173, $174);
      HEAP[$temp] = $175;
      
      
      
      var $179 = HEAP[HEAP[$one]] - 1;
      
      var $181 = HEAP[$one];
      HEAP[$181] = $179;
      
      
      
      
      if (HEAP[HEAP[$one]] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      
      
      
      var $190 = HEAP[HEAP[HEAP[$one] + 4] + 24];
      var $191 = HEAP[$one];
      FUNCTION_TABLE[$190]($191);
      __label__ = 51;
      break;
     case 51:
      
      
      
      var $195 = HEAP[HEAP[$num]] - 1;
      
      var $197 = HEAP[$num];
      HEAP[$197] = $195;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      
      
      
      
      var $206 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $207 = HEAP[$num];
      FUNCTION_TABLE[$206]($207);
      __label__ = 53;
      break;
     case 53:
      var $208 = HEAP[$temp];
      HEAP[$num] = $208;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 55:
      HEAP[$overflow] = 0;
      var $211 = HEAP[$num];
      var $212 = _PyLong_AsLongAndOverflow($211, $overflow);
      HEAP[$value] = $212;
      
      
      
      var $216 = HEAP[HEAP[$num]] - 1;
      
      var $218 = HEAP[$num];
      HEAP[$218] = $216;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      
      
      
      
      var $227 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $228 = HEAP[$num];
      FUNCTION_TABLE[$227]($228);
      __label__ = 57;
      break;
     case 57:
      
      var $230 = HEAP[$value] == -1;
      if ($230) {
        __label__ = 58;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 58:
      var $231 = _PyErr_Occurred();
      
      if ($231 != 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 60:
      
      var $234 = HEAP[$value] != -1;
      if ($234) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      var $235 = _raiseTestError(__str37, __str38);
      HEAP[$0] = $235;
      __label__ = 109;
      break;
     case 62:
      
      var $237 = HEAP[$overflow] != -1;
      if ($237) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      var $238 = _raiseTestError(__str37, __str41);
      HEAP[$0] = $238;
      __label__ = 109;
      break;
     case 64:
      var $239 = _PyLong_FromString(__str42, 0, 16);
      HEAP[$num] = $239;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 66:
      HEAP[$overflow] = 1234;
      var $242 = HEAP[$num];
      var $243 = _PyLong_AsLongAndOverflow($242, $overflow);
      HEAP[$value] = $243;
      
      
      
      var $247 = HEAP[HEAP[$num]] - 1;
      
      var $249 = HEAP[$num];
      HEAP[$249] = $247;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 67;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 67:
      
      
      
      
      var $258 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $259 = HEAP[$num];
      FUNCTION_TABLE[$258]($259);
      __label__ = 68;
      break;
     case 68:
      
      var $261 = HEAP[$value] == -1;
      if ($261) {
        __label__ = 69;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 69:
      var $262 = _PyErr_Occurred();
      
      if ($262 != 0) {
        __label__ = 70;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 70:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 71:
      
      
      if (HEAP[$value] != 255) {
        __label__ = 72;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 72:
      var $266 = _raiseTestError(__str37, __str43);
      HEAP[$0] = $266;
      __label__ = 109;
      break;
     case 73:
      
      
      if (HEAP[$overflow] != 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 75;
        break;
      }
     case 74:
      var $269 = _raiseTestError(__str37, __str44);
      HEAP[$0] = $269;
      __label__ = 109;
      break;
     case 75:
      var $270 = _PyLong_FromString(__str45, 0, 16);
      HEAP[$num] = $270;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 76;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 76:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 77:
      HEAP[$overflow] = 0;
      var $273 = HEAP[$num];
      var $274 = _PyLong_AsLongAndOverflow($273, $overflow);
      HEAP[$value] = $274;
      
      
      
      var $278 = HEAP[HEAP[$num]] - 1;
      
      var $280 = HEAP[$num];
      HEAP[$280] = $278;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 78:
      
      
      
      
      var $289 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $290 = HEAP[$num];
      FUNCTION_TABLE[$289]($290);
      __label__ = 79;
      break;
     case 79:
      
      var $292 = HEAP[$value] == -1;
      if ($292) {
        __label__ = 80;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 80:
      var $293 = _PyErr_Occurred();
      
      if ($293 != 0) {
        __label__ = 81;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 81:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 82:
      
      var $296 = HEAP[$value] != -255;
      if ($296) {
        __label__ = 83;
        break;
      } else {
        __label__ = 84;
        break;
      }
     case 83:
      var $297 = _raiseTestError(__str37, __str43);
      HEAP[$0] = $297;
      __label__ = 109;
      break;
     case 84:
      
      
      if (HEAP[$overflow] != 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      var $300 = _raiseTestError(__str37, __str46);
      HEAP[$0] = $300;
      __label__ = 109;
      break;
     case 86:
      var $301 = _PyLong_FromLong(2147483647);
      HEAP[$num] = $301;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 87;
        break;
      } else {
        __label__ = 88;
        break;
      }
     case 87:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 88:
      HEAP[$overflow] = 1234;
      var $304 = HEAP[$num];
      var $305 = _PyLong_AsLongAndOverflow($304, $overflow);
      HEAP[$value] = $305;
      
      
      
      var $309 = HEAP[HEAP[$num]] - 1;
      
      var $311 = HEAP[$num];
      HEAP[$311] = $309;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 89;
        break;
      } else {
        __label__ = 90;
        break;
      }
     case 89:
      
      
      
      
      var $320 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $321 = HEAP[$num];
      FUNCTION_TABLE[$320]($321);
      __label__ = 90;
      break;
     case 90:
      
      var $323 = HEAP[$value] == -1;
      if ($323) {
        __label__ = 91;
        break;
      } else {
        __label__ = 93;
        break;
      }
     case 91:
      var $324 = _PyErr_Occurred();
      
      if ($324 != 0) {
        __label__ = 92;
        break;
      } else {
        __label__ = 93;
        break;
      }
     case 92:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 93:
      
      
      if (HEAP[$value] != 2147483647) {
        __label__ = 94;
        break;
      } else {
        __label__ = 95;
        break;
      }
     case 94:
      var $328 = _raiseTestError(__str37, __str47);
      HEAP[$0] = $328;
      __label__ = 109;
      break;
     case 95:
      
      
      if (HEAP[$overflow] != 0) {
        __label__ = 96;
        break;
      } else {
        __label__ = 97;
        break;
      }
     case 96:
      var $331 = _raiseTestError(__str37, __str44);
      HEAP[$0] = $331;
      __label__ = 109;
      break;
     case 97:
      var $332 = _PyLong_FromLong(-2147483648);
      HEAP[$num] = $332;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 98;
        break;
      } else {
        __label__ = 99;
        break;
      }
     case 98:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 99:
      HEAP[$overflow] = 0;
      var $335 = HEAP[$num];
      var $336 = _PyLong_AsLongAndOverflow($335, $overflow);
      HEAP[$value] = $336;
      
      
      
      var $340 = HEAP[HEAP[$num]] - 1;
      
      var $342 = HEAP[$num];
      HEAP[$342] = $340;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 100;
        break;
      } else {
        __label__ = 101;
        break;
      }
     case 100:
      
      
      
      
      var $351 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $352 = HEAP[$num];
      FUNCTION_TABLE[$351]($352);
      __label__ = 101;
      break;
     case 101:
      
      var $354 = HEAP[$value] == -1;
      if ($354) {
        __label__ = 102;
        break;
      } else {
        __label__ = 104;
        break;
      }
     case 102:
      var $355 = _PyErr_Occurred();
      
      if ($355 != 0) {
        __label__ = 103;
        break;
      } else {
        __label__ = 104;
        break;
      }
     case 103:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 104:
      
      var $358 = HEAP[$value] != -2147483648;
      if ($358) {
        __label__ = 105;
        break;
      } else {
        __label__ = 106;
        break;
      }
     case 105:
      var $359 = _raiseTestError(__str37, __str48);
      HEAP[$0] = $359;
      __label__ = 109;
      break;
     case 106:
      
      
      if (HEAP[$overflow] != 0) {
        __label__ = 107;
        break;
      } else {
        __label__ = 108;
        break;
      }
     case 107:
      var $362 = _raiseTestError(__str37, __str44);
      HEAP[$0] = $362;
      __label__ = 109;
      break;
     case 108:
      
      var $364 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $364;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 109;
      break;
     case 109:
      var $365 = HEAP[$0];
      HEAP[$retval] = $365;
      __label__ = 110;
      break;
     case 110:
      var $retval109 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval109;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_long_long_and_overflow($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $num = __stackBase__ + 12;
      var $one = __stackBase__ + 16;
      var $temp = __stackBase__ + 20;
      var $value = __stackBase__ + 24;
      var $overflow = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      var $1 = _PyLong_FromString(__str36, 0, 16);
      HEAP[$num] = $1;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 2:
      HEAP[$overflow] = 1234;
      var $4 = HEAP[$num];
      var $5 = _PyLong_AsLongLongAndOverflow($4, $overflow);
      HEAP[$value] = $5;
      
      
      
      var $9 = HEAP[HEAP[$num]] - 1;
      
      var $11 = HEAP[$num];
      HEAP[$11] = $9;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $21 = HEAP[$num];
      FUNCTION_TABLE[$20]($21);
      __label__ = 4;
      break;
     case 4:
      
      var $23 = HEAP[$value] == -1;
      if ($23) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      var $24 = _PyErr_Occurred();
      
      if ($24 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 7:
      
      var $27 = HEAP[$value] != -1;
      if ($27) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $28 = _raiseTestError(__str49, __str38);
      HEAP[$0] = $28;
      __label__ = 109;
      break;
     case 9:
      
      
      if (HEAP[$overflow] != 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $31 = _raiseTestError(__str49, __str39);
      HEAP[$0] = $31;
      __label__ = 109;
      break;
     case 11:
      var $32 = _PyLong_FromLongLong(0x8000000000000000);
      HEAP[$num] = $32;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 13:
      var $35 = _PyLong_FromLong(1);
      HEAP[$one] = $35;
      
      
      if (HEAP[$one] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      
      
      var $41 = HEAP[HEAP[$num]] - 1;
      
      var $43 = HEAP[$num];
      HEAP[$43] = $41;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $52 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $53 = HEAP[$num];
      FUNCTION_TABLE[$52]($53);
      __label__ = 16;
      break;
     case 16:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 17:
      var $54 = HEAP[$num];
      var $55 = HEAP[$one];
      var $56 = _PyNumber_Add($54, $55);
      HEAP[$temp] = $56;
      
      
      
      var $60 = HEAP[HEAP[$one]] - 1;
      
      var $62 = HEAP[$one];
      HEAP[$62] = $60;
      
      
      
      
      if (HEAP[HEAP[$one]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $71 = HEAP[HEAP[HEAP[$one] + 4] + 24];
      var $72 = HEAP[$one];
      FUNCTION_TABLE[$71]($72);
      __label__ = 19;
      break;
     case 19:
      
      
      
      var $76 = HEAP[HEAP[$num]] - 1;
      
      var $78 = HEAP[$num];
      HEAP[$78] = $76;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $87 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $88 = HEAP[$num];
      FUNCTION_TABLE[$87]($88);
      __label__ = 21;
      break;
     case 21:
      var $89 = HEAP[$temp];
      HEAP[$num] = $89;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 23:
      HEAP[$overflow] = 0;
      var $92 = HEAP[$num];
      var $93 = _PyLong_AsLongLongAndOverflow($92, $overflow);
      HEAP[$value] = $93;
      
      
      
      var $97 = HEAP[HEAP[$num]] - 1;
      
      var $99 = HEAP[$num];
      HEAP[$99] = $97;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $108 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $109 = HEAP[$num];
      FUNCTION_TABLE[$108]($109);
      __label__ = 25;
      break;
     case 25:
      
      var $111 = HEAP[$value] == -1;
      if ($111) {
        __label__ = 26;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 26:
      var $112 = _PyErr_Occurred();
      
      if ($112 != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 28:
      
      var $115 = HEAP[$value] != -1;
      if ($115) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $116 = _raiseTestError(__str49, __str38);
      HEAP[$0] = $116;
      __label__ = 109;
      break;
     case 30:
      
      
      if (HEAP[$overflow] != 1) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      var $119 = _raiseTestError(__str49, __str39);
      HEAP[$0] = $119;
      __label__ = 109;
      break;
     case 32:
      var $120 = _PyLong_FromString(__str40, 0, 16);
      HEAP[$num] = $120;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 34:
      HEAP[$overflow] = 1234;
      var $123 = HEAP[$num];
      var $124 = _PyLong_AsLongLongAndOverflow($123, $overflow);
      HEAP[$value] = $124;
      
      
      
      var $128 = HEAP[HEAP[$num]] - 1;
      
      var $130 = HEAP[$num];
      HEAP[$130] = $128;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $139 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $140 = HEAP[$num];
      FUNCTION_TABLE[$139]($140);
      __label__ = 36;
      break;
     case 36:
      
      var $142 = HEAP[$value] == -1;
      if ($142) {
        __label__ = 37;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 37:
      var $143 = _PyErr_Occurred();
      
      if ($143 != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 39:
      
      var $146 = HEAP[$value] != -1;
      if ($146) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      var $147 = _raiseTestError(__str49, __str38);
      HEAP[$0] = $147;
      __label__ = 109;
      break;
     case 41:
      
      var $149 = HEAP[$overflow] != -1;
      if ($149) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      var $150 = _raiseTestError(__str49, __str41);
      HEAP[$0] = $150;
      __label__ = 109;
      break;
     case 43:
      var $151 = _PyLong_FromLongLong(-0x8000000000000000);
      HEAP[$num] = $151;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 45:
      var $154 = _PyLong_FromLong(1);
      HEAP[$one] = $154;
      
      
      if (HEAP[$one] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 46:
      
      
      
      var $160 = HEAP[HEAP[$num]] - 1;
      
      var $162 = HEAP[$num];
      HEAP[$162] = $160;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      
      
      
      
      var $171 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $172 = HEAP[$num];
      FUNCTION_TABLE[$171]($172);
      __label__ = 48;
      break;
     case 48:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 49:
      var $173 = HEAP[$num];
      var $174 = HEAP[$one];
      var $175 = _PyNumber_Subtract($173, $174);
      HEAP[$temp] = $175;
      
      
      
      var $179 = HEAP[HEAP[$one]] - 1;
      
      var $181 = HEAP[$one];
      HEAP[$181] = $179;
      
      
      
      
      if (HEAP[HEAP[$one]] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      
      
      
      var $190 = HEAP[HEAP[HEAP[$one] + 4] + 24];
      var $191 = HEAP[$one];
      FUNCTION_TABLE[$190]($191);
      __label__ = 51;
      break;
     case 51:
      
      
      
      var $195 = HEAP[HEAP[$num]] - 1;
      
      var $197 = HEAP[$num];
      HEAP[$197] = $195;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      
      
      
      
      var $206 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $207 = HEAP[$num];
      FUNCTION_TABLE[$206]($207);
      __label__ = 53;
      break;
     case 53:
      var $208 = HEAP[$temp];
      HEAP[$num] = $208;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 55:
      HEAP[$overflow] = 0;
      var $211 = HEAP[$num];
      var $212 = _PyLong_AsLongLongAndOverflow($211, $overflow);
      HEAP[$value] = $212;
      
      
      
      var $216 = HEAP[HEAP[$num]] - 1;
      
      var $218 = HEAP[$num];
      HEAP[$218] = $216;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      
      
      
      
      var $227 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $228 = HEAP[$num];
      FUNCTION_TABLE[$227]($228);
      __label__ = 57;
      break;
     case 57:
      
      var $230 = HEAP[$value] == -1;
      if ($230) {
        __label__ = 58;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 58:
      var $231 = _PyErr_Occurred();
      
      if ($231 != 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 60:
      
      var $234 = HEAP[$value] != -1;
      if ($234) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      var $235 = _raiseTestError(__str49, __str38);
      HEAP[$0] = $235;
      __label__ = 109;
      break;
     case 62:
      
      var $237 = HEAP[$overflow] != -1;
      if ($237) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      var $238 = _raiseTestError(__str49, __str41);
      HEAP[$0] = $238;
      __label__ = 109;
      break;
     case 64:
      var $239 = _PyLong_FromString(__str42, 0, 16);
      HEAP[$num] = $239;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 66:
      HEAP[$overflow] = 1234;
      var $242 = HEAP[$num];
      var $243 = _PyLong_AsLongLongAndOverflow($242, $overflow);
      HEAP[$value] = $243;
      
      
      
      var $247 = HEAP[HEAP[$num]] - 1;
      
      var $249 = HEAP[$num];
      HEAP[$249] = $247;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 67;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 67:
      
      
      
      
      var $258 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $259 = HEAP[$num];
      FUNCTION_TABLE[$258]($259);
      __label__ = 68;
      break;
     case 68:
      
      var $261 = HEAP[$value] == -1;
      if ($261) {
        __label__ = 69;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 69:
      var $262 = _PyErr_Occurred();
      
      if ($262 != 0) {
        __label__ = 70;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 70:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 71:
      
      
      if (HEAP[$value] != 255) {
        __label__ = 72;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 72:
      var $266 = _raiseTestError(__str49, __str43);
      HEAP[$0] = $266;
      __label__ = 109;
      break;
     case 73:
      
      
      if (HEAP[$overflow] != 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 75;
        break;
      }
     case 74:
      var $269 = _raiseTestError(__str49, __str44);
      HEAP[$0] = $269;
      __label__ = 109;
      break;
     case 75:
      var $270 = _PyLong_FromString(__str45, 0, 16);
      HEAP[$num] = $270;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 76;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 76:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 77:
      HEAP[$overflow] = 0;
      var $273 = HEAP[$num];
      var $274 = _PyLong_AsLongLongAndOverflow($273, $overflow);
      HEAP[$value] = $274;
      
      
      
      var $278 = HEAP[HEAP[$num]] - 1;
      
      var $280 = HEAP[$num];
      HEAP[$280] = $278;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 78:
      
      
      
      
      var $289 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $290 = HEAP[$num];
      FUNCTION_TABLE[$289]($290);
      __label__ = 79;
      break;
     case 79:
      
      var $292 = HEAP[$value] == -1;
      if ($292) {
        __label__ = 80;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 80:
      var $293 = _PyErr_Occurred();
      
      if ($293 != 0) {
        __label__ = 81;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 81:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 82:
      
      var $296 = HEAP[$value] != -255;
      if ($296) {
        __label__ = 83;
        break;
      } else {
        __label__ = 84;
        break;
      }
     case 83:
      var $297 = _raiseTestError(__str49, __str43);
      HEAP[$0] = $297;
      __label__ = 109;
      break;
     case 84:
      
      
      if (HEAP[$overflow] != 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      var $300 = _raiseTestError(__str49, __str46);
      HEAP[$0] = $300;
      __label__ = 109;
      break;
     case 86:
      var $301 = _PyLong_FromLongLong(0x8000000000000000);
      HEAP[$num] = $301;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 87;
        break;
      } else {
        __label__ = 88;
        break;
      }
     case 87:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 88:
      HEAP[$overflow] = 1234;
      var $304 = HEAP[$num];
      var $305 = _PyLong_AsLongLongAndOverflow($304, $overflow);
      HEAP[$value] = $305;
      
      
      
      var $309 = HEAP[HEAP[$num]] - 1;
      
      var $311 = HEAP[$num];
      HEAP[$311] = $309;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 89;
        break;
      } else {
        __label__ = 90;
        break;
      }
     case 89:
      
      
      
      
      var $320 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $321 = HEAP[$num];
      FUNCTION_TABLE[$320]($321);
      __label__ = 90;
      break;
     case 90:
      
      var $323 = HEAP[$value] == -1;
      if ($323) {
        __label__ = 91;
        break;
      } else {
        __label__ = 93;
        break;
      }
     case 91:
      var $324 = _PyErr_Occurred();
      
      if ($324 != 0) {
        __label__ = 92;
        break;
      } else {
        __label__ = 93;
        break;
      }
     case 92:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 93:
      
      var $327 = HEAP[$value] != -0x8000000000000000;
      if ($327) {
        __label__ = 94;
        break;
      } else {
        __label__ = 95;
        break;
      }
     case 94:
      var $328 = _raiseTestError(__str49, __str50);
      HEAP[$0] = $328;
      __label__ = 109;
      break;
     case 95:
      
      
      if (HEAP[$overflow] != 0) {
        __label__ = 96;
        break;
      } else {
        __label__ = 97;
        break;
      }
     case 96:
      var $331 = _raiseTestError(__str49, __str44);
      HEAP[$0] = $331;
      __label__ = 109;
      break;
     case 97:
      var $332 = _PyLong_FromLongLong(-0x8000000000000000);
      HEAP[$num] = $332;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 98;
        break;
      } else {
        __label__ = 99;
        break;
      }
     case 98:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 99:
      HEAP[$overflow] = 0;
      var $335 = HEAP[$num];
      var $336 = _PyLong_AsLongLongAndOverflow($335, $overflow);
      HEAP[$value] = $336;
      
      
      
      var $340 = HEAP[HEAP[$num]] - 1;
      
      var $342 = HEAP[$num];
      HEAP[$342] = $340;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 100;
        break;
      } else {
        __label__ = 101;
        break;
      }
     case 100:
      
      
      
      
      var $351 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $352 = HEAP[$num];
      FUNCTION_TABLE[$351]($352);
      __label__ = 101;
      break;
     case 101:
      
      var $354 = HEAP[$value] == -1;
      if ($354) {
        __label__ = 102;
        break;
      } else {
        __label__ = 104;
        break;
      }
     case 102:
      var $355 = _PyErr_Occurred();
      
      if ($355 != 0) {
        __label__ = 103;
        break;
      } else {
        __label__ = 104;
        break;
      }
     case 103:
      HEAP[$0] = 0;
      __label__ = 109;
      break;
     case 104:
      
      var $358 = HEAP[$value] != -0x8000000000000000;
      if ($358) {
        __label__ = 105;
        break;
      } else {
        __label__ = 106;
        break;
      }
     case 105:
      var $359 = _raiseTestError(__str49, __str51);
      HEAP[$0] = $359;
      __label__ = 109;
      break;
     case 106:
      
      
      if (HEAP[$overflow] != 0) {
        __label__ = 107;
        break;
      } else {
        __label__ = 108;
        break;
      }
     case 107:
      var $362 = _raiseTestError(__str49, __str44);
      HEAP[$0] = $362;
      __label__ = 109;
      break;
     case 108:
      
      var $364 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $364;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 109;
      break;
     case 109:
      var $365 = HEAP[$0];
      HEAP[$retval] = $365;
      __label__ = 110;
      break;
     case 110:
      var $retval109 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval109;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_L_code($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $tuple = __stackBase__ + 12;
      var $num = __stackBase__ + 16;
      var $value = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      var $1 = _PyTuple_New(1);
      HEAP[$tuple] = $1;
      
      
      if (HEAP[$tuple] == 0) {
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
      var $4 = _PyLong_FromLong(42);
      HEAP[$num] = $4;
      
      
      if (HEAP[$num] == 0) {
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
      
      
      
      var $10 = HEAP[$tuple] + 12;
      var $11 = HEAP[$num];
      HEAP[$10] = $11;
      HEAP[$value] = -1;
      var $12 = HEAP[$tuple];
      var $13 = _PyArg_ParseTuple($12, __str52, allocate([ $value, 0, 0, 0 ], [ "i64*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($13 < 0) {
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
      
      
      if (HEAP[$value] != 42) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $17 = _raiseTestError(__str53, __str54);
      HEAP[$0] = $17;
      __label__ = 19;
      break;
     case 8:
      
      
      
      var $21 = HEAP[HEAP[$num]] - 1;
      
      var $23 = HEAP[$num];
      HEAP[$23] = $21;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $32 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $33 = HEAP[$num];
      FUNCTION_TABLE[$32]($33);
      __label__ = 10;
      break;
     case 10:
      var $34 = _PyInt_FromLong(42);
      HEAP[$num] = $34;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 12:
      
      
      
      var $40 = HEAP[$tuple] + 12;
      var $41 = HEAP[$num];
      HEAP[$40] = $41;
      HEAP[$value] = -1;
      var $42 = HEAP[$tuple];
      var $43 = _PyArg_ParseTuple($42, __str52, allocate([ $value, 0, 0, 0 ], [ "i64*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($43 < 0) {
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
      
      
      if (HEAP[$value] != 42) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $47 = _raiseTestError(__str53, __str55);
      HEAP[$0] = $47;
      __label__ = 19;
      break;
     case 16:
      
      
      
      var $51 = HEAP[HEAP[$tuple]] - 1;
      
      var $53 = HEAP[$tuple];
      HEAP[$53] = $51;
      
      
      
      
      if (HEAP[HEAP[$tuple]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $62 = HEAP[HEAP[HEAP[$tuple] + 4] + 24];
      var $63 = HEAP[$tuple];
      FUNCTION_TABLE[$62]($63);
      __label__ = 18;
      break;
     case 18:
      
      var $65 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $65;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 19;
      break;
     case 19:
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
  function _getargs_tuple($self, $args) {
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
      var $a = __stackBase__ + 16;
      var $b = __stackBase__ + 20;
      var $c = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str56, allocate([ $a, 0, 0, 0, $b, 0, 0, 0, $c, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$c];
      var $5 = HEAP[$b];
      var $6 = HEAP[$a];
      var $7 = _Py_BuildValue(__str57, allocate([ $6, 0, 0, 0, $5, 0, 0, 0, $4, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
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
  function _getargs_keywords($self, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 60;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kwargs_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $int_args = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwargs_addr] = $kwargs;
      var $int_args1 = $int_args;
      _llvm_memcpy_p0i8_p0i8_i32($int_args1, _C_59_9728, 40, 4, 0);
      var $1 = HEAP[_fmt_9726];
      var $2 = HEAP[$args_addr];
      var $3 = HEAP[$kwargs_addr];
      var $4 = $int_args;
      var $5 = $int_args + 4;
      var $6 = $int_args + 8;
      var $7 = $int_args + 12;
      var $8 = $int_args + 16;
      var $9 = $int_args + 20;
      var $10 = $int_args + 24;
      var $11 = $int_args + 28;
      var $12 = $int_args + 32;
      var $13 = $int_args + 36;
      var $14 = _PyArg_ParseTupleAndKeywords($2, $3, $1, _keywords_9725, allocate([ $4, 0, 0, 0, $5, 0, 0, 0, $6, 0, 0, 0, $7, 0, 0, 0, $8, 0, 0, 0, $9, 0, 0, 0, $10, 0, 0, 0, $11, 0, 0, 0, $12, 0, 0, 0, $13, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($14 == 0) {
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
      
      var $17 = HEAP[$int_args + 36];
      
      var $19 = HEAP[$int_args + 32];
      
      var $21 = HEAP[$int_args + 28];
      
      var $23 = HEAP[$int_args + 24];
      
      var $25 = HEAP[$int_args + 20];
      
      var $27 = HEAP[$int_args + 16];
      
      var $29 = HEAP[$int_args + 12];
      
      var $31 = HEAP[$int_args + 8];
      
      var $33 = HEAP[$int_args + 4];
      
      var $35 = HEAP[$int_args];
      var $36 = _Py_BuildValue(__str64, allocate([ $35, 0, 0, 0, $33, 0, 0, 0, $31, 0, 0, 0, $29, 0, 0, 0, $27, 0, 0, 0, $25, 0, 0, 0, $23, 0, 0, 0, $21, 0, 0, 0, $19, 0, 0, 0, $17, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $36;
      __label__ = 3;
      break;
     case 3:
      var $37 = HEAP[$0];
      HEAP[$retval] = $37;
      __label__ = 4;
      break;
     case 4:
      var $retval4 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _getargs_b($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 17;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 17);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $value = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str65, allocate([ $value, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$value];
      var $6 = _PyLong_FromUnsignedLong($5);
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
  function _getargs_B($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 17;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 17);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $value = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str66, allocate([ $value, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$value];
      var $6 = _PyLong_FromUnsignedLong($5);
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
  function _getargs_h($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 18;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $value = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str67, allocate([ $value, 0, 0, 0 ], [ "i16*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$value];
      var $6 = _PyLong_FromLong($5);
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
  function _getargs_H($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 18;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $value = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str68, allocate([ $value, 0, 0, 0 ], [ "i16*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$value];
      var $6 = _PyLong_FromUnsignedLong($5);
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
  function _getargs_I($self, $args) {
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
      var $value = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str69, allocate([ $value, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$value];
      var $5 = _PyLong_FromUnsignedLong($4);
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
  function _getargs_k($self, $args) {
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
      var $value = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str70, allocate([ $value, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$value];
      var $5 = _PyLong_FromUnsignedLong($4);
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
  function _getargs_i($self, $args) {
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
      var $value = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str71, allocate([ $value, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$value];
      var $5 = _PyLong_FromLong($4);
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
  function _getargs_l($self, $args) {
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
      var $value = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str72, allocate([ $value, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$value];
      var $5 = _PyLong_FromLong($4);
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
  function _getargs_n($self, $args) {
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
      var $value = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str73, allocate([ $value, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$value];
      var $5 = _PyInt_FromSsize_t($4);
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
  function _getargs_L($self, $args) {
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
      var $value = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str74, allocate([ $value, 0, 0, 0 ], [ "i64*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$value];
      var $5 = _PyLong_FromLongLong($4);
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
  function _getargs_K($self, $args) {
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
      var $value = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str75, allocate([ $value, 0, 0, 0 ], [ "i64*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$value];
      var $5 = _PyLong_FromUnsignedLongLong($4);
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
  function _test_k_code($self) {
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
      var $tuple = __stackBase__ + 12;
      var $num = __stackBase__ + 16;
      var $value = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      var $1 = _PyTuple_New(1);
      HEAP[$tuple] = $1;
      
      
      if (HEAP[$tuple] == 0) {
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
      var $4 = _PyLong_FromString(__str36, 0, 16);
      HEAP[$num] = $4;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 4:
      var $7 = HEAP[$num];
      var $8 = _PyInt_AsUnsignedLongMask($7);
      HEAP[$value] = $8;
      
      var $10 = HEAP[$value] != -1;
      if ($10) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $11 = _raiseTestError(__str76, __str77);
      HEAP[$0] = $11;
      __label__ = 23;
      break;
     case 6:
      
      
      
      var $15 = HEAP[$tuple] + 12;
      var $16 = HEAP[$num];
      HEAP[$15] = $16;
      HEAP[$value] = 0;
      var $17 = HEAP[$tuple];
      var $18 = _PyArg_ParseTuple($17, __str78, allocate([ $value, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($18 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 8:
      
      var $21 = HEAP[$value] != -1;
      if ($21) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $22 = _raiseTestError(__str76, __str79);
      HEAP[$0] = $22;
      __label__ = 23;
      break;
     case 10:
      
      
      
      var $26 = HEAP[HEAP[$num]] - 1;
      
      var $28 = HEAP[$num];
      HEAP[$28] = $26;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $37 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $38 = HEAP[$num];
      FUNCTION_TABLE[$37]($38);
      __label__ = 12;
      break;
     case 12:
      var $39 = _PyLong_FromString(__str80, 0, 16);
      HEAP[$num] = $39;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 14:
      var $42 = HEAP[$num];
      var $43 = _PyInt_AsUnsignedLongMask($42);
      HEAP[$value] = $43;
      
      var $45 = HEAP[$value] != -66;
      if ($45) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $46 = _raiseTestError(__str76, __str77);
      HEAP[$0] = $46;
      __label__ = 23;
      break;
     case 16:
      
      
      
      var $50 = HEAP[$tuple] + 12;
      var $51 = HEAP[$num];
      HEAP[$50] = $51;
      HEAP[$value] = 0;
      var $52 = HEAP[$tuple];
      var $53 = _PyArg_ParseTuple($52, __str78, allocate([ $value, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($53 < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 18:
      
      var $56 = HEAP[$value] != -66;
      if ($56) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $57 = _raiseTestError(__str76, __str81);
      HEAP[$0] = $57;
      __label__ = 23;
      break;
     case 20:
      
      
      
      var $61 = HEAP[HEAP[$tuple]] - 1;
      
      var $63 = HEAP[$tuple];
      HEAP[$63] = $61;
      
      
      
      
      if (HEAP[HEAP[$tuple]] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $72 = HEAP[HEAP[HEAP[$tuple] + 4] + 24];
      var $73 = HEAP[$tuple];
      FUNCTION_TABLE[$72]($73);
      __label__ = 22;
      break;
     case 22:
      
      var $75 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $75;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 23;
      break;
     case 23:
      var $76 = HEAP[$0];
      HEAP[$retval] = $76;
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
  function _test_u_code($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $tuple = __stackBase__ + 12;
      var $obj = __stackBase__ + 16;
      var $value = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      
      var $2 = HEAP[__Py_ascii_whitespace + 25];
      HEAP[_x] = $2;
      var $3 = _PyTuple_New(1);
      HEAP[$tuple] = $3;
      
      
      if (HEAP[$tuple] == 0) {
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
      var $6 = _PyUnicodeUCS2_Decode(__str82, 4, __str83, 0);
      HEAP[$obj] = $6;
      
      
      if (HEAP[$obj] == 0) {
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
      
      
      
      var $12 = HEAP[$tuple] + 12;
      var $13 = HEAP[$obj];
      HEAP[$12] = $13;
      HEAP[$value] = 0;
      var $14 = HEAP[$tuple];
      var $15 = _PyArg_ParseTuple($14, __str84, allocate([ $value, 0, 0, 0 ], [ "i16**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($15 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 6:
      
      
      
      
      
      
      if (HEAP[HEAP[$obj] + 12] != HEAP[$value]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $23 = _raiseTestError(__str85, __str86);
      HEAP[$0] = $23;
      __label__ = 16;
      break;
     case 8:
      HEAP[$value] = 0;
      var $24 = HEAP[$tuple];
      var $25 = _PyArg_ParseTuple($24, __str87, allocate([ $value, 0, 0, 0, $len, 0, 0, 0 ], [ "i16**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($25 < 0) {
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
      
      
      
      
      
      
      if (HEAP[HEAP[$obj] + 12] != HEAP[$value]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      
      if (HEAP[HEAP[$obj] + 8] != HEAP[$len]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $39 = _raiseTestError(__str85, __str88);
      HEAP[$0] = $39;
      __label__ = 16;
      break;
     case 13:
      
      
      
      var $43 = HEAP[HEAP[$tuple]] - 1;
      
      var $45 = HEAP[$tuple];
      HEAP[$45] = $43;
      
      
      
      
      if (HEAP[HEAP[$tuple]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$tuple] + 4] + 24];
      var $55 = HEAP[$tuple];
      FUNCTION_TABLE[$54]($55);
      __label__ = 15;
      break;
     case 15:
      
      var $57 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $57;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 16;
      break;
     case 16:
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
  function _test_widechar($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $wtext = __stackBase__ + 12;
      var $wtextlen = __stackBase__ + 20;
      var $wide = __stackBase__ + 24;
      var $utf8 = __stackBase__ + 28;
      
      HEAP[__stackBase__] = $self;
      
      HEAP[$wtext] = 0;
      
      HEAP[$wtext + 4] = 0;
      
      HEAP[$wtext] = 1092557;
      HEAP[$wtextlen] = 1;
      var $4 = HEAP[$wtextlen];
      var $wtext1 = $wtext;
      var $5 = _PyUnicodeUCS2_FromWideChar($wtext1, $4);
      HEAP[$wide] = $5;
      
      
      if (HEAP[$wide] == 0) {
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
      var $8 = _PyUnicodeUCS2_FromString(__str89);
      HEAP[$utf8] = $8;
      
      
      if (HEAP[$utf8] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      var $14 = HEAP[HEAP[$wide]] - 1;
      
      var $16 = HEAP[$wide];
      HEAP[$16] = $14;
      
      
      
      
      if (HEAP[HEAP[$wide]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $25 = HEAP[HEAP[HEAP[$wide] + 4] + 24];
      var $26 = HEAP[$wide];
      FUNCTION_TABLE[$25]($26);
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 6:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$wide] + 8] != HEAP[HEAP[$utf8] + 8]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      
      
      
      var $39 = HEAP[HEAP[$wide]] - 1;
      
      var $41 = HEAP[$wide];
      HEAP[$41] = $39;
      
      
      
      
      if (HEAP[HEAP[$wide]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $50 = HEAP[HEAP[HEAP[$wide] + 4] + 24];
      var $51 = HEAP[$wide];
      FUNCTION_TABLE[$50]($51);
      __label__ = 9;
      break;
     case 9:
      
      
      
      var $55 = HEAP[HEAP[$utf8]] - 1;
      
      var $57 = HEAP[$utf8];
      HEAP[$57] = $55;
      
      
      
      
      if (HEAP[HEAP[$utf8]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $66 = HEAP[HEAP[HEAP[$utf8] + 4] + 24];
      var $67 = HEAP[$utf8];
      FUNCTION_TABLE[$66]($67);
      __label__ = 11;
      break;
     case 11:
      var $68 = _raiseTestError(__str90, __str91);
      HEAP[$0] = $68;
      __label__ = 25;
      break;
     case 12:
      var $69 = HEAP[$wide];
      var $70 = HEAP[$utf8];
      var $71 = _PyUnicodeUCS2_Compare($69, $70);
      
      if ($71 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 13:
      
      
      
      var $76 = HEAP[HEAP[$wide]] - 1;
      
      var $78 = HEAP[$wide];
      HEAP[$78] = $76;
      
      
      
      
      if (HEAP[HEAP[$wide]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $87 = HEAP[HEAP[HEAP[$wide] + 4] + 24];
      var $88 = HEAP[$wide];
      FUNCTION_TABLE[$87]($88);
      __label__ = 15;
      break;
     case 15:
      
      
      
      var $92 = HEAP[HEAP[$utf8]] - 1;
      
      var $94 = HEAP[$utf8];
      HEAP[$94] = $92;
      
      
      
      
      if (HEAP[HEAP[$utf8]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $103 = HEAP[HEAP[HEAP[$utf8] + 4] + 24];
      var $104 = HEAP[$utf8];
      FUNCTION_TABLE[$103]($104);
      __label__ = 17;
      break;
     case 17:
      var $105 = _PyErr_Occurred();
      
      if ($105 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 19:
      var $107 = _raiseTestError(__str90, __str92);
      HEAP[$0] = $107;
      __label__ = 25;
      break;
     case 20:
      
      
      
      var $111 = HEAP[HEAP[$wide]] - 1;
      
      var $113 = HEAP[$wide];
      HEAP[$113] = $111;
      
      
      
      
      if (HEAP[HEAP[$wide]] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $122 = HEAP[HEAP[HEAP[$wide] + 4] + 24];
      var $123 = HEAP[$wide];
      FUNCTION_TABLE[$122]($123);
      __label__ = 22;
      break;
     case 22:
      
      
      
      var $127 = HEAP[HEAP[$utf8]] - 1;
      
      var $129 = HEAP[$utf8];
      HEAP[$129] = $127;
      
      
      
      
      if (HEAP[HEAP[$utf8]] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $138 = HEAP[HEAP[HEAP[$utf8] + 4] + 24];
      var $139 = HEAP[$utf8];
      FUNCTION_TABLE[$138]($139);
      __label__ = 24;
      break;
     case 24:
      
      var $141 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $141;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 25;
      break;
     case 25:
      var $142 = HEAP[$0];
      HEAP[$retval] = $142;
      __label__ = 26;
      break;
     case 26:
      var $retval26 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval26;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_empty_argparse($self) {
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
      var $tuple = __stackBase__ + 12;
      var $dict = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$dict] = 0;
      var $1 = _PyTuple_New(0);
      HEAP[$tuple] = $1;
      
      
      if (HEAP[$tuple] == 0) {
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
      var $4 = HEAP[$tuple];
      var $5 = _PyArg_ParseTuple($4, __str93, allocate(1, "i32", ALLOC_STACK));
      HEAP[$result] = $5;
      
      
      if (HEAP[$result] < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $8 = _PyDict_New();
      HEAP[$dict] = $8;
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $11 = HEAP[$tuple];
      var $12 = HEAP[$dict];
      var $13 = _PyArg_ParseTupleAndKeywords($11, $12, __str93, _kwlist_10077, allocate(1, "i32", ALLOC_STACK));
      HEAP[$result] = $13;
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $17 = HEAP[HEAP[$tuple]] - 1;
      
      var $19 = HEAP[$tuple];
      HEAP[$19] = $17;
      
      
      
      
      if (HEAP[HEAP[$tuple]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $28 = HEAP[HEAP[HEAP[$tuple] + 4] + 24];
      var $29 = HEAP[$tuple];
      FUNCTION_TABLE[$28]($29);
      __label__ = 7;
      break;
     case 7:
      
      
      if (HEAP[$dict] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      var $35 = HEAP[HEAP[$dict]] - 1;
      
      var $37 = HEAP[$dict];
      HEAP[$37] = $35;
      
      
      
      
      if (HEAP[HEAP[$dict]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$dict] + 4] + 24];
      var $47 = HEAP[$dict];
      FUNCTION_TABLE[$46]($47);
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$result] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 12:
      
      var $51 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $51;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 13;
      break;
     case 13:
      var $52 = HEAP[$0];
      HEAP[$retval] = $52;
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
  function _codec_incrementalencoder($self, $args) {
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
      var $encoding = __stackBase__ + 16;
      var $errors = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$errors] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str94, allocate([ $encoding, 0, 0, 0, $errors, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$errors];
      var $5 = HEAP[$encoding];
      var $6 = _PyCodec_IncrementalEncoder($5, $4);
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
  function _codec_incrementaldecoder($self, $args) {
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
      var $encoding = __stackBase__ + 16;
      var $errors = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$errors] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str95, allocate([ $encoding, 0, 0, 0, $errors, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$errors];
      var $5 = HEAP[$encoding];
      var $6 = _PyCodec_IncrementalDecoder($5, $4);
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
  function _test_long_numbits($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 208;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 208);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $testcases = __stackBase__ + 12;
      var $i = __stackBase__ + 192;
      var $plong = __stackBase__ + 196;
      var $nbits = __stackBase__ + 200;
      var $sign = __stackBase__ + 204;
      
      HEAP[__stackBase__] = $self;
      var $testcases1 = $testcases;
      _llvm_memcpy_p0i8_p0i8_i32($testcases1, _C_92_10153, 180, 4, 0);
      HEAP[$i] = 0;
      __label__ = 8;
      break;
     case 1:
      
      
      
      var $4 = HEAP[$testcases + HEAP[$i] * 12];
      var $5 = _PyLong_FromLong($4);
      HEAP[$plong] = $5;
      var $6 = HEAP[$plong];
      var $7 = __PyLong_NumBits($6);
      HEAP[$nbits] = $7;
      var $8 = HEAP[$plong];
      var $9 = __PyLong_Sign($8);
      HEAP[$sign] = $9;
      
      
      
      var $13 = HEAP[HEAP[$plong]] - 1;
      
      var $15 = HEAP[$plong];
      HEAP[$15] = $13;
      
      
      
      
      if (HEAP[HEAP[$plong]] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[$plong] + 4] + 24];
      var $25 = HEAP[$plong];
      FUNCTION_TABLE[$24]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      
      if (HEAP[$testcases + HEAP[$i] * 12 + 4] != HEAP[$nbits]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $32 = _raiseTestError(__str96, __str97);
      HEAP[$0] = $32;
      __label__ = 10;
      break;
     case 5:
      
      
      
      
      
      
      if (HEAP[$testcases + HEAP[$i] * 12 + 8] != HEAP[$sign]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $39 = _raiseTestError(__str96, __str98);
      HEAP[$0] = $39;
      __label__ = 10;
      break;
     case 7:
      
      var $41 = HEAP[$i] + 1;
      HEAP[$i] = $41;
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$i] <= 14) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      var $45 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $45;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 10;
      break;
     case 10:
      var $46 = HEAP[$0];
      HEAP[$retval] = $46;
      __label__ = 11;
      break;
     case 11:
      var $retval11 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_null_strings($self) {
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
      var $o1 = __stackBase__ + 12;
      var $o2 = __stackBase__ + 16;
      var $tuple = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      var $1 = _PyObject_Str(0);
      HEAP[$o1] = $1;
      var $2 = _PyObject_Unicode(0);
      HEAP[$o2] = $2;
      var $3 = HEAP[$o1];
      var $4 = HEAP[$o2];
      var $5 = _PyTuple_Pack(2, allocate([ $3, 0, 0, 0, $4, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$tuple] = $5;
      
      
      if (HEAP[$o1] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $11 = HEAP[HEAP[$o1]] - 1;
      
      var $13 = HEAP[$o1];
      HEAP[$13] = $11;
      
      
      
      
      if (HEAP[HEAP[$o1]] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$o1] + 4] + 24];
      var $23 = HEAP[$o1];
      FUNCTION_TABLE[$22]($23);
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$o2] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      var $29 = HEAP[HEAP[$o2]] - 1;
      
      var $31 = HEAP[$o2];
      HEAP[$31] = $29;
      
      
      
      
      if (HEAP[HEAP[$o2]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $40 = HEAP[HEAP[HEAP[$o2] + 4] + 24];
      var $41 = HEAP[$o2];
      FUNCTION_TABLE[$40]($41);
      __label__ = 6;
      break;
     case 6:
      var $42 = HEAP[$tuple];
      HEAP[$0] = $42;
      var $43 = HEAP[$0];
      HEAP[$retval] = $43;
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
  function _raise_exception($self, $args) {
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
      var $exc = __stackBase__ + 16;
      var $exc_args = __stackBase__ + 20;
      var $v = __stackBase__ + 24;
      var $num_args = __stackBase__ + 28;
      var $i = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str99, allocate([ $exc, 0, 0, 0, $num_args, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      if (HEAP[HEAP[$exc] + 4] != _PyClass_Type) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$exc] + 4] + 84] >= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      if ((HEAP[HEAP[$exc] + 84] & 1073741824) == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $20 = HEAP[_PyExc_TypeError];
      var $21 = _PyErr_Format($20, __str100, allocate(1, "i32", ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 6:
      var $22 = HEAP[$num_args];
      var $23 = _PyTuple_New($22);
      HEAP[$exc_args] = $23;
      
      
      if (HEAP[$exc_args] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 8:
      HEAP[$i] = 0;
      __label__ = 14;
      break;
     case 9:
      var $26 = HEAP[$i];
      var $27 = _PyInt_FromLong($26);
      HEAP[$v] = $27;
      
      
      if (HEAP[$v] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      var $33 = HEAP[HEAP[$exc_args]] - 1;
      
      var $35 = HEAP[$exc_args];
      HEAP[$35] = $33;
      
      
      
      
      if (HEAP[HEAP[$exc_args]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$exc_args] + 4] + 24];
      var $45 = HEAP[$exc_args];
      FUNCTION_TABLE[$44]($45);
      __label__ = 12;
      break;
     case 12:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 13:
      
      
      
      
      var $50 = HEAP[$exc_args] + 12 + HEAP[$i] * 4;
      var $51 = HEAP[$v];
      HEAP[$50] = $51;
      
      var $53 = HEAP[$i] + 1;
      HEAP[$i] = $53;
      __label__ = 14;
      break;
     case 14:
      
      
      
      if (HEAP[$i] < HEAP[$num_args]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $57 = HEAP[$exc];
      var $58 = HEAP[$exc_args];
      _PyErr_SetObject($57, $58);
      
      
      
      var $62 = HEAP[HEAP[$exc_args]] - 1;
      
      var $64 = HEAP[$exc_args];
      HEAP[$64] = $62;
      
      
      
      
      if (HEAP[HEAP[$exc_args]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[$exc_args] + 4] + 24];
      var $74 = HEAP[$exc_args];
      FUNCTION_TABLE[$73]($74);
      __label__ = 17;
      break;
     case 17:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 18:
      var $75 = HEAP[$0];
      HEAP[$retval] = $75;
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
  function _test_datetime_capi($self, $args) {
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
      
      
      if (HEAP[_PyDateTimeAPI] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      if (HEAP[_test_run_counter] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $6 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $6;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 7;
      break;
     case 3:
      var $7 = HEAP[_PyExc_AssertionError];
      _PyErr_SetString($7, __str101);
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 4:
      
      var $9 = HEAP[_test_run_counter] + 1;
      HEAP[_test_run_counter] = $9;
      var $10 = _PyCapsule_Import(__str102, 0);
      
      HEAP[_PyDateTimeAPI] = $10;
      
      
      if (HEAP[_PyDateTimeAPI] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $15 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $15;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 7;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $16 = HEAP[$0];
      HEAP[$retval] = $16;
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
  function _test_string_from_format($self, $args) {
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
      var $result = __stackBase__ + 16;
      var $msg = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = _PyString_FromFormat(__str103, allocate([ 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
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
      __label__ = 53;
      break;
     case 2:
      var $4 = HEAP[$result];
      var $5 = _PyString_AsString($4);
      var $6 = _strcmp($5, __str104);
      
      if ($6 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$msg] = __str105;
      __label__ = 49;
      break;
     case 4:
      
      
      
      var $11 = HEAP[HEAP[$result]] - 1;
      
      var $13 = HEAP[$result];
      HEAP[$13] = $11;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $23 = HEAP[$result];
      FUNCTION_TABLE[$22]($23);
      __label__ = 6;
      break;
     case 6:
      var $24 = _PyString_FromFormat(__str106, allocate([ 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $24;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 53;
      break;
     case 8:
      var $27 = HEAP[$result];
      var $28 = _PyString_AsString($27);
      var $29 = _strcmp($28, __str104);
      
      if ($29 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$msg] = __str107;
      __label__ = 49;
      break;
     case 10:
      
      
      
      var $34 = HEAP[HEAP[$result]] - 1;
      
      var $36 = HEAP[$result];
      HEAP[$36] = $34;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $45 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $46 = HEAP[$result];
      FUNCTION_TABLE[$45]($46);
      __label__ = 12;
      break;
     case 12:
      var $47 = _PyString_FromFormat(__str108, allocate([ 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $47;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$0] = 0;
      __label__ = 53;
      break;
     case 14:
      var $50 = HEAP[$result];
      var $51 = _PyString_AsString($50);
      var $52 = _strcmp($51, __str104);
      
      if ($52 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$msg] = __str109;
      __label__ = 49;
      break;
     case 16:
      
      
      
      var $57 = HEAP[HEAP[$result]] - 1;
      
      var $59 = HEAP[$result];
      HEAP[$59] = $57;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $68 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $69 = HEAP[$result];
      FUNCTION_TABLE[$68]($69);
      __label__ = 18;
      break;
     case 18:
      var $70 = _PyString_FromFormat(__str110, allocate([ 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $70;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$0] = 0;
      __label__ = 53;
      break;
     case 20:
      var $73 = HEAP[$result];
      var $74 = _PyString_AsString($73);
      var $75 = _strcmp($74, __str104);
      
      if ($75 != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      HEAP[$msg] = __str111;
      __label__ = 49;
      break;
     case 22:
      
      
      
      var $80 = HEAP[HEAP[$result]] - 1;
      
      var $82 = HEAP[$result];
      HEAP[$82] = $80;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $91 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $92 = HEAP[$result];
      FUNCTION_TABLE[$91]($92);
      __label__ = 24;
      break;
     case 24:
      var $93 = _PyString_FromFormat(__str112, allocate([ 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $93;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      HEAP[$0] = 0;
      __label__ = 53;
      break;
     case 26:
      var $96 = HEAP[$result];
      var $97 = _PyString_AsString($96);
      var $98 = _strcmp($97, __str104);
      
      if ($98 != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      HEAP[$msg] = __str113;
      __label__ = 49;
      break;
     case 28:
      
      
      
      var $103 = HEAP[HEAP[$result]] - 1;
      
      var $105 = HEAP[$result];
      HEAP[$105] = $103;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $114 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $115 = HEAP[$result];
      FUNCTION_TABLE[$114]($115);
      __label__ = 30;
      break;
     case 30:
      var $116 = _PyString_FromFormat(__str114, allocate([ 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $116;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      HEAP[$0] = 0;
      __label__ = 53;
      break;
     case 32:
      var $119 = HEAP[$result];
      var $120 = _PyString_AsString($119);
      var $121 = _strcmp($120, __str104);
      
      if ($121 != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      HEAP[$msg] = __str115;
      __label__ = 49;
      break;
     case 34:
      
      
      
      var $126 = HEAP[HEAP[$result]] - 1;
      
      var $128 = HEAP[$result];
      HEAP[$128] = $126;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $137 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $138 = HEAP[$result];
      FUNCTION_TABLE[$137]($138);
      __label__ = 36;
      break;
     case 36:
      var $139 = _PyString_FromFormat(__str116, allocate([ 1, 0, 0, 0, 0, 0, 0, 0 ], [ "i64", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $139;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      HEAP[$0] = 0;
      __label__ = 53;
      break;
     case 38:
      var $142 = HEAP[$result];
      var $143 = _PyString_AsString($142);
      var $144 = _strcmp($143, __str104);
      
      if ($144 != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      HEAP[$msg] = __str117;
      __label__ = 49;
      break;
     case 40:
      
      
      
      var $149 = HEAP[HEAP[$result]] - 1;
      
      var $151 = HEAP[$result];
      HEAP[$151] = $149;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $160 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $161 = HEAP[$result];
      FUNCTION_TABLE[$160]($161);
      __label__ = 42;
      break;
     case 42:
      var $162 = _PyString_FromFormat(__str118, allocate([ 1, 0, 0, 0, 0, 0, 0, 0 ], [ "i64", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $162;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      HEAP[$0] = 0;
      __label__ = 53;
      break;
     case 44:
      var $165 = HEAP[$result];
      var $166 = _PyString_AsString($165);
      var $167 = _strcmp($166, __str104);
      
      if ($167 != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      HEAP[$msg] = __str119;
      __label__ = 49;
      break;
     case 46:
      
      
      
      var $172 = HEAP[HEAP[$result]] - 1;
      
      var $174 = HEAP[$result];
      HEAP[$174] = $172;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      
      
      
      
      var $183 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $184 = HEAP[$result];
      FUNCTION_TABLE[$183]($184);
      __label__ = 48;
      break;
     case 48:
      
      var $186 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $186;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 53;
      break;
     case 49:
      
      
      if (HEAP[$result] != 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 50:
      
      
      
      var $192 = HEAP[HEAP[$result]] - 1;
      
      var $194 = HEAP[$result];
      HEAP[$194] = $192;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      
      
      
      
      var $203 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $204 = HEAP[$result];
      FUNCTION_TABLE[$203]($204);
      __label__ = 52;
      break;
     case 52:
      var $205 = HEAP[$msg];
      var $206 = _raiseTestError(__str120, $205);
      HEAP[$0] = $206;
      __label__ = 53;
      break;
     case 53:
      var $207 = HEAP[$0];
      HEAP[$retval] = $207;
      __label__ = 54;
      break;
     case 54:
      var $retval52 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval52;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _capsule_destructor($o) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $o_addr = __stackBase__;
      
      HEAP[$o_addr] = $o;
      
      var $1 = HEAP[_capsule_destructor_call_count] + 1;
      HEAP[_capsule_destructor_call_count] = $1;
      var $2 = HEAP[$o_addr];
      var $3 = _PyCapsule_GetContext($2);
      
      
      if ($3 != HEAP[_capsule_context]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[_capsule_error] = __str124;
      __label__ = 8;
      break;
     case 2:
      var $6 = HEAP[$o_addr];
      var $7 = _PyCapsule_GetDestructor($6);
      
      if ($7 != FUNCTION_TABLE_OFFSET + 6) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[_capsule_error] = __str125;
      __label__ = 8;
      break;
     case 4:
      var $9 = HEAP[$o_addr];
      var $10 = _PyCapsule_GetName($9);
      
      
      if ($10 != HEAP[_capsule_name]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[_capsule_error] = __str126;
      __label__ = 8;
      break;
     case 6:
      var $13 = HEAP[_capsule_name];
      var $14 = HEAP[$o_addr];
      var $15 = _PyCapsule_GetPointer($14, $13);
      
      
      if ($15 != HEAP[_capsule_pointer]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[_capsule_error] = __str127;
      __label__ = 8;
      break;
     case 8:
      __label__ = 9;
      break;
     case 9:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_capsule($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 88;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 88);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $object = __stackBase__ + 16;
      var $error = __stackBase__ + 20;
      var $pointer = __stackBase__ + 24;
      var $pointer2 = __stackBase__ + 28;
      var $known_capsules = __stackBase__ + 32;
      var $known = __stackBase__ + 80;
      var $module = __stackBase__ + 84;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$error] = 0;
      var $known_capsules1 = $known_capsules;
      _llvm_memset_p0i8_i32($known_capsules1, 0, 48, 4, 0);
      
      
      HEAP[$known_capsules] = __str128;
      
      
      HEAP[$known_capsules + 4] = __str129;
      
      
      HEAP[$known_capsules + 8] = __str130;
      
      
      HEAP[$known_capsules + 12] = __str131;
      
      
      HEAP[$known_capsules + 12 + 4] = __str132;
      
      
      HEAP[$known_capsules + 12 + 8] = __str133;
      
      
      HEAP[$known_capsules + 24] = __str102;
      
      
      HEAP[$known_capsules + 24 + 4] = __str134;
      
      
      HEAP[$known_capsules + 24 + 8] = __str135;
      
      HEAP[$known] = $known_capsules;
      var $20 = HEAP[_capsule_name];
      var $21 = HEAP[_capsule_pointer];
      var $22 = _PyCapsule_New($21, $20, FUNCTION_TABLE_OFFSET + 6);
      HEAP[$object] = $22;
      var $23 = HEAP[_capsule_context];
      var $24 = HEAP[$object];
      var $25 = _PyCapsule_SetContext($24, $23);
      var $26 = HEAP[$object];
      _capsule_destructor($26);
      
      
      if (HEAP[_capsule_error] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $29 = HEAP[_capsule_error];
      HEAP[$error] = $29;
      __label__ = 56;
      break;
     case 2:
      
      
      if (HEAP[_capsule_destructor_call_count] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$error] = __str136;
      __label__ = 56;
      break;
     case 4:
      HEAP[_capsule_destructor_call_count] = 0;
      
      
      
      var $35 = HEAP[HEAP[$object]] - 1;
      
      var $37 = HEAP[$object];
      HEAP[$37] = $35;
      
      
      
      
      if (HEAP[HEAP[$object]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$object] + 4] + 24];
      var $47 = HEAP[$object];
      FUNCTION_TABLE[$46]($47);
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[_capsule_error] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $50 = HEAP[_capsule_error];
      HEAP[$error] = $50;
      __label__ = 56;
      break;
     case 8:
      
      
      if (HEAP[_capsule_destructor_call_count] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$error] = __str136;
      __label__ = 56;
      break;
     case 10:
      HEAP[_capsule_destructor_call_count] = 0;
      
      var $54 = HEAP[$known];
      var $55 = _PyCapsule_New($54, __str137, 0);
      HEAP[$object] = $55;
      var $56 = HEAP[_capsule_pointer];
      var $57 = HEAP[$object];
      var $58 = _PyCapsule_SetPointer($57, $56);
      var $59 = HEAP[_capsule_name];
      var $60 = HEAP[$object];
      var $61 = _PyCapsule_SetName($60, $59);
      var $62 = HEAP[$object];
      var $63 = _PyCapsule_SetDestructor($62, FUNCTION_TABLE_OFFSET + 6);
      var $64 = HEAP[_capsule_context];
      var $65 = HEAP[$object];
      var $66 = _PyCapsule_SetContext($65, $64);
      var $67 = HEAP[$object];
      _capsule_destructor($67);
      
      
      if (HEAP[_capsule_error] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $70 = HEAP[_capsule_error];
      HEAP[$error] = $70;
      __label__ = 56;
      break;
     case 12:
      
      
      if (HEAP[_capsule_destructor_call_count] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$error] = __str136;
      __label__ = 56;
      break;
     case 14:
      HEAP[_capsule_destructor_call_count] = 0;
      var $73 = HEAP[$object];
      var $74 = _PyCapsule_GetPointer($73, __str138);
      HEAP[$pointer2] = $74;
      var $75 = _PyErr_Occurred();
      
      if ($75 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$error] = __str139;
      __label__ = 56;
      break;
     case 16:
      _PyErr_Clear();
      
      
      if (HEAP[$pointer2] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      
      
      
      if (HEAP[$pointer2] == HEAP[_capsule_pointer]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      HEAP[$error] = __str140;
      __label__ = 56;
      break;
     case 19:
      HEAP[$error] = __str141;
      __label__ = 56;
      break;
     case 20:
      var $82 = HEAP[$object];
      var $83 = _PyCapsule_SetDestructor($82, 0);
      
      
      
      var $87 = HEAP[HEAP[$object]] - 1;
      
      var $89 = HEAP[$object];
      HEAP[$89] = $87;
      
      
      
      
      if (HEAP[HEAP[$object]] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $98 = HEAP[HEAP[HEAP[$object] + 4] + 24];
      var $99 = HEAP[$object];
      FUNCTION_TABLE[$98]($99);
      __label__ = 22;
      break;
     case 22:
      
      
      if (HEAP[_capsule_destructor_call_count] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      HEAP[$error] = __str142;
      __label__ = 56;
      break;
     case 24:
      
      HEAP[$known] = $known_capsules;
      __label__ = 55;
      break;
     case 25:
      
      
      var $105 = HEAP[HEAP[$known] + 4];
      var $106 = _PyImport_ImportModule($105);
      HEAP[$module] = $106;
      
      
      if (HEAP[$module] != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 26:
      
      
      var $111 = HEAP[HEAP[$known]];
      var $112 = _PyCapsule_Import($111, 0);
      HEAP[$pointer] = $112;
      
      
      if (HEAP[$pointer] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      
      
      
      var $118 = HEAP[HEAP[$module]] - 1;
      
      var $120 = HEAP[$module];
      HEAP[$120] = $118;
      
      
      
      
      if (HEAP[HEAP[$module]] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $129 = HEAP[HEAP[HEAP[$module] + 4] + 24];
      var $130 = HEAP[$module];
      FUNCTION_TABLE[$129]($130);
      __label__ = 29;
      break;
     case 29:
      
      
      var $133 = HEAP[HEAP[$known] + 8];
      
      
      var $136 = HEAP[HEAP[$known] + 4];
      var $137 = _sprintf(_buffer_10470, __str143, allocate([ __str144, 0, 0, 0, $136, 0, 0, 0, $133, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$error] = _buffer_10470;
      __label__ = 56;
      break;
     case 30:
      
      
      var $140 = HEAP[HEAP[$known] + 8];
      var $141 = HEAP[$module];
      var $142 = _PyObject_GetAttrString($141, $140);
      HEAP[$object] = $142;
      
      
      if (HEAP[$object] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 31:
      
      
      
      var $148 = HEAP[HEAP[$module]] - 1;
      
      var $150 = HEAP[$module];
      HEAP[$150] = $148;
      
      
      
      
      if (HEAP[HEAP[$module]] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      var $159 = HEAP[HEAP[HEAP[$module] + 4] + 24];
      var $160 = HEAP[$module];
      FUNCTION_TABLE[$159]($160);
      __label__ = 33;
      break;
     case 33:
      HEAP[$0] = 0;
      __label__ = 59;
      break;
     case 34:
      var $161 = HEAP[$object];
      var $162 = _PyCapsule_GetPointer($161, __str145);
      HEAP[$pointer2] = $162;
      var $163 = _PyErr_Occurred();
      
      if ($163 == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 35:
      
      
      
      var $168 = HEAP[HEAP[$object]] - 1;
      
      var $170 = HEAP[$object];
      HEAP[$170] = $168;
      
      
      
      
      if (HEAP[HEAP[$object]] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      var $179 = HEAP[HEAP[HEAP[$object] + 4] + 24];
      var $180 = HEAP[$object];
      FUNCTION_TABLE[$179]($180);
      __label__ = 37;
      break;
     case 37:
      
      
      
      var $184 = HEAP[HEAP[$module]] - 1;
      
      var $186 = HEAP[$module];
      HEAP[$186] = $184;
      
      
      
      
      if (HEAP[HEAP[$module]] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      var $195 = HEAP[HEAP[HEAP[$module] + 4] + 24];
      var $196 = HEAP[$module];
      FUNCTION_TABLE[$195]($196);
      __label__ = 39;
      break;
     case 39:
      
      
      var $199 = HEAP[HEAP[$known] + 8];
      
      
      var $202 = HEAP[HEAP[$known] + 4];
      var $203 = _sprintf(_buffer_10470, __str143, allocate([ __str139, 0, 0, 0, $202, 0, 0, 0, $199, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$error] = _buffer_10470;
      __label__ = 56;
      break;
     case 40:
      _PyErr_Clear();
      
      
      if (HEAP[$pointer2] != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 41:
      
      
      
      var $209 = HEAP[HEAP[$module]] - 1;
      
      var $211 = HEAP[$module];
      HEAP[$211] = $209;
      
      
      
      
      if (HEAP[HEAP[$module]] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $220 = HEAP[HEAP[HEAP[$module] + 4] + 24];
      var $221 = HEAP[$module];
      FUNCTION_TABLE[$220]($221);
      __label__ = 43;
      break;
     case 43:
      
      
      
      var $225 = HEAP[HEAP[$object]] - 1;
      
      var $227 = HEAP[$object];
      HEAP[$227] = $225;
      
      
      
      
      if (HEAP[HEAP[$object]] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      var $236 = HEAP[HEAP[HEAP[$object] + 4] + 24];
      var $237 = HEAP[$object];
      FUNCTION_TABLE[$236]($237);
      __label__ = 45;
      break;
     case 45:
      
      
      
      if (HEAP[$pointer2] == HEAP[$pointer]) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      var $243 = HEAP[HEAP[$known] + 8];
      
      
      var $246 = HEAP[HEAP[$known] + 4];
      var $247 = _sprintf(_buffer_10470, __str143, allocate([ __str146, 0, 0, 0, $246, 0, 0, 0, $243, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$error] = _buffer_10470;
      __label__ = 56;
      break;
     case 47:
      
      
      var $250 = HEAP[HEAP[$known] + 8];
      
      
      var $253 = HEAP[HEAP[$known] + 4];
      var $254 = _sprintf(_buffer_10470, __str143, allocate([ __str141, 0, 0, 0, $253, 0, 0, 0, $250, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$error] = _buffer_10470;
      __label__ = 56;
      break;
     case 48:
      
      
      
      var $258 = HEAP[HEAP[$object]] - 1;
      
      var $260 = HEAP[$object];
      HEAP[$260] = $258;
      
      
      
      
      if (HEAP[HEAP[$object]] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      
      
      var $269 = HEAP[HEAP[HEAP[$object] + 4] + 24];
      var $270 = HEAP[$object];
      FUNCTION_TABLE[$269]($270);
      __label__ = 50;
      break;
     case 50:
      
      
      
      var $274 = HEAP[HEAP[$module]] - 1;
      
      var $276 = HEAP[$module];
      HEAP[$276] = $274;
      
      
      
      
      if (HEAP[HEAP[$module]] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      
      
      
      
      var $285 = HEAP[HEAP[HEAP[$module] + 4] + 24];
      var $286 = HEAP[$module];
      FUNCTION_TABLE[$285]($286);
      __label__ = 52;
      break;
     case 52:
      __label__ = 54;
      break;
     case 53:
      _PyErr_Clear();
      __label__ = 54;
      break;
     case 54:
      
      var $288 = HEAP[$known] + 12;
      HEAP[$known] = $288;
      __label__ = 55;
      break;
     case 55:
      
      
      
      
      if (HEAP[HEAP[$known] + 4] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 56:
      
      
      if (HEAP[$error] != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      var $295 = HEAP[$error];
      var $296 = _raiseTestError(__str147, $295);
      HEAP[$0] = $296;
      __label__ = 59;
      break;
     case 58:
      
      var $298 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $298;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 59;
      break;
     case 59:
      var $299 = HEAP[$0];
      HEAP[$retval] = $299;
      __label__ = 60;
      break;
     case 60:
      var $retval59 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval59;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_with_docstring($self) {
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
  function _traceback_print($self, $args) {
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
      var $file = __stackBase__ + 16;
      var $traceback = __stackBase__ + 20;
      var $result = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str148, allocate([ $traceback, 0, 0, 0, $file, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$file];
      var $5 = HEAP[$traceback];
      var $6 = _PyTraceBack_Print($5, $4);
      HEAP[$result] = $6;
      
      
      if (HEAP[$result] < 0) {
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
      
      var $10 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $10;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 5;
      break;
     case 5:
      var $11 = HEAP[$0];
      HEAP[$retval] = $11;
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
  function _code_newempty($self, $args) {
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
      var $filename = __stackBase__ + 16;
      var $funcname = __stackBase__ + 20;
      var $firstlineno = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str149, allocate([ $filename, 0, 0, 0, $funcname, 0, 0, 0, $firstlineno, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$firstlineno];
      var $5 = HEAP[$funcname];
      var $6 = HEAP[$filename];
      var $7 = _PyCode_NewEmpty($6, $5, $4);
      var $8 = $7;
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
  function _make_exception_with_doc($self, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kwargs_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $name = __stackBase__ + 20;
      var $doc = __stackBase__ + 24;
      var $base = __stackBase__ + 28;
      var $dict = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwargs_addr] = $kwargs;
      HEAP[$doc] = 0;
      HEAP[$base] = 0;
      HEAP[$dict] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwargs_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str150, _kwlist_10671, allocate([ $name, 0, 0, 0, $doc, 0, 0, 0, $base, 0, 0, 0, $dict, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$dict];
      var $6 = HEAP[$base];
      var $7 = HEAP[$doc];
      var $8 = HEAP[$name];
      var $9 = _PyErr_NewExceptionWithDoc($8, $7, $6, $5);
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
  function _test_structmembers_new($type, $args, $kwargs) {
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
      var $kwargs_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $ob = __stackBase__ + 20;
      var $s = __stackBase__ + 24;
      var $string_len = __stackBase__ + 28;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwargs_addr] = $kwargs;
      HEAP[$s] = 0;
      HEAP[$string_len] = 0;
      var $1 = HEAP[$type_addr];
      var $2 = __PyObject_New($1);
      var $3 = $2;
      HEAP[$ob] = $3;
      
      
      if (HEAP[$ob] == 0) {
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
      
      
      var $8 = HEAP[$ob] + 8;
      _llvm_memset_p0i8_i32($8, 0, 60, 1, 0);
      
      
      var $11 = HEAP[$ob] + 8 + 52;
      
      
      var $14 = HEAP[$ob] + 8 + 44;
      
      
      var $17 = HEAP[$ob] + 8 + 28;
      
      
      var $20 = HEAP[$ob] + 8 + 24;
      
      
      var $23 = HEAP[$ob] + 8 + 20;
      
      
      var $26 = HEAP[$ob] + 8 + 16;
      
      
      var $29 = HEAP[$ob] + 8 + 12;
      
      
      var $32 = HEAP[$ob] + 8 + 8;
      
      
      var $35 = HEAP[$ob] + 8 + 6;
      
      
      var $38 = HEAP[$ob] + 8 + 4;
      
      
      var $41 = HEAP[$ob] + 8 + 2;
      
      
      var $44 = HEAP[$ob] + 8 + 1;
      
      
      var $47 = HEAP[$ob] + 8;
      var $48 = HEAP[_fmt_10711];
      var $49 = HEAP[$args_addr];
      var $50 = HEAP[$kwargs_addr];
      var $51 = _PyArg_ParseTupleAndKeywords($49, $50, $48, _keywords_10710, allocate([ $47, 0, 0, 0, $44, 0, 0, 0, $41, 0, 0, 0, $38, 0, 0, 0, $35, 0, 0, 0, $32, 0, 0, 0, $29, 0, 0, 0, $26, 0, 0, 0, $23, 0, 0, 0, $20, 0, 0, 0, $17, 0, 0, 0, $s, 0, 0, 0, $string_len, 0, 0, 0, $14, 0, 0, 0, $11, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i16*", 0, 0, 0, "i16*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "float*", 0, 0, 0, "double*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i64*", 0, 0, 0, "i64*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($51 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      var $54 = HEAP[$ob];
      
      
      var $57 = HEAP[$54] - 1;
      var $58 = $54;
      HEAP[$58] = $57;
      
      
      
      if (HEAP[$54] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[$ob] + 4] + 24];
      
      var $69 = HEAP[$ob];
      FUNCTION_TABLE[$67]($69);
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 6:
      
      
      if (HEAP[$s] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      
      
      if (HEAP[$string_len] > 5) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      var $75 = HEAP[$ob];
      
      
      var $78 = HEAP[$75] - 1;
      var $79 = $75;
      HEAP[$79] = $78;
      
      
      
      if (HEAP[$75] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      var $88 = HEAP[HEAP[HEAP[$ob] + 4] + 24];
      
      var $90 = HEAP[$ob];
      FUNCTION_TABLE[$88]($90);
      __label__ = 10;
      break;
     case 10:
      var $91 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($91, __str199);
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 11:
      var $92 = HEAP[$s];
      
      
      
      var $96 = HEAP[$ob] + 8 + 36;
      var $97 = _strcpy($96, $92);
      __label__ = 13;
      break;
     case 12:
      
      
      
      var $101 = HEAP[$ob] + 8 + 36;
      _llvm_memcpy_p0i8_p0i8_i32($101, __str200, 1, 1, 0);
      __label__ = 13;
      break;
     case 13:
      
      var $103 = HEAP[$ob];
      HEAP[$0] = $103;
      __label__ = 14;
      break;
     case 14:
      var $104 = HEAP[$0];
      HEAP[$retval] = $104;
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
  function _test_structmembers_free($ob) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      
      HEAP[__stackBase__] = $ob;
      
      var $1 = HEAP[__stackBase__];
      _free($1);
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _init_testcapi() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      
      var $0 = _Py_InitModule4(__str203, _TestMethods, 0, 0, 1013);
      HEAP[$m] = $0;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      HEAP[__HashInheritanceTester_Type + 4] = _PyType_Type;
      
      HEAP[_test_structmembersType + 4] = _PyType_Type;
      
      
      var $7 = HEAP[_test_structmembersType] + 1;
      
      HEAP[_test_structmembersType] = $7;
      var $9 = HEAP[$m];
      var $10 = _PyModule_AddObject($9, __str204, _test_structmembersType);
      var $11 = _PyInt_FromLong(127);
      var $12 = HEAP[$m];
      var $13 = _PyModule_AddObject($12, __str205, $11);
      var $14 = _PyInt_FromLong(-128);
      var $15 = HEAP[$m];
      var $16 = _PyModule_AddObject($15, __str206, $14);
      var $17 = _PyInt_FromLong(255);
      var $18 = HEAP[$m];
      var $19 = _PyModule_AddObject($18, __str207, $17);
      var $20 = _PyInt_FromLong(32767);
      var $21 = HEAP[$m];
      var $22 = _PyModule_AddObject($21, __str208, $20);
      var $23 = _PyInt_FromLong(-32768);
      var $24 = HEAP[$m];
      var $25 = _PyModule_AddObject($24, __str209, $23);
      var $26 = _PyInt_FromLong(65535);
      var $27 = HEAP[$m];
      var $28 = _PyModule_AddObject($27, __str210, $26);
      var $29 = _PyLong_FromLong(2147483647);
      var $30 = HEAP[$m];
      var $31 = _PyModule_AddObject($30, __str211, $29);
      var $32 = _PyLong_FromLong(-2147483648);
      var $33 = HEAP[$m];
      var $34 = _PyModule_AddObject($33, __str212, $32);
      var $35 = _PyLong_FromUnsignedLong(-1);
      var $36 = HEAP[$m];
      var $37 = _PyModule_AddObject($36, __str213, $35);
      var $38 = _PyInt_FromLong(2147483647);
      var $39 = HEAP[$m];
      var $40 = _PyModule_AddObject($39, __str214, $38);
      var $41 = _PyInt_FromLong(-2147483648);
      var $42 = HEAP[$m];
      var $43 = _PyModule_AddObject($42, __str215, $41);
      var $44 = _PyLong_FromUnsignedLong(-1);
      var $45 = HEAP[$m];
      var $46 = _PyModule_AddObject($45, __str216, $44);
      var $47 = _PyFloat_FromDouble(3.4028234663852886e+38);
      var $48 = HEAP[$m];
      var $49 = _PyModule_AddObject($48, __str217, $47);
      var $50 = _PyFloat_FromDouble(1.1754943508222875e-38);
      var $51 = HEAP[$m];
      var $52 = _PyModule_AddObject($51, __str218, $50);
      var $53 = _PyFloat_FromDouble(1.7976931348623157e+308);
      var $54 = HEAP[$m];
      var $55 = _PyModule_AddObject($54, __str219, $53);
      var $56 = _PyFloat_FromDouble(2.2250738585072014e-308);
      var $57 = HEAP[$m];
      var $58 = _PyModule_AddObject($57, __str220, $56);
      var $59 = _PyLong_FromLongLong(0x8000000000000000);
      var $60 = HEAP[$m];
      var $61 = _PyModule_AddObject($60, __str221, $59);
      var $62 = _PyLong_FromLongLong(-0x8000000000000000);
      var $63 = HEAP[$m];
      var $64 = _PyModule_AddObject($63, __str222, $62);
      var $65 = _PyLong_FromUnsignedLongLong(-1);
      var $66 = HEAP[$m];
      var $67 = _PyModule_AddObject($66, __str223, $65);
      var $68 = _PyInt_FromSsize_t(2147483647);
      var $69 = HEAP[$m];
      var $70 = _PyModule_AddObject($69, __str224, $68);
      var $71 = _PyInt_FromSsize_t(-2147483648);
      var $72 = HEAP[$m];
      var $73 = _PyModule_AddObject($72, __str225, $71);
      var $74 = _PyInt_FromSsize_t(12);
      var $75 = HEAP[$m];
      var $76 = _PyModule_AddObject($75, __str226, $74);
      var $77 = _PyErr_NewException(__str227, 0, 0);
      HEAP[_TestError] = $77;
      
      
      
      var $81 = HEAP[HEAP[_TestError]] + 1;
      var $82 = HEAP[_TestError];
      HEAP[$82] = $81;
      var $83 = HEAP[_TestError];
      var $84 = HEAP[$m];
      var $85 = _PyModule_AddObject($84, __str228, $83);
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
  Module["_init_testcapi"] = _init_testcapi;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _raise_test_long_error, 0, _raise_test_longlong_error, 0, _capsule_destructor, 0, _PyObject_Free, 0, _PyObject_GenericGetAttr, 0, _PyType_GenericNew, 0, _broken_buffer_getbuffer, 0, _raise_exception, 0, _test_config, 0, _test_datetime_capi, 0, _test_list_api, 0, _test_dict_iteration, 0, _test_lazy_hash_inheritance, 0, _test_broken_memoryview, 0, _test_long_api, 0, _test_long_and_overflow, 0, _test_long_numbits, 0, _test_k_code, 0, _test_empty_argparse, 0, _test_null_strings, 0, _test_string_from_format, 0, _test_with_docstring, 0, _getargs_tuple, 0, _getargs_keywords, 0, _getargs_b, 0, _getargs_B, 0, _getargs_h, 0, _getargs_H, 0, _getargs_I, 0, _getargs_k, 0, _getargs_i, 0, _getargs_l, 0, _getargs_n, 0, _getargs_L, 0, _getargs_K, 0, _test_longlong_api, 0, _test_long_long_and_overflow, 0, _test_L_code, 0, _codec_incrementalencoder, 0, _codec_incrementaldecoder, 0, _test_u_code, 0, _test_widechar, 0, _test_capsule, 0, _traceback_print, 0, _code_newempty, 0, _make_exception_with_doc, 0, _test_structmembers_free, 0, _PyObject_GenericSetAttr, 0, _test_structmembers_new, 0 ]);
  function run(args) {
    _PyDateTimeAPI = allocate(1, "%struct.PyDateTime_CAPI*", ALLOC_NORMAL);
    _TestError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str = allocate([ 105, 110, 116, 101, 114, 110, 97, 108, 32, 101, 114, 114, 111, 114, 32, 109, 115, 103, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 37, 115, 58, 32, 37, 115, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 37, 46, 50, 48, 48, 115, 32, 35, 100, 101, 102, 105, 110, 101, 32, 61, 61, 32, 37, 100, 32, 98, 117, 116, 32, 115, 105, 122, 101, 111, 102, 40, 37, 46, 50, 48, 48, 115, 41, 32, 61, 61, 32, 37, 100, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 116, 101, 115, 116, 95, 108, 105, 115, 116, 95, 97, 112, 105, 58, 32, 114, 101, 118, 101, 114, 115, 101, 32, 115, 99, 114, 101, 119, 101, 100, 32, 117, 112, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 116, 101, 115, 116, 95, 100, 105, 99, 116, 95, 105, 116, 101, 114, 97, 116, 105, 111, 110, 58, 32, 100, 105, 99, 116, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 32, 119, 101, 110, 116, 32, 119, 114, 111, 110, 103, 32, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 104, 97, 115, 104, 105, 110, 104, 101, 114, 105, 116, 97, 110, 99, 101, 116, 101, 115, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __HashInheritanceTester_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str6 = allocate([ 116, 101, 115, 116, 95, 108, 97, 122, 121, 95, 104, 97, 115, 104, 95, 105, 110, 104, 101, 114, 105, 116, 97, 110, 99, 101, 58, 32, 102, 97, 105, 108, 101, 100, 32, 116, 111, 32, 99, 114, 101, 97, 116, 101, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 116, 101, 115, 116, 95, 108, 97, 122, 121, 95, 104, 97, 115, 104, 95, 105, 110, 104, 101, 114, 105, 116, 97, 110, 99, 101, 58, 32, 116, 121, 112, 101, 32, 105, 110, 105, 116, 105, 97, 108, 105, 115, 101, 100, 32, 116, 111, 111, 32, 115, 111, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 116, 101, 115, 116, 95, 108, 97, 122, 121, 95, 104, 97, 115, 104, 95, 105, 110, 104, 101, 114, 105, 116, 97, 110, 99, 101, 58, 32, 99, 111, 117, 108, 100, 32, 110, 111, 116, 32, 104, 97, 115, 104, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 116, 101, 115, 116, 95, 108, 97, 122, 121, 95, 104, 97, 115, 104, 95, 105, 110, 104, 101, 114, 105, 116, 97, 110, 99, 101, 58, 32, 116, 121, 112, 101, 32, 110, 111, 116, 32, 105, 110, 105, 116, 105, 97, 108, 105, 115, 101, 100, 32, 98, 121, 32, 104, 97, 115, 104, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 116, 101, 115, 116, 95, 108, 97, 122, 121, 95, 104, 97, 115, 104, 95, 105, 110, 104, 101, 114, 105, 116, 97, 110, 99, 101, 58, 32, 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 104, 97, 115, 104, 32, 102, 117, 110, 99, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 116, 101, 115, 116, 95, 98, 114, 111, 107, 101, 110, 95, 109, 101, 109, 111, 114, 121, 118, 105, 101, 119, 58, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 101, 114, 114, 111, 114, 32, 105, 110, 32, 98, 102, 95, 103, 101, 116, 98, 117, 102, 102, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _memoryviewtester_as_buffer = allocate(24, [ "i32 (%struct.PyObject*, i32, i8**)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, i8**)*", 0, 0, 0, "i32 (%struct.PyObject*, i32*)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, i8**)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.Py_buffer*, i32)*", 0, 0, 0, "void (%struct.PyObject*, %struct.Py_buffer*)*", 0, 0, 0 ], ALLOC_NORMAL);
    __str12 = allocate([ 109, 101, 109, 111, 114, 121, 118, 105, 101, 119, 116, 101, 115, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __MemoryViewTester_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2228715, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str13 = allocate([ 116, 101, 115, 116, 95, 98, 114, 111, 107, 101, 110, 95, 109, 101, 109, 111, 114, 121, 118, 105, 101, 119, 58, 32, 102, 97, 105, 108, 101, 100, 32, 116, 111, 32, 99, 114, 101, 97, 116, 101, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 116, 101, 115, 116, 95, 98, 114, 111, 107, 101, 110, 95, 109, 101, 109, 111, 114, 121, 118, 105, 101, 119, 58, 32, 109, 101, 109, 111, 114, 121, 118, 105, 101, 119, 40, 41, 32, 100, 105, 100, 110, 39, 116, 32, 114, 97, 105, 115, 101, 32, 97, 110, 32, 69, 120, 99, 101, 112, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 116, 101, 115, 116, 95, 108, 111, 110, 103, 95, 97, 112, 105, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 110, 117, 108, 108, 32, 114, 101, 115, 117, 108, 116, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 45, 49, 32, 114, 101, 115, 117, 108, 116, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 111, 117, 116, 112, 117, 116, 32, 33, 61, 32, 105, 110, 112, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 115, 105, 103, 110, 101, 100, 32, 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 110, 117, 108, 108, 32, 114, 101, 115, 117, 108, 116, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 115, 105, 103, 110, 101, 100, 32, 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 45, 49, 32, 114, 101, 115, 117, 108, 116, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 115, 105, 103, 110, 101, 100, 32, 111, 117, 116, 112, 117, 116, 32, 33, 61, 32, 105, 110, 112, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 78, 85, 76, 76, 32, 102, 114, 111, 109, 32, 80, 121, 76, 111, 110, 103, 95, 70, 114, 111, 109, 76, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 78, 85, 76, 76, 32, 102, 114, 111, 109, 32, 80, 121, 78, 117, 109, 98, 101, 114, 95, 78, 101, 103, 97, 116, 105, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 80, 121, 76, 111, 110, 103, 95, 65, 115, 85, 110, 115, 105, 103, 110, 101, 100, 88, 88, 88, 40, 45, 49, 41, 32, 100, 105, 100, 110, 39, 116, 32, 99, 111, 109, 112, 108, 97, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 80, 121, 76, 111, 110, 103, 95, 65, 115, 85, 110, 115, 105, 103, 110, 101, 100, 88, 88, 88, 40, 45, 49, 41, 32, 114, 97, 105, 115, 101, 100, 32, 115, 111, 109, 101, 116, 104, 105, 110, 103, 32, 111, 116, 104, 101, 114, 32, 116, 104, 97, 110, 32, 79, 118, 101, 114, 102, 108, 111, 119, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 78, 85, 76, 76, 32, 102, 114, 111, 109, 32, 80, 121, 78, 117, 109, 98, 101, 114, 95, 76, 115, 104, 105, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 80, 121, 76, 111, 110, 103, 95, 65, 115, 85, 110, 115, 105, 103, 110, 101, 100, 88, 88, 88, 40, 50, 42, 42, 78, 66, 73, 84, 83, 41, 32, 100, 105, 100, 110, 39, 116, 32, 99, 111, 109, 112, 108, 97, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 80, 121, 76, 111, 110, 103, 95, 65, 115, 85, 110, 115, 105, 103, 110, 101, 100, 88, 88, 88, 40, 50, 42, 42, 78, 66, 73, 84, 83, 41, 32, 114, 97, 105, 115, 101, 100, 32, 115, 111, 109, 101, 116, 104, 105, 110, 103, 32, 111, 116, 104, 101, 114, 32, 116, 104, 97, 110, 32, 79, 118, 101, 114, 102, 108, 111, 119, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 78, 85, 76, 76, 32, 102, 114, 111, 109, 32, 80, 121, 78, 117, 109, 98, 101, 114, 95, 82, 115, 104, 105, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 80, 121, 76, 111, 110, 103, 95, 65, 115, 88, 88, 88, 40, 50, 42, 42, 40, 78, 66, 73, 84, 83, 45, 49, 41, 41, 32, 100, 105, 100, 110, 39, 116, 32, 99, 111, 109, 112, 108, 97, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 80, 121, 76, 111, 110, 103, 95, 65, 115, 88, 88, 88, 40, 50, 42, 42, 40, 78, 66, 73, 84, 83, 45, 49, 41, 41, 32, 114, 97, 105, 115, 101, 100, 32, 115, 111, 109, 101, 116, 104, 105, 110, 103, 32, 111, 116, 104, 101, 114, 32, 116, 104, 97, 110, 32, 79, 118, 101, 114, 102, 108, 111, 119, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 78, 85, 76, 76, 32, 102, 114, 111, 109, 32, 80, 121, 78, 117, 109, 98, 101, 114, 95, 83, 117, 98, 116, 114, 97, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 80, 121, 76, 111, 110, 103, 95, 65, 115, 88, 88, 88, 40, 45, 50, 42, 42, 40, 78, 66, 73, 84, 83, 45, 49, 41, 45, 49, 41, 32, 100, 105, 100, 110, 39, 116, 32, 99, 111, 109, 112, 108, 97, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 80, 121, 76, 111, 110, 103, 95, 65, 115, 88, 88, 88, 40, 45, 50, 42, 42, 40, 78, 66, 73, 84, 83, 45, 49, 41, 45, 49, 41, 32, 114, 97, 105, 115, 101, 100, 32, 115, 111, 109, 101, 116, 104, 105, 110, 103, 32, 111, 116, 104, 101, 114, 32, 116, 104, 97, 110, 32, 79, 118, 101, 114, 102, 108, 111, 119, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 116, 101, 115, 116, 95, 108, 111, 110, 103, 108, 111, 110, 103, 95, 97, 112, 105, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 116, 101, 115, 116, 95, 108, 111, 110, 103, 95, 97, 110, 100, 95, 111, 118, 101, 114, 102, 108, 111, 119, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 119, 97, 115, 32, 110, 111, 116, 32, 115, 101, 116, 32, 116, 111, 32, 45, 49, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 111, 118, 101, 114, 102, 108, 111, 119, 32, 119, 97, 115, 32, 110, 111, 116, 32, 115, 101, 116, 32, 116, 111, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 45, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 111, 118, 101, 114, 102, 108, 111, 119, 32, 119, 97, 115, 32, 110, 111, 116, 32, 115, 101, 116, 32, 116, 111, 32, 45, 49, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 70, 70, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 101, 120, 112, 101, 99, 116, 101, 100, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 48, 120, 70, 70, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 111, 118, 101, 114, 102, 108, 111, 119, 32, 119, 97, 115, 32, 110, 111, 116, 32, 99, 108, 101, 97, 114, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 45, 70, 70, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 111, 118, 101, 114, 102, 108, 111, 119, 32, 119, 97, 115, 32, 115, 101, 116, 32, 105, 110, 99, 111, 114, 114, 101, 99, 116, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 101, 120, 112, 101, 99, 116, 101, 100, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 76, 79, 78, 71, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 101, 120, 112, 101, 99, 116, 101, 100, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 76, 79, 78, 71, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 116, 101, 115, 116, 95, 108, 111, 110, 103, 95, 108, 111, 110, 103, 95, 97, 110, 100, 95, 111, 118, 101, 114, 102, 108, 111, 119, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 101, 120, 112, 101, 99, 116, 101, 100, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 80, 89, 95, 76, 76, 79, 78, 71, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 101, 120, 112, 101, 99, 116, 101, 100, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 80, 89, 95, 76, 76, 79, 78, 71, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 76, 58, 116, 101, 115, 116, 95, 76, 95, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 116, 101, 115, 116, 95, 76, 95, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 76, 32, 99, 111, 100, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 119, 114, 111, 110, 103, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 108, 111, 110, 103, 32, 52, 50, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 76, 32, 99, 111, 100, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 119, 114, 111, 110, 103, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 105, 110, 116, 32, 52, 50, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 105, 40, 105, 105, 41, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    _C_59_9728 = allocate([ -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    _fmt_9726 = allocate(1, "i8*", ALLOC_NORMAL);
    __str58 = allocate([ 40, 105, 105, 41, 105, 124, 40, 105, 40, 105, 105, 41, 41, 40, 105, 105, 105, 41, 105, 0 ], "i8", ALLOC_NORMAL);
    _keywords_9725 = allocate(24, "i8*", ALLOC_NORMAL);
    __str59 = allocate([ 97, 114, 103, 49, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 97, 114, 103, 50, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 97, 114, 103, 51, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 97, 114, 103, 52, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 97, 114, 103, 53, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 98, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 66, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 104, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 72, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 73, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 107, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 105, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 108, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 110, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 76, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 75, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 116, 101, 115, 116, 95, 107, 95, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 80, 121, 73, 110, 116, 95, 65, 115, 85, 110, 115, 105, 103, 110, 101, 100, 76, 111, 110, 103, 77, 97, 115, 107, 40, 41, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 119, 114, 111, 110, 103, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 108, 111, 110, 103, 32, 48, 120, 70, 70, 70, 46, 46, 46, 70, 70, 70, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 107, 58, 116, 101, 115, 116, 95, 107, 95, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str79 = allocate([ 107, 32, 99, 111, 100, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 119, 114, 111, 110, 103, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 108, 111, 110, 103, 32, 48, 120, 70, 70, 70, 46, 46, 46, 70, 70, 70, 0 ], "i8", ALLOC_NORMAL);
    __str80 = allocate([ 45, 70, 70, 70, 70, 70, 70, 70, 70, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 52, 50, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 107, 32, 99, 111, 100, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 119, 114, 111, 110, 103, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 108, 111, 110, 103, 32, 45, 48, 120, 70, 70, 70, 46, 46, 48, 48, 48, 48, 52, 50, 0 ], "i8", ALLOC_NORMAL);
    _x = allocate(1, "i32", ALLOC_NORMAL);
    __str82 = allocate([ 116, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str83 = allocate([ 97, 115, 99, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str84 = allocate([ 117, 58, 116, 101, 115, 116, 95, 117, 95, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 116, 101, 115, 116, 95, 117, 95, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str86 = allocate([ 117, 32, 99, 111, 100, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 119, 114, 111, 110, 103, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 117, 39, 116, 101, 115, 116, 39, 0 ], "i8", ALLOC_NORMAL);
    __str87 = allocate([ 117, 35, 58, 116, 101, 115, 116, 95, 117, 95, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str88 = allocate([ 117, 35, 32, 99, 111, 100, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 119, 114, 111, 110, 103, 32, 118, 97, 108, 117, 101, 115, 32, 102, 111, 114, 32, 117, 39, 116, 101, 115, 116, 39, 0 ], "i8", ALLOC_NORMAL);
    __str89 = allocate([ 244, 138, 175, 141, 0 ], "i8", ALLOC_NORMAL);
    __str90 = allocate([ 116, 101, 115, 116, 95, 119, 105, 100, 101, 99, 104, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str91 = allocate([ 119, 105, 100, 101, 32, 115, 116, 114, 105, 110, 103, 32, 97, 110, 100, 32, 117, 116, 102, 56, 32, 115, 116, 114, 105, 110, 103, 32, 104, 97, 118, 101, 32, 100, 105, 102, 102, 101, 114, 101, 110, 116, 32, 108, 101, 110, 103, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str92 = allocate([ 119, 105, 100, 101, 32, 115, 116, 114, 105, 110, 103, 32, 97, 110, 100, 32, 117, 116, 102, 56, 32, 115, 116, 114, 105, 110, 103, 32, 97, 114, 101, 32, 100, 105, 102, 102, 101, 114, 101, 110, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str93 = allocate([ 124, 58, 116, 101, 115, 116, 95, 101, 109, 112, 116, 121, 95, 97, 114, 103, 112, 97, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_10077 = allocate(4, "i8*", ALLOC_NORMAL);
    __str94 = allocate([ 115, 124, 115, 58, 116, 101, 115, 116, 95, 105, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 101, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str95 = allocate([ 115, 124, 115, 58, 116, 101, 115, 116, 95, 105, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 100, 101, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _C_92_10153 = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, -2, 0, 0, 0, 2, 0, 0, 0, -1, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, -3, 0, 0, 0, 2, 0, 0, 0, -1, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, -4, 0, 0, 0, 3, 0, 0, 0, -1, 0, 0, 0, 32767, 0, 0, 0, 15, 0, 0, 0, 1, 0, 0, 0, -32767, 0, 0, 0, 15, 0, 0, 0, -1, 0, 0, 0, 65535, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, -65535, 0, 0, 0, 16, 0, 0, 0, -1, 0, 0, 0, 268435455, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, -268435455, 0, 0, 0, 28, 0, 0, 0, -1, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str96 = allocate([ 116, 101, 115, 116, 95, 108, 111, 110, 103, 95, 110, 117, 109, 98, 105, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str97 = allocate([ 119, 114, 111, 110, 103, 32, 114, 101, 115, 117, 108, 116, 32, 102, 111, 114, 32, 95, 80, 121, 76, 111, 110, 103, 95, 78, 117, 109, 66, 105, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str98 = allocate([ 119, 114, 111, 110, 103, 32, 114, 101, 115, 117, 108, 116, 32, 102, 111, 114, 32, 95, 80, 121, 76, 111, 110, 103, 95, 83, 105, 103, 110, 0 ], "i8", ALLOC_NORMAL);
    __str99 = allocate([ 79, 105, 58, 114, 97, 105, 115, 101, 95, 101, 120, 99, 101, 112, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str100 = allocate([ 97, 110, 32, 101, 120, 99, 101, 112, 116, 105, 111, 110, 32, 99, 108, 97, 115, 115, 32, 105, 115, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    _test_run_counter = allocate(1, "i32", ALLOC_NORMAL);
    __str101 = allocate([ 80, 121, 68, 97, 116, 101, 84, 105, 109, 101, 95, 67, 65, 80, 73, 32, 115, 111, 109, 101, 104, 111, 119, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str102 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 46, 100, 97, 116, 101, 116, 105, 109, 101, 95, 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str103 = allocate([ 37, 100, 0 ], "i8", ALLOC_NORMAL);
    __str104 = allocate([ 49, 0 ], "i8", ALLOC_NORMAL);
    __str105 = allocate([ 37, 100, 32, 102, 97, 105, 108, 101, 100, 32, 97, 116, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str106 = allocate([ 37, 108, 100, 0 ], "i8", ALLOC_NORMAL);
    __str107 = allocate([ 37, 108, 100, 32, 102, 97, 105, 108, 101, 100, 32, 97, 116, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str108 = allocate([ 37, 122, 100, 0 ], "i8", ALLOC_NORMAL);
    __str109 = allocate([ 37, 122, 100, 32, 102, 97, 105, 108, 101, 100, 32, 97, 116, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str110 = allocate([ 37, 117, 0 ], "i8", ALLOC_NORMAL);
    __str111 = allocate([ 37, 117, 32, 102, 97, 105, 108, 101, 100, 32, 97, 116, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str112 = allocate([ 37, 108, 117, 0 ], "i8", ALLOC_NORMAL);
    __str113 = allocate([ 37, 108, 117, 32, 102, 97, 105, 108, 101, 100, 32, 97, 116, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str114 = allocate([ 37, 122, 117, 0 ], "i8", ALLOC_NORMAL);
    __str115 = allocate([ 37, 122, 117, 32, 102, 97, 105, 108, 101, 100, 32, 97, 116, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str116 = allocate([ 37, 108, 108, 117, 0 ], "i8", ALLOC_NORMAL);
    __str117 = allocate([ 37, 108, 108, 117, 32, 102, 97, 105, 108, 101, 100, 32, 97, 116, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str118 = allocate([ 37, 108, 108, 100, 0 ], "i8", ALLOC_NORMAL);
    __str119 = allocate([ 37, 108, 108, 100, 32, 102, 97, 105, 108, 101, 100, 32, 97, 116, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str120 = allocate([ 116, 101, 115, 116, 95, 115, 116, 114, 105, 110, 103, 95, 102, 114, 111, 109, 95, 102, 111, 114, 109, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    _capsule_name = allocate(1, "i8*", ALLOC_NORMAL);
    __str121 = allocate([ 99, 97, 112, 115, 117, 108, 101, 32, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _capsule_pointer = allocate(1, "i8*", ALLOC_NORMAL);
    __str122 = allocate([ 99, 97, 112, 115, 117, 108, 101, 32, 112, 111, 105, 110, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _capsule_context = allocate(1, "i8*", ALLOC_NORMAL);
    __str123 = allocate([ 99, 97, 112, 115, 117, 108, 101, 32, 99, 111, 110, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    _capsule_error = allocate(1, "i8*", ALLOC_NORMAL);
    _capsule_destructor_call_count = allocate(1, "i32", ALLOC_NORMAL);
    __str124 = allocate([ 99, 111, 110, 116, 101, 120, 116, 32, 100, 105, 100, 32, 110, 111, 116, 32, 109, 97, 116, 99, 104, 32, 105, 110, 32, 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 33, 0 ], "i8", ALLOC_NORMAL);
    __str125 = allocate([ 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 32, 100, 105, 100, 32, 110, 111, 116, 32, 109, 97, 116, 99, 104, 32, 105, 110, 32, 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 33, 32, 32, 40, 119, 111, 97, 104, 33, 41, 0 ], "i8", ALLOC_NORMAL);
    __str126 = allocate([ 110, 97, 109, 101, 32, 100, 105, 100, 32, 110, 111, 116, 32, 109, 97, 116, 99, 104, 32, 105, 110, 32, 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 33, 0 ], "i8", ALLOC_NORMAL);
    __str127 = allocate([ 112, 111, 105, 110, 116, 101, 114, 32, 100, 105, 100, 32, 110, 111, 116, 32, 109, 97, 116, 99, 104, 32, 105, 110, 32, 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 33, 0 ], "i8", ALLOC_NORMAL);
    __str128 = allocate([ 95, 115, 111, 99, 107, 101, 116, 46, 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str129 = allocate([ 95, 115, 111, 99, 107, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str130 = allocate([ 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str131 = allocate([ 95, 99, 117, 114, 115, 101, 115, 46, 95, 67, 95, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str132 = allocate([ 95, 99, 117, 114, 115, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str133 = allocate([ 95, 67, 95, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str134 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str135 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 95, 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str136 = allocate([ 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 32, 110, 111, 116, 32, 99, 97, 108, 108, 101, 100, 33, 0 ], "i8", ALLOC_NORMAL);
    __str137 = allocate([ 105, 103, 110, 111, 114, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str138 = allocate([ 116, 104, 101, 32, 119, 114, 111, 110, 103, 32, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str139 = allocate([ 80, 121, 67, 97, 112, 115, 117, 108, 101, 95, 71, 101, 116, 80, 111, 105, 110, 116, 101, 114, 32, 115, 104, 111, 117, 108, 100, 32, 104, 97, 118, 101, 32, 102, 97, 105, 108, 101, 100, 32, 98, 117, 116, 32, 100, 105, 100, 32, 110, 111, 116, 33, 0 ], "i8", ALLOC_NORMAL);
    __str140 = allocate([ 80, 121, 67, 97, 112, 115, 117, 108, 101, 95, 71, 101, 116, 80, 111, 105, 110, 116, 101, 114, 32, 115, 104, 111, 117, 108, 100, 32, 110, 111, 116, 32, 104, 97, 118, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 116, 104, 101, 32, 105, 110, 116, 101, 114, 110, 97, 108, 32, 112, 111, 105, 110, 116, 101, 114, 33, 0 ], "i8", ALLOC_NORMAL);
    __str141 = allocate([ 80, 121, 67, 97, 112, 115, 117, 108, 101, 95, 71, 101, 116, 80, 111, 105, 110, 116, 101, 114, 32, 115, 104, 111, 117, 108, 100, 32, 104, 97, 118, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 78, 85, 76, 76, 32, 112, 111, 105, 110, 116, 101, 114, 32, 98, 117, 116, 32, 100, 105, 100, 32, 110, 111, 116, 33, 0 ], "i8", ALLOC_NORMAL);
    __str142 = allocate([ 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 32, 99, 97, 108, 108, 101, 100, 32, 119, 104, 101, 110, 32, 105, 116, 32, 115, 104, 111, 117, 108, 100, 32, 110, 111, 116, 32, 104, 97, 118, 101, 32, 98, 101, 101, 110, 33, 0 ], "i8", ALLOC_NORMAL);
    _buffer_10470 = allocate(256, "i8", ALLOC_NORMAL);
    __str143 = allocate([ 37, 115, 32, 109, 111, 100, 117, 108, 101, 58, 32, 34, 37, 115, 34, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 58, 32, 34, 37, 115, 34, 0 ], "i8", ALLOC_NORMAL);
    __str144 = allocate([ 80, 121, 67, 97, 112, 115, 117, 108, 101, 95, 71, 101, 116, 80, 111, 105, 110, 116, 101, 114, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 78, 85, 76, 76, 32, 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 108, 121, 33, 0 ], "i8", ALLOC_NORMAL);
    __str145 = allocate([ 119, 101, 101, 98, 108, 101, 115, 32, 119, 111, 98, 98, 108, 101, 32, 98, 117, 116, 32, 116, 104, 101, 121, 32, 100, 111, 110, 39, 116, 32, 102, 97, 108, 108, 32, 100, 111, 119, 110, 0 ], "i8", ALLOC_NORMAL);
    __str146 = allocate([ 80, 121, 67, 97, 112, 115, 117, 108, 101, 95, 71, 101, 116, 80, 111, 105, 110, 116, 101, 114, 32, 115, 104, 111, 117, 108, 100, 32, 110, 111, 116, 32, 104, 97, 118, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 105, 116, 115, 32, 105, 110, 116, 101, 114, 110, 97, 108, 32, 112, 111, 105, 110, 116, 101, 114, 33, 0 ], "i8", ALLOC_NORMAL);
    __str147 = allocate([ 116, 101, 115, 116, 95, 99, 97, 112, 115, 117, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str148 = allocate([ 79, 79, 58, 116, 114, 97, 99, 101, 98, 97, 99, 107, 95, 112, 114, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str149 = allocate([ 115, 115, 105, 58, 99, 111, 100, 101, 95, 110, 101, 119, 101, 109, 112, 116, 121, 0 ], "i8", ALLOC_NORMAL);
    __str150 = allocate([ 115, 124, 115, 79, 79, 58, 109, 97, 107, 101, 95, 101, 120, 99, 101, 112, 116, 105, 111, 110, 95, 119, 105, 116, 104, 95, 100, 111, 99, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_10671 = allocate(20, "i8*", ALLOC_NORMAL);
    __str151 = allocate([ 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str152 = allocate([ 100, 111, 99, 0 ], "i8", ALLOC_NORMAL);
    __str153 = allocate([ 98, 97, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str154 = allocate([ 100, 105, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str155 = allocate([ 114, 97, 105, 115, 101, 95, 101, 120, 99, 101, 112, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str156 = allocate([ 116, 101, 115, 116, 95, 99, 111, 110, 102, 105, 103, 0 ], "i8", ALLOC_NORMAL);
    __str157 = allocate([ 116, 101, 115, 116, 95, 100, 97, 116, 101, 116, 105, 109, 101, 95, 99, 97, 112, 105, 0 ], "i8", ALLOC_NORMAL);
    __str158 = allocate([ 116, 101, 115, 116, 95, 108, 105, 115, 116, 95, 97, 112, 105, 0 ], "i8", ALLOC_NORMAL);
    __str159 = allocate([ 116, 101, 115, 116, 95, 100, 105, 99, 116, 95, 105, 116, 101, 114, 97, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str160 = allocate([ 116, 101, 115, 116, 95, 108, 97, 122, 121, 95, 104, 97, 115, 104, 95, 105, 110, 104, 101, 114, 105, 116, 97, 110, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str161 = allocate([ 116, 101, 115, 116, 95, 98, 114, 111, 107, 101, 110, 95, 109, 101, 109, 111, 114, 121, 118, 105, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    __str162 = allocate([ 116, 101, 115, 116, 95, 101, 109, 112, 116, 121, 95, 97, 114, 103, 112, 97, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str163 = allocate([ 116, 101, 115, 116, 95, 110, 117, 108, 108, 95, 115, 116, 114, 105, 110, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    __str164 = allocate([ 116, 101, 115, 116, 95, 119, 105, 116, 104, 95, 100, 111, 99, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str165 = allocate([ 84, 104, 105, 115, 32, 105, 115, 32, 97, 32, 112, 114, 101, 116, 116, 121, 32, 110, 111, 114, 109, 97, 108, 32, 100, 111, 99, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str166 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str167 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 107, 101, 121, 119, 111, 114, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str168 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 98, 0 ], "i8", ALLOC_NORMAL);
    __str169 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 66, 0 ], "i8", ALLOC_NORMAL);
    __str170 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 104, 0 ], "i8", ALLOC_NORMAL);
    __str171 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 72, 0 ], "i8", ALLOC_NORMAL);
    __str172 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 73, 0 ], "i8", ALLOC_NORMAL);
    __str173 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 107, 0 ], "i8", ALLOC_NORMAL);
    __str174 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 105, 0 ], "i8", ALLOC_NORMAL);
    __str175 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 108, 0 ], "i8", ALLOC_NORMAL);
    __str176 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 110, 0 ], "i8", ALLOC_NORMAL);
    __str177 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 76, 0 ], "i8", ALLOC_NORMAL);
    __str178 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 75, 0 ], "i8", ALLOC_NORMAL);
    __str179 = allocate([ 99, 111, 100, 101, 99, 95, 105, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 101, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str180 = allocate([ 99, 111, 100, 101, 99, 95, 105, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 100, 101, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str181 = allocate([ 116, 114, 97, 99, 101, 98, 97, 99, 107, 95, 112, 114, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str182 = allocate([ 99, 111, 100, 101, 95, 110, 101, 119, 101, 109, 112, 116, 121, 0 ], "i8", ALLOC_NORMAL);
    __str183 = allocate([ 109, 97, 107, 101, 95, 101, 120, 99, 101, 112, 116, 105, 111, 110, 95, 119, 105, 116, 104, 95, 100, 111, 99, 0 ], "i8", ALLOC_NORMAL);
    _TestMethods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str184 = allocate([ 84, 95, 66, 79, 79, 76, 0 ], "i8", ALLOC_NORMAL);
    __str185 = allocate([ 84, 95, 66, 89, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str186 = allocate([ 84, 95, 85, 66, 89, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str187 = allocate([ 84, 95, 83, 72, 79, 82, 84, 0 ], "i8", ALLOC_NORMAL);
    __str188 = allocate([ 84, 95, 85, 83, 72, 79, 82, 84, 0 ], "i8", ALLOC_NORMAL);
    __str189 = allocate([ 84, 95, 73, 78, 84, 0 ], "i8", ALLOC_NORMAL);
    __str190 = allocate([ 84, 95, 85, 73, 78, 84, 0 ], "i8", ALLOC_NORMAL);
    __str191 = allocate([ 84, 95, 76, 79, 78, 71, 0 ], "i8", ALLOC_NORMAL);
    __str192 = allocate([ 84, 95, 85, 76, 79, 78, 71, 0 ], "i8", ALLOC_NORMAL);
    __str193 = allocate([ 84, 95, 70, 76, 79, 65, 84, 0 ], "i8", ALLOC_NORMAL);
    __str194 = allocate([ 84, 95, 68, 79, 85, 66, 76, 69, 0 ], "i8", ALLOC_NORMAL);
    __str195 = allocate([ 84, 95, 83, 84, 82, 73, 78, 71, 95, 73, 78, 80, 76, 65, 67, 69, 0 ], "i8", ALLOC_NORMAL);
    __str196 = allocate([ 84, 95, 76, 79, 78, 71, 76, 79, 78, 71, 0 ], "i8", ALLOC_NORMAL);
    __str197 = allocate([ 84, 95, 85, 76, 79, 78, 71, 76, 79, 78, 71, 0 ], "i8", ALLOC_NORMAL);
    _test_members = allocate([ 0, 0, 0, 0, 14, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _fmt_10711 = allocate(1, "i8*", ALLOC_NORMAL);
    __str198 = allocate([ 124, 98, 98, 66, 104, 72, 105, 73, 108, 107, 102, 100, 115, 35, 76, 75, 0 ], "i8", ALLOC_NORMAL);
    _keywords_10710 = allocate(60, "i8*", ALLOC_NORMAL);
    __str199 = allocate([ 115, 116, 114, 105, 110, 103, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str200 = allocate(1, "i8", ALLOC_NORMAL);
    __str201 = allocate([ 116, 101, 115, 116, 95, 115, 116, 114, 117, 99, 116, 109, 101, 109, 98, 101, 114, 115, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str202 = allocate([ 84, 121, 112, 101, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 97, 108, 108, 32, 115, 116, 114, 117, 99, 116, 109, 101, 109, 98, 101, 114, 32, 116, 121, 112, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _test_structmembersType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str203 = allocate([ 95, 116, 101, 115, 116, 99, 97, 112, 105, 0 ], "i8", ALLOC_NORMAL);
    __str204 = allocate([ 95, 116, 101, 115, 116, 95, 115, 116, 114, 117, 99, 116, 109, 101, 109, 98, 101, 114, 115, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str205 = allocate([ 67, 72, 65, 82, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str206 = allocate([ 67, 72, 65, 82, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str207 = allocate([ 85, 67, 72, 65, 82, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str208 = allocate([ 83, 72, 82, 84, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str209 = allocate([ 83, 72, 82, 84, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str210 = allocate([ 85, 83, 72, 82, 84, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str211 = allocate([ 73, 78, 84, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str212 = allocate([ 73, 78, 84, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str213 = allocate([ 85, 73, 78, 84, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str214 = allocate([ 76, 79, 78, 71, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str215 = allocate([ 76, 79, 78, 71, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str216 = allocate([ 85, 76, 79, 78, 71, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str217 = allocate([ 70, 76, 84, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str218 = allocate([ 70, 76, 84, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str219 = allocate([ 68, 66, 76, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str220 = allocate([ 68, 66, 76, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str221 = allocate([ 76, 76, 79, 78, 71, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str222 = allocate([ 76, 76, 79, 78, 71, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str223 = allocate([ 85, 76, 76, 79, 78, 71, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str224 = allocate([ 80, 89, 95, 83, 83, 73, 90, 69, 95, 84, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str225 = allocate([ 80, 89, 95, 83, 83, 73, 90, 69, 95, 84, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str226 = allocate([ 83, 73, 90, 69, 79, 70, 95, 80, 89, 71, 67, 95, 72, 69, 65, 68, 0 ], "i8", ALLOC_NORMAL);
    __str227 = allocate([ 95, 116, 101, 115, 116, 99, 97, 112, 105, 46, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str228 = allocate([ 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    HEAP[__HashInheritanceTester_Type + 12] = __str5;
    HEAP[__HashInheritanceTester_Type + 24] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[__HashInheritanceTester_Type + 72] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[__HashInheritanceTester_Type + 156] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_memoryviewtester_as_buffer + 16] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[__MemoryViewTester_Type + 12] = __str12;
    HEAP[__MemoryViewTester_Type + 24] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[__MemoryViewTester_Type + 72] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[__MemoryViewTester_Type + 80] = _memoryviewtester_as_buffer;
    HEAP[__MemoryViewTester_Type + 156] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_fmt_9726] = __str58;
    HEAP[_keywords_9725] = __str59;
    HEAP[_keywords_9725 + 4] = __str60;
    HEAP[_keywords_9725 + 8] = __str61;
    HEAP[_keywords_9725 + 12] = __str62;
    HEAP[_keywords_9725 + 16] = __str63;
    HEAP[_capsule_name] = __str121;
    HEAP[_capsule_pointer] = __str122;
    HEAP[_capsule_context] = __str123;
    HEAP[_kwlist_10671] = __str151;
    HEAP[_kwlist_10671 + 4] = __str152;
    HEAP[_kwlist_10671 + 8] = __str153;
    HEAP[_kwlist_10671 + 12] = __str154;
    HEAP[_TestMethods] = __str155;
    HEAP[_TestMethods + 4] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_TestMethods + 16] = __str156;
    HEAP[_TestMethods + 20] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_TestMethods + 32] = __str157;
    HEAP[_TestMethods + 36] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_TestMethods + 48] = __str158;
    HEAP[_TestMethods + 52] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_TestMethods + 64] = __str159;
    HEAP[_TestMethods + 68] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_TestMethods + 80] = __str160;
    HEAP[_TestMethods + 84] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_TestMethods + 96] = __str161;
    HEAP[_TestMethods + 100] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_TestMethods + 112] = __str15;
    HEAP[_TestMethods + 116] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_TestMethods + 128] = __str37;
    HEAP[_TestMethods + 132] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_TestMethods + 144] = __str96;
    HEAP[_TestMethods + 148] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_TestMethods + 160] = __str76;
    HEAP[_TestMethods + 164] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_TestMethods + 176] = __str162;
    HEAP[_TestMethods + 180] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_TestMethods + 192] = __str163;
    HEAP[_TestMethods + 196] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_TestMethods + 208] = __str120;
    HEAP[_TestMethods + 212] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_TestMethods + 224] = __str164;
    HEAP[_TestMethods + 228] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_TestMethods + 236] = __str165;
    HEAP[_TestMethods + 240] = __str166;
    HEAP[_TestMethods + 244] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_TestMethods + 256] = __str167;
    HEAP[_TestMethods + 260] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_TestMethods + 272] = __str168;
    HEAP[_TestMethods + 276] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_TestMethods + 288] = __str169;
    HEAP[_TestMethods + 292] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_TestMethods + 304] = __str170;
    HEAP[_TestMethods + 308] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_TestMethods + 320] = __str171;
    HEAP[_TestMethods + 324] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_TestMethods + 336] = __str172;
    HEAP[_TestMethods + 340] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_TestMethods + 352] = __str173;
    HEAP[_TestMethods + 356] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_TestMethods + 368] = __str174;
    HEAP[_TestMethods + 372] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_TestMethods + 384] = __str175;
    HEAP[_TestMethods + 388] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_TestMethods + 400] = __str176;
    HEAP[_TestMethods + 404] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_TestMethods + 416] = __str177;
    HEAP[_TestMethods + 420] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_TestMethods + 432] = __str178;
    HEAP[_TestMethods + 436] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_TestMethods + 448] = __str35;
    HEAP[_TestMethods + 452] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_TestMethods + 464] = __str49;
    HEAP[_TestMethods + 468] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_TestMethods + 480] = __str53;
    HEAP[_TestMethods + 484] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_TestMethods + 496] = __str179;
    HEAP[_TestMethods + 500] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_TestMethods + 512] = __str180;
    HEAP[_TestMethods + 516] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_TestMethods + 528] = __str85;
    HEAP[_TestMethods + 532] = FUNCTION_TABLE_OFFSET + 82;
    HEAP[_TestMethods + 544] = __str90;
    HEAP[_TestMethods + 548] = FUNCTION_TABLE_OFFSET + 84;
    HEAP[_TestMethods + 560] = __str147;
    HEAP[_TestMethods + 564] = FUNCTION_TABLE_OFFSET + 86;
    HEAP[_TestMethods + 576] = __str181;
    HEAP[_TestMethods + 580] = FUNCTION_TABLE_OFFSET + 88;
    HEAP[_TestMethods + 592] = __str182;
    HEAP[_TestMethods + 596] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_TestMethods + 608] = __str183;
    HEAP[_TestMethods + 612] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_test_members] = __str184;
    HEAP[_test_members + 20] = __str185;
    HEAP[_test_members + 40] = __str186;
    HEAP[_test_members + 60] = __str187;
    HEAP[_test_members + 80] = __str188;
    HEAP[_test_members + 100] = __str189;
    HEAP[_test_members + 120] = __str190;
    HEAP[_test_members + 140] = __str191;
    HEAP[_test_members + 160] = __str192;
    HEAP[_test_members + 180] = __str193;
    HEAP[_test_members + 200] = __str194;
    HEAP[_test_members + 220] = __str195;
    HEAP[_test_members + 240] = __str196;
    HEAP[_test_members + 260] = __str197;
    HEAP[_fmt_10711] = __str198;
    HEAP[_keywords_10710] = __str184;
    HEAP[_keywords_10710 + 4] = __str185;
    HEAP[_keywords_10710 + 8] = __str186;
    HEAP[_keywords_10710 + 12] = __str187;
    HEAP[_keywords_10710 + 16] = __str188;
    HEAP[_keywords_10710 + 20] = __str189;
    HEAP[_keywords_10710 + 24] = __str190;
    HEAP[_keywords_10710 + 28] = __str191;
    HEAP[_keywords_10710 + 32] = __str192;
    HEAP[_keywords_10710 + 36] = __str193;
    HEAP[_keywords_10710 + 40] = __str194;
    HEAP[_keywords_10710 + 44] = __str195;
    HEAP[_keywords_10710 + 48] = __str196;
    HEAP[_keywords_10710 + 52] = __str197;
    HEAP[_test_structmembersType + 12] = __str201;
    HEAP[_test_structmembersType + 24] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_test_structmembersType + 72] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_test_structmembersType + 76] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_test_structmembersType + 88] = __str202;
    HEAP[_test_structmembersType + 120] = _test_members;
    HEAP[_test_structmembersType + 156] = FUNCTION_TABLE_OFFSET + 98;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
