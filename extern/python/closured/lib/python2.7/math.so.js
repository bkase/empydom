"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 656;
  var $1___SIZE = 16;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyFloatObject___SIZE = 16;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyLongObject___SIZE = 0;
  var $struct_PyLongObject___FLATTENER = [];
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _pi;
  var _sqrtpi;
  var __str;
  var __str1;
  var ___PRETTY_FUNCTION___8271;
  var __str2;
  var __str3;
  var _lanczos_g;
  var _lanczos_g_minus_half;
  var _lanczos_num_coeffs;
  var _lanczos_den_coeffs;
  var _gamma_integral;
  var __str4;
  var ___PRETTY_FUNCTION___8317;
  var __str5;
  var ___PRETTY_FUNCTION___8654;
  var __str6;
  var __str7;
  var _math_acos_doc;
  var _math_acosh_doc;
  var _math_asin_doc;
  var _math_asinh_doc;
  var _math_atan_doc;
  var __str8;
  var _math_atan2_doc;
  var _math_atanh_doc;
  var _math_ceil_doc;
  var __str9;
  var _math_copysign_doc;
  var _math_cos_doc;
  var _math_cosh_doc;
  var _math_erf_doc;
  var _math_erfc_doc;
  var _math_exp_doc;
  var _math_expm1_doc;
  var _math_fabs_doc;
  var _math_floor_doc;
  var _math_gamma_doc;
  var _math_lgamma_doc;
  var _math_log1p_doc;
  var _math_sin_doc;
  var _math_sinh_doc;
  var _math_sqrt_doc;
  var _math_tan_doc;
  var _math_tanh_doc;
  var __str10;
  var __str11;
  var ___PRETTY_FUNCTION___9069;
  var __str12;
  var __str13;
  var __str14;
  var __str15;
  var _math_fsum_doc;
  var __str16;
  var __str17;
  var _math_factorial_doc;
  var __str18;
  var _math_trunc_doc;
  var __str19;
  var _math_frexp_doc;
  var __str20;
  var __str21;
  var _math_ldexp_doc;
  var __str22;
  var _math_modf_doc;
  var __str23;
  var _math_log_doc;
  var __str24;
  var _math_log10_doc;
  var __str25;
  var _math_fmod_doc;
  var __str26;
  var _math_hypot_doc;
  var __str27;
  var _math_pow_doc;
  var _degToRad;
  var _radToDeg;
  var _math_degrees_doc;
  var _math_radians_doc;
  var _math_isnan_doc;
  var _math_isinf_doc;
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
  var __str58;
  var __str59;
  var __str60;
  var _math_methods;
  var _module_doc;
  var __str61;
  var __str62;
  var __str63;
  var _ln2;
  var _two_pow_m28;
  var _two_pow_p28;
  var _zero;
  function _sinpi($x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr = __stackBase__;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 16;
      var $y = __stackBase__ + 24;
      var $r = __stackBase__ + 32;
      var $n = __stackBase__ + 40;
      
      HEAP[$x_addr] = $x;
      var $1 = HEAP[$x_addr];
      var $2 = ___finite($1);
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str, __str1, 79, ___PRETTY_FUNCTION___8271);
      throw "Reached an unreachable!";
     case 2:
      var $4 = HEAP[$x_addr];
      var $5 = _fabs($4);
      var $6 = _fmod($5, 2);
      HEAP[$y] = $6;
      
      var $8 = HEAP[$y] * 2;
      var $9 = _round($8);
      var $10 = $9 | 0;
      HEAP[$n] = $10;
      
      
      if (HEAP[$n] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$n] > 4) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str2, __str1, 82, ___PRETTY_FUNCTION___8271);
      throw "Reached an unreachable!";
     case 5:
      var $15 = HEAP[$n];
      if ($15 == 0) {
        __label__ = 6;
        break;
      } else if ($15 == 1) {
        __label__ = 7;
        break;
      } else if ($15 == 2) {
        __label__ = 8;
        break;
      } else if ($15 == 3) {
        __label__ = 9;
        break;
      } else if ($15 == 4) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 6:
      
      
      var $18 = HEAP[_pi] * HEAP[$y];
      var $19 = _sin($18);
      HEAP[$r] = $19;
      __label__ = 12;
      break;
     case 7:
      
      
      
      var $23 = (HEAP[$y] - .5) * HEAP[_pi];
      var $24 = _cos($23);
      HEAP[$r] = $24;
      __label__ = 12;
      break;
     case 8:
      
      
      
      var $28 = (1 - HEAP[$y]) * HEAP[_pi];
      var $29 = _sin($28);
      HEAP[$r] = $29;
      __label__ = 12;
      break;
     case 9:
      
      
      
      var $33 = (HEAP[$y] - 1.5) * HEAP[_pi];
      var $34 = _cos($33);
      var $35 = 0 - $34;
      HEAP[$r] = $35;
      __label__ = 12;
      break;
     case 10:
      
      
      
      var $39 = (HEAP[$y] - 2) * HEAP[_pi];
      var $40 = _sin($39);
      HEAP[$r] = $40;
      __label__ = 12;
      break;
     case 11:
      ___assert_fail(__str3, __str1, 102, ___PRETTY_FUNCTION___8271);
      throw "Reached an unreachable!";
     case 12:
      var $41 = HEAP[$x_addr];
      var $42 = _copysign(1, $41);
      
      var $44 = $42 * HEAP[$r];
      HEAP[$0] = $44;
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
  function _lanczos_sum($x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr = __stackBase__;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 16;
      var $num = __stackBase__ + 24;
      var $den = __stackBase__ + 32;
      var $i = __stackBase__ + 40;
      
      HEAP[$x_addr] = $x;
      HEAP[$num] = 0;
      HEAP[$den] = 0;
      
      
      if (HEAP[$x_addr] <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str4, __str1, 206, ___PRETTY_FUNCTION___8317);
      throw "Reached an unreachable!";
     case 2:
      
      
      if (HEAP[$x_addr] < 5) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      HEAP[$i] = 13;
      __label__ = 5;
      break;
     case 4:
      
      
      
      
      
      
      var $11 = HEAP[$num] * HEAP[$x_addr] + HEAP[_lanczos_num_coeffs + HEAP[$i] * 8];
      HEAP[$num] = $11;
      
      
      
      
      
      
      var $18 = HEAP[$den] * HEAP[$x_addr] + HEAP[_lanczos_den_coeffs + HEAP[$i] * 8];
      HEAP[$den] = $18;
      __label__ = 5;
      break;
     case 5:
      
      var $20 = HEAP[$i] - 1;
      HEAP[$i] = $20;
      
      
      if (HEAP[$i] >= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      __label__ = 10;
      break;
     case 7:
      HEAP[$i] = 0;
      __label__ = 9;
      break;
     case 8:
      
      
      
      
      
      
      var $29 = HEAP[$num] / HEAP[$x_addr] + HEAP[_lanczos_num_coeffs + HEAP[$i] * 8];
      HEAP[$num] = $29;
      
      
      
      
      
      
      var $36 = HEAP[$den] / HEAP[$x_addr] + HEAP[_lanczos_den_coeffs + HEAP[$i] * 8];
      HEAP[$den] = $36;
      
      var $38 = HEAP[$i] + 1;
      HEAP[$i] = $38;
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$i] <= 12) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      var $43 = HEAP[$num] / HEAP[$den];
      HEAP[$0] = $43;
      var $44 = HEAP[$0];
      HEAP[$retval] = $44;
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
  function _m_tgamma($x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 80;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 80);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr = __stackBase__;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 16;
      var $absx = __stackBase__ + 24;
      var $r = __stackBase__ + 32;
      var $y = __stackBase__ + 40;
      var $z = __stackBase__ + 48;
      var $sqrtpow = __stackBase__ + 56;
      var $q = __stackBase__ + 64;
      var $q22 = __stackBase__ + 72;
      
      HEAP[$x_addr] = $x;
      var $1 = HEAP[$x_addr];
      var $2 = ___finite($1);
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      var $4 = HEAP[$x_addr];
      var $5 = ___isnan($4);
      
      if ($5 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$x_addr] > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = HEAP[$x_addr];
      HEAP[$0] = $9;
      __label__ = 34;
      break;
     case 4:
      var $10 = ___errno_location();
      HEAP[$10] = 33;
      HEAP[$0] = NaN;
      __label__ = 34;
      break;
     case 5:
      
      
      if (HEAP[$x_addr] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $13 = ___errno_location();
      HEAP[$13] = 33;
      
      var $15 = 1 / HEAP[$x_addr];
      HEAP[$0] = $15;
      __label__ = 34;
      break;
     case 7:
      var $16 = HEAP[$x_addr];
      var $17 = _floor($16);
      
      
      if ($17 == HEAP[$x_addr]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      if (HEAP[$x_addr] < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $22 = ___errno_location();
      HEAP[$22] = 33;
      HEAP[$0] = NaN;
      __label__ = 34;
      break;
     case 10:
      
      
      if (HEAP[$x_addr] <= 23) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $29 = HEAP[_gamma_integral + ((HEAP[$x_addr] | 0) - 1) * 8];
      HEAP[$0] = $29;
      __label__ = 34;
      break;
     case 12:
      var $30 = HEAP[$x_addr];
      var $31 = _fabs($30);
      HEAP[$absx] = $31;
      
      
      if (HEAP[$absx] < 1e-20) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      
      var $35 = 1 / HEAP[$x_addr];
      HEAP[$r] = $35;
      var $36 = HEAP[$r];
      var $37 = ___isinf($36);
      
      if ($37 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $39 = ___errno_location();
      HEAP[$39] = 34;
      __label__ = 15;
      break;
     case 15:
      var $40 = HEAP[$r];
      HEAP[$0] = $40;
      __label__ = 34;
      break;
     case 16:
      
      
      if (HEAP[$absx] > 200) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      
      
      if (HEAP[$x_addr] < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $45 = HEAP[$x_addr];
      var $46 = _sinpi($45);
      var $47 = 0 / $46;
      HEAP[$0] = $47;
      __label__ = 34;
      break;
     case 19:
      var $48 = ___errno_location();
      HEAP[$48] = 34;
      HEAP[$0] = Infinity;
      __label__ = 34;
      break;
     case 20:
      
      
      var $51 = HEAP[$absx] + HEAP[_lanczos_g_minus_half];
      HEAP[$y] = $51;
      
      
      
      if (HEAP[$absx] > HEAP[_lanczos_g_minus_half]) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      var $57 = HEAP[$y] - HEAP[$absx];
      HEAP[$q] = $57;
      
      
      var $60 = HEAP[$q] - HEAP[_lanczos_g_minus_half];
      HEAP[$z] = $60;
      __label__ = 23;
      break;
     case 22:
      
      
      var $63 = HEAP[$y] - HEAP[_lanczos_g_minus_half];
      HEAP[$q22] = $63;
      
      
      var $66 = HEAP[$q22] - HEAP[$absx];
      HEAP[$z] = $66;
      __label__ = 23;
      break;
     case 23:
      
      
      
      
      var $71 = HEAP[$z] * HEAP[_lanczos_g] / HEAP[$y];
      HEAP[$z] = $71;
      
      
      if (HEAP[$x_addr] < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 24:
      
      var $75 = 0 - HEAP[_pi];
      var $76 = HEAP[$absx];
      var $77 = _sinpi($76);
      
      
      var $80 = $75 / $77 / HEAP[$absx];
      var $81 = HEAP[$y];
      var $82 = _llvm_exp_f64($81);
      var $83 = $80 * $82;
      var $84 = HEAP[$absx];
      var $85 = _lanczos_sum($84);
      var $86 = $83 / $85;
      HEAP[$r] = $86;
      
      
      
      
      var $91 = HEAP[$r] - HEAP[$z] * HEAP[$r];
      HEAP[$r] = $91;
      
      
      if (HEAP[$absx] < 140) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      var $95 = HEAP[$absx] - .5;
      var $96 = HEAP[$y];
      var $97 = _llvm_pow_f64($96, $95);
      
      var $99 = HEAP[$r] / $97;
      HEAP[$r] = $99;
      __label__ = 27;
      break;
     case 26:
      
      
      var $102 = HEAP[$absx] / 2 - .25;
      var $103 = HEAP[$y];
      var $104 = _llvm_pow_f64($103, $102);
      HEAP[$sqrtpow] = $104;
      
      
      var $107 = HEAP[$r] / HEAP[$sqrtpow];
      HEAP[$r] = $107;
      
      
      var $110 = HEAP[$r] / HEAP[$sqrtpow];
      HEAP[$r] = $110;
      __label__ = 27;
      break;
     case 27:
      __label__ = 31;
      break;
     case 28:
      var $111 = HEAP[$absx];
      var $112 = _lanczos_sum($111);
      var $113 = HEAP[$y];
      var $114 = _llvm_exp_f64($113);
      var $115 = $112 / $114;
      HEAP[$r] = $115;
      
      
      
      
      var $120 = HEAP[$z] * HEAP[$r] + HEAP[$r];
      HEAP[$r] = $120;
      
      
      if (HEAP[$absx] < 140) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      var $124 = HEAP[$absx] - .5;
      var $125 = HEAP[$y];
      var $126 = _llvm_pow_f64($125, $124);
      
      var $128 = $126 * HEAP[$r];
      HEAP[$r] = $128;
      __label__ = 31;
      break;
     case 30:
      
      
      var $131 = HEAP[$absx] / 2 - .25;
      var $132 = HEAP[$y];
      var $133 = _llvm_pow_f64($132, $131);
      HEAP[$sqrtpow] = $133;
      
      
      var $136 = HEAP[$r] * HEAP[$sqrtpow];
      HEAP[$r] = $136;
      
      
      var $139 = HEAP[$r] * HEAP[$sqrtpow];
      HEAP[$r] = $139;
      __label__ = 31;
      break;
     case 31:
      var $140 = HEAP[$r];
      var $141 = ___isinf($140);
      
      if ($141 != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      var $143 = ___errno_location();
      HEAP[$143] = 34;
      __label__ = 33;
      break;
     case 33:
      var $144 = HEAP[$r];
      HEAP[$0] = $144;
      __label__ = 34;
      break;
     case 34:
      var $145 = HEAP[$0];
      HEAP[$retval] = $145;
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
  function _m_lgamma($x) {
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
      var $r = __stackBase__ + 24;
      var $absx = __stackBase__ + 32;
      
      HEAP[$x_addr] = $x;
      var $1 = HEAP[$x_addr];
      var $2 = ___finite($1);
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $4 = HEAP[$x_addr];
      var $5 = ___isnan($4);
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $7 = HEAP[$x_addr];
      HEAP[$0] = $7;
      __label__ = 17;
      break;
     case 3:
      HEAP[$0] = Infinity;
      __label__ = 17;
      break;
     case 4:
      var $8 = HEAP[$x_addr];
      var $9 = _floor($8);
      
      
      if ($9 == HEAP[$x_addr]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      
      if (HEAP[$x_addr] <= 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      if (HEAP[$x_addr] <= 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $16 = ___errno_location();
      HEAP[$16] = 33;
      HEAP[$0] = Infinity;
      __label__ = 17;
      break;
     case 8:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 9:
      var $17 = HEAP[$x_addr];
      var $18 = _fabs($17);
      HEAP[$absx] = $18;
      
      
      if (HEAP[$absx] < 1e-20) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $21 = HEAP[$absx];
      var $22 = _llvm_log_f64($21);
      var $23 = 0 - $22;
      HEAP[$0] = $23;
      __label__ = 17;
      break;
     case 11:
      
      
      if (HEAP[$x_addr] > 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $26 = HEAP[$x_addr];
      var $27 = _lanczos_sum($26);
      var $28 = _llvm_log_f64($27);
      
      var $30 = $28 - HEAP[_lanczos_g];
      
      var $32 = HEAP[$x_addr] - .5;
      
      
      
      var $36 = HEAP[$x_addr] + HEAP[_lanczos_g] - .5;
      var $37 = _llvm_log_f64($36);
      
      
      var $40 = $30 + $32 * ($37 - 1);
      HEAP[$r] = $40;
      __label__ = 14;
      break;
     case 13:
      var $41 = HEAP[_pi];
      var $42 = _llvm_log_f64($41);
      var $43 = HEAP[$absx];
      var $44 = _sinpi($43);
      var $45 = _fabs($44);
      var $46 = _llvm_log_f64($45);
      var $47 = $42 - $46;
      var $48 = HEAP[$absx];
      var $49 = _llvm_log_f64($48);
      var $50 = $47 - $49;
      var $51 = HEAP[$absx];
      var $52 = _lanczos_sum($51);
      var $53 = _llvm_log_f64($52);
      
      var $55 = $53 - HEAP[_lanczos_g];
      
      var $57 = HEAP[$absx] - .5;
      
      
      
      var $61 = HEAP[$absx] + HEAP[_lanczos_g] - .5;
      var $62 = _llvm_log_f64($61);
      
      
      
      var $66 = $50 - ($55 + $57 * ($62 - 1));
      HEAP[$r] = $66;
      __label__ = 14;
      break;
     case 14:
      var $67 = HEAP[$r];
      var $68 = ___isinf($67);
      
      if ($68 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $70 = ___errno_location();
      HEAP[$70] = 34;
      __label__ = 16;
      break;
     case 16:
      var $71 = HEAP[$r];
      HEAP[$0] = $71;
      __label__ = 17;
      break;
     case 17:
      var $72 = HEAP[$0];
      HEAP[$retval] = $72;
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
  function _m_erf_series($x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 64;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr = __stackBase__;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 16;
      var $x2 = __stackBase__ + 24;
      var $acc = __stackBase__ + 32;
      var $fk = __stackBase__ + 40;
      var $result = __stackBase__ + 48;
      var $i = __stackBase__ + 56;
      var $saved_errno = __stackBase__ + 60;
      
      HEAP[$x_addr] = $x;
      
      
      var $3 = HEAP[$x_addr] * HEAP[$x_addr];
      HEAP[$x2] = $3;
      HEAP[$acc] = 0;
      HEAP[$fk] = 25.5;
      HEAP[$i] = 0;
      __label__ = 2;
      break;
     case 1:
      
      
      
      
      
      var $9 = HEAP[$x2] * HEAP[$acc] / HEAP[$fk] + 2;
      HEAP[$acc] = $9;
      
      var $11 = HEAP[$fk] - 1;
      HEAP[$fk] = $11;
      
      var $13 = HEAP[$i] + 1;
      HEAP[$i] = $13;
      __label__ = 2;
      break;
     case 2:
      
      
      if (HEAP[$i] <= 24) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $16 = ___errno_location();
      var $17 = HEAP[$16];
      HEAP[$saved_errno] = $17;
      
      
      var $20 = HEAP[$acc] * HEAP[$x_addr];
      
      var $22 = 0 - HEAP[$x2];
      var $23 = _llvm_exp_f64($22);
      
      
      var $26 = $20 * $23 / HEAP[_sqrtpi];
      HEAP[$result] = $26;
      var $27 = ___errno_location();
      var $28 = HEAP[$saved_errno];
      HEAP[$27] = $28;
      var $29 = HEAP[$result];
      HEAP[$0] = $29;
      var $30 = HEAP[$0];
      HEAP[$retval] = $30;
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
  function _m_erfc_contfrac($x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 112;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 112);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr = __stackBase__;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 16;
      var $x2 = __stackBase__ + 24;
      var $a = __stackBase__ + 32;
      var $da = __stackBase__ + 40;
      var $p = __stackBase__ + 48;
      var $p_last = __stackBase__ + 56;
      var $q = __stackBase__ + 64;
      var $q_last = __stackBase__ + 72;
      var $b = __stackBase__ + 80;
      var $result = __stackBase__ + 88;
      var $i = __stackBase__ + 96;
      var $saved_errno = __stackBase__ + 100;
      var $temp = __stackBase__ + 104;
      
      HEAP[$x_addr] = $x;
      
      
      if (HEAP[$x_addr] >= 30) {
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
      
      
      var $5 = HEAP[$x_addr] * HEAP[$x_addr];
      HEAP[$x2] = $5;
      HEAP[$a] = 0;
      HEAP[$da] = .5;
      HEAP[$p] = 1;
      HEAP[$p_last] = 0;
      
      
      var $8 = HEAP[$da] + HEAP[$x2];
      HEAP[$q] = $8;
      HEAP[$q_last] = 1;
      HEAP[$i] = 0;
      __label__ = 4;
      break;
     case 3:
      
      
      var $11 = HEAP[$a] + HEAP[$da];
      HEAP[$a] = $11;
      
      var $13 = HEAP[$da] + 2;
      HEAP[$da] = $13;
      
      
      var $16 = HEAP[$da] + HEAP[$x2];
      HEAP[$b] = $16;
      var $17 = HEAP[$p];
      HEAP[$temp] = $17;
      
      
      
      
      
      
      var $24 = HEAP[$b] * HEAP[$p] - HEAP[$a] * HEAP[$p_last];
      HEAP[$p] = $24;
      var $25 = HEAP[$temp];
      HEAP[$p_last] = $25;
      var $26 = HEAP[$q];
      HEAP[$temp] = $26;
      
      
      
      
      
      
      var $33 = HEAP[$b] * HEAP[$q] - HEAP[$a] * HEAP[$q_last];
      HEAP[$q] = $33;
      var $34 = HEAP[$temp];
      HEAP[$q_last] = $34;
      
      var $36 = HEAP[$i] + 1;
      HEAP[$i] = $36;
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[$i] <= 49) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $39 = ___errno_location();
      var $40 = HEAP[$39];
      HEAP[$saved_errno] = $40;
      
      
      
      
      var $45 = HEAP[$p] / HEAP[$q] * HEAP[$x_addr];
      
      var $47 = 0 - HEAP[$x2];
      var $48 = _llvm_exp_f64($47);
      
      
      var $51 = $45 * $48 / HEAP[_sqrtpi];
      HEAP[$result] = $51;
      var $52 = ___errno_location();
      var $53 = HEAP[$saved_errno];
      HEAP[$52] = $53;
      var $54 = HEAP[$result];
      HEAP[$0] = $54;
      __label__ = 6;
      break;
     case 6:
      var $55 = HEAP[$0];
      HEAP[$retval] = $55;
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
  function _m_erf($x) {
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
      var $iftmp_22 = __stackBase__ + 16;
      var $0 = __stackBase__ + 24;
      var $absx = __stackBase__ + 32;
      var $cf = __stackBase__ + 40;
      
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
      var $4 = HEAP[$x_addr];
      HEAP[$0] = $4;
      __label__ = 8;
      break;
     case 2:
      var $5 = HEAP[$x_addr];
      var $6 = _fabs($5);
      HEAP[$absx] = $6;
      
      
      if (HEAP[$absx] < 1.5) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = HEAP[$x_addr];
      var $10 = _m_erf_series($9);
      HEAP[$0] = $10;
      __label__ = 8;
      break;
     case 4:
      var $11 = HEAP[$absx];
      var $12 = _m_erfc_contfrac($11);
      HEAP[$cf] = $12;
      
      
      if (HEAP[$x_addr] > 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $16 = 1 - HEAP[$cf];
      HEAP[$iftmp_22] = $16;
      __label__ = 7;
      break;
     case 6:
      
      var $18 = HEAP[$cf] - 1;
      HEAP[$iftmp_22] = $18;
      __label__ = 7;
      break;
     case 7:
      var $19 = HEAP[$iftmp_22];
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
  function _m_erfc($x) {
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
      var $iftmp_23 = __stackBase__ + 16;
      var $0 = __stackBase__ + 24;
      var $absx = __stackBase__ + 32;
      var $cf = __stackBase__ + 40;
      
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
      var $4 = HEAP[$x_addr];
      HEAP[$0] = $4;
      __label__ = 8;
      break;
     case 2:
      var $5 = HEAP[$x_addr];
      var $6 = _fabs($5);
      HEAP[$absx] = $6;
      
      
      if (HEAP[$absx] < 1.5) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = HEAP[$x_addr];
      var $10 = _m_erf_series($9);
      var $11 = 1 - $10;
      HEAP[$0] = $11;
      __label__ = 8;
      break;
     case 4:
      var $12 = HEAP[$absx];
      var $13 = _m_erfc_contfrac($12);
      HEAP[$cf] = $13;
      
      
      if (HEAP[$x_addr] <= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $17 = 2 - HEAP[$cf];
      HEAP[$iftmp_23] = $17;
      __label__ = 7;
      break;
     case 6:
      var $18 = HEAP[$cf];
      HEAP[$iftmp_23] = $18;
      __label__ = 7;
      break;
     case 7:
      var $19 = HEAP[$iftmp_23];
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
  function _m_atan2($y, $x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $y_addr = __stackBase__;
      var $x_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 24;
      
      HEAP[$y_addr] = $y;
      HEAP[$x_addr] = $x;
      var $1 = HEAP[$x_addr];
      var $2 = ___isnan($1);
      
      if ($2 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $4 = HEAP[$y_addr];
      var $5 = ___isnan($4);
      
      if ($5 != 0) {
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
      var $7 = HEAP[$y_addr];
      var $8 = ___isinf($7);
      
      if ($8 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      var $10 = HEAP[$x_addr];
      var $11 = ___isinf($10);
      
      if ($11 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $13 = HEAP[$x_addr];
      var $14 = _copysign(1, $13);
      
      if ($14 == 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $16 = HEAP[$y_addr];
      var $17 = _copysign(.7853981633974483, $16);
      HEAP[$0] = $17;
      __label__ = 15;
      break;
     case 7:
      var $18 = HEAP[$y_addr];
      var $19 = _copysign(2.356194490192345, $18);
      HEAP[$0] = $19;
      __label__ = 15;
      break;
     case 8:
      var $20 = HEAP[$y_addr];
      var $21 = _copysign(1.5707963267948966, $20);
      HEAP[$0] = $21;
      __label__ = 15;
      break;
     case 9:
      var $22 = HEAP[$x_addr];
      var $23 = ___isinf($22);
      
      if ($23 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if (HEAP[$y_addr] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      var $27 = HEAP[$x_addr];
      var $28 = _copysign(1, $27);
      
      if ($28 == 1) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $30 = HEAP[$y_addr];
      var $31 = _copysign(0, $30);
      HEAP[$0] = $31;
      __label__ = 15;
      break;
     case 13:
      var $32 = HEAP[$y_addr];
      var $33 = _copysign(3.141592653589793, $32);
      HEAP[$0] = $33;
      __label__ = 15;
      break;
     case 14:
      var $34 = HEAP[$y_addr];
      var $35 = HEAP[$x_addr];
      var $36 = _atan2($34, $35);
      HEAP[$0] = $36;
      __label__ = 15;
      break;
     case 15:
      var $37 = HEAP[$0];
      HEAP[$retval] = $37;
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
  function _m_log($x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr = __stackBase__;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 16;
      
      HEAP[$x_addr] = $x;
      var $1 = HEAP[$x_addr];
      var $2 = ___finite($1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      if (HEAP[$x_addr] > 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $6 = HEAP[$x_addr];
      var $7 = _llvm_log_f64($6);
      HEAP[$0] = $7;
      __label__ = 11;
      break;
     case 3:
      var $8 = ___errno_location();
      HEAP[$8] = 33;
      
      
      if (HEAP[$x_addr] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -Infinity;
      __label__ = 11;
      break;
     case 5:
      HEAP[$0] = NaN;
      __label__ = 11;
      break;
     case 6:
      var $11 = HEAP[$x_addr];
      var $12 = ___isnan($11);
      
      if ($12 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $14 = HEAP[$x_addr];
      HEAP[$0] = $14;
      __label__ = 11;
      break;
     case 8:
      
      
      if (HEAP[$x_addr] > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $17 = HEAP[$x_addr];
      HEAP[$0] = $17;
      __label__ = 11;
      break;
     case 10:
      var $18 = ___errno_location();
      HEAP[$18] = 33;
      HEAP[$0] = NaN;
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
  function _m_log10($x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr = __stackBase__;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 16;
      
      HEAP[$x_addr] = $x;
      var $1 = HEAP[$x_addr];
      var $2 = ___finite($1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      if (HEAP[$x_addr] > 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $6 = HEAP[$x_addr];
      var $7 = _llvm_log10_f64($6);
      HEAP[$0] = $7;
      __label__ = 11;
      break;
     case 3:
      var $8 = ___errno_location();
      HEAP[$8] = 33;
      
      
      if (HEAP[$x_addr] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -Infinity;
      __label__ = 11;
      break;
     case 5:
      HEAP[$0] = NaN;
      __label__ = 11;
      break;
     case 6:
      var $11 = HEAP[$x_addr];
      var $12 = ___isnan($11);
      
      if ($12 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $14 = HEAP[$x_addr];
      HEAP[$0] = $14;
      __label__ = 11;
      break;
     case 8:
      
      
      if (HEAP[$x_addr] > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $17 = HEAP[$x_addr];
      HEAP[$0] = $17;
      __label__ = 11;
      break;
     case 10:
      var $18 = ___errno_location();
      HEAP[$18] = 33;
      HEAP[$0] = NaN;
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
  function _is_error($x) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr = __stackBase__;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      
      HEAP[$x_addr] = $x;
      HEAP[$result] = 1;
      var $1 = ___errno_location();
      
      
      if (HEAP[$1] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str5, __str1, 620, ___PRETTY_FUNCTION___8654);
      throw "Reached an unreachable!";
     case 2:
      var $4 = ___errno_location();
      
      
      if (HEAP[$4] == 33) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $7 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($7, __str6);
      __label__ = 10;
      break;
     case 4:
      var $8 = ___errno_location();
      
      
      if (HEAP[$8] == 34) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      var $11 = HEAP[$x_addr];
      var $12 = _fabs($11);
      
      if ($12 < 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$result] = 0;
      __label__ = 8;
      break;
     case 7:
      var $14 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($14, __str7);
      __label__ = 8;
      break;
     case 8:
      __label__ = 10;
      break;
     case 9:
      var $15 = HEAP[_PyExc_ValueError];
      var $16 = _PyErr_SetFromErrno($15);
      __label__ = 10;
      break;
     case 10:
      var $17 = HEAP[$result];
      HEAP[$0] = $17;
      var $18 = HEAP[$0];
      HEAP[$retval] = $18;
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
  function _math_1($arg, $func, $can_overflow) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $arg_addr = __stackBase__;
      var $func_addr = __stackBase__ + 4;
      var $can_overflow_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $iftmp_27 = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $x = __stackBase__ + 24;
      var $r = __stackBase__ + 32;
      
      HEAP[$arg_addr] = $arg;
      HEAP[$func_addr] = $func;
      HEAP[$can_overflow_addr] = $can_overflow;
      var $1 = HEAP[$arg_addr];
      var $2 = _PyFloat_AsDouble($1);
      HEAP[$x] = $2;
      
      var $4 = HEAP[$x] == -1;
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
      __label__ = 19;
      break;
     case 3:
      var $7 = ___errno_location();
      HEAP[$7] = 0;
      var $8 = HEAP[$func_addr];
      var $9 = HEAP[$x];
      var $10 = FUNCTION_TABLE[$8]($9);
      HEAP[$r] = $10;
      var $11 = HEAP[$r];
      var $12 = ___isnan($11);
      
      if ($12 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      var $14 = HEAP[$x];
      var $15 = ___isnan($14);
      
      if ($15 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $17 = ___errno_location();
      HEAP[$17] = 33;
      __label__ = 7;
      break;
     case 6:
      var $18 = ___errno_location();
      HEAP[$18] = 0;
      __label__ = 7;
      break;
     case 7:
      __label__ = 15;
      break;
     case 8:
      var $19 = HEAP[$r];
      var $20 = ___isinf($19);
      
      if ($20 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 9:
      var $22 = HEAP[$x];
      var $23 = ___finite($22);
      
      if ($23 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      var $25 = ___errno_location();
      
      
      if (HEAP[$can_overflow_addr] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$iftmp_27] = 34;
      __label__ = 13;
      break;
     case 12:
      HEAP[$iftmp_27] = 33;
      __label__ = 13;
      break;
     case 13:
      var $28 = HEAP[$iftmp_27];
      HEAP[$25] = $28;
      __label__ = 15;
      break;
     case 14:
      var $29 = ___errno_location();
      HEAP[$29] = 0;
      __label__ = 15;
      break;
     case 15:
      var $30 = ___errno_location();
      
      
      if (HEAP[$30] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $33 = HEAP[$r];
      var $34 = _is_error($33);
      
      if ($34 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 18:
      var $36 = HEAP[$r];
      var $37 = _PyFloat_FromDouble($36);
      HEAP[$0] = $37;
      __label__ = 19;
      break;
     case 19:
      var $38 = HEAP[$0];
      HEAP[$retval] = $38;
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
  function _math_1a($arg, $func) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $arg_addr = __stackBase__;
      var $func_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $r = __stackBase__ + 24;
      
      HEAP[$arg_addr] = $arg;
      HEAP[$func_addr] = $func;
      var $1 = HEAP[$arg_addr];
      var $2 = _PyFloat_AsDouble($1);
      HEAP[$x] = $2;
      
      var $4 = HEAP[$x] == -1;
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
      var $7 = ___errno_location();
      HEAP[$7] = 0;
      var $8 = HEAP[$func_addr];
      var $9 = HEAP[$x];
      var $10 = FUNCTION_TABLE[$8]($9);
      HEAP[$r] = $10;
      var $11 = ___errno_location();
      
      
      if (HEAP[$11] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $14 = HEAP[$r];
      var $15 = _is_error($14);
      
      if ($15 != 0) {
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
      var $17 = HEAP[$r];
      var $18 = _PyFloat_FromDouble($17);
      HEAP[$0] = $18;
      __label__ = 7;
      break;
     case 7:
      var $19 = HEAP[$0];
      HEAP[$retval] = $19;
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
  function _math_2($args, $func, $funcname) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $args_addr = __stackBase__;
      var $func_addr = __stackBase__ + 4;
      var $funcname_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $ox = __stackBase__ + 20;
      var $oy = __stackBase__ + 24;
      var $x = __stackBase__ + 28;
      var $y = __stackBase__ + 36;
      var $r = __stackBase__ + 44;
      
      HEAP[$args_addr] = $args;
      HEAP[$func_addr] = $func;
      HEAP[$funcname_addr] = $funcname;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$funcname_addr];
      var $3 = _PyArg_UnpackTuple($1, $2, 2, 2, allocate([ $ox, 0, 0, 0, $oy, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$ox];
      var $6 = _PyFloat_AsDouble($5);
      HEAP[$x] = $6;
      var $7 = HEAP[$oy];
      var $8 = _PyFloat_AsDouble($7);
      HEAP[$y] = $8;
      
      var $10 = HEAP[$x] == -1;
      if ($10) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $12 = HEAP[$y] == -1;
      if ($12) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $13 = _PyErr_Occurred();
      
      if ($13 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 6:
      var $15 = ___errno_location();
      HEAP[$15] = 0;
      var $16 = HEAP[$func_addr];
      var $17 = HEAP[$x];
      var $18 = HEAP[$y];
      var $19 = FUNCTION_TABLE[$16]($17, $18);
      HEAP[$r] = $19;
      var $20 = HEAP[$r];
      var $21 = ___isnan($20);
      
      if ($21 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      var $23 = HEAP[$x];
      var $24 = ___isnan($23);
      
      if ($24 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $26 = HEAP[$y];
      var $27 = ___isnan($26);
      
      if ($27 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $29 = ___errno_location();
      HEAP[$29] = 33;
      __label__ = 11;
      break;
     case 10:
      var $30 = ___errno_location();
      HEAP[$30] = 0;
      __label__ = 11;
      break;
     case 11:
      __label__ = 17;
      break;
     case 12:
      var $31 = HEAP[$r];
      var $32 = ___isinf($31);
      
      if ($32 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 13:
      var $34 = HEAP[$x];
      var $35 = ___finite($34);
      
      if ($35 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      var $37 = HEAP[$y];
      var $38 = ___finite($37);
      
      if ($38 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $40 = ___errno_location();
      HEAP[$40] = 34;
      __label__ = 17;
      break;
     case 16:
      var $41 = ___errno_location();
      HEAP[$41] = 0;
      __label__ = 17;
      break;
     case 17:
      var $42 = ___errno_location();
      
      
      if (HEAP[$42] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      var $45 = HEAP[$r];
      var $46 = _is_error($45);
      
      if ($46 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 20:
      var $48 = HEAP[$r];
      var $49 = _PyFloat_FromDouble($48);
      HEAP[$0] = $49;
      __label__ = 21;
      break;
     case 21:
      var $50 = HEAP[$0];
      HEAP[$retval] = $50;
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
  function _math_acos($self, $args) {
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
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 2, 0);
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
  function _math_acosh($self, $args) {
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
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 4, 0);
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
  function _math_asin($self, $args) {
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
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 6, 0);
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
  function _math_asinh($self, $args) {
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
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 8, 0);
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
  function _math_atan($self, $args) {
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
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 10, 0);
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
  function _math_atan2($self, $args) {
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
      var $2 = _math_2($1, FUNCTION_TABLE_OFFSET + 12, __str8);
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
  function _math_atanh($self, $args) {
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
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 14, 0);
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
  function _math_ceil($self, $args) {
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
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 16, 0);
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
  function _math_copysign($self, $args) {
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
      var $2 = _math_2($1, FUNCTION_TABLE_OFFSET + 18, __str9);
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
  function _math_cos($self, $args) {
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
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 20, 0);
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
  function _math_cosh($self, $args) {
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
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 22, 1);
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
  function _math_erf($self, $args) {
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
      var $2 = _math_1a($1, FUNCTION_TABLE_OFFSET + 24);
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
  function _math_erfc($self, $args) {
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
      var $2 = _math_1a($1, FUNCTION_TABLE_OFFSET + 26);
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
  function _math_exp($self, $args) {
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
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 28, 1);
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
  function _math_expm1($self, $args) {
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
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 30, 1);
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
  function _math_fabs($self, $args) {
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
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 32, 0);
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
  function _math_floor($self, $args) {
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
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 34, 0);
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
  function _math_gamma($self, $args) {
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
      var $2 = _math_1a($1, FUNCTION_TABLE_OFFSET + 36);
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
  function _math_lgamma($self, $args) {
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
      var $2 = _math_1a($1, FUNCTION_TABLE_OFFSET + 38);
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
  function _math_log1p($self, $args) {
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
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 40, 1);
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
  function _math_sin($self, $args) {
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
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 42, 0);
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
  function _math_sinh($self, $args) {
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
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 44, 1);
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
  function _math_sqrt($self, $args) {
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
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 46, 0);
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
  function _math_tan($self, $args) {
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
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 48, 0);
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
  function _math_tanh($self, $args) {
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
      var $2 = _math_1($1, FUNCTION_TABLE_OFFSET + 50, 0);
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
  function __fsum_realloc($p_ptr, $n, $ps, $m_ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_ptr_addr = __stackBase__;
      var $n_addr = __stackBase__ + 4;
      var $ps_addr = __stackBase__ + 8;
      var $m_ptr_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $v = __stackBase__ + 24;
      var $m = __stackBase__ + 28;
      var $p = __stackBase__ + 32;
      
      HEAP[$p_ptr_addr] = $p_ptr;
      HEAP[$n_addr] = $n;
      HEAP[$ps_addr] = $ps;
      HEAP[$m_ptr_addr] = $m_ptr;
      HEAP[$v] = 0;
      
      var $2 = HEAP[HEAP[$m_ptr_addr]];
      HEAP[$m] = $2;
      
      
      var $5 = HEAP[$m] + HEAP[$m];
      HEAP[$m] = $5;
      
      
      
      if (HEAP[$n_addr] < HEAP[$m]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      if (HEAP[$m] <= 268435454) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 2:
      
      var $12 = HEAP[HEAP[$p_ptr_addr]];
      HEAP[$p] = $12;
      
      
      
      if (HEAP[$p] == HEAP[$ps_addr]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      var $17 = HEAP[$m] * 8;
      var $18 = _PyMem_Malloc($17);
      HEAP[$v] = $18;
      
      
      if (HEAP[$v] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $22 = HEAP[$n_addr] * 8;
      var $23 = HEAP[$v];
      
      var $25 = HEAP[$ps_addr];
      _llvm_memcpy_p0i8_p0i8_i32($23, $25, $22, 1, 0);
      __label__ = 5;
      break;
     case 5:
      __label__ = 7;
      break;
     case 6:
      
      var $27 = HEAP[$m] * 8;
      
      var $29 = HEAP[$p];
      var $30 = _PyMem_Realloc($29, $27);
      HEAP[$v] = $30;
      __label__ = 7;
      break;
     case 7:
      
      
      if (HEAP[$v] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $33 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($33, __str10);
      HEAP[$0] = 1;
      __label__ = 10;
      break;
     case 9:
      
      var $35 = HEAP[$v];
      var $36 = HEAP[$p_ptr_addr];
      HEAP[$36] = $35;
      var $37 = HEAP[$m_ptr_addr];
      var $38 = HEAP[$m];
      HEAP[$37] = $38;
      HEAP[$0] = 0;
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
  function _math_fsum($self, $seq) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 376;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 376);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $seq_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $item = __stackBase__ + 16;
      var $iter = __stackBase__ + 20;
      var $sum = __stackBase__ + 24;
      var $i = __stackBase__ + 28;
      var $j = __stackBase__ + 32;
      var $n = __stackBase__ + 36;
      var $m = __stackBase__ + 40;
      var $x = __stackBase__ + 44;
      var $y = __stackBase__ + 52;
      var $t = __stackBase__ + 60;
      var $ps = __stackBase__ + 68;
      var $p = __stackBase__ + 324;
      var $xsave = __stackBase__ + 328;
      var $special_sum = __stackBase__ + 336;
      var $inf_sum = __stackBase__ + 344;
      var $hi = __stackBase__ + 352;
      var $yr = __stackBase__ + 360;
      var $lo = __stackBase__ + 368;
      
      HEAP[__stackBase__] = $self;
      HEAP[$seq_addr] = $seq;
      HEAP[$sum] = 0;
      HEAP[$n] = 0;
      HEAP[$m] = 32;
      
      HEAP[$p] = $ps;
      HEAP[$special_sum] = 0;
      HEAP[$inf_sum] = 0;
      var $1 = HEAP[$seq_addr];
      var $2 = _PyObject_GetIter($1);
      HEAP[$iter] = $2;
      
      
      if (HEAP[$iter] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 57;
      break;
     case 2:
      
      
      if (HEAP[$n] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      if (HEAP[$n] > HEAP[$m]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str11, __str1, 978, ___PRETTY_FUNCTION___9069);
      throw "Reached an unreachable!";
     case 5:
      
      
      if (HEAP[$m] != 32) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      if ($ps != HEAP[$p]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      if (HEAP[$m] <= 32) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      if (HEAP[$p] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      ___assert_fail(__str12, __str1, 980, ___PRETTY_FUNCTION___9069);
      throw "Reached an unreachable!";
     case 10:
      var $18 = HEAP[$iter];
      var $19 = _PyIter_Next($18);
      HEAP[$item] = $19;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      var $22 = _PyErr_Occurred();
      
      if ($22 != 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if (HEAP[$special_sum] != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 13:
      var $26 = HEAP[$item];
      var $27 = _PyFloat_AsDouble($26);
      HEAP[$x] = $27;
      
      
      
      var $31 = HEAP[HEAP[$item]] - 1;
      
      var $33 = HEAP[$item];
      HEAP[$33] = $31;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $42 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $43 = HEAP[$item];
      FUNCTION_TABLE[$42]($43);
      __label__ = 15;
      break;
     case 15:
      var $44 = _PyErr_Occurred();
      
      if ($44 != 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $46 = HEAP[$x];
      HEAP[$xsave] = $46;
      HEAP[$j] = 0;
      var $47 = HEAP[$j];
      HEAP[$i] = $47;
      __label__ = 22;
      break;
     case 17:
      
      
      
      var $51 = HEAP[HEAP[$p] + 8 * HEAP[$j]];
      HEAP[$y] = $51;
      var $52 = HEAP[$x];
      var $53 = _fabs($52);
      var $54 = HEAP[$y];
      var $55 = _fabs($54);
      
      if ($53 < $55) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $57 = HEAP[$x];
      HEAP[$t] = $57;
      var $58 = HEAP[$y];
      HEAP[$x] = $58;
      var $59 = HEAP[$t];
      HEAP[$y] = $59;
      __label__ = 19;
      break;
     case 19:
      
      
      var $62 = HEAP[$x] + HEAP[$y];
      HEAP[$hi] = $62;
      
      
      var $65 = HEAP[$hi] - HEAP[$x];
      HEAP[$yr] = $65;
      
      
      var $68 = HEAP[$y] - HEAP[$yr];
      HEAP[$lo] = $68;
      
      
      if (HEAP[$lo] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      var $72 = HEAP[$lo];
      
      var $74 = HEAP[$p] + 8 * HEAP[$i];
      HEAP[$74] = $72;
      
      var $76 = HEAP[$i] + 1;
      HEAP[$i] = $76;
      __label__ = 21;
      break;
     case 21:
      var $77 = HEAP[$hi];
      HEAP[$x] = $77;
      
      var $79 = HEAP[$j] + 1;
      HEAP[$j] = $79;
      __label__ = 22;
      break;
     case 22:
      
      
      
      if (HEAP[$j] < HEAP[$n]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      var $83 = HEAP[$i];
      HEAP[$n] = $83;
      
      
      if (HEAP[$x] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 24:
      var $86 = HEAP[$x];
      var $87 = ___finite($86);
      
      if ($87 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 25:
      var $89 = HEAP[$xsave];
      var $90 = ___finite($89);
      
      if ($90 != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      var $92 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($92, __str13);
      __label__ = 52;
      break;
     case 27:
      var $93 = HEAP[$xsave];
      var $94 = ___isinf($93);
      
      if ($94 != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      var $98 = HEAP[$inf_sum] + HEAP[$xsave];
      HEAP[$inf_sum] = $98;
      __label__ = 29;
      break;
     case 29:
      
      
      var $101 = HEAP[$special_sum] + HEAP[$xsave];
      HEAP[$special_sum] = $101;
      HEAP[$n] = 0;
      __label__ = 33;
      break;
     case 30:
      
      
      
      if (HEAP[$n] < HEAP[$m]) {
        __label__ = 32;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      var $105 = HEAP[$n];
      var $ps33 = $ps;
      var $106 = __fsum_realloc($p, $105, $ps33, $m);
      
      if ($106 != 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      var $110 = HEAP[$p] + 8 * HEAP[$n];
      var $111 = HEAP[$x];
      HEAP[$110] = $111;
      
      var $113 = HEAP[$n] + 1;
      HEAP[$n] = $113;
      __label__ = 33;
      break;
     case 33:
      __label__ = 2;
      break;
     case 34:
      var $114 = HEAP[$inf_sum];
      var $115 = ___isnan($114);
      
      if ($115 != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      var $117 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($117, __str14);
      __label__ = 37;
      break;
     case 36:
      var $118 = HEAP[$special_sum];
      var $119 = _PyFloat_FromDouble($118);
      HEAP[$sum] = $119;
      __label__ = 37;
      break;
     case 37:
      __label__ = 52;
      break;
     case 38:
      HEAP[$hi] = 0;
      
      
      if (HEAP[$n] > 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 39:
      var $122 = HEAP[$p];
      
      var $124 = HEAP[$n] - 1;
      HEAP[$n] = $124;
      
      
      var $127 = HEAP[$122 + 8 * HEAP[$n]];
      HEAP[$hi] = $127;
      __label__ = 43;
      break;
     case 40:
      var $128 = HEAP[$hi];
      HEAP[$x] = $128;
      var $129 = HEAP[$p];
      
      var $131 = HEAP[$n] - 1;
      HEAP[$n] = $131;
      
      
      var $134 = HEAP[$129 + 8 * HEAP[$n]];
      HEAP[$y] = $134;
      var $135 = HEAP[$y];
      var $136 = _fabs($135);
      var $137 = HEAP[$x];
      var $138 = _fabs($137);
      
      if ($136 >= $138) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      ___assert_fail(__str15, __str1, 1049, ___PRETTY_FUNCTION___9069);
      throw "Reached an unreachable!";
     case 42:
      
      
      var $142 = HEAP[$x] + HEAP[$y];
      HEAP[$hi] = $142;
      
      
      var $145 = HEAP[$hi] - HEAP[$x];
      HEAP[$yr] = $145;
      
      
      var $148 = HEAP[$y] - HEAP[$yr];
      HEAP[$lo] = $148;
      
      
      if (HEAP[$lo] != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      
      
      if (HEAP[$n] > 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      
      
      if (HEAP[$n] > 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 45:
      
      
      if (HEAP[$lo] >= 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 46:
      
      
      
      
      
      
      if (HEAP[HEAP[$p] + 8 * (HEAP[$n] - 1)] < 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 47:
      
      
      if (HEAP[$lo] <= 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      
      
      
      
      
      
      if (HEAP[HEAP[$p] + 8 * (HEAP[$n] - 1)] > 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 49:
      
      var $172 = HEAP[$lo] * 2;
      HEAP[$y] = $172;
      
      
      var $175 = HEAP[$hi] + HEAP[$y];
      HEAP[$x] = $175;
      
      
      var $178 = HEAP[$x] - HEAP[$hi];
      HEAP[$yr] = $178;
      
      
      
      if (HEAP[$y] == HEAP[$yr]) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      var $182 = HEAP[$x];
      HEAP[$hi] = $182;
      __label__ = 51;
      break;
     case 51:
      var $183 = HEAP[$hi];
      var $184 = _PyFloat_FromDouble($183);
      HEAP[$sum] = $184;
      __label__ = 52;
      break;
     case 52:
      
      
      
      var $188 = HEAP[HEAP[$iter]] - 1;
      
      var $190 = HEAP[$iter];
      HEAP[$190] = $188;
      
      
      
      
      if (HEAP[HEAP[$iter]] == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      
      
      
      
      var $199 = HEAP[HEAP[HEAP[$iter] + 4] + 24];
      var $200 = HEAP[$iter];
      FUNCTION_TABLE[$199]($200);
      __label__ = 54;
      break;
     case 54:
      
      
      
      if ($ps != HEAP[$p]) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      
      var $204 = HEAP[$p];
      _PyMem_Free($204);
      __label__ = 56;
      break;
     case 56:
      var $205 = HEAP[$sum];
      HEAP[$0] = $205;
      __label__ = 57;
      break;
     case 57:
      var $206 = HEAP[$0];
      HEAP[$retval] = $206;
      __label__ = 58;
      break;
     case 58:
      var $retval60 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval60;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_factorial($self, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      var $result = __stackBase__ + 24;
      var $iobj = __stackBase__ + 28;
      var $newresult = __stackBase__ + 32;
      var $lx = __stackBase__ + 36;
      var $dx = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $self;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$arg_addr] + 4] == _PyFloat_Type) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$arg_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyFloat_Type);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[HEAP[$arg_addr] + 8];
      HEAP[$dx] = $13;
      var $14 = HEAP[$dx];
      var $15 = ___finite($14);
      
      if ($15 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $17 = HEAP[$dx];
      var $18 = _floor($17);
      
      
      if ($18 != HEAP[$dx]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $21 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($21, __str16);
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 5:
      var $22 = HEAP[$dx];
      var $23 = _PyLong_FromDouble($22);
      HEAP[$lx] = $23;
      
      
      if (HEAP[$lx] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 7:
      var $26 = HEAP[$lx];
      var $27 = _PyLong_AsLong($26);
      HEAP[$x] = $27;
      
      
      
      var $31 = HEAP[HEAP[$lx]] - 1;
      
      var $33 = HEAP[$lx];
      HEAP[$33] = $31;
      
      
      
      
      if (HEAP[HEAP[$lx]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $42 = HEAP[HEAP[HEAP[$lx] + 4] + 24];
      var $43 = HEAP[$lx];
      FUNCTION_TABLE[$42]($43);
      __label__ = 9;
      break;
     case 9:
      __label__ = 11;
      break;
     case 10:
      var $44 = HEAP[$arg_addr];
      var $45 = _PyInt_AsLong($44);
      HEAP[$x] = $45;
      __label__ = 11;
      break;
     case 11:
      
      var $47 = HEAP[$x] == -1;
      if ($47) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      var $48 = _PyErr_Occurred();
      
      if ($48 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 14:
      
      
      if (HEAP[$x] < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $52 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($52, __str17);
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 16:
      var $53 = _PyInt_FromLong(1);
      HEAP[$result] = $53;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 18:
      HEAP[$i] = 1;
      __label__ = 26;
      break;
     case 19:
      var $56 = HEAP[$i];
      var $57 = _PyInt_FromLong($56);
      HEAP[$iobj] = $57;
      
      
      if (HEAP[$iobj] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      var $60 = HEAP[$result];
      var $61 = HEAP[$iobj];
      var $62 = _PyNumber_Multiply($60, $61);
      HEAP[$newresult] = $62;
      
      
      
      var $66 = HEAP[HEAP[$iobj]] - 1;
      
      var $68 = HEAP[$iobj];
      HEAP[$68] = $66;
      
      
      
      
      if (HEAP[HEAP[$iobj]] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $77 = HEAP[HEAP[HEAP[$iobj] + 4] + 24];
      var $78 = HEAP[$iobj];
      FUNCTION_TABLE[$77]($78);
      __label__ = 22;
      break;
     case 22:
      
      
      if (HEAP[$newresult] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      var $84 = HEAP[HEAP[$result]] - 1;
      
      var $86 = HEAP[$result];
      HEAP[$86] = $84;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $95 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $96 = HEAP[$result];
      FUNCTION_TABLE[$95]($96);
      __label__ = 25;
      break;
     case 25:
      var $97 = HEAP[$newresult];
      HEAP[$result] = $97;
      
      var $99 = HEAP[$i] + 1;
      HEAP[$i] = $99;
      __label__ = 26;
      break;
     case 26:
      
      
      
      if (HEAP[$i] <= HEAP[$x]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      var $103 = HEAP[$result];
      HEAP[$0] = $103;
      __label__ = 31;
      break;
     case 28:
      
      
      
      var $107 = HEAP[HEAP[$result]] - 1;
      
      var $109 = HEAP[$result];
      HEAP[$109] = $107;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $118 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $119 = HEAP[$result];
      FUNCTION_TABLE[$118]($119);
      __label__ = 30;
      break;
     case 30:
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 31:
      var $120 = HEAP[$0];
      HEAP[$retval] = $120;
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
  function _math_trunc($self, $number) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $number_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $self;
      HEAP[$number_addr] = $number;
      var $1 = HEAP[$number_addr];
      var $2 = _PyObject_CallMethod($1, __str18, 0, allocate(1, "i32", ALLOC_STACK));
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
  function _math_frexp($self, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$arg_addr] = $arg;
      var $1 = HEAP[$arg_addr];
      var $2 = _PyFloat_AsDouble($1);
      HEAP[$x] = $2;
      
      var $4 = HEAP[$x] == -1;
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
      __label__ = 9;
      break;
     case 3:
      var $7 = HEAP[$x];
      var $8 = ___isnan($7);
      
      if ($8 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $10 = HEAP[$x];
      var $11 = ___isinf($10);
      
      if ($11 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      if (HEAP[$x] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$i] = 0;
      __label__ = 8;
      break;
     case 7:
      var $15 = HEAP[$x];
      var $16 = _frexp($15, $i);
      HEAP[$x] = $16;
      __label__ = 8;
      break;
     case 8:
      var $17 = HEAP[$i];
      var $18 = HEAP[$x];
      var $19 = _Py_BuildValue(__str19, allocate([ $18, 0, 0, 0, 0, 0, 0, 0, $17, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $19;
      __label__ = 9;
      break;
     case 9:
      var $20 = HEAP[$0];
      HEAP[$retval] = $20;
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
  function _math_ldexp($self, $args) {
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
      var $iftmp_79 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      var $r = __stackBase__ + 28;
      var $oexp = __stackBase__ + 36;
      var $exp = __stackBase__ + 40;
      var $overflow = __stackBase__ + 44;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str20, allocate([ $x, 0, 0, 0, $oexp, 0, 0, 0 ], [ "double*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$oexp] + 4] + 84] & 16777216) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$oexp] + 4] + 84] & 8388608) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 4:
      var $18 = HEAP[$oexp];
      var $19 = _PyLong_AsLongAndOverflow($18, $overflow);
      HEAP[$exp] = $19;
      
      var $21 = HEAP[$exp] == -1;
      if ($21) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      var $22 = _PyErr_Occurred();
      
      if ($22 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 7:
      
      
      if (HEAP[$overflow] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      if (HEAP[$overflow] < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$iftmp_79] = -2147483648;
      __label__ = 11;
      break;
     case 10:
      HEAP[$iftmp_79] = 2147483647;
      __label__ = 11;
      break;
     case 11:
      var $28 = HEAP[$iftmp_79];
      HEAP[$exp] = $28;
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$x] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $31 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($31, __str21);
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 14:
      var $32 = HEAP[$x];
      var $33 = ___finite($32);
      
      if ($33 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $35 = HEAP[$x];
      HEAP[$r] = $35;
      var $36 = ___errno_location();
      HEAP[$36] = 0;
      __label__ = 18;
      break;
     case 16:
      var $37 = ___errno_location();
      HEAP[$37] = 0;
      var $38 = HEAP[$x];
      var $39 = HEAP[$exp];
      var $40 = _ldexp($38, $39);
      HEAP[$r] = $40;
      var $41 = HEAP[$r];
      var $42 = ___isinf($41);
      
      if ($42 != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $44 = ___errno_location();
      HEAP[$44] = 34;
      __label__ = 18;
      break;
     case 18:
      var $45 = ___errno_location();
      
      
      if (HEAP[$45] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      var $48 = HEAP[$r];
      var $49 = _is_error($48);
      
      if ($49 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 21:
      var $51 = HEAP[$r];
      var $52 = _PyFloat_FromDouble($51);
      HEAP[$0] = $52;
      __label__ = 22;
      break;
     case 22:
      var $53 = HEAP[$0];
      HEAP[$retval] = $53;
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
  function _math_modf($self, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $y = __stackBase__ + 16;
      var $x = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      HEAP[$arg_addr] = $arg;
      var $1 = HEAP[$arg_addr];
      var $2 = _PyFloat_AsDouble($1);
      HEAP[$x] = $2;
      
      var $4 = HEAP[$x] == -1;
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
      __label__ = 9;
      break;
     case 3:
      var $7 = HEAP[$x];
      var $8 = ___finite($7);
      
      if ($8 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      var $10 = HEAP[$x];
      var $11 = ___isinf($10);
      
      if ($11 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $13 = HEAP[$x];
      var $14 = _copysign(0, $13);
      var $15 = HEAP[$x];
      var $16 = _Py_BuildValue(__str22, allocate([ $14, 0, 0, 0, 0, 0, 0, 0, $15, 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $16;
      __label__ = 9;
      break;
     case 6:
      var $17 = HEAP[$x];
      var $18 = ___isnan($17);
      
      if ($18 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $20 = HEAP[$x];
      var $21 = HEAP[$x];
      var $22 = _Py_BuildValue(__str22, allocate([ $20, 0, 0, 0, 0, 0, 0, 0, $21, 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $22;
      __label__ = 9;
      break;
     case 8:
      var $23 = ___errno_location();
      HEAP[$23] = 0;
      var $24 = HEAP[$x];
      var $25 = _modf($24, $y);
      HEAP[$x] = $25;
      var $26 = HEAP[$y];
      var $27 = HEAP[$x];
      var $28 = _Py_BuildValue(__str22, allocate([ $27, 0, 0, 0, 0, 0, 0, 0, $26, 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $28;
      __label__ = 9;
      break;
     case 9:
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
  function _loghelper($arg, $func, $funcname) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $arg_addr = __stackBase__;
      var $func_addr = __stackBase__ + 4;
      var $funcname_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      var $e = __stackBase__ + 28;
      
      HEAP[$arg_addr] = $arg;
      HEAP[$func_addr] = $func;
      HEAP[$funcname_addr] = $funcname;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$arg_addr] + 4] + 84] & 16777216) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      
      var $9 = HEAP[$arg_addr];
      var $10 = __PyLong_Frexp($9, $e);
      HEAP[$x] = $10;
      
      var $12 = HEAP[$x] == -1;
      if ($12) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      var $13 = _PyErr_Occurred();
      
      if ($13 != 0) {
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
      
      
      if (HEAP[$x] <= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $17 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($17, __str6);
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 6:
      
      
      if (HEAP[$e] == 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      if (HEAP[$x] == .5) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $22 = _PyFloat_FromDouble(0);
      HEAP[$0] = $22;
      __label__ = 11;
      break;
     case 9:
      var $23 = HEAP[$func_addr];
      var $24 = HEAP[$x];
      var $25 = FUNCTION_TABLE[$23]($24);
      var $26 = HEAP[$func_addr];
      var $27 = FUNCTION_TABLE[$26](2);
      
      
      
      var $31 = $25 + $27 * HEAP[$e];
      HEAP[$x] = $31;
      var $32 = HEAP[$x];
      var $33 = _PyFloat_FromDouble($32);
      HEAP[$0] = $33;
      __label__ = 11;
      break;
     case 10:
      var $34 = HEAP[$arg_addr];
      var $35 = HEAP[$func_addr];
      var $36 = _math_1($34, $35, 0);
      HEAP[$0] = $36;
      __label__ = 11;
      break;
     case 11:
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
  function _math_log($self, $args) {
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
      var $arg = __stackBase__ + 16;
      var $base = __stackBase__ + 20;
      var $num = __stackBase__ + 24;
      var $den = __stackBase__ + 28;
      var $ans = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$base] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str23, 1, 2, allocate([ $arg, 0, 0, 0, $base, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$arg];
      var $5 = _loghelper($4, FUNCTION_TABLE_OFFSET + 52, __str23);
      HEAP[$num] = $5;
      
      
      if (HEAP[$num] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$base] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $10 = HEAP[$num];
      HEAP[$0] = $10;
      __label__ = 14;
      break;
     case 5:
      var $11 = HEAP[$base];
      var $12 = _loghelper($11, FUNCTION_TABLE_OFFSET + 52, __str23);
      HEAP[$den] = $12;
      
      
      if (HEAP[$den] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $18 = HEAP[HEAP[$num]] - 1;
      
      var $20 = HEAP[$num];
      HEAP[$20] = $18;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $29 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $30 = HEAP[$num];
      FUNCTION_TABLE[$29]($30);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 9:
      var $31 = HEAP[$num];
      var $32 = HEAP[$den];
      var $33 = _PyNumber_Divide($31, $32);
      HEAP[$ans] = $33;
      
      
      
      var $37 = HEAP[HEAP[$num]] - 1;
      
      var $39 = HEAP[$num];
      HEAP[$39] = $37;
      
      
      
      
      if (HEAP[HEAP[$num]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $48 = HEAP[HEAP[HEAP[$num] + 4] + 24];
      var $49 = HEAP[$num];
      FUNCTION_TABLE[$48]($49);
      __label__ = 11;
      break;
     case 11:
      
      
      
      var $53 = HEAP[HEAP[$den]] - 1;
      
      var $55 = HEAP[$den];
      HEAP[$55] = $53;
      
      
      
      
      if (HEAP[HEAP[$den]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $64 = HEAP[HEAP[HEAP[$den] + 4] + 24];
      var $65 = HEAP[$den];
      FUNCTION_TABLE[$64]($65);
      __label__ = 13;
      break;
     case 13:
      var $66 = HEAP[$ans];
      HEAP[$0] = $66;
      __label__ = 14;
      break;
     case 14:
      var $67 = HEAP[$0];
      HEAP[$retval] = $67;
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
  function _math_log10($self, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $self;
      HEAP[$arg_addr] = $arg;
      var $1 = HEAP[$arg_addr];
      var $2 = _loghelper($1, FUNCTION_TABLE_OFFSET + 54, __str24);
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
  function _math_fmod($self, $args) {
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
      var $ox = __stackBase__ + 16;
      var $oy = __stackBase__ + 20;
      var $r = __stackBase__ + 24;
      var $x = __stackBase__ + 32;
      var $y = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str25, 2, 2, allocate([ $ox, 0, 0, 0, $oy, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$ox];
      var $5 = _PyFloat_AsDouble($4);
      HEAP[$x] = $5;
      var $6 = HEAP[$oy];
      var $7 = _PyFloat_AsDouble($6);
      HEAP[$y] = $7;
      
      var $9 = HEAP[$x] == -1;
      if ($9) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $11 = HEAP[$y] == -1;
      if ($11) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $12 = _PyErr_Occurred();
      
      if ($12 != 0) {
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
      var $14 = HEAP[$y];
      var $15 = ___isinf($14);
      
      if ($15 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $17 = HEAP[$x];
      var $18 = ___finite($17);
      
      if ($18 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $20 = HEAP[$x];
      var $21 = _PyFloat_FromDouble($20);
      HEAP[$0] = $21;
      __label__ = 18;
      break;
     case 9:
      var $22 = ___errno_location();
      HEAP[$22] = 0;
      var $23 = HEAP[$x];
      var $24 = HEAP[$y];
      var $25 = _fmod($23, $24);
      HEAP[$r] = $25;
      var $26 = HEAP[$r];
      var $27 = ___isnan($26);
      
      if ($27 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      var $29 = HEAP[$x];
      var $30 = ___isnan($29);
      
      if ($30 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $32 = HEAP[$y];
      var $33 = ___isnan($32);
      
      if ($33 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $35 = ___errno_location();
      HEAP[$35] = 33;
      __label__ = 14;
      break;
     case 13:
      var $36 = ___errno_location();
      HEAP[$36] = 0;
      __label__ = 14;
      break;
     case 14:
      var $37 = ___errno_location();
      
      
      if (HEAP[$37] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $40 = HEAP[$r];
      var $41 = _is_error($40);
      
      if ($41 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 17:
      var $43 = HEAP[$r];
      var $44 = _PyFloat_FromDouble($43);
      HEAP[$0] = $44;
      __label__ = 18;
      break;
     case 18:
      var $45 = HEAP[$0];
      HEAP[$retval] = $45;
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
  function _math_hypot($self, $args) {
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
      var $ox = __stackBase__ + 16;
      var $oy = __stackBase__ + 20;
      var $r = __stackBase__ + 24;
      var $x = __stackBase__ + 32;
      var $y = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str26, 2, 2, allocate([ $ox, 0, 0, 0, $oy, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$ox];
      var $5 = _PyFloat_AsDouble($4);
      HEAP[$x] = $5;
      var $6 = HEAP[$oy];
      var $7 = _PyFloat_AsDouble($6);
      HEAP[$y] = $7;
      
      var $9 = HEAP[$x] == -1;
      if ($9) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $11 = HEAP[$y] == -1;
      if ($11) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $12 = _PyErr_Occurred();
      
      if ($12 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 6:
      var $14 = HEAP[$x];
      var $15 = ___isinf($14);
      
      if ($15 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $17 = HEAP[$x];
      var $18 = _fabs($17);
      var $19 = _PyFloat_FromDouble($18);
      HEAP[$0] = $19;
      __label__ = 25;
      break;
     case 8:
      var $20 = HEAP[$y];
      var $21 = ___isinf($20);
      
      if ($21 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $23 = HEAP[$y];
      var $24 = _fabs($23);
      var $25 = _PyFloat_FromDouble($24);
      HEAP[$0] = $25;
      __label__ = 25;
      break;
     case 10:
      var $26 = ___errno_location();
      HEAP[$26] = 0;
      var $27 = HEAP[$x];
      var $28 = HEAP[$y];
      var $29 = _hypot($27, $28);
      HEAP[$r] = $29;
      var $30 = HEAP[$r];
      var $31 = ___isnan($30);
      
      if ($31 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 11:
      var $33 = HEAP[$x];
      var $34 = ___isnan($33);
      
      if ($34 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $36 = HEAP[$y];
      var $37 = ___isnan($36);
      
      if ($37 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $39 = ___errno_location();
      HEAP[$39] = 33;
      __label__ = 15;
      break;
     case 14:
      var $40 = ___errno_location();
      HEAP[$40] = 0;
      __label__ = 15;
      break;
     case 15:
      __label__ = 21;
      break;
     case 16:
      var $41 = HEAP[$r];
      var $42 = ___isinf($41);
      
      if ($42 != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 17:
      var $44 = HEAP[$x];
      var $45 = ___finite($44);
      
      if ($45 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      var $47 = HEAP[$y];
      var $48 = ___finite($47);
      
      if ($48 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      var $50 = ___errno_location();
      HEAP[$50] = 34;
      __label__ = 21;
      break;
     case 20:
      var $51 = ___errno_location();
      HEAP[$51] = 0;
      __label__ = 21;
      break;
     case 21:
      var $52 = ___errno_location();
      
      
      if (HEAP[$52] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      var $55 = HEAP[$r];
      var $56 = _is_error($55);
      
      if ($56 == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 24:
      var $58 = HEAP[$r];
      var $59 = _PyFloat_FromDouble($58);
      HEAP[$0] = $59;
      __label__ = 25;
      break;
     case 25:
      var $60 = HEAP[$0];
      HEAP[$retval] = $60;
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
  function _math_pow($self, $args) {
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
      var $iftmp_105 = __stackBase__ + 12;
      var $iftmp_104 = __stackBase__ + 20;
      var $iftmp_103 = __stackBase__ + 28;
      var $iftmp_102 = __stackBase__ + 32;
      var $iftmp_101 = __stackBase__ + 40;
      var $0 = __stackBase__ + 48;
      var $ox = __stackBase__ + 52;
      var $oy = __stackBase__ + 56;
      var $r = __stackBase__ + 60;
      var $x = __stackBase__ + 68;
      var $y = __stackBase__ + 76;
      var $odd_y = __stackBase__ + 84;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str27, 2, 2, allocate([ $ox, 0, 0, 0, $oy, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 59;
      break;
     case 2:
      var $4 = HEAP[$ox];
      var $5 = _PyFloat_AsDouble($4);
      HEAP[$x] = $5;
      var $6 = HEAP[$oy];
      var $7 = _PyFloat_AsDouble($6);
      HEAP[$y] = $7;
      
      var $9 = HEAP[$x] == -1;
      if ($9) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $11 = HEAP[$y] == -1;
      if ($11) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $12 = _PyErr_Occurred();
      
      if ($12 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 59;
      break;
     case 6:
      HEAP[$r] = 0;
      var $14 = HEAP[$x];
      var $15 = ___finite($14);
      
      if ($15 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $17 = HEAP[$y];
      var $18 = ___finite($17);
      
      if ($18 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 8:
      var $20 = ___errno_location();
      HEAP[$20] = 0;
      var $21 = HEAP[$x];
      var $22 = ___isnan($21);
      
      if ($22 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      
      if (HEAP[$y] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $26 = HEAP[$x];
      HEAP[$iftmp_101] = $26;
      __label__ = 12;
      break;
     case 11:
      HEAP[$iftmp_101] = 1;
      __label__ = 12;
      break;
     case 12:
      var $27 = HEAP[$iftmp_101];
      HEAP[$r] = $27;
      __label__ = 47;
      break;
     case 13:
      var $28 = HEAP[$y];
      var $29 = ___isnan($28);
      
      if ($29 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      
      
      if (HEAP[$x] != 1) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $33 = HEAP[$y];
      HEAP[$iftmp_102] = $33;
      __label__ = 17;
      break;
     case 16:
      HEAP[$iftmp_102] = 1;
      __label__ = 17;
      break;
     case 17:
      var $34 = HEAP[$iftmp_102];
      HEAP[$r] = $34;
      __label__ = 47;
      break;
     case 18:
      var $35 = HEAP[$x];
      var $36 = ___isinf($35);
      
      if ($36 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 19:
      var $38 = HEAP[$y];
      var $39 = ___finite($38);
      
      if ($39 == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      var $41 = HEAP[$y];
      var $42 = _fabs($41);
      var $43 = _fmod($42, 2);
      
      if ($43 != 1) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      HEAP[$iftmp_103] = 1;
      __label__ = 23;
      break;
     case 22:
      HEAP[$iftmp_103] = 0;
      __label__ = 23;
      break;
     case 23:
      var $45 = HEAP[$iftmp_103];
      HEAP[$odd_y] = $45;
      
      
      if (HEAP[$y] > 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 24:
      
      
      if (HEAP[$odd_y] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $50 = HEAP[$x];
      var $51 = _fabs($50);
      HEAP[$iftmp_104] = $51;
      __label__ = 27;
      break;
     case 26:
      var $52 = HEAP[$x];
      HEAP[$iftmp_104] = $52;
      __label__ = 27;
      break;
     case 27:
      var $53 = HEAP[$iftmp_104];
      HEAP[$r] = $53;
      __label__ = 34;
      break;
     case 28:
      
      
      if (HEAP[$y] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      HEAP[$r] = 1;
      __label__ = 34;
      break;
     case 30:
      
      
      if (HEAP[$odd_y] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      var $58 = HEAP[$x];
      var $59 = _copysign(0, $58);
      HEAP[$iftmp_105] = $59;
      __label__ = 33;
      break;
     case 32:
      HEAP[$iftmp_105] = 0;
      __label__ = 33;
      break;
     case 33:
      var $60 = HEAP[$iftmp_105];
      HEAP[$r] = $60;
      __label__ = 34;
      break;
     case 34:
      __label__ = 47;
      break;
     case 35:
      var $61 = HEAP[$y];
      var $62 = ___isinf($61);
      
      if ($62 != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 36:
      var $64 = HEAP[$x];
      var $65 = _fabs($64);
      
      if ($65 == 1) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      HEAP[$r] = 1;
      __label__ = 47;
      break;
     case 38:
      
      
      if (HEAP[$y] <= 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      var $69 = HEAP[$x];
      var $70 = _fabs($69);
      
      if ($70 <= 1) {
        __label__ = 41;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      var $72 = HEAP[$y];
      HEAP[$r] = $72;
      __label__ = 47;
      break;
     case 41:
      
      
      if (HEAP[$y] >= 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      var $75 = HEAP[$x];
      var $76 = _fabs($75);
      
      if ($76 >= 1) {
        __label__ = 46;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      
      var $79 = 0 - HEAP[$y];
      HEAP[$r] = $79;
      
      
      if (HEAP[$x] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      var $82 = ___errno_location();
      HEAP[$82] = 33;
      __label__ = 45;
      break;
     case 45:
      __label__ = 47;
      break;
     case 46:
      HEAP[$r] = 0;
      __label__ = 47;
      break;
     case 47:
      __label__ = 55;
      break;
     case 48:
      var $83 = ___errno_location();
      HEAP[$83] = 0;
      var $84 = HEAP[$x];
      var $85 = HEAP[$y];
      var $86 = _llvm_pow_f64($84, $85);
      HEAP[$r] = $86;
      var $87 = HEAP[$r];
      var $88 = ___finite($87);
      
      if ($88 == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 49:
      var $90 = HEAP[$r];
      var $91 = ___isnan($90);
      
      if ($91 != 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      var $93 = ___errno_location();
      HEAP[$93] = 33;
      __label__ = 55;
      break;
     case 51:
      var $94 = HEAP[$r];
      var $95 = ___isinf($94);
      
      if ($95 != 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 52:
      
      
      if (HEAP[$x] == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      var $99 = ___errno_location();
      HEAP[$99] = 33;
      __label__ = 55;
      break;
     case 54:
      var $100 = ___errno_location();
      HEAP[$100] = 34;
      __label__ = 55;
      break;
     case 55:
      var $101 = ___errno_location();
      
      
      if (HEAP[$101] == 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 56:
      var $104 = HEAP[$r];
      var $105 = _is_error($104);
      
      if ($105 == 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 57:
      HEAP[$0] = 0;
      __label__ = 59;
      break;
     case 58:
      var $107 = HEAP[$r];
      var $108 = _PyFloat_FromDouble($107);
      HEAP[$0] = $108;
      __label__ = 59;
      break;
     case 59:
      var $109 = HEAP[$0];
      HEAP[$retval] = $109;
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
  function _math_degrees($self, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$arg_addr] = $arg;
      var $1 = HEAP[$arg_addr];
      var $2 = _PyFloat_AsDouble($1);
      HEAP[$x] = $2;
      
      var $4 = HEAP[$x] == -1;
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
      __label__ = 4;
      break;
     case 3:
      
      
      var $9 = HEAP[$x] * HEAP[_radToDeg];
      var $10 = _PyFloat_FromDouble($9);
      HEAP[$0] = $10;
      __label__ = 4;
      break;
     case 4:
      var $11 = HEAP[$0];
      HEAP[$retval] = $11;
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
  function _math_radians($self, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$arg_addr] = $arg;
      var $1 = HEAP[$arg_addr];
      var $2 = _PyFloat_AsDouble($1);
      HEAP[$x] = $2;
      
      var $4 = HEAP[$x] == -1;
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
      __label__ = 4;
      break;
     case 3:
      
      
      var $9 = HEAP[$x] * HEAP[_degToRad];
      var $10 = _PyFloat_FromDouble($9);
      HEAP[$0] = $10;
      __label__ = 4;
      break;
     case 4:
      var $11 = HEAP[$0];
      HEAP[$retval] = $11;
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
  function _math_isnan($self, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$arg_addr] = $arg;
      var $1 = HEAP[$arg_addr];
      var $2 = _PyFloat_AsDouble($1);
      HEAP[$x] = $2;
      
      var $4 = HEAP[$x] == -1;
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
      __label__ = 4;
      break;
     case 3:
      var $7 = HEAP[$x];
      var $8 = ___isnan($7);
      var $9 = _PyBool_FromLong($8);
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
  function _math_isinf($self, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$arg_addr] = $arg;
      var $1 = HEAP[$arg_addr];
      var $2 = _PyFloat_AsDouble($1);
      HEAP[$x] = $2;
      
      var $4 = HEAP[$x] == -1;
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
      __label__ = 4;
      break;
     case 3:
      var $7 = HEAP[$x];
      var $8 = ___isinf($7);
      var $9 = _PyBool_FromLong($8);
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
  function _initmath() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      
      var $0 = _Py_InitModule4(__str61, _math_methods, _module_doc, 0, 1013);
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
      var $5 = _PyModule_AddObject($4, __str62, $3);
      var $6 = _PyFloat_FromDouble(2.718281828459045);
      var $7 = HEAP[$m];
      var $8 = _PyModule_AddObject($7, __str63, $6);
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
  Module["_initmath"] = _initmath;
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
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _acos, 0, _acosh, 0, _asin, 0, _asinh, 0, _atan, 0, _m_atan2, 0, _atanh, 0, _ceil, 0, _copysign, 0, _cos, 0, _cosh, 0, _m_erf, 0, _m_erfc, 0, _exp, 0, _expm1, 0, _fabs, 0, _floor, 0, _m_tgamma, 0, _m_lgamma, 0, _log1p, 0, _sin, 0, _sinh, 0, _sqrt, 0, _tan, 0, _tanh, 0, _m_log, 0, _m_log10, 0, _math_acos, 0, _math_acosh, 0, _math_asin, 0, _math_asinh, 0, _math_atan, 0, _math_atan2, 0, _math_atanh, 0, _math_ceil, 0, _math_copysign, 0, _math_cos, 0, _math_cosh, 0, _math_degrees, 0, _math_erf, 0, _math_erfc, 0, _math_exp, 0, _math_expm1, 0, _math_fabs, 0, _math_factorial, 0, _math_floor, 0, _math_fmod, 0, _math_frexp, 0, _math_fsum, 0, _math_gamma, 0, _math_hypot, 0, _math_isinf, 0, _math_isnan, 0, _math_ldexp, 0, _math_lgamma, 0, _math_log, 0, _math_log1p, 0, _math_log10, 0, _math_modf, 0, _math_pow, 0, _math_radians, 0, _math_sin, 0, _math_sinh, 0, _math_sqrt, 0, _math_tan, 0, _math_tanh, 0, _math_trunc, 0 ]);
  function run(args) {
    _pi = allocate([ 3.141592653589793 ], [ "double", 0, 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    _sqrtpi = allocate([ 1.772453850905516 ], [ "double", 0, 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str = allocate([ 40, 115, 105, 122, 101, 111, 102, 32, 40, 120, 41, 32, 61, 61, 32, 115, 105, 122, 101, 111, 102, 32, 40, 102, 108, 111, 97, 116, 41, 32, 63, 32, 95, 95, 102, 105, 110, 105, 116, 101, 102, 32, 40, 120, 41, 32, 58, 32, 115, 105, 122, 101, 111, 102, 32, 40, 120, 41, 32, 61, 61, 32, 115, 105, 122, 101, 111, 102, 32, 40, 100, 111, 117, 98, 108, 101, 41, 32, 63, 32, 95, 95, 102, 105, 110, 105, 116, 101, 32, 40, 120, 41, 32, 58, 32, 95, 95, 102, 105, 110, 105, 116, 101, 108, 32, 40, 120, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 109, 97, 116, 104, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8271 = allocate([ 115, 105, 110, 112, 105, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 48, 32, 60, 61, 32, 110, 32, 38, 38, 32, 110, 32, 60, 61, 32, 52, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 48, 0 ], "i8", ALLOC_NORMAL);
    _lanczos_g = allocate([ 6.02468004077673 ], [ "double", 0, 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    _lanczos_g_minus_half = allocate([ 5.52468004077673 ], [ "double", 0, 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    _lanczos_num_coeffs = allocate([ 23531376880.41076, 0, 0, 0, 0, 0, 0, 0, 42919803642.6491, 0, 0, 0, 0, 0, 0, 0, 35711959237.35567, 0, 0, 0, 0, 0, 0, 0, 17921034426.03721, 0, 0, 0, 0, 0, 0, 0, 6039542586.352028, 0, 0, 0, 0, 0, 0, 0, 1439720407.3117216, 0, 0, 0, 0, 0, 0, 0, 248874557.86205417, 0, 0, 0, 0, 0, 0, 0, 31426415.585400194, 0, 0, 0, 0, 0, 0, 0, 2876370.6289353725, 0, 0, 0, 0, 0, 0, 0, 186056.26539522348, 0, 0, 0, 0, 0, 0, 0, 8071.672002365816, 0, 0, 0, 0, 0, 0, 0, 210.82427775157936, 0, 0, 0, 0, 0, 0, 0, 2.5066282746310002, 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    _lanczos_den_coeffs = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 39916800, 0, 0, 0, 0, 0, 0, 0, 120543840, 0, 0, 0, 0, 0, 0, 0, 150917976, 0, 0, 0, 0, 0, 0, 0, 105258076, 0, 0, 0, 0, 0, 0, 0, 45995730, 0, 0, 0, 0, 0, 0, 0, 13339535, 0, 0, 0, 0, 0, 0, 0, 2637558, 0, 0, 0, 0, 0, 0, 0, 357423, 0, 0, 0, 0, 0, 0, 0, 32670, 0, 0, 0, 0, 0, 0, 0, 1925, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    _gamma_integral = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 120, 0, 0, 0, 0, 0, 0, 0, 720, 0, 0, 0, 0, 0, 0, 0, 5040, 0, 0, 0, 0, 0, 0, 0, 40320, 0, 0, 0, 0, 0, 0, 0, 362880, 0, 0, 0, 0, 0, 0, 0, 3628800, 0, 0, 0, 0, 0, 0, 0, 39916800, 0, 0, 0, 0, 0, 0, 0, 479001600, 0, 0, 0, 0, 0, 0, 0, 6227020800, 0, 0, 0, 0, 0, 0, 0, 87178291200, 0, 0, 0, 0, 0, 0, 0, 1307674368e3, 0, 0, 0, 0, 0, 0, 0, 20922789888e3, 0, 0, 0, 0, 0, 0, 0, 355687428096e3, 0, 0, 0, 0, 0, 0, 0, 6402373705728e3, 0, 0, 0, 0, 0, 0, 0, 0x1b02b9306890000, 0, 0, 0, 0, 0, 0, 0, 243290200817664e4, 0, 0, 0, 0, 0, 0, 0, 5109094217170944e4, 0, 0, 0, 0, 0, 0, 0, 0x3ceea4c2b3e0d80000, 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str4 = allocate([ 120, 32, 62, 32, 48, 46, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8317 = allocate([ 108, 97, 110, 99, 122, 111, 115, 95, 115, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 40, 42, 95, 95, 101, 114, 114, 110, 111, 95, 108, 111, 99, 97, 116, 105, 111, 110, 32, 40, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8654 = allocate([ 105, 115, 95, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 109, 97, 116, 104, 32, 100, 111, 109, 97, 105, 110, 32, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 109, 97, 116, 104, 32, 114, 97, 110, 103, 101, 32, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _math_acos_doc = allocate([ 97, 99, 111, 115, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 114, 99, 32, 99, 111, 115, 105, 110, 101, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_acosh_doc = allocate([ 97, 99, 111, 115, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 97, 114, 99, 32, 99, 111, 115, 105, 110, 101, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_asin_doc = allocate([ 97, 115, 105, 110, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 114, 99, 32, 115, 105, 110, 101, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_asinh_doc = allocate([ 97, 115, 105, 110, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 97, 114, 99, 32, 115, 105, 110, 101, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_atan_doc = allocate([ 97, 116, 97, 110, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 114, 99, 32, 116, 97, 110, 103, 101, 110, 116, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 97, 116, 97, 110, 50, 0 ], "i8", ALLOC_NORMAL);
    _math_atan2_doc = allocate([ 97, 116, 97, 110, 50, 40, 121, 44, 32, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 114, 99, 32, 116, 97, 110, 103, 101, 110, 116, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 32, 111, 102, 32, 121, 47, 120, 46, 10, 85, 110, 108, 105, 107, 101, 32, 97, 116, 97, 110, 40, 121, 47, 120, 41, 44, 32, 116, 104, 101, 32, 115, 105, 103, 110, 115, 32, 111, 102, 32, 98, 111, 116, 104, 32, 120, 32, 97, 110, 100, 32, 121, 32, 97, 114, 101, 32, 99, 111, 110, 115, 105, 100, 101, 114, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_atanh_doc = allocate([ 97, 116, 97, 110, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 97, 114, 99, 32, 116, 97, 110, 103, 101, 110, 116, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_ceil_doc = allocate([ 99, 101, 105, 108, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 99, 101, 105, 108, 105, 110, 103, 32, 111, 102, 32, 120, 32, 97, 115, 32, 97, 32, 102, 108, 111, 97, 116, 46, 10, 84, 104, 105, 115, 32, 105, 115, 32, 116, 104, 101, 32, 115, 109, 97, 108, 108, 101, 115, 116, 32, 105, 110, 116, 101, 103, 114, 97, 108, 32, 118, 97, 108, 117, 101, 32, 62, 61, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 99, 111, 112, 121, 115, 105, 103, 110, 0 ], "i8", ALLOC_NORMAL);
    _math_copysign_doc = allocate([ 99, 111, 112, 121, 115, 105, 103, 110, 40, 120, 44, 32, 121, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 120, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 115, 105, 103, 110, 32, 111, 102, 32, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_cos_doc = allocate([ 99, 111, 115, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 99, 111, 115, 105, 110, 101, 32, 111, 102, 32, 120, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_cosh_doc = allocate([ 99, 111, 115, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 99, 111, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_erf_doc = allocate([ 101, 114, 102, 40, 120, 41, 10, 10, 69, 114, 114, 111, 114, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97, 116, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_erfc_doc = allocate([ 101, 114, 102, 99, 40, 120, 41, 10, 10, 67, 111, 109, 112, 108, 101, 109, 101, 110, 116, 97, 114, 121, 32, 101, 114, 114, 111, 114, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97, 116, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_exp_doc = allocate([ 101, 120, 112, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 101, 32, 114, 97, 105, 115, 101, 100, 32, 116, 111, 32, 116, 104, 101, 32, 112, 111, 119, 101, 114, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_expm1_doc = allocate([ 101, 120, 112, 109, 49, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 101, 120, 112, 40, 120, 41, 45, 49, 46, 10, 84, 104, 105, 115, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97, 118, 111, 105, 100, 115, 32, 116, 104, 101, 32, 108, 111, 115, 115, 32, 111, 102, 32, 112, 114, 101, 99, 105, 115, 105, 111, 110, 32, 105, 110, 118, 111, 108, 118, 101, 100, 32, 105, 110, 32, 116, 104, 101, 32, 100, 105, 114, 101, 99, 116, 32, 101, 118, 97, 108, 117, 97, 116, 105, 111, 110, 32, 111, 102, 32, 101, 120, 112, 40, 120, 41, 45, 49, 32, 102, 111, 114, 32, 115, 109, 97, 108, 108, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_fabs_doc = allocate([ 102, 97, 98, 115, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 98, 115, 111, 108, 117, 116, 101, 32, 118, 97, 108, 117, 101, 32, 111, 102, 32, 116, 104, 101, 32, 102, 108, 111, 97, 116, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_floor_doc = allocate([ 102, 108, 111, 111, 114, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 102, 108, 111, 111, 114, 32, 111, 102, 32, 120, 32, 97, 115, 32, 97, 32, 102, 108, 111, 97, 116, 46, 10, 84, 104, 105, 115, 32, 105, 115, 32, 116, 104, 101, 32, 108, 97, 114, 103, 101, 115, 116, 32, 105, 110, 116, 101, 103, 114, 97, 108, 32, 118, 97, 108, 117, 101, 32, 60, 61, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_gamma_doc = allocate([ 103, 97, 109, 109, 97, 40, 120, 41, 10, 10, 71, 97, 109, 109, 97, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97, 116, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_lgamma_doc = allocate([ 108, 103, 97, 109, 109, 97, 40, 120, 41, 10, 10, 78, 97, 116, 117, 114, 97, 108, 32, 108, 111, 103, 97, 114, 105, 116, 104, 109, 32, 111, 102, 32, 97, 98, 115, 111, 108, 117, 116, 101, 32, 118, 97, 108, 117, 101, 32, 111, 102, 32, 71, 97, 109, 109, 97, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97, 116, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_log1p_doc = allocate([ 108, 111, 103, 49, 112, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 110, 97, 116, 117, 114, 97, 108, 32, 108, 111, 103, 97, 114, 105, 116, 104, 109, 32, 111, 102, 32, 49, 43, 120, 32, 40, 98, 97, 115, 101, 32, 101, 41, 46, 10, 84, 104, 101, 32, 114, 101, 115, 117, 108, 116, 32, 105, 115, 32, 99, 111, 109, 112, 117, 116, 101, 100, 32, 105, 110, 32, 97, 32, 119, 97, 121, 32, 119, 104, 105, 99, 104, 32, 105, 115, 32, 97, 99, 99, 117, 114, 97, 116, 101, 32, 102, 111, 114, 32, 120, 32, 110, 101, 97, 114, 32, 122, 101, 114, 111, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_sin_doc = allocate([ 115, 105, 110, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 115, 105, 110, 101, 32, 111, 102, 32, 120, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_sinh_doc = allocate([ 115, 105, 110, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_sqrt_doc = allocate([ 115, 113, 114, 116, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 115, 113, 117, 97, 114, 101, 32, 114, 111, 111, 116, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_tan_doc = allocate([ 116, 97, 110, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 116, 97, 110, 103, 101, 110, 116, 32, 111, 102, 32, 120, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_tanh_doc = allocate([ 116, 97, 110, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 116, 97, 110, 103, 101, 110, 116, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 109, 97, 116, 104, 46, 102, 115, 117, 109, 32, 112, 97, 114, 116, 105, 97, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 48, 32, 60, 61, 32, 110, 32, 38, 38, 32, 110, 32, 60, 61, 32, 109, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9069 = allocate([ 109, 97, 116, 104, 95, 102, 115, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 40, 109, 32, 61, 61, 32, 51, 50, 32, 38, 38, 32, 112, 32, 61, 61, 32, 112, 115, 41, 32, 124, 124, 32, 40, 109, 32, 62, 32, 51, 50, 32, 38, 38, 32, 112, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 105, 110, 116, 101, 114, 109, 101, 100, 105, 97, 116, 101, 32, 111, 118, 101, 114, 102, 108, 111, 119, 32, 105, 110, 32, 102, 115, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 45, 105, 110, 102, 32, 43, 32, 105, 110, 102, 32, 105, 110, 32, 102, 115, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 102, 97, 98, 115, 40, 121, 41, 32, 60, 32, 102, 97, 98, 115, 40, 120, 41, 0 ], "i8", ALLOC_NORMAL);
    _math_fsum_doc = allocate([ 102, 115, 117, 109, 40, 105, 116, 101, 114, 97, 98, 108, 101, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 110, 32, 97, 99, 99, 117, 114, 97, 116, 101, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 115, 117, 109, 32, 111, 102, 32, 118, 97, 108, 117, 101, 115, 32, 105, 110, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 46, 10, 65, 115, 115, 117, 109, 101, 115, 32, 73, 69, 69, 69, 45, 55, 53, 52, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 97, 114, 105, 116, 104, 109, 101, 116, 105, 99, 46, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 102, 97, 99, 116, 111, 114, 105, 97, 108, 40, 41, 32, 111, 110, 108, 121, 32, 97, 99, 99, 101, 112, 116, 115, 32, 105, 110, 116, 101, 103, 114, 97, 108, 32, 118, 97, 108, 117, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 102, 97, 99, 116, 111, 114, 105, 97, 108, 40, 41, 32, 110, 111, 116, 32, 100, 101, 102, 105, 110, 101, 100, 32, 102, 111, 114, 32, 110, 101, 103, 97, 116, 105, 118, 101, 32, 118, 97, 108, 117, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _math_factorial_doc = allocate([ 102, 97, 99, 116, 111, 114, 105, 97, 108, 40, 120, 41, 32, 45, 62, 32, 73, 110, 116, 101, 103, 114, 97, 108, 10, 10, 70, 105, 110, 100, 32, 120, 33, 46, 32, 82, 97, 105, 115, 101, 32, 97, 32, 86, 97, 108, 117, 101, 69, 114, 114, 111, 114, 32, 105, 102, 32, 120, 32, 105, 115, 32, 110, 101, 103, 97, 116, 105, 118, 101, 32, 111, 114, 32, 110, 111, 110, 45, 105, 110, 116, 101, 103, 114, 97, 108, 46, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 95, 95, 116, 114, 117, 110, 99, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _math_trunc_doc = allocate([ 116, 114, 117, 110, 99, 40, 120, 58, 82, 101, 97, 108, 41, 32, 45, 62, 32, 73, 110, 116, 101, 103, 114, 97, 108, 10, 10, 84, 114, 117, 110, 99, 97, 116, 101, 115, 32, 120, 32, 116, 111, 32, 116, 104, 101, 32, 110, 101, 97, 114, 101, 115, 116, 32, 73, 110, 116, 101, 103, 114, 97, 108, 32, 116, 111, 119, 97, 114, 100, 32, 48, 46, 32, 85, 115, 101, 115, 32, 116, 104, 101, 32, 95, 95, 116, 114, 117, 110, 99, 95, 95, 32, 109, 97, 103, 105, 99, 32, 109, 101, 116, 104, 111, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 40, 100, 105, 41, 0 ], "i8", ALLOC_NORMAL);
    _math_frexp_doc = allocate([ 102, 114, 101, 120, 112, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 109, 97, 110, 116, 105, 115, 115, 97, 32, 97, 110, 100, 32, 101, 120, 112, 111, 110, 101, 110, 116, 32, 111, 102, 32, 120, 44, 32, 97, 115, 32, 112, 97, 105, 114, 32, 40, 109, 44, 32, 101, 41, 46, 10, 109, 32, 105, 115, 32, 97, 32, 102, 108, 111, 97, 116, 32, 97, 110, 100, 32, 101, 32, 105, 115, 32, 97, 110, 32, 105, 110, 116, 44, 32, 115, 117, 99, 104, 32, 116, 104, 97, 116, 32, 120, 32, 61, 32, 109, 32, 42, 32, 50, 46, 42, 42, 101, 46, 10, 73, 102, 32, 120, 32, 105, 115, 32, 48, 44, 32, 109, 32, 97, 110, 100, 32, 101, 32, 97, 114, 101, 32, 98, 111, 116, 104, 32, 48, 46, 32, 32, 69, 108, 115, 101, 32, 48, 46, 53, 32, 60, 61, 32, 97, 98, 115, 40, 109, 41, 32, 60, 32, 49, 46, 48, 46, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 100, 79, 58, 108, 100, 101, 120, 112, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 69, 120, 112, 101, 99, 116, 101, 100, 32, 97, 110, 32, 105, 110, 116, 32, 111, 114, 32, 108, 111, 110, 103, 32, 97, 115, 32, 115, 101, 99, 111, 110, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 116, 111, 32, 108, 100, 101, 120, 112, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_ldexp_doc = allocate([ 108, 100, 101, 120, 112, 40, 120, 44, 32, 105, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 120, 32, 42, 32, 40, 50, 42, 42, 105, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 40, 100, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    _math_modf_doc = allocate([ 109, 111, 100, 102, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 102, 114, 97, 99, 116, 105, 111, 110, 97, 108, 32, 97, 110, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 112, 97, 114, 116, 115, 32, 111, 102, 32, 120, 46, 32, 32, 66, 111, 116, 104, 32, 114, 101, 115, 117, 108, 116, 115, 32, 99, 97, 114, 114, 121, 32, 116, 104, 101, 32, 115, 105, 103, 110, 10, 111, 102, 32, 120, 32, 97, 110, 100, 32, 97, 114, 101, 32, 102, 108, 111, 97, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 108, 111, 103, 0 ], "i8", ALLOC_NORMAL);
    _math_log_doc = allocate([ 108, 111, 103, 40, 120, 91, 44, 32, 98, 97, 115, 101, 93, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 108, 111, 103, 97, 114, 105, 116, 104, 109, 32, 111, 102, 32, 120, 32, 116, 111, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 98, 97, 115, 101, 46, 10, 73, 102, 32, 116, 104, 101, 32, 98, 97, 115, 101, 32, 110, 111, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 44, 32, 114, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 110, 97, 116, 117, 114, 97, 108, 32, 108, 111, 103, 97, 114, 105, 116, 104, 109, 32, 40, 98, 97, 115, 101, 32, 101, 41, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 108, 111, 103, 49, 48, 0 ], "i8", ALLOC_NORMAL);
    _math_log10_doc = allocate([ 108, 111, 103, 49, 48, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 98, 97, 115, 101, 32, 49, 48, 32, 108, 111, 103, 97, 114, 105, 116, 104, 109, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 102, 109, 111, 100, 0 ], "i8", ALLOC_NORMAL);
    _math_fmod_doc = allocate([ 102, 109, 111, 100, 40, 120, 44, 32, 121, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 102, 109, 111, 100, 40, 120, 44, 32, 121, 41, 44, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 112, 108, 97, 116, 102, 111, 114, 109, 32, 67, 46, 32, 32, 120, 32, 37, 32, 121, 32, 109, 97, 121, 32, 100, 105, 102, 102, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 104, 121, 112, 111, 116, 0 ], "i8", ALLOC_NORMAL);
    _math_hypot_doc = allocate([ 104, 121, 112, 111, 116, 40, 120, 44, 32, 121, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 69, 117, 99, 108, 105, 100, 101, 97, 110, 32, 100, 105, 115, 116, 97, 110, 99, 101, 44, 32, 115, 113, 114, 116, 40, 120, 42, 120, 32, 43, 32, 121, 42, 121, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 112, 111, 119, 0 ], "i8", ALLOC_NORMAL);
    _math_pow_doc = allocate([ 112, 111, 119, 40, 120, 44, 32, 121, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 120, 42, 42, 121, 32, 40, 120, 32, 116, 111, 32, 116, 104, 101, 32, 112, 111, 119, 101, 114, 32, 111, 102, 32, 121, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _degToRad = allocate([ .017453292519943295 ], [ "double", 0, 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    _radToDeg = allocate([ 57.29577951308232 ], [ "double", 0, 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    _math_degrees_doc = allocate([ 100, 101, 103, 114, 101, 101, 115, 40, 120, 41, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 110, 103, 108, 101, 32, 120, 32, 102, 114, 111, 109, 32, 114, 97, 100, 105, 97, 110, 115, 32, 116, 111, 32, 100, 101, 103, 114, 101, 101, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_radians_doc = allocate([ 114, 97, 100, 105, 97, 110, 115, 40, 120, 41, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 110, 103, 108, 101, 32, 120, 32, 102, 114, 111, 109, 32, 100, 101, 103, 114, 101, 101, 115, 32, 116, 111, 32, 114, 97, 100, 105, 97, 110, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_isnan_doc = allocate([ 105, 115, 110, 97, 110, 40, 120, 41, 32, 45, 62, 32, 98, 111, 111, 108, 10, 10, 67, 104, 101, 99, 107, 32, 105, 102, 32, 102, 108, 111, 97, 116, 32, 120, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 110, 117, 109, 98, 101, 114, 32, 40, 78, 97, 78, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_isinf_doc = allocate([ 105, 115, 105, 110, 102, 40, 120, 41, 32, 45, 62, 32, 98, 111, 111, 108, 10, 10, 67, 104, 101, 99, 107, 32, 105, 102, 32, 102, 108, 111, 97, 116, 32, 120, 32, 105, 115, 32, 105, 110, 102, 105, 110, 105, 116, 101, 32, 40, 112, 111, 115, 105, 116, 105, 118, 101, 32, 111, 114, 32, 110, 101, 103, 97, 116, 105, 118, 101, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 97, 99, 111, 115, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 97, 99, 111, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 97, 115, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 97, 115, 105, 110, 104, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 97, 116, 97, 110, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 97, 116, 97, 110, 104, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 99, 101, 105, 108, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 99, 111, 115, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 99, 111, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 100, 101, 103, 114, 101, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 101, 114, 102, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 101, 114, 102, 99, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 101, 120, 112, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 101, 120, 112, 109, 49, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 102, 97, 98, 115, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 102, 97, 99, 116, 111, 114, 105, 97, 108, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 102, 108, 111, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 102, 114, 101, 120, 112, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 102, 115, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 103, 97, 109, 109, 97, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 105, 115, 105, 110, 102, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 105, 115, 110, 97, 110, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 108, 100, 101, 120, 112, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 108, 103, 97, 109, 109, 97, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 108, 111, 103, 49, 112, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 109, 111, 100, 102, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 114, 97, 100, 105, 97, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 115, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 115, 105, 110, 104, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 115, 113, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 116, 97, 110, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 116, 97, 110, 104, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 116, 114, 117, 110, 99, 0 ], "i8", ALLOC_NORMAL);
    _math_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_doc = allocate([ 84, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 105, 115, 32, 97, 108, 119, 97, 121, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 46, 32, 32, 73, 116, 32, 112, 114, 111, 118, 105, 100, 101, 115, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 10, 109, 97, 116, 104, 101, 109, 97, 116, 105, 99, 97, 108, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 100, 101, 102, 105, 110, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 67, 32, 115, 116, 97, 110, 100, 97, 114, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 109, 97, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 112, 105, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 101, 0 ], "i8", ALLOC_NORMAL);
    _ln2 = allocate([ .6931471805599453 ], [ "double", 0, 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    _two_pow_m28 = allocate([ 3.725290298461914e-9 ], [ "double", 0, 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    _two_pow_p28 = allocate([ 268435456 ], [ "double", 0, 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    _zero = allocate(1, "double", ALLOC_NORMAL);
    HEAP[_math_methods] = __str28;
    HEAP[_math_methods + 4] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_math_methods + 12] = _math_acos_doc;
    HEAP[_math_methods + 16] = __str29;
    HEAP[_math_methods + 20] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_math_methods + 28] = _math_acosh_doc;
    HEAP[_math_methods + 32] = __str30;
    HEAP[_math_methods + 36] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_math_methods + 44] = _math_asin_doc;
    HEAP[_math_methods + 48] = __str31;
    HEAP[_math_methods + 52] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_math_methods + 60] = _math_asinh_doc;
    HEAP[_math_methods + 64] = __str32;
    HEAP[_math_methods + 68] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_math_methods + 76] = _math_atan_doc;
    HEAP[_math_methods + 80] = __str8;
    HEAP[_math_methods + 84] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_math_methods + 92] = _math_atan2_doc;
    HEAP[_math_methods + 96] = __str33;
    HEAP[_math_methods + 100] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_math_methods + 108] = _math_atanh_doc;
    HEAP[_math_methods + 112] = __str34;
    HEAP[_math_methods + 116] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_math_methods + 124] = _math_ceil_doc;
    HEAP[_math_methods + 128] = __str9;
    HEAP[_math_methods + 132] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_math_methods + 140] = _math_copysign_doc;
    HEAP[_math_methods + 144] = __str35;
    HEAP[_math_methods + 148] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_math_methods + 156] = _math_cos_doc;
    HEAP[_math_methods + 160] = __str36;
    HEAP[_math_methods + 164] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_math_methods + 172] = _math_cosh_doc;
    HEAP[_math_methods + 176] = __str37;
    HEAP[_math_methods + 180] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_math_methods + 188] = _math_degrees_doc;
    HEAP[_math_methods + 192] = __str38;
    HEAP[_math_methods + 196] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_math_methods + 204] = _math_erf_doc;
    HEAP[_math_methods + 208] = __str39;
    HEAP[_math_methods + 212] = FUNCTION_TABLE_OFFSET + 82;
    HEAP[_math_methods + 220] = _math_erfc_doc;
    HEAP[_math_methods + 224] = __str40;
    HEAP[_math_methods + 228] = FUNCTION_TABLE_OFFSET + 84;
    HEAP[_math_methods + 236] = _math_exp_doc;
    HEAP[_math_methods + 240] = __str41;
    HEAP[_math_methods + 244] = FUNCTION_TABLE_OFFSET + 86;
    HEAP[_math_methods + 252] = _math_expm1_doc;
    HEAP[_math_methods + 256] = __str42;
    HEAP[_math_methods + 260] = FUNCTION_TABLE_OFFSET + 88;
    HEAP[_math_methods + 268] = _math_fabs_doc;
    HEAP[_math_methods + 272] = __str43;
    HEAP[_math_methods + 276] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_math_methods + 284] = _math_factorial_doc;
    HEAP[_math_methods + 288] = __str44;
    HEAP[_math_methods + 292] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_math_methods + 300] = _math_floor_doc;
    HEAP[_math_methods + 304] = __str25;
    HEAP[_math_methods + 308] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_math_methods + 316] = _math_fmod_doc;
    HEAP[_math_methods + 320] = __str45;
    HEAP[_math_methods + 324] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_math_methods + 332] = _math_frexp_doc;
    HEAP[_math_methods + 336] = __str46;
    HEAP[_math_methods + 340] = FUNCTION_TABLE_OFFSET + 98;
    HEAP[_math_methods + 348] = _math_fsum_doc;
    HEAP[_math_methods + 352] = __str47;
    HEAP[_math_methods + 356] = FUNCTION_TABLE_OFFSET + 100;
    HEAP[_math_methods + 364] = _math_gamma_doc;
    HEAP[_math_methods + 368] = __str26;
    HEAP[_math_methods + 372] = FUNCTION_TABLE_OFFSET + 102;
    HEAP[_math_methods + 380] = _math_hypot_doc;
    HEAP[_math_methods + 384] = __str48;
    HEAP[_math_methods + 388] = FUNCTION_TABLE_OFFSET + 104;
    HEAP[_math_methods + 396] = _math_isinf_doc;
    HEAP[_math_methods + 400] = __str49;
    HEAP[_math_methods + 404] = FUNCTION_TABLE_OFFSET + 106;
    HEAP[_math_methods + 412] = _math_isnan_doc;
    HEAP[_math_methods + 416] = __str50;
    HEAP[_math_methods + 420] = FUNCTION_TABLE_OFFSET + 108;
    HEAP[_math_methods + 428] = _math_ldexp_doc;
    HEAP[_math_methods + 432] = __str51;
    HEAP[_math_methods + 436] = FUNCTION_TABLE_OFFSET + 110;
    HEAP[_math_methods + 444] = _math_lgamma_doc;
    HEAP[_math_methods + 448] = __str23;
    HEAP[_math_methods + 452] = FUNCTION_TABLE_OFFSET + 112;
    HEAP[_math_methods + 460] = _math_log_doc;
    HEAP[_math_methods + 464] = __str52;
    HEAP[_math_methods + 468] = FUNCTION_TABLE_OFFSET + 114;
    HEAP[_math_methods + 476] = _math_log1p_doc;
    HEAP[_math_methods + 480] = __str24;
    HEAP[_math_methods + 484] = FUNCTION_TABLE_OFFSET + 116;
    HEAP[_math_methods + 492] = _math_log10_doc;
    HEAP[_math_methods + 496] = __str53;
    HEAP[_math_methods + 500] = FUNCTION_TABLE_OFFSET + 118;
    HEAP[_math_methods + 508] = _math_modf_doc;
    HEAP[_math_methods + 512] = __str27;
    HEAP[_math_methods + 516] = FUNCTION_TABLE_OFFSET + 120;
    HEAP[_math_methods + 524] = _math_pow_doc;
    HEAP[_math_methods + 528] = __str54;
    HEAP[_math_methods + 532] = FUNCTION_TABLE_OFFSET + 122;
    HEAP[_math_methods + 540] = _math_radians_doc;
    HEAP[_math_methods + 544] = __str55;
    HEAP[_math_methods + 548] = FUNCTION_TABLE_OFFSET + 124;
    HEAP[_math_methods + 556] = _math_sin_doc;
    HEAP[_math_methods + 560] = __str56;
    HEAP[_math_methods + 564] = FUNCTION_TABLE_OFFSET + 126;
    HEAP[_math_methods + 572] = _math_sinh_doc;
    HEAP[_math_methods + 576] = __str57;
    HEAP[_math_methods + 580] = FUNCTION_TABLE_OFFSET + 128;
    HEAP[_math_methods + 588] = _math_sqrt_doc;
    HEAP[_math_methods + 592] = __str58;
    HEAP[_math_methods + 596] = FUNCTION_TABLE_OFFSET + 130;
    HEAP[_math_methods + 604] = _math_tan_doc;
    HEAP[_math_methods + 608] = __str59;
    HEAP[_math_methods + 612] = FUNCTION_TABLE_OFFSET + 132;
    HEAP[_math_methods + 620] = _math_tanh_doc;
    HEAP[_math_methods + 624] = __str60;
    HEAP[_math_methods + 628] = FUNCTION_TABLE_OFFSET + 134;
    HEAP[_math_methods + 636] = _math_trunc_doc;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
