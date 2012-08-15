"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 80;
  var $1___SIZE = 20;
  var $2___SIZE = 48;
  var $3___SIZE = 16;
  var $4___SIZE = 156;
  var $5___SIZE = 196;
  var $6___SIZE = 80;
  var $7___SIZE = 20;
  var $8___SIZE = 240;
  var $9___SIZE = 156;
  var $10___SIZE = 96;
  var $11___SIZE = 120;
  var $12___SIZE = 144;
  var $13___SIZE = 320;
  var $14___SIZE = 80;
  var $15___SIZE = 8;
  var $16___SIZE = 192;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyDateTime_CAPI___SIZE = 44;
  var $struct_PyDateTime_Date___SIZE = 20;
  var $struct_PyDateTime_Date___FLATTENER = [ 0, 4, 8, 12, 13 ];
  var $struct_PyDateTime_DateTime___SIZE = 28;
  var $struct_PyDateTime_DateTime___FLATTENER = [ 0, 4, 8, 12, 13, 24 ];
  var $struct_PyDateTime_Delta___SIZE = 24;
  var $struct_PyDateTime_TZInfo___SIZE = 8;
  var $struct_PyDateTime_Time___SIZE = 24;
  var $struct_PyDateTime_Time___FLATTENER = [ 0, 4, 8, 12, 13, 20 ];
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyStructSequence___SIZE = 16;
  var $struct_PyStructSequence_Desc___SIZE = 16;
  var $struct_PyStructSequence_Field___SIZE = 8;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_PyUnicodeObject___SIZE = 24;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__PyDateTime_BaseTZInfo___SIZE = 16;
  var $struct__typeobject___SIZE = 196;
  var $struct_fd_set___SIZE = 128;
  var $struct_timeb___SIZE = 12;
  var $struct_timeb___FLATTENER = [ 0, 4, 6, 8 ];
  var $struct_timeval___SIZE = 8;
  var $struct_timezone___SIZE = 8;
  var $struct_tm___SIZE = 44;
  var __str;
  var __str1;
  var ___PRETTY_FUNCTION___8388;
  var __str2;
  var __days_in_month;
  var __days_before_month;
  var __str3;
  var ___PRETTY_FUNCTION___8436;
  var __str4;
  var ___PRETTY_FUNCTION___8453;
  var __str5;
  var ___PRETTY_FUNCTION___8470;
  var __str6;
  var __str7;
  var ___PRETTY_FUNCTION___8498;
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
  var ___PRETTY_FUNCTION___8642;
  var __str21;
  var __str22;
  var __str23;
  var __str24;
  var ___PRETTY_FUNCTION___8673;
  var __str25;
  var __str26;
  var ___PRETTY_FUNCTION___8700;
  var __str27;
  var __str28;
  var __str29;
  var __str30;
  var ___PRETTY_FUNCTION___8924;
  var __str31;
  var __str32;
  var __str33;
  var ___PRETTY_FUNCTION___8971;
  var __str34;
  var __str35;
  var __str36;
  var ___PRETTY_FUNCTION___9023;
  var __str37;
  var __str38;
  var __str39;
  var __str40;
  var __str41;
  var __str42;
  var __str43;
  var ___PRETTY_FUNCTION___9098;
  var __str44;
  var ___PRETTY_FUNCTION___9139;
  var __str45;
  var __str46;
  var ___PRETTY_FUNCTION___9187;
  var __str47;
  var ___PRETTY_FUNCTION___9254;
  var __str48;
  var __str49;
  var __str50;
  var __str51;
  var _MonthNames_9303;
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
  var _DayNames_9302;
  var __str64;
  var __str65;
  var __str66;
  var __str67;
  var __str68;
  var __str69;
  var __str70;
  var __str71;
  var __str72;
  var ___PRETTY_FUNCTION___9346;
  var __str73;
  var __str74;
  var __str75;
  var ___PRETTY_FUNCTION___9433;
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
  var ___PRETTY_FUNCTION___9670;
  var __str97;
  var ___PRETTY_FUNCTION___9694;
  var __str98;
  var __str99;
  var __str100;
  var __str101;
  var __str102;
  var ___PRETTY_FUNCTION___9783;
  var __str103;
  var _us_per_us;
  var _us_per_ms;
  var _us_per_second;
  var _us_per_minute;
  var _us_per_hour;
  var _us_per_day;
  var _us_per_week;
  var _seconds_per_day;
  var __str104;
  var ___PRETTY_FUNCTION___9906;
  var __str105;
  var __str106;
  var __str107;
  var __str108;
  var ___PRETTY_FUNCTION___10117;
  var __str109;
  var __str110;
  var ___PRETTY_FUNCTION___10304;
  var __str111;
  var __str112;
  var __str113;
  var _keywords_10439;
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
  var _delta_members;
  var __str133;
  var __str134;
  var __str135;
  var __str136;
  var _delta_methods;
  var _delta_doc;
  var _delta_as_number;
  var __str137;
  var _PyDateTime_DeltaType;
  var __str138;
  var __str139;
  var __str140;
  var _date_getset;
  var _date_kws;
  var __str141;
  var __str142;
  var __str143;
  var __str144;
  var __str145;
  var __str146;
  var __str147;
  var _keywords_11112;
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
  var __str174;
  var __str175;
  var _date_methods;
  var _date_doc;
  var _date_as_number;
  var __str176;
  var _PyDateTime_DateType;
  var __str177;
  var __str178;
  var __str179;
  var __str180;
  var __str181;
  var __str182;
  var __str183;
  var __str184;
  var __str185;
  var __str186;
  var __str187;
  var __str188;
  var __str189;
  var __str190;
  var __str191;
  var _tzinfo_methods;
  var _tzinfo_doc;
  var __str192;
  var _PyDateTime_TZInfoType;
  var __str193;
  var __str194;
  var __str195;
  var __str196;
  var _time_getset;
  var _time_kws;
  var __str197;
  var __str198;
  var __str199;
  var __str200;
  var _keywords_11990;
  var __str201;
  var __str202;
  var ___PRETTY_FUNCTION___11991;
  var __str203;
  var ___PRETTY_FUNCTION___12032;
  var __str204;
  var __str205;
  var __str206;
  var __str207;
  var ___PRETTY_FUNCTION___12150;
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
  var _time_methods;
  var _time_doc;
  var _time_as_number;
  var __str218;
  var _PyDateTime_TimeType;
  var _datetime_getset;
  var _datetime_kws;
  var __str219;
  var __str220;
  var __str221;
  var __str222;
  var _keywords_12602;
  var __str223;
  var __str224;
  var _keywords_12649;
  var __str225;
  var __str226;
  var __str227;
  var _module_12699;
  var __str228;
  var __str229;
  var __str230;
  var __str231;
  var _keywords_12819;
  var __str232;
  var __str233;
  var ___PRETTY_FUNCTION___12960;
  var ___PRETTY_FUNCTION___13068;
  var __str234;
  var __str235;
  var __str236;
  var __str237;
  var __str238;
  var __str239;
  var __str240;
  var _keywords_13311;
  var __str241;
  var __str242;
  var ___PRETTY_FUNCTION___13315;
  var ___PRETTY_FUNCTION___13383;
  var __str243;
  var ___PRETTY_FUNCTION___13479;
  var __str244;
  var __str245;
  var _keywords_13646;
  var __str246;
  var __str247;
  var __str248;
  var __str249;
  var __str250;
  var __str251;
  var __str252;
  var __str253;
  var __str254;
  var __str255;
  var __str256;
  var __str257;
  var __str258;
  var __str259;
  var __str260;
  var __str261;
  var __str262;
  var __str263;
  var __str264;
  var __str265;
  var __str266;
  var __str267;
  var _datetime_methods;
  var _datetime_doc;
  var _datetime_as_number;
  var __str268;
  var _PyDateTime_DateTimeType;
  var _module_methods;
  var _CAPI;
  var __str269;
  var __str270;
  var __str271;
  var __str272;
  var __str273;
  var __str274;
  var __str275;
  var __str276;
  var __str277;
  var __str278;
  var __str279;
  var ___PRETTY_FUNCTION___13976;
  var __str280;
  var __str281;
  var __str282;
  var _time_doc283;
  var _clock_doc;
  var __str1284;
  var _sleep_doc;
  var __str2285;
  var __str3286;
  var __str4287;
  var __str5288;
  var __str6289;
  var __str7290;
  var __str8291;
  var __str9292;
  var __str10293;
  var __str11294;
  var __str12295;
  var __str13296;
  var __str14297;
  var __str15298;
  var __str16299;
  var __str17300;
  var __str18301;
  var __str19302;
  var _struct_time_type_fields;
  var _struct_time_type_desc;
  var __str20303;
  var __str21304;
  var _StructTimeType;
  var __str22305;
  var _gmtime_doc;
  var __str23306;
  var _localtime_doc;
  var __str24307;
  var _moddict;
  var __str25308;
  var __str26309;
  var __str27310;
  var __str28311;
  var __str29312;
  var __str30313;
  var __str31314;
  var __str32315;
  var __str33316;
  var __str34317;
  var __str35318;
  var _strftime_doc;
  var __str36319;
  var __str37320;
  var __str38321;
  var _strptime_doc;
  var __str39322;
  var __str40323;
  var _asctime_doc;
  var __str41324;
  var __str42325;
  var _ctime_doc;
  var __str43326;
  var _mktime_doc;
  var __str44327;
  var _tzset_doc;
  var __str45328;
  var __str46329;
  var __str47330;
  var __str48331;
  var __str49332;
  var __str50333;
  var __str51334;
  var __str52335;
  var __str53336;
  var __str54337;
  var __str55338;
  var __str56339;
  var __str57340;
  var __str58341;
  var _time_methods342;
  var _module_doc;
  var __str59343;
  var _initialized;
  var __str60344;
  function _divmod($x, $y, $r) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr = __stackBase__;
      var $y_addr = __stackBase__ + 4;
      var $r_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $quo = __stackBase__ + 20;
      
      HEAP[$x_addr] = $x;
      HEAP[$y_addr] = $y;
      HEAP[$r_addr] = $r;
      
      
      if (HEAP[$y_addr] <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str, __str1, 133, ___PRETTY_FUNCTION___8388);
      throw "Reached an unreachable!";
     case 2:
      
      
      var $5 = HEAP[$x_addr] / HEAP[$y_addr] | 0;
      HEAP[$quo] = $5;
      
      
      
      
      var $10 = HEAP[$x_addr] - HEAP[$quo] * HEAP[$y_addr];
      var $11 = HEAP[$r_addr];
      HEAP[$11] = $10;
      
      
      
      if (HEAP[HEAP[$r_addr]] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $16 = HEAP[$quo] - 1;
      HEAP[$quo] = $16;
      
      
      
      var $20 = HEAP[HEAP[$r_addr]] + HEAP[$y_addr];
      var $21 = HEAP[$r_addr];
      HEAP[$21] = $20;
      __label__ = 4;
      break;
     case 4:
      
      
      
      if (HEAP[HEAP[$r_addr]] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[HEAP[$r_addr]] >= HEAP[$y_addr]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      ___assert_fail(__str2, __str1, 140, ___PRETTY_FUNCTION___8388);
      throw "Reached an unreachable!";
     case 7:
      var $29 = HEAP[$quo];
      HEAP[$0] = $29;
      var $30 = HEAP[$0];
      HEAP[$retval] = $30;
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
  function _round_to_long($x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr = __stackBase__;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$x_addr] = $x;
      
      
      if (HEAP[$x_addr] >= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $4 = HEAP[$x_addr] + .5;
      var $5 = _floor($4);
      HEAP[$x_addr] = $5;
      __label__ = 3;
      break;
     case 2:
      
      var $7 = HEAP[$x_addr] - .5;
      var $8 = _ceil($7);
      HEAP[$x_addr] = $8;
      __label__ = 3;
      break;
     case 3:
      
      var $10 = HEAP[$x_addr] | 0;
      HEAP[$0] = $10;
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
  function _is_leap($year) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $retval = __stackBase__ + 4;
      var $iftmp_0 = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $ayear = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $year;
      var $1 = HEAP[__stackBase__];
      HEAP[$ayear] = $1;
      
      
      
      if ((HEAP[$ayear] & 3) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      if (HEAP[$ayear] % 100 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      if (HEAP[$ayear] % 400 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$iftmp_0] = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $11 = HEAP[$iftmp_0];
      HEAP[$0] = $11;
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
  function _days_in_month($year, $month) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $year_addr = __stackBase__;
      var $month_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$year_addr] = $year;
      HEAP[$month_addr] = $month;
      
      
      if (HEAP[$month_addr] <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str3, __str1, 192, ___PRETTY_FUNCTION___8436);
      throw "Reached an unreachable!";
     case 2:
      
      
      if (HEAP[$month_addr] > 12) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str4, __str1, 193, ___PRETTY_FUNCTION___8436);
      throw "Reached an unreachable!";
     case 4:
      
      
      if (HEAP[$month_addr] != 2) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $7 = HEAP[$year_addr];
      var $8 = _is_leap($7);
      
      if ($8 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      HEAP[$0] = 29;
      __label__ = 8;
      break;
     case 7:
      
      
      var $12 = HEAP[__days_in_month + HEAP[$month_addr] * 4];
      HEAP[$0] = $12;
      __label__ = 8;
      break;
     case 8:
      var $13 = HEAP[$0];
      HEAP[$retval] = $13;
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
  function _days_before_month($year, $month) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $year_addr = __stackBase__;
      var $month_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $days = __stackBase__ + 16;
      
      HEAP[$year_addr] = $year;
      HEAP[$month_addr] = $month;
      
      
      if (HEAP[$month_addr] <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str3, __str1, 206, ___PRETTY_FUNCTION___8453);
      throw "Reached an unreachable!";
     case 2:
      
      
      if (HEAP[$month_addr] > 12) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str4, __str1, 207, ___PRETTY_FUNCTION___8453);
      throw "Reached an unreachable!";
     case 4:
      
      
      var $7 = HEAP[__days_before_month + HEAP[$month_addr] * 4];
      HEAP[$days] = $7;
      
      
      if (HEAP[$month_addr] > 2) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      var $10 = HEAP[$year_addr];
      var $11 = _is_leap($10);
      
      if ($11 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $14 = HEAP[$days] + 1;
      HEAP[$days] = $14;
      __label__ = 7;
      break;
     case 7:
      var $15 = HEAP[$days];
      HEAP[$0] = $15;
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
  function _days_before_year($year) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $year_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $y = __stackBase__ + 12;
      
      HEAP[$year_addr] = $year;
      
      var $2 = HEAP[$year_addr] - 1;
      HEAP[$y] = $2;
      
      
      if (HEAP[$year_addr] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str5, __str1, 226, ___PRETTY_FUNCTION___8470);
      throw "Reached an unreachable!";
     case 2:
      
      
      if (HEAP[$y] >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      
      var $17 = HEAP[$y] * 365 + (HEAP[$y] / 4 | 0) - (HEAP[$y] / 100 | 0) + (HEAP[$y] / 400 | 0);
      HEAP[$0] = $17;
      __label__ = 7;
      break;
     case 4:
      
      var $19 = HEAP[$y] != -1;
      if ($19) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str6, __str1, 230, ___PRETTY_FUNCTION___8470);
      throw "Reached an unreachable!";
     case 6:
      HEAP[$0] = -366;
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
  function _ord_to_ymd($ordinal, $year, $month, $day) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ordinal_addr = __stackBase__;
      var $year_addr = __stackBase__ + 4;
      var $month_addr = __stackBase__ + 8;
      var $day_addr = __stackBase__ + 12;
      var $iftmp_4 = __stackBase__ + 16;
      var $iftmp_3 = __stackBase__ + 20;
      var $n = __stackBase__ + 24;
      var $n1 = __stackBase__ + 28;
      var $n4 = __stackBase__ + 32;
      var $n100 = __stackBase__ + 36;
      var $n400 = __stackBase__ + 40;
      var $leapyear = __stackBase__ + 44;
      var $preceding = __stackBase__ + 48;
      
      HEAP[$ordinal_addr] = $ordinal;
      HEAP[$year_addr] = $year;
      HEAP[$month_addr] = $month;
      HEAP[$day_addr] = $day;
      
      
      if (HEAP[$ordinal_addr] <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str7, __str1, 270, ___PRETTY_FUNCTION___8498);
      throw "Reached an unreachable!";
     case 2:
      
      var $3 = HEAP[$ordinal_addr] - 1;
      HEAP[$ordinal_addr] = $3;
      
      var $5 = HEAP[$ordinal_addr] / 146097 | 0;
      HEAP[$n400] = $5;
      
      var $7 = HEAP[$ordinal_addr] % 146097;
      HEAP[$n] = $7;
      
      
      var $10 = HEAP[$n400] * 400 + 1;
      var $11 = HEAP[$year_addr];
      HEAP[$11] = $10;
      
      var $13 = HEAP[$n] / 36524 | 0;
      HEAP[$n100] = $13;
      
      var $15 = HEAP[$n] % 36524;
      HEAP[$n] = $15;
      
      var $17 = HEAP[$n] / 1461 | 0;
      HEAP[$n4] = $17;
      
      var $19 = HEAP[$n] % 1461;
      HEAP[$n] = $19;
      
      var $21 = HEAP[$n] / 365 | 0;
      HEAP[$n1] = $21;
      
      var $23 = HEAP[$n] % 365;
      HEAP[$n] = $23;
      
      
      
      
      
      
      
      
      
      var $33 = HEAP[HEAP[$year_addr]] + ((HEAP[$n100] * 25 + HEAP[$n4]) * 4 + HEAP[$n1]);
      var $34 = HEAP[$year_addr];
      HEAP[$34] = $33;
      
      
      if (HEAP[$n1] == 4) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$n100] == 4) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      if (HEAP[$n] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str8, __str1, 299, ___PRETTY_FUNCTION___8498);
      throw "Reached an unreachable!";
     case 6:
      
      
      var $43 = HEAP[HEAP[$year_addr]] - 1;
      var $44 = HEAP[$year_addr];
      HEAP[$44] = $43;
      var $45 = HEAP[$month_addr];
      HEAP[$45] = 12;
      var $46 = HEAP[$day_addr];
      HEAP[$46] = 31;
      __label__ = 25;
      break;
     case 7:
      
      
      if (HEAP[$n1] != 3) {
        __label__ = 11;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      if (HEAP[$n4] != 24) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$n100] == 3) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$iftmp_3] = 1;
      __label__ = 12;
      break;
     case 11:
      HEAP[$iftmp_3] = 0;
      __label__ = 12;
      break;
     case 12:
      var $53 = HEAP[$iftmp_3];
      HEAP[$leapyear] = $53;
      
      var $55 = HEAP[HEAP[$year_addr]];
      var $56 = _is_leap($55);
      
      
      if ($56 != HEAP[$leapyear]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      ___assert_fail(__str9, __str1, 311, ___PRETTY_FUNCTION___8498);
      throw "Reached an unreachable!";
     case 14:
      
      
      var $61 = HEAP[$n] + 50 >> 5;
      var $62 = HEAP[$month_addr];
      HEAP[$62] = $61;
      
      
      
      var $66 = HEAP[__days_before_month + HEAP[HEAP[$month_addr]] * 4];
      
      
      
      if (HEAP[HEAP[$month_addr]] <= 2) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      if (HEAP[$leapyear] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      HEAP[$iftmp_4] = 1;
      __label__ = 18;
      break;
     case 17:
      HEAP[$iftmp_4] = 0;
      __label__ = 18;
      break;
     case 18:
      
      var $73 = $66 + HEAP[$iftmp_4];
      HEAP[$preceding] = $73;
      
      
      
      if (HEAP[$preceding] > HEAP[$n]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      var $79 = HEAP[HEAP[$month_addr]] - 1;
      var $80 = HEAP[$month_addr];
      HEAP[$80] = $79;
      
      var $82 = HEAP[HEAP[$month_addr]];
      
      var $84 = HEAP[HEAP[$year_addr]];
      var $85 = _days_in_month($84, $82);
      
      var $87 = HEAP[$preceding] - $85;
      HEAP[$preceding] = $87;
      __label__ = 20;
      break;
     case 20:
      
      
      var $90 = HEAP[$n] - HEAP[$preceding];
      HEAP[$n] = $90;
      
      
      if (HEAP[$n] < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      ___assert_fail(__str10, __str1, 320, ___PRETTY_FUNCTION___8498);
      throw "Reached an unreachable!";
     case 22:
      
      var $94 = HEAP[HEAP[$month_addr]];
      
      var $96 = HEAP[HEAP[$year_addr]];
      var $97 = _days_in_month($96, $94);
      
      
      if ($97 <= HEAP[$n]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      ___assert_fail(__str11, __str1, 321, ___PRETTY_FUNCTION___8498);
      throw "Reached an unreachable!";
     case 24:
      
      var $101 = HEAP[$n] + 1;
      var $102 = HEAP[$day_addr];
      HEAP[$102] = $101;
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
  function _ymd_to_ord($year, $month, $day) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $year_addr = __stackBase__;
      var $month_addr = __stackBase__ + 4;
      var $day_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$year_addr] = $year;
      HEAP[$month_addr] = $month;
      HEAP[$day_addr] = $day;
      var $1 = HEAP[$year_addr];
      var $2 = _days_before_year($1);
      var $3 = HEAP[$year_addr];
      var $4 = HEAP[$month_addr];
      var $5 = _days_before_month($3, $4);
      
      
      var $8 = $2 + $5 + HEAP[$day_addr];
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
  function _weekday($year, $month, $day) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $year_addr = __stackBase__;
      var $month_addr = __stackBase__ + 4;
      var $day_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$year_addr] = $year;
      HEAP[$month_addr] = $month;
      HEAP[$day_addr] = $day;
      var $1 = HEAP[$year_addr];
      var $2 = HEAP[$month_addr];
      var $3 = HEAP[$day_addr];
      var $4 = _ymd_to_ord($1, $2, $3);
      
      var $6 = ($4 + 6) % 7;
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
  function _iso_week1_monday($year) {
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
      var $first_day = __stackBase__ + 12;
      var $first_weekday = __stackBase__ + 16;
      var $week1_monday = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $year;
      var $1 = HEAP[__stackBase__];
      var $2 = _ymd_to_ord($1, 1, 1);
      HEAP[$first_day] = $2;
      
      
      var $5 = (HEAP[$first_day] + 6) % 7;
      HEAP[$first_weekday] = $5;
      
      
      var $8 = HEAP[$first_day] - HEAP[$first_weekday];
      HEAP[$week1_monday] = $8;
      
      
      if (HEAP[$first_weekday] > 3) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $12 = HEAP[$week1_monday] + 7;
      HEAP[$week1_monday] = $12;
      __label__ = 2;
      break;
     case 2:
      var $13 = HEAP[$week1_monday];
      HEAP[$0] = $13;
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
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
  function _check_delta_day_range($days) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $days_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$days_addr] = $days;
      
      var $2 = HEAP[$days_addr] >= -999999999;
      if ($2) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      if (HEAP[$days_addr] <= 999999999) {
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
      var $5 = HEAP[_PyExc_OverflowError];
      var $6 = HEAP[$days_addr];
      var $7 = _PyErr_Format($5, __str12, allocate([ $6, 0, 0, 0, 999999999, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 4;
      break;
     case 4:
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
  function _check_date_args($year, $month, $day) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $year_addr = __stackBase__;
      var $month_addr = __stackBase__ + 4;
      var $day_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$year_addr] = $year;
      HEAP[$month_addr] = $month;
      HEAP[$day_addr] = $day;
      
      
      if (HEAP[$year_addr] <= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$year_addr] > 9999) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str13);
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 3:
      
      
      if (HEAP[$month_addr] <= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if (HEAP[$month_addr] > 12) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $10 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($10, __str14);
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 6:
      
      
      if (HEAP[$day_addr] <= 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $13 = HEAP[$year_addr];
      var $14 = HEAP[$month_addr];
      var $15 = _days_in_month($13, $14);
      
      
      if ($15 < HEAP[$day_addr]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $18 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($18, __str15);
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 9:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 10:
      var $19 = HEAP[$0];
      HEAP[$retval] = $19;
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
  function _check_time_args($h, $m, $s, $us) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $h_addr = __stackBase__;
      var $m_addr = __stackBase__ + 4;
      var $s_addr = __stackBase__ + 8;
      var $us_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      
      HEAP[$h_addr] = $h;
      HEAP[$m_addr] = $m;
      HEAP[$s_addr] = $s;
      HEAP[$us_addr] = $us;
      
      
      if (HEAP[$h_addr] < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$h_addr] > 23) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str16);
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 3:
      
      
      if (HEAP[$m_addr] < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if (HEAP[$m_addr] > 59) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $10 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($10, __str17);
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 6:
      
      
      if (HEAP[$s_addr] < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if (HEAP[$s_addr] > 59) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $15 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($15, __str18);
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 9:
      
      
      if (HEAP[$us_addr] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if (HEAP[$us_addr] > 999999) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $20 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($20, __str19);
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 12:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 13:
      var $21 = HEAP[$0];
      HEAP[$retval] = $21;
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
  function _normalize_pair($hi, $lo, $factor) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $hi_addr = __stackBase__;
      var $lo_addr = __stackBase__ + 4;
      var $factor_addr = __stackBase__ + 8;
      var $num_hi = __stackBase__ + 12;
      var $new_hi = __stackBase__ + 16;
      
      HEAP[$hi_addr] = $hi;
      HEAP[$lo_addr] = $lo;
      HEAP[$factor_addr] = $factor;
      
      
      if (HEAP[$factor_addr] <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str20, __str1, 442, ___PRETTY_FUNCTION___8642);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      if (HEAP[$lo_addr] == HEAP[$hi_addr]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str21, __str1, 443, ___PRETTY_FUNCTION___8642);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      if (HEAP[HEAP[$lo_addr]] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[HEAP[$lo_addr]] >= HEAP[$factor_addr]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      var $13 = HEAP[HEAP[$lo_addr]];
      var $14 = HEAP[$factor_addr];
      var $15 = HEAP[$lo_addr];
      var $16 = _divmod($13, $14, $15);
      HEAP[$num_hi] = $16;
      
      
      
      var $20 = HEAP[HEAP[$hi_addr]] + HEAP[$num_hi];
      HEAP[$new_hi] = $20;
      
      
      
      
      
      
      
      
      
      if (((HEAP[HEAP[$hi_addr]] ^ HEAP[$new_hi]) & (HEAP[$new_hi] ^ HEAP[$num_hi])) < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      ___assert_fail(__str22, __str1, 447, ___PRETTY_FUNCTION___8642);
      throw "Reached an unreachable!";
     case 8:
      var $30 = HEAP[$hi_addr];
      var $31 = HEAP[$new_hi];
      HEAP[$30] = $31;
      __label__ = 9;
      break;
     case 9:
      
      
      
      if (HEAP[HEAP[$lo_addr]] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      if (HEAP[HEAP[$lo_addr]] >= HEAP[$factor_addr]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      ___assert_fail(__str23, __str1, 450, ___PRETTY_FUNCTION___8642);
      throw "Reached an unreachable!";
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
  function _normalize_d_s_us($d, $s, $us) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $d_addr = __stackBase__;
      var $s_addr = __stackBase__ + 4;
      var $us_addr = __stackBase__ + 8;
      
      HEAP[$d_addr] = $d;
      HEAP[$s_addr] = $s;
      HEAP[$us_addr] = $us;
      
      
      
      if (HEAP[HEAP[$us_addr]] < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      if (HEAP[HEAP[$us_addr]] > 999999) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $6 = HEAP[$s_addr];
      var $7 = HEAP[$us_addr];
      _normalize_pair($6, $7, 1e6);
      __label__ = 3;
      break;
     case 3:
      
      
      
      if (HEAP[HEAP[$s_addr]] < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      if (HEAP[HEAP[$s_addr]] > 86399) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $14 = HEAP[$d_addr];
      var $15 = HEAP[$s_addr];
      _normalize_pair($14, $15, 86400);
      __label__ = 6;
      break;
     case 6:
      
      
      
      if (HEAP[HEAP[$s_addr]] < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      if (HEAP[HEAP[$s_addr]] > 86399) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      ___assert_fail(__str24, __str1, 476, ___PRETTY_FUNCTION___8673);
      throw "Reached an unreachable!";
     case 9:
      
      
      
      if (HEAP[HEAP[$us_addr]] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      if (HEAP[HEAP[$us_addr]] > 999999) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      ___assert_fail(__str25, __str1, 477, ___PRETTY_FUNCTION___8673);
      throw "Reached an unreachable!";
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
  function _normalize_y_m_d($y, $m, $d) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $y_addr = __stackBase__;
      var $m_addr = __stackBase__ + 4;
      var $d_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $dim = __stackBase__ + 20;
      var $ordinal = __stackBase__ + 24;
      
      HEAP[$y_addr] = $y;
      HEAP[$m_addr] = $m;
      HEAP[$d_addr] = $d;
      
      
      
      if (HEAP[HEAP[$m_addr]] <= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      if (HEAP[HEAP[$m_addr]] > 12) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      var $9 = HEAP[HEAP[$m_addr]] - 1;
      var $10 = HEAP[$m_addr];
      HEAP[$10] = $9;
      var $11 = HEAP[$y_addr];
      var $12 = HEAP[$m_addr];
      _normalize_pair($11, $12, 12);
      
      
      var $15 = HEAP[HEAP[$m_addr]] + 1;
      var $16 = HEAP[$m_addr];
      HEAP[$16] = $15;
      __label__ = 3;
      break;
     case 3:
      
      
      
      if (HEAP[HEAP[$m_addr]] <= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      if (HEAP[HEAP[$m_addr]] > 12) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str26, __str1, 505, ___PRETTY_FUNCTION___8700);
      throw "Reached an unreachable!";
     case 6:
      
      var $24 = HEAP[HEAP[$m_addr]];
      
      var $26 = HEAP[HEAP[$y_addr]];
      var $27 = _days_in_month($26, $24);
      HEAP[$dim] = $27;
      
      
      
      if (HEAP[HEAP[$d_addr]] <= 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[HEAP[$d_addr]] > HEAP[$dim]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 8:
      
      
      
      if (HEAP[HEAP[$d_addr]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      
      var $40 = HEAP[HEAP[$m_addr]] - 1;
      var $41 = HEAP[$m_addr];
      HEAP[$41] = $40;
      
      
      
      if (HEAP[HEAP[$m_addr]] > 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $46 = HEAP[HEAP[$m_addr]];
      
      var $48 = HEAP[HEAP[$y_addr]];
      var $49 = _days_in_month($48, $46);
      var $50 = HEAP[$d_addr];
      HEAP[$50] = $49;
      __label__ = 12;
      break;
     case 11:
      
      
      var $53 = HEAP[HEAP[$y_addr]] - 1;
      var $54 = HEAP[$y_addr];
      HEAP[$54] = $53;
      var $55 = HEAP[$m_addr];
      HEAP[$55] = 12;
      var $56 = HEAP[$d_addr];
      HEAP[$56] = 31;
      __label__ = 12;
      break;
     case 12:
      __label__ = 20;
      break;
     case 13:
      
      
      
      
      
      if (HEAP[HEAP[$d_addr]] == HEAP[$dim] + 1) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      
      var $64 = HEAP[HEAP[$m_addr]] + 1;
      var $65 = HEAP[$m_addr];
      HEAP[$65] = $64;
      var $66 = HEAP[$d_addr];
      HEAP[$66] = 1;
      
      
      
      if (HEAP[HEAP[$m_addr]] > 12) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $70 = HEAP[$m_addr];
      HEAP[$70] = 1;
      
      
      var $73 = HEAP[HEAP[$y_addr]] + 1;
      var $74 = HEAP[$y_addr];
      HEAP[$74] = $73;
      __label__ = 16;
      break;
     case 16:
      __label__ = 20;
      break;
     case 17:
      
      var $76 = HEAP[HEAP[$m_addr]];
      
      var $78 = HEAP[HEAP[$y_addr]];
      var $79 = _ymd_to_ord($78, $76, 1);
      
      
      
      var $83 = $79 + HEAP[HEAP[$d_addr]] - 1;
      HEAP[$ordinal] = $83;
      
      
      if (HEAP[$ordinal] <= 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      if (HEAP[$ordinal] > 3652059) {
        __label__ = 27;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      var $88 = HEAP[$ordinal];
      var $89 = HEAP[$y_addr];
      var $90 = HEAP[$m_addr];
      var $91 = HEAP[$d_addr];
      _ord_to_ymd($88, $89, $90, $91);
      HEAP[$0] = 0;
      __label__ = 28;
      break;
     case 20:
      
      
      
      if (HEAP[HEAP[$m_addr]] <= 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      ___assert_fail(__str27, __str1, 548, ___PRETTY_FUNCTION___8700);
      throw "Reached an unreachable!";
     case 22:
      
      
      
      if (HEAP[HEAP[$d_addr]] <= 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      ___assert_fail(__str28, __str1, 549, ___PRETTY_FUNCTION___8700);
      throw "Reached an unreachable!";
     case 24:
      
      
      
      if (HEAP[HEAP[$y_addr]] > 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      
      if (HEAP[HEAP[$y_addr]] <= 9999) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      HEAP[$0] = 0;
      __label__ = 28;
      break;
     case 27:
      var $104 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($104, __str29);
      HEAP[$0] = -1;
      __label__ = 28;
      break;
     case 28:
      var $105 = HEAP[$0];
      HEAP[$retval] = $105;
      __label__ = 29;
      break;
     case 29:
      var $retval27 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normalize_date($year, $month, $day) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $year_addr = __stackBase__;
      var $month_addr = __stackBase__ + 4;
      var $day_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$year_addr] = $year;
      HEAP[$month_addr] = $month;
      HEAP[$day_addr] = $day;
      var $1 = HEAP[$year_addr];
      var $2 = HEAP[$month_addr];
      var $3 = HEAP[$day_addr];
      var $4 = _normalize_y_m_d($1, $2, $3);
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
  function _normalize_datetime($year, $month, $day, $hour, $minute, $second, $microsecond) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $year_addr = __stackBase__;
      var $month_addr = __stackBase__ + 4;
      var $day_addr = __stackBase__ + 8;
      var $hour_addr = __stackBase__ + 12;
      var $minute_addr = __stackBase__ + 16;
      var $second_addr = __stackBase__ + 20;
      var $microsecond_addr = __stackBase__ + 24;
      var $retval = __stackBase__ + 28;
      var $0 = __stackBase__ + 32;
      
      HEAP[$year_addr] = $year;
      HEAP[$month_addr] = $month;
      HEAP[$day_addr] = $day;
      HEAP[$hour_addr] = $hour;
      HEAP[$minute_addr] = $minute;
      HEAP[$second_addr] = $second;
      HEAP[$microsecond_addr] = $microsecond;
      var $1 = HEAP[$second_addr];
      var $2 = HEAP[$microsecond_addr];
      _normalize_pair($1, $2, 1e6);
      var $3 = HEAP[$minute_addr];
      var $4 = HEAP[$second_addr];
      _normalize_pair($3, $4, 60);
      var $5 = HEAP[$hour_addr];
      var $6 = HEAP[$minute_addr];
      _normalize_pair($5, $6, 60);
      var $7 = HEAP[$day_addr];
      var $8 = HEAP[$hour_addr];
      _normalize_pair($7, $8, 24);
      var $9 = HEAP[$year_addr];
      var $10 = HEAP[$month_addr];
      var $11 = HEAP[$day_addr];
      var $12 = _normalize_date($9, $10, $11);
      HEAP[$0] = $12;
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
  function _time_alloc($type, $aware) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $aware_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $iftmp_14 = __stackBase__ + 16;
      var $self = __stackBase__ + 20;
      
      HEAP[$type_addr] = $type;
      HEAP[$aware_addr] = $aware;
      
      
      if (HEAP[$aware_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$iftmp_14] = 24;
      __label__ = 3;
      break;
     case 2:
      HEAP[$iftmp_14] = 20;
      __label__ = 3;
      break;
     case 3:
      var $3 = HEAP[$iftmp_14];
      var $4 = _malloc($3);
      var $5 = $4;
      HEAP[$self] = $5;
      
      
      if (HEAP[$self] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $8 = _PyErr_NoMemory();
      HEAP[$0] = $8;
      __label__ = 6;
      break;
     case 5:
      
      var $10 = HEAP[$self] + 4;
      var $11 = HEAP[$type_addr];
      HEAP[$10] = $11;
      
      var $13 = HEAP[$self];
      HEAP[$13] = 1;
      var $14 = HEAP[$self];
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
  function _datetime_alloc($type, $aware) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $aware_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $iftmp_15 = __stackBase__ + 16;
      var $self = __stackBase__ + 20;
      
      HEAP[$type_addr] = $type;
      HEAP[$aware_addr] = $aware;
      
      
      if (HEAP[$aware_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$iftmp_15] = 28;
      __label__ = 3;
      break;
     case 2:
      HEAP[$iftmp_15] = 24;
      __label__ = 3;
      break;
     case 3:
      var $3 = HEAP[$iftmp_15];
      var $4 = _malloc($3);
      var $5 = $4;
      HEAP[$self] = $5;
      
      
      if (HEAP[$self] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $8 = _PyErr_NoMemory();
      HEAP[$0] = $8;
      __label__ = 6;
      break;
     case 5:
      
      var $10 = HEAP[$self] + 4;
      var $11 = HEAP[$type_addr];
      HEAP[$10] = $11;
      
      var $13 = HEAP[$self];
      HEAP[$13] = 1;
      var $14 = HEAP[$self];
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
  function _set_date_fields($self, $y, $m, $d) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $y_addr = __stackBase__ + 4;
      var $m_addr = __stackBase__ + 8;
      var $d_addr = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$y_addr] = $y;
      HEAP[$m_addr] = $m;
      HEAP[$d_addr] = $d;
      
      var $1 = HEAP[$self_addr] + 8;
      HEAP[$1] = -1;
      
      
      
      var $5 = (HEAP[$y_addr] & 65280) >> 8 & 255;
      
      
      var $8 = HEAP[$self_addr] + 13;
      HEAP[$8] = $5;
      
      var $10 = HEAP[$y_addr] & 255;
      
      
      var $13 = HEAP[$self_addr] + 13 + 1;
      HEAP[$13] = $10;
      
      var $15 = HEAP[$m_addr] & 255;
      
      
      var $18 = HEAP[$self_addr] + 13 + 2;
      HEAP[$18] = $15;
      
      var $20 = HEAP[$d_addr] & 255;
      
      
      var $23 = HEAP[$self_addr] + 13 + 3;
      HEAP[$23] = $20;
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _new_date_ex($year, $month, $day, $type) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $year_addr = __stackBase__;
      var $month_addr = __stackBase__ + 4;
      var $day_addr = __stackBase__ + 8;
      var $type_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $self = __stackBase__ + 24;
      
      HEAP[$year_addr] = $year;
      HEAP[$month_addr] = $month;
      HEAP[$day_addr] = $day;
      HEAP[$type_addr] = $type;
      
      
      var $3 = HEAP[HEAP[$type_addr] + 152];
      var $4 = HEAP[$type_addr];
      var $5 = FUNCTION_TABLE[$3]($4, 0);
      var $6 = $5;
      HEAP[$self] = $6;
      
      
      if (HEAP[$self] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $9 = HEAP[$self];
      var $10 = HEAP[$year_addr];
      var $11 = HEAP[$month_addr];
      var $12 = HEAP[$day_addr];
      _set_date_fields($9, $10, $11, $12);
      __label__ = 2;
      break;
     case 2:
      
      var $14 = HEAP[$self];
      HEAP[$0] = $14;
      var $15 = HEAP[$0];
      HEAP[$retval] = $15;
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
  function _new_datetime_ex($year, $month, $day, $hour, $minute, $second, $usecond, $tzinfo, $type) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 49;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 49);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $year_addr = __stackBase__;
      var $month_addr = __stackBase__ + 4;
      var $day_addr = __stackBase__ + 8;
      var $hour_addr = __stackBase__ + 12;
      var $minute_addr = __stackBase__ + 16;
      var $second_addr = __stackBase__ + 20;
      var $usecond_addr = __stackBase__ + 24;
      var $tzinfo_addr = __stackBase__ + 28;
      var $type_addr = __stackBase__ + 32;
      var $retval = __stackBase__ + 36;
      var $0 = __stackBase__ + 40;
      var $self = __stackBase__ + 44;
      var $aware = __stackBase__ + 48;
      
      HEAP[$year_addr] = $year;
      HEAP[$month_addr] = $month;
      HEAP[$day_addr] = $day;
      HEAP[$hour_addr] = $hour;
      HEAP[$minute_addr] = $minute;
      HEAP[$second_addr] = $second;
      HEAP[$usecond_addr] = $usecond;
      HEAP[$tzinfo_addr] = $tzinfo;
      HEAP[$type_addr] = $type;
      
      
      var $3 = HEAP[$tzinfo_addr] != __Py_NoneStruct;
      HEAP[$aware] = $3;
      
      
      var $6 = HEAP[HEAP[$type_addr] + 152];
      
      var $8 = HEAP[$aware];
      var $9 = HEAP[$type_addr];
      var $10 = FUNCTION_TABLE[$6]($9, $8);
      var $11 = $10;
      HEAP[$self] = $11;
      
      
      if (HEAP[$self] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $15 = HEAP[$self] + 12;
      var $16 = HEAP[$aware];
      HEAP[$15] = $16;
      
      var $18 = HEAP[$self];
      var $19 = HEAP[$year_addr];
      var $20 = HEAP[$month_addr];
      var $21 = HEAP[$day_addr];
      _set_date_fields($18, $19, $20, $21);
      
      var $23 = HEAP[$hour_addr] & 255;
      
      
      var $26 = HEAP[$self] + 13 + 4;
      HEAP[$26] = $23;
      
      var $28 = HEAP[$minute_addr] & 255;
      
      
      var $31 = HEAP[$self] + 13 + 5;
      HEAP[$31] = $28;
      
      var $33 = HEAP[$second_addr] & 255;
      
      
      var $36 = HEAP[$self] + 13 + 6;
      HEAP[$36] = $33;
      
      
      
      var $40 = (HEAP[$usecond_addr] & 16711680) >> 16 & 255;
      
      
      var $43 = HEAP[$self] + 13 + 7;
      HEAP[$43] = $40;
      
      
      
      var $47 = (HEAP[$usecond_addr] & 65280) >> 8 & 255;
      
      
      var $50 = HEAP[$self] + 13 + 8;
      HEAP[$50] = $47;
      
      var $52 = HEAP[$usecond_addr] & 255;
      
      
      var $55 = HEAP[$self] + 13 + 9;
      HEAP[$55] = $52;
      
      
      if (HEAP[$aware] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $61 = HEAP[HEAP[$tzinfo_addr]] + 1;
      
      var $63 = HEAP[$tzinfo_addr];
      HEAP[$63] = $61;
      
      var $65 = HEAP[$self] + 24;
      var $66 = HEAP[$tzinfo_addr];
      HEAP[$65] = $66;
      __label__ = 3;
      break;
     case 3:
      
      var $68 = HEAP[$self];
      HEAP[$0] = $68;
      var $69 = HEAP[$0];
      HEAP[$retval] = $69;
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
  function _new_time_ex($hour, $minute, $second, $usecond, $tzinfo, $type) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 37;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 37);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $hour_addr = __stackBase__;
      var $minute_addr = __stackBase__ + 4;
      var $second_addr = __stackBase__ + 8;
      var $usecond_addr = __stackBase__ + 12;
      var $tzinfo_addr = __stackBase__ + 16;
      var $type_addr = __stackBase__ + 20;
      var $retval = __stackBase__ + 24;
      var $0 = __stackBase__ + 28;
      var $self = __stackBase__ + 32;
      var $aware = __stackBase__ + 36;
      
      HEAP[$hour_addr] = $hour;
      HEAP[$minute_addr] = $minute;
      HEAP[$second_addr] = $second;
      HEAP[$usecond_addr] = $usecond;
      HEAP[$tzinfo_addr] = $tzinfo;
      HEAP[$type_addr] = $type;
      
      
      var $3 = HEAP[$tzinfo_addr] != __Py_NoneStruct;
      HEAP[$aware] = $3;
      
      
      var $6 = HEAP[HEAP[$type_addr] + 152];
      
      var $8 = HEAP[$aware];
      var $9 = HEAP[$type_addr];
      var $10 = FUNCTION_TABLE[$6]($9, $8);
      var $11 = $10;
      HEAP[$self] = $11;
      
      
      if (HEAP[$self] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $15 = HEAP[$self] + 12;
      var $16 = HEAP[$aware];
      HEAP[$15] = $16;
      
      var $18 = HEAP[$self] + 8;
      HEAP[$18] = -1;
      
      var $20 = HEAP[$hour_addr] & 255;
      
      
      var $23 = HEAP[$self] + 13;
      HEAP[$23] = $20;
      
      var $25 = HEAP[$minute_addr] & 255;
      
      
      var $28 = HEAP[$self] + 13 + 1;
      HEAP[$28] = $25;
      
      var $30 = HEAP[$second_addr] & 255;
      
      
      var $33 = HEAP[$self] + 13 + 2;
      HEAP[$33] = $30;
      
      
      
      var $37 = (HEAP[$usecond_addr] & 16711680) >> 16 & 255;
      
      
      var $40 = HEAP[$self] + 13 + 3;
      HEAP[$40] = $37;
      
      
      
      var $44 = (HEAP[$usecond_addr] & 65280) >> 8 & 255;
      
      
      var $47 = HEAP[$self] + 13 + 4;
      HEAP[$47] = $44;
      
      var $49 = HEAP[$usecond_addr] & 255;
      
      
      var $52 = HEAP[$self] + 13 + 5;
      HEAP[$52] = $49;
      
      
      if (HEAP[$aware] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $58 = HEAP[HEAP[$tzinfo_addr]] + 1;
      
      var $60 = HEAP[$tzinfo_addr];
      HEAP[$60] = $58;
      
      var $62 = HEAP[$self] + 20;
      var $63 = HEAP[$tzinfo_addr];
      HEAP[$62] = $63;
      __label__ = 3;
      break;
     case 3:
      
      var $65 = HEAP[$self];
      HEAP[$0] = $65;
      var $66 = HEAP[$0];
      HEAP[$retval] = $66;
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
  function _new_delta_ex($days, $seconds, $microseconds, $normalize, $type) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $days_addr = __stackBase__;
      var $seconds_addr = __stackBase__ + 4;
      var $microseconds_addr = __stackBase__ + 8;
      var $normalize_addr = __stackBase__ + 12;
      var $type_addr = __stackBase__ + 16;
      var $retval = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $self = __stackBase__ + 28;
      
      HEAP[$days_addr] = $days;
      HEAP[$seconds_addr] = $seconds;
      HEAP[$microseconds_addr] = $microseconds;
      HEAP[$normalize_addr] = $normalize;
      HEAP[$type_addr] = $type;
      
      
      if (HEAP[$normalize_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      _normalize_d_s_us($days_addr, $seconds_addr, $microseconds_addr);
      __label__ = 2;
      break;
     case 2:
      
      
      if (HEAP[$seconds_addr] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$seconds_addr] > 86399) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str30, __str1, 738, ___PRETTY_FUNCTION___8924);
      throw "Reached an unreachable!";
     case 5:
      
      
      if (HEAP[$microseconds_addr] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if (HEAP[$microseconds_addr] > 999999) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      ___assert_fail(__str31, __str1, 739, ___PRETTY_FUNCTION___8924);
      throw "Reached an unreachable!";
     case 8:
      var $11 = HEAP[$days_addr];
      var $12 = _check_delta_day_range($11);
      
      if ($12 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 10:
      
      
      var $16 = HEAP[HEAP[$type_addr] + 152];
      var $17 = HEAP[$type_addr];
      var $18 = FUNCTION_TABLE[$16]($17, 0);
      var $19 = $18;
      HEAP[$self] = $19;
      
      
      if (HEAP[$self] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      var $23 = HEAP[$self] + 8;
      HEAP[$23] = -1;
      var $24 = HEAP[$days_addr];
      
      var $26 = HEAP[$self] + 12;
      HEAP[$26] = $24;
      var $27 = HEAP[$seconds_addr];
      
      var $29 = HEAP[$self] + 16;
      HEAP[$29] = $27;
      var $30 = HEAP[$microseconds_addr];
      
      var $32 = HEAP[$self] + 20;
      HEAP[$32] = $30;
      __label__ = 12;
      break;
     case 12:
      
      var $34 = HEAP[$self];
      HEAP[$0] = $34;
      __label__ = 13;
      break;
     case 13:
      var $35 = HEAP[$0];
      HEAP[$retval] = $35;
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
  function _check_tzinfo_subclass($p) {
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
      
      
      if (HEAP[$p_addr] == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$p_addr] + 4] == _PyDateTime_TZInfoType) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $9 = HEAP[HEAP[$p_addr] + 4];
      var $10 = _PyType_IsSubtype($9, _PyDateTime_TZInfoType);
      
      if ($10 != 0) {
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
      
      
      
      
      var $16 = HEAP[HEAP[HEAP[$p_addr] + 4] + 12];
      var $17 = HEAP[_PyExc_TypeError];
      var $18 = _PyErr_Format($17, __str32, allocate([ $16, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 5:
      var $19 = HEAP[$0];
      HEAP[$retval] = $19;
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
  function _call_tzinfo_method($tzinfo, $methname, $tzinfoarg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tzinfo_addr = __stackBase__;
      var $methname_addr = __stackBase__ + 4;
      var $tzinfoarg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      
      HEAP[$tzinfo_addr] = $tzinfo;
      HEAP[$methname_addr] = $methname;
      HEAP[$tzinfoarg_addr] = $tzinfoarg;
      
      
      if (HEAP[$tzinfo_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$methname_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$tzinfoarg_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str33, __str1, 784, ___PRETTY_FUNCTION___8971);
      throw "Reached an unreachable!";
     case 4:
      var $7 = HEAP[$tzinfo_addr];
      var $8 = _check_tzinfo_subclass($7);
      
      if ($8 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str34, __str1, 785, ___PRETTY_FUNCTION___8971);
      throw "Reached an unreachable!";
     case 6:
      
      
      if (HEAP[$tzinfo_addr] == __Py_NoneStruct) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$result] = __Py_NoneStruct;
      
      
      
      var $15 = HEAP[HEAP[$result]] + 1;
      
      var $17 = HEAP[$result];
      HEAP[$17] = $15;
      __label__ = 9;
      break;
     case 8:
      var $18 = HEAP[$tzinfo_addr];
      var $19 = HEAP[$methname_addr];
      var $20 = HEAP[$tzinfoarg_addr];
      var $21 = __PyObject_CallMethod_SizeT($18, $19, __str35, allocate([ $20, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $21;
      __label__ = 9;
      break;
     case 9:
      var $22 = HEAP[$result];
      HEAP[$0] = $22;
      var $23 = HEAP[$0];
      HEAP[$retval] = $23;
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
  function _get_tzinfo_member($self) {
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
      var $tzinfo = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$tzinfo] = 0;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 4] == _PyDateTime_DateTimeType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DateTimeType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $18 = HEAP[HEAP[$self_addr] + 24];
      HEAP[$tzinfo] = $18;
      __label__ = 8;
      break;
     case 4:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 4] == _PyDateTime_TimeType) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      var $25 = HEAP[HEAP[$self_addr] + 4];
      var $26 = _PyType_IsSubtype($25, _PyDateTime_TimeType);
      
      if ($26 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      var $36 = HEAP[HEAP[$self_addr] + 20];
      HEAP[$tzinfo] = $36;
      __label__ = 8;
      break;
     case 8:
      var $37 = HEAP[$tzinfo];
      HEAP[$0] = $37;
      var $38 = HEAP[$0];
      HEAP[$retval] = $38;
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
  function _call_utc_tzinfo_method($tzinfo, $name, $tzinfoarg, $none) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tzinfo_addr = __stackBase__;
      var $name_addr = __stackBase__ + 4;
      var $tzinfoarg_addr = __stackBase__ + 8;
      var $none_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $u = __stackBase__ + 24;
      var $result = __stackBase__ + 28;
      var $days = __stackBase__ + 32;
      var $ss = __stackBase__ + 36;
      
      HEAP[$tzinfo_addr] = $tzinfo;
      HEAP[$name_addr] = $name;
      HEAP[$tzinfoarg_addr] = $tzinfoarg;
      HEAP[$none_addr] = $none;
      HEAP[$result] = -1;
      
      
      if (HEAP[$tzinfo_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str36, __str1, 827, ___PRETTY_FUNCTION___9023);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      if (HEAP[HEAP[$tzinfo_addr] + 4] != _PyDateTime_TZInfoType) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $9 = HEAP[HEAP[$tzinfo_addr] + 4];
      var $10 = _PyType_IsSubtype($9, _PyDateTime_TZInfoType);
      
      if ($10 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str37, __str1, 828, ___PRETTY_FUNCTION___9023);
      throw "Reached an unreachable!";
     case 5:
      
      
      if (HEAP[$tzinfoarg_addr] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      ___assert_fail(__str38, __str1, 829, ___PRETTY_FUNCTION___9023);
      throw "Reached an unreachable!";
     case 7:
      var $14 = HEAP[$none_addr];
      HEAP[$14] = 0;
      var $15 = HEAP[$tzinfo_addr];
      var $16 = HEAP[$name_addr];
      var $17 = HEAP[$tzinfoarg_addr];
      var $18 = _call_tzinfo_method($15, $16, $17);
      HEAP[$u] = $18;
      
      
      if (HEAP[$u] == 0) {
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
      
      
      if (HEAP[$u] == __Py_NoneStruct) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$result] = 0;
      var $23 = HEAP[$none_addr];
      HEAP[$23] = 1;
      __label__ = 21;
      break;
     case 11:
      
      
      
      
      if (HEAP[HEAP[$u] + 4] == _PyDateTime_DeltaType) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      var $30 = HEAP[HEAP[$u] + 4];
      var $31 = _PyType_IsSubtype($30, _PyDateTime_DeltaType);
      
      if ($31 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 13:
      
      
      
      var $36 = HEAP[HEAP[$u] + 12];
      HEAP[$days] = $36;
      
      var $38 = HEAP[$days] < -1;
      if ($38) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if (HEAP[$days] > 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$result] = 1440;
      __label__ = 19;
      break;
     case 16:
      
      
      
      
      
      
      var $47 = HEAP[$days] * 86400 + HEAP[HEAP[$u] + 16];
      HEAP[$ss] = $47;
      var $48 = HEAP[$ss];
      var $49 = _divmod($48, 60, $ss);
      HEAP[$result] = $49;
      
      
      if (HEAP[$ss] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      
      if (HEAP[HEAP[$u] + 20] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $57 = HEAP[_PyExc_ValueError];
      var $58 = HEAP[$name_addr];
      var $59 = _PyErr_Format($57, __str39, allocate([ $58, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = -1;
      __label__ = 19;
      break;
     case 19:
      __label__ = 21;
      break;
     case 20:
      
      
      
      
      var $64 = HEAP[HEAP[HEAP[$u] + 4] + 12];
      var $65 = HEAP[_PyExc_TypeError];
      var $66 = HEAP[$name_addr];
      var $67 = _PyErr_Format($65, __str40, allocate([ $66, 0, 0, 0, $64, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 21;
      break;
     case 21:
      
      
      
      var $71 = HEAP[HEAP[$u]] - 1;
      
      var $73 = HEAP[$u];
      HEAP[$73] = $71;
      
      
      
      
      if (HEAP[HEAP[$u]] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $82 = HEAP[HEAP[HEAP[$u] + 4] + 24];
      var $83 = HEAP[$u];
      FUNCTION_TABLE[$82]($83);
      __label__ = 23;
      break;
     case 23:
      
      var $85 = HEAP[$result] < -1439;
      if ($85) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      if (HEAP[$result] > 1439) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $88 = HEAP[_PyExc_ValueError];
      var $89 = HEAP[$name_addr];
      var $90 = HEAP[$result];
      var $91 = _PyErr_Format($88, __str41, allocate([ $89, 0, 0, 0, $90, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = -1;
      __label__ = 26;
      break;
     case 26:
      var $92 = HEAP[$result];
      HEAP[$0] = $92;
      __label__ = 27;
      break;
     case 27:
      var $93 = HEAP[$0];
      HEAP[$retval] = $93;
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
  function _call_utcoffset($tzinfo, $tzinfoarg, $none) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tzinfo_addr = __stackBase__;
      var $tzinfoarg_addr = __stackBase__ + 4;
      var $none_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$tzinfo_addr] = $tzinfo;
      HEAP[$tzinfoarg_addr] = $tzinfoarg;
      HEAP[$none_addr] = $none;
      var $1 = HEAP[$tzinfo_addr];
      var $2 = HEAP[$tzinfoarg_addr];
      var $3 = HEAP[$none_addr];
      var $4 = _call_utc_tzinfo_method($1, __str42, $2, $3);
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
  function _offset_as_timedelta($tzinfo, $name, $tzinfoarg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tzinfo_addr = __stackBase__;
      var $name_addr = __stackBase__ + 4;
      var $tzinfoarg_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      var $none = __stackBase__ + 24;
      var $offset = __stackBase__ + 28;
      
      HEAP[$tzinfo_addr] = $tzinfo;
      HEAP[$name_addr] = $name;
      HEAP[$tzinfoarg_addr] = $tzinfoarg;
      
      
      if (HEAP[$tzinfo_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$name_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$tzinfoarg_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str43, __str1, 897, ___PRETTY_FUNCTION___9098);
      throw "Reached an unreachable!";
     case 4:
      
      
      if (HEAP[$tzinfo_addr] == __Py_NoneStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$result] = __Py_NoneStruct;
      
      
      
      var $12 = HEAP[HEAP[$result]] + 1;
      
      var $14 = HEAP[$result];
      HEAP[$14] = $12;
      __label__ = 12;
      break;
     case 6:
      var $15 = HEAP[$tzinfo_addr];
      var $16 = HEAP[$name_addr];
      var $17 = HEAP[$tzinfoarg_addr];
      var $18 = _call_utc_tzinfo_method($15, $16, $17, $none);
      HEAP[$offset] = $18;
      
      
      if (HEAP[$offset] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $21 = _PyErr_Occurred();
      
      if ($21 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 9:
      
      
      if (HEAP[$none] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$result] = __Py_NoneStruct;
      
      
      
      var $28 = HEAP[HEAP[$result]] + 1;
      
      var $30 = HEAP[$result];
      HEAP[$30] = $28;
      __label__ = 12;
      break;
     case 11:
      
      var $32 = HEAP[$offset] * 60;
      var $33 = _new_delta_ex(0, $32, 0, 1, _PyDateTime_DeltaType);
      HEAP[$result] = $33;
      __label__ = 12;
      break;
     case 12:
      var $34 = HEAP[$result];
      HEAP[$0] = $34;
      __label__ = 13;
      break;
     case 13:
      var $35 = HEAP[$0];
      HEAP[$retval] = $35;
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
  function _call_dst($tzinfo, $tzinfoarg, $none) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tzinfo_addr = __stackBase__;
      var $tzinfoarg_addr = __stackBase__ + 4;
      var $none_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$tzinfo_addr] = $tzinfo;
      HEAP[$tzinfoarg_addr] = $tzinfoarg;
      HEAP[$none_addr] = $none;
      var $1 = HEAP[$tzinfo_addr];
      var $2 = HEAP[$tzinfoarg_addr];
      var $3 = HEAP[$none_addr];
      var $4 = _call_utc_tzinfo_method($1, __str44, $2, $3);
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
  function _call_tzname($tzinfo, $tzinfoarg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tzinfo_addr = __stackBase__;
      var $tzinfoarg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      
      HEAP[$tzinfo_addr] = $tzinfo;
      HEAP[$tzinfoarg_addr] = $tzinfoarg;
      
      
      if (HEAP[$tzinfo_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str36, __str1, 942, ___PRETTY_FUNCTION___9139);
      throw "Reached an unreachable!";
     case 2:
      var $3 = HEAP[$tzinfo_addr];
      var $4 = _check_tzinfo_subclass($3);
      
      if ($4 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str34, __str1, 943, ___PRETTY_FUNCTION___9139);
      throw "Reached an unreachable!";
     case 4:
      
      
      if (HEAP[$tzinfoarg_addr] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str38, __str1, 944, ___PRETTY_FUNCTION___9139);
      throw "Reached an unreachable!";
     case 6:
      
      
      if (HEAP[$tzinfo_addr] == __Py_NoneStruct) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$result] = __Py_NoneStruct;
      
      
      
      var $13 = HEAP[HEAP[$result]] + 1;
      
      var $15 = HEAP[$result];
      HEAP[$15] = $13;
      __label__ = 9;
      break;
     case 8:
      var $16 = HEAP[$tzinfo_addr];
      var $17 = HEAP[$tzinfoarg_addr];
      var $18 = __PyObject_CallMethod_SizeT($16, __str45, __str35, allocate([ $17, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $18;
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$result] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 10:
      
      
      if (HEAP[$result] != __Py_NoneStruct) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$result] + 4] + 84] & 134217728) == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      
      
      
      var $34 = HEAP[HEAP[HEAP[$result] + 4] + 12];
      var $35 = HEAP[_PyExc_TypeError];
      var $36 = _PyErr_Format($35, __str46, allocate([ $34, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      
      
      var $40 = HEAP[HEAP[$result]] - 1;
      
      var $42 = HEAP[$result];
      HEAP[$42] = $40;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $51 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $52 = HEAP[$result];
      FUNCTION_TABLE[$51]($52);
      __label__ = 14;
      break;
     case 14:
      HEAP[$result] = 0;
      __label__ = 15;
      break;
     case 15:
      var $53 = HEAP[$result];
      HEAP[$0] = $53;
      var $54 = HEAP[$0];
      HEAP[$retval] = $54;
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
  function _classify_utcoffset($op, $tzinfoarg, $offset) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $op_addr = __stackBase__;
      var $tzinfoarg_addr = __stackBase__ + 4;
      var $offset_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $iftmp_41 = __stackBase__ + 16;
      var $iftmp_40 = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $none = __stackBase__ + 28;
      var $tzinfo = __stackBase__ + 32;
      
      HEAP[$op_addr] = $op;
      HEAP[$tzinfoarg_addr] = $tzinfoarg;
      HEAP[$offset_addr] = $offset;
      
      
      if (HEAP[$tzinfoarg_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str38, __str1, 996, ___PRETTY_FUNCTION___9187);
      throw "Reached an unreachable!";
     case 2:
      var $3 = HEAP[$offset_addr];
      HEAP[$3] = 0;
      var $4 = HEAP[$op_addr];
      var $5 = _get_tzinfo_member($4);
      HEAP[$tzinfo] = $5;
      
      
      if (HEAP[$tzinfo] == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 2;
      __label__ = 19;
      break;
     case 4:
      
      
      if (HEAP[$tzinfo] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[HEAP[$op_addr] + 4] == _PyDateTime_TimeType) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $16 = HEAP[HEAP[$op_addr] + 4];
      var $17 = _PyType_IsSubtype($16, _PyDateTime_TimeType);
      
      if ($17 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[HEAP[$op_addr] + 4] == _PyDateTime_DateType) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      var $25 = HEAP[HEAP[$op_addr] + 4];
      var $26 = _PyType_IsSubtype($25, _PyDateTime_DateType);
      
      if ($26 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$iftmp_40] = 2;
      __label__ = 11;
      break;
     case 10:
      HEAP[$iftmp_40] = 1;
      __label__ = 11;
      break;
     case 11:
      var $28 = HEAP[$iftmp_40];
      HEAP[$0] = $28;
      __label__ = 19;
      break;
     case 12:
      var $29 = HEAP[$tzinfo];
      var $30 = HEAP[$tzinfoarg_addr];
      var $31 = _call_utcoffset($29, $30, $none);
      var $32 = HEAP[$offset_addr];
      HEAP[$32] = $31;
      
      
      var $35 = HEAP[HEAP[$offset_addr]] == -1;
      if ($35) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      var $36 = _PyErr_Occurred();
      
      if ($36 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 15:
      
      
      if (HEAP[$none] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      HEAP[$iftmp_41] = 2;
      __label__ = 18;
      break;
     case 17:
      HEAP[$iftmp_41] = 3;
      __label__ = 18;
      break;
     case 18:
      var $40 = HEAP[$iftmp_41];
      HEAP[$0] = $40;
      __label__ = 19;
      break;
     case 19:
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
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
  function _classify_two_utcoffsets($o1, $offset1, $n1, $tzinfoarg1, $o2, $offset2, $n2, $tzinfoarg2) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $o1_addr = __stackBase__;
      var $offset1_addr = __stackBase__ + 4;
      var $n1_addr = __stackBase__ + 8;
      var $tzinfoarg1_addr = __stackBase__ + 12;
      var $o2_addr = __stackBase__ + 16;
      var $offset2_addr = __stackBase__ + 20;
      var $n2_addr = __stackBase__ + 24;
      var $tzinfoarg2_addr = __stackBase__ + 28;
      var $retval = __stackBase__ + 32;
      var $0 = __stackBase__ + 36;
      
      HEAP[$o1_addr] = $o1;
      HEAP[$offset1_addr] = $offset1;
      HEAP[$n1_addr] = $n1;
      HEAP[$tzinfoarg1_addr] = $tzinfoarg1;
      HEAP[$o2_addr] = $o2;
      HEAP[$offset2_addr] = $offset2;
      HEAP[$n2_addr] = $n2;
      HEAP[$tzinfoarg2_addr] = $tzinfoarg2;
      var $1 = HEAP[$o1_addr];
      var $2 = _get_tzinfo_member($1);
      var $3 = HEAP[$o2_addr];
      var $4 = _get_tzinfo_member($3);
      
      if ($2 == $4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $6 = HEAP[$offset2_addr];
      HEAP[$6] = 0;
      
      var $8 = HEAP[HEAP[$offset2_addr]];
      var $9 = HEAP[$offset1_addr];
      HEAP[$9] = $8;
      var $10 = HEAP[$n2_addr];
      HEAP[$10] = 2;
      
      var $12 = HEAP[HEAP[$n2_addr]];
      var $13 = HEAP[$n1_addr];
      HEAP[$13] = $12;
      __label__ = 6;
      break;
     case 2:
      var $14 = HEAP[$o1_addr];
      var $15 = HEAP[$tzinfoarg1_addr];
      var $16 = HEAP[$offset1_addr];
      var $17 = _classify_utcoffset($14, $15, $16);
      var $18 = HEAP[$n1_addr];
      HEAP[$18] = $17;
      
      
      
      if (HEAP[HEAP[$n1_addr]] == 0) {
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
      var $22 = HEAP[$o2_addr];
      var $23 = HEAP[$tzinfoarg2_addr];
      var $24 = HEAP[$offset2_addr];
      var $25 = _classify_utcoffset($22, $23, $24);
      var $26 = HEAP[$n2_addr];
      HEAP[$26] = $25;
      
      
      
      if (HEAP[HEAP[$n2_addr]] == 0) {
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
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $30 = HEAP[$0];
      HEAP[$retval] = $30;
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
  function _append_keyword_tzinfo($repr, $tzinfo) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $repr_addr = __stackBase__;
      var $tzinfo_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $temp = __stackBase__ + 16;
      
      HEAP[$repr_addr] = $repr;
      HEAP[$tzinfo_addr] = $tzinfo;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$repr_addr] + 4] + 84] & 134217728) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str47, __str1, 1052, ___PRETTY_FUNCTION___9254);
      throw "Reached an unreachable!";
     case 2:
      
      
      if (HEAP[$tzinfo_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str48, __str1, 1053, ___PRETTY_FUNCTION___9254);
      throw "Reached an unreachable!";
     case 4:
      
      
      if (HEAP[$tzinfo_addr] == __Py_NoneStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $12 = HEAP[$repr_addr];
      HEAP[$0] = $12;
      __label__ = 13;
      break;
     case 6:
      var $13 = HEAP[$repr_addr];
      var $14 = _PyString_AsString($13);
      var $15 = HEAP[$repr_addr];
      var $16 = _PyString_Size($15);
      
      
      
      
      if (HEAP[$14 + ($16 - 1)] != 41) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      ___assert_fail(__str49, __str1, 1057, ___PRETTY_FUNCTION___9254);
      throw "Reached an unreachable!";
     case 8:
      var $21 = HEAP[$repr_addr];
      var $22 = _PyString_Size($21);
      var $23 = $22 - 1;
      var $24 = HEAP[$repr_addr];
      var $25 = _PyString_AsString($24);
      var $26 = _PyString_FromStringAndSize($25, $23);
      HEAP[$temp] = $26;
      var $27 = HEAP[$repr_addr];
      
      
      var $30 = HEAP[$27] - 1;
      var $31 = $27;
      HEAP[$31] = $30;
      
      
      
      if (HEAP[$27] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $39 = HEAP[HEAP[HEAP[$repr_addr] + 4] + 24];
      var $40 = HEAP[$repr_addr];
      FUNCTION_TABLE[$39]($40);
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$temp] == 0) {
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
      var $43 = HEAP[$temp];
      HEAP[$repr_addr] = $43;
      var $44 = _PyString_FromString(__str50);
      _PyString_ConcatAndDel($repr_addr, $44);
      var $45 = HEAP[$tzinfo_addr];
      var $46 = _PyObject_Repr($45);
      _PyString_ConcatAndDel($repr_addr, $46);
      var $47 = _PyString_FromString(__str51);
      _PyString_ConcatAndDel($repr_addr, $47);
      var $48 = HEAP[$repr_addr];
      HEAP[$0] = $48;
      __label__ = 13;
      break;
     case 13:
      var $49 = HEAP[$0];
      HEAP[$retval] = $49;
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
  function _format_ctime($date, $hours, $minutes, $seconds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 156;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 156);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $date_addr = __stackBase__;
      var $hours_addr = __stackBase__ + 4;
      var $minutes_addr = __stackBase__ + 8;
      var $seconds_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $buffer = __stackBase__ + 24;
      var $wday = __stackBase__ + 152;
      
      HEAP[$date_addr] = $date;
      HEAP[$hours_addr] = $hours;
      HEAP[$minutes_addr] = $minutes;
      HEAP[$seconds_addr] = $seconds;
      
      
      
      
      var $5 = HEAP[HEAP[$date_addr] + 13 + 3];
      
      
      
      
      var $10 = HEAP[HEAP[$date_addr] + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      var $22 = HEAP[HEAP[$date_addr] + 13] << 8 | HEAP[HEAP[$date_addr] + 13 + 1];
      var $23 = _weekday($22, $10, $5);
      HEAP[$wday] = $23;
      
      
      
      
      
      
      
      
      
      
      
      var $35 = HEAP[HEAP[$date_addr] + 13] << 8 | HEAP[HEAP[$date_addr] + 13 + 1];
      
      
      
      
      var $40 = HEAP[HEAP[$date_addr] + 13 + 3];
      
      
      
      
      
      
      
      var $48 = HEAP[_MonthNames_9303 + (HEAP[HEAP[$date_addr] + 13 + 2] - 1) * 4];
      
      
      var $51 = HEAP[_DayNames_9302 + HEAP[$wday] * 4];
      var $buffer1 = $buffer;
      var $52 = HEAP[$hours_addr];
      var $53 = HEAP[$minutes_addr];
      var $54 = HEAP[$seconds_addr];
      var $55 = _PyOS_snprintf($buffer1, 128, __str71, allocate([ $51, 0, 0, 0, $48, 0, 0, 0, $40, 0, 0, 0, $52, 0, 0, 0, $53, 0, 0, 0, $54, 0, 0, 0, $35, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      var $buffer2 = $buffer;
      var $56 = _PyString_FromString($buffer2);
      HEAP[$0] = $56;
      var $57 = HEAP[$0];
      HEAP[$retval] = $57;
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
  function _format_utcoffset($buf, $buflen, $sep, $tzinfo, $tzinfoarg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 45;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 45);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $buf_addr = __stackBase__;
      var $buflen_addr = __stackBase__ + 4;
      var $sep_addr = __stackBase__ + 8;
      var $tzinfo_addr = __stackBase__ + 12;
      var $tzinfoarg_addr = __stackBase__ + 16;
      var $retval = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $offset = __stackBase__ + 28;
      var $hours = __stackBase__ + 32;
      var $minutes = __stackBase__ + 36;
      var $sign = __stackBase__ + 40;
      var $none = __stackBase__ + 41;
      
      HEAP[$buf_addr] = $buf;
      HEAP[$buflen_addr] = $buflen;
      HEAP[$sep_addr] = $sep;
      HEAP[$tzinfo_addr] = $tzinfo;
      HEAP[$tzinfoarg_addr] = $tzinfoarg;
      
      
      if (HEAP[$buflen_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str72, __str1, 1121, ___PRETTY_FUNCTION___9346);
      throw "Reached an unreachable!";
     case 2:
      var $3 = HEAP[$tzinfo_addr];
      var $4 = HEAP[$tzinfoarg_addr];
      var $5 = _call_utcoffset($3, $4, $none);
      HEAP[$offset] = $5;
      
      var $7 = HEAP[$offset] == -1;
      if ($7) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $8 = _PyErr_Occurred();
      
      if ($8 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 5:
      
      
      if (HEAP[$none] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $12 = HEAP[$buf_addr];
      HEAP[$12] = 0;
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 7:
      HEAP[$sign] = 43;
      
      
      if (HEAP[$offset] < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$sign] = 45;
      
      var $16 = 0 - HEAP[$offset];
      HEAP[$offset] = $16;
      __label__ = 9;
      break;
     case 9:
      var $17 = HEAP[$offset];
      var $18 = _divmod($17, 60, $minutes);
      HEAP[$hours] = $18;
      var $19 = HEAP[$minutes];
      
      var $21 = HEAP[$sign];
      var $22 = HEAP[$buf_addr];
      var $23 = HEAP[$buflen_addr];
      var $24 = HEAP[$hours];
      var $25 = HEAP[$sep_addr];
      var $26 = _PyOS_snprintf($22, $23, __str73, allocate([ $21, 0, 0, 0, $24, 0, 0, 0, $25, 0, 0, 0, $19, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 10:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
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
  function _make_freplacement($object) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 76;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 76);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $object_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $freplacement = __stackBase__ + 12;
      
      HEAP[$object_addr] = $object;
      
      
      
      
      if (HEAP[HEAP[$object_addr] + 4] == _PyDateTime_TimeType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$object_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_TimeType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $31 = HEAP[HEAP[$object_addr] + 13 + 3] << 16 | HEAP[HEAP[$object_addr] + 13 + 4] << 8 | HEAP[HEAP[$object_addr] + 13 + 5];
      var $freplacement2 = $freplacement;
      var $32 = _sprintf($freplacement2, __str74, allocate([ $31, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$object_addr] + 4] == _PyDateTime_DateTimeType) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      var $39 = HEAP[HEAP[$object_addr] + 4];
      var $40 = _PyType_IsSubtype($39, _PyDateTime_DateTimeType);
      
      if ($40 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $63 = HEAP[HEAP[$object_addr] + 13 + 7] << 16 | HEAP[HEAP[$object_addr] + 13 + 8] << 8 | HEAP[HEAP[$object_addr] + 13 + 9];
      var $freplacement6 = $freplacement;
      var $64 = _sprintf($freplacement6, __str74, allocate([ $63, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 7;
      break;
     case 6:
      var $freplacement8 = $freplacement;
      var $65 = _sprintf($freplacement8, __str74, allocate(4, "i32", ALLOC_STACK));
      __label__ = 7;
      break;
     case 7:
      var $freplacement10 = $freplacement;
      var $66 = _strlen($freplacement10);
      var $freplacement11 = $freplacement;
      var $67 = _PyString_FromStringAndSize($freplacement11, $66);
      HEAP[$0] = $67;
      var $68 = HEAP[$0];
      HEAP[$retval] = $68;
      __label__ = 8;
      break;
     case 8:
      var $retval12 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _wrap_strftime($object, $format, $format_len, $timetuple, $tzinfoarg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 201;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 201);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $object_addr = __stackBase__;
      var $format_addr = __stackBase__ + 4;
      var $format_len_addr = __stackBase__ + 8;
      var $timetuple_addr = __stackBase__ + 12;
      var $tzinfoarg_addr = __stackBase__ + 16;
      var $retval = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $result = __stackBase__ + 28;
      var $zreplacement = __stackBase__ + 32;
      var $Zreplacement = __stackBase__ + 36;
      var $freplacement = __stackBase__ + 40;
      var $pin = __stackBase__ + 44;
      var $ch = __stackBase__ + 48;
      var $newfmt = __stackBase__ + 49;
      var $pnew = __stackBase__ + 53;
      var $totalnew = __stackBase__ + 57;
      var $usednew = __stackBase__ + 61;
      var $ptoappend = __stackBase__ + 65;
      var $ntoappend = __stackBase__ + 69;
      var $year = __stackBase__ + 73;
      var $pyyear = __stackBase__ + 77;
      var $buf = __stackBase__ + 81;
      var $tzinfo = __stackBase__ + 181;
      var $tzinfo38 = __stackBase__ + 185;
      var $temp = __stackBase__ + 189;
      var $bigger = __stackBase__ + 193;
      var $time = __stackBase__ + 197;
      
      HEAP[$object_addr] = $object;
      HEAP[$format_addr] = $format;
      HEAP[$format_len_addr] = $format_len;
      HEAP[$timetuple_addr] = $timetuple;
      HEAP[$tzinfoarg_addr] = $tzinfoarg;
      HEAP[$result] = 0;
      HEAP[$zreplacement] = 0;
      HEAP[$Zreplacement] = 0;
      HEAP[$freplacement] = 0;
      HEAP[$newfmt] = 0;
      
      
      if (HEAP[$object_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$format_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$timetuple_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str75, __str1, 1183, ___PRETTY_FUNCTION___9433);
      throw "Reached an unreachable!";
     case 4:
      var $7 = HEAP[$timetuple_addr];
      var $8 = _PySequence_GetItem($7, 0);
      HEAP[$pyyear] = $8;
      
      
      if (HEAP[$pyyear] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 96;
      break;
     case 6:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$pyyear] + 4] + 84] & 8388608) == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      ___assert_fail(__str76, __str1, 1198, ___PRETTY_FUNCTION___9433);
      throw "Reached an unreachable!";
     case 8:
      var $18 = HEAP[$pyyear];
      var $19 = _PyInt_AsLong($18);
      HEAP[$year] = $19;
      
      
      
      var $23 = HEAP[HEAP[$pyyear]] - 1;
      
      var $25 = HEAP[$pyyear];
      HEAP[$25] = $23;
      
      
      
      
      if (HEAP[HEAP[$pyyear]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $34 = HEAP[HEAP[HEAP[$pyyear] + 4] + 24];
      var $35 = HEAP[$pyyear];
      FUNCTION_TABLE[$34]($35);
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$year] <= 1899) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $38 = HEAP[_PyExc_ValueError];
      var $39 = HEAP[$year];
      var $40 = _PyErr_Format($38, __str77, allocate([ $39, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 96;
      break;
     case 12:
      
      
      if (HEAP[$format_len_addr] > 2147483646) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $43 = _PyErr_NoMemory();
      __label__ = 83;
      break;
     case 14:
      
      var $45 = HEAP[$format_len_addr] + 1;
      HEAP[$totalnew] = $45;
      var $46 = HEAP[$totalnew];
      var $47 = _PyString_FromStringAndSize(0, $46);
      HEAP[$newfmt] = $47;
      
      
      if (HEAP[$newfmt] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $50 = HEAP[$newfmt];
      var $51 = _PyString_AsString($50);
      HEAP[$pnew] = $51;
      HEAP[$usednew] = 0;
      var $52 = HEAP[$format_addr];
      HEAP[$pin] = $52;
      __label__ = 78;
      break;
     case 16:
      
      
      if (HEAP[$ch] != 37) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      var $56 = HEAP[$pin] + -1;
      HEAP[$ptoappend] = $56;
      HEAP[$ntoappend] = 1;
      __label__ = 67;
      break;
     case 18:
      
      var $58 = HEAP[HEAP[$pin]];
      HEAP[$ch] = $58;
      
      
      var $61 = HEAP[$ch] == 0;
      
      var $63 = HEAP[$pin] + 1;
      HEAP[$pin] = $63;
      
      if ($61 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $64 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($64, __str78);
      __label__ = 83;
      break;
     case 20:
      
      
      if (HEAP[$ch] == 122) {
        __label__ = 21;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 21:
      
      
      if (HEAP[$zreplacement] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 22:
      var $69 = HEAP[$object_addr];
      var $70 = _get_tzinfo_member($69);
      HEAP[$tzinfo] = $70;
      var $71 = _PyString_FromString(__str79);
      HEAP[$zreplacement] = $71;
      
      
      if (HEAP[$zreplacement] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      if (HEAP[$tzinfo] != __Py_NoneStruct) {
        __label__ = 24;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 24:
      
      
      if (HEAP[$tzinfo] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 25:
      
      
      if (HEAP[$tzinfoarg_addr] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      ___assert_fail(__str38, __str1, 1246, ___PRETTY_FUNCTION___9433);
      throw "Reached an unreachable!";
     case 27:
      var $buf27 = $buf;
      var $80 = HEAP[$tzinfo];
      var $81 = HEAP[$tzinfoarg_addr];
      var $82 = _format_utcoffset($buf27, 100, __str79, $80, $81);
      
      if ($82 < 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      var $87 = HEAP[HEAP[$zreplacement]] - 1;
      
      var $89 = HEAP[$zreplacement];
      HEAP[$89] = $87;
      
      
      
      
      if (HEAP[HEAP[$zreplacement]] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $98 = HEAP[HEAP[HEAP[$zreplacement] + 4] + 24];
      var $99 = HEAP[$zreplacement];
      FUNCTION_TABLE[$98]($99);
      __label__ = 30;
      break;
     case 30:
      var $buf31 = $buf;
      var $100 = _PyString_FromString($buf31);
      HEAP[$zreplacement] = $100;
      
      
      if (HEAP[$zreplacement] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      if (HEAP[$zreplacement] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      ___assert_fail(__str80, __str1, 1258, ___PRETTY_FUNCTION___9433);
      throw "Reached an unreachable!";
     case 33:
      
      
      
      var $108 = HEAP[$zreplacement] + 20;
      HEAP[$ptoappend] = $108;
      
      
      
      var $112 = HEAP[HEAP[$zreplacement] + 8];
      HEAP[$ntoappend] = $112;
      __label__ = 67;
      break;
     case 34:
      
      
      if (HEAP[$ch] == 90) {
        __label__ = 35;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 35:
      
      
      if (HEAP[$Zreplacement] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 36:
      var $117 = HEAP[$object_addr];
      var $118 = _get_tzinfo_member($117);
      HEAP[$tzinfo38] = $118;
      var $119 = _PyString_FromString(__str79);
      HEAP[$Zreplacement] = $119;
      
      
      if (HEAP[$Zreplacement] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      if (HEAP[$tzinfo38] != __Py_NoneStruct) {
        __label__ = 38;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 38:
      
      
      if (HEAP[$tzinfo38] != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 39:
      
      
      if (HEAP[$tzinfoarg_addr] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      ___assert_fail(__str38, __str1, 1270, ___PRETTY_FUNCTION___9433);
      throw "Reached an unreachable!";
     case 41:
      var $128 = HEAP[$tzinfo38];
      var $129 = HEAP[$tzinfoarg_addr];
      var $130 = _call_tzname($128, $129);
      HEAP[$temp] = $130;
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      
      
      if (HEAP[$temp] != __Py_NoneStruct) {
        __label__ = 43;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 43:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$temp] + 4] + 84] & 134217728) == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      ___assert_fail(__str81, __str1, 1274, ___PRETTY_FUNCTION___9433);
      throw "Reached an unreachable!";
     case 45:
      
      
      
      var $145 = HEAP[HEAP[$Zreplacement]] - 1;
      
      var $147 = HEAP[$Zreplacement];
      HEAP[$147] = $145;
      
      
      
      
      if (HEAP[HEAP[$Zreplacement]] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      
      
      var $156 = HEAP[HEAP[HEAP[$Zreplacement] + 4] + 24];
      var $157 = HEAP[$Zreplacement];
      FUNCTION_TABLE[$156]($157);
      __label__ = 47;
      break;
     case 47:
      var $158 = HEAP[$temp];
      var $159 = __PyObject_CallMethod_SizeT($158, __str82, __str83, allocate([ __str84, 0, 0, 0, __str85, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$Zreplacement] = $159;
      
      
      
      var $163 = HEAP[HEAP[$temp]] - 1;
      
      var $165 = HEAP[$temp];
      HEAP[$165] = $163;
      
      
      
      
      if (HEAP[HEAP[$temp]] == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      
      
      
      var $174 = HEAP[HEAP[HEAP[$temp] + 4] + 24];
      var $175 = HEAP[$temp];
      FUNCTION_TABLE[$174]($175);
      __label__ = 49;
      break;
     case 49:
      
      
      if (HEAP[$Zreplacement] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 50:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$Zreplacement] + 4] + 84] & 134217728) == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      var $185 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($185, __str86);
      __label__ = 83;
      break;
     case 52:
      __label__ = 55;
      break;
     case 53:
      
      
      
      var $189 = HEAP[HEAP[$temp]] - 1;
      
      var $191 = HEAP[$temp];
      HEAP[$191] = $189;
      
      
      
      
      if (HEAP[HEAP[$temp]] == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      
      
      
      
      var $200 = HEAP[HEAP[HEAP[$temp] + 4] + 24];
      var $201 = HEAP[$temp];
      FUNCTION_TABLE[$200]($201);
      __label__ = 55;
      break;
     case 55:
      
      
      if (HEAP[$Zreplacement] == 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      ___assert_fail(__str87, __str1, 1297, ___PRETTY_FUNCTION___9433);
      throw "Reached an unreachable!";
     case 57:
      
      
      
      var $207 = HEAP[$Zreplacement] + 20;
      HEAP[$ptoappend] = $207;
      
      
      
      var $211 = HEAP[HEAP[$Zreplacement] + 8];
      HEAP[$ntoappend] = $211;
      __label__ = 67;
      break;
     case 58:
      
      
      if (HEAP[$ch] == 102) {
        __label__ = 59;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 59:
      
      
      if (HEAP[$freplacement] == 0) {
        __label__ = 60;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 60:
      var $216 = HEAP[$object_addr];
      var $217 = _make_freplacement($216);
      HEAP[$freplacement] = $217;
      
      
      if (HEAP[$freplacement] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 61:
      
      
      if (HEAP[$freplacement] == 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 62:
      ___assert_fail(__str88, __str1, 1308, ___PRETTY_FUNCTION___9433);
      throw "Reached an unreachable!";
     case 63:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$freplacement] + 4] + 84] & 134217728) == 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 64:
      ___assert_fail(__str89, __str1, 1309, ___PRETTY_FUNCTION___9433);
      throw "Reached an unreachable!";
     case 65:
      
      
      
      var $232 = HEAP[$freplacement] + 20;
      HEAP[$ptoappend] = $232;
      
      
      
      var $236 = HEAP[HEAP[$freplacement] + 8];
      HEAP[$ntoappend] = $236;
      __label__ = 67;
      break;
     case 66:
      
      var $238 = HEAP[$pin] + -2;
      HEAP[$ptoappend] = $238;
      HEAP[$ntoappend] = 2;
      __label__ = 67;
      break;
     case 67:
      
      
      if (HEAP[$ptoappend] == 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 68:
      ___assert_fail(__str90, __str1, 1322, ___PRETTY_FUNCTION___9433);
      throw "Reached an unreachable!";
     case 69:
      
      
      if (HEAP[$ntoappend] == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 70:
      __label__ = 75;
      break;
     case 71:
      
      var $244 = HEAP[$totalnew] << 1;
      HEAP[$bigger] = $244;
      
      
      
      
      if (HEAP[$bigger] >>> 1 != HEAP[$totalnew]) {
        __label__ = 72;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 72:
      var $249 = _PyErr_NoMemory();
      __label__ = 83;
      break;
     case 73:
      var $250 = HEAP[$bigger];
      var $251 = __PyString_Resize($newfmt, $250);
      
      if ($251 < 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 74:
      var $253 = HEAP[$bigger];
      HEAP[$totalnew] = $253;
      var $254 = HEAP[$newfmt];
      var $255 = _PyString_AsString($254);
      
      var $257 = $255 + HEAP[$usednew];
      HEAP[$pnew] = $257;
      __label__ = 75;
      break;
     case 75:
      
      
      
      
      
      if (HEAP[$usednew] + HEAP[$ntoappend] > HEAP[$totalnew]) {
        __label__ = 71;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 76:
      var $263 = HEAP[$pnew];
      var $264 = HEAP[$ptoappend];
      var $265 = HEAP[$ntoappend];
      _llvm_memcpy_p0i8_p0i8_i32($263, $264, $265, 1, 0);
      
      
      var $268 = HEAP[$pnew] + HEAP[$ntoappend];
      HEAP[$pnew] = $268;
      
      
      var $271 = HEAP[$usednew] + HEAP[$ntoappend];
      HEAP[$usednew] = $271;
      
      
      
      if (HEAP[$usednew] > HEAP[$totalnew]) {
        __label__ = 77;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 77:
      ___assert_fail(__str91, __str1, 1340, ___PRETTY_FUNCTION___9433);
      throw "Reached an unreachable!";
     case 78:
      
      var $276 = HEAP[HEAP[$pin]];
      HEAP[$ch] = $276;
      
      
      var $279 = HEAP[$ch] != 0;
      
      var $281 = HEAP[$pin] + 1;
      HEAP[$pin] = $281;
      
      if ($279 != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 79:
      var $282 = HEAP[$usednew];
      var $283 = __PyString_Resize($newfmt, $282);
      
      if ($283 < 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 80:
      var $285 = _PyImport_ImportModuleNoBlock(__str92);
      HEAP[$time] = $285;
      
      
      if (HEAP[$time] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 81:
      var $288 = HEAP[$newfmt];
      var $289 = HEAP[$time];
      var $290 = HEAP[$timetuple_addr];
      var $291 = __PyObject_CallMethod_SizeT($289, __str93, __str94, allocate([ $288, 0, 0, 0, $290, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $291;
      
      
      
      var $295 = HEAP[HEAP[$time]] - 1;
      
      var $297 = HEAP[$time];
      HEAP[$297] = $295;
      
      
      
      
      if (HEAP[HEAP[$time]] == 0) {
        __label__ = 82;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 82:
      
      
      
      
      var $306 = HEAP[HEAP[HEAP[$time] + 4] + 24];
      var $307 = HEAP[$time];
      FUNCTION_TABLE[$306]($307);
      __label__ = 83;
      break;
     case 83:
      
      
      if (HEAP[$freplacement] != 0) {
        __label__ = 84;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 84:
      
      
      
      var $313 = HEAP[HEAP[$freplacement]] - 1;
      
      var $315 = HEAP[$freplacement];
      HEAP[$315] = $313;
      
      
      
      
      if (HEAP[HEAP[$freplacement]] == 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      
      
      
      
      var $324 = HEAP[HEAP[HEAP[$freplacement] + 4] + 24];
      var $325 = HEAP[$freplacement];
      FUNCTION_TABLE[$324]($325);
      __label__ = 86;
      break;
     case 86:
      
      
      if (HEAP[$zreplacement] != 0) {
        __label__ = 87;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 87:
      
      
      
      var $331 = HEAP[HEAP[$zreplacement]] - 1;
      
      var $333 = HEAP[$zreplacement];
      HEAP[$333] = $331;
      
      
      
      
      if (HEAP[HEAP[$zreplacement]] == 0) {
        __label__ = 88;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 88:
      
      
      
      
      var $342 = HEAP[HEAP[HEAP[$zreplacement] + 4] + 24];
      var $343 = HEAP[$zreplacement];
      FUNCTION_TABLE[$342]($343);
      __label__ = 89;
      break;
     case 89:
      
      
      if (HEAP[$Zreplacement] != 0) {
        __label__ = 90;
        break;
      } else {
        __label__ = 92;
        break;
      }
     case 90:
      
      
      
      var $349 = HEAP[HEAP[$Zreplacement]] - 1;
      
      var $351 = HEAP[$Zreplacement];
      HEAP[$351] = $349;
      
      
      
      
      if (HEAP[HEAP[$Zreplacement]] == 0) {
        __label__ = 91;
        break;
      } else {
        __label__ = 92;
        break;
      }
     case 91:
      
      
      
      
      var $360 = HEAP[HEAP[HEAP[$Zreplacement] + 4] + 24];
      var $361 = HEAP[$Zreplacement];
      FUNCTION_TABLE[$360]($361);
      __label__ = 92;
      break;
     case 92:
      
      
      if (HEAP[$newfmt] != 0) {
        __label__ = 93;
        break;
      } else {
        __label__ = 95;
        break;
      }
     case 93:
      var $364 = HEAP[$newfmt];
      
      
      var $367 = HEAP[$364] - 1;
      var $368 = $364;
      HEAP[$368] = $367;
      
      
      
      if (HEAP[$364] == 0) {
        __label__ = 94;
        break;
      } else {
        __label__ = 95;
        break;
      }
     case 94:
      
      
      
      
      var $376 = HEAP[HEAP[HEAP[$newfmt] + 4] + 24];
      var $377 = HEAP[$newfmt];
      FUNCTION_TABLE[$376]($377);
      __label__ = 95;
      break;
     case 95:
      var $378 = HEAP[$result];
      HEAP[$0] = $378;
      __label__ = 96;
      break;
     case 96:
      var $379 = HEAP[$0];
      HEAP[$retval] = $379;
      __label__ = 97;
      break;
     case 97:
      var $retval99 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval99;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _isoformat_date($dt, $buffer, $bufflen) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dt_addr = __stackBase__;
      var $buffer_addr = __stackBase__ + 4;
      var $bufflen_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[$dt_addr] = $dt;
      HEAP[$buffer_addr] = $buffer;
      HEAP[$bufflen_addr] = $bufflen;
      
      
      
      
      var $5 = HEAP[HEAP[$dt_addr] + 13 + 3];
      
      
      
      
      var $10 = HEAP[HEAP[$dt_addr] + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      var $22 = HEAP[HEAP[$dt_addr] + 13] << 8 | HEAP[HEAP[$dt_addr] + 13 + 1];
      var $23 = HEAP[$bufflen_addr];
      var $24 = HEAP[$buffer_addr];
      var $25 = _PyOS_snprintf($24, $23, __str95, allocate([ $22, 0, 0, 0, $10, 0, 0, 0, $5, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$x] = $25;
      
      
      
      if (HEAP[$bufflen_addr] < HEAP[$x]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str96, __str1, 1368, ___PRETTY_FUNCTION___9670);
      throw "Reached an unreachable!";
     case 2:
      
      
      var $31 = HEAP[$buffer_addr] + HEAP[$x];
      HEAP[$0] = $31;
      var $32 = HEAP[$0];
      HEAP[$retval] = $32;
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
  function _isoformat_time($dt, $buffer, $bufflen) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dt_addr = __stackBase__;
      var $buffer_addr = __stackBase__ + 4;
      var $bufflen_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      var $us = __stackBase__ + 24;
      
      HEAP[$dt_addr] = $dt;
      HEAP[$buffer_addr] = $buffer;
      HEAP[$bufflen_addr] = $bufflen;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $19 = HEAP[HEAP[$dt_addr] + 13 + 7] << 16 | HEAP[HEAP[$dt_addr] + 13 + 8] << 8 | HEAP[HEAP[$dt_addr] + 13 + 9];
      HEAP[$us] = $19;
      
      
      
      
      var $24 = HEAP[HEAP[$dt_addr] + 13 + 6];
      
      
      
      
      var $29 = HEAP[HEAP[$dt_addr] + 13 + 5];
      
      
      
      
      var $34 = HEAP[HEAP[$dt_addr] + 13 + 4];
      var $35 = HEAP[$bufflen_addr];
      var $36 = HEAP[$buffer_addr];
      var $37 = _PyOS_snprintf($36, $35, __str97, allocate([ $34, 0, 0, 0, $29, 0, 0, 0, $24, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$x] = $37;
      
      
      
      if (HEAP[$bufflen_addr] < HEAP[$x]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str96, __str1, 1383, ___PRETTY_FUNCTION___9694);
      throw "Reached an unreachable!";
     case 2:
      
      
      if (HEAP[$us] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $45 = HEAP[$bufflen_addr] - HEAP[$x];
      
      
      var $48 = HEAP[$buffer_addr] + HEAP[$x];
      var $49 = HEAP[$us];
      var $50 = _PyOS_snprintf($48, $45, __str98, allocate([ $49, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      
      var $52 = $50 + HEAP[$x];
      HEAP[$x] = $52;
      __label__ = 4;
      break;
     case 4:
      
      
      
      if (HEAP[$bufflen_addr] < HEAP[$x]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str96, __str1, 1386, ___PRETTY_FUNCTION___9694);
      throw "Reached an unreachable!";
     case 6:
      
      
      var $58 = HEAP[$buffer_addr] + HEAP[$x];
      HEAP[$0] = $58;
      var $59 = HEAP[$0];
      HEAP[$retval] = $59;
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
  function _time_time() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval = __stackBase__;
      var $0 = __stackBase__ + 4;
      var $result = __stackBase__ + 8;
      var $time = __stackBase__ + 12;
      
      HEAP[$result] = 0;
      var $1 = _PyImport_ImportModuleNoBlock(__str92);
      HEAP[$time] = $1;
      
      
      if (HEAP[$time] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $4 = HEAP[$time];
      var $5 = __PyObject_CallMethod_SizeT($4, __str92, __str99, allocate(1, "i32", ALLOC_STACK));
      HEAP[$result] = $5;
      
      
      
      var $9 = HEAP[HEAP[$time]] - 1;
      
      var $11 = HEAP[$time];
      HEAP[$11] = $9;
      
      
      
      
      if (HEAP[HEAP[$time]] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[$time] + 4] + 24];
      var $21 = HEAP[$time];
      FUNCTION_TABLE[$20]($21);
      __label__ = 3;
      break;
     case 3:
      var $22 = HEAP[$result];
      HEAP[$0] = $22;
      var $23 = HEAP[$0];
      HEAP[$retval] = $23;
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
  function _build_struct_time($y, $m, $d, $hh, $mm, $ss, $dstflag) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $y_addr = __stackBase__;
      var $m_addr = __stackBase__ + 4;
      var $d_addr = __stackBase__ + 8;
      var $hh_addr = __stackBase__ + 12;
      var $mm_addr = __stackBase__ + 16;
      var $ss_addr = __stackBase__ + 20;
      var $dstflag_addr = __stackBase__ + 24;
      var $retval = __stackBase__ + 28;
      var $0 = __stackBase__ + 32;
      var $time = __stackBase__ + 36;
      var $result = __stackBase__ + 40;
      
      HEAP[$y_addr] = $y;
      HEAP[$m_addr] = $m;
      HEAP[$d_addr] = $d;
      HEAP[$hh_addr] = $hh;
      HEAP[$mm_addr] = $mm;
      HEAP[$ss_addr] = $ss;
      HEAP[$dstflag_addr] = $dstflag;
      HEAP[$result] = 0;
      var $1 = _PyImport_ImportModuleNoBlock(__str92);
      HEAP[$time] = $1;
      
      
      if (HEAP[$time] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $4 = HEAP[$y_addr];
      var $5 = HEAP[$m_addr];
      var $6 = _days_before_month($4, $5);
      
      var $8 = $6 + HEAP[$d_addr];
      var $9 = HEAP[$y_addr];
      var $10 = HEAP[$m_addr];
      var $11 = HEAP[$d_addr];
      var $12 = _weekday($9, $10, $11);
      var $13 = HEAP[$time];
      var $14 = HEAP[$y_addr];
      var $15 = HEAP[$m_addr];
      var $16 = HEAP[$d_addr];
      var $17 = HEAP[$hh_addr];
      var $18 = HEAP[$mm_addr];
      var $19 = HEAP[$ss_addr];
      var $20 = HEAP[$dstflag_addr];
      var $21 = __PyObject_CallMethod_SizeT($13, __str100, __str101, allocate([ $14, 0, 0, 0, $15, 0, 0, 0, $16, 0, 0, 0, $17, 0, 0, 0, $18, 0, 0, 0, $19, 0, 0, 0, $12, 0, 0, 0, $8, 0, 0, 0, $20, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $21;
      
      
      
      var $25 = HEAP[HEAP[$time]] - 1;
      
      var $27 = HEAP[$time];
      HEAP[$27] = $25;
      
      
      
      
      if (HEAP[HEAP[$time]] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[$time] + 4] + 24];
      var $37 = HEAP[$time];
      FUNCTION_TABLE[$36]($37);
      __label__ = 3;
      break;
     case 3:
      var $38 = HEAP[$result];
      HEAP[$0] = $38;
      var $39 = HEAP[$0];
      HEAP[$retval] = $39;
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
  function _diff_to_bool($diff, $op) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $diff_addr = __stackBase__;
      var $op_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $iftmp_83 = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      var $istrue = __stackBase__ + 24;
      
      HEAP[$diff_addr] = $diff;
      HEAP[$op_addr] = $op;
      var $1 = HEAP[$op_addr];
      if ($1 == 0) {
        __label__ = 5;
        break;
      } else if ($1 == 1) {
        __label__ = 3;
        break;
      } else if ($1 == 2) {
        __label__ = 1;
        break;
      } else if ($1 == 3) {
        __label__ = 2;
        break;
      } else if ($1 == 4) {
        __label__ = 6;
        break;
      } else if ($1 == 5) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      var $4 = HEAP[$diff_addr] == 0;
      HEAP[$istrue] = $4;
      __label__ = 8;
      break;
     case 2:
      
      
      var $7 = HEAP[$diff_addr] != 0;
      HEAP[$istrue] = $7;
      __label__ = 8;
      break;
     case 3:
      
      
      var $10 = HEAP[$diff_addr] <= 0;
      HEAP[$istrue] = $10;
      __label__ = 8;
      break;
     case 4:
      
      
      var $13 = HEAP[$diff_addr] >= 0;
      HEAP[$istrue] = $13;
      __label__ = 8;
      break;
     case 5:
      
      
      var $16 = HEAP[$diff_addr] < 0;
      HEAP[$istrue] = $16;
      __label__ = 8;
      break;
     case 6:
      
      
      var $19 = HEAP[$diff_addr] > 0;
      HEAP[$istrue] = $19;
      __label__ = 8;
      break;
     case 7:
      ___assert_fail(__str102, __str1, 1454, ___PRETTY_FUNCTION___9783);
      throw "Reached an unreachable!";
     case 8:
      
      
      if (HEAP[$istrue] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$iftmp_83] = __Py_TrueStruct;
      __label__ = 11;
      break;
     case 10:
      HEAP[$iftmp_83] = __Py_ZeroStruct;
      __label__ = 11;
      break;
     case 11:
      var $22 = HEAP[$iftmp_83];
      HEAP[$result] = $22;
      
      
      
      var $26 = HEAP[HEAP[$result]] + 1;
      
      var $28 = HEAP[$result];
      HEAP[$28] = $26;
      var $29 = HEAP[$result];
      HEAP[$0] = $29;
      var $30 = HEAP[$0];
      HEAP[$retval] = $30;
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
  function _cmperror($a, $b) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr = __stackBase__;
      var $b_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$a_addr] = $a;
      HEAP[$b_addr] = $b;
      
      
      
      
      var $5 = HEAP[HEAP[HEAP[$b_addr] + 4] + 12];
      
      
      
      
      var $10 = HEAP[HEAP[HEAP[$a_addr] + 4] + 12];
      var $11 = HEAP[_PyExc_TypeError];
      var $12 = _PyErr_Format($11, __str103, allocate([ $10, 0, 0, 0, $5, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
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
  function _delta_to_microseconds($self) {
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
      var $x1 = __stackBase__ + 12;
      var $x2 = __stackBase__ + 16;
      var $x3 = __stackBase__ + 20;
      var $result = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$x1] = 0;
      HEAP[$x2] = 0;
      HEAP[$x3] = 0;
      HEAP[$result] = 0;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 12];
      var $4 = _PyInt_FromLong($3);
      HEAP[$x1] = $4;
      
      
      if (HEAP[$x1] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $7 = HEAP[_seconds_per_day];
      var $8 = HEAP[$x1];
      var $9 = _PyNumber_Multiply($8, $7);
      HEAP[$x2] = $9;
      
      
      if (HEAP[$x2] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $15 = HEAP[HEAP[$x1]] - 1;
      
      var $17 = HEAP[$x1];
      HEAP[$17] = $15;
      
      
      
      
      if (HEAP[HEAP[$x1]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $26 = HEAP[HEAP[HEAP[$x1] + 4] + 24];
      var $27 = HEAP[$x1];
      FUNCTION_TABLE[$26]($27);
      __label__ = 4;
      break;
     case 4:
      HEAP[$x1] = 0;
      
      
      var $30 = HEAP[HEAP[$self_addr] + 16];
      var $31 = _PyInt_FromLong($30);
      HEAP[$x1] = $31;
      
      
      if (HEAP[$x1] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $34 = HEAP[$x1];
      var $35 = HEAP[$x2];
      var $36 = _PyNumber_Add($34, $35);
      HEAP[$x3] = $36;
      
      
      if (HEAP[$x3] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $42 = HEAP[HEAP[$x1]] - 1;
      
      var $44 = HEAP[$x1];
      HEAP[$44] = $42;
      
      
      
      
      if (HEAP[HEAP[$x1]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $53 = HEAP[HEAP[HEAP[$x1] + 4] + 24];
      var $54 = HEAP[$x1];
      FUNCTION_TABLE[$53]($54);
      __label__ = 8;
      break;
     case 8:
      
      
      
      var $58 = HEAP[HEAP[$x2]] - 1;
      
      var $60 = HEAP[$x2];
      HEAP[$60] = $58;
      
      
      
      
      if (HEAP[HEAP[$x2]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $69 = HEAP[HEAP[HEAP[$x2] + 4] + 24];
      var $70 = HEAP[$x2];
      FUNCTION_TABLE[$69]($70);
      __label__ = 10;
      break;
     case 10:
      HEAP[$x2] = 0;
      var $71 = HEAP[_us_per_second];
      var $72 = HEAP[$x3];
      var $73 = _PyNumber_Multiply($72, $71);
      HEAP[$x1] = $73;
      
      
      if (HEAP[$x1] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      var $79 = HEAP[HEAP[$x3]] - 1;
      
      var $81 = HEAP[$x3];
      HEAP[$81] = $79;
      
      
      
      
      if (HEAP[HEAP[$x3]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $90 = HEAP[HEAP[HEAP[$x3] + 4] + 24];
      var $91 = HEAP[$x3];
      FUNCTION_TABLE[$90]($91);
      __label__ = 13;
      break;
     case 13:
      HEAP[$x3] = 0;
      
      
      var $94 = HEAP[HEAP[$self_addr] + 20];
      var $95 = _PyInt_FromLong($94);
      HEAP[$x2] = $95;
      
      
      if (HEAP[$x2] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      var $98 = HEAP[$x1];
      var $99 = HEAP[$x2];
      var $100 = _PyNumber_Add($98, $99);
      HEAP[$result] = $100;
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$x1] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      var $106 = HEAP[HEAP[$x1]] - 1;
      
      var $108 = HEAP[$x1];
      HEAP[$108] = $106;
      
      
      
      
      if (HEAP[HEAP[$x1]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $117 = HEAP[HEAP[HEAP[$x1] + 4] + 24];
      var $118 = HEAP[$x1];
      FUNCTION_TABLE[$117]($118);
      __label__ = 18;
      break;
     case 18:
      
      
      if (HEAP[$x2] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      
      var $124 = HEAP[HEAP[$x2]] - 1;
      
      var $126 = HEAP[$x2];
      HEAP[$126] = $124;
      
      
      
      
      if (HEAP[HEAP[$x2]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $135 = HEAP[HEAP[HEAP[$x2] + 4] + 24];
      var $136 = HEAP[$x2];
      FUNCTION_TABLE[$135]($136);
      __label__ = 21;
      break;
     case 21:
      
      
      if (HEAP[$x3] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      
      var $142 = HEAP[HEAP[$x3]] - 1;
      
      var $144 = HEAP[$x3];
      HEAP[$144] = $142;
      
      
      
      
      if (HEAP[HEAP[$x3]] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $153 = HEAP[HEAP[HEAP[$x3] + 4] + 24];
      var $154 = HEAP[$x3];
      FUNCTION_TABLE[$153]($154);
      __label__ = 24;
      break;
     case 24:
      var $155 = HEAP[$result];
      HEAP[$0] = $155;
      var $156 = HEAP[$0];
      HEAP[$retval] = $156;
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
  function _microseconds_to_delta_ex($pyus, $type) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pyus_addr = __stackBase__;
      var $type_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $us = __stackBase__ + 16;
      var $s = __stackBase__ + 20;
      var $d = __stackBase__ + 24;
      var $temp = __stackBase__ + 28;
      var $tuple = __stackBase__ + 32;
      var $num = __stackBase__ + 36;
      var $result = __stackBase__ + 40;
      
      HEAP[$pyus_addr] = $pyus;
      HEAP[$type_addr] = $type;
      HEAP[$tuple] = 0;
      HEAP[$num] = 0;
      HEAP[$result] = 0;
      var $1 = HEAP[_us_per_second];
      var $2 = HEAP[$pyus_addr];
      var $3 = _PyNumber_Divmod($2, $1);
      HEAP[$tuple] = $3;
      
      
      if (HEAP[$tuple] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $6 = HEAP[$tuple];
      var $7 = _PyTuple_GetItem($6, 1);
      HEAP[$num] = $7;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $10 = HEAP[$num];
      var $11 = _PyLong_AsLong($10);
      HEAP[$temp] = $11;
      HEAP[$num] = 0;
      
      var $13 = HEAP[$temp] == -1;
      if ($13) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $14 = _PyErr_Occurred();
      
      if ($14 != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if (HEAP[$temp] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      if (HEAP[$temp] > 999999) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      ___assert_fail(__str104, __str1, 1573, ___PRETTY_FUNCTION___9906);
      throw "Reached an unreachable!";
     case 7:
      var $20 = HEAP[$temp];
      HEAP[$us] = $20;
      
      
      if (HEAP[$us] < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      var $23 = _PyErr_Occurred();
      
      if ($23 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      ___assert_fail(__str105, __str1, 1577, ___PRETTY_FUNCTION___9906);
      throw "Reached an unreachable!";
     case 10:
      __label__ = 33;
      break;
     case 11:
      var $25 = HEAP[$tuple];
      var $26 = _PyTuple_GetItem($25, 0);
      HEAP[$num] = $26;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      var $32 = HEAP[HEAP[$num]] + 1;
      
      var $34 = HEAP[$num];
      HEAP[$34] = $32;
      
      
      
      var $38 = HEAP[HEAP[$tuple]] - 1;
      
      var $40 = HEAP[$tuple];
      HEAP[$40] = $38;
      
      
      
      
      if (HEAP[HEAP[$tuple]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[$tuple] + 4] + 24];
      var $50 = HEAP[$tuple];
      FUNCTION_TABLE[$49]($50);
      __label__ = 14;
      break;
     case 14:
      var $51 = HEAP[_seconds_per_day];
      var $52 = HEAP[$num];
      var $53 = _PyNumber_Divmod($52, $51);
      HEAP[$tuple] = $53;
      
      
      if (HEAP[$tuple] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      var $59 = HEAP[HEAP[$num]] - 1;
      
      var $61 = HEAP[$num];
      HEAP[$61] = $59;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $70 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $71 = HEAP[$num];
      FUNCTION_TABLE[$70]($71);
      __label__ = 17;
      break;
     case 17:
      var $72 = HEAP[$tuple];
      var $73 = _PyTuple_GetItem($72, 1);
      HEAP[$num] = $73;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      var $76 = HEAP[$num];
      var $77 = _PyLong_AsLong($76);
      HEAP[$temp] = $77;
      HEAP[$num] = 0;
      
      var $79 = HEAP[$temp] == -1;
      if ($79) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $80 = _PyErr_Occurred();
      
      if ($80 != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      if (HEAP[$temp] < 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      if (HEAP[$temp] > 86399) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      ___assert_fail(__str106, __str1, 1599, ___PRETTY_FUNCTION___9906);
      throw "Reached an unreachable!";
     case 23:
      var $86 = HEAP[$temp];
      HEAP[$s] = $86;
      
      
      if (HEAP[$s] < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 24:
      var $89 = _PyErr_Occurred();
      
      if ($89 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      ___assert_fail(__str105, __str1, 1604, ___PRETTY_FUNCTION___9906);
      throw "Reached an unreachable!";
     case 26:
      __label__ = 33;
      break;
     case 27:
      var $91 = HEAP[$tuple];
      var $92 = _PyTuple_GetItem($91, 0);
      HEAP[$num] = $92;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      var $98 = HEAP[HEAP[$num]] + 1;
      
      var $100 = HEAP[$num];
      HEAP[$100] = $98;
      var $101 = HEAP[$num];
      var $102 = _PyLong_AsLong($101);
      HEAP[$temp] = $102;
      
      var $104 = HEAP[$temp] == -1;
      if ($104) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $105 = _PyErr_Occurred();
      
      if ($105 != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      var $107 = HEAP[$temp];
      HEAP[$d] = $107;
      
      
      
      if (HEAP[$d] != HEAP[$temp]) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      var $111 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($111, __str107);
      __label__ = 33;
      break;
     case 32:
      var $112 = HEAP[$d];
      var $113 = HEAP[$s];
      var $114 = HEAP[$us];
      var $115 = HEAP[$type_addr];
      var $116 = _new_delta_ex($112, $113, $114, 0, $115);
      HEAP[$result] = $116;
      __label__ = 33;
      break;
     case 33:
      
      
      if (HEAP[$tuple] != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 34:
      
      
      
      var $122 = HEAP[HEAP[$tuple]] - 1;
      
      var $124 = HEAP[$tuple];
      HEAP[$124] = $122;
      
      
      
      
      if (HEAP[HEAP[$tuple]] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $133 = HEAP[HEAP[HEAP[$tuple] + 4] + 24];
      var $134 = HEAP[$tuple];
      FUNCTION_TABLE[$133]($134);
      __label__ = 36;
      break;
     case 36:
      
      
      if (HEAP[$num] != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 37:
      
      
      
      var $140 = HEAP[HEAP[$num]] - 1;
      
      var $142 = HEAP[$num];
      HEAP[$142] = $140;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      var $151 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $152 = HEAP[$num];
      FUNCTION_TABLE[$151]($152);
      __label__ = 39;
      break;
     case 39:
      var $153 = HEAP[$result];
      HEAP[$0] = $153;
      var $154 = HEAP[$0];
      HEAP[$retval] = $154;
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
  function _multiply_int_timedelta($intobj, $delta) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $intobj_addr = __stackBase__;
      var $delta_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $pyus_in = __stackBase__ + 16;
      var $pyus_out = __stackBase__ + 20;
      var $result = __stackBase__ + 24;
      
      HEAP[$intobj_addr] = $intobj;
      HEAP[$delta_addr] = $delta;
      var $1 = HEAP[$delta_addr];
      var $2 = _delta_to_microseconds($1);
      HEAP[$pyus_in] = $2;
      
      
      if (HEAP[$pyus_in] == 0) {
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
      var $5 = HEAP[$pyus_in];
      var $6 = HEAP[$intobj_addr];
      var $7 = _PyNumber_Multiply($5, $6);
      HEAP[$pyus_out] = $7;
      
      
      
      var $11 = HEAP[HEAP[$pyus_in]] - 1;
      
      var $13 = HEAP[$pyus_in];
      HEAP[$13] = $11;
      
      
      
      
      if (HEAP[HEAP[$pyus_in]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$pyus_in] + 4] + 24];
      var $23 = HEAP[$pyus_in];
      FUNCTION_TABLE[$22]($23);
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[$pyus_out] == 0) {
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
      var $26 = HEAP[$pyus_out];
      var $27 = _microseconds_to_delta_ex($26, _PyDateTime_DeltaType);
      HEAP[$result] = $27;
      
      
      
      var $31 = HEAP[HEAP[$pyus_out]] - 1;
      
      var $33 = HEAP[$pyus_out];
      HEAP[$33] = $31;
      
      
      
      
      if (HEAP[HEAP[$pyus_out]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $42 = HEAP[HEAP[HEAP[$pyus_out] + 4] + 24];
      var $43 = HEAP[$pyus_out];
      FUNCTION_TABLE[$42]($43);
      __label__ = 8;
      break;
     case 8:
      var $44 = HEAP[$result];
      HEAP[$0] = $44;
      __label__ = 9;
      break;
     case 9:
      var $45 = HEAP[$0];
      HEAP[$retval] = $45;
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
  function _divide_timedelta_int($delta, $intobj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $delta_addr = __stackBase__;
      var $intobj_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $pyus_in = __stackBase__ + 16;
      var $pyus_out = __stackBase__ + 20;
      var $result = __stackBase__ + 24;
      
      HEAP[$delta_addr] = $delta;
      HEAP[$intobj_addr] = $intobj;
      var $1 = HEAP[$delta_addr];
      var $2 = _delta_to_microseconds($1);
      HEAP[$pyus_in] = $2;
      
      
      if (HEAP[$pyus_in] == 0) {
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
      var $5 = HEAP[$pyus_in];
      var $6 = HEAP[$intobj_addr];
      var $7 = _PyNumber_FloorDivide($5, $6);
      HEAP[$pyus_out] = $7;
      
      
      
      var $11 = HEAP[HEAP[$pyus_in]] - 1;
      
      var $13 = HEAP[$pyus_in];
      HEAP[$13] = $11;
      
      
      
      
      if (HEAP[HEAP[$pyus_in]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$pyus_in] + 4] + 24];
      var $23 = HEAP[$pyus_in];
      FUNCTION_TABLE[$22]($23);
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[$pyus_out] == 0) {
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
      var $26 = HEAP[$pyus_out];
      var $27 = _microseconds_to_delta_ex($26, _PyDateTime_DeltaType);
      HEAP[$result] = $27;
      
      
      
      var $31 = HEAP[HEAP[$pyus_out]] - 1;
      
      var $33 = HEAP[$pyus_out];
      HEAP[$33] = $31;
      
      
      
      
      if (HEAP[HEAP[$pyus_out]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $42 = HEAP[HEAP[HEAP[$pyus_out] + 4] + 24];
      var $43 = HEAP[$pyus_out];
      FUNCTION_TABLE[$42]($43);
      __label__ = 8;
      break;
     case 8:
      var $44 = HEAP[$result];
      HEAP[$0] = $44;
      __label__ = 9;
      break;
     case 9:
      var $45 = HEAP[$0];
      HEAP[$retval] = $45;
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
  function _delta_add($left, $right) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $left_addr = __stackBase__;
      var $right_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      var $days = __stackBase__ + 20;
      var $seconds = __stackBase__ + 24;
      var $microseconds = __stackBase__ + 28;
      
      HEAP[$left_addr] = $left;
      HEAP[$right_addr] = $right;
      HEAP[$result] = __Py_NotImplementedStruct;
      
      
      
      
      if (HEAP[HEAP[$left_addr] + 4] == _PyDateTime_DeltaType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$left_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DeltaType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$right_addr] + 4] == _PyDateTime_DeltaType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[HEAP[$right_addr] + 4];
      var $17 = _PyType_IsSubtype($16, _PyDateTime_DeltaType);
      
      if ($17 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      var $27 = HEAP[HEAP[$left_addr] + 12] + HEAP[HEAP[$right_addr] + 12];
      HEAP[$days] = $27;
      
      
      
      
      
      
      
      
      var $36 = HEAP[HEAP[$left_addr] + 16] + HEAP[HEAP[$right_addr] + 16];
      HEAP[$seconds] = $36;
      
      
      
      
      
      
      
      
      var $45 = HEAP[HEAP[$left_addr] + 20] + HEAP[HEAP[$right_addr] + 20];
      HEAP[$microseconds] = $45;
      var $46 = HEAP[$days];
      var $47 = HEAP[$seconds];
      var $48 = HEAP[$microseconds];
      var $49 = _new_delta_ex($46, $47, $48, 1, _PyDateTime_DeltaType);
      HEAP[$result] = $49;
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[$result] == __Py_NotImplementedStruct) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $55 = HEAP[HEAP[$result]] + 1;
      
      var $57 = HEAP[$result];
      HEAP[$57] = $55;
      __label__ = 7;
      break;
     case 7:
      var $58 = HEAP[$result];
      HEAP[$0] = $58;
      var $59 = HEAP[$0];
      HEAP[$retval] = $59;
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
  function _delta_negative($self) {
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
      
      
      
      var $4 = 0 - HEAP[HEAP[$self_addr] + 20];
      
      
      
      var $8 = 0 - HEAP[HEAP[$self_addr] + 16];
      
      
      
      var $12 = 0 - HEAP[HEAP[$self_addr] + 12];
      var $13 = _new_delta_ex($12, $8, $4, 1, _PyDateTime_DeltaType);
      HEAP[$0] = $13;
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
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
  function _delta_positive($self) {
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
      
      
      var $3 = HEAP[HEAP[$self_addr] + 20];
      
      
      var $6 = HEAP[HEAP[$self_addr] + 16];
      
      
      var $9 = HEAP[HEAP[$self_addr] + 12];
      var $10 = _new_delta_ex($9, $6, $3, 0, _PyDateTime_DeltaType);
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
  function _delta_abs($self) {
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
      var $result = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str108, __str1, 1722, ___PRETTY_FUNCTION___10117);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str109, __str1, 1723, ___PRETTY_FUNCTION___10117);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $13 = HEAP[$self_addr];
      var $14 = _delta_negative($13);
      HEAP[$result] = $14;
      __label__ = 7;
      break;
     case 6:
      var $15 = HEAP[$self_addr];
      var $16 = _delta_positive($15);
      HEAP[$result] = $16;
      __label__ = 7;
      break;
     case 7:
      var $17 = HEAP[$result];
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
  function _delta_subtract($left, $right) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $left_addr = __stackBase__;
      var $right_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      var $days = __stackBase__ + 20;
      var $seconds = __stackBase__ + 24;
      var $microseconds = __stackBase__ + 28;
      
      HEAP[$left_addr] = $left;
      HEAP[$right_addr] = $right;
      HEAP[$result] = __Py_NotImplementedStruct;
      
      
      
      
      if (HEAP[HEAP[$left_addr] + 4] == _PyDateTime_DeltaType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$left_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DeltaType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$right_addr] + 4] == _PyDateTime_DeltaType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[HEAP[$right_addr] + 4];
      var $17 = _PyType_IsSubtype($16, _PyDateTime_DeltaType);
      
      if ($17 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      var $27 = HEAP[HEAP[$left_addr] + 12] - HEAP[HEAP[$right_addr] + 12];
      HEAP[$days] = $27;
      
      
      
      
      
      
      
      
      var $36 = HEAP[HEAP[$left_addr] + 16] - HEAP[HEAP[$right_addr] + 16];
      HEAP[$seconds] = $36;
      
      
      
      
      
      
      
      
      var $45 = HEAP[HEAP[$left_addr] + 20] - HEAP[HEAP[$right_addr] + 20];
      HEAP[$microseconds] = $45;
      var $46 = HEAP[$days];
      var $47 = HEAP[$seconds];
      var $48 = HEAP[$microseconds];
      var $49 = _new_delta_ex($46, $47, $48, 1, _PyDateTime_DeltaType);
      HEAP[$result] = $49;
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[$result] == __Py_NotImplementedStruct) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $55 = HEAP[HEAP[$result]] + 1;
      
      var $57 = HEAP[$result];
      HEAP[$57] = $55;
      __label__ = 7;
      break;
     case 7:
      var $58 = HEAP[$result];
      HEAP[$0] = $58;
      var $59 = HEAP[$0];
      HEAP[$retval] = $59;
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
  function _delta_richcompare($self, $other, $op) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $other_addr = __stackBase__ + 4;
      var $op_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $diff = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$other_addr] = $other;
      HEAP[$op_addr] = $op;
      HEAP[$diff] = 42;
      
      
      
      
      if (HEAP[HEAP[$other_addr] + 4] == _PyDateTime_DeltaType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$other_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DeltaType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      var $17 = HEAP[HEAP[$self_addr] + 12] - HEAP[HEAP[$other_addr] + 12];
      HEAP[$diff] = $17;
      
      
      if (HEAP[$diff] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      var $27 = HEAP[HEAP[$self_addr] + 16] - HEAP[HEAP[$other_addr] + 16];
      HEAP[$diff] = $27;
      
      
      if (HEAP[$diff] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      var $37 = HEAP[HEAP[$self_addr] + 20] - HEAP[HEAP[$other_addr] + 20];
      HEAP[$diff] = $37;
      __label__ = 5;
      break;
     case 5:
      __label__ = 10;
      break;
     case 6:
      
      
      if (HEAP[$op_addr] == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if (HEAP[$op_addr] == 3) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$diff] = 1;
      __label__ = 10;
      break;
     case 9:
      
      var $43 = HEAP[$self_addr];
      var $44 = HEAP[$other_addr];
      var $45 = _cmperror($43, $44);
      HEAP[$0] = $45;
      __label__ = 11;
      break;
     case 10:
      var $46 = HEAP[$diff];
      var $47 = HEAP[$op_addr];
      var $48 = _diff_to_bool($46, $47);
      HEAP[$0] = $48;
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
  function _delta_hash($self) {
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
      var $temp = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      
      
      
      var $4 = HEAP[HEAP[$self_addr] + 8] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $5 = HEAP[$self_addr];
      var $6 = _delta_getstate($5);
      HEAP[$temp] = $6;
      
      
      if (HEAP[$temp] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      var $9 = HEAP[$temp];
      var $10 = _PyObject_Hash($9);
      
      var $12 = HEAP[$self_addr] + 8;
      HEAP[$12] = $10;
      
      
      
      var $16 = HEAP[HEAP[$temp]] - 1;
      
      var $18 = HEAP[$temp];
      HEAP[$18] = $16;
      
      
      
      
      if (HEAP[HEAP[$temp]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[$temp] + 4] + 24];
      var $28 = HEAP[$temp];
      FUNCTION_TABLE[$27]($28);
      __label__ = 4;
      break;
     case 4:
      
      
      var $31 = HEAP[HEAP[$self_addr] + 8];
      HEAP[$0] = $31;
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
  function _delta_multiply($left, $right) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $left_addr = __stackBase__;
      var $right_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      
      HEAP[$left_addr] = $left;
      HEAP[$right_addr] = $right;
      HEAP[$result] = __Py_NotImplementedStruct;
      
      
      
      
      if (HEAP[HEAP[$left_addr] + 4] == _PyDateTime_DeltaType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$left_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DeltaType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$right_addr] + 4] + 84] & 8388608) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$right_addr] + 4] + 84] & 16777216) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $25 = HEAP[$left_addr];
      var $26 = HEAP[$right_addr];
      var $27 = _multiply_int_timedelta($26, $25);
      HEAP[$result] = $27;
      __label__ = 5;
      break;
     case 5:
      __label__ = 9;
      break;
     case 6:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$left_addr] + 4] + 84] & 8388608) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$left_addr] + 4] + 84] & 16777216) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $43 = HEAP[$right_addr];
      var $44 = HEAP[$left_addr];
      var $45 = _multiply_int_timedelta($44, $43);
      HEAP[$result] = $45;
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$result] == __Py_NotImplementedStruct) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      var $51 = HEAP[HEAP[$result]] + 1;
      
      var $53 = HEAP[$result];
      HEAP[$53] = $51;
      __label__ = 11;
      break;
     case 11:
      var $54 = HEAP[$result];
      HEAP[$0] = $54;
      var $55 = HEAP[$0];
      HEAP[$retval] = $55;
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
  function _delta_divide($left, $right) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $left_addr = __stackBase__;
      var $right_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      
      HEAP[$left_addr] = $left;
      HEAP[$right_addr] = $right;
      HEAP[$result] = __Py_NotImplementedStruct;
      
      
      
      
      if (HEAP[HEAP[$left_addr] + 4] == _PyDateTime_DeltaType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$left_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DeltaType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$right_addr] + 4] + 84] & 8388608) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$right_addr] + 4] + 84] & 16777216) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $25 = HEAP[$left_addr];
      var $26 = HEAP[$right_addr];
      var $27 = _divide_timedelta_int($25, $26);
      HEAP[$result] = $27;
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[$result] == __Py_NotImplementedStruct) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $33 = HEAP[HEAP[$result]] + 1;
      
      var $35 = HEAP[$result];
      HEAP[$35] = $33;
      __label__ = 7;
      break;
     case 7:
      var $36 = HEAP[$result];
      HEAP[$0] = $36;
      var $37 = HEAP[$0];
      HEAP[$retval] = $37;
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
  function _accum($tag, $sofar, $num, $factor, $leftover) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 68;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tag_addr = __stackBase__;
      var $sofar_addr = __stackBase__ + 4;
      var $num_addr = __stackBase__ + 8;
      var $factor_addr = __stackBase__ + 12;
      var $leftover_addr = __stackBase__ + 16;
      var $retval = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $prod = __stackBase__ + 28;
      var $sum = __stackBase__ + 32;
      var $dnum = __stackBase__ + 36;
      var $fracpart = __stackBase__ + 44;
      var $intpart = __stackBase__ + 52;
      var $x = __stackBase__ + 60;
      var $y = __stackBase__ + 64;
      
      HEAP[$tag_addr] = $tag;
      HEAP[$sofar_addr] = $sofar;
      HEAP[$num_addr] = $num;
      HEAP[$factor_addr] = $factor;
      HEAP[$leftover_addr] = $leftover;
      
      
      if (HEAP[$num_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str110, __str1, 1851, ___PRETTY_FUNCTION___10304);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$num_addr] + 4] + 84] & 8388608) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$num_addr] + 4] + 84] & 16777216) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      var $17 = HEAP[$num_addr];
      var $18 = HEAP[$factor_addr];
      var $19 = _PyNumber_Multiply($17, $18);
      HEAP[$prod] = $19;
      
      
      if (HEAP[$prod] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 42;
      break;
     case 6:
      var $22 = HEAP[$sofar_addr];
      var $23 = HEAP[$prod];
      var $24 = _PyNumber_Add($22, $23);
      HEAP[$sum] = $24;
      
      
      
      var $28 = HEAP[HEAP[$prod]] - 1;
      
      var $30 = HEAP[$prod];
      HEAP[$30] = $28;
      
      
      
      
      if (HEAP[HEAP[$prod]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $39 = HEAP[HEAP[HEAP[$prod] + 4] + 24];
      var $40 = HEAP[$prod];
      FUNCTION_TABLE[$39]($40);
      __label__ = 8;
      break;
     case 8:
      var $41 = HEAP[$sum];
      HEAP[$0] = $41;
      __label__ = 42;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$num_addr] + 4] == _PyFloat_Type) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      var $48 = HEAP[HEAP[$num_addr] + 4];
      var $49 = _PyType_IsSubtype($48, _PyFloat_Type);
      
      if ($49 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 11:
      var $51 = HEAP[$num_addr];
      var $52 = _PyFloat_AsDouble($51);
      HEAP[$dnum] = $52;
      
      var $54 = HEAP[$dnum] == -1;
      if ($54) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      var $55 = _PyErr_Occurred();
      
      if ($55 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$0] = 0;
      __label__ = 42;
      break;
     case 14:
      var $57 = HEAP[$dnum];
      var $58 = _modf($57, $intpart);
      HEAP[$fracpart] = $58;
      var $59 = HEAP[$intpart];
      var $60 = _PyLong_FromDouble($59);
      HEAP[$x] = $60;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$0] = 0;
      __label__ = 42;
      break;
     case 16:
      var $63 = HEAP[$x];
      var $64 = HEAP[$factor_addr];
      var $65 = _PyNumber_Multiply($63, $64);
      HEAP[$prod] = $65;
      
      
      
      var $69 = HEAP[HEAP[$x]] - 1;
      
      var $71 = HEAP[$x];
      HEAP[$71] = $69;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $80 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $81 = HEAP[$x];
      FUNCTION_TABLE[$80]($81);
      __label__ = 18;
      break;
     case 18:
      
      
      if (HEAP[$prod] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$0] = 0;
      __label__ = 42;
      break;
     case 20:
      var $84 = HEAP[$sofar_addr];
      var $85 = HEAP[$prod];
      var $86 = _PyNumber_Add($84, $85);
      HEAP[$sum] = $86;
      
      
      
      var $90 = HEAP[HEAP[$prod]] - 1;
      
      var $92 = HEAP[$prod];
      HEAP[$92] = $90;
      
      
      
      
      if (HEAP[HEAP[$prod]] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $101 = HEAP[HEAP[HEAP[$prod] + 4] + 24];
      var $102 = HEAP[$prod];
      FUNCTION_TABLE[$101]($102);
      __label__ = 22;
      break;
     case 22:
      
      
      if (HEAP[$sum] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      HEAP[$0] = 0;
      __label__ = 42;
      break;
     case 24:
      
      
      if (HEAP[$fracpart] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $107 = HEAP[$sum];
      HEAP[$0] = $107;
      __label__ = 42;
      break;
     case 26:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$factor_addr] + 4] + 84] & 8388608) == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 27:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$factor_addr] + 4] + 84] & 16777216) == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      ___assert_fail(__str111, __str1, 1901, ___PRETTY_FUNCTION___10304);
      throw "Reached an unreachable!";
     case 29:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$factor_addr] + 4] + 84] & 8388608) != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      var $129 = HEAP[$factor_addr];
      var $130 = _PyInt_AsLong($129);
      var $131 = $130;
      HEAP[$dnum] = $131;
      __label__ = 32;
      break;
     case 31:
      var $132 = HEAP[$factor_addr];
      var $133 = _PyLong_AsDouble($132);
      HEAP[$dnum] = $133;
      __label__ = 32;
      break;
     case 32:
      
      
      var $136 = HEAP[$dnum] * HEAP[$fracpart];
      HEAP[$dnum] = $136;
      var $137 = HEAP[$dnum];
      var $138 = _modf($137, $intpart);
      HEAP[$fracpart] = $138;
      var $139 = HEAP[$intpart];
      var $140 = _PyLong_FromDouble($139);
      HEAP[$x] = $140;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 33:
      
      
      
      var $146 = HEAP[HEAP[$sum]] - 1;
      
      var $148 = HEAP[$sum];
      HEAP[$148] = $146;
      
      
      
      
      if (HEAP[HEAP[$sum]] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $157 = HEAP[HEAP[HEAP[$sum] + 4] + 24];
      var $158 = HEAP[$sum];
      FUNCTION_TABLE[$157]($158);
      __label__ = 35;
      break;
     case 35:
      HEAP[$0] = 0;
      __label__ = 42;
      break;
     case 36:
      var $159 = HEAP[$sum];
      var $160 = HEAP[$x];
      var $161 = _PyNumber_Add($159, $160);
      HEAP[$y] = $161;
      
      
      
      var $165 = HEAP[HEAP[$sum]] - 1;
      
      var $167 = HEAP[$sum];
      HEAP[$167] = $165;
      
      
      
      
      if (HEAP[HEAP[$sum]] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $176 = HEAP[HEAP[HEAP[$sum] + 4] + 24];
      var $177 = HEAP[$sum];
      FUNCTION_TABLE[$176]($177);
      __label__ = 38;
      break;
     case 38:
      
      
      
      var $181 = HEAP[HEAP[$x]] - 1;
      
      var $183 = HEAP[$x];
      HEAP[$183] = $181;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      var $192 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $193 = HEAP[$x];
      FUNCTION_TABLE[$192]($193);
      __label__ = 40;
      break;
     case 40:
      
      
      
      var $197 = HEAP[HEAP[$leftover_addr]] + HEAP[$fracpart];
      var $198 = HEAP[$leftover_addr];
      HEAP[$198] = $197;
      var $199 = HEAP[$y];
      HEAP[$0] = $199;
      __label__ = 42;
      break;
     case 41:
      
      
      
      
      var $204 = HEAP[HEAP[HEAP[$num_addr] + 4] + 12];
      var $205 = HEAP[_PyExc_TypeError];
      var $206 = HEAP[$tag_addr];
      var $207 = _PyErr_Format($205, __str112, allocate([ $206, 0, 0, 0, $204, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 42;
      break;
     case 42:
      var $208 = HEAP[$0];
      HEAP[$retval] = $208;
      __label__ = 43;
      break;
     case 43:
      var $retval42 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval42;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _delta_new($type, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 72;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $self = __stackBase__ + 20;
      var $day = __stackBase__ + 24;
      var $second = __stackBase__ + 28;
      var $us = __stackBase__ + 32;
      var $ms = __stackBase__ + 36;
      var $minute = __stackBase__ + 40;
      var $hour = __stackBase__ + 44;
      var $week = __stackBase__ + 48;
      var $x = __stackBase__ + 52;
      var $y = __stackBase__ + 56;
      var $leftover_us = __stackBase__ + 60;
      var $temp = __stackBase__ + 68;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$self] = 0;
      HEAP[$day] = 0;
      HEAP[$second] = 0;
      HEAP[$us] = 0;
      HEAP[$ms] = 0;
      HEAP[$minute] = 0;
      HEAP[$hour] = 0;
      HEAP[$week] = 0;
      HEAP[$x] = 0;
      HEAP[$y] = 0;
      HEAP[$leftover_us] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kw_addr];
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str113, _keywords_10439, allocate([ $day, 0, 0, 0, $second, 0, 0, 0, $us, 0, 0, 0, $ms, 0, 0, 0, $minute, 0, 0, 0, $hour, 0, 0, 0, $week, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo**", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $5 = _PyInt_FromLong(0);
      HEAP[$x] = $5;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$us] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      var $10 = HEAP[_us_per_us];
      var $11 = HEAP[$us];
      var $12 = HEAP[$x];
      var $13 = _accum(__str116, $12, $11, $10, $leftover_us);
      HEAP[$y] = $13;
      
      
      
      var $17 = HEAP[HEAP[$x]] - 1;
      
      var $19 = HEAP[$x];
      HEAP[$19] = $17;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $28 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $29 = HEAP[$x];
      FUNCTION_TABLE[$28]($29);
      __label__ = 5;
      break;
     case 5:
      var $30 = HEAP[$y];
      HEAP[$x] = $30;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if (HEAP[$ms] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      var $35 = HEAP[_us_per_ms];
      var $36 = HEAP[$ms];
      var $37 = HEAP[$x];
      var $38 = _accum(__str117, $37, $36, $35, $leftover_us);
      HEAP[$y] = $38;
      
      
      
      var $42 = HEAP[HEAP[$x]] - 1;
      
      var $44 = HEAP[$x];
      HEAP[$44] = $42;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $53 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $54 = HEAP[$x];
      FUNCTION_TABLE[$53]($54);
      __label__ = 9;
      break;
     case 9:
      var $55 = HEAP[$y];
      HEAP[$x] = $55;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if (HEAP[$second] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      var $60 = HEAP[_us_per_second];
      var $61 = HEAP[$second];
      var $62 = HEAP[$x];
      var $63 = _accum(__str115, $62, $61, $60, $leftover_us);
      HEAP[$y] = $63;
      
      
      
      var $67 = HEAP[HEAP[$x]] - 1;
      
      var $69 = HEAP[$x];
      HEAP[$69] = $67;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $78 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $79 = HEAP[$x];
      FUNCTION_TABLE[$78]($79);
      __label__ = 13;
      break;
     case 13:
      var $80 = HEAP[$y];
      HEAP[$x] = $80;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if (HEAP[$minute] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      var $85 = HEAP[_us_per_minute];
      var $86 = HEAP[$minute];
      var $87 = HEAP[$x];
      var $88 = _accum(__str118, $87, $86, $85, $leftover_us);
      HEAP[$y] = $88;
      
      
      
      var $92 = HEAP[HEAP[$x]] - 1;
      
      var $94 = HEAP[$x];
      HEAP[$94] = $92;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $103 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $104 = HEAP[$x];
      FUNCTION_TABLE[$103]($104);
      __label__ = 17;
      break;
     case 17:
      var $105 = HEAP[$y];
      HEAP[$x] = $105;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      if (HEAP[$hour] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 19:
      var $110 = HEAP[_us_per_hour];
      var $111 = HEAP[$hour];
      var $112 = HEAP[$x];
      var $113 = _accum(__str119, $112, $111, $110, $leftover_us);
      HEAP[$y] = $113;
      
      
      
      var $117 = HEAP[HEAP[$x]] - 1;
      
      var $119 = HEAP[$x];
      HEAP[$119] = $117;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $128 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $129 = HEAP[$x];
      FUNCTION_TABLE[$128]($129);
      __label__ = 21;
      break;
     case 21:
      var $130 = HEAP[$y];
      HEAP[$x] = $130;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      if (HEAP[$day] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 23:
      var $135 = HEAP[_us_per_day];
      var $136 = HEAP[$day];
      var $137 = HEAP[$x];
      var $138 = _accum(__str114, $137, $136, $135, $leftover_us);
      HEAP[$y] = $138;
      
      
      
      var $142 = HEAP[HEAP[$x]] - 1;
      
      var $144 = HEAP[$x];
      HEAP[$144] = $142;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $153 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $154 = HEAP[$x];
      FUNCTION_TABLE[$153]($154);
      __label__ = 25;
      break;
     case 25:
      var $155 = HEAP[$y];
      HEAP[$x] = $155;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      if (HEAP[$week] != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      var $160 = HEAP[_us_per_week];
      var $161 = HEAP[$week];
      var $162 = HEAP[$x];
      var $163 = _accum(__str120, $162, $161, $160, $leftover_us);
      HEAP[$y] = $163;
      
      
      
      var $167 = HEAP[HEAP[$x]] - 1;
      
      var $169 = HEAP[$x];
      HEAP[$169] = $167;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $178 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $179 = HEAP[$x];
      FUNCTION_TABLE[$178]($179);
      __label__ = 29;
      break;
     case 29:
      var $180 = HEAP[$y];
      HEAP[$x] = $180;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      if (HEAP[$leftover_us] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 31:
      var $185 = HEAP[$leftover_us];
      var $186 = _round_to_long($185);
      var $187 = _PyLong_FromLong($186);
      HEAP[$temp] = $187;
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 32:
      
      
      
      var $193 = HEAP[HEAP[$x]] - 1;
      
      var $195 = HEAP[$x];
      HEAP[$195] = $193;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $204 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $205 = HEAP[$x];
      FUNCTION_TABLE[$204]($205);
      __label__ = 34;
      break;
     case 34:
      __label__ = 42;
      break;
     case 35:
      var $206 = HEAP[$x];
      var $207 = HEAP[$temp];
      var $208 = _PyNumber_Add($206, $207);
      HEAP[$y] = $208;
      
      
      
      var $212 = HEAP[HEAP[$temp]] - 1;
      
      var $214 = HEAP[$temp];
      HEAP[$214] = $212;
      
      
      
      
      if (HEAP[HEAP[$temp]] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      var $223 = HEAP[HEAP[HEAP[$temp] + 4] + 24];
      var $224 = HEAP[$temp];
      FUNCTION_TABLE[$223]($224);
      __label__ = 37;
      break;
     case 37:
      
      
      
      var $228 = HEAP[HEAP[$x]] - 1;
      
      var $230 = HEAP[$x];
      HEAP[$230] = $228;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      var $239 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $240 = HEAP[$x];
      FUNCTION_TABLE[$239]($240);
      __label__ = 39;
      break;
     case 39:
      var $241 = HEAP[$y];
      HEAP[$x] = $241;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      var $244 = HEAP[$x];
      var $245 = HEAP[$type_addr];
      var $246 = _microseconds_to_delta_ex($244, $245);
      HEAP[$self] = $246;
      
      
      
      var $250 = HEAP[HEAP[$x]] - 1;
      
      var $252 = HEAP[$x];
      HEAP[$252] = $250;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $261 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $262 = HEAP[$x];
      FUNCTION_TABLE[$261]($262);
      __label__ = 42;
      break;
     case 42:
      var $263 = HEAP[$self];
      HEAP[$0] = $263;
      var $264 = HEAP[$0];
      HEAP[$retval] = $264;
      __label__ = 43;
      break;
     case 43:
      var $retval41 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval41;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _delta_nonzero($self) {
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
      var $iftmp_135 = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
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
      var $13 = HEAP[$iftmp_135];
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
  function _delta_repr($self) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 20];
      
      
      var $10 = HEAP[HEAP[$self_addr] + 16];
      
      
      var $13 = HEAP[HEAP[$self_addr] + 12];
      
      
      
      
      
      var $19 = HEAP[HEAP[HEAP[$self_addr] + 4] + 12];
      var $20 = _PyString_FromFormat(__str121, allocate([ $19, 0, 0, 0, $13, 0, 0, 0, $10, 0, 0, 0, $7, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $20;
      __label__ = 5;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $27 = HEAP[HEAP[$self_addr] + 16];
      
      
      var $30 = HEAP[HEAP[$self_addr] + 12];
      
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[$self_addr] + 4] + 12];
      var $37 = _PyString_FromFormat(__str122, allocate([ $36, 0, 0, 0, $30, 0, 0, 0, $27, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $37;
      __label__ = 5;
      break;
     case 4:
      
      
      var $40 = HEAP[HEAP[$self_addr] + 12];
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$self_addr] + 4] + 12];
      var $47 = _PyString_FromFormat(__str123, allocate([ $46, 0, 0, 0, $40, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $47;
      __label__ = 5;
      break;
     case 5:
      var $48 = HEAP[$0];
      HEAP[$retval] = $48;
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
  function _delta_str($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 148;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 148);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $iftmp_141 = __stackBase__ + 12;
      var $days = __stackBase__ + 16;
      var $seconds = __stackBase__ + 20;
      var $us = __stackBase__ + 24;
      var $hours = __stackBase__ + 28;
      var $minutes = __stackBase__ + 32;
      var $buf = __stackBase__ + 36;
      var $pbuf = __stackBase__ + 136;
      var $buflen = __stackBase__ + 140;
      var $n = __stackBase__ + 144;
      
      HEAP[$self_addr] = $self;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 12];
      HEAP[$days] = $3;
      
      
      var $6 = HEAP[HEAP[$self_addr] + 16];
      HEAP[$seconds] = $6;
      
      
      var $9 = HEAP[HEAP[$self_addr] + 20];
      HEAP[$us] = $9;
      
      HEAP[$pbuf] = $buf;
      HEAP[$buflen] = 100;
      var $10 = HEAP[$seconds];
      var $11 = _divmod($10, 60, $seconds);
      HEAP[$minutes] = $11;
      var $12 = HEAP[$minutes];
      var $13 = _divmod($12, 60, $minutes);
      HEAP[$hours] = $13;
      
      
      if (HEAP[$days] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 1:
      
      
      if (HEAP[$days] == 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      var $19 = HEAP[$days] == -1;
      if ($19) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$iftmp_141] = __str79;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_141] = __str124;
      __label__ = 5;
      break;
     case 5:
      var $20 = HEAP[$pbuf];
      var $21 = HEAP[$buflen];
      var $22 = HEAP[$days];
      var $23 = HEAP[$iftmp_141];
      var $24 = _PyOS_snprintf($20, $21, __str125, allocate([ $22, 0, 0, 0, $23, 0, 0, 0 ], [ "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$n] = $24;
      
      
      if (HEAP[$n] < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      if (HEAP[$n] >= HEAP[$buflen]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      var $32 = HEAP[$pbuf] + HEAP[$n];
      HEAP[$pbuf] = $32;
      
      
      var $35 = HEAP[$buflen] - HEAP[$n];
      HEAP[$buflen] = $35;
      __label__ = 8;
      break;
     case 8:
      var $36 = HEAP[$seconds];
      var $37 = HEAP[$minutes];
      var $38 = HEAP[$pbuf];
      var $39 = HEAP[$buflen];
      var $40 = HEAP[$hours];
      var $41 = _PyOS_snprintf($38, $39, __str126, allocate([ $40, 0, 0, 0, $37, 0, 0, 0, $36, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$n] = $41;
      
      
      if (HEAP[$n] < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      if (HEAP[$n] >= HEAP[$buflen]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      var $49 = HEAP[$pbuf] + HEAP[$n];
      HEAP[$pbuf] = $49;
      
      
      var $52 = HEAP[$buflen] - HEAP[$n];
      HEAP[$buflen] = $52;
      
      
      if (HEAP[$us] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      var $55 = HEAP[$pbuf];
      var $56 = HEAP[$buflen];
      var $57 = HEAP[$us];
      var $58 = _PyOS_snprintf($55, $56, __str98, allocate([ $57, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$n] = $58;
      
      
      if (HEAP[$n] < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      if (HEAP[$n] >= HEAP[$buflen]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      var $66 = HEAP[$pbuf] + HEAP[$n];
      HEAP[$pbuf] = $66;
      __label__ = 14;
      break;
     case 14:
      
      
      
      
      var $69 = HEAP[$pbuf] - $buf;
      var $buf18 = $buf;
      var $70 = _PyString_FromStringAndSize($buf18, $69);
      HEAP[$0] = $70;
      __label__ = 16;
      break;
     case 15:
      var $71 = HEAP[_PyExc_SystemError];
      _PyErr_SetString($71, __str127);
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 16:
      var $72 = HEAP[$0];
      HEAP[$retval] = $72;
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
  function _delta_getstate($self) {
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
      
      
      var $3 = HEAP[HEAP[$self_addr] + 20];
      
      
      var $6 = HEAP[HEAP[$self_addr] + 16];
      
      
      var $9 = HEAP[HEAP[$self_addr] + 12];
      var $10 = __Py_BuildValue_SizeT(__str128, allocate([ $9, 0, 0, 0, $6, 0, 0, 0, $3, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
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
  function _delta_total_seconds($self) {
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
      var $total_seconds = __stackBase__ + 12;
      var $total_microseconds = __stackBase__ + 16;
      var $one_million = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      
      var $2 = HEAP[__stackBase__];
      var $3 = _delta_to_microseconds($2);
      HEAP[$total_microseconds] = $3;
      
      
      if (HEAP[$total_microseconds] == 0) {
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
      var $6 = _PyLong_FromLong(1e6);
      HEAP[$one_million] = $6;
      
      
      if (HEAP[$one_million] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      var $12 = HEAP[HEAP[$total_microseconds]] - 1;
      
      var $14 = HEAP[$total_microseconds];
      HEAP[$14] = $12;
      
      
      
      
      if (HEAP[HEAP[$total_microseconds]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$total_microseconds] + 4] + 24];
      var $24 = HEAP[$total_microseconds];
      FUNCTION_TABLE[$23]($24);
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 6:
      var $25 = HEAP[$total_microseconds];
      var $26 = HEAP[$one_million];
      var $27 = _PyNumber_TrueDivide($25, $26);
      HEAP[$total_seconds] = $27;
      
      
      
      var $31 = HEAP[HEAP[$total_microseconds]] - 1;
      
      var $33 = HEAP[$total_microseconds];
      HEAP[$33] = $31;
      
      
      
      
      if (HEAP[HEAP[$total_microseconds]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $42 = HEAP[HEAP[HEAP[$total_microseconds] + 4] + 24];
      var $43 = HEAP[$total_microseconds];
      FUNCTION_TABLE[$42]($43);
      __label__ = 8;
      break;
     case 8:
      
      
      
      var $47 = HEAP[HEAP[$one_million]] - 1;
      
      var $49 = HEAP[$one_million];
      HEAP[$49] = $47;
      
      
      
      
      if (HEAP[HEAP[$one_million]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $58 = HEAP[HEAP[HEAP[$one_million] + 4] + 24];
      var $59 = HEAP[$one_million];
      FUNCTION_TABLE[$58]($59);
      __label__ = 10;
      break;
     case 10:
      var $60 = HEAP[$total_seconds];
      HEAP[$0] = $60;
      __label__ = 11;
      break;
     case 11:
      var $61 = HEAP[$0];
      HEAP[$retval] = $61;
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
  function _delta_reduce($self) {
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
      var $2 = _delta_getstate($1);
      
      
      
      var $6 = HEAP[HEAP[$self_addr] + 4];
      var $7 = __Py_BuildValue_SizeT(__str129, allocate([ $6, 0, 0, 0, $2, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $7;
      var $8 = HEAP[$0];
      HEAP[$retval] = $8;
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
  function _date_year($self, $unused) {
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
      
      
      
      
      
      
      
      
      
      
      
      var $12 = HEAP[HEAP[$self_addr] + 13] << 8 | HEAP[HEAP[$self_addr] + 13 + 1];
      var $13 = _PyInt_FromLong($12);
      HEAP[$0] = $13;
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
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
  function _date_month($self, $unused) {
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
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 13 + 2];
      var $6 = _PyInt_FromLong($5);
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
  function _date_day($self, $unused) {
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
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 13 + 3];
      var $6 = _PyInt_FromLong($5);
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
  function _date_new($type, $args, $kw) {
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
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $self = __stackBase__ + 20;
      var $state = __stackBase__ + 24;
      var $year = __stackBase__ + 28;
      var $month = __stackBase__ + 32;
      var $day = __stackBase__ + 36;
      var $me = __stackBase__ + 40;
      var $pdata = __stackBase__ + 44;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$self] = 0;
      
      
      
      
      
      if (HEAP[HEAP[$args_addr] + 8] == 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      
      
      var $10 = HEAP[HEAP[$args_addr] + 12];
      HEAP[$state] = $10;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$state] + 4] + 84] & 134217728) != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 2:
      
      
      
      
      
      if (HEAP[HEAP[$state] + 8] == 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$state] + 20 + 2] - 1 <= 11) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      var $33 = HEAP[HEAP[$type_addr] + 152];
      var $34 = HEAP[$type_addr];
      var $35 = FUNCTION_TABLE[$33]($34, 0);
      var $36 = $35;
      HEAP[$me] = $36;
      
      
      if (HEAP[$me] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      var $42 = HEAP[$state] + 20;
      HEAP[$pdata] = $42;
      
      
      var $45 = HEAP[$me] + 13;
      var $46 = HEAP[$pdata];
      _llvm_memcpy_p0i8_p0i8_i32($45, $46, 4, 1, 0);
      
      var $48 = HEAP[$me] + 8;
      HEAP[$48] = -1;
      __label__ = 6;
      break;
     case 6:
      
      var $50 = HEAP[$me];
      HEAP[$0] = $50;
      __label__ = 12;
      break;
     case 7:
      var $51 = HEAP[$args_addr];
      var $52 = HEAP[$kw_addr];
      var $53 = __PyArg_ParseTupleAndKeywords_SizeT($51, $52, __str128, _date_kws, allocate([ $year, 0, 0, 0, $month, 0, 0, 0, $day, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($53 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      var $55 = HEAP[$day];
      var $56 = HEAP[$month];
      var $57 = HEAP[$year];
      var $58 = _check_date_args($57, $56, $55);
      
      if ($58 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 10:
      var $60 = HEAP[$day];
      var $61 = HEAP[$month];
      var $62 = HEAP[$year];
      var $63 = HEAP[$type_addr];
      var $64 = _new_date_ex($62, $61, $60, $63);
      HEAP[$self] = $64;
      __label__ = 11;
      break;
     case 11:
      var $65 = HEAP[$self];
      HEAP[$0] = $65;
      __label__ = 12;
      break;
     case 12:
      var $66 = HEAP[$0];
      HEAP[$retval] = $66;
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
  function _date_local_from_time_t($cls, $ts) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr = __stackBase__;
      var $ts_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $tm = __stackBase__ + 20;
      var $t = __stackBase__ + 24;
      var $result = __stackBase__ + 28;
      
      HEAP[$cls_addr] = $cls;
      HEAP[$ts_addr] = $ts;
      HEAP[$result] = 0;
      var $1 = HEAP[$ts_addr];
      var $2 = __PyTime_DoubleToTimet($1);
      HEAP[$t] = $2;
      
      var $4 = HEAP[$t] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 3:
      var $7 = _localtime($t);
      HEAP[$tm] = $7;
      
      
      if (HEAP[$tm] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $12 = HEAP[HEAP[$tm] + 12];
      
      
      
      var $16 = HEAP[HEAP[$tm] + 16] + 1;
      
      
      
      var $20 = HEAP[HEAP[$tm] + 20] + 1900;
      var $21 = HEAP[$cls_addr];
      var $22 = __PyObject_CallFunction_SizeT($21, __str128, allocate([ $20, 0, 0, 0, $16, 0, 0, 0, $12, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $22;
      __label__ = 6;
      break;
     case 5:
      var $23 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($23, __str141);
      __label__ = 6;
      break;
     case 6:
      var $24 = HEAP[$result];
      HEAP[$0] = $24;
      __label__ = 7;
      break;
     case 7:
      var $25 = HEAP[$0];
      HEAP[$retval] = $25;
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
  function _date_today($cls, $dummy) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr = __stackBase__;
      var $dummy_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $time = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      
      HEAP[$cls_addr] = $cls;
      HEAP[$dummy_addr] = $dummy;
      var $1 = _time_time();
      HEAP[$time] = $1;
      
      
      if (HEAP[$time] == 0) {
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
      var $4 = HEAP[$cls_addr];
      var $5 = HEAP[$time];
      var $6 = __PyObject_CallMethod_SizeT($4, __str142, __str35, allocate([ $5, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $6;
      
      
      
      var $10 = HEAP[HEAP[$time]] - 1;
      
      var $12 = HEAP[$time];
      HEAP[$12] = $10;
      
      
      
      
      if (HEAP[HEAP[$time]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $21 = HEAP[HEAP[HEAP[$time] + 4] + 24];
      var $22 = HEAP[$time];
      FUNCTION_TABLE[$21]($22);
      __label__ = 4;
      break;
     case 4:
      var $23 = HEAP[$result];
      HEAP[$0] = $23;
      __label__ = 5;
      break;
     case 5:
      var $24 = HEAP[$0];
      HEAP[$retval] = $24;
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
  function _date_fromtimestamp($cls, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $timestamp = __stackBase__ + 16;
      var $result = __stackBase__ + 24;
      
      HEAP[$cls_addr] = $cls;
      HEAP[$args_addr] = $args;
      HEAP[$result] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str143, allocate([ $timestamp, 0, 0, 0 ], [ "double*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[$timestamp];
      var $5 = HEAP[$cls_addr];
      var $6 = _date_local_from_time_t($5, $4);
      HEAP[$result] = $6;
      __label__ = 2;
      break;
     case 2:
      var $7 = HEAP[$result];
      HEAP[$0] = $7;
      var $8 = HEAP[$0];
      HEAP[$retval] = $8;
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
  function _date_fromordinal($cls, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      var $ordinal = __stackBase__ + 20;
      var $year = __stackBase__ + 24;
      var $month = __stackBase__ + 28;
      var $day = __stackBase__ + 32;
      
      HEAP[$cls_addr] = $cls;
      HEAP[$args_addr] = $args;
      HEAP[$result] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str144, allocate([ $ordinal, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      if (HEAP[$ordinal] <= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $6 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($6, __str145);
      __label__ = 4;
      break;
     case 3:
      var $7 = HEAP[$ordinal];
      _ord_to_ymd($7, $year, $month, $day);
      var $8 = HEAP[$day];
      var $9 = HEAP[$month];
      var $10 = HEAP[$year];
      var $11 = HEAP[$cls_addr];
      var $12 = __PyObject_CallFunction_SizeT($11, __str128, allocate([ $10, 0, 0, 0, $9, 0, 0, 0, $8, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $12;
      __label__ = 4;
      break;
     case 4:
      var $13 = HEAP[$result];
      HEAP[$0] = $13;
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
  function _add_date_timedelta($date, $delta, $negate) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $date_addr = __stackBase__;
      var $delta_addr = __stackBase__ + 4;
      var $negate_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $iftmp_174 = __stackBase__ + 20;
      var $result = __stackBase__ + 24;
      var $year = __stackBase__ + 28;
      var $month = __stackBase__ + 32;
      var $deltadays = __stackBase__ + 36;
      var $day = __stackBase__ + 40;
      
      HEAP[$date_addr] = $date;
      HEAP[$delta_addr] = $delta;
      HEAP[$negate_addr] = $negate;
      HEAP[$result] = 0;
      
      
      
      
      
      
      
      
      
      
      
      var $12 = HEAP[HEAP[$date_addr] + 13] << 8 | HEAP[HEAP[$date_addr] + 13 + 1];
      HEAP[$year] = $12;
      
      
      
      
      var $17 = HEAP[HEAP[$date_addr] + 13 + 2];
      HEAP[$month] = $17;
      
      
      var $20 = HEAP[HEAP[$delta_addr] + 12];
      HEAP[$deltadays] = $20;
      
      
      
      
      var $25 = HEAP[HEAP[$date_addr] + 13 + 3];
      
      
      if (HEAP[$negate_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $29 = 0 - HEAP[$deltadays];
      HEAP[$iftmp_174] = $29;
      __label__ = 3;
      break;
     case 2:
      var $30 = HEAP[$deltadays];
      HEAP[$iftmp_174] = $30;
      __label__ = 3;
      break;
     case 3:
      
      var $32 = $25 + HEAP[$iftmp_174];
      HEAP[$day] = $32;
      var $33 = _normalize_date($year, $month, $day);
      
      if ($33 >= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $35 = HEAP[$day];
      var $36 = HEAP[$month];
      var $37 = HEAP[$year];
      var $38 = _new_date_ex($37, $36, $35, _PyDateTime_DateType);
      HEAP[$result] = $38;
      __label__ = 5;
      break;
     case 5:
      var $39 = HEAP[$result];
      HEAP[$0] = $39;
      var $40 = HEAP[$0];
      HEAP[$retval] = $40;
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
  function _date_add($left, $right) {
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
      
      
      
      
      if (HEAP[HEAP[$left_addr] + 4] == _PyDateTime_DateTimeType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$left_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DateTimeType);
      
      if ($8 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$right_addr] + 4] == _PyDateTime_DateTimeType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[HEAP[$right_addr] + 4];
      var $17 = _PyType_IsSubtype($16, _PyDateTime_DateTimeType);
      
      if ($17 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $20 = HEAP[__Py_NotImplementedStruct] + 1;
      HEAP[__Py_NotImplementedStruct] = $20;
      HEAP[$0] = __Py_NotImplementedStruct;
      __label__ = 15;
      break;
     case 5:
      
      
      
      
      if (HEAP[HEAP[$left_addr] + 4] == _PyDateTime_DateType) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $27 = HEAP[HEAP[$left_addr] + 4];
      var $28 = _PyType_IsSubtype($27, _PyDateTime_DateType);
      
      if ($28 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[HEAP[$right_addr] + 4] == _PyDateTime_DeltaType) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      var $36 = HEAP[HEAP[$right_addr] + 4];
      var $37 = _PyType_IsSubtype($36, _PyDateTime_DeltaType);
      
      if ($37 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      var $40 = HEAP[$right_addr];
      
      var $42 = HEAP[$left_addr];
      var $43 = _add_date_timedelta($42, $40, 0);
      HEAP[$0] = $43;
      __label__ = 15;
      break;
     case 10:
      __label__ = 14;
      break;
     case 11:
      
      
      
      
      if (HEAP[HEAP[$left_addr] + 4] == _PyDateTime_DeltaType) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      var $50 = HEAP[HEAP[$left_addr] + 4];
      var $51 = _PyType_IsSubtype($50, _PyDateTime_DeltaType);
      
      if ($51 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      var $54 = HEAP[$left_addr];
      
      var $56 = HEAP[$right_addr];
      var $57 = _add_date_timedelta($56, $54, 0);
      HEAP[$0] = $57;
      __label__ = 15;
      break;
     case 14:
      
      var $59 = HEAP[__Py_NotImplementedStruct] + 1;
      HEAP[__Py_NotImplementedStruct] = $59;
      HEAP[$0] = __Py_NotImplementedStruct;
      __label__ = 15;
      break;
     case 15:
      var $60 = HEAP[$0];
      HEAP[$retval] = $60;
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
  function _date_subtract($left, $right) {
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
      var $left_ord = __stackBase__ + 16;
      var $right_ord = __stackBase__ + 20;
      
      HEAP[$left_addr] = $left;
      HEAP[$right_addr] = $right;
      
      
      
      
      if (HEAP[HEAP[$left_addr] + 4] == _PyDateTime_DateTimeType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$left_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DateTimeType);
      
      if ($8 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$right_addr] + 4] == _PyDateTime_DateTimeType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[HEAP[$right_addr] + 4];
      var $17 = _PyType_IsSubtype($16, _PyDateTime_DateTimeType);
      
      if ($17 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $20 = HEAP[__Py_NotImplementedStruct] + 1;
      HEAP[__Py_NotImplementedStruct] = $20;
      HEAP[$0] = __Py_NotImplementedStruct;
      __label__ = 14;
      break;
     case 5:
      
      
      
      
      if (HEAP[HEAP[$left_addr] + 4] == _PyDateTime_DateType) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $27 = HEAP[HEAP[$left_addr] + 4];
      var $28 = _PyType_IsSubtype($27, _PyDateTime_DateType);
      
      if ($28 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[HEAP[$right_addr] + 4] == _PyDateTime_DateType) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      var $36 = HEAP[HEAP[$right_addr] + 4];
      var $37 = _PyType_IsSubtype($36, _PyDateTime_DateType);
      
      if ($37 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      var $44 = HEAP[HEAP[$left_addr] + 13 + 3];
      
      
      
      
      
      var $50 = HEAP[HEAP[$left_addr] + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $64 = HEAP[HEAP[$left_addr] + 13] << 8 | HEAP[HEAP[$left_addr] + 13 + 1];
      var $65 = _ymd_to_ord($64, $50, $44);
      HEAP[$left_ord] = $65;
      
      
      
      
      
      var $71 = HEAP[HEAP[$right_addr] + 13 + 3];
      
      
      
      
      
      var $77 = HEAP[HEAP[$right_addr] + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $91 = HEAP[HEAP[$right_addr] + 13] << 8 | HEAP[HEAP[$right_addr] + 13 + 1];
      var $92 = _ymd_to_ord($91, $77, $71);
      HEAP[$right_ord] = $92;
      
      
      var $95 = HEAP[$left_ord] - HEAP[$right_ord];
      var $96 = _new_delta_ex($95, 0, 0, 0, _PyDateTime_DeltaType);
      HEAP[$0] = $96;
      __label__ = 14;
      break;
     case 10:
      
      
      
      
      if (HEAP[HEAP[$right_addr] + 4] == _PyDateTime_DeltaType) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $103 = HEAP[HEAP[$right_addr] + 4];
      var $104 = _PyType_IsSubtype($103, _PyDateTime_DeltaType);
      
      if ($104 != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      var $107 = HEAP[$right_addr];
      
      var $109 = HEAP[$left_addr];
      var $110 = _add_date_timedelta($109, $107, 1);
      HEAP[$0] = $110;
      __label__ = 14;
      break;
     case 13:
      
      var $112 = HEAP[__Py_NotImplementedStruct] + 1;
      HEAP[__Py_NotImplementedStruct] = $112;
      HEAP[$0] = __Py_NotImplementedStruct;
      __label__ = 14;
      break;
     case 14:
      var $113 = HEAP[$0];
      HEAP[$retval] = $113;
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
  function _date_repr($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1044;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 1044);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $buffer = __stackBase__ + 12;
      var $type_name = __stackBase__ + 1040;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      
      var $6 = HEAP[HEAP[HEAP[$self_addr] + 4] + 12];
      HEAP[$type_name] = $6;
      
      
      
      
      var $11 = HEAP[HEAP[$self_addr] + 13 + 3];
      
      
      
      
      var $16 = HEAP[HEAP[$self_addr] + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      var $28 = HEAP[HEAP[$self_addr] + 13] << 8 | HEAP[HEAP[$self_addr] + 13 + 1];
      var $buffer1 = $buffer;
      var $29 = HEAP[$type_name];
      var $30 = _PyOS_snprintf($buffer1, 1028, __str121, allocate([ $29, 0, 0, 0, $28, 0, 0, 0, $16, 0, 0, 0, $11, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      var $buffer2 = $buffer;
      var $31 = _PyString_FromString($buffer2);
      HEAP[$0] = $31;
      var $32 = HEAP[$0];
      HEAP[$retval] = $32;
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
  function _date_isoformat($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 140;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 140);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $buffer = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $self;
      var $1 = HEAP[__stackBase__];
      var $buffer1 = $buffer;
      var $2 = _isoformat_date($1, $buffer1, 128);
      var $buffer2 = $buffer;
      var $3 = _PyString_FromString($buffer2);
      HEAP[$0] = $3;
      var $4 = HEAP[$0];
      HEAP[$retval] = $4;
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
  function _date_str($self) {
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
      
      var $2 = HEAP[__stackBase__];
      var $3 = __PyObject_CallMethod_SizeT($2, __str146, __str99, allocate(1, "i32", ALLOC_STACK));
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
  function _date_ctime($self) {
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
      var $1 = HEAP[__stackBase__];
      var $2 = _format_ctime($1, 0, 0, 0);
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
  function _date_strftime($self, $args, $kw) {
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
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      var $tuple = __stackBase__ + 24;
      var $format = __stackBase__ + 28;
      var $format_len = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kw_addr];
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str147, _keywords_11112, allocate([ $format, 0, 0, 0, $format_len, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      var $6 = HEAP[$self_addr];
      var $7 = __PyObject_CallMethod_SizeT($6, __str149, __str99, allocate(1, "i32", ALLOC_STACK));
      HEAP[$tuple] = $7;
      
      
      if (HEAP[$tuple] == 0) {
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
      
      var $11 = HEAP[$self_addr];
      var $12 = HEAP[$format_len];
      var $13 = HEAP[$format];
      
      var $15 = HEAP[$self_addr];
      var $16 = HEAP[$tuple];
      var $17 = _wrap_strftime($15, $13, $12, $16, $11);
      HEAP[$result] = $17;
      
      
      
      var $21 = HEAP[HEAP[$tuple]] - 1;
      
      var $23 = HEAP[$tuple];
      HEAP[$23] = $21;
      
      
      
      
      if (HEAP[HEAP[$tuple]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $32 = HEAP[HEAP[HEAP[$tuple] + 4] + 24];
      var $33 = HEAP[$tuple];
      FUNCTION_TABLE[$32]($33);
      __label__ = 6;
      break;
     case 6:
      var $34 = HEAP[$result];
      HEAP[$0] = $34;
      __label__ = 7;
      break;
     case 7:
      var $35 = HEAP[$0];
      HEAP[$retval] = $35;
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
  function _date_format($self, $args) {
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
      var $format = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str150, allocate([ $format, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$format] + 4] + 84] & 134217728) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      
      if (HEAP[HEAP[$format] + 8] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $17 = HEAP[$self_addr];
      var $18 = _PyObject_Str($17);
      HEAP[$0] = $18;
      __label__ = 12;
      break;
     case 5:
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$format] + 4] + 84] & 268435456) != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      
      
      if (HEAP[HEAP[$format] + 8] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $32 = HEAP[$self_addr];
      var $33 = _PyObject_Unicode($32);
      HEAP[$0] = $33;
      __label__ = 12;
      break;
     case 9:
      __label__ = 11;
      break;
     case 10:
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[$format] + 4] + 12];
      var $39 = HEAP[_PyExc_ValueError];
      var $40 = _PyErr_Format($39, __str151, allocate([ $38, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 11:
      var $41 = HEAP[$format];
      
      var $43 = HEAP[$self_addr];
      var $44 = __PyObject_CallMethod_SizeT($43, __str93, __str35, allocate([ $41, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $44;
      __label__ = 12;
      break;
     case 12:
      var $45 = HEAP[$0];
      HEAP[$retval] = $45;
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
  function _date_isoweekday($self) {
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
      var $dow = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 13 + 3];
      
      
      
      
      var $10 = HEAP[HEAP[$self_addr] + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      var $22 = HEAP[HEAP[$self_addr] + 13] << 8 | HEAP[HEAP[$self_addr] + 13 + 1];
      var $23 = _weekday($22, $10, $5);
      HEAP[$dow] = $23;
      
      var $25 = HEAP[$dow] + 1;
      var $26 = _PyInt_FromLong($25);
      HEAP[$0] = $26;
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
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
  function _date_isocalendar($self) {
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
      var $year = __stackBase__ + 12;
      var $week1_monday = __stackBase__ + 16;
      var $today = __stackBase__ + 20;
      var $week = __stackBase__ + 24;
      var $day = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      
      
      
      
      
      
      
      var $12 = HEAP[HEAP[$self_addr] + 13] << 8 | HEAP[HEAP[$self_addr] + 13 + 1];
      HEAP[$year] = $12;
      var $13 = HEAP[$year];
      var $14 = _iso_week1_monday($13);
      HEAP[$week1_monday] = $14;
      
      
      
      
      var $19 = HEAP[HEAP[$self_addr] + 13 + 3];
      
      
      
      
      var $24 = HEAP[HEAP[$self_addr] + 13 + 2];
      var $25 = HEAP[$year];
      var $26 = _ymd_to_ord($25, $24, $19);
      HEAP[$today] = $26;
      
      
      var $29 = HEAP[$today] - HEAP[$week1_monday];
      var $30 = _divmod($29, 7, $day);
      HEAP[$week] = $30;
      
      
      if (HEAP[$week] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $34 = HEAP[$year] - 1;
      HEAP[$year] = $34;
      var $35 = HEAP[$year];
      var $36 = _iso_week1_monday($35);
      HEAP[$week1_monday] = $36;
      
      
      var $39 = HEAP[$today] - HEAP[$week1_monday];
      var $40 = _divmod($39, 7, $day);
      HEAP[$week] = $40;
      __label__ = 5;
      break;
     case 2:
      
      
      if (HEAP[$week] > 51) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      var $44 = HEAP[$year] + 1;
      var $45 = _iso_week1_monday($44);
      
      
      if ($45 <= HEAP[$today]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $49 = HEAP[$year] + 1;
      HEAP[$year] = $49;
      HEAP[$week] = 0;
      __label__ = 5;
      break;
     case 5:
      
      var $51 = HEAP[$day] + 1;
      
      var $53 = HEAP[$week] + 1;
      var $54 = HEAP[$year];
      var $55 = __Py_BuildValue_SizeT(__str128, allocate([ $54, 0, 0, 0, $53, 0, 0, 0, $51, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $55;
      var $56 = HEAP[$0];
      HEAP[$retval] = $56;
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
  function _date_richcompare($self, $other, $op) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $other_addr = __stackBase__ + 4;
      var $op_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $diff = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$other_addr] = $other;
      HEAP[$op_addr] = $op;
      HEAP[$diff] = 42;
      
      
      
      
      if (HEAP[HEAP[$other_addr] + 4] == _PyDateTime_DateType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$other_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DateType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[$other_addr] + 13;
      
      
      var $16 = HEAP[$self_addr] + 13;
      var $17 = _memcmp($16, $13, 4);
      HEAP[$diff] = $17;
      __label__ = 9;
      break;
     case 3:
      var $18 = HEAP[$other_addr];
      var $19 = _PyObject_HasAttrString($18, __str149);
      
      if ($19 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $22 = HEAP[__Py_NotImplementedStruct] + 1;
      HEAP[__Py_NotImplementedStruct] = $22;
      HEAP[$0] = __Py_NotImplementedStruct;
      __label__ = 10;
      break;
     case 5:
      
      
      if (HEAP[$op_addr] == 2) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if (HEAP[$op_addr] == 3) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$diff] = 1;
      __label__ = 9;
      break;
     case 8:
      
      var $28 = HEAP[$self_addr];
      var $29 = HEAP[$other_addr];
      var $30 = _cmperror($28, $29);
      HEAP[$0] = $30;
      __label__ = 10;
      break;
     case 9:
      var $31 = HEAP[$diff];
      var $32 = HEAP[$op_addr];
      var $33 = _diff_to_bool($31, $32);
      HEAP[$0] = $33;
      __label__ = 10;
      break;
     case 10:
      var $34 = HEAP[$0];
      HEAP[$retval] = $34;
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
  function _date_timetuple($self) {
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
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 13 + 3];
      
      
      
      
      var $10 = HEAP[HEAP[$self_addr] + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      var $22 = HEAP[HEAP[$self_addr] + 13] << 8 | HEAP[HEAP[$self_addr] + 13 + 1];
      var $23 = _build_struct_time($22, $10, $5, 0, 0, 0, -1);
      HEAP[$0] = $23;
      var $24 = HEAP[$0];
      HEAP[$retval] = $24;
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
  function _date_replace($self, $args, $kw) {
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
      var $clone = __stackBase__ + 20;
      var $tuple = __stackBase__ + 24;
      var $year = __stackBase__ + 28;
      var $month = __stackBase__ + 32;
      var $day = __stackBase__ + 36;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      
      
      
      
      
      
      
      
      
      
      
      var $12 = HEAP[HEAP[$self_addr] + 13] << 8 | HEAP[HEAP[$self_addr] + 13 + 1];
      HEAP[$year] = $12;
      
      
      
      
      var $17 = HEAP[HEAP[$self_addr] + 13 + 2];
      HEAP[$month] = $17;
      
      
      
      
      var $22 = HEAP[HEAP[$self_addr] + 13 + 3];
      HEAP[$day] = $22;
      var $23 = HEAP[$args_addr];
      var $24 = HEAP[$kw_addr];
      var $25 = __PyArg_ParseTupleAndKeywords_SizeT($23, $24, __str152, _date_kws, allocate([ $year, 0, 0, 0, $month, 0, 0, 0, $day, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($25 == 0) {
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
      var $27 = HEAP[$day];
      var $28 = HEAP[$month];
      var $29 = HEAP[$year];
      var $30 = __Py_BuildValue_SizeT(__str128, allocate([ $29, 0, 0, 0, $28, 0, 0, 0, $27, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$tuple] = $30;
      
      
      if (HEAP[$tuple] == 0) {
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
      
      
      
      var $36 = HEAP[HEAP[$self_addr] + 4];
      var $37 = HEAP[$tuple];
      var $38 = _date_new($36, $37, 0);
      HEAP[$clone] = $38;
      
      
      
      var $42 = HEAP[HEAP[$tuple]] - 1;
      
      var $44 = HEAP[$tuple];
      HEAP[$44] = $42;
      
      
      
      
      if (HEAP[HEAP[$tuple]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $53 = HEAP[HEAP[HEAP[$tuple] + 4] + 24];
      var $54 = HEAP[$tuple];
      FUNCTION_TABLE[$53]($54);
      __label__ = 6;
      break;
     case 6:
      var $55 = HEAP[$clone];
      HEAP[$0] = $55;
      __label__ = 7;
      break;
     case 7:
      var $56 = HEAP[$0];
      HEAP[$retval] = $56;
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
  function _date_hash($self) {
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
      var $temp = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      
      
      
      var $4 = HEAP[HEAP[$self_addr] + 8] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $5 = HEAP[$self_addr];
      var $6 = _date_getstate($5);
      HEAP[$temp] = $6;
      
      
      if (HEAP[$temp] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      var $9 = HEAP[$temp];
      var $10 = _PyObject_Hash($9);
      
      var $12 = HEAP[$self_addr] + 8;
      HEAP[$12] = $10;
      
      
      
      var $16 = HEAP[HEAP[$temp]] - 1;
      
      var $18 = HEAP[$temp];
      HEAP[$18] = $16;
      
      
      
      
      if (HEAP[HEAP[$temp]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[$temp] + 4] + 24];
      var $28 = HEAP[$temp];
      FUNCTION_TABLE[$27]($28);
      __label__ = 4;
      break;
     case 4:
      
      
      var $31 = HEAP[HEAP[$self_addr] + 8];
      HEAP[$0] = $31;
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
  function _date_toordinal($self) {
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
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 13 + 3];
      
      
      
      
      var $10 = HEAP[HEAP[$self_addr] + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      var $22 = HEAP[HEAP[$self_addr] + 13] << 8 | HEAP[HEAP[$self_addr] + 13 + 1];
      var $23 = _ymd_to_ord($22, $10, $5);
      var $24 = _PyInt_FromLong($23);
      HEAP[$0] = $24;
      var $25 = HEAP[$0];
      HEAP[$retval] = $25;
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
  function _date_weekday($self) {
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
      var $dow = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 13 + 3];
      
      
      
      
      var $10 = HEAP[HEAP[$self_addr] + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      var $22 = HEAP[HEAP[$self_addr] + 13] << 8 | HEAP[HEAP[$self_addr] + 13 + 1];
      var $23 = _weekday($22, $10, $5);
      HEAP[$dow] = $23;
      var $24 = HEAP[$dow];
      var $25 = _PyInt_FromLong($24);
      HEAP[$0] = $25;
      var $26 = HEAP[$0];
      HEAP[$retval] = $26;
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
  function _date_getstate($self) {
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
      
      
      var $3 = HEAP[__stackBase__] + 13;
      var $4 = _PyString_FromStringAndSize($3, 4);
      var $5 = __Py_BuildValue_SizeT(__str153, allocate([ $4, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $5;
      var $6 = HEAP[$0];
      HEAP[$retval] = $6;
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
  function _date_reduce($self, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$arg_addr] = $arg;
      var $1 = HEAP[$self_addr];
      var $2 = _date_getstate($1);
      
      
      
      var $6 = HEAP[HEAP[$self_addr] + 4];
      var $7 = __Py_BuildValue_SizeT(__str154, allocate([ $6, 0, 0, 0, $2, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $7;
      var $8 = HEAP[$0];
      HEAP[$retval] = $8;
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
  function _tzinfo_nogo($methodname) {
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
      
      HEAP[__stackBase__] = $methodname;
      var $1 = HEAP[_PyExc_NotImplementedError];
      var $2 = HEAP[__stackBase__];
      var $3 = _PyErr_Format($1, __str177, allocate([ $2, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
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
  function _tzinfo_tzname($self, $dt) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $dt_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $self;
      HEAP[$dt_addr] = $dt;
      var $1 = _tzinfo_nogo(__str45);
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
  function _tzinfo_utcoffset($self, $dt) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $dt_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $self;
      HEAP[$dt_addr] = $dt;
      var $1 = _tzinfo_nogo(__str42);
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
  function _tzinfo_dst($self, $dt) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $dt_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $self;
      HEAP[$dt_addr] = $dt;
      var $1 = _tzinfo_nogo(__str44);
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
  function _tzinfo_fromutc($self, $dt) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 64;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $dt_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $y = __stackBase__ + 16;
      var $m = __stackBase__ + 20;
      var $d = __stackBase__ + 24;
      var $hh = __stackBase__ + 28;
      var $mm = __stackBase__ + 32;
      var $ss = __stackBase__ + 36;
      var $us = __stackBase__ + 40;
      var $result = __stackBase__ + 44;
      var $off = __stackBase__ + 48;
      var $dst = __stackBase__ + 52;
      var $none = __stackBase__ + 56;
      var $delta = __stackBase__ + 60;
      
      HEAP[$self_addr] = $self;
      HEAP[$dt_addr] = $dt;
      
      
      
      
      
      if (HEAP[HEAP[$dt_addr] + 4] != _PyDateTime_DateTimeType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[HEAP[$dt_addr] + 4];
      var $10 = _PyType_IsSubtype($9, _PyDateTime_DateTimeType);
      
      if ($10 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $12 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($12, __str178);
      HEAP[$0] = 0;
      __label__ = 37;
      break;
     case 3:
      
      
      
      
      
      if (HEAP[HEAP[$dt_addr] + 12] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      if (HEAP[HEAP[$dt_addr] + 24] != HEAP[$self_addr]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $23 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($23, __str179);
      HEAP[$0] = 0;
      __label__ = 37;
      break;
     case 6:
      
      var $25 = HEAP[$dt_addr];
      
      
      var $28 = HEAP[HEAP[$dt_addr] + 24];
      var $29 = _call_utcoffset($28, $25, $none);
      HEAP[$off] = $29;
      
      var $31 = HEAP[$off] == -1;
      if ($31) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $32 = _PyErr_Occurred();
      
      if ($32 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 37;
      break;
     case 9:
      
      
      if (HEAP[$none] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $36 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($36, __str180);
      HEAP[$0] = 0;
      __label__ = 37;
      break;
     case 11:
      
      var $38 = HEAP[$dt_addr];
      
      
      var $41 = HEAP[HEAP[$dt_addr] + 24];
      var $42 = _call_dst($41, $38, $none);
      HEAP[$dst] = $42;
      
      var $44 = HEAP[$dst] == -1;
      if ($44) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      var $45 = _PyErr_Occurred();
      
      if ($45 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$0] = 0;
      __label__ = 37;
      break;
     case 14:
      
      
      if (HEAP[$none] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $49 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($49, __str181);
      HEAP[$0] = 0;
      __label__ = 37;
      break;
     case 16:
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $63 = HEAP[HEAP[$dt_addr] + 13] << 8 | HEAP[HEAP[$dt_addr] + 13 + 1];
      HEAP[$y] = $63;
      
      
      
      
      
      var $69 = HEAP[HEAP[$dt_addr] + 13 + 2];
      HEAP[$m] = $69;
      
      
      
      
      
      var $75 = HEAP[HEAP[$dt_addr] + 13 + 3];
      HEAP[$d] = $75;
      
      
      
      
      var $80 = HEAP[HEAP[$dt_addr] + 13 + 4];
      HEAP[$hh] = $80;
      
      
      
      
      var $85 = HEAP[HEAP[$dt_addr] + 13 + 5];
      HEAP[$mm] = $85;
      
      
      
      
      var $90 = HEAP[HEAP[$dt_addr] + 13 + 6];
      HEAP[$ss] = $90;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $109 = HEAP[HEAP[$dt_addr] + 13 + 7] << 16 | HEAP[HEAP[$dt_addr] + 13 + 8] << 8 | HEAP[HEAP[$dt_addr] + 13 + 9];
      HEAP[$us] = $109;
      
      
      var $112 = HEAP[$off] - HEAP[$dst];
      HEAP[$delta] = $112;
      
      
      var $115 = HEAP[$mm] + HEAP[$delta];
      HEAP[$mm] = $115;
      
      
      if (HEAP[$mm] < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      if (HEAP[$mm] > 59) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      var $120 = _normalize_datetime($y, $m, $d, $hh, $mm, $ss, $us);
      
      if ($120 < 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$0] = 0;
      __label__ = 37;
      break;
     case 20:
      
      
      var $124 = HEAP[HEAP[$dt_addr] + 24];
      var $125 = HEAP[$us];
      var $126 = HEAP[$ss];
      var $127 = HEAP[$mm];
      var $128 = HEAP[$hh];
      var $129 = HEAP[$d];
      var $130 = HEAP[$m];
      var $131 = HEAP[$y];
      var $132 = _new_datetime_ex($131, $130, $129, $128, $127, $126, $125, $124, _PyDateTime_DateTimeType);
      HEAP[$result] = $132;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      var $135 = HEAP[$result];
      HEAP[$0] = $135;
      __label__ = 37;
      break;
     case 22:
      
      
      var $138 = HEAP[HEAP[$dt_addr] + 24];
      var $139 = HEAP[$result];
      var $140 = _call_dst($138, $139, $none);
      HEAP[$dst] = $140;
      
      var $142 = HEAP[$dst] == -1;
      if ($142) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      var $143 = _PyErr_Occurred();
      
      if ($143 != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      if (HEAP[$none] != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      if (HEAP[$dst] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      var $149 = HEAP[$result];
      HEAP[$0] = $149;
      __label__ = 37;
      break;
     case 27:
      
      
      var $152 = HEAP[$mm] + HEAP[$dst];
      HEAP[$mm] = $152;
      
      
      if (HEAP[$mm] < 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      if (HEAP[$mm] > 59) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $157 = _normalize_datetime($y, $m, $d, $hh, $mm, $ss, $us);
      
      if ($157 < 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      var $162 = HEAP[HEAP[$result]] - 1;
      
      var $164 = HEAP[$result];
      HEAP[$164] = $162;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $173 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $174 = HEAP[$result];
      FUNCTION_TABLE[$173]($174);
      __label__ = 32;
      break;
     case 32:
      
      
      var $177 = HEAP[HEAP[$dt_addr] + 24];
      var $178 = HEAP[$us];
      var $179 = HEAP[$ss];
      var $180 = HEAP[$mm];
      var $181 = HEAP[$hh];
      var $182 = HEAP[$d];
      var $183 = HEAP[$m];
      var $184 = HEAP[$y];
      var $185 = _new_datetime_ex($184, $183, $182, $181, $180, $179, $178, $177, _PyDateTime_DateTimeType);
      HEAP[$result] = $185;
      var $186 = HEAP[$result];
      HEAP[$0] = $186;
      __label__ = 37;
      break;
     case 33:
      var $187 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($187, __str182);
      __label__ = 34;
      break;
     case 34:
      
      
      
      var $191 = HEAP[HEAP[$result]] - 1;
      
      var $193 = HEAP[$result];
      HEAP[$193] = $191;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $202 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $203 = HEAP[$result];
      FUNCTION_TABLE[$202]($203);
      __label__ = 36;
      break;
     case 36:
      HEAP[$0] = 0;
      __label__ = 37;
      break;
     case 37:
      var $204 = HEAP[$0];
      HEAP[$retval] = $204;
      __label__ = 38;
      break;
     case 38:
      var $retval35 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval35;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _tzinfo_reduce($self) {
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
      var $args = __stackBase__ + 12;
      var $state = __stackBase__ + 16;
      var $tmp = __stackBase__ + 20;
      var $getinitargs = __stackBase__ + 24;
      var $getstate = __stackBase__ + 28;
      var $dictptr = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      var $1 = _PyTuple_New(0);
      HEAP[$tmp] = $1;
      
      
      if (HEAP[$tmp] == 0) {
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
      var $4 = HEAP[$self_addr];
      var $5 = _PyObject_GetAttrString($4, __str183);
      HEAP[$getinitargs] = $5;
      
      
      if (HEAP[$getinitargs] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 3:
      var $8 = HEAP[$getinitargs];
      var $9 = HEAP[$tmp];
      var $10 = _PyObject_CallObject($8, $9);
      HEAP[$args] = $10;
      
      
      
      var $14 = HEAP[HEAP[$getinitargs]] - 1;
      
      var $16 = HEAP[$getinitargs];
      HEAP[$16] = $14;
      
      
      
      
      if (HEAP[HEAP[$getinitargs]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $25 = HEAP[HEAP[HEAP[$getinitargs] + 4] + 24];
      var $26 = HEAP[$getinitargs];
      FUNCTION_TABLE[$25]($26);
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[$args] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $32 = HEAP[HEAP[$tmp]] - 1;
      
      var $34 = HEAP[$tmp];
      HEAP[$34] = $32;
      
      
      
      
      if (HEAP[HEAP[$tmp]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $43 = HEAP[HEAP[HEAP[$tmp] + 4] + 24];
      var $44 = HEAP[$tmp];
      FUNCTION_TABLE[$43]($44);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = 0;
      __label__ = 33;
      break;
     case 9:
      __label__ = 11;
      break;
     case 10:
      _PyErr_Clear();
      var $45 = HEAP[$tmp];
      HEAP[$args] = $45;
      
      
      
      var $49 = HEAP[HEAP[$args]] + 1;
      
      var $51 = HEAP[$args];
      HEAP[$51] = $49;
      __label__ = 11;
      break;
     case 11:
      var $52 = HEAP[$self_addr];
      var $53 = _PyObject_GetAttrString($52, __str184);
      HEAP[$getstate] = $53;
      
      
      if (HEAP[$getstate] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 12:
      var $56 = HEAP[$getstate];
      var $57 = HEAP[$tmp];
      var $58 = _PyObject_CallObject($56, $57);
      HEAP[$state] = $58;
      
      
      
      var $62 = HEAP[HEAP[$getstate]] - 1;
      
      var $64 = HEAP[$getstate];
      HEAP[$64] = $62;
      
      
      
      
      if (HEAP[HEAP[$getstate]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[$getstate] + 4] + 24];
      var $74 = HEAP[$getstate];
      FUNCTION_TABLE[$73]($74);
      __label__ = 14;
      break;
     case 14:
      
      
      if (HEAP[$state] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 15:
      
      
      
      var $80 = HEAP[HEAP[$args]] - 1;
      
      var $82 = HEAP[$args];
      HEAP[$82] = $80;
      
      
      
      
      if (HEAP[HEAP[$args]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $91 = HEAP[HEAP[HEAP[$args] + 4] + 24];
      var $92 = HEAP[$args];
      FUNCTION_TABLE[$91]($92);
      __label__ = 17;
      break;
     case 17:
      
      
      
      var $96 = HEAP[HEAP[$tmp]] - 1;
      
      var $98 = HEAP[$tmp];
      HEAP[$98] = $96;
      
      
      
      
      if (HEAP[HEAP[$tmp]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $107 = HEAP[HEAP[HEAP[$tmp] + 4] + 24];
      var $108 = HEAP[$tmp];
      FUNCTION_TABLE[$107]($108);
      __label__ = 19;
      break;
     case 19:
      HEAP[$0] = 0;
      __label__ = 33;
      break;
     case 20:
      __label__ = 26;
      break;
     case 21:
      _PyErr_Clear();
      HEAP[$state] = __Py_NoneStruct;
      var $109 = HEAP[$self_addr];
      var $110 = __PyObject_GetDictPtr($109);
      HEAP[$dictptr] = $110;
      
      
      if (HEAP[$dictptr] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 22:
      
      
      
      if (HEAP[HEAP[$dictptr]] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 23:
      
      var $117 = HEAP[HEAP[$dictptr]];
      var $118 = _PyDict_Size($117);
      
      if ($118 != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      var $121 = HEAP[HEAP[$dictptr]];
      HEAP[$state] = $121;
      __label__ = 25;
      break;
     case 25:
      
      
      
      var $125 = HEAP[HEAP[$state]] + 1;
      
      var $127 = HEAP[$state];
      HEAP[$127] = $125;
      __label__ = 26;
      break;
     case 26:
      
      
      
      var $131 = HEAP[HEAP[$tmp]] - 1;
      
      var $133 = HEAP[$tmp];
      HEAP[$133] = $131;
      
      
      
      
      if (HEAP[HEAP[$tmp]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $142 = HEAP[HEAP[HEAP[$tmp] + 4] + 24];
      var $143 = HEAP[$tmp];
      FUNCTION_TABLE[$142]($143);
      __label__ = 28;
      break;
     case 28:
      
      
      if (HEAP[$state] == __Py_NoneStruct) {
        __label__ = 29;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 29:
      
      
      
      var $149 = HEAP[HEAP[$state]] - 1;
      
      var $151 = HEAP[$state];
      HEAP[$151] = $149;
      
      
      
      
      if (HEAP[HEAP[$state]] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $160 = HEAP[HEAP[HEAP[$state] + 4] + 24];
      var $161 = HEAP[$state];
      FUNCTION_TABLE[$160]($161);
      __label__ = 31;
      break;
     case 31:
      
      
      var $164 = HEAP[HEAP[$self_addr] + 4];
      var $165 = HEAP[$args];
      var $166 = __Py_BuildValue_SizeT(__str154, allocate([ $164, 0, 0, 0, $165, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $166;
      __label__ = 33;
      break;
     case 32:
      
      
      var $169 = HEAP[HEAP[$self_addr] + 4];
      var $170 = HEAP[$args];
      var $171 = HEAP[$state];
      var $172 = __Py_BuildValue_SizeT(__str185, allocate([ $169, 0, 0, 0, $170, 0, 0, 0, $171, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $172;
      __label__ = 33;
      break;
     case 33:
      var $173 = HEAP[$0];
      HEAP[$retval] = $173;
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
  function _time_hour($self, $unused) {
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
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 13];
      var $6 = _PyInt_FromLong($5);
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
  function _time_minute($self, $unused) {
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
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 13 + 1];
      var $6 = _PyInt_FromLong($5);
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
  function _py_time_second($self, $unused) {
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
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 13 + 2];
      var $6 = _PyInt_FromLong($5);
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
  function _time_microsecond($self, $unused) {
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
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $19 = HEAP[HEAP[$self_addr] + 13 + 3] << 16 | HEAP[HEAP[$self_addr] + 13 + 4] << 8 | HEAP[HEAP[$self_addr] + 13 + 5];
      var $20 = _PyInt_FromLong($19);
      HEAP[$0] = $20;
      var $21 = HEAP[$0];
      HEAP[$retval] = $21;
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
  function _time_tzinfo($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $iftmp_259 = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$self_addr] + 20];
      HEAP[$iftmp_259] = $8;
      __label__ = 3;
      break;
     case 2:
      HEAP[$iftmp_259] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      var $9 = HEAP[$iftmp_259];
      HEAP[$result] = $9;
      
      
      
      var $13 = HEAP[HEAP[$result]] + 1;
      
      var $15 = HEAP[$result];
      HEAP[$15] = $13;
      var $16 = HEAP[$result];
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
  function _time_new($type, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 57;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 57);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $self = __stackBase__ + 20;
      var $state = __stackBase__ + 24;
      var $hour = __stackBase__ + 28;
      var $minute = __stackBase__ + 32;
      var $second = __stackBase__ + 36;
      var $usecond = __stackBase__ + 40;
      var $tzinfo = __stackBase__ + 44;
      var $me = __stackBase__ + 48;
      var $aware = __stackBase__ + 52;
      var $pdata = __stackBase__ + 53;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$self] = 0;
      HEAP[$hour] = 0;
      HEAP[$minute] = 0;
      HEAP[$second] = 0;
      HEAP[$usecond] = 0;
      HEAP[$tzinfo] = __Py_NoneStruct;
      
      
      
      
      
      if (HEAP[HEAP[$args_addr] + 8] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[HEAP[$args_addr] + 8] <= 2) {
        __label__ = 2;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 2:
      
      
      
      
      var $15 = HEAP[HEAP[$args_addr] + 12];
      HEAP[$state] = $15;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$state] + 4] + 84] & 134217728) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 3:
      
      
      
      
      
      if (HEAP[HEAP[$state] + 8] == 6) {
        __label__ = 4;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 4:
      
      
      
      
      
      
      if (HEAP[HEAP[$state] + 20] <= 23) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 5:
      
      
      
      
      
      if (HEAP[HEAP[$args_addr] + 8] == 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      var $43 = HEAP[HEAP[$args_addr] + 12 + 4];
      HEAP[$tzinfo] = $43;
      var $44 = HEAP[$tzinfo];
      var $45 = _check_tzinfo_subclass($44);
      
      if ($45 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $47 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($47, __str197);
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 8:
      
      
      var $50 = HEAP[$tzinfo] != __Py_NoneStruct;
      HEAP[$aware] = $50;
      
      
      var $53 = HEAP[HEAP[$type_addr] + 152];
      
      var $55 = HEAP[$aware];
      var $56 = HEAP[$type_addr];
      var $57 = FUNCTION_TABLE[$53]($56, $55);
      var $58 = $57;
      HEAP[$me] = $58;
      
      
      if (HEAP[$me] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      var $64 = HEAP[$state] + 20;
      HEAP[$pdata] = $64;
      
      
      var $67 = HEAP[$me] + 13;
      var $68 = HEAP[$pdata];
      _llvm_memcpy_p0i8_p0i8_i32($67, $68, 6, 1, 0);
      
      var $70 = HEAP[$me] + 8;
      HEAP[$70] = -1;
      
      var $72 = HEAP[$me] + 12;
      var $73 = HEAP[$aware];
      HEAP[$72] = $73;
      
      
      if (HEAP[$aware] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      var $79 = HEAP[HEAP[$tzinfo]] + 1;
      var $80 = HEAP[$tzinfo];
      HEAP[$80] = $79;
      var $81 = HEAP[$tzinfo];
      
      var $83 = HEAP[$me] + 20;
      HEAP[$83] = $81;
      __label__ = 11;
      break;
     case 11:
      
      var $85 = HEAP[$me];
      HEAP[$0] = $85;
      __label__ = 19;
      break;
     case 12:
      var $86 = HEAP[$args_addr];
      var $87 = HEAP[$kw_addr];
      var $88 = __PyArg_ParseTupleAndKeywords_SizeT($86, $87, __str198, _time_kws, allocate([ $hour, 0, 0, 0, $minute, 0, 0, 0, $second, 0, 0, 0, $usecond, 0, 0, 0, $tzinfo, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($88 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 13:
      var $90 = HEAP[$usecond];
      var $91 = HEAP[$second];
      var $92 = HEAP[$minute];
      var $93 = HEAP[$hour];
      var $94 = _check_time_args($93, $92, $91, $90);
      
      if ($94 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 15:
      var $96 = HEAP[$tzinfo];
      var $97 = _check_tzinfo_subclass($96);
      
      if ($97 < 0) {
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
      var $99 = HEAP[$tzinfo];
      var $100 = HEAP[$usecond];
      var $101 = HEAP[$second];
      var $102 = HEAP[$minute];
      var $103 = HEAP[$hour];
      var $104 = HEAP[$type_addr];
      var $105 = _new_time_ex($103, $102, $101, $100, $99, $104);
      HEAP[$self] = $105;
      __label__ = 18;
      break;
     case 18:
      var $106 = HEAP[$self];
      HEAP[$0] = $106;
      __label__ = 19;
      break;
     case 19:
      var $107 = HEAP[$0];
      HEAP[$retval] = $107;
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
  function _time_dealloc($self) {
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
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      var $11 = HEAP[HEAP[$self_addr] + 20];
      
      
      var $14 = HEAP[$11] - 1;
      var $15 = $11;
      HEAP[$15] = $14;
      
      
      
      if (HEAP[$11] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $25 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 4] + 24];
      
      
      var $28 = HEAP[HEAP[$self_addr] + 20];
      FUNCTION_TABLE[$25]($28);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      var $34 = HEAP[HEAP[HEAP[$self_addr] + 4] + 160];
      
      var $36 = HEAP[$self_addr];
      FUNCTION_TABLE[$34]($36);
      __label__ = 5;
      break;
     case 5:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_utcoffset($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_286 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$self_addr] + 20];
      HEAP[$iftmp_286] = $8;
      __label__ = 3;
      break;
     case 2:
      HEAP[$iftmp_286] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      var $9 = HEAP[$iftmp_286];
      var $10 = _offset_as_timedelta($9, __str42, __Py_NoneStruct);
      HEAP[$0] = $10;
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
  function _time_dst($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_288 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$self_addr] + 20];
      HEAP[$iftmp_288] = $8;
      __label__ = 3;
      break;
     case 2:
      HEAP[$iftmp_288] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      var $9 = HEAP[$iftmp_288];
      var $10 = _offset_as_timedelta($9, __str44, __Py_NoneStruct);
      HEAP[$0] = $10;
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
  function _time_tzname($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_290 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$self_addr] + 20];
      HEAP[$iftmp_290] = $8;
      __label__ = 3;
      break;
     case 2:
      HEAP[$iftmp_290] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      var $9 = HEAP[$iftmp_290];
      var $10 = _call_tzname($9, __Py_NoneStruct);
      HEAP[$0] = $10;
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
  function _time_repr($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 136;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 136);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $buffer = __stackBase__ + 12;
      var $type_name = __stackBase__ + 112;
      var $h = __stackBase__ + 116;
      var $m = __stackBase__ + 120;
      var $s = __stackBase__ + 124;
      var $us = __stackBase__ + 128;
      var $result = __stackBase__ + 132;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      
      var $6 = HEAP[HEAP[HEAP[$self_addr] + 4] + 12];
      HEAP[$type_name] = $6;
      
      
      
      
      var $11 = HEAP[HEAP[$self_addr] + 13];
      HEAP[$h] = $11;
      
      
      
      
      var $16 = HEAP[HEAP[$self_addr] + 13 + 1];
      HEAP[$m] = $16;
      
      
      
      
      var $21 = HEAP[HEAP[$self_addr] + 13 + 2];
      HEAP[$s] = $21;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $40 = HEAP[HEAP[$self_addr] + 13 + 3] << 16 | HEAP[HEAP[$self_addr] + 13 + 4] << 8 | HEAP[HEAP[$self_addr] + 13 + 5];
      HEAP[$us] = $40;
      HEAP[$result] = 0;
      
      
      if (HEAP[$us] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $buffer1 = $buffer;
      var $43 = HEAP[$type_name];
      var $44 = HEAP[$h];
      var $45 = HEAP[$m];
      var $46 = HEAP[$s];
      var $47 = HEAP[$us];
      var $48 = _PyOS_snprintf($buffer1, 100, __str199, allocate([ $43, 0, 0, 0, $44, 0, 0, 0, $45, 0, 0, 0, $46, 0, 0, 0, $47, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 5;
      break;
     case 2:
      
      
      if (HEAP[$s] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $buffer4 = $buffer;
      var $51 = HEAP[$type_name];
      var $52 = HEAP[$h];
      var $53 = HEAP[$m];
      var $54 = HEAP[$s];
      var $55 = _PyOS_snprintf($buffer4, 100, __str121, allocate([ $51, 0, 0, 0, $52, 0, 0, 0, $53, 0, 0, 0, $54, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 5;
      break;
     case 4:
      var $buffer6 = $buffer;
      var $56 = HEAP[$type_name];
      var $57 = HEAP[$h];
      var $58 = HEAP[$m];
      var $59 = _PyOS_snprintf($buffer6, 100, __str122, allocate([ $56, 0, 0, 0, $57, 0, 0, 0, $58, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 5;
      break;
     case 5:
      var $buffer8 = $buffer;
      var $60 = _PyString_FromString($buffer8);
      HEAP[$result] = $60;
      
      
      if (HEAP[$result] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $70 = HEAP[HEAP[$self_addr] + 20];
      var $71 = HEAP[$result];
      var $72 = _append_keyword_tzinfo($71, $70);
      HEAP[$result] = $72;
      __label__ = 8;
      break;
     case 8:
      var $73 = HEAP[$result];
      HEAP[$0] = $73;
      var $74 = HEAP[$0];
      HEAP[$retval] = $74;
      __label__ = 9;
      break;
     case 9:
      var $retval12 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_str($self) {
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
      
      var $2 = HEAP[__stackBase__];
      var $3 = __PyObject_CallMethod_SizeT($2, __str146, __str99, allocate(1, "i32", ALLOC_STACK));
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
  function _time_isoformat($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 152;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 152);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $buf = __stackBase__ + 16;
      var $result = __stackBase__ + 116;
      var $datetime = __stackBase__ + 120;
      var $pdatetime = __stackBase__ + 148;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      HEAP[$pdatetime] = $datetime;
      
      
      var $3 = HEAP[$self_addr] + 13;
      
      
      
      var $7 = HEAP[$pdatetime] + 13 + 4;
      _llvm_memcpy_p0i8_p0i8_i32($7, $3, 6, 1, 0);
      var $8 = HEAP[$pdatetime];
      var $buf1 = $buf;
      var $9 = _isoformat_time($8, $buf1, 100);
      var $buf2 = $buf;
      var $10 = _PyString_FromString($buf2);
      HEAP[$result] = $10;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $22 = HEAP[$result];
      HEAP[$0] = $22;
      __label__ = 9;
      break;
     case 4:
      
      
      var $25 = HEAP[HEAP[$self_addr] + 20];
      var $buf6 = $buf;
      var $26 = _format_utcoffset($buf6, 100, __str200, $25, __Py_NoneStruct);
      
      if ($26 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $28 = HEAP[$result];
      
      
      var $31 = HEAP[$28] - 1;
      var $32 = $28;
      HEAP[$32] = $31;
      
      
      
      if (HEAP[$28] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $40 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $41 = HEAP[$result];
      FUNCTION_TABLE[$40]($41);
      __label__ = 7;
      break;
     case 7:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 8:
      var $buf11 = $buf;
      var $42 = _PyString_FromString($buf11);
      _PyString_ConcatAndDel($result, $42);
      var $43 = HEAP[$result];
      HEAP[$0] = $43;
      __label__ = 9;
      break;
     case 9:
      var $44 = HEAP[$0];
      HEAP[$retval] = $44;
      __label__ = 10;
      break;
     case 10:
      var $retval13 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_strftime($self, $args, $kw) {
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
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      var $tuple = __stackBase__ + 24;
      var $format = __stackBase__ + 28;
      var $format_len = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kw_addr];
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str147, _keywords_11990, allocate([ $format, 0, 0, 0, $format_len, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      var $9 = HEAP[HEAP[$self_addr] + 13 + 2];
      
      
      
      
      var $14 = HEAP[HEAP[$self_addr] + 13 + 1];
      
      
      
      
      var $19 = HEAP[HEAP[$self_addr] + 13];
      var $20 = __Py_BuildValue_SizeT(__str201, allocate([ 1900, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, $19, 0, 0, 0, $14, 0, 0, 0, $9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$tuple] = $20;
      
      
      if (HEAP[$tuple] == 0) {
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
      var $23 = HEAP[$tuple];
      var $24 = _PyTuple_Size($23);
      
      if ($24 != 9) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str202, __str1, 3325, ___PRETTY_FUNCTION___11991);
      throw "Reached an unreachable!";
     case 6:
      var $26 = HEAP[$format_len];
      var $27 = HEAP[$format];
      
      var $29 = HEAP[$self_addr];
      var $30 = HEAP[$tuple];
      var $31 = _wrap_strftime($29, $27, $26, $30, __Py_NoneStruct);
      HEAP[$result] = $31;
      
      
      
      var $35 = HEAP[HEAP[$tuple]] - 1;
      
      var $37 = HEAP[$tuple];
      HEAP[$37] = $35;
      
      
      
      
      if (HEAP[HEAP[$tuple]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$tuple] + 4] + 24];
      var $47 = HEAP[$tuple];
      FUNCTION_TABLE[$46]($47);
      __label__ = 8;
      break;
     case 8:
      var $48 = HEAP[$result];
      HEAP[$0] = $48;
      __label__ = 9;
      break;
     case 9:
      var $49 = HEAP[$0];
      HEAP[$retval] = $49;
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
  function _time_richcompare($self, $other, $op) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $other_addr = __stackBase__ + 4;
      var $op_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $iftmp_304 = __stackBase__ + 20;
      var $diff = __stackBase__ + 24;
      var $n1 = __stackBase__ + 28;
      var $n2 = __stackBase__ + 32;
      var $offset1 = __stackBase__ + 36;
      var $offset2 = __stackBase__ + 40;
      var $result = __stackBase__ + 44;
      
      HEAP[$self_addr] = $self;
      HEAP[$other_addr] = $other;
      HEAP[$op_addr] = $op;
      
      
      
      
      if (HEAP[HEAP[$other_addr] + 4] != _PyDateTime_TimeType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$other_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_TimeType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 2:
      
      
      if (HEAP[$op_addr] == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$op_addr] == 3) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      if (HEAP[$op_addr] == 2) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$iftmp_304] = __Py_ZeroStruct;
      __label__ = 7;
      break;
     case 6:
      HEAP[$iftmp_304] = __Py_TrueStruct;
      __label__ = 7;
      break;
     case 7:
      var $16 = HEAP[$iftmp_304];
      HEAP[$result] = $16;
      
      
      
      var $20 = HEAP[HEAP[$result]] + 1;
      
      var $22 = HEAP[$result];
      HEAP[$22] = $20;
      var $23 = HEAP[$result];
      HEAP[$0] = $23;
      __label__ = 27;
      break;
     case 8:
      
      var $25 = HEAP[$self_addr];
      var $26 = HEAP[$other_addr];
      var $27 = _cmperror($25, $26);
      HEAP[$0] = $27;
      __label__ = 27;
      break;
     case 9:
      
      var $29 = HEAP[$self_addr];
      var $30 = HEAP[$other_addr];
      var $31 = _classify_two_utcoffsets($29, $offset1, $n1, __Py_NoneStruct, $30, $offset2, $n2, __Py_NoneStruct);
      
      if ($31 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 11:
      
      
      if (HEAP[$n1] == 1) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if (HEAP[$n2] == 1) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      ___assert_fail(__str203, __str1, 3359, ___PRETTY_FUNCTION___12032);
      throw "Reached an unreachable!";
     case 14:
      
      
      
      if (HEAP[$n1] == HEAP[$n2]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      if (HEAP[$offset1] == HEAP[$offset2]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      var $46 = HEAP[$other_addr] + 13;
      
      
      var $49 = HEAP[$self_addr] + 13;
      var $50 = _memcmp($49, $46, 6);
      HEAP[$diff] = $50;
      var $51 = HEAP[$diff];
      var $52 = HEAP[$op_addr];
      var $53 = _diff_to_bool($51, $52);
      HEAP[$0] = $53;
      __label__ = 27;
      break;
     case 17:
      
      
      if (HEAP[$n1] == 3) {
        __label__ = 18;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 18:
      
      
      if (HEAP[$n2] == 3) {
        __label__ = 19;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 19:
      
      
      
      if (HEAP[$offset1] == HEAP[$offset2]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      ___assert_fail(__str204, __str1, 3371, ___PRETTY_FUNCTION___12032);
      throw "Reached an unreachable!";
     case 21:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $81 = HEAP[HEAP[$self_addr] + 13] * 3600 + (HEAP[HEAP[$self_addr] + 13 + 1] - HEAP[$offset1]) * 60 + HEAP[HEAP[$self_addr] + 13 + 2];
      HEAP[$offset1] = $81;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $105 = HEAP[HEAP[$other_addr] + 13] * 3600 + (HEAP[HEAP[$other_addr] + 13 + 1] - HEAP[$offset2]) * 60 + HEAP[HEAP[$other_addr] + 13 + 2];
      HEAP[$offset2] = $105;
      
      
      var $108 = HEAP[$offset1] - HEAP[$offset2];
      HEAP[$diff] = $108;
      
      
      if (HEAP[$diff] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $152 = (HEAP[HEAP[$self_addr] + 13 + 3] << 16 | HEAP[HEAP[$self_addr] + 13 + 4] << 8 | HEAP[HEAP[$self_addr] + 13 + 5]) - (HEAP[HEAP[$other_addr] + 13 + 3] << 16 | HEAP[HEAP[$other_addr] + 13 + 4] << 8 | HEAP[HEAP[$other_addr] + 13 + 5]);
      HEAP[$diff] = $152;
      __label__ = 23;
      break;
     case 23:
      var $153 = HEAP[$diff];
      var $154 = HEAP[$op_addr];
      var $155 = _diff_to_bool($153, $154);
      HEAP[$0] = $155;
      __label__ = 27;
      break;
     case 24:
      
      
      
      if (HEAP[$n1] == HEAP[$n2]) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      ___assert_fail(__str205, __str1, 3388, ___PRETTY_FUNCTION___12032);
      throw "Reached an unreachable!";
     case 26:
      var $159 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($159, __str206);
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 27:
      var $160 = HEAP[$0];
      HEAP[$retval] = $160;
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
  function _time_hash($self) {
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
      var $n = __stackBase__ + 12;
      var $offset = __stackBase__ + 16;
      var $temp = __stackBase__ + 20;
      var $hour = __stackBase__ + 24;
      var $minute = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      
      
      
      var $4 = HEAP[HEAP[$self_addr] + 8] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 1:
      
      var $6 = HEAP[$self_addr];
      var $7 = _classify_utcoffset($6, __Py_NoneStruct, $offset);
      HEAP[$n] = $7;
      
      
      if (HEAP[$n] == 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str207, __str1, 3404, ___PRETTY_FUNCTION___12150);
      throw "Reached an unreachable!";
     case 3:
      
      
      if (HEAP[$n] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 19;
      break;
     case 5:
      
      
      if (HEAP[$offset] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      var $16 = HEAP[$self_addr] + 13;
      var $17 = _PyString_FromStringAndSize($16, 6);
      HEAP[$temp] = $17;
      __label__ = 15;
      break;
     case 7:
      
      
      if (HEAP[$n] != 3) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      ___assert_fail(__str208, __str1, 3416, ___PRETTY_FUNCTION___12150);
      throw "Reached an unreachable!";
     case 9:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str209, __str1, 3417, ___PRETTY_FUNCTION___12150);
      throw "Reached an unreachable!";
     case 11:
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $38 = HEAP[HEAP[$self_addr] + 13] * 60 + HEAP[HEAP[$self_addr] + 13 + 1] - HEAP[$offset];
      var $39 = _divmod($38, 60, $minute);
      HEAP[$hour] = $39;
      
      
      if (HEAP[$hour] < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if (HEAP[$hour] > 23) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $62 = HEAP[HEAP[$self_addr] + 13 + 3] << 16 | HEAP[HEAP[$self_addr] + 13 + 4] << 8 | HEAP[HEAP[$self_addr] + 13 + 5];
      
      
      
      
      var $67 = HEAP[HEAP[$self_addr] + 13 + 2];
      var $68 = HEAP[$minute];
      var $69 = HEAP[$hour];
      var $70 = _new_time_ex($69, $68, $67, $62, __Py_NoneStruct, _PyDateTime_TimeType);
      HEAP[$temp] = $70;
      __label__ = 15;
      break;
     case 14:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $89 = HEAP[HEAP[$self_addr] + 13 + 3] << 16 | HEAP[HEAP[$self_addr] + 13 + 4] << 8 | HEAP[HEAP[$self_addr] + 13 + 5];
      
      
      
      
      var $94 = HEAP[HEAP[$self_addr] + 13 + 2];
      var $95 = HEAP[$minute];
      var $96 = HEAP[$hour];
      var $97 = __Py_BuildValue_SizeT(__str210, allocate([ $96, 0, 0, 0, $95, 0, 0, 0, $94, 0, 0, 0, $89, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$temp] = $97;
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$temp] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      var $100 = HEAP[$temp];
      var $101 = _PyObject_Hash($100);
      
      var $103 = HEAP[$self_addr] + 8;
      HEAP[$103] = $101;
      
      
      
      var $107 = HEAP[HEAP[$temp]] - 1;
      
      var $109 = HEAP[$temp];
      HEAP[$109] = $107;
      
      
      
      
      if (HEAP[HEAP[$temp]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $118 = HEAP[HEAP[HEAP[$temp] + 4] + 24];
      var $119 = HEAP[$temp];
      FUNCTION_TABLE[$118]($119);
      __label__ = 18;
      break;
     case 18:
      
      
      var $122 = HEAP[HEAP[$self_addr] + 8];
      HEAP[$0] = $122;
      __label__ = 19;
      break;
     case 19:
      var $123 = HEAP[$0];
      HEAP[$retval] = $123;
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
  function _time_replace($self, $args, $kw) {
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
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $iftmp_337 = __stackBase__ + 20;
      var $clone = __stackBase__ + 24;
      var $tuple = __stackBase__ + 28;
      var $hh = __stackBase__ + 32;
      var $mm = __stackBase__ + 36;
      var $ss = __stackBase__ + 40;
      var $us = __stackBase__ + 44;
      var $tzinfo = __stackBase__ + 48;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 13];
      HEAP[$hh] = $5;
      
      
      
      
      var $10 = HEAP[HEAP[$self_addr] + 13 + 1];
      HEAP[$mm] = $10;
      
      
      
      
      var $15 = HEAP[HEAP[$self_addr] + 13 + 2];
      HEAP[$ss] = $15;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $34 = HEAP[HEAP[$self_addr] + 13 + 3] << 16 | HEAP[HEAP[$self_addr] + 13 + 4] << 8 | HEAP[HEAP[$self_addr] + 13 + 5];
      HEAP[$us] = $34;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $42 = HEAP[HEAP[$self_addr] + 20];
      HEAP[$iftmp_337] = $42;
      __label__ = 3;
      break;
     case 2:
      HEAP[$iftmp_337] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      var $43 = HEAP[$iftmp_337];
      HEAP[$tzinfo] = $43;
      var $44 = HEAP[$args_addr];
      var $45 = HEAP[$kw_addr];
      var $46 = __PyArg_ParseTupleAndKeywords_SizeT($44, $45, __str211, _time_kws, allocate([ $hh, 0, 0, 0, $mm, 0, 0, 0, $ss, 0, 0, 0, $us, 0, 0, 0, $tzinfo, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($46 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 5:
      var $48 = HEAP[$tzinfo];
      var $49 = HEAP[$us];
      var $50 = HEAP[$ss];
      var $51 = HEAP[$mm];
      var $52 = HEAP[$hh];
      var $53 = __Py_BuildValue_SizeT(__str212, allocate([ $52, 0, 0, 0, $51, 0, 0, 0, $50, 0, 0, 0, $49, 0, 0, 0, $48, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$tuple] = $53;
      
      
      if (HEAP[$tuple] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 7:
      
      
      
      var $59 = HEAP[HEAP[$self_addr] + 4];
      var $60 = HEAP[$tuple];
      var $61 = _time_new($59, $60, 0);
      HEAP[$clone] = $61;
      
      
      
      var $65 = HEAP[HEAP[$tuple]] - 1;
      
      var $67 = HEAP[$tuple];
      HEAP[$67] = $65;
      
      
      
      
      if (HEAP[HEAP[$tuple]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $76 = HEAP[HEAP[HEAP[$tuple] + 4] + 24];
      var $77 = HEAP[$tuple];
      FUNCTION_TABLE[$76]($77);
      __label__ = 9;
      break;
     case 9:
      var $78 = HEAP[$clone];
      HEAP[$0] = $78;
      __label__ = 10;
      break;
     case 10:
      var $79 = HEAP[$0];
      HEAP[$retval] = $79;
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
  function _time_nonzero($self) {
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
      var $offset = __stackBase__ + 12;
      var $none = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 13 + 2] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$self_addr] + 13 + 3] << 16 | HEAP[HEAP[$self_addr] + 13 + 4] << 8 | HEAP[HEAP[$self_addr] + 13 + 5]) != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 1;
      __label__ = 9;
      break;
     case 3:
      HEAP[$offset] = 0;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != __Py_NoneStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      var $37 = HEAP[HEAP[$self_addr] + 20];
      var $38 = _call_utcoffset($37, __Py_NoneStruct, $none);
      HEAP[$offset] = $38;
      
      var $40 = HEAP[$offset] == -1;
      if ($40) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      var $41 = _PyErr_Occurred();
      
      if ($41 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = -1;
      __label__ = 9;
      break;
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $58 = HEAP[HEAP[$self_addr] + 13 + 1] - HEAP[$offset] + HEAP[HEAP[$self_addr] + 13] * 60 != 0;
      HEAP[$0] = $58;
      __label__ = 9;
      break;
     case 9:
      var $59 = HEAP[$0];
      HEAP[$retval] = $59;
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
  function _time_getstate($self) {
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
      var $basestate = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$result] = 0;
      
      
      var $3 = HEAP[$self_addr] + 13;
      var $4 = _PyString_FromStringAndSize($3, 6);
      HEAP[$basestate] = $4;
      
      
      if (HEAP[$basestate] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $16 = HEAP[$basestate];
      var $17 = _PyTuple_Pack(1, allocate([ $16, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $17;
      __label__ = 5;
      break;
     case 4:
      
      
      var $20 = HEAP[HEAP[$self_addr] + 20];
      var $21 = HEAP[$basestate];
      var $22 = _PyTuple_Pack(2, allocate([ $21, 0, 0, 0, $20, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $22;
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $26 = HEAP[HEAP[$basestate]] - 1;
      
      var $28 = HEAP[$basestate];
      HEAP[$28] = $26;
      
      
      
      
      if (HEAP[HEAP[$basestate]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $37 = HEAP[HEAP[HEAP[$basestate] + 4] + 24];
      var $38 = HEAP[$basestate];
      FUNCTION_TABLE[$37]($38);
      __label__ = 7;
      break;
     case 7:
      var $39 = HEAP[$result];
      HEAP[$0] = $39;
      var $40 = HEAP[$0];
      HEAP[$retval] = $40;
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
  function _time_reduce($self, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$arg_addr] = $arg;
      var $1 = HEAP[$self_addr];
      var $2 = _time_getstate($1);
      
      
      
      var $6 = HEAP[HEAP[$self_addr] + 4];
      var $7 = __Py_BuildValue_SizeT(__str154, allocate([ $6, 0, 0, 0, $2, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $7;
      var $8 = HEAP[$0];
      HEAP[$retval] = $8;
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
  function _datetime_hour($self, $unused) {
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
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 13 + 4];
      var $6 = _PyInt_FromLong($5);
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
  function _datetime_minute($self, $unused) {
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
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 13 + 5];
      var $6 = _PyInt_FromLong($5);
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
  function _datetime_second($self, $unused) {
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
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 13 + 6];
      var $6 = _PyInt_FromLong($5);
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
  function _datetime_microsecond($self, $unused) {
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
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $19 = HEAP[HEAP[$self_addr] + 13 + 7] << 16 | HEAP[HEAP[$self_addr] + 13 + 8] << 8 | HEAP[HEAP[$self_addr] + 13 + 9];
      var $20 = _PyInt_FromLong($19);
      HEAP[$0] = $20;
      var $21 = HEAP[$0];
      HEAP[$retval] = $21;
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
  function _datetime_tzinfo($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $iftmp_348 = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$self_addr] + 24];
      HEAP[$iftmp_348] = $8;
      __label__ = 3;
      break;
     case 2:
      HEAP[$iftmp_348] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      var $9 = HEAP[$iftmp_348];
      HEAP[$result] = $9;
      
      
      
      var $13 = HEAP[HEAP[$result]] + 1;
      
      var $15 = HEAP[$result];
      HEAP[$15] = $13;
      var $16 = HEAP[$result];
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
  function _datetime_new($type, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 69;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 69);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $self = __stackBase__ + 20;
      var $state = __stackBase__ + 24;
      var $year = __stackBase__ + 28;
      var $month = __stackBase__ + 32;
      var $day = __stackBase__ + 36;
      var $hour = __stackBase__ + 40;
      var $minute = __stackBase__ + 44;
      var $second = __stackBase__ + 48;
      var $usecond = __stackBase__ + 52;
      var $tzinfo = __stackBase__ + 56;
      var $me = __stackBase__ + 60;
      var $aware = __stackBase__ + 64;
      var $pdata = __stackBase__ + 65;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$self] = 0;
      HEAP[$hour] = 0;
      HEAP[$minute] = 0;
      HEAP[$second] = 0;
      HEAP[$usecond] = 0;
      HEAP[$tzinfo] = __Py_NoneStruct;
      
      
      
      
      
      if (HEAP[HEAP[$args_addr] + 8] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[HEAP[$args_addr] + 8] <= 2) {
        __label__ = 2;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 2:
      
      
      
      
      var $15 = HEAP[HEAP[$args_addr] + 12];
      HEAP[$state] = $15;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$state] + 4] + 84] & 134217728) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 3:
      
      
      
      
      
      if (HEAP[HEAP[$state] + 8] == 10) {
        __label__ = 4;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$state] + 20 + 2] - 1 <= 11) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 5:
      
      
      
      
      
      if (HEAP[HEAP[$args_addr] + 8] == 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      var $45 = HEAP[HEAP[$args_addr] + 12 + 4];
      HEAP[$tzinfo] = $45;
      var $46 = HEAP[$tzinfo];
      var $47 = _check_tzinfo_subclass($46);
      
      if ($47 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $49 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($49, __str197);
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 8:
      
      
      var $52 = HEAP[$tzinfo] != __Py_NoneStruct;
      HEAP[$aware] = $52;
      
      
      var $55 = HEAP[HEAP[$type_addr] + 152];
      
      var $57 = HEAP[$aware];
      var $58 = HEAP[$type_addr];
      var $59 = FUNCTION_TABLE[$55]($58, $57);
      var $60 = $59;
      HEAP[$me] = $60;
      
      
      if (HEAP[$me] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      var $66 = HEAP[$state] + 20;
      HEAP[$pdata] = $66;
      
      
      var $69 = HEAP[$me] + 13;
      var $70 = HEAP[$pdata];
      _llvm_memcpy_p0i8_p0i8_i32($69, $70, 10, 1, 0);
      
      var $72 = HEAP[$me] + 8;
      HEAP[$72] = -1;
      
      var $74 = HEAP[$me] + 12;
      var $75 = HEAP[$aware];
      HEAP[$74] = $75;
      
      
      if (HEAP[$aware] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      var $81 = HEAP[HEAP[$tzinfo]] + 1;
      var $82 = HEAP[$tzinfo];
      HEAP[$82] = $81;
      var $83 = HEAP[$tzinfo];
      
      var $85 = HEAP[$me] + 24;
      HEAP[$85] = $83;
      __label__ = 11;
      break;
     case 11:
      
      var $87 = HEAP[$me];
      HEAP[$0] = $87;
      __label__ = 21;
      break;
     case 12:
      var $88 = HEAP[$args_addr];
      var $89 = HEAP[$kw_addr];
      var $90 = __PyArg_ParseTupleAndKeywords_SizeT($88, $89, __str219, _datetime_kws, allocate([ $year, 0, 0, 0, $month, 0, 0, 0, $day, 0, 0, 0, $hour, 0, 0, 0, $minute, 0, 0, 0, $second, 0, 0, 0, $usecond, 0, 0, 0, $tzinfo, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($90 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 13:
      var $92 = HEAP[$day];
      var $93 = HEAP[$month];
      var $94 = HEAP[$year];
      var $95 = _check_date_args($94, $93, $92);
      
      if ($95 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 15:
      var $97 = HEAP[$usecond];
      var $98 = HEAP[$second];
      var $99 = HEAP[$minute];
      var $100 = HEAP[$hour];
      var $101 = _check_time_args($100, $99, $98, $97);
      
      if ($101 < 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 17:
      var $103 = HEAP[$tzinfo];
      var $104 = _check_tzinfo_subclass($103);
      
      if ($104 < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 19:
      var $106 = HEAP[$tzinfo];
      var $107 = HEAP[$usecond];
      var $108 = HEAP[$second];
      var $109 = HEAP[$minute];
      var $110 = HEAP[$hour];
      var $111 = HEAP[$day];
      var $112 = HEAP[$month];
      var $113 = HEAP[$year];
      var $114 = HEAP[$type_addr];
      var $115 = _new_datetime_ex($113, $112, $111, $110, $109, $108, $107, $106, $114);
      HEAP[$self] = $115;
      __label__ = 20;
      break;
     case 20:
      var $116 = HEAP[$self];
      HEAP[$0] = $116;
      __label__ = 21;
      break;
     case 21:
      var $117 = HEAP[$0];
      HEAP[$retval] = $117;
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
  function _datetime_from_timet_and_us($cls, $f, $timet, $us, $tzinfo) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $timet_addr = __stackBase__ + 8;
      var $us_addr = __stackBase__ + 12;
      var $tzinfo_addr = __stackBase__ + 16;
      var $retval = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $tm = __stackBase__ + 28;
      var $result = __stackBase__ + 32;
      
      HEAP[$cls_addr] = $cls;
      HEAP[$f_addr] = $f;
      HEAP[$timet_addr] = $timet;
      HEAP[$us_addr] = $us;
      HEAP[$tzinfo_addr] = $tzinfo;
      HEAP[$result] = 0;
      var $1 = HEAP[$f_addr];
      var $2 = FUNCTION_TABLE[$1]($timet_addr);
      HEAP[$tm] = $2;
      
      
      if (HEAP[$tm] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$tm]] > 59) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $10 = HEAP[$tm];
      HEAP[$10] = 59;
      __label__ = 3;
      break;
     case 3:
      
      
      var $13 = HEAP[HEAP[$tm]];
      
      
      var $16 = HEAP[HEAP[$tm] + 4];
      
      
      var $19 = HEAP[HEAP[$tm] + 8];
      
      
      var $22 = HEAP[HEAP[$tm] + 12];
      
      
      
      var $26 = HEAP[HEAP[$tm] + 16] + 1;
      
      
      
      var $30 = HEAP[HEAP[$tm] + 20] + 1900;
      var $31 = HEAP[$cls_addr];
      var $32 = HEAP[$us_addr];
      var $33 = HEAP[$tzinfo_addr];
      var $34 = __PyObject_CallFunction_SizeT($31, __str220, allocate([ $30, 0, 0, 0, $26, 0, 0, 0, $22, 0, 0, 0, $19, 0, 0, 0, $16, 0, 0, 0, $13, 0, 0, 0, $32, 0, 0, 0, $33, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $34;
      __label__ = 5;
      break;
     case 4:
      var $35 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($35, __str221);
      __label__ = 5;
      break;
     case 5:
      var $36 = HEAP[$result];
      HEAP[$0] = $36;
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
  function _datetime_from_timestamp($cls, $f, $timestamp, $tzinfo) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $timestamp_addr = __stackBase__ + 8;
      var $tzinfo_addr = __stackBase__ + 16;
      var $retval = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $timet = __stackBase__ + 28;
      var $fraction = __stackBase__ + 32;
      var $us = __stackBase__ + 40;
      
      HEAP[$cls_addr] = $cls;
      HEAP[$f_addr] = $f;
      HEAP[$timestamp_addr] = $timestamp;
      HEAP[$tzinfo_addr] = $tzinfo;
      var $1 = HEAP[$timestamp_addr];
      var $2 = __PyTime_DoubleToTimet($1);
      HEAP[$timet] = $2;
      
      var $4 = HEAP[$timet] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 3:
      
      
      
      var $10 = HEAP[$timestamp_addr] - HEAP[$timet];
      HEAP[$fraction] = $10;
      
      var $12 = HEAP[$fraction] * 1e6;
      var $13 = _round_to_long($12);
      HEAP[$us] = $13;
      
      
      if (HEAP[$us] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $17 = HEAP[$timet] - 1;
      HEAP[$timet] = $17;
      
      var $19 = HEAP[$us] + 1e6;
      HEAP[$us] = $19;
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[$us] == 1e6) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $23 = HEAP[$timet] + 1;
      HEAP[$timet] = $23;
      HEAP[$us] = 0;
      __label__ = 7;
      break;
     case 7:
      var $24 = HEAP[$cls_addr];
      var $25 = HEAP[$f_addr];
      var $26 = HEAP[$timet];
      var $27 = HEAP[$us];
      var $28 = HEAP[$tzinfo_addr];
      var $29 = _datetime_from_timet_and_us($24, $25, $26, $27, $28);
      HEAP[$0] = $29;
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
  function _datetime_best_possible($cls, $f, $tzinfo) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr = __stackBase__;
      var $f_addr = __stackBase__ + 4;
      var $tzinfo_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $t = __stackBase__ + 20;
      
      HEAP[$cls_addr] = $cls;
      HEAP[$f_addr] = $f;
      HEAP[$tzinfo_addr] = $tzinfo;
      var $1 = _gettimeofday($t, 0);
      
      var $3 = HEAP[$t + 4];
      
      var $5 = HEAP[$t];
      var $6 = HEAP[$cls_addr];
      var $7 = HEAP[$f_addr];
      var $8 = HEAP[$tzinfo_addr];
      var $9 = _datetime_from_timet_and_us($6, $7, $5, $3, $8);
      HEAP[$0] = $9;
      var $10 = HEAP[$0];
      HEAP[$retval] = $10;
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
  function _datetime_now($cls, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $iftmp_382 = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $self = __stackBase__ + 24;
      var $tzinfo = __stackBase__ + 28;
      var $temp = __stackBase__ + 32;
      
      HEAP[$cls_addr] = $cls;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$tzinfo] = __Py_NoneStruct;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kw_addr];
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str222, _keywords_12602, allocate([ $tzinfo, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 2:
      var $5 = HEAP[$tzinfo];
      var $6 = _check_tzinfo_subclass($5);
      
      if ($6 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 4:
      var $8 = HEAP[$tzinfo];
      
      
      if (HEAP[$tzinfo] == __Py_NoneStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$iftmp_382] = FUNCTION_TABLE_OFFSET + 2;
      __label__ = 7;
      break;
     case 6:
      HEAP[$iftmp_382] = FUNCTION_TABLE_OFFSET + 4;
      __label__ = 7;
      break;
     case 7:
      var $11 = HEAP[$cls_addr];
      var $12 = HEAP[$iftmp_382];
      var $13 = _datetime_best_possible($11, $12, $8);
      HEAP[$self] = $13;
      
      
      if (HEAP[$self] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      if (HEAP[$tzinfo] != __Py_NoneStruct) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      var $18 = HEAP[$self];
      HEAP[$temp] = $18;
      var $19 = HEAP[$tzinfo];
      var $20 = HEAP[$self];
      var $21 = __PyObject_CallMethod_SizeT($19, __str189, __str35, allocate([ $20, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$self] = $21;
      
      
      
      var $25 = HEAP[HEAP[$temp]] - 1;
      
      var $27 = HEAP[$temp];
      HEAP[$27] = $25;
      
      
      
      
      if (HEAP[HEAP[$temp]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[$temp] + 4] + 24];
      var $37 = HEAP[$temp];
      FUNCTION_TABLE[$36]($37);
      __label__ = 11;
      break;
     case 11:
      var $38 = HEAP[$self];
      HEAP[$0] = $38;
      __label__ = 12;
      break;
     case 12:
      var $39 = HEAP[$0];
      HEAP[$retval] = $39;
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
  function _datetime_utcnow($cls, $dummy) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr = __stackBase__;
      var $dummy_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$cls_addr] = $cls;
      HEAP[$dummy_addr] = $dummy;
      var $1 = HEAP[$cls_addr];
      var $2 = _datetime_best_possible($1, FUNCTION_TABLE_OFFSET + 4, __Py_NoneStruct);
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
  function _datetime_fromtimestamp($cls, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $iftmp_389 = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $self = __stackBase__ + 24;
      var $timestamp = __stackBase__ + 28;
      var $tzinfo = __stackBase__ + 36;
      var $temp = __stackBase__ + 40;
      
      HEAP[$cls_addr] = $cls;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$tzinfo] = __Py_NoneStruct;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kw_addr];
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str224, _keywords_12649, allocate([ $timestamp, 0, 0, 0, $tzinfo, 0, 0, 0 ], [ "double*", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 2:
      var $5 = HEAP[$tzinfo];
      var $6 = _check_tzinfo_subclass($5);
      
      if ($6 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 4:
      var $8 = HEAP[$tzinfo];
      var $9 = HEAP[$timestamp];
      
      
      if (HEAP[$tzinfo] == __Py_NoneStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$iftmp_389] = FUNCTION_TABLE_OFFSET + 2;
      __label__ = 7;
      break;
     case 6:
      HEAP[$iftmp_389] = FUNCTION_TABLE_OFFSET + 4;
      __label__ = 7;
      break;
     case 7:
      var $12 = HEAP[$cls_addr];
      var $13 = HEAP[$iftmp_389];
      var $14 = _datetime_from_timestamp($12, $13, $9, $8);
      HEAP[$self] = $14;
      
      
      if (HEAP[$self] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      if (HEAP[$tzinfo] != __Py_NoneStruct) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      var $19 = HEAP[$self];
      HEAP[$temp] = $19;
      var $20 = HEAP[$tzinfo];
      var $21 = HEAP[$self];
      var $22 = __PyObject_CallMethod_SizeT($20, __str189, __str35, allocate([ $21, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$self] = $22;
      
      
      
      var $26 = HEAP[HEAP[$temp]] - 1;
      
      var $28 = HEAP[$temp];
      HEAP[$28] = $26;
      
      
      
      
      if (HEAP[HEAP[$temp]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $37 = HEAP[HEAP[HEAP[$temp] + 4] + 24];
      var $38 = HEAP[$temp];
      FUNCTION_TABLE[$37]($38);
      __label__ = 11;
      break;
     case 11:
      var $39 = HEAP[$self];
      HEAP[$0] = $39;
      __label__ = 12;
      break;
     case 12:
      var $40 = HEAP[$0];
      HEAP[$retval] = $40;
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
  function _datetime_utcfromtimestamp($cls, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $timestamp = __stackBase__ + 16;
      var $result = __stackBase__ + 24;
      
      HEAP[$cls_addr] = $cls;
      HEAP[$args_addr] = $args;
      HEAP[$result] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str226, allocate([ $timestamp, 0, 0, 0 ], [ "double*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[$timestamp];
      var $5 = HEAP[$cls_addr];
      var $6 = _datetime_from_timestamp($5, FUNCTION_TABLE_OFFSET + 4, $4, __Py_NoneStruct);
      HEAP[$result] = $6;
      __label__ = 2;
      break;
     case 2:
      var $7 = HEAP[$result];
      HEAP[$0] = $7;
      var $8 = HEAP[$0];
      HEAP[$retval] = $8;
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
  function _datetime_strptime($cls, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 80;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 80);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      var $obj = __stackBase__ + 20;
      var $st = __stackBase__ + 24;
      var $frac = __stackBase__ + 28;
      var $string = __stackBase__ + 32;
      var $format = __stackBase__ + 36;
      var $i = __stackBase__ + 40;
      var $good_timetuple = __stackBase__ + 44;
      var $ia = __stackBase__ + 48;
      var $p = __stackBase__ + 76;
      
      HEAP[$cls_addr] = $cls;
      HEAP[$args_addr] = $args;
      HEAP[$result] = 0;
      HEAP[$st] = 0;
      HEAP[$frac] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str227, allocate([ $string, 0, 0, 0, $format, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 2:
      
      
      if (HEAP[_module_12699] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $6 = _PyImport_ImportModuleNoBlock(__str228);
      HEAP[_module_12699] = $6;
      
      
      if (HEAP[_module_12699] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 5:
      var $9 = HEAP[$format];
      var $10 = HEAP[$string];
      var $11 = HEAP[_module_12699];
      var $12 = __PyObject_CallMethod_SizeT($11, __str228, __str83, allocate([ $10, 0, 0, 0, $9, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$obj] = $12;
      
      
      if (HEAP[$obj] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 6:
      HEAP[$good_timetuple] = 1;
      var $15 = HEAP[$obj];
      var $16 = _PySequence_Check($15);
      
      if ($16 == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $18 = HEAP[$obj];
      var $19 = _PySequence_Size($18);
      
      if ($19 != 2) {
        __label__ = 31;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $21 = HEAP[$obj];
      var $22 = _PySequence_GetItem($21, 0);
      HEAP[$st] = $22;
      var $23 = HEAP[$obj];
      var $24 = _PySequence_GetItem($23, 1);
      HEAP[$frac] = $24;
      
      
      if (HEAP[$st] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$frac] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$good_timetuple] = 0;
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$good_timetuple] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $31 = HEAP[$st];
      var $32 = _PySequence_Check($31);
      
      if ($32 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $34 = HEAP[$st];
      var $35 = _PySequence_Size($34);
      
      if ($35 <= 5) {
        __label__ = 25;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      HEAP[$i] = 0;
      __label__ = 23;
      break;
     case 15:
      var $37 = HEAP[$st];
      var $38 = HEAP[$i];
      var $39 = _PySequence_GetItem($37, $38);
      HEAP[$p] = $39;
      
      
      if (HEAP[$p] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      HEAP[$good_timetuple] = 0;
      __label__ = 24;
      break;
     case 17:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$p] + 4] + 84] & 8388608) != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $49 = HEAP[$i];
      var $50 = HEAP[$p];
      var $51 = _PyInt_AsLong($50);
      var $52 = $ia + $49 * 4;
      HEAP[$52] = $51;
      __label__ = 20;
      break;
     case 19:
      HEAP[$good_timetuple] = 0;
      __label__ = 20;
      break;
     case 20:
      
      
      
      var $56 = HEAP[HEAP[$p]] - 1;
      
      var $58 = HEAP[$p];
      HEAP[$58] = $56;
      
      
      
      
      if (HEAP[HEAP[$p]] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[$p] + 4] + 24];
      var $68 = HEAP[$p];
      FUNCTION_TABLE[$67]($68);
      __label__ = 22;
      break;
     case 22:
      
      var $70 = HEAP[$i] + 1;
      HEAP[$i] = $70;
      __label__ = 23;
      break;
     case 23:
      
      
      if (HEAP[$i] <= 5) {
        __label__ = 15;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      __label__ = 26;
      break;
     case 25:
      HEAP[$good_timetuple] = 0;
      __label__ = 26;
      break;
     case 26:
      
      
      if (HEAP[$good_timetuple] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$frac] + 4] + 84] & 8388608) == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      var $82 = HEAP[$frac];
      var $83 = _PyInt_AsLong($82);
      
      HEAP[$ia + 24] = $83;
      __label__ = 30;
      break;
     case 29:
      HEAP[$good_timetuple] = 0;
      __label__ = 30;
      break;
     case 30:
      __label__ = 32;
      break;
     case 31:
      HEAP[$good_timetuple] = 0;
      __label__ = 32;
      break;
     case 32:
      
      
      if (HEAP[$good_timetuple] != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      var $88 = HEAP[$ia + 24];
      
      var $90 = HEAP[$ia + 20];
      
      var $92 = HEAP[$ia + 16];
      
      var $94 = HEAP[$ia + 12];
      
      var $96 = HEAP[$ia + 8];
      
      var $98 = HEAP[$ia + 4];
      
      var $100 = HEAP[$ia];
      var $101 = HEAP[$cls_addr];
      var $102 = __PyObject_CallFunction_SizeT($101, __str229, allocate([ $100, 0, 0, 0, $98, 0, 0, 0, $96, 0, 0, 0, $94, 0, 0, 0, $92, 0, 0, 0, $90, 0, 0, 0, $88, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $102;
      __label__ = 35;
      break;
     case 34:
      var $103 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($103, __str230);
      __label__ = 35;
      break;
     case 35:
      
      
      if (HEAP[$obj] != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 36:
      
      
      
      var $109 = HEAP[HEAP[$obj]] - 1;
      
      var $111 = HEAP[$obj];
      HEAP[$111] = $109;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $120 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $121 = HEAP[$obj];
      FUNCTION_TABLE[$120]($121);
      __label__ = 38;
      break;
     case 38:
      
      
      if (HEAP[$st] != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 39:
      
      
      
      var $127 = HEAP[HEAP[$st]] - 1;
      
      var $129 = HEAP[$st];
      HEAP[$129] = $127;
      
      
      
      
      if (HEAP[HEAP[$st]] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      
      
      var $138 = HEAP[HEAP[HEAP[$st] + 4] + 24];
      var $139 = HEAP[$st];
      FUNCTION_TABLE[$138]($139);
      __label__ = 41;
      break;
     case 41:
      
      
      if (HEAP[$frac] != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 42:
      
      
      
      var $145 = HEAP[HEAP[$frac]] - 1;
      
      var $147 = HEAP[$frac];
      HEAP[$147] = $145;
      
      
      
      
      if (HEAP[HEAP[$frac]] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      
      
      var $156 = HEAP[HEAP[HEAP[$frac] + 4] + 24];
      var $157 = HEAP[$frac];
      FUNCTION_TABLE[$156]($157);
      __label__ = 44;
      break;
     case 44:
      var $158 = HEAP[$result];
      HEAP[$0] = $158;
      __label__ = 45;
      break;
     case 45:
      var $159 = HEAP[$0];
      HEAP[$retval] = $159;
      __label__ = 46;
      break;
     case 46:
      var $retval45 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval45;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_combine($cls, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $date = __stackBase__ + 20;
      var $time = __stackBase__ + 24;
      var $result = __stackBase__ + 28;
      var $tzinfo = __stackBase__ + 32;
      
      HEAP[$cls_addr] = $cls;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$result] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kw_addr];
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str231, _keywords_12819, allocate([ _PyDateTime_DateType, 0, 0, 0, $date, 0, 0, 0, _PyDateTime_TimeType, 0, 0, 0, $time, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      HEAP[$tzinfo] = __Py_NoneStruct;
      
      
      
      
      
      if (HEAP[HEAP[$time] + 12] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[HEAP[$time] + 20];
      HEAP[$tzinfo] = $13;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $35 = HEAP[HEAP[$time] + 13 + 3] << 16 | HEAP[HEAP[$time] + 13 + 4] << 8 | HEAP[HEAP[$time] + 13 + 5];
      
      
      
      
      
      var $41 = HEAP[HEAP[$time] + 13 + 2];
      
      
      
      
      
      var $47 = HEAP[HEAP[$time] + 13 + 1];
      
      
      
      
      
      var $53 = HEAP[HEAP[$time] + 13];
      
      
      
      
      
      var $59 = HEAP[HEAP[$date] + 13 + 3];
      
      
      
      
      
      var $65 = HEAP[HEAP[$date] + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $79 = HEAP[HEAP[$date] + 13] << 8 | HEAP[HEAP[$date] + 13 + 1];
      var $80 = HEAP[$cls_addr];
      var $81 = HEAP[$tzinfo];
      var $82 = __PyObject_CallFunction_SizeT($80, __str220, allocate([ $79, 0, 0, 0, $65, 0, 0, 0, $59, 0, 0, 0, $53, 0, 0, 0, $47, 0, 0, 0, $41, 0, 0, 0, $35, 0, 0, 0, $81, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $82;
      __label__ = 4;
      break;
     case 4:
      var $83 = HEAP[$result];
      HEAP[$0] = $83;
      var $84 = HEAP[$0];
      HEAP[$retval] = $84;
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
  function _datetime_dealloc($self) {
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
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      var $11 = HEAP[HEAP[$self_addr] + 24];
      
      
      var $14 = HEAP[$11] - 1;
      var $15 = $11;
      HEAP[$15] = $14;
      
      
      
      if (HEAP[$11] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $25 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 24] + 4] + 24];
      
      
      var $28 = HEAP[HEAP[$self_addr] + 24];
      FUNCTION_TABLE[$25]($28);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      var $34 = HEAP[HEAP[HEAP[$self_addr] + 4] + 160];
      
      var $36 = HEAP[$self_addr];
      FUNCTION_TABLE[$34]($36);
      __label__ = 5;
      break;
     case 5:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_utcoffset($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_428 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      
      var $2 = HEAP[$self_addr];
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $10 = HEAP[HEAP[$self_addr] + 24];
      HEAP[$iftmp_428] = $10;
      __label__ = 3;
      break;
     case 2:
      HEAP[$iftmp_428] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      var $11 = HEAP[$iftmp_428];
      var $12 = _offset_as_timedelta($11, __str42, $2);
      HEAP[$0] = $12;
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
  function _datetime_dst($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_431 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      
      var $2 = HEAP[$self_addr];
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $10 = HEAP[HEAP[$self_addr] + 24];
      HEAP[$iftmp_431] = $10;
      __label__ = 3;
      break;
     case 2:
      HEAP[$iftmp_431] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      var $11 = HEAP[$iftmp_431];
      var $12 = _offset_as_timedelta($11, __str44, $2);
      HEAP[$0] = $12;
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
  function _datetime_tzname($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_434 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      
      var $2 = HEAP[$self_addr];
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $10 = HEAP[HEAP[$self_addr] + 24];
      HEAP[$iftmp_434] = $10;
      __label__ = 3;
      break;
     case 2:
      HEAP[$iftmp_434] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      var $11 = HEAP[$iftmp_434];
      var $12 = _call_tzname($11, $2);
      HEAP[$0] = $12;
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
  function _add_datetime_timedelta($date, $delta, $factor) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $date_addr = __stackBase__;
      var $delta_addr = __stackBase__ + 4;
      var $factor_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $iftmp_440 = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $year = __stackBase__ + 24;
      var $month = __stackBase__ + 28;
      var $day = __stackBase__ + 32;
      var $hour = __stackBase__ + 36;
      var $minute = __stackBase__ + 40;
      var $second = __stackBase__ + 44;
      var $microsecond = __stackBase__ + 48;
      
      HEAP[$date_addr] = $date;
      HEAP[$delta_addr] = $delta;
      HEAP[$factor_addr] = $factor;
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $14 = HEAP[HEAP[$date_addr] + 13] << 8 | HEAP[HEAP[$date_addr] + 13 + 1];
      HEAP[$year] = $14;
      
      
      
      
      
      var $20 = HEAP[HEAP[$date_addr] + 13 + 2];
      HEAP[$month] = $20;
      
      
      
      
      
      
      
      
      
      
      
      var $32 = HEAP[HEAP[$date_addr] + 13 + 3] + HEAP[HEAP[$delta_addr] + 12] * HEAP[$factor_addr];
      HEAP[$day] = $32;
      
      
      
      
      var $37 = HEAP[HEAP[$date_addr] + 13 + 4];
      HEAP[$hour] = $37;
      
      
      
      
      var $42 = HEAP[HEAP[$date_addr] + 13 + 5];
      HEAP[$minute] = $42;
      
      
      
      
      
      
      
      
      
      
      var $53 = HEAP[HEAP[$date_addr] + 13 + 6] + HEAP[HEAP[$delta_addr] + 16] * HEAP[$factor_addr];
      HEAP[$second] = $53;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $78 = (HEAP[HEAP[$date_addr] + 13 + 7] << 16 | HEAP[HEAP[$date_addr] + 13 + 8] << 8 | HEAP[HEAP[$date_addr] + 13 + 9]) + HEAP[HEAP[$delta_addr] + 20] * HEAP[$factor_addr];
      HEAP[$microsecond] = $78;
      
      
      if (HEAP[$factor_addr] != 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $82 = HEAP[$factor_addr] != -1;
      if ($82) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str233, __str1, 4085, ___PRETTY_FUNCTION___12960);
      throw "Reached an unreachable!";
     case 3:
      var $83 = _normalize_datetime($year, $month, $day, $hour, $minute, $second, $microsecond);
      
      if ($83 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 5:
      
      
      
      
      
      if (HEAP[HEAP[$date_addr] + 12] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      var $92 = HEAP[HEAP[$date_addr] + 24];
      HEAP[$iftmp_440] = $92;
      __label__ = 8;
      break;
     case 7:
      HEAP[$iftmp_440] = __Py_NoneStruct;
      __label__ = 8;
      break;
     case 8:
      var $93 = HEAP[$microsecond];
      var $94 = HEAP[$second];
      var $95 = HEAP[$minute];
      var $96 = HEAP[$hour];
      var $97 = HEAP[$day];
      var $98 = HEAP[$month];
      var $99 = HEAP[$year];
      var $100 = HEAP[$iftmp_440];
      var $101 = _new_datetime_ex($99, $98, $97, $96, $95, $94, $93, $100, _PyDateTime_DateTimeType);
      HEAP[$0] = $101;
      __label__ = 9;
      break;
     case 9:
      var $102 = HEAP[$0];
      HEAP[$retval] = $102;
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
  function _datetime_add($left, $right) {
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
      
      
      
      
      if (HEAP[HEAP[$left_addr] + 4] == _PyDateTime_DateTimeType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$left_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DateTimeType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$right_addr] + 4] == _PyDateTime_DeltaType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[HEAP[$right_addr] + 4];
      var $17 = _PyType_IsSubtype($16, _PyDateTime_DeltaType);
      
      if ($17 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $20 = HEAP[$right_addr];
      
      var $22 = HEAP[$left_addr];
      var $23 = _add_datetime_timedelta($22, $20, 1);
      HEAP[$0] = $23;
      __label__ = 10;
      break;
     case 5:
      __label__ = 9;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$left_addr] + 4] == _PyDateTime_DeltaType) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      var $30 = HEAP[HEAP[$left_addr] + 4];
      var $31 = _PyType_IsSubtype($30, _PyDateTime_DeltaType);
      
      if ($31 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $34 = HEAP[$left_addr];
      
      var $36 = HEAP[$right_addr];
      var $37 = _add_datetime_timedelta($36, $34, 1);
      HEAP[$0] = $37;
      __label__ = 10;
      break;
     case 9:
      
      var $39 = HEAP[__Py_NotImplementedStruct] + 1;
      HEAP[__Py_NotImplementedStruct] = $39;
      HEAP[$0] = __Py_NotImplementedStruct;
      __label__ = 10;
      break;
     case 10:
      var $40 = HEAP[$0];
      HEAP[$retval] = $40;
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
  function _datetime_subtract($left, $right) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $left_addr = __stackBase__;
      var $right_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      var $n1 = __stackBase__ + 20;
      var $n2 = __stackBase__ + 24;
      var $offset1 = __stackBase__ + 28;
      var $offset2 = __stackBase__ + 32;
      var $delta_d = __stackBase__ + 36;
      var $delta_s = __stackBase__ + 40;
      var $delta_us = __stackBase__ + 44;
      
      HEAP[$left_addr] = $left;
      HEAP[$right_addr] = $right;
      HEAP[$result] = __Py_NotImplementedStruct;
      
      
      
      
      if (HEAP[HEAP[$left_addr] + 4] == _PyDateTime_DateTimeType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$left_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DateTimeType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$right_addr] + 4] == _PyDateTime_DateTimeType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[HEAP[$right_addr] + 4];
      var $17 = _PyType_IsSubtype($16, _PyDateTime_DateTimeType);
      
      if ($17 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 4:
      var $19 = HEAP[$left_addr];
      var $20 = HEAP[$left_addr];
      var $21 = HEAP[$right_addr];
      var $22 = HEAP[$right_addr];
      var $23 = _classify_two_utcoffsets($19, $offset1, $n1, $20, $21, $offset2, $n2, $22);
      
      if ($23 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 6:
      
      
      if (HEAP[$n1] == 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if (HEAP[$n2] == 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      ___assert_fail(__str203, __str1, 4134, ___PRETTY_FUNCTION___13068);
      throw "Reached an unreachable!";
     case 9:
      
      
      
      if (HEAP[$n1] != HEAP[$n2]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $32 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($32, __str234);
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 11:
      
      
      
      
      
      var $38 = HEAP[HEAP[$left_addr] + 13 + 3];
      
      
      
      
      
      var $44 = HEAP[HEAP[$left_addr] + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $58 = HEAP[HEAP[$left_addr] + 13] << 8 | HEAP[HEAP[$left_addr] + 13 + 1];
      var $59 = _ymd_to_ord($58, $44, $38);
      
      
      
      
      
      var $65 = HEAP[HEAP[$right_addr] + 13 + 3];
      
      
      
      
      
      var $71 = HEAP[HEAP[$right_addr] + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $85 = HEAP[HEAP[$right_addr] + 13] << 8 | HEAP[HEAP[$right_addr] + 13 + 1];
      var $86 = _ymd_to_ord($85, $71, $65);
      var $87 = $59 - $86;
      HEAP[$delta_d] = $87;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $130 = (HEAP[HEAP[$left_addr] + 13 + 4] - HEAP[HEAP[$right_addr] + 13 + 4]) * 3600 + (HEAP[HEAP[$left_addr] + 13 + 5] - HEAP[HEAP[$right_addr] + 13 + 5]) * 60 + (HEAP[HEAP[$left_addr] + 13 + 6] - HEAP[HEAP[$right_addr] + 13 + 6]);
      HEAP[$delta_s] = $130;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $175 = (HEAP[HEAP[$left_addr] + 13 + 7] << 16 | HEAP[HEAP[$left_addr] + 13 + 8] << 8 | HEAP[HEAP[$left_addr] + 13 + 9]) - (HEAP[HEAP[$right_addr] + 13 + 7] << 16 | HEAP[HEAP[$right_addr] + 13 + 8] << 8 | HEAP[HEAP[$right_addr] + 13 + 9]);
      HEAP[$delta_us] = $175;
      
      
      
      
      
      var $181 = (HEAP[$offset2] - HEAP[$offset1]) * 60 + HEAP[$delta_s];
      HEAP[$delta_s] = $181;
      var $182 = HEAP[$delta_d];
      var $183 = HEAP[$delta_s];
      var $184 = HEAP[$delta_us];
      var $185 = _new_delta_ex($182, $183, $184, 1, _PyDateTime_DeltaType);
      HEAP[$result] = $185;
      __label__ = 15;
      break;
     case 12:
      
      
      
      
      if (HEAP[HEAP[$right_addr] + 4] == _PyDateTime_DeltaType) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      var $192 = HEAP[HEAP[$right_addr] + 4];
      var $193 = _PyType_IsSubtype($192, _PyDateTime_DeltaType);
      
      if ($193 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      var $196 = HEAP[$right_addr];
      
      var $198 = HEAP[$left_addr];
      var $199 = _add_datetime_timedelta($198, $196, -1);
      HEAP[$result] = $199;
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$result] == __Py_NotImplementedStruct) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      var $205 = HEAP[HEAP[$result]] + 1;
      
      var $207 = HEAP[$result];
      HEAP[$207] = $205;
      __label__ = 17;
      break;
     case 17:
      var $208 = HEAP[$result];
      HEAP[$0] = $208;
      __label__ = 18;
      break;
     case 18:
      var $209 = HEAP[$0];
      HEAP[$retval] = $209;
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
  function _datetime_repr($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1020;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 1020);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $buffer = __stackBase__ + 12;
      var $type_name = __stackBase__ + 1012;
      var $baserepr = __stackBase__ + 1016;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      
      var $6 = HEAP[HEAP[HEAP[$self_addr] + 4] + 12];
      HEAP[$type_name] = $6;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$self_addr] + 13 + 7] << 16 | HEAP[HEAP[$self_addr] + 13 + 8] << 8 | HEAP[HEAP[$self_addr] + 13 + 9]) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $45 = HEAP[HEAP[$self_addr] + 13 + 7] << 16 | HEAP[HEAP[$self_addr] + 13 + 8] << 8 | HEAP[HEAP[$self_addr] + 13 + 9];
      
      
      
      
      var $50 = HEAP[HEAP[$self_addr] + 13 + 6];
      
      
      
      
      var $55 = HEAP[HEAP[$self_addr] + 13 + 5];
      
      
      
      
      var $60 = HEAP[HEAP[$self_addr] + 13 + 4];
      
      
      
      
      
      var $66 = HEAP[HEAP[$self_addr] + 13 + 3];
      
      
      
      
      
      var $72 = HEAP[HEAP[$self_addr] + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $86 = HEAP[HEAP[$self_addr] + 13] << 8 | HEAP[HEAP[$self_addr] + 13 + 1];
      var $buffer1 = $buffer;
      var $87 = HEAP[$type_name];
      var $88 = _PyOS_snprintf($buffer1, 1e3, __str235, allocate([ $87, 0, 0, 0, $86, 0, 0, 0, $72, 0, 0, 0, $66, 0, 0, 0, $60, 0, 0, 0, $55, 0, 0, 0, $50, 0, 0, 0, $45, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 5;
      break;
     case 2:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 13 + 6] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $98 = HEAP[HEAP[$self_addr] + 13 + 6];
      
      
      
      
      var $103 = HEAP[HEAP[$self_addr] + 13 + 5];
      
      
      
      
      var $108 = HEAP[HEAP[$self_addr] + 13 + 4];
      
      
      
      
      
      var $114 = HEAP[HEAP[$self_addr] + 13 + 3];
      
      
      
      
      
      var $120 = HEAP[HEAP[$self_addr] + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $134 = HEAP[HEAP[$self_addr] + 13] << 8 | HEAP[HEAP[$self_addr] + 13 + 1];
      var $buffer4 = $buffer;
      var $135 = HEAP[$type_name];
      var $136 = _PyOS_snprintf($buffer4, 1e3, __str236, allocate([ $135, 0, 0, 0, $134, 0, 0, 0, $120, 0, 0, 0, $114, 0, 0, 0, $108, 0, 0, 0, $103, 0, 0, 0, $98, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 5;
      break;
     case 4:
      
      
      
      
      var $141 = HEAP[HEAP[$self_addr] + 13 + 5];
      
      
      
      
      var $146 = HEAP[HEAP[$self_addr] + 13 + 4];
      
      
      
      
      
      var $152 = HEAP[HEAP[$self_addr] + 13 + 3];
      
      
      
      
      
      var $158 = HEAP[HEAP[$self_addr] + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $172 = HEAP[HEAP[$self_addr] + 13] << 8 | HEAP[HEAP[$self_addr] + 13 + 1];
      var $buffer6 = $buffer;
      var $173 = HEAP[$type_name];
      var $174 = _PyOS_snprintf($buffer6, 1e3, __str237, allocate([ $173, 0, 0, 0, $172, 0, 0, 0, $158, 0, 0, 0, $152, 0, 0, 0, $146, 0, 0, 0, $141, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 5;
      break;
     case 5:
      var $buffer8 = $buffer;
      var $175 = _PyString_FromString($buffer8);
      HEAP[$baserepr] = $175;
      
      
      if (HEAP[$baserepr] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $183 = HEAP[$baserepr];
      HEAP[$0] = $183;
      __label__ = 9;
      break;
     case 8:
      
      
      var $186 = HEAP[HEAP[$self_addr] + 24];
      var $187 = HEAP[$baserepr];
      var $188 = _append_keyword_tzinfo($187, $186);
      HEAP[$0] = $188;
      __label__ = 9;
      break;
     case 9:
      var $189 = HEAP[$0];
      HEAP[$retval] = $189;
      __label__ = 10;
      break;
     case 10:
      var $retval13 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_str($self) {
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
      
      var $2 = HEAP[__stackBase__];
      var $3 = __PyObject_CallMethod_SizeT($2, __str146, __str238, allocate([ __str239, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
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
  function _datetime_isoformat($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 129;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 129);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $sep = __stackBase__ + 20;
      var $buffer = __stackBase__ + 21;
      var $cp = __stackBase__ + 121;
      var $result = __stackBase__ + 125;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$sep] = 84;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kw_addr];
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str240, _keywords_13311, allocate([ $sep, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 2:
      
      var $6 = HEAP[$self_addr];
      var $buffer2 = $buffer;
      var $7 = _isoformat_date($6, $buffer2, 100);
      HEAP[$cp] = $7;
      
      
      if (HEAP[$cp] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str242, __str1, 4237, ___PRETTY_FUNCTION___13315);
      throw "Reached an unreachable!";
     case 4:
      var $10 = HEAP[$sep];
      var $11 = HEAP[$cp];
      HEAP[$11] = $10;
      
      var $13 = HEAP[$cp] + 1;
      HEAP[$cp] = $13;
      
      
      
      
      
      var $17 = 100 - (HEAP[$cp] - $buffer);
      var $18 = HEAP[$self_addr];
      var $19 = HEAP[$cp];
      var $20 = _isoformat_time($18, $19, $17);
      HEAP[$cp] = $20;
      
      
      
      
      var $23 = HEAP[$cp] - $buffer;
      var $buffer11 = $buffer;
      var $24 = _PyString_FromStringAndSize($buffer11, $23);
      HEAP[$result] = $24;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $32 = HEAP[$result];
      HEAP[$0] = $32;
      __label__ = 12;
      break;
     case 7:
      
      var $34 = HEAP[$self_addr];
      
      
      var $37 = HEAP[HEAP[$self_addr] + 24];
      var $buffer15 = $buffer;
      var $38 = _format_utcoffset($buffer15, 100, __str200, $37, $34);
      
      if ($38 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      var $40 = HEAP[$result];
      
      
      var $43 = HEAP[$40] - 1;
      var $44 = $40;
      HEAP[$44] = $43;
      
      
      
      if (HEAP[$40] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $52 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $53 = HEAP[$result];
      FUNCTION_TABLE[$52]($53);
      __label__ = 10;
      break;
     case 10:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 11:
      var $buffer20 = $buffer;
      var $54 = _PyString_FromString($buffer20);
      _PyString_ConcatAndDel($result, $54);
      var $55 = HEAP[$result];
      HEAP[$0] = $55;
      __label__ = 12;
      break;
     case 12:
      var $56 = HEAP[$0];
      HEAP[$retval] = $56;
      __label__ = 13;
      break;
     case 13:
      var $retval22 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_ctime($self) {
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
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 13 + 6];
      
      
      
      
      var $10 = HEAP[HEAP[$self_addr] + 13 + 5];
      
      
      
      
      var $15 = HEAP[HEAP[$self_addr] + 13 + 4];
      
      var $17 = HEAP[$self_addr];
      var $18 = _format_ctime($17, $15, $10, $5);
      HEAP[$0] = $18;
      var $19 = HEAP[$0];
      HEAP[$retval] = $19;
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
  function _datetime_richcompare($self, $other, $op) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $other_addr = __stackBase__ + 4;
      var $op_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $iftmp_510 = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $diff = __stackBase__ + 24;
      var $n1 = __stackBase__ + 28;
      var $n2 = __stackBase__ + 32;
      var $offset1 = __stackBase__ + 36;
      var $offset2 = __stackBase__ + 40;
      var $result = __stackBase__ + 44;
      var $delta = __stackBase__ + 48;
      
      HEAP[$self_addr] = $self;
      HEAP[$other_addr] = $other;
      HEAP[$op_addr] = $op;
      
      
      
      
      if (HEAP[HEAP[$other_addr] + 4] != _PyDateTime_DateTimeType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$other_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DateTimeType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 2:
      var $10 = HEAP[$other_addr];
      var $11 = _PyObject_HasAttrString($10, __str149);
      
      if ($11 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      if (HEAP[HEAP[$other_addr] + 4] != _PyDateTime_DateType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $19 = HEAP[HEAP[$other_addr] + 4];
      var $20 = _PyType_IsSubtype($19, _PyDateTime_DateType);
      
      if ($20 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $23 = HEAP[__Py_NotImplementedStruct] + 1;
      HEAP[__Py_NotImplementedStruct] = $23;
      HEAP[$0] = __Py_NotImplementedStruct;
      __label__ = 35;
      break;
     case 6:
      
      
      if (HEAP[$op_addr] == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if (HEAP[$op_addr] == 3) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      if (HEAP[$op_addr] == 2) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$iftmp_510] = __Py_ZeroStruct;
      __label__ = 11;
      break;
     case 10:
      HEAP[$iftmp_510] = __Py_TrueStruct;
      __label__ = 11;
      break;
     case 11:
      var $30 = HEAP[$iftmp_510];
      HEAP[$result] = $30;
      
      
      
      var $34 = HEAP[HEAP[$result]] + 1;
      
      var $36 = HEAP[$result];
      HEAP[$36] = $34;
      var $37 = HEAP[$result];
      HEAP[$0] = $37;
      __label__ = 35;
      break;
     case 12:
      
      var $39 = HEAP[$self_addr];
      var $40 = HEAP[$other_addr];
      var $41 = _cmperror($39, $40);
      HEAP[$0] = $41;
      __label__ = 35;
      break;
     case 13:
      
      var $43 = HEAP[$self_addr];
      
      var $45 = HEAP[$self_addr];
      var $46 = HEAP[$other_addr];
      var $47 = HEAP[$other_addr];
      var $48 = _classify_two_utcoffsets($45, $offset1, $n1, $43, $46, $offset2, $n2, $47);
      
      if ($48 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = 0;
      __label__ = 35;
      break;
     case 15:
      
      
      if (HEAP[$n1] == 1) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      if (HEAP[$n2] == 1) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      ___assert_fail(__str203, __str1, 4306, ___PRETTY_FUNCTION___13383);
      throw "Reached an unreachable!";
     case 18:
      
      
      
      if (HEAP[$n1] == HEAP[$n2]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      
      if (HEAP[$offset1] == HEAP[$offset2]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      var $63 = HEAP[$other_addr] + 13;
      
      
      var $66 = HEAP[$self_addr] + 13;
      var $67 = _memcmp($66, $63, 10);
      HEAP[$diff] = $67;
      var $68 = HEAP[$diff];
      var $69 = HEAP[$op_addr];
      var $70 = _diff_to_bool($68, $69);
      HEAP[$0] = $70;
      __label__ = 35;
      break;
     case 21:
      
      
      if (HEAP[$n1] == 3) {
        __label__ = 22;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 22:
      
      
      if (HEAP[$n2] == 3) {
        __label__ = 23;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 23:
      
      
      
      if (HEAP[$offset1] == HEAP[$offset2]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      ___assert_fail(__str204, __str1, 4320, ___PRETTY_FUNCTION___13383);
      throw "Reached an unreachable!";
     case 25:
      
      var $79 = HEAP[$self_addr];
      var $80 = HEAP[$other_addr];
      var $81 = _datetime_subtract($79, $80);
      var $82 = $81;
      HEAP[$delta] = $82;
      
      
      if (HEAP[$delta] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      HEAP[$0] = 0;
      __label__ = 35;
      break;
     case 27:
      
      
      var $87 = HEAP[HEAP[$delta] + 12];
      HEAP[$diff] = $87;
      
      
      if (HEAP[$diff] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      
      
      var $96 = HEAP[HEAP[$delta] + 16] | HEAP[HEAP[$delta] + 20];
      HEAP[$diff] = $96;
      __label__ = 29;
      break;
     case 29:
      
      var $98 = HEAP[$delta];
      
      
      var $101 = HEAP[$98] - 1;
      var $102 = $98;
      HEAP[$102] = $101;
      
      
      
      if (HEAP[$98] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      
      var $111 = HEAP[HEAP[HEAP[$delta] + 4] + 24];
      
      var $113 = HEAP[$delta];
      FUNCTION_TABLE[$111]($113);
      __label__ = 31;
      break;
     case 31:
      var $114 = HEAP[$diff];
      var $115 = HEAP[$op_addr];
      var $116 = _diff_to_bool($114, $115);
      HEAP[$0] = $116;
      __label__ = 35;
      break;
     case 32:
      
      
      
      if (HEAP[$n1] == HEAP[$n2]) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      ___assert_fail(__str205, __str1, 4333, ___PRETTY_FUNCTION___13383);
      throw "Reached an unreachable!";
     case 34:
      var $120 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($120, __str243);
      HEAP[$0] = 0;
      __label__ = 35;
      break;
     case 35:
      var $121 = HEAP[$0];
      HEAP[$retval] = $121;
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
  function _datetime_hash($self) {
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
      var $n = __stackBase__ + 12;
      var $offset = __stackBase__ + 16;
      var $temp = __stackBase__ + 20;
      var $days = __stackBase__ + 24;
      var $seconds = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      
      
      
      var $4 = HEAP[HEAP[$self_addr] + 8] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 1:
      
      var $6 = HEAP[$self_addr];
      
      var $8 = HEAP[$self_addr];
      var $9 = _classify_utcoffset($8, $6, $offset);
      HEAP[$n] = $9;
      
      
      if (HEAP[$n] == 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str207, __str1, 4350, ___PRETTY_FUNCTION___13479);
      throw "Reached an unreachable!";
     case 3:
      
      
      if (HEAP[$n] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 16;
      break;
     case 5:
      
      
      if (HEAP[$n] == 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      var $18 = HEAP[$self_addr] + 13;
      var $19 = _PyString_FromStringAndSize($18, 10);
      HEAP[$temp] = $19;
      __label__ = 12;
      break;
     case 7:
      
      
      if (HEAP[$n] != 3) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      ___assert_fail(__str208, __str1, 4363, ___PRETTY_FUNCTION___13479);
      throw "Reached an unreachable!";
     case 9:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str209, __str1, 4364, ___PRETTY_FUNCTION___13479);
      throw "Reached an unreachable!";
     case 11:
      
      
      
      
      
      var $32 = HEAP[HEAP[$self_addr] + 13 + 3];
      
      
      
      
      
      var $38 = HEAP[HEAP[$self_addr] + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $52 = HEAP[HEAP[$self_addr] + 13] << 8 | HEAP[HEAP[$self_addr] + 13 + 1];
      var $53 = _ymd_to_ord($52, $38, $32);
      HEAP[$days] = $53;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $74 = HEAP[HEAP[$self_addr] + 13 + 4] * 3600 + (HEAP[HEAP[$self_addr] + 13 + 5] - HEAP[$offset]) * 60 + HEAP[HEAP[$self_addr] + 13 + 6];
      HEAP[$seconds] = $74;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $93 = HEAP[HEAP[$self_addr] + 13 + 7] << 16 | HEAP[HEAP[$self_addr] + 13 + 8] << 8 | HEAP[HEAP[$self_addr] + 13 + 9];
      var $94 = HEAP[$days];
      var $95 = HEAP[$seconds];
      var $96 = _new_delta_ex($94, $95, $93, 1, _PyDateTime_DeltaType);
      HEAP[$temp] = $96;
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$temp] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      var $99 = HEAP[$temp];
      var $100 = _PyObject_Hash($99);
      
      var $102 = HEAP[$self_addr] + 8;
      HEAP[$102] = $100;
      
      
      
      var $106 = HEAP[HEAP[$temp]] - 1;
      
      var $108 = HEAP[$temp];
      HEAP[$108] = $106;
      
      
      
      
      if (HEAP[HEAP[$temp]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $117 = HEAP[HEAP[HEAP[$temp] + 4] + 24];
      var $118 = HEAP[$temp];
      FUNCTION_TABLE[$117]($118);
      __label__ = 15;
      break;
     case 15:
      
      
      var $121 = HEAP[HEAP[$self_addr] + 8];
      HEAP[$0] = $121;
      __label__ = 16;
      break;
     case 16:
      var $122 = HEAP[$0];
      HEAP[$retval] = $122;
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
  function _datetime_replace($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 64;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $iftmp_544 = __stackBase__ + 20;
      var $clone = __stackBase__ + 24;
      var $tuple = __stackBase__ + 28;
      var $y = __stackBase__ + 32;
      var $m = __stackBase__ + 36;
      var $d = __stackBase__ + 40;
      var $hh = __stackBase__ + 44;
      var $mm = __stackBase__ + 48;
      var $ss = __stackBase__ + 52;
      var $us = __stackBase__ + 56;
      var $tzinfo = __stackBase__ + 60;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $14 = HEAP[HEAP[$self_addr] + 13] << 8 | HEAP[HEAP[$self_addr] + 13 + 1];
      HEAP[$y] = $14;
      
      
      
      
      
      var $20 = HEAP[HEAP[$self_addr] + 13 + 2];
      HEAP[$m] = $20;
      
      
      
      
      
      var $26 = HEAP[HEAP[$self_addr] + 13 + 3];
      HEAP[$d] = $26;
      
      
      
      
      var $31 = HEAP[HEAP[$self_addr] + 13 + 4];
      HEAP[$hh] = $31;
      
      
      
      
      var $36 = HEAP[HEAP[$self_addr] + 13 + 5];
      HEAP[$mm] = $36;
      
      
      
      
      var $41 = HEAP[HEAP[$self_addr] + 13 + 6];
      HEAP[$ss] = $41;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $60 = HEAP[HEAP[$self_addr] + 13 + 7] << 16 | HEAP[HEAP[$self_addr] + 13 + 8] << 8 | HEAP[HEAP[$self_addr] + 13 + 9];
      HEAP[$us] = $60;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $68 = HEAP[HEAP[$self_addr] + 24];
      HEAP[$iftmp_544] = $68;
      __label__ = 3;
      break;
     case 2:
      HEAP[$iftmp_544] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      var $69 = HEAP[$iftmp_544];
      HEAP[$tzinfo] = $69;
      var $70 = HEAP[$args_addr];
      var $71 = HEAP[$kw_addr];
      var $72 = __PyArg_ParseTupleAndKeywords_SizeT($70, $71, __str244, _datetime_kws, allocate([ $y, 0, 0, 0, $m, 0, 0, 0, $d, 0, 0, 0, $hh, 0, 0, 0, $mm, 0, 0, 0, $ss, 0, 0, 0, $us, 0, 0, 0, $tzinfo, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($72 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 5:
      var $74 = HEAP[$tzinfo];
      var $75 = HEAP[$us];
      var $76 = HEAP[$ss];
      var $77 = HEAP[$mm];
      var $78 = HEAP[$hh];
      var $79 = HEAP[$d];
      var $80 = HEAP[$m];
      var $81 = HEAP[$y];
      var $82 = __Py_BuildValue_SizeT(__str220, allocate([ $81, 0, 0, 0, $80, 0, 0, 0, $79, 0, 0, 0, $78, 0, 0, 0, $77, 0, 0, 0, $76, 0, 0, 0, $75, 0, 0, 0, $74, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$tuple] = $82;
      
      
      if (HEAP[$tuple] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 7:
      
      
      
      var $88 = HEAP[HEAP[$self_addr] + 4];
      var $89 = HEAP[$tuple];
      var $90 = _datetime_new($88, $89, 0);
      HEAP[$clone] = $90;
      
      
      
      var $94 = HEAP[HEAP[$tuple]] - 1;
      
      var $96 = HEAP[$tuple];
      HEAP[$96] = $94;
      
      
      
      
      if (HEAP[HEAP[$tuple]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $105 = HEAP[HEAP[HEAP[$tuple] + 4] + 24];
      var $106 = HEAP[$tuple];
      FUNCTION_TABLE[$105]($106);
      __label__ = 9;
      break;
     case 9:
      var $107 = HEAP[$clone];
      HEAP[$0] = $107;
      __label__ = 10;
      break;
     case 10:
      var $108 = HEAP[$0];
      HEAP[$retval] = $108;
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
  function _datetime_astimezone($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 68;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $y = __stackBase__ + 20;
      var $m = __stackBase__ + 24;
      var $d = __stackBase__ + 28;
      var $hh = __stackBase__ + 32;
      var $mm = __stackBase__ + 36;
      var $ss = __stackBase__ + 40;
      var $us = __stackBase__ + 44;
      var $result = __stackBase__ + 48;
      var $offset = __stackBase__ + 52;
      var $none = __stackBase__ + 56;
      var $tzinfo = __stackBase__ + 60;
      var $temp = __stackBase__ + 64;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kw_addr];
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str245, _keywords_13646, allocate([ _PyDateTime_TZInfoType, 0, 0, 0, $tzinfo, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] == __Py_NoneStruct) {
        __label__ = 18;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] == HEAP[$tzinfo]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $23 = HEAP[HEAP[$self_addr]] + 1;
      var $24 = HEAP[$self_addr];
      HEAP[$24] = $23;
      
      var $26 = HEAP[$self_addr];
      HEAP[$0] = $26;
      __label__ = 19;
      break;
     case 6:
      
      var $28 = HEAP[$self_addr];
      
      
      var $31 = HEAP[HEAP[$self_addr] + 24];
      var $32 = _call_utcoffset($31, $28, $none);
      HEAP[$offset] = $32;
      
      var $34 = HEAP[$offset] == -1;
      if ($34) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $35 = _PyErr_Occurred();
      
      if ($35 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 9:
      
      
      if (HEAP[$none] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $52 = HEAP[HEAP[$self_addr] + 13] << 8 | HEAP[HEAP[$self_addr] + 13 + 1];
      HEAP[$y] = $52;
      
      
      
      
      
      var $58 = HEAP[HEAP[$self_addr] + 13 + 2];
      HEAP[$m] = $58;
      
      
      
      
      
      var $64 = HEAP[HEAP[$self_addr] + 13 + 3];
      HEAP[$d] = $64;
      
      
      
      
      var $69 = HEAP[HEAP[$self_addr] + 13 + 4];
      HEAP[$hh] = $69;
      
      
      
      
      var $74 = HEAP[HEAP[$self_addr] + 13 + 5];
      HEAP[$mm] = $74;
      
      
      
      
      var $79 = HEAP[HEAP[$self_addr] + 13 + 6];
      HEAP[$ss] = $79;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $98 = HEAP[HEAP[$self_addr] + 13 + 7] << 16 | HEAP[HEAP[$self_addr] + 13 + 8] << 8 | HEAP[HEAP[$self_addr] + 13 + 9];
      HEAP[$us] = $98;
      
      
      var $101 = HEAP[$mm] - HEAP[$offset];
      HEAP[$mm] = $101;
      
      
      if (HEAP[$mm] < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      if (HEAP[$mm] > 59) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      var $106 = _normalize_datetime($y, $m, $d, $hh, $mm, $ss, $us);
      
      if ($106 < 0) {
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
      var $108 = HEAP[$tzinfo];
      var $109 = HEAP[$us];
      var $110 = HEAP[$ss];
      var $111 = HEAP[$mm];
      var $112 = HEAP[$hh];
      var $113 = HEAP[$d];
      var $114 = HEAP[$m];
      var $115 = HEAP[$y];
      var $116 = _new_datetime_ex($115, $114, $113, $112, $111, $110, $109, $108, _PyDateTime_DateTimeType);
      HEAP[$result] = $116;
      
      
      if (HEAP[$result] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      var $119 = HEAP[$result];
      HEAP[$temp] = $119;
      var $120 = HEAP[$tzinfo];
      var $121 = HEAP[$temp];
      var $122 = __PyObject_CallMethod_SizeT($120, __str189, __str35, allocate([ $121, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $122;
      
      
      
      var $126 = HEAP[HEAP[$temp]] - 1;
      
      var $128 = HEAP[$temp];
      HEAP[$128] = $126;
      
      
      
      
      if (HEAP[HEAP[$temp]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $137 = HEAP[HEAP[HEAP[$temp] + 4] + 24];
      var $138 = HEAP[$temp];
      FUNCTION_TABLE[$137]($138);
      __label__ = 17;
      break;
     case 17:
      var $139 = HEAP[$result];
      HEAP[$0] = $139;
      __label__ = 19;
      break;
     case 18:
      var $140 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($140, __str246);
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 19:
      var $141 = HEAP[$0];
      HEAP[$retval] = $141;
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
  function _datetime_timetuple($self) {
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
      var $dstflag = __stackBase__ + 12;
      var $none = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$dstflag] = -1;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != __Py_NoneStruct) {
        __label__ = 2;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 2:
      
      var $11 = HEAP[$self_addr];
      
      
      var $14 = HEAP[HEAP[$self_addr] + 24];
      var $15 = _call_dst($14, $11, $none);
      HEAP[$dstflag] = $15;
      
      var $17 = HEAP[$dstflag] == -1;
      if ($17) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $18 = _PyErr_Occurred();
      
      if ($18 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 5:
      
      
      if (HEAP[$none] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$dstflag] = -1;
      __label__ = 9;
      break;
     case 7:
      
      
      if (HEAP[$dstflag] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$dstflag] = 1;
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      var $28 = HEAP[HEAP[$self_addr] + 13 + 6];
      
      
      
      
      var $33 = HEAP[HEAP[$self_addr] + 13 + 5];
      
      
      
      
      var $38 = HEAP[HEAP[$self_addr] + 13 + 4];
      
      
      
      
      
      var $44 = HEAP[HEAP[$self_addr] + 13 + 3];
      
      
      
      
      
      var $50 = HEAP[HEAP[$self_addr] + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $64 = HEAP[HEAP[$self_addr] + 13] << 8 | HEAP[HEAP[$self_addr] + 13 + 1];
      var $65 = HEAP[$dstflag];
      var $66 = _build_struct_time($64, $50, $44, $38, $33, $28, $65);
      HEAP[$0] = $66;
      __label__ = 10;
      break;
     case 10:
      var $67 = HEAP[$0];
      HEAP[$retval] = $67;
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
  function _datetime_getdate($self) {
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
      
      
      
      
      
      var $6 = HEAP[HEAP[$self_addr] + 13 + 3];
      
      
      
      
      
      var $12 = HEAP[HEAP[$self_addr] + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $26 = HEAP[HEAP[$self_addr] + 13] << 8 | HEAP[HEAP[$self_addr] + 13 + 1];
      var $27 = _new_date_ex($26, $12, $6, _PyDateTime_DateType);
      HEAP[$0] = $27;
      var $28 = HEAP[$0];
      HEAP[$retval] = $28;
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
  function _datetime_gettime($self) {
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
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $19 = HEAP[HEAP[$self_addr] + 13 + 7] << 16 | HEAP[HEAP[$self_addr] + 13 + 8] << 8 | HEAP[HEAP[$self_addr] + 13 + 9];
      
      
      
      
      var $24 = HEAP[HEAP[$self_addr] + 13 + 6];
      
      
      
      
      var $29 = HEAP[HEAP[$self_addr] + 13 + 5];
      
      
      
      
      var $34 = HEAP[HEAP[$self_addr] + 13 + 4];
      var $35 = _new_time_ex($34, $29, $24, $19, __Py_NoneStruct, _PyDateTime_TimeType);
      HEAP[$0] = $35;
      var $36 = HEAP[$0];
      HEAP[$retval] = $36;
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
  function _datetime_gettimetz($self) {
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
      var $iftmp_588 = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$self_addr] + 24];
      HEAP[$iftmp_588] = $8;
      __label__ = 3;
      break;
     case 2:
      HEAP[$iftmp_588] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $27 = HEAP[HEAP[$self_addr] + 13 + 7] << 16 | HEAP[HEAP[$self_addr] + 13 + 8] << 8 | HEAP[HEAP[$self_addr] + 13 + 9];
      
      
      
      
      var $32 = HEAP[HEAP[$self_addr] + 13 + 6];
      
      
      
      
      var $37 = HEAP[HEAP[$self_addr] + 13 + 5];
      
      
      
      
      var $42 = HEAP[HEAP[$self_addr] + 13 + 4];
      var $43 = HEAP[$iftmp_588];
      var $44 = _new_time_ex($42, $37, $32, $27, $43, _PyDateTime_TimeType);
      HEAP[$0] = $44;
      var $45 = HEAP[$0];
      HEAP[$retval] = $45;
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
  function _datetime_utctimetuple($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $y = __stackBase__ + 12;
      var $m = __stackBase__ + 16;
      var $d = __stackBase__ + 20;
      var $hh = __stackBase__ + 24;
      var $mm = __stackBase__ + 28;
      var $ss = __stackBase__ + 32;
      var $us = __stackBase__ + 36;
      var $offset = __stackBase__ + 40;
      var $none = __stackBase__ + 44;
      var $stat = __stackBase__ + 48;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $14 = HEAP[HEAP[$self_addr] + 13] << 8 | HEAP[HEAP[$self_addr] + 13 + 1];
      HEAP[$y] = $14;
      
      
      
      
      
      var $20 = HEAP[HEAP[$self_addr] + 13 + 2];
      HEAP[$m] = $20;
      
      
      
      
      
      var $26 = HEAP[HEAP[$self_addr] + 13 + 3];
      HEAP[$d] = $26;
      
      
      
      
      var $31 = HEAP[HEAP[$self_addr] + 13 + 4];
      HEAP[$hh] = $31;
      
      
      
      
      var $36 = HEAP[HEAP[$self_addr] + 13 + 5];
      HEAP[$mm] = $36;
      
      
      
      
      var $41 = HEAP[HEAP[$self_addr] + 13 + 6];
      HEAP[$ss] = $41;
      HEAP[$us] = 0;
      HEAP[$offset] = 0;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] != __Py_NoneStruct) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      var $52 = HEAP[$self_addr];
      
      
      var $55 = HEAP[HEAP[$self_addr] + 24];
      var $56 = _call_utcoffset($55, $52, $none);
      HEAP[$offset] = $56;
      
      var $58 = HEAP[$offset] == -1;
      if ($58) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $59 = _PyErr_Occurred();
      
      if ($59 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 5:
      
      
      if (HEAP[$offset] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      
      
      var $65 = HEAP[$mm] - HEAP[$offset];
      HEAP[$mm] = $65;
      var $66 = _normalize_datetime($y, $m, $d, $hh, $mm, $ss, $us);
      HEAP[$stat] = $66;
      
      
      if (HEAP[$stat] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      var $69 = HEAP[_PyExc_OverflowError];
      var $70 = _PyErr_ExceptionMatches($69);
      
      if ($70 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      _PyErr_Clear();
      __label__ = 10;
      break;
     case 9:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 10:
      var $72 = HEAP[$ss];
      var $73 = HEAP[$mm];
      var $74 = HEAP[$hh];
      var $75 = HEAP[$d];
      var $76 = HEAP[$m];
      var $77 = HEAP[$y];
      var $78 = _build_struct_time($77, $76, $75, $74, $73, $72, 0);
      HEAP[$0] = $78;
      __label__ = 11;
      break;
     case 11:
      var $79 = HEAP[$0];
      HEAP[$retval] = $79;
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
  function _datetime_getstate($self) {
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
      var $basestate = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$result] = 0;
      
      
      var $3 = HEAP[$self_addr] + 13;
      var $4 = _PyString_FromStringAndSize($3, 10);
      HEAP[$basestate] = $4;
      
      
      if (HEAP[$basestate] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 24] == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $16 = HEAP[$basestate];
      var $17 = _PyTuple_Pack(1, allocate([ $16, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $17;
      __label__ = 5;
      break;
     case 4:
      
      
      var $20 = HEAP[HEAP[$self_addr] + 24];
      var $21 = HEAP[$basestate];
      var $22 = _PyTuple_Pack(2, allocate([ $21, 0, 0, 0, $20, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $22;
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $26 = HEAP[HEAP[$basestate]] - 1;
      
      var $28 = HEAP[$basestate];
      HEAP[$28] = $26;
      
      
      
      
      if (HEAP[HEAP[$basestate]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $37 = HEAP[HEAP[HEAP[$basestate] + 4] + 24];
      var $38 = HEAP[$basestate];
      FUNCTION_TABLE[$37]($38);
      __label__ = 7;
      break;
     case 7:
      var $39 = HEAP[$result];
      HEAP[$0] = $39;
      var $40 = HEAP[$0];
      HEAP[$retval] = $40;
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
  function _datetime_reduce($self, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$arg_addr] = $arg;
      var $1 = HEAP[$self_addr];
      var $2 = _datetime_getstate($1);
      
      
      
      var $6 = HEAP[HEAP[$self_addr] + 4];
      var $7 = __Py_BuildValue_SizeT(__str154, allocate([ $6, 0, 0, 0, $2, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $7;
      var $8 = HEAP[$0];
      HEAP[$retval] = $8;
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
  function _initdatetime() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      var $d = __stackBase__ + 4;
      var $x = __stackBase__ + 8;
      
      var $0 = _Py_InitModule4(__str269, _module_methods, __str270, 0, 1013);
      HEAP[$m] = $0;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = _PyType_Ready(_PyDateTime_DateType);
      
      if ($3 < 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $5 = _PyType_Ready(_PyDateTime_DateTimeType);
      
      if ($5 < 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $7 = _PyType_Ready(_PyDateTime_DeltaType);
      
      if ($7 < 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $9 = _PyType_Ready(_PyDateTime_TimeType);
      
      if ($9 < 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $11 = _PyType_Ready(_PyDateTime_TZInfoType);
      
      if ($11 < 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $13 = HEAP[_PyDateTime_DeltaType + 132];
      HEAP[$d] = $13;
      var $14 = _new_delta_ex(0, 0, 1, 0, _PyDateTime_DeltaType);
      HEAP[$x] = $14;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $17 = HEAP[$d];
      var $18 = HEAP[$x];
      var $19 = _PyDict_SetItemString($17, __str271, $18);
      
      if ($19 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      __label__ = 83;
      break;
     case 9:
      
      
      
      var $24 = HEAP[HEAP[$x]] - 1;
      
      var $26 = HEAP[$x];
      HEAP[$26] = $24;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $35 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $36 = HEAP[$x];
      FUNCTION_TABLE[$35]($36);
      __label__ = 11;
      break;
     case 11:
      var $37 = _new_delta_ex(-999999999, 0, 0, 0, _PyDateTime_DeltaType);
      HEAP[$x] = $37;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $40 = HEAP[$d];
      var $41 = HEAP[$x];
      var $42 = _PyDict_SetItemString($40, __str272, $41);
      
      if ($42 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      __label__ = 83;
      break;
     case 14:
      
      
      
      var $47 = HEAP[HEAP[$x]] - 1;
      
      var $49 = HEAP[$x];
      HEAP[$49] = $47;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $58 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $59 = HEAP[$x];
      FUNCTION_TABLE[$58]($59);
      __label__ = 16;
      break;
     case 16:
      var $60 = _new_delta_ex(999999999, 86399, 999999, 0, _PyDateTime_DeltaType);
      HEAP[$x] = $60;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      var $63 = HEAP[$d];
      var $64 = HEAP[$x];
      var $65 = _PyDict_SetItemString($63, __str273, $64);
      
      if ($65 < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      __label__ = 83;
      break;
     case 19:
      
      
      
      var $70 = HEAP[HEAP[$x]] - 1;
      
      var $72 = HEAP[$x];
      HEAP[$72] = $70;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $81 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $82 = HEAP[$x];
      FUNCTION_TABLE[$81]($82);
      __label__ = 21;
      break;
     case 21:
      var $83 = HEAP[_PyDateTime_DateType + 132];
      HEAP[$d] = $83;
      var $84 = _new_date_ex(1, 1, 1, _PyDateTime_DateType);
      HEAP[$x] = $84;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      var $87 = HEAP[$d];
      var $88 = HEAP[$x];
      var $89 = _PyDict_SetItemString($87, __str272, $88);
      
      if ($89 < 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      __label__ = 83;
      break;
     case 24:
      
      
      
      var $94 = HEAP[HEAP[$x]] - 1;
      
      var $96 = HEAP[$x];
      HEAP[$96] = $94;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $105 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $106 = HEAP[$x];
      FUNCTION_TABLE[$105]($106);
      __label__ = 26;
      break;
     case 26:
      var $107 = _new_date_ex(9999, 12, 31, _PyDateTime_DateType);
      HEAP[$x] = $107;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      var $110 = HEAP[$d];
      var $111 = HEAP[$x];
      var $112 = _PyDict_SetItemString($110, __str273, $111);
      
      if ($112 < 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      __label__ = 83;
      break;
     case 29:
      
      
      
      var $117 = HEAP[HEAP[$x]] - 1;
      
      var $119 = HEAP[$x];
      HEAP[$119] = $117;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $128 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $129 = HEAP[$x];
      FUNCTION_TABLE[$128]($129);
      __label__ = 31;
      break;
     case 31:
      var $130 = _new_delta_ex(1, 0, 0, 0, _PyDateTime_DeltaType);
      HEAP[$x] = $130;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      var $133 = HEAP[$d];
      var $134 = HEAP[$x];
      var $135 = _PyDict_SetItemString($133, __str271, $134);
      
      if ($135 < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      __label__ = 83;
      break;
     case 34:
      
      
      
      var $140 = HEAP[HEAP[$x]] - 1;
      
      var $142 = HEAP[$x];
      HEAP[$142] = $140;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $151 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $152 = HEAP[$x];
      FUNCTION_TABLE[$151]($152);
      __label__ = 36;
      break;
     case 36:
      var $153 = HEAP[_PyDateTime_TimeType + 132];
      HEAP[$d] = $153;
      var $154 = _new_time_ex(0, 0, 0, 0, __Py_NoneStruct, _PyDateTime_TimeType);
      HEAP[$x] = $154;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      var $157 = HEAP[$d];
      var $158 = HEAP[$x];
      var $159 = _PyDict_SetItemString($157, __str272, $158);
      
      if ($159 < 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      __label__ = 83;
      break;
     case 39:
      
      
      
      var $164 = HEAP[HEAP[$x]] - 1;
      
      var $166 = HEAP[$x];
      HEAP[$166] = $164;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      
      
      var $175 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $176 = HEAP[$x];
      FUNCTION_TABLE[$175]($176);
      __label__ = 41;
      break;
     case 41:
      var $177 = _new_time_ex(23, 59, 59, 999999, __Py_NoneStruct, _PyDateTime_TimeType);
      HEAP[$x] = $177;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      var $180 = HEAP[$d];
      var $181 = HEAP[$x];
      var $182 = _PyDict_SetItemString($180, __str273, $181);
      
      if ($182 < 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      __label__ = 83;
      break;
     case 44:
      
      
      
      var $187 = HEAP[HEAP[$x]] - 1;
      
      var $189 = HEAP[$x];
      HEAP[$189] = $187;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      var $198 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $199 = HEAP[$x];
      FUNCTION_TABLE[$198]($199);
      __label__ = 46;
      break;
     case 46:
      var $200 = _new_delta_ex(0, 0, 1, 0, _PyDateTime_DeltaType);
      HEAP[$x] = $200;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 47:
      var $203 = HEAP[$d];
      var $204 = HEAP[$x];
      var $205 = _PyDict_SetItemString($203, __str271, $204);
      
      if ($205 < 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      __label__ = 83;
      break;
     case 49:
      
      
      
      var $210 = HEAP[HEAP[$x]] - 1;
      
      var $212 = HEAP[$x];
      HEAP[$212] = $210;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      
      
      
      var $221 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $222 = HEAP[$x];
      FUNCTION_TABLE[$221]($222);
      __label__ = 51;
      break;
     case 51:
      var $223 = HEAP[_PyDateTime_DateTimeType + 132];
      HEAP[$d] = $223;
      var $224 = _new_datetime_ex(1, 1, 1, 0, 0, 0, 0, __Py_NoneStruct, _PyDateTime_DateTimeType);
      HEAP[$x] = $224;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 52:
      var $227 = HEAP[$d];
      var $228 = HEAP[$x];
      var $229 = _PyDict_SetItemString($227, __str272, $228);
      
      if ($229 < 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      __label__ = 83;
      break;
     case 54:
      
      
      
      var $234 = HEAP[HEAP[$x]] - 1;
      
      var $236 = HEAP[$x];
      HEAP[$236] = $234;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      
      
      
      
      var $245 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $246 = HEAP[$x];
      FUNCTION_TABLE[$245]($246);
      __label__ = 56;
      break;
     case 56:
      var $247 = _new_datetime_ex(9999, 12, 31, 23, 59, 59, 999999, __Py_NoneStruct, _PyDateTime_DateTimeType);
      HEAP[$x] = $247;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 57:
      var $250 = HEAP[$d];
      var $251 = HEAP[$x];
      var $252 = _PyDict_SetItemString($250, __str273, $251);
      
      if ($252 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 58:
      __label__ = 83;
      break;
     case 59:
      
      
      
      var $257 = HEAP[HEAP[$x]] - 1;
      
      var $259 = HEAP[$x];
      HEAP[$259] = $257;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 60;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 60:
      
      
      
      
      var $268 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $269 = HEAP[$x];
      FUNCTION_TABLE[$268]($269);
      __label__ = 61;
      break;
     case 61:
      var $270 = _new_delta_ex(0, 0, 1, 0, _PyDateTime_DeltaType);
      HEAP[$x] = $270;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 62:
      var $273 = HEAP[$d];
      var $274 = HEAP[$x];
      var $275 = _PyDict_SetItemString($273, __str271, $274);
      
      if ($275 < 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      __label__ = 83;
      break;
     case 64:
      
      
      
      var $280 = HEAP[HEAP[$x]] - 1;
      
      var $282 = HEAP[$x];
      HEAP[$282] = $280;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      
      
      
      
      var $291 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $292 = HEAP[$x];
      FUNCTION_TABLE[$291]($292);
      __label__ = 66;
      break;
     case 66:
      var $293 = HEAP[$m];
      var $294 = _PyModule_AddIntConstant($293, __str274, 1);
      var $295 = HEAP[$m];
      var $296 = _PyModule_AddIntConstant($295, __str275, 9999);
      
      
      var $299 = HEAP[_PyDateTime_DateType] + 1;
      
      HEAP[_PyDateTime_DateType] = $299;
      var $301 = HEAP[$m];
      var $302 = _PyModule_AddObject($301, __str232, _PyDateTime_DateType);
      
      
      var $305 = HEAP[_PyDateTime_DateTimeType] + 1;
      
      HEAP[_PyDateTime_DateTimeType] = $305;
      var $307 = HEAP[$m];
      var $308 = _PyModule_AddObject($307, __str269, _PyDateTime_DateTimeType);
      
      
      var $311 = HEAP[_PyDateTime_TimeType] + 1;
      
      HEAP[_PyDateTime_TimeType] = $311;
      var $313 = HEAP[$m];
      var $314 = _PyModule_AddObject($313, __str92, _PyDateTime_TimeType);
      
      
      var $317 = HEAP[_PyDateTime_DeltaType] + 1;
      
      HEAP[_PyDateTime_DeltaType] = $317;
      var $319 = HEAP[$m];
      var $320 = _PyModule_AddObject($319, __str276, _PyDateTime_DeltaType);
      
      
      var $323 = HEAP[_PyDateTime_TZInfoType] + 1;
      
      HEAP[_PyDateTime_TZInfoType] = $323;
      var $325 = HEAP[$m];
      var $326 = _PyModule_AddObject($325, __str48, _PyDateTime_TZInfoType);
      var $327 = _PyCapsule_New(_CAPI, __str277, 0);
      HEAP[$x] = $327;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 67:
      var $330 = HEAP[$m];
      var $331 = HEAP[$x];
      var $332 = _PyModule_AddObject($330, __str278, $331);
      var $333 = _days_before_year(5);
      
      if ($333 != 1461) {
        __label__ = 68;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 68:
      ___assert_fail(__str279, __str1, 4888, ___PRETTY_FUNCTION___13976);
      throw "Reached an unreachable!";
     case 69:
      var $335 = _days_before_year(401);
      
      if ($335 != 146097) {
        __label__ = 70;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 70:
      ___assert_fail(__str280, __str1, 4894, ___PRETTY_FUNCTION___13976);
      throw "Reached an unreachable!";
     case 71:
      var $337 = _days_before_year(101);
      
      if ($337 != 36524) {
        __label__ = 72;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 72:
      ___assert_fail(__str281, __str1, 4900, ___PRETTY_FUNCTION___13976);
      throw "Reached an unreachable!";
     case 73:
      var $339 = _PyInt_FromLong(1);
      HEAP[_us_per_us] = $339;
      var $340 = _PyInt_FromLong(1e3);
      HEAP[_us_per_ms] = $340;
      var $341 = _PyInt_FromLong(1e6);
      HEAP[_us_per_second] = $341;
      var $342 = _PyInt_FromLong(6e7);
      HEAP[_us_per_minute] = $342;
      var $343 = _PyInt_FromLong(86400);
      HEAP[_seconds_per_day] = $343;
      
      
      if (HEAP[_us_per_us] == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 74:
      
      
      if (HEAP[_us_per_ms] == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 75;
        break;
      }
     case 75:
      
      
      if (HEAP[_us_per_second] == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 76:
      
      
      if (HEAP[_us_per_minute] == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 77:
      
      
      if (HEAP[_seconds_per_day] == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 78:
      __label__ = 83;
      break;
     case 79:
      var $354 = _PyLong_FromDouble(36e8);
      HEAP[_us_per_hour] = $354;
      var $355 = _PyLong_FromDouble(864e8);
      HEAP[_us_per_day] = $355;
      var $356 = _PyLong_FromDouble(6048e8);
      HEAP[_us_per_week] = $356;
      
      
      if (HEAP[_us_per_hour] == 0) {
        __label__ = 82;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 80:
      
      
      if (HEAP[_us_per_day] == 0) {
        __label__ = 82;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 81:
      
      
      if (HEAP[_us_per_week] == 0) {
        __label__ = 82;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 82:
      __label__ = 83;
      break;
     case 83:
      __label__ = 84;
      break;
     case 84:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initdatetime"] = _initdatetime;
  function __PyTime_DoubleToTimet($x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr = __stackBase__;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      var $diff = __stackBase__ + 20;
      
      HEAP[$x_addr] = $x;
      
      var $2 = HEAP[$x_addr] | 0;
      HEAP[$result] = $2;
      
      
      
      var $6 = HEAP[$x_addr] - HEAP[$result];
      HEAP[$diff] = $6;
      
      var $8 = HEAP[$diff] <= -1;
      if ($8) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$diff] >= 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $11 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($11, __str282);
      HEAP[$result] = -1;
      __label__ = 3;
      break;
     case 3:
      var $12 = HEAP[$result];
      HEAP[$0] = $12;
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
  function _time_time346($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $secs = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$unused_addr] = $unused;
      var $1 = _floattime();
      HEAP[$secs] = $1;
      
      
      if (HEAP[$secs] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[_PyExc_IOError];
      var $5 = _PyErr_SetFromErrno($4);
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 2:
      var $6 = HEAP[$secs];
      var $7 = _PyFloat_FromDouble($6);
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
  function _time_clock($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $self;
      HEAP[$unused_addr] = $unused;
      var $1 = _clock();
      
      var $3 = $1 / 1e6;
      var $4 = _PyFloat_FromDouble($3);
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
  function _time_sleep($self, $args) {
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
      var $secs = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str1284, allocate([ $secs, 0, 0, 0 ], [ "double*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$secs];
      var $5 = _floatsleep($4);
      
      if ($5 != 0) {
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
      
      var $8 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $8;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 5;
      break;
     case 5:
      var $9 = HEAP[$0];
      HEAP[$retval] = $9;
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
  function _tmtotuple($p) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $v = __stackBase__ + 12;
      
      HEAP[$p_addr] = $p;
      var $1 = _PyStructSequence_New(_StructTimeType);
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
      __label__ = 8;
      break;
     case 2:
      
      var $5 = HEAP[$v];
      
      
      
      var $9 = HEAP[HEAP[$p_addr] + 20] + 1900;
      var $10 = _PyInt_FromLong($9);
      
      var $12 = $5 + 12;
      HEAP[$12] = $10;
      
      var $14 = HEAP[$v];
      
      
      
      var $18 = HEAP[HEAP[$p_addr] + 16] + 1;
      var $19 = _PyInt_FromLong($18);
      
      var $21 = $14 + 12 + 4;
      HEAP[$21] = $19;
      
      var $23 = HEAP[$v];
      
      
      var $26 = HEAP[HEAP[$p_addr] + 12];
      var $27 = _PyInt_FromLong($26);
      
      var $29 = $23 + 12 + 8;
      HEAP[$29] = $27;
      
      var $31 = HEAP[$v];
      
      
      var $34 = HEAP[HEAP[$p_addr] + 8];
      var $35 = _PyInt_FromLong($34);
      
      var $37 = $31 + 12 + 12;
      HEAP[$37] = $35;
      
      var $39 = HEAP[$v];
      
      
      var $42 = HEAP[HEAP[$p_addr] + 4];
      var $43 = _PyInt_FromLong($42);
      
      var $45 = $39 + 12 + 16;
      HEAP[$45] = $43;
      
      var $47 = HEAP[$v];
      
      
      var $50 = HEAP[HEAP[$p_addr]];
      var $51 = _PyInt_FromLong($50);
      
      var $53 = $47 + 12 + 20;
      HEAP[$53] = $51;
      
      var $55 = HEAP[$v];
      
      
      
      
      var $60 = (HEAP[HEAP[$p_addr] + 24] + 6) % 7;
      var $61 = _PyInt_FromLong($60);
      
      var $63 = $55 + 12 + 24;
      HEAP[$63] = $61;
      
      var $65 = HEAP[$v];
      
      
      
      var $69 = HEAP[HEAP[$p_addr] + 28] + 1;
      var $70 = _PyInt_FromLong($69);
      
      var $72 = $65 + 12 + 28;
      HEAP[$72] = $70;
      
      var $74 = HEAP[$v];
      
      
      var $77 = HEAP[HEAP[$p_addr] + 32];
      var $78 = _PyInt_FromLong($77);
      
      var $80 = $74 + 12 + 32;
      HEAP[$80] = $78;
      var $81 = _PyErr_Occurred();
      
      if ($81 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      if (HEAP[$v] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      var $88 = HEAP[HEAP[$v]] - 1;
      
      var $90 = HEAP[$v];
      HEAP[$90] = $88;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $99 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $100 = HEAP[$v];
      FUNCTION_TABLE[$99]($100);
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 7:
      var $101 = HEAP[$v];
      HEAP[$0] = $101;
      __label__ = 8;
      break;
     case 8:
      var $102 = HEAP[$0];
      HEAP[$retval] = $102;
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
  function _time_convert($when, $function) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $when_addr = __stackBase__;
      var $function_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $p = __stackBase__ + 20;
      var $whent = __stackBase__ + 24;
      
      HEAP[$when_addr] = $when;
      HEAP[$function_addr] = $function;
      var $1 = HEAP[$when_addr];
      var $2 = __PyTime_DoubleToTimet($1);
      HEAP[$whent] = $2;
      
      var $4 = HEAP[$whent] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 3:
      var $7 = ___errno_location();
      HEAP[$7] = 0;
      var $8 = HEAP[$function_addr];
      var $9 = FUNCTION_TABLE[$8]($whent);
      HEAP[$p] = $9;
      
      
      if (HEAP[$p] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      var $12 = ___errno_location();
      
      
      if (HEAP[$12] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $15 = ___errno_location();
      HEAP[$15] = 22;
      __label__ = 6;
      break;
     case 6:
      var $16 = HEAP[_PyExc_ValueError];
      var $17 = _PyErr_SetFromErrno($16);
      HEAP[$0] = $17;
      __label__ = 8;
      break;
     case 7:
      var $18 = HEAP[$p];
      var $19 = _tmtotuple($18);
      HEAP[$0] = $19;
      __label__ = 8;
      break;
     case 8:
      var $20 = HEAP[$0];
      HEAP[$retval] = $20;
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
  function _parse_time_double_args($args, $format, $pwhen) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $args_addr = __stackBase__;
      var $format_addr = __stackBase__ + 4;
      var $pwhen_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $ot = __stackBase__ + 20;
      var $when = __stackBase__ + 24;
      
      HEAP[$args_addr] = $args;
      HEAP[$format_addr] = $format;
      HEAP[$pwhen_addr] = $pwhen;
      HEAP[$ot] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$format_addr];
      var $3 = _PyArg_ParseTuple($1, $2, allocate([ $ot, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$ot] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$ot] == __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $9 = _floattime();
      var $10 = HEAP[$pwhen_addr];
      HEAP[$10] = $9;
      __label__ = 8;
      break;
     case 5:
      var $11 = HEAP[$ot];
      var $12 = _PyFloat_AsDouble($11);
      HEAP[$when] = $12;
      var $13 = _PyErr_Occurred();
      
      if ($13 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 7:
      var $15 = HEAP[$pwhen_addr];
      var $16 = HEAP[$when];
      HEAP[$15] = $16;
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = 1;
      __label__ = 9;
      break;
     case 9:
      var $17 = HEAP[$0];
      HEAP[$retval] = $17;
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
  function _time_gmtime($self, $args) {
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
      var $when = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _parse_time_double_args($1, __str22305, $when);
      
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
      var $4 = HEAP[$when];
      var $5 = _time_convert($4, FUNCTION_TABLE_OFFSET + 4);
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
  function _time_localtime($self, $args) {
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
      var $when = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _parse_time_double_args($1, __str23306, $when);
      
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
      var $4 = HEAP[$when];
      var $5 = _time_convert($4, FUNCTION_TABLE_OFFSET + 2);
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
  function _gettmarg($args, $p) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $args_addr = __stackBase__;
      var $p_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $y = __stackBase__ + 16;
      var $accept = __stackBase__ + 20;
      
      HEAP[$args_addr] = $args;
      HEAP[$p_addr] = $p;
      
      var $2 = HEAP[$p_addr];
      _llvm_memset_p0i8_i32($2, 0, 44, 1, 0);
      
      var $4 = HEAP[$p_addr] + 32;
      
      var $6 = HEAP[$p_addr] + 28;
      
      var $8 = HEAP[$p_addr] + 24;
      
      var $10 = HEAP[$p_addr];
      
      var $12 = HEAP[$p_addr] + 4;
      
      var $14 = HEAP[$p_addr] + 8;
      
      var $16 = HEAP[$p_addr] + 12;
      
      var $18 = HEAP[$p_addr] + 16;
      var $19 = HEAP[$args_addr];
      var $20 = _PyArg_Parse($19, __str24307, allocate([ $y, 0, 0, 0, $18, 0, 0, 0, $16, 0, 0, 0, $14, 0, 0, 0, $12, 0, 0, 0, $10, 0, 0, 0, $8, 0, 0, 0, $6, 0, 0, 0, $4, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($20 == 0) {
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
      
      
      if (HEAP[$y] <= 1899) {
        __label__ = 3;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 3:
      var $24 = HEAP[_moddict];
      var $25 = _PyDict_GetItemString($24, __str25308);
      HEAP[$accept] = $25;
      
      
      if (HEAP[$accept] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$accept] + 4] + 84] & 8388608) == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $35 = HEAP[$accept];
      var $36 = _PyInt_AsLong($35);
      
      if ($36 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $38 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($38, __str26309);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 7:
      
      
      if (HEAP[$y] <= 68) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      if (HEAP[$y] > 99) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      var $44 = HEAP[$y] + 1900;
      HEAP[$y] = $44;
      __label__ = 14;
      break;
     case 10:
      
      
      if (HEAP[$y] < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      if (HEAP[$y] > 68) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      var $50 = HEAP[$y] + 2e3;
      HEAP[$y] = $50;
      __label__ = 14;
      break;
     case 13:
      var $51 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($51, __str27310);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 14:
      
      var $53 = HEAP[$y] - 1900;
      
      var $55 = HEAP[$p_addr] + 20;
      HEAP[$55] = $53;
      
      
      
      var $59 = HEAP[HEAP[$p_addr] + 16] - 1;
      
      var $61 = HEAP[$p_addr] + 16;
      HEAP[$61] = $59;
      
      
      
      
      var $66 = (HEAP[HEAP[$p_addr] + 24] + 1) % 7;
      
      var $68 = HEAP[$p_addr] + 24;
      HEAP[$68] = $66;
      
      
      
      var $72 = HEAP[HEAP[$p_addr] + 28] - 1;
      
      var $74 = HEAP[$p_addr] + 28;
      HEAP[$74] = $72;
      HEAP[$0] = 1;
      __label__ = 15;
      break;
     case 15:
      var $75 = HEAP[$0];
      HEAP[$retval] = $75;
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
  function _time_strftime347($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 92;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 92);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $tup = __stackBase__ + 16;
      var $buf = __stackBase__ + 20;
      var $fmt = __stackBase__ + 64;
      var $fmtlen = __stackBase__ + 68;
      var $buflen = __stackBase__ + 72;
      var $outbuf = __stackBase__ + 76;
      var $i = __stackBase__ + 80;
      var $tt = __stackBase__ + 84;
      var $ret = __stackBase__ + 88;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$tup] = 0;
      HEAP[$outbuf] = 0;
      var $buf1 = $buf;
      _llvm_memset_p0i8_i32($buf1, 0, 44, 1, 0);
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str28311, allocate([ $fmt, 0, 0, 0, $tup, 0, 0, 0 ], [ "i8**", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 43;
      break;
     case 2:
      
      
      if (HEAP[$tup] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = _time(0);
      HEAP[$tt] = $6;
      var $7 = _localtime($tt);
      var $buf4 = $buf;
      var $8 = $7;
      _llvm_memcpy_p0i8_p0i8_i32($buf4, $8, 44, 4, 0);
      __label__ = 6;
      break;
     case 4:
      var $9 = HEAP[$tup];
      var $10 = _gettmarg($9, $buf);
      
      if ($10 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 43;
      break;
     case 6:
      
      
      var $14 = HEAP[$buf + 16] == -1;
      if ($14) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      HEAP[$buf + 16] = 0;
      __label__ = 11;
      break;
     case 8:
      
      
      
      if (HEAP[$buf + 16] < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      if (HEAP[$buf + 16] > 11) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $22 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($22, __str29312);
      HEAP[$0] = 0;
      __label__ = 43;
      break;
     case 11:
      
      
      
      if (HEAP[$buf + 12] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      HEAP[$buf + 12] = 1;
      __label__ = 16;
      break;
     case 13:
      
      
      
      if (HEAP[$buf + 12] < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      if (HEAP[$buf + 12] > 31) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $33 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($33, __str30313);
      HEAP[$0] = 0;
      __label__ = 43;
      break;
     case 16:
      
      
      
      if (HEAP[$buf + 8] < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      if (HEAP[$buf + 8] > 23) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $40 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($40, __str31314);
      HEAP[$0] = 0;
      __label__ = 43;
      break;
     case 19:
      
      
      
      if (HEAP[$buf + 4] < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      if (HEAP[$buf + 4] > 59) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      var $47 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($47, __str32315);
      HEAP[$0] = 0;
      __label__ = 43;
      break;
     case 22:
      
      
      
      if (HEAP[$buf] < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      if (HEAP[$buf] > 61) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      var $54 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($54, __str33316);
      HEAP[$0] = 0;
      __label__ = 43;
      break;
     case 25:
      
      
      
      if (HEAP[$buf + 24] < 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      var $58 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($58, __str34317);
      HEAP[$0] = 0;
      __label__ = 43;
      break;
     case 27:
      
      
      var $61 = HEAP[$buf + 28] == -1;
      if ($61) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      HEAP[$buf + 28] = 0;
      __label__ = 32;
      break;
     case 29:
      
      
      
      if (HEAP[$buf + 28] < 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      if (HEAP[$buf + 28] > 365) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      var $69 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($69, __str35318);
      HEAP[$0] = 0;
      __label__ = 43;
      break;
     case 32:
      
      
      var $72 = HEAP[$buf + 32] < -1;
      if ($72) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      HEAP[$buf + 32] = -1;
      __label__ = 36;
      break;
     case 34:
      
      
      
      if (HEAP[$buf + 32] > 1) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      HEAP[$buf + 32] = 1;
      __label__ = 36;
      break;
     case 36:
      var $78 = HEAP[$fmt];
      var $79 = _strlen($78);
      HEAP[$fmtlen] = $79;
      HEAP[$i] = 1024;
      __label__ = 37;
      break;
     case 37:
      var $80 = HEAP[$i];
      var $81 = _malloc($80);
      HEAP[$outbuf] = $81;
      
      
      if (HEAP[$outbuf] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      var $84 = _PyErr_NoMemory();
      HEAP[$0] = $84;
      __label__ = 43;
      break;
     case 39:
      var $85 = HEAP[$fmt];
      var $86 = HEAP[$outbuf];
      var $87 = HEAP[$i];
      var $88 = _strftime($86, $87, $85, $buf);
      HEAP[$buflen] = $88;
      
      
      if (HEAP[$buflen] != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      
      
      
      
      if (HEAP[$fmtlen] * 256 <= HEAP[$i]) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      var $95 = HEAP[$buflen];
      var $96 = HEAP[$outbuf];
      var $97 = _PyString_FromStringAndSize($96, $95);
      HEAP[$ret] = $97;
      var $98 = HEAP[$outbuf];
      _free($98);
      var $99 = HEAP[$ret];
      HEAP[$0] = $99;
      __label__ = 43;
      break;
     case 42:
      var $100 = HEAP[$outbuf];
      _free($100);
      
      
      var $103 = HEAP[$i] + HEAP[$i];
      HEAP[$i] = $103;
      __label__ = 37;
      break;
     case 43:
      var $104 = HEAP[$0];
      HEAP[$retval] = $104;
      __label__ = 44;
      break;
     case 44:
      var $retval45 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval45;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_strptime($self, $args) {
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
      var $strptime_module = __stackBase__ + 16;
      var $strptime_result = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = _PyImport_ImportModuleNoBlock(__str36319);
      HEAP[$strptime_module] = $1;
      
      
      if (HEAP[$strptime_module] == 0) {
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
      var $4 = HEAP[$strptime_module];
      var $5 = HEAP[$args_addr];
      var $6 = _PyObject_CallMethod($4, __str37320, __str38321, allocate([ $5, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$strptime_result] = $6;
      
      
      
      var $10 = HEAP[HEAP[$strptime_module]] - 1;
      
      var $12 = HEAP[$strptime_module];
      HEAP[$12] = $10;
      
      
      
      
      if (HEAP[HEAP[$strptime_module]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $21 = HEAP[HEAP[HEAP[$strptime_module] + 4] + 24];
      var $22 = HEAP[$strptime_module];
      FUNCTION_TABLE[$21]($22);
      __label__ = 4;
      break;
     case 4:
      var $23 = HEAP[$strptime_result];
      HEAP[$0] = $23;
      __label__ = 5;
      break;
     case 5:
      var $24 = HEAP[$0];
      HEAP[$retval] = $24;
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
  function _time_asctime($self, $args) {
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
      var $tup = __stackBase__ + 16;
      var $buf = __stackBase__ + 20;
      var $p = __stackBase__ + 64;
      var $tt = __stackBase__ + 68;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$tup] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str39322, 0, 1, allocate([ $tup, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$tup] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = _time(0);
      HEAP[$tt] = $6;
      var $7 = _localtime($tt);
      var $buf3 = $buf;
      var $8 = $7;
      _llvm_memcpy_p0i8_p0i8_i32($buf3, $8, 44, 4, 0);
      __label__ = 6;
      break;
     case 4:
      var $9 = HEAP[$tup];
      var $10 = _gettmarg($9, $buf);
      
      if ($10 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 6:
      var $12 = _asctime($buf);
      HEAP[$p] = $12;
      
      
      if (HEAP[$p] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $15 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($15, __str40323);
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 8:
      
      
      
      
      if (HEAP[HEAP[$p] + 24] == 10) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      var $21 = HEAP[$p] + 24;
      HEAP[$21] = 0;
      __label__ = 10;
      break;
     case 10:
      var $22 = HEAP[$p];
      var $23 = _PyString_FromString($22);
      HEAP[$0] = $23;
      __label__ = 11;
      break;
     case 11:
      var $24 = HEAP[$0];
      HEAP[$retval] = $24;
      __label__ = 12;
      break;
     case 12:
      var $retval12 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_ctime($self, $args) {
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
      var $ot = __stackBase__ + 16;
      var $tt = __stackBase__ + 20;
      var $p = __stackBase__ + 24;
      var $dt = __stackBase__ + 28;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$ot] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str41324, 0, 1, allocate([ $ot, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$ot] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$ot] == __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $8 = _time(0);
      HEAP[$tt] = $8;
      __label__ = 10;
      break;
     case 5:
      var $9 = HEAP[$ot];
      var $10 = _PyFloat_AsDouble($9);
      HEAP[$dt] = $10;
      var $11 = _PyErr_Occurred();
      
      if ($11 != 0) {
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
      var $13 = HEAP[$dt];
      var $14 = __PyTime_DoubleToTimet($13);
      HEAP[$tt] = $14;
      
      var $16 = HEAP[$tt] == -1;
      if ($16) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      var $17 = _PyErr_Occurred();
      
      if ($17 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 10:
      var $19 = _ctime($tt);
      HEAP[$p] = $19;
      
      
      if (HEAP[$p] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $22 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($22, __str42325);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 12:
      
      
      
      
      if (HEAP[HEAP[$p] + 24] == 10) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      var $28 = HEAP[$p] + 24;
      HEAP[$28] = 0;
      __label__ = 14;
      break;
     case 14:
      var $29 = HEAP[$p];
      var $30 = _PyString_FromString($29);
      HEAP[$0] = $30;
      __label__ = 15;
      break;
     case 15:
      var $31 = HEAP[$0];
      HEAP[$retval] = $31;
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
  function _time_mktime($self, $tup) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 64;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $tup_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $buf = __stackBase__ + 16;
      var $tt = __stackBase__ + 60;
      
      HEAP[__stackBase__] = $self;
      HEAP[$tup_addr] = $tup;
      var $1 = HEAP[$tup_addr];
      var $2 = _gettmarg($1, $buf);
      
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
      
      HEAP[$buf + 24] = -1;
      var $5 = _mktime($buf);
      HEAP[$tt] = $5;
      
      var $7 = HEAP[$tt] == -1;
      if ($7) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $10 = HEAP[$buf + 24] == -1;
      if ($10) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $11 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($11, __str43326);
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 5:
      
      var $13 = HEAP[$tt];
      var $14 = _PyFloat_FromDouble($13);
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
  function _time_tzset($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $m = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$unused_addr] = $unused;
      var $1 = _PyImport_ImportModuleNoBlock(__str44327);
      HEAP[$m] = $1;
      
      
      if (HEAP[$m] == 0) {
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
      _tzset();
      var $4 = HEAP[$m];
      _inittimezone($4);
      
      
      
      var $8 = HEAP[HEAP[$m]] - 1;
      
      var $10 = HEAP[$m];
      HEAP[$10] = $8;
      
      
      
      
      if (HEAP[HEAP[$m]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $19 = HEAP[HEAP[HEAP[$m] + 4] + 24];
      var $20 = HEAP[$m];
      FUNCTION_TABLE[$19]($20);
      __label__ = 4;
      break;
     case 4:
      
      var $22 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $22;
      HEAP[$0] = __Py_NoneStruct;
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
  function _inittimezone($m) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m_addr = __stackBase__;
      var $iftmp_53 = __stackBase__ + 4;
      var $iftmp_51 = __stackBase__ + 8;
      var $t = __stackBase__ + 12;
      var $p = __stackBase__ + 16;
      var $janzone = __stackBase__ + 20;
      var $julyzone = __stackBase__ + 24;
      var $janname = __stackBase__ + 28;
      var $julyname = __stackBase__ + 38;
      
      HEAP[$m_addr] = $m;
      var $0 = _time(0);
      
      
      HEAP[$t] = ($0 / 31557600 | 0) * 31557600;
      var $3 = _localtime($t);
      HEAP[$p] = $3;
      
      
      
      var $7 = 0 - HEAP[HEAP[$p] + 36];
      HEAP[$janzone] = $7;
      
      
      
      
      if (HEAP[HEAP[$p] + 40] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $14 = HEAP[HEAP[$p] + 40];
      HEAP[$iftmp_51] = $14;
      __label__ = 3;
      break;
     case 2:
      HEAP[$iftmp_51] = __str45328;
      __label__ = 3;
      break;
     case 3:
      var $janname3 = $janname;
      var $15 = HEAP[$iftmp_51];
      var $16 = _strncpy($janname3, $15, 9);
      
      HEAP[$janname + 9] = 0;
      
      var $19 = HEAP[$t] + 15778800;
      HEAP[$t] = $19;
      var $20 = _localtime($t);
      HEAP[$p] = $20;
      
      
      
      var $24 = 0 - HEAP[HEAP[$p] + 36];
      HEAP[$julyzone] = $24;
      
      
      
      
      if (HEAP[HEAP[$p] + 40] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $31 = HEAP[HEAP[$p] + 40];
      HEAP[$iftmp_53] = $31;
      __label__ = 6;
      break;
     case 5:
      HEAP[$iftmp_53] = __str45328;
      __label__ = 6;
      break;
     case 6:
      var $julyname7 = $julyname;
      var $32 = HEAP[$iftmp_53];
      var $33 = _strncpy($julyname7, $32, 9);
      
      HEAP[$julyname + 9] = 0;
      
      
      
      if (HEAP[$janzone] < HEAP[$julyzone]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $38 = HEAP[$m_addr];
      var $39 = HEAP[$julyzone];
      var $40 = _PyModule_AddIntConstant($38, __str46329, $39);
      var $41 = HEAP[$m_addr];
      var $42 = HEAP[$janzone];
      var $43 = _PyModule_AddIntConstant($41, __str47330, $42);
      
      
      
      var $47 = HEAP[$janzone] != HEAP[$julyzone];
      var $48 = HEAP[$m_addr];
      var $49 = _PyModule_AddIntConstant($48, __str48331, $47);
      var $julyname9 = $julyname;
      var $janname10 = $janname;
      var $50 = _Py_BuildValue(__str49332, allocate([ $julyname9, 0, 0, 0, $janname10, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      var $51 = HEAP[$m_addr];
      var $52 = _PyModule_AddObject($51, __str50333, $50);
      __label__ = 9;
      break;
     case 8:
      var $53 = HEAP[$m_addr];
      var $54 = HEAP[$janzone];
      var $55 = _PyModule_AddIntConstant($53, __str46329, $54);
      var $56 = HEAP[$m_addr];
      var $57 = HEAP[$julyzone];
      var $58 = _PyModule_AddIntConstant($56, __str47330, $57);
      
      
      
      var $62 = HEAP[$janzone] != HEAP[$julyzone];
      var $63 = HEAP[$m_addr];
      var $64 = _PyModule_AddIntConstant($63, __str48331, $62);
      var $janname12 = $janname;
      var $julyname13 = $julyname;
      var $65 = _Py_BuildValue(__str49332, allocate([ $janname12, 0, 0, 0, $julyname13, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      var $66 = HEAP[$m_addr];
      var $67 = _PyModule_AddObject($66, __str50333, $65);
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
  function _inittime() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $iftmp_56 = __stackBase__;
      var $iftmp_54 = __stackBase__ + 4;
      var $m = __stackBase__ + 8;
      var $p = __stackBase__ + 12;
      
      var $0 = _Py_InitModule4(__str44327, _time_methods342, _module_doc, 0, 1013);
      HEAP[$m] = $0;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[_Py_IgnoreEnvironmentFlag] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $5 = _getenv(__str59343);
      HEAP[$iftmp_54] = $5;
      __label__ = 4;
      break;
     case 3:
      HEAP[$iftmp_54] = 0;
      __label__ = 4;
      break;
     case 4:
      var $6 = HEAP[$iftmp_54];
      HEAP[$p] = $6;
      
      
      if (HEAP[$p] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      if (HEAP[HEAP[$p]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$iftmp_56] = 1;
      __label__ = 8;
      break;
     case 7:
      HEAP[$iftmp_56] = 0;
      __label__ = 8;
      break;
     case 8:
      var $12 = HEAP[$m];
      var $13 = HEAP[$iftmp_56];
      var $14 = _PyModule_AddIntConstant($12, __str25308, $13);
      var $15 = HEAP[$m];
      var $16 = _PyModule_GetDict($15);
      HEAP[_moddict] = $16;
      
      
      
      var $20 = HEAP[HEAP[_moddict]] + 1;
      var $21 = HEAP[_moddict];
      HEAP[$21] = $20;
      var $22 = HEAP[$m];
      _inittimezone($22);
      
      
      if (HEAP[_initialized] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      _PyStructSequence_InitType(_StructTimeType, _struct_time_type_desc);
      __label__ = 10;
      break;
     case 10:
      
      
      var $27 = HEAP[_StructTimeType] + 1;
      
      HEAP[_StructTimeType] = $27;
      var $29 = HEAP[$m];
      var $30 = _PyModule_AddObject($29, __str60344, _StructTimeType);
      HEAP[_initialized] = 1;
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
  function _floattime() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval = __stackBase__;
      var $0 = __stackBase__ + 8;
      var $t = __stackBase__ + 16;
      var $t2 = __stackBase__ + 24;
      
      var $1 = _gettimeofday($t, 0);
      
      if ($1 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      var $10 = HEAP[$t] + HEAP[$t + 4] * 1e-6;
      HEAP[$0] = $10;
      __label__ = 3;
      break;
     case 2:
      var $11 = _ftime($t2);
      
      
      
      
      
      
      
      var $19 = HEAP[$t2] + HEAP[$t2 + 4] * .001;
      HEAP[$0] = $19;
      __label__ = 3;
      break;
     case 3:
      var $20 = HEAP[$0];
      HEAP[$retval] = $20;
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
  function _floatsleep($secs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $secs_addr = __stackBase__;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $t = __stackBase__ + 16;
      var $frac = __stackBase__ + 24;
      
      HEAP[$secs_addr] = $secs;
      var $1 = HEAP[$secs_addr];
      var $2 = _fmod($1, 1);
      HEAP[$frac] = $2;
      var $3 = HEAP[$secs_addr];
      var $4 = _floor($3);
      HEAP[$secs_addr] = $4;
      
      var $6 = HEAP[$secs_addr] | 0;
      
      HEAP[$t] = $6;
      
      
      var $10 = HEAP[$frac] * 1e6 | 0;
      
      HEAP[$t + 4] = $10;
      var $12 = _select(0, 0, 0, 0, $t);
      
      if ($12 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $14 = ___errno_location();
      
      
      if (HEAP[$14] != 4) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $17 = HEAP[_PyExc_IOError];
      var $18 = _PyErr_SetFromErrno($17);
      HEAP[$0] = -1;
      __label__ = 4;
      break;
     case 3:
      HEAP[$0] = 0;
      __label__ = 4;
      break;
     case 4:
      var $19 = HEAP[$0];
      HEAP[$retval] = $19;
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
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _localtime, 0, _gmtime, 0, _delta_total_seconds, 0, _delta_reduce, 0, _delta_add, 0, _delta_subtract, 0, _delta_multiply, 0, _delta_divide, 0, _delta_negative, 0, _delta_positive, 0, _delta_abs, 0, _delta_nonzero, 0, _delta_repr, 0, _delta_hash, 0, _delta_str, 0, _PyObject_GenericGetAttr, 0, _delta_richcompare, 0, _delta_new, 0, _date_year, 0, _date_month, 0, _date_day, 0, _date_fromtimestamp, 0, _date_fromordinal, 0, _date_today, 0, _date_ctime, 0, _date_strftime, 0, _date_format, 0, _date_timetuple, 0, _date_isocalendar, 0, _date_isoformat, 0, _date_isoweekday, 0, _date_toordinal, 0, _date_weekday, 0, _date_replace, 0, _date_reduce, 0, _date_add, 0, _date_subtract, 0, _date_repr, 0, _date_hash, 0, _date_str, 0, _date_richcompare, 0, _date_new, 0, _tzinfo_tzname, 0, _tzinfo_utcoffset, 0, _tzinfo_dst, 0, _tzinfo_fromutc, 0, _tzinfo_reduce, 0, _PyType_GenericNew, 0, _time_hour, 0, _time_minute, 0, _py_time_second, 0, _time_microsecond, 0, _time_tzinfo, 0, _time_isoformat, 0, _time_strftime, 0, _time_utcoffset, 0, _time_tzname, 0, _time_dst, 0, _time_replace, 0, _time_reduce, 0, _time_nonzero, 0, _time_dealloc, 0, _time_repr, 0, _time_hash, 0, _time_str, 0, _time_richcompare, 0, _time_alloc, 0, _time_new, 0, _datetime_hour, 0, _datetime_minute, 0, _datetime_second, 0, _datetime_microsecond, 0, _datetime_tzinfo, 0, _datetime_now, 0, _datetime_utcnow, 0, _datetime_fromtimestamp, 0, _datetime_utcfromtimestamp, 0, _datetime_strptime, 0, _datetime_combine, 0, _datetime_getdate, 0, _datetime_gettime, 0, _datetime_gettimetz, 0, _datetime_ctime, 0, _datetime_timetuple, 0, _datetime_utctimetuple, 0, _datetime_isoformat, 0, _datetime_utcoffset, 0, _datetime_tzname, 0, _datetime_dst, 0, _datetime_replace, 0, _datetime_astimezone, 0, _datetime_reduce, 0, _datetime_add, 0, _datetime_subtract, 0, _datetime_dealloc, 0, _datetime_repr, 0, _datetime_hash, 0, _datetime_str, 0, _datetime_richcompare, 0, _datetime_alloc, 0, _datetime_new, 0, _new_date_ex, 0, _new_datetime_ex, 0, _new_time_ex, 0, _new_delta_ex, 0, _time_time346, 0, _time_clock, 0, _time_sleep, 0, _time_gmtime, 0, _time_localtime, 0, _time_asctime, 0, _time_ctime, 0, _time_mktime, 0, _time_strftime347, 0, _time_strptime, 0, _time_tzset, 0 ]);
  function run(args) {
    __str = allocate([ 121, 32, 62, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 100, 97, 116, 101, 116, 105, 109, 101, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8388 = allocate([ 100, 105, 118, 109, 111, 100, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 48, 32, 60, 61, 32, 42, 114, 32, 38, 38, 32, 42, 114, 32, 60, 32, 121, 0 ], "i8", ALLOC_NORMAL);
    __days_in_month = allocate([ 0, 0, 0, 0, 31, 0, 0, 0, 28, 0, 0, 0, 31, 0, 0, 0, 30, 0, 0, 0, 31, 0, 0, 0, 30, 0, 0, 0, 31, 0, 0, 0, 31, 0, 0, 0, 30, 0, 0, 0, 31, 0, 0, 0, 30, 0, 0, 0, 31, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __days_before_month = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 59, 0, 0, 0, 90, 0, 0, 0, 120, 0, 0, 0, 151, 0, 0, 0, 181, 0, 0, 0, 212, 0, 0, 0, 243, 0, 0, 0, 273, 0, 0, 0, 304, 0, 0, 0, 334, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str3 = allocate([ 109, 111, 110, 116, 104, 32, 62, 61, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8436 = allocate([ 100, 97, 121, 115, 95, 105, 110, 95, 109, 111, 110, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 109, 111, 110, 116, 104, 32, 60, 61, 32, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8453 = allocate([ 100, 97, 121, 115, 95, 98, 101, 102, 111, 114, 101, 95, 109, 111, 110, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 121, 101, 97, 114, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8470 = allocate([ 100, 97, 121, 115, 95, 98, 101, 102, 111, 114, 101, 95, 121, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 121, 32, 61, 61, 32, 45, 49, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 111, 114, 100, 105, 110, 97, 108, 32, 62, 61, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8498 = allocate([ 111, 114, 100, 95, 116, 111, 95, 121, 109, 100, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 110, 32, 61, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 108, 101, 97, 112, 121, 101, 97, 114, 32, 61, 61, 32, 105, 115, 95, 108, 101, 97, 112, 40, 42, 121, 101, 97, 114, 41, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 48, 32, 60, 61, 32, 110, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 110, 32, 60, 32, 100, 97, 121, 115, 95, 105, 110, 95, 109, 111, 110, 116, 104, 40, 42, 121, 101, 97, 114, 44, 32, 42, 109, 111, 110, 116, 104, 41, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 100, 97, 121, 115, 61, 37, 100, 59, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 109, 97, 103, 110, 105, 116, 117, 100, 101, 32, 60, 61, 32, 37, 100, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 121, 101, 97, 114, 32, 105, 115, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 109, 111, 110, 116, 104, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 32, 49, 46, 46, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 100, 97, 121, 32, 105, 115, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 32, 102, 111, 114, 32, 109, 111, 110, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 104, 111, 117, 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 32, 48, 46, 46, 50, 51, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 109, 105, 110, 117, 116, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 32, 48, 46, 46, 53, 57, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 115, 101, 99, 111, 110, 100, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 32, 48, 46, 46, 53, 57, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 32, 48, 46, 46, 57, 57, 57, 57, 57, 57, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 102, 97, 99, 116, 111, 114, 32, 62, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8642 = allocate([ 110, 111, 114, 109, 97, 108, 105, 122, 101, 95, 112, 97, 105, 114, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 108, 111, 32, 33, 61, 32, 104, 105, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 33, 32, 40, 40, 40, 40, 110, 101, 119, 95, 104, 105, 41, 32, 94, 32, 40, 42, 104, 105, 41, 41, 32, 38, 32, 40, 40, 110, 101, 119, 95, 104, 105, 41, 32, 94, 32, 40, 110, 117, 109, 95, 104, 105, 41, 41, 41, 32, 60, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 48, 32, 60, 61, 32, 42, 108, 111, 32, 38, 38, 32, 42, 108, 111, 32, 60, 32, 102, 97, 99, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 48, 32, 60, 61, 32, 42, 115, 32, 38, 38, 32, 42, 115, 32, 60, 32, 50, 52, 42, 51, 54, 48, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8673 = allocate([ 110, 111, 114, 109, 97, 108, 105, 122, 101, 95, 100, 95, 115, 95, 117, 115, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 48, 32, 60, 61, 32, 42, 117, 115, 32, 38, 38, 32, 42, 117, 115, 32, 60, 32, 49, 48, 48, 48, 48, 48, 48, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 49, 32, 60, 61, 32, 42, 109, 32, 38, 38, 32, 42, 109, 32, 60, 61, 32, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8700 = allocate([ 110, 111, 114, 109, 97, 108, 105, 122, 101, 95, 121, 95, 109, 95, 100, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 42, 109, 32, 62, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 42, 100, 32, 62, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 100, 97, 116, 101, 32, 118, 97, 108, 117, 101, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 48, 32, 60, 61, 32, 115, 101, 99, 111, 110, 100, 115, 32, 38, 38, 32, 115, 101, 99, 111, 110, 100, 115, 32, 60, 32, 50, 52, 42, 51, 54, 48, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8924 = allocate([ 110, 101, 119, 95, 100, 101, 108, 116, 97, 95, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 48, 32, 60, 61, 32, 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 115, 32, 38, 38, 32, 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 115, 32, 60, 32, 49, 48, 48, 48, 48, 48, 48, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 116, 122, 105, 110, 102, 111, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 78, 111, 110, 101, 32, 111, 114, 32, 111, 102, 32, 97, 32, 116, 122, 105, 110, 102, 111, 32, 115, 117, 98, 99, 108, 97, 115, 115, 44, 32, 110, 111, 116, 32, 116, 121, 112, 101, 32, 39, 37, 115, 39, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 116, 122, 105, 110, 102, 111, 32, 38, 38, 32, 109, 101, 116, 104, 110, 97, 109, 101, 32, 38, 38, 32, 116, 122, 105, 110, 102, 111, 97, 114, 103, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8971 = allocate([ 99, 97, 108, 108, 95, 116, 122, 105, 110, 102, 111, 95, 109, 101, 116, 104, 111, 100, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 99, 104, 101, 99, 107, 95, 116, 122, 105, 110, 102, 111, 95, 115, 117, 98, 99, 108, 97, 115, 115, 40, 116, 122, 105, 110, 102, 111, 41, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 79, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 116, 122, 105, 110, 102, 111, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9023 = allocate([ 99, 97, 108, 108, 95, 117, 116, 99, 95, 116, 122, 105, 110, 102, 111, 95, 109, 101, 116, 104, 111, 100, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 116, 122, 105, 110, 102, 111, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 32, 61, 61, 32, 40, 38, 80, 121, 68, 97, 116, 101, 84, 105, 109, 101, 95, 84, 90, 73, 110, 102, 111, 84, 121, 112, 101, 41, 32, 124, 124, 32, 80, 121, 84, 121, 112, 101, 95, 73, 115, 83, 117, 98, 116, 121, 112, 101, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 116, 122, 105, 110, 102, 111, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 44, 32, 40, 38, 80, 121, 68, 97, 116, 101, 84, 105, 109, 101, 95, 84, 90, 73, 110, 102, 111, 84, 121, 112, 101, 41, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 116, 122, 105, 110, 102, 111, 97, 114, 103, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 116, 122, 105, 110, 102, 111, 46, 37, 115, 40, 41, 32, 109, 117, 115, 116, 32, 114, 101, 116, 117, 114, 110, 32, 97, 32, 119, 104, 111, 108, 101, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 109, 105, 110, 117, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 116, 122, 105, 110, 102, 111, 46, 37, 115, 40, 41, 32, 109, 117, 115, 116, 32, 114, 101, 116, 117, 114, 110, 32, 78, 111, 110, 101, 32, 111, 114, 32, 116, 105, 109, 101, 100, 101, 108, 116, 97, 44, 32, 110, 111, 116, 32, 39, 37, 115, 39, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 116, 122, 105, 110, 102, 111, 46, 37, 115, 40, 41, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 37, 100, 59, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 32, 45, 49, 52, 51, 57, 32, 46, 46, 32, 49, 52, 51, 57, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 117, 116, 99, 111, 102, 102, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 116, 122, 105, 110, 102, 111, 32, 38, 38, 32, 110, 97, 109, 101, 32, 38, 38, 32, 116, 122, 105, 110, 102, 111, 97, 114, 103, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9098 = allocate([ 111, 102, 102, 115, 101, 116, 95, 97, 115, 95, 116, 105, 109, 101, 100, 101, 108, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 100, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9139 = allocate([ 99, 97, 108, 108, 95, 116, 122, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 116, 122, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 116, 122, 105, 110, 102, 111, 46, 116, 122, 110, 97, 109, 101, 40, 41, 32, 109, 117, 115, 116, 32, 114, 101, 116, 117, 114, 110, 32, 78, 111, 110, 101, 32, 111, 114, 32, 97, 32, 115, 116, 114, 105, 110, 103, 44, 32, 110, 111, 116, 32, 39, 37, 115, 39, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9187 = allocate([ 99, 108, 97, 115, 115, 105, 102, 121, 95, 117, 116, 99, 111, 102, 102, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 114, 101, 112, 114, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 55, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9254 = allocate([ 97, 112, 112, 101, 110, 100, 95, 107, 101, 121, 119, 111, 114, 100, 95, 116, 122, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 116, 122, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 80, 121, 83, 116, 114, 105, 110, 103, 95, 65, 115, 83, 116, 114, 105, 110, 103, 40, 114, 101, 112, 114, 41, 91, 80, 121, 83, 116, 114, 105, 110, 103, 95, 83, 105, 122, 101, 40, 114, 101, 112, 114, 41, 45, 49, 93, 32, 61, 61, 32, 39, 41, 39, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 44, 32, 116, 122, 105, 110, 102, 111, 61, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 41, 0 ], "i8", ALLOC_NORMAL);
    _MonthNames_9303 = allocate(48, "i8*", ALLOC_NORMAL);
    __str52 = allocate([ 74, 97, 110, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 70, 101, 98, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 77, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 65, 112, 114, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 77, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 74, 117, 110, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 74, 117, 108, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 65, 117, 103, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 83, 101, 112, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 79, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 78, 111, 118, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 68, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    _DayNames_9302 = allocate(28, "i8*", ALLOC_NORMAL);
    __str64 = allocate([ 77, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 84, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 87, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 84, 104, 117, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 70, 114, 105, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 83, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 83, 117, 110, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 37, 115, 32, 37, 115, 32, 37, 50, 100, 32, 37, 48, 50, 100, 58, 37, 48, 50, 100, 58, 37, 48, 50, 100, 32, 37, 48, 52, 100, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 98, 117, 102, 108, 101, 110, 32, 62, 61, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9346 = allocate([ 102, 111, 114, 109, 97, 116, 95, 117, 116, 99, 111, 102, 102, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 37, 99, 37, 48, 50, 100, 37, 115, 37, 48, 50, 100, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 37, 48, 54, 100, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 111, 98, 106, 101, 99, 116, 32, 38, 38, 32, 102, 111, 114, 109, 97, 116, 32, 38, 38, 32, 116, 105, 109, 101, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9433 = allocate([ 119, 114, 97, 112, 95, 115, 116, 114, 102, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 40, 40, 40, 40, 112, 121, 121, 101, 97, 114, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 51, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 121, 101, 97, 114, 61, 37, 108, 100, 32, 105, 115, 32, 98, 101, 102, 111, 114, 101, 32, 49, 57, 48, 48, 59, 32, 116, 104, 101, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 115, 116, 114, 102, 116, 105, 109, 101, 40, 41, 32, 109, 101, 116, 104, 111, 100, 115, 32, 114, 101, 113, 117, 105, 114, 101, 32, 121, 101, 97, 114, 32, 62, 61, 32, 49, 57, 48, 48, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 115, 116, 114, 102, 116, 105, 109, 101, 32, 102, 111, 114, 109, 97, 116, 32, 101, 110, 100, 115, 32, 119, 105, 116, 104, 32, 114, 97, 119, 32, 37, 0 ], "i8", ALLOC_NORMAL);
    __str79 = allocate(1, "i8", ALLOC_NORMAL);
    __str80 = allocate([ 122, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 116, 101, 109, 112, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 55, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str82 = allocate([ 114, 101, 112, 108, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str83 = allocate([ 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str84 = allocate([ 37, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 37, 37, 0 ], "i8", ALLOC_NORMAL);
    __str86 = allocate([ 116, 122, 110, 97, 109, 101, 46, 114, 101, 112, 108, 97, 99, 101, 40, 41, 32, 100, 105, 100, 32, 110, 111, 116, 32, 114, 101, 116, 117, 114, 110, 32, 97, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str87 = allocate([ 90, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str88 = allocate([ 102, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str89 = allocate([ 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 102, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 55, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str90 = allocate([ 112, 116, 111, 97, 112, 112, 101, 110, 100, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str91 = allocate([ 117, 115, 101, 100, 110, 101, 119, 32, 60, 61, 32, 116, 111, 116, 97, 108, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    __str92 = allocate([ 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str93 = allocate([ 115, 116, 114, 102, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str94 = allocate([ 79, 79, 0 ], "i8", ALLOC_NORMAL);
    __str95 = allocate([ 37, 48, 52, 100, 45, 37, 48, 50, 100, 45, 37, 48, 50, 100, 0 ], "i8", ALLOC_NORMAL);
    __str96 = allocate([ 98, 117, 102, 102, 108, 101, 110, 32, 62, 61, 32, 120, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9670 = allocate([ 105, 115, 111, 102, 111, 114, 109, 97, 116, 95, 100, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str97 = allocate([ 37, 48, 50, 100, 58, 37, 48, 50, 100, 58, 37, 48, 50, 100, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9694 = allocate([ 105, 115, 111, 102, 111, 114, 109, 97, 116, 95, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str98 = allocate([ 46, 37, 48, 54, 100, 0 ], "i8", ALLOC_NORMAL);
    __str99 = allocate([ 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str100 = allocate([ 115, 116, 114, 117, 99, 116, 95, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str101 = allocate([ 40, 40, 105, 105, 105, 105, 105, 105, 105, 105, 105, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    __str102 = allocate([ 33, 32, 34, 111, 112, 32, 117, 110, 107, 110, 111, 119, 110, 34, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9783 = allocate([ 100, 105, 102, 102, 95, 116, 111, 95, 98, 111, 111, 108, 0 ], "i8", ALLOC_NORMAL);
    __str103 = allocate([ 99, 97, 110, 39, 116, 32, 99, 111, 109, 112, 97, 114, 101, 32, 37, 115, 32, 116, 111, 32, 37, 115, 0 ], "i8", ALLOC_NORMAL);
    _us_per_us = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    _us_per_ms = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    _us_per_second = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    _us_per_minute = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    _us_per_hour = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    _us_per_day = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    _us_per_week = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    _seconds_per_day = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    __str104 = allocate([ 48, 32, 60, 61, 32, 116, 101, 109, 112, 32, 38, 38, 32, 116, 101, 109, 112, 32, 60, 32, 49, 48, 48, 48, 48, 48, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9906 = allocate([ 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 115, 95, 116, 111, 95, 100, 101, 108, 116, 97, 95, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    __str105 = allocate([ 80, 121, 69, 114, 114, 95, 79, 99, 99, 117, 114, 114, 101, 100, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str106 = allocate([ 48, 32, 60, 61, 32, 116, 101, 109, 112, 32, 38, 38, 32, 116, 101, 109, 112, 32, 60, 32, 50, 52, 42, 51, 54, 48, 48, 0 ], "i8", ALLOC_NORMAL);
    __str107 = allocate([ 110, 111, 114, 109, 97, 108, 105, 122, 101, 100, 32, 100, 97, 121, 115, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 32, 116, 111, 32, 102, 105, 116, 32, 105, 110, 32, 97, 32, 67, 32, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str108 = allocate([ 40, 40, 40, 80, 121, 68, 97, 116, 101, 84, 105, 109, 101, 95, 68, 101, 108, 116, 97, 32, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 115, 41, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10117 = allocate([ 100, 101, 108, 116, 97, 95, 97, 98, 115, 0 ], "i8", ALLOC_NORMAL);
    __str109 = allocate([ 40, 40, 40, 80, 121, 68, 97, 116, 101, 84, 105, 109, 101, 95, 68, 101, 108, 116, 97, 32, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 115, 101, 99, 111, 110, 100, 115, 41, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str110 = allocate([ 110, 117, 109, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10304 = allocate([ 97, 99, 99, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str111 = allocate([ 40, 40, 40, 40, 102, 97, 99, 116, 111, 114, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 51, 41, 41, 41, 32, 33, 61, 32, 48, 41, 32, 124, 124, 32, 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 102, 97, 99, 116, 111, 114, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 52, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str112 = allocate([ 117, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 116, 121, 112, 101, 32, 102, 111, 114, 32, 116, 105, 109, 101, 100, 101, 108, 116, 97, 32, 37, 115, 32, 99, 111, 109, 112, 111, 110, 101, 110, 116, 58, 32, 37, 115, 0 ], "i8", ALLOC_NORMAL);
    __str113 = allocate([ 124, 79, 79, 79, 79, 79, 79, 79, 58, 95, 95, 110, 101, 119, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _keywords_10439 = allocate(32, "i8*", ALLOC_NORMAL);
    __str114 = allocate([ 100, 97, 121, 115, 0 ], "i8", ALLOC_NORMAL);
    __str115 = allocate([ 115, 101, 99, 111, 110, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str116 = allocate([ 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str117 = allocate([ 109, 105, 108, 108, 105, 115, 101, 99, 111, 110, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str118 = allocate([ 109, 105, 110, 117, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str119 = allocate([ 104, 111, 117, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    __str120 = allocate([ 119, 101, 101, 107, 115, 0 ], "i8", ALLOC_NORMAL);
    __str121 = allocate([ 37, 115, 40, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str122 = allocate([ 37, 115, 40, 37, 100, 44, 32, 37, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str123 = allocate([ 37, 115, 40, 37, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str124 = allocate([ 115, 0 ], "i8", ALLOC_NORMAL);
    __str125 = allocate([ 37, 100, 32, 100, 97, 121, 37, 115, 44, 32, 0 ], "i8", ALLOC_NORMAL);
    __str126 = allocate([ 37, 100, 58, 37, 48, 50, 100, 58, 37, 48, 50, 100, 0 ], "i8", ALLOC_NORMAL);
    __str127 = allocate([ 103, 111, 111, 102, 121, 32, 114, 101, 115, 117, 108, 116, 32, 102, 114, 111, 109, 32, 80, 121, 79, 83, 95, 115, 110, 112, 114, 105, 110, 116, 102, 0 ], "i8", ALLOC_NORMAL);
    __str128 = allocate([ 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str129 = allocate([ 79, 78, 0 ], "i8", ALLOC_NORMAL);
    __str130 = allocate([ 78, 117, 109, 98, 101, 114, 32, 111, 102, 32, 100, 97, 121, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str131 = allocate([ 78, 117, 109, 98, 101, 114, 32, 111, 102, 32, 115, 101, 99, 111, 110, 100, 115, 32, 40, 62, 61, 32, 48, 32, 97, 110, 100, 32, 108, 101, 115, 115, 32, 116, 104, 97, 110, 32, 49, 32, 100, 97, 121, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str132 = allocate([ 78, 117, 109, 98, 101, 114, 32, 111, 102, 32, 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 115, 32, 40, 62, 61, 32, 48, 32, 97, 110, 100, 32, 108, 101, 115, 115, 32, 116, 104, 97, 110, 32, 49, 32, 115, 101, 99, 111, 110, 100, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _delta_members = allocate([ 0, 0, 0, 0, 1, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 20, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str133 = allocate([ 116, 111, 116, 97, 108, 95, 115, 101, 99, 111, 110, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str134 = allocate([ 84, 111, 116, 97, 108, 32, 115, 101, 99, 111, 110, 100, 115, 32, 105, 110, 32, 116, 104, 101, 32, 100, 117, 114, 97, 116, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str135 = allocate([ 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str136 = allocate([ 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 40, 41, 32, 45, 62, 32, 40, 99, 108, 115, 44, 32, 115, 116, 97, 116, 101, 41, 0 ], "i8", ALLOC_NORMAL);
    _delta_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _delta_doc = allocate([ 68, 105, 102, 102, 101, 114, 101, 110, 99, 101, 32, 98, 101, 116, 119, 101, 101, 110, 32, 116, 119, 111, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 118, 97, 108, 117, 101, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _delta_as_number = allocate(156, [ "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo**, %struct.PyDateTime_TZInfo**)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str137 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 46, 116, 105, 109, 101, 100, 101, 108, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    _PyDateTime_DeltaType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i8*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i32 (%struct.PyDateTime_TZInfo*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str138 = allocate([ 121, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str139 = allocate([ 109, 111, 110, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str140 = allocate([ 100, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    _date_getset = allocate(80, [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _date_kws = allocate(16, "i8*", ALLOC_NORMAL);
    __str141 = allocate([ 116, 105, 109, 101, 115, 116, 97, 109, 112, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 32, 102, 111, 114, 32, 112, 108, 97, 116, 102, 111, 114, 109, 32, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 32, 102, 117, 110, 99, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str142 = allocate([ 102, 114, 111, 109, 116, 105, 109, 101, 115, 116, 97, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str143 = allocate([ 100, 58, 102, 114, 111, 109, 116, 105, 109, 101, 115, 116, 97, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str144 = allocate([ 105, 58, 102, 114, 111, 109, 111, 114, 100, 105, 110, 97, 108, 0 ], "i8", ALLOC_NORMAL);
    __str145 = allocate([ 111, 114, 100, 105, 110, 97, 108, 32, 109, 117, 115, 116, 32, 98, 101, 32, 62, 61, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str146 = allocate([ 105, 115, 111, 102, 111, 114, 109, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str147 = allocate([ 115, 35, 58, 115, 116, 114, 102, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _keywords_11112 = allocate(8, "i8*", ALLOC_NORMAL);
    __str148 = allocate([ 102, 111, 114, 109, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str149 = allocate([ 116, 105, 109, 101, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str150 = allocate([ 79, 58, 95, 95, 102, 111, 114, 109, 97, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str151 = allocate([ 95, 95, 102, 111, 114, 109, 97, 116, 95, 95, 32, 101, 120, 112, 101, 99, 116, 115, 32, 115, 116, 114, 32, 111, 114, 32, 117, 110, 105, 99, 111, 100, 101, 44, 32, 110, 111, 116, 32, 37, 46, 50, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    __str152 = allocate([ 124, 105, 105, 105, 58, 114, 101, 112, 108, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str153 = allocate([ 40, 78, 41, 0 ], "i8", ALLOC_NORMAL);
    __str154 = allocate([ 40, 79, 78, 41, 0 ], "i8", ALLOC_NORMAL);
    __str155 = allocate([ 116, 105, 109, 101, 115, 116, 97, 109, 112, 32, 45, 62, 32, 108, 111, 99, 97, 108, 32, 100, 97, 116, 101, 32, 102, 114, 111, 109, 32, 97, 32, 80, 79, 83, 73, 88, 32, 116, 105, 109, 101, 115, 116, 97, 109, 112, 32, 40, 108, 105, 107, 101, 32, 116, 105, 109, 101, 46, 116, 105, 109, 101, 40, 41, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str156 = allocate([ 102, 114, 111, 109, 111, 114, 100, 105, 110, 97, 108, 0 ], "i8", ALLOC_NORMAL);
    __str157 = allocate([ 105, 110, 116, 32, 45, 62, 32, 100, 97, 116, 101, 32, 99, 111, 114, 114, 101, 115, 112, 111, 110, 100, 105, 110, 103, 32, 116, 111, 32, 97, 32, 112, 114, 111, 108, 101, 112, 116, 105, 99, 32, 71, 114, 101, 103, 111, 114, 105, 97, 110, 32, 111, 114, 100, 105, 110, 97, 108, 46, 0 ], "i8", ALLOC_NORMAL);
    __str158 = allocate([ 116, 111, 100, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str159 = allocate([ 67, 117, 114, 114, 101, 110, 116, 32, 100, 97, 116, 101, 32, 111, 114, 32, 100, 97, 116, 101, 116, 105, 109, 101, 58, 32, 32, 115, 97, 109, 101, 32, 97, 115, 32, 115, 101, 108, 102, 46, 95, 95, 99, 108, 97, 115, 115, 95, 95, 46, 102, 114, 111, 109, 116, 105, 109, 101, 115, 116, 97, 109, 112, 40, 116, 105, 109, 101, 46, 116, 105, 109, 101, 40, 41, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str160 = allocate([ 99, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str161 = allocate([ 82, 101, 116, 117, 114, 110, 32, 99, 116, 105, 109, 101, 40, 41, 32, 115, 116, 121, 108, 101, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str162 = allocate([ 102, 111, 114, 109, 97, 116, 32, 45, 62, 32, 115, 116, 114, 102, 116, 105, 109, 101, 40, 41, 32, 115, 116, 121, 108, 101, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str163 = allocate([ 95, 95, 102, 111, 114, 109, 97, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str164 = allocate([ 70, 111, 114, 109, 97, 116, 115, 32, 115, 101, 108, 102, 32, 119, 105, 116, 104, 32, 115, 116, 114, 102, 116, 105, 109, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str165 = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 44, 32, 99, 111, 109, 112, 97, 116, 105, 98, 108, 101, 32, 119, 105, 116, 104, 32, 116, 105, 109, 101, 46, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str166 = allocate([ 105, 115, 111, 99, 97, 108, 101, 110, 100, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str167 = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 51, 45, 116, 117, 112, 108, 101, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 73, 83, 79, 32, 121, 101, 97, 114, 44, 32, 119, 101, 101, 107, 32, 110, 117, 109, 98, 101, 114, 44, 32, 97, 110, 100, 32, 119, 101, 101, 107, 100, 97, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str168 = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 116, 114, 105, 110, 103, 32, 105, 110, 32, 73, 83, 79, 32, 56, 54, 48, 49, 32, 102, 111, 114, 109, 97, 116, 44, 32, 89, 89, 89, 89, 45, 77, 77, 45, 68, 68, 46, 0 ], "i8", ALLOC_NORMAL);
    __str169 = allocate([ 105, 115, 111, 119, 101, 101, 107, 100, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str170 = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 100, 97, 121, 32, 111, 102, 32, 116, 104, 101, 32, 119, 101, 101, 107, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 100, 97, 116, 101, 46, 10, 77, 111, 110, 100, 97, 121, 32, 61, 61, 32, 49, 32, 46, 46, 46, 32, 83, 117, 110, 100, 97, 121, 32, 61, 61, 32, 55, 0 ], "i8", ALLOC_NORMAL);
    __str171 = allocate([ 116, 111, 111, 114, 100, 105, 110, 97, 108, 0 ], "i8", ALLOC_NORMAL);
    __str172 = allocate([ 82, 101, 116, 117, 114, 110, 32, 112, 114, 111, 108, 101, 112, 116, 105, 99, 32, 71, 114, 101, 103, 111, 114, 105, 97, 110, 32, 111, 114, 100, 105, 110, 97, 108, 46, 32, 32, 74, 97, 110, 117, 97, 114, 121, 32, 49, 32, 111, 102, 32, 121, 101, 97, 114, 32, 49, 32, 105, 115, 32, 100, 97, 121, 32, 49, 46, 0 ], "i8", ALLOC_NORMAL);
    __str173 = allocate([ 119, 101, 101, 107, 100, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str174 = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 100, 97, 121, 32, 111, 102, 32, 116, 104, 101, 32, 119, 101, 101, 107, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 100, 97, 116, 101, 46, 10, 77, 111, 110, 100, 97, 121, 32, 61, 61, 32, 48, 32, 46, 46, 46, 32, 83, 117, 110, 100, 97, 121, 32, 61, 61, 32, 54, 0 ], "i8", ALLOC_NORMAL);
    __str175 = allocate([ 82, 101, 116, 117, 114, 110, 32, 100, 97, 116, 101, 32, 119, 105, 116, 104, 32, 110, 101, 119, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 102, 105, 101, 108, 100, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _date_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _date_doc = allocate([ 100, 97, 116, 101, 40, 121, 101, 97, 114, 44, 32, 109, 111, 110, 116, 104, 44, 32, 100, 97, 121, 41, 32, 45, 45, 62, 32, 100, 97, 116, 101, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _date_as_number = allocate(156, [ "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str176 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 46, 100, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _PyDateTime_DateType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i8*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i32 (%struct.PyDateTime_TZInfo*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str177 = allocate([ 97, 32, 116, 122, 105, 110, 102, 111, 32, 115, 117, 98, 99, 108, 97, 115, 115, 32, 109, 117, 115, 116, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 32, 37, 115, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str178 = allocate([ 102, 114, 111, 109, 117, 116, 99, 58, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 100, 97, 116, 101, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str179 = allocate([ 102, 114, 111, 109, 117, 116, 99, 58, 32, 100, 116, 46, 116, 122, 105, 110, 102, 111, 32, 105, 115, 32, 110, 111, 116, 32, 115, 101, 108, 102, 0 ], "i8", ALLOC_NORMAL);
    __str180 = allocate([ 102, 114, 111, 109, 117, 116, 99, 58, 32, 110, 111, 110, 45, 78, 111, 110, 101, 32, 117, 116, 99, 111, 102, 102, 115, 101, 116, 40, 41, 32, 114, 101, 115, 117, 108, 116, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str181 = allocate([ 102, 114, 111, 109, 117, 116, 99, 58, 32, 110, 111, 110, 45, 78, 111, 110, 101, 32, 100, 115, 116, 40, 41, 32, 114, 101, 115, 117, 108, 116, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str182 = allocate([ 102, 114, 111, 109, 117, 116, 99, 58, 32, 116, 122, 46, 100, 115, 116, 40, 41, 32, 103, 97, 118, 101, 105, 110, 99, 111, 110, 115, 105, 115, 116, 101, 110, 116, 32, 114, 101, 115, 117, 108, 116, 115, 59, 32, 99, 97, 110, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str183 = allocate([ 95, 95, 103, 101, 116, 105, 110, 105, 116, 97, 114, 103, 115, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str184 = allocate([ 95, 95, 103, 101, 116, 115, 116, 97, 116, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str185 = allocate([ 40, 79, 78, 78, 41, 0 ], "i8", ALLOC_NORMAL);
    __str186 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 105, 109, 101, 32, 122, 111, 110, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str187 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 32, 45, 62, 32, 109, 105, 110, 117, 116, 101, 115, 32, 101, 97, 115, 116, 32, 111, 102, 32, 85, 84, 67, 32, 40, 110, 101, 103, 97, 116, 105, 118, 101, 32, 102, 111, 114, 32, 119, 101, 115, 116, 32, 111, 102, 32, 85, 84, 67, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str188 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 32, 45, 62, 32, 68, 83, 84, 32, 111, 102, 102, 115, 101, 116, 32, 105, 110, 32, 109, 105, 110, 117, 116, 101, 115, 32, 101, 97, 115, 116, 32, 111, 102, 32, 85, 84, 67, 46, 0 ], "i8", ALLOC_NORMAL);
    __str189 = allocate([ 102, 114, 111, 109, 117, 116, 99, 0 ], "i8", ALLOC_NORMAL);
    __str190 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 32, 105, 110, 32, 85, 84, 67, 32, 45, 62, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 105, 110, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str191 = allocate([ 45, 62, 32, 40, 99, 108, 115, 44, 32, 115, 116, 97, 116, 101, 41, 0 ], "i8", ALLOC_NORMAL);
    _tzinfo_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _tzinfo_doc = allocate([ 65, 98, 115, 116, 114, 97, 99, 116, 32, 98, 97, 115, 101, 32, 99, 108, 97, 115, 115, 32, 102, 111, 114, 32, 116, 105, 109, 101, 32, 122, 111, 110, 101, 32, 105, 110, 102, 111, 32, 111, 98, 106, 101, 99, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str192 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 46, 116, 122, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    _PyDateTime_TZInfoType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i8*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i32 (%struct.PyDateTime_TZInfo*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str193 = allocate([ 104, 111, 117, 114, 0 ], "i8", ALLOC_NORMAL);
    __str194 = allocate([ 109, 105, 110, 117, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str195 = allocate([ 115, 101, 99, 111, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str196 = allocate([ 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _time_getset = allocate(120, [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _time_kws = allocate(24, "i8*", ALLOC_NORMAL);
    __str197 = allocate([ 98, 97, 100, 32, 116, 122, 105, 110, 102, 111, 32, 115, 116, 97, 116, 101, 32, 97, 114, 103, 0 ], "i8", ALLOC_NORMAL);
    __str198 = allocate([ 124, 105, 105, 105, 105, 79, 0 ], "i8", ALLOC_NORMAL);
    __str199 = allocate([ 37, 115, 40, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str200 = allocate([ 58, 0 ], "i8", ALLOC_NORMAL);
    _keywords_11990 = allocate(8, "i8*", ALLOC_NORMAL);
    __str201 = allocate([ 105, 105, 105, 105, 105, 105, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str202 = allocate([ 80, 121, 84, 117, 112, 108, 101, 95, 83, 105, 122, 101, 40, 116, 117, 112, 108, 101, 41, 32, 61, 61, 32, 57, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___11991 = allocate([ 116, 105, 109, 101, 95, 115, 116, 114, 102, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str203 = allocate([ 110, 49, 32, 33, 61, 32, 79, 70, 70, 83, 69, 84, 95, 85, 78, 75, 78, 79, 87, 78, 32, 38, 38, 32, 110, 50, 32, 33, 61, 32, 79, 70, 70, 83, 69, 84, 95, 85, 78, 75, 78, 79, 87, 78, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___12032 = allocate([ 116, 105, 109, 101, 95, 114, 105, 99, 104, 99, 111, 109, 112, 97, 114, 101, 0 ], "i8", ALLOC_NORMAL);
    __str204 = allocate([ 111, 102, 102, 115, 101, 116, 49, 32, 33, 61, 32, 111, 102, 102, 115, 101, 116, 50, 0 ], "i8", ALLOC_NORMAL);
    __str205 = allocate([ 110, 49, 32, 33, 61, 32, 110, 50, 0 ], "i8", ALLOC_NORMAL);
    __str206 = allocate([ 99, 97, 110, 39, 116, 32, 99, 111, 109, 112, 97, 114, 101, 32, 111, 102, 102, 115, 101, 116, 45, 110, 97, 105, 118, 101, 32, 97, 110, 100, 32, 111, 102, 102, 115, 101, 116, 45, 97, 119, 97, 114, 101, 32, 116, 105, 109, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str207 = allocate([ 110, 32, 33, 61, 32, 79, 70, 70, 83, 69, 84, 95, 85, 78, 75, 78, 79, 87, 78, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___12150 = allocate([ 116, 105, 109, 101, 95, 104, 97, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str208 = allocate([ 110, 32, 61, 61, 32, 79, 70, 70, 83, 69, 84, 95, 65, 87, 65, 82, 69, 0 ], "i8", ALLOC_NORMAL);
    __str209 = allocate([ 40, 40, 40, 95, 80, 121, 68, 97, 116, 101, 84, 105, 109, 101, 95, 66, 97, 115, 101, 84, 90, 73, 110, 102, 111, 32, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 104, 97, 115, 116, 122, 105, 110, 102, 111, 41, 0 ], "i8", ALLOC_NORMAL);
    __str210 = allocate([ 105, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str211 = allocate([ 124, 105, 105, 105, 105, 79, 58, 114, 101, 112, 108, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str212 = allocate([ 105, 105, 105, 105, 79, 0 ], "i8", ALLOC_NORMAL);
    __str213 = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 116, 114, 105, 110, 103, 32, 105, 110, 32, 73, 83, 79, 32, 56, 54, 48, 49, 32, 102, 111, 114, 109, 97, 116, 44, 32, 72, 72, 58, 77, 77, 58, 83, 83, 91, 46, 109, 109, 109, 109, 109, 109, 93, 91, 43, 72, 72, 58, 77, 77, 93, 46, 0 ], "i8", ALLOC_NORMAL);
    __str214 = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 101, 108, 102, 46, 116, 122, 105, 110, 102, 111, 46, 117, 116, 99, 111, 102, 102, 115, 101, 116, 40, 115, 101, 108, 102, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str215 = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 101, 108, 102, 46, 116, 122, 105, 110, 102, 111, 46, 116, 122, 110, 97, 109, 101, 40, 115, 101, 108, 102, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str216 = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 101, 108, 102, 46, 116, 122, 105, 110, 102, 111, 46, 100, 115, 116, 40, 115, 101, 108, 102, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str217 = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 105, 109, 101, 32, 119, 105, 116, 104, 32, 110, 101, 119, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 102, 105, 101, 108, 100, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _time_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _time_doc = allocate([ 116, 105, 109, 101, 40, 91, 104, 111, 117, 114, 91, 44, 32, 109, 105, 110, 117, 116, 101, 91, 44, 32, 115, 101, 99, 111, 110, 100, 91, 44, 32, 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 91, 44, 32, 116, 122, 105, 110, 102, 111, 93, 93, 93, 93, 93, 41, 32, 45, 45, 62, 32, 97, 32, 116, 105, 109, 101, 32, 111, 98, 106, 101, 99, 116, 10, 10, 65, 108, 108, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 97, 114, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 46, 32, 116, 122, 105, 110, 102, 111, 32, 109, 97, 121, 32, 98, 101, 32, 78, 111, 110, 101, 44, 32, 111, 114, 32, 97, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 111, 102, 10, 97, 32, 116, 122, 105, 110, 102, 111, 32, 115, 117, 98, 99, 108, 97, 115, 115, 46, 32, 84, 104, 101, 32, 114, 101, 109, 97, 105, 110, 105, 110, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 109, 97, 121, 32, 98, 101, 32, 105, 110, 116, 115, 32, 111, 114, 32, 108, 111, 110, 103, 115, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _time_as_number = allocate(156, [ "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str218 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 46, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _PyDateTime_TimeType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i8*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i32 (%struct.PyDateTime_TZInfo*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _datetime_getset = allocate(120, [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _datetime_kws = allocate(36, "i8*", ALLOC_NORMAL);
    __str219 = allocate([ 105, 105, 105, 124, 105, 105, 105, 105, 79, 0 ], "i8", ALLOC_NORMAL);
    __str220 = allocate([ 105, 105, 105, 105, 105, 105, 105, 79, 0 ], "i8", ALLOC_NORMAL);
    __str221 = allocate([ 116, 105, 109, 101, 115, 116, 97, 109, 112, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 32, 102, 111, 114, 32, 112, 108, 97, 116, 102, 111, 114, 109, 32, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 47, 103, 109, 116, 105, 109, 101, 40, 41, 32, 102, 117, 110, 99, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str222 = allocate([ 124, 79, 58, 110, 111, 119, 0 ], "i8", ALLOC_NORMAL);
    _keywords_12602 = allocate(8, "i8*", ALLOC_NORMAL);
    __str223 = allocate([ 116, 122, 0 ], "i8", ALLOC_NORMAL);
    __str224 = allocate([ 100, 124, 79, 58, 102, 114, 111, 109, 116, 105, 109, 101, 115, 116, 97, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    _keywords_12649 = allocate(12, "i8*", ALLOC_NORMAL);
    __str225 = allocate([ 116, 105, 109, 101, 115, 116, 97, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str226 = allocate([ 100, 58, 117, 116, 99, 102, 114, 111, 109, 116, 105, 109, 101, 115, 116, 97, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str227 = allocate([ 115, 115, 58, 115, 116, 114, 112, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _module_12699 = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    __str228 = allocate([ 95, 115, 116, 114, 112, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str229 = allocate([ 105, 105, 105, 105, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str230 = allocate([ 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 118, 97, 108, 117, 101, 32, 102, 114, 111, 109, 32, 95, 115, 116, 114, 112, 116, 105, 109, 101, 46, 95, 115, 116, 114, 112, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str231 = allocate([ 79, 33, 79, 33, 58, 99, 111, 109, 98, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    _keywords_12819 = allocate(12, "i8*", ALLOC_NORMAL);
    __str232 = allocate([ 100, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str233 = allocate([ 102, 97, 99, 116, 111, 114, 32, 61, 61, 32, 49, 32, 124, 124, 32, 102, 97, 99, 116, 111, 114, 32, 61, 61, 32, 45, 49, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___12960 = allocate([ 97, 100, 100, 95, 100, 97, 116, 101, 116, 105, 109, 101, 95, 116, 105, 109, 101, 100, 101, 108, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___13068 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 95, 115, 117, 98, 116, 114, 97, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str234 = allocate([ 99, 97, 110, 39, 116, 32, 115, 117, 98, 116, 114, 97, 99, 116, 32, 111, 102, 102, 115, 101, 116, 45, 110, 97, 105, 118, 101, 32, 97, 110, 100, 32, 111, 102, 102, 115, 101, 116, 45, 97, 119, 97, 114, 101, 32, 100, 97, 116, 101, 116, 105, 109, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str235 = allocate([ 37, 115, 40, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str236 = allocate([ 37, 115, 40, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str237 = allocate([ 37, 115, 40, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str238 = allocate([ 40, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str239 = allocate([ 32, 0 ], "i8", ALLOC_NORMAL);
    __str240 = allocate([ 124, 99, 58, 105, 115, 111, 102, 111, 114, 109, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    _keywords_13311 = allocate(8, "i8*", ALLOC_NORMAL);
    __str241 = allocate([ 115, 101, 112, 0 ], "i8", ALLOC_NORMAL);
    __str242 = allocate([ 99, 112, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___13315 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 95, 105, 115, 111, 102, 111, 114, 109, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___13383 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 95, 114, 105, 99, 104, 99, 111, 109, 112, 97, 114, 101, 0 ], "i8", ALLOC_NORMAL);
    __str243 = allocate([ 99, 97, 110, 39, 116, 32, 99, 111, 109, 112, 97, 114, 101, 32, 111, 102, 102, 115, 101, 116, 45, 110, 97, 105, 118, 101, 32, 97, 110, 100, 32, 111, 102, 102, 115, 101, 116, 45, 97, 119, 97, 114, 101, 32, 100, 97, 116, 101, 116, 105, 109, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___13479 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 95, 104, 97, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str244 = allocate([ 124, 105, 105, 105, 105, 105, 105, 105, 79, 58, 114, 101, 112, 108, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str245 = allocate([ 79, 33, 58, 97, 115, 116, 105, 109, 101, 122, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    _keywords_13646 = allocate(8, "i8*", ALLOC_NORMAL);
    __str246 = allocate([ 97, 115, 116, 105, 109, 101, 122, 111, 110, 101, 40, 41, 32, 99, 97, 110, 110, 111, 116, 32, 98, 101, 32, 97, 112, 112, 108, 105, 101, 100, 32, 116, 111, 32, 97, 32, 110, 97, 105, 118, 101, 32, 100, 97, 116, 101, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str247 = allocate([ 110, 111, 119, 0 ], "i8", ALLOC_NORMAL);
    __str248 = allocate([ 91, 116, 122, 93, 32, 45, 62, 32, 110, 101, 119, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 119, 105, 116, 104, 32, 116, 122, 39, 115, 32, 108, 111, 99, 97, 108, 32, 100, 97, 121, 32, 97, 110, 100, 32, 116, 105, 109, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str249 = allocate([ 117, 116, 99, 110, 111, 119, 0 ], "i8", ALLOC_NORMAL);
    __str250 = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 105, 110, 103, 32, 85, 84, 67, 32, 100, 97, 121, 32, 97, 110, 100, 32, 116, 105, 109, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str251 = allocate([ 116, 105, 109, 101, 115, 116, 97, 109, 112, 91, 44, 32, 116, 122, 93, 32, 45, 62, 32, 116, 122, 39, 115, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 32, 102, 114, 111, 109, 32, 80, 79, 83, 73, 88, 32, 116, 105, 109, 101, 115, 116, 97, 109, 112, 46, 0 ], "i8", ALLOC_NORMAL);
    __str252 = allocate([ 117, 116, 99, 102, 114, 111, 109, 116, 105, 109, 101, 115, 116, 97, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str253 = allocate([ 116, 105, 109, 101, 115, 116, 97, 109, 112, 32, 45, 62, 32, 85, 84, 67, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 102, 114, 111, 109, 32, 97, 32, 80, 79, 83, 73, 88, 32, 116, 105, 109, 101, 115, 116, 97, 109, 112, 32, 40, 108, 105, 107, 101, 32, 116, 105, 109, 101, 46, 116, 105, 109, 101, 40, 41, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str254 = allocate([ 115, 116, 114, 112, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str255 = allocate([ 115, 116, 114, 105, 110, 103, 44, 32, 102, 111, 114, 109, 97, 116, 32, 45, 62, 32, 110, 101, 119, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 112, 97, 114, 115, 101, 100, 32, 102, 114, 111, 109, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 40, 108, 105, 107, 101, 32, 116, 105, 109, 101, 46, 115, 116, 114, 112, 116, 105, 109, 101, 40, 41, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str256 = allocate([ 99, 111, 109, 98, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str257 = allocate([ 100, 97, 116, 101, 44, 32, 116, 105, 109, 101, 32, 45, 62, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 119, 105, 116, 104, 32, 115, 97, 109, 101, 32, 100, 97, 116, 101, 32, 97, 110, 100, 32, 116, 105, 109, 101, 32, 102, 105, 101, 108, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str258 = allocate([ 82, 101, 116, 117, 114, 110, 32, 100, 97, 116, 101, 32, 111, 98, 106, 101, 99, 116, 32, 119, 105, 116, 104, 32, 115, 97, 109, 101, 32, 121, 101, 97, 114, 44, 32, 109, 111, 110, 116, 104, 32, 97, 110, 100, 32, 100, 97, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str259 = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 105, 109, 101, 32, 111, 98, 106, 101, 99, 116, 32, 119, 105, 116, 104, 32, 115, 97, 109, 101, 32, 116, 105, 109, 101, 32, 98, 117, 116, 32, 119, 105, 116, 104, 32, 116, 122, 105, 110, 102, 111, 61, 78, 111, 110, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str260 = allocate([ 116, 105, 109, 101, 116, 122, 0 ], "i8", ALLOC_NORMAL);
    __str261 = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 105, 109, 101, 32, 111, 98, 106, 101, 99, 116, 32, 119, 105, 116, 104, 32, 115, 97, 109, 101, 32, 116, 105, 109, 101, 32, 97, 110, 100, 32, 116, 122, 105, 110, 102, 111, 46, 0 ], "i8", ALLOC_NORMAL);
    __str262 = allocate([ 117, 116, 99, 116, 105, 109, 101, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str263 = allocate([ 82, 101, 116, 117, 114, 110, 32, 85, 84, 67, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 44, 32, 99, 111, 109, 112, 97, 116, 105, 98, 108, 101, 32, 119, 105, 116, 104, 32, 116, 105, 109, 101, 46, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str264 = allocate([ 91, 115, 101, 112, 93, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 32, 105, 110, 32, 73, 83, 79, 32, 56, 54, 48, 49, 32, 102, 111, 114, 109, 97, 116, 44, 32, 89, 89, 89, 89, 45, 77, 77, 45, 68, 68, 84, 72, 72, 58, 77, 77, 58, 83, 83, 91, 46, 109, 109, 109, 109, 109, 109, 93, 91, 43, 72, 72, 58, 77, 77, 93, 46, 10, 10, 115, 101, 112, 32, 105, 115, 32, 117, 115, 101, 100, 32, 116, 111, 32, 115, 101, 112, 97, 114, 97, 116, 101, 32, 116, 104, 101, 32, 121, 101, 97, 114, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 116, 105, 109, 101, 44, 32, 97, 110, 100, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 39, 84, 39, 46, 0 ], "i8", ALLOC_NORMAL);
    __str265 = allocate([ 82, 101, 116, 117, 114, 110, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 119, 105, 116, 104, 32, 110, 101, 119, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 102, 105, 101, 108, 100, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str266 = allocate([ 97, 115, 116, 105, 109, 101, 122, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str267 = allocate([ 116, 122, 32, 45, 62, 32, 99, 111, 110, 118, 101, 114, 116, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 32, 105, 110, 32, 110, 101, 119, 32, 116, 105, 109, 101, 122, 111, 110, 101, 32, 116, 122, 10, 0 ], "i8", ALLOC_NORMAL);
    _datetime_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _datetime_doc = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 40, 121, 101, 97, 114, 44, 32, 109, 111, 110, 116, 104, 44, 32, 100, 97, 121, 91, 44, 32, 104, 111, 117, 114, 91, 44, 32, 109, 105, 110, 117, 116, 101, 91, 44, 32, 115, 101, 99, 111, 110, 100, 91, 44, 32, 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 91, 44, 116, 122, 105, 110, 102, 111, 93, 93, 93, 93, 93, 41, 10, 10, 84, 104, 101, 32, 121, 101, 97, 114, 44, 32, 109, 111, 110, 116, 104, 32, 97, 110, 100, 32, 100, 97, 121, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 97, 114, 101, 32, 114, 101, 113, 117, 105, 114, 101, 100, 46, 32, 116, 122, 105, 110, 102, 111, 32, 109, 97, 121, 32, 98, 101, 32, 78, 111, 110, 101, 44, 32, 111, 114, 32, 97, 110, 10, 105, 110, 115, 116, 97, 110, 99, 101, 32, 111, 102, 32, 97, 32, 116, 122, 105, 110, 102, 111, 32, 115, 117, 98, 99, 108, 97, 115, 115, 46, 32, 84, 104, 101, 32, 114, 101, 109, 97, 105, 110, 105, 110, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 109, 97, 121, 32, 98, 101, 32, 105, 110, 116, 115, 32, 111, 114, 32, 108, 111, 110, 103, 115, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _datetime_as_number = allocate(156, [ "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str268 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 46, 100, 97, 116, 101, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _PyDateTime_DateTimeType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i8*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i32 (%struct.PyDateTime_TZInfo*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_methods = allocate(16, [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _CAPI = allocate(44, [ "%struct._typeobject*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (i32, i32, i32, %struct._typeobject*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (i32, i32, i32, i32, i32, i32, i32, %struct.PyDateTime_TZInfo*, %struct._typeobject*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (i32, i32, i32, i32, %struct.PyDateTime_TZInfo*, %struct._typeobject*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (i32, i32, i32, i32, %struct._typeobject*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0 ], ALLOC_NORMAL);
    __str269 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str270 = allocate([ 70, 97, 115, 116, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 116, 104, 101, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 116, 121, 112, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str271 = allocate([ 114, 101, 115, 111, 108, 117, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str272 = allocate([ 109, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str273 = allocate([ 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str274 = allocate([ 77, 73, 78, 89, 69, 65, 82, 0 ], "i8", ALLOC_NORMAL);
    __str275 = allocate([ 77, 65, 88, 89, 69, 65, 82, 0 ], "i8", ALLOC_NORMAL);
    __str276 = allocate([ 116, 105, 109, 101, 100, 101, 108, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str277 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 46, 100, 97, 116, 101, 116, 105, 109, 101, 95, 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str278 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 95, 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str279 = allocate([ 49, 52, 54, 49, 32, 61, 61, 32, 100, 97, 121, 115, 95, 98, 101, 102, 111, 114, 101, 95, 121, 101, 97, 114, 40, 52, 43, 49, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___13976 = allocate([ 105, 110, 105, 116, 100, 97, 116, 101, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str280 = allocate([ 49, 52, 54, 48, 57, 55, 32, 61, 61, 32, 100, 97, 121, 115, 95, 98, 101, 102, 111, 114, 101, 95, 121, 101, 97, 114, 40, 52, 48, 48, 43, 49, 41, 0 ], "i8", ALLOC_NORMAL);
    __str281 = allocate([ 51, 54, 53, 50, 52, 32, 61, 61, 32, 100, 97, 121, 115, 95, 98, 101, 102, 111, 114, 101, 95, 121, 101, 97, 114, 40, 49, 48, 48, 43, 49, 41, 0 ], "i8", ALLOC_NORMAL);
    __str282 = allocate([ 116, 105, 109, 101, 115, 116, 97, 109, 112, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 32, 102, 111, 114, 32, 112, 108, 97, 116, 102, 111, 114, 109, 32, 116, 105, 109, 101, 95, 116, 0 ], "i8", ALLOC_NORMAL);
    _time_doc283 = allocate([ 116, 105, 109, 101, 40, 41, 32, 45, 62, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 110, 117, 109, 98, 101, 114, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 46, 10, 70, 114, 97, 99, 116, 105, 111, 110, 115, 32, 111, 102, 32, 97, 32, 115, 101, 99, 111, 110, 100, 32, 109, 97, 121, 32, 98, 101, 32, 112, 114, 101, 115, 101, 110, 116, 32, 105, 102, 32, 116, 104, 101, 32, 115, 121, 115, 116, 101, 109, 32, 99, 108, 111, 99, 107, 32, 112, 114, 111, 118, 105, 100, 101, 115, 32, 116, 104, 101, 109, 46, 0 ], "i8", ALLOC_NORMAL);
    _clock_doc = allocate([ 99, 108, 111, 99, 107, 40, 41, 32, 45, 62, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 110, 117, 109, 98, 101, 114, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 67, 80, 85, 32, 116, 105, 109, 101, 32, 111, 114, 32, 114, 101, 97, 108, 32, 116, 105, 109, 101, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 115, 116, 97, 114, 116, 32, 111, 102, 32, 116, 104, 101, 32, 112, 114, 111, 99, 101, 115, 115, 32, 111, 114, 32, 115, 105, 110, 99, 101, 10, 116, 104, 101, 32, 102, 105, 114, 115, 116, 32, 99, 97, 108, 108, 32, 116, 111, 32, 99, 108, 111, 99, 107, 40, 41, 46, 32, 32, 84, 104, 105, 115, 32, 104, 97, 115, 32, 97, 115, 32, 109, 117, 99, 104, 32, 112, 114, 101, 99, 105, 115, 105, 111, 110, 32, 97, 115, 32, 116, 104, 101, 32, 115, 121, 115, 116, 101, 109, 10, 114, 101, 99, 111, 114, 100, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str1284 = allocate([ 100, 58, 115, 108, 101, 101, 112, 0 ], "i8", ALLOC_NORMAL);
    _sleep_doc = allocate([ 115, 108, 101, 101, 112, 40, 115, 101, 99, 111, 110, 100, 115, 41, 10, 10, 68, 101, 108, 97, 121, 32, 101, 120, 101, 99, 117, 116, 105, 111, 110, 32, 102, 111, 114, 32, 97, 32, 103, 105, 118, 101, 110, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 115, 101, 99, 111, 110, 100, 115, 46, 32, 32, 84, 104, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 97, 121, 32, 98, 101, 10, 97, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 110, 117, 109, 98, 101, 114, 32, 102, 111, 114, 32, 115, 117, 98, 115, 101, 99, 111, 110, 100, 32, 112, 114, 101, 99, 105, 115, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str2285 = allocate([ 116, 109, 95, 121, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str3286 = allocate([ 121, 101, 97, 114, 44, 32, 102, 111, 114, 32, 101, 120, 97, 109, 112, 108, 101, 44, 32, 49, 57, 57, 51, 0 ], "i8", ALLOC_NORMAL);
    __str4287 = allocate([ 116, 109, 95, 109, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str5288 = allocate([ 109, 111, 110, 116, 104, 32, 111, 102, 32, 121, 101, 97, 114, 44, 32, 114, 97, 110, 103, 101, 32, 91, 49, 44, 32, 49, 50, 93, 0 ], "i8", ALLOC_NORMAL);
    __str6289 = allocate([ 116, 109, 95, 109, 100, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str7290 = allocate([ 100, 97, 121, 32, 111, 102, 32, 109, 111, 110, 116, 104, 44, 32, 114, 97, 110, 103, 101, 32, 91, 49, 44, 32, 51, 49, 93, 0 ], "i8", ALLOC_NORMAL);
    __str8291 = allocate([ 116, 109, 95, 104, 111, 117, 114, 0 ], "i8", ALLOC_NORMAL);
    __str9292 = allocate([ 104, 111, 117, 114, 115, 44, 32, 114, 97, 110, 103, 101, 32, 91, 48, 44, 32, 50, 51, 93, 0 ], "i8", ALLOC_NORMAL);
    __str10293 = allocate([ 116, 109, 95, 109, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str11294 = allocate([ 109, 105, 110, 117, 116, 101, 115, 44, 32, 114, 97, 110, 103, 101, 32, 91, 48, 44, 32, 53, 57, 93, 0 ], "i8", ALLOC_NORMAL);
    __str12295 = allocate([ 116, 109, 95, 115, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    __str13296 = allocate([ 115, 101, 99, 111, 110, 100, 115, 44, 32, 114, 97, 110, 103, 101, 32, 91, 48, 44, 32, 54, 49, 93, 41, 0 ], "i8", ALLOC_NORMAL);
    __str14297 = allocate([ 116, 109, 95, 119, 100, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str15298 = allocate([ 100, 97, 121, 32, 111, 102, 32, 119, 101, 101, 107, 44, 32, 114, 97, 110, 103, 101, 32, 91, 48, 44, 32, 54, 93, 44, 32, 77, 111, 110, 100, 97, 121, 32, 105, 115, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str16299 = allocate([ 116, 109, 95, 121, 100, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str17300 = allocate([ 100, 97, 121, 32, 111, 102, 32, 121, 101, 97, 114, 44, 32, 114, 97, 110, 103, 101, 32, 91, 49, 44, 32, 51, 54, 54, 93, 0 ], "i8", ALLOC_NORMAL);
    __str18301 = allocate([ 116, 109, 95, 105, 115, 100, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str19302 = allocate([ 49, 32, 105, 102, 32, 115, 117, 109, 109, 101, 114, 32, 116, 105, 109, 101, 32, 105, 115, 32, 105, 110, 32, 101, 102, 102, 101, 99, 116, 44, 32, 48, 32, 105, 102, 32, 110, 111, 116, 44, 32, 97, 110, 100, 32, 45, 49, 32, 105, 102, 32, 117, 110, 107, 110, 111, 119, 110, 0 ], "i8", ALLOC_NORMAL);
    _struct_time_type_fields = allocate(80, [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _struct_time_type_desc = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyStructSequence_Field*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str20303 = allocate([ 116, 105, 109, 101, 46, 115, 116, 114, 117, 99, 116, 95, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str21304 = allocate([ 84, 104, 101, 32, 116, 105, 109, 101, 32, 118, 97, 108, 117, 101, 32, 97, 115, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 103, 109, 116, 105, 109, 101, 40, 41, 44, 32, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 44, 32, 97, 110, 100, 32, 115, 116, 114, 112, 116, 105, 109, 101, 40, 41, 44, 32, 97, 110, 100, 10, 32, 97, 99, 99, 101, 112, 116, 101, 100, 32, 98, 121, 32, 97, 115, 99, 116, 105, 109, 101, 40, 41, 44, 32, 109, 107, 116, 105, 109, 101, 40, 41, 32, 97, 110, 100, 32, 115, 116, 114, 102, 116, 105, 109, 101, 40, 41, 46, 32, 32, 77, 97, 121, 32, 98, 101, 32, 99, 111, 110, 115, 105, 100, 101, 114, 101, 100, 32, 97, 115, 32, 97, 10, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 102, 32, 57, 32, 105, 110, 116, 101, 103, 101, 114, 115, 46, 10, 10, 32, 78, 111, 116, 101, 32, 116, 104, 97, 116, 32, 115, 101, 118, 101, 114, 97, 108, 32, 102, 105, 101, 108, 100, 115, 39, 32, 118, 97, 108, 117, 101, 115, 32, 97, 114, 101, 32, 110, 111, 116, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 97, 115, 32, 116, 104, 111, 115, 101, 32, 100, 101, 102, 105, 110, 101, 100, 32, 98, 121, 10, 32, 116, 104, 101, 32, 67, 32, 108, 97, 110, 103, 117, 97, 103, 101, 32, 115, 116, 97, 110, 100, 97, 114, 100, 32, 102, 111, 114, 32, 115, 116, 114, 117, 99, 116, 32, 116, 109, 46, 32, 32, 70, 111, 114, 32, 101, 120, 97, 109, 112, 108, 101, 44, 32, 116, 104, 101, 32, 118, 97, 108, 117, 101, 32, 111, 102, 32, 116, 104, 101, 10, 32, 102, 105, 101, 108, 100, 32, 116, 109, 95, 121, 101, 97, 114, 32, 105, 115, 32, 116, 104, 101, 32, 97, 99, 116, 117, 97, 108, 32, 121, 101, 97, 114, 44, 32, 110, 111, 116, 32, 121, 101, 97, 114, 32, 45, 32, 49, 57, 48, 48, 46, 32, 32, 83, 101, 101, 32, 105, 110, 100, 105, 118, 105, 100, 117, 97, 108, 10, 32, 102, 105, 101, 108, 100, 115, 39, 32, 100, 101, 115, 99, 114, 105, 112, 116, 105, 111, 110, 115, 32, 102, 111, 114, 32, 100, 101, 116, 97, 105, 108, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _StructTimeType = allocate(196, [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i8*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i32 (%struct.PyDateTime_TZInfo*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "void (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str22305 = allocate([ 124, 79, 58, 103, 109, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _gmtime_doc = allocate([ 103, 109, 116, 105, 109, 101, 40, 91, 115, 101, 99, 111, 110, 100, 115, 93, 41, 32, 45, 62, 32, 40, 116, 109, 95, 121, 101, 97, 114, 44, 32, 116, 109, 95, 109, 111, 110, 44, 32, 116, 109, 95, 109, 100, 97, 121, 44, 32, 116, 109, 95, 104, 111, 117, 114, 44, 32, 116, 109, 95, 109, 105, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 109, 95, 115, 101, 99, 44, 32, 116, 109, 95, 119, 100, 97, 121, 44, 32, 116, 109, 95, 121, 100, 97, 121, 44, 32, 116, 109, 95, 105, 115, 100, 115, 116, 41, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 32, 116, 111, 32, 97, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 101, 120, 112, 114, 101, 115, 115, 105, 110, 103, 32, 85, 84, 67, 32, 40, 97, 46, 107, 46, 97, 46, 10, 71, 77, 84, 41, 46, 32, 32, 87, 104, 101, 110, 32, 39, 115, 101, 99, 111, 110, 100, 115, 39, 32, 105, 115, 32, 110, 111, 116, 32, 112, 97, 115, 115, 101, 100, 32, 105, 110, 44, 32, 99, 111, 110, 118, 101, 114, 116, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 105, 110, 115, 116, 101, 97, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str23306 = allocate([ 124, 79, 58, 108, 111, 99, 97, 108, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _localtime_doc = allocate([ 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 91, 115, 101, 99, 111, 110, 100, 115, 93, 41, 32, 45, 62, 32, 40, 116, 109, 95, 121, 101, 97, 114, 44, 116, 109, 95, 109, 111, 110, 44, 116, 109, 95, 109, 100, 97, 121, 44, 116, 109, 95, 104, 111, 117, 114, 44, 116, 109, 95, 109, 105, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 109, 95, 115, 101, 99, 44, 116, 109, 95, 119, 100, 97, 121, 44, 116, 109, 95, 121, 100, 97, 121, 44, 116, 109, 95, 105, 115, 100, 115, 116, 41, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 32, 116, 111, 32, 97, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 101, 120, 112, 114, 101, 115, 115, 105, 110, 103, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 46, 10, 87, 104, 101, 110, 32, 39, 115, 101, 99, 111, 110, 100, 115, 39, 32, 105, 115, 32, 110, 111, 116, 32, 112, 97, 115, 115, 101, 100, 32, 105, 110, 44, 32, 99, 111, 110, 118, 101, 114, 116, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 105, 110, 115, 116, 101, 97, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str24307 = allocate([ 40, 105, 105, 105, 105, 105, 105, 105, 105, 105, 41, 0 ], "i8", ALLOC_NORMAL);
    _moddict = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    __str25308 = allocate([ 97, 99, 99, 101, 112, 116, 50, 100, 121, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str26309 = allocate([ 121, 101, 97, 114, 32, 62, 61, 32, 49, 57, 48, 48, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str27310 = allocate([ 121, 101, 97, 114, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str28311 = allocate([ 115, 124, 79, 58, 115, 116, 114, 102, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str29312 = allocate([ 109, 111, 110, 116, 104, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str30313 = allocate([ 100, 97, 121, 32, 111, 102, 32, 109, 111, 110, 116, 104, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str31314 = allocate([ 104, 111, 117, 114, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str32315 = allocate([ 109, 105, 110, 117, 116, 101, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str33316 = allocate([ 115, 101, 99, 111, 110, 100, 115, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str34317 = allocate([ 100, 97, 121, 32, 111, 102, 32, 119, 101, 101, 107, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str35318 = allocate([ 100, 97, 121, 32, 111, 102, 32, 121, 101, 97, 114, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    _strftime_doc = allocate([ 115, 116, 114, 102, 116, 105, 109, 101, 40, 102, 111, 114, 109, 97, 116, 91, 44, 32, 116, 117, 112, 108, 101, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 116, 111, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 97, 32, 102, 111, 114, 109, 97, 116, 32, 115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 46, 10, 83, 101, 101, 32, 116, 104, 101, 32, 108, 105, 98, 114, 97, 114, 121, 32, 114, 101, 102, 101, 114, 101, 110, 99, 101, 32, 109, 97, 110, 117, 97, 108, 32, 102, 111, 114, 32, 102, 111, 114, 109, 97, 116, 116, 105, 110, 103, 32, 99, 111, 100, 101, 115, 46, 32, 87, 104, 101, 110, 32, 116, 104, 101, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 10, 105, 115, 32, 110, 111, 116, 32, 112, 114, 101, 115, 101, 110, 116, 44, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 97, 115, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 32, 105, 115, 32, 117, 115, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str36319 = allocate([ 95, 115, 116, 114, 112, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str37320 = allocate([ 95, 115, 116, 114, 112, 116, 105, 109, 101, 95, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str38321 = allocate([ 79, 0 ], "i8", ALLOC_NORMAL);
    _strptime_doc = allocate([ 115, 116, 114, 112, 116, 105, 109, 101, 40, 115, 116, 114, 105, 110, 103, 44, 32, 102, 111, 114, 109, 97, 116, 41, 32, 45, 62, 32, 115, 116, 114, 117, 99, 116, 95, 116, 105, 109, 101, 10, 10, 80, 97, 114, 115, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 97, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 97, 32, 102, 111, 114, 109, 97, 116, 32, 115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 46, 10, 83, 101, 101, 32, 116, 104, 101, 32, 108, 105, 98, 114, 97, 114, 121, 32, 114, 101, 102, 101, 114, 101, 110, 99, 101, 32, 109, 97, 110, 117, 97, 108, 32, 102, 111, 114, 32, 102, 111, 114, 109, 97, 116, 116, 105, 110, 103, 32, 99, 111, 100, 101, 115, 32, 40, 115, 97, 109, 101, 32, 97, 115, 32, 115, 116, 114, 102, 116, 105, 109, 101, 40, 41, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str39322 = allocate([ 97, 115, 99, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str40323 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _asctime_doc = allocate([ 97, 115, 99, 116, 105, 109, 101, 40, 91, 116, 117, 112, 108, 101, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 116, 111, 32, 97, 32, 115, 116, 114, 105, 110, 103, 44, 32, 101, 46, 103, 46, 32, 39, 83, 97, 116, 32, 74, 117, 110, 32, 48, 54, 32, 49, 54, 58, 50, 54, 58, 49, 49, 32, 49, 57, 57, 56, 39, 46, 10, 87, 104, 101, 110, 32, 116, 104, 101, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 105, 115, 32, 110, 111, 116, 32, 112, 114, 101, 115, 101, 110, 116, 44, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 97, 115, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 10, 105, 115, 32, 117, 115, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str41324 = allocate([ 99, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str42325 = allocate([ 117, 110, 99, 111, 110, 118, 101, 114, 116, 105, 98, 108, 101, 32, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _ctime_doc = allocate([ 99, 116, 105, 109, 101, 40, 115, 101, 99, 111, 110, 100, 115, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 116, 105, 109, 101, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 32, 116, 111, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 105, 110, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 46, 10, 84, 104, 105, 115, 32, 105, 115, 32, 101, 113, 117, 105, 118, 97, 108, 101, 110, 116, 32, 116, 111, 32, 97, 115, 99, 116, 105, 109, 101, 40, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 115, 101, 99, 111, 110, 100, 115, 41, 41, 46, 32, 87, 104, 101, 110, 32, 116, 104, 101, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 105, 115, 10, 110, 111, 116, 32, 112, 114, 101, 115, 101, 110, 116, 44, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 97, 115, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 32, 105, 115, 32, 117, 115, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str43326 = allocate([ 109, 107, 116, 105, 109, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    _mktime_doc = allocate([ 109, 107, 116, 105, 109, 101, 40, 116, 117, 112, 108, 101, 41, 32, 45, 62, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 110, 117, 109, 98, 101, 114, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 105, 110, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 32, 116, 111, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 46, 0 ], "i8", ALLOC_NORMAL);
    __str44327 = allocate([ 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _tzset_doc = allocate([ 116, 122, 115, 101, 116, 40, 41, 10, 10, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 44, 32, 111, 114, 32, 114, 101, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 44, 32, 116, 104, 101, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 122, 111, 110, 101, 32, 116, 111, 32, 116, 104, 101, 32, 118, 97, 108, 117, 101, 32, 115, 116, 111, 114, 101, 100, 32, 105, 110, 10, 111, 115, 46, 101, 110, 118, 105, 114, 111, 110, 91, 39, 84, 90, 39, 93, 46, 32, 84, 104, 101, 32, 84, 90, 32, 101, 110, 118, 105, 114, 111, 110, 109, 101, 110, 116, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 105, 110, 10, 115, 116, 97, 110, 100, 97, 114, 100, 32, 85, 110, 105, 120, 32, 116, 105, 109, 101, 122, 111, 110, 101, 32, 102, 111, 114, 109, 97, 116, 32, 97, 115, 32, 100, 111, 99, 117, 109, 101, 110, 116, 101, 100, 32, 105, 110, 32, 116, 104, 101, 32, 116, 122, 115, 101, 116, 32, 109, 97, 110, 32, 112, 97, 103, 101, 10, 40, 101, 103, 46, 32, 39, 85, 83, 47, 69, 97, 115, 116, 101, 114, 110, 39, 44, 32, 39, 69, 117, 114, 111, 112, 101, 47, 65, 109, 115, 116, 101, 114, 100, 97, 109, 39, 41, 46, 32, 85, 110, 107, 110, 111, 119, 110, 32, 116, 105, 109, 101, 122, 111, 110, 101, 115, 32, 119, 105, 108, 108, 32, 115, 105, 108, 101, 110, 116, 108, 121, 10, 102, 97, 108, 108, 32, 98, 97, 99, 107, 32, 116, 111, 32, 85, 84, 67, 46, 32, 73, 102, 32, 116, 104, 101, 32, 84, 90, 32, 101, 110, 118, 105, 114, 111, 110, 109, 101, 110, 116, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 105, 115, 32, 110, 111, 116, 32, 115, 101, 116, 44, 32, 116, 104, 101, 32, 108, 111, 99, 97, 108, 10, 116, 105, 109, 101, 122, 111, 110, 101, 32, 105, 115, 32, 115, 101, 116, 32, 116, 111, 32, 116, 104, 101, 32, 115, 121, 115, 116, 101, 109, 115, 32, 98, 101, 115, 116, 32, 103, 117, 101, 115, 115, 32, 111, 102, 32, 119, 97, 108, 108, 99, 108, 111, 99, 107, 32, 116, 105, 109, 101, 46, 10, 67, 104, 97, 110, 103, 105, 110, 103, 32, 116, 104, 101, 32, 84, 90, 32, 101, 110, 118, 105, 114, 111, 110, 109, 101, 110, 116, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 119, 105, 116, 104, 111, 117, 116, 32, 99, 97, 108, 108, 105, 110, 103, 32, 116, 122, 115, 101, 116, 32, 42, 109, 97, 121, 42, 32, 99, 104, 97, 110, 103, 101, 10, 116, 104, 101, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 122, 111, 110, 101, 32, 117, 115, 101, 100, 32, 98, 121, 32, 109, 101, 116, 104, 111, 100, 115, 32, 115, 117, 99, 104, 32, 97, 115, 32, 108, 111, 99, 97, 108, 116, 105, 109, 101, 44, 32, 98, 117, 116, 32, 116, 104, 105, 115, 32, 98, 101, 104, 97, 118, 105, 111, 117, 114, 10, 115, 104, 111, 117, 108, 100, 32, 110, 111, 116, 32, 98, 101, 32, 114, 101, 108, 105, 101, 100, 32, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str45328 = allocate([ 32, 32, 32, 0 ], "i8", ALLOC_NORMAL);
    __str46329 = allocate([ 116, 105, 109, 101, 122, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str47330 = allocate([ 97, 108, 116, 122, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str48331 = allocate([ 100, 97, 121, 108, 105, 103, 104, 116, 0 ], "i8", ALLOC_NORMAL);
    __str49332 = allocate([ 40, 122, 122, 41, 0 ], "i8", ALLOC_NORMAL);
    __str50333 = allocate([ 116, 122, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str51334 = allocate([ 99, 108, 111, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str52335 = allocate([ 115, 108, 101, 101, 112, 0 ], "i8", ALLOC_NORMAL);
    __str53336 = allocate([ 103, 109, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str54337 = allocate([ 108, 111, 99, 97, 108, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str55338 = allocate([ 109, 107, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str56339 = allocate([ 115, 116, 114, 102, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str57340 = allocate([ 115, 116, 114, 112, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str58341 = allocate([ 116, 122, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    _time_methods342 = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_doc = allocate([ 84, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 112, 114, 111, 118, 105, 100, 101, 115, 32, 118, 97, 114, 105, 111, 117, 115, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 116, 111, 32, 109, 97, 110, 105, 112, 117, 108, 97, 116, 101, 32, 116, 105, 109, 101, 32, 118, 97, 108, 117, 101, 115, 46, 10, 10, 84, 104, 101, 114, 101, 32, 97, 114, 101, 32, 116, 119, 111, 32, 115, 116, 97, 110, 100, 97, 114, 100, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 115, 32, 111, 102, 32, 116, 105, 109, 101, 46, 32, 32, 79, 110, 101, 32, 105, 115, 32, 116, 104, 101, 32, 110, 117, 109, 98, 101, 114, 10, 111, 102, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 44, 32, 105, 110, 32, 85, 84, 67, 32, 40, 97, 46, 107, 46, 97, 46, 32, 71, 77, 84, 41, 46, 32, 32, 73, 116, 32, 109, 97, 121, 32, 98, 101, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 10, 111, 114, 32, 97, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 110, 117, 109, 98, 101, 114, 32, 40, 116, 111, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 32, 102, 114, 97, 99, 116, 105, 111, 110, 115, 32, 111, 102, 32, 115, 101, 99, 111, 110, 100, 115, 41, 46, 10, 84, 104, 101, 32, 69, 112, 111, 99, 104, 32, 105, 115, 32, 115, 121, 115, 116, 101, 109, 45, 100, 101, 102, 105, 110, 101, 100, 59, 32, 111, 110, 32, 85, 110, 105, 120, 44, 32, 105, 116, 32, 105, 115, 32, 103, 101, 110, 101, 114, 97, 108, 108, 121, 32, 74, 97, 110, 117, 97, 114, 121, 32, 49, 115, 116, 44, 32, 49, 57, 55, 48, 46, 10, 84, 104, 101, 32, 97, 99, 116, 117, 97, 108, 32, 118, 97, 108, 117, 101, 32, 99, 97, 110, 32, 98, 101, 32, 114, 101, 116, 114, 105, 101, 118, 101, 100, 32, 98, 121, 32, 99, 97, 108, 108, 105, 110, 103, 32, 103, 109, 116, 105, 109, 101, 40, 48, 41, 46, 10, 10, 84, 104, 101, 32, 111, 116, 104, 101, 114, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 105, 115, 32, 97, 32, 116, 117, 112, 108, 101, 32, 111, 102, 32, 57, 32, 105, 110, 116, 101, 103, 101, 114, 115, 32, 103, 105, 118, 105, 110, 103, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 46, 10, 84, 104, 101, 32, 116, 117, 112, 108, 101, 32, 105, 116, 101, 109, 115, 32, 97, 114, 101, 58, 10, 32, 32, 121, 101, 97, 114, 32, 40, 102, 111, 117, 114, 32, 100, 105, 103, 105, 116, 115, 44, 32, 101, 46, 103, 46, 32, 49, 57, 57, 56, 41, 10, 32, 32, 109, 111, 110, 116, 104, 32, 40, 49, 45, 49, 50, 41, 10, 32, 32, 100, 97, 121, 32, 40, 49, 45, 51, 49, 41, 10, 32, 32, 104, 111, 117, 114, 115, 32, 40, 48, 45, 50, 51, 41, 10, 32, 32, 109, 105, 110, 117, 116, 101, 115, 32, 40, 48, 45, 53, 57, 41, 10, 32, 32, 115, 101, 99, 111, 110, 100, 115, 32, 40, 48, 45, 53, 57, 41, 10, 32, 32, 119, 101, 101, 107, 100, 97, 121, 32, 40, 48, 45, 54, 44, 32, 77, 111, 110, 100, 97, 121, 32, 105, 115, 32, 48, 41, 10, 32, 32, 74, 117, 108, 105, 97, 110, 32, 100, 97, 121, 32, 40, 100, 97, 121, 32, 105, 110, 32, 116, 104, 101, 32, 121, 101, 97, 114, 44, 32, 49, 45, 51, 54, 54, 41, 10, 32, 32, 68, 83, 84, 32, 40, 68, 97, 121, 108, 105, 103, 104, 116, 32, 83, 97, 118, 105, 110, 103, 115, 32, 84, 105, 109, 101, 41, 32, 102, 108, 97, 103, 32, 40, 45, 49, 44, 32, 48, 32, 111, 114, 32, 49, 41, 10, 73, 102, 32, 116, 104, 101, 32, 68, 83, 84, 32, 102, 108, 97, 103, 32, 105, 115, 32, 48, 44, 32, 116, 104, 101, 32, 116, 105, 109, 101, 32, 105, 115, 32, 103, 105, 118, 101, 110, 32, 105, 110, 32, 116, 104, 101, 32, 114, 101, 103, 117, 108, 97, 114, 32, 116, 105, 109, 101, 32, 122, 111, 110, 101, 59, 10, 105, 102, 32, 105, 116, 32, 105, 115, 32, 49, 44, 32, 116, 104, 101, 32, 116, 105, 109, 101, 32, 105, 115, 32, 103, 105, 118, 101, 110, 32, 105, 110, 32, 116, 104, 101, 32, 68, 83, 84, 32, 116, 105, 109, 101, 32, 122, 111, 110, 101, 59, 10, 105, 102, 32, 105, 116, 32, 105, 115, 32, 45, 49, 44, 32, 109, 107, 116, 105, 109, 101, 40, 41, 32, 115, 104, 111, 117, 108, 100, 32, 103, 117, 101, 115, 115, 32, 98, 97, 115, 101, 100, 32, 111, 110, 32, 116, 104, 101, 32, 100, 97, 116, 101, 32, 97, 110, 100, 32, 116, 105, 109, 101, 46, 10, 10, 86, 97, 114, 105, 97, 98, 108, 101, 115, 58, 10, 10, 116, 105, 109, 101, 122, 111, 110, 101, 32, 45, 45, 32, 100, 105, 102, 102, 101, 114, 101, 110, 99, 101, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 32, 98, 101, 116, 119, 101, 101, 110, 32, 85, 84, 67, 32, 97, 110, 100, 32, 108, 111, 99, 97, 108, 32, 115, 116, 97, 110, 100, 97, 114, 100, 32, 116, 105, 109, 101, 10, 97, 108, 116, 122, 111, 110, 101, 32, 45, 45, 32, 100, 105, 102, 102, 101, 114, 101, 110, 99, 101, 32, 105, 110, 32, 32, 115, 101, 99, 111, 110, 100, 115, 32, 98, 101, 116, 119, 101, 101, 110, 32, 85, 84, 67, 32, 97, 110, 100, 32, 108, 111, 99, 97, 108, 32, 68, 83, 84, 32, 116, 105, 109, 101, 10, 100, 97, 121, 108, 105, 103, 104, 116, 32, 45, 45, 32, 119, 104, 101, 116, 104, 101, 114, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 32, 115, 104, 111, 117, 108, 100, 32, 114, 101, 102, 108, 101, 99, 116, 32, 68, 83, 84, 10, 116, 122, 110, 97, 109, 101, 32, 45, 45, 32, 116, 117, 112, 108, 101, 32, 111, 102, 32, 40, 115, 116, 97, 110, 100, 97, 114, 100, 32, 116, 105, 109, 101, 32, 122, 111, 110, 101, 32, 110, 97, 109, 101, 44, 32, 68, 83, 84, 32, 116, 105, 109, 101, 32, 122, 111, 110, 101, 32, 110, 97, 109, 101, 41, 10, 10, 70, 117, 110, 99, 116, 105, 111, 110, 115, 58, 10, 10, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 32, 97, 115, 32, 97, 32, 102, 108, 111, 97, 116, 10, 99, 108, 111, 99, 107, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 67, 80, 85, 32, 116, 105, 109, 101, 32, 115, 105, 110, 99, 101, 32, 112, 114, 111, 99, 101, 115, 115, 32, 115, 116, 97, 114, 116, 32, 97, 115, 32, 97, 32, 102, 108, 111, 97, 116, 10, 115, 108, 101, 101, 112, 40, 41, 32, 45, 45, 32, 100, 101, 108, 97, 121, 32, 102, 111, 114, 32, 97, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 115, 101, 99, 111, 110, 100, 115, 32, 103, 105, 118, 101, 110, 32, 97, 115, 32, 97, 32, 102, 108, 111, 97, 116, 10, 103, 109, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 99, 111, 110, 118, 101, 114, 116, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 69, 112, 111, 99, 104, 32, 116, 111, 32, 85, 84, 67, 32, 116, 117, 112, 108, 101, 10, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 99, 111, 110, 118, 101, 114, 116, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 69, 112, 111, 99, 104, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 10, 97, 115, 99, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 99, 111, 110, 118, 101, 114, 116, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 116, 111, 32, 115, 116, 114, 105, 110, 103, 10, 99, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 99, 111, 110, 118, 101, 114, 116, 32, 116, 105, 109, 101, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 32, 116, 111, 32, 115, 116, 114, 105, 110, 103, 10, 109, 107, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 99, 111, 110, 118, 101, 114, 116, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 116, 111, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 69, 112, 111, 99, 104, 10, 115, 116, 114, 102, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 99, 111, 110, 118, 101, 114, 116, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 116, 111, 32, 115, 116, 114, 105, 110, 103, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 102, 111, 114, 109, 97, 116, 32, 115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 10, 115, 116, 114, 112, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 112, 97, 114, 115, 101, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 102, 111, 114, 109, 97, 116, 32, 115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 10, 116, 122, 115, 101, 116, 40, 41, 32, 45, 45, 32, 99, 104, 97, 110, 103, 101, 32, 116, 104, 101, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 122, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str59343 = allocate([ 80, 89, 84, 72, 79, 78, 89, 50, 75, 0 ], "i8", ALLOC_NORMAL);
    _initialized = allocate(1, "i32", ALLOC_NORMAL);
    __str60344 = allocate([ 115, 116, 114, 117, 99, 116, 95, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_MonthNames_9303] = __str52;
    HEAP[_MonthNames_9303 + 4] = __str53;
    HEAP[_MonthNames_9303 + 8] = __str54;
    HEAP[_MonthNames_9303 + 12] = __str55;
    HEAP[_MonthNames_9303 + 16] = __str56;
    HEAP[_MonthNames_9303 + 20] = __str57;
    HEAP[_MonthNames_9303 + 24] = __str58;
    HEAP[_MonthNames_9303 + 28] = __str59;
    HEAP[_MonthNames_9303 + 32] = __str60;
    HEAP[_MonthNames_9303 + 36] = __str61;
    HEAP[_MonthNames_9303 + 40] = __str62;
    HEAP[_MonthNames_9303 + 44] = __str63;
    HEAP[_DayNames_9302] = __str64;
    HEAP[_DayNames_9302 + 4] = __str65;
    HEAP[_DayNames_9302 + 8] = __str66;
    HEAP[_DayNames_9302 + 12] = __str67;
    HEAP[_DayNames_9302 + 16] = __str68;
    HEAP[_DayNames_9302 + 20] = __str69;
    HEAP[_DayNames_9302 + 24] = __str70;
    HEAP[_keywords_10439] = __str114;
    HEAP[_keywords_10439 + 4] = __str115;
    HEAP[_keywords_10439 + 8] = __str116;
    HEAP[_keywords_10439 + 12] = __str117;
    HEAP[_keywords_10439 + 16] = __str118;
    HEAP[_keywords_10439 + 20] = __str119;
    HEAP[_keywords_10439 + 24] = __str120;
    HEAP[_delta_members] = __str114;
    HEAP[_delta_members + 16] = __str130;
    HEAP[_delta_members + 20] = __str115;
    HEAP[_delta_members + 36] = __str131;
    HEAP[_delta_members + 40] = __str116;
    HEAP[_delta_members + 56] = __str132;
    HEAP[_delta_methods] = __str133;
    HEAP[_delta_methods + 4] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_delta_methods + 12] = __str134;
    HEAP[_delta_methods + 16] = __str135;
    HEAP[_delta_methods + 20] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_delta_methods + 28] = __str136;
    HEAP[_delta_as_number] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_delta_as_number + 4] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_delta_as_number + 8] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_delta_as_number + 12] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_delta_as_number + 28] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_delta_as_number + 32] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_delta_as_number + 36] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_delta_as_number + 40] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_delta_as_number + 136] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_PyDateTime_DeltaType + 12] = __str137;
    HEAP[_PyDateTime_DeltaType + 44] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_PyDateTime_DeltaType + 48] = _delta_as_number;
    HEAP[_PyDateTime_DeltaType + 60] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_PyDateTime_DeltaType + 68] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_PyDateTime_DeltaType + 72] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_PyDateTime_DeltaType + 88] = _delta_doc;
    HEAP[_PyDateTime_DeltaType + 100] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_PyDateTime_DeltaType + 116] = _delta_methods;
    HEAP[_PyDateTime_DeltaType + 120] = _delta_members;
    HEAP[_PyDateTime_DeltaType + 156] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_date_getset] = __str138;
    HEAP[_date_getset + 4] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_date_getset + 20] = __str139;
    HEAP[_date_getset + 24] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_date_getset + 40] = __str140;
    HEAP[_date_getset + 44] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_date_kws] = __str138;
    HEAP[_date_kws + 4] = __str139;
    HEAP[_date_kws + 8] = __str140;
    HEAP[_keywords_11112] = __str148;
    HEAP[_date_methods] = __str142;
    HEAP[_date_methods + 4] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_date_methods + 12] = __str155;
    HEAP[_date_methods + 16] = __str156;
    HEAP[_date_methods + 20] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_date_methods + 28] = __str157;
    HEAP[_date_methods + 32] = __str158;
    HEAP[_date_methods + 36] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_date_methods + 44] = __str159;
    HEAP[_date_methods + 48] = __str160;
    HEAP[_date_methods + 52] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_date_methods + 60] = __str161;
    HEAP[_date_methods + 64] = __str93;
    HEAP[_date_methods + 68] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_date_methods + 76] = __str162;
    HEAP[_date_methods + 80] = __str163;
    HEAP[_date_methods + 84] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_date_methods + 92] = __str164;
    HEAP[_date_methods + 96] = __str149;
    HEAP[_date_methods + 100] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_date_methods + 108] = __str165;
    HEAP[_date_methods + 112] = __str166;
    HEAP[_date_methods + 116] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_date_methods + 124] = __str167;
    HEAP[_date_methods + 128] = __str146;
    HEAP[_date_methods + 132] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_date_methods + 140] = __str168;
    HEAP[_date_methods + 144] = __str169;
    HEAP[_date_methods + 148] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_date_methods + 156] = __str170;
    HEAP[_date_methods + 160] = __str171;
    HEAP[_date_methods + 164] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_date_methods + 172] = __str172;
    HEAP[_date_methods + 176] = __str173;
    HEAP[_date_methods + 180] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_date_methods + 188] = __str174;
    HEAP[_date_methods + 192] = __str82;
    HEAP[_date_methods + 196] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_date_methods + 204] = __str175;
    HEAP[_date_methods + 208] = __str135;
    HEAP[_date_methods + 212] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_date_methods + 220] = __str136;
    HEAP[_date_as_number] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_date_as_number + 4] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_PyDateTime_DateType + 12] = __str176;
    HEAP[_PyDateTime_DateType + 44] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_PyDateTime_DateType + 48] = _date_as_number;
    HEAP[_PyDateTime_DateType + 60] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_PyDateTime_DateType + 68] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_PyDateTime_DateType + 72] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_PyDateTime_DateType + 88] = _date_doc;
    HEAP[_PyDateTime_DateType + 100] = FUNCTION_TABLE_OFFSET + 82;
    HEAP[_PyDateTime_DateType + 116] = _date_methods;
    HEAP[_PyDateTime_DateType + 124] = _date_getset;
    HEAP[_PyDateTime_DateType + 156] = FUNCTION_TABLE_OFFSET + 84;
    HEAP[_tzinfo_methods] = __str45;
    HEAP[_tzinfo_methods + 4] = FUNCTION_TABLE_OFFSET + 86;
    HEAP[_tzinfo_methods + 12] = __str186;
    HEAP[_tzinfo_methods + 16] = __str42;
    HEAP[_tzinfo_methods + 20] = FUNCTION_TABLE_OFFSET + 88;
    HEAP[_tzinfo_methods + 28] = __str187;
    HEAP[_tzinfo_methods + 32] = __str44;
    HEAP[_tzinfo_methods + 36] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_tzinfo_methods + 44] = __str188;
    HEAP[_tzinfo_methods + 48] = __str189;
    HEAP[_tzinfo_methods + 52] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_tzinfo_methods + 60] = __str190;
    HEAP[_tzinfo_methods + 64] = __str135;
    HEAP[_tzinfo_methods + 68] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_tzinfo_methods + 76] = __str191;
    HEAP[_PyDateTime_TZInfoType + 12] = __str192;
    HEAP[_PyDateTime_TZInfoType + 72] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_PyDateTime_TZInfoType + 88] = _tzinfo_doc;
    HEAP[_PyDateTime_TZInfoType + 116] = _tzinfo_methods;
    HEAP[_PyDateTime_TZInfoType + 156] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_time_getset] = __str193;
    HEAP[_time_getset + 4] = FUNCTION_TABLE_OFFSET + 98;
    HEAP[_time_getset + 20] = __str194;
    HEAP[_time_getset + 24] = FUNCTION_TABLE_OFFSET + 100;
    HEAP[_time_getset + 40] = __str195;
    HEAP[_time_getset + 44] = FUNCTION_TABLE_OFFSET + 102;
    HEAP[_time_getset + 60] = __str196;
    HEAP[_time_getset + 64] = FUNCTION_TABLE_OFFSET + 104;
    HEAP[_time_getset + 80] = __str48;
    HEAP[_time_getset + 84] = FUNCTION_TABLE_OFFSET + 106;
    HEAP[_time_kws] = __str193;
    HEAP[_time_kws + 4] = __str194;
    HEAP[_time_kws + 8] = __str195;
    HEAP[_time_kws + 12] = __str196;
    HEAP[_time_kws + 16] = __str48;
    HEAP[_keywords_11990] = __str148;
    HEAP[_time_methods] = __str146;
    HEAP[_time_methods + 4] = FUNCTION_TABLE_OFFSET + 108;
    HEAP[_time_methods + 12] = __str213;
    HEAP[_time_methods + 16] = __str93;
    HEAP[_time_methods + 20] = FUNCTION_TABLE_OFFSET + 110;
    HEAP[_time_methods + 28] = __str162;
    HEAP[_time_methods + 32] = __str163;
    HEAP[_time_methods + 36] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_time_methods + 44] = __str164;
    HEAP[_time_methods + 48] = __str42;
    HEAP[_time_methods + 52] = FUNCTION_TABLE_OFFSET + 112;
    HEAP[_time_methods + 60] = __str214;
    HEAP[_time_methods + 64] = __str45;
    HEAP[_time_methods + 68] = FUNCTION_TABLE_OFFSET + 114;
    HEAP[_time_methods + 76] = __str215;
    HEAP[_time_methods + 80] = __str44;
    HEAP[_time_methods + 84] = FUNCTION_TABLE_OFFSET + 116;
    HEAP[_time_methods + 92] = __str216;
    HEAP[_time_methods + 96] = __str82;
    HEAP[_time_methods + 100] = FUNCTION_TABLE_OFFSET + 118;
    HEAP[_time_methods + 108] = __str217;
    HEAP[_time_methods + 112] = __str135;
    HEAP[_time_methods + 116] = FUNCTION_TABLE_OFFSET + 120;
    HEAP[_time_methods + 124] = __str136;
    HEAP[_time_as_number + 40] = FUNCTION_TABLE_OFFSET + 122;
    HEAP[_PyDateTime_TimeType + 12] = __str218;
    HEAP[_PyDateTime_TimeType + 24] = FUNCTION_TABLE_OFFSET + 124;
    HEAP[_PyDateTime_TimeType + 44] = FUNCTION_TABLE_OFFSET + 126;
    HEAP[_PyDateTime_TimeType + 48] = _time_as_number;
    HEAP[_PyDateTime_TimeType + 60] = FUNCTION_TABLE_OFFSET + 128;
    HEAP[_PyDateTime_TimeType + 68] = FUNCTION_TABLE_OFFSET + 130;
    HEAP[_PyDateTime_TimeType + 72] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_PyDateTime_TimeType + 88] = _time_doc;
    HEAP[_PyDateTime_TimeType + 100] = FUNCTION_TABLE_OFFSET + 132;
    HEAP[_PyDateTime_TimeType + 116] = _time_methods;
    HEAP[_PyDateTime_TimeType + 124] = _time_getset;
    HEAP[_PyDateTime_TimeType + 152] = FUNCTION_TABLE_OFFSET + 134;
    HEAP[_PyDateTime_TimeType + 156] = FUNCTION_TABLE_OFFSET + 136;
    HEAP[_datetime_getset] = __str193;
    HEAP[_datetime_getset + 4] = FUNCTION_TABLE_OFFSET + 138;
    HEAP[_datetime_getset + 20] = __str194;
    HEAP[_datetime_getset + 24] = FUNCTION_TABLE_OFFSET + 140;
    HEAP[_datetime_getset + 40] = __str195;
    HEAP[_datetime_getset + 44] = FUNCTION_TABLE_OFFSET + 142;
    HEAP[_datetime_getset + 60] = __str196;
    HEAP[_datetime_getset + 64] = FUNCTION_TABLE_OFFSET + 144;
    HEAP[_datetime_getset + 80] = __str48;
    HEAP[_datetime_getset + 84] = FUNCTION_TABLE_OFFSET + 146;
    HEAP[_datetime_kws] = __str138;
    HEAP[_datetime_kws + 4] = __str139;
    HEAP[_datetime_kws + 8] = __str140;
    HEAP[_datetime_kws + 12] = __str193;
    HEAP[_datetime_kws + 16] = __str194;
    HEAP[_datetime_kws + 20] = __str195;
    HEAP[_datetime_kws + 24] = __str196;
    HEAP[_datetime_kws + 28] = __str48;
    HEAP[_keywords_12602] = __str223;
    HEAP[_keywords_12649] = __str225;
    HEAP[_keywords_12649 + 4] = __str223;
    HEAP[_keywords_12819] = __str232;
    HEAP[_keywords_12819 + 4] = __str92;
    HEAP[_keywords_13311] = __str241;
    HEAP[_keywords_13646] = __str223;
    HEAP[_datetime_methods] = __str247;
    HEAP[_datetime_methods + 4] = FUNCTION_TABLE_OFFSET + 148;
    HEAP[_datetime_methods + 12] = __str248;
    HEAP[_datetime_methods + 16] = __str249;
    HEAP[_datetime_methods + 20] = FUNCTION_TABLE_OFFSET + 150;
    HEAP[_datetime_methods + 28] = __str250;
    HEAP[_datetime_methods + 32] = __str142;
    HEAP[_datetime_methods + 36] = FUNCTION_TABLE_OFFSET + 152;
    HEAP[_datetime_methods + 44] = __str251;
    HEAP[_datetime_methods + 48] = __str252;
    HEAP[_datetime_methods + 52] = FUNCTION_TABLE_OFFSET + 154;
    HEAP[_datetime_methods + 60] = __str253;
    HEAP[_datetime_methods + 64] = __str254;
    HEAP[_datetime_methods + 68] = FUNCTION_TABLE_OFFSET + 156;
    HEAP[_datetime_methods + 76] = __str255;
    HEAP[_datetime_methods + 80] = __str256;
    HEAP[_datetime_methods + 84] = FUNCTION_TABLE_OFFSET + 158;
    HEAP[_datetime_methods + 92] = __str257;
    HEAP[_datetime_methods + 96] = __str232;
    HEAP[_datetime_methods + 100] = FUNCTION_TABLE_OFFSET + 160;
    HEAP[_datetime_methods + 108] = __str258;
    HEAP[_datetime_methods + 112] = __str92;
    HEAP[_datetime_methods + 116] = FUNCTION_TABLE_OFFSET + 162;
    HEAP[_datetime_methods + 124] = __str259;
    HEAP[_datetime_methods + 128] = __str260;
    HEAP[_datetime_methods + 132] = FUNCTION_TABLE_OFFSET + 164;
    HEAP[_datetime_methods + 140] = __str261;
    HEAP[_datetime_methods + 144] = __str160;
    HEAP[_datetime_methods + 148] = FUNCTION_TABLE_OFFSET + 166;
    HEAP[_datetime_methods + 156] = __str161;
    HEAP[_datetime_methods + 160] = __str149;
    HEAP[_datetime_methods + 164] = FUNCTION_TABLE_OFFSET + 168;
    HEAP[_datetime_methods + 172] = __str165;
    HEAP[_datetime_methods + 176] = __str262;
    HEAP[_datetime_methods + 180] = FUNCTION_TABLE_OFFSET + 170;
    HEAP[_datetime_methods + 188] = __str263;
    HEAP[_datetime_methods + 192] = __str146;
    HEAP[_datetime_methods + 196] = FUNCTION_TABLE_OFFSET + 172;
    HEAP[_datetime_methods + 204] = __str264;
    HEAP[_datetime_methods + 208] = __str42;
    HEAP[_datetime_methods + 212] = FUNCTION_TABLE_OFFSET + 174;
    HEAP[_datetime_methods + 220] = __str214;
    HEAP[_datetime_methods + 224] = __str45;
    HEAP[_datetime_methods + 228] = FUNCTION_TABLE_OFFSET + 176;
    HEAP[_datetime_methods + 236] = __str215;
    HEAP[_datetime_methods + 240] = __str44;
    HEAP[_datetime_methods + 244] = FUNCTION_TABLE_OFFSET + 178;
    HEAP[_datetime_methods + 252] = __str216;
    HEAP[_datetime_methods + 256] = __str82;
    HEAP[_datetime_methods + 260] = FUNCTION_TABLE_OFFSET + 180;
    HEAP[_datetime_methods + 268] = __str265;
    HEAP[_datetime_methods + 272] = __str266;
    HEAP[_datetime_methods + 276] = FUNCTION_TABLE_OFFSET + 182;
    HEAP[_datetime_methods + 284] = __str267;
    HEAP[_datetime_methods + 288] = __str135;
    HEAP[_datetime_methods + 292] = FUNCTION_TABLE_OFFSET + 184;
    HEAP[_datetime_methods + 300] = __str136;
    HEAP[_datetime_as_number] = FUNCTION_TABLE_OFFSET + 186;
    HEAP[_datetime_as_number + 4] = FUNCTION_TABLE_OFFSET + 188;
    HEAP[_PyDateTime_DateTimeType + 12] = __str268;
    HEAP[_PyDateTime_DateTimeType + 24] = FUNCTION_TABLE_OFFSET + 190;
    HEAP[_PyDateTime_DateTimeType + 44] = FUNCTION_TABLE_OFFSET + 192;
    HEAP[_PyDateTime_DateTimeType + 48] = _datetime_as_number;
    HEAP[_PyDateTime_DateTimeType + 60] = FUNCTION_TABLE_OFFSET + 194;
    HEAP[_PyDateTime_DateTimeType + 68] = FUNCTION_TABLE_OFFSET + 196;
    HEAP[_PyDateTime_DateTimeType + 72] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_PyDateTime_DateTimeType + 88] = _datetime_doc;
    HEAP[_PyDateTime_DateTimeType + 100] = FUNCTION_TABLE_OFFSET + 198;
    HEAP[_PyDateTime_DateTimeType + 116] = _datetime_methods;
    HEAP[_PyDateTime_DateTimeType + 124] = _datetime_getset;
    HEAP[_PyDateTime_DateTimeType + 128] = _PyDateTime_DateType;
    HEAP[_PyDateTime_DateTimeType + 152] = FUNCTION_TABLE_OFFSET + 200;
    HEAP[_PyDateTime_DateTimeType + 156] = FUNCTION_TABLE_OFFSET + 202;
    HEAP[_CAPI] = _PyDateTime_DateType;
    HEAP[_CAPI + 4] = _PyDateTime_DateTimeType;
    HEAP[_CAPI + 8] = _PyDateTime_TimeType;
    HEAP[_CAPI + 12] = _PyDateTime_DeltaType;
    HEAP[_CAPI + 16] = _PyDateTime_TZInfoType;
    HEAP[_CAPI + 20] = FUNCTION_TABLE_OFFSET + 204;
    HEAP[_CAPI + 24] = FUNCTION_TABLE_OFFSET + 206;
    HEAP[_CAPI + 28] = FUNCTION_TABLE_OFFSET + 208;
    HEAP[_CAPI + 32] = FUNCTION_TABLE_OFFSET + 210;
    HEAP[_CAPI + 36] = FUNCTION_TABLE_OFFSET + 152;
    HEAP[_CAPI + 40] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_struct_time_type_fields] = __str2285;
    HEAP[_struct_time_type_fields + 4] = __str3286;
    HEAP[_struct_time_type_fields + 8] = __str4287;
    HEAP[_struct_time_type_fields + 12] = __str5288;
    HEAP[_struct_time_type_fields + 16] = __str6289;
    HEAP[_struct_time_type_fields + 20] = __str7290;
    HEAP[_struct_time_type_fields + 24] = __str8291;
    HEAP[_struct_time_type_fields + 28] = __str9292;
    HEAP[_struct_time_type_fields + 32] = __str10293;
    HEAP[_struct_time_type_fields + 36] = __str11294;
    HEAP[_struct_time_type_fields + 40] = __str12295;
    HEAP[_struct_time_type_fields + 44] = __str13296;
    HEAP[_struct_time_type_fields + 48] = __str14297;
    HEAP[_struct_time_type_fields + 52] = __str15298;
    HEAP[_struct_time_type_fields + 56] = __str16299;
    HEAP[_struct_time_type_fields + 60] = __str17300;
    HEAP[_struct_time_type_fields + 64] = __str18301;
    HEAP[_struct_time_type_fields + 68] = __str19302;
    HEAP[_struct_time_type_desc] = __str20303;
    HEAP[_struct_time_type_desc + 4] = __str21304;
    HEAP[_struct_time_type_desc + 8] = _struct_time_type_fields;
    HEAP[_time_methods342] = __str44327;
    HEAP[_time_methods342 + 4] = FUNCTION_TABLE_OFFSET + 212;
    HEAP[_time_methods342 + 12] = _time_doc283;
    HEAP[_time_methods342 + 16] = __str51334;
    HEAP[_time_methods342 + 20] = FUNCTION_TABLE_OFFSET + 214;
    HEAP[_time_methods342 + 28] = _clock_doc;
    HEAP[_time_methods342 + 32] = __str52335;
    HEAP[_time_methods342 + 36] = FUNCTION_TABLE_OFFSET + 216;
    HEAP[_time_methods342 + 44] = _sleep_doc;
    HEAP[_time_methods342 + 48] = __str53336;
    HEAP[_time_methods342 + 52] = FUNCTION_TABLE_OFFSET + 218;
    HEAP[_time_methods342 + 60] = _gmtime_doc;
    HEAP[_time_methods342 + 64] = __str54337;
    HEAP[_time_methods342 + 68] = FUNCTION_TABLE_OFFSET + 220;
    HEAP[_time_methods342 + 76] = _localtime_doc;
    HEAP[_time_methods342 + 80] = __str39322;
    HEAP[_time_methods342 + 84] = FUNCTION_TABLE_OFFSET + 222;
    HEAP[_time_methods342 + 92] = _asctime_doc;
    HEAP[_time_methods342 + 96] = __str41324;
    HEAP[_time_methods342 + 100] = FUNCTION_TABLE_OFFSET + 224;
    HEAP[_time_methods342 + 108] = _ctime_doc;
    HEAP[_time_methods342 + 112] = __str55338;
    HEAP[_time_methods342 + 116] = FUNCTION_TABLE_OFFSET + 226;
    HEAP[_time_methods342 + 124] = _mktime_doc;
    HEAP[_time_methods342 + 128] = __str56339;
    HEAP[_time_methods342 + 132] = FUNCTION_TABLE_OFFSET + 228;
    HEAP[_time_methods342 + 140] = _strftime_doc;
    HEAP[_time_methods342 + 144] = __str57340;
    HEAP[_time_methods342 + 148] = FUNCTION_TABLE_OFFSET + 230;
    HEAP[_time_methods342 + 156] = _strptime_doc;
    HEAP[_time_methods342 + 160] = __str58341;
    HEAP[_time_methods342 + 164] = FUNCTION_TABLE_OFFSET + 232;
    HEAP[_time_methods342 + 172] = _tzset_doc;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
