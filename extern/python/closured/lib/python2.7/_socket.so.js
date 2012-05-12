"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 16;
  var $1___SIZE = 16;
  var $2___SIZE = 12;
  var $3___SIZE = 400;
  var $4___SIZE = 16;
  var $5___SIZE = 100;
  var $6___SIZE = 20;
  var $7___SIZE = 196;
  var $8___SIZE = 352;
  var $9___SIZE = 4;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PySocketModule_APIObject___SIZE = 8;
  var $struct_PySocketSockObject___SIZE = 36;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_addrinfo___SIZE = 32;
  var $struct_anon___SIZE = 12;
  var $struct_hostent___SIZE = 20;
  var $struct_ifmap___SIZE = 16;
  var $struct_ifmap___FLATTENER = [ 0, 4, 8, 10, 11, 12 ];
  var $struct_ifreq___SIZE = 32;
  var $struct_in6_addr___SIZE = 16;
  var $struct_in_addr___SIZE = 4;
  var $struct_pollfd___SIZE = 8;
  var $struct_pollfd___FLATTENER = [ 0, 4, 6 ];
  var $struct_protoent___SIZE = 12;
  var $struct_servent___SIZE = 16;
  var $struct_sockaddr___SIZE = 16;
  var $struct_sockaddr_at___SIZE = 0;
  var $struct_sockaddr_at___FLATTENER = [];
  var $struct_sockaddr_ax25___SIZE = 0;
  var $struct_sockaddr_ax25___FLATTENER = [];
  var $struct_sockaddr_dl___SIZE = 0;
  var $struct_sockaddr_dl___FLATTENER = [];
  var $struct_sockaddr_eon___SIZE = 0;
  var $struct_sockaddr_eon___FLATTENER = [];
  var $struct_sockaddr_in___SIZE = 16;
  var $struct_sockaddr_in___FLATTENER = [ 0, 2, 4, 8 ];
  var $struct_sockaddr_in6___SIZE = 28;
  var $struct_sockaddr_in6___FLATTENER = [ 0, 2, 4, 8, 24 ];
  var $struct_sockaddr_inarp___SIZE = 0;
  var $struct_sockaddr_inarp___FLATTENER = [];
  var $struct_sockaddr_ipx___SIZE = 0;
  var $struct_sockaddr_ipx___FLATTENER = [];
  var $struct_sockaddr_iso___SIZE = 0;
  var $struct_sockaddr_iso___FLATTENER = [];
  var $struct_sockaddr_ll___SIZE = 20;
  var $struct_sockaddr_ll___FLATTENER = [ 0, 2, 4, 8, 10, 11, 12 ];
  var $struct_sockaddr_nl___SIZE = 12;
  var $struct_sockaddr_nl___FLATTENER = [ 0, 2, 4, 8 ];
  var $struct_sockaddr_ns___SIZE = 0;
  var $struct_sockaddr_ns___FLATTENER = [];
  var $struct_sockaddr_storage___SIZE = 128;
  var $struct_sockaddr_tipc___SIZE = 16;
  var $struct_sockaddr_tipc___FLATTENER = [ 0, 2, 3, 4 ];
  var $struct_sockaddr_un___SIZE = 110;
  var $struct_sockaddr_x25___SIZE = 0;
  var $struct_sockaddr_x25___FLATTENER = [];
  var $struct_tipc_name___SIZE = 8;
  var $struct_tipc_name_seq___SIZE = 12;
  var $struct_tipc_portid___SIZE = 8;
  var $union_anon___SIZE = 16;
  var $union_sock_addr_t___SIZE = 128;
  var _sock_doc;
  var _socket_error;
  var __str;
  var __str1;
  var _socket_herror;
  var _socket_gaierror;
  var _defaulttimeout;
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
  var __str33;
  var __str34;
  var _socket_timeout;
  var __str35;
  var _accept_doc;
  var _setblocking_doc;
  var __str36;
  var _settimeout_doc;
  var _gettimeout_doc;
  var __str37;
  var __str38;
  var _setsockopt_doc;
  var __str39;
  var __str40;
  var _getsockopt_doc;
  var _bind_doc;
  var _close_doc;
  var _connect_doc;
  var _connect_ex_doc;
  var _fileno_doc;
  var _dup_doc;
  var _getsockname_doc;
  var _getpeername_doc;
  var _listen_doc;
  var __str41;
  var __str42;
  var __str43;
  var _makefile_doc;
  var __str44;
  var __str45;
  var _recv_doc;
  var __str46;
  var _kwlist_10803;
  var __str47;
  var __str48;
  var __str49;
  var __str50;
  var __str51;
  var ___PRETTY_FUNCTION___10809;
  var __str52;
  var __str53;
  var _recv_into_doc;
  var __str54;
  var __str55;
  var _recvfrom_doc;
  var __str56;
  var _kwlist_10950;
  var ___PRETTY_FUNCTION___10957;
  var __str57;
  var __str58;
  var _recvfrom_into_doc;
  var __str59;
  var _send_doc;
  var __str60;
  var _sendall_doc;
  var __str61;
  var __str62;
  var __str63;
  var _sendto_doc;
  var _shutdown_doc;
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
  var __str75;
  var __str76;
  var __str77;
  var __str78;
  var __str79;
  var __str80;
  var __str81;
  var __str82;
  var __str83;
  var __str84;
  var __str85;
  var __str86;
  var __str87;
  var _sock_methods;
  var __str88;
  var __str89;
  var __str90;
  var __str91;
  var __str92;
  var __str93;
  var __str94;
  var __str95;
  var _sock_memberlist;
  var __str96;
  var __str97;
  var _keywords_11197;
  var __str98;
  var _sock_type;
  var _gethostname_doc;
  var __str99;
  var _gethostbyname_doc;
  var __str100;
  var __str101;
  var _ghbn_ex_doc;
  var __str102;
  var _gethostbyaddr_doc;
  var __str103;
  var __str104;
  var _getservbyname_doc;
  var __str105;
  var __str106;
  var __str107;
  var _getservbyport_doc;
  var __str108;
  var __str109;
  var _getprotobyname_doc;
  var __str110;
  var _socketpair_doc;
  var __str111;
  var _fromfd_doc;
  var __str112;
  var __str113;
  var _ntohs_doc;
  var __str114;
  var _ntohl_doc;
  var __str115;
  var _htons_doc;
  var _htonl_doc;
  var _inet_aton_doc;
  var __str116;
  var __str117;
  var _inet_ntoa_doc;
  var __str118;
  var __str119;
  var _inet_pton_doc;
  var __str120;
  var __str121;
  var _inet_ntop_doc;
  var __str122;
  var __str123;
  var __str124;
  var __str125;
  var __str126;
  var __str127;
  var __str128;
  var __str129;
  var __str130;
  var __str131;
  var _getaddrinfo_doc;
  var __str132;
  var __str133;
  var __str134;
  var __str135;
  var __str136;
  var __str137;
  var __str138;
  var _getnameinfo_doc;
  var _getdefaulttimeout_doc;
  var _setdefaulttimeout_doc;
  var __str139;
  var __str140;
  var __str141;
  var __str142;
  var __str143;
  var __str144;
  var __str145;
  var __str146;
  var __str147;
  var __str148;
  var __str149;
  var __str150;
  var __str151;
  var __str152;
  var __str153;
  var __str154;
  var __str155;
  var __str156;
  var __str157;
  var __str158;
  var __str159;
  var _socket_methods;
  var _PySocketModuleAPI;
  var _socket_doc;
  var __str160;
  var __str161;
  var __str162;
  var __str163;
  var __str164;
  var __str165;
  var __str166;
  var __str167;
  var __str168;
  var __str169;
  var __str170;
  var __str171;
  var __str172;
  var __str173;
  var __str174;
  var __str175;
  var __str176;
  var __str177;
  var __str178;
  var __str179;
  var __str180;
  var __str181;
  var __str182;
  var __str183;
  var __str184;
  var __str185;
  var __str186;
  var __str187;
  var __str188;
  var __str189;
  var __str190;
  var __str191;
  var __str192;
  var __str193;
  var __str194;
  var __str195;
  var __str196;
  var __str197;
  var __str198;
  var __str199;
  var __str200;
  var __str201;
  var __str202;
  var __str203;
  var __str204;
  var __str205;
  var __str206;
  var __str207;
  var __str208;
  var __str209;
  var __str210;
  var __str211;
  var __str212;
  var __str213;
  var __str214;
  var __str215;
  var __str216;
  var __str217;
  var __str218;
  var __str219;
  var __str220;
  var __str221;
  var __str222;
  var __str223;
  var __str224;
  var __str225;
  var __str226;
  var __str227;
  var __str228;
  var __str229;
  var __str230;
  var __str231;
  var __str232;
  var __str233;
  var __str234;
  var __str235;
  var __str236;
  var __str237;
  var __str238;
  var __str239;
  var __str240;
  var __str241;
  var __str242;
  var __str243;
  var __str244;
  var __str245;
  var __str246;
  var __str247;
  var __str248;
  var __str249;
  var __str250;
  var __str251;
  var __str252;
  var __str253;
  var __str254;
  var __str255;
  var __str256;
  var __str257;
  var __str258;
  var __str259;
  var __str260;
  var __str261;
  var __str262;
  var __str263;
  var __str264;
  var __str265;
  var __str266;
  var __str267;
  var __str268;
  var __str269;
  var __str270;
  var __str271;
  var __str272;
  var __str273;
  var __str274;
  var __str275;
  var __str276;
  var __str277;
  var __str278;
  var __str279;
  var __str280;
  var __str281;
  var __str282;
  var __str283;
  var __str284;
  var __str285;
  var __str286;
  var __str287;
  var __str288;
  var __str289;
  var __str290;
  var __str291;
  var __str292;
  var __str293;
  var __str294;
  var __str295;
  var __str296;
  var __str297;
  var __str298;
  var __str299;
  var __str300;
  var __str301;
  var __str302;
  var __str303;
  var __str304;
  var __str305;
  var __str306;
  var __str307;
  var __str308;
  var __str309;
  var __str310;
  var __str311;
  var __str312;
  var __str313;
  var __str314;
  var __str315;
  var __str316;
  var __str317;
  var __str318;
  var __str319;
  var __str320;
  var __str321;
  var __str322;
  var __str323;
  var __str324;
  var __str325;
  var __str326;
  var __str327;
  var __str328;
  var __str329;
  var __str330;
  var __str331;
  var __str332;
  var __str333;
  var __str334;
  var __str335;
  var __str336;
  var __str337;
  var __str338;
  var __str339;
  var __str340;
  var __str341;
  var __str342;
  var __str343;
  var __str344;
  var __str345;
  var __str346;
  var __str347;
  var __str348;
  var __str349;
  var __str350;
  var __str351;
  var __str352;
  var __str353;
  var __str354;
  var __str355;
  var __str356;
  var __str357;
  var __str358;
  var __str359;
  var __str360;
  var __str361;
  var __str362;
  var __str363;
  var __str364;
  var __str365;
  var __str366;
  var __str367;
  var __str368;
  var __str369;
  var __str370;
  var __str371;
  var __str372;
  var __str373;
  var __str374;
  var __str375;
  var __str376;
  var __str377;
  var __str378;
  var __str379;
  var __str380;
  var __str381;
  var __str382;
  var __str383;
  var __str384;
  function _select_error() {
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
      
      var $1 = HEAP[_socket_error];
      _PyErr_SetString($1, __str);
      HEAP[$0] = 0;
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
  function _set_error() {
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
      
      var $1 = HEAP[_socket_error];
      var $2 = _PyErr_SetFromErrno($1);
      HEAP[$0] = $2;
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
  function _set_herror($h_error) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $h_error_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $v = __stackBase__ + 12;
      
      HEAP[$h_error_addr] = $h_error;
      var $1 = HEAP[$h_error_addr];
      var $2 = _hstrerror($1);
      var $3 = HEAP[$h_error_addr];
      var $4 = _Py_BuildValue(__str1, allocate([ $3, 0, 0, 0, $2, 0, 0, 0 ], [ "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$v] = $4;
      
      
      if (HEAP[$v] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $7 = HEAP[_socket_herror];
      var $8 = HEAP[$v];
      _PyErr_SetObject($7, $8);
      
      
      
      var $12 = HEAP[HEAP[$v]] - 1;
      
      var $14 = HEAP[$v];
      HEAP[$14] = $12;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $24 = HEAP[$v];
      FUNCTION_TABLE[$23]($24);
      __label__ = 3;
      break;
     case 3:
      HEAP[$0] = 0;
      var $25 = HEAP[$0];
      HEAP[$retval] = $25;
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
  function _set_gaierror($error) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $error_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $v = __stackBase__ + 12;
      
      HEAP[$error_addr] = $error;
      
      var $2 = HEAP[$error_addr] == -11;
      if ($2) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = _set_error();
      HEAP[$0] = $3;
      __label__ = 6;
      break;
     case 2:
      var $4 = HEAP[$error_addr];
      var $5 = _gai_strerror($4);
      var $6 = HEAP[$error_addr];
      var $7 = _Py_BuildValue(__str1, allocate([ $6, 0, 0, 0, $5, 0, 0, 0 ], [ "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$v] = $7;
      
      
      if (HEAP[$v] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $10 = HEAP[_socket_gaierror];
      var $11 = HEAP[$v];
      _PyErr_SetObject($10, $11);
      
      
      
      var $15 = HEAP[HEAP[$v]] - 1;
      
      var $17 = HEAP[$v];
      HEAP[$17] = $15;
      
      
      
      
      if (HEAP[HEAP[$v]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $26 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $27 = HEAP[$v];
      FUNCTION_TABLE[$26]($27);
      __label__ = 5;
      break;
     case 5:
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
  function _internal_setblocking($s, $block) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $block_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $delay_flag = __stackBase__ + 16;
      
      HEAP[$s_addr] = $s;
      HEAP[$block_addr] = $block;
      
      
      var $3 = HEAP[HEAP[$s_addr] + 8];
      var $4 = _fcntl($3, 3, allocate(4, "i32", ALLOC_STACK));
      HEAP[$delay_flag] = $4;
      
      
      if (HEAP[$block_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $8 = HEAP[$delay_flag] & -2049;
      HEAP[$delay_flag] = $8;
      __label__ = 3;
      break;
     case 2:
      
      var $10 = HEAP[$delay_flag] | 2048;
      HEAP[$delay_flag] = $10;
      __label__ = 3;
      break;
     case 3:
      
      
      var $13 = HEAP[HEAP[$s_addr] + 8];
      var $14 = HEAP[$delay_flag];
      var $15 = _fcntl($13, 4, allocate([ $14, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 1;
      var $16 = HEAP[$0];
      HEAP[$retval] = $16;
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
  function _internal_select($s, $writing) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 34;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 34);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $writing_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_4 = __stackBase__ + 12;
      var $0 = __stackBase__ + 14;
      var $n = __stackBase__ + 18;
      var $pollfd = __stackBase__ + 22;
      var $timeout = __stackBase__ + 30;
      
      HEAP[$s_addr] = $s;
      HEAP[$writing_addr] = $writing;
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 28] <= 0) {
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
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 8] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 4:
      
      
      var $11 = HEAP[HEAP[$s_addr] + 8];
      
      HEAP[$pollfd] = $11;
      
      
      if (HEAP[$writing_addr] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$iftmp_4] = 4;
      __label__ = 7;
      break;
     case 6:
      HEAP[$iftmp_4] = 1;
      __label__ = 7;
      break;
     case 7:
      
      var $16 = HEAP[$iftmp_4];
      HEAP[$pollfd + 4] = $16;
      
      
      
      
      
      var $22 = HEAP[HEAP[$s_addr] + 28] * 1e3 + .5 | 0;
      HEAP[$timeout] = $22;
      var $23 = HEAP[$timeout];
      var $24 = _poll($pollfd, 1, $23);
      HEAP[$n] = $24;
      
      
      if (HEAP[$n] < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$0] = -1;
      __label__ = 12;
      break;
     case 9:
      
      
      if (HEAP[$n] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = 1;
      __label__ = 12;
      break;
     case 11:
      HEAP[$0] = 0;
      __label__ = 12;
      break;
     case 12:
      var $29 = HEAP[$0];
      HEAP[$retval] = $29;
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
  function _init_sockobject($s, $fd, $family, $type, $proto) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $fd_addr = __stackBase__ + 4;
      var $family_addr = __stackBase__ + 8;
      var $type_addr = __stackBase__ + 12;
      var $proto_addr = __stackBase__ + 16;
      
      HEAP[$s_addr] = $s;
      HEAP[$fd_addr] = $fd;
      HEAP[$family_addr] = $family;
      HEAP[$type_addr] = $type;
      HEAP[$proto_addr] = $proto;
      
      var $1 = HEAP[$s_addr] + 8;
      var $2 = HEAP[$fd_addr];
      HEAP[$1] = $2;
      
      var $4 = HEAP[$s_addr] + 12;
      var $5 = HEAP[$family_addr];
      HEAP[$4] = $5;
      
      var $7 = HEAP[$s_addr] + 16;
      var $8 = HEAP[$type_addr];
      HEAP[$7] = $8;
      
      var $10 = HEAP[$s_addr] + 20;
      var $11 = HEAP[$proto_addr];
      HEAP[$10] = $11;
      var $12 = HEAP[_defaulttimeout];
      
      var $14 = HEAP[$s_addr] + 28;
      HEAP[$14] = $12;
      
      var $16 = HEAP[$s_addr] + 24;
      HEAP[$16] = FUNCTION_TABLE_OFFSET + 2;
      
      
      if (HEAP[_defaulttimeout] >= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $19 = HEAP[$s_addr];
      var $20 = _internal_setblocking($19, 0);
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
  function _new_sockobject($fd, $family, $type, $proto) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $fd_addr = __stackBase__;
      var $family_addr = __stackBase__ + 4;
      var $type_addr = __stackBase__ + 8;
      var $proto_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $s = __stackBase__ + 24;
      
      HEAP[$fd_addr] = $fd;
      HEAP[$family_addr] = $family;
      HEAP[$type_addr] = $type;
      HEAP[$proto_addr] = $proto;
      var $1 = _PyType_GenericNew(_sock_type, 0, 0);
      
      HEAP[$s] = $1;
      
      
      if (HEAP[$s] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[$s];
      var $6 = HEAP[$fd_addr];
      var $7 = HEAP[$family_addr];
      var $8 = HEAP[$type_addr];
      var $9 = HEAP[$proto_addr];
      _init_sockobject($5, $6, $7, $8, $9);
      __label__ = 2;
      break;
     case 2:
      var $10 = HEAP[$s];
      HEAP[$0] = $10;
      var $11 = HEAP[$0];
      HEAP[$retval] = $11;
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
  function _setipaddr($name, $addr_ret, $addr_ret_size, $af) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 93;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 93);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $name_addr = __stackBase__;
      var $addr_ret_addr = __stackBase__ + 4;
      var $addr_ret_size_addr = __stackBase__ + 8;
      var $af_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $hints = __stackBase__ + 24;
      var $res = __stackBase__ + 56;
      var $error = __stackBase__ + 60;
      var $d1 = __stackBase__ + 64;
      var $d2 = __stackBase__ + 68;
      var $d3 = __stackBase__ + 72;
      var $d4 = __stackBase__ + 76;
      var $ch = __stackBase__ + 80;
      var $siz = __stackBase__ + 81;
      var $sin = __stackBase__ + 85;
      var $sin28 = __stackBase__ + 89;
      
      HEAP[$name_addr] = $name;
      HEAP[$addr_ret_addr] = $addr_ret;
      HEAP[$addr_ret_size_addr] = $addr_ret_size;
      HEAP[$af_addr] = $af;
      
      var $2 = HEAP[$addr_ret_addr];
      _llvm_memset_p0i8_i32($2, 0, 16, 1, 0);
      
      
      
      
      if (HEAP[HEAP[$name_addr]] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 1:
      var $hints1 = $hints;
      _llvm_memset_p0i8_i32($hints1, 0, 32, 1, 0);
      
      var $8 = HEAP[$af_addr];
      HEAP[$hints + 4] = $8;
      
      HEAP[$hints + 8] = 2;
      
      HEAP[$hints] = 1;
      var $11 = _getaddrinfo(0, __str2, $hints, $res);
      HEAP[$error] = $11;
      
      
      if (HEAP[$error] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $14 = HEAP[$error];
      var $15 = _set_gaierror($14);
      HEAP[$0] = -1;
      __label__ = 36;
      break;
     case 3:
      
      
      var $18 = HEAP[HEAP[$res] + 4];
      if ($18 == 2) {
        __label__ = 4;
        break;
      } else if ($18 == 10) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      HEAP[$siz] = 4;
      __label__ = 7;
      break;
     case 5:
      HEAP[$siz] = 16;
      __label__ = 7;
      break;
     case 6:
      var $19 = HEAP[$res];
      _freeaddrinfo($19);
      var $20 = HEAP[_socket_error];
      _PyErr_SetString($20, __str3);
      HEAP[$0] = -1;
      __label__ = 36;
      break;
     case 7:
      
      
      
      
      if (HEAP[HEAP[$res] + 28] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $25 = HEAP[$res];
      _freeaddrinfo($25);
      var $26 = HEAP[_socket_error];
      _PyErr_SetString($26, __str4);
      HEAP[$0] = -1;
      __label__ = 36;
      break;
     case 9:
      
      
      
      
      
      if (HEAP[HEAP[$res] + 16] < HEAP[$addr_ret_size_addr]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      var $34 = HEAP[HEAP[$res] + 16];
      HEAP[$addr_ret_size_addr] = $34;
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      var $39 = HEAP[$addr_ret_size_addr];
      var $40 = HEAP[$addr_ret_addr];
      var $41 = HEAP[HEAP[$res] + 20];
      _llvm_memcpy_p0i8_p0i8_i32($40, $41, $39, 1, 0);
      var $42 = HEAP[$res];
      _freeaddrinfo($42);
      var $43 = HEAP[$siz];
      HEAP[$0] = $43;
      __label__ = 36;
      break;
     case 12:
      
      
      
      
      if (HEAP[HEAP[$name_addr]] == 60) {
        __label__ = 13;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 13:
      var $48 = HEAP[$name_addr];
      var $49 = _strcmp($48, __str5);
      
      if ($49 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      
      
      if (HEAP[$af_addr] != 2) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      if (HEAP[$af_addr] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $55 = HEAP[_socket_error];
      _PyErr_SetString($55, __str6);
      HEAP[$0] = -1;
      __label__ = 36;
      break;
     case 17:
      
      var $57 = HEAP[$addr_ret_addr];
      HEAP[$sin] = $57;
      
      var $59 = HEAP[$sin];
      _llvm_memset_p0i8_i32($59, 0, 16, 1, 0);
      
      var $61 = HEAP[$sin];
      HEAP[$61] = 2;
      
      
      var $64 = HEAP[$sin] + 4;
      HEAP[$64] = -1;
      HEAP[$0] = 4;
      __label__ = 36;
      break;
     case 18:
      var $65 = HEAP[$name_addr];
      var $66 = _sscanf($65, __str7, allocate([ $d1, 0, 0, 0, $d2, 0, 0, 0, $d3, 0, 0, 0, $d4, 0, 0, 0, $ch, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($66 == 4) {
        __label__ = 19;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 19:
      
      
      if (HEAP[$d1] >= 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 20:
      
      
      if (HEAP[$d1] <= 255) {
        __label__ = 21;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 21:
      
      
      if (HEAP[$d2] >= 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 22:
      
      
      if (HEAP[$d2] <= 255) {
        __label__ = 23;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 23:
      
      
      if (HEAP[$d3] >= 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 24:
      
      
      if (HEAP[$d3] <= 255) {
        __label__ = 25;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 25:
      
      
      if (HEAP[$d4] >= 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 26:
      
      
      if (HEAP[$d4] <= 255) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      var $85 = HEAP[$addr_ret_addr];
      HEAP[$sin28] = $85;
      
      
      
      
      
      
      
      
      
      var $95 = HEAP[$d1] << 24 | HEAP[$d2] << 16 | HEAP[$d3] << 8 | HEAP[$d4];
      var $96 = _htonl($95);
      
      
      var $99 = HEAP[$sin28] + 4;
      HEAP[$99] = $96;
      
      var $101 = HEAP[$sin28];
      HEAP[$101] = 2;
      HEAP[$0] = 4;
      __label__ = 36;
      break;
     case 28:
      var $hints30 = $hints;
      _llvm_memset_p0i8_i32($hints30, 0, 32, 1, 0);
      
      var $103 = HEAP[$af_addr];
      HEAP[$hints + 4] = $103;
      var $104 = HEAP[$name_addr];
      var $105 = _getaddrinfo($104, 0, $hints, $res);
      HEAP[$error] = $105;
      
      
      if (HEAP[$error] != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $108 = HEAP[$error];
      var $109 = _set_gaierror($108);
      HEAP[$0] = -1;
      __label__ = 36;
      break;
     case 30:
      
      
      
      
      
      if (HEAP[HEAP[$res] + 16] < HEAP[$addr_ret_size_addr]) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      var $117 = HEAP[HEAP[$res] + 16];
      HEAP[$addr_ret_size_addr] = $117;
      __label__ = 32;
      break;
     case 32:
      
      
      
      
      var $122 = HEAP[$addr_ret_size_addr];
      var $123 = HEAP[$addr_ret_addr];
      var $124 = HEAP[HEAP[$res] + 20];
      _llvm_memcpy_p0i8_p0i8_i32($123, $124, $122, 1, 0);
      var $125 = HEAP[$res];
      _freeaddrinfo($125);
      
      
      
      var $129 = HEAP[HEAP[$addr_ret_addr]];
      if ($129 == 2) {
        __label__ = 33;
        break;
      } else if ($129 == 10) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 33:
      HEAP[$0] = 4;
      __label__ = 36;
      break;
     case 34:
      HEAP[$0] = 16;
      __label__ = 36;
      break;
     case 35:
      var $130 = HEAP[_socket_error];
      _PyErr_SetString($130, __str8);
      HEAP[$0] = -1;
      __label__ = 36;
      break;
     case 36:
      var $131 = HEAP[$0];
      HEAP[$retval] = $131;
      __label__ = 37;
      break;
     case 37:
      var $retval39 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval39;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _makeipaddr($addr, $addrlen) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1045;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 1045);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $addr_addr = __stackBase__;
      var $addrlen_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $buf = __stackBase__ + 16;
      var $error = __stackBase__ + 1041;
      
      HEAP[$addr_addr] = $addr;
      HEAP[$addrlen_addr] = $addrlen;
      var $1 = HEAP[$addrlen_addr];
      var $2 = HEAP[$addr_addr];
      var $buf1 = $buf;
      var $3 = _getnameinfo($2, $1, $buf1, 1025, 0, 0, 1);
      HEAP[$error] = $3;
      
      
      if (HEAP[$error] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $6 = HEAP[$error];
      var $7 = _set_gaierror($6);
      HEAP[$0] = 0;
      __label__ = 3;
      break;
     case 2:
      var $buf3 = $buf;
      var $8 = _PyString_FromString($buf3);
      HEAP[$0] = $8;
      __label__ = 3;
      break;
     case 3:
      var $9 = HEAP[$0];
      HEAP[$retval] = $9;
      __label__ = 4;
      break;
     case 4:
      var $retval5 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _makesockaddr($sockfd, $addr, $addrlen, $proto) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 100;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 100);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $sockfd_addr = __stackBase__;
      var $addr_addr = __stackBase__ + 4;
      var $addrlen_addr = __stackBase__ + 8;
      var $proto_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $a = __stackBase__ + 24;
      var $addrobj = __stackBase__ + 28;
      var $ret = __stackBase__ + 32;
      var $a7 = __stackBase__ + 36;
      var $a11 = __stackBase__ + 40;
      var $a13 = __stackBase__ + 44;
      var $addrobj14 = __stackBase__ + 48;
      var $ret15 = __stackBase__ + 52;
      var $a20 = __stackBase__ + 56;
      var $ifname = __stackBase__ + 60;
      var $ifr = __stackBase__ + 64;
      var $a25 = __stackBase__ + 96;
      
      HEAP[$sockfd_addr] = $sockfd;
      HEAP[$addr_addr] = $addr;
      HEAP[$addrlen_addr] = $addrlen;
      HEAP[$proto_addr] = $proto;
      
      
      if (HEAP[$addrlen_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $4 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $4;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 27;
      break;
     case 2:
      
      
      
      var $8 = HEAP[HEAP[$addr_addr]];
      if ($8 == 1) {
        __label__ = 7;
        break;
      } else if ($8 == 2) {
        __label__ = 3;
        break;
      } else if ($8 == 10) {
        __label__ = 11;
        break;
      } else if ($8 == 16) {
        __label__ = 10;
        break;
      } else if ($8 == 17) {
        __label__ = 15;
        break;
      } else if ($8 == 30) {
        __label__ = 19;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 3:
      var $9 = HEAP[$addr_addr];
      var $10 = _makeipaddr($9, 16);
      HEAP[$addrobj] = $10;
      HEAP[$ret] = 0;
      
      
      if (HEAP[$addrobj] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      var $14 = HEAP[$addr_addr];
      HEAP[$a] = $14;
      
      
      
      
      var $19 = HEAP[HEAP[$a] + 2] & 65535;
      var $20 = _ntohs($19);
      var $21 = $20;
      var $22 = HEAP[$addrobj];
      var $23 = _Py_BuildValue(__str9, allocate([ $22, 0, 0, 0, $21, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ret] = $23;
      
      
      
      var $27 = HEAP[HEAP[$addrobj]] - 1;
      
      var $29 = HEAP[$addrobj];
      HEAP[$29] = $27;
      
      
      
      
      if (HEAP[HEAP[$addrobj]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[$addrobj] + 4] + 24];
      var $39 = HEAP[$addrobj];
      FUNCTION_TABLE[$38]($39);
      __label__ = 6;
      break;
     case 6:
      var $40 = HEAP[$ret];
      HEAP[$0] = $40;
      __label__ = 27;
      break;
     case 7:
      
      var $42 = HEAP[$addr_addr];
      HEAP[$a7] = $42;
      
      
      
      
      
      if (HEAP[HEAP[$a7] + 2] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $49 = HEAP[$addrlen_addr] - 2;
      HEAP[$addrlen_addr] = $49;
      
      
      var $52 = HEAP[$a7] + 2;
      var $53 = HEAP[$addrlen_addr];
      var $54 = _PyString_FromStringAndSize($52, $53);
      HEAP[$0] = $54;
      __label__ = 27;
      break;
     case 9:
      
      
      var $57 = HEAP[$a7] + 2;
      var $58 = _PyString_FromString($57);
      HEAP[$0] = $58;
      __label__ = 27;
      break;
     case 10:
      
      var $60 = HEAP[$addr_addr];
      HEAP[$a11] = $60;
      
      
      var $63 = HEAP[HEAP[$a11] + 8];
      
      
      var $66 = HEAP[HEAP[$a11] + 4];
      var $67 = _Py_BuildValue(__str10, allocate([ $66, 0, 0, 0, $63, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $67;
      __label__ = 27;
      break;
     case 11:
      var $68 = HEAP[$addr_addr];
      var $69 = _makeipaddr($68, 28);
      HEAP[$addrobj14] = $69;
      HEAP[$ret15] = 0;
      
      
      if (HEAP[$addrobj14] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      var $73 = HEAP[$addr_addr];
      HEAP[$a13] = $73;
      
      
      var $76 = HEAP[HEAP[$a13] + 24];
      
      
      var $79 = HEAP[HEAP[$a13] + 4];
      
      
      
      
      var $84 = HEAP[HEAP[$a13] + 2] & 65535;
      var $85 = _ntohs($84);
      var $86 = $85;
      var $87 = HEAP[$addrobj14];
      var $88 = _Py_BuildValue(__str11, allocate([ $87, 0, 0, 0, $86, 0, 0, 0, $79, 0, 0, 0, $76, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ret15] = $88;
      
      
      
      var $92 = HEAP[HEAP[$addrobj14]] - 1;
      
      var $94 = HEAP[$addrobj14];
      HEAP[$94] = $92;
      
      
      
      
      if (HEAP[HEAP[$addrobj14]] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $103 = HEAP[HEAP[HEAP[$addrobj14] + 4] + 24];
      var $104 = HEAP[$addrobj14];
      FUNCTION_TABLE[$103]($104);
      __label__ = 14;
      break;
     case 14:
      var $105 = HEAP[$ret15];
      HEAP[$0] = $105;
      __label__ = 27;
      break;
     case 15:
      
      var $107 = HEAP[$addr_addr];
      HEAP[$a20] = $107;
      HEAP[$ifname] = __str12;
      
      
      
      
      if (HEAP[HEAP[$a20] + 4] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      var $114 = HEAP[HEAP[$a20] + 4];
      
      
      
      HEAP[$ifr + 16] = $114;
      var $118 = HEAP[$sockfd_addr];
      var $119 = _ioctl($118, 35088, allocate([ $ifr, 0, 0, 0 ], [ "%struct.ifreq*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($119 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      HEAP[$ifname] = $ifr;
      __label__ = 18;
      break;
     case 18:
      
      
      
      var $127 = HEAP[HEAP[$a20] + 11];
      
      
      var $130 = HEAP[$a20] + 12;
      
      
      
      var $134 = HEAP[HEAP[$a20] + 8];
      
      
      
      var $138 = HEAP[HEAP[$a20] + 10];
      
      
      
      
      var $143 = HEAP[HEAP[$a20] + 2] & 65535;
      var $144 = _ntohs($143);
      var $145 = $144;
      var $146 = HEAP[$ifname];
      var $147 = _Py_BuildValue(__str13, allocate([ $146, 0, 0, 0, $145, 0, 0, 0, $138, 0, 0, 0, $134, 0, 0, 0, $130, 0, 0, 0, $127, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $147;
      __label__ = 27;
      break;
     case 19:
      
      var $149 = HEAP[$addr_addr];
      HEAP[$a25] = $149;
      
      
      
      
      if (HEAP[HEAP[$a25] + 2] == 1) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      var $157 = HEAP[HEAP[$a25] + 3];
      
      
      
      
      var $162 = HEAP[HEAP[$a25] + 4 + 8];
      
      
      
      
      var $167 = HEAP[HEAP[$a25] + 4 + 4];
      
      
      
      
      var $172 = HEAP[HEAP[$a25] + 4];
      
      
      
      var $176 = HEAP[HEAP[$a25] + 2];
      var $177 = _Py_BuildValue(__str14, allocate([ $176, 0, 0, 0, $172, 0, 0, 0, $167, 0, 0, 0, $162, 0, 0, 0, $157, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $177;
      __label__ = 27;
      break;
     case 21:
      
      
      
      
      if (HEAP[HEAP[$a25] + 2] == 2) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      var $185 = HEAP[HEAP[$a25] + 3];
      
      
      
      
      
      
      var $192 = HEAP[HEAP[$a25] + 4 + 4];
      
      
      
      
      
      
      var $199 = HEAP[HEAP[$a25] + 4 + 4];
      
      
      
      
      
      
      var $206 = HEAP[HEAP[$a25] + 4];
      
      
      
      var $210 = HEAP[HEAP[$a25] + 2];
      var $211 = _Py_BuildValue(__str14, allocate([ $210, 0, 0, 0, $206, 0, 0, 0, $199, 0, 0, 0, $192, 0, 0, 0, $185, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $211;
      __label__ = 27;
      break;
     case 23:
      
      
      
      
      if (HEAP[HEAP[$a25] + 2] == 3) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      var $219 = HEAP[HEAP[$a25] + 3];
      
      
      
      
      
      var $225 = HEAP[HEAP[$a25] + 4];
      
      
      
      
      
      var $231 = HEAP[HEAP[$a25] + 4 + 4];
      
      
      
      var $235 = HEAP[HEAP[$a25] + 2];
      var $236 = _Py_BuildValue(__str14, allocate([ $235, 0, 0, 0, $231, 0, 0, 0, $225, 0, 0, 0, 0, 0, 0, 0, $219, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $236;
      __label__ = 27;
      break;
     case 25:
      var $237 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($237, __str15);
      HEAP[$0] = 0;
      __label__ = 27;
      break;
     case 26:
      
      
      var $240 = HEAP[$addr_addr] + 2;
      
      
      
      var $244 = HEAP[HEAP[$addr_addr]];
      var $245 = _Py_BuildValue(__str16, allocate([ $244, 0, 0, 0, $240, 0, 0, 0, 14, 0, 0, 0 ], [ "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $245;
      __label__ = 27;
      break;
     case 27:
      var $246 = HEAP[$0];
      HEAP[$retval] = $246;
      __label__ = 28;
      break;
     case 28:
      var $retval34 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval34;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _getsockaddrarg($s, $args, $addr_ret, $len_ret) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 172;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 172);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $addr_ret_addr = __stackBase__ + 8;
      var $len_ret_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $addr = __stackBase__ + 24;
      var $path = __stackBase__ + 28;
      var $len = __stackBase__ + 32;
      var $addr12 = __stackBase__ + 36;
      var $pid = __stackBase__ + 40;
      var $groups = __stackBase__ + 44;
      var $addr18 = __stackBase__ + 48;
      var $host = __stackBase__ + 52;
      var $port = __stackBase__ + 56;
      var $result = __stackBase__ + 60;
      var $addr29 = __stackBase__ + 64;
      var $host30 = __stackBase__ + 68;
      var $port31 = __stackBase__ + 72;
      var $flowinfo = __stackBase__ + 76;
      var $scope_id = __stackBase__ + 80;
      var $result32 = __stackBase__ + 84;
      var $addr43 = __stackBase__ + 88;
      var $ifr = __stackBase__ + 92;
      var $interfaceName = __stackBase__ + 124;
      var $protoNumber = __stackBase__ + 128;
      var $hatype = __stackBase__ + 132;
      var $pkttype = __stackBase__ + 136;
      var $haddr = __stackBase__ + 140;
      var $halen = __stackBase__ + 144;
      var $atype = __stackBase__ + 148;
      var $v1 = __stackBase__ + 152;
      var $v2 = __stackBase__ + 156;
      var $v3 = __stackBase__ + 160;
      var $scope = __stackBase__ + 164;
      var $addr58 = __stackBase__ + 168;
      
      HEAP[$s_addr] = $s;
      HEAP[$args_addr] = $args;
      HEAP[$addr_ret_addr] = $addr_ret;
      HEAP[$len_ret_addr] = $len_ret;
      
      
      var $3 = HEAP[HEAP[$s_addr] + 12];
      if ($3 == 1) {
        __label__ = 1;
        break;
      } else if ($3 == 2) {
        __label__ = 17;
        break;
      } else if ($3 == 10) {
        __label__ = 27;
        break;
      } else if ($3 == 16) {
        __label__ = 12;
        break;
      } else if ($3 == 17) {
        __label__ = 37;
        break;
      } else if ($3 == 30) {
        __label__ = 51;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 1:
      var $4 = HEAP[$args_addr];
      var $5 = _PyArg_Parse($4, __str17, allocate([ $path, 0, 0, 0, $len, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 3:
      
      var $8 = HEAP[$addr_ret_addr];
      HEAP[$addr] = $8;
      
      
      if (HEAP[$len] <= 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[HEAP[$path]] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      if (HEAP[$len] > 108) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $17 = HEAP[_socket_error];
      _PyErr_SetString($17, __str18);
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 7:
      __label__ = 11;
      break;
     case 8:
      
      
      if (HEAP[$len] > 107) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $20 = HEAP[_socket_error];
      _PyErr_SetString($20, __str18);
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 10:
      
      
      
      var $24 = HEAP[$addr] + 2 + HEAP[$len];
      HEAP[$24] = 0;
      __label__ = 11;
      break;
     case 11:
      
      
      
      var $28 = HEAP[HEAP[$s_addr] + 12] & 65535;
      
      var $30 = HEAP[$addr];
      HEAP[$30] = $28;
      var $31 = HEAP[$len];
      var $32 = HEAP[$path];
      
      
      var $35 = HEAP[$addr] + 2;
      _llvm_memcpy_p0i8_p0i8_i32($35, $32, $31, 1, 0);
      
      var $37 = HEAP[$len] + 2;
      var $38 = HEAP[$len_ret_addr];
      HEAP[$38] = $37;
      HEAP[$0] = 1;
      __label__ = 64;
      break;
     case 12:
      
      var $40 = HEAP[$addr_ret_addr];
      HEAP[$addr12] = $40;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$args_addr] + 4] + 84] & 67108864) == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $52 = HEAP[HEAP[HEAP[$args_addr] + 4] + 12];
      var $53 = HEAP[_PyExc_TypeError];
      var $54 = _PyErr_Format($53, __str19, allocate([ $52, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 14:
      var $55 = HEAP[$args_addr];
      var $56 = _PyArg_ParseTuple($55, __str20, allocate([ $pid, 0, 0, 0, $groups, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($56 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 16:
      
      var $59 = HEAP[$addr12];
      HEAP[$59] = 16;
      var $60 = HEAP[$pid];
      
      var $62 = HEAP[$addr12] + 4;
      HEAP[$62] = $60;
      var $63 = HEAP[$groups];
      
      var $65 = HEAP[$addr12] + 8;
      HEAP[$65] = $63;
      var $66 = HEAP[$len_ret_addr];
      HEAP[$66] = 12;
      HEAP[$0] = 1;
      __label__ = 64;
      break;
     case 17:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$args_addr] + 4] + 84] & 67108864) == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $78 = HEAP[HEAP[HEAP[$args_addr] + 4] + 12];
      var $79 = HEAP[_PyExc_TypeError];
      var $80 = _PyErr_Format($79, __str21, allocate([ $78, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 19:
      var $81 = HEAP[$args_addr];
      var $82 = _PyArg_ParseTuple($81, __str22, allocate([ __str23, 0, 0, 0, $host, 0, 0, 0, $port, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($82 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 21:
      
      var $85 = HEAP[$addr_ret_addr];
      HEAP[$addr18] = $85;
      
      var $87 = HEAP[$addr18];
      var $88 = HEAP[$host];
      var $89 = _setipaddr($88, $87, 16, 2);
      HEAP[$result] = $89;
      var $90 = HEAP[$host];
      _PyMem_Free($90);
      
      
      if (HEAP[$result] < 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 23:
      
      
      if (HEAP[$port] < 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      if (HEAP[$port] > 65535) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $97 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($97, __str24);
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 26:
      
      var $99 = HEAP[$addr18];
      HEAP[$99] = 2;
      
      
      
      var $103 = HEAP[$port] & 65535 & 65535;
      var $104 = _htons($103);
      
      var $106 = HEAP[$addr18] + 2;
      HEAP[$106] = $104;
      var $107 = HEAP[$len_ret_addr];
      HEAP[$107] = 16;
      HEAP[$0] = 1;
      __label__ = 64;
      break;
     case 27:
      HEAP[$scope_id] = 0;
      var $108 = HEAP[$scope_id];
      HEAP[$flowinfo] = $108;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$args_addr] + 4] + 84] & 67108864) == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $120 = HEAP[HEAP[HEAP[$args_addr] + 4] + 12];
      var $121 = HEAP[_PyExc_TypeError];
      var $122 = _PyErr_Format($121, __str25, allocate([ $120, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 29:
      var $123 = HEAP[$args_addr];
      var $124 = _PyArg_ParseTuple($123, __str26, allocate([ __str23, 0, 0, 0, $host30, 0, 0, 0, $port31, 0, 0, 0, $flowinfo, 0, 0, 0, $scope_id, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($124 == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 31:
      
      var $127 = HEAP[$addr_ret_addr];
      HEAP[$addr29] = $127;
      
      var $129 = HEAP[$addr29];
      var $130 = HEAP[$host30];
      var $131 = _setipaddr($130, $129, 28, 10);
      HEAP[$result32] = $131;
      var $132 = HEAP[$host30];
      _PyMem_Free($132);
      
      
      if (HEAP[$result32] < 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 33:
      
      
      if (HEAP[$port31] < 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      if (HEAP[$port31] > 65535) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      var $139 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($139, __str24);
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 36:
      
      
      
      var $143 = HEAP[HEAP[$s_addr] + 12] & 65535;
      
      var $145 = HEAP[$addr29];
      HEAP[$145] = $143;
      
      
      
      var $149 = HEAP[$port31] & 65535 & 65535;
      var $150 = _htons($149);
      
      var $152 = HEAP[$addr29] + 2;
      HEAP[$152] = $150;
      var $153 = HEAP[$flowinfo];
      
      var $155 = HEAP[$addr29] + 4;
      HEAP[$155] = $153;
      var $156 = HEAP[$scope_id];
      
      var $158 = HEAP[$addr29] + 24;
      HEAP[$158] = $156;
      var $159 = HEAP[$len_ret_addr];
      HEAP[$159] = 28;
      HEAP[$0] = 1;
      __label__ = 64;
      break;
     case 37:
      HEAP[$hatype] = 0;
      HEAP[$pkttype] = 0;
      HEAP[$haddr] = 0;
      HEAP[$halen] = 0;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$args_addr] + 4] + 84] & 67108864) == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      var $171 = HEAP[HEAP[HEAP[$args_addr] + 4] + 12];
      var $172 = HEAP[_PyExc_TypeError];
      var $173 = _PyErr_Format($172, __str27, allocate([ $171, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 39:
      var $174 = HEAP[$args_addr];
      var $175 = _PyArg_ParseTuple($174, __str28, allocate([ $interfaceName, 0, 0, 0, $protoNumber, 0, 0, 0, $pkttype, 0, 0, 0, $hatype, 0, 0, 0, $haddr, 0, 0, 0, $halen, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($175 == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 41:
      var $177 = HEAP[$interfaceName];
      
      
      var $180 = $ifr;
      var $181 = _strncpy($180, $177, 16);
      
      
      
      HEAP[$ifr + 15] = 0;
      
      
      var $187 = HEAP[HEAP[$s_addr] + 8];
      var $188 = _ioctl($187, 35123, allocate([ $ifr, 0, 0, 0 ], [ "%struct.ifreq*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($188 < 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      var $192 = HEAP[HEAP[$s_addr] + 24];
      var $193 = FUNCTION_TABLE[$192]();
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 43:
      
      
      if (HEAP[$halen] > 8) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      var $196 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($196, __str29);
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 45:
      
      
      if (HEAP[$protoNumber] < 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 46:
      
      
      if (HEAP[$protoNumber] > 65535) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      var $201 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($201, __str30);
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 48:
      
      var $203 = HEAP[$addr_ret_addr];
      HEAP[$addr43] = $203;
      
      var $205 = HEAP[$addr43];
      HEAP[$205] = 17;
      
      
      
      var $209 = HEAP[$protoNumber] & 65535 & 65535;
      var $210 = _htons($209);
      
      var $212 = HEAP[$addr43] + 2;
      HEAP[$212] = $210;
      
      
      
      var $216 = HEAP[$ifr + 16];
      
      var $218 = HEAP[$addr43] + 4;
      HEAP[$218] = $216;
      
      var $220 = HEAP[$pkttype] & 255;
      
      var $222 = HEAP[$addr43] + 10;
      HEAP[$222] = $220;
      
      var $224 = HEAP[$hatype] & 65535;
      
      var $226 = HEAP[$addr43] + 8;
      HEAP[$226] = $224;
      
      
      if (HEAP[$halen] != 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      var $229 = HEAP[$halen];
      var $230 = HEAP[$haddr];
      
      
      var $233 = HEAP[$addr43] + 12;
      _llvm_memcpy_p0i8_p0i8_i32($233, $230, $229, 1, 0);
      __label__ = 50;
      break;
     case 50:
      
      var $235 = HEAP[$halen] & 255;
      
      var $237 = HEAP[$addr43] + 11;
      HEAP[$237] = $235;
      var $238 = HEAP[$len_ret_addr];
      HEAP[$238] = 20;
      HEAP[$0] = 1;
      __label__ = 64;
      break;
     case 51:
      HEAP[$scope] = 2;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$args_addr] + 4] + 84] & 67108864) == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      
      
      
      
      var $250 = HEAP[HEAP[HEAP[$args_addr] + 4] + 12];
      var $251 = HEAP[_PyExc_TypeError];
      var $252 = _PyErr_Format($251, __str31, allocate([ $250, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 53:
      var $253 = HEAP[$args_addr];
      var $254 = _PyArg_ParseTuple($253, __str32, allocate([ $atype, 0, 0, 0, $v1, 0, 0, 0, $v2, 0, 0, 0, $v3, 0, 0, 0, $scope, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($254 == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 55:
      
      var $257 = HEAP[$addr_ret_addr];
      HEAP[$addr58] = $257;
      
      var $259 = HEAP[$addr58];
      _llvm_memset_p0i8_i32($259, 0, 16, 1, 0);
      
      var $261 = HEAP[$addr58];
      HEAP[$261] = 30;
      
      var $263 = HEAP[$scope] & 255;
      
      var $265 = HEAP[$addr58] + 3;
      HEAP[$265] = $263;
      
      var $267 = HEAP[$atype] & 255;
      
      var $269 = HEAP[$addr58] + 2;
      HEAP[$269] = $267;
      
      
      if (HEAP[$atype] == 1) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      var $272 = HEAP[$v1];
      
      
      
      var $276 = HEAP[$addr58] + 4;
      HEAP[$276] = $272;
      var $277 = HEAP[$v2];
      
      
      
      var $281 = HEAP[$addr58] + 4 + 4;
      HEAP[$281] = $277;
      var $282 = HEAP[$v3];
      
      
      
      var $286 = HEAP[$addr58] + 4 + 8;
      HEAP[$286] = $282;
      __label__ = 62;
      break;
     case 57:
      
      
      if (HEAP[$atype] == 2) {
        __label__ = 58;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 58:
      var $289 = HEAP[$v1];
      
      
      
      
      
      var $295 = HEAP[$addr58] + 4;
      HEAP[$295] = $289;
      var $296 = HEAP[$v2];
      
      
      
      
      
      var $302 = HEAP[$addr58] + 4 + 4;
      HEAP[$302] = $296;
      __label__ = 62;
      break;
     case 59:
      
      
      if (HEAP[$atype] == 3) {
        __label__ = 60;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 60:
      var $305 = HEAP[$v1];
      
      
      
      
      var $310 = HEAP[$addr58] + 4 + 4;
      HEAP[$310] = $305;
      var $311 = HEAP[$v2];
      
      
      
      
      var $316 = HEAP[$addr58] + 4;
      HEAP[$316] = $311;
      __label__ = 62;
      break;
     case 61:
      var $317 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($317, __str15);
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 62:
      var $318 = HEAP[$len_ret_addr];
      HEAP[$318] = 16;
      HEAP[$0] = 1;
      __label__ = 64;
      break;
     case 63:
      var $319 = HEAP[_socket_error];
      _PyErr_SetString($319, __str33);
      HEAP[$0] = 0;
      __label__ = 64;
      break;
     case 64:
      var $320 = HEAP[$0];
      HEAP[$retval] = $320;
      __label__ = 65;
      break;
     case 65:
      var $retval72 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval72;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _getsockaddrlen($s, $len_ret) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $len_ret_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      
      HEAP[$s_addr] = $s;
      HEAP[$len_ret_addr] = $len_ret;
      
      
      var $3 = HEAP[HEAP[$s_addr] + 12];
      if ($3 == 1) {
        __label__ = 1;
        break;
      } else if ($3 == 2) {
        __label__ = 3;
        break;
      } else if ($3 == 10) {
        __label__ = 4;
        break;
      } else if ($3 == 16) {
        __label__ = 2;
        break;
      } else if ($3 == 17) {
        __label__ = 5;
        break;
      } else if ($3 == 30) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      var $4 = HEAP[$len_ret_addr];
      HEAP[$4] = 110;
      HEAP[$0] = 1;
      __label__ = 8;
      break;
     case 2:
      var $5 = HEAP[$len_ret_addr];
      HEAP[$5] = 12;
      HEAP[$0] = 1;
      __label__ = 8;
      break;
     case 3:
      var $6 = HEAP[$len_ret_addr];
      HEAP[$6] = 16;
      HEAP[$0] = 1;
      __label__ = 8;
      break;
     case 4:
      var $7 = HEAP[$len_ret_addr];
      HEAP[$7] = 28;
      HEAP[$0] = 1;
      __label__ = 8;
      break;
     case 5:
      var $8 = HEAP[$len_ret_addr];
      HEAP[$8] = 20;
      HEAP[$0] = 1;
      __label__ = 8;
      break;
     case 6:
      var $9 = HEAP[$len_ret_addr];
      HEAP[$9] = 16;
      HEAP[$0] = 1;
      __label__ = 8;
      break;
     case 7:
      var $10 = HEAP[_socket_error];
      _PyErr_SetString($10, __str34);
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 8:
      var $11 = HEAP[$0];
      HEAP[$retval] = $11;
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
  function _sock_accept($s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 168;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 168);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $1 = __stackBase__ + 12;
      var $addrbuf = __stackBase__ + 16;
      var $newfd = __stackBase__ + 144;
      var $addrlen = __stackBase__ + 148;
      var $sock = __stackBase__ + 152;
      var $addr = __stackBase__ + 156;
      var $res = __stackBase__ + 160;
      var $timeout = __stackBase__ + 164;
      
      HEAP[$s_addr] = $s;
      HEAP[$sock] = 0;
      HEAP[$addr] = 0;
      HEAP[$res] = 0;
      var $2 = HEAP[$s_addr];
      var $3 = _getsockaddrlen($2, $addrlen);
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$1] = 0;
      __label__ = 19;
      break;
     case 2:
      var $5 = HEAP[$addrlen];
      var $addrbuf2 = $addrbuf;
      _llvm_memset_p0i8_i32($addrbuf2, 0, $5, 1, 0);
      HEAP[$newfd] = -1;
      var $6 = HEAP[$s_addr];
      var $7 = _internal_select($6, 0);
      HEAP[$timeout] = $7;
      
      
      if (HEAP[$timeout] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      HEAP[$0] = $addrbuf;
      
      
      var $13 = HEAP[HEAP[$s_addr] + 8];
      
      var $val = HEAP[$0];
      var $14 = _accept($13, $val, $addrlen);
      HEAP[$newfd] = $14;
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[$timeout] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $17 = HEAP[_socket_timeout];
      _PyErr_SetString($17, __str35);
      HEAP[$1] = 0;
      __label__ = 19;
      break;
     case 6:
      
      
      if (HEAP[$newfd] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $22 = HEAP[HEAP[$s_addr] + 24];
      var $23 = FUNCTION_TABLE[$22]();
      HEAP[$1] = $23;
      __label__ = 19;
      break;
     case 8:
      
      
      var $26 = HEAP[HEAP[$s_addr] + 20];
      
      
      var $29 = HEAP[HEAP[$s_addr] + 16];
      
      
      var $32 = HEAP[HEAP[$s_addr] + 12];
      var $33 = HEAP[$newfd];
      var $34 = _new_sockobject($33, $32, $29, $26);
      var $35 = $34;
      HEAP[$sock] = $35;
      
      
      if (HEAP[$sock] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $38 = HEAP[$newfd];
      var $39 = _close($38);
      __label__ = 12;
      break;
     case 10:
      
      
      var $42 = HEAP[HEAP[$s_addr] + 20];
      var $43 = HEAP[$addrlen];
      var $addrbuf13 = $addrbuf;
      
      
      var $46 = HEAP[HEAP[$s_addr] + 8];
      var $47 = _makesockaddr($46, $addrbuf13, $43, $42);
      HEAP[$addr] = $47;
      
      
      if (HEAP[$addr] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $50 = HEAP[$sock];
      var $51 = HEAP[$addr];
      var $52 = _PyTuple_Pack(2, allocate([ $50, 0, 0, 0, $51, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$res] = $52;
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$sock] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      
      var $58 = HEAP[HEAP[$sock]] - 1;
      
      var $60 = HEAP[$sock];
      HEAP[$60] = $58;
      
      
      
      
      if (HEAP[HEAP[$sock]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $69 = HEAP[HEAP[HEAP[$sock] + 4] + 24];
      var $70 = HEAP[$sock];
      FUNCTION_TABLE[$69]($70);
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$addr] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      var $76 = HEAP[HEAP[$addr]] - 1;
      
      var $78 = HEAP[$addr];
      HEAP[$78] = $76;
      
      
      
      
      if (HEAP[HEAP[$addr]] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $87 = HEAP[HEAP[HEAP[$addr] + 4] + 24];
      var $88 = HEAP[$addr];
      FUNCTION_TABLE[$87]($88);
      __label__ = 18;
      break;
     case 18:
      var $89 = HEAP[$res];
      HEAP[$1] = $89;
      __label__ = 19;
      break;
     case 19:
      var $90 = HEAP[$1];
      HEAP[$retval] = $90;
      __label__ = 20;
      break;
     case 20:
      var $retval23 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval23;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_setblocking($s, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_114 = __stackBase__ + 12;
      var $0 = __stackBase__ + 20;
      var $block = __stackBase__ + 24;
      
      HEAP[$s_addr] = $s;
      HEAP[$arg_addr] = $arg;
      var $1 = HEAP[$arg_addr];
      var $2 = _PyInt_AsLong($1);
      HEAP[$block] = $2;
      
      var $4 = HEAP[$block] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
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
      
      
      if (HEAP[$block] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$iftmp_114] = -1;
      __label__ = 6;
      break;
     case 5:
      HEAP[$iftmp_114] = 0;
      __label__ = 6;
      break;
     case 6:
      
      var $10 = HEAP[$s_addr] + 28;
      var $11 = HEAP[$iftmp_114];
      HEAP[$10] = $11;
      var $12 = HEAP[$s_addr];
      var $13 = HEAP[$block];
      var $14 = _internal_setblocking($12, $13);
      
      var $16 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $16;
      HEAP[$0] = __Py_NoneStruct;
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
  function _sock_settimeout($s, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $timeout = __stackBase__ + 16;
      
      HEAP[$s_addr] = $s;
      HEAP[$arg_addr] = $arg;
      
      
      if (HEAP[$arg_addr] == __Py_NoneStruct) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$timeout] = -1;
      __label__ = 6;
      break;
     case 2:
      var $3 = HEAP[$arg_addr];
      var $4 = _PyFloat_AsDouble($3);
      HEAP[$timeout] = $4;
      
      
      if (HEAP[$timeout] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      var $7 = _PyErr_Occurred();
      
      if ($7 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $9 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($9, __str36);
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 6:
      
      var $11 = HEAP[$s_addr] + 28;
      var $12 = HEAP[$timeout];
      HEAP[$11] = $12;
      
      
      var $15 = HEAP[$timeout] < 0;
      var $16 = HEAP[$s_addr];
      var $17 = _internal_setblocking($16, $15);
      
      var $19 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $19;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 7;
      break;
     case 7:
      var $20 = HEAP[$0];
      HEAP[$retval] = $20;
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
  function _sock_gettimeout($s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      
      HEAP[$s_addr] = $s;
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 28] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $6 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $6;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 2:
      
      
      var $9 = HEAP[HEAP[$s_addr] + 28];
      var $10 = _PyFloat_FromDouble($9);
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
  function _sock_setsockopt($s, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $level = __stackBase__ + 16;
      var $optname = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      var $buf = __stackBase__ + 28;
      var $buflen = __stackBase__ + 32;
      var $flag = __stackBase__ + 36;
      
      HEAP[$s_addr] = $s;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str37, allocate([ $level, 0, 0, 0, $optname, 0, 0, 0, $flag, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      HEAP[$buf] = $flag;
      HEAP[$buflen] = 4;
      __label__ = 4;
      break;
     case 2:
      _PyErr_Clear();
      var $4 = HEAP[$args_addr];
      var $5 = _PyArg_ParseTuple($4, __str38, allocate([ $level, 0, 0, 0, $optname, 0, 0, 0, $buf, 0, 0, 0, $buflen, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
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
      var $7 = HEAP[$buflen];
      var $8 = HEAP[$buf];
      var $9 = HEAP[$optname];
      var $10 = HEAP[$level];
      
      
      var $13 = HEAP[HEAP[$s_addr] + 8];
      var $14 = _setsockopt($13, $10, $9, $8, $7);
      HEAP[$res] = $14;
      
      
      if (HEAP[$res] < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $19 = HEAP[HEAP[$s_addr] + 24];
      var $20 = FUNCTION_TABLE[$19]();
      HEAP[$0] = $20;
      __label__ = 7;
      break;
     case 6:
      
      var $22 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $22;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 7;
      break;
     case 7:
      var $23 = HEAP[$0];
      HEAP[$retval] = $23;
      __label__ = 8;
      break;
     case 8:
      var $retval9 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_getsockopt($s, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $level = __stackBase__ + 16;
      var $optname = __stackBase__ + 20;
      var $res = __stackBase__ + 24;
      var $buf = __stackBase__ + 28;
      var $buflen = __stackBase__ + 32;
      var $flag = __stackBase__ + 36;
      var $flagsize = __stackBase__ + 40;
      
      HEAP[$s_addr] = $s;
      HEAP[$args_addr] = $args;
      HEAP[$buflen] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str39, allocate([ $level, 0, 0, 0, $optname, 0, 0, 0, $buflen, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$buflen] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      HEAP[$flag] = 0;
      HEAP[$flagsize] = 4;
      var $6 = HEAP[$optname];
      var $7 = HEAP[$level];
      
      
      var $10 = HEAP[HEAP[$s_addr] + 8];
      var $flag3 = $flag;
      var $11 = _getsockopt($10, $7, $6, $flag3, $flagsize);
      HEAP[$res] = $11;
      
      
      if (HEAP[$res] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $16 = HEAP[HEAP[$s_addr] + 24];
      var $17 = FUNCTION_TABLE[$16]();
      HEAP[$0] = $17;
      __label__ = 16;
      break;
     case 5:
      var $18 = HEAP[$flag];
      var $19 = _PyInt_FromLong($18);
      HEAP[$0] = $19;
      __label__ = 16;
      break;
     case 6:
      
      
      if (HEAP[$buflen] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if (HEAP[$buflen] > 1024) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $24 = HEAP[_socket_error];
      _PyErr_SetString($24, __str40);
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 9:
      var $25 = HEAP[$buflen];
      var $26 = _PyString_FromStringAndSize(0, $25);
      HEAP[$buf] = $26;
      
      
      if (HEAP[$buf] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 11:
      
      
      
      var $32 = HEAP[$buf] + 20;
      var $33 = HEAP[$optname];
      var $34 = HEAP[$level];
      
      
      var $37 = HEAP[HEAP[$s_addr] + 8];
      var $38 = _getsockopt($37, $34, $33, $32, $buflen);
      HEAP[$res] = $38;
      
      
      if (HEAP[$res] < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      var $41 = HEAP[$buf];
      
      
      var $44 = HEAP[$41] - 1;
      var $45 = $41;
      HEAP[$45] = $44;
      
      
      
      if (HEAP[$41] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $53 = HEAP[HEAP[HEAP[$buf] + 4] + 24];
      var $54 = HEAP[$buf];
      FUNCTION_TABLE[$53]($54);
      __label__ = 14;
      break;
     case 14:
      
      
      var $57 = HEAP[HEAP[$s_addr] + 24];
      var $58 = FUNCTION_TABLE[$57]();
      HEAP[$0] = $58;
      __label__ = 16;
      break;
     case 15:
      var $59 = HEAP[$buflen];
      var $60 = __PyString_Resize($buf, $59);
      var $61 = HEAP[$buf];
      HEAP[$0] = $61;
      __label__ = 16;
      break;
     case 16:
      var $62 = HEAP[$0];
      HEAP[$retval] = $62;
      __label__ = 17;
      break;
     case 17:
      var $retval17 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_bind($s, $addro) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 156;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 156);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $addro_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $1 = __stackBase__ + 16;
      var $addrbuf = __stackBase__ + 20;
      var $addrlen = __stackBase__ + 148;
      var $res = __stackBase__ + 152;
      
      HEAP[$s_addr] = $s;
      HEAP[$addro_addr] = $addro;
      var $addrbuf1 = $addrbuf;
      var $2 = HEAP[$s_addr];
      var $3 = HEAP[$addro_addr];
      var $4 = _getsockaddrarg($2, $3, $addrbuf1, $addrlen);
      
      if ($4 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$1] = 0;
      __label__ = 5;
      break;
     case 2:
      var $6 = HEAP[$addrlen];
      
      
      HEAP[$0] = $addrbuf;
      
      
      var $10 = HEAP[HEAP[$s_addr] + 8];
      
      var $val = HEAP[$0];
      var $11 = _bind($10, $val, $6);
      HEAP[$res] = $11;
      
      
      if (HEAP[$res] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[HEAP[$s_addr] + 24];
      var $17 = FUNCTION_TABLE[$16]();
      HEAP[$1] = $17;
      __label__ = 5;
      break;
     case 4:
      
      var $19 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $19;
      HEAP[$1] = __Py_NoneStruct;
      __label__ = 5;
      break;
     case 5:
      var $20 = HEAP[$1];
      HEAP[$retval] = $20;
      __label__ = 6;
      break;
     case 6:
      var $retval9 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_close($s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $fd = __stackBase__ + 12;
      
      HEAP[$s_addr] = $s;
      
      
      var $3 = HEAP[HEAP[$s_addr] + 8];
      HEAP[$fd] = $3;
      
      var $5 = HEAP[$fd] != -1;
      if ($5) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $7 = HEAP[$s_addr] + 8;
      HEAP[$7] = -1;
      var $8 = HEAP[$fd];
      var $9 = _close($8);
      __label__ = 2;
      break;
     case 2:
      
      var $11 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $11;
      HEAP[$0] = __Py_NoneStruct;
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
  function _internal_connect($s, $addr, $addrlen, $timeoutp) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $addr_addr = __stackBase__ + 4;
      var $addrlen_addr = __stackBase__ + 8;
      var $timeoutp_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $1 = __stackBase__ + 24;
      var $res = __stackBase__ + 28;
      var $timeout = __stackBase__ + 32;
      var $res_size = __stackBase__ + 36;
      
      HEAP[$s_addr] = $s;
      HEAP[$addr_addr] = $addr;
      HEAP[$addrlen_addr] = $addrlen;
      HEAP[$timeoutp_addr] = $timeoutp;
      HEAP[$timeout] = 0;
      var $2 = HEAP[$addrlen_addr];
      
      var $4 = HEAP[$addr_addr];
      HEAP[$1] = $4;
      
      
      var $7 = HEAP[HEAP[$s_addr] + 8];
      
      var $val = HEAP[$1];
      var $8 = _connect($7, $val, $2);
      HEAP[$res] = $8;
      
      
      
      
      if (HEAP[HEAP[$s_addr] + 28] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      
      
      if (HEAP[$res] < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 2:
      var $15 = ___errno_location();
      
      
      if (HEAP[$15] == 115) {
        __label__ = 3;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 3:
      var $18 = HEAP[$s_addr];
      var $19 = _internal_select($18, 1);
      HEAP[$timeout] = $19;
      
      
      if (HEAP[$timeout] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      HEAP[$res_size] = 4;
      
      
      var $24 = HEAP[HEAP[$s_addr] + 8];
      var $res4 = $res;
      var $25 = _getsockopt($24, 1, 4, $res4, $res_size);
      
      
      if (HEAP[$res] == 106) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$res] = 0;
      __label__ = 6;
      break;
     case 6:
      var $28 = ___errno_location();
      var $29 = HEAP[$res];
      HEAP[$28] = $29;
      __label__ = 10;
      break;
     case 7:
      
      var $31 = HEAP[$timeout] == -1;
      if ($31) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $32 = ___errno_location();
      var $33 = HEAP[$32];
      HEAP[$res] = $33;
      __label__ = 10;
      break;
     case 9:
      HEAP[$res] = 11;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$res] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $36 = ___errno_location();
      var $37 = HEAP[$36];
      HEAP[$res] = $37;
      __label__ = 12;
      break;
     case 12:
      var $38 = HEAP[$timeoutp_addr];
      var $39 = HEAP[$timeout];
      HEAP[$38] = $39;
      var $40 = HEAP[$res];
      HEAP[$0] = $40;
      var $41 = HEAP[$0];
      HEAP[$retval] = $41;
      __label__ = 13;
      break;
     case 13:
      var $retval13 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_connect($s, $addro) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 156;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 156);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $addro_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $addrbuf = __stackBase__ + 16;
      var $addrlen = __stackBase__ + 144;
      var $res = __stackBase__ + 148;
      var $timeout = __stackBase__ + 152;
      
      HEAP[$s_addr] = $s;
      HEAP[$addro_addr] = $addro;
      var $addrbuf1 = $addrbuf;
      var $1 = HEAP[$s_addr];
      var $2 = HEAP[$addro_addr];
      var $3 = _getsockaddrarg($1, $2, $addrbuf1, $addrlen);
      
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
      var $5 = HEAP[$addrlen];
      var $addrbuf4 = $addrbuf;
      var $6 = HEAP[$s_addr];
      var $7 = _internal_connect($6, $addrbuf4, $5, $timeout);
      HEAP[$res] = $7;
      
      
      if (HEAP[$timeout] == 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = HEAP[_socket_timeout];
      _PyErr_SetString($10, __str35);
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 4:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $15 = HEAP[HEAP[$s_addr] + 24];
      var $16 = FUNCTION_TABLE[$15]();
      HEAP[$0] = $16;
      __label__ = 7;
      break;
     case 6:
      
      var $18 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $18;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 7;
      break;
     case 7:
      var $19 = HEAP[$0];
      HEAP[$retval] = $19;
      __label__ = 8;
      break;
     case 8:
      var $retval11 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_connect_ex($s, $addro) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 156;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 156);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $addro_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $addrbuf = __stackBase__ + 16;
      var $addrlen = __stackBase__ + 144;
      var $res = __stackBase__ + 148;
      var $timeout = __stackBase__ + 152;
      
      HEAP[$s_addr] = $s;
      HEAP[$addro_addr] = $addro;
      var $addrbuf1 = $addrbuf;
      var $1 = HEAP[$s_addr];
      var $2 = HEAP[$addro_addr];
      var $3 = _getsockaddrarg($1, $2, $addrbuf1, $addrlen);
      
      if ($3 == 0) {
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
      var $5 = HEAP[$addrlen];
      var $addrbuf4 = $addrbuf;
      var $6 = HEAP[$s_addr];
      var $7 = _internal_connect($6, $addrbuf4, $5, $timeout);
      HEAP[$res] = $7;
      
      
      if (HEAP[$res] == 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $10 = _PyErr_CheckSignals();
      
      if ($10 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = 0;
      __label__ = 6;
      break;
     case 5:
      var $12 = HEAP[$res];
      var $13 = _PyInt_FromLong($12);
      HEAP[$0] = $13;
      __label__ = 6;
      break;
     case 6:
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
      __label__ = 7;
      break;
     case 7:
      var $retval10 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_fileno($s) {
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
      
      HEAP[__stackBase__] = $s;
      
      
      var $3 = HEAP[HEAP[__stackBase__] + 8];
      var $4 = _PyInt_FromLong($3);
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
  function _sock_dup($s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $newfd = __stackBase__ + 12;
      var $sock = __stackBase__ + 16;
      
      HEAP[$s_addr] = $s;
      
      
      var $3 = HEAP[HEAP[$s_addr] + 8];
      var $4 = _dup($3);
      HEAP[$newfd] = $4;
      
      
      if (HEAP[$newfd] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $9 = HEAP[HEAP[$s_addr] + 24];
      var $10 = FUNCTION_TABLE[$9]();
      HEAP[$0] = $10;
      __label__ = 5;
      break;
     case 2:
      
      
      var $13 = HEAP[HEAP[$s_addr] + 20];
      
      
      var $16 = HEAP[HEAP[$s_addr] + 16];
      
      
      var $19 = HEAP[HEAP[$s_addr] + 12];
      var $20 = HEAP[$newfd];
      var $21 = _new_sockobject($20, $19, $16, $13);
      var $22 = $21;
      HEAP[$sock] = $22;
      
      
      if (HEAP[$sock] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $25 = HEAP[$newfd];
      var $26 = _close($25);
      __label__ = 4;
      break;
     case 4:
      var $27 = HEAP[$sock];
      HEAP[$0] = $27;
      __label__ = 5;
      break;
     case 5:
      var $28 = HEAP[$0];
      HEAP[$retval] = $28;
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
  function _sock_getsockname($s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 152;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 152);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $1 = __stackBase__ + 12;
      var $addrbuf = __stackBase__ + 16;
      var $res = __stackBase__ + 144;
      var $addrlen = __stackBase__ + 148;
      
      HEAP[$s_addr] = $s;
      var $2 = HEAP[$s_addr];
      var $3 = _getsockaddrlen($2, $addrlen);
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$1] = 0;
      __label__ = 5;
      break;
     case 2:
      var $5 = HEAP[$addrlen];
      var $addrbuf2 = $addrbuf;
      _llvm_memset_p0i8_i32($addrbuf2, 0, $5, 1, 0);
      
      
      HEAP[$0] = $addrbuf;
      
      
      var $9 = HEAP[HEAP[$s_addr] + 8];
      
      var $val = HEAP[$0];
      var $10 = _getsockname($9, $val, $addrlen);
      HEAP[$res] = $10;
      
      
      if (HEAP[$res] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $15 = HEAP[HEAP[$s_addr] + 24];
      var $16 = FUNCTION_TABLE[$15]();
      HEAP[$1] = $16;
      __label__ = 5;
      break;
     case 4:
      
      
      var $19 = HEAP[HEAP[$s_addr] + 20];
      var $20 = HEAP[$addrlen];
      var $addrbuf7 = $addrbuf;
      
      
      var $23 = HEAP[HEAP[$s_addr] + 8];
      var $24 = _makesockaddr($23, $addrbuf7, $20, $19);
      HEAP[$1] = $24;
      __label__ = 5;
      break;
     case 5:
      var $25 = HEAP[$1];
      HEAP[$retval] = $25;
      __label__ = 6;
      break;
     case 6:
      var $retval10 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_getpeername($s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 152;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 152);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $1 = __stackBase__ + 12;
      var $addrbuf = __stackBase__ + 16;
      var $res = __stackBase__ + 144;
      var $addrlen = __stackBase__ + 148;
      
      HEAP[$s_addr] = $s;
      var $2 = HEAP[$s_addr];
      var $3 = _getsockaddrlen($2, $addrlen);
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$1] = 0;
      __label__ = 5;
      break;
     case 2:
      var $5 = HEAP[$addrlen];
      var $addrbuf2 = $addrbuf;
      _llvm_memset_p0i8_i32($addrbuf2, 0, $5, 1, 0);
      
      
      HEAP[$0] = $addrbuf;
      
      
      var $9 = HEAP[HEAP[$s_addr] + 8];
      
      var $val = HEAP[$0];
      var $10 = _getpeername($9, $val, $addrlen);
      HEAP[$res] = $10;
      
      
      if (HEAP[$res] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $15 = HEAP[HEAP[$s_addr] + 24];
      var $16 = FUNCTION_TABLE[$15]();
      HEAP[$1] = $16;
      __label__ = 5;
      break;
     case 4:
      
      
      var $19 = HEAP[HEAP[$s_addr] + 20];
      var $20 = HEAP[$addrlen];
      var $addrbuf7 = $addrbuf;
      
      
      var $23 = HEAP[HEAP[$s_addr] + 8];
      var $24 = _makesockaddr($23, $addrbuf7, $20, $19);
      HEAP[$1] = $24;
      __label__ = 5;
      break;
     case 5:
      var $25 = HEAP[$1];
      HEAP[$retval] = $25;
      __label__ = 6;
      break;
     case 6:
      var $retval10 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_listen($s, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $backlog = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$s_addr] = $s;
      HEAP[$arg_addr] = $arg;
      var $1 = HEAP[$arg_addr];
      var $2 = _PyInt_AsLong($1);
      HEAP[$backlog] = $2;
      
      var $4 = HEAP[$backlog] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 3:
      
      
      if (HEAP[$backlog] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$backlog] = 0;
      __label__ = 5;
      break;
     case 5:
      
      
      var $11 = HEAP[HEAP[$s_addr] + 8];
      var $12 = HEAP[$backlog];
      var $13 = _listen($11, $12);
      HEAP[$res] = $13;
      
      
      if (HEAP[$res] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      var $18 = HEAP[HEAP[$s_addr] + 24];
      var $19 = FUNCTION_TABLE[$18]();
      HEAP[$0] = $19;
      __label__ = 8;
      break;
     case 7:
      
      var $21 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $21;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 8;
      break;
     case 8:
      var $22 = HEAP[$0];
      HEAP[$retval] = $22;
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
  function _sock_makefile($s, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $mode = __stackBase__ + 16;
      var $bufsize = __stackBase__ + 20;
      var $fd = __stackBase__ + 24;
      var $fp = __stackBase__ + 28;
      var $f = __stackBase__ + 32;
      
      HEAP[$s_addr] = $s;
      HEAP[$args_addr] = $args;
      HEAP[$mode] = __str41;
      HEAP[$bufsize] = -1;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str42, allocate([ $mode, 0, 0, 0, $bufsize, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      var $6 = HEAP[HEAP[$s_addr] + 8];
      var $7 = _dup($6);
      HEAP[$fd] = $7;
      
      
      if (HEAP[$fd] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $10 = HEAP[$mode];
      var $11 = HEAP[$fd];
      var $12 = _fdopen($11, $10);
      HEAP[$fp] = $12;
      
      
      if (HEAP[$fp] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      if (HEAP[$fd] >= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $17 = HEAP[$fd];
      var $18 = _close($17);
      __label__ = 6;
      break;
     case 6:
      
      
      var $21 = HEAP[HEAP[$s_addr] + 24];
      var $22 = FUNCTION_TABLE[$21]();
      HEAP[$0] = $22;
      __label__ = 10;
      break;
     case 7:
      var $23 = HEAP[$mode];
      var $24 = HEAP[$fp];
      var $25 = _PyFile_FromFile($24, __str43, $23, FUNCTION_TABLE_OFFSET + 4);
      HEAP[$f] = $25;
      
      
      if (HEAP[$f] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $28 = HEAP[$bufsize];
      var $29 = HEAP[$f];
      _PyFile_SetBufSize($29, $28);
      __label__ = 9;
      break;
     case 9:
      var $30 = HEAP[$f];
      HEAP[$0] = $30;
      __label__ = 10;
      break;
     case 10:
      var $31 = HEAP[$0];
      HEAP[$retval] = $31;
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
  function _sock_recv_guts($s, $cbuf, $len, $flags) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $cbuf_addr = __stackBase__ + 4;
      var $len_addr = __stackBase__ + 8;
      var $flags_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $outlen = __stackBase__ + 24;
      var $timeout = __stackBase__ + 28;
      
      HEAP[$s_addr] = $s;
      HEAP[$cbuf_addr] = $cbuf;
      HEAP[$len_addr] = $len;
      HEAP[$flags_addr] = $flags;
      HEAP[$outlen] = -1;
      var $1 = HEAP[$s_addr];
      var $2 = _internal_select($1, 0);
      HEAP[$timeout] = $2;
      
      
      if (HEAP[$timeout] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[$len_addr];
      
      
      var $8 = HEAP[HEAP[$s_addr] + 8];
      var $9 = HEAP[$cbuf_addr];
      var $10 = HEAP[$flags_addr];
      var $11 = _recv($8, $9, $5, $10);
      HEAP[$outlen] = $11;
      __label__ = 2;
      break;
     case 2:
      
      
      if (HEAP[$timeout] == 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $14 = HEAP[_socket_timeout];
      _PyErr_SetString($14, __str35);
      HEAP[$0] = -1;
      __label__ = 7;
      break;
     case 4:
      
      
      if (HEAP[$outlen] < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $19 = HEAP[HEAP[$s_addr] + 24];
      var $20 = FUNCTION_TABLE[$19]();
      HEAP[$0] = -1;
      __label__ = 7;
      break;
     case 6:
      var $21 = HEAP[$outlen];
      HEAP[$0] = $21;
      __label__ = 7;
      break;
     case 7:
      var $22 = HEAP[$0];
      HEAP[$retval] = $22;
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
  function _sock_recv($s, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $recvlen = __stackBase__ + 16;
      var $flags = __stackBase__ + 20;
      var $outlen = __stackBase__ + 24;
      var $buf = __stackBase__ + 28;
      
      HEAP[$s_addr] = $s;
      HEAP[$args_addr] = $args;
      HEAP[$flags] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str44, allocate([ $recvlen, 0, 0, 0, $flags, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$recvlen] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($6, __str45);
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 4:
      var $7 = HEAP[$recvlen];
      var $8 = _PyString_FromStringAndSize(0, $7);
      HEAP[$buf] = $8;
      
      
      if (HEAP[$buf] == 0) {
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
      var $11 = HEAP[$flags];
      var $12 = HEAP[$recvlen];
      
      
      
      var $16 = HEAP[$buf] + 20;
      var $17 = HEAP[$s_addr];
      var $18 = _sock_recv_guts($17, $16, $12, $11);
      HEAP[$outlen] = $18;
      
      
      if (HEAP[$outlen] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      var $21 = HEAP[$buf];
      
      
      var $24 = HEAP[$21] - 1;
      var $25 = $21;
      HEAP[$25] = $24;
      
      
      
      if (HEAP[$21] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $33 = HEAP[HEAP[HEAP[$buf] + 4] + 24];
      var $34 = HEAP[$buf];
      FUNCTION_TABLE[$33]($34);
      __label__ = 9;
      break;
     case 9:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 10:
      
      
      
      if (HEAP[$outlen] != HEAP[$recvlen]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      var $38 = HEAP[$outlen];
      var $39 = __PyString_Resize($buf, $38);
      
      if ($39 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 13:
      var $41 = HEAP[$buf];
      HEAP[$0] = $41;
      __label__ = 14;
      break;
     case 14:
      var $42 = HEAP[$0];
      HEAP[$retval] = $42;
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
  function _sock_recv_into($s, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 88;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 88);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $recvlen = __stackBase__ + 20;
      var $flags = __stackBase__ + 24;
      var $readlen = __stackBase__ + 28;
      var $buf = __stackBase__ + 32;
      var $buflen = __stackBase__ + 84;
      
      HEAP[$s_addr] = $s;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$recvlen] = 0;
      HEAP[$flags] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwds_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str46, _kwlist_10803, allocate([ $buf, 0, 0, 0, $recvlen, 0, 0, 0, $flags, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      var $6 = HEAP[$buf + 8];
      HEAP[$buflen] = $6;
      
      
      
      if (HEAP[$buf] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$buflen] <= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str50, __str51, 2483, ___PRETTY_FUNCTION___10809);
      throw "Reached an unreachable!";
     case 5:
      
      
      if (HEAP[$recvlen] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $14 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($14, __str52);
      __label__ = 13;
      break;
     case 7:
      
      
      if (HEAP[$recvlen] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $17 = HEAP[$buflen];
      HEAP[$recvlen] = $17;
      __label__ = 9;
      break;
     case 9:
      
      
      
      if (HEAP[$buflen] < HEAP[$recvlen]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $21 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($21, __str53);
      __label__ = 13;
      break;
     case 11:
      var $22 = HEAP[$flags];
      var $23 = HEAP[$recvlen];
      
      var $25 = HEAP[$buf];
      var $26 = HEAP[$s_addr];
      var $27 = _sock_recv_guts($26, $25, $23, $22);
      HEAP[$readlen] = $27;
      
      
      if (HEAP[$readlen] < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      _PyBuffer_Release($buf);
      var $30 = HEAP[$readlen];
      var $31 = _PyInt_FromSsize_t($30);
      HEAP[$0] = $31;
      __label__ = 14;
      break;
     case 13:
      _PyBuffer_Release($buf);
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 14:
      var $32 = HEAP[$0];
      HEAP[$retval] = $32;
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
  function _sock_recvfrom_guts($s, $cbuf, $len, $flags, $addr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 172;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 172);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $cbuf_addr = __stackBase__ + 4;
      var $len_addr = __stackBase__ + 8;
      var $flags_addr = __stackBase__ + 12;
      var $addr_addr = __stackBase__ + 16;
      var $retval = __stackBase__ + 20;
      var $0 = __stackBase__ + 24;
      var $1 = __stackBase__ + 28;
      var $addrbuf = __stackBase__ + 32;
      var $timeout = __stackBase__ + 160;
      var $n = __stackBase__ + 164;
      var $addrlen = __stackBase__ + 168;
      
      HEAP[$s_addr] = $s;
      HEAP[$cbuf_addr] = $cbuf;
      HEAP[$len_addr] = $len;
      HEAP[$flags_addr] = $flags;
      HEAP[$addr_addr] = $addr;
      HEAP[$n] = -1;
      var $2 = HEAP[$addr_addr];
      HEAP[$2] = 0;
      var $3 = HEAP[$s_addr];
      var $4 = _getsockaddrlen($3, $addrlen);
      
      if ($4 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$1] = -1;
      __label__ = 11;
      break;
     case 2:
      var $6 = HEAP[$addrlen];
      var $addrbuf2 = $addrbuf;
      _llvm_memset_p0i8_i32($addrbuf2, 0, $6, 1, 0);
      var $7 = HEAP[$s_addr];
      var $8 = _internal_select($7, 0);
      HEAP[$timeout] = $8;
      
      
      if (HEAP[$timeout] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      HEAP[$0] = $addrbuf;
      var $12 = HEAP[$len_addr];
      
      
      var $15 = HEAP[HEAP[$s_addr] + 8];
      var $16 = HEAP[$cbuf_addr];
      var $17 = HEAP[$flags_addr];
      
      var $val = HEAP[$0];
      var $18 = _recvfrom($15, $16, $12, $17, $val, $addrlen);
      HEAP[$n] = $18;
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[$timeout] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $21 = HEAP[_socket_timeout];
      _PyErr_SetString($21, __str35);
      HEAP[$1] = -1;
      __label__ = 11;
      break;
     case 6:
      
      
      if (HEAP[$n] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $26 = HEAP[HEAP[$s_addr] + 24];
      var $27 = FUNCTION_TABLE[$26]();
      HEAP[$1] = -1;
      __label__ = 11;
      break;
     case 8:
      
      
      var $30 = HEAP[HEAP[$s_addr] + 20];
      var $31 = HEAP[$addrlen];
      var $addrbuf10 = $addrbuf;
      
      
      var $34 = HEAP[HEAP[$s_addr] + 8];
      var $35 = _makesockaddr($34, $addrbuf10, $31, $30);
      var $36 = HEAP[$addr_addr];
      HEAP[$36] = $35;
      
      
      
      if (HEAP[HEAP[$addr_addr]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$1] = -1;
      __label__ = 11;
      break;
     case 10:
      var $40 = HEAP[$n];
      HEAP[$1] = $40;
      __label__ = 11;
      break;
     case 11:
      var $41 = HEAP[$1];
      HEAP[$retval] = $41;
      __label__ = 12;
      break;
     case 12:
      var $retval15 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_recvfrom($s, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $buf = __stackBase__ + 16;
      var $addr = __stackBase__ + 20;
      var $ret = __stackBase__ + 24;
      var $recvlen = __stackBase__ + 28;
      var $flags = __stackBase__ + 32;
      var $outlen = __stackBase__ + 36;
      
      HEAP[$s_addr] = $s;
      HEAP[$args_addr] = $args;
      HEAP[$buf] = 0;
      HEAP[$addr] = 0;
      HEAP[$ret] = 0;
      HEAP[$flags] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str54, allocate([ $recvlen, 0, 0, 0, $flags, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$recvlen] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($6, __str55);
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 4:
      var $7 = HEAP[$recvlen];
      var $8 = _PyString_FromStringAndSize(0, $7);
      HEAP[$buf] = $8;
      
      
      if (HEAP[$buf] == 0) {
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
      var $11 = HEAP[$flags];
      var $12 = HEAP[$recvlen];
      
      
      
      var $16 = HEAP[$buf] + 20;
      var $17 = HEAP[$s_addr];
      var $18 = _sock_recvfrom_guts($17, $16, $12, $11, $addr);
      HEAP[$outlen] = $18;
      
      
      if (HEAP[$outlen] < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      if (HEAP[$outlen] != HEAP[$recvlen]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $24 = HEAP[$outlen];
      var $25 = __PyString_Resize($buf, $24);
      
      if ($25 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $27 = HEAP[$addr];
      var $28 = HEAP[$buf];
      var $29 = _PyTuple_Pack(2, allocate([ $28, 0, 0, 0, $27, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ret] = $29;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$buf] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      var $32 = HEAP[$buf];
      
      
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
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$buf] + 4] + 24];
      var $45 = HEAP[$buf];
      FUNCTION_TABLE[$44]($45);
      __label__ = 13;
      break;
     case 13:
      
      
      if (HEAP[$addr] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      var $48 = HEAP[$addr];
      
      
      var $51 = HEAP[$48] - 1;
      var $52 = $48;
      HEAP[$52] = $51;
      
      
      
      if (HEAP[$48] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[$addr] + 4] + 24];
      var $61 = HEAP[$addr];
      FUNCTION_TABLE[$60]($61);
      __label__ = 16;
      break;
     case 16:
      var $62 = HEAP[$ret];
      HEAP[$0] = $62;
      __label__ = 17;
      break;
     case 17:
      var $63 = HEAP[$0];
      HEAP[$retval] = $63;
      __label__ = 18;
      break;
     case 18:
      var $retval16 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_recvfrom_into($s, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 92;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 92);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $recvlen = __stackBase__ + 20;
      var $flags = __stackBase__ + 24;
      var $readlen = __stackBase__ + 28;
      var $buf = __stackBase__ + 32;
      var $buflen = __stackBase__ + 84;
      var $addr = __stackBase__ + 88;
      
      HEAP[$s_addr] = $s;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      HEAP[$recvlen] = 0;
      HEAP[$flags] = 0;
      HEAP[$addr] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kwds_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str56, _kwlist_10950, allocate([ $buf, 0, 0, 0, $recvlen, 0, 0, 0, $flags, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $6 = HEAP[$buf + 8];
      HEAP[$buflen] = $6;
      
      
      
      if (HEAP[$buf] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$buflen] <= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str50, __str51, 2665, ___PRETTY_FUNCTION___10957);
      throw "Reached an unreachable!";
     case 5:
      
      
      if (HEAP[$recvlen] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $14 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($14, __str57);
      __label__ = 11;
      break;
     case 7:
      
      
      if (HEAP[$recvlen] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $17 = HEAP[$buflen];
      HEAP[$recvlen] = $17;
      __label__ = 9;
      break;
     case 9:
      var $18 = HEAP[$flags];
      var $19 = HEAP[$recvlen];
      
      var $21 = HEAP[$buf];
      var $22 = HEAP[$s_addr];
      var $23 = _sock_recvfrom_guts($22, $21, $19, $18, $addr);
      HEAP[$readlen] = $23;
      
      
      if (HEAP[$readlen] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      _PyBuffer_Release($buf);
      var $26 = HEAP[$addr];
      var $27 = HEAP[$readlen];
      var $28 = _Py_BuildValue(__str58, allocate([ $27, 0, 0, 0, $26, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $28;
      __label__ = 15;
      break;
     case 11:
      
      
      if (HEAP[$addr] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      var $31 = HEAP[$addr];
      
      
      var $34 = HEAP[$31] - 1;
      var $35 = $31;
      HEAP[$35] = $34;
      
      
      
      if (HEAP[$31] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $43 = HEAP[HEAP[HEAP[$addr] + 4] + 24];
      var $44 = HEAP[$addr];
      FUNCTION_TABLE[$43]($44);
      __label__ = 14;
      break;
     case 14:
      _PyBuffer_Release($buf);
      HEAP[$0] = 0;
      __label__ = 15;
      break;
     case 15:
      var $45 = HEAP[$0];
      HEAP[$retval] = $45;
      __label__ = 16;
      break;
     case 16:
      var $retval14 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_send($s, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 88;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 88);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $buf = __stackBase__ + 16;
      var $len = __stackBase__ + 20;
      var $n = __stackBase__ + 24;
      var $flags = __stackBase__ + 28;
      var $timeout = __stackBase__ + 32;
      var $pbuf = __stackBase__ + 36;
      
      HEAP[$s_addr] = $s;
      HEAP[$args_addr] = $args;
      HEAP[$n] = -1;
      HEAP[$flags] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str59, allocate([ $pbuf, 0, 0, 0, $flags, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $8 = HEAP[$s_addr];
      var $9 = _internal_select($8, 1);
      HEAP[$timeout] = $9;
      
      
      if (HEAP[$timeout] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $12 = HEAP[$flags];
      var $13 = HEAP[$len];
      
      
      var $16 = HEAP[HEAP[$s_addr] + 8];
      var $17 = HEAP[$buf];
      var $18 = _send($16, $17, $13, $12);
      HEAP[$n] = $18;
      __label__ = 4;
      break;
     case 4:
      _PyBuffer_Release($pbuf);
      
      
      if (HEAP[$timeout] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $21 = HEAP[_socket_timeout];
      _PyErr_SetString($21, __str35);
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 6:
      
      
      if (HEAP[$n] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $26 = HEAP[HEAP[$s_addr] + 24];
      var $27 = FUNCTION_TABLE[$26]();
      HEAP[$0] = $27;
      __label__ = 9;
      break;
     case 8:
      var $28 = HEAP[$n];
      var $29 = _PyInt_FromLong($28);
      HEAP[$0] = $29;
      __label__ = 9;
      break;
     case 9:
      var $30 = HEAP[$0];
      HEAP[$retval] = $30;
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
  function _sock_sendall($s, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 92;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 92);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $buf = __stackBase__ + 16;
      var $len = __stackBase__ + 20;
      var $n = __stackBase__ + 24;
      var $flags = __stackBase__ + 28;
      var $timeout = __stackBase__ + 32;
      var $saved_errno = __stackBase__ + 36;
      var $pbuf = __stackBase__ + 40;
      
      HEAP[$s_addr] = $s;
      HEAP[$args_addr] = $args;
      HEAP[$n] = -1;
      HEAP[$flags] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str60, allocate([ $pbuf, 0, 0, 0, $flags, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$pbuf];
      HEAP[$buf] = $5;
      
      var $7 = HEAP[$pbuf + 8];
      HEAP[$len] = $7;
      __label__ = 3;
      break;
     case 3:
      var $8 = HEAP[$s_addr];
      var $9 = _internal_select($8, 1);
      HEAP[$timeout] = $9;
      HEAP[$n] = -1;
      
      
      if (HEAP[$timeout] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $12 = HEAP[$flags];
      var $13 = HEAP[$len];
      
      
      var $16 = HEAP[HEAP[$s_addr] + 8];
      var $17 = HEAP[$buf];
      var $18 = _send($16, $17, $13, $12);
      HEAP[$n] = $18;
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[$timeout] == 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      _PyBuffer_Release($pbuf);
      var $21 = HEAP[_socket_timeout];
      _PyErr_SetString($21, __str35);
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 7:
      var $22 = ___errno_location();
      var $23 = HEAP[$22];
      HEAP[$saved_errno] = $23;
      var $24 = _PyErr_CheckSignals();
      
      if ($24 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      _PyBuffer_Release($pbuf);
      HEAP[$0] = 0;
      __label__ = 16;
      break;
     case 9:
      
      
      if (HEAP[$n] < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      if (HEAP[$saved_errno] == 4) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      var $32 = HEAP[$buf] + HEAP[$n];
      HEAP[$buf] = $32;
      
      
      var $35 = HEAP[$len] - HEAP[$n];
      HEAP[$len] = $35;
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$len] > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      _PyBuffer_Release($pbuf);
      
      
      if (HEAP[$n] < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      var $42 = HEAP[HEAP[$s_addr] + 24];
      var $43 = FUNCTION_TABLE[$42]();
      HEAP[$0] = $43;
      __label__ = 16;
      break;
     case 15:
      
      var $45 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $45;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 16;
      break;
     case 16:
      var $46 = HEAP[$0];
      HEAP[$retval] = $46;
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
  function _sock_sendto($s, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 232;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 232);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $1 = __stackBase__ + 16;
      var $pbuf = __stackBase__ + 20;
      var $addro = __stackBase__ + 72;
      var $buf = __stackBase__ + 76;
      var $len = __stackBase__ + 80;
      var $addrbuf = __stackBase__ + 84;
      var $addrlen = __stackBase__ + 212;
      var $n = __stackBase__ + 216;
      var $flags = __stackBase__ + 220;
      var $timeout = __stackBase__ + 224;
      var $arglen = __stackBase__ + 228;
      
      HEAP[$s_addr] = $s;
      HEAP[$args_addr] = $args;
      HEAP[$n] = -1;
      HEAP[$flags] = 0;
      var $2 = HEAP[$args_addr];
      var $3 = _PyTuple_Size($2);
      HEAP[$arglen] = $3;
      var $4 = HEAP[$arglen];
      if ($4 == 2) {
        __label__ = 1;
        break;
      } else if ($4 == 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = HEAP[$args_addr];
      var $6 = _PyArg_ParseTuple($5, __str61, allocate([ $pbuf, 0, 0, 0, $addro, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 4;
      break;
     case 2:
      var $7 = HEAP[$args_addr];
      var $8 = _PyArg_ParseTuple($7, __str62, allocate([ $pbuf, 0, 0, 0, $flags, 0, 0, 0, $addro, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 4;
      break;
     case 3:
      var $9 = HEAP[_PyExc_TypeError];
      var $10 = HEAP[$arglen];
      var $11 = _PyErr_Format($9, __str63, allocate([ $10, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 4;
      break;
     case 4:
      var $12 = _PyErr_Occurred();
      
      if ($12 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$1] = 0;
      __label__ = 15;
      break;
     case 6:
      
      var $15 = HEAP[$pbuf];
      HEAP[$buf] = $15;
      
      var $17 = HEAP[$pbuf + 8];
      HEAP[$len] = $17;
      var $addrbuf6 = $addrbuf;
      var $18 = HEAP[$addro];
      var $19 = HEAP[$s_addr];
      var $20 = _getsockaddrarg($19, $18, $addrbuf6, $addrlen);
      
      if ($20 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _PyBuffer_Release($pbuf);
      HEAP[$1] = 0;
      __label__ = 15;
      break;
     case 8:
      var $22 = HEAP[$s_addr];
      var $23 = _internal_select($22, 1);
      HEAP[$timeout] = $23;
      
      
      if (HEAP[$timeout] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $26 = HEAP[$addrlen];
      
      
      HEAP[$0] = $addrbuf;
      var $28 = HEAP[$flags];
      var $29 = HEAP[$len];
      
      
      var $32 = HEAP[HEAP[$s_addr] + 8];
      var $33 = HEAP[$buf];
      
      var $val = HEAP[$0];
      var $34 = _sendto($32, $33, $29, $28, $val, $26);
      HEAP[$n] = $34;
      __label__ = 10;
      break;
     case 10:
      _PyBuffer_Release($pbuf);
      
      
      if (HEAP[$timeout] == 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $37 = HEAP[_socket_timeout];
      _PyErr_SetString($37, __str35);
      HEAP[$1] = 0;
      __label__ = 15;
      break;
     case 12:
      
      
      if (HEAP[$n] < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      var $42 = HEAP[HEAP[$s_addr] + 24];
      var $43 = FUNCTION_TABLE[$42]();
      HEAP[$1] = $43;
      __label__ = 15;
      break;
     case 14:
      var $44 = HEAP[$n];
      var $45 = _PyInt_FromLong($44);
      HEAP[$1] = $45;
      __label__ = 15;
      break;
     case 15:
      var $46 = HEAP[$1];
      HEAP[$retval] = $46;
      __label__ = 16;
      break;
     case 16:
      var $retval19 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_shutdown($s, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $how = __stackBase__ + 16;
      var $res = __stackBase__ + 20;
      
      HEAP[$s_addr] = $s;
      HEAP[$arg_addr] = $arg;
      var $1 = HEAP[$arg_addr];
      var $2 = _PyInt_AsLong($1);
      HEAP[$how] = $2;
      
      var $4 = HEAP[$how] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
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
      
      
      var $9 = HEAP[HEAP[$s_addr] + 8];
      var $10 = HEAP[$how];
      var $11 = _shutdown($9, $10);
      HEAP[$res] = $11;
      
      
      if (HEAP[$res] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $16 = HEAP[HEAP[$s_addr] + 24];
      var $17 = FUNCTION_TABLE[$16]();
      HEAP[$0] = $17;
      __label__ = 6;
      break;
     case 5:
      
      var $19 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $19;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 6;
      break;
     case 6:
      var $20 = HEAP[$0];
      HEAP[$retval] = $20;
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
  function _sock_dealloc($s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      
      HEAP[$s_addr] = $s;
      
      
      
      var $3 = HEAP[HEAP[$s_addr] + 8] != -1;
      if ($3) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[HEAP[$s_addr] + 8];
      var $7 = _close($6);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      
      var $13 = HEAP[HEAP[HEAP[$s_addr] + 4] + 160];
      
      var $15 = HEAP[$s_addr];
      FUNCTION_TABLE[$13]($15);
      __label__ = 3;
      break;
     case 3:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_repr($s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 524;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 524);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr = __stackBase__;
      var $retval = __stackBase__ + 4;
      var $0 = __stackBase__ + 8;
      var $buf = __stackBase__ + 12;
      
      HEAP[$s_addr] = $s;
      
      
      var $3 = HEAP[HEAP[$s_addr] + 20];
      
      
      var $6 = HEAP[HEAP[$s_addr] + 16];
      
      
      var $9 = HEAP[HEAP[$s_addr] + 12];
      
      
      var $12 = HEAP[HEAP[$s_addr] + 8];
      var $buf1 = $buf;
      var $13 = _PyOS_snprintf($buf1, 512, __str96, allocate([ $12, 0, 0, 0, $9, 0, 0, 0, $6, 0, 0, 0, $3, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      var $buf2 = $buf;
      var $14 = _PyString_FromString($buf2);
      HEAP[$0] = $14;
      var $15 = HEAP[$0];
      HEAP[$retval] = $15;
      __label__ = 1;
      break;
     case 1:
      var $retval3 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr = __stackBase__;
      var $args_addr = __stackBase__ + 4;
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $new = __stackBase__ + 20;
      
      HEAP[$type_addr] = $type;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      
      var $3 = HEAP[HEAP[$type_addr] + 152];
      var $4 = HEAP[$type_addr];
      var $5 = FUNCTION_TABLE[$3]($4, 0);
      HEAP[$new] = $5;
      
      
      if (HEAP[$new] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $10 = HEAP[$new] + 8;
      HEAP[$10] = -1;
      
      
      var $13 = HEAP[$new] + 28;
      HEAP[$13] = -1;
      
      
      var $16 = HEAP[$new] + 24;
      HEAP[$16] = FUNCTION_TABLE_OFFSET + 2;
      __label__ = 2;
      break;
     case 2:
      var $17 = HEAP[$new];
      HEAP[$0] = $17;
      var $18 = HEAP[$0];
      HEAP[$retval] = $18;
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
  function _sock_initobj($self, $args, $kwds) {
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
      var $kwds_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $s = __stackBase__ + 20;
      var $fd = __stackBase__ + 24;
      var $family = __stackBase__ + 28;
      var $type = __stackBase__ + 32;
      var $proto = __stackBase__ + 36;
      
      HEAP[$self_addr] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kwds_addr] = $kwds;
      
      var $2 = HEAP[$self_addr];
      HEAP[$s] = $2;
      HEAP[$family] = 2;
      HEAP[$type] = 1;
      HEAP[$proto] = 0;
      var $3 = HEAP[$args_addr];
      var $4 = HEAP[$kwds_addr];
      var $5 = _PyArg_ParseTupleAndKeywords($3, $4, __str97, _keywords_11197, allocate([ $family, 0, 0, 0, $type, 0, 0, 0, $proto, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 2:
      var $7 = HEAP[$proto];
      var $8 = HEAP[$type];
      var $9 = HEAP[$family];
      var $10 = _socket($9, $8, $7);
      HEAP[$fd] = $10;
      
      
      if (HEAP[$fd] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $13 = _set_error();
      HEAP[$0] = -1;
      __label__ = 5;
      break;
     case 4:
      var $14 = HEAP[$proto];
      var $15 = HEAP[$type];
      var $16 = HEAP[$family];
      var $17 = HEAP[$s];
      var $18 = HEAP[$fd];
      _init_sockobject($17, $18, $16, $15, $14);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $19 = HEAP[$0];
      HEAP[$retval] = $19;
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
  function _socket_gethostname($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1044;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 1044);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $buf = __stackBase__ + 16;
      var $res = __stackBase__ + 1040;
      
      HEAP[__stackBase__] = $self;
      HEAP[$unused_addr] = $unused;
      var $buf1 = $buf;
      var $1 = _gethostname($buf1, 1023);
      HEAP[$res] = $1;
      
      
      if (HEAP[$res] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = _set_error();
      HEAP[$0] = $4;
      __label__ = 3;
      break;
     case 2:
      
      HEAP[$buf + 1023] = 0;
      var $buf3 = $buf;
      var $6 = _PyString_FromString($buf3);
      HEAP[$0] = $6;
      __label__ = 3;
      break;
     case 3:
      var $7 = HEAP[$0];
      HEAP[$retval] = $7;
      __label__ = 4;
      break;
     case 4:
      var $retval5 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_gethostbyname($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 148;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 148);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $name = __stackBase__ + 16;
      var $addrbuf = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str99, allocate([ $name, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $addrbuf2 = $addrbuf;
      var $4 = HEAP[$name];
      var $5 = _setipaddr($4, $addrbuf2, 128, 2);
      
      if ($5 < 0) {
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
      var $addrbuf6 = $addrbuf;
      var $7 = _makeipaddr($addrbuf6, 16);
      HEAP[$0] = $7;
      __label__ = 5;
      break;
     case 5:
      var $8 = HEAP[$0];
      HEAP[$retval] = $8;
      __label__ = 6;
      break;
     case 6:
      var $retval9 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _gethost_common($h, $addr, $alen, $af) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 96;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 96);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $h_addr = __stackBase__;
      var $addr_addr = __stackBase__ + 4;
      var $alen_addr = __stackBase__ + 8;
      var $af_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $pch = __stackBase__ + 24;
      var $rtn_tuple = __stackBase__ + 28;
      var $name_list = __stackBase__ + 32;
      var $addr_list = __stackBase__ + 36;
      var $tmp = __stackBase__ + 40;
      var $status = __stackBase__ + 44;
      var $status21 = __stackBase__ + 48;
      var $sin = __stackBase__ + 52;
      var $sin6 = __stackBase__ + 68;
      
      HEAP[$h_addr] = $h;
      HEAP[$addr_addr] = $addr;
      HEAP[$alen_addr] = $alen;
      HEAP[$af_addr] = $af;
      HEAP[$rtn_tuple] = 0;
      HEAP[$name_list] = 0;
      HEAP[$addr_list] = 0;
      
      
      if (HEAP[$h_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = ___h_errno_location();
      var $4 = HEAP[$3];
      var $5 = _set_herror($4);
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 2:
      
      
      
      
      
      if (HEAP[HEAP[$h_addr] + 8] != HEAP[$af_addr]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = _strerror(97);
      var $12 = HEAP[_socket_error];
      _PyErr_SetString($12, $11);
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 4:
      var $13 = HEAP[$af_addr];
      if ($13 == 2) {
        __label__ = 5;
        break;
      } else if ($13 == 10) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 5:
      
      
      if (HEAP[$alen_addr] <= 15) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 7:
      __label__ = 10;
      break;
     case 8:
      
      
      if (HEAP[$alen_addr] <= 27) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 10:
      var $18 = _PyList_New(0);
      HEAP[$name_list] = $18;
      
      
      if (HEAP[$name_list] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $21 = _PyList_New(0);
      HEAP[$addr_list] = $21;
      
      
      if (HEAP[$addr_list] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      if (HEAP[HEAP[$h_addr] + 4] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 13:
      
      
      var $30 = HEAP[HEAP[$h_addr] + 4];
      HEAP[$pch] = $30;
      __label__ = 19;
      break;
     case 14:
      
      var $32 = HEAP[HEAP[$pch]];
      var $33 = _PyString_FromString($32);
      HEAP[$tmp] = $33;
      
      
      if (HEAP[$tmp] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $36 = HEAP[$name_list];
      var $37 = HEAP[$tmp];
      var $38 = _PyList_Append($36, $37);
      HEAP[$status] = $38;
      
      
      
      var $42 = HEAP[HEAP[$tmp]] - 1;
      
      var $44 = HEAP[$tmp];
      HEAP[$44] = $42;
      
      
      
      
      if (HEAP[HEAP[$tmp]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $53 = HEAP[HEAP[HEAP[$tmp] + 4] + 24];
      var $54 = HEAP[$tmp];
      FUNCTION_TABLE[$53]($54);
      __label__ = 17;
      break;
     case 17:
      
      
      if (HEAP[$status] != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      var $58 = HEAP[$pch] + 4;
      HEAP[$pch] = $58;
      __label__ = 19;
      break;
     case 19:
      
      
      
      if (HEAP[HEAP[$pch]] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      var $64 = HEAP[HEAP[$h_addr] + 16];
      HEAP[$pch] = $64;
      __label__ = 36;
      break;
     case 21:
      var $65 = HEAP[$af_addr];
      if ($65 == 2) {
        __label__ = 22;
        break;
      } else if ($65 == 10) {
        __label__ = 26;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 22:
      var $sin23 = $sin;
      _llvm_memset_p0i8_i32($sin23, 0, 16, 1, 0);
      
      var $67 = HEAP[$af_addr] & 65535;
      
      HEAP[$sin] = $67;
      
      var $70 = HEAP[HEAP[$pch]];
      
      var $72 = $sin + 4;
      _llvm_memcpy_p0i8_p0i8_i32($72, $70, 4, 1, 0);
      var $sin24 = $sin;
      var $73 = _makeipaddr($sin24, 16);
      HEAP[$tmp] = $73;
      
      
      
      
      
      if (HEAP[HEAP[$h_addr] + 16] == HEAP[$pch]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 23:
      
      
      if (HEAP[$alen_addr] > 15) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      var $82 = HEAP[$addr_addr];
      var $sin28 = $sin;
      _llvm_memcpy_p0i8_p0i8_i32($82, $sin28, 16, 1, 0);
      __label__ = 25;
      break;
     case 25:
      __label__ = 31;
      break;
     case 26:
      var $sin631 = $sin6;
      _llvm_memset_p0i8_i32($sin631, 0, 28, 1, 0);
      
      var $84 = HEAP[$af_addr] & 65535;
      
      HEAP[$sin6] = $84;
      
      var $87 = HEAP[HEAP[$pch]];
      
      var $89 = $sin6 + 8;
      _llvm_memcpy_p0i8_p0i8_i32($89, $87, 16, 1, 0);
      var $sin632 = $sin6;
      var $90 = _makeipaddr($sin632, 28);
      HEAP[$tmp] = $90;
      
      
      
      
      
      if (HEAP[HEAP[$h_addr] + 16] == HEAP[$pch]) {
        __label__ = 27;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 27:
      
      
      if (HEAP[$alen_addr] > 27) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      var $99 = HEAP[$addr_addr];
      var $sin636 = $sin6;
      _llvm_memcpy_p0i8_p0i8_i32($99, $sin636, 28, 1, 0);
      __label__ = 29;
      break;
     case 29:
      __label__ = 31;
      break;
     case 30:
      var $100 = HEAP[_socket_error];
      _PyErr_SetString($100, __str3);
      HEAP[$0] = 0;
      __label__ = 45;
      break;
     case 31:
      
      
      if (HEAP[$tmp] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      var $103 = HEAP[$addr_list];
      var $104 = HEAP[$tmp];
      var $105 = _PyList_Append($103, $104);
      HEAP[$status21] = $105;
      
      
      
      var $109 = HEAP[HEAP[$tmp]] - 1;
      
      var $111 = HEAP[$tmp];
      HEAP[$111] = $109;
      
      
      
      
      if (HEAP[HEAP[$tmp]] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $120 = HEAP[HEAP[HEAP[$tmp] + 4] + 24];
      var $121 = HEAP[$tmp];
      FUNCTION_TABLE[$120]($121);
      __label__ = 34;
      break;
     case 34:
      
      
      if (HEAP[$status21] != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      var $125 = HEAP[$pch] + 4;
      HEAP[$pch] = $125;
      __label__ = 36;
      break;
     case 36:
      
      
      
      if (HEAP[HEAP[$pch]] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      var $131 = HEAP[HEAP[$h_addr]];
      var $132 = HEAP[$name_list];
      var $133 = HEAP[$addr_list];
      var $134 = _Py_BuildValue(__str100, allocate([ $131, 0, 0, 0, $132, 0, 0, 0, $133, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$rtn_tuple] = $134;
      __label__ = 38;
      break;
     case 38:
      
      
      if (HEAP[$name_list] != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 39:
      
      
      
      var $140 = HEAP[HEAP[$name_list]] - 1;
      
      var $142 = HEAP[$name_list];
      HEAP[$142] = $140;
      
      
      
      
      if (HEAP[HEAP[$name_list]] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      
      
      var $151 = HEAP[HEAP[HEAP[$name_list] + 4] + 24];
      var $152 = HEAP[$name_list];
      FUNCTION_TABLE[$151]($152);
      __label__ = 41;
      break;
     case 41:
      
      
      if (HEAP[$addr_list] != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 42:
      
      
      
      var $158 = HEAP[HEAP[$addr_list]] - 1;
      
      var $160 = HEAP[$addr_list];
      HEAP[$160] = $158;
      
      
      
      
      if (HEAP[HEAP[$addr_list]] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      
      
      var $169 = HEAP[HEAP[HEAP[$addr_list] + 4] + 24];
      var $170 = HEAP[$addr_list];
      FUNCTION_TABLE[$169]($170);
      __label__ = 44;
      break;
     case 44:
      var $171 = HEAP[$rtn_tuple];
      HEAP[$0] = $171;
      __label__ = 45;
      break;
     case 45:
      var $172 = HEAP[$0];
      HEAP[$retval] = $172;
      __label__ = 46;
      break;
     case 46:
      var $retval53 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval53;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_gethostbyname_ex($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 160;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 160);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $name = __stackBase__ + 16;
      var $h = __stackBase__ + 20;
      var $addr = __stackBase__ + 24;
      var $sa = __stackBase__ + 152;
      var $ret = __stackBase__ + 156;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str101, allocate([ $name, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $addr2 = $addr;
      var $4 = HEAP[$name];
      var $5 = _setipaddr($4, $addr2, 128, 2);
      
      if ($5 < 0) {
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
      var $7 = HEAP[$name];
      var $8 = _gethostbyname($7);
      HEAP[$h] = $8;
      
      HEAP[$sa] = $addr;
      
      
      
      var $12 = HEAP[HEAP[$sa]];
      var $addr7 = $addr;
      var $13 = HEAP[$h];
      var $14 = _gethost_common($13, $addr7, 128, $12);
      HEAP[$ret] = $14;
      var $15 = HEAP[$ret];
      HEAP[$0] = $15;
      __label__ = 5;
      break;
     case 5:
      var $16 = HEAP[$0];
      HEAP[$retval] = $16;
      __label__ = 6;
      break;
     case 6:
      var $retval10 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_gethostbyaddr($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 172;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 172);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $addr = __stackBase__ + 16;
      var $sa = __stackBase__ + 144;
      var $ip_num = __stackBase__ + 148;
      var $h = __stackBase__ + 152;
      var $ret = __stackBase__ + 156;
      var $ap = __stackBase__ + 160;
      var $al = __stackBase__ + 164;
      var $af = __stackBase__ + 168;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      
      HEAP[$sa] = $addr;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str102, allocate([ $ip_num, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      HEAP[$af] = 0;
      var $4 = HEAP[$ip_num];
      var $5 = HEAP[$sa];
      var $6 = HEAP[$af];
      var $7 = _setipaddr($4, $5, 128, $6);
      
      if ($7 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 4:
      
      
      
      var $12 = HEAP[HEAP[$sa]];
      HEAP[$af] = $12;
      HEAP[$ap] = 0;
      var $13 = HEAP[$af];
      if ($13 == 2) {
        __label__ = 5;
        break;
      } else if ($13 == 10) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      var $17 = HEAP[$sa] + 4;
      HEAP[$ap] = $17;
      HEAP[$al] = 4;
      __label__ = 8;
      break;
     case 6:
      
      
      
      var $21 = HEAP[$sa] + 8;
      HEAP[$ap] = $21;
      HEAP[$al] = 16;
      __label__ = 8;
      break;
     case 7:
      var $22 = HEAP[_socket_error];
      _PyErr_SetString($22, __str3);
      HEAP[$0] = 0;
      __label__ = 9;
      break;
     case 8:
      var $23 = HEAP[$al];
      var $24 = HEAP[$ap];
      var $25 = HEAP[$af];
      var $26 = _gethostbyaddr($24, $23, $25);
      HEAP[$h] = $26;
      var $addr9 = $addr;
      var $27 = HEAP[$h];
      var $28 = HEAP[$af];
      var $29 = _gethost_common($27, $addr9, 128, $28);
      HEAP[$ret] = $29;
      var $30 = HEAP[$ret];
      HEAP[$0] = $30;
      __label__ = 9;
      break;
     case 9:
      var $31 = HEAP[$0];
      HEAP[$retval] = $31;
      __label__ = 10;
      break;
     case 10:
      var $retval12 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_getservbyname($self, $args) {
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
      var $name = __stackBase__ + 16;
      var $proto = __stackBase__ + 20;
      var $sp = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$proto] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str103, allocate([ $name, 0, 0, 0, $proto, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$proto];
      var $5 = HEAP[$name];
      var $6 = _getservbyname($5, $4);
      HEAP[$sp] = $6;
      
      
      if (HEAP[$sp] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = HEAP[_socket_error];
      _PyErr_SetString($9, __str104);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      
      
      
      
      
      var $15 = HEAP[HEAP[$sp] + 8] & 65535 & 65535;
      var $16 = _ntohs($15);
      var $17 = $16;
      var $18 = _PyInt_FromLong($17);
      HEAP[$0] = $18;
      __label__ = 5;
      break;
     case 5:
      var $19 = HEAP[$0];
      HEAP[$retval] = $19;
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
  function _socket_getservbyport($self, $args) {
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
      var $port = __stackBase__ + 16;
      var $proto = __stackBase__ + 20;
      var $sp = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$proto] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str105, allocate([ $port, 0, 0, 0, $proto, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 2:
      
      
      if (HEAP[$port] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$port] > 65535) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $8 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($8, __str106);
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 5:
      var $9 = HEAP[$proto];
      
      
      
      var $13 = HEAP[$port] & 65535 & 65535;
      var $14 = _htons($13);
      var $15 = $14;
      var $16 = _getservbyport($15, $9);
      HEAP[$sp] = $16;
      
      
      if (HEAP[$sp] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $19 = HEAP[_socket_error];
      _PyErr_SetString($19, __str107);
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 7:
      
      
      var $22 = HEAP[HEAP[$sp]];
      var $23 = _PyString_FromString($22);
      HEAP[$0] = $23;
      __label__ = 8;
      break;
     case 8:
      var $24 = HEAP[$0];
      HEAP[$retval] = $24;
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
  function _socket_getprotobyname($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $name = __stackBase__ + 16;
      var $sp = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str108, allocate([ $name, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$name];
      var $5 = _getprotobyname($4);
      HEAP[$sp] = $5;
      
      
      if (HEAP[$sp] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_socket_error];
      _PyErr_SetString($8, __str109);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      
      
      var $11 = HEAP[HEAP[$sp] + 8];
      var $12 = _PyInt_FromLong($11);
      HEAP[$0] = $12;
      __label__ = 5;
      break;
     case 5:
      var $13 = HEAP[$0];
      HEAP[$retval] = $13;
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
  function _socket_socketpair($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $s0 = __stackBase__ + 16;
      var $s1 = __stackBase__ + 20;
      var $sv = __stackBase__ + 24;
      var $family = __stackBase__ + 32;
      var $type = __stackBase__ + 36;
      var $proto = __stackBase__ + 40;
      var $res = __stackBase__ + 44;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$s0] = 0;
      HEAP[$s1] = 0;
      HEAP[$type] = 1;
      HEAP[$proto] = 0;
      HEAP[$res] = 0;
      HEAP[$family] = 1;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str110, allocate([ $family, 0, 0, 0, $type, 0, 0, 0, $proto, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$proto];
      var $5 = HEAP[$type];
      var $6 = HEAP[$family];
      var $sv2 = $sv;
      var $7 = _socketpair($6, $5, $4, $sv2);
      
      if ($7 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = _set_error();
      HEAP[$0] = $9;
      __label__ = 19;
      break;
     case 4:
      var $10 = HEAP[$proto];
      var $11 = HEAP[$type];
      var $12 = HEAP[$family];
      
      var $14 = HEAP[$sv];
      var $15 = _new_sockobject($14, $12, $11, $10);
      HEAP[$s0] = $15;
      
      
      if (HEAP[$s0] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $18 = HEAP[$proto];
      var $19 = HEAP[$type];
      var $20 = HEAP[$family];
      
      var $22 = HEAP[$sv + 4];
      var $23 = _new_sockobject($22, $20, $19, $18);
      HEAP[$s1] = $23;
      
      
      if (HEAP[$s1] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $26 = HEAP[$s0];
      var $27 = HEAP[$s1];
      var $28 = _PyTuple_Pack(2, allocate([ $26, 0, 0, 0, $27, 0, 0, 0 ], [ "%struct.PySocketSockObject*", 0, 0, 0, "%struct.PySocketSockObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$res] = $28;
      __label__ = 7;
      break;
     case 7:
      
      
      if (HEAP[$res] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      if (HEAP[$s0] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      var $34 = HEAP[$sv];
      var $35 = _close($34);
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$s1] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      var $39 = HEAP[$sv + 4];
      var $40 = _close($39);
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$s0] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      var $44 = HEAP[$s0];
      
      
      var $47 = HEAP[$44] - 1;
      var $48 = $44;
      HEAP[$48] = $47;
      
      
      
      if (HEAP[$44] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[$s0] + 4] + 24];
      
      var $59 = HEAP[$s0];
      FUNCTION_TABLE[$57]($59);
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$s1] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      var $63 = HEAP[$s1];
      
      
      var $66 = HEAP[$63] - 1;
      var $67 = $63;
      HEAP[$67] = $66;
      
      
      
      if (HEAP[$63] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      var $76 = HEAP[HEAP[HEAP[$s1] + 4] + 24];
      
      var $78 = HEAP[$s1];
      FUNCTION_TABLE[$76]($78);
      __label__ = 18;
      break;
     case 18:
      var $79 = HEAP[$res];
      HEAP[$0] = $79;
      __label__ = 19;
      break;
     case 19:
      var $80 = HEAP[$0];
      HEAP[$retval] = $80;
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
  function _socket_fromfd($self, $args) {
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
      var $0 = __stackBase__ + 12;
      var $s = __stackBase__ + 16;
      var $fd = __stackBase__ + 20;
      var $family = __stackBase__ + 24;
      var $type = __stackBase__ + 28;
      var $proto = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$proto] = 0;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str111, allocate([ $fd, 0, 0, 0, $family, 0, 0, 0, $type, 0, 0, 0, $proto, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$fd];
      var $5 = _dup($4);
      HEAP[$fd] = $5;
      
      
      if (HEAP[$fd] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = _set_error();
      HEAP[$0] = $8;
      __label__ = 5;
      break;
     case 4:
      var $9 = HEAP[$proto];
      var $10 = HEAP[$type];
      var $11 = HEAP[$family];
      var $12 = HEAP[$fd];
      var $13 = _new_sockobject($12, $11, $10, $9);
      HEAP[$s] = $13;
      
      var $15 = HEAP[$s];
      HEAP[$0] = $15;
      __label__ = 5;
      break;
     case 5:
      var $16 = HEAP[$0];
      HEAP[$retval] = $16;
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
  function _socket_ntohs($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x1 = __stackBase__ + 16;
      var $x2 = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str112, allocate([ $x1, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if (HEAP[$x1] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($6, __str113);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      
      
      
      var $10 = HEAP[$x1] & 65535 & 65535;
      var $11 = _ntohs($10);
      var $12 = $11;
      HEAP[$x2] = $12;
      var $13 = HEAP[$x2];
      var $14 = _PyInt_FromLong($13);
      HEAP[$0] = $14;
      __label__ = 5;
      break;
     case 5:
      var $15 = HEAP[$0];
      HEAP[$retval] = $15;
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
  function _socket_ntohl($self, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$arg_addr] + 4] + 84] & 8388608) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      
      var $11 = HEAP[HEAP[$arg_addr] + 8];
      HEAP[$x] = $11;
      
      var $13 = HEAP[$x] == -1;
      if ($13) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      var $14 = _PyErr_Occurred();
      
      if ($14 != 0) {
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
      
      
      if (HEAP[$x] < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $18 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($18, __str113);
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 6:
      __label__ = 13;
      break;
     case 7:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$arg_addr] + 4] + 84] & 16777216) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      var $26 = HEAP[$arg_addr];
      var $27 = _PyLong_AsUnsignedLong($26);
      HEAP[$x] = $27;
      
      var $29 = HEAP[$x] == -1;
      if ($29) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      var $30 = _PyErr_Occurred();
      
      if ($30 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 11:
      __label__ = 13;
      break;
     case 12:
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[$arg_addr] + 4] + 12];
      var $37 = HEAP[_PyExc_TypeError];
      var $38 = _PyErr_Format($37, __str114, allocate([ $36, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $38;
      __label__ = 17;
      break;
     case 13:
      
      var $40 = HEAP[$x] == -1;
      if ($40) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      var $41 = _PyErr_Occurred();
      
      if ($41 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$0] = 0;
      __label__ = 17;
      break;
     case 16:
      var $43 = HEAP[$x];
      var $44 = _ntohl($43);
      var $45 = _PyLong_FromUnsignedLong($44);
      HEAP[$0] = $45;
      __label__ = 17;
      break;
     case 17:
      var $46 = HEAP[$0];
      HEAP[$retval] = $46;
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
  function _socket_htons($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x1 = __stackBase__ + 16;
      var $x2 = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str115, allocate([ $x1, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if (HEAP[$x1] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($6, __str113);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      
      
      
      var $10 = HEAP[$x1] & 65535 & 65535;
      var $11 = _htons($10);
      var $12 = $11;
      HEAP[$x2] = $12;
      var $13 = HEAP[$x2];
      var $14 = _PyInt_FromLong($13);
      HEAP[$0] = $14;
      __label__ = 5;
      break;
     case 5:
      var $15 = HEAP[$0];
      HEAP[$retval] = $15;
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
  function _socket_htonl($self, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $arg_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $x = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$arg_addr] = $arg;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$arg_addr] + 4] + 84] & 8388608) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      
      var $11 = HEAP[HEAP[$arg_addr] + 8];
      HEAP[$x] = $11;
      
      var $13 = HEAP[$x] == -1;
      if ($13) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      var $14 = _PyErr_Occurred();
      
      if ($14 != 0) {
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
      
      
      if (HEAP[$x] < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $18 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($18, __str113);
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 6:
      __label__ = 13;
      break;
     case 7:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$arg_addr] + 4] + 84] & 16777216) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      var $26 = HEAP[$arg_addr];
      var $27 = _PyLong_AsUnsignedLong($26);
      HEAP[$x] = $27;
      
      var $29 = HEAP[$x] == -1;
      if ($29) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      var $30 = _PyErr_Occurred();
      
      if ($30 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 11:
      __label__ = 13;
      break;
     case 12:
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[$arg_addr] + 4] + 12];
      var $37 = HEAP[_PyExc_TypeError];
      var $38 = _PyErr_Format($37, __str114, allocate([ $36, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $38;
      __label__ = 14;
      break;
     case 13:
      var $39 = HEAP[$x];
      var $40 = _htonl($39);
      var $41 = _PyLong_FromUnsignedLong($40);
      HEAP[$0] = $41;
      __label__ = 14;
      break;
     case 14:
      var $42 = HEAP[$0];
      HEAP[$retval] = $42;
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
  function _socket_inet_aton($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $buf = __stackBase__ + 16;
      var $ip_addr = __stackBase__ + 20;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str116, allocate([ $ip_addr, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$ip_addr];
      var $5 = _inet_aton($4, $buf);
      
      if ($5 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $buf3 = $buf;
      var $7 = _PyString_FromStringAndSize($buf3, 4);
      HEAP[$0] = $7;
      __label__ = 5;
      break;
     case 4:
      var $8 = HEAP[_socket_error];
      _PyErr_SetString($8, __str117);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 5:
      var $9 = HEAP[$0];
      HEAP[$retval] = $9;
      __label__ = 6;
      break;
     case 6:
      var $retval7 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_inet_ntoa($self, $args) {
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
      var $packed_str = __stackBase__ + 16;
      var $addr_len = __stackBase__ + 20;
      var $packed_addr = __stackBase__ + 24;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str118, allocate([ $packed_str, 0, 0, 0, $addr_len, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if (HEAP[$addr_len] != 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_socket_error];
      _PyErr_SetString($6, __str119);
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      var $7 = HEAP[$addr_len];
      var $8 = HEAP[$packed_str];
      var $packed_addr4 = $packed_addr;
      _llvm_memcpy_p0i8_p0i8_i32($packed_addr4, $8, $7, 1, 0);
      
      var $val = HEAP[$packed_addr];
      var $9 = _inet_ntoa($val);
      var $10 = _PyString_FromString($9);
      HEAP[$0] = $10;
      __label__ = 5;
      break;
     case 5:
      var $11 = HEAP[$0];
      HEAP[$retval] = $11;
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
  function _socket_inet_pton($self, $args) {
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
      var $af = __stackBase__ + 16;
      var $ip = __stackBase__ + 20;
      var $retval1 = __stackBase__ + 24;
      var $packed = __stackBase__ + 28;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str120, allocate([ $af, 0, 0, 0, $ip, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$ip];
      var $5 = HEAP[$af];
      var $packed3 = $packed;
      var $6 = _inet_pton($5, $4, $packed3);
      HEAP[$retval1] = $6;
      
      
      if (HEAP[$retval1] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = HEAP[_socket_error];
      var $10 = _PyErr_SetFromErrno($9);
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 4:
      
      
      if (HEAP[$retval1] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $13 = HEAP[_socket_error];
      _PyErr_SetString($13, __str121);
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 6:
      
      
      if (HEAP[$af] == 2) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $packed9 = $packed;
      var $16 = _PyString_FromStringAndSize($packed9, 4);
      HEAP[$0] = $16;
      __label__ = 11;
      break;
     case 8:
      
      
      if (HEAP[$af] == 10) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $packed12 = $packed;
      var $19 = _PyString_FromStringAndSize($packed12, 16);
      HEAP[$0] = $19;
      __label__ = 11;
      break;
     case 10:
      var $20 = HEAP[_socket_error];
      _PyErr_SetString($20, __str8);
      HEAP[$0] = 0;
      __label__ = 11;
      break;
     case 11:
      var $21 = HEAP[$0];
      HEAP[$retval] = $21;
      __label__ = 12;
      break;
     case 12:
      var $retval15 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_inet_ntop($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 79;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 79);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $af = __stackBase__ + 16;
      var $packed = __stackBase__ + 20;
      var $len = __stackBase__ + 24;
      var $retval1 = __stackBase__ + 28;
      var $ip = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = $ip;
      _llvm_memset_p0i8_i32($1, 0, 47, 1, 0);
      var $2 = HEAP[$args_addr];
      var $3 = _PyArg_ParseTuple($2, __str122, allocate([ $af, 0, 0, 0, $packed, 0, 0, 0, $len, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      
      if (HEAP[$af] == 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      if (HEAP[$len] != 4) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $9 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($9, __str123);
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 5:
      __label__ = 11;
      break;
     case 6:
      
      
      if (HEAP[$af] == 10) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      if (HEAP[$len] != 16) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $14 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($14, __str123);
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 9:
      __label__ = 11;
      break;
     case 10:
      var $15 = HEAP[$af];
      var $16 = HEAP[_PyExc_ValueError];
      var $17 = _PyErr_Format($16, __str124, allocate([ $15, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 11:
      var $18 = HEAP[$packed];
      var $19 = HEAP[$af];
      var $ip12 = $ip;
      var $20 = _inet_ntop($19, $18, $ip12, 47);
      HEAP[$retval1] = $20;
      
      
      if (HEAP[$retval1] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $23 = HEAP[_socket_error];
      var $24 = _PyErr_SetFromErrno($23);
      HEAP[$0] = 0;
      __label__ = 14;
      break;
     case 13:
      var $25 = HEAP[$retval1];
      var $26 = _PyString_FromString($25);
      HEAP[$0] = $26;
      __label__ = 14;
      break;
     case 14:
      var $27 = HEAP[$0];
      HEAP[$retval] = $27;
      __label__ = 15;
      break;
     case 15:
      var $retval16 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_getaddrinfo($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 142;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 142);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_366 = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $hints = __stackBase__ + 20;
      var $res = __stackBase__ + 52;
      var $res0 = __stackBase__ + 56;
      var $hobj = __stackBase__ + 60;
      var $pobj = __stackBase__ + 64;
      var $pbuf = __stackBase__ + 68;
      var $hptr = __stackBase__ + 98;
      var $pptr = __stackBase__ + 102;
      var $family = __stackBase__ + 106;
      var $socktype = __stackBase__ + 110;
      var $protocol = __stackBase__ + 114;
      var $flags = __stackBase__ + 118;
      var $error = __stackBase__ + 122;
      var $all = __stackBase__ + 126;
      var $single = __stackBase__ + 130;
      var $idna = __stackBase__ + 134;
      var $addr = __stackBase__ + 138;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$res0] = 0;
      HEAP[$hobj] = 0;
      HEAP[$pobj] = 0;
      HEAP[$all] = 0;
      HEAP[$single] = 0;
      HEAP[$idna] = 0;
      HEAP[$flags] = 0;
      var $1 = HEAP[$flags];
      HEAP[$protocol] = $1;
      var $2 = HEAP[$protocol];
      HEAP[$socktype] = $2;
      var $3 = HEAP[$socktype];
      HEAP[$family] = $3;
      HEAP[$family] = 0;
      var $4 = HEAP[$args_addr];
      var $5 = _PyArg_ParseTuple($4, __str125, allocate([ $hobj, 0, 0, 0, $pobj, 0, 0, 0, $family, 0, 0, 0, $socktype, 0, 0, 0, $protocol, 0, 0, 0, $flags, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 53;
      break;
     case 2:
      
      
      if (HEAP[$hobj] == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$hptr] = 0;
      __label__ = 11;
      break;
     case 4:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$hobj] + 4] + 84] & 268435456) != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $16 = HEAP[$hobj];
      var $17 = _PyObject_CallMethod($16, __str126, __str127, allocate([ __str23, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$idna] = $17;
      
      
      if (HEAP[$idna] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 53;
      break;
     case 7:
      var $20 = HEAP[$idna];
      var $21 = _PyString_AsString($20);
      HEAP[$hptr] = $21;
      __label__ = 11;
      break;
     case 8:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$hobj] + 4] + 84] & 134217728) != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $29 = HEAP[$hobj];
      var $30 = _PyString_AsString($29);
      HEAP[$hptr] = $30;
      __label__ = 11;
      break;
     case 10:
      var $31 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($31, __str128);
      HEAP[$0] = 0;
      __label__ = 53;
      break;
     case 11:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$pobj] + 4] + 84] & 8388608) != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $39 = HEAP[$pobj];
      var $40 = _PyInt_AsLong($39);
      var $pbuf12 = $pbuf;
      var $41 = _PyOS_snprintf($pbuf12, 30, __str129, allocate([ $40, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      
      HEAP[$pptr] = $pbuf;
      __label__ = 18;
      break;
     case 13:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$pobj] + 4] + 84] & 134217728) != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $49 = HEAP[$pobj];
      var $50 = _PyString_AsString($49);
      HEAP[$pptr] = $50;
      __label__ = 18;
      break;
     case 15:
      
      
      if (HEAP[$pobj] == __Py_NoneStruct) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      HEAP[$pptr] = 0;
      __label__ = 18;
      break;
     case 17:
      var $53 = HEAP[_socket_error];
      _PyErr_SetString($53, __str130);
      __label__ = 41;
      break;
     case 18:
      var $hints20 = $hints;
      _llvm_memset_p0i8_i32($hints20, 0, 32, 1, 0);
      var $54 = HEAP[$family];
      
      HEAP[$hints + 4] = $54;
      var $56 = HEAP[$socktype];
      
      HEAP[$hints + 8] = $56;
      var $58 = HEAP[$protocol];
      
      HEAP[$hints + 12] = $58;
      var $60 = HEAP[$flags];
      
      HEAP[$hints] = $60;
      var $62 = HEAP[$hptr];
      var $63 = HEAP[$pptr];
      var $64 = _getaddrinfo($62, $63, $hints, $res0);
      HEAP[$error] = $64;
      
      
      if (HEAP[$error] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $67 = HEAP[$error];
      var $68 = _set_gaierror($67);
      __label__ = 41;
      break;
     case 20:
      var $69 = _PyList_New(0);
      HEAP[$all] = $69;
      
      
      if (HEAP[$all] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      var $72 = HEAP[$res0];
      HEAP[$res] = $72;
      __label__ = 34;
      break;
     case 22:
      var $73 = HEAP[$protocol];
      
      
      var $76 = HEAP[HEAP[$res] + 16];
      
      
      var $79 = HEAP[HEAP[$res] + 20];
      var $80 = _makesockaddr(-1, $79, $76, $73);
      HEAP[$addr] = $80;
      
      
      if (HEAP[$addr] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      if (HEAP[HEAP[$res] + 24] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      var $89 = HEAP[HEAP[$res] + 24];
      HEAP[$iftmp_366] = $89;
      __label__ = 26;
      break;
     case 25:
      HEAP[$iftmp_366] = __str12;
      __label__ = 26;
      break;
     case 26:
      
      
      var $92 = HEAP[HEAP[$res] + 12];
      
      
      var $95 = HEAP[HEAP[$res] + 8];
      
      
      var $98 = HEAP[HEAP[$res] + 4];
      var $99 = HEAP[$iftmp_366];
      var $100 = HEAP[$addr];
      var $101 = _Py_BuildValue(__str131, allocate([ $98, 0, 0, 0, $95, 0, 0, 0, $92, 0, 0, 0, $99, 0, 0, 0, $100, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$single] = $101;
      
      
      
      var $105 = HEAP[HEAP[$addr]] - 1;
      
      var $107 = HEAP[$addr];
      HEAP[$107] = $105;
      
      
      
      
      if (HEAP[HEAP[$addr]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $116 = HEAP[HEAP[HEAP[$addr] + 4] + 24];
      var $117 = HEAP[$addr];
      FUNCTION_TABLE[$116]($117);
      __label__ = 28;
      break;
     case 28:
      
      
      if (HEAP[$single] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      var $120 = HEAP[$all];
      var $121 = HEAP[$single];
      var $122 = _PyList_Append($120, $121);
      
      if ($122 != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      if (HEAP[$single] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 31:
      
      
      
      var $129 = HEAP[HEAP[$single]] - 1;
      
      var $131 = HEAP[$single];
      HEAP[$131] = $129;
      
      
      
      
      if (HEAP[HEAP[$single]] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      var $140 = HEAP[HEAP[HEAP[$single] + 4] + 24];
      var $141 = HEAP[$single];
      FUNCTION_TABLE[$140]($141);
      __label__ = 33;
      break;
     case 33:
      
      
      var $144 = HEAP[HEAP[$res] + 28];
      HEAP[$res] = $144;
      __label__ = 34;
      break;
     case 34:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      if (HEAP[$idna] != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 36:
      
      
      
      var $152 = HEAP[HEAP[$idna]] - 1;
      
      var $154 = HEAP[$idna];
      HEAP[$154] = $152;
      
      
      
      
      if (HEAP[HEAP[$idna]] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $163 = HEAP[HEAP[HEAP[$idna] + 4] + 24];
      var $164 = HEAP[$idna];
      FUNCTION_TABLE[$163]($164);
      __label__ = 38;
      break;
     case 38:
      
      
      if (HEAP[$res0] != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      var $167 = HEAP[$res0];
      _freeaddrinfo($167);
      __label__ = 40;
      break;
     case 40:
      var $168 = HEAP[$all];
      HEAP[$0] = $168;
      __label__ = 53;
      break;
     case 41:
      
      
      if (HEAP[$single] != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 42:
      
      
      
      var $174 = HEAP[HEAP[$single]] - 1;
      
      var $176 = HEAP[$single];
      HEAP[$176] = $174;
      
      
      
      
      if (HEAP[HEAP[$single]] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      
      
      var $185 = HEAP[HEAP[HEAP[$single] + 4] + 24];
      var $186 = HEAP[$single];
      FUNCTION_TABLE[$185]($186);
      __label__ = 44;
      break;
     case 44:
      
      
      if (HEAP[$all] != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 45:
      
      
      
      var $192 = HEAP[HEAP[$all]] - 1;
      
      var $194 = HEAP[$all];
      HEAP[$194] = $192;
      
      
      
      
      if (HEAP[HEAP[$all]] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      
      
      var $203 = HEAP[HEAP[HEAP[$all] + 4] + 24];
      var $204 = HEAP[$all];
      FUNCTION_TABLE[$203]($204);
      __label__ = 47;
      break;
     case 47:
      
      
      if (HEAP[$idna] != 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 48:
      
      
      
      var $210 = HEAP[HEAP[$idna]] - 1;
      
      var $212 = HEAP[$idna];
      HEAP[$212] = $210;
      
      
      
      
      if (HEAP[HEAP[$idna]] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      
      
      var $221 = HEAP[HEAP[HEAP[$idna] + 4] + 24];
      var $222 = HEAP[$idna];
      FUNCTION_TABLE[$221]($222);
      __label__ = 50;
      break;
     case 50:
      
      
      if (HEAP[$res0] != 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      var $225 = HEAP[$res0];
      _freeaddrinfo($225);
      __label__ = 52;
      break;
     case 52:
      HEAP[$0] = 0;
      __label__ = 53;
      break;
     case 53:
      var $226 = HEAP[$0];
      HEAP[$retval] = $226;
      __label__ = 54;
      break;
     case 54:
      var $retval55 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval55;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_getnameinfo($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1145;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 1145);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $sa = __stackBase__ + 16;
      var $flags = __stackBase__ + 20;
      var $hostp = __stackBase__ + 24;
      var $port = __stackBase__ + 28;
      var $flowinfo = __stackBase__ + 32;
      var $scope_id = __stackBase__ + 36;
      var $hbuf = __stackBase__ + 40;
      var $pbuf = __stackBase__ + 1065;
      var $hints = __stackBase__ + 1097;
      var $res = __stackBase__ + 1129;
      var $error = __stackBase__ + 1133;
      var $ret = __stackBase__ + 1137;
      var $sin6 = __stackBase__ + 1141;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$sa] = 0;
      HEAP[$res] = 0;
      HEAP[$ret] = 0;
      HEAP[$scope_id] = 0;
      var $1 = HEAP[$scope_id];
      HEAP[$flowinfo] = $1;
      var $2 = HEAP[$flowinfo];
      HEAP[$flags] = $2;
      var $3 = HEAP[$args_addr];
      var $4 = _PyArg_ParseTuple($3, __str132, allocate([ $sa, 0, 0, 0, $flags, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$sa] + 4] + 84] & 67108864) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $13 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($13, __str133);
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 4:
      var $14 = HEAP[$sa];
      var $15 = _PyArg_ParseTuple($14, __str134, allocate([ $hostp, 0, 0, 0, $port, 0, 0, 0, $flowinfo, 0, 0, 0, $scope_id, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($15 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$0] = 0;
      __label__ = 21;
      break;
     case 6:
      var $17 = HEAP[$port];
      var $pbuf6 = $pbuf;
      var $18 = _PyOS_snprintf($pbuf6, 32, __str135, allocate([ $17, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      var $hints7 = $hints;
      _llvm_memset_p0i8_i32($hints7, 0, 32, 1, 0);
      
      HEAP[$hints + 4] = 0;
      
      HEAP[$hints + 8] = 2;
      var $21 = HEAP[$hostp];
      var $pbuf8 = $pbuf;
      var $22 = _getaddrinfo($21, $pbuf8, $hints, $res);
      HEAP[$error] = $22;
      
      
      if (HEAP[$error] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $25 = HEAP[$error];
      var $26 = _set_gaierror($25);
      __label__ = 18;
      break;
     case 8:
      
      
      
      
      if (HEAP[HEAP[$res] + 28] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $31 = HEAP[_socket_error];
      _PyErr_SetString($31, __str136);
      __label__ = 18;
      break;
     case 10:
      
      
      var $34 = HEAP[HEAP[$res] + 4];
      if ($34 == 2) {
        __label__ = 11;
        break;
      } else if ($34 == 10) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      
      
      
      
      if (HEAP[HEAP[$sa] + 8] != 2) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $40 = HEAP[_socket_error];
      _PyErr_SetString($40, __str137);
      __label__ = 18;
      break;
     case 13:
      __label__ = 15;
      break;
     case 14:
      
      
      
      var $44 = HEAP[HEAP[$res] + 20];
      HEAP[$sin6] = $44;
      var $45 = HEAP[$flowinfo];
      
      var $47 = HEAP[$sin6] + 4;
      HEAP[$47] = $45;
      var $48 = HEAP[$scope_id];
      
      var $50 = HEAP[$sin6] + 24;
      HEAP[$50] = $48;
      __label__ = 15;
      break;
     case 15:
      var $51 = HEAP[$flags];
      
      
      var $54 = HEAP[HEAP[$res] + 16];
      
      
      var $57 = HEAP[HEAP[$res] + 20];
      var $hbuf18 = $hbuf;
      var $pbuf19 = $pbuf;
      var $58 = _getnameinfo($57, $54, $hbuf18, 1025, $pbuf19, 32, $51);
      HEAP[$error] = $58;
      
      
      if (HEAP[$error] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $61 = HEAP[$error];
      var $62 = _set_gaierror($61);
      __label__ = 18;
      break;
     case 17:
      var $hbuf22 = $hbuf;
      var $pbuf23 = $pbuf;
      var $63 = _Py_BuildValue(__str138, allocate([ $hbuf22, 0, 0, 0, $pbuf23, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$ret] = $63;
      __label__ = 18;
      break;
     case 18:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $66 = HEAP[$res];
      _freeaddrinfo($66);
      __label__ = 20;
      break;
     case 20:
      var $67 = HEAP[$ret];
      HEAP[$0] = $67;
      __label__ = 21;
      break;
     case 21:
      var $68 = HEAP[$0];
      HEAP[$retval] = $68;
      __label__ = 22;
      break;
     case 22:
      var $retval27 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_getdefaulttimeout($self) {
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
      
      HEAP[__stackBase__] = $self;
      
      
      if (HEAP[_defaulttimeout] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $4 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $4;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 2:
      var $5 = HEAP[_defaulttimeout];
      var $6 = _PyFloat_FromDouble($5);
      HEAP[$0] = $6;
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
  function _socket_setdefaulttimeout($self, $arg) {
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
      var $timeout = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$arg_addr] = $arg;
      
      
      if (HEAP[$arg_addr] == __Py_NoneStruct) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$timeout] = -1;
      __label__ = 6;
      break;
     case 2:
      var $3 = HEAP[$arg_addr];
      var $4 = _PyFloat_AsDouble($3);
      HEAP[$timeout] = $4;
      
      
      if (HEAP[$timeout] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      var $7 = _PyErr_Occurred();
      
      if ($7 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $9 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($9, __str36);
      __label__ = 5;
      break;
     case 5:
      HEAP[$0] = 0;
      __label__ = 7;
      break;
     case 6:
      var $10 = HEAP[$timeout];
      HEAP[_defaulttimeout] = $10;
      
      var $12 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $12;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 7;
      break;
     case 7:
      var $13 = HEAP[$0];
      HEAP[$retval] = $13;
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
  function _os_init() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval = __stackBase__;
      
      
      HEAP[__stackBase__ + 4] = 1;
      var $1 = HEAP[__stackBase__ + 4];
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
  function _init_socket() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      var $has_ipv6 = __stackBase__ + 4;
      
      var $0 = _os_init();
      
      if ($0 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      HEAP[_sock_type + 4] = _PyType_Type;
      var $3 = _Py_InitModule4(__str160, _socket_methods, _socket_doc, 0, 1013);
      HEAP[$m] = $3;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $6 = HEAP[_PyExc_IOError];
      var $7 = _PyErr_NewException(__str161, $6, 0);
      HEAP[_socket_error] = $7;
      
      
      if (HEAP[_socket_error] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $10 = HEAP[_socket_error];
      HEAP[_PySocketModuleAPI + 4] = $10;
      
      
      
      var $14 = HEAP[HEAP[_socket_error]] + 1;
      var $15 = HEAP[_socket_error];
      HEAP[$15] = $14;
      var $16 = HEAP[_socket_error];
      var $17 = HEAP[$m];
      var $18 = _PyModule_AddObject($17, __str162, $16);
      var $19 = HEAP[_socket_error];
      var $20 = _PyErr_NewException(__str163, $19, 0);
      HEAP[_socket_herror] = $20;
      
      
      if (HEAP[_socket_herror] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $26 = HEAP[HEAP[_socket_herror]] + 1;
      var $27 = HEAP[_socket_herror];
      HEAP[$27] = $26;
      var $28 = HEAP[_socket_herror];
      var $29 = HEAP[$m];
      var $30 = _PyModule_AddObject($29, __str164, $28);
      var $31 = HEAP[_socket_error];
      var $32 = _PyErr_NewException(__str165, $31, 0);
      HEAP[_socket_gaierror] = $32;
      
      
      if (HEAP[_socket_gaierror] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $38 = HEAP[HEAP[_socket_gaierror]] + 1;
      var $39 = HEAP[_socket_gaierror];
      HEAP[$39] = $38;
      var $40 = HEAP[_socket_gaierror];
      var $41 = HEAP[$m];
      var $42 = _PyModule_AddObject($41, __str166, $40);
      var $43 = HEAP[_socket_error];
      var $44 = _PyErr_NewException(__str167, $43, 0);
      HEAP[_socket_timeout] = $44;
      
      
      if (HEAP[_socket_timeout] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $50 = HEAP[HEAP[_socket_timeout]] + 1;
      var $51 = HEAP[_socket_timeout];
      HEAP[$51] = $50;
      var $52 = HEAP[_socket_timeout];
      var $53 = HEAP[$m];
      var $54 = _PyModule_AddObject($53, __str94, $52);
      
      
      var $57 = HEAP[_sock_type] + 1;
      
      HEAP[_sock_type] = $57;
      var $59 = HEAP[$m];
      var $60 = _PyModule_AddObject($59, __str168, _sock_type);
      
      if ($60 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      var $64 = HEAP[_sock_type] + 1;
      
      HEAP[_sock_type] = $64;
      var $66 = HEAP[$m];
      var $67 = _PyModule_AddObject($66, __str169, _sock_type);
      
      if ($67 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      HEAP[$has_ipv6] = __Py_TrueStruct;
      
      
      
      var $72 = HEAP[HEAP[$has_ipv6]] + 1;
      
      var $74 = HEAP[$has_ipv6];
      HEAP[$74] = $72;
      var $75 = HEAP[$m];
      var $76 = HEAP[$has_ipv6];
      var $77 = _PyModule_AddObject($75, __str170, $76);
      var $78 = _PyCapsule_New(_PySocketModuleAPI, __str171, 0);
      var $79 = HEAP[$m];
      var $80 = _PyModule_AddObject($79, __str172, $78);
      
      if ($80 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $82 = HEAP[$m];
      var $83 = _PyModule_AddIntConstant($82, __str173, 0);
      var $84 = HEAP[$m];
      var $85 = _PyModule_AddIntConstant($84, __str174, 2);
      var $86 = HEAP[$m];
      var $87 = _PyModule_AddIntConstant($86, __str175, 10);
      var $88 = HEAP[$m];
      var $89 = _PyModule_AddIntConstant($88, __str176, 1);
      var $90 = HEAP[$m];
      var $91 = _PyModule_AddIntConstant($90, __str177, 3);
      var $92 = HEAP[$m];
      var $93 = _PyModule_AddIntConstant($92, __str178, 4);
      var $94 = HEAP[$m];
      var $95 = _PyModule_AddIntConstant($94, __str179, 5);
      var $96 = HEAP[$m];
      var $97 = _PyModule_AddIntConstant($96, __str180, 6);
      var $98 = HEAP[$m];
      var $99 = _PyModule_AddIntConstant($98, __str181, 7);
      var $100 = HEAP[$m];
      var $101 = _PyModule_AddIntConstant($100, __str182, 8);
      var $102 = HEAP[$m];
      var $103 = _PyModule_AddIntConstant($102, __str183, 9);
      var $104 = HEAP[$m];
      var $105 = _PyModule_AddIntConstant($104, __str175, 10);
      var $106 = HEAP[$m];
      var $107 = _PyModule_AddIntConstant($106, __str184, 11);
      var $108 = HEAP[$m];
      var $109 = _PyModule_AddIntConstant($108, __str185, 12);
      var $110 = HEAP[$m];
      var $111 = _PyModule_AddIntConstant($110, __str186, 13);
      var $112 = HEAP[$m];
      var $113 = _PyModule_AddIntConstant($112, __str187, 14);
      var $114 = HEAP[$m];
      var $115 = _PyModule_AddIntConstant($114, __str188, 15);
      var $116 = HEAP[$m];
      var $117 = _PyModule_AddIntConstant($116, __str189, 16);
      var $118 = HEAP[$m];
      var $119 = _PyModule_AddIntConstant($118, __str190, 0);
      var $120 = HEAP[$m];
      var $121 = _PyModule_AddIntConstant($120, __str191, 2);
      var $122 = HEAP[$m];
      var $123 = _PyModule_AddIntConstant($122, __str192, 3);
      var $124 = HEAP[$m];
      var $125 = _PyModule_AddIntConstant($124, __str193, 5);
      var $126 = HEAP[$m];
      var $127 = _PyModule_AddIntConstant($126, __str194, 6);
      var $128 = HEAP[$m];
      var $129 = _PyModule_AddIntConstant($128, __str195, 13);
      var $130 = HEAP[$m];
      var $131 = _PyModule_AddIntConstant($130, __str196, 14);
      var $132 = HEAP[$m];
      var $133 = _PyModule_AddIntConstant($132, __str197, 16);
      var $134 = HEAP[$m];
      var $135 = _PyModule_AddIntConstant($134, __str198, 18);
      var $136 = HEAP[$m];
      var $137 = _PyModule_AddIntConstant($136, __str199, 19);
      var $138 = HEAP[$m];
      var $139 = _PyModule_AddIntConstant($138, __str200, 20);
      var $140 = HEAP[$m];
      var $141 = _PyModule_AddIntConstant($140, __str201, 22);
      var $142 = HEAP[$m];
      var $143 = _PyModule_AddIntConstant($142, __str202, 23);
      var $144 = HEAP[$m];
      var $145 = _PyModule_AddIntConstant($144, __str203, 24);
      var $146 = HEAP[$m];
      var $147 = _PyModule_AddIntConstant($146, __str204, 25);
      var $148 = HEAP[$m];
      var $149 = _PyModule_AddIntConstant($148, __str205, 26);
      var $150 = HEAP[$m];
      var $151 = _PyModule_AddIntConstant($150, __str206, 17);
      var $152 = HEAP[$m];
      var $153 = _PyModule_AddIntConstant($152, __str207, 17);
      var $154 = HEAP[$m];
      var $155 = _PyModule_AddIntConstant($154, __str208, 0);
      var $156 = HEAP[$m];
      var $157 = _PyModule_AddIntConstant($156, __str209, 1);
      var $158 = HEAP[$m];
      var $159 = _PyModule_AddIntConstant($158, __str210, 2);
      var $160 = HEAP[$m];
      var $161 = _PyModule_AddIntConstant($160, __str211, 3);
      var $162 = HEAP[$m];
      var $163 = _PyModule_AddIntConstant($162, __str212, 4);
      var $164 = HEAP[$m];
      var $165 = _PyModule_AddIntConstant($164, __str213, 5);
      var $166 = HEAP[$m];
      var $167 = _PyModule_AddIntConstant($166, __str214, 6);
      var $168 = HEAP[$m];
      var $169 = _PyModule_AddIntConstant($168, __str215, 30);
      var $170 = HEAP[$m];
      var $171 = _PyModule_AddIntConstant($170, __str216, 1);
      var $172 = HEAP[$m];
      var $173 = _PyModule_AddIntConstant($172, __str217, 2);
      var $174 = HEAP[$m];
      var $175 = _PyModule_AddIntConstant($174, __str218, 3);
      var $176 = HEAP[$m];
      var $177 = _PyModule_AddIntConstant($176, __str219, 1);
      var $178 = HEAP[$m];
      var $179 = _PyModule_AddIntConstant($178, __str220, 2);
      var $180 = HEAP[$m];
      var $181 = _PyModule_AddIntConstant($180, __str221, 3);
      var $182 = HEAP[$m];
      var $183 = _PyModule_AddIntConstant($182, __str222, 271);
      var $184 = HEAP[$m];
      var $185 = _PyModule_AddIntConstant($184, __str223, 127);
      var $186 = HEAP[$m];
      var $187 = _PyModule_AddIntConstant($186, __str224, 128);
      var $188 = HEAP[$m];
      var $189 = _PyModule_AddIntConstant($188, __str225, 129);
      var $190 = HEAP[$m];
      var $191 = _PyModule_AddIntConstant($190, __str226, 130);
      var $192 = HEAP[$m];
      var $193 = _PyModule_AddIntConstant($192, __str227, 0);
      var $194 = HEAP[$m];
      var $195 = _PyModule_AddIntConstant($194, __str228, 1);
      var $196 = HEAP[$m];
      var $197 = _PyModule_AddIntConstant($196, __str229, 2);
      var $198 = HEAP[$m];
      var $199 = _PyModule_AddIntConstant($198, __str230, 3);
      var $200 = HEAP[$m];
      var $201 = _PyModule_AddIntConstant($200, __str231, 1);
      var $202 = HEAP[$m];
      var $203 = _PyModule_AddIntConstant($202, __str232, 2);
      var $204 = HEAP[$m];
      var $205 = _PyModule_AddIntConstant($204, __str233, 4);
      var $206 = HEAP[$m];
      var $207 = _PyModule_AddIntConstant($206, __str234, -1);
      var $208 = HEAP[$m];
      var $209 = _PyModule_AddIntConstant($208, __str235, 1);
      var $210 = HEAP[$m];
      var $211 = _PyModule_AddIntConstant($210, __str236, 2);
      var $212 = HEAP[$m];
      var $213 = _PyModule_AddIntConstant($212, __str237, 3);
      var $214 = HEAP[$m];
      var $215 = _PyModule_AddIntConstant($214, __str238, 0);
      var $216 = HEAP[$m];
      var $217 = _PyModule_AddIntConstant($216, __str239, 1);
      var $218 = HEAP[$m];
      var $219 = _PyModule_AddIntConstant($218, __str240, 1);
      var $220 = HEAP[$m];
      var $221 = _PyModule_AddIntConstant($220, __str241, 2);
      var $222 = HEAP[$m];
      var $223 = _PyModule_AddIntConstant($222, __str242, 3);
      var $224 = HEAP[$m];
      var $225 = _PyModule_AddIntConstant($224, __str243, 5);
      var $226 = HEAP[$m];
      var $227 = _PyModule_AddIntConstant($226, __str244, 4);
      var $228 = HEAP[$m];
      var $229 = _PyModule_AddIntConstant($228, __str245, 1);
      var $230 = HEAP[$m];
      var $231 = _PyModule_AddIntConstant($230, __str246, 30);
      var $232 = HEAP[$m];
      var $233 = _PyModule_AddIntConstant($232, __str247, 2);
      var $234 = HEAP[$m];
      var $235 = _PyModule_AddIntConstant($234, __str248, 9);
      var $236 = HEAP[$m];
      var $237 = _PyModule_AddIntConstant($236, __str249, 5);
      var $238 = HEAP[$m];
      var $239 = _PyModule_AddIntConstant($238, __str250, 6);
      var $240 = HEAP[$m];
      var $241 = _PyModule_AddIntConstant($240, __str251, 13);
      var $242 = HEAP[$m];
      var $243 = _PyModule_AddIntConstant($242, __str252, 10);
      var $244 = HEAP[$m];
      var $245 = _PyModule_AddIntConstant($244, __str253, 7);
      var $246 = HEAP[$m];
      var $247 = _PyModule_AddIntConstant($246, __str254, 8);
      var $248 = HEAP[$m];
      var $249 = _PyModule_AddIntConstant($248, __str255, 19);
      var $250 = HEAP[$m];
      var $251 = _PyModule_AddIntConstant($250, __str256, 18);
      var $252 = HEAP[$m];
      var $253 = _PyModule_AddIntConstant($252, __str257, 21);
      var $254 = HEAP[$m];
      var $255 = _PyModule_AddIntConstant($254, __str258, 20);
      var $256 = HEAP[$m];
      var $257 = _PyModule_AddIntConstant($256, __str259, 4);
      var $258 = HEAP[$m];
      var $259 = _PyModule_AddIntConstant($258, __str260, 3);
      var $260 = HEAP[$m];
      var $261 = _PyModule_AddIntConstant($260, __str261, 128);
      var $262 = HEAP[$m];
      var $263 = _PyModule_AddIntConstant($262, __str262, 1);
      var $264 = HEAP[$m];
      var $265 = _PyModule_AddIntConstant($264, __str263, 2);
      var $266 = HEAP[$m];
      var $267 = _PyModule_AddIntConstant($266, __str264, 4);
      var $268 = HEAP[$m];
      var $269 = _PyModule_AddIntConstant($268, __str265, 64);
      var $270 = HEAP[$m];
      var $271 = _PyModule_AddIntConstant($270, __str266, 128);
      var $272 = HEAP[$m];
      var $273 = _PyModule_AddIntConstant($272, __str267, 32);
      var $274 = HEAP[$m];
      var $275 = _PyModule_AddIntConstant($274, __str268, 8);
      var $276 = HEAP[$m];
      var $277 = _PyModule_AddIntConstant($276, __str269, 256);
      var $278 = HEAP[$m];
      var $279 = _PyModule_AddIntConstant($278, __str270, 1);
      var $280 = HEAP[$m];
      var $281 = _PyModule_AddIntConstant($280, __str271, 0);
      var $282 = HEAP[$m];
      var $283 = _PyModule_AddIntConstant($282, __str272, 6);
      var $284 = HEAP[$m];
      var $285 = _PyModule_AddIntConstant($284, __str273, 17);
      var $286 = HEAP[$m];
      var $287 = _PyModule_AddIntConstant($286, __str274, 0);
      var $288 = HEAP[$m];
      var $289 = _PyModule_AddIntConstant($288, __str275, 0);
      var $290 = HEAP[$m];
      var $291 = _PyModule_AddIntConstant($290, __str276, 1);
      var $292 = HEAP[$m];
      var $293 = _PyModule_AddIntConstant($292, __str277, 2);
      var $294 = HEAP[$m];
      var $295 = _PyModule_AddIntConstant($294, __str278, 41);
      var $296 = HEAP[$m];
      var $297 = _PyModule_AddIntConstant($296, __str279, 4);
      var $298 = HEAP[$m];
      var $299 = _PyModule_AddIntConstant($298, __str280, 6);
      var $300 = HEAP[$m];
      var $301 = _PyModule_AddIntConstant($300, __str281, 8);
      var $302 = HEAP[$m];
      var $303 = _PyModule_AddIntConstant($302, __str282, 12);
      var $304 = HEAP[$m];
      var $305 = _PyModule_AddIntConstant($304, __str283, 17);
      var $306 = HEAP[$m];
      var $307 = _PyModule_AddIntConstant($306, __str284, 22);
      var $308 = HEAP[$m];
      var $309 = _PyModule_AddIntConstant($308, __str285, 29);
      var $310 = HEAP[$m];
      var $311 = _PyModule_AddIntConstant($310, __str278, 41);
      var $312 = HEAP[$m];
      var $313 = _PyModule_AddIntConstant($312, __str286, 43);
      var $314 = HEAP[$m];
      var $315 = _PyModule_AddIntConstant($314, __str287, 44);
      var $316 = HEAP[$m];
      var $317 = _PyModule_AddIntConstant($316, __str288, 46);
      var $318 = HEAP[$m];
      var $319 = _PyModule_AddIntConstant($318, __str289, 47);
      var $320 = HEAP[$m];
      var $321 = _PyModule_AddIntConstant($320, __str290, 50);
      var $322 = HEAP[$m];
      var $323 = _PyModule_AddIntConstant($322, __str291, 51);
      var $324 = HEAP[$m];
      var $325 = _PyModule_AddIntConstant($324, __str292, 58);
      var $326 = HEAP[$m];
      var $327 = _PyModule_AddIntConstant($326, __str293, 59);
      var $328 = HEAP[$m];
      var $329 = _PyModule_AddIntConstant($328, __str294, 60);
      var $330 = HEAP[$m];
      var $331 = _PyModule_AddIntConstant($330, __str295, 103);
      var $332 = HEAP[$m];
      var $333 = _PyModule_AddIntConstant($332, __str296, 255);
      var $334 = HEAP[$m];
      var $335 = _PyModule_AddIntConstant($334, __str297, 1024);
      var $336 = HEAP[$m];
      var $337 = _PyModule_AddIntConstant($336, __str298, 5e3);
      var $338 = HEAP[$m];
      var $339 = _PyModule_AddIntConstant($338, __str299, 0);
      var $340 = HEAP[$m];
      var $341 = _PyModule_AddIntConstant($340, __str300, -1);
      var $342 = HEAP[$m];
      var $343 = _PyModule_AddIntConstant($342, __str301, 2130706433);
      var $344 = HEAP[$m];
      var $345 = _PyModule_AddIntConstant($344, __str302, -536870912);
      var $346 = HEAP[$m];
      var $347 = _PyModule_AddIntConstant($346, __str303, -536870911);
      var $348 = HEAP[$m];
      var $349 = _PyModule_AddIntConstant($348, __str304, -536870657);
      var $350 = HEAP[$m];
      var $351 = _PyModule_AddIntConstant($350, __str305, -1);
      var $352 = HEAP[$m];
      var $353 = _PyModule_AddIntConstant($352, __str306, 4);
      var $354 = HEAP[$m];
      var $355 = _PyModule_AddIntConstant($354, __str307, 3);
      var $356 = HEAP[$m];
      var $357 = _PyModule_AddIntConstant($356, __str308, 1);
      var $358 = HEAP[$m];
      var $359 = _PyModule_AddIntConstant($358, __str309, 2);
      var $360 = HEAP[$m];
      var $361 = _PyModule_AddIntConstant($360, __str310, 6);
      var $362 = HEAP[$m];
      var $363 = _PyModule_AddIntConstant($362, __str311, 7);
      var $364 = HEAP[$m];
      var $365 = _PyModule_AddIntConstant($364, __str312, 7);
      var $366 = HEAP[$m];
      var $367 = _PyModule_AddIntConstant($366, __str313, 32);
      var $368 = HEAP[$m];
      var $369 = _PyModule_AddIntConstant($368, __str314, 33);
      var $370 = HEAP[$m];
      var $371 = _PyModule_AddIntConstant($370, __str315, 34);
      var $372 = HEAP[$m];
      var $373 = _PyModule_AddIntConstant($372, __str316, 35);
      var $374 = HEAP[$m];
      var $375 = _PyModule_AddIntConstant($374, __str317, 36);
      var $376 = HEAP[$m];
      var $377 = _PyModule_AddIntConstant($376, __str318, 1);
      var $378 = HEAP[$m];
      var $379 = _PyModule_AddIntConstant($378, __str319, 1);
      var $380 = HEAP[$m];
      var $381 = _PyModule_AddIntConstant($380, __str320, 20);
      var $382 = HEAP[$m];
      var $383 = _PyModule_AddIntConstant($382, __str321, 20);
      var $384 = HEAP[$m];
      var $385 = _PyModule_AddIntConstant($384, __str322, 21);
      var $386 = HEAP[$m];
      var $387 = _PyModule_AddIntConstant($386, __str323, 18);
      var $388 = HEAP[$m];
      var $389 = _PyModule_AddIntConstant($388, __str324, 17);
      var $390 = HEAP[$m];
      var $391 = _PyModule_AddIntConstant($390, __str325, 19);
      var $392 = HEAP[$m];
      var $393 = _PyModule_AddIntConstant($392, __str326, 16);
      var $394 = HEAP[$m];
      var $395 = _PyModule_AddIntConstant($394, __str327, 26);
      var $396 = HEAP[$m];
      var $397 = _PyModule_AddIntConstant($396, __str328, 7);
      var $398 = HEAP[$m];
      var $399 = _PyModule_AddIntConstant($398, __str329, 59);
      var $400 = HEAP[$m];
      var $401 = _PyModule_AddIntConstant($400, __str330, 52);
      var $402 = HEAP[$m];
      var $403 = _PyModule_AddIntConstant($402, __str331, 54);
      var $404 = HEAP[$m];
      var $405 = _PyModule_AddIntConstant($404, __str332, 9);
      var $406 = HEAP[$m];
      var $407 = _PyModule_AddIntConstant($406, __str333, 50);
      var $408 = HEAP[$m];
      var $409 = _PyModule_AddIntConstant($408, __str334, 58);
      var $410 = HEAP[$m];
      var $411 = _PyModule_AddIntConstant($410, __str335, 51);
      var $412 = HEAP[$m];
      var $413 = _PyModule_AddIntConstant($412, __str336, 53);
      var $414 = HEAP[$m];
      var $415 = _PyModule_AddIntConstant($414, __str337, 49);
      var $416 = HEAP[$m];
      var $417 = _PyModule_AddIntConstant($416, __str338, 56);
      var $418 = HEAP[$m];
      var $419 = _PyModule_AddIntConstant($418, __str339, 66);
      var $420 = HEAP[$m];
      var $421 = _PyModule_AddIntConstant($420, __str340, 57);
      var $422 = HEAP[$m];
      var $423 = _PyModule_AddIntConstant($422, __str341, 55);
      var $424 = HEAP[$m];
      var $425 = _PyModule_AddIntConstant($424, __str342, 0);
      var $426 = HEAP[$m];
      var $427 = _PyModule_AddIntConstant($426, __str343, 67);
      var $428 = HEAP[$m];
      var $429 = _PyModule_AddIntConstant($428, __str344, 1);
      var $430 = HEAP[$m];
      var $431 = _PyModule_AddIntConstant($430, __str345, 2);
      var $432 = HEAP[$m];
      var $433 = _PyModule_AddIntConstant($432, __str346, 3);
      var $434 = HEAP[$m];
      var $435 = _PyModule_AddIntConstant($434, __str347, 4);
      var $436 = HEAP[$m];
      var $437 = _PyModule_AddIntConstant($436, __str348, 5);
      var $438 = HEAP[$m];
      var $439 = _PyModule_AddIntConstant($438, __str349, 6);
      var $440 = HEAP[$m];
      var $441 = _PyModule_AddIntConstant($440, __str350, 7);
      var $442 = HEAP[$m];
      var $443 = _PyModule_AddIntConstant($442, __str351, 8);
      var $444 = HEAP[$m];
      var $445 = _PyModule_AddIntConstant($444, __str352, 9);
      var $446 = HEAP[$m];
      var $447 = _PyModule_AddIntConstant($446, __str353, 10);
      var $448 = HEAP[$m];
      var $449 = _PyModule_AddIntConstant($448, __str354, 11);
      var $450 = HEAP[$m];
      var $451 = _PyModule_AddIntConstant($450, __str355, 12);
      var $452 = HEAP[$m];
      var $453 = _PyModule_AddIntConstant($452, __str356, -9);
      var $454 = HEAP[$m];
      var $455 = _PyModule_AddIntConstant($454, __str357, -3);
      var $456 = HEAP[$m];
      var $457 = _PyModule_AddIntConstant($456, __str358, -1);
      var $458 = HEAP[$m];
      var $459 = _PyModule_AddIntConstant($458, __str359, -4);
      var $460 = HEAP[$m];
      var $461 = _PyModule_AddIntConstant($460, __str360, -6);
      var $462 = HEAP[$m];
      var $463 = _PyModule_AddIntConstant($462, __str361, -10);
      var $464 = HEAP[$m];
      var $465 = _PyModule_AddIntConstant($464, __str362, -5);
      var $466 = HEAP[$m];
      var $467 = _PyModule_AddIntConstant($466, __str363, -2);
      var $468 = HEAP[$m];
      var $469 = _PyModule_AddIntConstant($468, __str364, -12);
      var $470 = HEAP[$m];
      var $471 = _PyModule_AddIntConstant($470, __str365, -8);
      var $472 = HEAP[$m];
      var $473 = _PyModule_AddIntConstant($472, __str366, -7);
      var $474 = HEAP[$m];
      var $475 = _PyModule_AddIntConstant($474, __str367, -11);
      var $476 = HEAP[$m];
      var $477 = _PyModule_AddIntConstant($476, __str368, 1);
      var $478 = HEAP[$m];
      var $479 = _PyModule_AddIntConstant($478, __str369, 2);
      var $480 = HEAP[$m];
      var $481 = _PyModule_AddIntConstant($480, __str370, 4);
      var $482 = HEAP[$m];
      var $483 = _PyModule_AddIntConstant($482, __str371, 1024);
      var $484 = HEAP[$m];
      var $485 = _PyModule_AddIntConstant($484, __str372, 16);
      var $486 = HEAP[$m];
      var $487 = _PyModule_AddIntConstant($486, __str373, 32);
      var $488 = HEAP[$m];
      var $489 = _PyModule_AddIntConstant($488, __str374, 8);
      var $490 = HEAP[$m];
      var $491 = _PyModule_AddIntConstant($490, __str375, 1025);
      var $492 = HEAP[$m];
      var $493 = _PyModule_AddIntConstant($492, __str376, 32);
      var $494 = HEAP[$m];
      var $495 = _PyModule_AddIntConstant($494, __str377, 4);
      var $496 = HEAP[$m];
      var $497 = _PyModule_AddIntConstant($496, __str378, 1);
      var $498 = HEAP[$m];
      var $499 = _PyModule_AddIntConstant($498, __str379, 8);
      var $500 = HEAP[$m];
      var $501 = _PyModule_AddIntConstant($500, __str380, 2);
      var $502 = HEAP[$m];
      var $503 = _PyModule_AddIntConstant($502, __str381, 16);
      var $504 = HEAP[$m];
      var $505 = _PyModule_AddIntConstant($504, __str382, 0);
      var $506 = HEAP[$m];
      var $507 = _PyModule_AddIntConstant($506, __str383, 1);
      var $508 = HEAP[$m];
      var $509 = _PyModule_AddIntConstant($508, __str384, 2);
      __label__ = 10;
      break;
     case 10:
      __label__ = 11;
      break;
     case 11:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_socket"] = _init_socket;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _set_error, 0, _fclose, 0, _sock_accept, 0, _sock_bind, 0, _sock_close, 0, _sock_connect, 0, _sock_connect_ex, 0, _sock_dup, 0, _sock_fileno, 0, _sock_getpeername, 0, _sock_getsockname, 0, _sock_getsockopt, 0, _sock_listen, 0, _sock_makefile, 0, _sock_recv, 0, _sock_recv_into, 0, _sock_recvfrom, 0, _sock_recvfrom_into, 0, _sock_send, 0, _sock_sendall, 0, _sock_sendto, 0, _sock_setblocking, 0, _sock_settimeout, 0, _sock_gettimeout, 0, _sock_setsockopt, 0, _sock_shutdown, 0, _sock_dealloc, 0, _sock_repr, 0, _PyObject_GenericGetAttr, 0, _sock_initobj, 0, _PyType_GenericAlloc, 0, _sock_new, 0, _PyObject_Free, 0, _socket_gethostbyname, 0, _socket_gethostbyname_ex, 0, _socket_gethostbyaddr, 0, _socket_gethostname, 0, _socket_getservbyname, 0, _socket_getservbyport, 0, _socket_getprotobyname, 0, _socket_fromfd, 0, _socket_socketpair, 0, _socket_ntohs, 0, _socket_ntohl, 0, _socket_htons, 0, _socket_htonl, 0, _socket_inet_aton, 0, _socket_inet_ntoa, 0, _socket_inet_pton, 0, _socket_inet_ntop, 0, _socket_getaddrinfo, 0, _socket_getnameinfo, 0, _socket_getdefaulttimeout, 0, _socket_setdefaulttimeout, 0 ]);
  function run(args) {
    _sock_doc = allocate([ 115, 111, 99, 107, 101, 116, 40, 91, 102, 97, 109, 105, 108, 121, 91, 44, 32, 116, 121, 112, 101, 91, 44, 32, 112, 114, 111, 116, 111, 93, 93, 93, 41, 32, 45, 62, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 10, 10, 79, 112, 101, 110, 32, 97, 32, 115, 111, 99, 107, 101, 116, 32, 111, 102, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 116, 121, 112, 101, 46, 32, 32, 84, 104, 101, 32, 102, 97, 109, 105, 108, 121, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 115, 32, 116, 104, 101, 10, 97, 100, 100, 114, 101, 115, 115, 32, 102, 97, 109, 105, 108, 121, 59, 32, 105, 116, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 65, 70, 95, 73, 78, 69, 84, 46, 32, 32, 84, 104, 101, 32, 116, 121, 112, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 115, 10, 119, 104, 101, 116, 104, 101, 114, 32, 116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 115, 116, 114, 101, 97, 109, 32, 40, 83, 79, 67, 75, 95, 83, 84, 82, 69, 65, 77, 44, 32, 116, 104, 105, 115, 32, 105, 115, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 41, 10, 111, 114, 32, 100, 97, 116, 97, 103, 114, 97, 109, 32, 40, 83, 79, 67, 75, 95, 68, 71, 82, 65, 77, 41, 32, 115, 111, 99, 107, 101, 116, 46, 32, 32, 84, 104, 101, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 48, 44, 10, 115, 112, 101, 99, 105, 102, 121, 105, 110, 103, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 112, 114, 111, 116, 111, 99, 111, 108, 46, 32, 32, 75, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 97, 114, 101, 32, 97, 99, 99, 101, 112, 116, 101, 100, 46, 10, 10, 65, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 115, 32, 111, 110, 101, 32, 101, 110, 100, 112, 111, 105, 110, 116, 32, 111, 102, 32, 97, 32, 110, 101, 116, 119, 111, 114, 107, 32, 99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 46, 10, 10, 77, 101, 116, 104, 111, 100, 115, 32, 111, 102, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 115, 32, 40, 107, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 110, 111, 116, 32, 97, 108, 108, 111, 119, 101, 100, 41, 58, 10, 10, 97, 99, 99, 101, 112, 116, 40, 41, 32, 45, 45, 32, 97, 99, 99, 101, 112, 116, 32, 97, 32, 99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 44, 32, 114, 101, 116, 117, 114, 110, 105, 110, 103, 32, 110, 101, 119, 32, 115, 111, 99, 107, 101, 116, 32, 97, 110, 100, 32, 99, 108, 105, 101, 110, 116, 32, 97, 100, 100, 114, 101, 115, 115, 10, 98, 105, 110, 100, 40, 97, 100, 100, 114, 41, 32, 45, 45, 32, 98, 105, 110, 100, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 116, 111, 32, 97, 32, 108, 111, 99, 97, 108, 32, 97, 100, 100, 114, 101, 115, 115, 10, 99, 108, 111, 115, 101, 40, 41, 32, 45, 45, 32, 99, 108, 111, 115, 101, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 10, 99, 111, 110, 110, 101, 99, 116, 40, 97, 100, 100, 114, 41, 32, 45, 45, 32, 99, 111, 110, 110, 101, 99, 116, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 116, 111, 32, 97, 32, 114, 101, 109, 111, 116, 101, 32, 97, 100, 100, 114, 101, 115, 115, 10, 99, 111, 110, 110, 101, 99, 116, 95, 101, 120, 40, 97, 100, 100, 114, 41, 32, 45, 45, 32, 99, 111, 110, 110, 101, 99, 116, 44, 32, 114, 101, 116, 117, 114, 110, 32, 97, 110, 32, 101, 114, 114, 111, 114, 32, 99, 111, 100, 101, 32, 105, 110, 115, 116, 101, 97, 100, 32, 111, 102, 32, 97, 110, 32, 101, 120, 99, 101, 112, 116, 105, 111, 110, 10, 100, 117, 112, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 32, 105, 100, 101, 110, 116, 105, 99, 97, 108, 32, 116, 111, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 111, 110, 101, 32, 91, 42, 93, 10, 102, 105, 108, 101, 110, 111, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 117, 110, 100, 101, 114, 108, 121, 105, 110, 103, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 10, 103, 101, 116, 112, 101, 101, 114, 110, 97, 109, 101, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 114, 101, 109, 111, 116, 101, 32, 97, 100, 100, 114, 101, 115, 115, 32, 91, 42, 93, 10, 103, 101, 116, 115, 111, 99, 107, 110, 97, 109, 101, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 108, 111, 99, 97, 108, 32, 97, 100, 100, 114, 101, 115, 115, 10, 103, 101, 116, 115, 111, 99, 107, 111, 112, 116, 40, 108, 101, 118, 101, 108, 44, 32, 111, 112, 116, 110, 97, 109, 101, 91, 44, 32, 98, 117, 102, 108, 101, 110, 93, 41, 32, 45, 45, 32, 103, 101, 116, 32, 115, 111, 99, 107, 101, 116, 32, 111, 112, 116, 105, 111, 110, 115, 10, 103, 101, 116, 116, 105, 109, 101, 111, 117, 116, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 116, 105, 109, 101, 111, 117, 116, 32, 111, 114, 32, 78, 111, 110, 101, 10, 108, 105, 115, 116, 101, 110, 40, 110, 41, 32, 45, 45, 32, 115, 116, 97, 114, 116, 32, 108, 105, 115, 116, 101, 110, 105, 110, 103, 32, 102, 111, 114, 32, 105, 110, 99, 111, 109, 105, 110, 103, 32, 99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 115, 10, 109, 97, 107, 101, 102, 105, 108, 101, 40, 91, 109, 111, 100, 101, 44, 32, 91, 98, 117, 102, 115, 105, 122, 101, 93, 93, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 97, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 32, 102, 111, 114, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 91, 42, 93, 10, 114, 101, 99, 118, 40, 98, 117, 102, 108, 101, 110, 91, 44, 32, 102, 108, 97, 103, 115, 93, 41, 32, 45, 45, 32, 114, 101, 99, 101, 105, 118, 101, 32, 100, 97, 116, 97, 10, 114, 101, 99, 118, 95, 105, 110, 116, 111, 40, 98, 117, 102, 102, 101, 114, 91, 44, 32, 110, 98, 121, 116, 101, 115, 91, 44, 32, 102, 108, 97, 103, 115, 93, 93, 41, 32, 45, 45, 32, 114, 101, 99, 101, 105, 118, 101, 32, 100, 97, 116, 97, 32, 40, 105, 110, 116, 111, 32, 97, 32, 98, 117, 102, 102, 101, 114, 41, 10, 114, 101, 99, 118, 102, 114, 111, 109, 40, 98, 117, 102, 108, 101, 110, 91, 44, 32, 102, 108, 97, 103, 115, 93, 41, 32, 45, 45, 32, 114, 101, 99, 101, 105, 118, 101, 32, 100, 97, 116, 97, 32, 97, 110, 100, 32, 115, 101, 110, 100, 101, 114, 39, 115, 32, 97, 100, 100, 114, 101, 115, 115, 10, 114, 101, 99, 118, 102, 114, 111, 109, 95, 105, 110, 116, 111, 40, 98, 117, 102, 102, 101, 114, 91, 44, 32, 110, 98, 121, 116, 101, 115, 44, 32, 91, 44, 32, 102, 108, 97, 103, 115, 93, 41, 10, 32, 32, 45, 45, 32, 114, 101, 99, 101, 105, 118, 101, 32, 100, 97, 116, 97, 32, 97, 110, 100, 32, 115, 101, 110, 100, 101, 114, 39, 115, 32, 97, 100, 100, 114, 101, 115, 115, 32, 40, 105, 110, 116, 111, 32, 97, 32, 98, 117, 102, 102, 101, 114, 41, 10, 115, 101, 110, 100, 97, 108, 108, 40, 100, 97, 116, 97, 91, 44, 32, 102, 108, 97, 103, 115, 93, 41, 32, 45, 45, 32, 115, 101, 110, 100, 32, 97, 108, 108, 32, 100, 97, 116, 97, 10, 115, 101, 110, 100, 40, 100, 97, 116, 97, 91, 44, 32, 102, 108, 97, 103, 115, 93, 41, 32, 45, 45, 32, 115, 101, 110, 100, 32, 100, 97, 116, 97, 44, 32, 109, 97, 121, 32, 110, 111, 116, 32, 115, 101, 110, 100, 32, 97, 108, 108, 32, 111, 102, 32, 105, 116, 10, 115, 101, 110, 100, 116, 111, 40, 100, 97, 116, 97, 91, 44, 32, 102, 108, 97, 103, 115, 93, 44, 32, 97, 100, 100, 114, 41, 32, 45, 45, 32, 115, 101, 110, 100, 32, 100, 97, 116, 97, 32, 116, 111, 32, 97, 32, 103, 105, 118, 101, 110, 32, 97, 100, 100, 114, 101, 115, 115, 10, 115, 101, 116, 98, 108, 111, 99, 107, 105, 110, 103, 40, 48, 32, 124, 32, 49, 41, 32, 45, 45, 32, 115, 101, 116, 32, 111, 114, 32, 99, 108, 101, 97, 114, 32, 116, 104, 101, 32, 98, 108, 111, 99, 107, 105, 110, 103, 32, 73, 47, 79, 32, 102, 108, 97, 103, 10, 115, 101, 116, 115, 111, 99, 107, 111, 112, 116, 40, 108, 101, 118, 101, 108, 44, 32, 111, 112, 116, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 45, 45, 32, 115, 101, 116, 32, 115, 111, 99, 107, 101, 116, 32, 111, 112, 116, 105, 111, 110, 115, 10, 115, 101, 116, 116, 105, 109, 101, 111, 117, 116, 40, 78, 111, 110, 101, 32, 124, 32, 102, 108, 111, 97, 116, 41, 32, 45, 45, 32, 115, 101, 116, 32, 111, 114, 32, 99, 108, 101, 97, 114, 32, 116, 104, 101, 32, 116, 105, 109, 101, 111, 117, 116, 10, 115, 104, 117, 116, 100, 111, 119, 110, 40, 104, 111, 119, 41, 32, 45, 45, 32, 115, 104, 117, 116, 32, 100, 111, 119, 110, 32, 116, 114, 97, 102, 102, 105, 99, 32, 105, 110, 32, 111, 110, 101, 32, 111, 114, 32, 98, 111, 116, 104, 32, 100, 105, 114, 101, 99, 116, 105, 111, 110, 115, 10, 10, 32, 91, 42, 93, 32, 110, 111, 116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 111, 110, 32, 97, 108, 108, 32, 112, 108, 97, 116, 102, 111, 114, 109, 115, 33, 0 ], "i8", ALLOC_NORMAL);
    _socket_error = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str = allocate([ 117, 110, 97, 98, 108, 101, 32, 116, 111, 32, 115, 101, 108, 101, 99, 116, 32, 111, 110, 32, 115, 111, 99, 107, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 40, 105, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    _socket_herror = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _socket_gaierror = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _defaulttimeout = allocate([ -1 ], [ "double", 0, 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str2 = allocate([ 48, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 117, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 97, 100, 100, 114, 101, 115, 115, 32, 102, 97, 109, 105, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 119, 105, 108, 100, 99, 97, 114, 100, 32, 114, 101, 115, 111, 108, 118, 101, 100, 32, 116, 111, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 97, 100, 100, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 60, 98, 114, 111, 97, 100, 99, 97, 115, 116, 62, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 97, 100, 100, 114, 101, 115, 115, 32, 102, 97, 109, 105, 108, 121, 32, 109, 105, 115, 109, 97, 116, 99, 104, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 37, 100, 46, 37, 100, 46, 37, 100, 46, 37, 100, 37, 99, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 117, 110, 107, 110, 111, 119, 110, 32, 97, 100, 100, 114, 101, 115, 115, 32, 102, 97, 109, 105, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 79, 105, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 73, 73, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 79, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate(1, "i8", ALLOC_NORMAL);
    __str13 = allocate([ 115, 104, 98, 104, 115, 35, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 73, 73, 73, 73, 73, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 73, 110, 118, 97, 108, 105, 100, 32, 97, 100, 100, 114, 101, 115, 115, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 105, 115, 35, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 116, 35, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 65, 70, 95, 85, 78, 73, 88, 32, 112, 97, 116, 104, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 58, 32, 65, 70, 95, 78, 69, 84, 76, 73, 78, 75, 32, 97, 100, 100, 114, 101, 115, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 116, 117, 112, 108, 101, 44, 32, 110, 111, 116, 32, 37, 46, 53, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 73, 73, 58, 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 58, 32, 65, 70, 95, 73, 78, 69, 84, 32, 97, 100, 100, 114, 101, 115, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 116, 117, 112, 108, 101, 44, 32, 110, 111, 116, 32, 37, 46, 53, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 101, 116, 105, 58, 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 105, 100, 110, 97, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 58, 32, 112, 111, 114, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 48, 45, 54, 53, 53, 51, 53, 46, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 58, 32, 65, 70, 95, 73, 78, 69, 84, 54, 32, 97, 100, 100, 114, 101, 115, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 116, 117, 112, 108, 101, 44, 32, 110, 111, 116, 32, 37, 46, 53, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 101, 116, 105, 124, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 58, 32, 65, 70, 95, 80, 65, 67, 75, 69, 84, 32, 97, 100, 100, 114, 101, 115, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 116, 117, 112, 108, 101, 44, 32, 110, 111, 116, 32, 37, 46, 53, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 115, 105, 124, 105, 105, 115, 35, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 72, 97, 114, 100, 119, 97, 114, 101, 32, 97, 100, 100, 114, 101, 115, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 56, 32, 98, 121, 116, 101, 115, 32, 111, 114, 32, 108, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 58, 32, 112, 114, 111, 116, 111, 78, 117, 109, 98, 101, 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 48, 45, 54, 53, 53, 51, 53, 46, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 58, 32, 65, 70, 95, 84, 73, 80, 67, 32, 97, 100, 100, 114, 101, 115, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 116, 117, 112, 108, 101, 44, 32, 110, 111, 116, 32, 37, 46, 53, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 73, 73, 73, 73, 124, 73, 59, 73, 110, 118, 97, 108, 105, 100, 32, 84, 73, 80, 67, 32, 97, 100, 100, 114, 101, 115, 115, 32, 102, 111, 114, 109, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 58, 32, 98, 97, 100, 32, 102, 97, 109, 105, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 108, 101, 110, 58, 32, 98, 97, 100, 32, 102, 97, 109, 105, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    _socket_timeout = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str35 = allocate([ 116, 105, 109, 101, 100, 32, 111, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    _accept_doc = allocate([ 97, 99, 99, 101, 112, 116, 40, 41, 32, 45, 62, 32, 40, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 44, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 110, 102, 111, 41, 10, 10, 87, 97, 105, 116, 32, 102, 111, 114, 32, 97, 110, 32, 105, 110, 99, 111, 109, 105, 110, 103, 32, 99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 46, 32, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 115, 111, 99, 107, 101, 116, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 105, 110, 103, 32, 116, 104, 101, 10, 99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 44, 32, 97, 110, 100, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 32, 111, 102, 32, 116, 104, 101, 32, 99, 108, 105, 101, 110, 116, 46, 32, 32, 70, 111, 114, 32, 73, 80, 32, 115, 111, 99, 107, 101, 116, 115, 44, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 10, 105, 110, 102, 111, 32, 105, 115, 32, 97, 32, 112, 97, 105, 114, 32, 40, 104, 111, 115, 116, 97, 100, 100, 114, 44, 32, 112, 111, 114, 116, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _setblocking_doc = allocate([ 115, 101, 116, 98, 108, 111, 99, 107, 105, 110, 103, 40, 102, 108, 97, 103, 41, 10, 10, 83, 101, 116, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 116, 111, 32, 98, 108, 111, 99, 107, 105, 110, 103, 32, 40, 102, 108, 97, 103, 32, 105, 115, 32, 116, 114, 117, 101, 41, 32, 111, 114, 32, 110, 111, 110, 45, 98, 108, 111, 99, 107, 105, 110, 103, 32, 40, 102, 97, 108, 115, 101, 41, 46, 10, 115, 101, 116, 98, 108, 111, 99, 107, 105, 110, 103, 40, 84, 114, 117, 101, 41, 32, 105, 115, 32, 101, 113, 117, 105, 118, 97, 108, 101, 110, 116, 32, 116, 111, 32, 115, 101, 116, 116, 105, 109, 101, 111, 117, 116, 40, 78, 111, 110, 101, 41, 59, 10, 115, 101, 116, 98, 108, 111, 99, 107, 105, 110, 103, 40, 70, 97, 108, 115, 101, 41, 32, 105, 115, 32, 101, 113, 117, 105, 118, 97, 108, 101, 110, 116, 32, 116, 111, 32, 115, 101, 116, 116, 105, 109, 101, 111, 117, 116, 40, 48, 46, 48, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 84, 105, 109, 101, 111, 117, 116, 32, 118, 97, 108, 117, 101, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    _settimeout_doc = allocate([ 115, 101, 116, 116, 105, 109, 101, 111, 117, 116, 40, 116, 105, 109, 101, 111, 117, 116, 41, 10, 10, 83, 101, 116, 32, 97, 32, 116, 105, 109, 101, 111, 117, 116, 32, 111, 110, 32, 115, 111, 99, 107, 101, 116, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 115, 46, 32, 32, 39, 116, 105, 109, 101, 111, 117, 116, 39, 32, 99, 97, 110, 32, 98, 101, 32, 97, 32, 102, 108, 111, 97, 116, 44, 10, 103, 105, 118, 105, 110, 103, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 44, 32, 111, 114, 32, 78, 111, 110, 101, 46, 32, 32, 83, 101, 116, 116, 105, 110, 103, 32, 97, 32, 116, 105, 109, 101, 111, 117, 116, 32, 111, 102, 32, 78, 111, 110, 101, 32, 100, 105, 115, 97, 98, 108, 101, 115, 10, 116, 104, 101, 32, 116, 105, 109, 101, 111, 117, 116, 32, 102, 101, 97, 116, 117, 114, 101, 32, 97, 110, 100, 32, 105, 115, 32, 101, 113, 117, 105, 118, 97, 108, 101, 110, 116, 32, 116, 111, 32, 115, 101, 116, 98, 108, 111, 99, 107, 105, 110, 103, 40, 49, 41, 46, 10, 83, 101, 116, 116, 105, 110, 103, 32, 97, 32, 116, 105, 109, 101, 111, 117, 116, 32, 111, 102, 32, 122, 101, 114, 111, 32, 105, 115, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 97, 115, 32, 115, 101, 116, 98, 108, 111, 99, 107, 105, 110, 103, 40, 48, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _gettimeout_doc = allocate([ 103, 101, 116, 116, 105, 109, 101, 111, 117, 116, 40, 41, 32, 45, 62, 32, 116, 105, 109, 101, 111, 117, 116, 10, 10, 82, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 116, 105, 109, 101, 111, 117, 116, 32, 105, 110, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 115, 101, 99, 111, 110, 100, 115, 32, 97, 115, 115, 111, 99, 105, 97, 116, 101, 100, 32, 119, 105, 116, 104, 32, 115, 111, 99, 107, 101, 116, 32, 10, 111, 112, 101, 114, 97, 116, 105, 111, 110, 115, 46, 32, 65, 32, 116, 105, 109, 101, 111, 117, 116, 32, 111, 102, 32, 78, 111, 110, 101, 32, 105, 110, 100, 105, 99, 97, 116, 101, 115, 32, 116, 104, 97, 116, 32, 116, 105, 109, 101, 111, 117, 116, 115, 32, 111, 110, 32, 115, 111, 99, 107, 101, 116, 32, 10, 111, 112, 101, 114, 97, 116, 105, 111, 110, 115, 32, 97, 114, 101, 32, 100, 105, 115, 97, 98, 108, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 105, 105, 105, 58, 115, 101, 116, 115, 111, 99, 107, 111, 112, 116, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 105, 105, 115, 35, 58, 115, 101, 116, 115, 111, 99, 107, 111, 112, 116, 0 ], "i8", ALLOC_NORMAL);
    _setsockopt_doc = allocate([ 115, 101, 116, 115, 111, 99, 107, 111, 112, 116, 40, 108, 101, 118, 101, 108, 44, 32, 111, 112, 116, 105, 111, 110, 44, 32, 118, 97, 108, 117, 101, 41, 10, 10, 83, 101, 116, 32, 97, 32, 115, 111, 99, 107, 101, 116, 32, 111, 112, 116, 105, 111, 110, 46, 32, 32, 83, 101, 101, 32, 116, 104, 101, 32, 85, 110, 105, 120, 32, 109, 97, 110, 117, 97, 108, 32, 102, 111, 114, 32, 108, 101, 118, 101, 108, 32, 97, 110, 100, 32, 111, 112, 116, 105, 111, 110, 46, 10, 84, 104, 101, 32, 118, 97, 108, 117, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 99, 97, 110, 32, 101, 105, 116, 104, 101, 114, 32, 98, 101, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 32, 111, 114, 32, 97, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 105, 105, 124, 105, 58, 103, 101, 116, 115, 111, 99, 107, 111, 112, 116, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 103, 101, 116, 115, 111, 99, 107, 111, 112, 116, 32, 98, 117, 102, 108, 101, 110, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    _getsockopt_doc = allocate([ 103, 101, 116, 115, 111, 99, 107, 111, 112, 116, 40, 108, 101, 118, 101, 108, 44, 32, 111, 112, 116, 105, 111, 110, 91, 44, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 93, 41, 32, 45, 62, 32, 118, 97, 108, 117, 101, 10, 10, 71, 101, 116, 32, 97, 32, 115, 111, 99, 107, 101, 116, 32, 111, 112, 116, 105, 111, 110, 46, 32, 32, 83, 101, 101, 32, 116, 104, 101, 32, 85, 110, 105, 120, 32, 109, 97, 110, 117, 97, 108, 32, 102, 111, 114, 32, 108, 101, 118, 101, 108, 32, 97, 110, 100, 32, 111, 112, 116, 105, 111, 110, 46, 10, 73, 102, 32, 97, 32, 110, 111, 110, 122, 101, 114, 111, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 32, 103, 105, 118, 101, 110, 44, 32, 116, 104, 101, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 105, 115, 32, 97, 10, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 116, 104, 97, 116, 32, 108, 101, 110, 103, 116, 104, 59, 32, 111, 116, 104, 101, 114, 119, 105, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    _bind_doc = allocate([ 98, 105, 110, 100, 40, 97, 100, 100, 114, 101, 115, 115, 41, 10, 10, 66, 105, 110, 100, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 116, 111, 32, 97, 32, 108, 111, 99, 97, 108, 32, 97, 100, 100, 114, 101, 115, 115, 46, 32, 32, 70, 111, 114, 32, 73, 80, 32, 115, 111, 99, 107, 101, 116, 115, 44, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 115, 32, 97, 10, 112, 97, 105, 114, 32, 40, 104, 111, 115, 116, 44, 32, 112, 111, 114, 116, 41, 59, 32, 116, 104, 101, 32, 104, 111, 115, 116, 32, 109, 117, 115, 116, 32, 114, 101, 102, 101, 114, 32, 116, 111, 32, 116, 104, 101, 32, 108, 111, 99, 97, 108, 32, 104, 111, 115, 116, 46, 32, 70, 111, 114, 32, 114, 97, 119, 32, 112, 97, 99, 107, 101, 116, 10, 115, 111, 99, 107, 101, 116, 115, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 115, 32, 97, 32, 116, 117, 112, 108, 101, 32, 40, 105, 102, 110, 97, 109, 101, 44, 32, 112, 114, 111, 116, 111, 32, 91, 44, 112, 107, 116, 116, 121, 112, 101, 32, 91, 44, 104, 97, 116, 121, 112, 101, 93, 93, 41, 0 ], "i8", ALLOC_NORMAL);
    _close_doc = allocate([ 99, 108, 111, 115, 101, 40, 41, 10, 10, 67, 108, 111, 115, 101, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 46, 32, 32, 73, 116, 32, 99, 97, 110, 110, 111, 116, 32, 98, 101, 32, 117, 115, 101, 100, 32, 97, 102, 116, 101, 114, 32, 116, 104, 105, 115, 32, 99, 97, 108, 108, 46, 0 ], "i8", ALLOC_NORMAL);
    _connect_doc = allocate([ 99, 111, 110, 110, 101, 99, 116, 40, 97, 100, 100, 114, 101, 115, 115, 41, 10, 10, 67, 111, 110, 110, 101, 99, 116, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 116, 111, 32, 97, 32, 114, 101, 109, 111, 116, 101, 32, 97, 100, 100, 114, 101, 115, 115, 46, 32, 32, 70, 111, 114, 32, 73, 80, 32, 115, 111, 99, 107, 101, 116, 115, 44, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 10, 105, 115, 32, 97, 32, 112, 97, 105, 114, 32, 40, 104, 111, 115, 116, 44, 32, 112, 111, 114, 116, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _connect_ex_doc = allocate([ 99, 111, 110, 110, 101, 99, 116, 95, 101, 120, 40, 97, 100, 100, 114, 101, 115, 115, 41, 32, 45, 62, 32, 101, 114, 114, 110, 111, 10, 10, 84, 104, 105, 115, 32, 105, 115, 32, 108, 105, 107, 101, 32, 99, 111, 110, 110, 101, 99, 116, 40, 97, 100, 100, 114, 101, 115, 115, 41, 44, 32, 98, 117, 116, 32, 114, 101, 116, 117, 114, 110, 115, 32, 97, 110, 32, 101, 114, 114, 111, 114, 32, 99, 111, 100, 101, 32, 40, 116, 104, 101, 32, 101, 114, 114, 110, 111, 32, 118, 97, 108, 117, 101, 41, 10, 105, 110, 115, 116, 101, 97, 100, 32, 111, 102, 32, 114, 97, 105, 115, 105, 110, 103, 32, 97, 110, 32, 101, 120, 99, 101, 112, 116, 105, 111, 110, 32, 119, 104, 101, 110, 32, 97, 110, 32, 101, 114, 114, 111, 114, 32, 111, 99, 99, 117, 114, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _fileno_doc = allocate([ 102, 105, 108, 101, 110, 111, 40, 41, 32, 45, 62, 32, 105, 110, 116, 101, 103, 101, 114, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 105, 110, 116, 101, 103, 101, 114, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 32, 111, 102, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    _dup_doc = allocate([ 100, 117, 112, 40, 41, 32, 45, 62, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 32, 99, 111, 110, 110, 101, 99, 116, 101, 100, 32, 116, 111, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 115, 121, 115, 116, 101, 109, 32, 114, 101, 115, 111, 117, 114, 99, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _getsockname_doc = allocate([ 103, 101, 116, 115, 111, 99, 107, 110, 97, 109, 101, 40, 41, 32, 45, 62, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 110, 102, 111, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 32, 111, 102, 32, 116, 104, 101, 32, 108, 111, 99, 97, 108, 32, 101, 110, 100, 112, 111, 105, 110, 116, 46, 32, 32, 70, 111, 114, 32, 73, 80, 32, 115, 111, 99, 107, 101, 116, 115, 44, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 10, 105, 110, 102, 111, 32, 105, 115, 32, 97, 32, 112, 97, 105, 114, 32, 40, 104, 111, 115, 116, 97, 100, 100, 114, 44, 32, 112, 111, 114, 116, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _getpeername_doc = allocate([ 103, 101, 116, 112, 101, 101, 114, 110, 97, 109, 101, 40, 41, 32, 45, 62, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 110, 102, 111, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 32, 111, 102, 32, 116, 104, 101, 32, 114, 101, 109, 111, 116, 101, 32, 101, 110, 100, 112, 111, 105, 110, 116, 46, 32, 32, 70, 111, 114, 32, 73, 80, 32, 115, 111, 99, 107, 101, 116, 115, 44, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 10, 105, 110, 102, 111, 32, 105, 115, 32, 97, 32, 112, 97, 105, 114, 32, 40, 104, 111, 115, 116, 97, 100, 100, 114, 44, 32, 112, 111, 114, 116, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _listen_doc = allocate([ 108, 105, 115, 116, 101, 110, 40, 98, 97, 99, 107, 108, 111, 103, 41, 10, 10, 69, 110, 97, 98, 108, 101, 32, 97, 32, 115, 101, 114, 118, 101, 114, 32, 116, 111, 32, 97, 99, 99, 101, 112, 116, 32, 99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 115, 46, 32, 32, 84, 104, 101, 32, 98, 97, 99, 107, 108, 111, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 116, 10, 108, 101, 97, 115, 116, 32, 48, 32, 40, 105, 102, 32, 105, 116, 32, 105, 115, 32, 108, 111, 119, 101, 114, 44, 32, 105, 116, 32, 105, 115, 32, 115, 101, 116, 32, 116, 111, 32, 48, 41, 59, 32, 105, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 115, 32, 116, 104, 101, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 10, 117, 110, 97, 99, 99, 101, 112, 116, 101, 100, 32, 99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 115, 32, 116, 104, 97, 116, 32, 116, 104, 101, 32, 115, 121, 115, 116, 101, 109, 32, 119, 105, 108, 108, 32, 97, 108, 108, 111, 119, 32, 98, 101, 102, 111, 114, 101, 32, 114, 101, 102, 117, 115, 105, 110, 103, 32, 110, 101, 119, 10, 99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 114, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 124, 115, 105, 58, 109, 97, 107, 101, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 60, 115, 111, 99, 107, 101, 116, 62, 0 ], "i8", ALLOC_NORMAL);
    _makefile_doc = allocate([ 109, 97, 107, 101, 102, 105, 108, 101, 40, 91, 109, 111, 100, 101, 91, 44, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 93, 93, 41, 32, 45, 62, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 114, 101, 103, 117, 108, 97, 114, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 32, 99, 111, 114, 114, 101, 115, 112, 111, 110, 100, 105, 110, 103, 32, 116, 111, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 46, 10, 84, 104, 101, 32, 109, 111, 100, 101, 32, 97, 110, 100, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 97, 114, 101, 32, 97, 115, 32, 102, 111, 114, 32, 116, 104, 101, 32, 98, 117, 105, 108, 116, 45, 105, 110, 32, 111, 112, 101, 110, 40, 41, 32, 102, 117, 110, 99, 116, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 105, 124, 105, 58, 114, 101, 99, 118, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 110, 101, 103, 97, 116, 105, 118, 101, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 32, 105, 110, 32, 114, 101, 99, 118, 0 ], "i8", ALLOC_NORMAL);
    _recv_doc = allocate([ 114, 101, 99, 118, 40, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 91, 44, 32, 102, 108, 97, 103, 115, 93, 41, 32, 45, 62, 32, 100, 97, 116, 97, 10, 10, 82, 101, 99, 101, 105, 118, 101, 32, 117, 112, 32, 116, 111, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 32, 98, 121, 116, 101, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 46, 32, 32, 70, 111, 114, 32, 116, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 102, 108, 97, 103, 115, 10, 97, 114, 103, 117, 109, 101, 110, 116, 44, 32, 115, 101, 101, 32, 116, 104, 101, 32, 85, 110, 105, 120, 32, 109, 97, 110, 117, 97, 108, 46, 32, 32, 87, 104, 101, 110, 32, 110, 111, 32, 100, 97, 116, 97, 32, 105, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 44, 32, 98, 108, 111, 99, 107, 32, 117, 110, 116, 105, 108, 10, 97, 116, 32, 108, 101, 97, 115, 116, 32, 111, 110, 101, 32, 98, 121, 116, 101, 32, 105, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 111, 114, 32, 117, 110, 116, 105, 108, 32, 116, 104, 101, 32, 114, 101, 109, 111, 116, 101, 32, 101, 110, 100, 32, 105, 115, 32, 99, 108, 111, 115, 101, 100, 46, 32, 32, 87, 104, 101, 110, 10, 116, 104, 101, 32, 114, 101, 109, 111, 116, 101, 32, 101, 110, 100, 32, 105, 115, 32, 99, 108, 111, 115, 101, 100, 32, 97, 110, 100, 32, 97, 108, 108, 32, 100, 97, 116, 97, 32, 105, 115, 32, 114, 101, 97, 100, 44, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 101, 109, 112, 116, 121, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 119, 42, 124, 105, 105, 58, 114, 101, 99, 118, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_10803 = allocate(16, "i8*", ALLOC_NORMAL);
    __str47 = allocate([ 98, 117, 102, 102, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 110, 98, 121, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 102, 108, 97, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 98, 117, 102, 46, 98, 117, 102, 32, 33, 61, 32, 48, 32, 38, 38, 32, 98, 117, 102, 108, 101, 110, 32, 62, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 115, 111, 99, 107, 101, 116, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10809 = allocate([ 115, 111, 99, 107, 95, 114, 101, 99, 118, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 110, 101, 103, 97, 116, 105, 118, 101, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 32, 105, 110, 32, 114, 101, 99, 118, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 98, 117, 102, 102, 101, 114, 32, 116, 111, 111, 32, 115, 109, 97, 108, 108, 32, 102, 111, 114, 32, 114, 101, 113, 117, 101, 115, 116, 101, 100, 32, 98, 121, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _recv_into_doc = allocate([ 114, 101, 99, 118, 95, 105, 110, 116, 111, 40, 98, 117, 102, 102, 101, 114, 44, 32, 91, 110, 98, 121, 116, 101, 115, 91, 44, 32, 102, 108, 97, 103, 115, 93, 93, 41, 32, 45, 62, 32, 110, 98, 121, 116, 101, 115, 95, 114, 101, 97, 100, 10, 10, 65, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32, 114, 101, 99, 118, 40, 41, 32, 116, 104, 97, 116, 32, 115, 116, 111, 114, 101, 115, 32, 105, 116, 115, 32, 100, 97, 116, 97, 32, 105, 110, 116, 111, 32, 97, 32, 98, 117, 102, 102, 101, 114, 32, 114, 97, 116, 104, 101, 114, 32, 116, 104, 97, 110, 32, 99, 114, 101, 97, 116, 105, 110, 103, 32, 10, 97, 32, 110, 101, 119, 32, 115, 116, 114, 105, 110, 103, 46, 32, 32, 82, 101, 99, 101, 105, 118, 101, 32, 117, 112, 32, 116, 111, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 32, 98, 121, 116, 101, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 46, 32, 32, 73, 102, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 32, 10, 105, 115, 32, 110, 111, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 40, 111, 114, 32, 48, 41, 44, 32, 114, 101, 99, 101, 105, 118, 101, 32, 117, 112, 32, 116, 111, 32, 116, 104, 101, 32, 115, 105, 122, 101, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 105, 110, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 98, 117, 102, 102, 101, 114, 46, 10, 10, 83, 101, 101, 32, 114, 101, 99, 118, 40, 41, 32, 102, 111, 114, 32, 100, 111, 99, 117, 109, 101, 110, 116, 97, 116, 105, 111, 110, 32, 97, 98, 111, 117, 116, 32, 116, 104, 101, 32, 102, 108, 97, 103, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 105, 124, 105, 58, 114, 101, 99, 118, 102, 114, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 110, 101, 103, 97, 116, 105, 118, 101, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 32, 105, 110, 32, 114, 101, 99, 118, 102, 114, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    _recvfrom_doc = allocate([ 114, 101, 99, 118, 102, 114, 111, 109, 40, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 91, 44, 32, 102, 108, 97, 103, 115, 93, 41, 32, 45, 62, 32, 40, 100, 97, 116, 97, 44, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 110, 102, 111, 41, 10, 10, 76, 105, 107, 101, 32, 114, 101, 99, 118, 40, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 44, 32, 102, 108, 97, 103, 115, 41, 32, 98, 117, 116, 32, 97, 108, 115, 111, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 115, 101, 110, 100, 101, 114, 39, 115, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 110, 102, 111, 46, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 119, 42, 124, 105, 105, 58, 114, 101, 99, 118, 102, 114, 111, 109, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_10950 = allocate(16, "i8*", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10957 = allocate([ 115, 111, 99, 107, 95, 114, 101, 99, 118, 102, 114, 111, 109, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 110, 101, 103, 97, 116, 105, 118, 101, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 32, 105, 110, 32, 114, 101, 99, 118, 102, 114, 111, 109, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 108, 78, 0 ], "i8", ALLOC_NORMAL);
    _recvfrom_into_doc = allocate([ 114, 101, 99, 118, 102, 114, 111, 109, 95, 105, 110, 116, 111, 40, 98, 117, 102, 102, 101, 114, 91, 44, 32, 110, 98, 121, 116, 101, 115, 91, 44, 32, 102, 108, 97, 103, 115, 93, 93, 41, 32, 45, 62, 32, 40, 110, 98, 121, 116, 101, 115, 44, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 110, 102, 111, 41, 10, 10, 76, 105, 107, 101, 32, 114, 101, 99, 118, 95, 105, 110, 116, 111, 40, 98, 117, 102, 102, 101, 114, 91, 44, 32, 110, 98, 121, 116, 101, 115, 91, 44, 32, 102, 108, 97, 103, 115, 93, 93, 41, 32, 98, 117, 116, 32, 97, 108, 115, 111, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 115, 101, 110, 100, 101, 114, 39, 115, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 110, 102, 111, 46, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 115, 42, 124, 105, 58, 115, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _send_doc = allocate([ 115, 101, 110, 100, 40, 100, 97, 116, 97, 91, 44, 32, 102, 108, 97, 103, 115, 93, 41, 32, 45, 62, 32, 99, 111, 117, 110, 116, 10, 10, 83, 101, 110, 100, 32, 97, 32, 100, 97, 116, 97, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 46, 32, 32, 70, 111, 114, 32, 116, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 102, 108, 97, 103, 115, 10, 97, 114, 103, 117, 109, 101, 110, 116, 44, 32, 115, 101, 101, 32, 116, 104, 101, 32, 85, 110, 105, 120, 32, 109, 97, 110, 117, 97, 108, 46, 32, 32, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 98, 121, 116, 101, 115, 10, 115, 101, 110, 116, 59, 32, 116, 104, 105, 115, 32, 109, 97, 121, 32, 98, 101, 32, 108, 101, 115, 115, 32, 116, 104, 97, 110, 32, 108, 101, 110, 40, 100, 97, 116, 97, 41, 32, 105, 102, 32, 116, 104, 101, 32, 110, 101, 116, 119, 111, 114, 107, 32, 105, 115, 32, 98, 117, 115, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 115, 42, 124, 105, 58, 115, 101, 110, 100, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    _sendall_doc = allocate([ 115, 101, 110, 100, 97, 108, 108, 40, 100, 97, 116, 97, 91, 44, 32, 102, 108, 97, 103, 115, 93, 41, 10, 10, 83, 101, 110, 100, 32, 97, 32, 100, 97, 116, 97, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 46, 32, 32, 70, 111, 114, 32, 116, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 102, 108, 97, 103, 115, 10, 97, 114, 103, 117, 109, 101, 110, 116, 44, 32, 115, 101, 101, 32, 116, 104, 101, 32, 85, 110, 105, 120, 32, 109, 97, 110, 117, 97, 108, 46, 32, 32, 84, 104, 105, 115, 32, 99, 97, 108, 108, 115, 32, 115, 101, 110, 100, 40, 41, 32, 114, 101, 112, 101, 97, 116, 101, 100, 108, 121, 10, 117, 110, 116, 105, 108, 32, 97, 108, 108, 32, 100, 97, 116, 97, 32, 105, 115, 32, 115, 101, 110, 116, 46, 32, 32, 73, 102, 32, 97, 110, 32, 101, 114, 114, 111, 114, 32, 111, 99, 99, 117, 114, 115, 44, 32, 105, 116, 39, 115, 32, 105, 109, 112, 111, 115, 115, 105, 98, 108, 101, 10, 116, 111, 32, 116, 101, 108, 108, 32, 104, 111, 119, 32, 109, 117, 99, 104, 32, 100, 97, 116, 97, 32, 104, 97, 115, 32, 98, 101, 101, 110, 32, 115, 101, 110, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 115, 42, 79, 58, 115, 101, 110, 100, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 115, 42, 105, 79, 58, 115, 101, 110, 100, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 115, 101, 110, 100, 116, 111, 40, 41, 32, 116, 97, 107, 101, 115, 32, 50, 32, 111, 114, 32, 51, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 40, 37, 100, 32, 103, 105, 118, 101, 110, 41, 0 ], "i8", ALLOC_NORMAL);
    _sendto_doc = allocate([ 115, 101, 110, 100, 116, 111, 40, 100, 97, 116, 97, 91, 44, 32, 102, 108, 97, 103, 115, 93, 44, 32, 97, 100, 100, 114, 101, 115, 115, 41, 32, 45, 62, 32, 99, 111, 117, 110, 116, 10, 10, 76, 105, 107, 101, 32, 115, 101, 110, 100, 40, 100, 97, 116, 97, 44, 32, 102, 108, 97, 103, 115, 41, 32, 98, 117, 116, 32, 97, 108, 108, 111, 119, 115, 32, 115, 112, 101, 99, 105, 102, 121, 105, 110, 103, 32, 116, 104, 101, 32, 100, 101, 115, 116, 105, 110, 97, 116, 105, 111, 110, 32, 97, 100, 100, 114, 101, 115, 115, 46, 10, 70, 111, 114, 32, 73, 80, 32, 115, 111, 99, 107, 101, 116, 115, 44, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 115, 32, 97, 32, 112, 97, 105, 114, 32, 40, 104, 111, 115, 116, 97, 100, 100, 114, 44, 32, 112, 111, 114, 116, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _shutdown_doc = allocate([ 115, 104, 117, 116, 100, 111, 119, 110, 40, 102, 108, 97, 103, 41, 10, 10, 83, 104, 117, 116, 32, 100, 111, 119, 110, 32, 116, 104, 101, 32, 114, 101, 97, 100, 105, 110, 103, 32, 115, 105, 100, 101, 32, 111, 102, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 40, 102, 108, 97, 103, 32, 61, 61, 32, 83, 72, 85, 84, 95, 82, 68, 41, 44, 32, 116, 104, 101, 32, 119, 114, 105, 116, 105, 110, 103, 32, 115, 105, 100, 101, 10, 111, 102, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 40, 102, 108, 97, 103, 32, 61, 61, 32, 83, 72, 85, 84, 95, 87, 82, 41, 44, 32, 111, 114, 32, 98, 111, 116, 104, 32, 101, 110, 100, 115, 32, 40, 102, 108, 97, 103, 32, 61, 61, 32, 83, 72, 85, 84, 95, 82, 68, 87, 82, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 97, 99, 99, 101, 112, 116, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 98, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 99, 108, 111, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 99, 111, 110, 110, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 99, 111, 110, 110, 101, 99, 116, 95, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 100, 117, 112, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 102, 105, 108, 101, 110, 111, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 103, 101, 116, 112, 101, 101, 114, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 103, 101, 116, 115, 111, 99, 107, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 103, 101, 116, 115, 111, 99, 107, 111, 112, 116, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 108, 105, 115, 116, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 109, 97, 107, 101, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 114, 101, 99, 118, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 114, 101, 99, 118, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 114, 101, 99, 118, 102, 114, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    __str79 = allocate([ 114, 101, 99, 118, 102, 114, 111, 109, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str80 = allocate([ 115, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 115, 101, 110, 100, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str82 = allocate([ 115, 101, 110, 100, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str83 = allocate([ 115, 101, 116, 98, 108, 111, 99, 107, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str84 = allocate([ 115, 101, 116, 116, 105, 109, 101, 111, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 103, 101, 116, 116, 105, 109, 101, 111, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    __str86 = allocate([ 115, 101, 116, 115, 111, 99, 107, 111, 112, 116, 0 ], "i8", ALLOC_NORMAL);
    __str87 = allocate([ 115, 104, 117, 116, 100, 111, 119, 110, 0 ], "i8", ALLOC_NORMAL);
    _sock_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str88 = allocate([ 102, 97, 109, 105, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str89 = allocate([ 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 102, 97, 109, 105, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str90 = allocate([ 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str91 = allocate([ 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str92 = allocate([ 112, 114, 111, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str93 = allocate([ 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 112, 114, 111, 116, 111, 99, 111, 108, 0 ], "i8", ALLOC_NORMAL);
    __str94 = allocate([ 116, 105, 109, 101, 111, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    __str95 = allocate([ 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 116, 105, 109, 101, 111, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    _sock_memberlist = allocate([ 0, 0, 0, 0, 1, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 20, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str96 = allocate([ 60, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 44, 32, 102, 100, 61, 37, 108, 100, 44, 32, 102, 97, 109, 105, 108, 121, 61, 37, 100, 44, 32, 116, 121, 112, 101, 61, 37, 100, 44, 32, 112, 114, 111, 116, 111, 99, 111, 108, 61, 37, 100, 62, 0 ], "i8", ALLOC_NORMAL);
    __str97 = allocate([ 124, 105, 105, 105, 58, 115, 111, 99, 107, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    _keywords_11197 = allocate(16, "i8*", ALLOC_NORMAL);
    __str98 = allocate([ 95, 115, 111, 99, 107, 101, 116, 46, 115, 111, 99, 107, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    _sock_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _gethostname_doc = allocate([ 103, 101, 116, 104, 111, 115, 116, 110, 97, 109, 101, 40, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 104, 111, 115, 116, 32, 110, 97, 109, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str99 = allocate([ 115, 58, 103, 101, 116, 104, 111, 115, 116, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _gethostbyname_doc = allocate([ 103, 101, 116, 104, 111, 115, 116, 98, 121, 110, 97, 109, 101, 40, 104, 111, 115, 116, 41, 32, 45, 62, 32, 97, 100, 100, 114, 101, 115, 115, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 32, 40, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 116, 104, 101, 32, 102, 111, 114, 109, 32, 39, 50, 53, 53, 46, 50, 53, 53, 46, 50, 53, 53, 46, 50, 53, 53, 39, 41, 32, 102, 111, 114, 32, 97, 32, 104, 111, 115, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str100 = allocate([ 115, 79, 79, 0 ], "i8", ALLOC_NORMAL);
    __str101 = allocate([ 115, 58, 103, 101, 116, 104, 111, 115, 116, 98, 121, 110, 97, 109, 101, 95, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    _ghbn_ex_doc = allocate([ 103, 101, 116, 104, 111, 115, 116, 98, 121, 110, 97, 109, 101, 95, 101, 120, 40, 104, 111, 115, 116, 41, 32, 45, 62, 32, 40, 110, 97, 109, 101, 44, 32, 97, 108, 105, 97, 115, 108, 105, 115, 116, 44, 32, 97, 100, 100, 114, 101, 115, 115, 108, 105, 115, 116, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 116, 114, 117, 101, 32, 104, 111, 115, 116, 32, 110, 97, 109, 101, 44, 32, 97, 32, 108, 105, 115, 116, 32, 111, 102, 32, 97, 108, 105, 97, 115, 101, 115, 44, 32, 97, 110, 100, 32, 97, 32, 108, 105, 115, 116, 32, 111, 102, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 101, 115, 44, 10, 102, 111, 114, 32, 97, 32, 104, 111, 115, 116, 46, 32, 32, 84, 104, 101, 32, 104, 111, 115, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 103, 105, 118, 105, 110, 103, 32, 97, 32, 104, 111, 115, 116, 32, 110, 97, 109, 101, 32, 111, 114, 32, 73, 80, 32, 110, 117, 109, 98, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str102 = allocate([ 115, 58, 103, 101, 116, 104, 111, 115, 116, 98, 121, 97, 100, 100, 114, 0 ], "i8", ALLOC_NORMAL);
    _gethostbyaddr_doc = allocate([ 103, 101, 116, 104, 111, 115, 116, 98, 121, 97, 100, 100, 114, 40, 104, 111, 115, 116, 41, 32, 45, 62, 32, 40, 110, 97, 109, 101, 44, 32, 97, 108, 105, 97, 115, 108, 105, 115, 116, 44, 32, 97, 100, 100, 114, 101, 115, 115, 108, 105, 115, 116, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 116, 114, 117, 101, 32, 104, 111, 115, 116, 32, 110, 97, 109, 101, 44, 32, 97, 32, 108, 105, 115, 116, 32, 111, 102, 32, 97, 108, 105, 97, 115, 101, 115, 44, 32, 97, 110, 100, 32, 97, 32, 108, 105, 115, 116, 32, 111, 102, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 101, 115, 44, 10, 102, 111, 114, 32, 97, 32, 104, 111, 115, 116, 46, 32, 32, 84, 104, 101, 32, 104, 111, 115, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 103, 105, 118, 105, 110, 103, 32, 97, 32, 104, 111, 115, 116, 32, 110, 97, 109, 101, 32, 111, 114, 32, 73, 80, 32, 110, 117, 109, 98, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str103 = allocate([ 115, 124, 115, 58, 103, 101, 116, 115, 101, 114, 118, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str104 = allocate([ 115, 101, 114, 118, 105, 99, 101, 47, 112, 114, 111, 116, 111, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _getservbyname_doc = allocate([ 103, 101, 116, 115, 101, 114, 118, 98, 121, 110, 97, 109, 101, 40, 115, 101, 114, 118, 105, 99, 101, 110, 97, 109, 101, 91, 44, 32, 112, 114, 111, 116, 111, 99, 111, 108, 110, 97, 109, 101, 93, 41, 32, 45, 62, 32, 105, 110, 116, 101, 103, 101, 114, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 112, 111, 114, 116, 32, 110, 117, 109, 98, 101, 114, 32, 102, 114, 111, 109, 32, 97, 32, 115, 101, 114, 118, 105, 99, 101, 32, 110, 97, 109, 101, 32, 97, 110, 100, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 110, 97, 109, 101, 46, 10, 84, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 110, 97, 109, 101, 44, 32, 105, 102, 32, 103, 105, 118, 101, 110, 44, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 39, 116, 99, 112, 39, 32, 111, 114, 32, 39, 117, 100, 112, 39, 44, 10, 111, 116, 104, 101, 114, 119, 105, 115, 101, 32, 97, 110, 121, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 119, 105, 108, 108, 32, 109, 97, 116, 99, 104, 46, 0 ], "i8", ALLOC_NORMAL);
    __str105 = allocate([ 105, 124, 115, 58, 103, 101, 116, 115, 101, 114, 118, 98, 121, 112, 111, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str106 = allocate([ 103, 101, 116, 115, 101, 114, 118, 98, 121, 112, 111, 114, 116, 58, 32, 112, 111, 114, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 48, 45, 54, 53, 53, 51, 53, 46, 0 ], "i8", ALLOC_NORMAL);
    __str107 = allocate([ 112, 111, 114, 116, 47, 112, 114, 111, 116, 111, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _getservbyport_doc = allocate([ 103, 101, 116, 115, 101, 114, 118, 98, 121, 112, 111, 114, 116, 40, 112, 111, 114, 116, 91, 44, 32, 112, 114, 111, 116, 111, 99, 111, 108, 110, 97, 109, 101, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 115, 101, 114, 118, 105, 99, 101, 32, 110, 97, 109, 101, 32, 102, 114, 111, 109, 32, 97, 32, 112, 111, 114, 116, 32, 110, 117, 109, 98, 101, 114, 32, 97, 110, 100, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 110, 97, 109, 101, 46, 10, 84, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 110, 97, 109, 101, 44, 32, 105, 102, 32, 103, 105, 118, 101, 110, 44, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 39, 116, 99, 112, 39, 32, 111, 114, 32, 39, 117, 100, 112, 39, 44, 10, 111, 116, 104, 101, 114, 119, 105, 115, 101, 32, 97, 110, 121, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 119, 105, 108, 108, 32, 109, 97, 116, 99, 104, 46, 0 ], "i8", ALLOC_NORMAL);
    __str108 = allocate([ 115, 58, 103, 101, 116, 112, 114, 111, 116, 111, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str109 = allocate([ 112, 114, 111, 116, 111, 99, 111, 108, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _getprotobyname_doc = allocate([ 103, 101, 116, 112, 114, 111, 116, 111, 98, 121, 110, 97, 109, 101, 40, 110, 97, 109, 101, 41, 32, 45, 62, 32, 105, 110, 116, 101, 103, 101, 114, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 110, 117, 109, 98, 101, 114, 32, 102, 111, 114, 32, 116, 104, 101, 32, 110, 97, 109, 101, 100, 32, 112, 114, 111, 116, 111, 99, 111, 108, 46, 32, 32, 40, 82, 97, 114, 101, 108, 121, 32, 117, 115, 101, 100, 46, 41, 0 ], "i8", ALLOC_NORMAL);
    __str110 = allocate([ 124, 105, 105, 105, 58, 115, 111, 99, 107, 101, 116, 112, 97, 105, 114, 0 ], "i8", ALLOC_NORMAL);
    _socketpair_doc = allocate([ 115, 111, 99, 107, 101, 116, 112, 97, 105, 114, 40, 91, 102, 97, 109, 105, 108, 121, 91, 44, 32, 116, 121, 112, 101, 91, 44, 32, 112, 114, 111, 116, 111, 93, 93, 93, 41, 32, 45, 62, 32, 40, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 44, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 41, 10, 10, 67, 114, 101, 97, 116, 101, 32, 97, 32, 112, 97, 105, 114, 32, 111, 102, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 115, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 112, 108, 97, 116, 102, 111, 114, 109, 10, 115, 111, 99, 107, 101, 116, 112, 97, 105, 114, 40, 41, 32, 102, 117, 110, 99, 116, 105, 111, 110, 46, 10, 84, 104, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 97, 114, 101, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 97, 115, 32, 102, 111, 114, 32, 115, 111, 99, 107, 101, 116, 40, 41, 32, 101, 120, 99, 101, 112, 116, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 102, 97, 109, 105, 108, 121, 32, 105, 115, 10, 65, 70, 95, 85, 78, 73, 88, 32, 105, 102, 32, 100, 101, 102, 105, 110, 101, 100, 32, 111, 110, 32, 116, 104, 101, 32, 112, 108, 97, 116, 102, 111, 114, 109, 59, 32, 111, 116, 104, 101, 114, 119, 105, 115, 101, 44, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 105, 115, 32, 65, 70, 95, 73, 78, 69, 84, 46, 0 ], "i8", ALLOC_NORMAL);
    __str111 = allocate([ 105, 105, 105, 124, 105, 58, 102, 114, 111, 109, 102, 100, 0 ], "i8", ALLOC_NORMAL);
    _fromfd_doc = allocate([ 102, 114, 111, 109, 102, 100, 40, 102, 100, 44, 32, 102, 97, 109, 105, 108, 121, 44, 32, 116, 121, 112, 101, 91, 44, 32, 112, 114, 111, 116, 111, 93, 41, 32, 45, 62, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 10, 10, 67, 114, 101, 97, 116, 101, 32, 97, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 32, 102, 114, 111, 109, 32, 97, 32, 100, 117, 112, 108, 105, 99, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 10, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 46, 10, 84, 104, 101, 32, 114, 101, 109, 97, 105, 110, 105, 110, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 97, 114, 101, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 97, 115, 32, 102, 111, 114, 32, 115, 111, 99, 107, 101, 116, 40, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str112 = allocate([ 105, 58, 110, 116, 111, 104, 115, 0 ], "i8", ALLOC_NORMAL);
    __str113 = allocate([ 99, 97, 110, 39, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 110, 101, 103, 97, 116, 105, 118, 101, 32, 110, 117, 109, 98, 101, 114, 32, 116, 111, 32, 117, 110, 115, 105, 103, 110, 101, 100, 32, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _ntohs_doc = allocate([ 110, 116, 111, 104, 115, 40, 105, 110, 116, 101, 103, 101, 114, 41, 32, 45, 62, 32, 105, 110, 116, 101, 103, 101, 114, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 49, 54, 45, 98, 105, 116, 32, 105, 110, 116, 101, 103, 101, 114, 32, 102, 114, 111, 109, 32, 110, 101, 116, 119, 111, 114, 107, 32, 116, 111, 32, 104, 111, 115, 116, 32, 98, 121, 116, 101, 32, 111, 114, 100, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str114 = allocate([ 101, 120, 112, 101, 99, 116, 101, 100, 32, 105, 110, 116, 47, 108, 111, 110, 103, 44, 32, 37, 115, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _ntohl_doc = allocate([ 110, 116, 111, 104, 108, 40, 105, 110, 116, 101, 103, 101, 114, 41, 32, 45, 62, 32, 105, 110, 116, 101, 103, 101, 114, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 51, 50, 45, 98, 105, 116, 32, 105, 110, 116, 101, 103, 101, 114, 32, 102, 114, 111, 109, 32, 110, 101, 116, 119, 111, 114, 107, 32, 116, 111, 32, 104, 111, 115, 116, 32, 98, 121, 116, 101, 32, 111, 114, 100, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str115 = allocate([ 105, 58, 104, 116, 111, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    _htons_doc = allocate([ 104, 116, 111, 110, 115, 40, 105, 110, 116, 101, 103, 101, 114, 41, 32, 45, 62, 32, 105, 110, 116, 101, 103, 101, 114, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 49, 54, 45, 98, 105, 116, 32, 105, 110, 116, 101, 103, 101, 114, 32, 102, 114, 111, 109, 32, 104, 111, 115, 116, 32, 116, 111, 32, 110, 101, 116, 119, 111, 114, 107, 32, 98, 121, 116, 101, 32, 111, 114, 100, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    _htonl_doc = allocate([ 104, 116, 111, 110, 108, 40, 105, 110, 116, 101, 103, 101, 114, 41, 32, 45, 62, 32, 105, 110, 116, 101, 103, 101, 114, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 51, 50, 45, 98, 105, 116, 32, 105, 110, 116, 101, 103, 101, 114, 32, 102, 114, 111, 109, 32, 104, 111, 115, 116, 32, 116, 111, 32, 110, 101, 116, 119, 111, 114, 107, 32, 98, 121, 116, 101, 32, 111, 114, 100, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    _inet_aton_doc = allocate([ 105, 110, 101, 116, 95, 97, 116, 111, 110, 40, 115, 116, 114, 105, 110, 103, 41, 32, 45, 62, 32, 112, 97, 99, 107, 101, 100, 32, 51, 50, 45, 98, 105, 116, 32, 73, 80, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 110, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 110, 32, 115, 116, 114, 105, 110, 103, 32, 102, 111, 114, 109, 97, 116, 32, 40, 49, 50, 51, 46, 52, 53, 46, 54, 55, 46, 56, 57, 41, 32, 116, 111, 32, 116, 104, 101, 32, 51, 50, 45, 98, 105, 116, 32, 112, 97, 99, 107, 101, 100, 10, 98, 105, 110, 97, 114, 121, 32, 102, 111, 114, 109, 97, 116, 32, 117, 115, 101, 100, 32, 105, 110, 32, 108, 111, 119, 45, 108, 101, 118, 101, 108, 32, 110, 101, 116, 119, 111, 114, 107, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str116 = allocate([ 115, 58, 105, 110, 101, 116, 95, 97, 116, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str117 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 32, 115, 116, 114, 105, 110, 103, 32, 112, 97, 115, 115, 101, 100, 32, 116, 111, 32, 105, 110, 101, 116, 95, 97, 116, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    _inet_ntoa_doc = allocate([ 105, 110, 101, 116, 95, 110, 116, 111, 97, 40, 112, 97, 99, 107, 101, 100, 95, 105, 112, 41, 32, 45, 62, 32, 105, 112, 95, 97, 100, 100, 114, 101, 115, 115, 95, 115, 116, 114, 105, 110, 103, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 110, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 32, 102, 114, 111, 109, 32, 51, 50, 45, 98, 105, 116, 32, 112, 97, 99, 107, 101, 100, 32, 98, 105, 110, 97, 114, 121, 32, 102, 111, 114, 109, 97, 116, 32, 116, 111, 32, 115, 116, 114, 105, 110, 103, 32, 102, 111, 114, 109, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str118 = allocate([ 115, 35, 58, 105, 110, 101, 116, 95, 110, 116, 111, 97, 0 ], "i8", ALLOC_NORMAL);
    __str119 = allocate([ 112, 97, 99, 107, 101, 100, 32, 73, 80, 32, 119, 114, 111, 110, 103, 32, 108, 101, 110, 103, 116, 104, 32, 102, 111, 114, 32, 105, 110, 101, 116, 95, 110, 116, 111, 97, 0 ], "i8", ALLOC_NORMAL);
    _inet_pton_doc = allocate([ 105, 110, 101, 116, 95, 112, 116, 111, 110, 40, 97, 102, 44, 32, 105, 112, 41, 32, 45, 62, 32, 112, 97, 99, 107, 101, 100, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 32, 115, 116, 114, 105, 110, 103, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 110, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 32, 102, 114, 111, 109, 32, 115, 116, 114, 105, 110, 103, 32, 102, 111, 114, 109, 97, 116, 32, 116, 111, 32, 97, 32, 112, 97, 99, 107, 101, 100, 32, 115, 116, 114, 105, 110, 103, 32, 115, 117, 105, 116, 97, 98, 108, 101, 10, 102, 111, 114, 32, 117, 115, 101, 32, 119, 105, 116, 104, 32, 108, 111, 119, 45, 108, 101, 118, 101, 108, 32, 110, 101, 116, 119, 111, 114, 107, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str120 = allocate([ 105, 115, 58, 105, 110, 101, 116, 95, 112, 116, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str121 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 32, 115, 116, 114, 105, 110, 103, 32, 112, 97, 115, 115, 101, 100, 32, 116, 111, 32, 105, 110, 101, 116, 95, 112, 116, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    _inet_ntop_doc = allocate([ 105, 110, 101, 116, 95, 110, 116, 111, 112, 40, 97, 102, 44, 32, 112, 97, 99, 107, 101, 100, 95, 105, 112, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 32, 102, 111, 114, 109, 97, 116, 116, 101, 100, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 112, 97, 99, 107, 101, 100, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 32, 111, 102, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 102, 97, 109, 105, 108, 121, 32, 116, 111, 32, 115, 116, 114, 105, 110, 103, 32, 102, 111, 114, 109, 97, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str122 = allocate([ 105, 115, 35, 58, 105, 110, 101, 116, 95, 110, 116, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str123 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 108, 101, 110, 103, 116, 104, 32, 111, 102, 32, 112, 97, 99, 107, 101, 100, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str124 = allocate([ 117, 110, 107, 110, 111, 119, 110, 32, 97, 100, 100, 114, 101, 115, 115, 32, 102, 97, 109, 105, 108, 121, 32, 37, 100, 0 ], "i8", ALLOC_NORMAL);
    __str125 = allocate([ 79, 79, 124, 105, 105, 105, 105, 58, 103, 101, 116, 97, 100, 100, 114, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str126 = allocate([ 101, 110, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str127 = allocate([ 115, 0 ], "i8", ALLOC_NORMAL);
    __str128 = allocate([ 103, 101, 116, 97, 100, 100, 114, 105, 110, 102, 111, 40, 41, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 49, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 116, 114, 105, 110, 103, 32, 111, 114, 32, 78, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str129 = allocate([ 37, 108, 100, 0 ], "i8", ALLOC_NORMAL);
    __str130 = allocate([ 73, 110, 116, 32, 111, 114, 32, 83, 116, 114, 105, 110, 103, 32, 101, 120, 112, 101, 99, 116, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str131 = allocate([ 105, 105, 105, 115, 79, 0 ], "i8", ALLOC_NORMAL);
    _getaddrinfo_doc = allocate([ 103, 101, 116, 97, 100, 100, 114, 105, 110, 102, 111, 40, 104, 111, 115, 116, 44, 32, 112, 111, 114, 116, 32, 91, 44, 32, 102, 97, 109, 105, 108, 121, 44, 32, 115, 111, 99, 107, 116, 121, 112, 101, 44, 32, 112, 114, 111, 116, 111, 44, 32, 102, 108, 97, 103, 115, 93, 41, 10, 32, 32, 32, 32, 45, 62, 32, 108, 105, 115, 116, 32, 111, 102, 32, 40, 102, 97, 109, 105, 108, 121, 44, 32, 115, 111, 99, 107, 116, 121, 112, 101, 44, 32, 112, 114, 111, 116, 111, 44, 32, 99, 97, 110, 111, 110, 110, 97, 109, 101, 44, 32, 115, 111, 99, 107, 97, 100, 100, 114, 41, 10, 10, 82, 101, 115, 111, 108, 118, 101, 32, 104, 111, 115, 116, 32, 97, 110, 100, 32, 112, 111, 114, 116, 32, 105, 110, 116, 111, 32, 97, 100, 100, 114, 105, 110, 102, 111, 32, 115, 116, 114, 117, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str132 = allocate([ 79, 105, 58, 103, 101, 116, 110, 97, 109, 101, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str133 = allocate([ 103, 101, 116, 110, 97, 109, 101, 105, 110, 102, 111, 40, 41, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 49, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str134 = allocate([ 115, 105, 124, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str135 = allocate([ 37, 100, 0 ], "i8", ALLOC_NORMAL);
    __str136 = allocate([ 115, 111, 99, 107, 97, 100, 100, 114, 32, 114, 101, 115, 111, 108, 118, 101, 100, 32, 116, 111, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 97, 100, 100, 114, 101, 115, 115, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str137 = allocate([ 73, 80, 118, 52, 32, 115, 111, 99, 107, 97, 100, 100, 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 50, 32, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str138 = allocate([ 115, 115, 0 ], "i8", ALLOC_NORMAL);
    _getnameinfo_doc = allocate([ 103, 101, 116, 110, 97, 109, 101, 105, 110, 102, 111, 40, 115, 111, 99, 107, 97, 100, 100, 114, 44, 32, 102, 108, 97, 103, 115, 41, 32, 45, 45, 62, 32, 40, 104, 111, 115, 116, 44, 32, 112, 111, 114, 116, 41, 10, 10, 71, 101, 116, 32, 104, 111, 115, 116, 32, 97, 110, 100, 32, 112, 111, 114, 116, 32, 102, 111, 114, 32, 97, 32, 115, 111, 99, 107, 97, 100, 100, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    _getdefaulttimeout_doc = allocate([ 103, 101, 116, 100, 101, 102, 97, 117, 108, 116, 116, 105, 109, 101, 111, 117, 116, 40, 41, 32, 45, 62, 32, 116, 105, 109, 101, 111, 117, 116, 10, 10, 82, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 116, 105, 109, 101, 111, 117, 116, 32, 105, 110, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 115, 101, 99, 111, 110, 100, 115, 32, 102, 111, 114, 32, 110, 101, 119, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 115, 46, 10, 65, 32, 118, 97, 108, 117, 101, 32, 111, 102, 32, 78, 111, 110, 101, 32, 105, 110, 100, 105, 99, 97, 116, 101, 115, 32, 116, 104, 97, 116, 32, 110, 101, 119, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 115, 32, 104, 97, 118, 101, 32, 110, 111, 32, 116, 105, 109, 101, 111, 117, 116, 46, 10, 87, 104, 101, 110, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 109, 111, 100, 117, 108, 101, 32, 105, 115, 32, 102, 105, 114, 115, 116, 32, 105, 109, 112, 111, 114, 116, 101, 100, 44, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 105, 115, 32, 78, 111, 110, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _setdefaulttimeout_doc = allocate([ 115, 101, 116, 100, 101, 102, 97, 117, 108, 116, 116, 105, 109, 101, 111, 117, 116, 40, 116, 105, 109, 101, 111, 117, 116, 41, 10, 10, 83, 101, 116, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 116, 105, 109, 101, 111, 117, 116, 32, 105, 110, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 115, 101, 99, 111, 110, 100, 115, 32, 102, 111, 114, 32, 110, 101, 119, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 115, 46, 10, 65, 32, 118, 97, 108, 117, 101, 32, 111, 102, 32, 78, 111, 110, 101, 32, 105, 110, 100, 105, 99, 97, 116, 101, 115, 32, 116, 104, 97, 116, 32, 110, 101, 119, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 115, 32, 104, 97, 118, 101, 32, 110, 111, 32, 116, 105, 109, 101, 111, 117, 116, 46, 10, 87, 104, 101, 110, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 109, 111, 100, 117, 108, 101, 32, 105, 115, 32, 102, 105, 114, 115, 116, 32, 105, 109, 112, 111, 114, 116, 101, 100, 44, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 105, 115, 32, 78, 111, 110, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str139 = allocate([ 103, 101, 116, 104, 111, 115, 116, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str140 = allocate([ 103, 101, 116, 104, 111, 115, 116, 98, 121, 110, 97, 109, 101, 95, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    __str141 = allocate([ 103, 101, 116, 104, 111, 115, 116, 98, 121, 97, 100, 100, 114, 0 ], "i8", ALLOC_NORMAL);
    __str142 = allocate([ 103, 101, 116, 104, 111, 115, 116, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str143 = allocate([ 103, 101, 116, 115, 101, 114, 118, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str144 = allocate([ 103, 101, 116, 115, 101, 114, 118, 98, 121, 112, 111, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str145 = allocate([ 103, 101, 116, 112, 114, 111, 116, 111, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str146 = allocate([ 102, 114, 111, 109, 102, 100, 0 ], "i8", ALLOC_NORMAL);
    __str147 = allocate([ 115, 111, 99, 107, 101, 116, 112, 97, 105, 114, 0 ], "i8", ALLOC_NORMAL);
    __str148 = allocate([ 110, 116, 111, 104, 115, 0 ], "i8", ALLOC_NORMAL);
    __str149 = allocate([ 110, 116, 111, 104, 108, 0 ], "i8", ALLOC_NORMAL);
    __str150 = allocate([ 104, 116, 111, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    __str151 = allocate([ 104, 116, 111, 110, 108, 0 ], "i8", ALLOC_NORMAL);
    __str152 = allocate([ 105, 110, 101, 116, 95, 97, 116, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str153 = allocate([ 105, 110, 101, 116, 95, 110, 116, 111, 97, 0 ], "i8", ALLOC_NORMAL);
    __str154 = allocate([ 105, 110, 101, 116, 95, 112, 116, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str155 = allocate([ 105, 110, 101, 116, 95, 110, 116, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str156 = allocate([ 103, 101, 116, 97, 100, 100, 114, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str157 = allocate([ 103, 101, 116, 110, 97, 109, 101, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str158 = allocate([ 103, 101, 116, 100, 101, 102, 97, 117, 108, 116, 116, 105, 109, 101, 111, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    __str159 = allocate([ 115, 101, 116, 100, 101, 102, 97, 117, 108, 116, 116, 105, 109, 101, 111, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    _socket_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _PySocketModuleAPI = allocate(8, [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_NORMAL);
    _socket_doc = allocate([ 73, 109, 112, 108, 101, 109, 101, 110, 116, 97, 116, 105, 111, 110, 32, 109, 111, 100, 117, 108, 101, 32, 102, 111, 114, 32, 115, 111, 99, 107, 101, 116, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 115, 46, 10, 10, 83, 101, 101, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 109, 111, 100, 117, 108, 101, 32, 102, 111, 114, 32, 100, 111, 99, 117, 109, 101, 110, 116, 97, 116, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str160 = allocate([ 95, 115, 111, 99, 107, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str161 = allocate([ 115, 111, 99, 107, 101, 116, 46, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str162 = allocate([ 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str163 = allocate([ 115, 111, 99, 107, 101, 116, 46, 104, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str164 = allocate([ 104, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str165 = allocate([ 115, 111, 99, 107, 101, 116, 46, 103, 97, 105, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str166 = allocate([ 103, 97, 105, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str167 = allocate([ 115, 111, 99, 107, 101, 116, 46, 116, 105, 109, 101, 111, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    __str168 = allocate([ 83, 111, 99, 107, 101, 116, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str169 = allocate([ 115, 111, 99, 107, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str170 = allocate([ 104, 97, 115, 95, 105, 112, 118, 54, 0 ], "i8", ALLOC_NORMAL);
    __str171 = allocate([ 95, 115, 111, 99, 107, 101, 116, 46, 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str172 = allocate([ 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str173 = allocate([ 65, 70, 95, 85, 78, 83, 80, 69, 67, 0 ], "i8", ALLOC_NORMAL);
    __str174 = allocate([ 65, 70, 95, 73, 78, 69, 84, 0 ], "i8", ALLOC_NORMAL);
    __str175 = allocate([ 65, 70, 95, 73, 78, 69, 84, 54, 0 ], "i8", ALLOC_NORMAL);
    __str176 = allocate([ 65, 70, 95, 85, 78, 73, 88, 0 ], "i8", ALLOC_NORMAL);
    __str177 = allocate([ 65, 70, 95, 65, 88, 50, 53, 0 ], "i8", ALLOC_NORMAL);
    __str178 = allocate([ 65, 70, 95, 73, 80, 88, 0 ], "i8", ALLOC_NORMAL);
    __str179 = allocate([ 65, 70, 95, 65, 80, 80, 76, 69, 84, 65, 76, 75, 0 ], "i8", ALLOC_NORMAL);
    __str180 = allocate([ 65, 70, 95, 78, 69, 84, 82, 79, 77, 0 ], "i8", ALLOC_NORMAL);
    __str181 = allocate([ 65, 70, 95, 66, 82, 73, 68, 71, 69, 0 ], "i8", ALLOC_NORMAL);
    __str182 = allocate([ 65, 70, 95, 65, 84, 77, 80, 86, 67, 0 ], "i8", ALLOC_NORMAL);
    __str183 = allocate([ 65, 70, 95, 88, 50, 53, 0 ], "i8", ALLOC_NORMAL);
    __str184 = allocate([ 65, 70, 95, 82, 79, 83, 69, 0 ], "i8", ALLOC_NORMAL);
    __str185 = allocate([ 65, 70, 95, 68, 69, 67, 110, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str186 = allocate([ 65, 70, 95, 78, 69, 84, 66, 69, 85, 73, 0 ], "i8", ALLOC_NORMAL);
    __str187 = allocate([ 65, 70, 95, 83, 69, 67, 85, 82, 73, 84, 89, 0 ], "i8", ALLOC_NORMAL);
    __str188 = allocate([ 65, 70, 95, 75, 69, 89, 0 ], "i8", ALLOC_NORMAL);
    __str189 = allocate([ 65, 70, 95, 78, 69, 84, 76, 73, 78, 75, 0 ], "i8", ALLOC_NORMAL);
    __str190 = allocate([ 78, 69, 84, 76, 73, 78, 75, 95, 82, 79, 85, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str191 = allocate([ 78, 69, 84, 76, 73, 78, 75, 95, 85, 83, 69, 82, 83, 79, 67, 75, 0 ], "i8", ALLOC_NORMAL);
    __str192 = allocate([ 78, 69, 84, 76, 73, 78, 75, 95, 70, 73, 82, 69, 87, 65, 76, 76, 0 ], "i8", ALLOC_NORMAL);
    __str193 = allocate([ 78, 69, 84, 76, 73, 78, 75, 95, 78, 70, 76, 79, 71, 0 ], "i8", ALLOC_NORMAL);
    __str194 = allocate([ 78, 69, 84, 76, 73, 78, 75, 95, 88, 70, 82, 77, 0 ], "i8", ALLOC_NORMAL);
    __str195 = allocate([ 78, 69, 84, 76, 73, 78, 75, 95, 73, 80, 54, 95, 70, 87, 0 ], "i8", ALLOC_NORMAL);
    __str196 = allocate([ 78, 69, 84, 76, 73, 78, 75, 95, 68, 78, 82, 84, 77, 83, 71, 0 ], "i8", ALLOC_NORMAL);
    __str197 = allocate([ 65, 70, 95, 82, 79, 85, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str198 = allocate([ 65, 70, 95, 65, 83, 72, 0 ], "i8", ALLOC_NORMAL);
    __str199 = allocate([ 65, 70, 95, 69, 67, 79, 78, 69, 84, 0 ], "i8", ALLOC_NORMAL);
    __str200 = allocate([ 65, 70, 95, 65, 84, 77, 83, 86, 67, 0 ], "i8", ALLOC_NORMAL);
    __str201 = allocate([ 65, 70, 95, 83, 78, 65, 0 ], "i8", ALLOC_NORMAL);
    __str202 = allocate([ 65, 70, 95, 73, 82, 68, 65, 0 ], "i8", ALLOC_NORMAL);
    __str203 = allocate([ 65, 70, 95, 80, 80, 80, 79, 88, 0 ], "i8", ALLOC_NORMAL);
    __str204 = allocate([ 65, 70, 95, 87, 65, 78, 80, 73, 80, 69, 0 ], "i8", ALLOC_NORMAL);
    __str205 = allocate([ 65, 70, 95, 76, 76, 67, 0 ], "i8", ALLOC_NORMAL);
    __str206 = allocate([ 65, 70, 95, 80, 65, 67, 75, 69, 84, 0 ], "i8", ALLOC_NORMAL);
    __str207 = allocate([ 80, 70, 95, 80, 65, 67, 75, 69, 84, 0 ], "i8", ALLOC_NORMAL);
    __str208 = allocate([ 80, 65, 67, 75, 69, 84, 95, 72, 79, 83, 84, 0 ], "i8", ALLOC_NORMAL);
    __str209 = allocate([ 80, 65, 67, 75, 69, 84, 95, 66, 82, 79, 65, 68, 67, 65, 83, 84, 0 ], "i8", ALLOC_NORMAL);
    __str210 = allocate([ 80, 65, 67, 75, 69, 84, 95, 77, 85, 76, 84, 73, 67, 65, 83, 84, 0 ], "i8", ALLOC_NORMAL);
    __str211 = allocate([ 80, 65, 67, 75, 69, 84, 95, 79, 84, 72, 69, 82, 72, 79, 83, 84, 0 ], "i8", ALLOC_NORMAL);
    __str212 = allocate([ 80, 65, 67, 75, 69, 84, 95, 79, 85, 84, 71, 79, 73, 78, 71, 0 ], "i8", ALLOC_NORMAL);
    __str213 = allocate([ 80, 65, 67, 75, 69, 84, 95, 76, 79, 79, 80, 66, 65, 67, 75, 0 ], "i8", ALLOC_NORMAL);
    __str214 = allocate([ 80, 65, 67, 75, 69, 84, 95, 70, 65, 83, 84, 82, 79, 85, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str215 = allocate([ 65, 70, 95, 84, 73, 80, 67, 0 ], "i8", ALLOC_NORMAL);
    __str216 = allocate([ 84, 73, 80, 67, 95, 65, 68, 68, 82, 95, 78, 65, 77, 69, 83, 69, 81, 0 ], "i8", ALLOC_NORMAL);
    __str217 = allocate([ 84, 73, 80, 67, 95, 65, 68, 68, 82, 95, 78, 65, 77, 69, 0 ], "i8", ALLOC_NORMAL);
    __str218 = allocate([ 84, 73, 80, 67, 95, 65, 68, 68, 82, 95, 73, 68, 0 ], "i8", ALLOC_NORMAL);
    __str219 = allocate([ 84, 73, 80, 67, 95, 90, 79, 78, 69, 95, 83, 67, 79, 80, 69, 0 ], "i8", ALLOC_NORMAL);
    __str220 = allocate([ 84, 73, 80, 67, 95, 67, 76, 85, 83, 84, 69, 82, 95, 83, 67, 79, 80, 69, 0 ], "i8", ALLOC_NORMAL);
    __str221 = allocate([ 84, 73, 80, 67, 95, 78, 79, 68, 69, 95, 83, 67, 79, 80, 69, 0 ], "i8", ALLOC_NORMAL);
    __str222 = allocate([ 83, 79, 76, 95, 84, 73, 80, 67, 0 ], "i8", ALLOC_NORMAL);
    __str223 = allocate([ 84, 73, 80, 67, 95, 73, 77, 80, 79, 82, 84, 65, 78, 67, 69, 0 ], "i8", ALLOC_NORMAL);
    __str224 = allocate([ 84, 73, 80, 67, 95, 83, 82, 67, 95, 68, 82, 79, 80, 80, 65, 66, 76, 69, 0 ], "i8", ALLOC_NORMAL);
    __str225 = allocate([ 84, 73, 80, 67, 95, 68, 69, 83, 84, 95, 68, 82, 79, 80, 80, 65, 66, 76, 69, 0 ], "i8", ALLOC_NORMAL);
    __str226 = allocate([ 84, 73, 80, 67, 95, 67, 79, 78, 78, 95, 84, 73, 77, 69, 79, 85, 84, 0 ], "i8", ALLOC_NORMAL);
    __str227 = allocate([ 84, 73, 80, 67, 95, 76, 79, 87, 95, 73, 77, 80, 79, 82, 84, 65, 78, 67, 69, 0 ], "i8", ALLOC_NORMAL);
    __str228 = allocate([ 84, 73, 80, 67, 95, 77, 69, 68, 73, 85, 77, 95, 73, 77, 80, 79, 82, 84, 65, 78, 67, 69, 0 ], "i8", ALLOC_NORMAL);
    __str229 = allocate([ 84, 73, 80, 67, 95, 72, 73, 71, 72, 95, 73, 77, 80, 79, 82, 84, 65, 78, 67, 69, 0 ], "i8", ALLOC_NORMAL);
    __str230 = allocate([ 84, 73, 80, 67, 95, 67, 82, 73, 84, 73, 67, 65, 76, 95, 73, 77, 80, 79, 82, 84, 65, 78, 67, 69, 0 ], "i8", ALLOC_NORMAL);
    __str231 = allocate([ 84, 73, 80, 67, 95, 83, 85, 66, 95, 80, 79, 82, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str232 = allocate([ 84, 73, 80, 67, 95, 83, 85, 66, 95, 83, 69, 82, 86, 73, 67, 69, 0 ], "i8", ALLOC_NORMAL);
    __str233 = allocate([ 84, 73, 80, 67, 95, 83, 85, 66, 95, 67, 65, 78, 67, 69, 76, 0 ], "i8", ALLOC_NORMAL);
    __str234 = allocate([ 84, 73, 80, 67, 95, 87, 65, 73, 84, 95, 70, 79, 82, 69, 86, 69, 82, 0 ], "i8", ALLOC_NORMAL);
    __str235 = allocate([ 84, 73, 80, 67, 95, 80, 85, 66, 76, 73, 83, 72, 69, 68, 0 ], "i8", ALLOC_NORMAL);
    __str236 = allocate([ 84, 73, 80, 67, 95, 87, 73, 84, 72, 68, 82, 65, 87, 78, 0 ], "i8", ALLOC_NORMAL);
    __str237 = allocate([ 84, 73, 80, 67, 95, 83, 85, 66, 83, 67, 82, 95, 84, 73, 77, 69, 79, 85, 84, 0 ], "i8", ALLOC_NORMAL);
    __str238 = allocate([ 84, 73, 80, 67, 95, 67, 70, 71, 95, 83, 82, 86, 0 ], "i8", ALLOC_NORMAL);
    __str239 = allocate([ 84, 73, 80, 67, 95, 84, 79, 80, 95, 83, 82, 86, 0 ], "i8", ALLOC_NORMAL);
    __str240 = allocate([ 83, 79, 67, 75, 95, 83, 84, 82, 69, 65, 77, 0 ], "i8", ALLOC_NORMAL);
    __str241 = allocate([ 83, 79, 67, 75, 95, 68, 71, 82, 65, 77, 0 ], "i8", ALLOC_NORMAL);
    __str242 = allocate([ 83, 79, 67, 75, 95, 82, 65, 87, 0 ], "i8", ALLOC_NORMAL);
    __str243 = allocate([ 83, 79, 67, 75, 95, 83, 69, 81, 80, 65, 67, 75, 69, 84, 0 ], "i8", ALLOC_NORMAL);
    __str244 = allocate([ 83, 79, 67, 75, 95, 82, 68, 77, 0 ], "i8", ALLOC_NORMAL);
    __str245 = allocate([ 83, 79, 95, 68, 69, 66, 85, 71, 0 ], "i8", ALLOC_NORMAL);
    __str246 = allocate([ 83, 79, 95, 65, 67, 67, 69, 80, 84, 67, 79, 78, 78, 0 ], "i8", ALLOC_NORMAL);
    __str247 = allocate([ 83, 79, 95, 82, 69, 85, 83, 69, 65, 68, 68, 82, 0 ], "i8", ALLOC_NORMAL);
    __str248 = allocate([ 83, 79, 95, 75, 69, 69, 80, 65, 76, 73, 86, 69, 0 ], "i8", ALLOC_NORMAL);
    __str249 = allocate([ 83, 79, 95, 68, 79, 78, 84, 82, 79, 85, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str250 = allocate([ 83, 79, 95, 66, 82, 79, 65, 68, 67, 65, 83, 84, 0 ], "i8", ALLOC_NORMAL);
    __str251 = allocate([ 83, 79, 95, 76, 73, 78, 71, 69, 82, 0 ], "i8", ALLOC_NORMAL);
    __str252 = allocate([ 83, 79, 95, 79, 79, 66, 73, 78, 76, 73, 78, 69, 0 ], "i8", ALLOC_NORMAL);
    __str253 = allocate([ 83, 79, 95, 83, 78, 68, 66, 85, 70, 0 ], "i8", ALLOC_NORMAL);
    __str254 = allocate([ 83, 79, 95, 82, 67, 86, 66, 85, 70, 0 ], "i8", ALLOC_NORMAL);
    __str255 = allocate([ 83, 79, 95, 83, 78, 68, 76, 79, 87, 65, 84, 0 ], "i8", ALLOC_NORMAL);
    __str256 = allocate([ 83, 79, 95, 82, 67, 86, 76, 79, 87, 65, 84, 0 ], "i8", ALLOC_NORMAL);
    __str257 = allocate([ 83, 79, 95, 83, 78, 68, 84, 73, 77, 69, 79, 0 ], "i8", ALLOC_NORMAL);
    __str258 = allocate([ 83, 79, 95, 82, 67, 86, 84, 73, 77, 69, 79, 0 ], "i8", ALLOC_NORMAL);
    __str259 = allocate([ 83, 79, 95, 69, 82, 82, 79, 82, 0 ], "i8", ALLOC_NORMAL);
    __str260 = allocate([ 83, 79, 95, 84, 89, 80, 69, 0 ], "i8", ALLOC_NORMAL);
    __str261 = allocate([ 83, 79, 77, 65, 88, 67, 79, 78, 78, 0 ], "i8", ALLOC_NORMAL);
    __str262 = allocate([ 77, 83, 71, 95, 79, 79, 66, 0 ], "i8", ALLOC_NORMAL);
    __str263 = allocate([ 77, 83, 71, 95, 80, 69, 69, 75, 0 ], "i8", ALLOC_NORMAL);
    __str264 = allocate([ 77, 83, 71, 95, 68, 79, 78, 84, 82, 79, 85, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str265 = allocate([ 77, 83, 71, 95, 68, 79, 78, 84, 87, 65, 73, 84, 0 ], "i8", ALLOC_NORMAL);
    __str266 = allocate([ 77, 83, 71, 95, 69, 79, 82, 0 ], "i8", ALLOC_NORMAL);
    __str267 = allocate([ 77, 83, 71, 95, 84, 82, 85, 78, 67, 0 ], "i8", ALLOC_NORMAL);
    __str268 = allocate([ 77, 83, 71, 95, 67, 84, 82, 85, 78, 67, 0 ], "i8", ALLOC_NORMAL);
    __str269 = allocate([ 77, 83, 71, 95, 87, 65, 73, 84, 65, 76, 76, 0 ], "i8", ALLOC_NORMAL);
    __str270 = allocate([ 83, 79, 76, 95, 83, 79, 67, 75, 69, 84, 0 ], "i8", ALLOC_NORMAL);
    __str271 = allocate([ 83, 79, 76, 95, 73, 80, 0 ], "i8", ALLOC_NORMAL);
    __str272 = allocate([ 83, 79, 76, 95, 84, 67, 80, 0 ], "i8", ALLOC_NORMAL);
    __str273 = allocate([ 83, 79, 76, 95, 85, 68, 80, 0 ], "i8", ALLOC_NORMAL);
    __str274 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 73, 80, 0 ], "i8", ALLOC_NORMAL);
    __str275 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 72, 79, 80, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str276 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 73, 67, 77, 80, 0 ], "i8", ALLOC_NORMAL);
    __str277 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 73, 71, 77, 80, 0 ], "i8", ALLOC_NORMAL);
    __str278 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 73, 80, 86, 54, 0 ], "i8", ALLOC_NORMAL);
    __str279 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 73, 80, 73, 80, 0 ], "i8", ALLOC_NORMAL);
    __str280 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 84, 67, 80, 0 ], "i8", ALLOC_NORMAL);
    __str281 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 69, 71, 80, 0 ], "i8", ALLOC_NORMAL);
    __str282 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 80, 85, 80, 0 ], "i8", ALLOC_NORMAL);
    __str283 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 85, 68, 80, 0 ], "i8", ALLOC_NORMAL);
    __str284 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 73, 68, 80, 0 ], "i8", ALLOC_NORMAL);
    __str285 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 84, 80, 0 ], "i8", ALLOC_NORMAL);
    __str286 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 82, 79, 85, 84, 73, 78, 71, 0 ], "i8", ALLOC_NORMAL);
    __str287 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 70, 82, 65, 71, 77, 69, 78, 84, 0 ], "i8", ALLOC_NORMAL);
    __str288 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 82, 83, 86, 80, 0 ], "i8", ALLOC_NORMAL);
    __str289 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 71, 82, 69, 0 ], "i8", ALLOC_NORMAL);
    __str290 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 69, 83, 80, 0 ], "i8", ALLOC_NORMAL);
    __str291 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 65, 72, 0 ], "i8", ALLOC_NORMAL);
    __str292 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 73, 67, 77, 80, 86, 54, 0 ], "i8", ALLOC_NORMAL);
    __str293 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 78, 79, 78, 69, 0 ], "i8", ALLOC_NORMAL);
    __str294 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 68, 83, 84, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str295 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 80, 73, 77, 0 ], "i8", ALLOC_NORMAL);
    __str296 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 82, 65, 87, 0 ], "i8", ALLOC_NORMAL);
    __str297 = allocate([ 73, 80, 80, 79, 82, 84, 95, 82, 69, 83, 69, 82, 86, 69, 68, 0 ], "i8", ALLOC_NORMAL);
    __str298 = allocate([ 73, 80, 80, 79, 82, 84, 95, 85, 83, 69, 82, 82, 69, 83, 69, 82, 86, 69, 68, 0 ], "i8", ALLOC_NORMAL);
    __str299 = allocate([ 73, 78, 65, 68, 68, 82, 95, 65, 78, 89, 0 ], "i8", ALLOC_NORMAL);
    __str300 = allocate([ 73, 78, 65, 68, 68, 82, 95, 66, 82, 79, 65, 68, 67, 65, 83, 84, 0 ], "i8", ALLOC_NORMAL);
    __str301 = allocate([ 73, 78, 65, 68, 68, 82, 95, 76, 79, 79, 80, 66, 65, 67, 75, 0 ], "i8", ALLOC_NORMAL);
    __str302 = allocate([ 73, 78, 65, 68, 68, 82, 95, 85, 78, 83, 80, 69, 67, 95, 71, 82, 79, 85, 80, 0 ], "i8", ALLOC_NORMAL);
    __str303 = allocate([ 73, 78, 65, 68, 68, 82, 95, 65, 76, 76, 72, 79, 83, 84, 83, 95, 71, 82, 79, 85, 80, 0 ], "i8", ALLOC_NORMAL);
    __str304 = allocate([ 73, 78, 65, 68, 68, 82, 95, 77, 65, 88, 95, 76, 79, 67, 65, 76, 95, 71, 82, 79, 85, 80, 0 ], "i8", ALLOC_NORMAL);
    __str305 = allocate([ 73, 78, 65, 68, 68, 82, 95, 78, 79, 78, 69, 0 ], "i8", ALLOC_NORMAL);
    __str306 = allocate([ 73, 80, 95, 79, 80, 84, 73, 79, 78, 83, 0 ], "i8", ALLOC_NORMAL);
    __str307 = allocate([ 73, 80, 95, 72, 68, 82, 73, 78, 67, 76, 0 ], "i8", ALLOC_NORMAL);
    __str308 = allocate([ 73, 80, 95, 84, 79, 83, 0 ], "i8", ALLOC_NORMAL);
    __str309 = allocate([ 73, 80, 95, 84, 84, 76, 0 ], "i8", ALLOC_NORMAL);
    __str310 = allocate([ 73, 80, 95, 82, 69, 67, 86, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str311 = allocate([ 73, 80, 95, 82, 69, 67, 86, 82, 69, 84, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str312 = allocate([ 73, 80, 95, 82, 69, 84, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str313 = allocate([ 73, 80, 95, 77, 85, 76, 84, 73, 67, 65, 83, 84, 95, 73, 70, 0 ], "i8", ALLOC_NORMAL);
    __str314 = allocate([ 73, 80, 95, 77, 85, 76, 84, 73, 67, 65, 83, 84, 95, 84, 84, 76, 0 ], "i8", ALLOC_NORMAL);
    __str315 = allocate([ 73, 80, 95, 77, 85, 76, 84, 73, 67, 65, 83, 84, 95, 76, 79, 79, 80, 0 ], "i8", ALLOC_NORMAL);
    __str316 = allocate([ 73, 80, 95, 65, 68, 68, 95, 77, 69, 77, 66, 69, 82, 83, 72, 73, 80, 0 ], "i8", ALLOC_NORMAL);
    __str317 = allocate([ 73, 80, 95, 68, 82, 79, 80, 95, 77, 69, 77, 66, 69, 82, 83, 72, 73, 80, 0 ], "i8", ALLOC_NORMAL);
    __str318 = allocate([ 73, 80, 95, 68, 69, 70, 65, 85, 76, 84, 95, 77, 85, 76, 84, 73, 67, 65, 83, 84, 95, 84, 84, 76, 0 ], "i8", ALLOC_NORMAL);
    __str319 = allocate([ 73, 80, 95, 68, 69, 70, 65, 85, 76, 84, 95, 77, 85, 76, 84, 73, 67, 65, 83, 84, 95, 76, 79, 79, 80, 0 ], "i8", ALLOC_NORMAL);
    __str320 = allocate([ 73, 80, 95, 77, 65, 88, 95, 77, 69, 77, 66, 69, 82, 83, 72, 73, 80, 83, 0 ], "i8", ALLOC_NORMAL);
    __str321 = allocate([ 73, 80, 86, 54, 95, 74, 79, 73, 78, 95, 71, 82, 79, 85, 80, 0 ], "i8", ALLOC_NORMAL);
    __str322 = allocate([ 73, 80, 86, 54, 95, 76, 69, 65, 86, 69, 95, 71, 82, 79, 85, 80, 0 ], "i8", ALLOC_NORMAL);
    __str323 = allocate([ 73, 80, 86, 54, 95, 77, 85, 76, 84, 73, 67, 65, 83, 84, 95, 72, 79, 80, 83, 0 ], "i8", ALLOC_NORMAL);
    __str324 = allocate([ 73, 80, 86, 54, 95, 77, 85, 76, 84, 73, 67, 65, 83, 84, 95, 73, 70, 0 ], "i8", ALLOC_NORMAL);
    __str325 = allocate([ 73, 80, 86, 54, 95, 77, 85, 76, 84, 73, 67, 65, 83, 84, 95, 76, 79, 79, 80, 0 ], "i8", ALLOC_NORMAL);
    __str326 = allocate([ 73, 80, 86, 54, 95, 85, 78, 73, 67, 65, 83, 84, 95, 72, 79, 80, 83, 0 ], "i8", ALLOC_NORMAL);
    __str327 = allocate([ 73, 80, 86, 54, 95, 86, 54, 79, 78, 76, 89, 0 ], "i8", ALLOC_NORMAL);
    __str328 = allocate([ 73, 80, 86, 54, 95, 67, 72, 69, 67, 75, 83, 85, 77, 0 ], "i8", ALLOC_NORMAL);
    __str329 = allocate([ 73, 80, 86, 54, 95, 68, 83, 84, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str330 = allocate([ 73, 80, 86, 54, 95, 72, 79, 80, 76, 73, 77, 73, 84, 0 ], "i8", ALLOC_NORMAL);
    __str331 = allocate([ 73, 80, 86, 54, 95, 72, 79, 80, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str332 = allocate([ 73, 80, 86, 54, 95, 78, 69, 88, 84, 72, 79, 80, 0 ], "i8", ALLOC_NORMAL);
    __str333 = allocate([ 73, 80, 86, 54, 95, 80, 75, 84, 73, 78, 70, 79, 0 ], "i8", ALLOC_NORMAL);
    __str334 = allocate([ 73, 80, 86, 54, 95, 82, 69, 67, 86, 68, 83, 84, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str335 = allocate([ 73, 80, 86, 54, 95, 82, 69, 67, 86, 72, 79, 80, 76, 73, 77, 73, 84, 0 ], "i8", ALLOC_NORMAL);
    __str336 = allocate([ 73, 80, 86, 54, 95, 82, 69, 67, 86, 72, 79, 80, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str337 = allocate([ 73, 80, 86, 54, 95, 82, 69, 67, 86, 80, 75, 84, 73, 78, 70, 79, 0 ], "i8", ALLOC_NORMAL);
    __str338 = allocate([ 73, 80, 86, 54, 95, 82, 69, 67, 86, 82, 84, 72, 68, 82, 0 ], "i8", ALLOC_NORMAL);
    __str339 = allocate([ 73, 80, 86, 54, 95, 82, 69, 67, 86, 84, 67, 76, 65, 83, 83, 0 ], "i8", ALLOC_NORMAL);
    __str340 = allocate([ 73, 80, 86, 54, 95, 82, 84, 72, 68, 82, 0 ], "i8", ALLOC_NORMAL);
    __str341 = allocate([ 73, 80, 86, 54, 95, 82, 84, 72, 68, 82, 68, 83, 84, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str342 = allocate([ 73, 80, 86, 54, 95, 82, 84, 72, 68, 82, 95, 84, 89, 80, 69, 95, 48, 0 ], "i8", ALLOC_NORMAL);
    __str343 = allocate([ 73, 80, 86, 54, 95, 84, 67, 76, 65, 83, 83, 0 ], "i8", ALLOC_NORMAL);
    __str344 = allocate([ 84, 67, 80, 95, 78, 79, 68, 69, 76, 65, 89, 0 ], "i8", ALLOC_NORMAL);
    __str345 = allocate([ 84, 67, 80, 95, 77, 65, 88, 83, 69, 71, 0 ], "i8", ALLOC_NORMAL);
    __str346 = allocate([ 84, 67, 80, 95, 67, 79, 82, 75, 0 ], "i8", ALLOC_NORMAL);
    __str347 = allocate([ 84, 67, 80, 95, 75, 69, 69, 80, 73, 68, 76, 69, 0 ], "i8", ALLOC_NORMAL);
    __str348 = allocate([ 84, 67, 80, 95, 75, 69, 69, 80, 73, 78, 84, 86, 76, 0 ], "i8", ALLOC_NORMAL);
    __str349 = allocate([ 84, 67, 80, 95, 75, 69, 69, 80, 67, 78, 84, 0 ], "i8", ALLOC_NORMAL);
    __str350 = allocate([ 84, 67, 80, 95, 83, 89, 78, 67, 78, 84, 0 ], "i8", ALLOC_NORMAL);
    __str351 = allocate([ 84, 67, 80, 95, 76, 73, 78, 71, 69, 82, 50, 0 ], "i8", ALLOC_NORMAL);
    __str352 = allocate([ 84, 67, 80, 95, 68, 69, 70, 69, 82, 95, 65, 67, 67, 69, 80, 84, 0 ], "i8", ALLOC_NORMAL);
    __str353 = allocate([ 84, 67, 80, 95, 87, 73, 78, 68, 79, 87, 95, 67, 76, 65, 77, 80, 0 ], "i8", ALLOC_NORMAL);
    __str354 = allocate([ 84, 67, 80, 95, 73, 78, 70, 79, 0 ], "i8", ALLOC_NORMAL);
    __str355 = allocate([ 84, 67, 80, 95, 81, 85, 73, 67, 75, 65, 67, 75, 0 ], "i8", ALLOC_NORMAL);
    __str356 = allocate([ 69, 65, 73, 95, 65, 68, 68, 82, 70, 65, 77, 73, 76, 89, 0 ], "i8", ALLOC_NORMAL);
    __str357 = allocate([ 69, 65, 73, 95, 65, 71, 65, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str358 = allocate([ 69, 65, 73, 95, 66, 65, 68, 70, 76, 65, 71, 83, 0 ], "i8", ALLOC_NORMAL);
    __str359 = allocate([ 69, 65, 73, 95, 70, 65, 73, 76, 0 ], "i8", ALLOC_NORMAL);
    __str360 = allocate([ 69, 65, 73, 95, 70, 65, 77, 73, 76, 89, 0 ], "i8", ALLOC_NORMAL);
    __str361 = allocate([ 69, 65, 73, 95, 77, 69, 77, 79, 82, 89, 0 ], "i8", ALLOC_NORMAL);
    __str362 = allocate([ 69, 65, 73, 95, 78, 79, 68, 65, 84, 65, 0 ], "i8", ALLOC_NORMAL);
    __str363 = allocate([ 69, 65, 73, 95, 78, 79, 78, 65, 77, 69, 0 ], "i8", ALLOC_NORMAL);
    __str364 = allocate([ 69, 65, 73, 95, 79, 86, 69, 82, 70, 76, 79, 87, 0 ], "i8", ALLOC_NORMAL);
    __str365 = allocate([ 69, 65, 73, 95, 83, 69, 82, 86, 73, 67, 69, 0 ], "i8", ALLOC_NORMAL);
    __str366 = allocate([ 69, 65, 73, 95, 83, 79, 67, 75, 84, 89, 80, 69, 0 ], "i8", ALLOC_NORMAL);
    __str367 = allocate([ 69, 65, 73, 95, 83, 89, 83, 84, 69, 77, 0 ], "i8", ALLOC_NORMAL);
    __str368 = allocate([ 65, 73, 95, 80, 65, 83, 83, 73, 86, 69, 0 ], "i8", ALLOC_NORMAL);
    __str369 = allocate([ 65, 73, 95, 67, 65, 78, 79, 78, 78, 65, 77, 69, 0 ], "i8", ALLOC_NORMAL);
    __str370 = allocate([ 65, 73, 95, 78, 85, 77, 69, 82, 73, 67, 72, 79, 83, 84, 0 ], "i8", ALLOC_NORMAL);
    __str371 = allocate([ 65, 73, 95, 78, 85, 77, 69, 82, 73, 67, 83, 69, 82, 86, 0 ], "i8", ALLOC_NORMAL);
    __str372 = allocate([ 65, 73, 95, 65, 76, 76, 0 ], "i8", ALLOC_NORMAL);
    __str373 = allocate([ 65, 73, 95, 65, 68, 68, 82, 67, 79, 78, 70, 73, 71, 0 ], "i8", ALLOC_NORMAL);
    __str374 = allocate([ 65, 73, 95, 86, 52, 77, 65, 80, 80, 69, 68, 0 ], "i8", ALLOC_NORMAL);
    __str375 = allocate([ 78, 73, 95, 77, 65, 88, 72, 79, 83, 84, 0 ], "i8", ALLOC_NORMAL);
    __str376 = allocate([ 78, 73, 95, 77, 65, 88, 83, 69, 82, 86, 0 ], "i8", ALLOC_NORMAL);
    __str377 = allocate([ 78, 73, 95, 78, 79, 70, 81, 68, 78, 0 ], "i8", ALLOC_NORMAL);
    __str378 = allocate([ 78, 73, 95, 78, 85, 77, 69, 82, 73, 67, 72, 79, 83, 84, 0 ], "i8", ALLOC_NORMAL);
    __str379 = allocate([ 78, 73, 95, 78, 65, 77, 69, 82, 69, 81, 68, 0 ], "i8", ALLOC_NORMAL);
    __str380 = allocate([ 78, 73, 95, 78, 85, 77, 69, 82, 73, 67, 83, 69, 82, 86, 0 ], "i8", ALLOC_NORMAL);
    __str381 = allocate([ 78, 73, 95, 68, 71, 82, 65, 77, 0 ], "i8", ALLOC_NORMAL);
    __str382 = allocate([ 83, 72, 85, 84, 95, 82, 68, 0 ], "i8", ALLOC_NORMAL);
    __str383 = allocate([ 83, 72, 85, 84, 95, 87, 82, 0 ], "i8", ALLOC_NORMAL);
    __str384 = allocate([ 83, 72, 85, 84, 95, 82, 68, 87, 82, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_kwlist_10803] = __str47;
    HEAP[_kwlist_10803 + 4] = __str48;
    HEAP[_kwlist_10803 + 8] = __str49;
    HEAP[_kwlist_10950] = __str47;
    HEAP[_kwlist_10950 + 4] = __str48;
    HEAP[_kwlist_10950 + 8] = __str49;
    HEAP[_sock_methods] = __str64;
    HEAP[_sock_methods + 4] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_sock_methods + 12] = _accept_doc;
    HEAP[_sock_methods + 16] = __str65;
    HEAP[_sock_methods + 20] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_sock_methods + 28] = _bind_doc;
    HEAP[_sock_methods + 32] = __str66;
    HEAP[_sock_methods + 36] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_sock_methods + 44] = _close_doc;
    HEAP[_sock_methods + 48] = __str67;
    HEAP[_sock_methods + 52] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_sock_methods + 60] = _connect_doc;
    HEAP[_sock_methods + 64] = __str68;
    HEAP[_sock_methods + 68] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_sock_methods + 76] = _connect_ex_doc;
    HEAP[_sock_methods + 80] = __str69;
    HEAP[_sock_methods + 84] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_sock_methods + 92] = _dup_doc;
    HEAP[_sock_methods + 96] = __str70;
    HEAP[_sock_methods + 100] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_sock_methods + 108] = _fileno_doc;
    HEAP[_sock_methods + 112] = __str71;
    HEAP[_sock_methods + 116] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_sock_methods + 124] = _getpeername_doc;
    HEAP[_sock_methods + 128] = __str72;
    HEAP[_sock_methods + 132] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_sock_methods + 140] = _getsockname_doc;
    HEAP[_sock_methods + 144] = __str73;
    HEAP[_sock_methods + 148] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_sock_methods + 156] = _getsockopt_doc;
    HEAP[_sock_methods + 160] = __str74;
    HEAP[_sock_methods + 164] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_sock_methods + 172] = _listen_doc;
    HEAP[_sock_methods + 176] = __str75;
    HEAP[_sock_methods + 180] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_sock_methods + 188] = _makefile_doc;
    HEAP[_sock_methods + 192] = __str76;
    HEAP[_sock_methods + 196] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_sock_methods + 204] = _recv_doc;
    HEAP[_sock_methods + 208] = __str77;
    HEAP[_sock_methods + 212] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_sock_methods + 220] = _recv_into_doc;
    HEAP[_sock_methods + 224] = __str78;
    HEAP[_sock_methods + 228] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_sock_methods + 236] = _recvfrom_doc;
    HEAP[_sock_methods + 240] = __str79;
    HEAP[_sock_methods + 244] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_sock_methods + 252] = _recvfrom_into_doc;
    HEAP[_sock_methods + 256] = __str80;
    HEAP[_sock_methods + 260] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_sock_methods + 268] = _send_doc;
    HEAP[_sock_methods + 272] = __str81;
    HEAP[_sock_methods + 276] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_sock_methods + 284] = _sendall_doc;
    HEAP[_sock_methods + 288] = __str82;
    HEAP[_sock_methods + 292] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_sock_methods + 300] = _sendto_doc;
    HEAP[_sock_methods + 304] = __str83;
    HEAP[_sock_methods + 308] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_sock_methods + 316] = _setblocking_doc;
    HEAP[_sock_methods + 320] = __str84;
    HEAP[_sock_methods + 324] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_sock_methods + 332] = _settimeout_doc;
    HEAP[_sock_methods + 336] = __str85;
    HEAP[_sock_methods + 340] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_sock_methods + 348] = _gettimeout_doc;
    HEAP[_sock_methods + 352] = __str86;
    HEAP[_sock_methods + 356] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_sock_methods + 364] = _setsockopt_doc;
    HEAP[_sock_methods + 368] = __str87;
    HEAP[_sock_methods + 372] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_sock_methods + 380] = _shutdown_doc;
    HEAP[_sock_memberlist] = __str88;
    HEAP[_sock_memberlist + 16] = __str89;
    HEAP[_sock_memberlist + 20] = __str90;
    HEAP[_sock_memberlist + 36] = __str91;
    HEAP[_sock_memberlist + 40] = __str92;
    HEAP[_sock_memberlist + 56] = __str93;
    HEAP[_sock_memberlist + 60] = __str94;
    HEAP[_sock_memberlist + 76] = __str95;
    HEAP[_keywords_11197] = __str88;
    HEAP[_keywords_11197 + 4] = __str90;
    HEAP[_keywords_11197 + 8] = __str92;
    HEAP[_sock_type + 12] = __str98;
    HEAP[_sock_type + 24] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_sock_type + 44] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_sock_type + 72] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_sock_type + 88] = _sock_doc;
    HEAP[_sock_type + 116] = _sock_methods;
    HEAP[_sock_type + 120] = _sock_memberlist;
    HEAP[_sock_type + 148] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_sock_type + 152] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_sock_type + 156] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_sock_type + 160] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_socket_methods] = __str139;
    HEAP[_socket_methods + 4] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_socket_methods + 12] = _gethostbyname_doc;
    HEAP[_socket_methods + 16] = __str140;
    HEAP[_socket_methods + 20] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_socket_methods + 28] = _ghbn_ex_doc;
    HEAP[_socket_methods + 32] = __str141;
    HEAP[_socket_methods + 36] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_socket_methods + 44] = _gethostbyaddr_doc;
    HEAP[_socket_methods + 48] = __str142;
    HEAP[_socket_methods + 52] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_socket_methods + 60] = _gethostname_doc;
    HEAP[_socket_methods + 64] = __str143;
    HEAP[_socket_methods + 68] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_socket_methods + 76] = _getservbyname_doc;
    HEAP[_socket_methods + 80] = __str144;
    HEAP[_socket_methods + 84] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_socket_methods + 92] = _getservbyport_doc;
    HEAP[_socket_methods + 96] = __str145;
    HEAP[_socket_methods + 100] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_socket_methods + 108] = _getprotobyname_doc;
    HEAP[_socket_methods + 112] = __str146;
    HEAP[_socket_methods + 116] = FUNCTION_TABLE_OFFSET + 82;
    HEAP[_socket_methods + 124] = _fromfd_doc;
    HEAP[_socket_methods + 128] = __str147;
    HEAP[_socket_methods + 132] = FUNCTION_TABLE_OFFSET + 84;
    HEAP[_socket_methods + 140] = _socketpair_doc;
    HEAP[_socket_methods + 144] = __str148;
    HEAP[_socket_methods + 148] = FUNCTION_TABLE_OFFSET + 86;
    HEAP[_socket_methods + 156] = _ntohs_doc;
    HEAP[_socket_methods + 160] = __str149;
    HEAP[_socket_methods + 164] = FUNCTION_TABLE_OFFSET + 88;
    HEAP[_socket_methods + 172] = _ntohl_doc;
    HEAP[_socket_methods + 176] = __str150;
    HEAP[_socket_methods + 180] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_socket_methods + 188] = _htons_doc;
    HEAP[_socket_methods + 192] = __str151;
    HEAP[_socket_methods + 196] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_socket_methods + 204] = _htonl_doc;
    HEAP[_socket_methods + 208] = __str152;
    HEAP[_socket_methods + 212] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_socket_methods + 220] = _inet_aton_doc;
    HEAP[_socket_methods + 224] = __str153;
    HEAP[_socket_methods + 228] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_socket_methods + 236] = _inet_ntoa_doc;
    HEAP[_socket_methods + 240] = __str154;
    HEAP[_socket_methods + 244] = FUNCTION_TABLE_OFFSET + 98;
    HEAP[_socket_methods + 252] = _inet_pton_doc;
    HEAP[_socket_methods + 256] = __str155;
    HEAP[_socket_methods + 260] = FUNCTION_TABLE_OFFSET + 100;
    HEAP[_socket_methods + 268] = _inet_ntop_doc;
    HEAP[_socket_methods + 272] = __str156;
    HEAP[_socket_methods + 276] = FUNCTION_TABLE_OFFSET + 102;
    HEAP[_socket_methods + 284] = _getaddrinfo_doc;
    HEAP[_socket_methods + 288] = __str157;
    HEAP[_socket_methods + 292] = FUNCTION_TABLE_OFFSET + 104;
    HEAP[_socket_methods + 300] = _getnameinfo_doc;
    HEAP[_socket_methods + 304] = __str158;
    HEAP[_socket_methods + 308] = FUNCTION_TABLE_OFFSET + 106;
    HEAP[_socket_methods + 316] = _getdefaulttimeout_doc;
    HEAP[_socket_methods + 320] = __str159;
    HEAP[_socket_methods + 324] = FUNCTION_TABLE_OFFSET + 108;
    HEAP[_socket_methods + 332] = _setdefaulttimeout_doc;
    HEAP[_PySocketModuleAPI] = _sock_type;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
