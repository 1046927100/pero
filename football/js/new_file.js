! function(e) {
	var t = {};

	function n(i) {
		if(t[i]) return t[i].exports;
		var o = t[i] = {
			i: i,
			l: !1,
			exports: {}
		};
		return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
	}
	n.m = e, n.c = t, n.d = function(e, t, i) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: i
		})
	}, n.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.t = function(e, t) {
		if(1 & t && (e = n(e)), 8 & t) return e;
		if(4 & t && "object" == typeof e && e && e.__esModule) return e;
		var i = Object.create(null);
		if(n.r(i), Object.defineProperty(i, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for(var o in e) n.d(i, o, function(t) {
				return e[t]
			}.bind(null, o));
		return i
	}, n.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "", n(n.s = 208)
}([function(e, t, n) {
	"use strict";
	t.__esModule = !0, t.default = function(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
}, function(e, t, n) {
	"use strict";
	t.__esModule = !0;
	var i, o = (i = n(85)) && i.__esModule ? i : {
		default: i
	};
	t.default = function() {
		function e(e, t) {
			for(var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, o.default)(e, i.key, i)
			}
		}
		return function(t, n, i) {
			return n && e(t.prototype, n), i && e(t, i), t
		}
	}()
}, function(e, t, n) {
	e.exports = {
		default: n(106),
		__esModule: !0
	}
}, function(e, t, n) {
	"use strict";
	t.__esModule = !0;
	var i, o = (i = n(35)) && i.__esModule ? i : {
		default: i
	};
	t.default = function(e, t) {
		if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" !== (void 0 === t ? "undefined" : (0, o.default)(t)) && "function" != typeof t ? e : t
	}
}, function(e, t, n) {
	"use strict";
	t.__esModule = !0;
	var i = r(n(127)),
		o = r(n(49)),
		a = r(n(35));

	function r(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.default = function(e, t) {
		if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, a.default)(t)));
		e.prototype = (0, o.default)(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (i.default ? (0, i.default)(e, t) : e.__proto__ = t)
	}
}, function(e, t) {
	var n = e.exports = {
		version: "2.6.9"
	};
	"number" == typeof __e && (__e = n)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.commonFun = t.H5Common = void 0;
	var i = n(31);
	t.H5Common = {
		version: "2.0.3",
		defaultCfg: {
			videoType: "vod",
			ctx: "",
			poster: "",
			skin: {
				controlBar: !0
			},
			adConfig: {
				pos: 1
			}
		},
		$: null,
		isMobile: 1,
		playPath: location.origin + "/playurl/v1/play/playurlh5",
		recoPath: "/recommend/search/v1/recommend-related-long/",
		playData: null,
		callCode: {
			play: ["2000", "2001"],
			video: ["3000", "3001", "3002", "3003", "3004"]
		},
		ow: 750,
		oh: 1024,
		container: null,
		mobileRegExp: /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|WebOS|Windows Phone)/i,
		pay: 1,
		clientID: "79acd784-cbbb-4cae-8778-8723e001164b",
		userData: null,
		memberData: null,
		timestamp: 0,
		useTicket: !1,
		heartDuration: 15e3,
		skinCfg: null,
		pcClientUrl: "",
		startBtnVipTip: null,
		startBtnTip: null,
		startTip: "",
		hasClient: !1,
		playUrl: "",
		product: null,
		MIGU_MOVIE: "miguMovie",
		MIGU_VIDEO: "miguVideo"
	}, t.commonFun = {
		isPlayAdv: function() {
			return !!i.advertInfo.urls
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = u(n(35)),
		o = u(n(90)),
		a = u(n(0)),
		r = u(n(1)),
		s = u(n(33)),
		l = n(6);

	function u(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var d = function() {
		function e() {
			(0, a.default)(this, e)
		}
		return(0, r.default)(e, null, [{
			key: "debug",
			value: function() {
				for(var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
				var o = [].slice.call(n),
					a = e.trace(o);
				e.m_log += a + "***鏃ュ織鍒嗗壊***\r\n", "debug" == s.default.getQueryString("player") && (l.H5Common.isMobile, console.log(a))
			}
		}, {
			key: "error",
			value: function() {
				for(var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
				var o = [].slice.call(n),
					a = e.trace(o);
				e.m_log += a + "***鏃ュ織鍒嗗壊***\r\n", console.error(n)
			}
		}, {
			key: "trace",
			value: function(t) {
				var n = "",
					a = null,
					r = !0,
					l = !1,
					u = void 0;
				try {
					for(var d, c = (0, o.default)(t); !(r = (d = c.next()).done); r = !0) {
						var p = d.value;
						"object" == (void 0 === p ? "undefined" : (0, i.default)(p)) ? a = p: n += p
					}
				} catch(e) {
					l = !0, u = e
				} finally {
					try {
						!r && c.return && c.return()
					} finally {
						if(l) throw u
					}
				}
				return n = s.default.getLocalTime((new Date).valueOf()) + "  ===>>>  " + n, a && (n += e.mix(a)), n
			}
		}, {
			key: "mix",
			value: function(t) {
				var n, o = "";
				for(var a in t) try {
					"object" == (0, i.default)(t[a]) ? o += '"' + a + '":' + (n = (null != t[a].length ? "[,]" : "{,}").split(","))[0] + e.mix(t[a]) + n[1] + ",\r": o += '"' + a + '":' + t[a] + ","
				} catch(e) {
					continue
				}
				return o
			}
		}]), e
	}();
	d.m_log = "", t.default = d
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = n(63),
		o = n(86),
		a = n(87),
		r = n(140),
		s = n(141),
		l = n(88),
		u = n(142),
		d = n(64),
		c = n(89),
		p = n(42),
		f = n(143),
		h = {
			View: i.View,
			Model: o.Model,
			Controller: a.Controller,
			SimpleCommand: r.SimpleCommand,
			MacroCommand: s.MacroCommand,
			Facade: l.Facade,
			Mediator: u.Mediator,
			Observer: d.Observer,
			Notification: c.Notification,
			Notifier: p.Notifier,
			Proxy: f.Proxy
		};
	t.default = h
}, , function(e, t) {
	var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
	"number" == typeof __g && (__g = n)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = t.playStatus = {
			PLAYING: "playing",
			PAUSE: "pause",
			STOP: "stop",
			END: "end",
			SEEK: "seek"
		},
		o = t.playType = {
			VOD: "vod",
			LIVE: "live",
			HUIKAN: "huikan"
		};
	t.rateTypeList = {
		1: {
			txt1: "鏍囨竻",
			txt2: "270p"
		},
		2: {
			txt1: "楂樻竻",
			txt2: "480p"
		},
		3: {
			txt1: "瓒呮竻",
			txt2: "720p"
		},
		4: {
			txt1: "钃濆厜",
			txt2: "1080p"
		}
	}, t.playerInfo = {
		cid: "",
		posi: 0,
		duration: 2597,
		start: !1,
		end: !1,
		isFullScreen: !1,
		status: i.PAUSE,
		volume: 50,
		url: "",
		rateType: "0",
		timestamp: 0,
		playType: o.VOD,
		realDuration: 0,
		rateTypeList: "2,1,3,4",
		poster: "",
		next: !1,
		errorObj: {
			cid: "",
			errorID: -1
		},
		shikantime: 360,
		shikan: !1,
		sTime: 0,
		eTime: 0,
		playName: "",
		buffered: 0,
		loop: !1,
		playbackRate: 1,
		shieldStatus: 0,
		autoplay: !0,
		switchVideo: !1,
		programType: "OTHER",
		urlType: "normal",
		el: ".m-player"
	}
}, , function(e, t, n) {
	var i = n(52)("wks"),
		o = n(44),
		a = n(10).Symbol,
		r = "function" == typeof a;
	(e.exports = function(e) {
		return i[e] || (i[e] = r && a[e] || (r ? a : o)("Symbol." + e))
	}).store = i
}, function(e, t, n) {
	var i = n(10),
		o = n(5),
		a = n(38),
		r = n(26),
		s = n(25),
		l = function(e, t, n) {
			var u, d, c, p = e & l.F,
				f = e & l.G,
				h = e & l.S,
				v = e & l.P,
				y = e & l.B,
				m = e & l.W,
				E = f ? o : o[t] || (o[t] = {}),
				I = E.prototype,
				_ = f ? i : h ? i[t] : (i[t] || {}).prototype;
			for(u in f && (n = t), n)(d = !p && _ && void 0 !== _[u]) && s(E, u) || (c = d ? _[u] : n[u], E[u] = f && "function" != typeof _[u] ? n[u] : y && d ? a(c, i) : m && _[u] == c ? function(e) {
				var t = function(t, n, i) {
					if(this instanceof e) {
						switch(arguments.length) {
							case 0:
								return new e;
							case 1:
								return new e(t);
							case 2:
								return new e(t, n)
						}
						return new e(t, n, i)
					}
					return e.apply(this, arguments)
				};
				return t.prototype = e.prototype, t
			}(c) : v && "function" == typeof c ? a(Function.call, c) : c, v && ((E.virtual || (E.virtual = {}))[u] = c, e & l.R && I && !I[u] && r(I, u, c)))
		};
	l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = s(n(68)),
		o = s(n(0)),
		a = s(n(1)),
		r = n(6);

	function s(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var l = function() {
		function e() {
			(0, o.default)(this, e)
		}
		return(0, a.default)(e, null, [{
			key: "postMessage",
			value: function(e, t) {
				window.parent.postMessage((0, i.default)({
					type: e,
					data: t,
					contonairId: r.H5Common.container
				}), "*")
			}
		}]), e
	}();
	t.default = l
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.playerStatusType = t.ExternalEvent = void 0;
	var i, o, a = (i = n(102)) && i.__esModule ? i : {
		default: i
	};
	t.ExternalEvent = (o = {
		VIDEO_STATUS: "video_status",
		VIDEO_FULLSCREEN: "video_screen",
		VIDEO_BIP: "video_bip",
		VIDEO_ERROR: "video_error",
		VIDEO_NEXT: "video_next",
		VIDEO_PAGE_ZOOM: "video_page_zoom",
		VIDEO_LOOP: "video_loop"
	}, (0, a.default)(o, "VIDEO_LOOP", "video_loop"), (0, a.default)(o, "VIDEO_OPEN_VIP", "video_open_vip"), (0, a.default)(o, "VIDEO_WATCH_WHOLE", "video_watch_whole"), (0, a.default)(o, "VIDEO_BUY_VIP", "video_buy_vip"), (0, a.default)(o, "VIDEO_LOGIN", "video_login"), (0, a.default)(o, "VIDEO_PLAYURL_CODE", "video_playurl_code"), (0, a.default)(o, "VIDEO_JUMP_ADV", "video_jump_adv"), o), t.playerStatusType = {
		READY: "ready",
		VIDEO_READY: "video_ready",
		VIDEO_PLAYING: "playing",
		VIDEO_PAUSE: "paused",
		VIDEO_STOP: "stop",
		VIDEO_SEEK: "seek",
		VIDEO_END: "end",
		VIDEO_SHIKAN_END: "shikan_end"
	}
}, function(e, t, n) {
	var i = n(24);
	e.exports = function(e) {
		if(!i(e)) throw TypeError(e + " is not an object!");
		return e
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.H5Notification = {
		START_UP: "start_up",
		WEB_PLAY: "web_play",
		PLAY_SUCCESS: "play_success",
		ADV_EVENT: "adv_event",
		ADS_STATUS: "ads_status",
		SKIN_START_PLAY: "start_play",
		VIDEO_SHOW_START_PLAY_BTN: "start_playbtn",
		EXTERNAL_NOTICATION: "external_notification",
		SKIN_CHANGE_PLAY_STATUS: "change_play_status",
		VIDEO_STATE: "video_state",
		SKIN_SEEK: "skin_seek",
		VIDEO_UPDATE: "video_update",
		VIDEO_WAITING: "video_waiting",
		SKIN_FULLSCREEN: "skin_fullscreen",
		PLAY_FAILED: "play_failed",
		VIDEO_NEXT: "video_next",
		PLAY_ERROR: "play_error",
		VIDEO_ERROR: "video_error",
		VIDEO_HIDE_UI: "video_hide_ui",
		SKIN_CHANGE_RATETYPE: "skin_change_ratetype",
		SKIN_CHANGE_SPEED: "skin_change_speed",
		SKIN_CHANGE_VOLUME: "skin_change_volume",
		VIDEO_SHOW_SPEED_UI: "video_show_spped_ui",
		VIDEO_SET_MUTE: "video_set_mute",
		RECO_SUCCESS: "reco_success",
		VIDEO_SHOW_RECO: "vide_show_reco",
		SKIN_REPLAY: "skin_replay",
		SKIN_MUTED: "skin_muted",
		VIDEO_RESET_UI: "video_reset_ui"
	}, t.ExternalApiType = {
		VIDEO_PLAY: "video_play",
		VIDEO_PAUSE: "video_pause",
		VIDEO_STOP: "video_stop",
		VIDEO_SEEK: "video_seek",
		VIDEO_SWITCH: "video_switch",
		VIDEO_VOLUME: "video_volume",
		VIDEO_USERINFO: "user_info",
		VIDEO_FULLSCREEN: "video_fullscreen",
		VIDEO_ERROR: "video_error",
		VIDEO_SHIELD_STATUS: "video_shieldStatus",
		VIDEO_AUTO_PLAY: "video_autoplay",
		VIDEO_PAGE_ZOOM: "video_page_zoom",
		VIDEO_MINI_PLAYER: "video_mini_player",
		SKIN_SHOW_ERROR_UI: "skin_show_error_ui",
		ADVERT_STATUS: "adv_status",
		ADV_DATA_SUCCESS: "adv_data_success",
		ADV_NEXT: "adv_next",
		ADV_END: "adv_end",
		ADV_ERROR: "adv_error"
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.H5ComponentEvent = {
		WEB_PLAY: "web_play",
		ADS_STATUS: "ads_status",
		ADS_EVENT: "ads_event",
		CHANGE_PLAY_STATUS: "change_play_status",
		START_PLAY: "start_play",
		VIDEO_STATE: "video_state",
		SEEK: "seek",
		VIDEO_WAITING: "video_waiting",
		FULLSCREEN: "screen",
		PLAY_ERROR: "play_error",
		VIDEO_ERROR: "video_error",
		HIDE_UI: "hide_ui",
		VIDEO_BIP: "video_bip",
		PAGE_ZOOM: "page_zoom",
		BARRAGE: "barrage",
		NEXT: "next",
		LOOP: "loop",
		CHANGE_RATETYPE: "change_ratetype",
		CHANGE_SPEED: "change_speed",
		CHANGE_VOLUME: "change_volume",
		SHOW_SPEED_UI: "show_speed_ui",
		OPEN_VIP: "open_vip",
		SET_MUTE: "set_mute",
		VIDEO_SHOW_RECO: "show_reo",
		REPLAY: "replay",
		MUTED: "muted",
		HLS_READY: "hls_ready",
		VIDEO_READY: "video_ready",
		VIDEO_UPDATE: "video_update"
	}
}, function(e, t, n) {
	e.exports = !n(30)(function() {
		return 7 != Object.defineProperty({}, "a", {
			get: function() {
				return 7
			}
		}).a
	})
}, , , function(e, t, n) {
	var i = n(17),
		o = n(75),
		a = n(54),
		r = Object.defineProperty;
	t.f = n(20) ? Object.defineProperty : function(e, t, n) {
		if(i(e), t = a(t, !0), i(n), o) try {
			return r(e, t, n)
		} catch(e) {}
		if("get" in n || "set" in n) throw TypeError("Accessors not supported!");
		return "value" in n && (e[t] = n.value), e
	}
}, function(e, t) {
	e.exports = function(e) {
		return "object" == typeof e ? null !== e : "function" == typeof e
	}
}, function(e, t) {
	var n = {}.hasOwnProperty;
	e.exports = function(e, t) {
		return n.call(e, t)
	}
}, function(e, t, n) {
	var i = n(23),
		o = n(46);
	e.exports = n(20) ? function(e, t, n) {
		return i.f(e, t, o(1, n))
	} : function(e, t, n) {
		return e[t] = n, e
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.userInfo = {
		name: "",
		isVip: !1,
		token: "",
		userId: "",
		clientId: ""
	}
}, function(e, t, n) {
	var i = n(79),
		o = n(50);
	e.exports = function(e) {
		return i(o(e))
	}
}, , function(e, t) {
	e.exports = function(e) {
		try {
			return !!e()
		} catch(e) {
			return !0
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.advertInfo = {
		status: "none",
		data: null,
		urls: null
	}, t.advertStatus = {
		NONE: "none",
		REQUEST_DATA: "advert_request_data",
		READY: "advert_ready",
		START: "advert_start",
		END: "advert_end",
		ERROR: "advert_error",
		TIME_OUT: "time_out",
		OVER: "advert_over"
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.$ = window.$ || window.jQuery || window.Zepto, t.set$ = function() {
		t.$ = window.$ || window.jQuery || window.Zepto
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = d(n(68)),
		o = d(n(43)),
		a = d(n(49)),
		r = d(n(0)),
		s = d(n(1)),
		l = n(6),
		u = d(n(97));

	function d(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var c = function() {
		function e() {
			(0, r.default)(this, e)
		}
		return(0, s.default)(e, null, [{
			key: "isMobile",
			value: function() {
				return 1
			}
		}, {
			key: "getLocalTime",
			value: function(e) {
				return new Date(parseInt(e)).toLocaleString().replace(/骞磡鏈�/g, "-").replace(/鏃�/g, " ")
			}
		}, {
			key: "getQueryString",
			value: function(e) {
				var t = void 0,
					n = new RegExp("(^|\\?|&|#)" + e + "=([^&#]*)(&|#|$)", "i");
				try {
					t = top.location.href.match(n)
				} catch(e) {
					t = window.location.href.match(n)
				}
				return null != t ? decodeURIComponent(t[2]) : null
			}
		}, {
			key: "throttle",
			value: function(e, t, n) {
				var i = void 0,
					o = void 0;
				return n || (n = this), t || (t = 500),
					function() {
						var a = arguments,
							r = +new Date;
						i && r < i + t ? (clearTimeout(o), o = setTimeout(function() {
							i = r, e.apply(n, a)
						}, t)) : (i = r, e.apply(n, a))
					}
			}
		}, {
			key: "formatDate",
			value: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY骞碝M鏈圖D鏃� hh:mm:ss";
				try {
					e || (e = (new Date).getT);
					var n = function(e, t) {
							return(e / Math.pow(10, t)).toFixed(t).substr(2)
						},
						i = Math.floor(e.getTime() / 1e3),
						o = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "鏃�", "涓€", "浜�", "涓�", "鍥�", "浜�", "鍏�"];
					return "mm:ss" == t || "mm鏃秙s鍒�" == t ? t.replace(/mm|ss/g, function(e) {
						switch(e) {
							case "mm":
								return(t = Math.floor(i / 60) + "").length < 2 ? "0" + t : t;
							case "ss":
								return n(i % 60, 2);
							default:
								return "00"
						}
						var t
					}) : t.replace(/YYYY|YY|MM|DD|hh|mm|ss|鏄熸湡|鍛▅www|week/g, function(t) {
						switch(t) {
							case "YYYY":
								return e.getFullYear().toString();
							case "YY":
								return(e.getFullYear() + "").slice(2);
							case "MM":
								return n(e.getMonth() + 1, 2);
							case "DD":
								return n(e.getDate(), 2);
							case "hh":
								return n(e.getHours(), 2);
							case "mm":
								return n(e.getMinutes(), 2);
							case "ss":
								return n(e.getSeconds(), 2);
							case "鏄熸湡":
								return "鏄熸湡" + o[e.getDay() + 7];
							case "鍛�":
								return "鍛�" + o[e.getDay() + 7];
							case "week":
								return o[e.getDay()];
							case "www":
								return o[e.getDay()].slice(0, 3);
							default:
								return "00"
						}
					})
				} catch(e) {
					return "00"
				}
			}
		}, {
			key: "execEvent",
			value: function(e, t) {
				var n = void 0;
				if("mouseover" == t.type ? n = t.fromElement || t.relatedTarget : "mouseout" == t.type && (n = t.toElement || t.relatedTarget), !n || !e) return !1;
				if(document.all) {
					if(!e.contains(n)) return !0
				} else {
					var i = e.compareDocumentPosition(n);
					if(0 != i && 20 != i) return !0
				}
				return !1
			}
		}, {
			key: "isMyChildren",
			value: function(e, t) {
				if(document.all) {
					if(e.contains(t)) return !0
				} else {
					var n = e.compareDocumentPosition(t);
					if(0 == n || 20 == n) return !0
				}
				return !1
			}
		}, {
			key: "remeberPosi",
			value: function(e, t) {
				var n = window.localStorage;
				if(!n) return 0;
				var r = n.getItem("playerPosi"),
					s = (0, a.default)(null);
				if(r) try {
					s = JSON.parse(r)
				} catch(e) {}
				if(void 0 === t) return s && s[e] ? s[e] : 0;
				if(t > 0) {
					if(s) {
						if((0, o.default)(s).length > 30) {
							var l = (new Date).getTime(),
								u = -1;
							for(var d in s) l <= s[d].time && (l = s[d].time, u = d);
							s[u] = null, delete s[u]
						}
						s[e] = {
							posi: t,
							time: (new Date).getTime()
						}
					} else(s = {})[e] = {
						posi: t,
						time: (new Date).getTime()
					};
					n.setItem("playerPosi", (0, i.default)(s))
				} else s && s[e] && (s[e] = null, delete s[e], n.setItem("playerPosi", (0, i.default)(s)));
				return t
			}
		}, {
			key: "remeberItem",
			value: function(e, t) {
				var n = window.localStorage;
				if(!n) return null;
				var i = n.getItem(e);
				return void 0 === t ? i || null : (n.setItem(e, t), t)
			}
		}, {
			key: "remeberRT",
			value: function(e) {
				return p("playerRT", e)
			}
		}, {
			key: "remeberSpeed",
			value: function(e) {
				return p("playerSpeed", e)
			}
		}, {
			key: "goToApp",
			value: function(e) {
				l.H5Common.product && l.H5Common.product.name == l.H5Common.MIGU_MOVIE ? (e = l.H5Common.product.action || {}, window.mgmovie.jsbridge && window.mgmovie.jsbridge.goToApp && window.mgmovie.jsbridge.goToApp(e), window.mgmovie.jsbridge && window.mgmovie.jsbridge.pwSDK && u.default.copy(window.mgmovie.jsbridge.pwSDK.getClipboardJSON(window.mgmovie.jsbridge.schemaLink))) : window.MGBridge && (window.MGBridge.pwInit && window.MGBridge.pwInit(e), window.MGBridge.pwSDK && u.default.copy(window.MGBridge.pwSDK.getClipboardJSON(window.MGBridge.schemaLink)))
			}
		}, {
			key: "isInApp",
			value: function() {
				l.H5Common.product && l.H5Common.product.name == l.H5Common.MIGU_MOVIE ? window.MGBridge && window.MGBridge.isInWebview && window.MGBridge.isInWebview() : window.mgmovie.jsbridge && window.mgmovie.jsbridge.isInWebview && window.mgmovie.jsbridge.isInWebview()
			}
		}]), e
	}();

	function p(e, t) {
		var n = window.localStorage;
		if(!n) return null;
		var i = n.getItem(e);
		return void 0 === t ? i || null : (n.setItem(e, t), t)
	}
	t.default = c
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = l(n(2)),
		o = l(n(0)),
		a = l(n(1)),
		r = l(n(3)),
		s = l(n(4));

	function l(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var u = function(e) {
		function t(e) {
			(0, o.default)(this, t);
			var n = (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).call(this));
			return n.target = e, n
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "dispatchEvent",
			value: function(e) {
				this.trigger(e, arguments.length <= 1 ? void 0 : arguments[1])
			}
		}, {
			key: "addEventListener",
			value: function(e, t, n) {
				this.on(e, t, n)
			}
		}, {
			key: "removeEventListener",
			value: function(e, t, n) {
				this.off(e, t, n)
			}
		}]), t
	}(n(172).Events);
	t.default = u
}, function(e, t, n) {
	"use strict";
	t.__esModule = !0;
	var i = r(n(108)),
		o = r(n(118)),
		a = "function" == typeof o.default && "symbol" == typeof i.default ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : typeof e
		};

	function r(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.default = "function" == typeof o.default && "symbol" === a(i.default) ? function(e) {
		return void 0 === e ? "undefined" : a(e)
	} : function(e) {
		return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : void 0 === e ? "undefined" : a(e)
	}
}, function(e, t, n) {
	var i = n(50);
	e.exports = function(e) {
		return Object(i(e))
	}
}, function(e, t) {
	e.exports = !0
}, function(e, t, n) {
	var i = n(45);
	e.exports = function(e, t, n) {
		if(i(e), void 0 === t) return e;
		switch(n) {
			case 1:
				return function(n) {
					return e.call(t, n)
				};
			case 2:
				return function(n, i) {
					return e.call(t, n, i)
				};
			case 3:
				return function(n, i, o) {
					return e.call(t, n, i, o)
				}
		}
		return function() {
			return e.apply(t, arguments)
		}
	}
}, function(e, t) {
	e.exports = {}
}, function(e, t, n) {
	var i = n(78),
		o = n(58);
	e.exports = Object.keys || function(e) {
		return i(e, o)
	}
}, function(e, t) {
	var n = {}.toString;
	e.exports = function(e) {
		return n.call(e).slice(8, -1)
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Notifier = void 0;
	var i = r(n(0)),
		o = r(n(1)),
		a = n(88);

	function r(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}(t.Notifier = function() {
		function e() {
			(0, i.default)(this, e), this.multitonKey = null
		}
		return(0, o.default)(e, [{
			key: "sendNotification",
			value: function(e, t, n) {
				this.facade && this.facade.sendNotification(e, t, n)
			}
		}, {
			key: "initializeNotifier",
			value: function(e) {
				this.multitonKey = String(e)
			}
		}, {
			key: "facade",
			get: function() {
				if(null == this.multitonKey) throw new Error(e.MULTITON_MSG);
				return a.Facade.getInstance(this.multitonKey)
			}
		}]), e
	}()).MULTITON_MSG = "multitonKey for this Notifier not yet initialized!"
}, function(e, t, n) {
	e.exports = {
		default: n(150),
		__esModule: !0
	}
}, function(e, t) {
	var n = 0,
		i = Math.random();
	e.exports = function(e) {
		return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
	}
}, function(e, t) {
	e.exports = function(e) {
		if("function" != typeof e) throw TypeError(e + " is not a function!");
		return e
	}
}, function(e, t) {
	e.exports = function(e, t) {
		return {
			enumerable: !(1 & e),
			configurable: !(2 & e),
			writable: !(4 & e),
			value: t
		}
	}
}, function(e, t, n) {
	var i = n(23).f,
		o = n(25),
		a = n(13)("toStringTag");
	e.exports = function(e, t, n) {
		e && !o(e = n ? e : e.prototype, a) && i(e, a, {
			configurable: !0,
			value: t
		})
	}
}, function(e, t) {
	t.f = {}.propertyIsEnumerable
}, function(e, t, n) {
	e.exports = {
		default: n(131),
		__esModule: !0
	}
}, function(e, t) {
	e.exports = function(e) {
		if(null == e) throw TypeError("Can't call method on  " + e);
		return e
	}
}, function(e, t, n) {
	var i = n(52)("keys"),
		o = n(44);
	e.exports = function(e) {
		return i[e] || (i[e] = o(e))
	}
}, function(e, t, n) {
	var i = n(5),
		o = n(10),
		a = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
	(e.exports = function(e, t) {
		return a[e] || (a[e] = void 0 !== t ? t : {})
	})("versions", []).push({
		version: i.version,
		mode: n(37) ? "pure" : "global",
		copyright: "漏 2019 Denis Pushkarev (zloirock.ru)"
	})
}, function(e, t, n) {
	var i = n(24),
		o = n(10).document,
		a = i(o) && i(o.createElement);
	e.exports = function(e) {
		return a ? o.createElement(e) : {}
	}
}, function(e, t, n) {
	var i = n(24);
	e.exports = function(e, t) {
		if(!i(e)) return e;
		var n, o;
		if(t && "function" == typeof(n = e.toString) && !i(o = n.call(e))) return o;
		if("function" == typeof(n = e.valueOf) && !i(o = n.call(e))) return o;
		if(!t && "function" == typeof(n = e.toString) && !i(o = n.call(e))) return o;
		throw TypeError("Can't convert object to primitive value")
	}
}, function(e, t, n) {
	"use strict";
	var i = n(110)(!0);
	n(76)(String, "String", function(e) {
		this._t = String(e), this._i = 0
	}, function() {
		var e, t = this._t,
			n = this._i;
		return n >= t.length ? {
			value: void 0,
			done: !0
		} : (e = i(t, n), this._i += e.length, {
			value: e,
			done: !1
		})
	})
}, function(e, t) {
	var n = Math.ceil,
		i = Math.floor;
	e.exports = function(e) {
		return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
	}
}, function(e, t, n) {
	var i = n(17),
		o = n(112),
		a = n(58),
		r = n(51)("IE_PROTO"),
		s = function() {},
		l = function() {
			var e, t = n(53)("iframe"),
				i = a.length;
			for(t.style.display = "none", n(81).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; i--;) delete l.prototype[a[i]];
			return l()
		};
	e.exports = Object.create || function(e, t) {
		var n;
		return null !== e ? (s.prototype = i(e), n = new s, s.prototype = null, n[r] = e) : n = l(), void 0 === t ? n : o(n, t)
	}
}, function(e, t) {
	e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, n) {
	n(115);
	for(var i = n(10), o = n(26), a = n(39), r = n(13)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) {
		var u = s[l],
			d = i[u],
			c = d && d.prototype;
		c && !c[r] && o(c, r, u), a[u] = a.Array
	}
}, function(e, t, n) {
	t.f = n(13)
}, function(e, t, n) {
	var i = n(10),
		o = n(5),
		a = n(37),
		r = n(60),
		s = n(23).f;
	e.exports = function(e) {
		var t = o.Symbol || (o.Symbol = a ? {} : i.Symbol || {});
		"_" == e.charAt(0) || e in t || s(t, e, {
			value: r.f(e)
		})
	}
}, function(e, t) {
	t.f = Object.getOwnPropertySymbols
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.View = void 0;
	var i = r(n(0)),
		o = r(n(1)),
		a = n(64);

	function r(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var s = t.View = function() {
		function e(t) {
			if((0, i.default)(this, e), this.mediatorMap = null, this.observerMap = null, this.multitonKey = null, null != e.instanceMap[t]) throw new Error(e.MULTITON_MSG);
			this.multitonKey = t, e.instanceMap[this.multitonKey] = this, this.mediatorMap = [], this.observerMap = [], this.initializeView()
		}
		return(0, o.default)(e, null, [{
			key: "removeView",
			value: function(t) {
				delete e.instanceMap[t]
			}
		}, {
			key: "getInstance",
			value: function(t) {
				return null == t ? null : (null == e.instanceMap[t] && (e.instanceMap[t] = new e(t)), e.instanceMap[t])
			}
		}]), (0, o.default)(e, [{
			key: "initializeView",
			value: function() {}
		}, {
			key: "registerObserver",
			value: function(e, t) {
				null != this.observerMap[e] ? this.observerMap[e].push(t) : this.observerMap[e] = [t]
			}
		}, {
			key: "notifyObservers",
			value: function(e) {
				if(null != this.observerMap[e.getName()]) {
					for(var t = this.observerMap[e.getName()], n = [], i = void 0, o = 0, a = t.length; o < a; o++) i = t[o], n.push(i);
					for(var r = 0, s = n.length; r < s; r++)(i = n[r]).notifyObserver(e)
				}
			}
		}, {
			key: "removeObserver",
			value: function(e, t) {
				for(var n = this.observerMap[e], i = 0, o = n.length; i < o; i++)
					if(1 == n[i].compareNotifyContext(t)) {
						n.splice(i, 1);
						break
					}
				0 == n.length && delete this.observerMap[e]
			}
		}, {
			key: "registerMediator",
			value: function(e) {
				if(null == this.mediatorMap[e.getMediatorName()]) {
					e.initializeNotifier(this.multitonKey), this.mediatorMap[e.getMediatorName()] = e;
					var t = e.listNotificationInterests();
					if(t.length > 0)
						for(var n = new a.Observer(e.handleNotification, e), i = 0, o = t.length; i < o; i++) this.registerObserver(t[i], n);
					e.onRegister()
				}
			}
		}, {
			key: "retrieveMediator",
			value: function(e) {
				return this.mediatorMap[e]
			}
		}, {
			key: "removeMediator",
			value: function(e) {
				var t = this.mediatorMap[e];
				if(t) {
					for(var n = t.listNotificationInterests(), i = 0, o = n.length; i < o; i++) this.removeObserver(n[i], t);
					delete this.mediatorMap[e], t.onRemove()
				}
				return t
			}
		}, {
			key: "hasMediator",
			value: function(e) {
				return null != this.mediatorMap[e]
			}
		}]), e
	}();
	s.instanceMap = [], s.MULTITON_MSG = "View instance for this Multiton key already constructed!"
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Observer = void 0;
	var i = a(n(0)),
		o = a(n(1));

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.Observer = function() {
		function e(t, n) {
			(0, i.default)(this, e), this.notify = null, this.context = null, this.setNotifyMethod(t), this.setNotifyContext(n)
		}
		return(0, o.default)(e, [{
			key: "setNotifyMethod",
			value: function(e) {
				this.notify = e
			}
		}, {
			key: "setNotifyContext",
			value: function(e) {
				this.context = e
			}
		}, {
			key: "getNotifyMethod",
			value: function() {
				return this.notify
			}
		}, {
			key: "getNotifyContext",
			value: function() {
				return this.context
			}
		}, {
			key: "notifyObserver",
			value: function(e) {
				this.getNotifyMethod().apply(this.getNotifyContext(), [e])
			}
		}, {
			key: "compareNotifyContext",
			value: function(e) {
				return e === this.context
			}
		}]), e
	}()
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = C(n(90)),
		o = C(n(43)),
		a = C(n(84)),
		r = C(n(2)),
		s = C(n(0)),
		l = C(n(1)),
		u = C(n(3)),
		d = C(n(4)),
		c = C(n(8)),
		p = n(66),
		f = n(6),
		h = C(n(7)),
		v = n(18),
		y = n(11),
		m = n(27),
		E = C(n(33)),
		I = C(n(15)),
		_ = n(16),
		g = n(31);

	function C(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var b = function(e) {
		function t(e) {
			return(0, s.default)(this, t), (0, u.default)(this, (t.__proto__ || (0, r.default)(t)).call(this, e))
		}
		return(0, d.default)(t, e), (0, l.default)(t, [{
			key: "loadData",
			value: function() {
				var e = this,
					t = "";
				if(t = f.H5Common.isMobile ? f.H5Common.playUrl ? f.H5Common.playUrl : "/playurl/v1/play/playurlh5" : "/playurl/v3/play/playurl", t = f.H5Common.product && f.H5Common.product.name == f.H5Common.MIGU_MOVIE ? t : location.host.indexOf("117.131.17.174") > -1 ? "http://117.131.17.174:8083/gatewayPre" + t : "/gateway" + t, y.playerInfo.shieldStatus) e.sendNotification(v.H5Notification.PLAY_FAILED, {
					code: "1001",
					msg: "鐢变簬鐗堟潈鍘熷洜锛屾殏鏃舵棤娉曡鐪嬶紒"
				});
				else {
					g.advertInfo.status = g.advertStatus.NONE;
					var n = {
						url: t,
						data: {
							contId: y.playerInfo.cid,
							rateType: y.playerInfo.rateTypeList,
							clientId: f.H5Common.clientID
						},
						headers: {
							userId: m.userInfo.userId,
							clientId: f.H5Common.clientID,
							SDKCEId: m.userInfo.clientId,
							userToken: m.userInfo.token
						},
						jsonpCallback: "play_request",
						cb: "callback"
					};
					try {
						if(window.General) {
							var i = window.General.getChannelId();
							i && (n.data.channelId = i, n.headers["X-UP-CLIENT-CHANNEL-ID"] = i)
						}
					} catch(e) {}
					var o = this.getExtFromUrl();
					o && o.contId == n.data.contId && (0, a.default)(n.data, o), p.h5Net.jsonp(n, function(t) {
						var n = -1,
							i = null;
						if(t) {
							try {
								t.body.content.drm && (i = 501)
							} catch(e) {}
							n = t.errorId ? t.errorId : i || t.code
						}
						if(g.advertInfo.status = g.advertStatus.NONE, I.default.postMessage(_.ExternalEvent.VIDEO_PLAYURL_CODE, {
								code: n
							}), "10001" == t.errorId) {
							h.default.debug("瑙ｆ瀽playconfig鍑洪敊");
							var o = {
								code: f.H5Common.callCode.play[0],
								msg: "playurl璇锋眰瓒呮椂鎴栬€呭け璐�"
							};
							e.sendNotification(v.H5Notification.PLAY_FAILED, o)
						} else e.setData(t)
					})
				}
			}
		}, {
			key: "setData",
			value: function(e) {
				var t = this;
				try {
					if(h.default.debug("璇锋眰play鐨勮繑鍥炴暟鎹�>>>>>>>", e), 200 == e.code) {
						if(f.H5Common.timestamp = e.timeStamp, e.body.content.drm) return void this.sendNotification(v.H5Notification.PLAY_FAILED, {
							code: 501
						});
						if(y.playerInfo.shieldStatus) return void this.sendNotification(v.H5Notification.PLAY_FAILED, {
							code: "1001",
							msg: "鐢变簬鐗堟潈鍘熷洜锛屾殏鏃舵棤娉曡鐪嬶紒"
						});
						f.H5Common.playData = this.parseData(e), f.H5Common.needClothHat = {};
						var n = e.body.urlInfos;
						for(var i in n) {
							var o = n[i];
							f.H5Common.needClothHat[o.rateType] = o.needClothHat
						}
						I.default.postMessage(_.ExternalEvent.VIDEO_WATCH_WHOLE, {
							watchWhole: !f.H5Common.pay
						});
						var a = e.body.urlInfo;
						if(y.playerInfo.playType == y.playType.LIVE || Number(e.body.content.duration) < y.playerInfo.shikantime || f.H5Common.useTicket) {
							if(f.H5Common.useTicket && f.H5Common.pay) return void this.sendNotification(v.H5Notification.PLAY_FAILED, {
								code: f.H5Common.callCode.play[1]
							});
							if(f.H5Common.pay && !m.userInfo.isVip) return y.playerInfo.status = y.playStatus.PAUSE, void this.sendNotification(v.H5Notification.PLAY_FAILED, {
								code: "409"
							})
						}
						if(f.H5Common.isMobile && window.MiguPlayer) var r = setTimeout(function() {
							g.advertInfo.status != g.advertStatus.END && (y.playerInfo.shieldStatus || (g.advertInfo.status !== g.advertStatus.NONE && g.advertInfo.status !== g.advertStatus.REQUEST_DATA || (g.advertInfo.status = g.advertStatus.TIME_OUT, I.default.postMessage(_.ExternalEvent.VIDEO_JUMP_ADV), t.sendNotification(v.H5Notification.PLAY_SUCCESS, a)), clearTimeout(r)))
						}, 3e3);
						else this.sendNotification(v.H5Notification.PLAY_SUCCESS, a)
					} else {
						if(f.H5Common.useTicket) return void this.sendNotification(v.H5Notification.PLAY_FAILED, {
							code: f.H5Common.callCode.play[1]
						});
						var s = {};
						s.code = e.code || "2000", s.msg = e.message || "瑙嗛鎾斁鍑洪敊", this.sendNotification(v.H5Notification.PLAY_FAILED, s), h.default.debug(s)
					}
				} catch(e) {
					h.default.debug("瑙ｆ瀽playconfig鍑洪敊", e)
				}
			}
		}, {
			key: "parseData",
			value: function(e) {
				var t = e.body,
					n = this.getPlayData(t);
				if(y.playerInfo.realDuration = Number(t.content.duration), y.playerInfo.duration = y.playerInfo.realDuration, y.playerInfo.rateType = n.rateType, f.H5Common.pay = "trial" == n.urlType ? 1 : 0, y.playerInfo.urlType = n.urlType, t.urlInfos && t.mediaFiles) {
					t.urlInfos && t.urlInfos.length && n && t.urlInfos.push(n);
					var i = t.urlInfos = this.filterArrayReturnObject(t.urlInfos),
						a = t.mediaFiles = this.filterArrayReturnObject(t.mediaFiles),
						r = {};
					for(var s in i) a[s] && (r[s] = a[s]);
					t.mediaFiles = r, y.playerInfo.rateTypeList = (0, o.default)(i).join(","), h.default.debug("<<<<褰撳墠鐮佹祦锛�" + t.urlInfo.rateType + "<<褰撳墠瑙嗛鐨勬墍鏈夋敮鎸佺爜娴�<<<" + y.playerInfo.rateTypeList)
				}
				return t.playBill ? (y.playerInfo.playType = y.playType.LIVE, y.playerInfo.sTime = t.playBill.sTime || 0, y.playerInfo.eTime = t.playBill.eTime || y.playerInfo.duration, y.playerInfo.playName = t.playBill.playName, y.playerInfo.sTime && y.playerInfo.eTime && e.timeStamp && e.timeStamp > y.playerInfo.sTime && e.timeStamp > y.playerInfo.eTime && (y.playerInfo.playType = y.playType.HUIKAN, h.default.debug("<<<<鍥炵湅锛�" + y.playerInfo.sTime + "<<褰撳墠瑙嗛鐨勬墍鏈夋敮鎸佺爜娴�<<<" + y.playerInfo.eTime))) : y.playerInfo.playType == y.playType.VOD && (!t.urlInfo || "8" != t.urlInfo.mediaType && "12" != t.urlInfo.mediaType || (y.playerInfo.playType = y.playType.LIVE)), t
			}
		}, {
			key: "filterArrayReturnObject",
			value: function(e) {
				var t = {};
				if(e && e.length > 0) {
					var n = !0,
						o = !1,
						a = void 0;
					try {
						for(var r, s = (0, i.default)(e); !(n = (r = s.next()).done); n = !0) {
							var l = r.value,
								u = l.rateType;
							u && !t[u] && (t[u] = l)
						}
					} catch(e) {
						o = !0, a = e
					} finally {
						try {
							!n && s.return && s.return()
						} finally {
							if(o) throw a
						}
					}
					return t
				}
				return null
			}
		}, {
			key: "getPlayData",
			value: function(e) {
				var t = e.urlInfo,
					n = e.urlInfos;
				try {
					!t && n && n.length && (t = n[0], e.urlInfo = t)
				} catch(e) {
					h.default.debug("<<<<<<<<play閰嶇疆鏂囦欢瑙ｆ瀽鍑洪敊", e)
				}
				return t
			}
		}, {
			key: "getExtFromUrl",
			value: function() {
				var e = {},
					t = E.default.getQueryString("cid") || E.default.getQueryString("cId"),
					n = E.default.getQueryString("tcbegin"),
					i = E.default.getQueryString("tcend"),
					o = E.default.getQueryString("uc"),
					a = E.default.getQueryString("mt");
				return t && (e.contId = t), n && (e.tcbegin = n), i && (e.tcend = i), o && (e.uc = o), a && (e.mt = a), e
			}
		}]), t
	}(c.default.Proxy);
	b.NAME = "h5_play_proxy", t.default = b
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.h5Net = void 0;
	var i = s(n(0)),
		o = s(n(1)),
		a = s(n(152)),
		r = (n(6), n(32));

	function s(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var l = void 0 !== a.default && "function" == typeof a.default && /native code/.test(a.default.toString()),
		u = function() {
			function e() {
				(0, i.default)(this, e), this.count = 0, this.retry = 2, this.retryDelay = 1e3
			}
			return(0, o.default)(e, [{
				key: "jsonp",
				value: function(e, t) {
					l ? new a.default(function(n, i) {
						this.load(e, t, n, i)
					}).then(function(e) {
						t && t(e)
					}).catch(function(e) {
						t && t(e)
					}) : this.load(e, t)
				}
			}, {
				key: "load",
				value: function(e, t, n, i) {
					var o = this;
					try {
						r.$.ajax({
							type: e.type || "GET",
							url: e.url,
							data: e.data,
							dataType: e.dataType || "json",
							cache: !0,
							headers: e.headers,
							success: function(e) {
								l ? n(e) : t && t(e)
							},
							error: function(a, r, s) {
								o.count < o.retry ? (o.count++, o.load(e, t, n, i)) : l ? i({
									error: s,
									type: r,
									errorId: "10001"
								}) : t && t({
									error: s,
									type: r,
									errorId: "10001"
								})
							}
						})
					} catch(e) {
						throw "璋冪敤$鎶ラ敊"
					}
				}
			}]), e
		}();
	t.h5Net = new u
}, function(e, t, n) {
	"use strict";
	var i = n(45);
	e.exports.f = function(e) {
		return new function(e) {
			var t, n;
			this.promise = new e(function(e, i) {
				if(void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
				t = e, n = i
			}), this.resolve = i(t), this.reject = i(n)
		}(e)
	}
}, function(e, t, n) {
	e.exports = {
		default: n(167),
		__esModule: !0
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.createVVID = o, t.createClientID = function() {
		if(window.localStorage) {
			var e = window.localStorage.getItem("clientId");
			e && window.localStorage.removeItem("clientId"), e = o(), i.H5Common.clientID = e, window.localStorage.setItem("clientId", e)
		}
	};
	var i = n(6);

	function o() {
		var e = function(e) {
				for(var t = "", n = 0; n < e; n++) t += "0123456789abcdef".charAt(Math.random() * ("0123456789abcdef".length - 1) >> 0);
				return t
			},
			t = [];
		t.push(e(8));
		for(var n = 0; n < 3; n++) t.push(e(4));
		var i = (new Date).getTime();
		return t.push(("0000000" + i.toString(16)).substr(-8) + e(4)), t.join("")
	}
}, function(e, t, n) {
	var i = n(14),
		o = n(5),
		a = n(30);
	e.exports = function(e, t) {
		var n = (o.Object || {})[e] || Object[e],
			r = {};
		r[e] = t(n), i(i.S + i.F * a(function() {
			n(1)
		}), "Object", r)
	}
}, function(e, t, n) {
	var i = n(48),
		o = n(46),
		a = n(28),
		r = n(54),
		s = n(25),
		l = n(75),
		u = Object.getOwnPropertyDescriptor;
	t.f = n(20) ? u : function(e, t) {
		if(e = a(e), t = r(t, !0), l) try {
			return u(e, t)
		} catch(e) {}
		if(s(e, t)) return o(!i.f.call(e, t), e[t])
	}
}, , , function(e, t, n) {
	var i = n(25),
		o = n(36),
		a = n(51)("IE_PROTO"),
		r = Object.prototype;
	e.exports = Object.getPrototypeOf || function(e) {
		return e = o(e), i(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? r : null
	}
}, function(e, t, n) {
	e.exports = !n(20) && !n(30)(function() {
		return 7 != Object.defineProperty(n(53)("div"), "a", {
			get: function() {
				return 7
			}
		}).a
	})
}, function(e, t, n) {
	"use strict";
	var i = n(37),
		o = n(14),
		a = n(77),
		r = n(26),
		s = n(39),
		l = n(111),
		u = n(47),
		d = n(74),
		c = n(13)("iterator"),
		p = !([].keys && "next" in [].keys()),
		f = function() {
			return this
		};
	e.exports = function(e, t, n, h, v, y, m) {
		l(n, t, h);
		var E, I, _, g = function(e) {
				if(!p && e in T) return T[e];
				switch(e) {
					case "keys":
					case "values":
						return function() {
							return new n(this, e)
						}
				}
				return function() {
					return new n(this, e)
				}
			},
			C = t + " Iterator",
			b = "values" == v,
			w = !1,
			T = e.prototype,
			S = T[c] || T["@@iterator"] || v && T[v],
			H = S || g(v),
			N = v ? b ? g("entries") : H : void 0,
			k = "Array" == t && T.entries || S;
		if(k && (_ = d(k.call(new e))) !== Object.prototype && _.next && (u(_, C, !0), i || "function" == typeof _[c] || r(_, c, f)), b && S && "values" !== S.name && (w = !0, H = function() {
				return S.call(this)
			}), i && !m || !p && !w && T[c] || r(T, c, H), s[t] = H, s[C] = f, v)
			if(E = {
					values: b ? H : g("values"),
					keys: y ? H : g("keys"),
					entries: N
				}, m)
				for(I in E) I in T || a(T, I, E[I]);
			else o(o.P + o.F * (p || w), t, E);
		return E
	}
}, function(e, t, n) {
	e.exports = n(26)
}, function(e, t, n) {
	var i = n(25),
		o = n(28),
		a = n(113)(!1),
		r = n(51)("IE_PROTO");
	e.exports = function(e, t) {
		var n, s = o(e),
			l = 0,
			u = [];
		for(n in s) n != r && i(s, n) && u.push(n);
		for(; t.length > l;) i(s, n = t[l++]) && (~a(u, n) || u.push(n));
		return u
	}
}, function(e, t, n) {
	var i = n(41);
	e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
		return "String" == i(e) ? e.split("") : Object(e)
	}
}, function(e, t, n) {
	var i = n(56),
		o = Math.min;
	e.exports = function(e) {
		return e > 0 ? o(i(e), 9007199254740991) : 0
	}
}, function(e, t, n) {
	var i = n(10).document;
	e.exports = i && i.documentElement
}, function(e, t, n) {
	var i = n(78),
		o = n(58).concat("length", "prototype");
	t.f = Object.getOwnPropertyNames || function(e) {
		return i(e, o)
	}
}, function(e, t) {}, function(e, t, n) {
	e.exports = {
		default: n(134),
		__esModule: !0
	}
}, function(e, t, n) {
	e.exports = {
		default: n(137),
		__esModule: !0
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Model = void 0;
	var i = a(n(0)),
		o = a(n(1));

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var r = t.Model = function() {
		function e(t) {
			if((0, i.default)(this, e), this.proxyMap = null, this.multitonKey = null, e.instanceMap[t]) throw new Error(e.MULTITON_MSG);
			this.multitonKey = t, e.instanceMap[t] = this, this.proxyMap = [], this.initializeModel()
		}
		return(0, o.default)(e, null, [{
			key: "removeModel",
			value: function(t) {
				delete e.instanceMap[t]
			}
		}, {
			key: "getInstance",
			value: function(t) {
				return null == e.instanceMap[t] && (e.instanceMap[t] = new e(t)), e.instanceMap[t]
			}
		}]), (0, o.default)(e, [{
			key: "initializeModel",
			value: function() {}
		}, {
			key: "registerProxy",
			value: function(e) {
				e.initializeNotifier(this.multitonKey), this.proxyMap[e.getProxyName()] = e, e.onRegister()
			}
		}, {
			key: "retrieveProxy",
			value: function(e) {
				return this.proxyMap[e]
			}
		}, {
			key: "hasProxy",
			value: function(e) {
				return null != this.proxyMap[e]
			}
		}, {
			key: "removeProxy",
			value: function(e) {
				var t = this.proxyMap[e];
				return t && (this.proxyMap[e] = null, t.onRemove()), t
			}
		}]), e
	}();
	r.instanceMap = [], r.MULTITON_MSG = "Model instance for this Multiton key already constructed!"
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Controller = void 0;
	var i = s(n(0)),
		o = s(n(1)),
		a = n(64),
		r = n(63);

	function s(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var l = t.Controller = function() {
		function e(t) {
			if((0, i.default)(this, e), this.view = null, this.commandMap = null, this.multitonKey = null, null != e.instanceMap[t]) throw new Error(e.MULTITON_MSG);
			this.multitonKey = t, e.instanceMap[this.multitonKey] = this, this.commandMap = new Array, this.initializeController()
		}
		return(0, o.default)(e, null, [{
			key: "getInstance",
			value: function(t) {
				return null == e.instanceMap[t] && (e.instanceMap[t] = new e(t)), e.instanceMap[t]
			}
		}]), (0, o.default)(e, [{
			key: "initializeController",
			value: function() {
				this.view = r.View.getInstance(this.multitonKey)
			}
		}, {
			key: "executeCommand",
			value: function(e) {
				var t = this.commandMap[e.getName()];
				if(null != t) {
					var n = new t;
					n.initializeNotifier(this.multitonKey), n.execute(e)
				}
			}
		}, {
			key: "registerCommand",
			value: function(e, t) {
				null == this.commandMap[e] && this.view.registerObserver(e, new a.Observer(this.executeCommand, this)), this.commandMap[e] = t
			}
		}, {
			key: "hasCommand",
			value: function(e) {
				return null != this.commandMap[e]
			}
		}, {
			key: "removeCommand",
			value: function(e) {
				this.hasCommand(e) && (this.view.removeObserver(e, this), this.commandMap[e] = null)
			}
		}], [{
			key: "removeController",
			value: function(t) {
				delete e.instanceMap[t]
			}
		}]), e
	}();
	l.instanceMap = [], l.MULTITON_MSG = "controller key for this Multiton key already constructed"
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Facade = void 0;
	var i = u(n(0)),
		o = u(n(1)),
		a = n(87),
		r = n(86),
		s = n(63),
		l = n(89);

	function u(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var d = t.Facade = function() {
		function e(t) {
			if((0, i.default)(this, e), this.controller = null, this.model = null, this.view = null, this.multitonKey = null, null != e.instanceMap[t]) throw new Error(e.MULTITON_MSG);
			this.initializeNotifier(t), e.instanceMap[t] = this, this.initializeFacade()
		}
		return(0, o.default)(e, null, [{
			key: "hasCore",
			value: function(t) {
				return null != e.instanceMap[t]
			}
		}, {
			key: "removeCore",
			value: function(t) {
				null != e.instanceMap[t] && (r.Model.removeModel(t), s.View.removeView(t), a.Controller.removeController(t), delete e.instanceMap[t])
			}
		}, {
			key: "getInstance",
			value: function(t) {
				return null == e.instanceMap[t] && (e.instanceMap[t] = new e(t)), e.instanceMap[t]
			}
		}]), (0, o.default)(e, [{
			key: "initializeFacade",
			value: function() {
				this.initializeModel(), this.initializeController(), this.initializeView()
			}
		}, {
			key: "initializeController",
			value: function() {
				null == this.controller && (this.controller = a.Controller.getInstance(this.multitonKey))
			}
		}, {
			key: "initializeModel",
			value: function() {
				null == this.model && (this.model = r.Model.getInstance(this.multitonKey))
			}
		}, {
			key: "initializeView",
			value: function() {
				null == this.view && (this.view = s.View.getInstance(this.multitonKey))
			}
		}, {
			key: "registerCommand",
			value: function(e, t) {
				this.controller.registerCommand(e, t)
			}
		}, {
			key: "removeCommand",
			value: function(e) {
				this.controller.removeCommand(e)
			}
		}, {
			key: "hasCommand",
			value: function(e) {
				return this.controller.hasCommand(e)
			}
		}, {
			key: "registerProxy",
			value: function(e) {
				this.model.registerProxy(e)
			}
		}, {
			key: "retrieveProxy",
			value: function(e) {
				return this.model.retrieveProxy(e)
			}
		}, {
			key: "removeProxy",
			value: function(e) {
				var t = null;
				return null != this.model && (t = this.model.removeProxy(e)), t
			}
		}, {
			key: "hasProxy",
			value: function(e) {
				return this.model.hasProxy(e)
			}
		}, {
			key: "registerMediator",
			value: function(e) {
				null != this.view && this.view.registerMediator(e)
			}
		}, {
			key: "retrieveMediator",
			value: function(e) {
				return this.view.retrieveMediator(e)
			}
		}, {
			key: "removeMediator",
			value: function(e) {
				var t = null;
				return null != this.view && (t = this.view.removeMediator(e)), t
			}
		}, {
			key: "hasMediator",
			value: function(e) {
				return this.view.hasMediator(e)
			}
		}, {
			key: "sendNotification",
			value: function(e, t, n) {
				this.notifyObservers(new l.Notification(e, t, n))
			}
		}, {
			key: "notifyObservers",
			value: function(e) {
				null != this.view && this.view.notifyObservers(e)
			}
		}, {
			key: "initializeNotifier",
			value: function(e) {
				this.multitonKey = e
			}
		}]), e
	}();
	d.instanceMap = [], d.MULTITON_MSG = "Facade instance for this Multiton key already constructed!"
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Notification = void 0;
	var i = a(n(0)),
		o = a(n(1));

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.Notification = function() {
		function e(t, n, o) {
			(0, i.default)(this, e), this.name = null, this.type = null, this.body = null, this.name = t, this.body = n, this.type = o
		}
		return(0, o.default)(e, [{
			key: "getName",
			value: function() {
				return this.name
			}
		}, {
			key: "setBody",
			value: function(e) {
				this.body = e
			}
		}, {
			key: "getBody",
			value: function() {
				return this.body
			}
		}, {
			key: "setType",
			value: function(e) {
				this.type = e
			}
		}, {
			key: "getType",
			value: function() {
				return this.type
			}
		}, {
			key: "toString",
			value: function() {
				var e = "Notification Name: " + this.getName();
				return(e += "\nBody:" + (null == this.body ? "null" : this.body.toString())) + "\nType:" + (null == this.type ? "null" : this.type)
			}
		}]), e
	}()
}, function(e, t, n) {
	e.exports = {
		default: n(148),
		__esModule: !0
	}
}, function(e, t, n) {
	var i = n(92),
		o = n(13)("iterator"),
		a = n(39);
	e.exports = n(5).getIteratorMethod = function(e) {
		if(null != e) return e[o] || e["@@iterator"] || a[i(e)]
	}
}, function(e, t, n) {
	var i = n(41),
		o = n(13)("toStringTag"),
		a = "Arguments" == i(function() {
			return arguments
		}());
	e.exports = function(e) {
		var t, n, r;
		return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
			try {
				return e[t]
			} catch(e) {}
		}(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
	}
}, function(e, t, n) {
	var i = n(17),
		o = n(45),
		a = n(13)("species");
	e.exports = function(e, t) {
		var n, r = i(e).constructor;
		return void 0 === r || null == (n = i(r)[a]) ? t : o(n)
	}
}, function(e, t, n) {
	var i, o, a, r = n(38),
		s = n(159),
		l = n(81),
		u = n(53),
		d = n(10),
		c = d.process,
		p = d.setImmediate,
		f = d.clearImmediate,
		h = d.MessageChannel,
		v = d.Dispatch,
		y = 0,
		m = {},
		E = function() {
			var e = +this;
			if(m.hasOwnProperty(e)) {
				var t = m[e];
				delete m[e], t()
			}
		},
		I = function(e) {
			E.call(e.data)
		};
	p && f || (p = function(e) {
		for(var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
		return m[++y] = function() {
			s("function" == typeof e ? e : Function(e), t)
		}, i(y), y
	}, f = function(e) {
		delete m[e]
	}, "process" == n(41)(c) ? i = function(e) {
		c.nextTick(r(E, e, 1))
	} : v && v.now ? i = function(e) {
		v.now(r(E, e, 1))
	} : h ? (a = (o = new h).port2, o.port1.onmessage = I, i = r(a.postMessage, a, 1)) : d.addEventListener && "function" == typeof postMessage && !d.importScripts ? (i = function(e) {
		d.postMessage(e + "", "*")
	}, d.addEventListener("message", I, !1)) : i = "onreadystatechange" in u("script") ? function(e) {
		l.appendChild(u("script")).onreadystatechange = function() {
			l.removeChild(this), E.call(e)
		}
	} : function(e) {
		setTimeout(r(E, e, 1), 0)
	}), e.exports = {
		set: p,
		clear: f
	}
}, function(e, t) {
	e.exports = function(e) {
		try {
			return {
				e: !1,
				v: e()
			}
		} catch(e) {
			return {
				e: !0,
				v: e
			}
		}
	}
}, function(e, t, n) {
	var i = n(17),
		o = n(24),
		a = n(67);
	e.exports = function(e, t) {
		if(i(e), o(t) && t.constructor === e) return t;
		var n = a.f(e);
		return(0, n.resolve)(t), n.promise
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function(e, t, n) {
		var i;

		function o() {
			var o, a;
			n.userAgent.match(/ipad|iphone/i) ? ((o = t.createRange()).selectNodeContents(i), (a = e.getSelection()).removeAllRanges(), a.addRange(o), i.setSelectionRange(0, 999999)) : i.select()
		}
		return {
			copy: function(n) {
				! function(n) {
					(i = t.createElement("textArea")).value = n, i.style.position = "absolute", i.style.fontSize = "12pt", i.style.border = "0", i.style.padding = "0", i.style.margin = "0", i.style.position = "absolute", i.style.left = "-9999px";
					var o = e.pageYOffset || t.documentElement.scrollTop;
					i.style.top = o + "px", i.setAttribute("readonly", ""), t.body.appendChild(i)
				}(n), o(),
					function() {
						try {
							t.execCommand("Copy")
						} catch(e) {}
						t.body.removeChild(i)
					}()
			}
		}
	}(window, document, navigator);
	t.default = i
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = v(n(2)),
		o = v(n(0)),
		a = v(n(1)),
		r = v(n(3)),
		s = v(n(4)),
		l = v(n(8)),
		u = n(66),
		d = n(6),
		c = v(n(7)),
		p = n(18),
		f = n(11),
		h = n(27);

	function v(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var y = function(e) {
		function t(e) {
			return(0, o.default)(this, t), (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e))
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "loadData",
			value: function() {
				var e = this,
					t = {
						url: "/gateway" + (d.H5Common.recoPath + f.playerInfo.cid),
						data: {
							programType: f.playerInfo.programType ? f.playerInfo.programType : "OTHER"
						},
						headers: {
							userId: h.userInfo.userId,
							clientId: d.H5Common.clientID,
							SDKCEId: h.userInfo.clientId,
							userToken: h.userInfo.token
						},
						jsonpCallback: "recom_request",
						cb: "callback"
					};
				u.h5Net.jsonp(t, function(t) {
					"10001" == t.errorId ? (c.default.debug("鎺ㄨ崘鎺ュ彛璇锋眰鍑洪敊"), this.sendNotification(p.H5Notification.RECO_SUCCESS, null)) : e.setData(t)
				})
			}
		}, {
			key: "setData",
			value: function(e) {
				try {
					200 == e.code ? e.body && e.body.data && e.body.data.length && this.sendNotification(p.H5Notification.RECO_SUCCESS, e.body.data) : this.sendNotification(p.H5Notification.RECO_SUCCESS, null)
				} catch(e) {
					c.default.debug("瑙ｆ瀽鎺ㄨ崘鎺ュ彛鍑洪敊", e)
				}
			}
		}]), t
	}(l.default.Proxy);
	y.NAME = "recom_proxy", t.default = y
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = c(n(2)),
		o = c(n(0)),
		a = c(n(1)),
		r = c(n(3)),
		s = c(n(4)),
		l = c(n(8)),
		u = n(66),
		d = n(6);

	function c(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	c(n(7));
	var p = function(e) {
		function t(e) {
			return(0, o.default)(this, t), (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e))
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "loadData",
			value: function() {
				u.h5Net.jsonp({
					url: "//127.0.0.1:5000",
					dataType: "text"
				}, function(e) {
					e.errorId || e && (d.H5Common.hasClient = !0)
				})
			}
		}]), t
	}(l.default.Proxy);
	p.NAME = "pc_client_proxy", t.default = p
}, , , function(e, t, n) {
	"use strict";
	t.__esModule = !0;
	var i, o = (i = n(85)) && i.__esModule ? i : {
		default: i
	};
	t.default = function(e, t, n) {
		return t in e ? (0, o.default)(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}
}, , , , function(e, t, n) {
	n(107), e.exports = n(5).Object.getPrototypeOf
}, function(e, t, n) {
	var i = n(36),
		o = n(74);
	n(70)("getPrototypeOf", function() {
		return function(e) {
			return o(i(e))
		}
	})
}, function(e, t, n) {
	e.exports = {
		default: n(109),
		__esModule: !0
	}
}, function(e, t, n) {
	n(55), n(59), e.exports = n(60).f("iterator")
}, function(e, t, n) {
	var i = n(56),
		o = n(50);
	e.exports = function(e) {
		return function(t, n) {
			var a, r, s = String(o(t)),
				l = i(n),
				u = s.length;
			return l < 0 || l >= u ? e ? "" : void 0 : (a = s.charCodeAt(l)) < 55296 || a > 56319 || l + 1 === u || (r = s.charCodeAt(l + 1)) < 56320 || r > 57343 ? e ? s.charAt(l) : a : e ? s.slice(l, l + 2) : r - 56320 + (a - 55296 << 10) + 65536
		}
	}
}, function(e, t, n) {
	"use strict";
	var i = n(57),
		o = n(46),
		a = n(47),
		r = {};
	n(26)(r, n(13)("iterator"), function() {
		return this
	}), e.exports = function(e, t, n) {
		e.prototype = i(r, {
			next: o(1, n)
		}), a(e, t + " Iterator")
	}
}, function(e, t, n) {
	var i = n(23),
		o = n(17),
		a = n(40);
	e.exports = n(20) ? Object.defineProperties : function(e, t) {
		o(e);
		for(var n, r = a(t), s = r.length, l = 0; s > l;) i.f(e, n = r[l++], t[n]);
		return e
	}
}, function(e, t, n) {
	var i = n(28),
		o = n(80),
		a = n(114);
	e.exports = function(e) {
		return function(t, n, r) {
			var s, l = i(t),
				u = o(l.length),
				d = a(r, u);
			if(e && n != n) {
				for(; u > d;)
					if((s = l[d++]) != s) return !0
			} else
				for(; u > d; d++)
					if((e || d in l) && l[d] === n) return e || d || 0;
			return !e && -1
		}
	}
}, function(e, t, n) {
	var i = n(56),
		o = Math.max,
		a = Math.min;
	e.exports = function(e, t) {
		return(e = i(e)) < 0 ? o(e + t, 0) : a(e, t)
	}
}, function(e, t, n) {
	"use strict";
	var i = n(116),
		o = n(117),
		a = n(39),
		r = n(28);
	e.exports = n(76)(Array, "Array", function(e, t) {
		this._t = r(e), this._i = 0, this._k = t
	}, function() {
		var e = this._t,
			t = this._k,
			n = this._i++;
		return !e || n >= e.length ? (this._t = void 0, o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
	}, "values"), a.Arguments = a.Array, i("keys"), i("values"), i("entries")
}, function(e, t) {
	e.exports = function() {}
}, function(e, t) {
	e.exports = function(e, t) {
		return {
			value: t,
			done: !!e
		}
	}
}, function(e, t, n) {
	e.exports = {
		default: n(119),
		__esModule: !0
	}
}, function(e, t, n) {
	n(120), n(83), n(125), n(126), e.exports = n(5).Symbol
}, function(e, t, n) {
	"use strict";
	var i = n(10),
		o = n(25),
		a = n(20),
		r = n(14),
		s = n(77),
		l = n(121).KEY,
		u = n(30),
		d = n(52),
		c = n(47),
		p = n(44),
		f = n(13),
		h = n(60),
		v = n(61),
		y = n(122),
		m = n(123),
		E = n(17),
		I = n(24),
		_ = n(36),
		g = n(28),
		C = n(54),
		b = n(46),
		w = n(57),
		T = n(124),
		S = n(71),
		H = n(62),
		N = n(23),
		k = n(40),
		O = S.f,
		A = N.f,
		P = T.f,
		D = i.Symbol,
		U = i.JSON,
		V = U && U.stringify,
		M = f("_hidden"),
		x = f("toPrimitive"),
		L = {}.propertyIsEnumerable,
		R = d("symbol-registry"),
		B = d("symbols"),
		Y = d("op-symbols"),
		j = Object.prototype,
		F = "function" == typeof D && !!H.f,
		G = i.QObject,
		K = !G || !G.prototype || !G.prototype.findChild,
		W = a && u(function() {
			return 7 != w(A({}, "a", {
				get: function() {
					return A(this, "a", {
						value: 7
					}).a
				}
			})).a
		}) ? function(e, t, n) {
			var i = O(j, t);
			i && delete j[t], A(e, t, n), i && e !== j && A(j, t, i)
		} : A,
		z = function(e) {
			var t = B[e] = w(D.prototype);
			return t._k = e, t
		},
		$ = F && "symbol" == typeof D.iterator ? function(e) {
			return "symbol" == typeof e
		} : function(e) {
			return e instanceof D
		},
		X = function(e, t, n) {
			return e === j && X(Y, t, n), E(e), t = C(t, !0), E(n), o(B, t) ? (n.enumerable ? (o(e, M) && e[M][t] && (e[M][t] = !1), n = w(n, {
				enumerable: b(0, !1)
			})) : (o(e, M) || A(e, M, b(1, {})), e[M][t] = !0), W(e, t, n)) : A(e, t, n)
		},
		q = function(e, t) {
			E(e);
			for(var n, i = y(t = g(t)), o = 0, a = i.length; a > o;) X(e, n = i[o++], t[n]);
			return e
		},
		Z = function(e) {
			var t = L.call(this, e = C(e, !0));
			return !(this === j && o(B, e) && !o(Y, e)) && (!(t || !o(this, e) || !o(B, e) || o(this, M) && this[M][e]) || t)
		},
		Q = function(e, t) {
			if(e = g(e), t = C(t, !0), e !== j || !o(B, t) || o(Y, t)) {
				var n = O(e, t);
				return !n || !o(B, t) || o(e, M) && e[M][t] || (n.enumerable = !0), n
			}
		},
		J = function(e) {
			for(var t, n = P(g(e)), i = [], a = 0; n.length > a;) o(B, t = n[a++]) || t == M || t == l || i.push(t);
			return i
		},
		ee = function(e) {
			for(var t, n = e === j, i = P(n ? Y : g(e)), a = [], r = 0; i.length > r;) !o(B, t = i[r++]) || n && !o(j, t) || a.push(B[t]);
			return a
		};
	F || (s((D = function() {
		if(this instanceof D) throw TypeError("Symbol is not a constructor!");
		var e = p(arguments.length > 0 ? arguments[0] : void 0),
			t = function(n) {
				this === j && t.call(Y, n), o(this, M) && o(this[M], e) && (this[M][e] = !1), W(this, e, b(1, n))
			};
		return a && K && W(j, e, {
			configurable: !0,
			set: t
		}), z(e)
	}).prototype, "toString", function() {
		return this._k
	}), S.f = Q, N.f = X, n(82).f = T.f = J, n(48).f = Z, H.f = ee, a && !n(37) && s(j, "propertyIsEnumerable", Z, !0), h.f = function(e) {
		return z(f(e))
	}), r(r.G + r.W + r.F * !F, {
		Symbol: D
	});
	for(var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) f(te[ne++]);
	for(var ie = k(f.store), oe = 0; ie.length > oe;) v(ie[oe++]);
	r(r.S + r.F * !F, "Symbol", {
		for: function(e) {
			return o(R, e += "") ? R[e] : R[e] = D(e)
		},
		keyFor: function(e) {
			if(!$(e)) throw TypeError(e + " is not a symbol!");
			for(var t in R)
				if(R[t] === e) return t
		},
		useSetter: function() {
			K = !0
		},
		useSimple: function() {
			K = !1
		}
	}), r(r.S + r.F * !F, "Object", {
		create: function(e, t) {
			return void 0 === t ? w(e) : q(w(e), t)
		},
		defineProperty: X,
		defineProperties: q,
		getOwnPropertyDescriptor: Q,
		getOwnPropertyNames: J,
		getOwnPropertySymbols: ee
	});
	var ae = u(function() {
		H.f(1)
	});
	r(r.S + r.F * ae, "Object", {
		getOwnPropertySymbols: function(e) {
			return H.f(_(e))
		}
	}), U && r(r.S + r.F * (!F || u(function() {
		var e = D();
		return "[null]" != V([e]) || "{}" != V({
			a: e
		}) || "{}" != V(Object(e))
	})), "JSON", {
		stringify: function(e) {
			for(var t, n, i = [e], o = 1; arguments.length > o;) i.push(arguments[o++]);
			if(n = t = i[1], (I(t) || void 0 !== e) && !$(e)) return m(t) || (t = function(e, t) {
				if("function" == typeof n && (t = n.call(this, e, t)), !$(t)) return t
			}), i[1] = t, V.apply(U, i)
		}
	}), D.prototype[x] || n(26)(D.prototype, x, D.prototype.valueOf), c(D, "Symbol"), c(Math, "Math", !0), c(i.JSON, "JSON", !0)
}, function(e, t, n) {
	var i = n(44)("meta"),
		o = n(24),
		a = n(25),
		r = n(23).f,
		s = 0,
		l = Object.isExtensible || function() {
			return !0
		},
		u = !n(30)(function() {
			return l(Object.preventExtensions({}))
		}),
		d = function(e) {
			r(e, i, {
				value: {
					i: "O" + ++s,
					w: {}
				}
			})
		},
		c = e.exports = {
			KEY: i,
			NEED: !1,
			fastKey: function(e, t) {
				if(!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
				if(!a(e, i)) {
					if(!l(e)) return "F";
					if(!t) return "E";
					d(e)
				}
				return e[i].i
			},
			getWeak: function(e, t) {
				if(!a(e, i)) {
					if(!l(e)) return !0;
					if(!t) return !1;
					d(e)
				}
				return e[i].w
			},
			onFreeze: function(e) {
				return u && c.NEED && l(e) && !a(e, i) && d(e), e
			}
		}
}, function(e, t, n) {
	var i = n(40),
		o = n(62),
		a = n(48);
	e.exports = function(e) {
		var t = i(e),
			n = o.f;
		if(n)
			for(var r, s = n(e), l = a.f, u = 0; s.length > u;) l.call(e, r = s[u++]) && t.push(r);
		return t
	}
}, function(e, t, n) {
	var i = n(41);
	e.exports = Array.isArray || function(e) {
		return "Array" == i(e)
	}
}, function(e, t, n) {
	var i = n(28),
		o = n(82).f,
		a = {}.toString,
		r = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
	e.exports.f = function(e) {
		return r && "[object Window]" == a.call(e) ? function(e) {
			try {
				return o(e)
			} catch(e) {
				return r.slice()
			}
		}(e) : o(i(e))
	}
}, function(e, t, n) {
	n(61)("asyncIterator")
}, function(e, t, n) {
	n(61)("observable")
}, function(e, t, n) {
	e.exports = {
		default: n(128),
		__esModule: !0
	}
}, function(e, t, n) {
	n(129), e.exports = n(5).Object.setPrototypeOf
}, function(e, t, n) {
	var i = n(14);
	i(i.S, "Object", {
		setPrototypeOf: n(130).set
	})
}, function(e, t, n) {
	var i = n(24),
		o = n(17),
		a = function(e, t) {
			if(o(e), !i(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
		};
	e.exports = {
		set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, i) {
			try {
				(i = n(38)(Function.call, n(71).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
			} catch(e) {
				t = !0
			}
			return function(e, n) {
				return a(e, n), t ? e.__proto__ = n : i(e, n), e
			}
		}({}, !1) : void 0),
		check: a
	}
}, function(e, t, n) {
	n(132);
	var i = n(5).Object;
	e.exports = function(e, t) {
		return i.create(e, t)
	}
}, function(e, t, n) {
	var i = n(14);
	i(i.S, "Object", {
		create: n(57)
	})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = p(n(84)),
		o = p(n(0)),
		a = p(n(1)),
		r = p(n(139)),
		s = n(6),
		l = n(32),
		u = p(n(7)),
		d = p(n(15)),
		c = n(16);

	function p(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	n(11);
	try {
		document.domain = "miguvideo.com"
	} catch(e) {}
	var f = function() {
		function e(t) {
			(0, o.default)(this, e);
			var n = (0, i.default)({}, {
				cid: "",
				width: "100%",
				height: "100%",
				container: "#site-player"
			}, t);
			try {
				this.init()
			} catch(e) {}
			try {
				this.app = r.default.getInstance(r.default.NAME), this.app.startUp(n), d.default.postMessage(c.ExternalEvent.VIDEO_STATUS, c.playerStatusType.READY)
			} catch(e) {
				u.default.debug(e.message)
			}
		}
		return(0, a.default)(e, [{
			key: "init",
			value: function() {
				u.default.debug("鎾斁鍣ㄧ増鏈彿: " + s.H5Common.version), (s.H5Common.isMobile = s.H5Common.mobileRegExp.test(navigator.userAgent)) && window.General && window.General.rem(), l.$ || (0, l.set$)(), s.H5Common.ow = (0, l.$)(window).width(), s.H5Common.oh = (0, l.$)(window).height()
			}
		}, {
			key: "setCTX",
			value: function(e) {
				this.app.setCTX(e)
			}
		}, {
			key: "setUserInfo",
			value: function(e) {
				this.app.setUserInfo(e)
			}
		}, {
			key: "playVideo",
			value: function(e) {
				this.app.playVideo(e)
			}
		}, {
			key: "pauseVideo",
			value: function() {
				this.app.pauseVideo()
			}
		}, {
			key: "stopVideo",
			value: function() {
				this.app.stopVideo()
			}
		}, {
			key: "seekVideo",
			value: function(e) {
				this.app.seekVideo(e)
			}
		}, {
			key: "switchVideo",
			value: function(e) {
				this.app.switchVideo(e)
			}
		}, {
			key: "fullScreen",
			value: function() {
				!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], this.app.fullScreen()
			}
		}, {
			key: "setAutoPlay",
			value: function(e) {
				this.app.setAutoPlay(e)
			}
		}, {
			key: "setPageZoom",
			value: function(e) {
				this.app.setPageZoom(e)
			}
		}, {
			key: "setMiniPlayer",
			value: function(e) {
				this.app.setMiniPlayer(e)
			}
		}, {
			key: "showErrorUI",
			value: function(e) {
				this.app.showErrorUI(e)
			}
		}, {
			key: "advertStatus",
			value: function(e) {
				e && this.app.advertStatus(e)
			}
		}, {
			key: "duration",
			get: function() {
				return this.app.duration
			}
		}, {
			key: "playStatus",
			get: function() {
				return this.app.playStatus
			}
		}, {
			key: "volume",
			set: function(e) {
				this.app.volume = e
			},
			get: function() {
				return this.app.volume
			}
		}, {
			key: "currentTime",
			get: function() {
				return this.app.currentTime
			}
		}, {
			key: "rateTypeList",
			get: function() {
				return s.H5Common.playData ? s.H5Common.playData.mediaFiles : (u.default.debug("<<<<<<<<鎾斁鏁版嵁鏈姹傚埌鎴栬€呮病鏈夌爜娴佷俊鎭�"), null)
			}
		}, {
			key: "rateType",
			get: function() {
				return this.app.rateType
			}
		}, {
			key: "heartDuration",
			set: function(e) {
				s.H5Common.heartDuration = e
			}
		}, {
			key: "shieldStatus",
			set: function(e) {
				this.app.setShieldStatus(e)
			}
		}, {
			key: "videoEl",
			get: function() {
				return this.app.videoEl
			}
		}]), e
	}();
	t.default = f
}, function(e, t, n) {
	n(135), e.exports = n(5).Object.assign
}, function(e, t, n) {
	var i = n(14);
	i(i.S + i.F, "Object", {
		assign: n(136)
	})
}, function(e, t, n) {
	"use strict";
	var i = n(20),
		o = n(40),
		a = n(62),
		r = n(48),
		s = n(36),
		l = n(79),
		u = Object.assign;
	e.exports = !u || n(30)(function() {
		var e = {},
			t = {},
			n = Symbol(),
			i = "abcdefghijklmnopqrst";
		return e[n] = 7, i.split("").forEach(function(e) {
			t[e] = e
		}), 7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != i
	}) ? function(e, t) {
		for(var n = s(e), u = arguments.length, d = 1, c = a.f, p = r.f; u > d;)
			for(var f, h = l(arguments[d++]), v = c ? o(h).concat(c(h)) : o(h), y = v.length, m = 0; y > m;) f = v[m++], i && !p.call(h, f) || (n[f] = h[f]);
		return n
	} : u
}, function(e, t, n) {
	n(138);
	var i = n(5).Object;
	e.exports = function(e, t, n) {
		return i.defineProperty(e, t, n)
	}
}, function(e, t, n) {
	var i = n(14);
	i(i.S + i.F * !n(20), "Object", {
		defineProperty: n(23).f
	})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = y(n(2)),
		o = y(n(0)),
		a = y(n(1)),
		r = y(n(3)),
		s = y(n(4)),
		l = y(n(8)),
		u = n(6),
		d = n(18),
		c = y(n(144)),
		p = n(11),
		f = n(27),
		h = n(69),
		v = y(n(7));

	function y(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var m = function(e) {
		function t() {
			return(0, o.default)(this, t), (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments))
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "startUp",
			value: function(e) {
				v.default.debug("鎾斁鍣ㄥ紑濮嬪垵濮嬪寲"), this.initPlayInfo(e), e.ctx && this.setCTX(e.ctx), this.registerCommand(d.H5Notification.START_UP, c.default), this.sendNotification(d.H5Notification.START_UP)
			}
		}, {
			key: "initPlayInfo",
			value: function(e) {
				u.H5Common.container = e.container, p.playerInfo.cid = e.cid || "", (0, h.createClientID)()
			}
		}, {
			key: "setCTX",
			value: function(e) {
				e.rateType && (p.playerInfo.rateTypeList = e.rateType), e.h5pic && (p.playerInfo.poster = e.h5pic), e.userInfo && (u.H5Common.userData = e.userInfo, this.setUserInfo(e.userInfo)), e.memberInfo && (u.H5Common.userData = e.userInfo), void 0 !== e.isVip && (f.userInfo.isVip = !!e.isVip), e.playType && (p.playerInfo.playType = e.playType), e.isUseTicket && (u.H5Common.useTicket = !0), e.shikanTime && (p.playerInfo.shikanTime = e.shikanTime), e.heartDuration && (u.H5Common.heartDuration = e.heartDuration), e.skin && (u.H5Common.skinCfg = e.skin), e.shieldStatus && (p.playerInfo.shieldStatus = e.shieldStatus), e.programType && (p.playerInfo.programType = e.programType), e.pcClientUrl && (u.H5Common.pcClientUrl = e.pcClientUrl), e.startPay && (e.startPay.btnVipTip && (u.H5Common.startBtnVipTip = e.startPay.btnVipTip), e.startPay.startTip && (u.H5Common.startBtnTip = e.startPay.btnTip), e.startPay.tip && (u.H5Common.startTip = e.startPay.tip)), e.playUrl && (u.H5Common.playUrl = e.playUrl), e.product && (u.H5Common.product = {}, e.product.name && (u.H5Common.product.name = e.product.name), e.product.action && (u.H5Common.product.action = e.product.action))
			}
		}, {
			key: "playVideo",
			value: function(e, t) {
				this.sendNotification(d.H5Notification.EXTERNAL_NOTICATION, {
					id: e,
					ext: t
				}, d.ExternalApiType.VIDEO_PLAY)
			}
		}, {
			key: "pauseVideo",
			value: function() {
				this.sendNotification(d.H5Notification.EXTERNAL_NOTICATION, null, d.ExternalApiType.VIDEO_PAUSE)
			}
		}, {
			key: "stopVideo",
			value: function() {
				this.sendNotification(d.H5Notification.EXTERNAL_NOTICATION, null, d.ExternalApiType.VIDEO_STOP)
			}
		}, {
			key: "seekVideo",
			value: function(e) {
				this.sendNotification(d.H5Notification.EXTERNAL_NOTICATION, {
					posi: e
				}, d.ExternalApiType.VIDEO_SEEK)
			}
		}, {
			key: "switchVideo",
			value: function(e) {
				this.sendNotification(d.H5Notification.EXTERNAL_NOTICATION, {
					rateType: e
				}, d.ExternalApiType.VIDEO_SWITCH)
			}
		}, {
			key: "setUserInfo",
			value: function(e) {
				e && (e.userId && (f.userInfo.userId = e.userId), e.userToken && (f.userInfo.token = e.userToken), e.sname && (f.userInfo.name = e.sname), e.clientId && (f.userInfo.clientId = e.clientId))
			}
		}, {
			key: "fullScreen",
			value: function(e) {
				this.sendNotification(d.H5Notification.EXTERNAL_NOTICATION, {
					fullscreen: e
				}, d.ExternalApiType.VIDEO_FULLSCREEN)
			}
		}, {
			key: "setShieldStatus",
			value: function(e) {
				this.sendNotification(d.H5Notification.EXTERNAL_NOTICATION, {
					shieldStatus: e
				}, d.ExternalApiType.VIDEO_SHIELD_STATUS)
			}
		}, {
			key: "setAutoPlay",
			value: function(e) {
				this.sendNotification(d.H5Notification.EXTERNAL_NOTICATION, {
					autoPlay: e
				}, d.ExternalApiType.VIDEO_AUTO_PLAY)
			}
		}, {
			key: "setPageZoom",
			value: function(e) {
				this.sendNotification(d.H5Notification.EXTERNAL_NOTICATION, {
					pageZoom: e
				}, d.ExternalApiType.VIDEO_PAGE_ZOOM)
			}
		}, {
			key: "setMiniPlayer",
			value: function(e) {
				this.sendNotification(d.H5Notification.EXTERNAL_NOTICATION, {
					mini: e
				}, d.ExternalApiType.VIDEO_MINI_PLAYER)
			}
		}, {
			key: "showErrorUI",
			value: function(e) {
				this.sendNotification(d.H5Notification.EXTERNAL_NOTICATION, {
					params: e
				}, d.ExternalApiType.SKIN_SHOW_ERROR_UI)
			}
		}, {
			key: "advertStatus",
			value: function(e) {
				this.sendNotification(d.H5Notification.EXTERNAL_NOTICATION, {
					params: e
				}, d.ExternalApiType.ADVERT_STATUS)
			}
		}, {
			key: "duration",
			get: function() {
				return p.playerInfo.duration
			}
		}, {
			key: "playStatus",
			get: function() {
				return p.playerInfo.status
			}
		}, {
			key: "volume",
			set: function(e) {
				this.sendNotification(d.H5Notification.EXTERNAL_NOTICATION, {
					volume: e
				}, d.ExternalApiType.VIDEO_VOLUME)
			},
			get: function() {
				return p.playerInfo.volume
			}
		}, {
			key: "currentTime",
			get: function() {
				return p.playerInfo.posi
			}
		}, {
			key: "rateType",
			get: function() {
				return p.playerInfo.rateType
			}
		}, {
			key: "videoEl",
			get: function() {
				return p.playerInfo.el
			}
		}], [{
			key: "getInstance",
			value: function(e) {
				var n = l.default.Facade.instanceMap;
				return n[e] || (n[e] = new t(e))
			}
		}]), t
	}(l.default.Facade);
	m.NAME = "app_facade", t.default = m
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.SimpleCommand = void 0;
	var i = u(n(2)),
		o = u(n(0)),
		a = u(n(1)),
		r = u(n(3)),
		s = u(n(4)),
		l = n(42);

	function u(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.SimpleCommand = function(e) {
		function t() {
			return(0, o.default)(this, t), (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments))
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "execute",
			value: function(e) {}
		}]), t
	}(l.Notifier)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.MacroCommand = void 0;
	var i = u(n(2)),
		o = u(n(0)),
		a = u(n(1)),
		r = u(n(3)),
		s = u(n(4)),
		l = n(42);

	function u(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.MacroCommand = function(e) {
		function t() {
			(0, o.default)(this, t);
			var e = (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).call(this));
			return e.subCommands = null, e.subCommands = [], e.initializeMacroCommand(), e
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "initializeMacroCommand",
			value: function() {}
		}, {
			key: "addSubCommand",
			value: function(e) {
				this.subCommands.push(e)
			}
		}, {
			key: "execute",
			value: function(e) {
				for(; this.subCommands.length > 0;) {
					var t = new(this.subCommands.shift());
					t.initializeNotifier(this.multitonKey), t.execute(e)
				}
			}
		}]), t
	}(l.Notifier)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Mediator = void 0;
	var i = u(n(2)),
		o = u(n(0)),
		a = u(n(1)),
		r = u(n(3)),
		s = u(n(4)),
		l = n(42);

	function u(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}(t.Mediator = function(e) {
		function t(e, n) {
			(0, o.default)(this, t);
			var a = (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).call(this));
			return a.mediatorName = null, a.viewComponent = null, a.mediatorName = e || a.constructor.NAME, a.viewComponent = n, a
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "getMediatorName",
			value: function() {
				return this.mediatorName
			}
		}, {
			key: "setViewComponent",
			value: function(e) {
				this.viewComponent = e
			}
		}, {
			key: "getViewComponent",
			value: function() {
				return this.viewComponent
			}
		}, {
			key: "listNotificationInterests",
			value: function() {
				return []
			}
		}, {
			key: "handleNotification",
			value: function(e) {}
		}, {
			key: "onRegister",
			value: function() {}
		}, {
			key: "onRemove",
			value: function() {}
		}]), t
	}(l.Notifier)).NAME = "Mediator"
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Proxy = void 0;
	var i = u(n(2)),
		o = u(n(0)),
		a = u(n(1)),
		r = u(n(3)),
		s = u(n(4)),
		l = n(42);

	function u(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}(t.Proxy = function(e) {
		function t(e, n) {
			(0, o.default)(this, t);
			var a = (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).call(this));
			return a.proxyName = null, a.data = null, a.proxyName = e || a.constructor.NAME, null != n && a.setData(n), a
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "getProxyName",
			value: function() {
				return this.proxyName
			}
		}, {
			key: "setData",
			value: function(e) {
				this.data = e
			}
		}, {
			key: "getData",
			value: function() {
				return this.data
			}
		}, {
			key: "onRegister",
			value: function() {}
		}, {
			key: "onRemove",
			value: function() {}
		}]), t
	}(l.Notifier)).NAME = "Proxy"
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = f(n(2)),
		o = f(n(0)),
		a = f(n(1)),
		r = f(n(3)),
		s = f(n(4)),
		l = f(n(8)),
		u = f(n(145)),
		d = f(n(147)),
		c = f(n(168)),
		p = f(n(7));

	function f(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var h = function(e) {
		function t() {
			return(0, o.default)(this, t), (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments))
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "initializeMacroCommand",
			value: function() {
				p.default.debug("1娉ㄥ唽H5ControllerCommand || H5ModelCommand || H5ViewCommand 寮€濮�"), this.addSubCommand(d.default), this.addSubCommand(u.default), this.addSubCommand(c.default)
			}
		}]), t
	}(l.default.MacroCommand);
	t.default = h
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = c(n(2)),
		o = c(n(0)),
		a = c(n(1)),
		r = c(n(3)),
		s = c(n(4)),
		l = c(n(8)),
		u = n(18),
		d = c(n(146));

	function c(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var p = function(e) {
		function t() {
			return(0, o.default)(this, t), (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments))
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "execute",
			value: function(e) {
				this.facade.registerCommand(u.H5Notification.PLAY_SUCCESS, d.default)
			}
		}]), t
	}(l.default.SimpleCommand);
	p.NAME = "h5_controller_command", t.default = p
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = l(n(2)),
		o = l(n(0)),
		a = l(n(1)),
		r = l(n(3)),
		s = l(n(4));

	function l(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var u = function(e) {
		function t() {
			return(0, o.default)(this, t), (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments))
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "execute",
			value: function(e) {
				e.getBody()
			}
		}]), t
	}(l(n(8)).default.SimpleCommand);
	t.default = u
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = p(n(2)),
		o = p(n(0)),
		a = p(n(1)),
		r = p(n(3)),
		s = p(n(4)),
		l = p(n(8)),
		u = p(n(65)),
		d = p(n(98)),
		c = p(n(99));

	function p(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var f = function(e) {
		function t() {
			return(0, o.default)(this, t), (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments))
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "execute",
			value: function(e) {
				this.facade.registerProxy(new u.default(u.default.NAME)), this.facade.registerProxy(new d.default(d.default.NAME)), this.facade.registerProxy(new c.default(c.default.NAME))
			}
		}]), t
	}(l.default.SimpleCommand);
	f.NAME = "h5_proxy_command", t.default = f
}, function(e, t, n) {
	n(59), n(55), e.exports = n(149)
}, function(e, t, n) {
	var i = n(17),
		o = n(91);
	e.exports = n(5).getIterator = function(e) {
		var t = o(e);
		if("function" != typeof t) throw TypeError(e + " is not iterable!");
		return i(t.call(e))
	}
}, function(e, t, n) {
	n(151), e.exports = n(5).Object.keys
}, function(e, t, n) {
	var i = n(36),
		o = n(40);
	n(70)("keys", function() {
		return function(e) {
			return o(i(e))
		}
	})
}, function(e, t, n) {
	e.exports = {
		default: n(153),
		__esModule: !0
	}
}, function(e, t, n) {
	n(83), n(55), n(59), n(154), n(165), n(166), e.exports = n(5).Promise
}, function(e, t, n) {
	"use strict";
	var i, o, a, r, s = n(37),
		l = n(10),
		u = n(38),
		d = n(92),
		c = n(14),
		p = n(24),
		f = n(45),
		h = n(155),
		v = n(156),
		y = n(93),
		m = n(94).set,
		E = n(160)(),
		I = n(67),
		_ = n(95),
		g = n(161),
		C = n(96),
		b = l.TypeError,
		w = l.process,
		T = w && w.versions,
		S = T && T.v8 || "",
		H = l.Promise,
		N = "process" == d(w),
		k = function() {},
		O = o = I.f,
		A = !! function() {
			try {
				var e = H.resolve(1),
					t = (e.constructor = {})[n(13)("species")] = function(e) {
						e(k, k)
					};
				return(N || "function" == typeof PromiseRejectionEvent) && e.then(k) instanceof t && 0 !== S.indexOf("6.6") && -1 === g.indexOf("Chrome/66")
			} catch(e) {}
		}(),
		P = function(e) {
			var t;
			return !(!p(e) || "function" != typeof(t = e.then)) && t
		},
		D = function(e, t) {
			if(!e._n) {
				e._n = !0;
				var n = e._c;
				E(function() {
					for(var i = e._v, o = 1 == e._s, a = 0, r = function(t) {
							var n, a, r, s = o ? t.ok : t.fail,
								l = t.resolve,
								u = t.reject,
								d = t.domain;
							try {
								s ? (o || (2 == e._h && M(e), e._h = 1), !0 === s ? n = i : (d && d.enter(), n = s(i), d && (d.exit(), r = !0)), n === t.promise ? u(b("Promise-chain cycle")) : (a = P(n)) ? a.call(n, l, u) : l(n)) : u(i)
							} catch(e) {
								d && !r && d.exit(), u(e)
							}
						}; n.length > a;) r(n[a++]);
					e._c = [], e._n = !1, t && !e._h && U(e)
				})
			}
		},
		U = function(e) {
			m.call(l, function() {
				var t, n, i, o = e._v,
					a = V(e);
				if(a && (t = _(function() {
						N ? w.emit("unhandledRejection", o, e) : (n = l.onunhandledrejection) ? n({
							promise: e,
							reason: o
						}) : (i = l.console) && i.error && i.error("Unhandled promise rejection", o)
					}), e._h = N || V(e) ? 2 : 1), e._a = void 0, a && t.e) throw t.v
			})
		},
		V = function(e) {
			return 1 !== e._h && 0 === (e._a || e._c).length
		},
		M = function(e) {
			m.call(l, function() {
				var t;
				N ? w.emit("rejectionHandled", e) : (t = l.onrejectionhandled) && t({
					promise: e,
					reason: e._v
				})
			})
		},
		x = function(e) {
			var t = this;
			t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), D(t, !0))
		},
		L = function(e) {
			var t, n = this;
			if(!n._d) {
				n._d = !0, n = n._w || n;
				try {
					if(n === e) throw b("Promise can't be resolved itself");
					(t = P(e)) ? E(function() {
						var i = {
							_w: n,
							_d: !1
						};
						try {
							t.call(e, u(L, i, 1), u(x, i, 1))
						} catch(e) {
							x.call(i, e)
						}
					}): (n._v = e, n._s = 1, D(n, !1))
				} catch(e) {
					x.call({
						_w: n,
						_d: !1
					}, e)
				}
			}
		};
	A || (H = function(e) {
		h(this, H, "Promise", "_h"), f(e), i.call(this);
		try {
			e(u(L, this, 1), u(x, this, 1))
		} catch(e) {
			x.call(this, e)
		}
	}, (i = function(e) {
		this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
	}).prototype = n(162)(H.prototype, {
		then: function(e, t) {
			var n = O(y(this, H));
			return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = N ? w.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && D(this, !1), n.promise
		},
		catch: function(e) {
			return this.then(void 0, e)
		}
	}), a = function() {
		var e = new i;
		this.promise = e, this.resolve = u(L, e, 1), this.reject = u(x, e, 1)
	}, I.f = O = function(e) {
		return e === H || e === r ? new a(e) : o(e)
	}), c(c.G + c.W + c.F * !A, {
		Promise: H
	}), n(47)(H, "Promise"), n(163)("Promise"), r = n(5).Promise, c(c.S + c.F * !A, "Promise", {
		reject: function(e) {
			var t = O(this);
			return(0, t.reject)(e), t.promise
		}
	}), c(c.S + c.F * (s || !A), "Promise", {
		resolve: function(e) {
			return C(s && this === r ? H : this, e)
		}
	}), c(c.S + c.F * !(A && n(164)(function(e) {
		H.all(e).catch(k)
	})), "Promise", {
		all: function(e) {
			var t = this,
				n = O(t),
				i = n.resolve,
				o = n.reject,
				a = _(function() {
					var n = [],
						a = 0,
						r = 1;
					v(e, !1, function(e) {
						var s = a++,
							l = !1;
						n.push(void 0), r++, t.resolve(e).then(function(e) {
							l || (l = !0, n[s] = e, --r || i(n))
						}, o)
					}), --r || i(n)
				});
			return a.e && o(a.v), n.promise
		},
		race: function(e) {
			var t = this,
				n = O(t),
				i = n.reject,
				o = _(function() {
					v(e, !1, function(e) {
						t.resolve(e).then(n.resolve, i)
					})
				});
			return o.e && i(o.v), n.promise
		}
	})
}, function(e, t) {
	e.exports = function(e, t, n, i) {
		if(!(e instanceof t) || void 0 !== i && i in e) throw TypeError(n + ": incorrect invocation!");
		return e
	}
}, function(e, t, n) {
	var i = n(38),
		o = n(157),
		a = n(158),
		r = n(17),
		s = n(80),
		l = n(91),
		u = {},
		d = {};
	(t = e.exports = function(e, t, n, c, p) {
		var f, h, v, y, m = p ? function() {
				return e
			} : l(e),
			E = i(n, c, t ? 2 : 1),
			I = 0;
		if("function" != typeof m) throw TypeError(e + " is not iterable!");
		if(a(m)) {
			for(f = s(e.length); f > I; I++)
				if((y = t ? E(r(h = e[I])[0], h[1]) : E(e[I])) === u || y === d) return y
		} else
			for(v = m.call(e); !(h = v.next()).done;)
				if((y = o(v, E, h.value, t)) === u || y === d) return y
	}).BREAK = u, t.RETURN = d
}, function(e, t, n) {
	var i = n(17);
	e.exports = function(e, t, n, o) {
		try {
			return o ? t(i(n)[0], n[1]) : t(n)
		} catch(t) {
			var a = e.return;
			throw void 0 !== a && i(a.call(e)), t
		}
	}
}, function(e, t, n) {
	var i = n(39),
		o = n(13)("iterator"),
		a = Array.prototype;
	e.exports = function(e) {
		return void 0 !== e && (i.Array === e || a[o] === e)
	}
}, function(e, t) {
	e.exports = function(e, t, n) {
		var i = void 0 === n;
		switch(t.length) {
			case 0:
				return i ? e() : e.call(n);
			case 1:
				return i ? e(t[0]) : e.call(n, t[0]);
			case 2:
				return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
			case 3:
				return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
			case 4:
				return i ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
		}
		return e.apply(n, t)
	}
}, function(e, t, n) {
	var i = n(10),
		o = n(94).set,
		a = i.MutationObserver || i.WebKitMutationObserver,
		r = i.process,
		s = i.Promise,
		l = "process" == n(41)(r);
	e.exports = function() {
		var e, t, n, u = function() {
			var i, o;
			for(l && (i = r.domain) && i.exit(); e;) {
				o = e.fn, e = e.next;
				try {
					o()
				} catch(i) {
					throw e ? n() : t = void 0, i
				}
			}
			t = void 0, i && i.enter()
		};
		if(l) n = function() {
			r.nextTick(u)
		};
		else if(!a || i.navigator && i.navigator.standalone)
			if(s && s.resolve) {
				var d = s.resolve(void 0);
				n = function() {
					d.then(u)
				}
			} else n = function() {
				o.call(i, u)
			};
		else {
			var c = !0,
				p = document.createTextNode("");
			new a(u).observe(p, {
				characterData: !0
			}), n = function() {
				p.data = c = !c
			}
		}
		return function(i) {
			var o = {
				fn: i,
				next: void 0
			};
			t && (t.next = o), e || (e = o, n()), t = o
		}
	}
}, function(e, t, n) {
	var i = n(10).navigator;
	e.exports = i && i.userAgent || ""
}, function(e, t, n) {
	var i = n(26);
	e.exports = function(e, t, n) {
		for(var o in t) n && e[o] ? e[o] = t[o] : i(e, o, t[o]);
		return e
	}
}, function(e, t, n) {
	"use strict";
	var i = n(10),
		o = n(5),
		a = n(23),
		r = n(20),
		s = n(13)("species");
	e.exports = function(e) {
		var t = "function" == typeof o[e] ? o[e] : i[e];
		r && t && !t[s] && a.f(t, s, {
			configurable: !0,
			get: function() {
				return this
			}
		})
	}
}, function(e, t, n) {
	var i = n(13)("iterator"),
		o = !1;
	try {
		var a = [7][i]();
		a.return = function() {
			o = !0
		}, Array.from(a, function() {
			throw 2
		})
	} catch(e) {}
	e.exports = function(e, t) {
		if(!t && !o) return !1;
		var n = !1;
		try {
			var a = [7],
				r = a[i]();
			r.next = function() {
				return {
					done: n = !0
				}
			}, a[i] = function() {
				return r
			}, e(a)
		} catch(e) {}
		return n
	}
}, function(e, t, n) {
	"use strict";
	var i = n(14),
		o = n(5),
		a = n(10),
		r = n(93),
		s = n(96);
	i(i.P + i.R, "Promise", {
		finally: function(e) {
			var t = r(this, o.Promise || a.Promise),
				n = "function" == typeof e;
			return this.then(n ? function(n) {
				return s(t, e()).then(function() {
					return n
				})
			} : e, n ? function(n) {
				return s(t, e()).then(function() {
					throw n
				})
			} : e)
		}
	})
}, function(e, t, n) {
	"use strict";
	var i = n(14),
		o = n(67),
		a = n(95);
	i(i.S, "Promise", {
		try: function(e) {
			var t = o.f(this),
				n = a(e);
			return(n.e ? t.reject : t.resolve)(n.v), t.promise
		}
	})
}, function(e, t, n) {
	var i = n(5),
		o = i.JSON || (i.JSON = {
			stringify: JSON.stringify
		});
	e.exports = function(e) {
		return o.stringify.apply(o, arguments)
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = c(n(2)),
		o = c(n(0)),
		a = c(n(1)),
		r = c(n(3)),
		s = c(n(4)),
		l = c(n(8)),
		u = c(n(169)),
		d = c(n(7));

	function c(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var p = function(e) {
		function t() {
			return(0, o.default)(this, t), (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments))
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "execute",
			value: function(e) {
				d.default.debug("寮€濮嬫敞鍐� H5ViewMediator"), this.facade.registerMediator(new u.default(u.default.NAME))
			}
		}]), t
	}(l.default.SimpleCommand);
	p.NAME = "h5_mediator_command", t.default = p
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = m(n(2)),
		o = m(n(0)),
		a = m(n(1)),
		r = m(n(3)),
		s = m(n(4)),
		l = m(n(8)),
		u = n(6),
		d = m(n(170)),
		c = m(n(174)),
		p = m(n(176)),
		f = m(n(178)),
		h = m(n(182)),
		v = m(n(185)),
		y = m(n(7));

	function m(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var E = function(e) {
		function t(e) {
			return(0, o.default)(this, t), (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e))
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "onRegister",
			value: function() {
				y.default.debug("寮€濮嬫敞鍐� MobileSkinMediator || MobileVideoMediator || MobileAdvMediator"), u.H5Common.isMobile ? (this.facade.registerMediator(new d.default(d.default.NAME)), this.facade.registerMediator(new c.default(c.default.NAME)), this.facade.registerMediator(new p.default(p.default.NAME))) : (this.facade.registerMediator(new f.default(f.default.NAME)), this.facade.registerMediator(new h.default(h.default.NAME)), this.facade.registerMediator(new v.default(v.default.NAME)))
			}
		}]), t
	}(l.default.Mediator);
	E.NAME = "h5_view_mediator", t.default = E
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = m(n(2)),
		o = m(n(0)),
		a = m(n(1)),
		r = m(n(3)),
		s = m(n(4)),
		l = m(n(8)),
		u = m(n(171)),
		d = n(19),
		c = n(18),
		p = m(n(15)),
		f = n(16),
		h = n(11),
		v = (n(31), n(6)),
		y = m(n(7));

	function m(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var E = function(e) {
		function t(e) {
			return(0, o.default)(this, t), (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e))
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "onRegister",
			value: function() {
				y.default.debug("娉ㄥ唽MobileSkinComponent"), this.setViewComponent(new u.default), this.viewComponent.addEventListener(d.H5ComponentEvent.START_PLAY, this.onSkinHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.CHANGE_PLAY_STATUS, this.onSkinHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.SEEK, this.onSkinHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.FULLSCREEN, this.onSkinHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.SKIN_ERROR, this.onSkinHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.VIDEO_BIP, this.onSkinHandler, this), this.viewComponent.init()
			}
		}, {
			key: "listNotificationInterests",
			value: function() {
				return [c.H5Notification.VIDEO_SHOW_START_PLAY_BTN, c.H5Notification.EXTERNAL_NOTICATION, c.H5Notification.VIDEO_STATE, c.H5Notification.VIDEO_UPDATE, c.H5Notification.VIDEO_WAITING, c.H5Notification.PLAY_FAILED, c.H5Notification.VIDEO_NEXT, c.H5Notification.PLAY_ERROR, c.H5Notification.VIDEO_ERROR, c.H5Notification.VIDEO_HIDE_UI, c.H5Notification.PLAY_SUCCESS, c.ExternalApiType.ADV_DATA_SUCCESS, c.ExternalApiType.ADV_NEXT, c.ExternalApiType.ADV_END, c.ExternalApiType.ADV_ERROR, c.H5Notification.VIDEO_RESET_UI]
			}
		}, {
			key: "handleNotification",
			value: function(e) {
				var t = e.getBody();
				switch(e.getName()) {
					case c.H5Notification.EXTERNAL_NOTICATION:
						var n = e.getType();
						this.externalHandler(n, t);
						break;
					case c.H5Notification.VIDEO_UPDATE:
						this.viewComponent.updateProgress(t);
						break;
					case c.H5Notification.VIDEO_STATE:
						this.viewComponent.togglePlayBtn(t.status);
						break;
					case c.H5Notification.VIDEO_SHOW_START_PLAY_BTN:
						this.viewComponent.showStartBtn();
						break;
					case c.H5Notification.VIDEO_WAITING:
						this.viewComponent.showLoading();
						break;
					case c.H5Notification.PLAY_FAILED:
					case c.H5Notification.PLAY_ERROR:
					case c.H5Notification.VIDEO_ERROR:
						this.viewComponent.showError(t);
						break;
					case c.H5Notification.VIDEO_NEXT:
					case c.ExternalApiType.ADV_NEXT:
					case c.ExternalApiType.ADV_END:
						this.viewComponent.nextVideo();
						break;
					case c.H5Notification.VIDEO_HIDE_UI:
						this.viewComponent.startbtnHandler();
						break;
					case c.H5Notification.PLAY_SUCCESS:
					case c.H5Notification.VIDEO_RESET_UI:
						this.viewComponent.initUIByResult(!0);
						break;
					case c.ExternalApiType.ADV_ERROR:
				}
			}
		}, {
			key: "onSkinHandler",
			value: function(e) {
				y.default.debug(e);
				var t = e.data;
				switch(e.type) {
					case d.H5ComponentEvent.START_PLAY:
						this.sendNotification(c.H5Notification.SKIN_START_PLAY);
						break;
					case d.H5ComponentEvent.CHANGE_PLAY_STATUS:
						this.sendNotification(c.H5Notification.SKIN_CHANGE_PLAY_STATUS, t);
						break;
					case d.H5ComponentEvent.SEEK:
						this.sendNotification(c.H5Notification.SKIN_SEEK, t);
						break;
					case d.H5ComponentEvent.FULLSCREEN:
						this.sendNotification(c.H5Notification.SKIN_FULLSCREEN, t);
						break;
					case d.H5ComponentEvent.VIDEO_BIP:
						p.default.postMessage(f.ExternalEvent.VIDEO_BIP, t)
				}
			}
		}, {
			key: "externalHandler",
			value: function(e, t) {
				switch(y.default.debug("澶栭儴璋冪敤鎺ュ彛skin" + e + "," + t), e) {
					case c.ExternalApiType.VIDEO_PAUSE:
						this.viewComponent.playBtnHandler(h.playStatus.PAUSE), v.commonFun.isPlayAdv() && this.viewComponent.changeBigBtn();
						break;
					case c.ExternalApiType.VIDEO_SEEK:
						this.viewComponent.seekProgress(t.posi);
						break;
					case c.ExternalApiType.SKIN_SHOW_ERROR_UI:
						if(t && t.params) {
							var n = {
								code: "NOT_RELEASED" == t.params.code ? "601" : "",
								msg: t.params.errorMsg || ""
							};
							n.code && this.viewComponent.showError(n)
						}
				}
			}
		}, {
			key: "onRemove",
			value: function() {
				this.setViewComponent(null)
			}
		}]), t
	}(l.default.Mediator);
	E.NAME = "mobile_skin_mediator", t.default = E
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = I(n(2)),
		o = I(n(0)),
		a = I(n(1)),
		r = I(n(3)),
		s = I(n(4)),
		l = n(32),
		u = I(n(34)),
		d = n(11),
		c = n(19),
		p = n(6),
		f = n(173),
		h = I(n(33)),
		v = n(27),
		y = I(n(15)),
		m = I(n(7)),
		E = n(16);

	function I(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	I(n(97));
	var _ = function(e) {
		function t(e) {
			(0, o.default)(this, t);
			var n = (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e));
			n.createView(p.H5Common.container), n.container = (0, l.$)(p.H5Common.container).find(".mod-player");
			var a = n.container;
			return n.startUI = a.children(".start-wraper"), n.posterUI = n.startUI.children(".player-poster"), n.startLoadingUI = n.startUI.children(".player-loading"), n.startFreeUI = n.startUI.children(".start-free"), n.bigPlayerBtn = n.startFreeUI.children(".player-start-btn"), n.startPayUI = n.startUI.children(".start-pay"), n.startPayPlayBtn = n.startPayUI.find(".shikan-btn"), n.startOpenVipBtn = n.startPayUI.find(".open-vip-btn"), n.tipsUI = a.children(".player-tips"), n.loadingUI = n.tipsUI.children(".player-tips-loading"), n.tipOpenVipBtn = n.tipsUI.children(".tip-open-vip-btn"), n.controlMiniUI = a.children(".control-mini-wrapper"), n.miniProgressLoadUI = n.controlMiniUI.find(".progress-control-load"), n.miniProgressPlayUI = n.controlMiniUI.find(".progress-control-play"), n.controlUI = a.children(".control-wrapper"), n.leftUI = n.controlUI.children(".left-control"), n.playerBtn = n.leftUI.children(".player-btn"), n.rightUI = n.controlUI.children(".right-control"), n.fullScreenBtn = n.rightUI.children(".fullscreen-btn"), n.progressUI = n.controlUI.children(".progress-control"), n.progressListUI = n.progressUI.children(".progress-control-list"), n.progressBtn = n.progressListUI.find(".progress-control-btn"), n.progressLoadUI = n.progressListUI.find(".progress-control-load"), n.progressPlayUI = n.progressListUI.find(".progress-control-play"), n.startTimeUI = n.progressUI.children(".cur-time"), n.endTimeUI = n.progressUI.children(".end-time"), n.liveProgressUI = n.controlUI.children(".live-progress-control"), n.liveTimeUI = n.liveProgressUI.children(".live-time"), n.endUI = a.children(".end-wrapper"), n.errorUI = n.endUI.children(".error-wrapper"), n.errorCodeUI = n.errorUI.children(".error-id"), n.recoUI = n.endUI.children(".reco-wrapper"), n.playBtnStatus = d.playStatus.PLAYING, n.hideInter = -1, n
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "init",
			value: function() {
				this.bindAction();
				var e = d.playerInfo.poster;
				e && this.posterUI.children("img").attr("src", e), m.default.debug("imgSrc=" + e), this.posterUI.show(), this.startLoadingUI.show(), this.startFreeUI.hide(), this.startPayUI.hide(), this.tipsUI.hide(), this.tipOpenVipBtn.hide(), this.controlVisible(!1), this.controlMiniUI.css("visibility", "hidden"), this.endUI.hide(), this.startOpenVipBtn.show(), d.playerInfo.playType == d.playType.LIVE ? (this.liveProgressUI.show(), this.progressUI.hide()) : (this.progressUI.show(), this.liveProgressUI.hide());
				var t = p.H5Common.skinCfg;
				t && (0 == t.fullScreenBtn && (this.fullScreenBtn.hide(), this.progressUI.addClass("width-more"), this.progressListUI.addClass("width-more")), !1 === t.rightVipTip && this.tipOpenVipBtn.css("visibility", "hidden")), p.H5Common.startBtnVipTip && p.H5Common.startBtnVipTip.text && (!1 === p.H5Common.startBtnVipTip.show ? this.startOpenVipBtn.hide() : this.startOpenVipBtn.find("span").html(p.H5Common.startBtnVipTip.text)), p.H5Common.startBtnTip && this.startPayPlayBtn.find("span").html(p.H5Common.startBtnTip), p.H5Common.startTip && this.startPayUI.find(".pay-inner .text").html(p.H5Common.startTip)
			}
		}, {
			key: "createView",
			value: function(e) {
				(0, l.$)(e).append('<section class="mod-player"></section>'), this.container = (0, l.$)(e).find(".mod-player"), this.container.append(f.startHtml), this.container.append(f.controlHtml), this.container.append(f.controlMiniHtml), this.container.append(f.tipsHtml), this.container.append(f.videoHtml), this.container.append(f.endHtml)
			}
		}, {
			key: "bindAction",
			value: function() {
				var e = this;
				this.container.on("click", function(t) {
					return e.showControl(t)
				}), this.bigPlayerBtn.on("click", function(t) {
					return e.startbtnHandler(t)
				}), this.startPayPlayBtn.on("click", function(t) {
					return e.startbtnHandler(t)
				}), this.startOpenVipBtn.on("click", function(t) {
					y.default.postMessage(E.ExternalEvent.VIDEO_BUY_VIP), p.H5Common.startBtnVipTip && p.H5Common.startBtnVipTip.link ? e.openVip(t, p.H5Common.startBtnVipTip.link) : e.openVip(t)
				}), this.playerBtn.on("click", function(t) {
					return e.playBtnHandler()
				}), this.progressUI.on("click", ".progress-control-list", function(t) {
					return e.progressClickHandler(t)
				}), this.progressBtn.on("touchstart", function(t) {
					return e.progressDragHandler(t)
				}), this.progressBtn.on("touchmove", function(t) {
					return e.progressDragHandler(t)
				}), this.progressBtn.on("touchend", function(t) {
					return e.progressDragHandler(t)
				}), this.rightUI.on("click", ".fullscreen-btn", function(t) {
					return e.fullBtnHandler(t)
				}), this.errorUI.on("click", ".btns", function(t) {
					return e.errorBtnHandler(t)
				}), this.tipOpenVipBtn.on("click", function(t) {
					return e.openVip(t)
				}), this.controlUI.on("webkitAnimationStart animationstart webkitAnimationEnd animationend", function(t) {
					return e.onFadeHandler(t)
				})
			}
		}, {
			key: "showStartBtn",
			value: function() {
				this.startLoadingUI.hide(), this.endUI.hide(), this.startUI.show(), p.H5Common.pay && !v.userInfo.isVip ? this.startPayUI.show() : (this.startFreeUI.show(), this.tipOpenVipBtn.hide())
			}
		}, {
			key: "showLoading",
			value: function() {
				d.playerInfo.start && (!("none" == this.tipsUI.css("display")) || this.tipsUI.show(), this.loadingUI.show())
			}
		}, {
			key: "startbtnHandler",
			value: function(e) {
				if(e && e.stopPropagation(), d.playerInfo.start) this.hideInter = -1, this.showControl(), this.startFreeUI.hide(), this.bigPlayerBtn.hide(), this.dispatchEvent(c.H5ComponentEvent.CHANGE_PLAY_STATUS, {
					status: d.playStatus.PLAYING
				});
				else {
					this.posterUI.hide(), p.H5Common.pay ? this.startPayUI.hide() : (this.startFreeUI.hide(), this.bigPlayerBtn.hide()), this.endUI.hide();
					var t = d.playerInfo.rateType;
					p.H5Common.needClothHat && 0 == p.H5Common.needClothHat[t] || this.startLoadingUI.show(), this.dispatchEvent(c.H5ComponentEvent.START_PLAY);
					var n = {
						dt: "act",
						data: {
							type: "startBtn",
							cid: d.playerInfo.cid
						}
					};
					this.sendBip(n)
				}
			}
		}, {
			key: "hideUI",
			value: function() {
				this.startUI.show(), this.posterUI.hide(), this.startPayUI.hide(), this.startFreeUI.hide(), this.bigPlayerBtn.hide(), this.tipsUI.hide(), this.controlVisible(!1), this.endUI.hide()
			}
		}, {
			key: "playBtnHandler",
			value: function(e) {
				m.default.debug("<<<<鍒囨崲鎾斁鐘舵€�<<<<" + e), this.togglePlayBtn(e), console.log(this.playBtnStatus, "this.playBtnStatus"), this.dispatchEvent(c.H5ComponentEvent.CHANGE_PLAY_STATUS, {
					status: this.playBtnStatus
				})
			}
		}, {
			key: "togglePlayBtn",
			value: function(e) {
				if(console.log("xxxxxxxxxxxxxxxxxx", e), e != d.playStatus.END) {
					var t = this.playerBtn,
						n = t.find(".btn-play"),
						i = t.find(".btn-pause");
					if(this.loadingUI.hide(), e) {
						if(this.playBtnStatus = e, e == d.playStatus.PAUSE && n.length) return void this.changeBigBtn();
						if(e == d.playStatus.PLAYING && i.length) return void this.changeBigBtn()
					} else this.playBtnStatus = n.length ? d.playStatus.PLAYING : d.playStatus.PAUSE;
					var o = t.find("i");
					m.default.debug("this.togglePlayBtn=" + this.playBtnStatus), this.playBtnStatus == d.playStatus.PAUSE ? o.removeClass("btn-pause").addClass("btn-play") : this.playBtnStatus == d.playStatus.PLAYING && o.removeClass("btn-play").addClass("btn-pause"), this.changeBigBtn()
				} else this.showEnd()
			}
		}, {
			key: "changeBigBtn",
			value: function() {
				this.playBtnStatus == d.playStatus.PLAYING ? (this.startLoadingUI.hide(), this.posterUI.hide(), this.startFreeUI.hide(), this.bigPlayerBtn.hide(), p.H5Common.pay && !v.userInfo.isVip && (this.tipsUI.show(), this.tipOpenVipBtn.show())) : (this.startUI.show(), this.startFreeUI.show(), this.bigPlayerBtn.show())
			}
		}, {
			key: "progressClickHandler",
			value: function(e) {
				e && e.stopPropagation();
				var t = e.offsetX;
				this.progressBtn.css("left", t), this.seekTime(t)
			}
		}, {
			key: "seekTime",
			value: function(e) {
				console.log(e);
				var t = this.progressListUI.width(),
					n = d.playerInfo.duration,
					i = e / t,
					o = Math.floor(n * i);
				this.dispatchEvent(c.H5ComponentEvent.SEEK, {
					time: o
				})
			}
		}, {
			key: "seekProgress",
			value: function(e) {
				var t = this.progressListUI.width(),
					n = e / d.playerInfo.duration * t;
				this.seekTime(n)
			}
		}, {
			key: "progressDragHandler",
			value: function(e) {
				e && e.stopPropagation();
				var t = this.progressBtn.position().left,
					n = this.progressListUI.width();
				"touchstart" == e.type || ("touchmove" == e.type ? ((t = e.touches[0].clientX - this.progressListUI.offset().left) > n ? t = n : t < 0 && (t = 0), this.progressBtn.css("left", t)) : "touchend" == e.type && (t > n ? t = n : t < 0 && (t = 0), this.seekTime(t)))
			}
		}, {
			key: "fullBtnHandler",
			value: function(e) {
				this.dispatchEvent(c.H5ComponentEvent.FULLSCREEN, !0)
			}
		}, {
			key: "errorBtnHandler",
			value: function(e) {
				e && e.stopPropagation();
				var t = (0, l.$)(e.currentTarget),
					n = t.children(".refresh-btn"),
					i = t.children(".open-vip-btn"),
					o = t.children(".open-app"),
					a = t.children(".other-btn"),
					r = t.children(".login");
				n.length > 0 && window.location.reload(), i.length > 0 && this.openVip(), o.length > 0 && this.openApp(), a.length > 0 && this.openMzhan(), r.length > 0 && y.default.postMessage(E.ExternalEvent.VIDEO_LOGIN)
			}
		}, {
			key: "updateProgress",
			value: function(e) {
				if(this.startLoadingUI.hide(), this.loadingUI.hide(), !p.commonFun.isPlayAdv() && d.playerInfo.status != d.playStatus.END)
					if(d.playerInfo.playType == d.playType.VOD || d.playerInfo.playType == d.playType.HUIKAN) {
						var t = h.default.formatDate(new Date(Math.floor(1e3 * e.start)), "mm:ss"),
							n = h.default.formatDate(new Date(Math.floor(1e3 * e.end)), "mm:ss"),
							i = e.posi,
							o = h.default.formatDate(new Date(Math.floor(1e3 * i)), "mm:ss");
						!this.initProgress && e.posi > 0 ? (this.initProgress = !0, this.startTimeUI.text(t), this.endTimeUI.text(n), p.H5Common.pay && !v.userInfo.isVip && this.tipOpenVipBtn.show(), this.showControl()) : (this.startTimeUI.text(o), this.endTimeUI.text(n));
						var a = 100 * e.posi / (e.end - e.start);
						this.progressPlayUI.css("width", a + "%"), this.miniProgressPlayUI.css("width", a + "%");
						var r = this.progressListUI.width() * a / 100;
						if(this.progressBtn.css("left", r), e.buffered > 0) {
							var s = 100 * e.buffered / (e.end - e.start);
							this.progressLoadUI.css("width", s + "%"), this.miniProgressLoadUI.css("width", s + "%")
						}
					} else if(d.playerInfo.playType == d.playType.LIVE) {
					var l = h.default.formatDate(new Date(Math.floor(e.live)), "hh:mm:ss");
					this.initProgress || (this.initProgress = !0, this.showControl()), this.liveTimeUI.text(l)
				}
			}
		}, {
			key: "showControl",
			value: function(e) {
				this.initProgress && d.playerInfo.status != d.playStatus.END && "none" == this.endUI.css("display") && ("0px" == this.controlUI.css("bottom") ? this.hideInter < 0 && this.showControlAnimation() : (this.controlVisible(!0), this.showControlAnimation()))
			}
		}, {
			key: "controlVisible",
			value: function(e) {
				var t = "0px" == this.controlUI.css("bottom"),
					n = "none" != this.tipOpenVipBtn.css("display");
				e ? t || (this.controlUI.removeClass("fadehide").addClass("fadeshow"), n && this.tipOpenVipBtn.removeClass("vip-movedown").addClass("vip-moveup")) : t && (this.controlUI.removeClass("fadeshow").addClass("fadehide"), n && this.tipOpenVipBtn.removeClass("vip-moveup").addClass("vip-movedown"))
			}
		}, {
			key: "showControlAnimation",
			value: function() {
				var e = this;
				this.hideInter = setTimeout(function() {
					e.hideInter = -1, e.playBtnStatus !== d.playStatus.PAUSE && e.controlVisible(!1)
				}, 5e3)
			}
		}, {
			key: "openApp",
			value: function() {
				try {
					var e = d.playerInfo.playType == d.playType.VOD ? {
						cId: d.playerInfo.cid
					} : {
						contId: d.playerInfo.cid
					};
					h.default.goToApp(e)
				} catch(e) {
					m.default.debug("<<<<鍚姩app鍑洪敊")
				}
			}
		}, {
			key: "openVip",
			value: function(e, t) {
				e && e.stopPropagation();
				var n = t || "//m.miguvideo.com/mgs/msite/prd/memberCenter.html";
				window.open(n, "_top"), this.sendBip({
					dt: "act",
					data: {
						type: "openVip"
					}
				})
			}
		}, {
			key: "openMzhan",
			value: function() {
				window.open("//www.miguvideo.com/mgs/website/prd/index.html", "_top")
			}
		}, {
			key: "onFadeHandler",
			value: function(e) {
				if(this.initProgress && d.playerInfo.playType != d.playType.LIVE && !p.commonFun.isPlayAdv()) {
					var t = "0px" == this.controlUI.css("bottom"),
						n = e.type;
					"fadeout" != e.animationName || "animationend" != n && "webkitAnimationEnd" != n ? "fadein" != e.animationName || "animationstart" != n && "webkitAnimationStart" != n || t || this.controlMiniUI.css("visibility", "hidden") : t || this.controlMiniUI.css("visibility", "visible")
				}
			}
		}, {
			key: "initUIByResult",
			value: function(e) {
				e && (d.playerInfo.playType == d.playType.LIVE ? (this.liveProgressUI.show(), this.progressUI.hide()) : (this.progressUI.show(), this.liveProgressUI.hide()))
			}
		}, {
			key: "nextVideo",
			value: function() {
				if(!d.playerInfo.start) {
					var e = d.playerInfo.rateType;
					p.H5Common.needClothHat && 0 == p.H5Common.needClothHat[e] || this.startLoadingUI.show(), this.bigPlayerBtn.hide(), this.startFreeUI.hide(), this.endUI.hide(), this.posterUI.hide(), this.initProgress = !1
				}
			}
		}, {
			key: "showEnd",
			value: function() {
				this.startUI.hide(), this.tipsUI.hide(), this.controlVisible(!1), this.recoUI.hide(), this.startUI.show(), this.posterUI.show(), this.bigPlayerBtn.show(), this.initProgress = !1, this.controlMiniUI.css("visibility", "hidden")
			}
		}, {
			key: "showError",
			value: function(e) {
				var t = 0,
					n = "";
				if(e) {
					if(t = parseInt(e.code), d.playerInfo.errorObj.cid == d.playerInfo.cid && 601 == d.playerInfo.errorObj.errorID) return;
					d.playerInfo.errorObj = {
						cid: d.playerInfo.cid,
						errorID: t
					}, n = e.msg || ""
				}
				var i = "refresh-btn",
					o = n || "鑺傜洰鍑洪敊浜唦",
					a = "鍒锋柊鑺傜洰",
					r = null,
					s = !0,
					l = !0;
				switch(t) {
					case 401:
						window.mgUserInfo ? (i = "login", o = "褰撳墠鎾斁鍐呭璇风櫥褰曞悗鍐嶈鐪�", a = "绔嬪嵆鐧诲綍", s = !1) : (i = "open-app", o = "鍥犵増鏉冮檺鍒讹紝璇峰墠寰€APP瑙傜湅瀹屾暣鍐呭", a = p.H5Common.product && p.H5Common.product.name == p.H5Common.MIGU_MOVIE ? "鍓嶅線鍜挄褰遍櫌" : "鍓嶅線鍜挄瑙嗛", s = !1);
						break;
					case 411:
					case 501:
						i = "open-app", o = "鍥犵増鏉冮檺鍒讹紝璇峰墠寰€APP瑙傜湅瀹屾暣鍐呭", a = p.H5Common.product && p.H5Common.product.name == p.H5Common.MIGU_MOVIE ? "鍓嶅線鍜挄褰遍櫌" : "鍓嶅線鍜挄瑙嗛", s = !1;
						break;
					case 409:
						i = "open-vip-btn", o = "璇ュ唴瀹逛负浠樿垂鍐呭锛岃寮€閫氫細鍛樿鐪�", a = "寮€閫氫細鍛�", r = "vip-icon", s = !1;
						break;
					case 400:
					case 410:
						i = "other-btn", o = "鐪熸姳姝夛紝鎮ㄨ鎵剧殑鑺傜洰濂藉儚澶辫釜浜�", a = "鐪嬬湅鍏朵粬鑺傜洰";
						break;
					case 404:
						if(h.default.isInApp()) {
							i = "other-btn", o = "鐪熸姳姝夛紝鎮ㄨ鎵剧殑鑺傜洰濂藉儚澶辫釜浜�", a = "鐪嬬湅鍏朵粬鑺傜洰", l = !1;
							break
						}
						i = "open-app", o = "鐪熸姳姝夛紝鎮ㄨ鎵剧殑鑺傜洰濂藉儚澶辫釜浜嗭紝鍓嶅線APP瑙傜湅鍚�", a = p.H5Common.product && p.H5Common.product.name == p.H5Common.MIGU_MOVIE ? "鍓嶅線鍜挄褰遍櫌" : "鍓嶅線鍜挄瑙嗛", s = !1;
						break;
					case 412:
						i = "open-vip-btn", o = d.playerInfo.playType == d.playType.VOD ? "璇曠湅宸茬粡缁撴潫浜嗗摝锛屽紑閫氫細鍛樿鐪嬪畬鏁村唴瀹�" : "寮€閫氫細鍛樿鐪嬪畬鏁村唴瀹�", a = "浠樿垂鐪嬪畬鏁寸増", r = "vip-icon", s = !1;
						break;
					case 2e3:
						i = "refresh-btn", o = "鐪熷按灏紝濂藉儚鍑轰簡鐐归棶棰橈紝鍒锋柊鍚庡啀璇曡瘯鐪嬪摝锝�", a = "绔嬪嵆鍒锋柊";
						break;
					case 2001:
						i = "open-app", o = "褰撳墠鍐呭闇€瑕佺敤鍒告挱鏀撅紝璇峰墠寰€APP瑙傜湅瀹屾暣鍐呭", a = p.H5Common.product && p.H5Common.product.name == p.H5Common.MIGU_MOVIE ? "鍓嶅線鍜挄褰遍櫌" : "鍓嶅線鍜挄瑙嗛", s = !1;
						break;
					case 601:
						i = "open-app", a = "鐪嬬湅鍏朵粬鑺傜洰", s = !1
				}
				this.setErrorUI({
					id: t,
					className: i,
					des: o,
					btnText: a,
					iconClass: r,
					showErrorID: s,
					showBtn: l
				}), y.default.postMessage(E.ExternalEvent.VIDEO_ERROR, e)
			}
		}, {
			key: "setErrorUI",
			value: function(e) {
				if(e.id) {
					this.startUI.hide(), this.tipsUI.hide(), this.controlVisible(!1), this.endUI.show(), this.recoUI.hide();
					var t = e.id,
						n = e.className,
						i = e.des,
						o = e.btnText,
						a = e.iconClass,
						r = this.errorUI.find(".text"),
						s = this.errorUI.find(".btns").children("div");
					r.text(i), s.removeClass().addClass(n), a && s.find("i").removeClass().addClass("vip-icon"), s.children("span").text(o), e.showErrorID ? (this.errorCodeUI.show(), this.errorCodeUI.children("span").text(t)) : this.errorCodeUI.hide(), e.showBtn ? s.show() : s.hide()
				}
			}
		}, {
			key: "sendBip",
			value: function(e) {
				this.dispatchEvent(c.H5ComponentEvent.VIDEO_BIP, e)
			}
		}]), t
	}(u.default);
	t.default = _
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Events = void 0;
	var i = s(n(35)),
		o = s(n(43)),
		a = s(n(0)),
		r = s(n(1));

	function s(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}(t.Events = function() {
		function e() {
			(0, a.default)(this, e), this.initEvent()
		}
		return(0, r.default)(e, [{
			key: "on",
			value: function(t, n, i) {
				return e.eventsApi(this, "on", t, [n, i]) && n ? (this._events || (this._events = {}), (this._events[t] || (this._events[t] = [])).push({
					callback: n,
					context: i,
					ctx: i || this
				}), this) : this
			}
		}, {
			key: "once",
			value: function(t, n, i) {
				if(!e.eventsApi(this, "once", t, [n, i]) || !n) return this;
				var o = this,
					a = undercore_once(function() {
						o.off(t, a), n.apply(this, arguments)
					});
				return a._callback = n, this.on(t, a, i)
			}
		}, {
			key: "off",
			value: function(t, n, i) {
				var a, r, s, l, u, d, c, p;
				if(!this._events || !e.eventsApi(this, "off", t, [n, i])) return this;
				if(!t && !n && !i) return this._events = {}, this;
				for(u = 0, d = (l = t ? [t] : (0, o.default)(this._events)).length; u < d; u++)
					if(t = l[u], s = this._events[t]) {
						if(this._events[t] = a = [], n || i)
							for(c = 0, p = s.length; c < p; c++) r = s[c], (n && n !== r.callback && n !== r.callback._callback || i && i !== r.context) && a.push(r);
						a.length || delete this._events[t]
					}
				return this
			}
		}, {
			key: "trigger",
			value: function(t) {
				if(!this._events) return this;
				var n = {
					type: t,
					data: arguments.length <= 1 ? void 0 : arguments[1]
				};
				if(!e.eventsApi(this, "trigger", t, n)) return this;
				var i = this._events[t],
					o = this._events.all;
				return i && e.triggerEvents(i, n), o && e.triggerEvents(o, n), this
			}
		}, {
			key: "stopListening",
			value: function(t, n, o) {
				var a = this._listeningTo;
				if(!a) return this;
				var r = !n && !o;
				for(var s in o || "object" !== (void 0 === n ? "undefined" : (0, i.default)(n)) || (o = this), t && ((a = {})[t._listenId] = t), a)(t = a[s]).off(n, o, this), (r || e.isEmpty(t._events)) && delete this._listeningTo[s];
				return this
			}
		}, {
			key: "undercore_once",
			value: function(e) {
				for(var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
				var o, a = !1;
				return function() {
					return a ? o : (a = !0, o = e.apply(this, n), e = null, o)
				}
			}
		}, {
			key: "isEmpty",
			value: function(e) {
				if(null == e) return !0;
				if(Array.isArray(e) || this.isString(e)) return 0 === e.length;
				for(var t in e)
					if(this.hasKey(e, t)) return !1;
				return !0
			}
		}, {
			key: "hasKey",
			value: function(e) {
				return null != e && Object.prototype.hasOwnProperty.call(e, key)
			}
		}, {
			key: "isString",
			value: function(e) {
				return "string" == typeof e
			}
		}, {
			key: "initEvent",
			value: function() {
				var t = {
						listenTo: "on",
						listenToOnce: "once"
					},
					n = function(n) {
						var o = t[n];
						e[n] = function(t, n, a) {
							return(this._listeningTo || (this._listeningTo = {}))[t._listenId || (t._listenId = e.ID++)] = t, a || "object" !== (void 0 === n ? "undefined" : (0, i.default)(n)) || (a = this), t[o](n, a, this), this
						}
					};
				for(var o in t) n(o)
			}
		}], [{
			key: "eventsApi",
			value: function(e, t, n, o) {
				var a = /\s+/;
				if(!n) return !0;
				if("object" === (void 0 === n ? "undefined" : (0, i.default)(n))) {
					for(var r in n) e[t].apply(e, [r, n[r]].concat(o));
					return !1
				}
				if(a.test(n)) {
					for(var s = n.split(a), l = 0, u = s.length; l < u; l++) e[t].apply(e, [s[l]].concat(o));
					return !1
				}
				return !0
			}
		}, {
			key: "triggerEvents",
			value: function(e) {
				for(var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
				var o, a = -1,
					r = e.length,
					s = n[0],
					l = n[1],
					u = n[2];
				switch(n.length) {
					case 0:
						for(; ++a < r;)(o = e[a]).callback.call(o.ctx);
						return;
					case 1:
						for(; ++a < r;)(o = e[a]).callback.call(o.ctx, s);
						return;
					case 2:
						for(; ++a < r;)(o = e[a]).callback.call(o.ctx, s, l);
						return;
					case 3:
						for(; ++a < r;)(o = e[a]).callback.call(o.ctx, s, l, u);
						return;
					default:
						for(; ++a < r;)(o = e[a]).callback.apply(o.ctx, n)
				}
			}
		}]), e
	}()).ID = 0
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.startHtml = '<div class="start-wraper"><div class="start-free"><div class="player-start-btn"><div class="btn-bg"><div class="start-btn"></div></div></div></div><div class="start-pay"><div class="pay-inner"><div class="text">浼氬憳涓撲韩鍐呭,寮€閫氫細鍛樺厤璐硅鐪嬪摝~</div><div class="btns"><div class="shikan-btn"><i class="play-icon"></i><span>璇曠湅6鍒嗛挓</span></div><div class="open-vip-btn"><i class="vip-icon"></i><span>寮€閫氫細鍛�</span></div></div></div></div><div class="player-loading"><i class="start-loading"></i><div class="text">鍏ㄥ姏鍔犺浇涓�</div></div><div class="player-poster"><img></div></div>', t.videoHtml = '<div class="video-wrapper"><video id="m-player" class="m-player" x5-playsinline="" playsinline="" webkit-playsinline="" x-webkit-airplay="allow" preload="true">鎮ㄧ殑娴忚鍣ㄤ笉鏀寔HTML5锛屾棤娉曡鐪嬫垜浠彁渚涚殑瑙嗛锛佸缓璁娇鐢ㄩ珮鐗堟湰娴忚鍣ㄨ鐪嬶紝璋㈣阿锛�</video></div>', t.controlHtml = '<div class="control-wrapper"><div class="left-control"><div class="player-btn"><i class="player-bg btn-play"></i></div></div><div class="right-control"><div class="fullscreen-btn"><i class="btn-bg"></i></div></div><div class="progress-control"><div class="cur-time">00:00</div><div class="progress-control-list"><div class="progress-control-load"></div><div class="progress-control-play"></div><div class="progress-control-btn"></div></div><div class="end-time">11:00</div></div><div class="live-progress-control"><div class="icon">鐩存挱</div><div class="live-time">11:00</div></div></div>', t.tipsHtml = '<div class="player-tips"><div class="player-tips-loading"><div class="loading"><i class="icon"></i></div></div><div class="tip-open-vip-btn"><i class="vip-icon"></i><span>寮€閫氫細鍛�</span></div></div>', t.endHtml = '<div class="end-wrapper"><div class="error-wrapper"><div class="error-content"><div class="text">鐪熷按灏紝濂藉儚鍑轰簡鐐归棶棰橈紝鍒锋柊璇曡瘯鐪媬</div><div class="btns openClient"><div class="refresh-btn"><i class="vip-icon"></i><span class="">绔嬪嵆鍒锋柊</span></div></div></div><div class="error-id">鎻愮ず:<span>1032</span></div></div><div class="reco-wrapper"><div class="reco-list"><div class="reco-item"><img src><span></span></div><div class="reco-item"><img src><span></span></div></div></div></div> ', t.controlMiniHtml = '<div class="control-mini-wrapper"><div class="progress-control-load"></div><div class="progress-control-play"></div></div> '
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = I(n(2)),
		o = I(n(0)),
		a = I(n(1)),
		r = I(n(3)),
		s = I(n(4)),
		l = I(n(8)),
		u = I(n(175)),
		d = n(19),
		c = n(18),
		p = I(n(65)),
		f = I(n(15)),
		h = n(16),
		v = I(n(7)),
		y = n(11),
		m = n(6),
		E = n(31);

	function I(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var _ = function(e) {
		function t(e) {
			return(0, o.default)(this, t), (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e))
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "onRegister",
			value: function() {
				v.default.debug("娉ㄥ唽 MobileVideoComponent"), this.setViewComponent(new u.default), this.viewComponent.addEventListener(d.H5ComponentEvent.WEB_PLAY, this.onVideoHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.VIDEO_UPDATE, this.onVideoHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.VIDEO_STATE, this.onVideoHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.VIDEO_WAITING, this.onVideoHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.PLAY_ERROR, this.onVideoHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.VIDEO_ERROR, this.onVideoHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.HIDE_UI, this.onVideoHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.VIDEO_BIP, this.onVideoHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.HLS_READY, this.onVideoHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.VIDEO_READY, this.onVideoHandler, this), this.viewComponent.init()
			}
		}, {
			key: "handleEvent",
			value: function(e, t) {
				this.viewComponent
			}
		}, {
			key: "listNotificationInterests",
			value: function() {
				return [c.H5Notification.PLAY_SUCCESS, c.H5Notification.SKIN_START_PLAY, c.H5Notification.EXTERNAL_NOTICATION, c.H5Notification.SKIN_CHANGE_PLAY_STATUS, c.H5Notification.SKIN_SEEK, c.H5Notification.SKIN_FULLSCREEN, c.ExternalApiType.ADV_DATA_SUCCESS, c.ExternalApiType.ADV_NEXT, c.ExternalApiType.ADV_END, c.ExternalApiType.ADV_ERROR]
			}
		}, {
			key: "handleNotification",
			value: function(e) {
				var t = e.getBody();
				switch(v.default.debug("<<<<" + e.getName() + ",<<<<<" + t), e.getName()) {
					case c.H5Notification.PLAY_SUCCESS:
						this.viewComponent.setPlayData(t), f.default.postMessage(h.ExternalEvent.VIDEO_STATUS, h.playerStatusType.VIDEO_READY);
						break;
					case c.H5Notification.SKIN_START_PLAY:
						y.playerInfo.next = !0, this.viewComponent.playVideo();
						break;
					case c.H5Notification.EXTERNAL_NOTICATION:
						var n = e.getType();
						this.externalHandler(n, t);
						break;
					case c.H5Notification.SKIN_CHANGE_PLAY_STATUS:
						this.viewComponent.changePlayStatus(t.status);
						break;
					case c.H5Notification.SKIN_SEEK:
						console.log(t.time, "data.time"), this.viewComponent.seekVideo(t.time);
						break;
					case c.H5Notification.SKIN_FULLSCREEN:
						this.viewComponent.fullscreen({
							type: "webkitbeginfullscreen"
						});
						break;
					case c.ExternalApiType.ADV_DATA_SUCCESS:
						this.viewComponent.setVideoAdvData(), y.playerInfo.next ? (this.viewComponent.playVideo(), this.sendNotification(c.H5Notification.VIDEO_NEXT)) : this.sendNotification(c.H5Notification.VIDEO_SHOW_START_PLAY_BTN);
						break;
					case c.ExternalApiType.ADV_NEXT:
						this.viewComponent.setVideoAdvData() || (E.advertInfo.status = E.advertStatus.OVER, this.viewComponent.setPlayData(m.H5Common.playData.urlInfo));
						break;
					case c.ExternalApiType.ADV_END:
					case c.ExternalApiType.ADV_ERROR:
						E.advertInfo.data = null, E.advertInfo.urls = null, m.H5Common.playData && m.H5Common.playData.urlInfo ? (E.advertInfo.status = E.advertStatus.END, this.viewComponent.setPlayData(m.H5Common.playData.urlInfo), this.sendNotification(c.H5Notification.VIDEO_RESET_UI)) : E.advertInfo.status = E.advertStatus.NONE
				}
			}
		}, {
			key: "onVideoHandler",
			value: function(e) {
				var t = e.data;
				switch(e.type) {
					case d.H5ComponentEvent.WEB_PLAY:
						this.facade.retrieveProxy(p.default.NAME).loadData();
						break;
					case d.H5ComponentEvent.VIDEO_UPDATE:
						this.sendNotification(c.H5Notification.VIDEO_UPDATE, t);
						break;
					case d.H5ComponentEvent.VIDEO_STATE:
						this.sendNotification(c.H5Notification.VIDEO_STATE, t);
						break;
					case d.H5ComponentEvent.VIDEO_WAITING:
						this.sendNotification(c.H5Notification.VIDEO_WAITING, t);
						break;
					case d.H5ComponentEvent.PLAY_ERROR:
						this.sendNotification(c.H5Notification.PLAY_ERROR, t);
						break;
					case d.H5ComponentEvent.VIDEO_ERROR:
						this.sendNotification(c.H5Notification.VIDEO_ERROR, t);
						break;
					case d.H5ComponentEvent.HIDE_UI:
						this.sendNotification(c.H5Notification.VIDEO_HIDE_UI, t);
						break;
					case d.H5ComponentEvent.VIDEO_BIP:
						f.default.postMessage(h.ExternalEvent.VIDEO_BIP, t);
						break;
					case d.H5ComponentEvent.HLS_READY:
					case d.H5ComponentEvent.VIDEO_READY:
						y.playerInfo.next || y.playerInfo.autoplay ? (this.viewComponent.playVideo(), this.sendNotification(c.H5Notification.VIDEO_NEXT)) : this.sendNotification(c.H5Notification.VIDEO_SHOW_START_PLAY_BTN)
				}
			}
		}, {
			key: "externalHandler",
			value: function(e, t) {
				switch(v.default.debug("澶栭儴璋冪敤鎺ュ彛video" + e + "," + t), e) {
					case c.ExternalApiType.VIDEO_VOLUME:
						this.viewComponent.volume = t.volume || .5;
						break;
					case c.ExternalApiType.VIDEO_SWITCH:
						this.viewComponent.switchVideo(t.rateType);
						break;
					case c.ExternalApiType.VIDEO_FULLSCREEN:
						this.viewComponent.appleFullScreen();
						break;
					case c.ExternalApiType.VIDEO_PLAY:
						this.viewComponent.playVideo(t.id, t.ext);
						break;
					case c.ExternalApiType.VIDEO_STOP:
						this.viewComponent.stopVideo();
						break;
					case c.ExternalApiType.VIDEO_SHIELD_STATUS:
						if(t.shieldStatus) {
							if(y.playerInfo.shieldStatus == t.shieldStatus) return;
							y.playerInfo.shieldStatus = t.shieldStatus, this.viewComponent.stopVideo(), this.sendNotification(c.H5Notification.VIDEO_ERROR, {
								code: "1001",
								msg: "鐢变簬鐗堟潈鍘熷洜锛屾殏鏃舵棤娉曡鐪嬶紒"
							})
						}
						break;
					case c.ExternalApiType.VIDEO_AUTO_PLAY:
						this.viewComponent.setAutoPlay(t.autoPlay)
				}
			}
		}, {
			key: "onRemove",
			value: function() {
				this.setViewComponent(null)
			}
		}]), t
	}(l.default.Mediator);
	_.NAME = "mobile_video_mediator", t.default = _
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = _(n(2)),
		o = _(n(0)),
		a = _(n(1)),
		r = _(n(3)),
		s = _(n(4)),
		l = _(n(34)),
		u = n(19),
		d = n(6),
		c = n(32),
		p = n(11),
		f = n(27),
		h = _(n(7)),
		v = _(n(33)),
		y = _(n(15)),
		m = n(16),
		E = n(69),
		I = n(31);

	function _(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var g = /android/i.test(navigator.userAgent.toLocaleLowerCase()),
		C = function(e) {
			function t(e) {
				return(0, o.default)(this, t), (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e))
			}
			return(0, s.default)(t, e), (0, a.default)(t, [{
				key: "init",
				value: function() {
					this.player = (0, c.$)(d.H5Common.container).find(".m-player"), this.modPlayer = (0, c.$)(d.H5Common.container).find(".mod-player"), d.H5Common.isMobile && (p.playerInfo.autoplay = !1), this.initError = !1, this.player.length || (h.default.debug("video鏍囩涓嶅瓨鍦�"), this.initError = !0), this.scale = 160 / 90, this.initError || (d.H5Common.useTicket ? this.dispatchEvent(u.H5ComponentEvent.PLAY_ERROR, {
						code: d.H5Common.callCode.play[1]
					}) : p.playerInfo.cid && this.dispatchEvent(u.H5ComponentEvent.WEB_PLAY), this.video = this.player[0], this.video.removeAttribute("controls"), window.General && window.General.isInlinePlay() ? (h.default.debug("鍘婚櫎鍐呰仈鎾斁鐨勫睘鎬�"), this.video.removeAttribute("webkit-playsinline"), this.video.removeAttribute("playsinline"), this.video.removeAttribute("x5-playsinline"), this.video.removeAttribute("x-webkit-airplay")) : h.default.debug("鍐呰仈鎾斁鐨勫睘鎬ф湭鍘婚櫎," + !!window.General), this.videoWH = {
						ow: d.H5Common.ow,
						oh: Math.round(9 * d.H5Common.ow / 16)
					}, this.resize(), this.initObserver(), this.preWatchTime = 0)
				}
			}, {
				key: "setPlayData",
				value: function(e) {
					if(e && e.url) {
						this.showPay = !1, this.playData = e, this.canplay = !1, this.watchTime = 0, this.watchInter = -1, (0, c.$)(this.video).show(), this.video.pause(), this.video.src = p.playerInfo.url = e.url, p.playerInfo.rateType = e.rateType, p.playerInfo.status = p.playStatus.PAUSE, h.default.debug("鑾峰彇鎾斁鍦板潃this.video.src=", e.url);
						var t = this;
						if(p.playerInfo.url.indexOf(".m3u8") > 0 && window.location.href.indexOf("fangdao") > -1 && window.Hls)
							if(Hls.isSupported()) {
								var n = "debug" === v.default.getQueryString("player"),
									i = new Hls({
										debug: n
									});
								window.location.href.indexOf("fangdao") > -1 && (p.playerInfo.url = "http://testvod.migucloud.com/live/zjrtest0508/index.m3u8"), i.loadSource(p.playerInfo.url), i.attachMedia(this.video), i.on(Hls.Events.MANIFEST_PARSED, function() {
									t.dispatchEvent(u.H5ComponentEvent.HLS_READY)
								})
							} else this.dispatchEvent(u.H5ComponentEvent.VIDEO_ERROR, {
								code: 3005,
								msg: "涓嬭浇app瑙傜湅"
							});
						else this.dispatchEvent(u.H5ComponentEvent.VIDEO_READY)
					} else h.default.debug("鑾峰彇鎾斁鍦板潃涓虹┖")
				}
			}, {
				key: "setVideoAdvData",
				value: function() {
					if(this.video.pause(), d.commonFun.isPlayAdv()) {
						if(!I.advertInfo.urls || !I.advertInfo.urls.length) return I.advertInfo.data = null, I.advertInfo.urls = null, I.advertInfo.status = I.advertStatus.NONE, !1;
						var e = I.advertInfo.urls.shift();
						if(e) return this.video.src = e, p.playerInfo.status == p.playStatus.PLAYING && this.video.play(), h.default.debug("鑾峰彇骞垮憡鐨勬挱鏀惧湴鍧€ this.video.src=", e), !0
					}
					return !1
				}
			}, {
				key: "initPlayerInfo",
				value: function() {
					p.playerInfo.posi = 0, p.playerInfo.buffered = 0, p.playerInfo.start = !1, p.playerInfo.end = !1
				}
			}, {
				key: "playVideo",
				value: function(e, t) {
					if(e) this.video.pause(), this.initPlayerInfo(), p.playerInfo.cid = e, t && t.shieldStatus ? p.playerInfo.shieldStatus = t.shieldStatus : p.playerInfo.shieldStatus = 0, (0, E.createClientID)(), this.dispatchEvent(u.H5ComponentEvent.WEB_PLAY);
					else if(p.playerInfo.status == p.playStatus.PAUSE) {
						var n = this;
						this.video.play().then(function() {}).catch(function() {
							n.video.pause(), p.playerInfo.status = p.playStatus.PAUSE, n.dispatchEvent(u.H5ComponentEvent.VIDEO_STATE, {
								status: p.playerInfo.status
							})
						})
					} else p.playerInfo.status == p.playStatus.END && ((0, E.createClientID)(), this.video.currentTime = 0, this.showPay = !1, this.video.play())
				}
			}, {
				key: "setAutoPlay",
				value: function() {
					p.playerInfo.autoplay = !0, this.video.src = "", this.video.play()
				}
			}, {
				key: "stopVideo",
				value: function() {
					console.log("杩涘叆stop"), this.video.pause(), p.playerInfo.status = p.playStatus.END, p.playerInfo.end = !0, p.playerInfo.posi = 0, p.playerInfo.buffered = 0, this.preWatchTime = 0, p.playerInfo.start = !1, this.watchTime = 0, this.watchInter > -1 && (window.clearInterval(this.watchInter), this.watchInter = -1), this.dispatchEvent(u.H5ComponentEvent.VIDEO_STATE, {
						status: p.playerInfo.status
					})
				}
			}, {
				key: "changePlayStatus",
				value: function(e) {
					e == p.playStatus.PAUSE ? this.video.pause() : this.video.play()
				}
			}, {
				key: "switchVideo",
				value: function(e) {
					h.default.debug("褰撳墠鐮佹祦<<<" + p.playerInfo.rateType + ",闇€鍒囨崲鐨勭爜娴�<<" + e);
					var t = d.H5Common.playData.urlInfos[e];
					if(d.commonFun.isPlayAdv()) return d.H5Common.playData.urlInfo = t, p.playerInfo.rateType = t.rateType, void(p.playerInfo.status == p.playStatus.PAUSE && (this.playVideo(), this.dispatchEvent(u.H5ComponentEvent.HIDE_UI)));
					if(e != p.playerInfo.rateType) {
						var n = 0;
						p.playerInfo.status != p.playStatus.END && (n = this.video.currentTime), t ? (this.stopVideo(), (0, E.createClientID)(), this.setPlayData(t), this.preWatchTime = n, this.playVideo(), this.dispatchEvent(u.H5ComponentEvent.HIDE_UI)) : h.default.debug("<<<<<<闇€鍒囨崲鐨勭爜娴佹棤瀵瑰簲鐨勫湴鍧€淇℃伅")
					} else p.playerInfo.status == p.playStatus.END && ((0, E.createClientID)(), this.playVideo(), this.dispatchEvent(u.H5ComponentEvent.HIDE_UI))
				}
			}, {
				key: "resize",
				value: function() {
					this.scale = this.videoWH.oh / this.videoWH.ow
				}
			}, {
				key: "initObserver",
				value: function() {
					var e = this;
					this.player.on("loadstart", function(t) {
						d.commonFun.isPlayAdv() || e.loadStart(t)
					}), this.player.on("loadedmetadata loadeddata durationchange", function(t) {
						d.commonFun.isPlayAdv() || e.loadData(t)
					}), this.player.on("canplaythrough", function(t) {
						d.commonFun.isPlayAdv() || e.canplaythrough(t)
					}), this.player.on("seeking waiting  stalled", function(t) {
						d.commonFun.isPlayAdv() || e.waiting(t)
					}), this.player.on("timeupdate", v.default.throttle(function(t) {
						e.timeupdate(t)
					}, 1e3)), this.player.on("ended", function(t) {
						d.commonFun.isPlayAdv() || e.ended(t)
					}), this.player.on("pause", function(t) {
						p.playerInfo.status = p.playStatus.PAUSE, d.commonFun.isPlayAdv() || e.pause(t)
					}), this.player.on("stop", function(t) {
						d.commonFun.isPlayAdv() || e.stopVideo(t)
					}), this.player.on("playing", function(t) {
						p.playerInfo.status = p.playStatus.PLAYING, d.commonFun.isPlayAdv() || e.playing(t)
					}), this.player.on("abort error", function(t) {
						d.commonFun.isPlayAdv() || e.error(t)
					}), this.player.on("webkitbeginfullscreen webkitendfullscreen", function(t) {
						d.commonFun.isPlayAdv() || e.fullscreen(t)
					})
				}
			}, {
				key: "loadStart",
				value: function(e) {
					h.default.debug("褰撳墠鎺ユ敹浜嬩欢 ==>> ", e.type)
				}
			}, {
				key: "loadData",
				value: function(e) {
					h.default.debug("褰撳墠鎺ユ敹浜嬩欢 ==>> ", e.type), "loadedmetadata" == e.type && (this.videoWH = {
						width: this.video.videoWidth,
						height: this.video.videoHeight
					}, this.resize()), this.getDuration()
				}
			}, {
				key: "getDuration",
				value: function() {
					var e = this.video.duration;
					isNaN(e) || e == Number.POSITIVE_INFINITY ? h.default.debug("褰撳墠duration ==>> " + e + ",閰嶇疆鏂囦欢鐨刣uration=" + p.playerInfo.duration) : (this.video.duration && (p.playerInfo.duration = this.video.duration), h.default.debug("褰撳墠duration ==>> " + e + ",閰嶇疆鏂囦欢鐨刣uration=" + p.playerInfo.duration))
				}
			}, {
				key: "canplaythrough",
				value: function(e) {
					h.default.debug("褰撳墠鎺ユ敹浜嬩欢canplaythrough ==>> ", e.type), this.volume = 1, this.canplay || (this.canplay = !0, this.preWatchTime > 0 && (this.video.currentTime = this.preWatchTime, h.default.debug("this.video.currentTime ==>> ", this.preWatchTime)))
				}
			}, {
				key: "waiting",
				value: function(e) {
					h.default.debug("褰撳墠鎺ユ敹浜嬩欢 ==>> ", e.type), "seeking" != e.type && "waiting" != e.type || this.dispatchEvent(u.H5ComponentEvent.VIDEO_WAITING)
				}
			}, {
				key: "timeupdate",
				value: function(e) {
					var t = this;
					if(p.playerInfo.status != p.playStatus.END || 0 == this.video.currentTime)
						if(d.commonFun.isPlayAdv()) this.dispatchEvent(u.H5ComponentEvent.VIDEO_UPDATE, null);
						else {
							p.playerInfo.posi = this.video.currentTime;
							var n = -1,
								i = 0;
							try {
								i = this.video.buffered.end(0)
							} catch(e) {}
							if(p.playerInfo.buffered !== i && (n = i, p.playerInfo.buffered = i), this.video.currentTime > 0 && this.watchInter < 0 && (this.sendSDBip(), this.watchInter = setInterval(function() {
									var e = p.playerInfo.status == p.playStatus.PLAYING ? d.H5Common.heartDuration : 0,
										n = {
											dt: "online",
											data: {
												wt: {
													watchTime: 1e3 * t.watchTime,
													duration: Math.floor(1e3 * p.playerInfo.duration),
													curTime: Math.floor(1e3 * p.playerInfo.posi),
													heartDuration: e,
													urlType: p.playerInfo.urlType
												}
											}
										};
									t.sendBip(n)
								}, d.H5Common.heartDuration)), this.watchTime++, d.H5Common.pay && !f.userInfo.isVip && (p.playerInfo.posi > p.playerInfo.shikantime || p.playerInfo.posi + 1 > p.playerInfo.shikantime)) {
								if(this.showPay) return;
								return this.video.pause(), this.stopVideo(), (0, c.$)(this.video).hide(), this.showPay = !0, y.default.postMessage(m.ExternalEvent.VIDEO_STATUS, m.playerStatusType.VIDEO_SHIKAN_END), void this.dispatchEvent(u.H5ComponentEvent.VIDEO_ERROR, {
									code: 412,
									msg: "寮€閫氫細鍛�"
								})
							}
							var o = {};
							if(p.playerInfo.playType == p.playType.VOD) o.start = 0, o.end = p.playerInfo.duration || 0, o.posi = p.playerInfo.posi, p.playerInfo.duration - p.playerInfo.posi < 15 && (this.abnormal = !0);
							else if(p.playerInfo.playType == p.playType.HUIKAN) o.start = 0, o.end = p.playerInfo.duration || 0, o.posi = p.playerInfo.posi, p.playerInfo.duration - p.playerInfo.posi < 15 && (this.abnormal = !0);
							else {
								var a = d.H5Common.timestamp;
								o.live = a + 1e3 * p.playerInfo.posi
							}
							o.buffered = n, this.dispatchEvent(u.H5ComponentEvent.VIDEO_UPDATE, o)
						}
				}
			}, {
				key: "ended",
				value: function(e) {
					h.default.debug("褰撳墠鎺ユ敹浜嬩欢 ==>> ", e.type), this.stopVideo(), y.default.postMessage(m.ExternalEvent.VIDEO_STATUS, m.playerStatusType.VIDEO_END)
				}
			}, {
				key: "pause",
				value: function(e) {
					if(h.default.debug("褰撳墠鎺ユ敹浜嬩欢 ==>> ", e.type), p.playerInfo.status !== p.playStatus.END) {
						if(p.playerInfo.status = p.playStatus.PAUSE, !p.playerInfo.start) return;
						this.dispatchEvent(u.H5ComponentEvent.VIDEO_STATE, {
							status: p.playerInfo.status
						}), y.default.postMessage(m.ExternalEvent.VIDEO_STATUS, m.playerStatusType.VIDEO_PAUSE)
					}
				}
			}, {
				key: "playing",
				value: function(e) {
					p.playerInfo.start || (p.playerInfo.start = !0), h.default.debug("褰撳墠鎺ユ敹浜嬩欢 ==>> ", e.type), p.playerInfo.status = p.playStatus.PLAYING, this.dispatchEvent(u.H5ComponentEvent.VIDEO_STATE, {
						status: p.playerInfo.status
					}), y.default.postMessage(m.ExternalEvent.VIDEO_STATUS, m.playerStatusType.VIDEO_PLAYING)
				}
			}, {
				key: "error",
				value: function(e) {
					if(h.default.debug("video璇锋眰鍑洪敊 >>>>>>", e.type), "error" == e.type) {
						if(this.stopVideo(), "" == this.video.src || p.playerInfo.autoplay) return;
						if(this.video.error && this.video.error.code) {
							var t = {};
							switch(t.code = this.video.error.code, t.msg = "video鎾斁鍑洪敊", t.code) {
								case 1:
									t.msg = "鍙栧洖杩囩▼琚敤鎴蜂腑姝�";
									break;
								case 2:
									t.msg = "涓嬭浇鍑洪敊";
									break;
								case 3:
									t.msg = "瑙ｇ爜閿欒";
									break;
								case 4:
									t.msg = "涓嶆敮鎸侀煶棰�/瑙嗛"
							}
							t.code = d.H5Common.callCode.video[Number(t.code)], this.dispatchEvent(u.H5ComponentEvent.VIDEO_ERROR, t)
						}
					}
				}
			}, {
				key: "fullscreen",
				value: function(e) {
					h.default.debug("<<<<<<<<<<", e.type);
					var t = this.player.attr("data-player-fullscreen");
					if("webkitbeginfullscreen" == e.type) {
						if(Number(t) > 0) return;
						g ? (y.default.postMessage(m.ExternalEvent.VIDEO_FULLSCREEN, !0), this.appleFullScreen(this.video)) : this.appleFullScreen(this.video), this.sendBip({
							dt: "act",
							data: {
								type: "fullscreen"
							}
						})
					} else this.player.attr("data-player-fullscreen", 0)
				}
			}, {
				key: "exitFullscreen",
				value: function() {
					var e = this.player.attr("data-player-fullscreen");
					Number(e) > 0 && this.player.attr("data-player-fullscreen", 0);
					var t = document;
					t.exitFullscreen ? t.exitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.webkitCancelFullScreen && t.webkitCancelFullScreen()
				}
			}, {
				key: "appleFullScreen",
				value: function(e) {
					var t = e || this.video;
					g || this.player.attr("data-player-fullscreen", 1), console.log("appleFullScreen"), c.$.isFunction(t.requestFullscreen) ? t.requestFullscreen() : c.$.isFunction(t.webkitEnterFullscreen) ? t.webkitEnterFullscreen() : c.$.isFunction(t.mozRequestFullScreen) ? t.mozRequestFullScreen() : alert("Your browsers doesn't support fullscreen")
				}
			}, {
				key: "seekVideo",
				value: function(e) {
					if(d.H5Common.pay && !f.userInfo.isVip && e >= p.playerInfo.shikantime) {
						if(this.showPay) return;
						return this.video.pause(), this.stopVideo(), (0, c.$)(this.video).hide(), this.showPay = !0, y.default.postMessage(m.ExternalEvent.VIDEO_STATUS, m.playerStatusType.VIDEO_SHIKAN_END), void this.dispatchEvent(u.H5ComponentEvent.VIDEO_ERROR, {
							code: 412,
							msg: "寮€閫氫細鍛�"
						})
					}
					e <= p.playerInfo.duration && (this.video.currentTime = e, this.sendBip({
						dt: "act",
						data: {
							type: "seek"
						}
					}))
				}
			}, {
				key: "sendSDBip",
				value: function() {
					var e = {
						dt: "sd",
						data: {
							cid: p.playerInfo.cid,
							sessionID: d.H5Common.clientID,
							rateType: p.playerInfo.rateType,
							urlType: p.playerInfo.urlType
						}
					};
					h.default.debug("鎶ユ枃sd<<<<", e), this.sendBip(e)
				}
			}, {
				key: "sendBip",
				value: function(e) {
					this.dispatchEvent(u.H5ComponentEvent.VIDEO_BIP, e)
				}
			}, {
				key: "volume",
				set: function(e) {
					e > 1 ? e = 1 : e < 0 && (e = 0), p.playerInfo.volume = e, this.video.volume = e
				}
			}]), t
		}(l.default);
	t.default = C
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = y(n(2)),
		o = y(n(0)),
		a = y(n(1)),
		r = y(n(3)),
		s = y(n(4)),
		l = y(n(8)),
		u = y(n(177)),
		d = (n(19), n(18)),
		c = n(31),
		p = (n(6), y(n(7))),
		f = y(n(15)),
		h = n(16),
		v = n(11);

	function y(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var m = function(e) {
		function t(e) {
			return(0, o.default)(this, t), (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e))
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "onRegister",
			value: function() {
				this.setViewComponent(new u.default)
			}
		}, {
			key: "handleEvent",
			value: function(e, t) {
				this.viewComponent
			}
		}, {
			key: "listNotificationInterests",
			value: function() {
				return [d.H5Notification.EXTERNAL_NOTICATION]
			}
		}, {
			key: "handleNotification",
			value: function(e) {
				var t = e.getBody();
				switch(e.getName()) {
					case d.H5Notification.EXTERNAL_NOTICATION:
						var n = e.getType();
						this.externalHandler(n, t)
				}
			}
		}, {
			key: "externalHandler",
			value: function(e, t) {
				switch(p.default.debug("澶栭儴璋冪敤鎺ュ彛skin" + e + "," + t), e) {
					case d.ExternalApiType.ADVERT_STATUS:
						if(v.playerInfo.shieldStatus) return void f.default.postMessage(h.ExternalEvent.VIDEO_JUMP_ADV);
						if(c.advertInfo.status == c.advertStatus.TIME_OUT) return;
						if(console.log("<<<<<骞垮憡鐨勬秷鎭�", t), p.default.debug("<<<<<骞垮憡鐨勬秷鎭細" + t), t && t.params) {
							var n = t.params.type,
								i = t.params.data;
							if(n) switch(c.advertInfo.status = n, c.advertInfo.data = i, n) {
								case c.advertStatus.READY:
									i && i.urls && i.urls.length && (c.advertInfo.urls = i.urls, this.sendNotification(d.ExternalApiType.ADV_DATA_SUCCESS));
									break;
								case c.advertStatus.START:
									break;
								case c.advertStatus.END:
									c.advertInfo.urls && c.advertInfo.urls.length ? this.sendNotification(d.ExternalApiType.ADV_NEXT) : this.sendNotification(d.ExternalApiType.ADV_END);
									break;
								case c.advertStatus.ERROR:
									this.sendNotification(d.ExternalApiType.ADV_ERROR);
									break;
								case c.advertStatus.OVER:
									this.sendNotification(d.ExternalApiType.ADV_END)
							}
						}
				}
			}
		}, {
			key: "onRemove",
			value: function() {
				this.setViewComponent(null)
			}
		}]), t
	}(l.default.Mediator);
	m.NAME = "mobile_adv_mediator", t.default = m
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = s(n(2)),
		o = s(n(0)),
		a = s(n(3)),
		r = s(n(4));

	function s(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var l = function(e) {
		function t(e) {
			return(0, o.default)(this, t), (0, a.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e))
		}
		return(0, r.default)(t, e), t
	}(s(n(34)).default);
	t.default = l
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = I(n(2)),
		o = I(n(0)),
		a = I(n(1)),
		r = I(n(3)),
		s = I(n(4)),
		l = I(n(8)),
		u = I(n(179)),
		d = n(19),
		c = n(18),
		p = I(n(15)),
		f = n(16),
		h = n(11),
		v = I(n(98)),
		y = I(n(7)),
		m = n(11),
		E = I(n(99));

	function I(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var _ = function(e) {
		function t(e) {
			return(0, o.default)(this, t), (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e))
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "onRegister",
			value: function() {
				y.default.debug("娉ㄥ唽PcSkinComponent"), this.setViewComponent(new u.default), this.viewComponent.addEventListener(d.H5ComponentEvent.START_PLAY, this.onSkinHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.CHANGE_PLAY_STATUS, this.onSkinHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.SEEK, this.onSkinHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.FULLSCREEN, this.onSkinHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.SKIN_ERROR, this.onSkinHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.VIDEO_BIP, this.onSkinHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.NEXT, this.onSkinHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.PAGE_ZOOM, this.onSkinHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.CHANGE_RATETYPE, this.onSkinHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.CHANGE_SPEED, this.onSkinHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.CHANGE_VOLUME, this.onSkinHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.LOOP, this.onSkinHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.OPEN_VIP, this.onSkinHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.REPLAY, this.onSkinHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.MUTED, this.onSkinHandler, this), this.viewComponent.init(), this.facade.retrieveProxy(E.default.NAME).loadData()
			}
		}, {
			key: "listNotificationInterests",
			value: function() {
				return [c.H5Notification.VIDEO_SHOW_START_PLAY_BTN, c.H5Notification.EXTERNAL_NOTICATION, c.H5Notification.VIDEO_STATE, c.H5Notification.VIDEO_UPDATE, c.H5Notification.VIDEO_WAITING, c.H5Notification.PLAY_FAILED, c.H5Notification.VIDEO_NEXT, c.H5Notification.PLAY_ERROR, c.H5Notification.VIDEO_ERROR, c.H5Notification.VIDEO_HIDE_UI, c.H5Notification.PLAY_SUCCESS, c.H5Notification.VIDEO_SHOW_SPEED_UI, c.H5Notification.VIDEO_SET_MUTE, c.H5Notification.VIDEO_SHOW_RECO, c.H5Notification.RECO_SUCCESS]
			}
		}, {
			key: "handleNotification",
			value: function(e) {
				var t = this,
					n = e.getBody();
				switch(e.getName()) {
					case c.H5Notification.EXTERNAL_NOTICATION:
						var i = e.getType();
						this.externalHandler(i, n);
						break;
					case c.H5Notification.VIDEO_UPDATE:
						this.viewComponent.updateProgress(n);
						break;
					case c.H5Notification.VIDEO_STATE:
						this.viewComponent.togglePlayBtn(n.status);
						break;
					case c.H5Notification.VIDEO_SHOW_START_PLAY_BTN:
						this.viewComponent.showStart();
						break;
					case c.H5Notification.VIDEO_WAITING:
						this.viewComponent.showLoading();
						break;
					case c.H5Notification.PLAY_FAILED:
					case c.H5Notification.PLAY_ERROR:
					case c.H5Notification.VIDEO_ERROR:
						this.viewComponent.showError(n);
						break;
					case c.H5Notification.VIDEO_NEXT:
						this.viewComponent.nextVideo();
						break;
					case c.H5Notification.VIDEO_HIDE_UI:
						break;
					case c.H5Notification.PLAY_SUCCESS:
						this.viewComponent.initUIByResult(!0);
						break;
					case c.H5Notification.VIDEO_SHOW_SPEED_UI:
						this.viewComponent.showSpeedUI(n);
						break;
					case c.H5Notification.VIDEO_SET_MUTE:
						this.viewComponent.setMute(n.bl);
						break;
					case c.H5Notification.RECO_SUCCESS:
						this.viewComponent.setReco(n);
						break;
					case c.H5Notification.VIDEO_SHOW_RECO:
						var o = setTimeout(function() {
							m.playerInfo.status == h.playStatus.END && t.facade.retrieveProxy(v.default.NAME).loadData(), clearTimeout(o), o = -1
						}, 2e3)
				}
			}
		}, {
			key: "onSkinHandler",
			value: function(e) {
				y.default.debug(e);
				var t = e.data;
				switch(e.type) {
					case d.H5ComponentEvent.START_PLAY:
						this.sendNotification(c.H5Notification.SKIN_START_PLAY);
						break;
					case d.H5ComponentEvent.CHANGE_PLAY_STATUS:
						this.sendNotification(c.H5Notification.SKIN_CHANGE_PLAY_STATUS, t);
						break;
					case d.H5ComponentEvent.SEEK:
						this.sendNotification(c.H5Notification.SKIN_SEEK, t);
						break;
					case d.H5ComponentEvent.FULLSCREEN:
						this.sendNotification(c.H5Notification.SKIN_FULLSCREEN, t);
						break;
					case d.H5ComponentEvent.VIDEO_BIP:
						p.default.postMessage(f.ExternalEvent.VIDEO_BIP, t);
						break;
					case d.H5ComponentEvent.NEXT:
						p.default.postMessage(f.ExternalEvent.VIDEO_NEXT);
						break;
					case d.H5ComponentEvent.PAGE_ZOOM:
						p.default.postMessage(f.ExternalEvent.VIDEO_PAGE_ZOOM, t);
						break;
					case d.H5ComponentEvent.CHANGE_RATETYPE:
						this.sendNotification(c.H5Notification.SKIN_CHANGE_RATETYPE, t);
						break;
					case d.H5ComponentEvent.CHANGE_SPEED:
						this.sendNotification(c.H5Notification.SKIN_CHANGE_SPEED, t);
						break;
					case d.H5ComponentEvent.CHANGE_VOLUME:
						this.sendNotification(c.H5Notification.SKIN_CHANGE_VOLUME, t);
						break;
					case d.H5ComponentEvent.LOOP:
						p.default.postMessage(f.ExternalEvent.VIDEO_LOOP, t);
						break;
					case d.H5ComponentEvent.OPEN_VIP:
						console.log("open_vip"), p.default.postMessage(f.ExternalEvent.VIDEO_OPEN_VIP);
						break;
					case d.H5ComponentEvent.REPLAY:
						console.log("replay"), this.sendNotification(c.H5Notification.SKIN_REPLAY);
						break;
					case d.H5ComponentEvent.MUTED:
						console.log("muted"), this.sendNotification(c.H5Notification.SKIN_MUTED, t)
				}
			}
		}, {
			key: "externalHandler",
			value: function(e, t) {
				switch(y.default.debug("澶栭儴璋冪敤鎺ュ彛" + e + "," + t), e) {
					case c.ExternalApiType.VIDEO_PAUSE:
						this.viewComponent.playBtnHandler(h.playStatus.PAUSE);
						break;
					case c.ExternalApiType.VIDEO_PAGE_ZOOM:
						this.viewComponent.togglePageZoom(t.pageZoom);
						break;
					case c.ExternalApiType.VIDEO_MINI_PLAYER:
						this.viewComponent.showMiniControl(t.mini);
						break;
					case c.ExternalApiType.SKIN_SHOW_ERROR_UI:
						if(t && t.params) {
							var n = {
								code: "NOT_RELEASED" == t.params.code ? "601" : "",
								msg: t.params.errorMsg || ""
							};
							n.code && this.viewComponent.showError(n)
						}
				}
			}
		}, {
			key: "onRemove",
			value: function() {
				this.setViewComponent(null)
			}
		}]), t
	}(l.default.Mediator);
	_.NAME = "pc_skin_mediator", t.default = _
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = _(n(2)),
		o = _(n(0)),
		a = _(n(1)),
		r = _(n(3)),
		s = _(n(4)),
		l = n(32),
		u = _(n(34)),
		d = n(11),
		c = n(19),
		p = n(6),
		f = n(180),
		h = _(n(33)),
		v = _(n(15)),
		y = _(n(7)),
		m = n(16),
		E = n(181),
		I = n(27);

	function _(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var g = function(e) {
		function t(e) {
			(0, o.default)(this, t);
			var n = (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e));
			n.createView(p.H5Common.container), n.container = (0, l.$)(p.H5Common.container).find(".mod-player");
			var a = n.container;
			return n.tipsUI = a.children(".player-tips"), n.loadingUI = n.tipsUI.children(".player-tips-loading"), n.loadingStartUI = n.tipsUI.children(".player-start-loading"), n.smallwinBtn = n.tipsUI.children(".smallwindow-btn"), n.kandanBtn = n.tipsUI.children(".kandan-btn"), n.leftTipBtn = n.tipsUI.children(".left-tips"), n.leftTipContent = n.leftTipBtn.children(".tips-content"), n.controlUI = a.children(".control-wrapper"), n.leftUI = n.controlUI.children(".left-control"), n.playerBtn = n.leftUI.children(".play-btn"), n.nextBtn = n.leftUI.children(".next-btn"), n.loopBtn = n.leftUI.children(".loop-btn"), n.startTimeUI = n.leftUI.find(".time-txt .cur-time"), n.endTimeUI = n.leftUI.find(".time-txt .end-time"), n.rightUI = n.controlUI.children(".right-control"), n.zoomBtn = n.rightUI.children(".zoom-btn"), n.pageZoomBtn = n.rightUI.children(".page-zoom-btn"), n.volumeBox = n.rightUI.find(".volume-box"), n.volumeBtn = n.volumeBox.find(".slider-btn"), n.volumeCurrent = n.volumeBox.find(".volume-current"), n.speedBox = n.rightUI.find(".speed-box"), n.ratetypeBox = n.rightUI.find(".ratetype-box"), n.barrageBtn = n.rightUI.children(".barrage-btn"), n.progressUI = n.controlUI.children(".progress-control"), n.progressListUI = n.progressUI.children(".progress-control-list"), n.progressBtn = n.progressListUI.find(".progress-control-btn"), n.progressLoadUI = n.progressListUI.find(".progress-control-load"), n.progressPlayUI = n.progressListUI.find(".progress-control-play"), n.liveProgressUI = n.controlUI.find(".live-btns"), n.liveTimeUI = n.liveProgressUI.children(".live-time"), n.endUI = a.children(".end-wrapper"), n.errorUI = n.endUI.children(".error-wrapper"), n.errorCodeUI = n.errorUI.children(".error-id"), n.recoUI = n.endUI.children(".reco-wrapper"), n.openVipUI = n.endUI.children(".open-vip"), n.player = (0, l.$)(p.H5Common.container).find(".m-player"), n.miniControl = a.children(".mini-control"), n.miniPlayBtn = n.miniControl.find(".play-btn"), n.playBtnStatus = d.playStatus.PLAYING, n.hideInter = -1, n.isSpaceKeyUsed = !1, n.miniWindow = !1, n.show_rate_tips_ok_txt = "", n.deeplink = "", n
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "init",
			value: function() {
				this.bindAction(), this.controlUI.css("visibility", "hidden"), this.endUI.hide(), p.H5Common.skinCfg, this.tipsUI.show(), this.loadingStartUI.show()
			}
		}, {
			key: "createView",
			value: function(e) {
				(0, l.$)(e).append('<section class="mod-player"></section>'), this.parContainer = (0, l.$)(e), this.container = this.parContainer.find(".mod-player"), this.container.append(f.videoHtml), this.container.append(f.controlHtml), this.container.append(f.miniWindowControl), this.container.append(f.tipsHtml), this.container.append(f.endHtml)
			}
		}, {
			key: "bindAction",
			value: function() {
				var e = this;
				this.bindCreate || (this.bindCreate = !0, this.player[0].addEventListener("click", function(t) {
					return e.showControl(t)
				}), this.player[0].addEventListener("mouseenter", function(t) {
					e.showControl(t), e.isSpaceKeyUsed = !0
				}), this.player[0].addEventListener("mouseleave", function(t) {
					e.enterControl || (e.isSpaceKeyUsed = !1, e.showControl(t))
				}), this.player[0].addEventListener("mousemove", h.default.throttle(function(t) {
					e.enterControl || e.showControl(t)
				}, 200)), this.controlUI[0].addEventListener("mouseenter", function(t) {
					e.enterControl = !0, e.showControl(t, !0)
				}), this.controlUI[0].addEventListener("mouseleave", function(t) {
					e.enterControl = !1, e.showControl(t)
				}, !1, !1), this.parContainer[0].addEventListener("contextmenu", function(t) {
					return e.showCXMenu(t)
				}), this.playerBtn.on("click", function(t) {
					return e.playBtnHandler()
				}), this.miniPlayBtn.on("click", function(t) {
					return e.playBtnHandler()
				}), this.nextBtn.on("click", function(t) {
					return e.nextBtnHandler()
				}), this.loopBtn.on("click", function(t) {
					return e.loopBtnHandler()
				}), this.recoUI.on("click", ".replay", function(t) {
					return e.replayHandler(t)
				}), this.progressUI.on("click", ".progress-control-list", function(t) {
					return e.progressHandler(t)
				}), (0, E.dragDrop)(this.progressBtn[0], {
					mouseDownHandler: this.progressDragHandler,
					mouseMoveHandler: this.progressDragHandler,
					mouseUpHandler: this.progressDragHandler
				}, this).register(), this.zoomBtn.on("click", function(t) {
					return e.zoomHandler(t)
				}), this.pageZoomBtn.on("click", function(t) {
					return e.pageZoomHandler(t)
				}), this.volumeBox[0].addEventListener("click", function(t) {
					return e.volumeBtnHandler(t)
				}), this.volumeBox[0].addEventListener("mouseenter", function(t) {
					return e.volumeBtnHandler(t)
				}), this.volumeBox[0].addEventListener("mouseleave", function(t) {
					return e.volumeBtnHandler(t)
				}), (0, E.dragDrop)(this.volumeBtn[0], {
					mouseDownHandler: this.volumeDragHandler,
					mouseMoveHandler: this.volumeDragHandler,
					mouseUpHandler: this.volumeDragHandler
				}, this).register(), this.speedBox[0].addEventListener("click", function(t) {
					return e.speedHandler(t)
				}), this.speedBox[0].addEventListener("mouseenter", function(t) {
					return e.speedHandler(t)
				}), this.speedBox[0].addEventListener("mouseleave", function(t) {
					return e.speedHandler(t)
				}), this.ratetypeBox[0].addEventListener("click", function(t) {
					return e.ratetypeHandler(t)
				}), this.ratetypeBox[0].addEventListener("mouseenter", function(t) {
					return e.ratetypeHandler(t)
				}), this.ratetypeBox[0].addEventListener("mouseleave", function(t) {
					return e.ratetypeHandler(t)
				}), this.barrageBtn.on("click", function(t) {
					return e.barrageHandler(t)
				}), this.errorUI.on("click", ".btns", function(t) {
					return e.errorBtnHandler(t)
				}), this.openVipUI.on("click", function(t) {
					return e.openVip(t)
				}), this.leftTipBtn.on("click", function(t) {
					return e.tipHandler(t)
				}), document.addEventListener("keydown", function(t) {
					return e.keyDownHandler(t)
				}), this.addListenerScreenChange(), this.controlUI.on("webkitAnimationStart animationstart webkitAnimationEnd animationend", function(t) {
					return e.onFadeHandler(t)
				}))
			}
		}, {
			key: "showStart",
			value: function() {}
		}, {
			key: "showLoading",
			value: function() {
				d.playerInfo.start && (!("none" == this.tipsUI.css("display")) || this.tipsUI.show(), this.loadingStartUI.hide(), this.loadingUI.show())
			}
		}, {
			key: "hideUI",
			value: function() {
				this.tipsUI.hide(), this.controlVisible(!1), this.endUI.hide()
			}
		}, {
			key: "initUIByResult",
			value: function(e) {
				e && (d.playerInfo.playType == d.playType.LIVE ? (this.liveProgressUI.show(), this.progressUI.hide(), this.nextBtn.hide(), this.loopBtn.hide(), this.leftUI.find(".time-txt").hide()) : (this.progressUI.show(), this.liveProgressUI.hide(), this.nextBtn.show(), this.loopBtn.show(), this.leftUI.find(".time-txt").show()), this.seekVolume(d.playerInfo.volume), this.ratetypeBox.hasClass("disabled") && this.ratetypeBox.removeClass("disabled"), this.createRTUI(), p.H5Common.pay && !I.userInfo.isVip ? (this.tipsUI.show(), this.showTip('<div class="content vip">璇曠湅<i class="shikan-text">6</i>鍒嗛挓,<i class="vip-btn">寮€閫歷ip</i>鍏嶈垂瑙傜湅鏈墖</div>')) : (this.showTip(""), this.leftTipBtn.hide()), this.recoUI.hide(), this.errorUI.hide(), this.recoUI.hide())
			}
		}, {
			key: "createRTUI",
			value: function() {
				var e = d.playerInfo.rateType,
					t = d.playerInfo.rateTypeList,
					n = d.rateTypeList[e].txt1;
				if(this.ratetypeBox.children(".txt-btn").children(".txt").text(n), t) {
					for(var i = t.split(","), o = 0; o < i.length; o++)
						for(var a = 0; a < i.length - 1 - o; a++) i[a] > i[a + 1] && (i[a], i[a] = i[a + 1], i[a + 1] = i[a]);
					var r = this.ratetypeBox.children(".ratetype-content").children(".ul-rt");
					r.html("");
					for(var s = !1, l = "", u = i.length - 1; u > -1; u--) {
						var c = i[u],
							p = d.rateTypeList[c].txt1 + " " + d.rateTypeList[c].txt2,
							f = "";
						c == e && (f = "cur"), 4 != c ? l = '<li class="item-rt ' + f + '" data-val="' + c + '">' + p + "</li>" : (s = !0, l = '<li class="item-rt ' + f + '" data-val="' + c + '">' + p + '<i class="vip"></i></li>'), r.append(l)
					}
					if(!s) {
						var h = d.playerInfo.playType === d.playType.LIVE ? 1 : 0;
						this.deeplink = "miguvideo://" + d.playerInfo.cid + "," + h, l = '<li class="item-rt" data-val="41"><a data-val="41">瀹㈡埛绔� 1080p<span class="vip" data-val="41">涓撲韩</span></a></li>', r.prepend(l)
					}
				}
			}
		}, {
			key: "playBtnHandler",
			value: function(e) {
				y.default.debug("<<<<鍒囨崲鎾斁鐘舵€�<<<<" + e), this.togglePlayBtn(e), this.dispatchEvent(c.H5ComponentEvent.CHANGE_PLAY_STATUS, {
					status: this.playBtnStatus
				})
			}
		}, {
			key: "nextBtnHandler",
			value: function(e) {
				y.default.debug("<<<<鎾斁涓嬩竴闆�<<<<"), this.dispatchEvent(c.H5ComponentEvent.NEXT)
			}
		}, {
			key: "loopBtnHandler",
			value: function(e) {
				y.default.debug("<<<<鏄惁寰幆鎾斁<<<<");
				var t = this.loopBtn.children("i");
				t.attr("title", "寰幆"), t.hasClass("loop") ? (d.playerInfo.loop = !1, t.removeClass("loop").addClass("loop-not"), t.attr("title", "寮€濮嬪惊鐜挱鏀�")) : (d.playerInfo.loop = !0, t.removeClass("loop-not").addClass("loop"), t.attr("title", "鍋滄寰幆鎾斁")), this.dispatchEvent(c.H5ComponentEvent.LOOP, {
					status: d.playerInfo.loop
				})
			}
		}, {
			key: "replayHandler",
			value: function(e) {
				this.endUI.hide(), this.recoUI.hide(), this.dispatchEvent(c.H5ComponentEvent.REPLAY)
			}
		}, {
			key: "togglePlayBtn",
			value: function(e) {
				if(e != d.playStatus.END) {
					var t = this.playerBtn;
					this.miniWindow && (t = this.miniPlayBtn);
					var n = t.find(".play"),
						i = t.find(".pause");
					if(this.loadingUI.hide(), e) {
						if(this.playBtnStatus = e, e == d.playStatus.PAUSE && n.length) return;
						if(e == d.playStatus.PLAYING && i.length) return
					} else this.playBtnStatus = n.length ? d.playStatus.PLAYING : d.playStatus.PAUSE;
					var o = t.find("i");
					y.default.debug("this.togglePlayBtn=" + this.playBtnStatus), this.playBtnStatus == d.playStatus.PAUSE ? o.removeClass("pause").addClass("play") : this.playBtnStatus == d.playStatus.PLAYING && o.removeClass("play").addClass("pause")
				} else this.showEnd()
			}
		}, {
			key: "progressHandler",
			value: function(e) {
				if(e && e.stopPropagation(), "click" == e.type) {
					var t = this.progressListUI.width(),
						n = e.clientX - this.progressListUI.offset().left;
					n > t ? n = t : n < 0 && (n = 0), this.updateProgressBtn(n);
					var i = n / t;
					this.progressPlayUI.css("width", 100 * i + "%"), this.seekTime(i)
				} else "mouseenter" == e.type ? (this.progressUI.addClass("progresschangebig").removeClass("progresschangesmall"), this.progressBtn.show()) : "mouseleave" == e.type && (this.progressUI.addClass("progresschangesmall").removeClass("progresschangebig"), this.progressBtn.hide())
			}
		}, {
			key: "updateProgressBtn",
			value: function(e) {
				var t = this.progressListUI.width(),
					n = (e - .5 * this.progressBtn.children(".btn").width()) / t;
				this.progressBtn.css("left", 100 * n + "%")
			}
		}, {
			key: "seekTime",
			value: function(e) {
				var t = d.playerInfo.duration,
					n = Math.floor(t * e);
				this.dispatchEvent(c.H5ComponentEvent.SEEK, {
					time: n
				})
			}
		}, {
			key: "progressDragHandler",
			value: function(e, t, n) {
				e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
				var i = this.progressBtn.position().left,
					o = this.progressListUI.width();
				if("mousedown" == e.type) this.pDrag = !0, this.playBtnHandler(d.playStatus.PAUSE);
				else if("mousemove" == e.type) {
					if(!this.pDrag) return;
					(i = e.clientX - this.progressListUI.offset().left) > o ? i = o : i < 0 && (i = 0);
					var a = i / o * 100;
					this.progressPlayUI.css("width", a + "%"), this.updateProgressBtn(i), this.seekTime(i / o)
				} else if("mouseup" == e.type) {
					if(!this.pDrag) return;
					this.pDrag = !1, this.playBtnHandler(d.playStatus.PLAYING)
				}
			}
		}, {
			key: "zoomHandler",
			value: function(e) {
				var t = this.zoomBtn.find("i"),
					n = !0;
				t.hasClass("zoom-in") ? (t.removeClass("zoom-in").addClass("zoom-out"), t.attr("title", "鍏ㄥ睆"), n = !1) : (t.removeClass("zoom-out").addClass("zoom-in"), t.attr("title", "閫€鍑哄叏灞�"), n = !0), this.fullscreenVideo(n);
				var i = {
					dt: "act",
					data: {
						type: "fullscreen",
						value: n
					}
				};
				this.sendBip(i)
			}
		}, {
			key: "fullscreenVideo",
			value: function(e) {
				if(e) {
					var t = this.container[0];
					l.$.isFunction(t.requestFullscreen) ? t.requestFullscreen() : l.$.isFunction(t.webkitRequestFullScreen) ? t.webkitRequestFullScreen() : l.$.isFunction(t.mozRequestFullScreen) ? t.mozRequestFullScreen() : alert("娴忚鍣ㄤ笉鏀寔鍏ㄥ睆")
				} else l.$.isFunction(document.exitFullscreen) ? document.exitFullscreen() : l.$.isFunction(document.webkitCancelFullScreen) ? document.webkitCancelFullScreen() : l.$.isFunction(document.mozCancelFullScreen) ? document.mozCancelFullScreen() : alert("娴忚鍣ㄤ笉鏀寔鍏ㄥ睆")
			}
		}, {
			key: "pageZoomHandler",
			value: function(e) {
				var t = this.togglePageZoom();
				this.dispatchEvent(c.H5ComponentEvent.PAGE_ZOOM, t)
			}
		}, {
			key: "togglePageZoom",
			value: function(e) {
				var t = this.pageZoomBtn.find("i"),
					n = !0;
				return t.hasClass("page-zoom-in") ? (t.removeClass("page-zoom-in").addClass("page-zoom-out"), n = !1, t.attr("title", "缃戦〉鍏ㄥ睆")) : (t.removeClass("page-zoom-out").addClass("page-zoom-in"), n = !0, t.attr("title", "閫€鍑虹綉椤靛叏灞�")), n
			}
		}, {
			key: "barrageHandler",
			value: function(e) {
				var t = this.barrageBtn.find("i"),
					n = !0;
				t.hasClass("barrage-off") ? (t.removeClass("barrage-off").addClass("barrage-on"), n = !0) : (t.removeClass("barrage-on").addClass("barrage-off"), n = !1), this.dispatchEvent(c.H5ComponentEvent.BARRAGE, n)
			}
		}, {
			key: "volumeBtnHandler",
			value: function(e) {
				var t = (0, l.$)(e.target);
				if("click" == e.type) {
					if(t.hasClass("btn-bg"))(0, l.$)(".volume-content").hasClass("none") ? (0, l.$)(".volume-content").removeClass("none") : t.hasClass("volume") ? (t.removeClass("volume").addClass("mute"), this.seekVolume(0, !0)) : (t.removeClass("mute").addClass("volume"), this.seekVolume(d.playerInfo.volume));
					else if(!(0, l.$)(".volume-content").hasClass("none")) {
						var n = (0, l.$)(".volume-control").offset().top + (0, l.$)(".volume-control").height() - e.y;
						console.log(n), n > 100 ? n = 100 : n < 0 && (n = 0);
						var i = this.volumeBox.children(".volume-btn").children(".btn-bg");
						i.length > 0 && i.hasClass("mute") && i.removeClass("mute").addClass("volume"), this.seekVolume(n)
					}
				} else "mouseenter" == e.type || "mouseleave" == e.type && ((0, l.$)(".volume-content").hasClass("none") || (0, l.$)(".volume-content").addClass("none"))
			}
		}, {
			key: "setMute",
			value: function(e) {
				var t = this.volumeBox.children(".volume-btn").children(".btn-bg");
				e ? (t.removeClass("volume").addClass("mute"), this.seekVolume(0, !0)) : (t.removeClass("mute").addClass("volume"), this.seekVolume(d.playerInfo.volume))
			}
		}, {
			key: "volumeDragHandler",
			value: function(e, t, n) {
				e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(), e.cancelBubble = !0, e.returnValue = !1;
				var i = 0,
					o = (0, l.$)(".volume-slider").height();
				if("mousedown" == e.type) this.vDrag = !0;
				else if("mousemove" == e.type) {
					if(!this.vDrag) return;
					(i = (0, l.$)(".volume-control").offset().top + (0, l.$)(".volume-control").height() - e.y) > o ? i = o : i < 0 && (i = 0), this.seekVolume(i)
				} else if("mouseup" == e.type) {
					if(!this.vDrag) return;
					this.vDrag = !1
				}
			}
		}, {
			key: "seekVolume",
			value: function(e, t) {
				this.volumeBtn.css("bottom", e), this.volumeCurrent.css("height", e), t ? this.dispatchEvent(c.H5ComponentEvent.MUTED, {
					bl: !0
				}) : (this.dispatchEvent(c.H5ComponentEvent.MUTED, {
					bl: !1
				}), this.dispatchEvent(c.H5ComponentEvent.CHANGE_VOLUME, e))
			}
		}, {
			key: "speedHandler",
			value: function(e) {
				var t = (0, l.$)(e.target);
				if("click" == e.type) {
					if(this.speedBox.hasClass("disabled")) return;
					if(t.hasClass("txt"))(0, l.$)(".speed-content").hasClass("none") && (0, l.$)(".speed-content").removeClass("none");
					else if(t.hasClass("item-speed")) {
						var n = t.attr("data-val"),
							i = this.speedBox.find(".item-speed"),
							o = this.speedBox.find(".txt");
						i.removeClass("cur"), t.addClass("cur"), o.text(n + "x"), (0, l.$)(".speed-content").hasClass("none") || (0, l.$)(".speed-content").addClass("none"), this.dispatchEvent(c.H5ComponentEvent.CHANGE_SPEED, n)
					}
				} else "mouseenter" == e.type || "mouseleave" == e.type && ((0, l.$)(".speed-content").hasClass("none") || (0, l.$)(".speed-content").addClass("none"))
			}
		}, {
			key: "ratetypeHandler",
			value: function(e) {
				var t = this,
					n = (0, l.$)(e.target),
					i = parseInt(n.attr("data-val"));
				if("click" == e.type) {
					if(this.ratetypeBox.hasClass("disabled")) return;
					if(n.hasClass("txt"))(0, l.$)(".ratetype-content").hasClass("none") && (0, l.$)(".ratetype-content").removeClass("none");
					else if(n.hasClass("item-rt") || 41 == i) {
						if(41 == i) {
							if(window.location.href = this.deeplink, !p.H5Common.hasClient) var o = setTimeout(function() {
								p.H5Common.pcClientUrl = "http://pcdown.miguvideo.com/MiguApi/download/MiguVideo3.5.1.430.exe", p.H5Common.pcClientUrl ? location.href = p.H5Common.pcClientUrl : t.openApp(), clearTimeout(o)
							}, 3e3);
							return
						}
						var a = this.ratetypeBox.find(".item-rt"),
							r = this.ratetypeBox.find(".txt");
						a.removeClass("cur"), n.addClass("cur");
						var s = d.rateTypeList[i].txt1;
						r.text(s), this.dispatchEvent(c.H5ComponentEvent.CHANGE_RATETYPE, i);
						var u = '<div class="content rt">姝ｅ湪涓烘偍鍒囨崲鍒�<i class="rt-text">$ratetype</i> 娓呮櫚搴�</div>'.replace("$ratetype", s);
						this.show_rate_tips_ok_txt = '<div class="content rt">宸蹭负鎮ㄥ垏鎹㈠埌<i class="rt-text">$ratetype</i> 娓呮櫚搴�</div>'.replace("$ratetype", s), this.showTip(u), (0, l.$)(".ratetype-content").hasClass("none") || (0, l.$)(".ratetype-content").addClass("none")
					}
				} else "mouseenter" == e.type || "mouseleave" == e.type && ((0, l.$)(".ratetype-content").hasClass("none") || (0, l.$)(".ratetype-content").addClass("none"))
			}
		}, {
			key: "showTip",
			value: function(e) {
				this.leftTipContent.html(e), this.leftTipBtn.show(), "0px" == this.controlUI.css("bottom") && this.leftTipBtn.removeClass("vip-movedown").addClass("vip-moveup")
			}
		}, {
			key: "errorBtnHandler",
			value: function(e) {
				e && e.stopPropagation();
				var t = (0, l.$)(e.currentTarget),
					n = t.children(".refresh-btn"),
					i = t.children(".open-vip-btn"),
					o = t.children(".open-app"),
					a = t.children(".other-btn");
				n.length > 0 && window.location.reload(), i.length > 0 && this.openVip(), o.length > 0 && this.openApp(), a.length > 0 && this.openMzhan()
			}
		}, {
			key: "updateProgress",
			value: function(e) {
				var t = this;
				if(this.loadingUI.hide(), this.loadingStartUI.hide(), d.playerInfo.switchVideo) {
					this.showTip(this.show_rate_tips_ok_txt);
					var n = setTimeout(function() {
						!d.playerInfo.switchVideo && t.leftTipContent.children(".rt").length && (t.leftTipContent.html(""), t.leftTipBtn.hide()), clearTimeout(n)
					}, 2e3);
					d.playerInfo.switchVideo = !1
				}
				if(d.playerInfo.status != d.playStatus.END)
					if(d.playerInfo.playType == d.playType.VOD || d.playerInfo.playType == d.playType.HUIKAN) {
						var i = d.playerInfo.playType == d.playType.HUIKAN ? "hh:mm:ss" : "mm:ss",
							o = h.default.formatDate(new Date(Math.floor(1e3 * e.start)), i),
							a = h.default.formatDate(new Date(Math.floor(1e3 * e.end)), i),
							r = d.playerInfo.playType == d.playType.HUIKAN ? e.posi + e.start : e.posi,
							s = h.default.formatDate(new Date(Math.floor(1e3 * r)), i);
						this.initProgress ? this.startTimeUI.text(s) : (this.initProgress = !0, this.startTimeUI.text(o), this.endTimeUI.text(a), p.H5Common.pay && !I.userInfo.isVip && this.leftTipBtn.show(), this.showControl());
						var l = 100 * e.posi / (e.end - e.start);
						this.progressPlayUI.css("width", l + "%");
						var u = this.progressListUI.width() * l / 100;
						if(this.updateProgressBtn(u), e.buffered > 0) {
							var c = 100 * (e.buffered + e.start) / e.end;
							this.progressLoadUI.css("width", c + "%")
						}
					} else if(d.playerInfo.playType == d.playType.LIVE) {
					var f = h.default.formatDate(new Date(Math.floor(e.live)), "hh:mm:ss");
					this.initProgress || (this.initProgress = !0, this.showControl()), this.liveTimeUI.text(f)
				}
			}
		}, {
			key: "showControl",
			value: function(e, t) {
				if(this.initProgress && d.playerInfo.status != d.playStatus.END && "none" == this.endUI.css("display") && !this.miniWindow)
					if(t = !!t, null == e || "mousemove" == e.type || "mouseenter" == e.type) "hidden" == this.controlUI.css("visibility") && this.controlUI.css("visibility", "visible"), "0px" == this.controlUI.css("bottom") ? this.hideInter < 0 ? this.showControlAnimation(t) : (clearTimeout(this.hideInter), this.hideInter = -1, this.showControlAnimation(t)) : (this.controlVisible(!0), this.showControlAnimation(t));
					else if("click" == e.type) {
					if((0, l.$)(".context-menu").length > 0) return;
					this.playBtnHandler(d.playStatus.PAUSE == d.playerInfo.status ? d.playStatus.PLAYING : d.playStatus.PAUSE)
				} else e.type
			}
		}, {
			key: "showCXMenu",
			value: function(e) {
				e.preventDefault();
				var t = e.clientX,
					n = e.clientY;
				(0, l.$)(".context-menu").length || (0, l.$)(document.body).append(f.contextMenuHtml), (0, l.$)(".context-menu").css({
					left: t,
					top: n
				}), document.body.addEventListener("click", function t() {
					(0, l.$)(".context-menu").length && ((0, l.$)(".context-menu").remove(), e.stopPropagation(), e.preventDefault()), document.body.removeEventListener("click", t, !1)
				}, !1)
			}
		}, {
			key: "controlVisible",
			value: function(e) {
				var t = "0px" == this.controlUI.css("bottom"),
					n = "none" != this.leftTipBtn.css("display") && this.leftTipBtn.children(".tips-content").html();
				e ? t || (this.controlUI.removeClass("fadehide").addClass("fadeshow"), n && this.leftTipBtn.removeClass("vip-movedown").addClass("vip-moveup")) : t && (this.controlUI.removeClass("fadeshow").addClass("fadehide"), n && this.leftTipBtn.removeClass("vip-moveup").addClass("vip-movedown"))
			}
		}, {
			key: "showControlAnimation",
			value: function(e) {
				var t = this;
				this.hideInter > -1 && (clearTimeout(this.hideInter), this.hideInter = -1), e || (this.hideInter = setTimeout(function() {
					t.clearAnimation()
				}, 5e3))
			}
		}, {
			key: "clearAnimation",
			value: function() {
				clearTimeout(this.hideInter), this.hideInter = -1, this.playBtnStatus !== d.playStatus.PAUSE && this.controlVisible(!1)
			}
		}, {
			key: "openApp",
			value: function() {
				try {
					var e = location.origin + "/mgs/website/prd/download.html";
					window.open(e)
				} catch(e) {}
			}
		}, {
			key: "tipHandler",
			value: function(e) {
				(0, l.$)(e.target).hasClass("tips-close-btn") ? (0, l.$)(e.currentTarget).remove() : this.leftTipContent.children(".vip").length && this.openVip()
			}
		}, {
			key: "openVip",
			value: function(e) {
				e && e.stopPropagation(), e && (0, l.$)(e.target).hasClass("tips-close-btn") ? (0, l.$)(e.currentTarget).remove() : (this.dispatchEvent(c.H5ComponentEvent.OPEN_VIP), this.sendBip({
					dt: "act",
					data: {
						type: "openVip"
					}
				}))
			}
		}, {
			key: "openMzhan",
			value: function() {
				var e = location.origin + "/mgs/website/prd/index.html";
				window.location.href = e
			}
		}, {
			key: "onFadeHandler",
			value: function(e) {
				if(this.initProgress && d.playerInfo.playType != d.playType.LIVE) {
					var t = "0px" == this.controlUI.css("bottom"),
						n = e.type;
					"fadeout" != e.animationName || "animationend" != n && "webkitAnimationEnd" != n ? "fadein" != e.animationName || "animationstart" != n && "webkitAnimationStart" != n || t || this.progressBtn.removeClass("none") : t || this.progressBtn.addClass("none")
				}
			}
		}, {
			key: "keyDownHandler",
			value: function(e) {
				if(32 == e.keyCode && this.isSpaceKeyUsed && this.playBtnHandler(d.playStatus.PAUSE == d.playerInfo.status ? d.playStatus.PLAYING : d.playStatus.PAUSE), 38 == e.keyCode || 40 == e.keyCode) {
					d.playerInfo.status != d.playStatus.END && e.preventDefault();
					var t = d.playerInfo.volume,
						n = t % 5;
					38 == e.keyCode && (t += 0 != n ? 5 - n : 5) > 100 && (t = 100), 40 == e.keyCode && (t -= 0 != n ? n : 5) < 0 && (t = 0), this.seekVolume(t)
				}
				if((37 == e.keyCode || 39 == e.keyCode) && (e.preventDefault(), this.isSpaceKeyUsed && this.initProgress)) {
					var i, o = d.playerInfo.posi;
					if(d.playerInfo.playType != d.playType.VOD && d.playerInfo.playType != d.playType.HUIKAN) return;
					0, i = d.playerInfo.duration, 10, 0;
					try {
						37 == e.keyCode ? (o -= 10) < 0 && (o = 0) : 39 == e.keyCode && (o += 10) > i && (o = i), this.seekTime(o / i)
					} catch(e) {}
				}
			}
		}, {
			key: "addListenerScreenChange",
			value: function() {
				this.zoomBtn.find("i");
				var e = this,
					t = function(t) {
						if(!e.checkFull()) {
							var n = e.zoomBtn.find("i");
							n.removeClass("zoom-in").addClass("zoom-out"), n.attr("title", "鍏ㄥ睆")
						}
					};
				this.container[0].addEventListener("fullscreenchange", t), document.addEventListener("mozfullscreenchange", t), this.container[0].addEventListener("webkitfullscreenchange", t), this.container[0].addEventListener("MSFullscreenChange", t)
			}
		}, {
			key: "showMiniControl",
			value: function(e) {
				d.playerInfo.status != d.playStatus.END ? e ? (this.miniWindow = !0, this.togglePlayBtn(d.playerInfo.status), this.controlUI.css("visibility", "hidden")) : (this.miniWindow = !1, this.togglePlayBtn(d.playerInfo.status), this.showControl()) : this.miniWindow = !1
			}
		}, {
			key: "checkFull",
			value: function() {
				return !!(document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen)
			}
		}, {
			key: "nextVideo",
			value: function() {
				d.playerInfo.start || (this.initProgress = !1, this.init())
			}
		}, {
			key: "showEnd",
			value: function() {
				d.playerInfo.switchVideo || (this.tipsUI.hide(), this.controlVisible(!1)), this.recoUI.hide(), this.initProgress = !1
			}
		}, {
			key: "showError",
			value: function(e) {
				var t = 0,
					n = "";
				if(e) {
					if(t = parseInt(e.code), d.playerInfo.errorObj.cid == d.playerInfo.cid && 601 == d.playerInfo.errorObj.errorID) return;
					d.playerInfo.errorObj = {
						cid: d.playerInfo.cid,
						errorID: t
					}, n = e.msg || ""
				}
				var i = "refresh-btn",
					o = n || "鑺傜洰鍑洪敊浜唦",
					a = "鍒锋柊鑺傜洰",
					r = null,
					s = !0;
				switch(t) {
					case 401:
					case 411:
					case 403:
					case 501:
						i = "open-app", o = "鍥犵増鏉冮檺鍒讹紝璇锋壂鐮佸墠寰€鎵嬫満APP瑙傜湅瀹屾暣鍐呭", a = "涓嬭浇鍜挄瑙嗛APP", s = !1;
						break;
					case 409:
						i = "open-vip-btn", o = "璇ュ唴瀹逛负浠樿垂鍐呭锛岃寮€閫氫細鍛樿鐪�", a = "寮€閫氫細鍛�", r = "vip-icon", s = !1;
						break;
					case 400:
					case 410:
					case 404:
						i = "other-btn", o = "鐪熸姳姝夛紝鎮ㄨ鎵剧殑鑺傜洰濂藉儚澶辫釜浜�", a = "鐪嬬湅鍏朵粬鑺傜洰";
						break;
					case 412:
						i = "open-vip-btn", o = "璇曠湅宸茬粡缁撴潫浜嗗摝锛屽紑閫氫細鍛樿鐪嬪畬鏁村唴瀹�", a = "闄愭椂娲诲姩  浼樻儬寮€閫歏IP浼氬憳", r = "vip-icon", s = !1;
						break;
					case 2e3:
						i = "refresh-btn", o = "鐪熷按灏紝濂藉儚鍑轰簡鐐归棶棰橈紝鍒锋柊鍚庡啀璇曡瘯鐪嬪摝锝�", a = "绔嬪嵆鍒锋柊";
						break;
					case 2001:
						i = "open-app", o = "褰撳墠鍐呭闇€瑕佺敤鍒告挱鏀撅紝璇峰墠寰€APP瑙傜湅瀹屾暣鍐呭", a = "涓嬭浇鍜挄瑙嗛APP", s = !1;
						break;
					case 3005:
						i = "open-app", o = "鎮ㄤ娇鐢ㄧ殑娴忚鍣ㄧ増鏈繃浣庯紝璇峰墠寰€瀹㈡埛绔鐪嬪畬鏁村唴瀹�", a = "涓嬭浇鍜挄瑙嗛瀹㈡埛绔�", s = !1;
						break;
					case 601:
						i = "open-app", a = "鐪嬬湅鍏朵粬鑺傜洰", s = !1
				}
				this.setErrorUI({
					id: t,
					className: i,
					des: o,
					btnText: a,
					iconClass: r,
					showErrorID: s
				}), v.default.postMessage(m.ExternalEvent.VIDEO_ERROR, e)
			}
		}, {
			key: "setErrorUI",
			value: function(e) {
				if(e.id) {
					this.tipsUI.hide(), this.controlVisible(!1), this.endUI.show(), this.errorUI.show(), this.recoUI.hide(), this.openVipUI.hide();
					var t = e.id,
						n = e.className,
						i = e.des,
						o = e.btnText,
						a = (e.iconClass, this.errorUI.find(".text")),
						r = this.errorUI.find(".btns").children("div");
					a.text(i), r.removeClass().addClass(n), r.children("span").text(o), !0 === e.showErrorID ? (this.errorCodeUI.show(), this.errorCodeUI.children("span").text(t)) : this.errorCodeUI.hide();
					var s = this.errorUI.find(".bg"),
						l = this.errorUI.find(".download-img"),
						u = this.errorUI.find(".btns");
					"open-app" == n ? (s && s.show(), l && l.show(), u && u.hide()) : (s && s.hide(), l && l.hide(), u && u.show())
				}
			}
		}, {
			key: "sendBip",
			value: function(e) {
				this.dispatchEvent(c.H5ComponentEvent.VIDEO_BIP, e)
			}
		}, {
			key: "showSpeedUI",
			value: function(e) {
				if(this.speedBox.hasClass("disabled") && this.speedBox.removeClass("disabled"), e.speed) {
					var t = this.speedBox.find(".item-speed");
					this.speedBox.find(".txt"), t.removeClass("cur");
					for(var n = null, i = 0; i < t.length; i++) n = t[i], (0, l.$)(n).attr("data-val") == e.speed && (0, l.$)(n).addClass("cur")
				}
				e.rSpeed && this.speedBox.find(".txt").text(e.rSpeed + "x")
			}
		}, {
			key: "setReco",
			value: function(e) {
				if(!e || !e.length) return this.endUI.show(), this.recoUI.show(), void this.recoUI.children(".reco-content").children(".reco-subtitle").hide();
				this.endUI.show(), this.recoUI.show();
				var t = this.recoUI.children(".reco-content").children(".reco-list");
				if(t.html(""), this.container.width() > 500 ? (t.addClass("big"), e.length > 6 && (e = e.splice(0, 6))) : (t.addClass("small"), e.length > 2 && (e = e.splice(0, 2))), e)
					for(var n = "", i = "", o = "", a = "/", r = "", s = 0; s < e.length; s++) i = e[s].h5pics.lowResolutionH, o = e[s].name, (r = e[s].action.params.contentID) && (a = location.origin + "/mgs/website/prd/detail.html?cid=" + r), n = '<li class="reco-item"><a href=' + a + ' class="item-act"><img src=' + i + ' class="reco-item-img"><span class="reco-item-name">' + o + "</span></a></li>", t.append(n)
			}
		}]), t
	}(u.default);
	t.default = g
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.miniWindowControl = t.contextMenuHtml = t.endHtml = t.tipsHtml = t.controlHtml = t.videoHtml = void 0;
	var i = n(6);
	t.videoHtml = '<div class="video-wrapper"><video id="m-player" class="m-player" x5-playsinline="" playsinline="" webkit-playsinline="" x-webkit-airplay="allow" preload="true">鎮ㄧ殑娴忚鍣ㄤ笉鏀寔HTML5锛屾棤娉曡鐪嬫垜浠彁渚涚殑瑙嗛锛佸缓璁娇鐢ㄩ珮鐗堟湰娴忚鍣ㄨ鐪嬶紝璋㈣阿锛�</video></div>', t.controlHtml = '<div class="control-wrapper"><div class="progress-control"><div class="progress-control-list"><div class="progress-control-load"></div><div class="progress-control-play"></div><div class="progress-control-btn"><i class="btn"></i></div></div></div><div class="left-control"><div class="control-btn play-btn"><i class="btn-bg play"></i></div><div class="control-btn next-btn"><i class="btn-bg next" title="涓嬩竴闆�"></i></div><div class="control-btn loop-btn"><i class="btn-bg loop-not" title="寮€濮嬪惊鐜挱鏀�"></i></div><div class="control-btn time-txt"><span class="txt cur-time ">00:00</span><span class="txt">/</span><span class="txt end-time">100:00</span></div></div><div class="live-btns none"><div class="icon">鐩存挱</div><div class="live-time">11:00</div></div><div class="right-control"><div class="zoom-btn"><i class="btn-bg zoom-out" title="鍏ㄥ睆"></i></div><div class="page-zoom-btn"><i class="btn-bg page-zoom-out" title="缃戦〉鍏ㄥ睆"></i></div><div class="volume-box"><div class="volume-btn"><i class="btn-bg volume" title="闊抽噺"></i></div><div class="volume-content none"><div class="volume-control"><div class="volume-slider"><div class="slider-btn"><i class="btn"></i></div><div class="volume-current"></div></div></div></div></div><div class="speed-box disabled"><div class="txt-btn speed"><i class="txt">鍊嶉€�</i></div><div class="speed-content none"><ul class="ul-speed"><li class="item-speed" data-val="0.5">0.5x</li><li class="item-speed" data-val="1.0">1.0x</li><li class="item-speed" data-val="1.25">1.25x</li><li class="item-speed" data-val="1.5">1.5x</li><li class="item-speed" data-val="2.0">2.0x</li></ul></div></div><div class="ratetype-box disabled"><div class="txt-btn ratetype"><i class="txt">楂樻竻</i></div><div class="ratetype-content none"><ul class="ul-rt"><li class="item-rt" data-val="4">钃濆厜 1080p</li><li class="item-rt" data-val="3">瓒呮竻 720p</li><li class="item-rt cur" data-val="2">楂樻竻 480p</li><li class="item-rt" data-val="1">鏍囨竻 270p</li></ul></div></div><div class="barrage-btn none"><i class="btn-bg barrage-off"></i></div></div></div>', t.tipsHtml = '<div class="player-tips"><div class="player-tips-loading"><div class="p-loading"><div class="icon"><div class="icon_bg"></div><div class="icon_hight"></div></div></div></div><div class="player-start-loading"><div class="p-loading"><i class="start-loading"></i></div></div><div class="smallwindow-btn none"><i class="smallwindow-icon"></i><span>灏忕獥鎾斁</span></div><div class="kandan-btn none"><i class="kandan-icon"></i><span>鍔犲叆鐪嬪崟</span></div><div class="left-tips none"><div class="tips-close-btn" title="鍏抽棴"></div><div class="tips-content"></div></div></div>', t.endHtml = '<div class="end-wrapper none"><div class="error-wrapper none"><div class="error-content"><div class="bg"></div><div class="text">鐪熷按灏紝濂藉儚鍑轰簡鐐归棶棰橈紝鍒锋柊璇曡瘯鐪媬</div><div class="btns"><div class="refresh-btn"><i class="vip-icon none"></i><span>绔嬪嵆鍒锋柊</span></div></div><div class="download-img"></div></div><div class="error-id">鎻愮ず:<span>1032</span></div></div><div class="reco-wrapper none"><div class="replay">閲嶆挱</div><div class="reco-content"><div class="reco-title">鎮ㄨ鐪嬬殑瑙嗛宸叉挱鏀惧畬姣�</div><div class="reco-subtitle"><div class="title-l-r-line"><div class="r-line"></div><div class="r-title">鐑棬鎺ㄨ崘</div></div></div><ul class="reco-list"></ul></div></div><div class="open-vip none"><div class="vip-content"><div class="title">璇曠湅缁撴潫锛屽紑閫歏IP浼氬憳鍏嶈垂鐪�</div><div class="content"><div class="icon"><i class="vip-icon"></i><span class="sub-title">闄愭椂娲诲姩  浼樻儬寮€閫歏IP浼氬憳</span></div><div class = "qr-code"><i class="ma"></i><div class="txt">鏀粯瀹濇壂鐮佸揩閫熷紑閫氫細鍛�</div></div></div></div></div></div>', t.contextMenuHtml = '<div class="context-menu"><div class="txt">Build HTML5Player ' + i.H5Common.version + '</div><div class="txt">Powered by 鍜挄瑙嗛 </div></div>', t.miniWindowControl = '<div class="mini-control none"><div class="control-btn"><div class="play-btn"><i class="btn-bg play"></i></div></div></div>'
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.dragDrop = function(e, t, n) {
		var i = 0,
			o = 0,
			a = !1,
			r = null,
			s = n,
			l = t && t.mouseDownHandler,
			u = t && t.mouseMoveHandler,
			d = t && t.mouseUpHandler,
			c = function e(t) {
				switch(t.type) {
					case "mousedown":
						r = t.target, setTimeout(function() {
							a = !0
						}, 200), a = !0, i = t.clientX - r.offsetLeft, o = t.clientY - r.offsetTop, document.addEventListener("mousemove", e, !1), document.addEventListener("mouseup", e, !1), l && l.call(s, t);
						break;
					case "mousemove":
						if(!0 === a) {
							var n = t.clientY - o,
								c = t.clientX - i;
							u && u.call(s, t, n, c)
						}
						break;
					case "mouseup":
						d && d.call(s, t, n, c), document.removeEventListener("mousemove", e, !1), document.removeEventListener("mouseup", e, !1), a = !1, r = null
				}
			};
		return {
			register: function() {
				e.addEventListener("mousedown", c, !1)
			},
			remove: function() {
				e.removeEventListener("mousedown", c, !1)
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = m(n(2)),
		o = m(n(0)),
		a = m(n(1)),
		r = m(n(3)),
		s = m(n(4)),
		l = m(n(8)),
		u = m(n(183)),
		d = n(19),
		c = n(18),
		p = m(n(65)),
		f = m(n(15)),
		h = n(16),
		v = m(n(7)),
		y = n(11);

	function m(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var E = function(e) {
		function t(e) {
			return(0, o.default)(this, t), (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e))
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "onRegister",
			value: function() {
				v.default.debug("娉ㄥ唽 pcVideoComponent"), this.setViewComponent(new u.default), this.viewComponent.addEventListener(d.H5ComponentEvent.WEB_PLAY, this.onVideoHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.VIDEO_UPDATE, this.onVideoHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.VIDEO_STATE, this.onVideoHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.VIDEO_WAITING, this.onVideoHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.PLAY_ERROR, this.onVideoHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.VIDEO_ERROR, this.onVideoHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.HIDE_UI, this.onVideoHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.VIDEO_BIP, this.onVideoHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.SHOW_SPEED_UI, this.onVideoHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.SET_MUTE, this.onVideoHandler, this), this.viewComponent.addEventListener(d.H5ComponentEvent.VIDEO_SHOW_RECO, this.onVideoHandler, this), this.viewComponent.init()
			}
		}, {
			key: "handleEvent",
			value: function(e, t) {
				this.viewComponent
			}
		}, {
			key: "listNotificationInterests",
			value: function() {
				return [c.H5Notification.PLAY_SUCCESS, c.H5Notification.SKIN_START_PLAY, c.H5Notification.EXTERNAL_NOTICATION, c.H5Notification.SKIN_CHANGE_PLAY_STATUS, c.H5Notification.SKIN_SEEK, c.H5Notification.SKIN_FULLSCREEN, c.H5Notification.SKIN_CHANGE_RATETYPE, c.H5Notification.SKIN_CHANGE_SPEED, c.H5Notification.SKIN_CHANGE_VOLUME, c.H5Notification.SKIN_REPLAY, c.H5Notification.SKIN_MUTED]
			}
		}, {
			key: "handleNotification",
			value: function(e) {
				var t = e.getBody();
				switch(v.default.debug("<<<<" + e.getName() + ",<<<<<" + t), e.getName()) {
					case c.H5Notification.PLAY_SUCCESS:
						this.viewComponent.setPlayData(t), y.playerInfo.next ? this.sendNotification(c.H5Notification.VIDEO_NEXT) : this.sendNotification(c.H5Notification.VIDEO_SHOW_START_PLAY_BTN), f.default.postMessage(h.ExternalEvent.VIDEO_STATUS, h.playerStatusType.VIDEO_READY);
						break;
					case c.H5Notification.SKIN_START_PLAY:
						this.viewComponent.playVideo();
						break;
					case c.H5Notification.EXTERNAL_NOTICATION:
						var n = e.getType();
						this.externalHandler(n, t);
						break;
					case c.H5Notification.SKIN_CHANGE_PLAY_STATUS:
						this.viewComponent.changePlayStatus(t.status);
						break;
					case c.H5Notification.SKIN_SEEK:
						this.viewComponent.seekVideo(t.time);
						break;
					case c.H5Notification.SKIN_FULLSCREEN:
						this.viewComponent.fullscreen({
							type: "webkitbeginfullscreen"
						});
						break;
					case c.H5Notification.SKIN_CHANGE_RATETYPE:
						console.log("璁剧疆鍒嗚鲸鐜�", t), this.viewComponent.switchVideo(t);
						break;
					case c.H5Notification.SKIN_CHANGE_SPEED:
						console.log("璁剧疆閫熷害", t), this.viewComponent.speed = t;
						break;
					case c.H5Notification.SKIN_CHANGE_VOLUME:
						console.log("璁剧疆闊抽噺", t), this.viewComponent.volume = t;
						break;
					case c.H5Notification.SKIN_REPLAY:
						console.log("replay--"), this.viewComponent.playVideo();
						break;
					case c.H5Notification.SKIN_MUTED:
						console.log("muted--"), this.viewComponent.setMuted(t.bl)
				}
			}
		}, {
			key: "onVideoHandler",
			value: function(e) {
				var t = e.data;
				switch(e.type) {
					case d.H5ComponentEvent.WEB_PLAY:
						this.facade.retrieveProxy(p.default.NAME).loadData();
						break;
					case d.H5ComponentEvent.VIDEO_UPDATE:
						this.sendNotification(c.H5Notification.VIDEO_UPDATE, t);
						break;
					case d.H5ComponentEvent.VIDEO_STATE:
						this.sendNotification(c.H5Notification.VIDEO_STATE, t);
						break;
					case d.H5ComponentEvent.VIDEO_WAITING:
						this.sendNotification(c.H5Notification.VIDEO_WAITING, t);
						break;
					case d.H5ComponentEvent.PLAY_ERROR:
						this.sendNotification(c.H5Notification.PLAY_ERROR, t);
						break;
					case d.H5ComponentEvent.VIDEO_ERROR:
						this.sendNotification(c.H5Notification.VIDEO_ERROR, t);
						break;
					case d.H5ComponentEvent.HIDE_UI:
						this.sendNotification(c.H5Notification.VIDEO_HIDE_UI, t);
						break;
					case d.H5ComponentEvent.VIDEO_BIP:
						f.default.postMessage(h.ExternalEvent.VIDEO_BIP, t);
						break;
					case d.H5ComponentEvent.SHOW_SPEED_UI:
						this.sendNotification(c.H5Notification.VIDEO_SHOW_SPEED_UI, t);
						break;
					case d.H5ComponentEvent.SET_MUTE:
						this.sendNotification(c.H5Notification.VIDEO_SET_MUTE, t);
						break;
					case d.H5ComponentEvent.VIDEO_SHOW_RECO:
						this.sendNotification(c.H5Notification.VIDEO_SHOW_RECO, t)
				}
			}
		}, {
			key: "externalHandler",
			value: function(e, t) {
				switch(v.default.debug("澶栭儴璋冪敤鎺ュ彛" + e + "," + t), e) {
					case c.ExternalApiType.VIDEO_VOLUME:
						this.viewComponent.volume = t.volume || .5;
						break;
					case c.ExternalApiType.VIDEO_SWITCH:
						this.viewComponent.switchVideo(t.rateType);
						break;
					case c.ExternalApiType.VIDEO_FULLSCREEN:
						this.viewComponent.appleFullScreen();
						break;
					case c.ExternalApiType.VIDEO_PLAY:
						this.viewComponent.playVideo(t.id)
				}
			}
		}, {
			key: "onRemove",
			value: function() {
				this.setViewComponent(null)
			}
		}]), t
	}(l.default.Mediator);
	E.NAME = "pc_video_mediator", t.default = E
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = _(n(2)),
		o = _(n(0)),
		a = _(n(1)),
		r = _(n(3)),
		s = _(n(4)),
		l = _(n(34)),
		u = n(19),
		d = n(6),
		c = n(32),
		p = n(11),
		f = n(27),
		h = _(n(7)),
		v = _(n(33)),
		y = _(n(15)),
		m = n(16),
		E = n(69),
		I = n(184);

	function _(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var g = function(e) {
		function t(e) {
			return(0, o.default)(this, t), (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e))
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "init",
			value: function() {
				this.player = (0, c.$)(d.H5Common.container).find(".m-player"), this.modPlayer = (0, c.$)(d.H5Common.container).find(".mod-player"), this.initError = !1, this.player.length || (h.default.debug("video鏍囩涓嶅瓨鍦�"), this.initError = !0), this.scale = 160 / 90, this.initError || (this.dispatchEvent(u.H5ComponentEvent.WEB_PLAY), this.video = this.player[0], this.video.removeAttribute("controls"), this.videoWH = {
					ow: d.H5Common.ow,
					oh: Math.round(9 * d.H5Common.ow / 16)
				}, this.resize(), this.initObserver(), this.preWatchTime = 0, p.playerInfo.autoplay = !0, p.playerInfo.switchVideo = !1)
			}
		}, {
			key: "setPlayData",
			value: function(e) {
				if(e && e.url) {
					this.showPay = !1, this.playData = e, this.canplay = !1, this.watchTime = 0, this.watchInter = -1, (0, c.$)(this.video).show(), p.playerInfo.rateType = e.rateType, p.playerInfo.status = p.playStatus.PAUSE, p.playerInfo.url = this.replaceUrl(e.url);
					var t = this.video.playbackRate;
					if(t) {
						var n = v.default.remeberSpeed();
						n && (this.video.playbackRate = t = n), p.playerInfo.playbackRate = t, this.video.url || this.dispatchEvent(u.H5ComponentEvent.SHOW_SPEED_UI, {
							status: p.playerInfo.playbackRate,
							speed: t,
							rSpeed: n
						})
					}
					var i = this;
					if(p.playType.VOD == p.playerInfo.playType) {
						var o = v.default.remeberPosi(p.playerInfo.cid);
						o && (d.H5Common.pay && !f.userInfo.isVip && o > 360 || (p.playerInfo.posi = o))
					}
					if(p.playerInfo.url.indexOf(".m3u8") > 0)
						if(Hls.isSupported()) {
							var a = "debug" === v.default.getQueryString("player"),
								r = new Hls({
									debug: a
								});
							window.location.href.indexOf("fangdao") > -1 && (p.playerInfo.url = "http://testvod.migucloud.com/live/zjrtest0508/index.m3u8"), r.loadSource(p.playerInfo.url), r.attachMedia(this.video), r.on(Hls.Events.MANIFEST_PARSED, function() {
								i.initPlay()
							})
						} else this.dispatchEvent(u.H5ComponentEvent.VIDEO_ERROR, {
							code: 3005,
							msg: "涓嬭浇app瑙傜湅"
						});
					else this.video.src = p.playerInfo.url = e.url, this.initPlay()
				} else h.default.debug("鑾峰彇鎾斁鍦板潃涓虹┖")
			}
		}, {
			key: "initPlay",
			value: function() {
				var e = this,
					t = this.video.play();
				(0, I.env)(), t && t.then(function() {
					p.playerInfo.autoplay || e.video.pause(), e.video.muted || (e.setMuted(!1), e.dispatchEvent(u.H5ComponentEvent.SET_MUTE, {
						bl: !1
					}), e.remeberAll())
				}).catch(function(t) {
					p.playerInfo.autoplay ? (e.setMuted(!0), e.video.play(), e.dispatchEvent(u.H5ComponentEvent.SET_MUTE, {
						bl: !0
					}), e.remeberAll()) : e.video.pause()
				})
			}
		}, {
			key: "remeberAll",
			value: function() {
				if(p.playType.VOD == p.playerInfo.playType) {
					var e = v.default.remeberPosi(p.playerInfo.cid);
					e && (d.H5Common.pay && !f.userInfo.isVip && e > 360 || this.seekVideo(e))
				}
				this.video.playbackRate = p.playerInfo.playbackRate
			}
		}, {
			key: "replaceUrl",
			value: function(e) {
				var t = "";
				return p.playerInfo.playType == p.playType.LIVE || p.playerInfo.playType == p.playType.HUIKAN ? (t = "h5live.gslb.cmvideo.cn", e.indexOf("gslbmgsplive.miguvideo.com") > -1 && (t = "gslbmgsplive.miguvideo.com"), e.replace(t, "live.hcs.cmvideo.cn:8088")) : (t = "h5vod.gslb.cmvideo.cn", e.indexOf("gslbmgspvod.miguvideo.com") > -1 && (t = "gslbmgspvod.miguvideo.com"), e.replace(t, "vod.hcs.cmvideo.cn:8088"))
			}
		}, {
			key: "initPlayerInfo",
			value: function() {
				p.playerInfo.posi = 0, p.playerInfo.buffered = 0, p.playerInfo.start = !1, p.playerInfo.end = !1, p.playerInfo.switchVideo = !1
			}
		}, {
			key: "playVideo",
			value: function(e) {
				e ? (this.video.pause(), this.initPlayerInfo(), p.playerInfo.cid = e, p.playerInfo.next = !0, (0, E.createClientID)(), this.dispatchEvent(u.H5ComponentEvent.WEB_PLAY)) : p.playerInfo.status == p.playStatus.PAUSE ? this.video.play() : p.playerInfo.status == p.playStatus.END && ((0, E.createClientID)(), this.video.currentTime = 0, this.showPay = !1, this.video.play())
			}
		}, {
			key: "stopVideo",
			value: function() {
				p.playerInfo.status = p.playStatus.END, p.playerInfo.end = !0, p.playerInfo.posi = 0, p.playerInfo.buffered = 0, this.preWatchTime = 0, p.playerInfo.start = !1, this.watchTime = 0, this.watchInter > -1 && (window.clearInterval(this.watchInter), this.watchInter = -1), this.dispatchEvent(u.H5ComponentEvent.VIDEO_STATE, {
					status: p.playerInfo.status
				})
			}
		}, {
			key: "changePlayStatus",
			value: function(e) {
				e == p.playStatus.PAUSE ? this.video.pause() : this.video.play()
			}
		}, {
			key: "switchVideo",
			value: function(e) {
				h.default.debug("褰撳墠鐮佹祦<<<" + p.playerInfo.rateType + ",闇€鍒囨崲鐨勭爜娴�<<" + e);
				var t = d.H5Common.playData.urlInfos[e];
				if(e != p.playerInfo.rateType) {
					var n = 0;
					p.playerInfo.status != p.playStatus.END && (n = this.video.currentTime), t ? (p.playerInfo.switchVideo = !0, this.stopVideo(), (0, E.createClientID)(), this.setPlayData(t), this.preWatchTime = n, this.playVideo(), this.dispatchEvent(u.H5ComponentEvent.HIDE_UI)) : h.default.debug("<<<<<<闇€鍒囨崲鐨勭爜娴佹棤瀵瑰簲鐨勫湴鍧€淇℃伅")
				} else p.playerInfo.status == p.playStatus.END && ((0, E.createClientID)(), this.playVideo(), this.dispatchEvent(u.H5ComponentEvent.HIDE_UI))
			}
		}, {
			key: "resize",
			value: function() {
				this.scale = this.videoWH.oh / this.videoWH.ow
			}
		}, {
			key: "changeSpeed",
			value: function() {}
		}, {
			key: "initObserver",
			value: function() {
				var e = this;
				this.player.on("loadstart", function(t) {
					return e.loadStart(t)
				}), this.player.on("loadedmetadata loadeddata durationchange", function(t) {
					return e.loadData(t)
				}), this.player.on("canplaythrough", function(t) {
					return e.canplaythrough(t)
				}), this.player.on("seeking waiting  stalled", function(t) {
					return e.waiting(t)
				}), this.player.on("timeupdate", v.default.throttle(function(t) {
					e.timeupdate(t)
				}, 1e3)), this.player.on("ended", function(t) {
					return e.ended(t)
				}), this.player.on("pause", function(t) {
					return e.pause(t)
				}), this.player.on("playing", function(t) {
					return e.playing(t)
				}), this.player.on("abort error", function(t) {
					return e.error(t)
				})
			}
		}, {
			key: "loadStart",
			value: function(e) {
				h.default.debug("褰撳墠鎺ユ敹浜嬩欢 ==>> ", e.type)
			}
		}, {
			key: "loadData",
			value: function(e) {
				h.default.debug("褰撳墠鎺ユ敹浜嬩欢 ==>> ", e.type), "loadedmetadata" == e.type && (this.videoWH = {
					width: this.video.videoWidth,
					height: this.video.videoHeight
				}, this.resize()), this.getDuration()
			}
		}, {
			key: "getDuration",
			value: function() {
				var e = this.video.duration;
				isNaN(e) || e == Number.POSITIVE_INFINITY ? h.default.debug("褰撳墠duration ==>> " + e + ",閰嶇疆鏂囦欢鐨刣uration=" + p.playerInfo.duration) : (p.playerInfo.duration = this.video.duration, h.default.debug("褰撳墠duration ==>> " + e + ",閰嶇疆鏂囦欢鐨刣uration=" + p.playerInfo.duration))
			}
		}, {
			key: "canplaythrough",
			value: function(e) {
				h.default.debug("褰撳墠鎺ユ敹浜嬩欢canplaythrough ==>> ", e.type), this.canplay || (this.canplay = !0, this.preWatchTime > 0 && (this.video.currentTime = this.preWatchTime, h.default.debug("this.video.currentTime ==>> ", this.preWatchTime)))
			}
		}, {
			key: "waiting",
			value: function(e) {
				h.default.debug("褰撳墠鎺ユ敹浜嬩欢 ==>> ", e.type), "seeking" != e.type && "waiting" != e.type || this.dispatchEvent(u.H5ComponentEvent.VIDEO_WAITING)
			}
		}, {
			key: "timeupdate",
			value: function(e) {
				var t = this;
				if(p.playerInfo.status != p.playStatus.END || 0 == this.video.currentTime) {
					p.playerInfo.posi = this.video.currentTime;
					var n = -1,
						i = 0;
					try {
						i = this.video.buffered.end(0)
					} catch(e) {}
					if(p.playerInfo.buffered !== i && (n = i, p.playerInfo.buffered = i), this.watchInter < 0 && (this.sendSDBip(), this.watchInter = setInterval(function() {
							var e = p.playerInfo.status == p.playStatus.PLAYING ? d.H5Common.heartDuration : 0,
								n = {
									dt: "online",
									data: {
										wt: {
											watchTime: 1e3 * t.watchTime,
											duration: Math.floor(1e3 * p.playerInfo.duration),
											curTime: Math.floor(1e3 * p.playerInfo.posi),
											heartDuration: e
										}
									}
								};
							p.playerInfo.playType == p.playType.VOD && v.default.remeberPosi(p.playerInfo.cid, p.playerInfo.posi), t.sendBip(n)
						}, d.H5Common.heartDuration)), this.watchTime++, d.H5Common.pay && !f.userInfo.isVip && p.playerInfo.posi > p.playerInfo.shikantime) {
						if(this.showPay) return;
						return this.video.pause(), p.playerInfo.playType == p.playType.VOD && v.default.remeberPosi(p.playerInfo.cid, -1), this.stopVideo(), this.showPay = !0, this.dispatchEvent(u.H5ComponentEvent.VIDEO_ERROR, {
							code: 412,
							msg: "寮€閫氫細鍛�"
						}), void y.default.postMessage(m.ExternalEvent.VIDEO_STATUS, m.playerStatusType.VIDEO_END)
					}
					var o = {};
					if(p.playerInfo.playType == p.playType.VOD) o.start = 0, o.end = p.playerInfo.duration || 0, o.posi = p.playerInfo.posi, p.playerInfo.duration - p.playerInfo.posi < 15 && (this.abnormal = !0);
					else if(p.playerInfo.playType == p.playType.HUIKAN) o.start = p.playerInfo.sTime / 1e3, o.end = p.playerInfo.eTime / 1e3, o.posi = p.playerInfo.posi, p.playerInfo.duration - p.playerInfo.posi < 15 && (this.abnormal = !0);
					else {
						var a = d.H5Common.timestamp;
						o.live = a + 1e3 * p.playerInfo.posi
					}
					o.buffered = n, this.dispatchEvent(u.H5ComponentEvent.VIDEO_UPDATE, o)
				}
			}
		}, {
			key: "ended",
			value: function(e) {
				h.default.debug("褰撳墠鎺ユ敹浜嬩欢 ==>> ", e.type), p.playerInfo.playType == p.playType.VOD && v.default.remeberPosi(p.playerInfo.cid, -1), this.stopVideo(), this.dispatchEvent(u.H5ComponentEvent.VIDEO_SHOW_RECO), y.default.postMessage(m.ExternalEvent.VIDEO_STATUS, m.playerStatusType.VIDEO_END)
			}
		}, {
			key: "pause",
			value: function(e) {
				if(h.default.debug("褰撳墠鎺ユ敹浜嬩欢 ==>> ", e.type), p.playerInfo.status !== p.playStatus.END) {
					if(p.playerInfo.status = p.playStatus.PAUSE, !p.playerInfo.start) return;
					this.dispatchEvent(u.H5ComponentEvent.VIDEO_STATE, {
						status: p.playerInfo.status
					}), y.default.postMessage(m.ExternalEvent.VIDEO_STATUS, m.playerStatusType.VIDEO_PAUSE)
				}
			}
		}, {
			key: "playing",
			value: function(e) {
				p.playerInfo.start || (p.playerInfo.start = !0), h.default.debug("褰撳墠鎺ユ敹浜嬩欢 ==>> ", e.type), p.playerInfo.status = p.playStatus.PLAYING, this.dispatchEvent(u.H5ComponentEvent.VIDEO_STATE, {
					status: p.playerInfo.status
				}), y.default.postMessage(m.ExternalEvent.VIDEO_STATUS, m.playerStatusType.VIDEO_PLAYING)
			}
		}, {
			key: "error",
			value: function(e) {
				if(h.default.debug("video璇锋眰鍑洪敊 >>>>>>", e.type), "error" == e.type && (this.stopVideo(), this.video.error && this.video.error.code)) {
					var t = {};
					switch(t.code = this.video.error.code, t.msg = "video鎾斁鍑洪敊", t.code) {
						case 1:
							t.msg = "鍙栧洖杩囩▼琚敤鎴蜂腑姝�";
							break;
						case 2:
							t.msg = "涓嬭浇鍑洪敊";
							break;
						case 3:
							t.msg = "瑙ｇ爜閿欒";
							break;
						case 4:
							t.msg = "涓嶆敮鎸侀煶棰�/瑙嗛"
					}
					t.code = d.H5Common.callCode.video[Number(t.code)], this.dispatchEvent(u.H5ComponentEvent.VIDEO_ERROR, t)
				}
			}
		}, {
			key: "seekVideo",
			value: function(e) {
				e <= p.playerInfo.duration && (this.video.currentTime = e, this.sendBip({
					dt: "act",
					data: {
						type: "seek"
					}
				}))
			}
		}, {
			key: "sendSDBip",
			value: function() {
				var e = {
					dt: "sd",
					data: {
						cid: p.playerInfo.cid,
						sessionID: d.H5Common.clientID,
						rateType: p.playerInfo.rateType
					}
				};
				h.default.debug("鎶ユ枃sd<<<<", e), this.sendBip(e)
			}
		}, {
			key: "sendBip",
			value: function(e) {
				this.dispatchEvent(u.H5ComponentEvent.VIDEO_BIP, e)
			}
		}, {
			key: "setMuted",
			value: function(e) {
				this.video.muted = e
			}
		}, {
			key: "volume",
			set: function(e) {
				e > 100 ? e = 100 : e < 0 && (e = 0), p.playerInfo.volume = e, this.video.volume = e / 100
			}
		}, {
			key: "speed",
			set: function(e) {
				p.playerInfo.playbackRate = e, this.video.playbackRate = e, v.default.remeberSpeed(e)
			}
		}]), t
	}(l.default);
	t.default = g
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.env = function() {
		var e = navigator.userAgent,
			t = {
				browser: {},
				os: {},
				phone: {},
				mobile: !1
			};
		(e = e.toLowerCase()).indexOf("mobile") > -1 && (t.mobile = !0);
		var n = void 0,
			i = void 0,
			o = {
				android_1: /android[\s\/]([\d\.]+)/i,
				android_2: /android/i,
				android_3: /MIDP-/i,
				ipod_1: /iPod\stouch;\sCPU\siPhone\sos\s([\d_]+)/i,
				ipod_100: /iPod.*os\s?([\d_\.]+)/i,
				iphone: /iPhone;\sCPU\siPhone\sos\s([\d_]+)/i,
				iphone_100: /iPhone.*os\s?([\d_\.]+)/i,
				ipad_1: /ipad;\scpu\sos\s([\d_]+)/i,
				ipad_2: /ipad([\d]+)?/i,
				windows: /windows\snt\s([\d\.]+)/i,
				mac: /Macintosh.*mac\sos\sx\s([\d_\.]+)/i,
				linux: /Linux/i
			};
		for(var a in o)
			if(n = o[a].exec(e)) {
				i = a.replace(/_\d+/, ""), t.os[i] = !0, t.os.name = i, n[1] && (t.os.version = n[1].replace(/_/g, "."));
				break
			}(t.os.iphone || t.os.ipad || t.os.ipod) && (t.os.ios = !0);
		var r, s, l = {
			wechat: /MicroMessenger\/([\d\.]+)/i,
			ipadqq: /IPadQQ\/([\d\.]+)/i,
			mqq: /qq\/([\d\.]+)/i,
			qzone: /QZONEJSSDK\/([\d\.]+)/i,
			mqqbrowser: /mqqbrowser\/([\d\.]+)/i,
			qqbrowser: /[^m]QQBrowser\/([\d\.]+)/i,
			x5: /tbs\/(\d+)/i,
			uc: /UCBrowser\/([\d\.]+)/i,
			safari_1: /Version\/(([\d\.]+))\sSafari\/[\d\.]+/i,
			safari_2: /Safari\/([\d\.]+)/i,
			firefox: /Firefox\/([\d\.]+)/i,
			opera: /OPR\/([\d\.]+)/i,
			ie_1: /MSIE\s([\d\.]+)/i,
			ie_2: /(trident\/\d\.\d)/i,
			ie_3: /(Edge)\/\d+\.\d+/i,
			weibo: /weibo__([\d\.]+)/i,
			qqnewsAd: /TADChid\/([\d\.]+)/i,
			qqnews: /qqnews\/([\d\.]+)/i,
			qqlive_1: /QQLiveBrowser\/([\d\.]+)/i,
			qqlive_2: /QQLiveHDBrowser\/([\d\.]+)/i,
			kuaibao: /qnreading\/([\d\.]+)/i,
			liebao: /LieBaoFast\/([\d\.]+)/i,
			douban: /com\.douban\.frodo\/([\d\.]+)/i,
			miuibrowser: /MiuiBrowser/i,
			baidu: /baiduboxapp/i,
			browser360: /360browser/i,
			oppobrowser: /OppoBrowser/i,
			chrome_1: /CriOS\/([\d\.]+)/i,
			chrome_2: /Chrome\/([\d\.]+)/i,
			qqdownloader: /qqdownloader\/([\d\.]+)/i
		};

		function u(e) {
			var t = e.version.split(".");
			e.major = parseInt(e.version, 10), t.length > 1 && (e.minor = parseInt(t[1], 10)), t.length > 2 && (e.build = parseInt(t[2], 10))
		}
		for(var d in l)
			if(r = l[d].exec(e)) {
				if(s = d.replace(/_\d+/, ""), t.browser[s]) return;
				t.browser[s] = {
					version: r[1]
				}, u(t.browser[s])
			}
		t.os.android && t.browser.safari && delete t.browser.safari, t.browser.chrome && t.browser.safari && delete t.browser.safari, t.browser.ie && t.browser.ie.version && t.browser.ie.version.indexOf("trident") > -1 && (t.browser.ie.version.indexOf("6.0") > -1 ? t.browser.ie.version = "10" : t.browser.ie.version.indexOf("5.0") > -1 ? t.browser.ie.version = "9" : t.browser.ie.version.indexOf("4.0") > -1 ? t.browser.ie.version = "8" : t.browser.ie.version = "11");
		var c, p = {
			ipod: /iPod/i,
			ipad: /iPad/i,
			iphone: /iPhone/i,
			huawei_1: /HUAWEI([\w_-]+)/i,
			huawei_2: /(CHM-\w+)/i,
			huawei_3: /(HonorChe)/i,
			huawei_4: /HONORPLK/i,
			huawei_5: /(Che\d+-CL\d+)/i,
			huawei_6: /(H\d+-L\d+)/i,
			huawei_100: /HUAWEI/i,
			xiaomi_1: /(HM\sNOTE)/i,
			xiaomi_2: /(HM\s\w+)/i,
			xiaomi_3: /(MI\s\w+)/i,
			xiaomi_4: /(MI-ONE\sPlus)/i,
			xiaomi_5: /(M1)\sBuild/i,
			xiaomi_6: /(HM\d+)/i,
			xiaomi_7: /Xiaomi[\s_]?([\w_]+)/i,
			samsung_1: /(GT-\w+)/i,
			samsung_2: /(SCH-\w+)/i,
			samsung_3: /(SM-\w+)/i,
			vivo: /vivo\s(\w+)/i,
			oneplus: /ONEPLUS-([a-z0-9]+)/i,
			lenovo_1: /Lenovo[\s-]?([\w-]+)/i,
			lenovo_100: /Lenovo/i,
			zte_1: /ZTE\s?(\w+)?/i,
			zte_2: /ZTE/i,
			coolpad_1: /Coolpad\s(\w+)/i,
			coolpad_100: /Coolpad/i,
			oppo_1: /OPPO\s?(\w+)/i,
			oppo_2: /(R7Plus|R8007|R801|R831S|R8205)/i,
			oppo_100: /OPPO/i,
			meizu_1: /(MX\d+)/i,
			meizu_2: /(m\d+\snote)\sBuild/i,
			htc_1: /HTC\s?(\w+)/i,
			htc_100: /HTC/i,
			tcl: /TCL\s(\w+)/i,
			lephone: /lephone\s(\w+)/i,
			lg: /LG[\s-]?(\w+)/i,
			galaxy: /(galaxy\d+)/,
			hisense_1: /Hisense/i,
			hisense_2: /HS-(\w+)/i,
			philips: /Philips\s?(\w+)?/i,
			"閲戠珛": /(GN\w+)\sBuild/i,
			sonny: /sonny/i,
			"澶╄": /K-Touch/i
		};
		for(var f in p)
			if(c = p[f].exec(e)) {
				t.phone.name = f.replace(/_\d+/, ""), c[1] && (t.phone.version = c[1].replace(/^[_-]/gi, ""));
				break
			}
		return t.browser && (t.mobile = !0), t
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = c(n(2)),
		o = c(n(0)),
		a = c(n(1)),
		r = c(n(3)),
		s = c(n(4)),
		l = c(n(8)),
		u = c(n(186)),
		d = (n(19), n(18));

	function c(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var p = function(e) {
		function t(e) {
			return(0, o.default)(this, t), (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e))
		}
		return(0, s.default)(t, e), (0, a.default)(t, [{
			key: "onRegister",
			value: function() {
				this.setViewComponent(new u.default)
			}
		}, {
			key: "handleEvent",
			value: function(e, t) {
				this.viewComponent
			}
		}, {
			key: "listNotificationInterests",
			value: function() {
				return [d.H5Notification.ADS_STATUS, d.H5Notification.ADV_EVENT]
			}
		}, {
			key: "handleNotification",
			value: function(e) {}
		}, {
			key: "onRemove",
			value: function() {
				this.setViewComponent(null)
			}
		}]), t
	}(l.default.Mediator);
	p.NAME = "pc_adv_mediator", t.default = p
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = s(n(2)),
		o = s(n(0)),
		a = s(n(3)),
		r = s(n(4));

	function s(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var l = function(e) {
		function t(e) {
			return(0, o.default)(this, t), (0, a.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e))
		}
		return(0, r.default)(t, e), t
	}(s(n(34)).default);
	t.default = l
}, , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
	e.exports = n(209)
}, function(e, t, n) {
	"use strict";
	var i = s(n(2)),
		o = s(n(0)),
		a = s(n(3)),
		r = s(n(4));

	function s(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	n(210);
	var l = function(e) {
		function t(e) {
			return(0, o.default)(this, t), (0, a.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e))
		}
		return(0, r.default)(t, e), t
	}(s(n(133)).default);
	window.H5Player = l
}, function(e, t, n) {}]);