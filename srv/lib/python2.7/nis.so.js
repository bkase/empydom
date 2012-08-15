"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 80;
  var $1___SIZE = 16;
  var $struct_AUTH___SIZE = 40;
  var $struct_AUTH___FLATTENER = [ 0, 12, 24, 32, 36 ];
  var $struct_CLIENT___SIZE = 12;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyInterpreterState___SIZE = 40;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyThreadState___SIZE = 84;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct_XDR___SIZE = 24;
  var $struct__IO_marker___SIZE = 12;
  var $struct__frame___SIZE = 0;
  var $struct__frame___FLATTENER = [];
  var $struct__typeobject___SIZE = 196;
  var $struct_anon___SIZE = 8;
  var $struct_auth_ops___SIZE = 20;
  var $struct_clnt_ops___SIZE = 24;
  var $struct_nis_map___SIZE = 12;
  var $struct_nismaplist___SIZE = 8;
  var $struct_nisresp_maplist___SIZE = 8;
  var $struct_opaque_auth___SIZE = 12;
  var $struct_rpc_err___SIZE = 12;
  var $struct_timeval___SIZE = 8;
  var $struct_xdr_ops___SIZE = 40;
  var $struct_ypall_callback___SIZE = 8;
  var $struct_ypcallback_data___SIZE = 12;
  var $union_anon___SIZE = 8;
  var $union_des_block___SIZE = 8;
  var _get_default_domain__doc__;
  var _match__doc__;
  var _cat__doc__;
  var _maps__doc__;
  var _NisError;
  var _aliases;
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
  var __str10;
  var __str11;
  var __str12;
  var __str13;
  var __str14;
  var __str15;
  var __str16;
  var _kwlist_9883;
  var __str17;
  var __str18;
  var __str19;
  var __str20;
  var _kwlist_9931;
  var _TIMEOUT;
  var _res_10053;
  var __str21;
  var __str22;
  var __str23;
  var _kwlist_10113;
  var __str24;
  var __str25;
  var __str26;
  var __str27;
  var _nis_methods;
  var _nis__doc__;
  var __str28;
  var __str29;
  var __str30;
  function _nis_error($err) {
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
      
      HEAP[__stackBase__] = $err;
      var $1 = HEAP[__stackBase__];
      var $2 = _yperr_string($1);
      var $3 = HEAP[_NisError];
      _PyErr_SetString($3, $2);
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
  function _nis_mapname($map, $pfix) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $map_addr = __stackBase__;
      var $pfix_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      
      HEAP[$map_addr] = $map;
      HEAP[$pfix_addr] = $pfix;
      var $1 = HEAP[$pfix_addr];
      HEAP[$1] = 0;
      HEAP[$i] = 0;
      __label__ = 6;
      break;
     case 1:
      
      
      
      var $5 = HEAP[_aliases + HEAP[$i] * 12];
      var $6 = HEAP[$map_addr];
      var $7 = _strcmp($5, $6);
      
      if ($7 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $12 = HEAP[_aliases + HEAP[$i] * 12 + 8];
      var $13 = HEAP[$pfix_addr];
      HEAP[$13] = $12;
      
      
      
      var $17 = HEAP[_aliases + HEAP[$i] * 12 + 4];
      HEAP[$0] = $17;
      __label__ = 8;
      break;
     case 3:
      
      
      
      var $21 = HEAP[_aliases + HEAP[$i] * 12 + 4];
      var $22 = HEAP[$map_addr];
      var $23 = _strcmp($21, $22);
      
      if ($23 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      var $28 = HEAP[_aliases + HEAP[$i] * 12 + 8];
      var $29 = HEAP[$pfix_addr];
      HEAP[$29] = $28;
      
      
      
      var $33 = HEAP[_aliases + HEAP[$i] * 12 + 4];
      HEAP[$0] = $33;
      __label__ = 8;
      break;
     case 5:
      
      var $35 = HEAP[$i] + 1;
      HEAP[$i] = $35;
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      if (HEAP[_aliases + HEAP[$i] * 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $41 = HEAP[$map_addr];
      HEAP[$0] = $41;
      __label__ = 8;
      break;
     case 8:
      var $42 = HEAP[$0];
      HEAP[$retval] = $42;
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
  function _nis_foreach($instatus, $inkey, $inkeylen, $inval, $invallen, $indata) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $instatus_addr = __stackBase__;
      var $inkey_addr = __stackBase__ + 4;
      var $inkeylen_addr = __stackBase__ + 8;
      var $inval_addr = __stackBase__ + 12;
      var $invallen_addr = __stackBase__ + 16;
      var $indata_addr = __stackBase__ + 20;
      var $retval = __stackBase__ + 24;
      var $0 = __stackBase__ + 28;
      var $key = __stackBase__ + 32;
      var $val = __stackBase__ + 36;
      var $err = __stackBase__ + 40;
      
      HEAP[$instatus_addr] = $instatus;
      HEAP[$inkey_addr] = $inkey;
      HEAP[$inkeylen_addr] = $inkeylen;
      HEAP[$inval_addr] = $inval;
      HEAP[$invallen_addr] = $invallen;
      HEAP[$indata_addr] = $indata;
      
      
      if (HEAP[$instatus_addr] == 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 1:
      
      
      var $5 = HEAP[HEAP[$indata_addr] + 8];
      _PyEval_RestoreThread($5);
      
      
      
      
      if (HEAP[HEAP[$indata_addr] + 4] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 2:
      
      
      if (HEAP[$inkeylen_addr] > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      
      
      
      if (HEAP[HEAP[$inkey_addr] + (HEAP[$inkeylen_addr] - 1)] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $19 = HEAP[$inkeylen_addr] - 1;
      HEAP[$inkeylen_addr] = $19;
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[$invallen_addr] > 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      
      
      if (HEAP[HEAP[$inval_addr] + (HEAP[$invallen_addr] - 1)] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      var $29 = HEAP[$invallen_addr] - 1;
      HEAP[$invallen_addr] = $29;
      __label__ = 8;
      break;
     case 8:
      var $30 = HEAP[$inkey_addr];
      var $31 = HEAP[$inkeylen_addr];
      var $32 = _PyString_FromStringAndSize($30, $31);
      HEAP[$key] = $32;
      var $33 = HEAP[$inval_addr];
      var $34 = HEAP[$invallen_addr];
      var $35 = _PyString_FromStringAndSize($33, $34);
      HEAP[$val] = $35;
      
      
      if (HEAP[$key] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$val] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 10:
      _PyErr_Clear();
      
      
      if (HEAP[$key] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      
      var $45 = HEAP[HEAP[$key]] - 1;
      
      var $47 = HEAP[$key];
      HEAP[$47] = $45;
      
      
      
      
      if (HEAP[HEAP[$key]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $56 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $57 = HEAP[$key];
      FUNCTION_TABLE[$56]($57);
      __label__ = 13;
      break;
     case 13:
      
      
      if (HEAP[$val] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      var $63 = HEAP[HEAP[$val]] - 1;
      
      var $65 = HEAP[$val];
      HEAP[$65] = $63;
      
      
      
      
      if (HEAP[HEAP[$val]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $74 = HEAP[HEAP[HEAP[$val] + 4] + 24];
      var $75 = HEAP[$val];
      FUNCTION_TABLE[$74]($75);
      __label__ = 16;
      break;
     case 16:
      var $76 = _PyEval_SaveThread();
      
      var $78 = HEAP[$indata_addr] + 8;
      HEAP[$78] = $76;
      HEAP[$0] = 1;
      __label__ = 27;
      break;
     case 17:
      
      
      var $81 = HEAP[HEAP[$indata_addr]];
      var $82 = HEAP[$key];
      var $83 = HEAP[$val];
      var $84 = _PyDict_SetItem($81, $82, $83);
      HEAP[$err] = $84;
      
      
      
      var $88 = HEAP[HEAP[$key]] - 1;
      
      var $90 = HEAP[$key];
      HEAP[$90] = $88;
      
      
      
      
      if (HEAP[HEAP[$key]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $99 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $100 = HEAP[$key];
      FUNCTION_TABLE[$99]($100);
      __label__ = 19;
      break;
     case 19:
      
      
      
      var $104 = HEAP[HEAP[$val]] - 1;
      
      var $106 = HEAP[$val];
      HEAP[$106] = $104;
      
      
      
      
      if (HEAP[HEAP[$val]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $115 = HEAP[HEAP[HEAP[$val] + 4] + 24];
      var $116 = HEAP[$val];
      FUNCTION_TABLE[$115]($116);
      __label__ = 21;
      break;
     case 21:
      
      
      if (HEAP[$err] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      _PyErr_Clear();
      __label__ = 23;
      break;
     case 23:
      var $119 = _PyEval_SaveThread();
      
      var $121 = HEAP[$indata_addr] + 8;
      HEAP[$121] = $119;
      
      
      if (HEAP[$err] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      HEAP[$0] = 1;
      __label__ = 27;
      break;
     case 25:
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 26:
      HEAP[$0] = 1;
      __label__ = 27;
      break;
     case 27:
      var $124 = HEAP[$0];
      HEAP[$retval] = $124;
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
  function _nis_get_default_domain($self) {
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
      var $domain = __stackBase__ + 12;
      var $err = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      var $1 = _yp_get_default_domain($domain);
      HEAP[$err] = $1;
      
      
      if (HEAP[$err] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[$err];
      var $5 = _nis_error($4);
      HEAP[$0] = $5;
      __label__ = 3;
      break;
     case 2:
      var $6 = HEAP[$domain];
      var $7 = _strlen($6);
      var $8 = HEAP[$domain];
      var $9 = _PyString_FromStringAndSize($8, $7);
      HEAP[$res] = $9;
      var $10 = HEAP[$res];
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
  function _nis_match($self, $args, $kwdict) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kwdict_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $match = __stackBase__ + 20;
      var $domain = __stackBase__ + 24;
      var $keylen = __stackBase__ + 28;
      var $len = __stackBase__ + 32;
      var $key = __stackBase__ + 36;
      var $map = __stackBase__ + 40;
      var $err = __stackBase__ + 44;
      var $res = __stackBase__ + 48;
      var $fix = __stackBase__ + 52;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwdict_addr] = $kwdict;
      HEAP[$domain] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwdict_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str16, _kwlist_9883, allocate([ $key, 0, 0, 0, $keylen, 0, 0, 0, $map, 0, 0, 0, $domain, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$domain] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $7 = _yp_get_default_domain($domain);
      HEAP[$err] = $7;
      
      
      if (HEAP[$err] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $10 = HEAP[$err];
      var $11 = _nis_error($10);
      HEAP[$0] = $11;
      __label__ = 12;
      break;
     case 5:
      var $12 = HEAP[$map];
      var $13 = _nis_mapname($12, $fix);
      HEAP[$map] = $13;
      
      
      if (HEAP[$fix] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $17 = HEAP[$keylen] + 1;
      HEAP[$keylen] = $17;
      __label__ = 7;
      break;
     case 7:
      var $18 = HEAP[$keylen];
      var $19 = HEAP[$key];
      var $20 = HEAP[$map];
      var $21 = HEAP[$domain];
      var $22 = _yp_match($21, $20, $19, $18, $match, $len);
      HEAP[$err] = $22;
      
      
      if (HEAP[$fix] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $26 = HEAP[$len] - 1;
      HEAP[$len] = $26;
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$err] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $29 = HEAP[$err];
      var $30 = _nis_error($29);
      HEAP[$0] = $30;
      __label__ = 12;
      break;
     case 11:
      var $31 = HEAP[$len];
      var $32 = HEAP[$match];
      var $33 = _PyString_FromStringAndSize($32, $31);
      HEAP[$res] = $33;
      var $34 = HEAP[$match];
      _free($34);
      var $35 = HEAP[$res];
      HEAP[$0] = $35;
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
  function _nis_cat($self, $args, $kwdict) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kwdict_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $domain = __stackBase__ + 20;
      var $map = __stackBase__ + 24;
      var $cb = __stackBase__ + 28;
      var $data = __stackBase__ + 36;
      var $dict = __stackBase__ + 48;
      var $err = __stackBase__ + 52;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwdict_addr] = $kwdict;
      HEAP[$domain] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwdict_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str20, _kwlist_9931, allocate([ $map, 0, 0, 0, $domain, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$domain] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $7 = _yp_get_default_domain($domain);
      HEAP[$err] = $7;
      
      
      if (HEAP[$err] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $10 = HEAP[$err];
      var $11 = _nis_error($10);
      HEAP[$0] = $11;
      __label__ = 12;
      break;
     case 5:
      var $12 = _PyDict_New();
      HEAP[$dict] = $12;
      
      
      if (HEAP[$dict] == 0) {
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
      
      HEAP[$cb] = FUNCTION_TABLE_OFFSET + 2;
      
      var $17 = HEAP[$dict];
      HEAP[$data] = $17;
      var $18 = HEAP[$map];
      var $19 = $data + 4;
      var $20 = _nis_mapname($18, $19);
      HEAP[$map] = $20;
      
      
      HEAP[$cb + 4] = $data;
      var $22 = _PyEval_SaveThread();
      
      HEAP[$data + 8] = $22;
      var $24 = HEAP[$map];
      var $25 = HEAP[$domain];
      var $26 = _yp_all($25, $24, $cb);
      HEAP[$err] = $26;
      
      var $28 = HEAP[$data + 8];
      _PyEval_RestoreThread($28);
      
      
      if (HEAP[$err] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $34 = HEAP[HEAP[$dict]] - 1;
      
      var $36 = HEAP[$dict];
      HEAP[$36] = $34;
      
      
      
      
      if (HEAP[HEAP[$dict]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $45 = HEAP[HEAP[HEAP[$dict] + 4] + 24];
      var $46 = HEAP[$dict];
      FUNCTION_TABLE[$45]($46);
      __label__ = 10;
      break;
     case 10:
      var $47 = HEAP[$err];
      var $48 = _nis_error($47);
      HEAP[$0] = $48;
      __label__ = 12;
      break;
     case 11:
      var $49 = HEAP[$dict];
      HEAP[$0] = $49;
      __label__ = 12;
      break;
     case 12:
      var $50 = HEAP[$0];
      HEAP[$retval] = $50;
      __label__ = 13;
      break;
     case 13:
      var $retval14 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nis_xdr_domainname($xdrs, $objp) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $xdrs_addr = __stackBase__;
      var $objp_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$xdrs_addr] = $xdrs;
      HEAP[$objp_addr] = $objp;
      var $1 = HEAP[$xdrs_addr];
      var $2 = HEAP[$objp_addr];
      var $3 = _xdr_string($1, $2, 64);
      
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
      HEAP[$0] = 1;
      __label__ = 3;
      break;
     case 3:
      var $5 = HEAP[$0];
      HEAP[$retval] = $5;
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
  function _nis_xdr_mapname($xdrs, $objp) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $xdrs_addr = __stackBase__;
      var $objp_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$xdrs_addr] = $xdrs;
      HEAP[$objp_addr] = $objp;
      var $1 = HEAP[$xdrs_addr];
      var $2 = HEAP[$objp_addr];
      var $3 = _xdr_string($1, $2, 64);
      
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
      HEAP[$0] = 1;
      __label__ = 3;
      break;
     case 3:
      var $5 = HEAP[$0];
      HEAP[$retval] = $5;
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
  function _nis_xdr_ypmaplist($xdrs, $objp) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $xdrs_addr = __stackBase__;
      var $objp_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$xdrs_addr] = $xdrs;
      HEAP[$objp_addr] = $objp;
      
      var $2 = HEAP[$objp_addr];
      var $3 = HEAP[$xdrs_addr];
      var $4 = _nis_xdr_mapname($3, $2);
      
      if ($4 == 0) {
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
      
      
      var $8 = HEAP[$objp_addr] + 4;
      var $9 = HEAP[$xdrs_addr];
      var $10 = _xdr_pointer($9, $8, 8, FUNCTION_TABLE_OFFSET + 4);
      
      if ($10 == 0) {
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
      HEAP[$0] = 1;
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
  function _nis_xdr_ypstat($xdrs, $objp) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $xdrs_addr = __stackBase__;
      var $objp_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$xdrs_addr] = $xdrs;
      HEAP[$objp_addr] = $objp;
      var $1 = HEAP[$xdrs_addr];
      var $2 = HEAP[$objp_addr];
      var $3 = _xdr_enum($1, $2);
      
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
      HEAP[$0] = 1;
      __label__ = 3;
      break;
     case 3:
      var $5 = HEAP[$0];
      HEAP[$retval] = $5;
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
  function _nis_xdr_ypresp_maplist($xdrs, $objp) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $xdrs_addr = __stackBase__;
      var $objp_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$xdrs_addr] = $xdrs;
      HEAP[$objp_addr] = $objp;
      
      var $2 = HEAP[$objp_addr];
      var $3 = HEAP[$xdrs_addr];
      var $4 = _nis_xdr_ypstat($3, $2);
      
      if ($4 == 0) {
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
      
      
      var $8 = HEAP[$objp_addr] + 4;
      var $9 = HEAP[$xdrs_addr];
      var $10 = _xdr_pointer($9, $8, 8, FUNCTION_TABLE_OFFSET + 4);
      
      if ($10 == 0) {
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
      HEAP[$0] = 1;
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
  function _nisproc_maplist_2($argp, $clnt) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $argp_addr = __stackBase__;
      var $clnt_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$argp_addr] = $argp;
      HEAP[$clnt_addr] = $clnt;
      _llvm_memset_p0i8_i32(_res_10053, 0, 8, 1, 0);
      
      
      
      
      var $5 = HEAP[HEAP[HEAP[$clnt_addr] + 4]];
      
      var $7 = HEAP[$argp_addr];
      var $8 = HEAP[$clnt_addr];
      var $val = HEAP[_TIMEOUT];
      var $val1 = HEAP[_TIMEOUT + 4];
      var $9 = FUNCTION_TABLE[$5]($8, 11, FUNCTION_TABLE_OFFSET + 6, $7, FUNCTION_TABLE_OFFSET + 8, _res_10053, $val, $val1);
      
      if ($9 != 0) {
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
      HEAP[$0] = _res_10053;
      __label__ = 3;
      break;
     case 3:
      var $11 = HEAP[$0];
      HEAP[$retval] = $11;
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
  function _nis_maplist($dom) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dom_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $list = __stackBase__ + 12;
      var $cl = __stackBase__ + 16;
      var $server = __stackBase__ + 20;
      var $mapi = __stackBase__ + 24;
      
      HEAP[$dom_addr] = $dom;
      HEAP[$server] = 0;
      HEAP[$mapi] = 0;
      __label__ = 2;
      break;
     case 1:
      
      
      
      var $4 = HEAP[_aliases + HEAP[$mapi] * 12 + 4];
      var $5 = HEAP[$dom_addr];
      var $6 = _yp_master($5, $4, $server);
      
      var $8 = HEAP[$mapi] + 1;
      HEAP[$mapi] = $8;
      __label__ = 2;
      break;
     case 2:
      
      
      if (HEAP[$server] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      if (HEAP[_aliases + HEAP[$mapi] * 12 + 4] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if (HEAP[$server] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $18 = HEAP[_NisError];
      _PyErr_SetString($18, __str21);
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 6:
      var $19 = HEAP[$server];
      var $20 = _clnt_create($19, 100004, 2, __str22);
      HEAP[$cl] = $20;
      
      
      if (HEAP[$cl] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $23 = HEAP[$server];
      var $24 = _clnt_spcreateerror($23);
      var $25 = HEAP[_NisError];
      _PyErr_SetString($25, $24);
      __label__ = 11;
      break;
     case 8:
      var $26 = HEAP[$cl];
      var $27 = _nisproc_maplist_2($dom_addr, $26);
      HEAP[$list] = $27;
      
      
      
      
      var $32 = HEAP[HEAP[HEAP[$cl] + 4] + 16];
      var $33 = HEAP[$cl];
      FUNCTION_TABLE[$32]($33);
      
      
      if (HEAP[$list] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[HEAP[$list]] != 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      var $40 = HEAP[$server];
      _free($40);
      
      
      var $43 = HEAP[HEAP[$list] + 4];
      HEAP[$0] = $43;
      __label__ = 12;
      break;
     case 11:
      var $44 = HEAP[$server];
      _free($44);
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 12:
      var $45 = HEAP[$0];
      HEAP[$retval] = $45;
      __label__ = 13;
      break;
     case 13:
      var $retval11 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nis_maps($self, $args, $kwdict) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kwdict_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $domain = __stackBase__ + 20;
      var $maps = __stackBase__ + 24;
      var $list = __stackBase__ + 28;
      var $err = __stackBase__ + 32;
      var $str = __stackBase__ + 36;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwdict_addr] = $kwdict;
      HEAP[$domain] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwdict_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str23, _kwlist_10113, allocate([ $domain, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$domain] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $7 = _yp_get_default_domain($domain);
      HEAP[$err] = $7;
      
      
      if (HEAP[$err] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $10 = HEAP[$err];
      var $11 = _nis_error($10);
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 5:
      var $12 = HEAP[$domain];
      var $13 = _nis_maplist($12);
      HEAP[$maps] = $13;
      
      
      if (HEAP[$maps] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 7:
      var $16 = _PyList_New(0);
      HEAP[$list] = $16;
      
      
      if (HEAP[$list] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 20;
      break;
     case 9:
      var $19 = HEAP[$maps];
      HEAP[$maps] = $19;
      __label__ = 18;
      break;
     case 10:
      
      
      var $22 = HEAP[HEAP[$maps]];
      var $23 = _PyString_FromString($22);
      HEAP[$str] = $23;
      
      
      if (HEAP[$str] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $26 = HEAP[$list];
      var $27 = HEAP[$str];
      var $28 = _PyList_Append($26, $27);
      
      if ($28 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      
      
      var $33 = HEAP[HEAP[$list]] - 1;
      
      var $35 = HEAP[$list];
      HEAP[$35] = $33;
      
      
      
      
      if (HEAP[HEAP[$list]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$list] + 4] + 24];
      var $45 = HEAP[$list];
      FUNCTION_TABLE[$44]($45);
      __label__ = 14;
      break;
     case 14:
      HEAP[$list] = 0;
      __label__ = 19;
      break;
     case 15:
      
      
      
      var $49 = HEAP[HEAP[$str]] - 1;
      
      var $51 = HEAP[$str];
      HEAP[$51] = $49;
      
      
      
      
      if (HEAP[HEAP[$str]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[$str] + 4] + 24];
      var $61 = HEAP[$str];
      FUNCTION_TABLE[$60]($61);
      __label__ = 17;
      break;
     case 17:
      
      
      var $64 = HEAP[HEAP[$maps] + 4];
      HEAP[$maps] = $64;
      __label__ = 18;
      break;
     case 18:
      
      
      if (HEAP[$maps] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      var $67 = HEAP[$list];
      HEAP[$0] = $67;
      __label__ = 20;
      break;
     case 20:
      var $68 = HEAP[$0];
      HEAP[$retval] = $68;
      __label__ = 21;
      break;
     case 21:
      var $retval20 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initnis() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      var $d = __stackBase__ + 4;
      
      var $0 = _Py_InitModule4(__str28, _nis_methods, _nis__doc__, 0, 1013);
      HEAP[$m] = $0;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = HEAP[$m];
      var $4 = _PyModule_GetDict($3);
      HEAP[$d] = $4;
      var $5 = _PyErr_NewException(__str29, 0, 0);
      HEAP[_NisError] = $5;
      
      
      if (HEAP[_NisError] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $8 = HEAP[_NisError];
      var $9 = HEAP[$d];
      var $10 = _PyDict_SetItemString($9, __str30, $8);
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
  Module["_initnis"] = _initnis;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _nis_foreach, 0, _nis_xdr_ypmaplist, 0, _nis_xdr_domainname, 0, _nis_xdr_ypresp_maplist, 0, _nis_match, 0, _nis_cat, 0, _nis_maps, 0, _nis_get_default_domain, 0 ]);
  function run(args) {
    _get_default_domain__doc__ = allocate([ 103, 101, 116, 95, 100, 101, 102, 97, 117, 108, 116, 95, 100, 111, 109, 97, 105, 110, 40, 41, 32, 45, 62, 32, 115, 116, 114, 10, 67, 111, 114, 114, 101, 115, 112, 111, 110, 100, 115, 32, 116, 111, 32, 116, 104, 101, 32, 67, 32, 108, 105, 98, 114, 97, 114, 121, 32, 121, 112, 95, 103, 101, 116, 95, 100, 101, 102, 97, 117, 108, 116, 95, 100, 111, 109, 97, 105, 110, 40, 41, 32, 99, 97, 108, 108, 44, 32, 114, 101, 116, 117, 114, 110, 105, 110, 103, 10, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 78, 73, 83, 32, 100, 111, 109, 97, 105, 110, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _match__doc__ = allocate([ 109, 97, 116, 99, 104, 40, 107, 101, 121, 44, 32, 109, 97, 112, 44, 32, 100, 111, 109, 97, 105, 110, 32, 61, 32, 100, 101, 102, 97, 117, 108, 116, 100, 111, 109, 97, 105, 110, 41, 10, 67, 111, 114, 114, 101, 115, 112, 111, 110, 100, 115, 32, 116, 111, 32, 116, 104, 101, 32, 67, 32, 108, 105, 98, 114, 97, 114, 121, 32, 121, 112, 95, 109, 97, 116, 99, 104, 40, 41, 32, 99, 97, 108, 108, 44, 32, 114, 101, 116, 117, 114, 110, 105, 110, 103, 32, 116, 104, 101, 32, 118, 97, 108, 117, 101, 32, 111, 102, 10, 107, 101, 121, 32, 105, 110, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 109, 97, 112, 46, 32, 79, 112, 116, 105, 111, 110, 97, 108, 108, 121, 32, 100, 111, 109, 97, 105, 110, 32, 99, 97, 110, 32, 98, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 98, 117, 116, 32, 105, 116, 10, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 116, 104, 101, 32, 115, 121, 115, 116, 101, 109, 32, 100, 101, 102, 97, 117, 108, 116, 32, 100, 111, 109, 97, 105, 110, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _cat__doc__ = allocate([ 99, 97, 116, 40, 109, 97, 112, 44, 32, 100, 111, 109, 97, 105, 110, 32, 61, 32, 100, 101, 102, 97, 117, 108, 116, 100, 111, 109, 97, 105, 110, 41, 10, 82, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 101, 110, 116, 105, 114, 101, 32, 109, 97, 112, 32, 97, 115, 32, 97, 32, 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 46, 32, 79, 112, 116, 105, 111, 110, 97, 108, 108, 121, 32, 100, 111, 109, 97, 105, 110, 32, 99, 97, 110, 32, 98, 101, 10, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 98, 117, 116, 32, 105, 116, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 116, 104, 101, 32, 115, 121, 115, 116, 101, 109, 32, 100, 101, 102, 97, 117, 108, 116, 32, 100, 111, 109, 97, 105, 110, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _maps__doc__ = allocate([ 109, 97, 112, 115, 40, 100, 111, 109, 97, 105, 110, 32, 61, 32, 100, 101, 102, 97, 117, 108, 116, 100, 111, 109, 97, 105, 110, 41, 10, 82, 101, 116, 117, 114, 110, 115, 32, 97, 110, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 97, 108, 108, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 78, 73, 83, 32, 109, 97, 112, 115, 32, 119, 105, 116, 104, 105, 110, 32, 97, 32, 100, 111, 109, 97, 105, 110, 46, 32, 73, 102, 32, 100, 111, 109, 97, 105, 110, 10, 105, 115, 32, 110, 111, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 105, 116, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 116, 104, 101, 32, 115, 121, 115, 116, 101, 109, 32, 100, 101, 102, 97, 117, 108, 116, 32, 100, 111, 109, 97, 105, 110, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _NisError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _aliases = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str = allocate([ 112, 97, 115, 115, 119, 100, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 112, 97, 115, 115, 119, 100, 46, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 103, 114, 111, 117, 112, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 103, 114, 111, 117, 112, 46, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 110, 101, 116, 119, 111, 114, 107, 115, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 110, 101, 116, 119, 111, 114, 107, 115, 46, 98, 121, 97, 100, 100, 114, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 104, 111, 115, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 104, 111, 115, 116, 115, 46, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 112, 114, 111, 116, 111, 99, 111, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 112, 114, 111, 116, 111, 99, 111, 108, 115, 46, 98, 121, 110, 117, 109, 98, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 115, 101, 114, 118, 105, 99, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 115, 101, 114, 118, 105, 99, 101, 115, 46, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 97, 108, 105, 97, 115, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 109, 97, 105, 108, 46, 97, 108, 105, 97, 115, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 101, 116, 104, 101, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 101, 116, 104, 101, 114, 115, 46, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 116, 35, 115, 124, 115, 58, 109, 97, 116, 99, 104, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9883 = allocate(16, "i8*", ALLOC_NORMAL);
    __str17 = allocate([ 107, 101, 121, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 109, 97, 112, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 100, 111, 109, 97, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 115, 124, 115, 58, 99, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9931 = allocate(12, "i8*", ALLOC_NORMAL);
    _TIMEOUT = allocate([ 25, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    _res_10053 = allocate(8, [ "i32", 0, 0, 0, "%struct.nismaplist*", 0, 0, 0 ], ALLOC_NORMAL);
    __str21 = allocate([ 78, 111, 32, 78, 73, 83, 32, 109, 97, 115, 116, 101, 114, 32, 102, 111, 117, 110, 100, 32, 102, 111, 114, 32, 97, 110, 121, 32, 109, 97, 112, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 116, 99, 112, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 124, 115, 58, 109, 97, 112, 115, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_10113 = allocate(8, "i8*", ALLOC_NORMAL);
    __str24 = allocate([ 109, 97, 116, 99, 104, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 99, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 109, 97, 112, 115, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 103, 101, 116, 95, 100, 101, 102, 97, 117, 108, 116, 95, 100, 111, 109, 97, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    _nis_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _nis__doc__ = allocate([ 84, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 99, 111, 110, 116, 97, 105, 110, 115, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 102, 111, 114, 32, 97, 99, 99, 101, 115, 115, 105, 110, 103, 32, 78, 73, 83, 32, 109, 97, 112, 115, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 110, 105, 115, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 110, 105, 115, 46, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_aliases] = __str;
    HEAP[_aliases + 4] = __str1;
    HEAP[_aliases + 12] = __str2;
    HEAP[_aliases + 16] = __str3;
    HEAP[_aliases + 24] = __str4;
    HEAP[_aliases + 28] = __str5;
    HEAP[_aliases + 36] = __str6;
    HEAP[_aliases + 40] = __str7;
    HEAP[_aliases + 48] = __str8;
    HEAP[_aliases + 52] = __str9;
    HEAP[_aliases + 60] = __str10;
    HEAP[_aliases + 64] = __str11;
    HEAP[_aliases + 72] = __str12;
    HEAP[_aliases + 76] = __str13;
    HEAP[_aliases + 84] = __str14;
    HEAP[_aliases + 88] = __str15;
    HEAP[_kwlist_9883] = __str17;
    HEAP[_kwlist_9883 + 4] = __str18;
    HEAP[_kwlist_9883 + 8] = __str19;
    HEAP[_kwlist_9931] = __str18;
    HEAP[_kwlist_9931 + 4] = __str19;
    HEAP[_kwlist_10113] = __str19;
    HEAP[_nis_methods] = __str24;
    HEAP[_nis_methods + 4] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_nis_methods + 12] = _match__doc__;
    HEAP[_nis_methods + 16] = __str25;
    HEAP[_nis_methods + 20] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_nis_methods + 28] = _cat__doc__;
    HEAP[_nis_methods + 32] = __str26;
    HEAP[_nis_methods + 36] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_nis_methods + 44] = _maps__doc__;
    HEAP[_nis_methods + 48] = __str27;
    HEAP[_nis_methods + 52] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_nis_methods + 60] = _get_default_domain__doc__;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
