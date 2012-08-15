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
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct_Py_complex___SIZE = 16;
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _acos_special_values;
  var _c_acos_doc;
  var _acosh_special_values;
  var _c_acosh_doc;
  var _c_asin_doc;
  var _asinh_special_values;
  var _c_asinh_doc;
  var _c_atan_doc;
  var _atanh_special_values;
  var _c_atanh_doc;
  var _c_cos_doc;
  var _cosh_special_values;
  var _c_cosh_doc;
  var _exp_special_values;
  var _c_exp_doc;
  var _log_special_values;
  var _c_log10_doc;
  var _c_sin_doc;
  var _sinh_special_values;
  var _c_sinh_doc;
  var _sqrt_special_values;
  var _c_sqrt_doc;
  var _c_tan_doc;
  var _tanh_special_values;
  var _c_tanh_doc;
  var __str;
  var _cmath_log_doc;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var _cmath_phase_doc;
  var __str5;
  var __str6;
  var _cmath_polar_doc;
  var __str7;
  var _rect_special_values;
  var _cmath_rect_doc;
  var __str8;
  var _cmath_isnan_doc;
  var _cmath_isinf_doc;
  var _module_doc;
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
  var __str26;
  var __str27;
  var __str28;
  var __str29;
  var _cmath_methods;
  var __str30;
  var __str31;
  var __str32;
  var _ln2;
  var _two_pow_m28;
  var _two_pow_p28;
  var _zero;
  function _special_type($d) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $d_addr = __stackBase__;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$d_addr] = $d;
      var $1 = HEAP[$d_addr];
      var $2 = ___finite($1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 1:
      
      
      if (HEAP[$d_addr] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      var $6 = HEAP[$d_addr];
      var $7 = _copysign(1, $6);
      
      if ($7 == 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 4;
      __label__ = 13;
      break;
     case 4:
      HEAP[$0] = 1;
      __label__ = 13;
      break;
     case 5:
      var $9 = HEAP[$d_addr];
      var $10 = _copysign(1, $9);
      
      if ($10 == 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 3;
      __label__ = 13;
      break;
     case 7:
      HEAP[$0] = 2;
      __label__ = 13;
      break;
     case 8:
      var $12 = HEAP[$d_addr];
      var $13 = ___isnan($12);
      
      if ($13 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = 6;
      __label__ = 13;
      break;
     case 10:
      var $15 = HEAP[$d_addr];
      var $16 = _copysign(1, $15);
      
      if ($16 == 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = 5;
      __label__ = 13;
      break;
     case 12:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 13:
      var $18 = HEAP[$0];
      HEAP[$retval] = $18;
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
  function _c_acos($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 64;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $s1 = __stackBase__ + 16;
      var $s2 = __stackBase__ + 32;
      var $r = __stackBase__ + 48;
      
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $3 = HEAP[$z_addr];
      var $4 = ___finite($3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$z_addr + 8];
      var $8 = ___finite($7);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $10 = ___errno_location();
      HEAP[$10] = 0;
      
      var $12 = HEAP[$z_addr];
      var $13 = _special_type($12);
      
      var $15 = HEAP[$z_addr + 8];
      var $16 = _special_type($15);
      
      var $18 = _acos_special_values + $13 * 112 + $16 * 16;
      
      
      var $21 = HEAP[$18];
      HEAP[$agg_result] = $21;
      
      
      var $24 = HEAP[$18 + 8];
      HEAP[$agg_result + 8] = $24;
      __label__ = 11;
      break;
     case 3:
      
      var $26 = HEAP[$z_addr];
      var $27 = _fabs($26);
      
      if ($27 > 4.4942328371557893e+307) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $30 = HEAP[$z_addr + 8];
      var $31 = _fabs($30);
      
      if ($31 > 4.4942328371557893e+307) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      var $34 = HEAP[$z_addr];
      
      var $36 = HEAP[$z_addr + 8];
      var $37 = _fabs($36);
      var $38 = _atan2($37, $34);
      
      HEAP[$r] = $38;
      
      
      
      if (HEAP[$z_addr] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $44 = HEAP[$z_addr + 8];
      
      
      var $47 = HEAP[$z_addr + 8] / 2;
      
      
      var $50 = HEAP[$z_addr] / 2;
      var $51 = _hypot($50, $47);
      var $52 = _llvm_log_f64($51);
      var $53 = $52 + 1.3862943611198906;
      var $54 = _copysign($53, $44);
      var $55 = 0 - $54;
      
      HEAP[$r + 8] = $55;
      __label__ = 8;
      break;
     case 7:
      
      
      var $59 = 0 - HEAP[$z_addr + 8];
      
      
      var $62 = HEAP[$z_addr + 8] / 2;
      
      
      var $65 = HEAP[$z_addr] / 2;
      var $66 = _hypot($65, $62);
      var $67 = _llvm_log_f64($66);
      var $68 = $67 + 1.3862943611198906;
      var $69 = _copysign($68, $59);
      
      HEAP[$r + 8] = $69;
      __label__ = 8;
      break;
     case 8:
      __label__ = 10;
      break;
     case 9:
      
      
      var $73 = 1 - HEAP[$z_addr];
      
      HEAP[$s1] = $73;
      
      
      var $77 = 0 - HEAP[$z_addr + 8];
      
      HEAP[$s1 + 8] = $77;
      
      var $val = HEAP[$s1];
      
      var $val10 = HEAP[$s1 + 8];
      _c_sqrt($s1, $val, $val10);
      
      
      var $81 = HEAP[$z_addr] + 1;
      
      HEAP[$s2] = $81;
      
      var $84 = HEAP[$z_addr + 8];
      
      HEAP[$s2 + 8] = $84;
      
      var $val12 = HEAP[$s2];
      
      var $val14 = HEAP[$s2 + 8];
      _c_sqrt($s2, $val12, $val14);
      
      var $87 = HEAP[$s2];
      
      var $89 = HEAP[$s1];
      var $90 = _atan2($89, $87);
      var $91 = $90 * 2;
      
      HEAP[$r] = $91;
      
      
      
      
      
      
      
      
      
      
      var $103 = HEAP[$s2] * HEAP[$s1 + 8] - HEAP[$s2 + 8] * HEAP[$s1];
      var $104 = _asinh($103);
      
      HEAP[$r + 8] = $104;
      __label__ = 10;
      break;
     case 10:
      var $106 = ___errno_location();
      HEAP[$106] = 0;
      
      
      var $109 = HEAP[$r];
      HEAP[$agg_result] = $109;
      
      
      var $112 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $112;
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
  function _c_acosh($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 64;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $s1 = __stackBase__ + 16;
      var $s2 = __stackBase__ + 32;
      var $r = __stackBase__ + 48;
      
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $3 = HEAP[$z_addr];
      var $4 = ___finite($3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$z_addr + 8];
      var $8 = ___finite($7);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $10 = ___errno_location();
      HEAP[$10] = 0;
      
      var $12 = HEAP[$z_addr];
      var $13 = _special_type($12);
      
      var $15 = HEAP[$z_addr + 8];
      var $16 = _special_type($15);
      
      var $18 = _acosh_special_values + $13 * 112 + $16 * 16;
      
      
      var $21 = HEAP[$18];
      HEAP[$agg_result] = $21;
      
      
      var $24 = HEAP[$18 + 8];
      HEAP[$agg_result + 8] = $24;
      __label__ = 8;
      break;
     case 3:
      
      var $26 = HEAP[$z_addr];
      var $27 = _fabs($26);
      
      if ($27 > 4.4942328371557893e+307) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $30 = HEAP[$z_addr + 8];
      var $31 = _fabs($30);
      
      if ($31 > 4.4942328371557893e+307) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $35 = HEAP[$z_addr + 8] / 2;
      
      
      var $38 = HEAP[$z_addr] / 2;
      var $39 = _hypot($38, $35);
      var $40 = _llvm_log_f64($39);
      var $41 = $40 + 1.3862943611198906;
      
      HEAP[$r] = $41;
      
      var $44 = HEAP[$z_addr];
      
      var $46 = HEAP[$z_addr + 8];
      var $47 = _atan2($46, $44);
      
      HEAP[$r + 8] = $47;
      __label__ = 7;
      break;
     case 6:
      
      
      var $51 = HEAP[$z_addr] - 1;
      
      HEAP[$s1] = $51;
      
      var $54 = HEAP[$z_addr + 8];
      
      HEAP[$s1 + 8] = $54;
      
      var $val = HEAP[$s1];
      
      var $val7 = HEAP[$s1 + 8];
      _c_sqrt($s1, $val, $val7);
      
      
      var $58 = HEAP[$z_addr] + 1;
      
      HEAP[$s2] = $58;
      
      var $61 = HEAP[$z_addr + 8];
      
      HEAP[$s2 + 8] = $61;
      
      var $val9 = HEAP[$s2];
      
      var $val11 = HEAP[$s2 + 8];
      _c_sqrt($s2, $val9, $val11);
      
      
      
      
      
      
      
      
      
      
      var $73 = HEAP[$s1] * HEAP[$s2] + HEAP[$s1 + 8] * HEAP[$s2 + 8];
      var $74 = _asinh($73);
      
      HEAP[$r] = $74;
      
      var $77 = HEAP[$s2];
      
      var $79 = HEAP[$s1 + 8];
      var $80 = _atan2($79, $77);
      var $81 = $80 * 2;
      
      HEAP[$r + 8] = $81;
      __label__ = 7;
      break;
     case 7:
      var $83 = ___errno_location();
      HEAP[$83] = 0;
      
      
      var $86 = HEAP[$r];
      HEAP[$agg_result] = $86;
      
      
      var $89 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $89;
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
  function _c_asin($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $s = __stackBase__ + 16;
      var $r = __stackBase__ + 32;
      
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      
      var $4 = 0 - HEAP[$z_addr + 8];
      
      HEAP[$s] = $4;
      
      var $7 = HEAP[$z_addr];
      
      HEAP[$s + 8] = $7;
      
      var $val = HEAP[$s];
      
      var $val2 = HEAP[$s + 8];
      _c_asinh($s, $val, $val2);
      
      var $10 = HEAP[$s + 8];
      
      HEAP[$r] = $10;
      
      
      var $14 = 0 - HEAP[$s];
      
      HEAP[$r + 8] = $14;
      
      
      var $18 = HEAP[$r];
      HEAP[$agg_result] = $18;
      
      
      var $21 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $21;
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_asinh($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 64;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $s1 = __stackBase__ + 16;
      var $s2 = __stackBase__ + 32;
      var $r = __stackBase__ + 48;
      
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $3 = HEAP[$z_addr];
      var $4 = ___finite($3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$z_addr + 8];
      var $8 = ___finite($7);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $10 = ___errno_location();
      HEAP[$10] = 0;
      
      var $12 = HEAP[$z_addr];
      var $13 = _special_type($12);
      
      var $15 = HEAP[$z_addr + 8];
      var $16 = _special_type($15);
      
      var $18 = _asinh_special_values + $13 * 112 + $16 * 16;
      
      
      var $21 = HEAP[$18];
      HEAP[$agg_result] = $21;
      
      
      var $24 = HEAP[$18 + 8];
      HEAP[$agg_result + 8] = $24;
      __label__ = 11;
      break;
     case 3:
      
      var $26 = HEAP[$z_addr];
      var $27 = _fabs($26);
      
      if ($27 > 4.4942328371557893e+307) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $30 = HEAP[$z_addr + 8];
      var $31 = _fabs($30);
      
      if ($31 > 4.4942328371557893e+307) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      
      
      if (HEAP[$z_addr + 8] >= 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $37 = HEAP[$z_addr];
      
      
      var $40 = HEAP[$z_addr + 8] / 2;
      
      
      var $43 = HEAP[$z_addr] / 2;
      var $44 = _hypot($43, $40);
      var $45 = _llvm_log_f64($44);
      var $46 = $45 + 1.3862943611198906;
      var $47 = _copysign($46, $37);
      
      HEAP[$r] = $47;
      __label__ = 8;
      break;
     case 7:
      
      
      var $51 = 0 - HEAP[$z_addr];
      
      
      var $54 = HEAP[$z_addr + 8] / 2;
      
      
      var $57 = HEAP[$z_addr] / 2;
      var $58 = _hypot($57, $54);
      var $59 = _llvm_log_f64($58);
      var $60 = $59 + 1.3862943611198906;
      var $61 = _copysign($60, $51);
      var $62 = 0 - $61;
      
      HEAP[$r] = $62;
      __label__ = 8;
      break;
     case 8:
      
      var $65 = HEAP[$z_addr];
      var $66 = _fabs($65);
      
      var $68 = HEAP[$z_addr + 8];
      var $69 = _atan2($68, $66);
      
      HEAP[$r + 8] = $69;
      __label__ = 10;
      break;
     case 9:
      
      
      var $73 = HEAP[$z_addr + 8] + 1;
      
      HEAP[$s1] = $73;
      
      
      var $77 = 0 - HEAP[$z_addr];
      
      HEAP[$s1 + 8] = $77;
      
      var $val = HEAP[$s1];
      
      var $val10 = HEAP[$s1 + 8];
      _c_sqrt($s1, $val, $val10);
      
      
      var $81 = 1 - HEAP[$z_addr + 8];
      
      HEAP[$s2] = $81;
      
      var $84 = HEAP[$z_addr];
      
      HEAP[$s2 + 8] = $84;
      
      var $val12 = HEAP[$s2];
      
      var $val14 = HEAP[$s2 + 8];
      _c_sqrt($s2, $val12, $val14);
      
      
      
      
      
      
      
      
      
      
      var $96 = HEAP[$s1] * HEAP[$s2 + 8] - HEAP[$s2] * HEAP[$s1 + 8];
      var $97 = _asinh($96);
      
      HEAP[$r] = $97;
      
      
      
      
      
      
      
      
      
      
      var $109 = HEAP[$s1] * HEAP[$s2] - HEAP[$s1 + 8] * HEAP[$s2 + 8];
      
      var $111 = HEAP[$z_addr + 8];
      var $112 = _atan2($111, $109);
      
      HEAP[$r + 8] = $112;
      __label__ = 10;
      break;
     case 10:
      var $114 = ___errno_location();
      HEAP[$114] = 0;
      
      
      var $117 = HEAP[$r];
      HEAP[$agg_result] = $117;
      
      
      var $120 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $120;
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
  function _c_atan($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $s = __stackBase__ + 16;
      var $r = __stackBase__ + 32;
      
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      
      var $4 = 0 - HEAP[$z_addr + 8];
      
      HEAP[$s] = $4;
      
      var $7 = HEAP[$z_addr];
      
      HEAP[$s + 8] = $7;
      
      var $val = HEAP[$s];
      
      var $val2 = HEAP[$s + 8];
      _c_atanh($s, $val, $val2);
      
      var $10 = HEAP[$s + 8];
      
      HEAP[$r] = $10;
      
      
      var $14 = 0 - HEAP[$s];
      
      HEAP[$r + 8] = $14;
      
      
      var $18 = HEAP[$r];
      HEAP[$agg_result] = $18;
      
      
      var $21 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $21;
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_atan2($z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 24;
      
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $4 = HEAP[$z_addr];
      var $5 = ___isnan($4);
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $8 = HEAP[$z_addr + 8];
      var $9 = ___isnan($8);
      
      if ($9 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = NaN;
      __label__ = 15;
      break;
     case 3:
      
      var $12 = HEAP[$z_addr + 8];
      var $13 = ___isinf($12);
      
      if ($13 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      
      var $16 = HEAP[$z_addr];
      var $17 = ___isinf($16);
      
      if ($17 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      var $20 = HEAP[$z_addr];
      var $21 = _copysign(1, $20);
      
      if ($21 == 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $24 = HEAP[$z_addr + 8];
      var $25 = _copysign(.7853981633974483, $24);
      HEAP[$0] = $25;
      __label__ = 15;
      break;
     case 7:
      
      var $27 = HEAP[$z_addr + 8];
      var $28 = _copysign(2.356194490192345, $27);
      HEAP[$0] = $28;
      __label__ = 15;
      break;
     case 8:
      
      var $30 = HEAP[$z_addr + 8];
      var $31 = _copysign(1.5707963267948966, $30);
      HEAP[$0] = $31;
      __label__ = 15;
      break;
     case 9:
      
      var $33 = HEAP[$z_addr];
      var $34 = ___isinf($33);
      
      if ($34 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      if (HEAP[$z_addr + 8] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      var $40 = HEAP[$z_addr];
      var $41 = _copysign(1, $40);
      
      if ($41 == 1) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      var $44 = HEAP[$z_addr + 8];
      var $45 = _copysign(0, $44);
      HEAP[$0] = $45;
      __label__ = 15;
      break;
     case 13:
      
      var $47 = HEAP[$z_addr + 8];
      var $48 = _copysign(3.141592653589793, $47);
      HEAP[$0] = $48;
      __label__ = 15;
      break;
     case 14:
      
      var $50 = HEAP[$z_addr];
      
      var $52 = HEAP[$z_addr + 8];
      var $53 = _atan2($52, $50);
      HEAP[$0] = $53;
      __label__ = 15;
      break;
     case 15:
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
  function _c_atanh($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 80;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 80);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $0 = __stackBase__ + 16;
      var $1 = __stackBase__ + 32;
      var $r = __stackBase__ + 48;
      var $ay = __stackBase__ + 64;
      var $h = __stackBase__ + 72;
      
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $5 = HEAP[$z_addr];
      var $6 = ___finite($5);
      
      if ($6 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $9 = HEAP[$z_addr + 8];
      var $10 = ___finite($9);
      
      if ($10 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $12 = ___errno_location();
      HEAP[$12] = 0;
      
      var $14 = HEAP[$z_addr];
      var $15 = _special_type($14);
      
      var $17 = HEAP[$z_addr + 8];
      var $18 = _special_type($17);
      
      var $20 = _atanh_special_values + $15 * 112 + $18 * 16;
      
      
      var $23 = HEAP[$20];
      HEAP[$agg_result] = $23;
      
      
      var $26 = HEAP[$20 + 8];
      HEAP[$agg_result + 8] = $26;
      __label__ = 16;
      break;
     case 3:
      
      
      
      if (HEAP[$z_addr] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $val = HEAP[$z_addr];
      
      var $val5 = HEAP[$z_addr + 8];
      __Py_c_neg($1, $val, $val5);
      
      var $val7 = HEAP[$1];
      
      var $val9 = HEAP[$1 + 8];
      _c_atanh($0, $val7, $val9);
      
      var $val11 = HEAP[$0];
      
      var $val13 = HEAP[$0 + 8];
      __Py_c_neg($agg_result, $val11, $val13);
      __label__ = 16;
      break;
     case 5:
      
      var $31 = HEAP[$z_addr + 8];
      var $32 = _fabs($31);
      HEAP[$ay] = $32;
      
      
      
      if (HEAP[$z_addr] > 6.703903964971298e+153) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if (HEAP[$ay] > 6.703903964971298e+153) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $40 = HEAP[$z_addr + 8] / 2;
      
      
      var $43 = HEAP[$z_addr] / 2;
      var $44 = _hypot($43, $40);
      HEAP[$h] = $44;
      
      
      
      
      
      
      var $51 = HEAP[$z_addr] / 4 / HEAP[$h] / HEAP[$h];
      
      HEAP[$r] = $51;
      
      
      var $55 = 0 - HEAP[$z_addr + 8];
      var $56 = _copysign(1.5707963267948966, $55);
      var $57 = 0 - $56;
      
      HEAP[$r + 8] = $57;
      var $59 = ___errno_location();
      HEAP[$59] = 0;
      __label__ = 15;
      break;
     case 8:
      
      
      
      if (HEAP[$z_addr] != 1) {
        __label__ = 14;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$ay] >= 1.4916681462400413e-154) {
        __label__ = 14;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if (HEAP[$ay] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      HEAP[$r] = Infinity;
      
      var $69 = HEAP[$z_addr + 8];
      
      HEAP[$r + 8] = $69;
      var $71 = ___errno_location();
      HEAP[$71] = 33;
      __label__ = 13;
      break;
     case 12:
      var $72 = HEAP[$ay];
      var $73 = _sqrt($72);
      var $74 = HEAP[$ay];
      var $75 = _hypot($74, 2);
      var $76 = _sqrt($75);
      var $77 = $73 / $76;
      var $78 = _llvm_log_f64($77);
      var $79 = 0 - $78;
      
      HEAP[$r] = $79;
      
      var $82 = HEAP[$z_addr + 8];
      
      var $84 = 0 - HEAP[$ay];
      var $85 = _atan2(2, $84);
      var $86 = $85 / 2;
      var $87 = _copysign($86, $82);
      
      HEAP[$r + 8] = $87;
      var $89 = ___errno_location();
      HEAP[$89] = 0;
      __label__ = 13;
      break;
     case 13:
      __label__ = 15;
      break;
     case 14:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $104 = HEAP[$z_addr] * 4 / ((1 - HEAP[$z_addr]) * (1 - HEAP[$z_addr]) + HEAP[$ay] * HEAP[$ay]);
      var $105 = _log1p($104);
      var $106 = $105 / 4;
      
      HEAP[$r] = $106;
      
      
      
      
      
      
      
      
      
      
      var $118 = (1 - HEAP[$z_addr]) * (HEAP[$z_addr] + 1) - HEAP[$ay] * HEAP[$ay];
      
      
      var $121 = HEAP[$z_addr + 8] * -2;
      var $122 = _atan2($121, $118);
      var $123 = $122 / -2;
      
      HEAP[$r + 8] = $123;
      var $125 = ___errno_location();
      HEAP[$125] = 0;
      __label__ = 15;
      break;
     case 15:
      
      
      var $128 = HEAP[$r];
      HEAP[$agg_result] = $128;
      
      
      var $131 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $131;
      __label__ = 16;
      break;
     case 16:
      __label__ = 17;
      break;
     case 17:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_cos($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $r = __stackBase__ + 16;
      
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      
      var $4 = 0 - HEAP[$z_addr + 8];
      
      HEAP[$r] = $4;
      
      var $7 = HEAP[$z_addr];
      
      HEAP[$r + 8] = $7;
      
      var $val = HEAP[$r];
      
      var $val2 = HEAP[$r + 8];
      _c_cosh($r, $val, $val2);
      
      
      var $11 = HEAP[$r];
      HEAP[$agg_result] = $11;
      
      
      var $14 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $14;
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_cosh($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $r = __stackBase__ + 16;
      var $x_minus_one = __stackBase__ + 32;
      
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $3 = HEAP[$z_addr];
      var $4 = ___finite($3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$z_addr + 8];
      var $8 = ___finite($7);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 2:
      
      var $11 = HEAP[$z_addr];
      var $12 = ___isinf($11);
      
      if ($12 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $15 = HEAP[$z_addr + 8];
      var $16 = ___finite($15);
      
      if ($16 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      if (HEAP[$z_addr + 8] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      if (HEAP[$z_addr] > 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $25 = HEAP[$z_addr + 8];
      var $26 = _cos($25);
      var $27 = _copysign(Infinity, $26);
      
      HEAP[$r] = $27;
      
      var $30 = HEAP[$z_addr + 8];
      var $31 = _sin($30);
      var $32 = _copysign(Infinity, $31);
      
      HEAP[$r + 8] = $32;
      __label__ = 8;
      break;
     case 7:
      
      var $35 = HEAP[$z_addr + 8];
      var $36 = _cos($35);
      var $37 = _copysign(Infinity, $36);
      
      HEAP[$r] = $37;
      
      var $40 = HEAP[$z_addr + 8];
      var $41 = _sin($40);
      var $42 = _copysign(Infinity, $41);
      var $43 = 0 - $42;
      
      HEAP[$r + 8] = $43;
      __label__ = 8;
      break;
     case 8:
      __label__ = 10;
      break;
     case 9:
      
      var $46 = HEAP[$z_addr];
      var $47 = _special_type($46);
      
      var $49 = HEAP[$z_addr + 8];
      var $50 = _special_type($49);
      
      var $52 = _cosh_special_values + $47 * 112 + $50 * 16;
      
      
      var $55 = HEAP[$52];
      HEAP[$r] = $55;
      
      
      var $58 = HEAP[$52 + 8];
      HEAP[$r + 8] = $58;
      __label__ = 10;
      break;
     case 10:
      
      var $60 = HEAP[$z_addr + 8];
      var $61 = ___isinf($60);
      
      if ($61 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $64 = HEAP[$z_addr];
      var $65 = ___isnan($64);
      
      if ($65 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $67 = ___errno_location();
      HEAP[$67] = 33;
      __label__ = 14;
      break;
     case 13:
      var $68 = ___errno_location();
      HEAP[$68] = 0;
      __label__ = 14;
      break;
     case 14:
      
      
      var $71 = HEAP[$r];
      HEAP[$agg_result] = $71;
      
      
      var $74 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $74;
      __label__ = 23;
      break;
     case 15:
      
      var $76 = HEAP[$z_addr];
      var $77 = _fabs($76);
      var $78 = _llvm_log_f64(4.4942328371557893e+307);
      
      if ($77 > $78) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      var $81 = HEAP[$z_addr];
      
      var $83 = HEAP[$z_addr];
      var $84 = _copysign(1, $83);
      var $85 = $81 - $84;
      HEAP[$x_minus_one] = $85;
      
      var $87 = HEAP[$z_addr + 8];
      var $88 = _cos($87);
      var $89 = HEAP[$x_minus_one];
      var $90 = _cosh($89);
      
      var $92 = $88 * $90 * 2.718281828459045;
      
      HEAP[$r] = $92;
      
      var $95 = HEAP[$z_addr + 8];
      var $96 = _sin($95);
      var $97 = HEAP[$x_minus_one];
      var $98 = _sinh($97);
      
      var $100 = $96 * $98 * 2.718281828459045;
      
      HEAP[$r + 8] = $100;
      __label__ = 18;
      break;
     case 17:
      
      var $103 = HEAP[$z_addr + 8];
      var $104 = _cos($103);
      
      var $106 = HEAP[$z_addr];
      var $107 = _cosh($106);
      var $108 = $104 * $107;
      
      HEAP[$r] = $108;
      
      var $111 = HEAP[$z_addr + 8];
      var $112 = _sin($111);
      
      var $114 = HEAP[$z_addr];
      var $115 = _sinh($114);
      var $116 = $112 * $115;
      
      HEAP[$r + 8] = $116;
      __label__ = 18;
      break;
     case 18:
      
      var $119 = HEAP[$r];
      var $120 = ___isinf($119);
      
      if ($120 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      var $123 = HEAP[$r + 8];
      var $124 = ___isinf($123);
      
      if ($124 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $126 = ___errno_location();
      HEAP[$126] = 34;
      __label__ = 22;
      break;
     case 21:
      var $127 = ___errno_location();
      HEAP[$127] = 0;
      __label__ = 22;
      break;
     case 22:
      
      
      var $130 = HEAP[$r];
      HEAP[$agg_result] = $130;
      
      
      var $133 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $133;
      __label__ = 23;
      break;
     case 23:
      __label__ = 24;
      break;
     case 24:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_exp($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $r = __stackBase__ + 16;
      var $l = __stackBase__ + 32;
      
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $3 = HEAP[$z_addr];
      var $4 = ___finite($3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$z_addr + 8];
      var $8 = ___finite($7);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 2:
      
      var $11 = HEAP[$z_addr];
      var $12 = ___isinf($11);
      
      if ($12 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $15 = HEAP[$z_addr + 8];
      var $16 = ___finite($15);
      
      if ($16 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      if (HEAP[$z_addr + 8] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      if (HEAP[$z_addr] > 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $25 = HEAP[$z_addr + 8];
      var $26 = _cos($25);
      var $27 = _copysign(Infinity, $26);
      
      HEAP[$r] = $27;
      
      var $30 = HEAP[$z_addr + 8];
      var $31 = _sin($30);
      var $32 = _copysign(Infinity, $31);
      
      HEAP[$r + 8] = $32;
      __label__ = 8;
      break;
     case 7:
      
      var $35 = HEAP[$z_addr + 8];
      var $36 = _cos($35);
      var $37 = _copysign(0, $36);
      
      HEAP[$r] = $37;
      
      var $40 = HEAP[$z_addr + 8];
      var $41 = _sin($40);
      var $42 = _copysign(0, $41);
      
      HEAP[$r + 8] = $42;
      __label__ = 8;
      break;
     case 8:
      __label__ = 10;
      break;
     case 9:
      
      var $45 = HEAP[$z_addr];
      var $46 = _special_type($45);
      
      var $48 = HEAP[$z_addr + 8];
      var $49 = _special_type($48);
      
      var $51 = _exp_special_values + $46 * 112 + $49 * 16;
      
      
      var $54 = HEAP[$51];
      HEAP[$r] = $54;
      
      
      var $57 = HEAP[$51 + 8];
      HEAP[$r + 8] = $57;
      __label__ = 10;
      break;
     case 10:
      
      var $59 = HEAP[$z_addr + 8];
      var $60 = ___isinf($59);
      
      if ($60 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $63 = HEAP[$z_addr];
      var $64 = ___finite($63);
      
      if ($64 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      var $67 = HEAP[$z_addr];
      var $68 = ___isinf($67);
      
      if ($68 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      if (HEAP[$z_addr] > 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $73 = ___errno_location();
      HEAP[$73] = 33;
      __label__ = 16;
      break;
     case 15:
      var $74 = ___errno_location();
      HEAP[$74] = 0;
      __label__ = 16;
      break;
     case 16:
      
      
      var $77 = HEAP[$r];
      HEAP[$agg_result] = $77;
      
      
      var $80 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $80;
      __label__ = 25;
      break;
     case 17:
      
      var $82 = HEAP[$z_addr];
      var $83 = _llvm_log_f64(4.4942328371557893e+307);
      
      if ($82 > $83) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      var $87 = HEAP[$z_addr] - 1;
      var $88 = _llvm_exp_f64($87);
      HEAP[$l] = $88;
      
      var $90 = HEAP[$z_addr + 8];
      var $91 = _cos($90);
      
      
      var $94 = $91 * HEAP[$l] * 2.718281828459045;
      
      HEAP[$r] = $94;
      
      var $97 = HEAP[$z_addr + 8];
      var $98 = _sin($97);
      
      
      var $101 = $98 * HEAP[$l] * 2.718281828459045;
      
      HEAP[$r + 8] = $101;
      __label__ = 20;
      break;
     case 19:
      
      var $104 = HEAP[$z_addr];
      var $105 = _llvm_exp_f64($104);
      HEAP[$l] = $105;
      
      var $107 = HEAP[$z_addr + 8];
      var $108 = _cos($107);
      
      var $110 = $108 * HEAP[$l];
      
      HEAP[$r] = $110;
      
      var $113 = HEAP[$z_addr + 8];
      var $114 = _sin($113);
      
      var $116 = $114 * HEAP[$l];
      
      HEAP[$r + 8] = $116;
      __label__ = 20;
      break;
     case 20:
      
      var $119 = HEAP[$r];
      var $120 = ___isinf($119);
      
      if ($120 != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      var $123 = HEAP[$r + 8];
      var $124 = ___isinf($123);
      
      if ($124 != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      var $126 = ___errno_location();
      HEAP[$126] = 34;
      __label__ = 24;
      break;
     case 23:
      var $127 = ___errno_location();
      HEAP[$127] = 0;
      __label__ = 24;
      break;
     case 24:
      
      
      var $130 = HEAP[$r];
      HEAP[$agg_result] = $130;
      
      
      var $133 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $133;
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
  function _c_log($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 88;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 88);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $iftmp_1 = __stackBase__ + 16;
      var $iftmp_0 = __stackBase__ + 24;
      var $r = __stackBase__ + 32;
      var $ax = __stackBase__ + 48;
      var $ay = __stackBase__ + 56;
      var $am = __stackBase__ + 64;
      var $an = __stackBase__ + 72;
      var $h = __stackBase__ + 80;
      
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $3 = HEAP[$z_addr];
      var $4 = ___finite($3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$z_addr + 8];
      var $8 = ___finite($7);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $10 = ___errno_location();
      HEAP[$10] = 0;
      
      var $12 = HEAP[$z_addr];
      var $13 = _special_type($12);
      
      var $15 = HEAP[$z_addr + 8];
      var $16 = _special_type($15);
      
      var $18 = _log_special_values + $13 * 112 + $16 * 16;
      
      
      var $21 = HEAP[$18];
      HEAP[$agg_result] = $21;
      
      
      var $24 = HEAP[$18 + 8];
      HEAP[$agg_result + 8] = $24;
      __label__ = 23;
      break;
     case 3:
      
      var $26 = HEAP[$z_addr];
      var $27 = _fabs($26);
      HEAP[$ax] = $27;
      
      var $29 = HEAP[$z_addr + 8];
      var $30 = _fabs($29);
      HEAP[$ay] = $30;
      
      
      if (HEAP[$ax] > 4.4942328371557893e+307) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if (HEAP[$ay] > 4.4942328371557893e+307) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $36 = HEAP[$ay] / 2;
      
      var $38 = HEAP[$ax] / 2;
      var $39 = _hypot($38, $36);
      var $40 = _llvm_log_f64($39);
      var $41 = $40 + .6931471805599453;
      
      HEAP[$r] = $41;
      __label__ = 22;
      break;
     case 6:
      
      
      if (HEAP[$ax] >= 2.2250738585072014e-308) {
        __label__ = 12;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if (HEAP[$ay] >= 2.2250738585072014e-308) {
        __label__ = 12;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      if (HEAP[$ax] > 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$ay] > 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $51 = HEAP[$ay];
      var $52 = _ldexp($51, 53);
      var $53 = HEAP[$ax];
      var $54 = _ldexp($53, 53);
      var $55 = _hypot($54, $52);
      var $56 = _llvm_log_f64($55);
      var $57 = $56 - 36.7368005696771;
      
      HEAP[$r] = $57;
      __label__ = 22;
      break;
     case 11:
      
      HEAP[$r] = -Infinity;
      
      var $61 = HEAP[$z_addr];
      
      var $63 = HEAP[$z_addr + 8];
      var $64 = _atan2($63, $61);
      
      HEAP[$r + 8] = $64;
      var $66 = ___errno_location();
      HEAP[$66] = 33;
      
      
      var $69 = HEAP[$r];
      HEAP[$agg_result] = $69;
      
      
      var $72 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $72;
      __label__ = 23;
      break;
     case 12:
      var $73 = HEAP[$ax];
      var $74 = HEAP[$ay];
      var $75 = _hypot($73, $74);
      HEAP[$h] = $75;
      
      
      if (HEAP[$h] < .71) {
        __label__ = 21;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      if (HEAP[$h] > 1.73) {
        __label__ = 21;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      if (HEAP[$ax] > HEAP[$ay]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $83 = HEAP[$ax];
      HEAP[$iftmp_0] = $83;
      __label__ = 17;
      break;
     case 16:
      var $84 = HEAP[$ay];
      HEAP[$iftmp_0] = $84;
      __label__ = 17;
      break;
     case 17:
      var $85 = HEAP[$iftmp_0];
      HEAP[$am] = $85;
      
      
      
      if (HEAP[$ax] > HEAP[$ay]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $89 = HEAP[$ay];
      HEAP[$iftmp_1] = $89;
      __label__ = 20;
      break;
     case 19:
      var $90 = HEAP[$ax];
      HEAP[$iftmp_1] = $90;
      __label__ = 20;
      break;
     case 20:
      var $91 = HEAP[$iftmp_1];
      HEAP[$an] = $91;
      
      
      
      
      
      
      
      
      var $100 = (HEAP[$am] - 1) * (HEAP[$am] + 1) + HEAP[$an] * HEAP[$an];
      var $101 = _log1p($100);
      var $102 = $101 / 2;
      
      HEAP[$r] = $102;
      __label__ = 22;
      break;
     case 21:
      var $104 = HEAP[$h];
      var $105 = _llvm_log_f64($104);
      
      HEAP[$r] = $105;
      __label__ = 22;
      break;
     case 22:
      
      var $108 = HEAP[$z_addr];
      
      var $110 = HEAP[$z_addr + 8];
      var $111 = _atan2($110, $108);
      
      HEAP[$r + 8] = $111;
      var $113 = ___errno_location();
      HEAP[$113] = 0;
      
      
      var $116 = HEAP[$r];
      HEAP[$agg_result] = $116;
      
      
      var $119 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $119;
      __label__ = 23;
      break;
     case 23:
      __label__ = 24;
      break;
     case 24:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_log10($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $r = __stackBase__ + 16;
      var $errno_save = __stackBase__ + 32;
      
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $val = HEAP[$z_addr];
      
      var $val2 = HEAP[$z_addr + 8];
      _c_log($r, $val, $val2);
      var $2 = ___errno_location();
      var $3 = HEAP[$2];
      HEAP[$errno_save] = $3;
      
      
      var $6 = HEAP[$r] / 2.302585092994046;
      
      HEAP[$r] = $6;
      
      
      var $10 = HEAP[$r + 8] / 2.302585092994046;
      
      HEAP[$r + 8] = $10;
      var $12 = ___errno_location();
      var $13 = HEAP[$errno_save];
      HEAP[$12] = $13;
      
      
      var $16 = HEAP[$r];
      HEAP[$agg_result] = $16;
      
      
      var $19 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $19;
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_sin($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $s = __stackBase__ + 16;
      var $r = __stackBase__ + 32;
      
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      
      var $4 = 0 - HEAP[$z_addr + 8];
      
      HEAP[$s] = $4;
      
      var $7 = HEAP[$z_addr];
      
      HEAP[$s + 8] = $7;
      
      var $val = HEAP[$s];
      
      var $val2 = HEAP[$s + 8];
      _c_sinh($s, $val, $val2);
      
      var $10 = HEAP[$s + 8];
      
      HEAP[$r] = $10;
      
      
      var $14 = 0 - HEAP[$s];
      
      HEAP[$r + 8] = $14;
      
      
      var $18 = HEAP[$r];
      HEAP[$agg_result] = $18;
      
      
      var $21 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $21;
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_sinh($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $r = __stackBase__ + 16;
      var $x_minus_one = __stackBase__ + 32;
      
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $3 = HEAP[$z_addr];
      var $4 = ___finite($3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$z_addr + 8];
      var $8 = ___finite($7);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 2:
      
      var $11 = HEAP[$z_addr];
      var $12 = ___isinf($11);
      
      if ($12 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $15 = HEAP[$z_addr + 8];
      var $16 = ___finite($15);
      
      if ($16 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      if (HEAP[$z_addr + 8] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      if (HEAP[$z_addr] > 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $25 = HEAP[$z_addr + 8];
      var $26 = _cos($25);
      var $27 = _copysign(Infinity, $26);
      
      HEAP[$r] = $27;
      
      var $30 = HEAP[$z_addr + 8];
      var $31 = _sin($30);
      var $32 = _copysign(Infinity, $31);
      
      HEAP[$r + 8] = $32;
      __label__ = 8;
      break;
     case 7:
      
      var $35 = HEAP[$z_addr + 8];
      var $36 = _cos($35);
      var $37 = _copysign(Infinity, $36);
      var $38 = 0 - $37;
      
      HEAP[$r] = $38;
      
      var $41 = HEAP[$z_addr + 8];
      var $42 = _sin($41);
      var $43 = _copysign(Infinity, $42);
      
      HEAP[$r + 8] = $43;
      __label__ = 8;
      break;
     case 8:
      __label__ = 10;
      break;
     case 9:
      
      var $46 = HEAP[$z_addr];
      var $47 = _special_type($46);
      
      var $49 = HEAP[$z_addr + 8];
      var $50 = _special_type($49);
      
      var $52 = _sinh_special_values + $47 * 112 + $50 * 16;
      
      
      var $55 = HEAP[$52];
      HEAP[$r] = $55;
      
      
      var $58 = HEAP[$52 + 8];
      HEAP[$r + 8] = $58;
      __label__ = 10;
      break;
     case 10:
      
      var $60 = HEAP[$z_addr + 8];
      var $61 = ___isinf($60);
      
      if ($61 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $64 = HEAP[$z_addr];
      var $65 = ___isnan($64);
      
      if ($65 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $67 = ___errno_location();
      HEAP[$67] = 33;
      __label__ = 14;
      break;
     case 13:
      var $68 = ___errno_location();
      HEAP[$68] = 0;
      __label__ = 14;
      break;
     case 14:
      
      
      var $71 = HEAP[$r];
      HEAP[$agg_result] = $71;
      
      
      var $74 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $74;
      __label__ = 23;
      break;
     case 15:
      
      var $76 = HEAP[$z_addr];
      var $77 = _fabs($76);
      var $78 = _llvm_log_f64(4.4942328371557893e+307);
      
      if ($77 > $78) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      var $81 = HEAP[$z_addr];
      
      var $83 = HEAP[$z_addr];
      var $84 = _copysign(1, $83);
      var $85 = $81 - $84;
      HEAP[$x_minus_one] = $85;
      
      var $87 = HEAP[$z_addr + 8];
      var $88 = _cos($87);
      var $89 = HEAP[$x_minus_one];
      var $90 = _sinh($89);
      
      var $92 = $88 * $90 * 2.718281828459045;
      
      HEAP[$r] = $92;
      
      var $95 = HEAP[$z_addr + 8];
      var $96 = _sin($95);
      var $97 = HEAP[$x_minus_one];
      var $98 = _cosh($97);
      
      var $100 = $96 * $98 * 2.718281828459045;
      
      HEAP[$r + 8] = $100;
      __label__ = 18;
      break;
     case 17:
      
      var $103 = HEAP[$z_addr + 8];
      var $104 = _cos($103);
      
      var $106 = HEAP[$z_addr];
      var $107 = _sinh($106);
      var $108 = $104 * $107;
      
      HEAP[$r] = $108;
      
      var $111 = HEAP[$z_addr + 8];
      var $112 = _sin($111);
      
      var $114 = HEAP[$z_addr];
      var $115 = _cosh($114);
      var $116 = $112 * $115;
      
      HEAP[$r + 8] = $116;
      __label__ = 18;
      break;
     case 18:
      
      var $119 = HEAP[$r];
      var $120 = ___isinf($119);
      
      if ($120 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      var $123 = HEAP[$r + 8];
      var $124 = ___isinf($123);
      
      if ($124 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $126 = ___errno_location();
      HEAP[$126] = 34;
      __label__ = 22;
      break;
     case 21:
      var $127 = ___errno_location();
      HEAP[$127] = 0;
      __label__ = 22;
      break;
     case 22:
      
      
      var $130 = HEAP[$r];
      HEAP[$agg_result] = $130;
      
      
      var $133 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $133;
      __label__ = 23;
      break;
     case 23:
      __label__ = 24;
      break;
     case 24:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_sqrt($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 64;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $r = __stackBase__ + 16;
      var $s = __stackBase__ + 32;
      var $d = __stackBase__ + 40;
      var $ax = __stackBase__ + 48;
      var $ay = __stackBase__ + 56;
      
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $3 = HEAP[$z_addr];
      var $4 = ___finite($3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$z_addr + 8];
      var $8 = ___finite($7);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $10 = ___errno_location();
      HEAP[$10] = 0;
      
      var $12 = HEAP[$z_addr];
      var $13 = _special_type($12);
      
      var $15 = HEAP[$z_addr + 8];
      var $16 = _special_type($15);
      
      var $18 = _sqrt_special_values + $13 * 112 + $16 * 16;
      
      
      var $21 = HEAP[$18];
      HEAP[$agg_result] = $21;
      
      
      var $24 = HEAP[$18 + 8];
      HEAP[$agg_result + 8] = $24;
      __label__ = 16;
      break;
     case 3:
      
      
      
      if (HEAP[$z_addr] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      if (HEAP[$z_addr + 8] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      HEAP[$r] = 0;
      
      var $33 = HEAP[$z_addr + 8];
      
      HEAP[$r + 8] = $33;
      
      
      var $37 = HEAP[$r];
      HEAP[$agg_result] = $37;
      
      
      var $40 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $40;
      __label__ = 16;
      break;
     case 6:
      
      var $42 = HEAP[$z_addr];
      var $43 = _fabs($42);
      HEAP[$ax] = $43;
      
      var $45 = HEAP[$z_addr + 8];
      var $46 = _fabs($45);
      HEAP[$ay] = $46;
      
      
      if (HEAP[$ax] >= 2.2250738585072014e-308) {
        __label__ = 11;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if (HEAP[$ay] >= 2.2250738585072014e-308) {
        __label__ = 11;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      if (HEAP[$ax] > 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$ay] > 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $55 = HEAP[$ax];
      var $56 = _ldexp($55, 53);
      HEAP[$ax] = $56;
      var $57 = HEAP[$ay];
      var $58 = _ldexp($57, 53);
      var $59 = HEAP[$ax];
      var $60 = _hypot($59, $58);
      
      var $62 = $60 + HEAP[$ax];
      var $63 = _sqrt($62);
      var $64 = _ldexp($63, -27);
      HEAP[$s] = $64;
      __label__ = 12;
      break;
     case 11:
      
      var $66 = HEAP[$ax] / 8;
      HEAP[$ax] = $66;
      
      var $68 = HEAP[$ay] / 8;
      var $69 = HEAP[$ax];
      var $70 = _hypot($69, $68);
      
      var $72 = $70 + HEAP[$ax];
      var $73 = _sqrt($72);
      var $74 = $73 * 2;
      HEAP[$s] = $74;
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $78 = HEAP[$ay] / (HEAP[$s] * 2);
      HEAP[$d] = $78;
      
      
      
      if (HEAP[$z_addr] >= 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      var $83 = HEAP[$s];
      HEAP[$r] = $83;
      
      var $85 = HEAP[$z_addr + 8];
      var $86 = HEAP[$d];
      var $87 = _copysign($86, $85);
      
      HEAP[$r + 8] = $87;
      __label__ = 15;
      break;
     case 14:
      
      var $90 = HEAP[$d];
      HEAP[$r] = $90;
      
      var $92 = HEAP[$z_addr + 8];
      var $93 = HEAP[$s];
      var $94 = _copysign($93, $92);
      
      HEAP[$r + 8] = $94;
      __label__ = 15;
      break;
     case 15:
      var $96 = ___errno_location();
      HEAP[$96] = 0;
      
      
      var $99 = HEAP[$r];
      HEAP[$agg_result] = $99;
      
      
      var $102 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $102;
      __label__ = 16;
      break;
     case 16:
      __label__ = 17;
      break;
     case 17:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_tan($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $s = __stackBase__ + 16;
      var $r = __stackBase__ + 32;
      
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      
      var $4 = 0 - HEAP[$z_addr + 8];
      
      HEAP[$s] = $4;
      
      var $7 = HEAP[$z_addr];
      
      HEAP[$s + 8] = $7;
      
      var $val = HEAP[$s];
      
      var $val2 = HEAP[$s + 8];
      _c_tanh($s, $val, $val2);
      
      var $10 = HEAP[$s + 8];
      
      HEAP[$r] = $10;
      
      
      var $14 = 0 - HEAP[$s];
      
      HEAP[$r + 8] = $14;
      
      
      var $18 = HEAP[$r];
      HEAP[$agg_result] = $18;
      
      
      var $21 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $21;
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_tanh($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 72;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $r = __stackBase__ + 16;
      var $tx = __stackBase__ + 32;
      var $ty = __stackBase__ + 40;
      var $cx = __stackBase__ + 48;
      var $txty = __stackBase__ + 56;
      var $denom = __stackBase__ + 64;
      
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $3 = HEAP[$z_addr];
      var $4 = ___finite($3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$z_addr + 8];
      var $8 = ___finite($7);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 2:
      
      var $11 = HEAP[$z_addr];
      var $12 = ___isinf($11);
      
      if ($12 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $15 = HEAP[$z_addr + 8];
      var $16 = ___finite($15);
      
      if ($16 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      if (HEAP[$z_addr + 8] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      if (HEAP[$z_addr] > 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      HEAP[$r] = 1;
      
      var $26 = HEAP[$z_addr + 8];
      var $27 = _sin($26);
      var $28 = $27 * 2;
      
      var $30 = HEAP[$z_addr + 8];
      var $31 = _cos($30);
      var $32 = $28 * $31;
      var $33 = _copysign(0, $32);
      
      HEAP[$r + 8] = $33;
      __label__ = 8;
      break;
     case 7:
      
      HEAP[$r] = -1;
      
      var $37 = HEAP[$z_addr + 8];
      var $38 = _sin($37);
      var $39 = $38 * 2;
      
      var $41 = HEAP[$z_addr + 8];
      var $42 = _cos($41);
      var $43 = $39 * $42;
      var $44 = _copysign(0, $43);
      
      HEAP[$r + 8] = $44;
      __label__ = 8;
      break;
     case 8:
      __label__ = 10;
      break;
     case 9:
      
      var $47 = HEAP[$z_addr];
      var $48 = _special_type($47);
      
      var $50 = HEAP[$z_addr + 8];
      var $51 = _special_type($50);
      
      var $53 = _tanh_special_values + $48 * 112 + $51 * 16;
      
      
      var $56 = HEAP[$53];
      HEAP[$r] = $56;
      
      
      var $59 = HEAP[$53 + 8];
      HEAP[$r + 8] = $59;
      __label__ = 10;
      break;
     case 10:
      
      var $61 = HEAP[$z_addr + 8];
      var $62 = ___isinf($61);
      
      if ($62 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $65 = HEAP[$z_addr];
      var $66 = ___finite($65);
      
      if ($66 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $68 = ___errno_location();
      HEAP[$68] = 33;
      __label__ = 14;
      break;
     case 13:
      var $69 = ___errno_location();
      HEAP[$69] = 0;
      __label__ = 14;
      break;
     case 14:
      
      
      var $72 = HEAP[$r];
      HEAP[$agg_result] = $72;
      
      
      var $75 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $75;
      __label__ = 19;
      break;
     case 15:
      
      var $77 = HEAP[$z_addr];
      var $78 = _fabs($77);
      var $79 = _llvm_log_f64(4.4942328371557893e+307);
      
      if ($78 > $79) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      var $82 = HEAP[$z_addr];
      var $83 = _copysign(1, $82);
      
      HEAP[$r] = $83;
      
      var $86 = HEAP[$z_addr + 8];
      var $87 = _sin($86);
      var $88 = $87 * 4;
      
      var $90 = HEAP[$z_addr + 8];
      var $91 = _cos($90);
      var $92 = $88 * $91;
      
      var $94 = HEAP[$z_addr];
      var $95 = _fabs($94);
      var $96 = $95 * -2;
      var $97 = _llvm_exp_f64($96);
      var $98 = $92 * $97;
      
      HEAP[$r + 8] = $98;
      __label__ = 18;
      break;
     case 17:
      
      var $101 = HEAP[$z_addr];
      var $102 = _tanh($101);
      HEAP[$tx] = $102;
      
      var $104 = HEAP[$z_addr + 8];
      var $105 = _tan($104);
      HEAP[$ty] = $105;
      
      var $107 = HEAP[$z_addr];
      var $108 = _cosh($107);
      var $109 = 1 / $108;
      HEAP[$cx] = $109;
      
      
      var $112 = HEAP[$tx] * HEAP[$ty];
      HEAP[$txty] = $112;
      
      
      
      var $116 = HEAP[$txty] * HEAP[$txty] + 1;
      HEAP[$denom] = $116;
      
      
      
      
      
      
      
      var $124 = (HEAP[$ty] * HEAP[$ty] + 1) * HEAP[$tx] / HEAP[$denom];
      
      HEAP[$r] = $124;
      
      
      
      
      
      
      var $132 = HEAP[$ty] / HEAP[$denom] * HEAP[$cx] * HEAP[$cx];
      
      HEAP[$r + 8] = $132;
      __label__ = 18;
      break;
     case 18:
      var $134 = ___errno_location();
      HEAP[$134] = 0;
      
      
      var $137 = HEAP[$r];
      HEAP[$agg_result] = $137;
      
      
      var $140 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $140;
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
  function _cmath_log($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 96;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 96);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $y = __stackBase__ + 32;
      var $memtmp = __stackBase__ + 48;
      var $memtmp5 = __stackBase__ + 64;
      var $memtmp10 = __stackBase__ + 80;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str, allocate([ $x, 0, 0, 0, $y, 0, 0, 0 ], [ "%struct.Py_complex*", 0, 0, 0, "%struct.Py_complex*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = ___errno_location();
      HEAP[$4] = 0;
      
      var $val = HEAP[$x];
      
      var $val3 = HEAP[$x + 8];
      _c_log($memtmp, $val, $val3);
      
      
      var $7 = HEAP[$memtmp];
      HEAP[$x] = $7;
      
      
      var $10 = HEAP[$memtmp + 8];
      HEAP[$x + 8] = $10;
      
      
      
      
      
      if (HEAP[HEAP[$args_addr] + 8] == 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $val7 = HEAP[$y];
      
      var $val9 = HEAP[$y + 8];
      _c_log($memtmp5, $val7, $val9);
      
      
      var $18 = HEAP[$memtmp5];
      HEAP[$y] = $18;
      
      
      var $21 = HEAP[$memtmp5 + 8];
      HEAP[$y + 8] = $21;
      
      var $val12 = HEAP[$x];
      
      var $val14 = HEAP[$x + 8];
      
      var $val16 = HEAP[$y];
      
      var $val18 = HEAP[$y + 8];
      __Py_c_quot($memtmp10, $val12, $val14, $val16, $val18);
      
      
      var $24 = HEAP[$memtmp10];
      HEAP[$x] = $24;
      
      
      var $27 = HEAP[$memtmp10 + 8];
      HEAP[$x + 8] = $27;
      __label__ = 4;
      break;
     case 4:
      var $28 = ___errno_location();
      
      
      if (HEAP[$28] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $31 = _math_error();
      HEAP[$0] = $31;
      __label__ = 7;
      break;
     case 6:
      
      var $val23 = HEAP[$x];
      
      var $val25 = HEAP[$x + 8];
      var $32 = _PyComplex_FromCComplex($val23, $val25);
      HEAP[$0] = $32;
      __label__ = 7;
      break;
     case 7:
      var $33 = HEAP[$0];
      HEAP[$retval] = $33;
      __label__ = 8;
      break;
     case 8:
      var $retval27 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_error() {
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
      
      var $1 = ___errno_location();
      
      
      if (HEAP[$1] == 33) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($4, __str1);
      __label__ = 5;
      break;
     case 2:
      var $5 = ___errno_location();
      
      
      if (HEAP[$5] == 34) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($8, __str2);
      __label__ = 5;
      break;
     case 4:
      var $9 = HEAP[_PyExc_ValueError];
      var $10 = _PyErr_SetFromErrno($9);
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
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
  function _math_1($args, $func) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $args_addr = __stackBase__;
      var $func_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $r = __stackBase__ + 32;
      
      HEAP[$args_addr] = $args;
      HEAP[$func_addr] = $func;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str3, allocate([ $x, 0, 0, 0 ], [ "%struct.Py_complex*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = ___errno_location();
      HEAP[$4] = 0;
      var $5 = HEAP[$func_addr];
      
      var $val = HEAP[$x];
      
      var $val3 = HEAP[$x + 8];
      FUNCTION_TABLE[$5]($r, $val, $val3);
      var $6 = ___errno_location();
      
      
      if (HEAP[$6] == 33) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($9, __str1);
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 4:
      var $10 = ___errno_location();
      
      
      if (HEAP[$10] == 34) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $13 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($13, __str2);
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 6:
      
      var $val9 = HEAP[$r];
      
      var $val11 = HEAP[$r + 8];
      var $14 = _PyComplex_FromCComplex($val9, $val11);
      HEAP[$0] = $14;
      __label__ = 7;
      break;
     case 7:
      var $15 = HEAP[$0];
      HEAP[$retval] = $15;
      __label__ = 8;
      break;
     case 8:
      var $retval13 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cmath_acos($self, $args) {
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
      var $1 = HEAP[$args_addr];
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 2);
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
  function _cmath_acosh($self, $args) {
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
      var $1 = HEAP[$args_addr];
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 4);
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
  function _cmath_asin($self, $args) {
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
      var $1 = HEAP[$args_addr];
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 6);
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
  function _cmath_asinh($self, $args) {
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
      var $1 = HEAP[$args_addr];
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 8);
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
  function _cmath_atan($self, $args) {
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
      var $1 = HEAP[$args_addr];
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 10);
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
  function _cmath_atanh($self, $args) {
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
      var $1 = HEAP[$args_addr];
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 12);
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
  function _cmath_cos($self, $args) {
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
      var $1 = HEAP[$args_addr];
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 14);
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
  function _cmath_cosh($self, $args) {
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
      var $1 = HEAP[$args_addr];
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 16);
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
  function _cmath_exp($self, $args) {
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
      var $1 = HEAP[$args_addr];
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 18);
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
  function _cmath_log10($self, $args) {
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
      var $1 = HEAP[$args_addr];
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 20);
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
  function _cmath_sin($self, $args) {
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
      var $1 = HEAP[$args_addr];
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 22);
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
  function _cmath_sinh($self, $args) {
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
      var $1 = HEAP[$args_addr];
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 24);
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
  function _cmath_sqrt($self, $args) {
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
      var $1 = HEAP[$args_addr];
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 26);
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
  function _cmath_tan($self, $args) {
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
      var $1 = HEAP[$args_addr];
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 28);
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
  function _cmath_tanh($self, $args) {
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
      var $1 = HEAP[$args_addr];
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 30);
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
  function _cmath_phase($self, $args) {
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
      var $z = __stackBase__ + 16;
      var $phi = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str4, allocate([ $z, 0, 0, 0 ], [ "%struct.Py_complex*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = ___errno_location();
      HEAP[$4] = 0;
      
      var $val = HEAP[$z];
      
      var $val3 = HEAP[$z + 8];
      var $5 = _c_atan2($val, $val3);
      HEAP[$phi] = $5;
      var $6 = ___errno_location();
      
      
      if (HEAP[$6] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = _math_error();
      HEAP[$0] = $9;
      __label__ = 5;
      break;
     case 4:
      var $10 = HEAP[$phi];
      var $11 = _PyFloat_FromDouble($10);
      HEAP[$0] = $11;
      __label__ = 5;
      break;
     case 5:
      var $12 = HEAP[$0];
      HEAP[$retval] = $12;
      __label__ = 6;
      break;
     case 6:
      var $retval7 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cmath_polar($self, $args) {
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
      var $z = __stackBase__ + 16;
      var $r = __stackBase__ + 32;
      var $phi = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str5, allocate([ $z, 0, 0, 0 ], [ "%struct.Py_complex*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $val = HEAP[$z];
      
      var $val3 = HEAP[$z + 8];
      var $4 = _c_atan2($val, $val3);
      HEAP[$phi] = $4;
      
      var $val5 = HEAP[$z];
      
      var $val7 = HEAP[$z + 8];
      var $5 = __Py_c_abs($val5, $val7);
      HEAP[$r] = $5;
      var $6 = ___errno_location();
      
      
      if (HEAP[$6] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = _math_error();
      HEAP[$0] = $9;
      __label__ = 5;
      break;
     case 4:
      var $10 = HEAP[$r];
      var $11 = HEAP[$phi];
      var $12 = _Py_BuildValue(__str6, allocate([ $10, 0, 0, 0, 0, 0, 0, 0, $11, 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $12;
      __label__ = 5;
      break;
     case 5:
      var $13 = HEAP[$0];
      HEAP[$retval] = $13;
      __label__ = 6;
      break;
     case 6:
      var $retval11 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cmath_rect($self, $args) {
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
      var $z = __stackBase__ + 16;
      var $r = __stackBase__ + 32;
      var $phi = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str7, allocate([ $r, 0, 0, 0, $phi, 0, 0, 0 ], [ "double*", 0, 0, 0, "double*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = ___errno_location();
      HEAP[$4] = 0;
      var $5 = HEAP[$r];
      var $6 = ___finite($5);
      
      if ($6 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $8 = HEAP[$phi];
      var $9 = ___finite($8);
      
      if ($9 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 4:
      var $11 = HEAP[$r];
      var $12 = ___isinf($11);
      
      if ($12 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $14 = HEAP[$phi];
      var $15 = ___finite($14);
      
      if ($15 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if (HEAP[$phi] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if (HEAP[$r] > 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $21 = HEAP[$phi];
      var $22 = _cos($21);
      var $23 = _copysign(Infinity, $22);
      
      HEAP[$z] = $23;
      var $25 = HEAP[$phi];
      var $26 = _sin($25);
      var $27 = _copysign(Infinity, $26);
      
      HEAP[$z + 8] = $27;
      __label__ = 10;
      break;
     case 9:
      var $29 = HEAP[$phi];
      var $30 = _cos($29);
      var $31 = _copysign(Infinity, $30);
      var $32 = 0 - $31;
      
      HEAP[$z] = $32;
      var $34 = HEAP[$phi];
      var $35 = _sin($34);
      var $36 = _copysign(Infinity, $35);
      var $37 = 0 - $36;
      
      HEAP[$z + 8] = $37;
      __label__ = 10;
      break;
     case 10:
      __label__ = 12;
      break;
     case 11:
      var $39 = HEAP[$r];
      var $40 = _special_type($39);
      var $41 = HEAP[$phi];
      var $42 = _special_type($41);
      
      var $44 = _rect_special_values + $40 * 112 + $42 * 16;
      
      
      var $47 = HEAP[$44];
      HEAP[$z] = $47;
      
      
      var $50 = HEAP[$44 + 8];
      HEAP[$z + 8] = $50;
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$r] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $53 = HEAP[$r];
      var $54 = ___isnan($53);
      
      if ($54 != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      var $56 = HEAP[$phi];
      var $57 = ___isinf($56);
      
      if ($57 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $59 = ___errno_location();
      HEAP[$59] = 33;
      __label__ = 17;
      break;
     case 16:
      var $60 = ___errno_location();
      HEAP[$60] = 0;
      __label__ = 17;
      break;
     case 17:
      __label__ = 19;
      break;
     case 18:
      var $61 = HEAP[$phi];
      var $62 = _cos($61);
      
      var $64 = $62 * HEAP[$r];
      
      HEAP[$z] = $64;
      var $66 = HEAP[$phi];
      var $67 = _sin($66);
      
      var $69 = $67 * HEAP[$r];
      
      HEAP[$z + 8] = $69;
      var $71 = ___errno_location();
      HEAP[$71] = 0;
      __label__ = 19;
      break;
     case 19:
      var $72 = ___errno_location();
      
      
      if (HEAP[$72] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $75 = _math_error();
      HEAP[$0] = $75;
      __label__ = 22;
      break;
     case 21:
      
      var $val = HEAP[$z];
      
      var $val22 = HEAP[$z + 8];
      var $76 = _PyComplex_FromCComplex($val, $val22);
      HEAP[$0] = $76;
      __label__ = 22;
      break;
     case 22:
      var $77 = HEAP[$0];
      HEAP[$retval] = $77;
      __label__ = 23;
      break;
     case 23:
      var $retval24 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cmath_isnan($self, $args) {
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
      var $iftmp_27 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $z = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str8, allocate([ $z, 0, 0, 0 ], [ "%struct.Py_complex*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$z];
      var $6 = ___isnan($5);
      
      if ($6 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $9 = HEAP[$z + 8];
      var $10 = ___isnan($9);
      
      if ($10 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$iftmp_27] = 1;
      __label__ = 6;
      break;
     case 5:
      HEAP[$iftmp_27] = 0;
      __label__ = 6;
      break;
     case 6:
      var $12 = HEAP[$iftmp_27];
      var $13 = _PyBool_FromLong($12);
      HEAP[$0] = $13;
      __label__ = 7;
      break;
     case 7:
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
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
  function _cmath_isinf($self, $args) {
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
      var $iftmp_28 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $z = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str8, allocate([ $z, 0, 0, 0 ], [ "%struct.Py_complex*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$z];
      var $6 = ___isinf($5);
      
      if ($6 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $9 = HEAP[$z + 8];
      var $10 = ___isinf($9);
      
      if ($10 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$iftmp_28] = 1;
      __label__ = 6;
      break;
     case 5:
      HEAP[$iftmp_28] = 0;
      __label__ = 6;
      break;
     case 6:
      var $12 = HEAP[$iftmp_28];
      var $13 = _PyBool_FromLong($12);
      HEAP[$0] = $13;
      __label__ = 7;
      break;
     case 7:
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
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
  function _initcmath() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      var $p = __stackBase__ + 4;
      var $p1 = __stackBase__ + 8;
      var $p2 = __stackBase__ + 12;
      var $p3 = __stackBase__ + 16;
      var $p4 = __stackBase__ + 20;
      var $p5 = __stackBase__ + 24;
      var $p6 = __stackBase__ + 28;
      var $p7 = __stackBase__ + 32;
      var $p8 = __stackBase__ + 36;
      var $p9 = __stackBase__ + 40;
      var $p10 = __stackBase__ + 44;
      
      var $0 = _Py_InitModule4(__str30, _cmath_methods, _module_doc, 0, 1013);
      HEAP[$m] = $0;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = _PyFloat_FromDouble(3.141592653589793);
      var $4 = HEAP[$m];
      var $5 = _PyModule_AddObject($4, __str31, $3);
      var $6 = _PyFloat_FromDouble(2.718281828459045);
      var $7 = HEAP[$m];
      var $8 = _PyModule_AddObject($7, __str32, $6);
      HEAP[$p] = _acos_special_values;
      
      var $10 = HEAP[$p];
      HEAP[$10] = 2.356194490192345;
      
      var $12 = HEAP[$p] + 8;
      HEAP[$12] = Infinity;
      
      var $14 = HEAP[$p] + 16;
      HEAP[$p] = $14;
      
      var $16 = HEAP[$p];
      HEAP[$16] = 3.141592653589793;
      
      var $18 = HEAP[$p] + 8;
      HEAP[$18] = Infinity;
      
      var $20 = HEAP[$p] + 16;
      HEAP[$p] = $20;
      
      var $22 = HEAP[$p];
      HEAP[$22] = 3.141592653589793;
      
      var $24 = HEAP[$p] + 8;
      HEAP[$24] = Infinity;
      
      var $26 = HEAP[$p] + 16;
      HEAP[$p] = $26;
      
      var $28 = HEAP[$p];
      HEAP[$28] = 3.141592653589793;
      
      var $30 = HEAP[$p] + 8;
      HEAP[$30] = -Infinity;
      
      var $32 = HEAP[$p] + 16;
      HEAP[$p] = $32;
      
      var $34 = HEAP[$p];
      HEAP[$34] = 3.141592653589793;
      
      var $36 = HEAP[$p] + 8;
      HEAP[$36] = -Infinity;
      
      var $38 = HEAP[$p] + 16;
      HEAP[$p] = $38;
      
      var $40 = HEAP[$p];
      HEAP[$40] = 2.356194490192345;
      
      var $42 = HEAP[$p] + 8;
      HEAP[$42] = -Infinity;
      
      var $44 = HEAP[$p] + 16;
      HEAP[$p] = $44;
      
      var $46 = HEAP[$p];
      HEAP[$46] = NaN;
      
      var $48 = HEAP[$p] + 8;
      HEAP[$48] = Infinity;
      
      var $50 = HEAP[$p] + 16;
      HEAP[$p] = $50;
      
      var $52 = HEAP[$p];
      HEAP[$52] = 1.5707963267948966;
      
      var $54 = HEAP[$p] + 8;
      HEAP[$54] = Infinity;
      
      var $56 = HEAP[$p] + 16;
      HEAP[$p] = $56;
      
      var $58 = HEAP[$p];
      HEAP[$58] = -9.542631940771103e+33;
      
      var $60 = HEAP[$p] + 8;
      HEAP[$60] = -9.542631940771103e+33;
      
      var $62 = HEAP[$p] + 16;
      HEAP[$p] = $62;
      
      var $64 = HEAP[$p];
      HEAP[$64] = -9.542631940771103e+33;
      
      var $66 = HEAP[$p] + 8;
      HEAP[$66] = -9.542631940771103e+33;
      
      var $68 = HEAP[$p] + 16;
      HEAP[$p] = $68;
      
      var $70 = HEAP[$p];
      HEAP[$70] = -9.542631940771103e+33;
      
      var $72 = HEAP[$p] + 8;
      HEAP[$72] = -9.542631940771103e+33;
      
      var $74 = HEAP[$p] + 16;
      HEAP[$p] = $74;
      
      var $76 = HEAP[$p];
      HEAP[$76] = -9.542631940771103e+33;
      
      var $78 = HEAP[$p] + 8;
      HEAP[$78] = -9.542631940771103e+33;
      
      var $80 = HEAP[$p] + 16;
      HEAP[$p] = $80;
      
      var $82 = HEAP[$p];
      HEAP[$82] = 1.5707963267948966;
      
      var $84 = HEAP[$p] + 8;
      HEAP[$84] = -Infinity;
      
      var $86 = HEAP[$p] + 16;
      HEAP[$p] = $86;
      
      var $88 = HEAP[$p];
      HEAP[$88] = NaN;
      
      var $90 = HEAP[$p] + 8;
      HEAP[$90] = NaN;
      
      var $92 = HEAP[$p] + 16;
      HEAP[$p] = $92;
      
      var $94 = HEAP[$p];
      HEAP[$94] = 1.5707963267948966;
      
      var $96 = HEAP[$p] + 8;
      HEAP[$96] = Infinity;
      
      var $98 = HEAP[$p] + 16;
      HEAP[$p] = $98;
      
      var $100 = HEAP[$p];
      HEAP[$100] = -9.542631940771103e+33;
      
      var $102 = HEAP[$p] + 8;
      HEAP[$102] = -9.542631940771103e+33;
      
      var $104 = HEAP[$p] + 16;
      HEAP[$p] = $104;
      
      var $106 = HEAP[$p];
      HEAP[$106] = 1.5707963267948966;
      
      var $108 = HEAP[$p] + 8;
      HEAP[$108] = 0;
      
      var $110 = HEAP[$p] + 16;
      HEAP[$p] = $110;
      
      var $112 = HEAP[$p];
      HEAP[$112] = 1.5707963267948966;
      
      var $114 = HEAP[$p] + 8;
      HEAP[$114] = 0;
      
      var $116 = HEAP[$p] + 16;
      HEAP[$p] = $116;
      
      var $118 = HEAP[$p];
      HEAP[$118] = -9.542631940771103e+33;
      
      var $120 = HEAP[$p] + 8;
      HEAP[$120] = -9.542631940771103e+33;
      
      var $122 = HEAP[$p] + 16;
      HEAP[$p] = $122;
      
      var $124 = HEAP[$p];
      HEAP[$124] = 1.5707963267948966;
      
      var $126 = HEAP[$p] + 8;
      HEAP[$126] = -Infinity;
      
      var $128 = HEAP[$p] + 16;
      HEAP[$p] = $128;
      
      var $130 = HEAP[$p];
      HEAP[$130] = 1.5707963267948966;
      
      var $132 = HEAP[$p] + 8;
      HEAP[$132] = NaN;
      
      var $134 = HEAP[$p] + 16;
      HEAP[$p] = $134;
      
      var $136 = HEAP[$p];
      HEAP[$136] = 1.5707963267948966;
      
      var $138 = HEAP[$p] + 8;
      HEAP[$138] = Infinity;
      
      var $140 = HEAP[$p] + 16;
      HEAP[$p] = $140;
      
      var $142 = HEAP[$p];
      HEAP[$142] = -9.542631940771103e+33;
      
      var $144 = HEAP[$p] + 8;
      HEAP[$144] = -9.542631940771103e+33;
      
      var $146 = HEAP[$p] + 16;
      HEAP[$p] = $146;
      
      var $148 = HEAP[$p];
      HEAP[$148] = 1.5707963267948966;
      
      var $150 = HEAP[$p] + 8;
      HEAP[$150] = 0;
      
      var $152 = HEAP[$p] + 16;
      HEAP[$p] = $152;
      
      var $154 = HEAP[$p];
      HEAP[$154] = 1.5707963267948966;
      
      var $156 = HEAP[$p] + 8;
      HEAP[$156] = 0;
      
      var $158 = HEAP[$p] + 16;
      HEAP[$p] = $158;
      
      var $160 = HEAP[$p];
      HEAP[$160] = -9.542631940771103e+33;
      
      var $162 = HEAP[$p] + 8;
      HEAP[$162] = -9.542631940771103e+33;
      
      var $164 = HEAP[$p] + 16;
      HEAP[$p] = $164;
      
      var $166 = HEAP[$p];
      HEAP[$166] = 1.5707963267948966;
      
      var $168 = HEAP[$p] + 8;
      HEAP[$168] = -Infinity;
      
      var $170 = HEAP[$p] + 16;
      HEAP[$p] = $170;
      
      var $172 = HEAP[$p];
      HEAP[$172] = 1.5707963267948966;
      
      var $174 = HEAP[$p] + 8;
      HEAP[$174] = NaN;
      
      var $176 = HEAP[$p] + 16;
      HEAP[$p] = $176;
      
      var $178 = HEAP[$p];
      HEAP[$178] = 1.5707963267948966;
      
      var $180 = HEAP[$p] + 8;
      HEAP[$180] = Infinity;
      
      var $182 = HEAP[$p] + 16;
      HEAP[$p] = $182;
      
      var $184 = HEAP[$p];
      HEAP[$184] = -9.542631940771103e+33;
      
      var $186 = HEAP[$p] + 8;
      HEAP[$186] = -9.542631940771103e+33;
      
      var $188 = HEAP[$p] + 16;
      HEAP[$p] = $188;
      
      var $190 = HEAP[$p];
      HEAP[$190] = -9.542631940771103e+33;
      
      var $192 = HEAP[$p] + 8;
      HEAP[$192] = -9.542631940771103e+33;
      
      var $194 = HEAP[$p] + 16;
      HEAP[$p] = $194;
      
      var $196 = HEAP[$p];
      HEAP[$196] = -9.542631940771103e+33;
      
      var $198 = HEAP[$p] + 8;
      HEAP[$198] = -9.542631940771103e+33;
      
      var $200 = HEAP[$p] + 16;
      HEAP[$p] = $200;
      
      var $202 = HEAP[$p];
      HEAP[$202] = -9.542631940771103e+33;
      
      var $204 = HEAP[$p] + 8;
      HEAP[$204] = -9.542631940771103e+33;
      
      var $206 = HEAP[$p] + 16;
      HEAP[$p] = $206;
      
      var $208 = HEAP[$p];
      HEAP[$208] = 1.5707963267948966;
      
      var $210 = HEAP[$p] + 8;
      HEAP[$210] = -Infinity;
      
      var $212 = HEAP[$p] + 16;
      HEAP[$p] = $212;
      
      var $214 = HEAP[$p];
      HEAP[$214] = NaN;
      
      var $216 = HEAP[$p] + 8;
      HEAP[$216] = NaN;
      
      var $218 = HEAP[$p] + 16;
      HEAP[$p] = $218;
      
      var $220 = HEAP[$p];
      HEAP[$220] = .7853981633974483;
      
      var $222 = HEAP[$p] + 8;
      HEAP[$222] = Infinity;
      
      var $224 = HEAP[$p] + 16;
      HEAP[$p] = $224;
      
      var $226 = HEAP[$p];
      HEAP[$226] = 0;
      
      var $228 = HEAP[$p] + 8;
      HEAP[$228] = Infinity;
      
      var $230 = HEAP[$p] + 16;
      HEAP[$p] = $230;
      
      var $232 = HEAP[$p];
      HEAP[$232] = 0;
      
      var $234 = HEAP[$p] + 8;
      HEAP[$234] = Infinity;
      
      var $236 = HEAP[$p] + 16;
      HEAP[$p] = $236;
      
      var $238 = HEAP[$p];
      HEAP[$238] = 0;
      
      var $240 = HEAP[$p] + 8;
      HEAP[$240] = -Infinity;
      
      var $242 = HEAP[$p] + 16;
      HEAP[$p] = $242;
      
      var $244 = HEAP[$p];
      HEAP[$244] = 0;
      
      var $246 = HEAP[$p] + 8;
      HEAP[$246] = -Infinity;
      
      var $248 = HEAP[$p] + 16;
      HEAP[$p] = $248;
      
      var $250 = HEAP[$p];
      HEAP[$250] = .7853981633974483;
      
      var $252 = HEAP[$p] + 8;
      HEAP[$252] = -Infinity;
      
      var $254 = HEAP[$p] + 16;
      HEAP[$p] = $254;
      
      var $256 = HEAP[$p];
      HEAP[$256] = NaN;
      
      var $258 = HEAP[$p] + 8;
      HEAP[$258] = Infinity;
      
      var $260 = HEAP[$p] + 16;
      HEAP[$p] = $260;
      
      var $262 = HEAP[$p];
      HEAP[$262] = NaN;
      
      var $264 = HEAP[$p] + 8;
      HEAP[$264] = Infinity;
      
      var $266 = HEAP[$p] + 16;
      HEAP[$p] = $266;
      
      var $268 = HEAP[$p];
      HEAP[$268] = NaN;
      
      var $270 = HEAP[$p] + 8;
      HEAP[$270] = NaN;
      
      var $272 = HEAP[$p] + 16;
      HEAP[$p] = $272;
      
      var $274 = HEAP[$p];
      HEAP[$274] = NaN;
      
      var $276 = HEAP[$p] + 8;
      HEAP[$276] = NaN;
      
      var $278 = HEAP[$p] + 16;
      HEAP[$p] = $278;
      
      var $280 = HEAP[$p];
      HEAP[$280] = NaN;
      
      var $282 = HEAP[$p] + 8;
      HEAP[$282] = NaN;
      
      var $284 = HEAP[$p] + 16;
      HEAP[$p] = $284;
      
      var $286 = HEAP[$p];
      HEAP[$286] = NaN;
      
      var $288 = HEAP[$p] + 8;
      HEAP[$288] = NaN;
      
      var $290 = HEAP[$p] + 16;
      HEAP[$p] = $290;
      
      var $292 = HEAP[$p];
      HEAP[$292] = NaN;
      
      var $294 = HEAP[$p] + 8;
      HEAP[$294] = -Infinity;
      
      var $296 = HEAP[$p] + 16;
      HEAP[$p] = $296;
      
      var $298 = HEAP[$p];
      HEAP[$298] = NaN;
      
      var $300 = HEAP[$p] + 8;
      HEAP[$300] = NaN;
      
      var $302 = HEAP[$p] + 16;
      HEAP[$p] = $302;
      HEAP[$p1] = _acosh_special_values;
      
      var $304 = HEAP[$p1];
      HEAP[$304] = Infinity;
      
      var $306 = HEAP[$p1] + 8;
      HEAP[$306] = -2.356194490192345;
      
      var $308 = HEAP[$p1] + 16;
      HEAP[$p1] = $308;
      
      var $310 = HEAP[$p1];
      HEAP[$310] = Infinity;
      
      var $312 = HEAP[$p1] + 8;
      HEAP[$312] = -3.141592653589793;
      
      var $314 = HEAP[$p1] + 16;
      HEAP[$p1] = $314;
      
      var $316 = HEAP[$p1];
      HEAP[$316] = Infinity;
      
      var $318 = HEAP[$p1] + 8;
      HEAP[$318] = -3.141592653589793;
      
      var $320 = HEAP[$p1] + 16;
      HEAP[$p1] = $320;
      
      var $322 = HEAP[$p1];
      HEAP[$322] = Infinity;
      
      var $324 = HEAP[$p1] + 8;
      HEAP[$324] = 3.141592653589793;
      
      var $326 = HEAP[$p1] + 16;
      HEAP[$p1] = $326;
      
      var $328 = HEAP[$p1];
      HEAP[$328] = Infinity;
      
      var $330 = HEAP[$p1] + 8;
      HEAP[$330] = 3.141592653589793;
      
      var $332 = HEAP[$p1] + 16;
      HEAP[$p1] = $332;
      
      var $334 = HEAP[$p1];
      HEAP[$334] = Infinity;
      
      var $336 = HEAP[$p1] + 8;
      HEAP[$336] = 2.356194490192345;
      
      var $338 = HEAP[$p1] + 16;
      HEAP[$p1] = $338;
      
      var $340 = HEAP[$p1];
      HEAP[$340] = Infinity;
      
      var $342 = HEAP[$p1] + 8;
      HEAP[$342] = NaN;
      
      var $344 = HEAP[$p1] + 16;
      HEAP[$p1] = $344;
      
      var $346 = HEAP[$p1];
      HEAP[$346] = Infinity;
      
      var $348 = HEAP[$p1] + 8;
      HEAP[$348] = -1.5707963267948966;
      
      var $350 = HEAP[$p1] + 16;
      HEAP[$p1] = $350;
      
      var $352 = HEAP[$p1];
      HEAP[$352] = -9.542631940771103e+33;
      
      var $354 = HEAP[$p1] + 8;
      HEAP[$354] = -9.542631940771103e+33;
      
      var $356 = HEAP[$p1] + 16;
      HEAP[$p1] = $356;
      
      var $358 = HEAP[$p1];
      HEAP[$358] = -9.542631940771103e+33;
      
      var $360 = HEAP[$p1] + 8;
      HEAP[$360] = -9.542631940771103e+33;
      
      var $362 = HEAP[$p1] + 16;
      HEAP[$p1] = $362;
      
      var $364 = HEAP[$p1];
      HEAP[$364] = -9.542631940771103e+33;
      
      var $366 = HEAP[$p1] + 8;
      HEAP[$366] = -9.542631940771103e+33;
      
      var $368 = HEAP[$p1] + 16;
      HEAP[$p1] = $368;
      
      var $370 = HEAP[$p1];
      HEAP[$370] = -9.542631940771103e+33;
      
      var $372 = HEAP[$p1] + 8;
      HEAP[$372] = -9.542631940771103e+33;
      
      var $374 = HEAP[$p1] + 16;
      HEAP[$p1] = $374;
      
      var $376 = HEAP[$p1];
      HEAP[$376] = Infinity;
      
      var $378 = HEAP[$p1] + 8;
      HEAP[$378] = 1.5707963267948966;
      
      var $380 = HEAP[$p1] + 16;
      HEAP[$p1] = $380;
      
      var $382 = HEAP[$p1];
      HEAP[$382] = NaN;
      
      var $384 = HEAP[$p1] + 8;
      HEAP[$384] = NaN;
      
      var $386 = HEAP[$p1] + 16;
      HEAP[$p1] = $386;
      
      var $388 = HEAP[$p1];
      HEAP[$388] = Infinity;
      
      var $390 = HEAP[$p1] + 8;
      HEAP[$390] = -1.5707963267948966;
      
      var $392 = HEAP[$p1] + 16;
      HEAP[$p1] = $392;
      
      var $394 = HEAP[$p1];
      HEAP[$394] = -9.542631940771103e+33;
      
      var $396 = HEAP[$p1] + 8;
      HEAP[$396] = -9.542631940771103e+33;
      
      var $398 = HEAP[$p1] + 16;
      HEAP[$p1] = $398;
      
      var $400 = HEAP[$p1];
      HEAP[$400] = 0;
      
      var $402 = HEAP[$p1] + 8;
      HEAP[$402] = -1.5707963267948966;
      
      var $404 = HEAP[$p1] + 16;
      HEAP[$p1] = $404;
      
      var $406 = HEAP[$p1];
      HEAP[$406] = 0;
      
      var $408 = HEAP[$p1] + 8;
      HEAP[$408] = 1.5707963267948966;
      
      var $410 = HEAP[$p1] + 16;
      HEAP[$p1] = $410;
      
      var $412 = HEAP[$p1];
      HEAP[$412] = -9.542631940771103e+33;
      
      var $414 = HEAP[$p1] + 8;
      HEAP[$414] = -9.542631940771103e+33;
      
      var $416 = HEAP[$p1] + 16;
      HEAP[$p1] = $416;
      
      var $418 = HEAP[$p1];
      HEAP[$418] = Infinity;
      
      var $420 = HEAP[$p1] + 8;
      HEAP[$420] = 1.5707963267948966;
      
      var $422 = HEAP[$p1] + 16;
      HEAP[$p1] = $422;
      
      var $424 = HEAP[$p1];
      HEAP[$424] = NaN;
      
      var $426 = HEAP[$p1] + 8;
      HEAP[$426] = NaN;
      
      var $428 = HEAP[$p1] + 16;
      HEAP[$p1] = $428;
      
      var $430 = HEAP[$p1];
      HEAP[$430] = Infinity;
      
      var $432 = HEAP[$p1] + 8;
      HEAP[$432] = -1.5707963267948966;
      
      var $434 = HEAP[$p1] + 16;
      HEAP[$p1] = $434;
      
      var $436 = HEAP[$p1];
      HEAP[$436] = -9.542631940771103e+33;
      
      var $438 = HEAP[$p1] + 8;
      HEAP[$438] = -9.542631940771103e+33;
      
      var $440 = HEAP[$p1] + 16;
      HEAP[$p1] = $440;
      
      var $442 = HEAP[$p1];
      HEAP[$442] = 0;
      
      var $444 = HEAP[$p1] + 8;
      HEAP[$444] = -1.5707963267948966;
      
      var $446 = HEAP[$p1] + 16;
      HEAP[$p1] = $446;
      
      var $448 = HEAP[$p1];
      HEAP[$448] = 0;
      
      var $450 = HEAP[$p1] + 8;
      HEAP[$450] = 1.5707963267948966;
      
      var $452 = HEAP[$p1] + 16;
      HEAP[$p1] = $452;
      
      var $454 = HEAP[$p1];
      HEAP[$454] = -9.542631940771103e+33;
      
      var $456 = HEAP[$p1] + 8;
      HEAP[$456] = -9.542631940771103e+33;
      
      var $458 = HEAP[$p1] + 16;
      HEAP[$p1] = $458;
      
      var $460 = HEAP[$p1];
      HEAP[$460] = Infinity;
      
      var $462 = HEAP[$p1] + 8;
      HEAP[$462] = 1.5707963267948966;
      
      var $464 = HEAP[$p1] + 16;
      HEAP[$p1] = $464;
      
      var $466 = HEAP[$p1];
      HEAP[$466] = NaN;
      
      var $468 = HEAP[$p1] + 8;
      HEAP[$468] = NaN;
      
      var $470 = HEAP[$p1] + 16;
      HEAP[$p1] = $470;
      
      var $472 = HEAP[$p1];
      HEAP[$472] = Infinity;
      
      var $474 = HEAP[$p1] + 8;
      HEAP[$474] = -1.5707963267948966;
      
      var $476 = HEAP[$p1] + 16;
      HEAP[$p1] = $476;
      
      var $478 = HEAP[$p1];
      HEAP[$478] = -9.542631940771103e+33;
      
      var $480 = HEAP[$p1] + 8;
      HEAP[$480] = -9.542631940771103e+33;
      
      var $482 = HEAP[$p1] + 16;
      HEAP[$p1] = $482;
      
      var $484 = HEAP[$p1];
      HEAP[$484] = -9.542631940771103e+33;
      
      var $486 = HEAP[$p1] + 8;
      HEAP[$486] = -9.542631940771103e+33;
      
      var $488 = HEAP[$p1] + 16;
      HEAP[$p1] = $488;
      
      var $490 = HEAP[$p1];
      HEAP[$490] = -9.542631940771103e+33;
      
      var $492 = HEAP[$p1] + 8;
      HEAP[$492] = -9.542631940771103e+33;
      
      var $494 = HEAP[$p1] + 16;
      HEAP[$p1] = $494;
      
      var $496 = HEAP[$p1];
      HEAP[$496] = -9.542631940771103e+33;
      
      var $498 = HEAP[$p1] + 8;
      HEAP[$498] = -9.542631940771103e+33;
      
      var $500 = HEAP[$p1] + 16;
      HEAP[$p1] = $500;
      
      var $502 = HEAP[$p1];
      HEAP[$502] = Infinity;
      
      var $504 = HEAP[$p1] + 8;
      HEAP[$504] = 1.5707963267948966;
      
      var $506 = HEAP[$p1] + 16;
      HEAP[$p1] = $506;
      
      var $508 = HEAP[$p1];
      HEAP[$508] = NaN;
      
      var $510 = HEAP[$p1] + 8;
      HEAP[$510] = NaN;
      
      var $512 = HEAP[$p1] + 16;
      HEAP[$p1] = $512;
      
      var $514 = HEAP[$p1];
      HEAP[$514] = Infinity;
      
      var $516 = HEAP[$p1] + 8;
      HEAP[$516] = -.7853981633974483;
      
      var $518 = HEAP[$p1] + 16;
      HEAP[$p1] = $518;
      
      var $520 = HEAP[$p1];
      HEAP[$520] = Infinity;
      
      var $522 = HEAP[$p1] + 8;
      HEAP[$522] = 0;
      
      var $524 = HEAP[$p1] + 16;
      HEAP[$p1] = $524;
      
      var $526 = HEAP[$p1];
      HEAP[$526] = Infinity;
      
      var $528 = HEAP[$p1] + 8;
      HEAP[$528] = 0;
      
      var $530 = HEAP[$p1] + 16;
      HEAP[$p1] = $530;
      
      var $532 = HEAP[$p1];
      HEAP[$532] = Infinity;
      
      var $534 = HEAP[$p1] + 8;
      HEAP[$534] = 0;
      
      var $536 = HEAP[$p1] + 16;
      HEAP[$p1] = $536;
      
      var $538 = HEAP[$p1];
      HEAP[$538] = Infinity;
      
      var $540 = HEAP[$p1] + 8;
      HEAP[$540] = 0;
      
      var $542 = HEAP[$p1] + 16;
      HEAP[$p1] = $542;
      
      var $544 = HEAP[$p1];
      HEAP[$544] = Infinity;
      
      var $546 = HEAP[$p1] + 8;
      HEAP[$546] = .7853981633974483;
      
      var $548 = HEAP[$p1] + 16;
      HEAP[$p1] = $548;
      
      var $550 = HEAP[$p1];
      HEAP[$550] = Infinity;
      
      var $552 = HEAP[$p1] + 8;
      HEAP[$552] = NaN;
      
      var $554 = HEAP[$p1] + 16;
      HEAP[$p1] = $554;
      
      var $556 = HEAP[$p1];
      HEAP[$556] = Infinity;
      
      var $558 = HEAP[$p1] + 8;
      HEAP[$558] = NaN;
      
      var $560 = HEAP[$p1] + 16;
      HEAP[$p1] = $560;
      
      var $562 = HEAP[$p1];
      HEAP[$562] = NaN;
      
      var $564 = HEAP[$p1] + 8;
      HEAP[$564] = NaN;
      
      var $566 = HEAP[$p1] + 16;
      HEAP[$p1] = $566;
      
      var $568 = HEAP[$p1];
      HEAP[$568] = NaN;
      
      var $570 = HEAP[$p1] + 8;
      HEAP[$570] = NaN;
      
      var $572 = HEAP[$p1] + 16;
      HEAP[$p1] = $572;
      
      var $574 = HEAP[$p1];
      HEAP[$574] = NaN;
      
      var $576 = HEAP[$p1] + 8;
      HEAP[$576] = NaN;
      
      var $578 = HEAP[$p1] + 16;
      HEAP[$p1] = $578;
      
      var $580 = HEAP[$p1];
      HEAP[$580] = NaN;
      
      var $582 = HEAP[$p1] + 8;
      HEAP[$582] = NaN;
      
      var $584 = HEAP[$p1] + 16;
      HEAP[$p1] = $584;
      
      var $586 = HEAP[$p1];
      HEAP[$586] = Infinity;
      
      var $588 = HEAP[$p1] + 8;
      HEAP[$588] = NaN;
      
      var $590 = HEAP[$p1] + 16;
      HEAP[$p1] = $590;
      
      var $592 = HEAP[$p1];
      HEAP[$592] = NaN;
      
      var $594 = HEAP[$p1] + 8;
      HEAP[$594] = NaN;
      
      var $596 = HEAP[$p1] + 16;
      HEAP[$p1] = $596;
      HEAP[$p2] = _asinh_special_values;
      
      var $598 = HEAP[$p2];
      HEAP[$598] = -Infinity;
      
      var $600 = HEAP[$p2] + 8;
      HEAP[$600] = -.7853981633974483;
      
      var $602 = HEAP[$p2] + 16;
      HEAP[$p2] = $602;
      
      var $604 = HEAP[$p2];
      HEAP[$604] = -Infinity;
      
      var $606 = HEAP[$p2] + 8;
      HEAP[$606] = 0;
      
      var $608 = HEAP[$p2] + 16;
      HEAP[$p2] = $608;
      
      var $610 = HEAP[$p2];
      HEAP[$610] = -Infinity;
      
      var $612 = HEAP[$p2] + 8;
      HEAP[$612] = 0;
      
      var $614 = HEAP[$p2] + 16;
      HEAP[$p2] = $614;
      
      var $616 = HEAP[$p2];
      HEAP[$616] = -Infinity;
      
      var $618 = HEAP[$p2] + 8;
      HEAP[$618] = 0;
      
      var $620 = HEAP[$p2] + 16;
      HEAP[$p2] = $620;
      
      var $622 = HEAP[$p2];
      HEAP[$622] = -Infinity;
      
      var $624 = HEAP[$p2] + 8;
      HEAP[$624] = 0;
      
      var $626 = HEAP[$p2] + 16;
      HEAP[$p2] = $626;
      
      var $628 = HEAP[$p2];
      HEAP[$628] = -Infinity;
      
      var $630 = HEAP[$p2] + 8;
      HEAP[$630] = .7853981633974483;
      
      var $632 = HEAP[$p2] + 16;
      HEAP[$p2] = $632;
      
      var $634 = HEAP[$p2];
      HEAP[$634] = -Infinity;
      
      var $636 = HEAP[$p2] + 8;
      HEAP[$636] = NaN;
      
      var $638 = HEAP[$p2] + 16;
      HEAP[$p2] = $638;
      
      var $640 = HEAP[$p2];
      HEAP[$640] = -Infinity;
      
      var $642 = HEAP[$p2] + 8;
      HEAP[$642] = -1.5707963267948966;
      
      var $644 = HEAP[$p2] + 16;
      HEAP[$p2] = $644;
      
      var $646 = HEAP[$p2];
      HEAP[$646] = -9.542631940771103e+33;
      
      var $648 = HEAP[$p2] + 8;
      HEAP[$648] = -9.542631940771103e+33;
      
      var $650 = HEAP[$p2] + 16;
      HEAP[$p2] = $650;
      
      var $652 = HEAP[$p2];
      HEAP[$652] = -9.542631940771103e+33;
      
      var $654 = HEAP[$p2] + 8;
      HEAP[$654] = -9.542631940771103e+33;
      
      var $656 = HEAP[$p2] + 16;
      HEAP[$p2] = $656;
      
      var $658 = HEAP[$p2];
      HEAP[$658] = -9.542631940771103e+33;
      
      var $660 = HEAP[$p2] + 8;
      HEAP[$660] = -9.542631940771103e+33;
      
      var $662 = HEAP[$p2] + 16;
      HEAP[$p2] = $662;
      
      var $664 = HEAP[$p2];
      HEAP[$664] = -9.542631940771103e+33;
      
      var $666 = HEAP[$p2] + 8;
      HEAP[$666] = -9.542631940771103e+33;
      
      var $668 = HEAP[$p2] + 16;
      HEAP[$p2] = $668;
      
      var $670 = HEAP[$p2];
      HEAP[$670] = -Infinity;
      
      var $672 = HEAP[$p2] + 8;
      HEAP[$672] = 1.5707963267948966;
      
      var $674 = HEAP[$p2] + 16;
      HEAP[$p2] = $674;
      
      var $676 = HEAP[$p2];
      HEAP[$676] = NaN;
      
      var $678 = HEAP[$p2] + 8;
      HEAP[$678] = NaN;
      
      var $680 = HEAP[$p2] + 16;
      HEAP[$p2] = $680;
      
      var $682 = HEAP[$p2];
      HEAP[$682] = -Infinity;
      
      var $684 = HEAP[$p2] + 8;
      HEAP[$684] = -1.5707963267948966;
      
      var $686 = HEAP[$p2] + 16;
      HEAP[$p2] = $686;
      
      var $688 = HEAP[$p2];
      HEAP[$688] = -9.542631940771103e+33;
      
      var $690 = HEAP[$p2] + 8;
      HEAP[$690] = -9.542631940771103e+33;
      
      var $692 = HEAP[$p2] + 16;
      HEAP[$p2] = $692;
      
      var $694 = HEAP[$p2];
      HEAP[$694] = 0;
      
      var $696 = HEAP[$p2] + 8;
      HEAP[$696] = 0;
      
      var $698 = HEAP[$p2] + 16;
      HEAP[$p2] = $698;
      
      var $700 = HEAP[$p2];
      HEAP[$700] = 0;
      
      var $702 = HEAP[$p2] + 8;
      HEAP[$702] = 0;
      
      var $704 = HEAP[$p2] + 16;
      HEAP[$p2] = $704;
      
      var $706 = HEAP[$p2];
      HEAP[$706] = -9.542631940771103e+33;
      
      var $708 = HEAP[$p2] + 8;
      HEAP[$708] = -9.542631940771103e+33;
      
      var $710 = HEAP[$p2] + 16;
      HEAP[$p2] = $710;
      
      var $712 = HEAP[$p2];
      HEAP[$712] = -Infinity;
      
      var $714 = HEAP[$p2] + 8;
      HEAP[$714] = 1.5707963267948966;
      
      var $716 = HEAP[$p2] + 16;
      HEAP[$p2] = $716;
      
      var $718 = HEAP[$p2];
      HEAP[$718] = NaN;
      
      var $720 = HEAP[$p2] + 8;
      HEAP[$720] = NaN;
      
      var $722 = HEAP[$p2] + 16;
      HEAP[$p2] = $722;
      
      var $724 = HEAP[$p2];
      HEAP[$724] = Infinity;
      
      var $726 = HEAP[$p2] + 8;
      HEAP[$726] = -1.5707963267948966;
      
      var $728 = HEAP[$p2] + 16;
      HEAP[$p2] = $728;
      
      var $730 = HEAP[$p2];
      HEAP[$730] = -9.542631940771103e+33;
      
      var $732 = HEAP[$p2] + 8;
      HEAP[$732] = -9.542631940771103e+33;
      
      var $734 = HEAP[$p2] + 16;
      HEAP[$p2] = $734;
      
      var $736 = HEAP[$p2];
      HEAP[$736] = 0;
      
      var $738 = HEAP[$p2] + 8;
      HEAP[$738] = 0;
      
      var $740 = HEAP[$p2] + 16;
      HEAP[$p2] = $740;
      
      var $742 = HEAP[$p2];
      HEAP[$742] = 0;
      
      var $744 = HEAP[$p2] + 8;
      HEAP[$744] = 0;
      
      var $746 = HEAP[$p2] + 16;
      HEAP[$p2] = $746;
      
      var $748 = HEAP[$p2];
      HEAP[$748] = -9.542631940771103e+33;
      
      var $750 = HEAP[$p2] + 8;
      HEAP[$750] = -9.542631940771103e+33;
      
      var $752 = HEAP[$p2] + 16;
      HEAP[$p2] = $752;
      
      var $754 = HEAP[$p2];
      HEAP[$754] = Infinity;
      
      var $756 = HEAP[$p2] + 8;
      HEAP[$756] = 1.5707963267948966;
      
      var $758 = HEAP[$p2] + 16;
      HEAP[$p2] = $758;
      
      var $760 = HEAP[$p2];
      HEAP[$760] = NaN;
      
      var $762 = HEAP[$p2] + 8;
      HEAP[$762] = NaN;
      
      var $764 = HEAP[$p2] + 16;
      HEAP[$p2] = $764;
      
      var $766 = HEAP[$p2];
      HEAP[$766] = Infinity;
      
      var $768 = HEAP[$p2] + 8;
      HEAP[$768] = -1.5707963267948966;
      
      var $770 = HEAP[$p2] + 16;
      HEAP[$p2] = $770;
      
      var $772 = HEAP[$p2];
      HEAP[$772] = -9.542631940771103e+33;
      
      var $774 = HEAP[$p2] + 8;
      HEAP[$774] = -9.542631940771103e+33;
      
      var $776 = HEAP[$p2] + 16;
      HEAP[$p2] = $776;
      
      var $778 = HEAP[$p2];
      HEAP[$778] = -9.542631940771103e+33;
      
      var $780 = HEAP[$p2] + 8;
      HEAP[$780] = -9.542631940771103e+33;
      
      var $782 = HEAP[$p2] + 16;
      HEAP[$p2] = $782;
      
      var $784 = HEAP[$p2];
      HEAP[$784] = -9.542631940771103e+33;
      
      var $786 = HEAP[$p2] + 8;
      HEAP[$786] = -9.542631940771103e+33;
      
      var $788 = HEAP[$p2] + 16;
      HEAP[$p2] = $788;
      
      var $790 = HEAP[$p2];
      HEAP[$790] = -9.542631940771103e+33;
      
      var $792 = HEAP[$p2] + 8;
      HEAP[$792] = -9.542631940771103e+33;
      
      var $794 = HEAP[$p2] + 16;
      HEAP[$p2] = $794;
      
      var $796 = HEAP[$p2];
      HEAP[$796] = Infinity;
      
      var $798 = HEAP[$p2] + 8;
      HEAP[$798] = 1.5707963267948966;
      
      var $800 = HEAP[$p2] + 16;
      HEAP[$p2] = $800;
      
      var $802 = HEAP[$p2];
      HEAP[$802] = NaN;
      
      var $804 = HEAP[$p2] + 8;
      HEAP[$804] = NaN;
      
      var $806 = HEAP[$p2] + 16;
      HEAP[$p2] = $806;
      
      var $808 = HEAP[$p2];
      HEAP[$808] = Infinity;
      
      var $810 = HEAP[$p2] + 8;
      HEAP[$810] = -.7853981633974483;
      
      var $812 = HEAP[$p2] + 16;
      HEAP[$p2] = $812;
      
      var $814 = HEAP[$p2];
      HEAP[$814] = Infinity;
      
      var $816 = HEAP[$p2] + 8;
      HEAP[$816] = 0;
      
      var $818 = HEAP[$p2] + 16;
      HEAP[$p2] = $818;
      
      var $820 = HEAP[$p2];
      HEAP[$820] = Infinity;
      
      var $822 = HEAP[$p2] + 8;
      HEAP[$822] = 0;
      
      var $824 = HEAP[$p2] + 16;
      HEAP[$p2] = $824;
      
      var $826 = HEAP[$p2];
      HEAP[$826] = Infinity;
      
      var $828 = HEAP[$p2] + 8;
      HEAP[$828] = 0;
      
      var $830 = HEAP[$p2] + 16;
      HEAP[$p2] = $830;
      
      var $832 = HEAP[$p2];
      HEAP[$832] = Infinity;
      
      var $834 = HEAP[$p2] + 8;
      HEAP[$834] = 0;
      
      var $836 = HEAP[$p2] + 16;
      HEAP[$p2] = $836;
      
      var $838 = HEAP[$p2];
      HEAP[$838] = Infinity;
      
      var $840 = HEAP[$p2] + 8;
      HEAP[$840] = .7853981633974483;
      
      var $842 = HEAP[$p2] + 16;
      HEAP[$p2] = $842;
      
      var $844 = HEAP[$p2];
      HEAP[$844] = Infinity;
      
      var $846 = HEAP[$p2] + 8;
      HEAP[$846] = NaN;
      
      var $848 = HEAP[$p2] + 16;
      HEAP[$p2] = $848;
      
      var $850 = HEAP[$p2];
      HEAP[$850] = Infinity;
      
      var $852 = HEAP[$p2] + 8;
      HEAP[$852] = NaN;
      
      var $854 = HEAP[$p2] + 16;
      HEAP[$p2] = $854;
      
      var $856 = HEAP[$p2];
      HEAP[$856] = NaN;
      
      var $858 = HEAP[$p2] + 8;
      HEAP[$858] = NaN;
      
      var $860 = HEAP[$p2] + 16;
      HEAP[$p2] = $860;
      
      var $862 = HEAP[$p2];
      HEAP[$862] = NaN;
      
      var $864 = HEAP[$p2] + 8;
      HEAP[$864] = 0;
      
      var $866 = HEAP[$p2] + 16;
      HEAP[$p2] = $866;
      
      var $868 = HEAP[$p2];
      HEAP[$868] = NaN;
      
      var $870 = HEAP[$p2] + 8;
      HEAP[$870] = 0;
      
      var $872 = HEAP[$p2] + 16;
      HEAP[$p2] = $872;
      
      var $874 = HEAP[$p2];
      HEAP[$874] = NaN;
      
      var $876 = HEAP[$p2] + 8;
      HEAP[$876] = NaN;
      
      var $878 = HEAP[$p2] + 16;
      HEAP[$p2] = $878;
      
      var $880 = HEAP[$p2];
      HEAP[$880] = Infinity;
      
      var $882 = HEAP[$p2] + 8;
      HEAP[$882] = NaN;
      
      var $884 = HEAP[$p2] + 16;
      HEAP[$p2] = $884;
      
      var $886 = HEAP[$p2];
      HEAP[$886] = NaN;
      
      var $888 = HEAP[$p2] + 8;
      HEAP[$888] = NaN;
      
      var $890 = HEAP[$p2] + 16;
      HEAP[$p2] = $890;
      HEAP[$p3] = _atanh_special_values;
      
      var $892 = HEAP[$p3];
      HEAP[$892] = 0;
      
      var $894 = HEAP[$p3] + 8;
      HEAP[$894] = -1.5707963267948966;
      
      var $896 = HEAP[$p3] + 16;
      HEAP[$p3] = $896;
      
      var $898 = HEAP[$p3];
      HEAP[$898] = 0;
      
      var $900 = HEAP[$p3] + 8;
      HEAP[$900] = -1.5707963267948966;
      
      var $902 = HEAP[$p3] + 16;
      HEAP[$p3] = $902;
      
      var $904 = HEAP[$p3];
      HEAP[$904] = 0;
      
      var $906 = HEAP[$p3] + 8;
      HEAP[$906] = -1.5707963267948966;
      
      var $908 = HEAP[$p3] + 16;
      HEAP[$p3] = $908;
      
      var $910 = HEAP[$p3];
      HEAP[$910] = 0;
      
      var $912 = HEAP[$p3] + 8;
      HEAP[$912] = 1.5707963267948966;
      
      var $914 = HEAP[$p3] + 16;
      HEAP[$p3] = $914;
      
      var $916 = HEAP[$p3];
      HEAP[$916] = 0;
      
      var $918 = HEAP[$p3] + 8;
      HEAP[$918] = 1.5707963267948966;
      
      var $920 = HEAP[$p3] + 16;
      HEAP[$p3] = $920;
      
      var $922 = HEAP[$p3];
      HEAP[$922] = 0;
      
      var $924 = HEAP[$p3] + 8;
      HEAP[$924] = 1.5707963267948966;
      
      var $926 = HEAP[$p3] + 16;
      HEAP[$p3] = $926;
      
      var $928 = HEAP[$p3];
      HEAP[$928] = 0;
      
      var $930 = HEAP[$p3] + 8;
      HEAP[$930] = NaN;
      
      var $932 = HEAP[$p3] + 16;
      HEAP[$p3] = $932;
      
      var $934 = HEAP[$p3];
      HEAP[$934] = 0;
      
      var $936 = HEAP[$p3] + 8;
      HEAP[$936] = -1.5707963267948966;
      
      var $938 = HEAP[$p3] + 16;
      HEAP[$p3] = $938;
      
      var $940 = HEAP[$p3];
      HEAP[$940] = -9.542631940771103e+33;
      
      var $942 = HEAP[$p3] + 8;
      HEAP[$942] = -9.542631940771103e+33;
      
      var $944 = HEAP[$p3] + 16;
      HEAP[$p3] = $944;
      
      var $946 = HEAP[$p3];
      HEAP[$946] = -9.542631940771103e+33;
      
      var $948 = HEAP[$p3] + 8;
      HEAP[$948] = -9.542631940771103e+33;
      
      var $950 = HEAP[$p3] + 16;
      HEAP[$p3] = $950;
      
      var $952 = HEAP[$p3];
      HEAP[$952] = -9.542631940771103e+33;
      
      var $954 = HEAP[$p3] + 8;
      HEAP[$954] = -9.542631940771103e+33;
      
      var $956 = HEAP[$p3] + 16;
      HEAP[$p3] = $956;
      
      var $958 = HEAP[$p3];
      HEAP[$958] = -9.542631940771103e+33;
      
      var $960 = HEAP[$p3] + 8;
      HEAP[$960] = -9.542631940771103e+33;
      
      var $962 = HEAP[$p3] + 16;
      HEAP[$p3] = $962;
      
      var $964 = HEAP[$p3];
      HEAP[$964] = 0;
      
      var $966 = HEAP[$p3] + 8;
      HEAP[$966] = 1.5707963267948966;
      
      var $968 = HEAP[$p3] + 16;
      HEAP[$p3] = $968;
      
      var $970 = HEAP[$p3];
      HEAP[$970] = NaN;
      
      var $972 = HEAP[$p3] + 8;
      HEAP[$972] = NaN;
      
      var $974 = HEAP[$p3] + 16;
      HEAP[$p3] = $974;
      
      var $976 = HEAP[$p3];
      HEAP[$976] = 0;
      
      var $978 = HEAP[$p3] + 8;
      HEAP[$978] = -1.5707963267948966;
      
      var $980 = HEAP[$p3] + 16;
      HEAP[$p3] = $980;
      
      var $982 = HEAP[$p3];
      HEAP[$982] = -9.542631940771103e+33;
      
      var $984 = HEAP[$p3] + 8;
      HEAP[$984] = -9.542631940771103e+33;
      
      var $986 = HEAP[$p3] + 16;
      HEAP[$p3] = $986;
      
      var $988 = HEAP[$p3];
      HEAP[$988] = 0;
      
      var $990 = HEAP[$p3] + 8;
      HEAP[$990] = 0;
      
      var $992 = HEAP[$p3] + 16;
      HEAP[$p3] = $992;
      
      var $994 = HEAP[$p3];
      HEAP[$994] = 0;
      
      var $996 = HEAP[$p3] + 8;
      HEAP[$996] = 0;
      
      var $998 = HEAP[$p3] + 16;
      HEAP[$p3] = $998;
      
      var $1000 = HEAP[$p3];
      HEAP[$1000] = -9.542631940771103e+33;
      
      var $1002 = HEAP[$p3] + 8;
      HEAP[$1002] = -9.542631940771103e+33;
      
      var $1004 = HEAP[$p3] + 16;
      HEAP[$p3] = $1004;
      
      var $1006 = HEAP[$p3];
      HEAP[$1006] = 0;
      
      var $1008 = HEAP[$p3] + 8;
      HEAP[$1008] = 1.5707963267948966;
      
      var $1010 = HEAP[$p3] + 16;
      HEAP[$p3] = $1010;
      
      var $1012 = HEAP[$p3];
      HEAP[$1012] = 0;
      
      var $1014 = HEAP[$p3] + 8;
      HEAP[$1014] = NaN;
      
      var $1016 = HEAP[$p3] + 16;
      HEAP[$p3] = $1016;
      
      var $1018 = HEAP[$p3];
      HEAP[$1018] = 0;
      
      var $1020 = HEAP[$p3] + 8;
      HEAP[$1020] = -1.5707963267948966;
      
      var $1022 = HEAP[$p3] + 16;
      HEAP[$p3] = $1022;
      
      var $1024 = HEAP[$p3];
      HEAP[$1024] = -9.542631940771103e+33;
      
      var $1026 = HEAP[$p3] + 8;
      HEAP[$1026] = -9.542631940771103e+33;
      
      var $1028 = HEAP[$p3] + 16;
      HEAP[$p3] = $1028;
      
      var $1030 = HEAP[$p3];
      HEAP[$1030] = 0;
      
      var $1032 = HEAP[$p3] + 8;
      HEAP[$1032] = 0;
      
      var $1034 = HEAP[$p3] + 16;
      HEAP[$p3] = $1034;
      
      var $1036 = HEAP[$p3];
      HEAP[$1036] = 0;
      
      var $1038 = HEAP[$p3] + 8;
      HEAP[$1038] = 0;
      
      var $1040 = HEAP[$p3] + 16;
      HEAP[$p3] = $1040;
      
      var $1042 = HEAP[$p3];
      HEAP[$1042] = -9.542631940771103e+33;
      
      var $1044 = HEAP[$p3] + 8;
      HEAP[$1044] = -9.542631940771103e+33;
      
      var $1046 = HEAP[$p3] + 16;
      HEAP[$p3] = $1046;
      
      var $1048 = HEAP[$p3];
      HEAP[$1048] = 0;
      
      var $1050 = HEAP[$p3] + 8;
      HEAP[$1050] = 1.5707963267948966;
      
      var $1052 = HEAP[$p3] + 16;
      HEAP[$p3] = $1052;
      
      var $1054 = HEAP[$p3];
      HEAP[$1054] = 0;
      
      var $1056 = HEAP[$p3] + 8;
      HEAP[$1056] = NaN;
      
      var $1058 = HEAP[$p3] + 16;
      HEAP[$p3] = $1058;
      
      var $1060 = HEAP[$p3];
      HEAP[$1060] = 0;
      
      var $1062 = HEAP[$p3] + 8;
      HEAP[$1062] = -1.5707963267948966;
      
      var $1064 = HEAP[$p3] + 16;
      HEAP[$p3] = $1064;
      
      var $1066 = HEAP[$p3];
      HEAP[$1066] = -9.542631940771103e+33;
      
      var $1068 = HEAP[$p3] + 8;
      HEAP[$1068] = -9.542631940771103e+33;
      
      var $1070 = HEAP[$p3] + 16;
      HEAP[$p3] = $1070;
      
      var $1072 = HEAP[$p3];
      HEAP[$1072] = -9.542631940771103e+33;
      
      var $1074 = HEAP[$p3] + 8;
      HEAP[$1074] = -9.542631940771103e+33;
      
      var $1076 = HEAP[$p3] + 16;
      HEAP[$p3] = $1076;
      
      var $1078 = HEAP[$p3];
      HEAP[$1078] = -9.542631940771103e+33;
      
      var $1080 = HEAP[$p3] + 8;
      HEAP[$1080] = -9.542631940771103e+33;
      
      var $1082 = HEAP[$p3] + 16;
      HEAP[$p3] = $1082;
      
      var $1084 = HEAP[$p3];
      HEAP[$1084] = -9.542631940771103e+33;
      
      var $1086 = HEAP[$p3] + 8;
      HEAP[$1086] = -9.542631940771103e+33;
      
      var $1088 = HEAP[$p3] + 16;
      HEAP[$p3] = $1088;
      
      var $1090 = HEAP[$p3];
      HEAP[$1090] = 0;
      
      var $1092 = HEAP[$p3] + 8;
      HEAP[$1092] = 1.5707963267948966;
      
      var $1094 = HEAP[$p3] + 16;
      HEAP[$p3] = $1094;
      
      var $1096 = HEAP[$p3];
      HEAP[$1096] = NaN;
      
      var $1098 = HEAP[$p3] + 8;
      HEAP[$1098] = NaN;
      
      var $1100 = HEAP[$p3] + 16;
      HEAP[$p3] = $1100;
      
      var $1102 = HEAP[$p3];
      HEAP[$1102] = 0;
      
      var $1104 = HEAP[$p3] + 8;
      HEAP[$1104] = -1.5707963267948966;
      
      var $1106 = HEAP[$p3] + 16;
      HEAP[$p3] = $1106;
      
      var $1108 = HEAP[$p3];
      HEAP[$1108] = 0;
      
      var $1110 = HEAP[$p3] + 8;
      HEAP[$1110] = -1.5707963267948966;
      
      var $1112 = HEAP[$p3] + 16;
      HEAP[$p3] = $1112;
      
      var $1114 = HEAP[$p3];
      HEAP[$1114] = 0;
      
      var $1116 = HEAP[$p3] + 8;
      HEAP[$1116] = -1.5707963267948966;
      
      var $1118 = HEAP[$p3] + 16;
      HEAP[$p3] = $1118;
      
      var $1120 = HEAP[$p3];
      HEAP[$1120] = 0;
      
      var $1122 = HEAP[$p3] + 8;
      HEAP[$1122] = 1.5707963267948966;
      
      var $1124 = HEAP[$p3] + 16;
      HEAP[$p3] = $1124;
      
      var $1126 = HEAP[$p3];
      HEAP[$1126] = 0;
      
      var $1128 = HEAP[$p3] + 8;
      HEAP[$1128] = 1.5707963267948966;
      
      var $1130 = HEAP[$p3] + 16;
      HEAP[$p3] = $1130;
      
      var $1132 = HEAP[$p3];
      HEAP[$1132] = 0;
      
      var $1134 = HEAP[$p3] + 8;
      HEAP[$1134] = 1.5707963267948966;
      
      var $1136 = HEAP[$p3] + 16;
      HEAP[$p3] = $1136;
      
      var $1138 = HEAP[$p3];
      HEAP[$1138] = 0;
      
      var $1140 = HEAP[$p3] + 8;
      HEAP[$1140] = NaN;
      
      var $1142 = HEAP[$p3] + 16;
      HEAP[$p3] = $1142;
      
      var $1144 = HEAP[$p3];
      HEAP[$1144] = 0;
      
      var $1146 = HEAP[$p3] + 8;
      HEAP[$1146] = -1.5707963267948966;
      
      var $1148 = HEAP[$p3] + 16;
      HEAP[$p3] = $1148;
      
      var $1150 = HEAP[$p3];
      HEAP[$1150] = NaN;
      
      var $1152 = HEAP[$p3] + 8;
      HEAP[$1152] = NaN;
      
      var $1154 = HEAP[$p3] + 16;
      HEAP[$p3] = $1154;
      
      var $1156 = HEAP[$p3];
      HEAP[$1156] = NaN;
      
      var $1158 = HEAP[$p3] + 8;
      HEAP[$1158] = NaN;
      
      var $1160 = HEAP[$p3] + 16;
      HEAP[$p3] = $1160;
      
      var $1162 = HEAP[$p3];
      HEAP[$1162] = NaN;
      
      var $1164 = HEAP[$p3] + 8;
      HEAP[$1164] = NaN;
      
      var $1166 = HEAP[$p3] + 16;
      HEAP[$p3] = $1166;
      
      var $1168 = HEAP[$p3];
      HEAP[$1168] = NaN;
      
      var $1170 = HEAP[$p3] + 8;
      HEAP[$1170] = NaN;
      
      var $1172 = HEAP[$p3] + 16;
      HEAP[$p3] = $1172;
      
      var $1174 = HEAP[$p3];
      HEAP[$1174] = 0;
      
      var $1176 = HEAP[$p3] + 8;
      HEAP[$1176] = 1.5707963267948966;
      
      var $1178 = HEAP[$p3] + 16;
      HEAP[$p3] = $1178;
      
      var $1180 = HEAP[$p3];
      HEAP[$1180] = NaN;
      
      var $1182 = HEAP[$p3] + 8;
      HEAP[$1182] = NaN;
      
      var $1184 = HEAP[$p3] + 16;
      HEAP[$p3] = $1184;
      HEAP[$p4] = _cosh_special_values;
      
      var $1186 = HEAP[$p4];
      HEAP[$1186] = Infinity;
      
      var $1188 = HEAP[$p4] + 8;
      HEAP[$1188] = NaN;
      
      var $1190 = HEAP[$p4] + 16;
      HEAP[$p4] = $1190;
      
      var $1192 = HEAP[$p4];
      HEAP[$1192] = -9.542631940771103e+33;
      
      var $1194 = HEAP[$p4] + 8;
      HEAP[$1194] = -9.542631940771103e+33;
      
      var $1196 = HEAP[$p4] + 16;
      HEAP[$p4] = $1196;
      
      var $1198 = HEAP[$p4];
      HEAP[$1198] = Infinity;
      
      var $1200 = HEAP[$p4] + 8;
      HEAP[$1200] = 0;
      
      var $1202 = HEAP[$p4] + 16;
      HEAP[$p4] = $1202;
      
      var $1204 = HEAP[$p4];
      HEAP[$1204] = Infinity;
      
      var $1206 = HEAP[$p4] + 8;
      HEAP[$1206] = 0;
      
      var $1208 = HEAP[$p4] + 16;
      HEAP[$p4] = $1208;
      
      var $1210 = HEAP[$p4];
      HEAP[$1210] = -9.542631940771103e+33;
      
      var $1212 = HEAP[$p4] + 8;
      HEAP[$1212] = -9.542631940771103e+33;
      
      var $1214 = HEAP[$p4] + 16;
      HEAP[$p4] = $1214;
      
      var $1216 = HEAP[$p4];
      HEAP[$1216] = Infinity;
      
      var $1218 = HEAP[$p4] + 8;
      HEAP[$1218] = NaN;
      
      var $1220 = HEAP[$p4] + 16;
      HEAP[$p4] = $1220;
      
      var $1222 = HEAP[$p4];
      HEAP[$1222] = Infinity;
      
      var $1224 = HEAP[$p4] + 8;
      HEAP[$1224] = NaN;
      
      var $1226 = HEAP[$p4] + 16;
      HEAP[$p4] = $1226;
      
      var $1228 = HEAP[$p4];
      HEAP[$1228] = NaN;
      
      var $1230 = HEAP[$p4] + 8;
      HEAP[$1230] = NaN;
      
      var $1232 = HEAP[$p4] + 16;
      HEAP[$p4] = $1232;
      
      var $1234 = HEAP[$p4];
      HEAP[$1234] = -9.542631940771103e+33;
      
      var $1236 = HEAP[$p4] + 8;
      HEAP[$1236] = -9.542631940771103e+33;
      
      var $1238 = HEAP[$p4] + 16;
      HEAP[$p4] = $1238;
      
      var $1240 = HEAP[$p4];
      HEAP[$1240] = -9.542631940771103e+33;
      
      var $1242 = HEAP[$p4] + 8;
      HEAP[$1242] = -9.542631940771103e+33;
      
      var $1244 = HEAP[$p4] + 16;
      HEAP[$p4] = $1244;
      
      var $1246 = HEAP[$p4];
      HEAP[$1246] = -9.542631940771103e+33;
      
      var $1248 = HEAP[$p4] + 8;
      HEAP[$1248] = -9.542631940771103e+33;
      
      var $1250 = HEAP[$p4] + 16;
      HEAP[$p4] = $1250;
      
      var $1252 = HEAP[$p4];
      HEAP[$1252] = -9.542631940771103e+33;
      
      var $1254 = HEAP[$p4] + 8;
      HEAP[$1254] = -9.542631940771103e+33;
      
      var $1256 = HEAP[$p4] + 16;
      HEAP[$p4] = $1256;
      
      var $1258 = HEAP[$p4];
      HEAP[$1258] = NaN;
      
      var $1260 = HEAP[$p4] + 8;
      HEAP[$1260] = NaN;
      
      var $1262 = HEAP[$p4] + 16;
      HEAP[$p4] = $1262;
      
      var $1264 = HEAP[$p4];
      HEAP[$1264] = NaN;
      
      var $1266 = HEAP[$p4] + 8;
      HEAP[$1266] = NaN;
      
      var $1268 = HEAP[$p4] + 16;
      HEAP[$p4] = $1268;
      
      var $1270 = HEAP[$p4];
      HEAP[$1270] = NaN;
      
      var $1272 = HEAP[$p4] + 8;
      HEAP[$1272] = 0;
      
      var $1274 = HEAP[$p4] + 16;
      HEAP[$p4] = $1274;
      
      var $1276 = HEAP[$p4];
      HEAP[$1276] = -9.542631940771103e+33;
      
      var $1278 = HEAP[$p4] + 8;
      HEAP[$1278] = -9.542631940771103e+33;
      
      var $1280 = HEAP[$p4] + 16;
      HEAP[$p4] = $1280;
      
      var $1282 = HEAP[$p4];
      HEAP[$1282] = 1;
      
      var $1284 = HEAP[$p4] + 8;
      HEAP[$1284] = 0;
      
      var $1286 = HEAP[$p4] + 16;
      HEAP[$p4] = $1286;
      
      var $1288 = HEAP[$p4];
      HEAP[$1288] = 1;
      
      var $1290 = HEAP[$p4] + 8;
      HEAP[$1290] = 0;
      
      var $1292 = HEAP[$p4] + 16;
      HEAP[$p4] = $1292;
      
      var $1294 = HEAP[$p4];
      HEAP[$1294] = -9.542631940771103e+33;
      
      var $1296 = HEAP[$p4] + 8;
      HEAP[$1296] = -9.542631940771103e+33;
      
      var $1298 = HEAP[$p4] + 16;
      HEAP[$p4] = $1298;
      
      var $1300 = HEAP[$p4];
      HEAP[$1300] = NaN;
      
      var $1302 = HEAP[$p4] + 8;
      HEAP[$1302] = 0;
      
      var $1304 = HEAP[$p4] + 16;
      HEAP[$p4] = $1304;
      
      var $1306 = HEAP[$p4];
      HEAP[$1306] = NaN;
      
      var $1308 = HEAP[$p4] + 8;
      HEAP[$1308] = 0;
      
      var $1310 = HEAP[$p4] + 16;
      HEAP[$p4] = $1310;
      
      var $1312 = HEAP[$p4];
      HEAP[$1312] = NaN;
      
      var $1314 = HEAP[$p4] + 8;
      HEAP[$1314] = 0;
      
      var $1316 = HEAP[$p4] + 16;
      HEAP[$p4] = $1316;
      
      var $1318 = HEAP[$p4];
      HEAP[$1318] = -9.542631940771103e+33;
      
      var $1320 = HEAP[$p4] + 8;
      HEAP[$1320] = -9.542631940771103e+33;
      
      var $1322 = HEAP[$p4] + 16;
      HEAP[$p4] = $1322;
      
      var $1324 = HEAP[$p4];
      HEAP[$1324] = 1;
      
      var $1326 = HEAP[$p4] + 8;
      HEAP[$1326] = 0;
      
      var $1328 = HEAP[$p4] + 16;
      HEAP[$p4] = $1328;
      
      var $1330 = HEAP[$p4];
      HEAP[$1330] = 1;
      
      var $1332 = HEAP[$p4] + 8;
      HEAP[$1332] = 0;
      
      var $1334 = HEAP[$p4] + 16;
      HEAP[$p4] = $1334;
      
      var $1336 = HEAP[$p4];
      HEAP[$1336] = -9.542631940771103e+33;
      
      var $1338 = HEAP[$p4] + 8;
      HEAP[$1338] = -9.542631940771103e+33;
      
      var $1340 = HEAP[$p4] + 16;
      HEAP[$p4] = $1340;
      
      var $1342 = HEAP[$p4];
      HEAP[$1342] = NaN;
      
      var $1344 = HEAP[$p4] + 8;
      HEAP[$1344] = 0;
      
      var $1346 = HEAP[$p4] + 16;
      HEAP[$p4] = $1346;
      
      var $1348 = HEAP[$p4];
      HEAP[$1348] = NaN;
      
      var $1350 = HEAP[$p4] + 8;
      HEAP[$1350] = 0;
      
      var $1352 = HEAP[$p4] + 16;
      HEAP[$p4] = $1352;
      
      var $1354 = HEAP[$p4];
      HEAP[$1354] = NaN;
      
      var $1356 = HEAP[$p4] + 8;
      HEAP[$1356] = NaN;
      
      var $1358 = HEAP[$p4] + 16;
      HEAP[$p4] = $1358;
      
      var $1360 = HEAP[$p4];
      HEAP[$1360] = -9.542631940771103e+33;
      
      var $1362 = HEAP[$p4] + 8;
      HEAP[$1362] = -9.542631940771103e+33;
      
      var $1364 = HEAP[$p4] + 16;
      HEAP[$p4] = $1364;
      
      var $1366 = HEAP[$p4];
      HEAP[$1366] = -9.542631940771103e+33;
      
      var $1368 = HEAP[$p4] + 8;
      HEAP[$1368] = -9.542631940771103e+33;
      
      var $1370 = HEAP[$p4] + 16;
      HEAP[$p4] = $1370;
      
      var $1372 = HEAP[$p4];
      HEAP[$1372] = -9.542631940771103e+33;
      
      var $1374 = HEAP[$p4] + 8;
      HEAP[$1374] = -9.542631940771103e+33;
      
      var $1376 = HEAP[$p4] + 16;
      HEAP[$p4] = $1376;
      
      var $1378 = HEAP[$p4];
      HEAP[$1378] = -9.542631940771103e+33;
      
      var $1380 = HEAP[$p4] + 8;
      HEAP[$1380] = -9.542631940771103e+33;
      
      var $1382 = HEAP[$p4] + 16;
      HEAP[$p4] = $1382;
      
      var $1384 = HEAP[$p4];
      HEAP[$1384] = NaN;
      
      var $1386 = HEAP[$p4] + 8;
      HEAP[$1386] = NaN;
      
      var $1388 = HEAP[$p4] + 16;
      HEAP[$p4] = $1388;
      
      var $1390 = HEAP[$p4];
      HEAP[$1390] = NaN;
      
      var $1392 = HEAP[$p4] + 8;
      HEAP[$1392] = NaN;
      
      var $1394 = HEAP[$p4] + 16;
      HEAP[$p4] = $1394;
      
      var $1396 = HEAP[$p4];
      HEAP[$1396] = Infinity;
      
      var $1398 = HEAP[$p4] + 8;
      HEAP[$1398] = NaN;
      
      var $1400 = HEAP[$p4] + 16;
      HEAP[$p4] = $1400;
      
      var $1402 = HEAP[$p4];
      HEAP[$1402] = -9.542631940771103e+33;
      
      var $1404 = HEAP[$p4] + 8;
      HEAP[$1404] = -9.542631940771103e+33;
      
      var $1406 = HEAP[$p4] + 16;
      HEAP[$p4] = $1406;
      
      var $1408 = HEAP[$p4];
      HEAP[$1408] = Infinity;
      
      var $1410 = HEAP[$p4] + 8;
      HEAP[$1410] = 0;
      
      var $1412 = HEAP[$p4] + 16;
      HEAP[$p4] = $1412;
      
      var $1414 = HEAP[$p4];
      HEAP[$1414] = Infinity;
      
      var $1416 = HEAP[$p4] + 8;
      HEAP[$1416] = 0;
      
      var $1418 = HEAP[$p4] + 16;
      HEAP[$p4] = $1418;
      
      var $1420 = HEAP[$p4];
      HEAP[$1420] = -9.542631940771103e+33;
      
      var $1422 = HEAP[$p4] + 8;
      HEAP[$1422] = -9.542631940771103e+33;
      
      var $1424 = HEAP[$p4] + 16;
      HEAP[$p4] = $1424;
      
      var $1426 = HEAP[$p4];
      HEAP[$1426] = Infinity;
      
      var $1428 = HEAP[$p4] + 8;
      HEAP[$1428] = NaN;
      
      var $1430 = HEAP[$p4] + 16;
      HEAP[$p4] = $1430;
      
      var $1432 = HEAP[$p4];
      HEAP[$1432] = Infinity;
      
      var $1434 = HEAP[$p4] + 8;
      HEAP[$1434] = NaN;
      
      var $1436 = HEAP[$p4] + 16;
      HEAP[$p4] = $1436;
      
      var $1438 = HEAP[$p4];
      HEAP[$1438] = NaN;
      
      var $1440 = HEAP[$p4] + 8;
      HEAP[$1440] = NaN;
      
      var $1442 = HEAP[$p4] + 16;
      HEAP[$p4] = $1442;
      
      var $1444 = HEAP[$p4];
      HEAP[$1444] = NaN;
      
      var $1446 = HEAP[$p4] + 8;
      HEAP[$1446] = NaN;
      
      var $1448 = HEAP[$p4] + 16;
      HEAP[$p4] = $1448;
      
      var $1450 = HEAP[$p4];
      HEAP[$1450] = NaN;
      
      var $1452 = HEAP[$p4] + 8;
      HEAP[$1452] = 0;
      
      var $1454 = HEAP[$p4] + 16;
      HEAP[$p4] = $1454;
      
      var $1456 = HEAP[$p4];
      HEAP[$1456] = NaN;
      
      var $1458 = HEAP[$p4] + 8;
      HEAP[$1458] = 0;
      
      var $1460 = HEAP[$p4] + 16;
      HEAP[$p4] = $1460;
      
      var $1462 = HEAP[$p4];
      HEAP[$1462] = NaN;
      
      var $1464 = HEAP[$p4] + 8;
      HEAP[$1464] = NaN;
      
      var $1466 = HEAP[$p4] + 16;
      HEAP[$p4] = $1466;
      
      var $1468 = HEAP[$p4];
      HEAP[$1468] = NaN;
      
      var $1470 = HEAP[$p4] + 8;
      HEAP[$1470] = NaN;
      
      var $1472 = HEAP[$p4] + 16;
      HEAP[$p4] = $1472;
      
      var $1474 = HEAP[$p4];
      HEAP[$1474] = NaN;
      
      var $1476 = HEAP[$p4] + 8;
      HEAP[$1476] = NaN;
      
      var $1478 = HEAP[$p4] + 16;
      HEAP[$p4] = $1478;
      HEAP[$p5] = _exp_special_values;
      
      var $1480 = HEAP[$p5];
      HEAP[$1480] = 0;
      
      var $1482 = HEAP[$p5] + 8;
      HEAP[$1482] = 0;
      
      var $1484 = HEAP[$p5] + 16;
      HEAP[$p5] = $1484;
      
      var $1486 = HEAP[$p5];
      HEAP[$1486] = -9.542631940771103e+33;
      
      var $1488 = HEAP[$p5] + 8;
      HEAP[$1488] = -9.542631940771103e+33;
      
      var $1490 = HEAP[$p5] + 16;
      HEAP[$p5] = $1490;
      
      var $1492 = HEAP[$p5];
      HEAP[$1492] = 0;
      
      var $1494 = HEAP[$p5] + 8;
      HEAP[$1494] = 0;
      
      var $1496 = HEAP[$p5] + 16;
      HEAP[$p5] = $1496;
      
      var $1498 = HEAP[$p5];
      HEAP[$1498] = 0;
      
      var $1500 = HEAP[$p5] + 8;
      HEAP[$1500] = 0;
      
      var $1502 = HEAP[$p5] + 16;
      HEAP[$p5] = $1502;
      
      var $1504 = HEAP[$p5];
      HEAP[$1504] = -9.542631940771103e+33;
      
      var $1506 = HEAP[$p5] + 8;
      HEAP[$1506] = -9.542631940771103e+33;
      
      var $1508 = HEAP[$p5] + 16;
      HEAP[$p5] = $1508;
      
      var $1510 = HEAP[$p5];
      HEAP[$1510] = 0;
      
      var $1512 = HEAP[$p5] + 8;
      HEAP[$1512] = 0;
      
      var $1514 = HEAP[$p5] + 16;
      HEAP[$p5] = $1514;
      
      var $1516 = HEAP[$p5];
      HEAP[$1516] = 0;
      
      var $1518 = HEAP[$p5] + 8;
      HEAP[$1518] = 0;
      
      var $1520 = HEAP[$p5] + 16;
      HEAP[$p5] = $1520;
      
      var $1522 = HEAP[$p5];
      HEAP[$1522] = NaN;
      
      var $1524 = HEAP[$p5] + 8;
      HEAP[$1524] = NaN;
      
      var $1526 = HEAP[$p5] + 16;
      HEAP[$p5] = $1526;
      
      var $1528 = HEAP[$p5];
      HEAP[$1528] = -9.542631940771103e+33;
      
      var $1530 = HEAP[$p5] + 8;
      HEAP[$1530] = -9.542631940771103e+33;
      
      var $1532 = HEAP[$p5] + 16;
      HEAP[$p5] = $1532;
      
      var $1534 = HEAP[$p5];
      HEAP[$1534] = -9.542631940771103e+33;
      
      var $1536 = HEAP[$p5] + 8;
      HEAP[$1536] = -9.542631940771103e+33;
      
      var $1538 = HEAP[$p5] + 16;
      HEAP[$p5] = $1538;
      
      var $1540 = HEAP[$p5];
      HEAP[$1540] = -9.542631940771103e+33;
      
      var $1542 = HEAP[$p5] + 8;
      HEAP[$1542] = -9.542631940771103e+33;
      
      var $1544 = HEAP[$p5] + 16;
      HEAP[$p5] = $1544;
      
      var $1546 = HEAP[$p5];
      HEAP[$1546] = -9.542631940771103e+33;
      
      var $1548 = HEAP[$p5] + 8;
      HEAP[$1548] = -9.542631940771103e+33;
      
      var $1550 = HEAP[$p5] + 16;
      HEAP[$p5] = $1550;
      
      var $1552 = HEAP[$p5];
      HEAP[$1552] = NaN;
      
      var $1554 = HEAP[$p5] + 8;
      HEAP[$1554] = NaN;
      
      var $1556 = HEAP[$p5] + 16;
      HEAP[$p5] = $1556;
      
      var $1558 = HEAP[$p5];
      HEAP[$1558] = NaN;
      
      var $1560 = HEAP[$p5] + 8;
      HEAP[$1560] = NaN;
      
      var $1562 = HEAP[$p5] + 16;
      HEAP[$p5] = $1562;
      
      var $1564 = HEAP[$p5];
      HEAP[$1564] = NaN;
      
      var $1566 = HEAP[$p5] + 8;
      HEAP[$1566] = NaN;
      
      var $1568 = HEAP[$p5] + 16;
      HEAP[$p5] = $1568;
      
      var $1570 = HEAP[$p5];
      HEAP[$1570] = -9.542631940771103e+33;
      
      var $1572 = HEAP[$p5] + 8;
      HEAP[$1572] = -9.542631940771103e+33;
      
      var $1574 = HEAP[$p5] + 16;
      HEAP[$p5] = $1574;
      
      var $1576 = HEAP[$p5];
      HEAP[$1576] = 1;
      
      var $1578 = HEAP[$p5] + 8;
      HEAP[$1578] = 0;
      
      var $1580 = HEAP[$p5] + 16;
      HEAP[$p5] = $1580;
      
      var $1582 = HEAP[$p5];
      HEAP[$1582] = 1;
      
      var $1584 = HEAP[$p5] + 8;
      HEAP[$1584] = 0;
      
      var $1586 = HEAP[$p5] + 16;
      HEAP[$p5] = $1586;
      
      var $1588 = HEAP[$p5];
      HEAP[$1588] = -9.542631940771103e+33;
      
      var $1590 = HEAP[$p5] + 8;
      HEAP[$1590] = -9.542631940771103e+33;
      
      var $1592 = HEAP[$p5] + 16;
      HEAP[$p5] = $1592;
      
      var $1594 = HEAP[$p5];
      HEAP[$1594] = NaN;
      
      var $1596 = HEAP[$p5] + 8;
      HEAP[$1596] = NaN;
      
      var $1598 = HEAP[$p5] + 16;
      HEAP[$p5] = $1598;
      
      var $1600 = HEAP[$p5];
      HEAP[$1600] = NaN;
      
      var $1602 = HEAP[$p5] + 8;
      HEAP[$1602] = NaN;
      
      var $1604 = HEAP[$p5] + 16;
      HEAP[$p5] = $1604;
      
      var $1606 = HEAP[$p5];
      HEAP[$1606] = NaN;
      
      var $1608 = HEAP[$p5] + 8;
      HEAP[$1608] = NaN;
      
      var $1610 = HEAP[$p5] + 16;
      HEAP[$p5] = $1610;
      
      var $1612 = HEAP[$p5];
      HEAP[$1612] = -9.542631940771103e+33;
      
      var $1614 = HEAP[$p5] + 8;
      HEAP[$1614] = -9.542631940771103e+33;
      
      var $1616 = HEAP[$p5] + 16;
      HEAP[$p5] = $1616;
      
      var $1618 = HEAP[$p5];
      HEAP[$1618] = 1;
      
      var $1620 = HEAP[$p5] + 8;
      HEAP[$1620] = 0;
      
      var $1622 = HEAP[$p5] + 16;
      HEAP[$p5] = $1622;
      
      var $1624 = HEAP[$p5];
      HEAP[$1624] = 1;
      
      var $1626 = HEAP[$p5] + 8;
      HEAP[$1626] = 0;
      
      var $1628 = HEAP[$p5] + 16;
      HEAP[$p5] = $1628;
      
      var $1630 = HEAP[$p5];
      HEAP[$1630] = -9.542631940771103e+33;
      
      var $1632 = HEAP[$p5] + 8;
      HEAP[$1632] = -9.542631940771103e+33;
      
      var $1634 = HEAP[$p5] + 16;
      HEAP[$p5] = $1634;
      
      var $1636 = HEAP[$p5];
      HEAP[$1636] = NaN;
      
      var $1638 = HEAP[$p5] + 8;
      HEAP[$1638] = NaN;
      
      var $1640 = HEAP[$p5] + 16;
      HEAP[$p5] = $1640;
      
      var $1642 = HEAP[$p5];
      HEAP[$1642] = NaN;
      
      var $1644 = HEAP[$p5] + 8;
      HEAP[$1644] = NaN;
      
      var $1646 = HEAP[$p5] + 16;
      HEAP[$p5] = $1646;
      
      var $1648 = HEAP[$p5];
      HEAP[$1648] = NaN;
      
      var $1650 = HEAP[$p5] + 8;
      HEAP[$1650] = NaN;
      
      var $1652 = HEAP[$p5] + 16;
      HEAP[$p5] = $1652;
      
      var $1654 = HEAP[$p5];
      HEAP[$1654] = -9.542631940771103e+33;
      
      var $1656 = HEAP[$p5] + 8;
      HEAP[$1656] = -9.542631940771103e+33;
      
      var $1658 = HEAP[$p5] + 16;
      HEAP[$p5] = $1658;
      
      var $1660 = HEAP[$p5];
      HEAP[$1660] = -9.542631940771103e+33;
      
      var $1662 = HEAP[$p5] + 8;
      HEAP[$1662] = -9.542631940771103e+33;
      
      var $1664 = HEAP[$p5] + 16;
      HEAP[$p5] = $1664;
      
      var $1666 = HEAP[$p5];
      HEAP[$1666] = -9.542631940771103e+33;
      
      var $1668 = HEAP[$p5] + 8;
      HEAP[$1668] = -9.542631940771103e+33;
      
      var $1670 = HEAP[$p5] + 16;
      HEAP[$p5] = $1670;
      
      var $1672 = HEAP[$p5];
      HEAP[$1672] = -9.542631940771103e+33;
      
      var $1674 = HEAP[$p5] + 8;
      HEAP[$1674] = -9.542631940771103e+33;
      
      var $1676 = HEAP[$p5] + 16;
      HEAP[$p5] = $1676;
      
      var $1678 = HEAP[$p5];
      HEAP[$1678] = NaN;
      
      var $1680 = HEAP[$p5] + 8;
      HEAP[$1680] = NaN;
      
      var $1682 = HEAP[$p5] + 16;
      HEAP[$p5] = $1682;
      
      var $1684 = HEAP[$p5];
      HEAP[$1684] = NaN;
      
      var $1686 = HEAP[$p5] + 8;
      HEAP[$1686] = NaN;
      
      var $1688 = HEAP[$p5] + 16;
      HEAP[$p5] = $1688;
      
      var $1690 = HEAP[$p5];
      HEAP[$1690] = Infinity;
      
      var $1692 = HEAP[$p5] + 8;
      HEAP[$1692] = NaN;
      
      var $1694 = HEAP[$p5] + 16;
      HEAP[$p5] = $1694;
      
      var $1696 = HEAP[$p5];
      HEAP[$1696] = -9.542631940771103e+33;
      
      var $1698 = HEAP[$p5] + 8;
      HEAP[$1698] = -9.542631940771103e+33;
      
      var $1700 = HEAP[$p5] + 16;
      HEAP[$p5] = $1700;
      
      var $1702 = HEAP[$p5];
      HEAP[$1702] = Infinity;
      
      var $1704 = HEAP[$p5] + 8;
      HEAP[$1704] = 0;
      
      var $1706 = HEAP[$p5] + 16;
      HEAP[$p5] = $1706;
      
      var $1708 = HEAP[$p5];
      HEAP[$1708] = Infinity;
      
      var $1710 = HEAP[$p5] + 8;
      HEAP[$1710] = 0;
      
      var $1712 = HEAP[$p5] + 16;
      HEAP[$p5] = $1712;
      
      var $1714 = HEAP[$p5];
      HEAP[$1714] = -9.542631940771103e+33;
      
      var $1716 = HEAP[$p5] + 8;
      HEAP[$1716] = -9.542631940771103e+33;
      
      var $1718 = HEAP[$p5] + 16;
      HEAP[$p5] = $1718;
      
      var $1720 = HEAP[$p5];
      HEAP[$1720] = Infinity;
      
      var $1722 = HEAP[$p5] + 8;
      HEAP[$1722] = NaN;
      
      var $1724 = HEAP[$p5] + 16;
      HEAP[$p5] = $1724;
      
      var $1726 = HEAP[$p5];
      HEAP[$1726] = Infinity;
      
      var $1728 = HEAP[$p5] + 8;
      HEAP[$1728] = NaN;
      
      var $1730 = HEAP[$p5] + 16;
      HEAP[$p5] = $1730;
      
      var $1732 = HEAP[$p5];
      HEAP[$1732] = NaN;
      
      var $1734 = HEAP[$p5] + 8;
      HEAP[$1734] = NaN;
      
      var $1736 = HEAP[$p5] + 16;
      HEAP[$p5] = $1736;
      
      var $1738 = HEAP[$p5];
      HEAP[$1738] = NaN;
      
      var $1740 = HEAP[$p5] + 8;
      HEAP[$1740] = NaN;
      
      var $1742 = HEAP[$p5] + 16;
      HEAP[$p5] = $1742;
      
      var $1744 = HEAP[$p5];
      HEAP[$1744] = NaN;
      
      var $1746 = HEAP[$p5] + 8;
      HEAP[$1746] = 0;
      
      var $1748 = HEAP[$p5] + 16;
      HEAP[$p5] = $1748;
      
      var $1750 = HEAP[$p5];
      HEAP[$1750] = NaN;
      
      var $1752 = HEAP[$p5] + 8;
      HEAP[$1752] = 0;
      
      var $1754 = HEAP[$p5] + 16;
      HEAP[$p5] = $1754;
      
      var $1756 = HEAP[$p5];
      HEAP[$1756] = NaN;
      
      var $1758 = HEAP[$p5] + 8;
      HEAP[$1758] = NaN;
      
      var $1760 = HEAP[$p5] + 16;
      HEAP[$p5] = $1760;
      
      var $1762 = HEAP[$p5];
      HEAP[$1762] = NaN;
      
      var $1764 = HEAP[$p5] + 8;
      HEAP[$1764] = NaN;
      
      var $1766 = HEAP[$p5] + 16;
      HEAP[$p5] = $1766;
      
      var $1768 = HEAP[$p5];
      HEAP[$1768] = NaN;
      
      var $1770 = HEAP[$p5] + 8;
      HEAP[$1770] = NaN;
      
      var $1772 = HEAP[$p5] + 16;
      HEAP[$p5] = $1772;
      HEAP[$p6] = _log_special_values;
      
      var $1774 = HEAP[$p6];
      HEAP[$1774] = Infinity;
      
      var $1776 = HEAP[$p6] + 8;
      HEAP[$1776] = -2.356194490192345;
      
      var $1778 = HEAP[$p6] + 16;
      HEAP[$p6] = $1778;
      
      var $1780 = HEAP[$p6];
      HEAP[$1780] = Infinity;
      
      var $1782 = HEAP[$p6] + 8;
      HEAP[$1782] = -3.141592653589793;
      
      var $1784 = HEAP[$p6] + 16;
      HEAP[$p6] = $1784;
      
      var $1786 = HEAP[$p6];
      HEAP[$1786] = Infinity;
      
      var $1788 = HEAP[$p6] + 8;
      HEAP[$1788] = -3.141592653589793;
      
      var $1790 = HEAP[$p6] + 16;
      HEAP[$p6] = $1790;
      
      var $1792 = HEAP[$p6];
      HEAP[$1792] = Infinity;
      
      var $1794 = HEAP[$p6] + 8;
      HEAP[$1794] = 3.141592653589793;
      
      var $1796 = HEAP[$p6] + 16;
      HEAP[$p6] = $1796;
      
      var $1798 = HEAP[$p6];
      HEAP[$1798] = Infinity;
      
      var $1800 = HEAP[$p6] + 8;
      HEAP[$1800] = 3.141592653589793;
      
      var $1802 = HEAP[$p6] + 16;
      HEAP[$p6] = $1802;
      
      var $1804 = HEAP[$p6];
      HEAP[$1804] = Infinity;
      
      var $1806 = HEAP[$p6] + 8;
      HEAP[$1806] = 2.356194490192345;
      
      var $1808 = HEAP[$p6] + 16;
      HEAP[$p6] = $1808;
      
      var $1810 = HEAP[$p6];
      HEAP[$1810] = Infinity;
      
      var $1812 = HEAP[$p6] + 8;
      HEAP[$1812] = NaN;
      
      var $1814 = HEAP[$p6] + 16;
      HEAP[$p6] = $1814;
      
      var $1816 = HEAP[$p6];
      HEAP[$1816] = Infinity;
      
      var $1818 = HEAP[$p6] + 8;
      HEAP[$1818] = -1.5707963267948966;
      
      var $1820 = HEAP[$p6] + 16;
      HEAP[$p6] = $1820;
      
      var $1822 = HEAP[$p6];
      HEAP[$1822] = -9.542631940771103e+33;
      
      var $1824 = HEAP[$p6] + 8;
      HEAP[$1824] = -9.542631940771103e+33;
      
      var $1826 = HEAP[$p6] + 16;
      HEAP[$p6] = $1826;
      
      var $1828 = HEAP[$p6];
      HEAP[$1828] = -9.542631940771103e+33;
      
      var $1830 = HEAP[$p6] + 8;
      HEAP[$1830] = -9.542631940771103e+33;
      
      var $1832 = HEAP[$p6] + 16;
      HEAP[$p6] = $1832;
      
      var $1834 = HEAP[$p6];
      HEAP[$1834] = -9.542631940771103e+33;
      
      var $1836 = HEAP[$p6] + 8;
      HEAP[$1836] = -9.542631940771103e+33;
      
      var $1838 = HEAP[$p6] + 16;
      HEAP[$p6] = $1838;
      
      var $1840 = HEAP[$p6];
      HEAP[$1840] = -9.542631940771103e+33;
      
      var $1842 = HEAP[$p6] + 8;
      HEAP[$1842] = -9.542631940771103e+33;
      
      var $1844 = HEAP[$p6] + 16;
      HEAP[$p6] = $1844;
      
      var $1846 = HEAP[$p6];
      HEAP[$1846] = Infinity;
      
      var $1848 = HEAP[$p6] + 8;
      HEAP[$1848] = 1.5707963267948966;
      
      var $1850 = HEAP[$p6] + 16;
      HEAP[$p6] = $1850;
      
      var $1852 = HEAP[$p6];
      HEAP[$1852] = NaN;
      
      var $1854 = HEAP[$p6] + 8;
      HEAP[$1854] = NaN;
      
      var $1856 = HEAP[$p6] + 16;
      HEAP[$p6] = $1856;
      
      var $1858 = HEAP[$p6];
      HEAP[$1858] = Infinity;
      
      var $1860 = HEAP[$p6] + 8;
      HEAP[$1860] = -1.5707963267948966;
      
      var $1862 = HEAP[$p6] + 16;
      HEAP[$p6] = $1862;
      
      var $1864 = HEAP[$p6];
      HEAP[$1864] = -9.542631940771103e+33;
      
      var $1866 = HEAP[$p6] + 8;
      HEAP[$1866] = -9.542631940771103e+33;
      
      var $1868 = HEAP[$p6] + 16;
      HEAP[$p6] = $1868;
      
      var $1870 = HEAP[$p6];
      HEAP[$1870] = -Infinity;
      
      var $1872 = HEAP[$p6] + 8;
      HEAP[$1872] = -3.141592653589793;
      
      var $1874 = HEAP[$p6] + 16;
      HEAP[$p6] = $1874;
      
      var $1876 = HEAP[$p6];
      HEAP[$1876] = -Infinity;
      
      var $1878 = HEAP[$p6] + 8;
      HEAP[$1878] = 3.141592653589793;
      
      var $1880 = HEAP[$p6] + 16;
      HEAP[$p6] = $1880;
      
      var $1882 = HEAP[$p6];
      HEAP[$1882] = -9.542631940771103e+33;
      
      var $1884 = HEAP[$p6] + 8;
      HEAP[$1884] = -9.542631940771103e+33;
      
      var $1886 = HEAP[$p6] + 16;
      HEAP[$p6] = $1886;
      
      var $1888 = HEAP[$p6];
      HEAP[$1888] = Infinity;
      
      var $1890 = HEAP[$p6] + 8;
      HEAP[$1890] = 1.5707963267948966;
      
      var $1892 = HEAP[$p6] + 16;
      HEAP[$p6] = $1892;
      
      var $1894 = HEAP[$p6];
      HEAP[$1894] = NaN;
      
      var $1896 = HEAP[$p6] + 8;
      HEAP[$1896] = NaN;
      
      var $1898 = HEAP[$p6] + 16;
      HEAP[$p6] = $1898;
      
      var $1900 = HEAP[$p6];
      HEAP[$1900] = Infinity;
      
      var $1902 = HEAP[$p6] + 8;
      HEAP[$1902] = -1.5707963267948966;
      
      var $1904 = HEAP[$p6] + 16;
      HEAP[$p6] = $1904;
      
      var $1906 = HEAP[$p6];
      HEAP[$1906] = -9.542631940771103e+33;
      
      var $1908 = HEAP[$p6] + 8;
      HEAP[$1908] = -9.542631940771103e+33;
      
      var $1910 = HEAP[$p6] + 16;
      HEAP[$p6] = $1910;
      
      var $1912 = HEAP[$p6];
      HEAP[$1912] = -Infinity;
      
      var $1914 = HEAP[$p6] + 8;
      HEAP[$1914] = 0;
      
      var $1916 = HEAP[$p6] + 16;
      HEAP[$p6] = $1916;
      
      var $1918 = HEAP[$p6];
      HEAP[$1918] = -Infinity;
      
      var $1920 = HEAP[$p6] + 8;
      HEAP[$1920] = 0;
      
      var $1922 = HEAP[$p6] + 16;
      HEAP[$p6] = $1922;
      
      var $1924 = HEAP[$p6];
      HEAP[$1924] = -9.542631940771103e+33;
      
      var $1926 = HEAP[$p6] + 8;
      HEAP[$1926] = -9.542631940771103e+33;
      
      var $1928 = HEAP[$p6] + 16;
      HEAP[$p6] = $1928;
      
      var $1930 = HEAP[$p6];
      HEAP[$1930] = Infinity;
      
      var $1932 = HEAP[$p6] + 8;
      HEAP[$1932] = 1.5707963267948966;
      
      var $1934 = HEAP[$p6] + 16;
      HEAP[$p6] = $1934;
      
      var $1936 = HEAP[$p6];
      HEAP[$1936] = NaN;
      
      var $1938 = HEAP[$p6] + 8;
      HEAP[$1938] = NaN;
      
      var $1940 = HEAP[$p6] + 16;
      HEAP[$p6] = $1940;
      
      var $1942 = HEAP[$p6];
      HEAP[$1942] = Infinity;
      
      var $1944 = HEAP[$p6] + 8;
      HEAP[$1944] = -1.5707963267948966;
      
      var $1946 = HEAP[$p6] + 16;
      HEAP[$p6] = $1946;
      
      var $1948 = HEAP[$p6];
      HEAP[$1948] = -9.542631940771103e+33;
      
      var $1950 = HEAP[$p6] + 8;
      HEAP[$1950] = -9.542631940771103e+33;
      
      var $1952 = HEAP[$p6] + 16;
      HEAP[$p6] = $1952;
      
      var $1954 = HEAP[$p6];
      HEAP[$1954] = -9.542631940771103e+33;
      
      var $1956 = HEAP[$p6] + 8;
      HEAP[$1956] = -9.542631940771103e+33;
      
      var $1958 = HEAP[$p6] + 16;
      HEAP[$p6] = $1958;
      
      var $1960 = HEAP[$p6];
      HEAP[$1960] = -9.542631940771103e+33;
      
      var $1962 = HEAP[$p6] + 8;
      HEAP[$1962] = -9.542631940771103e+33;
      
      var $1964 = HEAP[$p6] + 16;
      HEAP[$p6] = $1964;
      
      var $1966 = HEAP[$p6];
      HEAP[$1966] = -9.542631940771103e+33;
      
      var $1968 = HEAP[$p6] + 8;
      HEAP[$1968] = -9.542631940771103e+33;
      
      var $1970 = HEAP[$p6] + 16;
      HEAP[$p6] = $1970;
      
      var $1972 = HEAP[$p6];
      HEAP[$1972] = Infinity;
      
      var $1974 = HEAP[$p6] + 8;
      HEAP[$1974] = 1.5707963267948966;
      
      var $1976 = HEAP[$p6] + 16;
      HEAP[$p6] = $1976;
      
      var $1978 = HEAP[$p6];
      HEAP[$1978] = NaN;
      
      var $1980 = HEAP[$p6] + 8;
      HEAP[$1980] = NaN;
      
      var $1982 = HEAP[$p6] + 16;
      HEAP[$p6] = $1982;
      
      var $1984 = HEAP[$p6];
      HEAP[$1984] = Infinity;
      
      var $1986 = HEAP[$p6] + 8;
      HEAP[$1986] = -.7853981633974483;
      
      var $1988 = HEAP[$p6] + 16;
      HEAP[$p6] = $1988;
      
      var $1990 = HEAP[$p6];
      HEAP[$1990] = Infinity;
      
      var $1992 = HEAP[$p6] + 8;
      HEAP[$1992] = 0;
      
      var $1994 = HEAP[$p6] + 16;
      HEAP[$p6] = $1994;
      
      var $1996 = HEAP[$p6];
      HEAP[$1996] = Infinity;
      
      var $1998 = HEAP[$p6] + 8;
      HEAP[$1998] = 0;
      
      var $2000 = HEAP[$p6] + 16;
      HEAP[$p6] = $2000;
      
      var $2002 = HEAP[$p6];
      HEAP[$2002] = Infinity;
      
      var $2004 = HEAP[$p6] + 8;
      HEAP[$2004] = 0;
      
      var $2006 = HEAP[$p6] + 16;
      HEAP[$p6] = $2006;
      
      var $2008 = HEAP[$p6];
      HEAP[$2008] = Infinity;
      
      var $2010 = HEAP[$p6] + 8;
      HEAP[$2010] = 0;
      
      var $2012 = HEAP[$p6] + 16;
      HEAP[$p6] = $2012;
      
      var $2014 = HEAP[$p6];
      HEAP[$2014] = Infinity;
      
      var $2016 = HEAP[$p6] + 8;
      HEAP[$2016] = .7853981633974483;
      
      var $2018 = HEAP[$p6] + 16;
      HEAP[$p6] = $2018;
      
      var $2020 = HEAP[$p6];
      HEAP[$2020] = Infinity;
      
      var $2022 = HEAP[$p6] + 8;
      HEAP[$2022] = NaN;
      
      var $2024 = HEAP[$p6] + 16;
      HEAP[$p6] = $2024;
      
      var $2026 = HEAP[$p6];
      HEAP[$2026] = Infinity;
      
      var $2028 = HEAP[$p6] + 8;
      HEAP[$2028] = NaN;
      
      var $2030 = HEAP[$p6] + 16;
      HEAP[$p6] = $2030;
      
      var $2032 = HEAP[$p6];
      HEAP[$2032] = NaN;
      
      var $2034 = HEAP[$p6] + 8;
      HEAP[$2034] = NaN;
      
      var $2036 = HEAP[$p6] + 16;
      HEAP[$p6] = $2036;
      
      var $2038 = HEAP[$p6];
      HEAP[$2038] = NaN;
      
      var $2040 = HEAP[$p6] + 8;
      HEAP[$2040] = NaN;
      
      var $2042 = HEAP[$p6] + 16;
      HEAP[$p6] = $2042;
      
      var $2044 = HEAP[$p6];
      HEAP[$2044] = NaN;
      
      var $2046 = HEAP[$p6] + 8;
      HEAP[$2046] = NaN;
      
      var $2048 = HEAP[$p6] + 16;
      HEAP[$p6] = $2048;
      
      var $2050 = HEAP[$p6];
      HEAP[$2050] = NaN;
      
      var $2052 = HEAP[$p6] + 8;
      HEAP[$2052] = NaN;
      
      var $2054 = HEAP[$p6] + 16;
      HEAP[$p6] = $2054;
      
      var $2056 = HEAP[$p6];
      HEAP[$2056] = Infinity;
      
      var $2058 = HEAP[$p6] + 8;
      HEAP[$2058] = NaN;
      
      var $2060 = HEAP[$p6] + 16;
      HEAP[$p6] = $2060;
      
      var $2062 = HEAP[$p6];
      HEAP[$2062] = NaN;
      
      var $2064 = HEAP[$p6] + 8;
      HEAP[$2064] = NaN;
      
      var $2066 = HEAP[$p6] + 16;
      HEAP[$p6] = $2066;
      HEAP[$p7] = _sinh_special_values;
      
      var $2068 = HEAP[$p7];
      HEAP[$2068] = Infinity;
      
      var $2070 = HEAP[$p7] + 8;
      HEAP[$2070] = NaN;
      
      var $2072 = HEAP[$p7] + 16;
      HEAP[$p7] = $2072;
      
      var $2074 = HEAP[$p7];
      HEAP[$2074] = -9.542631940771103e+33;
      
      var $2076 = HEAP[$p7] + 8;
      HEAP[$2076] = -9.542631940771103e+33;
      
      var $2078 = HEAP[$p7] + 16;
      HEAP[$p7] = $2078;
      
      var $2080 = HEAP[$p7];
      HEAP[$2080] = -Infinity;
      
      var $2082 = HEAP[$p7] + 8;
      HEAP[$2082] = 0;
      
      var $2084 = HEAP[$p7] + 16;
      HEAP[$p7] = $2084;
      
      var $2086 = HEAP[$p7];
      HEAP[$2086] = -Infinity;
      
      var $2088 = HEAP[$p7] + 8;
      HEAP[$2088] = 0;
      
      var $2090 = HEAP[$p7] + 16;
      HEAP[$p7] = $2090;
      
      var $2092 = HEAP[$p7];
      HEAP[$2092] = -9.542631940771103e+33;
      
      var $2094 = HEAP[$p7] + 8;
      HEAP[$2094] = -9.542631940771103e+33;
      
      var $2096 = HEAP[$p7] + 16;
      HEAP[$p7] = $2096;
      
      var $2098 = HEAP[$p7];
      HEAP[$2098] = Infinity;
      
      var $2100 = HEAP[$p7] + 8;
      HEAP[$2100] = NaN;
      
      var $2102 = HEAP[$p7] + 16;
      HEAP[$p7] = $2102;
      
      var $2104 = HEAP[$p7];
      HEAP[$2104] = Infinity;
      
      var $2106 = HEAP[$p7] + 8;
      HEAP[$2106] = NaN;
      
      var $2108 = HEAP[$p7] + 16;
      HEAP[$p7] = $2108;
      
      var $2110 = HEAP[$p7];
      HEAP[$2110] = NaN;
      
      var $2112 = HEAP[$p7] + 8;
      HEAP[$2112] = NaN;
      
      var $2114 = HEAP[$p7] + 16;
      HEAP[$p7] = $2114;
      
      var $2116 = HEAP[$p7];
      HEAP[$2116] = -9.542631940771103e+33;
      
      var $2118 = HEAP[$p7] + 8;
      HEAP[$2118] = -9.542631940771103e+33;
      
      var $2120 = HEAP[$p7] + 16;
      HEAP[$p7] = $2120;
      
      var $2122 = HEAP[$p7];
      HEAP[$2122] = -9.542631940771103e+33;
      
      var $2124 = HEAP[$p7] + 8;
      HEAP[$2124] = -9.542631940771103e+33;
      
      var $2126 = HEAP[$p7] + 16;
      HEAP[$p7] = $2126;
      
      var $2128 = HEAP[$p7];
      HEAP[$2128] = -9.542631940771103e+33;
      
      var $2130 = HEAP[$p7] + 8;
      HEAP[$2130] = -9.542631940771103e+33;
      
      var $2132 = HEAP[$p7] + 16;
      HEAP[$p7] = $2132;
      
      var $2134 = HEAP[$p7];
      HEAP[$2134] = -9.542631940771103e+33;
      
      var $2136 = HEAP[$p7] + 8;
      HEAP[$2136] = -9.542631940771103e+33;
      
      var $2138 = HEAP[$p7] + 16;
      HEAP[$p7] = $2138;
      
      var $2140 = HEAP[$p7];
      HEAP[$2140] = NaN;
      
      var $2142 = HEAP[$p7] + 8;
      HEAP[$2142] = NaN;
      
      var $2144 = HEAP[$p7] + 16;
      HEAP[$p7] = $2144;
      
      var $2146 = HEAP[$p7];
      HEAP[$2146] = NaN;
      
      var $2148 = HEAP[$p7] + 8;
      HEAP[$2148] = NaN;
      
      var $2150 = HEAP[$p7] + 16;
      HEAP[$p7] = $2150;
      
      var $2152 = HEAP[$p7];
      HEAP[$2152] = 0;
      
      var $2154 = HEAP[$p7] + 8;
      HEAP[$2154] = NaN;
      
      var $2156 = HEAP[$p7] + 16;
      HEAP[$p7] = $2156;
      
      var $2158 = HEAP[$p7];
      HEAP[$2158] = -9.542631940771103e+33;
      
      var $2160 = HEAP[$p7] + 8;
      HEAP[$2160] = -9.542631940771103e+33;
      
      var $2162 = HEAP[$p7] + 16;
      HEAP[$p7] = $2162;
      
      var $2164 = HEAP[$p7];
      HEAP[$2164] = 0;
      
      var $2166 = HEAP[$p7] + 8;
      HEAP[$2166] = 0;
      
      var $2168 = HEAP[$p7] + 16;
      HEAP[$p7] = $2168;
      
      var $2170 = HEAP[$p7];
      HEAP[$2170] = 0;
      
      var $2172 = HEAP[$p7] + 8;
      HEAP[$2172] = 0;
      
      var $2174 = HEAP[$p7] + 16;
      HEAP[$p7] = $2174;
      
      var $2176 = HEAP[$p7];
      HEAP[$2176] = -9.542631940771103e+33;
      
      var $2178 = HEAP[$p7] + 8;
      HEAP[$2178] = -9.542631940771103e+33;
      
      var $2180 = HEAP[$p7] + 16;
      HEAP[$p7] = $2180;
      
      var $2182 = HEAP[$p7];
      HEAP[$2182] = 0;
      
      var $2184 = HEAP[$p7] + 8;
      HEAP[$2184] = NaN;
      
      var $2186 = HEAP[$p7] + 16;
      HEAP[$p7] = $2186;
      
      var $2188 = HEAP[$p7];
      HEAP[$2188] = 0;
      
      var $2190 = HEAP[$p7] + 8;
      HEAP[$2190] = NaN;
      
      var $2192 = HEAP[$p7] + 16;
      HEAP[$p7] = $2192;
      
      var $2194 = HEAP[$p7];
      HEAP[$2194] = 0;
      
      var $2196 = HEAP[$p7] + 8;
      HEAP[$2196] = NaN;
      
      var $2198 = HEAP[$p7] + 16;
      HEAP[$p7] = $2198;
      
      var $2200 = HEAP[$p7];
      HEAP[$2200] = -9.542631940771103e+33;
      
      var $2202 = HEAP[$p7] + 8;
      HEAP[$2202] = -9.542631940771103e+33;
      
      var $2204 = HEAP[$p7] + 16;
      HEAP[$p7] = $2204;
      
      var $2206 = HEAP[$p7];
      HEAP[$2206] = 0;
      
      var $2208 = HEAP[$p7] + 8;
      HEAP[$2208] = 0;
      
      var $2210 = HEAP[$p7] + 16;
      HEAP[$p7] = $2210;
      
      var $2212 = HEAP[$p7];
      HEAP[$2212] = 0;
      
      var $2214 = HEAP[$p7] + 8;
      HEAP[$2214] = 0;
      
      var $2216 = HEAP[$p7] + 16;
      HEAP[$p7] = $2216;
      
      var $2218 = HEAP[$p7];
      HEAP[$2218] = -9.542631940771103e+33;
      
      var $2220 = HEAP[$p7] + 8;
      HEAP[$2220] = -9.542631940771103e+33;
      
      var $2222 = HEAP[$p7] + 16;
      HEAP[$p7] = $2222;
      
      var $2224 = HEAP[$p7];
      HEAP[$2224] = 0;
      
      var $2226 = HEAP[$p7] + 8;
      HEAP[$2226] = NaN;
      
      var $2228 = HEAP[$p7] + 16;
      HEAP[$p7] = $2228;
      
      var $2230 = HEAP[$p7];
      HEAP[$2230] = 0;
      
      var $2232 = HEAP[$p7] + 8;
      HEAP[$2232] = NaN;
      
      var $2234 = HEAP[$p7] + 16;
      HEAP[$p7] = $2234;
      
      var $2236 = HEAP[$p7];
      HEAP[$2236] = NaN;
      
      var $2238 = HEAP[$p7] + 8;
      HEAP[$2238] = NaN;
      
      var $2240 = HEAP[$p7] + 16;
      HEAP[$p7] = $2240;
      
      var $2242 = HEAP[$p7];
      HEAP[$2242] = -9.542631940771103e+33;
      
      var $2244 = HEAP[$p7] + 8;
      HEAP[$2244] = -9.542631940771103e+33;
      
      var $2246 = HEAP[$p7] + 16;
      HEAP[$p7] = $2246;
      
      var $2248 = HEAP[$p7];
      HEAP[$2248] = -9.542631940771103e+33;
      
      var $2250 = HEAP[$p7] + 8;
      HEAP[$2250] = -9.542631940771103e+33;
      
      var $2252 = HEAP[$p7] + 16;
      HEAP[$p7] = $2252;
      
      var $2254 = HEAP[$p7];
      HEAP[$2254] = -9.542631940771103e+33;
      
      var $2256 = HEAP[$p7] + 8;
      HEAP[$2256] = -9.542631940771103e+33;
      
      var $2258 = HEAP[$p7] + 16;
      HEAP[$p7] = $2258;
      
      var $2260 = HEAP[$p7];
      HEAP[$2260] = -9.542631940771103e+33;
      
      var $2262 = HEAP[$p7] + 8;
      HEAP[$2262] = -9.542631940771103e+33;
      
      var $2264 = HEAP[$p7] + 16;
      HEAP[$p7] = $2264;
      
      var $2266 = HEAP[$p7];
      HEAP[$2266] = NaN;
      
      var $2268 = HEAP[$p7] + 8;
      HEAP[$2268] = NaN;
      
      var $2270 = HEAP[$p7] + 16;
      HEAP[$p7] = $2270;
      
      var $2272 = HEAP[$p7];
      HEAP[$2272] = NaN;
      
      var $2274 = HEAP[$p7] + 8;
      HEAP[$2274] = NaN;
      
      var $2276 = HEAP[$p7] + 16;
      HEAP[$p7] = $2276;
      
      var $2278 = HEAP[$p7];
      HEAP[$2278] = Infinity;
      
      var $2280 = HEAP[$p7] + 8;
      HEAP[$2280] = NaN;
      
      var $2282 = HEAP[$p7] + 16;
      HEAP[$p7] = $2282;
      
      var $2284 = HEAP[$p7];
      HEAP[$2284] = -9.542631940771103e+33;
      
      var $2286 = HEAP[$p7] + 8;
      HEAP[$2286] = -9.542631940771103e+33;
      
      var $2288 = HEAP[$p7] + 16;
      HEAP[$p7] = $2288;
      
      var $2290 = HEAP[$p7];
      HEAP[$2290] = Infinity;
      
      var $2292 = HEAP[$p7] + 8;
      HEAP[$2292] = 0;
      
      var $2294 = HEAP[$p7] + 16;
      HEAP[$p7] = $2294;
      
      var $2296 = HEAP[$p7];
      HEAP[$2296] = Infinity;
      
      var $2298 = HEAP[$p7] + 8;
      HEAP[$2298] = 0;
      
      var $2300 = HEAP[$p7] + 16;
      HEAP[$p7] = $2300;
      
      var $2302 = HEAP[$p7];
      HEAP[$2302] = -9.542631940771103e+33;
      
      var $2304 = HEAP[$p7] + 8;
      HEAP[$2304] = -9.542631940771103e+33;
      
      var $2306 = HEAP[$p7] + 16;
      HEAP[$p7] = $2306;
      
      var $2308 = HEAP[$p7];
      HEAP[$2308] = Infinity;
      
      var $2310 = HEAP[$p7] + 8;
      HEAP[$2310] = NaN;
      
      var $2312 = HEAP[$p7] + 16;
      HEAP[$p7] = $2312;
      
      var $2314 = HEAP[$p7];
      HEAP[$2314] = Infinity;
      
      var $2316 = HEAP[$p7] + 8;
      HEAP[$2316] = NaN;
      
      var $2318 = HEAP[$p7] + 16;
      HEAP[$p7] = $2318;
      
      var $2320 = HEAP[$p7];
      HEAP[$2320] = NaN;
      
      var $2322 = HEAP[$p7] + 8;
      HEAP[$2322] = NaN;
      
      var $2324 = HEAP[$p7] + 16;
      HEAP[$p7] = $2324;
      
      var $2326 = HEAP[$p7];
      HEAP[$2326] = NaN;
      
      var $2328 = HEAP[$p7] + 8;
      HEAP[$2328] = NaN;
      
      var $2330 = HEAP[$p7] + 16;
      HEAP[$p7] = $2330;
      
      var $2332 = HEAP[$p7];
      HEAP[$2332] = NaN;
      
      var $2334 = HEAP[$p7] + 8;
      HEAP[$2334] = 0;
      
      var $2336 = HEAP[$p7] + 16;
      HEAP[$p7] = $2336;
      
      var $2338 = HEAP[$p7];
      HEAP[$2338] = NaN;
      
      var $2340 = HEAP[$p7] + 8;
      HEAP[$2340] = 0;
      
      var $2342 = HEAP[$p7] + 16;
      HEAP[$p7] = $2342;
      
      var $2344 = HEAP[$p7];
      HEAP[$2344] = NaN;
      
      var $2346 = HEAP[$p7] + 8;
      HEAP[$2346] = NaN;
      
      var $2348 = HEAP[$p7] + 16;
      HEAP[$p7] = $2348;
      
      var $2350 = HEAP[$p7];
      HEAP[$2350] = NaN;
      
      var $2352 = HEAP[$p7] + 8;
      HEAP[$2352] = NaN;
      
      var $2354 = HEAP[$p7] + 16;
      HEAP[$p7] = $2354;
      
      var $2356 = HEAP[$p7];
      HEAP[$2356] = NaN;
      
      var $2358 = HEAP[$p7] + 8;
      HEAP[$2358] = NaN;
      
      var $2360 = HEAP[$p7] + 16;
      HEAP[$p7] = $2360;
      HEAP[$p8] = _sqrt_special_values;
      
      var $2362 = HEAP[$p8];
      HEAP[$2362] = Infinity;
      
      var $2364 = HEAP[$p8] + 8;
      HEAP[$2364] = -Infinity;
      
      var $2366 = HEAP[$p8] + 16;
      HEAP[$p8] = $2366;
      
      var $2368 = HEAP[$p8];
      HEAP[$2368] = 0;
      
      var $2370 = HEAP[$p8] + 8;
      HEAP[$2370] = -Infinity;
      
      var $2372 = HEAP[$p8] + 16;
      HEAP[$p8] = $2372;
      
      var $2374 = HEAP[$p8];
      HEAP[$2374] = 0;
      
      var $2376 = HEAP[$p8] + 8;
      HEAP[$2376] = -Infinity;
      
      var $2378 = HEAP[$p8] + 16;
      HEAP[$p8] = $2378;
      
      var $2380 = HEAP[$p8];
      HEAP[$2380] = 0;
      
      var $2382 = HEAP[$p8] + 8;
      HEAP[$2382] = Infinity;
      
      var $2384 = HEAP[$p8] + 16;
      HEAP[$p8] = $2384;
      
      var $2386 = HEAP[$p8];
      HEAP[$2386] = 0;
      
      var $2388 = HEAP[$p8] + 8;
      HEAP[$2388] = Infinity;
      
      var $2390 = HEAP[$p8] + 16;
      HEAP[$p8] = $2390;
      
      var $2392 = HEAP[$p8];
      HEAP[$2392] = Infinity;
      
      var $2394 = HEAP[$p8] + 8;
      HEAP[$2394] = Infinity;
      
      var $2396 = HEAP[$p8] + 16;
      HEAP[$p8] = $2396;
      
      var $2398 = HEAP[$p8];
      HEAP[$2398] = NaN;
      
      var $2400 = HEAP[$p8] + 8;
      HEAP[$2400] = Infinity;
      
      var $2402 = HEAP[$p8] + 16;
      HEAP[$p8] = $2402;
      
      var $2404 = HEAP[$p8];
      HEAP[$2404] = Infinity;
      
      var $2406 = HEAP[$p8] + 8;
      HEAP[$2406] = -Infinity;
      
      var $2408 = HEAP[$p8] + 16;
      HEAP[$p8] = $2408;
      
      var $2410 = HEAP[$p8];
      HEAP[$2410] = -9.542631940771103e+33;
      
      var $2412 = HEAP[$p8] + 8;
      HEAP[$2412] = -9.542631940771103e+33;
      
      var $2414 = HEAP[$p8] + 16;
      HEAP[$p8] = $2414;
      
      var $2416 = HEAP[$p8];
      HEAP[$2416] = -9.542631940771103e+33;
      
      var $2418 = HEAP[$p8] + 8;
      HEAP[$2418] = -9.542631940771103e+33;
      
      var $2420 = HEAP[$p8] + 16;
      HEAP[$p8] = $2420;
      
      var $2422 = HEAP[$p8];
      HEAP[$2422] = -9.542631940771103e+33;
      
      var $2424 = HEAP[$p8] + 8;
      HEAP[$2424] = -9.542631940771103e+33;
      
      var $2426 = HEAP[$p8] + 16;
      HEAP[$p8] = $2426;
      
      var $2428 = HEAP[$p8];
      HEAP[$2428] = -9.542631940771103e+33;
      
      var $2430 = HEAP[$p8] + 8;
      HEAP[$2430] = -9.542631940771103e+33;
      
      var $2432 = HEAP[$p8] + 16;
      HEAP[$p8] = $2432;
      
      var $2434 = HEAP[$p8];
      HEAP[$2434] = Infinity;
      
      var $2436 = HEAP[$p8] + 8;
      HEAP[$2436] = Infinity;
      
      var $2438 = HEAP[$p8] + 16;
      HEAP[$p8] = $2438;
      
      var $2440 = HEAP[$p8];
      HEAP[$2440] = NaN;
      
      var $2442 = HEAP[$p8] + 8;
      HEAP[$2442] = NaN;
      
      var $2444 = HEAP[$p8] + 16;
      HEAP[$p8] = $2444;
      
      var $2446 = HEAP[$p8];
      HEAP[$2446] = Infinity;
      
      var $2448 = HEAP[$p8] + 8;
      HEAP[$2448] = -Infinity;
      
      var $2450 = HEAP[$p8] + 16;
      HEAP[$p8] = $2450;
      
      var $2452 = HEAP[$p8];
      HEAP[$2452] = -9.542631940771103e+33;
      
      var $2454 = HEAP[$p8] + 8;
      HEAP[$2454] = -9.542631940771103e+33;
      
      var $2456 = HEAP[$p8] + 16;
      HEAP[$p8] = $2456;
      
      var $2458 = HEAP[$p8];
      HEAP[$2458] = 0;
      
      var $2460 = HEAP[$p8] + 8;
      HEAP[$2460] = 0;
      
      var $2462 = HEAP[$p8] + 16;
      HEAP[$p8] = $2462;
      
      var $2464 = HEAP[$p8];
      HEAP[$2464] = 0;
      
      var $2466 = HEAP[$p8] + 8;
      HEAP[$2466] = 0;
      
      var $2468 = HEAP[$p8] + 16;
      HEAP[$p8] = $2468;
      
      var $2470 = HEAP[$p8];
      HEAP[$2470] = -9.542631940771103e+33;
      
      var $2472 = HEAP[$p8] + 8;
      HEAP[$2472] = -9.542631940771103e+33;
      
      var $2474 = HEAP[$p8] + 16;
      HEAP[$p8] = $2474;
      
      var $2476 = HEAP[$p8];
      HEAP[$2476] = Infinity;
      
      var $2478 = HEAP[$p8] + 8;
      HEAP[$2478] = Infinity;
      
      var $2480 = HEAP[$p8] + 16;
      HEAP[$p8] = $2480;
      
      var $2482 = HEAP[$p8];
      HEAP[$2482] = NaN;
      
      var $2484 = HEAP[$p8] + 8;
      HEAP[$2484] = NaN;
      
      var $2486 = HEAP[$p8] + 16;
      HEAP[$p8] = $2486;
      
      var $2488 = HEAP[$p8];
      HEAP[$2488] = Infinity;
      
      var $2490 = HEAP[$p8] + 8;
      HEAP[$2490] = -Infinity;
      
      var $2492 = HEAP[$p8] + 16;
      HEAP[$p8] = $2492;
      
      var $2494 = HEAP[$p8];
      HEAP[$2494] = -9.542631940771103e+33;
      
      var $2496 = HEAP[$p8] + 8;
      HEAP[$2496] = -9.542631940771103e+33;
      
      var $2498 = HEAP[$p8] + 16;
      HEAP[$p8] = $2498;
      
      var $2500 = HEAP[$p8];
      HEAP[$2500] = 0;
      
      var $2502 = HEAP[$p8] + 8;
      HEAP[$2502] = 0;
      
      var $2504 = HEAP[$p8] + 16;
      HEAP[$p8] = $2504;
      
      var $2506 = HEAP[$p8];
      HEAP[$2506] = 0;
      
      var $2508 = HEAP[$p8] + 8;
      HEAP[$2508] = 0;
      
      var $2510 = HEAP[$p8] + 16;
      HEAP[$p8] = $2510;
      
      var $2512 = HEAP[$p8];
      HEAP[$2512] = -9.542631940771103e+33;
      
      var $2514 = HEAP[$p8] + 8;
      HEAP[$2514] = -9.542631940771103e+33;
      
      var $2516 = HEAP[$p8] + 16;
      HEAP[$p8] = $2516;
      
      var $2518 = HEAP[$p8];
      HEAP[$2518] = Infinity;
      
      var $2520 = HEAP[$p8] + 8;
      HEAP[$2520] = Infinity;
      
      var $2522 = HEAP[$p8] + 16;
      HEAP[$p8] = $2522;
      
      var $2524 = HEAP[$p8];
      HEAP[$2524] = NaN;
      
      var $2526 = HEAP[$p8] + 8;
      HEAP[$2526] = NaN;
      
      var $2528 = HEAP[$p8] + 16;
      HEAP[$p8] = $2528;
      
      var $2530 = HEAP[$p8];
      HEAP[$2530] = Infinity;
      
      var $2532 = HEAP[$p8] + 8;
      HEAP[$2532] = -Infinity;
      
      var $2534 = HEAP[$p8] + 16;
      HEAP[$p8] = $2534;
      
      var $2536 = HEAP[$p8];
      HEAP[$2536] = -9.542631940771103e+33;
      
      var $2538 = HEAP[$p8] + 8;
      HEAP[$2538] = -9.542631940771103e+33;
      
      var $2540 = HEAP[$p8] + 16;
      HEAP[$p8] = $2540;
      
      var $2542 = HEAP[$p8];
      HEAP[$2542] = -9.542631940771103e+33;
      
      var $2544 = HEAP[$p8] + 8;
      HEAP[$2544] = -9.542631940771103e+33;
      
      var $2546 = HEAP[$p8] + 16;
      HEAP[$p8] = $2546;
      
      var $2548 = HEAP[$p8];
      HEAP[$2548] = -9.542631940771103e+33;
      
      var $2550 = HEAP[$p8] + 8;
      HEAP[$2550] = -9.542631940771103e+33;
      
      var $2552 = HEAP[$p8] + 16;
      HEAP[$p8] = $2552;
      
      var $2554 = HEAP[$p8];
      HEAP[$2554] = -9.542631940771103e+33;
      
      var $2556 = HEAP[$p8] + 8;
      HEAP[$2556] = -9.542631940771103e+33;
      
      var $2558 = HEAP[$p8] + 16;
      HEAP[$p8] = $2558;
      
      var $2560 = HEAP[$p8];
      HEAP[$2560] = Infinity;
      
      var $2562 = HEAP[$p8] + 8;
      HEAP[$2562] = Infinity;
      
      var $2564 = HEAP[$p8] + 16;
      HEAP[$p8] = $2564;
      
      var $2566 = HEAP[$p8];
      HEAP[$2566] = NaN;
      
      var $2568 = HEAP[$p8] + 8;
      HEAP[$2568] = NaN;
      
      var $2570 = HEAP[$p8] + 16;
      HEAP[$p8] = $2570;
      
      var $2572 = HEAP[$p8];
      HEAP[$2572] = Infinity;
      
      var $2574 = HEAP[$p8] + 8;
      HEAP[$2574] = -Infinity;
      
      var $2576 = HEAP[$p8] + 16;
      HEAP[$p8] = $2576;
      
      var $2578 = HEAP[$p8];
      HEAP[$2578] = Infinity;
      
      var $2580 = HEAP[$p8] + 8;
      HEAP[$2580] = 0;
      
      var $2582 = HEAP[$p8] + 16;
      HEAP[$p8] = $2582;
      
      var $2584 = HEAP[$p8];
      HEAP[$2584] = Infinity;
      
      var $2586 = HEAP[$p8] + 8;
      HEAP[$2586] = 0;
      
      var $2588 = HEAP[$p8] + 16;
      HEAP[$p8] = $2588;
      
      var $2590 = HEAP[$p8];
      HEAP[$2590] = Infinity;
      
      var $2592 = HEAP[$p8] + 8;
      HEAP[$2592] = 0;
      
      var $2594 = HEAP[$p8] + 16;
      HEAP[$p8] = $2594;
      
      var $2596 = HEAP[$p8];
      HEAP[$2596] = Infinity;
      
      var $2598 = HEAP[$p8] + 8;
      HEAP[$2598] = 0;
      
      var $2600 = HEAP[$p8] + 16;
      HEAP[$p8] = $2600;
      
      var $2602 = HEAP[$p8];
      HEAP[$2602] = Infinity;
      
      var $2604 = HEAP[$p8] + 8;
      HEAP[$2604] = Infinity;
      
      var $2606 = HEAP[$p8] + 16;
      HEAP[$p8] = $2606;
      
      var $2608 = HEAP[$p8];
      HEAP[$2608] = Infinity;
      
      var $2610 = HEAP[$p8] + 8;
      HEAP[$2610] = NaN;
      
      var $2612 = HEAP[$p8] + 16;
      HEAP[$p8] = $2612;
      
      var $2614 = HEAP[$p8];
      HEAP[$2614] = Infinity;
      
      var $2616 = HEAP[$p8] + 8;
      HEAP[$2616] = -Infinity;
      
      var $2618 = HEAP[$p8] + 16;
      HEAP[$p8] = $2618;
      
      var $2620 = HEAP[$p8];
      HEAP[$2620] = NaN;
      
      var $2622 = HEAP[$p8] + 8;
      HEAP[$2622] = NaN;
      
      var $2624 = HEAP[$p8] + 16;
      HEAP[$p8] = $2624;
      
      var $2626 = HEAP[$p8];
      HEAP[$2626] = NaN;
      
      var $2628 = HEAP[$p8] + 8;
      HEAP[$2628] = NaN;
      
      var $2630 = HEAP[$p8] + 16;
      HEAP[$p8] = $2630;
      
      var $2632 = HEAP[$p8];
      HEAP[$2632] = NaN;
      
      var $2634 = HEAP[$p8] + 8;
      HEAP[$2634] = NaN;
      
      var $2636 = HEAP[$p8] + 16;
      HEAP[$p8] = $2636;
      
      var $2638 = HEAP[$p8];
      HEAP[$2638] = NaN;
      
      var $2640 = HEAP[$p8] + 8;
      HEAP[$2640] = NaN;
      
      var $2642 = HEAP[$p8] + 16;
      HEAP[$p8] = $2642;
      
      var $2644 = HEAP[$p8];
      HEAP[$2644] = Infinity;
      
      var $2646 = HEAP[$p8] + 8;
      HEAP[$2646] = Infinity;
      
      var $2648 = HEAP[$p8] + 16;
      HEAP[$p8] = $2648;
      
      var $2650 = HEAP[$p8];
      HEAP[$2650] = NaN;
      
      var $2652 = HEAP[$p8] + 8;
      HEAP[$2652] = NaN;
      
      var $2654 = HEAP[$p8] + 16;
      HEAP[$p8] = $2654;
      HEAP[$p9] = _tanh_special_values;
      
      var $2656 = HEAP[$p9];
      HEAP[$2656] = -1;
      
      var $2658 = HEAP[$p9] + 8;
      HEAP[$2658] = 0;
      
      var $2660 = HEAP[$p9] + 16;
      HEAP[$p9] = $2660;
      
      var $2662 = HEAP[$p9];
      HEAP[$2662] = -9.542631940771103e+33;
      
      var $2664 = HEAP[$p9] + 8;
      HEAP[$2664] = -9.542631940771103e+33;
      
      var $2666 = HEAP[$p9] + 16;
      HEAP[$p9] = $2666;
      
      var $2668 = HEAP[$p9];
      HEAP[$2668] = -1;
      
      var $2670 = HEAP[$p9] + 8;
      HEAP[$2670] = 0;
      
      var $2672 = HEAP[$p9] + 16;
      HEAP[$p9] = $2672;
      
      var $2674 = HEAP[$p9];
      HEAP[$2674] = -1;
      
      var $2676 = HEAP[$p9] + 8;
      HEAP[$2676] = 0;
      
      var $2678 = HEAP[$p9] + 16;
      HEAP[$p9] = $2678;
      
      var $2680 = HEAP[$p9];
      HEAP[$2680] = -9.542631940771103e+33;
      
      var $2682 = HEAP[$p9] + 8;
      HEAP[$2682] = -9.542631940771103e+33;
      
      var $2684 = HEAP[$p9] + 16;
      HEAP[$p9] = $2684;
      
      var $2686 = HEAP[$p9];
      HEAP[$2686] = -1;
      
      var $2688 = HEAP[$p9] + 8;
      HEAP[$2688] = 0;
      
      var $2690 = HEAP[$p9] + 16;
      HEAP[$p9] = $2690;
      
      var $2692 = HEAP[$p9];
      HEAP[$2692] = -1;
      
      var $2694 = HEAP[$p9] + 8;
      HEAP[$2694] = 0;
      
      var $2696 = HEAP[$p9] + 16;
      HEAP[$p9] = $2696;
      
      var $2698 = HEAP[$p9];
      HEAP[$2698] = NaN;
      
      var $2700 = HEAP[$p9] + 8;
      HEAP[$2700] = NaN;
      
      var $2702 = HEAP[$p9] + 16;
      HEAP[$p9] = $2702;
      
      var $2704 = HEAP[$p9];
      HEAP[$2704] = -9.542631940771103e+33;
      
      var $2706 = HEAP[$p9] + 8;
      HEAP[$2706] = -9.542631940771103e+33;
      
      var $2708 = HEAP[$p9] + 16;
      HEAP[$p9] = $2708;
      
      var $2710 = HEAP[$p9];
      HEAP[$2710] = -9.542631940771103e+33;
      
      var $2712 = HEAP[$p9] + 8;
      HEAP[$2712] = -9.542631940771103e+33;
      
      var $2714 = HEAP[$p9] + 16;
      HEAP[$p9] = $2714;
      
      var $2716 = HEAP[$p9];
      HEAP[$2716] = -9.542631940771103e+33;
      
      var $2718 = HEAP[$p9] + 8;
      HEAP[$2718] = -9.542631940771103e+33;
      
      var $2720 = HEAP[$p9] + 16;
      HEAP[$p9] = $2720;
      
      var $2722 = HEAP[$p9];
      HEAP[$2722] = -9.542631940771103e+33;
      
      var $2724 = HEAP[$p9] + 8;
      HEAP[$2724] = -9.542631940771103e+33;
      
      var $2726 = HEAP[$p9] + 16;
      HEAP[$p9] = $2726;
      
      var $2728 = HEAP[$p9];
      HEAP[$2728] = NaN;
      
      var $2730 = HEAP[$p9] + 8;
      HEAP[$2730] = NaN;
      
      var $2732 = HEAP[$p9] + 16;
      HEAP[$p9] = $2732;
      
      var $2734 = HEAP[$p9];
      HEAP[$2734] = NaN;
      
      var $2736 = HEAP[$p9] + 8;
      HEAP[$2736] = NaN;
      
      var $2738 = HEAP[$p9] + 16;
      HEAP[$p9] = $2738;
      
      var $2740 = HEAP[$p9];
      HEAP[$2740] = NaN;
      
      var $2742 = HEAP[$p9] + 8;
      HEAP[$2742] = NaN;
      
      var $2744 = HEAP[$p9] + 16;
      HEAP[$p9] = $2744;
      
      var $2746 = HEAP[$p9];
      HEAP[$2746] = -9.542631940771103e+33;
      
      var $2748 = HEAP[$p9] + 8;
      HEAP[$2748] = -9.542631940771103e+33;
      
      var $2750 = HEAP[$p9] + 16;
      HEAP[$p9] = $2750;
      
      var $2752 = HEAP[$p9];
      HEAP[$2752] = 0;
      
      var $2754 = HEAP[$p9] + 8;
      HEAP[$2754] = 0;
      
      var $2756 = HEAP[$p9] + 16;
      HEAP[$p9] = $2756;
      
      var $2758 = HEAP[$p9];
      HEAP[$2758] = 0;
      
      var $2760 = HEAP[$p9] + 8;
      HEAP[$2760] = 0;
      
      var $2762 = HEAP[$p9] + 16;
      HEAP[$p9] = $2762;
      
      var $2764 = HEAP[$p9];
      HEAP[$2764] = -9.542631940771103e+33;
      
      var $2766 = HEAP[$p9] + 8;
      HEAP[$2766] = -9.542631940771103e+33;
      
      var $2768 = HEAP[$p9] + 16;
      HEAP[$p9] = $2768;
      
      var $2770 = HEAP[$p9];
      HEAP[$2770] = NaN;
      
      var $2772 = HEAP[$p9] + 8;
      HEAP[$2772] = NaN;
      
      var $2774 = HEAP[$p9] + 16;
      HEAP[$p9] = $2774;
      
      var $2776 = HEAP[$p9];
      HEAP[$2776] = NaN;
      
      var $2778 = HEAP[$p9] + 8;
      HEAP[$2778] = NaN;
      
      var $2780 = HEAP[$p9] + 16;
      HEAP[$p9] = $2780;
      
      var $2782 = HEAP[$p9];
      HEAP[$2782] = NaN;
      
      var $2784 = HEAP[$p9] + 8;
      HEAP[$2784] = NaN;
      
      var $2786 = HEAP[$p9] + 16;
      HEAP[$p9] = $2786;
      
      var $2788 = HEAP[$p9];
      HEAP[$2788] = -9.542631940771103e+33;
      
      var $2790 = HEAP[$p9] + 8;
      HEAP[$2790] = -9.542631940771103e+33;
      
      var $2792 = HEAP[$p9] + 16;
      HEAP[$p9] = $2792;
      
      var $2794 = HEAP[$p9];
      HEAP[$2794] = 0;
      
      var $2796 = HEAP[$p9] + 8;
      HEAP[$2796] = 0;
      
      var $2798 = HEAP[$p9] + 16;
      HEAP[$p9] = $2798;
      
      var $2800 = HEAP[$p9];
      HEAP[$2800] = 0;
      
      var $2802 = HEAP[$p9] + 8;
      HEAP[$2802] = 0;
      
      var $2804 = HEAP[$p9] + 16;
      HEAP[$p9] = $2804;
      
      var $2806 = HEAP[$p9];
      HEAP[$2806] = -9.542631940771103e+33;
      
      var $2808 = HEAP[$p9] + 8;
      HEAP[$2808] = -9.542631940771103e+33;
      
      var $2810 = HEAP[$p9] + 16;
      HEAP[$p9] = $2810;
      
      var $2812 = HEAP[$p9];
      HEAP[$2812] = NaN;
      
      var $2814 = HEAP[$p9] + 8;
      HEAP[$2814] = NaN;
      
      var $2816 = HEAP[$p9] + 16;
      HEAP[$p9] = $2816;
      
      var $2818 = HEAP[$p9];
      HEAP[$2818] = NaN;
      
      var $2820 = HEAP[$p9] + 8;
      HEAP[$2820] = NaN;
      
      var $2822 = HEAP[$p9] + 16;
      HEAP[$p9] = $2822;
      
      var $2824 = HEAP[$p9];
      HEAP[$2824] = NaN;
      
      var $2826 = HEAP[$p9] + 8;
      HEAP[$2826] = NaN;
      
      var $2828 = HEAP[$p9] + 16;
      HEAP[$p9] = $2828;
      
      var $2830 = HEAP[$p9];
      HEAP[$2830] = -9.542631940771103e+33;
      
      var $2832 = HEAP[$p9] + 8;
      HEAP[$2832] = -9.542631940771103e+33;
      
      var $2834 = HEAP[$p9] + 16;
      HEAP[$p9] = $2834;
      
      var $2836 = HEAP[$p9];
      HEAP[$2836] = -9.542631940771103e+33;
      
      var $2838 = HEAP[$p9] + 8;
      HEAP[$2838] = -9.542631940771103e+33;
      
      var $2840 = HEAP[$p9] + 16;
      HEAP[$p9] = $2840;
      
      var $2842 = HEAP[$p9];
      HEAP[$2842] = -9.542631940771103e+33;
      
      var $2844 = HEAP[$p9] + 8;
      HEAP[$2844] = -9.542631940771103e+33;
      
      var $2846 = HEAP[$p9] + 16;
      HEAP[$p9] = $2846;
      
      var $2848 = HEAP[$p9];
      HEAP[$2848] = -9.542631940771103e+33;
      
      var $2850 = HEAP[$p9] + 8;
      HEAP[$2850] = -9.542631940771103e+33;
      
      var $2852 = HEAP[$p9] + 16;
      HEAP[$p9] = $2852;
      
      var $2854 = HEAP[$p9];
      HEAP[$2854] = NaN;
      
      var $2856 = HEAP[$p9] + 8;
      HEAP[$2856] = NaN;
      
      var $2858 = HEAP[$p9] + 16;
      HEAP[$p9] = $2858;
      
      var $2860 = HEAP[$p9];
      HEAP[$2860] = NaN;
      
      var $2862 = HEAP[$p9] + 8;
      HEAP[$2862] = NaN;
      
      var $2864 = HEAP[$p9] + 16;
      HEAP[$p9] = $2864;
      
      var $2866 = HEAP[$p9];
      HEAP[$2866] = 1;
      
      var $2868 = HEAP[$p9] + 8;
      HEAP[$2868] = 0;
      
      var $2870 = HEAP[$p9] + 16;
      HEAP[$p9] = $2870;
      
      var $2872 = HEAP[$p9];
      HEAP[$2872] = -9.542631940771103e+33;
      
      var $2874 = HEAP[$p9] + 8;
      HEAP[$2874] = -9.542631940771103e+33;
      
      var $2876 = HEAP[$p9] + 16;
      HEAP[$p9] = $2876;
      
      var $2878 = HEAP[$p9];
      HEAP[$2878] = 1;
      
      var $2880 = HEAP[$p9] + 8;
      HEAP[$2880] = 0;
      
      var $2882 = HEAP[$p9] + 16;
      HEAP[$p9] = $2882;
      
      var $2884 = HEAP[$p9];
      HEAP[$2884] = 1;
      
      var $2886 = HEAP[$p9] + 8;
      HEAP[$2886] = 0;
      
      var $2888 = HEAP[$p9] + 16;
      HEAP[$p9] = $2888;
      
      var $2890 = HEAP[$p9];
      HEAP[$2890] = -9.542631940771103e+33;
      
      var $2892 = HEAP[$p9] + 8;
      HEAP[$2892] = -9.542631940771103e+33;
      
      var $2894 = HEAP[$p9] + 16;
      HEAP[$p9] = $2894;
      
      var $2896 = HEAP[$p9];
      HEAP[$2896] = 1;
      
      var $2898 = HEAP[$p9] + 8;
      HEAP[$2898] = 0;
      
      var $2900 = HEAP[$p9] + 16;
      HEAP[$p9] = $2900;
      
      var $2902 = HEAP[$p9];
      HEAP[$2902] = 1;
      
      var $2904 = HEAP[$p9] + 8;
      HEAP[$2904] = 0;
      
      var $2906 = HEAP[$p9] + 16;
      HEAP[$p9] = $2906;
      
      var $2908 = HEAP[$p9];
      HEAP[$2908] = NaN;
      
      var $2910 = HEAP[$p9] + 8;
      HEAP[$2910] = NaN;
      
      var $2912 = HEAP[$p9] + 16;
      HEAP[$p9] = $2912;
      
      var $2914 = HEAP[$p9];
      HEAP[$2914] = NaN;
      
      var $2916 = HEAP[$p9] + 8;
      HEAP[$2916] = NaN;
      
      var $2918 = HEAP[$p9] + 16;
      HEAP[$p9] = $2918;
      
      var $2920 = HEAP[$p9];
      HEAP[$2920] = NaN;
      
      var $2922 = HEAP[$p9] + 8;
      HEAP[$2922] = 0;
      
      var $2924 = HEAP[$p9] + 16;
      HEAP[$p9] = $2924;
      
      var $2926 = HEAP[$p9];
      HEAP[$2926] = NaN;
      
      var $2928 = HEAP[$p9] + 8;
      HEAP[$2928] = 0;
      
      var $2930 = HEAP[$p9] + 16;
      HEAP[$p9] = $2930;
      
      var $2932 = HEAP[$p9];
      HEAP[$2932] = NaN;
      
      var $2934 = HEAP[$p9] + 8;
      HEAP[$2934] = NaN;
      
      var $2936 = HEAP[$p9] + 16;
      HEAP[$p9] = $2936;
      
      var $2938 = HEAP[$p9];
      HEAP[$2938] = NaN;
      
      var $2940 = HEAP[$p9] + 8;
      HEAP[$2940] = NaN;
      
      var $2942 = HEAP[$p9] + 16;
      HEAP[$p9] = $2942;
      
      var $2944 = HEAP[$p9];
      HEAP[$2944] = NaN;
      
      var $2946 = HEAP[$p9] + 8;
      HEAP[$2946] = NaN;
      
      var $2948 = HEAP[$p9] + 16;
      HEAP[$p9] = $2948;
      HEAP[$p10] = _rect_special_values;
      
      var $2950 = HEAP[$p10];
      HEAP[$2950] = Infinity;
      
      var $2952 = HEAP[$p10] + 8;
      HEAP[$2952] = NaN;
      
      var $2954 = HEAP[$p10] + 16;
      HEAP[$p10] = $2954;
      
      var $2956 = HEAP[$p10];
      HEAP[$2956] = -9.542631940771103e+33;
      
      var $2958 = HEAP[$p10] + 8;
      HEAP[$2958] = -9.542631940771103e+33;
      
      var $2960 = HEAP[$p10] + 16;
      HEAP[$p10] = $2960;
      
      var $2962 = HEAP[$p10];
      HEAP[$2962] = -Infinity;
      
      var $2964 = HEAP[$p10] + 8;
      HEAP[$2964] = 0;
      
      var $2966 = HEAP[$p10] + 16;
      HEAP[$p10] = $2966;
      
      var $2968 = HEAP[$p10];
      HEAP[$2968] = -Infinity;
      
      var $2970 = HEAP[$p10] + 8;
      HEAP[$2970] = 0;
      
      var $2972 = HEAP[$p10] + 16;
      HEAP[$p10] = $2972;
      
      var $2974 = HEAP[$p10];
      HEAP[$2974] = -9.542631940771103e+33;
      
      var $2976 = HEAP[$p10] + 8;
      HEAP[$2976] = -9.542631940771103e+33;
      
      var $2978 = HEAP[$p10] + 16;
      HEAP[$p10] = $2978;
      
      var $2980 = HEAP[$p10];
      HEAP[$2980] = Infinity;
      
      var $2982 = HEAP[$p10] + 8;
      HEAP[$2982] = NaN;
      
      var $2984 = HEAP[$p10] + 16;
      HEAP[$p10] = $2984;
      
      var $2986 = HEAP[$p10];
      HEAP[$2986] = Infinity;
      
      var $2988 = HEAP[$p10] + 8;
      HEAP[$2988] = NaN;
      
      var $2990 = HEAP[$p10] + 16;
      HEAP[$p10] = $2990;
      
      var $2992 = HEAP[$p10];
      HEAP[$2992] = NaN;
      
      var $2994 = HEAP[$p10] + 8;
      HEAP[$2994] = NaN;
      
      var $2996 = HEAP[$p10] + 16;
      HEAP[$p10] = $2996;
      
      var $2998 = HEAP[$p10];
      HEAP[$2998] = -9.542631940771103e+33;
      
      var $3000 = HEAP[$p10] + 8;
      HEAP[$3000] = -9.542631940771103e+33;
      
      var $3002 = HEAP[$p10] + 16;
      HEAP[$p10] = $3002;
      
      var $3004 = HEAP[$p10];
      HEAP[$3004] = -9.542631940771103e+33;
      
      var $3006 = HEAP[$p10] + 8;
      HEAP[$3006] = -9.542631940771103e+33;
      
      var $3008 = HEAP[$p10] + 16;
      HEAP[$p10] = $3008;
      
      var $3010 = HEAP[$p10];
      HEAP[$3010] = -9.542631940771103e+33;
      
      var $3012 = HEAP[$p10] + 8;
      HEAP[$3012] = -9.542631940771103e+33;
      
      var $3014 = HEAP[$p10] + 16;
      HEAP[$p10] = $3014;
      
      var $3016 = HEAP[$p10];
      HEAP[$3016] = -9.542631940771103e+33;
      
      var $3018 = HEAP[$p10] + 8;
      HEAP[$3018] = -9.542631940771103e+33;
      
      var $3020 = HEAP[$p10] + 16;
      HEAP[$p10] = $3020;
      
      var $3022 = HEAP[$p10];
      HEAP[$3022] = NaN;
      
      var $3024 = HEAP[$p10] + 8;
      HEAP[$3024] = NaN;
      
      var $3026 = HEAP[$p10] + 16;
      HEAP[$p10] = $3026;
      
      var $3028 = HEAP[$p10];
      HEAP[$3028] = NaN;
      
      var $3030 = HEAP[$p10] + 8;
      HEAP[$3030] = NaN;
      
      var $3032 = HEAP[$p10] + 16;
      HEAP[$p10] = $3032;
      
      var $3034 = HEAP[$p10];
      HEAP[$3034] = 0;
      
      var $3036 = HEAP[$p10] + 8;
      HEAP[$3036] = 0;
      
      var $3038 = HEAP[$p10] + 16;
      HEAP[$p10] = $3038;
      
      var $3040 = HEAP[$p10];
      HEAP[$3040] = -9.542631940771103e+33;
      
      var $3042 = HEAP[$p10] + 8;
      HEAP[$3042] = -9.542631940771103e+33;
      
      var $3044 = HEAP[$p10] + 16;
      HEAP[$p10] = $3044;
      
      var $3046 = HEAP[$p10];
      HEAP[$3046] = 0;
      
      var $3048 = HEAP[$p10] + 8;
      HEAP[$3048] = 0;
      
      var $3050 = HEAP[$p10] + 16;
      HEAP[$p10] = $3050;
      
      var $3052 = HEAP[$p10];
      HEAP[$3052] = 0;
      
      var $3054 = HEAP[$p10] + 8;
      HEAP[$3054] = 0;
      
      var $3056 = HEAP[$p10] + 16;
      HEAP[$p10] = $3056;
      
      var $3058 = HEAP[$p10];
      HEAP[$3058] = -9.542631940771103e+33;
      
      var $3060 = HEAP[$p10] + 8;
      HEAP[$3060] = -9.542631940771103e+33;
      
      var $3062 = HEAP[$p10] + 16;
      HEAP[$p10] = $3062;
      
      var $3064 = HEAP[$p10];
      HEAP[$3064] = 0;
      
      var $3066 = HEAP[$p10] + 8;
      HEAP[$3066] = 0;
      
      var $3068 = HEAP[$p10] + 16;
      HEAP[$p10] = $3068;
      
      var $3070 = HEAP[$p10];
      HEAP[$3070] = 0;
      
      var $3072 = HEAP[$p10] + 8;
      HEAP[$3072] = 0;
      
      var $3074 = HEAP[$p10] + 16;
      HEAP[$p10] = $3074;
      
      var $3076 = HEAP[$p10];
      HEAP[$3076] = 0;
      
      var $3078 = HEAP[$p10] + 8;
      HEAP[$3078] = 0;
      
      var $3080 = HEAP[$p10] + 16;
      HEAP[$p10] = $3080;
      
      var $3082 = HEAP[$p10];
      HEAP[$3082] = -9.542631940771103e+33;
      
      var $3084 = HEAP[$p10] + 8;
      HEAP[$3084] = -9.542631940771103e+33;
      
      var $3086 = HEAP[$p10] + 16;
      HEAP[$p10] = $3086;
      
      var $3088 = HEAP[$p10];
      HEAP[$3088] = 0;
      
      var $3090 = HEAP[$p10] + 8;
      HEAP[$3090] = 0;
      
      var $3092 = HEAP[$p10] + 16;
      HEAP[$p10] = $3092;
      
      var $3094 = HEAP[$p10];
      HEAP[$3094] = 0;
      
      var $3096 = HEAP[$p10] + 8;
      HEAP[$3096] = 0;
      
      var $3098 = HEAP[$p10] + 16;
      HEAP[$p10] = $3098;
      
      var $3100 = HEAP[$p10];
      HEAP[$3100] = -9.542631940771103e+33;
      
      var $3102 = HEAP[$p10] + 8;
      HEAP[$3102] = -9.542631940771103e+33;
      
      var $3104 = HEAP[$p10] + 16;
      HEAP[$p10] = $3104;
      
      var $3106 = HEAP[$p10];
      HEAP[$3106] = 0;
      
      var $3108 = HEAP[$p10] + 8;
      HEAP[$3108] = 0;
      
      var $3110 = HEAP[$p10] + 16;
      HEAP[$p10] = $3110;
      
      var $3112 = HEAP[$p10];
      HEAP[$3112] = 0;
      
      var $3114 = HEAP[$p10] + 8;
      HEAP[$3114] = 0;
      
      var $3116 = HEAP[$p10] + 16;
      HEAP[$p10] = $3116;
      
      var $3118 = HEAP[$p10];
      HEAP[$3118] = NaN;
      
      var $3120 = HEAP[$p10] + 8;
      HEAP[$3120] = NaN;
      
      var $3122 = HEAP[$p10] + 16;
      HEAP[$p10] = $3122;
      
      var $3124 = HEAP[$p10];
      HEAP[$3124] = -9.542631940771103e+33;
      
      var $3126 = HEAP[$p10] + 8;
      HEAP[$3126] = -9.542631940771103e+33;
      
      var $3128 = HEAP[$p10] + 16;
      HEAP[$p10] = $3128;
      
      var $3130 = HEAP[$p10];
      HEAP[$3130] = -9.542631940771103e+33;
      
      var $3132 = HEAP[$p10] + 8;
      HEAP[$3132] = -9.542631940771103e+33;
      
      var $3134 = HEAP[$p10] + 16;
      HEAP[$p10] = $3134;
      
      var $3136 = HEAP[$p10];
      HEAP[$3136] = -9.542631940771103e+33;
      
      var $3138 = HEAP[$p10] + 8;
      HEAP[$3138] = -9.542631940771103e+33;
      
      var $3140 = HEAP[$p10] + 16;
      HEAP[$p10] = $3140;
      
      var $3142 = HEAP[$p10];
      HEAP[$3142] = -9.542631940771103e+33;
      
      var $3144 = HEAP[$p10] + 8;
      HEAP[$3144] = -9.542631940771103e+33;
      
      var $3146 = HEAP[$p10] + 16;
      HEAP[$p10] = $3146;
      
      var $3148 = HEAP[$p10];
      HEAP[$3148] = NaN;
      
      var $3150 = HEAP[$p10] + 8;
      HEAP[$3150] = NaN;
      
      var $3152 = HEAP[$p10] + 16;
      HEAP[$p10] = $3152;
      
      var $3154 = HEAP[$p10];
      HEAP[$3154] = NaN;
      
      var $3156 = HEAP[$p10] + 8;
      HEAP[$3156] = NaN;
      
      var $3158 = HEAP[$p10] + 16;
      HEAP[$p10] = $3158;
      
      var $3160 = HEAP[$p10];
      HEAP[$3160] = Infinity;
      
      var $3162 = HEAP[$p10] + 8;
      HEAP[$3162] = NaN;
      
      var $3164 = HEAP[$p10] + 16;
      HEAP[$p10] = $3164;
      
      var $3166 = HEAP[$p10];
      HEAP[$3166] = -9.542631940771103e+33;
      
      var $3168 = HEAP[$p10] + 8;
      HEAP[$3168] = -9.542631940771103e+33;
      
      var $3170 = HEAP[$p10] + 16;
      HEAP[$p10] = $3170;
      
      var $3172 = HEAP[$p10];
      HEAP[$3172] = Infinity;
      
      var $3174 = HEAP[$p10] + 8;
      HEAP[$3174] = 0;
      
      var $3176 = HEAP[$p10] + 16;
      HEAP[$p10] = $3176;
      
      var $3178 = HEAP[$p10];
      HEAP[$3178] = Infinity;
      
      var $3180 = HEAP[$p10] + 8;
      HEAP[$3180] = 0;
      
      var $3182 = HEAP[$p10] + 16;
      HEAP[$p10] = $3182;
      
      var $3184 = HEAP[$p10];
      HEAP[$3184] = -9.542631940771103e+33;
      
      var $3186 = HEAP[$p10] + 8;
      HEAP[$3186] = -9.542631940771103e+33;
      
      var $3188 = HEAP[$p10] + 16;
      HEAP[$p10] = $3188;
      
      var $3190 = HEAP[$p10];
      HEAP[$3190] = Infinity;
      
      var $3192 = HEAP[$p10] + 8;
      HEAP[$3192] = NaN;
      
      var $3194 = HEAP[$p10] + 16;
      HEAP[$p10] = $3194;
      
      var $3196 = HEAP[$p10];
      HEAP[$3196] = Infinity;
      
      var $3198 = HEAP[$p10] + 8;
      HEAP[$3198] = NaN;
      
      var $3200 = HEAP[$p10] + 16;
      HEAP[$p10] = $3200;
      
      var $3202 = HEAP[$p10];
      HEAP[$3202] = NaN;
      
      var $3204 = HEAP[$p10] + 8;
      HEAP[$3204] = NaN;
      
      var $3206 = HEAP[$p10] + 16;
      HEAP[$p10] = $3206;
      
      var $3208 = HEAP[$p10];
      HEAP[$3208] = NaN;
      
      var $3210 = HEAP[$p10] + 8;
      HEAP[$3210] = NaN;
      
      var $3212 = HEAP[$p10] + 16;
      HEAP[$p10] = $3212;
      
      var $3214 = HEAP[$p10];
      HEAP[$3214] = NaN;
      
      var $3216 = HEAP[$p10] + 8;
      HEAP[$3216] = 0;
      
      var $3218 = HEAP[$p10] + 16;
      HEAP[$p10] = $3218;
      
      var $3220 = HEAP[$p10];
      HEAP[$3220] = NaN;
      
      var $3222 = HEAP[$p10] + 8;
      HEAP[$3222] = 0;
      
      var $3224 = HEAP[$p10] + 16;
      HEAP[$p10] = $3224;
      
      var $3226 = HEAP[$p10];
      HEAP[$3226] = NaN;
      
      var $3228 = HEAP[$p10] + 8;
      HEAP[$3228] = NaN;
      
      var $3230 = HEAP[$p10] + 16;
      HEAP[$p10] = $3230;
      
      var $3232 = HEAP[$p10];
      HEAP[$3232] = NaN;
      
      var $3234 = HEAP[$p10] + 8;
      HEAP[$3234] = NaN;
      
      var $3236 = HEAP[$p10] + 16;
      HEAP[$p10] = $3236;
      
      var $3238 = HEAP[$p10];
      HEAP[$3238] = NaN;
      
      var $3240 = HEAP[$p10] + 8;
      HEAP[$3240] = NaN;
      
      var $3242 = HEAP[$p10] + 16;
      HEAP[$p10] = $3242;
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
  Module["_initcmath"] = _initcmath;
  function __Py_acosh($x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr = __stackBase__;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 16;
      var $t = __stackBase__ + 24;
      var $t12 = __stackBase__ + 32;
      
      HEAP[$x_addr] = $x;
      var $1 = HEAP[$x_addr];
      var $2 = ___isnan($1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $5 = HEAP[$x_addr] * 2;
      HEAP[$0] = $5;
      __label__ = 13;
      break;
     case 2:
      
      
      if (HEAP[$x_addr] < 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = ___errno_location();
      HEAP[$8] = 33;
      HEAP[$0] = NaN;
      __label__ = 13;
      break;
     case 4:
      
      
      
      if (HEAP[$x_addr] >= HEAP[_two_pow_p28]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $12 = HEAP[$x_addr];
      var $13 = ___isinf($12);
      
      if ($13 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $16 = HEAP[$x_addr] * 2;
      HEAP[$0] = $16;
      __label__ = 13;
      break;
     case 7:
      var $17 = HEAP[$x_addr];
      var $18 = _llvm_log_f64($17);
      
      var $20 = $18 + HEAP[_ln2];
      HEAP[$0] = $20;
      __label__ = 13;
      break;
     case 8:
      
      
      if (HEAP[$x_addr] == 1) {
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
      
      
      if (HEAP[$x_addr] > 2) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      var $27 = HEAP[$x_addr] * HEAP[$x_addr];
      HEAP[$t] = $27;
      
      var $29 = HEAP[$x_addr] * 2;
      
      var $31 = HEAP[$t] - 1;
      var $32 = _sqrt($31);
      
      
      var $35 = -1 / ($32 + HEAP[$x_addr]);
      var $36 = $29 + $35;
      var $37 = _llvm_log_f64($36);
      HEAP[$0] = $37;
      __label__ = 13;
      break;
     case 12:
      
      var $39 = HEAP[$x_addr] - 1;
      HEAP[$t12] = $39;
      
      
      
      
      
      var $45 = HEAP[$t12] * 2 + HEAP[$t12] * HEAP[$t12];
      var $46 = _sqrt($45);
      
      var $48 = $46 + HEAP[$t12];
      var $49 = _log1p($48);
      HEAP[$0] = $49;
      __label__ = 13;
      break;
     case 13:
      var $50 = HEAP[$0];
      HEAP[$retval] = $50;
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
  function __Py_asinh($x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr = __stackBase__;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 16;
      var $w = __stackBase__ + 24;
      var $absx = __stackBase__ + 32;
      var $t = __stackBase__ + 40;
      
      HEAP[$x_addr] = $x;
      var $1 = HEAP[$x_addr];
      var $2 = _fabs($1);
      HEAP[$absx] = $2;
      var $3 = HEAP[$x_addr];
      var $4 = ___isnan($3);
      
      if ($4 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $6 = HEAP[$x_addr];
      var $7 = ___isinf($6);
      
      if ($7 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $10 = HEAP[$x_addr] * 2;
      HEAP[$0] = $10;
      __label__ = 11;
      break;
     case 3:
      
      
      
      if (HEAP[$absx] < HEAP[_two_pow_m28]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $14 = HEAP[$x_addr];
      HEAP[$0] = $14;
      __label__ = 11;
      break;
     case 5:
      
      
      
      if (HEAP[$absx] > HEAP[_two_pow_p28]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $18 = HEAP[$absx];
      var $19 = _llvm_log_f64($18);
      
      var $21 = $19 + HEAP[_ln2];
      HEAP[$w] = $21;
      __label__ = 10;
      break;
     case 7:
      
      
      if (HEAP[$absx] > 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $25 = HEAP[$absx] * 2;
      
      
      
      var $29 = HEAP[$x_addr] * HEAP[$x_addr] + 1;
      var $30 = _sqrt($29);
      
      
      
      var $34 = $25 + 1 / ($30 + HEAP[$absx]);
      var $35 = _llvm_log_f64($34);
      HEAP[$w] = $35;
      __label__ = 10;
      break;
     case 9:
      
      
      var $38 = HEAP[$x_addr] * HEAP[$x_addr];
      HEAP[$t] = $38;
      
      var $40 = HEAP[$t] + 1;
      var $41 = _sqrt($40);
      
      
      
      
      var $46 = HEAP[$t] / ($41 + 1) + HEAP[$absx];
      var $47 = _log1p($46);
      HEAP[$w] = $47;
      __label__ = 10;
      break;
     case 10:
      var $48 = HEAP[$w];
      var $49 = HEAP[$x_addr];
      var $50 = _copysign($48, $49);
      HEAP[$0] = $50;
      __label__ = 11;
      break;
     case 11:
      var $51 = HEAP[$0];
      HEAP[$retval] = $51;
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
  function __Py_atanh($x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr = __stackBase__;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 16;
      var $absx = __stackBase__ + 24;
      var $t = __stackBase__ + 32;
      
      HEAP[$x_addr] = $x;
      var $1 = HEAP[$x_addr];
      var $2 = ___isnan($1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $5 = HEAP[$x_addr] * 2;
      HEAP[$0] = $5;
      __label__ = 10;
      break;
     case 2:
      var $6 = HEAP[$x_addr];
      var $7 = _fabs($6);
      HEAP[$absx] = $7;
      
      
      if (HEAP[$absx] >= 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = ___errno_location();
      HEAP[$10] = 33;
      HEAP[$0] = NaN;
      __label__ = 10;
      break;
     case 4:
      
      
      
      if (HEAP[$absx] < HEAP[_two_pow_m28]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $14 = HEAP[$x_addr];
      HEAP[$0] = $14;
      __label__ = 10;
      break;
     case 6:
      
      
      if (HEAP[$absx] < .5) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      var $18 = HEAP[$absx] * 2;
      HEAP[$t] = $18;
      
      
      
      
      
      
      
      var $26 = HEAP[$t] * HEAP[$absx] / (1 - HEAP[$absx]) + HEAP[$t];
      var $27 = _log1p($26);
      var $28 = $27 * .5;
      HEAP[$t] = $28;
      __label__ = 9;
      break;
     case 8:
      
      
      
      
      var $33 = HEAP[$absx] * 2 / (1 - HEAP[$absx]);
      var $34 = _log1p($33);
      var $35 = $34 * .5;
      HEAP[$t] = $35;
      __label__ = 9;
      break;
     case 9:
      var $36 = HEAP[$t];
      var $37 = HEAP[$x_addr];
      var $38 = _copysign($36, $37);
      HEAP[$0] = $38;
      __label__ = 10;
      break;
     case 10:
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
  function __Py_expm1($x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr = __stackBase__;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 16;
      var $u = __stackBase__ + 24;
      
      HEAP[$x_addr] = $x;
      var $1 = HEAP[$x_addr];
      var $2 = _fabs($1);
      
      if ($2 < .7) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $4 = HEAP[$x_addr];
      var $5 = _llvm_exp_f64($4);
      HEAP[$u] = $5;
      
      
      if (HEAP[$u] == 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $8 = HEAP[$x_addr];
      HEAP[$0] = $8;
      __label__ = 5;
      break;
     case 3:
      
      
      
      var $12 = (HEAP[$u] - 1) * HEAP[$x_addr];
      var $13 = HEAP[$u];
      var $14 = _llvm_log_f64($13);
      var $15 = $12 / $14;
      HEAP[$0] = $15;
      __label__ = 5;
      break;
     case 4:
      var $16 = HEAP[$x_addr];
      var $17 = _llvm_exp_f64($16);
      var $18 = $17 - 1;
      HEAP[$0] = $18;
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
  function __Py_log1p($x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr = __stackBase__;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 16;
      var $y = __stackBase__ + 24;
      
      HEAP[$x_addr] = $x;
      var $1 = HEAP[$x_addr];
      var $2 = _fabs($1);
      
      if ($2 < 1.1102230246251565e-16) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[$x_addr];
      HEAP[$0] = $4;
      __label__ = 6;
      break;
     case 2:
      
      var $6 = HEAP[$x_addr] < -.5;
      if ($6) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$x_addr] > 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $10 = HEAP[$x_addr] + 1;
      HEAP[$y] = $10;
      var $11 = HEAP[$y];
      var $12 = _llvm_log_f64($11);
      
      
      
      
      
      
      var $19 = $12 - (HEAP[$y] - 1 - HEAP[$x_addr]) / HEAP[$y];
      HEAP[$0] = $19;
      __label__ = 6;
      break;
     case 5:
      
      var $21 = HEAP[$x_addr] + 1;
      var $22 = _llvm_log_f64($21);
      HEAP[$0] = $22;
      __label__ = 6;
      break;
     case 6:
      var $23 = HEAP[$0];
      HEAP[$retval] = $23;
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
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _c_acos, 0, _c_acosh, 0, _c_asin, 0, _c_asinh, 0, _c_atan, 0, _c_atanh, 0, _c_cos, 0, _c_cosh, 0, _c_exp, 0, _c_log10, 0, _c_sin, 0, _c_sinh, 0, _c_sqrt, 0, _c_tan, 0, _c_tanh, 0, _cmath_acos, 0, _cmath_acosh, 0, _cmath_asin, 0, _cmath_asinh, 0, _cmath_atan, 0, _cmath_atanh, 0, _cmath_cos, 0, _cmath_cosh, 0, _cmath_exp, 0, _cmath_isinf, 0, _cmath_isnan, 0, _cmath_log, 0, _cmath_log10, 0, _cmath_phase, 0, _cmath_polar, 0, _cmath_rect, 0, _cmath_sin, 0, _cmath_sinh, 0, _cmath_sqrt, 0, _cmath_tan, 0, _cmath_tanh, 0 ]);
  function run(args) {
    _acos_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_acos_doc = allocate([ 97, 99, 111, 115, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 114, 99, 32, 99, 111, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _acosh_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_acosh_doc = allocate([ 97, 99, 111, 115, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 97, 114, 99, 99, 111, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _c_asin_doc = allocate([ 97, 115, 105, 110, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 114, 99, 32, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _asinh_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_asinh_doc = allocate([ 97, 115, 105, 110, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 97, 114, 99, 32, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _c_atan_doc = allocate([ 97, 116, 97, 110, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 114, 99, 32, 116, 97, 110, 103, 101, 110, 116, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _atanh_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_atanh_doc = allocate([ 97, 116, 97, 110, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 97, 114, 99, 32, 116, 97, 110, 103, 101, 110, 116, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _c_cos_doc = allocate([ 99, 111, 115, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 99, 111, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _cosh_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_cosh_doc = allocate([ 99, 111, 115, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 99, 111, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _exp_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_exp_doc = allocate([ 101, 120, 112, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 101, 120, 112, 111, 110, 101, 110, 116, 105, 97, 108, 32, 118, 97, 108, 117, 101, 32, 101, 42, 42, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _log_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_log10_doc = allocate([ 108, 111, 103, 49, 48, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 98, 97, 115, 101, 45, 49, 48, 32, 108, 111, 103, 97, 114, 105, 116, 104, 109, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _c_sin_doc = allocate([ 115, 105, 110, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _sinh_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_sinh_doc = allocate([ 115, 105, 110, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _sqrt_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_sqrt_doc = allocate([ 115, 113, 114, 116, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 115, 113, 117, 97, 114, 101, 32, 114, 111, 111, 116, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _c_tan_doc = allocate([ 116, 97, 110, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 116, 97, 110, 103, 101, 110, 116, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _tanh_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_tanh_doc = allocate([ 116, 97, 110, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 116, 97, 110, 103, 101, 110, 116, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 68, 124, 68, 0 ], "i8", ALLOC_NORMAL);
    _cmath_log_doc = allocate([ 108, 111, 103, 40, 120, 91, 44, 32, 98, 97, 115, 101, 93, 41, 32, 45, 62, 32, 116, 104, 101, 32, 108, 111, 103, 97, 114, 105, 116, 104, 109, 32, 111, 102, 32, 120, 32, 116, 111, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 98, 97, 115, 101, 46, 10, 73, 102, 32, 116, 104, 101, 32, 98, 97, 115, 101, 32, 110, 111, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 44, 32, 114, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 110, 97, 116, 117, 114, 97, 108, 32, 108, 111, 103, 97, 114, 105, 116, 104, 109, 32, 40, 98, 97, 115, 101, 32, 101, 41, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 109, 97, 116, 104, 32, 100, 111, 109, 97, 105, 110, 32, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 109, 97, 116, 104, 32, 114, 97, 110, 103, 101, 32, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 68, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 68, 58, 112, 104, 97, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    _cmath_phase_doc = allocate([ 112, 104, 97, 115, 101, 40, 122, 41, 32, 45, 62, 32, 102, 108, 111, 97, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 114, 103, 117, 109, 101, 110, 116, 44, 32, 97, 108, 115, 111, 32, 107, 110, 111, 119, 110, 32, 97, 115, 32, 116, 104, 101, 32, 112, 104, 97, 115, 101, 32, 97, 110, 103, 108, 101, 44, 32, 111, 102, 32, 97, 32, 99, 111, 109, 112, 108, 101, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 68, 58, 112, 111, 108, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 100, 100, 0 ], "i8", ALLOC_NORMAL);
    _cmath_polar_doc = allocate([ 112, 111, 108, 97, 114, 40, 122, 41, 32, 45, 62, 32, 114, 58, 32, 102, 108, 111, 97, 116, 44, 32, 112, 104, 105, 58, 32, 102, 108, 111, 97, 116, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 99, 111, 109, 112, 108, 101, 120, 32, 102, 114, 111, 109, 32, 114, 101, 99, 116, 97, 110, 103, 117, 108, 97, 114, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 115, 32, 116, 111, 32, 112, 111, 108, 97, 114, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 115, 46, 32, 114, 32, 105, 115, 10, 116, 104, 101, 32, 100, 105, 115, 116, 97, 110, 99, 101, 32, 102, 114, 111, 109, 32, 48, 32, 97, 110, 100, 32, 112, 104, 105, 32, 116, 104, 101, 32, 112, 104, 97, 115, 101, 32, 97, 110, 103, 108, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 100, 100, 58, 114, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _rect_special_values = allocate(784, "double", ALLOC_NORMAL);
    _cmath_rect_doc = allocate([ 114, 101, 99, 116, 40, 114, 44, 32, 112, 104, 105, 41, 32, 45, 62, 32, 122, 58, 32, 99, 111, 109, 112, 108, 101, 120, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 102, 114, 111, 109, 32, 112, 111, 108, 97, 114, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 115, 32, 116, 111, 32, 114, 101, 99, 116, 97, 110, 103, 117, 108, 97, 114, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 68, 58, 105, 115, 110, 97, 110, 0 ], "i8", ALLOC_NORMAL);
    _cmath_isnan_doc = allocate([ 105, 115, 110, 97, 110, 40, 122, 41, 32, 45, 62, 32, 98, 111, 111, 108, 10, 67, 104, 101, 99, 107, 115, 32, 105, 102, 32, 116, 104, 101, 32, 114, 101, 97, 108, 32, 111, 114, 32, 105, 109, 97, 103, 105, 110, 97, 114, 121, 32, 112, 97, 114, 116, 32, 111, 102, 32, 122, 32, 110, 111, 116, 32, 97, 32, 110, 117, 109, 98, 101, 114, 32, 40, 78, 97, 78, 41, 0 ], "i8", ALLOC_NORMAL);
    _cmath_isinf_doc = allocate([ 105, 115, 105, 110, 102, 40, 122, 41, 32, 45, 62, 32, 98, 111, 111, 108, 10, 67, 104, 101, 99, 107, 115, 32, 105, 102, 32, 116, 104, 101, 32, 114, 101, 97, 108, 32, 111, 114, 32, 105, 109, 97, 103, 105, 110, 97, 114, 121, 32, 112, 97, 114, 116, 32, 111, 102, 32, 122, 32, 105, 115, 32, 105, 110, 102, 105, 110, 105, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _module_doc = allocate([ 84, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 105, 115, 32, 97, 108, 119, 97, 121, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 46, 32, 73, 116, 32, 112, 114, 111, 118, 105, 100, 101, 115, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 109, 97, 116, 104, 101, 109, 97, 116, 105, 99, 97, 108, 10, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 102, 111, 114, 32, 99, 111, 109, 112, 108, 101, 120, 32, 110, 117, 109, 98, 101, 114, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 97, 99, 111, 115, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 97, 99, 111, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 97, 115, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 97, 115, 105, 110, 104, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 97, 116, 97, 110, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 97, 116, 97, 110, 104, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 99, 111, 115, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 99, 111, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 101, 120, 112, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 105, 115, 105, 110, 102, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 105, 115, 110, 97, 110, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 108, 111, 103, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 108, 111, 103, 49, 48, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 112, 104, 97, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 112, 111, 108, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 114, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 115, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 115, 105, 110, 104, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 115, 113, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 116, 97, 110, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 116, 97, 110, 104, 0 ], "i8", ALLOC_NORMAL);
    _cmath_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str30 = allocate([ 99, 109, 97, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 112, 105, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 101, 0 ], "i8", ALLOC_NORMAL);
    _ln2 = allocate([ .6931471805599453 ], [ "double", 0, 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    _two_pow_m28 = allocate([ 3.725290298461914e-9 ], [ "double", 0, 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    _two_pow_p28 = allocate([ 268435456 ], [ "double", 0, 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    _zero = allocate(1, "double", ALLOC_NORMAL);
    HEAP[_cmath_methods] = __str9;
    HEAP[_cmath_methods + 4] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_cmath_methods + 12] = _c_acos_doc;
    HEAP[_cmath_methods + 16] = __str10;
    HEAP[_cmath_methods + 20] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_cmath_methods + 28] = _c_acosh_doc;
    HEAP[_cmath_methods + 32] = __str11;
    HEAP[_cmath_methods + 36] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_cmath_methods + 44] = _c_asin_doc;
    HEAP[_cmath_methods + 48] = __str12;
    HEAP[_cmath_methods + 52] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_cmath_methods + 60] = _c_asinh_doc;
    HEAP[_cmath_methods + 64] = __str13;
    HEAP[_cmath_methods + 68] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_cmath_methods + 76] = _c_atan_doc;
    HEAP[_cmath_methods + 80] = __str14;
    HEAP[_cmath_methods + 84] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_cmath_methods + 92] = _c_atanh_doc;
    HEAP[_cmath_methods + 96] = __str15;
    HEAP[_cmath_methods + 100] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_cmath_methods + 108] = _c_cos_doc;
    HEAP[_cmath_methods + 112] = __str16;
    HEAP[_cmath_methods + 116] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_cmath_methods + 124] = _c_cosh_doc;
    HEAP[_cmath_methods + 128] = __str17;
    HEAP[_cmath_methods + 132] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_cmath_methods + 140] = _c_exp_doc;
    HEAP[_cmath_methods + 144] = __str18;
    HEAP[_cmath_methods + 148] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_cmath_methods + 156] = _cmath_isinf_doc;
    HEAP[_cmath_methods + 160] = __str19;
    HEAP[_cmath_methods + 164] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_cmath_methods + 172] = _cmath_isnan_doc;
    HEAP[_cmath_methods + 176] = __str20;
    HEAP[_cmath_methods + 180] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_cmath_methods + 188] = _cmath_log_doc;
    HEAP[_cmath_methods + 192] = __str21;
    HEAP[_cmath_methods + 196] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_cmath_methods + 204] = _c_log10_doc;
    HEAP[_cmath_methods + 208] = __str22;
    HEAP[_cmath_methods + 212] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_cmath_methods + 220] = _cmath_phase_doc;
    HEAP[_cmath_methods + 224] = __str23;
    HEAP[_cmath_methods + 228] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_cmath_methods + 236] = _cmath_polar_doc;
    HEAP[_cmath_methods + 240] = __str24;
    HEAP[_cmath_methods + 244] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_cmath_methods + 252] = _cmath_rect_doc;
    HEAP[_cmath_methods + 256] = __str25;
    HEAP[_cmath_methods + 260] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_cmath_methods + 268] = _c_sin_doc;
    HEAP[_cmath_methods + 272] = __str26;
    HEAP[_cmath_methods + 276] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_cmath_methods + 284] = _c_sinh_doc;
    HEAP[_cmath_methods + 288] = __str27;
    HEAP[_cmath_methods + 292] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_cmath_methods + 300] = _c_sqrt_doc;
    HEAP[_cmath_methods + 304] = __str28;
    HEAP[_cmath_methods + 308] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_cmath_methods + 316] = _c_tan_doc;
    HEAP[_cmath_methods + 320] = __str29;
    HEAP[_cmath_methods + 324] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_cmath_methods + 332] = _c_tanh_doc;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
