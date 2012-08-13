"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 272;
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
  var $struct_PyStringObject___SIZE = 24;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _table_a2b_hqx;
  var _table_b2a_hqx;
  var _table_a2b_base64;
  var _table_b2a_base64;
  var _crctab_hqx;
  var _doc_a2b_uu;
  var __str;
  var __str1;
  var __str2;
  var ___PRETTY_FUNCTION___8271;
  var _Error;
  var __str3;
  var __str4;
  var _doc_b2a_uu;
  var __str5;
  var __str6;
  var _doc_a2b_base64;
  var __str7;
  var ___PRETTY_FUNCTION___8453;
  var __str8;
  var __str9;
  var _doc_b2a_base64;
  var __str10;
  var __str11;
  var ___PRETTY_FUNCTION___8557;
  var __str12;
  var _doc_a2b_hqx;
  var __str13;
  var __str14;
  var ___PRETTY_FUNCTION___8637;
  var _Incomplete;
  var __str15;
  var __str16;
  var _doc_rlecode_hqx;
  var __str17;
  var ___PRETTY_FUNCTION___8751;
  var _doc_b2a_hqx;
  var __str18;
  var ___PRETTY_FUNCTION___8824;
  var _doc_rledecode_hqx;
  var __str19;
  var __str20;
  var ___PRETTY_FUNCTION___8897;
  var __str21;
  var _doc_crc_hqx;
  var __str22;
  var __str23;
  var _doc_crc32;
  var _crc_32_tab;
  var __str24;
  var __str25;
  var __str26;
  var ___PRETTY_FUNCTION___9212;
  var _doc_hexlify;
  var __str27;
  var ___PRETTY_FUNCTION___9287;
  var __str28;
  var __str29;
  var _doc_unhexlify;
  var _table_hex;
  var _doc_a2b_qp;
  var __str30;
  var _kwlist_9353;
  var __str31;
  var __str32;
  var __str33;
  var _doc_b2a_qp;
  var __str34;
  var _kwlist_9474;
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
  var _binascii_module_methods;
  var _doc_binascii;
  var __str53;
  var __str54;
  var __str55;
  var __str56;
  var __str57;
  var __str58;
  function _binascii_a2b_uu($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 98;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 98);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_1 = __stackBase__ + 12;
      var $0 = __stackBase__ + 13;
      var $pascii = __stackBase__ + 17;
      var $ascii_data = __stackBase__ + 69;
      var $bin_data = __stackBase__ + 73;
      var $leftbits = __stackBase__ + 77;
      var $this_ch = __stackBase__ + 81;
      var $leftchar = __stackBase__ + 82;
      var $rv = __stackBase__ + 86;
      var $ascii_len = __stackBase__ + 90;
      var $bin_len = __stackBase__ + 94;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$leftbits] = 0;
      HEAP[$leftchar] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str, allocate([ $pascii, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 2:
      
      var $5 = HEAP[$pascii];
      HEAP[$ascii_data] = $5;
      
      var $7 = HEAP[$pascii + 8];
      HEAP[$ascii_len] = $7;
      
      
      if (HEAP[$ascii_len] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str1, __str2, 204, ___PRETTY_FUNCTION___8271);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      
      var $14 = HEAP[HEAP[$ascii_data]] - 32 & 63;
      HEAP[$bin_len] = $14;
      
      var $16 = HEAP[$ascii_data] + 1;
      HEAP[$ascii_data] = $16;
      
      var $18 = HEAP[$ascii_len] - 1;
      HEAP[$ascii_len] = $18;
      var $19 = HEAP[$bin_len];
      var $20 = _PyString_FromStringAndSize(0, $19);
      HEAP[$rv] = $20;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($pascii);
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 6:
      
      
      
      var $26 = HEAP[$rv] + 20;
      HEAP[$bin_data] = $26;
      __label__ = 23;
      break;
     case 7:
      
      
      if (HEAP[$ascii_len] > 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $30 = HEAP[HEAP[$ascii_data]];
      HEAP[$iftmp_1] = $30;
      __label__ = 10;
      break;
     case 9:
      HEAP[$iftmp_1] = 0;
      __label__ = 10;
      break;
     case 10:
      var $31 = HEAP[$iftmp_1];
      HEAP[$this_ch] = $31;
      
      
      if (HEAP[$this_ch] == 10) {
        __label__ = 13;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      if (HEAP[$this_ch] == 13) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if (HEAP[$ascii_len] <= 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$this_ch] = 0;
      __label__ = 20;
      break;
     case 14:
      
      
      if (HEAP[$this_ch] <= 31) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      if (HEAP[$this_ch] > 96) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      var $42 = HEAP[_Error];
      _PyErr_SetString($42, __str3);
      _PyBuffer_Release($pascii);
      
      
      
      var $46 = HEAP[HEAP[$rv]] - 1;
      
      var $48 = HEAP[$rv];
      HEAP[$48] = $46;
      
      
      
      
      if (HEAP[HEAP[$rv]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $58 = HEAP[$rv];
      FUNCTION_TABLE[$57]($58);
      __label__ = 18;
      break;
     case 18:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 19:
      
      
      var $61 = HEAP[$this_ch] - 32 & 63;
      HEAP[$this_ch] = $61;
      __label__ = 20;
      break;
     case 20:
      
      
      
      
      var $66 = HEAP[$leftchar] << 6 | HEAP[$this_ch];
      HEAP[$leftchar] = $66;
      
      var $68 = HEAP[$leftbits] + 6;
      HEAP[$leftbits] = $68;
      
      
      if (HEAP[$leftbits] > 7) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      var $72 = HEAP[$leftbits] - 8;
      HEAP[$leftbits] = $72;
      
      
      
      var $76 = HEAP[$leftchar] >>> HEAP[$leftbits] & 255;
      var $77 = HEAP[$bin_data];
      HEAP[$77] = $76;
      
      var $79 = HEAP[$bin_data] + 1;
      HEAP[$bin_data] = $79;
      
      
      
      
      var $84 = (1 << HEAP[$leftbits]) - 1 & HEAP[$leftchar];
      HEAP[$leftchar] = $84;
      
      var $86 = HEAP[$bin_len] - 1;
      HEAP[$bin_len] = $86;
      __label__ = 22;
      break;
     case 22:
      
      var $88 = HEAP[$ascii_len] - 1;
      HEAP[$ascii_len] = $88;
      
      var $90 = HEAP[$ascii_data] + 1;
      HEAP[$ascii_data] = $90;
      __label__ = 23;
      break;
     case 23:
      
      
      if (HEAP[$bin_len] > 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      __label__ = 32;
      break;
     case 25:
      
      var $94 = HEAP[HEAP[$ascii_data]];
      HEAP[$this_ch] = $94;
      
      var $96 = HEAP[$ascii_data] + 1;
      HEAP[$ascii_data] = $96;
      
      
      if (HEAP[$this_ch] != 32) {
        __label__ = 26;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 26:
      
      
      if (HEAP[$this_ch] != 96) {
        __label__ = 27;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 27:
      
      
      if (HEAP[$this_ch] != 10) {
        __label__ = 28;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 28:
      
      
      if (HEAP[$this_ch] != 13) {
        __label__ = 29;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 29:
      var $105 = HEAP[_Error];
      _PyErr_SetString($105, __str4);
      _PyBuffer_Release($pascii);
      
      
      
      var $109 = HEAP[HEAP[$rv]] - 1;
      
      var $111 = HEAP[$rv];
      HEAP[$111] = $109;
      
      
      
      
      if (HEAP[HEAP[$rv]] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $120 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $121 = HEAP[$rv];
      FUNCTION_TABLE[$120]($121);
      __label__ = 31;
      break;
     case 31:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 32:
      
      
      var $124 = HEAP[$ascii_len] > 0;
      
      var $126 = HEAP[$ascii_len] - 1;
      HEAP[$ascii_len] = $126;
      
      if ($124 != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      _PyBuffer_Release($pascii);
      var $127 = HEAP[$rv];
      HEAP[$0] = $127;
      __label__ = 34;
      break;
     case 34:
      var $128 = HEAP[$0];
      HEAP[$retval] = $128;
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
  function _binascii_b2a_uu($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 93;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 93);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $pbin = __stackBase__ + 16;
      var $ascii_data = __stackBase__ + 68;
      var $bin_data = __stackBase__ + 72;
      var $leftbits = __stackBase__ + 76;
      var $this_ch = __stackBase__ + 80;
      var $leftchar = __stackBase__ + 81;
      var $rv = __stackBase__ + 85;
      var $bin_len = __stackBase__ + 89;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$leftbits] = 0;
      HEAP[$leftchar] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str5, allocate([ $pbin, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$pbin];
      HEAP[$bin_data] = $5;
      
      var $7 = HEAP[$pbin + 8];
      HEAP[$bin_len] = $7;
      
      
      if (HEAP[$bin_len] > 45) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = HEAP[_Error];
      _PyErr_SetString($10, __str6);
      _PyBuffer_Release($pbin);
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 4:
      
      
      
      
      var $15 = ((HEAP[$bin_len] + 2) / 3 | 0) * 4 + 2;
      var $16 = _PyString_FromStringAndSize(0, $15);
      HEAP[$rv] = $16;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($pbin);
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 6:
      
      
      
      var $22 = HEAP[$rv] + 20;
      HEAP[$ascii_data] = $22;
      
      
      
      var $26 = (HEAP[$bin_len] & 255 & 63) + 32;
      var $27 = HEAP[$ascii_data];
      HEAP[$27] = $26;
      
      var $29 = HEAP[$ascii_data] + 1;
      HEAP[$ascii_data] = $29;
      __label__ = 14;
      break;
     case 7:
      
      
      if (HEAP[$bin_len] > 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $37 = HEAP[$leftchar] << 8 | HEAP[HEAP[$bin_data]];
      HEAP[$leftchar] = $37;
      __label__ = 10;
      break;
     case 9:
      
      var $39 = HEAP[$leftchar] << 8;
      HEAP[$leftchar] = $39;
      __label__ = 10;
      break;
     case 10:
      
      var $41 = HEAP[$leftbits] + 8;
      HEAP[$leftbits] = $41;
      __label__ = 12;
      break;
     case 11:
      
      
      
      
      
      var $47 = HEAP[$leftchar] >>> 0 >>> (HEAP[$leftbits] - 6 >>> 0) & 255 & 63;
      HEAP[$this_ch] = $47;
      
      var $49 = HEAP[$leftbits] - 6;
      HEAP[$leftbits] = $49;
      
      var $51 = HEAP[$this_ch] + 32;
      var $52 = HEAP[$ascii_data];
      HEAP[$52] = $51;
      
      var $54 = HEAP[$ascii_data] + 1;
      HEAP[$ascii_data] = $54;
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$leftbits] > 5) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      var $58 = HEAP[$bin_len] - 1;
      HEAP[$bin_len] = $58;
      
      var $60 = HEAP[$bin_data] + 1;
      HEAP[$bin_data] = $60;
      __label__ = 14;
      break;
     case 14:
      
      
      if (HEAP[$bin_len] > 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      if (HEAP[$leftbits] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $65 = HEAP[$ascii_data];
      HEAP[$65] = 10;
      
      var $67 = HEAP[$ascii_data] + 1;
      HEAP[$ascii_data] = $67;
      
      
      
      
      
      
      var $74 = HEAP[$ascii_data] - (HEAP[$rv] + 20);
      var $75 = __PyString_Resize($rv, $74);
      
      if ($75 < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      var $77 = HEAP[$rv];
      
      
      var $80 = HEAP[$77] - 1;
      var $81 = $77;
      HEAP[$81] = $80;
      
      
      
      if (HEAP[$77] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $89 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $90 = HEAP[$rv];
      FUNCTION_TABLE[$89]($90);
      __label__ = 19;
      break;
     case 19:
      HEAP[$rv] = 0;
      __label__ = 20;
      break;
     case 20:
      _PyBuffer_Release($pbin);
      var $91 = HEAP[$rv];
      HEAP[$0] = $91;
      __label__ = 21;
      break;
     case 21:
      var $92 = HEAP[$0];
      HEAP[$retval] = $92;
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
  function _binascii_find_valid($s, $slen, $num) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 26;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 26);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $slen_addr = __stackBase__ + 4;
      var $num_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $ret = __stackBase__ + 20;
      var $c = __stackBase__ + 24;
      var $b64val = __stackBase__ + 25;
      
      HEAP[$s_addr] = $s;
      HEAP[$slen_addr] = $slen;
      HEAP[$num_addr] = $num;
      HEAP[$ret] = -1;
      __label__ = 7;
      break;
     case 1:
      
      var $2 = HEAP[HEAP[$s_addr]];
      HEAP[$c] = $2;
      
      
      
      
      var $7 = HEAP[_table_a2b_base64 + (HEAP[$c] & 127)];
      HEAP[$b64val] = $7;
      
      
      if (HEAP[$c] >= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      
      var $11 = HEAP[$b64val] != -1;
      if ($11) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      if (HEAP[$num_addr] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $16 = HEAP[HEAP[$s_addr]];
      HEAP[$ret] = $16;
      __label__ = 5;
      break;
     case 5:
      
      var $18 = HEAP[$num_addr] - 1;
      HEAP[$num_addr] = $18;
      __label__ = 6;
      break;
     case 6:
      
      var $20 = HEAP[$s_addr] + 1;
      HEAP[$s_addr] = $20;
      
      var $22 = HEAP[$slen_addr] - 1;
      HEAP[$slen_addr] = $22;
      __label__ = 7;
      break;
     case 7:
      
      
      if (HEAP[$slen_addr] <= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      var $26 = HEAP[$ret] == -1;
      if ($26) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $27 = HEAP[$ret];
      HEAP[$0] = $27;
      var $28 = HEAP[$0];
      HEAP[$retval] = $28;
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
  function _binascii_a2b_base64($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 101;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 101);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $pascii = __stackBase__ + 16;
      var $ascii_data = __stackBase__ + 68;
      var $bin_data = __stackBase__ + 72;
      var $leftbits = __stackBase__ + 76;
      var $this_ch = __stackBase__ + 80;
      var $leftchar = __stackBase__ + 81;
      var $rv = __stackBase__ + 85;
      var $ascii_len = __stackBase__ + 89;
      var $bin_len = __stackBase__ + 93;
      var $quad_pos = __stackBase__ + 97;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$leftbits] = 0;
      HEAP[$leftchar] = 0;
      HEAP[$quad_pos] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str7, allocate([ $pascii, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      var $5 = HEAP[$pascii];
      HEAP[$ascii_data] = $5;
      
      var $7 = HEAP[$pascii + 8];
      HEAP[$ascii_len] = $7;
      
      
      if (HEAP[$ascii_len] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str1, __str2, 378, ___PRETTY_FUNCTION___8453);
      throw "Reached an unreachable!";
     case 4:
      
      
      if (HEAP[$ascii_len] > 2147483644) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($pascii);
      var $12 = _PyErr_NoMemory();
      HEAP[$0] = $12;
      __label__ = 37;
      break;
     case 6:
      
      
      
      var $16 = ((HEAP[$ascii_len] + 3) / 4 | 0) * 3;
      HEAP[$bin_len] = $16;
      var $17 = HEAP[$bin_len];
      var $18 = _PyString_FromStringAndSize(0, $17);
      HEAP[$rv] = $18;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _PyBuffer_Release($pascii);
      HEAP[$0] = 0;
      __label__ = 37;
      break;
     case 8:
      
      
      
      var $24 = HEAP[$rv] + 20;
      HEAP[$bin_data] = $24;
      HEAP[$bin_len] = 0;
      __label__ = 22;
      break;
     case 9:
      
      var $26 = HEAP[HEAP[$ascii_data]];
      HEAP[$this_ch] = $26;
      var $27 = HEAP[$this_ch];
      var $28 = reSign($27, 8, 1) < 0;
      if ($28) {
        __label__ = 21;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      var $29 = HEAP[$this_ch];
      var $30 = reSign($29, 8, 1) == 13;
      if ($30) {
        __label__ = 21;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $31 = HEAP[$this_ch];
      var $32 = reSign($31, 8, 1) == 10;
      if ($32) {
        __label__ = 21;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $33 = HEAP[$this_ch];
      var $34 = reSign($33, 8, 1) == 32;
      if ($34) {
        __label__ = 21;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      if (HEAP[$this_ch] == 61) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      
      
      if (HEAP[$quad_pos] <= 1) {
        __label__ = 21;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      if (HEAP[$quad_pos] != 2) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $41 = HEAP[$ascii_data];
      var $42 = HEAP[$ascii_len];
      var $43 = _binascii_find_valid($41, $42, 1);
      
      if ($43 != 61) {
        __label__ = 21;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      HEAP[$leftbits] = 0;
      __label__ = 23;
      break;
     case 18:
      
      
      
      
      var $49 = HEAP[_table_a2b_base64 + HEAP[HEAP[$ascii_data]]];
      HEAP[$this_ch] = $49;
      var $50 = HEAP[$this_ch];
      var $51 = reSign($50, 8, 1) == -1;
      if ($51) {
        __label__ = 21;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      var $54 = HEAP[$quad_pos] + 1 & 3;
      HEAP[$quad_pos] = $54;
      
      
      
      
      var $59 = HEAP[$leftchar] << 6 | HEAP[$this_ch];
      HEAP[$leftchar] = $59;
      
      var $61 = HEAP[$leftbits] + 6;
      HEAP[$leftbits] = $61;
      
      
      if (HEAP[$leftbits] > 7) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      var $65 = HEAP[$leftbits] - 8;
      HEAP[$leftbits] = $65;
      
      
      
      var $69 = HEAP[$leftchar] >>> HEAP[$leftbits] & 255;
      var $70 = HEAP[$bin_data];
      HEAP[$70] = $69;
      
      var $72 = HEAP[$bin_data] + 1;
      HEAP[$bin_data] = $72;
      
      var $74 = HEAP[$bin_len] + 1;
      HEAP[$bin_len] = $74;
      
      
      
      
      var $79 = (1 << HEAP[$leftbits]) - 1 & HEAP[$leftchar];
      HEAP[$leftchar] = $79;
      __label__ = 21;
      break;
     case 21:
      
      var $81 = HEAP[$ascii_len] - 1;
      HEAP[$ascii_len] = $81;
      
      var $83 = HEAP[$ascii_data] + 1;
      HEAP[$ascii_data] = $83;
      __label__ = 22;
      break;
     case 22:
      
      
      if (HEAP[$ascii_len] > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      if (HEAP[$leftbits] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 24:
      _PyBuffer_Release($pascii);
      var $88 = HEAP[_Error];
      _PyErr_SetString($88, __str8);
      var $89 = HEAP[$rv];
      
      
      var $92 = HEAP[$89] - 1;
      var $93 = $89;
      HEAP[$93] = $92;
      
      
      
      if (HEAP[$89] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $101 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $102 = HEAP[$rv];
      FUNCTION_TABLE[$101]($102);
      __label__ = 26;
      break;
     case 26:
      HEAP[$0] = 0;
      __label__ = 37;
      break;
     case 27:
      
      
      if (HEAP[$bin_len] > 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 28:
      var $105 = HEAP[$bin_len];
      var $106 = __PyString_Resize($rv, $105);
      
      if ($106 < 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 29:
      var $108 = HEAP[$rv];
      
      
      var $111 = HEAP[$108] - 1;
      var $112 = $108;
      HEAP[$112] = $111;
      
      
      
      if (HEAP[$108] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $120 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $121 = HEAP[$rv];
      FUNCTION_TABLE[$120]($121);
      __label__ = 31;
      break;
     case 31:
      HEAP[$rv] = 0;
      __label__ = 32;
      break;
     case 32:
      __label__ = 36;
      break;
     case 33:
      var $122 = HEAP[$rv];
      
      
      var $125 = HEAP[$122] - 1;
      var $126 = $122;
      HEAP[$126] = $125;
      
      
      
      if (HEAP[$122] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $134 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $135 = HEAP[$rv];
      FUNCTION_TABLE[$134]($135);
      __label__ = 35;
      break;
     case 35:
      var $136 = _PyString_FromStringAndSize(__str9, 0);
      HEAP[$rv] = $136;
      __label__ = 36;
      break;
     case 36:
      _PyBuffer_Release($pascii);
      var $137 = HEAP[$rv];
      HEAP[$0] = $137;
      __label__ = 37;
      break;
     case 37:
      var $138 = HEAP[$0];
      HEAP[$retval] = $138;
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
  function _binascii_b2a_base64($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 93;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 93);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $pbuf = __stackBase__ + 16;
      var $ascii_data = __stackBase__ + 68;
      var $bin_data = __stackBase__ + 72;
      var $leftbits = __stackBase__ + 76;
      var $this_ch = __stackBase__ + 80;
      var $leftchar = __stackBase__ + 81;
      var $rv = __stackBase__ + 85;
      var $bin_len = __stackBase__ + 89;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$leftbits] = 0;
      HEAP[$leftchar] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str10, allocate([ $pbuf, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      var $5 = HEAP[$pbuf];
      HEAP[$bin_data] = $5;
      
      var $7 = HEAP[$pbuf + 8];
      HEAP[$bin_len] = $7;
      
      
      if (HEAP[$bin_len] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str11, __str2, 486, ___PRETTY_FUNCTION___8557);
      throw "Reached an unreachable!";
     case 4:
      
      
      if (HEAP[$bin_len] > 1073741796) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $12 = HEAP[_Error];
      _PyErr_SetString($12, __str12);
      _PyBuffer_Release($pbuf);
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 6:
      
      
      var $15 = HEAP[$bin_len] * 2 + 3;
      var $16 = _PyString_FromStringAndSize(0, $15);
      HEAP[$rv] = $16;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _PyBuffer_Release($pbuf);
      HEAP[$0] = 0;
      __label__ = 23;
      break;
     case 8:
      
      
      
      var $22 = HEAP[$rv] + 20;
      HEAP[$ascii_data] = $22;
      __label__ = 13;
      break;
     case 9:
      
      
      
      
      
      var $28 = HEAP[$leftchar] << 8 | HEAP[HEAP[$bin_data]];
      HEAP[$leftchar] = $28;
      
      var $30 = HEAP[$leftbits] + 8;
      HEAP[$leftbits] = $30;
      __label__ = 11;
      break;
     case 10:
      
      
      
      
      
      var $36 = HEAP[$leftchar] >>> 0 >>> (HEAP[$leftbits] - 6 >>> 0) & 255 & 63;
      HEAP[$this_ch] = $36;
      
      var $38 = HEAP[$leftbits] - 6;
      HEAP[$leftbits] = $38;
      
      
      
      var $42 = HEAP[_table_b2a_base64 + HEAP[$this_ch]];
      var $43 = HEAP[$ascii_data];
      HEAP[$43] = $42;
      
      var $45 = HEAP[$ascii_data] + 1;
      HEAP[$ascii_data] = $45;
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$leftbits] > 5) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      var $49 = HEAP[$bin_len] - 1;
      HEAP[$bin_len] = $49;
      
      var $51 = HEAP[$bin_data] + 1;
      HEAP[$bin_data] = $51;
      __label__ = 13;
      break;
     case 13:
      
      
      if (HEAP[$bin_len] > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if (HEAP[$leftbits] == 2) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $60 = HEAP[_table_b2a_base64 + ((HEAP[$leftchar] & 3) << 4)];
      var $61 = HEAP[$ascii_data];
      HEAP[$61] = $60;
      
      var $63 = HEAP[$ascii_data] + 1;
      HEAP[$ascii_data] = $63;
      var $64 = HEAP[$ascii_data];
      HEAP[$64] = 61;
      
      var $66 = HEAP[$ascii_data] + 1;
      HEAP[$ascii_data] = $66;
      var $67 = HEAP[$ascii_data];
      HEAP[$67] = 61;
      
      var $69 = HEAP[$ascii_data] + 1;
      HEAP[$ascii_data] = $69;
      __label__ = 18;
      break;
     case 16:
      
      
      if (HEAP[$leftbits] == 4) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $76 = HEAP[_table_b2a_base64 + ((HEAP[$leftchar] & 15) << 2)];
      var $77 = HEAP[$ascii_data];
      HEAP[$77] = $76;
      
      var $79 = HEAP[$ascii_data] + 1;
      HEAP[$ascii_data] = $79;
      var $80 = HEAP[$ascii_data];
      HEAP[$80] = 61;
      
      var $82 = HEAP[$ascii_data] + 1;
      HEAP[$ascii_data] = $82;
      __label__ = 18;
      break;
     case 18:
      var $83 = HEAP[$ascii_data];
      HEAP[$83] = 10;
      
      var $85 = HEAP[$ascii_data] + 1;
      HEAP[$ascii_data] = $85;
      
      
      
      
      
      
      var $92 = HEAP[$ascii_data] - (HEAP[$rv] + 20);
      var $93 = __PyString_Resize($rv, $92);
      
      if ($93 < 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 19:
      var $95 = HEAP[$rv];
      
      
      var $98 = HEAP[$95] - 1;
      var $99 = $95;
      HEAP[$99] = $98;
      
      
      
      if (HEAP[$95] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $107 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $108 = HEAP[$rv];
      FUNCTION_TABLE[$107]($108);
      __label__ = 21;
      break;
     case 21:
      HEAP[$rv] = 0;
      __label__ = 22;
      break;
     case 22:
      _PyBuffer_Release($pbuf);
      var $109 = HEAP[$rv];
      HEAP[$0] = $109;
      __label__ = 23;
      break;
     case 23:
      var $110 = HEAP[$0];
      HEAP[$retval] = $110;
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
  function _binascii_a2b_hqx($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 101;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 101);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $pascii = __stackBase__ + 16;
      var $ascii_data = __stackBase__ + 68;
      var $bin_data = __stackBase__ + 72;
      var $leftbits = __stackBase__ + 76;
      var $this_ch = __stackBase__ + 80;
      var $leftchar = __stackBase__ + 81;
      var $rv = __stackBase__ + 85;
      var $len = __stackBase__ + 89;
      var $done = __stackBase__ + 93;
      var $rrv = __stackBase__ + 97;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$leftbits] = 0;
      HEAP[$leftchar] = 0;
      HEAP[$done] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str13, allocate([ $pascii, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 2:
      
      var $5 = HEAP[$pascii];
      HEAP[$ascii_data] = $5;
      
      var $7 = HEAP[$pascii + 8];
      HEAP[$len] = $7;
      
      
      if (HEAP[$len] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str14, __str2, 554, ___PRETTY_FUNCTION___8637);
      throw "Reached an unreachable!";
     case 4:
      
      
      if (HEAP[$len] > 2147483645) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($pascii);
      var $12 = _PyErr_NoMemory();
      HEAP[$0] = $12;
      __label__ = 34;
      break;
     case 6:
      
      var $14 = HEAP[$len] + 2;
      var $15 = _PyString_FromStringAndSize(0, $14);
      HEAP[$rv] = $15;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _PyBuffer_Release($pascii);
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 8:
      
      
      
      var $21 = HEAP[$rv] + 20;
      HEAP[$bin_data] = $21;
      __label__ = 19;
      break;
     case 9:
      
      
      
      
      var $26 = HEAP[_table_a2b_hqx + HEAP[HEAP[$ascii_data]]];
      HEAP[$this_ch] = $26;
      
      
      if (HEAP[$this_ch] == 126) {
        __label__ = 18;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if (HEAP[$this_ch] == 125) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      var $31 = HEAP[_Error];
      _PyErr_SetString($31, __str3);
      _PyBuffer_Release($pascii);
      var $32 = HEAP[$rv];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $45 = HEAP[$rv];
      FUNCTION_TABLE[$44]($45);
      __label__ = 13;
      break;
     case 13:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 14:
      
      
      if (HEAP[$this_ch] == 127) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$done] = 1;
      __label__ = 20;
      break;
     case 16:
      
      
      
      
      var $52 = HEAP[$leftchar] << 6 | HEAP[$this_ch];
      HEAP[$leftchar] = $52;
      
      var $54 = HEAP[$leftbits] + 6;
      HEAP[$leftbits] = $54;
      
      
      if (HEAP[$leftbits] > 7) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      var $58 = HEAP[$leftbits] - 8;
      HEAP[$leftbits] = $58;
      
      
      
      var $62 = HEAP[$leftchar] >>> HEAP[$leftbits] & 255;
      var $63 = HEAP[$bin_data];
      HEAP[$63] = $62;
      
      var $65 = HEAP[$bin_data] + 1;
      HEAP[$bin_data] = $65;
      
      
      
      
      var $70 = (1 << HEAP[$leftbits]) - 1 & HEAP[$leftchar];
      HEAP[$leftchar] = $70;
      __label__ = 18;
      break;
     case 18:
      
      var $72 = HEAP[$len] - 1;
      HEAP[$len] = $72;
      
      var $74 = HEAP[$ascii_data] + 1;
      HEAP[$ascii_data] = $74;
      __label__ = 19;
      break;
     case 19:
      
      
      if (HEAP[$len] > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      if (HEAP[$leftbits] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 21:
      
      
      if (HEAP[$done] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 22:
      var $81 = HEAP[_Incomplete];
      _PyErr_SetString($81, __str15);
      _PyBuffer_Release($pascii);
      var $82 = HEAP[$rv];
      
      
      var $85 = HEAP[$82] - 1;
      var $86 = $82;
      HEAP[$86] = $85;
      
      
      
      if (HEAP[$82] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $94 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $95 = HEAP[$rv];
      FUNCTION_TABLE[$94]($95);
      __label__ = 24;
      break;
     case 24:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 25:
      
      
      
      
      
      
      var $102 = HEAP[$bin_data] - (HEAP[$rv] + 20);
      var $103 = __PyString_Resize($rv, $102);
      
      if ($103 < 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 26:
      var $105 = HEAP[$rv];
      
      
      var $108 = HEAP[$105] - 1;
      var $109 = $105;
      HEAP[$109] = $108;
      
      
      
      if (HEAP[$105] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $117 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $118 = HEAP[$rv];
      FUNCTION_TABLE[$117]($118);
      __label__ = 28;
      break;
     case 28:
      HEAP[$rv] = 0;
      __label__ = 29;
      break;
     case 29:
      
      
      if (HEAP[$rv] != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 30:
      var $121 = HEAP[$rv];
      var $122 = HEAP[$done];
      var $123 = __Py_BuildValue_SizeT(__str16, allocate([ $121, 0, 0, 0, $122, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$rrv] = $123;
      _PyBuffer_Release($pascii);
      var $124 = HEAP[$rv];
      
      
      var $127 = HEAP[$124] - 1;
      var $128 = $124;
      HEAP[$128] = $127;
      
      
      
      if (HEAP[$124] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $136 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $137 = HEAP[$rv];
      FUNCTION_TABLE[$136]($137);
      __label__ = 32;
      break;
     case 32:
      var $138 = HEAP[$rrv];
      HEAP[$0] = $138;
      __label__ = 34;
      break;
     case 33:
      _PyBuffer_Release($pascii);
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 34:
      var $139 = HEAP[$0];
      HEAP[$retval] = $139;
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
  function _binascii_rlecode_hqx($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 93;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 93);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $pbuf = __stackBase__ + 16;
      var $in_data = __stackBase__ + 68;
      var $out_data = __stackBase__ + 72;
      var $rv = __stackBase__ + 76;
      var $ch = __stackBase__ + 80;
      var $in = __stackBase__ + 81;
      var $inend = __stackBase__ + 85;
      var $len = __stackBase__ + 89;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str17, allocate([ $pbuf, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$pbuf];
      HEAP[$in_data] = $5;
      
      var $7 = HEAP[$pbuf + 8];
      HEAP[$len] = $7;
      
      
      if (HEAP[$len] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str14, __str2, 637, ___PRETTY_FUNCTION___8751);
      throw "Reached an unreachable!";
     case 4:
      
      
      if (HEAP[$len] > 1073741821) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($pbuf);
      var $12 = _PyErr_NoMemory();
      HEAP[$0] = $12;
      __label__ = 26;
      break;
     case 6:
      
      
      var $15 = (HEAP[$len] + 1) * 2;
      var $16 = _PyString_FromStringAndSize(0, $15);
      HEAP[$rv] = $16;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _PyBuffer_Release($pbuf);
      HEAP[$0] = 0;
      __label__ = 26;
      break;
     case 8:
      
      
      
      var $22 = HEAP[$rv] + 20;
      HEAP[$out_data] = $22;
      HEAP[$in] = 0;
      __label__ = 20;
      break;
     case 9:
      
      
      
      var $26 = HEAP[HEAP[$in_data] + HEAP[$in]];
      HEAP[$ch] = $26;
      var $27 = HEAP[$ch];
      var $28 = reSign($27, 8, 1) == -112;
      if ($28) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $29 = HEAP[$out_data];
      HEAP[$29] = -112;
      
      var $31 = HEAP[$out_data] + 1;
      HEAP[$out_data] = $31;
      var $32 = HEAP[$out_data];
      HEAP[$32] = 0;
      
      var $34 = HEAP[$out_data] + 1;
      HEAP[$out_data] = $34;
      __label__ = 19;
      break;
     case 11:
      
      var $36 = HEAP[$in] + 1;
      HEAP[$inend] = $36;
      __label__ = 13;
      break;
     case 12:
      
      var $38 = HEAP[$inend] + 1;
      HEAP[$inend] = $38;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if ((HEAP[$inend] | 0) >= (HEAP[$len] | 0)) {
        __label__ = 16;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      var $45 = HEAP[HEAP[$in_data] + HEAP[$inend]];
      var $46 = HEAP[$ch];
      var $47 = reSign($45, 8, 1) != reSign($46, 8, 1);
      if ($47) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      if ((HEAP[$in] + 255 | 0) > (HEAP[$inend] | 0)) {
        __label__ = 12;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      if (HEAP[$inend] - HEAP[$in] > 3) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $56 = HEAP[$out_data];
      var $57 = HEAP[$ch];
      HEAP[$56] = $57;
      
      var $59 = HEAP[$out_data] + 1;
      HEAP[$out_data] = $59;
      var $60 = HEAP[$out_data];
      HEAP[$60] = -112;
      
      var $62 = HEAP[$out_data] + 1;
      HEAP[$out_data] = $62;
      
      
      
      
      var $67 = (HEAP[$inend] & 255) - (HEAP[$in] & 255);
      var $68 = HEAP[$out_data];
      HEAP[$68] = $67;
      
      var $70 = HEAP[$out_data] + 1;
      HEAP[$out_data] = $70;
      
      var $72 = HEAP[$inend] - 1;
      HEAP[$in] = $72;
      __label__ = 19;
      break;
     case 18:
      var $73 = HEAP[$out_data];
      var $74 = HEAP[$ch];
      HEAP[$73] = $74;
      
      var $76 = HEAP[$out_data] + 1;
      HEAP[$out_data] = $76;
      __label__ = 19;
      break;
     case 19:
      
      var $78 = HEAP[$in] + 1;
      HEAP[$in] = $78;
      __label__ = 20;
      break;
     case 20:
      
      
      
      if (HEAP[$in] < HEAP[$len]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      
      var $88 = HEAP[$out_data] - (HEAP[$rv] + 20);
      var $89 = __PyString_Resize($rv, $88);
      
      if ($89 < 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 22:
      var $91 = HEAP[$rv];
      
      
      var $94 = HEAP[$91] - 1;
      var $95 = $91;
      HEAP[$95] = $94;
      
      
      
      if (HEAP[$91] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $103 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $104 = HEAP[$rv];
      FUNCTION_TABLE[$103]($104);
      __label__ = 24;
      break;
     case 24:
      HEAP[$rv] = 0;
      __label__ = 25;
      break;
     case 25:
      _PyBuffer_Release($pbuf);
      var $105 = HEAP[$rv];
      HEAP[$0] = $105;
      __label__ = 26;
      break;
     case 26:
      var $106 = HEAP[$0];
      HEAP[$retval] = $106;
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
  function _binascii_b2a_hqx($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 93;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 93);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $pbin = __stackBase__ + 16;
      var $ascii_data = __stackBase__ + 68;
      var $bin_data = __stackBase__ + 72;
      var $leftbits = __stackBase__ + 76;
      var $this_ch = __stackBase__ + 80;
      var $leftchar = __stackBase__ + 81;
      var $rv = __stackBase__ + 85;
      var $len = __stackBase__ + 89;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$leftbits] = 0;
      HEAP[$leftchar] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str18, allocate([ $pbin, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$pbin];
      HEAP[$bin_data] = $5;
      
      var $7 = HEAP[$pbin + 8];
      HEAP[$len] = $7;
      
      
      if (HEAP[$len] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str14, __str2, 703, ___PRETTY_FUNCTION___8824);
      throw "Reached an unreachable!";
     case 4:
      
      
      if (HEAP[$len] > 1073741821) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($pbin);
      var $12 = _PyErr_NoMemory();
      HEAP[$0] = $12;
      __label__ = 21;
      break;
     case 6:
      
      
      var $15 = (HEAP[$len] + 1) * 2;
      var $16 = _PyString_FromStringAndSize(0, $15);
      HEAP[$rv] = $16;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _PyBuffer_Release($pbin);
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 8:
      
      
      
      var $22 = HEAP[$rv] + 20;
      HEAP[$ascii_data] = $22;
      __label__ = 13;
      break;
     case 9:
      
      
      
      
      
      var $28 = HEAP[$leftchar] << 8 | HEAP[HEAP[$bin_data]];
      HEAP[$leftchar] = $28;
      
      var $30 = HEAP[$leftbits] + 8;
      HEAP[$leftbits] = $30;
      __label__ = 11;
      break;
     case 10:
      
      
      
      
      
      var $36 = HEAP[$leftchar] >>> 0 >>> (HEAP[$leftbits] - 6 >>> 0) & 255 & 63;
      HEAP[$this_ch] = $36;
      
      var $38 = HEAP[$leftbits] - 6;
      HEAP[$leftbits] = $38;
      
      
      
      var $42 = HEAP[_table_b2a_hqx + HEAP[$this_ch]];
      var $43 = HEAP[$ascii_data];
      HEAP[$43] = $42;
      
      var $45 = HEAP[$ascii_data] + 1;
      HEAP[$ascii_data] = $45;
      __label__ = 11;
      break;
     case 11:
      
      
      if (HEAP[$leftbits] > 5) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      var $49 = HEAP[$len] - 1;
      HEAP[$len] = $49;
      
      var $51 = HEAP[$bin_data] + 1;
      HEAP[$bin_data] = $51;
      __label__ = 13;
      break;
     case 13:
      
      
      if (HEAP[$len] > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if (HEAP[$leftbits] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      var $59 = HEAP[$leftchar] << 6 - HEAP[$leftbits];
      HEAP[$leftchar] = $59;
      
      
      
      var $63 = HEAP[_table_b2a_hqx + (HEAP[$leftchar] & 63)];
      var $64 = HEAP[$ascii_data];
      HEAP[$64] = $63;
      
      var $66 = HEAP[$ascii_data] + 1;
      HEAP[$ascii_data] = $66;
      __label__ = 16;
      break;
     case 16:
      
      
      
      
      
      
      var $73 = HEAP[$ascii_data] - (HEAP[$rv] + 20);
      var $74 = __PyString_Resize($rv, $73);
      
      if ($74 < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      var $76 = HEAP[$rv];
      
      
      var $79 = HEAP[$76] - 1;
      var $80 = $76;
      HEAP[$80] = $79;
      
      
      
      if (HEAP[$76] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $88 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $89 = HEAP[$rv];
      FUNCTION_TABLE[$88]($89);
      __label__ = 19;
      break;
     case 19:
      HEAP[$rv] = 0;
      __label__ = 20;
      break;
     case 20:
      _PyBuffer_Release($pbin);
      var $90 = HEAP[$rv];
      HEAP[$0] = $90;
      __label__ = 21;
      break;
     case 21:
      var $91 = HEAP[$0];
      HEAP[$retval] = $91;
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
  function _binascii_rledecode_hqx($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 94;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 94);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $pin = __stackBase__ + 16;
      var $in_data = __stackBase__ + 68;
      var $out_data = __stackBase__ + 72;
      var $in_byte = __stackBase__ + 76;
      var $in_repeat = __stackBase__ + 77;
      var $rv = __stackBase__ + 78;
      var $in_len = __stackBase__ + 82;
      var $out_len = __stackBase__ + 86;
      var $out_len_left = __stackBase__ + 90;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str19, allocate([ $pin, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 2:
      
      var $5 = HEAP[$pin];
      HEAP[$in_data] = $5;
      
      var $7 = HEAP[$pin + 8];
      HEAP[$in_len] = $7;
      
      
      if (HEAP[$in_len] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str20, __str2, 758, ___PRETTY_FUNCTION___8897);
      throw "Reached an unreachable!";
     case 4:
      
      
      if (HEAP[$in_len] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($pin);
      var $12 = _PyString_FromStringAndSize(__str9, 0);
      HEAP[$0] = $12;
      __label__ = 88;
      break;
     case 6:
      
      
      if (HEAP[$in_len] > 1073741823) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _PyBuffer_Release($pin);
      var $15 = _PyErr_NoMemory();
      HEAP[$0] = $15;
      __label__ = 88;
      break;
     case 8:
      
      var $17 = HEAP[$in_len] * 2;
      HEAP[$out_len] = $17;
      var $18 = HEAP[$out_len];
      var $19 = _PyString_FromStringAndSize(0, $18);
      HEAP[$rv] = $19;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      _PyBuffer_Release($pin);
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 10:
      var $22 = HEAP[$out_len];
      HEAP[$out_len_left] = $22;
      
      
      
      var $26 = HEAP[$rv] + 20;
      HEAP[$out_data] = $26;
      
      var $28 = HEAP[$in_len] - 1;
      HEAP[$in_len] = $28;
      
      
      if (HEAP[$in_len] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      var $31 = HEAP[_Incomplete];
      _PyErr_SetString($31, __str9);
      var $32 = HEAP[$rv];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $45 = HEAP[$rv];
      FUNCTION_TABLE[$44]($45);
      __label__ = 13;
      break;
     case 13:
      _PyBuffer_Release($pin);
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 14:
      
      var $47 = HEAP[HEAP[$in_data]];
      HEAP[$in_byte] = $47;
      
      var $49 = HEAP[$in_data] + 1;
      HEAP[$in_data] = $49;
      
      var $51 = HEAP[$in_byte] == -112;
      if ($51) {
        __label__ = 15;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 15:
      
      var $53 = HEAP[$in_len] - 1;
      HEAP[$in_len] = $53;
      
      
      if (HEAP[$in_len] < 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      var $56 = HEAP[_Incomplete];
      _PyErr_SetString($56, __str9);
      var $57 = HEAP[$rv];
      
      
      var $60 = HEAP[$57] - 1;
      var $61 = $57;
      HEAP[$61] = $60;
      
      
      
      if (HEAP[$57] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $69 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $70 = HEAP[$rv];
      FUNCTION_TABLE[$69]($70);
      __label__ = 18;
      break;
     case 18:
      _PyBuffer_Release($pin);
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 19:
      
      var $72 = HEAP[HEAP[$in_data]];
      HEAP[$in_repeat] = $72;
      
      var $74 = HEAP[$in_data] + 1;
      HEAP[$in_data] = $74;
      
      
      if (HEAP[$in_repeat] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      var $77 = HEAP[_Error];
      _PyErr_SetString($77, __str21);
      _PyBuffer_Release($pin);
      var $78 = HEAP[$rv];
      
      
      var $81 = HEAP[$78] - 1;
      var $82 = $78;
      HEAP[$82] = $81;
      
      
      
      if (HEAP[$78] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $90 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $91 = HEAP[$rv];
      FUNCTION_TABLE[$90]($91);
      __label__ = 22;
      break;
     case 22:
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 23:
      
      var $93 = HEAP[$out_len_left] - 1;
      HEAP[$out_len_left] = $93;
      
      
      if (HEAP[$out_len_left] < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 24:
      
      
      if (HEAP[$out_len] > 1073741823) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $98 = _PyErr_NoMemory();
      HEAP[$0] = $98;
      __label__ = 88;
      break;
     case 26:
      
      var $100 = HEAP[$out_len] * 2;
      var $101 = __PyString_Resize($rv, $100);
      
      if ($101 < 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      var $103 = HEAP[$rv];
      
      
      var $106 = HEAP[$103] - 1;
      var $107 = $103;
      HEAP[$107] = $106;
      
      
      
      if (HEAP[$103] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $115 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $116 = HEAP[$rv];
      FUNCTION_TABLE[$115]($116);
      __label__ = 29;
      break;
     case 29:
      _PyBuffer_Release($pin);
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 30:
      
      
      
      
      
      var $122 = HEAP[$rv] + 20 + HEAP[$out_len];
      HEAP[$out_data] = $122;
      
      var $124 = HEAP[$out_len] - 1;
      HEAP[$out_len_left] = $124;
      
      var $126 = HEAP[$out_len] * 2;
      HEAP[$out_len] = $126;
      __label__ = 31;
      break;
     case 31:
      var $127 = HEAP[$out_data];
      HEAP[$127] = -112;
      
      var $129 = HEAP[$out_data] + 1;
      HEAP[$out_data] = $129;
      __label__ = 41;
      break;
     case 32:
      
      var $131 = HEAP[$out_len_left] - 1;
      HEAP[$out_len_left] = $131;
      
      
      if (HEAP[$out_len_left] < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 33:
      
      
      if (HEAP[$out_len] > 1073741823) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      var $136 = _PyErr_NoMemory();
      HEAP[$0] = $136;
      __label__ = 88;
      break;
     case 35:
      
      var $138 = HEAP[$out_len] * 2;
      var $139 = __PyString_Resize($rv, $138);
      
      if ($139 < 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 36:
      var $141 = HEAP[$rv];
      
      
      var $144 = HEAP[$141] - 1;
      var $145 = $141;
      HEAP[$145] = $144;
      
      
      
      if (HEAP[$141] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $153 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $154 = HEAP[$rv];
      FUNCTION_TABLE[$153]($154);
      __label__ = 38;
      break;
     case 38:
      _PyBuffer_Release($pin);
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 39:
      
      
      
      
      
      var $160 = HEAP[$rv] + 20 + HEAP[$out_len];
      HEAP[$out_data] = $160;
      
      var $162 = HEAP[$out_len] - 1;
      HEAP[$out_len_left] = $162;
      
      var $164 = HEAP[$out_len] * 2;
      HEAP[$out_len] = $164;
      __label__ = 40;
      break;
     case 40:
      var $165 = HEAP[$out_data];
      var $166 = HEAP[$in_byte];
      HEAP[$165] = $166;
      
      var $168 = HEAP[$out_data] + 1;
      HEAP[$out_data] = $168;
      __label__ = 41;
      break;
     case 41:
      __label__ = 82;
      break;
     case 42:
      
      var $170 = HEAP[$in_len] - 1;
      HEAP[$in_len] = $170;
      
      
      if (HEAP[$in_len] < 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 43:
      var $173 = HEAP[_Incomplete];
      _PyErr_SetString($173, __str9);
      var $174 = HEAP[$rv];
      
      
      var $177 = HEAP[$174] - 1;
      var $178 = $174;
      HEAP[$178] = $177;
      
      
      
      if (HEAP[$174] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      var $186 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $187 = HEAP[$rv];
      FUNCTION_TABLE[$186]($187);
      __label__ = 45;
      break;
     case 45:
      _PyBuffer_Release($pin);
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 46:
      
      var $189 = HEAP[HEAP[$in_data]];
      HEAP[$in_byte] = $189;
      
      var $191 = HEAP[$in_data] + 1;
      HEAP[$in_data] = $191;
      var $192 = HEAP[$in_byte];
      var $193 = reSign($192, 8, 1) == -112;
      if ($193) {
        __label__ = 47;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 47:
      
      var $195 = HEAP[$in_len] - 1;
      HEAP[$in_len] = $195;
      
      
      if (HEAP[$in_len] < 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 48:
      var $198 = HEAP[_Incomplete];
      _PyErr_SetString($198, __str9);
      var $199 = HEAP[$rv];
      
      
      var $202 = HEAP[$199] - 1;
      var $203 = $199;
      HEAP[$203] = $202;
      
      
      
      if (HEAP[$199] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      
      
      var $211 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $212 = HEAP[$rv];
      FUNCTION_TABLE[$211]($212);
      __label__ = 50;
      break;
     case 50:
      _PyBuffer_Release($pin);
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 51:
      
      var $214 = HEAP[HEAP[$in_data]];
      HEAP[$in_repeat] = $214;
      
      var $216 = HEAP[$in_data] + 1;
      HEAP[$in_data] = $216;
      
      
      if (HEAP[$in_repeat] == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 52:
      
      var $220 = HEAP[$out_len_left] - 1;
      HEAP[$out_len_left] = $220;
      
      
      if (HEAP[$out_len_left] < 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 53:
      
      
      if (HEAP[$out_len] > 1073741823) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      var $225 = _PyErr_NoMemory();
      HEAP[$0] = $225;
      __label__ = 88;
      break;
     case 55:
      
      var $227 = HEAP[$out_len] * 2;
      var $228 = __PyString_Resize($rv, $227);
      
      if ($228 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 56:
      var $230 = HEAP[$rv];
      
      
      var $233 = HEAP[$230] - 1;
      var $234 = $230;
      HEAP[$234] = $233;
      
      
      
      if (HEAP[$230] == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      
      
      
      
      var $242 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $243 = HEAP[$rv];
      FUNCTION_TABLE[$242]($243);
      __label__ = 58;
      break;
     case 58:
      _PyBuffer_Release($pin);
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 59:
      
      
      
      
      
      var $249 = HEAP[$rv] + 20 + HEAP[$out_len];
      HEAP[$out_data] = $249;
      
      var $251 = HEAP[$out_len] - 1;
      HEAP[$out_len_left] = $251;
      
      var $253 = HEAP[$out_len] * 2;
      HEAP[$out_len] = $253;
      __label__ = 60;
      break;
     case 60:
      var $254 = HEAP[$out_data];
      HEAP[$254] = -112;
      
      var $256 = HEAP[$out_data] + 1;
      HEAP[$out_data] = $256;
      __label__ = 72;
      break;
     case 61:
      
      var $258 = HEAP[$out_data] + -1;
      var $259 = HEAP[$258];
      HEAP[$in_byte] = $259;
      __label__ = 71;
      break;
     case 62:
      
      var $261 = HEAP[$out_len_left] - 1;
      HEAP[$out_len_left] = $261;
      
      
      if (HEAP[$out_len_left] < 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 63:
      
      
      if (HEAP[$out_len] > 1073741823) {
        __label__ = 64;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 64:
      var $266 = _PyErr_NoMemory();
      HEAP[$0] = $266;
      __label__ = 88;
      break;
     case 65:
      
      var $268 = HEAP[$out_len] * 2;
      var $269 = __PyString_Resize($rv, $268);
      
      if ($269 < 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 66:
      var $271 = HEAP[$rv];
      
      
      var $274 = HEAP[$271] - 1;
      var $275 = $271;
      HEAP[$275] = $274;
      
      
      
      if (HEAP[$271] == 0) {
        __label__ = 67;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 67:
      
      
      
      
      var $283 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $284 = HEAP[$rv];
      FUNCTION_TABLE[$283]($284);
      __label__ = 68;
      break;
     case 68:
      _PyBuffer_Release($pin);
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 69:
      
      
      
      
      
      var $290 = HEAP[$rv] + 20 + HEAP[$out_len];
      HEAP[$out_data] = $290;
      
      var $292 = HEAP[$out_len] - 1;
      HEAP[$out_len_left] = $292;
      
      var $294 = HEAP[$out_len] * 2;
      HEAP[$out_len] = $294;
      __label__ = 70;
      break;
     case 70:
      var $295 = HEAP[$out_data];
      var $296 = HEAP[$in_byte];
      HEAP[$295] = $296;
      
      var $298 = HEAP[$out_data] + 1;
      HEAP[$out_data] = $298;
      __label__ = 71;
      break;
     case 71:
      
      var $300 = HEAP[$in_repeat] - 1;
      HEAP[$in_repeat] = $300;
      
      
      if (HEAP[$in_repeat] != 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 72:
      __label__ = 82;
      break;
     case 73:
      
      var $304 = HEAP[$out_len_left] - 1;
      HEAP[$out_len_left] = $304;
      
      
      if (HEAP[$out_len_left] < 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 74:
      
      
      if (HEAP[$out_len] > 1073741823) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      var $309 = _PyErr_NoMemory();
      HEAP[$0] = $309;
      __label__ = 88;
      break;
     case 76:
      
      var $311 = HEAP[$out_len] * 2;
      var $312 = __PyString_Resize($rv, $311);
      
      if ($312 < 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 77:
      var $314 = HEAP[$rv];
      
      
      var $317 = HEAP[$314] - 1;
      var $318 = $314;
      HEAP[$318] = $317;
      
      
      
      if (HEAP[$314] == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 78:
      
      
      
      
      var $326 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $327 = HEAP[$rv];
      FUNCTION_TABLE[$326]($327);
      __label__ = 79;
      break;
     case 79:
      _PyBuffer_Release($pin);
      HEAP[$0] = 0;
      __label__ = 88;
      break;
     case 80:
      
      
      
      
      
      var $333 = HEAP[$rv] + 20 + HEAP[$out_len];
      HEAP[$out_data] = $333;
      
      var $335 = HEAP[$out_len] - 1;
      HEAP[$out_len_left] = $335;
      
      var $337 = HEAP[$out_len] * 2;
      HEAP[$out_len] = $337;
      __label__ = 81;
      break;
     case 81:
      var $338 = HEAP[$out_data];
      var $339 = HEAP[$in_byte];
      HEAP[$338] = $339;
      
      var $341 = HEAP[$out_data] + 1;
      HEAP[$out_data] = $341;
      __label__ = 82;
      break;
     case 82:
      
      
      if (HEAP[$in_len] > 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 83:
      
      
      
      
      
      
      var $350 = HEAP[$out_data] - (HEAP[$rv] + 20);
      var $351 = __PyString_Resize($rv, $350);
      
      if ($351 < 0) {
        __label__ = 84;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 84:
      var $353 = HEAP[$rv];
      
      
      var $356 = HEAP[$353] - 1;
      var $357 = $353;
      HEAP[$357] = $356;
      
      
      
      if (HEAP[$353] == 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      
      
      
      
      var $365 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $366 = HEAP[$rv];
      FUNCTION_TABLE[$365]($366);
      __label__ = 86;
      break;
     case 86:
      HEAP[$rv] = 0;
      __label__ = 87;
      break;
     case 87:
      _PyBuffer_Release($pin);
      var $367 = HEAP[$rv];
      HEAP[$0] = $367;
      __label__ = 88;
      break;
     case 88:
      var $368 = HEAP[$0];
      HEAP[$retval] = $368;
      __label__ = 89;
      break;
     case 89:
      var $retval88 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval88;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _binascii_crc_hqx($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 80;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 80);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $pin = __stackBase__ + 16;
      var $bin_data = __stackBase__ + 68;
      var $crc = __stackBase__ + 72;
      var $len = __stackBase__ + 76;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str22, allocate([ $pin, 0, 0, 0, $crc, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$pin];
      HEAP[$bin_data] = $5;
      
      var $7 = HEAP[$pin + 8];
      HEAP[$len] = $7;
      __label__ = 4;
      break;
     case 3:
      
      
      var $10 = HEAP[$crc] << 8 & 65280;
      
      
      var $13 = HEAP[$crc] >>> 0 >>> 8 & 255;
      
      var $15 = HEAP[HEAP[$bin_data]];
      var $16 = unSign($15, 8, 1);
      
      
      var $19 = HEAP[_crctab_hqx + ($13 ^ $16) * 2];
      var $20 = unSign($19, 16, 1);
      var $21 = $10 ^ $20;
      HEAP[$crc] = $21;
      
      var $23 = HEAP[$bin_data] + 1;
      HEAP[$bin_data] = $23;
      __label__ = 4;
      break;
     case 4:
      
      
      var $26 = HEAP[$len] > 0;
      
      var $28 = HEAP[$len] - 1;
      HEAP[$len] = $28;
      
      if ($26 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      _PyBuffer_Release($pin);
      var $29 = HEAP[$crc];
      var $30 = __Py_BuildValue_SizeT(__str23, allocate([ $29, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $30;
      __label__ = 6;
      break;
     case 6:
      var $31 = HEAP[$0];
      HEAP[$retval] = $31;
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
  function _binascii_crc32($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 84;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 84);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $pbin = __stackBase__ + 16;
      var $bin_data = __stackBase__ + 68;
      var $crc = __stackBase__ + 72;
      var $len = __stackBase__ + 76;
      var $result = __stackBase__ + 80;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$crc] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str24, allocate([ $pbin, 0, 0, 0, $crc, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$pbin];
      HEAP[$bin_data] = $5;
      
      var $7 = HEAP[$pbin + 8];
      HEAP[$len] = $7;
      
      var $not = HEAP[$crc] ^ -1;
      HEAP[$crc] = $not;
      __label__ = 4;
      break;
     case 3:
      
      var $10 = HEAP[HEAP[$bin_data]];
      var $11 = unSign($10, 8, 1);
      
      
      
      
      
      
      
      var $19 = HEAP[_crc_32_tab + (($11 ^ HEAP[$crc]) & 255) * 4] ^ HEAP[$crc] >>> 0 >>> 8;
      HEAP[$crc] = $19;
      
      var $21 = HEAP[$bin_data] + 1;
      HEAP[$bin_data] = $21;
      __label__ = 4;
      break;
     case 4:
      
      
      var $24 = HEAP[$len] > 0;
      
      var $26 = HEAP[$len] - 1;
      HEAP[$len] = $26;
      
      if ($24 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $not6 = HEAP[$crc] ^ -1;
      HEAP[$result] = $not6;
      _PyBuffer_Release($pbin);
      var $28 = HEAP[$result];
      var $29 = _PyInt_FromLong($28);
      HEAP[$0] = $29;
      __label__ = 6;
      break;
     case 6:
      var $30 = HEAP[$0];
      HEAP[$retval] = $30;
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
  function _binascii_hexlify($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 95;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 95);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_145 = __stackBase__ + 12;
      var $iftmp_142 = __stackBase__ + 13;
      var $0 = __stackBase__ + 14;
      var $parg = __stackBase__ + 18;
      var $argbuf = __stackBase__ + 70;
      var $arglen = __stackBase__ + 74;
      var $retval1 = __stackBase__ + 78;
      var $retbuf = __stackBase__ + 82;
      var $i = __stackBase__ + 86;
      var $j = __stackBase__ + 90;
      var $c = __stackBase__ + 94;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str25, allocate([ $parg, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$parg];
      HEAP[$argbuf] = $5;
      
      var $7 = HEAP[$parg + 8];
      HEAP[$arglen] = $7;
      
      
      if (HEAP[$arglen] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str26, __str2, 1069, ___PRETTY_FUNCTION___9212);
      throw "Reached an unreachable!";
     case 4:
      
      
      if (HEAP[$arglen] > 1073741823) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($parg);
      var $12 = _PyErr_NoMemory();
      HEAP[$0] = $12;
      __label__ = 18;
      break;
     case 6:
      
      var $14 = HEAP[$arglen] * 2;
      var $15 = _PyString_FromStringAndSize(0, $14);
      HEAP[$retval1] = $15;
      
      
      if (HEAP[$retval1] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _PyBuffer_Release($parg);
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 8:
      
      
      
      var $21 = HEAP[$retval1] + 20;
      HEAP[$retbuf] = $21;
      HEAP[$j] = 0;
      var $22 = HEAP[$j];
      HEAP[$i] = $22;
      __label__ = 16;
      break;
     case 9:
      
      
      
      
      
      var $28 = HEAP[HEAP[$argbuf] + HEAP[$i]] >> 4 & 15;
      HEAP[$c] = $28;
      
      
      if (HEAP[$c] > 9) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $32 = HEAP[$c] + 87;
      HEAP[$iftmp_142] = $32;
      __label__ = 12;
      break;
     case 11:
      
      var $34 = HEAP[$c] + 48;
      HEAP[$iftmp_142] = $34;
      __label__ = 12;
      break;
     case 12:
      var $35 = HEAP[$iftmp_142];
      HEAP[$c] = $35;
      
      
      var $38 = HEAP[$retbuf] + HEAP[$j];
      var $39 = HEAP[$c];
      HEAP[$38] = $39;
      
      var $41 = HEAP[$j] + 1;
      HEAP[$j] = $41;
      
      
      
      
      var $46 = HEAP[HEAP[$argbuf] + HEAP[$i]] & 15;
      HEAP[$c] = $46;
      
      
      if (HEAP[$c] > 9) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      var $50 = HEAP[$c] + 87;
      HEAP[$iftmp_145] = $50;
      __label__ = 15;
      break;
     case 14:
      
      var $52 = HEAP[$c] + 48;
      HEAP[$iftmp_145] = $52;
      __label__ = 15;
      break;
     case 15:
      var $53 = HEAP[$iftmp_145];
      HEAP[$c] = $53;
      
      
      var $56 = HEAP[$retbuf] + HEAP[$j];
      var $57 = HEAP[$c];
      HEAP[$56] = $57;
      
      var $59 = HEAP[$j] + 1;
      HEAP[$j] = $59;
      
      var $61 = HEAP[$i] + 1;
      HEAP[$i] = $61;
      __label__ = 16;
      break;
     case 16:
      
      
      
      if (HEAP[$i] < HEAP[$arglen]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      _PyBuffer_Release($parg);
      var $65 = HEAP[$retval1];
      HEAP[$0] = $65;
      __label__ = 18;
      break;
     case 18:
      var $66 = HEAP[$0];
      HEAP[$retval] = $66;
      __label__ = 19;
      break;
     case 19:
      var $retval19 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _to_int($c) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $c_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$c_addr] = $c;
      var $1 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$1] + 2 * HEAP[$c_addr]] & 2048) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $10 = HEAP[$c_addr] - 48;
      HEAP[$0] = $10;
      __label__ = 8;
      break;
     case 2:
      var $11 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$11] + 2 * HEAP[$c_addr]] & 256) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $19 = HEAP[$c_addr];
      var $20 = _tolower($19);
      HEAP[$c_addr] = $20;
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[$c_addr] > 96) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      if (HEAP[$c_addr] <= 102) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $26 = HEAP[$c_addr] - 87;
      HEAP[$0] = $26;
      __label__ = 8;
      break;
     case 7:
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 8:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
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
  function _binascii_unhexlify($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 100;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 100);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $parg = __stackBase__ + 16;
      var $argbuf = __stackBase__ + 68;
      var $arglen = __stackBase__ + 72;
      var $retval1 = __stackBase__ + 76;
      var $retbuf = __stackBase__ + 80;
      var $i = __stackBase__ + 84;
      var $j = __stackBase__ + 88;
      var $top = __stackBase__ + 92;
      var $bot = __stackBase__ + 96;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = __PyArg_ParseTuple_SizeT($1, __str27, allocate([ $parg, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$parg];
      HEAP[$argbuf] = $5;
      
      var $7 = HEAP[$parg + 8];
      HEAP[$arglen] = $7;
      
      
      if (HEAP[$arglen] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str26, __str2, 1132, ___PRETTY_FUNCTION___9287);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      
      if ((HEAP[$arglen] & 1 & 255) != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($parg);
      var $13 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($13, __str28);
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 6:
      
      var $15 = HEAP[$arglen] / 2 | 0;
      var $16 = _PyString_FromStringAndSize(0, $15);
      HEAP[$retval1] = $16;
      
      
      if (HEAP[$retval1] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _PyBuffer_Release($parg);
      HEAP[$0] = 0;
      __label__ = 18;
      break;
     case 8:
      
      
      
      var $22 = HEAP[$retval1] + 20;
      HEAP[$retbuf] = $22;
      HEAP[$j] = 0;
      var $23 = HEAP[$j];
      HEAP[$i] = $23;
      __label__ = 13;
      break;
     case 9:
      
      
      
      
      var $28 = HEAP[HEAP[$argbuf] + HEAP[$i]];
      var $29 = _to_int($28);
      HEAP[$top] = $29;
      
      
      
      
      
      var $35 = HEAP[HEAP[$argbuf] + (HEAP[$i] + 1)];
      var $36 = _to_int($35);
      HEAP[$bot] = $36;
      
      var $38 = HEAP[$top] == -1;
      if ($38) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      var $40 = HEAP[$bot] == -1;
      if ($40) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $41 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($41, __str29);
      __label__ = 15;
      break;
     case 12:
      
      
      
      
      
      var $47 = ((HEAP[$top] & 255) << 4) + (HEAP[$bot] & 255) & 255;
      
      
      var $50 = HEAP[$retbuf] + HEAP[$j] & 4294967295;
      HEAP[$50] = $47;
      
      var $52 = HEAP[$j] + 1 & 4294967295;
      HEAP[$j] = $52;
      
      var $54 = HEAP[$i] + 2;
      HEAP[$i] = $54;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (HEAP[$i] < HEAP[$arglen]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      _PyBuffer_Release($parg);
      var $58 = HEAP[$retval1];
      HEAP[$0] = $58;
      __label__ = 18;
      break;
     case 15:
      _PyBuffer_Release($parg);
      
      
      
      var $62 = HEAP[HEAP[$retval1]] - 1;
      
      var $64 = HEAP[$retval1];
      HEAP[$64] = $62;
      
      
      
      
      if (HEAP[HEAP[$retval1]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[$retval1] + 4] + 24];
      var $74 = HEAP[$retval1];
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
  function _binascii_a2b_qp($self, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 101;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 101);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kwargs_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $in = __stackBase__ + 20;
      var $out = __stackBase__ + 24;
      var $ch = __stackBase__ + 28;
      var $pdata = __stackBase__ + 29;
      var $data = __stackBase__ + 81;
      var $odata = __stackBase__ + 85;
      var $datalen = __stackBase__ + 89;
      var $rv = __stackBase__ + 93;
      var $header = __stackBase__ + 97;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwargs_addr] = $kwargs;
      HEAP[$datalen] = 0;
      HEAP[$header] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwargs_addr];
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str30, _kwlist_9353, allocate([ $pdata, 0, 0, 0, $header, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 42;
      break;
     case 2:
      
      var $6 = HEAP[$pdata];
      HEAP[$data] = $6;
      
      var $8 = HEAP[$pdata + 8];
      HEAP[$datalen] = $8;
      var $9 = HEAP[$datalen];
      var $10 = _PyMem_Malloc($9);
      HEAP[$odata] = $10;
      
      
      if (HEAP[$odata] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyBuffer_Release($pdata);
      var $13 = _PyErr_NoMemory();
      HEAP[$0] = 0;
      __label__ = 42;
      break;
     case 4:
      var $14 = HEAP[$datalen];
      var $15 = HEAP[$odata];
      _llvm_memset_p0i8_i32($15, 0, $14, 1, 0);
      HEAP[$out] = 0;
      var $16 = HEAP[$out];
      HEAP[$in] = $16;
      __label__ = 38;
      break;
     case 5:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 61) {
        __label__ = 6;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 6:
      
      var $23 = HEAP[$in] + 1;
      HEAP[$in] = $23;
      
      
      
      if (HEAP[$in] >= HEAP[$datalen]) {
        __label__ = 39;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 10) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 13) {
        __label__ = 9;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 9:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] != 10) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      __label__ = 12;
      break;
     case 11:
      
      var $43 = HEAP[$in] + 1;
      HEAP[$in] = $43;
      __label__ = 12;
      break;
     case 12:
      
      
      
      if (HEAP[$in] >= HEAP[$datalen]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] != 10) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      if (HEAP[$in] < HEAP[$datalen]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      var $56 = HEAP[$in] + 1;
      HEAP[$in] = $56;
      __label__ = 16;
      break;
     case 16:
      __label__ = 33;
      break;
     case 17:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 61) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      var $64 = HEAP[$odata] + HEAP[$out];
      HEAP[$64] = 61;
      
      var $66 = HEAP[$out] + 1;
      HEAP[$out] = $66;
      
      var $68 = HEAP[$in] + 1;
      HEAP[$in] = $68;
      __label__ = 33;
      break;
     case 19:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] <= 64) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] <= 70) {
        __label__ = 25;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] <= 96) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] <= 102) {
        __label__ = 25;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] <= 47) {
        __label__ = 32;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] <= 57) {
        __label__ = 25;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 25:
      
      
      
      
      
      
      if (HEAP[HEAP[$data] + (HEAP[$in] + 1)] <= 64) {
        __label__ = 27;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      
      
      if (HEAP[HEAP[$data] + (HEAP[$in] + 1)] <= 70) {
        __label__ = 31;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      
      
      if (HEAP[HEAP[$data] + (HEAP[$in] + 1)] <= 96) {
        __label__ = 29;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      
      
      
      if (HEAP[HEAP[$data] + (HEAP[$in] + 1)] <= 102) {
        __label__ = 31;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      
      
      
      if (HEAP[HEAP[$data] + (HEAP[$in] + 1)] <= 47) {
        __label__ = 32;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      
      
      
      if (HEAP[HEAP[$data] + (HEAP[$in] + 1)] <= 57) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      
      
      
      
      var $143 = HEAP[_table_hex + HEAP[HEAP[$data] + HEAP[$in]] * 4] << 4 & 255;
      HEAP[$ch] = $143;
      
      var $145 = HEAP[$in] + 1;
      HEAP[$in] = $145;
      
      
      
      
      
      
      
      
      
      var $155 = HEAP[_table_hex + HEAP[HEAP[$data] + HEAP[$in]] * 4] & 255 | HEAP[$ch];
      HEAP[$ch] = $155;
      
      var $157 = HEAP[$in] + 1;
      HEAP[$in] = $157;
      var $158 = HEAP[$ch];
      
      
      var $161 = HEAP[$odata] + HEAP[$out];
      HEAP[$161] = $158;
      
      var $163 = HEAP[$out] + 1;
      HEAP[$out] = $163;
      __label__ = 33;
      break;
     case 32:
      
      
      var $166 = HEAP[$odata] + HEAP[$out];
      HEAP[$166] = 61;
      
      var $168 = HEAP[$out] + 1;
      HEAP[$out] = $168;
      __label__ = 33;
      break;
     case 33:
      __label__ = 38;
      break;
     case 34:
      
      
      if (HEAP[$header] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] != 95) {
        __label__ = 37;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      var $178 = HEAP[$odata] + HEAP[$out];
      HEAP[$178] = 32;
      
      var $180 = HEAP[$out] + 1;
      HEAP[$out] = $180;
      
      var $182 = HEAP[$in] + 1;
      HEAP[$in] = $182;
      __label__ = 38;
      break;
     case 37:
      
      
      
      var $186 = HEAP[HEAP[$data] + HEAP[$in]];
      
      
      var $189 = HEAP[$odata] + HEAP[$out];
      HEAP[$189] = $186;
      
      var $191 = HEAP[$in] + 1;
      HEAP[$in] = $191;
      
      var $193 = HEAP[$out] + 1;
      HEAP[$out] = $193;
      __label__ = 38;
      break;
     case 38:
      
      
      
      if (HEAP[$in] < HEAP[$datalen]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      var $197 = HEAP[$odata];
      var $198 = HEAP[$out];
      var $199 = _PyString_FromStringAndSize($197, $198);
      HEAP[$rv] = $199;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      _PyBuffer_Release($pdata);
      var $202 = HEAP[$odata];
      _PyMem_Free($202);
      HEAP[$0] = 0;
      __label__ = 42;
      break;
     case 41:
      _PyBuffer_Release($pdata);
      var $203 = HEAP[$odata];
      _PyMem_Free($203);
      var $204 = HEAP[$rv];
      HEAP[$0] = $204;
      __label__ = 42;
      break;
     case 42:
      var $205 = HEAP[$0];
      HEAP[$retval] = $205;
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
  function _to_hex($ch, $s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 17;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 17);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ch_addr = __stackBase__;
      var $s_addr = __stackBase__ + 1;
      var $retval = __stackBase__ + 5;
      var $0 = __stackBase__ + 9;
      var $uvalue = __stackBase__ + 13;
      
      HEAP[$ch_addr] = $ch;
      HEAP[$s_addr] = $s;
      
      var $2 = HEAP[$ch_addr];
      HEAP[$uvalue] = $2;
      
      
      
      var $6 = HEAP[__str33 + (HEAP[$uvalue] & 15)];
      
      var $8 = HEAP[$s_addr] + 1;
      HEAP[$8] = $6;
      var $9 = HEAP[$uvalue];
      var $10 = Math.floor($9 / 16);
      HEAP[$uvalue] = $10;
      
      
      
      var $14 = HEAP[__str33 + (HEAP[$uvalue] & 15)];
      
      var $16 = HEAP[$s_addr];
      HEAP[$16] = $14;
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
  function _binascii_b2a_qp($self, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 125;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 125);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kwargs_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $in = __stackBase__ + 20;
      var $out = __stackBase__ + 24;
      var $pdata = __stackBase__ + 28;
      var $data = __stackBase__ + 80;
      var $odata = __stackBase__ + 84;
      var $datalen = __stackBase__ + 88;
      var $odatalen = __stackBase__ + 92;
      var $rv = __stackBase__ + 96;
      var $linelen = __stackBase__ + 100;
      var $istext = __stackBase__ + 104;
      var $quotetabs = __stackBase__ + 108;
      var $header = __stackBase__ + 112;
      var $ch = __stackBase__ + 116;
      var $crlf = __stackBase__ + 117;
      var $p = __stackBase__ + 121;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwargs_addr] = $kwargs;
      HEAP[$datalen] = 0;
      HEAP[$odatalen] = 0;
      HEAP[$linelen] = 0;
      HEAP[$istext] = 1;
      HEAP[$quotetabs] = 0;
      HEAP[$header] = 0;
      HEAP[$crlf] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwargs_addr];
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str34, _kwlist_9474, allocate([ $pdata, 0, 0, 0, $quotetabs, 0, 0, 0, $istext, 0, 0, 0, $header, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 117;
      break;
     case 2:
      
      var $6 = HEAP[$pdata];
      HEAP[$data] = $6;
      
      var $8 = HEAP[$pdata + 8];
      HEAP[$datalen] = $8;
      var $9 = HEAP[$datalen];
      var $10 = HEAP[$data];
      var $11 = _memchr($10, 10, $9);
      HEAP[$p] = $11;
      
      
      if (HEAP[$p] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      if (HEAP[$p] > HEAP[$data]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      var $18 = HEAP[$p] + -1;
      
      
      if (HEAP[$18] == 13) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$crlf] = 1;
      __label__ = 6;
      break;
     case 6:
      HEAP[$in] = 0;
      __label__ = 57;
      break;
     case 7:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] > 126) {
        __label__ = 29;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 61) {
        __label__ = 29;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$header] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 95) {
        __label__ = 29;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] != 46) {
        __label__ = 16;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if (HEAP[$linelen] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      
      if (HEAP[HEAP[$data] + (HEAP[$in] + 1)] == 10) {
        __label__ = 29;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      
      
      if (HEAP[HEAP[$data] + (HEAP[$in] + 1)] == 13) {
        __label__ = 29;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      
      
      if (HEAP[HEAP[$data] + (HEAP[$in] + 1)] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      if (HEAP[$istext] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 13) {
        __label__ = 29;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 10) {
        __label__ = 29;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 9) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 32) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      if (HEAP[$in] + 1 == HEAP[$datalen]) {
        __label__ = 29;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] > 32) {
        __label__ = 34;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 13) {
        __label__ = 34;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 10) {
        __label__ = 34;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      if (HEAP[$quotetabs] != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      if (HEAP[$quotetabs] != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 9) {
        __label__ = 34;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] != 32) {
        __label__ = 29;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 29:
      
      
      
      if (HEAP[$linelen] + 3 > 75) {
        __label__ = 30;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 30:
      HEAP[$linelen] = 0;
      
      
      if (HEAP[$crlf] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      var $124 = HEAP[$odatalen] + 3;
      HEAP[$odatalen] = $124;
      __label__ = 33;
      break;
     case 32:
      
      var $126 = HEAP[$odatalen] + 2;
      HEAP[$odatalen] = $126;
      __label__ = 33;
      break;
     case 33:
      
      var $128 = HEAP[$linelen] + 3;
      HEAP[$linelen] = $128;
      
      var $130 = HEAP[$odatalen] + 3;
      HEAP[$odatalen] = $130;
      
      var $132 = HEAP[$in] + 1;
      HEAP[$in] = $132;
      __label__ = 57;
      break;
     case 34:
      
      
      if (HEAP[$istext] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 10) {
        __label__ = 39;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      
      
      if (HEAP[$in] + 1 >= HEAP[$datalen]) {
        __label__ = 50;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] != 13) {
        __label__ = 50;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      
      
      
      
      
      
      if (HEAP[HEAP[$data] + (HEAP[$in] + 1)] == 10) {
        __label__ = 39;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 39:
      HEAP[$linelen] = 0;
      
      
      if ((HEAP[$in] | 0) != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 40:
      
      
      
      
      var $161 = HEAP[HEAP[$data] + (HEAP[$in] - 1)];
      var $162 = reSign($161, 8, 1) == 32;
      if ($162) {
        __label__ = 42;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 41:
      
      
      
      
      var $167 = HEAP[HEAP[$data] + (HEAP[$in] - 1)];
      var $168 = reSign($167, 8, 1) == 9;
      if ($168) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      var $170 = HEAP[$odatalen] + 2;
      HEAP[$odatalen] = $170;
      __label__ = 43;
      break;
     case 43:
      
      
      if (HEAP[$crlf] != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      var $174 = HEAP[$odatalen] + 2;
      HEAP[$odatalen] = $174;
      __label__ = 46;
      break;
     case 45:
      
      var $176 = HEAP[$odatalen] + 1;
      HEAP[$odatalen] = $176;
      __label__ = 46;
      break;
     case 46:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 13) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      
      var $183 = HEAP[$in] + 2;
      HEAP[$in] = $183;
      __label__ = 49;
      break;
     case 48:
      
      var $185 = HEAP[$in] + 1;
      HEAP[$in] = $185;
      __label__ = 49;
      break;
     case 49:
      __label__ = 57;
      break;
     case 50:
      
      
      
      
      if (HEAP[$in] + 1 != HEAP[$datalen]) {
        __label__ = 51;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 51:
      
      
      
      
      
      
      if (HEAP[HEAP[$data] + (HEAP[$in] + 1)] != 10) {
        __label__ = 52;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 52:
      
      
      
      if (HEAP[$linelen] + 1 > 75) {
        __label__ = 53;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 53:
      HEAP[$linelen] = 0;
      
      
      if (HEAP[$crlf] != 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      
      var $202 = HEAP[$odatalen] + 3;
      HEAP[$odatalen] = $202;
      __label__ = 56;
      break;
     case 55:
      
      var $204 = HEAP[$odatalen] + 2;
      HEAP[$odatalen] = $204;
      __label__ = 56;
      break;
     case 56:
      
      var $206 = HEAP[$linelen] + 1;
      HEAP[$linelen] = $206;
      
      var $208 = HEAP[$odatalen] + 1;
      HEAP[$odatalen] = $208;
      
      var $210 = HEAP[$in] + 1;
      HEAP[$in] = $210;
      __label__ = 57;
      break;
     case 57:
      
      
      
      if (HEAP[$in] < HEAP[$datalen]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 58:
      var $214 = HEAP[$odatalen];
      var $215 = _PyMem_Malloc($214);
      HEAP[$odata] = $215;
      
      
      if (HEAP[$odata] == 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      _PyBuffer_Release($pdata);
      var $218 = _PyErr_NoMemory();
      HEAP[$0] = 0;
      __label__ = 117;
      break;
     case 60:
      var $219 = HEAP[$odatalen];
      var $220 = HEAP[$odata];
      _llvm_memset_p0i8_i32($220, 0, $219, 1, 0);
      HEAP[$linelen] = 0;
      HEAP[$out] = 0;
      var $221 = HEAP[$out];
      HEAP[$in] = $221;
      __label__ = 113;
      break;
     case 61:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] > 126) {
        __label__ = 83;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 62:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 61) {
        __label__ = 83;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 63:
      
      
      if (HEAP[$header] == 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 64:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 95) {
        __label__ = 83;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 65:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] != 46) {
        __label__ = 70;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 66:
      
      
      if (HEAP[$linelen] != 0) {
        __label__ = 70;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 67:
      
      
      
      
      
      
      if (HEAP[HEAP[$data] + (HEAP[$in] + 1)] == 10) {
        __label__ = 83;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 68:
      
      
      
      
      
      
      if (HEAP[HEAP[$data] + (HEAP[$in] + 1)] == 13) {
        __label__ = 83;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 69:
      
      
      
      
      
      
      if (HEAP[HEAP[$data] + (HEAP[$in] + 1)] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 70:
      
      
      if (HEAP[$istext] != 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 71:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 13) {
        __label__ = 83;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 72:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 10) {
        __label__ = 83;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 73:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 9) {
        __label__ = 75;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 74:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 32) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      
      
      
      
      if (HEAP[$in] + 1 == HEAP[$datalen]) {
        __label__ = 83;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 76:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] > 32) {
        __label__ = 88;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 77:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 13) {
        __label__ = 88;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 78:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 10) {
        __label__ = 88;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 79:
      
      
      if (HEAP[$quotetabs] != 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 80:
      
      
      if (HEAP[$quotetabs] != 0) {
        __label__ = 88;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 81:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 9) {
        __label__ = 88;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 82:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] != 32) {
        __label__ = 83;
        break;
      } else {
        __label__ = 88;
        break;
      }
     case 83:
      
      
      
      if (HEAP[$linelen] + 3 > 75) {
        __label__ = 84;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 84:
      
      
      var $324 = HEAP[$odata] + HEAP[$out];
      HEAP[$324] = 61;
      
      var $326 = HEAP[$out] + 1;
      HEAP[$out] = $326;
      
      
      if (HEAP[$crlf] != 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      
      
      var $331 = HEAP[$odata] + HEAP[$out];
      HEAP[$331] = 13;
      
      var $333 = HEAP[$out] + 1;
      HEAP[$out] = $333;
      __label__ = 86;
      break;
     case 86:
      
      
      var $336 = HEAP[$odata] + HEAP[$out];
      HEAP[$336] = 10;
      
      var $338 = HEAP[$out] + 1;
      HEAP[$out] = $338;
      HEAP[$linelen] = 0;
      __label__ = 87;
      break;
     case 87:
      
      
      var $341 = HEAP[$odata] + HEAP[$out];
      HEAP[$341] = 61;
      
      var $343 = HEAP[$out] + 1;
      HEAP[$out] = $343;
      
      
      var $346 = HEAP[$odata] + HEAP[$out];
      
      
      
      
      
      var $352 = HEAP[HEAP[$data] + HEAP[$in]] & 255;
      var $353 = _to_hex($352, $346);
      
      var $355 = HEAP[$out] + 2;
      HEAP[$out] = $355;
      
      var $357 = HEAP[$in] + 1;
      HEAP[$in] = $357;
      
      var $359 = HEAP[$linelen] + 3;
      HEAP[$linelen] = $359;
      __label__ = 113;
      break;
     case 88:
      
      
      if (HEAP[$istext] == 0) {
        __label__ = 103;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 89:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 10) {
        __label__ = 93;
        break;
      } else {
        __label__ = 90;
        break;
      }
     case 90:
      
      
      
      
      if (HEAP[$in] + 1 >= HEAP[$datalen]) {
        __label__ = 103;
        break;
      } else {
        __label__ = 91;
        break;
      }
     case 91:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] != 13) {
        __label__ = 103;
        break;
      } else {
        __label__ = 92;
        break;
      }
     case 92:
      
      
      
      
      
      
      if (HEAP[HEAP[$data] + (HEAP[$in] + 1)] == 10) {
        __label__ = 93;
        break;
      } else {
        __label__ = 103;
        break;
      }
     case 93:
      HEAP[$linelen] = 0;
      
      
      if (HEAP[$out] != 0) {
        __label__ = 94;
        break;
      } else {
        __label__ = 97;
        break;
      }
     case 94:
      
      
      
      
      
      
      if (HEAP[HEAP[$odata] + (HEAP[$out] - 1)] == 32) {
        __label__ = 96;
        break;
      } else {
        __label__ = 95;
        break;
      }
     case 95:
      
      
      
      
      
      
      if (HEAP[HEAP[$odata] + (HEAP[$out] - 1)] == 9) {
        __label__ = 96;
        break;
      } else {
        __label__ = 97;
        break;
      }
     case 96:
      
      
      
      
      var $400 = HEAP[HEAP[$odata] + (HEAP[$out] - 1)];
      HEAP[$ch] = $400;
      
      
      
      var $404 = HEAP[$odata] + (HEAP[$out] - 1);
      HEAP[$404] = 61;
      
      
      var $407 = HEAP[$odata] + HEAP[$out];
      
      
      var $410 = HEAP[$ch] & 255;
      var $411 = _to_hex($410, $407);
      
      var $413 = HEAP[$out] + 2;
      HEAP[$out] = $413;
      __label__ = 97;
      break;
     case 97:
      
      
      if (HEAP[$crlf] != 0) {
        __label__ = 98;
        break;
      } else {
        __label__ = 99;
        break;
      }
     case 98:
      
      
      var $418 = HEAP[$odata] + HEAP[$out];
      HEAP[$418] = 13;
      
      var $420 = HEAP[$out] + 1;
      HEAP[$out] = $420;
      __label__ = 99;
      break;
     case 99:
      
      
      var $423 = HEAP[$odata] + HEAP[$out];
      HEAP[$423] = 10;
      
      var $425 = HEAP[$out] + 1;
      HEAP[$out] = $425;
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] == 13) {
        __label__ = 100;
        break;
      } else {
        __label__ = 101;
        break;
      }
     case 100:
      
      var $432 = HEAP[$in] + 2;
      HEAP[$in] = $432;
      __label__ = 102;
      break;
     case 101:
      
      var $434 = HEAP[$in] + 1;
      HEAP[$in] = $434;
      __label__ = 102;
      break;
     case 102:
      __label__ = 113;
      break;
     case 103:
      
      
      
      
      if (HEAP[$in] + 1 != HEAP[$datalen]) {
        __label__ = 104;
        break;
      } else {
        __label__ = 109;
        break;
      }
     case 104:
      
      
      
      
      
      
      if (HEAP[HEAP[$data] + (HEAP[$in] + 1)] != 10) {
        __label__ = 105;
        break;
      } else {
        __label__ = 109;
        break;
      }
     case 105:
      
      
      
      if (HEAP[$linelen] + 1 > 75) {
        __label__ = 106;
        break;
      } else {
        __label__ = 109;
        break;
      }
     case 106:
      
      
      var $450 = HEAP[$odata] + HEAP[$out];
      HEAP[$450] = 61;
      
      var $452 = HEAP[$out] + 1;
      HEAP[$out] = $452;
      
      
      if (HEAP[$crlf] != 0) {
        __label__ = 107;
        break;
      } else {
        __label__ = 108;
        break;
      }
     case 107:
      
      
      var $457 = HEAP[$odata] + HEAP[$out];
      HEAP[$457] = 13;
      
      var $459 = HEAP[$out] + 1;
      HEAP[$out] = $459;
      __label__ = 108;
      break;
     case 108:
      
      
      var $462 = HEAP[$odata] + HEAP[$out];
      HEAP[$462] = 10;
      
      var $464 = HEAP[$out] + 1;
      HEAP[$out] = $464;
      HEAP[$linelen] = 0;
      __label__ = 109;
      break;
     case 109:
      
      var $466 = HEAP[$linelen] + 1;
      HEAP[$linelen] = $466;
      
      
      if (HEAP[$header] == 0) {
        __label__ = 112;
        break;
      } else {
        __label__ = 110;
        break;
      }
     case 110:
      
      
      
      
      
      if (HEAP[HEAP[$data] + HEAP[$in]] != 32) {
        __label__ = 112;
        break;
      } else {
        __label__ = 111;
        break;
      }
     case 111:
      
      
      var $476 = HEAP[$odata] + HEAP[$out];
      HEAP[$476] = 95;
      
      var $478 = HEAP[$out] + 1;
      HEAP[$out] = $478;
      
      var $480 = HEAP[$in] + 1;
      HEAP[$in] = $480;
      __label__ = 113;
      break;
     case 112:
      
      
      
      var $484 = HEAP[HEAP[$data] + HEAP[$in]];
      
      
      var $487 = HEAP[$odata] + HEAP[$out];
      HEAP[$487] = $484;
      
      var $489 = HEAP[$out] + 1;
      HEAP[$out] = $489;
      
      var $491 = HEAP[$in] + 1;
      HEAP[$in] = $491;
      __label__ = 113;
      break;
     case 113:
      
      
      
      if (HEAP[$in] < HEAP[$datalen]) {
        __label__ = 61;
        break;
      } else {
        __label__ = 114;
        break;
      }
     case 114:
      var $495 = HEAP[$odata];
      var $496 = HEAP[$out];
      var $497 = _PyString_FromStringAndSize($495, $496);
      HEAP[$rv] = $497;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 115;
        break;
      } else {
        __label__ = 116;
        break;
      }
     case 115:
      _PyBuffer_Release($pdata);
      var $500 = HEAP[$odata];
      _PyMem_Free($500);
      HEAP[$0] = 0;
      __label__ = 117;
      break;
     case 116:
      _PyBuffer_Release($pdata);
      var $501 = HEAP[$odata];
      _PyMem_Free($501);
      var $502 = HEAP[$rv];
      HEAP[$0] = $502;
      __label__ = 117;
      break;
     case 117:
      var $503 = HEAP[$0];
      HEAP[$retval] = $503;
      __label__ = 118;
      break;
     case 118:
      var $retval117 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval117;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initbinascii() {
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
      
      var $0 = _Py_InitModule4(__str53, _binascii_module_methods, 0, 0, 1013);
      HEAP[$m] = $0;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = HEAP[$m];
      var $4 = _PyModule_GetDict($3);
      HEAP[$d] = $4;
      var $5 = _PyString_FromString(_doc_binascii);
      HEAP[$x] = $5;
      var $6 = HEAP[$d];
      var $7 = HEAP[$x];
      var $8 = _PyDict_SetItemString($6, __str54, $7);
      
      
      if (HEAP[$x] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      var $14 = HEAP[HEAP[$x]] - 1;
      
      var $16 = HEAP[$x];
      HEAP[$16] = $14;
      
      
      
      
      if (HEAP[HEAP[$x]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $25 = HEAP[HEAP[HEAP[$x] + 4] + 24];
      var $26 = HEAP[$x];
      FUNCTION_TABLE[$25]($26);
      __label__ = 4;
      break;
     case 4:
      var $27 = _PyErr_NewException(__str55, 0, 0);
      HEAP[_Error] = $27;
      var $28 = HEAP[_Error];
      var $29 = HEAP[$d];
      var $30 = _PyDict_SetItemString($29, __str56, $28);
      var $31 = _PyErr_NewException(__str57, 0, 0);
      HEAP[_Incomplete] = $31;
      var $32 = HEAP[_Incomplete];
      var $33 = HEAP[$d];
      var $34 = _PyDict_SetItemString($33, __str58, $32);
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
  Module["_initbinascii"] = _initbinascii;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _binascii_a2b_uu, 0, _binascii_b2a_uu, 0, _binascii_a2b_base64, 0, _binascii_b2a_base64, 0, _binascii_a2b_hqx, 0, _binascii_b2a_hqx, 0, _binascii_hexlify, 0, _binascii_unhexlify, 0, _binascii_rlecode_hqx, 0, _binascii_rledecode_hqx, 0, _binascii_crc_hqx, 0, _binascii_crc32, 0, _binascii_a2b_qp, 0, _binascii_b2a_qp, 0 ]);
  function run(args) {
    _table_a2b_hqx = allocate([ 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 126, 125, 125, 126, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 125, 125, 13, 14, 15, 16, 17, 18, 19, 125, 20, 21, 127, 125, 125, 125, 125, 125, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 125, 37, 38, 39, 40, 41, 42, 43, 125, 44, 45, 46, 47, 125, 125, 125, 125, 48, 49, 50, 51, 52, 53, 54, 125, 55, 56, 57, 58, 59, 60, 125, 125, 61, 62, 63, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125 ], "i8", ALLOC_NORMAL);
    _table_b2a_hqx = allocate([ 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 48, 49, 50, 51, 52, 53, 54, 56, 57, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 88, 89, 90, 91, 96, 97, 98, 99, 100, 101, 102, 104, 105, 106, 107, 108, 109, 112, 113, 114, 0 ], "i8", ALLOC_NORMAL);
    _table_a2b_base64 = allocate([ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 62, 255, 255, 255, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 255, 255, 255, 0, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 255, 255, 255, 255, 255 ], "i8", ALLOC_NORMAL);
    _table_b2a_base64 = allocate([ 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47, 0 ], "i8", ALLOC_NORMAL);
    _crctab_hqx = allocate([ 0, 0, 4129, 0, 8258, 0, 12387, 0, 16516, 0, 20645, 0, 24774, 0, 28903, 0, -32504, 0, -28375, 0, -24246, 0, -20117, 0, -15988, 0, -11859, 0, -7730, 0, -3601, 0, 4657, 0, 528, 0, 12915, 0, 8786, 0, 21173, 0, 17044, 0, 29431, 0, 25302, 0, -27847, 0, -31976, 0, -19589, 0, -23718, 0, -11331, 0, -15460, 0, -3073, 0, -7202, 0, 9314, 0, 13379, 0, 1056, 0, 5121, 0, 25830, 0, 29895, 0, 17572, 0, 21637, 0, -23190, 0, -19125, 0, -31448, 0, -27383, 0, -6674, 0, -2609, 0, -14932, 0, -10867, 0, 13907, 0, 9842, 0, 5649, 0, 1584, 0, 30423, 0, 26358, 0, 22165, 0, 18100, 0, -18597, 0, -22662, 0, -26855, 0, -30920, 0, -2081, 0, -6146, 0, -10339, 0, -14404, 0, 18628, 0, 22757, 0, 26758, 0, 30887, 0, 2112, 0, 6241, 0, 10242, 0, 14371, 0, -13876, 0, -9747, 0, -5746, 0, -1617, 0, -30392, 0, -26263, 0, -22262, 0, -18133, 0, 23285, 0, 19156, 0, 31415, 0, 27286, 0, 6769, 0, 2640, 0, 14899, 0, 10770, 0, -9219, 0, -13348, 0, -1089, 0, -5218, 0, -25735, 0, -29864, 0, -17605, 0, -21734, 0, 27814, 0, 31879, 0, 19684, 0, 23749, 0, 11298, 0, 15363, 0, 3168, 0, 7233, 0, -4690, 0, -625, 0, -12820, 0, -8755, 0, -21206, 0, -17141, 0, -29336, 0, -25271, 0, 32407, 0, 28342, 0, 24277, 0, 20212, 0, 15891, 0, 11826, 0, 7761, 0, 3696, 0, -97, 0, -4162, 0, -8227, 0, -12292, 0, -16613, 0, -20678, 0, -24743, 0, -28808, 0, -28280, 0, -32343, 0, -20022, 0, -24085, 0, -12020, 0, -16083, 0, -3762, 0, -7825, 0, 4224, 0, 161, 0, 12482, 0, 8419, 0, 20484, 0, 16421, 0, 28742, 0, 24679, 0, -31815, 0, -27752, 0, -23557, 0, -19494, 0, -15555, 0, -11492, 0, -7297, 0, -3234, 0, 689, 0, 4752, 0, 8947, 0, 13010, 0, 16949, 0, 21012, 0, 25207, 0, 29270, 0, -18966, 0, -23093, 0, -27224, 0, -31351, 0, -2706, 0, -6833, 0, -10964, 0, -15091, 0, 13538, 0, 9411, 0, 5280, 0, 1153, 0, 29798, 0, 25671, 0, 21540, 0, 17413, 0, -22565, 0, -18438, 0, -30823, 0, -26696, 0, -6305, 0, -2178, 0, -14563, 0, -10436, 0, 9939, 0, 14066, 0, 1681, 0, 5808, 0, 26199, 0, 30326, 0, 17941, 0, 22068, 0, -9908, 0, -13971, 0, -1778, 0, -5841, 0, -26168, 0, -30231, 0, -18038, 0, -22101, 0, 22596, 0, 18533, 0, 30726, 0, 26663, 0, 6336, 0, 2273, 0, 14466, 0, 10403, 0, -13443, 0, -9380, 0, -5313, 0, -1250, 0, -29703, 0, -25640, 0, -21573, 0, -17510, 0, 19061, 0, 23124, 0, 27191, 0, 31254, 0, 2801, 0, 6864, 0, 10931, 0, 14994, 0, -722, 0, -4849, 0, -8852, 0, -12979, 0, -16982, 0, -21109, 0, -25112, 0, -29239, 0, 31782, 0, 27655, 0, 23652, 0, 19525, 0, 15522, 0, 11395, 0, 7392, 0, 3265, 0, -4321, 0, -194, 0, -12451, 0, -8324, 0, -20581, 0, -16454, 0, -28711, 0, -24584, 0, 28183, 0, 32310, 0, 20053, 0, 24180, 0, 11923, 0, 16050, 0, 3793, 0, 7920, 0 ], [ "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0 ], ALLOC_NORMAL);
    _doc_a2b_uu = allocate([ 40, 97, 115, 99, 105, 105, 41, 32, 45, 62, 32, 98, 105, 110, 46, 32, 68, 101, 99, 111, 100, 101, 32, 97, 32, 108, 105, 110, 101, 32, 111, 102, 32, 117, 117, 101, 110, 99, 111, 100, 101, 100, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 115, 42, 58, 97, 50, 98, 95, 117, 117, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 97, 115, 99, 105, 105, 95, 108, 101, 110, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 98, 105, 110, 97, 115, 99, 105, 105, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8271 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 95, 97, 50, 98, 95, 117, 117, 0 ], "i8", ALLOC_NORMAL);
    _Error = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str3 = allocate([ 73, 108, 108, 101, 103, 97, 108, 32, 99, 104, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 84, 114, 97, 105, 108, 105, 110, 103, 32, 103, 97, 114, 98, 97, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    _doc_b2a_uu = allocate([ 40, 98, 105, 110, 41, 32, 45, 62, 32, 97, 115, 99, 105, 105, 46, 32, 85, 117, 101, 110, 99, 111, 100, 101, 32, 108, 105, 110, 101, 32, 111, 102, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 115, 42, 58, 98, 50, 97, 95, 117, 117, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 65, 116, 32, 109, 111, 115, 116, 32, 52, 53, 32, 98, 121, 116, 101, 115, 32, 97, 116, 32, 111, 110, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    _doc_a2b_base64 = allocate([ 40, 97, 115, 99, 105, 105, 41, 32, 45, 62, 32, 98, 105, 110, 46, 32, 68, 101, 99, 111, 100, 101, 32, 97, 32, 108, 105, 110, 101, 32, 111, 102, 32, 98, 97, 115, 101, 54, 52, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 115, 42, 58, 97, 50, 98, 95, 98, 97, 115, 101, 54, 52, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8453 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 95, 97, 50, 98, 95, 98, 97, 115, 101, 54, 52, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 73, 110, 99, 111, 114, 114, 101, 99, 116, 32, 112, 97, 100, 100, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate(1, "i8", ALLOC_NORMAL);
    _doc_b2a_base64 = allocate([ 40, 98, 105, 110, 41, 32, 45, 62, 32, 97, 115, 99, 105, 105, 46, 32, 66, 97, 115, 101, 54, 52, 45, 99, 111, 100, 101, 32, 108, 105, 110, 101, 32, 111, 102, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 115, 42, 58, 98, 50, 97, 95, 98, 97, 115, 101, 54, 52, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 98, 105, 110, 95, 108, 101, 110, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8557 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 95, 98, 50, 97, 95, 98, 97, 115, 101, 54, 52, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 84, 111, 111, 32, 109, 117, 99, 104, 32, 100, 97, 116, 97, 32, 102, 111, 114, 32, 98, 97, 115, 101, 54, 52, 32, 108, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    _doc_a2b_hqx = allocate([ 97, 115, 99, 105, 105, 32, 45, 62, 32, 98, 105, 110, 44, 32, 100, 111, 110, 101, 46, 32, 68, 101, 99, 111, 100, 101, 32, 46, 104, 113, 120, 32, 99, 111, 100, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 115, 42, 58, 97, 50, 98, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 108, 101, 110, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8637 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 95, 97, 50, 98, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    _Incomplete = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str15 = allocate([ 83, 116, 114, 105, 110, 103, 32, 104, 97, 115, 32, 105, 110, 99, 111, 109, 112, 108, 101, 116, 101, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 98, 121, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 79, 105, 0 ], "i8", ALLOC_NORMAL);
    _doc_rlecode_hqx = allocate([ 66, 105, 110, 104, 101, 120, 32, 82, 76, 69, 45, 99, 111, 100, 101, 32, 98, 105, 110, 97, 114, 121, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 115, 42, 58, 114, 108, 101, 99, 111, 100, 101, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8751 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 95, 114, 108, 101, 99, 111, 100, 101, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    _doc_b2a_hqx = allocate([ 69, 110, 99, 111, 100, 101, 32, 46, 104, 113, 120, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 115, 42, 58, 98, 50, 97, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8824 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 95, 98, 50, 97, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    _doc_rledecode_hqx = allocate([ 68, 101, 99, 111, 100, 101, 32, 104, 101, 120, 98, 105, 110, 32, 82, 76, 69, 45, 99, 111, 100, 101, 100, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 115, 42, 58, 114, 108, 101, 100, 101, 99, 111, 100, 101, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 105, 110, 95, 108, 101, 110, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8897 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 95, 114, 108, 101, 100, 101, 99, 111, 100, 101, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 79, 114, 112, 104, 97, 110, 101, 100, 32, 82, 76, 69, 32, 99, 111, 100, 101, 32, 97, 116, 32, 115, 116, 97, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    _doc_crc_hqx = allocate([ 40, 100, 97, 116, 97, 44, 32, 111, 108, 100, 99, 114, 99, 41, 32, 45, 62, 32, 110, 101, 119, 99, 114, 99, 46, 32, 67, 111, 109, 112, 117, 116, 101, 32, 104, 113, 120, 32, 67, 82, 67, 32, 105, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 115, 42, 105, 58, 99, 114, 99, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 105, 0 ], "i8", ALLOC_NORMAL);
    _doc_crc32 = allocate([ 40, 100, 97, 116, 97, 44, 32, 111, 108, 100, 99, 114, 99, 32, 61, 32, 48, 41, 32, 45, 62, 32, 110, 101, 119, 99, 114, 99, 46, 32, 67, 111, 109, 112, 117, 116, 101, 32, 67, 82, 67, 45, 51, 50, 32, 105, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    _crc_32_tab = allocate([ 0, 0, 0, 0, 1996959894, 0, 0, 0, -301047508, 0, 0, 0, -1727442502, 0, 0, 0, 124634137, 0, 0, 0, 1886057615, 0, 0, 0, -379345611, 0, 0, 0, -1637575261, 0, 0, 0, 249268274, 0, 0, 0, 2044508324, 0, 0, 0, -522852066, 0, 0, 0, -1747789432, 0, 0, 0, 162941995, 0, 0, 0, 2125561021, 0, 0, 0, -407360249, 0, 0, 0, -1866523247, 0, 0, 0, 498536548, 0, 0, 0, 1789927666, 0, 0, 0, -205950648, 0, 0, 0, -2067906082, 0, 0, 0, 450548861, 0, 0, 0, 1843258603, 0, 0, 0, -187386543, 0, 0, 0, -2083289657, 0, 0, 0, 325883990, 0, 0, 0, 1684777152, 0, 0, 0, -43845254, 0, 0, 0, -1973040660, 0, 0, 0, 335633487, 0, 0, 0, 1661365465, 0, 0, 0, -99664541, 0, 0, 0, -1928851979, 0, 0, 0, 997073096, 0, 0, 0, 1281953886, 0, 0, 0, -715111964, 0, 0, 0, -1570279054, 0, 0, 0, 1006888145, 0, 0, 0, 1258607687, 0, 0, 0, -770865667, 0, 0, 0, -1526024853, 0, 0, 0, 901097722, 0, 0, 0, 1119000684, 0, 0, 0, -608450090, 0, 0, 0, -1396901568, 0, 0, 0, 853044451, 0, 0, 0, 1172266101, 0, 0, 0, -589951537, 0, 0, 0, -1412350631, 0, 0, 0, 651767980, 0, 0, 0, 1373503546, 0, 0, 0, -925412992, 0, 0, 0, -1076862698, 0, 0, 0, 565507253, 0, 0, 0, 1454621731, 0, 0, 0, -809855591, 0, 0, 0, -1195530993, 0, 0, 0, 671266974, 0, 0, 0, 1594198024, 0, 0, 0, -972236366, 0, 0, 0, -1324619484, 0, 0, 0, 795835527, 0, 0, 0, 1483230225, 0, 0, 0, -1050600021, 0, 0, 0, -1234817731, 0, 0, 0, 1994146192, 0, 0, 0, 31158534, 0, 0, 0, -1731059524, 0, 0, 0, -271249366, 0, 0, 0, 1907459465, 0, 0, 0, 112637215, 0, 0, 0, -1614814043, 0, 0, 0, -390540237, 0, 0, 0, 2013776290, 0, 0, 0, 251722036, 0, 0, 0, -1777751922, 0, 0, 0, -519137256, 0, 0, 0, 2137656763, 0, 0, 0, 141376813, 0, 0, 0, -1855689577, 0, 0, 0, -429695999, 0, 0, 0, 1802195444, 0, 0, 0, 476864866, 0, 0, 0, -2056965928, 0, 0, 0, -228458418, 0, 0, 0, 1812370925, 0, 0, 0, 453092731, 0, 0, 0, -2113342271, 0, 0, 0, -183516073, 0, 0, 0, 1706088902, 0, 0, 0, 314042704, 0, 0, 0, -1950435094, 0, 0, 0, -54949764, 0, 0, 0, 1658658271, 0, 0, 0, 366619977, 0, 0, 0, -1932296973, 0, 0, 0, -69972891, 0, 0, 0, 1303535960, 0, 0, 0, 984961486, 0, 0, 0, -1547960204, 0, 0, 0, -725929758, 0, 0, 0, 1256170817, 0, 0, 0, 1037604311, 0, 0, 0, -1529756563, 0, 0, 0, -740887301, 0, 0, 0, 1131014506, 0, 0, 0, 879679996, 0, 0, 0, -1385723834, 0, 0, 0, -631195440, 0, 0, 0, 1141124467, 0, 0, 0, 855842277, 0, 0, 0, -1442165665, 0, 0, 0, -586318647, 0, 0, 0, 1342533948, 0, 0, 0, 654459306, 0, 0, 0, -1106571248, 0, 0, 0, -921952122, 0, 0, 0, 1466479909, 0, 0, 0, 544179635, 0, 0, 0, -1184443383, 0, 0, 0, -832445281, 0, 0, 0, 1591671054, 0, 0, 0, 702138776, 0, 0, 0, -1328506846, 0, 0, 0, -942167884, 0, 0, 0, 1504918807, 0, 0, 0, 783551873, 0, 0, 0, -1212326853, 0, 0, 0, -1061524307, 0, 0, 0, -306674912, 0, 0, 0, -1698712650, 0, 0, 0, 62317068, 0, 0, 0, 1957810842, 0, 0, 0, -355121351, 0, 0, 0, -1647151185, 0, 0, 0, 81470997, 0, 0, 0, 1943803523, 0, 0, 0, -480048366, 0, 0, 0, -1805370492, 0, 0, 0, 225274430, 0, 0, 0, 2053790376, 0, 0, 0, -468791541, 0, 0, 0, -1828061283, 0, 0, 0, 167816743, 0, 0, 0, 2097651377, 0, 0, 0, -267414716, 0, 0, 0, -2029476910, 0, 0, 0, 503444072, 0, 0, 0, 1762050814, 0, 0, 0, -144550051, 0, 0, 0, -2140837941, 0, 0, 0, 426522225, 0, 0, 0, 1852507879, 0, 0, 0, -19653770, 0, 0, 0, -1982649376, 0, 0, 0, 282753626, 0, 0, 0, 1742555852, 0, 0, 0, -105259153, 0, 0, 0, -1900089351, 0, 0, 0, 397917763, 0, 0, 0, 1622183637, 0, 0, 0, -690576408, 0, 0, 0, -1580100738, 0, 0, 0, 953729732, 0, 0, 0, 1340076626, 0, 0, 0, -776247311, 0, 0, 0, -1497606297, 0, 0, 0, 1068828381, 0, 0, 0, 1219638859, 0, 0, 0, -670225446, 0, 0, 0, -1358292148, 0, 0, 0, 906185462, 0, 0, 0, 1090812512, 0, 0, 0, -547295293, 0, 0, 0, -1469587627, 0, 0, 0, 829329135, 0, 0, 0, 1181335161, 0, 0, 0, -882789492, 0, 0, 0, -1134132454, 0, 0, 0, 628085408, 0, 0, 0, 1382605366, 0, 0, 0, -871598187, 0, 0, 0, -1156888829, 0, 0, 0, 570562233, 0, 0, 0, 1426400815, 0, 0, 0, -977650754, 0, 0, 0, -1296233688, 0, 0, 0, 733239954, 0, 0, 0, 1555261956, 0, 0, 0, -1026031705, 0, 0, 0, -1244606671, 0, 0, 0, 752459403, 0, 0, 0, 1541320221, 0, 0, 0, -1687895376, 0, 0, 0, -328994266, 0, 0, 0, 1969922972, 0, 0, 0, 40735498, 0, 0, 0, -1677130071, 0, 0, 0, -351390145, 0, 0, 0, 1913087877, 0, 0, 0, 83908371, 0, 0, 0, -1782625662, 0, 0, 0, -491226604, 0, 0, 0, 2075208622, 0, 0, 0, 213261112, 0, 0, 0, -1831694693, 0, 0, 0, -438977011, 0, 0, 0, 2094854071, 0, 0, 0, 198958881, 0, 0, 0, -2032938284, 0, 0, 0, -237706686, 0, 0, 0, 1759359992, 0, 0, 0, 534414190, 0, 0, 0, -2118248755, 0, 0, 0, -155638181, 0, 0, 0, 1873836001, 0, 0, 0, 414664567, 0, 0, 0, -2012718362, 0, 0, 0, -15766928, 0, 0, 0, 1711684554, 0, 0, 0, 285281116, 0, 0, 0, -1889165569, 0, 0, 0, -127750551, 0, 0, 0, 1634467795, 0, 0, 0, 376229701, 0, 0, 0, -1609899400, 0, 0, 0, -686959890, 0, 0, 0, 1308918612, 0, 0, 0, 956543938, 0, 0, 0, -1486412191, 0, 0, 0, -799009033, 0, 0, 0, 1231636301, 0, 0, 0, 1047427035, 0, 0, 0, -1362007478, 0, 0, 0, -640263460, 0, 0, 0, 1088359270, 0, 0, 0, 936918e3, 0, 0, 0, -1447252397, 0, 0, 0, -558129467, 0, 0, 0, 1202900863, 0, 0, 0, 817233897, 0, 0, 0, -1111625188, 0, 0, 0, -893730166, 0, 0, 0, 1404277552, 0, 0, 0, 615818150, 0, 0, 0, -1160759803, 0, 0, 0, -841546093, 0, 0, 0, 1423857449, 0, 0, 0, 601450431, 0, 0, 0, -1285129682, 0, 0, 0, -1000256840, 0, 0, 0, 1567103746, 0, 0, 0, 711928724, 0, 0, 0, -1274298825, 0, 0, 0, -1022587231, 0, 0, 0, 1510334235, 0, 0, 0, 755167117, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str24 = allocate([ 115, 42, 124, 73, 58, 99, 114, 99, 51, 50, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 115, 42, 58, 98, 50, 97, 95, 104, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 97, 114, 103, 108, 101, 110, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9212 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 95, 104, 101, 120, 108, 105, 102, 121, 0 ], "i8", ALLOC_NORMAL);
    _doc_hexlify = allocate([ 98, 50, 97, 95, 104, 101, 120, 40, 100, 97, 116, 97, 41, 32, 45, 62, 32, 115, 59, 32, 72, 101, 120, 97, 100, 101, 99, 105, 109, 97, 108, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 98, 105, 110, 97, 114, 121, 32, 100, 97, 116, 97, 46, 10, 10, 84, 104, 105, 115, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 32, 97, 108, 115, 111, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 97, 115, 32, 34, 104, 101, 120, 108, 105, 102, 121, 40, 41, 34, 46, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 115, 42, 58, 97, 50, 98, 95, 104, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9287 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 95, 117, 110, 104, 101, 120, 108, 105, 102, 121, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 79, 100, 100, 45, 108, 101, 110, 103, 116, 104, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 78, 111, 110, 45, 104, 101, 120, 97, 100, 101, 99, 105, 109, 97, 108, 32, 100, 105, 103, 105, 116, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _doc_unhexlify = allocate([ 97, 50, 98, 95, 104, 101, 120, 40, 104, 101, 120, 115, 116, 114, 41, 32, 45, 62, 32, 115, 59, 32, 66, 105, 110, 97, 114, 121, 32, 100, 97, 116, 97, 32, 111, 102, 32, 104, 101, 120, 97, 100, 101, 99, 105, 109, 97, 108, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 46, 10, 10, 104, 101, 120, 115, 116, 114, 32, 109, 117, 115, 116, 32, 99, 111, 110, 116, 97, 105, 110, 32, 97, 110, 32, 101, 118, 101, 110, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 104, 101, 120, 32, 100, 105, 103, 105, 116, 115, 32, 40, 117, 112, 112, 101, 114, 32, 111, 114, 32, 108, 111, 119, 101, 114, 32, 99, 97, 115, 101, 41, 46, 10, 84, 104, 105, 115, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 32, 97, 108, 115, 111, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 97, 115, 32, 34, 117, 110, 104, 101, 120, 108, 105, 102, 121, 40, 41, 34, 0 ], "i8", ALLOC_NORMAL);
    _table_hex = allocate([ -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 6, 0, 0, 0, 7, 0, 0, 0, 8, 0, 0, 0, 9, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 10, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 14, 0, 0, 0, 15, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 10, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 14, 0, 0, 0, 15, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    _doc_a2b_qp = allocate([ 68, 101, 99, 111, 100, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 113, 112, 45, 101, 110, 99, 111, 100, 101, 100, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 115, 42, 124, 105, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9353 = allocate(12, "i8*", ALLOC_NORMAL);
    __str31 = allocate([ 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 104, 101, 97, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 0 ], "i8", ALLOC_NORMAL);
    _doc_b2a_qp = allocate([ 98, 50, 97, 95, 113, 112, 40, 100, 97, 116, 97, 44, 32, 113, 117, 111, 116, 101, 116, 97, 98, 115, 61, 48, 44, 32, 105, 115, 116, 101, 120, 116, 61, 49, 44, 32, 104, 101, 97, 100, 101, 114, 61, 48, 41, 32, 45, 62, 32, 115, 59, 32, 10, 32, 69, 110, 99, 111, 100, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 117, 115, 105, 110, 103, 32, 113, 117, 111, 116, 101, 100, 45, 112, 114, 105, 110, 116, 97, 98, 108, 101, 32, 101, 110, 99, 111, 100, 105, 110, 103, 46, 32, 10, 10, 79, 110, 32, 101, 110, 99, 111, 100, 105, 110, 103, 44, 32, 119, 104, 101, 110, 32, 105, 115, 116, 101, 120, 116, 32, 105, 115, 32, 115, 101, 116, 44, 32, 110, 101, 119, 108, 105, 110, 101, 115, 32, 97, 114, 101, 32, 110, 111, 116, 32, 101, 110, 99, 111, 100, 101, 100, 44, 32, 97, 110, 100, 32, 119, 104, 105, 116, 101, 32, 10, 115, 112, 97, 99, 101, 32, 97, 116, 32, 101, 110, 100, 32, 111, 102, 32, 108, 105, 110, 101, 115, 32, 105, 115, 46, 32, 32, 87, 104, 101, 110, 32, 105, 115, 116, 101, 120, 116, 32, 105, 115, 32, 110, 111, 116, 32, 115, 101, 116, 44, 32, 92, 114, 32, 97, 110, 100, 32, 92, 110, 32, 40, 67, 82, 47, 76, 70, 41, 32, 97, 114, 101, 32, 10, 98, 111, 116, 104, 32, 101, 110, 99, 111, 100, 101, 100, 46, 32, 32, 87, 104, 101, 110, 32, 113, 117, 111, 116, 101, 116, 97, 98, 115, 32, 105, 115, 32, 115, 101, 116, 44, 32, 115, 112, 97, 99, 101, 32, 97, 110, 100, 32, 116, 97, 98, 115, 32, 97, 114, 101, 32, 101, 110, 99, 111, 100, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 115, 42, 124, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9474 = allocate(20, "i8*", ALLOC_NORMAL);
    __str35 = allocate([ 113, 117, 111, 116, 101, 116, 97, 98, 115, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 105, 115, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 97, 50, 98, 95, 117, 117, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 98, 50, 97, 95, 117, 117, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 97, 50, 98, 95, 98, 97, 115, 101, 54, 52, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 98, 50, 97, 95, 98, 97, 115, 101, 54, 52, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 97, 50, 98, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 98, 50, 97, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 98, 50, 97, 95, 104, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 97, 50, 98, 95, 104, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 104, 101, 120, 108, 105, 102, 121, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 117, 110, 104, 101, 120, 108, 105, 102, 121, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 114, 108, 101, 99, 111, 100, 101, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 114, 108, 101, 100, 101, 99, 111, 100, 101, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 99, 114, 99, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 99, 114, 99, 51, 50, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 97, 50, 98, 95, 113, 112, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 98, 50, 97, 95, 113, 112, 0 ], "i8", ALLOC_NORMAL);
    _binascii_module_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _doc_binascii = allocate([ 67, 111, 110, 118, 101, 114, 115, 105, 111, 110, 32, 98, 101, 116, 119, 101, 101, 110, 32, 98, 105, 110, 97, 114, 121, 32, 100, 97, 116, 97, 32, 97, 110, 100, 32, 65, 83, 67, 73, 73, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 95, 95, 100, 111, 99, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 46, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 46, 73, 110, 99, 111, 109, 112, 108, 101, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 73, 110, 99, 111, 109, 112, 108, 101, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_kwlist_9353] = __str31;
    HEAP[_kwlist_9353 + 4] = __str32;
    HEAP[_kwlist_9474] = __str31;
    HEAP[_kwlist_9474 + 4] = __str35;
    HEAP[_kwlist_9474 + 8] = __str36;
    HEAP[_kwlist_9474 + 12] = __str32;
    HEAP[_binascii_module_methods] = __str37;
    HEAP[_binascii_module_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_binascii_module_methods + 12] = _doc_a2b_uu;
    HEAP[_binascii_module_methods + 16] = __str38;
    HEAP[_binascii_module_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_binascii_module_methods + 28] = _doc_b2a_uu;
    HEAP[_binascii_module_methods + 32] = __str39;
    HEAP[_binascii_module_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_binascii_module_methods + 44] = _doc_a2b_base64;
    HEAP[_binascii_module_methods + 48] = __str40;
    HEAP[_binascii_module_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_binascii_module_methods + 60] = _doc_b2a_base64;
    HEAP[_binascii_module_methods + 64] = __str41;
    HEAP[_binascii_module_methods + 68] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_binascii_module_methods + 76] = _doc_a2b_hqx;
    HEAP[_binascii_module_methods + 80] = __str42;
    HEAP[_binascii_module_methods + 84] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_binascii_module_methods + 92] = _doc_b2a_hqx;
    HEAP[_binascii_module_methods + 96] = __str43;
    HEAP[_binascii_module_methods + 100] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_binascii_module_methods + 108] = _doc_hexlify;
    HEAP[_binascii_module_methods + 112] = __str44;
    HEAP[_binascii_module_methods + 116] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_binascii_module_methods + 124] = _doc_unhexlify;
    HEAP[_binascii_module_methods + 128] = __str45;
    HEAP[_binascii_module_methods + 132] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_binascii_module_methods + 140] = _doc_hexlify;
    HEAP[_binascii_module_methods + 144] = __str46;
    HEAP[_binascii_module_methods + 148] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_binascii_module_methods + 156] = _doc_unhexlify;
    HEAP[_binascii_module_methods + 160] = __str47;
    HEAP[_binascii_module_methods + 164] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_binascii_module_methods + 172] = _doc_rlecode_hqx;
    HEAP[_binascii_module_methods + 176] = __str48;
    HEAP[_binascii_module_methods + 180] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_binascii_module_methods + 188] = _doc_rledecode_hqx;
    HEAP[_binascii_module_methods + 192] = __str49;
    HEAP[_binascii_module_methods + 196] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_binascii_module_methods + 204] = _doc_crc_hqx;
    HEAP[_binascii_module_methods + 208] = __str50;
    HEAP[_binascii_module_methods + 212] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_binascii_module_methods + 220] = _doc_crc32;
    HEAP[_binascii_module_methods + 224] = __str51;
    HEAP[_binascii_module_methods + 228] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_binascii_module_methods + 236] = _doc_a2b_qp;
    HEAP[_binascii_module_methods + 240] = __str52;
    HEAP[_binascii_module_methods + 244] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_binascii_module_methods + 252] = _doc_b2a_qp;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
