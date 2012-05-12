"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 192;
  var $1___SIZE = 16;
  var $2___SIZE = 100;
  var $3___SIZE = 20;
  var $4___SIZE = 20;
  var $5___SIZE = 40;
  var $6___SIZE = 196;
  var $7___SIZE = 48;
  var $8___SIZE = 40;
  var $9___SIZE = 20;
  var $10___SIZE = 32;
  var $struct_BZ2CompObject___SIZE = 60;
  var $struct_BZ2CompObject___FLATTENER = [ 0, 4, 8, 56 ];
  var $struct_BZ2DecompObject___SIZE = 64;
  var $struct_BZ2DecompObject___FLATTENER = [ 0, 4, 8, 56, 60 ];
  var $struct_BZ2FileObject___SIZE = 64;
  var $struct_BZ2FileObject___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56 ];
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyFileObject___SIZE = 84;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyListObject___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_bz_stream___SIZE = 48;
  var ___author__;
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
  var ___PRETTY_FUNCTION___8623;
  var __str10;
  var __str11;
  var _BZ2File_read__doc__;
  var __str12;
  var __str13;
  var __str14;
  var __str15;
  var __str16;
  var _BZ2File_readline__doc__;
  var __str17;
  var _BZ2File_readlines__doc__;
  var __str18;
  var _BZ2File_xreadlines__doc__;
  var _BZ2File_write__doc__;
  var __str19;
  var __str20;
  var _BZ2File_writelines__doc__;
  var __str21;
  var __str22;
  var _BZ2File_seek__doc__;
  var __str23;
  var __str24;
  var __str25;
  var ___PRETTY_FUNCTION___9265;
  var __str26;
  var __str27;
  var _BZ2File_tell__doc__;
  var _BZ2File_close__doc__;
  var __str28;
  var _BZ2File_enter_doc;
  var _BZ2File_exit_doc;
  var __str29;
  var __str30;
  var __str31;
  var __str32;
  var __str33;
  var __str34;
  var __str35;
  var __str36;
  var __str37;
  var _BZ2File_methods;
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
  var _BZ2File_getset;
  var __str52;
  var __str53;
  var _BZ2File_members;
  var __str54;
  var __str55;
  var _kwlist_9533;
  var __str56;
  var __str57;
  var __str58;
  var __str59;
  var __str60;
  var __str61;
  var __str62;
  var __str63;
  var _BZ2File__doc__;
  var __str64;
  var _BZ2File_Type;
  var _BZ2Comp_compress__doc__;
  var __str65;
  var __str66;
  var _BZ2Comp_flush__doc__;
  var __str67;
  var __str68;
  var __str69;
  var _BZ2Comp_methods;
  var __str70;
  var _kwlist_9883;
  var _BZ2Comp__doc__;
  var __str71;
  var _BZ2Comp_Type;
  var __str72;
  var _BZ2Decomp_members;
  var _BZ2Decomp_decompress__doc__;
  var __str73;
  var __str74;
  var __str75;
  var _BZ2Decomp_methods;
  var __str76;
  var _BZ2Decomp__doc__;
  var __str77;
  var _BZ2Decomp_Type;
  var _bz2_compress__doc__;
  var __str78;
  var _kwlist_10095;
  var __str79;
  var _bz2_decompress__doc__;
  var __str80;
  var _bz2_methods;
  var _bz2__doc__;
  var __str81;
  var __str82;
  var __str83;
  var __str84;
  var __str85;
  function _check_iterbuffered($f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $f_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$f_addr] = $f;
      
      
      
      
      if (HEAP[HEAP[$f_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$f_addr] + 16] - HEAP[HEAP[$f_addr] + 20] > 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$f_addr] + 12]] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $21 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($21, __str);
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $22 = HEAP[$0];
      HEAP[$retval] = $22;
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
  function _Util_CatchBZ2Error($bzerror) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $bzerror_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $ret = __stackBase__ + 12;
      
      HEAP[$bzerror_addr] = $bzerror;
      HEAP[$ret] = 0;
      var $1 = HEAP[$bzerror_addr];
      if ($1 == -9) {
        __label__ = 2;
        break;
      } else if ($1 == -7) {
        __label__ = 7;
        break;
      } else if ($1 == -6) {
        __label__ = 6;
        break;
      } else if ($1 == -5) {
        __label__ = 5;
        break;
      } else if ($1 == -4) {
        __label__ = 5;
        break;
      } else if ($1 == -3) {
        __label__ = 4;
        break;
      } else if ($1 == -2) {
        __label__ = 3;
        break;
      } else if ($1 == -1) {
        __label__ = 8;
        break;
      } else if ($1 == 0) {
        __label__ = 1;
        break;
      } else if ($1 == 4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      __label__ = 9;
      break;
     case 2:
      var $2 = HEAP[_PyExc_SystemError];
      _PyErr_SetString($2, __str1);
      HEAP[$ret] = 1;
      __label__ = 9;
      break;
     case 3:
      var $3 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($3, __str2);
      HEAP[$ret] = 1;
      __label__ = 9;
      break;
     case 4:
      var $4 = _PyErr_NoMemory();
      HEAP[$ret] = 1;
      __label__ = 9;
      break;
     case 5:
      var $5 = HEAP[_PyExc_IOError];
      _PyErr_SetString($5, __str3);
      HEAP[$ret] = 1;
      __label__ = 9;
      break;
     case 6:
      var $6 = HEAP[_PyExc_IOError];
      _PyErr_SetString($6, __str4);
      HEAP[$ret] = 1;
      __label__ = 9;
      break;
     case 7:
      var $7 = HEAP[_PyExc_EOFError];
      _PyErr_SetString($7, __str5);
      HEAP[$ret] = 1;
      __label__ = 9;
      break;
     case 8:
      var $8 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($8, __str6);
      HEAP[$ret] = 1;
      __label__ = 9;
      break;
     case 9:
      var $9 = HEAP[$ret];
      HEAP[$0] = $9;
      var $10 = HEAP[$0];
      HEAP[$retval] = $10;
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
  function _Util_NewBufferSize($currentsize) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $currentsize_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$currentsize_addr] = $currentsize;
      
      
      if (HEAP[$currentsize_addr] > 8192) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      if (HEAP[$currentsize_addr] <= 524288) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      var $7 = HEAP[$currentsize_addr] + HEAP[$currentsize_addr];
      HEAP[$0] = $7;
      __label__ = 5;
      break;
     case 3:
      
      var $9 = HEAP[$currentsize_addr] + 524288;
      HEAP[$0] = $9;
      __label__ = 5;
      break;
     case 4:
      
      var $11 = HEAP[$currentsize_addr] + 8192;
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
  function _Util_GetLine($f, $n) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 65;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 65);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $f_addr = __stackBase__;
      var $n_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $iftmp_7 = __stackBase__ + 16;
      var $c = __stackBase__ + 20;
      var $buf = __stackBase__ + 21;
      var $end = __stackBase__ + 25;
      var $total_v_size = __stackBase__ + 29;
      var $used_v_size = __stackBase__ + 33;
      var $increment = __stackBase__ + 37;
      var $v = __stackBase__ + 41;
      var $bzerror = __stackBase__ + 45;
      var $bytes_read = __stackBase__ + 49;
      var $newlinetypes = __stackBase__ + 53;
      var $skipnextlf = __stackBase__ + 57;
      var $univ_newline = __stackBase__ + 61;
      
      HEAP[$f_addr] = $f;
      HEAP[$n_addr] = $n;
      
      
      var $3 = HEAP[HEAP[$f_addr] + 32];
      HEAP[$newlinetypes] = $3;
      
      
      var $6 = HEAP[HEAP[$f_addr] + 36];
      HEAP[$skipnextlf] = $6;
      
      
      var $9 = HEAP[HEAP[$f_addr] + 28];
      HEAP[$univ_newline] = $9;
      
      
      if (HEAP[$n_addr] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $12 = HEAP[$n_addr];
      HEAP[$iftmp_7] = $12;
      __label__ = 3;
      break;
     case 2:
      HEAP[$iftmp_7] = 100;
      __label__ = 3;
      break;
     case 3:
      var $13 = HEAP[$iftmp_7];
      HEAP[$total_v_size] = $13;
      var $14 = HEAP[$total_v_size];
      var $15 = _PyString_FromStringAndSize(0, $14);
      HEAP[$v] = $15;
      
      
      if (HEAP[$v] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 44;
      break;
     case 5:
      
      
      
      var $21 = HEAP[$v] + 20;
      HEAP[$buf] = $21;
      
      
      var $24 = HEAP[$buf] + HEAP[$total_v_size];
      HEAP[$end] = $24;
      __label__ = 6;
      break;
     case 6:
      __label__ = 21;
      break;
     case 7:
      
      
      var $27 = HEAP[HEAP[$f_addr] + 40];
      var $28 = _BZ2_bzRead($bzerror, $27, $c, 1);
      HEAP[$bytes_read] = $28;
      
      
      
      var $32 = HEAP[HEAP[$f_addr] + 48] + 1;
      
      var $34 = HEAP[$f_addr] + 48;
      HEAP[$34] = $32;
      
      
      if (HEAP[$bytes_read] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      if (HEAP[$univ_newline] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 9:
      
      
      if (HEAP[$skipnextlf] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 10:
      HEAP[$skipnextlf] = 0;
      
      
      if (HEAP[$c] == 10) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      var $44 = HEAP[$newlinetypes] | 4;
      HEAP[$newlinetypes] = $44;
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      var $49 = HEAP[HEAP[$f_addr] + 40];
      var $50 = _BZ2_bzRead($bzerror, $49, $c, 1);
      HEAP[$bytes_read] = $50;
      
      
      
      var $54 = HEAP[HEAP[$f_addr] + 48] + 1;
      
      var $56 = HEAP[$f_addr] + 48;
      HEAP[$56] = $54;
      
      
      if (HEAP[$bytes_read] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      __label__ = 15;
      break;
     case 14:
      
      var $60 = HEAP[$newlinetypes] | 1;
      HEAP[$newlinetypes] = $60;
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$c] == 13) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      HEAP[$skipnextlf] = 1;
      HEAP[$c] = 10;
      __label__ = 19;
      break;
     case 17:
      
      
      if (HEAP[$c] == 10) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      var $66 = HEAP[$newlinetypes] | 2;
      HEAP[$newlinetypes] = $66;
      __label__ = 19;
      break;
     case 19:
      var $67 = HEAP[$c];
      var $68 = HEAP[$buf];
      HEAP[$68] = $67;
      
      var $70 = HEAP[$buf] + 1;
      HEAP[$buf] = $70;
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      if (HEAP[$c] == 10) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      if (HEAP[$buf] != HEAP[$end]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      if (HEAP[$univ_newline] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 23:
      
      
      if (HEAP[$bzerror] == 4) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 24:
      
      
      if (HEAP[$skipnextlf] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      var $85 = HEAP[$newlinetypes] | 1;
      HEAP[$newlinetypes] = $85;
      __label__ = 26;
      break;
     case 26:
      
      var $87 = HEAP[$f_addr] + 32;
      var $88 = HEAP[$newlinetypes];
      HEAP[$87] = $88;
      
      var $90 = HEAP[$f_addr] + 36;
      var $91 = HEAP[$skipnextlf];
      HEAP[$90] = $91;
      
      
      if (HEAP[$bzerror] == 4) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      var $96 = HEAP[HEAP[$f_addr] + 48];
      
      var $98 = HEAP[$f_addr] + 56;
      HEAP[$98] = $96;
      
      var $100 = HEAP[$f_addr] + 44;
      HEAP[$100] = 2;
      __label__ = 41;
      break;
     case 28:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 29:
      var $103 = HEAP[$bzerror];
      var $104 = _Util_CatchBZ2Error($103);
      var $105 = HEAP[$v];
      
      
      var $108 = HEAP[$105] - 1;
      var $109 = $105;
      HEAP[$109] = $108;
      
      
      
      if (HEAP[$105] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $117 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $118 = HEAP[$v];
      FUNCTION_TABLE[$117]($118);
      __label__ = 31;
      break;
     case 31:
      HEAP[$0] = 0;
      __label__ = 44;
      break;
     case 32:
      
      
      if (HEAP[$c] == 10) {
        __label__ = 41;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      if (HEAP[$n_addr] > 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      var $123 = HEAP[$total_v_size];
      HEAP[$used_v_size] = $123;
      
      var $125 = HEAP[$total_v_size] >>> 2;
      HEAP[$increment] = $125;
      
      
      var $128 = HEAP[$total_v_size] + HEAP[$increment];
      HEAP[$total_v_size] = $128;
      
      
      if (HEAP[$total_v_size] < 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 35:
      var $131 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($131, __str7);
      var $132 = HEAP[$v];
      
      
      var $135 = HEAP[$132] - 1;
      var $136 = $132;
      HEAP[$136] = $135;
      
      
      
      if (HEAP[$132] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      var $144 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $145 = HEAP[$v];
      FUNCTION_TABLE[$144]($145);
      __label__ = 37;
      break;
     case 37:
      HEAP[$0] = 0;
      __label__ = 44;
      break;
     case 38:
      var $146 = HEAP[$total_v_size];
      var $147 = __PyString_Resize($v, $146);
      
      if ($147 < 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      HEAP[$0] = 0;
      __label__ = 44;
      break;
     case 40:
      
      
      
      
      
      var $154 = HEAP[$v] + 20 + HEAP[$used_v_size];
      HEAP[$buf] = $154;
      
      
      
      
      
      var $160 = HEAP[$v] + 20 + HEAP[$total_v_size];
      HEAP[$end] = $160;
      __label__ = 6;
      break;
     case 41:
      
      
      
      
      
      
      var $167 = HEAP[$buf] - (HEAP[$v] + 20);
      HEAP[$used_v_size] = $167;
      
      
      
      if (HEAP[$used_v_size] != HEAP[$total_v_size]) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      var $171 = HEAP[$used_v_size];
      var $172 = __PyString_Resize($v, $171);
      __label__ = 43;
      break;
     case 43:
      var $173 = HEAP[$v];
      HEAP[$0] = $173;
      __label__ = 44;
      break;
     case 44:
      var $174 = HEAP[$0];
      HEAP[$retval] = $174;
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
  function _Util_UnivNewlineRead($bzerror, $stream, $buf, $n, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 53;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 53);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $bzerror_addr = __stackBase__;
      var $stream_addr = __stackBase__ + 4;
      var $buf_addr = __stackBase__ + 8;
      var $n_addr = __stackBase__ + 12;
      var $f_addr = __stackBase__ + 16;
      var $retval = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $dst = __stackBase__ + 28;
      var $newlinetypes = __stackBase__ + 32;
      var $skipnextlf = __stackBase__ + 36;
      var $nread = __stackBase__ + 40;
      var $shortread = __stackBase__ + 44;
      var $src = __stackBase__ + 48;
      var $c = __stackBase__ + 52;
      
      HEAP[$bzerror_addr] = $bzerror;
      HEAP[$stream_addr] = $stream;
      HEAP[$buf_addr] = $buf;
      HEAP[$n_addr] = $n;
      HEAP[$f_addr] = $f;
      var $1 = HEAP[$buf_addr];
      HEAP[$dst] = $1;
      
      
      if (HEAP[$buf_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str8, __str9, 352, ___PRETTY_FUNCTION___8623);
      throw "Reached an unreachable!";
     case 2:
      
      
      if (HEAP[$stream_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str10, __str9, 353, ___PRETTY_FUNCTION___8623);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      
      if (HEAP[HEAP[$f_addr] + 28] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $10 = HEAP[$n_addr];
      var $11 = HEAP[$bzerror_addr];
      var $12 = HEAP[$stream_addr];
      var $13 = HEAP[$buf_addr];
      var $14 = _BZ2_bzRead($11, $12, $13, $10);
      HEAP[$0] = $14;
      __label__ = 28;
      break;
     case 6:
      
      
      var $17 = HEAP[HEAP[$f_addr] + 32];
      HEAP[$newlinetypes] = $17;
      
      
      var $20 = HEAP[HEAP[$f_addr] + 36];
      HEAP[$skipnextlf] = $20;
      __label__ = 26;
      break;
     case 7:
      var $21 = HEAP[$dst];
      HEAP[$src] = $21;
      var $22 = HEAP[$n_addr];
      var $23 = HEAP[$bzerror_addr];
      var $24 = HEAP[$stream_addr];
      var $25 = HEAP[$dst];
      var $26 = _BZ2_bzRead($23, $24, $25, $22);
      HEAP[$nread] = $26;
      
      
      
      if (HEAP[$nread] > HEAP[$n_addr]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      ___assert_fail(__str11, __str9, 370, ___PRETTY_FUNCTION___8623);
      throw "Reached an unreachable!";
     case 9:
      
      
      var $32 = HEAP[$n_addr] - HEAP[$nread];
      HEAP[$n_addr] = $32;
      
      
      var $35 = HEAP[$n_addr] != 0;
      HEAP[$shortread] = $35;
      __label__ = 20;
      break;
     case 10:
      
      var $37 = HEAP[HEAP[$src]];
      HEAP[$c] = $37;
      
      var $39 = HEAP[$src] + 1;
      HEAP[$src] = $39;
      
      
      if (HEAP[$c] == 13) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $42 = HEAP[$dst];
      HEAP[$42] = 10;
      
      var $44 = HEAP[$dst] + 1;
      HEAP[$dst] = $44;
      HEAP[$skipnextlf] = 1;
      __label__ = 20;
      break;
     case 12:
      
      
      if (HEAP[$skipnextlf] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      if (HEAP[$c] != 10) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      HEAP[$skipnextlf] = 0;
      
      var $50 = HEAP[$newlinetypes] | 4;
      HEAP[$newlinetypes] = $50;
      
      var $52 = HEAP[$n_addr] + 1;
      HEAP[$n_addr] = $52;
      __label__ = 20;
      break;
     case 15:
      
      
      if (HEAP[$c] == 10) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      var $56 = HEAP[$newlinetypes] | 2;
      HEAP[$newlinetypes] = $56;
      __label__ = 19;
      break;
     case 17:
      
      
      if (HEAP[$skipnextlf] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      var $60 = HEAP[$newlinetypes] | 1;
      HEAP[$newlinetypes] = $60;
      __label__ = 19;
      break;
     case 19:
      var $61 = HEAP[$dst];
      var $62 = HEAP[$c];
      HEAP[$61] = $62;
      
      var $64 = HEAP[$dst] + 1;
      HEAP[$dst] = $64;
      HEAP[$skipnextlf] = 0;
      __label__ = 20;
      break;
     case 20:
      
      var $66 = HEAP[$nread] - 1;
      HEAP[$nread] = $66;
      
      var $68 = HEAP[$nread] != -1;
      if ($68) {
        __label__ = 10;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      if (HEAP[$shortread] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 22:
      
      
      if (HEAP[$skipnextlf] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 23:
      
      
      
      if (HEAP[HEAP[$bzerror_addr]] == 4) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      var $77 = HEAP[$newlinetypes] | 1;
      HEAP[$newlinetypes] = $77;
      __label__ = 25;
      break;
     case 25:
      __label__ = 27;
      break;
     case 26:
      
      
      if (HEAP[$n_addr] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      var $81 = HEAP[$f_addr] + 32;
      var $82 = HEAP[$newlinetypes];
      HEAP[$81] = $82;
      
      var $84 = HEAP[$f_addr] + 36;
      var $85 = HEAP[$skipnextlf];
      HEAP[$84] = $85;
      
      
      
      
      var $90 = HEAP[$dst] - HEAP[$buf_addr];
      HEAP[$0] = $90;
      __label__ = 28;
      break;
     case 28:
      var $91 = HEAP[$0];
      HEAP[$retval] = $91;
      __label__ = 29;
      break;
     case 29:
      var $retval28 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval28;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Util_DropReadAhead($f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $f_addr = __stackBase__;
      
      HEAP[$f_addr] = $f;
      
      
      
      
      if (HEAP[HEAP[$f_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[HEAP[$f_addr] + 12];
      _PyMem_Free($6);
      
      var $8 = HEAP[$f_addr] + 12;
      HEAP[$8] = 0;
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
  function _Util_ReadAhead($f, $bufsize) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $f_addr = __stackBase__;
      var $bufsize_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $chunksize = __stackBase__ + 16;
      var $bzerror = __stackBase__ + 20;
      
      HEAP[$f_addr] = $f;
      HEAP[$bufsize_addr] = $bufsize;
      
      
      
      
      if (HEAP[HEAP[$f_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$f_addr] + 16] - HEAP[HEAP[$f_addr] + 20] > 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 3:
      var $15 = HEAP[$f_addr];
      _Util_DropReadAhead($15);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      if (HEAP[HEAP[$f_addr] + 44] == 2) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $22 = HEAP[HEAP[$f_addr] + 12];
      
      var $24 = HEAP[$f_addr] + 20;
      HEAP[$24] = $22;
      
      
      var $27 = HEAP[HEAP[$f_addr] + 12];
      
      var $29 = HEAP[$f_addr] + 16;
      HEAP[$29] = $27;
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 6:
      var $30 = HEAP[$bufsize_addr];
      var $31 = _PyMem_Malloc($30);
      
      var $33 = HEAP[$f_addr] + 12;
      HEAP[$33] = $31;
      
      
      
      
      if (HEAP[HEAP[$f_addr] + 12] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $38 = _PyErr_NoMemory();
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 8:
      var $39 = HEAP[$bufsize_addr];
      
      
      var $42 = HEAP[HEAP[$f_addr] + 12];
      
      
      var $45 = HEAP[HEAP[$f_addr] + 40];
      var $46 = HEAP[$f_addr];
      var $47 = _Util_UnivNewlineRead($bzerror, $45, $42, $39, $46);
      HEAP[$chunksize] = $47;
      
      
      
      
      
      var $53 = HEAP[HEAP[$f_addr] + 48] + HEAP[$chunksize];
      
      var $55 = HEAP[$f_addr] + 48;
      HEAP[$55] = $53;
      
      
      if (HEAP[$bzerror] == 4) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      var $60 = HEAP[HEAP[$f_addr] + 48];
      
      var $62 = HEAP[$f_addr] + 56;
      HEAP[$62] = $60;
      
      var $64 = HEAP[$f_addr] + 44;
      HEAP[$64] = 2;
      __label__ = 12;
      break;
     case 10:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $67 = HEAP[$bzerror];
      var $68 = _Util_CatchBZ2Error($67);
      var $69 = HEAP[$f_addr];
      _Util_DropReadAhead($69);
      HEAP[$0] = -1;
      __label__ = 13;
      break;
     case 12:
      
      
      var $72 = HEAP[HEAP[$f_addr] + 12];
      
      var $74 = HEAP[$f_addr] + 20;
      HEAP[$74] = $72;
      
      
      
      
      var $79 = HEAP[HEAP[$f_addr] + 12] + HEAP[$chunksize];
      
      var $81 = HEAP[$f_addr] + 16;
      HEAP[$81] = $79;
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 13:
      var $82 = HEAP[$0];
      HEAP[$retval] = $82;
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
  function _Util_ReadAheadGetLineSkip($f, $skip, $bufsize) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $f_addr = __stackBase__;
      var $skip_addr = __stackBase__ + 4;
      var $bufsize_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $s = __stackBase__ + 20;
      var $bufptr = __stackBase__ + 24;
      var $buf = __stackBase__ + 28;
      var $len = __stackBase__ + 32;
      
      HEAP[$f_addr] = $f;
      HEAP[$skip_addr] = $skip;
      HEAP[$bufsize_addr] = $bufsize;
      
      
      
      
      if (HEAP[HEAP[$f_addr] + 12] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = HEAP[$f_addr];
      var $6 = HEAP[$bufsize_addr];
      var $7 = _Util_ReadAhead($5, $6);
      
      if ($7 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 3:
      
      
      
      
      
      
      
      
      var $17 = HEAP[HEAP[$f_addr] + 16] - HEAP[HEAP[$f_addr] + 20];
      HEAP[$len] = $17;
      
      
      if (HEAP[$len] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $20 = HEAP[$skip_addr];
      var $21 = _PyString_FromStringAndSize(0, $20);
      var $22 = $21;
      HEAP[$0] = $22;
      __label__ = 15;
      break;
     case 5:
      var $23 = HEAP[$len];
      
      
      var $26 = HEAP[HEAP[$f_addr] + 20];
      var $27 = _memchr($26, 10, $23);
      HEAP[$bufptr] = $27;
      
      
      if (HEAP[$bufptr] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 6:
      
      var $31 = HEAP[$bufptr] + 1;
      HEAP[$bufptr] = $31;
      
      
      
      
      
      
      var $38 = HEAP[$bufptr] - HEAP[HEAP[$f_addr] + 20];
      HEAP[$len] = $38;
      
      
      var $41 = HEAP[$skip_addr] + HEAP[$len];
      var $42 = _PyString_FromStringAndSize(0, $41);
      var $43 = $42;
      HEAP[$s] = $43;
      
      
      if (HEAP[$s] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 8:
      var $46 = HEAP[$len];
      
      
      var $49 = HEAP[HEAP[$f_addr] + 20];
      
      
      
      
      var $54 = HEAP[$s] + 20 + HEAP[$skip_addr];
      _llvm_memcpy_p0i8_p0i8_i32($54, $49, $46, 1, 0);
      
      var $56 = HEAP[$f_addr] + 20;
      var $57 = HEAP[$bufptr];
      HEAP[$56] = $57;
      
      
      
      
      
      if (HEAP[HEAP[$f_addr] + 16] == HEAP[$bufptr]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $63 = HEAP[$f_addr];
      _Util_DropReadAhead($63);
      __label__ = 10;
      break;
     case 10:
      __label__ = 14;
      break;
     case 11:
      
      
      var $66 = HEAP[HEAP[$f_addr] + 20];
      HEAP[$bufptr] = $66;
      
      
      var $69 = HEAP[HEAP[$f_addr] + 12];
      HEAP[$buf] = $69;
      
      var $71 = HEAP[$f_addr] + 12;
      HEAP[$71] = 0;
      
      
      
      var $75 = (HEAP[$bufsize_addr] >> 2) + HEAP[$bufsize_addr];
      
      
      var $78 = HEAP[$skip_addr] + HEAP[$len];
      var $79 = HEAP[$f_addr];
      var $80 = _Util_ReadAheadGetLineSkip($79, $78, $75);
      HEAP[$s] = $80;
      
      
      if (HEAP[$s] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $83 = HEAP[$buf];
      _PyMem_Free($83);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 13:
      var $84 = HEAP[$len];
      
      
      
      
      var $89 = HEAP[$s] + 20 + HEAP[$skip_addr];
      var $90 = HEAP[$bufptr];
      _llvm_memcpy_p0i8_p0i8_i32($89, $90, $84, 1, 0);
      var $91 = HEAP[$buf];
      _PyMem_Free($91);
      __label__ = 14;
      break;
     case 14:
      var $92 = HEAP[$s];
      HEAP[$0] = $92;
      __label__ = 15;
      break;
     case 15:
      var $93 = HEAP[$0];
      HEAP[$retval] = $93;
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
  function _BZ2File_read($self, $args) {
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
      var $bytesrequested = __stackBase__ + 16;
      var $bytesread = __stackBase__ + 20;
      var $buffersize = __stackBase__ + 24;
      var $chunksize = __stackBase__ + 28;
      var $bzerror = __stackBase__ + 32;
      var $ret = __stackBase__ + 36;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$bytesrequested] = -1;
      HEAP[$ret] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str12, allocate([ $bytesrequested, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 26;
      break;
     case 2:
      
      
      var $6 = HEAP[HEAP[$self_addr] + 44];
      if ($6 == 0) {
        __label__ = 5;
        break;
      } else if ($6 == 1) {
        __label__ = 3;
        break;
      } else if ($6 == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      var $7 = HEAP[$self_addr];
      var $8 = _check_iterbuffered($7);
      
      if ($8 != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      var $10 = _PyString_FromString(__str13);
      HEAP[$ret] = $10;
      __label__ = 25;
      break;
     case 5:
      var $11 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($11, __str14);
      __label__ = 25;
      break;
     case 6:
      var $12 = HEAP[_PyExc_IOError];
      _PyErr_SetString($12, __str15);
      __label__ = 25;
      break;
     case 7:
      
      
      if (HEAP[$bytesrequested] < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $15 = _Util_NewBufferSize(0);
      HEAP[$buffersize] = $15;
      __label__ = 10;
      break;
     case 9:
      var $16 = HEAP[$bytesrequested];
      HEAP[$buffersize] = $16;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$buffersize] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $19 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($19, __str16);
      __label__ = 25;
      break;
     case 12:
      var $20 = HEAP[$buffersize];
      var $21 = _PyString_FromStringAndSize(0, $20);
      HEAP[$ret] = $21;
      
      
      if (HEAP[$ret] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      HEAP[$bytesread] = 0;
      __label__ = 14;
      break;
     case 14:
      
      
      var $26 = HEAP[$buffersize] - HEAP[$bytesread];
      
      
      
      
      
      var $32 = HEAP[$ret] + 20 + HEAP[$bytesread];
      
      
      var $35 = HEAP[HEAP[$self_addr] + 40];
      var $36 = HEAP[$self_addr];
      var $37 = _Util_UnivNewlineRead($bzerror, $35, $32, $26, $36);
      HEAP[$chunksize] = $37;
      
      
      
      
      
      var $43 = HEAP[HEAP[$self_addr] + 48] + HEAP[$chunksize];
      
      var $45 = HEAP[$self_addr] + 48;
      HEAP[$45] = $43;
      
      
      var $48 = HEAP[$bytesread] + HEAP[$chunksize];
      HEAP[$bytesread] = $48;
      
      
      if (HEAP[$bzerror] == 4) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      var $53 = HEAP[HEAP[$self_addr] + 48];
      
      var $55 = HEAP[$self_addr] + 56;
      HEAP[$55] = $53;
      
      var $57 = HEAP[$self_addr] + 44;
      HEAP[$57] = 2;
      __label__ = 23;
      break;
     case 16:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      var $60 = HEAP[$bzerror];
      var $61 = _Util_CatchBZ2Error($60);
      var $62 = HEAP[$ret];
      
      
      var $65 = HEAP[$62] - 1;
      var $66 = $62;
      HEAP[$66] = $65;
      
      
      
      if (HEAP[$62] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $74 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $75 = HEAP[$ret];
      FUNCTION_TABLE[$74]($75);
      __label__ = 19;
      break;
     case 19:
      HEAP[$ret] = 0;
      __label__ = 25;
      break;
     case 20:
      
      
      if (HEAP[$bytesrequested] < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      var $78 = HEAP[$buffersize];
      var $79 = _Util_NewBufferSize($78);
      HEAP[$buffersize] = $79;
      var $80 = HEAP[$buffersize];
      var $81 = __PyString_Resize($ret, $80);
      
      if ($81 < 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      __label__ = 14;
      break;
     case 23:
      
      
      
      if (HEAP[$bytesread] != HEAP[$buffersize]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      var $86 = HEAP[$bytesread];
      var $87 = __PyString_Resize($ret, $86);
      __label__ = 25;
      break;
     case 25:
      var $88 = HEAP[$ret];
      HEAP[$0] = $88;
      __label__ = 26;
      break;
     case 26:
      var $89 = HEAP[$0];
      HEAP[$retval] = $89;
      __label__ = 27;
      break;
     case 27:
      var $retval25 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval25;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2File_readline($self, $args) {
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
      var $ret = __stackBase__ + 16;
      var $sizehint = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$ret] = 0;
      HEAP[$sizehint] = -1;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str17, allocate([ $sizehint, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      var $6 = HEAP[HEAP[$self_addr] + 44];
      if ($6 == 0) {
        __label__ = 5;
        break;
      } else if ($6 == 1) {
        __label__ = 3;
        break;
      } else if ($6 == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      var $7 = HEAP[$self_addr];
      var $8 = _check_iterbuffered($7);
      
      if ($8 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      var $10 = _PyString_FromString(__str13);
      HEAP[$ret] = $10;
      __label__ = 10;
      break;
     case 5:
      var $11 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($11, __str14);
      __label__ = 10;
      break;
     case 6:
      var $12 = HEAP[_PyExc_IOError];
      _PyErr_SetString($12, __str15);
      __label__ = 10;
      break;
     case 7:
      
      
      if (HEAP[$sizehint] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $15 = _PyString_FromString(__str13);
      HEAP[$ret] = $15;
      __label__ = 10;
      break;
     case 9:
      
      
      var $max = HEAP[$sizehint] >= 0 ? HEAP[$sizehint] : 0;
      var $18 = HEAP[$self_addr];
      var $19 = _Util_GetLine($18, $max);
      HEAP[$ret] = $19;
      __label__ = 10;
      break;
     case 10:
      var $20 = HEAP[$ret];
      HEAP[$0] = $20;
      __label__ = 11;
      break;
     case 11:
      var $21 = HEAP[$0];
      HEAP[$retval] = $21;
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
  function _BZ2File_readlines($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8272;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8272);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $sizehint = __stackBase__ + 16;
      var $list = __stackBase__ + 20;
      var $line = __stackBase__ + 24;
      var $small_buffer = __stackBase__ + 28;
      var $buffer = __stackBase__ + 8220;
      var $buffersize = __stackBase__ + 8224;
      var $big_buffer = __stackBase__ + 8228;
      var $nfilled = __stackBase__ + 8232;
      var $nread = __stackBase__ + 8236;
      var $totalread = __stackBase__ + 8240;
      var $p = __stackBase__ + 8244;
      var $q = __stackBase__ + 8248;
      var $end = __stackBase__ + 8252;
      var $err = __stackBase__ + 8256;
      var $shortread = __stackBase__ + 8260;
      var $bzerror = __stackBase__ + 8264;
      var $rest = __stackBase__ + 8268;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$sizehint] = 0;
      HEAP[$list] = 0;
      
      HEAP[$buffer] = $small_buffer;
      HEAP[$buffersize] = 8192;
      HEAP[$big_buffer] = 0;
      HEAP[$nfilled] = 0;
      HEAP[$totalread] = 0;
      HEAP[$shortread] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str18, allocate([ $sizehint, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 55;
      break;
     case 2:
      
      
      var $6 = HEAP[HEAP[$self_addr] + 44];
      if ($6 == 0) {
        __label__ = 5;
        break;
      } else if ($6 == 1) {
        __label__ = 3;
        break;
      } else if ($6 == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      var $7 = HEAP[$self_addr];
      var $8 = _check_iterbuffered($7);
      
      if ($8 != 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      var $10 = _PyList_New(0);
      HEAP[$list] = $10;
      __label__ = 51;
      break;
     case 5:
      var $11 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($11, __str14);
      __label__ = 51;
      break;
     case 6:
      var $12 = HEAP[_PyExc_IOError];
      _PyErr_SetString($12, __str15);
      __label__ = 51;
      break;
     case 7:
      var $13 = _PyList_New(0);
      HEAP[$list] = $13;
      
      
      if (HEAP[$list] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      var $18 = HEAP[$buffersize] - HEAP[$nfilled];
      
      
      var $21 = HEAP[$buffer] + HEAP[$nfilled];
      
      
      var $24 = HEAP[HEAP[$self_addr] + 40];
      var $25 = HEAP[$self_addr];
      var $26 = _Util_UnivNewlineRead($bzerror, $24, $21, $18, $25);
      HEAP[$nread] = $26;
      
      
      
      
      
      var $32 = HEAP[HEAP[$self_addr] + 48] + HEAP[$nread];
      
      var $34 = HEAP[$self_addr] + 48;
      HEAP[$34] = $32;
      
      
      if (HEAP[$bzerror] == 4) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      var $39 = HEAP[HEAP[$self_addr] + 48];
      
      var $41 = HEAP[$self_addr] + 56;
      HEAP[$41] = $39;
      
      var $43 = HEAP[$self_addr] + 44;
      HEAP[$43] = 2;
      
      
      if (HEAP[$nread] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$sizehint] = 0;
      __label__ = 38;
      break;
     case 11:
      HEAP[$shortread] = 1;
      __label__ = 17;
      break;
     case 12:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 13:
      var $48 = HEAP[$bzerror];
      var $49 = _Util_CatchBZ2Error($48);
      __label__ = 14;
      break;
     case 14:
      
      
      
      var $53 = HEAP[HEAP[$list]] - 1;
      
      var $55 = HEAP[$list];
      HEAP[$55] = $53;
      
      
      
      
      if (HEAP[HEAP[$list]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $64 = HEAP[HEAP[HEAP[$list] + 4] + 24];
      var $65 = HEAP[$list];
      FUNCTION_TABLE[$64]($65);
      __label__ = 16;
      break;
     case 16:
      HEAP[$list] = 0;
      __label__ = 51;
      break;
     case 17:
      
      
      var $68 = HEAP[$totalread] + HEAP[$nread];
      HEAP[$totalread] = $68;
      
      
      var $71 = HEAP[$buffer] + HEAP[$nfilled];
      var $72 = HEAP[$nread];
      var $73 = _memchr($71, 10, $72);
      HEAP[$p] = $73;
      
      
      if (HEAP[$shortread] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 18:
      
      
      if (HEAP[$p] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 19:
      
      
      var $80 = HEAP[$nfilled] + HEAP[$nread];
      HEAP[$nfilled] = $80;
      
      var $82 = HEAP[$buffersize] * 2;
      HEAP[$buffersize] = $82;
      
      
      if (HEAP[$buffersize] < 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $85 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($85, __str7);
      __label__ = 14;
      break;
     case 21:
      
      
      if (HEAP[$big_buffer] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      var $88 = HEAP[$buffersize];
      var $89 = _PyString_FromStringAndSize(0, $88);
      HEAP[$big_buffer] = $89;
      
      
      if (HEAP[$big_buffer] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      var $95 = HEAP[$big_buffer] + 20;
      HEAP[$buffer] = $95;
      var $96 = HEAP[$buffer];
      var $small_buffer23 = $small_buffer;
      var $97 = HEAP[$nfilled];
      _llvm_memcpy_p0i8_p0i8_i32($96, $small_buffer23, $97, 1, 0);
      __label__ = 25;
      break;
     case 24:
      var $98 = HEAP[$buffersize];
      var $99 = __PyString_Resize($big_buffer, $98);
      
      
      
      var $103 = HEAP[$big_buffer] + 20;
      HEAP[$buffer] = $103;
      __label__ = 25;
      break;
     case 25:
      __label__ = 37;
      break;
     case 26:
      
      
      
      
      var $108 = HEAP[$buffer] + HEAP[$nfilled] + HEAP[$nread];
      HEAP[$end] = $108;
      var $109 = HEAP[$buffer];
      HEAP[$q] = $109;
      __label__ = 32;
      break;
     case 27:
      
      var $111 = HEAP[$p] + 1;
      HEAP[$p] = $111;
      
      
      
      
      var $116 = HEAP[$p] - HEAP[$q];
      var $117 = HEAP[$q];
      var $118 = _PyString_FromStringAndSize($117, $116);
      HEAP[$line] = $118;
      
      
      if (HEAP[$line] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      var $121 = HEAP[$line];
      var $122 = HEAP[$list];
      var $123 = _PyList_Append($122, $121);
      HEAP[$err] = $123;
      var $124 = HEAP[$line];
      
      
      var $127 = HEAP[$124] - 1;
      var $128 = $124;
      HEAP[$128] = $127;
      
      
      
      if (HEAP[$124] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $136 = HEAP[HEAP[HEAP[$line] + 4] + 24];
      var $137 = HEAP[$line];
      FUNCTION_TABLE[$136]($137);
      __label__ = 30;
      break;
     case 30:
      
      
      if (HEAP[$err] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      var $140 = HEAP[$p];
      HEAP[$q] = $140;
      
      
      
      
      var $145 = HEAP[$end] - HEAP[$q];
      var $146 = HEAP[$q];
      var $147 = _memchr($146, 10, $145);
      HEAP[$p] = $147;
      __label__ = 32;
      break;
     case 32:
      
      
      if (HEAP[$p] != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      
      var $154 = HEAP[$end] - HEAP[$q];
      HEAP[$nfilled] = $154;
      var $155 = HEAP[$buffer];
      var $156 = HEAP[$q];
      var $157 = HEAP[$nfilled];
      _llvm_memmove_p0i8_p0i8_i32($155, $156, $157, 1, 0);
      
      
      if (HEAP[$sizehint] > 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      if (HEAP[$sizehint] <= HEAP[$totalread]) {
        __label__ = 38;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      if (HEAP[$shortread] != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      HEAP[$sizehint] = 0;
      __label__ = 38;
      break;
     case 37:
      __label__ = 8;
      break;
     case 38:
      
      
      if (HEAP[$nfilled] != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 39:
      var $167 = HEAP[$nfilled];
      var $168 = HEAP[$buffer];
      var $169 = _PyString_FromStringAndSize($168, $167);
      HEAP[$line] = $169;
      
      
      if (HEAP[$line] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      
      
      if (HEAP[$sizehint] > 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 41:
      var $174 = HEAP[$self_addr];
      var $175 = _Util_GetLine($174, 0);
      HEAP[$rest] = $175;
      
      
      if (HEAP[$rest] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 42:
      var $178 = HEAP[$line];
      
      
      var $181 = HEAP[$178] - 1;
      var $182 = $178;
      HEAP[$182] = $181;
      
      
      
      if (HEAP[$178] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      
      
      var $190 = HEAP[HEAP[HEAP[$line] + 4] + 24];
      var $191 = HEAP[$line];
      FUNCTION_TABLE[$190]($191);
      __label__ = 44;
      break;
     case 44:
      __label__ = 14;
      break;
     case 45:
      var $192 = HEAP[$rest];
      _PyString_Concat($line, $192);
      
      
      
      var $196 = HEAP[HEAP[$rest]] - 1;
      
      var $198 = HEAP[$rest];
      HEAP[$198] = $196;
      
      
      
      
      if (HEAP[HEAP[$rest]] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      
      
      var $207 = HEAP[HEAP[HEAP[$rest] + 4] + 24];
      var $208 = HEAP[$rest];
      FUNCTION_TABLE[$207]($208);
      __label__ = 47;
      break;
     case 47:
      
      
      if (HEAP[$line] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      var $211 = HEAP[$line];
      var $212 = HEAP[$list];
      var $213 = _PyList_Append($212, $211);
      HEAP[$err] = $213;
      var $214 = HEAP[$line];
      
      
      var $217 = HEAP[$214] - 1;
      var $218 = $214;
      HEAP[$218] = $217;
      
      
      
      if (HEAP[$214] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      
      
      var $226 = HEAP[HEAP[HEAP[$line] + 4] + 24];
      var $227 = HEAP[$line];
      FUNCTION_TABLE[$226]($227);
      __label__ = 50;
      break;
     case 50:
      
      
      if (HEAP[$err] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 51:
      
      
      if (HEAP[$big_buffer] != 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 52:
      var $232 = HEAP[$big_buffer];
      
      
      var $235 = HEAP[$232] - 1;
      var $236 = $232;
      HEAP[$236] = $235;
      
      
      
      if (HEAP[$232] == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      
      
      
      
      var $244 = HEAP[HEAP[HEAP[$big_buffer] + 4] + 24];
      var $245 = HEAP[$big_buffer];
      FUNCTION_TABLE[$244]($245);
      __label__ = 54;
      break;
     case 54:
      var $246 = HEAP[$list];
      HEAP[$0] = $246;
      __label__ = 55;
      break;
     case 55:
      var $247 = HEAP[$0];
      HEAP[$retval] = $247;
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
  function _BZ2File_write($self, $args) {
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
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $ret = __stackBase__ + 16;
      var $pbuf = __stackBase__ + 20;
      var $buf = __stackBase__ + 72;
      var $len = __stackBase__ + 76;
      var $bzerror = __stackBase__ + 80;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$ret] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str19, allocate([ $pbuf, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$pbuf];
      HEAP[$buf] = $5;
      
      var $7 = HEAP[$pbuf + 8];
      HEAP[$len] = $7;
      
      
      var $10 = HEAP[HEAP[$self_addr] + 44];
      if ($10 == 0) {
        __label__ = 4;
        break;
      } else if ($10 == 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      var $12 = HEAP[$self_addr] + 24;
      HEAP[$12] = 0;
      
      
      var $15 = HEAP[HEAP[$self_addr] + 40];
      var $16 = HEAP[$buf];
      var $17 = HEAP[$len];
      _BZ2_bzWrite($bzerror, $15, $16, $17);
      
      
      
      
      
      var $23 = HEAP[HEAP[$self_addr] + 48] + HEAP[$len];
      
      var $25 = HEAP[$self_addr] + 48;
      HEAP[$25] = $23;
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      var $28 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($28, __str14);
      __label__ = 8;
      break;
     case 5:
      var $29 = HEAP[_PyExc_IOError];
      _PyErr_SetString($29, __str20);
      __label__ = 8;
      break;
     case 6:
      var $30 = HEAP[$bzerror];
      var $31 = _Util_CatchBZ2Error($30);
      __label__ = 8;
      break;
     case 7:
      
      var $33 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $33;
      HEAP[$ret] = __Py_NoneStruct;
      __label__ = 8;
      break;
     case 8:
      _PyBuffer_Release($pbuf);
      var $34 = HEAP[$ret];
      HEAP[$0] = $34;
      __label__ = 9;
      break;
     case 9:
      var $35 = HEAP[$0];
      HEAP[$retval] = $35;
      __label__ = 10;
      break;
     case 10:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2File_writelines($self, $seq) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 68;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $seq_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $list = __stackBase__ + 16;
      var $iter = __stackBase__ + 20;
      var $ret = __stackBase__ + 24;
      var $line = __stackBase__ + 28;
      var $i = __stackBase__ + 32;
      var $j = __stackBase__ + 36;
      var $index = __stackBase__ + 40;
      var $len = __stackBase__ + 44;
      var $islist = __stackBase__ + 48;
      var $bzerror = __stackBase__ + 52;
      var $v = __stackBase__ + 56;
      var $buffer = __stackBase__ + 60;
      var $len23 = __stackBase__ + 64;
      
      HEAP[$self_addr] = $self;
      HEAP[$seq_addr] = $seq;
      HEAP[$list] = 0;
      HEAP[$iter] = 0;
      HEAP[$ret] = 0;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 44];
      if ($3 == 0) {
        __label__ = 2;
        break;
      } else if ($3 == 3) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      var $11 = (HEAP[HEAP[HEAP[$seq_addr] + 4] + 84] & 33554432) != 0;
      HEAP[$islist] = $11;
      
      
      if (HEAP[$islist] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 2:
      var $14 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($14, __str14);
      __label__ = 39;
      break;
     case 3:
      var $15 = HEAP[_PyExc_IOError];
      _PyErr_SetString($15, __str20);
      __label__ = 39;
      break;
     case 4:
      var $16 = HEAP[$seq_addr];
      var $17 = _PyObject_GetIter($16);
      HEAP[$iter] = $17;
      
      
      if (HEAP[$iter] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $20 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($20, __str21);
      __label__ = 39;
      break;
     case 6:
      var $21 = _PyList_New(1e3);
      HEAP[$list] = $21;
      
      
      if (HEAP[$list] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      HEAP[$index] = 0;
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$islist] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 9:
      
      
      if (HEAP[$list] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      var $31 = HEAP[HEAP[$list]] - 1;
      
      var $33 = HEAP[$list];
      HEAP[$33] = $31;
      
      
      
      
      if (HEAP[HEAP[$list]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $42 = HEAP[HEAP[HEAP[$list] + 4] + 24];
      var $43 = HEAP[$list];
      FUNCTION_TABLE[$42]($43);
      __label__ = 12;
      break;
     case 12:
      
      var $45 = HEAP[$index] + 1e3;
      var $46 = HEAP[$seq_addr];
      var $47 = HEAP[$index];
      var $48 = _PyList_GetSlice($46, $47, $45);
      HEAP[$list] = $48;
      
      
      if (HEAP[$list] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $54 = HEAP[HEAP[$list] + 8];
      HEAP[$j] = $54;
      __label__ = 20;
      break;
     case 14:
      HEAP[$j] = 0;
      __label__ = 19;
      break;
     case 15:
      var $55 = HEAP[$iter];
      var $56 = _PyIter_Next($55);
      HEAP[$line] = $56;
      
      
      if (HEAP[$line] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      var $59 = _PyErr_Occurred();
      
      if ($59 != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      __label__ = 20;
      break;
     case 18:
      var $61 = HEAP[$list];
      var $62 = HEAP[$j];
      var $63 = HEAP[$line];
      var $64 = _PyList_SetItem($61, $62, $63);
      
      var $66 = HEAP[$j] + 1;
      HEAP[$j] = $66;
      __label__ = 19;
      break;
     case 19:
      
      
      if (HEAP[$j] <= 999) {
        __label__ = 15;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      if (HEAP[$j] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      HEAP[$i] = 0;
      __label__ = 30;
      break;
     case 22:
      
      
      
      
      
      
      var $77 = HEAP[HEAP[HEAP[$list] + 12] + 4 * HEAP[$i]];
      HEAP[$v] = $77;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$v] + 4] + 84] & 134217728) == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 23:
      var $85 = HEAP[$v];
      var $86 = _PyObject_AsCharBuffer($85, $buffer, $len23);
      
      if ($86 != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      var $88 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($88, __str22);
      __label__ = 39;
      break;
     case 25:
      var $89 = HEAP[$len23];
      var $90 = HEAP[$buffer];
      var $91 = _PyString_FromStringAndSize($90, $89);
      HEAP[$line] = $91;
      
      
      if (HEAP[$line] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      var $97 = HEAP[HEAP[$v]] - 1;
      
      var $99 = HEAP[$v];
      HEAP[$99] = $97;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $108 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $109 = HEAP[$v];
      FUNCTION_TABLE[$108]($109);
      __label__ = 28;
      break;
     case 28:
      
      
      
      
      
      var $115 = HEAP[HEAP[$list] + 12] + 4 * HEAP[$i];
      var $116 = HEAP[$line];
      HEAP[$115] = $116;
      __label__ = 29;
      break;
     case 29:
      
      var $118 = HEAP[$i] + 1;
      HEAP[$i] = $118;
      __label__ = 30;
      break;
     case 30:
      
      
      
      if (HEAP[$i] < HEAP[$j]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      var $123 = HEAP[$self_addr] + 24;
      HEAP[$123] = 0;
      HEAP[$i] = 0;
      __label__ = 35;
      break;
     case 32:
      
      
      
      
      
      
      var $130 = HEAP[HEAP[HEAP[$list] + 12] + 4 * HEAP[$i]];
      HEAP[$line] = $130;
      
      
      
      var $134 = HEAP[HEAP[$line] + 8];
      HEAP[$len] = $134;
      
      
      
      var $138 = HEAP[$line] + 20;
      
      
      var $141 = HEAP[HEAP[$self_addr] + 40];
      var $142 = HEAP[$len];
      _BZ2_bzWrite($bzerror, $141, $138, $142);
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      var $145 = HEAP[$bzerror];
      var $146 = _Util_CatchBZ2Error($145);
      __label__ = 39;
      break;
     case 34:
      
      var $148 = HEAP[$i] + 1;
      HEAP[$i] = $148;
      __label__ = 35;
      break;
     case 35:
      
      
      
      if (HEAP[$i] < HEAP[$j]) {
        __label__ = 32;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      if (HEAP[$j] <= 999) {
        __label__ = 38;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      var $155 = HEAP[$index] + 1e3;
      HEAP[$index] = $155;
      __label__ = 8;
      break;
     case 38:
      
      var $157 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $157;
      HEAP[$ret] = __Py_NoneStruct;
      __label__ = 39;
      break;
     case 39:
      
      
      if (HEAP[$list] != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 40:
      
      
      
      var $163 = HEAP[HEAP[$list]] - 1;
      
      var $165 = HEAP[$list];
      HEAP[$165] = $163;
      
      
      
      
      if (HEAP[HEAP[$list]] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $174 = HEAP[HEAP[HEAP[$list] + 4] + 24];
      var $175 = HEAP[$list];
      FUNCTION_TABLE[$174]($175);
      __label__ = 42;
      break;
     case 42:
      
      
      if (HEAP[$iter] != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 43:
      
      
      
      var $181 = HEAP[HEAP[$iter]] - 1;
      
      var $183 = HEAP[$iter];
      HEAP[$183] = $181;
      
      
      
      
      if (HEAP[HEAP[$iter]] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      var $192 = HEAP[HEAP[HEAP[$iter] + 4] + 24];
      var $193 = HEAP[$iter];
      FUNCTION_TABLE[$192]($193);
      __label__ = 45;
      break;
     case 45:
      var $194 = HEAP[$ret];
      HEAP[$0] = $194;
      var $195 = HEAP[$0];
      HEAP[$retval] = $195;
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
  function _BZ2File_seek($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8264;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8264);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_139 = __stackBase__ + 12;
      var $0 = __stackBase__ + 20;
      var $where = __stackBase__ + 24;
      var $offobj = __stackBase__ + 28;
      var $offset = __stackBase__ + 32;
      var $small_buffer = __stackBase__ + 40;
      var $buffer = __stackBase__ + 8232;
      var $buffersize = __stackBase__ + 8236;
      var $bytesread = __stackBase__ + 8240;
      var $readsize = __stackBase__ + 8248;
      var $chunksize = __stackBase__ + 8252;
      var $bzerror = __stackBase__ + 8256;
      var $ret = __stackBase__ + 8260;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$where] = 0;
      
      HEAP[$buffer] = $small_buffer;
      HEAP[$buffersize] = 8192;
      HEAP[$bytesread] = 0;
      HEAP[$ret] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str23, allocate([ $offobj, 0, 0, 0, $where, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$offobj] + 4] + 84] & 16777216) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = HEAP[$offobj];
      var $12 = _PyLong_AsLongLong($11);
      HEAP[$iftmp_139] = $12;
      __label__ = 5;
      break;
     case 4:
      var $13 = HEAP[$offobj];
      var $14 = _PyInt_AsLong($13);
      var $15 = $14;
      HEAP[$iftmp_139] = $15;
      __label__ = 5;
      break;
     case 5:
      var $16 = HEAP[$iftmp_139];
      HEAP[$offset] = $16;
      var $17 = _PyErr_Occurred();
      
      if ($17 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 49;
      break;
     case 7:
      var $19 = HEAP[$self_addr];
      _Util_DropReadAhead($19);
      
      
      var $22 = HEAP[HEAP[$self_addr] + 44];
      if ($22 == 0) {
        __label__ = 9;
        break;
      } else if ($22 == 1) {
        __label__ = 8;
        break;
      } else if ($22 == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      if (HEAP[$where] == 2) {
        __label__ = 11;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 9:
      var $25 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($25, __str14);
      __label__ = 48;
      break;
     case 10:
      var $26 = HEAP[_PyExc_IOError];
      _PyErr_SetString($26, __str24);
      __label__ = 48;
      break;
     case 11:
      
      
      
      var $30 = HEAP[HEAP[$self_addr] + 56] == -1;
      if ($30) {
        __label__ = 12;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 12:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] == 2) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      ___assert_fail(__str25, __str9, 1068, ___PRETTY_FUNCTION___9265);
      throw "Reached an unreachable!";
     case 14:
      
      
      var $37 = HEAP[HEAP[$self_addr] + 40];
      var $38 = HEAP[$buffer];
      var $39 = HEAP[$buffersize];
      var $40 = HEAP[$self_addr];
      var $41 = _Util_UnivNewlineRead($bzerror, $37, $38, $39, $40);
      HEAP[$chunksize] = $41;
      
      
      
      
      
      var $47 = HEAP[HEAP[$self_addr] + 48] + HEAP[$chunksize];
      
      var $49 = HEAP[$self_addr] + 48;
      HEAP[$49] = $47;
      
      
      
      var $53 = HEAP[$chunksize] + HEAP[$bytesread];
      HEAP[$bytesread] = $53;
      
      
      if (HEAP[$bzerror] == 4) {
        __label__ = 18;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $58 = HEAP[$bzerror];
      var $59 = _Util_CatchBZ2Error($58);
      __label__ = 48;
      break;
     case 17:
      __label__ = 14;
      break;
     case 18:
      
      var $61 = HEAP[$self_addr] + 44;
      HEAP[$61] = 2;
      
      
      var $64 = HEAP[HEAP[$self_addr] + 48];
      
      var $66 = HEAP[$self_addr] + 56;
      HEAP[$66] = $64;
      HEAP[$bytesread] = 0;
      __label__ = 19;
      break;
     case 19:
      
      
      
      
      var $71 = HEAP[HEAP[$self_addr] + 56] + HEAP[$offset];
      HEAP[$offset] = $71;
      __label__ = 22;
      break;
     case 20:
      
      
      if (HEAP[$where] == 1) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $78 = HEAP[HEAP[$self_addr] + 48] + HEAP[$offset];
      HEAP[$offset] = $78;
      __label__ = 22;
      break;
     case 22:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 48] <= HEAP[$offset]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $88 = HEAP[$offset] - HEAP[HEAP[$self_addr] + 48];
      HEAP[$offset] = $88;
      __label__ = 36;
      break;
     case 24:
      
      
      var $91 = HEAP[HEAP[$self_addr] + 40];
      _BZ2_bzReadClose($bzerror, $91);
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      var $99 = HEAP[HEAP[$self_addr] + 8];
      _PyFile_DecUseCount($99);
      
      var $101 = HEAP[$self_addr] + 40;
      HEAP[$101] = 0;
      __label__ = 26;
      break;
     case 26:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $104 = HEAP[$bzerror];
      var $105 = _Util_CatchBZ2Error($104);
      __label__ = 48;
      break;
     case 28:
      
      
      var $108 = HEAP[HEAP[$self_addr] + 8];
      var $109 = _PyObject_CallMethod($108, __str26, __str27, allocate(4, "i32", ALLOC_STACK));
      HEAP[$ret] = $109;
      
      
      if (HEAP[$ret] == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      var $115 = HEAP[HEAP[$ret]] - 1;
      
      var $117 = HEAP[$ret];
      HEAP[$117] = $115;
      
      
      
      
      if (HEAP[HEAP[$ret]] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $126 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $127 = HEAP[$ret];
      FUNCTION_TABLE[$126]($127);
      __label__ = 31;
      break;
     case 31:
      HEAP[$ret] = 0;
      
      var $129 = HEAP[$self_addr] + 48;
      HEAP[$129] = 0;
      
      
      var $132 = HEAP[HEAP[$self_addr] + 8];
      var $133 = _PyFile_AsFile($132);
      var $134 = _BZ2_bzReadOpen($bzerror, $133, 0, 0, 0, 0);
      
      var $136 = HEAP[$self_addr] + 40;
      HEAP[$136] = $134;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      var $144 = HEAP[HEAP[$self_addr] + 8];
      _PyFile_IncUseCount($144);
      __label__ = 33;
      break;
     case 33:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      var $147 = HEAP[$bzerror];
      var $148 = _Util_CatchBZ2Error($147);
      __label__ = 48;
      break;
     case 35:
      
      var $150 = HEAP[$self_addr] + 44;
      HEAP[$150] = 1;
      __label__ = 36;
      break;
     case 36:
      
      
      if (HEAP[$offset] <= 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] == 2) {
        __label__ = 47;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      
      
      
      
      
      
      if (HEAP[$offset] - HEAP[$bytesread] > HEAP[$buffersize]) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      var $163 = HEAP[$buffersize];
      HEAP[$readsize] = $163;
      __label__ = 41;
      break;
     case 40:
      
      
      
      
      var $168 = (HEAP[$offset] & 4294967295) - (HEAP[$bytesread] & 4294967295);
      HEAP[$readsize] = $168;
      __label__ = 41;
      break;
     case 41:
      
      
      var $171 = HEAP[HEAP[$self_addr] + 40];
      var $172 = HEAP[$buffer];
      var $173 = HEAP[$readsize];
      var $174 = HEAP[$self_addr];
      var $175 = _Util_UnivNewlineRead($bzerror, $171, $172, $173, $174);
      HEAP[$chunksize] = $175;
      
      
      
      
      
      var $181 = HEAP[HEAP[$self_addr] + 48] + HEAP[$chunksize];
      
      var $183 = HEAP[$self_addr] + 48;
      HEAP[$183] = $181;
      
      
      
      var $187 = HEAP[$chunksize] + HEAP[$bytesread];
      HEAP[$bytesread] = $187;
      
      
      if (HEAP[$bzerror] == 4) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      var $192 = HEAP[HEAP[$self_addr] + 48];
      
      var $194 = HEAP[$self_addr] + 56;
      HEAP[$194] = $192;
      
      var $196 = HEAP[$self_addr] + 44;
      HEAP[$196] = 2;
      __label__ = 47;
      break;
     case 43:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      var $199 = HEAP[$bzerror];
      var $200 = _Util_CatchBZ2Error($199);
      __label__ = 48;
      break;
     case 45:
      
      
      
      if (HEAP[$bytesread] == HEAP[$offset]) {
        __label__ = 47;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 46:
      __label__ = 38;
      break;
     case 47:
      
      var $205 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $205;
      HEAP[$ret] = __Py_NoneStruct;
      __label__ = 48;
      break;
     case 48:
      var $206 = HEAP[$ret];
      HEAP[$0] = $206;
      __label__ = 49;
      break;
     case 49:
      var $207 = HEAP[$0];
      HEAP[$retval] = $207;
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
  function _BZ2File_tell($self, $args) {
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
      var $ret = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$ret] = 0;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str14);
      __label__ = 3;
      break;
     case 2:
      
      
      var $8 = HEAP[HEAP[$self_addr] + 48];
      var $9 = _PyLong_FromLongLong($8);
      HEAP[$ret] = $9;
      __label__ = 3;
      break;
     case 3:
      var $10 = HEAP[$ret];
      HEAP[$0] = $10;
      var $11 = HEAP[$0];
      HEAP[$retval] = $11;
      __label__ = 4;
      break;
     case 4:
      var $retval2 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2File_close($self) {
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
      var $ret = __stackBase__ + 12;
      var $bzerror = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$ret] = 0;
      HEAP[$bzerror] = 0;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 44];
      if ($3 == 1) {
        __label__ = 1;
        break;
      } else if ($3 == 2) {
        __label__ = 1;
        break;
      } else if ($3 == 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[HEAP[$self_addr] + 40];
      _BZ2_bzReadClose($bzerror, $6);
      __label__ = 3;
      break;
     case 2:
      
      
      var $9 = HEAP[HEAP[$self_addr] + 40];
      _BZ2_bzWriteClose($bzerror, $9, 0, 0, 0);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      var $17 = HEAP[HEAP[$self_addr] + 8];
      _PyFile_DecUseCount($17);
      
      var $19 = HEAP[$self_addr] + 40;
      HEAP[$19] = 0;
      __label__ = 5;
      break;
     case 5:
      
      var $21 = HEAP[$self_addr] + 44;
      HEAP[$21] = 0;
      
      
      var $24 = HEAP[HEAP[$self_addr] + 8];
      var $25 = _PyObject_CallMethod($24, __str28, 0, allocate(1, "i32", ALLOC_STACK));
      HEAP[$ret] = $25;
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      var $28 = HEAP[$bzerror];
      var $29 = _Util_CatchBZ2Error($28);
      
      
      if (HEAP[$ret] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      var $35 = HEAP[HEAP[$ret]] - 1;
      
      var $37 = HEAP[$ret];
      HEAP[$37] = $35;
      
      
      
      
      if (HEAP[HEAP[$ret]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $47 = HEAP[$ret];
      FUNCTION_TABLE[$46]($47);
      __label__ = 9;
      break;
     case 9:
      HEAP[$ret] = 0;
      __label__ = 10;
      break;
     case 10:
      var $48 = HEAP[$ret];
      HEAP[$0] = $48;
      var $49 = HEAP[$0];
      HEAP[$retval] = $49;
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
  function _BZ2File_enter($self) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str14);
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      var $10 = HEAP[HEAP[$self_addr]] + 1;
      var $11 = HEAP[$self_addr];
      HEAP[$11] = $10;
      
      var $13 = HEAP[$self_addr];
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
  function _BZ2File_exit($self, $args) {
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
      var $ret = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      
      var $2 = HEAP[$self_addr];
      var $3 = _PyObject_CallMethod($2, __str28, 0, allocate(1, "i32", ALLOC_STACK));
      HEAP[$ret] = $3;
      
      
      if (HEAP[$ret] == 0) {
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
      
      
      
      var $9 = HEAP[HEAP[$ret]] - 1;
      
      var $11 = HEAP[$ret];
      HEAP[$11] = $9;
      
      
      
      
      if (HEAP[HEAP[$ret]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $21 = HEAP[$ret];
      FUNCTION_TABLE[$20]($21);
      __label__ = 4;
      break;
     case 4:
      
      var $23 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $23;
      HEAP[$0] = __Py_NoneStruct;
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
  function _BZ2File_get_newlines($self, $closure) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $closure_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$closure_addr] = $closure;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 32];
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else if ($3 == 1) {
        __label__ = 2;
        break;
      } else if ($3 == 2) {
        __label__ = 3;
        break;
      } else if ($3 == 3) {
        __label__ = 4;
        break;
      } else if ($3 == 4) {
        __label__ = 5;
        break;
      } else if ($3 == 5) {
        __label__ = 6;
        break;
      } else if ($3 == 6) {
        __label__ = 7;
        break;
      } else if ($3 == 7) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      
      var $5 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $5;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 10;
      break;
     case 2:
      var $6 = _PyString_FromString(__str38);
      HEAP[$0] = $6;
      __label__ = 10;
      break;
     case 3:
      var $7 = _PyString_FromString(__str39);
      HEAP[$0] = $7;
      __label__ = 10;
      break;
     case 4:
      var $8 = _Py_BuildValue(__str40, allocate([ __str38, 0, 0, 0, __str39, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $8;
      __label__ = 10;
      break;
     case 5:
      var $9 = _PyString_FromString(__str41);
      HEAP[$0] = $9;
      __label__ = 10;
      break;
     case 6:
      var $10 = _Py_BuildValue(__str40, allocate([ __str38, 0, 0, 0, __str41, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $10;
      __label__ = 10;
      break;
     case 7:
      var $11 = _Py_BuildValue(__str40, allocate([ __str39, 0, 0, 0, __str41, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $11;
      __label__ = 10;
      break;
     case 8:
      var $12 = _Py_BuildValue(__str42, allocate([ __str38, 0, 0, 0, __str39, 0, 0, 0, __str41, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $12;
      __label__ = 10;
      break;
     case 9:
      
      
      var $15 = HEAP[HEAP[$self_addr] + 32];
      var $16 = HEAP[_PyExc_SystemError];
      var $17 = _PyErr_Format($16, __str43, allocate([ $15, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 10:
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
  function _BZ2File_get_closed($self, $closure) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $closure_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$closure_addr] = $closure;
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 44] == 0;
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
  function _BZ2File_get_mode($self, $closure) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $closure_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$closure_addr] = $closure;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 8];
      var $4 = _PyObject_GetAttrString($3, __str44);
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
  function _BZ2File_get_name($self, $closure) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $closure_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$closure_addr] = $closure;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 8];
      var $4 = _PyObject_GetAttrString($3, __str45);
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
  function _BZ2File_init($self, $args, $kwargs) {
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
      var $kwargs_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $iftmp_181 = __stackBase__ + 16;
      var $iftmp_173 = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $name = __stackBase__ + 28;
      var $mode = __stackBase__ + 32;
      var $buffering = __stackBase__ + 36;
      var $compresslevel = __stackBase__ + 40;
      var $bzerror = __stackBase__ + 44;
      var $mode_char = __stackBase__ + 48;
      var $error = __stackBase__ + 52;
      var $_py_tmp = __stackBase__ + 56;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwargs_addr] = $kwargs;
      HEAP[$mode] = __str54;
      HEAP[$buffering] = -1;
      HEAP[$compresslevel] = 9;
      HEAP[$mode_char] = 0;
      
      var $2 = HEAP[$self_addr] + 56;
      HEAP[$2] = -1;
      var $3 = HEAP[$args_addr];
      var $4 = HEAP[$kwargs_addr];
      var $5 = _PyArg_ParseTupleAndKeywords($3, $4, __str55, _kwlist_9533, allocate([ $name, 0, 0, 0, $mode, 0, 0, 0, $buffering, 0, 0, 0, $compresslevel, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 36;
      break;
     case 2:
      
      
      if (HEAP[$compresslevel] <= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$compresslevel] > 9) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $11 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($11, __str59);
      HEAP[$0] = -1;
      __label__ = 36;
      break;
     case 5:
      HEAP[$error] = 0;
      
      
      var $14 = HEAP[HEAP[$mode]];
      if ($14 == 85) {
        __label__ = 10;
        break;
      } else if ($14 == 98) {
        __label__ = 9;
        break;
      } else if ($14 == 114) {
        __label__ = 6;
        break;
      } else if ($14 == 119) {
        __label__ = 6;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 6:
      
      
      if (HEAP[$mode_char] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$error] = 1;
      __label__ = 8;
      break;
     case 8:
      
      
      var $19 = HEAP[HEAP[$mode]];
      HEAP[$mode_char] = $19;
      __label__ = 12;
      break;
     case 9:
      __label__ = 12;
      break;
     case 10:
      
      var $21 = HEAP[$self_addr] + 28;
      HEAP[$21] = 1;
      __label__ = 12;
      break;
     case 11:
      HEAP[$error] = 1;
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$error] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      var $26 = HEAP[HEAP[$mode]];
      var $27 = HEAP[_PyExc_ValueError];
      var $28 = _PyErr_Format($27, __str60, allocate([ $26, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = -1;
      __label__ = 36;
      break;
     case 14:
      
      var $30 = HEAP[$mode] + 1;
      HEAP[$mode] = $30;
      
      
      
      if (HEAP[HEAP[$mode]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      __label__ = 5;
      break;
     case 16:
      
      
      if (HEAP[$mode_char] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      HEAP[$mode_char] = 114;
      __label__ = 18;
      break;
     case 18:
      
      
      if (HEAP[$mode_char] == 114) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$iftmp_173] = __str61;
      __label__ = 21;
      break;
     case 20:
      HEAP[$iftmp_173] = __str62;
      __label__ = 21;
      break;
     case 21:
      var $38 = HEAP[$iftmp_173];
      HEAP[$mode] = $38;
      var $39 = HEAP[$buffering];
      var $40 = HEAP[$mode];
      var $41 = HEAP[$name];
      var $42 = _PyObject_CallFunction(_PyFile_Type, __str63, allocate([ $41, 0, 0, 0, $40, 0, 0, 0, $39, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      
      var $44 = HEAP[$self_addr] + 8;
      HEAP[$44] = $42;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      HEAP[$0] = -1;
      __label__ = 36;
      break;
     case 23:
      
      
      if (HEAP[$mode_char] == 114) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      var $53 = HEAP[HEAP[$self_addr] + 8];
      var $54 = _PyFile_AsFile($53);
      var $55 = _BZ2_bzReadOpen($bzerror, $54, 0, 0, 0, 0);
      
      var $57 = HEAP[$self_addr] + 40;
      HEAP[$57] = $55;
      __label__ = 26;
      break;
     case 25:
      var $58 = HEAP[$compresslevel];
      
      
      var $61 = HEAP[HEAP[$self_addr] + 8];
      var $62 = _PyFile_AsFile($61);
      var $63 = _BZ2_bzWriteOpen($bzerror, $62, $58, 0, 0);
      
      var $65 = HEAP[$self_addr] + 40;
      HEAP[$65] = $63;
      __label__ = 26;
      break;
     case 26:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $68 = HEAP[$bzerror];
      var $69 = _Util_CatchBZ2Error($68);
      __label__ = 32;
      break;
     case 28:
      
      
      
      var $73 = HEAP[HEAP[$self_addr] + 8];
      _PyFile_IncUseCount($73);
      
      
      if (HEAP[$mode_char] == 114) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      HEAP[$iftmp_181] = 1;
      __label__ = 31;
      break;
     case 30:
      HEAP[$iftmp_181] = 3;
      __label__ = 31;
      break;
     case 31:
      
      var $77 = HEAP[$self_addr] + 44;
      var $78 = HEAP[$iftmp_181];
      HEAP[$77] = $78;
      HEAP[$0] = 0;
      __label__ = 36;
      break;
     case 32:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 33:
      
      
      var $85 = HEAP[HEAP[$self_addr] + 8];
      HEAP[$_py_tmp] = $85;
      
      var $87 = HEAP[$self_addr] + 8;
      HEAP[$87] = 0;
      
      
      
      var $91 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $93 = HEAP[$_py_tmp];
      HEAP[$93] = $91;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $102 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $103 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$102]($103);
      __label__ = 35;
      break;
     case 35:
      HEAP[$0] = -1;
      __label__ = 36;
      break;
     case 36:
      var $104 = HEAP[$0];
      HEAP[$retval] = $104;
      __label__ = 37;
      break;
     case 37:
      var $retval36 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval36;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2File_dealloc($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $bzerror = __stackBase__ + 4;
      
      HEAP[$self_addr] = $self;
      
      
      var $2 = HEAP[HEAP[$self_addr] + 44];
      if ($2 == 1) {
        __label__ = 1;
        break;
      } else if ($2 == 2) {
        __label__ = 1;
        break;
      } else if ($2 == 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $5 = HEAP[HEAP[$self_addr] + 40];
      _BZ2_bzReadClose($bzerror, $5);
      __label__ = 3;
      break;
     case 2:
      
      
      var $8 = HEAP[HEAP[$self_addr] + 40];
      _BZ2_bzWriteClose($bzerror, $8, 0, 0, 0);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 40] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      var $16 = HEAP[HEAP[$self_addr] + 8];
      _PyFile_DecUseCount($16);
      
      var $18 = HEAP[$self_addr] + 40;
      HEAP[$18] = 0;
      __label__ = 5;
      break;
     case 5:
      var $19 = HEAP[$self_addr];
      _Util_DropReadAhead($19);
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $26 = HEAP[HEAP[$self_addr] + 8];
      
      
      var $29 = HEAP[$26] - 1;
      var $30 = $26;
      HEAP[$30] = $29;
      
      
      
      if (HEAP[$26] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $40 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 8] + 4] + 24];
      
      
      var $43 = HEAP[HEAP[$self_addr] + 8];
      FUNCTION_TABLE[$40]($43);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[$self_addr] + 4] + 160];
      
      var $51 = HEAP[$self_addr];
      FUNCTION_TABLE[$49]($51);
      __label__ = 9;
      break;
     case 9:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2File_getiter($self) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str14);
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      var $10 = HEAP[HEAP[$self_addr]] + 1;
      var $11 = HEAP[$self_addr];
      HEAP[$11] = $10;
      
      var $13 = HEAP[$self_addr];
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
  function _BZ2File_iternext($self) {
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
      var $ret = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 44] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str14);
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 2:
      var $6 = HEAP[$self_addr];
      var $7 = _Util_ReadAheadGetLineSkip($6, 0, 8192);
      HEAP[$ret] = $7;
      
      
      if (HEAP[$ret] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      if (HEAP[HEAP[$ret] + 8] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      if (HEAP[$ret] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      var $18 = HEAP[$ret];
      
      
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
      
      
      
      
      
      var $31 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      
      var $33 = HEAP[$ret];
      FUNCTION_TABLE[$31]($33);
      __label__ = 7;
      break;
     case 7:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 8:
      
      var $35 = HEAP[$ret];
      HEAP[$0] = $35;
      __label__ = 9;
      break;
     case 9:
      var $36 = HEAP[$0];
      HEAP[$retval] = $36;
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
  function _BZ2Comp_compress($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 100;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 100);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $pdata = __stackBase__ + 16;
      var $data = __stackBase__ + 68;
      var $datasize = __stackBase__ + 72;
      var $bufsize = __stackBase__ + 76;
      var $totalout = __stackBase__ + 80;
      var $ret = __stackBase__ + 88;
      var $bzs = __stackBase__ + 92;
      var $bzerror = __stackBase__ + 96;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$bufsize] = 8192;
      HEAP[$ret] = 0;
      
      var $2 = HEAP[$self_addr] + 8;
      HEAP[$bzs] = $2;
      var $3 = HEAP[$args_addr];
      var $4 = _PyArg_ParseTuple($3, __str65, allocate([ $pdata, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($4 == 0) {
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
      
      var $7 = HEAP[$pdata];
      HEAP[$data] = $7;
      
      var $9 = HEAP[$pdata + 8];
      HEAP[$datasize] = $9;
      
      
      if (HEAP[$datasize] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyBuffer_Release($pdata);
      var $12 = _PyString_FromString(__str13);
      HEAP[$0] = $12;
      __label__ = 21;
      break;
     case 4:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 56] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $17 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($17, __str66);
      __label__ = 17;
      break;
     case 6:
      var $18 = HEAP[$bufsize];
      var $19 = _PyString_FromStringAndSize(0, $18);
      HEAP[$ret] = $19;
      
      
      if (HEAP[$ret] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      var $23 = HEAP[$bzs];
      var $24 = HEAP[$data];
      HEAP[$23] = $24;
      var $25 = HEAP[$datasize];
      
      var $27 = HEAP[$bzs] + 4;
      HEAP[$27] = $25;
      
      
      
      var $31 = HEAP[$ret] + 20;
      
      var $33 = HEAP[$bzs] + 16;
      HEAP[$33] = $31;
      var $34 = HEAP[$bufsize];
      
      var $36 = HEAP[$bzs] + 20;
      HEAP[$36] = $34;
      
      
      
      
      var $41 = HEAP[HEAP[$bzs] + 28] * Math.pow(2, 32);
      
      
      
      
      var $46 = $41 + HEAP[HEAP[$bzs] + 24];
      HEAP[$totalout] = $46;
      __label__ = 8;
      break;
     case 8:
      var $47 = HEAP[$bzs];
      var $48 = _BZ2_bzCompress($47, 0);
      HEAP[$bzerror] = $48;
      
      
      if (HEAP[$bzerror] != 1) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $51 = HEAP[$bzerror];
      var $52 = _Util_CatchBZ2Error($51);
      __label__ = 17;
      break;
     case 10:
      
      
      
      
      if (HEAP[HEAP[$bzs] + 4] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      if (HEAP[HEAP[$bzs] + 20] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      var $61 = HEAP[$bufsize];
      var $62 = _Util_NewBufferSize($61);
      HEAP[$bufsize] = $62;
      var $63 = HEAP[$bufsize];
      var $64 = __PyString_Resize($ret, $63);
      
      if ($64 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $66 = HEAP[$bzs];
      var $67 = _BZ2_bzCompressEnd($66);
      __label__ = 17;
      break;
     case 14:
      
      
      
      var $71 = HEAP[$ret] + 20;
      
      
      
      
      var $76 = HEAP[HEAP[$bzs] + 28] * Math.pow(2, 32);
      
      
      
      
      
      
      
      
      var $85 = $71 + ($76 + HEAP[HEAP[$bzs] + 24] - HEAP[$totalout] & 4294967295);
      
      var $87 = HEAP[$bzs] + 16;
      HEAP[$87] = $85;
      
      
      
      
      
      
      
      
      
      
      var $98 = HEAP[$bufsize] - (HEAP[HEAP[$bzs] + 16] - (HEAP[$ret] + 20));
      
      var $100 = HEAP[$bzs] + 20;
      HEAP[$100] = $98;
      __label__ = 15;
      break;
     case 15:
      __label__ = 8;
      break;
     case 16:
      
      
      
      
      
      var $106 = HEAP[HEAP[$bzs] + 24] - (HEAP[$totalout] & 4294967295);
      var $107 = __PyString_Resize($ret, $106);
      _PyBuffer_Release($pdata);
      var $108 = HEAP[$ret];
      HEAP[$0] = $108;
      __label__ = 21;
      break;
     case 17:
      _PyBuffer_Release($pdata);
      
      
      if (HEAP[$ret] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      var $111 = HEAP[$ret];
      
      
      var $114 = HEAP[$111] - 1;
      var $115 = $111;
      HEAP[$115] = $114;
      
      
      
      if (HEAP[$111] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $123 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $124 = HEAP[$ret];
      FUNCTION_TABLE[$123]($124);
      __label__ = 20;
      break;
     case 20:
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 21:
      var $125 = HEAP[$0];
      HEAP[$retval] = $125;
      __label__ = 22;
      break;
     case 22:
      var $retval20 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2Comp_flush($self) {
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
      var $bufsize = __stackBase__ + 12;
      var $ret = __stackBase__ + 16;
      var $bzs = __stackBase__ + 20;
      var $totalout = __stackBase__ + 24;
      var $bzerror = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$bufsize] = 8192;
      HEAP[$ret] = 0;
      
      var $2 = HEAP[$self_addr] + 8;
      HEAP[$bzs] = $2;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 56] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($7, __str67);
      __label__ = 14;
      break;
     case 2:
      
      var $9 = HEAP[$self_addr] + 56;
      HEAP[$9] = 0;
      var $10 = HEAP[$bufsize];
      var $11 = _PyString_FromStringAndSize(0, $10);
      HEAP[$ret] = $11;
      
      
      if (HEAP[$ret] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $17 = HEAP[$ret] + 20;
      
      var $19 = HEAP[$bzs] + 16;
      HEAP[$19] = $17;
      var $20 = HEAP[$bufsize];
      
      var $22 = HEAP[$bzs] + 20;
      HEAP[$22] = $20;
      
      
      
      
      var $27 = HEAP[HEAP[$bzs] + 28] * Math.pow(2, 32);
      
      
      
      
      var $32 = $27 + HEAP[HEAP[$bzs] + 24];
      HEAP[$totalout] = $32;
      __label__ = 4;
      break;
     case 4:
      var $33 = HEAP[$bzs];
      var $34 = _BZ2_bzCompress($33, 2);
      HEAP[$bzerror] = $34;
      
      
      if (HEAP[$bzerror] == 4) {
        __label__ = 11;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      if (HEAP[$bzerror] != 3) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $39 = HEAP[$bzerror];
      var $40 = _Util_CatchBZ2Error($39);
      __label__ = 14;
      break;
     case 7:
      
      
      
      
      if (HEAP[HEAP[$bzs] + 20] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      var $45 = HEAP[$bufsize];
      var $46 = _Util_NewBufferSize($45);
      HEAP[$bufsize] = $46;
      var $47 = HEAP[$bufsize];
      var $48 = __PyString_Resize($ret, $47);
      
      if ($48 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      var $53 = HEAP[$ret] + 20;
      
      var $55 = HEAP[$bzs] + 16;
      HEAP[$55] = $53;
      
      
      
      var $59 = HEAP[$ret] + 20;
      
      
      
      
      var $64 = HEAP[HEAP[$bzs] + 28] * Math.pow(2, 32);
      
      
      
      
      
      
      
      
      var $73 = $59 + ($64 + HEAP[HEAP[$bzs] + 24] - HEAP[$totalout] & 4294967295);
      
      var $75 = HEAP[$bzs] + 16;
      HEAP[$75] = $73;
      
      
      
      
      
      
      
      
      
      
      var $86 = HEAP[$bufsize] - (HEAP[HEAP[$bzs] + 16] - (HEAP[$ret] + 20));
      
      var $88 = HEAP[$bzs] + 20;
      HEAP[$88] = $86;
      __label__ = 10;
      break;
     case 10:
      __label__ = 4;
      break;
     case 11:
      
      
      
      
      if (HEAP[HEAP[$bzs] + 20] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      var $98 = HEAP[HEAP[$bzs] + 24] - (HEAP[$totalout] & 4294967295);
      var $99 = __PyString_Resize($ret, $98);
      __label__ = 13;
      break;
     case 13:
      var $100 = HEAP[$ret];
      HEAP[$0] = $100;
      __label__ = 18;
      break;
     case 14:
      
      
      if (HEAP[$ret] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      var $103 = HEAP[$ret];
      
      
      var $106 = HEAP[$103] - 1;
      var $107 = $103;
      HEAP[$107] = $106;
      
      
      
      if (HEAP[$103] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $115 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $116 = HEAP[$ret];
      FUNCTION_TABLE[$115]($116);
      __label__ = 17;
      break;
     case 17:
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 18:
      var $117 = HEAP[$0];
      HEAP[$retval] = $117;
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
  function _BZ2Comp_init($self, $args, $kwargs) {
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
      var $kwargs_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $compresslevel = __stackBase__ + 20;
      var $bzerror = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwargs_addr] = $kwargs;
      HEAP[$compresslevel] = 9;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwargs_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str70, _kwlist_9883, allocate([ $compresslevel, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      
      if (HEAP[$compresslevel] <= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$compresslevel] > 9) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $9 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($9, __str59);
      __label__ = 8;
      break;
     case 5:
      
      
      var $12 = HEAP[$self_addr] + 8;
      _llvm_memset_p0i8_i32($12, 0, 48, 1, 0);
      var $13 = HEAP[$compresslevel];
      
      var $15 = HEAP[$self_addr] + 8;
      var $16 = _BZ2_bzCompressInit($15, $13, 0, 0);
      HEAP[$bzerror] = $16;
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $19 = HEAP[$bzerror];
      var $20 = _Util_CatchBZ2Error($19);
      __label__ = 8;
      break;
     case 7:
      
      var $22 = HEAP[$self_addr] + 56;
      HEAP[$22] = 1;
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 8:
      HEAP[$0] = -1;
      __label__ = 9;
      break;
     case 9:
      var $23 = HEAP[$0];
      HEAP[$retval] = $23;
      __label__ = 10;
      break;
     case 10:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2Comp_dealloc($self) {
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
      
      var $1 = HEAP[$self_addr] + 8;
      var $2 = _BZ2_bzCompressEnd($1);
      
      
      
      
      
      var $8 = HEAP[HEAP[HEAP[$self_addr] + 4] + 160];
      
      var $10 = HEAP[$self_addr];
      FUNCTION_TABLE[$8]($10);
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2Decomp_decompress($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 100;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 100);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $pdata = __stackBase__ + 16;
      var $data = __stackBase__ + 68;
      var $datasize = __stackBase__ + 72;
      var $bufsize = __stackBase__ + 76;
      var $totalout = __stackBase__ + 80;
      var $ret = __stackBase__ + 88;
      var $bzs = __stackBase__ + 92;
      var $bzerror = __stackBase__ + 96;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$bufsize] = 8192;
      HEAP[$ret] = 0;
      
      var $2 = HEAP[$self_addr] + 8;
      HEAP[$bzs] = $2;
      var $3 = HEAP[$args_addr];
      var $4 = _PyArg_ParseTuple($3, __str73, allocate([ $pdata, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($4 == 0) {
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
      
      var $7 = HEAP[$pdata];
      HEAP[$data] = $7;
      
      var $9 = HEAP[$pdata + 8];
      HEAP[$datasize] = $9;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 56] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $14 = HEAP[_PyExc_EOFError];
      _PyErr_SetString($14, __str74);
      __label__ = 23;
      break;
     case 4:
      var $15 = HEAP[$bufsize];
      var $16 = _PyString_FromStringAndSize(0, $15);
      HEAP[$ret] = $16;
      
      
      if (HEAP[$ret] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $20 = HEAP[$bzs];
      var $21 = HEAP[$data];
      HEAP[$20] = $21;
      var $22 = HEAP[$datasize];
      
      var $24 = HEAP[$bzs] + 4;
      HEAP[$24] = $22;
      
      
      
      var $28 = HEAP[$ret] + 20;
      
      var $30 = HEAP[$bzs] + 16;
      HEAP[$30] = $28;
      var $31 = HEAP[$bufsize];
      
      var $33 = HEAP[$bzs] + 20;
      HEAP[$33] = $31;
      
      
      
      
      var $38 = HEAP[HEAP[$bzs] + 28] * Math.pow(2, 32);
      
      
      
      
      var $43 = $38 + HEAP[HEAP[$bzs] + 24];
      HEAP[$totalout] = $43;
      __label__ = 6;
      break;
     case 6:
      var $44 = HEAP[$bzs];
      var $45 = _BZ2_bzDecompress($44);
      HEAP[$bzerror] = $45;
      
      
      if (HEAP[$bzerror] == 4) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[HEAP[$bzs] + 4] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      var $54 = HEAP[HEAP[$self_addr] + 60];
      
      
      var $57 = HEAP[$54] - 1;
      var $58 = $54;
      HEAP[$58] = $57;
      
      
      
      if (HEAP[$54] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      
      var $68 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 60] + 4] + 24];
      
      
      var $71 = HEAP[HEAP[$self_addr] + 60];
      FUNCTION_TABLE[$68]($71);
      __label__ = 10;
      break;
     case 10:
      
      
      var $74 = HEAP[HEAP[$bzs] + 4];
      
      
      var $77 = HEAP[HEAP[$bzs]];
      var $78 = _PyString_FromStringAndSize($77, $74);
      
      var $80 = HEAP[$self_addr] + 60;
      HEAP[$80] = $78;
      __label__ = 11;
      break;
     case 11:
      
      var $82 = HEAP[$self_addr] + 56;
      HEAP[$82] = 0;
      __label__ = 20;
      break;
     case 12:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $85 = HEAP[$bzerror];
      var $86 = _Util_CatchBZ2Error($85);
      __label__ = 23;
      break;
     case 14:
      
      
      
      
      if (HEAP[HEAP[$bzs] + 4] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      if (HEAP[HEAP[$bzs] + 20] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      var $95 = HEAP[$bufsize];
      var $96 = _Util_NewBufferSize($95);
      HEAP[$bufsize] = $96;
      var $97 = HEAP[$bufsize];
      var $98 = __PyString_Resize($ret, $97);
      
      if ($98 < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $100 = HEAP[$bzs];
      var $101 = _BZ2_bzDecompressEnd($100);
      __label__ = 23;
      break;
     case 18:
      
      
      
      var $105 = HEAP[$ret] + 20;
      
      var $107 = HEAP[$bzs] + 16;
      HEAP[$107] = $105;
      
      
      
      var $111 = HEAP[$ret] + 20;
      
      
      
      
      var $116 = HEAP[HEAP[$bzs] + 28] * Math.pow(2, 32);
      
      
      
      
      
      
      
      
      var $125 = $111 + ($116 + HEAP[HEAP[$bzs] + 24] - HEAP[$totalout] & 4294967295);
      
      var $127 = HEAP[$bzs] + 16;
      HEAP[$127] = $125;
      
      
      
      
      
      
      
      
      
      
      var $138 = HEAP[$bufsize] - (HEAP[HEAP[$bzs] + 16] - (HEAP[$ret] + 20));
      
      var $140 = HEAP[$bzs] + 20;
      HEAP[$140] = $138;
      __label__ = 19;
      break;
     case 19:
      __label__ = 6;
      break;
     case 20:
      
      
      
      
      if (HEAP[HEAP[$bzs] + 20] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      
      var $150 = HEAP[HEAP[$bzs] + 24] - (HEAP[$totalout] & 4294967295);
      var $151 = __PyString_Resize($ret, $150);
      __label__ = 22;
      break;
     case 22:
      _PyBuffer_Release($pdata);
      var $152 = HEAP[$ret];
      HEAP[$0] = $152;
      __label__ = 27;
      break;
     case 23:
      _PyBuffer_Release($pdata);
      
      
      if (HEAP[$ret] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 24:
      var $155 = HEAP[$ret];
      
      
      var $158 = HEAP[$155] - 1;
      var $159 = $155;
      HEAP[$159] = $158;
      
      
      
      if (HEAP[$155] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $167 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $168 = HEAP[$ret];
      FUNCTION_TABLE[$167]($168);
      __label__ = 26;
      break;
     case 26:
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 27:
      var $169 = HEAP[$0];
      HEAP[$retval] = $169;
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
  function _BZ2Decomp_init($self, $args, $kwargs) {
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
      var $kwargs_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $bzerror = __stackBase__ + 20;
      var $_py_tmp = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwargs_addr] = $kwargs;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str76, allocate(1, "i32", ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = _PyString_FromString(__str13);
      
      var $6 = HEAP[$self_addr] + 60;
      HEAP[$6] = $4;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 60] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $13 = HEAP[$self_addr] + 8;
      _llvm_memset_p0i8_i32($13, 0, 48, 1, 0);
      
      var $15 = HEAP[$self_addr] + 8;
      var $16 = _BZ2_bzDecompressInit($15, 0, 0);
      HEAP[$bzerror] = $16;
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $19 = HEAP[$bzerror];
      var $20 = _Util_CatchBZ2Error($19);
      __label__ = 6;
      break;
     case 5:
      
      var $22 = HEAP[$self_addr] + 56;
      HEAP[$22] = 1;
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 6:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 60] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $29 = HEAP[HEAP[$self_addr] + 60];
      HEAP[$_py_tmp] = $29;
      
      var $31 = HEAP[$self_addr] + 60;
      HEAP[$31] = 0;
      
      
      
      var $35 = HEAP[HEAP[$_py_tmp]] - 1;
      
      var $37 = HEAP[$_py_tmp];
      HEAP[$37] = $35;
      
      
      
      
      if (HEAP[HEAP[$_py_tmp]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$_py_tmp] + 4] + 24];
      var $47 = HEAP[$_py_tmp];
      FUNCTION_TABLE[$46]($47);
      __label__ = 9;
      break;
     case 9:
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 10:
      var $48 = HEAP[$0];
      HEAP[$retval] = $48;
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
  function _BZ2Decomp_dealloc($self) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 60] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[HEAP[$self_addr] + 60];
      
      
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
      
      
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 60] + 4] + 24];
      
      
      var $23 = HEAP[HEAP[$self_addr] + 60];
      FUNCTION_TABLE[$20]($23);
      __label__ = 3;
      break;
     case 3:
      
      var $25 = HEAP[$self_addr] + 8;
      var $26 = _BZ2_bzDecompressEnd($25);
      
      
      
      
      
      var $32 = HEAP[HEAP[HEAP[$self_addr] + 4] + 160];
      
      var $34 = HEAP[$self_addr];
      FUNCTION_TABLE[$32]($34);
      __label__ = 4;
      break;
     case 4:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _bz2_compress($self, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 148;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 148);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kwargs_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $compresslevel = __stackBase__ + 20;
      var $pdata = __stackBase__ + 24;
      var $data = __stackBase__ + 76;
      var $datasize = __stackBase__ + 80;
      var $bufsize = __stackBase__ + 84;
      var $ret = __stackBase__ + 88;
      var $_bzs = __stackBase__ + 92;
      var $bzs = __stackBase__ + 140;
      var $bzerror = __stackBase__ + 144;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwargs_addr] = $kwargs;
      HEAP[$compresslevel] = 9;
      HEAP[$ret] = 0;
      HEAP[$bzs] = $_bzs;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwargs_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str78, _kwlist_10095, allocate([ $pdata, 0, 0, 0, $compresslevel, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 26;
      break;
     case 2:
      
      var $6 = HEAP[$pdata];
      HEAP[$data] = $6;
      
      var $8 = HEAP[$pdata + 8];
      HEAP[$datasize] = $8;
      
      
      if (HEAP[$compresslevel] <= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$compresslevel] > 9) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $13 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($13, __str59);
      _PyBuffer_Release($pdata);
      HEAP[$0] = 0;
      __label__ = 26;
      break;
     case 5:
      
      
      
      
      
      var $19 = (HEAP[$datasize] / 100 | 0) + 1 + HEAP[$datasize] + 600;
      HEAP[$bufsize] = $19;
      var $20 = HEAP[$bufsize];
      var $21 = _PyString_FromStringAndSize(0, $20);
      HEAP[$ret] = $21;
      
      
      if (HEAP[$ret] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      _PyBuffer_Release($pdata);
      HEAP[$0] = 0;
      __label__ = 26;
      break;
     case 7:
      
      var $25 = HEAP[$bzs];
      _llvm_memset_p0i8_i32($25, 0, 48, 1, 0);
      
      var $27 = HEAP[$bzs];
      var $28 = HEAP[$data];
      HEAP[$27] = $28;
      var $29 = HEAP[$datasize];
      
      var $31 = HEAP[$bzs] + 4;
      HEAP[$31] = $29;
      
      
      
      var $35 = HEAP[$ret] + 20;
      
      var $37 = HEAP[$bzs] + 16;
      HEAP[$37] = $35;
      var $38 = HEAP[$bufsize];
      
      var $40 = HEAP[$bzs] + 20;
      HEAP[$40] = $38;
      var $41 = HEAP[$compresslevel];
      var $42 = HEAP[$bzs];
      var $43 = _BZ2_bzCompressInit($42, $41, 0, 0);
      HEAP[$bzerror] = $43;
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      var $46 = HEAP[$bzerror];
      var $47 = _Util_CatchBZ2Error($46);
      _PyBuffer_Release($pdata);
      var $48 = HEAP[$ret];
      
      
      var $51 = HEAP[$48] - 1;
      var $52 = $48;
      HEAP[$52] = $51;
      
      
      
      if (HEAP[$48] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $61 = HEAP[$ret];
      FUNCTION_TABLE[$60]($61);
      __label__ = 10;
      break;
     case 10:
      HEAP[$0] = 0;
      __label__ = 26;
      break;
     case 11:
      var $62 = HEAP[$bzs];
      var $63 = _BZ2_bzCompress($62, 2);
      HEAP[$bzerror] = $63;
      
      
      if (HEAP[$bzerror] == 4) {
        __label__ = 23;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if (HEAP[$bzerror] != 3) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      var $68 = HEAP[$bzs];
      var $69 = _BZ2_bzCompressEnd($68);
      var $70 = HEAP[$bzerror];
      var $71 = _Util_CatchBZ2Error($70);
      _PyBuffer_Release($pdata);
      var $72 = HEAP[$ret];
      
      
      var $75 = HEAP[$72] - 1;
      var $76 = $72;
      HEAP[$76] = $75;
      
      
      
      if (HEAP[$72] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $84 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $85 = HEAP[$ret];
      FUNCTION_TABLE[$84]($85);
      __label__ = 15;
      break;
     case 15:
      HEAP[$0] = 0;
      __label__ = 26;
      break;
     case 16:
      
      
      
      
      if (HEAP[HEAP[$bzs] + 20] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 17:
      var $90 = HEAP[$bufsize];
      var $91 = _Util_NewBufferSize($90);
      HEAP[$bufsize] = $91;
      var $92 = HEAP[$bufsize];
      var $93 = __PyString_Resize($ret, $92);
      
      if ($93 < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      var $95 = HEAP[$bzs];
      var $96 = _BZ2_bzCompressEnd($95);
      _PyBuffer_Release($pdata);
      var $97 = HEAP[$ret];
      
      
      var $100 = HEAP[$97] - 1;
      var $101 = $97;
      HEAP[$101] = $100;
      
      
      
      if (HEAP[$97] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $109 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $110 = HEAP[$ret];
      FUNCTION_TABLE[$109]($110);
      __label__ = 20;
      break;
     case 20:
      HEAP[$0] = 0;
      __label__ = 26;
      break;
     case 21:
      
      
      
      var $114 = HEAP[$ret] + 20;
      
      
      
      
      var $119 = HEAP[HEAP[$bzs] + 28] * Math.pow(2, 32);
      
      
      
      
      
      
      var $126 = $114 + ($119 + HEAP[HEAP[$bzs] + 24] & 4294967295);
      
      var $128 = HEAP[$bzs] + 16;
      HEAP[$128] = $126;
      
      
      
      
      
      
      
      
      
      
      var $139 = HEAP[$bufsize] - (HEAP[HEAP[$bzs] + 16] - (HEAP[$ret] + 20));
      
      var $141 = HEAP[$bzs] + 20;
      HEAP[$141] = $139;
      __label__ = 22;
      break;
     case 22:
      __label__ = 11;
      break;
     case 23:
      
      
      
      
      if (HEAP[HEAP[$bzs] + 20] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      var $148 = HEAP[HEAP[$bzs] + 24];
      var $149 = __PyString_Resize($ret, $148);
      __label__ = 25;
      break;
     case 25:
      var $150 = HEAP[$bzs];
      var $151 = _BZ2_bzCompressEnd($150);
      _PyBuffer_Release($pdata);
      var $152 = HEAP[$ret];
      HEAP[$0] = $152;
      __label__ = 26;
      break;
     case 26:
      var $153 = HEAP[$0];
      HEAP[$retval] = $153;
      __label__ = 27;
      break;
     case 27:
      var $retval26 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval26;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _bz2_decompress($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 140;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 140);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $pdata = __stackBase__ + 16;
      var $data = __stackBase__ + 68;
      var $datasize = __stackBase__ + 72;
      var $bufsize = __stackBase__ + 76;
      var $ret = __stackBase__ + 80;
      var $_bzs = __stackBase__ + 84;
      var $bzs = __stackBase__ + 132;
      var $bzerror = __stackBase__ + 136;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$bufsize] = 8192;
      HEAP[$bzs] = $_bzs;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str73, allocate([ $pdata, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$pdata];
      HEAP[$data] = $5;
      
      var $7 = HEAP[$pdata + 8];
      HEAP[$datasize] = $7;
      
      
      if (HEAP[$datasize] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyBuffer_Release($pdata);
      var $10 = _PyString_FromString(__str13);
      HEAP[$0] = $10;
      __label__ = 29;
      break;
     case 4:
      var $11 = HEAP[$bufsize];
      var $12 = _PyString_FromStringAndSize(0, $11);
      HEAP[$ret] = $12;
      
      
      if (HEAP[$ret] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($pdata);
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 6:
      
      var $16 = HEAP[$bzs];
      _llvm_memset_p0i8_i32($16, 0, 48, 1, 0);
      
      var $18 = HEAP[$bzs];
      var $19 = HEAP[$data];
      HEAP[$18] = $19;
      var $20 = HEAP[$datasize];
      
      var $22 = HEAP[$bzs] + 4;
      HEAP[$22] = $20;
      
      
      
      var $26 = HEAP[$ret] + 20;
      
      var $28 = HEAP[$bzs] + 16;
      HEAP[$28] = $26;
      var $29 = HEAP[$bufsize];
      
      var $31 = HEAP[$bzs] + 20;
      HEAP[$31] = $29;
      var $32 = HEAP[$bzs];
      var $33 = _BZ2_bzDecompressInit($32, 0, 0);
      HEAP[$bzerror] = $33;
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      var $36 = HEAP[$bzerror];
      var $37 = _Util_CatchBZ2Error($36);
      var $38 = HEAP[$ret];
      
      
      var $41 = HEAP[$38] - 1;
      var $42 = $38;
      HEAP[$42] = $41;
      
      
      
      if (HEAP[$38] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $50 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $51 = HEAP[$ret];
      FUNCTION_TABLE[$50]($51);
      __label__ = 9;
      break;
     case 9:
      _PyBuffer_Release($pdata);
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 10:
      var $52 = HEAP[$bzs];
      var $53 = _BZ2_bzDecompress($52);
      HEAP[$bzerror] = $53;
      
      
      if (HEAP[$bzerror] == 4) {
        __label__ = 26;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      var $58 = HEAP[$bzs];
      var $59 = _BZ2_bzDecompressEnd($58);
      var $60 = HEAP[$bzerror];
      var $61 = _Util_CatchBZ2Error($60);
      _PyBuffer_Release($pdata);
      var $62 = HEAP[$ret];
      
      
      var $65 = HEAP[$62] - 1;
      var $66 = $62;
      HEAP[$66] = $65;
      
      
      
      if (HEAP[$62] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $74 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $75 = HEAP[$ret];
      FUNCTION_TABLE[$74]($75);
      __label__ = 14;
      break;
     case 14:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 15:
      
      
      
      
      if (HEAP[HEAP[$bzs] + 4] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      var $80 = HEAP[$bzs];
      var $81 = _BZ2_bzDecompressEnd($80);
      var $82 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($82, __str80);
      _PyBuffer_Release($pdata);
      var $83 = HEAP[$ret];
      
      
      var $86 = HEAP[$83] - 1;
      var $87 = $83;
      HEAP[$87] = $86;
      
      
      
      if (HEAP[$83] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $95 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $96 = HEAP[$ret];
      FUNCTION_TABLE[$95]($96);
      __label__ = 18;
      break;
     case 18:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 19:
      
      
      
      
      if (HEAP[HEAP[$bzs] + 20] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 20:
      var $101 = HEAP[$bufsize];
      var $102 = _Util_NewBufferSize($101);
      HEAP[$bufsize] = $102;
      var $103 = HEAP[$bufsize];
      var $104 = __PyString_Resize($ret, $103);
      
      if ($104 < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 21:
      var $106 = HEAP[$bzs];
      var $107 = _BZ2_bzDecompressEnd($106);
      _PyBuffer_Release($pdata);
      var $108 = HEAP[$ret];
      
      
      var $111 = HEAP[$108] - 1;
      var $112 = $108;
      HEAP[$112] = $111;
      
      
      
      if (HEAP[$108] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $120 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $121 = HEAP[$ret];
      FUNCTION_TABLE[$120]($121);
      __label__ = 23;
      break;
     case 23:
      HEAP[$0] = 0;
      __label__ = 29;
      break;
     case 24:
      
      
      
      var $125 = HEAP[$ret] + 20;
      
      
      
      
      var $130 = HEAP[HEAP[$bzs] + 28] * Math.pow(2, 32);
      
      
      
      
      
      
      var $137 = $125 + ($130 + HEAP[HEAP[$bzs] + 24] & 4294967295);
      
      var $139 = HEAP[$bzs] + 16;
      HEAP[$139] = $137;
      
      
      
      
      
      
      
      
      
      
      var $150 = HEAP[$bufsize] - (HEAP[HEAP[$bzs] + 16] - (HEAP[$ret] + 20));
      
      var $152 = HEAP[$bzs] + 20;
      HEAP[$152] = $150;
      __label__ = 25;
      break;
     case 25:
      __label__ = 10;
      break;
     case 26:
      
      
      
      
      if (HEAP[HEAP[$bzs] + 20] != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      var $159 = HEAP[HEAP[$bzs] + 24];
      var $160 = __PyString_Resize($ret, $159);
      __label__ = 28;
      break;
     case 28:
      var $161 = HEAP[$bzs];
      var $162 = _BZ2_bzDecompressEnd($161);
      _PyBuffer_Release($pdata);
      var $163 = HEAP[$ret];
      HEAP[$0] = $163;
      __label__ = 29;
      break;
     case 29:
      var $164 = HEAP[$0];
      HEAP[$retval] = $164;
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
  function _initbz2() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      
      var $0 = _PyType_Ready(_BZ2File_Type);
      
      if ($0 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $2 = _PyType_Ready(_BZ2Comp_Type);
      
      if ($2 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $4 = _PyType_Ready(_BZ2Decomp_Type);
      
      if ($4 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $6 = _Py_InitModule4(__str81, _bz2_methods, _bz2__doc__, 0, 1013);
      HEAP[$m] = $6;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $9 = _PyString_FromString(___author__);
      var $10 = HEAP[$m];
      var $11 = _PyModule_AddObject($10, __str82, $9);
      
      
      var $14 = HEAP[_BZ2File_Type] + 1;
      
      HEAP[_BZ2File_Type] = $14;
      var $16 = HEAP[$m];
      var $17 = _PyModule_AddObject($16, __str83, _BZ2File_Type);
      
      
      var $20 = HEAP[_BZ2Comp_Type] + 1;
      
      HEAP[_BZ2Comp_Type] = $20;
      var $22 = HEAP[$m];
      var $23 = _PyModule_AddObject($22, __str84, _BZ2Comp_Type);
      
      
      var $26 = HEAP[_BZ2Decomp_Type] + 1;
      
      HEAP[_BZ2Decomp_Type] = $26;
      var $28 = HEAP[$m];
      var $29 = _PyModule_AddObject($28, __str85, _BZ2Decomp_Type);
      __label__ = 5;
      break;
     case 5:
      __label__ = 6;
      break;
     case 6:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initbz2"] = _initbz2;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _BZ2File_read, 0, _BZ2File_readline, 0, _BZ2File_readlines, 0, _BZ2File_getiter, 0, _BZ2File_write, 0, _BZ2File_writelines, 0, _BZ2File_seek, 0, _BZ2File_tell, 0, _BZ2File_close, 0, _BZ2File_enter, 0, _BZ2File_exit, 0, _BZ2File_get_closed, 0, _BZ2File_get_newlines, 0, _BZ2File_get_mode, 0, _BZ2File_get_name, 0, _BZ2File_dealloc, 0, _PyObject_GenericGetAttr, 0, _PyObject_GenericSetAttr, 0, _BZ2File_iternext, 0, _BZ2File_init, 0, _PyType_GenericAlloc, 0, _PyType_GenericNew, 0, _PyObject_Free, 0, _BZ2Comp_compress, 0, _BZ2Comp_flush, 0, _BZ2Comp_dealloc, 0, _BZ2Comp_init, 0, _BZ2Decomp_decompress, 0, _BZ2Decomp_dealloc, 0, _BZ2Decomp_init, 0, _bz2_compress, 0, _bz2_decompress, 0 ]);
  function run(args) {
    ___author__ = allocate([ 84, 104, 101, 32, 98, 122, 50, 32, 112, 121, 116, 104, 111, 110, 32, 109, 111, 100, 117, 108, 101, 32, 119, 97, 115, 32, 119, 114, 105, 116, 116, 101, 110, 32, 98, 121, 58, 10, 10, 32, 32, 32, 32, 71, 117, 115, 116, 97, 118, 111, 32, 78, 105, 101, 109, 101, 121, 101, 114, 32, 60, 110, 105, 101, 109, 101, 121, 101, 114, 64, 99, 111, 110, 101, 99, 116, 105, 118, 97, 46, 99, 111, 109, 62, 10, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 77, 105, 120, 105, 110, 103, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 32, 97, 110, 100, 32, 114, 101, 97, 100, 32, 109, 101, 116, 104, 111, 100, 115, 32, 119, 111, 117, 108, 100, 32, 108, 111, 115, 101, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 116, 104, 101, 32, 98, 122, 50, 32, 108, 105, 98, 114, 97, 114, 121, 32, 119, 97, 115, 32, 110, 111, 116, 32, 99, 111, 109, 112, 105, 108, 101, 100, 32, 99, 111, 114, 114, 101, 99, 116, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 116, 104, 101, 32, 98, 122, 50, 32, 108, 105, 98, 114, 97, 114, 121, 32, 104, 97, 115, 32, 114, 101, 99, 101, 105, 118, 101, 100, 32, 119, 114, 111, 110, 103, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 100, 97, 116, 97, 32, 115, 116, 114, 101, 97, 109, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 117, 110, 107, 110, 111, 119, 110, 32, 73, 79, 32, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 102, 105, 108, 101, 32, 101, 110, 100, 101, 100, 32, 98, 101, 102, 111, 114, 101, 32, 116, 104, 101, 32, 108, 111, 103, 105, 99, 97, 108, 32, 101, 110, 100, 45, 111, 102, 45, 115, 116, 114, 101, 97, 109, 32, 119, 97, 115, 32, 100, 101, 116, 101, 99, 116, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 119, 114, 111, 110, 103, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 102, 32, 98, 122, 50, 32, 108, 105, 98, 114, 97, 114, 121, 32, 99, 111, 109, 109, 97, 110, 100, 115, 32, 117, 115, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 108, 105, 110, 101, 32, 105, 115, 32, 108, 111, 110, 103, 101, 114, 32, 116, 104, 97, 110, 32, 97, 32, 80, 121, 116, 104, 111, 110, 32, 115, 116, 114, 105, 110, 103, 32, 99, 97, 110, 32, 104, 111, 108, 100, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 98, 117, 102, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 98, 122, 50, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8623 = allocate([ 85, 116, 105, 108, 95, 85, 110, 105, 118, 78, 101, 119, 108, 105, 110, 101, 82, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 115, 116, 114, 101, 97, 109, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 110, 114, 101, 97, 100, 32, 60, 61, 32, 110, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_read__doc__ = allocate([ 114, 101, 97, 100, 40, 91, 115, 105, 122, 101, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 97, 100, 32, 97, 116, 32, 109, 111, 115, 116, 32, 115, 105, 122, 101, 32, 117, 110, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 98, 121, 116, 101, 115, 44, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 46, 32, 73, 102, 32, 116, 104, 101, 32, 115, 105, 122, 101, 10, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 32, 110, 101, 103, 97, 116, 105, 118, 101, 32, 111, 114, 32, 111, 109, 105, 116, 116, 101, 100, 44, 32, 114, 101, 97, 100, 32, 117, 110, 116, 105, 108, 32, 69, 79, 70, 32, 105, 115, 32, 114, 101, 97, 99, 104, 101, 100, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 124, 108, 58, 114, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate(1, "i8", ALLOC_NORMAL);
    __str14 = allocate([ 73, 47, 79, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 32, 111, 110, 32, 99, 108, 111, 115, 101, 100, 32, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 102, 105, 108, 101, 32, 105, 115, 32, 110, 111, 116, 32, 114, 101, 97, 100, 121, 32, 102, 111, 114, 32, 114, 101, 97, 100, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 114, 101, 113, 117, 101, 115, 116, 101, 100, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 98, 121, 116, 101, 115, 32, 105, 115, 32, 109, 111, 114, 101, 32, 116, 104, 97, 110, 32, 97, 32, 80, 121, 116, 104, 111, 110, 32, 115, 116, 114, 105, 110, 103, 32, 99, 97, 110, 32, 104, 111, 108, 100, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_readline__doc__ = allocate([ 114, 101, 97, 100, 108, 105, 110, 101, 40, 91, 115, 105, 122, 101, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 110, 101, 120, 116, 32, 108, 105, 110, 101, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 102, 105, 108, 101, 44, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 44, 32, 114, 101, 116, 97, 105, 110, 105, 110, 103, 32, 110, 101, 119, 108, 105, 110, 101, 46, 10, 65, 32, 110, 111, 110, 45, 110, 101, 103, 97, 116, 105, 118, 101, 32, 115, 105, 122, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 119, 105, 108, 108, 32, 108, 105, 109, 105, 116, 32, 116, 104, 101, 32, 109, 97, 120, 105, 109, 117, 109, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 98, 121, 116, 101, 115, 32, 116, 111, 10, 114, 101, 116, 117, 114, 110, 32, 40, 97, 110, 32, 105, 110, 99, 111, 109, 112, 108, 101, 116, 101, 32, 108, 105, 110, 101, 32, 109, 97, 121, 32, 98, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 116, 104, 101, 110, 41, 46, 32, 82, 101, 116, 117, 114, 110, 32, 97, 110, 32, 101, 109, 112, 116, 121, 10, 115, 116, 114, 105, 110, 103, 32, 97, 116, 32, 69, 79, 70, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 124, 105, 58, 114, 101, 97, 100, 108, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_readlines__doc__ = allocate([ 114, 101, 97, 100, 108, 105, 110, 101, 115, 40, 91, 115, 105, 122, 101, 93, 41, 32, 45, 62, 32, 108, 105, 115, 116, 10, 10, 67, 97, 108, 108, 32, 114, 101, 97, 100, 108, 105, 110, 101, 40, 41, 32, 114, 101, 112, 101, 97, 116, 101, 100, 108, 121, 32, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 32, 97, 32, 108, 105, 115, 116, 32, 111, 102, 32, 108, 105, 110, 101, 115, 32, 114, 101, 97, 100, 46, 10, 84, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 115, 105, 122, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 44, 32, 105, 102, 32, 103, 105, 118, 101, 110, 44, 32, 105, 115, 32, 97, 110, 32, 97, 112, 112, 114, 111, 120, 105, 109, 97, 116, 101, 32, 98, 111, 117, 110, 100, 32, 111, 110, 32, 116, 104, 101, 10, 116, 111, 116, 97, 108, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 98, 121, 116, 101, 115, 32, 105, 110, 32, 116, 104, 101, 32, 108, 105, 110, 101, 115, 32, 114, 101, 116, 117, 114, 110, 101, 100, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 124, 108, 58, 114, 101, 97, 100, 108, 105, 110, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_xreadlines__doc__ = allocate([ 120, 114, 101, 97, 100, 108, 105, 110, 101, 115, 40, 41, 32, 45, 62, 32, 115, 101, 108, 102, 10, 10, 70, 111, 114, 32, 98, 97, 99, 107, 119, 97, 114, 100, 32, 99, 111, 109, 112, 97, 116, 105, 98, 105, 108, 105, 116, 121, 46, 32, 66, 90, 50, 70, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 115, 32, 110, 111, 119, 32, 105, 110, 99, 108, 117, 100, 101, 32, 116, 104, 101, 32, 112, 101, 114, 102, 111, 114, 109, 97, 110, 99, 101, 10, 111, 112, 116, 105, 109, 105, 122, 97, 116, 105, 111, 110, 115, 32, 112, 114, 101, 118, 105, 111, 117, 115, 108, 121, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 101, 100, 32, 105, 110, 32, 116, 104, 101, 32, 120, 114, 101, 97, 100, 108, 105, 110, 101, 115, 32, 109, 111, 100, 117, 108, 101, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_write__doc__ = allocate([ 119, 114, 105, 116, 101, 40, 100, 97, 116, 97, 41, 32, 45, 62, 32, 78, 111, 110, 101, 10, 10, 87, 114, 105, 116, 101, 32, 116, 104, 101, 32, 39, 100, 97, 116, 97, 39, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 102, 105, 108, 101, 46, 32, 78, 111, 116, 101, 32, 116, 104, 97, 116, 32, 100, 117, 101, 32, 116, 111, 32, 98, 117, 102, 102, 101, 114, 105, 110, 103, 44, 32, 99, 108, 111, 115, 101, 40, 41, 32, 109, 97, 121, 10, 98, 101, 32, 110, 101, 101, 100, 101, 100, 32, 98, 101, 102, 111, 114, 101, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 111, 110, 32, 100, 105, 115, 107, 32, 114, 101, 102, 108, 101, 99, 116, 115, 32, 116, 104, 101, 32, 100, 97, 116, 97, 32, 119, 114, 105, 116, 116, 101, 110, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 115, 42, 58, 119, 114, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 102, 105, 108, 101, 32, 105, 115, 32, 110, 111, 116, 32, 114, 101, 97, 100, 121, 32, 102, 111, 114, 32, 119, 114, 105, 116, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_writelines__doc__ = allocate([ 119, 114, 105, 116, 101, 108, 105, 110, 101, 115, 40, 115, 101, 113, 117, 101, 110, 99, 101, 95, 111, 102, 95, 115, 116, 114, 105, 110, 103, 115, 41, 32, 45, 62, 32, 78, 111, 110, 101, 10, 10, 87, 114, 105, 116, 101, 32, 116, 104, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 102, 32, 115, 116, 114, 105, 110, 103, 115, 32, 116, 111, 32, 116, 104, 101, 32, 102, 105, 108, 101, 46, 32, 78, 111, 116, 101, 32, 116, 104, 97, 116, 32, 110, 101, 119, 108, 105, 110, 101, 115, 32, 97, 114, 101, 32, 110, 111, 116, 10, 97, 100, 100, 101, 100, 46, 32, 84, 104, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 99, 97, 110, 32, 98, 101, 32, 97, 110, 121, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 111, 98, 106, 101, 99, 116, 32, 112, 114, 111, 100, 117, 99, 105, 110, 103, 32, 115, 116, 114, 105, 110, 103, 115, 46, 32, 84, 104, 105, 115, 32, 105, 115, 10, 101, 113, 117, 105, 118, 97, 108, 101, 110, 116, 32, 116, 111, 32, 99, 97, 108, 108, 105, 110, 103, 32, 119, 114, 105, 116, 101, 40, 41, 32, 102, 111, 114, 32, 101, 97, 99, 104, 32, 115, 116, 114, 105, 110, 103, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 119, 114, 105, 116, 101, 108, 105, 110, 101, 115, 40, 41, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 110, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 119, 114, 105, 116, 101, 108, 105, 110, 101, 115, 40, 41, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 102, 32, 115, 116, 114, 105, 110, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_seek__doc__ = allocate([ 115, 101, 101, 107, 40, 111, 102, 102, 115, 101, 116, 32, 91, 44, 32, 119, 104, 101, 110, 99, 101, 93, 41, 32, 45, 62, 32, 78, 111, 110, 101, 10, 10, 77, 111, 118, 101, 32, 116, 111, 32, 110, 101, 119, 32, 102, 105, 108, 101, 32, 112, 111, 115, 105, 116, 105, 111, 110, 46, 32, 65, 114, 103, 117, 109, 101, 110, 116, 32, 111, 102, 102, 115, 101, 116, 32, 105, 115, 32, 97, 32, 98, 121, 116, 101, 32, 99, 111, 117, 110, 116, 46, 32, 79, 112, 116, 105, 111, 110, 97, 108, 10, 97, 114, 103, 117, 109, 101, 110, 116, 32, 119, 104, 101, 110, 99, 101, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 48, 32, 40, 111, 102, 102, 115, 101, 116, 32, 102, 114, 111, 109, 32, 115, 116, 97, 114, 116, 32, 111, 102, 32, 102, 105, 108, 101, 44, 32, 111, 102, 102, 115, 101, 116, 10, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 62, 61, 32, 48, 41, 59, 32, 111, 116, 104, 101, 114, 32, 118, 97, 108, 117, 101, 115, 32, 97, 114, 101, 32, 49, 32, 40, 109, 111, 118, 101, 32, 114, 101, 108, 97, 116, 105, 118, 101, 32, 116, 111, 32, 99, 117, 114, 114, 101, 110, 116, 32, 112, 111, 115, 105, 116, 105, 111, 110, 44, 10, 112, 111, 115, 105, 116, 105, 118, 101, 32, 111, 114, 32, 110, 101, 103, 97, 116, 105, 118, 101, 41, 44, 32, 97, 110, 100, 32, 50, 32, 40, 109, 111, 118, 101, 32, 114, 101, 108, 97, 116, 105, 118, 101, 32, 116, 111, 32, 101, 110, 100, 32, 111, 102, 32, 102, 105, 108, 101, 44, 32, 117, 115, 117, 97, 108, 108, 121, 10, 110, 101, 103, 97, 116, 105, 118, 101, 44, 32, 97, 108, 116, 104, 111, 117, 103, 104, 32, 109, 97, 110, 121, 32, 112, 108, 97, 116, 102, 111, 114, 109, 115, 32, 97, 108, 108, 111, 119, 32, 115, 101, 101, 107, 105, 110, 103, 32, 98, 101, 121, 111, 110, 100, 32, 116, 104, 101, 32, 101, 110, 100, 32, 111, 102, 32, 97, 32, 102, 105, 108, 101, 41, 46, 10, 10, 78, 111, 116, 101, 32, 116, 104, 97, 116, 32, 115, 101, 101, 107, 105, 110, 103, 32, 111, 102, 32, 98, 122, 50, 32, 102, 105, 108, 101, 115, 32, 105, 115, 32, 101, 109, 117, 108, 97, 116, 101, 100, 44, 32, 97, 110, 100, 32, 100, 101, 112, 101, 110, 100, 105, 110, 103, 32, 111, 110, 32, 116, 104, 101, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 10, 116, 104, 101, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 32, 109, 97, 121, 32, 98, 101, 32, 101, 120, 116, 114, 101, 109, 101, 108, 121, 32, 115, 108, 111, 119, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 79, 124, 105, 58, 115, 101, 101, 107, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 115, 101, 101, 107, 32, 119, 111, 114, 107, 115, 32, 111, 110, 108, 121, 32, 119, 104, 105, 108, 101, 32, 114, 101, 97, 100, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 115, 101, 108, 102, 45, 62, 109, 111, 100, 101, 32, 33, 61, 32, 50, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9265 = allocate([ 66, 90, 50, 70, 105, 108, 101, 95, 115, 101, 101, 107, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 115, 101, 101, 107, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 40, 105, 41, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_tell__doc__ = allocate([ 116, 101, 108, 108, 40, 41, 32, 45, 62, 32, 105, 110, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 102, 105, 108, 101, 32, 112, 111, 115, 105, 116, 105, 111, 110, 44, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 32, 40, 109, 97, 121, 32, 98, 101, 32, 97, 32, 108, 111, 110, 103, 32, 105, 110, 116, 101, 103, 101, 114, 41, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_close__doc__ = allocate([ 99, 108, 111, 115, 101, 40, 41, 32, 45, 62, 32, 78, 111, 110, 101, 32, 111, 114, 32, 40, 112, 101, 114, 104, 97, 112, 115, 41, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 10, 10, 67, 108, 111, 115, 101, 32, 116, 104, 101, 32, 102, 105, 108, 101, 46, 32, 83, 101, 116, 115, 32, 100, 97, 116, 97, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 32, 46, 99, 108, 111, 115, 101, 100, 32, 116, 111, 32, 116, 114, 117, 101, 46, 32, 65, 32, 99, 108, 111, 115, 101, 100, 32, 102, 105, 108, 101, 10, 99, 97, 110, 110, 111, 116, 32, 98, 101, 32, 117, 115, 101, 100, 32, 102, 111, 114, 32, 102, 117, 114, 116, 104, 101, 114, 32, 73, 47, 79, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 115, 46, 32, 99, 108, 111, 115, 101, 40, 41, 32, 109, 97, 121, 32, 98, 101, 32, 99, 97, 108, 108, 101, 100, 32, 109, 111, 114, 101, 10, 116, 104, 97, 110, 32, 111, 110, 99, 101, 32, 119, 105, 116, 104, 111, 117, 116, 32, 101, 114, 114, 111, 114, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 99, 108, 111, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_enter_doc = allocate([ 95, 95, 101, 110, 116, 101, 114, 95, 95, 40, 41, 32, 45, 62, 32, 115, 101, 108, 102, 46, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_exit_doc = allocate([ 95, 95, 101, 120, 105, 116, 95, 95, 40, 42, 101, 120, 99, 105, 110, 102, 111, 41, 32, 45, 62, 32, 78, 111, 110, 101, 46, 32, 32, 67, 108, 111, 115, 101, 115, 32, 116, 104, 101, 32, 102, 105, 108, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 114, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 114, 101, 97, 100, 108, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 114, 101, 97, 100, 108, 105, 110, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 120, 114, 101, 97, 100, 108, 105, 110, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 119, 114, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 119, 114, 105, 116, 101, 108, 105, 110, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 116, 101, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 95, 95, 101, 110, 116, 101, 114, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 95, 95, 101, 120, 105, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str38 = allocate([ 13, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 10, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 40, 115, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 13, 10, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 40, 115, 115, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 85, 110, 107, 110, 111, 119, 110, 32, 110, 101, 119, 108, 105, 110, 101, 115, 32, 118, 97, 108, 117, 101, 32, 48, 120, 37, 120, 10, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 109, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 99, 108, 111, 115, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 84, 114, 117, 101, 32, 105, 102, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 105, 115, 32, 99, 108, 111, 115, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 110, 101, 119, 108, 105, 110, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 101, 110, 100, 45, 111, 102, 45, 108, 105, 110, 101, 32, 99, 111, 110, 118, 101, 110, 116, 105, 111, 110, 32, 117, 115, 101, 100, 32, 105, 110, 32, 116, 104, 105, 115, 32, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 102, 105, 108, 101, 32, 109, 111, 100, 101, 32, 40, 39, 114, 39, 44, 32, 39, 119, 39, 44, 32, 111, 114, 32, 39, 85, 39, 41, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 102, 105, 108, 101, 32, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_getset = allocate(100, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str52 = allocate([ 115, 111, 102, 116, 115, 112, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 102, 108, 97, 103, 32, 105, 110, 100, 105, 99, 97, 116, 105, 110, 103, 32, 116, 104, 97, 116, 32, 97, 32, 115, 112, 97, 99, 101, 32, 110, 101, 101, 100, 115, 32, 116, 111, 32, 98, 101, 32, 112, 114, 105, 110, 116, 101, 100, 59, 32, 117, 115, 101, 100, 32, 98, 121, 32, 112, 114, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_members = allocate([ 0, 0, 0, 0, 1, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str54 = allocate([ 114, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 79, 124, 115, 105, 105, 58, 66, 90, 50, 70, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9533 = allocate(20, "i8*", ALLOC_NORMAL);
    __str56 = allocate([ 102, 105, 108, 101, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 98, 117, 102, 102, 101, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 108, 101, 118, 101, 108, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 108, 101, 118, 101, 108, 32, 109, 117, 115, 116, 32, 98, 101, 32, 98, 101, 116, 119, 101, 101, 110, 32, 49, 32, 97, 110, 100, 32, 57, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 109, 111, 100, 101, 32, 99, 104, 97, 114, 32, 37, 99, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 114, 98, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 119, 98, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 40, 79, 115, 105, 41, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File__doc__ = allocate([ 66, 90, 50, 70, 105, 108, 101, 40, 110, 97, 109, 101, 32, 91, 44, 32, 109, 111, 100, 101, 61, 39, 114, 39, 44, 32, 98, 117, 102, 102, 101, 114, 105, 110, 103, 61, 48, 44, 32, 99, 111, 109, 112, 114, 101, 115, 115, 108, 101, 118, 101, 108, 61, 57, 93, 41, 32, 45, 62, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 10, 10, 79, 112, 101, 110, 32, 97, 32, 98, 122, 50, 32, 102, 105, 108, 101, 46, 32, 84, 104, 101, 32, 109, 111, 100, 101, 32, 99, 97, 110, 32, 98, 101, 32, 39, 114, 39, 32, 111, 114, 32, 39, 119, 39, 44, 32, 102, 111, 114, 32, 114, 101, 97, 100, 105, 110, 103, 32, 40, 100, 101, 102, 97, 117, 108, 116, 41, 32, 111, 114, 10, 119, 114, 105, 116, 105, 110, 103, 46, 32, 87, 104, 101, 110, 32, 111, 112, 101, 110, 101, 100, 32, 102, 111, 114, 32, 119, 114, 105, 116, 105, 110, 103, 44, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 119, 105, 108, 108, 32, 98, 101, 32, 99, 114, 101, 97, 116, 101, 100, 32, 105, 102, 32, 105, 116, 32, 100, 111, 101, 115, 110, 39, 116, 10, 101, 120, 105, 115, 116, 44, 32, 97, 110, 100, 32, 116, 114, 117, 110, 99, 97, 116, 101, 100, 32, 111, 116, 104, 101, 114, 119, 105, 115, 101, 46, 32, 73, 102, 32, 116, 104, 101, 32, 98, 117, 102, 102, 101, 114, 105, 110, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 32, 103, 105, 118, 101, 110, 44, 32, 48, 32, 109, 101, 97, 110, 115, 10, 117, 110, 98, 117, 102, 102, 101, 114, 101, 100, 44, 32, 97, 110, 100, 32, 108, 97, 114, 103, 101, 114, 32, 110, 117, 109, 98, 101, 114, 115, 32, 115, 112, 101, 99, 105, 102, 121, 32, 116, 104, 101, 32, 98, 117, 102, 102, 101, 114, 32, 115, 105, 122, 101, 46, 32, 73, 102, 32, 99, 111, 109, 112, 114, 101, 115, 115, 108, 101, 118, 101, 108, 10, 105, 115, 32, 103, 105, 118, 101, 110, 44, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 110, 117, 109, 98, 101, 114, 32, 98, 101, 116, 119, 101, 101, 110, 32, 49, 32, 97, 110, 100, 32, 57, 46, 10, 10, 65, 100, 100, 32, 97, 32, 39, 85, 39, 32, 116, 111, 32, 109, 111, 100, 101, 32, 116, 111, 32, 111, 112, 101, 110, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 102, 111, 114, 32, 105, 110, 112, 117, 116, 32, 119, 105, 116, 104, 32, 117, 110, 105, 118, 101, 114, 115, 97, 108, 32, 110, 101, 119, 108, 105, 110, 101, 10, 115, 117, 112, 112, 111, 114, 116, 46, 32, 65, 110, 121, 32, 108, 105, 110, 101, 32, 101, 110, 100, 105, 110, 103, 32, 105, 110, 32, 116, 104, 101, 32, 105, 110, 112, 117, 116, 32, 102, 105, 108, 101, 32, 119, 105, 108, 108, 32, 98, 101, 32, 115, 101, 101, 110, 32, 97, 115, 32, 97, 32, 39, 92, 110, 39, 32, 105, 110, 10, 80, 121, 116, 104, 111, 110, 46, 32, 65, 108, 115, 111, 44, 32, 97, 32, 102, 105, 108, 101, 32, 115, 111, 32, 111, 112, 101, 110, 101, 100, 32, 103, 97, 105, 110, 115, 32, 116, 104, 101, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 32, 39, 110, 101, 119, 108, 105, 110, 101, 115, 39, 59, 32, 116, 104, 101, 32, 118, 97, 108, 117, 101, 10, 102, 111, 114, 32, 116, 104, 105, 115, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 32, 105, 115, 32, 111, 110, 101, 32, 111, 102, 32, 78, 111, 110, 101, 32, 40, 110, 111, 32, 110, 101, 119, 108, 105, 110, 101, 32, 114, 101, 97, 100, 32, 121, 101, 116, 41, 44, 32, 39, 92, 114, 39, 44, 32, 39, 92, 110, 39, 44, 10, 39, 92, 114, 92, 110, 39, 32, 111, 114, 32, 97, 32, 116, 117, 112, 108, 101, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 97, 108, 108, 32, 116, 104, 101, 32, 110, 101, 119, 108, 105, 110, 101, 32, 116, 121, 112, 101, 115, 32, 115, 101, 101, 110, 46, 32, 85, 110, 105, 118, 101, 114, 115, 97, 108, 10, 110, 101, 119, 108, 105, 110, 101, 115, 32, 97, 114, 101, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 111, 110, 108, 121, 32, 119, 104, 101, 110, 32, 114, 101, 97, 100, 105, 110, 103, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 98, 122, 50, 46, 66, 90, 50, 70, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _BZ2Comp_compress__doc__ = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 40, 100, 97, 116, 97, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 80, 114, 111, 118, 105, 100, 101, 32, 109, 111, 114, 101, 32, 100, 97, 116, 97, 32, 116, 111, 32, 116, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 46, 32, 73, 116, 32, 119, 105, 108, 108, 32, 114, 101, 116, 117, 114, 110, 32, 99, 104, 117, 110, 107, 115, 32, 111, 102, 10, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 100, 97, 116, 97, 32, 119, 104, 101, 110, 101, 118, 101, 114, 32, 112, 111, 115, 115, 105, 98, 108, 101, 46, 32, 87, 104, 101, 110, 32, 121, 111, 117, 39, 118, 101, 32, 102, 105, 110, 105, 115, 104, 101, 100, 32, 112, 114, 111, 118, 105, 100, 105, 110, 103, 32, 100, 97, 116, 97, 10, 116, 111, 32, 99, 111, 109, 112, 114, 101, 115, 115, 44, 32, 99, 97, 108, 108, 32, 116, 104, 101, 32, 102, 108, 117, 115, 104, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 116, 111, 32, 102, 105, 110, 105, 115, 104, 32, 116, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 112, 114, 111, 99, 101, 115, 115, 44, 10, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 32, 119, 104, 97, 116, 32, 105, 115, 32, 108, 101, 102, 116, 32, 105, 110, 32, 116, 104, 101, 32, 105, 110, 116, 101, 114, 110, 97, 108, 32, 98, 117, 102, 102, 101, 114, 115, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 115, 42, 58, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 116, 104, 105, 115, 32, 111, 98, 106, 101, 99, 116, 32, 119, 97, 115, 32, 97, 108, 114, 101, 97, 100, 121, 32, 102, 108, 117, 115, 104, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    _BZ2Comp_flush__doc__ = allocate([ 102, 108, 117, 115, 104, 40, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 70, 105, 110, 105, 115, 104, 32, 116, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 112, 114, 111, 99, 101, 115, 115, 32, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 32, 119, 104, 97, 116, 32, 105, 115, 32, 108, 101, 102, 116, 32, 105, 110, 32, 105, 110, 116, 101, 114, 110, 97, 108, 32, 98, 117, 102, 102, 101, 114, 115, 46, 10, 89, 111, 117, 32, 109, 117, 115, 116, 32, 110, 111, 116, 32, 117, 115, 101, 32, 116, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 32, 97, 102, 116, 101, 114, 32, 99, 97, 108, 108, 105, 110, 103, 32, 116, 104, 105, 115, 32, 109, 101, 116, 104, 111, 100, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 111, 98, 106, 101, 99, 116, 32, 119, 97, 115, 32, 97, 108, 114, 101, 97, 100, 121, 32, 102, 108, 117, 115, 104, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 102, 108, 117, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    _BZ2Comp_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str70 = allocate([ 124, 105, 58, 66, 90, 50, 67, 111, 109, 112, 114, 101, 115, 115, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9883 = allocate(8, "i8*", ALLOC_NORMAL);
    _BZ2Comp__doc__ = allocate([ 66, 90, 50, 67, 111, 109, 112, 114, 101, 115, 115, 111, 114, 40, 91, 99, 111, 109, 112, 114, 101, 115, 115, 108, 101, 118, 101, 108, 61, 57, 93, 41, 32, 45, 62, 32, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 10, 10, 67, 114, 101, 97, 116, 101, 32, 97, 32, 110, 101, 119, 32, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 46, 32, 84, 104, 105, 115, 32, 111, 98, 106, 101, 99, 116, 32, 109, 97, 121, 32, 98, 101, 32, 117, 115, 101, 100, 32, 116, 111, 32, 99, 111, 109, 112, 114, 101, 115, 115, 10, 100, 97, 116, 97, 32, 115, 101, 113, 117, 101, 110, 116, 105, 97, 108, 108, 121, 46, 32, 73, 102, 32, 121, 111, 117, 32, 119, 97, 110, 116, 32, 116, 111, 32, 99, 111, 109, 112, 114, 101, 115, 115, 32, 100, 97, 116, 97, 32, 105, 110, 32, 111, 110, 101, 32, 115, 104, 111, 116, 44, 32, 117, 115, 101, 32, 116, 104, 101, 10, 99, 111, 109, 112, 114, 101, 115, 115, 40, 41, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 110, 115, 116, 101, 97, 100, 46, 32, 84, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 108, 101, 118, 101, 108, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 44, 32, 105, 102, 32, 103, 105, 118, 101, 110, 44, 10, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 110, 117, 109, 98, 101, 114, 32, 98, 101, 116, 119, 101, 101, 110, 32, 49, 32, 97, 110, 100, 32, 57, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 98, 122, 50, 46, 66, 90, 50, 67, 111, 109, 112, 114, 101, 115, 115, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _BZ2Comp_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str72 = allocate([ 117, 110, 117, 115, 101, 100, 95, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    _BZ2Decomp_members = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 60, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _BZ2Decomp_decompress__doc__ = allocate([ 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 40, 100, 97, 116, 97, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 80, 114, 111, 118, 105, 100, 101, 32, 109, 111, 114, 101, 32, 100, 97, 116, 97, 32, 116, 111, 32, 116, 104, 101, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 46, 32, 73, 116, 32, 119, 105, 108, 108, 32, 114, 101, 116, 117, 114, 110, 32, 99, 104, 117, 110, 107, 115, 10, 111, 102, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 100, 97, 116, 97, 32, 119, 104, 101, 110, 101, 118, 101, 114, 32, 112, 111, 115, 115, 105, 98, 108, 101, 46, 32, 73, 102, 32, 121, 111, 117, 32, 116, 114, 121, 32, 116, 111, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 32, 100, 97, 116, 97, 10, 97, 102, 116, 101, 114, 32, 116, 104, 101, 32, 101, 110, 100, 32, 111, 102, 32, 115, 116, 114, 101, 97, 109, 32, 105, 115, 32, 102, 111, 117, 110, 100, 44, 32, 69, 79, 70, 69, 114, 114, 111, 114, 32, 119, 105, 108, 108, 32, 98, 101, 32, 114, 97, 105, 115, 101, 100, 46, 32, 73, 102, 32, 97, 110, 121, 32, 100, 97, 116, 97, 10, 119, 97, 115, 32, 102, 111, 117, 110, 100, 32, 97, 102, 116, 101, 114, 32, 116, 104, 101, 32, 101, 110, 100, 32, 111, 102, 32, 115, 116, 114, 101, 97, 109, 44, 32, 105, 116, 39, 108, 108, 32, 98, 101, 32, 105, 103, 110, 111, 114, 101, 100, 32, 97, 110, 100, 32, 115, 97, 118, 101, 100, 32, 105, 110, 10, 117, 110, 117, 115, 101, 100, 95, 100, 97, 116, 97, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 115, 42, 58, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 101, 110, 100, 32, 111, 102, 32, 115, 116, 114, 101, 97, 109, 32, 119, 97, 115, 32, 97, 108, 114, 101, 97, 100, 121, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    _BZ2Decomp_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str76 = allocate([ 58, 66, 90, 50, 68, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _BZ2Decomp__doc__ = allocate([ 66, 90, 50, 68, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 40, 41, 32, 45, 62, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 10, 10, 67, 114, 101, 97, 116, 101, 32, 97, 32, 110, 101, 119, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 46, 32, 84, 104, 105, 115, 32, 111, 98, 106, 101, 99, 116, 32, 109, 97, 121, 32, 98, 101, 32, 117, 115, 101, 100, 32, 116, 111, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 10, 100, 97, 116, 97, 32, 115, 101, 113, 117, 101, 110, 116, 105, 97, 108, 108, 121, 46, 32, 73, 102, 32, 121, 111, 117, 32, 119, 97, 110, 116, 32, 116, 111, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 32, 100, 97, 116, 97, 32, 105, 110, 32, 111, 110, 101, 32, 115, 104, 111, 116, 44, 32, 117, 115, 101, 32, 116, 104, 101, 10, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 40, 41, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 110, 115, 116, 101, 97, 100, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 98, 122, 50, 46, 66, 90, 50, 68, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _BZ2Decomp_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _bz2_compress__doc__ = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 40, 100, 97, 116, 97, 32, 91, 44, 32, 99, 111, 109, 112, 114, 101, 115, 115, 108, 101, 118, 101, 108, 61, 57, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 67, 111, 109, 112, 114, 101, 115, 115, 32, 100, 97, 116, 97, 32, 105, 110, 32, 111, 110, 101, 32, 115, 104, 111, 116, 46, 32, 73, 102, 32, 121, 111, 117, 32, 119, 97, 110, 116, 32, 116, 111, 32, 99, 111, 109, 112, 114, 101, 115, 115, 32, 100, 97, 116, 97, 32, 115, 101, 113, 117, 101, 110, 116, 105, 97, 108, 108, 121, 44, 10, 117, 115, 101, 32, 97, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 111, 102, 32, 66, 90, 50, 67, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 105, 110, 115, 116, 101, 97, 100, 46, 32, 84, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 108, 101, 118, 101, 108, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 44, 32, 105, 102, 10, 103, 105, 118, 101, 110, 44, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 110, 117, 109, 98, 101, 114, 32, 98, 101, 116, 119, 101, 101, 110, 32, 49, 32, 97, 110, 100, 32, 57, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 115, 42, 124, 105, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_10095 = allocate(12, "i8*", ALLOC_NORMAL);
    __str79 = allocate([ 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    _bz2_decompress__doc__ = allocate([ 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 40, 100, 97, 116, 97, 41, 32, 45, 62, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 100, 97, 116, 97, 10, 10, 68, 101, 99, 111, 109, 112, 114, 101, 115, 115, 32, 100, 97, 116, 97, 32, 105, 110, 32, 111, 110, 101, 32, 115, 104, 111, 116, 46, 32, 73, 102, 32, 121, 111, 117, 32, 119, 97, 110, 116, 32, 116, 111, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 32, 100, 97, 116, 97, 32, 115, 101, 113, 117, 101, 110, 116, 105, 97, 108, 108, 121, 44, 10, 117, 115, 101, 32, 97, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 111, 102, 32, 66, 90, 50, 68, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 105, 110, 115, 116, 101, 97, 100, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str80 = allocate([ 99, 111, 117, 108, 100, 110, 39, 116, 32, 102, 105, 110, 100, 32, 101, 110, 100, 32, 111, 102, 32, 115, 116, 114, 101, 97, 109, 0 ], "i8", ALLOC_NORMAL);
    _bz2_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _bz2__doc__ = allocate([ 84, 104, 101, 32, 112, 121, 116, 104, 111, 110, 32, 98, 122, 50, 32, 109, 111, 100, 117, 108, 101, 32, 112, 114, 111, 118, 105, 100, 101, 115, 32, 97, 32, 99, 111, 109, 112, 114, 101, 104, 101, 110, 115, 105, 118, 101, 32, 105, 110, 116, 101, 114, 102, 97, 99, 101, 32, 102, 111, 114, 10, 116, 104, 101, 32, 98, 122, 50, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 108, 105, 98, 114, 97, 114, 121, 46, 32, 73, 116, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 115, 32, 97, 32, 99, 111, 109, 112, 108, 101, 116, 101, 32, 102, 105, 108, 101, 10, 105, 110, 116, 101, 114, 102, 97, 99, 101, 44, 32, 111, 110, 101, 32, 115, 104, 111, 116, 32, 40, 100, 101, 41, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 44, 32, 97, 110, 100, 32, 116, 121, 112, 101, 115, 32, 102, 111, 114, 10, 115, 101, 113, 117, 101, 110, 116, 105, 97, 108, 32, 40, 100, 101, 41, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 98, 122, 50, 0 ], "i8", ALLOC_NORMAL);
    __str82 = allocate([ 95, 95, 97, 117, 116, 104, 111, 114, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str83 = allocate([ 66, 90, 50, 70, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str84 = allocate([ 66, 90, 50, 67, 111, 109, 112, 114, 101, 115, 115, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 66, 90, 50, 68, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_BZ2File_methods] = __str29;
    HEAP[_BZ2File_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_BZ2File_methods + 12] = _BZ2File_read__doc__;
    HEAP[_BZ2File_methods + 16] = __str30;
    HEAP[_BZ2File_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_BZ2File_methods + 28] = _BZ2File_readline__doc__;
    HEAP[_BZ2File_methods + 32] = __str31;
    HEAP[_BZ2File_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_BZ2File_methods + 44] = _BZ2File_readlines__doc__;
    HEAP[_BZ2File_methods + 48] = __str32;
    HEAP[_BZ2File_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_BZ2File_methods + 60] = _BZ2File_xreadlines__doc__;
    HEAP[_BZ2File_methods + 64] = __str33;
    HEAP[_BZ2File_methods + 68] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_BZ2File_methods + 76] = _BZ2File_write__doc__;
    HEAP[_BZ2File_methods + 80] = __str34;
    HEAP[_BZ2File_methods + 84] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_BZ2File_methods + 92] = _BZ2File_writelines__doc__;
    HEAP[_BZ2File_methods + 96] = __str26;
    HEAP[_BZ2File_methods + 100] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_BZ2File_methods + 108] = _BZ2File_seek__doc__;
    HEAP[_BZ2File_methods + 112] = __str35;
    HEAP[_BZ2File_methods + 116] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_BZ2File_methods + 124] = _BZ2File_tell__doc__;
    HEAP[_BZ2File_methods + 128] = __str28;
    HEAP[_BZ2File_methods + 132] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_BZ2File_methods + 140] = _BZ2File_close__doc__;
    HEAP[_BZ2File_methods + 144] = __str36;
    HEAP[_BZ2File_methods + 148] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_BZ2File_methods + 156] = _BZ2File_enter_doc;
    HEAP[_BZ2File_methods + 160] = __str37;
    HEAP[_BZ2File_methods + 164] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_BZ2File_methods + 172] = _BZ2File_exit_doc;
    HEAP[_BZ2File_getset] = __str46;
    HEAP[_BZ2File_getset + 4] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_BZ2File_getset + 12] = __str47;
    HEAP[_BZ2File_getset + 20] = __str48;
    HEAP[_BZ2File_getset + 24] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_BZ2File_getset + 32] = __str49;
    HEAP[_BZ2File_getset + 40] = __str44;
    HEAP[_BZ2File_getset + 44] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_BZ2File_getset + 52] = __str50;
    HEAP[_BZ2File_getset + 60] = __str45;
    HEAP[_BZ2File_getset + 64] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_BZ2File_getset + 72] = __str51;
    HEAP[_BZ2File_members] = __str52;
    HEAP[_BZ2File_members + 16] = __str53;
    HEAP[_kwlist_9533] = __str56;
    HEAP[_kwlist_9533 + 4] = __str44;
    HEAP[_kwlist_9533 + 8] = __str57;
    HEAP[_kwlist_9533 + 12] = __str58;
    HEAP[_BZ2File_Type + 12] = __str64;
    HEAP[_BZ2File_Type + 24] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_BZ2File_Type + 72] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_BZ2File_Type + 76] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_BZ2File_Type + 88] = _BZ2File__doc__;
    HEAP[_BZ2File_Type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_BZ2File_Type + 112] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_BZ2File_Type + 116] = _BZ2File_methods;
    HEAP[_BZ2File_Type + 120] = _BZ2File_members;
    HEAP[_BZ2File_Type + 124] = _BZ2File_getset;
    HEAP[_BZ2File_Type + 148] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_BZ2File_Type + 152] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_BZ2File_Type + 156] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_BZ2File_Type + 160] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_BZ2Comp_methods] = __str68;
    HEAP[_BZ2Comp_methods + 4] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_BZ2Comp_methods + 12] = _BZ2Comp_compress__doc__;
    HEAP[_BZ2Comp_methods + 16] = __str69;
    HEAP[_BZ2Comp_methods + 20] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_BZ2Comp_methods + 28] = _BZ2Comp_flush__doc__;
    HEAP[_kwlist_9883] = __str58;
    HEAP[_BZ2Comp_Type + 12] = __str71;
    HEAP[_BZ2Comp_Type + 24] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_BZ2Comp_Type + 72] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_BZ2Comp_Type + 76] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_BZ2Comp_Type + 88] = _BZ2Comp__doc__;
    HEAP[_BZ2Comp_Type + 116] = _BZ2Comp_methods;
    HEAP[_BZ2Comp_Type + 148] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_BZ2Comp_Type + 152] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_BZ2Comp_Type + 156] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_BZ2Comp_Type + 160] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_BZ2Decomp_members] = __str72;
    HEAP[_BZ2Decomp_methods] = __str75;
    HEAP[_BZ2Decomp_methods + 4] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_BZ2Decomp_methods + 12] = _BZ2Decomp_decompress__doc__;
    HEAP[_BZ2Decomp_Type + 12] = __str77;
    HEAP[_BZ2Decomp_Type + 24] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_BZ2Decomp_Type + 72] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_BZ2Decomp_Type + 76] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_BZ2Decomp_Type + 88] = _BZ2Decomp__doc__;
    HEAP[_BZ2Decomp_Type + 116] = _BZ2Decomp_methods;
    HEAP[_BZ2Decomp_Type + 120] = _BZ2Decomp_members;
    HEAP[_BZ2Decomp_Type + 148] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_BZ2Decomp_Type + 152] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_BZ2Decomp_Type + 156] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_BZ2Decomp_Type + 160] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_kwlist_10095] = __str79;
    HEAP[_kwlist_10095 + 4] = __str58;
    HEAP[_bz2_methods] = __str68;
    HEAP[_bz2_methods + 4] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_bz2_methods + 12] = _bz2_compress__doc__;
    HEAP[_bz2_methods + 16] = __str75;
    HEAP[_bz2_methods + 20] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_bz2_methods + 28] = _bz2_decompress__doc__;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
