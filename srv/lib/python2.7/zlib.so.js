"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 64;
  var $1___SIZE = 16;
  var $2___SIZE = 112;
  var $3___SIZE = 196;
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
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_compobject___SIZE = 76;
  var $struct_compobject___FLATTENER = [ 0, 4, 8, 64, 68, 72 ];
  var $struct_internal_state___SIZE = 4;
  var $struct_z_stream___SIZE = 56;
  var __str;
  var __str1;
  var __str2;
  var _ZlibError;
  var __str3;
  var __str4;
  var _compressobj__doc__;
  var _decompressobj__doc__;
  var __str5;
  var _compress__doc__;
  var __str6;
  var __str7;
  var __str8;
  var __str9;
  var __str10;
  var __str11;
  var __str12;
  var _decompress__doc__;
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
  var _comp_compress__doc__;
  var __str25;
  var __str26;
  var _decomp_decompress__doc__;
  var __str27;
  var __str28;
  var __str29;
  var _comp_flush__doc__;
  var __str30;
  var __str31;
  var __str32;
  var _comp_copy__doc__;
  var __str33;
  var __str34;
  var _decomp_copy__doc__;
  var __str35;
  var _decomp_flush__doc__;
  var __str36;
  var __str37;
  var __str38;
  var __str39;
  var __str40;
  var _comp_methods;
  var __str41;
  var _Decomp_methods;
  var __str42;
  var __str43;
  var _adler32__doc__;
  var __str44;
  var _crc32__doc__;
  var __str45;
  var __str46;
  var __str47;
  var __str48;
  var __str49;
  var _zlib_methods;
  var __str50;
  var _Comptype;
  var __str51;
  var _Decomptype;
  var _zlib_module_documentation;
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
  var __str64;
  var __str65;
  var __str66;
  var __str67;
  var __str68;
  var __str69;
  var __str70;
  function _zlib_error($zst, $err, $msg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $err_addr = __stackBase__;
      var $msg_addr = __stackBase__ + 4;
      var $zmsg = __stackBase__ + 8;
      
      HEAP[$err_addr] = $err;
      HEAP[$msg_addr] = $msg;
      
      var $1 = HEAP[$zst + 24];
      HEAP[$zmsg] = $1;
      
      
      if (HEAP[$zmsg] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      var $4 = HEAP[$err_addr];
      if ($4 == -5) {
        __label__ = 2;
        break;
      } else if ($4 == -3) {
        __label__ = 4;
        break;
      } else if ($4 == -2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      HEAP[$zmsg] = __str;
      __label__ = 5;
      break;
     case 3:
      HEAP[$zmsg] = __str1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$zmsg] = __str2;
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[$zmsg] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $7 = HEAP[_ZlibError];
      var $8 = HEAP[$err_addr];
      var $9 = HEAP[$msg_addr];
      var $10 = _PyErr_Format($7, __str3, allocate([ $8, 0, 0, 0, $9, 0, 0, 0 ], [ "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 8;
      break;
     case 7:
      var $11 = HEAP[_ZlibError];
      var $12 = HEAP[$err_addr];
      var $13 = HEAP[$msg_addr];
      var $14 = HEAP[$zmsg];
      var $15 = _PyErr_Format($11, __str4, allocate([ $12, 0, 0, 0, $13, 0, 0, 0, $14, 0, 0, 0 ], [ "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
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
  function _newcompobject($type) {
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
      var $self = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $type;
      var $1 = HEAP[__stackBase__];
      var $2 = __PyObject_New($1);
      var $3 = $2;
      HEAP[$self] = $3;
      
      
      if (HEAP[$self] == 0) {
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
      
      var $7 = HEAP[$self] + 72;
      HEAP[$7] = 0;
      var $8 = _PyString_FromString(__str5);
      
      var $10 = HEAP[$self] + 64;
      HEAP[$10] = $8;
      
      
      
      
      if (HEAP[HEAP[$self] + 64] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      var $16 = HEAP[$self];
      
      
      var $19 = HEAP[$16] - 1;
      var $20 = $16;
      HEAP[$20] = $19;
      
      
      
      if (HEAP[$16] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      var $29 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $31 = HEAP[$self];
      FUNCTION_TABLE[$29]($31);
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 6:
      var $32 = _PyString_FromString(__str5);
      
      var $34 = HEAP[$self] + 68;
      HEAP[$34] = $32;
      
      
      
      
      if (HEAP[HEAP[$self] + 68] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      var $40 = HEAP[$self];
      
      
      var $43 = HEAP[$40] - 1;
      var $44 = $40;
      HEAP[$44] = $43;
      
      
      
      if (HEAP[$40] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $53 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $55 = HEAP[$self];
      FUNCTION_TABLE[$53]($55);
      __label__ = 9;
      break;
     case 9:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 10:
      var $56 = HEAP[$self];
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
  function _PyZlib_compress($self, $args) {
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
      var $ReturnVal = __stackBase__ + 16;
      var $input = __stackBase__ + 20;
      var $output = __stackBase__ + 24;
      var $length = __stackBase__ + 28;
      var $level = __stackBase__ + 32;
      var $err = __stackBase__ + 36;
      var $zst = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$ReturnVal] = 0;
      HEAP[$level] = -1;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str6, allocate([ $input, 0, 0, 0, $length, 0, 0, 0, $level, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      var $8 = (HEAP[$length] / 1e3 | 0) + HEAP[$length] + 13;
      
      HEAP[$zst + 16] = $8;
      
      var $11 = HEAP[$zst + 16];
      var $12 = _malloc($11);
      HEAP[$output] = $12;
      
      
      if (HEAP[$output] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $15 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($15, __str7);
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 4:
      
      HEAP[$zst + 32] = 0;
      
      HEAP[$zst + 36] = 0;
      
      var $19 = HEAP[$output];
      HEAP[$zst + 12] = $19;
      var $20 = HEAP[$input];
      
      HEAP[$zst] = $20;
      var $22 = HEAP[$length];
      
      HEAP[$zst + 4] = $22;
      var $24 = HEAP[$level];
      var $25 = _deflateInit_($zst, $24, __str8, 56);
      HEAP[$err] = $25;
      var $26 = HEAP[$err];
      if ($26 == -4) {
        __label__ = 6;
        break;
      } else if ($26 == -2) {
        __label__ = 7;
        break;
      } else if ($26 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $27 = _deflate($zst, 4);
      HEAP[$err] = $27;
      
      
      if (HEAP[$err] != 1) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      var $30 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($30, __str9);
      __label__ = 13;
      break;
     case 7:
      var $31 = HEAP[_ZlibError];
      _PyErr_SetString($31, __str10);
      __label__ = 13;
      break;
     case 8:
      var $32 = _deflateEnd($zst);
      var $33 = HEAP[$err];
      _zlib_error($zst, $33, __str11);
      __label__ = 13;
      break;
     case 9:
      var $34 = HEAP[$err];
      _zlib_error($zst, $34, __str11);
      var $35 = _deflateEnd($zst);
      __label__ = 13;
      break;
     case 10:
      var $36 = _deflateEnd($zst);
      HEAP[$err] = $36;
      
      
      if (HEAP[$err] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      var $40 = HEAP[$zst + 20];
      var $41 = HEAP[$output];
      var $42 = _PyString_FromStringAndSize($41, $40);
      HEAP[$ReturnVal] = $42;
      __label__ = 13;
      break;
     case 12:
      var $43 = HEAP[$err];
      _zlib_error($zst, $43, __str12);
      __label__ = 13;
      break;
     case 13:
      var $44 = HEAP[$output];
      _free($44);
      var $45 = HEAP[$ReturnVal];
      HEAP[$0] = $45;
      __label__ = 14;
      break;
     case 14:
      var $46 = HEAP[$0];
      HEAP[$retval] = $46;
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
  function _PyZlib_decompress($self, $args) {
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
      var $result_str = __stackBase__ + 16;
      var $input = __stackBase__ + 20;
      var $length = __stackBase__ + 24;
      var $err = __stackBase__ + 28;
      var $wsize = __stackBase__ + 32;
      var $r_strlen = __stackBase__ + 36;
      var $zst = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$wsize] = 15;
      HEAP[$r_strlen] = 16384;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str13, allocate([ $input, 0, 0, 0, $length, 0, 0, 0, $wsize, 0, 0, 0, $r_strlen, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$r_strlen] <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$r_strlen] = 1;
      __label__ = 4;
      break;
     case 4:
      var $6 = HEAP[$length];
      
      HEAP[$zst + 4] = $6;
      var $8 = HEAP[$r_strlen];
      
      HEAP[$zst + 16] = $8;
      var $10 = HEAP[$r_strlen];
      var $11 = _PyString_FromStringAndSize(0, $10);
      HEAP[$result_str] = $11;
      
      
      if (HEAP[$result_str] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 26;
      break;
     case 6:
      
      HEAP[$zst + 32] = 0;
      
      HEAP[$zst + 36] = 0;
      
      
      
      var $19 = HEAP[$result_str] + 20;
      
      HEAP[$zst + 12] = $19;
      var $21 = HEAP[$input];
      
      HEAP[$zst] = $21;
      var $23 = HEAP[$wsize];
      var $24 = _inflateInit2_($zst, $23, __str8, 56);
      HEAP[$err] = $24;
      var $25 = HEAP[$err];
      if ($25 == -4) {
        __label__ = 8;
        break;
      } else if ($25 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      __label__ = 10;
      break;
     case 8:
      var $26 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($26, __str14);
      __label__ = 22;
      break;
     case 9:
      var $27 = _inflateEnd($zst);
      var $28 = HEAP[$err];
      _zlib_error($zst, $28, __str15);
      __label__ = 22;
      break;
     case 10:
      var $29 = _inflate($zst, 4);
      HEAP[$err] = $29;
      var $30 = HEAP[$err];
      if ($30 == -5) {
        __label__ = 12;
        break;
      } else if ($30 == 0) {
        __label__ = 14;
        break;
      } else if ($30 == 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 11:
      __label__ = 18;
      break;
     case 12:
      
      
      
      if (HEAP[$zst + 16] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $34 = HEAP[$err];
      _zlib_error($zst, $34, __str16);
      var $35 = _inflateEnd($zst);
      __label__ = 22;
      break;
     case 14:
      
      var $37 = HEAP[$r_strlen] << 1;
      var $38 = __PyString_Resize($result_str, $37);
      
      if ($38 < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $40 = _inflateEnd($zst);
      __label__ = 22;
      break;
     case 16:
      
      
      
      
      
      var $46 = HEAP[$result_str] + 20 + HEAP[$r_strlen];
      
      HEAP[$zst + 12] = $46;
      var $48 = HEAP[$r_strlen];
      
      HEAP[$zst + 16] = $48;
      
      var $51 = HEAP[$r_strlen] << 1;
      HEAP[$r_strlen] = $51;
      __label__ = 18;
      break;
     case 17:
      var $52 = _inflateEnd($zst);
      var $53 = HEAP[$err];
      _zlib_error($zst, $53, __str16);
      __label__ = 22;
      break;
     case 18:
      
      
      if (HEAP[$err] != 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      var $56 = _inflateEnd($zst);
      HEAP[$err] = $56;
      
      
      if (HEAP[$err] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $59 = HEAP[$err];
      _zlib_error($zst, $59, __str17);
      __label__ = 22;
      break;
     case 21:
      
      var $61 = HEAP[$zst + 20];
      var $62 = __PyString_Resize($result_str, $61);
      var $63 = HEAP[$result_str];
      HEAP[$0] = $63;
      __label__ = 26;
      break;
     case 22:
      
      
      if (HEAP[$result_str] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 23:
      var $66 = HEAP[$result_str];
      
      
      var $69 = HEAP[$66] - 1;
      var $70 = $66;
      HEAP[$70] = $69;
      
      
      
      if (HEAP[$66] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $78 = HEAP[HEAP[HEAP[$result_str] + 4] + 24];
      var $79 = HEAP[$result_str];
      FUNCTION_TABLE[$78]($79);
      __label__ = 25;
      break;
     case 25:
      HEAP[$0] = 0;
      __label__ = 26;
      break;
     case 26:
      var $80 = HEAP[$0];
      HEAP[$retval] = $80;
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
  function _PyZlib_compressobj($selfptr, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $self = __stackBase__ + 16;
      var $level = __stackBase__ + 20;
      var $method = __stackBase__ + 24;
      var $wbits = __stackBase__ + 28;
      var $memLevel = __stackBase__ + 32;
      var $strategy = __stackBase__ + 36;
      var $err = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $selfptr;
      HEAP[$args_addr] = $args;
      HEAP[$level] = -1;
      HEAP[$method] = 8;
      HEAP[$wbits] = 15;
      HEAP[$memLevel] = 8;
      HEAP[$strategy] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str18, allocate([ $level, 0, 0, 0, $method, 0, 0, 0, $wbits, 0, 0, 0, $memLevel, 0, 0, 0, $strategy, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = _newcompobject(_Comptype);
      HEAP[$self] = $4;
      
      
      if (HEAP[$self] == 0) {
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
      
      
      var $9 = HEAP[$self] + 8 + 32;
      HEAP[$9] = 0;
      
      
      var $12 = HEAP[$self] + 8 + 36;
      HEAP[$12] = 0;
      
      
      var $15 = HEAP[$self] + 8;
      HEAP[$15] = 0;
      
      
      var $18 = HEAP[$self] + 8 + 4;
      HEAP[$18] = 0;
      var $19 = HEAP[$strategy];
      var $20 = HEAP[$memLevel];
      var $21 = HEAP[$wbits];
      var $22 = HEAP[$method];
      var $23 = HEAP[$level];
      
      var $25 = HEAP[$self] + 8;
      var $26 = _deflateInit2_($25, $23, $22, $21, $20, $19, __str8, 56);
      HEAP[$err] = $26;
      var $27 = HEAP[$err];
      if ($27 == -4) {
        __label__ = 6;
        break;
      } else if ($27 == -2) {
        __label__ = 9;
        break;
      } else if ($27 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 5:
      
      var $29 = HEAP[$self] + 72;
      HEAP[$29] = 1;
      
      var $31 = HEAP[$self];
      HEAP[$0] = $31;
      __label__ = 15;
      break;
     case 6:
      
      var $33 = HEAP[$self];
      
      
      var $36 = HEAP[$33] - 1;
      var $37 = $33;
      HEAP[$37] = $36;
      
      
      
      if (HEAP[$33] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $48 = HEAP[$self];
      FUNCTION_TABLE[$46]($48);
      __label__ = 8;
      break;
     case 8:
      var $49 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($49, __str19);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 9:
      
      var $51 = HEAP[$self];
      
      
      var $54 = HEAP[$51] - 1;
      var $55 = $51;
      HEAP[$55] = $54;
      
      
      
      if (HEAP[$51] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      var $64 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $66 = HEAP[$self];
      FUNCTION_TABLE[$64]($66);
      __label__ = 11;
      break;
     case 11:
      var $67 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($67, __str20);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 12:
      
      var $69 = HEAP[$self] + 8;
      var $70 = HEAP[$err];
      _zlib_error($69, $70, __str21);
      
      var $72 = HEAP[$self];
      
      
      var $75 = HEAP[$72] - 1;
      var $76 = $72;
      HEAP[$76] = $75;
      
      
      
      if (HEAP[$72] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      var $85 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $87 = HEAP[$self];
      FUNCTION_TABLE[$85]($87);
      __label__ = 14;
      break;
     case 14:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 15:
      var $88 = HEAP[$0];
      HEAP[$retval] = $88;
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
  function _PyZlib_decompressobj($selfptr, $args) {
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
      var $wbits = __stackBase__ + 16;
      var $err = __stackBase__ + 20;
      var $self = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $selfptr;
      HEAP[$args_addr] = $args;
      HEAP[$wbits] = 15;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str22, allocate([ $wbits, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = _newcompobject(_Decomptype);
      HEAP[$self] = $4;
      
      
      if (HEAP[$self] == 0) {
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
      
      
      var $9 = HEAP[$self] + 8 + 32;
      HEAP[$9] = 0;
      
      
      var $12 = HEAP[$self] + 8 + 36;
      HEAP[$12] = 0;
      
      
      var $15 = HEAP[$self] + 8;
      HEAP[$15] = 0;
      
      
      var $18 = HEAP[$self] + 8 + 4;
      HEAP[$18] = 0;
      var $19 = HEAP[$wbits];
      
      var $21 = HEAP[$self] + 8;
      var $22 = _inflateInit2_($21, $19, __str8, 56);
      HEAP[$err] = $22;
      var $23 = HEAP[$err];
      if ($23 == -4) {
        __label__ = 9;
        break;
      } else if ($23 == -2) {
        __label__ = 6;
        break;
      } else if ($23 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 5:
      
      var $25 = HEAP[$self] + 72;
      HEAP[$25] = 1;
      
      var $27 = HEAP[$self];
      HEAP[$0] = $27;
      __label__ = 15;
      break;
     case 6:
      
      var $29 = HEAP[$self];
      
      
      var $32 = HEAP[$29] - 1;
      var $33 = $29;
      HEAP[$33] = $32;
      
      
      
      if (HEAP[$29] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      var $42 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $44 = HEAP[$self];
      FUNCTION_TABLE[$42]($44);
      __label__ = 8;
      break;
     case 8:
      var $45 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($45, __str20);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 9:
      
      var $47 = HEAP[$self];
      
      
      var $50 = HEAP[$47] - 1;
      var $51 = $47;
      HEAP[$51] = $50;
      
      
      
      if (HEAP[$47] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $62 = HEAP[$self];
      FUNCTION_TABLE[$60]($62);
      __label__ = 11;
      break;
     case 11:
      var $63 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($63, __str23);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 12:
      
      var $65 = HEAP[$self] + 8;
      var $66 = HEAP[$err];
      _zlib_error($65, $66, __str24);
      
      var $68 = HEAP[$self];
      
      
      var $71 = HEAP[$68] - 1;
      var $72 = $68;
      HEAP[$72] = $71;
      
      
      
      if (HEAP[$68] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      var $81 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $83 = HEAP[$self];
      FUNCTION_TABLE[$81]($83);
      __label__ = 14;
      break;
     case 14:
      HEAP[$0] = 0;
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
  function _Comp_dealloc($self) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 72] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $5 = HEAP[$self_addr] + 8;
      var $6 = _deflateEnd($5);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 64] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $13 = HEAP[HEAP[$self_addr] + 64];
      
      
      var $16 = HEAP[$13] - 1;
      var $17 = $13;
      HEAP[$17] = $16;
      
      
      
      if (HEAP[$13] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 64] + 4] + 24];
      
      
      var $30 = HEAP[HEAP[$self_addr] + 64];
      FUNCTION_TABLE[$27]($30);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 68] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $37 = HEAP[HEAP[$self_addr] + 68];
      
      
      var $40 = HEAP[$37] - 1;
      var $41 = $37;
      HEAP[$41] = $40;
      
      
      
      if (HEAP[$37] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $51 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 68] + 4] + 24];
      
      
      var $54 = HEAP[HEAP[$self_addr] + 68];
      FUNCTION_TABLE[$51]($54);
      __label__ = 8;
      break;
     case 8:
      
      var $56 = HEAP[$self_addr];
      _PyObject_Free($56);
      __label__ = 9;
      break;
     case 9:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Decomp_dealloc($self) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 72] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $5 = HEAP[$self_addr] + 8;
      var $6 = _inflateEnd($5);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 64] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $13 = HEAP[HEAP[$self_addr] + 64];
      
      
      var $16 = HEAP[$13] - 1;
      var $17 = $13;
      HEAP[$17] = $16;
      
      
      
      if (HEAP[$13] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 64] + 4] + 24];
      
      
      var $30 = HEAP[HEAP[$self_addr] + 64];
      FUNCTION_TABLE[$27]($30);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 68] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $37 = HEAP[HEAP[$self_addr] + 68];
      
      
      var $40 = HEAP[$37] - 1;
      var $41 = $37;
      HEAP[$41] = $40;
      
      
      
      if (HEAP[$37] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $51 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 68] + 4] + 24];
      
      
      var $54 = HEAP[HEAP[$self_addr] + 68];
      FUNCTION_TABLE[$51]($54);
      __label__ = 8;
      break;
     case 8:
      
      var $56 = HEAP[$self_addr];
      _PyObject_Free($56);
      __label__ = 9;
      break;
     case 9:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyZlib_objcompress($self, $args) {
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
      var $err = __stackBase__ + 16;
      var $inplen = __stackBase__ + 20;
      var $length = __stackBase__ + 24;
      var $RetVal = __stackBase__ + 28;
      var $input = __stackBase__ + 32;
      var $start_total_out = __stackBase__ + 36;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$length] = 16384;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str25, allocate([ $input, 0, 0, 0, $inplen, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$length];
      var $5 = _PyString_FromStringAndSize(0, $4);
      HEAP[$RetVal] = $5;
      
      
      if (HEAP[$RetVal] == 0) {
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
      
      
      
      var $11 = HEAP[HEAP[$self_addr] + 8 + 20];
      HEAP[$start_total_out] = $11;
      var $12 = HEAP[$inplen];
      
      
      var $15 = HEAP[$self_addr] + 8 + 4;
      HEAP[$15] = $12;
      var $16 = HEAP[$input];
      
      
      var $19 = HEAP[$self_addr] + 8;
      HEAP[$19] = $16;
      var $20 = HEAP[$length];
      
      
      var $23 = HEAP[$self_addr] + 8 + 16;
      HEAP[$23] = $20;
      
      
      
      var $27 = HEAP[$RetVal] + 20;
      
      
      var $30 = HEAP[$self_addr] + 8 + 12;
      HEAP[$30] = $27;
      
      var $32 = HEAP[$self_addr] + 8;
      var $33 = _deflate($32, 0);
      HEAP[$err] = $33;
      __label__ = 7;
      break;
     case 5:
      
      var $35 = HEAP[$length] << 1;
      var $36 = __PyString_Resize($RetVal, $35);
      
      if ($36 < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      var $43 = HEAP[$RetVal] + 20 + HEAP[$length];
      
      
      var $46 = HEAP[$self_addr] + 8 + 12;
      HEAP[$46] = $43;
      var $47 = HEAP[$length];
      
      
      var $50 = HEAP[$self_addr] + 8 + 16;
      HEAP[$50] = $47;
      
      var $52 = HEAP[$length] << 1;
      HEAP[$length] = $52;
      
      var $54 = HEAP[$self_addr] + 8;
      var $55 = _deflate($54, 0);
      HEAP[$err] = $55;
      __label__ = 7;
      break;
     case 7:
      
      
      if (HEAP[$err] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8 + 16] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$err] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      
      var $66 = HEAP[$err] != -5;
      if ($66) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      var $68 = HEAP[$self_addr] + 8;
      var $69 = HEAP[$err];
      _zlib_error($68, $69, __str26);
      var $70 = HEAP[$RetVal];
      
      
      var $73 = HEAP[$70] - 1;
      var $74 = $70;
      HEAP[$74] = $73;
      
      
      
      if (HEAP[$70] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $82 = HEAP[HEAP[HEAP[$RetVal] + 4] + 24];
      var $83 = HEAP[$RetVal];
      FUNCTION_TABLE[$82]($83);
      __label__ = 13;
      break;
     case 13:
      HEAP[$RetVal] = 0;
      __label__ = 15;
      break;
     case 14:
      
      
      
      
      
      var $89 = HEAP[HEAP[$self_addr] + 8 + 20] - HEAP[$start_total_out];
      var $90 = __PyString_Resize($RetVal, $89);
      __label__ = 15;
      break;
     case 15:
      var $91 = HEAP[$RetVal];
      HEAP[$0] = $91;
      __label__ = 16;
      break;
     case 16:
      var $92 = HEAP[$0];
      HEAP[$retval] = $92;
      __label__ = 17;
      break;
     case 17:
      var $retval15 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyZlib_objdecompress($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $err = __stackBase__ + 16;
      var $inplen = __stackBase__ + 20;
      var $max_length = __stackBase__ + 24;
      var $old_length = __stackBase__ + 28;
      var $length = __stackBase__ + 32;
      var $RetVal = __stackBase__ + 36;
      var $input = __stackBase__ + 40;
      var $start_total_out = __stackBase__ + 44;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$max_length] = 0;
      HEAP[$length] = 16384;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str27, allocate([ $input, 0, 0, 0, $inplen, 0, 0, 0, $max_length, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 47;
      break;
     case 2:
      
      
      if (HEAP[$max_length] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($6, __str28);
      HEAP[$0] = 0;
      __label__ = 47;
      break;
     case 4:
      
      
      if (HEAP[$max_length] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      if (HEAP[$length] > HEAP[$max_length]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $12 = HEAP[$max_length];
      HEAP[$length] = $12;
      __label__ = 7;
      break;
     case 7:
      var $13 = HEAP[$length];
      var $14 = _PyString_FromStringAndSize(0, $13);
      HEAP[$RetVal] = $14;
      
      
      if (HEAP[$RetVal] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 47;
      break;
     case 9:
      
      
      
      var $20 = HEAP[HEAP[$self_addr] + 8 + 20];
      HEAP[$start_total_out] = $20;
      var $21 = HEAP[$inplen];
      
      
      var $24 = HEAP[$self_addr] + 8 + 4;
      HEAP[$24] = $21;
      var $25 = HEAP[$input];
      
      
      var $28 = HEAP[$self_addr] + 8;
      HEAP[$28] = $25;
      var $29 = HEAP[$length];
      
      
      var $32 = HEAP[$self_addr] + 8 + 16;
      HEAP[$32] = $29;
      
      
      
      var $36 = HEAP[$RetVal] + 20;
      
      
      var $39 = HEAP[$self_addr] + 8 + 12;
      HEAP[$39] = $36;
      
      var $41 = HEAP[$self_addr] + 8;
      var $42 = _inflate($41, 2);
      HEAP[$err] = $42;
      __label__ = 17;
      break;
     case 10:
      
      
      if (HEAP[$max_length] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      if (HEAP[$length] >= HEAP[$max_length]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $48 = HEAP[$length];
      HEAP[$old_length] = $48;
      
      var $50 = HEAP[$length] << 1;
      HEAP[$length] = $50;
      
      
      if (HEAP[$max_length] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      
      if (HEAP[$length] > HEAP[$max_length]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $56 = HEAP[$max_length];
      HEAP[$length] = $56;
      __label__ = 15;
      break;
     case 15:
      var $57 = HEAP[$length];
      var $58 = __PyString_Resize($RetVal, $57);
      
      if ($58 < 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      var $65 = HEAP[$RetVal] + 20 + HEAP[$old_length];
      
      
      var $68 = HEAP[$self_addr] + 8 + 12;
      HEAP[$68] = $65;
      
      
      var $71 = HEAP[$length] - HEAP[$old_length];
      
      
      var $74 = HEAP[$self_addr] + 8 + 16;
      HEAP[$74] = $71;
      
      var $76 = HEAP[$self_addr] + 8;
      var $77 = _inflate($76, 2);
      HEAP[$err] = $77;
      __label__ = 17;
      break;
     case 17:
      
      
      if (HEAP[$err] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8 + 16] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      if (HEAP[$max_length] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      
      
      var $89 = HEAP[HEAP[$self_addr] + 68];
      
      
      var $92 = HEAP[$89] - 1;
      var $93 = $89;
      HEAP[$93] = $92;
      
      
      
      if (HEAP[$89] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      
      
      var $103 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 68] + 4] + 24];
      
      
      var $106 = HEAP[HEAP[$self_addr] + 68];
      FUNCTION_TABLE[$103]($106);
      __label__ = 22;
      break;
     case 22:
      
      
      
      var $110 = HEAP[HEAP[$self_addr] + 8 + 4];
      
      
      
      var $114 = HEAP[HEAP[$self_addr] + 8];
      var $115 = _PyString_FromStringAndSize($114, $110);
      
      var $117 = HEAP[$self_addr] + 68;
      HEAP[$117] = $115;
      __label__ = 27;
      break;
     case 23:
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 68] + 8] > 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 24:
      
      
      var $127 = HEAP[HEAP[$self_addr] + 68];
      
      
      var $130 = HEAP[$127] - 1;
      var $131 = $127;
      HEAP[$131] = $130;
      
      
      
      if (HEAP[$127] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      
      
      var $141 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 68] + 4] + 24];
      
      
      var $144 = HEAP[HEAP[$self_addr] + 68];
      FUNCTION_TABLE[$141]($144);
      __label__ = 26;
      break;
     case 26:
      var $145 = _PyString_FromStringAndSize(__str5, 0);
      
      var $147 = HEAP[$self_addr] + 68;
      HEAP[$147] = $145;
      __label__ = 27;
      break;
     case 27:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 68] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 28:
      var $152 = HEAP[$RetVal];
      
      
      var $155 = HEAP[$152] - 1;
      var $156 = $152;
      HEAP[$156] = $155;
      
      
      
      if (HEAP[$152] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $164 = HEAP[HEAP[HEAP[$RetVal] + 4] + 24];
      var $165 = HEAP[$RetVal];
      FUNCTION_TABLE[$164]($165);
      __label__ = 30;
      break;
     case 30:
      HEAP[$RetVal] = 0;
      __label__ = 46;
      break;
     case 31:
      
      
      if (HEAP[$err] == 1) {
        __label__ = 32;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 32:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 64] != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 33:
      
      
      var $174 = HEAP[HEAP[$self_addr] + 64];
      
      
      var $177 = HEAP[$174] - 1;
      var $178 = $174;
      HEAP[$178] = $177;
      
      
      
      if (HEAP[$174] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      
      
      var $188 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 64] + 4] + 24];
      
      
      var $191 = HEAP[HEAP[$self_addr] + 64];
      FUNCTION_TABLE[$188]($191);
      __label__ = 35;
      break;
     case 35:
      
      
      
      var $195 = HEAP[HEAP[$self_addr] + 8 + 4];
      
      
      
      var $199 = HEAP[HEAP[$self_addr] + 8];
      var $200 = _PyString_FromStringAndSize($199, $195);
      
      var $202 = HEAP[$self_addr] + 64;
      HEAP[$202] = $200;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 64] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 36:
      var $207 = HEAP[$RetVal];
      
      
      var $210 = HEAP[$207] - 1;
      var $211 = $207;
      HEAP[$211] = $210;
      
      
      
      if (HEAP[$207] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $219 = HEAP[HEAP[HEAP[$RetVal] + 4] + 24];
      var $220 = HEAP[$RetVal];
      FUNCTION_TABLE[$219]($220);
      __label__ = 38;
      break;
     case 38:
      __label__ = 46;
      break;
     case 39:
      __label__ = 45;
      break;
     case 40:
      
      
      if (HEAP[$err] != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 41:
      
      var $224 = HEAP[$err] != -5;
      if ($224) {
        __label__ = 42;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 42:
      
      var $226 = HEAP[$self_addr] + 8;
      var $227 = HEAP[$err];
      _zlib_error($226, $227, __str29);
      var $228 = HEAP[$RetVal];
      
      
      var $231 = HEAP[$228] - 1;
      var $232 = $228;
      HEAP[$232] = $231;
      
      
      
      if (HEAP[$228] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      
      
      var $240 = HEAP[HEAP[HEAP[$RetVal] + 4] + 24];
      var $241 = HEAP[$RetVal];
      FUNCTION_TABLE[$240]($241);
      __label__ = 44;
      break;
     case 44:
      HEAP[$RetVal] = 0;
      __label__ = 46;
      break;
     case 45:
      
      
      
      
      
      var $247 = HEAP[HEAP[$self_addr] + 8 + 20] - HEAP[$start_total_out];
      var $248 = __PyString_Resize($RetVal, $247);
      __label__ = 46;
      break;
     case 46:
      var $249 = HEAP[$RetVal];
      HEAP[$0] = $249;
      __label__ = 47;
      break;
     case 47:
      var $250 = HEAP[$0];
      HEAP[$retval] = $250;
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
  function _PyZlib_flush($self, $args) {
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
      var $err = __stackBase__ + 16;
      var $length = __stackBase__ + 20;
      var $RetVal = __stackBase__ + 24;
      var $flushmode = __stackBase__ + 28;
      var $start_total_out = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$length] = 16384;
      HEAP[$flushmode] = 4;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str30, allocate([ $flushmode, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$flushmode] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = _PyString_FromStringAndSize(0, 0);
      HEAP[$0] = $6;
      __label__ = 25;
      break;
     case 4:
      var $7 = HEAP[$length];
      var $8 = _PyString_FromStringAndSize(0, $7);
      HEAP[$RetVal] = $8;
      
      
      if (HEAP[$RetVal] == 0) {
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
      
      
      
      var $14 = HEAP[HEAP[$self_addr] + 8 + 20];
      HEAP[$start_total_out] = $14;
      
      
      var $17 = HEAP[$self_addr] + 8 + 4;
      HEAP[$17] = 0;
      var $18 = HEAP[$length];
      
      
      var $21 = HEAP[$self_addr] + 8 + 16;
      HEAP[$21] = $18;
      
      
      
      var $25 = HEAP[$RetVal] + 20;
      
      
      var $28 = HEAP[$self_addr] + 8 + 12;
      HEAP[$28] = $25;
      var $29 = HEAP[$flushmode];
      
      var $31 = HEAP[$self_addr] + 8;
      var $32 = _deflate($31, $29);
      HEAP[$err] = $32;
      __label__ = 9;
      break;
     case 7:
      
      var $34 = HEAP[$length] << 1;
      var $35 = __PyString_Resize($RetVal, $34);
      
      if ($35 < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      var $42 = HEAP[$RetVal] + 20 + HEAP[$length];
      
      
      var $45 = HEAP[$self_addr] + 8 + 12;
      HEAP[$45] = $42;
      var $46 = HEAP[$length];
      
      
      var $49 = HEAP[$self_addr] + 8 + 16;
      HEAP[$49] = $46;
      
      var $51 = HEAP[$length] << 1;
      HEAP[$length] = $51;
      var $52 = HEAP[$flushmode];
      
      var $54 = HEAP[$self_addr] + 8;
      var $55 = _deflate($54, $52);
      HEAP[$err] = $55;
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$err] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8 + 16] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      if (HEAP[$err] != 1) {
        __label__ = 18;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if (HEAP[$flushmode] != 4) {
        __label__ = 18;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      var $68 = HEAP[$self_addr] + 8;
      var $69 = _deflateEnd($68);
      HEAP[$err] = $69;
      
      
      if (HEAP[$err] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      var $73 = HEAP[$self_addr] + 8;
      var $74 = HEAP[$err];
      _zlib_error($73, $74, __str31);
      var $75 = HEAP[$RetVal];
      
      
      var $78 = HEAP[$75] - 1;
      var $79 = $75;
      HEAP[$79] = $78;
      
      
      
      if (HEAP[$75] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $87 = HEAP[HEAP[HEAP[$RetVal] + 4] + 24];
      var $88 = HEAP[$RetVal];
      FUNCTION_TABLE[$87]($88);
      __label__ = 16;
      break;
     case 16:
      HEAP[$RetVal] = 0;
      __label__ = 24;
      break;
     case 17:
      
      var $90 = HEAP[$self_addr] + 72;
      HEAP[$90] = 0;
      __label__ = 23;
      break;
     case 18:
      
      
      if (HEAP[$err] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 19:
      
      var $94 = HEAP[$err] != -5;
      if ($94) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      
      var $96 = HEAP[$self_addr] + 8;
      var $97 = HEAP[$err];
      _zlib_error($96, $97, __str32);
      var $98 = HEAP[$RetVal];
      
      
      var $101 = HEAP[$98] - 1;
      var $102 = $98;
      HEAP[$102] = $101;
      
      
      
      if (HEAP[$98] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $110 = HEAP[HEAP[HEAP[$RetVal] + 4] + 24];
      var $111 = HEAP[$RetVal];
      FUNCTION_TABLE[$110]($111);
      __label__ = 22;
      break;
     case 22:
      HEAP[$RetVal] = 0;
      __label__ = 24;
      break;
     case 23:
      
      
      
      
      
      var $117 = HEAP[HEAP[$self_addr] + 8 + 20] - HEAP[$start_total_out];
      var $118 = __PyString_Resize($RetVal, $117);
      __label__ = 24;
      break;
     case 24:
      var $119 = HEAP[$RetVal];
      HEAP[$0] = $119;
      __label__ = 25;
      break;
     case 25:
      var $120 = HEAP[$0];
      HEAP[$retval] = $120;
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
  function _PyZlib_copy($self) {
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
      var $retval1 = __stackBase__ + 12;
      var $err = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$retval1] = 0;
      var $1 = _newcompobject(_Comptype);
      HEAP[$retval1] = $1;
      
      
      if (HEAP[$retval1] == 0) {
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
      
      var $5 = HEAP[$self_addr] + 8;
      
      var $7 = HEAP[$retval1] + 8;
      var $8 = _deflateCopy($7, $5);
      HEAP[$err] = $8;
      var $9 = HEAP[$err];
      if ($9 == -4) {
        __label__ = 5;
        break;
      } else if ($9 == -2) {
        __label__ = 4;
        break;
      } else if ($9 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      
      var $15 = HEAP[HEAP[HEAP[$self_addr] + 64]] + 1;
      var $16 = HEAP[HEAP[$self_addr] + 64];
      HEAP[$16] = $15;
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$self_addr] + 68]] + 1;
      var $23 = HEAP[HEAP[$self_addr] + 68];
      HEAP[$23] = $22;
      
      
      
      
      if (HEAP[HEAP[$retval1] + 64] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      var $28 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($28, __str33);
      __label__ = 13;
      break;
     case 5:
      var $29 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($29, __str19);
      __label__ = 13;
      break;
     case 6:
      
      var $31 = HEAP[$self_addr] + 8;
      var $32 = HEAP[$err];
      _zlib_error($31, $32, __str34);
      __label__ = 13;
      break;
     case 7:
      
      
      var $35 = HEAP[HEAP[$retval1] + 64];
      
      
      var $38 = HEAP[$35] - 1;
      var $39 = $35;
      HEAP[$39] = $38;
      
      
      
      if (HEAP[$35] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[HEAP[$retval1] + 64] + 4] + 24];
      
      
      var $52 = HEAP[HEAP[$retval1] + 64];
      FUNCTION_TABLE[$49]($52);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$retval1] + 68] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $59 = HEAP[HEAP[$retval1] + 68];
      
      
      var $62 = HEAP[$59] - 1;
      var $63 = $59;
      HEAP[$63] = $62;
      
      
      
      if (HEAP[$59] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[HEAP[$retval1] + 68] + 4] + 24];
      
      
      var $76 = HEAP[HEAP[$retval1] + 68];
      FUNCTION_TABLE[$73]($76);
      __label__ = 12;
      break;
     case 12:
      
      
      var $79 = HEAP[HEAP[$self_addr] + 64];
      
      var $81 = HEAP[$retval1] + 64;
      HEAP[$81] = $79;
      
      
      var $84 = HEAP[HEAP[$self_addr] + 68];
      
      var $86 = HEAP[$retval1] + 68;
      HEAP[$86] = $84;
      
      var $88 = HEAP[$retval1] + 72;
      HEAP[$88] = 1;
      
      var $90 = HEAP[$retval1];
      HEAP[$0] = $90;
      __label__ = 17;
      break;
     case 13:
      
      
      if (HEAP[$retval1] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      var $94 = HEAP[$retval1];
      
      
      var $97 = HEAP[$94] - 1;
      var $98 = $94;
      HEAP[$98] = $97;
      
      
      
      if (HEAP[$94] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      var $107 = HEAP[HEAP[HEAP[$retval1] + 4] + 24];
      
      var $109 = HEAP[$retval1];
      FUNCTION_TABLE[$107]($109);
      __label__ = 16;
      break;
     case 16:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 17:
      var $110 = HEAP[$0];
      HEAP[$retval] = $110;
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
  function _PyZlib_uncopy($self) {
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
      var $retval1 = __stackBase__ + 12;
      var $err = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$retval1] = 0;
      var $1 = _newcompobject(_Decomptype);
      HEAP[$retval1] = $1;
      
      
      if (HEAP[$retval1] == 0) {
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
      
      var $5 = HEAP[$self_addr] + 8;
      
      var $7 = HEAP[$retval1] + 8;
      var $8 = _inflateCopy($7, $5);
      HEAP[$err] = $8;
      var $9 = HEAP[$err];
      if ($9 == -4) {
        __label__ = 5;
        break;
      } else if ($9 == -2) {
        __label__ = 4;
        break;
      } else if ($9 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      
      var $15 = HEAP[HEAP[HEAP[$self_addr] + 64]] + 1;
      var $16 = HEAP[HEAP[$self_addr] + 64];
      HEAP[$16] = $15;
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$self_addr] + 68]] + 1;
      var $23 = HEAP[HEAP[$self_addr] + 68];
      HEAP[$23] = $22;
      
      
      
      
      if (HEAP[HEAP[$retval1] + 64] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      var $28 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($28, __str33);
      __label__ = 13;
      break;
     case 5:
      var $29 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($29, __str23);
      __label__ = 13;
      break;
     case 6:
      
      var $31 = HEAP[$self_addr] + 8;
      var $32 = HEAP[$err];
      _zlib_error($31, $32, __str35);
      __label__ = 13;
      break;
     case 7:
      
      
      var $35 = HEAP[HEAP[$retval1] + 64];
      
      
      var $38 = HEAP[$35] - 1;
      var $39 = $35;
      HEAP[$39] = $38;
      
      
      
      if (HEAP[$35] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[HEAP[$retval1] + 64] + 4] + 24];
      
      
      var $52 = HEAP[HEAP[$retval1] + 64];
      FUNCTION_TABLE[$49]($52);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[HEAP[$retval1] + 68] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $59 = HEAP[HEAP[$retval1] + 68];
      
      
      var $62 = HEAP[$59] - 1;
      var $63 = $59;
      HEAP[$63] = $62;
      
      
      
      if (HEAP[$59] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[HEAP[$retval1] + 68] + 4] + 24];
      
      
      var $76 = HEAP[HEAP[$retval1] + 68];
      FUNCTION_TABLE[$73]($76);
      __label__ = 12;
      break;
     case 12:
      
      
      var $79 = HEAP[HEAP[$self_addr] + 64];
      
      var $81 = HEAP[$retval1] + 64;
      HEAP[$81] = $79;
      
      
      var $84 = HEAP[HEAP[$self_addr] + 68];
      
      var $86 = HEAP[$retval1] + 68;
      HEAP[$86] = $84;
      
      var $88 = HEAP[$retval1] + 72;
      HEAP[$88] = 1;
      
      var $90 = HEAP[$retval1];
      HEAP[$0] = $90;
      __label__ = 17;
      break;
     case 13:
      
      
      if (HEAP[$retval1] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      var $94 = HEAP[$retval1];
      
      
      var $97 = HEAP[$94] - 1;
      var $98 = $94;
      HEAP[$98] = $97;
      
      
      
      if (HEAP[$94] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      var $107 = HEAP[HEAP[HEAP[$retval1] + 4] + 24];
      
      var $109 = HEAP[$retval1];
      FUNCTION_TABLE[$107]($109);
      __label__ = 16;
      break;
     case 16:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 17:
      var $110 = HEAP[$0];
      HEAP[$retval] = $110;
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
  function _PyZlib_unflush($self, $args) {
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
      var $err = __stackBase__ + 16;
      var $length = __stackBase__ + 20;
      var $retval1 = __stackBase__ + 24;
      var $start_total_out = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$length] = 16384;
      HEAP[$retval1] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str30, allocate([ $length, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$length] <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($6, __str36);
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 4:
      var $7 = HEAP[$length];
      var $8 = _PyString_FromStringAndSize(0, $7);
      HEAP[$retval1] = $8;
      
      
      if (HEAP[$retval1] == 0) {
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
      
      
      
      var $14 = HEAP[HEAP[$self_addr] + 8 + 20];
      HEAP[$start_total_out] = $14;
      var $15 = HEAP[$length];
      
      
      var $18 = HEAP[$self_addr] + 8 + 16;
      HEAP[$18] = $15;
      
      
      
      var $22 = HEAP[$retval1] + 20;
      
      
      var $25 = HEAP[$self_addr] + 8 + 12;
      HEAP[$25] = $22;
      
      var $27 = HEAP[$self_addr] + 8;
      var $28 = _inflate($27, 4);
      HEAP[$err] = $28;
      __label__ = 9;
      break;
     case 7:
      
      var $30 = HEAP[$length] << 1;
      var $31 = __PyString_Resize($retval1, $30);
      
      if ($31 < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      var $38 = HEAP[$retval1] + 20 + HEAP[$length];
      
      
      var $41 = HEAP[$self_addr] + 8 + 12;
      HEAP[$41] = $38;
      var $42 = HEAP[$length];
      
      
      var $45 = HEAP[$self_addr] + 8 + 16;
      HEAP[$45] = $42;
      
      var $47 = HEAP[$length] << 1;
      HEAP[$length] = $47;
      
      var $49 = HEAP[$self_addr] + 8;
      var $50 = _inflate($49, 4);
      HEAP[$err] = $50;
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$err] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      var $54 = HEAP[$err] == -5;
      if ($54) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8 + 16] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if (HEAP[$err] == 1) {
        __label__ = 13;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 13:
      
      var $63 = HEAP[$self_addr] + 8;
      var $64 = _inflateEnd($63);
      HEAP[$err] = $64;
      
      var $66 = HEAP[$self_addr] + 72;
      HEAP[$66] = 0;
      
      
      if (HEAP[$err] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      var $70 = HEAP[$self_addr] + 8;
      var $71 = HEAP[$err];
      _zlib_error($70, $71, __str37);
      var $72 = HEAP[$retval1];
      
      
      var $75 = HEAP[$72] - 1;
      var $76 = $72;
      HEAP[$76] = $75;
      
      
      
      if (HEAP[$72] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $84 = HEAP[HEAP[HEAP[$retval1] + 4] + 24];
      var $85 = HEAP[$retval1];
      FUNCTION_TABLE[$84]($85);
      __label__ = 16;
      break;
     case 16:
      HEAP[$retval1] = 0;
      __label__ = 18;
      break;
     case 17:
      
      
      
      
      
      var $91 = HEAP[HEAP[$self_addr] + 8 + 20] - HEAP[$start_total_out];
      var $92 = __PyString_Resize($retval1, $91);
      __label__ = 18;
      break;
     case 18:
      var $93 = HEAP[$retval1];
      HEAP[$0] = $93;
      __label__ = 19;
      break;
     case 19:
      var $94 = HEAP[$0];
      HEAP[$retval] = $94;
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
  function _Comp_getattr($self, $name) {
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
      var $4 = _Py_FindMethod(_comp_methods, $2, $3);
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
  function _Decomp_getattr($self, $name) {
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
      var $retval1 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$name_addr] = $name;
      var $1 = HEAP[$name_addr];
      var $2 = _strcmp($1, __str42);
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      var $9 = HEAP[HEAP[HEAP[$self_addr] + 64]] + 1;
      var $10 = HEAP[HEAP[$self_addr] + 64];
      HEAP[$10] = $9;
      
      
      var $13 = HEAP[HEAP[$self_addr] + 64];
      HEAP[$retval1] = $13;
      __label__ = 5;
      break;
     case 2:
      var $14 = HEAP[$name_addr];
      var $15 = _strcmp($14, __str43);
      
      if ($15 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$self_addr] + 68]] + 1;
      var $23 = HEAP[HEAP[$self_addr] + 68];
      HEAP[$23] = $22;
      
      
      var $26 = HEAP[HEAP[$self_addr] + 68];
      HEAP[$retval1] = $26;
      __label__ = 5;
      break;
     case 4:
      
      var $28 = HEAP[$self_addr];
      var $29 = HEAP[$name_addr];
      var $30 = _Py_FindMethod(_Decomp_methods, $28, $29);
      HEAP[$retval1] = $30;
      __label__ = 5;
      break;
     case 5:
      var $31 = HEAP[$retval1];
      HEAP[$0] = $31;
      var $32 = HEAP[$0];
      HEAP[$retval] = $32;
      __label__ = 6;
      break;
     case 6:
      var $retval6 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyZlib_adler32($self, $args) {
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
      var $adler32val = __stackBase__ + 16;
      var $buf = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $signed_val = __stackBase__ + 28;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$adler32val] = 1;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str44, allocate([ $buf, 0, 0, 0, $len, 0, 0, 0, $adler32val, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$len];
      var $5 = HEAP[$buf];
      var $6 = HEAP[$adler32val];
      var $7 = _adler32($6, $5, $4);
      HEAP[$signed_val] = $7;
      var $8 = HEAP[$signed_val];
      var $9 = _PyInt_FromLong($8);
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
  function _PyZlib_crc32($self, $args) {
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
      var $crc32val = __stackBase__ + 16;
      var $buf = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $signed_val = __stackBase__ + 28;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$crc32val] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str45, allocate([ $buf, 0, 0, 0, $len, 0, 0, 0, $crc32val, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$len];
      var $5 = HEAP[$buf];
      var $6 = HEAP[$crc32val];
      var $7 = _crc32($6, $5, $4);
      HEAP[$signed_val] = $7;
      var $8 = HEAP[$signed_val];
      var $9 = _PyInt_FromLong($8);
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
  function _initzlib() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      var $ver = __stackBase__ + 4;
      
      
      HEAP[_Comptype + 4] = _PyType_Type;
      
      HEAP[_Decomptype + 4] = _PyType_Type;
      var $2 = _Py_InitModule4(__str52, _zlib_methods, _zlib_module_documentation, 0, 1013);
      HEAP[$m] = $2;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $5 = _PyErr_NewException(__str53, 0, 0);
      HEAP[_ZlibError] = $5;
      
      
      if (HEAP[_ZlibError] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $11 = HEAP[HEAP[_ZlibError]] + 1;
      var $12 = HEAP[_ZlibError];
      HEAP[$12] = $11;
      var $13 = HEAP[_ZlibError];
      var $14 = HEAP[$m];
      var $15 = _PyModule_AddObject($14, __str54, $13);
      __label__ = 3;
      break;
     case 3:
      var $16 = HEAP[$m];
      var $17 = _PyModule_AddIntConstant($16, __str55, 15);
      var $18 = HEAP[$m];
      var $19 = _PyModule_AddIntConstant($18, __str56, 8);
      var $20 = HEAP[$m];
      var $21 = _PyModule_AddIntConstant($20, __str57, 8);
      var $22 = HEAP[$m];
      var $23 = _PyModule_AddIntConstant($22, __str58, 1);
      var $24 = HEAP[$m];
      var $25 = _PyModule_AddIntConstant($24, __str59, 9);
      var $26 = HEAP[$m];
      var $27 = _PyModule_AddIntConstant($26, __str60, -1);
      var $28 = HEAP[$m];
      var $29 = _PyModule_AddIntConstant($28, __str61, 1);
      var $30 = HEAP[$m];
      var $31 = _PyModule_AddIntConstant($30, __str62, 2);
      var $32 = HEAP[$m];
      var $33 = _PyModule_AddIntConstant($32, __str63, 0);
      var $34 = HEAP[$m];
      var $35 = _PyModule_AddIntConstant($34, __str64, 4);
      var $36 = HEAP[$m];
      var $37 = _PyModule_AddIntConstant($36, __str65, 0);
      var $38 = HEAP[$m];
      var $39 = _PyModule_AddIntConstant($38, __str66, 2);
      var $40 = HEAP[$m];
      var $41 = _PyModule_AddIntConstant($40, __str67, 3);
      var $42 = _PyString_FromString(__str8);
      HEAP[$ver] = $42;
      
      
      if (HEAP[$ver] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $45 = HEAP[$m];
      var $46 = HEAP[$ver];
      var $47 = _PyModule_AddObject($45, __str68, $46);
      __label__ = 5;
      break;
     case 5:
      var $48 = HEAP[$m];
      var $49 = _PyModule_AddStringConstant($48, __str69, __str70);
      __label__ = 6;
      break;
     case 6:
      __label__ = 7;
      break;
     case 7:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initzlib"] = _initzlib;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _PyZlib_objcompress, 0, _PyZlib_flush, 0, _PyZlib_copy, 0, _PyZlib_objdecompress, 0, _PyZlib_unflush, 0, _PyZlib_uncopy, 0, _PyZlib_adler32, 0, _PyZlib_compress, 0, _PyZlib_compressobj, 0, _PyZlib_crc32, 0, _PyZlib_decompress, 0, _PyZlib_decompressobj, 0, _Comp_dealloc, 0, _Comp_getattr, 0, _Decomp_dealloc, 0, _Decomp_getattr, 0 ]);
  function run(args) {
    __str = allocate([ 105, 110, 99, 111, 109, 112, 108, 101, 116, 101, 32, 111, 114, 32, 116, 114, 117, 110, 99, 97, 116, 101, 100, 32, 115, 116, 114, 101, 97, 109, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 105, 110, 99, 111, 110, 115, 105, 115, 116, 101, 110, 116, 32, 115, 116, 114, 101, 97, 109, 32, 115, 116, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 105, 110, 112, 117, 116, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    _ZlibError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str3 = allocate([ 69, 114, 114, 111, 114, 32, 37, 100, 32, 37, 115, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 69, 114, 114, 111, 114, 32, 37, 100, 32, 37, 115, 58, 32, 37, 46, 50, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    _compressobj__doc__ = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 111, 98, 106, 40, 91, 108, 101, 118, 101, 108, 93, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 46, 10, 10, 79, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 32, 108, 101, 118, 101, 108, 32, 105, 115, 32, 116, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 108, 101, 118, 101, 108, 44, 32, 105, 110, 32, 49, 45, 57, 46, 0 ], "i8", ALLOC_NORMAL);
    _decompressobj__doc__ = allocate([ 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 98, 106, 40, 91, 119, 98, 105, 116, 115, 93, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 46, 10, 10, 79, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 32, 119, 98, 105, 116, 115, 32, 105, 115, 32, 116, 104, 101, 32, 119, 105, 110, 100, 111, 119, 32, 98, 117, 102, 102, 101, 114, 32, 115, 105, 122, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate(1, "i8", ALLOC_NORMAL);
    _compress__doc__ = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 40, 115, 116, 114, 105, 110, 103, 91, 44, 32, 108, 101, 118, 101, 108, 93, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 101, 100, 32, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 115, 116, 114, 105, 110, 103, 46, 10, 10, 79, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 32, 108, 101, 118, 101, 108, 32, 105, 115, 32, 116, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 108, 101, 118, 101, 108, 44, 32, 105, 110, 32, 49, 45, 57, 46, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 115, 35, 124, 105, 58, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 67, 97, 110, 39, 116, 32, 97, 108, 108, 111, 99, 97, 116, 101, 32, 109, 101, 109, 111, 114, 121, 32, 116, 111, 32, 99, 111, 109, 112, 114, 101, 115, 115, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 49, 46, 50, 46, 51, 46, 52, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 79, 117, 116, 32, 111, 102, 32, 109, 101, 109, 111, 114, 121, 32, 119, 104, 105, 108, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 66, 97, 100, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 108, 101, 118, 101, 108, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 119, 104, 105, 108, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 119, 104, 105, 108, 101, 32, 102, 105, 110, 105, 115, 104, 105, 110, 103, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    _decompress__doc__ = allocate([ 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 40, 115, 116, 114, 105, 110, 103, 91, 44, 32, 119, 98, 105, 116, 115, 91, 44, 32, 98, 117, 102, 115, 105, 122, 101, 93, 93, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 115, 116, 114, 105, 110, 103, 46, 10, 10, 79, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 32, 119, 98, 105, 116, 115, 32, 105, 115, 32, 116, 104, 101, 32, 119, 105, 110, 100, 111, 119, 32, 98, 117, 102, 102, 101, 114, 32, 115, 105, 122, 101, 46, 32, 32, 79, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 32, 98, 117, 102, 115, 105, 122, 101, 32, 105, 115, 10, 116, 104, 101, 32, 105, 110, 105, 116, 105, 97, 108, 32, 111, 117, 116, 112, 117, 116, 32, 98, 117, 102, 102, 101, 114, 32, 115, 105, 122, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 115, 35, 124, 105, 110, 58, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 79, 117, 116, 32, 111, 102, 32, 109, 101, 109, 111, 114, 121, 32, 119, 104, 105, 108, 101, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 119, 104, 105, 108, 101, 32, 112, 114, 101, 112, 97, 114, 105, 110, 103, 32, 116, 111, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 119, 104, 105, 108, 101, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 119, 104, 105, 108, 101, 32, 102, 105, 110, 105, 115, 104, 105, 110, 103, 32, 100, 97, 116, 97, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 124, 105, 105, 105, 105, 105, 58, 99, 111, 109, 112, 114, 101, 115, 115, 111, 98, 106, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 67, 97, 110, 39, 116, 32, 97, 108, 108, 111, 99, 97, 116, 101, 32, 109, 101, 109, 111, 114, 121, 32, 102, 111, 114, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 73, 110, 118, 97, 108, 105, 100, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 97, 116, 105, 111, 110, 32, 111, 112, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 119, 104, 105, 108, 101, 32, 99, 114, 101, 97, 116, 105, 110, 103, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 124, 105, 58, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 98, 106, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 67, 97, 110, 39, 116, 32, 97, 108, 108, 111, 99, 97, 116, 101, 32, 109, 101, 109, 111, 114, 121, 32, 102, 111, 114, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 119, 104, 105, 108, 101, 32, 99, 114, 101, 97, 116, 105, 110, 103, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _comp_compress__doc__ = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 40, 100, 97, 116, 97, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 100, 97, 116, 97, 32, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 46, 10, 10, 65, 102, 116, 101, 114, 32, 99, 97, 108, 108, 105, 110, 103, 32, 116, 104, 105, 115, 32, 102, 117, 110, 99, 116, 105, 111, 110, 44, 32, 115, 111, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 105, 110, 112, 117, 116, 32, 100, 97, 116, 97, 32, 109, 97, 121, 32, 115, 116, 105, 108, 108, 10, 98, 101, 32, 115, 116, 111, 114, 101, 100, 32, 105, 110, 32, 105, 110, 116, 101, 114, 110, 97, 108, 32, 98, 117, 102, 102, 101, 114, 115, 32, 102, 111, 114, 32, 108, 97, 116, 101, 114, 32, 112, 114, 111, 99, 101, 115, 115, 105, 110, 103, 46, 10, 67, 97, 108, 108, 32, 116, 104, 101, 32, 102, 108, 117, 115, 104, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 116, 111, 32, 99, 108, 101, 97, 114, 32, 116, 104, 101, 115, 101, 32, 98, 117, 102, 102, 101, 114, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 115, 35, 58, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 119, 104, 105, 108, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _decomp_decompress__doc__ = allocate([ 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 40, 100, 97, 116, 97, 44, 32, 109, 97, 120, 95, 108, 101, 110, 103, 116, 104, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 116, 104, 101, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 10, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32, 116, 104, 101, 32, 100, 97, 116, 97, 46, 10, 10, 65, 102, 116, 101, 114, 32, 99, 97, 108, 108, 105, 110, 103, 32, 116, 104, 105, 115, 32, 102, 117, 110, 99, 116, 105, 111, 110, 44, 32, 115, 111, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 105, 110, 112, 117, 116, 32, 100, 97, 116, 97, 32, 109, 97, 121, 32, 115, 116, 105, 108, 108, 32, 98, 101, 32, 115, 116, 111, 114, 101, 100, 32, 105, 110, 10, 105, 110, 116, 101, 114, 110, 97, 108, 32, 98, 117, 102, 102, 101, 114, 115, 32, 102, 111, 114, 32, 108, 97, 116, 101, 114, 32, 112, 114, 111, 99, 101, 115, 115, 105, 110, 103, 46, 10, 67, 97, 108, 108, 32, 116, 104, 101, 32, 102, 108, 117, 115, 104, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 116, 111, 32, 99, 108, 101, 97, 114, 32, 116, 104, 101, 115, 101, 32, 98, 117, 102, 102, 101, 114, 115, 46, 10, 73, 102, 32, 116, 104, 101, 32, 109, 97, 120, 95, 108, 101, 110, 103, 116, 104, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 105, 115, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 116, 104, 101, 110, 32, 116, 104, 101, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 119, 105, 108, 108, 32, 98, 101, 10, 110, 111, 32, 108, 111, 110, 103, 101, 114, 32, 116, 104, 97, 110, 32, 109, 97, 120, 95, 108, 101, 110, 103, 116, 104, 46, 32, 32, 85, 110, 99, 111, 110, 115, 117, 109, 101, 100, 32, 105, 110, 112, 117, 116, 32, 100, 97, 116, 97, 32, 119, 105, 108, 108, 32, 98, 101, 32, 115, 116, 111, 114, 101, 100, 32, 105, 110, 10, 116, 104, 101, 32, 117, 110, 99, 111, 110, 115, 117, 109, 101, 100, 95, 116, 97, 105, 108, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 115, 35, 124, 105, 58, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 109, 97, 120, 95, 108, 101, 110, 103, 116, 104, 32, 109, 117, 115, 116, 32, 98, 101, 32, 103, 114, 101, 97, 116, 101, 114, 32, 116, 104, 97, 110, 32, 122, 101, 114, 111, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 119, 104, 105, 108, 101, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _comp_flush__doc__ = allocate([ 102, 108, 117, 115, 104, 40, 32, 91, 109, 111, 100, 101, 93, 32, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 97, 110, 121, 32, 114, 101, 109, 97, 105, 110, 105, 110, 103, 32, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 100, 97, 116, 97, 46, 10, 10, 109, 111, 100, 101, 32, 99, 97, 110, 32, 98, 101, 32, 111, 110, 101, 32, 111, 102, 32, 116, 104, 101, 32, 99, 111, 110, 115, 116, 97, 110, 116, 115, 32, 90, 95, 83, 89, 78, 67, 95, 70, 76, 85, 83, 72, 44, 32, 90, 95, 70, 85, 76, 76, 95, 70, 76, 85, 83, 72, 44, 32, 90, 95, 70, 73, 78, 73, 83, 72, 59, 32, 116, 104, 101, 10, 100, 101, 102, 97, 117, 108, 116, 32, 118, 97, 108, 117, 101, 32, 117, 115, 101, 100, 32, 119, 104, 101, 110, 32, 109, 111, 100, 101, 32, 105, 115, 32, 110, 111, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 105, 115, 32, 90, 95, 70, 73, 78, 73, 83, 72, 46, 10, 73, 102, 32, 109, 111, 100, 101, 32, 61, 61, 32, 90, 95, 70, 73, 78, 73, 83, 72, 44, 32, 116, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 32, 99, 97, 110, 32, 110, 111, 32, 108, 111, 110, 103, 101, 114, 32, 98, 101, 32, 117, 115, 101, 100, 32, 97, 102, 116, 101, 114, 10, 99, 97, 108, 108, 105, 110, 103, 32, 116, 104, 101, 32, 102, 108, 117, 115, 104, 40, 41, 32, 109, 101, 116, 104, 111, 100, 46, 32, 32, 79, 116, 104, 101, 114, 119, 105, 115, 101, 44, 32, 109, 111, 114, 101, 32, 100, 97, 116, 97, 32, 99, 97, 110, 32, 115, 116, 105, 108, 108, 32, 98, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 124, 105, 58, 102, 108, 117, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 102, 114, 111, 109, 32, 100, 101, 102, 108, 97, 116, 101, 69, 110, 100, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 119, 104, 105, 108, 101, 32, 102, 108, 117, 115, 104, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _comp_copy__doc__ = allocate([ 99, 111, 112, 121, 40, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 111, 98, 106, 101, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 73, 110, 99, 111, 110, 115, 105, 115, 116, 101, 110, 116, 32, 115, 116, 114, 101, 97, 109, 32, 115, 116, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 119, 104, 105, 108, 101, 32, 99, 111, 112, 121, 105, 110, 103, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _decomp_copy__doc__ = allocate([ 99, 111, 112, 121, 40, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 111, 98, 106, 101, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 119, 104, 105, 108, 101, 32, 99, 111, 112, 121, 105, 110, 103, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _decomp_flush__doc__ = allocate([ 102, 108, 117, 115, 104, 40, 32, 91, 108, 101, 110, 103, 116, 104, 93, 32, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 97, 110, 121, 32, 114, 101, 109, 97, 105, 110, 105, 110, 103, 10, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 100, 97, 116, 97, 46, 32, 108, 101, 110, 103, 116, 104, 44, 32, 105, 102, 32, 103, 105, 118, 101, 110, 44, 32, 105, 115, 32, 116, 104, 101, 32, 105, 110, 105, 116, 105, 97, 108, 32, 115, 105, 122, 101, 32, 111, 102, 32, 116, 104, 101, 10, 111, 117, 116, 112, 117, 116, 32, 98, 117, 102, 102, 101, 114, 46, 10, 10, 84, 104, 101, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 32, 99, 97, 110, 32, 110, 111, 32, 108, 111, 110, 103, 101, 114, 32, 98, 101, 32, 117, 115, 101, 100, 32, 97, 102, 116, 101, 114, 32, 116, 104, 105, 115, 32, 99, 97, 108, 108, 46, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 108, 101, 110, 103, 116, 104, 32, 109, 117, 115, 116, 32, 98, 101, 32, 103, 114, 101, 97, 116, 101, 114, 32, 116, 104, 97, 110, 32, 122, 101, 114, 111, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 102, 114, 111, 109, 32, 105, 110, 102, 108, 97, 116, 101, 69, 110, 100, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 102, 108, 117, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 99, 111, 112, 121, 0 ], "i8", ALLOC_NORMAL);
    _comp_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str41 = allocate([ 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    _Decomp_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str42 = allocate([ 117, 110, 117, 115, 101, 100, 95, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 117, 110, 99, 111, 110, 115, 117, 109, 101, 100, 95, 116, 97, 105, 108, 0 ], "i8", ALLOC_NORMAL);
    _adler32__doc__ = allocate([ 97, 100, 108, 101, 114, 51, 50, 40, 115, 116, 114, 105, 110, 103, 91, 44, 32, 115, 116, 97, 114, 116, 93, 41, 32, 45, 45, 32, 67, 111, 109, 112, 117, 116, 101, 32, 97, 110, 32, 65, 100, 108, 101, 114, 45, 51, 50, 32, 99, 104, 101, 99, 107, 115, 117, 109, 32, 111, 102, 32, 115, 116, 114, 105, 110, 103, 46, 10, 10, 65, 110, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 115, 116, 97, 114, 116, 105, 110, 103, 32, 118, 97, 108, 117, 101, 32, 99, 97, 110, 32, 98, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 46, 32, 32, 84, 104, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 99, 104, 101, 99, 107, 115, 117, 109, 32, 105, 115, 10, 97, 32, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 115, 35, 124, 73, 58, 97, 100, 108, 101, 114, 51, 50, 0 ], "i8", ALLOC_NORMAL);
    _crc32__doc__ = allocate([ 99, 114, 99, 51, 50, 40, 115, 116, 114, 105, 110, 103, 91, 44, 32, 115, 116, 97, 114, 116, 93, 41, 32, 45, 45, 32, 67, 111, 109, 112, 117, 116, 101, 32, 97, 32, 67, 82, 67, 45, 51, 50, 32, 99, 104, 101, 99, 107, 115, 117, 109, 32, 111, 102, 32, 115, 116, 114, 105, 110, 103, 46, 10, 10, 65, 110, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 115, 116, 97, 114, 116, 105, 110, 103, 32, 118, 97, 108, 117, 101, 32, 99, 97, 110, 32, 98, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 46, 32, 32, 84, 104, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 99, 104, 101, 99, 107, 115, 117, 109, 32, 105, 115, 10, 97, 32, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 115, 35, 124, 73, 58, 99, 114, 99, 51, 50, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 97, 100, 108, 101, 114, 51, 50, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 111, 98, 106, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 99, 114, 99, 51, 50, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 98, 106, 0 ], "i8", ALLOC_NORMAL);
    _zlib_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str50 = allocate([ 122, 108, 105, 98, 46, 67, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    _Comptype = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str51 = allocate([ 122, 108, 105, 98, 46, 68, 101, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    _Decomptype = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _zlib_module_documentation = allocate([ 84, 104, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 105, 110, 32, 116, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 97, 108, 108, 111, 119, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 97, 110, 100, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 117, 115, 105, 110, 103, 32, 116, 104, 101, 10, 122, 108, 105, 98, 32, 108, 105, 98, 114, 97, 114, 121, 44, 32, 119, 104, 105, 99, 104, 32, 105, 115, 32, 98, 97, 115, 101, 100, 32, 111, 110, 32, 71, 78, 85, 32, 122, 105, 112, 46, 10, 10, 97, 100, 108, 101, 114, 51, 50, 40, 115, 116, 114, 105, 110, 103, 91, 44, 32, 115, 116, 97, 114, 116, 93, 41, 32, 45, 45, 32, 67, 111, 109, 112, 117, 116, 101, 32, 97, 110, 32, 65, 100, 108, 101, 114, 45, 51, 50, 32, 99, 104, 101, 99, 107, 115, 117, 109, 46, 10, 99, 111, 109, 112, 114, 101, 115, 115, 40, 115, 116, 114, 105, 110, 103, 91, 44, 32, 108, 101, 118, 101, 108, 93, 41, 32, 45, 45, 32, 67, 111, 109, 112, 114, 101, 115, 115, 32, 115, 116, 114, 105, 110, 103, 44, 32, 119, 105, 116, 104, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 108, 101, 118, 101, 108, 32, 105, 110, 32, 49, 45, 57, 46, 10, 99, 111, 109, 112, 114, 101, 115, 115, 111, 98, 106, 40, 91, 108, 101, 118, 101, 108, 93, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 46, 10, 99, 114, 99, 51, 50, 40, 115, 116, 114, 105, 110, 103, 91, 44, 32, 115, 116, 97, 114, 116, 93, 41, 32, 45, 45, 32, 67, 111, 109, 112, 117, 116, 101, 32, 97, 32, 67, 82, 67, 45, 51, 50, 32, 99, 104, 101, 99, 107, 115, 117, 109, 46, 10, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 40, 115, 116, 114, 105, 110, 103, 44, 91, 119, 98, 105, 116, 115, 93, 44, 91, 98, 117, 102, 115, 105, 122, 101, 93, 41, 32, 45, 45, 32, 68, 101, 99, 111, 109, 112, 114, 101, 115, 115, 101, 115, 32, 97, 32, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 115, 116, 114, 105, 110, 103, 46, 10, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 98, 106, 40, 91, 119, 98, 105, 116, 115, 93, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 46, 10, 10, 39, 119, 98, 105, 116, 115, 39, 32, 105, 115, 32, 119, 105, 110, 100, 111, 119, 32, 98, 117, 102, 102, 101, 114, 32, 115, 105, 122, 101, 46, 10, 67, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 115, 32, 115, 117, 112, 112, 111, 114, 116, 32, 99, 111, 109, 112, 114, 101, 115, 115, 40, 41, 32, 97, 110, 100, 32, 102, 108, 117, 115, 104, 40, 41, 32, 109, 101, 116, 104, 111, 100, 115, 59, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 10, 111, 98, 106, 101, 99, 116, 115, 32, 115, 117, 112, 112, 111, 114, 116, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 40, 41, 32, 97, 110, 100, 32, 102, 108, 117, 115, 104, 40, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 122, 108, 105, 98, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 122, 108, 105, 98, 46, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 77, 65, 88, 95, 87, 66, 73, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 68, 69, 70, 76, 65, 84, 69, 68, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 68, 69, 70, 95, 77, 69, 77, 95, 76, 69, 86, 69, 76, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 90, 95, 66, 69, 83, 84, 95, 83, 80, 69, 69, 68, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 90, 95, 66, 69, 83, 84, 95, 67, 79, 77, 80, 82, 69, 83, 83, 73, 79, 78, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 90, 95, 68, 69, 70, 65, 85, 76, 84, 95, 67, 79, 77, 80, 82, 69, 83, 83, 73, 79, 78, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 90, 95, 70, 73, 76, 84, 69, 82, 69, 68, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 90, 95, 72, 85, 70, 70, 77, 65, 78, 95, 79, 78, 76, 89, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 90, 95, 68, 69, 70, 65, 85, 76, 84, 95, 83, 84, 82, 65, 84, 69, 71, 89, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 90, 95, 70, 73, 78, 73, 83, 72, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 90, 95, 78, 79, 95, 70, 76, 85, 83, 72, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 90, 95, 83, 89, 78, 67, 95, 70, 76, 85, 83, 72, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 90, 95, 70, 85, 76, 76, 95, 70, 76, 85, 83, 72, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 90, 76, 73, 66, 95, 86, 69, 82, 83, 73, 79, 78, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 95, 95, 118, 101, 114, 115, 105, 111, 110, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 49, 46, 48, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_comp_methods] = __str38;
    HEAP[_comp_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_comp_methods + 12] = _comp_compress__doc__;
    HEAP[_comp_methods + 16] = __str39;
    HEAP[_comp_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_comp_methods + 28] = _comp_flush__doc__;
    HEAP[_comp_methods + 32] = __str40;
    HEAP[_comp_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_comp_methods + 44] = _comp_copy__doc__;
    HEAP[_Decomp_methods] = __str41;
    HEAP[_Decomp_methods + 4] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_Decomp_methods + 12] = _decomp_decompress__doc__;
    HEAP[_Decomp_methods + 16] = __str39;
    HEAP[_Decomp_methods + 20] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_Decomp_methods + 28] = _decomp_flush__doc__;
    HEAP[_Decomp_methods + 32] = __str40;
    HEAP[_Decomp_methods + 36] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_Decomp_methods + 44] = _decomp_copy__doc__;
    HEAP[_zlib_methods] = __str46;
    HEAP[_zlib_methods + 4] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_zlib_methods + 12] = _adler32__doc__;
    HEAP[_zlib_methods + 16] = __str38;
    HEAP[_zlib_methods + 20] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_zlib_methods + 28] = _compress__doc__;
    HEAP[_zlib_methods + 32] = __str47;
    HEAP[_zlib_methods + 36] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_zlib_methods + 44] = _compressobj__doc__;
    HEAP[_zlib_methods + 48] = __str48;
    HEAP[_zlib_methods + 52] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_zlib_methods + 60] = _crc32__doc__;
    HEAP[_zlib_methods + 64] = __str41;
    HEAP[_zlib_methods + 68] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_zlib_methods + 76] = _decompress__doc__;
    HEAP[_zlib_methods + 80] = __str49;
    HEAP[_zlib_methods + 84] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_zlib_methods + 92] = _decompressobj__doc__;
    HEAP[_Comptype + 12] = __str50;
    HEAP[_Comptype + 24] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_Comptype + 32] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_Decomptype + 12] = __str51;
    HEAP[_Decomptype + 24] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_Decomptype + 32] = FUNCTION_TABLE_OFFSET + 32;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
