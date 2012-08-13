"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 128;
  var $1___SIZE = 16;
  var $2___SIZE = 80;
  var $3___SIZE = 20;
  var $4___SIZE = 20;
  var $5___SIZE = 40;
  var $6___SIZE = 20;
  var $7___SIZE = 196;
  var $8___SIZE = 48;
  var $9___SIZE = 40;
  var $10___SIZE = 80;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_LogReaderObject___SIZE = 24;
  var $struct_ProfilerObject___SIZE = 10292;
  var $struct_ProfilerObject___FLATTENER = [ 0, 4, 8, 12, 16, 20, 10260, 10264, 10268, 10272, 10276, 10280, 10284 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyCodeObject___SIZE = 72;
  var $struct_PyFrameObject___SIZE = 316;
  var $struct_PyFrameObject___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 312 ];
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyInterpreterState___SIZE = 40;
  var $struct_PyListObject___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyThreadState___SIZE = 84;
  var $struct_PyTryBlock___SIZE = 12;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_hs_time___SIZE = 8;
  var $struct_rusage___SIZE = 72;
  var $struct_rusage___FLATTENER = [ 0, 8, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68 ];
  var $struct_timezone___SIZE = 8;
  var _ProfilerError;
  var _logreader_close__doc__;
  var _logreader_fileno__doc__;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var ___PRETTY_FUNCTION___8854;
  var __str7;
  var _maxvalues_8827;
  var _timeofday_diff;
  var _rusage_diff;
  var __str8;
  var __str9;
  var _addinfo__doc__;
  var __str10;
  var _close__doc__;
  var __str11;
  var _runcall__doc__;
  var __str12;
  var _runcode__doc__;
  var __str13;
  var __str14;
  var _start__doc__;
  var _stop__doc__;
  var __str15;
  var __str16;
  var __str17;
  var __str18;
  var __str19;
  var __str20;
  var __str21;
  var _profiler_methods;
  var __str22;
  var __str23;
  var __str24;
  var _profiler_members;
  var __str25;
  var __str26;
  var _profiler_getsets;
  var _profiler_object__doc__;
  var __str27;
  var _ProfilerType;
  var _logreader_methods;
  var __str28;
  var __str29;
  var _logreader_members;
  var _logreader__doc__;
  var _logreader_as_sequence;
  var __str30;
  var _logreader_getsets;
  var __str31;
  var _LogReaderType;
  var __str32;
  var __str33;
  var __str34;
  var _rcsid_9592;
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
  var _profiler__doc__;
  var __str53;
  var __str54;
  var _coverage__doc__;
  var __str55;
  var _resolution__doc__;
  var __str56;
  var __str57;
  var __str58;
  var __str59;
  var __str60;
  var _functions;
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
  function _logreader_close($self, $args) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 12];
      var $8 = _fclose($7);
      
      var $10 = HEAP[$self_addr] + 12;
      HEAP[$10] = 0;
      __label__ = 2;
      break;
     case 2:
      
      var $12 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $12;
      HEAP[$0] = __Py_NoneStruct;
      var $13 = HEAP[$0];
      HEAP[$retval] = $13;
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
  function _logreader_fileno($self) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      var $8 = HEAP[HEAP[$self_addr] + 12];
      var $9 = _fileno($8);
      var $10 = _PyInt_FromLong($9);
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
  function _unpack_packed_int($self, $pvalue, $discard) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $pvalue_addr = __stackBase__ + 4;
      var $discard_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $c = __stackBase__ + 20;
      var $accum = __stackBase__ + 24;
      var $bits = __stackBase__ + 28;
      var $cont = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$pvalue_addr] = $pvalue;
      HEAP[$discard_addr] = $discard;
      HEAP[$accum] = 0;
      HEAP[$bits] = 0;
      __label__ = 1;
      break;
     case 1:
      
      
      var $3 = HEAP[HEAP[$self_addr] + 12];
      var $4 = _fgetc($3);
      HEAP[$c] = $4;
      
      var $6 = HEAP[$c] == -1;
      if ($6) {
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
      
      
      
      
      
      
      
      var $14 = (HEAP[$c] & 127) >> HEAP[$discard_addr] << HEAP[$bits] | HEAP[$accum];
      HEAP[$accum] = $14;
      
      
      
      var $18 = 7 - HEAP[$discard_addr] + HEAP[$bits];
      HEAP[$bits] = $18;
      
      var $20 = HEAP[$c] & 128;
      HEAP[$cont] = $20;
      HEAP[$discard_addr] = 0;
      
      
      if (HEAP[$cont] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $23 = HEAP[$pvalue_addr];
      var $24 = HEAP[$accum];
      HEAP[$23] = $24;
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $25 = HEAP[$0];
      HEAP[$retval] = $25;
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
  function _unpack_string($self, $pvalue) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $pvalue_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $len = __stackBase__ + 20;
      var $err = __stackBase__ + 24;
      var $ch = __stackBase__ + 28;
      var $buf = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$pvalue_addr] = $pvalue;
      var $1 = HEAP[$self_addr];
      var $2 = _unpack_packed_int($1, $len, 0);
      HEAP[$err] = $2;
      
      
      if (HEAP[$err] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[$err];
      HEAP[$0] = $5;
      __label__ = 12;
      break;
     case 2:
      var $6 = HEAP[$len];
      var $7 = _malloc($6);
      HEAP[$buf] = $7;
      
      
      if (HEAP[$buf] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _PyErr_NoMemory();
      HEAP[$0] = -2;
      __label__ = 12;
      break;
     case 4:
      HEAP[$i] = 0;
      __label__ = 8;
      break;
     case 5:
      
      
      var $13 = HEAP[HEAP[$self_addr] + 12];
      var $14 = _fgetc($13);
      HEAP[$ch] = $14;
      
      var $16 = HEAP[$ch] & 255;
      
      
      var $19 = HEAP[$buf] + HEAP[$i];
      HEAP[$19] = $16;
      
      var $21 = HEAP[$ch] == -1;
      if ($21) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $22 = HEAP[$buf];
      _free($22);
      HEAP[$0] = -1;
      __label__ = 12;
      break;
     case 7:
      
      var $24 = HEAP[$i] + 1;
      HEAP[$i] = $24;
      __label__ = 8;
      break;
     case 8:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $28 = HEAP[$len];
      var $29 = HEAP[$buf];
      var $30 = _PyString_FromStringAndSize($29, $28);
      var $31 = HEAP[$pvalue_addr];
      HEAP[$31] = $30;
      var $32 = HEAP[$buf];
      _free($32);
      
      
      
      if (HEAP[HEAP[$pvalue_addr]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = -2;
      __label__ = 12;
      break;
     case 11:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 12:
      var $36 = HEAP[$0];
      HEAP[$retval] = $36;
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
  function _unpack_add_info($self) {
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
      var $key = __stackBase__ + 12;
      var $value = __stackBase__ + 16;
      var $err = __stackBase__ + 20;
      var $list = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$value] = 0;
      var $1 = HEAP[$self_addr];
      var $2 = _unpack_string($1, $key);
      HEAP[$err] = $2;
      
      
      if (HEAP[$err] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 1:
      var $5 = HEAP[$self_addr];
      var $6 = _unpack_string($5, $value);
      HEAP[$err] = $6;
      
      
      if (HEAP[$err] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      var $9 = HEAP[$key];
      
      
      var $12 = HEAP[$9] - 1;
      var $13 = $9;
      HEAP[$13] = $12;
      
      
      
      if (HEAP[$9] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $21 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $22 = HEAP[$key];
      FUNCTION_TABLE[$21]($22);
      __label__ = 4;
      break;
     case 4:
      __label__ = 16;
      break;
     case 5:
      var $23 = HEAP[$key];
      
      
      var $26 = HEAP[HEAP[$self_addr] + 8];
      var $27 = _PyDict_GetItem($26, $23);
      HEAP[$list] = $27;
      
      
      if (HEAP[$list] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 6:
      var $30 = _PyList_New(0);
      HEAP[$list] = $30;
      
      
      if (HEAP[$list] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$err] = -2;
      __label__ = 16;
      break;
     case 8:
      var $33 = HEAP[$key];
      
      
      var $36 = HEAP[HEAP[$self_addr] + 8];
      var $37 = HEAP[$list];
      var $38 = _PyDict_SetItem($36, $33, $37);
      
      if ($38 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      var $43 = HEAP[HEAP[$list]] - 1;
      
      var $45 = HEAP[$list];
      HEAP[$45] = $43;
      
      
      
      
      if (HEAP[HEAP[$list]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$list] + 4] + 24];
      var $55 = HEAP[$list];
      FUNCTION_TABLE[$54]($55);
      __label__ = 11;
      break;
     case 11:
      HEAP[$err] = -2;
      __label__ = 16;
      break;
     case 12:
      
      
      
      var $59 = HEAP[HEAP[$list]] - 1;
      
      var $61 = HEAP[$list];
      HEAP[$61] = $59;
      
      
      
      
      if (HEAP[HEAP[$list]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $70 = HEAP[HEAP[HEAP[$list] + 4] + 24];
      var $71 = HEAP[$list];
      FUNCTION_TABLE[$70]($71);
      __label__ = 14;
      break;
     case 14:
      var $72 = HEAP[$value];
      var $73 = HEAP[$list];
      var $74 = _PyList_Append($73, $72);
      
      if ($74 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$err] = -2;
      __label__ = 16;
      break;
     case 16:
      
      
      if (HEAP[$key] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      var $78 = HEAP[$key];
      
      
      var $81 = HEAP[$78] - 1;
      var $82 = $78;
      HEAP[$82] = $81;
      
      
      
      if (HEAP[$78] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $90 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $91 = HEAP[$key];
      FUNCTION_TABLE[$90]($91);
      __label__ = 19;
      break;
     case 19:
      
      
      if (HEAP[$value] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      var $94 = HEAP[$value];
      
      
      var $97 = HEAP[$94] - 1;
      var $98 = $94;
      HEAP[$98] = $97;
      
      
      
      if (HEAP[$94] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $106 = HEAP[HEAP[HEAP[$value] + 4] + 24];
      var $107 = HEAP[$value];
      FUNCTION_TABLE[$106]($107);
      __label__ = 22;
      break;
     case 22:
      var $108 = HEAP[$err];
      HEAP[$0] = $108;
      var $109 = HEAP[$0];
      HEAP[$retval] = $109;
      __label__ = 23;
      break;
     case 23:
      var $retval21 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval21;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _eof_error($self) {
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
      
      
      var $2 = HEAP[HEAP[$self_addr] + 12];
      var $3 = _fclose($2);
      
      var $5 = HEAP[$self_addr] + 12;
      HEAP[$5] = 0;
      var $6 = HEAP[_PyExc_EOFError];
      _PyErr_SetString($6, __str1);
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _logreader_tp_iternext($self) {
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
      var $c = __stackBase__ + 12;
      var $what = __stackBase__ + 16;
      var $err = __stackBase__ + 20;
      var $lineno = __stackBase__ + 24;
      var $fileno = __stackBase__ + 28;
      var $tdelta = __stackBase__ + 32;
      var $s1 = __stackBase__ + 36;
      var $s2 = __stackBase__ + 40;
      var $result = __stackBase__ + 44;
      
      HEAP[$self_addr] = $self;
      HEAP[$err] = 0;
      HEAP[$lineno] = -1;
      HEAP[$fileno] = -1;
      HEAP[$tdelta] = -1;
      HEAP[$s1] = 0;
      HEAP[$s2] = 0;
      HEAP[$result] = 0;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_ProfilerError];
      _PyErr_SetString($5, __str2);
      HEAP[$0] = 0;
      __label__ = 48;
      break;
     case 2:
      
      
      var $8 = HEAP[HEAP[$self_addr] + 12];
      var $9 = _fgetc($8);
      HEAP[$c] = $9;
      
      var $11 = HEAP[$c] == -1;
      if ($11) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $14 = HEAP[HEAP[$self_addr] + 12];
      var $15 = _fclose($14);
      
      var $17 = HEAP[$self_addr] + 12;
      HEAP[$17] = 0;
      HEAP[$0] = 0;
      __label__ = 48;
      break;
     case 4:
      
      var $19 = HEAP[$c] & 3;
      HEAP[$what] = $19;
      
      
      if (HEAP[$what] == 3) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $22 = HEAP[$c];
      HEAP[$what] = $22;
      __label__ = 7;
      break;
     case 6:
      
      
      var $25 = HEAP[HEAP[$self_addr] + 12];
      var $26 = HEAP[$c];
      var $27 = _ungetc($26, $25);
      __label__ = 7;
      break;
     case 7:
      var $28 = HEAP[$what];
      if ($28 == 0) {
        __label__ = 8;
        break;
      } else if ($28 == 1) {
        __label__ = 13;
        break;
      } else if ($28 == 2) {
        __label__ = 14;
        break;
      } else if ($28 == 19) {
        __label__ = 18;
        break;
      } else if ($28 == 35) {
        __label__ = 19;
        break;
      } else if ($28 == 51) {
        __label__ = 27;
        break;
      } else if ($28 == 67) {
        __label__ = 23;
        break;
      } else if ($28 == 83) {
        __label__ = 30;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 8:
      var $29 = HEAP[$self_addr];
      var $30 = _unpack_packed_int($29, $fileno, 2);
      HEAP[$err] = $30;
      
      
      if (HEAP[$err] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      var $33 = HEAP[$self_addr];
      var $34 = _unpack_packed_int($33, $lineno, 0);
      HEAP[$err] = $34;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 20] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      if (HEAP[$err] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $41 = HEAP[$self_addr];
      var $42 = _unpack_packed_int($41, $tdelta, 0);
      HEAP[$err] = $42;
      __label__ = 12;
      break;
     case 12:
      __label__ = 34;
      break;
     case 13:
      var $43 = HEAP[$self_addr];
      var $44 = _unpack_packed_int($43, $tdelta, 2);
      HEAP[$err] = $44;
      __label__ = 34;
      break;
     case 14:
      var $45 = HEAP[$self_addr];
      var $46 = _unpack_packed_int($45, $lineno, 2);
      HEAP[$err] = $46;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      if (HEAP[$err] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $53 = HEAP[$self_addr];
      var $54 = _unpack_packed_int($53, $tdelta, 0);
      HEAP[$err] = $54;
      __label__ = 17;
      break;
     case 17:
      __label__ = 34;
      break;
     case 18:
      var $55 = HEAP[$self_addr];
      var $56 = _unpack_add_info($55);
      HEAP[$err] = $56;
      __label__ = 34;
      break;
     case 19:
      var $57 = HEAP[$self_addr];
      var $58 = _unpack_packed_int($57, $fileno, 0);
      HEAP[$err] = $58;
      
      
      if (HEAP[$err] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      var $61 = HEAP[$self_addr];
      var $62 = _unpack_string($61, $s1);
      HEAP[$err] = $62;
      
      
      if (HEAP[$err] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      var $66 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $66;
      HEAP[$s2] = __Py_NoneStruct;
      __label__ = 22;
      break;
     case 22:
      __label__ = 34;
      break;
     case 23:
      var $67 = HEAP[$self_addr];
      var $68 = _unpack_packed_int($67, $fileno, 0);
      HEAP[$err] = $68;
      
      
      if (HEAP[$err] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 24:
      var $71 = HEAP[$self_addr];
      var $72 = _unpack_packed_int($71, $lineno, 0);
      HEAP[$err] = $72;
      
      
      if (HEAP[$err] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $75 = HEAP[$self_addr];
      var $76 = _unpack_string($75, $s1);
      HEAP[$err] = $76;
      __label__ = 26;
      break;
     case 26:
      __label__ = 34;
      break;
     case 27:
      
      
      var $79 = HEAP[HEAP[$self_addr] + 12];
      var $80 = _fgetc($79);
      HEAP[$c] = $80;
      
      var $82 = HEAP[$c] == -1;
      if ($82) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      HEAP[$err] = -1;
      __label__ = 34;
      break;
     case 29:
      
      
      var $85 = HEAP[$c] != 0;
      
      var $87 = HEAP[$self_addr] + 16;
      HEAP[$87] = $85;
      __label__ = 2;
      break;
     case 30:
      
      
      var $90 = HEAP[HEAP[$self_addr] + 12];
      var $91 = _fgetc($90);
      HEAP[$c] = $91;
      
      var $93 = HEAP[$c] == -1;
      if ($93) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      HEAP[$err] = -1;
      __label__ = 34;
      break;
     case 32:
      
      
      var $96 = HEAP[$c] != 0;
      
      var $98 = HEAP[$self_addr] + 20;
      HEAP[$98] = $96;
      __label__ = 2;
      break;
     case 33:
      HEAP[$err] = -3;
      __label__ = 34;
      break;
     case 34:
      
      var $100 = HEAP[$err] == -3;
      if ($100) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      var $101 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($101, __str3);
      __label__ = 47;
      break;
     case 36:
      
      var $103 = HEAP[$err] == -1;
      if ($103) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      var $104 = HEAP[$self_addr];
      _eof_error($104);
      __label__ = 47;
      break;
     case 38:
      
      
      if (HEAP[$err] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 39:
      var $107 = _PyTuple_New(4);
      HEAP[$result] = $107;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      HEAP[$0] = 0;
      __label__ = 48;
      break;
     case 41:
      
      var $111 = HEAP[$result];
      var $112 = HEAP[$what];
      var $113 = _PyInt_FromLong($112);
      
      var $115 = $111 + 12;
      HEAP[$115] = $113;
      
      var $117 = HEAP[$result];
      var $118 = HEAP[$fileno];
      var $119 = _PyInt_FromLong($118);
      
      var $121 = $117 + 12 + 8;
      HEAP[$121] = $119;
      
      
      if (HEAP[$s1] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      var $125 = HEAP[$result];
      var $126 = HEAP[$tdelta];
      var $127 = _PyInt_FromLong($126);
      
      var $129 = $125 + 12 + 4;
      HEAP[$129] = $127;
      __label__ = 44;
      break;
     case 43:
      
      
      var $132 = HEAP[$s1];
      
      var $134 = HEAP[$result] + 12 + 4;
      HEAP[$134] = $132;
      __label__ = 44;
      break;
     case 44:
      
      
      if (HEAP[$s2] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      var $138 = HEAP[$result];
      var $139 = HEAP[$lineno];
      var $140 = _PyInt_FromLong($139);
      
      var $142 = $138 + 12 + 12;
      HEAP[$142] = $140;
      __label__ = 47;
      break;
     case 46:
      
      
      
      var $146 = HEAP[$result] + 12 + 12;
      var $147 = HEAP[$s2];
      HEAP[$146] = $147;
      __label__ = 47;
      break;
     case 47:
      var $148 = HEAP[$result];
      HEAP[$0] = $148;
      __label__ = 48;
      break;
     case 48:
      var $149 = HEAP[$0];
      HEAP[$retval] = $149;
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
  function _logreader_dealloc($self) {
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
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[HEAP[$self_addr] + 12];
      var $7 = _fclose($6);
      
      var $9 = HEAP[$self_addr] + 12;
      HEAP[$9] = 0;
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[HEAP[$self_addr] + 8];
      
      
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
      
      
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 8] + 4] + 24];
      
      
      var $33 = HEAP[HEAP[$self_addr] + 8];
      FUNCTION_TABLE[$30]($33);
      __label__ = 5;
      break;
     case 5:
      
      var $35 = HEAP[$self_addr];
      _PyObject_Free($35);
      __label__ = 6;
      break;
     case 6:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _logreader_sq_item($self, $index) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $index_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$index_addr] = $index;
      var $1 = HEAP[$self_addr];
      var $2 = _logreader_tp_iternext($1);
      HEAP[$result] = $2;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $7 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($7, __str4);
      HEAP[$0] = 0;
      __label__ = 4;
      break;
     case 3:
      var $8 = HEAP[$result];
      HEAP[$0] = $8;
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
  function _flush_data($self) {
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
      var $written = __stackBase__ + 12;
      var $s = __stackBase__ + 16;
      var $s6 = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      
      
      var $3 = HEAP[HEAP[$self_addr] + 10260];
      
      
      var $6 = HEAP[HEAP[$self_addr] + 16];
      
      
      var $9 = HEAP[$self_addr] + 20;
      var $10 = _fwrite($9, 1, $6, $3);
      HEAP[$written] = $10;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] == HEAP[$written]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $17 = HEAP[$self_addr] + 16;
      HEAP[$17] = 0;
      __label__ = 4;
      break;
     case 2:
      
      
      
      
      var $22 = HEAP[HEAP[$self_addr] + 16] - HEAP[$written];
      
      
      
      var $26 = HEAP[$self_addr] + 20 + HEAP[$written];
      
      
      var $29 = HEAP[$self_addr] + 20;
      _llvm_memmove_p0i8_p0i8_i32($29, $26, $22, 1, 0);
      
      
      
      
      var $34 = HEAP[HEAP[$self_addr] + 16] - HEAP[$written];
      
      var $36 = HEAP[$self_addr] + 16;
      HEAP[$36] = $34;
      
      
      if (HEAP[$written] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $41 = HEAP[HEAP[$self_addr] + 12];
      var $42 = _PyString_AsString($41);
      HEAP[$s] = $42;
      var $43 = HEAP[_PyExc_IOError];
      var $44 = HEAP[$s];
      var $45 = _PyErr_SetFromErrnoWithFilename($43, $44);
      var $46 = HEAP[$self_addr];
      _do_stop($46);
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 4:
      
      
      if (HEAP[$written] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      var $51 = HEAP[HEAP[$self_addr] + 10260];
      var $52 = _fflush($51);
      
      if ($52 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      var $56 = HEAP[HEAP[$self_addr] + 12];
      var $57 = _PyString_AsString($56);
      HEAP[$s6] = $57;
      var $58 = HEAP[_PyExc_IOError];
      var $59 = HEAP[$s6];
      var $60 = _PyErr_SetFromErrnoWithFilename($58, $59);
      var $61 = HEAP[$self_addr];
      _do_stop($61);
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 7:
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 8:
      var $62 = HEAP[$0];
      HEAP[$retval] = $62;
      __label__ = 9;
      break;
     case 9:
      var $retval9 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _pack_string($self, $s, $len) {
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
      var $len_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$s_addr] = $s;
      HEAP[$len_addr] = $len;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] + HEAP[$len_addr] + 5 > 10239) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $8 = HEAP[$self_addr];
      var $9 = _flush_data($8);
      
      if ($9 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 3:
      
      
      if (HEAP[$len_addr] == 2147483647) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str5, __str6, 630, ___PRETTY_FUNCTION___8854);
      throw "Reached an unreachable!";
     case 5:
      var $13 = HEAP[$self_addr];
      var $14 = HEAP[$len_addr];
      var $15 = _pack_packed_int($13, $14);
      
      if ($15 < 0) {
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
      var $17 = HEAP[$len_addr];
      
      
      
      
      
      
      var $24 = HEAP[$self_addr] + 20 + HEAP[HEAP[$self_addr] + 16];
      var $25 = HEAP[$s_addr];
      _llvm_memcpy_p0i8_p0i8_i32($24, $25, $17, 1, 0);
      
      
      
      
      var $30 = HEAP[HEAP[$self_addr] + 16] + HEAP[$len_addr];
      
      var $32 = HEAP[$self_addr] + 16;
      HEAP[$32] = $30;
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 8:
      var $33 = HEAP[$0];
      HEAP[$retval] = $33;
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
  function _pack_packed_int($self, $value) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 17;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 17);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $value_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $partial = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$value_addr] = $value;
      __label__ = 1;
      break;
     case 1:
      
      
      var $3 = HEAP[$value_addr] & 255 & 127;
      HEAP[$partial] = $3;
      
      var $5 = HEAP[$value_addr] >> 7;
      HEAP[$value_addr] = $5;
      
      
      if (HEAP[$value_addr] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $9 = HEAP[$partial] | -128;
      HEAP[$partial] = $9;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      var $15 = HEAP[$self_addr] + 20 + HEAP[HEAP[$self_addr] + 16];
      var $16 = HEAP[$partial];
      HEAP[$15] = $16;
      
      
      
      var $20 = HEAP[HEAP[$self_addr] + 16] + 1;
      
      var $22 = HEAP[$self_addr] + 16;
      HEAP[$22] = $20;
      
      
      if (HEAP[$value_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      HEAP[$0] = 0;
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
  function _pack_add_info($self, $s1, $s2) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $s1_addr = __stackBase__ + 4;
      var $s2_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $len1 = __stackBase__ + 20;
      var $len2 = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$s1_addr] = $s1;
      HEAP[$s2_addr] = $s2;
      var $1 = HEAP[$s1_addr];
      var $2 = _strlen($1);
      HEAP[$len1] = $2;
      var $3 = HEAP[$s2_addr];
      var $4 = _strlen($3);
      HEAP[$len2] = $4;
      
      
      
      
      
      
      
      
      
      if (HEAP[$len1] + HEAP[$len2] + HEAP[HEAP[$self_addr] + 16] + 11 > 10239) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $14 = HEAP[$self_addr];
      var $15 = _flush_data($14);
      
      if ($15 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 3:
      
      
      
      
      
      var $22 = HEAP[$self_addr] + 20 + HEAP[HEAP[$self_addr] + 16];
      HEAP[$22] = 19;
      
      
      
      var $26 = HEAP[HEAP[$self_addr] + 16] + 1;
      
      var $28 = HEAP[$self_addr] + 16;
      HEAP[$28] = $26;
      var $29 = HEAP[$self_addr];
      var $30 = HEAP[$s1_addr];
      var $31 = HEAP[$len1];
      var $32 = _pack_string($29, $30, $31);
      
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
      var $34 = HEAP[$self_addr];
      var $35 = HEAP[$s2_addr];
      var $36 = HEAP[$len2];
      var $37 = _pack_string($34, $35, $36);
      HEAP[$0] = $37;
      __label__ = 6;
      break;
     case 6:
      var $38 = HEAP[$0];
      HEAP[$retval] = $38;
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
  function _pack_define_file($self, $fileno, $filename) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $fileno_addr = __stackBase__ + 4;
      var $filename_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $len = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$fileno_addr] = $fileno;
      HEAP[$filename_addr] = $filename;
      var $1 = HEAP[$filename_addr];
      var $2 = _strlen($1);
      HEAP[$len] = $2;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] + HEAP[$len] + 11 > 10239) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $10 = HEAP[$self_addr];
      var $11 = _flush_data($10);
      
      if ($11 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 3:
      
      
      
      
      
      var $18 = HEAP[$self_addr] + 20 + HEAP[HEAP[$self_addr] + 16];
      HEAP[$18] = 35;
      
      
      
      var $22 = HEAP[HEAP[$self_addr] + 16] + 1;
      
      var $24 = HEAP[$self_addr] + 16;
      HEAP[$24] = $22;
      var $25 = HEAP[$self_addr];
      var $26 = HEAP[$fileno_addr];
      var $27 = _pack_packed_int($25, $26);
      
      if ($27 < 0) {
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
      var $29 = HEAP[$self_addr];
      var $30 = HEAP[$filename_addr];
      var $31 = HEAP[$len];
      var $32 = _pack_string($29, $30, $31);
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
  function _pack_define_func($self, $fileno, $lineno, $funcname) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $fileno_addr = __stackBase__ + 4;
      var $lineno_addr = __stackBase__ + 8;
      var $funcname_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$fileno_addr] = $fileno;
      HEAP[$lineno_addr] = $lineno;
      HEAP[$funcname_addr] = $funcname;
      var $1 = HEAP[$funcname_addr];
      var $2 = _strlen($1);
      HEAP[$len] = $2;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] + HEAP[$len] + 16 > 10239) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $10 = HEAP[$self_addr];
      var $11 = _flush_data($10);
      
      if ($11 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = -1;
      __label__ = 8;
      break;
     case 3:
      
      
      
      
      
      var $18 = HEAP[$self_addr] + 20 + HEAP[HEAP[$self_addr] + 16];
      HEAP[$18] = 67;
      
      
      
      var $22 = HEAP[HEAP[$self_addr] + 16] + 1;
      
      var $24 = HEAP[$self_addr] + 16;
      HEAP[$24] = $22;
      var $25 = HEAP[$self_addr];
      var $26 = HEAP[$fileno_addr];
      var $27 = _pack_packed_int($25, $26);
      
      if ($27 < 0) {
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
      var $29 = HEAP[$self_addr];
      var $30 = HEAP[$lineno_addr];
      var $31 = _pack_packed_int($29, $30);
      
      if ($31 < 0) {
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
      var $33 = HEAP[$self_addr];
      var $34 = HEAP[$funcname_addr];
      var $35 = HEAP[$len];
      var $36 = _pack_string($33, $34, $35);
      HEAP[$0] = $36;
      __label__ = 8;
      break;
     case 8:
      var $37 = HEAP[$0];
      HEAP[$retval] = $37;
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
  function _pack_line_times($self) {
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
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] + 2 > 10239) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $6 = HEAP[$self_addr];
      var $7 = _flush_data($6);
      
      if ($7 < 0) {
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
      
      
      
      
      
      var $14 = HEAP[$self_addr] + 20 + HEAP[HEAP[$self_addr] + 16];
      HEAP[$14] = 51;
      
      
      
      
      
      
      
      
      var $23 = HEAP[HEAP[$self_addr] + 10268] != 0;
      
      
      var $26 = HEAP[$self_addr] + 20 + (HEAP[HEAP[$self_addr] + 16] + 1);
      HEAP[$26] = $23;
      
      
      
      var $30 = HEAP[HEAP[$self_addr] + 16] + 2;
      
      var $32 = HEAP[$self_addr] + 16;
      HEAP[$32] = $30;
      HEAP[$0] = 0;
      __label__ = 4;
      break;
     case 4:
      var $33 = HEAP[$0];
      HEAP[$retval] = $33;
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
  function _pack_frame_times($self) {
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
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] + 2 > 10239) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $6 = HEAP[$self_addr];
      var $7 = _flush_data($6);
      
      if ($7 < 0) {
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
      
      
      
      
      
      var $14 = HEAP[$self_addr] + 20 + HEAP[HEAP[$self_addr] + 16];
      HEAP[$14] = 83;
      
      
      
      
      
      
      
      
      var $23 = HEAP[HEAP[$self_addr] + 10272] != 0;
      
      
      var $26 = HEAP[$self_addr] + 20 + (HEAP[HEAP[$self_addr] + 16] + 1);
      HEAP[$26] = $23;
      
      
      
      var $30 = HEAP[HEAP[$self_addr] + 16] + 2;
      
      var $32 = HEAP[$self_addr] + 16;
      HEAP[$32] = $30;
      HEAP[$0] = 0;
      __label__ = 4;
      break;
     case 4:
      var $33 = HEAP[$0];
      HEAP[$retval] = $33;
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
  function _tracer_callback($self, $frame, $what, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $frame_addr = __stackBase__ + 4;
      var $what_addr = __stackBase__ + 8;
      var $arg_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $iftmp_44 = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $fileno = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$frame_addr] = $frame;
      HEAP[$what_addr] = $what;
      HEAP[$arg_addr] = $arg;
      var $1 = HEAP[$what_addr];
      if ($1 == 0) {
        __label__ = 1;
        break;
      } else if ($1 == 2) {
        __label__ = 8;
        break;
      } else if ($1 == 3) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 1:
      
      
      var $4 = HEAP[HEAP[$frame_addr] + 16];
      var $5 = HEAP[$self_addr];
      var $6 = _get_fileno($5, $4);
      HEAP[$fileno] = $6;
      
      
      if (HEAP[$fileno] < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = -1;
      __label__ = 12;
      break;
     case 3:
      
      
      
      
      var $13 = HEAP[HEAP[HEAP[$frame_addr] + 16] + 56];
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 10272] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $18 = HEAP[$self_addr];
      var $19 = _get_tdelta($18);
      HEAP[$iftmp_44] = $19;
      __label__ = 6;
      break;
     case 5:
      HEAP[$iftmp_44] = -1;
      __label__ = 6;
      break;
     case 6:
      var $20 = HEAP[$self_addr];
      var $21 = HEAP[$fileno];
      var $22 = HEAP[$iftmp_44];
      var $23 = _pack_enter($20, $21, $22, $13);
      HEAP[$0] = $23;
      __label__ = 12;
      break;
     case 7:
      var $24 = HEAP[$self_addr];
      var $25 = _get_tdelta($24);
      var $26 = HEAP[$self_addr];
      var $27 = _pack_exit($26, $25);
      HEAP[$0] = $27;
      __label__ = 12;
      break;
     case 8:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 10268] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $32 = HEAP[$self_addr];
      var $33 = _get_tdelta($32);
      
      
      var $36 = HEAP[HEAP[$frame_addr] + 64];
      var $37 = HEAP[$self_addr];
      var $38 = _pack_lineno_tdelta($37, $36, $33);
      HEAP[$0] = $38;
      __label__ = 12;
      break;
     case 10:
      
      
      var $41 = HEAP[HEAP[$frame_addr] + 64];
      var $42 = HEAP[$self_addr];
      var $43 = _pack_lineno($42, $41);
      HEAP[$0] = $43;
      __label__ = 12;
      break;
     case 11:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 12:
      var $44 = HEAP[$0];
      HEAP[$retval] = $44;
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
  function _get_fileno($self, $fcode) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $fcode_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $obj = __stackBase__ + 16;
      var $dict = __stackBase__ + 20;
      var $fileno = __stackBase__ + 24;
      var $name = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$fcode_addr] = $fcode;
      
      
      var $3 = HEAP[HEAP[$fcode_addr] + 48];
      
      
      var $6 = HEAP[HEAP[$self_addr] + 8];
      var $7 = _PyDict_GetItem($6, $3);
      HEAP[$obj] = $7;
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 1:
      var $10 = _PyDict_New();
      HEAP[$dict] = $10;
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = -1;
      __label__ = 29;
      break;
     case 3:
      
      
      var $15 = HEAP[HEAP[$self_addr] + 10280];
      HEAP[$fileno] = $15;
      var $16 = HEAP[$fileno];
      var $17 = HEAP[$dict];
      var $18 = _Py_BuildValue(__str7, allocate([ $16, 0, 0, 0, $17, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$obj] = $18;
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 29;
      break;
     case 5:
      
      
      var $23 = HEAP[HEAP[$fcode_addr] + 48];
      
      
      var $26 = HEAP[HEAP[$self_addr] + 8];
      var $27 = HEAP[$obj];
      var $28 = _PyDict_SetItem($26, $23, $27);
      
      if ($28 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $33 = HEAP[HEAP[$obj]] - 1;
      
      var $35 = HEAP[$obj];
      HEAP[$35] = $33;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $45 = HEAP[$obj];
      FUNCTION_TABLE[$44]($45);
      __label__ = 8;
      break;
     case 8:
      HEAP[$0] = -1;
      __label__ = 29;
      break;
     case 9:
      
      
      
      var $49 = HEAP[HEAP[$self_addr] + 10280] + 1;
      
      var $51 = HEAP[$self_addr] + 10280;
      HEAP[$51] = $49;
      
      
      
      var $55 = HEAP[HEAP[$obj]] - 1;
      
      var $57 = HEAP[$obj];
      HEAP[$57] = $55;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $66 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $67 = HEAP[$obj];
      FUNCTION_TABLE[$66]($67);
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      
      var $73 = HEAP[HEAP[$fcode_addr] + 48] + 20;
      var $74 = HEAP[$self_addr];
      var $75 = HEAP[$fileno];
      var $76 = _pack_define_file($74, $75, $73);
      
      if ($76 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$0] = -1;
      __label__ = 29;
      break;
     case 13:
      __label__ = 15;
      break;
     case 14:
      
      
      
      
      
      
      
      var $85 = HEAP[HEAP[HEAP[$obj] + 12] + 8];
      HEAP[$fileno] = $85;
      
      
      
      
      var $90 = HEAP[HEAP[$obj] + 12 + 4];
      HEAP[$dict] = $90;
      __label__ = 15;
      break;
     case 15:
      
      
      var $93 = HEAP[HEAP[$fcode_addr] + 56];
      var $94 = _PyInt_FromLong($93);
      HEAP[$obj] = $94;
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      _PyErr_Clear();
      __label__ = 28;
      break;
     case 17:
      var $97 = HEAP[$dict];
      var $98 = HEAP[$obj];
      var $99 = _PyDict_GetItem($97, $98);
      HEAP[$name] = $99;
      
      
      if (HEAP[$name] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 18:
      
      
      
      
      
      var $107 = HEAP[HEAP[$fcode_addr] + 52] + 20;
      
      
      var $110 = HEAP[HEAP[$fcode_addr] + 56];
      var $111 = HEAP[$self_addr];
      var $112 = HEAP[$fileno];
      var $113 = _pack_define_func($111, $112, $110, $107);
      
      if ($113 < 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 19:
      
      
      
      var $118 = HEAP[HEAP[$obj]] - 1;
      
      var $120 = HEAP[$obj];
      HEAP[$120] = $118;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $129 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $130 = HEAP[$obj];
      FUNCTION_TABLE[$129]($130);
      __label__ = 21;
      break;
     case 21:
      HEAP[$0] = -1;
      __label__ = 29;
      break;
     case 22:
      
      
      var $133 = HEAP[HEAP[$fcode_addr] + 52];
      var $134 = HEAP[$dict];
      var $135 = HEAP[$obj];
      var $136 = _PyDict_SetItem($134, $135, $133);
      
      if ($136 != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 23:
      
      
      
      var $141 = HEAP[HEAP[$obj]] - 1;
      
      var $143 = HEAP[$obj];
      HEAP[$143] = $141;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $152 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $153 = HEAP[$obj];
      FUNCTION_TABLE[$152]($153);
      __label__ = 25;
      break;
     case 25:
      HEAP[$0] = -1;
      __label__ = 29;
      break;
     case 26:
      
      
      
      var $157 = HEAP[HEAP[$obj]] - 1;
      
      var $159 = HEAP[$obj];
      HEAP[$159] = $157;
      
      
      
      
      if (HEAP[HEAP[$obj]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $168 = HEAP[HEAP[HEAP[$obj] + 4] + 24];
      var $169 = HEAP[$obj];
      FUNCTION_TABLE[$168]($169);
      __label__ = 28;
      break;
     case 28:
      var $170 = HEAP[$fileno];
      HEAP[$0] = $170;
      __label__ = 29;
      break;
     case 29:
      var $171 = HEAP[$0];
      HEAP[$retval] = $171;
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
  function _get_tdelta($self) {
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
      var $tdelta = __stackBase__ + 12;
      var $tv = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      var $1 = _gettimeofday($tv, 0);
      
      
      
      
      
      
      var $8 = HEAP[$tv + 4] - HEAP[HEAP[$self_addr] + 10284 + 4];
      HEAP[$tdelta] = $8;
      
      
      
      
      
      
      
      if (HEAP[$tv] != HEAP[HEAP[$self_addr] + 10284]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      var $25 = (HEAP[$tv] - HEAP[HEAP[$self_addr] + 10284]) * 1e6 + HEAP[$tdelta];
      HEAP[$tdelta] = $25;
      __label__ = 2;
      break;
     case 2:
      
      
      if (HEAP[$tdelta] < 0) {
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
      
      var $29 = HEAP[$self_addr] + 10284;
      var $30 = $29;
      
      var $32 = HEAP[$tv];
      HEAP[$30] = $32;
      var $33 = $29 + 4;
      
      var $35 = HEAP[$tv + 4];
      HEAP[$33] = $35;
      var $36 = HEAP[$tdelta];
      HEAP[$0] = $36;
      __label__ = 5;
      break;
     case 5:
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
  function _pack_enter($self, $fileno, $tdelta, $lineno) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $fileno_addr = __stackBase__ + 4;
      var $tdelta_addr = __stackBase__ + 8;
      var $lineno_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$fileno_addr] = $fileno;
      HEAP[$tdelta_addr] = $tdelta;
      HEAP[$lineno_addr] = $lineno;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] + 16 > 10239) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $6 = HEAP[$self_addr];
      var $7 = _flush_data($6);
      
      if ($7 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 3:
      var $9 = HEAP[$self_addr];
      var $10 = HEAP[$fileno_addr];
      var $11 = _pack_modified_packed_int($9, $10, 2, 0);
      var $12 = HEAP[$self_addr];
      var $13 = HEAP[$lineno_addr];
      var $14 = _pack_packed_int($12, $13);
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 10272] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $19 = HEAP[$self_addr];
      var $20 = HEAP[$tdelta_addr];
      var $21 = _pack_packed_int($19, $20);
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
  function _pack_exit($self, $tdelta) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $tdelta_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$tdelta_addr] = $tdelta;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] + 6 > 10239) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $6 = HEAP[$self_addr];
      var $7 = _flush_data($6);
      
      if ($7 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = -1;
      __label__ = 6;
      break;
     case 3:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 10272] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $13 = HEAP[$self_addr];
      var $14 = HEAP[$tdelta_addr];
      var $15 = _pack_modified_packed_int($13, $14, 2, 1);
      HEAP[$0] = $15;
      __label__ = 6;
      break;
     case 5:
      
      
      
      
      
      var $21 = HEAP[$self_addr] + 20 + HEAP[HEAP[$self_addr] + 16];
      HEAP[$21] = 1;
      
      
      
      var $25 = HEAP[HEAP[$self_addr] + 16] + 1;
      
      var $27 = HEAP[$self_addr] + 16;
      HEAP[$27] = $25;
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 6:
      var $28 = HEAP[$0];
      HEAP[$retval] = $28;
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
  function _pack_lineno_tdelta($self, $lineno, $tdelta) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $lineno_addr = __stackBase__ + 4;
      var $tdelta_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$lineno_addr] = $lineno;
      HEAP[$tdelta_addr] = $tdelta;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] + 11 > 10239) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $6 = HEAP[$self_addr];
      var $7 = _flush_data($6);
      
      if ($7 < 0) {
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
      var $9 = HEAP[$self_addr];
      var $10 = HEAP[$lineno_addr];
      var $11 = _pack_modified_packed_int($9, $10, 2, 2);
      
      if ($11 < 0) {
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
      var $13 = HEAP[$self_addr];
      var $14 = HEAP[$tdelta_addr];
      var $15 = _pack_packed_int($13, $14);
      HEAP[$0] = $15;
      __label__ = 6;
      break;
     case 6:
      var $16 = HEAP[$0];
      HEAP[$retval] = $16;
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
  function _pack_lineno($self, $lineno) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $lineno_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$self_addr] = $self;
      HEAP[$lineno_addr] = $lineno;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] + 6 > 10239) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $6 = HEAP[$self_addr];
      var $7 = _flush_data($6);
      
      if ($7 < 0) {
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
      var $9 = HEAP[$self_addr];
      var $10 = HEAP[$lineno_addr];
      var $11 = _pack_modified_packed_int($9, $10, 2, 2);
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
  function _pack_modified_packed_int($self, $value, $modsize, $subfield) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 33;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 33);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $value_addr = __stackBase__ + 4;
      var $modsize_addr = __stackBase__ + 8;
      var $subfield_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $bits = __stackBase__ + 24;
      var $partial = __stackBase__ + 28;
      var $b = __stackBase__ + 32;
      
      HEAP[$self_addr] = $self;
      HEAP[$value_addr] = $value;
      HEAP[$modsize_addr] = $modsize;
      HEAP[$subfield_addr] = $subfield;
      
      var $2 = 7 - HEAP[$modsize_addr];
      HEAP[$bits] = $2;
      
      
      
      
      var $7 = HEAP[_maxvalues_8827 + HEAP[$bits] * 4] & HEAP[$value_addr];
      HEAP[$partial] = $7;
      
      
      
      
      
      
      var $14 = HEAP[$partial] << HEAP[$modsize_addr] & 255 | HEAP[$subfield_addr] & 255;
      HEAP[$b] = $14;
      
      
      
      if (HEAP[$partial] != HEAP[$value_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $19 = HEAP[$b] | -128;
      HEAP[$b] = $19;
      
      
      
      
      
      var $25 = HEAP[$self_addr] + 20 + HEAP[HEAP[$self_addr] + 16];
      var $26 = HEAP[$b];
      HEAP[$25] = $26;
      
      
      
      var $30 = HEAP[HEAP[$self_addr] + 16] + 1;
      
      var $32 = HEAP[$self_addr] + 16;
      HEAP[$32] = $30;
      
      
      var $35 = HEAP[$value_addr] >> HEAP[$bits];
      var $36 = HEAP[$self_addr];
      var $37 = _pack_packed_int($36, $35);
      HEAP[$0] = $37;
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      
      var $43 = HEAP[$self_addr] + 20 + HEAP[HEAP[$self_addr] + 16];
      var $44 = HEAP[$b];
      HEAP[$43] = $44;
      
      
      
      var $48 = HEAP[HEAP[$self_addr] + 16] + 1;
      
      var $50 = HEAP[$self_addr] + 16;
      HEAP[$50] = $48;
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 3:
      var $51 = HEAP[$0];
      HEAP[$retval] = $51;
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
  function _calibrate() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 160;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 160);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tv1 = __stackBase__;
      var $tv2 = __stackBase__ + 8;
      var $ru1 = __stackBase__ + 16;
      var $ru2 = __stackBase__ + 88;
      
      var $0 = _gettimeofday($tv1, 0);
      __label__ = 1;
      break;
     case 1:
      var $1 = _gettimeofday($tv2, 0);
      
      
      
      
      
      if (HEAP[$tv1] != HEAP[$tv2]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      if (HEAP[$tv1 + 4] != HEAP[$tv2 + 4]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      
      
      
      if (HEAP[$tv1] == HEAP[$tv2]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $21 = HEAP[$tv2 + 4] - HEAP[$tv1 + 4];
      HEAP[_timeofday_diff] = $21;
      __label__ = 6;
      break;
     case 5:
      
      
      
      
      
      var $27 = 1e6 - HEAP[$tv1 + 4] + HEAP[$tv2 + 4];
      HEAP[_timeofday_diff] = $27;
      __label__ = 6;
      break;
     case 6:
      var $28 = _getrusage(0, $ru1);
      __label__ = 8;
      break;
     case 7:
      __label__ = 1;
      break;
     case 8:
      var $29 = _getrusage(0, $ru2);
      
      
      
      
      
      
      
      if (HEAP[$ru1] != HEAP[$ru2]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      var $44 = 1e6 - HEAP[$ru1 + 4] + HEAP[$ru2 + 4];
      HEAP[_rusage_diff] = $44;
      __label__ = 17;
      break;
     case 10:
      
      
      
      
      
      
      
      if (HEAP[$ru1 + 4] != HEAP[$ru2 + 4]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      var $58 = HEAP[$ru2 + 4] - HEAP[$ru1 + 4];
      HEAP[_rusage_diff] = $58;
      __label__ = 17;
      break;
     case 12:
      
      
      
      
      
      
      
      if (HEAP[$ru1 + 8] != HEAP[$ru2 + 8]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      
      
      var $73 = 1e6 - HEAP[$ru1 + 8 + 4] + HEAP[$ru2 + 8 + 4];
      HEAP[_rusage_diff] = $73;
      __label__ = 17;
      break;
     case 14:
      
      
      
      
      
      
      
      if (HEAP[$ru1 + 8 + 4] != HEAP[$ru2 + 8 + 4]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      
      var $87 = HEAP[$ru2 + 8 + 4] - HEAP[$ru1 + 8 + 4];
      HEAP[_rusage_diff] = $87;
      __label__ = 17;
      break;
     case 16:
      __label__ = 8;
      break;
     case 17:
      __label__ = 18;
      break;
     case 18:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _do_start($self) {
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
      
      var $1 = HEAP[$self_addr] + 10276;
      HEAP[$1] = 1;
      
      var $3 = HEAP[$self_addr] + 10284;
      var $4 = _gettimeofday($3, 0);
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 10264] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $10 = HEAP[$self_addr];
      _PyEval_SetTrace(FUNCTION_TABLE_OFFSET + 2, $10);
      __label__ = 3;
      break;
     case 2:
      
      var $12 = HEAP[$self_addr];
      _PyEval_SetProfile(FUNCTION_TABLE_OFFSET + 2, $12);
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
  function _do_stop($self) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 10276] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      var $5 = HEAP[$self_addr] + 10276;
      HEAP[$5] = 0;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 10264] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      _PyEval_SetTrace(0, 0);
      __label__ = 4;
      break;
     case 3:
      _PyEval_SetProfile(0, 0);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 16] > 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $14 = HEAP[$self_addr];
      var $15 = _flush_data($14);
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
  function _is_available($self) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 10276] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_ProfilerError];
      _PyErr_SetString($5, __str8);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 10260] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = HEAP[_ProfilerError];
      _PyErr_SetString($10, __str9);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      HEAP[$0] = 1;
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
  function _profiler_addinfo($self, $args) {
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
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $result = __stackBase__ + 16;
      var $key = __stackBase__ + 20;
      var $value = __stackBase__ + 24;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$result] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str10, allocate([ $key, 0, 0, 0, $value, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 10260] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $8 = HEAP[_ProfilerError];
      _PyErr_SetString($8, __str9);
      __label__ = 5;
      break;
     case 3:
      var $9 = HEAP[$value];
      var $10 = HEAP[$key];
      var $11 = HEAP[$self_addr];
      var $12 = _pack_add_info($11, $10, $9);
      
      if ($12 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$result] = __Py_NoneStruct;
      
      
      
      var $17 = HEAP[HEAP[$result]] + 1;
      
      var $19 = HEAP[$result];
      HEAP[$19] = $17;
      __label__ = 5;
      break;
     case 5:
      var $20 = HEAP[$result];
      HEAP[$0] = $20;
      var $21 = HEAP[$0];
      HEAP[$retval] = $21;
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
  function _profiler_close($self) {
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
      _do_stop($1);
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 10260] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[HEAP[$self_addr] + 10260];
      var $9 = _fclose($8);
      
      var $11 = HEAP[$self_addr] + 10260;
      HEAP[$11] = 0;
      __label__ = 2;
      break;
     case 2:
      
      var $13 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $13;
      HEAP[$0] = __Py_NoneStruct;
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
  function _profiler_fileno($self) {
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
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 10260] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str11);
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      var $8 = HEAP[HEAP[$self_addr] + 10260];
      var $9 = _fileno($8);
      var $10 = _PyInt_FromLong($9);
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
  function _profiler_runcall($self, $args) {
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
      var $result = __stackBase__ + 16;
      var $callargs = __stackBase__ + 20;
      var $callkw = __stackBase__ + 24;
      var $callable = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$result] = 0;
      HEAP[$callargs] = 0;
      HEAP[$callkw] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_UnpackTuple($1, __str12, 1, 3, allocate([ $callable, 0, 0, 0, $callargs, 0, 0, 0, $callkw, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $4 = HEAP[$self_addr];
      var $5 = _is_available($4);
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $7 = HEAP[$self_addr];
      _do_start($7);
      var $8 = HEAP[$callkw];
      var $9 = HEAP[$callargs];
      var $10 = HEAP[$callable];
      var $11 = _PyEval_CallObjectWithKeywords($10, $9, $8);
      HEAP[$result] = $11;
      var $12 = HEAP[$self_addr];
      _do_stop($12);
      __label__ = 3;
      break;
     case 3:
      var $13 = HEAP[$result];
      HEAP[$0] = $13;
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
  function _profiler_runcode($self, $args) {
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
      var $result = __stackBase__ + 16;
      var $code = __stackBase__ + 20;
      var $globals = __stackBase__ + 24;
      var $locals = __stackBase__ + 28;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$result] = 0;
      HEAP[$locals] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str13, allocate([ _PyCode_Type, 0, 0, 0, $code, 0, 0, 0, _PyDict_Type, 0, 0, 0, $globals, 0, 0, 0, $locals, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyCodeObject**", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 1:
      var $4 = HEAP[$self_addr];
      var $5 = _is_available($4);
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 2:
      
      
      if (HEAP[$locals] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$locals] == __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $11 = HEAP[$globals];
      HEAP[$locals] = $11;
      __label__ = 7;
      break;
     case 5:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$locals] + 4] + 84] & 536870912) == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $19 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($19, __str14);
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 7:
      var $20 = HEAP[$self_addr];
      _do_start($20);
      var $21 = HEAP[$locals];
      var $22 = HEAP[$globals];
      var $23 = HEAP[$code];
      var $24 = _PyEval_EvalCode($23, $22, $21);
      HEAP[$result] = $24;
      var $25 = HEAP[$self_addr];
      _do_stop($25);
      __label__ = 8;
      break;
     case 8:
      var $26 = HEAP[$result];
      HEAP[$0] = $26;
      __label__ = 9;
      break;
     case 9:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
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
  function _profiler_start($self, $args) {
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
      var $result = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$result] = 0;
      var $1 = HEAP[$self_addr];
      var $2 = _is_available($1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[$self_addr];
      _do_start($4);
      HEAP[$result] = __Py_NoneStruct;
      
      
      
      var $8 = HEAP[HEAP[$result]] + 1;
      
      var $10 = HEAP[$result];
      HEAP[$10] = $8;
      __label__ = 2;
      break;
     case 2:
      var $11 = HEAP[$result];
      HEAP[$0] = $11;
      var $12 = HEAP[$0];
      HEAP[$retval] = $12;
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
  function _profiler_stop($self, $args) {
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
      var $result = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$result] = 0;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 10276] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_ProfilerError];
      _PyErr_SetString($5, __str15);
      __label__ = 3;
      break;
     case 2:
      var $6 = HEAP[$self_addr];
      _do_stop($6);
      HEAP[$result] = __Py_NoneStruct;
      
      
      
      var $10 = HEAP[HEAP[$result]] + 1;
      
      var $12 = HEAP[$result];
      HEAP[$12] = $10;
      __label__ = 3;
      break;
     case 3:
      var $13 = HEAP[$result];
      HEAP[$0] = $13;
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
  function _profiler_dealloc($self) {
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
      _do_stop($0);
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 10260] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[$self_addr] + 10260];
      var $8 = _fclose($7);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $15 = HEAP[HEAP[$self_addr] + 8];
      
      
      var $18 = HEAP[$15] - 1;
      var $19 = $15;
      HEAP[$19] = $18;
      
      
      
      if (HEAP[$15] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $29 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 8] + 4] + 24];
      
      
      var $32 = HEAP[HEAP[$self_addr] + 8];
      FUNCTION_TABLE[$29]($32);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $39 = HEAP[HEAP[$self_addr] + 12];
      
      
      var $42 = HEAP[$39] - 1;
      var $43 = $39;
      HEAP[$43] = $42;
      
      
      
      if (HEAP[$39] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $53 = HEAP[HEAP[HEAP[HEAP[$self_addr] + 12] + 4] + 24];
      
      
      var $56 = HEAP[HEAP[$self_addr] + 12];
      FUNCTION_TABLE[$53]($56);
      __label__ = 8;
      break;
     case 8:
      
      var $58 = HEAP[$self_addr];
      _PyObject_Free($58);
      __label__ = 9;
      break;
     case 9:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _profiler_get_closed($self, $closure) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $closure_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $iftmp_67 = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$closure_addr] = $closure;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 10260] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$iftmp_67] = __Py_TrueStruct;
      __label__ = 3;
      break;
     case 2:
      HEAP[$iftmp_67] = __Py_ZeroStruct;
      __label__ = 3;
      break;
     case 3:
      var $5 = HEAP[$iftmp_67];
      HEAP[$result] = $5;
      
      
      
      var $9 = HEAP[HEAP[$result]] + 1;
      
      var $11 = HEAP[$result];
      HEAP[$11] = $9;
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
  function _logreader_get_closed($self, $closure) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $closure_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $iftmp_68 = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      
      HEAP[$self_addr] = $self;
      HEAP[$closure_addr] = $closure;
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$iftmp_68] = __Py_TrueStruct;
      __label__ = 3;
      break;
     case 2:
      HEAP[$iftmp_68] = __Py_ZeroStruct;
      __label__ = 3;
      break;
     case 3:
      var $5 = HEAP[$iftmp_68];
      HEAP[$result] = $5;
      
      
      
      var $9 = HEAP[HEAP[$result]] + 1;
      
      var $11 = HEAP[$result];
      HEAP[$11] = $9;
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
  function _hotshot_logreader($unused, $args) {
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
      var $self = __stackBase__ + 16;
      var $filename = __stackBase__ + 20;
      var $c = __stackBase__ + 24;
      var $err = __stackBase__ + 28;
      
      HEAP[__stackBase__] = $unused;
      HEAP[$args_addr] = $args;
      HEAP[$self] = 0;
      HEAP[$err] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str32, allocate([ $filename, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 1:
      var $4 = __PyObject_New(_LogReaderType);
      
      HEAP[$self] = $4;
      
      
      if (HEAP[$self] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 2:
      
      var $9 = HEAP[$self] + 20;
      HEAP[$9] = 1;
      
      var $11 = HEAP[$self] + 16;
      HEAP[$11] = 0;
      
      var $13 = HEAP[$self] + 8;
      HEAP[$13] = 0;
      var $14 = HEAP[$filename];
      var $15 = ___01fopen64_($14, __str33);
      
      var $17 = HEAP[$self] + 12;
      HEAP[$17] = $15;
      
      
      
      
      if (HEAP[HEAP[$self] + 12] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $22 = HEAP[$filename];
      var $23 = HEAP[_PyExc_IOError];
      var $24 = _PyErr_SetFromErrnoWithFilename($23, $22);
      __label__ = 16;
      break;
     case 4:
      var $25 = _PyDict_New();
      
      var $27 = HEAP[$self] + 8;
      HEAP[$27] = $25;
      
      
      
      
      if (HEAP[HEAP[$self] + 8] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      var $34 = HEAP[HEAP[$self] + 12];
      var $35 = _fgetc($34);
      HEAP[$c] = $35;
      
      var $37 = HEAP[$c] == -1;
      if ($37) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $38 = HEAP[$self];
      _eof_error($38);
      __label__ = 16;
      break;
     case 7:
      
      
      if (HEAP[$c] != 19) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      var $43 = HEAP[HEAP[$self] + 12];
      var $44 = HEAP[$c];
      var $45 = _ungetc($44, $43);
      __label__ = 15;
      break;
     case 9:
      var $46 = HEAP[$self];
      var $47 = _unpack_add_info($46);
      HEAP[$err] = $47;
      
      
      if (HEAP[$err] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      
      var $51 = HEAP[$err] == -1;
      if ($51) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $52 = HEAP[$self];
      _eof_error($52);
      __label__ = 13;
      break;
     case 12:
      var $53 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($53, __str34);
      __label__ = 13;
      break;
     case 13:
      __label__ = 16;
      break;
     case 14:
      __label__ = 5;
      break;
     case 15:
      
      var $55 = HEAP[$self];
      HEAP[$0] = $55;
      __label__ = 19;
      break;
     case 16:
      
      var $57 = HEAP[$self];
      
      
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
      
      
      
      
      
      var $70 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $72 = HEAP[$self];
      FUNCTION_TABLE[$70]($72);
      __label__ = 18;
      break;
     case 18:
      HEAP[$0] = 0;
      __label__ = 19;
      break;
     case 19:
      var $73 = HEAP[$0];
      HEAP[$retval] = $73;
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
  function _get_version_string() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval = __stackBase__;
      var $0 = __stackBase__ + 4;
      var $rev = __stackBase__ + 8;
      var $buffer = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      
      var $1 = HEAP[_rcsid_9592];
      HEAP[$rev] = $1;
      HEAP[$i] = 0;
      __label__ = 2;
      break;
     case 1:
      
      var $3 = HEAP[$rev] + 1;
      HEAP[$rev] = $3;
      __label__ = 2;
      break;
     case 2:
      
      
      
      if (HEAP[HEAP[$rev]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $7 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$7] + 2 * HEAP[HEAP[$rev]]] & 2048) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      __label__ = 6;
      break;
     case 5:
      
      var $18 = HEAP[$i] + 1;
      HEAP[$i] = $18;
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      if (HEAP[HEAP[$rev] + HEAP[$i]] == 32) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      if (HEAP[HEAP[$rev] + HEAP[$i]] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      var $30 = HEAP[$i] + 1;
      var $31 = _malloc($30);
      HEAP[$buffer] = $31;
      
      
      if (HEAP[$buffer] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $34 = HEAP[$i];
      var $35 = HEAP[$buffer];
      var $36 = HEAP[$rev];
      _llvm_memmove_p0i8_p0i8_i32($35, $36, $34, 1, 0);
      
      
      var $39 = HEAP[$buffer] + HEAP[$i];
      HEAP[$39] = 0;
      __label__ = 10;
      break;
     case 10:
      var $40 = HEAP[$buffer];
      HEAP[$0] = $40;
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
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
  function _write_header($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4140;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4140);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $iftmp_79 = __stackBase__ + 8;
      var $iftmp_78 = __stackBase__ + 12;
      var $iftmp_77 = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $buffer = __stackBase__ + 24;
      var $cwdbuffer = __stackBase__ + 28;
      var $temp = __stackBase__ + 4124;
      var $i = __stackBase__ + 4128;
      var $len = __stackBase__ + 4132;
      var $item = __stackBase__ + 4136;
      
      HEAP[$self_addr] = $self;
      var $1 = _get_version_string();
      HEAP[$buffer] = $1;
      
      
      if (HEAP[$buffer] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = _PyErr_NoMemory();
      HEAP[$0] = -1;
      __label__ = 24;
      break;
     case 2:
      var $5 = HEAP[$self_addr];
      var $6 = HEAP[$buffer];
      var $7 = _pack_add_info($5, __str36, $6);
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 10272] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$iftmp_77] = __str37;
      __label__ = 5;
      break;
     case 4:
      HEAP[$iftmp_77] = __str38;
      __label__ = 5;
      break;
     case 5:
      var $12 = HEAP[$self_addr];
      var $13 = HEAP[$iftmp_77];
      var $14 = _pack_add_info($12, __str39, $13);
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 10264] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$iftmp_78] = __str37;
      __label__ = 8;
      break;
     case 7:
      HEAP[$iftmp_78] = __str38;
      __label__ = 8;
      break;
     case 8:
      var $19 = HEAP[$self_addr];
      var $20 = HEAP[$iftmp_78];
      var $21 = _pack_add_info($19, __str40, $20);
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 10268] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$iftmp_79] = __str37;
      __label__ = 11;
      break;
     case 10:
      HEAP[$iftmp_79] = __str38;
      __label__ = 11;
      break;
     case 11:
      var $26 = HEAP[$self_addr];
      var $27 = HEAP[$iftmp_79];
      var $28 = _pack_add_info($26, __str41, $27);
      var $29 = _Py_GetPlatform();
      var $30 = HEAP[$self_addr];
      var $31 = _pack_add_info($30, __str42, $29);
      var $32 = _Py_GetProgramFullPath();
      var $33 = HEAP[$self_addr];
      var $34 = _pack_add_info($33, __str43, $32);
      var $35 = HEAP[$buffer];
      _free($35);
      var $36 = _Py_GetVersion();
      HEAP[$buffer] = $36;
      
      
      if (HEAP[$buffer] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      _PyErr_Clear();
      __label__ = 14;
      break;
     case 13:
      var $39 = HEAP[$self_addr];
      var $40 = HEAP[$buffer];
      var $41 = _pack_add_info($39, __str44, $40);
      __label__ = 14;
      break;
     case 14:
      var $42 = HEAP[_rusage_diff];
      var $cwdbuffer14 = $cwdbuffer;
      var $43 = _PyOS_snprintf($cwdbuffer14, 4096, __str45, allocate([ $42, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      var $44 = HEAP[$self_addr];
      var $cwdbuffer15 = $cwdbuffer;
      var $45 = _pack_add_info($44, __str46, $cwdbuffer15);
      var $46 = HEAP[_timeofday_diff];
      var $cwdbuffer16 = $cwdbuffer;
      var $47 = _PyOS_snprintf($cwdbuffer16, 4096, __str45, allocate([ $46, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      var $48 = HEAP[$self_addr];
      var $cwdbuffer17 = $cwdbuffer;
      var $49 = _pack_add_info($48, __str47, $cwdbuffer17);
      var $cwdbuffer18 = $cwdbuffer;
      var $50 = _getcwd($cwdbuffer18, 4096);
      var $51 = HEAP[$self_addr];
      var $52 = _pack_add_info($51, __str48, $50);
      var $53 = _PySys_GetObject(__str49);
      HEAP[$temp] = $53;
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$temp] + 4] + 84] & 33554432) == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $63 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($63, __str50);
      HEAP[$0] = -1;
      __label__ = 24;
      break;
     case 17:
      
      
      
      var $67 = HEAP[HEAP[$temp] + 8];
      HEAP[$len] = $67;
      HEAP[$i] = 0;
      __label__ = 22;
      break;
     case 18:
      
      
      
      
      
      
      var $74 = HEAP[HEAP[HEAP[$temp] + 12] + 4 * HEAP[$i]];
      HEAP[$item] = $74;
      var $75 = HEAP[$item];
      var $76 = _PyString_AsString($75);
      HEAP[$buffer] = $76;
      
      
      if (HEAP[$buffer] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $79 = HEAP[$self_addr];
      var $80 = _pack_add_info($79, __str51, __str52);
      _PyErr_Clear();
      __label__ = 21;
      break;
     case 20:
      var $81 = HEAP[$self_addr];
      var $82 = HEAP[$buffer];
      var $83 = _pack_add_info($81, __str51, $82);
      __label__ = 21;
      break;
     case 21:
      
      var $85 = HEAP[$i] + 1;
      HEAP[$i] = $85;
      __label__ = 22;
      break;
     case 22:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      var $89 = HEAP[$self_addr];
      var $90 = _pack_frame_times($89);
      var $91 = HEAP[$self_addr];
      var $92 = _pack_line_times($91);
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 24:
      var $93 = HEAP[$0];
      HEAP[$retval] = $93;
      __label__ = 25;
      break;
     case 25:
      var $retval29 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval29;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _hotshot_profiler($unused, $args) {
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
      var $iftmp_86 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $logfilename = __stackBase__ + 20;
      var $self = __stackBase__ + 24;
      var $lineevents = __stackBase__ + 28;
      var $linetimings = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $unused;
      HEAP[$args_addr] = $args;
      HEAP[$self] = 0;
      HEAP[$lineevents] = 0;
      HEAP[$linetimings] = 1;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str53, allocate([ $logfilename, 0, 0, 0, $lineevents, 0, 0, 0, $linetimings, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 1:
      var $4 = __PyObject_New(_ProfilerType);
      
      HEAP[$self] = $4;
      
      
      if (HEAP[$self] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 3:
      
      var $9 = HEAP[$self] + 10272;
      HEAP[$9] = 1;
      
      
      var $12 = HEAP[$lineevents] != 0;
      
      var $14 = HEAP[$self] + 10264;
      HEAP[$14] = $12;
      
      
      if (HEAP[$lineevents] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if (HEAP[$linetimings] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      HEAP[$iftmp_86] = 1;
      __label__ = 7;
      break;
     case 6:
      HEAP[$iftmp_86] = 0;
      __label__ = 7;
      break;
     case 7:
      
      var $20 = HEAP[$self] + 10268;
      var $21 = HEAP[$iftmp_86];
      HEAP[$20] = $21;
      
      var $23 = HEAP[$self] + 16;
      HEAP[$23] = 0;
      
      var $25 = HEAP[$self] + 10276;
      HEAP[$25] = 0;
      
      var $27 = HEAP[$self] + 10280;
      HEAP[$27] = 0;
      
      var $29 = HEAP[$self] + 10260;
      HEAP[$29] = 0;
      
      
      
      
      var $34 = HEAP[HEAP[$args_addr] + 12];
      
      var $36 = HEAP[$self] + 12;
      HEAP[$36] = $34;
      
      
      
      
      
      var $42 = HEAP[HEAP[HEAP[$self] + 12]] + 1;
      var $43 = HEAP[HEAP[$self] + 12];
      HEAP[$43] = $42;
      var $44 = _PyDict_New();
      
      var $46 = HEAP[$self] + 8;
      HEAP[$46] = $44;
      
      
      
      
      if (HEAP[HEAP[$self] + 8] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      var $52 = HEAP[$self];
      
      
      var $55 = HEAP[$52] - 1;
      var $56 = $52;
      HEAP[$56] = $55;
      
      
      
      if (HEAP[$52] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      var $65 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $67 = HEAP[$self];
      FUNCTION_TABLE[$65]($67);
      __label__ = 10;
      break;
     case 10:
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 11:
      var $68 = HEAP[$logfilename];
      var $69 = ___01fopen64_($68, __str54);
      
      var $71 = HEAP[$self] + 10260;
      HEAP[$71] = $69;
      
      
      
      
      if (HEAP[HEAP[$self] + 10260] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      var $77 = HEAP[$self];
      
      
      var $80 = HEAP[$77] - 1;
      var $81 = $77;
      HEAP[$81] = $80;
      
      
      
      if (HEAP[$77] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      var $90 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $92 = HEAP[$self];
      FUNCTION_TABLE[$90]($92);
      __label__ = 14;
      break;
     case 14:
      var $93 = HEAP[$logfilename];
      var $94 = HEAP[_PyExc_IOError];
      var $95 = _PyErr_SetFromErrnoWithFilename($94, $93);
      HEAP[$0] = 0;
      __label__ = 22;
      break;
     case 15:
      
      
      if (HEAP[_timeofday_diff] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      _calibrate();
      _calibrate();
      _calibrate();
      __label__ = 17;
      break;
     case 17:
      var $98 = HEAP[$self];
      var $99 = _write_header($98);
      
      if ($99 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      
      var $102 = HEAP[$self];
      
      
      var $105 = HEAP[$102] - 1;
      var $106 = $102;
      HEAP[$106] = $105;
      
      
      
      if (HEAP[$102] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      var $115 = HEAP[HEAP[HEAP[$self] + 4] + 24];
      
      var $117 = HEAP[$self];
      FUNCTION_TABLE[$115]($117);
      __label__ = 20;
      break;
     case 20:
      HEAP[$self] = 0;
      __label__ = 21;
      break;
     case 21:
      
      var $119 = HEAP[$self];
      HEAP[$0] = $119;
      __label__ = 22;
      break;
     case 22:
      var $120 = HEAP[$0];
      HEAP[$retval] = $120;
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
  function _hotshot_coverage($unused, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $unused_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $logfilename = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      var $self = __stackBase__ + 24;
      
      HEAP[$unused_addr] = $unused;
      HEAP[$args_addr] = $args;
      HEAP[$result] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str55, allocate([ $logfilename, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $4 = HEAP[$unused_addr];
      var $5 = HEAP[$args_addr];
      var $6 = _hotshot_profiler($4, $5);
      HEAP[$result] = $6;
      
      
      if (HEAP[$result] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $10 = HEAP[$result];
      HEAP[$self] = $10;
      
      var $12 = HEAP[$self] + 10272;
      HEAP[$12] = 0;
      
      var $14 = HEAP[$self] + 10268;
      HEAP[$14] = 0;
      
      var $16 = HEAP[$self] + 10264;
      HEAP[$16] = 1;
      __label__ = 3;
      break;
     case 3:
      var $17 = HEAP[$result];
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
  function _hotshot_resolution($self, $unused) {
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
      
      
      if (HEAP[_timeofday_diff] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      _calibrate();
      _calibrate();
      _calibrate();
      __label__ = 2;
      break;
     case 2:
      var $3 = HEAP[_rusage_diff];
      var $4 = HEAP[_timeofday_diff];
      var $5 = _Py_BuildValue(__str56, allocate([ $4, 0, 0, 0, $3, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $5;
      var $6 = HEAP[$0];
      HEAP[$retval] = $6;
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
  function _init_hotshot() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $module = __stackBase__;
      var $s = __stackBase__ + 4;
      
      
      HEAP[_LogReaderType + 4] = _PyType_Type;
      
      HEAP[_ProfilerType + 4] = _PyType_Type;
      var $2 = _Py_InitModule4(__str61, _functions, 0, 0, 1013);
      HEAP[$module] = $2;
      
      
      if (HEAP[$module] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      var $5 = _get_version_string();
      HEAP[$s] = $5;
      var $6 = HEAP[$module];
      var $7 = HEAP[$s];
      var $8 = _PyModule_AddStringConstant($6, __str62, $7);
      var $9 = HEAP[$s];
      _free($9);
      
      
      var $12 = HEAP[_LogReaderType] + 1;
      
      HEAP[_LogReaderType] = $12;
      var $14 = HEAP[$module];
      var $15 = _PyModule_AddObject($14, __str63, _LogReaderType);
      
      
      var $18 = HEAP[_ProfilerType] + 1;
      
      HEAP[_ProfilerType] = $18;
      var $20 = HEAP[$module];
      var $21 = _PyModule_AddObject($20, __str64, _ProfilerType);
      
      
      if (HEAP[_ProfilerError] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $24 = _PyErr_NewException(__str65, 0, 0);
      HEAP[_ProfilerError] = $24;
      __label__ = 3;
      break;
     case 3:
      
      
      if (HEAP[_ProfilerError] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      var $30 = HEAP[HEAP[_ProfilerError]] + 1;
      var $31 = HEAP[_ProfilerError];
      HEAP[$31] = $30;
      var $32 = HEAP[_ProfilerError];
      var $33 = HEAP[$module];
      var $34 = _PyModule_AddObject($33, __str66, $32);
      __label__ = 5;
      break;
     case 5:
      var $35 = HEAP[$module];
      var $36 = _PyModule_AddIntConstant($35, __str67, 0);
      var $37 = HEAP[$module];
      var $38 = _PyModule_AddIntConstant($37, __str68, 1);
      var $39 = HEAP[$module];
      var $40 = _PyModule_AddIntConstant($39, __str69, 2);
      var $41 = HEAP[$module];
      var $42 = _PyModule_AddIntConstant($41, __str70, 3);
      var $43 = HEAP[$module];
      var $44 = _PyModule_AddIntConstant($43, __str71, 19);
      var $45 = HEAP[$module];
      var $46 = _PyModule_AddIntConstant($45, __str72, 35);
      var $47 = HEAP[$module];
      var $48 = _PyModule_AddIntConstant($47, __str73, 67);
      var $49 = HEAP[$module];
      var $50 = _PyModule_AddIntConstant($49, __str74, 51);
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
  Module["_init_hotshot"] = _init_hotshot;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _tracer_callback, 0, _profiler_addinfo, 0, _profiler_close, 0, _profiler_fileno, 0, _profiler_runcall, 0, _profiler_runcode, 0, _profiler_start, 0, _profiler_stop, 0, _profiler_get_closed, 0, _profiler_dealloc, 0, _PyObject_GenericGetAttr, 0, _logreader_close, 0, _logreader_fileno, 0, _logreader_sq_item, 0, _logreader_get_closed, 0, _logreader_dealloc, 0, _PyObject_SelfIter, 0, _logreader_tp_iternext, 0, _hotshot_coverage, 0, _hotshot_profiler, 0, _hotshot_logreader, 0, _hotshot_resolution, 0 ]);
  function run(args) {
    _ProfilerError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _logreader_close__doc__ = allocate([ 99, 108, 111, 115, 101, 40, 41, 10, 67, 108, 111, 115, 101, 32, 116, 104, 101, 32, 108, 111, 103, 32, 102, 105, 108, 101, 44, 32, 112, 114, 101, 118, 101, 110, 116, 105, 110, 103, 32, 97, 100, 100, 105, 116, 105, 111, 110, 97, 108, 32, 114, 101, 99, 111, 114, 100, 115, 32, 102, 114, 111, 109, 32, 98, 101, 105, 110, 103, 32, 114, 101, 97, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _logreader_fileno__doc__ = allocate([ 102, 105, 108, 101, 110, 111, 40, 41, 32, 45, 62, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 10, 82, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 32, 102, 111, 114, 32, 116, 104, 101, 32, 108, 111, 103, 32, 102, 105, 108, 101, 44, 32, 105, 102, 32, 111, 112, 101, 110, 46, 10, 82, 97, 105, 115, 101, 115, 32, 86, 97, 108, 117, 101, 69, 114, 114, 111, 114, 32, 105, 102, 32, 116, 104, 101, 32, 108, 111, 103, 32, 102, 105, 108, 101, 32, 105, 115, 32, 99, 108, 111, 115, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 108, 111, 103, 114, 101, 97, 100, 101, 114, 39, 115, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 32, 97, 108, 114, 101, 97, 100, 121, 32, 99, 108, 111, 115, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 101, 110, 100, 32, 111, 102, 32, 102, 105, 108, 101, 32, 119, 105, 116, 104, 32, 105, 110, 99, 111, 109, 112, 108, 101, 116, 101, 32, 112, 114, 111, 102, 105, 108, 101, 32, 114, 101, 99, 111, 114, 100, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 99, 97, 110, 110, 111, 116, 32, 105, 116, 101, 114, 97, 116, 101, 32, 111, 118, 101, 114, 32, 99, 108, 111, 115, 101, 100, 32, 76, 111, 103, 82, 101, 97, 100, 101, 114, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 117, 110, 107, 110, 111, 119, 110, 32, 114, 101, 99, 111, 114, 100, 32, 116, 121, 112, 101, 32, 105, 110, 32, 108, 111, 103, 32, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 110, 111, 32, 109, 111, 114, 101, 32, 101, 118, 101, 110, 116, 115, 32, 105, 110, 32, 108, 111, 103, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 108, 101, 110, 32, 60, 32, 50, 49, 52, 55, 52, 56, 51, 54, 52, 55, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 95, 104, 111, 116, 115, 104, 111, 116, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8854 = allocate([ 112, 97, 99, 107, 95, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 105, 78, 0 ], "i8", ALLOC_NORMAL);
    _maxvalues_8827 = allocate([ -1, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 7, 0, 0, 0, 15, 0, 0, 0, 31, 0, 0, 0, 63, 0, 0, 0, 127, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    _timeofday_diff = allocate(1, "i32", ALLOC_NORMAL);
    _rusage_diff = allocate(1, "i32", ALLOC_NORMAL);
    __str8 = allocate([ 112, 114, 111, 102, 105, 108, 101, 114, 32, 97, 108, 114, 101, 97, 100, 121, 32, 97, 99, 116, 105, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 112, 114, 111, 102, 105, 108, 101, 114, 32, 97, 108, 114, 101, 97, 100, 121, 32, 99, 108, 111, 115, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    _addinfo__doc__ = allocate([ 97, 100, 100, 105, 110, 102, 111, 40, 107, 101, 121, 44, 32, 118, 97, 108, 117, 101, 41, 10, 73, 110, 115, 101, 114, 116, 32, 97, 110, 32, 65, 68, 68, 95, 73, 78, 70, 79, 32, 114, 101, 99, 111, 114, 100, 32, 105, 110, 116, 111, 32, 116, 104, 101, 32, 108, 111, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 115, 115, 58, 97, 100, 100, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    _close__doc__ = allocate([ 99, 108, 111, 115, 101, 40, 41, 10, 83, 104, 117, 116, 32, 100, 111, 119, 110, 32, 116, 104, 105, 115, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 97, 110, 100, 32, 99, 108, 111, 115, 101, 32, 116, 104, 101, 32, 108, 111, 103, 32, 102, 105, 108, 101, 115, 44, 32, 101, 118, 101, 110, 32, 105, 102, 32, 105, 116, 115, 32, 97, 99, 116, 105, 118, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 112, 114, 111, 102, 105, 108, 101, 114, 39, 115, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 32, 97, 108, 114, 101, 97, 100, 121, 32, 99, 108, 111, 115, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    _runcall__doc__ = allocate([ 114, 117, 110, 99, 97, 108, 108, 40, 99, 97, 108, 108, 97, 98, 108, 101, 91, 44, 32, 97, 114, 103, 115, 91, 44, 32, 107, 119, 93, 93, 41, 32, 45, 62, 32, 99, 97, 108, 108, 97, 98, 108, 101, 40, 41, 10, 80, 114, 111, 102, 105, 108, 101, 32, 97, 32, 115, 112, 101, 99, 105, 102, 105, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 99, 97, 108, 108, 44, 32, 114, 101, 116, 117, 114, 110, 105, 110, 103, 32, 116, 104, 101, 32, 114, 101, 115, 117, 108, 116, 32, 111, 102, 32, 116, 104, 97, 116, 32, 99, 97, 108, 108, 46, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 114, 117, 110, 99, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    _runcode__doc__ = allocate([ 114, 117, 110, 99, 111, 100, 101, 40, 99, 111, 100, 101, 44, 32, 103, 108, 111, 98, 97, 108, 115, 91, 44, 32, 108, 111, 99, 97, 108, 115, 93, 41, 10, 69, 120, 101, 99, 117, 116, 101, 32, 97, 32, 99, 111, 100, 101, 32, 111, 98, 106, 101, 99, 116, 32, 119, 104, 105, 108, 101, 32, 99, 111, 108, 108, 101, 99, 116, 105, 110, 103, 32, 112, 114, 111, 102, 105, 108, 101, 32, 100, 97, 116, 97, 46, 32, 32, 73, 102, 32, 108, 111, 99, 97, 108, 115, 32, 105, 115, 10, 111, 109, 105, 116, 116, 101, 100, 44, 32, 103, 108, 111, 98, 97, 108, 115, 32, 105, 115, 32, 117, 115, 101, 100, 32, 102, 111, 114, 32, 116, 104, 101, 32, 108, 111, 99, 97, 108, 115, 32, 97, 115, 32, 119, 101, 108, 108, 46, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 79, 33, 79, 33, 124, 79, 58, 114, 117, 110, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 108, 111, 99, 97, 108, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 32, 111, 114, 32, 78, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    _start__doc__ = allocate([ 115, 116, 97, 114, 116, 40, 41, 10, 73, 110, 115, 116, 97, 108, 108, 32, 116, 104, 105, 115, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 102, 111, 114, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 104, 114, 101, 97, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _stop__doc__ = allocate([ 115, 116, 111, 112, 40, 41, 10, 82, 101, 109, 111, 118, 101, 32, 116, 104, 105, 115, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 104, 114, 101, 97, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 112, 114, 111, 102, 105, 108, 101, 114, 32, 110, 111, 116, 32, 97, 99, 116, 105, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 97, 100, 100, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 99, 108, 111, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 102, 105, 108, 101, 110, 111, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 114, 117, 110, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 115, 116, 97, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 115, 116, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    _profiler_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str22 = allocate([ 102, 114, 97, 109, 101, 116, 105, 109, 105, 110, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 108, 105, 110, 101, 101, 118, 101, 110, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 108, 105, 110, 101, 116, 105, 109, 105, 110, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    _profiler_members = allocate([ 0, 0, 0, 0, 2, 0, 0, 0, 10268, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 10264, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 10268, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str25 = allocate([ 99, 108, 111, 115, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 84, 114, 117, 101, 32, 105, 102, 32, 116, 104, 101, 32, 112, 114, 111, 102, 105, 108, 101, 114, 39, 115, 32, 111, 117, 116, 112, 117, 116, 32, 102, 105, 108, 101, 32, 104, 97, 115, 32, 97, 108, 114, 101, 97, 100, 121, 32, 98, 101, 101, 110, 32, 99, 108, 111, 115, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _profiler_getsets = allocate(40, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _profiler_object__doc__ = allocate([ 72, 105, 103, 104, 45, 112, 101, 114, 102, 111, 114, 109, 97, 110, 99, 101, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 111, 98, 106, 101, 99, 116, 46, 10, 10, 77, 101, 116, 104, 111, 100, 115, 58, 10, 10, 99, 108, 111, 115, 101, 40, 41, 58, 32, 32, 32, 32, 32, 32, 83, 116, 111, 112, 32, 116, 104, 101, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 97, 110, 100, 32, 99, 108, 111, 115, 101, 32, 116, 104, 101, 32, 108, 111, 103, 32, 102, 105, 108, 101, 115, 46, 10, 102, 105, 108, 101, 110, 111, 40, 41, 58, 32, 32, 32, 32, 32, 82, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 32, 111, 102, 32, 116, 104, 101, 32, 108, 111, 103, 32, 102, 105, 108, 101, 46, 10, 114, 117, 110, 99, 97, 108, 108, 40, 41, 58, 32, 32, 32, 32, 82, 117, 110, 32, 97, 32, 115, 105, 110, 103, 108, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 99, 97, 108, 108, 32, 119, 105, 116, 104, 32, 112, 114, 111, 102, 105, 108, 105, 110, 103, 32, 101, 110, 97, 98, 108, 101, 100, 46, 10, 114, 117, 110, 99, 111, 100, 101, 40, 41, 58, 32, 32, 32, 32, 69, 120, 101, 99, 117, 116, 101, 32, 97, 32, 99, 111, 100, 101, 32, 111, 98, 106, 101, 99, 116, 32, 119, 105, 116, 104, 32, 112, 114, 111, 102, 105, 108, 105, 110, 103, 32, 101, 110, 97, 98, 108, 101, 100, 46, 10, 115, 116, 97, 114, 116, 40, 41, 58, 32, 32, 32, 32, 32, 32, 73, 110, 115, 116, 97, 108, 108, 32, 116, 104, 101, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 46, 10, 115, 116, 111, 112, 40, 41, 58, 32, 32, 32, 32, 32, 32, 32, 82, 101, 109, 111, 118, 101, 32, 116, 104, 101, 32, 112, 114, 111, 102, 105, 108, 101, 114, 46, 10, 10, 65, 116, 116, 114, 105, 98, 117, 116, 101, 115, 32, 40, 114, 101, 97, 100, 45, 111, 110, 108, 121, 41, 58, 10, 10, 99, 108, 111, 115, 101, 100, 58, 32, 32, 32, 32, 32, 32, 32, 84, 114, 117, 101, 32, 105, 102, 32, 116, 104, 101, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 104, 97, 115, 32, 97, 108, 114, 101, 97, 100, 121, 32, 98, 101, 101, 110, 32, 99, 108, 111, 115, 101, 100, 46, 10, 102, 114, 97, 109, 101, 116, 105, 109, 105, 110, 103, 115, 58, 32, 84, 114, 117, 101, 32, 105, 102, 32, 69, 78, 84, 69, 82, 47, 69, 88, 73, 84, 32, 101, 118, 101, 110, 116, 115, 32, 99, 111, 108, 108, 101, 99, 116, 32, 116, 105, 109, 105, 110, 103, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 46, 10, 108, 105, 110, 101, 101, 118, 101, 110, 116, 115, 58, 32, 32, 32, 84, 114, 117, 101, 32, 105, 102, 32, 108, 105, 110, 101, 32, 101, 118, 101, 110, 116, 115, 32, 97, 114, 101, 32, 114, 101, 112, 111, 114, 116, 101, 100, 32, 116, 111, 32, 116, 104, 101, 32, 112, 114, 111, 102, 105, 108, 101, 114, 46, 10, 108, 105, 110, 101, 116, 105, 109, 105, 110, 103, 115, 58, 32, 32, 84, 114, 117, 101, 32, 105, 102, 32, 108, 105, 110, 101, 32, 101, 118, 101, 110, 116, 115, 32, 99, 111, 108, 108, 101, 99, 116, 32, 116, 105, 109, 105, 110, 103, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 95, 104, 111, 116, 115, 104, 111, 116, 46, 80, 114, 111, 102, 105, 108, 101, 114, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    _ProfilerType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _logreader_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str28 = allocate([ 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 68, 105, 99, 116, 105, 111, 110, 97, 114, 121, 32, 109, 97, 112, 112, 105, 110, 103, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 97, 108, 32, 107, 101, 121, 115, 32, 116, 111, 32, 108, 105, 115, 116, 115, 32, 111, 102, 32, 118, 97, 108, 117, 101, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _logreader_members = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _logreader__doc__ = allocate([ 108, 111, 103, 114, 101, 97, 100, 101, 114, 40, 102, 105, 108, 101, 110, 97, 109, 101, 41, 32, 45, 45, 62, 32, 108, 111, 103, 45, 105, 116, 101, 114, 97, 116, 111, 114, 10, 67, 114, 101, 97, 116, 101, 32, 97, 32, 108, 111, 103, 45, 114, 101, 97, 100, 101, 114, 32, 102, 111, 114, 32, 116, 104, 101, 32, 116, 105, 109, 105, 110, 103, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 32, 102, 105, 108, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _logreader_as_sequence = allocate(40, [ "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32, i32)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, i32, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0 ], ALLOC_NORMAL);
    __str30 = allocate([ 84, 114, 117, 101, 32, 105, 102, 32, 116, 104, 101, 32, 108, 111, 103, 114, 101, 97, 100, 101, 114, 39, 115, 32, 105, 110, 112, 117, 116, 32, 102, 105, 108, 101, 32, 104, 97, 115, 32, 97, 108, 114, 101, 97, 100, 121, 32, 98, 101, 101, 110, 32, 99, 108, 111, 115, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _logreader_getsets = allocate(40, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str31 = allocate([ 95, 104, 111, 116, 115, 104, 111, 116, 46, 76, 111, 103, 82, 101, 97, 100, 101, 114, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    _LogReaderType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str32 = allocate([ 115, 58, 108, 111, 103, 114, 101, 97, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 114, 98, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _rcsid_9592 = allocate(1, "i8*", ALLOC_NORMAL);
    __str35 = allocate([ 36, 82, 101, 118, 105, 115, 105, 111, 110, 36, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 104, 111, 116, 115, 104, 111, 116, 45, 118, 101, 114, 115, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 121, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 110, 111, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 114, 101, 113, 117, 101, 115, 116, 101, 100, 45, 102, 114, 97, 109, 101, 45, 116, 105, 109, 105, 110, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 114, 101, 113, 117, 101, 115, 116, 101, 100, 45, 108, 105, 110, 101, 45, 101, 118, 101, 110, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 114, 101, 113, 117, 101, 115, 116, 101, 100, 45, 108, 105, 110, 101, 45, 116, 105, 109, 105, 110, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 112, 108, 97, 116, 102, 111, 114, 109, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 101, 120, 101, 99, 117, 116, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 101, 120, 101, 99, 117, 116, 97, 98, 108, 101, 45, 118, 101, 114, 115, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 37, 108, 117, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 111, 98, 115, 101, 114, 118, 101, 100, 45, 105, 110, 116, 101, 114, 118, 97, 108, 45, 103, 101, 116, 114, 117, 115, 97, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 111, 98, 115, 101, 114, 118, 101, 100, 45, 105, 110, 116, 101, 114, 118, 97, 108, 45, 103, 101, 116, 116, 105, 109, 101, 111, 102, 100, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 99, 117, 114, 114, 101, 110, 116, 45, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 112, 97, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 115, 121, 115, 46, 112, 97, 116, 104, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 115, 121, 115, 45, 112, 97, 116, 104, 45, 101, 110, 116, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 60, 110, 111, 110, 45, 115, 116, 114, 105, 110, 103, 45, 112, 97, 116, 104, 45, 101, 110, 116, 114, 121, 62, 0 ], "i8", ALLOC_NORMAL);
    _profiler__doc__ = allocate([ 112, 114, 111, 102, 105, 108, 101, 114, 40, 108, 111, 103, 102, 105, 108, 101, 110, 97, 109, 101, 91, 44, 32, 108, 105, 110, 101, 101, 118, 101, 110, 116, 115, 91, 44, 32, 108, 105, 110, 101, 116, 105, 109, 101, 115, 93, 93, 41, 32, 45, 62, 32, 112, 114, 111, 102, 105, 108, 101, 114, 10, 67, 114, 101, 97, 116, 101, 32, 97, 32, 110, 101, 119, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 111, 98, 106, 101, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 115, 124, 105, 105, 58, 112, 114, 111, 102, 105, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 119, 98, 0 ], "i8", ALLOC_NORMAL);
    _coverage__doc__ = allocate([ 99, 111, 118, 101, 114, 97, 103, 101, 40, 108, 111, 103, 102, 105, 108, 101, 110, 97, 109, 101, 41, 32, 45, 62, 32, 112, 114, 111, 102, 105, 108, 101, 114, 10, 82, 101, 116, 117, 114, 110, 115, 32, 97, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 116, 104, 97, 116, 32, 100, 111, 101, 115, 110, 39, 116, 32, 99, 111, 108, 108, 101, 99, 116, 32, 97, 110, 121, 32, 116, 105, 109, 105, 110, 103, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 44, 32, 119, 104, 105, 99, 104, 32, 105, 115, 10, 117, 115, 101, 102, 117, 108, 32, 105, 110, 32, 98, 117, 105, 108, 100, 105, 110, 103, 32, 97, 32, 99, 111, 118, 101, 114, 97, 103, 101, 32, 97, 110, 97, 108, 121, 115, 105, 115, 32, 116, 111, 111, 108, 46, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 115, 58, 99, 111, 118, 101, 114, 97, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    _resolution__doc__ = allocate([ 114, 101, 115, 111, 108, 117, 116, 105, 111, 110, 40, 41, 32, 45, 62, 32, 40, 103, 101, 116, 116, 105, 109, 101, 111, 102, 100, 97, 121, 45, 117, 115, 101, 99, 115, 44, 32, 103, 101, 116, 114, 117, 115, 97, 103, 101, 45, 117, 115, 101, 99, 115, 41, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 114, 101, 115, 111, 108, 117, 116, 105, 111, 110, 32, 111, 102, 32, 116, 104, 101, 32, 116, 105, 109, 101, 114, 115, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 103, 101, 116, 116, 105, 109, 101, 111, 102, 100, 97, 121, 40, 41, 32, 97, 110, 100, 10, 103, 101, 116, 114, 117, 115, 97, 103, 101, 40, 41, 32, 115, 121, 115, 116, 101, 109, 32, 99, 97, 108, 108, 115, 44, 32, 111, 114, 32, 45, 49, 32, 105, 102, 32, 116, 104, 101, 32, 99, 97, 108, 108, 32, 105, 115, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 99, 111, 118, 101, 114, 97, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 112, 114, 111, 102, 105, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 108, 111, 103, 114, 101, 97, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 114, 101, 115, 111, 108, 117, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    _functions = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str61 = allocate([ 95, 104, 111, 116, 115, 104, 111, 116, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 95, 95, 118, 101, 114, 115, 105, 111, 110, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 76, 111, 103, 82, 101, 97, 100, 101, 114, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 80, 114, 111, 102, 105, 108, 101, 114, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 104, 111, 116, 115, 104, 111, 116, 46, 80, 114, 111, 102, 105, 108, 101, 114, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 80, 114, 111, 102, 105, 108, 101, 114, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 87, 72, 65, 84, 95, 69, 78, 84, 69, 82, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 87, 72, 65, 84, 95, 69, 88, 73, 84, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 87, 72, 65, 84, 95, 76, 73, 78, 69, 78, 79, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 87, 72, 65, 84, 95, 79, 84, 72, 69, 82, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 87, 72, 65, 84, 95, 65, 68, 68, 95, 73, 78, 70, 79, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 87, 72, 65, 84, 95, 68, 69, 70, 73, 78, 69, 95, 70, 73, 76, 69, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 87, 72, 65, 84, 95, 68, 69, 70, 73, 78, 69, 95, 70, 85, 78, 67, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 87, 72, 65, 84, 95, 76, 73, 78, 69, 95, 84, 73, 77, 69, 83, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_profiler_methods] = __str16;
    HEAP[_profiler_methods + 4] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_profiler_methods + 12] = _addinfo__doc__;
    HEAP[_profiler_methods + 16] = __str17;
    HEAP[_profiler_methods + 20] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_profiler_methods + 28] = _close__doc__;
    HEAP[_profiler_methods + 32] = __str18;
    HEAP[_profiler_methods + 36] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_profiler_methods + 44] = _logreader_fileno__doc__;
    HEAP[_profiler_methods + 48] = __str12;
    HEAP[_profiler_methods + 52] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_profiler_methods + 60] = _runcall__doc__;
    HEAP[_profiler_methods + 64] = __str19;
    HEAP[_profiler_methods + 68] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_profiler_methods + 76] = _runcode__doc__;
    HEAP[_profiler_methods + 80] = __str20;
    HEAP[_profiler_methods + 84] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_profiler_methods + 92] = _start__doc__;
    HEAP[_profiler_methods + 96] = __str21;
    HEAP[_profiler_methods + 100] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_profiler_methods + 108] = _stop__doc__;
    HEAP[_profiler_members] = __str22;
    HEAP[_profiler_members + 20] = __str23;
    HEAP[_profiler_members + 40] = __str24;
    HEAP[_profiler_getsets] = __str25;
    HEAP[_profiler_getsets + 4] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_profiler_getsets + 12] = __str26;
    HEAP[_ProfilerType + 12] = __str27;
    HEAP[_ProfilerType + 24] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_ProfilerType + 72] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_ProfilerType + 88] = _profiler_object__doc__;
    HEAP[_ProfilerType + 116] = _profiler_methods;
    HEAP[_ProfilerType + 120] = _profiler_members;
    HEAP[_ProfilerType + 124] = _profiler_getsets;
    HEAP[_logreader_methods] = __str17;
    HEAP[_logreader_methods + 4] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_logreader_methods + 12] = _logreader_close__doc__;
    HEAP[_logreader_methods + 16] = __str18;
    HEAP[_logreader_methods + 20] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_logreader_methods + 28] = _logreader_fileno__doc__;
    HEAP[_logreader_members] = __str28;
    HEAP[_logreader_members + 16] = __str29;
    HEAP[_logreader_as_sequence + 12] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_logreader_getsets] = __str25;
    HEAP[_logreader_getsets + 4] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_logreader_getsets + 12] = __str30;
    HEAP[_LogReaderType + 12] = __str31;
    HEAP[_LogReaderType + 24] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_LogReaderType + 52] = _logreader_as_sequence;
    HEAP[_LogReaderType + 72] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_LogReaderType + 88] = _logreader__doc__;
    HEAP[_LogReaderType + 108] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_LogReaderType + 112] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_LogReaderType + 116] = _logreader_methods;
    HEAP[_LogReaderType + 120] = _logreader_members;
    HEAP[_LogReaderType + 124] = _logreader_getsets;
    HEAP[_rcsid_9592] = __str35;
    HEAP[_functions] = __str57;
    HEAP[_functions + 4] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_functions + 12] = _coverage__doc__;
    HEAP[_functions + 16] = __str58;
    HEAP[_functions + 20] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_functions + 28] = _profiler__doc__;
    HEAP[_functions + 32] = __str59;
    HEAP[_functions + 36] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_functions + 44] = _logreader__doc__;
    HEAP[_functions + 48] = __str60;
    HEAP[_functions + 52] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_functions + 60] = _resolution__doc__;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
