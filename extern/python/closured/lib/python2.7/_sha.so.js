"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 80;
  var $1___SIZE = 16;
  var $2___SIZE = 100;
  var $3___SIZE = 20;
  var $4___SIZE = 196;
  var $5___SIZE = 32;
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
  var $struct_SHAobject___SIZE = 108;
  var $struct_SHAobject___FLATTENER = [ 0, 4, 8, 28, 32, 36, 100, 104 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _SHA_copy__doc__;
  var _SHA_digest__doc__;
  var _SHA_hexdigest__doc__;
  var _SHA_update__doc__;
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
  var __str9;
  var _SHA_getseters;
  var __str10;
  var _SHAtype;
  var _SHA_new__doc__;
  var __str11;
  var _kwlist_9258;
  var __str12;
  var __str13;
  var _SHA_functions;
  var __str14;
  var __str15;
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
      
      
      var $2 = HEAP[HEAP[$src_addr] + 100];
      
      var $4 = HEAP[$dest_addr] + 100;
      HEAP[$4] = $2;
      
      
      var $7 = HEAP[HEAP[$src_addr] + 104];
      
      var $9 = HEAP[$dest_addr] + 104;
      HEAP[$9] = $7;
      
      
      var $12 = HEAP[HEAP[$src_addr] + 28];
      
      var $14 = HEAP[$dest_addr] + 28;
      HEAP[$14] = $12;
      
      
      var $17 = HEAP[HEAP[$src_addr] + 32];
      
      var $19 = HEAP[$dest_addr] + 32;
      HEAP[$19] = $17;
      
      
      
      
      
      
      var $26 = HEAP[$dest_addr] + 8;
      var $27 = HEAP[$src_addr] + 8;
      _llvm_memcpy_p0i8_p0i8_i32($26, $27, 20, 1, 0);
      
      
      var $30 = HEAP[$src_addr] + 36;
      
      
      var $33 = HEAP[$dest_addr] + 36;
      _llvm_memcpy_p0i8_p0i8_i32($33, $30, 64, 1, 0);
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
    STACKTOP += 356;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 356);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $sha_info_addr = __stackBase__;
      var $i = __stackBase__ + 4;
      var $T = __stackBase__ + 8;
      var $A = __stackBase__ + 12;
      var $B = __stackBase__ + 16;
      var $C = __stackBase__ + 20;
      var $D = __stackBase__ + 24;
      var $E = __stackBase__ + 28;
      var $W = __stackBase__ + 32;
      var $WP = __stackBase__ + 352;
      
      HEAP[$sha_info_addr] = $sha_info;
      
      
      var $2 = HEAP[$sha_info_addr] + 36;
      
      var $W12 = $W;
      _llvm_memcpy_p0i8_p0i8_i32($W12, $2, 64, 1, 0);
      
      
      var $5 = HEAP[HEAP[$sha_info_addr] + 100];
      var $W3 = $W;
      _longReverse($W3, 64, $5);
      HEAP[$i] = 16;
      __label__ = 2;
      break;
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $25 = HEAP[$W + (HEAP[$i] - 3) * 4] ^ HEAP[$W + (HEAP[$i] - 8) * 4] ^ HEAP[$W + (HEAP[$i] - 14) * 4] ^ HEAP[$W + (HEAP[$i] - 16) * 4];
      var $26 = $W + HEAP[$i] * 4;
      HEAP[$26] = $25;
      
      
      
      
      
      
      var $33 = HEAP[$W + HEAP[$i] * 4] >>> 0 >>> 31 | HEAP[$W + HEAP[$i] * 4] << 1;
      var $34 = $W + HEAP[$i] * 4;
      HEAP[$34] = $33;
      
      var $36 = HEAP[$i] + 1;
      HEAP[$i] = $36;
      __label__ = 2;
      break;
     case 2:
      
      
      if (HEAP[$i] <= 79) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $42 = HEAP[HEAP[$sha_info_addr] + 8];
      HEAP[$A] = $42;
      
      
      
      var $46 = HEAP[HEAP[$sha_info_addr] + 8 + 4];
      HEAP[$B] = $46;
      
      
      
      var $50 = HEAP[HEAP[$sha_info_addr] + 8 + 8];
      HEAP[$C] = $50;
      
      
      
      var $54 = HEAP[HEAP[$sha_info_addr] + 8 + 12];
      HEAP[$D] = $54;
      
      
      
      var $58 = HEAP[HEAP[$sha_info_addr] + 8 + 16];
      HEAP[$E] = $58;
      
      HEAP[$WP] = $W;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $76 = (HEAP[$A] >>> 0 >>> 27 | HEAP[$A] << 5) + ((HEAP[$C] ^ HEAP[$D]) & HEAP[$B] ^ HEAP[$D]) + HEAP[$E] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$T] = $76;
      
      var $78 = HEAP[$WP] + 4;
      HEAP[$WP] = $78;
      
      
      
      var $82 = HEAP[$B] >>> 0 >>> 2 | HEAP[$B] << 30;
      HEAP[$B] = $82;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $100 = (HEAP[$T] >>> 0 >>> 27 | HEAP[$T] << 5) + ((HEAP[$B] ^ HEAP[$C]) & HEAP[$A] ^ HEAP[$C]) + HEAP[$D] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$E] = $100;
      
      var $102 = HEAP[$WP] + 4;
      HEAP[$WP] = $102;
      
      
      
      var $106 = HEAP[$A] >>> 0 >>> 2 | HEAP[$A] << 30;
      HEAP[$A] = $106;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $124 = (HEAP[$E] >>> 0 >>> 27 | HEAP[$E] << 5) + ((HEAP[$A] ^ HEAP[$B]) & HEAP[$T] ^ HEAP[$B]) + HEAP[$C] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$D] = $124;
      
      var $126 = HEAP[$WP] + 4;
      HEAP[$WP] = $126;
      
      
      
      var $130 = HEAP[$T] >>> 0 >>> 2 | HEAP[$T] << 30;
      HEAP[$T] = $130;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $148 = (HEAP[$D] >>> 0 >>> 27 | HEAP[$D] << 5) + ((HEAP[$T] ^ HEAP[$A]) & HEAP[$E] ^ HEAP[$A]) + HEAP[$B] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$C] = $148;
      
      var $150 = HEAP[$WP] + 4;
      HEAP[$WP] = $150;
      
      
      
      var $154 = HEAP[$E] >>> 0 >>> 2 | HEAP[$E] << 30;
      HEAP[$E] = $154;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $172 = (HEAP[$C] >>> 0 >>> 27 | HEAP[$C] << 5) + ((HEAP[$E] ^ HEAP[$T]) & HEAP[$D] ^ HEAP[$T]) + HEAP[$A] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$B] = $172;
      
      var $174 = HEAP[$WP] + 4;
      HEAP[$WP] = $174;
      
      
      
      var $178 = HEAP[$D] >>> 0 >>> 2 | HEAP[$D] << 30;
      HEAP[$D] = $178;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $196 = (HEAP[$B] >>> 0 >>> 27 | HEAP[$B] << 5) + ((HEAP[$D] ^ HEAP[$E]) & HEAP[$C] ^ HEAP[$E]) + HEAP[$T] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$A] = $196;
      
      var $198 = HEAP[$WP] + 4;
      HEAP[$WP] = $198;
      
      
      
      var $202 = HEAP[$C] >>> 0 >>> 2 | HEAP[$C] << 30;
      HEAP[$C] = $202;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $220 = (HEAP[$A] >>> 0 >>> 27 | HEAP[$A] << 5) + ((HEAP[$C] ^ HEAP[$D]) & HEAP[$B] ^ HEAP[$D]) + HEAP[$E] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$T] = $220;
      
      var $222 = HEAP[$WP] + 4;
      HEAP[$WP] = $222;
      
      
      
      var $226 = HEAP[$B] >>> 0 >>> 2 | HEAP[$B] << 30;
      HEAP[$B] = $226;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $244 = (HEAP[$T] >>> 0 >>> 27 | HEAP[$T] << 5) + ((HEAP[$B] ^ HEAP[$C]) & HEAP[$A] ^ HEAP[$C]) + HEAP[$D] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$E] = $244;
      
      var $246 = HEAP[$WP] + 4;
      HEAP[$WP] = $246;
      
      
      
      var $250 = HEAP[$A] >>> 0 >>> 2 | HEAP[$A] << 30;
      HEAP[$A] = $250;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $268 = (HEAP[$E] >>> 0 >>> 27 | HEAP[$E] << 5) + ((HEAP[$A] ^ HEAP[$B]) & HEAP[$T] ^ HEAP[$B]) + HEAP[$C] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$D] = $268;
      
      var $270 = HEAP[$WP] + 4;
      HEAP[$WP] = $270;
      
      
      
      var $274 = HEAP[$T] >>> 0 >>> 2 | HEAP[$T] << 30;
      HEAP[$T] = $274;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $292 = (HEAP[$D] >>> 0 >>> 27 | HEAP[$D] << 5) + ((HEAP[$T] ^ HEAP[$A]) & HEAP[$E] ^ HEAP[$A]) + HEAP[$B] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$C] = $292;
      
      var $294 = HEAP[$WP] + 4;
      HEAP[$WP] = $294;
      
      
      
      var $298 = HEAP[$E] >>> 0 >>> 2 | HEAP[$E] << 30;
      HEAP[$E] = $298;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $316 = (HEAP[$C] >>> 0 >>> 27 | HEAP[$C] << 5) + ((HEAP[$E] ^ HEAP[$T]) & HEAP[$D] ^ HEAP[$T]) + HEAP[$A] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$B] = $316;
      
      var $318 = HEAP[$WP] + 4;
      HEAP[$WP] = $318;
      
      
      
      var $322 = HEAP[$D] >>> 0 >>> 2 | HEAP[$D] << 30;
      HEAP[$D] = $322;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $340 = (HEAP[$B] >>> 0 >>> 27 | HEAP[$B] << 5) + ((HEAP[$D] ^ HEAP[$E]) & HEAP[$C] ^ HEAP[$E]) + HEAP[$T] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$A] = $340;
      
      var $342 = HEAP[$WP] + 4;
      HEAP[$WP] = $342;
      
      
      
      var $346 = HEAP[$C] >>> 0 >>> 2 | HEAP[$C] << 30;
      HEAP[$C] = $346;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $364 = (HEAP[$A] >>> 0 >>> 27 | HEAP[$A] << 5) + ((HEAP[$C] ^ HEAP[$D]) & HEAP[$B] ^ HEAP[$D]) + HEAP[$E] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$T] = $364;
      
      var $366 = HEAP[$WP] + 4;
      HEAP[$WP] = $366;
      
      
      
      var $370 = HEAP[$B] >>> 0 >>> 2 | HEAP[$B] << 30;
      HEAP[$B] = $370;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $388 = (HEAP[$T] >>> 0 >>> 27 | HEAP[$T] << 5) + ((HEAP[$B] ^ HEAP[$C]) & HEAP[$A] ^ HEAP[$C]) + HEAP[$D] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$E] = $388;
      
      var $390 = HEAP[$WP] + 4;
      HEAP[$WP] = $390;
      
      
      
      var $394 = HEAP[$A] >>> 0 >>> 2 | HEAP[$A] << 30;
      HEAP[$A] = $394;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $412 = (HEAP[$E] >>> 0 >>> 27 | HEAP[$E] << 5) + ((HEAP[$A] ^ HEAP[$B]) & HEAP[$T] ^ HEAP[$B]) + HEAP[$C] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$D] = $412;
      
      var $414 = HEAP[$WP] + 4;
      HEAP[$WP] = $414;
      
      
      
      var $418 = HEAP[$T] >>> 0 >>> 2 | HEAP[$T] << 30;
      HEAP[$T] = $418;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $436 = (HEAP[$D] >>> 0 >>> 27 | HEAP[$D] << 5) + ((HEAP[$T] ^ HEAP[$A]) & HEAP[$E] ^ HEAP[$A]) + HEAP[$B] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$C] = $436;
      
      var $438 = HEAP[$WP] + 4;
      HEAP[$WP] = $438;
      
      
      
      var $442 = HEAP[$E] >>> 0 >>> 2 | HEAP[$E] << 30;
      HEAP[$E] = $442;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $460 = (HEAP[$C] >>> 0 >>> 27 | HEAP[$C] << 5) + ((HEAP[$E] ^ HEAP[$T]) & HEAP[$D] ^ HEAP[$T]) + HEAP[$A] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$B] = $460;
      
      var $462 = HEAP[$WP] + 4;
      HEAP[$WP] = $462;
      
      
      
      var $466 = HEAP[$D] >>> 0 >>> 2 | HEAP[$D] << 30;
      HEAP[$D] = $466;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $484 = (HEAP[$B] >>> 0 >>> 27 | HEAP[$B] << 5) + ((HEAP[$D] ^ HEAP[$E]) & HEAP[$C] ^ HEAP[$E]) + HEAP[$T] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$A] = $484;
      
      var $486 = HEAP[$WP] + 4;
      HEAP[$WP] = $486;
      
      
      
      var $490 = HEAP[$C] >>> 0 >>> 2 | HEAP[$C] << 30;
      HEAP[$C] = $490;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $508 = (HEAP[$A] >>> 0 >>> 27 | HEAP[$A] << 5) + ((HEAP[$C] ^ HEAP[$D]) & HEAP[$B] ^ HEAP[$D]) + HEAP[$E] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$T] = $508;
      
      var $510 = HEAP[$WP] + 4;
      HEAP[$WP] = $510;
      
      
      
      var $514 = HEAP[$B] >>> 0 >>> 2 | HEAP[$B] << 30;
      HEAP[$B] = $514;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $532 = (HEAP[$T] >>> 0 >>> 27 | HEAP[$T] << 5) + ((HEAP[$B] ^ HEAP[$C]) & HEAP[$A] ^ HEAP[$C]) + HEAP[$D] + HEAP[HEAP[$WP]] + 1518500249;
      HEAP[$E] = $532;
      
      var $534 = HEAP[$WP] + 4;
      HEAP[$WP] = $534;
      
      
      
      var $538 = HEAP[$A] >>> 0 >>> 2 | HEAP[$A] << 30;
      HEAP[$A] = $538;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $554 = (HEAP[$E] >>> 0 >>> 27 | HEAP[$E] << 5) + (HEAP[$T] ^ HEAP[$A] ^ HEAP[$B]) + HEAP[$C] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$D] = $554;
      
      var $556 = HEAP[$WP] + 4;
      HEAP[$WP] = $556;
      
      
      
      var $560 = HEAP[$T] >>> 0 >>> 2 | HEAP[$T] << 30;
      HEAP[$T] = $560;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $576 = (HEAP[$D] >>> 0 >>> 27 | HEAP[$D] << 5) + (HEAP[$E] ^ HEAP[$T] ^ HEAP[$A]) + HEAP[$B] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$C] = $576;
      
      var $578 = HEAP[$WP] + 4;
      HEAP[$WP] = $578;
      
      
      
      var $582 = HEAP[$E] >>> 0 >>> 2 | HEAP[$E] << 30;
      HEAP[$E] = $582;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $598 = (HEAP[$C] >>> 0 >>> 27 | HEAP[$C] << 5) + (HEAP[$D] ^ HEAP[$E] ^ HEAP[$T]) + HEAP[$A] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$B] = $598;
      
      var $600 = HEAP[$WP] + 4;
      HEAP[$WP] = $600;
      
      
      
      var $604 = HEAP[$D] >>> 0 >>> 2 | HEAP[$D] << 30;
      HEAP[$D] = $604;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $620 = (HEAP[$B] >>> 0 >>> 27 | HEAP[$B] << 5) + (HEAP[$C] ^ HEAP[$D] ^ HEAP[$E]) + HEAP[$T] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$A] = $620;
      
      var $622 = HEAP[$WP] + 4;
      HEAP[$WP] = $622;
      
      
      
      var $626 = HEAP[$C] >>> 0 >>> 2 | HEAP[$C] << 30;
      HEAP[$C] = $626;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $642 = (HEAP[$A] >>> 0 >>> 27 | HEAP[$A] << 5) + (HEAP[$B] ^ HEAP[$C] ^ HEAP[$D]) + HEAP[$E] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$T] = $642;
      
      var $644 = HEAP[$WP] + 4;
      HEAP[$WP] = $644;
      
      
      
      var $648 = HEAP[$B] >>> 0 >>> 2 | HEAP[$B] << 30;
      HEAP[$B] = $648;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $664 = (HEAP[$T] >>> 0 >>> 27 | HEAP[$T] << 5) + (HEAP[$A] ^ HEAP[$B] ^ HEAP[$C]) + HEAP[$D] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$E] = $664;
      
      var $666 = HEAP[$WP] + 4;
      HEAP[$WP] = $666;
      
      
      
      var $670 = HEAP[$A] >>> 0 >>> 2 | HEAP[$A] << 30;
      HEAP[$A] = $670;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $686 = (HEAP[$E] >>> 0 >>> 27 | HEAP[$E] << 5) + (HEAP[$T] ^ HEAP[$A] ^ HEAP[$B]) + HEAP[$C] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$D] = $686;
      
      var $688 = HEAP[$WP] + 4;
      HEAP[$WP] = $688;
      
      
      
      var $692 = HEAP[$T] >>> 0 >>> 2 | HEAP[$T] << 30;
      HEAP[$T] = $692;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $708 = (HEAP[$D] >>> 0 >>> 27 | HEAP[$D] << 5) + (HEAP[$E] ^ HEAP[$T] ^ HEAP[$A]) + HEAP[$B] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$C] = $708;
      
      var $710 = HEAP[$WP] + 4;
      HEAP[$WP] = $710;
      
      
      
      var $714 = HEAP[$E] >>> 0 >>> 2 | HEAP[$E] << 30;
      HEAP[$E] = $714;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $730 = (HEAP[$C] >>> 0 >>> 27 | HEAP[$C] << 5) + (HEAP[$D] ^ HEAP[$E] ^ HEAP[$T]) + HEAP[$A] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$B] = $730;
      
      var $732 = HEAP[$WP] + 4;
      HEAP[$WP] = $732;
      
      
      
      var $736 = HEAP[$D] >>> 0 >>> 2 | HEAP[$D] << 30;
      HEAP[$D] = $736;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $752 = (HEAP[$B] >>> 0 >>> 27 | HEAP[$B] << 5) + (HEAP[$C] ^ HEAP[$D] ^ HEAP[$E]) + HEAP[$T] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$A] = $752;
      
      var $754 = HEAP[$WP] + 4;
      HEAP[$WP] = $754;
      
      
      
      var $758 = HEAP[$C] >>> 0 >>> 2 | HEAP[$C] << 30;
      HEAP[$C] = $758;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $774 = (HEAP[$A] >>> 0 >>> 27 | HEAP[$A] << 5) + (HEAP[$B] ^ HEAP[$C] ^ HEAP[$D]) + HEAP[$E] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$T] = $774;
      
      var $776 = HEAP[$WP] + 4;
      HEAP[$WP] = $776;
      
      
      
      var $780 = HEAP[$B] >>> 0 >>> 2 | HEAP[$B] << 30;
      HEAP[$B] = $780;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $796 = (HEAP[$T] >>> 0 >>> 27 | HEAP[$T] << 5) + (HEAP[$A] ^ HEAP[$B] ^ HEAP[$C]) + HEAP[$D] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$E] = $796;
      
      var $798 = HEAP[$WP] + 4;
      HEAP[$WP] = $798;
      
      
      
      var $802 = HEAP[$A] >>> 0 >>> 2 | HEAP[$A] << 30;
      HEAP[$A] = $802;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $818 = (HEAP[$E] >>> 0 >>> 27 | HEAP[$E] << 5) + (HEAP[$T] ^ HEAP[$A] ^ HEAP[$B]) + HEAP[$C] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$D] = $818;
      
      var $820 = HEAP[$WP] + 4;
      HEAP[$WP] = $820;
      
      
      
      var $824 = HEAP[$T] >>> 0 >>> 2 | HEAP[$T] << 30;
      HEAP[$T] = $824;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $840 = (HEAP[$D] >>> 0 >>> 27 | HEAP[$D] << 5) + (HEAP[$E] ^ HEAP[$T] ^ HEAP[$A]) + HEAP[$B] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$C] = $840;
      
      var $842 = HEAP[$WP] + 4;
      HEAP[$WP] = $842;
      
      
      
      var $846 = HEAP[$E] >>> 0 >>> 2 | HEAP[$E] << 30;
      HEAP[$E] = $846;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $862 = (HEAP[$C] >>> 0 >>> 27 | HEAP[$C] << 5) + (HEAP[$D] ^ HEAP[$E] ^ HEAP[$T]) + HEAP[$A] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$B] = $862;
      
      var $864 = HEAP[$WP] + 4;
      HEAP[$WP] = $864;
      
      
      
      var $868 = HEAP[$D] >>> 0 >>> 2 | HEAP[$D] << 30;
      HEAP[$D] = $868;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $884 = (HEAP[$B] >>> 0 >>> 27 | HEAP[$B] << 5) + (HEAP[$C] ^ HEAP[$D] ^ HEAP[$E]) + HEAP[$T] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$A] = $884;
      
      var $886 = HEAP[$WP] + 4;
      HEAP[$WP] = $886;
      
      
      
      var $890 = HEAP[$C] >>> 0 >>> 2 | HEAP[$C] << 30;
      HEAP[$C] = $890;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $906 = (HEAP[$A] >>> 0 >>> 27 | HEAP[$A] << 5) + (HEAP[$B] ^ HEAP[$C] ^ HEAP[$D]) + HEAP[$E] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$T] = $906;
      
      var $908 = HEAP[$WP] + 4;
      HEAP[$WP] = $908;
      
      
      
      var $912 = HEAP[$B] >>> 0 >>> 2 | HEAP[$B] << 30;
      HEAP[$B] = $912;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $928 = (HEAP[$T] >>> 0 >>> 27 | HEAP[$T] << 5) + (HEAP[$A] ^ HEAP[$B] ^ HEAP[$C]) + HEAP[$D] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$E] = $928;
      
      var $930 = HEAP[$WP] + 4;
      HEAP[$WP] = $930;
      
      
      
      var $934 = HEAP[$A] >>> 0 >>> 2 | HEAP[$A] << 30;
      HEAP[$A] = $934;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $950 = (HEAP[$E] >>> 0 >>> 27 | HEAP[$E] << 5) + (HEAP[$T] ^ HEAP[$A] ^ HEAP[$B]) + HEAP[$C] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$D] = $950;
      
      var $952 = HEAP[$WP] + 4;
      HEAP[$WP] = $952;
      
      
      
      var $956 = HEAP[$T] >>> 0 >>> 2 | HEAP[$T] << 30;
      HEAP[$T] = $956;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $972 = (HEAP[$D] >>> 0 >>> 27 | HEAP[$D] << 5) + (HEAP[$E] ^ HEAP[$T] ^ HEAP[$A]) + HEAP[$B] + HEAP[HEAP[$WP]] + 1859775393;
      HEAP[$C] = $972;
      
      var $974 = HEAP[$WP] + 4;
      HEAP[$WP] = $974;
      
      
      
      var $978 = HEAP[$E] >>> 0 >>> 2 | HEAP[$E] << 30;
      HEAP[$E] = $978;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $998 = (HEAP[$C] >>> 0 >>> 27 | HEAP[$C] << 5) + (HEAP[$D] & HEAP[$E] | (HEAP[$D] | HEAP[$E]) & HEAP[$T]) + HEAP[$A] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$B] = $998;
      
      var $1000 = HEAP[$WP] + 4;
      HEAP[$WP] = $1000;
      
      
      
      var $1004 = HEAP[$D] >>> 0 >>> 2 | HEAP[$D] << 30;
      HEAP[$D] = $1004;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1024 = (HEAP[$B] >>> 0 >>> 27 | HEAP[$B] << 5) + (HEAP[$C] & HEAP[$D] | (HEAP[$C] | HEAP[$D]) & HEAP[$E]) + HEAP[$T] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$A] = $1024;
      
      var $1026 = HEAP[$WP] + 4;
      HEAP[$WP] = $1026;
      
      
      
      var $1030 = HEAP[$C] >>> 0 >>> 2 | HEAP[$C] << 30;
      HEAP[$C] = $1030;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1050 = (HEAP[$A] >>> 0 >>> 27 | HEAP[$A] << 5) + (HEAP[$B] & HEAP[$C] | (HEAP[$B] | HEAP[$C]) & HEAP[$D]) + HEAP[$E] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$T] = $1050;
      
      var $1052 = HEAP[$WP] + 4;
      HEAP[$WP] = $1052;
      
      
      
      var $1056 = HEAP[$B] >>> 0 >>> 2 | HEAP[$B] << 30;
      HEAP[$B] = $1056;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1076 = (HEAP[$T] >>> 0 >>> 27 | HEAP[$T] << 5) + (HEAP[$A] & HEAP[$B] | (HEAP[$A] | HEAP[$B]) & HEAP[$C]) + HEAP[$D] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$E] = $1076;
      
      var $1078 = HEAP[$WP] + 4;
      HEAP[$WP] = $1078;
      
      
      
      var $1082 = HEAP[$A] >>> 0 >>> 2 | HEAP[$A] << 30;
      HEAP[$A] = $1082;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1102 = (HEAP[$E] >>> 0 >>> 27 | HEAP[$E] << 5) + (HEAP[$T] & HEAP[$A] | (HEAP[$T] | HEAP[$A]) & HEAP[$B]) + HEAP[$C] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$D] = $1102;
      
      var $1104 = HEAP[$WP] + 4;
      HEAP[$WP] = $1104;
      
      
      
      var $1108 = HEAP[$T] >>> 0 >>> 2 | HEAP[$T] << 30;
      HEAP[$T] = $1108;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1128 = (HEAP[$D] >>> 0 >>> 27 | HEAP[$D] << 5) + (HEAP[$E] & HEAP[$T] | (HEAP[$E] | HEAP[$T]) & HEAP[$A]) + HEAP[$B] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$C] = $1128;
      
      var $1130 = HEAP[$WP] + 4;
      HEAP[$WP] = $1130;
      
      
      
      var $1134 = HEAP[$E] >>> 0 >>> 2 | HEAP[$E] << 30;
      HEAP[$E] = $1134;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1154 = (HEAP[$C] >>> 0 >>> 27 | HEAP[$C] << 5) + (HEAP[$D] & HEAP[$E] | (HEAP[$D] | HEAP[$E]) & HEAP[$T]) + HEAP[$A] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$B] = $1154;
      
      var $1156 = HEAP[$WP] + 4;
      HEAP[$WP] = $1156;
      
      
      
      var $1160 = HEAP[$D] >>> 0 >>> 2 | HEAP[$D] << 30;
      HEAP[$D] = $1160;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1180 = (HEAP[$B] >>> 0 >>> 27 | HEAP[$B] << 5) + (HEAP[$C] & HEAP[$D] | (HEAP[$C] | HEAP[$D]) & HEAP[$E]) + HEAP[$T] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$A] = $1180;
      
      var $1182 = HEAP[$WP] + 4;
      HEAP[$WP] = $1182;
      
      
      
      var $1186 = HEAP[$C] >>> 0 >>> 2 | HEAP[$C] << 30;
      HEAP[$C] = $1186;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1206 = (HEAP[$A] >>> 0 >>> 27 | HEAP[$A] << 5) + (HEAP[$B] & HEAP[$C] | (HEAP[$B] | HEAP[$C]) & HEAP[$D]) + HEAP[$E] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$T] = $1206;
      
      var $1208 = HEAP[$WP] + 4;
      HEAP[$WP] = $1208;
      
      
      
      var $1212 = HEAP[$B] >>> 0 >>> 2 | HEAP[$B] << 30;
      HEAP[$B] = $1212;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1232 = (HEAP[$T] >>> 0 >>> 27 | HEAP[$T] << 5) + (HEAP[$A] & HEAP[$B] | (HEAP[$A] | HEAP[$B]) & HEAP[$C]) + HEAP[$D] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$E] = $1232;
      
      var $1234 = HEAP[$WP] + 4;
      HEAP[$WP] = $1234;
      
      
      
      var $1238 = HEAP[$A] >>> 0 >>> 2 | HEAP[$A] << 30;
      HEAP[$A] = $1238;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1258 = (HEAP[$E] >>> 0 >>> 27 | HEAP[$E] << 5) + (HEAP[$T] & HEAP[$A] | (HEAP[$T] | HEAP[$A]) & HEAP[$B]) + HEAP[$C] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$D] = $1258;
      
      var $1260 = HEAP[$WP] + 4;
      HEAP[$WP] = $1260;
      
      
      
      var $1264 = HEAP[$T] >>> 0 >>> 2 | HEAP[$T] << 30;
      HEAP[$T] = $1264;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1284 = (HEAP[$D] >>> 0 >>> 27 | HEAP[$D] << 5) + (HEAP[$E] & HEAP[$T] | (HEAP[$E] | HEAP[$T]) & HEAP[$A]) + HEAP[$B] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$C] = $1284;
      
      var $1286 = HEAP[$WP] + 4;
      HEAP[$WP] = $1286;
      
      
      
      var $1290 = HEAP[$E] >>> 0 >>> 2 | HEAP[$E] << 30;
      HEAP[$E] = $1290;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1310 = (HEAP[$C] >>> 0 >>> 27 | HEAP[$C] << 5) + (HEAP[$D] & HEAP[$E] | (HEAP[$D] | HEAP[$E]) & HEAP[$T]) + HEAP[$A] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$B] = $1310;
      
      var $1312 = HEAP[$WP] + 4;
      HEAP[$WP] = $1312;
      
      
      
      var $1316 = HEAP[$D] >>> 0 >>> 2 | HEAP[$D] << 30;
      HEAP[$D] = $1316;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1336 = (HEAP[$B] >>> 0 >>> 27 | HEAP[$B] << 5) + (HEAP[$C] & HEAP[$D] | (HEAP[$C] | HEAP[$D]) & HEAP[$E]) + HEAP[$T] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$A] = $1336;
      
      var $1338 = HEAP[$WP] + 4;
      HEAP[$WP] = $1338;
      
      
      
      var $1342 = HEAP[$C] >>> 0 >>> 2 | HEAP[$C] << 30;
      HEAP[$C] = $1342;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1362 = (HEAP[$A] >>> 0 >>> 27 | HEAP[$A] << 5) + (HEAP[$B] & HEAP[$C] | (HEAP[$B] | HEAP[$C]) & HEAP[$D]) + HEAP[$E] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$T] = $1362;
      
      var $1364 = HEAP[$WP] + 4;
      HEAP[$WP] = $1364;
      
      
      
      var $1368 = HEAP[$B] >>> 0 >>> 2 | HEAP[$B] << 30;
      HEAP[$B] = $1368;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1388 = (HEAP[$T] >>> 0 >>> 27 | HEAP[$T] << 5) + (HEAP[$A] & HEAP[$B] | (HEAP[$A] | HEAP[$B]) & HEAP[$C]) + HEAP[$D] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$E] = $1388;
      
      var $1390 = HEAP[$WP] + 4;
      HEAP[$WP] = $1390;
      
      
      
      var $1394 = HEAP[$A] >>> 0 >>> 2 | HEAP[$A] << 30;
      HEAP[$A] = $1394;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1414 = (HEAP[$E] >>> 0 >>> 27 | HEAP[$E] << 5) + (HEAP[$T] & HEAP[$A] | (HEAP[$T] | HEAP[$A]) & HEAP[$B]) + HEAP[$C] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$D] = $1414;
      
      var $1416 = HEAP[$WP] + 4;
      HEAP[$WP] = $1416;
      
      
      
      var $1420 = HEAP[$T] >>> 0 >>> 2 | HEAP[$T] << 30;
      HEAP[$T] = $1420;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1440 = (HEAP[$D] >>> 0 >>> 27 | HEAP[$D] << 5) + (HEAP[$E] & HEAP[$T] | (HEAP[$E] | HEAP[$T]) & HEAP[$A]) + HEAP[$B] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$C] = $1440;
      
      var $1442 = HEAP[$WP] + 4;
      HEAP[$WP] = $1442;
      
      
      
      var $1446 = HEAP[$E] >>> 0 >>> 2 | HEAP[$E] << 30;
      HEAP[$E] = $1446;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1466 = (HEAP[$C] >>> 0 >>> 27 | HEAP[$C] << 5) + (HEAP[$D] & HEAP[$E] | (HEAP[$D] | HEAP[$E]) & HEAP[$T]) + HEAP[$A] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$B] = $1466;
      
      var $1468 = HEAP[$WP] + 4;
      HEAP[$WP] = $1468;
      
      
      
      var $1472 = HEAP[$D] >>> 0 >>> 2 | HEAP[$D] << 30;
      HEAP[$D] = $1472;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1492 = (HEAP[$B] >>> 0 >>> 27 | HEAP[$B] << 5) + (HEAP[$C] & HEAP[$D] | (HEAP[$C] | HEAP[$D]) & HEAP[$E]) + HEAP[$T] + HEAP[HEAP[$WP]] + -1894007588;
      HEAP[$A] = $1492;
      
      var $1494 = HEAP[$WP] + 4;
      HEAP[$WP] = $1494;
      
      
      
      var $1498 = HEAP[$C] >>> 0 >>> 2 | HEAP[$C] << 30;
      HEAP[$C] = $1498;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1514 = (HEAP[$A] >>> 0 >>> 27 | HEAP[$A] << 5) + (HEAP[$B] ^ HEAP[$C] ^ HEAP[$D]) + HEAP[$E] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$T] = $1514;
      
      var $1516 = HEAP[$WP] + 4;
      HEAP[$WP] = $1516;
      
      
      
      var $1520 = HEAP[$B] >>> 0 >>> 2 | HEAP[$B] << 30;
      HEAP[$B] = $1520;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1536 = (HEAP[$T] >>> 0 >>> 27 | HEAP[$T] << 5) + (HEAP[$A] ^ HEAP[$B] ^ HEAP[$C]) + HEAP[$D] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$E] = $1536;
      
      var $1538 = HEAP[$WP] + 4;
      HEAP[$WP] = $1538;
      
      
      
      var $1542 = HEAP[$A] >>> 0 >>> 2 | HEAP[$A] << 30;
      HEAP[$A] = $1542;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1558 = (HEAP[$E] >>> 0 >>> 27 | HEAP[$E] << 5) + (HEAP[$T] ^ HEAP[$A] ^ HEAP[$B]) + HEAP[$C] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$D] = $1558;
      
      var $1560 = HEAP[$WP] + 4;
      HEAP[$WP] = $1560;
      
      
      
      var $1564 = HEAP[$T] >>> 0 >>> 2 | HEAP[$T] << 30;
      HEAP[$T] = $1564;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1580 = (HEAP[$D] >>> 0 >>> 27 | HEAP[$D] << 5) + (HEAP[$E] ^ HEAP[$T] ^ HEAP[$A]) + HEAP[$B] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$C] = $1580;
      
      var $1582 = HEAP[$WP] + 4;
      HEAP[$WP] = $1582;
      
      
      
      var $1586 = HEAP[$E] >>> 0 >>> 2 | HEAP[$E] << 30;
      HEAP[$E] = $1586;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1602 = (HEAP[$C] >>> 0 >>> 27 | HEAP[$C] << 5) + (HEAP[$D] ^ HEAP[$E] ^ HEAP[$T]) + HEAP[$A] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$B] = $1602;
      
      var $1604 = HEAP[$WP] + 4;
      HEAP[$WP] = $1604;
      
      
      
      var $1608 = HEAP[$D] >>> 0 >>> 2 | HEAP[$D] << 30;
      HEAP[$D] = $1608;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1624 = (HEAP[$B] >>> 0 >>> 27 | HEAP[$B] << 5) + (HEAP[$C] ^ HEAP[$D] ^ HEAP[$E]) + HEAP[$T] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$A] = $1624;
      
      var $1626 = HEAP[$WP] + 4;
      HEAP[$WP] = $1626;
      
      
      
      var $1630 = HEAP[$C] >>> 0 >>> 2 | HEAP[$C] << 30;
      HEAP[$C] = $1630;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1646 = (HEAP[$A] >>> 0 >>> 27 | HEAP[$A] << 5) + (HEAP[$B] ^ HEAP[$C] ^ HEAP[$D]) + HEAP[$E] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$T] = $1646;
      
      var $1648 = HEAP[$WP] + 4;
      HEAP[$WP] = $1648;
      
      
      
      var $1652 = HEAP[$B] >>> 0 >>> 2 | HEAP[$B] << 30;
      HEAP[$B] = $1652;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1668 = (HEAP[$T] >>> 0 >>> 27 | HEAP[$T] << 5) + (HEAP[$A] ^ HEAP[$B] ^ HEAP[$C]) + HEAP[$D] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$E] = $1668;
      
      var $1670 = HEAP[$WP] + 4;
      HEAP[$WP] = $1670;
      
      
      
      var $1674 = HEAP[$A] >>> 0 >>> 2 | HEAP[$A] << 30;
      HEAP[$A] = $1674;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1690 = (HEAP[$E] >>> 0 >>> 27 | HEAP[$E] << 5) + (HEAP[$T] ^ HEAP[$A] ^ HEAP[$B]) + HEAP[$C] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$D] = $1690;
      
      var $1692 = HEAP[$WP] + 4;
      HEAP[$WP] = $1692;
      
      
      
      var $1696 = HEAP[$T] >>> 0 >>> 2 | HEAP[$T] << 30;
      HEAP[$T] = $1696;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1712 = (HEAP[$D] >>> 0 >>> 27 | HEAP[$D] << 5) + (HEAP[$E] ^ HEAP[$T] ^ HEAP[$A]) + HEAP[$B] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$C] = $1712;
      
      var $1714 = HEAP[$WP] + 4;
      HEAP[$WP] = $1714;
      
      
      
      var $1718 = HEAP[$E] >>> 0 >>> 2 | HEAP[$E] << 30;
      HEAP[$E] = $1718;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1734 = (HEAP[$C] >>> 0 >>> 27 | HEAP[$C] << 5) + (HEAP[$D] ^ HEAP[$E] ^ HEAP[$T]) + HEAP[$A] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$B] = $1734;
      
      var $1736 = HEAP[$WP] + 4;
      HEAP[$WP] = $1736;
      
      
      
      var $1740 = HEAP[$D] >>> 0 >>> 2 | HEAP[$D] << 30;
      HEAP[$D] = $1740;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1756 = (HEAP[$B] >>> 0 >>> 27 | HEAP[$B] << 5) + (HEAP[$C] ^ HEAP[$D] ^ HEAP[$E]) + HEAP[$T] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$A] = $1756;
      
      var $1758 = HEAP[$WP] + 4;
      HEAP[$WP] = $1758;
      
      
      
      var $1762 = HEAP[$C] >>> 0 >>> 2 | HEAP[$C] << 30;
      HEAP[$C] = $1762;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1778 = (HEAP[$A] >>> 0 >>> 27 | HEAP[$A] << 5) + (HEAP[$B] ^ HEAP[$C] ^ HEAP[$D]) + HEAP[$E] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$T] = $1778;
      
      var $1780 = HEAP[$WP] + 4;
      HEAP[$WP] = $1780;
      
      
      
      var $1784 = HEAP[$B] >>> 0 >>> 2 | HEAP[$B] << 30;
      HEAP[$B] = $1784;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1800 = (HEAP[$T] >>> 0 >>> 27 | HEAP[$T] << 5) + (HEAP[$A] ^ HEAP[$B] ^ HEAP[$C]) + HEAP[$D] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$E] = $1800;
      
      var $1802 = HEAP[$WP] + 4;
      HEAP[$WP] = $1802;
      
      
      
      var $1806 = HEAP[$A] >>> 0 >>> 2 | HEAP[$A] << 30;
      HEAP[$A] = $1806;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1822 = (HEAP[$E] >>> 0 >>> 27 | HEAP[$E] << 5) + (HEAP[$T] ^ HEAP[$A] ^ HEAP[$B]) + HEAP[$C] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$D] = $1822;
      
      var $1824 = HEAP[$WP] + 4;
      HEAP[$WP] = $1824;
      
      
      
      var $1828 = HEAP[$T] >>> 0 >>> 2 | HEAP[$T] << 30;
      HEAP[$T] = $1828;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1844 = (HEAP[$D] >>> 0 >>> 27 | HEAP[$D] << 5) + (HEAP[$E] ^ HEAP[$T] ^ HEAP[$A]) + HEAP[$B] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$C] = $1844;
      
      var $1846 = HEAP[$WP] + 4;
      HEAP[$WP] = $1846;
      
      
      
      var $1850 = HEAP[$E] >>> 0 >>> 2 | HEAP[$E] << 30;
      HEAP[$E] = $1850;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1866 = (HEAP[$C] >>> 0 >>> 27 | HEAP[$C] << 5) + (HEAP[$D] ^ HEAP[$E] ^ HEAP[$T]) + HEAP[$A] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$B] = $1866;
      
      var $1868 = HEAP[$WP] + 4;
      HEAP[$WP] = $1868;
      
      
      
      var $1872 = HEAP[$D] >>> 0 >>> 2 | HEAP[$D] << 30;
      HEAP[$D] = $1872;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1888 = (HEAP[$B] >>> 0 >>> 27 | HEAP[$B] << 5) + (HEAP[$C] ^ HEAP[$D] ^ HEAP[$E]) + HEAP[$T] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$A] = $1888;
      
      var $1890 = HEAP[$WP] + 4;
      HEAP[$WP] = $1890;
      
      
      
      var $1894 = HEAP[$C] >>> 0 >>> 2 | HEAP[$C] << 30;
      HEAP[$C] = $1894;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1910 = (HEAP[$A] >>> 0 >>> 27 | HEAP[$A] << 5) + (HEAP[$B] ^ HEAP[$C] ^ HEAP[$D]) + HEAP[$E] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$T] = $1910;
      
      var $1912 = HEAP[$WP] + 4;
      HEAP[$WP] = $1912;
      
      
      
      var $1916 = HEAP[$B] >>> 0 >>> 2 | HEAP[$B] << 30;
      HEAP[$B] = $1916;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1932 = (HEAP[$T] >>> 0 >>> 27 | HEAP[$T] << 5) + (HEAP[$A] ^ HEAP[$B] ^ HEAP[$C]) + HEAP[$D] + HEAP[HEAP[$WP]] + -899497514;
      HEAP[$E] = $1932;
      
      var $1934 = HEAP[$WP] + 4;
      HEAP[$WP] = $1934;
      
      
      
      var $1938 = HEAP[$A] >>> 0 >>> 2 | HEAP[$A] << 30;
      HEAP[$A] = $1938;
      
      
      
      
      
      var $1944 = HEAP[HEAP[$sha_info_addr] + 8] + HEAP[$E];
      
      
      var $1947 = HEAP[$sha_info_addr] + 8;
      HEAP[$1947] = $1944;
      
      
      
      
      
      var $1953 = HEAP[HEAP[$sha_info_addr] + 8 + 4] + HEAP[$T];
      
      
      var $1956 = HEAP[$sha_info_addr] + 8 + 4;
      HEAP[$1956] = $1953;
      
      
      
      
      
      var $1962 = HEAP[HEAP[$sha_info_addr] + 8 + 8] + HEAP[$A];
      
      
      var $1965 = HEAP[$sha_info_addr] + 8 + 8;
      HEAP[$1965] = $1962;
      
      
      
      
      
      var $1971 = HEAP[HEAP[$sha_info_addr] + 8 + 12] + HEAP[$B];
      
      
      var $1974 = HEAP[$sha_info_addr] + 8 + 12;
      HEAP[$1974] = $1971;
      
      
      
      
      
      var $1980 = HEAP[HEAP[$sha_info_addr] + 8 + 16] + HEAP[$C];
      
      
      var $1983 = HEAP[$sha_info_addr] + 8 + 16;
      HEAP[$1983] = $1980;
      __label__ = 4;
      break;
     case 4:
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
      
      var $1 = HEAP[$sha_info_addr] + 100;
      HEAP[$1] = 0;
      
      
      
      if (HEAP[$i] == 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $5 = HEAP[$sha_info_addr] + 100;
      HEAP[$5] = 1;
      __label__ = 2;
      break;
     case 2:
      
      
      var $8 = HEAP[$sha_info_addr] + 8;
      HEAP[$8] = 1732584193;
      
      
      var $11 = HEAP[$sha_info_addr] + 8 + 4;
      HEAP[$11] = -271733879;
      
      
      var $14 = HEAP[$sha_info_addr] + 8 + 8;
      HEAP[$14] = -1732584194;
      
      
      var $17 = HEAP[$sha_info_addr] + 8 + 12;
      HEAP[$17] = 271733878;
      
      
      var $20 = HEAP[$sha_info_addr] + 8 + 16;
      HEAP[$20] = -1009589776;
      
      var $22 = HEAP[$sha_info_addr] + 28;
      HEAP[$22] = 0;
      
      var $24 = HEAP[$sha_info_addr] + 32;
      HEAP[$24] = 0;
      
      var $26 = HEAP[$sha_info_addr] + 104;
      HEAP[$26] = 0;
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
      
      
      
      
      
      var $5 = HEAP[HEAP[$sha_info_addr] + 28] + (HEAP[$count_addr] << 3);
      HEAP[$clo] = $5;
      
      
      
      
      
      if (HEAP[HEAP[$sha_info_addr] + 28] > HEAP[$clo]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $14 = HEAP[HEAP[$sha_info_addr] + 32] + 1;
      
      var $16 = HEAP[$sha_info_addr] + 32;
      HEAP[$16] = $14;
      __label__ = 2;
      break;
     case 2:
      
      var $18 = HEAP[$sha_info_addr] + 28;
      var $19 = HEAP[$clo];
      HEAP[$18] = $19;
      
      
      
      
      
      var $25 = HEAP[HEAP[$sha_info_addr] + 32] + (HEAP[$count_addr] >>> 29);
      
      var $27 = HEAP[$sha_info_addr] + 32;
      HEAP[$27] = $25;
      
      
      
      
      if (HEAP[HEAP[$sha_info_addr] + 104] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      
      var $35 = 64 - HEAP[HEAP[$sha_info_addr] + 104];
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
      
      
      
      
      
      
      var $46 = HEAP[$sha_info_addr] + 36 + HEAP[HEAP[$sha_info_addr] + 104];
      var $47 = HEAP[$buffer_addr];
      var $48 = HEAP[$i];
      _llvm_memcpy_p0i8_p0i8_i32($46, $47, $48, 1, 0);
      
      
      var $51 = HEAP[$count_addr] - HEAP[$i];
      HEAP[$count_addr] = $51;
      
      
      var $54 = HEAP[$buffer_addr] + HEAP[$i];
      HEAP[$buffer_addr] = $54;
      
      
      
      
      var $59 = HEAP[HEAP[$sha_info_addr] + 104] + HEAP[$i];
      
      var $61 = HEAP[$sha_info_addr] + 104;
      HEAP[$61] = $59;
      
      
      
      
      if (HEAP[HEAP[$sha_info_addr] + 104] == 64) {
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
      
      
      var $69 = HEAP[$sha_info_addr] + 36;
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
      
      
      var $80 = HEAP[$sha_info_addr] + 36;
      var $81 = HEAP[$buffer_addr];
      var $82 = HEAP[$count_addr];
      _llvm_memcpy_p0i8_p0i8_i32($80, $81, $82, 1, 0);
      var $83 = HEAP[$count_addr];
      
      var $85 = HEAP[$sha_info_addr] + 104;
      HEAP[$85] = $83;
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
      
      
      var $2 = HEAP[HEAP[$sha_info_addr] + 28];
      HEAP[$lo_bit_count] = $2;
      
      
      var $5 = HEAP[HEAP[$sha_info_addr] + 32];
      HEAP[$hi_bit_count] = $5;
      
      
      var $8 = HEAP[$lo_bit_count] >>> 3 & 63;
      HEAP[$count] = $8;
      
      
      
      
      var $13 = HEAP[$sha_info_addr] + 36 + HEAP[$count];
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
      
      
      
      
      var $24 = HEAP[$sha_info_addr] + 36 + HEAP[$count];
      _llvm_memset_p0i8_i32($24, 0, $19, 1, 0);
      var $25 = HEAP[$sha_info_addr];
      _sha_transform($25);
      
      
      var $28 = HEAP[$sha_info_addr] + 36;
      _llvm_memset_p0i8_i32($28, 0, 56, 1, 0);
      __label__ = 3;
      break;
     case 2:
      
      var $30 = 56 - HEAP[$count];
      
      
      
      
      var $35 = HEAP[$sha_info_addr] + 36 + HEAP[$count];
      _llvm_memset_p0i8_i32($35, 0, $30, 1, 0);
      __label__ = 3;
      break;
     case 3:
      
      
      var $38 = HEAP[$hi_bit_count] >>> 24 & 255;
      
      
      var $41 = HEAP[$sha_info_addr] + 36 + 56;
      HEAP[$41] = $38;
      
      
      var $44 = HEAP[$hi_bit_count] >>> 16 & 255;
      
      
      var $47 = HEAP[$sha_info_addr] + 36 + 57;
      HEAP[$47] = $44;
      
      
      var $50 = HEAP[$hi_bit_count] >>> 8 & 255;
      
      
      var $53 = HEAP[$sha_info_addr] + 36 + 58;
      HEAP[$53] = $50;
      
      var $55 = HEAP[$hi_bit_count] & 255;
      
      
      var $58 = HEAP[$sha_info_addr] + 36 + 59;
      HEAP[$58] = $55;
      
      
      var $61 = HEAP[$lo_bit_count] >>> 24 & 255;
      
      
      var $64 = HEAP[$sha_info_addr] + 36 + 60;
      HEAP[$64] = $61;
      
      
      var $67 = HEAP[$lo_bit_count] >>> 16 & 255;
      
      
      var $70 = HEAP[$sha_info_addr] + 36 + 61;
      HEAP[$70] = $67;
      
      
      var $73 = HEAP[$lo_bit_count] >>> 8 & 255;
      
      
      var $76 = HEAP[$sha_info_addr] + 36 + 62;
      HEAP[$76] = $73;
      
      var $78 = HEAP[$lo_bit_count] & 255;
      
      
      var $81 = HEAP[$sha_info_addr] + 36 + 63;
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
      
      
      
      
      
      var $119 = HEAP[HEAP[$sha_info_addr] + 8 + 4] >>> 0 >>> 24 & 255;
      
      var $121 = HEAP[$digest_addr] + 4;
      HEAP[$121] = $119;
      
      
      
      
      
      var $127 = HEAP[HEAP[$sha_info_addr] + 8 + 4] >>> 0 >>> 16 & 255;
      
      var $129 = HEAP[$digest_addr] + 5;
      HEAP[$129] = $127;
      
      
      
      
      
      var $135 = HEAP[HEAP[$sha_info_addr] + 8 + 4] >>> 0 >>> 8 & 255;
      
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
      __label__ = 4;
      break;
     case 4:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _newSHAobject() {
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
      
      var $1 = __PyObject_New(_SHAtype);
      
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
  function _SHA_copy($self, $unused) {
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
      var $1 = _newSHAobject();
      HEAP[$newobj] = $1;
      
      
      if (HEAP[$newobj] == 0) {
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
      var $4 = HEAP[$self_addr];
      var $5 = HEAP[$newobj];
      _SHAcopy($4, $5);
      
      var $7 = HEAP[$newobj];
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
  function _SHA_digest($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 144;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 144);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $digest = __stackBase__ + 16;
      var $temp = __stackBase__ + 36;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      var $1 = HEAP[$self_addr];
      _SHAcopy($1, $temp);
      var $digest1 = $digest;
      _sha_final($digest1, $temp);
      var $digest2 = $digest;
      var $2 = _PyString_FromStringAndSize($digest2, 20);
      HEAP[$0] = $2;
      var $3 = HEAP[$0];
      HEAP[$retval] = $3;
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
  function _SHA_hexdigest($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 163;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 163);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_12 = __stackBase__ + 12;
      var $iftmp_8 = __stackBase__ + 13;
      var $0 = __stackBase__ + 14;
      var $digest = __stackBase__ + 18;
      var $temp = __stackBase__ + 38;
      var $retval1 = __stackBase__ + 146;
      var $hex_digest = __stackBase__ + 150;
      var $i = __stackBase__ + 154;
      var $j = __stackBase__ + 158;
      var $c = __stackBase__ + 162;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      var $1 = HEAP[$self_addr];
      _SHAcopy($1, $temp);
      var $digest2 = $digest;
      _sha_final($digest2, $temp);
      var $2 = _PyString_FromStringAndSize(0, 40);
      HEAP[$retval1] = $2;
      
      
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
      var $5 = HEAP[$retval1];
      var $6 = _PyString_AsString($5);
      HEAP[$hex_digest] = $6;
      
      
      if (HEAP[$hex_digest] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      var $12 = HEAP[HEAP[$retval1]] - 1;
      
      var $14 = HEAP[$retval1];
      HEAP[$14] = $12;
      
      
      
      
      if (HEAP[HEAP[$retval1]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$retval1] + 4] + 24];
      var $24 = HEAP[$retval1];
      FUNCTION_TABLE[$23]($24);
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 6:
      HEAP[$j] = 0;
      var $25 = HEAP[$j];
      HEAP[$i] = $25;
      __label__ = 14;
      break;
     case 7:
      
      
      
      
      var $30 = HEAP[$digest + HEAP[$i]] >>> 4 & 15;
      HEAP[$c] = $30;
      
      
      if (HEAP[$c] > 9) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $34 = HEAP[$c] + 87;
      HEAP[$iftmp_8] = $34;
      __label__ = 10;
      break;
     case 9:
      
      var $36 = HEAP[$c] + 48;
      HEAP[$iftmp_8] = $36;
      __label__ = 10;
      break;
     case 10:
      var $37 = HEAP[$iftmp_8];
      HEAP[$c] = $37;
      
      
      var $40 = HEAP[$hex_digest] + HEAP[$j];
      var $41 = HEAP[$c];
      HEAP[$40] = $41;
      
      var $43 = HEAP[$j] + 1;
      HEAP[$j] = $43;
      
      
      
      var $47 = HEAP[$digest + HEAP[$i]] & 15;
      HEAP[$c] = $47;
      
      
      if (HEAP[$c] > 9) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      var $51 = HEAP[$c] + 87;
      HEAP[$iftmp_12] = $51;
      __label__ = 13;
      break;
     case 12:
      
      var $53 = HEAP[$c] + 48;
      HEAP[$iftmp_12] = $53;
      __label__ = 13;
      break;
     case 13:
      var $54 = HEAP[$iftmp_12];
      HEAP[$c] = $54;
      
      
      var $57 = HEAP[$hex_digest] + HEAP[$j];
      var $58 = HEAP[$c];
      HEAP[$57] = $58;
      
      var $60 = HEAP[$j] + 1;
      HEAP[$j] = $60;
      
      var $62 = HEAP[$i] + 1;
      HEAP[$i] = $62;
      __label__ = 14;
      break;
     case 14:
      
      
      if (HEAP[$i] <= 19) {
        __label__ = 7;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $65 = HEAP[$retval1];
      HEAP[$0] = $65;
      __label__ = 16;
      break;
     case 16:
      var $66 = HEAP[$0];
      HEAP[$retval] = $66;
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
  function _SHA_update($self, $args) {
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
      var $view = __stackBase__ + 16;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str, allocate([ $view, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$view + 8];
      
      var $7 = HEAP[$view];
      var $8 = HEAP[$self_addr];
      _sha_update($8, $7, $5);
      _PyBuffer_Release($view);
      
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
  function _SHA_get_block_size($self, $closure) {
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
  function _SHA_get_digest_size($self, $closure) {
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
      var $1 = _PyInt_FromLong(20);
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
  function _SHA_get_name($self, $closure) {
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
      var $1 = _PyString_FromStringAndSize(__str5, 4);
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
  function _SHA_new($self, $args, $kwdict) {
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
      var $view = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwdict_addr] = $kwdict;
      var $view1 = $view;
      _llvm_memset_p0i8_i32($view1, 0, 52, 4, 0);
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwdict_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str11, _kwlist_9258, allocate([ $view, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $5 = _newSHAobject();
      HEAP[$new] = $5;
      
      
      if (HEAP[$new] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyBuffer_Release($view);
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
      _PyBuffer_Release($view);
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 8:
      
      
      
      if (HEAP[$view + 8] > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      var $32 = HEAP[$view + 8];
      
      var $34 = HEAP[$view];
      var $35 = HEAP[$new];
      _sha_update($35, $34, $32);
      __label__ = 10;
      break;
     case 10:
      _PyBuffer_Release($view);
      
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
  function _init_sha() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      
      
      HEAP[_SHAtype + 4] = _PyType_Type;
      var $1 = _PyType_Ready(_SHAtype);
      
      if ($1 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = _Py_InitModule4(__str14, _SHA_functions, 0, 0, 1013);
      HEAP[$m] = $3;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $6 = HEAP[$m];
      var $7 = _PyModule_AddIntConstant($6, __str15, 1);
      var $8 = HEAP[$m];
      var $9 = _PyModule_AddIntConstant($8, __str9, 20);
      var $10 = HEAP[$m];
      var $11 = _PyModule_AddIntConstant($10, __str6, 20);
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
  Module["_init_sha"] = _init_sha;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _SHA_copy, 0, _SHA_digest, 0, _SHA_hexdigest, 0, _SHA_update, 0, _SHA_get_digest_size, 0, _SHA_get_block_size, 0, _SHA_get_name, 0, _SHA_dealloc, 0, _SHA_new, 0 ]);
  function run(args) {
    _SHA_copy__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 104, 97, 115, 104, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    _SHA_digest__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 100, 105, 103, 101, 115, 116, 32, 118, 97, 108, 117, 101, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 98, 105, 110, 97, 114, 121, 32, 100, 97, 116, 97, 46, 0 ], "i8", ALLOC_NORMAL);
    _SHA_hexdigest__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 100, 105, 103, 101, 115, 116, 32, 118, 97, 108, 117, 101, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 104, 101, 120, 97, 100, 101, 99, 105, 109, 97, 108, 32, 100, 105, 103, 105, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _SHA_update__doc__ = allocate([ 85, 112, 100, 97, 116, 101, 32, 116, 104, 105, 115, 32, 104, 97, 115, 104, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 39, 115, 32, 115, 116, 97, 116, 101, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 115, 42, 58, 117, 112, 100, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 99, 111, 112, 121, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 100, 105, 103, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 104, 101, 120, 100, 105, 103, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 117, 112, 100, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _SHA_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str5 = allocate([ 83, 72, 65, 49, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 100, 105, 103, 101, 115, 116, 95, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 98, 108, 111, 99, 107, 95, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 100, 105, 103, 101, 115, 116, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    _SHA_getseters = allocate(100, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str10 = allocate([ 95, 115, 104, 97, 46, 115, 104, 97, 0 ], "i8", ALLOC_NORMAL);
    _SHAtype = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _SHA_new__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 83, 72, 65, 32, 104, 97, 115, 104, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 46, 32, 32, 65, 110, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 115, 116, 114, 105, 110, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 10, 109, 97, 121, 32, 98, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 59, 32, 105, 102, 32, 112, 114, 101, 115, 101, 110, 116, 44, 32, 116, 104, 105, 115, 32, 115, 116, 114, 105, 110, 103, 32, 119, 105, 108, 108, 32, 98, 101, 32, 97, 117, 116, 111, 109, 97, 116, 105, 99, 97, 108, 108, 121, 10, 104, 97, 115, 104, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 124, 115, 42, 58, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9258 = allocate(8, "i8*", ALLOC_NORMAL);
    __str12 = allocate([ 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    _SHA_functions = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str14 = allocate([ 95, 115, 104, 97, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 98, 108, 111, 99, 107, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_SHA_methods] = __str1;
    HEAP[_SHA_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_SHA_methods + 12] = _SHA_copy__doc__;
    HEAP[_SHA_methods + 16] = __str2;
    HEAP[_SHA_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_SHA_methods + 28] = _SHA_digest__doc__;
    HEAP[_SHA_methods + 32] = __str3;
    HEAP[_SHA_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_SHA_methods + 44] = _SHA_hexdigest__doc__;
    HEAP[_SHA_methods + 48] = __str4;
    HEAP[_SHA_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_SHA_methods + 60] = _SHA_update__doc__;
    HEAP[_SHA_getseters] = __str6;
    HEAP[_SHA_getseters + 4] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_SHA_getseters + 20] = __str7;
    HEAP[_SHA_getseters + 24] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_SHA_getseters + 40] = __str8;
    HEAP[_SHA_getseters + 44] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_SHA_getseters + 60] = __str9;
    HEAP[_SHA_getseters + 64] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_SHAtype + 12] = __str10;
    HEAP[_SHAtype + 24] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_SHAtype + 116] = _SHA_methods;
    HEAP[_SHAtype + 124] = _SHA_getseters;
    HEAP[_kwlist_9258] = __str12;
    HEAP[_SHA_functions] = __str13;
    HEAP[_SHA_functions + 4] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_SHA_functions + 12] = _SHA_new__doc__;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
