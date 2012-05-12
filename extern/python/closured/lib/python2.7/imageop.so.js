"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 256;
  var $1___SIZE = 16;
  var $2___SIZE = 16;
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
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var __str;
  var _ImageopError;
  var __str1;
  var __str2;
  var __str3;
  var _ImageopDict;
  var _bcos_8298;
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
  var __str17;
  var __str18;
  var __str19;
  var __str20;
  var __str21;
  var __str22;
  var __str23;
  var __str24;
  var __str25;
  var __str26;
  var __str27;
  var __str28;
  var __str29;
  var __str30;
  var __str31;
  var __str32;
  var _imageop_methods;
  var __str33;
  var __str34;
  var __str35;
  var __str36;
  function _check_coordonnate($value, $name) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $value_addr = __stackBase__;
      var $name_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$value_addr] = $value;
      HEAP[$name_addr] = $name;
      
      
      if (HEAP[$value_addr] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 1;
      __label__ = 3;
      break;
     case 2:
      var $3 = HEAP[_PyExc_ValueError];
      var $4 = HEAP[$name_addr];
      var $5 = _PyErr_Format($3, __str, allocate([ $4, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 3:
      var $6 = HEAP[$0];
      HEAP[$retval] = $6;
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
  function _check_multiply_size($product, $x, $xname, $y, $yname, $size) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $product_addr = __stackBase__;
      var $x_addr = __stackBase__ + 4;
      var $xname_addr = __stackBase__ + 8;
      var $y_addr = __stackBase__ + 12;
      var $yname_addr = __stackBase__ + 16;
      var $size_addr = __stackBase__ + 20;
      var $retval = __stackBase__ + 24;
      var $0 = __stackBase__ + 28;
      
      HEAP[$product_addr] = $product;
      HEAP[$x_addr] = $x;
      HEAP[$xname_addr] = $xname;
      HEAP[$y_addr] = $y;
      HEAP[$yname_addr] = $yname;
      HEAP[$size_addr] = $size;
      var $1 = HEAP[$x_addr];
      var $2 = HEAP[$xname_addr];
      var $3 = _check_coordonnate($1, $2);
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 2:
      var $5 = HEAP[$y_addr];
      var $6 = HEAP[$yname_addr];
      var $7 = _check_coordonnate($5, $6);
      
      if ($7 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 4:
      
      
      
      
      
      
      
      if (((HEAP[$product_addr] / HEAP[$y_addr] | 0) / HEAP[$x_addr] | 0) == HEAP[$size_addr]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 1;
      __label__ = 7;
      break;
     case 6:
      var $16 = HEAP[_ImageopError];
      _PyErr_SetString($16, __str1);
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 7:
      var $17 = HEAP[$0];
      HEAP[$retval] = $17;
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
  function _check_multiply($product, $x, $y) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $product_addr = __stackBase__;
      var $x_addr = __stackBase__ + 4;
      var $y_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      
      HEAP[$product_addr] = $product;
      HEAP[$x_addr] = $x;
      HEAP[$y_addr] = $y;
      var $1 = HEAP[$product_addr];
      var $2 = HEAP[$x_addr];
      var $3 = HEAP[$y_addr];
      var $4 = _check_multiply_size($1, $2, __str2, $3, __str3, 1);
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
  function _imageop_backward_compatible() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval = __stackBase__;
      var $0 = __stackBase__ + 4;
      var $bco = __stackBase__ + 8;
      var $rc = __stackBase__ + 12;
      
      
      
      if (HEAP[_ImageopDict] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 1;
      __label__ = 12;
      break;
     case 2:
      
      
      if (HEAP[_bcos_8298] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $5 = _PyString_FromString(__str4);
      HEAP[_bcos_8298] = $5;
      
      
      if (HEAP[_bcos_8298] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 1;
      __label__ = 12;
      break;
     case 5:
      var $8 = HEAP[_bcos_8298];
      var $9 = HEAP[_ImageopDict];
      var $10 = _PyDict_GetItem($9, $8);
      HEAP[$bco] = $10;
      
      
      if (HEAP[$bco] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 1;
      __label__ = 12;
      break;
     case 7:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$bco] + 4] + 84] & 8388608) == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = 1;
      __label__ = 12;
      break;
     case 9:
      var $20 = HEAP[$bco];
      var $21 = _PyInt_AsLong($20);
      HEAP[$rc] = $21;
      var $22 = _PyErr_Occurred();
      
      if ($22 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      _PyErr_Clear();
      HEAP[$rc] = 1;
      __label__ = 11;
      break;
     case 11:
      
      
      var $26 = HEAP[$rc] != 0;
      HEAP[$0] = $26;
      __label__ = 12;
      break;
     case 12:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
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
  function _imageop_crop($self, $args) {
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
      var $iftmp_18 = __stackBase__ + 12;
      var $iftmp_15 = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $cp = __stackBase__ + 24;
      var $ncp = __stackBase__ + 28;
      var $nsp = __stackBase__ + 32;
      var $nlp = __stackBase__ + 36;
      var $len = __stackBase__ + 40;
      var $size = __stackBase__ + 44;
      var $x = __stackBase__ + 48;
      var $y = __stackBase__ + 52;
      var $newx1 = __stackBase__ + 56;
      var $newx2 = __stackBase__ + 60;
      var $newy1 = __stackBase__ + 64;
      var $newy2 = __stackBase__ + 68;
      var $nlen = __stackBase__ + 72;
      var $ix = __stackBase__ + 76;
      var $iy = __stackBase__ + 80;
      var $xstep = __stackBase__ + 84;
      var $ystep = __stackBase__ + 88;
      var $rv = __stackBase__ + 92;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str5, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0, $newx1, 0, 0, 0, $newy1, 0, 0, 0, $newx2, 0, 0, 0, $newy2, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 38;
      break;
     case 2:
      
      
      if (HEAP[$size] != 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      if (HEAP[$size] != 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      if (HEAP[$size] != 4) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $10 = HEAP[_ImageopError];
      _PyErr_SetString($10, __str6);
      HEAP[$0] = 0;
      __label__ = 38;
      break;
     case 6:
      var $11 = HEAP[$size];
      var $12 = HEAP[$y];
      var $13 = HEAP[$x];
      var $14 = HEAP[$len];
      var $15 = _check_multiply_size($14, $13, __str2, $12, __str3, $11);
      
      if ($15 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 38;
      break;
     case 8:
      
      
      
      if (HEAP[$newx1] < HEAP[$newx2]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$iftmp_15] = 1;
      __label__ = 11;
      break;
     case 10:
      HEAP[$iftmp_15] = -1;
      __label__ = 11;
      break;
     case 11:
      var $20 = HEAP[$iftmp_15];
      HEAP[$xstep] = $20;
      
      
      
      if (HEAP[$newy1] < HEAP[$newy2]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$iftmp_18] = 1;
      __label__ = 14;
      break;
     case 13:
      HEAP[$iftmp_18] = -1;
      __label__ = 14;
      break;
     case 14:
      var $24 = HEAP[$iftmp_18];
      HEAP[$ystep] = $24;
      
      
      
      
      
      var $abs = HEAP[$newx2] - HEAP[$newx1] >= 0 ? HEAP[$newx2] - HEAP[$newx1] : 0 - (HEAP[$newx2] - HEAP[$newx1]);
      
      
      
      
      
      
      var $abs17 = HEAP[$newy2] - HEAP[$newy1] >= 0 ? HEAP[$newy2] - HEAP[$newy1] : 0 - (HEAP[$newy2] - HEAP[$newy1]);
      
      
      
      var $35 = ($abs + 1) * ($abs17 + 1) * HEAP[$size];
      HEAP[$nlen] = $35;
      var $36 = HEAP[$size];
      
      
      
      
      
      var $abs21 = HEAP[$newy2] - HEAP[$newy1] >= 0 ? HEAP[$newy2] - HEAP[$newy1] : 0 - (HEAP[$newy2] - HEAP[$newy1]);
      var $40 = $abs21 + 1;
      
      
      
      
      
      var $abs25 = HEAP[$newx2] - HEAP[$newx1] >= 0 ? HEAP[$newx2] - HEAP[$newx1] : 0 - (HEAP[$newx2] - HEAP[$newx1]);
      var $44 = $abs25 + 1;
      var $45 = HEAP[$nlen];
      var $46 = _check_multiply_size($45, $44, __str7, $40, __str8, $36);
      
      if ($46 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$0] = 0;
      __label__ = 38;
      break;
     case 16:
      var $48 = HEAP[$nlen];
      var $49 = _PyString_FromStringAndSize(0, $48);
      HEAP[$rv] = $49;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      HEAP[$0] = 0;
      __label__ = 38;
      break;
     case 18:
      var $52 = HEAP[$rv];
      var $53 = _PyString_AsString($52);
      HEAP[$ncp] = $53;
      
      var $55 = HEAP[$ncp];
      HEAP[$nsp] = $55;
      
      var $57 = HEAP[$ncp];
      HEAP[$nlp] = $57;
      
      
      var $60 = HEAP[$newy2] + HEAP[$ystep];
      HEAP[$newy2] = $60;
      
      
      var $63 = HEAP[$newx2] + HEAP[$xstep];
      HEAP[$newx2] = $63;
      var $64 = HEAP[$newy1];
      HEAP[$iy] = $64;
      __label__ = 36;
      break;
     case 19:
      var $65 = HEAP[$newx1];
      HEAP[$ix] = $65;
      __label__ = 34;
      break;
     case 20:
      
      
      if (HEAP[$iy] < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      if (HEAP[$iy] >= HEAP[$y]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      if (HEAP[$ix] < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      if (HEAP[$ix] >= HEAP[$x]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 24:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $78 = HEAP[$ncp];
      HEAP[$78] = 0;
      
      var $80 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $80;
      __label__ = 27;
      break;
     case 26:
      var $81 = HEAP[$nlp];
      HEAP[$81] = 0;
      
      var $83 = HEAP[$nlp] + 4;
      HEAP[$nlp] = $83;
      __label__ = 27;
      break;
     case 27:
      __label__ = 33;
      break;
     case 28:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      
      
      
      var $93 = HEAP[HEAP[$cp] + HEAP[$iy] * HEAP[$x] + HEAP[$ix]];
      var $94 = HEAP[$ncp];
      HEAP[$94] = $93;
      
      var $96 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $96;
      __label__ = 33;
      break;
     case 30:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      
      
      
      
      
      var $108 = HEAP[HEAP[$cp] + (HEAP[$iy] * HEAP[$x] + HEAP[$ix]) * 2];
      var $109 = HEAP[$nsp];
      HEAP[$109] = $108;
      
      var $111 = HEAP[$nsp] + 2;
      HEAP[$nsp] = $111;
      __label__ = 33;
      break;
     case 32:
      
      
      
      
      
      
      
      
      
      var $121 = HEAP[HEAP[$cp] + (HEAP[$iy] * HEAP[$x] + HEAP[$ix]) * 4];
      var $122 = HEAP[$nlp];
      HEAP[$122] = $121;
      
      var $124 = HEAP[$nlp] + 4;
      HEAP[$nlp] = $124;
      __label__ = 33;
      break;
     case 33:
      
      
      var $127 = HEAP[$ix] + HEAP[$xstep];
      HEAP[$ix] = $127;
      __label__ = 34;
      break;
     case 34:
      
      
      
      if (HEAP[$ix] != HEAP[$newx2]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      var $133 = HEAP[$iy] + HEAP[$ystep];
      HEAP[$iy] = $133;
      __label__ = 36;
      break;
     case 36:
      
      
      
      if (HEAP[$iy] != HEAP[$newy2]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      var $137 = HEAP[$rv];
      HEAP[$0] = $137;
      __label__ = 38;
      break;
     case 38:
      var $138 = HEAP[$0];
      HEAP[$retval] = $138;
      __label__ = 39;
      break;
     case 39:
      var $retval51 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval51;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_scale($self, $args) {
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
      var $cp = __stackBase__ + 16;
      var $ncp = __stackBase__ + 20;
      var $nsp = __stackBase__ + 24;
      var $nlp = __stackBase__ + 28;
      var $len = __stackBase__ + 32;
      var $size = __stackBase__ + 36;
      var $x = __stackBase__ + 40;
      var $y = __stackBase__ + 44;
      var $newx = __stackBase__ + 48;
      var $newy = __stackBase__ + 52;
      var $nlen = __stackBase__ + 56;
      var $ix = __stackBase__ + 60;
      var $iy = __stackBase__ + 64;
      var $oix = __stackBase__ + 68;
      var $oiy = __stackBase__ + 72;
      var $rv = __stackBase__ + 76;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str9, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0, $newx, 0, 0, 0, $newy, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 2:
      
      
      if (HEAP[$size] != 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      if (HEAP[$size] != 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      if (HEAP[$size] != 4) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $10 = HEAP[_ImageopError];
      _PyErr_SetString($10, __str6);
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 6:
      var $11 = HEAP[$size];
      var $12 = HEAP[$y];
      var $13 = HEAP[$x];
      var $14 = HEAP[$len];
      var $15 = _check_multiply_size($14, $13, __str2, $12, __str3, $11);
      
      if ($15 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 8:
      
      
      
      
      var $21 = HEAP[$newx] * HEAP[$newy] * HEAP[$size];
      HEAP[$nlen] = $21;
      var $22 = HEAP[$size];
      var $23 = HEAP[$newy];
      var $24 = HEAP[$newx];
      var $25 = HEAP[$nlen];
      var $26 = _check_multiply_size($25, $24, __str10, $23, __str11, $22);
      
      if ($26 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 10:
      var $28 = HEAP[$nlen];
      var $29 = _PyString_FromStringAndSize(0, $28);
      HEAP[$rv] = $29;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 12:
      var $32 = HEAP[$rv];
      var $33 = _PyString_AsString($32);
      HEAP[$ncp] = $33;
      
      var $35 = HEAP[$ncp];
      HEAP[$nsp] = $35;
      
      var $37 = HEAP[$ncp];
      HEAP[$nlp] = $37;
      HEAP[$iy] = 0;
      __label__ = 22;
      break;
     case 13:
      HEAP[$ix] = 0;
      __label__ = 20;
      break;
     case 14:
      
      
      
      
      var $42 = HEAP[$ix] * HEAP[$x] / HEAP[$newx] | 0;
      HEAP[$oix] = $42;
      
      
      
      
      var $47 = HEAP[$iy] * HEAP[$y] / HEAP[$newy] | 0;
      HEAP[$oiy] = $47;
      
      
      if (HEAP[$size] == 1) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      var $57 = HEAP[HEAP[$cp] + HEAP[$oiy] * HEAP[$x] + HEAP[$oix]];
      var $58 = HEAP[$ncp];
      HEAP[$58] = $57;
      
      var $60 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $60;
      __label__ = 19;
      break;
     case 16:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      
      
      var $72 = HEAP[HEAP[$cp] + (HEAP[$oiy] * HEAP[$x] + HEAP[$oix]) * 2];
      var $73 = HEAP[$nsp];
      HEAP[$73] = $72;
      
      var $75 = HEAP[$nsp] + 2;
      HEAP[$nsp] = $75;
      __label__ = 19;
      break;
     case 18:
      
      
      
      
      
      
      
      
      
      var $85 = HEAP[HEAP[$cp] + (HEAP[$oiy] * HEAP[$x] + HEAP[$oix]) * 4];
      var $86 = HEAP[$nlp];
      HEAP[$86] = $85;
      
      var $88 = HEAP[$nlp] + 4;
      HEAP[$nlp] = $88;
      __label__ = 19;
      break;
     case 19:
      
      var $90 = HEAP[$ix] + 1;
      HEAP[$ix] = $90;
      __label__ = 20;
      break;
     case 20:
      
      
      
      if (HEAP[$ix] < HEAP[$newx]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      var $95 = HEAP[$iy] + 1;
      HEAP[$iy] = $95;
      __label__ = 22;
      break;
     case 22:
      
      
      
      if (HEAP[$iy] < HEAP[$newy]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      var $99 = HEAP[$rv];
      HEAP[$0] = $99;
      __label__ = 24;
      break;
     case 24:
      var $100 = HEAP[$0];
      HEAP[$retval] = $100;
      __label__ = 25;
      break;
     case 25:
      var $retval24 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_tovideo($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $maxx = __stackBase__ + 16;
      var $maxy = __stackBase__ + 20;
      var $x = __stackBase__ + 24;
      var $y = __stackBase__ + 28;
      var $len = __stackBase__ + 32;
      var $i = __stackBase__ + 36;
      var $cp = __stackBase__ + 40;
      var $ncp = __stackBase__ + 44;
      var $width = __stackBase__ + 48;
      var $rv = __stackBase__ + 52;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str12, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $width, 0, 0, 0, $maxx, 0, 0, 0, $maxy, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 2:
      
      
      if (HEAP[$width] != 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      if (HEAP[$width] != 4) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $8 = HEAP[_ImageopError];
      _PyErr_SetString($8, __str13);
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 5:
      var $9 = HEAP[$width];
      var $10 = HEAP[$maxy];
      var $11 = HEAP[$maxx];
      var $12 = HEAP[$len];
      var $13 = _check_multiply_size($12, $11, __str14, $10, __str15, $9);
      
      if ($13 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 7:
      var $15 = HEAP[$len];
      var $16 = _PyString_FromStringAndSize(0, $15);
      HEAP[$rv] = $16;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = 0;
      __label__ = 24;
      break;
     case 9:
      var $19 = HEAP[$rv];
      var $20 = _PyString_AsString($19);
      HEAP[$ncp] = $20;
      
      
      if (HEAP[$width] == 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 10:
      var $23 = HEAP[$maxx];
      var $24 = HEAP[$cp];
      var $25 = HEAP[$ncp];
      _llvm_memcpy_p0i8_p0i8_i32($25, $24, $23, 1, 0);
      
      
      var $28 = HEAP[$ncp] + HEAP[$maxx];
      HEAP[$ncp] = $28;
      HEAP[$y] = 1;
      __label__ = 15;
      break;
     case 11:
      HEAP[$x] = 0;
      __label__ = 13;
      break;
     case 12:
      
      
      
      
      var $33 = HEAP[$y] * HEAP[$maxx] + HEAP[$x];
      HEAP[$i] = $33;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $48 = HEAP[HEAP[$cp] + HEAP[$i]] + HEAP[HEAP[$cp] + (HEAP[$i] - HEAP[$maxx])] >> 1 & 255;
      var $49 = HEAP[$ncp];
      HEAP[$49] = $48;
      
      var $51 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $51;
      
      var $53 = HEAP[$x] + 1;
      HEAP[$x] = $53;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (HEAP[$x] < HEAP[$maxx]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      var $58 = HEAP[$y] + 1;
      HEAP[$y] = $58;
      __label__ = 15;
      break;
     case 15:
      
      
      
      if (HEAP[$y] < HEAP[$maxy]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      __label__ = 23;
      break;
     case 17:
      
      var $63 = HEAP[$maxx] * 4;
      var $64 = HEAP[$cp];
      var $65 = HEAP[$ncp];
      _llvm_memcpy_p0i8_p0i8_i32($65, $64, $63, 1, 0);
      
      
      
      var $69 = HEAP[$ncp] + HEAP[$maxx] * 4;
      HEAP[$ncp] = $69;
      HEAP[$y] = 1;
      __label__ = 22;
      break;
     case 18:
      HEAP[$x] = 0;
      __label__ = 20;
      break;
     case 19:
      
      
      
      
      
      
      var $76 = (HEAP[$y] * HEAP[$maxx] + HEAP[$x]) * 4 + 1;
      HEAP[$i] = $76;
      var $77 = HEAP[$ncp];
      HEAP[$77] = 0;
      
      var $79 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $79;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $95 = HEAP[HEAP[$cp] + HEAP[$i]] + HEAP[HEAP[$cp] + (HEAP[$i] - HEAP[$maxx] * 4)] >> 1 & 255;
      var $96 = HEAP[$ncp];
      HEAP[$96] = $95;
      
      var $98 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $98;
      
      var $100 = HEAP[$i] + 1;
      HEAP[$i] = $100;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $116 = HEAP[HEAP[$cp] + HEAP[$i]] + HEAP[HEAP[$cp] + (HEAP[$i] - HEAP[$maxx] * 4)] >> 1 & 255;
      var $117 = HEAP[$ncp];
      HEAP[$117] = $116;
      
      var $119 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $119;
      
      var $121 = HEAP[$i] + 1;
      HEAP[$i] = $121;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $137 = HEAP[HEAP[$cp] + HEAP[$i]] + HEAP[HEAP[$cp] + (HEAP[$i] - HEAP[$maxx] * 4)] >> 1 & 255;
      var $138 = HEAP[$ncp];
      HEAP[$138] = $137;
      
      var $140 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $140;
      
      var $142 = HEAP[$x] + 1;
      HEAP[$x] = $142;
      __label__ = 20;
      break;
     case 20:
      
      
      
      if (HEAP[$x] < HEAP[$maxx]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      var $147 = HEAP[$y] + 1;
      HEAP[$y] = $147;
      __label__ = 22;
      break;
     case 22:
      
      
      
      if (HEAP[$y] < HEAP[$maxy]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      var $151 = HEAP[$rv];
      HEAP[$0] = $151;
      __label__ = 24;
      break;
     case 24:
      var $152 = HEAP[$0];
      HEAP[$retval] = $152;
      __label__ = 25;
      break;
     case 25:
      var $retval24 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_grey2mono($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 53;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 53);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $tres = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      var $y = __stackBase__ + 24;
      var $len = __stackBase__ + 28;
      var $cp = __stackBase__ + 32;
      var $ncp = __stackBase__ + 36;
      var $ovalue = __stackBase__ + 40;
      var $rv = __stackBase__ + 41;
      var $i = __stackBase__ + 45;
      var $bit = __stackBase__ + 49;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str12, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0, $tres, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$y];
      var $5 = HEAP[$x];
      var $6 = HEAP[$len];
      var $7 = _check_multiply($6, $5, $4);
      
      if ($7 == 0) {
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
      
      
      var $11 = (HEAP[$len] + 7) / 8 | 0;
      var $12 = _PyString_FromStringAndSize(0, $11);
      HEAP[$rv] = $12;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 6:
      var $15 = HEAP[$rv];
      var $16 = _PyString_AsString($15);
      HEAP[$ncp] = $16;
      HEAP[$bit] = 128;
      HEAP[$ovalue] = 0;
      HEAP[$i] = 0;
      __label__ = 12;
      break;
     case 7:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$cp] + HEAP[$i]] > HEAP[$tres]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      var $27 = HEAP[$bit] & 255 | HEAP[$ovalue];
      HEAP[$ovalue] = $27;
      __label__ = 9;
      break;
     case 9:
      
      var $29 = HEAP[$bit] >> 1;
      HEAP[$bit] = $29;
      
      
      if (HEAP[$bit] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $32 = HEAP[$ncp];
      var $33 = HEAP[$ovalue];
      HEAP[$32] = $33;
      
      var $35 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $35;
      HEAP[$bit] = 128;
      HEAP[$ovalue] = 0;
      __label__ = 11;
      break;
     case 11:
      
      var $37 = HEAP[$i] + 1;
      HEAP[$i] = $37;
      __label__ = 12;
      break;
     case 12:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      if (HEAP[$bit] != 128) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $43 = HEAP[$ncp];
      var $44 = HEAP[$ovalue];
      HEAP[$43] = $44;
      
      var $46 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $46;
      __label__ = 15;
      break;
     case 15:
      var $47 = HEAP[$rv];
      HEAP[$0] = $47;
      __label__ = 16;
      break;
     case 16:
      var $48 = HEAP[$0];
      HEAP[$retval] = $48;
      __label__ = 17;
      break;
     case 17:
      var $retval16 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_grey2grey4($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 49;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 49);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $y = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $cp = __stackBase__ + 28;
      var $ncp = __stackBase__ + 32;
      var $ovalue = __stackBase__ + 36;
      var $rv = __stackBase__ + 37;
      var $i = __stackBase__ + 41;
      var $pos = __stackBase__ + 45;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$y];
      var $5 = HEAP[$x];
      var $6 = HEAP[$len];
      var $7 = _check_multiply($6, $5, $4);
      
      if ($7 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 4:
      
      
      var $11 = (HEAP[$len] + 1) / 2 | 0;
      var $12 = _PyString_FromStringAndSize(0, $11);
      HEAP[$rv] = $12;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 6:
      var $15 = HEAP[$rv];
      var $16 = _PyString_AsString($15);
      HEAP[$ncp] = $16;
      HEAP[$pos] = 0;
      HEAP[$ovalue] = 0;
      HEAP[$i] = 0;
      __label__ = 10;
      break;
     case 7:
      
      
      
      
      
      
      
      
      
      
      var $27 = (HEAP[HEAP[$cp] + HEAP[$i]] & 240) >> HEAP[$pos] & 255 | HEAP[$ovalue];
      HEAP[$ovalue] = $27;
      
      var $29 = HEAP[$pos] + 4;
      HEAP[$pos] = $29;
      
      
      if (HEAP[$pos] == 8) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $32 = HEAP[$ncp];
      var $33 = HEAP[$ovalue];
      HEAP[$32] = $33;
      
      var $35 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $35;
      HEAP[$ovalue] = 0;
      HEAP[$pos] = 0;
      __label__ = 9;
      break;
     case 9:
      
      var $37 = HEAP[$i] + 1;
      HEAP[$i] = $37;
      __label__ = 10;
      break;
     case 10:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      if (HEAP[$pos] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $43 = HEAP[$ncp];
      var $44 = HEAP[$ovalue];
      HEAP[$43] = $44;
      
      var $46 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $46;
      __label__ = 13;
      break;
     case 13:
      var $47 = HEAP[$rv];
      HEAP[$0] = $47;
      __label__ = 14;
      break;
     case 14:
      var $48 = HEAP[$0];
      HEAP[$retval] = $48;
      __label__ = 15;
      break;
     case 15:
      var $retval14 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_grey2grey2($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 49;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 49);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $y = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $cp = __stackBase__ + 28;
      var $ncp = __stackBase__ + 32;
      var $ovalue = __stackBase__ + 36;
      var $rv = __stackBase__ + 37;
      var $i = __stackBase__ + 41;
      var $pos = __stackBase__ + 45;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$y];
      var $5 = HEAP[$x];
      var $6 = HEAP[$len];
      var $7 = _check_multiply($6, $5, $4);
      
      if ($7 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 4:
      
      
      var $11 = (HEAP[$len] + 3) / 4 | 0;
      var $12 = _PyString_FromStringAndSize(0, $11);
      HEAP[$rv] = $12;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 6:
      var $15 = HEAP[$rv];
      var $16 = _PyString_AsString($15);
      HEAP[$ncp] = $16;
      HEAP[$pos] = 0;
      HEAP[$ovalue] = 0;
      HEAP[$i] = 0;
      __label__ = 10;
      break;
     case 7:
      
      
      
      
      
      
      
      
      
      
      var $27 = (HEAP[HEAP[$cp] + HEAP[$i]] & 192) >> HEAP[$pos] & 255 | HEAP[$ovalue];
      HEAP[$ovalue] = $27;
      
      var $29 = HEAP[$pos] + 2;
      HEAP[$pos] = $29;
      
      
      if (HEAP[$pos] == 8) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $32 = HEAP[$ncp];
      var $33 = HEAP[$ovalue];
      HEAP[$32] = $33;
      
      var $35 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $35;
      HEAP[$ovalue] = 0;
      HEAP[$pos] = 0;
      __label__ = 9;
      break;
     case 9:
      
      var $37 = HEAP[$i] + 1;
      HEAP[$i] = $37;
      __label__ = 10;
      break;
     case 10:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      if (HEAP[$pos] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $43 = HEAP[$ncp];
      var $44 = HEAP[$ovalue];
      HEAP[$43] = $44;
      
      var $46 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $46;
      __label__ = 13;
      break;
     case 13:
      var $47 = HEAP[$rv];
      HEAP[$0] = $47;
      __label__ = 14;
      break;
     case 14:
      var $48 = HEAP[$0];
      HEAP[$retval] = $48;
      __label__ = 15;
      break;
     case 15:
      var $retval14 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_dither2mono($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 53;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 53);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $sum = __stackBase__ + 16;
      var $x = __stackBase__ + 20;
      var $y = __stackBase__ + 24;
      var $len = __stackBase__ + 28;
      var $cp = __stackBase__ + 32;
      var $ncp = __stackBase__ + 36;
      var $ovalue = __stackBase__ + 40;
      var $rv = __stackBase__ + 41;
      var $i = __stackBase__ + 45;
      var $bit = __stackBase__ + 49;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$y];
      var $5 = HEAP[$x];
      var $6 = HEAP[$len];
      var $7 = _check_multiply($6, $5, $4);
      
      if ($7 == 0) {
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
      
      
      var $11 = (HEAP[$len] + 7) / 8 | 0;
      var $12 = _PyString_FromStringAndSize(0, $11);
      HEAP[$rv] = $12;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 6:
      var $15 = HEAP[$rv];
      var $16 = _PyString_AsString($15);
      HEAP[$ncp] = $16;
      HEAP[$bit] = 128;
      HEAP[$ovalue] = 0;
      HEAP[$sum] = 0;
      HEAP[$i] = 0;
      __label__ = 12;
      break;
     case 7:
      
      
      
      
      
      
      var $23 = HEAP[HEAP[$cp] + HEAP[$i]] + HEAP[$sum];
      HEAP[$sum] = $23;
      
      
      if (HEAP[$sum] > 255) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $27 = HEAP[$sum] - 256;
      HEAP[$sum] = $27;
      
      
      
      var $31 = HEAP[$bit] & 255 | HEAP[$ovalue];
      HEAP[$ovalue] = $31;
      __label__ = 9;
      break;
     case 9:
      
      var $33 = HEAP[$bit] >> 1;
      HEAP[$bit] = $33;
      
      
      if (HEAP[$bit] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $36 = HEAP[$ncp];
      var $37 = HEAP[$ovalue];
      HEAP[$36] = $37;
      
      var $39 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $39;
      HEAP[$bit] = 128;
      HEAP[$ovalue] = 0;
      __label__ = 11;
      break;
     case 11:
      
      var $41 = HEAP[$i] + 1;
      HEAP[$i] = $41;
      __label__ = 12;
      break;
     case 12:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      if (HEAP[$bit] != 128) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $47 = HEAP[$ncp];
      var $48 = HEAP[$ovalue];
      HEAP[$47] = $48;
      
      var $50 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $50;
      __label__ = 15;
      break;
     case 15:
      var $51 = HEAP[$rv];
      HEAP[$0] = $51;
      __label__ = 16;
      break;
     case 16:
      var $52 = HEAP[$0];
      HEAP[$retval] = $52;
      __label__ = 17;
      break;
     case 17:
      var $retval16 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_dither2grey2($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 57;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 57);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $y = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $cp = __stackBase__ + 28;
      var $ncp = __stackBase__ + 32;
      var $ovalue = __stackBase__ + 36;
      var $rv = __stackBase__ + 37;
      var $i = __stackBase__ + 41;
      var $pos = __stackBase__ + 45;
      var $sum = __stackBase__ + 49;
      var $nvalue = __stackBase__ + 53;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$sum] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$y];
      var $5 = HEAP[$x];
      var $6 = HEAP[$len];
      var $7 = _check_multiply($6, $5, $4);
      
      if ($7 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 4:
      
      
      var $11 = (HEAP[$len] + 3) / 4 | 0;
      var $12 = _PyString_FromStringAndSize(0, $11);
      HEAP[$rv] = $12;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 6:
      var $15 = HEAP[$rv];
      var $16 = _PyString_AsString($15);
      HEAP[$ncp] = $16;
      HEAP[$pos] = 1;
      HEAP[$ovalue] = 0;
      HEAP[$i] = 0;
      __label__ = 10;
      break;
     case 7:
      
      
      
      
      
      
      var $23 = HEAP[HEAP[$cp] + HEAP[$i]] + HEAP[$sum];
      HEAP[$sum] = $23;
      
      var $25 = HEAP[$sum] & 384;
      HEAP[$nvalue] = $25;
      
      
      var $28 = HEAP[$sum] - HEAP[$nvalue];
      HEAP[$sum] = $28;
      
      
      
      
      
      var $34 = HEAP[$nvalue] >> HEAP[$pos] & 255 | HEAP[$ovalue];
      HEAP[$ovalue] = $34;
      
      var $36 = HEAP[$pos] + 2;
      HEAP[$pos] = $36;
      
      
      if (HEAP[$pos] == 9) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $39 = HEAP[$ncp];
      var $40 = HEAP[$ovalue];
      HEAP[$39] = $40;
      
      var $42 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $42;
      HEAP[$ovalue] = 0;
      HEAP[$pos] = 1;
      __label__ = 9;
      break;
     case 9:
      
      var $44 = HEAP[$i] + 1;
      HEAP[$i] = $44;
      __label__ = 10;
      break;
     case 10:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      if (HEAP[$pos] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $50 = HEAP[$ncp];
      var $51 = HEAP[$ovalue];
      HEAP[$50] = $51;
      
      var $53 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $53;
      __label__ = 13;
      break;
     case 13:
      var $54 = HEAP[$rv];
      HEAP[$0] = $54;
      __label__ = 14;
      break;
     case 14:
      var $55 = HEAP[$0];
      HEAP[$retval] = $55;
      __label__ = 15;
      break;
     case 15:
      var $retval14 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_mono2grey($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 60;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $v0 = __stackBase__ + 16;
      var $v1 = __stackBase__ + 20;
      var $x = __stackBase__ + 24;
      var $y = __stackBase__ + 28;
      var $len = __stackBase__ + 32;
      var $nlen = __stackBase__ + 36;
      var $cp = __stackBase__ + 40;
      var $ncp = __stackBase__ + 44;
      var $rv = __stackBase__ + 48;
      var $i = __stackBase__ + 52;
      var $bit = __stackBase__ + 56;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str17, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0, $v0, 0, 0, 0, $v1, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      var $6 = HEAP[$x] * HEAP[$y];
      HEAP[$nlen] = $6;
      var $7 = HEAP[$y];
      var $8 = HEAP[$x];
      var $9 = HEAP[$nlen];
      var $10 = _check_multiply($9, $8, $7);
      
      if ($10 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 4:
      
      
      
      
      
      if (((HEAP[$nlen] + 7) / 8 | 0) != HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $17 = HEAP[_ImageopError];
      _PyErr_SetString($17, __str1);
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 6:
      var $18 = HEAP[$nlen];
      var $19 = _PyString_FromStringAndSize(0, $18);
      HEAP[$rv] = $19;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 8:
      var $22 = HEAP[$rv];
      var $23 = _PyString_AsString($22);
      HEAP[$ncp] = $23;
      HEAP[$bit] = 128;
      HEAP[$i] = 0;
      __label__ = 15;
      break;
     case 9:
      
      
      
      
      
      
      if ((HEAP[HEAP[$cp]] & HEAP[$bit]) != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $31 = HEAP[$v1] & 255;
      var $32 = HEAP[$ncp];
      HEAP[$32] = $31;
      
      var $34 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $34;
      __label__ = 12;
      break;
     case 11:
      
      var $36 = HEAP[$v0] & 255;
      var $37 = HEAP[$ncp];
      HEAP[$37] = $36;
      
      var $39 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $39;
      __label__ = 12;
      break;
     case 12:
      
      var $41 = HEAP[$bit] >> 1;
      HEAP[$bit] = $41;
      
      
      if (HEAP[$bit] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$bit] = 128;
      
      var $45 = HEAP[$cp] + 1;
      HEAP[$cp] = $45;
      __label__ = 14;
      break;
     case 14:
      
      var $47 = HEAP[$i] + 1;
      HEAP[$i] = $47;
      __label__ = 15;
      break;
     case 15:
      
      
      
      if (HEAP[$i] < HEAP[$nlen]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $51 = HEAP[$rv];
      HEAP[$0] = $51;
      __label__ = 17;
      break;
     case 17:
      var $52 = HEAP[$0];
      HEAP[$retval] = $52;
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
  function _imageop_grey22grey($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 60;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $y = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $nlen = __stackBase__ + 28;
      var $cp = __stackBase__ + 32;
      var $ncp = __stackBase__ + 36;
      var $rv = __stackBase__ + 40;
      var $i = __stackBase__ + 44;
      var $pos = __stackBase__ + 48;
      var $value = __stackBase__ + 52;
      var $nvalue = __stackBase__ + 56;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$value] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      var $6 = HEAP[$x] * HEAP[$y];
      HEAP[$nlen] = $6;
      var $7 = HEAP[$y];
      var $8 = HEAP[$x];
      var $9 = HEAP[$nlen];
      var $10 = _check_multiply($9, $8, $7);
      
      if ($10 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 4:
      
      
      
      
      
      if (((HEAP[$nlen] + 3) / 4 | 0) != HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $17 = HEAP[_ImageopError];
      _PyErr_SetString($17, __str1);
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 6:
      var $18 = HEAP[$nlen];
      var $19 = _PyString_FromStringAndSize(0, $18);
      HEAP[$rv] = $19;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 8:
      var $22 = HEAP[$rv];
      var $23 = _PyString_AsString($22);
      HEAP[$ncp] = $23;
      HEAP[$pos] = 0;
      HEAP[$i] = 0;
      __label__ = 12;
      break;
     case 9:
      
      
      if (HEAP[$pos] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $26 = HEAP[$cp];
      
      var $28 = HEAP[$26];
      HEAP[$value] = $28;
      var $29 = $26 + 1;
      HEAP[$cp] = $29;
      HEAP[$pos] = 8;
      __label__ = 11;
      break;
     case 11:
      
      var $31 = HEAP[$pos] - 2;
      HEAP[$pos] = $31;
      
      
      
      var $35 = HEAP[$value] >> HEAP[$pos] & 3;
      HEAP[$nvalue] = $35;
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $49 = HEAP[$nvalue] << 2 & 255 | HEAP[$nvalue] & 255 | HEAP[$nvalue] << 4 & 255 | HEAP[$nvalue] << 6 & 255;
      var $50 = HEAP[$ncp];
      HEAP[$50] = $49;
      
      var $52 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $52;
      
      var $54 = HEAP[$i] + 1;
      HEAP[$i] = $54;
      __label__ = 12;
      break;
     case 12:
      
      
      
      if (HEAP[$i] < HEAP[$nlen]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $58 = HEAP[$rv];
      HEAP[$0] = $58;
      __label__ = 14;
      break;
     case 14:
      var $59 = HEAP[$0];
      HEAP[$retval] = $59;
      __label__ = 15;
      break;
     case 15:
      var $retval14 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_grey42grey($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 60;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $y = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $nlen = __stackBase__ + 28;
      var $cp = __stackBase__ + 32;
      var $ncp = __stackBase__ + 36;
      var $rv = __stackBase__ + 40;
      var $i = __stackBase__ + 44;
      var $pos = __stackBase__ + 48;
      var $value = __stackBase__ + 52;
      var $nvalue = __stackBase__ + 56;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$value] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      var $6 = HEAP[$x] * HEAP[$y];
      HEAP[$nlen] = $6;
      var $7 = HEAP[$y];
      var $8 = HEAP[$x];
      var $9 = HEAP[$nlen];
      var $10 = _check_multiply($9, $8, $7);
      
      if ($10 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 4:
      
      
      
      
      
      if (((HEAP[$nlen] + 1) / 2 | 0) != HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $17 = HEAP[_ImageopError];
      _PyErr_SetString($17, __str1);
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 6:
      var $18 = HEAP[$nlen];
      var $19 = _PyString_FromStringAndSize(0, $18);
      HEAP[$rv] = $19;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 8:
      var $22 = HEAP[$rv];
      var $23 = _PyString_AsString($22);
      HEAP[$ncp] = $23;
      HEAP[$pos] = 0;
      HEAP[$i] = 0;
      __label__ = 12;
      break;
     case 9:
      
      
      if (HEAP[$pos] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $26 = HEAP[$cp];
      
      var $28 = HEAP[$26];
      HEAP[$value] = $28;
      var $29 = $26 + 1;
      HEAP[$cp] = $29;
      HEAP[$pos] = 8;
      __label__ = 11;
      break;
     case 11:
      
      var $31 = HEAP[$pos] - 4;
      HEAP[$pos] = $31;
      
      
      
      var $35 = HEAP[$value] >> HEAP[$pos] & 15;
      HEAP[$nvalue] = $35;
      
      
      
      
      
      var $41 = HEAP[$nvalue] << 4 & 255 | HEAP[$nvalue] & 255;
      var $42 = HEAP[$ncp];
      HEAP[$42] = $41;
      
      var $44 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $44;
      
      var $46 = HEAP[$i] + 1;
      HEAP[$i] = $46;
      __label__ = 12;
      break;
     case 12:
      
      
      
      if (HEAP[$i] < HEAP[$nlen]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $50 = HEAP[$rv];
      HEAP[$0] = $50;
      __label__ = 14;
      break;
     case 14:
      var $51 = HEAP[$0];
      HEAP[$retval] = $51;
      __label__ = 15;
      break;
     case 15:
      var $retval14 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_rgb2rgb8($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 68;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $y = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $nlen = __stackBase__ + 28;
      var $cp = __stackBase__ + 32;
      var $ncp = __stackBase__ + 36;
      var $rv = __stackBase__ + 40;
      var $i = __stackBase__ + 44;
      var $r = __stackBase__ + 48;
      var $g = __stackBase__ + 52;
      var $b = __stackBase__ + 56;
      var $backward_compatible = __stackBase__ + 60;
      var $value = __stackBase__ + 64;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = _imageop_backward_compatible();
      HEAP[$backward_compatible] = $1;
      var $2 = HEAP[$args_addr];
      var $3 = _PyArg_ParseTuple($2, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$y];
      var $6 = HEAP[$x];
      var $7 = HEAP[$len];
      var $8 = _check_multiply_size($7, $6, __str2, $5, __str3, 4);
      
      if ($8 == 0) {
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
      
      
      var $12 = HEAP[$x] * HEAP[$y];
      HEAP[$nlen] = $12;
      var $13 = HEAP[$y];
      var $14 = HEAP[$x];
      var $15 = HEAP[$nlen];
      var $16 = _check_multiply($15, $14, $13);
      
      if ($16 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 6:
      var $18 = HEAP[$nlen];
      var $19 = _PyString_FromStringAndSize(0, $18);
      HEAP[$rv] = $19;
      
      
      if (HEAP[$rv] == 0) {
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
      var $22 = HEAP[$rv];
      var $23 = _PyString_AsString($22);
      HEAP[$ncp] = $23;
      HEAP[$i] = 0;
      __label__ = 13;
      break;
     case 9:
      
      
      if (HEAP[$backward_compatible] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      var $28 = HEAP[HEAP[$cp]];
      HEAP[$value] = $28;
      
      var $30 = HEAP[$cp] + 4;
      HEAP[$cp] = $30;
      
      
      
      
      
      
      var $37 = (HEAP[$value] & 255) / 255 * 7 + .5 | 0;
      HEAP[$r] = $37;
      
      
      
      
      
      
      
      var $45 = (HEAP[$value] >>> 8 & 255) / 255 * 7 + .5 | 0;
      HEAP[$g] = $45;
      
      
      
      
      
      
      
      var $53 = (HEAP[$value] >>> 16 & 255) / 255 * 3 + .5 | 0;
      HEAP[$b] = $53;
      __label__ = 12;
      break;
     case 11:
      
      var $55 = HEAP[$cp] + 1;
      HEAP[$cp] = $55;
      var $56 = HEAP[$cp];
      
      
      
      
      
      
      var $63 = HEAP[$56] / 255 * 3 + .5 | 0;
      HEAP[$b] = $63;
      var $64 = $56 + 1;
      HEAP[$cp] = $64;
      var $65 = HEAP[$cp];
      
      
      
      
      
      
      var $72 = HEAP[$65] / 255 * 7 + .5 | 0;
      HEAP[$g] = $72;
      var $73 = $65 + 1;
      HEAP[$cp] = $73;
      var $74 = HEAP[$cp];
      
      
      
      
      
      
      var $81 = HEAP[$74] / 255 * 7 + .5 | 0;
      HEAP[$r] = $81;
      var $82 = $74 + 1;
      HEAP[$cp] = $82;
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      
      
      
      
      
      var $92 = HEAP[$r] << 5 & 255 | HEAP[$b] << 3 & 255 | HEAP[$g] & 255;
      var $93 = HEAP[$ncp];
      HEAP[$93] = $92;
      
      var $95 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $95;
      
      var $97 = HEAP[$i] + 1;
      HEAP[$i] = $97;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (HEAP[$i] < HEAP[$nlen]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      var $101 = HEAP[$rv];
      HEAP[$0] = $101;
      __label__ = 15;
      break;
     case 15:
      var $102 = HEAP[$0];
      HEAP[$retval] = $102;
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
  function _imageop_rgb82rgb($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 69;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 69);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $y = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $nlen = __stackBase__ + 28;
      var $cp = __stackBase__ + 32;
      var $ncp = __stackBase__ + 36;
      var $rv = __stackBase__ + 40;
      var $i = __stackBase__ + 44;
      var $r = __stackBase__ + 48;
      var $g = __stackBase__ + 52;
      var $b = __stackBase__ + 56;
      var $value = __stackBase__ + 60;
      var $backward_compatible = __stackBase__ + 61;
      var $nvalue = __stackBase__ + 65;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = _imageop_backward_compatible();
      HEAP[$backward_compatible] = $1;
      var $2 = HEAP[$args_addr];
      var $3 = _PyArg_ParseTuple($2, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$y];
      var $6 = HEAP[$x];
      var $7 = HEAP[$len];
      var $8 = _check_multiply($7, $6, $5);
      
      if ($8 == 0) {
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
      
      
      
      var $13 = HEAP[$x] * HEAP[$y] * 4;
      HEAP[$nlen] = $13;
      var $14 = HEAP[$y];
      var $15 = HEAP[$x];
      var $16 = HEAP[$nlen];
      var $17 = _check_multiply_size($16, $15, __str2, $14, __str3, 4);
      
      if ($17 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 6:
      var $19 = HEAP[$nlen];
      var $20 = _PyString_FromStringAndSize(0, $19);
      HEAP[$rv] = $20;
      
      
      if (HEAP[$rv] == 0) {
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
      var $23 = HEAP[$rv];
      var $24 = _PyString_AsString($23);
      HEAP[$ncp] = $24;
      HEAP[$i] = 0;
      __label__ = 13;
      break;
     case 9:
      var $25 = HEAP[$cp];
      var $26 = HEAP[$25];
      HEAP[$value] = $26;
      var $27 = $25 + 1;
      HEAP[$cp] = $27;
      
      
      
      var $31 = HEAP[$value] >>> 5 & 7;
      HEAP[$r] = $31;
      
      
      var $34 = HEAP[$value] & 7;
      HEAP[$g] = $34;
      
      
      
      var $38 = HEAP[$value] >>> 3 & 3;
      HEAP[$b] = $38;
      
      
      
      
      
      
      
      var $46 = HEAP[$r] << 5 | HEAP[$r] << 3 | HEAP[$r] >> 1;
      HEAP[$r] = $46;
      
      
      
      
      
      
      
      var $54 = HEAP[$g] << 5 | HEAP[$g] << 3 | HEAP[$g] >> 1;
      HEAP[$g] = $54;
      
      
      
      
      
      
      
      
      
      var $64 = HEAP[$b] << 6 | HEAP[$b] << 4 | HEAP[$b] << 2 | HEAP[$b];
      HEAP[$b] = $64;
      
      
      if (HEAP[$backward_compatible] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      var $73 = HEAP[$g] << 8 | HEAP[$r] | HEAP[$b] << 16;
      HEAP[$nvalue] = $73;
      
      var $75 = HEAP[$ncp];
      var $76 = HEAP[$nvalue];
      HEAP[$75] = $76;
      
      var $78 = HEAP[$ncp] + 4;
      HEAP[$ncp] = $78;
      __label__ = 12;
      break;
     case 11:
      var $79 = HEAP[$ncp];
      HEAP[$79] = 0;
      
      var $81 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $81;
      
      var $83 = HEAP[$b] & 255;
      var $84 = HEAP[$ncp];
      HEAP[$84] = $83;
      
      var $86 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $86;
      
      var $88 = HEAP[$g] & 255;
      var $89 = HEAP[$ncp];
      HEAP[$89] = $88;
      
      var $91 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $91;
      
      var $93 = HEAP[$r] & 255;
      var $94 = HEAP[$ncp];
      HEAP[$94] = $93;
      
      var $96 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $96;
      __label__ = 12;
      break;
     case 12:
      
      var $98 = HEAP[$i] + 1;
      HEAP[$i] = $98;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      var $102 = HEAP[$rv];
      HEAP[$0] = $102;
      __label__ = 15;
      break;
     case 15:
      var $103 = HEAP[$0];
      HEAP[$retval] = $103;
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
  function _imageop_rgb2grey($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 72;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $y = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $nlen = __stackBase__ + 28;
      var $cp = __stackBase__ + 32;
      var $ncp = __stackBase__ + 36;
      var $rv = __stackBase__ + 40;
      var $i = __stackBase__ + 44;
      var $r = __stackBase__ + 48;
      var $g = __stackBase__ + 52;
      var $b = __stackBase__ + 56;
      var $nvalue = __stackBase__ + 60;
      var $backward_compatible = __stackBase__ + 64;
      var $value = __stackBase__ + 68;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = _imageop_backward_compatible();
      HEAP[$backward_compatible] = $1;
      var $2 = HEAP[$args_addr];
      var $3 = _PyArg_ParseTuple($2, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$y];
      var $6 = HEAP[$x];
      var $7 = HEAP[$len];
      var $8 = _check_multiply_size($7, $6, __str2, $5, __str3, 4);
      
      if ($8 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 4:
      
      
      var $12 = HEAP[$x] * HEAP[$y];
      HEAP[$nlen] = $12;
      var $13 = HEAP[$y];
      var $14 = HEAP[$x];
      var $15 = HEAP[$nlen];
      var $16 = _check_multiply($15, $14, $13);
      
      if ($16 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 6:
      var $18 = HEAP[$nlen];
      var $19 = _PyString_FromStringAndSize(0, $18);
      HEAP[$rv] = $19;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 8:
      var $22 = HEAP[$rv];
      var $23 = _PyString_AsString($22);
      HEAP[$ncp] = $23;
      HEAP[$i] = 0;
      __label__ = 15;
      break;
     case 9:
      
      
      if (HEAP[$backward_compatible] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      var $28 = HEAP[HEAP[$cp]];
      HEAP[$value] = $28;
      
      var $30 = HEAP[$cp] + 4;
      HEAP[$cp] = $30;
      
      
      
      
      
      
      var $37 = (HEAP[$value] & 255) / 255 * 7 + .5 | 0;
      HEAP[$r] = $37;
      
      
      
      
      
      
      
      var $45 = (HEAP[$value] >>> 8 & 255) / 255 * 7 + .5 | 0;
      HEAP[$g] = $45;
      
      
      
      
      
      
      
      var $53 = (HEAP[$value] >>> 16 & 255) / 255 * 3 + .5 | 0;
      HEAP[$b] = $53;
      __label__ = 12;
      break;
     case 11:
      
      var $55 = HEAP[$cp] + 1;
      HEAP[$cp] = $55;
      var $56 = HEAP[$cp];
      
      var $58 = HEAP[$56];
      HEAP[$b] = $58;
      var $59 = $56 + 1;
      HEAP[$cp] = $59;
      var $60 = HEAP[$cp];
      
      var $62 = HEAP[$60];
      HEAP[$g] = $62;
      var $63 = $60 + 1;
      HEAP[$cp] = $63;
      var $64 = HEAP[$cp];
      
      var $66 = HEAP[$64];
      HEAP[$r] = $66;
      var $67 = $64 + 1;
      HEAP[$cp] = $67;
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      
      
      
      
      
      
      
      var $79 = HEAP[$r] * .3 + HEAP[$g] * .59 + HEAP[$b] * .11 | 0;
      HEAP[$nvalue] = $79;
      
      
      if (HEAP[$nvalue] > 255) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$nvalue] = 255;
      __label__ = 14;
      break;
     case 14:
      
      var $83 = HEAP[$nvalue] & 255;
      var $84 = HEAP[$ncp];
      HEAP[$84] = $83;
      
      var $86 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $86;
      
      var $88 = HEAP[$i] + 1;
      HEAP[$i] = $88;
      __label__ = 15;
      break;
     case 15:
      
      
      
      if (HEAP[$i] < HEAP[$nlen]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $92 = HEAP[$rv];
      HEAP[$0] = $92;
      __label__ = 17;
      break;
     case 17:
      var $93 = HEAP[$0];
      HEAP[$retval] = $93;
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
  function _imageop_grey2rgb($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 53;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 53);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      var $y = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $nlen = __stackBase__ + 28;
      var $cp = __stackBase__ + 32;
      var $ncp = __stackBase__ + 36;
      var $rv = __stackBase__ + 40;
      var $i = __stackBase__ + 44;
      var $value = __stackBase__ + 48;
      var $backward_compatible = __stackBase__ + 49;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = _imageop_backward_compatible();
      HEAP[$backward_compatible] = $1;
      var $2 = HEAP[$args_addr];
      var $3 = _PyArg_ParseTuple($2, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$y];
      var $6 = HEAP[$x];
      var $7 = HEAP[$len];
      var $8 = _check_multiply($7, $6, $5);
      
      if ($8 == 0) {
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
      
      
      
      var $13 = HEAP[$x] * HEAP[$y] * 4;
      HEAP[$nlen] = $13;
      var $14 = HEAP[$y];
      var $15 = HEAP[$x];
      var $16 = HEAP[$nlen];
      var $17 = _check_multiply_size($16, $15, __str2, $14, __str3, 4);
      
      if ($17 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 6:
      var $19 = HEAP[$nlen];
      var $20 = _PyString_FromStringAndSize(0, $19);
      HEAP[$rv] = $20;
      
      
      if (HEAP[$rv] == 0) {
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
      var $23 = HEAP[$rv];
      var $24 = _PyString_AsString($23);
      HEAP[$ncp] = $24;
      HEAP[$i] = 0;
      __label__ = 13;
      break;
     case 9:
      var $25 = HEAP[$cp];
      var $26 = HEAP[$25];
      HEAP[$value] = $26;
      var $27 = $25 + 1;
      HEAP[$cp] = $27;
      
      
      if (HEAP[$backward_compatible] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $31 = HEAP[$ncp];
      
      
      
      
      
      
      
      
      
      var $41 = HEAP[$value] | HEAP[$value] << 8 | HEAP[$value] << 16;
      HEAP[$31] = $41;
      
      var $43 = HEAP[$ncp] + 4;
      HEAP[$ncp] = $43;
      __label__ = 12;
      break;
     case 11:
      var $44 = HEAP[$ncp];
      HEAP[$44] = 0;
      
      var $46 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $46;
      var $47 = HEAP[$ncp];
      var $48 = HEAP[$value];
      HEAP[$47] = $48;
      
      var $50 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $50;
      var $51 = HEAP[$ncp];
      var $52 = HEAP[$value];
      HEAP[$51] = $52;
      
      var $54 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $54;
      var $55 = HEAP[$ncp];
      var $56 = HEAP[$value];
      HEAP[$55] = $56;
      
      var $58 = HEAP[$ncp] + 1;
      HEAP[$ncp] = $58;
      __label__ = 12;
      break;
     case 12:
      
      var $60 = HEAP[$i] + 1;
      HEAP[$i] = $60;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (HEAP[$i] < HEAP[$len]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      var $64 = HEAP[$rv];
      HEAP[$0] = $64;
      __label__ = 15;
      break;
     case 15:
      var $65 = HEAP[$0];
      HEAP[$retval] = $65;
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
  function _initimageop() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      
      
      
      if (HEAP[_Py_Py3kWarningFlag] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $2 = HEAP[_PyExc_DeprecationWarning];
      var $3 = _PyErr_WarnEx($2, __str33, 2);
      
      if ($3 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $5 = _Py_InitModule4(__str34, _imageop_methods, 0, 0, 1013);
      HEAP[$m] = $5;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $8 = HEAP[$m];
      var $9 = _PyModule_GetDict($8);
      HEAP[_ImageopDict] = $9;
      var $10 = _PyErr_NewException(__str35, 0, 0);
      HEAP[_ImageopError] = $10;
      
      
      if (HEAP[_ImageopError] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $13 = HEAP[_ImageopError];
      var $14 = HEAP[_ImageopDict];
      var $15 = _PyDict_SetItemString($14, __str36, $13);
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
  Module["_initimageop"] = _initimageop;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _imageop_crop, 0, _imageop_scale, 0, _imageop_grey2mono, 0, _imageop_grey2grey2, 0, _imageop_grey2grey4, 0, _imageop_dither2mono, 0, _imageop_dither2grey2, 0, _imageop_mono2grey, 0, _imageop_grey22grey, 0, _imageop_grey42grey, 0, _imageop_tovideo, 0, _imageop_rgb2rgb8, 0, _imageop_rgb82rgb, 0, _imageop_rgb2grey, 0, _imageop_grey2rgb, 0 ]);
  function run(args) {
    __str = allocate([ 37, 115, 32, 118, 97, 108, 117, 101, 32, 105, 115, 32, 110, 101, 103, 97, 116, 105, 118, 101, 32, 111, 114, 32, 110, 117, 108, 0 ], "i8", ALLOC_NORMAL);
    _ImageopError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str1 = allocate([ 83, 116, 114, 105, 110, 103, 32, 104, 97, 115, 32, 105, 110, 99, 111, 114, 114, 101, 99, 116, 32, 108, 101, 110, 103, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 120, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 121, 0 ], "i8", ALLOC_NORMAL);
    _ImageopDict = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _bcos_8298 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str4 = allocate([ 98, 97, 99, 107, 119, 97, 114, 100, 95, 99, 111, 109, 112, 97, 116, 105, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 115, 35, 105, 105, 105, 105, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 83, 105, 122, 101, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 49, 44, 32, 50, 32, 111, 114, 32, 52, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 97, 98, 115, 40, 110, 101, 119, 120, 50, 45, 110, 101, 119, 120, 49, 41, 43, 49, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 97, 98, 115, 40, 110, 101, 119, 121, 50, 45, 110, 101, 119, 121, 49, 41, 43, 49, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 115, 35, 105, 105, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 110, 101, 119, 120, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 110, 101, 119, 121, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 115, 35, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 83, 105, 122, 101, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 49, 32, 111, 114, 32, 52, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 109, 97, 120, 121, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 115, 35, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 115, 35, 105, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 99, 114, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 115, 99, 97, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 103, 114, 101, 121, 50, 109, 111, 110, 111, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 103, 114, 101, 121, 50, 103, 114, 101, 121, 50, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 103, 114, 101, 121, 50, 103, 114, 101, 121, 52, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 100, 105, 116, 104, 101, 114, 50, 109, 111, 110, 111, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 100, 105, 116, 104, 101, 114, 50, 103, 114, 101, 121, 50, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 109, 111, 110, 111, 50, 103, 114, 101, 121, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 103, 114, 101, 121, 50, 50, 103, 114, 101, 121, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 103, 114, 101, 121, 52, 50, 103, 114, 101, 121, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 116, 111, 118, 105, 100, 101, 111, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 114, 103, 98, 50, 114, 103, 98, 56, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 114, 103, 98, 56, 50, 114, 103, 98, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 114, 103, 98, 50, 103, 114, 101, 121, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 103, 114, 101, 121, 50, 114, 103, 98, 0 ], "i8", ALLOC_NORMAL);
    _imageop_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str33 = allocate([ 116, 104, 101, 32, 105, 109, 97, 103, 101, 111, 112, 32, 109, 111, 100, 117, 108, 101, 32, 104, 97, 115, 32, 98, 101, 101, 110, 32, 114, 101, 109, 111, 118, 101, 100, 32, 105, 110, 32, 80, 121, 116, 104, 111, 110, 32, 51, 46, 48, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 105, 109, 97, 103, 101, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 105, 109, 97, 103, 101, 111, 112, 46, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_imageop_methods] = __str18;
    HEAP[_imageop_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_imageop_methods + 16] = __str19;
    HEAP[_imageop_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_imageop_methods + 32] = __str20;
    HEAP[_imageop_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_imageop_methods + 48] = __str21;
    HEAP[_imageop_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_imageop_methods + 64] = __str22;
    HEAP[_imageop_methods + 68] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_imageop_methods + 80] = __str23;
    HEAP[_imageop_methods + 84] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_imageop_methods + 96] = __str24;
    HEAP[_imageop_methods + 100] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_imageop_methods + 112] = __str25;
    HEAP[_imageop_methods + 116] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_imageop_methods + 128] = __str26;
    HEAP[_imageop_methods + 132] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_imageop_methods + 144] = __str27;
    HEAP[_imageop_methods + 148] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_imageop_methods + 160] = __str28;
    HEAP[_imageop_methods + 164] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_imageop_methods + 176] = __str29;
    HEAP[_imageop_methods + 180] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_imageop_methods + 192] = __str30;
    HEAP[_imageop_methods + 196] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_imageop_methods + 208] = __str31;
    HEAP[_imageop_methods + 212] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_imageop_methods + 224] = __str32;
    HEAP[_imageop_methods + 228] = FUNCTION_TABLE_OFFSET + 30;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
