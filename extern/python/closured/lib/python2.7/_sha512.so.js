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
  var $struct_SHAobject___SIZE = 220;
  var $struct_SHAobject___FLATTENER = [ 0, 4, 8, 72, 76, 80, 208, 212, 216 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _SHA512_copy__doc__;
  var _SHA512_digest__doc__;
  var _SHA512_hexdigest__doc__;
  var _SHA512_update__doc__;
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
  var _SHA384type;
  var __str12;
  var _SHA512type;
  var _SHA512_new__doc__;
  var __str13;
  var _kwlist_12028;
  var __str14;
  var _SHA384_new__doc__;
  var _kwlist_12064;
  var __str15;
  var __str16;
  var _SHA_functions;
  var __str17;
  function _longReverse($buffer, $byteCount, $Endianness) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
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
      var $3 = Math.floor($2 / 8);
      HEAP[$byteCount_addr] = $3;
      __label__ = 3;
      break;
     case 2:
      
      var $5 = HEAP[HEAP[$buffer_addr]];
      HEAP[$value] = $5;
      
      var $7 = HEAP[$buffer_addr];
      var $8 = HEAP[$value];
      var $9 = unSign($8, 64, 1) / Math.pow(2, 56);
      var $10 = $9 & 255;
      var $11 = $7;
      HEAP[$11] = $10;
      
      var $13 = HEAP[$buffer_addr];
      var $14 = HEAP[$value];
      var $15 = unSign($14, 64, 1) / Math.pow(2, 48);
      var $16 = $15 & 255;
      var $17 = $13 + 1;
      HEAP[$17] = $16;
      
      var $19 = HEAP[$buffer_addr];
      var $20 = HEAP[$value];
      var $21 = unSign($20, 64, 1) / Math.pow(2, 40);
      var $22 = $21 & 255;
      var $23 = $19 + 2;
      HEAP[$23] = $22;
      
      var $25 = HEAP[$buffer_addr];
      var $26 = HEAP[$value];
      var $27 = unSign($26, 64, 1) / Math.pow(2, 32);
      var $28 = $27 & 255;
      var $29 = $25 + 3;
      HEAP[$29] = $28;
      
      var $31 = HEAP[$buffer_addr];
      var $32 = HEAP[$value];
      var $33 = unSign($32, 64, 1) / Math.pow(2, 24);
      var $34 = $33 & 255;
      var $35 = $31 + 4;
      HEAP[$35] = $34;
      
      var $37 = HEAP[$buffer_addr];
      var $38 = HEAP[$value];
      var $39 = unSign($38, 64, 1) / Math.pow(2, 16);
      var $40 = $39 & 255;
      var $41 = $37 + 5;
      HEAP[$41] = $40;
      
      var $43 = HEAP[$buffer_addr];
      var $44 = HEAP[$value];
      var $45 = unSign($44, 64, 1) / Math.pow(2, 8);
      var $46 = $45 & 255;
      var $47 = $43 + 6;
      HEAP[$47] = $46;
      
      
      
      var $51 = HEAP[$value] & 255;
      var $52 = HEAP[$buffer_addr] + 7;
      HEAP[$52] = $51;
      
      var $54 = HEAP[$buffer_addr] + 8;
      HEAP[$buffer_addr] = $54;
      __label__ = 3;
      break;
     case 3:
      
      var $56 = HEAP[$byteCount_addr] - 1;
      HEAP[$byteCount_addr] = $56;
      
      var $58 = HEAP[$byteCount_addr] != -1;
      if ($58) {
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
      
      
      var $2 = HEAP[HEAP[$src_addr] + 208];
      
      var $4 = HEAP[$dest_addr] + 208;
      HEAP[$4] = $2;
      
      
      var $7 = HEAP[HEAP[$src_addr] + 212];
      
      var $9 = HEAP[$dest_addr] + 212;
      HEAP[$9] = $7;
      
      
      var $12 = HEAP[HEAP[$src_addr] + 216];
      
      var $14 = HEAP[$dest_addr] + 216;
      HEAP[$14] = $12;
      
      
      var $17 = HEAP[HEAP[$src_addr] + 72];
      
      var $19 = HEAP[$dest_addr] + 72;
      HEAP[$19] = $17;
      
      
      var $22 = HEAP[HEAP[$src_addr] + 76];
      
      var $24 = HEAP[$dest_addr] + 76;
      HEAP[$24] = $22;
      
      
      
      
      
      
      var $31 = HEAP[$dest_addr] + 8;
      var $32 = HEAP[$src_addr] + 8;
      _llvm_memcpy_p0i8_p0i8_i32($31, $32, 64, 1, 0);
      
      
      var $35 = HEAP[$src_addr] + 80;
      
      
      var $38 = HEAP[$dest_addr] + 80;
      _llvm_memcpy_p0i8_p0i8_i32($38, $35, 128, 1, 0);
      __label__ = 1;
      break;
     case 1:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sha512_transform($sha_info) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 728;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 728);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $sha_info_addr = __stackBase__;
      var $i = __stackBase__ + 4;
      var $S = __stackBase__ + 8;
      var $W = __stackBase__ + 72;
      var $t0 = __stackBase__ + 712;
      var $t1 = __stackBase__ + 720;
      
      HEAP[$sha_info_addr] = $sha_info;
      
      
      var $2 = HEAP[$sha_info_addr] + 80;
      
      var $W12 = $W;
      _llvm_memcpy_p0i8_p0i8_i32($W12, $2, 128, 1, 0);
      
      
      var $5 = HEAP[HEAP[$sha_info_addr] + 208];
      var $W3 = $W;
      _longReverse($W3, 128, $5);
      HEAP[$i] = 16;
      __label__ = 2;
      break;
     case 1:
      var $6 = HEAP[$i];
      
      
      
      var $10 = HEAP[$W + (HEAP[$i] - 2) * 8];
      var $11 = $10 / Math.pow(2, 19);
      var $12 = $10 * Math.pow(2, 45);
      var $13 = Runtime.or64($11, $12);
      
      
      
      var $17 = HEAP[$W + (HEAP[$i] - 2) * 8];
      var $18 = $17 / Math.pow(2, 61);
      var $19 = $17 * Math.pow(2, 3);
      var $20 = Runtime.or64($18, $19);
      var $21 = Runtime.xor64($13, $20);
      
      
      
      
      var $26 = HEAP[$W + (HEAP[$i] - 2) * 8] / Math.pow(2, 6);
      var $27 = Runtime.xor64($21, $26);
      
      
      
      
      var $32 = $27 + HEAP[$W + (HEAP[$i] - 7) * 8];
      
      
      
      var $36 = HEAP[$W + (HEAP[$i] - 15) * 8];
      var $37 = $36 / Math.pow(2, 1);
      var $38 = $36 * Math.pow(2, 63);
      var $39 = Runtime.or64($37, $38);
      
      
      
      var $43 = HEAP[$W + (HEAP[$i] - 15) * 8];
      var $44 = $43 / Math.pow(2, 8);
      var $45 = $43 * Math.pow(2, 56);
      var $46 = Runtime.or64($44, $45);
      var $47 = Runtime.xor64($39, $46);
      
      
      
      
      var $52 = HEAP[$W + (HEAP[$i] - 15) * 8] / Math.pow(2, 7);
      var $53 = Runtime.xor64($47, $52);
      
      
      
      
      
      var $59 = $32 + $53 + HEAP[$W + (HEAP[$i] - 16) * 8];
      var $60 = $W + $6 * 8;
      HEAP[$60] = $59;
      
      var $62 = HEAP[$i] + 1;
      HEAP[$i] = $62;
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
      HEAP[$i] = 0;
      __label__ = 5;
      break;
     case 4:
      
      
      
      
      
      var $70 = HEAP[HEAP[$sha_info_addr] + 8 + HEAP[$i] * 8];
      var $71 = $S + HEAP[$i] * 8;
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
      
      var $77 = HEAP[$S + 56];
      
      var $79 = HEAP[$S + 32];
      var $80 = unSign($79, 64, 1) / Math.pow(2, 14);
      var $81 = $79 * Math.pow(2, 50);
      var $82 = Runtime.or64($80, $81);
      
      var $84 = HEAP[$S + 32];
      var $85 = unSign($84, 64, 1) / Math.pow(2, 18);
      var $86 = $84 * Math.pow(2, 46);
      var $87 = Runtime.or64($85, $86);
      var $88 = Runtime.xor64($82, $87);
      
      var $90 = HEAP[$S + 32];
      var $91 = unSign($90, 64, 1) / Math.pow(2, 41);
      var $92 = $90 * Math.pow(2, 23);
      var $93 = Runtime.or64($91, $92);
      var $94 = Runtime.xor64($88, $93);
      var $95 = $77 + $94;
      
      var $97 = HEAP[$S + 48];
      
      var $99 = HEAP[$S + 32];
      
      var $101 = HEAP[$S + 40];
      
      var $103 = HEAP[$S + 48];
      var $104 = Runtime.xor64($101, $103);
      var $105 = Runtime.and64($99, $104);
      var $106 = Runtime.xor64($97, $105);
      
      
      
      
      var $111 = $95 + $106 + HEAP[$W] + 0x428a2f98d728b000;
      HEAP[$t0] = $111;
      
      var $113 = HEAP[$S];
      var $114 = unSign($113, 64, 1) / Math.pow(2, 28);
      var $115 = $113 * Math.pow(2, 36);
      var $116 = Runtime.or64($114, $115);
      
      var $118 = HEAP[$S];
      var $119 = unSign($118, 64, 1) / Math.pow(2, 34);
      var $120 = $118 * Math.pow(2, 30);
      var $121 = Runtime.or64($119, $120);
      var $122 = Runtime.xor64($116, $121);
      
      var $124 = HEAP[$S];
      var $125 = unSign($124, 64, 1) / Math.pow(2, 39);
      var $126 = $124 * Math.pow(2, 25);
      var $127 = Runtime.or64($125, $126);
      var $128 = Runtime.xor64($122, $127);
      
      var $130 = HEAP[$S];
      
      var $132 = HEAP[$S + 8];
      var $133 = Runtime.or64($130, $132);
      
      var $135 = HEAP[$S + 16];
      var $136 = Runtime.and64($133, $135);
      
      var $138 = HEAP[$S];
      
      var $140 = HEAP[$S + 8];
      var $141 = Runtime.and64($138, $140);
      var $142 = Runtime.or64($136, $141);
      var $143 = $128 + $142;
      HEAP[$t1] = $143;
      
      
      
      var $147 = HEAP[$S + 24] + HEAP[$t0];
      
      HEAP[$S + 24] = $147;
      
      
      var $151 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 56] = $151;
      
      var $154 = HEAP[$S + 48];
      
      var $156 = HEAP[$S + 24];
      var $157 = unSign($156, 64, 1) / Math.pow(2, 14);
      var $158 = $156 * Math.pow(2, 50);
      var $159 = Runtime.or64($157, $158);
      
      var $161 = HEAP[$S + 24];
      var $162 = unSign($161, 64, 1) / Math.pow(2, 18);
      var $163 = $161 * Math.pow(2, 46);
      var $164 = Runtime.or64($162, $163);
      var $165 = Runtime.xor64($159, $164);
      
      var $167 = HEAP[$S + 24];
      var $168 = unSign($167, 64, 1) / Math.pow(2, 41);
      var $169 = $167 * Math.pow(2, 23);
      var $170 = Runtime.or64($168, $169);
      var $171 = Runtime.xor64($165, $170);
      var $172 = $154 + $171;
      
      var $174 = HEAP[$S + 40];
      
      var $176 = HEAP[$S + 24];
      
      var $178 = HEAP[$S + 32];
      
      var $180 = HEAP[$S + 40];
      var $181 = Runtime.xor64($178, $180);
      var $182 = Runtime.and64($176, $181);
      var $183 = Runtime.xor64($174, $182);
      
      
      
      
      var $188 = $172 + $183 + HEAP[$W + 8] + 0x7137449123ef6400;
      HEAP[$t0] = $188;
      
      var $190 = HEAP[$S + 56];
      var $191 = unSign($190, 64, 1) / Math.pow(2, 28);
      var $192 = $190 * Math.pow(2, 36);
      var $193 = Runtime.or64($191, $192);
      
      var $195 = HEAP[$S + 56];
      var $196 = unSign($195, 64, 1) / Math.pow(2, 34);
      var $197 = $195 * Math.pow(2, 30);
      var $198 = Runtime.or64($196, $197);
      var $199 = Runtime.xor64($193, $198);
      
      var $201 = HEAP[$S + 56];
      var $202 = unSign($201, 64, 1) / Math.pow(2, 39);
      var $203 = $201 * Math.pow(2, 25);
      var $204 = Runtime.or64($202, $203);
      var $205 = Runtime.xor64($199, $204);
      
      var $207 = HEAP[$S + 56];
      
      var $209 = HEAP[$S];
      var $210 = Runtime.or64($207, $209);
      
      var $212 = HEAP[$S + 8];
      var $213 = Runtime.and64($210, $212);
      
      var $215 = HEAP[$S + 56];
      
      var $217 = HEAP[$S];
      var $218 = Runtime.and64($215, $217);
      var $219 = Runtime.or64($213, $218);
      var $220 = $205 + $219;
      HEAP[$t1] = $220;
      
      
      
      var $224 = HEAP[$S + 16] + HEAP[$t0];
      
      HEAP[$S + 16] = $224;
      
      
      var $228 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 48] = $228;
      
      var $231 = HEAP[$S + 40];
      
      var $233 = HEAP[$S + 16];
      var $234 = unSign($233, 64, 1) / Math.pow(2, 14);
      var $235 = $233 * Math.pow(2, 50);
      var $236 = Runtime.or64($234, $235);
      
      var $238 = HEAP[$S + 16];
      var $239 = unSign($238, 64, 1) / Math.pow(2, 18);
      var $240 = $238 * Math.pow(2, 46);
      var $241 = Runtime.or64($239, $240);
      var $242 = Runtime.xor64($236, $241);
      
      var $244 = HEAP[$S + 16];
      var $245 = unSign($244, 64, 1) / Math.pow(2, 41);
      var $246 = $244 * Math.pow(2, 23);
      var $247 = Runtime.or64($245, $246);
      var $248 = Runtime.xor64($242, $247);
      var $249 = $231 + $248;
      
      var $251 = HEAP[$S + 32];
      
      var $253 = HEAP[$S + 16];
      
      var $255 = HEAP[$S + 24];
      
      var $257 = HEAP[$S + 32];
      var $258 = Runtime.xor64($255, $257);
      var $259 = Runtime.and64($253, $258);
      var $260 = Runtime.xor64($251, $259);
      
      
      
      
      var $265 = $249 + $260 + HEAP[$W + 16] + -0x4a3f043013b2c400;
      HEAP[$t0] = $265;
      
      var $267 = HEAP[$S + 48];
      var $268 = unSign($267, 64, 1) / Math.pow(2, 28);
      var $269 = $267 * Math.pow(2, 36);
      var $270 = Runtime.or64($268, $269);
      
      var $272 = HEAP[$S + 48];
      var $273 = unSign($272, 64, 1) / Math.pow(2, 34);
      var $274 = $272 * Math.pow(2, 30);
      var $275 = Runtime.or64($273, $274);
      var $276 = Runtime.xor64($270, $275);
      
      var $278 = HEAP[$S + 48];
      var $279 = unSign($278, 64, 1) / Math.pow(2, 39);
      var $280 = $278 * Math.pow(2, 25);
      var $281 = Runtime.or64($279, $280);
      var $282 = Runtime.xor64($276, $281);
      
      var $284 = HEAP[$S + 48];
      
      var $286 = HEAP[$S + 56];
      var $287 = Runtime.or64($284, $286);
      
      var $289 = HEAP[$S];
      var $290 = Runtime.and64($287, $289);
      
      var $292 = HEAP[$S + 48];
      
      var $294 = HEAP[$S + 56];
      var $295 = Runtime.and64($292, $294);
      var $296 = Runtime.or64($290, $295);
      var $297 = $282 + $296;
      HEAP[$t1] = $297;
      
      
      
      var $301 = HEAP[$S + 8] + HEAP[$t0];
      
      HEAP[$S + 8] = $301;
      
      
      var $305 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 40] = $305;
      
      var $308 = HEAP[$S + 32];
      
      var $310 = HEAP[$S + 8];
      var $311 = unSign($310, 64, 1) / Math.pow(2, 14);
      var $312 = $310 * Math.pow(2, 50);
      var $313 = Runtime.or64($311, $312);
      
      var $315 = HEAP[$S + 8];
      var $316 = unSign($315, 64, 1) / Math.pow(2, 18);
      var $317 = $315 * Math.pow(2, 46);
      var $318 = Runtime.or64($316, $317);
      var $319 = Runtime.xor64($313, $318);
      
      var $321 = HEAP[$S + 8];
      var $322 = unSign($321, 64, 1) / Math.pow(2, 41);
      var $323 = $321 * Math.pow(2, 23);
      var $324 = Runtime.or64($322, $323);
      var $325 = Runtime.xor64($319, $324);
      var $326 = $308 + $325;
      
      var $328 = HEAP[$S + 24];
      
      var $330 = HEAP[$S + 8];
      
      var $332 = HEAP[$S + 16];
      
      var $334 = HEAP[$S + 24];
      var $335 = Runtime.xor64($332, $334);
      var $336 = Runtime.and64($330, $335);
      var $337 = Runtime.xor64($328, $336);
      
      
      
      
      var $342 = $326 + $337 + HEAP[$W + 24] + -0x164a245a7e762400;
      HEAP[$t0] = $342;
      
      var $344 = HEAP[$S + 40];
      var $345 = unSign($344, 64, 1) / Math.pow(2, 28);
      var $346 = $344 * Math.pow(2, 36);
      var $347 = Runtime.or64($345, $346);
      
      var $349 = HEAP[$S + 40];
      var $350 = unSign($349, 64, 1) / Math.pow(2, 34);
      var $351 = $349 * Math.pow(2, 30);
      var $352 = Runtime.or64($350, $351);
      var $353 = Runtime.xor64($347, $352);
      
      var $355 = HEAP[$S + 40];
      var $356 = unSign($355, 64, 1) / Math.pow(2, 39);
      var $357 = $355 * Math.pow(2, 25);
      var $358 = Runtime.or64($356, $357);
      var $359 = Runtime.xor64($353, $358);
      
      var $361 = HEAP[$S + 40];
      
      var $363 = HEAP[$S + 48];
      var $364 = Runtime.or64($361, $363);
      
      var $366 = HEAP[$S + 56];
      var $367 = Runtime.and64($364, $366);
      
      var $369 = HEAP[$S + 40];
      
      var $371 = HEAP[$S + 48];
      var $372 = Runtime.and64($369, $371);
      var $373 = Runtime.or64($367, $372);
      var $374 = $359 + $373;
      HEAP[$t1] = $374;
      
      
      
      var $378 = HEAP[$S] + HEAP[$t0];
      
      HEAP[$S] = $378;
      
      
      var $382 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 32] = $382;
      
      var $385 = HEAP[$S + 24];
      
      var $387 = HEAP[$S];
      var $388 = unSign($387, 64, 1) / Math.pow(2, 14);
      var $389 = $387 * Math.pow(2, 50);
      var $390 = Runtime.or64($388, $389);
      
      var $392 = HEAP[$S];
      var $393 = unSign($392, 64, 1) / Math.pow(2, 18);
      var $394 = $392 * Math.pow(2, 46);
      var $395 = Runtime.or64($393, $394);
      var $396 = Runtime.xor64($390, $395);
      
      var $398 = HEAP[$S];
      var $399 = unSign($398, 64, 1) / Math.pow(2, 41);
      var $400 = $398 * Math.pow(2, 23);
      var $401 = Runtime.or64($399, $400);
      var $402 = Runtime.xor64($396, $401);
      var $403 = $385 + $402;
      
      var $405 = HEAP[$S + 16];
      
      var $407 = HEAP[$S];
      
      var $409 = HEAP[$S + 8];
      
      var $411 = HEAP[$S + 16];
      var $412 = Runtime.xor64($409, $411);
      var $413 = Runtime.and64($407, $412);
      var $414 = Runtime.xor64($405, $413);
      
      
      
      
      var $419 = $403 + $414 + HEAP[$W + 32] + 413170340833845e4;
      HEAP[$t0] = $419;
      
      var $421 = HEAP[$S + 32];
      var $422 = unSign($421, 64, 1) / Math.pow(2, 28);
      var $423 = $421 * Math.pow(2, 36);
      var $424 = Runtime.or64($422, $423);
      
      var $426 = HEAP[$S + 32];
      var $427 = unSign($426, 64, 1) / Math.pow(2, 34);
      var $428 = $426 * Math.pow(2, 30);
      var $429 = Runtime.or64($427, $428);
      var $430 = Runtime.xor64($424, $429);
      
      var $432 = HEAP[$S + 32];
      var $433 = unSign($432, 64, 1) / Math.pow(2, 39);
      var $434 = $432 * Math.pow(2, 25);
      var $435 = Runtime.or64($433, $434);
      var $436 = Runtime.xor64($430, $435);
      
      var $438 = HEAP[$S + 32];
      
      var $440 = HEAP[$S + 40];
      var $441 = Runtime.or64($438, $440);
      
      var $443 = HEAP[$S + 48];
      var $444 = Runtime.and64($441, $443);
      
      var $446 = HEAP[$S + 32];
      
      var $448 = HEAP[$S + 40];
      var $449 = Runtime.and64($446, $448);
      var $450 = Runtime.or64($444, $449);
      var $451 = $436 + $450;
      HEAP[$t1] = $451;
      
      
      
      var $455 = HEAP[$S + 56] + HEAP[$t0];
      
      HEAP[$S + 56] = $455;
      
      
      var $459 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 24] = $459;
      
      var $462 = HEAP[$S + 16];
      
      var $464 = HEAP[$S + 56];
      var $465 = unSign($464, 64, 1) / Math.pow(2, 14);
      var $466 = $464 * Math.pow(2, 50);
      var $467 = Runtime.or64($465, $466);
      
      var $469 = HEAP[$S + 56];
      var $470 = unSign($469, 64, 1) / Math.pow(2, 18);
      var $471 = $469 * Math.pow(2, 46);
      var $472 = Runtime.or64($470, $471);
      var $473 = Runtime.xor64($467, $472);
      
      var $475 = HEAP[$S + 56];
      var $476 = unSign($475, 64, 1) / Math.pow(2, 41);
      var $477 = $475 * Math.pow(2, 23);
      var $478 = Runtime.or64($476, $477);
      var $479 = Runtime.xor64($473, $478);
      var $480 = $462 + $479;
      
      var $482 = HEAP[$S + 8];
      
      var $484 = HEAP[$S + 56];
      
      var $486 = HEAP[$S];
      
      var $488 = HEAP[$S + 8];
      var $489 = Runtime.xor64($486, $488);
      var $490 = Runtime.and64($484, $489);
      var $491 = Runtime.xor64($482, $490);
      
      
      
      
      var $496 = $480 + $491 + HEAP[$W + 40] + 0x59f111f1b605d000;
      HEAP[$t0] = $496;
      
      var $498 = HEAP[$S + 24];
      var $499 = unSign($498, 64, 1) / Math.pow(2, 28);
      var $500 = $498 * Math.pow(2, 36);
      var $501 = Runtime.or64($499, $500);
      
      var $503 = HEAP[$S + 24];
      var $504 = unSign($503, 64, 1) / Math.pow(2, 34);
      var $505 = $503 * Math.pow(2, 30);
      var $506 = Runtime.or64($504, $505);
      var $507 = Runtime.xor64($501, $506);
      
      var $509 = HEAP[$S + 24];
      var $510 = unSign($509, 64, 1) / Math.pow(2, 39);
      var $511 = $509 * Math.pow(2, 25);
      var $512 = Runtime.or64($510, $511);
      var $513 = Runtime.xor64($507, $512);
      
      var $515 = HEAP[$S + 24];
      
      var $517 = HEAP[$S + 32];
      var $518 = Runtime.or64($515, $517);
      
      var $520 = HEAP[$S + 40];
      var $521 = Runtime.and64($518, $520);
      
      var $523 = HEAP[$S + 24];
      
      var $525 = HEAP[$S + 32];
      var $526 = Runtime.and64($523, $525);
      var $527 = Runtime.or64($521, $526);
      var $528 = $513 + $527;
      HEAP[$t1] = $528;
      
      
      
      var $532 = HEAP[$S + 48] + HEAP[$t0];
      
      HEAP[$S + 48] = $532;
      
      
      var $536 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 16] = $536;
      
      var $539 = HEAP[$S + 8];
      
      var $541 = HEAP[$S + 48];
      var $542 = unSign($541, 64, 1) / Math.pow(2, 14);
      var $543 = $541 * Math.pow(2, 50);
      var $544 = Runtime.or64($542, $543);
      
      var $546 = HEAP[$S + 48];
      var $547 = unSign($546, 64, 1) / Math.pow(2, 18);
      var $548 = $546 * Math.pow(2, 46);
      var $549 = Runtime.or64($547, $548);
      var $550 = Runtime.xor64($544, $549);
      
      var $552 = HEAP[$S + 48];
      var $553 = unSign($552, 64, 1) / Math.pow(2, 41);
      var $554 = $552 * Math.pow(2, 23);
      var $555 = Runtime.or64($553, $554);
      var $556 = Runtime.xor64($550, $555);
      var $557 = $539 + $556;
      
      var $559 = HEAP[$S];
      
      var $561 = HEAP[$S + 48];
      
      var $563 = HEAP[$S + 56];
      
      var $565 = HEAP[$S];
      var $566 = Runtime.xor64($563, $565);
      var $567 = Runtime.and64($561, $566);
      var $568 = Runtime.xor64($559, $567);
      
      
      
      
      var $573 = $557 + $568 + HEAP[$W + 48] + -0x6dc07d5b50e6b000;
      HEAP[$t0] = $573;
      
      var $575 = HEAP[$S + 16];
      var $576 = unSign($575, 64, 1) / Math.pow(2, 28);
      var $577 = $575 * Math.pow(2, 36);
      var $578 = Runtime.or64($576, $577);
      
      var $580 = HEAP[$S + 16];
      var $581 = unSign($580, 64, 1) / Math.pow(2, 34);
      var $582 = $580 * Math.pow(2, 30);
      var $583 = Runtime.or64($581, $582);
      var $584 = Runtime.xor64($578, $583);
      
      var $586 = HEAP[$S + 16];
      var $587 = unSign($586, 64, 1) / Math.pow(2, 39);
      var $588 = $586 * Math.pow(2, 25);
      var $589 = Runtime.or64($587, $588);
      var $590 = Runtime.xor64($584, $589);
      
      var $592 = HEAP[$S + 16];
      
      var $594 = HEAP[$S + 24];
      var $595 = Runtime.or64($592, $594);
      
      var $597 = HEAP[$S + 32];
      var $598 = Runtime.and64($595, $597);
      
      var $600 = HEAP[$S + 16];
      
      var $602 = HEAP[$S + 24];
      var $603 = Runtime.and64($600, $602);
      var $604 = Runtime.or64($598, $603);
      var $605 = $590 + $604;
      HEAP[$t1] = $605;
      
      
      
      var $609 = HEAP[$S + 40] + HEAP[$t0];
      
      HEAP[$S + 40] = $609;
      
      
      var $613 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 8] = $613;
      
      var $616 = HEAP[$S];
      
      var $618 = HEAP[$S + 40];
      var $619 = unSign($618, 64, 1) / Math.pow(2, 14);
      var $620 = $618 * Math.pow(2, 50);
      var $621 = Runtime.or64($619, $620);
      
      var $623 = HEAP[$S + 40];
      var $624 = unSign($623, 64, 1) / Math.pow(2, 18);
      var $625 = $623 * Math.pow(2, 46);
      var $626 = Runtime.or64($624, $625);
      var $627 = Runtime.xor64($621, $626);
      
      var $629 = HEAP[$S + 40];
      var $630 = unSign($629, 64, 1) / Math.pow(2, 41);
      var $631 = $629 * Math.pow(2, 23);
      var $632 = Runtime.or64($630, $631);
      var $633 = Runtime.xor64($627, $632);
      var $634 = $616 + $633;
      
      var $636 = HEAP[$S + 56];
      
      var $638 = HEAP[$S + 40];
      
      var $640 = HEAP[$S + 48];
      
      var $642 = HEAP[$S + 56];
      var $643 = Runtime.xor64($640, $642);
      var $644 = Runtime.and64($638, $643);
      var $645 = Runtime.xor64($636, $644);
      
      
      
      
      var $650 = $634 + $645 + HEAP[$W + 56] + -0x54e3a12a25928000;
      HEAP[$t0] = $650;
      
      var $652 = HEAP[$S + 8];
      var $653 = unSign($652, 64, 1) / Math.pow(2, 28);
      var $654 = $652 * Math.pow(2, 36);
      var $655 = Runtime.or64($653, $654);
      
      var $657 = HEAP[$S + 8];
      var $658 = unSign($657, 64, 1) / Math.pow(2, 34);
      var $659 = $657 * Math.pow(2, 30);
      var $660 = Runtime.or64($658, $659);
      var $661 = Runtime.xor64($655, $660);
      
      var $663 = HEAP[$S + 8];
      var $664 = unSign($663, 64, 1) / Math.pow(2, 39);
      var $665 = $663 * Math.pow(2, 25);
      var $666 = Runtime.or64($664, $665);
      var $667 = Runtime.xor64($661, $666);
      
      var $669 = HEAP[$S + 8];
      
      var $671 = HEAP[$S + 16];
      var $672 = Runtime.or64($669, $671);
      
      var $674 = HEAP[$S + 24];
      var $675 = Runtime.and64($672, $674);
      
      var $677 = HEAP[$S + 8];
      
      var $679 = HEAP[$S + 16];
      var $680 = Runtime.and64($677, $679);
      var $681 = Runtime.or64($675, $680);
      var $682 = $667 + $681;
      HEAP[$t1] = $682;
      
      
      
      var $686 = HEAP[$S + 32] + HEAP[$t0];
      
      HEAP[$S + 32] = $686;
      
      
      var $690 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S] = $690;
      
      var $693 = HEAP[$S + 56];
      
      var $695 = HEAP[$S + 32];
      var $696 = unSign($695, 64, 1) / Math.pow(2, 14);
      var $697 = $695 * Math.pow(2, 50);
      var $698 = Runtime.or64($696, $697);
      
      var $700 = HEAP[$S + 32];
      var $701 = unSign($700, 64, 1) / Math.pow(2, 18);
      var $702 = $700 * Math.pow(2, 46);
      var $703 = Runtime.or64($701, $702);
      var $704 = Runtime.xor64($698, $703);
      
      var $706 = HEAP[$S + 32];
      var $707 = unSign($706, 64, 1) / Math.pow(2, 41);
      var $708 = $706 * Math.pow(2, 23);
      var $709 = Runtime.or64($707, $708);
      var $710 = Runtime.xor64($704, $709);
      var $711 = $693 + $710;
      
      var $713 = HEAP[$S + 48];
      
      var $715 = HEAP[$S + 32];
      
      var $717 = HEAP[$S + 40];
      
      var $719 = HEAP[$S + 48];
      var $720 = Runtime.xor64($717, $719);
      var $721 = Runtime.and64($715, $720);
      var $722 = Runtime.xor64($713, $721);
      
      
      
      
      var $727 = $711 + $722 + HEAP[$W + 64] + -0x27f855675cfcfe00;
      HEAP[$t0] = $727;
      
      var $729 = HEAP[$S];
      var $730 = unSign($729, 64, 1) / Math.pow(2, 28);
      var $731 = $729 * Math.pow(2, 36);
      var $732 = Runtime.or64($730, $731);
      
      var $734 = HEAP[$S];
      var $735 = unSign($734, 64, 1) / Math.pow(2, 34);
      var $736 = $734 * Math.pow(2, 30);
      var $737 = Runtime.or64($735, $736);
      var $738 = Runtime.xor64($732, $737);
      
      var $740 = HEAP[$S];
      var $741 = unSign($740, 64, 1) / Math.pow(2, 39);
      var $742 = $740 * Math.pow(2, 25);
      var $743 = Runtime.or64($741, $742);
      var $744 = Runtime.xor64($738, $743);
      
      var $746 = HEAP[$S];
      
      var $748 = HEAP[$S + 8];
      var $749 = Runtime.or64($746, $748);
      
      var $751 = HEAP[$S + 16];
      var $752 = Runtime.and64($749, $751);
      
      var $754 = HEAP[$S];
      
      var $756 = HEAP[$S + 8];
      var $757 = Runtime.and64($754, $756);
      var $758 = Runtime.or64($752, $757);
      var $759 = $744 + $758;
      HEAP[$t1] = $759;
      
      
      
      var $763 = HEAP[$S + 24] + HEAP[$t0];
      
      HEAP[$S + 24] = $763;
      
      
      var $767 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 56] = $767;
      
      var $770 = HEAP[$S + 48];
      
      var $772 = HEAP[$S + 24];
      var $773 = unSign($772, 64, 1) / Math.pow(2, 14);
      var $774 = $772 * Math.pow(2, 50);
      var $775 = Runtime.or64($773, $774);
      
      var $777 = HEAP[$S + 24];
      var $778 = unSign($777, 64, 1) / Math.pow(2, 18);
      var $779 = $777 * Math.pow(2, 46);
      var $780 = Runtime.or64($778, $779);
      var $781 = Runtime.xor64($775, $780);
      
      var $783 = HEAP[$S + 24];
      var $784 = unSign($783, 64, 1) / Math.pow(2, 41);
      var $785 = $783 * Math.pow(2, 23);
      var $786 = Runtime.or64($784, $785);
      var $787 = Runtime.xor64($781, $786);
      var $788 = $770 + $787;
      
      var $790 = HEAP[$S + 40];
      
      var $792 = HEAP[$S + 24];
      
      var $794 = HEAP[$S + 32];
      
      var $796 = HEAP[$S + 40];
      var $797 = Runtime.xor64($794, $796);
      var $798 = Runtime.and64($792, $797);
      var $799 = Runtime.xor64($790, $798);
      
      
      
      
      var $804 = $788 + $799 + HEAP[$W + 72] + 0x12835b0145707000;
      HEAP[$t0] = $804;
      
      var $806 = HEAP[$S + 56];
      var $807 = unSign($806, 64, 1) / Math.pow(2, 28);
      var $808 = $806 * Math.pow(2, 36);
      var $809 = Runtime.or64($807, $808);
      
      var $811 = HEAP[$S + 56];
      var $812 = unSign($811, 64, 1) / Math.pow(2, 34);
      var $813 = $811 * Math.pow(2, 30);
      var $814 = Runtime.or64($812, $813);
      var $815 = Runtime.xor64($809, $814);
      
      var $817 = HEAP[$S + 56];
      var $818 = unSign($817, 64, 1) / Math.pow(2, 39);
      var $819 = $817 * Math.pow(2, 25);
      var $820 = Runtime.or64($818, $819);
      var $821 = Runtime.xor64($815, $820);
      
      var $823 = HEAP[$S + 56];
      
      var $825 = HEAP[$S];
      var $826 = Runtime.or64($823, $825);
      
      var $828 = HEAP[$S + 8];
      var $829 = Runtime.and64($826, $828);
      
      var $831 = HEAP[$S + 56];
      
      var $833 = HEAP[$S];
      var $834 = Runtime.and64($831, $833);
      var $835 = Runtime.or64($829, $834);
      var $836 = $821 + $835;
      HEAP[$t1] = $836;
      
      
      
      var $840 = HEAP[$S + 16] + HEAP[$t0];
      
      HEAP[$S + 16] = $840;
      
      
      var $844 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 48] = $844;
      
      var $847 = HEAP[$S + 40];
      
      var $849 = HEAP[$S + 16];
      var $850 = unSign($849, 64, 1) / Math.pow(2, 14);
      var $851 = $849 * Math.pow(2, 50);
      var $852 = Runtime.or64($850, $851);
      
      var $854 = HEAP[$S + 16];
      var $855 = unSign($854, 64, 1) / Math.pow(2, 18);
      var $856 = $854 * Math.pow(2, 46);
      var $857 = Runtime.or64($855, $856);
      var $858 = Runtime.xor64($852, $857);
      
      var $860 = HEAP[$S + 16];
      var $861 = unSign($860, 64, 1) / Math.pow(2, 41);
      var $862 = $860 * Math.pow(2, 23);
      var $863 = Runtime.or64($861, $862);
      var $864 = Runtime.xor64($858, $863);
      var $865 = $847 + $864;
      
      var $867 = HEAP[$S + 32];
      
      var $869 = HEAP[$S + 16];
      
      var $871 = HEAP[$S + 24];
      
      var $873 = HEAP[$S + 32];
      var $874 = Runtime.xor64($871, $873);
      var $875 = Runtime.and64($869, $874);
      var $876 = Runtime.xor64($867, $875);
      
      
      
      
      var $881 = $865 + $876 + HEAP[$W + 80] + 0x243185be4ee4b200;
      HEAP[$t0] = $881;
      
      var $883 = HEAP[$S + 48];
      var $884 = unSign($883, 64, 1) / Math.pow(2, 28);
      var $885 = $883 * Math.pow(2, 36);
      var $886 = Runtime.or64($884, $885);
      
      var $888 = HEAP[$S + 48];
      var $889 = unSign($888, 64, 1) / Math.pow(2, 34);
      var $890 = $888 * Math.pow(2, 30);
      var $891 = Runtime.or64($889, $890);
      var $892 = Runtime.xor64($886, $891);
      
      var $894 = HEAP[$S + 48];
      var $895 = unSign($894, 64, 1) / Math.pow(2, 39);
      var $896 = $894 * Math.pow(2, 25);
      var $897 = Runtime.or64($895, $896);
      var $898 = Runtime.xor64($892, $897);
      
      var $900 = HEAP[$S + 48];
      
      var $902 = HEAP[$S + 56];
      var $903 = Runtime.or64($900, $902);
      
      var $905 = HEAP[$S];
      var $906 = Runtime.and64($903, $905);
      
      var $908 = HEAP[$S + 48];
      
      var $910 = HEAP[$S + 56];
      var $911 = Runtime.and64($908, $910);
      var $912 = Runtime.or64($906, $911);
      var $913 = $898 + $912;
      HEAP[$t1] = $913;
      
      
      
      var $917 = HEAP[$S + 8] + HEAP[$t0];
      
      HEAP[$S + 8] = $917;
      
      
      var $921 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 40] = $921;
      
      var $924 = HEAP[$S + 32];
      
      var $926 = HEAP[$S + 8];
      var $927 = unSign($926, 64, 1) / Math.pow(2, 14);
      var $928 = $926 * Math.pow(2, 50);
      var $929 = Runtime.or64($927, $928);
      
      var $931 = HEAP[$S + 8];
      var $932 = unSign($931, 64, 1) / Math.pow(2, 18);
      var $933 = $931 * Math.pow(2, 46);
      var $934 = Runtime.or64($932, $933);
      var $935 = Runtime.xor64($929, $934);
      
      var $937 = HEAP[$S + 8];
      var $938 = unSign($937, 64, 1) / Math.pow(2, 41);
      var $939 = $937 * Math.pow(2, 23);
      var $940 = Runtime.or64($938, $939);
      var $941 = Runtime.xor64($935, $940);
      var $942 = $924 + $941;
      
      var $944 = HEAP[$S + 24];
      
      var $946 = HEAP[$S + 8];
      
      var $948 = HEAP[$S + 16];
      
      var $950 = HEAP[$S + 24];
      var $951 = Runtime.xor64($948, $950);
      var $952 = Runtime.and64($946, $951);
      var $953 = Runtime.xor64($944, $952);
      
      
      
      
      var $958 = $942 + $953 + HEAP[$W + 88] + 0x550c7dc3d5ffb400;
      HEAP[$t0] = $958;
      
      var $960 = HEAP[$S + 40];
      var $961 = unSign($960, 64, 1) / Math.pow(2, 28);
      var $962 = $960 * Math.pow(2, 36);
      var $963 = Runtime.or64($961, $962);
      
      var $965 = HEAP[$S + 40];
      var $966 = unSign($965, 64, 1) / Math.pow(2, 34);
      var $967 = $965 * Math.pow(2, 30);
      var $968 = Runtime.or64($966, $967);
      var $969 = Runtime.xor64($963, $968);
      
      var $971 = HEAP[$S + 40];
      var $972 = unSign($971, 64, 1) / Math.pow(2, 39);
      var $973 = $971 * Math.pow(2, 25);
      var $974 = Runtime.or64($972, $973);
      var $975 = Runtime.xor64($969, $974);
      
      var $977 = HEAP[$S + 40];
      
      var $979 = HEAP[$S + 48];
      var $980 = Runtime.or64($977, $979);
      
      var $982 = HEAP[$S + 56];
      var $983 = Runtime.and64($980, $982);
      
      var $985 = HEAP[$S + 40];
      
      var $987 = HEAP[$S + 48];
      var $988 = Runtime.and64($985, $987);
      var $989 = Runtime.or64($983, $988);
      var $990 = $975 + $989;
      HEAP[$t1] = $990;
      
      
      
      var $994 = HEAP[$S] + HEAP[$t0];
      
      HEAP[$S] = $994;
      
      
      var $998 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 32] = $998;
      
      var $1001 = HEAP[$S + 24];
      
      var $1003 = HEAP[$S];
      var $1004 = unSign($1003, 64, 1) / Math.pow(2, 14);
      var $1005 = $1003 * Math.pow(2, 50);
      var $1006 = Runtime.or64($1004, $1005);
      
      var $1008 = HEAP[$S];
      var $1009 = unSign($1008, 64, 1) / Math.pow(2, 18);
      var $1010 = $1008 * Math.pow(2, 46);
      var $1011 = Runtime.or64($1009, $1010);
      var $1012 = Runtime.xor64($1006, $1011);
      
      var $1014 = HEAP[$S];
      var $1015 = unSign($1014, 64, 1) / Math.pow(2, 41);
      var $1016 = $1014 * Math.pow(2, 23);
      var $1017 = Runtime.or64($1015, $1016);
      var $1018 = Runtime.xor64($1012, $1017);
      var $1019 = $1001 + $1018;
      
      var $1021 = HEAP[$S + 16];
      
      var $1023 = HEAP[$S];
      
      var $1025 = HEAP[$S + 8];
      
      var $1027 = HEAP[$S + 16];
      var $1028 = Runtime.xor64($1025, $1027);
      var $1029 = Runtime.and64($1023, $1028);
      var $1030 = Runtime.xor64($1021, $1029);
      
      
      
      
      var $1035 = $1019 + $1030 + HEAP[$W + 96] + 0x72be5d74f27b8800;
      HEAP[$t0] = $1035;
      
      var $1037 = HEAP[$S + 32];
      var $1038 = unSign($1037, 64, 1) / Math.pow(2, 28);
      var $1039 = $1037 * Math.pow(2, 36);
      var $1040 = Runtime.or64($1038, $1039);
      
      var $1042 = HEAP[$S + 32];
      var $1043 = unSign($1042, 64, 1) / Math.pow(2, 34);
      var $1044 = $1042 * Math.pow(2, 30);
      var $1045 = Runtime.or64($1043, $1044);
      var $1046 = Runtime.xor64($1040, $1045);
      
      var $1048 = HEAP[$S + 32];
      var $1049 = unSign($1048, 64, 1) / Math.pow(2, 39);
      var $1050 = $1048 * Math.pow(2, 25);
      var $1051 = Runtime.or64($1049, $1050);
      var $1052 = Runtime.xor64($1046, $1051);
      
      var $1054 = HEAP[$S + 32];
      
      var $1056 = HEAP[$S + 40];
      var $1057 = Runtime.or64($1054, $1056);
      
      var $1059 = HEAP[$S + 48];
      var $1060 = Runtime.and64($1057, $1059);
      
      var $1062 = HEAP[$S + 32];
      
      var $1064 = HEAP[$S + 40];
      var $1065 = Runtime.and64($1062, $1064);
      var $1066 = Runtime.or64($1060, $1065);
      var $1067 = $1052 + $1066;
      HEAP[$t1] = $1067;
      
      
      
      var $1071 = HEAP[$S + 56] + HEAP[$t0];
      
      HEAP[$S + 56] = $1071;
      
      
      var $1075 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 24] = $1075;
      
      var $1078 = HEAP[$S + 16];
      
      var $1080 = HEAP[$S + 56];
      var $1081 = unSign($1080, 64, 1) / Math.pow(2, 14);
      var $1082 = $1080 * Math.pow(2, 50);
      var $1083 = Runtime.or64($1081, $1082);
      
      var $1085 = HEAP[$S + 56];
      var $1086 = unSign($1085, 64, 1) / Math.pow(2, 18);
      var $1087 = $1085 * Math.pow(2, 46);
      var $1088 = Runtime.or64($1086, $1087);
      var $1089 = Runtime.xor64($1083, $1088);
      
      var $1091 = HEAP[$S + 56];
      var $1092 = unSign($1091, 64, 1) / Math.pow(2, 41);
      var $1093 = $1091 * Math.pow(2, 23);
      var $1094 = Runtime.or64($1092, $1093);
      var $1095 = Runtime.xor64($1089, $1094);
      var $1096 = $1078 + $1095;
      
      var $1098 = HEAP[$S + 8];
      
      var $1100 = HEAP[$S + 56];
      
      var $1102 = HEAP[$S];
      
      var $1104 = HEAP[$S + 8];
      var $1105 = Runtime.xor64($1102, $1104);
      var $1106 = Runtime.and64($1100, $1105);
      var $1107 = Runtime.xor64($1098, $1106);
      
      
      
      
      var $1112 = $1096 + $1107 + HEAP[$W + 104] + -0x7f214e01c4e96800;
      HEAP[$t0] = $1112;
      
      var $1114 = HEAP[$S + 24];
      var $1115 = unSign($1114, 64, 1) / Math.pow(2, 28);
      var $1116 = $1114 * Math.pow(2, 36);
      var $1117 = Runtime.or64($1115, $1116);
      
      var $1119 = HEAP[$S + 24];
      var $1120 = unSign($1119, 64, 1) / Math.pow(2, 34);
      var $1121 = $1119 * Math.pow(2, 30);
      var $1122 = Runtime.or64($1120, $1121);
      var $1123 = Runtime.xor64($1117, $1122);
      
      var $1125 = HEAP[$S + 24];
      var $1126 = unSign($1125, 64, 1) / Math.pow(2, 39);
      var $1127 = $1125 * Math.pow(2, 25);
      var $1128 = Runtime.or64($1126, $1127);
      var $1129 = Runtime.xor64($1123, $1128);
      
      var $1131 = HEAP[$S + 24];
      
      var $1133 = HEAP[$S + 32];
      var $1134 = Runtime.or64($1131, $1133);
      
      var $1136 = HEAP[$S + 40];
      var $1137 = Runtime.and64($1134, $1136);
      
      var $1139 = HEAP[$S + 24];
      
      var $1141 = HEAP[$S + 32];
      var $1142 = Runtime.and64($1139, $1141);
      var $1143 = Runtime.or64($1137, $1142);
      var $1144 = $1129 + $1143;
      HEAP[$t1] = $1144;
      
      
      
      var $1148 = HEAP[$S + 48] + HEAP[$t0];
      
      HEAP[$S + 48] = $1148;
      
      
      var $1152 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 16] = $1152;
      
      var $1155 = HEAP[$S + 8];
      
      var $1157 = HEAP[$S + 48];
      var $1158 = unSign($1157, 64, 1) / Math.pow(2, 14);
      var $1159 = $1157 * Math.pow(2, 50);
      var $1160 = Runtime.or64($1158, $1159);
      
      var $1162 = HEAP[$S + 48];
      var $1163 = unSign($1162, 64, 1) / Math.pow(2, 18);
      var $1164 = $1162 * Math.pow(2, 46);
      var $1165 = Runtime.or64($1163, $1164);
      var $1166 = Runtime.xor64($1160, $1165);
      
      var $1168 = HEAP[$S + 48];
      var $1169 = unSign($1168, 64, 1) / Math.pow(2, 41);
      var $1170 = $1168 * Math.pow(2, 23);
      var $1171 = Runtime.or64($1169, $1170);
      var $1172 = Runtime.xor64($1166, $1171);
      var $1173 = $1155 + $1172;
      
      var $1175 = HEAP[$S];
      
      var $1177 = HEAP[$S + 48];
      
      var $1179 = HEAP[$S + 56];
      
      var $1181 = HEAP[$S];
      var $1182 = Runtime.xor64($1179, $1181);
      var $1183 = Runtime.and64($1177, $1182);
      var $1184 = Runtime.xor64($1175, $1183);
      
      
      
      
      var $1189 = $1173 + $1184 + HEAP[$W + 112] + -0x6423f958da38ec00;
      HEAP[$t0] = $1189;
      
      var $1191 = HEAP[$S + 16];
      var $1192 = unSign($1191, 64, 1) / Math.pow(2, 28);
      var $1193 = $1191 * Math.pow(2, 36);
      var $1194 = Runtime.or64($1192, $1193);
      
      var $1196 = HEAP[$S + 16];
      var $1197 = unSign($1196, 64, 1) / Math.pow(2, 34);
      var $1198 = $1196 * Math.pow(2, 30);
      var $1199 = Runtime.or64($1197, $1198);
      var $1200 = Runtime.xor64($1194, $1199);
      
      var $1202 = HEAP[$S + 16];
      var $1203 = unSign($1202, 64, 1) / Math.pow(2, 39);
      var $1204 = $1202 * Math.pow(2, 25);
      var $1205 = Runtime.or64($1203, $1204);
      var $1206 = Runtime.xor64($1200, $1205);
      
      var $1208 = HEAP[$S + 16];
      
      var $1210 = HEAP[$S + 24];
      var $1211 = Runtime.or64($1208, $1210);
      
      var $1213 = HEAP[$S + 32];
      var $1214 = Runtime.and64($1211, $1213);
      
      var $1216 = HEAP[$S + 16];
      
      var $1218 = HEAP[$S + 24];
      var $1219 = Runtime.and64($1216, $1218);
      var $1220 = Runtime.or64($1214, $1219);
      var $1221 = $1206 + $1220;
      HEAP[$t1] = $1221;
      
      
      
      var $1225 = HEAP[$S + 40] + HEAP[$t0];
      
      HEAP[$S + 40] = $1225;
      
      
      var $1229 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 8] = $1229;
      
      var $1232 = HEAP[$S];
      
      var $1234 = HEAP[$S + 40];
      var $1235 = unSign($1234, 64, 1) / Math.pow(2, 14);
      var $1236 = $1234 * Math.pow(2, 50);
      var $1237 = Runtime.or64($1235, $1236);
      
      var $1239 = HEAP[$S + 40];
      var $1240 = unSign($1239, 64, 1) / Math.pow(2, 18);
      var $1241 = $1239 * Math.pow(2, 46);
      var $1242 = Runtime.or64($1240, $1241);
      var $1243 = Runtime.xor64($1237, $1242);
      
      var $1245 = HEAP[$S + 40];
      var $1246 = unSign($1245, 64, 1) / Math.pow(2, 41);
      var $1247 = $1245 * Math.pow(2, 23);
      var $1248 = Runtime.or64($1246, $1247);
      var $1249 = Runtime.xor64($1243, $1248);
      var $1250 = $1232 + $1249;
      
      var $1252 = HEAP[$S + 56];
      
      var $1254 = HEAP[$S + 40];
      
      var $1256 = HEAP[$S + 48];
      
      var $1258 = HEAP[$S + 56];
      var $1259 = Runtime.xor64($1256, $1258);
      var $1260 = Runtime.and64($1254, $1259);
      var $1261 = Runtime.xor64($1252, $1260);
      
      
      
      
      var $1266 = $1250 + $1261 + HEAP[$W + 120] + -0x3e640e8b3096da00;
      HEAP[$t0] = $1266;
      
      var $1268 = HEAP[$S + 8];
      var $1269 = unSign($1268, 64, 1) / Math.pow(2, 28);
      var $1270 = $1268 * Math.pow(2, 36);
      var $1271 = Runtime.or64($1269, $1270);
      
      var $1273 = HEAP[$S + 8];
      var $1274 = unSign($1273, 64, 1) / Math.pow(2, 34);
      var $1275 = $1273 * Math.pow(2, 30);
      var $1276 = Runtime.or64($1274, $1275);
      var $1277 = Runtime.xor64($1271, $1276);
      
      var $1279 = HEAP[$S + 8];
      var $1280 = unSign($1279, 64, 1) / Math.pow(2, 39);
      var $1281 = $1279 * Math.pow(2, 25);
      var $1282 = Runtime.or64($1280, $1281);
      var $1283 = Runtime.xor64($1277, $1282);
      
      var $1285 = HEAP[$S + 8];
      
      var $1287 = HEAP[$S + 16];
      var $1288 = Runtime.or64($1285, $1287);
      
      var $1290 = HEAP[$S + 24];
      var $1291 = Runtime.and64($1288, $1290);
      
      var $1293 = HEAP[$S + 8];
      
      var $1295 = HEAP[$S + 16];
      var $1296 = Runtime.and64($1293, $1295);
      var $1297 = Runtime.or64($1291, $1296);
      var $1298 = $1283 + $1297;
      HEAP[$t1] = $1298;
      
      
      
      var $1302 = HEAP[$S + 32] + HEAP[$t0];
      
      HEAP[$S + 32] = $1302;
      
      
      var $1306 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S] = $1306;
      
      var $1309 = HEAP[$S + 56];
      
      var $1311 = HEAP[$S + 32];
      var $1312 = unSign($1311, 64, 1) / Math.pow(2, 14);
      var $1313 = $1311 * Math.pow(2, 50);
      var $1314 = Runtime.or64($1312, $1313);
      
      var $1316 = HEAP[$S + 32];
      var $1317 = unSign($1316, 64, 1) / Math.pow(2, 18);
      var $1318 = $1316 * Math.pow(2, 46);
      var $1319 = Runtime.or64($1317, $1318);
      var $1320 = Runtime.xor64($1314, $1319);
      
      var $1322 = HEAP[$S + 32];
      var $1323 = unSign($1322, 64, 1) / Math.pow(2, 41);
      var $1324 = $1322 * Math.pow(2, 23);
      var $1325 = Runtime.or64($1323, $1324);
      var $1326 = Runtime.xor64($1320, $1325);
      var $1327 = $1309 + $1326;
      
      var $1329 = HEAP[$S + 48];
      
      var $1331 = HEAP[$S + 32];
      
      var $1333 = HEAP[$S + 40];
      
      var $1335 = HEAP[$S + 48];
      var $1336 = Runtime.xor64($1333, $1335);
      var $1337 = Runtime.and64($1331, $1336);
      var $1338 = Runtime.xor64($1329, $1337);
      
      
      
      
      var $1343 = $1327 + $1338 + HEAP[$W + 128] + -0x1b64963e610eb500;
      HEAP[$t0] = $1343;
      
      var $1345 = HEAP[$S];
      var $1346 = unSign($1345, 64, 1) / Math.pow(2, 28);
      var $1347 = $1345 * Math.pow(2, 36);
      var $1348 = Runtime.or64($1346, $1347);
      
      var $1350 = HEAP[$S];
      var $1351 = unSign($1350, 64, 1) / Math.pow(2, 34);
      var $1352 = $1350 * Math.pow(2, 30);
      var $1353 = Runtime.or64($1351, $1352);
      var $1354 = Runtime.xor64($1348, $1353);
      
      var $1356 = HEAP[$S];
      var $1357 = unSign($1356, 64, 1) / Math.pow(2, 39);
      var $1358 = $1356 * Math.pow(2, 25);
      var $1359 = Runtime.or64($1357, $1358);
      var $1360 = Runtime.xor64($1354, $1359);
      
      var $1362 = HEAP[$S];
      
      var $1364 = HEAP[$S + 8];
      var $1365 = Runtime.or64($1362, $1364);
      
      var $1367 = HEAP[$S + 16];
      var $1368 = Runtime.and64($1365, $1367);
      
      var $1370 = HEAP[$S];
      
      var $1372 = HEAP[$S + 8];
      var $1373 = Runtime.and64($1370, $1372);
      var $1374 = Runtime.or64($1368, $1373);
      var $1375 = $1360 + $1374;
      HEAP[$t1] = $1375;
      
      
      
      var $1379 = HEAP[$S + 24] + HEAP[$t0];
      
      HEAP[$S + 24] = $1379;
      
      
      var $1383 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 56] = $1383;
      
      var $1386 = HEAP[$S + 48];
      
      var $1388 = HEAP[$S + 24];
      var $1389 = unSign($1388, 64, 1) / Math.pow(2, 14);
      var $1390 = $1388 * Math.pow(2, 50);
      var $1391 = Runtime.or64($1389, $1390);
      
      var $1393 = HEAP[$S + 24];
      var $1394 = unSign($1393, 64, 1) / Math.pow(2, 18);
      var $1395 = $1393 * Math.pow(2, 46);
      var $1396 = Runtime.or64($1394, $1395);
      var $1397 = Runtime.xor64($1391, $1396);
      
      var $1399 = HEAP[$S + 24];
      var $1400 = unSign($1399, 64, 1) / Math.pow(2, 41);
      var $1401 = $1399 * Math.pow(2, 23);
      var $1402 = Runtime.or64($1400, $1401);
      var $1403 = Runtime.xor64($1397, $1402);
      var $1404 = $1386 + $1403;
      
      var $1406 = HEAP[$S + 40];
      
      var $1408 = HEAP[$S + 24];
      
      var $1410 = HEAP[$S + 32];
      
      var $1412 = HEAP[$S + 40];
      var $1413 = Runtime.xor64($1410, $1412);
      var $1414 = Runtime.and64($1408, $1413);
      var $1415 = Runtime.xor64($1406, $1414);
      
      
      
      
      var $1420 = $1404 + $1415 + HEAP[$W + 136] + -0x1041b879c7b0da00;
      HEAP[$t0] = $1420;
      
      var $1422 = HEAP[$S + 56];
      var $1423 = unSign($1422, 64, 1) / Math.pow(2, 28);
      var $1424 = $1422 * Math.pow(2, 36);
      var $1425 = Runtime.or64($1423, $1424);
      
      var $1427 = HEAP[$S + 56];
      var $1428 = unSign($1427, 64, 1) / Math.pow(2, 34);
      var $1429 = $1427 * Math.pow(2, 30);
      var $1430 = Runtime.or64($1428, $1429);
      var $1431 = Runtime.xor64($1425, $1430);
      
      var $1433 = HEAP[$S + 56];
      var $1434 = unSign($1433, 64, 1) / Math.pow(2, 39);
      var $1435 = $1433 * Math.pow(2, 25);
      var $1436 = Runtime.or64($1434, $1435);
      var $1437 = Runtime.xor64($1431, $1436);
      
      var $1439 = HEAP[$S + 56];
      
      var $1441 = HEAP[$S];
      var $1442 = Runtime.or64($1439, $1441);
      
      var $1444 = HEAP[$S + 8];
      var $1445 = Runtime.and64($1442, $1444);
      
      var $1447 = HEAP[$S + 56];
      
      var $1449 = HEAP[$S];
      var $1450 = Runtime.and64($1447, $1449);
      var $1451 = Runtime.or64($1445, $1450);
      var $1452 = $1437 + $1451;
      HEAP[$t1] = $1452;
      
      
      
      var $1456 = HEAP[$S + 16] + HEAP[$t0];
      
      HEAP[$S + 16] = $1456;
      
      
      var $1460 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 48] = $1460;
      
      var $1463 = HEAP[$S + 40];
      
      var $1465 = HEAP[$S + 16];
      var $1466 = unSign($1465, 64, 1) / Math.pow(2, 14);
      var $1467 = $1465 * Math.pow(2, 50);
      var $1468 = Runtime.or64($1466, $1467);
      
      var $1470 = HEAP[$S + 16];
      var $1471 = unSign($1470, 64, 1) / Math.pow(2, 18);
      var $1472 = $1470 * Math.pow(2, 46);
      var $1473 = Runtime.or64($1471, $1472);
      var $1474 = Runtime.xor64($1468, $1473);
      
      var $1476 = HEAP[$S + 16];
      var $1477 = unSign($1476, 64, 1) / Math.pow(2, 41);
      var $1478 = $1476 * Math.pow(2, 23);
      var $1479 = Runtime.or64($1477, $1478);
      var $1480 = Runtime.xor64($1474, $1479);
      var $1481 = $1463 + $1480;
      
      var $1483 = HEAP[$S + 32];
      
      var $1485 = HEAP[$S + 16];
      
      var $1487 = HEAP[$S + 24];
      
      var $1489 = HEAP[$S + 32];
      var $1490 = Runtime.xor64($1487, $1489);
      var $1491 = Runtime.and64($1485, $1490);
      var $1492 = Runtime.xor64($1483, $1491);
      
      
      
      
      var $1497 = $1481 + $1492 + HEAP[$W + 144] + 0xfc19dc68b8cd580;
      HEAP[$t0] = $1497;
      
      var $1499 = HEAP[$S + 48];
      var $1500 = unSign($1499, 64, 1) / Math.pow(2, 28);
      var $1501 = $1499 * Math.pow(2, 36);
      var $1502 = Runtime.or64($1500, $1501);
      
      var $1504 = HEAP[$S + 48];
      var $1505 = unSign($1504, 64, 1) / Math.pow(2, 34);
      var $1506 = $1504 * Math.pow(2, 30);
      var $1507 = Runtime.or64($1505, $1506);
      var $1508 = Runtime.xor64($1502, $1507);
      
      var $1510 = HEAP[$S + 48];
      var $1511 = unSign($1510, 64, 1) / Math.pow(2, 39);
      var $1512 = $1510 * Math.pow(2, 25);
      var $1513 = Runtime.or64($1511, $1512);
      var $1514 = Runtime.xor64($1508, $1513);
      
      var $1516 = HEAP[$S + 48];
      
      var $1518 = HEAP[$S + 56];
      var $1519 = Runtime.or64($1516, $1518);
      
      var $1521 = HEAP[$S];
      var $1522 = Runtime.and64($1519, $1521);
      
      var $1524 = HEAP[$S + 48];
      
      var $1526 = HEAP[$S + 56];
      var $1527 = Runtime.and64($1524, $1526);
      var $1528 = Runtime.or64($1522, $1527);
      var $1529 = $1514 + $1528;
      HEAP[$t1] = $1529;
      
      
      
      var $1533 = HEAP[$S + 8] + HEAP[$t0];
      
      HEAP[$S + 8] = $1533;
      
      
      var $1537 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 40] = $1537;
      
      var $1540 = HEAP[$S + 32];
      
      var $1542 = HEAP[$S + 8];
      var $1543 = unSign($1542, 64, 1) / Math.pow(2, 14);
      var $1544 = $1542 * Math.pow(2, 50);
      var $1545 = Runtime.or64($1543, $1544);
      
      var $1547 = HEAP[$S + 8];
      var $1548 = unSign($1547, 64, 1) / Math.pow(2, 18);
      var $1549 = $1547 * Math.pow(2, 46);
      var $1550 = Runtime.or64($1548, $1549);
      var $1551 = Runtime.xor64($1545, $1550);
      
      var $1553 = HEAP[$S + 8];
      var $1554 = unSign($1553, 64, 1) / Math.pow(2, 41);
      var $1555 = $1553 * Math.pow(2, 23);
      var $1556 = Runtime.or64($1554, $1555);
      var $1557 = Runtime.xor64($1551, $1556);
      var $1558 = $1540 + $1557;
      
      var $1560 = HEAP[$S + 24];
      
      var $1562 = HEAP[$S + 8];
      
      var $1564 = HEAP[$S + 16];
      
      var $1566 = HEAP[$S + 24];
      var $1567 = Runtime.xor64($1564, $1566);
      var $1568 = Runtime.and64($1562, $1567);
      var $1569 = Runtime.xor64($1560, $1568);
      
      
      
      
      var $1574 = $1558 + $1569 + HEAP[$W + 152] + 0x240ca1cc77ac9c00;
      HEAP[$t0] = $1574;
      
      var $1576 = HEAP[$S + 40];
      var $1577 = unSign($1576, 64, 1) / Math.pow(2, 28);
      var $1578 = $1576 * Math.pow(2, 36);
      var $1579 = Runtime.or64($1577, $1578);
      
      var $1581 = HEAP[$S + 40];
      var $1582 = unSign($1581, 64, 1) / Math.pow(2, 34);
      var $1583 = $1581 * Math.pow(2, 30);
      var $1584 = Runtime.or64($1582, $1583);
      var $1585 = Runtime.xor64($1579, $1584);
      
      var $1587 = HEAP[$S + 40];
      var $1588 = unSign($1587, 64, 1) / Math.pow(2, 39);
      var $1589 = $1587 * Math.pow(2, 25);
      var $1590 = Runtime.or64($1588, $1589);
      var $1591 = Runtime.xor64($1585, $1590);
      
      var $1593 = HEAP[$S + 40];
      
      var $1595 = HEAP[$S + 48];
      var $1596 = Runtime.or64($1593, $1595);
      
      var $1598 = HEAP[$S + 56];
      var $1599 = Runtime.and64($1596, $1598);
      
      var $1601 = HEAP[$S + 40];
      
      var $1603 = HEAP[$S + 48];
      var $1604 = Runtime.and64($1601, $1603);
      var $1605 = Runtime.or64($1599, $1604);
      var $1606 = $1591 + $1605;
      HEAP[$t1] = $1606;
      
      
      
      var $1610 = HEAP[$S] + HEAP[$t0];
      
      HEAP[$S] = $1610;
      
      
      var $1614 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 32] = $1614;
      
      var $1617 = HEAP[$S + 24];
      
      var $1619 = HEAP[$S];
      var $1620 = unSign($1619, 64, 1) / Math.pow(2, 14);
      var $1621 = $1619 * Math.pow(2, 50);
      var $1622 = Runtime.or64($1620, $1621);
      
      var $1624 = HEAP[$S];
      var $1625 = unSign($1624, 64, 1) / Math.pow(2, 18);
      var $1626 = $1624 * Math.pow(2, 46);
      var $1627 = Runtime.or64($1625, $1626);
      var $1628 = Runtime.xor64($1622, $1627);
      
      var $1630 = HEAP[$S];
      var $1631 = unSign($1630, 64, 1) / Math.pow(2, 41);
      var $1632 = $1630 * Math.pow(2, 23);
      var $1633 = Runtime.or64($1631, $1632);
      var $1634 = Runtime.xor64($1628, $1633);
      var $1635 = $1617 + $1634;
      
      var $1637 = HEAP[$S + 16];
      
      var $1639 = HEAP[$S];
      
      var $1641 = HEAP[$S + 8];
      
      var $1643 = HEAP[$S + 16];
      var $1644 = Runtime.xor64($1641, $1643);
      var $1645 = Runtime.and64($1639, $1644);
      var $1646 = Runtime.xor64($1637, $1645);
      
      
      
      
      var $1651 = $1635 + $1646 + HEAP[$W + 160] + 0x2de92c6f592b0200;
      HEAP[$t0] = $1651;
      
      var $1653 = HEAP[$S + 32];
      var $1654 = unSign($1653, 64, 1) / Math.pow(2, 28);
      var $1655 = $1653 * Math.pow(2, 36);
      var $1656 = Runtime.or64($1654, $1655);
      
      var $1658 = HEAP[$S + 32];
      var $1659 = unSign($1658, 64, 1) / Math.pow(2, 34);
      var $1660 = $1658 * Math.pow(2, 30);
      var $1661 = Runtime.or64($1659, $1660);
      var $1662 = Runtime.xor64($1656, $1661);
      
      var $1664 = HEAP[$S + 32];
      var $1665 = unSign($1664, 64, 1) / Math.pow(2, 39);
      var $1666 = $1664 * Math.pow(2, 25);
      var $1667 = Runtime.or64($1665, $1666);
      var $1668 = Runtime.xor64($1662, $1667);
      
      var $1670 = HEAP[$S + 32];
      
      var $1672 = HEAP[$S + 40];
      var $1673 = Runtime.or64($1670, $1672);
      
      var $1675 = HEAP[$S + 48];
      var $1676 = Runtime.and64($1673, $1675);
      
      var $1678 = HEAP[$S + 32];
      
      var $1680 = HEAP[$S + 40];
      var $1681 = Runtime.and64($1678, $1680);
      var $1682 = Runtime.or64($1676, $1681);
      var $1683 = $1668 + $1682;
      HEAP[$t1] = $1683;
      
      
      
      var $1687 = HEAP[$S + 56] + HEAP[$t0];
      
      HEAP[$S + 56] = $1687;
      
      
      var $1691 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 24] = $1691;
      
      var $1694 = HEAP[$S + 16];
      
      var $1696 = HEAP[$S + 56];
      var $1697 = unSign($1696, 64, 1) / Math.pow(2, 14);
      var $1698 = $1696 * Math.pow(2, 50);
      var $1699 = Runtime.or64($1697, $1698);
      
      var $1701 = HEAP[$S + 56];
      var $1702 = unSign($1701, 64, 1) / Math.pow(2, 18);
      var $1703 = $1701 * Math.pow(2, 46);
      var $1704 = Runtime.or64($1702, $1703);
      var $1705 = Runtime.xor64($1699, $1704);
      
      var $1707 = HEAP[$S + 56];
      var $1708 = unSign($1707, 64, 1) / Math.pow(2, 41);
      var $1709 = $1707 * Math.pow(2, 23);
      var $1710 = Runtime.or64($1708, $1709);
      var $1711 = Runtime.xor64($1705, $1710);
      var $1712 = $1694 + $1711;
      
      var $1714 = HEAP[$S + 8];
      
      var $1716 = HEAP[$S + 56];
      
      var $1718 = HEAP[$S];
      
      var $1720 = HEAP[$S + 8];
      var $1721 = Runtime.xor64($1718, $1720);
      var $1722 = Runtime.and64($1716, $1721);
      var $1723 = Runtime.xor64($1714, $1722);
      
      
      
      
      var $1728 = $1712 + $1723 + HEAP[$W + 168] + 0x4a7484aa6ea6e400;
      HEAP[$t0] = $1728;
      
      var $1730 = HEAP[$S + 24];
      var $1731 = unSign($1730, 64, 1) / Math.pow(2, 28);
      var $1732 = $1730 * Math.pow(2, 36);
      var $1733 = Runtime.or64($1731, $1732);
      
      var $1735 = HEAP[$S + 24];
      var $1736 = unSign($1735, 64, 1) / Math.pow(2, 34);
      var $1737 = $1735 * Math.pow(2, 30);
      var $1738 = Runtime.or64($1736, $1737);
      var $1739 = Runtime.xor64($1733, $1738);
      
      var $1741 = HEAP[$S + 24];
      var $1742 = unSign($1741, 64, 1) / Math.pow(2, 39);
      var $1743 = $1741 * Math.pow(2, 25);
      var $1744 = Runtime.or64($1742, $1743);
      var $1745 = Runtime.xor64($1739, $1744);
      
      var $1747 = HEAP[$S + 24];
      
      var $1749 = HEAP[$S + 32];
      var $1750 = Runtime.or64($1747, $1749);
      
      var $1752 = HEAP[$S + 40];
      var $1753 = Runtime.and64($1750, $1752);
      
      var $1755 = HEAP[$S + 24];
      
      var $1757 = HEAP[$S + 32];
      var $1758 = Runtime.and64($1755, $1757);
      var $1759 = Runtime.or64($1753, $1758);
      var $1760 = $1745 + $1759;
      HEAP[$t1] = $1760;
      
      
      
      var $1764 = HEAP[$S + 48] + HEAP[$t0];
      
      HEAP[$S + 48] = $1764;
      
      
      var $1768 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 16] = $1768;
      
      var $1771 = HEAP[$S + 8];
      
      var $1773 = HEAP[$S + 48];
      var $1774 = unSign($1773, 64, 1) / Math.pow(2, 14);
      var $1775 = $1773 * Math.pow(2, 50);
      var $1776 = Runtime.or64($1774, $1775);
      
      var $1778 = HEAP[$S + 48];
      var $1779 = unSign($1778, 64, 1) / Math.pow(2, 18);
      var $1780 = $1778 * Math.pow(2, 46);
      var $1781 = Runtime.or64($1779, $1780);
      var $1782 = Runtime.xor64($1776, $1781);
      
      var $1784 = HEAP[$S + 48];
      var $1785 = unSign($1784, 64, 1) / Math.pow(2, 41);
      var $1786 = $1784 * Math.pow(2, 23);
      var $1787 = Runtime.or64($1785, $1786);
      var $1788 = Runtime.xor64($1782, $1787);
      var $1789 = $1771 + $1788;
      
      var $1791 = HEAP[$S];
      
      var $1793 = HEAP[$S + 48];
      
      var $1795 = HEAP[$S + 56];
      
      var $1797 = HEAP[$S];
      var $1798 = Runtime.xor64($1795, $1797);
      var $1799 = Runtime.and64($1793, $1798);
      var $1800 = Runtime.xor64($1791, $1799);
      
      
      
      
      var $1805 = $1789 + $1800 + HEAP[$W + 176] + 0x5cb0a9dcbd41fc00;
      HEAP[$t0] = $1805;
      
      var $1807 = HEAP[$S + 16];
      var $1808 = unSign($1807, 64, 1) / Math.pow(2, 28);
      var $1809 = $1807 * Math.pow(2, 36);
      var $1810 = Runtime.or64($1808, $1809);
      
      var $1812 = HEAP[$S + 16];
      var $1813 = unSign($1812, 64, 1) / Math.pow(2, 34);
      var $1814 = $1812 * Math.pow(2, 30);
      var $1815 = Runtime.or64($1813, $1814);
      var $1816 = Runtime.xor64($1810, $1815);
      
      var $1818 = HEAP[$S + 16];
      var $1819 = unSign($1818, 64, 1) / Math.pow(2, 39);
      var $1820 = $1818 * Math.pow(2, 25);
      var $1821 = Runtime.or64($1819, $1820);
      var $1822 = Runtime.xor64($1816, $1821);
      
      var $1824 = HEAP[$S + 16];
      
      var $1826 = HEAP[$S + 24];
      var $1827 = Runtime.or64($1824, $1826);
      
      var $1829 = HEAP[$S + 32];
      var $1830 = Runtime.and64($1827, $1829);
      
      var $1832 = HEAP[$S + 16];
      
      var $1834 = HEAP[$S + 24];
      var $1835 = Runtime.and64($1832, $1834);
      var $1836 = Runtime.or64($1830, $1835);
      var $1837 = $1822 + $1836;
      HEAP[$t1] = $1837;
      
      
      
      var $1841 = HEAP[$S + 40] + HEAP[$t0];
      
      HEAP[$S + 40] = $1841;
      
      
      var $1845 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 8] = $1845;
      
      var $1848 = HEAP[$S];
      
      var $1850 = HEAP[$S + 40];
      var $1851 = unSign($1850, 64, 1) / Math.pow(2, 14);
      var $1852 = $1850 * Math.pow(2, 50);
      var $1853 = Runtime.or64($1851, $1852);
      
      var $1855 = HEAP[$S + 40];
      var $1856 = unSign($1855, 64, 1) / Math.pow(2, 18);
      var $1857 = $1855 * Math.pow(2, 46);
      var $1858 = Runtime.or64($1856, $1857);
      var $1859 = Runtime.xor64($1853, $1858);
      
      var $1861 = HEAP[$S + 40];
      var $1862 = unSign($1861, 64, 1) / Math.pow(2, 41);
      var $1863 = $1861 * Math.pow(2, 23);
      var $1864 = Runtime.or64($1862, $1863);
      var $1865 = Runtime.xor64($1859, $1864);
      var $1866 = $1848 + $1865;
      
      var $1868 = HEAP[$S + 56];
      
      var $1870 = HEAP[$S + 40];
      
      var $1872 = HEAP[$S + 48];
      
      var $1874 = HEAP[$S + 56];
      var $1875 = Runtime.xor64($1872, $1874);
      var $1876 = Runtime.and64($1870, $1875);
      var $1877 = Runtime.xor64($1868, $1876);
      
      
      
      
      var $1882 = $1866 + $1877 + HEAP[$W + 184] + 0x76f988da83115400;
      HEAP[$t0] = $1882;
      
      var $1884 = HEAP[$S + 8];
      var $1885 = unSign($1884, 64, 1) / Math.pow(2, 28);
      var $1886 = $1884 * Math.pow(2, 36);
      var $1887 = Runtime.or64($1885, $1886);
      
      var $1889 = HEAP[$S + 8];
      var $1890 = unSign($1889, 64, 1) / Math.pow(2, 34);
      var $1891 = $1889 * Math.pow(2, 30);
      var $1892 = Runtime.or64($1890, $1891);
      var $1893 = Runtime.xor64($1887, $1892);
      
      var $1895 = HEAP[$S + 8];
      var $1896 = unSign($1895, 64, 1) / Math.pow(2, 39);
      var $1897 = $1895 * Math.pow(2, 25);
      var $1898 = Runtime.or64($1896, $1897);
      var $1899 = Runtime.xor64($1893, $1898);
      
      var $1901 = HEAP[$S + 8];
      
      var $1903 = HEAP[$S + 16];
      var $1904 = Runtime.or64($1901, $1903);
      
      var $1906 = HEAP[$S + 24];
      var $1907 = Runtime.and64($1904, $1906);
      
      var $1909 = HEAP[$S + 8];
      
      var $1911 = HEAP[$S + 16];
      var $1912 = Runtime.and64($1909, $1911);
      var $1913 = Runtime.or64($1907, $1912);
      var $1914 = $1899 + $1913;
      HEAP[$t1] = $1914;
      
      
      
      var $1918 = HEAP[$S + 32] + HEAP[$t0];
      
      HEAP[$S + 32] = $1918;
      
      
      var $1922 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S] = $1922;
      
      var $1925 = HEAP[$S + 56];
      
      var $1927 = HEAP[$S + 32];
      var $1928 = unSign($1927, 64, 1) / Math.pow(2, 14);
      var $1929 = $1927 * Math.pow(2, 50);
      var $1930 = Runtime.or64($1928, $1929);
      
      var $1932 = HEAP[$S + 32];
      var $1933 = unSign($1932, 64, 1) / Math.pow(2, 18);
      var $1934 = $1932 * Math.pow(2, 46);
      var $1935 = Runtime.or64($1933, $1934);
      var $1936 = Runtime.xor64($1930, $1935);
      
      var $1938 = HEAP[$S + 32];
      var $1939 = unSign($1938, 64, 1) / Math.pow(2, 41);
      var $1940 = $1938 * Math.pow(2, 23);
      var $1941 = Runtime.or64($1939, $1940);
      var $1942 = Runtime.xor64($1936, $1941);
      var $1943 = $1925 + $1942;
      
      var $1945 = HEAP[$S + 48];
      
      var $1947 = HEAP[$S + 32];
      
      var $1949 = HEAP[$S + 40];
      
      var $1951 = HEAP[$S + 48];
      var $1952 = Runtime.xor64($1949, $1951);
      var $1953 = Runtime.and64($1947, $1952);
      var $1954 = Runtime.xor64($1945, $1953);
      
      
      
      
      var $1959 = $1943 + $1954 + HEAP[$W + 192] + -0x67c1aead11992000;
      HEAP[$t0] = $1959;
      
      var $1961 = HEAP[$S];
      var $1962 = unSign($1961, 64, 1) / Math.pow(2, 28);
      var $1963 = $1961 * Math.pow(2, 36);
      var $1964 = Runtime.or64($1962, $1963);
      
      var $1966 = HEAP[$S];
      var $1967 = unSign($1966, 64, 1) / Math.pow(2, 34);
      var $1968 = $1966 * Math.pow(2, 30);
      var $1969 = Runtime.or64($1967, $1968);
      var $1970 = Runtime.xor64($1964, $1969);
      
      var $1972 = HEAP[$S];
      var $1973 = unSign($1972, 64, 1) / Math.pow(2, 39);
      var $1974 = $1972 * Math.pow(2, 25);
      var $1975 = Runtime.or64($1973, $1974);
      var $1976 = Runtime.xor64($1970, $1975);
      
      var $1978 = HEAP[$S];
      
      var $1980 = HEAP[$S + 8];
      var $1981 = Runtime.or64($1978, $1980);
      
      var $1983 = HEAP[$S + 16];
      var $1984 = Runtime.and64($1981, $1983);
      
      var $1986 = HEAP[$S];
      
      var $1988 = HEAP[$S + 8];
      var $1989 = Runtime.and64($1986, $1988);
      var $1990 = Runtime.or64($1984, $1989);
      var $1991 = $1976 + $1990;
      HEAP[$t1] = $1991;
      
      
      
      var $1995 = HEAP[$S + 24] + HEAP[$t0];
      
      HEAP[$S + 24] = $1995;
      
      
      var $1999 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 56] = $1999;
      
      var $2002 = HEAP[$S + 48];
      
      var $2004 = HEAP[$S + 24];
      var $2005 = unSign($2004, 64, 1) / Math.pow(2, 14);
      var $2006 = $2004 * Math.pow(2, 50);
      var $2007 = Runtime.or64($2005, $2006);
      
      var $2009 = HEAP[$S + 24];
      var $2010 = unSign($2009, 64, 1) / Math.pow(2, 18);
      var $2011 = $2009 * Math.pow(2, 46);
      var $2012 = Runtime.or64($2010, $2011);
      var $2013 = Runtime.xor64($2007, $2012);
      
      var $2015 = HEAP[$S + 24];
      var $2016 = unSign($2015, 64, 1) / Math.pow(2, 41);
      var $2017 = $2015 * Math.pow(2, 23);
      var $2018 = Runtime.or64($2016, $2017);
      var $2019 = Runtime.xor64($2013, $2018);
      var $2020 = $2002 + $2019;
      
      var $2022 = HEAP[$S + 40];
      
      var $2024 = HEAP[$S + 24];
      
      var $2026 = HEAP[$S + 32];
      
      var $2028 = HEAP[$S + 40];
      var $2029 = Runtime.xor64($2026, $2028);
      var $2030 = Runtime.and64($2024, $2029);
      var $2031 = Runtime.xor64($2022, $2030);
      
      
      
      
      var $2036 = $2020 + $2031 + HEAP[$W + 200] + -0x57ce3992d24bcc00;
      HEAP[$t0] = $2036;
      
      var $2038 = HEAP[$S + 56];
      var $2039 = unSign($2038, 64, 1) / Math.pow(2, 28);
      var $2040 = $2038 * Math.pow(2, 36);
      var $2041 = Runtime.or64($2039, $2040);
      
      var $2043 = HEAP[$S + 56];
      var $2044 = unSign($2043, 64, 1) / Math.pow(2, 34);
      var $2045 = $2043 * Math.pow(2, 30);
      var $2046 = Runtime.or64($2044, $2045);
      var $2047 = Runtime.xor64($2041, $2046);
      
      var $2049 = HEAP[$S + 56];
      var $2050 = unSign($2049, 64, 1) / Math.pow(2, 39);
      var $2051 = $2049 * Math.pow(2, 25);
      var $2052 = Runtime.or64($2050, $2051);
      var $2053 = Runtime.xor64($2047, $2052);
      
      var $2055 = HEAP[$S + 56];
      
      var $2057 = HEAP[$S];
      var $2058 = Runtime.or64($2055, $2057);
      
      var $2060 = HEAP[$S + 8];
      var $2061 = Runtime.and64($2058, $2060);
      
      var $2063 = HEAP[$S + 56];
      
      var $2065 = HEAP[$S];
      var $2066 = Runtime.and64($2063, $2065);
      var $2067 = Runtime.or64($2061, $2066);
      var $2068 = $2053 + $2067;
      HEAP[$t1] = $2068;
      
      
      
      var $2072 = HEAP[$S + 16] + HEAP[$t0];
      
      HEAP[$S + 16] = $2072;
      
      
      var $2076 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 48] = $2076;
      
      var $2079 = HEAP[$S + 40];
      
      var $2081 = HEAP[$S + 16];
      var $2082 = unSign($2081, 64, 1) / Math.pow(2, 14);
      var $2083 = $2081 * Math.pow(2, 50);
      var $2084 = Runtime.or64($2082, $2083);
      
      var $2086 = HEAP[$S + 16];
      var $2087 = unSign($2086, 64, 1) / Math.pow(2, 18);
      var $2088 = $2086 * Math.pow(2, 46);
      var $2089 = Runtime.or64($2087, $2088);
      var $2090 = Runtime.xor64($2084, $2089);
      
      var $2092 = HEAP[$S + 16];
      var $2093 = unSign($2092, 64, 1) / Math.pow(2, 41);
      var $2094 = $2092 * Math.pow(2, 23);
      var $2095 = Runtime.or64($2093, $2094);
      var $2096 = Runtime.xor64($2090, $2095);
      var $2097 = $2079 + $2096;
      
      var $2099 = HEAP[$S + 32];
      
      var $2101 = HEAP[$S + 16];
      
      var $2103 = HEAP[$S + 24];
      
      var $2105 = HEAP[$S + 32];
      var $2106 = Runtime.xor64($2103, $2105);
      var $2107 = Runtime.and64($2101, $2106);
      var $2108 = Runtime.xor64($2099, $2107);
      
      
      
      
      var $2113 = $2097 + $2108 + HEAP[$W + 208] + -0x4ffcd8376704e000;
      HEAP[$t0] = $2113;
      
      var $2115 = HEAP[$S + 48];
      var $2116 = unSign($2115, 64, 1) / Math.pow(2, 28);
      var $2117 = $2115 * Math.pow(2, 36);
      var $2118 = Runtime.or64($2116, $2117);
      
      var $2120 = HEAP[$S + 48];
      var $2121 = unSign($2120, 64, 1) / Math.pow(2, 34);
      var $2122 = $2120 * Math.pow(2, 30);
      var $2123 = Runtime.or64($2121, $2122);
      var $2124 = Runtime.xor64($2118, $2123);
      
      var $2126 = HEAP[$S + 48];
      var $2127 = unSign($2126, 64, 1) / Math.pow(2, 39);
      var $2128 = $2126 * Math.pow(2, 25);
      var $2129 = Runtime.or64($2127, $2128);
      var $2130 = Runtime.xor64($2124, $2129);
      
      var $2132 = HEAP[$S + 48];
      
      var $2134 = HEAP[$S + 56];
      var $2135 = Runtime.or64($2132, $2134);
      
      var $2137 = HEAP[$S];
      var $2138 = Runtime.and64($2135, $2137);
      
      var $2140 = HEAP[$S + 48];
      
      var $2142 = HEAP[$S + 56];
      var $2143 = Runtime.and64($2140, $2142);
      var $2144 = Runtime.or64($2138, $2143);
      var $2145 = $2130 + $2144;
      HEAP[$t1] = $2145;
      
      
      
      var $2149 = HEAP[$S + 8] + HEAP[$t0];
      
      HEAP[$S + 8] = $2149;
      
      
      var $2153 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 40] = $2153;
      
      var $2156 = HEAP[$S + 32];
      
      var $2158 = HEAP[$S + 8];
      var $2159 = unSign($2158, 64, 1) / Math.pow(2, 14);
      var $2160 = $2158 * Math.pow(2, 50);
      var $2161 = Runtime.or64($2159, $2160);
      
      var $2163 = HEAP[$S + 8];
      var $2164 = unSign($2163, 64, 1) / Math.pow(2, 18);
      var $2165 = $2163 * Math.pow(2, 46);
      var $2166 = Runtime.or64($2164, $2165);
      var $2167 = Runtime.xor64($2161, $2166);
      
      var $2169 = HEAP[$S + 8];
      var $2170 = unSign($2169, 64, 1) / Math.pow(2, 41);
      var $2171 = $2169 * Math.pow(2, 23);
      var $2172 = Runtime.or64($2170, $2171);
      var $2173 = Runtime.xor64($2167, $2172);
      var $2174 = $2156 + $2173;
      
      var $2176 = HEAP[$S + 24];
      
      var $2178 = HEAP[$S + 8];
      
      var $2180 = HEAP[$S + 16];
      
      var $2182 = HEAP[$S + 24];
      var $2183 = Runtime.xor64($2180, $2182);
      var $2184 = Runtime.and64($2178, $2183);
      var $2185 = Runtime.xor64($2176, $2184);
      
      
      
      
      var $2190 = $2174 + $2185 + HEAP[$W + 216] + -465855184365951e4;
      HEAP[$t0] = $2190;
      
      var $2192 = HEAP[$S + 40];
      var $2193 = unSign($2192, 64, 1) / Math.pow(2, 28);
      var $2194 = $2192 * Math.pow(2, 36);
      var $2195 = Runtime.or64($2193, $2194);
      
      var $2197 = HEAP[$S + 40];
      var $2198 = unSign($2197, 64, 1) / Math.pow(2, 34);
      var $2199 = $2197 * Math.pow(2, 30);
      var $2200 = Runtime.or64($2198, $2199);
      var $2201 = Runtime.xor64($2195, $2200);
      
      var $2203 = HEAP[$S + 40];
      var $2204 = unSign($2203, 64, 1) / Math.pow(2, 39);
      var $2205 = $2203 * Math.pow(2, 25);
      var $2206 = Runtime.or64($2204, $2205);
      var $2207 = Runtime.xor64($2201, $2206);
      
      var $2209 = HEAP[$S + 40];
      
      var $2211 = HEAP[$S + 48];
      var $2212 = Runtime.or64($2209, $2211);
      
      var $2214 = HEAP[$S + 56];
      var $2215 = Runtime.and64($2212, $2214);
      
      var $2217 = HEAP[$S + 40];
      
      var $2219 = HEAP[$S + 48];
      var $2220 = Runtime.and64($2217, $2219);
      var $2221 = Runtime.or64($2215, $2220);
      var $2222 = $2207 + $2221;
      HEAP[$t1] = $2222;
      
      
      
      var $2226 = HEAP[$S] + HEAP[$t0];
      
      HEAP[$S] = $2226;
      
      
      var $2230 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 32] = $2230;
      
      var $2233 = HEAP[$S + 24];
      
      var $2235 = HEAP[$S];
      var $2236 = unSign($2235, 64, 1) / Math.pow(2, 14);
      var $2237 = $2235 * Math.pow(2, 50);
      var $2238 = Runtime.or64($2236, $2237);
      
      var $2240 = HEAP[$S];
      var $2241 = unSign($2240, 64, 1) / Math.pow(2, 18);
      var $2242 = $2240 * Math.pow(2, 46);
      var $2243 = Runtime.or64($2241, $2242);
      var $2244 = Runtime.xor64($2238, $2243);
      
      var $2246 = HEAP[$S];
      var $2247 = unSign($2246, 64, 1) / Math.pow(2, 41);
      var $2248 = $2246 * Math.pow(2, 23);
      var $2249 = Runtime.or64($2247, $2248);
      var $2250 = Runtime.xor64($2244, $2249);
      var $2251 = $2233 + $2250;
      
      var $2253 = HEAP[$S + 16];
      
      var $2255 = HEAP[$S];
      
      var $2257 = HEAP[$S + 8];
      
      var $2259 = HEAP[$S + 16];
      var $2260 = Runtime.xor64($2257, $2259);
      var $2261 = Runtime.and64($2255, $2260);
      var $2262 = Runtime.xor64($2253, $2261);
      
      
      
      
      var $2267 = $2251 + $2262 + HEAP[$W + 224] + -0x391ff40cc2577000;
      HEAP[$t0] = $2267;
      
      var $2269 = HEAP[$S + 32];
      var $2270 = unSign($2269, 64, 1) / Math.pow(2, 28);
      var $2271 = $2269 * Math.pow(2, 36);
      var $2272 = Runtime.or64($2270, $2271);
      
      var $2274 = HEAP[$S + 32];
      var $2275 = unSign($2274, 64, 1) / Math.pow(2, 34);
      var $2276 = $2274 * Math.pow(2, 30);
      var $2277 = Runtime.or64($2275, $2276);
      var $2278 = Runtime.xor64($2272, $2277);
      
      var $2280 = HEAP[$S + 32];
      var $2281 = unSign($2280, 64, 1) / Math.pow(2, 39);
      var $2282 = $2280 * Math.pow(2, 25);
      var $2283 = Runtime.or64($2281, $2282);
      var $2284 = Runtime.xor64($2278, $2283);
      
      var $2286 = HEAP[$S + 32];
      
      var $2288 = HEAP[$S + 40];
      var $2289 = Runtime.or64($2286, $2288);
      
      var $2291 = HEAP[$S + 48];
      var $2292 = Runtime.and64($2289, $2291);
      
      var $2294 = HEAP[$S + 32];
      
      var $2296 = HEAP[$S + 40];
      var $2297 = Runtime.and64($2294, $2296);
      var $2298 = Runtime.or64($2292, $2297);
      var $2299 = $2284 + $2298;
      HEAP[$t1] = $2299;
      
      
      
      var $2303 = HEAP[$S + 56] + HEAP[$t0];
      
      HEAP[$S + 56] = $2303;
      
      
      var $2307 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 24] = $2307;
      
      var $2310 = HEAP[$S + 16];
      
      var $2312 = HEAP[$S + 56];
      var $2313 = unSign($2312, 64, 1) / Math.pow(2, 14);
      var $2314 = $2312 * Math.pow(2, 50);
      var $2315 = Runtime.or64($2313, $2314);
      
      var $2317 = HEAP[$S + 56];
      var $2318 = unSign($2317, 64, 1) / Math.pow(2, 18);
      var $2319 = $2317 * Math.pow(2, 46);
      var $2320 = Runtime.or64($2318, $2319);
      var $2321 = Runtime.xor64($2315, $2320);
      
      var $2323 = HEAP[$S + 56];
      var $2324 = unSign($2323, 64, 1) / Math.pow(2, 41);
      var $2325 = $2323 * Math.pow(2, 23);
      var $2326 = Runtime.or64($2324, $2325);
      var $2327 = Runtime.xor64($2321, $2326);
      var $2328 = $2310 + $2327;
      
      var $2330 = HEAP[$S + 8];
      
      var $2332 = HEAP[$S + 56];
      
      var $2334 = HEAP[$S];
      
      var $2336 = HEAP[$S + 8];
      var $2337 = Runtime.xor64($2334, $2336);
      var $2338 = Runtime.and64($2332, $2337);
      var $2339 = Runtime.xor64($2330, $2338);
      
      
      
      
      var $2344 = $2328 + $2339 + HEAP[$W + 232] + -0x2a586eb86cf55800;
      HEAP[$t0] = $2344;
      
      var $2346 = HEAP[$S + 24];
      var $2347 = unSign($2346, 64, 1) / Math.pow(2, 28);
      var $2348 = $2346 * Math.pow(2, 36);
      var $2349 = Runtime.or64($2347, $2348);
      
      var $2351 = HEAP[$S + 24];
      var $2352 = unSign($2351, 64, 1) / Math.pow(2, 34);
      var $2353 = $2351 * Math.pow(2, 30);
      var $2354 = Runtime.or64($2352, $2353);
      var $2355 = Runtime.xor64($2349, $2354);
      
      var $2357 = HEAP[$S + 24];
      var $2358 = unSign($2357, 64, 1) / Math.pow(2, 39);
      var $2359 = $2357 * Math.pow(2, 25);
      var $2360 = Runtime.or64($2358, $2359);
      var $2361 = Runtime.xor64($2355, $2360);
      
      var $2363 = HEAP[$S + 24];
      
      var $2365 = HEAP[$S + 32];
      var $2366 = Runtime.or64($2363, $2365);
      
      var $2368 = HEAP[$S + 40];
      var $2369 = Runtime.and64($2366, $2368);
      
      var $2371 = HEAP[$S + 24];
      
      var $2373 = HEAP[$S + 32];
      var $2374 = Runtime.and64($2371, $2373);
      var $2375 = Runtime.or64($2369, $2374);
      var $2376 = $2361 + $2375;
      HEAP[$t1] = $2376;
      
      
      
      var $2380 = HEAP[$S + 48] + HEAP[$t0];
      
      HEAP[$S + 48] = $2380;
      
      
      var $2384 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 16] = $2384;
      
      var $2387 = HEAP[$S + 8];
      
      var $2389 = HEAP[$S + 48];
      var $2390 = unSign($2389, 64, 1) / Math.pow(2, 14);
      var $2391 = $2389 * Math.pow(2, 50);
      var $2392 = Runtime.or64($2390, $2391);
      
      var $2394 = HEAP[$S + 48];
      var $2395 = unSign($2394, 64, 1) / Math.pow(2, 18);
      var $2396 = $2394 * Math.pow(2, 46);
      var $2397 = Runtime.or64($2395, $2396);
      var $2398 = Runtime.xor64($2392, $2397);
      
      var $2400 = HEAP[$S + 48];
      var $2401 = unSign($2400, 64, 1) / Math.pow(2, 41);
      var $2402 = $2400 * Math.pow(2, 23);
      var $2403 = Runtime.or64($2401, $2402);
      var $2404 = Runtime.xor64($2398, $2403);
      var $2405 = $2387 + $2404;
      
      var $2407 = HEAP[$S];
      
      var $2409 = HEAP[$S + 48];
      
      var $2411 = HEAP[$S + 56];
      
      var $2413 = HEAP[$S];
      var $2414 = Runtime.xor64($2411, $2413);
      var $2415 = Runtime.and64($2409, $2414);
      var $2416 = Runtime.xor64($2407, $2415);
      
      
      
      
      var $2421 = $2405 + $2416 + HEAP[$W + 240] + 0x6ca6351e0038280;
      HEAP[$t0] = $2421;
      
      var $2423 = HEAP[$S + 16];
      var $2424 = unSign($2423, 64, 1) / Math.pow(2, 28);
      var $2425 = $2423 * Math.pow(2, 36);
      var $2426 = Runtime.or64($2424, $2425);
      
      var $2428 = HEAP[$S + 16];
      var $2429 = unSign($2428, 64, 1) / Math.pow(2, 34);
      var $2430 = $2428 * Math.pow(2, 30);
      var $2431 = Runtime.or64($2429, $2430);
      var $2432 = Runtime.xor64($2426, $2431);
      
      var $2434 = HEAP[$S + 16];
      var $2435 = unSign($2434, 64, 1) / Math.pow(2, 39);
      var $2436 = $2434 * Math.pow(2, 25);
      var $2437 = Runtime.or64($2435, $2436);
      var $2438 = Runtime.xor64($2432, $2437);
      
      var $2440 = HEAP[$S + 16];
      
      var $2442 = HEAP[$S + 24];
      var $2443 = Runtime.or64($2440, $2442);
      
      var $2445 = HEAP[$S + 32];
      var $2446 = Runtime.and64($2443, $2445);
      
      var $2448 = HEAP[$S + 16];
      
      var $2450 = HEAP[$S + 24];
      var $2451 = Runtime.and64($2448, $2450);
      var $2452 = Runtime.or64($2446, $2451);
      var $2453 = $2438 + $2452;
      HEAP[$t1] = $2453;
      
      
      
      var $2457 = HEAP[$S + 40] + HEAP[$t0];
      
      HEAP[$S + 40] = $2457;
      
      
      var $2461 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 8] = $2461;
      
      var $2464 = HEAP[$S];
      
      var $2466 = HEAP[$S + 40];
      var $2467 = unSign($2466, 64, 1) / Math.pow(2, 14);
      var $2468 = $2466 * Math.pow(2, 50);
      var $2469 = Runtime.or64($2467, $2468);
      
      var $2471 = HEAP[$S + 40];
      var $2472 = unSign($2471, 64, 1) / Math.pow(2, 18);
      var $2473 = $2471 * Math.pow(2, 46);
      var $2474 = Runtime.or64($2472, $2473);
      var $2475 = Runtime.xor64($2469, $2474);
      
      var $2477 = HEAP[$S + 40];
      var $2478 = unSign($2477, 64, 1) / Math.pow(2, 41);
      var $2479 = $2477 * Math.pow(2, 23);
      var $2480 = Runtime.or64($2478, $2479);
      var $2481 = Runtime.xor64($2475, $2480);
      var $2482 = $2464 + $2481;
      
      var $2484 = HEAP[$S + 56];
      
      var $2486 = HEAP[$S + 40];
      
      var $2488 = HEAP[$S + 48];
      
      var $2490 = HEAP[$S + 56];
      var $2491 = Runtime.xor64($2488, $2490);
      var $2492 = Runtime.and64($2486, $2491);
      var $2493 = Runtime.xor64($2484, $2492);
      
      
      
      
      var $2498 = $2482 + $2493 + HEAP[$W + 248] + 0x142929670a0e6e00;
      HEAP[$t0] = $2498;
      
      var $2500 = HEAP[$S + 8];
      var $2501 = unSign($2500, 64, 1) / Math.pow(2, 28);
      var $2502 = $2500 * Math.pow(2, 36);
      var $2503 = Runtime.or64($2501, $2502);
      
      var $2505 = HEAP[$S + 8];
      var $2506 = unSign($2505, 64, 1) / Math.pow(2, 34);
      var $2507 = $2505 * Math.pow(2, 30);
      var $2508 = Runtime.or64($2506, $2507);
      var $2509 = Runtime.xor64($2503, $2508);
      
      var $2511 = HEAP[$S + 8];
      var $2512 = unSign($2511, 64, 1) / Math.pow(2, 39);
      var $2513 = $2511 * Math.pow(2, 25);
      var $2514 = Runtime.or64($2512, $2513);
      var $2515 = Runtime.xor64($2509, $2514);
      
      var $2517 = HEAP[$S + 8];
      
      var $2519 = HEAP[$S + 16];
      var $2520 = Runtime.or64($2517, $2519);
      
      var $2522 = HEAP[$S + 24];
      var $2523 = Runtime.and64($2520, $2522);
      
      var $2525 = HEAP[$S + 8];
      
      var $2527 = HEAP[$S + 16];
      var $2528 = Runtime.and64($2525, $2527);
      var $2529 = Runtime.or64($2523, $2528);
      var $2530 = $2515 + $2529;
      HEAP[$t1] = $2530;
      
      
      
      var $2534 = HEAP[$S + 32] + HEAP[$t0];
      
      HEAP[$S + 32] = $2534;
      
      
      var $2538 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S] = $2538;
      
      var $2541 = HEAP[$S + 56];
      
      var $2543 = HEAP[$S + 32];
      var $2544 = unSign($2543, 64, 1) / Math.pow(2, 14);
      var $2545 = $2543 * Math.pow(2, 50);
      var $2546 = Runtime.or64($2544, $2545);
      
      var $2548 = HEAP[$S + 32];
      var $2549 = unSign($2548, 64, 1) / Math.pow(2, 18);
      var $2550 = $2548 * Math.pow(2, 46);
      var $2551 = Runtime.or64($2549, $2550);
      var $2552 = Runtime.xor64($2546, $2551);
      
      var $2554 = HEAP[$S + 32];
      var $2555 = unSign($2554, 64, 1) / Math.pow(2, 41);
      var $2556 = $2554 * Math.pow(2, 23);
      var $2557 = Runtime.or64($2555, $2556);
      var $2558 = Runtime.xor64($2552, $2557);
      var $2559 = $2541 + $2558;
      
      var $2561 = HEAP[$S + 48];
      
      var $2563 = HEAP[$S + 32];
      
      var $2565 = HEAP[$S + 40];
      
      var $2567 = HEAP[$S + 48];
      var $2568 = Runtime.xor64($2565, $2567);
      var $2569 = Runtime.and64($2563, $2568);
      var $2570 = Runtime.xor64($2561, $2569);
      
      
      
      
      var $2575 = $2559 + $2570 + HEAP[$W + 256] + 0x27b70a8546d23000;
      HEAP[$t0] = $2575;
      
      var $2577 = HEAP[$S];
      var $2578 = unSign($2577, 64, 1) / Math.pow(2, 28);
      var $2579 = $2577 * Math.pow(2, 36);
      var $2580 = Runtime.or64($2578, $2579);
      
      var $2582 = HEAP[$S];
      var $2583 = unSign($2582, 64, 1) / Math.pow(2, 34);
      var $2584 = $2582 * Math.pow(2, 30);
      var $2585 = Runtime.or64($2583, $2584);
      var $2586 = Runtime.xor64($2580, $2585);
      
      var $2588 = HEAP[$S];
      var $2589 = unSign($2588, 64, 1) / Math.pow(2, 39);
      var $2590 = $2588 * Math.pow(2, 25);
      var $2591 = Runtime.or64($2589, $2590);
      var $2592 = Runtime.xor64($2586, $2591);
      
      var $2594 = HEAP[$S];
      
      var $2596 = HEAP[$S + 8];
      var $2597 = Runtime.or64($2594, $2596);
      
      var $2599 = HEAP[$S + 16];
      var $2600 = Runtime.and64($2597, $2599);
      
      var $2602 = HEAP[$S];
      
      var $2604 = HEAP[$S + 8];
      var $2605 = Runtime.and64($2602, $2604);
      var $2606 = Runtime.or64($2600, $2605);
      var $2607 = $2592 + $2606;
      HEAP[$t1] = $2607;
      
      
      
      var $2611 = HEAP[$S + 24] + HEAP[$t0];
      
      HEAP[$S + 24] = $2611;
      
      
      var $2615 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 56] = $2615;
      
      var $2618 = HEAP[$S + 48];
      
      var $2620 = HEAP[$S + 24];
      var $2621 = unSign($2620, 64, 1) / Math.pow(2, 14);
      var $2622 = $2620 * Math.pow(2, 50);
      var $2623 = Runtime.or64($2621, $2622);
      
      var $2625 = HEAP[$S + 24];
      var $2626 = unSign($2625, 64, 1) / Math.pow(2, 18);
      var $2627 = $2625 * Math.pow(2, 46);
      var $2628 = Runtime.or64($2626, $2627);
      var $2629 = Runtime.xor64($2623, $2628);
      
      var $2631 = HEAP[$S + 24];
      var $2632 = unSign($2631, 64, 1) / Math.pow(2, 41);
      var $2633 = $2631 * Math.pow(2, 23);
      var $2634 = Runtime.or64($2632, $2633);
      var $2635 = Runtime.xor64($2629, $2634);
      var $2636 = $2618 + $2635;
      
      var $2638 = HEAP[$S + 40];
      
      var $2640 = HEAP[$S + 24];
      
      var $2642 = HEAP[$S + 32];
      
      var $2644 = HEAP[$S + 40];
      var $2645 = Runtime.xor64($2642, $2644);
      var $2646 = Runtime.and64($2640, $2645);
      var $2647 = Runtime.xor64($2638, $2646);
      
      
      
      
      var $2652 = $2636 + $2647 + HEAP[$W + 264] + 0x2e1b21385c26ca00;
      HEAP[$t0] = $2652;
      
      var $2654 = HEAP[$S + 56];
      var $2655 = unSign($2654, 64, 1) / Math.pow(2, 28);
      var $2656 = $2654 * Math.pow(2, 36);
      var $2657 = Runtime.or64($2655, $2656);
      
      var $2659 = HEAP[$S + 56];
      var $2660 = unSign($2659, 64, 1) / Math.pow(2, 34);
      var $2661 = $2659 * Math.pow(2, 30);
      var $2662 = Runtime.or64($2660, $2661);
      var $2663 = Runtime.xor64($2657, $2662);
      
      var $2665 = HEAP[$S + 56];
      var $2666 = unSign($2665, 64, 1) / Math.pow(2, 39);
      var $2667 = $2665 * Math.pow(2, 25);
      var $2668 = Runtime.or64($2666, $2667);
      var $2669 = Runtime.xor64($2663, $2668);
      
      var $2671 = HEAP[$S + 56];
      
      var $2673 = HEAP[$S];
      var $2674 = Runtime.or64($2671, $2673);
      
      var $2676 = HEAP[$S + 8];
      var $2677 = Runtime.and64($2674, $2676);
      
      var $2679 = HEAP[$S + 56];
      
      var $2681 = HEAP[$S];
      var $2682 = Runtime.and64($2679, $2681);
      var $2683 = Runtime.or64($2677, $2682);
      var $2684 = $2669 + $2683;
      HEAP[$t1] = $2684;
      
      
      
      var $2688 = HEAP[$S + 16] + HEAP[$t0];
      
      HEAP[$S + 16] = $2688;
      
      
      var $2692 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 48] = $2692;
      
      var $2695 = HEAP[$S + 40];
      
      var $2697 = HEAP[$S + 16];
      var $2698 = unSign($2697, 64, 1) / Math.pow(2, 14);
      var $2699 = $2697 * Math.pow(2, 50);
      var $2700 = Runtime.or64($2698, $2699);
      
      var $2702 = HEAP[$S + 16];
      var $2703 = unSign($2702, 64, 1) / Math.pow(2, 18);
      var $2704 = $2702 * Math.pow(2, 46);
      var $2705 = Runtime.or64($2703, $2704);
      var $2706 = Runtime.xor64($2700, $2705);
      
      var $2708 = HEAP[$S + 16];
      var $2709 = unSign($2708, 64, 1) / Math.pow(2, 41);
      var $2710 = $2708 * Math.pow(2, 23);
      var $2711 = Runtime.or64($2709, $2710);
      var $2712 = Runtime.xor64($2706, $2711);
      var $2713 = $2695 + $2712;
      
      var $2715 = HEAP[$S + 32];
      
      var $2717 = HEAP[$S + 16];
      
      var $2719 = HEAP[$S + 24];
      
      var $2721 = HEAP[$S + 32];
      var $2722 = Runtime.xor64($2719, $2721);
      var $2723 = Runtime.and64($2717, $2722);
      var $2724 = Runtime.xor64($2715, $2723);
      
      
      
      
      var $2729 = $2713 + $2724 + HEAP[$W + 272] + 0x4d2c6dfc5ac42c00;
      HEAP[$t0] = $2729;
      
      var $2731 = HEAP[$S + 48];
      var $2732 = unSign($2731, 64, 1) / Math.pow(2, 28);
      var $2733 = $2731 * Math.pow(2, 36);
      var $2734 = Runtime.or64($2732, $2733);
      
      var $2736 = HEAP[$S + 48];
      var $2737 = unSign($2736, 64, 1) / Math.pow(2, 34);
      var $2738 = $2736 * Math.pow(2, 30);
      var $2739 = Runtime.or64($2737, $2738);
      var $2740 = Runtime.xor64($2734, $2739);
      
      var $2742 = HEAP[$S + 48];
      var $2743 = unSign($2742, 64, 1) / Math.pow(2, 39);
      var $2744 = $2742 * Math.pow(2, 25);
      var $2745 = Runtime.or64($2743, $2744);
      var $2746 = Runtime.xor64($2740, $2745);
      
      var $2748 = HEAP[$S + 48];
      
      var $2750 = HEAP[$S + 56];
      var $2751 = Runtime.or64($2748, $2750);
      
      var $2753 = HEAP[$S];
      var $2754 = Runtime.and64($2751, $2753);
      
      var $2756 = HEAP[$S + 48];
      
      var $2758 = HEAP[$S + 56];
      var $2759 = Runtime.and64($2756, $2758);
      var $2760 = Runtime.or64($2754, $2759);
      var $2761 = $2746 + $2760;
      HEAP[$t1] = $2761;
      
      
      
      var $2765 = HEAP[$S + 8] + HEAP[$t0];
      
      HEAP[$S + 8] = $2765;
      
      
      var $2769 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 40] = $2769;
      
      var $2772 = HEAP[$S + 32];
      
      var $2774 = HEAP[$S + 8];
      var $2775 = unSign($2774, 64, 1) / Math.pow(2, 14);
      var $2776 = $2774 * Math.pow(2, 50);
      var $2777 = Runtime.or64($2775, $2776);
      
      var $2779 = HEAP[$S + 8];
      var $2780 = unSign($2779, 64, 1) / Math.pow(2, 18);
      var $2781 = $2779 * Math.pow(2, 46);
      var $2782 = Runtime.or64($2780, $2781);
      var $2783 = Runtime.xor64($2777, $2782);
      
      var $2785 = HEAP[$S + 8];
      var $2786 = unSign($2785, 64, 1) / Math.pow(2, 41);
      var $2787 = $2785 * Math.pow(2, 23);
      var $2788 = Runtime.or64($2786, $2787);
      var $2789 = Runtime.xor64($2783, $2788);
      var $2790 = $2772 + $2789;
      
      var $2792 = HEAP[$S + 24];
      
      var $2794 = HEAP[$S + 8];
      
      var $2796 = HEAP[$S + 16];
      
      var $2798 = HEAP[$S + 24];
      var $2799 = Runtime.xor64($2796, $2798);
      var $2800 = Runtime.and64($2794, $2799);
      var $2801 = Runtime.xor64($2792, $2800);
      
      
      
      
      var $2806 = $2790 + $2801 + HEAP[$W + 280] + 0x53380d139d95b400;
      HEAP[$t0] = $2806;
      
      var $2808 = HEAP[$S + 40];
      var $2809 = unSign($2808, 64, 1) / Math.pow(2, 28);
      var $2810 = $2808 * Math.pow(2, 36);
      var $2811 = Runtime.or64($2809, $2810);
      
      var $2813 = HEAP[$S + 40];
      var $2814 = unSign($2813, 64, 1) / Math.pow(2, 34);
      var $2815 = $2813 * Math.pow(2, 30);
      var $2816 = Runtime.or64($2814, $2815);
      var $2817 = Runtime.xor64($2811, $2816);
      
      var $2819 = HEAP[$S + 40];
      var $2820 = unSign($2819, 64, 1) / Math.pow(2, 39);
      var $2821 = $2819 * Math.pow(2, 25);
      var $2822 = Runtime.or64($2820, $2821);
      var $2823 = Runtime.xor64($2817, $2822);
      
      var $2825 = HEAP[$S + 40];
      
      var $2827 = HEAP[$S + 48];
      var $2828 = Runtime.or64($2825, $2827);
      
      var $2830 = HEAP[$S + 56];
      var $2831 = Runtime.and64($2828, $2830);
      
      var $2833 = HEAP[$S + 40];
      
      var $2835 = HEAP[$S + 48];
      var $2836 = Runtime.and64($2833, $2835);
      var $2837 = Runtime.or64($2831, $2836);
      var $2838 = $2823 + $2837;
      HEAP[$t1] = $2838;
      
      
      
      var $2842 = HEAP[$S] + HEAP[$t0];
      
      HEAP[$S] = $2842;
      
      
      var $2846 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 32] = $2846;
      
      var $2849 = HEAP[$S + 24];
      
      var $2851 = HEAP[$S];
      var $2852 = unSign($2851, 64, 1) / Math.pow(2, 14);
      var $2853 = $2851 * Math.pow(2, 50);
      var $2854 = Runtime.or64($2852, $2853);
      
      var $2856 = HEAP[$S];
      var $2857 = unSign($2856, 64, 1) / Math.pow(2, 18);
      var $2858 = $2856 * Math.pow(2, 46);
      var $2859 = Runtime.or64($2857, $2858);
      var $2860 = Runtime.xor64($2854, $2859);
      
      var $2862 = HEAP[$S];
      var $2863 = unSign($2862, 64, 1) / Math.pow(2, 41);
      var $2864 = $2862 * Math.pow(2, 23);
      var $2865 = Runtime.or64($2863, $2864);
      var $2866 = Runtime.xor64($2860, $2865);
      var $2867 = $2849 + $2866;
      
      var $2869 = HEAP[$S + 16];
      
      var $2871 = HEAP[$S];
      
      var $2873 = HEAP[$S + 8];
      
      var $2875 = HEAP[$S + 16];
      var $2876 = Runtime.xor64($2873, $2875);
      var $2877 = Runtime.and64($2871, $2876);
      var $2878 = Runtime.xor64($2869, $2877);
      
      
      
      
      var $2883 = $2867 + $2878 + HEAP[$W + 288] + 0x650a73548baf6400;
      HEAP[$t0] = $2883;
      
      var $2885 = HEAP[$S + 32];
      var $2886 = unSign($2885, 64, 1) / Math.pow(2, 28);
      var $2887 = $2885 * Math.pow(2, 36);
      var $2888 = Runtime.or64($2886, $2887);
      
      var $2890 = HEAP[$S + 32];
      var $2891 = unSign($2890, 64, 1) / Math.pow(2, 34);
      var $2892 = $2890 * Math.pow(2, 30);
      var $2893 = Runtime.or64($2891, $2892);
      var $2894 = Runtime.xor64($2888, $2893);
      
      var $2896 = HEAP[$S + 32];
      var $2897 = unSign($2896, 64, 1) / Math.pow(2, 39);
      var $2898 = $2896 * Math.pow(2, 25);
      var $2899 = Runtime.or64($2897, $2898);
      var $2900 = Runtime.xor64($2894, $2899);
      
      var $2902 = HEAP[$S + 32];
      
      var $2904 = HEAP[$S + 40];
      var $2905 = Runtime.or64($2902, $2904);
      
      var $2907 = HEAP[$S + 48];
      var $2908 = Runtime.and64($2905, $2907);
      
      var $2910 = HEAP[$S + 32];
      
      var $2912 = HEAP[$S + 40];
      var $2913 = Runtime.and64($2910, $2912);
      var $2914 = Runtime.or64($2908, $2913);
      var $2915 = $2900 + $2914;
      HEAP[$t1] = $2915;
      
      
      
      var $2919 = HEAP[$S + 56] + HEAP[$t0];
      
      HEAP[$S + 56] = $2919;
      
      
      var $2923 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 24] = $2923;
      
      var $2926 = HEAP[$S + 16];
      
      var $2928 = HEAP[$S + 56];
      var $2929 = unSign($2928, 64, 1) / Math.pow(2, 14);
      var $2930 = $2928 * Math.pow(2, 50);
      var $2931 = Runtime.or64($2929, $2930);
      
      var $2933 = HEAP[$S + 56];
      var $2934 = unSign($2933, 64, 1) / Math.pow(2, 18);
      var $2935 = $2933 * Math.pow(2, 46);
      var $2936 = Runtime.or64($2934, $2935);
      var $2937 = Runtime.xor64($2931, $2936);
      
      var $2939 = HEAP[$S + 56];
      var $2940 = unSign($2939, 64, 1) / Math.pow(2, 41);
      var $2941 = $2939 * Math.pow(2, 23);
      var $2942 = Runtime.or64($2940, $2941);
      var $2943 = Runtime.xor64($2937, $2942);
      var $2944 = $2926 + $2943;
      
      var $2946 = HEAP[$S + 8];
      
      var $2948 = HEAP[$S + 56];
      
      var $2950 = HEAP[$S];
      
      var $2952 = HEAP[$S + 8];
      var $2953 = Runtime.xor64($2950, $2952);
      var $2954 = Runtime.and64($2948, $2953);
      var $2955 = Runtime.xor64($2946, $2954);
      
      
      
      
      var $2960 = $2944 + $2955 + HEAP[$W + 296] + 0x766a0abb3c77b400;
      HEAP[$t0] = $2960;
      
      var $2962 = HEAP[$S + 24];
      var $2963 = unSign($2962, 64, 1) / Math.pow(2, 28);
      var $2964 = $2962 * Math.pow(2, 36);
      var $2965 = Runtime.or64($2963, $2964);
      
      var $2967 = HEAP[$S + 24];
      var $2968 = unSign($2967, 64, 1) / Math.pow(2, 34);
      var $2969 = $2967 * Math.pow(2, 30);
      var $2970 = Runtime.or64($2968, $2969);
      var $2971 = Runtime.xor64($2965, $2970);
      
      var $2973 = HEAP[$S + 24];
      var $2974 = unSign($2973, 64, 1) / Math.pow(2, 39);
      var $2975 = $2973 * Math.pow(2, 25);
      var $2976 = Runtime.or64($2974, $2975);
      var $2977 = Runtime.xor64($2971, $2976);
      
      var $2979 = HEAP[$S + 24];
      
      var $2981 = HEAP[$S + 32];
      var $2982 = Runtime.or64($2979, $2981);
      
      var $2984 = HEAP[$S + 40];
      var $2985 = Runtime.and64($2982, $2984);
      
      var $2987 = HEAP[$S + 24];
      
      var $2989 = HEAP[$S + 32];
      var $2990 = Runtime.and64($2987, $2989);
      var $2991 = Runtime.or64($2985, $2990);
      var $2992 = $2977 + $2991;
      HEAP[$t1] = $2992;
      
      
      
      var $2996 = HEAP[$S + 48] + HEAP[$t0];
      
      HEAP[$S + 48] = $2996;
      
      
      var $3000 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 16] = $3000;
      
      var $3003 = HEAP[$S + 8];
      
      var $3005 = HEAP[$S + 48];
      var $3006 = unSign($3005, 64, 1) / Math.pow(2, 14);
      var $3007 = $3005 * Math.pow(2, 50);
      var $3008 = Runtime.or64($3006, $3007);
      
      var $3010 = HEAP[$S + 48];
      var $3011 = unSign($3010, 64, 1) / Math.pow(2, 18);
      var $3012 = $3010 * Math.pow(2, 46);
      var $3013 = Runtime.or64($3011, $3012);
      var $3014 = Runtime.xor64($3008, $3013);
      
      var $3016 = HEAP[$S + 48];
      var $3017 = unSign($3016, 64, 1) / Math.pow(2, 41);
      var $3018 = $3016 * Math.pow(2, 23);
      var $3019 = Runtime.or64($3017, $3018);
      var $3020 = Runtime.xor64($3014, $3019);
      var $3021 = $3003 + $3020;
      
      var $3023 = HEAP[$S];
      
      var $3025 = HEAP[$S + 48];
      
      var $3027 = HEAP[$S + 56];
      
      var $3029 = HEAP[$S];
      var $3030 = Runtime.xor64($3027, $3029);
      var $3031 = Runtime.and64($3025, $3030);
      var $3032 = Runtime.xor64($3023, $3031);
      
      
      
      
      var $3037 = $3021 + $3032 + HEAP[$W + 304] + -0x7e3d36d1b8125000;
      HEAP[$t0] = $3037;
      
      var $3039 = HEAP[$S + 16];
      var $3040 = unSign($3039, 64, 1) / Math.pow(2, 28);
      var $3041 = $3039 * Math.pow(2, 36);
      var $3042 = Runtime.or64($3040, $3041);
      
      var $3044 = HEAP[$S + 16];
      var $3045 = unSign($3044, 64, 1) / Math.pow(2, 34);
      var $3046 = $3044 * Math.pow(2, 30);
      var $3047 = Runtime.or64($3045, $3046);
      var $3048 = Runtime.xor64($3042, $3047);
      
      var $3050 = HEAP[$S + 16];
      var $3051 = unSign($3050, 64, 1) / Math.pow(2, 39);
      var $3052 = $3050 * Math.pow(2, 25);
      var $3053 = Runtime.or64($3051, $3052);
      var $3054 = Runtime.xor64($3048, $3053);
      
      var $3056 = HEAP[$S + 16];
      
      var $3058 = HEAP[$S + 24];
      var $3059 = Runtime.or64($3056, $3058);
      
      var $3061 = HEAP[$S + 32];
      var $3062 = Runtime.and64($3059, $3061);
      
      var $3064 = HEAP[$S + 16];
      
      var $3066 = HEAP[$S + 24];
      var $3067 = Runtime.and64($3064, $3066);
      var $3068 = Runtime.or64($3062, $3067);
      var $3069 = $3054 + $3068;
      HEAP[$t1] = $3069;
      
      
      
      var $3073 = HEAP[$S + 40] + HEAP[$t0];
      
      HEAP[$S + 40] = $3073;
      
      
      var $3077 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 8] = $3077;
      
      var $3080 = HEAP[$S];
      
      var $3082 = HEAP[$S + 40];
      var $3083 = unSign($3082, 64, 1) / Math.pow(2, 14);
      var $3084 = $3082 * Math.pow(2, 50);
      var $3085 = Runtime.or64($3083, $3084);
      
      var $3087 = HEAP[$S + 40];
      var $3088 = unSign($3087, 64, 1) / Math.pow(2, 18);
      var $3089 = $3087 * Math.pow(2, 46);
      var $3090 = Runtime.or64($3088, $3089);
      var $3091 = Runtime.xor64($3085, $3090);
      
      var $3093 = HEAP[$S + 40];
      var $3094 = unSign($3093, 64, 1) / Math.pow(2, 41);
      var $3095 = $3093 * Math.pow(2, 23);
      var $3096 = Runtime.or64($3094, $3095);
      var $3097 = Runtime.xor64($3091, $3096);
      var $3098 = $3080 + $3097;
      
      var $3100 = HEAP[$S + 56];
      
      var $3102 = HEAP[$S + 40];
      
      var $3104 = HEAP[$S + 48];
      
      var $3106 = HEAP[$S + 56];
      var $3107 = Runtime.xor64($3104, $3106);
      var $3108 = Runtime.and64($3102, $3107);
      var $3109 = Runtime.xor64($3100, $3108);
      
      
      
      
      var $3114 = $3098 + $3109 + HEAP[$W + 312] + -0x6d8dd37aeb7dcc00;
      HEAP[$t0] = $3114;
      
      var $3116 = HEAP[$S + 8];
      var $3117 = unSign($3116, 64, 1) / Math.pow(2, 28);
      var $3118 = $3116 * Math.pow(2, 36);
      var $3119 = Runtime.or64($3117, $3118);
      
      var $3121 = HEAP[$S + 8];
      var $3122 = unSign($3121, 64, 1) / Math.pow(2, 34);
      var $3123 = $3121 * Math.pow(2, 30);
      var $3124 = Runtime.or64($3122, $3123);
      var $3125 = Runtime.xor64($3119, $3124);
      
      var $3127 = HEAP[$S + 8];
      var $3128 = unSign($3127, 64, 1) / Math.pow(2, 39);
      var $3129 = $3127 * Math.pow(2, 25);
      var $3130 = Runtime.or64($3128, $3129);
      var $3131 = Runtime.xor64($3125, $3130);
      
      var $3133 = HEAP[$S + 8];
      
      var $3135 = HEAP[$S + 16];
      var $3136 = Runtime.or64($3133, $3135);
      
      var $3138 = HEAP[$S + 24];
      var $3139 = Runtime.and64($3136, $3138);
      
      var $3141 = HEAP[$S + 8];
      
      var $3143 = HEAP[$S + 16];
      var $3144 = Runtime.and64($3141, $3143);
      var $3145 = Runtime.or64($3139, $3144);
      var $3146 = $3131 + $3145;
      HEAP[$t1] = $3146;
      
      
      
      var $3150 = HEAP[$S + 32] + HEAP[$t0];
      
      HEAP[$S + 32] = $3150;
      
      
      var $3154 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S] = $3154;
      
      var $3157 = HEAP[$S + 56];
      
      var $3159 = HEAP[$S + 32];
      var $3160 = unSign($3159, 64, 1) / Math.pow(2, 14);
      var $3161 = $3159 * Math.pow(2, 50);
      var $3162 = Runtime.or64($3160, $3161);
      
      var $3164 = HEAP[$S + 32];
      var $3165 = unSign($3164, 64, 1) / Math.pow(2, 18);
      var $3166 = $3164 * Math.pow(2, 46);
      var $3167 = Runtime.or64($3165, $3166);
      var $3168 = Runtime.xor64($3162, $3167);
      
      var $3170 = HEAP[$S + 32];
      var $3171 = unSign($3170, 64, 1) / Math.pow(2, 41);
      var $3172 = $3170 * Math.pow(2, 23);
      var $3173 = Runtime.or64($3171, $3172);
      var $3174 = Runtime.xor64($3168, $3173);
      var $3175 = $3157 + $3174;
      
      var $3177 = HEAP[$S + 48];
      
      var $3179 = HEAP[$S + 32];
      
      var $3181 = HEAP[$S + 40];
      
      var $3183 = HEAP[$S + 48];
      var $3184 = Runtime.xor64($3181, $3183);
      var $3185 = Runtime.and64($3179, $3184);
      var $3186 = Runtime.xor64($3177, $3185);
      
      
      
      
      var $3191 = $3175 + $3186 + HEAP[$W + 320] + -0x5d40175eb30efc00;
      HEAP[$t0] = $3191;
      
      var $3193 = HEAP[$S];
      var $3194 = unSign($3193, 64, 1) / Math.pow(2, 28);
      var $3195 = $3193 * Math.pow(2, 36);
      var $3196 = Runtime.or64($3194, $3195);
      
      var $3198 = HEAP[$S];
      var $3199 = unSign($3198, 64, 1) / Math.pow(2, 34);
      var $3200 = $3198 * Math.pow(2, 30);
      var $3201 = Runtime.or64($3199, $3200);
      var $3202 = Runtime.xor64($3196, $3201);
      
      var $3204 = HEAP[$S];
      var $3205 = unSign($3204, 64, 1) / Math.pow(2, 39);
      var $3206 = $3204 * Math.pow(2, 25);
      var $3207 = Runtime.or64($3205, $3206);
      var $3208 = Runtime.xor64($3202, $3207);
      
      var $3210 = HEAP[$S];
      
      var $3212 = HEAP[$S + 8];
      var $3213 = Runtime.or64($3210, $3212);
      
      var $3215 = HEAP[$S + 16];
      var $3216 = Runtime.and64($3213, $3215);
      
      var $3218 = HEAP[$S];
      
      var $3220 = HEAP[$S + 8];
      var $3221 = Runtime.and64($3218, $3220);
      var $3222 = Runtime.or64($3216, $3221);
      var $3223 = $3208 + $3222;
      HEAP[$t1] = $3223;
      
      
      
      var $3227 = HEAP[$S + 24] + HEAP[$t0];
      
      HEAP[$S + 24] = $3227;
      
      
      var $3231 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 56] = $3231;
      
      var $3234 = HEAP[$S + 48];
      
      var $3236 = HEAP[$S + 24];
      var $3237 = unSign($3236, 64, 1) / Math.pow(2, 14);
      var $3238 = $3236 * Math.pow(2, 50);
      var $3239 = Runtime.or64($3237, $3238);
      
      var $3241 = HEAP[$S + 24];
      var $3242 = unSign($3241, 64, 1) / Math.pow(2, 18);
      var $3243 = $3241 * Math.pow(2, 46);
      var $3244 = Runtime.or64($3242, $3243);
      var $3245 = Runtime.xor64($3239, $3244);
      
      var $3247 = HEAP[$S + 24];
      var $3248 = unSign($3247, 64, 1) / Math.pow(2, 41);
      var $3249 = $3247 * Math.pow(2, 23);
      var $3250 = Runtime.or64($3248, $3249);
      var $3251 = Runtime.xor64($3245, $3250);
      var $3252 = $3234 + $3251;
      
      var $3254 = HEAP[$S + 40];
      
      var $3256 = HEAP[$S + 24];
      
      var $3258 = HEAP[$S + 32];
      
      var $3260 = HEAP[$S + 40];
      var $3261 = Runtime.xor64($3258, $3260);
      var $3262 = Runtime.and64($3256, $3261);
      var $3263 = Runtime.xor64($3254, $3262);
      
      
      
      
      var $3268 = $3252 + $3263 + HEAP[$W + 328] + -0x57e599b443bdd000;
      HEAP[$t0] = $3268;
      
      var $3270 = HEAP[$S + 56];
      var $3271 = unSign($3270, 64, 1) / Math.pow(2, 28);
      var $3272 = $3270 * Math.pow(2, 36);
      var $3273 = Runtime.or64($3271, $3272);
      
      var $3275 = HEAP[$S + 56];
      var $3276 = unSign($3275, 64, 1) / Math.pow(2, 34);
      var $3277 = $3275 * Math.pow(2, 30);
      var $3278 = Runtime.or64($3276, $3277);
      var $3279 = Runtime.xor64($3273, $3278);
      
      var $3281 = HEAP[$S + 56];
      var $3282 = unSign($3281, 64, 1) / Math.pow(2, 39);
      var $3283 = $3281 * Math.pow(2, 25);
      var $3284 = Runtime.or64($3282, $3283);
      var $3285 = Runtime.xor64($3279, $3284);
      
      var $3287 = HEAP[$S + 56];
      
      var $3289 = HEAP[$S];
      var $3290 = Runtime.or64($3287, $3289);
      
      var $3292 = HEAP[$S + 8];
      var $3293 = Runtime.and64($3290, $3292);
      
      var $3295 = HEAP[$S + 56];
      
      var $3297 = HEAP[$S];
      var $3298 = Runtime.and64($3295, $3297);
      var $3299 = Runtime.or64($3293, $3298);
      var $3300 = $3285 + $3299;
      HEAP[$t1] = $3300;
      
      
      
      var $3304 = HEAP[$S + 16] + HEAP[$t0];
      
      HEAP[$S + 16] = $3304;
      
      
      var $3308 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 48] = $3308;
      
      var $3311 = HEAP[$S + 40];
      
      var $3313 = HEAP[$S + 16];
      var $3314 = unSign($3313, 64, 1) / Math.pow(2, 14);
      var $3315 = $3313 * Math.pow(2, 50);
      var $3316 = Runtime.or64($3314, $3315);
      
      var $3318 = HEAP[$S + 16];
      var $3319 = unSign($3318, 64, 1) / Math.pow(2, 18);
      var $3320 = $3318 * Math.pow(2, 46);
      var $3321 = Runtime.or64($3319, $3320);
      var $3322 = Runtime.xor64($3316, $3321);
      
      var $3324 = HEAP[$S + 16];
      var $3325 = unSign($3324, 64, 1) / Math.pow(2, 41);
      var $3326 = $3324 * Math.pow(2, 23);
      var $3327 = Runtime.or64($3325, $3326);
      var $3328 = Runtime.xor64($3322, $3327);
      var $3329 = $3311 + $3328;
      
      var $3331 = HEAP[$S + 32];
      
      var $3333 = HEAP[$S + 16];
      
      var $3335 = HEAP[$S + 24];
      
      var $3337 = HEAP[$S + 32];
      var $3338 = Runtime.xor64($3335, $3337);
      var $3339 = Runtime.and64($3333, $3338);
      var $3340 = Runtime.xor64($3331, $3339);
      
      
      
      
      var $3345 = $3329 + $3340 + HEAP[$W + 336] + -0x3db4748f2f076800;
      HEAP[$t0] = $3345;
      
      var $3347 = HEAP[$S + 48];
      var $3348 = unSign($3347, 64, 1) / Math.pow(2, 28);
      var $3349 = $3347 * Math.pow(2, 36);
      var $3350 = Runtime.or64($3348, $3349);
      
      var $3352 = HEAP[$S + 48];
      var $3353 = unSign($3352, 64, 1) / Math.pow(2, 34);
      var $3354 = $3352 * Math.pow(2, 30);
      var $3355 = Runtime.or64($3353, $3354);
      var $3356 = Runtime.xor64($3350, $3355);
      
      var $3358 = HEAP[$S + 48];
      var $3359 = unSign($3358, 64, 1) / Math.pow(2, 39);
      var $3360 = $3358 * Math.pow(2, 25);
      var $3361 = Runtime.or64($3359, $3360);
      var $3362 = Runtime.xor64($3356, $3361);
      
      var $3364 = HEAP[$S + 48];
      
      var $3366 = HEAP[$S + 56];
      var $3367 = Runtime.or64($3364, $3366);
      
      var $3369 = HEAP[$S];
      var $3370 = Runtime.and64($3367, $3369);
      
      var $3372 = HEAP[$S + 48];
      
      var $3374 = HEAP[$S + 56];
      var $3375 = Runtime.and64($3372, $3374);
      var $3376 = Runtime.or64($3370, $3375);
      var $3377 = $3362 + $3376;
      HEAP[$t1] = $3377;
      
      
      
      var $3381 = HEAP[$S + 8] + HEAP[$t0];
      
      HEAP[$S + 8] = $3381;
      
      
      var $3385 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 40] = $3385;
      
      var $3388 = HEAP[$S + 32];
      
      var $3390 = HEAP[$S + 8];
      var $3391 = unSign($3390, 64, 1) / Math.pow(2, 14);
      var $3392 = $3390 * Math.pow(2, 50);
      var $3393 = Runtime.or64($3391, $3392);
      
      var $3395 = HEAP[$S + 8];
      var $3396 = unSign($3395, 64, 1) / Math.pow(2, 18);
      var $3397 = $3395 * Math.pow(2, 46);
      var $3398 = Runtime.or64($3396, $3397);
      var $3399 = Runtime.xor64($3393, $3398);
      
      var $3401 = HEAP[$S + 8];
      var $3402 = unSign($3401, 64, 1) / Math.pow(2, 41);
      var $3403 = $3401 * Math.pow(2, 23);
      var $3404 = Runtime.or64($3402, $3403);
      var $3405 = Runtime.xor64($3399, $3404);
      var $3406 = $3388 + $3405;
      
      var $3408 = HEAP[$S + 24];
      
      var $3410 = HEAP[$S + 8];
      
      var $3412 = HEAP[$S + 16];
      
      var $3414 = HEAP[$S + 24];
      var $3415 = Runtime.xor64($3412, $3414);
      var $3416 = Runtime.and64($3410, $3415);
      var $3417 = Runtime.xor64($3408, $3416);
      
      
      
      
      var $3422 = $3406 + $3417 + HEAP[$W + 344] + -0x3893ae5cf9ab4200;
      HEAP[$t0] = $3422;
      
      var $3424 = HEAP[$S + 40];
      var $3425 = unSign($3424, 64, 1) / Math.pow(2, 28);
      var $3426 = $3424 * Math.pow(2, 36);
      var $3427 = Runtime.or64($3425, $3426);
      
      var $3429 = HEAP[$S + 40];
      var $3430 = unSign($3429, 64, 1) / Math.pow(2, 34);
      var $3431 = $3429 * Math.pow(2, 30);
      var $3432 = Runtime.or64($3430, $3431);
      var $3433 = Runtime.xor64($3427, $3432);
      
      var $3435 = HEAP[$S + 40];
      var $3436 = unSign($3435, 64, 1) / Math.pow(2, 39);
      var $3437 = $3435 * Math.pow(2, 25);
      var $3438 = Runtime.or64($3436, $3437);
      var $3439 = Runtime.xor64($3433, $3438);
      
      var $3441 = HEAP[$S + 40];
      
      var $3443 = HEAP[$S + 48];
      var $3444 = Runtime.or64($3441, $3443);
      
      var $3446 = HEAP[$S + 56];
      var $3447 = Runtime.and64($3444, $3446);
      
      var $3449 = HEAP[$S + 40];
      
      var $3451 = HEAP[$S + 48];
      var $3452 = Runtime.and64($3449, $3451);
      var $3453 = Runtime.or64($3447, $3452);
      var $3454 = $3439 + $3453;
      HEAP[$t1] = $3454;
      
      
      
      var $3458 = HEAP[$S] + HEAP[$t0];
      
      HEAP[$S] = $3458;
      
      
      var $3462 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 32] = $3462;
      
      var $3465 = HEAP[$S + 24];
      
      var $3467 = HEAP[$S];
      var $3468 = unSign($3467, 64, 1) / Math.pow(2, 14);
      var $3469 = $3467 * Math.pow(2, 50);
      var $3470 = Runtime.or64($3468, $3469);
      
      var $3472 = HEAP[$S];
      var $3473 = unSign($3472, 64, 1) / Math.pow(2, 18);
      var $3474 = $3472 * Math.pow(2, 46);
      var $3475 = Runtime.or64($3473, $3474);
      var $3476 = Runtime.xor64($3470, $3475);
      
      var $3478 = HEAP[$S];
      var $3479 = unSign($3478, 64, 1) / Math.pow(2, 41);
      var $3480 = $3478 * Math.pow(2, 23);
      var $3481 = Runtime.or64($3479, $3480);
      var $3482 = Runtime.xor64($3476, $3481);
      var $3483 = $3465 + $3482;
      
      var $3485 = HEAP[$S + 16];
      
      var $3487 = HEAP[$S];
      
      var $3489 = HEAP[$S + 8];
      
      var $3491 = HEAP[$S + 16];
      var $3492 = Runtime.xor64($3489, $3491);
      var $3493 = Runtime.and64($3487, $3492);
      var $3494 = Runtime.xor64($3485, $3493);
      
      
      
      
      var $3499 = $3483 + $3494 + HEAP[$W + 352] + -0x2e6d17e62910ae00;
      HEAP[$t0] = $3499;
      
      var $3501 = HEAP[$S + 32];
      var $3502 = unSign($3501, 64, 1) / Math.pow(2, 28);
      var $3503 = $3501 * Math.pow(2, 36);
      var $3504 = Runtime.or64($3502, $3503);
      
      var $3506 = HEAP[$S + 32];
      var $3507 = unSign($3506, 64, 1) / Math.pow(2, 34);
      var $3508 = $3506 * Math.pow(2, 30);
      var $3509 = Runtime.or64($3507, $3508);
      var $3510 = Runtime.xor64($3504, $3509);
      
      var $3512 = HEAP[$S + 32];
      var $3513 = unSign($3512, 64, 1) / Math.pow(2, 39);
      var $3514 = $3512 * Math.pow(2, 25);
      var $3515 = Runtime.or64($3513, $3514);
      var $3516 = Runtime.xor64($3510, $3515);
      
      var $3518 = HEAP[$S + 32];
      
      var $3520 = HEAP[$S + 40];
      var $3521 = Runtime.or64($3518, $3520);
      
      var $3523 = HEAP[$S + 48];
      var $3524 = Runtime.and64($3521, $3523);
      
      var $3526 = HEAP[$S + 32];
      
      var $3528 = HEAP[$S + 40];
      var $3529 = Runtime.and64($3526, $3528);
      var $3530 = Runtime.or64($3524, $3529);
      var $3531 = $3516 + $3530;
      HEAP[$t1] = $3531;
      
      
      
      var $3535 = HEAP[$S + 56] + HEAP[$t0];
      
      HEAP[$S + 56] = $3535;
      
      
      var $3539 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 24] = $3539;
      
      var $3542 = HEAP[$S + 16];
      
      var $3544 = HEAP[$S + 56];
      var $3545 = unSign($3544, 64, 1) / Math.pow(2, 14);
      var $3546 = $3544 * Math.pow(2, 50);
      var $3547 = Runtime.or64($3545, $3546);
      
      var $3549 = HEAP[$S + 56];
      var $3550 = unSign($3549, 64, 1) / Math.pow(2, 18);
      var $3551 = $3549 * Math.pow(2, 46);
      var $3552 = Runtime.or64($3550, $3551);
      var $3553 = Runtime.xor64($3547, $3552);
      
      var $3555 = HEAP[$S + 56];
      var $3556 = unSign($3555, 64, 1) / Math.pow(2, 41);
      var $3557 = $3555 * Math.pow(2, 23);
      var $3558 = Runtime.or64($3556, $3557);
      var $3559 = Runtime.xor64($3553, $3558);
      var $3560 = $3542 + $3559;
      
      var $3562 = HEAP[$S + 8];
      
      var $3564 = HEAP[$S + 56];
      
      var $3566 = HEAP[$S];
      
      var $3568 = HEAP[$S + 8];
      var $3569 = Runtime.xor64($3566, $3568);
      var $3570 = Runtime.and64($3564, $3569);
      var $3571 = Runtime.xor64($3562, $3570);
      
      
      
      
      var $3576 = $3560 + $3571 + HEAP[$W + 360] + -0x2966f9dbaa9a5600;
      HEAP[$t0] = $3576;
      
      var $3578 = HEAP[$S + 24];
      var $3579 = unSign($3578, 64, 1) / Math.pow(2, 28);
      var $3580 = $3578 * Math.pow(2, 36);
      var $3581 = Runtime.or64($3579, $3580);
      
      var $3583 = HEAP[$S + 24];
      var $3584 = unSign($3583, 64, 1) / Math.pow(2, 34);
      var $3585 = $3583 * Math.pow(2, 30);
      var $3586 = Runtime.or64($3584, $3585);
      var $3587 = Runtime.xor64($3581, $3586);
      
      var $3589 = HEAP[$S + 24];
      var $3590 = unSign($3589, 64, 1) / Math.pow(2, 39);
      var $3591 = $3589 * Math.pow(2, 25);
      var $3592 = Runtime.or64($3590, $3591);
      var $3593 = Runtime.xor64($3587, $3592);
      
      var $3595 = HEAP[$S + 24];
      
      var $3597 = HEAP[$S + 32];
      var $3598 = Runtime.or64($3595, $3597);
      
      var $3600 = HEAP[$S + 40];
      var $3601 = Runtime.and64($3598, $3600);
      
      var $3603 = HEAP[$S + 24];
      
      var $3605 = HEAP[$S + 32];
      var $3606 = Runtime.and64($3603, $3605);
      var $3607 = Runtime.or64($3601, $3606);
      var $3608 = $3593 + $3607;
      HEAP[$t1] = $3608;
      
      
      
      var $3612 = HEAP[$S + 48] + HEAP[$t0];
      
      HEAP[$S + 48] = $3612;
      
      
      var $3616 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 16] = $3616;
      
      var $3619 = HEAP[$S + 8];
      
      var $3621 = HEAP[$S + 48];
      var $3622 = unSign($3621, 64, 1) / Math.pow(2, 14);
      var $3623 = $3621 * Math.pow(2, 50);
      var $3624 = Runtime.or64($3622, $3623);
      
      var $3626 = HEAP[$S + 48];
      var $3627 = unSign($3626, 64, 1) / Math.pow(2, 18);
      var $3628 = $3626 * Math.pow(2, 46);
      var $3629 = Runtime.or64($3627, $3628);
      var $3630 = Runtime.xor64($3624, $3629);
      
      var $3632 = HEAP[$S + 48];
      var $3633 = unSign($3632, 64, 1) / Math.pow(2, 41);
      var $3634 = $3632 * Math.pow(2, 23);
      var $3635 = Runtime.or64($3633, $3634);
      var $3636 = Runtime.xor64($3630, $3635);
      var $3637 = $3619 + $3636;
      
      var $3639 = HEAP[$S];
      
      var $3641 = HEAP[$S + 48];
      
      var $3643 = HEAP[$S + 56];
      
      var $3645 = HEAP[$S];
      var $3646 = Runtime.xor64($3643, $3645);
      var $3647 = Runtime.and64($3641, $3646);
      var $3648 = Runtime.xor64($3639, $3647);
      
      
      
      
      var $3653 = $3637 + $3648 + HEAP[$W + 368] + -0xbf1ca7aa88ee000;
      HEAP[$t0] = $3653;
      
      var $3655 = HEAP[$S + 16];
      var $3656 = unSign($3655, 64, 1) / Math.pow(2, 28);
      var $3657 = $3655 * Math.pow(2, 36);
      var $3658 = Runtime.or64($3656, $3657);
      
      var $3660 = HEAP[$S + 16];
      var $3661 = unSign($3660, 64, 1) / Math.pow(2, 34);
      var $3662 = $3660 * Math.pow(2, 30);
      var $3663 = Runtime.or64($3661, $3662);
      var $3664 = Runtime.xor64($3658, $3663);
      
      var $3666 = HEAP[$S + 16];
      var $3667 = unSign($3666, 64, 1) / Math.pow(2, 39);
      var $3668 = $3666 * Math.pow(2, 25);
      var $3669 = Runtime.or64($3667, $3668);
      var $3670 = Runtime.xor64($3664, $3669);
      
      var $3672 = HEAP[$S + 16];
      
      var $3674 = HEAP[$S + 24];
      var $3675 = Runtime.or64($3672, $3674);
      
      var $3677 = HEAP[$S + 32];
      var $3678 = Runtime.and64($3675, $3677);
      
      var $3680 = HEAP[$S + 16];
      
      var $3682 = HEAP[$S + 24];
      var $3683 = Runtime.and64($3680, $3682);
      var $3684 = Runtime.or64($3678, $3683);
      var $3685 = $3670 + $3684;
      HEAP[$t1] = $3685;
      
      
      
      var $3689 = HEAP[$S + 40] + HEAP[$t0];
      
      HEAP[$S + 40] = $3689;
      
      
      var $3693 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 8] = $3693;
      
      var $3696 = HEAP[$S];
      
      var $3698 = HEAP[$S + 40];
      var $3699 = unSign($3698, 64, 1) / Math.pow(2, 14);
      var $3700 = $3698 * Math.pow(2, 50);
      var $3701 = Runtime.or64($3699, $3700);
      
      var $3703 = HEAP[$S + 40];
      var $3704 = unSign($3703, 64, 1) / Math.pow(2, 18);
      var $3705 = $3703 * Math.pow(2, 46);
      var $3706 = Runtime.or64($3704, $3705);
      var $3707 = Runtime.xor64($3701, $3706);
      
      var $3709 = HEAP[$S + 40];
      var $3710 = unSign($3709, 64, 1) / Math.pow(2, 41);
      var $3711 = $3709 * Math.pow(2, 23);
      var $3712 = Runtime.or64($3710, $3711);
      var $3713 = Runtime.xor64($3707, $3712);
      var $3714 = $3696 + $3713;
      
      var $3716 = HEAP[$S + 56];
      
      var $3718 = HEAP[$S + 40];
      
      var $3720 = HEAP[$S + 48];
      
      var $3722 = HEAP[$S + 56];
      var $3723 = Runtime.xor64($3720, $3722);
      var $3724 = Runtime.and64($3718, $3723);
      var $3725 = Runtime.xor64($3716, $3724);
      
      
      
      
      var $3730 = $3714 + $3725 + HEAP[$W + 376] + 0x106aa07032bbd200;
      HEAP[$t0] = $3730;
      
      var $3732 = HEAP[$S + 8];
      var $3733 = unSign($3732, 64, 1) / Math.pow(2, 28);
      var $3734 = $3732 * Math.pow(2, 36);
      var $3735 = Runtime.or64($3733, $3734);
      
      var $3737 = HEAP[$S + 8];
      var $3738 = unSign($3737, 64, 1) / Math.pow(2, 34);
      var $3739 = $3737 * Math.pow(2, 30);
      var $3740 = Runtime.or64($3738, $3739);
      var $3741 = Runtime.xor64($3735, $3740);
      
      var $3743 = HEAP[$S + 8];
      var $3744 = unSign($3743, 64, 1) / Math.pow(2, 39);
      var $3745 = $3743 * Math.pow(2, 25);
      var $3746 = Runtime.or64($3744, $3745);
      var $3747 = Runtime.xor64($3741, $3746);
      
      var $3749 = HEAP[$S + 8];
      
      var $3751 = HEAP[$S + 16];
      var $3752 = Runtime.or64($3749, $3751);
      
      var $3754 = HEAP[$S + 24];
      var $3755 = Runtime.and64($3752, $3754);
      
      var $3757 = HEAP[$S + 8];
      
      var $3759 = HEAP[$S + 16];
      var $3760 = Runtime.and64($3757, $3759);
      var $3761 = Runtime.or64($3755, $3760);
      var $3762 = $3747 + $3761;
      HEAP[$t1] = $3762;
      
      
      
      var $3766 = HEAP[$S + 32] + HEAP[$t0];
      
      HEAP[$S + 32] = $3766;
      
      
      var $3770 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S] = $3770;
      
      var $3773 = HEAP[$S + 56];
      
      var $3775 = HEAP[$S + 32];
      var $3776 = unSign($3775, 64, 1) / Math.pow(2, 14);
      var $3777 = $3775 * Math.pow(2, 50);
      var $3778 = Runtime.or64($3776, $3777);
      
      var $3780 = HEAP[$S + 32];
      var $3781 = unSign($3780, 64, 1) / Math.pow(2, 18);
      var $3782 = $3780 * Math.pow(2, 46);
      var $3783 = Runtime.or64($3781, $3782);
      var $3784 = Runtime.xor64($3778, $3783);
      
      var $3786 = HEAP[$S + 32];
      var $3787 = unSign($3786, 64, 1) / Math.pow(2, 41);
      var $3788 = $3786 * Math.pow(2, 23);
      var $3789 = Runtime.or64($3787, $3788);
      var $3790 = Runtime.xor64($3784, $3789);
      var $3791 = $3773 + $3790;
      
      var $3793 = HEAP[$S + 48];
      
      var $3795 = HEAP[$S + 32];
      
      var $3797 = HEAP[$S + 40];
      
      var $3799 = HEAP[$S + 48];
      var $3800 = Runtime.xor64($3797, $3799);
      var $3801 = Runtime.and64($3795, $3800);
      var $3802 = Runtime.xor64($3793, $3801);
      
      
      
      
      var $3807 = $3791 + $3802 + HEAP[$W + 384] + 0x19a4c116b8d2d100;
      HEAP[$t0] = $3807;
      
      var $3809 = HEAP[$S];
      var $3810 = unSign($3809, 64, 1) / Math.pow(2, 28);
      var $3811 = $3809 * Math.pow(2, 36);
      var $3812 = Runtime.or64($3810, $3811);
      
      var $3814 = HEAP[$S];
      var $3815 = unSign($3814, 64, 1) / Math.pow(2, 34);
      var $3816 = $3814 * Math.pow(2, 30);
      var $3817 = Runtime.or64($3815, $3816);
      var $3818 = Runtime.xor64($3812, $3817);
      
      var $3820 = HEAP[$S];
      var $3821 = unSign($3820, 64, 1) / Math.pow(2, 39);
      var $3822 = $3820 * Math.pow(2, 25);
      var $3823 = Runtime.or64($3821, $3822);
      var $3824 = Runtime.xor64($3818, $3823);
      
      var $3826 = HEAP[$S];
      
      var $3828 = HEAP[$S + 8];
      var $3829 = Runtime.or64($3826, $3828);
      
      var $3831 = HEAP[$S + 16];
      var $3832 = Runtime.and64($3829, $3831);
      
      var $3834 = HEAP[$S];
      
      var $3836 = HEAP[$S + 8];
      var $3837 = Runtime.and64($3834, $3836);
      var $3838 = Runtime.or64($3832, $3837);
      var $3839 = $3824 + $3838;
      HEAP[$t1] = $3839;
      
      
      
      var $3843 = HEAP[$S + 24] + HEAP[$t0];
      
      HEAP[$S + 24] = $3843;
      
      
      var $3847 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 56] = $3847;
      
      var $3850 = HEAP[$S + 48];
      
      var $3852 = HEAP[$S + 24];
      var $3853 = unSign($3852, 64, 1) / Math.pow(2, 14);
      var $3854 = $3852 * Math.pow(2, 50);
      var $3855 = Runtime.or64($3853, $3854);
      
      var $3857 = HEAP[$S + 24];
      var $3858 = unSign($3857, 64, 1) / Math.pow(2, 18);
      var $3859 = $3857 * Math.pow(2, 46);
      var $3860 = Runtime.or64($3858, $3859);
      var $3861 = Runtime.xor64($3855, $3860);
      
      var $3863 = HEAP[$S + 24];
      var $3864 = unSign($3863, 64, 1) / Math.pow(2, 41);
      var $3865 = $3863 * Math.pow(2, 23);
      var $3866 = Runtime.or64($3864, $3865);
      var $3867 = Runtime.xor64($3861, $3866);
      var $3868 = $3850 + $3867;
      
      var $3870 = HEAP[$S + 40];
      
      var $3872 = HEAP[$S + 24];
      
      var $3874 = HEAP[$S + 32];
      
      var $3876 = HEAP[$S + 40];
      var $3877 = Runtime.xor64($3874, $3876);
      var $3878 = Runtime.and64($3872, $3877);
      var $3879 = Runtime.xor64($3870, $3878);
      
      
      
      
      var $3884 = $3868 + $3879 + HEAP[$W + 392] + 0x1e376c085141ab00;
      HEAP[$t0] = $3884;
      
      var $3886 = HEAP[$S + 56];
      var $3887 = unSign($3886, 64, 1) / Math.pow(2, 28);
      var $3888 = $3886 * Math.pow(2, 36);
      var $3889 = Runtime.or64($3887, $3888);
      
      var $3891 = HEAP[$S + 56];
      var $3892 = unSign($3891, 64, 1) / Math.pow(2, 34);
      var $3893 = $3891 * Math.pow(2, 30);
      var $3894 = Runtime.or64($3892, $3893);
      var $3895 = Runtime.xor64($3889, $3894);
      
      var $3897 = HEAP[$S + 56];
      var $3898 = unSign($3897, 64, 1) / Math.pow(2, 39);
      var $3899 = $3897 * Math.pow(2, 25);
      var $3900 = Runtime.or64($3898, $3899);
      var $3901 = Runtime.xor64($3895, $3900);
      
      var $3903 = HEAP[$S + 56];
      
      var $3905 = HEAP[$S];
      var $3906 = Runtime.or64($3903, $3905);
      
      var $3908 = HEAP[$S + 8];
      var $3909 = Runtime.and64($3906, $3908);
      
      var $3911 = HEAP[$S + 56];
      
      var $3913 = HEAP[$S];
      var $3914 = Runtime.and64($3911, $3913);
      var $3915 = Runtime.or64($3909, $3914);
      var $3916 = $3901 + $3915;
      HEAP[$t1] = $3916;
      
      
      
      var $3920 = HEAP[$S + 16] + HEAP[$t0];
      
      HEAP[$S + 16] = $3920;
      
      
      var $3924 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 48] = $3924;
      
      var $3927 = HEAP[$S + 40];
      
      var $3929 = HEAP[$S + 16];
      var $3930 = unSign($3929, 64, 1) / Math.pow(2, 14);
      var $3931 = $3929 * Math.pow(2, 50);
      var $3932 = Runtime.or64($3930, $3931);
      
      var $3934 = HEAP[$S + 16];
      var $3935 = unSign($3934, 64, 1) / Math.pow(2, 18);
      var $3936 = $3934 * Math.pow(2, 46);
      var $3937 = Runtime.or64($3935, $3936);
      var $3938 = Runtime.xor64($3932, $3937);
      
      var $3940 = HEAP[$S + 16];
      var $3941 = unSign($3940, 64, 1) / Math.pow(2, 41);
      var $3942 = $3940 * Math.pow(2, 23);
      var $3943 = Runtime.or64($3941, $3942);
      var $3944 = Runtime.xor64($3938, $3943);
      var $3945 = $3927 + $3944;
      
      var $3947 = HEAP[$S + 32];
      
      var $3949 = HEAP[$S + 16];
      
      var $3951 = HEAP[$S + 24];
      
      var $3953 = HEAP[$S + 32];
      var $3954 = Runtime.xor64($3951, $3953);
      var $3955 = Runtime.and64($3949, $3954);
      var $3956 = Runtime.xor64($3947, $3955);
      
      
      
      
      var $3961 = $3945 + $3956 + HEAP[$W + 400] + 0x2748774cdf8eec00;
      HEAP[$t0] = $3961;
      
      var $3963 = HEAP[$S + 48];
      var $3964 = unSign($3963, 64, 1) / Math.pow(2, 28);
      var $3965 = $3963 * Math.pow(2, 36);
      var $3966 = Runtime.or64($3964, $3965);
      
      var $3968 = HEAP[$S + 48];
      var $3969 = unSign($3968, 64, 1) / Math.pow(2, 34);
      var $3970 = $3968 * Math.pow(2, 30);
      var $3971 = Runtime.or64($3969, $3970);
      var $3972 = Runtime.xor64($3966, $3971);
      
      var $3974 = HEAP[$S + 48];
      var $3975 = unSign($3974, 64, 1) / Math.pow(2, 39);
      var $3976 = $3974 * Math.pow(2, 25);
      var $3977 = Runtime.or64($3975, $3976);
      var $3978 = Runtime.xor64($3972, $3977);
      
      var $3980 = HEAP[$S + 48];
      
      var $3982 = HEAP[$S + 56];
      var $3983 = Runtime.or64($3980, $3982);
      
      var $3985 = HEAP[$S];
      var $3986 = Runtime.and64($3983, $3985);
      
      var $3988 = HEAP[$S + 48];
      
      var $3990 = HEAP[$S + 56];
      var $3991 = Runtime.and64($3988, $3990);
      var $3992 = Runtime.or64($3986, $3991);
      var $3993 = $3978 + $3992;
      HEAP[$t1] = $3993;
      
      
      
      var $3997 = HEAP[$S + 8] + HEAP[$t0];
      
      HEAP[$S + 8] = $3997;
      
      
      var $4001 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 40] = $4001;
      
      var $4004 = HEAP[$S + 32];
      
      var $4006 = HEAP[$S + 8];
      var $4007 = unSign($4006, 64, 1) / Math.pow(2, 14);
      var $4008 = $4006 * Math.pow(2, 50);
      var $4009 = Runtime.or64($4007, $4008);
      
      var $4011 = HEAP[$S + 8];
      var $4012 = unSign($4011, 64, 1) / Math.pow(2, 18);
      var $4013 = $4011 * Math.pow(2, 46);
      var $4014 = Runtime.or64($4012, $4013);
      var $4015 = Runtime.xor64($4009, $4014);
      
      var $4017 = HEAP[$S + 8];
      var $4018 = unSign($4017, 64, 1) / Math.pow(2, 41);
      var $4019 = $4017 * Math.pow(2, 23);
      var $4020 = Runtime.or64($4018, $4019);
      var $4021 = Runtime.xor64($4015, $4020);
      var $4022 = $4004 + $4021;
      
      var $4024 = HEAP[$S + 24];
      
      var $4026 = HEAP[$S + 8];
      
      var $4028 = HEAP[$S + 16];
      
      var $4030 = HEAP[$S + 24];
      var $4031 = Runtime.xor64($4028, $4030);
      var $4032 = Runtime.and64($4026, $4031);
      var $4033 = Runtime.xor64($4024, $4032);
      
      
      
      
      var $4038 = $4022 + $4033 + HEAP[$W + 408] + 0x34b0bcb5e19b4800;
      HEAP[$t0] = $4038;
      
      var $4040 = HEAP[$S + 40];
      var $4041 = unSign($4040, 64, 1) / Math.pow(2, 28);
      var $4042 = $4040 * Math.pow(2, 36);
      var $4043 = Runtime.or64($4041, $4042);
      
      var $4045 = HEAP[$S + 40];
      var $4046 = unSign($4045, 64, 1) / Math.pow(2, 34);
      var $4047 = $4045 * Math.pow(2, 30);
      var $4048 = Runtime.or64($4046, $4047);
      var $4049 = Runtime.xor64($4043, $4048);
      
      var $4051 = HEAP[$S + 40];
      var $4052 = unSign($4051, 64, 1) / Math.pow(2, 39);
      var $4053 = $4051 * Math.pow(2, 25);
      var $4054 = Runtime.or64($4052, $4053);
      var $4055 = Runtime.xor64($4049, $4054);
      
      var $4057 = HEAP[$S + 40];
      
      var $4059 = HEAP[$S + 48];
      var $4060 = Runtime.or64($4057, $4059);
      
      var $4062 = HEAP[$S + 56];
      var $4063 = Runtime.and64($4060, $4062);
      
      var $4065 = HEAP[$S + 40];
      
      var $4067 = HEAP[$S + 48];
      var $4068 = Runtime.and64($4065, $4067);
      var $4069 = Runtime.or64($4063, $4068);
      var $4070 = $4055 + $4069;
      HEAP[$t1] = $4070;
      
      
      
      var $4074 = HEAP[$S] + HEAP[$t0];
      
      HEAP[$S] = $4074;
      
      
      var $4078 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 32] = $4078;
      
      var $4081 = HEAP[$S + 24];
      
      var $4083 = HEAP[$S];
      var $4084 = unSign($4083, 64, 1) / Math.pow(2, 14);
      var $4085 = $4083 * Math.pow(2, 50);
      var $4086 = Runtime.or64($4084, $4085);
      
      var $4088 = HEAP[$S];
      var $4089 = unSign($4088, 64, 1) / Math.pow(2, 18);
      var $4090 = $4088 * Math.pow(2, 46);
      var $4091 = Runtime.or64($4089, $4090);
      var $4092 = Runtime.xor64($4086, $4091);
      
      var $4094 = HEAP[$S];
      var $4095 = unSign($4094, 64, 1) / Math.pow(2, 41);
      var $4096 = $4094 * Math.pow(2, 23);
      var $4097 = Runtime.or64($4095, $4096);
      var $4098 = Runtime.xor64($4092, $4097);
      var $4099 = $4081 + $4098;
      
      var $4101 = HEAP[$S + 16];
      
      var $4103 = HEAP[$S];
      
      var $4105 = HEAP[$S + 8];
      
      var $4107 = HEAP[$S + 16];
      var $4108 = Runtime.xor64($4105, $4107);
      var $4109 = Runtime.and64($4103, $4108);
      var $4110 = Runtime.xor64($4101, $4109);
      
      
      
      
      var $4115 = $4099 + $4110 + HEAP[$W + 416] + 0x391c0cb3c5c95a00;
      HEAP[$t0] = $4115;
      
      var $4117 = HEAP[$S + 32];
      var $4118 = unSign($4117, 64, 1) / Math.pow(2, 28);
      var $4119 = $4117 * Math.pow(2, 36);
      var $4120 = Runtime.or64($4118, $4119);
      
      var $4122 = HEAP[$S + 32];
      var $4123 = unSign($4122, 64, 1) / Math.pow(2, 34);
      var $4124 = $4122 * Math.pow(2, 30);
      var $4125 = Runtime.or64($4123, $4124);
      var $4126 = Runtime.xor64($4120, $4125);
      
      var $4128 = HEAP[$S + 32];
      var $4129 = unSign($4128, 64, 1) / Math.pow(2, 39);
      var $4130 = $4128 * Math.pow(2, 25);
      var $4131 = Runtime.or64($4129, $4130);
      var $4132 = Runtime.xor64($4126, $4131);
      
      var $4134 = HEAP[$S + 32];
      
      var $4136 = HEAP[$S + 40];
      var $4137 = Runtime.or64($4134, $4136);
      
      var $4139 = HEAP[$S + 48];
      var $4140 = Runtime.and64($4137, $4139);
      
      var $4142 = HEAP[$S + 32];
      
      var $4144 = HEAP[$S + 40];
      var $4145 = Runtime.and64($4142, $4144);
      var $4146 = Runtime.or64($4140, $4145);
      var $4147 = $4132 + $4146;
      HEAP[$t1] = $4147;
      
      
      
      var $4151 = HEAP[$S + 56] + HEAP[$t0];
      
      HEAP[$S + 56] = $4151;
      
      
      var $4155 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 24] = $4155;
      
      var $4158 = HEAP[$S + 16];
      
      var $4160 = HEAP[$S + 56];
      var $4161 = unSign($4160, 64, 1) / Math.pow(2, 14);
      var $4162 = $4160 * Math.pow(2, 50);
      var $4163 = Runtime.or64($4161, $4162);
      
      var $4165 = HEAP[$S + 56];
      var $4166 = unSign($4165, 64, 1) / Math.pow(2, 18);
      var $4167 = $4165 * Math.pow(2, 46);
      var $4168 = Runtime.or64($4166, $4167);
      var $4169 = Runtime.xor64($4163, $4168);
      
      var $4171 = HEAP[$S + 56];
      var $4172 = unSign($4171, 64, 1) / Math.pow(2, 41);
      var $4173 = $4171 * Math.pow(2, 23);
      var $4174 = Runtime.or64($4172, $4173);
      var $4175 = Runtime.xor64($4169, $4174);
      var $4176 = $4158 + $4175;
      
      var $4178 = HEAP[$S + 8];
      
      var $4180 = HEAP[$S + 56];
      
      var $4182 = HEAP[$S];
      
      var $4184 = HEAP[$S + 8];
      var $4185 = Runtime.xor64($4182, $4184);
      var $4186 = Runtime.and64($4180, $4185);
      var $4187 = Runtime.xor64($4178, $4186);
      
      
      
      
      var $4192 = $4176 + $4187 + HEAP[$W + 424] + 0x4ed8aa4ae3418c00;
      HEAP[$t0] = $4192;
      
      var $4194 = HEAP[$S + 24];
      var $4195 = unSign($4194, 64, 1) / Math.pow(2, 28);
      var $4196 = $4194 * Math.pow(2, 36);
      var $4197 = Runtime.or64($4195, $4196);
      
      var $4199 = HEAP[$S + 24];
      var $4200 = unSign($4199, 64, 1) / Math.pow(2, 34);
      var $4201 = $4199 * Math.pow(2, 30);
      var $4202 = Runtime.or64($4200, $4201);
      var $4203 = Runtime.xor64($4197, $4202);
      
      var $4205 = HEAP[$S + 24];
      var $4206 = unSign($4205, 64, 1) / Math.pow(2, 39);
      var $4207 = $4205 * Math.pow(2, 25);
      var $4208 = Runtime.or64($4206, $4207);
      var $4209 = Runtime.xor64($4203, $4208);
      
      var $4211 = HEAP[$S + 24];
      
      var $4213 = HEAP[$S + 32];
      var $4214 = Runtime.or64($4211, $4213);
      
      var $4216 = HEAP[$S + 40];
      var $4217 = Runtime.and64($4214, $4216);
      
      var $4219 = HEAP[$S + 24];
      
      var $4221 = HEAP[$S + 32];
      var $4222 = Runtime.and64($4219, $4221);
      var $4223 = Runtime.or64($4217, $4222);
      var $4224 = $4209 + $4223;
      HEAP[$t1] = $4224;
      
      
      
      var $4228 = HEAP[$S + 48] + HEAP[$t0];
      
      HEAP[$S + 48] = $4228;
      
      
      var $4232 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 16] = $4232;
      
      var $4235 = HEAP[$S + 8];
      
      var $4237 = HEAP[$S + 48];
      var $4238 = unSign($4237, 64, 1) / Math.pow(2, 14);
      var $4239 = $4237 * Math.pow(2, 50);
      var $4240 = Runtime.or64($4238, $4239);
      
      var $4242 = HEAP[$S + 48];
      var $4243 = unSign($4242, 64, 1) / Math.pow(2, 18);
      var $4244 = $4242 * Math.pow(2, 46);
      var $4245 = Runtime.or64($4243, $4244);
      var $4246 = Runtime.xor64($4240, $4245);
      
      var $4248 = HEAP[$S + 48];
      var $4249 = unSign($4248, 64, 1) / Math.pow(2, 41);
      var $4250 = $4248 * Math.pow(2, 23);
      var $4251 = Runtime.or64($4249, $4250);
      var $4252 = Runtime.xor64($4246, $4251);
      var $4253 = $4235 + $4252;
      
      var $4255 = HEAP[$S];
      
      var $4257 = HEAP[$S + 48];
      
      var $4259 = HEAP[$S + 56];
      
      var $4261 = HEAP[$S];
      var $4262 = Runtime.xor64($4259, $4261);
      var $4263 = Runtime.and64($4257, $4262);
      var $4264 = Runtime.xor64($4255, $4263);
      
      
      
      
      var $4269 = $4253 + $4264 + HEAP[$W + 432] + 0x5b9cca4f7763e400;
      HEAP[$t0] = $4269;
      
      var $4271 = HEAP[$S + 16];
      var $4272 = unSign($4271, 64, 1) / Math.pow(2, 28);
      var $4273 = $4271 * Math.pow(2, 36);
      var $4274 = Runtime.or64($4272, $4273);
      
      var $4276 = HEAP[$S + 16];
      var $4277 = unSign($4276, 64, 1) / Math.pow(2, 34);
      var $4278 = $4276 * Math.pow(2, 30);
      var $4279 = Runtime.or64($4277, $4278);
      var $4280 = Runtime.xor64($4274, $4279);
      
      var $4282 = HEAP[$S + 16];
      var $4283 = unSign($4282, 64, 1) / Math.pow(2, 39);
      var $4284 = $4282 * Math.pow(2, 25);
      var $4285 = Runtime.or64($4283, $4284);
      var $4286 = Runtime.xor64($4280, $4285);
      
      var $4288 = HEAP[$S + 16];
      
      var $4290 = HEAP[$S + 24];
      var $4291 = Runtime.or64($4288, $4290);
      
      var $4293 = HEAP[$S + 32];
      var $4294 = Runtime.and64($4291, $4293);
      
      var $4296 = HEAP[$S + 16];
      
      var $4298 = HEAP[$S + 24];
      var $4299 = Runtime.and64($4296, $4298);
      var $4300 = Runtime.or64($4294, $4299);
      var $4301 = $4286 + $4300;
      HEAP[$t1] = $4301;
      
      
      
      var $4305 = HEAP[$S + 40] + HEAP[$t0];
      
      HEAP[$S + 40] = $4305;
      
      
      var $4309 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 8] = $4309;
      
      var $4312 = HEAP[$S];
      
      var $4314 = HEAP[$S + 40];
      var $4315 = unSign($4314, 64, 1) / Math.pow(2, 14);
      var $4316 = $4314 * Math.pow(2, 50);
      var $4317 = Runtime.or64($4315, $4316);
      
      var $4319 = HEAP[$S + 40];
      var $4320 = unSign($4319, 64, 1) / Math.pow(2, 18);
      var $4321 = $4319 * Math.pow(2, 46);
      var $4322 = Runtime.or64($4320, $4321);
      var $4323 = Runtime.xor64($4317, $4322);
      
      var $4325 = HEAP[$S + 40];
      var $4326 = unSign($4325, 64, 1) / Math.pow(2, 41);
      var $4327 = $4325 * Math.pow(2, 23);
      var $4328 = Runtime.or64($4326, $4327);
      var $4329 = Runtime.xor64($4323, $4328);
      var $4330 = $4312 + $4329;
      
      var $4332 = HEAP[$S + 56];
      
      var $4334 = HEAP[$S + 40];
      
      var $4336 = HEAP[$S + 48];
      
      var $4338 = HEAP[$S + 56];
      var $4339 = Runtime.xor64($4336, $4338);
      var $4340 = Runtime.and64($4334, $4339);
      var $4341 = Runtime.xor64($4332, $4340);
      
      
      
      
      var $4346 = $4330 + $4341 + HEAP[$W + 440] + 0x682e6ff3d6b2b800;
      HEAP[$t0] = $4346;
      
      var $4348 = HEAP[$S + 8];
      var $4349 = unSign($4348, 64, 1) / Math.pow(2, 28);
      var $4350 = $4348 * Math.pow(2, 36);
      var $4351 = Runtime.or64($4349, $4350);
      
      var $4353 = HEAP[$S + 8];
      var $4354 = unSign($4353, 64, 1) / Math.pow(2, 34);
      var $4355 = $4353 * Math.pow(2, 30);
      var $4356 = Runtime.or64($4354, $4355);
      var $4357 = Runtime.xor64($4351, $4356);
      
      var $4359 = HEAP[$S + 8];
      var $4360 = unSign($4359, 64, 1) / Math.pow(2, 39);
      var $4361 = $4359 * Math.pow(2, 25);
      var $4362 = Runtime.or64($4360, $4361);
      var $4363 = Runtime.xor64($4357, $4362);
      
      var $4365 = HEAP[$S + 8];
      
      var $4367 = HEAP[$S + 16];
      var $4368 = Runtime.or64($4365, $4367);
      
      var $4370 = HEAP[$S + 24];
      var $4371 = Runtime.and64($4368, $4370);
      
      var $4373 = HEAP[$S + 8];
      
      var $4375 = HEAP[$S + 16];
      var $4376 = Runtime.and64($4373, $4375);
      var $4377 = Runtime.or64($4371, $4376);
      var $4378 = $4363 + $4377;
      HEAP[$t1] = $4378;
      
      
      
      var $4382 = HEAP[$S + 32] + HEAP[$t0];
      
      HEAP[$S + 32] = $4382;
      
      
      var $4386 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S] = $4386;
      
      var $4389 = HEAP[$S + 56];
      
      var $4391 = HEAP[$S + 32];
      var $4392 = unSign($4391, 64, 1) / Math.pow(2, 14);
      var $4393 = $4391 * Math.pow(2, 50);
      var $4394 = Runtime.or64($4392, $4393);
      
      var $4396 = HEAP[$S + 32];
      var $4397 = unSign($4396, 64, 1) / Math.pow(2, 18);
      var $4398 = $4396 * Math.pow(2, 46);
      var $4399 = Runtime.or64($4397, $4398);
      var $4400 = Runtime.xor64($4394, $4399);
      
      var $4402 = HEAP[$S + 32];
      var $4403 = unSign($4402, 64, 1) / Math.pow(2, 41);
      var $4404 = $4402 * Math.pow(2, 23);
      var $4405 = Runtime.or64($4403, $4404);
      var $4406 = Runtime.xor64($4400, $4405);
      var $4407 = $4389 + $4406;
      
      var $4409 = HEAP[$S + 48];
      
      var $4411 = HEAP[$S + 32];
      
      var $4413 = HEAP[$S + 40];
      
      var $4415 = HEAP[$S + 48];
      var $4416 = Runtime.xor64($4413, $4415);
      var $4417 = Runtime.and64($4411, $4416);
      var $4418 = Runtime.xor64($4409, $4417);
      
      
      
      
      var $4423 = $4407 + $4418 + HEAP[$W + 448] + 0x748f82ee5defb400;
      HEAP[$t0] = $4423;
      
      var $4425 = HEAP[$S];
      var $4426 = unSign($4425, 64, 1) / Math.pow(2, 28);
      var $4427 = $4425 * Math.pow(2, 36);
      var $4428 = Runtime.or64($4426, $4427);
      
      var $4430 = HEAP[$S];
      var $4431 = unSign($4430, 64, 1) / Math.pow(2, 34);
      var $4432 = $4430 * Math.pow(2, 30);
      var $4433 = Runtime.or64($4431, $4432);
      var $4434 = Runtime.xor64($4428, $4433);
      
      var $4436 = HEAP[$S];
      var $4437 = unSign($4436, 64, 1) / Math.pow(2, 39);
      var $4438 = $4436 * Math.pow(2, 25);
      var $4439 = Runtime.or64($4437, $4438);
      var $4440 = Runtime.xor64($4434, $4439);
      
      var $4442 = HEAP[$S];
      
      var $4444 = HEAP[$S + 8];
      var $4445 = Runtime.or64($4442, $4444);
      
      var $4447 = HEAP[$S + 16];
      var $4448 = Runtime.and64($4445, $4447);
      
      var $4450 = HEAP[$S];
      
      var $4452 = HEAP[$S + 8];
      var $4453 = Runtime.and64($4450, $4452);
      var $4454 = Runtime.or64($4448, $4453);
      var $4455 = $4440 + $4454;
      HEAP[$t1] = $4455;
      
      
      
      var $4459 = HEAP[$S + 24] + HEAP[$t0];
      
      HEAP[$S + 24] = $4459;
      
      
      var $4463 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 56] = $4463;
      
      var $4466 = HEAP[$S + 48];
      
      var $4468 = HEAP[$S + 24];
      var $4469 = unSign($4468, 64, 1) / Math.pow(2, 14);
      var $4470 = $4468 * Math.pow(2, 50);
      var $4471 = Runtime.or64($4469, $4470);
      
      var $4473 = HEAP[$S + 24];
      var $4474 = unSign($4473, 64, 1) / Math.pow(2, 18);
      var $4475 = $4473 * Math.pow(2, 46);
      var $4476 = Runtime.or64($4474, $4475);
      var $4477 = Runtime.xor64($4471, $4476);
      
      var $4479 = HEAP[$S + 24];
      var $4480 = unSign($4479, 64, 1) / Math.pow(2, 41);
      var $4481 = $4479 * Math.pow(2, 23);
      var $4482 = Runtime.or64($4480, $4481);
      var $4483 = Runtime.xor64($4477, $4482);
      var $4484 = $4466 + $4483;
      
      var $4486 = HEAP[$S + 40];
      
      var $4488 = HEAP[$S + 24];
      
      var $4490 = HEAP[$S + 32];
      
      var $4492 = HEAP[$S + 40];
      var $4493 = Runtime.xor64($4490, $4492);
      var $4494 = Runtime.and64($4488, $4493);
      var $4495 = Runtime.xor64($4486, $4494);
      
      
      
      
      var $4500 = $4484 + $4495 + HEAP[$W + 456] + 0x78a5636f43173000;
      HEAP[$t0] = $4500;
      
      var $4502 = HEAP[$S + 56];
      var $4503 = unSign($4502, 64, 1) / Math.pow(2, 28);
      var $4504 = $4502 * Math.pow(2, 36);
      var $4505 = Runtime.or64($4503, $4504);
      
      var $4507 = HEAP[$S + 56];
      var $4508 = unSign($4507, 64, 1) / Math.pow(2, 34);
      var $4509 = $4507 * Math.pow(2, 30);
      var $4510 = Runtime.or64($4508, $4509);
      var $4511 = Runtime.xor64($4505, $4510);
      
      var $4513 = HEAP[$S + 56];
      var $4514 = unSign($4513, 64, 1) / Math.pow(2, 39);
      var $4515 = $4513 * Math.pow(2, 25);
      var $4516 = Runtime.or64($4514, $4515);
      var $4517 = Runtime.xor64($4511, $4516);
      
      var $4519 = HEAP[$S + 56];
      
      var $4521 = HEAP[$S];
      var $4522 = Runtime.or64($4519, $4521);
      
      var $4524 = HEAP[$S + 8];
      var $4525 = Runtime.and64($4522, $4524);
      
      var $4527 = HEAP[$S + 56];
      
      var $4529 = HEAP[$S];
      var $4530 = Runtime.and64($4527, $4529);
      var $4531 = Runtime.or64($4525, $4530);
      var $4532 = $4517 + $4531;
      HEAP[$t1] = $4532;
      
      
      
      var $4536 = HEAP[$S + 16] + HEAP[$t0];
      
      HEAP[$S + 16] = $4536;
      
      
      var $4540 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 48] = $4540;
      
      var $4543 = HEAP[$S + 40];
      
      var $4545 = HEAP[$S + 16];
      var $4546 = unSign($4545, 64, 1) / Math.pow(2, 14);
      var $4547 = $4545 * Math.pow(2, 50);
      var $4548 = Runtime.or64($4546, $4547);
      
      var $4550 = HEAP[$S + 16];
      var $4551 = unSign($4550, 64, 1) / Math.pow(2, 18);
      var $4552 = $4550 * Math.pow(2, 46);
      var $4553 = Runtime.or64($4551, $4552);
      var $4554 = Runtime.xor64($4548, $4553);
      
      var $4556 = HEAP[$S + 16];
      var $4557 = unSign($4556, 64, 1) / Math.pow(2, 41);
      var $4558 = $4556 * Math.pow(2, 23);
      var $4559 = Runtime.or64($4557, $4558);
      var $4560 = Runtime.xor64($4554, $4559);
      var $4561 = $4543 + $4560;
      
      var $4563 = HEAP[$S + 32];
      
      var $4565 = HEAP[$S + 16];
      
      var $4567 = HEAP[$S + 24];
      
      var $4569 = HEAP[$S + 32];
      var $4570 = Runtime.xor64($4567, $4569);
      var $4571 = Runtime.and64($4565, $4570);
      var $4572 = Runtime.xor64($4563, $4571);
      
      
      
      
      var $4577 = $4561 + $4572 + HEAP[$W + 464] + -0x7b3787eb5e0f5400;
      HEAP[$t0] = $4577;
      
      var $4579 = HEAP[$S + 48];
      var $4580 = unSign($4579, 64, 1) / Math.pow(2, 28);
      var $4581 = $4579 * Math.pow(2, 36);
      var $4582 = Runtime.or64($4580, $4581);
      
      var $4584 = HEAP[$S + 48];
      var $4585 = unSign($4584, 64, 1) / Math.pow(2, 34);
      var $4586 = $4584 * Math.pow(2, 30);
      var $4587 = Runtime.or64($4585, $4586);
      var $4588 = Runtime.xor64($4582, $4587);
      
      var $4590 = HEAP[$S + 48];
      var $4591 = unSign($4590, 64, 1) / Math.pow(2, 39);
      var $4592 = $4590 * Math.pow(2, 25);
      var $4593 = Runtime.or64($4591, $4592);
      var $4594 = Runtime.xor64($4588, $4593);
      
      var $4596 = HEAP[$S + 48];
      
      var $4598 = HEAP[$S + 56];
      var $4599 = Runtime.or64($4596, $4598);
      
      var $4601 = HEAP[$S];
      var $4602 = Runtime.and64($4599, $4601);
      
      var $4604 = HEAP[$S + 48];
      
      var $4606 = HEAP[$S + 56];
      var $4607 = Runtime.and64($4604, $4606);
      var $4608 = Runtime.or64($4602, $4607);
      var $4609 = $4594 + $4608;
      HEAP[$t1] = $4609;
      
      
      
      var $4613 = HEAP[$S + 8] + HEAP[$t0];
      
      HEAP[$S + 8] = $4613;
      
      
      var $4617 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 40] = $4617;
      
      var $4620 = HEAP[$S + 32];
      
      var $4622 = HEAP[$S + 8];
      var $4623 = unSign($4622, 64, 1) / Math.pow(2, 14);
      var $4624 = $4622 * Math.pow(2, 50);
      var $4625 = Runtime.or64($4623, $4624);
      
      var $4627 = HEAP[$S + 8];
      var $4628 = unSign($4627, 64, 1) / Math.pow(2, 18);
      var $4629 = $4627 * Math.pow(2, 46);
      var $4630 = Runtime.or64($4628, $4629);
      var $4631 = Runtime.xor64($4625, $4630);
      
      var $4633 = HEAP[$S + 8];
      var $4634 = unSign($4633, 64, 1) / Math.pow(2, 41);
      var $4635 = $4633 * Math.pow(2, 23);
      var $4636 = Runtime.or64($4634, $4635);
      var $4637 = Runtime.xor64($4631, $4636);
      var $4638 = $4620 + $4637;
      
      var $4640 = HEAP[$S + 24];
      
      var $4642 = HEAP[$S + 8];
      
      var $4644 = HEAP[$S + 16];
      
      var $4646 = HEAP[$S + 24];
      var $4647 = Runtime.xor64($4644, $4646);
      var $4648 = Runtime.and64($4642, $4647);
      var $4649 = Runtime.xor64($4640, $4648);
      
      
      
      
      var $4654 = $4638 + $4649 + HEAP[$W + 472] + -0x7338fdf7e59bc800;
      HEAP[$t0] = $4654;
      
      var $4656 = HEAP[$S + 40];
      var $4657 = unSign($4656, 64, 1) / Math.pow(2, 28);
      var $4658 = $4656 * Math.pow(2, 36);
      var $4659 = Runtime.or64($4657, $4658);
      
      var $4661 = HEAP[$S + 40];
      var $4662 = unSign($4661, 64, 1) / Math.pow(2, 34);
      var $4663 = $4661 * Math.pow(2, 30);
      var $4664 = Runtime.or64($4662, $4663);
      var $4665 = Runtime.xor64($4659, $4664);
      
      var $4667 = HEAP[$S + 40];
      var $4668 = unSign($4667, 64, 1) / Math.pow(2, 39);
      var $4669 = $4667 * Math.pow(2, 25);
      var $4670 = Runtime.or64($4668, $4669);
      var $4671 = Runtime.xor64($4665, $4670);
      
      var $4673 = HEAP[$S + 40];
      
      var $4675 = HEAP[$S + 48];
      var $4676 = Runtime.or64($4673, $4675);
      
      var $4678 = HEAP[$S + 56];
      var $4679 = Runtime.and64($4676, $4678);
      
      var $4681 = HEAP[$S + 40];
      
      var $4683 = HEAP[$S + 48];
      var $4684 = Runtime.and64($4681, $4683);
      var $4685 = Runtime.or64($4679, $4684);
      var $4686 = $4671 + $4685;
      HEAP[$t1] = $4686;
      
      
      
      var $4690 = HEAP[$S] + HEAP[$t0];
      
      HEAP[$S] = $4690;
      
      
      var $4694 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 32] = $4694;
      
      var $4697 = HEAP[$S + 24];
      
      var $4699 = HEAP[$S];
      var $4700 = unSign($4699, 64, 1) / Math.pow(2, 14);
      var $4701 = $4699 * Math.pow(2, 50);
      var $4702 = Runtime.or64($4700, $4701);
      
      var $4704 = HEAP[$S];
      var $4705 = unSign($4704, 64, 1) / Math.pow(2, 18);
      var $4706 = $4704 * Math.pow(2, 46);
      var $4707 = Runtime.or64($4705, $4706);
      var $4708 = Runtime.xor64($4702, $4707);
      
      var $4710 = HEAP[$S];
      var $4711 = unSign($4710, 64, 1) / Math.pow(2, 41);
      var $4712 = $4710 * Math.pow(2, 23);
      var $4713 = Runtime.or64($4711, $4712);
      var $4714 = Runtime.xor64($4708, $4713);
      var $4715 = $4697 + $4714;
      
      var $4717 = HEAP[$S + 16];
      
      var $4719 = HEAP[$S];
      
      var $4721 = HEAP[$S + 8];
      
      var $4723 = HEAP[$S + 16];
      var $4724 = Runtime.xor64($4721, $4723);
      var $4725 = Runtime.and64($4719, $4724);
      var $4726 = Runtime.xor64($4717, $4725);
      
      
      
      
      var $4731 = $4715 + $4726 + HEAP[$W + 480] + -0x6f410005dc9ce000;
      HEAP[$t0] = $4731;
      
      var $4733 = HEAP[$S + 32];
      var $4734 = unSign($4733, 64, 1) / Math.pow(2, 28);
      var $4735 = $4733 * Math.pow(2, 36);
      var $4736 = Runtime.or64($4734, $4735);
      
      var $4738 = HEAP[$S + 32];
      var $4739 = unSign($4738, 64, 1) / Math.pow(2, 34);
      var $4740 = $4738 * Math.pow(2, 30);
      var $4741 = Runtime.or64($4739, $4740);
      var $4742 = Runtime.xor64($4736, $4741);
      
      var $4744 = HEAP[$S + 32];
      var $4745 = unSign($4744, 64, 1) / Math.pow(2, 39);
      var $4746 = $4744 * Math.pow(2, 25);
      var $4747 = Runtime.or64($4745, $4746);
      var $4748 = Runtime.xor64($4742, $4747);
      
      var $4750 = HEAP[$S + 32];
      
      var $4752 = HEAP[$S + 40];
      var $4753 = Runtime.or64($4750, $4752);
      
      var $4755 = HEAP[$S + 48];
      var $4756 = Runtime.and64($4753, $4755);
      
      var $4758 = HEAP[$S + 32];
      
      var $4760 = HEAP[$S + 40];
      var $4761 = Runtime.and64($4758, $4760);
      var $4762 = Runtime.or64($4756, $4761);
      var $4763 = $4748 + $4762;
      HEAP[$t1] = $4763;
      
      
      
      var $4767 = HEAP[$S + 56] + HEAP[$t0];
      
      HEAP[$S + 56] = $4767;
      
      
      var $4771 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 24] = $4771;
      
      var $4774 = HEAP[$S + 16];
      
      var $4776 = HEAP[$S + 56];
      var $4777 = unSign($4776, 64, 1) / Math.pow(2, 14);
      var $4778 = $4776 * Math.pow(2, 50);
      var $4779 = Runtime.or64($4777, $4778);
      
      var $4781 = HEAP[$S + 56];
      var $4782 = unSign($4781, 64, 1) / Math.pow(2, 18);
      var $4783 = $4781 * Math.pow(2, 46);
      var $4784 = Runtime.or64($4782, $4783);
      var $4785 = Runtime.xor64($4779, $4784);
      
      var $4787 = HEAP[$S + 56];
      var $4788 = unSign($4787, 64, 1) / Math.pow(2, 41);
      var $4789 = $4787 * Math.pow(2, 23);
      var $4790 = Runtime.or64($4788, $4789);
      var $4791 = Runtime.xor64($4785, $4790);
      var $4792 = $4774 + $4791;
      
      var $4794 = HEAP[$S + 8];
      
      var $4796 = HEAP[$S + 56];
      
      var $4798 = HEAP[$S];
      
      var $4800 = HEAP[$S + 8];
      var $4801 = Runtime.xor64($4798, $4800);
      var $4802 = Runtime.and64($4796, $4801);
      var $4803 = Runtime.xor64($4794, $4802);
      
      
      
      
      var $4808 = $4792 + $4803 + HEAP[$W + 488] + -0x5baf9314217d4400;
      HEAP[$t0] = $4808;
      
      var $4810 = HEAP[$S + 24];
      var $4811 = unSign($4810, 64, 1) / Math.pow(2, 28);
      var $4812 = $4810 * Math.pow(2, 36);
      var $4813 = Runtime.or64($4811, $4812);
      
      var $4815 = HEAP[$S + 24];
      var $4816 = unSign($4815, 64, 1) / Math.pow(2, 34);
      var $4817 = $4815 * Math.pow(2, 30);
      var $4818 = Runtime.or64($4816, $4817);
      var $4819 = Runtime.xor64($4813, $4818);
      
      var $4821 = HEAP[$S + 24];
      var $4822 = unSign($4821, 64, 1) / Math.pow(2, 39);
      var $4823 = $4821 * Math.pow(2, 25);
      var $4824 = Runtime.or64($4822, $4823);
      var $4825 = Runtime.xor64($4819, $4824);
      
      var $4827 = HEAP[$S + 24];
      
      var $4829 = HEAP[$S + 32];
      var $4830 = Runtime.or64($4827, $4829);
      
      var $4832 = HEAP[$S + 40];
      var $4833 = Runtime.and64($4830, $4832);
      
      var $4835 = HEAP[$S + 24];
      
      var $4837 = HEAP[$S + 32];
      var $4838 = Runtime.and64($4835, $4837);
      var $4839 = Runtime.or64($4833, $4838);
      var $4840 = $4825 + $4839;
      HEAP[$t1] = $4840;
      
      
      
      var $4844 = HEAP[$S + 48] + HEAP[$t0];
      
      HEAP[$S + 48] = $4844;
      
      
      var $4848 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 16] = $4848;
      
      var $4851 = HEAP[$S + 8];
      
      var $4853 = HEAP[$S + 48];
      var $4854 = unSign($4853, 64, 1) / Math.pow(2, 14);
      var $4855 = $4853 * Math.pow(2, 50);
      var $4856 = Runtime.or64($4854, $4855);
      
      var $4858 = HEAP[$S + 48];
      var $4859 = unSign($4858, 64, 1) / Math.pow(2, 18);
      var $4860 = $4858 * Math.pow(2, 46);
      var $4861 = Runtime.or64($4859, $4860);
      var $4862 = Runtime.xor64($4856, $4861);
      
      var $4864 = HEAP[$S + 48];
      var $4865 = unSign($4864, 64, 1) / Math.pow(2, 41);
      var $4866 = $4864 * Math.pow(2, 23);
      var $4867 = Runtime.or64($4865, $4866);
      var $4868 = Runtime.xor64($4862, $4867);
      var $4869 = $4851 + $4868;
      
      var $4871 = HEAP[$S];
      
      var $4873 = HEAP[$S + 48];
      
      var $4875 = HEAP[$S + 56];
      
      var $4877 = HEAP[$S];
      var $4878 = Runtime.xor64($4875, $4877);
      var $4879 = Runtime.and64($4873, $4878);
      var $4880 = Runtime.xor64($4871, $4879);
      
      
      
      
      var $4885 = $4869 + $4880 + HEAP[$W + 496] + -468553365305069e4;
      HEAP[$t0] = $4885;
      
      var $4887 = HEAP[$S + 16];
      var $4888 = unSign($4887, 64, 1) / Math.pow(2, 28);
      var $4889 = $4887 * Math.pow(2, 36);
      var $4890 = Runtime.or64($4888, $4889);
      
      var $4892 = HEAP[$S + 16];
      var $4893 = unSign($4892, 64, 1) / Math.pow(2, 34);
      var $4894 = $4892 * Math.pow(2, 30);
      var $4895 = Runtime.or64($4893, $4894);
      var $4896 = Runtime.xor64($4890, $4895);
      
      var $4898 = HEAP[$S + 16];
      var $4899 = unSign($4898, 64, 1) / Math.pow(2, 39);
      var $4900 = $4898 * Math.pow(2, 25);
      var $4901 = Runtime.or64($4899, $4900);
      var $4902 = Runtime.xor64($4896, $4901);
      
      var $4904 = HEAP[$S + 16];
      
      var $4906 = HEAP[$S + 24];
      var $4907 = Runtime.or64($4904, $4906);
      
      var $4909 = HEAP[$S + 32];
      var $4910 = Runtime.and64($4907, $4909);
      
      var $4912 = HEAP[$S + 16];
      
      var $4914 = HEAP[$S + 24];
      var $4915 = Runtime.and64($4912, $4914);
      var $4916 = Runtime.or64($4910, $4915);
      var $4917 = $4902 + $4916;
      HEAP[$t1] = $4917;
      
      
      
      var $4921 = HEAP[$S + 40] + HEAP[$t0];
      
      HEAP[$S + 40] = $4921;
      
      
      var $4925 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 8] = $4925;
      
      var $4928 = HEAP[$S];
      
      var $4930 = HEAP[$S + 40];
      var $4931 = unSign($4930, 64, 1) / Math.pow(2, 14);
      var $4932 = $4930 * Math.pow(2, 50);
      var $4933 = Runtime.or64($4931, $4932);
      
      var $4935 = HEAP[$S + 40];
      var $4936 = unSign($4935, 64, 1) / Math.pow(2, 18);
      var $4937 = $4935 * Math.pow(2, 46);
      var $4938 = Runtime.or64($4936, $4937);
      var $4939 = Runtime.xor64($4933, $4938);
      
      var $4941 = HEAP[$S + 40];
      var $4942 = unSign($4941, 64, 1) / Math.pow(2, 41);
      var $4943 = $4941 * Math.pow(2, 23);
      var $4944 = Runtime.or64($4942, $4943);
      var $4945 = Runtime.xor64($4939, $4944);
      var $4946 = $4928 + $4945;
      
      var $4948 = HEAP[$S + 56];
      
      var $4950 = HEAP[$S + 40];
      
      var $4952 = HEAP[$S + 48];
      
      var $4954 = HEAP[$S + 56];
      var $4955 = Runtime.xor64($4952, $4954);
      var $4956 = Runtime.and64($4950, $4955);
      var $4957 = Runtime.xor64($4948, $4956);
      
      
      
      
      var $4962 = $4946 + $4957 + HEAP[$W + 504] + -0x398e870d1c8dac00;
      HEAP[$t0] = $4962;
      
      var $4964 = HEAP[$S + 8];
      var $4965 = unSign($4964, 64, 1) / Math.pow(2, 28);
      var $4966 = $4964 * Math.pow(2, 36);
      var $4967 = Runtime.or64($4965, $4966);
      
      var $4969 = HEAP[$S + 8];
      var $4970 = unSign($4969, 64, 1) / Math.pow(2, 34);
      var $4971 = $4969 * Math.pow(2, 30);
      var $4972 = Runtime.or64($4970, $4971);
      var $4973 = Runtime.xor64($4967, $4972);
      
      var $4975 = HEAP[$S + 8];
      var $4976 = unSign($4975, 64, 1) / Math.pow(2, 39);
      var $4977 = $4975 * Math.pow(2, 25);
      var $4978 = Runtime.or64($4976, $4977);
      var $4979 = Runtime.xor64($4973, $4978);
      
      var $4981 = HEAP[$S + 8];
      
      var $4983 = HEAP[$S + 16];
      var $4984 = Runtime.or64($4981, $4983);
      
      var $4986 = HEAP[$S + 24];
      var $4987 = Runtime.and64($4984, $4986);
      
      var $4989 = HEAP[$S + 8];
      
      var $4991 = HEAP[$S + 16];
      var $4992 = Runtime.and64($4989, $4991);
      var $4993 = Runtime.or64($4987, $4992);
      var $4994 = $4979 + $4993;
      HEAP[$t1] = $4994;
      
      
      
      var $4998 = HEAP[$S + 32] + HEAP[$t0];
      
      HEAP[$S + 32] = $4998;
      
      
      var $5002 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S] = $5002;
      
      var $5005 = HEAP[$S + 56];
      
      var $5007 = HEAP[$S + 32];
      var $5008 = unSign($5007, 64, 1) / Math.pow(2, 14);
      var $5009 = $5007 * Math.pow(2, 50);
      var $5010 = Runtime.or64($5008, $5009);
      
      var $5012 = HEAP[$S + 32];
      var $5013 = unSign($5012, 64, 1) / Math.pow(2, 18);
      var $5014 = $5012 * Math.pow(2, 46);
      var $5015 = Runtime.or64($5013, $5014);
      var $5016 = Runtime.xor64($5010, $5015);
      
      var $5018 = HEAP[$S + 32];
      var $5019 = unSign($5018, 64, 1) / Math.pow(2, 41);
      var $5020 = $5018 * Math.pow(2, 23);
      var $5021 = Runtime.or64($5019, $5020);
      var $5022 = Runtime.xor64($5016, $5021);
      var $5023 = $5005 + $5022;
      
      var $5025 = HEAP[$S + 48];
      
      var $5027 = HEAP[$S + 32];
      
      var $5029 = HEAP[$S + 40];
      
      var $5031 = HEAP[$S + 48];
      var $5032 = Runtime.xor64($5029, $5031);
      var $5033 = Runtime.and64($5027, $5032);
      var $5034 = Runtime.xor64($5025, $5033);
      
      
      
      
      var $5039 = $5023 + $5034 + HEAP[$W + 512] + -0x35d8c13115d99e00;
      HEAP[$t0] = $5039;
      
      var $5041 = HEAP[$S];
      var $5042 = unSign($5041, 64, 1) / Math.pow(2, 28);
      var $5043 = $5041 * Math.pow(2, 36);
      var $5044 = Runtime.or64($5042, $5043);
      
      var $5046 = HEAP[$S];
      var $5047 = unSign($5046, 64, 1) / Math.pow(2, 34);
      var $5048 = $5046 * Math.pow(2, 30);
      var $5049 = Runtime.or64($5047, $5048);
      var $5050 = Runtime.xor64($5044, $5049);
      
      var $5052 = HEAP[$S];
      var $5053 = unSign($5052, 64, 1) / Math.pow(2, 39);
      var $5054 = $5052 * Math.pow(2, 25);
      var $5055 = Runtime.or64($5053, $5054);
      var $5056 = Runtime.xor64($5050, $5055);
      
      var $5058 = HEAP[$S];
      
      var $5060 = HEAP[$S + 8];
      var $5061 = Runtime.or64($5058, $5060);
      
      var $5063 = HEAP[$S + 16];
      var $5064 = Runtime.and64($5061, $5063);
      
      var $5066 = HEAP[$S];
      
      var $5068 = HEAP[$S + 8];
      var $5069 = Runtime.and64($5066, $5068);
      var $5070 = Runtime.or64($5064, $5069);
      var $5071 = $5056 + $5070;
      HEAP[$t1] = $5071;
      
      
      
      var $5075 = HEAP[$S + 24] + HEAP[$t0];
      
      HEAP[$S + 24] = $5075;
      
      
      var $5079 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 56] = $5079;
      
      var $5082 = HEAP[$S + 48];
      
      var $5084 = HEAP[$S + 24];
      var $5085 = unSign($5084, 64, 1) / Math.pow(2, 14);
      var $5086 = $5084 * Math.pow(2, 50);
      var $5087 = Runtime.or64($5085, $5086);
      
      var $5089 = HEAP[$S + 24];
      var $5090 = unSign($5089, 64, 1) / Math.pow(2, 18);
      var $5091 = $5089 * Math.pow(2, 46);
      var $5092 = Runtime.or64($5090, $5091);
      var $5093 = Runtime.xor64($5087, $5092);
      
      var $5095 = HEAP[$S + 24];
      var $5096 = unSign($5095, 64, 1) / Math.pow(2, 41);
      var $5097 = $5095 * Math.pow(2, 23);
      var $5098 = Runtime.or64($5096, $5097);
      var $5099 = Runtime.xor64($5093, $5098);
      var $5100 = $5082 + $5099;
      
      var $5102 = HEAP[$S + 40];
      
      var $5104 = HEAP[$S + 24];
      
      var $5106 = HEAP[$S + 32];
      
      var $5108 = HEAP[$S + 40];
      var $5109 = Runtime.xor64($5106, $5108);
      var $5110 = Runtime.and64($5104, $5109);
      var $5111 = Runtime.xor64($5102, $5110);
      
      
      
      
      var $5116 = $5100 + $5111 + HEAP[$W + 520] + -0x2e794738de3f3e00;
      HEAP[$t0] = $5116;
      
      var $5118 = HEAP[$S + 56];
      var $5119 = unSign($5118, 64, 1) / Math.pow(2, 28);
      var $5120 = $5118 * Math.pow(2, 36);
      var $5121 = Runtime.or64($5119, $5120);
      
      var $5123 = HEAP[$S + 56];
      var $5124 = unSign($5123, 64, 1) / Math.pow(2, 34);
      var $5125 = $5123 * Math.pow(2, 30);
      var $5126 = Runtime.or64($5124, $5125);
      var $5127 = Runtime.xor64($5121, $5126);
      
      var $5129 = HEAP[$S + 56];
      var $5130 = unSign($5129, 64, 1) / Math.pow(2, 39);
      var $5131 = $5129 * Math.pow(2, 25);
      var $5132 = Runtime.or64($5130, $5131);
      var $5133 = Runtime.xor64($5127, $5132);
      
      var $5135 = HEAP[$S + 56];
      
      var $5137 = HEAP[$S];
      var $5138 = Runtime.or64($5135, $5137);
      
      var $5140 = HEAP[$S + 8];
      var $5141 = Runtime.and64($5138, $5140);
      
      var $5143 = HEAP[$S + 56];
      
      var $5145 = HEAP[$S];
      var $5146 = Runtime.and64($5143, $5145);
      var $5147 = Runtime.or64($5141, $5146);
      var $5148 = $5133 + $5147;
      HEAP[$t1] = $5148;
      
      
      
      var $5152 = HEAP[$S + 16] + HEAP[$t0];
      
      HEAP[$S + 16] = $5152;
      
      
      var $5156 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 48] = $5156;
      
      var $5159 = HEAP[$S + 40];
      
      var $5161 = HEAP[$S + 16];
      var $5162 = unSign($5161, 64, 1) / Math.pow(2, 14);
      var $5163 = $5161 * Math.pow(2, 50);
      var $5164 = Runtime.or64($5162, $5163);
      
      var $5166 = HEAP[$S + 16];
      var $5167 = unSign($5166, 64, 1) / Math.pow(2, 18);
      var $5168 = $5166 * Math.pow(2, 46);
      var $5169 = Runtime.or64($5167, $5168);
      var $5170 = Runtime.xor64($5164, $5169);
      
      var $5172 = HEAP[$S + 16];
      var $5173 = unSign($5172, 64, 1) / Math.pow(2, 41);
      var $5174 = $5172 * Math.pow(2, 23);
      var $5175 = Runtime.or64($5173, $5174);
      var $5176 = Runtime.xor64($5170, $5175);
      var $5177 = $5159 + $5176;
      
      var $5179 = HEAP[$S + 32];
      
      var $5181 = HEAP[$S + 16];
      
      var $5183 = HEAP[$S + 24];
      
      var $5185 = HEAP[$S + 32];
      var $5186 = Runtime.xor64($5183, $5185);
      var $5187 = Runtime.and64($5181, $5186);
      var $5188 = Runtime.xor64($5179, $5187);
      
      
      
      
      var $5193 = $5177 + $5188 + HEAP[$W + 528] + -0x15258229321f1500;
      HEAP[$t0] = $5193;
      
      var $5195 = HEAP[$S + 48];
      var $5196 = unSign($5195, 64, 1) / Math.pow(2, 28);
      var $5197 = $5195 * Math.pow(2, 36);
      var $5198 = Runtime.or64($5196, $5197);
      
      var $5200 = HEAP[$S + 48];
      var $5201 = unSign($5200, 64, 1) / Math.pow(2, 34);
      var $5202 = $5200 * Math.pow(2, 30);
      var $5203 = Runtime.or64($5201, $5202);
      var $5204 = Runtime.xor64($5198, $5203);
      
      var $5206 = HEAP[$S + 48];
      var $5207 = unSign($5206, 64, 1) / Math.pow(2, 39);
      var $5208 = $5206 * Math.pow(2, 25);
      var $5209 = Runtime.or64($5207, $5208);
      var $5210 = Runtime.xor64($5204, $5209);
      
      var $5212 = HEAP[$S + 48];
      
      var $5214 = HEAP[$S + 56];
      var $5215 = Runtime.or64($5212, $5214);
      
      var $5217 = HEAP[$S];
      var $5218 = Runtime.and64($5215, $5217);
      
      var $5220 = HEAP[$S + 48];
      
      var $5222 = HEAP[$S + 56];
      var $5223 = Runtime.and64($5220, $5222);
      var $5224 = Runtime.or64($5218, $5223);
      var $5225 = $5210 + $5224;
      HEAP[$t1] = $5225;
      
      
      
      var $5229 = HEAP[$S + 8] + HEAP[$t0];
      
      HEAP[$S + 8] = $5229;
      
      
      var $5233 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 40] = $5233;
      
      var $5236 = HEAP[$S + 32];
      
      var $5238 = HEAP[$S + 8];
      var $5239 = unSign($5238, 64, 1) / Math.pow(2, 14);
      var $5240 = $5238 * Math.pow(2, 50);
      var $5241 = Runtime.or64($5239, $5240);
      
      var $5243 = HEAP[$S + 8];
      var $5244 = unSign($5243, 64, 1) / Math.pow(2, 18);
      var $5245 = $5243 * Math.pow(2, 46);
      var $5246 = Runtime.or64($5244, $5245);
      var $5247 = Runtime.xor64($5241, $5246);
      
      var $5249 = HEAP[$S + 8];
      var $5250 = unSign($5249, 64, 1) / Math.pow(2, 41);
      var $5251 = $5249 * Math.pow(2, 23);
      var $5252 = Runtime.or64($5250, $5251);
      var $5253 = Runtime.xor64($5247, $5252);
      var $5254 = $5236 + $5253;
      
      var $5256 = HEAP[$S + 24];
      
      var $5258 = HEAP[$S + 8];
      
      var $5260 = HEAP[$S + 16];
      
      var $5262 = HEAP[$S + 24];
      var $5263 = Runtime.xor64($5260, $5262);
      var $5264 = Runtime.and64($5258, $5263);
      var $5265 = Runtime.xor64($5256, $5264);
      
      
      
      
      var $5270 = $5254 + $5265 + HEAP[$W + 536] + -0xa82b08011912e80;
      HEAP[$t0] = $5270;
      
      var $5272 = HEAP[$S + 40];
      var $5273 = unSign($5272, 64, 1) / Math.pow(2, 28);
      var $5274 = $5272 * Math.pow(2, 36);
      var $5275 = Runtime.or64($5273, $5274);
      
      var $5277 = HEAP[$S + 40];
      var $5278 = unSign($5277, 64, 1) / Math.pow(2, 34);
      var $5279 = $5277 * Math.pow(2, 30);
      var $5280 = Runtime.or64($5278, $5279);
      var $5281 = Runtime.xor64($5275, $5280);
      
      var $5283 = HEAP[$S + 40];
      var $5284 = unSign($5283, 64, 1) / Math.pow(2, 39);
      var $5285 = $5283 * Math.pow(2, 25);
      var $5286 = Runtime.or64($5284, $5285);
      var $5287 = Runtime.xor64($5281, $5286);
      
      var $5289 = HEAP[$S + 40];
      
      var $5291 = HEAP[$S + 48];
      var $5292 = Runtime.or64($5289, $5291);
      
      var $5294 = HEAP[$S + 56];
      var $5295 = Runtime.and64($5292, $5294);
      
      var $5297 = HEAP[$S + 40];
      
      var $5299 = HEAP[$S + 48];
      var $5300 = Runtime.and64($5297, $5299);
      var $5301 = Runtime.or64($5295, $5300);
      var $5302 = $5287 + $5301;
      HEAP[$t1] = $5302;
      
      
      
      var $5306 = HEAP[$S] + HEAP[$t0];
      
      HEAP[$S] = $5306;
      
      
      var $5310 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 32] = $5310;
      
      var $5313 = HEAP[$S + 24];
      
      var $5315 = HEAP[$S];
      var $5316 = unSign($5315, 64, 1) / Math.pow(2, 14);
      var $5317 = $5315 * Math.pow(2, 50);
      var $5318 = Runtime.or64($5316, $5317);
      
      var $5320 = HEAP[$S];
      var $5321 = unSign($5320, 64, 1) / Math.pow(2, 18);
      var $5322 = $5320 * Math.pow(2, 46);
      var $5323 = Runtime.or64($5321, $5322);
      var $5324 = Runtime.xor64($5318, $5323);
      
      var $5326 = HEAP[$S];
      var $5327 = unSign($5326, 64, 1) / Math.pow(2, 41);
      var $5328 = $5326 * Math.pow(2, 23);
      var $5329 = Runtime.or64($5327, $5328);
      var $5330 = Runtime.xor64($5324, $5329);
      var $5331 = $5313 + $5330;
      
      var $5333 = HEAP[$S + 16];
      
      var $5335 = HEAP[$S];
      
      var $5337 = HEAP[$S + 8];
      
      var $5339 = HEAP[$S + 16];
      var $5340 = Runtime.xor64($5337, $5339);
      var $5341 = Runtime.and64($5335, $5340);
      var $5342 = Runtime.xor64($5333, $5341);
      
      
      
      
      var $5347 = $5331 + $5342 + HEAP[$W + 544] + 0x6f067aa72176fc0;
      HEAP[$t0] = $5347;
      
      var $5349 = HEAP[$S + 32];
      var $5350 = unSign($5349, 64, 1) / Math.pow(2, 28);
      var $5351 = $5349 * Math.pow(2, 36);
      var $5352 = Runtime.or64($5350, $5351);
      
      var $5354 = HEAP[$S + 32];
      var $5355 = unSign($5354, 64, 1) / Math.pow(2, 34);
      var $5356 = $5354 * Math.pow(2, 30);
      var $5357 = Runtime.or64($5355, $5356);
      var $5358 = Runtime.xor64($5352, $5357);
      
      var $5360 = HEAP[$S + 32];
      var $5361 = unSign($5360, 64, 1) / Math.pow(2, 39);
      var $5362 = $5360 * Math.pow(2, 25);
      var $5363 = Runtime.or64($5361, $5362);
      var $5364 = Runtime.xor64($5358, $5363);
      
      var $5366 = HEAP[$S + 32];
      
      var $5368 = HEAP[$S + 40];
      var $5369 = Runtime.or64($5366, $5368);
      
      var $5371 = HEAP[$S + 48];
      var $5372 = Runtime.and64($5369, $5371);
      
      var $5374 = HEAP[$S + 32];
      
      var $5376 = HEAP[$S + 40];
      var $5377 = Runtime.and64($5374, $5376);
      var $5378 = Runtime.or64($5372, $5377);
      var $5379 = $5364 + $5378;
      HEAP[$t1] = $5379;
      
      
      
      var $5383 = HEAP[$S + 56] + HEAP[$t0];
      
      HEAP[$S + 56] = $5383;
      
      
      var $5387 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 24] = $5387;
      
      var $5390 = HEAP[$S + 16];
      
      var $5392 = HEAP[$S + 56];
      var $5393 = unSign($5392, 64, 1) / Math.pow(2, 14);
      var $5394 = $5392 * Math.pow(2, 50);
      var $5395 = Runtime.or64($5393, $5394);
      
      var $5397 = HEAP[$S + 56];
      var $5398 = unSign($5397, 64, 1) / Math.pow(2, 18);
      var $5399 = $5397 * Math.pow(2, 46);
      var $5400 = Runtime.or64($5398, $5399);
      var $5401 = Runtime.xor64($5395, $5400);
      
      var $5403 = HEAP[$S + 56];
      var $5404 = unSign($5403, 64, 1) / Math.pow(2, 41);
      var $5405 = $5403 * Math.pow(2, 23);
      var $5406 = Runtime.or64($5404, $5405);
      var $5407 = Runtime.xor64($5401, $5406);
      var $5408 = $5390 + $5407;
      
      var $5410 = HEAP[$S + 8];
      
      var $5412 = HEAP[$S + 56];
      
      var $5414 = HEAP[$S];
      
      var $5416 = HEAP[$S + 8];
      var $5417 = Runtime.xor64($5414, $5416);
      var $5418 = Runtime.and64($5412, $5417);
      var $5419 = Runtime.xor64($5410, $5418);
      
      
      
      
      var $5424 = $5408 + $5419 + HEAP[$W + 552] + 0xa637dc5a2c89880;
      HEAP[$t0] = $5424;
      
      var $5426 = HEAP[$S + 24];
      var $5427 = unSign($5426, 64, 1) / Math.pow(2, 28);
      var $5428 = $5426 * Math.pow(2, 36);
      var $5429 = Runtime.or64($5427, $5428);
      
      var $5431 = HEAP[$S + 24];
      var $5432 = unSign($5431, 64, 1) / Math.pow(2, 34);
      var $5433 = $5431 * Math.pow(2, 30);
      var $5434 = Runtime.or64($5432, $5433);
      var $5435 = Runtime.xor64($5429, $5434);
      
      var $5437 = HEAP[$S + 24];
      var $5438 = unSign($5437, 64, 1) / Math.pow(2, 39);
      var $5439 = $5437 * Math.pow(2, 25);
      var $5440 = Runtime.or64($5438, $5439);
      var $5441 = Runtime.xor64($5435, $5440);
      
      var $5443 = HEAP[$S + 24];
      
      var $5445 = HEAP[$S + 32];
      var $5446 = Runtime.or64($5443, $5445);
      
      var $5448 = HEAP[$S + 40];
      var $5449 = Runtime.and64($5446, $5448);
      
      var $5451 = HEAP[$S + 24];
      
      var $5453 = HEAP[$S + 32];
      var $5454 = Runtime.and64($5451, $5453);
      var $5455 = Runtime.or64($5449, $5454);
      var $5456 = $5441 + $5455;
      HEAP[$t1] = $5456;
      
      
      
      var $5460 = HEAP[$S + 48] + HEAP[$t0];
      
      HEAP[$S + 48] = $5460;
      
      
      var $5464 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 16] = $5464;
      
      var $5467 = HEAP[$S + 8];
      
      var $5469 = HEAP[$S + 48];
      var $5470 = unSign($5469, 64, 1) / Math.pow(2, 14);
      var $5471 = $5469 * Math.pow(2, 50);
      var $5472 = Runtime.or64($5470, $5471);
      
      var $5474 = HEAP[$S + 48];
      var $5475 = unSign($5474, 64, 1) / Math.pow(2, 18);
      var $5476 = $5474 * Math.pow(2, 46);
      var $5477 = Runtime.or64($5475, $5476);
      var $5478 = Runtime.xor64($5472, $5477);
      
      var $5480 = HEAP[$S + 48];
      var $5481 = unSign($5480, 64, 1) / Math.pow(2, 41);
      var $5482 = $5480 * Math.pow(2, 23);
      var $5483 = Runtime.or64($5481, $5482);
      var $5484 = Runtime.xor64($5478, $5483);
      var $5485 = $5467 + $5484;
      
      var $5487 = HEAP[$S];
      
      var $5489 = HEAP[$S + 48];
      
      var $5491 = HEAP[$S + 56];
      
      var $5493 = HEAP[$S];
      var $5494 = Runtime.xor64($5491, $5493);
      var $5495 = Runtime.and64($5489, $5494);
      var $5496 = Runtime.xor64($5487, $5495);
      
      
      
      
      var $5501 = $5485 + $5496 + HEAP[$W + 560] + 0x113f9804bef90e00;
      HEAP[$t0] = $5501;
      
      var $5503 = HEAP[$S + 16];
      var $5504 = unSign($5503, 64, 1) / Math.pow(2, 28);
      var $5505 = $5503 * Math.pow(2, 36);
      var $5506 = Runtime.or64($5504, $5505);
      
      var $5508 = HEAP[$S + 16];
      var $5509 = unSign($5508, 64, 1) / Math.pow(2, 34);
      var $5510 = $5508 * Math.pow(2, 30);
      var $5511 = Runtime.or64($5509, $5510);
      var $5512 = Runtime.xor64($5506, $5511);
      
      var $5514 = HEAP[$S + 16];
      var $5515 = unSign($5514, 64, 1) / Math.pow(2, 39);
      var $5516 = $5514 * Math.pow(2, 25);
      var $5517 = Runtime.or64($5515, $5516);
      var $5518 = Runtime.xor64($5512, $5517);
      
      var $5520 = HEAP[$S + 16];
      
      var $5522 = HEAP[$S + 24];
      var $5523 = Runtime.or64($5520, $5522);
      
      var $5525 = HEAP[$S + 32];
      var $5526 = Runtime.and64($5523, $5525);
      
      var $5528 = HEAP[$S + 16];
      
      var $5530 = HEAP[$S + 24];
      var $5531 = Runtime.and64($5528, $5530);
      var $5532 = Runtime.or64($5526, $5531);
      var $5533 = $5518 + $5532;
      HEAP[$t1] = $5533;
      
      
      
      var $5537 = HEAP[$S + 40] + HEAP[$t0];
      
      HEAP[$S + 40] = $5537;
      
      
      var $5541 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 8] = $5541;
      
      var $5544 = HEAP[$S];
      
      var $5546 = HEAP[$S + 40];
      var $5547 = unSign($5546, 64, 1) / Math.pow(2, 14);
      var $5548 = $5546 * Math.pow(2, 50);
      var $5549 = Runtime.or64($5547, $5548);
      
      var $5551 = HEAP[$S + 40];
      var $5552 = unSign($5551, 64, 1) / Math.pow(2, 18);
      var $5553 = $5551 * Math.pow(2, 46);
      var $5554 = Runtime.or64($5552, $5553);
      var $5555 = Runtime.xor64($5549, $5554);
      
      var $5557 = HEAP[$S + 40];
      var $5558 = unSign($5557, 64, 1) / Math.pow(2, 41);
      var $5559 = $5557 * Math.pow(2, 23);
      var $5560 = Runtime.or64($5558, $5559);
      var $5561 = Runtime.xor64($5555, $5560);
      var $5562 = $5544 + $5561;
      
      var $5564 = HEAP[$S + 56];
      
      var $5566 = HEAP[$S + 40];
      
      var $5568 = HEAP[$S + 48];
      
      var $5570 = HEAP[$S + 56];
      var $5571 = Runtime.xor64($5568, $5570);
      var $5572 = Runtime.and64($5566, $5571);
      var $5573 = Runtime.xor64($5564, $5572);
      
      
      
      
      var $5578 = $5562 + $5573 + HEAP[$W + 568] + 0x1b710b35131c4700;
      HEAP[$t0] = $5578;
      
      var $5580 = HEAP[$S + 8];
      var $5581 = unSign($5580, 64, 1) / Math.pow(2, 28);
      var $5582 = $5580 * Math.pow(2, 36);
      var $5583 = Runtime.or64($5581, $5582);
      
      var $5585 = HEAP[$S + 8];
      var $5586 = unSign($5585, 64, 1) / Math.pow(2, 34);
      var $5587 = $5585 * Math.pow(2, 30);
      var $5588 = Runtime.or64($5586, $5587);
      var $5589 = Runtime.xor64($5583, $5588);
      
      var $5591 = HEAP[$S + 8];
      var $5592 = unSign($5591, 64, 1) / Math.pow(2, 39);
      var $5593 = $5591 * Math.pow(2, 25);
      var $5594 = Runtime.or64($5592, $5593);
      var $5595 = Runtime.xor64($5589, $5594);
      
      var $5597 = HEAP[$S + 8];
      
      var $5599 = HEAP[$S + 16];
      var $5600 = Runtime.or64($5597, $5599);
      
      var $5602 = HEAP[$S + 24];
      var $5603 = Runtime.and64($5600, $5602);
      
      var $5605 = HEAP[$S + 8];
      
      var $5607 = HEAP[$S + 16];
      var $5608 = Runtime.and64($5605, $5607);
      var $5609 = Runtime.or64($5603, $5608);
      var $5610 = $5595 + $5609;
      HEAP[$t1] = $5610;
      
      
      
      var $5614 = HEAP[$S + 32] + HEAP[$t0];
      
      HEAP[$S + 32] = $5614;
      
      
      var $5618 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S] = $5618;
      
      var $5621 = HEAP[$S + 56];
      
      var $5623 = HEAP[$S + 32];
      var $5624 = unSign($5623, 64, 1) / Math.pow(2, 14);
      var $5625 = $5623 * Math.pow(2, 50);
      var $5626 = Runtime.or64($5624, $5625);
      
      var $5628 = HEAP[$S + 32];
      var $5629 = unSign($5628, 64, 1) / Math.pow(2, 18);
      var $5630 = $5628 * Math.pow(2, 46);
      var $5631 = Runtime.or64($5629, $5630);
      var $5632 = Runtime.xor64($5626, $5631);
      
      var $5634 = HEAP[$S + 32];
      var $5635 = unSign($5634, 64, 1) / Math.pow(2, 41);
      var $5636 = $5634 * Math.pow(2, 23);
      var $5637 = Runtime.or64($5635, $5636);
      var $5638 = Runtime.xor64($5632, $5637);
      var $5639 = $5621 + $5638;
      
      var $5641 = HEAP[$S + 48];
      
      var $5643 = HEAP[$S + 32];
      
      var $5645 = HEAP[$S + 40];
      
      var $5647 = HEAP[$S + 48];
      var $5648 = Runtime.xor64($5645, $5647);
      var $5649 = Runtime.and64($5643, $5648);
      var $5650 = Runtime.xor64($5641, $5649);
      
      
      
      
      var $5655 = $5639 + $5650 + HEAP[$W + 576] + 0x28db77f523047e00;
      HEAP[$t0] = $5655;
      
      var $5657 = HEAP[$S];
      var $5658 = unSign($5657, 64, 1) / Math.pow(2, 28);
      var $5659 = $5657 * Math.pow(2, 36);
      var $5660 = Runtime.or64($5658, $5659);
      
      var $5662 = HEAP[$S];
      var $5663 = unSign($5662, 64, 1) / Math.pow(2, 34);
      var $5664 = $5662 * Math.pow(2, 30);
      var $5665 = Runtime.or64($5663, $5664);
      var $5666 = Runtime.xor64($5660, $5665);
      
      var $5668 = HEAP[$S];
      var $5669 = unSign($5668, 64, 1) / Math.pow(2, 39);
      var $5670 = $5668 * Math.pow(2, 25);
      var $5671 = Runtime.or64($5669, $5670);
      var $5672 = Runtime.xor64($5666, $5671);
      
      var $5674 = HEAP[$S];
      
      var $5676 = HEAP[$S + 8];
      var $5677 = Runtime.or64($5674, $5676);
      
      var $5679 = HEAP[$S + 16];
      var $5680 = Runtime.and64($5677, $5679);
      
      var $5682 = HEAP[$S];
      
      var $5684 = HEAP[$S + 8];
      var $5685 = Runtime.and64($5682, $5684);
      var $5686 = Runtime.or64($5680, $5685);
      var $5687 = $5672 + $5686;
      HEAP[$t1] = $5687;
      
      
      
      var $5691 = HEAP[$S + 24] + HEAP[$t0];
      
      HEAP[$S + 24] = $5691;
      
      
      var $5695 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 56] = $5695;
      
      var $5698 = HEAP[$S + 48];
      
      var $5700 = HEAP[$S + 24];
      var $5701 = unSign($5700, 64, 1) / Math.pow(2, 14);
      var $5702 = $5700 * Math.pow(2, 50);
      var $5703 = Runtime.or64($5701, $5702);
      
      var $5705 = HEAP[$S + 24];
      var $5706 = unSign($5705, 64, 1) / Math.pow(2, 18);
      var $5707 = $5705 * Math.pow(2, 46);
      var $5708 = Runtime.or64($5706, $5707);
      var $5709 = Runtime.xor64($5703, $5708);
      
      var $5711 = HEAP[$S + 24];
      var $5712 = unSign($5711, 64, 1) / Math.pow(2, 41);
      var $5713 = $5711 * Math.pow(2, 23);
      var $5714 = Runtime.or64($5712, $5713);
      var $5715 = Runtime.xor64($5709, $5714);
      var $5716 = $5698 + $5715;
      
      var $5718 = HEAP[$S + 40];
      
      var $5720 = HEAP[$S + 24];
      
      var $5722 = HEAP[$S + 32];
      
      var $5724 = HEAP[$S + 40];
      var $5725 = Runtime.xor64($5722, $5724);
      var $5726 = Runtime.and64($5720, $5725);
      var $5727 = Runtime.xor64($5718, $5726);
      
      
      
      
      var $5732 = $5716 + $5727 + HEAP[$W + 584] + 0x32caab7b40c72400;
      HEAP[$t0] = $5732;
      
      var $5734 = HEAP[$S + 56];
      var $5735 = unSign($5734, 64, 1) / Math.pow(2, 28);
      var $5736 = $5734 * Math.pow(2, 36);
      var $5737 = Runtime.or64($5735, $5736);
      
      var $5739 = HEAP[$S + 56];
      var $5740 = unSign($5739, 64, 1) / Math.pow(2, 34);
      var $5741 = $5739 * Math.pow(2, 30);
      var $5742 = Runtime.or64($5740, $5741);
      var $5743 = Runtime.xor64($5737, $5742);
      
      var $5745 = HEAP[$S + 56];
      var $5746 = unSign($5745, 64, 1) / Math.pow(2, 39);
      var $5747 = $5745 * Math.pow(2, 25);
      var $5748 = Runtime.or64($5746, $5747);
      var $5749 = Runtime.xor64($5743, $5748);
      
      var $5751 = HEAP[$S + 56];
      
      var $5753 = HEAP[$S];
      var $5754 = Runtime.or64($5751, $5753);
      
      var $5756 = HEAP[$S + 8];
      var $5757 = Runtime.and64($5754, $5756);
      
      var $5759 = HEAP[$S + 56];
      
      var $5761 = HEAP[$S];
      var $5762 = Runtime.and64($5759, $5761);
      var $5763 = Runtime.or64($5757, $5762);
      var $5764 = $5749 + $5763;
      HEAP[$t1] = $5764;
      
      
      
      var $5768 = HEAP[$S + 16] + HEAP[$t0];
      
      HEAP[$S + 16] = $5768;
      
      
      var $5772 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 48] = $5772;
      
      var $5775 = HEAP[$S + 40];
      
      var $5777 = HEAP[$S + 16];
      var $5778 = unSign($5777, 64, 1) / Math.pow(2, 14);
      var $5779 = $5777 * Math.pow(2, 50);
      var $5780 = Runtime.or64($5778, $5779);
      
      var $5782 = HEAP[$S + 16];
      var $5783 = unSign($5782, 64, 1) / Math.pow(2, 18);
      var $5784 = $5782 * Math.pow(2, 46);
      var $5785 = Runtime.or64($5783, $5784);
      var $5786 = Runtime.xor64($5780, $5785);
      
      var $5788 = HEAP[$S + 16];
      var $5789 = unSign($5788, 64, 1) / Math.pow(2, 41);
      var $5790 = $5788 * Math.pow(2, 23);
      var $5791 = Runtime.or64($5789, $5790);
      var $5792 = Runtime.xor64($5786, $5791);
      var $5793 = $5775 + $5792;
      
      var $5795 = HEAP[$S + 32];
      
      var $5797 = HEAP[$S + 16];
      
      var $5799 = HEAP[$S + 24];
      
      var $5801 = HEAP[$S + 32];
      var $5802 = Runtime.xor64($5799, $5801);
      var $5803 = Runtime.and64($5797, $5802);
      var $5804 = Runtime.xor64($5795, $5803);
      
      
      
      
      var $5809 = $5793 + $5804 + HEAP[$W + 592] + 0x3c9ebe0a15c9be00;
      HEAP[$t0] = $5809;
      
      var $5811 = HEAP[$S + 48];
      var $5812 = unSign($5811, 64, 1) / Math.pow(2, 28);
      var $5813 = $5811 * Math.pow(2, 36);
      var $5814 = Runtime.or64($5812, $5813);
      
      var $5816 = HEAP[$S + 48];
      var $5817 = unSign($5816, 64, 1) / Math.pow(2, 34);
      var $5818 = $5816 * Math.pow(2, 30);
      var $5819 = Runtime.or64($5817, $5818);
      var $5820 = Runtime.xor64($5814, $5819);
      
      var $5822 = HEAP[$S + 48];
      var $5823 = unSign($5822, 64, 1) / Math.pow(2, 39);
      var $5824 = $5822 * Math.pow(2, 25);
      var $5825 = Runtime.or64($5823, $5824);
      var $5826 = Runtime.xor64($5820, $5825);
      
      var $5828 = HEAP[$S + 48];
      
      var $5830 = HEAP[$S + 56];
      var $5831 = Runtime.or64($5828, $5830);
      
      var $5833 = HEAP[$S];
      var $5834 = Runtime.and64($5831, $5833);
      
      var $5836 = HEAP[$S + 48];
      
      var $5838 = HEAP[$S + 56];
      var $5839 = Runtime.and64($5836, $5838);
      var $5840 = Runtime.or64($5834, $5839);
      var $5841 = $5826 + $5840;
      HEAP[$t1] = $5841;
      
      
      
      var $5845 = HEAP[$S + 8] + HEAP[$t0];
      
      HEAP[$S + 8] = $5845;
      
      
      var $5849 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 40] = $5849;
      
      var $5852 = HEAP[$S + 32];
      
      var $5854 = HEAP[$S + 8];
      var $5855 = unSign($5854, 64, 1) / Math.pow(2, 14);
      var $5856 = $5854 * Math.pow(2, 50);
      var $5857 = Runtime.or64($5855, $5856);
      
      var $5859 = HEAP[$S + 8];
      var $5860 = unSign($5859, 64, 1) / Math.pow(2, 18);
      var $5861 = $5859 * Math.pow(2, 46);
      var $5862 = Runtime.or64($5860, $5861);
      var $5863 = Runtime.xor64($5857, $5862);
      
      var $5865 = HEAP[$S + 8];
      var $5866 = unSign($5865, 64, 1) / Math.pow(2, 41);
      var $5867 = $5865 * Math.pow(2, 23);
      var $5868 = Runtime.or64($5866, $5867);
      var $5869 = Runtime.xor64($5863, $5868);
      var $5870 = $5852 + $5869;
      
      var $5872 = HEAP[$S + 24];
      
      var $5874 = HEAP[$S + 8];
      
      var $5876 = HEAP[$S + 16];
      
      var $5878 = HEAP[$S + 24];
      var $5879 = Runtime.xor64($5876, $5878);
      var $5880 = Runtime.and64($5874, $5879);
      var $5881 = Runtime.xor64($5872, $5880);
      
      
      
      
      var $5886 = $5870 + $5881 + HEAP[$W + 600] + 0x431d67c49c100c00;
      HEAP[$t0] = $5886;
      
      var $5888 = HEAP[$S + 40];
      var $5889 = unSign($5888, 64, 1) / Math.pow(2, 28);
      var $5890 = $5888 * Math.pow(2, 36);
      var $5891 = Runtime.or64($5889, $5890);
      
      var $5893 = HEAP[$S + 40];
      var $5894 = unSign($5893, 64, 1) / Math.pow(2, 34);
      var $5895 = $5893 * Math.pow(2, 30);
      var $5896 = Runtime.or64($5894, $5895);
      var $5897 = Runtime.xor64($5891, $5896);
      
      var $5899 = HEAP[$S + 40];
      var $5900 = unSign($5899, 64, 1) / Math.pow(2, 39);
      var $5901 = $5899 * Math.pow(2, 25);
      var $5902 = Runtime.or64($5900, $5901);
      var $5903 = Runtime.xor64($5897, $5902);
      
      var $5905 = HEAP[$S + 40];
      
      var $5907 = HEAP[$S + 48];
      var $5908 = Runtime.or64($5905, $5907);
      
      var $5910 = HEAP[$S + 56];
      var $5911 = Runtime.and64($5908, $5910);
      
      var $5913 = HEAP[$S + 40];
      
      var $5915 = HEAP[$S + 48];
      var $5916 = Runtime.and64($5913, $5915);
      var $5917 = Runtime.or64($5911, $5916);
      var $5918 = $5903 + $5917;
      HEAP[$t1] = $5918;
      
      
      
      var $5922 = HEAP[$S] + HEAP[$t0];
      
      HEAP[$S] = $5922;
      
      
      var $5926 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 32] = $5926;
      
      var $5929 = HEAP[$S + 24];
      
      var $5931 = HEAP[$S];
      var $5932 = unSign($5931, 64, 1) / Math.pow(2, 14);
      var $5933 = $5931 * Math.pow(2, 50);
      var $5934 = Runtime.or64($5932, $5933);
      
      var $5936 = HEAP[$S];
      var $5937 = unSign($5936, 64, 1) / Math.pow(2, 18);
      var $5938 = $5936 * Math.pow(2, 46);
      var $5939 = Runtime.or64($5937, $5938);
      var $5940 = Runtime.xor64($5934, $5939);
      
      var $5942 = HEAP[$S];
      var $5943 = unSign($5942, 64, 1) / Math.pow(2, 41);
      var $5944 = $5942 * Math.pow(2, 23);
      var $5945 = Runtime.or64($5943, $5944);
      var $5946 = Runtime.xor64($5940, $5945);
      var $5947 = $5929 + $5946;
      
      var $5949 = HEAP[$S + 16];
      
      var $5951 = HEAP[$S];
      
      var $5953 = HEAP[$S + 8];
      
      var $5955 = HEAP[$S + 16];
      var $5956 = Runtime.xor64($5953, $5955);
      var $5957 = Runtime.and64($5951, $5956);
      var $5958 = Runtime.xor64($5949, $5957);
      
      
      
      
      var $5963 = $5947 + $5958 + HEAP[$W + 608] + 0x4cc5d4becb3e4400;
      HEAP[$t0] = $5963;
      
      var $5965 = HEAP[$S + 32];
      var $5966 = unSign($5965, 64, 1) / Math.pow(2, 28);
      var $5967 = $5965 * Math.pow(2, 36);
      var $5968 = Runtime.or64($5966, $5967);
      
      var $5970 = HEAP[$S + 32];
      var $5971 = unSign($5970, 64, 1) / Math.pow(2, 34);
      var $5972 = $5970 * Math.pow(2, 30);
      var $5973 = Runtime.or64($5971, $5972);
      var $5974 = Runtime.xor64($5968, $5973);
      
      var $5976 = HEAP[$S + 32];
      var $5977 = unSign($5976, 64, 1) / Math.pow(2, 39);
      var $5978 = $5976 * Math.pow(2, 25);
      var $5979 = Runtime.or64($5977, $5978);
      var $5980 = Runtime.xor64($5974, $5979);
      
      var $5982 = HEAP[$S + 32];
      
      var $5984 = HEAP[$S + 40];
      var $5985 = Runtime.or64($5982, $5984);
      
      var $5987 = HEAP[$S + 48];
      var $5988 = Runtime.and64($5985, $5987);
      
      var $5990 = HEAP[$S + 32];
      
      var $5992 = HEAP[$S + 40];
      var $5993 = Runtime.and64($5990, $5992);
      var $5994 = Runtime.or64($5988, $5993);
      var $5995 = $5980 + $5994;
      HEAP[$t1] = $5995;
      
      
      
      var $5999 = HEAP[$S + 56] + HEAP[$t0];
      
      HEAP[$S + 56] = $5999;
      
      
      var $6003 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 24] = $6003;
      
      var $6006 = HEAP[$S + 16];
      
      var $6008 = HEAP[$S + 56];
      var $6009 = unSign($6008, 64, 1) / Math.pow(2, 14);
      var $6010 = $6008 * Math.pow(2, 50);
      var $6011 = Runtime.or64($6009, $6010);
      
      var $6013 = HEAP[$S + 56];
      var $6014 = unSign($6013, 64, 1) / Math.pow(2, 18);
      var $6015 = $6013 * Math.pow(2, 46);
      var $6016 = Runtime.or64($6014, $6015);
      var $6017 = Runtime.xor64($6011, $6016);
      
      var $6019 = HEAP[$S + 56];
      var $6020 = unSign($6019, 64, 1) / Math.pow(2, 41);
      var $6021 = $6019 * Math.pow(2, 23);
      var $6022 = Runtime.or64($6020, $6021);
      var $6023 = Runtime.xor64($6017, $6022);
      var $6024 = $6006 + $6023;
      
      var $6026 = HEAP[$S + 8];
      
      var $6028 = HEAP[$S + 56];
      
      var $6030 = HEAP[$S];
      
      var $6032 = HEAP[$S + 8];
      var $6033 = Runtime.xor64($6030, $6032);
      var $6034 = Runtime.and64($6028, $6033);
      var $6035 = Runtime.xor64($6026, $6034);
      
      
      
      
      var $6040 = $6024 + $6035 + HEAP[$W + 616] + 0x597f299cfc658000;
      HEAP[$t0] = $6040;
      
      var $6042 = HEAP[$S + 24];
      var $6043 = unSign($6042, 64, 1) / Math.pow(2, 28);
      var $6044 = $6042 * Math.pow(2, 36);
      var $6045 = Runtime.or64($6043, $6044);
      
      var $6047 = HEAP[$S + 24];
      var $6048 = unSign($6047, 64, 1) / Math.pow(2, 34);
      var $6049 = $6047 * Math.pow(2, 30);
      var $6050 = Runtime.or64($6048, $6049);
      var $6051 = Runtime.xor64($6045, $6050);
      
      var $6053 = HEAP[$S + 24];
      var $6054 = unSign($6053, 64, 1) / Math.pow(2, 39);
      var $6055 = $6053 * Math.pow(2, 25);
      var $6056 = Runtime.or64($6054, $6055);
      var $6057 = Runtime.xor64($6051, $6056);
      
      var $6059 = HEAP[$S + 24];
      
      var $6061 = HEAP[$S + 32];
      var $6062 = Runtime.or64($6059, $6061);
      
      var $6064 = HEAP[$S + 40];
      var $6065 = Runtime.and64($6062, $6064);
      
      var $6067 = HEAP[$S + 24];
      
      var $6069 = HEAP[$S + 32];
      var $6070 = Runtime.and64($6067, $6069);
      var $6071 = Runtime.or64($6065, $6070);
      var $6072 = $6057 + $6071;
      HEAP[$t1] = $6072;
      
      
      
      var $6076 = HEAP[$S + 48] + HEAP[$t0];
      
      HEAP[$S + 48] = $6076;
      
      
      var $6080 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 16] = $6080;
      
      var $6083 = HEAP[$S + 8];
      
      var $6085 = HEAP[$S + 48];
      var $6086 = unSign($6085, 64, 1) / Math.pow(2, 14);
      var $6087 = $6085 * Math.pow(2, 50);
      var $6088 = Runtime.or64($6086, $6087);
      
      var $6090 = HEAP[$S + 48];
      var $6091 = unSign($6090, 64, 1) / Math.pow(2, 18);
      var $6092 = $6090 * Math.pow(2, 46);
      var $6093 = Runtime.or64($6091, $6092);
      var $6094 = Runtime.xor64($6088, $6093);
      
      var $6096 = HEAP[$S + 48];
      var $6097 = unSign($6096, 64, 1) / Math.pow(2, 41);
      var $6098 = $6096 * Math.pow(2, 23);
      var $6099 = Runtime.or64($6097, $6098);
      var $6100 = Runtime.xor64($6094, $6099);
      var $6101 = $6083 + $6100;
      
      var $6103 = HEAP[$S];
      
      var $6105 = HEAP[$S + 48];
      
      var $6107 = HEAP[$S + 56];
      
      var $6109 = HEAP[$S];
      var $6110 = Runtime.xor64($6107, $6109);
      var $6111 = Runtime.and64($6105, $6110);
      var $6112 = Runtime.xor64($6103, $6111);
      
      
      
      
      var $6117 = $6101 + $6112 + HEAP[$W + 624] + 0x5fcb6fab3ad6fc00;
      HEAP[$t0] = $6117;
      
      var $6119 = HEAP[$S + 16];
      var $6120 = unSign($6119, 64, 1) / Math.pow(2, 28);
      var $6121 = $6119 * Math.pow(2, 36);
      var $6122 = Runtime.or64($6120, $6121);
      
      var $6124 = HEAP[$S + 16];
      var $6125 = unSign($6124, 64, 1) / Math.pow(2, 34);
      var $6126 = $6124 * Math.pow(2, 30);
      var $6127 = Runtime.or64($6125, $6126);
      var $6128 = Runtime.xor64($6122, $6127);
      
      var $6130 = HEAP[$S + 16];
      var $6131 = unSign($6130, 64, 1) / Math.pow(2, 39);
      var $6132 = $6130 * Math.pow(2, 25);
      var $6133 = Runtime.or64($6131, $6132);
      var $6134 = Runtime.xor64($6128, $6133);
      
      var $6136 = HEAP[$S + 16];
      
      var $6138 = HEAP[$S + 24];
      var $6139 = Runtime.or64($6136, $6138);
      
      var $6141 = HEAP[$S + 32];
      var $6142 = Runtime.and64($6139, $6141);
      
      var $6144 = HEAP[$S + 16];
      
      var $6146 = HEAP[$S + 24];
      var $6147 = Runtime.and64($6144, $6146);
      var $6148 = Runtime.or64($6142, $6147);
      var $6149 = $6134 + $6148;
      HEAP[$t1] = $6149;
      
      
      
      var $6153 = HEAP[$S + 40] + HEAP[$t0];
      
      HEAP[$S + 40] = $6153;
      
      
      var $6157 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S + 8] = $6157;
      
      var $6160 = HEAP[$S];
      
      var $6162 = HEAP[$S + 40];
      var $6163 = unSign($6162, 64, 1) / Math.pow(2, 14);
      var $6164 = $6162 * Math.pow(2, 50);
      var $6165 = Runtime.or64($6163, $6164);
      
      var $6167 = HEAP[$S + 40];
      var $6168 = unSign($6167, 64, 1) / Math.pow(2, 18);
      var $6169 = $6167 * Math.pow(2, 46);
      var $6170 = Runtime.or64($6168, $6169);
      var $6171 = Runtime.xor64($6165, $6170);
      
      var $6173 = HEAP[$S + 40];
      var $6174 = unSign($6173, 64, 1) / Math.pow(2, 41);
      var $6175 = $6173 * Math.pow(2, 23);
      var $6176 = Runtime.or64($6174, $6175);
      var $6177 = Runtime.xor64($6171, $6176);
      var $6178 = $6160 + $6177;
      
      var $6180 = HEAP[$S + 56];
      
      var $6182 = HEAP[$S + 40];
      
      var $6184 = HEAP[$S + 48];
      
      var $6186 = HEAP[$S + 56];
      var $6187 = Runtime.xor64($6184, $6186);
      var $6188 = Runtime.and64($6182, $6187);
      var $6189 = Runtime.xor64($6180, $6188);
      
      
      
      
      var $6194 = $6178 + $6189 + HEAP[$W + 632] + 0x6c44198c4a475800;
      HEAP[$t0] = $6194;
      
      var $6196 = HEAP[$S + 8];
      var $6197 = unSign($6196, 64, 1) / Math.pow(2, 28);
      var $6198 = $6196 * Math.pow(2, 36);
      var $6199 = Runtime.or64($6197, $6198);
      
      var $6201 = HEAP[$S + 8];
      var $6202 = unSign($6201, 64, 1) / Math.pow(2, 34);
      var $6203 = $6201 * Math.pow(2, 30);
      var $6204 = Runtime.or64($6202, $6203);
      var $6205 = Runtime.xor64($6199, $6204);
      
      var $6207 = HEAP[$S + 8];
      var $6208 = unSign($6207, 64, 1) / Math.pow(2, 39);
      var $6209 = $6207 * Math.pow(2, 25);
      var $6210 = Runtime.or64($6208, $6209);
      var $6211 = Runtime.xor64($6205, $6210);
      
      var $6213 = HEAP[$S + 8];
      
      var $6215 = HEAP[$S + 16];
      var $6216 = Runtime.or64($6213, $6215);
      
      var $6218 = HEAP[$S + 24];
      var $6219 = Runtime.and64($6216, $6218);
      
      var $6221 = HEAP[$S + 8];
      
      var $6223 = HEAP[$S + 16];
      var $6224 = Runtime.and64($6221, $6223);
      var $6225 = Runtime.or64($6219, $6224);
      var $6226 = $6211 + $6225;
      HEAP[$t1] = $6226;
      
      
      
      var $6230 = HEAP[$S + 32] + HEAP[$t0];
      
      HEAP[$S + 32] = $6230;
      
      
      var $6234 = HEAP[$t0] + HEAP[$t1];
      
      HEAP[$S] = $6234;
      HEAP[$i] = 0;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      
      
      
      
      
      var $6245 = HEAP[HEAP[$sha_info_addr] + 8 + HEAP[$i] * 8] + HEAP[$S + HEAP[$i] * 8];
      
      
      var $6248 = HEAP[$sha_info_addr] + 8 + HEAP[$i] * 8;
      HEAP[$6248] = $6245;
      
      var $6250 = HEAP[$i] + 1;
      HEAP[$i] = $6250;
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
  function _sha512_init($sha_info) {
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
      
      var $1 = HEAP[$sha_info_addr] + 208;
      HEAP[$1] = 0;
      
      
      
      if (HEAP[$i] == 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $5 = HEAP[$sha_info_addr] + 208;
      HEAP[$5] = 1;
      __label__ = 2;
      break;
     case 2:
      
      
      var $8 = HEAP[$sha_info_addr] + 8;
      HEAP[$8] = 0x6a09e667f3bcc800;
      
      
      var $11 = HEAP[$sha_info_addr] + 8 + 8;
      HEAP[$11] = -0x4498517a7b355800;
      
      
      var $14 = HEAP[$sha_info_addr] + 8 + 16;
      HEAP[$14] = 0x3c6ef372fe94f800;
      
      
      var $17 = HEAP[$sha_info_addr] + 8 + 24;
      HEAP[$17] = -0x5ab00ac5a0e2c800;
      
      
      var $20 = HEAP[$sha_info_addr] + 8 + 32;
      HEAP[$20] = 0x510e527fade68400;
      
      
      var $23 = HEAP[$sha_info_addr] + 8 + 40;
      HEAP[$23] = -0x64fa9773d4c19400;
      
      
      var $26 = HEAP[$sha_info_addr] + 8 + 48;
      HEAP[$26] = 0x1f83d9abfb41bd00;
      
      
      var $29 = HEAP[$sha_info_addr] + 8 + 56;
      HEAP[$29] = 0x5be0cd19137e2000;
      
      var $31 = HEAP[$sha_info_addr] + 72;
      HEAP[$31] = 0;
      
      var $33 = HEAP[$sha_info_addr] + 76;
      HEAP[$33] = 0;
      
      var $35 = HEAP[$sha_info_addr] + 212;
      HEAP[$35] = 0;
      
      var $37 = HEAP[$sha_info_addr] + 216;
      HEAP[$37] = 64;
      __label__ = 3;
      break;
     case 3:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sha384_init($sha_info) {
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
      
      var $1 = HEAP[$sha_info_addr] + 208;
      HEAP[$1] = 0;
      
      
      
      if (HEAP[$i] == 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $5 = HEAP[$sha_info_addr] + 208;
      HEAP[$5] = 1;
      __label__ = 2;
      break;
     case 2:
      
      
      var $8 = HEAP[$sha_info_addr] + 8;
      HEAP[$8] = -0x344462a23efa6200;
      
      
      var $11 = HEAP[$sha_info_addr] + 8 + 8;
      HEAP[$11] = 0x629a292a367cd400;
      
      
      var $14 = HEAP[$sha_info_addr] + 8 + 16;
      HEAP[$14] = -0x6ea6fea5cf8f2400;
      
      
      var $17 = HEAP[$sha_info_addr] + 8 + 24;
      HEAP[$17] = 0x152fecd8f70e5900;
      
      
      var $20 = HEAP[$sha_info_addr] + 8 + 32;
      HEAP[$20] = 0x67332667ffc00c00;
      
      
      var $23 = HEAP[$sha_info_addr] + 8 + 40;
      HEAP[$23] = -0x714bb57897a7ec00;
      
      
      var $26 = HEAP[$sha_info_addr] + 8 + 48;
      HEAP[$26] = -0x24f3d1f29b067000;
      
      
      var $29 = HEAP[$sha_info_addr] + 8 + 56;
      HEAP[$29] = 0x47b5481dbefa5000;
      
      var $31 = HEAP[$sha_info_addr] + 72;
      HEAP[$31] = 0;
      
      var $33 = HEAP[$sha_info_addr] + 76;
      HEAP[$33] = 0;
      
      var $35 = HEAP[$sha_info_addr] + 212;
      HEAP[$35] = 0;
      
      var $37 = HEAP[$sha_info_addr] + 216;
      HEAP[$37] = 48;
      __label__ = 3;
      break;
     case 3:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sha512_update($sha_info, $buffer, $count) {
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
      
      
      
      
      
      var $5 = HEAP[HEAP[$sha_info_addr] + 72] + (HEAP[$count_addr] << 3);
      HEAP[$clo] = $5;
      
      
      
      
      
      if (HEAP[HEAP[$sha_info_addr] + 72] > HEAP[$clo]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $14 = HEAP[HEAP[$sha_info_addr] + 76] + 1;
      
      var $16 = HEAP[$sha_info_addr] + 76;
      HEAP[$16] = $14;
      __label__ = 2;
      break;
     case 2:
      
      var $18 = HEAP[$sha_info_addr] + 72;
      var $19 = HEAP[$clo];
      HEAP[$18] = $19;
      
      
      
      
      
      var $25 = HEAP[HEAP[$sha_info_addr] + 76] + (HEAP[$count_addr] >>> 29);
      
      var $27 = HEAP[$sha_info_addr] + 76;
      HEAP[$27] = $25;
      
      
      
      
      if (HEAP[HEAP[$sha_info_addr] + 212] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      
      var $35 = 128 - HEAP[HEAP[$sha_info_addr] + 212];
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
      
      
      
      
      
      
      var $47 = HEAP[$sha_info_addr] + 80 + HEAP[HEAP[$sha_info_addr] + 212];
      var $48 = HEAP[$buffer_addr];
      _llvm_memcpy_p0i8_p0i8_i32($47, $48, $40, 1, 0);
      
      
      var $51 = HEAP[$count_addr] - HEAP[$i];
      HEAP[$count_addr] = $51;
      
      
      var $54 = HEAP[$buffer_addr] + HEAP[$i];
      HEAP[$buffer_addr] = $54;
      
      
      
      
      var $59 = HEAP[HEAP[$sha_info_addr] + 212] + HEAP[$i];
      
      var $61 = HEAP[$sha_info_addr] + 212;
      HEAP[$61] = $59;
      
      
      
      
      if (HEAP[HEAP[$sha_info_addr] + 212] == 128) {
        __label__ = 6;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 6:
      var $66 = HEAP[$sha_info_addr];
      _sha512_transform($66);
      __label__ = 7;
      break;
     case 7:
      __label__ = 9;
      break;
     case 8:
      
      
      var $69 = HEAP[$sha_info_addr] + 80;
      var $70 = HEAP[$buffer_addr];
      _llvm_memcpy_p0i8_p0i8_i32($69, $70, 128, 1, 0);
      
      var $72 = HEAP[$buffer_addr] + 128;
      HEAP[$buffer_addr] = $72;
      
      var $74 = HEAP[$count_addr] - 128;
      HEAP[$count_addr] = $74;
      var $75 = HEAP[$sha_info_addr];
      _sha512_transform($75);
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$count_addr] > 127) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      var $78 = HEAP[$count_addr];
      
      
      var $81 = HEAP[$sha_info_addr] + 80;
      var $82 = HEAP[$buffer_addr];
      _llvm_memcpy_p0i8_p0i8_i32($81, $82, $78, 1, 0);
      
      var $84 = HEAP[$sha_info_addr] + 212;
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
  function _sha512_final($digest, $sha_info) {
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
      
      
      var $2 = HEAP[HEAP[$sha_info_addr] + 72];
      HEAP[$lo_bit_count] = $2;
      
      
      var $5 = HEAP[HEAP[$sha_info_addr] + 76];
      HEAP[$hi_bit_count] = $5;
      
      
      var $8 = HEAP[$lo_bit_count] >>> 3 & 127;
      HEAP[$count] = $8;
      
      
      
      
      var $13 = HEAP[$sha_info_addr] + 80 + HEAP[$count];
      HEAP[$13] = -128;
      
      var $15 = HEAP[$count] + 1;
      HEAP[$count] = $15;
      
      
      if (HEAP[$count] > 112) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $19 = 128 - HEAP[$count];
      
      
      
      
      var $24 = HEAP[$sha_info_addr] + 80 + HEAP[$count];
      _llvm_memset_p0i8_i32($24, 0, $19, 1, 0);
      var $25 = HEAP[$sha_info_addr];
      _sha512_transform($25);
      
      
      var $28 = HEAP[$sha_info_addr] + 80;
      _llvm_memset_p0i8_i32($28, 0, 112, 1, 0);
      __label__ = 3;
      break;
     case 2:
      
      var $30 = 112 - HEAP[$count];
      
      
      
      
      var $35 = HEAP[$sha_info_addr] + 80 + HEAP[$count];
      _llvm_memset_p0i8_i32($35, 0, $30, 1, 0);
      __label__ = 3;
      break;
     case 3:
      
      
      var $38 = HEAP[$sha_info_addr] + 80 + 112;
      HEAP[$38] = 0;
      
      
      var $41 = HEAP[$sha_info_addr] + 80 + 113;
      HEAP[$41] = 0;
      
      
      var $44 = HEAP[$sha_info_addr] + 80 + 114;
      HEAP[$44] = 0;
      
      
      var $47 = HEAP[$sha_info_addr] + 80 + 115;
      HEAP[$47] = 0;
      
      
      var $50 = HEAP[$sha_info_addr] + 80 + 116;
      HEAP[$50] = 0;
      
      
      var $53 = HEAP[$sha_info_addr] + 80 + 117;
      HEAP[$53] = 0;
      
      
      var $56 = HEAP[$sha_info_addr] + 80 + 118;
      HEAP[$56] = 0;
      
      
      var $59 = HEAP[$sha_info_addr] + 80 + 119;
      HEAP[$59] = 0;
      
      
      var $62 = HEAP[$hi_bit_count] >>> 24 & 255;
      
      
      var $65 = HEAP[$sha_info_addr] + 80 + 120;
      HEAP[$65] = $62;
      
      
      var $68 = HEAP[$hi_bit_count] >>> 16 & 255;
      
      
      var $71 = HEAP[$sha_info_addr] + 80 + 121;
      HEAP[$71] = $68;
      
      
      var $74 = HEAP[$hi_bit_count] >>> 8 & 255;
      
      
      var $77 = HEAP[$sha_info_addr] + 80 + 122;
      HEAP[$77] = $74;
      
      var $79 = HEAP[$hi_bit_count] & 255;
      
      
      var $82 = HEAP[$sha_info_addr] + 80 + 123;
      HEAP[$82] = $79;
      
      
      var $85 = HEAP[$lo_bit_count] >>> 24 & 255;
      
      
      var $88 = HEAP[$sha_info_addr] + 80 + 124;
      HEAP[$88] = $85;
      
      
      var $91 = HEAP[$lo_bit_count] >>> 16 & 255;
      
      
      var $94 = HEAP[$sha_info_addr] + 80 + 125;
      HEAP[$94] = $91;
      
      
      var $97 = HEAP[$lo_bit_count] >>> 8 & 255;
      
      
      var $100 = HEAP[$sha_info_addr] + 80 + 126;
      HEAP[$100] = $97;
      
      var $102 = HEAP[$lo_bit_count] & 255;
      
      
      var $105 = HEAP[$sha_info_addr] + 80 + 127;
      HEAP[$105] = $102;
      var $106 = HEAP[$sha_info_addr];
      _sha512_transform($106);
      
      
      
      
      var $111 = HEAP[HEAP[$sha_info_addr] + 8] / Math.pow(2, 56);
      var $112 = $111 & 255;
      
      var $114 = HEAP[$digest_addr];
      HEAP[$114] = $112;
      
      
      
      
      var $119 = HEAP[HEAP[$sha_info_addr] + 8] / Math.pow(2, 48);
      var $120 = $119 & 255;
      
      var $122 = HEAP[$digest_addr] + 1;
      HEAP[$122] = $120;
      
      
      
      
      var $127 = HEAP[HEAP[$sha_info_addr] + 8] / Math.pow(2, 40);
      var $128 = $127 & 255;
      
      var $130 = HEAP[$digest_addr] + 2;
      HEAP[$130] = $128;
      
      
      
      
      var $135 = HEAP[HEAP[$sha_info_addr] + 8] / Math.pow(2, 32);
      var $136 = $135 & 255;
      
      var $138 = HEAP[$digest_addr] + 3;
      HEAP[$138] = $136;
      
      
      
      
      var $143 = HEAP[HEAP[$sha_info_addr] + 8] / Math.pow(2, 24);
      var $144 = $143 & 255;
      
      var $146 = HEAP[$digest_addr] + 4;
      HEAP[$146] = $144;
      
      
      
      
      var $151 = HEAP[HEAP[$sha_info_addr] + 8] / Math.pow(2, 16);
      var $152 = $151 & 255;
      
      var $154 = HEAP[$digest_addr] + 5;
      HEAP[$154] = $152;
      
      
      
      
      var $159 = HEAP[HEAP[$sha_info_addr] + 8] / Math.pow(2, 8);
      var $160 = $159 & 255;
      
      var $162 = HEAP[$digest_addr] + 6;
      HEAP[$162] = $160;
      
      
      
      
      var $167 = HEAP[HEAP[$sha_info_addr] + 8] & 255;
      
      var $169 = HEAP[$digest_addr] + 7;
      HEAP[$169] = $167;
      
      
      
      var $173 = HEAP[HEAP[$sha_info_addr] + 8 + 8];
      var $174 = unSign($173, 64, 1) / Math.pow(2, 56);
      var $175 = $174 & 255;
      
      var $177 = HEAP[$digest_addr] + 8;
      HEAP[$177] = $175;
      
      
      
      var $181 = HEAP[HEAP[$sha_info_addr] + 8 + 8];
      var $182 = unSign($181, 64, 1) / Math.pow(2, 48);
      var $183 = $182 & 255;
      
      var $185 = HEAP[$digest_addr] + 9;
      HEAP[$185] = $183;
      
      
      
      var $189 = HEAP[HEAP[$sha_info_addr] + 8 + 8];
      var $190 = unSign($189, 64, 1) / Math.pow(2, 40);
      var $191 = $190 & 255;
      
      var $193 = HEAP[$digest_addr] + 10;
      HEAP[$193] = $191;
      
      
      
      var $197 = HEAP[HEAP[$sha_info_addr] + 8 + 8];
      var $198 = unSign($197, 64, 1) / Math.pow(2, 32);
      var $199 = $198 & 255;
      
      var $201 = HEAP[$digest_addr] + 11;
      HEAP[$201] = $199;
      
      
      
      var $205 = HEAP[HEAP[$sha_info_addr] + 8 + 8];
      var $206 = unSign($205, 64, 1) / Math.pow(2, 24);
      var $207 = $206 & 255;
      
      var $209 = HEAP[$digest_addr] + 12;
      HEAP[$209] = $207;
      
      
      
      var $213 = HEAP[HEAP[$sha_info_addr] + 8 + 8];
      var $214 = unSign($213, 64, 1) / Math.pow(2, 16);
      var $215 = $214 & 255;
      
      var $217 = HEAP[$digest_addr] + 13;
      HEAP[$217] = $215;
      
      
      
      var $221 = HEAP[HEAP[$sha_info_addr] + 8 + 8];
      var $222 = unSign($221, 64, 1) / Math.pow(2, 8);
      var $223 = $222 & 255;
      
      var $225 = HEAP[$digest_addr] + 14;
      HEAP[$225] = $223;
      
      
      
      
      var $230 = HEAP[HEAP[$sha_info_addr] + 8 + 8] & 255;
      
      var $232 = HEAP[$digest_addr] + 15;
      HEAP[$232] = $230;
      
      
      
      var $236 = HEAP[HEAP[$sha_info_addr] + 8 + 16];
      var $237 = unSign($236, 64, 1) / Math.pow(2, 56);
      var $238 = $237 & 255;
      
      var $240 = HEAP[$digest_addr] + 16;
      HEAP[$240] = $238;
      
      
      
      var $244 = HEAP[HEAP[$sha_info_addr] + 8 + 16];
      var $245 = unSign($244, 64, 1) / Math.pow(2, 48);
      var $246 = $245 & 255;
      
      var $248 = HEAP[$digest_addr] + 17;
      HEAP[$248] = $246;
      
      
      
      var $252 = HEAP[HEAP[$sha_info_addr] + 8 + 16];
      var $253 = unSign($252, 64, 1) / Math.pow(2, 40);
      var $254 = $253 & 255;
      
      var $256 = HEAP[$digest_addr] + 18;
      HEAP[$256] = $254;
      
      
      
      var $260 = HEAP[HEAP[$sha_info_addr] + 8 + 16];
      var $261 = unSign($260, 64, 1) / Math.pow(2, 32);
      var $262 = $261 & 255;
      
      var $264 = HEAP[$digest_addr] + 19;
      HEAP[$264] = $262;
      
      
      
      var $268 = HEAP[HEAP[$sha_info_addr] + 8 + 16];
      var $269 = unSign($268, 64, 1) / Math.pow(2, 24);
      var $270 = $269 & 255;
      
      var $272 = HEAP[$digest_addr] + 20;
      HEAP[$272] = $270;
      
      
      
      var $276 = HEAP[HEAP[$sha_info_addr] + 8 + 16];
      var $277 = unSign($276, 64, 1) / Math.pow(2, 16);
      var $278 = $277 & 255;
      
      var $280 = HEAP[$digest_addr] + 21;
      HEAP[$280] = $278;
      
      
      
      var $284 = HEAP[HEAP[$sha_info_addr] + 8 + 16];
      var $285 = unSign($284, 64, 1) / Math.pow(2, 8);
      var $286 = $285 & 255;
      
      var $288 = HEAP[$digest_addr] + 22;
      HEAP[$288] = $286;
      
      
      
      
      var $293 = HEAP[HEAP[$sha_info_addr] + 8 + 16] & 255;
      
      var $295 = HEAP[$digest_addr] + 23;
      HEAP[$295] = $293;
      
      
      
      
      var $300 = HEAP[HEAP[$sha_info_addr] + 8 + 24] / Math.pow(2, 56);
      var $301 = $300 & 255;
      
      var $303 = HEAP[$digest_addr] + 24;
      HEAP[$303] = $301;
      
      
      
      
      var $308 = HEAP[HEAP[$sha_info_addr] + 8 + 24] / Math.pow(2, 48);
      var $309 = $308 & 255;
      
      var $311 = HEAP[$digest_addr] + 25;
      HEAP[$311] = $309;
      
      
      
      
      var $316 = HEAP[HEAP[$sha_info_addr] + 8 + 24] / Math.pow(2, 40);
      var $317 = $316 & 255;
      
      var $319 = HEAP[$digest_addr] + 26;
      HEAP[$319] = $317;
      
      
      
      
      var $324 = HEAP[HEAP[$sha_info_addr] + 8 + 24] / Math.pow(2, 32);
      var $325 = $324 & 255;
      
      var $327 = HEAP[$digest_addr] + 27;
      HEAP[$327] = $325;
      
      
      
      
      var $332 = HEAP[HEAP[$sha_info_addr] + 8 + 24] / Math.pow(2, 24);
      var $333 = $332 & 255;
      
      var $335 = HEAP[$digest_addr] + 28;
      HEAP[$335] = $333;
      
      
      
      
      var $340 = HEAP[HEAP[$sha_info_addr] + 8 + 24] / Math.pow(2, 16);
      var $341 = $340 & 255;
      
      var $343 = HEAP[$digest_addr] + 29;
      HEAP[$343] = $341;
      
      
      
      
      var $348 = HEAP[HEAP[$sha_info_addr] + 8 + 24] / Math.pow(2, 8);
      var $349 = $348 & 255;
      
      var $351 = HEAP[$digest_addr] + 30;
      HEAP[$351] = $349;
      
      
      
      
      var $356 = HEAP[HEAP[$sha_info_addr] + 8 + 24] & 255;
      
      var $358 = HEAP[$digest_addr] + 31;
      HEAP[$358] = $356;
      
      
      
      
      var $363 = HEAP[HEAP[$sha_info_addr] + 8 + 32] / Math.pow(2, 56);
      var $364 = $363 & 255;
      
      var $366 = HEAP[$digest_addr] + 32;
      HEAP[$366] = $364;
      
      
      
      
      var $371 = HEAP[HEAP[$sha_info_addr] + 8 + 32] / Math.pow(2, 48);
      var $372 = $371 & 255;
      
      var $374 = HEAP[$digest_addr] + 33;
      HEAP[$374] = $372;
      
      
      
      
      var $379 = HEAP[HEAP[$sha_info_addr] + 8 + 32] / Math.pow(2, 40);
      var $380 = $379 & 255;
      
      var $382 = HEAP[$digest_addr] + 34;
      HEAP[$382] = $380;
      
      
      
      
      var $387 = HEAP[HEAP[$sha_info_addr] + 8 + 32] / Math.pow(2, 32);
      var $388 = $387 & 255;
      
      var $390 = HEAP[$digest_addr] + 35;
      HEAP[$390] = $388;
      
      
      
      
      var $395 = HEAP[HEAP[$sha_info_addr] + 8 + 32] / Math.pow(2, 24);
      var $396 = $395 & 255;
      
      var $398 = HEAP[$digest_addr] + 36;
      HEAP[$398] = $396;
      
      
      
      
      var $403 = HEAP[HEAP[$sha_info_addr] + 8 + 32] / Math.pow(2, 16);
      var $404 = $403 & 255;
      
      var $406 = HEAP[$digest_addr] + 37;
      HEAP[$406] = $404;
      
      
      
      
      var $411 = HEAP[HEAP[$sha_info_addr] + 8 + 32] / Math.pow(2, 8);
      var $412 = $411 & 255;
      
      var $414 = HEAP[$digest_addr] + 38;
      HEAP[$414] = $412;
      
      
      
      
      var $419 = HEAP[HEAP[$sha_info_addr] + 8 + 32] & 255;
      
      var $421 = HEAP[$digest_addr] + 39;
      HEAP[$421] = $419;
      
      
      
      var $425 = HEAP[HEAP[$sha_info_addr] + 8 + 40];
      var $426 = unSign($425, 64, 1) / Math.pow(2, 56);
      var $427 = $426 & 255;
      
      var $429 = HEAP[$digest_addr] + 40;
      HEAP[$429] = $427;
      
      
      
      var $433 = HEAP[HEAP[$sha_info_addr] + 8 + 40];
      var $434 = unSign($433, 64, 1) / Math.pow(2, 48);
      var $435 = $434 & 255;
      
      var $437 = HEAP[$digest_addr] + 41;
      HEAP[$437] = $435;
      
      
      
      var $441 = HEAP[HEAP[$sha_info_addr] + 8 + 40];
      var $442 = unSign($441, 64, 1) / Math.pow(2, 40);
      var $443 = $442 & 255;
      
      var $445 = HEAP[$digest_addr] + 42;
      HEAP[$445] = $443;
      
      
      
      var $449 = HEAP[HEAP[$sha_info_addr] + 8 + 40];
      var $450 = unSign($449, 64, 1) / Math.pow(2, 32);
      var $451 = $450 & 255;
      
      var $453 = HEAP[$digest_addr] + 43;
      HEAP[$453] = $451;
      
      
      
      var $457 = HEAP[HEAP[$sha_info_addr] + 8 + 40];
      var $458 = unSign($457, 64, 1) / Math.pow(2, 24);
      var $459 = $458 & 255;
      
      var $461 = HEAP[$digest_addr] + 44;
      HEAP[$461] = $459;
      
      
      
      var $465 = HEAP[HEAP[$sha_info_addr] + 8 + 40];
      var $466 = unSign($465, 64, 1) / Math.pow(2, 16);
      var $467 = $466 & 255;
      
      var $469 = HEAP[$digest_addr] + 45;
      HEAP[$469] = $467;
      
      
      
      var $473 = HEAP[HEAP[$sha_info_addr] + 8 + 40];
      var $474 = unSign($473, 64, 1) / Math.pow(2, 8);
      var $475 = $474 & 255;
      
      var $477 = HEAP[$digest_addr] + 46;
      HEAP[$477] = $475;
      
      
      
      
      var $482 = HEAP[HEAP[$sha_info_addr] + 8 + 40] & 255;
      
      var $484 = HEAP[$digest_addr] + 47;
      HEAP[$484] = $482;
      
      
      
      var $488 = HEAP[HEAP[$sha_info_addr] + 8 + 48];
      var $489 = unSign($488, 64, 1) / Math.pow(2, 56);
      var $490 = $489 & 255;
      
      var $492 = HEAP[$digest_addr] + 48;
      HEAP[$492] = $490;
      
      
      
      var $496 = HEAP[HEAP[$sha_info_addr] + 8 + 48];
      var $497 = unSign($496, 64, 1) / Math.pow(2, 48);
      var $498 = $497 & 255;
      
      var $500 = HEAP[$digest_addr] + 49;
      HEAP[$500] = $498;
      
      
      
      var $504 = HEAP[HEAP[$sha_info_addr] + 8 + 48];
      var $505 = unSign($504, 64, 1) / Math.pow(2, 40);
      var $506 = $505 & 255;
      
      var $508 = HEAP[$digest_addr] + 50;
      HEAP[$508] = $506;
      
      
      
      var $512 = HEAP[HEAP[$sha_info_addr] + 8 + 48];
      var $513 = unSign($512, 64, 1) / Math.pow(2, 32);
      var $514 = $513 & 255;
      
      var $516 = HEAP[$digest_addr] + 51;
      HEAP[$516] = $514;
      
      
      
      var $520 = HEAP[HEAP[$sha_info_addr] + 8 + 48];
      var $521 = unSign($520, 64, 1) / Math.pow(2, 24);
      var $522 = $521 & 255;
      
      var $524 = HEAP[$digest_addr] + 52;
      HEAP[$524] = $522;
      
      
      
      var $528 = HEAP[HEAP[$sha_info_addr] + 8 + 48];
      var $529 = unSign($528, 64, 1) / Math.pow(2, 16);
      var $530 = $529 & 255;
      
      var $532 = HEAP[$digest_addr] + 53;
      HEAP[$532] = $530;
      
      
      
      var $536 = HEAP[HEAP[$sha_info_addr] + 8 + 48];
      var $537 = unSign($536, 64, 1) / Math.pow(2, 8);
      var $538 = $537 & 255;
      
      var $540 = HEAP[$digest_addr] + 54;
      HEAP[$540] = $538;
      
      
      
      
      var $545 = HEAP[HEAP[$sha_info_addr] + 8 + 48] & 255;
      
      var $547 = HEAP[$digest_addr] + 55;
      HEAP[$547] = $545;
      
      
      
      
      var $552 = HEAP[HEAP[$sha_info_addr] + 8 + 56] / Math.pow(2, 56);
      var $553 = $552 & 255;
      
      var $555 = HEAP[$digest_addr] + 56;
      HEAP[$555] = $553;
      
      
      
      
      var $560 = HEAP[HEAP[$sha_info_addr] + 8 + 56] / Math.pow(2, 48);
      var $561 = $560 & 255;
      
      var $563 = HEAP[$digest_addr] + 57;
      HEAP[$563] = $561;
      
      
      
      
      var $568 = HEAP[HEAP[$sha_info_addr] + 8 + 56] / Math.pow(2, 40);
      var $569 = $568 & 255;
      
      var $571 = HEAP[$digest_addr] + 58;
      HEAP[$571] = $569;
      
      
      
      
      var $576 = HEAP[HEAP[$sha_info_addr] + 8 + 56] / Math.pow(2, 32);
      var $577 = $576 & 255;
      
      var $579 = HEAP[$digest_addr] + 59;
      HEAP[$579] = $577;
      
      
      
      
      var $584 = HEAP[HEAP[$sha_info_addr] + 8 + 56] / Math.pow(2, 24);
      var $585 = $584 & 255;
      
      var $587 = HEAP[$digest_addr] + 60;
      HEAP[$587] = $585;
      
      
      
      
      var $592 = HEAP[HEAP[$sha_info_addr] + 8 + 56] / Math.pow(2, 16);
      var $593 = $592 & 255;
      
      var $595 = HEAP[$digest_addr] + 61;
      HEAP[$595] = $593;
      
      
      
      
      var $600 = HEAP[HEAP[$sha_info_addr] + 8 + 56] / Math.pow(2, 8);
      var $601 = $600 & 255;
      
      var $603 = HEAP[$digest_addr] + 62;
      HEAP[$603] = $601;
      
      
      
      
      var $608 = HEAP[HEAP[$sha_info_addr] + 8 + 56] & 255;
      
      var $610 = HEAP[$digest_addr] + 63;
      HEAP[$610] = $608;
      __label__ = 4;
      break;
     case 4:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _newSHA384object() {
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
      
      var $1 = __PyObject_New(_SHA384type);
      
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
  function _newSHA512object() {
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
      
      var $1 = __PyObject_New(_SHA512type);
      
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
  function _SHA512_dealloc($ptr) {
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
  function _SHA512_copy($self, $unused) {
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
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 4] == _SHA512type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $6 = _newSHA512object();
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
      var $9 = _newSHA384object();
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
  function _SHA512_digest($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 300;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 300);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $digest = __stackBase__ + 16;
      var $temp = __stackBase__ + 80;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      var $1 = HEAP[$self_addr];
      _SHAcopy($1, $temp);
      var $digest1 = $digest;
      _sha512_final($digest1, $temp);
      
      
      var $4 = HEAP[HEAP[$self_addr] + 216];
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
  function _SHA512_hexdigest($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 319;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 319);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_28 = __stackBase__ + 12;
      var $iftmp_24 = __stackBase__ + 13;
      var $0 = __stackBase__ + 14;
      var $digest = __stackBase__ + 18;
      var $temp = __stackBase__ + 82;
      var $retval1 = __stackBase__ + 302;
      var $hex_digest = __stackBase__ + 306;
      var $i = __stackBase__ + 310;
      var $j = __stackBase__ + 314;
      var $c = __stackBase__ + 318;
      
      HEAP[$self_addr] = $self;
      HEAP[$unused_addr] = $unused;
      var $1 = HEAP[$self_addr];
      _SHAcopy($1, $temp);
      var $digest2 = $digest;
      _sha512_final($digest2, $temp);
      
      
      
      var $5 = HEAP[HEAP[$self_addr] + 216] * 2;
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
      HEAP[$iftmp_24] = $38;
      __label__ = 10;
      break;
     case 9:
      
      var $40 = HEAP[$c] + 48;
      HEAP[$iftmp_24] = $40;
      __label__ = 10;
      break;
     case 10:
      var $41 = HEAP[$iftmp_24];
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
      HEAP[$iftmp_28] = $55;
      __label__ = 13;
      break;
     case 12:
      
      var $57 = HEAP[$c] + 48;
      HEAP[$iftmp_28] = $57;
      __label__ = 13;
      break;
     case 13:
      var $58 = HEAP[$iftmp_28];
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
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 216] > HEAP[$i]) {
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
  function _SHA512_update($self, $args) {
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
      _sha512_update($8, $7, $5);
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
  function _SHA512_get_block_size($self, $closure) {
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
      var $1 = _PyInt_FromLong(128);
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
  function _SHA512_get_name($self, $closure) {
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
      
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 216] == 64) {
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
  function _SHA512_new($self, $args, $kwdict) {
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
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str13, _kwlist_12028, allocate([ $buf, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $5 = _newSHA512object();
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
      _sha512_init($8);
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
      _sha512_update($35, $34, $32);
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
  function _SHA384_new($self, $args, $kwdict) {
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
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str13, _kwlist_12064, allocate([ $buf, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $5 = _newSHA384object();
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
      _sha384_init($8);
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
      _sha512_update($35, $34, $32);
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
  function _init_sha512() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      
      
      HEAP[_SHA384type + 4] = _PyType_Type;
      var $1 = _PyType_Ready(_SHA384type);
      
      if ($1 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      HEAP[_SHA512type + 4] = _PyType_Type;
      var $4 = _PyType_Ready(_SHA512type);
      
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
  Module["_init_sha512"] = _init_sha512;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _SHA512_copy, 0, _SHA512_digest, 0, _SHA512_hexdigest, 0, _SHA512_update, 0, _SHA512_get_block_size, 0, _SHA512_get_name, 0, _SHA512_dealloc, 0, _SHA512_new, 0, _SHA384_new, 0 ]);
  function run(args) {
    _SHA512_copy__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 104, 97, 115, 104, 32, 111, 98, 106, 101, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    _SHA512_digest__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 100, 105, 103, 101, 115, 116, 32, 118, 97, 108, 117, 101, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 98, 105, 110, 97, 114, 121, 32, 100, 97, 116, 97, 46, 0 ], "i8", ALLOC_NORMAL);
    _SHA512_hexdigest__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 100, 105, 103, 101, 115, 116, 32, 118, 97, 108, 117, 101, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 104, 101, 120, 97, 100, 101, 99, 105, 109, 97, 108, 32, 100, 105, 103, 105, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _SHA512_update__doc__ = allocate([ 85, 112, 100, 97, 116, 101, 32, 116, 104, 105, 115, 32, 104, 97, 115, 104, 32, 111, 98, 106, 101, 99, 116, 39, 115, 32, 115, 116, 97, 116, 101, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 115, 42, 58, 117, 112, 100, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 99, 111, 112, 121, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 100, 105, 103, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 104, 101, 120, 100, 105, 103, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 117, 112, 100, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _SHA_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str5 = allocate([ 83, 72, 65, 53, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 83, 72, 65, 51, 56, 52, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 98, 108, 111, 99, 107, 95, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _SHA_getseters = allocate(60, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str9 = allocate([ 100, 105, 103, 101, 115, 116, 95, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 100, 105, 103, 101, 115, 116, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    _SHA_members = allocate([ 0, 0, 0, 0, 1, 0, 0, 0, 216, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 216, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str11 = allocate([ 95, 115, 104, 97, 53, 49, 50, 46, 115, 104, 97, 51, 56, 52, 0 ], "i8", ALLOC_NORMAL);
    _SHA384type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 220, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str12 = allocate([ 95, 115, 104, 97, 53, 49, 50, 46, 115, 104, 97, 53, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    _SHA512type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 220, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _SHA512_new__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 83, 72, 65, 45, 53, 49, 50, 32, 104, 97, 115, 104, 32, 111, 98, 106, 101, 99, 116, 59, 32, 111, 112, 116, 105, 111, 110, 97, 108, 108, 121, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 32, 119, 105, 116, 104, 32, 97, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 124, 115, 42, 58, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_12028 = allocate(8, "i8*", ALLOC_NORMAL);
    __str14 = allocate([ 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _SHA384_new__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 83, 72, 65, 45, 51, 56, 52, 32, 104, 97, 115, 104, 32, 111, 98, 106, 101, 99, 116, 59, 32, 111, 112, 116, 105, 111, 110, 97, 108, 108, 121, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 32, 119, 105, 116, 104, 32, 97, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_12064 = allocate(8, "i8*", ALLOC_NORMAL);
    __str15 = allocate([ 115, 104, 97, 53, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 115, 104, 97, 51, 56, 52, 0 ], "i8", ALLOC_NORMAL);
    _SHA_functions = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str17 = allocate([ 95, 115, 104, 97, 53, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_SHA_methods] = __str1;
    HEAP[_SHA_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_SHA_methods + 12] = _SHA512_copy__doc__;
    HEAP[_SHA_methods + 16] = __str2;
    HEAP[_SHA_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_SHA_methods + 28] = _SHA512_digest__doc__;
    HEAP[_SHA_methods + 32] = __str3;
    HEAP[_SHA_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_SHA_methods + 44] = _SHA512_hexdigest__doc__;
    HEAP[_SHA_methods + 48] = __str4;
    HEAP[_SHA_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_SHA_methods + 60] = _SHA512_update__doc__;
    HEAP[_SHA_getseters] = __str7;
    HEAP[_SHA_getseters + 4] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_SHA_getseters + 20] = __str8;
    HEAP[_SHA_getseters + 24] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_SHA_members] = __str9;
    HEAP[_SHA_members + 20] = __str10;
    HEAP[_SHA384type + 12] = __str11;
    HEAP[_SHA384type + 24] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_SHA384type + 116] = _SHA_methods;
    HEAP[_SHA384type + 120] = _SHA_members;
    HEAP[_SHA384type + 124] = _SHA_getseters;
    HEAP[_SHA512type + 12] = __str12;
    HEAP[_SHA512type + 24] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_SHA512type + 116] = _SHA_methods;
    HEAP[_SHA512type + 120] = _SHA_members;
    HEAP[_SHA512type + 124] = _SHA_getseters;
    HEAP[_kwlist_12028] = __str14;
    HEAP[_kwlist_12064] = __str14;
    HEAP[_SHA_functions] = __str15;
    HEAP[_SHA_functions + 4] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_SHA_functions + 12] = _SHA512_new__doc__;
    HEAP[_SHA_functions + 16] = __str16;
    HEAP[_SHA_functions + 20] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_SHA_functions + 28] = _SHA384_new__doc__;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
