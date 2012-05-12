"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 40;
  var $1___SIZE = 20;
  var $2___SIZE = 20;
  var $3___SIZE = 48;
  var $4___SIZE = 16;
  var $5___SIZE = 196;
  var $6___SIZE = 196;
  var $7___SIZE = 80;
  var $8___SIZE = 40;
  var $9___SIZE = 64;
  var $10___SIZE = 32;
  var $11___SIZE = 16;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_MultibyteCodec___SIZE = 36;
  var $struct_MultibyteCodecObject___SIZE = 12;
  var $struct_MultibyteDecodeBuffer___SIZE = 28;
  var $struct_MultibyteEncodeBuffer___SIZE = 28;
  var $struct_MultibyteIncrementalDecoderObject___SIZE = 36;
  var $struct_MultibyteIncrementalDecoderObject___FLATTENER = [ 0, 4, 8, 12, 20, 24, 32 ];
  var $struct_MultibyteIncrementalEncoderObject___SIZE = 32;
  var $struct_MultibyteIncrementalEncoderObject___FLATTENER = [ 0, 4, 8, 12, 20, 24, 28 ];
  var $struct_MultibyteStatefulCodecContext___SIZE = 24;
  var $struct_MultibyteStatefulCodecContext___FLATTENER = [ 0, 4, 8, 12, 20 ];
  var $struct_MultibyteStatefulDecoderContext___SIZE = 36;
  var $struct_MultibyteStatefulDecoderContext___FLATTENER = [ 0, 4, 8, 12, 20, 24, 32 ];
  var $struct_MultibyteStatefulEncoderContext___SIZE = 32;
  var $struct_MultibyteStatefulEncoderContext___FLATTENER = [ 0, 4, 8, 12, 20, 24, 28 ];
  var $struct_MultibyteStreamReaderObject___SIZE = 40;
  var $struct_MultibyteStreamReaderObject___FLATTENER = [ 0, 4, 8, 12, 20, 24, 32, 36 ];
  var $struct_MultibyteStreamWriterObject___SIZE = 36;
  var $struct_MultibyteStreamWriterObject___FLATTENER = [ 0, 4, 8, 12, 20, 24, 28, 32 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_PyUnicodeObject___SIZE = 24;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $union_MultibyteCodec_State___SIZE = 8;
  var _MultibyteCodec_Encode__doc__;
  var _MultibyteCodec_Decode__doc__;
  var _codeckwarglist;
  var __str;
  var __str1;
  var _incnewkwarglist;
  var _incrementalkwarglist;
  var __str2;
  var _streamkwarglist;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var __str7;
  var __str8;
  var ___PRETTY_FUNCTION___8485;
  var __str9;
  var __str10;
  var _codecctx_getsets;
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
  var _multibytecodec_methods;
  var __str24;
  var _MultibyteCodec_Type;
  var __str25;
  var __str26;
  var __str27;
  var _mbiencoder_methods;
  var __str28;
  var __str29;
  var __str30;
  var __str31;
  var _MultibyteIncrementalEncoder_Type;
  var __str32;
  var _mbidecoder_methods;
  var __str33;
  var __str34;
  var _MultibyteIncrementalDecoder_Type;
  var __str35;
  var __str36;
  var __str37;
  var __str38;
  var __str39;
  var __str40;
  var _mbstreamreader_methods;
  var _mbstreamreader_members;
  var __str41;
  var __str42;
  var _MultibyteStreamReader_Type;
  var __str43;
  var __str44;
  var __str45;
  var __str46;
  var __str47;
  var _mbstreamwriter_methods;
  var _mbstreamwriter_members;
  var __str48;
  var _MultibyteStreamWriter_Type;
  var __str49;
  var __str50;
  var __str51;
  var ___methods;
  var _C_140_10875;
  var __str52;
  var __str53;
  function _make_tuple($object, $len) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $object_addr = __stackBase__;
      var $len_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $v = __stackBase__ + 16;
      var $w = __stackBase__ + 20;
      
      HEAP[$object_addr] = $object;
      HEAP[$len_addr] = $len;
      
      
      if (HEAP[$object_addr] == 0) {
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
      var $3 = _PyTuple_New(2);
      HEAP[$v] = $3;
      
      
      if (HEAP[$v] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      var $9 = HEAP[HEAP[$object_addr]] - 1;
      
      var $11 = HEAP[$object_addr];
      HEAP[$11] = $9;
      
      
      
      
      if (HEAP[HEAP[$object_addr]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[$object_addr] + 4] + 24];
      var $21 = HEAP[$object_addr];
      FUNCTION_TABLE[$20]($21);
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 6:
      
      
      
      var $25 = HEAP[$v] + 12;
      var $26 = HEAP[$object_addr];
      HEAP[$25] = $26;
      var $27 = HEAP[$len_addr];
      var $28 = _PyInt_FromSsize_t($27);
      HEAP[$w] = $28;
      
      
      if (HEAP[$w] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      var $34 = HEAP[HEAP[$v]] - 1;
      
      var $36 = HEAP[$v];
      HEAP[$36] = $34;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $45 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $46 = HEAP[$v];
      FUNCTION_TABLE[$45]($46);
      __label__ = 9;
      break;
     case 9:
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 10:
      
      
      
      var $50 = HEAP[$v] + 12 + 4;
      var $51 = HEAP[$w];
      HEAP[$50] = $51;
      var $52 = HEAP[$v];
      HEAP[$0] = $52;
      __label__ = 11;
      break;
     case 11:
      var $53 = HEAP[$0];
      HEAP[$retval] = $53;
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
  function _internal_error_callback($errors) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $errors_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$errors_addr] = $errors;
      
      
      if (HEAP[$errors_addr] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = HEAP[$errors_addr];
      var $4 = _strcmp($3, __str4);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 1;
      __label__ = 8;
      break;
     case 3:
      var $6 = HEAP[$errors_addr];
      var $7 = _strcmp($6, __str5);
      
      if ($7 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 2;
      __label__ = 8;
      break;
     case 5:
      var $9 = HEAP[$errors_addr];
      var $10 = _strcmp($9, __str6);
      
      if ($10 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 3;
      __label__ = 8;
      break;
     case 7:
      var $12 = HEAP[$errors_addr];
      var $13 = _PyString_FromString($12);
      HEAP[$0] = $13;
      __label__ = 8;
      break;
     case 8:
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
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
  function _call_error_callback($errors, $exc) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $errors_addr = __stackBase__;
      var $exc_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $args = __stackBase__ + 16;
      var $cb = __stackBase__ + 20;
      var $r = __stackBase__ + 24;
      
      HEAP[$errors_addr] = $errors;
      HEAP[$exc_addr] = $exc;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$errors_addr] + 4] + 84] & 134217728) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str7, __str8, 96, ___PRETTY_FUNCTION___8485);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      var $11 = HEAP[$errors_addr] + 20;
      var $12 = _PyCodec_LookupError($11);
      HEAP[$cb] = $12;
      
      
      if (HEAP[$cb] == 0) {
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
      var $15 = _PyTuple_New(1);
      HEAP[$args] = $15;
      
      
      if (HEAP[$args] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $21 = HEAP[HEAP[$cb]] - 1;
      
      var $23 = HEAP[$cb];
      HEAP[$23] = $21;
      
      
      
      
      if (HEAP[HEAP[$cb]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $32 = HEAP[HEAP[HEAP[$cb] + 4] + 24];
      var $33 = HEAP[$cb];
      FUNCTION_TABLE[$32]($33);
      __label__ = 7;
      break;
     case 7:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 8:
      
      
      
      var $37 = HEAP[$args] + 12;
      var $38 = HEAP[$exc_addr];
      HEAP[$37] = $38;
      
      
      
      var $42 = HEAP[HEAP[$exc_addr]] + 1;
      
      var $44 = HEAP[$exc_addr];
      HEAP[$44] = $42;
      var $45 = HEAP[$cb];
      var $46 = HEAP[$args];
      var $47 = _PyObject_CallObject($45, $46);
      HEAP[$r] = $47;
      
      
      
      var $51 = HEAP[HEAP[$args]] - 1;
      
      var $53 = HEAP[$args];
      HEAP[$53] = $51;
      
      
      
      
      if (HEAP[HEAP[$args]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $62 = HEAP[HEAP[HEAP[$args] + 4] + 24];
      var $63 = HEAP[$args];
      FUNCTION_TABLE[$62]($63);
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $67 = HEAP[HEAP[$cb]] - 1;
      
      var $69 = HEAP[$cb];
      HEAP[$69] = $67;
      
      
      
      
      if (HEAP[HEAP[$cb]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $78 = HEAP[HEAP[HEAP[$cb] + 4] + 24];
      var $79 = HEAP[$cb];
      FUNCTION_TABLE[$78]($79);
      __label__ = 12;
      break;
     case 12:
      var $80 = HEAP[$r];
      HEAP[$0] = $80;
      __label__ = 13;
      break;
     case 13:
      var $81 = HEAP[$0];
      HEAP[$retval] = $81;
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
  function _codecctx_errors_get($self) {
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
      var $errors = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$errors] = __str4;
      __label__ = 7;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$errors] = __str5;
      __label__ = 7;
      break;
     case 4:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 3) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$errors] = __str6;
      __label__ = 7;
      break;
     case 6:
      
      
      
      
      
      var $18 = HEAP[HEAP[HEAP[$self_addr] + 20]] + 1;
      var $19 = HEAP[HEAP[$self_addr] + 20];
      HEAP[$19] = $18;
      
      
      var $22 = HEAP[HEAP[$self_addr] + 20];
      HEAP[$0] = $22;
      __label__ = 8;
      break;
     case 7:
      var $23 = HEAP[$errors];
      var $24 = _PyString_FromString($23);
      HEAP[$0] = $24;
      __label__ = 8;
      break;
     case 8:
      var $25 = HEAP[$0];
      HEAP[$retval] = $25;
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
  function _codecctx_errors_set($self, $value, $closure) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $value_addr = __stackBase__ + 4;
      var $closure_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $cb = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$value_addr] = $value;
      HEAP[$closure_addr] = $closure;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$value_addr] + 4] + 84] & 134217728) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $8 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($8, __str9);
      HEAP[$0] = -1;
      __label__ = 10;
      break;
     case 2:
      
      
      
      var $12 = HEAP[$value_addr] + 20;
      var $13 = _internal_error_callback($12);
      HEAP[$cb] = $13;
      
      
      if (HEAP[$cb] == 0) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] > 3) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $30 = HEAP[HEAP[$self_addr] + 20];
      
      
      var $33 = HEAP[$30] - 1;
      var $34 = $30;
      HEAP[$34] = $33;
      
      
      
      if (HEAP[$30] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 4] + 24];
      
      
      var $47 = HEAP[HEAP[$self_addr] + 20];
      FUNCTION_TABLE[$44]($47);
      __label__ = 9;
      break;
     case 9:
      
      var $49 = HEAP[$self_addr] + 20;
      var $50 = HEAP[$cb];
      HEAP[$49] = $50;
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 10:
      var $51 = HEAP[$0];
      HEAP[$retval] = $51;
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
  function _expand_encodebuffer($buf, $esize) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $buf_addr = __stackBase__;
      var $esize_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $iftmp_7 = __stackBase__ + 16;
      var $orgpos = __stackBase__ + 20;
      var $orgsize = __stackBase__ + 24;
      var $incsize = __stackBase__ + 28;
      
      HEAP[$buf_addr] = $buf;
      HEAP[$esize_addr] = $esize;
      
      
      
      
      
      
      
      
      
      
      var $11 = HEAP[HEAP[$buf_addr] + 12] - (HEAP[HEAP[$buf_addr] + 24] + 20);
      HEAP[$orgpos] = $11;
      
      
      
      
      
      var $17 = HEAP[HEAP[HEAP[$buf_addr] + 24] + 8];
      HEAP[$orgsize] = $17;
      
      
      
      
      if (HEAP[$orgsize] >> 1 > HEAP[$esize_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $24 = HEAP[$orgsize] >> 1 | 1;
      HEAP[$iftmp_7] = $24;
      __label__ = 3;
      break;
     case 2:
      var $25 = HEAP[$esize_addr];
      HEAP[$iftmp_7] = $25;
      __label__ = 3;
      break;
     case 3:
      var $26 = HEAP[$iftmp_7];
      HEAP[$incsize] = $26;
      
      
      
      
      if (2147483647 - HEAP[$incsize] < HEAP[$orgsize]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 5:
      
      
      var $33 = HEAP[$orgsize] + HEAP[$incsize];
      
      var $35 = HEAP[$buf_addr] + 24;
      var $36 = __PyString_Resize($35, $33);
      var $37 = $36 == -1;
      if ($37) {
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
      
      
      
      
      
      
      
      var $45 = HEAP[HEAP[$buf_addr] + 24] + 20 + HEAP[$orgpos];
      
      var $47 = HEAP[$buf_addr] + 12;
      HEAP[$47] = $45;
      
      
      
      
      
      
      
      
      
      
      
      
      var $60 = HEAP[HEAP[$buf_addr] + 24] + 20 + HEAP[HEAP[HEAP[$buf_addr] + 24] + 8];
      
      var $62 = HEAP[$buf_addr] + 16;
      HEAP[$62] = $60;
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 8:
      var $63 = HEAP[$0];
      HEAP[$retval] = $63;
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
  function _expand_decodebuffer($buf, $esize) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $buf_addr = __stackBase__;
      var $esize_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $iftmp_8 = __stackBase__ + 16;
      var $orgpos = __stackBase__ + 20;
      var $orgsize = __stackBase__ + 24;
      
      HEAP[$buf_addr] = $buf;
      HEAP[$esize_addr] = $esize;
      
      
      
      
      
      
      
      
      
      
      
      
      var $13 = (HEAP[HEAP[$buf_addr] + 12] - HEAP[HEAP[HEAP[$buf_addr] + 24] + 12]) / 2 | 0;
      HEAP[$orgpos] = $13;
      
      
      
      
      
      var $19 = HEAP[HEAP[HEAP[$buf_addr] + 24] + 8];
      HEAP[$orgsize] = $19;
      
      
      
      
      if (HEAP[$orgsize] >> 1 > HEAP[$esize_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $26 = HEAP[$orgsize] >> 1 | 1;
      HEAP[$iftmp_8] = $26;
      __label__ = 3;
      break;
     case 2:
      var $27 = HEAP[$esize_addr];
      HEAP[$iftmp_8] = $27;
      __label__ = 3;
      break;
     case 3:
      
      
      var $30 = HEAP[$iftmp_8] + HEAP[$orgsize];
      
      var $32 = HEAP[$buf_addr] + 24;
      var $33 = _PyUnicodeUCS2_Resize($32, $30);
      var $34 = $33 == -1;
      if ($34) {
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
      
      
      
      
      
      
      
      var $42 = HEAP[HEAP[HEAP[$buf_addr] + 24] + 12] + 2 * HEAP[$orgpos];
      
      var $44 = HEAP[$buf_addr] + 12;
      HEAP[$44] = $42;
      
      
      
      
      
      
      
      
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[$buf_addr] + 24] + 12] + 2 * HEAP[HEAP[HEAP[$buf_addr] + 24] + 8];
      
      var $59 = HEAP[$buf_addr] + 16;
      HEAP[$59] = $57;
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 6:
      var $60 = HEAP[$0];
      HEAP[$retval] = $60;
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
  function _multibytecodec_encerror($codec, $state, $buf, $errors, $e) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 82;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 82);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $codec_addr = __stackBase__;
      var $state_addr = __stackBase__ + 4;
      var $buf_addr = __stackBase__ + 8;
      var $errors_addr = __stackBase__ + 12;
      var $e_addr = __stackBase__ + 16;
      var $retval = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $retobj = __stackBase__ + 28;
      var $retstr = __stackBase__ + 32;
      var $tobj = __stackBase__ + 36;
      var $retstrsize = __stackBase__ + 40;
      var $newpos = __stackBase__ + 44;
      var $esize = __stackBase__ + 48;
      var $start = __stackBase__ + 52;
      var $end = __stackBase__ + 56;
      var $reason = __stackBase__ + 60;
      var $replchar = __stackBase__ + 64;
      var $inbuf = __stackBase__ + 66;
      var $r = __stackBase__ + 70;
      var $outleft = __stackBase__ + 74;
      var $uraw = __stackBase__ + 78;
      
      HEAP[$codec_addr] = $codec;
      HEAP[$state_addr] = $state;
      HEAP[$buf_addr] = $buf;
      HEAP[$errors_addr] = $errors;
      HEAP[$e_addr] = $e;
      HEAP[$retobj] = 0;
      HEAP[$retstr] = 0;
      
      
      if (HEAP[$e_addr] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$reason] = __str11;
      var $3 = HEAP[$e_addr];
      HEAP[$esize] = $3;
      __label__ = 8;
      break;
     case 2:
      var $4 = HEAP[$e_addr];
      if ($4 == -3) {
        __label__ = 6;
        break;
      } else if ($4 == -2) {
        __label__ = 5;
        break;
      } else if ($4 == -1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      var $5 = HEAP[$buf_addr];
      var $6 = _expand_encodebuffer($5, -1);
      var $7 = $6 == -1;
      if ($7) {
        __label__ = 50;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 57;
      break;
     case 5:
      HEAP[$reason] = __str12;
      
      
      
      
      
      
      
      
      
      var $17 = (HEAP[HEAP[$buf_addr] + 8] - HEAP[HEAP[$buf_addr]]) / 2 | 0;
      HEAP[$esize] = $17;
      __label__ = 8;
      break;
     case 6:
      var $18 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($18, __str13);
      HEAP[$0] = -1;
      __label__ = 57;
      break;
     case 7:
      var $19 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($19, __str14);
      HEAP[$0] = -1;
      __label__ = 57;
      break;
     case 8:
      
      
      if (HEAP[$errors_addr] == 3) {
        __label__ = 9;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 9:
      HEAP[$replchar] = 63;
      HEAP[$inbuf] = $replchar;
      __label__ = 10;
      break;
     case 10:
      
      
      
      
      
      
      
      
      var $30 = HEAP[HEAP[$buf_addr] + 16] - HEAP[HEAP[$buf_addr] + 12];
      HEAP[$outleft] = $30;
      
      
      var $33 = HEAP[HEAP[$codec_addr] + 12];
      
      var $35 = HEAP[$buf_addr] + 12;
      
      
      var $38 = HEAP[HEAP[$codec_addr] + 4];
      var $39 = HEAP[$state_addr];
      var $40 = HEAP[$outleft];
      var $41 = FUNCTION_TABLE[$33]($39, $38, $inbuf, 1, $35, $40, 0);
      HEAP[$r] = $41;
      
      var $43 = HEAP[$r] == -1;
      if ($43) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      var $44 = HEAP[$buf_addr];
      var $45 = _expand_encodebuffer($44, -1);
      var $46 = $45 == -1;
      if ($46) {
        __label__ = 50;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      __label__ = 10;
      break;
     case 13:
      
      
      if (HEAP[$r] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$buf_addr] + 12] + 1 > HEAP[HEAP[$buf_addr] + 16]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $57 = HEAP[$buf_addr];
      var $58 = _expand_encodebuffer($57, 1);
      var $59 = $58 == -1;
      if ($59) {
        __label__ = 50;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      var $62 = HEAP[HEAP[$buf_addr] + 12];
      HEAP[$62] = 63;
      var $63 = $62 + 1;
      
      var $65 = HEAP[$buf_addr] + 12;
      HEAP[$65] = $63;
      __label__ = 17;
      break;
     case 17:
      
      
      if (HEAP[$errors_addr] == 2) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      if (HEAP[$errors_addr] == 3) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $74 = HEAP[HEAP[$buf_addr]] + 2 * HEAP[$esize];
      
      var $76 = HEAP[$buf_addr];
      HEAP[$76] = $74;
      HEAP[$0] = 0;
      __label__ = 57;
      break;
     case 20:
      
      
      
      
      
      
      
      
      
      var $86 = (HEAP[HEAP[$buf_addr]] - HEAP[HEAP[$buf_addr] + 4]) / 2 | 0;
      HEAP[$start] = $86;
      
      
      var $89 = HEAP[$start] + HEAP[$esize];
      HEAP[$end] = $89;
      
      
      
      
      if (HEAP[HEAP[$buf_addr] + 20] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      
      
      
      
      
      
      
      
      
      var $103 = (HEAP[HEAP[$buf_addr] + 8] - HEAP[HEAP[$buf_addr] + 4]) / 2 | 0;
      
      
      var $106 = HEAP[HEAP[$buf_addr] + 4];
      
      
      var $109 = HEAP[HEAP[$codec_addr]];
      var $110 = HEAP[$start];
      var $111 = HEAP[$end];
      var $112 = HEAP[$reason];
      var $113 = _PyUnicodeEncodeError_Create($109, $106, $103, $110, $111, $112);
      
      var $115 = HEAP[$buf_addr] + 20;
      HEAP[$115] = $113;
      
      
      
      
      if (HEAP[HEAP[$buf_addr] + 20] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      __label__ = 26;
      break;
     case 23:
      
      
      var $122 = HEAP[HEAP[$buf_addr] + 20];
      var $123 = HEAP[$start];
      var $124 = _PyUnicodeEncodeError_SetStart($122, $123);
      
      if ($124 != 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      var $128 = HEAP[HEAP[$buf_addr] + 20];
      var $129 = HEAP[$end];
      var $130 = _PyUnicodeEncodeError_SetEnd($128, $129);
      
      if ($130 != 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      var $134 = HEAP[HEAP[$buf_addr] + 20];
      var $135 = HEAP[$reason];
      var $136 = _PyUnicodeEncodeError_SetReason($134, $135);
      
      if ($136 != 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      if (HEAP[$errors_addr] == 1) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      var $142 = HEAP[HEAP[$buf_addr] + 20];
      var $143 = _PyCodec_StrictErrors($142);
      __label__ = 50;
      break;
     case 28:
      
      
      var $146 = HEAP[HEAP[$buf_addr] + 20];
      var $147 = HEAP[$errors_addr];
      var $148 = _call_error_callback($147, $146);
      HEAP[$retobj] = $148;
      
      
      if (HEAP[$retobj] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$retobj] + 4] + 84] & 67108864) == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      
      
      if (HEAP[HEAP[$retobj] + 8] != 2) {
        __label__ = 34;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      
      
      var $167 = HEAP[HEAP[$retobj] + 12];
      HEAP[$tobj] = $167;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$tobj] + 4] + 84] & 268435456) == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[HEAP[$retobj] + 12 + 4] + 4] + 84] & 8388608) != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[HEAP[$retobj] + 12 + 4] + 4] + 84] & 16777216) == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      var $197 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($197, __str15);
      __label__ = 50;
      break;
     case 35:
      
      
      
      var $201 = HEAP[HEAP[$tobj] + 12];
      HEAP[$uraw] = $201;
      
      
      
      var $205 = HEAP[HEAP[$tobj] + 8];
      var $206 = HEAP[$codec_addr];
      var $207 = HEAP[$state_addr];
      var $208 = _multibytecodec_encode($206, $207, $uraw, $205, 1, 1);
      HEAP[$retstr] = $208;
      
      
      if (HEAP[$retstr] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      
      var $214 = HEAP[HEAP[$retstr] + 8];
      HEAP[$retstrsize] = $214;
      
      
      if (HEAP[$retstrsize] <= 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$buf_addr] + 12] + HEAP[$retstrsize] > HEAP[HEAP[$buf_addr] + 16]) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      var $226 = HEAP[$buf_addr];
      var $227 = HEAP[$retstrsize];
      var $228 = _expand_encodebuffer($226, $227);
      var $229 = $228 == -1;
      if ($229) {
        __label__ = 50;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      var $230 = HEAP[$retstrsize];
      
      
      
      var $234 = HEAP[$retstr] + 20;
      
      
      var $237 = HEAP[HEAP[$buf_addr] + 12];
      _llvm_memcpy_p0i8_p0i8_i32($237, $234, $230, 1, 0);
      
      
      
      
      var $242 = HEAP[HEAP[$buf_addr] + 12] + HEAP[$retstrsize];
      
      var $244 = HEAP[$buf_addr] + 12;
      HEAP[$244] = $242;
      
      
      
      
      var $249 = HEAP[HEAP[$retobj] + 12 + 4];
      var $250 = _PyInt_AsSsize_t($249);
      HEAP[$newpos] = $250;
      
      
      if (HEAP[$newpos] < 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 40:
      var $253 = _PyErr_Occurred();
      
      if ($253 == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      
      
      
      
      
      
      
      var $266 = ((HEAP[HEAP[$buf_addr] + 8] - HEAP[HEAP[$buf_addr] + 4]) / 2 | 0) + HEAP[$newpos];
      HEAP[$newpos] = $266;
      __label__ = 42;
      break;
     case 42:
      
      
      if (HEAP[$newpos] < 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$buf_addr] + 4] + 2 * HEAP[$newpos] > HEAP[HEAP[$buf_addr] + 8]) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      _PyErr_Clear();
      var $278 = HEAP[_PyExc_IndexError];
      var $279 = HEAP[$newpos];
      var $280 = _PyErr_Format($278, __str16, allocate([ $279, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 50;
      break;
     case 45:
      
      
      
      
      var $285 = HEAP[HEAP[$buf_addr] + 4] + 2 * HEAP[$newpos];
      
      var $287 = HEAP[$buf_addr];
      HEAP[$287] = $285;
      
      
      
      var $291 = HEAP[HEAP[$retobj]] - 1;
      
      var $293 = HEAP[$retobj];
      HEAP[$293] = $291;
      
      
      
      
      if (HEAP[HEAP[$retobj]] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      
      
      var $302 = HEAP[HEAP[HEAP[$retobj] + 4] + 24];
      var $303 = HEAP[$retobj];
      FUNCTION_TABLE[$302]($303);
      __label__ = 47;
      break;
     case 47:
      
      
      
      var $307 = HEAP[HEAP[$retstr]] - 1;
      
      var $309 = HEAP[$retstr];
      HEAP[$309] = $307;
      
      
      
      
      if (HEAP[HEAP[$retstr]] == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      
      
      
      var $318 = HEAP[HEAP[HEAP[$retstr] + 4] + 24];
      var $319 = HEAP[$retstr];
      FUNCTION_TABLE[$318]($319);
      __label__ = 49;
      break;
     case 49:
      HEAP[$0] = 0;
      __label__ = 57;
      break;
     case 50:
      
      
      if (HEAP[$retobj] != 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 51:
      
      
      
      var $325 = HEAP[HEAP[$retobj]] - 1;
      
      var $327 = HEAP[$retobj];
      HEAP[$327] = $325;
      
      
      
      
      if (HEAP[HEAP[$retobj]] == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      
      
      
      
      var $336 = HEAP[HEAP[HEAP[$retobj] + 4] + 24];
      var $337 = HEAP[$retobj];
      FUNCTION_TABLE[$336]($337);
      __label__ = 53;
      break;
     case 53:
      
      
      if (HEAP[$retstr] != 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 54:
      
      
      
      var $343 = HEAP[HEAP[$retstr]] - 1;
      
      var $345 = HEAP[$retstr];
      HEAP[$345] = $343;
      
      
      
      
      if (HEAP[HEAP[$retstr]] == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      
      
      
      
      var $354 = HEAP[HEAP[HEAP[$retstr] + 4] + 24];
      var $355 = HEAP[$retstr];
      FUNCTION_TABLE[$354]($355);
      __label__ = 56;
      break;
     case 56:
      HEAP[$0] = -1;
      __label__ = 57;
      break;
     case 57:
      var $356 = HEAP[$0];
      HEAP[$retval] = $356;
      __label__ = 58;
      break;
     case 58:
      var $retval56 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval56;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _multibytecodec_decerror($codec, $state, $buf, $errors, $e) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 60;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $codec_addr = __stackBase__;
      var $state_addr = __stackBase__ + 4;
      var $buf_addr = __stackBase__ + 8;
      var $errors_addr = __stackBase__ + 12;
      var $e_addr = __stackBase__ + 16;
      var $retval = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $retobj = __stackBase__ + 28;
      var $retuni = __stackBase__ + 32;
      var $retunisize = __stackBase__ + 36;
      var $newpos = __stackBase__ + 40;
      var $reason = __stackBase__ + 44;
      var $esize = __stackBase__ + 48;
      var $start = __stackBase__ + 52;
      var $end = __stackBase__ + 56;
      
      HEAP[$codec_addr] = $codec;
      HEAP[$state_addr] = $state;
      HEAP[$buf_addr] = $buf;
      HEAP[$errors_addr] = $errors;
      HEAP[$e_addr] = $e;
      HEAP[$retobj] = 0;
      HEAP[$retuni] = 0;
      
      
      if (HEAP[$e_addr] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$reason] = __str11;
      var $3 = HEAP[$e_addr];
      HEAP[$esize] = $3;
      __label__ = 8;
      break;
     case 2:
      var $4 = HEAP[$e_addr];
      if ($4 == -3) {
        __label__ = 6;
        break;
      } else if ($4 == -2) {
        __label__ = 5;
        break;
      } else if ($4 == -1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      var $5 = HEAP[$buf_addr];
      var $6 = _expand_decodebuffer($5, -1);
      var $7 = $6 == -1;
      if ($7) {
        __label__ = 44;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 48;
      break;
     case 5:
      HEAP[$reason] = __str12;
      
      
      
      
      
      
      
      
      var $16 = HEAP[HEAP[$buf_addr] + 8] - HEAP[HEAP[$buf_addr]];
      HEAP[$esize] = $16;
      __label__ = 8;
      break;
     case 6:
      var $17 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($17, __str13);
      HEAP[$0] = -1;
      __label__ = 48;
      break;
     case 7:
      var $18 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($18, __str14);
      HEAP[$0] = -1;
      __label__ = 48;
      break;
     case 8:
      
      
      if (HEAP[$errors_addr] == 3) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$buf_addr] + 12] + 2 > HEAP[HEAP[$buf_addr] + 16]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $29 = HEAP[$buf_addr];
      var $30 = _expand_decodebuffer($29, 1);
      var $31 = $30 == -1;
      if ($31) {
        __label__ = 44;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $34 = HEAP[HEAP[$buf_addr] + 12];
      HEAP[$34] = -3;
      var $35 = $34 + 2;
      
      var $37 = HEAP[$buf_addr] + 12;
      HEAP[$37] = $35;
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$errors_addr] == 2) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      if (HEAP[$errors_addr] == 3) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $46 = HEAP[HEAP[$buf_addr]] + HEAP[$esize];
      
      var $48 = HEAP[$buf_addr];
      HEAP[$48] = $46;
      HEAP[$0] = 0;
      __label__ = 48;
      break;
     case 15:
      
      
      
      
      
      
      
      
      var $57 = HEAP[HEAP[$buf_addr]] - HEAP[HEAP[$buf_addr] + 4];
      HEAP[$start] = $57;
      
      
      var $60 = HEAP[$start] + HEAP[$esize];
      HEAP[$end] = $60;
      
      
      
      
      if (HEAP[HEAP[$buf_addr] + 20] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      
      
      
      
      
      var $73 = HEAP[HEAP[$buf_addr] + 8] - HEAP[HEAP[$buf_addr] + 4];
      
      
      var $76 = HEAP[HEAP[$buf_addr] + 4];
      
      
      var $79 = HEAP[HEAP[$codec_addr]];
      var $80 = HEAP[$start];
      var $81 = HEAP[$end];
      var $82 = HEAP[$reason];
      var $83 = _PyUnicodeDecodeError_Create($79, $76, $73, $80, $81, $82);
      
      var $85 = HEAP[$buf_addr] + 20;
      HEAP[$85] = $83;
      
      
      
      
      if (HEAP[HEAP[$buf_addr] + 20] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      __label__ = 21;
      break;
     case 18:
      
      
      var $92 = HEAP[HEAP[$buf_addr] + 20];
      var $93 = HEAP[$start];
      var $94 = _PyUnicodeDecodeError_SetStart($92, $93);
      
      if ($94 != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      var $98 = HEAP[HEAP[$buf_addr] + 20];
      var $99 = HEAP[$end];
      var $100 = _PyUnicodeDecodeError_SetEnd($98, $99);
      
      if ($100 != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      var $104 = HEAP[HEAP[$buf_addr] + 20];
      var $105 = HEAP[$reason];
      var $106 = _PyUnicodeDecodeError_SetReason($104, $105);
      
      if ($106 != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      if (HEAP[$errors_addr] == 1) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      var $112 = HEAP[HEAP[$buf_addr] + 20];
      var $113 = _PyCodec_StrictErrors($112);
      __label__ = 44;
      break;
     case 23:
      
      
      var $116 = HEAP[HEAP[$buf_addr] + 20];
      var $117 = HEAP[$errors_addr];
      var $118 = _call_error_callback($117, $116);
      HEAP[$retobj] = $118;
      
      
      if (HEAP[$retobj] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$retobj] + 4] + 84] & 67108864) == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      if (HEAP[HEAP[$retobj] + 8] != 2) {
        __label__ = 29;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      var $137 = HEAP[HEAP[$retobj] + 12];
      HEAP[$retuni] = $137;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$retuni] + 4] + 84] & 268435456) == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[HEAP[$retobj] + 12 + 4] + 4] + 84] & 8388608) != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[HEAP[$retobj] + 12 + 4] + 4] + 84] & 16777216) == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $167 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($167, __str17);
      __label__ = 44;
      break;
     case 30:
      
      
      
      var $171 = HEAP[HEAP[$retuni] + 8];
      HEAP[$retunisize] = $171;
      
      
      if (HEAP[$retunisize] > 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 31:
      
      
      if (HEAP[$retunisize] <= 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$buf_addr] + 12] + 2 * HEAP[$retunisize] > HEAP[HEAP[$buf_addr] + 16]) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      var $185 = HEAP[$buf_addr];
      var $186 = HEAP[$retunisize];
      var $187 = _expand_decodebuffer($185, $186);
      var $188 = $187 == -1;
      if ($188) {
        __label__ = 44;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      var $190 = HEAP[$retunisize] * 2;
      
      
      
      
      
      
      
      var $198 = HEAP[HEAP[$buf_addr] + 12];
      var $199 = HEAP[HEAP[$retuni] + 12];
      _llvm_memcpy_p0i8_p0i8_i32($198, $199, $190, 1, 0);
      
      
      
      
      var $204 = HEAP[HEAP[$buf_addr] + 12] + 2 * HEAP[$retunisize];
      
      var $206 = HEAP[$buf_addr] + 12;
      HEAP[$206] = $204;
      __label__ = 35;
      break;
     case 35:
      
      
      
      
      var $211 = HEAP[HEAP[$retobj] + 12 + 4];
      var $212 = _PyInt_AsSsize_t($211);
      HEAP[$newpos] = $212;
      
      
      if (HEAP[$newpos] < 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 36:
      var $215 = _PyErr_Occurred();
      
      if ($215 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      
      
      
      
      
      
      var $227 = HEAP[HEAP[$buf_addr] + 8] - HEAP[HEAP[$buf_addr] + 4] + HEAP[$newpos];
      HEAP[$newpos] = $227;
      __label__ = 38;
      break;
     case 38:
      
      
      if (HEAP[$newpos] < 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$buf_addr] + 4] + HEAP[$newpos] > HEAP[HEAP[$buf_addr] + 8]) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      _PyErr_Clear();
      var $239 = HEAP[_PyExc_IndexError];
      var $240 = HEAP[$newpos];
      var $241 = _PyErr_Format($239, __str16, allocate([ $240, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 44;
      break;
     case 41:
      
      
      
      
      var $246 = HEAP[HEAP[$buf_addr] + 4] + HEAP[$newpos];
      
      var $248 = HEAP[$buf_addr];
      HEAP[$248] = $246;
      
      
      
      var $252 = HEAP[HEAP[$retobj]] - 1;
      
      var $254 = HEAP[$retobj];
      HEAP[$254] = $252;
      
      
      
      
      if (HEAP[HEAP[$retobj]] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $263 = HEAP[HEAP[HEAP[$retobj] + 4] + 24];
      var $264 = HEAP[$retobj];
      FUNCTION_TABLE[$263]($264);
      __label__ = 43;
      break;
     case 43:
      HEAP[$0] = 0;
      __label__ = 48;
      break;
     case 44:
      
      
      if (HEAP[$retobj] != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 45:
      
      
      
      var $270 = HEAP[HEAP[$retobj]] - 1;
      
      var $272 = HEAP[$retobj];
      HEAP[$272] = $270;
      
      
      
      
      if (HEAP[HEAP[$retobj]] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      
      
      var $281 = HEAP[HEAP[HEAP[$retobj] + 4] + 24];
      var $282 = HEAP[$retobj];
      FUNCTION_TABLE[$281]($282);
      __label__ = 47;
      break;
     case 47:
      HEAP[$0] = -1;
      __label__ = 48;
      break;
     case 48:
      var $283 = HEAP[$0];
      HEAP[$retval] = $283;
      __label__ = 49;
      break;
     case 49:
      var $retval47 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval47;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _multibytecodec_encode($codec, $state, $data, $datalen, $errors, $flags) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 80;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 80);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $codec_addr = __stackBase__;
      var $state_addr = __stackBase__ + 4;
      var $data_addr = __stackBase__ + 8;
      var $datalen_addr = __stackBase__ + 12;
      var $errors_addr = __stackBase__ + 16;
      var $flags_addr = __stackBase__ + 20;
      var $retval = __stackBase__ + 24;
      var $0 = __stackBase__ + 28;
      var $buf = __stackBase__ + 32;
      var $finalsize = __stackBase__ + 60;
      var $r = __stackBase__ + 64;
      var $inleft = __stackBase__ + 68;
      var $outleft = __stackBase__ + 72;
      var $outleft15 = __stackBase__ + 76;
      
      HEAP[$codec_addr] = $codec;
      HEAP[$state_addr] = $state;
      HEAP[$data_addr] = $data;
      HEAP[$datalen_addr] = $datalen;
      HEAP[$errors_addr] = $errors;
      HEAP[$flags_addr] = $flags;
      HEAP[$r] = 0;
      
      
      if (HEAP[$datalen_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      if ((HEAP[$flags_addr] & 2) == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $6 = _PyString_FromString(__str18);
      HEAP[$0] = $6;
      __label__ = 31;
      break;
     case 3:
      
      HEAP[$buf + 20] = 0;
      
      var $9 = HEAP[HEAP[$data_addr]];
      
      HEAP[$buf + 4] = $9;
      
      var $12 = HEAP[$buf + 4];
      
      HEAP[$buf] = $12;
      
      
      
      var $17 = HEAP[$buf + 4] + 2 * HEAP[$datalen_addr];
      
      HEAP[$buf + 8] = $17;
      
      
      if (HEAP[$datalen_addr] > 1073741815) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $21 = _PyErr_NoMemory();
      __label__ = 24;
      break;
     case 5:
      
      
      var $24 = HEAP[$datalen_addr] * 2 + 16;
      var $25 = _PyString_FromStringAndSize(0, $24);
      
      HEAP[$buf + 24] = $25;
      
      
      
      if (HEAP[$buf + 24] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      var $34 = HEAP[$buf + 24] + 20;
      
      HEAP[$buf + 12] = $34;
      
      
      
      
      
      
      
      var $43 = HEAP[$buf + 12] + HEAP[HEAP[$buf + 24] + 8];
      
      HEAP[$buf + 16] = $43;
      __label__ = 12;
      break;
     case 7:
      
      
      
      
      
      
      
      var $52 = (HEAP[$buf + 8] - HEAP[$buf]) / 2 | 0;
      HEAP[$inleft] = $52;
      
      
      
      
      
      
      var $59 = HEAP[$buf + 16] - HEAP[$buf + 12];
      HEAP[$outleft] = $59;
      
      
      var $62 = HEAP[HEAP[$codec_addr] + 12];
      
      
      var $65 = HEAP[HEAP[$codec_addr] + 4];
      var $66 = HEAP[$state_addr];
      var $67 = $buf;
      var $68 = HEAP[$inleft];
      var $69 = $buf + 12;
      var $70 = HEAP[$outleft];
      var $71 = HEAP[$flags_addr];
      var $72 = FUNCTION_TABLE[$62]($66, $65, $67, $68, $69, $70, $71);
      HEAP[$r] = $72;
      
      
      if (HEAP[$r] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      var $76 = HEAP[$r] != -2;
      if ($76) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      if ((HEAP[$flags_addr] & 1) == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      var $80 = HEAP[$codec_addr];
      var $81 = HEAP[$state_addr];
      var $82 = HEAP[$errors_addr];
      var $83 = HEAP[$r];
      var $84 = _multibytecodec_encerror($80, $81, $buf, $82, $83);
      
      if ($84 != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $87 = HEAP[$r] == -2;
      if ($87) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      if (HEAP[$buf] < HEAP[$buf + 8]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      if (HEAP[HEAP[$codec_addr] + 20] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      
      
      
      if ((HEAP[$flags_addr] & 2) != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      
      
      
      
      
      
      var $106 = HEAP[$buf + 16] - HEAP[$buf + 12];
      HEAP[$outleft15] = $106;
      
      
      var $109 = HEAP[HEAP[$codec_addr] + 20];
      
      
      var $112 = HEAP[HEAP[$codec_addr] + 4];
      var $113 = HEAP[$state_addr];
      var $114 = $buf + 12;
      var $115 = HEAP[$outleft15];
      var $116 = FUNCTION_TABLE[$109]($113, $112, $114, $115);
      HEAP[$r] = $116;
      
      
      if (HEAP[$r] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $119 = HEAP[$codec_addr];
      var $120 = HEAP[$state_addr];
      var $121 = HEAP[$errors_addr];
      var $122 = HEAP[$r];
      var $123 = _multibytecodec_encerror($119, $120, $buf, $121, $122);
      
      if ($123 != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      __label__ = 15;
      break;
     case 18:
      
      
      
      
      
      
      
      
      var $133 = HEAP[$buf + 12] - (HEAP[$buf + 24] + 20);
      HEAP[$finalsize] = $133;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$buf + 24] + 8] != HEAP[$finalsize]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $141 = $buf + 24;
      var $142 = HEAP[$finalsize];
      var $143 = __PyString_Resize($141, $142);
      var $144 = $143 == -1;
      if ($144) {
        __label__ = 24;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      var $146 = HEAP[$buf];
      var $147 = HEAP[$data_addr];
      HEAP[$147] = $146;
      
      
      
      if (HEAP[$buf + 20] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      
      var $152 = HEAP[$buf + 20];
      
      
      var $155 = HEAP[$152] - 1;
      var $156 = $152;
      HEAP[$156] = $155;
      
      
      
      if (HEAP[$152] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      
      var $165 = HEAP[HEAP[HEAP[$buf + 20] + 4] + 24];
      
      var $167 = HEAP[$buf + 20];
      FUNCTION_TABLE[$165]($167);
      __label__ = 23;
      break;
     case 23:
      
      var $169 = HEAP[$buf + 24];
      HEAP[$0] = $169;
      __label__ = 31;
      break;
     case 24:
      
      
      
      if (HEAP[$buf + 20] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      var $174 = HEAP[$buf + 20];
      
      
      var $177 = HEAP[$174] - 1;
      var $178 = $174;
      HEAP[$178] = $177;
      
      
      
      if (HEAP[$174] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      
      var $187 = HEAP[HEAP[HEAP[$buf + 20] + 4] + 24];
      
      var $189 = HEAP[$buf + 20];
      FUNCTION_TABLE[$187]($189);
      __label__ = 27;
      break;
     case 27:
      
      
      
      if (HEAP[$buf + 24] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      
      var $194 = HEAP[$buf + 24];
      
      
      var $197 = HEAP[$194] - 1;
      var $198 = $194;
      HEAP[$198] = $197;
      
      
      
      if (HEAP[$194] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      
      var $207 = HEAP[HEAP[HEAP[$buf + 24] + 4] + 24];
      
      var $209 = HEAP[$buf + 24];
      FUNCTION_TABLE[$207]($209);
      __label__ = 30;
      break;
     case 30:
      HEAP[$0] = 0;
      __label__ = 31;
      break;
     case 31:
      var $210 = HEAP[$0];
      HEAP[$retval] = $210;
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
  function _MultibyteCodec_Encode($self, $args, $kwargs) {
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
      var $kwargs_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $state = __stackBase__ + 20;
      var $data = __stackBase__ + 28;
      var $errorcb = __stackBase__ + 32;
      var $r = __stackBase__ + 36;
      var $arg = __stackBase__ + 40;
      var $ucvt = __stackBase__ + 44;
      var $errors = __stackBase__ + 48;
      var $datalen = __stackBase__ + 52;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwargs_addr] = $kwargs;
      HEAP[$errors] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwargs_addr];
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str19, _codeckwarglist, allocate([ $arg, 0, 0, 0, $errors, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 36;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$arg] + 4] + 84] & 268435456) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$ucvt] = 0;
      __label__ = 10;
      break;
     case 4:
      var $12 = HEAP[$arg];
      var $13 = _PyObject_Unicode($12);
      HEAP[$ucvt] = $13;
      var $14 = HEAP[$ucvt];
      HEAP[$arg] = $14;
      
      
      if (HEAP[$arg] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 36;
      break;
     case 6:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$arg] + 4] + 84] & 268435456) == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      var $24 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($24, __str20);
      
      
      
      var $28 = HEAP[HEAP[$ucvt]] - 1;
      
      var $30 = HEAP[$ucvt];
      HEAP[$30] = $28;
      
      
      
      
      if (HEAP[HEAP[$ucvt]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $39 = HEAP[HEAP[HEAP[$ucvt] + 4] + 24];
      var $40 = HEAP[$ucvt];
      FUNCTION_TABLE[$39]($40);
      __label__ = 9;
      break;
     case 9:
      HEAP[$0] = 0;
      __label__ = 36;
      break;
     case 10:
      
      
      
      var $44 = HEAP[HEAP[$arg] + 12];
      HEAP[$data] = $44;
      
      
      
      var $48 = HEAP[HEAP[$arg] + 8];
      HEAP[$datalen] = $48;
      var $49 = HEAP[$errors];
      var $50 = _internal_error_callback($49);
      HEAP[$errorcb] = $50;
      
      
      if (HEAP[$errorcb] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      
      if (HEAP[$ucvt] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      
      var $58 = HEAP[HEAP[$ucvt]] - 1;
      
      var $60 = HEAP[$ucvt];
      HEAP[$60] = $58;
      
      
      
      
      if (HEAP[HEAP[$ucvt]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $69 = HEAP[HEAP[HEAP[$ucvt] + 4] + 24];
      var $70 = HEAP[$ucvt];
      FUNCTION_TABLE[$69]($70);
      __label__ = 14;
      break;
     case 14:
      HEAP[$0] = 0;
      __label__ = 36;
      break;
     case 15:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 8] + 16] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $81 = HEAP[HEAP[HEAP[$self_addr] + 8] + 16];
      
      
      
      
      var $86 = HEAP[HEAP[HEAP[$self_addr] + 8] + 4];
      var $87 = FUNCTION_TABLE[$81]($state, $86);
      
      if ($87 != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      var $91 = HEAP[HEAP[$self_addr] + 8];
      var $92 = HEAP[$datalen];
      var $93 = HEAP[$errorcb];
      var $94 = _multibytecodec_encode($91, $state, $data, $92, $93, 3);
      HEAP[$r] = $94;
      
      
      if (HEAP[$r] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      if (HEAP[$errorcb] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 19:
      
      
      if (HEAP[$errorcb] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      if (HEAP[$errorcb] > 3) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      
      
      
      var $106 = HEAP[HEAP[$errorcb]] - 1;
      
      var $108 = HEAP[$errorcb];
      HEAP[$108] = $106;
      
      
      
      
      if (HEAP[HEAP[$errorcb]] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $117 = HEAP[HEAP[HEAP[$errorcb] + 4] + 24];
      var $118 = HEAP[$errorcb];
      FUNCTION_TABLE[$117]($118);
      __label__ = 23;
      break;
     case 23:
      
      
      if (HEAP[$ucvt] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 24:
      
      
      
      var $124 = HEAP[HEAP[$ucvt]] - 1;
      
      var $126 = HEAP[$ucvt];
      HEAP[$126] = $124;
      
      
      
      
      if (HEAP[HEAP[$ucvt]] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $135 = HEAP[HEAP[HEAP[$ucvt] + 4] + 24];
      var $136 = HEAP[$ucvt];
      FUNCTION_TABLE[$135]($136);
      __label__ = 26;
      break;
     case 26:
      var $137 = HEAP[$r];
      var $138 = HEAP[$datalen];
      var $139 = _make_tuple($137, $138);
      HEAP[$0] = $139;
      __label__ = 36;
      break;
     case 27:
      
      
      if (HEAP[$errorcb] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 28:
      
      
      if (HEAP[$errorcb] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      if (HEAP[$errorcb] > 3) {
        __label__ = 30;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      
      
      
      var $149 = HEAP[HEAP[$errorcb]] - 1;
      
      var $151 = HEAP[$errorcb];
      HEAP[$151] = $149;
      
      
      
      
      if (HEAP[HEAP[$errorcb]] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $160 = HEAP[HEAP[HEAP[$errorcb] + 4] + 24];
      var $161 = HEAP[$errorcb];
      FUNCTION_TABLE[$160]($161);
      __label__ = 32;
      break;
     case 32:
      
      
      if (HEAP[$ucvt] != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 33:
      
      
      
      var $167 = HEAP[HEAP[$ucvt]] - 1;
      
      var $169 = HEAP[$ucvt];
      HEAP[$169] = $167;
      
      
      
      
      if (HEAP[HEAP[$ucvt]] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $178 = HEAP[HEAP[HEAP[$ucvt] + 4] + 24];
      var $179 = HEAP[$ucvt];
      FUNCTION_TABLE[$178]($179);
      __label__ = 35;
      break;
     case 35:
      HEAP[$0] = 0;
      __label__ = 36;
      break;
     case 36:
      var $180 = HEAP[$0];
      HEAP[$retval] = $180;
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
  function _MultibyteCodec_Decode($self, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 140;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 140);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwargs_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $state = __stackBase__ + 20;
      var $buf = __stackBase__ + 28;
      var $errorcb = __stackBase__ + 56;
      var $pdata = __stackBase__ + 60;
      var $data = __stackBase__ + 112;
      var $errors = __stackBase__ + 116;
      var $datalen = __stackBase__ + 120;
      var $finalsize = __stackBase__ + 124;
      var $inleft = __stackBase__ + 128;
      var $outleft = __stackBase__ + 132;
      var $r = __stackBase__ + 136;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwargs_addr] = $kwargs;
      HEAP[$errors] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwargs_addr];
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str21, _codeckwarglist, allocate([ $pdata, 0, 0, 0, $errors, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 41;
      break;
     case 2:
      
      var $6 = HEAP[$pdata];
      HEAP[$data] = $6;
      
      var $8 = HEAP[$pdata + 8];
      HEAP[$datalen] = $8;
      var $9 = HEAP[$errors];
      var $10 = _internal_error_callback($9);
      HEAP[$errorcb] = $10;
      
      
      if (HEAP[$errorcb] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyBuffer_Release($pdata);
      HEAP[$0] = 0;
      __label__ = 41;
      break;
     case 4:
      
      
      if (HEAP[$datalen] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 5:
      _PyBuffer_Release($pdata);
      
      
      if (HEAP[$errorcb] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      
      
      if (HEAP[$errorcb] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if (HEAP[$errorcb] > 3) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      var $24 = HEAP[HEAP[$errorcb]] - 1;
      
      var $26 = HEAP[$errorcb];
      HEAP[$26] = $24;
      
      
      
      
      if (HEAP[HEAP[$errorcb]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $35 = HEAP[HEAP[HEAP[$errorcb] + 4] + 24];
      var $36 = HEAP[$errorcb];
      FUNCTION_TABLE[$35]($36);
      __label__ = 10;
      break;
     case 10:
      var $37 = _PyUnicodeUCS2_FromUnicode(0, 0);
      var $38 = _make_tuple($37, 0);
      HEAP[$0] = $38;
      __label__ = 41;
      break;
     case 11:
      
      HEAP[$buf + 20] = 0;
      var $40 = HEAP[$data];
      
      HEAP[$buf + 4] = $40;
      
      var $43 = HEAP[$buf + 4];
      
      HEAP[$buf] = $43;
      
      
      
      var $48 = HEAP[$buf + 4] + HEAP[$datalen];
      
      HEAP[$buf + 8] = $48;
      var $50 = HEAP[$datalen];
      var $51 = _PyUnicodeUCS2_FromUnicode(0, $50);
      
      HEAP[$buf + 24] = $51;
      
      
      
      if (HEAP[$buf + 24] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      var $60 = HEAP[HEAP[$buf + 24] + 12];
      
      HEAP[$buf + 12] = $60;
      
      
      
      
      
      
      
      var $69 = HEAP[$buf + 12] + 2 * HEAP[HEAP[$buf + 24] + 8];
      
      HEAP[$buf + 16] = $69;
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 8] + 28] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $81 = HEAP[HEAP[HEAP[$self_addr] + 8] + 28];
      
      
      
      
      var $86 = HEAP[HEAP[HEAP[$self_addr] + 8] + 4];
      var $87 = FUNCTION_TABLE[$81]($state, $86);
      
      if ($87 != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      __label__ = 17;
      break;
     case 15:
      
      
      
      
      
      
      var $95 = HEAP[$buf + 8] - HEAP[$buf];
      HEAP[$inleft] = $95;
      
      
      
      
      
      
      
      var $103 = (HEAP[$buf + 16] - HEAP[$buf + 12]) / 2 | 0;
      HEAP[$outleft] = $103;
      
      
      
      
      var $108 = HEAP[HEAP[HEAP[$self_addr] + 8] + 24];
      
      
      
      
      var $113 = HEAP[HEAP[HEAP[$self_addr] + 8] + 4];
      var $114 = $buf;
      var $115 = HEAP[$inleft];
      var $116 = $buf + 12;
      var $117 = HEAP[$outleft];
      var $118 = FUNCTION_TABLE[$108]($state, $113, $114, $115, $116, $117);
      HEAP[$r] = $118;
      
      
      if (HEAP[$r] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      var $123 = HEAP[HEAP[$self_addr] + 8];
      var $124 = HEAP[$errorcb];
      var $125 = HEAP[$r];
      var $126 = _multibytecodec_decerror($123, $state, $buf, $124, $125);
      
      if ($126 != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      
      if (HEAP[$buf] < HEAP[$buf + 8]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      
      
      
      var $143 = (HEAP[$buf + 12] - HEAP[HEAP[$buf + 24] + 12]) / 2 | 0;
      HEAP[$finalsize] = $143;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$buf + 24] + 8] != HEAP[$finalsize]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $151 = $buf + 24;
      var $152 = HEAP[$finalsize];
      var $153 = _PyUnicodeUCS2_Resize($151, $152);
      var $154 = $153 == -1;
      if ($154) {
        __label__ = 29;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      _PyBuffer_Release($pdata);
      
      
      
      if (HEAP[$buf + 20] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      
      var $159 = HEAP[$buf + 20];
      
      
      var $162 = HEAP[$159] - 1;
      var $163 = $159;
      HEAP[$163] = $162;
      
      
      
      if (HEAP[$159] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      
      var $172 = HEAP[HEAP[HEAP[$buf + 20] + 4] + 24];
      
      var $174 = HEAP[$buf + 20];
      FUNCTION_TABLE[$172]($174);
      __label__ = 23;
      break;
     case 23:
      
      
      if (HEAP[$errorcb] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 24:
      
      
      if (HEAP[$errorcb] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      if (HEAP[$errorcb] > 3) {
        __label__ = 26;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 26:
      
      
      
      var $184 = HEAP[HEAP[$errorcb]] - 1;
      
      var $186 = HEAP[$errorcb];
      HEAP[$186] = $184;
      
      
      
      
      if (HEAP[HEAP[$errorcb]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $195 = HEAP[HEAP[HEAP[$errorcb] + 4] + 24];
      var $196 = HEAP[$errorcb];
      FUNCTION_TABLE[$195]($196);
      __label__ = 28;
      break;
     case 28:
      
      var $198 = HEAP[$buf + 24];
      var $199 = HEAP[$datalen];
      var $200 = _make_tuple($198, $199);
      HEAP[$0] = $200;
      __label__ = 41;
      break;
     case 29:
      _PyBuffer_Release($pdata);
      
      
      if (HEAP[$errorcb] != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 30:
      
      
      if (HEAP[$errorcb] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      if (HEAP[$errorcb] > 3) {
        __label__ = 32;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 32:
      
      
      
      var $210 = HEAP[HEAP[$errorcb]] - 1;
      
      var $212 = HEAP[$errorcb];
      HEAP[$212] = $210;
      
      
      
      
      if (HEAP[HEAP[$errorcb]] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $221 = HEAP[HEAP[HEAP[$errorcb] + 4] + 24];
      var $222 = HEAP[$errorcb];
      FUNCTION_TABLE[$221]($222);
      __label__ = 34;
      break;
     case 34:
      
      
      
      if (HEAP[$buf + 20] != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 35:
      
      var $227 = HEAP[$buf + 20];
      
      
      var $230 = HEAP[$227] - 1;
      var $231 = $227;
      HEAP[$231] = $230;
      
      
      
      if (HEAP[$227] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      
      var $240 = HEAP[HEAP[HEAP[$buf + 20] + 4] + 24];
      
      var $242 = HEAP[$buf + 20];
      FUNCTION_TABLE[$240]($242);
      __label__ = 37;
      break;
     case 37:
      
      
      
      if (HEAP[$buf + 24] != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 38:
      
      var $247 = HEAP[$buf + 24];
      
      
      var $250 = HEAP[$247] - 1;
      var $251 = $247;
      HEAP[$251] = $250;
      
      
      
      if (HEAP[$247] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      
      var $260 = HEAP[HEAP[HEAP[$buf + 24] + 4] + 24];
      
      var $262 = HEAP[$buf + 24];
      FUNCTION_TABLE[$260]($262);
      __label__ = 40;
      break;
     case 40:
      HEAP[$0] = 0;
      __label__ = 41;
      break;
     case 41:
      var $263 = HEAP[$0];
      HEAP[$retval] = $263;
      __label__ = 42;
      break;
     case 42:
      var $retval40 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval40;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _multibytecodec_dealloc($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      
      HEAP[__stackBase__] = $self;
      
      var $1 = HEAP[__stackBase__];
      _PyObject_Free($1);
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _encoder_encode_stateful($ctx, $unistr, $final) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ctx_addr = __stackBase__;
      var $unistr_addr = __stackBase__ + 4;
      var $final_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $iftmp_53 = __stackBase__ + 16;
      var $iftmp_49 = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $ucvt = __stackBase__ + 28;
      var $r = __stackBase__ + 32;
      var $inbuf = __stackBase__ + 36;
      var $inbuf_end = __stackBase__ + 40;
      var $inbuf_tmp = __stackBase__ + 44;
      var $datalen = __stackBase__ + 48;
      var $origpending = __stackBase__ + 52;
      
      HEAP[$ctx_addr] = $ctx;
      HEAP[$unistr_addr] = $unistr;
      HEAP[$final_addr] = $final;
      HEAP[$r] = 0;
      HEAP[$inbuf_tmp] = 0;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$unistr_addr] + 4] + 84] & 268435456) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$ucvt] = 0;
      __label__ = 8;
      break;
     case 2:
      var $8 = HEAP[$unistr_addr];
      var $9 = _PyObject_Unicode($8);
      HEAP[$ucvt] = $9;
      var $10 = HEAP[$ucvt];
      HEAP[$unistr_addr] = $10;
      
      
      if (HEAP[$unistr_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 43;
      break;
     case 4:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$unistr_addr] + 4] + 84] & 268435456) == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $20 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($20, __str20);
      
      
      
      var $24 = HEAP[HEAP[$ucvt]] - 1;
      
      var $26 = HEAP[$ucvt];
      HEAP[$26] = $24;
      
      
      
      
      if (HEAP[HEAP[$ucvt]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $35 = HEAP[HEAP[HEAP[$ucvt] + 4] + 24];
      var $36 = HEAP[$ucvt];
      FUNCTION_TABLE[$35]($36);
      __label__ = 7;
      break;
     case 7:
      HEAP[$0] = 0;
      __label__ = 43;
      break;
     case 8:
      
      
      
      var $40 = HEAP[HEAP[$unistr_addr] + 8];
      HEAP[$datalen] = $40;
      
      
      var $43 = HEAP[HEAP[$ctx_addr] + 28];
      HEAP[$origpending] = $43;
      
      
      if (HEAP[$origpending] > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 9:
      
      
      
      
      
      
      if (2147483647 - HEAP[HEAP[$ctx_addr] + 28] < HEAP[$datalen]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $52 = _PyErr_NoMemory();
      __label__ = 34;
      break;
     case 11:
      
      
      
      
      
      
      if (HEAP[HEAP[$ctx_addr] + 28] + HEAP[$datalen] <= 1073741823) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      var $64 = (HEAP[HEAP[$ctx_addr] + 28] + HEAP[$datalen]) * 2;
      var $65 = _PyMem_Malloc($64);
      var $66 = $65;
      HEAP[$iftmp_49] = $66;
      __label__ = 14;
      break;
     case 13:
      HEAP[$iftmp_49] = 0;
      __label__ = 14;
      break;
     case 14:
      var $67 = HEAP[$iftmp_49];
      HEAP[$inbuf_tmp] = $67;
      
      
      if (HEAP[$inbuf_tmp] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      var $73 = HEAP[HEAP[$ctx_addr] + 28] * 2;
      
      
      
      
      var $78 = HEAP[$inbuf_tmp];
      var $79 = HEAP[$ctx_addr] + 24;
      _llvm_memcpy_p0i8_p0i8_i32($78, $79, $73, 1, 0);
      
      var $81 = HEAP[$datalen] * 2;
      
      
      
      
      
      
      
      
      
      var $91 = HEAP[$inbuf_tmp] + 2 * HEAP[HEAP[$ctx_addr] + 28];
      var $92 = HEAP[HEAP[$unistr_addr] + 12];
      _llvm_memcpy_p0i8_p0i8_i32($91, $92, $81, 1, 0);
      
      
      
      
      var $97 = HEAP[HEAP[$ctx_addr] + 28] + HEAP[$datalen];
      HEAP[$datalen] = $97;
      
      var $99 = HEAP[$ctx_addr] + 28;
      HEAP[$99] = 0;
      var $100 = HEAP[$inbuf_tmp];
      HEAP[$inbuf] = $100;
      __label__ = 17;
      break;
     case 16:
      
      
      
      var $104 = HEAP[HEAP[$unistr_addr] + 12];
      HEAP[$inbuf] = $104;
      __label__ = 17;
      break;
     case 17:
      
      
      var $107 = HEAP[$inbuf] + 2 * HEAP[$datalen];
      HEAP[$inbuf_end] = $107;
      
      
      if (HEAP[$final_addr] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      HEAP[$iftmp_53] = 3;
      __label__ = 20;
      break;
     case 19:
      HEAP[$iftmp_53] = 0;
      __label__ = 20;
      break;
     case 20:
      
      
      var $112 = HEAP[HEAP[$ctx_addr] + 20];
      
      var $114 = HEAP[$ctx_addr] + 12;
      
      
      var $117 = HEAP[HEAP[$ctx_addr] + 8];
      var $118 = HEAP[$datalen];
      var $119 = HEAP[$iftmp_53];
      var $120 = _multibytecodec_encode($117, $114, $inbuf, $118, $112, $119);
      HEAP[$r] = $120;
      
      
      if (HEAP[$r] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 21:
      
      
      if (HEAP[$origpending] > 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      var $126 = HEAP[$origpending] * 2;
      
      
      
      
      var $131 = HEAP[$ctx_addr] + 24;
      var $132 = HEAP[$inbuf_tmp];
      _llvm_memcpy_p0i8_p0i8_i32($131, $132, $126, 1, 0);
      __label__ = 23;
      break;
     case 23:
      
      var $134 = HEAP[$ctx_addr] + 28;
      var $135 = HEAP[$origpending];
      HEAP[$134] = $135;
      __label__ = 34;
      break;
     case 24:
      
      
      
      if (HEAP[$inbuf] < HEAP[$inbuf_end]) {
        __label__ = 25;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 25:
      
      
      
      
      
      var $144 = (HEAP[$inbuf_end] - HEAP[$inbuf]) / 2 | 0;
      
      var $146 = HEAP[$ctx_addr] + 28;
      HEAP[$146] = $144;
      
      
      
      
      if (HEAP[HEAP[$ctx_addr] + 28] > 2) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      var $152 = HEAP[$ctx_addr] + 28;
      HEAP[$152] = 0;
      var $153 = HEAP[_PyExc_UnicodeError];
      _PyErr_SetString($153, __str25);
      __label__ = 34;
      break;
     case 27:
      
      
      
      var $157 = HEAP[HEAP[$ctx_addr] + 28] * 2;
      
      
      
      
      var $162 = HEAP[$ctx_addr] + 24;
      var $163 = HEAP[$inbuf];
      _llvm_memcpy_p0i8_p0i8_i32($162, $163, $157, 1, 0);
      __label__ = 28;
      break;
     case 28:
      
      
      if (HEAP[$inbuf_tmp] != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      var $167 = HEAP[$inbuf_tmp];
      _PyMem_Free($167);
      __label__ = 30;
      break;
     case 30:
      
      
      if (HEAP[$ucvt] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 31:
      
      
      
      var $173 = HEAP[HEAP[$ucvt]] - 1;
      
      var $175 = HEAP[$ucvt];
      HEAP[$175] = $173;
      
      
      
      
      if (HEAP[HEAP[$ucvt]] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      var $184 = HEAP[HEAP[HEAP[$ucvt] + 4] + 24];
      var $185 = HEAP[$ucvt];
      FUNCTION_TABLE[$184]($185);
      __label__ = 33;
      break;
     case 33:
      var $186 = HEAP[$r];
      HEAP[$0] = $186;
      __label__ = 43;
      break;
     case 34:
      
      
      if (HEAP[$inbuf_tmp] != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      var $190 = HEAP[$inbuf_tmp];
      _PyMem_Free($190);
      __label__ = 36;
      break;
     case 36:
      
      
      if (HEAP[$r] != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 37:
      
      
      
      var $196 = HEAP[HEAP[$r]] - 1;
      
      var $198 = HEAP[$r];
      HEAP[$198] = $196;
      
      
      
      
      if (HEAP[HEAP[$r]] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      var $207 = HEAP[HEAP[HEAP[$r] + 4] + 24];
      var $208 = HEAP[$r];
      FUNCTION_TABLE[$207]($208);
      __label__ = 39;
      break;
     case 39:
      
      
      if (HEAP[$ucvt] != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 40:
      
      
      
      var $214 = HEAP[HEAP[$ucvt]] - 1;
      
      var $216 = HEAP[$ucvt];
      HEAP[$216] = $214;
      
      
      
      
      if (HEAP[HEAP[$ucvt]] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $225 = HEAP[HEAP[HEAP[$ucvt] + 4] + 24];
      var $226 = HEAP[$ucvt];
      FUNCTION_TABLE[$225]($226);
      __label__ = 42;
      break;
     case 42:
      HEAP[$0] = 0;
      __label__ = 43;
      break;
     case 43:
      var $227 = HEAP[$0];
      HEAP[$retval] = $227;
      __label__ = 44;
      break;
     case 44:
      var $retval43 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval43;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _decoder_append_pending($ctx, $buf) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ctx_addr = __stackBase__;
      var $buf_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $npendings = __stackBase__ + 16;
      
      HEAP[$ctx_addr] = $ctx;
      HEAP[$buf_addr] = $buf;
      
      
      
      
      
      
      
      
      var $9 = HEAP[HEAP[$buf_addr] + 8] - HEAP[HEAP[$buf_addr]];
      HEAP[$npendings] = $9;
      
      
      
      
      
      
      if (HEAP[HEAP[$ctx_addr] + 32] + HEAP[$npendings] > 8) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      if (2147483647 - HEAP[HEAP[$ctx_addr] + 32] < HEAP[$npendings]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $22 = HEAP[_PyExc_UnicodeError];
      _PyErr_SetString($22, __str25);
      HEAP[$0] = -1;
      __label__ = 4;
      break;
     case 3:
      var $23 = HEAP[$npendings];
      
      
      var $26 = HEAP[HEAP[$buf_addr]];
      
      
      
      
      
      
      var $33 = HEAP[$ctx_addr] + 24 + HEAP[HEAP[$ctx_addr] + 32];
      _llvm_memcpy_p0i8_p0i8_i32($33, $26, $23, 1, 0);
      
      
      
      
      var $38 = HEAP[HEAP[$ctx_addr] + 32] + HEAP[$npendings];
      
      var $40 = HEAP[$ctx_addr] + 32;
      HEAP[$40] = $38;
      HEAP[$0] = 0;
      __label__ = 4;
      break;
     case 4:
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
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
  function _decoder_prepare_buffer($buf, $data, $size) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $buf_addr = __stackBase__;
      var $data_addr = __stackBase__ + 4;
      var $size_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$buf_addr] = $buf;
      HEAP[$data_addr] = $data;
      HEAP[$size_addr] = $size;
      var $1 = HEAP[$data_addr];
      
      var $3 = HEAP[$buf_addr] + 4;
      HEAP[$3] = $1;
      
      
      var $6 = HEAP[HEAP[$buf_addr] + 4];
      
      var $8 = HEAP[$buf_addr];
      HEAP[$8] = $6;
      
      
      
      
      var $13 = HEAP[HEAP[$buf_addr] + 4] + HEAP[$size_addr];
      
      var $15 = HEAP[$buf_addr] + 8;
      HEAP[$15] = $13;
      
      
      
      
      if (HEAP[HEAP[$buf_addr] + 24] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $20 = HEAP[$size_addr];
      var $21 = _PyUnicodeUCS2_FromUnicode(0, $20);
      
      var $23 = HEAP[$buf_addr] + 24;
      HEAP[$23] = $21;
      
      
      
      
      if (HEAP[HEAP[$buf_addr] + 24] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 3:
      
      
      
      
      
      var $33 = HEAP[HEAP[HEAP[$buf_addr] + 24] + 12];
      
      var $35 = HEAP[$buf_addr] + 12;
      HEAP[$35] = $33;
      
      
      
      
      
      
      
      
      
      var $45 = HEAP[HEAP[$buf_addr] + 12] + 2 * HEAP[HEAP[HEAP[$buf_addr] + 24] + 8];
      
      var $47 = HEAP[$buf_addr] + 16;
      HEAP[$47] = $45;
      __label__ = 4;
      break;
     case 4:
      HEAP[$0] = 0;
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
  function _decoder_feed_buffer($ctx, $buf) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ctx_addr = __stackBase__;
      var $buf_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $inleft = __stackBase__ + 16;
      var $outleft = __stackBase__ + 20;
      var $r = __stackBase__ + 24;
      
      HEAP[$ctx_addr] = $ctx;
      HEAP[$buf_addr] = $buf;
      __label__ = 5;
      break;
     case 1:
      
      
      
      
      
      
      
      
      var $9 = HEAP[HEAP[$buf_addr] + 8] - HEAP[HEAP[$buf_addr]];
      HEAP[$inleft] = $9;
      
      
      
      
      
      
      
      
      
      var $19 = (HEAP[HEAP[$buf_addr] + 16] - HEAP[HEAP[$buf_addr] + 12]) / 2 | 0;
      HEAP[$outleft] = $19;
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[$ctx_addr] + 8] + 24];
      
      var $26 = HEAP[$buf_addr] + 12;
      
      var $28 = HEAP[$buf_addr];
      
      
      
      
      var $33 = HEAP[HEAP[HEAP[$ctx_addr] + 8] + 4];
      
      var $35 = HEAP[$ctx_addr] + 12;
      var $36 = HEAP[$inleft];
      var $37 = HEAP[$outleft];
      var $38 = FUNCTION_TABLE[$24]($35, $33, $28, $36, $26, $37);
      HEAP[$r] = $38;
      
      
      if (HEAP[$r] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      var $42 = HEAP[$r] == -2;
      if ($42) {
        __label__ = 6;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $45 = HEAP[HEAP[$ctx_addr] + 20];
      
      var $47 = HEAP[$ctx_addr] + 12;
      
      
      var $50 = HEAP[HEAP[$ctx_addr] + 8];
      var $51 = HEAP[$buf_addr];
      var $52 = HEAP[$r];
      var $53 = _multibytecodec_decerror($50, $47, $51, $45, $52);
      
      if ($53 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 7;
      break;
     case 5:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$buf_addr]] < HEAP[HEAP[$buf_addr] + 8]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $62 = HEAP[$0];
      HEAP[$retval] = $62;
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
  function _mbiencoder_encode($self, $args, $kwargs) {
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
      var $data = __stackBase__ + 20;
      var $final = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwargs_addr] = $kwargs;
      HEAP[$final] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwargs_addr];
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str26, _incrementalkwarglist, allocate([ $data, 0, 0, 0, $final, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $5 = HEAP[$final];
      var $6 = HEAP[$data];
      var $7 = HEAP[$self_addr];
      var $8 = _encoder_encode_stateful($7, $6, $5);
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
  function _mbiencoder_reset($self) {
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
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 8] + 32] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      
      var $11 = HEAP[HEAP[HEAP[$self_addr] + 8] + 32];
      
      
      
      
      var $16 = HEAP[HEAP[HEAP[$self_addr] + 8] + 4];
      
      var $18 = HEAP[$self_addr] + 12;
      var $19 = FUNCTION_TABLE[$11]($18, $16);
      
      if ($19 != 0) {
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
      
      var $22 = HEAP[$self_addr] + 28;
      HEAP[$22] = 0;
      
      var $24 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $24;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 4;
      break;
     case 4:
      var $25 = HEAP[$0];
      HEAP[$retval] = $25;
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
  function _mbiencoder_new($type, $args, $kwds) {
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
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $self = __stackBase__ + 20;
      var $codec = __stackBase__ + 24;
      var $errors = __stackBase__ + 28;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$codec] = 0;
      HEAP[$errors] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwds_addr];
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str28, _incnewkwarglist, allocate([ $errors, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      
      var $7 = HEAP[HEAP[$type_addr] + 152];
      var $8 = HEAP[$type_addr];
      var $9 = FUNCTION_TABLE[$7]($8, 0);
      var $10 = $9;
      HEAP[$self] = $10;
      
      
      if (HEAP[$self] == 0) {
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
      
      var $14 = HEAP[$type_addr];
      var $15 = _PyObject_GetAttrString($14, __str29);
      HEAP[$codec] = $15;
      
      
      if (HEAP[$codec] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[HEAP[$codec] + 4] != _MultibyteCodec_Type) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $22 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($22, __str30);
      __label__ = 13;
      break;
     case 7:
      
      
      
      var $26 = HEAP[HEAP[$codec] + 8];
      
      var $28 = HEAP[$self] + 8;
      HEAP[$28] = $26;
      
      var $30 = HEAP[$self] + 28;
      HEAP[$30] = 0;
      var $31 = HEAP[$errors];
      var $32 = _internal_error_callback($31);
      
      var $34 = HEAP[$self] + 20;
      HEAP[$34] = $32;
      
      
      
      
      if (HEAP[HEAP[$self] + 20] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self] + 8] + 16] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[$self] + 8] + 16];
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$self] + 8] + 4];
      
      var $56 = HEAP[$self] + 12;
      var $57 = FUNCTION_TABLE[$49]($56, $54);
      
      if ($57 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $62 = HEAP[HEAP[$codec]] - 1;
      
      var $64 = HEAP[$codec];
      HEAP[$64] = $62;
      
      
      
      
      if (HEAP[HEAP[$codec]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[$codec] + 4] + 24];
      var $74 = HEAP[$codec];
      FUNCTION_TABLE[$73]($74);
      __label__ = 12;
      break;
     case 12:
      
      var $76 = HEAP[$self];
      HEAP[$0] = $76;
      __label__ = 20;
      break;
     case 13:
      
      
      if (HEAP[$self] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      var $80 = HEAP[$self];
      
      
      var $83 = HEAP[$80] - 1;
      var $84 = $80;
      HEAP[$84] = $83;
      
      
      
      if (HEAP[$80] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      var $93 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $95 = HEAP[$self];
      FUNCTION_TABLE[$93]($95);
      __label__ = 16;
      break;
     case 16:
      
      
      if (HEAP[$codec] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      var $101 = HEAP[HEAP[$codec]] - 1;
      
      var $103 = HEAP[$codec];
      HEAP[$103] = $101;
      
      
      
      
      if (HEAP[HEAP[$codec]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $112 = HEAP[HEAP[HEAP[$codec] + 4] + 24];
      var $113 = HEAP[$codec];
      FUNCTION_TABLE[$112]($113);
      __label__ = 19;
      break;
     case 19:
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 20:
      var $114 = HEAP[$0];
      HEAP[$retval] = $114;
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
  function _mbiencoder_init($self, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$0] = 0;
      var $1 = HEAP[$0];
      HEAP[$retval] = $1;
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
  function _mbiencoder_traverse($self, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
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
      
      HEAP[$self_addr] = $self;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] > 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $15 = HEAP[HEAP[$self_addr] + 20];
      var $16 = HEAP[$visit_addr];
      var $17 = HEAP[$arg_addr];
      var $18 = FUNCTION_TABLE[$16]($15, $17);
      HEAP[$vret] = $18;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $21 = HEAP[$vret];
      HEAP[$0] = $21;
      __label__ = 6;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 6:
      var $22 = HEAP[$0];
      HEAP[$retval] = $22;
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
  function _mbiencoder_dealloc($self) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] > 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[HEAP[$self_addr] + 20];
      
      
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
      
      
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 4] + 24];
      
      
      var $33 = HEAP[HEAP[$self_addr] + 20];
      FUNCTION_TABLE[$30]($33);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      
      var $39 = HEAP[HEAP[HEAP[$self_addr] + 4] + 160];
      
      var $41 = HEAP[$self_addr];
      FUNCTION_TABLE[$39]($41);
      __label__ = 6;
      break;
     case 6:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbidecoder_decode($self, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 128;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 128);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwargs_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $buf = __stackBase__ + 20;
      var $data = __stackBase__ + 48;
      var $wdata = __stackBase__ + 52;
      var $pdata = __stackBase__ + 56;
      var $wsize = __stackBase__ + 108;
      var $finalsize = __stackBase__ + 112;
      var $size = __stackBase__ + 116;
      var $origpending = __stackBase__ + 120;
      var $final = __stackBase__ + 124;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwargs_addr] = $kwargs;
      HEAP[$wdata] = 0;
      HEAP[$finalsize] = 0;
      HEAP[$final] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwargs_addr];
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str32, _incrementalkwarglist, allocate([ $pdata, 0, 0, 0, $final, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      var $6 = HEAP[$pdata];
      HEAP[$data] = $6;
      
      var $8 = HEAP[$pdata + 8];
      HEAP[$size] = $8;
      
      HEAP[$buf + 20] = 0;
      
      var $11 = HEAP[$buf + 20];
      
      HEAP[$buf + 24] = $11;
      
      
      var $15 = HEAP[HEAP[$self_addr] + 32];
      HEAP[$origpending] = $15;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $20 = HEAP[$size];
      HEAP[$wsize] = $20;
      var $21 = HEAP[$data];
      HEAP[$wdata] = $21;
      __label__ = 8;
      break;
     case 4:
      
      
      
      
      
      
      if (2147483647 - HEAP[HEAP[$self_addr] + 32] < HEAP[$size]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $28 = _PyErr_NoMemory();
      __label__ = 24;
      break;
     case 6:
      
      
      
      
      var $33 = HEAP[HEAP[$self_addr] + 32] + HEAP[$size];
      HEAP[$wsize] = $33;
      var $34 = HEAP[$wsize];
      var $35 = _PyMem_Malloc($34);
      HEAP[$wdata] = $35;
      
      
      if (HEAP[$wdata] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      var $40 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $43 = HEAP[$self_addr] + 24;
      var $44 = HEAP[$wdata];
      _llvm_memcpy_p0i8_p0i8_i32($44, $43, $40, 1, 0);
      var $45 = HEAP[$size];
      
      
      
      
      var $50 = HEAP[$wdata] + HEAP[HEAP[$self_addr] + 32];
      var $51 = HEAP[$data];
      _llvm_memcpy_p0i8_p0i8_i32($50, $51, $45, 1, 0);
      
      var $53 = HEAP[$self_addr] + 32;
      HEAP[$53] = 0;
      __label__ = 8;
      break;
     case 8:
      var $54 = HEAP[$wdata];
      var $55 = HEAP[$wsize];
      var $56 = _decoder_prepare_buffer($buf, $54, $55);
      
      if ($56 != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $58 = HEAP[$self_addr];
      var $59 = _decoder_feed_buffer($58, $buf);
      
      if ($59 != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if (HEAP[$final] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      
      
      if (HEAP[$buf] < HEAP[$buf + 8]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      var $70 = HEAP[HEAP[$self_addr] + 20];
      
      var $72 = HEAP[$self_addr] + 12;
      
      
      var $75 = HEAP[HEAP[$self_addr] + 8];
      var $76 = _multibytecodec_decerror($75, $72, $buf, $70, -2);
      
      if ($76 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $78 = HEAP[$origpending];
      
      
      var $81 = HEAP[$self_addr] + 24;
      var $82 = HEAP[$wdata];
      _llvm_memcpy_p0i8_p0i8_i32($81, $82, $78, 1, 0);
      
      var $84 = HEAP[$self_addr] + 32;
      var $85 = HEAP[$origpending];
      HEAP[$84] = $85;
      __label__ = 24;
      break;
     case 14:
      
      
      
      
      
      if (HEAP[$buf] < HEAP[$buf + 8]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $91 = HEAP[$self_addr];
      var $92 = _decoder_append_pending($91, $buf);
      
      if ($92 != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      
      
      
      
      
      var $104 = (HEAP[$buf + 12] - HEAP[HEAP[$buf + 24] + 12]) / 2 | 0;
      HEAP[$finalsize] = $104;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$buf + 24] + 8] != HEAP[$finalsize]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $112 = $buf + 24;
      var $113 = HEAP[$finalsize];
      var $114 = _PyUnicodeUCS2_Resize($112, $113);
      var $115 = $114 == -1;
      if ($115) {
        __label__ = 24;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      _PyBuffer_Release($pdata);
      
      
      
      if (HEAP[$wdata] != HEAP[$data]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $119 = HEAP[$wdata];
      _PyMem_Free($119);
      __label__ = 20;
      break;
     case 20:
      
      
      
      if (HEAP[$buf + 20] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      
      var $124 = HEAP[$buf + 20];
      
      
      var $127 = HEAP[$124] - 1;
      var $128 = $124;
      HEAP[$128] = $127;
      
      
      
      if (HEAP[$124] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      
      var $137 = HEAP[HEAP[HEAP[$buf + 20] + 4] + 24];
      
      var $139 = HEAP[$buf + 20];
      FUNCTION_TABLE[$137]($139);
      __label__ = 23;
      break;
     case 23:
      
      var $141 = HEAP[$buf + 24];
      HEAP[$0] = $141;
      __label__ = 34;
      break;
     case 24:
      _PyBuffer_Release($pdata);
      
      
      if (HEAP[$wdata] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      
      if (HEAP[$wdata] != HEAP[$data]) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      var $147 = HEAP[$wdata];
      _PyMem_Free($147);
      __label__ = 27;
      break;
     case 27:
      
      
      
      if (HEAP[$buf + 20] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      
      var $152 = HEAP[$buf + 20];
      
      
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
      
      
      
      
      
      var $165 = HEAP[HEAP[HEAP[$buf + 20] + 4] + 24];
      
      var $167 = HEAP[$buf + 20];
      FUNCTION_TABLE[$165]($167);
      __label__ = 30;
      break;
     case 30:
      
      
      
      if (HEAP[$buf + 24] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 31:
      
      var $172 = HEAP[$buf + 24];
      
      
      var $175 = HEAP[$172] - 1;
      var $176 = $172;
      HEAP[$176] = $175;
      
      
      
      if (HEAP[$172] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      
      var $185 = HEAP[HEAP[HEAP[$buf + 24] + 4] + 24];
      
      var $187 = HEAP[$buf + 24];
      FUNCTION_TABLE[$185]($187);
      __label__ = 33;
      break;
     case 33:
      HEAP[$0] = 0;
      __label__ = 34;
      break;
     case 34:
      var $188 = HEAP[$0];
      HEAP[$retval] = $188;
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
  function _mbidecoder_reset($self) {
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
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 8] + 32] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      
      var $11 = HEAP[HEAP[HEAP[$self_addr] + 8] + 32];
      
      
      
      
      var $16 = HEAP[HEAP[HEAP[$self_addr] + 8] + 4];
      
      var $18 = HEAP[$self_addr] + 12;
      var $19 = FUNCTION_TABLE[$11]($18, $16);
      
      if ($19 != 0) {
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
      
      var $22 = HEAP[$self_addr] + 32;
      HEAP[$22] = 0;
      
      var $24 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $24;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 4;
      break;
     case 4:
      var $25 = HEAP[$0];
      HEAP[$retval] = $25;
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
  function _mbidecoder_new($type, $args, $kwds) {
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
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $self = __stackBase__ + 20;
      var $codec = __stackBase__ + 24;
      var $errors = __stackBase__ + 28;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$codec] = 0;
      HEAP[$errors] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwds_addr];
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str33, _incnewkwarglist, allocate([ $errors, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      
      var $7 = HEAP[HEAP[$type_addr] + 152];
      var $8 = HEAP[$type_addr];
      var $9 = FUNCTION_TABLE[$7]($8, 0);
      var $10 = $9;
      HEAP[$self] = $10;
      
      
      if (HEAP[$self] == 0) {
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
      
      var $14 = HEAP[$type_addr];
      var $15 = _PyObject_GetAttrString($14, __str29);
      HEAP[$codec] = $15;
      
      
      if (HEAP[$codec] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[HEAP[$codec] + 4] != _MultibyteCodec_Type) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $22 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($22, __str30);
      __label__ = 13;
      break;
     case 7:
      
      
      
      var $26 = HEAP[HEAP[$codec] + 8];
      
      var $28 = HEAP[$self] + 8;
      HEAP[$28] = $26;
      
      var $30 = HEAP[$self] + 32;
      HEAP[$30] = 0;
      var $31 = HEAP[$errors];
      var $32 = _internal_error_callback($31);
      
      var $34 = HEAP[$self] + 20;
      HEAP[$34] = $32;
      
      
      
      
      if (HEAP[HEAP[$self] + 20] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self] + 8] + 28] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[$self] + 8] + 28];
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$self] + 8] + 4];
      
      var $56 = HEAP[$self] + 12;
      var $57 = FUNCTION_TABLE[$49]($56, $54);
      
      if ($57 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $62 = HEAP[HEAP[$codec]] - 1;
      
      var $64 = HEAP[$codec];
      HEAP[$64] = $62;
      
      
      
      
      if (HEAP[HEAP[$codec]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[$codec] + 4] + 24];
      var $74 = HEAP[$codec];
      FUNCTION_TABLE[$73]($74);
      __label__ = 12;
      break;
     case 12:
      
      var $76 = HEAP[$self];
      HEAP[$0] = $76;
      __label__ = 20;
      break;
     case 13:
      
      
      if (HEAP[$self] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      var $80 = HEAP[$self];
      
      
      var $83 = HEAP[$80] - 1;
      var $84 = $80;
      HEAP[$84] = $83;
      
      
      
      if (HEAP[$80] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      var $93 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $95 = HEAP[$self];
      FUNCTION_TABLE[$93]($95);
      __label__ = 16;
      break;
     case 16:
      
      
      if (HEAP[$codec] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      var $101 = HEAP[HEAP[$codec]] - 1;
      
      var $103 = HEAP[$codec];
      HEAP[$103] = $101;
      
      
      
      
      if (HEAP[HEAP[$codec]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $112 = HEAP[HEAP[HEAP[$codec] + 4] + 24];
      var $113 = HEAP[$codec];
      FUNCTION_TABLE[$112]($113);
      __label__ = 19;
      break;
     case 19:
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 20:
      var $114 = HEAP[$0];
      HEAP[$retval] = $114;
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
  function _mbidecoder_init($self, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$0] = 0;
      var $1 = HEAP[$0];
      HEAP[$retval] = $1;
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
  function _mbidecoder_traverse($self, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
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
      
      HEAP[$self_addr] = $self;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] > 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $15 = HEAP[HEAP[$self_addr] + 20];
      var $16 = HEAP[$visit_addr];
      var $17 = HEAP[$arg_addr];
      var $18 = FUNCTION_TABLE[$16]($15, $17);
      HEAP[$vret] = $18;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $21 = HEAP[$vret];
      HEAP[$0] = $21;
      __label__ = 6;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 6:
      var $22 = HEAP[$0];
      HEAP[$retval] = $22;
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
  function _mbidecoder_dealloc($self) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] > 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[HEAP[$self_addr] + 20];
      
      
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
      
      
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 4] + 24];
      
      
      var $33 = HEAP[HEAP[$self_addr] + 20];
      FUNCTION_TABLE[$30]($33);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      
      var $39 = HEAP[HEAP[HEAP[$self_addr] + 4] + 160];
      
      var $41 = HEAP[$self_addr];
      FUNCTION_TABLE[$39]($41);
      __label__ = 6;
      break;
     case 6:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbstreamreader_iread($self, $method, $sizehint) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 72;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $method_addr = __stackBase__ + 4;
      var $sizehint_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $buf = __stackBase__ + 20;
      var $cres = __stackBase__ + 48;
      var $rsize = __stackBase__ + 52;
      var $finalsize = __stackBase__ + 56;
      var $endoffile = __stackBase__ + 60;
      var $ctr = __stackBase__ + 64;
      var $ctrdata = __stackBase__ + 68;
      
      HEAP[$self_addr] = $self;
      HEAP[$method_addr] = $method;
      HEAP[$sizehint_addr] = $sizehint;
      HEAP[$finalsize] = 0;
      
      
      if (HEAP[$sizehint_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = _PyUnicodeUCS2_FromUnicode(0, 0);
      HEAP[$0] = $3;
      __label__ = 50;
      break;
     case 2:
      
      HEAP[$buf + 20] = 0;
      
      var $6 = HEAP[$buf + 20];
      
      HEAP[$buf + 24] = $6;
      HEAP[$cres] = 0;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[$sizehint_addr] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $10 = HEAP[$method_addr];
      
      
      var $13 = HEAP[HEAP[$self_addr] + 36];
      var $14 = __PyObject_CallMethod_SizeT($13, $10, 0, allocate(1, "i32", ALLOC_STACK));
      HEAP[$cres] = $14;
      __label__ = 6;
      break;
     case 5:
      var $15 = HEAP[$method_addr];
      
      
      var $18 = HEAP[HEAP[$self_addr] + 36];
      var $19 = HEAP[$sizehint_addr];
      var $20 = __PyObject_CallMethod_SizeT($18, $15, __str35, allocate([ $19, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$cres] = $20;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$cres] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$cres] + 4] + 84] & 134217728) == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $30 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($30, __str36);
      __label__ = 40;
      break;
     case 9:
      
      
      
      
      
      var $36 = HEAP[HEAP[$cres] + 8] == 0;
      HEAP[$endoffile] = $36;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] > 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$cres] + 8] > 2147483647 - HEAP[HEAP[$self_addr] + 32]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $50 = _PyErr_NoMemory();
      __label__ = 40;
      break;
     case 12:
      
      
      
      
      
      
      
      var $58 = HEAP[HEAP[$cres] + 8] + HEAP[HEAP[$self_addr] + 32];
      HEAP[$rsize] = $58;
      var $59 = HEAP[$rsize];
      var $60 = _PyString_FromStringAndSize(0, $59);
      HEAP[$ctr] = $60;
      
      
      if (HEAP[$ctr] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $66 = HEAP[$ctr] + 20;
      HEAP[$ctrdata] = $66;
      
      
      var $69 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $72 = HEAP[$self_addr] + 24;
      var $73 = HEAP[$ctrdata];
      _llvm_memcpy_p0i8_p0i8_i32($73, $72, $69, 1, 0);
      
      
      
      var $77 = HEAP[HEAP[$cres] + 8];
      
      
      
      var $81 = HEAP[$cres] + 20;
      
      
      
      
      var $86 = HEAP[$ctrdata] + HEAP[HEAP[$self_addr] + 32];
      _llvm_memcpy_p0i8_p0i8_i32($86, $81, $77, 1, 0);
      
      
      
      var $90 = HEAP[HEAP[$cres]] - 1;
      
      var $92 = HEAP[$cres];
      HEAP[$92] = $90;
      
      
      
      
      if (HEAP[HEAP[$cres]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $101 = HEAP[HEAP[HEAP[$cres] + 4] + 24];
      var $102 = HEAP[$cres];
      FUNCTION_TABLE[$101]($102);
      __label__ = 15;
      break;
     case 15:
      var $103 = HEAP[$ctr];
      HEAP[$cres] = $103;
      
      var $105 = HEAP[$self_addr] + 32;
      HEAP[$105] = 0;
      __label__ = 16;
      break;
     case 16:
      
      
      
      var $109 = HEAP[HEAP[$cres] + 8];
      HEAP[$rsize] = $109;
      
      
      
      var $113 = HEAP[$cres] + 20;
      var $114 = HEAP[$rsize];
      var $115 = _decoder_prepare_buffer($buf, $113, $114);
      
      if ($115 != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      if (HEAP[$rsize] > 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      var $120 = HEAP[$self_addr];
      var $121 = _decoder_feed_buffer($120, $buf);
      
      if ($121 != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      if (HEAP[$endoffile] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      if (HEAP[$sizehint_addr] < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      
      
      
      
      
      if (HEAP[$buf] < HEAP[$buf + 8]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      var $134 = HEAP[HEAP[$self_addr] + 20];
      
      var $136 = HEAP[$self_addr] + 12;
      
      
      var $139 = HEAP[HEAP[$self_addr] + 8];
      var $140 = _multibytecodec_decerror($139, $136, $buf, $134, -2);
      
      if ($140 != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      if (HEAP[$buf] < HEAP[$buf + 8]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      var $148 = HEAP[$self_addr];
      var $149 = _decoder_append_pending($148, $buf);
      
      if ($149 != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      
      
      
      
      
      var $161 = (HEAP[$buf + 12] - HEAP[HEAP[$buf + 24] + 12]) / 2 | 0;
      HEAP[$finalsize] = $161;
      
      
      
      var $165 = HEAP[HEAP[$cres]] - 1;
      
      var $167 = HEAP[$cres];
      HEAP[$167] = $165;
      
      
      
      
      if (HEAP[HEAP[$cres]] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $176 = HEAP[HEAP[HEAP[$cres] + 4] + 24];
      var $177 = HEAP[$cres];
      FUNCTION_TABLE[$176]($177);
      __label__ = 27;
      break;
     case 27:
      HEAP[$cres] = 0;
      
      
      if (HEAP[$sizehint_addr] < 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      if (HEAP[$finalsize] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      if (HEAP[$rsize] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      HEAP[$sizehint_addr] = 1;
      __label__ = 3;
      break;
     case 31:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$buf + 24] + 8] != HEAP[$finalsize]) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      var $191 = $buf + 24;
      var $192 = HEAP[$finalsize];
      var $193 = _PyUnicodeUCS2_Resize($191, $192);
      var $194 = $193 == -1;
      if ($194) {
        __label__ = 40;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      if (HEAP[$cres] != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 34:
      
      
      
      var $200 = HEAP[HEAP[$cres]] - 1;
      
      var $202 = HEAP[$cres];
      HEAP[$202] = $200;
      
      
      
      
      if (HEAP[HEAP[$cres]] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $211 = HEAP[HEAP[HEAP[$cres] + 4] + 24];
      var $212 = HEAP[$cres];
      FUNCTION_TABLE[$211]($212);
      __label__ = 36;
      break;
     case 36:
      
      
      
      if (HEAP[$buf + 20] != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 37:
      
      var $217 = HEAP[$buf + 20];
      
      
      var $220 = HEAP[$217] - 1;
      var $221 = $217;
      HEAP[$221] = $220;
      
      
      
      if (HEAP[$217] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      
      var $230 = HEAP[HEAP[HEAP[$buf + 20] + 4] + 24];
      
      var $232 = HEAP[$buf + 20];
      FUNCTION_TABLE[$230]($232);
      __label__ = 39;
      break;
     case 39:
      
      var $234 = HEAP[$buf + 24];
      HEAP[$0] = $234;
      __label__ = 50;
      break;
     case 40:
      
      
      if (HEAP[$cres] != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 41:
      
      
      
      var $240 = HEAP[HEAP[$cres]] - 1;
      
      var $242 = HEAP[$cres];
      HEAP[$242] = $240;
      
      
      
      
      if (HEAP[HEAP[$cres]] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $251 = HEAP[HEAP[HEAP[$cres] + 4] + 24];
      var $252 = HEAP[$cres];
      FUNCTION_TABLE[$251]($252);
      __label__ = 43;
      break;
     case 43:
      
      
      
      if (HEAP[$buf + 20] != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 44:
      
      var $257 = HEAP[$buf + 20];
      
      
      var $260 = HEAP[$257] - 1;
      var $261 = $257;
      HEAP[$261] = $260;
      
      
      
      if (HEAP[$257] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      
      var $270 = HEAP[HEAP[HEAP[$buf + 20] + 4] + 24];
      
      var $272 = HEAP[$buf + 20];
      FUNCTION_TABLE[$270]($272);
      __label__ = 46;
      break;
     case 46:
      
      
      
      if (HEAP[$buf + 24] != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 47:
      
      var $277 = HEAP[$buf + 24];
      
      
      var $280 = HEAP[$277] - 1;
      var $281 = $277;
      HEAP[$281] = $280;
      
      
      
      if (HEAP[$277] == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      
      
      
      
      var $290 = HEAP[HEAP[HEAP[$buf + 24] + 4] + 24];
      
      var $292 = HEAP[$buf + 24];
      FUNCTION_TABLE[$290]($292);
      __label__ = 49;
      break;
     case 49:
      HEAP[$0] = 0;
      __label__ = 50;
      break;
     case 50:
      var $293 = HEAP[$0];
      HEAP[$retval] = $293;
      __label__ = 51;
      break;
     case 51:
      var $retval49 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval49;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbstreamreader_read($self, $args) {
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
      var $sizeobj = __stackBase__ + 16;
      var $size = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$sizeobj] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str37, 0, 1, allocate([ $sizeobj, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$sizeobj] == __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$sizeobj] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$size] = -1;
      __label__ = 8;
      break;
     case 5:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$sizeobj] + 4] + 84] & 8388608) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $15 = HEAP[$sizeobj];
      var $16 = _PyInt_AsSsize_t($15);
      HEAP[$size] = $16;
      __label__ = 8;
      break;
     case 7:
      var $17 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($17, __str38);
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 8:
      var $18 = HEAP[$self_addr];
      var $19 = HEAP[$size];
      var $20 = _mbstreamreader_iread($18, __str37, $19);
      HEAP[$0] = $20;
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
  function _mbstreamreader_readline($self, $args) {
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
      var $sizeobj = __stackBase__ + 16;
      var $size = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$sizeobj] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str39, 0, 1, allocate([ $sizeobj, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$sizeobj] == __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$sizeobj] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$size] = -1;
      __label__ = 8;
      break;
     case 5:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$sizeobj] + 4] + 84] & 8388608) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $15 = HEAP[$sizeobj];
      var $16 = _PyInt_AsSsize_t($15);
      HEAP[$size] = $16;
      __label__ = 8;
      break;
     case 7:
      var $17 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($17, __str38);
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 8:
      var $18 = HEAP[$self_addr];
      var $19 = HEAP[$size];
      var $20 = _mbstreamreader_iread($18, __str39, $19);
      HEAP[$0] = $20;
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
  function _mbstreamreader_readlines($self, $args) {
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
      var $sizehintobj = __stackBase__ + 16;
      var $r = __stackBase__ + 20;
      var $sr = __stackBase__ + 24;
      var $sizehint = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$sizehintobj] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str40, 0, 1, allocate([ $sizehintobj, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$sizehintobj] == __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$sizehintobj] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$sizehint] = -1;
      __label__ = 8;
      break;
     case 5:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$sizehintobj] + 4] + 84] & 8388608) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $15 = HEAP[$sizehintobj];
      var $16 = _PyInt_AsSsize_t($15);
      HEAP[$sizehint] = $16;
      __label__ = 8;
      break;
     case 7:
      var $17 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($17, __str38);
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 8:
      var $18 = HEAP[$self_addr];
      var $19 = HEAP[$sizehint];
      var $20 = _mbstreamreader_iread($18, __str37, $19);
      HEAP[$r] = $20;
      
      
      if (HEAP[$r] == 0) {
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
      var $23 = HEAP[$r];
      var $24 = _PyUnicodeUCS2_Splitlines($23, 1);
      HEAP[$sr] = $24;
      
      
      
      var $28 = HEAP[HEAP[$r]] - 1;
      
      var $30 = HEAP[$r];
      HEAP[$30] = $28;
      
      
      
      
      if (HEAP[HEAP[$r]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $39 = HEAP[HEAP[HEAP[$r] + 4] + 24];
      var $40 = HEAP[$r];
      FUNCTION_TABLE[$39]($40);
      __label__ = 12;
      break;
     case 12:
      var $41 = HEAP[$sr];
      HEAP[$0] = $41;
      __label__ = 13;
      break;
     case 13:
      var $42 = HEAP[$0];
      HEAP[$retval] = $42;
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
  function _mbstreamreader_reset($self) {
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
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr] + 8] + 32] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      
      var $11 = HEAP[HEAP[HEAP[$self_addr] + 8] + 32];
      
      
      
      
      var $16 = HEAP[HEAP[HEAP[$self_addr] + 8] + 4];
      
      var $18 = HEAP[$self_addr] + 12;
      var $19 = FUNCTION_TABLE[$11]($18, $16);
      
      if ($19 != 0) {
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
      
      var $22 = HEAP[$self_addr] + 32;
      HEAP[$22] = 0;
      
      var $24 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $24;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 4;
      break;
     case 4:
      var $25 = HEAP[$0];
      HEAP[$retval] = $25;
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
  function _mbstreamreader_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $self = __stackBase__ + 20;
      var $stream = __stackBase__ + 24;
      var $codec = __stackBase__ + 28;
      var $errors = __stackBase__ + 32;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$codec] = 0;
      HEAP[$errors] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwds_addr];
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str41, _streamkwarglist, allocate([ $stream, 0, 0, 0, $errors, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      
      var $7 = HEAP[HEAP[$type_addr] + 152];
      var $8 = HEAP[$type_addr];
      var $9 = FUNCTION_TABLE[$7]($8, 0);
      var $10 = $9;
      HEAP[$self] = $10;
      
      
      if (HEAP[$self] == 0) {
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
      
      var $14 = HEAP[$type_addr];
      var $15 = _PyObject_GetAttrString($14, __str29);
      HEAP[$codec] = $15;
      
      
      if (HEAP[$codec] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[HEAP[$codec] + 4] != _MultibyteCodec_Type) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $22 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($22, __str30);
      __label__ = 13;
      break;
     case 7:
      
      
      
      var $26 = HEAP[HEAP[$codec] + 8];
      
      var $28 = HEAP[$self] + 8;
      HEAP[$28] = $26;
      var $29 = HEAP[$stream];
      
      var $31 = HEAP[$self] + 36;
      HEAP[$31] = $29;
      
      
      
      var $35 = HEAP[HEAP[$stream]] + 1;
      var $36 = HEAP[$stream];
      HEAP[$36] = $35;
      
      var $38 = HEAP[$self] + 32;
      HEAP[$38] = 0;
      var $39 = HEAP[$errors];
      var $40 = _internal_error_callback($39);
      
      var $42 = HEAP[$self] + 20;
      HEAP[$42] = $40;
      
      
      
      
      if (HEAP[HEAP[$self] + 20] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self] + 8] + 28] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[$self] + 8] + 28];
      
      
      
      
      var $62 = HEAP[HEAP[HEAP[$self] + 8] + 4];
      
      var $64 = HEAP[$self] + 12;
      var $65 = FUNCTION_TABLE[$57]($64, $62);
      
      if ($65 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $70 = HEAP[HEAP[$codec]] - 1;
      
      var $72 = HEAP[$codec];
      HEAP[$72] = $70;
      
      
      
      
      if (HEAP[HEAP[$codec]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $81 = HEAP[HEAP[HEAP[$codec] + 4] + 24];
      var $82 = HEAP[$codec];
      FUNCTION_TABLE[$81]($82);
      __label__ = 12;
      break;
     case 12:
      
      var $84 = HEAP[$self];
      HEAP[$0] = $84;
      __label__ = 20;
      break;
     case 13:
      
      
      if (HEAP[$self] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      var $88 = HEAP[$self];
      
      
      var $91 = HEAP[$88] - 1;
      var $92 = $88;
      HEAP[$92] = $91;
      
      
      
      if (HEAP[$88] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      var $101 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $103 = HEAP[$self];
      FUNCTION_TABLE[$101]($103);
      __label__ = 16;
      break;
     case 16:
      
      
      if (HEAP[$codec] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      var $109 = HEAP[HEAP[$codec]] - 1;
      
      var $111 = HEAP[$codec];
      HEAP[$111] = $109;
      
      
      
      
      if (HEAP[HEAP[$codec]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $120 = HEAP[HEAP[HEAP[$codec] + 4] + 24];
      var $121 = HEAP[$codec];
      FUNCTION_TABLE[$120]($121);
      __label__ = 19;
      break;
     case 19:
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 20:
      var $122 = HEAP[$0];
      HEAP[$retval] = $122;
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
  function _mbstreamreader_init($self, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$0] = 0;
      var $1 = HEAP[$0];
      HEAP[$retval] = $1;
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
  function _mbstreamreader_traverse($self, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
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
      var $vret6 = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] > 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $15 = HEAP[HEAP[$self_addr] + 20];
      var $16 = HEAP[$visit_addr];
      var $17 = HEAP[$arg_addr];
      var $18 = FUNCTION_TABLE[$16]($15, $17);
      HEAP[$vret] = $18;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $21 = HEAP[$vret];
      HEAP[$0] = $21;
      __label__ = 9;
      break;
     case 5:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 36] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $28 = HEAP[HEAP[$self_addr] + 36];
      var $29 = HEAP[$visit_addr];
      var $30 = HEAP[$arg_addr];
      var $31 = FUNCTION_TABLE[$29]($28, $30);
      HEAP[$vret6] = $31;
      
      
      if (HEAP[$vret6] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $34 = HEAP[$vret6];
      HEAP[$0] = $34;
      __label__ = 9;
      break;
     case 8:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 9:
      var $35 = HEAP[$0];
      HEAP[$retval] = $35;
      __label__ = 10;
      break;
     case 10:
      var $retval10 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbstreamreader_dealloc($self) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] > 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[HEAP[$self_addr] + 20];
      
      
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
      
      
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 4] + 24];
      
      
      var $33 = HEAP[HEAP[$self_addr] + 20];
      FUNCTION_TABLE[$30]($33);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 36] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $40 = HEAP[HEAP[$self_addr] + 36];
      
      
      var $43 = HEAP[$40] - 1;
      var $44 = $40;
      HEAP[$44] = $43;
      
      
      
      if (HEAP[$40] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 36] + 4] + 24];
      
      
      var $57 = HEAP[HEAP[$self_addr] + 36];
      FUNCTION_TABLE[$54]($57);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      var $63 = HEAP[HEAP[HEAP[$self_addr] + 4] + 160];
      
      var $65 = HEAP[$self_addr];
      FUNCTION_TABLE[$63]($65);
      __label__ = 9;
      break;
     case 9:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbstreamwriter_iwrite($self, $unistr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unistr_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $str = __stackBase__ + 16;
      var $wr = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$unistr_addr] = $unistr;
      
      var $2 = HEAP[$self_addr];
      var $3 = HEAP[$unistr_addr];
      var $4 = _encoder_encode_stateful($2, $3, 0);
      HEAP[$str] = $4;
      
      
      if (HEAP[$str] == 0) {
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
      
      
      var $9 = HEAP[HEAP[$self_addr] + 32];
      var $10 = HEAP[$str];
      var $11 = __PyObject_CallMethod_SizeT($9, __str43, __str44, allocate([ $10, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$wr] = $11;
      
      
      
      var $15 = HEAP[HEAP[$str]] - 1;
      
      var $17 = HEAP[$str];
      HEAP[$17] = $15;
      
      
      
      
      if (HEAP[HEAP[$str]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $26 = HEAP[HEAP[HEAP[$str] + 4] + 24];
      var $27 = HEAP[$str];
      FUNCTION_TABLE[$26]($27);
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[$wr] == 0) {
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
      
      
      
      var $33 = HEAP[HEAP[$wr]] - 1;
      
      var $35 = HEAP[$wr];
      HEAP[$35] = $33;
      
      
      
      
      if (HEAP[HEAP[$wr]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$wr] + 4] + 24];
      var $45 = HEAP[$wr];
      FUNCTION_TABLE[$44]($45);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 9:
      var $46 = HEAP[$0];
      HEAP[$retval] = $46;
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
  function _mbstreamwriter_write($self, $strobj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $strobj_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$strobj_addr] = $strobj;
      var $1 = HEAP[$self_addr];
      var $2 = HEAP[$strobj_addr];
      var $3 = _mbstreamwriter_iwrite($1, $2);
      
      if ($3 != 0) {
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
      
      var $6 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $6;
      HEAP[$0] = __Py_NoneStruct;
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
  function _mbstreamwriter_writelines($self, $lines) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $lines_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $strobj = __stackBase__ + 16;
      var $i = __stackBase__ + 20;
      var $r = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$lines_addr] = $lines;
      var $1 = HEAP[$lines_addr];
      var $2 = _PySequence_Check($1);
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($4, __str45);
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 2:
      HEAP[$i] = 0;
      __label__ = 10;
      break;
     case 3:
      var $5 = HEAP[$lines_addr];
      var $6 = HEAP[$i];
      var $7 = _PySequence_GetItem($5, $6);
      HEAP[$strobj] = $7;
      
      
      if (HEAP[$strobj] == 0) {
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
      var $10 = HEAP[$self_addr];
      var $11 = HEAP[$strobj];
      var $12 = _mbstreamwriter_iwrite($10, $11);
      HEAP[$r] = $12;
      
      
      
      var $16 = HEAP[HEAP[$strobj]] - 1;
      
      var $18 = HEAP[$strobj];
      HEAP[$18] = $16;
      
      
      
      
      if (HEAP[HEAP[$strobj]] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[$strobj] + 4] + 24];
      var $28 = HEAP[$strobj];
      FUNCTION_TABLE[$27]($28);
      __label__ = 7;
      break;
     case 7:
      
      var $30 = HEAP[$r] == -1;
      if ($30) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 9:
      
      var $32 = HEAP[$i] + 1;
      HEAP[$i] = $32;
      __label__ = 10;
      break;
     case 10:
      var $33 = HEAP[$lines_addr];
      var $34 = _PySequence_Size($33);
      
      
      if ($34 > HEAP[$i]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $38 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $38;
      HEAP[$0] = __Py_NoneStruct;
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
  function _mbstreamwriter_reset($self) {
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
      var $pending = __stackBase__ + 12;
      var $pwrt = __stackBase__ + 16;
      var $wr = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      
      
      var $3 = HEAP[$self_addr] + 24;
      HEAP[$pending] = $3;
      
      
      var $6 = HEAP[HEAP[$self_addr] + 20];
      
      
      var $9 = HEAP[HEAP[$self_addr] + 28];
      
      var $11 = HEAP[$self_addr] + 12;
      
      
      var $14 = HEAP[HEAP[$self_addr] + 8];
      var $15 = _multibytecodec_encode($14, $11, $pending, $9, $6, 3);
      HEAP[$pwrt] = $15;
      
      var $17 = HEAP[$self_addr] + 28;
      HEAP[$17] = 0;
      
      
      if (HEAP[$pwrt] == 0) {
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
      var $20 = HEAP[$pwrt];
      var $21 = _PyString_Size($20);
      
      if ($21 > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      var $25 = HEAP[HEAP[$self_addr] + 32];
      var $26 = HEAP[$pwrt];
      var $27 = __PyObject_CallMethod_SizeT($25, __str43, __str44, allocate([ $26, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$wr] = $27;
      
      
      if (HEAP[$wr] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $33 = HEAP[HEAP[$pwrt]] - 1;
      
      var $35 = HEAP[$pwrt];
      HEAP[$35] = $33;
      
      
      
      
      if (HEAP[HEAP[$pwrt]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$pwrt] + 4] + 24];
      var $45 = HEAP[$pwrt];
      FUNCTION_TABLE[$44]($45);
      __label__ = 6;
      break;
     case 6:
      HEAP[$0] = 0;
      __label__ = 10;
      break;
     case 7:
      
      
      
      var $49 = HEAP[HEAP[$pwrt]] - 1;
      
      var $51 = HEAP[$pwrt];
      HEAP[$51] = $49;
      
      
      
      
      if (HEAP[HEAP[$pwrt]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[$pwrt] + 4] + 24];
      var $61 = HEAP[$pwrt];
      FUNCTION_TABLE[$60]($61);
      __label__ = 9;
      break;
     case 9:
      
      var $63 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $63;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 10;
      break;
     case 10:
      var $64 = HEAP[$0];
      HEAP[$retval] = $64;
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
  function _mbstreamwriter_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $self = __stackBase__ + 20;
      var $stream = __stackBase__ + 24;
      var $codec = __stackBase__ + 28;
      var $errors = __stackBase__ + 32;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$codec] = 0;
      HEAP[$errors] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwds_addr];
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str46, _streamkwarglist, allocate([ $stream, 0, 0, 0, $errors, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      
      var $7 = HEAP[HEAP[$type_addr] + 152];
      var $8 = HEAP[$type_addr];
      var $9 = FUNCTION_TABLE[$7]($8, 0);
      var $10 = $9;
      HEAP[$self] = $10;
      
      
      if (HEAP[$self] == 0) {
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
      
      var $14 = HEAP[$type_addr];
      var $15 = _PyObject_GetAttrString($14, __str29);
      HEAP[$codec] = $15;
      
      
      if (HEAP[$codec] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[HEAP[$codec] + 4] != _MultibyteCodec_Type) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $22 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($22, __str30);
      __label__ = 13;
      break;
     case 7:
      
      
      
      var $26 = HEAP[HEAP[$codec] + 8];
      
      var $28 = HEAP[$self] + 8;
      HEAP[$28] = $26;
      var $29 = HEAP[$stream];
      
      var $31 = HEAP[$self] + 32;
      HEAP[$31] = $29;
      
      
      
      var $35 = HEAP[HEAP[$stream]] + 1;
      var $36 = HEAP[$stream];
      HEAP[$36] = $35;
      
      var $38 = HEAP[$self] + 28;
      HEAP[$38] = 0;
      var $39 = HEAP[$errors];
      var $40 = _internal_error_callback($39);
      
      var $42 = HEAP[$self] + 20;
      HEAP[$42] = $40;
      
      
      
      
      if (HEAP[HEAP[$self] + 20] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self] + 8] + 16] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[$self] + 8] + 16];
      
      
      
      
      var $62 = HEAP[HEAP[HEAP[$self] + 8] + 4];
      
      var $64 = HEAP[$self] + 12;
      var $65 = FUNCTION_TABLE[$57]($64, $62);
      
      if ($65 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $70 = HEAP[HEAP[$codec]] - 1;
      
      var $72 = HEAP[$codec];
      HEAP[$72] = $70;
      
      
      
      
      if (HEAP[HEAP[$codec]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $81 = HEAP[HEAP[HEAP[$codec] + 4] + 24];
      var $82 = HEAP[$codec];
      FUNCTION_TABLE[$81]($82);
      __label__ = 12;
      break;
     case 12:
      
      var $84 = HEAP[$self];
      HEAP[$0] = $84;
      __label__ = 20;
      break;
     case 13:
      
      
      if (HEAP[$self] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      var $88 = HEAP[$self];
      
      
      var $91 = HEAP[$88] - 1;
      var $92 = $88;
      HEAP[$92] = $91;
      
      
      
      if (HEAP[$88] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      var $101 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $103 = HEAP[$self];
      FUNCTION_TABLE[$101]($103);
      __label__ = 16;
      break;
     case 16:
      
      
      if (HEAP[$codec] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      var $109 = HEAP[HEAP[$codec]] - 1;
      
      var $111 = HEAP[$codec];
      HEAP[$111] = $109;
      
      
      
      
      if (HEAP[HEAP[$codec]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $120 = HEAP[HEAP[HEAP[$codec] + 4] + 24];
      var $121 = HEAP[$codec];
      FUNCTION_TABLE[$120]($121);
      __label__ = 19;
      break;
     case 19:
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 20:
      var $122 = HEAP[$0];
      HEAP[$retval] = $122;
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
  function _mbstreamwriter_init($self, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$0] = 0;
      var $1 = HEAP[$0];
      HEAP[$retval] = $1;
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
  function _mbstreamwriter_traverse($self, $visit, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
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
      var $vret6 = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$visit_addr] = $visit;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] > 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $15 = HEAP[HEAP[$self_addr] + 20];
      var $16 = HEAP[$visit_addr];
      var $17 = HEAP[$arg_addr];
      var $18 = FUNCTION_TABLE[$16]($15, $17);
      HEAP[$vret] = $18;
      
      
      if (HEAP[$vret] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $21 = HEAP[$vret];
      HEAP[$0] = $21;
      __label__ = 9;
      break;
     case 5:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $28 = HEAP[HEAP[$self_addr] + 32];
      var $29 = HEAP[$visit_addr];
      var $30 = HEAP[$arg_addr];
      var $31 = FUNCTION_TABLE[$29]($28, $30);
      HEAP[$vret6] = $31;
      
      
      if (HEAP[$vret6] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $34 = HEAP[$vret6];
      HEAP[$0] = $34;
      __label__ = 9;
      break;
     case 8:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 9:
      var $35 = HEAP[$0];
      HEAP[$retval] = $35;
      __label__ = 10;
      break;
     case 10:
      var $retval10 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbstreamwriter_dealloc($self) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] > 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[HEAP[$self_addr] + 20];
      
      
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
      
      
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 20] + 4] + 24];
      
      
      var $33 = HEAP[HEAP[$self_addr] + 20];
      FUNCTION_TABLE[$30]($33);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 32] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $40 = HEAP[HEAP[$self_addr] + 32];
      
      
      var $43 = HEAP[$40] - 1;
      var $44 = $40;
      HEAP[$44] = $43;
      
      
      
      if (HEAP[$40] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 32] + 4] + 24];
      
      
      var $57 = HEAP[HEAP[$self_addr] + 32];
      FUNCTION_TABLE[$54]($57);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      var $63 = HEAP[HEAP[HEAP[$self_addr] + 4] + 160];
      
      var $65 = HEAP[$self_addr];
      FUNCTION_TABLE[$63]($65);
      __label__ = 9;
      break;
     case 9:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function ___create_codec($ignore, $arg) {
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
      var $self = __stackBase__ + 16;
      var $codec = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $ignore;
      HEAP[$arg_addr] = $arg;
      var $1 = HEAP[$arg_addr];
      var $2 = _PyCapsule_IsValid($1, __str49);
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($4, __str50);
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 2:
      var $5 = HEAP[$arg_addr];
      var $6 = _PyCapsule_GetPointer($5, __str49);
      var $7 = $6;
      HEAP[$codec] = $7;
      
      
      
      
      if (HEAP[HEAP[$codec] + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $14 = HEAP[HEAP[$codec] + 8];
      
      
      var $17 = HEAP[HEAP[$codec] + 4];
      var $18 = FUNCTION_TABLE[$14]($17);
      
      if ($18 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 5:
      var $20 = __PyObject_New(_MultibyteCodec_Type);
      
      HEAP[$self] = $20;
      
      
      if (HEAP[$self] == 0) {
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
      
      var $25 = HEAP[$self] + 8;
      var $26 = HEAP[$codec];
      HEAP[$25] = $26;
      
      var $28 = HEAP[$self];
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
  function _init_multibytecodec() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $i = __stackBase__;
      var $m = __stackBase__ + 4;
      var $typelist = __stackBase__ + 8;
      
      
      var $1 = HEAP[_C_140_10875];
      HEAP[$typelist] = $1;
      
      var $3 = HEAP[_C_140_10875 + 4];
      HEAP[$typelist + 4] = $3;
      
      var $5 = HEAP[_C_140_10875 + 8];
      HEAP[$typelist + 8] = $5;
      
      var $7 = HEAP[_C_140_10875 + 12];
      HEAP[$typelist + 12] = $7;
      
      var $9 = HEAP[_C_140_10875 + 16];
      HEAP[$typelist + 16] = $9;
      var $10 = _PyType_Ready(_MultibyteCodec_Type);
      
      if ($10 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $12 = _Py_InitModule4(__str52, ___methods, 0, 0, 1013);
      HEAP[$m] = $12;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[$i] = 0;
      __label__ = 5;
      break;
     case 3:
      
      
      var $17 = HEAP[$typelist + HEAP[$i] * 4];
      var $18 = _PyType_Ready($17);
      
      if ($18 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $26 = HEAP[HEAP[$typelist + HEAP[$i] * 4]] + 1;
      var $27 = HEAP[$typelist + HEAP[$i] * 4];
      HEAP[$27] = $26;
      
      
      
      var $31 = HEAP[$typelist + HEAP[$i] * 4];
      
      
      
      
      var $36 = HEAP[HEAP[$typelist + HEAP[$i] * 4] + 12];
      var $37 = HEAP[$m];
      var $38 = _PyModule_AddObject($37, $36, $31);
      
      var $40 = HEAP[$i] + 1;
      HEAP[$i] = $40;
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[$typelist + HEAP[$i] * 4] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $45 = _PyErr_Occurred();
      
      if ($45 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _Py_FatalError(__str53);
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
  Module["_init_multibytecodec"] = _init_multibytecodec;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _codecctx_errors_get, 0, _codecctx_errors_set, 0, _MultibyteCodec_Encode, 0, _MultibyteCodec_Decode, 0, _multibytecodec_dealloc, 0, _PyObject_GenericGetAttr, 0, _mbiencoder_encode, 0, _mbiencoder_reset, 0, _mbiencoder_dealloc, 0, _mbiencoder_traverse, 0, _mbiencoder_init, 0, _mbiencoder_new, 0, _mbidecoder_decode, 0, _mbidecoder_reset, 0, _mbidecoder_dealloc, 0, _mbidecoder_traverse, 0, _mbidecoder_init, 0, _mbidecoder_new, 0, _mbstreamreader_read, 0, _mbstreamreader_readline, 0, _mbstreamreader_readlines, 0, _mbstreamreader_reset, 0, _mbstreamreader_dealloc, 0, _mbstreamreader_traverse, 0, _mbstreamreader_init, 0, _mbstreamreader_new, 0, _mbstreamwriter_write, 0, _mbstreamwriter_writelines, 0, _mbstreamwriter_reset, 0, _mbstreamwriter_dealloc, 0, _mbstreamwriter_traverse, 0, _mbstreamwriter_init, 0, _mbstreamwriter_new, 0, ___create_codec, 0 ]);
  function run(args) {
    _MultibyteCodec_Encode__doc__ = allocate([ 73, 46, 101, 110, 99, 111, 100, 101, 40, 117, 110, 105, 99, 111, 100, 101, 91, 44, 32, 101, 114, 114, 111, 114, 115, 93, 41, 32, 45, 62, 32, 40, 115, 116, 114, 105, 110, 103, 44, 32, 108, 101, 110, 103, 116, 104, 32, 99, 111, 110, 115, 117, 109, 101, 100, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 110, 32, 101, 110, 99, 111, 100, 101, 100, 32, 115, 116, 114, 105, 110, 103, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32, 96, 117, 110, 105, 99, 111, 100, 101, 39, 46, 32, 101, 114, 114, 111, 114, 115, 32, 109, 97, 121, 32, 98, 101, 32, 103, 105, 118, 101, 110, 32, 116, 111, 10, 115, 101, 116, 32, 97, 32, 100, 105, 102, 102, 101, 114, 101, 110, 116, 32, 101, 114, 114, 111, 114, 32, 104, 97, 110, 100, 108, 105, 110, 103, 32, 115, 99, 104, 101, 109, 101, 46, 32, 68, 101, 102, 97, 117, 108, 116, 32, 105, 115, 32, 39, 115, 116, 114, 105, 99, 116, 39, 32, 109, 101, 97, 110, 105, 110, 103, 32, 116, 104, 97, 116, 10, 101, 110, 99, 111, 100, 105, 110, 103, 32, 101, 114, 114, 111, 114, 115, 32, 114, 97, 105, 115, 101, 32, 97, 32, 85, 110, 105, 99, 111, 100, 101, 69, 110, 99, 111, 100, 101, 69, 114, 114, 111, 114, 46, 32, 79, 116, 104, 101, 114, 32, 112, 111, 115, 115, 105, 98, 108, 101, 32, 118, 97, 108, 117, 101, 115, 32, 97, 114, 101, 10, 39, 105, 103, 110, 111, 114, 101, 39, 44, 32, 39, 114, 101, 112, 108, 97, 99, 101, 39, 32, 97, 110, 100, 32, 39, 120, 109, 108, 99, 104, 97, 114, 114, 101, 102, 114, 101, 112, 108, 97, 99, 101, 39, 32, 97, 115, 32, 119, 101, 108, 108, 32, 97, 115, 32, 97, 110, 121, 32, 111, 116, 104, 101, 114, 32, 110, 97, 109, 101, 10, 114, 101, 103, 105, 115, 116, 101, 114, 101, 100, 32, 119, 105, 116, 104, 32, 99, 111, 100, 101, 99, 115, 46, 114, 101, 103, 105, 115, 116, 101, 114, 95, 101, 114, 114, 111, 114, 32, 116, 104, 97, 116, 32, 99, 97, 110, 32, 104, 97, 110, 100, 108, 101, 32, 85, 110, 105, 99, 111, 100, 101, 69, 110, 99, 111, 100, 101, 69, 114, 114, 111, 114, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _MultibyteCodec_Decode__doc__ = allocate([ 73, 46, 100, 101, 99, 111, 100, 101, 40, 115, 116, 114, 105, 110, 103, 91, 44, 32, 101, 114, 114, 111, 114, 115, 93, 41, 32, 45, 62, 32, 40, 117, 110, 105, 99, 111, 100, 101, 111, 98, 106, 101, 99, 116, 44, 32, 108, 101, 110, 103, 116, 104, 32, 99, 111, 110, 115, 117, 109, 101, 100, 41, 10, 10, 68, 101, 99, 111, 100, 101, 115, 32, 96, 115, 116, 114, 105, 110, 103, 39, 32, 117, 115, 105, 110, 103, 32, 73, 44, 32, 97, 110, 32, 77, 117, 108, 116, 105, 98, 121, 116, 101, 67, 111, 100, 101, 99, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 32, 101, 114, 114, 111, 114, 115, 32, 109, 97, 121, 32, 98, 101, 32, 103, 105, 118, 101, 110, 10, 116, 111, 32, 115, 101, 116, 32, 97, 32, 100, 105, 102, 102, 101, 114, 101, 110, 116, 32, 101, 114, 114, 111, 114, 32, 104, 97, 110, 100, 108, 105, 110, 103, 32, 115, 99, 104, 101, 109, 101, 46, 32, 68, 101, 102, 97, 117, 108, 116, 32, 105, 115, 32, 39, 115, 116, 114, 105, 99, 116, 39, 32, 109, 101, 97, 110, 105, 110, 103, 10, 116, 104, 97, 116, 32, 101, 110, 99, 111, 100, 105, 110, 103, 32, 101, 114, 114, 111, 114, 115, 32, 114, 97, 105, 115, 101, 32, 97, 32, 85, 110, 105, 99, 111, 100, 101, 68, 101, 99, 111, 100, 101, 69, 114, 114, 111, 114, 46, 32, 79, 116, 104, 101, 114, 32, 112, 111, 115, 115, 105, 98, 108, 101, 32, 118, 97, 108, 117, 101, 115, 10, 97, 114, 101, 32, 39, 105, 103, 110, 111, 114, 101, 39, 32, 97, 110, 100, 32, 39, 114, 101, 112, 108, 97, 99, 101, 39, 32, 97, 115, 32, 119, 101, 108, 108, 32, 97, 115, 32, 97, 110, 121, 32, 111, 116, 104, 101, 114, 32, 110, 97, 109, 101, 32, 114, 101, 103, 105, 115, 116, 101, 114, 101, 100, 32, 119, 105, 116, 104, 10, 99, 111, 100, 101, 99, 115, 46, 114, 101, 103, 105, 115, 116, 101, 114, 95, 101, 114, 114, 111, 114, 32, 116, 104, 97, 116, 32, 105, 115, 32, 97, 98, 108, 101, 32, 116, 111, 32, 104, 97, 110, 100, 108, 101, 32, 85, 110, 105, 99, 111, 100, 101, 68, 101, 99, 111, 100, 101, 69, 114, 114, 111, 114, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _codeckwarglist = allocate(12, "i8*", ALLOC_NORMAL);
    __str = allocate([ 105, 110, 112, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 101, 114, 114, 111, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    _incnewkwarglist = allocate(8, "i8*", ALLOC_NORMAL);
    _incrementalkwarglist = allocate(12, "i8*", ALLOC_NORMAL);
    __str2 = allocate([ 102, 105, 110, 97, 108, 0 ], "i8", ALLOC_NORMAL);
    _streamkwarglist = allocate(12, "i8*", ALLOC_NORMAL);
    __str3 = allocate([ 115, 116, 114, 101, 97, 109, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 115, 116, 114, 105, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 105, 103, 110, 111, 114, 101, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 114, 101, 112, 108, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 101, 114, 114, 111, 114, 115, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 55, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 99, 106, 107, 99, 111, 100, 101, 99, 115, 47, 109, 117, 108, 116, 105, 98, 121, 116, 101, 99, 111, 100, 101, 99, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8485 = allocate([ 99, 97, 108, 108, 95, 101, 114, 114, 111, 114, 95, 99, 97, 108, 108, 98, 97, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 101, 114, 114, 111, 114, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 104, 111, 119, 32, 116, 111, 32, 116, 114, 101, 97, 116, 32, 101, 114, 114, 111, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    _codecctx_getsets = allocate(40, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str11 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 109, 117, 108, 116, 105, 98, 121, 116, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 105, 110, 99, 111, 109, 112, 108, 101, 116, 101, 32, 109, 117, 108, 116, 105, 98, 121, 116, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 105, 110, 116, 101, 114, 110, 97, 108, 32, 99, 111, 100, 101, 99, 32, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 117, 110, 107, 110, 111, 119, 110, 32, 114, 117, 110, 116, 105, 109, 101, 32, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 101, 110, 99, 111, 100, 105, 110, 103, 32, 101, 114, 114, 111, 114, 32, 104, 97, 110, 100, 108, 101, 114, 32, 109, 117, 115, 116, 32, 114, 101, 116, 117, 114, 110, 32, 40, 117, 110, 105, 99, 111, 100, 101, 44, 32, 105, 110, 116, 41, 32, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 112, 111, 115, 105, 116, 105, 111, 110, 32, 37, 122, 100, 32, 102, 114, 111, 109, 32, 101, 114, 114, 111, 114, 32, 104, 97, 110, 100, 108, 101, 114, 32, 111, 117, 116, 32, 111, 102, 32, 98, 111, 117, 110, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 100, 101, 99, 111, 100, 105, 110, 103, 32, 101, 114, 114, 111, 114, 32, 104, 97, 110, 100, 108, 101, 114, 32, 109, 117, 115, 116, 32, 114, 101, 116, 117, 114, 110, 32, 40, 117, 110, 105, 99, 111, 100, 101, 44, 32, 105, 110, 116, 41, 32, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate(1, "i8", ALLOC_NORMAL);
    __str19 = allocate([ 79, 124, 122, 58, 101, 110, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 99, 111, 117, 108, 100, 110, 39, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 116, 104, 101, 32, 111, 98, 106, 101, 99, 116, 32, 116, 111, 32, 117, 110, 105, 99, 111, 100, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 115, 42, 124, 122, 58, 100, 101, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 101, 110, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 100, 101, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    _multibytecodec_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str24 = allocate([ 77, 117, 108, 116, 105, 98, 121, 116, 101, 67, 111, 100, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    _MultibyteCodec_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str25 = allocate([ 112, 101, 110, 100, 105, 110, 103, 32, 98, 117, 102, 102, 101, 114, 32, 111, 118, 101, 114, 102, 108, 111, 119, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 79, 124, 105, 58, 101, 110, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 114, 101, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    _mbiencoder_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str28 = allocate([ 124, 115, 58, 73, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 69, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 99, 111, 100, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 99, 111, 100, 101, 99, 32, 105, 115, 32, 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 77, 117, 108, 116, 105, 98, 121, 116, 101, 73, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 69, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _MultibyteIncrementalEncoder_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str32 = allocate([ 115, 42, 124, 105, 58, 100, 101, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    _mbidecoder_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str33 = allocate([ 124, 115, 58, 73, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 68, 101, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 77, 117, 108, 116, 105, 98, 121, 116, 101, 73, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 68, 101, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _MultibyteIncrementalDecoder_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str35 = allocate([ 105, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 115, 116, 114, 101, 97, 109, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 97, 32, 110, 111, 110, 45, 115, 116, 114, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 114, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 97, 114, 103, 32, 49, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 114, 101, 97, 100, 108, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 114, 101, 97, 100, 108, 105, 110, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _mbstreamreader_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _mbstreamreader_members = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 36, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str41 = allocate([ 79, 124, 115, 58, 83, 116, 114, 101, 97, 109, 82, 101, 97, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 77, 117, 108, 116, 105, 98, 121, 116, 101, 83, 116, 114, 101, 97, 109, 82, 101, 97, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _MultibyteStreamReader_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str43 = allocate([ 119, 114, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 79, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 97, 114, 103, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 79, 124, 115, 58, 83, 116, 114, 101, 97, 109, 87, 114, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 119, 114, 105, 116, 101, 108, 105, 110, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _mbstreamwriter_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _mbstreamwriter_members = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 32, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str48 = allocate([ 77, 117, 108, 116, 105, 98, 121, 116, 101, 83, 116, 114, 101, 97, 109, 87, 114, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _MultibyteStreamWriter_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str49 = allocate([ 109, 117, 108, 116, 105, 98, 121, 116, 101, 99, 111, 100, 101, 99, 46, 95, 95, 109, 97, 112, 95, 42, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 97, 114, 103, 117, 109, 101, 110, 116, 32, 116, 121, 112, 101, 32, 105, 110, 118, 97, 108, 105, 100, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 95, 95, 99, 114, 101, 97, 116, 101, 95, 99, 111, 100, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    ___methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _C_140_10875 = allocate(20, "%struct._typeobject*", ALLOC_NORMAL);
    __str52 = allocate([ 95, 109, 117, 108, 116, 105, 98, 121, 116, 101, 99, 111, 100, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 99, 97, 110, 39, 116, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 32, 116, 104, 101, 32, 95, 109, 117, 108, 116, 105, 98, 121, 116, 101, 99, 111, 100, 101, 99, 32, 109, 111, 100, 117, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_codeckwarglist] = __str;
    HEAP[_codeckwarglist + 4] = __str1;
    HEAP[_incnewkwarglist] = __str1;
    HEAP[_incrementalkwarglist] = __str;
    HEAP[_incrementalkwarglist + 4] = __str2;
    HEAP[_streamkwarglist] = __str3;
    HEAP[_streamkwarglist + 4] = __str1;
    HEAP[_codecctx_getsets] = __str1;
    HEAP[_codecctx_getsets + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_codecctx_getsets + 8] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_codecctx_getsets + 12] = __str10;
    HEAP[_multibytecodec_methods] = __str22;
    HEAP[_multibytecodec_methods + 4] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_multibytecodec_methods + 12] = _MultibyteCodec_Encode__doc__;
    HEAP[_multibytecodec_methods + 16] = __str23;
    HEAP[_multibytecodec_methods + 20] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_multibytecodec_methods + 28] = _MultibyteCodec_Decode__doc__;
    HEAP[_MultibyteCodec_Type + 12] = __str24;
    HEAP[_MultibyteCodec_Type + 24] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_MultibyteCodec_Type + 72] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_MultibyteCodec_Type + 116] = _multibytecodec_methods;
    HEAP[_mbiencoder_methods] = __str22;
    HEAP[_mbiencoder_methods + 4] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_mbiencoder_methods + 16] = __str27;
    HEAP[_mbiencoder_methods + 20] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_MultibyteIncrementalEncoder_Type + 12] = __str31;
    HEAP[_MultibyteIncrementalEncoder_Type + 24] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_MultibyteIncrementalEncoder_Type + 72] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_MultibyteIncrementalEncoder_Type + 92] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_MultibyteIncrementalEncoder_Type + 116] = _mbiencoder_methods;
    HEAP[_MultibyteIncrementalEncoder_Type + 124] = _codecctx_getsets;
    HEAP[_MultibyteIncrementalEncoder_Type + 148] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_MultibyteIncrementalEncoder_Type + 156] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_mbidecoder_methods] = __str23;
    HEAP[_mbidecoder_methods + 4] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_mbidecoder_methods + 16] = __str27;
    HEAP[_mbidecoder_methods + 20] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_MultibyteIncrementalDecoder_Type + 12] = __str34;
    HEAP[_MultibyteIncrementalDecoder_Type + 24] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_MultibyteIncrementalDecoder_Type + 72] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_MultibyteIncrementalDecoder_Type + 92] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_MultibyteIncrementalDecoder_Type + 116] = _mbidecoder_methods;
    HEAP[_MultibyteIncrementalDecoder_Type + 124] = _codecctx_getsets;
    HEAP[_MultibyteIncrementalDecoder_Type + 148] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_MultibyteIncrementalDecoder_Type + 156] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_mbstreamreader_methods] = __str37;
    HEAP[_mbstreamreader_methods + 4] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_mbstreamreader_methods + 16] = __str39;
    HEAP[_mbstreamreader_methods + 20] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_mbstreamreader_methods + 32] = __str40;
    HEAP[_mbstreamreader_methods + 36] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_mbstreamreader_methods + 48] = __str27;
    HEAP[_mbstreamreader_methods + 52] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_mbstreamreader_members] = __str3;
    HEAP[_MultibyteStreamReader_Type + 12] = __str42;
    HEAP[_MultibyteStreamReader_Type + 24] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_MultibyteStreamReader_Type + 72] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_MultibyteStreamReader_Type + 92] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_MultibyteStreamReader_Type + 116] = _mbstreamreader_methods;
    HEAP[_MultibyteStreamReader_Type + 120] = _mbstreamreader_members;
    HEAP[_MultibyteStreamReader_Type + 124] = _codecctx_getsets;
    HEAP[_MultibyteStreamReader_Type + 148] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_MultibyteStreamReader_Type + 156] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_mbstreamwriter_methods] = __str43;
    HEAP[_mbstreamwriter_methods + 4] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_mbstreamwriter_methods + 16] = __str47;
    HEAP[_mbstreamwriter_methods + 20] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_mbstreamwriter_methods + 32] = __str27;
    HEAP[_mbstreamwriter_methods + 36] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_mbstreamwriter_members] = __str3;
    HEAP[_MultibyteStreamWriter_Type + 12] = __str48;
    HEAP[_MultibyteStreamWriter_Type + 24] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_MultibyteStreamWriter_Type + 72] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_MultibyteStreamWriter_Type + 92] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_MultibyteStreamWriter_Type + 116] = _mbstreamwriter_methods;
    HEAP[_MultibyteStreamWriter_Type + 120] = _mbstreamwriter_members;
    HEAP[_MultibyteStreamWriter_Type + 124] = _codecctx_getsets;
    HEAP[_MultibyteStreamWriter_Type + 148] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_MultibyteStreamWriter_Type + 156] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[___methods] = __str51;
    HEAP[___methods + 4] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_C_140_10875] = _MultibyteIncrementalEncoder_Type;
    HEAP[_C_140_10875 + 4] = _MultibyteIncrementalDecoder_Type;
    HEAP[_C_140_10875 + 8] = _MultibyteStreamReader_Type;
    HEAP[_C_140_10875 + 12] = _MultibyteStreamWriter_Type;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
