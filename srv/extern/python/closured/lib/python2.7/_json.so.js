"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 160;
  var $1___SIZE = 20;
  var $2___SIZE = 180;
  var $3___SIZE = 196;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyEncoderObject___SIZE = 48;
  var $struct_PyFloatObject___SIZE = 16;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyInterpreterState___SIZE = 40;
  var $struct_PyListObject___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PyScannerObject___SIZE = 36;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyThreadState___SIZE = 84;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_PyUnicodeObject___SIZE = 24;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__frame___SIZE = 0;
  var $struct__frame___FLATTENER = [];
  var $struct__typeobject___SIZE = 196;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var _scanner_members;
  var __str7;
  var __str8;
  var __str9;
  var __str10;
  var __str11;
  var __str12;
  var __str13;
  var __str14;
  var _encoder_members;
  var __str15;
  var _errmsg_fn_8589;
  var __str16;
  var __str17;
  var __str18;
  var _joinfn_8623;
  var __str19;
  var __str20;
  var __str21;
  var __str22;
  var __str23;
  var __str24;
  var _pydoc_scanstring;
  var __str25;
  var __str26;
  var __str27;
  var _pydoc_encode_basestring_ascii;
  var __str28;
  var __str29;
  var ___PRETTY_FUNCTION___9156;
  var ___PRETTY_FUNCTION___9226;
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
  var ___PRETTY_FUNCTION___10651;
  var __str41;
  var _kwlist_10649;
  var __str42;
  var __str43;
  var ___PRETTY_FUNCTION___10710;
  var __str44;
  var _kwlist_10708;
  var __str45;
  var _scanner_doc;
  var __str46;
  var _PyScannerType;
  var __str47;
  var ___PRETTY_FUNCTION___10897;
  var __str48;
  var _kwlist_10886;
  var __str49;
  var ___PRETTY_FUNCTION___10963;
  var __str50;
  var _kwlist_10958;
  var __str51;
  var __str52;
  var _s_null_10994;
  var __str53;
  var _s_true_10995;
  var __str54;
  var _s_false_10996;
  var __str55;
  var __str56;
  var __str57;
  var __str58;
  var __str59;
  var _open_dict_11289;
  var _close_dict_11290;
  var _empty_dict_11291;
  var __str60;
  var __str61;
  var __str62;
  var __str63;
  var _open_array_11548;
  var _close_array_11549;
  var _empty_array_11550;
  var __str64;
  var __str65;
  var __str66;
  var __str67;
  var ___PRETTY_FUNCTION___11686;
  var ___PRETTY_FUNCTION___11764;
  var _encoder_doc;
  var __str68;
  var _PyEncoderType;
  var _speedups_methods;
  var __str69;
  var __str70;
  var _module_doc;
  var __str71;
  var __str72;
  var __str73;
  function __convertPyInt_AsSsize_t($o, $size_ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $o_addr = __stackBase__;
      var $size_ptr_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$o_addr] = $o;
      HEAP[$size_ptr_addr] = $size_ptr;
      var $1 = HEAP[$o_addr];
      var $2 = _PyInt_AsSsize_t($1);
      var $3 = HEAP[$size_ptr_addr];
      HEAP[$3] = $2;
      
      
      var $6 = HEAP[HEAP[$size_ptr_addr]] == -1;
      if ($6) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $7 = _PyErr_Occurred();
      
      if ($7 != 0) {
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
      HEAP[$0] = 1;
      __label__ = 4;
      break;
     case 4:
      var $9 = HEAP[$0];
      HEAP[$retval] = $9;
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
  function __convertPyInt_FromSsize_t($size_ptr) {
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
      
      HEAP[__stackBase__] = $size_ptr;
      
      var $2 = HEAP[HEAP[__stackBase__]];
      var $3 = _PyInt_FromSsize_t($2);
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
  function _ascii_escape_char($c, $output, $chars) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 18;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $c_addr = __stackBase__;
      var $output_addr = __stackBase__ + 2;
      var $chars_addr = __stackBase__ + 6;
      var $retval = __stackBase__ + 10;
      var $0 = __stackBase__ + 14;
      
      HEAP[$c_addr] = $c;
      HEAP[$output_addr] = $output;
      HEAP[$chars_addr] = $chars;
      
      
      var $3 = HEAP[$output_addr] + HEAP[$chars_addr];
      HEAP[$3] = 92;
      
      var $5 = HEAP[$chars_addr] + 1;
      HEAP[$chars_addr] = $5;
      
      var $7 = HEAP[$c_addr];
      if ($7 == 8) {
        __label__ = 3;
        break;
      } else if ($7 == 9) {
        __label__ = 7;
        break;
      } else if ($7 == 10) {
        __label__ = 5;
        break;
      } else if ($7 == 12) {
        __label__ = 4;
        break;
      } else if ($7 == 13) {
        __label__ = 6;
        break;
      } else if ($7 == 34) {
        __label__ = 2;
        break;
      } else if ($7 == 92) {
        __label__ = 1;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 1:
      
      var $9 = HEAP[$c_addr] & 255;
      
      
      var $12 = HEAP[$output_addr] + HEAP[$chars_addr];
      HEAP[$12] = $9;
      
      var $14 = HEAP[$chars_addr] + 1;
      HEAP[$chars_addr] = $14;
      __label__ = 9;
      break;
     case 2:
      
      var $16 = HEAP[$c_addr] & 255;
      
      
      var $19 = HEAP[$output_addr] + HEAP[$chars_addr];
      HEAP[$19] = $16;
      
      var $21 = HEAP[$chars_addr] + 1;
      HEAP[$chars_addr] = $21;
      __label__ = 9;
      break;
     case 3:
      
      
      var $24 = HEAP[$output_addr] + HEAP[$chars_addr];
      HEAP[$24] = 98;
      
      var $26 = HEAP[$chars_addr] + 1;
      HEAP[$chars_addr] = $26;
      __label__ = 9;
      break;
     case 4:
      
      
      var $29 = HEAP[$output_addr] + HEAP[$chars_addr];
      HEAP[$29] = 102;
      
      var $31 = HEAP[$chars_addr] + 1;
      HEAP[$chars_addr] = $31;
      __label__ = 9;
      break;
     case 5:
      
      
      var $34 = HEAP[$output_addr] + HEAP[$chars_addr];
      HEAP[$34] = 110;
      
      var $36 = HEAP[$chars_addr] + 1;
      HEAP[$chars_addr] = $36;
      __label__ = 9;
      break;
     case 6:
      
      
      var $39 = HEAP[$output_addr] + HEAP[$chars_addr];
      HEAP[$39] = 114;
      
      var $41 = HEAP[$chars_addr] + 1;
      HEAP[$chars_addr] = $41;
      __label__ = 9;
      break;
     case 7:
      
      
      var $44 = HEAP[$output_addr] + HEAP[$chars_addr];
      HEAP[$44] = 116;
      
      var $46 = HEAP[$chars_addr] + 1;
      HEAP[$chars_addr] = $46;
      __label__ = 9;
      break;
     case 8:
      
      
      var $49 = HEAP[$output_addr] + HEAP[$chars_addr];
      HEAP[$49] = 117;
      
      var $51 = HEAP[$chars_addr] + 1;
      HEAP[$chars_addr] = $51;
      
      
      
      
      
      var $57 = HEAP[__str15 + (HEAP[$c_addr] >>> 12 & 15)];
      
      
      var $60 = HEAP[$output_addr] + HEAP[$chars_addr];
      HEAP[$60] = $57;
      
      var $62 = HEAP[$chars_addr] + 1;
      HEAP[$chars_addr] = $62;
      
      
      
      
      
      var $68 = HEAP[__str15 + (HEAP[$c_addr] >>> 8 & 15)];
      
      
      var $71 = HEAP[$output_addr] + HEAP[$chars_addr];
      HEAP[$71] = $68;
      
      var $73 = HEAP[$chars_addr] + 1;
      HEAP[$chars_addr] = $73;
      
      
      
      
      
      var $79 = HEAP[__str15 + (HEAP[$c_addr] >>> 4 & 15)];
      
      
      var $82 = HEAP[$output_addr] + HEAP[$chars_addr];
      HEAP[$82] = $79;
      
      var $84 = HEAP[$chars_addr] + 1;
      HEAP[$chars_addr] = $84;
      
      
      
      
      var $89 = HEAP[__str15 + (HEAP[$c_addr] & 15)];
      
      
      var $92 = HEAP[$output_addr] + HEAP[$chars_addr];
      HEAP[$92] = $89;
      
      var $94 = HEAP[$chars_addr] + 1;
      HEAP[$chars_addr] = $94;
      __label__ = 9;
      break;
     case 9:
      var $95 = HEAP[$chars_addr];
      HEAP[$0] = $95;
      var $96 = HEAP[$0];
      HEAP[$retval] = $96;
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
  function _ascii_escape_unicode($pystr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 50;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 50);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pystr_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $i = __stackBase__ + 12;
      var $input_chars = __stackBase__ + 16;
      var $output_size = __stackBase__ + 20;
      var $max_output_size = __stackBase__ + 24;
      var $chars = __stackBase__ + 28;
      var $rval = __stackBase__ + 32;
      var $output = __stackBase__ + 36;
      var $input_unicode = __stackBase__ + 40;
      var $c = __stackBase__ + 44;
      var $new_output_size = __stackBase__ + 46;
      
      HEAP[$pystr_addr] = $pystr;
      
      
      
      var $4 = HEAP[HEAP[$pystr_addr] + 8];
      HEAP[$input_chars] = $4;
      
      
      
      var $8 = HEAP[HEAP[$pystr_addr] + 12];
      HEAP[$input_unicode] = $8;
      
      var $10 = HEAP[$input_chars] + 26;
      HEAP[$output_size] = $10;
      
      
      var $13 = HEAP[$input_chars] * 6 + 2;
      HEAP[$max_output_size] = $13;
      var $14 = HEAP[$output_size];
      var $15 = _PyString_FromStringAndSize(0, $14);
      HEAP[$rval] = $15;
      
      
      if (HEAP[$rval] == 0) {
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
      
      
      
      var $21 = HEAP[$rval] + 20;
      HEAP[$output] = $21;
      HEAP[$chars] = 0;
      
      
      var $24 = HEAP[$output] + HEAP[$chars];
      HEAP[$24] = 34;
      
      var $26 = HEAP[$chars] + 1;
      HEAP[$chars] = $26;
      HEAP[$i] = 0;
      __label__ = 17;
      break;
     case 3:
      
      
      
      var $30 = HEAP[HEAP[$input_unicode] + 2 * HEAP[$i]];
      HEAP[$c] = $30;
      
      
      if (HEAP[$c] <= 31) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if (HEAP[$c] > 126) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      if (HEAP[$c] == 92) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if (HEAP[$c] == 34) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      var $40 = HEAP[$c] & 255;
      
      
      var $43 = HEAP[$output] + HEAP[$chars];
      HEAP[$43] = $40;
      
      var $45 = HEAP[$chars] + 1;
      HEAP[$chars] = $45;
      __label__ = 9;
      break;
     case 8:
      
      
      var $48 = HEAP[$c] & 65535;
      var $49 = HEAP[$output];
      var $50 = HEAP[$chars];
      var $51 = _ascii_escape_char($48, $49, $50);
      HEAP[$chars] = $51;
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[$output_size] - HEAP[$chars] <= 6) {
        __label__ = 10;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 10:
      
      var $57 = HEAP[$output_size] * 2;
      HEAP[$new_output_size] = $57;
      
      
      
      if (HEAP[$new_output_size] > HEAP[$max_output_size]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $61 = HEAP[$max_output_size];
      HEAP[$new_output_size] = $61;
      __label__ = 12;
      break;
     case 12:
      
      
      
      if (HEAP[$new_output_size] != HEAP[$output_size]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      var $65 = HEAP[$new_output_size];
      HEAP[$output_size] = $65;
      var $66 = HEAP[$output_size];
      var $67 = __PyString_Resize($rval, $66);
      var $68 = $67 == -1;
      if ($68) {
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
      
      
      
      var $72 = HEAP[$rval] + 20;
      HEAP[$output] = $72;
      __label__ = 16;
      break;
     case 16:
      
      var $74 = HEAP[$i] + 1;
      HEAP[$i] = $74;
      __label__ = 17;
      break;
     case 17:
      
      
      
      if (HEAP[$i] < HEAP[$input_chars]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      var $80 = HEAP[$output] + HEAP[$chars];
      HEAP[$80] = 34;
      
      var $82 = HEAP[$chars] + 1;
      HEAP[$chars] = $82;
      var $83 = HEAP[$chars];
      var $84 = __PyString_Resize($rval, $83);
      var $85 = $84 == -1;
      if ($85) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 20:
      var $86 = HEAP[$rval];
      HEAP[$0] = $86;
      __label__ = 21;
      break;
     case 21:
      var $87 = HEAP[$0];
      HEAP[$retval] = $87;
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
  function _ascii_escape_str($pystr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pystr_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $i = __stackBase__ + 12;
      var $input_chars = __stackBase__ + 16;
      var $output_size = __stackBase__ + 20;
      var $chars = __stackBase__ + 24;
      var $rval = __stackBase__ + 28;
      var $output = __stackBase__ + 32;
      var $input_str = __stackBase__ + 36;
      var $c = __stackBase__ + 40;
      var $j = __stackBase__ + 42;
      var $uni = __stackBase__ + 46;
      var $c23 = __stackBase__ + 50;
      
      HEAP[$pystr_addr] = $pystr;
      
      
      
      var $4 = HEAP[HEAP[$pystr_addr] + 8];
      HEAP[$input_chars] = $4;
      
      
      
      var $8 = HEAP[$pystr_addr] + 20;
      HEAP[$input_str] = $8;
      HEAP[$i] = 0;
      __label__ = 16;
      break;
     case 1:
      
      
      
      
      var $13 = HEAP[HEAP[$input_str] + HEAP[$i]];
      HEAP[$c] = $13;
      
      
      if (HEAP[$c] <= 31) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$c] > 126) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$c] == 92) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if (HEAP[$c] == 34) {
        __label__ = 5;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 5:
      var $22 = HEAP[$i];
      HEAP[$j] = $22;
      __label__ = 13;
      break;
     case 6:
      
      
      
      
      var $27 = HEAP[HEAP[$input_str] + HEAP[$j]];
      HEAP[$c] = $27;
      
      
      if (HEAP[$c] > 127) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      var $30 = HEAP[$input_str];
      var $31 = HEAP[$input_chars];
      var $32 = _PyUnicodeUCS2_DecodeUTF8($30, $31, __str1);
      HEAP[$uni] = $32;
      
      
      if (HEAP[$uni] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 40;
      break;
     case 9:
      var $35 = HEAP[$uni];
      var $36 = _ascii_escape_unicode($35);
      HEAP[$rval] = $36;
      
      
      
      var $40 = HEAP[HEAP[$uni]] - 1;
      
      var $42 = HEAP[$uni];
      HEAP[$42] = $40;
      
      
      
      
      if (HEAP[HEAP[$uni]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $51 = HEAP[HEAP[HEAP[$uni] + 4] + 24];
      var $52 = HEAP[$uni];
      FUNCTION_TABLE[$51]($52);
      __label__ = 11;
      break;
     case 11:
      var $53 = HEAP[$rval];
      HEAP[$0] = $53;
      __label__ = 40;
      break;
     case 12:
      
      var $55 = HEAP[$j] + 1;
      HEAP[$j] = $55;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (HEAP[$j] < HEAP[$input_chars]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      __label__ = 17;
      break;
     case 15:
      
      var $60 = HEAP[$i] + 1;
      HEAP[$i] = $60;
      __label__ = 16;
      break;
     case 16:
      
      
      
      if (HEAP[$i] < HEAP[$input_chars]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      if (HEAP[$i] == HEAP[$input_chars]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      var $68 = HEAP[$input_chars] + 2;
      HEAP[$output_size] = $68;
      __label__ = 20;
      break;
     case 19:
      
      var $70 = HEAP[$input_chars] + 26;
      HEAP[$output_size] = $70;
      __label__ = 20;
      break;
     case 20:
      var $71 = HEAP[$output_size];
      var $72 = _PyString_FromStringAndSize(0, $71);
      HEAP[$rval] = $72;
      
      
      if (HEAP[$rval] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      HEAP[$0] = 0;
      __label__ = 40;
      break;
     case 22:
      
      
      
      var $78 = HEAP[$rval] + 20;
      HEAP[$output] = $78;
      
      var $80 = HEAP[$output];
      HEAP[$80] = 34;
      
      var $82 = HEAP[$i] + 1;
      HEAP[$chars] = $82;
      var $83 = HEAP[$i];
      
      var $85 = HEAP[$output] + 1;
      var $86 = HEAP[$input_str];
      _llvm_memcpy_p0i8_p0i8_i32($85, $86, $83, 1, 0);
      __label__ = 36;
      break;
     case 23:
      
      
      
      
      var $91 = HEAP[HEAP[$input_str] + HEAP[$i]];
      HEAP[$c23] = $91;
      
      
      if (HEAP[$c23] <= 31) {
        __label__ = 28;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      if (HEAP[$c23] > 126) {
        __label__ = 28;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      if (HEAP[$c23] == 92) {
        __label__ = 28;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      if (HEAP[$c23] == 34) {
        __label__ = 28;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      var $101 = HEAP[$c23] & 255;
      
      
      var $104 = HEAP[$output] + HEAP[$chars];
      HEAP[$104] = $101;
      
      var $106 = HEAP[$chars] + 1;
      HEAP[$chars] = $106;
      __label__ = 29;
      break;
     case 28:
      
      
      var $109 = HEAP[$c23] & 65535;
      var $110 = HEAP[$output];
      var $111 = HEAP[$chars];
      var $112 = _ascii_escape_char($109, $110, $111);
      HEAP[$chars] = $112;
      __label__ = 29;
      break;
     case 29:
      
      
      
      
      if (HEAP[$output_size] - HEAP[$chars] <= 6) {
        __label__ = 30;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 30:
      
      var $118 = HEAP[$output_size] * 2;
      HEAP[$output_size] = $118;
      
      
      
      
      
      if (HEAP[$input_chars] * 6 + 2 < HEAP[$output_size]) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      var $126 = HEAP[$input_chars] * 6 + 2;
      HEAP[$output_size] = $126;
      __label__ = 32;
      break;
     case 32:
      var $127 = HEAP[$output_size];
      var $128 = __PyString_Resize($rval, $127);
      var $129 = $128 == -1;
      if ($129) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      HEAP[$0] = 0;
      __label__ = 40;
      break;
     case 34:
      
      
      
      var $133 = HEAP[$rval] + 20;
      HEAP[$output] = $133;
      __label__ = 35;
      break;
     case 35:
      
      var $135 = HEAP[$i] + 1;
      HEAP[$i] = $135;
      __label__ = 36;
      break;
     case 36:
      
      
      
      if (HEAP[$i] < HEAP[$input_chars]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      var $141 = HEAP[$output] + HEAP[$chars];
      HEAP[$141] = 34;
      
      var $143 = HEAP[$chars] + 1;
      HEAP[$chars] = $143;
      var $144 = HEAP[$chars];
      var $145 = __PyString_Resize($rval, $144);
      var $146 = $145 == -1;
      if ($146) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      HEAP[$0] = 0;
      __label__ = 40;
      break;
     case 39:
      var $147 = HEAP[$rval];
      HEAP[$0] = $147;
      __label__ = 40;
      break;
     case 40:
      var $148 = HEAP[$0];
      HEAP[$retval] = $148;
      __label__ = 41;
      break;
     case 41:
      var $retval41 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval41;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _raise_errmsg($msg, $s, $end) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $msg_addr = __stackBase__;
      var $s_addr = __stackBase__ + 4;
      var $end_addr = __stackBase__ + 8;
      var $pymsg = __stackBase__ + 12;
      var $decoder = __stackBase__ + 16;
      
      HEAP[$msg_addr] = $msg;
      HEAP[$s_addr] = $s;
      HEAP[$end_addr] = $end;
      
      
      if (HEAP[_errmsg_fn_8589] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      var $2 = _PyImport_ImportModule(__str16);
      HEAP[$decoder] = $2;
      
      
      if (HEAP[$decoder] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $5 = HEAP[$decoder];
      var $6 = _PyObject_GetAttrString($5, __str17);
      HEAP[_errmsg_fn_8589] = $6;
      
      
      
      var $10 = HEAP[HEAP[$decoder]] - 1;
      
      var $12 = HEAP[$decoder];
      HEAP[$12] = $10;
      
      
      
      
      if (HEAP[HEAP[$decoder]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $21 = HEAP[HEAP[HEAP[$decoder] + 4] + 24];
      var $22 = HEAP[$decoder];
      FUNCTION_TABLE[$21]($22);
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[_errmsg_fn_8589] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $25 = HEAP[_errmsg_fn_8589];
      var $26 = HEAP[$msg_addr];
      var $27 = HEAP[$s_addr];
      var $28 = _PyObject_CallFunction($25, __str18, allocate([ $26, 0, 0, 0, $27, 0, 0, 0, FUNCTION_TABLE_OFFSET + 2, 0, 0, 0, $end_addr, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (i32*)*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$pymsg] = $28;
      
      
      if (HEAP[$pymsg] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      var $31 = HEAP[_PyExc_ValueError];
      var $32 = HEAP[$pymsg];
      _PyErr_SetObject($31, $32);
      
      
      
      var $36 = HEAP[HEAP[$pymsg]] - 1;
      
      var $38 = HEAP[$pymsg];
      HEAP[$38] = $36;
      
      
      
      
      if (HEAP[HEAP[$pymsg]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $47 = HEAP[HEAP[HEAP[$pymsg] + 4] + 24];
      var $48 = HEAP[$pymsg];
      FUNCTION_TABLE[$47]($48);
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
  function _join_list_unicode($lst) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lst_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $ustr = __stackBase__ + 12;
      
      HEAP[$lst_addr] = $lst;
      
      
      if (HEAP[_joinfn_8623] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      var $3 = _PyUnicodeUCS2_FromUnicode(0, 0);
      HEAP[$ustr] = $3;
      
      
      if (HEAP[$ustr] == 0) {
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
      var $6 = HEAP[$ustr];
      var $7 = _PyObject_GetAttrString($6, __str19);
      HEAP[_joinfn_8623] = $7;
      
      
      
      var $11 = HEAP[HEAP[$ustr]] - 1;
      
      var $13 = HEAP[$ustr];
      HEAP[$13] = $11;
      
      
      
      
      if (HEAP[HEAP[$ustr]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$ustr] + 4] + 24];
      var $23 = HEAP[$ustr];
      FUNCTION_TABLE[$22]($23);
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[_joinfn_8623] == 0) {
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
      var $26 = HEAP[_joinfn_8623];
      var $27 = HEAP[$lst_addr];
      var $28 = _PyObject_CallFunctionObjArgs($26, allocate([ $27, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $28;
      __label__ = 8;
      break;
     case 8:
      var $29 = HEAP[$0];
      HEAP[$retval] = $29;
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
  function __build_rval_index_tuple($rval, $idx) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $rval_addr = __stackBase__;
      var $idx_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $tpl = __stackBase__ + 16;
      var $pyidx = __stackBase__ + 20;
      
      HEAP[$rval_addr] = $rval;
      HEAP[$idx_addr] = $idx;
      
      
      if (HEAP[$rval_addr] == 0) {
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
      var $3 = HEAP[$idx_addr];
      var $4 = _PyInt_FromSsize_t($3);
      HEAP[$pyidx] = $4;
      
      
      if (HEAP[$pyidx] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      var $10 = HEAP[HEAP[$rval_addr]] - 1;
      
      var $12 = HEAP[$rval_addr];
      HEAP[$12] = $10;
      
      
      
      
      if (HEAP[HEAP[$rval_addr]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $21 = HEAP[HEAP[HEAP[$rval_addr] + 4] + 24];
      var $22 = HEAP[$rval_addr];
      FUNCTION_TABLE[$21]($22);
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 6:
      var $23 = _PyTuple_New(2);
      HEAP[$tpl] = $23;
      
      
      if (HEAP[$tpl] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      
      
      
      var $29 = HEAP[HEAP[$pyidx]] - 1;
      
      var $31 = HEAP[$pyidx];
      HEAP[$31] = $29;
      
      
      
      
      if (HEAP[HEAP[$pyidx]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $40 = HEAP[HEAP[HEAP[$pyidx] + 4] + 24];
      var $41 = HEAP[$pyidx];
      FUNCTION_TABLE[$40]($41);
      __label__ = 9;
      break;
     case 9:
      
      
      
      var $45 = HEAP[HEAP[$rval_addr]] - 1;
      
      var $47 = HEAP[$rval_addr];
      HEAP[$47] = $45;
      
      
      
      
      if (HEAP[HEAP[$rval_addr]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $56 = HEAP[HEAP[HEAP[$rval_addr] + 4] + 24];
      var $57 = HEAP[$rval_addr];
      FUNCTION_TABLE[$56]($57);
      __label__ = 11;
      break;
     case 11:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 12:
      
      
      
      var $61 = HEAP[$tpl] + 12;
      var $62 = HEAP[$rval_addr];
      HEAP[$61] = $62;
      
      
      
      var $66 = HEAP[$tpl] + 12 + 4;
      var $67 = HEAP[$pyidx];
      HEAP[$66] = $67;
      var $68 = HEAP[$tpl];
      HEAP[$0] = $68;
      __label__ = 13;
      break;
     case 13:
      var $69 = HEAP[$0];
      HEAP[$retval] = $69;
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
  function _scanstring_str($pystr, $end, $encoding, $strict, $next_end_ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 68;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pystr_addr = __stackBase__;
      var $end_addr = __stackBase__ + 4;
      var $encoding_addr = __stackBase__ + 8;
      var $strict_addr = __stackBase__ + 12;
      var $next_end_ptr_addr = __stackBase__ + 16;
      var $retval = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $rval = __stackBase__ + 28;
      var $len = __stackBase__ + 32;
      var $begin = __stackBase__ + 36;
      var $next = __stackBase__ + 40;
      var $buf = __stackBase__ + 44;
      var $chunks = __stackBase__ + 48;
      var $c = __stackBase__ + 52;
      var $chunk = __stackBase__ + 54;
      var $strchunk = __stackBase__ + 58;
      var $digit = __stackBase__ + 62;
      var $_py_tmp = __stackBase__ + 64;
      
      HEAP[$pystr_addr] = $pystr;
      HEAP[$end_addr] = $end;
      HEAP[$encoding_addr] = $encoding;
      HEAP[$strict_addr] = $strict;
      HEAP[$next_end_ptr_addr] = $next_end_ptr;
      
      
      
      var $4 = HEAP[HEAP[$pystr_addr] + 8];
      HEAP[$len] = $4;
      
      var $6 = HEAP[$end_addr] - 1;
      HEAP[$begin] = $6;
      
      
      
      var $10 = HEAP[$pystr_addr] + 20;
      HEAP[$buf] = $10;
      var $11 = _PyList_New(0);
      HEAP[$chunks] = $11;
      
      
      if (HEAP[$chunks] == 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$end_addr] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      if (HEAP[$len] <= HEAP[$end_addr]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $19 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($19, __str20);
      __label__ = 66;
      break;
     case 4:
      HEAP[$c] = 0;
      HEAP[$chunk] = 0;
      var $20 = HEAP[$end_addr];
      HEAP[$next] = $20;
      __label__ = 11;
      break;
     case 5:
      
      
      
      
      var $25 = HEAP[HEAP[$buf] + HEAP[$next]];
      HEAP[$c] = $25;
      
      
      if (HEAP[$c] == 34) {
        __label__ = 12;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if (HEAP[$c] == 92) {
        __label__ = 12;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if (HEAP[$strict_addr] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      if (HEAP[$c] <= 31) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $34 = HEAP[$pystr_addr];
      var $35 = HEAP[$next];
      _raise_errmsg(__str21, $34, $35);
      __label__ = 66;
      break;
     case 10:
      
      var $37 = HEAP[$next] + 1;
      HEAP[$next] = $37;
      __label__ = 11;
      break;
     case 11:
      
      
      
      if (HEAP[$next] < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if (HEAP[$c] != 34) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      if (HEAP[$c] != 92) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $45 = HEAP[$pystr_addr];
      var $46 = HEAP[$begin];
      _raise_errmsg(__str22, $45, $46);
      __label__ = 66;
      break;
     case 15:
      
      
      
      if (HEAP[$next] != HEAP[$end_addr]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 16:
      
      
      var $52 = HEAP[$next] - HEAP[$end_addr];
      
      
      var $55 = HEAP[$buf] + HEAP[$end_addr];
      var $56 = _PyString_FromStringAndSize($55, $52);
      HEAP[$strchunk] = $56;
      
      
      if (HEAP[$strchunk] == 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      var $59 = HEAP[$strchunk];
      var $60 = HEAP[$encoding_addr];
      var $61 = _PyUnicodeUCS2_FromEncodedObject($59, $60, 0);
      HEAP[$chunk] = $61;
      
      
      
      var $65 = HEAP[HEAP[$strchunk]] - 1;
      
      var $67 = HEAP[$strchunk];
      HEAP[$67] = $65;
      
      
      
      
      if (HEAP[HEAP[$strchunk]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $76 = HEAP[HEAP[HEAP[$strchunk] + 4] + 24];
      var $77 = HEAP[$strchunk];
      FUNCTION_TABLE[$76]($77);
      __label__ = 19;
      break;
     case 19:
      
      
      if (HEAP[$chunk] == 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      var $80 = HEAP[$chunks];
      var $81 = HEAP[$chunk];
      var $82 = _PyList_Append($80, $81);
      
      if ($82 != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 21:
      
      
      
      var $87 = HEAP[HEAP[$chunk]] - 1;
      
      var $89 = HEAP[$chunk];
      HEAP[$89] = $87;
      
      
      
      
      if (HEAP[HEAP[$chunk]] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $98 = HEAP[HEAP[HEAP[$chunk] + 4] + 24];
      var $99 = HEAP[$chunk];
      FUNCTION_TABLE[$98]($99);
      __label__ = 23;
      break;
     case 23:
      __label__ = 66;
      break;
     case 24:
      
      
      
      var $103 = HEAP[HEAP[$chunk]] - 1;
      
      var $105 = HEAP[$chunk];
      HEAP[$105] = $103;
      
      
      
      
      if (HEAP[HEAP[$chunk]] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $114 = HEAP[HEAP[HEAP[$chunk] + 4] + 24];
      var $115 = HEAP[$chunk];
      FUNCTION_TABLE[$114]($115);
      __label__ = 26;
      break;
     case 26:
      
      var $117 = HEAP[$next] + 1;
      HEAP[$next] = $117;
      
      
      if (HEAP[$c] == 34) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $120 = HEAP[$next];
      HEAP[$end_addr] = $120;
      var $121 = HEAP[$chunks];
      var $122 = _join_list_unicode($121);
      HEAP[$rval] = $122;
      
      
      if (HEAP[$rval] == 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 28:
      
      
      
      if (HEAP[$next] == HEAP[$len]) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $128 = HEAP[$pystr_addr];
      var $129 = HEAP[$begin];
      _raise_errmsg(__str22, $128, $129);
      __label__ = 66;
      break;
     case 30:
      
      
      
      
      var $134 = HEAP[HEAP[$buf] + HEAP[$next]];
      HEAP[$c] = $134;
      
      
      if (HEAP[$c] != 117) {
        __label__ = 31;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 31:
      
      var $138 = HEAP[$next] + 1;
      HEAP[$end_addr] = $138;
      
      var $140 = HEAP[$c];
      if ($140 == 34) {
        __label__ = 32;
        break;
      } else if ($140 == 47) {
        __label__ = 34;
        break;
      } else if ($140 == 92) {
        __label__ = 33;
        break;
      } else if ($140 == 98) {
        __label__ = 35;
        break;
      } else if ($140 == 102) {
        __label__ = 36;
        break;
      } else if ($140 == 110) {
        __label__ = 37;
        break;
      } else if ($140 == 114) {
        __label__ = 38;
        break;
      } else if ($140 == 116) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 32:
      __label__ = 41;
      break;
     case 33:
      __label__ = 41;
      break;
     case 34:
      __label__ = 41;
      break;
     case 35:
      HEAP[$c] = 8;
      __label__ = 41;
      break;
     case 36:
      HEAP[$c] = 12;
      __label__ = 41;
      break;
     case 37:
      HEAP[$c] = 10;
      __label__ = 41;
      break;
     case 38:
      HEAP[$c] = 13;
      __label__ = 41;
      break;
     case 39:
      HEAP[$c] = 9;
      __label__ = 41;
      break;
     case 40:
      HEAP[$c] = 0;
      __label__ = 41;
      break;
     case 41:
      
      
      if (HEAP[$c] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      var $144 = HEAP[$end_addr] - 2;
      var $145 = HEAP[$pystr_addr];
      _raise_errmsg(__str23, $145, $144);
      __label__ = 66;
      break;
     case 43:
      __label__ = 54;
      break;
     case 44:
      HEAP[$c] = 0;
      
      var $147 = HEAP[$next] + 1;
      HEAP[$next] = $147;
      
      var $149 = HEAP[$next] + 4;
      HEAP[$end_addr] = $149;
      
      
      
      if (HEAP[$end_addr] >= HEAP[$len]) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      var $154 = HEAP[$next] - 1;
      var $155 = HEAP[$pystr_addr];
      _raise_errmsg(__str24, $155, $154);
      __label__ = 66;
      break;
     case 46:
      __label__ = 53;
      break;
     case 47:
      
      
      
      
      var $160 = HEAP[HEAP[$buf] + HEAP[$next]];
      HEAP[$digit] = $160;
      
      var $162 = HEAP[$c] << 4;
      HEAP[$c] = $162;
      
      var $164 = HEAP[$digit];
      if ($164 == 48) {
        __label__ = 48;
        break;
      } else if ($164 == 49) {
        __label__ = 48;
        break;
      } else if ($164 == 50) {
        __label__ = 48;
        break;
      } else if ($164 == 51) {
        __label__ = 48;
        break;
      } else if ($164 == 52) {
        __label__ = 48;
        break;
      } else if ($164 == 53) {
        __label__ = 48;
        break;
      } else if ($164 == 54) {
        __label__ = 48;
        break;
      } else if ($164 == 55) {
        __label__ = 48;
        break;
      } else if ($164 == 56) {
        __label__ = 48;
        break;
      } else if ($164 == 57) {
        __label__ = 48;
        break;
      } else if ($164 == 65) {
        __label__ = 50;
        break;
      } else if ($164 == 66) {
        __label__ = 50;
        break;
      } else if ($164 == 67) {
        __label__ = 50;
        break;
      } else if ($164 == 68) {
        __label__ = 50;
        break;
      } else if ($164 == 69) {
        __label__ = 50;
        break;
      } else if ($164 == 70) {
        __label__ = 50;
        break;
      } else if ($164 == 97) {
        __label__ = 49;
        break;
      } else if ($164 == 98) {
        __label__ = 49;
        break;
      } else if ($164 == 99) {
        __label__ = 49;
        break;
      } else if ($164 == 100) {
        __label__ = 49;
        break;
      } else if ($164 == 101) {
        __label__ = 49;
        break;
      } else if ($164 == 102) {
        __label__ = 49;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 48:
      
      
      
      var $168 = HEAP[$digit] - 48 | HEAP[$c];
      HEAP[$c] = $168;
      __label__ = 52;
      break;
     case 49:
      
      
      
      var $172 = HEAP[$digit] - 87 | HEAP[$c];
      HEAP[$c] = $172;
      __label__ = 52;
      break;
     case 50:
      
      
      
      var $176 = HEAP[$digit] - 55 | HEAP[$c];
      HEAP[$c] = $176;
      __label__ = 52;
      break;
     case 51:
      
      var $178 = HEAP[$end_addr] - 5;
      var $179 = HEAP[$pystr_addr];
      _raise_errmsg(__str24, $179, $178);
      __label__ = 66;
      break;
     case 52:
      
      var $181 = HEAP[$next] + 1;
      HEAP[$next] = $181;
      __label__ = 53;
      break;
     case 53:
      
      
      
      if (HEAP[$next] < HEAP[$end_addr]) {
        __label__ = 47;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 54:
      var $185 = _PyUnicodeUCS2_FromUnicode($c, 1);
      HEAP[$chunk] = $185;
      
      
      if (HEAP[$chunk] == 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 55:
      var $188 = HEAP[$chunks];
      var $189 = HEAP[$chunk];
      var $190 = _PyList_Append($188, $189);
      
      if ($190 != 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 56:
      
      
      
      var $195 = HEAP[HEAP[$chunk]] - 1;
      
      var $197 = HEAP[$chunk];
      HEAP[$197] = $195;
      
      
      
      
      if (HEAP[HEAP[$chunk]] == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      
      
      
      
      var $206 = HEAP[HEAP[HEAP[$chunk] + 4] + 24];
      var $207 = HEAP[$chunk];
      FUNCTION_TABLE[$206]($207);
      __label__ = 58;
      break;
     case 58:
      __label__ = 66;
      break;
     case 59:
      
      
      
      var $211 = HEAP[HEAP[$chunk]] - 1;
      
      var $213 = HEAP[$chunk];
      HEAP[$213] = $211;
      
      
      
      
      if (HEAP[HEAP[$chunk]] == 0) {
        __label__ = 60;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 60:
      
      
      
      
      var $222 = HEAP[HEAP[HEAP[$chunk] + 4] + 24];
      var $223 = HEAP[$chunk];
      FUNCTION_TABLE[$222]($223);
      __label__ = 61;
      break;
     case 61:
      __label__ = 4;
      break;
     case 62:
      
      
      if (HEAP[$chunks] != 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 63:
      var $226 = HEAP[$chunks];
      HEAP[$_py_tmp] = $226;
      HEAP[$chunks] = 0;
      
      
      
      var $230 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $232 = HEAP[$_py_tmp];
      HEAP[$232] = $230;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 64:
      
      
      
      
      var $241 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $242 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$241]($242);
      __label__ = 65;
      break;
     case 65:
      var $243 = HEAP[$next_end_ptr_addr];
      var $244 = HEAP[$end_addr];
      HEAP[$243] = $244;
      var $245 = HEAP[$rval];
      HEAP[$0] = $245;
      __label__ = 70;
      break;
     case 66:
      var $246 = HEAP[$next_end_ptr_addr];
      HEAP[$246] = -1;
      
      
      if (HEAP[$chunks] != 0) {
        __label__ = 67;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 67:
      
      
      
      var $252 = HEAP[HEAP[$chunks]] - 1;
      
      var $254 = HEAP[$chunks];
      HEAP[$254] = $252;
      
      
      
      
      if (HEAP[HEAP[$chunks]] == 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 68:
      
      
      
      
      var $263 = HEAP[HEAP[HEAP[$chunks] + 4] + 24];
      var $264 = HEAP[$chunks];
      FUNCTION_TABLE[$263]($264);
      __label__ = 69;
      break;
     case 69:
      HEAP[$0] = 0;
      __label__ = 70;
      break;
     case 70:
      var $265 = HEAP[$0];
      HEAP[$retval] = $265;
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
  function _scanstring_unicode($pystr, $end, $strict, $next_end_ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pystr_addr = __stackBase__;
      var $end_addr = __stackBase__ + 4;
      var $strict_addr = __stackBase__ + 8;
      var $next_end_ptr_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $rval = __stackBase__ + 24;
      var $len = __stackBase__ + 28;
      var $begin = __stackBase__ + 32;
      var $next = __stackBase__ + 36;
      var $buf = __stackBase__ + 40;
      var $chunks = __stackBase__ + 44;
      var $c = __stackBase__ + 48;
      var $chunk = __stackBase__ + 50;
      var $digit = __stackBase__ + 54;
      
      HEAP[$pystr_addr] = $pystr;
      HEAP[$end_addr] = $end;
      HEAP[$strict_addr] = $strict;
      HEAP[$next_end_ptr_addr] = $next_end_ptr;
      
      
      
      var $4 = HEAP[HEAP[$pystr_addr] + 8];
      HEAP[$len] = $4;
      
      var $6 = HEAP[$end_addr] - 1;
      HEAP[$begin] = $6;
      
      
      
      var $10 = HEAP[HEAP[$pystr_addr] + 12];
      HEAP[$buf] = $10;
      var $11 = _PyList_New(0);
      HEAP[$chunks] = $11;
      
      
      if (HEAP[$chunks] == 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$end_addr] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      if (HEAP[$len] <= HEAP[$end_addr]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $19 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($19, __str20);
      __label__ = 62;
      break;
     case 4:
      HEAP[$c] = 0;
      HEAP[$chunk] = 0;
      var $20 = HEAP[$end_addr];
      HEAP[$next] = $20;
      __label__ = 11;
      break;
     case 5:
      
      
      
      var $24 = HEAP[HEAP[$buf] + 2 * HEAP[$next]];
      HEAP[$c] = $24;
      
      
      if (HEAP[$c] == 34) {
        __label__ = 12;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if (HEAP[$c] == 92) {
        __label__ = 12;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if (HEAP[$strict_addr] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      if (HEAP[$c] <= 31) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $33 = HEAP[$pystr_addr];
      var $34 = HEAP[$next];
      _raise_errmsg(__str21, $33, $34);
      __label__ = 62;
      break;
     case 10:
      
      var $36 = HEAP[$next] + 1;
      HEAP[$next] = $36;
      __label__ = 11;
      break;
     case 11:
      
      
      
      if (HEAP[$next] < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if (HEAP[$c] != 34) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      if (HEAP[$c] != 92) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $44 = HEAP[$pystr_addr];
      var $45 = HEAP[$begin];
      _raise_errmsg(__str22, $44, $45);
      __label__ = 62;
      break;
     case 15:
      
      
      
      if (HEAP[$next] != HEAP[$end_addr]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 16:
      
      
      var $51 = HEAP[$next] - HEAP[$end_addr];
      
      
      var $54 = HEAP[$buf] + 2 * HEAP[$end_addr];
      var $55 = _PyUnicodeUCS2_FromUnicode($54, $51);
      HEAP[$chunk] = $55;
      
      
      if (HEAP[$chunk] == 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      var $58 = HEAP[$chunks];
      var $59 = HEAP[$chunk];
      var $60 = _PyList_Append($58, $59);
      
      if ($60 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      
      
      
      var $65 = HEAP[HEAP[$chunk]] - 1;
      
      var $67 = HEAP[$chunk];
      HEAP[$67] = $65;
      
      
      
      
      if (HEAP[HEAP[$chunk]] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $76 = HEAP[HEAP[HEAP[$chunk] + 4] + 24];
      var $77 = HEAP[$chunk];
      FUNCTION_TABLE[$76]($77);
      __label__ = 20;
      break;
     case 20:
      __label__ = 62;
      break;
     case 21:
      
      
      
      var $81 = HEAP[HEAP[$chunk]] - 1;
      
      var $83 = HEAP[$chunk];
      HEAP[$83] = $81;
      
      
      
      
      if (HEAP[HEAP[$chunk]] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $92 = HEAP[HEAP[HEAP[$chunk] + 4] + 24];
      var $93 = HEAP[$chunk];
      FUNCTION_TABLE[$92]($93);
      __label__ = 23;
      break;
     case 23:
      
      var $95 = HEAP[$next] + 1;
      HEAP[$next] = $95;
      
      
      if (HEAP[$c] == 34) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      var $98 = HEAP[$next];
      HEAP[$end_addr] = $98;
      var $99 = HEAP[$chunks];
      var $100 = _join_list_unicode($99);
      HEAP[$rval] = $100;
      
      
      if (HEAP[$rval] == 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 25:
      
      
      
      if (HEAP[$next] == HEAP[$len]) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      var $106 = HEAP[$pystr_addr];
      var $107 = HEAP[$begin];
      _raise_errmsg(__str22, $106, $107);
      __label__ = 62;
      break;
     case 27:
      
      
      
      var $111 = HEAP[HEAP[$buf] + 2 * HEAP[$next]];
      HEAP[$c] = $111;
      
      
      if (HEAP[$c] != 117) {
        __label__ = 28;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 28:
      
      var $115 = HEAP[$next] + 1;
      HEAP[$end_addr] = $115;
      
      var $117 = HEAP[$c];
      if ($117 == 34) {
        __label__ = 29;
        break;
      } else if ($117 == 47) {
        __label__ = 31;
        break;
      } else if ($117 == 92) {
        __label__ = 30;
        break;
      } else if ($117 == 98) {
        __label__ = 32;
        break;
      } else if ($117 == 102) {
        __label__ = 33;
        break;
      } else if ($117 == 110) {
        __label__ = 34;
        break;
      } else if ($117 == 114) {
        __label__ = 35;
        break;
      } else if ($117 == 116) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 29:
      __label__ = 38;
      break;
     case 30:
      __label__ = 38;
      break;
     case 31:
      __label__ = 38;
      break;
     case 32:
      HEAP[$c] = 8;
      __label__ = 38;
      break;
     case 33:
      HEAP[$c] = 12;
      __label__ = 38;
      break;
     case 34:
      HEAP[$c] = 10;
      __label__ = 38;
      break;
     case 35:
      HEAP[$c] = 13;
      __label__ = 38;
      break;
     case 36:
      HEAP[$c] = 9;
      __label__ = 38;
      break;
     case 37:
      HEAP[$c] = 0;
      __label__ = 38;
      break;
     case 38:
      
      
      if (HEAP[$c] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      var $121 = HEAP[$end_addr] - 2;
      var $122 = HEAP[$pystr_addr];
      _raise_errmsg(__str23, $122, $121);
      __label__ = 62;
      break;
     case 40:
      __label__ = 51;
      break;
     case 41:
      HEAP[$c] = 0;
      
      var $124 = HEAP[$next] + 1;
      HEAP[$next] = $124;
      
      var $126 = HEAP[$next] + 4;
      HEAP[$end_addr] = $126;
      
      
      
      if (HEAP[$end_addr] >= HEAP[$len]) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      var $131 = HEAP[$next] - 1;
      var $132 = HEAP[$pystr_addr];
      _raise_errmsg(__str24, $132, $131);
      __label__ = 62;
      break;
     case 43:
      __label__ = 50;
      break;
     case 44:
      
      
      
      var $136 = HEAP[HEAP[$buf] + 2 * HEAP[$next]];
      HEAP[$digit] = $136;
      
      var $138 = HEAP[$c] << 4;
      HEAP[$c] = $138;
      
      var $140 = HEAP[$digit];
      if ($140 == 48) {
        __label__ = 45;
        break;
      } else if ($140 == 49) {
        __label__ = 45;
        break;
      } else if ($140 == 50) {
        __label__ = 45;
        break;
      } else if ($140 == 51) {
        __label__ = 45;
        break;
      } else if ($140 == 52) {
        __label__ = 45;
        break;
      } else if ($140 == 53) {
        __label__ = 45;
        break;
      } else if ($140 == 54) {
        __label__ = 45;
        break;
      } else if ($140 == 55) {
        __label__ = 45;
        break;
      } else if ($140 == 56) {
        __label__ = 45;
        break;
      } else if ($140 == 57) {
        __label__ = 45;
        break;
      } else if ($140 == 65) {
        __label__ = 47;
        break;
      } else if ($140 == 66) {
        __label__ = 47;
        break;
      } else if ($140 == 67) {
        __label__ = 47;
        break;
      } else if ($140 == 68) {
        __label__ = 47;
        break;
      } else if ($140 == 69) {
        __label__ = 47;
        break;
      } else if ($140 == 70) {
        __label__ = 47;
        break;
      } else if ($140 == 97) {
        __label__ = 46;
        break;
      } else if ($140 == 98) {
        __label__ = 46;
        break;
      } else if ($140 == 99) {
        __label__ = 46;
        break;
      } else if ($140 == 100) {
        __label__ = 46;
        break;
      } else if ($140 == 101) {
        __label__ = 46;
        break;
      } else if ($140 == 102) {
        __label__ = 46;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 45:
      
      
      
      var $144 = HEAP[$digit] - 48 | HEAP[$c];
      HEAP[$c] = $144;
      __label__ = 49;
      break;
     case 46:
      
      
      
      var $148 = HEAP[$digit] - 87 | HEAP[$c];
      HEAP[$c] = $148;
      __label__ = 49;
      break;
     case 47:
      
      
      
      var $152 = HEAP[$digit] - 55 | HEAP[$c];
      HEAP[$c] = $152;
      __label__ = 49;
      break;
     case 48:
      
      var $154 = HEAP[$end_addr] - 5;
      var $155 = HEAP[$pystr_addr];
      _raise_errmsg(__str24, $155, $154);
      __label__ = 62;
      break;
     case 49:
      
      var $157 = HEAP[$next] + 1;
      HEAP[$next] = $157;
      __label__ = 50;
      break;
     case 50:
      
      
      
      if (HEAP[$next] < HEAP[$end_addr]) {
        __label__ = 44;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 51:
      var $161 = _PyUnicodeUCS2_FromUnicode($c, 1);
      HEAP[$chunk] = $161;
      
      
      if (HEAP[$chunk] == 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 52:
      var $164 = HEAP[$chunks];
      var $165 = HEAP[$chunk];
      var $166 = _PyList_Append($164, $165);
      
      if ($166 != 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 53:
      
      
      
      var $171 = HEAP[HEAP[$chunk]] - 1;
      
      var $173 = HEAP[$chunk];
      HEAP[$173] = $171;
      
      
      
      
      if (HEAP[HEAP[$chunk]] == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      
      
      
      
      var $182 = HEAP[HEAP[HEAP[$chunk] + 4] + 24];
      var $183 = HEAP[$chunk];
      FUNCTION_TABLE[$182]($183);
      __label__ = 55;
      break;
     case 55:
      __label__ = 62;
      break;
     case 56:
      
      
      
      var $187 = HEAP[HEAP[$chunk]] - 1;
      
      var $189 = HEAP[$chunk];
      HEAP[$189] = $187;
      
      
      
      
      if (HEAP[HEAP[$chunk]] == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      
      
      
      
      var $198 = HEAP[HEAP[HEAP[$chunk] + 4] + 24];
      var $199 = HEAP[$chunk];
      FUNCTION_TABLE[$198]($199);
      __label__ = 58;
      break;
     case 58:
      __label__ = 4;
      break;
     case 59:
      
      
      
      var $203 = HEAP[HEAP[$chunks]] - 1;
      
      var $205 = HEAP[$chunks];
      HEAP[$205] = $203;
      
      
      
      
      if (HEAP[HEAP[$chunks]] == 0) {
        __label__ = 60;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 60:
      
      
      
      
      var $214 = HEAP[HEAP[HEAP[$chunks] + 4] + 24];
      var $215 = HEAP[$chunks];
      FUNCTION_TABLE[$214]($215);
      __label__ = 61;
      break;
     case 61:
      var $216 = HEAP[$next_end_ptr_addr];
      var $217 = HEAP[$end_addr];
      HEAP[$216] = $217;
      var $218 = HEAP[$rval];
      HEAP[$0] = $218;
      __label__ = 66;
      break;
     case 62:
      var $219 = HEAP[$next_end_ptr_addr];
      HEAP[$219] = -1;
      
      
      if (HEAP[$chunks] != 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 63:
      
      
      
      var $225 = HEAP[HEAP[$chunks]] - 1;
      
      var $227 = HEAP[$chunks];
      HEAP[$227] = $225;
      
      
      
      
      if (HEAP[HEAP[$chunks]] == 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 64:
      
      
      
      
      var $236 = HEAP[HEAP[HEAP[$chunks] + 4] + 24];
      var $237 = HEAP[$chunks];
      FUNCTION_TABLE[$236]($237);
      __label__ = 65;
      break;
     case 65:
      HEAP[$0] = 0;
      __label__ = 66;
      break;
     case 66:
      var $238 = HEAP[$0];
      HEAP[$retval] = $238;
      __label__ = 67;
      break;
     case 67:
      var $retval65 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval65;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _py_scanstring($self, $args) {
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
      var $pystr = __stackBase__ + 16;
      var $rval = __stackBase__ + 20;
      var $end = __stackBase__ + 24;
      var $next_end = __stackBase__ + 28;
      var $encoding = __stackBase__ + 32;
      var $strict = __stackBase__ + 36;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$next_end] = -1;
      HEAP[$encoding] = 0;
      HEAP[$strict] = 1;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str25, allocate([ $pystr, 0, 0, 0, FUNCTION_TABLE_OFFSET + 4, 0, 0, 0, $end, 0, 0, 0, $encoding, 0, 0, 0, $strict, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32 (%struct.PyObject*, i32*)*", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$encoding] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$encoding] = __str26;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$pystr] + 4] + 84] & 134217728) != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $13 = HEAP[$strict];
      var $14 = HEAP[$encoding];
      var $15 = HEAP[$end];
      var $16 = HEAP[$pystr];
      var $17 = _scanstring_str($16, $15, $14, $13, $next_end);
      HEAP[$rval] = $17;
      __label__ = 9;
      break;
     case 6:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$pystr] + 4] + 84] & 268435456) != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $25 = HEAP[$strict];
      var $26 = HEAP[$end];
      var $27 = HEAP[$pystr];
      var $28 = _scanstring_unicode($27, $26, $25, $next_end);
      HEAP[$rval] = $28;
      __label__ = 9;
      break;
     case 8:
      
      
      
      
      var $33 = HEAP[HEAP[HEAP[$pystr] + 4] + 12];
      var $34 = HEAP[_PyExc_TypeError];
      var $35 = _PyErr_Format($34, __str27, allocate([ $33, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 9:
      var $36 = HEAP[$next_end];
      var $37 = HEAP[$rval];
      var $38 = __build_rval_index_tuple($37, $36);
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
  function _py_encode_basestring_ascii($self, $pystr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $pystr_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $self;
      HEAP[$pystr_addr] = $pystr;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$pystr_addr] + 4] + 84] & 134217728) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $8 = HEAP[$pystr_addr];
      var $9 = _ascii_escape_str($8);
      HEAP[$0] = $9;
      __label__ = 5;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$pystr_addr] + 4] + 84] & 268435456) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $17 = HEAP[$pystr_addr];
      var $18 = _ascii_escape_unicode($17);
      HEAP[$0] = $18;
      __label__ = 5;
      break;
     case 4:
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$pystr_addr] + 4] + 12];
      var $24 = HEAP[_PyExc_TypeError];
      var $25 = _PyErr_Format($24, __str27, allocate([ $23, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $26 = HEAP[$0];
      HEAP[$retval] = $26;
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
  function _scanner_dealloc($self) {
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
      var $0 = HEAP[$self_addr];
      var $1 = _scanner_clear($0);
      
      
      
      
      var $6 = HEAP[HEAP[HEAP[$self_addr] + 4] + 160];
      
      var $8 = HEAP[$self_addr];
      FUNCTION_TABLE[$6]($8);
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _scanner_traverse($self, $visit, $arg) {
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
      var $s = __stackBase__ + 20;
      var $vret = __stackBase__ + 24;
      var $vret7 = __stackBase__ + 28;
      var $vret11 = __stackBase__ + 32;
      var $vret15 = __stackBase__ + 36;
      var $vret19 = __stackBase__ + 40;
      var $vret23 = __stackBase__ + 44;
      var $vret27 = __stackBase__ + 48;
      
      HEAP[$self_addr] = $self;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 4] != _PyScannerType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyScannerType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str28, __str29, 852, ___PRETTY_FUNCTION___9156);
      throw "Reached an unreachable!";
     case 3:
      
      var $11 = HEAP[$self_addr];
      HEAP[$s] = $11;
      
      
      
      
      if (HEAP[HEAP[$s] + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $18 = HEAP[HEAP[$s] + 8];
      var $19 = HEAP[$visit_addr];
      var $20 = HEAP[$arg_addr];
      var $21 = FUNCTION_TABLE[$19]($18, $20);
      HEAP[$vret] = $21;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $24 = HEAP[$vret];
      HEAP[$0] = $24;
      __label__ = 25;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$s] + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $31 = HEAP[HEAP[$s] + 12];
      var $32 = HEAP[$visit_addr];
      var $33 = HEAP[$arg_addr];
      var $34 = FUNCTION_TABLE[$32]($31, $33);
      HEAP[$vret7] = $34;
      
      
      if (HEAP[$vret7] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $37 = HEAP[$vret7];
      HEAP[$0] = $37;
      __label__ = 25;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$s] + 16] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $44 = HEAP[HEAP[$s] + 16];
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
      __label__ = 25;
      break;
     case 12:
      
      
      
      
      if (HEAP[HEAP[$s] + 20] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      var $57 = HEAP[HEAP[$s] + 20];
      var $58 = HEAP[$visit_addr];
      var $59 = HEAP[$arg_addr];
      var $60 = FUNCTION_TABLE[$58]($57, $59);
      HEAP[$vret15] = $60;
      
      
      if (HEAP[$vret15] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $63 = HEAP[$vret15];
      HEAP[$0] = $63;
      __label__ = 25;
      break;
     case 15:
      
      
      
      
      if (HEAP[HEAP[$s] + 24] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      var $70 = HEAP[HEAP[$s] + 24];
      var $71 = HEAP[$visit_addr];
      var $72 = HEAP[$arg_addr];
      var $73 = FUNCTION_TABLE[$71]($70, $72);
      HEAP[$vret19] = $73;
      
      
      if (HEAP[$vret19] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $76 = HEAP[$vret19];
      HEAP[$0] = $76;
      __label__ = 25;
      break;
     case 18:
      
      
      
      
      if (HEAP[HEAP[$s] + 28] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $83 = HEAP[HEAP[$s] + 28];
      var $84 = HEAP[$visit_addr];
      var $85 = HEAP[$arg_addr];
      var $86 = FUNCTION_TABLE[$84]($83, $85);
      HEAP[$vret23] = $86;
      
      
      if (HEAP[$vret23] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $89 = HEAP[$vret23];
      HEAP[$0] = $89;
      __label__ = 25;
      break;
     case 21:
      
      
      
      
      if (HEAP[HEAP[$s] + 32] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      var $96 = HEAP[HEAP[$s] + 32];
      var $97 = HEAP[$visit_addr];
      var $98 = HEAP[$arg_addr];
      var $99 = FUNCTION_TABLE[$97]($96, $98);
      HEAP[$vret27] = $99;
      
      
      if (HEAP[$vret27] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      var $102 = HEAP[$vret27];
      HEAP[$0] = $102;
      __label__ = 25;
      break;
     case 24:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 25:
      var $103 = HEAP[$0];
      HEAP[$retval] = $103;
      __label__ = 26;
      break;
     case 26:
      var $retval31 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval31;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _scanner_clear($self) {
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
      var $s = __stackBase__ + 12;
      var $_py_tmp = __stackBase__ + 16;
      var $_py_tmp7 = __stackBase__ + 20;
      var $_py_tmp11 = __stackBase__ + 24;
      var $_py_tmp15 = __stackBase__ + 28;
      var $_py_tmp19 = __stackBase__ + 32;
      var $_py_tmp23 = __stackBase__ + 36;
      var $_py_tmp27 = __stackBase__ + 40;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 4] != _PyScannerType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyScannerType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str28, __str29, 868, ___PRETTY_FUNCTION___9226);
      throw "Reached an unreachable!";
     case 3:
      
      var $11 = HEAP[$self_addr];
      HEAP[$s] = $11;
      
      
      
      
      if (HEAP[HEAP[$s] + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $18 = HEAP[HEAP[$s] + 8];
      HEAP[$_py_tmp] = $18;
      
      var $20 = HEAP[$s] + 8;
      HEAP[$20] = 0;
      
      
      
      var $24 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $26 = HEAP[$_py_tmp];
      HEAP[$26] = $24;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $35 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $36 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$35]($36);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$s] + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $43 = HEAP[HEAP[$s] + 12];
      HEAP[$_py_tmp7] = $43;
      
      var $45 = HEAP[$s] + 12;
      HEAP[$45] = 0;
      
      
      
      var $49 = HEAP[HEAP[$_py_tmp7]] - 1;
      
      var $51 = HEAP[$_py_tmp7];
      HEAP[$51] = $49;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp7]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[$_py_tmp7] + 4] + 24];
      var $61 = HEAP[$_py_tmp7];
      FUNCTION_TABLE[$60]($61);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$s] + 16] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $68 = HEAP[HEAP[$s] + 16];
      HEAP[$_py_tmp11] = $68;
      
      var $70 = HEAP[$s] + 16;
      HEAP[$70] = 0;
      
      
      
      var $74 = HEAP[HEAP[$_py_tmp11]] - 1;
      
      var $76 = HEAP[$_py_tmp11];
      HEAP[$76] = $74;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp11]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $85 = HEAP[HEAP[HEAP[$_py_tmp11] + 4] + 24];
      var $86 = HEAP[$_py_tmp11];
      FUNCTION_TABLE[$85]($86);
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      if (HEAP[HEAP[$s] + 20] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      var $93 = HEAP[HEAP[$s] + 20];
      HEAP[$_py_tmp15] = $93;
      
      var $95 = HEAP[$s] + 20;
      HEAP[$95] = 0;
      
      
      
      var $99 = HEAP[HEAP[$_py_tmp15]] - 1;
      
      var $101 = HEAP[$_py_tmp15];
      HEAP[$101] = $99;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp15]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $110 = HEAP[HEAP[HEAP[$_py_tmp15] + 4] + 24];
      var $111 = HEAP[$_py_tmp15];
      FUNCTION_TABLE[$110]($111);
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      if (HEAP[HEAP[$s] + 24] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      var $118 = HEAP[HEAP[$s] + 24];
      HEAP[$_py_tmp19] = $118;
      
      var $120 = HEAP[$s] + 24;
      HEAP[$120] = 0;
      
      
      
      var $124 = HEAP[HEAP[$_py_tmp19]] - 1;
      
      var $126 = HEAP[$_py_tmp19];
      HEAP[$126] = $124;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp19]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $135 = HEAP[HEAP[HEAP[$_py_tmp19] + 4] + 24];
      var $136 = HEAP[$_py_tmp19];
      FUNCTION_TABLE[$135]($136);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      if (HEAP[HEAP[$s] + 28] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $143 = HEAP[HEAP[$s] + 28];
      HEAP[$_py_tmp23] = $143;
      
      var $145 = HEAP[$s] + 28;
      HEAP[$145] = 0;
      
      
      
      var $149 = HEAP[HEAP[$_py_tmp23]] - 1;
      
      var $151 = HEAP[$_py_tmp23];
      HEAP[$151] = $149;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp23]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $160 = HEAP[HEAP[HEAP[$_py_tmp23] + 4] + 24];
      var $161 = HEAP[$_py_tmp23];
      FUNCTION_TABLE[$160]($161);
      __label__ = 21;
      break;
     case 21:
      
      
      
      
      if (HEAP[HEAP[$s] + 32] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      var $168 = HEAP[HEAP[$s] + 32];
      HEAP[$_py_tmp27] = $168;
      
      var $170 = HEAP[$s] + 32;
      HEAP[$170] = 0;
      
      
      
      var $174 = HEAP[HEAP[$_py_tmp27]] - 1;
      
      var $176 = HEAP[$_py_tmp27];
      HEAP[$176] = $174;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp27]] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $185 = HEAP[HEAP[HEAP[$_py_tmp27] + 4] + 24];
      var $186 = HEAP[$_py_tmp27];
      FUNCTION_TABLE[$185]($186);
      __label__ = 24;
      break;
     case 24:
      HEAP[$0] = 0;
      var $187 = HEAP[$0];
      HEAP[$retval] = $187;
      __label__ = 25;
      break;
     case 25:
      var $retval30 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval30;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __parse_object_str($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 76;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 76);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $pystr_addr = __stackBase__ + 4;
      var $idx_addr = __stackBase__ + 8;
      var $next_idx_ptr_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $str = __stackBase__ + 24;
      var $end_idx = __stackBase__ + 28;
      var $rval = __stackBase__ + 32;
      var $pairs = __stackBase__ + 36;
      var $item = __stackBase__ + 40;
      var $key = __stackBase__ + 44;
      var $val = __stackBase__ + 48;
      var $encoding = __stackBase__ + 52;
      var $strict = __stackBase__ + 56;
      var $next_idx = __stackBase__ + 60;
      var $_py_tmp = __stackBase__ + 64;
      var $_py_tmp38 = __stackBase__ + 68;
      var $_py_tmp76 = __stackBase__ + 72;
      
      HEAP[$s_addr] = $s;
      HEAP[$pystr_addr] = $pystr;
      HEAP[$idx_addr] = $idx;
      HEAP[$next_idx_ptr_addr] = $next_idx_ptr;
      
      
      
      var $4 = HEAP[$pystr_addr] + 20;
      HEAP[$str] = $4;
      
      
      
      
      var $9 = HEAP[HEAP[$pystr_addr] + 8] - 1;
      HEAP[$end_idx] = $9;
      HEAP[$key] = 0;
      HEAP[$val] = 0;
      
      
      
      
      
      var $15 = HEAP[HEAP[$s_addr] + 8] + 20;
      HEAP[$encoding] = $15;
      
      
      var $18 = HEAP[HEAP[$s_addr] + 12];
      var $19 = _PyObject_IsTrue($18);
      HEAP[$strict] = $19;
      var $20 = _PyList_New(0);
      HEAP[$pairs] = $20;
      
      
      if (HEAP[$pairs] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 93;
      break;
     case 2:
      __label__ = 4;
      break;
     case 3:
      
      var $24 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $24;
      __label__ = 4;
      break;
     case 4:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 32) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 9) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 10) {
        __label__ = 3;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 13) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      if (HEAP[$idx_addr] <= HEAP[$end_idx]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 10:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] != 125) {
        __label__ = 11;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 11:
      __label__ = 64;
      break;
     case 12:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] != 34) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $61 = HEAP[$pystr_addr];
      var $62 = HEAP[$idx_addr];
      _raise_errmsg(__str30, $61, $62);
      __label__ = 83;
      break;
     case 14:
      
      var $64 = HEAP[$idx_addr] + 1;
      var $65 = HEAP[$pystr_addr];
      var $66 = HEAP[$encoding];
      var $67 = HEAP[$strict];
      var $68 = _scanstring_str($65, $64, $66, $67, $next_idx);
      HEAP[$key] = $68;
      
      
      if (HEAP[$key] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $71 = HEAP[$next_idx];
      HEAP[$idx_addr] = $71;
      __label__ = 17;
      break;
     case 16:
      
      var $73 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $73;
      __label__ = 17;
      break;
     case 17:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 32) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 9) {
        __label__ = 16;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 10) {
        __label__ = 16;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 13) {
        __label__ = 16;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] != 58) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      var $105 = HEAP[$pystr_addr];
      var $106 = HEAP[$idx_addr];
      _raise_errmsg(__str31, $105, $106);
      __label__ = 83;
      break;
     case 25:
      
      var $108 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $108;
      __label__ = 27;
      break;
     case 26:
      
      var $110 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $110;
      __label__ = 27;
      break;
     case 27:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 32;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 32) {
        __label__ = 26;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 9) {
        __label__ = 26;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 10) {
        __label__ = 26;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 13) {
        __label__ = 26;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      var $134 = HEAP[$s_addr];
      var $135 = HEAP[$pystr_addr];
      var $136 = HEAP[$idx_addr];
      var $137 = _scan_once_str($134, $135, $136, $next_idx);
      HEAP[$val] = $137;
      
      
      if (HEAP[$val] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      var $140 = HEAP[$key];
      var $141 = HEAP[$val];
      var $142 = _PyTuple_Pack(2, allocate([ $140, 0, 0, 0, $141, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$item] = $142;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      if (HEAP[$key] != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 35:
      var $147 = HEAP[$key];
      HEAP[$_py_tmp] = $147;
      HEAP[$key] = 0;
      
      
      
      var $151 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $153 = HEAP[$_py_tmp];
      HEAP[$153] = $151;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      var $162 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $163 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$162]($163);
      __label__ = 37;
      break;
     case 37:
      
      
      if (HEAP[$val] != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 38:
      var $166 = HEAP[$val];
      HEAP[$_py_tmp38] = $166;
      HEAP[$val] = 0;
      
      
      
      var $170 = HEAP[HEAP[$_py_tmp38]] - 1;
      
      var $172 = HEAP[$_py_tmp38];
      HEAP[$172] = $170;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp38]] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      var $181 = HEAP[HEAP[HEAP[$_py_tmp38] + 4] + 24];
      var $182 = HEAP[$_py_tmp38];
      FUNCTION_TABLE[$181]($182);
      __label__ = 40;
      break;
     case 40:
      var $183 = HEAP[$pairs];
      var $184 = HEAP[$item];
      var $185 = _PyList_Append($183, $184);
      var $186 = $185 == -1;
      if ($186) {
        __label__ = 41;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 41:
      
      
      
      var $190 = HEAP[HEAP[$item]] - 1;
      
      var $192 = HEAP[$item];
      HEAP[$192] = $190;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $201 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $202 = HEAP[$item];
      FUNCTION_TABLE[$201]($202);
      __label__ = 43;
      break;
     case 43:
      __label__ = 83;
      break;
     case 44:
      
      
      
      var $206 = HEAP[HEAP[$item]] - 1;
      
      var $208 = HEAP[$item];
      HEAP[$208] = $206;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      var $217 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $218 = HEAP[$item];
      FUNCTION_TABLE[$217]($218);
      __label__ = 46;
      break;
     case 46:
      var $219 = HEAP[$next_idx];
      HEAP[$idx_addr] = $219;
      __label__ = 48;
      break;
     case 47:
      
      var $221 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $221;
      __label__ = 48;
      break;
     case 48:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 53;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 49:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 32) {
        __label__ = 47;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 50:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 9) {
        __label__ = 47;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 51:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 10) {
        __label__ = 47;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 52:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 13) {
        __label__ = 47;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 53:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 65;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 54:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 125) {
        __label__ = 65;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 55:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] != 44) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      var $258 = HEAP[$pystr_addr];
      var $259 = HEAP[$idx_addr];
      _raise_errmsg(__str32, $258, $259);
      __label__ = 83;
      break;
     case 57:
      
      var $261 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $261;
      __label__ = 59;
      break;
     case 58:
      
      var $263 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $263;
      __label__ = 59;
      break;
     case 59:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 64;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 60:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 32) {
        __label__ = 58;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 61:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 9) {
        __label__ = 58;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 62:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 10) {
        __label__ = 58;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 63:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 13) {
        __label__ = 58;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 64:
      
      
      
      if (HEAP[$idx_addr] <= HEAP[$end_idx]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 65:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 67;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 66:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] != 125) {
        __label__ = 67;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 67:
      var $298 = HEAP[$pystr_addr];
      var $299 = HEAP[$end_idx];
      _raise_errmsg(__str33, $298, $299);
      __label__ = 83;
      break;
     case 68:
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 20] != __Py_NoneStruct) {
        __label__ = 69;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 69:
      
      
      var $306 = HEAP[HEAP[$s_addr] + 20];
      var $307 = HEAP[$pairs];
      var $308 = _PyObject_CallFunctionObjArgs($306, allocate([ $307, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$val] = $308;
      
      
      if (HEAP[$val] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 70:
      
      
      
      var $314 = HEAP[HEAP[$pairs]] - 1;
      
      var $316 = HEAP[$pairs];
      HEAP[$316] = $314;
      
      
      
      
      if (HEAP[HEAP[$pairs]] == 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 71:
      
      
      
      
      var $325 = HEAP[HEAP[HEAP[$pairs] + 4] + 24];
      var $326 = HEAP[$pairs];
      FUNCTION_TABLE[$325]($326);
      __label__ = 72;
      break;
     case 72:
      
      var $328 = HEAP[$idx_addr] + 1;
      var $329 = HEAP[$next_idx_ptr_addr];
      HEAP[$329] = $328;
      var $330 = HEAP[$val];
      HEAP[$0] = $330;
      __label__ = 93;
      break;
     case 73:
      var $331 = HEAP[$pairs];
      var $332 = _PyObject_CallFunctionObjArgs(_PyDict_Type, allocate([ $331, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$rval] = $332;
      
      
      if (HEAP[$rval] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 74:
      
      
      if (HEAP[$pairs] != 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 75:
      var $337 = HEAP[$pairs];
      HEAP[$_py_tmp76] = $337;
      HEAP[$pairs] = 0;
      
      
      
      var $341 = HEAP[HEAP[$_py_tmp76]] - 1;
      
      var $343 = HEAP[$_py_tmp76];
      HEAP[$343] = $341;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp76]] == 0) {
        __label__ = 76;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 76:
      
      
      
      
      var $352 = HEAP[HEAP[HEAP[$_py_tmp76] + 4] + 24];
      var $353 = HEAP[$_py_tmp76];
      FUNCTION_TABLE[$352]($353);
      __label__ = 77;
      break;
     case 77:
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 16] != __Py_NoneStruct) {
        __label__ = 78;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 78:
      
      
      var $360 = HEAP[HEAP[$s_addr] + 16];
      var $361 = HEAP[$rval];
      var $362 = _PyObject_CallFunctionObjArgs($360, allocate([ $361, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$val] = $362;
      
      
      if (HEAP[$val] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 79:
      
      
      
      var $368 = HEAP[HEAP[$rval]] - 1;
      
      var $370 = HEAP[$rval];
      HEAP[$370] = $368;
      
      
      
      
      if (HEAP[HEAP[$rval]] == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 80:
      
      
      
      
      var $379 = HEAP[HEAP[HEAP[$rval] + 4] + 24];
      var $380 = HEAP[$rval];
      FUNCTION_TABLE[$379]($380);
      __label__ = 81;
      break;
     case 81:
      var $381 = HEAP[$val];
      HEAP[$rval] = $381;
      HEAP[$val] = 0;
      __label__ = 82;
      break;
     case 82:
      
      var $383 = HEAP[$idx_addr] + 1;
      var $384 = HEAP[$next_idx_ptr_addr];
      HEAP[$384] = $383;
      var $385 = HEAP[$rval];
      HEAP[$0] = $385;
      __label__ = 93;
      break;
     case 83:
      
      
      if (HEAP[$key] != 0) {
        __label__ = 84;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 84:
      
      
      
      var $391 = HEAP[HEAP[$key]] - 1;
      
      var $393 = HEAP[$key];
      HEAP[$393] = $391;
      
      
      
      
      if (HEAP[HEAP[$key]] == 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      
      
      
      
      var $402 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $403 = HEAP[$key];
      FUNCTION_TABLE[$402]($403);
      __label__ = 86;
      break;
     case 86:
      
      
      if (HEAP[$val] != 0) {
        __label__ = 87;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 87:
      
      
      
      var $409 = HEAP[HEAP[$val]] - 1;
      
      var $411 = HEAP[$val];
      HEAP[$411] = $409;
      
      
      
      
      if (HEAP[HEAP[$val]] == 0) {
        __label__ = 88;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 88:
      
      
      
      
      var $420 = HEAP[HEAP[HEAP[$val] + 4] + 24];
      var $421 = HEAP[$val];
      FUNCTION_TABLE[$420]($421);
      __label__ = 89;
      break;
     case 89:
      
      
      if (HEAP[$pairs] != 0) {
        __label__ = 90;
        break;
      } else {
        __label__ = 92;
        break;
      }
     case 90:
      
      
      
      var $427 = HEAP[HEAP[$pairs]] - 1;
      
      var $429 = HEAP[$pairs];
      HEAP[$429] = $427;
      
      
      
      
      if (HEAP[HEAP[$pairs]] == 0) {
        __label__ = 91;
        break;
      } else {
        __label__ = 92;
        break;
      }
     case 91:
      
      
      
      
      var $438 = HEAP[HEAP[HEAP[$pairs] + 4] + 24];
      var $439 = HEAP[$pairs];
      FUNCTION_TABLE[$438]($439);
      __label__ = 92;
      break;
     case 92:
      HEAP[$0] = 0;
      __label__ = 93;
      break;
     case 93:
      var $440 = HEAP[$0];
      HEAP[$retval] = $440;
      __label__ = 94;
      break;
     case 94:
      var $retval94 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval94;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __parse_object_unicode($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 72;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $pystr_addr = __stackBase__ + 4;
      var $idx_addr = __stackBase__ + 8;
      var $next_idx_ptr_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $str = __stackBase__ + 24;
      var $end_idx = __stackBase__ + 28;
      var $rval = __stackBase__ + 32;
      var $pairs = __stackBase__ + 36;
      var $item = __stackBase__ + 40;
      var $key = __stackBase__ + 44;
      var $val = __stackBase__ + 48;
      var $strict = __stackBase__ + 52;
      var $next_idx = __stackBase__ + 56;
      var $_py_tmp = __stackBase__ + 60;
      var $_py_tmp38 = __stackBase__ + 64;
      var $_py_tmp76 = __stackBase__ + 68;
      
      HEAP[$s_addr] = $s;
      HEAP[$pystr_addr] = $pystr;
      HEAP[$idx_addr] = $idx;
      HEAP[$next_idx_ptr_addr] = $next_idx_ptr;
      
      
      
      var $4 = HEAP[HEAP[$pystr_addr] + 12];
      HEAP[$str] = $4;
      
      
      
      
      var $9 = HEAP[HEAP[$pystr_addr] + 8] - 1;
      HEAP[$end_idx] = $9;
      HEAP[$key] = 0;
      HEAP[$val] = 0;
      
      
      var $12 = HEAP[HEAP[$s_addr] + 12];
      var $13 = _PyObject_IsTrue($12);
      HEAP[$strict] = $13;
      var $14 = _PyList_New(0);
      HEAP[$pairs] = $14;
      
      
      if (HEAP[$pairs] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 93;
      break;
     case 2:
      __label__ = 4;
      break;
     case 3:
      
      var $18 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $18;
      __label__ = 4;
      break;
     case 4:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 32) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 9) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 10) {
        __label__ = 3;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 13) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      if (HEAP[$idx_addr] <= HEAP[$end_idx]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 10:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] != 125) {
        __label__ = 11;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 11:
      __label__ = 64;
      break;
     case 12:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] != 34) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $55 = HEAP[$pystr_addr];
      var $56 = HEAP[$idx_addr];
      _raise_errmsg(__str30, $55, $56);
      __label__ = 83;
      break;
     case 14:
      
      var $58 = HEAP[$idx_addr] + 1;
      var $59 = HEAP[$pystr_addr];
      var $60 = HEAP[$strict];
      var $61 = _scanstring_unicode($59, $58, $60, $next_idx);
      HEAP[$key] = $61;
      
      
      if (HEAP[$key] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $64 = HEAP[$next_idx];
      HEAP[$idx_addr] = $64;
      __label__ = 17;
      break;
     case 16:
      
      var $66 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $66;
      __label__ = 17;
      break;
     case 17:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 32) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 9) {
        __label__ = 16;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 10) {
        __label__ = 16;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 13) {
        __label__ = 16;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] != 58) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      var $98 = HEAP[$pystr_addr];
      var $99 = HEAP[$idx_addr];
      _raise_errmsg(__str31, $98, $99);
      __label__ = 83;
      break;
     case 25:
      
      var $101 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $101;
      __label__ = 27;
      break;
     case 26:
      
      var $103 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $103;
      __label__ = 27;
      break;
     case 27:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 32;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 32) {
        __label__ = 26;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 9) {
        __label__ = 26;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 10) {
        __label__ = 26;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 13) {
        __label__ = 26;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      var $127 = HEAP[$s_addr];
      var $128 = HEAP[$pystr_addr];
      var $129 = HEAP[$idx_addr];
      var $130 = _scan_once_unicode($127, $128, $129, $next_idx);
      HEAP[$val] = $130;
      
      
      if (HEAP[$val] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      var $133 = HEAP[$key];
      var $134 = HEAP[$val];
      var $135 = _PyTuple_Pack(2, allocate([ $133, 0, 0, 0, $134, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$item] = $135;
      
      
      if (HEAP[$item] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      if (HEAP[$key] != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 35:
      var $140 = HEAP[$key];
      HEAP[$_py_tmp] = $140;
      HEAP[$key] = 0;
      
      
      
      var $144 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $146 = HEAP[$_py_tmp];
      HEAP[$146] = $144;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      var $155 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $156 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$155]($156);
      __label__ = 37;
      break;
     case 37:
      
      
      if (HEAP[$val] != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 38:
      var $159 = HEAP[$val];
      HEAP[$_py_tmp38] = $159;
      HEAP[$val] = 0;
      
      
      
      var $163 = HEAP[HEAP[$_py_tmp38]] - 1;
      
      var $165 = HEAP[$_py_tmp38];
      HEAP[$165] = $163;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp38]] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      var $174 = HEAP[HEAP[HEAP[$_py_tmp38] + 4] + 24];
      var $175 = HEAP[$_py_tmp38];
      FUNCTION_TABLE[$174]($175);
      __label__ = 40;
      break;
     case 40:
      var $176 = HEAP[$pairs];
      var $177 = HEAP[$item];
      var $178 = _PyList_Append($176, $177);
      var $179 = $178 == -1;
      if ($179) {
        __label__ = 41;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 41:
      
      
      
      var $183 = HEAP[HEAP[$item]] - 1;
      
      var $185 = HEAP[$item];
      HEAP[$185] = $183;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $194 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $195 = HEAP[$item];
      FUNCTION_TABLE[$194]($195);
      __label__ = 43;
      break;
     case 43:
      __label__ = 83;
      break;
     case 44:
      
      
      
      var $199 = HEAP[HEAP[$item]] - 1;
      
      var $201 = HEAP[$item];
      HEAP[$201] = $199;
      
      
      
      
      if (HEAP[HEAP[$item]] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      var $210 = HEAP[HEAP[HEAP[$item] + 4] + 24];
      var $211 = HEAP[$item];
      FUNCTION_TABLE[$210]($211);
      __label__ = 46;
      break;
     case 46:
      var $212 = HEAP[$next_idx];
      HEAP[$idx_addr] = $212;
      __label__ = 48;
      break;
     case 47:
      
      var $214 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $214;
      __label__ = 48;
      break;
     case 48:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 53;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 49:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 32) {
        __label__ = 47;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 50:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 9) {
        __label__ = 47;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 51:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 10) {
        __label__ = 47;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 52:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 13) {
        __label__ = 47;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 53:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 65;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 54:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 125) {
        __label__ = 65;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 55:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] != 44) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      var $251 = HEAP[$pystr_addr];
      var $252 = HEAP[$idx_addr];
      _raise_errmsg(__str32, $251, $252);
      __label__ = 83;
      break;
     case 57:
      
      var $254 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $254;
      __label__ = 59;
      break;
     case 58:
      
      var $256 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $256;
      __label__ = 59;
      break;
     case 59:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 64;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 60:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 32) {
        __label__ = 58;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 61:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 9) {
        __label__ = 58;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 62:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 10) {
        __label__ = 58;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 63:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 13) {
        __label__ = 58;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 64:
      
      
      
      if (HEAP[$idx_addr] <= HEAP[$end_idx]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 65:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 67;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 66:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] != 125) {
        __label__ = 67;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 67:
      var $291 = HEAP[$pystr_addr];
      var $292 = HEAP[$end_idx];
      _raise_errmsg(__str33, $291, $292);
      __label__ = 83;
      break;
     case 68:
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 20] != __Py_NoneStruct) {
        __label__ = 69;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 69:
      
      
      var $299 = HEAP[HEAP[$s_addr] + 20];
      var $300 = HEAP[$pairs];
      var $301 = _PyObject_CallFunctionObjArgs($299, allocate([ $300, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$val] = $301;
      
      
      if (HEAP[$val] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 70:
      
      
      
      var $307 = HEAP[HEAP[$pairs]] - 1;
      
      var $309 = HEAP[$pairs];
      HEAP[$309] = $307;
      
      
      
      
      if (HEAP[HEAP[$pairs]] == 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 71:
      
      
      
      
      var $318 = HEAP[HEAP[HEAP[$pairs] + 4] + 24];
      var $319 = HEAP[$pairs];
      FUNCTION_TABLE[$318]($319);
      __label__ = 72;
      break;
     case 72:
      
      var $321 = HEAP[$idx_addr] + 1;
      var $322 = HEAP[$next_idx_ptr_addr];
      HEAP[$322] = $321;
      var $323 = HEAP[$val];
      HEAP[$0] = $323;
      __label__ = 93;
      break;
     case 73:
      var $324 = HEAP[$pairs];
      var $325 = _PyObject_CallFunctionObjArgs(_PyDict_Type, allocate([ $324, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$rval] = $325;
      
      
      if (HEAP[$rval] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 74:
      
      
      if (HEAP[$pairs] != 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 75:
      var $330 = HEAP[$pairs];
      HEAP[$_py_tmp76] = $330;
      HEAP[$pairs] = 0;
      
      
      
      var $334 = HEAP[HEAP[$_py_tmp76]] - 1;
      
      var $336 = HEAP[$_py_tmp76];
      HEAP[$336] = $334;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp76]] == 0) {
        __label__ = 76;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 76:
      
      
      
      
      var $345 = HEAP[HEAP[HEAP[$_py_tmp76] + 4] + 24];
      var $346 = HEAP[$_py_tmp76];
      FUNCTION_TABLE[$345]($346);
      __label__ = 77;
      break;
     case 77:
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 16] != __Py_NoneStruct) {
        __label__ = 78;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 78:
      
      
      var $353 = HEAP[HEAP[$s_addr] + 16];
      var $354 = HEAP[$rval];
      var $355 = _PyObject_CallFunctionObjArgs($353, allocate([ $354, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$val] = $355;
      
      
      if (HEAP[$val] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 79:
      
      
      
      var $361 = HEAP[HEAP[$rval]] - 1;
      
      var $363 = HEAP[$rval];
      HEAP[$363] = $361;
      
      
      
      
      if (HEAP[HEAP[$rval]] == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 80:
      
      
      
      
      var $372 = HEAP[HEAP[HEAP[$rval] + 4] + 24];
      var $373 = HEAP[$rval];
      FUNCTION_TABLE[$372]($373);
      __label__ = 81;
      break;
     case 81:
      var $374 = HEAP[$val];
      HEAP[$rval] = $374;
      HEAP[$val] = 0;
      __label__ = 82;
      break;
     case 82:
      
      var $376 = HEAP[$idx_addr] + 1;
      var $377 = HEAP[$next_idx_ptr_addr];
      HEAP[$377] = $376;
      var $378 = HEAP[$rval];
      HEAP[$0] = $378;
      __label__ = 93;
      break;
     case 83:
      
      
      if (HEAP[$key] != 0) {
        __label__ = 84;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 84:
      
      
      
      var $384 = HEAP[HEAP[$key]] - 1;
      
      var $386 = HEAP[$key];
      HEAP[$386] = $384;
      
      
      
      
      if (HEAP[HEAP[$key]] == 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      
      
      
      
      var $395 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $396 = HEAP[$key];
      FUNCTION_TABLE[$395]($396);
      __label__ = 86;
      break;
     case 86:
      
      
      if (HEAP[$val] != 0) {
        __label__ = 87;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 87:
      
      
      
      var $402 = HEAP[HEAP[$val]] - 1;
      
      var $404 = HEAP[$val];
      HEAP[$404] = $402;
      
      
      
      
      if (HEAP[HEAP[$val]] == 0) {
        __label__ = 88;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 88:
      
      
      
      
      var $413 = HEAP[HEAP[HEAP[$val] + 4] + 24];
      var $414 = HEAP[$val];
      FUNCTION_TABLE[$413]($414);
      __label__ = 89;
      break;
     case 89:
      
      
      if (HEAP[$pairs] != 0) {
        __label__ = 90;
        break;
      } else {
        __label__ = 92;
        break;
      }
     case 90:
      
      
      
      var $420 = HEAP[HEAP[$pairs]] - 1;
      
      var $422 = HEAP[$pairs];
      HEAP[$422] = $420;
      
      
      
      
      if (HEAP[HEAP[$pairs]] == 0) {
        __label__ = 91;
        break;
      } else {
        __label__ = 92;
        break;
      }
     case 91:
      
      
      
      
      var $431 = HEAP[HEAP[HEAP[$pairs] + 4] + 24];
      var $432 = HEAP[$pairs];
      FUNCTION_TABLE[$431]($432);
      __label__ = 92;
      break;
     case 92:
      HEAP[$0] = 0;
      __label__ = 93;
      break;
     case 93:
      var $433 = HEAP[$0];
      HEAP[$retval] = $433;
      __label__ = 94;
      break;
     case 94:
      var $retval94 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval94;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __parse_array_str($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $pystr_addr = __stackBase__ + 4;
      var $idx_addr = __stackBase__ + 8;
      var $next_idx_ptr_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $str = __stackBase__ + 24;
      var $end_idx = __stackBase__ + 28;
      var $val = __stackBase__ + 32;
      var $rval = __stackBase__ + 36;
      var $next_idx = __stackBase__ + 40;
      var $_py_tmp = __stackBase__ + 44;
      
      HEAP[$s_addr] = $s;
      HEAP[$pystr_addr] = $pystr;
      HEAP[$idx_addr] = $idx;
      HEAP[$next_idx_ptr_addr] = $next_idx_ptr;
      
      
      
      var $4 = HEAP[$pystr_addr] + 20;
      HEAP[$str] = $4;
      
      
      
      
      var $9 = HEAP[HEAP[$pystr_addr] + 8] - 1;
      HEAP[$end_idx] = $9;
      HEAP[$val] = 0;
      var $10 = _PyList_New(0);
      HEAP[$rval] = $10;
      
      
      if (HEAP[$rval] == 0) {
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
      __label__ = 4;
      break;
     case 3:
      
      var $14 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $14;
      __label__ = 4;
      break;
     case 4:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 32) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 9) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 10) {
        __label__ = 3;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 13) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      if (HEAP[$idx_addr] <= HEAP[$end_idx]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 10:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] != 93) {
        __label__ = 11;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 11:
      __label__ = 35;
      break;
     case 12:
      var $46 = HEAP[$s_addr];
      var $47 = HEAP[$pystr_addr];
      var $48 = HEAP[$idx_addr];
      var $49 = _scan_once_str($46, $47, $48, $next_idx);
      HEAP[$val] = $49;
      
      
      if (HEAP[$val] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $52 = HEAP[$rval];
      var $53 = HEAP[$val];
      var $54 = _PyList_Append($52, $53);
      var $55 = $54 == -1;
      if ($55) {
        __label__ = 40;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if (HEAP[$val] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      var $58 = HEAP[$val];
      HEAP[$_py_tmp] = $58;
      HEAP[$val] = 0;
      
      
      
      var $62 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $64 = HEAP[$_py_tmp];
      HEAP[$64] = $62;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $74 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$73]($74);
      __label__ = 17;
      break;
     case 17:
      var $75 = HEAP[$next_idx];
      HEAP[$idx_addr] = $75;
      __label__ = 19;
      break;
     case 18:
      
      var $77 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $77;
      __label__ = 19;
      break;
     case 19:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 32) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 9) {
        __label__ = 18;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 10) {
        __label__ = 18;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 13) {
        __label__ = 18;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 36;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 93) {
        __label__ = 36;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] != 44) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $114 = HEAP[$pystr_addr];
      var $115 = HEAP[$idx_addr];
      _raise_errmsg(__str32, $114, $115);
      __label__ = 40;
      break;
     case 28:
      
      var $117 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $117;
      __label__ = 30;
      break;
     case 29:
      
      var $119 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $119;
      __label__ = 30;
      break;
     case 30:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 35;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 32) {
        __label__ = 29;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 9) {
        __label__ = 29;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 10) {
        __label__ = 29;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] == 13) {
        __label__ = 29;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      if (HEAP[$idx_addr] <= HEAP[$end_idx]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 38;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx_addr]] != 93) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      var $154 = HEAP[$pystr_addr];
      var $155 = HEAP[$end_idx];
      _raise_errmsg(__str33, $154, $155);
      __label__ = 40;
      break;
     case 39:
      
      var $157 = HEAP[$idx_addr] + 1;
      var $158 = HEAP[$next_idx_ptr_addr];
      HEAP[$158] = $157;
      var $159 = HEAP[$rval];
      HEAP[$0] = $159;
      __label__ = 46;
      break;
     case 40:
      
      
      if (HEAP[$val] != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 41:
      
      
      
      var $165 = HEAP[HEAP[$val]] - 1;
      
      var $167 = HEAP[$val];
      HEAP[$167] = $165;
      
      
      
      
      if (HEAP[HEAP[$val]] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $176 = HEAP[HEAP[HEAP[$val] + 4] + 24];
      var $177 = HEAP[$val];
      FUNCTION_TABLE[$176]($177);
      __label__ = 43;
      break;
     case 43:
      
      
      
      var $181 = HEAP[HEAP[$rval]] - 1;
      
      var $183 = HEAP[$rval];
      HEAP[$183] = $181;
      
      
      
      
      if (HEAP[HEAP[$rval]] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      var $192 = HEAP[HEAP[HEAP[$rval] + 4] + 24];
      var $193 = HEAP[$rval];
      FUNCTION_TABLE[$192]($193);
      __label__ = 45;
      break;
     case 45:
      HEAP[$0] = 0;
      __label__ = 46;
      break;
     case 46:
      var $194 = HEAP[$0];
      HEAP[$retval] = $194;
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
  function __parse_array_unicode($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $pystr_addr = __stackBase__ + 4;
      var $idx_addr = __stackBase__ + 8;
      var $next_idx_ptr_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $str = __stackBase__ + 24;
      var $end_idx = __stackBase__ + 28;
      var $val = __stackBase__ + 32;
      var $rval = __stackBase__ + 36;
      var $next_idx = __stackBase__ + 40;
      var $_py_tmp = __stackBase__ + 44;
      
      HEAP[$s_addr] = $s;
      HEAP[$pystr_addr] = $pystr;
      HEAP[$idx_addr] = $idx;
      HEAP[$next_idx_ptr_addr] = $next_idx_ptr;
      
      
      
      var $4 = HEAP[HEAP[$pystr_addr] + 12];
      HEAP[$str] = $4;
      
      
      
      
      var $9 = HEAP[HEAP[$pystr_addr] + 8] - 1;
      HEAP[$end_idx] = $9;
      HEAP[$val] = 0;
      var $10 = _PyList_New(0);
      HEAP[$rval] = $10;
      
      
      if (HEAP[$rval] == 0) {
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
      __label__ = 4;
      break;
     case 3:
      
      var $14 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $14;
      __label__ = 4;
      break;
     case 4:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 32) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 9) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 10) {
        __label__ = 3;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 13) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      if (HEAP[$idx_addr] <= HEAP[$end_idx]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 10:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] != 93) {
        __label__ = 11;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 11:
      __label__ = 35;
      break;
     case 12:
      var $46 = HEAP[$s_addr];
      var $47 = HEAP[$pystr_addr];
      var $48 = HEAP[$idx_addr];
      var $49 = _scan_once_unicode($46, $47, $48, $next_idx);
      HEAP[$val] = $49;
      
      
      if (HEAP[$val] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $52 = HEAP[$rval];
      var $53 = HEAP[$val];
      var $54 = _PyList_Append($52, $53);
      var $55 = $54 == -1;
      if ($55) {
        __label__ = 40;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if (HEAP[$val] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      var $58 = HEAP[$val];
      HEAP[$_py_tmp] = $58;
      HEAP[$val] = 0;
      
      
      
      var $62 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $64 = HEAP[$_py_tmp];
      HEAP[$64] = $62;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $74 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$73]($74);
      __label__ = 17;
      break;
     case 17:
      var $75 = HEAP[$next_idx];
      HEAP[$idx_addr] = $75;
      __label__ = 19;
      break;
     case 18:
      
      var $77 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $77;
      __label__ = 19;
      break;
     case 19:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 32) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 9) {
        __label__ = 18;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 10) {
        __label__ = 18;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 13) {
        __label__ = 18;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 36;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 93) {
        __label__ = 36;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] != 44) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $114 = HEAP[$pystr_addr];
      var $115 = HEAP[$idx_addr];
      _raise_errmsg(__str32, $114, $115);
      __label__ = 40;
      break;
     case 28:
      
      var $117 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $117;
      __label__ = 30;
      break;
     case 29:
      
      var $119 = HEAP[$idx_addr] + 1;
      HEAP[$idx_addr] = $119;
      __label__ = 30;
      break;
     case 30:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 35;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 32) {
        __label__ = 29;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 9) {
        __label__ = 29;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 10) {
        __label__ = 29;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] == 13) {
        __label__ = 29;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      if (HEAP[$idx_addr] <= HEAP[$end_idx]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      
      if (HEAP[$idx_addr] > HEAP[$end_idx]) {
        __label__ = 38;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]] != 93) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      var $154 = HEAP[$pystr_addr];
      var $155 = HEAP[$end_idx];
      _raise_errmsg(__str33, $154, $155);
      __label__ = 40;
      break;
     case 39:
      
      var $157 = HEAP[$idx_addr] + 1;
      var $158 = HEAP[$next_idx_ptr_addr];
      HEAP[$158] = $157;
      var $159 = HEAP[$rval];
      HEAP[$0] = $159;
      __label__ = 46;
      break;
     case 40:
      
      
      if (HEAP[$val] != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 41:
      
      
      
      var $165 = HEAP[HEAP[$val]] - 1;
      
      var $167 = HEAP[$val];
      HEAP[$167] = $165;
      
      
      
      
      if (HEAP[HEAP[$val]] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $176 = HEAP[HEAP[HEAP[$val] + 4] + 24];
      var $177 = HEAP[$val];
      FUNCTION_TABLE[$176]($177);
      __label__ = 43;
      break;
     case 43:
      
      
      
      var $181 = HEAP[HEAP[$rval]] - 1;
      
      var $183 = HEAP[$rval];
      HEAP[$183] = $181;
      
      
      
      
      if (HEAP[HEAP[$rval]] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      var $192 = HEAP[HEAP[HEAP[$rval] + 4] + 24];
      var $193 = HEAP[$rval];
      FUNCTION_TABLE[$192]($193);
      __label__ = 45;
      break;
     case 45:
      HEAP[$0] = 0;
      __label__ = 46;
      break;
     case 46:
      var $194 = HEAP[$0];
      HEAP[$retval] = $194;
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
  function __parse_constant($s, $constant, $idx, $next_idx_ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $constant_addr = __stackBase__ + 4;
      var $idx_addr = __stackBase__ + 8;
      var $next_idx_ptr_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $cstr = __stackBase__ + 24;
      var $rval = __stackBase__ + 28;
      
      HEAP[$s_addr] = $s;
      HEAP[$constant_addr] = $constant;
      HEAP[$idx_addr] = $idx;
      HEAP[$next_idx_ptr_addr] = $next_idx_ptr;
      var $1 = HEAP[$constant_addr];
      var $2 = _PyString_InternFromString($1);
      HEAP[$cstr] = $2;
      
      
      if (HEAP[$cstr] == 0) {
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
      
      
      var $7 = HEAP[HEAP[$s_addr] + 32];
      var $8 = HEAP[$cstr];
      var $9 = _PyObject_CallFunctionObjArgs($7, allocate([ $8, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$rval] = $9;
      
      
      
      
      
      var $15 = HEAP[HEAP[$cstr] + 8] + HEAP[$idx_addr];
      HEAP[$idx_addr] = $15;
      
      
      
      var $19 = HEAP[HEAP[$cstr]] - 1;
      
      var $21 = HEAP[$cstr];
      HEAP[$21] = $19;
      
      
      
      
      if (HEAP[HEAP[$cstr]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[$cstr] + 4] + 24];
      var $31 = HEAP[$cstr];
      FUNCTION_TABLE[$30]($31);
      __label__ = 4;
      break;
     case 4:
      var $32 = HEAP[$next_idx_ptr_addr];
      var $33 = HEAP[$idx_addr];
      HEAP[$32] = $33;
      var $34 = HEAP[$rval];
      HEAP[$0] = $34;
      __label__ = 5;
      break;
     case 5:
      var $35 = HEAP[$0];
      HEAP[$retval] = $35;
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
  function __match_number_str($s, $pystr, $start, $next_idx_ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 60;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $pystr_addr = __stackBase__ + 4;
      var $start_addr = __stackBase__ + 8;
      var $next_idx_ptr_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $str = __stackBase__ + 24;
      var $end_idx = __stackBase__ + 28;
      var $idx = __stackBase__ + 32;
      var $is_float = __stackBase__ + 36;
      var $rval = __stackBase__ + 40;
      var $numstr = __stackBase__ + 44;
      var $e_start = __stackBase__ + 48;
      var $d = __stackBase__ + 52;
      
      HEAP[$s_addr] = $s;
      HEAP[$pystr_addr] = $pystr;
      HEAP[$start_addr] = $start;
      HEAP[$next_idx_ptr_addr] = $next_idx_ptr;
      
      
      
      var $4 = HEAP[$pystr_addr] + 20;
      HEAP[$str] = $4;
      
      
      
      
      var $9 = HEAP[HEAP[$pystr_addr] + 8] - 1;
      HEAP[$end_idx] = $9;
      var $10 = HEAP[$start_addr];
      HEAP[$idx] = $10;
      HEAP[$is_float] = 0;
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx]] == 45) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $17 = HEAP[$idx] + 1;
      HEAP[$idx] = $17;
      
      
      
      if (HEAP[$idx] > HEAP[$end_idx]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $21 = HEAP[_PyExc_StopIteration];
      _PyErr_SetNone($21);
      HEAP[$0] = 0;
      __label__ = 55;
      break;
     case 3:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx]] <= 48) {
        __label__ = 11;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx]] > 57) {
        __label__ = 11;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $33 = HEAP[$idx] + 1;
      HEAP[$idx] = $33;
      __label__ = 7;
      break;
     case 6:
      
      var $35 = HEAP[$idx] + 1;
      HEAP[$idx] = $35;
      __label__ = 7;
      break;
     case 7:
      
      
      
      if (HEAP[$idx] > HEAP[$end_idx]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx]] <= 47) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx]] <= 57) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      __label__ = 14;
      break;
     case 11:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx]] == 48) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      var $55 = HEAP[$idx] + 1;
      HEAP[$idx] = $55;
      __label__ = 14;
      break;
     case 13:
      var $56 = HEAP[_PyExc_StopIteration];
      _PyErr_SetNone($56);
      HEAP[$0] = 0;
      __label__ = 55;
      break;
     case 14:
      
      
      
      if (HEAP[$idx] < HEAP[$end_idx]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 15:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx]] == 46) {
        __label__ = 16;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 16:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx] + 1)] > 47) {
        __label__ = 17;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 17:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx] + 1)] <= 57) {
        __label__ = 18;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 18:
      HEAP[$is_float] = 1;
      
      var $78 = HEAP[$idx] + 2;
      HEAP[$idx] = $78;
      __label__ = 20;
      break;
     case 19:
      
      var $80 = HEAP[$idx] + 1;
      HEAP[$idx] = $80;
      __label__ = 20;
      break;
     case 20:
      
      
      
      if (HEAP[$idx] > HEAP[$end_idx]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx]] <= 47) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx]] <= 57) {
        __label__ = 19;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      if (HEAP[$idx] < HEAP[$end_idx]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 24:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx]] == 101) {
        __label__ = 26;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx]] == 69) {
        __label__ = 26;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 26:
      var $107 = HEAP[$idx];
      HEAP[$e_start] = $107;
      
      var $109 = HEAP[$idx] + 1;
      HEAP[$idx] = $109;
      
      
      
      if (HEAP[$idx] < HEAP[$end_idx]) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx]] == 45) {
        __label__ = 29;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx]] == 43) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      var $124 = HEAP[$idx] + 1;
      HEAP[$idx] = $124;
      __label__ = 30;
      break;
     case 30:
      __label__ = 32;
      break;
     case 31:
      
      var $126 = HEAP[$idx] + 1;
      HEAP[$idx] = $126;
      __label__ = 32;
      break;
     case 32:
      
      
      
      if (HEAP[$idx] > HEAP[$end_idx]) {
        __label__ = 35;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx]] <= 47) {
        __label__ = 35;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      
      
      if (HEAP[HEAP[$str] + HEAP[$idx]] <= 57) {
        __label__ = 31;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx] - 1)] <= 47) {
        __label__ = 38;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx] - 1)] > 57) {
        __label__ = 38;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      HEAP[$is_float] = 1;
      __label__ = 39;
      break;
     case 38:
      var $152 = HEAP[$e_start];
      HEAP[$idx] = $152;
      __label__ = 39;
      break;
     case 39:
      
      
      var $155 = HEAP[$idx] - HEAP[$start_addr];
      
      
      var $158 = HEAP[$str] + HEAP[$start_addr];
      var $159 = _PyString_FromStringAndSize($158, $155);
      HEAP[$numstr] = $159;
      
      
      if (HEAP[$numstr] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      HEAP[$0] = 0;
      __label__ = 55;
      break;
     case 41:
      
      
      if (HEAP[$is_float] != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 42:
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 24] != _PyFloat_Type) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      var $170 = HEAP[HEAP[$s_addr] + 24];
      var $171 = HEAP[$numstr];
      var $172 = _PyObject_CallFunctionObjArgs($170, allocate([ $171, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$rval] = $172;
      __label__ = 48;
      break;
     case 44:
      
      
      
      var $176 = HEAP[$numstr] + 20;
      var $177 = _PyOS_string_to_double($176, 0, 0);
      HEAP[$d] = $177;
      
      var $179 = HEAP[$d] == -1;
      if ($179) {
        __label__ = 45;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 45:
      var $180 = _PyErr_Occurred();
      
      if ($180 != 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      HEAP[$0] = 0;
      __label__ = 55;
      break;
     case 47:
      var $182 = HEAP[$d];
      var $183 = _PyFloat_FromDouble($182);
      HEAP[$rval] = $183;
      __label__ = 48;
      break;
     case 48:
      __label__ = 52;
      break;
     case 49:
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 28] != _PyInt_Type) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      
      var $190 = HEAP[HEAP[$s_addr] + 28];
      var $191 = HEAP[$numstr];
      var $192 = _PyObject_CallFunctionObjArgs($190, allocate([ $191, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$rval] = $192;
      __label__ = 52;
      break;
     case 51:
      
      
      
      var $196 = HEAP[$numstr] + 20;
      var $197 = _PyInt_FromString($196, 0, 10);
      HEAP[$rval] = $197;
      __label__ = 52;
      break;
     case 52:
      
      
      
      var $201 = HEAP[HEAP[$numstr]] - 1;
      
      var $203 = HEAP[$numstr];
      HEAP[$203] = $201;
      
      
      
      
      if (HEAP[HEAP[$numstr]] == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      
      
      
      
      var $212 = HEAP[HEAP[HEAP[$numstr] + 4] + 24];
      var $213 = HEAP[$numstr];
      FUNCTION_TABLE[$212]($213);
      __label__ = 54;
      break;
     case 54:
      var $214 = HEAP[$next_idx_ptr_addr];
      var $215 = HEAP[$idx];
      HEAP[$214] = $215;
      var $216 = HEAP[$rval];
      HEAP[$0] = $216;
      __label__ = 55;
      break;
     case 55:
      var $217 = HEAP[$0];
      HEAP[$retval] = $217;
      __label__ = 56;
      break;
     case 56:
      var $retval55 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval55;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __match_number_unicode($s, $pystr, $start, $next_idx_ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $pystr_addr = __stackBase__ + 4;
      var $start_addr = __stackBase__ + 8;
      var $next_idx_ptr_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $str = __stackBase__ + 24;
      var $end_idx = __stackBase__ + 28;
      var $idx = __stackBase__ + 32;
      var $is_float = __stackBase__ + 36;
      var $rval = __stackBase__ + 40;
      var $numstr = __stackBase__ + 44;
      var $e_start = __stackBase__ + 48;
      
      HEAP[$s_addr] = $s;
      HEAP[$pystr_addr] = $pystr;
      HEAP[$start_addr] = $start;
      HEAP[$next_idx_ptr_addr] = $next_idx_ptr;
      
      
      
      var $4 = HEAP[HEAP[$pystr_addr] + 12];
      HEAP[$str] = $4;
      
      
      
      
      var $9 = HEAP[HEAP[$pystr_addr] + 8] - 1;
      HEAP[$end_idx] = $9;
      var $10 = HEAP[$start_addr];
      HEAP[$idx] = $10;
      HEAP[$is_float] = 0;
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx]] == 45) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $17 = HEAP[$idx] + 1;
      HEAP[$idx] = $17;
      
      
      
      if (HEAP[$idx] > HEAP[$end_idx]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $21 = HEAP[_PyExc_StopIteration];
      _PyErr_SetNone($21);
      HEAP[$0] = 0;
      __label__ = 50;
      break;
     case 3:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx]] <= 48) {
        __label__ = 11;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx]] > 57) {
        __label__ = 11;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $33 = HEAP[$idx] + 1;
      HEAP[$idx] = $33;
      __label__ = 7;
      break;
     case 6:
      
      var $35 = HEAP[$idx] + 1;
      HEAP[$idx] = $35;
      __label__ = 7;
      break;
     case 7:
      
      
      
      if (HEAP[$idx] > HEAP[$end_idx]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx]] <= 47) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx]] <= 57) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      __label__ = 14;
      break;
     case 11:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx]] == 48) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      var $55 = HEAP[$idx] + 1;
      HEAP[$idx] = $55;
      __label__ = 14;
      break;
     case 13:
      var $56 = HEAP[_PyExc_StopIteration];
      _PyErr_SetNone($56);
      HEAP[$0] = 0;
      __label__ = 50;
      break;
     case 14:
      
      
      
      if (HEAP[$idx] < HEAP[$end_idx]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 15:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx]] == 46) {
        __label__ = 16;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 16:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx] + 1)] > 47) {
        __label__ = 17;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 17:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx] + 1)] <= 57) {
        __label__ = 18;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 18:
      HEAP[$is_float] = 1;
      
      var $78 = HEAP[$idx] + 2;
      HEAP[$idx] = $78;
      __label__ = 20;
      break;
     case 19:
      
      var $80 = HEAP[$idx] + 1;
      HEAP[$idx] = $80;
      __label__ = 20;
      break;
     case 20:
      
      
      
      if (HEAP[$idx] > HEAP[$end_idx]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx]] <= 47) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx]] <= 57) {
        __label__ = 19;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      if (HEAP[$idx] < HEAP[$end_idx]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 24:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx]] == 101) {
        __label__ = 26;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx]] == 69) {
        __label__ = 26;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 26:
      var $107 = HEAP[$idx];
      HEAP[$e_start] = $107;
      
      var $109 = HEAP[$idx] + 1;
      HEAP[$idx] = $109;
      
      
      
      if (HEAP[$idx] < HEAP[$end_idx]) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx]] == 45) {
        __label__ = 29;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx]] == 43) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      var $124 = HEAP[$idx] + 1;
      HEAP[$idx] = $124;
      __label__ = 30;
      break;
     case 30:
      __label__ = 32;
      break;
     case 31:
      
      var $126 = HEAP[$idx] + 1;
      HEAP[$idx] = $126;
      __label__ = 32;
      break;
     case 32:
      
      
      
      if (HEAP[$idx] > HEAP[$end_idx]) {
        __label__ = 35;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx]] <= 47) {
        __label__ = 35;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * HEAP[$idx]] <= 57) {
        __label__ = 31;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx] - 1)] <= 47) {
        __label__ = 38;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx] - 1)] > 57) {
        __label__ = 38;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      HEAP[$is_float] = 1;
      __label__ = 39;
      break;
     case 38:
      var $152 = HEAP[$e_start];
      HEAP[$idx] = $152;
      __label__ = 39;
      break;
     case 39:
      
      
      var $155 = HEAP[$idx] - HEAP[$start_addr];
      
      
      var $158 = HEAP[$str] + 2 * HEAP[$start_addr];
      var $159 = _PyUnicodeUCS2_FromUnicode($158, $155);
      HEAP[$numstr] = $159;
      
      
      if (HEAP[$numstr] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      HEAP[$0] = 0;
      __label__ = 50;
      break;
     case 41:
      
      
      if (HEAP[$is_float] != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 42:
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 24] != _PyFloat_Type) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      var $170 = HEAP[HEAP[$s_addr] + 24];
      var $171 = HEAP[$numstr];
      var $172 = _PyObject_CallFunctionObjArgs($170, allocate([ $171, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$rval] = $172;
      __label__ = 45;
      break;
     case 44:
      var $173 = HEAP[$numstr];
      var $174 = _PyFloat_FromString($173, 0);
      HEAP[$rval] = $174;
      __label__ = 45;
      break;
     case 45:
      __label__ = 47;
      break;
     case 46:
      
      
      var $177 = HEAP[HEAP[$s_addr] + 28];
      var $178 = HEAP[$numstr];
      var $179 = _PyObject_CallFunctionObjArgs($177, allocate([ $178, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$rval] = $179;
      __label__ = 47;
      break;
     case 47:
      
      
      
      var $183 = HEAP[HEAP[$numstr]] - 1;
      
      var $185 = HEAP[$numstr];
      HEAP[$185] = $183;
      
      
      
      
      if (HEAP[HEAP[$numstr]] == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      
      
      
      var $194 = HEAP[HEAP[HEAP[$numstr] + 4] + 24];
      var $195 = HEAP[$numstr];
      FUNCTION_TABLE[$194]($195);
      __label__ = 49;
      break;
     case 49:
      var $196 = HEAP[$next_idx_ptr_addr];
      var $197 = HEAP[$idx];
      HEAP[$196] = $197;
      var $198 = HEAP[$rval];
      HEAP[$0] = $198;
      __label__ = 50;
      break;
     case 50:
      var $199 = HEAP[$0];
      HEAP[$retval] = $199;
      __label__ = 51;
      break;
     case 51:
      var $retval50 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval50;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _scan_once_str($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $pystr_addr = __stackBase__ + 4;
      var $idx_addr = __stackBase__ + 8;
      var $next_idx_ptr_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      var $str = __stackBase__ + 28;
      var $length = __stackBase__ + 32;
      
      HEAP[$s_addr] = $s;
      HEAP[$pystr_addr] = $pystr;
      HEAP[$idx_addr] = $idx;
      HEAP[$next_idx_ptr_addr] = $next_idx_ptr;
      
      
      
      var $4 = HEAP[$pystr_addr] + 20;
      HEAP[$str] = $4;
      
      
      
      var $8 = HEAP[HEAP[$pystr_addr] + 8];
      HEAP[$length] = $8;
      
      
      
      if (HEAP[$idx_addr] >= HEAP[$length]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $12 = HEAP[_PyExc_StopIteration];
      _PyErr_SetNone($12);
      HEAP[$0] = 0;
      __label__ = 57;
      break;
     case 2:
      
      
      
      
      var $17 = HEAP[HEAP[$str] + HEAP[$idx_addr]];
      if ($17 == 34) {
        __label__ = 3;
        break;
      } else if ($17 == 45) {
        __label__ = 46;
        break;
      } else if ($17 == 73) {
        __label__ = 36;
        break;
      } else if ($17 == 78) {
        __label__ = 31;
        break;
      } else if ($17 == 91) {
        __label__ = 8;
        break;
      } else if ($17 == 102) {
        __label__ = 24;
        break;
      } else if ($17 == 110) {
        __label__ = 12;
        break;
      } else if ($17 == 116) {
        __label__ = 18;
        break;
      } else if ($17 == 123) {
        __label__ = 4;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 3:
      
      
      var $20 = HEAP[HEAP[$s_addr] + 12];
      var $21 = _PyObject_IsTrue($20);
      
      
      
      
      
      var $27 = HEAP[HEAP[$s_addr] + 8] + 20;
      
      var $29 = HEAP[$idx_addr] + 1;
      var $30 = HEAP[$pystr_addr];
      var $31 = HEAP[$next_idx_ptr_addr];
      var $32 = _scanstring_str($30, $29, $27, $21, $31);
      HEAP[$0] = $32;
      __label__ = 57;
      break;
     case 4:
      var $33 = HEAP[__PyThreadState_Current];
      
      
      var $36 = HEAP[$33 + 12] + 1;
      var $37 = $33 + 12;
      HEAP[$37] = $36;
      
      
      
      
      if (HEAP[$33 + 12] > HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      var $42 = __Py_CheckRecursiveCall(__str34);
      
      if ($42 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 57;
      break;
     case 7:
      
      var $45 = HEAP[$idx_addr] + 1;
      var $46 = HEAP[$s_addr];
      var $47 = HEAP[$pystr_addr];
      var $48 = HEAP[$next_idx_ptr_addr];
      var $49 = __parse_object_str($46, $47, $45, $48);
      HEAP[$res] = $49;
      
      
      
      var $53 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $54 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$54] = $53;
      var $55 = HEAP[$res];
      HEAP[$0] = $55;
      __label__ = 57;
      break;
     case 8:
      var $56 = HEAP[__PyThreadState_Current];
      
      
      var $59 = HEAP[$56 + 12] + 1;
      var $60 = $56 + 12;
      HEAP[$60] = $59;
      
      
      
      
      if (HEAP[$56 + 12] > HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      var $65 = __Py_CheckRecursiveCall(__str35);
      
      if ($65 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = 0;
      __label__ = 57;
      break;
     case 11:
      
      var $68 = HEAP[$idx_addr] + 1;
      var $69 = HEAP[$s_addr];
      var $70 = HEAP[$pystr_addr];
      var $71 = HEAP[$next_idx_ptr_addr];
      var $72 = __parse_array_str($69, $70, $68, $71);
      HEAP[$res] = $72;
      
      
      
      var $76 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $77 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$77] = $76;
      var $78 = HEAP[$res];
      HEAP[$0] = $78;
      __label__ = 57;
      break;
     case 12:
      
      
      
      
      if (HEAP[$idx_addr] + 3 < HEAP[$length]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 13:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 1)] == 117) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 2)] == 108) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 3)] == 108) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      var $102 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $102;
      
      var $104 = HEAP[$idx_addr] + 4;
      var $105 = HEAP[$next_idx_ptr_addr];
      HEAP[$105] = $104;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 57;
      break;
     case 17:
      __label__ = 56;
      break;
     case 18:
      
      
      
      
      if (HEAP[$idx_addr] + 3 < HEAP[$length]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 19:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 1)] == 114) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 2)] == 117) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 3)] == 101) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      var $130 = HEAP[__Py_TrueStruct] + 1;
      
      HEAP[__Py_TrueStruct] = $130;
      
      var $133 = HEAP[$idx_addr] + 4;
      var $134 = HEAP[$next_idx_ptr_addr];
      HEAP[$134] = $133;
      HEAP[$0] = __Py_TrueStruct;
      __label__ = 57;
      break;
     case 23:
      __label__ = 56;
      break;
     case 24:
      
      
      
      
      if (HEAP[$idx_addr] + 4 < HEAP[$length]) {
        __label__ = 25;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 25:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 1)] == 97) {
        __label__ = 26;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 26:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 2)] == 108) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 3)] == 115) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 4)] == 101) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      var $165 = HEAP[__Py_ZeroStruct] + 1;
      
      HEAP[__Py_ZeroStruct] = $165;
      
      var $168 = HEAP[$idx_addr] + 5;
      var $169 = HEAP[$next_idx_ptr_addr];
      HEAP[$169] = $168;
      HEAP[$0] = __Py_ZeroStruct;
      __label__ = 57;
      break;
     case 30:
      __label__ = 56;
      break;
     case 31:
      
      
      
      
      if (HEAP[$idx_addr] + 2 < HEAP[$length]) {
        __label__ = 32;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 32:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 1)] == 97) {
        __label__ = 33;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 33:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 2)] == 78) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      var $186 = HEAP[$s_addr];
      var $187 = HEAP[$idx_addr];
      var $188 = HEAP[$next_idx_ptr_addr];
      var $189 = __parse_constant($186, __str36, $187, $188);
      HEAP[$0] = $189;
      __label__ = 57;
      break;
     case 35:
      __label__ = 56;
      break;
     case 36:
      
      
      
      
      if (HEAP[$idx_addr] + 7 < HEAP[$length]) {
        __label__ = 37;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 37:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 1)] == 110) {
        __label__ = 38;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 38:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 2)] == 102) {
        __label__ = 39;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 39:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 3)] == 105) {
        __label__ = 40;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 40:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 4)] == 110) {
        __label__ = 41;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 41:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 5)] == 105) {
        __label__ = 42;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 42:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 6)] == 116) {
        __label__ = 43;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 43:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 7)] == 121) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      var $236 = HEAP[$s_addr];
      var $237 = HEAP[$idx_addr];
      var $238 = HEAP[$next_idx_ptr_addr];
      var $239 = __parse_constant($236, __str37, $237, $238);
      HEAP[$0] = $239;
      __label__ = 57;
      break;
     case 45:
      __label__ = 56;
      break;
     case 46:
      
      
      
      
      if (HEAP[$idx_addr] + 8 < HEAP[$length]) {
        __label__ = 47;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 47:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 1)] == 73) {
        __label__ = 48;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 48:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 2)] == 110) {
        __label__ = 49;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 49:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 3)] == 102) {
        __label__ = 50;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 50:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 4)] == 105) {
        __label__ = 51;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 51:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 5)] == 110) {
        __label__ = 52;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 52:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 6)] == 105) {
        __label__ = 53;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 53:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 7)] == 116) {
        __label__ = 54;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 54:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + (HEAP[$idx_addr] + 8)] == 121) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      var $292 = HEAP[$s_addr];
      var $293 = HEAP[$idx_addr];
      var $294 = HEAP[$next_idx_ptr_addr];
      var $295 = __parse_constant($292, __str38, $293, $294);
      HEAP[$0] = $295;
      __label__ = 57;
      break;
     case 56:
      var $296 = HEAP[$s_addr];
      var $297 = HEAP[$pystr_addr];
      var $298 = HEAP[$idx_addr];
      var $299 = HEAP[$next_idx_ptr_addr];
      var $300 = __match_number_str($296, $297, $298, $299);
      HEAP[$0] = $300;
      __label__ = 57;
      break;
     case 57:
      var $301 = HEAP[$0];
      HEAP[$retval] = $301;
      __label__ = 58;
      break;
     case 58:
      var $retval57 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval57;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _scan_once_unicode($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $pystr_addr = __stackBase__ + 4;
      var $idx_addr = __stackBase__ + 8;
      var $next_idx_ptr_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      var $str = __stackBase__ + 28;
      var $length = __stackBase__ + 32;
      
      HEAP[$s_addr] = $s;
      HEAP[$pystr_addr] = $pystr;
      HEAP[$idx_addr] = $idx;
      HEAP[$next_idx_ptr_addr] = $next_idx_ptr;
      
      
      
      var $4 = HEAP[HEAP[$pystr_addr] + 12];
      HEAP[$str] = $4;
      
      
      
      var $8 = HEAP[HEAP[$pystr_addr] + 8];
      HEAP[$length] = $8;
      
      
      
      if (HEAP[$idx_addr] >= HEAP[$length]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $12 = HEAP[_PyExc_StopIteration];
      _PyErr_SetNone($12);
      HEAP[$0] = 0;
      __label__ = 57;
      break;
     case 2:
      
      
      
      
      var $17 = HEAP[HEAP[$str] + 2 * HEAP[$idx_addr]];
      if ($17 == 34) {
        __label__ = 3;
        break;
      } else if ($17 == 45) {
        __label__ = 46;
        break;
      } else if ($17 == 73) {
        __label__ = 36;
        break;
      } else if ($17 == 78) {
        __label__ = 31;
        break;
      } else if ($17 == 91) {
        __label__ = 8;
        break;
      } else if ($17 == 102) {
        __label__ = 24;
        break;
      } else if ($17 == 110) {
        __label__ = 12;
        break;
      } else if ($17 == 116) {
        __label__ = 18;
        break;
      } else if ($17 == 123) {
        __label__ = 4;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 3:
      
      
      var $20 = HEAP[HEAP[$s_addr] + 12];
      var $21 = _PyObject_IsTrue($20);
      
      var $23 = HEAP[$idx_addr] + 1;
      var $24 = HEAP[$pystr_addr];
      var $25 = HEAP[$next_idx_ptr_addr];
      var $26 = _scanstring_unicode($24, $23, $21, $25);
      HEAP[$0] = $26;
      __label__ = 57;
      break;
     case 4:
      var $27 = HEAP[__PyThreadState_Current];
      
      
      var $30 = HEAP[$27 + 12] + 1;
      var $31 = $27 + 12;
      HEAP[$31] = $30;
      
      
      
      
      if (HEAP[$27 + 12] > HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      var $36 = __Py_CheckRecursiveCall(__str39);
      
      if ($36 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 57;
      break;
     case 7:
      
      var $39 = HEAP[$idx_addr] + 1;
      var $40 = HEAP[$s_addr];
      var $41 = HEAP[$pystr_addr];
      var $42 = HEAP[$next_idx_ptr_addr];
      var $43 = __parse_object_unicode($40, $41, $39, $42);
      HEAP[$res] = $43;
      
      
      
      var $47 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $48 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$48] = $47;
      var $49 = HEAP[$res];
      HEAP[$0] = $49;
      __label__ = 57;
      break;
     case 8:
      var $50 = HEAP[__PyThreadState_Current];
      
      
      var $53 = HEAP[$50 + 12] + 1;
      var $54 = $50 + 12;
      HEAP[$54] = $53;
      
      
      
      
      if (HEAP[$50 + 12] > HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      var $59 = __Py_CheckRecursiveCall(__str40);
      
      if ($59 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = 0;
      __label__ = 57;
      break;
     case 11:
      
      var $62 = HEAP[$idx_addr] + 1;
      var $63 = HEAP[$s_addr];
      var $64 = HEAP[$pystr_addr];
      var $65 = HEAP[$next_idx_ptr_addr];
      var $66 = __parse_array_unicode($63, $64, $62, $65);
      HEAP[$res] = $66;
      
      
      
      var $70 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $71 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$71] = $70;
      var $72 = HEAP[$res];
      HEAP[$0] = $72;
      __label__ = 57;
      break;
     case 12:
      
      
      
      
      if (HEAP[$idx_addr] + 3 < HEAP[$length]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 13:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 1)] == 117) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 2)] == 108) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 3)] == 108) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      var $96 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $96;
      
      var $98 = HEAP[$idx_addr] + 4;
      var $99 = HEAP[$next_idx_ptr_addr];
      HEAP[$99] = $98;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 57;
      break;
     case 17:
      __label__ = 56;
      break;
     case 18:
      
      
      
      
      if (HEAP[$idx_addr] + 3 < HEAP[$length]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 19:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 1)] == 114) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 2)] == 117) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 3)] == 101) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      var $124 = HEAP[__Py_TrueStruct] + 1;
      
      HEAP[__Py_TrueStruct] = $124;
      
      var $127 = HEAP[$idx_addr] + 4;
      var $128 = HEAP[$next_idx_ptr_addr];
      HEAP[$128] = $127;
      HEAP[$0] = __Py_TrueStruct;
      __label__ = 57;
      break;
     case 23:
      __label__ = 56;
      break;
     case 24:
      
      
      
      
      if (HEAP[$idx_addr] + 4 < HEAP[$length]) {
        __label__ = 25;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 25:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 1)] == 97) {
        __label__ = 26;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 26:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 2)] == 108) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 3)] == 115) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 4)] == 101) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      var $159 = HEAP[__Py_ZeroStruct] + 1;
      
      HEAP[__Py_ZeroStruct] = $159;
      
      var $162 = HEAP[$idx_addr] + 5;
      var $163 = HEAP[$next_idx_ptr_addr];
      HEAP[$163] = $162;
      HEAP[$0] = __Py_ZeroStruct;
      __label__ = 57;
      break;
     case 30:
      __label__ = 56;
      break;
     case 31:
      
      
      
      
      if (HEAP[$idx_addr] + 2 < HEAP[$length]) {
        __label__ = 32;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 32:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 1)] == 97) {
        __label__ = 33;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 33:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 2)] == 78) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      var $180 = HEAP[$s_addr];
      var $181 = HEAP[$idx_addr];
      var $182 = HEAP[$next_idx_ptr_addr];
      var $183 = __parse_constant($180, __str36, $181, $182);
      HEAP[$0] = $183;
      __label__ = 57;
      break;
     case 35:
      __label__ = 56;
      break;
     case 36:
      
      
      
      
      if (HEAP[$idx_addr] + 7 < HEAP[$length]) {
        __label__ = 37;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 37:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 1)] == 110) {
        __label__ = 38;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 38:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 2)] == 102) {
        __label__ = 39;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 39:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 3)] == 105) {
        __label__ = 40;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 40:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 4)] == 110) {
        __label__ = 41;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 41:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 5)] == 105) {
        __label__ = 42;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 42:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 6)] == 116) {
        __label__ = 43;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 43:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 7)] == 121) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      var $230 = HEAP[$s_addr];
      var $231 = HEAP[$idx_addr];
      var $232 = HEAP[$next_idx_ptr_addr];
      var $233 = __parse_constant($230, __str37, $231, $232);
      HEAP[$0] = $233;
      __label__ = 57;
      break;
     case 45:
      __label__ = 56;
      break;
     case 46:
      
      
      
      
      if (HEAP[$idx_addr] + 8 < HEAP[$length]) {
        __label__ = 47;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 47:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 1)] == 73) {
        __label__ = 48;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 48:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 2)] == 110) {
        __label__ = 49;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 49:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 3)] == 102) {
        __label__ = 50;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 50:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 4)] == 105) {
        __label__ = 51;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 51:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 5)] == 110) {
        __label__ = 52;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 52:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 6)] == 105) {
        __label__ = 53;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 53:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 7)] == 116) {
        __label__ = 54;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 54:
      
      
      
      
      
      
      if (HEAP[HEAP[$str] + 2 * (HEAP[$idx_addr] + 8)] == 121) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      var $286 = HEAP[$s_addr];
      var $287 = HEAP[$idx_addr];
      var $288 = HEAP[$next_idx_ptr_addr];
      var $289 = __parse_constant($286, __str38, $287, $288);
      HEAP[$0] = $289;
      __label__ = 57;
      break;
     case 56:
      var $290 = HEAP[$s_addr];
      var $291 = HEAP[$pystr_addr];
      var $292 = HEAP[$idx_addr];
      var $293 = HEAP[$next_idx_ptr_addr];
      var $294 = __match_number_unicode($290, $291, $292, $293);
      HEAP[$0] = $294;
      __label__ = 57;
      break;
     case 57:
      var $295 = HEAP[$0];
      HEAP[$retval] = $295;
      __label__ = 58;
      break;
     case 58:
      var $retval57 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval57;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _scanner_call($self, $args, $kwds) {
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
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $pystr = __stackBase__ + 20;
      var $rval = __stackBase__ + 24;
      var $idx = __stackBase__ + 28;
      var $next_idx = __stackBase__ + 32;
      var $s = __stackBase__ + 36;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$next_idx] = -1;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 4] != _PyScannerType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyScannerType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str28, __str29, 1664, ___PRETTY_FUNCTION___10651);
      throw "Reached an unreachable!";
     case 3:
      
      var $11 = HEAP[$self_addr];
      HEAP[$s] = $11;
      var $12 = HEAP[$args_addr];
      var $13 = HEAP[$kwds_addr];
      var $14 = _PyArg_ParseTupleAndKeywords($12, $13, __str41, _kwlist_10649, allocate([ $pystr, 0, 0, 0, FUNCTION_TABLE_OFFSET + 4, 0, 0, 0, $idx, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32 (%struct.PyObject*, i32*)*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($14 == 0) {
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
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$pystr] + 4] + 84] & 134217728) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $23 = HEAP[$idx];
      var $24 = HEAP[$pystr];
      var $25 = HEAP[$s];
      var $26 = _scan_once_str($25, $24, $23, $next_idx);
      HEAP[$rval] = $26;
      __label__ = 10;
      break;
     case 7:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$pystr] + 4] + 84] & 268435456) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $34 = HEAP[$idx];
      var $35 = HEAP[$pystr];
      var $36 = HEAP[$s];
      var $37 = _scan_once_unicode($36, $35, $34, $next_idx);
      HEAP[$rval] = $37;
      __label__ = 10;
      break;
     case 9:
      
      
      
      
      var $42 = HEAP[HEAP[HEAP[$pystr] + 4] + 12];
      var $43 = HEAP[_PyExc_TypeError];
      var $44 = _PyErr_Format($43, __str27, allocate([ $42, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 10:
      var $45 = HEAP[$next_idx];
      var $46 = HEAP[$rval];
      var $47 = __build_rval_index_tuple($46, $45);
      HEAP[$0] = $47;
      __label__ = 11;
      break;
     case 11:
      var $48 = HEAP[$0];
      HEAP[$retval] = $48;
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
  function _scanner_new($type, $args, $kwds) {
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
      var $s = __stackBase__ + 20;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      
      var $3 = HEAP[HEAP[$type_addr] + 152];
      var $4 = HEAP[$type_addr];
      var $5 = FUNCTION_TABLE[$3]($4, 0);
      var $6 = $5;
      HEAP[$s] = $6;
      
      
      if (HEAP[$s] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $10 = HEAP[$s] + 8;
      HEAP[$10] = 0;
      
      var $12 = HEAP[$s] + 12;
      HEAP[$12] = 0;
      
      var $14 = HEAP[$s] + 16;
      HEAP[$14] = 0;
      
      var $16 = HEAP[$s] + 20;
      HEAP[$16] = 0;
      
      var $18 = HEAP[$s] + 24;
      HEAP[$18] = 0;
      
      var $20 = HEAP[$s] + 28;
      HEAP[$20] = 0;
      
      var $22 = HEAP[$s] + 32;
      HEAP[$22] = 0;
      __label__ = 2;
      break;
     case 2:
      
      var $24 = HEAP[$s];
      HEAP[$0] = $24;
      var $25 = HEAP[$0];
      HEAP[$retval] = $25;
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
  function _scanner_init($self, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 60;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $ctx = __stackBase__ + 20;
      var $s = __stackBase__ + 24;
      var $tmp = __stackBase__ + 28;
      var $_py_tmp = __stackBase__ + 32;
      var $_py_tmp26 = __stackBase__ + 36;
      var $_py_tmp30 = __stackBase__ + 40;
      var $_py_tmp34 = __stackBase__ + 44;
      var $_py_tmp38 = __stackBase__ + 48;
      var $_py_tmp42 = __stackBase__ + 52;
      var $_py_tmp46 = __stackBase__ + 56;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 4] != _PyScannerType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyScannerType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str28, __str29, 1709, ___PRETTY_FUNCTION___10710);
      throw "Reached an unreachable!";
     case 3:
      
      var $11 = HEAP[$self_addr];
      HEAP[$s] = $11;
      var $12 = HEAP[$args_addr];
      var $13 = HEAP[$kwds_addr];
      var $14 = _PyArg_ParseTupleAndKeywords($12, $13, __str44, _kwlist_10708, allocate([ $ctx, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 45;
      break;
     case 5:
      var $16 = HEAP[$ctx];
      var $17 = _PyObject_GetAttrString($16, __str);
      
      var $19 = HEAP[$s] + 8;
      HEAP[$19] = $17;
      
      
      
      
      if (HEAP[HEAP[$s] + 8] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      if (HEAP[HEAP[$s] + 8] == __Py_NoneStruct) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      var $29 = HEAP[__Py_NoneStruct] - 1;
      HEAP[__Py_NoneStruct] = $29;
      
      
      if (HEAP[__Py_NoneStruct] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      var $34 = HEAP[HEAP[__Py_NoneStruct + 4] + 24];
      FUNCTION_TABLE[$34](__Py_NoneStruct);
      __label__ = 9;
      break;
     case 9:
      var $35 = _PyString_InternFromString(__str26);
      
      var $37 = HEAP[$s] + 8;
      HEAP[$37] = $35;
      __label__ = 14;
      break;
     case 10:
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[HEAP[$s] + 8] + 4] + 84] & 268435456) != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      var $49 = HEAP[HEAP[$s] + 8];
      var $50 = _PyUnicodeUCS2_AsEncodedString($49, 0, 0);
      HEAP[$tmp] = $50;
      
      
      var $53 = HEAP[HEAP[$s] + 8];
      
      
      var $56 = HEAP[$53] - 1;
      var $57 = $53;
      HEAP[$57] = $56;
      
      
      
      if (HEAP[$53] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[HEAP[$s] + 8] + 4] + 24];
      
      
      var $70 = HEAP[HEAP[$s] + 8];
      FUNCTION_TABLE[$67]($70);
      __label__ = 13;
      break;
     case 13:
      
      var $72 = HEAP[$s] + 8;
      var $73 = HEAP[$tmp];
      HEAP[$72] = $73;
      __label__ = 14;
      break;
     case 14:
      
      
      
      
      if (HEAP[HEAP[$s] + 8] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[HEAP[$s] + 8] + 4] + 84] & 134217728) == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $87 = HEAP[$ctx];
      var $88 = _PyObject_GetAttrString($87, __str1);
      
      var $90 = HEAP[$s] + 12;
      HEAP[$90] = $88;
      
      
      
      
      if (HEAP[HEAP[$s] + 12] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      var $95 = HEAP[$ctx];
      var $96 = _PyObject_GetAttrString($95, __str2);
      
      var $98 = HEAP[$s] + 16;
      HEAP[$98] = $96;
      
      
      
      
      if (HEAP[HEAP[$s] + 16] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      var $103 = HEAP[$ctx];
      var $104 = _PyObject_GetAttrString($103, __str3);
      
      var $106 = HEAP[$s] + 20;
      HEAP[$106] = $104;
      
      
      
      
      if (HEAP[HEAP[$s] + 20] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      var $111 = HEAP[$ctx];
      var $112 = _PyObject_GetAttrString($111, __str4);
      
      var $114 = HEAP[$s] + 24;
      HEAP[$114] = $112;
      
      
      
      
      if (HEAP[HEAP[$s] + 24] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      var $119 = HEAP[$ctx];
      var $120 = _PyObject_GetAttrString($119, __str5);
      
      var $122 = HEAP[$s] + 28;
      HEAP[$122] = $120;
      
      
      
      
      if (HEAP[HEAP[$s] + 28] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      var $127 = HEAP[$ctx];
      var $128 = _PyObject_GetAttrString($127, __str6);
      
      var $130 = HEAP[$s] + 32;
      HEAP[$130] = $128;
      
      
      
      
      if (HEAP[HEAP[$s] + 32] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 23:
      
      
      
      
      if (HEAP[HEAP[$s] + 8] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 24:
      
      
      var $141 = HEAP[HEAP[$s] + 8];
      HEAP[$_py_tmp] = $141;
      
      var $143 = HEAP[$s] + 8;
      HEAP[$143] = 0;
      
      
      
      var $147 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $149 = HEAP[$_py_tmp];
      HEAP[$149] = $147;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $158 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $159 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$158]($159);
      __label__ = 26;
      break;
     case 26:
      
      
      
      
      if (HEAP[HEAP[$s] + 12] != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 27:
      
      
      var $166 = HEAP[HEAP[$s] + 12];
      HEAP[$_py_tmp26] = $166;
      
      var $168 = HEAP[$s] + 12;
      HEAP[$168] = 0;
      
      
      
      var $172 = HEAP[HEAP[$_py_tmp26]] - 1;
      
      var $174 = HEAP[$_py_tmp26];
      HEAP[$174] = $172;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp26]] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $183 = HEAP[HEAP[HEAP[$_py_tmp26] + 4] + 24];
      var $184 = HEAP[$_py_tmp26];
      FUNCTION_TABLE[$183]($184);
      __label__ = 29;
      break;
     case 29:
      
      
      
      
      if (HEAP[HEAP[$s] + 16] != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      
      
      var $191 = HEAP[HEAP[$s] + 16];
      HEAP[$_py_tmp30] = $191;
      
      var $193 = HEAP[$s] + 16;
      HEAP[$193] = 0;
      
      
      
      var $197 = HEAP[HEAP[$_py_tmp30]] - 1;
      
      var $199 = HEAP[$_py_tmp30];
      HEAP[$199] = $197;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp30]] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $208 = HEAP[HEAP[HEAP[$_py_tmp30] + 4] + 24];
      var $209 = HEAP[$_py_tmp30];
      FUNCTION_TABLE[$208]($209);
      __label__ = 32;
      break;
     case 32:
      
      
      
      
      if (HEAP[HEAP[$s] + 20] != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 33:
      
      
      var $216 = HEAP[HEAP[$s] + 20];
      HEAP[$_py_tmp34] = $216;
      
      var $218 = HEAP[$s] + 20;
      HEAP[$218] = 0;
      
      
      
      var $222 = HEAP[HEAP[$_py_tmp34]] - 1;
      
      var $224 = HEAP[$_py_tmp34];
      HEAP[$224] = $222;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp34]] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $233 = HEAP[HEAP[HEAP[$_py_tmp34] + 4] + 24];
      var $234 = HEAP[$_py_tmp34];
      FUNCTION_TABLE[$233]($234);
      __label__ = 35;
      break;
     case 35:
      
      
      
      
      if (HEAP[HEAP[$s] + 24] != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 36:
      
      
      var $241 = HEAP[HEAP[$s] + 24];
      HEAP[$_py_tmp38] = $241;
      
      var $243 = HEAP[$s] + 24;
      HEAP[$243] = 0;
      
      
      
      var $247 = HEAP[HEAP[$_py_tmp38]] - 1;
      
      var $249 = HEAP[$_py_tmp38];
      HEAP[$249] = $247;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp38]] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $258 = HEAP[HEAP[HEAP[$_py_tmp38] + 4] + 24];
      var $259 = HEAP[$_py_tmp38];
      FUNCTION_TABLE[$258]($259);
      __label__ = 38;
      break;
     case 38:
      
      
      
      
      if (HEAP[HEAP[$s] + 28] != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 39:
      
      
      var $266 = HEAP[HEAP[$s] + 28];
      HEAP[$_py_tmp42] = $266;
      
      var $268 = HEAP[$s] + 28;
      HEAP[$268] = 0;
      
      
      
      var $272 = HEAP[HEAP[$_py_tmp42]] - 1;
      
      var $274 = HEAP[$_py_tmp42];
      HEAP[$274] = $272;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp42]] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      
      
      var $283 = HEAP[HEAP[HEAP[$_py_tmp42] + 4] + 24];
      var $284 = HEAP[$_py_tmp42];
      FUNCTION_TABLE[$283]($284);
      __label__ = 41;
      break;
     case 41:
      
      
      
      
      if (HEAP[HEAP[$s] + 32] != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 42:
      
      
      var $291 = HEAP[HEAP[$s] + 32];
      HEAP[$_py_tmp46] = $291;
      
      var $293 = HEAP[$s] + 32;
      HEAP[$293] = 0;
      
      
      
      var $297 = HEAP[HEAP[$_py_tmp46]] - 1;
      
      var $299 = HEAP[$_py_tmp46];
      HEAP[$299] = $297;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp46]] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      
      
      var $308 = HEAP[HEAP[HEAP[$_py_tmp46] + 4] + 24];
      var $309 = HEAP[$_py_tmp46];
      FUNCTION_TABLE[$308]($309);
      __label__ = 44;
      break;
     case 44:
      HEAP[$0] = -1;
      __label__ = 45;
      break;
     case 45:
      var $310 = HEAP[$0];
      HEAP[$retval] = $310;
      __label__ = 46;
      break;
     case 46:
      var $retval50 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval50;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _encoder_new($type, $args, $kwds) {
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
      var $s = __stackBase__ + 20;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      
      var $3 = HEAP[HEAP[$type_addr] + 152];
      var $4 = HEAP[$type_addr];
      var $5 = FUNCTION_TABLE[$3]($4, 0);
      var $6 = $5;
      HEAP[$s] = $6;
      
      
      if (HEAP[$s] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $10 = HEAP[$s] + 8;
      HEAP[$10] = 0;
      
      var $12 = HEAP[$s] + 12;
      HEAP[$12] = 0;
      
      var $14 = HEAP[$s] + 16;
      HEAP[$14] = 0;
      
      var $16 = HEAP[$s] + 20;
      HEAP[$16] = 0;
      
      var $18 = HEAP[$s] + 24;
      HEAP[$18] = 0;
      
      var $20 = HEAP[$s] + 28;
      HEAP[$20] = 0;
      
      var $22 = HEAP[$s] + 32;
      HEAP[$22] = 0;
      
      var $24 = HEAP[$s] + 36;
      HEAP[$24] = 0;
      __label__ = 2;
      break;
     case 2:
      
      var $26 = HEAP[$s];
      HEAP[$0] = $26;
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
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
  function _encoder_init($self, $args, $kwds) {
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
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $iftmp_146 = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $s = __stackBase__ + 24;
      var $markers = __stackBase__ + 28;
      var $defaultfn = __stackBase__ + 32;
      var $encoder = __stackBase__ + 36;
      var $indent = __stackBase__ + 40;
      var $key_separator = __stackBase__ + 44;
      var $item_separator = __stackBase__ + 48;
      var $sort_keys = __stackBase__ + 52;
      var $skipkeys = __stackBase__ + 56;
      var $allow_nan = __stackBase__ + 60;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 4] != _PyEncoderType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyEncoderType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str47, __str29, 1838, ___PRETTY_FUNCTION___10897);
      throw "Reached an unreachable!";
     case 3:
      
      var $11 = HEAP[$self_addr];
      HEAP[$s] = $11;
      var $12 = HEAP[$args_addr];
      var $13 = HEAP[$kwds_addr];
      var $14 = _PyArg_ParseTupleAndKeywords($12, $13, __str48, _kwlist_10886, allocate([ $markers, 0, 0, 0, $defaultfn, 0, 0, 0, $encoder, 0, 0, 0, $indent, 0, 0, 0, $key_separator, 0, 0, 0, $item_separator, 0, 0, 0, $sort_keys, 0, 0, 0, $skipkeys, 0, 0, 0, $allow_nan, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($14 == 0) {
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
      var $16 = HEAP[$markers];
      
      var $18 = HEAP[$s] + 8;
      HEAP[$18] = $16;
      var $19 = HEAP[$defaultfn];
      
      var $21 = HEAP[$s] + 12;
      HEAP[$21] = $19;
      var $22 = HEAP[$encoder];
      
      var $24 = HEAP[$s] + 16;
      HEAP[$24] = $22;
      var $25 = HEAP[$indent];
      
      var $27 = HEAP[$s] + 20;
      HEAP[$27] = $25;
      var $28 = HEAP[$key_separator];
      
      var $30 = HEAP[$s] + 24;
      HEAP[$30] = $28;
      var $31 = HEAP[$item_separator];
      
      var $33 = HEAP[$s] + 28;
      HEAP[$33] = $31;
      var $34 = HEAP[$sort_keys];
      
      var $36 = HEAP[$s] + 32;
      HEAP[$36] = $34;
      var $37 = HEAP[$skipkeys];
      
      var $39 = HEAP[$s] + 36;
      HEAP[$39] = $37;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$s] + 16] + 4] != _PyCFunction_Type) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $48 = HEAP[HEAP[$s] + 16];
      var $49 = _PyCFunction_GetFunction($48);
      
      if ($49 != FUNCTION_TABLE_OFFSET + 6) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      HEAP[$iftmp_146] = 1;
      __label__ = 9;
      break;
     case 8:
      HEAP[$iftmp_146] = 0;
      __label__ = 9;
      break;
     case 9:
      
      var $52 = HEAP[$s] + 40;
      var $53 = HEAP[$iftmp_146];
      HEAP[$52] = $53;
      var $54 = HEAP[$allow_nan];
      var $55 = _PyObject_IsTrue($54);
      
      var $57 = HEAP[$s] + 44;
      HEAP[$57] = $55;
      
      
      
      
      
      var $63 = HEAP[HEAP[HEAP[$s] + 8]] + 1;
      var $64 = HEAP[HEAP[$s] + 8];
      HEAP[$64] = $63;
      
      
      
      
      
      var $70 = HEAP[HEAP[HEAP[$s] + 12]] + 1;
      var $71 = HEAP[HEAP[$s] + 12];
      HEAP[$71] = $70;
      
      
      
      
      
      var $77 = HEAP[HEAP[HEAP[$s] + 16]] + 1;
      var $78 = HEAP[HEAP[$s] + 16];
      HEAP[$78] = $77;
      
      
      
      
      
      var $84 = HEAP[HEAP[HEAP[$s] + 20]] + 1;
      var $85 = HEAP[HEAP[$s] + 20];
      HEAP[$85] = $84;
      
      
      
      
      
      var $91 = HEAP[HEAP[HEAP[$s] + 24]] + 1;
      var $92 = HEAP[HEAP[$s] + 24];
      HEAP[$92] = $91;
      
      
      
      
      
      var $98 = HEAP[HEAP[HEAP[$s] + 28]] + 1;
      var $99 = HEAP[HEAP[$s] + 28];
      HEAP[$99] = $98;
      
      
      
      
      
      var $105 = HEAP[HEAP[HEAP[$s] + 32]] + 1;
      var $106 = HEAP[HEAP[$s] + 32];
      HEAP[$106] = $105;
      
      
      
      
      
      var $112 = HEAP[HEAP[HEAP[$s] + 36]] + 1;
      var $113 = HEAP[HEAP[$s] + 36];
      HEAP[$113] = $112;
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 10:
      var $114 = HEAP[$0];
      HEAP[$retval] = $114;
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
  function _encoder_call($self, $args, $kwds) {
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
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $obj = __stackBase__ + 20;
      var $rval = __stackBase__ + 24;
      var $indent_level = __stackBase__ + 28;
      var $s = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 4] != _PyEncoderType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyEncoderType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str47, __str29, 1877, ___PRETTY_FUNCTION___10963);
      throw "Reached an unreachable!";
     case 3:
      
      var $11 = HEAP[$self_addr];
      HEAP[$s] = $11;
      var $12 = HEAP[$args_addr];
      var $13 = HEAP[$kwds_addr];
      var $14 = _PyArg_ParseTupleAndKeywords($12, $13, __str50, _kwlist_10958, allocate([ $obj, 0, 0, 0, FUNCTION_TABLE_OFFSET + 4, 0, 0, 0, $indent_level, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32 (%struct.PyObject*, i32*)*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($14 == 0) {
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
      var $16 = _PyList_New(0);
      HEAP[$rval] = $16;
      
      
      if (HEAP[$rval] == 0) {
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
      var $19 = HEAP[$indent_level];
      var $20 = HEAP[$obj];
      var $21 = HEAP[$s];
      var $22 = HEAP[$rval];
      var $23 = _encoder_listencode_obj($21, $22, $20, $19);
      
      if ($23 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $28 = HEAP[HEAP[$rval]] - 1;
      
      var $30 = HEAP[$rval];
      HEAP[$30] = $28;
      
      
      
      
      if (HEAP[HEAP[$rval]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $39 = HEAP[HEAP[HEAP[$rval] + 4] + 24];
      var $40 = HEAP[$rval];
      FUNCTION_TABLE[$39]($40);
      __label__ = 10;
      break;
     case 10:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 11:
      var $41 = HEAP[$rval];
      HEAP[$0] = $41;
      __label__ = 12;
      break;
     case 12:
      var $42 = HEAP[$0];
      HEAP[$retval] = $42;
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
  function __encoded_const($obj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $obj_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$obj_addr] = $obj;
      
      
      if (HEAP[$obj_addr] == __Py_NoneStruct) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      if (HEAP[_s_null_10994] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $5 = _PyString_InternFromString(__str53);
      HEAP[_s_null_10994] = $5;
      __label__ = 3;
      break;
     case 3:
      
      
      
      var $9 = HEAP[HEAP[_s_null_10994]] + 1;
      var $10 = HEAP[_s_null_10994];
      HEAP[$10] = $9;
      var $11 = HEAP[_s_null_10994];
      HEAP[$0] = $11;
      __label__ = 13;
      break;
     case 4:
      
      
      if (HEAP[$obj_addr] == __Py_TrueStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      if (HEAP[_s_true_10995] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $16 = _PyString_InternFromString(__str54);
      HEAP[_s_true_10995] = $16;
      __label__ = 7;
      break;
     case 7:
      
      
      
      var $20 = HEAP[HEAP[_s_true_10995]] + 1;
      var $21 = HEAP[_s_true_10995];
      HEAP[$21] = $20;
      var $22 = HEAP[_s_true_10995];
      HEAP[$0] = $22;
      __label__ = 13;
      break;
     case 8:
      
      
      if (HEAP[$obj_addr] == __Py_ZeroStruct) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      if (HEAP[_s_false_10996] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $27 = _PyString_InternFromString(__str55);
      HEAP[_s_false_10996] = $27;
      __label__ = 11;
      break;
     case 11:
      
      
      
      var $31 = HEAP[HEAP[_s_false_10996]] + 1;
      var $32 = HEAP[_s_false_10996];
      HEAP[$32] = $31;
      var $33 = HEAP[_s_false_10996];
      HEAP[$0] = $33;
      __label__ = 13;
      break;
     case 12:
      var $34 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($34, __str56);
      HEAP[$0] = 0;
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
  function _encoder_encode_float($s, $obj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $obj_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      
      HEAP[$s_addr] = $s;
      HEAP[$obj_addr] = $obj;
      
      
      
      var $4 = HEAP[HEAP[$obj_addr] + 8];
      HEAP[$i] = $4;
      var $5 = HEAP[$i];
      var $6 = ___finite($5);
      
      if ($6 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 44] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $12 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($12, __str57);
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 3:
      
      
      if (HEAP[$i] > 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $15 = _PyString_FromString(__str37);
      HEAP[$0] = $15;
      __label__ = 9;
      break;
     case 5:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $18 = _PyString_FromString(__str38);
      HEAP[$0] = $18;
      __label__ = 9;
      break;
     case 7:
      var $19 = _PyString_FromString(__str36);
      HEAP[$0] = $19;
      __label__ = 9;
      break;
     case 8:
      var $20 = HEAP[$obj_addr];
      var $21 = _PyObject_Repr($20);
      HEAP[$0] = $21;
      __label__ = 9;
      break;
     case 9:
      var $22 = HEAP[$0];
      HEAP[$retval] = $22;
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
  function _encoder_encode_string($s, $obj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $obj_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$s_addr] = $s;
      HEAP[$obj_addr] = $obj;
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 40] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[$obj_addr];
      var $6 = _py_encode_basestring_ascii(0, $5);
      HEAP[$0] = $6;
      __label__ = 3;
      break;
     case 2:
      
      
      var $9 = HEAP[HEAP[$s_addr] + 16];
      var $10 = HEAP[$obj_addr];
      var $11 = _PyObject_CallFunctionObjArgs($9, allocate([ $10, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $11;
      __label__ = 3;
      break;
     case 3:
      var $12 = HEAP[$0];
      HEAP[$retval] = $12;
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
  function __steal_list_append($lst, $stolen) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lst_addr = __stackBase__;
      var $stolen_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $rval = __stackBase__ + 16;
      
      HEAP[$lst_addr] = $lst;
      HEAP[$stolen_addr] = $stolen;
      var $1 = HEAP[$lst_addr];
      var $2 = HEAP[$stolen_addr];
      var $3 = _PyList_Append($1, $2);
      HEAP[$rval] = $3;
      
      
      
      var $7 = HEAP[HEAP[$stolen_addr]] - 1;
      
      var $9 = HEAP[$stolen_addr];
      HEAP[$9] = $7;
      
      
      
      
      if (HEAP[HEAP[$stolen_addr]] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      var $18 = HEAP[HEAP[HEAP[$stolen_addr] + 4] + 24];
      var $19 = HEAP[$stolen_addr];
      FUNCTION_TABLE[$18]($19);
      __label__ = 2;
      break;
     case 2:
      var $20 = HEAP[$rval];
      HEAP[$0] = $20;
      var $21 = HEAP[$0];
      HEAP[$retval] = $21;
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
  function _encoder_listencode_obj($s, $rval, $obj, $indent_level) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $rval_addr = __stackBase__ + 4;
      var $obj_addr = __stackBase__ + 8;
      var $indent_level_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $newobj = __stackBase__ + 24;
      var $rv = __stackBase__ + 28;
      var $cstr = __stackBase__ + 32;
      var $encoded = __stackBase__ + 36;
      var $encoded13 = __stackBase__ + 40;
      var $encoded19 = __stackBase__ + 44;
      var $ident = __stackBase__ + 48;
      var $has_key = __stackBase__ + 52;
      
      HEAP[$s_addr] = $s;
      HEAP[$rval_addr] = $rval;
      HEAP[$obj_addr] = $obj;
      HEAP[$indent_level_addr] = $indent_level;
      
      
      if (HEAP[$obj_addr] == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[$obj_addr] == __Py_TrueStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$obj_addr] == __Py_ZeroStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      var $7 = HEAP[$obj_addr];
      var $8 = __encoded_const($7);
      HEAP[$cstr] = $8;
      
      
      if (HEAP[$cstr] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 70;
      break;
     case 5:
      var $11 = HEAP[$rval_addr];
      var $12 = HEAP[$cstr];
      var $13 = __steal_list_append($11, $12);
      HEAP[$0] = $13;
      __label__ = 70;
      break;
     case 6:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$obj_addr] + 4] + 84] & 134217728) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$obj_addr] + 4] + 84] & 268435456) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      var $28 = HEAP[$s_addr];
      var $29 = HEAP[$obj_addr];
      var $30 = _encoder_encode_string($28, $29);
      HEAP[$encoded] = $30;
      
      
      if (HEAP[$encoded] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = -1;
      __label__ = 70;
      break;
     case 10:
      var $33 = HEAP[$rval_addr];
      var $34 = HEAP[$encoded];
      var $35 = __steal_list_append($33, $34);
      HEAP[$0] = $35;
      __label__ = 70;
      break;
     case 11:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$obj_addr] + 4] + 84] & 8388608) != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$obj_addr] + 4] + 84] & 16777216) != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      var $50 = HEAP[$obj_addr];
      var $51 = _PyObject_Str($50);
      HEAP[$encoded13] = $51;
      
      
      if (HEAP[$encoded13] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      HEAP[$0] = -1;
      __label__ = 70;
      break;
     case 15:
      var $54 = HEAP[$rval_addr];
      var $55 = HEAP[$encoded13];
      var $56 = __steal_list_append($54, $55);
      HEAP[$0] = $56;
      __label__ = 70;
      break;
     case 16:
      
      
      
      
      if (HEAP[HEAP[$obj_addr] + 4] == _PyFloat_Type) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      var $63 = HEAP[HEAP[$obj_addr] + 4];
      var $64 = _PyType_IsSubtype($63, _PyFloat_Type);
      
      if ($64 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      var $66 = HEAP[$s_addr];
      var $67 = HEAP[$obj_addr];
      var $68 = _encoder_encode_float($66, $67);
      HEAP[$encoded19] = $68;
      
      
      if (HEAP[$encoded19] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$0] = -1;
      __label__ = 70;
      break;
     case 20:
      var $71 = HEAP[$rval_addr];
      var $72 = HEAP[$encoded19];
      var $73 = __steal_list_append($71, $72);
      HEAP[$0] = $73;
      __label__ = 70;
      break;
     case 21:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$obj_addr] + 4] + 84] & 33554432) != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$obj_addr] + 4] + 84] & 67108864) != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 23:
      var $88 = HEAP[__PyThreadState_Current];
      
      
      var $91 = HEAP[$88 + 12] + 1;
      var $92 = $88 + 12;
      HEAP[$92] = $91;
      
      
      
      
      if (HEAP[$88 + 12] > HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 24:
      var $97 = __Py_CheckRecursiveCall(__str58);
      
      if ($97 != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      HEAP[$0] = -1;
      __label__ = 70;
      break;
     case 26:
      var $99 = HEAP[$s_addr];
      var $100 = HEAP[$rval_addr];
      var $101 = HEAP[$obj_addr];
      var $102 = HEAP[$indent_level_addr];
      var $103 = _encoder_listencode_list($99, $100, $101, $102);
      HEAP[$rv] = $103;
      
      
      
      var $107 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $108 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$108] = $107;
      var $109 = HEAP[$rv];
      HEAP[$0] = $109;
      __label__ = 70;
      break;
     case 27:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$obj_addr] + 4] + 84] & 536870912) != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 28:
      var $117 = HEAP[__PyThreadState_Current];
      
      
      var $120 = HEAP[$117 + 12] + 1;
      var $121 = $117 + 12;
      HEAP[$121] = $120;
      
      
      
      
      if (HEAP[$117 + 12] > HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 29;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 29:
      var $126 = __Py_CheckRecursiveCall(__str58);
      
      if ($126 != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      HEAP[$0] = -1;
      __label__ = 70;
      break;
     case 31:
      var $128 = HEAP[$s_addr];
      var $129 = HEAP[$rval_addr];
      var $130 = HEAP[$obj_addr];
      var $131 = HEAP[$indent_level_addr];
      var $132 = _encoder_listencode_dict($128, $129, $130, $131);
      HEAP[$rv] = $132;
      
      
      
      var $136 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $137 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$137] = $136;
      var $138 = HEAP[$rv];
      HEAP[$0] = $138;
      __label__ = 70;
      break;
     case 32:
      HEAP[$ident] = 0;
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 8] != __Py_NoneStruct) {
        __label__ = 33;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 33:
      
      var $144 = HEAP[$obj_addr];
      var $145 = _PyLong_FromVoidPtr($144);
      HEAP[$ident] = $145;
      
      
      if (HEAP[$ident] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      HEAP[$0] = -1;
      __label__ = 70;
      break;
     case 35:
      
      
      var $150 = HEAP[HEAP[$s_addr] + 8];
      var $151 = HEAP[$ident];
      var $152 = _PyDict_Contains($150, $151);
      HEAP[$has_key] = $152;
      
      
      if (HEAP[$has_key] != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 36:
      
      var $156 = HEAP[$has_key] != -1;
      if ($156) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      var $157 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($157, __str59);
      __label__ = 38;
      break;
     case 38:
      
      
      
      var $161 = HEAP[HEAP[$ident]] - 1;
      
      var $163 = HEAP[$ident];
      HEAP[$163] = $161;
      
      
      
      
      if (HEAP[HEAP[$ident]] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      var $172 = HEAP[HEAP[HEAP[$ident] + 4] + 24];
      var $173 = HEAP[$ident];
      FUNCTION_TABLE[$172]($173);
      __label__ = 40;
      break;
     case 40:
      HEAP[$0] = -1;
      __label__ = 70;
      break;
     case 41:
      
      
      var $176 = HEAP[HEAP[$s_addr] + 8];
      var $177 = HEAP[$ident];
      var $178 = HEAP[$obj_addr];
      var $179 = _PyDict_SetItem($176, $177, $178);
      
      if ($179 != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 42:
      
      
      
      var $184 = HEAP[HEAP[$ident]] - 1;
      
      var $186 = HEAP[$ident];
      HEAP[$186] = $184;
      
      
      
      
      if (HEAP[HEAP[$ident]] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      
      
      var $195 = HEAP[HEAP[HEAP[$ident] + 4] + 24];
      var $196 = HEAP[$ident];
      FUNCTION_TABLE[$195]($196);
      __label__ = 44;
      break;
     case 44:
      HEAP[$0] = -1;
      __label__ = 70;
      break;
     case 45:
      
      
      var $199 = HEAP[HEAP[$s_addr] + 12];
      var $200 = HEAP[$obj_addr];
      var $201 = _PyObject_CallFunctionObjArgs($199, allocate([ $200, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$newobj] = $201;
      
      
      if (HEAP[$newobj] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 46:
      
      
      if (HEAP[$ident] != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 47:
      
      
      
      var $209 = HEAP[HEAP[$ident]] - 1;
      
      var $211 = HEAP[$ident];
      HEAP[$211] = $209;
      
      
      
      
      if (HEAP[HEAP[$ident]] == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      
      
      
      var $220 = HEAP[HEAP[HEAP[$ident] + 4] + 24];
      var $221 = HEAP[$ident];
      FUNCTION_TABLE[$220]($221);
      __label__ = 49;
      break;
     case 49:
      HEAP[$0] = -1;
      __label__ = 70;
      break;
     case 50:
      var $222 = HEAP[__PyThreadState_Current];
      
      
      var $225 = HEAP[$222 + 12] + 1;
      var $226 = $222 + 12;
      HEAP[$226] = $225;
      
      
      
      
      if (HEAP[$222 + 12] > HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 51;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 51:
      var $231 = __Py_CheckRecursiveCall(__str58);
      
      if ($231 != 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      HEAP[$0] = -1;
      __label__ = 70;
      break;
     case 53:
      var $233 = HEAP[$s_addr];
      var $234 = HEAP[$rval_addr];
      var $235 = HEAP[$newobj];
      var $236 = HEAP[$indent_level_addr];
      var $237 = _encoder_listencode_obj($233, $234, $235, $236);
      HEAP[$rv] = $237;
      
      
      
      var $241 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $242 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$242] = $241;
      
      
      
      var $246 = HEAP[HEAP[$newobj]] - 1;
      
      var $248 = HEAP[$newobj];
      HEAP[$248] = $246;
      
      
      
      
      if (HEAP[HEAP[$newobj]] == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      
      
      
      
      var $257 = HEAP[HEAP[HEAP[$newobj] + 4] + 24];
      var $258 = HEAP[$newobj];
      FUNCTION_TABLE[$257]($258);
      __label__ = 55;
      break;
     case 55:
      
      
      if (HEAP[$rv] != 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 56:
      
      
      if (HEAP[$ident] != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 57:
      
      
      
      var $266 = HEAP[HEAP[$ident]] - 1;
      
      var $268 = HEAP[$ident];
      HEAP[$268] = $266;
      
      
      
      
      if (HEAP[HEAP[$ident]] == 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 58:
      
      
      
      
      var $277 = HEAP[HEAP[HEAP[$ident] + 4] + 24];
      var $278 = HEAP[$ident];
      FUNCTION_TABLE[$277]($278);
      __label__ = 59;
      break;
     case 59:
      HEAP[$0] = -1;
      __label__ = 70;
      break;
     case 60:
      
      
      if (HEAP[$ident] != 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 61:
      
      
      var $283 = HEAP[HEAP[$s_addr] + 8];
      var $284 = HEAP[$ident];
      var $285 = _PyDict_DelItem($283, $284);
      
      if ($285 != 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 62:
      
      
      if (HEAP[$ident] != 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 63:
      
      
      
      var $292 = HEAP[HEAP[$ident]] - 1;
      
      var $294 = HEAP[$ident];
      HEAP[$294] = $292;
      
      
      
      
      if (HEAP[HEAP[$ident]] == 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 64:
      
      
      
      
      var $303 = HEAP[HEAP[HEAP[$ident] + 4] + 24];
      var $304 = HEAP[$ident];
      FUNCTION_TABLE[$303]($304);
      __label__ = 65;
      break;
     case 65:
      HEAP[$0] = -1;
      __label__ = 70;
      break;
     case 66:
      
      
      if (HEAP[$ident] != 0) {
        __label__ = 67;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 67:
      
      
      
      var $310 = HEAP[HEAP[$ident]] - 1;
      
      var $312 = HEAP[$ident];
      HEAP[$312] = $310;
      
      
      
      
      if (HEAP[HEAP[$ident]] == 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 68:
      
      
      
      
      var $321 = HEAP[HEAP[HEAP[$ident] + 4] + 24];
      var $322 = HEAP[$ident];
      FUNCTION_TABLE[$321]($322);
      __label__ = 69;
      break;
     case 69:
      var $323 = HEAP[$rv];
      HEAP[$0] = $323;
      __label__ = 70;
      break;
     case 70:
      var $324 = HEAP[$0];
      HEAP[$retval] = $324;
      __label__ = 71;
      break;
     case 71:
      var $retval72 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval72;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _encoder_listencode_dict($s, $rval, $dct, $indent_level) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 76;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 76);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $rval_addr = __stackBase__ + 4;
      var $dct_addr = __stackBase__ + 8;
      var $indent_level_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $kstr = __stackBase__ + 24;
      var $ident = __stackBase__ + 28;
      var $key = __stackBase__ + 32;
      var $value = __stackBase__ + 36;
      var $it = __stackBase__ + 40;
      var $skipkeys = __stackBase__ + 44;
      var $idx = __stackBase__ + 48;
      var $has_key = __stackBase__ + 52;
      var $encoded = __stackBase__ + 56;
      var $_py_tmp = __stackBase__ + 60;
      var $_py_tmp58 = __stackBase__ + 64;
      var $_py_tmp66 = __stackBase__ + 68;
      var $_py_tmp72 = __stackBase__ + 72;
      
      HEAP[$s_addr] = $s;
      HEAP[$rval_addr] = $rval;
      HEAP[$dct_addr] = $dct;
      HEAP[$indent_level_addr] = $indent_level;
      HEAP[$kstr] = 0;
      HEAP[$ident] = 0;
      HEAP[$key] = 0;
      HEAP[$value] = 0;
      HEAP[$it] = 0;
      
      
      if (HEAP[_open_dict_11289] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[_close_dict_11290] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[_empty_dict_11291] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      var $7 = _PyString_InternFromString(__str60);
      HEAP[_open_dict_11289] = $7;
      var $8 = _PyString_InternFromString(__str61);
      HEAP[_close_dict_11290] = $8;
      var $9 = _PyString_InternFromString(__str62);
      HEAP[_empty_dict_11291] = $9;
      
      
      if (HEAP[_open_dict_11289] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if (HEAP[_close_dict_11290] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      if (HEAP[_empty_dict_11291] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = -1;
      __label__ = 90;
      break;
     case 7:
      
      
      
      
      
      if (HEAP[HEAP[$dct_addr] + 8] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $21 = HEAP[_empty_dict_11291];
      var $22 = HEAP[$rval_addr];
      var $23 = _PyList_Append($22, $21);
      HEAP[$0] = $23;
      __label__ = 90;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 8] != __Py_NoneStruct) {
        __label__ = 10;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 10:
      
      var $29 = HEAP[$dct_addr];
      var $30 = _PyLong_FromVoidPtr($29);
      HEAP[$ident] = $30;
      
      
      if (HEAP[$ident] == 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $35 = HEAP[HEAP[$s_addr] + 8];
      var $36 = HEAP[$ident];
      var $37 = _PyDict_Contains($35, $36);
      HEAP[$has_key] = $37;
      
      
      if (HEAP[$has_key] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      var $41 = HEAP[$has_key] != -1;
      if ($41) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $42 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($42, __str59);
      __label__ = 14;
      break;
     case 14:
      __label__ = 74;
      break;
     case 15:
      
      
      var $45 = HEAP[HEAP[$s_addr] + 8];
      var $46 = HEAP[$ident];
      var $47 = HEAP[$dct_addr];
      var $48 = _PyDict_SetItem($45, $46, $47);
      
      if ($48 != 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $50 = HEAP[_open_dict_11289];
      var $51 = HEAP[$rval_addr];
      var $52 = _PyList_Append($51, $50);
      
      if ($52 != 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 20] != __Py_NoneStruct) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      var $59 = HEAP[$indent_level_addr] + 1;
      HEAP[$indent_level_addr] = $59;
      __label__ = 19;
      break;
     case 19:
      var $60 = HEAP[$dct_addr];
      var $61 = _PyObject_GetIter($60);
      HEAP[$it] = $61;
      
      
      if (HEAP[$it] == 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      var $66 = HEAP[HEAP[$s_addr] + 36];
      var $67 = _PyObject_IsTrue($66);
      HEAP[$skipkeys] = $67;
      HEAP[$idx] = 0;
      __label__ = 62;
      break;
     case 21:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$key] + 4] + 84] & 134217728) != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$key] + 4] + 84] & 268435456) != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      var $85 = HEAP[HEAP[$key]] + 1;
      
      var $87 = HEAP[$key];
      HEAP[$87] = $85;
      var $88 = HEAP[$key];
      HEAP[$kstr] = $88;
      __label__ = 42;
      break;
     case 24:
      
      
      
      
      if (HEAP[HEAP[$key] + 4] == _PyFloat_Type) {
        __label__ = 26;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      var $95 = HEAP[HEAP[$key] + 4];
      var $96 = _PyType_IsSubtype($95, _PyFloat_Type);
      
      if ($96 != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 26:
      var $98 = HEAP[$s_addr];
      var $99 = HEAP[$key];
      var $100 = _encoder_encode_float($98, $99);
      HEAP[$kstr] = $100;
      
      
      if (HEAP[$kstr] == 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      __label__ = 42;
      break;
     case 28:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$key] + 4] + 84] & 8388608) != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$key] + 4] + 84] & 16777216) != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      var $117 = HEAP[$key];
      var $118 = _PyObject_Str($117);
      HEAP[$kstr] = $118;
      
      
      if (HEAP[$kstr] == 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      __label__ = 42;
      break;
     case 32:
      
      
      if (HEAP[$key] == __Py_TrueStruct) {
        __label__ = 35;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      if (HEAP[$key] == __Py_ZeroStruct) {
        __label__ = 35;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      if (HEAP[$key] == __Py_NoneStruct) {
        __label__ = 35;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 35:
      var $127 = HEAP[$key];
      var $128 = __encoded_const($127);
      HEAP[$kstr] = $128;
      
      
      if (HEAP[$kstr] == 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      __label__ = 42;
      break;
     case 37:
      
      
      if (HEAP[$skipkeys] != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 38:
      
      
      
      var $136 = HEAP[HEAP[$key]] - 1;
      
      var $138 = HEAP[$key];
      HEAP[$138] = $136;
      
      
      
      
      if (HEAP[HEAP[$key]] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      var $147 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $148 = HEAP[$key];
      FUNCTION_TABLE[$147]($148);
      __label__ = 40;
      break;
     case 40:
      __label__ = 62;
      break;
     case 41:
      var $149 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($149, __str63);
      __label__ = 74;
      break;
     case 42:
      
      
      if (HEAP[$idx] != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      var $154 = HEAP[HEAP[$s_addr] + 28];
      var $155 = HEAP[$rval_addr];
      var $156 = _PyList_Append($155, $154);
      
      if ($156 != 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      var $158 = HEAP[$dct_addr];
      var $159 = HEAP[$key];
      var $160 = _PyObject_GetItem($158, $159);
      HEAP[$value] = $160;
      
      
      if (HEAP[$value] == 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 45:
      var $163 = HEAP[$s_addr];
      var $164 = HEAP[$kstr];
      var $165 = _encoder_encode_string($163, $164);
      HEAP[$encoded] = $165;
      
      
      if (HEAP[$kstr] != 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 46:
      var $168 = HEAP[$kstr];
      HEAP[$_py_tmp] = $168;
      HEAP[$kstr] = 0;
      
      
      
      var $172 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $174 = HEAP[$_py_tmp];
      HEAP[$174] = $172;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      
      
      
      
      var $183 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $184 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$183]($184);
      __label__ = 48;
      break;
     case 48:
      
      
      if (HEAP[$encoded] == 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 49:
      var $187 = HEAP[$rval_addr];
      var $188 = HEAP[$encoded];
      var $189 = _PyList_Append($187, $188);
      
      if ($189 != 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 50:
      
      
      
      var $194 = HEAP[HEAP[$encoded]] - 1;
      
      var $196 = HEAP[$encoded];
      HEAP[$196] = $194;
      
      
      
      
      if (HEAP[HEAP[$encoded]] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      
      
      
      
      var $205 = HEAP[HEAP[HEAP[$encoded] + 4] + 24];
      var $206 = HEAP[$encoded];
      FUNCTION_TABLE[$205]($206);
      __label__ = 52;
      break;
     case 52:
      __label__ = 74;
      break;
     case 53:
      
      
      
      var $210 = HEAP[HEAP[$encoded]] - 1;
      
      var $212 = HEAP[$encoded];
      HEAP[$212] = $210;
      
      
      
      
      if (HEAP[HEAP[$encoded]] == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      
      
      
      
      var $221 = HEAP[HEAP[HEAP[$encoded] + 4] + 24];
      var $222 = HEAP[$encoded];
      FUNCTION_TABLE[$221]($222);
      __label__ = 55;
      break;
     case 55:
      
      
      var $225 = HEAP[HEAP[$s_addr] + 24];
      var $226 = HEAP[$rval_addr];
      var $227 = _PyList_Append($226, $225);
      
      if ($227 != 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 56:
      var $229 = HEAP[$s_addr];
      var $230 = HEAP[$rval_addr];
      var $231 = HEAP[$value];
      var $232 = HEAP[$indent_level_addr];
      var $233 = _encoder_listencode_obj($229, $230, $231, $232);
      
      if ($233 != 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 57:
      
      var $236 = HEAP[$idx] + 1;
      HEAP[$idx] = $236;
      
      
      if (HEAP[$value] != 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 58:
      var $239 = HEAP[$value];
      HEAP[$_py_tmp58] = $239;
      HEAP[$value] = 0;
      
      
      
      var $243 = HEAP[HEAP[$_py_tmp58]] - 1;
      
      var $245 = HEAP[$_py_tmp58];
      HEAP[$245] = $243;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp58]] == 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      
      
      
      
      var $254 = HEAP[HEAP[HEAP[$_py_tmp58] + 4] + 24];
      var $255 = HEAP[$_py_tmp58];
      FUNCTION_TABLE[$254]($255);
      __label__ = 60;
      break;
     case 60:
      
      
      
      var $259 = HEAP[HEAP[$key]] - 1;
      
      var $261 = HEAP[$key];
      HEAP[$261] = $259;
      
      
      
      
      if (HEAP[HEAP[$key]] == 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      
      
      
      
      var $270 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $271 = HEAP[$key];
      FUNCTION_TABLE[$270]($271);
      __label__ = 62;
      break;
     case 62:
      var $272 = HEAP[$it];
      var $273 = _PyIter_Next($272);
      HEAP[$key] = $273;
      
      
      if (HEAP[$key] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 63:
      var $276 = _PyErr_Occurred();
      
      if ($276 != 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 64:
      
      
      if (HEAP[$it] != 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 65:
      var $280 = HEAP[$it];
      HEAP[$_py_tmp66] = $280;
      HEAP[$it] = 0;
      
      
      
      var $284 = HEAP[HEAP[$_py_tmp66]] - 1;
      
      var $286 = HEAP[$_py_tmp66];
      HEAP[$286] = $284;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp66]] == 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 66:
      
      
      
      
      var $295 = HEAP[HEAP[HEAP[$_py_tmp66] + 4] + 24];
      var $296 = HEAP[$_py_tmp66];
      FUNCTION_TABLE[$295]($296);
      __label__ = 67;
      break;
     case 67:
      
      
      if (HEAP[$ident] != 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 68:
      
      
      var $301 = HEAP[HEAP[$s_addr] + 8];
      var $302 = HEAP[$ident];
      var $303 = _PyDict_DelItem($301, $302);
      
      if ($303 != 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 69:
      
      
      if (HEAP[$ident] != 0) {
        __label__ = 70;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 70:
      var $307 = HEAP[$ident];
      HEAP[$_py_tmp72] = $307;
      HEAP[$ident] = 0;
      
      
      
      var $311 = HEAP[HEAP[$_py_tmp72]] - 1;
      
      var $313 = HEAP[$_py_tmp72];
      HEAP[$313] = $311;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp72]] == 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 71:
      
      
      
      
      var $322 = HEAP[HEAP[HEAP[$_py_tmp72] + 4] + 24];
      var $323 = HEAP[$_py_tmp72];
      FUNCTION_TABLE[$322]($323);
      __label__ = 72;
      break;
     case 72:
      
      
      
      var $327 = HEAP[_close_dict_11290];
      var $328 = HEAP[$rval_addr];
      var $329 = _PyList_Append($328, $327);
      
      if ($329 != 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 73:
      HEAP[$0] = 0;
      __label__ = 90;
      break;
     case 74:
      
      
      if (HEAP[$it] != 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 75:
      
      
      
      var $336 = HEAP[HEAP[$it]] - 1;
      
      var $338 = HEAP[$it];
      HEAP[$338] = $336;
      
      
      
      
      if (HEAP[HEAP[$it]] == 0) {
        __label__ = 76;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 76:
      
      
      
      
      var $347 = HEAP[HEAP[HEAP[$it] + 4] + 24];
      var $348 = HEAP[$it];
      FUNCTION_TABLE[$347]($348);
      __label__ = 77;
      break;
     case 77:
      
      
      if (HEAP[$key] != 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 78:
      
      
      
      var $354 = HEAP[HEAP[$key]] - 1;
      
      var $356 = HEAP[$key];
      HEAP[$356] = $354;
      
      
      
      
      if (HEAP[HEAP[$key]] == 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 79:
      
      
      
      
      var $365 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $366 = HEAP[$key];
      FUNCTION_TABLE[$365]($366);
      __label__ = 80;
      break;
     case 80:
      
      
      if (HEAP[$value] != 0) {
        __label__ = 81;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 81:
      
      
      
      var $372 = HEAP[HEAP[$value]] - 1;
      
      var $374 = HEAP[$value];
      HEAP[$374] = $372;
      
      
      
      
      if (HEAP[HEAP[$value]] == 0) {
        __label__ = 82;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 82:
      
      
      
      
      var $383 = HEAP[HEAP[HEAP[$value] + 4] + 24];
      var $384 = HEAP[$value];
      FUNCTION_TABLE[$383]($384);
      __label__ = 83;
      break;
     case 83:
      
      
      if (HEAP[$kstr] != 0) {
        __label__ = 84;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 84:
      
      
      
      var $390 = HEAP[HEAP[$kstr]] - 1;
      
      var $392 = HEAP[$kstr];
      HEAP[$392] = $390;
      
      
      
      
      if (HEAP[HEAP[$kstr]] == 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      
      
      
      
      var $401 = HEAP[HEAP[HEAP[$kstr] + 4] + 24];
      var $402 = HEAP[$kstr];
      FUNCTION_TABLE[$401]($402);
      __label__ = 86;
      break;
     case 86:
      
      
      if (HEAP[$ident] != 0) {
        __label__ = 87;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 87:
      
      
      
      var $408 = HEAP[HEAP[$ident]] - 1;
      
      var $410 = HEAP[$ident];
      HEAP[$410] = $408;
      
      
      
      
      if (HEAP[HEAP[$ident]] == 0) {
        __label__ = 88;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 88:
      
      
      
      
      var $419 = HEAP[HEAP[HEAP[$ident] + 4] + 24];
      var $420 = HEAP[$ident];
      FUNCTION_TABLE[$419]($420);
      __label__ = 89;
      break;
     case 89:
      HEAP[$0] = -1;
      __label__ = 90;
      break;
     case 90:
      var $421 = HEAP[$0];
      HEAP[$retval] = $421;
      __label__ = 91;
      break;
     case 91:
      var $retval92 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval92;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _encoder_listencode_list($s, $rval, $seq, $indent_level) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 60;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $rval_addr = __stackBase__ + 4;
      var $seq_addr = __stackBase__ + 8;
      var $indent_level_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $iftmp_196 = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $ident = __stackBase__ + 28;
      var $s_fast = __stackBase__ + 32;
      var $num_items = __stackBase__ + 36;
      var $seq_items = __stackBase__ + 40;
      var $i = __stackBase__ + 44;
      var $has_key = __stackBase__ + 48;
      var $obj = __stackBase__ + 52;
      var $_py_tmp = __stackBase__ + 56;
      
      HEAP[$s_addr] = $s;
      HEAP[$rval_addr] = $rval;
      HEAP[$seq_addr] = $seq;
      HEAP[$indent_level_addr] = $indent_level;
      HEAP[$ident] = 0;
      HEAP[$s_fast] = 0;
      
      
      if (HEAP[_open_array_11548] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[_close_array_11549] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[_empty_array_11550] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      var $7 = _PyString_InternFromString(__str64);
      HEAP[_open_array_11548] = $7;
      var $8 = _PyString_InternFromString(__str65);
      HEAP[_close_array_11549] = $8;
      var $9 = _PyString_InternFromString(__str66);
      HEAP[_empty_array_11550] = $9;
      
      
      if (HEAP[_open_array_11548] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if (HEAP[_close_array_11549] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      if (HEAP[_empty_array_11550] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = -1;
      __label__ = 47;
      break;
     case 7:
      HEAP[$ident] = 0;
      var $16 = HEAP[$seq_addr];
      var $17 = _PySequence_Fast($16, __str67);
      HEAP[$s_fast] = $17;
      
      
      if (HEAP[$s_fast] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = -1;
      __label__ = 47;
      break;
     case 9:
      
      
      
      var $23 = HEAP[HEAP[$s_fast] + 8];
      HEAP[$num_items] = $23;
      
      
      if (HEAP[$num_items] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      var $29 = HEAP[HEAP[$s_fast]] - 1;
      
      var $31 = HEAP[$s_fast];
      HEAP[$31] = $29;
      
      
      
      
      if (HEAP[HEAP[$s_fast]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $40 = HEAP[HEAP[HEAP[$s_fast] + 4] + 24];
      var $41 = HEAP[$s_fast];
      FUNCTION_TABLE[$40]($41);
      __label__ = 12;
      break;
     case 12:
      var $42 = HEAP[_empty_array_11550];
      var $43 = HEAP[$rval_addr];
      var $44 = _PyList_Append($43, $42);
      HEAP[$0] = $44;
      __label__ = 47;
      break;
     case 13:
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 8] != __Py_NoneStruct) {
        __label__ = 14;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 14:
      
      var $50 = HEAP[$seq_addr];
      var $51 = _PyLong_FromVoidPtr($50);
      HEAP[$ident] = $51;
      
      
      if (HEAP[$ident] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      var $56 = HEAP[HEAP[$s_addr] + 8];
      var $57 = HEAP[$ident];
      var $58 = _PyDict_Contains($56, $57);
      HEAP[$has_key] = $58;
      
      
      if (HEAP[$has_key] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      
      var $62 = HEAP[$has_key] != -1;
      if ($62) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $63 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($63, __str59);
      __label__ = 18;
      break;
     case 18:
      __label__ = 41;
      break;
     case 19:
      
      
      var $66 = HEAP[HEAP[$s_addr] + 8];
      var $67 = HEAP[$ident];
      var $68 = HEAP[$seq_addr];
      var $69 = _PyDict_SetItem($66, $67, $68);
      
      if ($69 != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$s_fast] + 4] + 84] & 33554432) != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      var $81 = HEAP[HEAP[$s_fast] + 12];
      HEAP[$iftmp_196] = $81;
      __label__ = 23;
      break;
     case 22:
      
      
      
      var $85 = HEAP[$s_fast] + 12;
      HEAP[$iftmp_196] = $85;
      __label__ = 23;
      break;
     case 23:
      var $86 = HEAP[$iftmp_196];
      HEAP[$seq_items] = $86;
      var $87 = HEAP[_open_array_11548];
      var $88 = HEAP[$rval_addr];
      var $89 = _PyList_Append($88, $87);
      
      if ($89 != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 20] != __Py_NoneStruct) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      var $96 = HEAP[$indent_level_addr] + 1;
      HEAP[$indent_level_addr] = $96;
      __label__ = 26;
      break;
     case 26:
      HEAP[$i] = 0;
      __label__ = 31;
      break;
     case 27:
      
      
      
      var $100 = HEAP[HEAP[$seq_items] + 4 * HEAP[$i]];
      HEAP[$obj] = $100;
      
      
      if (HEAP[$i] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      var $105 = HEAP[HEAP[$s_addr] + 28];
      var $106 = HEAP[$rval_addr];
      var $107 = _PyList_Append($106, $105);
      
      if ($107 != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      var $109 = HEAP[$s_addr];
      var $110 = HEAP[$rval_addr];
      var $111 = HEAP[$obj];
      var $112 = HEAP[$indent_level_addr];
      var $113 = _encoder_listencode_obj($109, $110, $111, $112);
      
      if ($113 != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      var $116 = HEAP[$i] + 1;
      HEAP[$i] = $116;
      __label__ = 31;
      break;
     case 31:
      
      
      
      if (HEAP[$i] < HEAP[$num_items]) {
        __label__ = 27;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      if (HEAP[$ident] != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 33:
      
      
      var $124 = HEAP[HEAP[$s_addr] + 8];
      var $125 = HEAP[$ident];
      var $126 = _PyDict_DelItem($124, $125);
      
      if ($126 != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      if (HEAP[$ident] != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 35:
      var $130 = HEAP[$ident];
      HEAP[$_py_tmp] = $130;
      HEAP[$ident] = 0;
      
      
      
      var $134 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $136 = HEAP[$_py_tmp];
      HEAP[$136] = $134;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      var $145 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $146 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$145]($146);
      __label__ = 37;
      break;
     case 37:
      
      
      
      var $150 = HEAP[_close_array_11549];
      var $151 = HEAP[$rval_addr];
      var $152 = _PyList_Append($151, $150);
      
      if ($152 != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      
      
      
      var $157 = HEAP[HEAP[$s_fast]] - 1;
      
      var $159 = HEAP[$s_fast];
      HEAP[$159] = $157;
      
      
      
      
      if (HEAP[HEAP[$s_fast]] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      var $168 = HEAP[HEAP[HEAP[$s_fast] + 4] + 24];
      var $169 = HEAP[$s_fast];
      FUNCTION_TABLE[$168]($169);
      __label__ = 40;
      break;
     case 40:
      HEAP[$0] = 0;
      __label__ = 47;
      break;
     case 41:
      
      
      if (HEAP[$ident] != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 42:
      
      
      
      var $175 = HEAP[HEAP[$ident]] - 1;
      
      var $177 = HEAP[$ident];
      HEAP[$177] = $175;
      
      
      
      
      if (HEAP[HEAP[$ident]] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      
      
      var $186 = HEAP[HEAP[HEAP[$ident] + 4] + 24];
      var $187 = HEAP[$ident];
      FUNCTION_TABLE[$186]($187);
      __label__ = 44;
      break;
     case 44:
      
      
      
      var $191 = HEAP[HEAP[$s_fast]] - 1;
      
      var $193 = HEAP[$s_fast];
      HEAP[$193] = $191;
      
      
      
      
      if (HEAP[HEAP[$s_fast]] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      var $202 = HEAP[HEAP[HEAP[$s_fast] + 4] + 24];
      var $203 = HEAP[$s_fast];
      FUNCTION_TABLE[$202]($203);
      __label__ = 46;
      break;
     case 46:
      HEAP[$0] = -1;
      __label__ = 47;
      break;
     case 47:
      var $204 = HEAP[$0];
      HEAP[$retval] = $204;
      __label__ = 48;
      break;
     case 48:
      var $retval46 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval46;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _encoder_dealloc($self) {
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
      var $0 = HEAP[$self_addr];
      var $1 = _encoder_clear($0);
      
      
      
      
      var $6 = HEAP[HEAP[HEAP[$self_addr] + 4] + 160];
      
      var $8 = HEAP[$self_addr];
      FUNCTION_TABLE[$6]($8);
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _encoder_traverse($self, $visit, $arg) {
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
      var $s = __stackBase__ + 20;
      var $vret = __stackBase__ + 24;
      var $vret7 = __stackBase__ + 28;
      var $vret11 = __stackBase__ + 32;
      var $vret15 = __stackBase__ + 36;
      var $vret19 = __stackBase__ + 40;
      var $vret23 = __stackBase__ + 44;
      var $vret27 = __stackBase__ + 48;
      var $vret31 = __stackBase__ + 52;
      
      HEAP[$self_addr] = $self;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 4] != _PyEncoderType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyEncoderType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str47, __str29, 2314, ___PRETTY_FUNCTION___11686);
      throw "Reached an unreachable!";
     case 3:
      
      var $11 = HEAP[$self_addr];
      HEAP[$s] = $11;
      
      
      
      
      if (HEAP[HEAP[$s] + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $18 = HEAP[HEAP[$s] + 8];
      var $19 = HEAP[$visit_addr];
      var $20 = HEAP[$arg_addr];
      var $21 = FUNCTION_TABLE[$19]($18, $20);
      HEAP[$vret] = $21;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $24 = HEAP[$vret];
      HEAP[$0] = $24;
      __label__ = 28;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$s] + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $31 = HEAP[HEAP[$s] + 12];
      var $32 = HEAP[$visit_addr];
      var $33 = HEAP[$arg_addr];
      var $34 = FUNCTION_TABLE[$32]($31, $33);
      HEAP[$vret7] = $34;
      
      
      if (HEAP[$vret7] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $37 = HEAP[$vret7];
      HEAP[$0] = $37;
      __label__ = 28;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$s] + 16] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $44 = HEAP[HEAP[$s] + 16];
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
      __label__ = 28;
      break;
     case 12:
      
      
      
      
      if (HEAP[HEAP[$s] + 20] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      var $57 = HEAP[HEAP[$s] + 20];
      var $58 = HEAP[$visit_addr];
      var $59 = HEAP[$arg_addr];
      var $60 = FUNCTION_TABLE[$58]($57, $59);
      HEAP[$vret15] = $60;
      
      
      if (HEAP[$vret15] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $63 = HEAP[$vret15];
      HEAP[$0] = $63;
      __label__ = 28;
      break;
     case 15:
      
      
      
      
      if (HEAP[HEAP[$s] + 24] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      var $70 = HEAP[HEAP[$s] + 24];
      var $71 = HEAP[$visit_addr];
      var $72 = HEAP[$arg_addr];
      var $73 = FUNCTION_TABLE[$71]($70, $72);
      HEAP[$vret19] = $73;
      
      
      if (HEAP[$vret19] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $76 = HEAP[$vret19];
      HEAP[$0] = $76;
      __label__ = 28;
      break;
     case 18:
      
      
      
      
      if (HEAP[HEAP[$s] + 28] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $83 = HEAP[HEAP[$s] + 28];
      var $84 = HEAP[$visit_addr];
      var $85 = HEAP[$arg_addr];
      var $86 = FUNCTION_TABLE[$84]($83, $85);
      HEAP[$vret23] = $86;
      
      
      if (HEAP[$vret23] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $89 = HEAP[$vret23];
      HEAP[$0] = $89;
      __label__ = 28;
      break;
     case 21:
      
      
      
      
      if (HEAP[HEAP[$s] + 32] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      var $96 = HEAP[HEAP[$s] + 32];
      var $97 = HEAP[$visit_addr];
      var $98 = HEAP[$arg_addr];
      var $99 = FUNCTION_TABLE[$97]($96, $98);
      HEAP[$vret27] = $99;
      
      
      if (HEAP[$vret27] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      var $102 = HEAP[$vret27];
      HEAP[$0] = $102;
      __label__ = 28;
      break;
     case 24:
      
      
      
      
      if (HEAP[HEAP[$s] + 36] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      var $109 = HEAP[HEAP[$s] + 36];
      var $110 = HEAP[$visit_addr];
      var $111 = HEAP[$arg_addr];
      var $112 = FUNCTION_TABLE[$110]($109, $111);
      HEAP[$vret31] = $112;
      
      
      if (HEAP[$vret31] != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      var $115 = HEAP[$vret31];
      HEAP[$0] = $115;
      __label__ = 28;
      break;
     case 27:
      HEAP[$0] = 0;
      __label__ = 28;
      break;
     case 28:
      var $116 = HEAP[$0];
      HEAP[$retval] = $116;
      __label__ = 29;
      break;
     case 29:
      var $retval35 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval35;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _encoder_clear($self) {
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
      var $s = __stackBase__ + 12;
      var $_py_tmp = __stackBase__ + 16;
      var $_py_tmp7 = __stackBase__ + 20;
      var $_py_tmp11 = __stackBase__ + 24;
      var $_py_tmp15 = __stackBase__ + 28;
      var $_py_tmp19 = __stackBase__ + 32;
      var $_py_tmp23 = __stackBase__ + 36;
      var $_py_tmp27 = __stackBase__ + 40;
      var $_py_tmp31 = __stackBase__ + 44;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 4] != _PyEncoderType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 4];
      var $8 = _PyType_IsSubtype($7, _PyEncoderType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str47, __str29, 2332, ___PRETTY_FUNCTION___11764);
      throw "Reached an unreachable!";
     case 3:
      
      var $11 = HEAP[$self_addr];
      HEAP[$s] = $11;
      
      
      
      
      if (HEAP[HEAP[$s] + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $18 = HEAP[HEAP[$s] + 8];
      HEAP[$_py_tmp] = $18;
      
      var $20 = HEAP[$s] + 8;
      HEAP[$20] = 0;
      
      
      
      var $24 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $26 = HEAP[$_py_tmp];
      HEAP[$26] = $24;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $35 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $36 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$35]($36);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$s] + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $43 = HEAP[HEAP[$s] + 12];
      HEAP[$_py_tmp7] = $43;
      
      var $45 = HEAP[$s] + 12;
      HEAP[$45] = 0;
      
      
      
      var $49 = HEAP[HEAP[$_py_tmp7]] - 1;
      
      var $51 = HEAP[$_py_tmp7];
      HEAP[$51] = $49;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp7]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[$_py_tmp7] + 4] + 24];
      var $61 = HEAP[$_py_tmp7];
      FUNCTION_TABLE[$60]($61);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$s] + 16] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $68 = HEAP[HEAP[$s] + 16];
      HEAP[$_py_tmp11] = $68;
      
      var $70 = HEAP[$s] + 16;
      HEAP[$70] = 0;
      
      
      
      var $74 = HEAP[HEAP[$_py_tmp11]] - 1;
      
      var $76 = HEAP[$_py_tmp11];
      HEAP[$76] = $74;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp11]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $85 = HEAP[HEAP[HEAP[$_py_tmp11] + 4] + 24];
      var $86 = HEAP[$_py_tmp11];
      FUNCTION_TABLE[$85]($86);
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      if (HEAP[HEAP[$s] + 20] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      var $93 = HEAP[HEAP[$s] + 20];
      HEAP[$_py_tmp15] = $93;
      
      var $95 = HEAP[$s] + 20;
      HEAP[$95] = 0;
      
      
      
      var $99 = HEAP[HEAP[$_py_tmp15]] - 1;
      
      var $101 = HEAP[$_py_tmp15];
      HEAP[$101] = $99;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp15]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $110 = HEAP[HEAP[HEAP[$_py_tmp15] + 4] + 24];
      var $111 = HEAP[$_py_tmp15];
      FUNCTION_TABLE[$110]($111);
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      if (HEAP[HEAP[$s] + 24] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      var $118 = HEAP[HEAP[$s] + 24];
      HEAP[$_py_tmp19] = $118;
      
      var $120 = HEAP[$s] + 24;
      HEAP[$120] = 0;
      
      
      
      var $124 = HEAP[HEAP[$_py_tmp19]] - 1;
      
      var $126 = HEAP[$_py_tmp19];
      HEAP[$126] = $124;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp19]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $135 = HEAP[HEAP[HEAP[$_py_tmp19] + 4] + 24];
      var $136 = HEAP[$_py_tmp19];
      FUNCTION_TABLE[$135]($136);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      if (HEAP[HEAP[$s] + 28] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $143 = HEAP[HEAP[$s] + 28];
      HEAP[$_py_tmp23] = $143;
      
      var $145 = HEAP[$s] + 28;
      HEAP[$145] = 0;
      
      
      
      var $149 = HEAP[HEAP[$_py_tmp23]] - 1;
      
      var $151 = HEAP[$_py_tmp23];
      HEAP[$151] = $149;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp23]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $160 = HEAP[HEAP[HEAP[$_py_tmp23] + 4] + 24];
      var $161 = HEAP[$_py_tmp23];
      FUNCTION_TABLE[$160]($161);
      __label__ = 21;
      break;
     case 21:
      
      
      
      
      if (HEAP[HEAP[$s] + 32] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      var $168 = HEAP[HEAP[$s] + 32];
      HEAP[$_py_tmp27] = $168;
      
      var $170 = HEAP[$s] + 32;
      HEAP[$170] = 0;
      
      
      
      var $174 = HEAP[HEAP[$_py_tmp27]] - 1;
      
      var $176 = HEAP[$_py_tmp27];
      HEAP[$176] = $174;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp27]] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $185 = HEAP[HEAP[HEAP[$_py_tmp27] + 4] + 24];
      var $186 = HEAP[$_py_tmp27];
      FUNCTION_TABLE[$185]($186);
      __label__ = 24;
      break;
     case 24:
      
      
      
      
      if (HEAP[HEAP[$s] + 36] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      var $193 = HEAP[HEAP[$s] + 36];
      HEAP[$_py_tmp31] = $193;
      
      var $195 = HEAP[$s] + 36;
      HEAP[$195] = 0;
      
      
      
      var $199 = HEAP[HEAP[$_py_tmp31]] - 1;
      
      var $201 = HEAP[$_py_tmp31];
      HEAP[$201] = $199;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp31]] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $210 = HEAP[HEAP[HEAP[$_py_tmp31] + 4] + 24];
      var $211 = HEAP[$_py_tmp31];
      FUNCTION_TABLE[$210]($211);
      __label__ = 27;
      break;
     case 27:
      HEAP[$0] = 0;
      var $212 = HEAP[$0];
      HEAP[$retval] = $212;
      __label__ = 28;
      break;
     case 28:
      var $retval34 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval34;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _init_json() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      
      HEAP[_PyScannerType + 156] = FUNCTION_TABLE_OFFSET + 8;
      var $0 = _PyType_Ready(_PyScannerType);
      
      if ($0 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      HEAP[_PyEncoderType + 156] = FUNCTION_TABLE_OFFSET + 8;
      var $2 = _PyType_Ready(_PyEncoderType);
      
      if ($2 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $4 = _Py_InitModule4(__str71, _speedups_methods, _module_doc, 0, 1013);
      HEAP[$m] = $4;
      
      
      var $7 = HEAP[_PyScannerType] + 1;
      
      HEAP[_PyScannerType] = $7;
      var $9 = HEAP[$m];
      var $10 = _PyModule_AddObject($9, __str72, _PyScannerType);
      
      
      var $13 = HEAP[_PyEncoderType] + 1;
      
      HEAP[_PyEncoderType] = $13;
      var $15 = HEAP[$m];
      var $16 = _PyModule_AddObject($15, __str73, _PyEncoderType);
      __label__ = 3;
      break;
     case 3:
      __label__ = 4;
      break;
     case 4:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_json"] = _init_json;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, __convertPyInt_FromSsize_t, 0, __convertPyInt_AsSsize_t, 0, _py_encode_basestring_ascii, 0, _PyType_GenericNew, 0, _scanner_dealloc, 0, _scanner_call, 0, _scanner_traverse, 0, _scanner_clear, 0, _scanner_init, 0, _scanner_new, 0, _encoder_dealloc, 0, _encoder_call, 0, _encoder_traverse, 0, _encoder_clear, 0, _encoder_init, 0, _encoder_new, 0, _py_scanstring, 0 ]);
  function run(args) {
    __str = allocate([ 101, 110, 99, 111, 100, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 115, 116, 114, 105, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 111, 98, 106, 101, 99, 116, 95, 104, 111, 111, 107, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 111, 98, 106, 101, 99, 116, 95, 112, 97, 105, 114, 115, 95, 104, 111, 111, 107, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 112, 97, 114, 115, 101, 95, 102, 108, 111, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 112, 97, 114, 115, 101, 95, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 112, 97, 114, 115, 101, 95, 99, 111, 110, 115, 116, 97, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _scanner_members = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 20, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 24, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 32, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str7 = allocate([ 109, 97, 114, 107, 101, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 100, 101, 102, 97, 117, 108, 116, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 101, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 105, 110, 100, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 107, 101, 121, 95, 115, 101, 112, 97, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 105, 116, 101, 109, 95, 115, 101, 112, 97, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 115, 111, 114, 116, 95, 107, 101, 121, 115, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 115, 107, 105, 112, 107, 101, 121, 115, 0 ], "i8", ALLOC_NORMAL);
    _encoder_members = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 20, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 24, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 32, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 36, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str15 = allocate([ 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102, 0 ], "i8", ALLOC_NORMAL);
    _errmsg_fn_8589 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str16 = allocate([ 106, 115, 111, 110, 46, 100, 101, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 101, 114, 114, 109, 115, 103, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 40, 122, 79, 79, 38, 41, 0 ], "i8", ALLOC_NORMAL);
    _joinfn_8623 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str19 = allocate([ 106, 111, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 101, 110, 100, 32, 105, 115, 32, 111, 117, 116, 32, 111, 102, 32, 98, 111, 117, 110, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 73, 110, 118, 97, 108, 105, 100, 32, 99, 111, 110, 116, 114, 111, 108, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 85, 110, 116, 101, 114, 109, 105, 110, 97, 116, 101, 100, 32, 115, 116, 114, 105, 110, 103, 32, 115, 116, 97, 114, 116, 105, 110, 103, 32, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 73, 110, 118, 97, 108, 105, 100, 32, 92, 101, 115, 99, 97, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 73, 110, 118, 97, 108, 105, 100, 32, 92, 117, 88, 88, 88, 88, 32, 101, 115, 99, 97, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    _pydoc_scanstring = allocate([ 115, 99, 97, 110, 115, 116, 114, 105, 110, 103, 40, 98, 97, 115, 101, 115, 116, 114, 105, 110, 103, 44, 32, 101, 110, 100, 44, 32, 101, 110, 99, 111, 100, 105, 110, 103, 44, 32, 115, 116, 114, 105, 99, 116, 61, 84, 114, 117, 101, 41, 32, 45, 62, 32, 40, 115, 116, 114, 44, 32, 101, 110, 100, 41, 10, 10, 83, 99, 97, 110, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 102, 111, 114, 32, 97, 32, 74, 83, 79, 78, 32, 115, 116, 114, 105, 110, 103, 46, 32, 69, 110, 100, 32, 105, 115, 32, 116, 104, 101, 32, 105, 110, 100, 101, 120, 32, 111, 102, 32, 116, 104, 101, 10, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 105, 110, 32, 115, 32, 97, 102, 116, 101, 114, 32, 116, 104, 101, 32, 113, 117, 111, 116, 101, 32, 116, 104, 97, 116, 32, 115, 116, 97, 114, 116, 101, 100, 32, 116, 104, 101, 32, 74, 83, 79, 78, 32, 115, 116, 114, 105, 110, 103, 46, 10, 85, 110, 101, 115, 99, 97, 112, 101, 115, 32, 97, 108, 108, 32, 118, 97, 108, 105, 100, 32, 74, 83, 79, 78, 32, 115, 116, 114, 105, 110, 103, 32, 101, 115, 99, 97, 112, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 115, 32, 97, 110, 100, 32, 114, 97, 105, 115, 101, 115, 32, 86, 97, 108, 117, 101, 69, 114, 114, 111, 114, 10, 111, 110, 32, 97, 116, 116, 101, 109, 112, 116, 32, 116, 111, 32, 100, 101, 99, 111, 100, 101, 32, 97, 110, 32, 105, 110, 118, 97, 108, 105, 100, 32, 115, 116, 114, 105, 110, 103, 46, 32, 73, 102, 32, 115, 116, 114, 105, 99, 116, 32, 105, 115, 32, 70, 97, 108, 115, 101, 32, 116, 104, 101, 110, 32, 108, 105, 116, 101, 114, 97, 108, 10, 99, 111, 110, 116, 114, 111, 108, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 32, 97, 114, 101, 32, 97, 108, 108, 111, 119, 101, 100, 32, 105, 110, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 46, 10, 10, 82, 101, 116, 117, 114, 110, 115, 32, 97, 32, 116, 117, 112, 108, 101, 32, 111, 102, 32, 116, 104, 101, 32, 100, 101, 99, 111, 100, 101, 100, 32, 115, 116, 114, 105, 110, 103, 32, 97, 110, 100, 32, 116, 104, 101, 32, 105, 110, 100, 101, 120, 32, 111, 102, 32, 116, 104, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 105, 110, 32, 115, 10, 97, 102, 116, 101, 114, 32, 116, 104, 101, 32, 101, 110, 100, 32, 113, 117, 111, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 79, 79, 38, 124, 122, 105, 58, 115, 99, 97, 110, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 117, 116, 102, 45, 56, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 102, 105, 114, 115, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 44, 32, 110, 111, 116, 32, 37, 46, 56, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    _pydoc_encode_basestring_ascii = allocate([ 101, 110, 99, 111, 100, 101, 95, 98, 97, 115, 101, 115, 116, 114, 105, 110, 103, 95, 97, 115, 99, 105, 105, 40, 98, 97, 115, 101, 115, 116, 114, 105, 110, 103, 41, 32, 45, 62, 32, 115, 116, 114, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 110, 32, 65, 83, 67, 73, 73, 45, 111, 110, 108, 121, 32, 74, 83, 79, 78, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 97, 32, 80, 121, 116, 104, 111, 110, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 32, 61, 61, 32, 40, 38, 80, 121, 83, 99, 97, 110, 110, 101, 114, 84, 121, 112, 101, 41, 32, 124, 124, 32, 80, 121, 84, 121, 112, 101, 95, 73, 115, 83, 117, 98, 116, 121, 112, 101, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 44, 32, 40, 38, 80, 121, 83, 99, 97, 110, 110, 101, 114, 84, 121, 112, 101, 41, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 95, 106, 115, 111, 110, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9156 = allocate([ 115, 99, 97, 110, 110, 101, 114, 95, 116, 114, 97, 118, 101, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9226 = allocate([ 115, 99, 97, 110, 110, 101, 114, 95, 99, 108, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 69, 120, 112, 101, 99, 116, 105, 110, 103, 32, 112, 114, 111, 112, 101, 114, 116, 121, 32, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 69, 120, 112, 101, 99, 116, 105, 110, 103, 32, 58, 32, 100, 101, 108, 105, 109, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 69, 120, 112, 101, 99, 116, 105, 110, 103, 32, 44, 32, 100, 101, 108, 105, 109, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 69, 120, 112, 101, 99, 116, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 32, 119, 104, 105, 108, 101, 32, 100, 101, 99, 111, 100, 105, 110, 103, 32, 97, 32, 74, 83, 79, 78, 32, 111, 98, 106, 101, 99, 116, 32, 102, 114, 111, 109, 32, 97, 32, 98, 121, 116, 101, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 32, 119, 104, 105, 108, 101, 32, 100, 101, 99, 111, 100, 105, 110, 103, 32, 97, 32, 74, 83, 79, 78, 32, 97, 114, 114, 97, 121, 32, 102, 114, 111, 109, 32, 97, 32, 98, 121, 116, 101, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 78, 97, 78, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 73, 110, 102, 105, 110, 105, 116, 121, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 45, 73, 110, 102, 105, 110, 105, 116, 121, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 32, 119, 104, 105, 108, 101, 32, 100, 101, 99, 111, 100, 105, 110, 103, 32, 97, 32, 74, 83, 79, 78, 32, 111, 98, 106, 101, 99, 116, 32, 102, 114, 111, 109, 32, 97, 32, 117, 110, 105, 99, 111, 100, 101, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 32, 119, 104, 105, 108, 101, 32, 100, 101, 99, 111, 100, 105, 110, 103, 32, 97, 32, 74, 83, 79, 78, 32, 97, 114, 114, 97, 121, 32, 102, 114, 111, 109, 32, 97, 32, 117, 110, 105, 99, 111, 100, 101, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10651 = allocate([ 115, 99, 97, 110, 110, 101, 114, 95, 99, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 79, 79, 38, 58, 115, 99, 97, 110, 95, 111, 110, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_10649 = allocate(12, "i8*", ALLOC_NORMAL);
    __str42 = allocate([ 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 105, 100, 120, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10710 = allocate([ 115, 99, 97, 110, 110, 101, 114, 95, 105, 110, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 79, 58, 109, 97, 107, 101, 95, 115, 99, 97, 110, 110, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_10708 = allocate(8, "i8*", ALLOC_NORMAL);
    __str45 = allocate([ 99, 111, 110, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    _scanner_doc = allocate([ 74, 83, 79, 78, 32, 115, 99, 97, 110, 110, 101, 114, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 95, 106, 115, 111, 110, 46, 83, 99, 97, 110, 110, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _PyScannerType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str47 = allocate([ 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 32, 61, 61, 32, 40, 38, 80, 121, 69, 110, 99, 111, 100, 101, 114, 84, 121, 112, 101, 41, 32, 124, 124, 32, 80, 121, 84, 121, 112, 101, 95, 73, 115, 83, 117, 98, 116, 121, 112, 101, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 44, 32, 40, 38, 80, 121, 69, 110, 99, 111, 100, 101, 114, 84, 121, 112, 101, 41, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10897 = allocate([ 101, 110, 99, 111, 100, 101, 114, 95, 105, 110, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 79, 79, 79, 79, 79, 79, 79, 79, 79, 58, 109, 97, 107, 101, 95, 101, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_10886 = allocate(40, "i8*", ALLOC_NORMAL);
    __str49 = allocate([ 97, 108, 108, 111, 119, 95, 110, 97, 110, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10963 = allocate([ 101, 110, 99, 111, 100, 101, 114, 95, 99, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 79, 79, 38, 58, 95, 105, 116, 101, 114, 101, 110, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_10958 = allocate(12, "i8*", ALLOC_NORMAL);
    __str51 = allocate([ 111, 98, 106, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 95, 99, 117, 114, 114, 101, 110, 116, 95, 105, 110, 100, 101, 110, 116, 95, 108, 101, 118, 101, 108, 0 ], "i8", ALLOC_NORMAL);
    _s_null_10994 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str53 = allocate([ 110, 117, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    _s_true_10995 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str54 = allocate([ 116, 114, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    _s_false_10996 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str55 = allocate([ 102, 97, 108, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 110, 111, 116, 32, 97, 32, 99, 111, 110, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 79, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 32, 102, 108, 111, 97, 116, 32, 118, 97, 108, 117, 101, 115, 32, 97, 114, 101, 32, 110, 111, 116, 32, 74, 83, 79, 78, 32, 99, 111, 109, 112, 108, 105, 97, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 32, 119, 104, 105, 108, 101, 32, 101, 110, 99, 111, 100, 105, 110, 103, 32, 97, 32, 74, 83, 79, 78, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 67, 105, 114, 99, 117, 108, 97, 114, 32, 114, 101, 102, 101, 114, 101, 110, 99, 101, 32, 100, 101, 116, 101, 99, 116, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    _open_dict_11289 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _close_dict_11290 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _empty_dict_11291 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str60 = allocate([ 123, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 125, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 123, 125, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 107, 101, 121, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _open_array_11548 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _close_array_11549 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _empty_array_11550 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str64 = allocate([ 91, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 93, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 91, 93, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 95, 105, 116, 101, 114, 101, 110, 99, 111, 100, 101, 95, 108, 105, 115, 116, 32, 110, 101, 101, 100, 115, 32, 97, 32, 115, 101, 113, 117, 101, 110, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___11686 = allocate([ 101, 110, 99, 111, 100, 101, 114, 95, 116, 114, 97, 118, 101, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___11764 = allocate([ 101, 110, 99, 111, 100, 101, 114, 95, 99, 108, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    _encoder_doc = allocate([ 95, 105, 116, 101, 114, 101, 110, 99, 111, 100, 101, 40, 111, 98, 106, 44, 32, 95, 99, 117, 114, 114, 101, 110, 116, 95, 105, 110, 100, 101, 110, 116, 95, 108, 101, 118, 101, 108, 41, 32, 45, 62, 32, 105, 116, 101, 114, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 95, 106, 115, 111, 110, 46, 69, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _PyEncoderType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _speedups_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_NORMAL);
    __str69 = allocate([ 101, 110, 99, 111, 100, 101, 95, 98, 97, 115, 101, 115, 116, 114, 105, 110, 103, 95, 97, 115, 99, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 115, 99, 97, 110, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _module_doc = allocate([ 106, 115, 111, 110, 32, 115, 112, 101, 101, 100, 117, 112, 115, 10, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 95, 106, 115, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 109, 97, 107, 101, 95, 115, 99, 97, 110, 110, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 109, 97, 107, 101, 95, 101, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_scanner_members] = __str;
    HEAP[_scanner_members + 16] = __str;
    HEAP[_scanner_members + 20] = __str1;
    HEAP[_scanner_members + 36] = __str1;
    HEAP[_scanner_members + 40] = __str2;
    HEAP[_scanner_members + 56] = __str2;
    HEAP[_scanner_members + 60] = __str3;
    HEAP[_scanner_members + 76] = __str3;
    HEAP[_scanner_members + 80] = __str4;
    HEAP[_scanner_members + 96] = __str4;
    HEAP[_scanner_members + 100] = __str5;
    HEAP[_scanner_members + 116] = __str5;
    HEAP[_scanner_members + 120] = __str6;
    HEAP[_scanner_members + 136] = __str6;
    HEAP[_encoder_members] = __str7;
    HEAP[_encoder_members + 16] = __str7;
    HEAP[_encoder_members + 20] = __str8;
    HEAP[_encoder_members + 36] = __str8;
    HEAP[_encoder_members + 40] = __str9;
    HEAP[_encoder_members + 56] = __str9;
    HEAP[_encoder_members + 60] = __str10;
    HEAP[_encoder_members + 76] = __str10;
    HEAP[_encoder_members + 80] = __str11;
    HEAP[_encoder_members + 96] = __str11;
    HEAP[_encoder_members + 100] = __str12;
    HEAP[_encoder_members + 116] = __str12;
    HEAP[_encoder_members + 120] = __str13;
    HEAP[_encoder_members + 136] = __str13;
    HEAP[_encoder_members + 140] = __str14;
    HEAP[_encoder_members + 156] = __str14;
    HEAP[_kwlist_10649] = __str42;
    HEAP[_kwlist_10649 + 4] = __str43;
    HEAP[_kwlist_10708] = __str45;
    HEAP[_PyScannerType + 12] = __str46;
    HEAP[_PyScannerType + 24] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_PyScannerType + 64] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_PyScannerType + 88] = _scanner_doc;
    HEAP[_PyScannerType + 92] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_PyScannerType + 96] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_PyScannerType + 120] = _scanner_members;
    HEAP[_PyScannerType + 148] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_PyScannerType + 156] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_kwlist_10886] = __str7;
    HEAP[_kwlist_10886 + 4] = __str8;
    HEAP[_kwlist_10886 + 8] = __str9;
    HEAP[_kwlist_10886 + 12] = __str10;
    HEAP[_kwlist_10886 + 16] = __str11;
    HEAP[_kwlist_10886 + 20] = __str12;
    HEAP[_kwlist_10886 + 24] = __str13;
    HEAP[_kwlist_10886 + 28] = __str14;
    HEAP[_kwlist_10886 + 32] = __str49;
    HEAP[_kwlist_10958] = __str51;
    HEAP[_kwlist_10958 + 4] = __str52;
    HEAP[_PyEncoderType + 12] = __str68;
    HEAP[_PyEncoderType + 24] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_PyEncoderType + 64] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_PyEncoderType + 88] = _encoder_doc;
    HEAP[_PyEncoderType + 92] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_PyEncoderType + 96] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_PyEncoderType + 120] = _encoder_members;
    HEAP[_PyEncoderType + 148] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_PyEncoderType + 156] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_speedups_methods] = __str69;
    HEAP[_speedups_methods + 4] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_speedups_methods + 12] = _pydoc_encode_basestring_ascii;
    HEAP[_speedups_methods + 16] = __str70;
    HEAP[_speedups_methods + 20] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_speedups_methods + 28] = _pydoc_scanstring;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
