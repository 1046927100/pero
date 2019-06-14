! function(t, e) {
	if("object" == typeof exports && "object" == typeof module) module.exports = e();
	else if("function" == typeof define && define.amd) define([], e);
	else {
		var n = e();
		for(var i in n)("object" == typeof exports ? exports : t)[i] = n[i]
	}
}(window, function() {
	return function(t) {
		var e = {};

		function n(i) {
			if(e[i]) return e[i].exports;
			var r = e[i] = {
				i: i,
				l: !1,
				exports: {}
			};
			return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
		}
		return n.m = t, n.c = e, n.d = function(t, e, i) {
			n.o(t, e) || Object.defineProperty(t, e, {
				enumerable: !0,
				get: i
			})
		}, n.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, n.t = function(t, e) {
			if(1 & e && (t = n(t)), 8 & e) return t;
			if(4 & e && "object" == typeof t && t && t.__esModule) return t;
			var i = Object.create(null);
			if(n.r(i), Object.defineProperty(i, "default", {
					enumerable: !0,
					value: t
				}), 2 & e && "string" != typeof t)
				for(var r in t) n.d(i, r, function(e) {
					return t[e]
				}.bind(null, r));
			return i
		}, n.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return n.d(e, "a", e), e
		}, n.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, n.p = "", n(n.s = 47)
	}([function(t, e) {
		var n = t.exports = {
			version: "2.6.9"
		};
		"number" == typeof __e && (__e = n)
	}, function(t, e) {
		var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
		"number" == typeof __g && (__g = n)
	}, function(t, e, n) {
		var i = n(10),
			r = n(32),
			o = n(18),
			a = Object.defineProperty;
		e.f = n(3) ? Object.defineProperty : function(t, e, n) {
			if(i(t), e = o(e, !0), i(n), r) try {
				return a(t, e, n)
			} catch(t) {}
			if("get" in n || "set" in n) throw TypeError("Accessors not supported!");
			return "value" in n && (t[e] = n.value), t
		}
	}, function(t, e, n) {
		t.exports = !n(11)(function() {
			return 7 != Object.defineProperty({}, "a", {
				get: function() {
					return 7
				}
			}).a
		})
	}, function(t, e) {
		var n = {}.hasOwnProperty;
		t.exports = function(t, e) {
			return n.call(t, e)
		}
	}, function(t, e, n) {
		var i = n(1),
			r = n(0),
			o = n(31),
			a = n(6),
			u = n(4),
			c = function(t, e, n) {
				var s, l, f, d = t & c.F,
					p = t & c.G,
					h = t & c.S,
					v = t & c.P,
					g = t & c.B,
					m = t & c.W,
					y = p ? r : r[e] || (r[e] = {}),
					b = y.prototype,
					w = p ? i : h ? i[e] : (i[e] || {}).prototype;
				for(s in p && (n = e), n)(l = !d && w && void 0 !== w[s]) && u(y, s) || (f = l ? w[s] : n[s], y[s] = p && "function" != typeof w[s] ? n[s] : g && l ? o(f, i) : m && w[s] == f ? function(t) {
					var e = function(e, n, i) {
						if(this instanceof t) {
							switch(arguments.length) {
								case 0:
									return new t;
								case 1:
									return new t(e);
								case 2:
									return new t(e, n)
							}
							return new t(e, n, i)
						}
						return t.apply(this, arguments)
					};
					return e.prototype = t.prototype, e
				}(f) : v && "function" == typeof f ? o(Function.call, f) : f, v && ((y.virtual || (y.virtual = {}))[s] = f, t & c.R && b && !b[s] && a(b, s, f)))
			};
		c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
	}, function(t, e, n) {
		var i = n(2),
			r = n(12);
		t.exports = n(3) ? function(t, e, n) {
			return i.f(t, e, r(1, n))
		} : function(t, e, n) {
			return t[e] = n, t
		}
	}, function(t, e) {
		t.exports = function(t) {
			return "object" == typeof t ? null !== t : "function" == typeof t
		}
	}, function(t, e, n) {
		var i = n(58),
			r = n(20);
		t.exports = function(t) {
			return i(r(t))
		}
	}, function(t, e, n) {
		var i = n(23)("wks"),
			r = n(15),
			o = n(1).Symbol,
			a = "function" == typeof o;
		(t.exports = function(t) {
			return i[t] || (i[t] = a && o[t] || (a ? o : r)("Symbol." + t))
		}).store = i
	}, function(t, e, n) {
		var i = n(7);
		t.exports = function(t) {
			if(!i(t)) throw TypeError(t + " is not an object!");
			return t
		}
	}, function(t, e) {
		t.exports = function(t) {
			try {
				return !!t()
			} catch(t) {
				return !0
			}
		}
	}, function(t, e) {
		t.exports = function(t, e) {
			return {
				enumerable: !(1 & t),
				configurable: !(2 & t),
				writable: !(4 & t),
				value: e
			}
		}
	}, function(t, e, n) {
		var i = n(35),
			r = n(24);
		t.exports = Object.keys || function(t) {
			return i(t, r)
		}
	}, function(t, e) {
		t.exports = !0
	}, function(t, e) {
		var n = 0,
			i = Math.random();
		t.exports = function(t) {
			return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
		}
	}, function(t, e, n) {
		var i = n(20);
		t.exports = function(t) {
			return Object(i(t))
		}
	}, function(t, e, n) {
		e.f = n(9)
	}, function(t, e, n) {
		var i = n(7);
		t.exports = function(t, e) {
			if(!i(t)) return t;
			var n, r;
			if(e && "function" == typeof(n = t.toString) && !i(r = n.call(t))) return r;
			if("function" == typeof(n = t.valueOf) && !i(r = n.call(t))) return r;
			if(!e && "function" == typeof(n = t.toString) && !i(r = n.call(t))) return r;
			throw TypeError("Can't convert object to primitive value")
		}
	}, function(t, e, n) {
		var i = n(10),
			r = n(57),
			o = n(24),
			a = n(22)("IE_PROTO"),
			u = function() {},
			c = function() {
				var t, e = n(33)("iframe"),
					i = o.length;
				for(e.style.display = "none", n(62).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; i--;) delete c.prototype[o[i]];
				return c()
			};
		t.exports = Object.create || function(t, e) {
			var n;
			return null !== t ? (u.prototype = i(t), n = new u, u.prototype = null, n[a] = t) : n = c(), void 0 === e ? n : r(n, e)
		}
	}, function(t, e) {
		t.exports = function(t) {
			if(null == t) throw TypeError("Can't call method on  " + t);
			return t
		}
	}, function(t, e) {
		var n = Math.ceil,
			i = Math.floor;
		t.exports = function(t) {
			return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
		}
	}, function(t, e, n) {
		var i = n(23)("keys"),
			r = n(15);
		t.exports = function(t) {
			return i[t] || (i[t] = r(t))
		}
	}, function(t, e, n) {
		var i = n(0),
			r = n(1),
			o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
		(t.exports = function(t, e) {
			return o[t] || (o[t] = void 0 !== e ? e : {})
		})("versions", []).push({
			version: i.version,
			mode: n(14) ? "pure" : "global",
			copyright: "漏 2019 Denis Pushkarev (zloirock.ru)"
		})
	}, function(t, e) {
		t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
	}, function(t, e) {
		e.f = {}.propertyIsEnumerable
	}, function(t, e) {
		t.exports = {}
	}, function(t, e, n) {
		var i = n(2).f,
			r = n(4),
			o = n(9)("toStringTag");
		t.exports = function(t, e, n) {
			t && !r(t = n ? t : t.prototype, o) && i(t, o, {
				configurable: !0,
				value: e
			})
		}
	}, function(t, e, n) {
		var i = n(1),
			r = n(0),
			o = n(14),
			a = n(17),
			u = n(2).f;
		t.exports = function(t) {
			var e = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
			"_" == t.charAt(0) || t in e || u(e, t, {
				value: a.f(t)
			})
		}
	}, function(t, e, n) {
		t.exports = {
			default: n(49),
			__esModule: !0
		}
	}, function(t, e, n) {
		t.exports = {
			default: n(52),
			__esModule: !0
		}
	}, function(t, e, n) {
		var i = n(54);
		t.exports = function(t, e, n) {
			if(i(t), void 0 === e) return t;
			switch(n) {
				case 1:
					return function(n) {
						return t.call(e, n)
					};
				case 2:
					return function(n, i) {
						return t.call(e, n, i)
					};
				case 3:
					return function(n, i, r) {
						return t.call(e, n, i, r)
					}
			}
			return function() {
				return t.apply(e, arguments)
			}
		}
	}, function(t, e, n) {
		t.exports = !n(3) && !n(11)(function() {
			return 7 != Object.defineProperty(n(33)("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		})
	}, function(t, e, n) {
		var i = n(7),
			r = n(1).document,
			o = i(r) && i(r.createElement);
		t.exports = function(t) {
			return o ? r.createElement(t) : {}
		}
	}, function(t, e, n) {
		t.exports = {
			default: n(55),
			__esModule: !0
		}
	}, function(t, e, n) {
		var i = n(4),
			r = n(8),
			o = n(59)(!1),
			a = n(22)("IE_PROTO");
		t.exports = function(t, e) {
			var n, u = r(t),
				c = 0,
				s = [];
			for(n in u) n != a && i(u, n) && s.push(n);
			for(; e.length > c;) i(u, n = e[c++]) && (~o(s, n) || s.push(n));
			return s
		}
	}, function(t, e) {
		var n = {}.toString;
		t.exports = function(t) {
			return n.call(t).slice(8, -1)
		}
	}, function(t, e, n) {
		var i = n(25),
			r = n(12),
			o = n(8),
			a = n(18),
			u = n(4),
			c = n(32),
			s = Object.getOwnPropertyDescriptor;
		e.f = n(3) ? s : function(t, e) {
			if(t = o(t), e = a(e, !0), c) try {
				return s(t, e)
			} catch(t) {}
			if(u(t, e)) return r(!i.f.call(t, e), t[e])
		}
	}, function(t, e, n) {
		var i = n(4),
			r = n(16),
			o = n(22)("IE_PROTO"),
			a = Object.prototype;
		t.exports = Object.getPrototypeOf || function(t) {
			return t = r(t), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
		}
	}, function(t, e, n) {
		var i = n(5),
			r = n(0),
			o = n(11);
		t.exports = function(t, e) {
			var n = (r.Object || {})[t] || Object[t],
				a = {};
			a[t] = e(n), i(i.S + i.F * o(function() {
				n(1)
			}), "Object", a)
		}
	}, function(t, e, n) {
		t.exports = {
			default: n(71),
			__esModule: !0
		}
	}, function(t, e, n) {
		"use strict";
		var i = n(14),
			r = n(5),
			o = n(42),
			a = n(6),
			u = n(26),
			c = n(74),
			s = n(27),
			l = n(38),
			f = n(9)("iterator"),
			d = !([].keys && "next" in [].keys()),
			p = function() {
				return this
			};
		t.exports = function(t, e, n, h, v, g, m) {
			c(n, e, h);
			var y, b, w, _ = function(t) {
					if(!d && t in S) return S[t];
					switch(t) {
						case "keys":
						case "values":
							return function() {
								return new n(this, t)
							}
					}
					return function() {
						return new n(this, t)
					}
				},
				I = e + " Iterator",
				k = "values" == v,
				E = !1,
				S = t.prototype,
				x = S[f] || S["@@iterator"] || v && S[v],
				P = x || _(v),
				O = v ? k ? _("entries") : P : void 0,
				A = "Array" == e && S.entries || x;
			if(A && (w = l(A.call(new t))) !== Object.prototype && w.next && (s(w, I, !0), i || "function" == typeof w[f] || a(w, f, p)), k && x && "values" !== x.name && (E = !0, P = function() {
					return x.call(this)
				}), i && !m || !d && !E && S[f] || a(S, f, P), u[e] = P, u[I] = p, v)
				if(y = {
						values: k ? P : _("values"),
						keys: g ? P : _("keys"),
						entries: O
					}, m)
					for(b in y) b in S || o(S, b, y[b]);
				else r(r.P + r.F * (d || E), e, y);
			return y
		}
	}, function(t, e, n) {
		t.exports = n(6)
	}, function(t, e, n) {
		t.exports = {
			default: n(83),
			__esModule: !0
		}
	}, function(t, e) {
		e.f = Object.getOwnPropertySymbols
	}, function(t, e, n) {
		var i = n(35),
			r = n(24).concat("length", "prototype");
		e.f = Object.getOwnPropertyNames || function(t) {
			return i(t, r)
		}
	}, function(t, e) {}, function(t, e, n) {
		t.exports = n(48)
	}, function(t, e, n) {
		"use strict";
		var i = c(n(29)),
			r = c(n(50)),
			o = c(n(51)),
			a = c(n(34));
		n(63);
		var u = c(n(93));

		function c(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		window.jsbridgeInit = -1;
		var s = (0, a.default)(null);
		s = {
			100: "window.WebViewJavascriptBridge涓嶅瓨鍦�"
		};
		var l = function() {
			function t() {
				return(0, r.default)(this, t), t.instance || (this.version = "1.0.8", this.pwValueKey = "promotionWay", this.pwValue = encodeURIComponent(this.getUrlPW()), this.readyPWSDK = !1, this.yybPath = "https://a.app.qq.com/dom/micro/open.jsp?pkgname=com.cmcc.cmvideo&android_schema=miguvideo%3A%2F%2Fmiguvideo", this.appStore = "https://itunes.apple.com/cn/app/id787130974?mt=8", this.pwSDK = "", this.promotionId = "", this.clipboardJson = "", this.callbackArray = null, this.promotion = "", t.instance = this), t.instance
			}
			return(0, o.default)(t, [{
				key: "init",
				value: function(t) {
					console.log("jsbridge version " + this.version), this.isInWebview() ? (window.WebViewJavascriptBridge && (window.jsbridgeInit = 1), 1 === window.jsbridgeInit ? window.WebViewJavascriptBridge ? (t && t({
						mgVideoEnv: !0
					}), this._fireCallbackArray({
						mgVideoEnv: !0
					}), console.log("鍜挄app绔唴宸茬粡鍒濆鍖栧ソ")) : console.log("errorMsg锛�" + s[100]) : 0 === window.jsbridgeInit ? (console.log("鍜挄app绔唴鍒濆鍖栦腑......<<<", window.jsbridgeInit), console.log("鍜挄app绔唴鍒濆鍖栦腑......<<<", this.callbackArray), this.callbackArray || (this.callbackArray = []), this.callbackArray.push(t)) : -2 === window.jsbridgeInit ? t && t({
						mgVideoEnv: !1
					}) : u.default.isiOS() ? navigator.userAgent.match(/miguvideo/g) ? this._connectIOSWebViewJavascriptBridge(t) : (t && t({
						mgVideoEnv: !1
					}), console.log("闈炲挭鍜昦pp绔唴鐜")) : this._connectAndroidWebViewJavascriptBridge(t)) : (t && t({
						mgVideoEnv: !1
					}), console.log("非咪咕app环境唴鐜")), this.readyPWSDK || this._initPWSDK()
				}
			}, {
				key: "_waitingTimeoutHandler",
				value: function(t) {
					console.log("window.waitAndroidReadyTimer=", window.waitAndroidReadyTimer);
					var e = this;
					void 0 === window.waitAndroidReadyTimer ? window.waitAndroidReadyTimer = setTimeout(function() {
						window.jsbridgeInit ? (clearTimeout(window.waitAndroidReadyTimer), window.waitAndroidReadyTimer = -1, console.log("銆娿€娿€娿€娿€娿€婂幓闄よ秴鏃剁瓑寰�", window.jsbridgeInit)) : (console.log("銆娿€娿€娿€娿€娿€妀ssdk鍝嶅簲瓒呮椂,鎵ц鍥炶皟"), window.waitAndroidReadyTimer = -2, window.jsbridgeInit = -2, t && t({
							mgVideoEnv: !1
						}), e._fireCallbackArray({
							mgVideoEnv: !1
						}))
					}, 5e3) : -2 === window.waitAndroidReadyTimer && (window.jsbridgeInit = -2, t && t({
						mgVideoEnv: !1
					}), e._fireCallbackArray({
						mgVideoEnv: !1
					}))
				}
			}, {
				key: "_fireCallbackArray",
				value: function(t) {
					this.callbackArray && this.callbackArray.length && (console.log("aaaa 1111", this.callbackArray), console.log("aaaa 1111", t), this.callbackArray.forEach(function(e, n) {
						console.log("value", e), e && e(t)
					}), this.callbackArray.length = 0, this.callbackArray = null, console.log("aaaa 2222", this.callbackArray))
				}
			}, {
				key: "_connectIOSWebViewJavascriptBridge",
				value: function(t) {
					var e = this,
						n = function(n) {
							window.jsbridgeInit = 1, t && t({
								mgVideoEnv: !0
							}), e._fireCallbackArray({
								mgVideoEnv: !0
							}), console.log("ios鍐呭垵濮嬪寲鎴愬姛")
						};
					if(window.jsbridgeInit = 0, window.WVJBCallbacks) return window.WVJBCallbacks.push(n);
					window.WVJBCallbacks = [n];
					var i = document.createElement("iframe");
					i.style.display = "none", i.src = "https://__bridge_loaded__", document.documentElement.appendChild(i), setTimeout(function() {
						document.documentElement.removeChild(i)
					}, 0)
				}
			}, {
				key: "_connectAndroidWebViewJavascriptBridge",
				value: function(t) {
					var e = this;
					window.nativeBackForView = function(t) {
						console.log(t)
					}, window.jsbridgeInit = 0, document.addEventListener("WebViewJavascriptBridgeReady", function() {
						var n;
						console.log("鍜挄app绔唴鍒濆鍖栧洖璋冩墽琛�......"), -2 !== window.jsbridgeInit ? (n = WebViewJavascriptBridge, console.log("jsbridge init start: >>>>>>>>"), n.init(function(t, e) {
							console.log("JS got a message", t);
							var n = {
								"Javascript Responds": "娴嬭瘯涓枃!"
							};
							console.log("JS responding with", n), e(n)
						}), n.registerHandler("functionInJs", function(t, e) {
							document.getElementById("show").innerHTML = "data from Java: = " + t, e("Javascript Says Right back aka!")
						}), n.registerHandler("viewbackNotifyForNative", function(t, e) {
							console.log("<<<<<<<<<<< nativeBackForView"), window.nativeBackForView && window.nativeBackForView(t), e(responseData)
						}), window.jsbridgeInit = 1, t && t({
							mgVideoEnv: !0
						}), e._fireCallbackArray({
							mgVideoEnv: !0
						}), console.log("瀹夊崜鍐呭垵濮嬪寲鎴愬姛")) : console.log("鍜挄app绔唴瓒呮椂......")
					}, !1), this._waitingTimeoutHandler(t)
				}
			}, {
				key: "_hasWebViewJavascriptBridge",
				value: function() {
					return window.WebViewJavascriptBridge || console.log("errorMsg锛�" + s[100]), window.WebViewJavascriptBridge
				}
			}, {
				key: "login",
				value: function(t, e) {
					var n = this;
					if(1 === window.jsbridgeInit) {
						if(!this._hasWebViewJavascriptBridge()) return;
						window.WebViewJavascriptBridge.callHandler("CallNative", {
							type: "USER_LOGIN",
							params: {
								path: "",
								frameID: "",
								contentID: "",
								location: "WEB_VIEW_H5",
								pageID: "",
								url: t
							}
						}, function(t) {
							console.log("jsbridge login 鍥炶皟鎵ц"), e && e(t)
						})
					} else console.log("jsbridge init 鍏堝垵濮嬪寲"), this.init(function(i) {
						console.log("jsbridge init 鍏堝垵濮嬪寲", i), i && !i.mgVideoEnv ? e && e(i) : n.login(t, e)
					})
				}
			}, {
				key: "getUserInfo",
				value: function(t, e) {
					var n = this;
					if(1 === window.jsbridgeInit) {
						if(!this._hasWebViewJavascriptBridge()) return;
						window.WebViewJavascriptBridge.callHandler("CallNative", {
							name: "GET_USER_INFO",
							type: "GET_USER_INFO",
							params: {
								path: "",
								frameID: "",
								contentID: "",
								location: "WEB_VIEW_H5",
								pageID: "",
								url: t
							}
						}, function(t) {
							console.log("jsbridge getUserInfo 鍥炶皟鎵ц"), e && e(t)
						})
					} else this.init(function(i) {
						console.log("jsbridge getUserInfo 閲嶆柊鍒濆鍖�", i), i && !i.mgVideoEnv ? e && e(i) : n.getUserInfo(t, e)
					})
				}
			}, {
				key: "getPromotionSign",
				value: function(t, e) {
					var n = this;
					if(1 === window.jsbridgeInit) {
						if(!this._hasWebViewJavascriptBridge()) return;
						window.WebViewJavascriptBridge.callHandler("CallNative", {
							name: "GET_PROMOTION_SIGN",
							params: {
								intfId: t && t.intfId || ""
							}
						}, function(t) {
							console.log("鑾峰彇钀ラ攢鑾峰彇绛惧悕", t), e && e(t)
						})
					} else this.init(function(i) {
						console.log("jsbridge getUserInfo 閲嶆柊鍒濆鍖�", i), i && !i.mgVideoEnv ? e && e(i) : n.getPromotionSign(t, e)
					})
				}
			}, {
				key: "jumpDetailPage",
				value: function(t, e) {
					var n = {
						name: "TOPIC_ITEM_CLICK",
						type: "JUMP_DETAIL_PAGE",
						params: {
							path: "",
							frameID: "",
							contentID: t.contentID,
							location: "WEB_VIEW_H5",
							pageID: t.pageID,
							url: t.url || location.href,
							extra: t.extra
						}
					};
					t.params || (t = n), console.log("open start: >>>>>>");
					var i = this;
					if(1 === window.jsbridgeInit) {
						if(!this._hasWebViewJavascriptBridge()) return;
						window.WebViewJavascriptBridge.callHandler("CallNative", t, function(t) {
							console.log("open end: >>>>>>", t), e && e(t)
						})
					} else this.init(function(n) {
						n && !n.mgVideoEnv ? e && e(n) : i.jumpDetailPage(t, e)
					})
				}
			}, {
				key: "jumpActivityView",
				value: function(t, e) {
					var n = this;
					if(1 === window.jsbridgeInit) {
						if(!this._hasWebViewJavascriptBridge()) return;
						window.WebViewJavascriptBridge.callHandler("CallNative", t, function(t) {
							e && e(t)
						})
					} else this.init(function(i) {
						i && !i.mgVideoEnv ? e && e(i) : n.jumpActivityView(t, e)
					})
				}
			}, {
				key: "jumpInnerNewPage",
				value: function(t, e) {
					var n = this;
					if(1 === window.jsbridgeInit) {
						if(!this._hasWebViewJavascriptBridge()) return;
						window.WebViewJavascriptBridge.callHandler("CallNative", {
							name: "TOPIC_ITEM_CLICK",
							type: "JUMP_INNER_NEW_PAGE",
							params: {
								path: "",
								frameID: "",
								contentID: t.contentID,
								location: "WEB_VIEW_H5",
								pageID: t.pageID,
								url: t.url,
								extra: {
									title: t.title,
									userId: t.userId
								}
							}
						}, function(t) {
							e && e(t)
						})
					} else this.init(function(i) {
						i && !i.mgVideoEnv ? e && e(i) : n.jumpInnerNewPage(t, e)
					})
				}
			}, {
				key: "share",
				value: function(t, e) {
					var n = this;
					if(1 === window.jsbridgeInit) {
						if(!this._hasWebViewJavascriptBridge()) return;
						window.WebViewJavascriptBridge.callHandler("CallNative", {
							name: "SHARE_BUTTON_CLICK",
							type: "USER_INTERACTION_SHARE",
							params: {
								path: "",
								frameID: "",
								contentID: "",
								location: "WEB_VIEW_H5",
								pageID: "",
								url: t.url || location.href,
								extra: {
									shareUrl: t.shareUrl,
									shareTitle: t.shareTitle,
									shareSubTitle: t.shareSubTitle,
									imgUrl: t.imgUrl,
									contentId: t.contentId,
									contentType: t.contentType,
									icon: t.imgUrl
								}
							}
						}, function(t) {
							e && e(t)
						})
					} else this.init(function(i) {
						i && !i.mgVideoEnv ? e && e(i) : n.share(t, e)
					})
				}
			}, {
				key: "shareForNative",
				value: function(t, e) {
					var n = this;
					if(1 === window.jsbridgeInit) {
						if(!this._hasWebViewJavascriptBridge()) return;
						window.WebViewJavascriptBridge.registerHandler("getShareInfoForNative", function(e, n) {
							var r = {
								shareUrl: t.shareUrl || "",
								shareTitle: t.shareTitle || "",
								shareSubTitle: t.shareSubTitle || "",
								imgUrl: t.imgUrl || "",
								contentId: t.contentId || "",
								contentType: t.contentType || ""
							};
							n(r = (0, i.default)(r))
						})
					} else this.init(function(i) {
						i && !i.mgVideoEnv ? e && e(i) : n.shareForNative(t, e)
					})
				}
			}, {
				key: "calculateHight",
				value: function(t, e) {
					var n = this;
					if(1 === window.jsbridgeInit) {
						if(!this._hasWebViewJavascriptBridge()) return;
						window.WebViewJavascriptBridge.callHandler("CallNative", {
							name: "PAGE_FINISH_LOAD",
							type: "CALCULATE_HEIGHT",
							params: {
								path: "",
								frameID: "",
								contentID: "",
								location: "WEB_VIEW_H5",
								pageID: t.pageID,
								url: t.url
							}
						}, function(t) {
							e && e(t)
						})
					} else this.init(function(i) {
						i && !i.mgVideoEnv ? e && e(i) : n.calculateHight(t, e)
					})
				}
			}, {
				key: "jumpLivePendant",
				value: function(t, e) {
					var n = this;
					if(1 === window.jsbridgeInit) {
						if(!this._hasWebViewJavascriptBridge()) return;
						window.WebViewJavascriptBridge.callHandler("CallNative", {
							type: "JUMP_INNER_NEW_PAGE",
							params: {
								path: "",
								frameID: "default-frame",
								location: "h5_share",
								pageID: "WORLDCUP_DETAIL",
								extra: {
									mgdbID: t.mgdbId
								}
							}
						}, function(t) {})
					} else this.init(function(i) {
						i && !i.mgVideoEnv ? e && e(i) : n.jumpLivePendant(t, e)
					})
				}
			}, {
				key: "jumpH5",
				value: function(t, e) {
					var n = this;
					if(1 === window.jsbridgeInit) {
						if(!this._hasWebViewJavascriptBridge()) return;
						window.WebViewJavascriptBridge.callHandler("CallNative", {
							type: "JUMP_H5_BY_WEB_VIEW",
							params: {
								path: "",
								frameID: "",
								location: t && t.url || location.href,
								pageID: ""
							}
						}, function(t) {
							e && e(t)
						})
					} else this.init(function(i) {
						i && !i.mgVideoEnv ? e && e(i) : n.jumpH5(t, e)
					})
				}
			}, {
				key: "goToApp",
				value: function(t) {
					if(t) {
						var e = {};
						e.type = t.type, e.params = {}, e.params.url = t.url || location.href, e.params.frameID = t.frameID || "", e.params.pageID = t.pageID || "", e.params.contentID = t.contentID || "", e.params.location = t.location, t.extra && (e.params.extra = t.extra), console.log("miguvideo://miguvideo?action=" + encodeURIComponent((0, i.default)(e))), location.href = "miguvideo://miguvideo?action=" + encodeURIComponent((0, i.default)(e))
					} else location.href = "miguvideo://miguvideo?"
				}
			}, {
				key: "download",
				value: function() {
					location.href = "https://a.app.qq.com/dom/micro/open.jsp?pkgname=com.cmcc.cmvideo&android_schema=miguvideo%3A%2F%2Fmiguvideo"
				}
			}, {
				key: "pwInit",
				value: function(t, e) {
					if(this.options = t || {}, this.androidApkPk = this.getAndroidApkUrl(), this.schemaLink = this.getFullDeepLink(), this.getUrlPW() || this.getUrlPWID()) {
						if(!this.readyPWSDK) try {
							this._initPWSDK()
						} catch(t) {
							console.log(t)
						}
						if(this.readyPWSDK) {
							try {
								this.pwSDK.createClipborad4Documents(document.getElementsByClassName("openClient"), this.schemaLink, "openClient"), this.schemaLink = this.schemaLink || this.pwSDK.getDeepLink(this.getFullDeepLink())
							} catch(t) {
								console.log("promotionway鍒濆鍖栧け璐ワ紒")
							}
							this._downLoadApp(e)
						}
					} else this._downLoadApp(e)
				}
			}, {
				key: "getPromotionId",
				value: function() {
					if(this.readyPWSDK) return this.promotionId;
					try {
						return this._initPWSDK(), this.promotionId
					} catch(t) {
						return console.log(t), -1
					}
				}
			}, {
				key: "getPromotion",
				value: function() {
					if(this.readyPWSDK) return this.promotion;
					try {
						return this._initPWSDK(), this.promotion
					} catch(t) {
						return console.log(t), -1
					}
				}
			}, {
				key: "_initPWSDK",
				value: function() {
					try {
						this.pwSDK = window.init("miguVideo", "miguvideo://miguvideo"), this.pwSDK && (this.promotionId = this.pwSDK.getPromotionId(), this.promotion = this.pwSDK.getPromotion(), this.clipboardJson = this.pwSDK.getClipboardJSON()), this.readyPWSDK = !0
					} catch(t) {
						console.log(t)
					}
				}
			}, {
				key: "_redirectUrlIos",
				value: function() {
					var t = document.createElement("iframe");
					t.style.display = "none", t.setAttribute("src", this.schemaLink), top.window.location.href = this.schemaLink
				}
			}, {
				key: "_doIOSDownLoadApp",
				value: function(t, e) {
					var n = 1e3;
					!1 === e && (n = 0);
					var i = "";
					clearTimeout(i), i = window.setTimeout(function() {
						clearTimeout(i), setTimeout(function() {
							top.window.location.href = t
						}, 200)
					}, n)
				}
			}, {
				key: "_redirectUrlAndroid",
				value: function() {
					var t = document.createElement("iframe");
					t.style.display = "none", document.body.appendChild(t), t.src = this.schemaLink
				}
			}, {
				key: "_doADDownLoadApp",
				value: function(t, e) {
					var n = 3e3;
					!1 === e && (n = 0), window.setTimeout(function() {
						window.location.href = t
					}, n)
				}
			}, {
				key: "_downLoadApp",
				value: function(t) {
					u.default.isiOS() ? !0 === t ? this._redirectUrlIos() : !1 === t ? this._doIOSDownLoadApp(this.appStore, t) : (this._redirectUrlIos(), this._doIOSDownLoadApp(this.appStore)) : u.default.isAndroid() && u.default.isWeChat() ? window.location.href = this.yybPath + "&android_schema=" + encodeURIComponent(this.getFullDeepLink()) : u.default.isAndroid() && (!0 === t ? this._redirectUrlAndroid() : !1 === t ? this._doADDownLoadApp(this.androidApkPk, t) : (this._redirectUrlAndroid(), this._doADDownLoadApp(this.androidApkPk)))
				}
			}, {
				key: "getFullDeepLink",
				value: function() {
					var t = "miguvideo://miguvideo",
						e = "";
					return u.default.getUrlParam("pwid") || u.default.getUrlParam("pwId"), this.options.deeplink ? (t = this.options.deeplink, u.default.addTimeStamp(t)) : this.options.action || u.default.getUrlParam("action") ? (t = "miguvideo://miguvideo?action=" + encodeURIComponent((0, i.default)(this.options.action)), u.default.addTimeStamp(t)) : this.options.mgdbId || u.default.getUrlParam("mgdbId") || u.default.getUrlParam("mgdbid") ? (console.log("dddd"), e = {
						type: "JUMP_INNER_NEW_PAGE",
						params: {
							frameID: "default-frame",
							pageID: "WORLDCUP_DETAIL",
							location: "h5_share",
							extra: {
								mgdbID: this.options.mgdbId || u.default.getUrlParam("mgdbId") || u.default.getUrlParam("mgdbid")
							}
						}
					}, t = "miguvideo://miguvideo?action=" + encodeURIComponent((0, i.default)(e)), u.default.addTimeStamp(t)) : (this.options.pageId || u.default.getUrlParam("pageId") || u.default.getUrlParam("pageid")) && (e = {
						type: "JUMP_INNER_NEW_PAGE",
						params: {
							path: "",
							frameID: "default-frame",
							contentID: "",
							location: "WEB_VIEW_H5",
							pageID: this.options.pageId || u.default.getUrlParam("pageId") || u.default.getUrlParam("pageid")
						}
					}, t = "miguvideo://miguvideo?action=" + encodeURIComponent((0, i.default)(e)), this.options.pageId) ? u.default.addTimeStamp(t) : (this.options.contId || u.default.getUrlParam("contId")) && (e = {
						type: "JUMP_DETAIL_PAGE",
						params: {
							path: "",
							frameID: "",
							contentID: this.options.contId || u.default.getUrlParam("contId"),
							location: "WEB_VIEW_H5",
							pageID: "296ff8a4b07d457cb15b6f9e5f433cc0"
						}
					}, t = "miguvideo://miguvideo?action=" + encodeURIComponent((0, i.default)(e)), this.options.contId) ? u.default.addTimeStamp(t) : (this.options.cId || u.default.getUrlParam("cId") || u.default.getUrlParam("cid")) && (e = {
						type: "JUMP_DETAIL_PAGE",
						params: {
							path: "",
							frameID: "",
							contentID: this.options.cId || u.default.getUrlParam("cId") || u.default.getUrlParam("cid"),
							location: "WEB_VIEW_H5",
							pageID: "61fb7b0ec4c745bb97b90eb2b14b83c7"
						}
					}, t = "miguvideo://miguvideo?action=" + encodeURIComponent((0, i.default)(e)), this.options.cId) ? u.default.addTimeStamp(t) : ((this.options.cUrl || u.default.getUrlParam("cUrl") || u.default.getUrlParam("curl")) && (e = {
						type: "JUMP_H5_BY_WEB_VIEW",
						params: {
							location: "WEB_VIEW_H5",
							url: this.options.cUrl || u.default.getUrlParam("cUrl") || u.default.getUrlParam("curl")
						}
					}, t = "miguvideo://miguvideo?action=" + encodeURIComponent((0, i.default)(e)), this.options.cUrl), u.default.addTimeStamp(t))
				}
			}, {
				key: "getAndroidApkUrl",
				value: function() {
					var t = "http://apk.miguvideo.com/apk/MiguVideo-Menhu.apk",
						e = (this.options || {}).pkgId;
					return e || (e = u.default.getUrlParam("pkgId")), e && (t = "http://apk.miguvideo.com/apk/" + e + ".apk"), t
				}
			}, {
				key: "mgVideoEnv",
				value: function() {
					return !!u.default.getViewCookie("AppVersion")
				}
			}, {
				key: "getUrlPW",
				value: function() {
					return u.default.getUrlParam(this.pwValueKey)
				}
			}, {
				key: "getUrlPWID",
				value: function() {
					return u.default.getUrlParam("pwid") || u.default.getUrlParam("pwId")
				}
			}, {
				key: "isInWebview",
				value: function() {
					return this.mgVideoEnv() || "ios" === u.default.getUrlParam("platform") || "android" === u.default.getUrlParam("platform")
				}
			}]), t
		}();
		window.JsBridge = l, window.MGBridge = new l, window.MGBridge.init(function(t) {
			console.log("初始化", t)
		})
	}, function(t, e, n) {
		var i = n(0),
			r = i.JSON || (i.JSON = {
				stringify: JSON.stringify
			});
		t.exports = function(t) {
			return r.stringify.apply(r, arguments)
		}
	}, function(t, e, n) {
		"use strict";
		e.__esModule = !0, e.default = function(t, e) {
			if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
	}, function(t, e, n) {
		"use strict";
		e.__esModule = !0;
		var i, r = (i = n(30)) && i.__esModule ? i : {
			default: i
		};
		e.default = function() {
			function t(t, e) {
				for(var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, r.default)(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}()
	}, function(t, e, n) {
		n(53);
		var i = n(0).Object;
		t.exports = function(t, e, n) {
			return i.defineProperty(t, e, n)
		}
	}, function(t, e, n) {
		var i = n(5);
		i(i.S + i.F * !n(3), "Object", {
			defineProperty: n(2).f
		})
	}, function(t, e) {
		t.exports = function(t) {
			if("function" != typeof t) throw TypeError(t + " is not a function!");
			return t
		}
	}, function(t, e, n) {
		n(56);
		var i = n(0).Object;
		t.exports = function(t, e) {
			return i.create(t, e)
		}
	}, function(t, e, n) {
		var i = n(5);
		i(i.S, "Object", {
			create: n(19)
		})
	}, function(t, e, n) {
		var i = n(2),
			r = n(10),
			o = n(13);
		t.exports = n(3) ? Object.defineProperties : function(t, e) {
			r(t);
			for(var n, a = o(e), u = a.length, c = 0; u > c;) i.f(t, n = a[c++], e[n]);
			return t
		}
	}, function(t, e, n) {
		var i = n(36);
		t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
			return "String" == i(t) ? t.split("") : Object(t)
		}
	}, function(t, e, n) {
		var i = n(8),
			r = n(60),
			o = n(61);
		t.exports = function(t) {
			return function(e, n, a) {
				var u, c = i(e),
					s = r(c.length),
					l = o(a, s);
				if(t && n != n) {
					for(; s > l;)
						if((u = c[l++]) != u) return !0
				} else
					for(; s > l; l++)
						if((t || l in c) && c[l] === n) return t || l || 0;
				return !t && -1
			}
		}
	}, function(t, e, n) {
		var i = n(21),
			r = Math.min;
		t.exports = function(t) {
			return t > 0 ? r(i(t), 9007199254740991) : 0
		}
	}, function(t, e, n) {
		var i = n(21),
			r = Math.max,
			o = Math.min;
		t.exports = function(t, e) {
			return(t = i(t)) < 0 ? r(t + e, 0) : o(t, e)
		}
	}, function(t, e, n) {
		var i = n(1).document;
		t.exports = i && i.documentElement
	}, function(t, e, n) {
		"use strict";
		var i = p(n(64)),
			r = p(n(68)),
			o = p(n(40)),
			a = p(n(79)),
			u = p(n(29)),
			c = p(n(34)),
			s = p(n(82)),
			l = p(n(91)),
			f = p(n(43)),
			d = p(n(30));

		function p(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}! function(t) {
			var e = {};

			function n(i) {
				if(e[i]) return e[i].exports;
				var r = e[i] = {
					i: i,
					l: !1,
					exports: {}
				};
				return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
			}
			n.m = t, n.c = e, n.d = function(t, e, i) {
				n.o(t, e) || (0, d.default)(t, e, {
					enumerable: !0,
					get: i
				})
			}, n.r = function(t) {
				void 0 !== f.default && l.default && (0, d.default)(t, l.default, {
					value: "Module"
				}), Object.defineProperty(t, "__esModule", {
					value: !0
				})
			}, n.t = function(t, e) {
				if(1 & e && (t = n(t)), 8 & e) return t;
				if(4 & e && "object" == (void 0 === t ? "undefined" : (0, s.default)(t)) && t && t.__esModule) return t;
				var i = (0, c.default)(null);
				if(n.r(i), Object.defineProperty(i, "default", {
						enumerable: !0,
						value: t
					}), 2 & e && "string" != typeof t)
					for(var r in t) n.d(i, r, function(e) {
						return t[e]
					}.bind(null, r));
				return i
			}, n.n = function(t) {
				var e = t && t.__esModule ? function() {
					return t.default
				} : function() {
					return t
				};
				return n.d(e, "a", e), e
			}, n.o = function(t, e) {
				return Object.prototype.hasOwnProperty.call(t, e)
			}, n.p = "", n(n.s = 1)
		}([function(t, e, n) {
			t.exports = {
				default: n(3),
				__esModule: !0
			}
		}, function(t, e, n) {
			t.exports = n(2)
		}, function(t, e, n) {
			n.r(e);
			var i = n(0),
				r = n.n(i),
				o = n(5),
				a = n(8),
				u = n(9),
				c = function(t) {
					this.type = "", this.dl = t, this.promotion = {
						id: u(),
						way: {},
						wayId: "",
						ticks: {
							PROMOTION_START: {
								event: "PROMOTION_START",
								timestamp: (new Date).getTime()
							}
						},
						extraData: {}
					}, this.createClipborad4Documents = function(t, e, n) {
						if(t && n) {
							for(var i = this.getClipboardJSON(e), r = 0; r < t.length; r++) t[r].setAttribute("data-clipboard-text", i);
							new a("." + n)
						} else console.error("doc and name is must param")
					}, this.createClipborad4Document = function(t, e, n) {
						if(t && n) {
							var i = this.getClipboardJSON(e);
							t.setAttribute("data-clipboard-text", i), new a("#" + n)
						} else console.error("doc and name is must param")
					}, this.getClipboardJSON = function(t) {
						var e = this.promotion;
						t && (e.extraData.deepLink = t);
						var n = {
							miguMovie: {
								miguMovie: {
									promotion: e
								}
							},
							miguVideo: {
								miguVideo: {
									promotion: e
								}
							},
							miguLive: {
								miguLive: {
									promotion: e
								}
							}
						};
						return r()(n[this.type])
					}, this.getDeepLink = function(t) {
						var e = this.promotion,
							n = this.dl;
						t && (n = t), e.extraData.deepLink = {};
						var i = {
							promotion: e
						};
						return n.indexOf("?") > -1 ? n + "&" + this.type + "=" + r()(i) : n + "?" + this.type + "=" + r()(i)
					}, this.getPromotionId = function() {
						return this.promotion.id
					}, this.getPromotion = function() {
						return this.promotion
					}
				};
			window.init = function(t, e) {
				var n = window.location.search.replace("?", "");
				if(-1 !== ["miguMovie", "miguVideo", "miguLive"].indexOf(t) && t && e && n) {
					var i = o.parse(n),
						r = i.promotionWay,
						a = i.pwId;
					if(i.pwDebug && alert("this page is use h5-promotion-sdk-2.0.js "), r || a) {
						var u = new c(e);
						return u.type = t, r && (u.promotion.way = JSON.parse(r)), a && (u.promotion.wayId = a), u
					}
				}
			}
		}, function(t, e, n) {
			var i = n(4),
				r = i.JSON || (i.JSON = {
					stringify: u.default
				});
			t.exports = function(t) {
				return r.stringify.apply(r, arguments)
			}
		}, function(t, e) {
			var n = t.exports = {
				version: "2.6.2"
			};
			"number" == typeof __e && (__e = n)
		}, function(t, e, n) {
			e.decode = e.parse = n(6), e.encode = e.stringify = n(7)
		}, function(t, e, n) {
			function i(t, e) {
				return Object.prototype.hasOwnProperty.call(t, e)
			}
			t.exports = function(t, e, n, o) {
				e = e || "&", n = n || "=";
				var a = {};
				if("string" != typeof t || 0 === t.length) return a;
				var u = /\+/g;
				t = t.split(e);
				var c = 1e3;
				o && "number" == typeof o.maxKeys && (c = o.maxKeys);
				var s = t.length;
				c > 0 && s > c && (s = c);
				for(var l = 0; l < s; ++l) {
					var f, d, p, h, v = t[l].replace(u, "%20"),
						g = v.indexOf(n);
					g >= 0 ? (f = v.substr(0, g), d = v.substr(g + 1)) : (f = v, d = ""), p = decodeURIComponent(f), h = decodeURIComponent(d), i(a, p) ? r(a[p]) ? a[p].push(h) : a[p] = [a[p], h] : a[p] = h
				}
				return a
			};
			var r = Array.isArray || function(t) {
				return "[object Array]" === Object.prototype.toString.call(t)
			}
		}, function(t, e, n) {
			var i = function(t) {
				switch(void 0 === t ? "undefined" : (0, s.default)(t)) {
					case "string":
						return t;
					case "boolean":
						return t ? "true" : "false";
					case "number":
						return isFinite(t) ? t : "";
					default:
						return ""
				}
			};
			t.exports = function(t, e, n, a) {
				return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == (void 0 === t ? "undefined" : (0, s.default)(t)) ? o(u(t), function(a) {
					var u = encodeURIComponent(i(a)) + n;
					return r(t[a]) ? o(t[a], function(t) {
						return u + encodeURIComponent(i(t))
					}).join(e) : u + encodeURIComponent(i(t[a]))
				}).join(e) : a ? encodeURIComponent(i(a)) + n + encodeURIComponent(i(t)) : ""
			};
			var r = Array.isArray || function(t) {
				return "[object Array]" === Object.prototype.toString.call(t)
			};

			function o(t, e) {
				if(t.map) return t.map(e);
				for(var n = [], i = 0; i < t.length; i++) n.push(e(t[i], i));
				return n
			}
			var u = a.default || function(t) {
				var e = [];
				for(var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
				return e
			}
		}, function(t, e, n) {
			var a;
			a = function() {
				return function(t) {
					var e = {};

					function n(i) {
						if(e[i]) return e[i].exports;
						var r = e[i] = {
							i: i,
							l: !1,
							exports: {}
						};
						return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
					}
					return n.m = t, n.c = e, n.d = function(t, e, i) {
						n.o(t, e) || (0, d.default)(t, e, {
							enumerable: !0,
							get: i
						})
					}, n.r = function(t) {
						void 0 !== f.default && l.default && (0, d.default)(t, l.default, {
							value: "Module"
						}), Object.defineProperty(t, "__esModule", {
							value: !0
						})
					}, n.t = function(t, e) {
						if(1 & e && (t = n(t)), 8 & e) return t;
						if(4 & e && "object" == (void 0 === t ? "undefined" : (0, s.default)(t)) && t && t.__esModule) return t;
						var i = (0, c.default)(null);
						if(n.r(i), Object.defineProperty(i, "default", {
								enumerable: !0,
								value: t
							}), 2 & e && "string" != typeof t)
							for(var r in t) n.d(i, r, function(e) {
								return t[e]
							}.bind(null, r));
						return i
					}, n.n = function(t) {
						var e = t && t.__esModule ? function() {
							return t.default
						} : function() {
							return t
						};
						return n.d(e, "a", e), e
					}, n.o = function(t, e) {
						return Object.prototype.hasOwnProperty.call(t, e)
					}, n.p = "", n(n.s = 0)
				}([function(t, e, n) {
					var a = "function" == typeof f.default && "symbol" == (0, s.default)(o.default) ? function(t) {
							return void 0 === t ? "undefined" : (0, s.default)(t)
						} : function(t) {
							return t && "function" == typeof f.default && t.constructor === f.default && t !== f.default.prototype ? "symbol" : void 0 === t ? "undefined" : (0, s.default)(t)
						},
						u = function() {
							function t(t, e) {
								for(var n = 0; n < e.length; n++) {
									var i = e[n];
									i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, d.default)(t, i.key, i)
								}
							}
							return function(e, n, i) {
								return n && t(e.prototype, n), i && t(e, i), e
							}
						}(),
						l = v(n(1)),
						p = v(n(3)),
						h = v(n(4));

					function v(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}
					var g = function(t) {
						function e(t, n) {
							! function(t, e) {
								if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, e);
							var i = function(t, e) {
								if(!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || "object" != (void 0 === e ? "undefined" : (0, s.default)(e)) && "function" != typeof e ? t : e
							}(this, (e.__proto__ || (0, r.default)(e)).call(this));
							return i.resolveOptions(n), i.listenClick(t), i
						}
						return function(t, e) {
							if("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : (0, s.default)(e)));
							t.prototype = (0, c.default)(e && e.prototype, {
								constructor: {
									value: t,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), e && (i.default ? (0, i.default)(t, e) : t.__proto__ = e)
						}(e, p.default), u(e, [{
							key: "resolveOptions",
							value: function() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === a(t.container) ? t.container : document.body
							}
						}, {
							key: "listenClick",
							value: function(t) {
								var e = this;
								this.listener = (0, h.default)(t, "click", function(t) {
									return e.onClick(t)
								})
							}
						}, {
							key: "onClick",
							value: function(t) {
								var e = t.delegateTarget || t.currentTarget;
								this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l.default({
									action: this.action(e),
									target: this.target(e),
									text: this.text(e),
									container: this.container,
									trigger: e,
									emitter: this
								})
							}
						}, {
							key: "defaultAction",
							value: function(t) {
								return m("action", t)
							}
						}, {
							key: "defaultTarget",
							value: function(t) {
								var e = m("target", t);
								if(e) return document.querySelector(e)
							}
						}, {
							key: "defaultText",
							value: function(t) {
								return m("text", t)
							}
						}, {
							key: "destroy",
							value: function() {
								this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
							}
						}], [{
							key: "isSupported",
							value: function() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
									e = "string" == typeof t ? [t] : t,
									n = !!document.queryCommandSupported;
								return e.forEach(function(t) {
									n = n && !!document.queryCommandSupported(t)
								}), n
							}
						}]), e
					}();

					function m(t, e) {
						var n = "data-clipboard-" + t;
						if(e.hasAttribute(n)) return e.getAttribute(n)
					}
					t.exports = g
				}, function(t, e, n) {
					var i, r = "function" == typeof f.default && "symbol" == (0, s.default)(o.default) ? function(t) {
							return void 0 === t ? "undefined" : (0, s.default)(t)
						} : function(t) {
							return t && "function" == typeof f.default && t.constructor === f.default && t !== f.default.prototype ? "symbol" : void 0 === t ? "undefined" : (0, s.default)(t)
						},
						a = function() {
							function t(t, e) {
								for(var n = 0; n < e.length; n++) {
									var i = e[n];
									i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, d.default)(t, i.key, i)
								}
							}
							return function(e, n, i) {
								return n && t(e.prototype, n), i && t(e, i), e
							}
						}(),
						u = (i = n(2)) && i.__esModule ? i : {
							default: i
						},
						c = function() {
							function t(e) {
								! function(t, e) {
									if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
								}(this, t), this.resolveOptions(e), this.initSelection()
							}
							return a(t, [{
								key: "resolveOptions",
								value: function() {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
									this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
								}
							}, {
								key: "initSelection",
								value: function() {
									this.text ? this.selectFake() : this.target && this.selectTarget()
								}
							}, {
								key: "selectFake",
								value: function() {
									var t = this,
										e = "rtl" == document.documentElement.getAttribute("dir");
									this.removeFake(), this.fakeHandlerCallback = function() {
										return t.removeFake()
									}, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
									var n = window.pageYOffset || document.documentElement.scrollTop;
									this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, u.default)(this.fakeElem), this.copyText()
								}
							}, {
								key: "removeFake",
								value: function() {
									this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
								}
							}, {
								key: "selectTarget",
								value: function() {
									this.selectedText = (0, u.default)(this.target), this.copyText()
								}
							}, {
								key: "copyText",
								value: function() {
									var t = void 0;
									try {
										t = document.execCommand(this.action)
									} catch(e) {
										t = !1
									}
									this.handleResult(t)
								}
							}, {
								key: "handleResult",
								value: function(t) {
									this.emitter.emit(t ? "success" : "error", {
										action: this.action,
										text: this.selectedText,
										trigger: this.trigger,
										clearSelection: this.clearSelection.bind(this)
									})
								}
							}, {
								key: "clearSelection",
								value: function() {
									this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
								}
							}, {
								key: "destroy",
								value: function() {
									this.removeFake()
								}
							}, {
								key: "action",
								set: function() {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
									if(this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
								},
								get: function() {
									return this._action
								}
							}, {
								key: "target",
								set: function(t) {
									if(void 0 !== t) {
										if(!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
										if("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
										if("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
										this._target = t
									}
								},
								get: function() {
									return this._target
								}
							}]), t
						}();
					t.exports = c
				}, function(t, e) {
					t.exports = function(t) {
						var e;
						if("SELECT" === t.nodeName) t.focus(), e = t.value;
						else if("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
							var n = t.hasAttribute("readonly");
							n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
						} else {
							t.hasAttribute("contenteditable") && t.focus();
							var i = window.getSelection(),
								r = document.createRange();
							r.selectNodeContents(t), i.removeAllRanges(), i.addRange(r), e = i.toString()
						}
						return e
					}
				}, function(t, e) {
					function n() {}
					n.prototype = {
						on: function(t, e, n) {
							var i = this.e || (this.e = {});
							return(i[t] || (i[t] = [])).push({
								fn: e,
								ctx: n
							}), this
						},
						once: function(t, e, n) {
							var i = this;

							function r() {
								i.off(t, r), e.apply(n, arguments)
							}
							return r._ = e, this.on(t, r, n)
						},
						emit: function(t) {
							for(var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, r = n.length; i < r; i++) n[i].fn.apply(n[i].ctx, e);
							return this
						},
						off: function(t, e) {
							var n = this.e || (this.e = {}),
								i = n[t],
								r = [];
							if(i && e)
								for(var o = 0, a = i.length; o < a; o++) i[o].fn !== e && i[o].fn._ !== e && r.push(i[o]);
							return r.length ? n[t] = r : delete n[t], this
						}
					}, t.exports = n
				}, function(t, e, n) {
					var i = n(5),
						r = n(6);
					t.exports = function(t, e, n) {
						if(!t && !e && !n) throw new Error("Missing required arguments");
						if(!i.string(e)) throw new TypeError("Second argument must be a String");
						if(!i.fn(n)) throw new TypeError("Third argument must be a Function");
						if(i.node(t)) return function(t, e, n) {
							return t.addEventListener(e, n), {
								destroy: function() {
									t.removeEventListener(e, n)
								}
							}
						}(t, e, n);
						if(i.nodeList(t)) return function(t, e, n) {
							return Array.prototype.forEach.call(t, function(t) {
								t.addEventListener(e, n)
							}), {
								destroy: function() {
									Array.prototype.forEach.call(t, function(t) {
										t.removeEventListener(e, n)
									})
								}
							}
						}(t, e, n);
						if(i.string(t)) return function(t, e, n) {
							return r(document.body, t, e, n)
						}(t, e, n);
						throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
					}
				}, function(t, e) {
					e.node = function(t) {
						return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
					}, e.nodeList = function(t) {
						var n = Object.prototype.toString.call(t);
						return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]))
					}, e.string = function(t) {
						return "string" == typeof t || t instanceof String
					}, e.fn = function(t) {
						return "[object Function]" === Object.prototype.toString.call(t)
					}
				}, function(t, e, n) {
					var i = n(7);

					function r(t, e, n, r, o) {
						var a = function(t, e, n, r) {
							return function(n) {
								n.delegateTarget = i(n.target, e), n.delegateTarget && r.call(t, n)
							}
						}.apply(this, arguments);
						return t.addEventListener(n, a, o), {
							destroy: function() {
								t.removeEventListener(n, a, o)
							}
						}
					}
					t.exports = function(t, e, n, i, o) {
						return "function" == typeof t.addEventListener ? r.apply(null, arguments) : "function" == typeof n ? r.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function(t) {
							return r(t, e, n, i, o)
						}))
					}
				}, function(t, e) {
					if("undefined" != typeof Element && !Element.prototype.matches) {
						var n = Element.prototype;
						n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
					}
					t.exports = function(t, e) {
						for(; t && 9 !== t.nodeType;) {
							if("function" == typeof t.matches && t.matches(e)) return t;
							t = t.parentNode
						}
					}
				}])
			}, t.exports = a()
		}, function(t, e, n) {
			var i, r, o = n(10),
				a = n(11),
				u = 0,
				c = 0;
			t.exports = function(t, e, n) {
				var s = e && n || 0,
					l = e || [],
					f = (t = t || {}).node || i,
					d = void 0 !== t.clockseq ? t.clockseq : r;
				if(null == f || null == d) {
					var p = o();
					null == f && (f = i = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]), null == d && (d = r = 16383 & (p[6] << 8 | p[7]))
				}
				var h = void 0 !== t.msecs ? t.msecs : (new Date).getTime(),
					v = void 0 !== t.nsecs ? t.nsecs : c + 1,
					g = h - u + (v - c) / 1e4;
				if(g < 0 && void 0 === t.clockseq && (d = d + 1 & 16383), (g < 0 || h > u) && void 0 === t.nsecs && (v = 0), v >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				u = h, c = v, r = d;
				var m = (1e4 * (268435455 & (h += 122192928e5)) + v) % 4294967296;
				l[s++] = m >>> 24 & 255, l[s++] = m >>> 16 & 255, l[s++] = m >>> 8 & 255, l[s++] = 255 & m;
				var y = h / 4294967296 * 1e4 & 268435455;
				l[s++] = y >>> 8 & 255, l[s++] = 255 & y, l[s++] = y >>> 24 & 15 | 16, l[s++] = y >>> 16 & 255, l[s++] = d >>> 8 | 128, l[s++] = 255 & d;
				for(var b = 0; b < 6; ++b) l[s + b] = f[b];
				return e || a(l)
			}
		}, function(t, e) {
			var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
			if(n) {
				var i = new Uint8Array(16);
				t.exports = function() {
					return n(i), i
				}
			} else {
				var r = new Array(16);
				t.exports = function() {
					for(var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), r[e] = t >>> ((3 & e) << 3) & 255;
					return r
				}
			}
		}, function(t, e) {
			for(var n = [], i = 0; i < 256; ++i) n[i] = (i + 256).toString(16).substr(1);
			t.exports = function(t, e) {
				var i = e || 0,
					r = n;
				return [r[t[i++]], r[t[i++]], r[t[i++]], r[t[i++]], "-", r[t[i++]], r[t[i++]], "-", r[t[i++]], r[t[i++]], "-", r[t[i++]], r[t[i++]], "-", r[t[i++]], r[t[i++]], r[t[i++]], r[t[i++]], r[t[i++]], r[t[i++]]].join("")
			}
		}])
	}, function(t, e, n) {
		t.exports = {
			default: n(65),
			__esModule: !0
		}
	}, function(t, e, n) {
		n(66), t.exports = n(0).Object.setPrototypeOf
	}, function(t, e, n) {
		var i = n(5);
		i(i.S, "Object", {
			setPrototypeOf: n(67).set
		})
	}, function(t, e, n) {
		var i = n(7),
			r = n(10),
			o = function(t, e) {
				if(r(t), !i(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
			};
		t.exports = {
			set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, i) {
				try {
					(i = n(31)(Function.call, n(37).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
				} catch(t) {
					e = !0
				}
				return function(t, n) {
					return o(t, n), e ? t.__proto__ = n : i(t, n), t
				}
			}({}, !1) : void 0),
			check: o
		}
	}, function(t, e, n) {
		t.exports = {
			default: n(69),
			__esModule: !0
		}
	}, function(t, e, n) {
		n(70), t.exports = n(0).Object.getPrototypeOf
	}, function(t, e, n) {
		var i = n(16),
			r = n(38);
		n(39)("getPrototypeOf", function() {
			return function(t) {
				return r(i(t))
			}
		})
	}, function(t, e, n) {
		n(72), n(75), t.exports = n(17).f("iterator")
	}, function(t, e, n) {
		"use strict";
		var i = n(73)(!0);
		n(41)(String, "String", function(t) {
			this._t = String(t), this._i = 0
		}, function() {
			var t, e = this._t,
				n = this._i;
			return n >= e.length ? {
				value: void 0,
				done: !0
			} : (t = i(e, n), this._i += t.length, {
				value: t,
				done: !1
			})
		})
	}, function(t, e, n) {
		var i = n(21),
			r = n(20);
		t.exports = function(t) {
			return function(e, n) {
				var o, a, u = String(r(e)),
					c = i(n),
					s = u.length;
				return c < 0 || c >= s ? t ? "" : void 0 : (o = u.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === s || (a = u.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? u.charAt(c) : o : t ? u.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536
			}
		}
	}, function(t, e, n) {
		"use strict";
		var i = n(19),
			r = n(12),
			o = n(27),
			a = {};
		n(6)(a, n(9)("iterator"), function() {
			return this
		}), t.exports = function(t, e, n) {
			t.prototype = i(a, {
				next: r(1, n)
			}), o(t, e + " Iterator")
		}
	}, function(t, e, n) {
		n(76);
		for(var i = n(1), r = n(6), o = n(26), a = n(9)("toStringTag"), u = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < u.length; c++) {
			var s = u[c],
				l = i[s],
				f = l && l.prototype;
			f && !f[a] && r(f, a, s), o[s] = o.Array
		}
	}, function(t, e, n) {
		"use strict";
		var i = n(77),
			r = n(78),
			o = n(26),
			a = n(8);
		t.exports = n(41)(Array, "Array", function(t, e) {
			this._t = a(t), this._i = 0, this._k = e
		}, function() {
			var t = this._t,
				e = this._k,
				n = this._i++;
			return !t || n >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
		}, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
	}, function(t, e) {
		t.exports = function() {}
	}, function(t, e) {
		t.exports = function(t, e) {
			return {
				value: e,
				done: !!t
			}
		}
	}, function(t, e, n) {
		t.exports = {
			default: n(80),
			__esModule: !0
		}
	}, function(t, e, n) {
		n(81), t.exports = n(0).Object.keys
	}, function(t, e, n) {
		var i = n(16),
			r = n(13);
		n(39)("keys", function() {
			return function(t) {
				return r(i(t))
			}
		})
	}, function(t, e, n) {
		"use strict";
		e.__esModule = !0;
		var i = a(n(40)),
			r = a(n(43)),
			o = "function" == typeof r.default && "symbol" == typeof i.default ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof r.default && t.constructor === r.default && t !== r.default.prototype ? "symbol" : typeof t
			};

		function a(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		e.default = "function" == typeof r.default && "symbol" === o(i.default) ? function(t) {
			return void 0 === t ? "undefined" : o(t)
		} : function(t) {
			return t && "function" == typeof r.default && t.constructor === r.default && t !== r.default.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
		}
	}, function(t, e, n) {
		n(84), n(46), n(89), n(90), t.exports = n(0).Symbol
	}, function(t, e, n) {
		"use strict";
		var i = n(1),
			r = n(4),
			o = n(3),
			a = n(5),
			u = n(42),
			c = n(85).KEY,
			s = n(11),
			l = n(23),
			f = n(27),
			d = n(15),
			p = n(9),
			h = n(17),
			v = n(28),
			g = n(86),
			m = n(87),
			y = n(10),
			b = n(7),
			w = n(16),
			_ = n(8),
			I = n(18),
			k = n(12),
			E = n(19),
			S = n(88),
			x = n(37),
			P = n(44),
			O = n(2),
			A = n(13),
			T = x.f,
			j = O.f,
			D = S.f,
			C = i.Symbol,
			V = i.JSON,
			U = V && V.stringify,
			W = p("_hidden"),
			L = p("toPrimitive"),
			M = {}.propertyIsEnumerable,
			N = l("symbol-registry"),
			R = l("symbols"),
			J = l("op-symbols"),
			B = Object.prototype,
			H = "function" == typeof C && !!P.f,
			F = i.QObject,
			K = !F || !F.prototype || !F.prototype.findChild,
			G = o && s(function() {
				return 7 != E(j({}, "a", {
					get: function() {
						return j(this, "a", {
							value: 7
						}).a
					}
				})).a
			}) ? function(t, e, n) {
				var i = T(B, e);
				i && delete B[e], j(t, e, n), i && t !== B && j(B, e, i)
			} : j,
			q = function(t) {
				var e = R[t] = E(C.prototype);
				return e._k = t, e
			},
			Y = H && "symbol" == typeof C.iterator ? function(t) {
				return "symbol" == typeof t
			} : function(t) {
				return t instanceof C
			},
			z = function(t, e, n) {
				return t === B && z(J, e, n), y(t), e = I(e, !0), y(n), r(R, e) ? (n.enumerable ? (r(t, W) && t[W][e] && (t[W][e] = !1), n = E(n, {
					enumerable: k(0, !1)
				})) : (r(t, W) || j(t, W, k(1, {})), t[W][e] = !0), G(t, e, n)) : j(t, e, n)
			},
			$ = function(t, e) {
				y(t);
				for(var n, i = g(e = _(e)), r = 0, o = i.length; o > r;) z(t, n = i[r++], e[n]);
				return t
			},
			Q = function(t) {
				var e = M.call(this, t = I(t, !0));
				return !(this === B && r(R, t) && !r(J, t)) && (!(e || !r(this, t) || !r(R, t) || r(this, W) && this[W][t]) || e)
			},
			X = function(t, e) {
				if(t = _(t), e = I(e, !0), t !== B || !r(R, e) || r(J, e)) {
					var n = T(t, e);
					return !n || !r(R, e) || r(t, W) && t[W][e] || (n.enumerable = !0), n
				}
			},
			Z = function(t) {
				for(var e, n = D(_(t)), i = [], o = 0; n.length > o;) r(R, e = n[o++]) || e == W || e == c || i.push(e);
				return i
			},
			tt = function(t) {
				for(var e, n = t === B, i = D(n ? J : _(t)), o = [], a = 0; i.length > a;) !r(R, e = i[a++]) || n && !r(B, e) || o.push(R[e]);
				return o
			};
		H || (u((C = function() {
			if(this instanceof C) throw TypeError("Symbol is not a constructor!");
			var t = d(arguments.length > 0 ? arguments[0] : void 0),
				e = function(n) {
					this === B && e.call(J, n), r(this, W) && r(this[W], t) && (this[W][t] = !1), G(this, t, k(1, n))
				};
			return o && K && G(B, t, {
				configurable: !0,
				set: e
			}), q(t)
		}).prototype, "toString", function() {
			return this._k
		}), x.f = X, O.f = z, n(45).f = S.f = Z, n(25).f = Q, P.f = tt, o && !n(14) && u(B, "propertyIsEnumerable", Q, !0), h.f = function(t) {
			return q(p(t))
		}), a(a.G + a.W + a.F * !H, {
			Symbol: C
		});
		for(var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) p(et[nt++]);
		for(var it = A(p.store), rt = 0; it.length > rt;) v(it[rt++]);
		a(a.S + a.F * !H, "Symbol", {
			for: function(t) {
				return r(N, t += "") ? N[t] : N[t] = C(t)
			},
			keyFor: function(t) {
				if(!Y(t)) throw TypeError(t + " is not a symbol!");
				for(var e in N)
					if(N[e] === t) return e
			},
			useSetter: function() {
				K = !0
			},
			useSimple: function() {
				K = !1
			}
		}), a(a.S + a.F * !H, "Object", {
			create: function(t, e) {
				return void 0 === e ? E(t) : $(E(t), e)
			},
			defineProperty: z,
			defineProperties: $,
			getOwnPropertyDescriptor: X,
			getOwnPropertyNames: Z,
			getOwnPropertySymbols: tt
		});
		var ot = s(function() {
			P.f(1)
		});
		a(a.S + a.F * ot, "Object", {
			getOwnPropertySymbols: function(t) {
				return P.f(w(t))
			}
		}), V && a(a.S + a.F * (!H || s(function() {
			var t = C();
			return "[null]" != U([t]) || "{}" != U({
				a: t
			}) || "{}" != U(Object(t))
		})), "JSON", {
			stringify: function(t) {
				for(var e, n, i = [t], r = 1; arguments.length > r;) i.push(arguments[r++]);
				if(n = e = i[1], (b(e) || void 0 !== t) && !Y(t)) return m(e) || (e = function(t, e) {
					if("function" == typeof n && (e = n.call(this, t, e)), !Y(e)) return e
				}), i[1] = e, U.apply(V, i)
			}
		}), C.prototype[L] || n(6)(C.prototype, L, C.prototype.valueOf), f(C, "Symbol"), f(Math, "Math", !0), f(i.JSON, "JSON", !0)
	}, function(t, e, n) {
		var i = n(15)("meta"),
			r = n(7),
			o = n(4),
			a = n(2).f,
			u = 0,
			c = Object.isExtensible || function() {
				return !0
			},
			s = !n(11)(function() {
				return c(Object.preventExtensions({}))
			}),
			l = function(t) {
				a(t, i, {
					value: {
						i: "O" + ++u,
						w: {}
					}
				})
			},
			f = t.exports = {
				KEY: i,
				NEED: !1,
				fastKey: function(t, e) {
					if(!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
					if(!o(t, i)) {
						if(!c(t)) return "F";
						if(!e) return "E";
						l(t)
					}
					return t[i].i
				},
				getWeak: function(t, e) {
					if(!o(t, i)) {
						if(!c(t)) return !0;
						if(!e) return !1;
						l(t)
					}
					return t[i].w
				},
				onFreeze: function(t) {
					return s && f.NEED && c(t) && !o(t, i) && l(t), t
				}
			}
	}, function(t, e, n) {
		var i = n(13),
			r = n(44),
			o = n(25);
		t.exports = function(t) {
			var e = i(t),
				n = r.f;
			if(n)
				for(var a, u = n(t), c = o.f, s = 0; u.length > s;) c.call(t, a = u[s++]) && e.push(a);
			return e
		}
	}, function(t, e, n) {
		var i = n(36);
		t.exports = Array.isArray || function(t) {
			return "Array" == i(t)
		}
	}, function(t, e, n) {
		var i = n(8),
			r = n(45).f,
			o = {}.toString,
			a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
		t.exports.f = function(t) {
			return a && "[object Window]" == o.call(t) ? function(t) {
				try {
					return r(t)
				} catch(t) {
					return a.slice()
				}
			}(t) : r(i(t))
		}
	}, function(t, e, n) {
		n(28)("asyncIterator")
	}, function(t, e, n) {
		n(28)("observable")
	}, function(t, e, n) {
		t.exports = {
			default: n(92),
			__esModule: !0
		}
	}, function(t, e, n) {
		n(46), t.exports = n(17).f("toStringTag")
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = {
			getViewCookie: function(t) {
				var e, n = new RegExp("(^| )" + t + "=([^;]*)(;|$)");
				return(e = document.cookie.match(n)) ? unescape(e[2]) : null
			},
			getNowFormatDate: function() {
				return new Date((new Date).getTime() + 288e5).toISOString().split(".")[0].replace("T", " ")
			},
			getUrlParam: function(t) {
				var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
					n = window.location.search.substr(1).match(e);
				return null != n ? decodeURI(n[2]) : null
			},
			isWeChat: function() {
				return !!navigator.userAgent.match(/MicroMessenger/g)
			},
			isAndroid: function() {
				return !!navigator.userAgent.match(/Android/g)
			},
			isiOS: function() {
				return !!navigator.userAgent.match(/iPhone|iPod|iPad/g)
			},
			addTimeStamp: function(t) {
				var e = Date.parse(new Date);
				return t + (t.indexOf("?") > -1 ? "&" : "?") + "urlTimeStamp=" + e
			}
		};
		e.default = i
	}])
});