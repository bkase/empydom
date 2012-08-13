"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 80;
  var $1___SIZE = 16;
  var $2___SIZE = 60;
  var $3___SIZE = 20;
  var $4___SIZE = 60;
  var $5___SIZE = 196;
  var $6___SIZE = 48;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct_SHAobject___SIZE = 124;
  var $struct_SHAobject___FLATTENER = [ 0, 4, 8, 40, 44, 48, 112, 116, 120 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _SHA256_copy__doc__;
  var _SHA256_digest__doc__;
  var _SHA256_hexdigest__doc__;
  var _SHA256_update__doc__;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var _SHA_methods;
  var __str5;
  var __str6;
  var __str7;
  var __str8;
  var _SHA_getseters;
  var __str9;
  var __str10;
  var _SHA_members;
  var __str11;
  var _SHA224type;
  var __str12;
  var _SHA256type;
  var _SHA256_new__doc__;
  var __str13;
  var _kwlist_11273;
  var __str14;
  var _SHA224_new__doc__;
  var _kwlist_11309;
  var __str15;
  var __str16;
  var _SHA_functions;
  var __str17;
  function _longReverse($buffer, $byteCount, $Endianness) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $buffer_addr = __stackBase__;
      var $byteCount_addr = __stackBase__ + 4;
      var $Endianness_addr = __stackBase__ + 8;
      var $value = __stackBase__ + 12;
      
      HEAP[$buffer_addr] = $buffer;
      HEAP[$byteCount_addr] = $byteCount;
      HEAP[$Endianness_addr] = $Endianness;
      
      
      if (HEAP[$Endianness_addr] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $2 = HEAP[$byteCount_addr];
      var $3 = Math.floor($2 / 4);
      HEAP[$byteCount_addr] = $3;
      __label__ = 3;
      break;
     case 2:
      
      var $5 = HEAP[HEAP[$buffer_addr]];
      HEAP[$value] = $5;
      
      var $7 = HEAP[$value] & -16711936;
      
      
      
      
      var $12 = $7 >>> 0 >>> 8 | (HEAP[$value] & 16711935) << 8;
      HEAP[$value] = $12;
      
      
      
      var $16 = HEAP[$value] >>> 0 >>> 16 | HEAP[$value] << 16;
      var $17 = HEAP[$buffer_addr];
      HEAP[$17] = $16;
      
      var $19 = HEAP[$buffer_addr] + 4;
      HEAP[$buffer_addr] = $19;
      __label__ = 3;
      break;
     case 3:
      
      var $21 = HEAP[$byteCount_addr] - 1;
      HEAP[$byteCount_addr] = $21;
      
      var $23 = HEAP[$byteCount_addr] != -1;
      if ($23) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      __label__ = 5;
      break;
     case 5:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _SHAcopy($src, $dest) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $src_addr = __stackBase__;
      var $dest_addr = __stackBase__ + 4;
      
      HEAP[$src_addr] = $src;
      HEAP[$dest_addr] = $dest;
      
      
      var $2 = HEAP[HEAP[$src_addr] + 112];
      
      var $4 = HEAP[$dest_addr] + 112;
      HEAP[$4] = $2;
      
      
      var $7 = HEAP[HEAP[$src_addr] + 116];
      
      var $9 = HEAP[$dest_addr] + 116;
      HEAP[$9] = $7;
      
      
      var $12 = HEAP[HEAP[$src_addr] + 120];
      
      var $14 = HEAP[$dest_addr] + 120;
      HEAP[$14] = $12;
      
      
      var $17 = HEAP[HEAP[$src_addr] + 40];
      
      var $19 = HEAP[$dest_addr] + 40;
      HEAP[$19] = $17;
      
      
      var $22 = HEAP[HEAP[$src_addr] + 44];
      
      var $24 = HEAP[$dest_addr] + 44;
      HEAP[$24] = $22;
      
      
      
      
      
      
      var $31 = HEAP[$dest_addr] + 8;
      var $32 = HEAP[$src_addr] + 8;
      _llvm_memcpy_p0i8_p0i8_i32($31, $32, 32, 1, 0);
      
      
      var $35 = HEAP[$src_addr] + 48;
      
      
      var $38 = HEAP[$dest_addr] + 48;
      _llvm_memcpy_p0i8_p0i8_i32($38, $35, 64, 1, 0);
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sha_transform($sha_info) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 304;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 304);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $sha_info_addr = __stackBase__;
      var $i = __stackBase__ + 4;
      var $S = __stackBase__ + 8;
      var $W = __stackBase__ + 40;
      var $t0 = __stackBase__ + 296;
      var $t1 = __stackBase__ + 300;
      
      HEAP[$sha_info_addr] = $sha_info;
      
      
      var $2 = HEAP[$sha_info_addr] + 48;
      
      var $W12 = $W;
      _llvm_memcpy_p0i8_p0i8_i32($W12, $2, 64, 1, 0);
      
      
      var $5 = HEAP[HEAP[$sha_info_addr] + 112];
      var $W3 = $W;
      _longReverse($W3, 64, $5);
      HEAP[$i] = 16;
      __label__ = 2;
      break;
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $59 = ((HEAP[$W + (HEAP[$i] - 2) * 4] >>> 0 >>> 17 | HEAP[$W + (HEAP[$i] - 2) * 4] << 15) ^ (HEAP[$W + (HEAP[$i] - 2) * 4] >>> 0 >>> 19 | HEAP[$W + (HEAP[$i] - 2) * 4] << 13) ^ HEAP[$W + (HEAP[$i] - 2) * 4] >>> 0 >>> 10) + HEAP[$W + (HEAP[$i] - 7) * 4] + ((HEAP[$W + (HEAP[$i] - 15) * 4] >>> 0 >>> 7 | HEAP[$W + (HEAP[$i] - 15) * 4] << 25) ^ (HEAP[$W + (HEAP[$i] - 15) * 4] >>> 0 >>> 18 | HEAP[$W + (HEAP[$i] - 15) * 4] << 14) ^ HEAP[$W + (HEAP[$i] - 15) * 4] >>> 0 >>> 3) + HEAP[$W + (HEAP[$i] - 16) * 4];
      var $60 = $W + HEAP[$i] * 4;
      HEAP[$60] = $59;
      
      var $62 = HEAP[$i] + 1;
      HEAP[$i] = $62;
      __label__ = 2;
      break;
     case 2:
      
      
      if (HEAP[$i] <= 63) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$i] = 0;
      __label__ = 5;
      break;
     case 4:
      
      
      
      
      
      var $70 = HEAP[HEAP[$sha_info_addr] + 8 + HEAP[$i] * 4];
      var $71 = $S + HEAP[$i] * 4;
      HEAP[$71] = $70;
      
      var $73 = HEAP[$i] + 1;
      HEAP[$i] = $73;
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[$i] <= 7) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $111 = HEAP[$S + 28] + ((HEAP[$S + 16] >>> 0 >>> 6 | HEAP[$S + 16] << 26) ^ (HEAP[$S + 16] >>> 0 >>> 11 | HEAP[$S + 16] << 21) ^ (HEAP[$S + 16] >>> 0 >>> 25 | HEAP[$S + 16] << 7)) + (HEAP[$S + 24] ^ HEAP[$S + 16] & (HEAP[$S + 20] ^ HEAP[$S + 24])) + HEAP[$W] + 1116352408;
      HEAP[$t0] = $111;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $143 = ((HEAP[$S] >>> 0 >>> 2 | HEAP[$S] << 30) ^ (HEAP[$S] >>> 0 >>> 13 | HEAP[$S] << 19) ^ (HEAP[$S] >>> 0 >>> 22 | HEAP[$S] << 10)) + ((HEAP[$S] | HEAP[$S + 4]) & HEAP[$S + 8] | HEAP[$S] & HEAP[$S + 4]);
      HEAP[$t1] = $143;
      
      
      
      var $147 = HEAP[$S + 12] + HEAP[$t0];
      
      HEAP[$S + 12] = $147;
      
      
      var $151 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 28] = $151;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $188 = HEAP[$S + 24] + ((HEAP[$S + 12] >>> 0 >>> 6 | HEAP[$S + 12] << 26) ^ (HEAP[$S + 12] >>> 0 >>> 11 | HEAP[$S + 12] << 21) ^ (HEAP[$S + 12] >>> 0 >>> 25 | HEAP[$S + 12] << 7)) + (HEAP[$S + 20] ^ HEAP[$S + 12] & (HEAP[$S + 16] ^ HEAP[$S + 20])) + HEAP[$W + 4] + 1899447441;
      HEAP[$t0] = $188;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $220 = ((HEAP[$S + 28] >>> 0 >>> 2 | HEAP[$S + 28] << 30) ^ (HEAP[$S + 28] >>> 0 >>> 13 | HEAP[$S + 28] << 19) ^ (HEAP[$S + 28] >>> 0 >>> 22 | HEAP[$S + 28] << 10)) + ((HEAP[$S + 28] | HEAP[$S]) & HEAP[$S + 4] | HEAP[$S + 28] & HEAP[$S]);
      HEAP[$t1] = $220;
      
      
      
      var $224 = HEAP[$S + 8] + HEAP[$t0];
      
      HEAP[$S + 8] = $224;
      
      
      var $228 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 24] = $228;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $265 = HEAP[$S + 20] + ((HEAP[$S + 8] >>> 0 >>> 6 | HEAP[$S + 8] << 26) ^ (HEAP[$S + 8] >>> 0 >>> 11 | HEAP[$S + 8] << 21) ^ (HEAP[$S + 8] >>> 0 >>> 25 | HEAP[$S + 8] << 7)) + (HEAP[$S + 16] ^ HEAP[$S + 8] & (HEAP[$S + 12] ^ HEAP[$S + 16])) + HEAP[$W + 8] + -1245643825;
      HEAP[$t0] = $265;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $297 = ((HEAP[$S + 24] >>> 0 >>> 2 | HEAP[$S + 24] << 30) ^ (HEAP[$S + 24] >>> 0 >>> 13 | HEAP[$S + 24] << 19) ^ (HEAP[$S + 24] >>> 0 >>> 22 | HEAP[$S + 24] << 10)) + ((HEAP[$S + 24] | HEAP[$S + 28]) & HEAP[$S] | HEAP[$S + 24] & HEAP[$S + 28]);
      HEAP[$t1] = $297;
      
      
      
      var $301 = HEAP[$S + 4] + HEAP[$t0];
      
      HEAP[$S + 4] = $301;
      
      
      var $305 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 20] = $305;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $342 = HEAP[$S + 16] + ((HEAP[$S + 4] >>> 0 >>> 6 | HEAP[$S + 4] << 26) ^ (HEAP[$S + 4] >>> 0 >>> 11 | HEAP[$S + 4] << 21) ^ (HEAP[$S + 4] >>> 0 >>> 25 | HEAP[$S + 4] << 7)) + (HEAP[$S + 12] ^ HEAP[$S + 4] & (HEAP[$S + 8] ^ HEAP[$S + 12])) + HEAP[$W + 12] + -373957723;
      HEAP[$t0] = $342;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $374 = ((HEAP[$S + 20] >>> 0 >>> 2 | HEAP[$S + 20] << 30) ^ (HEAP[$S + 20] >>> 0 >>> 13 | HEAP[$S + 20] << 19) ^ (HEAP[$S + 20] >>> 0 >>> 22 | HEAP[$S + 20] << 10)) + ((HEAP[$S + 20] | HEAP[$S + 24]) & HEAP[$S + 28] | HEAP[$S + 20] & HEAP[$S + 24]);
      HEAP[$t1] = $374;
      
      
      
      var $378 = HEAP[$S] + HEAP[$t0];
      
      HEAP[$S] = $378;
      
      
      var $382 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 16] = $382;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $419 = HEAP[$S + 12] + ((HEAP[$S] >>> 0 >>> 6 | HEAP[$S] << 26) ^ (HEAP[$S] >>> 0 >>> 11 | HEAP[$S] << 21) ^ (HEAP[$S] >>> 0 >>> 25 | HEAP[$S] << 7)) + (HEAP[$S + 8] ^ HEAP[$S] & (HEAP[$S + 4] ^ HEAP[$S + 8])) + HEAP[$W + 16] + 961987163;
      HEAP[$t0] = $419;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $451 = ((HEAP[$S + 16] >>> 0 >>> 2 | HEAP[$S + 16] << 30) ^ (HEAP[$S + 16] >>> 0 >>> 13 | HEAP[$S + 16] << 19) ^ (HEAP[$S + 16] >>> 0 >>> 22 | HEAP[$S + 16] << 10)) + ((HEAP[$S + 16] | HEAP[$S + 20]) & HEAP[$S + 24] | HEAP[$S + 16] & HEAP[$S + 20]);
      HEAP[$t1] = $451;
      
      
      
      var $455 = HEAP[$S + 28] + HEAP[$t0];
      
      HEAP[$S + 28] = $455;
      
      
      var $459 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 12] = $459;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $496 = HEAP[$S + 8] + ((HEAP[$S + 28] >>> 0 >>> 6 | HEAP[$S + 28] << 26) ^ (HEAP[$S + 28] >>> 0 >>> 11 | HEAP[$S + 28] << 21) ^ (HEAP[$S + 28] >>> 0 >>> 25 | HEAP[$S + 28] << 7)) + (HEAP[$S + 4] ^ HEAP[$S + 28] & (HEAP[$S] ^ HEAP[$S + 4])) + HEAP[$W + 20] + 1508970993;
      HEAP[$t0] = $496;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $528 = ((HEAP[$S + 12] >>> 0 >>> 2 | HEAP[$S + 12] << 30) ^ (HEAP[$S + 12] >>> 0 >>> 13 | HEAP[$S + 12] << 19) ^ (HEAP[$S + 12] >>> 0 >>> 22 | HEAP[$S + 12] << 10)) + ((HEAP[$S + 12] | HEAP[$S + 16]) & HEAP[$S + 20] | HEAP[$S + 12] & HEAP[$S + 16]);
      HEAP[$t1] = $528;
      
      
      
      var $532 = HEAP[$S + 24] + HEAP[$t0];
      
      HEAP[$S + 24] = $532;
      
      
      var $536 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 8] = $536;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $573 = HEAP[$S + 4] + ((HEAP[$S + 24] >>> 0 >>> 6 | HEAP[$S + 24] << 26) ^ (HEAP[$S + 24] >>> 0 >>> 11 | HEAP[$S + 24] << 21) ^ (HEAP[$S + 24] >>> 0 >>> 25 | HEAP[$S + 24] << 7)) + (HEAP[$S] ^ HEAP[$S + 24] & (HEAP[$S + 28] ^ HEAP[$S])) + HEAP[$W + 24] + -1841331548;
      HEAP[$t0] = $573;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $605 = ((HEAP[$S + 8] >>> 0 >>> 2 | HEAP[$S + 8] << 30) ^ (HEAP[$S + 8] >>> 0 >>> 13 | HEAP[$S + 8] << 19) ^ (HEAP[$S + 8] >>> 0 >>> 22 | HEAP[$S + 8] << 10)) + ((HEAP[$S + 8] | HEAP[$S + 12]) & HEAP[$S + 16] | HEAP[$S + 8] & HEAP[$S + 12]);
      HEAP[$t1] = $605;
      
      
      
      var $609 = HEAP[$S + 20] + HEAP[$t0];
      
      HEAP[$S + 20] = $609;
      
      
      var $613 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 4] = $613;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $650 = HEAP[$S] + ((HEAP[$S + 20] >>> 0 >>> 6 | HEAP[$S + 20] << 26) ^ (HEAP[$S + 20] >>> 0 >>> 11 | HEAP[$S + 20] << 21) ^ (HEAP[$S + 20] >>> 0 >>> 25 | HEAP[$S + 20] << 7)) + (HEAP[$S + 28] ^ HEAP[$S + 20] & (HEAP[$S + 24] ^ HEAP[$S + 28])) + HEAP[$W + 28] + -1424204075;
      HEAP[$t0] = $650;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $682 = ((HEAP[$S + 4] >>> 0 >>> 2 | HEAP[$S + 4] << 30) ^ (HEAP[$S + 4] >>> 0 >>> 13 | HEAP[$S + 4] << 19) ^ (HEAP[$S + 4] >>> 0 >>> 22 | HEAP[$S + 4] << 10)) + ((HEAP[$S + 4] | HEAP[$S + 8]) & HEAP[$S + 12] | HEAP[$S + 4] & HEAP[$S + 8]);
      HEAP[$t1] = $682;
      
      
      
      var $686 = HEAP[$S + 16] + HEAP[$t0];
      
      HEAP[$S + 16] = $686;
      
      
      var $690 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S] = $690;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $727 = HEAP[$S + 28] + ((HEAP[$S + 16] >>> 0 >>> 6 | HEAP[$S + 16] << 26) ^ (HEAP[$S + 16] >>> 0 >>> 11 | HEAP[$S + 16] << 21) ^ (HEAP[$S + 16] >>> 0 >>> 25 | HEAP[$S + 16] << 7)) + (HEAP[$S + 24] ^ HEAP[$S + 16] & (HEAP[$S + 20] ^ HEAP[$S + 24])) + HEAP[$W + 32] + -670586216;
      HEAP[$t0] = $727;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $759 = ((HEAP[$S] >>> 0 >>> 2 | HEAP[$S] << 30) ^ (HEAP[$S] >>> 0 >>> 13 | HEAP[$S] << 19) ^ (HEAP[$S] >>> 0 >>> 22 | HEAP[$S] << 10)) + ((HEAP[$S] | HEAP[$S + 4]) & HEAP[$S + 8] | HEAP[$S] & HEAP[$S + 4]);
      HEAP[$t1] = $759;
      
      
      
      var $763 = HEAP[$S + 12] + HEAP[$t0];
      
      HEAP[$S + 12] = $763;
      
      
      var $767 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 28] = $767;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $804 = HEAP[$S + 24] + ((HEAP[$S + 12] >>> 0 >>> 6 | HEAP[$S + 12] << 26) ^ (HEAP[$S + 12] >>> 0 >>> 11 | HEAP[$S + 12] << 21) ^ (HEAP[$S + 12] >>> 0 >>> 25 | HEAP[$S + 12] << 7)) + (HEAP[$S + 20] ^ HEAP[$S + 12] & (HEAP[$S + 16] ^ HEAP[$S + 20])) + HEAP[$W + 36] + 310598401;
      HEAP[$t0] = $804;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $836 = ((HEAP[$S + 28] >>> 0 >>> 2 | HEAP[$S + 28] << 30) ^ (HEAP[$S + 28] >>> 0 >>> 13 | HEAP[$S + 28] << 19) ^ (HEAP[$S + 28] >>> 0 >>> 22 | HEAP[$S + 28] << 10)) + ((HEAP[$S + 28] | HEAP[$S]) & HEAP[$S + 4] | HEAP[$S + 28] & HEAP[$S]);
      HEAP[$t1] = $836;
      
      
      
      var $840 = HEAP[$S + 8] + HEAP[$t0];
      
      HEAP[$S + 8] = $840;
      
      
      var $844 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 24] = $844;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $881 = HEAP[$S + 20] + ((HEAP[$S + 8] >>> 0 >>> 6 | HEAP[$S + 8] << 26) ^ (HEAP[$S + 8] >>> 0 >>> 11 | HEAP[$S + 8] << 21) ^ (HEAP[$S + 8] >>> 0 >>> 25 | HEAP[$S + 8] << 7)) + (HEAP[$S + 16] ^ HEAP[$S + 8] & (HEAP[$S + 12] ^ HEAP[$S + 16])) + HEAP[$W + 40] + 607225278;
      HEAP[$t0] = $881;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $913 = ((HEAP[$S + 24] >>> 0 >>> 2 | HEAP[$S + 24] << 30) ^ (HEAP[$S + 24] >>> 0 >>> 13 | HEAP[$S + 24] << 19) ^ (HEAP[$S + 24] >>> 0 >>> 22 | HEAP[$S + 24] << 10)) + ((HEAP[$S + 24] | HEAP[$S + 28]) & HEAP[$S] | HEAP[$S + 24] & HEAP[$S + 28]);
      HEAP[$t1] = $913;
      
      
      
      var $917 = HEAP[$S + 4] + HEAP[$t0];
      
      HEAP[$S + 4] = $917;
      
      
      var $921 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 20] = $921;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $958 = HEAP[$S + 16] + ((HEAP[$S + 4] >>> 0 >>> 6 | HEAP[$S + 4] << 26) ^ (HEAP[$S + 4] >>> 0 >>> 11 | HEAP[$S + 4] << 21) ^ (HEAP[$S + 4] >>> 0 >>> 25 | HEAP[$S + 4] << 7)) + (HEAP[$S + 12] ^ HEAP[$S + 4] & (HEAP[$S + 8] ^ HEAP[$S + 12])) + HEAP[$W + 44] + 1426881987;
      HEAP[$t0] = $958;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $990 = ((HEAP[$S + 20] >>> 0 >>> 2 | HEAP[$S + 20] << 30) ^ (HEAP[$S + 20] >>> 0 >>> 13 | HEAP[$S + 20] << 19) ^ (HEAP[$S + 20] >>> 0 >>> 22 | HEAP[$S + 20] << 10)) + ((HEAP[$S + 20] | HEAP[$S + 24]) & HEAP[$S + 28] | HEAP[$S + 20] & HEAP[$S + 24]);
      HEAP[$t1] = $990;
      
      
      
      var $994 = HEAP[$S] + HEAP[$t0];
      
      HEAP[$S] = $994;
      
      
      var $998 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 16] = $998;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1035 = HEAP[$S + 12] + ((HEAP[$S] >>> 0 >>> 6 | HEAP[$S] << 26) ^ (HEAP[$S] >>> 0 >>> 11 | HEAP[$S] << 21) ^ (HEAP[$S] >>> 0 >>> 25 | HEAP[$S] << 7)) + (HEAP[$S + 8] ^ HEAP[$S] & (HEAP[$S + 4] ^ HEAP[$S + 8])) + HEAP[$W + 48] + 1925078388;
      HEAP[$t0] = $1035;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1067 = ((HEAP[$S + 16] >>> 0 >>> 2 | HEAP[$S + 16] << 30) ^ (HEAP[$S + 16] >>> 0 >>> 13 | HEAP[$S + 16] << 19) ^ (HEAP[$S + 16] >>> 0 >>> 22 | HEAP[$S + 16] << 10)) + ((HEAP[$S + 16] | HEAP[$S + 20]) & HEAP[$S + 24] | HEAP[$S + 16] & HEAP[$S + 20]);
      HEAP[$t1] = $1067;
      
      
      
      var $1071 = HEAP[$S + 28] + HEAP[$t0];
      
      HEAP[$S + 28] = $1071;
      
      
      var $1075 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 12] = $1075;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1112 = HEAP[$S + 8] + ((HEAP[$S + 28] >>> 0 >>> 6 | HEAP[$S + 28] << 26) ^ (HEAP[$S + 28] >>> 0 >>> 11 | HEAP[$S + 28] << 21) ^ (HEAP[$S + 28] >>> 0 >>> 25 | HEAP[$S + 28] << 7)) + (HEAP[$S + 4] ^ HEAP[$S + 28] & (HEAP[$S] ^ HEAP[$S + 4])) + HEAP[$W + 52] + -2132889090;
      HEAP[$t0] = $1112;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1144 = ((HEAP[$S + 12] >>> 0 >>> 2 | HEAP[$S + 12] << 30) ^ (HEAP[$S + 12] >>> 0 >>> 13 | HEAP[$S + 12] << 19) ^ (HEAP[$S + 12] >>> 0 >>> 22 | HEAP[$S + 12] << 10)) + ((HEAP[$S + 12] | HEAP[$S + 16]) & HEAP[$S + 20] | HEAP[$S + 12] & HEAP[$S + 16]);
      HEAP[$t1] = $1144;
      
      
      
      var $1148 = HEAP[$S + 24] + HEAP[$t0];
      
      HEAP[$S + 24] = $1148;
      
      
      var $1152 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 8] = $1152;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1189 = HEAP[$S + 4] + ((HEAP[$S + 24] >>> 0 >>> 6 | HEAP[$S + 24] << 26) ^ (HEAP[$S + 24] >>> 0 >>> 11 | HEAP[$S + 24] << 21) ^ (HEAP[$S + 24] >>> 0 >>> 25 | HEAP[$S + 24] << 7)) + (HEAP[$S] ^ HEAP[$S + 24] & (HEAP[$S + 28] ^ HEAP[$S])) + HEAP[$W + 56] + -1680079193;
      HEAP[$t0] = $1189;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1221 = ((HEAP[$S + 8] >>> 0 >>> 2 | HEAP[$S + 8] << 30) ^ (HEAP[$S + 8] >>> 0 >>> 13 | HEAP[$S + 8] << 19) ^ (HEAP[$S + 8] >>> 0 >>> 22 | HEAP[$S + 8] << 10)) + ((HEAP[$S + 8] | HEAP[$S + 12]) & HEAP[$S + 16] | HEAP[$S + 8] & HEAP[$S + 12]);
      HEAP[$t1] = $1221;
      
      
      
      var $1225 = HEAP[$S + 20] + HEAP[$t0];
      
      HEAP[$S + 20] = $1225;
      
      
      var $1229 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 4] = $1229;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1266 = HEAP[$S] + ((HEAP[$S + 20] >>> 0 >>> 6 | HEAP[$S + 20] << 26) ^ (HEAP[$S + 20] >>> 0 >>> 11 | HEAP[$S + 20] << 21) ^ (HEAP[$S + 20] >>> 0 >>> 25 | HEAP[$S + 20] << 7)) + (HEAP[$S + 28] ^ HEAP[$S + 20] & (HEAP[$S + 24] ^ HEAP[$S + 28])) + HEAP[$W + 60] + -1046744716;
      HEAP[$t0] = $1266;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1298 = ((HEAP[$S + 4] >>> 0 >>> 2 | HEAP[$S + 4] << 30) ^ (HEAP[$S + 4] >>> 0 >>> 13 | HEAP[$S + 4] << 19) ^ (HEAP[$S + 4] >>> 0 >>> 22 | HEAP[$S + 4] << 10)) + ((HEAP[$S + 4] | HEAP[$S + 8]) & HEAP[$S + 12] | HEAP[$S + 4] & HEAP[$S + 8]);
      HEAP[$t1] = $1298;
      
      
      
      var $1302 = HEAP[$S + 16] + HEAP[$t0];
      
      HEAP[$S + 16] = $1302;
      
      
      var $1306 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S] = $1306;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1343 = HEAP[$S + 28] + ((HEAP[$S + 16] >>> 0 >>> 6 | HEAP[$S + 16] << 26) ^ (HEAP[$S + 16] >>> 0 >>> 11 | HEAP[$S + 16] << 21) ^ (HEAP[$S + 16] >>> 0 >>> 25 | HEAP[$S + 16] << 7)) + (HEAP[$S + 24] ^ HEAP[$S + 16] & (HEAP[$S + 20] ^ HEAP[$S + 24])) + HEAP[$W + 64] + -459576895;
      HEAP[$t0] = $1343;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1375 = ((HEAP[$S] >>> 0 >>> 2 | HEAP[$S] << 30) ^ (HEAP[$S] >>> 0 >>> 13 | HEAP[$S] << 19) ^ (HEAP[$S] >>> 0 >>> 22 | HEAP[$S] << 10)) + ((HEAP[$S] | HEAP[$S + 4]) & HEAP[$S + 8] | HEAP[$S] & HEAP[$S + 4]);
      HEAP[$t1] = $1375;
      
      
      
      var $1379 = HEAP[$S + 12] + HEAP[$t0];
      
      HEAP[$S + 12] = $1379;
      
      
      var $1383 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 28] = $1383;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1420 = HEAP[$S + 24] + ((HEAP[$S + 12] >>> 0 >>> 6 | HEAP[$S + 12] << 26) ^ (HEAP[$S + 12] >>> 0 >>> 11 | HEAP[$S + 12] << 21) ^ (HEAP[$S + 12] >>> 0 >>> 25 | HEAP[$S + 12] << 7)) + (HEAP[$S + 20] ^ HEAP[$S + 12] & (HEAP[$S + 16] ^ HEAP[$S + 20])) + HEAP[$W + 68] + -272742522;
      HEAP[$t0] = $1420;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1452 = ((HEAP[$S + 28] >>> 0 >>> 2 | HEAP[$S + 28] << 30) ^ (HEAP[$S + 28] >>> 0 >>> 13 | HEAP[$S + 28] << 19) ^ (HEAP[$S + 28] >>> 0 >>> 22 | HEAP[$S + 28] << 10)) + ((HEAP[$S + 28] | HEAP[$S]) & HEAP[$S + 4] | HEAP[$S + 28] & HEAP[$S]);
      HEAP[$t1] = $1452;
      
      
      
      var $1456 = HEAP[$S + 8] + HEAP[$t0];
      
      HEAP[$S + 8] = $1456;
      
      
      var $1460 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 24] = $1460;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1497 = HEAP[$S + 20] + ((HEAP[$S + 8] >>> 0 >>> 6 | HEAP[$S + 8] << 26) ^ (HEAP[$S + 8] >>> 0 >>> 11 | HEAP[$S + 8] << 21) ^ (HEAP[$S + 8] >>> 0 >>> 25 | HEAP[$S + 8] << 7)) + (HEAP[$S + 16] ^ HEAP[$S + 8] & (HEAP[$S + 12] ^ HEAP[$S + 16])) + HEAP[$W + 72] + 264347078;
      HEAP[$t0] = $1497;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1529 = ((HEAP[$S + 24] >>> 0 >>> 2 | HEAP[$S + 24] << 30) ^ (HEAP[$S + 24] >>> 0 >>> 13 | HEAP[$S + 24] << 19) ^ (HEAP[$S + 24] >>> 0 >>> 22 | HEAP[$S + 24] << 10)) + ((HEAP[$S + 24] | HEAP[$S + 28]) & HEAP[$S] | HEAP[$S + 24] & HEAP[$S + 28]);
      HEAP[$t1] = $1529;
      
      
      
      var $1533 = HEAP[$S + 4] + HEAP[$t0];
      
      HEAP[$S + 4] = $1533;
      
      
      var $1537 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 20] = $1537;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1574 = HEAP[$S + 16] + ((HEAP[$S + 4] >>> 0 >>> 6 | HEAP[$S + 4] << 26) ^ (HEAP[$S + 4] >>> 0 >>> 11 | HEAP[$S + 4] << 21) ^ (HEAP[$S + 4] >>> 0 >>> 25 | HEAP[$S + 4] << 7)) + (HEAP[$S + 12] ^ HEAP[$S + 4] & (HEAP[$S + 8] ^ HEAP[$S + 12])) + HEAP[$W + 76] + 604807628;
      HEAP[$t0] = $1574;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1606 = ((HEAP[$S + 20] >>> 0 >>> 2 | HEAP[$S + 20] << 30) ^ (HEAP[$S + 20] >>> 0 >>> 13 | HEAP[$S + 20] << 19) ^ (HEAP[$S + 20] >>> 0 >>> 22 | HEAP[$S + 20] << 10)) + ((HEAP[$S + 20] | HEAP[$S + 24]) & HEAP[$S + 28] | HEAP[$S + 20] & HEAP[$S + 24]);
      HEAP[$t1] = $1606;
      
      
      
      var $1610 = HEAP[$S] + HEAP[$t0];
      
      HEAP[$S] = $1610;
      
      
      var $1614 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 16] = $1614;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1651 = HEAP[$S + 12] + ((HEAP[$S] >>> 0 >>> 6 | HEAP[$S] << 26) ^ (HEAP[$S] >>> 0 >>> 11 | HEAP[$S] << 21) ^ (HEAP[$S] >>> 0 >>> 25 | HEAP[$S] << 7)) + (HEAP[$S + 8] ^ HEAP[$S] & (HEAP[$S + 4] ^ HEAP[$S + 8])) + HEAP[$W + 80] + 770255983;
      HEAP[$t0] = $1651;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1683 = ((HEAP[$S + 16] >>> 0 >>> 2 | HEAP[$S + 16] << 30) ^ (HEAP[$S + 16] >>> 0 >>> 13 | HEAP[$S + 16] << 19) ^ (HEAP[$S + 16] >>> 0 >>> 22 | HEAP[$S + 16] << 10)) + ((HEAP[$S + 16] | HEAP[$S + 20]) & HEAP[$S + 24] | HEAP[$S + 16] & HEAP[$S + 20]);
      HEAP[$t1] = $1683;
      
      
      
      var $1687 = HEAP[$S + 28] + HEAP[$t0];
      
      HEAP[$S + 28] = $1687;
      
      
      var $1691 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 12] = $1691;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1728 = HEAP[$S + 8] + ((HEAP[$S + 28] >>> 0 >>> 6 | HEAP[$S + 28] << 26) ^ (HEAP[$S + 28] >>> 0 >>> 11 | HEAP[$S + 28] << 21) ^ (HEAP[$S + 28] >>> 0 >>> 25 | HEAP[$S + 28] << 7)) + (HEAP[$S + 4] ^ HEAP[$S + 28] & (HEAP[$S] ^ HEAP[$S + 4])) + HEAP[$W + 84] + 1249150122;
      HEAP[$t0] = $1728;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1760 = ((HEAP[$S + 12] >>> 0 >>> 2 | HEAP[$S + 12] << 30) ^ (HEAP[$S + 12] >>> 0 >>> 13 | HEAP[$S + 12] << 19) ^ (HEAP[$S + 12] >>> 0 >>> 22 | HEAP[$S + 12] << 10)) + ((HEAP[$S + 12] | HEAP[$S + 16]) & HEAP[$S + 20] | HEAP[$S + 12] & HEAP[$S + 16]);
      HEAP[$t1] = $1760;
      
      
      
      var $1764 = HEAP[$S + 24] + HEAP[$t0];
      
      HEAP[$S + 24] = $1764;
      
      
      var $1768 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 8] = $1768;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1805 = HEAP[$S + 4] + ((HEAP[$S + 24] >>> 0 >>> 6 | HEAP[$S + 24] << 26) ^ (HEAP[$S + 24] >>> 0 >>> 11 | HEAP[$S + 24] << 21) ^ (HEAP[$S + 24] >>> 0 >>> 25 | HEAP[$S + 24] << 7)) + (HEAP[$S] ^ HEAP[$S + 24] & (HEAP[$S + 28] ^ HEAP[$S])) + HEAP[$W + 88] + 1555081692;
      HEAP[$t0] = $1805;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1837 = ((HEAP[$S + 8] >>> 0 >>> 2 | HEAP[$S + 8] << 30) ^ (HEAP[$S + 8] >>> 0 >>> 13 | HEAP[$S + 8] << 19) ^ (HEAP[$S + 8] >>> 0 >>> 22 | HEAP[$S + 8] << 10)) + ((HEAP[$S + 8] | HEAP[$S + 12]) & HEAP[$S + 16] | HEAP[$S + 8] & HEAP[$S + 12]);
      HEAP[$t1] = $1837;
      
      
      
      var $1841 = HEAP[$S + 20] + HEAP[$t0];
      
      HEAP[$S + 20] = $1841;
      
      
      var $1845 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 4] = $1845;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1882 = HEAP[$S] + ((HEAP[$S + 20] >>> 0 >>> 6 | HEAP[$S + 20] << 26) ^ (HEAP[$S + 20] >>> 0 >>> 11 | HEAP[$S + 20] << 21) ^ (HEAP[$S + 20] >>> 0 >>> 25 | HEAP[$S + 20] << 7)) + (HEAP[$S + 28] ^ HEAP[$S + 20] & (HEAP[$S + 24] ^ HEAP[$S + 28])) + HEAP[$W + 92] + 1996064986;
      HEAP[$t0] = $1882;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1914 = ((HEAP[$S + 4] >>> 0 >>> 2 | HEAP[$S + 4] << 30) ^ (HEAP[$S + 4] >>> 0 >>> 13 | HEAP[$S + 4] << 19) ^ (HEAP[$S + 4] >>> 0 >>> 22 | HEAP[$S + 4] << 10)) + ((HEAP[$S + 4] | HEAP[$S + 8]) & HEAP[$S + 12] | HEAP[$S + 4] & HEAP[$S + 8]);
      HEAP[$t1] = $1914;
      
      
      
      var $1918 = HEAP[$S + 16] + HEAP[$t0];
      
      HEAP[$S + 16] = $1918;
      
      
      var $1922 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S] = $1922;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1959 = HEAP[$S + 28] + ((HEAP[$S + 16] >>> 0 >>> 6 | HEAP[$S + 16] << 26) ^ (HEAP[$S + 16] >>> 0 >>> 11 | HEAP[$S + 16] << 21) ^ (HEAP[$S + 16] >>> 0 >>> 25 | HEAP[$S + 16] << 7)) + (HEAP[$S + 24] ^ HEAP[$S + 16] & (HEAP[$S + 20] ^ HEAP[$S + 24])) + HEAP[$W + 96] + -1740746414;
      HEAP[$t0] = $1959;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1991 = ((HEAP[$S] >>> 0 >>> 2 | HEAP[$S] << 30) ^ (HEAP[$S] >>> 0 >>> 13 | HEAP[$S] << 19) ^ (HEAP[$S] >>> 0 >>> 22 | HEAP[$S] << 10)) + ((HEAP[$S] | HEAP[$S + 4]) & HEAP[$S + 8] | HEAP[$S] & HEAP[$S + 4]);
      HEAP[$t1] = $1991;
      
      
      
      var $1995 = HEAP[$S + 12] + HEAP[$t0];
      
      HEAP[$S + 12] = $1995;
      
      
      var $1999 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 28] = $1999;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2036 = HEAP[$S + 24] + ((HEAP[$S + 12] >>> 0 >>> 6 | HEAP[$S + 12] << 26) ^ (HEAP[$S + 12] >>> 0 >>> 11 | HEAP[$S + 12] << 21) ^ (HEAP[$S + 12] >>> 0 >>> 25 | HEAP[$S + 12] << 7)) + (HEAP[$S + 20] ^ HEAP[$S + 12] & (HEAP[$S + 16] ^ HEAP[$S + 20])) + HEAP[$W + 100] + -1473132947;
      HEAP[$t0] = $2036;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2068 = ((HEAP[$S + 28] >>> 0 >>> 2 | HEAP[$S + 28] << 30) ^ (HEAP[$S + 28] >>> 0 >>> 13 | HEAP[$S + 28] << 19) ^ (HEAP[$S + 28] >>> 0 >>> 22 | HEAP[$S + 28] << 10)) + ((HEAP[$S + 28] | HEAP[$S]) & HEAP[$S + 4] | HEAP[$S + 28] & HEAP[$S]);
      HEAP[$t1] = $2068;
      
      
      
      var $2072 = HEAP[$S + 8] + HEAP[$t0];
      
      HEAP[$S + 8] = $2072;
      
      
      var $2076 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 24] = $2076;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2113 = HEAP[$S + 20] + ((HEAP[$S + 8] >>> 0 >>> 6 | HEAP[$S + 8] << 26) ^ (HEAP[$S + 8] >>> 0 >>> 11 | HEAP[$S + 8] << 21) ^ (HEAP[$S + 8] >>> 0 >>> 25 | HEAP[$S + 8] << 7)) + (HEAP[$S + 16] ^ HEAP[$S + 8] & (HEAP[$S + 12] ^ HEAP[$S + 16])) + HEAP[$W + 104] + -1341970488;
      HEAP[$t0] = $2113;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2145 = ((HEAP[$S + 24] >>> 0 >>> 2 | HEAP[$S + 24] << 30) ^ (HEAP[$S + 24] >>> 0 >>> 13 | HEAP[$S + 24] << 19) ^ (HEAP[$S + 24] >>> 0 >>> 22 | HEAP[$S + 24] << 10)) + ((HEAP[$S + 24] | HEAP[$S + 28]) & HEAP[$S] | HEAP[$S + 24] & HEAP[$S + 28]);
      HEAP[$t1] = $2145;
      
      
      
      var $2149 = HEAP[$S + 4] + HEAP[$t0];
      
      HEAP[$S + 4] = $2149;
      
      
      var $2153 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 20] = $2153;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2190 = HEAP[$S + 16] + ((HEAP[$S + 4] >>> 0 >>> 6 | HEAP[$S + 4] << 26) ^ (HEAP[$S + 4] >>> 0 >>> 11 | HEAP[$S + 4] << 21) ^ (HEAP[$S + 4] >>> 0 >>> 25 | HEAP[$S + 4] << 7)) + (HEAP[$S + 12] ^ HEAP[$S + 4] & (HEAP[$S + 8] ^ HEAP[$S + 12])) + HEAP[$W + 108] + -1084653625;
      HEAP[$t0] = $2190;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2222 = ((HEAP[$S + 20] >>> 0 >>> 2 | HEAP[$S + 20] << 30) ^ (HEAP[$S + 20] >>> 0 >>> 13 | HEAP[$S + 20] << 19) ^ (HEAP[$S + 20] >>> 0 >>> 22 | HEAP[$S + 20] << 10)) + ((HEAP[$S + 20] | HEAP[$S + 24]) & HEAP[$S + 28] | HEAP[$S + 20] & HEAP[$S + 24]);
      HEAP[$t1] = $2222;
      
      
      
      var $2226 = HEAP[$S] + HEAP[$t0];
      
      HEAP[$S] = $2226;
      
      
      var $2230 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 16] = $2230;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2267 = HEAP[$S + 12] + ((HEAP[$S] >>> 0 >>> 6 | HEAP[$S] << 26) ^ (HEAP[$S] >>> 0 >>> 11 | HEAP[$S] << 21) ^ (HEAP[$S] >>> 0 >>> 25 | HEAP[$S] << 7)) + (HEAP[$S + 8] ^ HEAP[$S] & (HEAP[$S + 4] ^ HEAP[$S + 8])) + HEAP[$W + 112] + -958395405;
      HEAP[$t0] = $2267;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2299 = ((HEAP[$S + 16] >>> 0 >>> 2 | HEAP[$S + 16] << 30) ^ (HEAP[$S + 16] >>> 0 >>> 13 | HEAP[$S + 16] << 19) ^ (HEAP[$S + 16] >>> 0 >>> 22 | HEAP[$S + 16] << 10)) + ((HEAP[$S + 16] | HEAP[$S + 20]) & HEAP[$S + 24] | HEAP[$S + 16] & HEAP[$S + 20]);
      HEAP[$t1] = $2299;
      
      
      
      var $2303 = HEAP[$S + 28] + HEAP[$t0];
      
      HEAP[$S + 28] = $2303;
      
      
      var $2307 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 12] = $2307;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2344 = HEAP[$S + 8] + ((HEAP[$S + 28] >>> 0 >>> 6 | HEAP[$S + 28] << 26) ^ (HEAP[$S + 28] >>> 0 >>> 11 | HEAP[$S + 28] << 21) ^ (HEAP[$S + 28] >>> 0 >>> 25 | HEAP[$S + 28] << 7)) + (HEAP[$S + 4] ^ HEAP[$S + 28] & (HEAP[$S] ^ HEAP[$S + 4])) + HEAP[$W + 116] + -710438585;
      HEAP[$t0] = $2344;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2376 = ((HEAP[$S + 12] >>> 0 >>> 2 | HEAP[$S + 12] << 30) ^ (HEAP[$S + 12] >>> 0 >>> 13 | HEAP[$S + 12] << 19) ^ (HEAP[$S + 12] >>> 0 >>> 22 | HEAP[$S + 12] << 10)) + ((HEAP[$S + 12] | HEAP[$S + 16]) & HEAP[$S + 20] | HEAP[$S + 12] & HEAP[$S + 16]);
      HEAP[$t1] = $2376;
      
      
      
      var $2380 = HEAP[$S + 24] + HEAP[$t0];
      
      HEAP[$S + 24] = $2380;
      
      
      var $2384 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 8] = $2384;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2421 = HEAP[$S + 4] + ((HEAP[$S + 24] >>> 0 >>> 6 | HEAP[$S + 24] << 26) ^ (HEAP[$S + 24] >>> 0 >>> 11 | HEAP[$S + 24] << 21) ^ (HEAP[$S + 24] >>> 0 >>> 25 | HEAP[$S + 24] << 7)) + (HEAP[$S] ^ HEAP[$S + 24] & (HEAP[$S + 28] ^ HEAP[$S])) + HEAP[$W + 120] + 113926993;
      HEAP[$t0] = $2421;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2453 = ((HEAP[$S + 8] >>> 0 >>> 2 | HEAP[$S + 8] << 30) ^ (HEAP[$S + 8] >>> 0 >>> 13 | HEAP[$S + 8] << 19) ^ (HEAP[$S + 8] >>> 0 >>> 22 | HEAP[$S + 8] << 10)) + ((HEAP[$S + 8] | HEAP[$S + 12]) & HEAP[$S + 16] | HEAP[$S + 8] & HEAP[$S + 12]);
      HEAP[$t1] = $2453;
      
      
      
      var $2457 = HEAP[$S + 20] + HEAP[$t0];
      
      HEAP[$S + 20] = $2457;
      
      
      var $2461 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 4] = $2461;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2498 = HEAP[$S] + ((HEAP[$S + 20] >>> 0 >>> 6 | HEAP[$S + 20] << 26) ^ (HEAP[$S + 20] >>> 0 >>> 11 | HEAP[$S + 20] << 21) ^ (HEAP[$S + 20] >>> 0 >>> 25 | HEAP[$S + 20] << 7)) + (HEAP[$S + 28] ^ HEAP[$S + 20] & (HEAP[$S + 24] ^ HEAP[$S + 28])) + HEAP[$W + 124] + 338241895;
      HEAP[$t0] = $2498;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2530 = ((HEAP[$S + 4] >>> 0 >>> 2 | HEAP[$S + 4] << 30) ^ (HEAP[$S + 4] >>> 0 >>> 13 | HEAP[$S + 4] << 19) ^ (HEAP[$S + 4] >>> 0 >>> 22 | HEAP[$S + 4] << 10)) + ((HEAP[$S + 4] | HEAP[$S + 8]) & HEAP[$S + 12] | HEAP[$S + 4] & HEAP[$S + 8]);
      HEAP[$t1] = $2530;
      
      
      
      var $2534 = HEAP[$S + 16] + HEAP[$t0];
      
      HEAP[$S + 16] = $2534;
      
      
      var $2538 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S] = $2538;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2575 = HEAP[$S + 28] + ((HEAP[$S + 16] >>> 0 >>> 6 | HEAP[$S + 16] << 26) ^ (HEAP[$S + 16] >>> 0 >>> 11 | HEAP[$S + 16] << 21) ^ (HEAP[$S + 16] >>> 0 >>> 25 | HEAP[$S + 16] << 7)) + (HEAP[$S + 24] ^ HEAP[$S + 16] & (HEAP[$S + 20] ^ HEAP[$S + 24])) + HEAP[$W + 128] + 666307205;
      HEAP[$t0] = $2575;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2607 = ((HEAP[$S] >>> 0 >>> 2 | HEAP[$S] << 30) ^ (HEAP[$S] >>> 0 >>> 13 | HEAP[$S] << 19) ^ (HEAP[$S] >>> 0 >>> 22 | HEAP[$S] << 10)) + ((HEAP[$S] | HEAP[$S + 4]) & HEAP[$S + 8] | HEAP[$S] & HEAP[$S + 4]);
      HEAP[$t1] = $2607;
      
      
      
      var $2611 = HEAP[$S + 12] + HEAP[$t0];
      
      HEAP[$S + 12] = $2611;
      
      
      var $2615 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 28] = $2615;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2652 = HEAP[$S + 24] + ((HEAP[$S + 12] >>> 0 >>> 6 | HEAP[$S + 12] << 26) ^ (HEAP[$S + 12] >>> 0 >>> 11 | HEAP[$S + 12] << 21) ^ (HEAP[$S + 12] >>> 0 >>> 25 | HEAP[$S + 12] << 7)) + (HEAP[$S + 20] ^ HEAP[$S + 12] & (HEAP[$S + 16] ^ HEAP[$S + 20])) + HEAP[$W + 132] + 773529912;
      HEAP[$t0] = $2652;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2684 = ((HEAP[$S + 28] >>> 0 >>> 2 | HEAP[$S + 28] << 30) ^ (HEAP[$S + 28] >>> 0 >>> 13 | HEAP[$S + 28] << 19) ^ (HEAP[$S + 28] >>> 0 >>> 22 | HEAP[$S + 28] << 10)) + ((HEAP[$S + 28] | HEAP[$S]) & HEAP[$S + 4] | HEAP[$S + 28] & HEAP[$S]);
      HEAP[$t1] = $2684;
      
      
      
      var $2688 = HEAP[$S + 8] + HEAP[$t0];
      
      HEAP[$S + 8] = $2688;
      
      
      var $2692 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 24] = $2692;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2729 = HEAP[$S + 20] + ((HEAP[$S + 8] >>> 0 >>> 6 | HEAP[$S + 8] << 26) ^ (HEAP[$S + 8] >>> 0 >>> 11 | HEAP[$S + 8] << 21) ^ (HEAP[$S + 8] >>> 0 >>> 25 | HEAP[$S + 8] << 7)) + (HEAP[$S + 16] ^ HEAP[$S + 8] & (HEAP[$S + 12] ^ HEAP[$S + 16])) + HEAP[$W + 136] + 1294757372;
      HEAP[$t0] = $2729;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2761 = ((HEAP[$S + 24] >>> 0 >>> 2 | HEAP[$S + 24] << 30) ^ (HEAP[$S + 24] >>> 0 >>> 13 | HEAP[$S + 24] << 19) ^ (HEAP[$S + 24] >>> 0 >>> 22 | HEAP[$S + 24] << 10)) + ((HEAP[$S + 24] | HEAP[$S + 28]) & HEAP[$S] | HEAP[$S + 24] & HEAP[$S + 28]);
      HEAP[$t1] = $2761;
      
      
      
      var $2765 = HEAP[$S + 4] + HEAP[$t0];
      
      HEAP[$S + 4] = $2765;
      
      
      var $2769 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 20] = $2769;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2806 = HEAP[$S + 16] + ((HEAP[$S + 4] >>> 0 >>> 6 | HEAP[$S + 4] << 26) ^ (HEAP[$S + 4] >>> 0 >>> 11 | HEAP[$S + 4] << 21) ^ (HEAP[$S + 4] >>> 0 >>> 25 | HEAP[$S + 4] << 7)) + (HEAP[$S + 12] ^ HEAP[$S + 4] & (HEAP[$S + 8] ^ HEAP[$S + 12])) + HEAP[$W + 140] + 1396182291;
      HEAP[$t0] = $2806;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2838 = ((HEAP[$S + 20] >>> 0 >>> 2 | HEAP[$S + 20] << 30) ^ (HEAP[$S + 20] >>> 0 >>> 13 | HEAP[$S + 20] << 19) ^ (HEAP[$S + 20] >>> 0 >>> 22 | HEAP[$S + 20] << 10)) + ((HEAP[$S + 20] | HEAP[$S + 24]) & HEAP[$S + 28] | HEAP[$S + 20] & HEAP[$S + 24]);
      HEAP[$t1] = $2838;
      
      
      
      var $2842 = HEAP[$S] + HEAP[$t0];
      
      HEAP[$S] = $2842;
      
      
      var $2846 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 16] = $2846;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2883 = HEAP[$S + 12] + ((HEAP[$S] >>> 0 >>> 6 | HEAP[$S] << 26) ^ (HEAP[$S] >>> 0 >>> 11 | HEAP[$S] << 21) ^ (HEAP[$S] >>> 0 >>> 25 | HEAP[$S] << 7)) + (HEAP[$S + 8] ^ HEAP[$S] & (HEAP[$S + 4] ^ HEAP[$S + 8])) + HEAP[$W + 144] + 1695183700;
      HEAP[$t0] = $2883;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2915 = ((HEAP[$S + 16] >>> 0 >>> 2 | HEAP[$S + 16] << 30) ^ (HEAP[$S + 16] >>> 0 >>> 13 | HEAP[$S + 16] << 19) ^ (HEAP[$S + 16] >>> 0 >>> 22 | HEAP[$S + 16] << 10)) + ((HEAP[$S + 16] | HEAP[$S + 20]) & HEAP[$S + 24] | HEAP[$S + 16] & HEAP[$S + 20]);
      HEAP[$t1] = $2915;
      
      
      
      var $2919 = HEAP[$S + 28] + HEAP[$t0];
      
      HEAP[$S + 28] = $2919;
      
      
      var $2923 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 12] = $2923;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2960 = HEAP[$S + 8] + ((HEAP[$S + 28] >>> 0 >>> 6 | HEAP[$S + 28] << 26) ^ (HEAP[$S + 28] >>> 0 >>> 11 | HEAP[$S + 28] << 21) ^ (HEAP[$S + 28] >>> 0 >>> 25 | HEAP[$S + 28] << 7)) + (HEAP[$S + 4] ^ HEAP[$S + 28] & (HEAP[$S] ^ HEAP[$S + 4])) + HEAP[$W + 148] + 1986661051;
      HEAP[$t0] = $2960;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2992 = ((HEAP[$S + 12] >>> 0 >>> 2 | HEAP[$S + 12] << 30) ^ (HEAP[$S + 12] >>> 0 >>> 13 | HEAP[$S + 12] << 19) ^ (HEAP[$S + 12] >>> 0 >>> 22 | HEAP[$S + 12] << 10)) + ((HEAP[$S + 12] | HEAP[$S + 16]) & HEAP[$S + 20] | HEAP[$S + 12] & HEAP[$S + 16]);
      HEAP[$t1] = $2992;
      
      
      
      var $2996 = HEAP[$S + 24] + HEAP[$t0];
      
      HEAP[$S + 24] = $2996;
      
      
      var $3000 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 8] = $3000;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3037 = HEAP[$S + 4] + ((HEAP[$S + 24] >>> 0 >>> 6 | HEAP[$S + 24] << 26) ^ (HEAP[$S + 24] >>> 0 >>> 11 | HEAP[$S + 24] << 21) ^ (HEAP[$S + 24] >>> 0 >>> 25 | HEAP[$S + 24] << 7)) + (HEAP[$S] ^ HEAP[$S + 24] & (HEAP[$S + 28] ^ HEAP[$S])) + HEAP[$W + 152] + -2117940946;
      HEAP[$t0] = $3037;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3069 = ((HEAP[$S + 8] >>> 0 >>> 2 | HEAP[$S + 8] << 30) ^ (HEAP[$S + 8] >>> 0 >>> 13 | HEAP[$S + 8] << 19) ^ (HEAP[$S + 8] >>> 0 >>> 22 | HEAP[$S + 8] << 10)) + ((HEAP[$S + 8] | HEAP[$S + 12]) & HEAP[$S + 16] | HEAP[$S + 8] & HEAP[$S + 12]);
      HEAP[$t1] = $3069;
      
      
      
      var $3073 = HEAP[$S + 20] + HEAP[$t0];
      
      HEAP[$S + 20] = $3073;
      
      
      var $3077 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 4] = $3077;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3114 = HEAP[$S] + ((HEAP[$S + 20] >>> 0 >>> 6 | HEAP[$S + 20] << 26) ^ (HEAP[$S + 20] >>> 0 >>> 11 | HEAP[$S + 20] << 21) ^ (HEAP[$S + 20] >>> 0 >>> 25 | HEAP[$S + 20] << 7)) + (HEAP[$S + 28] ^ HEAP[$S + 20] & (HEAP[$S + 24] ^ HEAP[$S + 28])) + HEAP[$W + 156] + -1838011259;
      HEAP[$t0] = $3114;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3146 = ((HEAP[$S + 4] >>> 0 >>> 2 | HEAP[$S + 4] << 30) ^ (HEAP[$S + 4] >>> 0 >>> 13 | HEAP[$S + 4] << 19) ^ (HEAP[$S + 4] >>> 0 >>> 22 | HEAP[$S + 4] << 10)) + ((HEAP[$S + 4] | HEAP[$S + 8]) & HEAP[$S + 12] | HEAP[$S + 4] & HEAP[$S + 8]);
      HEAP[$t1] = $3146;
      
      
      
      var $3150 = HEAP[$S + 16] + HEAP[$t0];
      
      HEAP[$S + 16] = $3150;
      
      
      var $3154 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S] = $3154;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3191 = HEAP[$S + 28] + ((HEAP[$S + 16] >>> 0 >>> 6 | HEAP[$S + 16] << 26) ^ (HEAP[$S + 16] >>> 0 >>> 11 | HEAP[$S + 16] << 21) ^ (HEAP[$S + 16] >>> 0 >>> 25 | HEAP[$S + 16] << 7)) + (HEAP[$S + 24] ^ HEAP[$S + 16] & (HEAP[$S + 20] ^ HEAP[$S + 24])) + HEAP[$W + 160] + -1564481375;
      HEAP[$t0] = $3191;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3223 = ((HEAP[$S] >>> 0 >>> 2 | HEAP[$S] << 30) ^ (HEAP[$S] >>> 0 >>> 13 | HEAP[$S] << 19) ^ (HEAP[$S] >>> 0 >>> 22 | HEAP[$S] << 10)) + ((HEAP[$S] | HEAP[$S + 4]) & HEAP[$S + 8] | HEAP[$S] & HEAP[$S + 4]);
      HEAP[$t1] = $3223;
      
      
      
      var $3227 = HEAP[$S + 12] + HEAP[$t0];
      
      HEAP[$S + 12] = $3227;
      
      
      var $3231 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 28] = $3231;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3268 = HEAP[$S + 24] + ((HEAP[$S + 12] >>> 0 >>> 6 | HEAP[$S + 12] << 26) ^ (HEAP[$S + 12] >>> 0 >>> 11 | HEAP[$S + 12] << 21) ^ (HEAP[$S + 12] >>> 0 >>> 25 | HEAP[$S + 12] << 7)) + (HEAP[$S + 20] ^ HEAP[$S + 12] & (HEAP[$S + 16] ^ HEAP[$S + 20])) + HEAP[$W + 164] + -1474664885;
      HEAP[$t0] = $3268;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3300 = ((HEAP[$S + 28] >>> 0 >>> 2 | HEAP[$S + 28] << 30) ^ (HEAP[$S + 28] >>> 0 >>> 13 | HEAP[$S + 28] << 19) ^ (HEAP[$S + 28] >>> 0 >>> 22 | HEAP[$S + 28] << 10)) + ((HEAP[$S + 28] | HEAP[$S]) & HEAP[$S + 4] | HEAP[$S + 28] & HEAP[$S]);
      HEAP[$t1] = $3300;
      
      
      
      var $3304 = HEAP[$S + 8] + HEAP[$t0];
      
      HEAP[$S + 8] = $3304;
      
      
      var $3308 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 24] = $3308;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3345 = HEAP[$S + 20] + ((HEAP[$S + 8] >>> 0 >>> 6 | HEAP[$S + 8] << 26) ^ (HEAP[$S + 8] >>> 0 >>> 11 | HEAP[$S + 8] << 21) ^ (HEAP[$S + 8] >>> 0 >>> 25 | HEAP[$S + 8] << 7)) + (HEAP[$S + 16] ^ HEAP[$S + 8] & (HEAP[$S + 12] ^ HEAP[$S + 16])) + HEAP[$W + 168] + -1035236496;
      HEAP[$t0] = $3345;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3377 = ((HEAP[$S + 24] >>> 0 >>> 2 | HEAP[$S + 24] << 30) ^ (HEAP[$S + 24] >>> 0 >>> 13 | HEAP[$S + 24] << 19) ^ (HEAP[$S + 24] >>> 0 >>> 22 | HEAP[$S + 24] << 10)) + ((HEAP[$S + 24] | HEAP[$S + 28]) & HEAP[$S] | HEAP[$S + 24] & HEAP[$S + 28]);
      HEAP[$t1] = $3377;
      
      
      
      var $3381 = HEAP[$S + 4] + HEAP[$t0];
      
      HEAP[$S + 4] = $3381;
      
      
      var $3385 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 20] = $3385;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3422 = HEAP[$S + 16] + ((HEAP[$S + 4] >>> 0 >>> 6 | HEAP[$S + 4] << 26) ^ (HEAP[$S + 4] >>> 0 >>> 11 | HEAP[$S + 4] << 21) ^ (HEAP[$S + 4] >>> 0 >>> 25 | HEAP[$S + 4] << 7)) + (HEAP[$S + 12] ^ HEAP[$S + 4] & (HEAP[$S + 8] ^ HEAP[$S + 12])) + HEAP[$W + 172] + -949202525;
      HEAP[$t0] = $3422;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3454 = ((HEAP[$S + 20] >>> 0 >>> 2 | HEAP[$S + 20] << 30) ^ (HEAP[$S + 20] >>> 0 >>> 13 | HEAP[$S + 20] << 19) ^ (HEAP[$S + 20] >>> 0 >>> 22 | HEAP[$S + 20] << 10)) + ((HEAP[$S + 20] | HEAP[$S + 24]) & HEAP[$S + 28] | HEAP[$S + 20] & HEAP[$S + 24]);
      HEAP[$t1] = $3454;
      
      
      
      var $3458 = HEAP[$S] + HEAP[$t0];
      
      HEAP[$S] = $3458;
      
      
      var $3462 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 16] = $3462;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3499 = HEAP[$S + 12] + ((HEAP[$S] >>> 0 >>> 6 | HEAP[$S] << 26) ^ (HEAP[$S] >>> 0 >>> 11 | HEAP[$S] << 21) ^ (HEAP[$S] >>> 0 >>> 25 | HEAP[$S] << 7)) + (HEAP[$S + 8] ^ HEAP[$S] & (HEAP[$S + 4] ^ HEAP[$S + 8])) + HEAP[$W + 176] + -778901479;
      HEAP[$t0] = $3499;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3531 = ((HEAP[$S + 16] >>> 0 >>> 2 | HEAP[$S + 16] << 30) ^ (HEAP[$S + 16] >>> 0 >>> 13 | HEAP[$S + 16] << 19) ^ (HEAP[$S + 16] >>> 0 >>> 22 | HEAP[$S + 16] << 10)) + ((HEAP[$S + 16] | HEAP[$S + 20]) & HEAP[$S + 24] | HEAP[$S + 16] & HEAP[$S + 20]);
      HEAP[$t1] = $3531;
      
      
      
      var $3535 = HEAP[$S + 28] + HEAP[$t0];
      
      HEAP[$S + 28] = $3535;
      
      
      var $3539 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 12] = $3539;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3576 = HEAP[$S + 8] + ((HEAP[$S + 28] >>> 0 >>> 6 | HEAP[$S + 28] << 26) ^ (HEAP[$S + 28] >>> 0 >>> 11 | HEAP[$S + 28] << 21) ^ (HEAP[$S + 28] >>> 0 >>> 25 | HEAP[$S + 28] << 7)) + (HEAP[$S + 4] ^ HEAP[$S + 28] & (HEAP[$S] ^ HEAP[$S + 4])) + HEAP[$W + 180] + -694614492;
      HEAP[$t0] = $3576;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3608 = ((HEAP[$S + 12] >>> 0 >>> 2 | HEAP[$S + 12] << 30) ^ (HEAP[$S + 12] >>> 0 >>> 13 | HEAP[$S + 12] << 19) ^ (HEAP[$S + 12] >>> 0 >>> 22 | HEAP[$S + 12] << 10)) + ((HEAP[$S + 12] | HEAP[$S + 16]) & HEAP[$S + 20] | HEAP[$S + 12] & HEAP[$S + 16]);
      HEAP[$t1] = $3608;
      
      
      
      var $3612 = HEAP[$S + 24] + HEAP[$t0];
      
      HEAP[$S + 24] = $3612;
      
      
      var $3616 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 8] = $3616;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3653 = HEAP[$S + 4] + ((HEAP[$S + 24] >>> 0 >>> 6 | HEAP[$S + 24] << 26) ^ (HEAP[$S + 24] >>> 0 >>> 11 | HEAP[$S + 24] << 21) ^ (HEAP[$S + 24] >>> 0 >>> 25 | HEAP[$S + 24] << 7)) + (HEAP[$S] ^ HEAP[$S + 24] & (HEAP[$S + 28] ^ HEAP[$S])) + HEAP[$W + 184] + -200395387;
      HEAP[$t0] = $3653;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3685 = ((HEAP[$S + 8] >>> 0 >>> 2 | HEAP[$S + 8] << 30) ^ (HEAP[$S + 8] >>> 0 >>> 13 | HEAP[$S + 8] << 19) ^ (HEAP[$S + 8] >>> 0 >>> 22 | HEAP[$S + 8] << 10)) + ((HEAP[$S + 8] | HEAP[$S + 12]) & HEAP[$S + 16] | HEAP[$S + 8] & HEAP[$S + 12]);
      HEAP[$t1] = $3685;
      
      
      
      var $3689 = HEAP[$S + 20] + HEAP[$t0];
      
      HEAP[$S + 20] = $3689;
      
      
      var $3693 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 4] = $3693;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3730 = HEAP[$S] + ((HEAP[$S + 20] >>> 0 >>> 6 | HEAP[$S + 20] << 26) ^ (HEAP[$S + 20] >>> 0 >>> 11 | HEAP[$S + 20] << 21) ^ (HEAP[$S + 20] >>> 0 >>> 25 | HEAP[$S + 20] << 7)) + (HEAP[$S + 28] ^ HEAP[$S + 20] & (HEAP[$S + 24] ^ HEAP[$S + 28])) + HEAP[$W + 188] + 275423344;
      HEAP[$t0] = $3730;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3762 = ((HEAP[$S + 4] >>> 0 >>> 2 | HEAP[$S + 4] << 30) ^ (HEAP[$S + 4] >>> 0 >>> 13 | HEAP[$S + 4] << 19) ^ (HEAP[$S + 4] >>> 0 >>> 22 | HEAP[$S + 4] << 10)) + ((HEAP[$S + 4] | HEAP[$S + 8]) & HEAP[$S + 12] | HEAP[$S + 4] & HEAP[$S + 8]);
      HEAP[$t1] = $3762;
      
      
      
      var $3766 = HEAP[$S + 16] + HEAP[$t0];
      
      HEAP[$S + 16] = $3766;
      
      
      var $3770 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S] = $3770;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3807 = HEAP[$S + 28] + ((HEAP[$S + 16] >>> 0 >>> 6 | HEAP[$S + 16] << 26) ^ (HEAP[$S + 16] >>> 0 >>> 11 | HEAP[$S + 16] << 21) ^ (HEAP[$S + 16] >>> 0 >>> 25 | HEAP[$S + 16] << 7)) + (HEAP[$S + 24] ^ HEAP[$S + 16] & (HEAP[$S + 20] ^ HEAP[$S + 24])) + HEAP[$W + 192] + 430227734;
      HEAP[$t0] = $3807;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3839 = ((HEAP[$S] >>> 0 >>> 2 | HEAP[$S] << 30) ^ (HEAP[$S] >>> 0 >>> 13 | HEAP[$S] << 19) ^ (HEAP[$S] >>> 0 >>> 22 | HEAP[$S] << 10)) + ((HEAP[$S] | HEAP[$S + 4]) & HEAP[$S + 8] | HEAP[$S] & HEAP[$S + 4]);
      HEAP[$t1] = $3839;
      
      
      
      var $3843 = HEAP[$S + 12] + HEAP[$t0];
      
      HEAP[$S + 12] = $3843;
      
      
      var $3847 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 28] = $3847;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3884 = HEAP[$S + 24] + ((HEAP[$S + 12] >>> 0 >>> 6 | HEAP[$S + 12] << 26) ^ (HEAP[$S + 12] >>> 0 >>> 11 | HEAP[$S + 12] << 21) ^ (HEAP[$S + 12] >>> 0 >>> 25 | HEAP[$S + 12] << 7)) + (HEAP[$S + 20] ^ HEAP[$S + 12] & (HEAP[$S + 16] ^ HEAP[$S + 20])) + HEAP[$W + 196] + 506948616;
      HEAP[$t0] = $3884;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3916 = ((HEAP[$S + 28] >>> 0 >>> 2 | HEAP[$S + 28] << 30) ^ (HEAP[$S + 28] >>> 0 >>> 13 | HEAP[$S + 28] << 19) ^ (HEAP[$S + 28] >>> 0 >>> 22 | HEAP[$S + 28] << 10)) + ((HEAP[$S + 28] | HEAP[$S]) & HEAP[$S + 4] | HEAP[$S + 28] & HEAP[$S]);
      HEAP[$t1] = $3916;
      
      
      
      var $3920 = HEAP[$S + 8] + HEAP[$t0];
      
      HEAP[$S + 8] = $3920;
      
      
      var $3924 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 24] = $3924;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3961 = HEAP[$S + 20] + ((HEAP[$S + 8] >>> 0 >>> 6 | HEAP[$S + 8] << 26) ^ (HEAP[$S + 8] >>> 0 >>> 11 | HEAP[$S + 8] << 21) ^ (HEAP[$S + 8] >>> 0 >>> 25 | HEAP[$S + 8] << 7)) + (HEAP[$S + 16] ^ HEAP[$S + 8] & (HEAP[$S + 12] ^ HEAP[$S + 16])) + HEAP[$W + 200] + 659060556;
      HEAP[$t0] = $3961;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3993 = ((HEAP[$S + 24] >>> 0 >>> 2 | HEAP[$S + 24] << 30) ^ (HEAP[$S + 24] >>> 0 >>> 13 | HEAP[$S + 24] << 19) ^ (HEAP[$S + 24] >>> 0 >>> 22 | HEAP[$S + 24] << 10)) + ((HEAP[$S + 24] | HEAP[$S + 28]) & HEAP[$S] | HEAP[$S + 24] & HEAP[$S + 28]);
      HEAP[$t1] = $3993;
      
      
      
      var $3997 = HEAP[$S + 4] + HEAP[$t0];
      
      HEAP[$S + 4] = $3997;
      
      
      var $4001 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 20] = $4001;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4038 = HEAP[$S + 16] + ((HEAP[$S + 4] >>> 0 >>> 6 | HEAP[$S + 4] << 26) ^ (HEAP[$S + 4] >>> 0 >>> 11 | HEAP[$S + 4] << 21) ^ (HEAP[$S + 4] >>> 0 >>> 25 | HEAP[$S + 4] << 7)) + (HEAP[$S + 12] ^ HEAP[$S + 4] & (HEAP[$S + 8] ^ HEAP[$S + 12])) + HEAP[$W + 204] + 883997877;
      HEAP[$t0] = $4038;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4070 = ((HEAP[$S + 20] >>> 0 >>> 2 | HEAP[$S + 20] << 30) ^ (HEAP[$S + 20] >>> 0 >>> 13 | HEAP[$S + 20] << 19) ^ (HEAP[$S + 20] >>> 0 >>> 22 | HEAP[$S + 20] << 10)) + ((HEAP[$S + 20] | HEAP[$S + 24]) & HEAP[$S + 28] | HEAP[$S + 20] & HEAP[$S + 24]);
      HEAP[$t1] = $4070;
      
      
      
      var $4074 = HEAP[$S] + HEAP[$t0];
      
      HEAP[$S] = $4074;
      
      
      var $4078 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 16] = $4078;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4115 = HEAP[$S + 12] + ((HEAP[$S] >>> 0 >>> 6 | HEAP[$S] << 26) ^ (HEAP[$S] >>> 0 >>> 11 | HEAP[$S] << 21) ^ (HEAP[$S] >>> 0 >>> 25 | HEAP[$S] << 7)) + (HEAP[$S + 8] ^ HEAP[$S] & (HEAP[$S + 4] ^ HEAP[$S + 8])) + HEAP[$W + 208] + 958139571;
      HEAP[$t0] = $4115;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4147 = ((HEAP[$S + 16] >>> 0 >>> 2 | HEAP[$S + 16] << 30) ^ (HEAP[$S + 16] >>> 0 >>> 13 | HEAP[$S + 16] << 19) ^ (HEAP[$S + 16] >>> 0 >>> 22 | HEAP[$S + 16] << 10)) + ((HEAP[$S + 16] | HEAP[$S + 20]) & HEAP[$S + 24] | HEAP[$S + 16] & HEAP[$S + 20]);
      HEAP[$t1] = $4147;
      
      
      
      var $4151 = HEAP[$S + 28] + HEAP[$t0];
      
      HEAP[$S + 28] = $4151;
      
      
      var $4155 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 12] = $4155;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4192 = HEAP[$S + 8] + ((HEAP[$S + 28] >>> 0 >>> 6 | HEAP[$S + 28] << 26) ^ (HEAP[$S + 28] >>> 0 >>> 11 | HEAP[$S + 28] << 21) ^ (HEAP[$S + 28] >>> 0 >>> 25 | HEAP[$S + 28] << 7)) + (HEAP[$S + 4] ^ HEAP[$S + 28] & (HEAP[$S] ^ HEAP[$S + 4])) + HEAP[$W + 212] + 1322822218;
      HEAP[$t0] = $4192;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4224 = ((HEAP[$S + 12] >>> 0 >>> 2 | HEAP[$S + 12] << 30) ^ (HEAP[$S + 12] >>> 0 >>> 13 | HEAP[$S + 12] << 19) ^ (HEAP[$S + 12] >>> 0 >>> 22 | HEAP[$S + 12] << 10)) + ((HEAP[$S + 12] | HEAP[$S + 16]) & HEAP[$S + 20] | HEAP[$S + 12] & HEAP[$S + 16]);
      HEAP[$t1] = $4224;
      
      
      
      var $4228 = HEAP[$S + 24] + HEAP[$t0];
      
      HEAP[$S + 24] = $4228;
      
      
      var $4232 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 8] = $4232;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4269 = HEAP[$S + 4] + ((HEAP[$S + 24] >>> 0 >>> 6 | HEAP[$S + 24] << 26) ^ (HEAP[$S + 24] >>> 0 >>> 11 | HEAP[$S + 24] << 21) ^ (HEAP[$S + 24] >>> 0 >>> 25 | HEAP[$S + 24] << 7)) + (HEAP[$S] ^ HEAP[$S + 24] & (HEAP[$S + 28] ^ HEAP[$S])) + HEAP[$W + 216] + 1537002063;
      HEAP[$t0] = $4269;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4301 = ((HEAP[$S + 8] >>> 0 >>> 2 | HEAP[$S + 8] << 30) ^ (HEAP[$S + 8] >>> 0 >>> 13 | HEAP[$S + 8] << 19) ^ (HEAP[$S + 8] >>> 0 >>> 22 | HEAP[$S + 8] << 10)) + ((HEAP[$S + 8] | HEAP[$S + 12]) & HEAP[$S + 16] | HEAP[$S + 8] & HEAP[$S + 12]);
      HEAP[$t1] = $4301;
      
      
      
      var $4305 = HEAP[$S + 20] + HEAP[$t0];
      
      HEAP[$S + 20] = $4305;
      
      
      var $4309 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 4] = $4309;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4346 = HEAP[$S] + ((HEAP[$S + 20] >>> 0 >>> 6 | HEAP[$S + 20] << 26) ^ (HEAP[$S + 20] >>> 0 >>> 11 | HEAP[$S + 20] << 21) ^ (HEAP[$S + 20] >>> 0 >>> 25 | HEAP[$S + 20] << 7)) + (HEAP[$S + 28] ^ HEAP[$S + 20] & (HEAP[$S + 24] ^ HEAP[$S + 28])) + HEAP[$W + 220] + 1747873779;
      HEAP[$t0] = $4346;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4378 = ((HEAP[$S + 4] >>> 0 >>> 2 | HEAP[$S + 4] << 30) ^ (HEAP[$S + 4] >>> 0 >>> 13 | HEAP[$S + 4] << 19) ^ (HEAP[$S + 4] >>> 0 >>> 22 | HEAP[$S + 4] << 10)) + ((HEAP[$S + 4] | HEAP[$S + 8]) & HEAP[$S + 12] | HEAP[$S + 4] & HEAP[$S + 8]);
      HEAP[$t1] = $4378;
      
      
      
      var $4382 = HEAP[$S + 16] + HEAP[$t0];
      
      HEAP[$S + 16] = $4382;
      
      
      var $4386 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S] = $4386;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4423 = HEAP[$S + 28] + ((HEAP[$S + 16] >>> 0 >>> 6 | HEAP[$S + 16] << 26) ^ (HEAP[$S + 16] >>> 0 >>> 11 | HEAP[$S + 16] << 21) ^ (HEAP[$S + 16] >>> 0 >>> 25 | HEAP[$S + 16] << 7)) + (HEAP[$S + 24] ^ HEAP[$S + 16] & (HEAP[$S + 20] ^ HEAP[$S + 24])) + HEAP[$W + 224] + 1955562222;
      HEAP[$t0] = $4423;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4455 = ((HEAP[$S] >>> 0 >>> 2 | HEAP[$S] << 30) ^ (HEAP[$S] >>> 0 >>> 13 | HEAP[$S] << 19) ^ (HEAP[$S] >>> 0 >>> 22 | HEAP[$S] << 10)) + ((HEAP[$S] | HEAP[$S + 4]) & HEAP[$S + 8] | HEAP[$S] & HEAP[$S + 4]);
      HEAP[$t1] = $4455;
      
      
      
      var $4459 = HEAP[$S + 12] + HEAP[$t0];
      
      HEAP[$S + 12] = $4459;
      
      
      var $4463 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 28] = $4463;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4500 = HEAP[$S + 24] + ((HEAP[$S + 12] >>> 0 >>> 6 | HEAP[$S + 12] << 26) ^ (HEAP[$S + 12] >>> 0 >>> 11 | HEAP[$S + 12] << 21) ^ (HEAP[$S + 12] >>> 0 >>> 25 | HEAP[$S + 12] << 7)) + (HEAP[$S + 20] ^ HEAP[$S + 12] & (HEAP[$S + 16] ^ HEAP[$S + 20])) + HEAP[$W + 228] + 2024104815;
      HEAP[$t0] = $4500;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4532 = ((HEAP[$S + 28] >>> 0 >>> 2 | HEAP[$S + 28] << 30) ^ (HEAP[$S + 28] >>> 0 >>> 13 | HEAP[$S + 28] << 19) ^ (HEAP[$S + 28] >>> 0 >>> 22 | HEAP[$S + 28] << 10)) + ((HEAP[$S + 28] | HEAP[$S]) & HEAP[$S + 4] | HEAP[$S + 28] & HEAP[$S]);
      HEAP[$t1] = $4532;
      
      
      
      var $4536 = HEAP[$S + 8] + HEAP[$t0];
      
      HEAP[$S + 8] = $4536;
      
      
      var $4540 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 24] = $4540;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4577 = HEAP[$S + 20] + ((HEAP[$S + 8] >>> 0 >>> 6 | HEAP[$S + 8] << 26) ^ (HEAP[$S + 8] >>> 0 >>> 11 | HEAP[$S + 8] << 21) ^ (HEAP[$S + 8] >>> 0 >>> 25 | HEAP[$S + 8] << 7)) + (HEAP[$S + 16] ^ HEAP[$S + 8] & (HEAP[$S + 12] ^ HEAP[$S + 16])) + HEAP[$W + 232] + -2067236844;
      HEAP[$t0] = $4577;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4609 = ((HEAP[$S + 24] >>> 0 >>> 2 | HEAP[$S + 24] << 30) ^ (HEAP[$S + 24] >>> 0 >>> 13 | HEAP[$S + 24] << 19) ^ (HEAP[$S + 24] >>> 0 >>> 22 | HEAP[$S + 24] << 10)) + ((HEAP[$S + 24] | HEAP[$S + 28]) & HEAP[$S] | HEAP[$S + 24] & HEAP[$S + 28]);
      HEAP[$t1] = $4609;
      
      
      
      var $4613 = HEAP[$S + 4] + HEAP[$t0];
      
      HEAP[$S + 4] = $4613;
      
      
      var $4617 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 20] = $4617;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4654 = HEAP[$S + 16] + ((HEAP[$S + 4] >>> 0 >>> 6 | HEAP[$S + 4] << 26) ^ (HEAP[$S + 4] >>> 0 >>> 11 | HEAP[$S + 4] << 21) ^ (HEAP[$S + 4] >>> 0 >>> 25 | HEAP[$S + 4] << 7)) + (HEAP[$S + 12] ^ HEAP[$S + 4] & (HEAP[$S + 8] ^ HEAP[$S + 12])) + HEAP[$W + 236] + -1933114872;
      HEAP[$t0] = $4654;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4686 = ((HEAP[$S + 20] >>> 0 >>> 2 | HEAP[$S + 20] << 30) ^ (HEAP[$S + 20] >>> 0 >>> 13 | HEAP[$S + 20] << 19) ^ (HEAP[$S + 20] >>> 0 >>> 22 | HEAP[$S + 20] << 10)) + ((HEAP[$S + 20] | HEAP[$S + 24]) & HEAP[$S + 28] | HEAP[$S + 20] & HEAP[$S + 24]);
      HEAP[$t1] = $4686;
      
      
      
      var $4690 = HEAP[$S] + HEAP[$t0];
      
      HEAP[$S] = $4690;
      
      
      var $4694 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 16] = $4694;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4731 = HEAP[$S + 12] + ((HEAP[$S] >>> 0 >>> 6 | HEAP[$S] << 26) ^ (HEAP[$S] >>> 0 >>> 11 | HEAP[$S] << 21) ^ (HEAP[$S] >>> 0 >>> 25 | HEAP[$S] << 7)) + (HEAP[$S + 8] ^ HEAP[$S] & (HEAP[$S + 4] ^ HEAP[$S + 8])) + HEAP[$W + 240] + -1866530822;
      HEAP[$t0] = $4731;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4763 = ((HEAP[$S + 16] >>> 0 >>> 2 | HEAP[$S + 16] << 30) ^ (HEAP[$S + 16] >>> 0 >>> 13 | HEAP[$S + 16] << 19) ^ (HEAP[$S + 16] >>> 0 >>> 22 | HEAP[$S + 16] << 10)) + ((HEAP[$S + 16] | HEAP[$S + 20]) & HEAP[$S + 24] | HEAP[$S + 16] & HEAP[$S + 20]);
      HEAP[$t1] = $4763;
      
      
      
      var $4767 = HEAP[$S + 28] + HEAP[$t0];
      
      HEAP[$S + 28] = $4767;
      
      
      var $4771 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 12] = $4771;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4808 = HEAP[$S + 8] + ((HEAP[$S + 28] >>> 0 >>> 6 | HEAP[$S + 28] << 26) ^ (HEAP[$S + 28] >>> 0 >>> 11 | HEAP[$S + 28] << 21) ^ (HEAP[$S + 28] >>> 0 >>> 25 | HEAP[$S + 28] << 7)) + (HEAP[$S + 4] ^ HEAP[$S + 28] & (HEAP[$S] ^ HEAP[$S + 4])) + HEAP[$W + 244] + -1538233109;
      HEAP[$t0] = $4808;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4840 = ((HEAP[$S + 12] >>> 0 >>> 2 | HEAP[$S + 12] << 30) ^ (HEAP[$S + 12] >>> 0 >>> 13 | HEAP[$S + 12] << 19) ^ (HEAP[$S + 12] >>> 0 >>> 22 | HEAP[$S + 12] << 10)) + ((HEAP[$S + 12] | HEAP[$S + 16]) & HEAP[$S + 20] | HEAP[$S + 12] & HEAP[$S + 16]);
      HEAP[$t1] = $4840;
      
      
      
      var $4844 = HEAP[$S + 24] + HEAP[$t0];
      
      HEAP[$S + 24] = $4844;
      
      
      var $4848 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 8] = $4848;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4885 = HEAP[$S + 4] + ((HEAP[$S + 24] >>> 0 >>> 6 | HEAP[$S + 24] << 26) ^ (HEAP[$S + 24] >>> 0 >>> 11 | HEAP[$S + 24] << 21) ^ (HEAP[$S + 24] >>> 0 >>> 25 | HEAP[$S + 24] << 7)) + (HEAP[$S] ^ HEAP[$S + 24] & (HEAP[$S + 28] ^ HEAP[$S])) + HEAP[$W + 248] + -1090935817;
      HEAP[$t0] = $4885;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4917 = ((HEAP[$S + 8] >>> 0 >>> 2 | HEAP[$S + 8] << 30) ^ (HEAP[$S + 8] >>> 0 >>> 13 | HEAP[$S + 8] << 19) ^ (HEAP[$S + 8] >>> 0 >>> 22 | HEAP[$S + 8] << 10)) + ((HEAP[$S + 8] | HEAP[$S + 12]) & HEAP[$S + 16] | HEAP[$S + 8] & HEAP[$S + 12]);
      HEAP[$t1] = $4917;
      
      
      
      var $4921 = HEAP[$S + 20] + HEAP[$t0];
      
      HEAP[$S + 20] = $4921;
      
      
      var $4925 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 4] = $4925;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4962 = HEAP[$S] + ((HEAP[$S + 20] >>> 0 >>> 6 | HEAP[$S + 20] << 26) ^ (HEAP[$S + 20] >>> 0 >>> 11 | HEAP[$S + 20] << 21) ^ (HEAP[$S + 20] >>> 0 >>> 25 | HEAP[$S + 20] << 7)) + (HEAP[$S + 28] ^ HEAP[$S + 20] & (HEAP[$S + 24] ^ HEAP[$S + 28])) + HEAP[$W + 252] + -965641998;
      HEAP[$t0] = $4962;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4994 = ((HEAP[$S + 4] >>> 0 >>> 2 | HEAP[$S + 4] << 30) ^ (HEAP[$S + 4] >>> 0 >>> 13 | HEAP[$S + 4] << 19) ^ (HEAP[$S + 4] >>> 0 >>> 22 | HEAP[$S + 4] << 10)) + ((HEAP[$S + 4] | HEAP[$S + 8]) & HEAP[$S + 12] | HEAP[$S + 4] & HEAP[$S + 8]);
      HEAP[$t1] = $4994;
      
      
      
      var $4998 = HEAP[$S + 16] + HEAP[$t0];
      
      HEAP[$S + 16] = $4998;
      
      
      var $5002 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S] = $5002;
      HEAP[$i] = 0;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      
      
      
      
      
      var $5013 = HEAP[HEAP[$sha_info_addr] + 8 + HEAP[$i] * 4] + HEAP[$S + HEAP[$i] * 4];
      
      
      var $5016 = HEAP[$sha_info_addr] + 8 + HEAP[$i] * 4;
      HEAP[$5016] = $5013;
      
      var $5018 = HEAP[$i] + 1;
      HEAP[$i] = $5018;
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$i] <= 7) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
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
  function _sha_init($sha_info) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $sha_info_addr = __stackBase__;
      var $i = __stackBase__ + 4;
      
      HEAP[$sha_info_addr] = $sha_info;
      HEAP[$i] = 1;
      
      var $1 = HEAP[$sha_info_addr] + 112;
      HEAP[$1] = 0;
      
      
      
      if (HEAP[$i] == 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $5 = HEAP[$sha_info_addr] + 112;
      HEAP[$5] = 1;
      __label__ = 2;
      break;
     case 2:
      
      
      var $8 = HEAP[$sha_info_addr] + 8;
      HEAP[$8] = 1779033703;
      
      
      var $11 = HEAP[$sha_info_addr] + 8 + 4;
      HEAP[$11] = -1150833019;
      
      
      var $14 = HEAP[$sha_info_addr] + 8 + 8;
      HEAP[$14] = 1013904242;
      
      
      var $17 = HEAP[$sha_info_addr] + 8 + 12;
      HEAP[$17] = -1521486534;
      
      
      var $20 = HEAP[$sha_info_addr] + 8 + 16;
      HEAP[$20] = 1359893119;
      
      
      var $23 = HEAP[$sha_info_addr] + 8 + 20;
      HEAP[$23] = -1694144372;
      
      
      var $26 = HEAP[$sha_info_addr] + 8 + 24;
      HEAP[$26] = 528734635;
      
      
      var $29 = HEAP[$sha_info_addr] + 8 + 28;
      HEAP[$29] = 1541459225;
      
      var $31 = HEAP[$sha_info_addr] + 40;
      HEAP[$31] = 0;
      
      var $33 = HEAP[$sha_info_addr] + 44;
      HEAP[$33] = 0;
      
      var $35 = HEAP[$sha_info_addr] + 116;
      HEAP[$35] = 0;
      
      var $37 = HEAP[$sha_info_addr] + 120;
      HEAP[$37] = 32;
      __label__ = 3;
      break;
     case 3:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sha224_init($sha_info) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $sha_info_addr = __stackBase__;
      var $i = __stackBase__ + 4;
      
      HEAP[$sha_info_addr] = $sha_info;
      HEAP[$i] = 1;
      
      var $1 = HEAP[$sha_info_addr] + 112;
      HEAP[$1] = 0;
      
      
      
      if (HEAP[$i] == 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $5 = HEAP[$sha_info_addr] + 112;
      HEAP[$5] = 1;
      __label__ = 2;
      break;
     case 2:
      
      
      var $8 = HEAP[$sha_info_addr] + 8;
      HEAP[$8] = -1056596264;
      
      
      var $11 = HEAP[$sha_info_addr] + 8 + 4;
      HEAP[$11] = 914150663;
      
      
      var $14 = HEAP[$sha_info_addr] + 8 + 8;
      HEAP[$14] = 812702999;
      
      
      var $17 = HEAP[$sha_info_addr] + 8 + 12;
      HEAP[$17] = -150054599;
      
      
      var $20 = HEAP[$sha_info_addr] + 8 + 16;
      HEAP[$20] = -4191439;
      
      
      var $23 = HEAP[$sha_info_addr] + 8 + 20;
      HEAP[$23] = 1750603025;
      
      
      var $26 = HEAP[$sha_info_addr] + 8 + 24;
      HEAP[$26] = 1694076839;
      
      
      var $29 = HEAP[$sha_info_addr] + 8 + 28;
      HEAP[$29] = -1090891868;
      
      var $31 = HEAP[$sha_info_addr] + 40;
      HEAP[$31] = 0;
      
      var $33 = HEAP[$sha_info_addr] + 44;
      HEAP[$33] = 0;
      
      var $35 = HEAP[$sha_info_addr] + 116;
      HEAP[$35] = 0;
      
      var $37 = HEAP[$sha_info_addr] + 120;
      HEAP[$37] = 28;
      __label__ = 3;
      break;
     case 3:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sha_update($sha_info, $buffer, $count) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $sha_info_addr = __stackBase__;
      var $buffer_addr = __stackBase__ + 4;
      var $count_addr = __stackBase__ + 8;
      var $i = __stackBase__ + 12;
      var $clo = __stackBase__ + 16;
      
      HEAP[$sha_info_addr] = $sha_info;
      HEAP[$buffer_addr] = $buffer;
      HEAP[$count_addr] = $count;
      
      
      
      
      
      var $5 = HEAP[HEAP[$sha_info_addr] + 40] + (HEAP[$count_addr] << 3);
      HEAP[$clo] = $5;
      
      
      
      
      
      if (HEAP[HEAP[$sha_info_addr] + 40] > HEAP[$clo]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $14 = HEAP[HEAP[$sha_info_addr] + 44] + 1;
      
      var $16 = HEAP[$sha_info_addr] + 44;
      HEAP[$16] = $14;
      __label__ = 2;
      break;
     case 2:
      
      var $18 = HEAP[$sha_info_addr] + 40;
      var $19 = HEAP[$clo];
      HEAP[$18] = $19;
      
      
      
      
      
      var $25 = HEAP[HEAP[$sha_info_addr] + 44] + (HEAP[$count_addr] >>> 29);
      
      var $27 = HEAP[$sha_info_addr] + 44;
      HEAP[$27] = $25;
      
      
      
      
      if (HEAP[HEAP[$sha_info_addr] + 116] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      
      var $35 = 64 - HEAP[HEAP[$sha_info_addr] + 116];
      HEAP[$i] = $35;
      
      
      
      if (HEAP[$i] > HEAP[$count_addr]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $39 = HEAP[$count_addr];
      HEAP[$i] = $39;
      __label__ = 5;
      break;
     case 5:
      var $40 = HEAP[$i];
      
      
      
      
      
      
      var $47 = HEAP[$sha_info_addr] + 48 + HEAP[HEAP[$sha_info_addr] + 116];
      var $48 = HEAP[$buffer_addr];
      _llvm_memcpy_p0i8_p0i8_i32($47, $48, $40, 1, 0);
      
      
      var $51 = HEAP[$count_addr] - HEAP[$i];
      HEAP[$count_addr] = $51;
      
      
      var $54 = HEAP[$buffer_addr] + HEAP[$i];
      HEAP[$buffer_addr] = $54;
      
      
      
      
      var $59 = HEAP[HEAP[$sha_info_addr] + 116] + HEAP[$i];
      
      var $61 = HEAP[$sha_info_addr] + 116;
      HEAP[$61] = $59;
      
      
      
      
      if (HEAP[HEAP[$sha_info_addr] + 116] == 64) {
        __label__ = 6;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 6:
      var $66 = HEAP[$sha_info_addr];
      _sha_transform($66);
      __label__ = 7;
      break;
     case 7:
      __label__ = 9;
      break;
     case 8:
      
      
      var $69 = HEAP[$sha_info_addr] + 48;
      var $70 = HEAP[$buffer_addr];
      _llvm_memcpy_p0i8_p0i8_i32($69, $70, 64, 1, 0);
      
      var $72 = HEAP[$buffer_addr] + 64;
      HEAP[$buffer_addr] = $72;
      
      var $74 = HEAP[$count_addr] - 64;
      HEAP[$count_addr] = $74;
      var $75 = HEAP[$sha_info_addr];
      _sha_transform($75);
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$count_addr] > 63) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      var $78 = HEAP[$count_addr];
      
      
      var $81 = HEAP[$sha_info_addr] + 48;
      var $82 = HEAP[$buffer_addr];
      _llvm_memcpy_p0i8_p0i8_i32($81, $82, $78, 1, 0);
      
      var $84 = HEAP[$sha_info_addr] + 116;
      var $85 = HEAP[$count_addr];
      HEAP[$84] = $85;
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
  function _sha_final($digest, $sha_info) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $digest_addr = __stackBase__;
      var $sha_info_addr = __stackBase__ + 4;
      var $count = __stackBase__ + 8;
      var $lo_bit_count = __stackBase__ + 12;
      var $hi_bit_count = __stackBase__ + 16;
      
      HEAP[$digest_addr] = $digest;
      HEAP[$sha_info_addr] = $sha_info;
      
      
      var $2 = HEAP[HEAP[$sha_info_addr] + 40];
      HEAP[$lo_bit_count] = $2;
      
      
      var $5 = HEAP[HEAP[$sha_info_addr] + 44];
      HEAP[$hi_bit_count] = $5;
      
      
      var $8 = HEAP[$lo_bit_count] >>> 3 & 63;
      HEAP[$count] = $8;
      
      
      
      
      var $13 = HEAP[$sha_info_addr] + 48 + HEAP[$count];
      HEAP[$13] = -128;
      
      var $15 = HEAP[$count] + 1;
      HEAP[$count] = $15;
      
      
      if (HEAP[$count] > 56) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $19 = 64 - HEAP[$count];
      
      
      
      
      var $24 = HEAP[$sha_info_addr] + 48 + HEAP[$count];
      _llvm_memset_p0i8_i32($24, 0, $19, 1, 0);
      var $25 = HEAP[$sha_info_addr];
      _sha_transform($25);
      
      
      var $28 = HEAP[$sha_info_addr] + 48;
      _llvm_memset_p0i8_i32($28, 0, 56, 1, 0);
      __label__ = 3;
      break;
     case 2:
      
      var $30 = 56 - HEAP[$count];
      
      
      
      
      var $35 = HEAP[$sha_info_addr] + 48 + HEAP[$count];
      _llvm_memset_p0i8_i32($35, 0, $30, 1, 0);
      __label__ = 3;
      break;
     case 3:
      
      
      var $38 = HEAP[$hi_bit_count] >>> 24 & 255;
      
      
      var $41 = HEAP[$sha_info_addr] + 48 + 56;
      HEAP[$41] = $38;
      
      
      var $44 = HEAP[$hi_bit_count] >>> 16 & 255;
      
      
      var $47 = HEAP[$sha_info_addr] + 48 + 57;
      HEAP[$47] = $44;
      
      
      var $50 = HEAP[$hi_bit_count] >>> 8 & 255;
      
      
      var $53 = HEAP[$sha_info_addr] + 48 + 58;
      HEAP[$53] = $50;
      
      var $55 = HEAP[$hi_bit_count] & 255;
      
      
      var $58 = HEAP[$sha_info_addr] + 48 + 59;
      HEAP[$58] = $55;
      
      
      var $61 = HEAP[$lo_bit_count] >>> 24 & 255;
      
      
      var $64 = HEAP[$sha_info_addr] + 48 + 60;
      HEAP[$64] = $61;
      
      
      var $67 = HEAP[$lo_bit_count] >>> 16 & 255;
      
      
      var $70 = HEAP[$sha_info_addr] + 48 + 61;
      HEAP[$70] = $67;
      
      
      var $73 = HEAP[$lo_bit_count] >>> 8 & 255;
      
      
      var $76 = HEAP[$sha_info_addr] + 48 + 62;
      HEAP[$76] = $73;
      
      var $78 = HEAP[$lo_bit_count] & 255;
      
      
      var $81 = HEAP[$sha_info_addr] + 48 + 63;
      HEAP[$81] = $78;
      var $82 = HEAP[$sha_info_addr];
      _sha_transform($82);
      
      
      
      
      
      var $88 = HEAP[HEAP[$sha_info_addr] + 8] >>> 0 >>> 24 & 255;
      
      var $90 = HEAP[$digest_addr];
      HEAP[$90] = $88;
      
      
      
      
      
      var $96 = HEAP[HEAP[$sha_info_addr] + 8] >>> 0 >>> 16 & 255;
      
      var $98 = HEAP[$digest_addr] + 1;
      HEAP[$98] = $96;
      
      
      
      
      
      var $104 = HEAP[HEAP[$sha_info_addr] + 8] >>> 0 >>> 8 & 255;
      
      var $106 = HEAP[$digest_addr] + 2;
      HEAP[$106] = $104;
      
      
      
      
      var $111 = HEAP[HEAP[$sha_info_addr] + 8] & 255;
      
      var $113 = HEAP[$digest_addr] + 3;
      HEAP[$113] = $111;
      
      
      
      
      
      var $119 = HEAP[HEAP[$sha_info_addr] + 8 + 4] >>> 24 & 255;
      
      var $121 = HEAP[$digest_addr] + 4;
      HEAP[$121] = $119;
      
      
      
      
      
      var $127 = HEAP[HEAP[$sha_info_addr] + 8 + 4] >>> 16 & 255;
      
      var $129 = HEAP[$digest_addr] + 5;
      HEAP[$129] = $127;
      
      
      
      
      
      var $135 = HEAP[HEAP[$sha_info_addr] + 8 + 4] >>> 8 & 255;
      
      var $137 = HEAP[$digest_addr] + 6;
      HEAP[$137] = $135;
      
      
      
      
      var $142 = HEAP[HEAP[$sha_info_addr] + 8 + 4] & 255;
      
      var $144 = HEAP[$digest_addr] + 7;
      HEAP[$144] = $142;
      
      
      
      
      
      var $150 = HEAP[HEAP[$sha_info_addr] + 8 + 8] >>> 0 >>> 24 & 255;
      
      var $152 = HEAP[$digest_addr] + 8;
      HEAP[$152] = $150;
      
      
      
      
      
      var $158 = HEAP[HEAP[$sha_info_addr] + 8 + 8] >>> 0 >>> 16 & 255;
      
      var $160 = HEAP[$digest_addr] + 9;
      HEAP[$160] = $158;
      
      
      
      
      
      var $166 = HEAP[HEAP[$sha_info_addr] + 8 + 8] >>> 0 >>> 8 & 255;
      
      var $168 = HEAP[$digest_addr] + 10;
      HEAP[$168] = $166;
      
      
      
      
      var $173 = HEAP[HEAP[$sha_info_addr] + 8 + 8] & 255;
      
      var $175 = HEAP[$digest_addr] + 11;
      HEAP[$175] = $173;
      
      
      
      
      
      var $181 = HEAP[HEAP[$sha_info_addr] + 8 + 12] >>> 0 >>> 24 & 255;
      
      var $183 = HEAP[$digest_addr] + 12;
      HEAP[$183] = $181;
      
      
      
      
      
      var $189 = HEAP[HEAP[$sha_info_addr] + 8 + 12] >>> 0 >>> 16 & 255;
      
      var $191 = HEAP[$digest_addr] + 13;
      HEAP[$191] = $189;
      
      
      
      
      
      var $197 = HEAP[HEAP[$sha_info_addr] + 8 + 12] >>> 0 >>> 8 & 255;
      
      var $199 = HEAP[$digest_addr] + 14;
      HEAP[$199] = $197;
      
      
      
      
      var $204 = HEAP[HEAP[$sha_info_addr] + 8 + 12] & 255;
      
      var $206 = HEAP[$digest_addr] + 15;
      HEAP[$206] = $204;
      
      
      
      
      
      var $212 = HEAP[HEAP[$sha_info_addr] + 8 + 16] >>> 0 >>> 24 & 255;
      
      var $214 = HEAP[$digest_addr] + 16;
      HEAP[$214] = $212;
      
      
      
      
      
      var $220 = HEAP[HEAP[$sha_info_addr] + 8 + 16] >>> 0 >>> 16 & 255;
      
      var $222 = HEAP[$digest_addr] + 17;
      HEAP[$222] = $220;
      
      
      
      
      
      var $228 = HEAP[HEAP[$sha_info_addr] + 8 + 16] >>> 0 >>> 8 & 255;
      
      var $230 = HEAP[$digest_addr] + 18;
      HEAP[$230] = $228;
      
      
      
      
      var $235 = HEAP[HEAP[$sha_info_addr] + 8 + 16] & 255;
      
      var $237 = HEAP[$digest_addr] + 19;
      HEAP[$237] = $235;
      
      
      
      
      
      var $243 = HEAP[HEAP[$sha_info_addr] + 8 + 20] >>> 0 >>> 24 & 255;
      
      var $245 = HEAP[$digest_addr] + 20;
      HEAP[$245] = $243;
      
      
      
      
      
      var $251 = HEAP[HEAP[$sha_info_addr] + 8 + 20] >>> 0 >>> 16 & 255;
      
      var $253 = HEAP[$digest_addr] + 21;
      HEAP[$253] = $251;
      
      
      
      
      
      var $259 = HEAP[HEAP[$sha_info_addr] + 8 + 20] >>> 0 >>> 8 & 255;
      
      var $261 = HEAP[$digest_addr] + 22;
      HEAP[$261] = $259;
      
      
      
      
      var $266 = HEAP[HEAP[$sha_info_addr] + 8 + 20] & 255;
      
      var $268 = HEAP[$digest_addr] + 23;
      HEAP[$268] = $266;
      
      
      
      
      
      var $274 = HEAP[HEAP[$sha_info_addr] + 8 + 24] >>> 0 >>> 24 & 255;
      
      var $276 = HEAP[$digest_addr] + 24;
      HEAP[$276] = $274;
      
      
      
      
      
      var $282 = HEAP[HEAP[$sha_info_addr] + 8 + 24] >>> 0 >>> 16 & 255;
      
      var $284 = HEAP[$digest_addr] + 25;
      HEAP[$284] = $282;
      
      
      
      
      
      var $290 = HEAP[HEAP[$sha_info_addr] + 8 + 24] >>> 0 >>> 8 & 255;
      
      var $292 = HEAP[$digest_addr] + 26;
      HEAP[$292] = $290;
      
      
      
      
      var $297 = HEAP[HEAP[$sha_info_addr] + 8 + 24] & 255;
      
      var $299 = HEAP[$digest_addr] + 27;
      HEAP[$299] = $297;
      
      
      
      
      
      var $305 = HEAP[HEAP[$sha_info_addr] + 8 + 28] >>> 24 & 255;
      
      var $307 = HEAP[$digest_addr] + 28;
      HEAP[$307] = $305;
      
      
      
      
      
      var $313 = HEAP[HEAP[$sha_info_addr] + 8 + 28] >>> 16 & 255;
      
      var $315 = HEAP[$digest_addr] + 29;
      HEAP[$315] = $313;
      
      
      
      
      
      var $321 = HEAP[HEAP[$sha_info_addr] + 8 + 28] >>> 8 & 255;
      
      var $323 = HEAP[$digest_addr] + 30;
      HEAP[$323] = $321;
      
      
      
      
      var $328 = HEAP[HEAP[$sha_info_addr] + 8 + 28] & 255;
      
      var $330 = HEAP[$digest_addr] + 31;
      HEAP[$330] = $328;
      __label__ = 4;
      break;
     case 4:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _newSHA224object() {
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
      
      var $1 = __PyObject_New(_SHA224type);
      
      HEAP[$0] = $1;
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
  function _newSHA256object() {
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
      
      var $1 = __PyObject_New(_SHA256type);
      
      HEAP[$0] = $1;
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
  function _SHA_dealloc($ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      
      HEAP[__stackBase__] = $ptr;
      
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
  function _SHA256_copy($self, $unused) {
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
      var $0 = __stackBase__ + 12;
      var $newobj = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 4] == _SHA256type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $6 = _newSHA256object();
      HEAP[$newobj] = $6;
      
      
      if (HEAP[$newobj] == 0) {
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
      __label__ = 6;
      break;
     case 4:
      var $9 = _newSHA224object();
      HEAP[$newobj] = $9;
      
      
      if (HEAP[$newobj] == 0) {
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
      var $12 = HEAP[$self_addr];
      var $13 = HEAP[$newobj];
      _SHAcopy($12, $13);
      
      var $15 = HEAP[$newobj];
      HEAP[$0] = $15;
      __label__ = 7;
      break;
     case 7:
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
  function _SHA256_digest($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 172;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 172);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $digest = __stackBase__ + 16;
      var $temp = __stackBase__ + 48;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      var $1 = HEAP[$self_addr];
      _SHAcopy($1, $temp);
      var $digest1 = $digest;
      _sha_final($digest1, $temp);
      
      
      var $4 = HEAP[HEAP[$self_addr] + 120];
      var $digest2 = $digest;
      var $5 = _PyString_FromStringAndSize($digest2, $4);
      HEAP[$0] = $5;
      var $6 = HEAP[$0];
      HEAP[$retval] = $6;
      __label__ = 1;
      break;
     case 1:
      var $retval4 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _SHA256_hexdigest($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 191;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 191);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_20 = __stackBase__ + 12;
      var $iftmp_16 = __stackBase__ + 13;
      var $0 = __stackBase__ + 14;
      var $digest = __stackBase__ + 18;
      var $temp = __stackBase__ + 50;
      var $retval1 = __stackBase__ + 174;
      var $hex_digest = __stackBase__ + 178;
      var $i = __stackBase__ + 182;
      var $j = __stackBase__ + 186;
      var $c = __stackBase__ + 190;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      var $1 = HEAP[$self_addr];
      _SHAcopy($1, $temp);
      var $digest2 = $digest;
      _sha_final($digest2, $temp);
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 120] * 2;
      var $6 = _PyString_FromStringAndSize(0, $5);
      HEAP[$retval1] = $6;
      
      
      if (HEAP[$retval1] == 0) {
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
      var $9 = HEAP[$retval1];
      var $10 = _PyString_AsString($9);
      HEAP[$hex_digest] = $10;
      
      
      if (HEAP[$hex_digest] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      var $16 = HEAP[HEAP[$retval1]] - 1;
      
      var $18 = HEAP[$retval1];
      HEAP[$18] = $16;
      
      
      
      
      if (HEAP[HEAP[$retval1]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[$retval1] + 4] + 24];
      var $28 = HEAP[$retval1];
      FUNCTION_TABLE[$27]($28);
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 6:
      HEAP[$j] = 0;
      var $29 = HEAP[$j];
      HEAP[$i] = $29;
      __label__ = 14;
      break;
     case 7:
      
      
      
      
      var $34 = HEAP[$digest + HEAP[$i]] >>> 4 & 15;
      HEAP[$c] = $34;
      
      
      if (HEAP[$c] > 9) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $38 = HEAP[$c] + 87;
      HEAP[$iftmp_16] = $38;
      __label__ = 10;
      break;
     case 9:
      
      var $40 = HEAP[$c] + 48;
      HEAP[$iftmp_16] = $40;
      __label__ = 10;
      break;
     case 10:
      var $41 = HEAP[$iftmp_16];
      HEAP[$c] = $41;
      
      
      var $44 = HEAP[$hex_digest] + HEAP[$j];
      var $45 = HEAP[$c];
      HEAP[$44] = $45;
      
      var $47 = HEAP[$j] + 1;
      HEAP[$j] = $47;
      
      
      
      var $51 = HEAP[$digest + HEAP[$i]] & 15;
      HEAP[$c] = $51;
      
      
      if (HEAP[$c] > 9) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      var $55 = HEAP[$c] + 87;
      HEAP[$iftmp_20] = $55;
      __label__ = 13;
      break;
     case 12:
      
      var $57 = HEAP[$c] + 48;
      HEAP[$iftmp_20] = $57;
      __label__ = 13;
      break;
     case 13:
      var $58 = HEAP[$iftmp_20];
      HEAP[$c] = $58;
      
      
      var $61 = HEAP[$hex_digest] + HEAP[$j];
      var $62 = HEAP[$c];
      HEAP[$61] = $62;
      
      var $64 = HEAP[$j] + 1;
      HEAP[$j] = $64;
      
      var $66 = HEAP[$i] + 1;
      HEAP[$i] = $66;
      __label__ = 14;
      break;
     case 14:
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 120] > HEAP[$i]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $72 = HEAP[$retval1];
      HEAP[$0] = $72;
      __label__ = 16;
      break;
     case 16:
      var $73 = HEAP[$0];
      HEAP[$retval] = $73;
      __label__ = 17;
      break;
     case 17:
      var $retval18 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _SHA256_update($self, $args) {
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
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $buf = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str, allocate([ $buf, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$buf + 8];
      
      var $7 = HEAP[$buf];
      var $8 = HEAP[$self_addr];
      _sha_update($8, $7, $5);
      _PyBuffer_Release($buf);
      
      var $10 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $10;
      HEAP[$0] = __Py_NoneStruct;
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
  function _SHA256_get_block_size($self, $closure) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $closure_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[__stackBase__] = $self;
      HEAP[$closure_addr] = $closure;
      var $1 = _PyInt_FromLong(64);
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
  function _SHA256_get_name($self, $closure) {
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
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 120] == 32) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $6 = _PyString_FromStringAndSize(__str5, 6);
      HEAP[$0] = $6;
      __label__ = 3;
      break;
     case 2:
      var $7 = _PyString_FromStringAndSize(__str6, 6);
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
  function _SHA256_new($self, $args, $kwdict) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 76;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 76);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kwdict_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $new = __stackBase__ + 20;
      var $buf = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwdict_addr] = $kwdict;
      var $buf1 = $buf;
      _llvm_memset_p0i8_i32($buf1, 0, 52, 4, 0);
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwdict_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str13, _kwlist_11273, allocate([ $buf, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = _newSHA256object();
      HEAP[$new] = $5;
      
      
      if (HEAP[$new] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyBuffer_Release($buf);
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 4:
      var $8 = HEAP[$new];
      _sha_init($8);
      var $9 = _PyErr_Occurred();
      
      if ($9 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      var $12 = HEAP[$new];
      
      
      var $15 = HEAP[$12] - 1;
      var $16 = $12;
      HEAP[$16] = $15;
      
      
      
      if (HEAP[$12] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      var $25 = HEAP[HEAP[HEAP[$new] + 4] + 24];
      
      var $27 = HEAP[$new];
      FUNCTION_TABLE[$25]($27);
      __label__ = 7;
      break;
     case 7:
      _PyBuffer_Release($buf);
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 8:
      
      
      
      if (HEAP[$buf + 8] > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      var $32 = HEAP[$buf + 8];
      
      var $34 = HEAP[$buf];
      var $35 = HEAP[$new];
      _sha_update($35, $34, $32);
      __label__ = 10;
      break;
     case 10:
      _PyBuffer_Release($buf);
      
      var $37 = HEAP[$new];
      HEAP[$0] = $37;
      __label__ = 11;
      break;
     case 11:
      var $38 = HEAP[$0];
      HEAP[$retval] = $38;
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
  function _SHA224_new($self, $args, $kwdict) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 76;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 76);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kwdict_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $new = __stackBase__ + 20;
      var $buf = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwdict_addr] = $kwdict;
      var $buf1 = $buf;
      _llvm_memset_p0i8_i32($buf1, 0, 52, 4, 0);
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwdict_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str13, _kwlist_11309, allocate([ $buf, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = _newSHA224object();
      HEAP[$new] = $5;
      
      
      if (HEAP[$new] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyBuffer_Release($buf);
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 4:
      var $8 = HEAP[$new];
      _sha224_init($8);
      var $9 = _PyErr_Occurred();
      
      if ($9 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      var $12 = HEAP[$new];
      
      
      var $15 = HEAP[$12] - 1;
      var $16 = $12;
      HEAP[$16] = $15;
      
      
      
      if (HEAP[$12] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      var $25 = HEAP[HEAP[HEAP[$new] + 4] + 24];
      
      var $27 = HEAP[$new];
      FUNCTION_TABLE[$25]($27);
      __label__ = 7;
      break;
     case 7:
      _PyBuffer_Release($buf);
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 8:
      
      
      
      if (HEAP[$buf + 8] > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      var $32 = HEAP[$buf + 8];
      
      var $34 = HEAP[$buf];
      var $35 = HEAP[$new];
      _sha_update($35, $34, $32);
      __label__ = 10;
      break;
     case 10:
      _PyBuffer_Release($buf);
      
      var $37 = HEAP[$new];
      HEAP[$0] = $37;
      __label__ = 11;
      break;
     case 11:
      var $38 = HEAP[$0];
      HEAP[$retval] = $38;
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
  function _init_sha256() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      
      
      HEAP[_SHA224type + 4] = _PyType_Type;
      var $1 = _PyType_Ready(_SHA224type);
      
      if ($1 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      HEAP[_SHA256type + 4] = _PyType_Type;
      var $4 = _PyType_Ready(_SHA256type);
      
      if ($4 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $6 = _Py_InitModule4(__str17, _SHA_functions, 0, 0, 1013);
      HEAP[$m] = $6;
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
  Module["_init_sha256"] = _init_sha256;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _SHA256_copy, 0, _SHA256_digest, 0, _SHA256_hexdigest, 0, _SHA256_update, 0, _SHA256_get_block_size, 0, _SHA256_get_name, 0, _SHA_dealloc, 0, _SHA256_new, 0, _SHA224_new, 0 ]);
  function run(args) {
    _SHA256_copy__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 104, 97, 115, 104, 32, 111, 98, 106, 101, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    _SHA256_digest__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 100, 105, 103, 101, 115, 116, 32, 118, 97, 108, 117, 101, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 98, 105, 110, 97, 114, 121, 32, 100, 97, 116, 97, 46, 0 ], "i8", ALLOC_NORMAL);
    _SHA256_hexdigest__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 100, 105, 103, 101, 115, 116, 32, 118, 97, 108, 117, 101, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 104, 101, 120, 97, 100, 101, 99, 105, 109, 97, 108, 32, 100, 105, 103, 105, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _SHA256_update__doc__ = allocate([ 85, 112, 100, 97, 116, 101, 32, 116, 104, 105, 115, 32, 104, 97, 115, 104, 32, 111, 98, 106, 101, 99, 116, 39, 115, 32, 115, 116, 97, 116, 101, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 115, 42, 58, 117, 112, 100, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 99, 111, 112, 121, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 100, 105, 103, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 104, 101, 120, 100, 105, 103, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 117, 112, 100, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _SHA_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str5 = allocate([ 83, 72, 65, 50, 53, 54, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 83, 72, 65, 50, 50, 52, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 98, 108, 111, 99, 107, 95, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _SHA_getseters = allocate(60, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str9 = allocate([ 100, 105, 103, 101, 115, 116, 95, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 100, 105, 103, 101, 115, 116, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    _SHA_members = allocate([ 0, 0, 0, 0, 1, 0, 0, 0, 120, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 120, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str11 = allocate([ 95, 115, 104, 97, 50, 53, 54, 46, 115, 104, 97, 50, 50, 52, 0 ], "i8", ALLOC_NORMAL);
    _SHA224type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str12 = allocate([ 95, 115, 104, 97, 50, 53, 54, 46, 115, 104, 97, 50, 53, 54, 0 ], "i8", ALLOC_NORMAL);
    _SHA256type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _SHA256_new__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 83, 72, 65, 45, 50, 53, 54, 32, 104, 97, 115, 104, 32, 111, 98, 106, 101, 99, 116, 59, 32, 111, 112, 116, 105, 111, 110, 97, 108, 108, 121, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 32, 119, 105, 116, 104, 32, 97, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 124, 115, 42, 58, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_11273 = allocate(8, "i8*", ALLOC_NORMAL);
    __str14 = allocate([ 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _SHA224_new__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 83, 72, 65, 45, 50, 50, 52, 32, 104, 97, 115, 104, 32, 111, 98, 106, 101, 99, 116, 59, 32, 111, 112, 116, 105, 111, 110, 97, 108, 108, 121, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 32, 119, 105, 116, 104, 32, 97, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_11309 = allocate(8, "i8*", ALLOC_NORMAL);
    __str15 = allocate([ 115, 104, 97, 50, 53, 54, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 115, 104, 97, 50, 50, 52, 0 ], "i8", ALLOC_NORMAL);
    _SHA_functions = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str17 = allocate([ 95, 115, 104, 97, 50, 53, 54, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_SHA_methods] = __str1;
    HEAP[_SHA_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_SHA_methods + 12] = _SHA256_copy__doc__;
    HEAP[_SHA_methods + 16] = __str2;
    HEAP[_SHA_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_SHA_methods + 28] = _SHA256_digest__doc__;
    HEAP[_SHA_methods + 32] = __str3;
    HEAP[_SHA_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_SHA_methods + 44] = _SHA256_hexdigest__doc__;
    HEAP[_SHA_methods + 48] = __str4;
    HEAP[_SHA_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_SHA_methods + 60] = _SHA256_update__doc__;
    HEAP[_SHA_getseters] = __str7;
    HEAP[_SHA_getseters + 4] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_SHA_getseters + 20] = __str8;
    HEAP[_SHA_getseters + 24] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_SHA_members] = __str9;
    HEAP[_SHA_members + 20] = __str10;
    HEAP[_SHA224type + 12] = __str11;
    HEAP[_SHA224type + 24] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_SHA224type + 116] = _SHA_methods;
    HEAP[_SHA224type + 120] = _SHA_members;
    HEAP[_SHA224type + 124] = _SHA_getseters;
    HEAP[_SHA256type + 12] = __str12;
    HEAP[_SHA256type + 24] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_SHA256type + 116] = _SHA_methods;
    HEAP[_SHA256type + 120] = _SHA_members;
    HEAP[_SHA256type + 124] = _SHA_getseters;
    HEAP[_kwlist_11273] = __str14;
    HEAP[_kwlist_11309] = __str14;
    HEAP[_SHA_functions] = __str15;
    HEAP[_SHA_functions + 4] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_SHA_functions + 12] = _SHA256_new__doc__;
    HEAP[_SHA_functions + 16] = __str16;
    HEAP[_SHA_functions + 20] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_SHA_functions + 28] = _SHA224_new__doc__;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
