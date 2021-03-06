/**
 * Created by udbac on 2019/02/21.
 */
function v2o(v) {
	var o = {};
	v.forEach(function(i) {
		o[i] = true;
	});
	return o;
};
var parseDomain = function(str) {
	if(!str) return '';
	if(str.indexOf('://') != -1) str = str.substr(str.indexOf('://') + 3);
	var topLevel = ['com', 'net', 'org', 'gov', 'edu', 'mil', 'biz', 'name', 'info', 'mobi', 'pro', 'travel', 'museum', 'int', 'areo', 'post', 'rec'];
	var domains = str.split('.');
	if(domains.length <= 1) return str;
	if(!isNaN(domains[domains.length - 1])) return str;
	var i = 0;
	while(i < topLevel.length && topLevel[i] != domains[domains.length - 1]) i++;
	if(i != topLevel.length) return domains[domains.length - 2] + '.' + domains[domains.length - 1];
	else {
		i = 0;
		while(i < topLevel.length && topLevel[i] != domains[domains.length - 2]) i++;
		if(i == topLevel.length) return domains[domains.length - 2] + '.' + domains[domains.length - 1];
		else return domains[domains.length - 3] + '.' + domains[domains.length - 2] + '.' + domains[domains.length - 1];
	}

};
var thisUrl = window.location.hostname;
config = {
	mobileFlag: false, //(true涓哄姞瀵嗭紝false涓烘槑鏂�)
	fpc: parseDomain(thisUrl),
	// 濡俿dc_server涓悇鎸囧悜鍧囨湭璁惧畾锛屽垯浣跨敤榛樿閲囬泦鍩熷悕鍜宒csid
	domain: "wtrace.cmgame.com", // TODO: 榛樿閲囬泦鏈嶅姟鍩熷悕
	dcsid: "dcs4vifp1ejgi98mjge9kontr_9h7l", // TODO: 榛樿閲囬泦娓犻亾dcsid

	/// 鍙互鍦╯dc_server涓紝瀹氫箟澶氭寚鍚戦噰闆嗐€傛瘡涓寚鍚戜负涓€涓洖璋冨嚱鏁帮紝鍦ㄥ嚱鏁颁腑瀹氫箟鎸囧悜鍙傛暟
	sdc_server: [
		/***
		 * 鎻掔爜閲囬泦鎸囧悜璁剧疆鍥炶皟鍑芥暟
		 * @param arg       褰撳墠椤甸潰鐨勬彃鐮佸弬鏁帮紝濡俢o_f銆乪vent銆乥ranch绛�
		 * @param dcs       dcs閲囬泦鍙傛暟
		 * @returns {*[]}   濡傝繑鍥瀠ndefined锛屽垯涓嶄笂鎶ユ彃鐮佷簨浠讹紝鍚﹀垯鏍规嵁杩斿洖鐨刣omain銆乨csid銆乤rg銆乨cs鐢熸垚鎻掔爜浜嬩欢
		 */
		function(arg, dcs) {
			// 绗竴鎸囧悜涓哄叏閲忛噰闆嗚嚦鐪佸垎鍏徃
			var dcsid = "dcs4vifp1ejgi98mjge9kontr_9h7l";
			var domain = "wtrace.cmgame.com"; // TODO: 鏈寚鍚戦噰闆嗘湇鍔″煙鍚嶏紝濡�"service.tj.10086.cn:7070"
			return [domain, dcsid, arg, dcs];
		},
	],
	cooltag: [
		function() {
			return undefined
		},
		function() {
			return undefined
		},
	]
};
var config = config;
var hexcase = 0;
var b64pad = "";
var chrsz = 8;

function hex_md5(s) {
	return binl2hex(core_md5(str2binl(s), s.length * chrsz))
}

function b64_md5(s) {
	return binl2b64(core_md5(str2binl(s), s.length * chrsz))
}

function str_md5(s) {
	return binl2str(core_md5(str2binl(s), s.length * chrsz))
}

function hex_hmac_md5(key, data) {
	return binl2hex(core_hmac_md5(key, data))
}

function b64_hmac_md5(key, data) {
	return binl2b64(core_hmac_md5(key, data))
}

function str_hmac_md5(key, data) {
	return binl2str(core_hmac_md5(key, data))
}

function md5_vm_test() {
	return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72"
}

function core_md5(x, len) {
	x[len >> 5] |= 128 << ((len) % 32);
	x[(((len + 64) >>> 9) << 4) + 14] = len;
	var a = 1732584193;
	var b = -271733879;
	var c = -1732584194;
	var d = 271733878;
	for(var i = 0; i < x.length; i += 16) {
		var olda = a;
		var oldb = b;
		var oldc = c;
		var oldd = d;
		a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
		d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
		c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
		b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
		a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
		d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
		c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
		b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
		a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
		d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
		c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
		b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
		a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
		d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
		c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
		b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
		a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
		d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
		c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
		b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
		a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
		d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
		c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
		b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
		a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
		d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
		c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
		b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
		a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
		d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
		c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
		b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
		a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
		d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
		c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
		b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
		a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
		d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
		c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
		b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
		a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
		d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
		c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
		b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
		a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
		d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
		c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
		b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
		a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
		d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
		c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
		b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
		a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
		d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
		c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
		b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
		a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
		d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
		c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
		b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
		a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
		d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
		c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
		b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
		a = safe_add(a, olda);
		b = safe_add(b, oldb);
		c = safe_add(c, oldc);
		d = safe_add(d, oldd)
	}
	return Array(a, b, c, d)
};

function md5_cmn(q, a, b, x, s, t) {
	return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b)
};

function md5_ff(a, b, c, d, x, s, t) {
	return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t)
};

function md5_gg(a, b, c, d, x, s, t) {
	return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t)
};

function md5_hh(a, b, c, d, x, s, t) {
	return md5_cmn(b ^ c ^ d, a, b, x, s, t)
};

function md5_ii(a, b, c, d, x, s, t) {
	return md5_cmn(c ^ (b | (~d)), a, b, x, s, t)
};

function core_hmac_md5(key, data) {
	var bkey = str2binl(key);
	if(bkey.length > 16) {
		bkey = core_md5(bkey, key.length * chrsz)
	};
	var ipad = Array(16),
		opad = Array(16);
	for(var i = 0; i < 16; i++) {
		ipad[i] = bkey[i] ^ 909522486;
		opad[i] = bkey[i] ^ 1549556828
	};
	var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
	return core_md5(opad.concat(hash), 512 + 128)
};

function safe_add(x, y) {
	var lsw = (x & 65535) + (y & 65535);
	var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	return(msw << 16) | (lsw & 65535)
};

function bit_rol(num, cnt) {
	return(num << cnt) | (num >>> (32 - cnt))
};

function str2binl(str) {
	var bin = Array();
	var mask = (1 << chrsz) - 1;
	for(var i = 0; i < str.length * chrsz; i += chrsz) {
		bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32)
	};
	return bin
};

function binl2str(bin) {
	var str = "";
	var mask = (1 << chrsz) - 1;
	for(var i = 0; i < bin.length * 32; i += chrsz) {
		str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask)
	};
	return str
};

function binl2hex(binarray) {
	var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
	var str = "";
	for(var i = 0; i < binarray.length * 4; i++) {
		str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 15) + hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 15)
	};
	return str
};

function binl2b64(binarray) {
	var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var str = "";
	for(var i = 0; i < binarray.length * 4; i += 3) {
		var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 255) << 16) | (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 255) << 8) | ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 255);
		for(var j = 0; j < 4; j++) {
			if(i * 8 + j * 6 > binarray.length * 32) {
				str += b64pad
			} else {
				str += tab.charAt((triplet >> 6 * (3 - j)) & 63)
			}
		}
	};
	return str
};
var fashion = {
	mobile_os: ["android", "wp8", "ios"],
	last_cmd: "",
	error_reason: "",
	O2String: function(O) {
		var S = [];
		var J = "";
		if(Object.prototype.toString.apply(O) === '[object Array]') {
			for(var i = 0; i < O.length; i++) S.push(O2String(O[i]));
			J = '[' + S.join(',') + ']'
		} else if(Object.prototype.toString.apply(O) === '[object Date]') {
			J = "new Date(" + O.getTime() + ")"
		} else if(Object.prototype.toString.apply(O) === '[object RegExp]' || Object.prototype.toString.apply(O) === '[object Function]') {
			J = O.toString()
		} else if(Object.prototype.toString.apply(O) === '[object Object]') {
			for(var i in O) {
				var tmp = typeof(O[i]) == 'string' ? '"' + O[i] + '"' : (typeof(O[i]) === 'object' ? O2String(O[i]) : O[i]);
				S.push('"' + i + '":' + tmp)
			}
			J = '{' + S.join(',') + '}'
		} else if(Object.prototype.toString.apply(O) === '[object Number]') {
			J = O.toString()
		} else if(Object.prototype.toString.apply(O) === '[object String]') {
			J = O
		};
		return J
	},
	mobile_info: {},
	user_call_back: function(obj) {
		fashion.error_reason = "undefined user call back."
	},
	init_cb: function(obj) {},
	mobileInvoke: function(jsonstr) {
		fashion.last_cmd = "mobileInvoke(" + jsonstr + ")";
		var obj = eval("(" + jsonstr + ")");
		if(undefined != typeof(obj.BUSINESSNAME) && "undefined" != typeof(obj.BUSINESSNAME) && "initJS" == obj.BUSINESSNAME && undefined != typeof(obj.OSTYPE) && "undefined" != typeof(obj.OSTYPE)) {
			fashion.mobile_info = obj;
			fashion.init_cb(obj)
		} else {
			fashion.user_call_back(obj)
		}
	},
	set_init_cb: function(func) {
		fashion.init_cb = func
	},
	invokeMobile: function(obj, cb) {
		var arg = fashion.O2String(obj);
		fashion.last_cmd = "invokeMobile" + arg;
		fashion.user_call_back = cb;
		var u = navigator.userAgent;
		if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
			javascript: sdkInterface.enteryMobile(arg)
		}
		else if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
			window.location.href = "mobileFunc:" + arg
		} else if(u.indexOf('IEMobile') > -1) {
			window.external.notify(arg)
		} else {
			fashion.error_reason = "涓嶆敮鎸佽鎿嶄綔绯荤粺";
			return
		}
	}
};
var mobileInvoke = function(jsonstr) {
	fashion.mobileInvoke(jsonstr)
};

function webapp() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	if(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		var browser = {
			versions: function() {
				var u = navigator.userAgent;
				return {
					mobile: !!u.match(/AppleWebKit.*Mobile.*/),
					android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
					qq: u.indexOf("MQQBrowser") > -1,
				}
			}(),
			language: (navigator.browserLanguage || navigator.language).toLowerCase()
		};
		if(browser.versions.mobile) {
			var ua = navigator.userAgent.toLowerCase();
			if(ua.match(/leadeon/i) == "leadeon") {
				return "app"
			};
			if(navigator.userAgent.indexOf('UCBrowser') > -1) {
				return "qita"
			};
			if(ua.match(/MicroMessenger/i) == "micromessenger") {
				return "weixin"
			} else {
				return "qita"
			}
		}
	} else {
		return "PC"
	}
};
var isApp = webapp();

function get_APP_p() {
	var userPhone = '';
	var msg = {
		"CODE": 23,
		"BUSINESSNAME": "isLogin"
	};
	fashion.invokeMobile(msg, fun_cb);

	function fun_cb(obj) {
		if(obj.ISLOGIN) {
			var msg = {
				"CODE": 100,
				"BUSINESSNAME": "getUserInfo"
			};
			fashion.invokeMobile(msg, getUserIngo)
		} else {
			var login = {
				"CODE": 22,
				"BUSINESSNAME": "showlogin"
			};
			fashion.invokeMobile(login, showLogin);

			function showLogin(obj) {
				var msg = {
					"CODE": 100,
					"BUSINESSNAME": "getUserInfo"
				};
				fashion.invokeMobile(msg, getUserIngo)
			}
		}
	};

	function getUserIngo(obj) {
		localStorage.setItem("_userPhone_", obj.USERPHONENUM);
		if(config.cooltag[0]()) {
			if(config.cooltag[0]().indexOf("http") > -1 && config.cooltag[1]().indexOf("http") > -1) {
				$.ajax({
					type: "get",
					url: config.cooltag[0](),
					data: {
						"op": "get",
						"db": "pied",
						"key": "mobile_list",
					},
					success: function(result) {
						if(result.val && result.val.length) {
							for(var i = 0; i < result.val.length; i++) {
								if(result.val[i] === (obj.USERPHONENUM + "")) {
									console.log("鎵嬫満鍙峰湪鐧藉悕鍗曞唴锛屾樉绀烘诞灞傛暟鎹�");
									var s = document.createElement("script");
									s.async = true;
									s.src = config.cooltag[1]();
									var s2 = document.getElementsByTagName("script")[0];
									s2.parentNode.insertBefore(s, s2);
									return true
								}
							}
							console.log("鎮ㄧ殑鎵嬫満鍙锋湭鍦ㄧ櫧鍚嶅崟鍒楄〃涓紝涓嶆樉绀虹浉鍏虫暟鎹�");
							return false
						} else {
							console.log("褰撳墠鏃犵櫧鍚嶅崟鍒楄〃");
							return false
						}
					}
				})
			}
		}
	}
};

function get_mobile_p(thisMobile) {
	if(config.cooltag[0]()) {
		if(config.cooltag[0]().indexOf("http") > -1 && config.cooltag[1]().indexOf("http") > -1) {
			if(thisMobile) {
				$.ajax({
					type: "get",
					url: config.cooltag[0](),
					data: {
						"op": "get",
						"db": "pied",
						"key": "mobile_list",
					},
					success: function(result) {
						if(result.val && result.val.length) {
							for(var i = 0; i < result.val.length; i++) {
								if(result.val[i] === (thisMobile + "")) {
									console.log("鎵嬫満鍙峰湪鐧藉悕鍗曞唴锛屾樉绀烘诞灞傛暟鎹�");
									var s = document.createElement("script");
									s.async = true;
									s.src = config.cooltag[1]();
									var s2 = document.getElementsByTagName("script")[0];
									s2.parentNode.insertBefore(s, s2);
									return true
								}
							}
							console.log("鎮ㄧ殑鎵嬫満鍙锋湭鍦ㄧ櫧鍚嶅崟鍒楄〃涓紝涓嶆樉绀虹浉鍏虫暟鎹�");
							return false
						} else {
							console.log("褰撳墠鏃犵櫧鍚嶅崟鍒楄〃");
							return false
						}
					}
				})
			} else {
				return false
			}
		}
	}
};

function get_t_or_f(thisMobile) {
	if(isApp == "app") {
		return get_APP_p()
	} else {
		return get_mobile_p(thisMobile)
	}
};
var _tag;
if(!window._tag) {
	function _wt() {}
	_wt.prototype.trackEvent = function() {};
	_wt.prototype.E = function($h, $i) {
		var e = $h.target || $h.srcElement;
		while(e.tagName && (e.tagName.toLowerCase() != $i.toLowerCase())) {
			e = e.parentElement || e.parentNode;
			e = e || {}
		}
		return e
	};
	_wt.prototype.P = function($h) {
		var x = $h.clientX;
		var y = $h.clientY;
		$j = (document.documentElement != undefined && document.documentElement.clientHeight != 0) ? document.documentElement : document.body;
		var $k = window.pageXOffset == undefined ? $j.scrollLeft : window.pageXOffset;
		var $l = window.pageYOffset == undefined ? $j.scrollTop : window.pageYOffset;
		return(x + $k) + "x" + (y + $l)
	};
	_wt.prototype.N = function($h) {
		var id = "";
		var $m = "";
		var $c = ["div", "table"];
		var $n = $c.length;
		var i, e, $o;
		for(i = 0; i < $n; i++) {
			$o = $c[i];
			if($o.length) {
				e = this.E($h, $o);
				id = (e.getAttribute && e.getAttribute("id")) ? e.getAttribute("id") : "";
				$m = e.className || "";
				if(id.length || $m.length) {
					break
				}
			}
		}
		return id.length ? id : $m
	};
	Function.prototype.wtbind = function($p) {
		var $q = this;
		var $r = function() {
			return $q.apply($p, arguments)
		};
		return $r
	};
	_wt.prototype.dcsMultiTrack = function() {
		if(window.Webtrends) {
			Webtrends.multiTrack({
				"argsa": arguments,
				delayTime: 100
			})
		}
	};
	_wt.prototype.setMobile = function(mobile) {
		var thismobile = mobile || "";
		if(thismobile) {
			if(is_mobile(thismobile)) {
				thismobile = encode_mobile(thismobile);
				setWTCookie(thismobile);
				window.Webtrends.dcss.dcsobj_0.WT.mobile = thismobile
			} else {
				if(thismobile.length > 11 && is_mobile(thismobile.slice(-11))) {
					thismobile = thismobile.slice(-11);
					thismobile = encode_mobile(thismobile);
					setWTCookie(thismobile);
					window.Webtrends.dcss.dcsobj_0.WT.mobile = thismobile
				} else {
					thismobile = ""
				}
			}
		}
		if(window.Webtrends) {
			return thismobile
		} else {
			return ""
		}
	};
	_tag = new _wt()
}
window.webtrendsAsyncInit = function() {
	var dcs = new Webtrends.dcs().init({
		domain: config.domain,
		dcsid: config.dcsid,
		fpcdom: config.fpc,
		fpc: "WT_FPC",
		timezone: 8,
		i18n: true,
		dcsdelay: 500,
		plugins: {}
	});
	dcs.WT.branch = config.branch;
	setTimeout(function() {
		dcs.track()
	}, 500)
};

function is_mobile(mobile) {
	var reg = /^(\+[0-9]{2,}-?)?1(3[0-9]|5[0-35-9]|8[0-9]|4[57]|7[678])[0-9]{8}$/;
	return reg.test(mobile)
}

function get_a_random() {
	var a = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
	return String(a[parseInt(Math.random() * (15 + 1), 10)])
}

function pre_fix_integer(num, n) {
	return(Array(n).join(0) + num).slice(-n)
}

function encode_mobile(mobile) {
	if(is_mobile(mobile)) {
		var key = "abcdef";
		var mobile = String(mobile);
		mobile = mobile.substring(0, 2) + get_a_random() + get_a_random() + mobile.substring(2, 5) + get_a_random() + get_a_random() + mobile.substring(5, 8) + get_a_random() + mobile.substring(8, 11);
		var m1 = String(parseInt("0x" + String(mobile.substring(0, 4))) ^ key);
		var m2 = String(parseInt("0x" + String(mobile.substring(4, 8))) ^ key);
		var m3 = String(parseInt("0x" + String(mobile.substring(8, 12))) ^ key);
		var m4 = String(parseInt("0x" + String(mobile.substring(12, 16))) ^ key);
		return m3 + "-" + m4 + "-" + m1 + "-" + m2
	} else {
		return mobile
	}
}

function decode_mobile(str) {
	var key = "abcdef";
	str = str.split("-");
	var m3 = pre_fix_integer(Number(str[0] ^ key).toString(16), 4);
	var m4 = pre_fix_integer(Number(str[1] ^ key).toString(16), 4);
	var m1 = pre_fix_integer(Number(str[2] ^ key).toString(16), 4);
	var m2 = pre_fix_integer(Number(str[3] ^ key).toString(16), 4);
	var m5 = m1 + m2 + m3 + m4;
	return m5.substring(0, 2) + m5.substring(4, 7) + m5.substring(9, 12) + m5.substring(13, 17)
}

function Trim_udbac_shaggy(str) {
	if(str == "" || str == undefined) {
		return ""
	}
	var result = str.replace(/\s+/g, "");
	return result
}

function getSrc(src) {
	if(src) {
		var img_data = src.split("/");
		if(img_data.length > 0) {
			var img_list = img_data[img_data.length - 2] + "_" + img_data[img_data.length - 1].split(".")[0];
			return img_list
		}
	}
}

function splitPath(href) {
	var now_url = "",
		path_url = "",
		path_event = "",
		true_url;
	if(href) {
		now_url = href
	} else {
		now_url = window.location.href
	}
	if(now_url.indexOf("redirect_uri") != -1) {
		true_url = now_url.split("?")[1];
		var false_url_a = true_url.split("&");
		for(var j = 0; j < false_url_a.length; j++) {
			if(false_url_a[j].indexOf("redirect_uri") != -1) {
				var re_url = unescape(false_url_a[j].replace("redirect_uri=", ""));
				path_url = re_url.split("?")[0]
			}
		}
	} else {
		path_url = now_url.split("?")[0]
	}
	if(path_url) {
		var path_data = path_url.split("/");
		if(path_data) {
			path_event = (path_data.length > 0 ? path_data[path_data.length - 1] : "") + "_" + (path_data.length > 1 ? path_data[path_data.length - 2] : "");
			return path_event || ""
		}
	}
}

function getCookie(objName) {
	var arrStr = document.cookie.split("; ");
	for(var i = 0; i < arrStr.length; i++) {
		var temp = arrStr[i].split("=");
		if(temp[0] == objName) {
			return decodeURI(temp[1])
		}
	}
}

function getMobile() {
	var mobile = "";
	var metas = window.parent.document.getElementsByTagName("meta");
	for(i = 0; i < metas.length; i++) {
		if(metas[i].getAttribute("name") == "WT.mobile") {
			mobile = metas[i].getAttribute("content");
			if(mobile.length > 11 && is_mobile(mobile.slice(-11))) {
				mobile = mobile.slice(-11)
			}
			if(is_mobile(mobile)) {
				mobile = encode_mobile(mobile)
			} else {
				mobile = ""
			}
			metas[i].setAttribute("content", mobile)
		}
	}
	if(mobile) {
		if(is_mobile(mobile)) {
			setWTCookie(encode_mobile(mobile))
		} else {
			setWTCookie(mobile)
		}
	} else {
		mobile = document.cookie.replace(/(?:(?:^|.*;\s*)mobile\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		if(mobile) {
			if(is_mobile(mobile)) {
				mobile = encode_mobile(mobile)
			} else {
				mobile = mobile
			}
		}
	}
	if(window.Webtrends.dcss.dcsobj_0) {
		window.Webtrends.dcss.dcsobj_0.WT.mobile = mobile
	}
	return mobile
}

function setWTCookie(mobile) {
	var exp = new Date();
	exp.setTime(exp.getTime() + 365 * 60 * 24 * 60 * 1000);
	document.cookie = "mobile=" + mobile + ";path=/;domain=" + window.location.host.split(":")[0] + ";expires=" + exp.toGMTString()
}

function mobileToFlag(argMobile) {
	var mobile = getMobile();
	if(!mobile) {
		mobile = localStorage.getItem("_userPhone_")
	}
	if(mobile) {
		if(is_mobile(mobile)) {
			if(config.mobileFlag) {
				mobile = encode_mobile(mobile)
			}
		} else {
			if(is_mobile(decode_mobile(mobile))) {
				if(!config.mobileFlag) {
					mobile = decode_mobile(mobile)
				}
			} else {
				mobile = ""
			}
		}
	}
	if(!mobile) {
		if(argMobile) {
			if(is_mobile(argMobile)) {
				if(config.mobileFlag) {
					mobile = encode_mobile(argMobile)
				}
			} else {
				if(is_mobile(decode_mobile(argMobile))) {
					if(!config.mobileFlag) {
						mobile = decode_mobile(argMobile)
					} else {
						mobile = argMobile
					}
				} else {
					mobile = ""
				}
			}
		} else {
			mobile = ""
		}
	}
	return mobile
};
var n = void 0;
(function(i, j, k, l) {
	function m(a) {
		if(a) {
			if(!a.forEach) a.forEach = function(a, c) {
				for(var e = c || window, d = 0, g = this.length; d < g; ++d) a.call(e, this[d], d, this)
			};
			if(!a.filter) a.filter = function(a, c) {
				for(var e = c || window, d = [], g = 0, h = this.length; g < h; ++g) a.call(e, this[g], g, this) && d.push(this[g]);
				return d
			};
			if(!a.indexOf) a.indexOf = function(a) {
				for(var c = 0; c < this.length; ++c)
					if(this[c] === a) return c;
				return -1
			}
		}
		return a
	}
	if(!i.Ba || !i.Ba.zb) {
		var d = {
				zb: !0,
				e: {},
				plugins: {},
				hb: 0,
				f: {},
				addEventListener: i.addEventListener ? function(a, b, c) {
					a.addEventListener && a.addEventListener(b, c, !1)
				} : function(a, b, c) {
					a.attachEvent && a.attachEvent("on" + b, c, !1)
				},
				h: {},
				version: "10.12.3.1",
				i: {},
				pb: !1,
				t: 500,
				$: function() {
					if(/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(k.userAgent) != null) d.da = parseFloat(RegExp.$1);
					if(l.search) d.i = d.pa(l.search);
					if(i.webtrendsAsyncInit && !i.webtrendsAsyncInit.hasRun) i.webtrendsAsyncInit(), i.webtrendsAsyncInit.hasRun = !0;
					d.addEventListener(i, "load", function() {
						d.pb = !0
					})
				},
				g: function(a) {
					return Object.prototype.toString.call(a) === "[object Function]"
				},
				qb: function(a) {
					var b = [],
						c;
					for(c in a) a.hasOwnProperty(c) && a[c] != "" && a[c] != n && typeof a[c] != "function" && b.push({
						k: c,
						v: a[c]
					});
					return b
				},
				extend: function(a, b, c) {
					for(var e in b)
						if(c || typeof a[e] === "undefined") a[e] = b[e];
					return a
				},
				find: function(a) {
					if(!d.wa) d.wa = d.nb();
					return d.wa(a)
				},
				nb: function() {
					var a = /MSIE (\d+)/.exec(k.userAgent),
						a = a ? a[1] : 99;
					if(j.querySelectorAll && j.body && a > 8) {
						var b = j.body;
						return function(a) {
							return b.querySelectorAll(a)
						}
					}
					if(i.jQuery) return i.jQuery.find;
					if(i.Sizzle) return i.Sizzle;
					if(i.YAHOO && YAHOO.za && YAHOO.za.Aa) return YAHOO.za.Aa.Nb;
					if("qwery" in i) return qwery;
					i.YUI && YUI().Pb("node", function(a) {
						return a.all
					});
					return j.querySelectorAll ? (b = j.body) ? function(a) {
						return b.querySelectorAll(a)
					} : function() {
						return []
					} : function() {
						return []
					}
				},
				pa: function(a) {
					var a = a.split(/[&?]/g),
						b = {};
					try {
						for(var c = 0, e = a.length; c < e; ++c) {
							var d = a[c].match(/^([^=]+)(?:=([\s\S]*))?/);
							if(d && d[1]) {
								var g = "";
								try {
									g = decodeURIComponent(d[1])
								} catch(h) {
									try {
										g = unescape(d[1])
									} catch(j) {
										g = d[1]
									}
								}
								var i = "";
								try {
									i = decodeURIComponent(d[2])
								} catch(k) {
									try {
										i = unescape(d[2])
									} catch(l) {
										i = d[2]
									}
								}
								b[g] ? (b[g] = [b[g]], b[g].push(i)) : b[g] = i
							}
						}
					} catch(m) {}
					return b
				},
				aa: function(a, b, c) {
					arguments.length < 2 && (b = !0);
					var e = j.createElement("script");
					e.type = "text/javascript";
					e.async = b;
					e.src = a;
					var d = j.getElementsByTagName("script")[0];
					d.parentNode.insertBefore(e, d)
				},
				V: function(a, b) {
					var c = a.target || a.srcElement;
					if(typeof b == "string") {
						var e = b,
							b = {};
						b[e.toUpperCase()] = 1
					}
					for(; c && c.tagName && !b[c.tagName.toUpperCase()];) c = c.parentElement || c.parentNode;
					return c
				},
				fa: function(a) {
					return typeof encodeURIComponent == "function" ? encodeURIComponent(a) : escape(a)
				},
				sa: function(a) {
					var o = a;
					if(typeof(arguments[0]) == "string") {
						o = {
							'argsa': Array.prototype.slice.call(arguments)
						}
					}
					for(var b in d.e) d.e[b].ha(o);
					return !1
				},
				Q: function(a, b, c) {
					b || (b = "collect");
					c ? d.D("transform." + b, a, c) : d.D("transform." + b, a);
					return this
				},
				D: function(a, b, c) {
					function e(b, c) {
						d.h[a][b.n] || (d.h[a][b.n] = m([]));
						d.h[a][b.n].push(c)
					}
					if(a && b && a != "" && d.g(b)) {
						a === "wtmouseup" && (a = "wtmouse");
						if(a === "wtmouse" && !d.ta) {
							var f = /MSIE (\d+)/.exec(k.userAgent);
							d.addEventListener(j, (f ? f[1] : 99) >= 8 ? "mousedown" : "mouseup", function(b) {
								if(!b) b = window.event;
								d.Pa(a, {
									event: b
								})
							});
							d.ta = !0
						}
						d.h[a] || (d.h[a] = {});
						if(c) e(c, b);
						else
							for(var g in d.e) e(d.e[g], b)
					}
				},
				Pa: function(a, b) {
					for(var c in d.e) d.fireEvent(a, d.e[c], b)
				},
				Ca: function(a, b, c, e) {
					if(typeof b === "function") return b.onetime ? (c.push(b), !0) : (b(a, e), !1)
				},
				fireEvent: function(a, b, c) {
					var e = m([]);
					if(d.h[a] && d.h[a][b.n]) {
						a = d.h[a][b.n];
						if(!a.length) return;
						for(var f = a.length - 1; f >= 0; f--) d.Ca(b, a[f], e, c) && a.pop()
					}
					e.forEach(function(a) {
						a(b, c)
					})
				},
				ca: function(a, b) {
					var c = !1,
						e;
					for(e in d.e) {
						var f = d.e[e];
						a in f.plugins && (c = !0, f.ca(a, b))
					}
					c || b({
						Mb: !0
					})
				},
				T: function(a, b) {
					for(var c = j.cookie.split("; "), e = [], d = 0, g = 0, h = a.length, p = c.length, g = 0; g < p; g++) {
						var i = c[g];
						i.substring(0, h + 1) == a + "=" && (e[d++] = i)
					}
					c = e.length;
					if(c > 0) {
						d = 0;
						if(c > 1 && a == b) {
							p = new Date(0);
							for(g = 0; g < c; g++) i = new Date(parseInt(this.Wa(e[g], "lv"))), i > p && (p.setTime(i.getTime()), d = g)
						}
						return unescape(e[d].substring(h + 1))
					} else return null
				},
				Wa: function(a, b, c) {
					a = a.split(c || ":");
					for(c = 0; c < a.length; c++) {
						var e = a[c].split("=");
						if(b == e[0]) return e[1]
					}
					return null
				}
			},
			q = d.fireEvent,
			r = d.D;
		d.b = function() {
			this.na = i.RegExp ? /dcs(uri)|(ref)|(aut)|(met)|(sta)|(sip)|(pro)|(byt)|(dat)|(p3p)|(cfg)|(redirect)|(cip)/i : "";
			this.va = {};
			this.plugins = this.plugins = {};
			this.d = this.WT = {};
			this.j = this.DCS = {};
			this.q = this.DCSext = {};
			this.n = this.dcssID = "dcsobj_" + d.hb++;
			this.images = this.images = [];
			this.ma = this.errors = [];
			this.a = this.FPCConfig = {};
			this.c = this.TPCConfig = {};
			this.images = [];
			this.w = [];
			this.Eb = [];
			this.l = [];
			this.N = [];
			this.P = "";
			this.ba = this.p = 0;
			this.X = this.oa = "";
			this.ta = !1;
			return this
		};
		d.b.prototype = {
			$: function(a) {
				function b(b, c) {
					return a.hasOwnProperty(b) ? a[b] : c
				}

				function c(a, b, c) {
					return !a ? c : a.hasOwnProperty(b) ? a[b] : c
				}
				this.Gb = a;
				this.I = b("errorlogger", function() {});
				this.gb = this.dcsid = a.dcsid;
				this.L = this.queue = b("queue", []);
				this.domain = this.domain = b("domain", "statse.webtrendslive.com");
				this.Bb = this.timezone = b("timezone", -8);
				this.enabled = this.enabled = b("enabled", !0);
				this.Z = this.i18n = b("i18n", !0);
				this.va = i.RegExp ? this.Z ? {
					"%25": /\%/g,
					"%26": /\&/g,
					"%23": /\#/g
				} : {
					"%09": /\t/g,
					"%20": / /g,
					"%23": /\#/g,
					"%26": /\&/g,
					"%2B": /\+/g,
					"%3F": /\?/g,
					"%5C": /\\/g,
					"%22": /\"/g,
					"%7F": /\x7F/g,
					"%A0": /\xA0/g
				} : "";
				if(a.metanames) this.ra = m(a.metanames.toLowerCase().split(","));
				i.webtrendsAsyncLoad && typeof i.webtrendsAsyncLoad === "function" && !b("privateFlag", !1) && d.D("onready", window.webtrendsAsyncLoad, this);
				this.M = this.vtid = b("vtid", n);
				this.ua = b("paidsearchparams", "gclid");
				this.yb = this.splitvalue = b("splitvalue", "");
				d.t = a.dcsdelay || d.t;
				this.ib = this.delayAll = b("delayAll", !1);
				this.K = this.preserve = b("preserve", !0);
				this.w = m(b("navigationtag", "div,table").toLowerCase().split(","));
				this.l = b("onsitedoms", "");
				if(!d.g(this.l.test)) this.l = m(this.l.toLowerCase().split(",")), this.l.forEach(function(a, b, c) {
					c[b] = a.replace(/^\s*/, "").replace(/\s*$/, "")
				});
				this.N = m(b("downloadtypes", "xls,doc,pdf,txt,csv,zip,docx,xlsx,rar,gzip").toLowerCase().split(","));
				this.N.forEach(function(a, b, c) {
					c[b] = a.replace(/^\s*/, "").replace(/\s*$/, "")
				});
				if(b("adimpressions", !1)) this.P = b("adsparam", "WT.ac");
				this.a.enabled = this.FPCConfig.enabled = c(a.FPCConfig, "enabled", !0);
				this.a.domain = this.FPCConfig.domain = c(a.FPCConfig, "domain", b("fpcdom", ""));
				this.a.name = this.FPCConfig.name = c(a.FPCConfig, "name", b("fpc", "WT_FPC"));
				this.a.u = this.FPCConfig.expiry = c(a.FPCConfig, "expires", b("cookieexpires", 63113851500));
				this.a.u = this.a.u < 63113851500 ? this.a.u : 63113851500;
				this.a.kb = new Date(this.getTime() + this.a.u);
				this.a.wb = this.a.u === 0;
				this.c.enabled = this.TPCConfig.enabled = c(a.TPCConfig, "enabled", !b("disablecookie", !1));
				this.c.R = this.TPCConfig.cfgType = c(a.TPCConfig, "cfgType", !this.c.enabled ? "1" : "");
				if(a.cookieTypes)
					if(a.cookieTypes.toLowerCase() === "none") this.a.enabled = !1, this.c.enabled = !1, this.c.R = "1";
					else if(a.cookieTypes.toLowerCase() === "firstpartyonly") this.a.enabled = !0, this.c.enabled = !1, this.c.R = "1";
				else if(a.cookieTypes.toLowerCase() === "all") this.a.enabled = !0, this.c.enabled = !0, this.c.R = c(a.TPCConfig, "cfgType", "");
				this.Jb = this.fpc = this.a.name;
				this.Kb = this.fpcdom = this.a.domain;
				this.Ib = this.cookieExp = this.a.u;
				m(b("pageEvents", [])).forEach(function(b) {
					this.Db = a[b.toLowerCase()] = !0
				});
				b("offsite", !1) && this.Ma();
				b("download", !1) && this.Ka();
				b("anchor", !1) && this.Ja();
				b("javascript", !1) && this.La();
				b("rightclick", !1) && this.Na();
				b("privateFlag", !1) || (d.e[this.n] = this);
				this.plugins = a.plugins || {};
				this.Fa();
				d.f[this.domain] || (d.f[this.domain] = "");
				!b("privateFlag", !1) && this.a.enabled && this.Ya(this.n);
				this.F();
				return this
			},
			Fa: function() {
				for(var a in this.plugins) {
					var b = this.plugins[a];
					if(!d.plugins[a]) {
						d.plugins[a] = b;
						var c = b.src;
						d.g(c) ? i.setTimeout(function(a) {
							return function() {
								a()
							}
						}(c), 1) : d.aa(c, !1)
					}
					if(!b.async) {
						var e = this;
						b.loaded = !1;
						this.p++;
						b.Qb && this.ba++;
						b.timeout && i.setTimeout(function(a) {
							return function() {
								if(!a.loaded) a.Ab = !0, e.p--, e.F()
							}
						}(b), b.timeout)
					}
				}
			},
			Za: function(a) {
				if(typeof a != "undefined") !d.f[this.domain] && a.gTempWtId && (d.f[this.domain] = a.gTempWtId), this.X = a.gTempWtId, !d.f[this.domain] && a.gWtId && (d.f[this.domain] = a.gWtId), this.oa = a.gWtAccountRollup;
				this.p--;
				this.F()
			},
			Ya: function(a) {
				return j.cookie.indexOf(this.a.name + "=") == -1 && j.cookie.indexOf("WTLOPTOUT=") == -1 && this.c.enabled ? !1 : !0
			},
			ca: function(a, b) {
				var c = this.plugins[a];
				if(c) d.g(b) && (this.tb() ? b(this, c) : r("pluginsLoaded", function(a, b, c) {
					function d() {
						a(b, c)
					}
					d.onetime = !0;
					return d
				}(b, this, c), this)), c.loaded = !0, !c.async && !c.Ab && this.p--;
				this.F()
			},
			vb: function() {
				this.ba--;
				this.F()
			},
			tb: function() {
				return this.p <= 0
			},
			F: function() {
				if(this.p <= 0) {
					if(!this.Ea) q("pluginsLoaded", this), this.Ea = !0;
					this.ba <= 0 && this.xb()
				}
			},
			xb: function() {
				if(!this.Ga) q("onready", this), this.ob(), this.ub(), this.Ga = !0
			},
			ob: function() {
				for(var a = 0; a < this.L.length; a++) this.ka(this.L[a]);
				this.L = []
			},
			ub: function() {
				var a = this;
				this.L.push = function(b) {
					a.ka(b)
				}
			},
			Q: function(a, b) {
				d.Q(a, b, this)
			},
			r: function(a, b) {
				var c = this,
					e = d.extend({
						domEvent: "click",
						callback: n,
						argsa: [],
						args: {},
						delayTime: n,
						transform: n,
						filter: n,
						actionElems: {
							A: 1,
							INPUT: 1,
							BUTTON: 1
						},
						finish: n
					}, b, !0);
				r("wtmouse", function(b, g) {
					c.Oa(c, a, d.extend(g, e, !0))
				}, c);
				return this
			},
			xa: function(a, b, c, e) {
				b.element = c;
				if(e === "form" || e === "input" || e === "button") b.domEvent = "submit";
				a.ea(b)
			},
			Oa: function(a, b, c) {
				var e = d.find;
				if(e && c.event && c.actionElems) {
					var f = d.V(c.event, c.actionElems),
						g = f.tagName ? f.tagName.toLowerCase() : "";
					if(b.toUpperCase() in c.actionElems && b.toUpperCase() === g.toUpperCase()) return this.xa(a, c, f, g);
					if((b = e(b)) && f && b && b.length)
						for(e = 0; e < b.length; e++)
							if(b[e] === f) {
								this.xa(a, c, f, g);
								break
							}
				}
			},
			W: function(a, b) {
				var c = m(j.cookie.split("; ")).filter(function(b) {
					return b.indexOf(a + "=") != -1
				})[0];
				if(!c || c.length < a.length + 1) return !1;
				m(c.split(a + "=")[1].split(":")).forEach(function(a) {
					a = a.split("=");
					b[a[0]] = a[1]
				});
				return !0
			},
			T: function(a) {
				return d.T(a, this.a.name)
			},
			cb: function(a, b, c) {
				var e = [],
					b = d.qb(b);
				m(b).forEach(function(a) {
					e.push(a.k + "=" + a.v)
				});
				e = e.sort().join(":");
				j.cookie = a + "=" + e + c
			},
			Ta: function(a, b, c) {
				a += "=";
				a += "; expires=expires=Thu, 01 Jan 1970 00:00:01 GMT";
				a += "; path=" + b;
				a += c ? ";domain=" + c : "";
				document.cookie = a
			},
			$a: function(a, b, c, d) {
				var f = {};
				return this.W(a, f) ? b == f.id && c == f.lv && d == f.ss ? 0 : 3 : 2
			},
			Xa: function() {
				var a = {};
				this.W(this.a.name, a);
				return a
			},
			Va: function() {
				if(j.cookie.indexOf("WTLOPTOUT=") == -1)
					if(this.d.ce = !this.a.enabled && !this.c.enabled ? "0" : this.a.enabled && !this.c.enabled ? "1" : "2", this.a.enabled) {
						var a = this.d,
							b = this.a.name,
							c = new Date,
							e = c.getTimezoneOffset() * 6E4 + this.Bb * 36E5;
						c.setTime(c.getTime() + e);
						var f = new Date(c.getTime());
						a.co_f = a.vtid = a.vtvs = a.vt_f = a.vt_f_a = a.vt_f_s = a.vt_f_d = a.vt_f_tlh = a.vt_f_tlv = "";
						var g = {};
						if(this.W(b, g)) {
							var h = g.id,
								p = parseInt(g.lv),
								i = parseInt(g.ss);
							if(h == null || h == "null" || isNaN(p) || isNaN(i)) return;
							a.co_f = h;
							h = new Date(p);
							a.vt_f_tlh = Math.floor((h.getTime() - e) / 1E3);
							f.setTime(i);
							if(c.getTime() > h.getTime() + 18E5 || c.getTime() > f.getTime() + 288E5) a.vt_f_tlv = Math.floor((f.getTime() - e) / 1E3), f.setTime(c.getTime()), a.vt_f_s = "1";
							if(c.getDate() != h.getDate() || c.getMonth() != h.getMonth() || c.getFullYear() != h.getFullYear()) a.vt_f_d = "1"
						} else {
							if(this.X.length) a.co_f = d.f[this.domain].length ? d.f[this.domain] : this.X, a.vt_f = "1";
							else if(d.f[this.domain].length) a.co_f = d.f[this.domain];
							else {
								a.co_f = "2";
								i = c.getTime().toString();
								for(h = 2; h <= 32 - i.length; h++) a.co_f += Math.floor(Math.random() * 16).toString(16);
								a.co_f += i;
								a.vt_f = "1"
							}
							this.oa.length == 0 && (a.vt_f_a = "1");
							a.vt_f_s = a.vt_f_d = "1";
							a.vt_f_tlh = a.vt_f_tlv = "0"
						}
						a.co_f = escape(a.co_f);
						a.vtid = typeof this.M == "undefined" ? a.co_f : this.M || "";
						a.vtvs = (f.getTime() - e).toString();
						e = (this.a.wb ? "" : "; expires=" + this.a.kb.toGMTString()) + "; path=/" + (this.a.domain != "" ? "; domain=" + this.a.domain : "");
						c = c.getTime().toString();
						f = f.getTime().toString();
						g.id = a.co_f;
						g.lv = c;
						g.ss = f;
						this.cb(b, g, e);
						b = this.$a(b, a.co_f, c, f);
						var thisCookie = document.cookie;
						var thisCookieArr = thisCookie.split(";");
						var currentId = "";
						var currentTime = "";
						for(var i = 0; i < thisCookieArr.length; i++) {
							if(thisCookieArr[i].indexOf("WT_FPC=") > -1) {
								if(currentTime) {
									if(Number(currentTime) < Number(thisCookieArr[i].split(":")[1].split("=")[1])) {
										currentTime = thisCookieArr[i].split(":")[1].split("=")[1];
										currentId = thisCookieArr[i].split(":")[0].split("id=")[1]
									}
								} else {
									currentTime = thisCookieArr[i].split(":")[1].split("=")[1];
									currentId = thisCookieArr[i].split(":")[0].split("id=")[1]
								}
							}
						}
						if(b != 0) {
							a.co_f = currentId;
							a.vtvs = a.vt_f_s = a.vt_f_d = a.vt_f_tlh = a.vt_f_tlv = "", typeof this.M == "undefined" && (a.vtid = ""), a.vt_f = a.vt_f_a = b
						};
					} else this.d.vtid = this.M ? this.M : "", this.Ta(this.a.name, "/", this.a.domain)
			},
			Cb: function() {
				try {
					var a;
					arguments && arguments.length > 1 ? a = {
						argsa: Array.prototype.slice.call(arguments)
					} : arguments.length === 1 && (a = arguments[0]);
					typeof a === "undefined" && (a = {
						element: n,
						event: n,
						Fb: []
					});
					typeof a.argsa === "undefined" && (a.argsa = []);
					this.la("collect", a);
					return this
				} catch(b) {
					this.ma.push(b), this.I(b)
				}
			},
			ha: function(a) {
				a && a.length > 1 && (a = {
					argsa: Array.prototype.slice.call(arguments)
				});
				this.ea(a)
			},
			ea: function(a) {
				try {
					typeof a === "undefined" && (a = {});
					this.la("multitrack", a);
					if(a.delayTime) {
						var b = Number(a.delayTime);
						this.ya(isNaN(b) ? d.t : b)
					} else this.ib && this.ya(d.t);
					return !1
				} catch(c) {
					this.ma.push(c), this.I(c)
				}
			},
			Ra: function() {
				this.j = {};
				this.d = {};
				this.q = {};
				arguments.length % 2 == 0 && this.U(arguments)
			},
			U: function(a) {
				if(a)
					for(var b = 0, c = a.length; b < c; b += 2) a[b].indexOf("WT.") == 0 ? this.d[a[b].substring(3)] = a[b + 1] : a[b].indexOf("DCS.") == 0 ? this.j[a[b].substring(4)] = a[b + 1] : a[b].indexOf("DCSext.") == 0 && (this.q[a[b].substring(7)] = a[b + 1])
			},
			eb: function(a) {
				var b, c;
				if(this.K) {
					this.C = [];
					for(var d = 0, f = a.length; d < f; d += 2) c = a[d], c.indexOf("WT.") == 0 ? (b = c.substring(3), this.C.push(c, this.d[b] || "")) : c.indexOf("DCS.") == 0 ? (b = c.substring(4), this.C.push(c, this.j[b] || "")) : c.indexOf("DCSext.") == 0 && (b = c.substring(7), this.C.push(c, this.q[b] || ""))
				}
			},
			bb: function() {
				if(this.K) this.U(this.C), this.C = []
			},
			fb: function() {
				var a = new Date,
					b = this,
					c = this.d,
					e = this.j;
				c.tz = parseInt(a.getTimezoneOffset() / 60 * -1) || "0";
				c.bh = a.getHours() || "0";
				c.ul = k.language || k.userLanguage;
				if(typeof screen == "object") c.cd = k.appName == "Netscape" ? screen.pixelDepth : screen.colorDepth, c.sr = screen.width + "x" + screen.height;
				typeof k.javaEnabled() == "boolean" && (c.jo = k.javaEnabled() ? "Yes" : "No");
				j.title && (c.ti = i.RegExp ? j.title.replace(RegExp("^" + l.protocol + "//" + l.hostname + "\\s-\\s"), "") : j.title);
				c.js = "Yes";
				c.jv = function() {
					var a = navigator.userAgent.toLowerCase(),
						b = parseInt(navigator.appVersion),
						c = a.indexOf("mac") != -1,
						d = a.indexOf("firefox") != -1,
						e = a.indexOf("firefox/0.") != -1,
						f = a.indexOf("firefox/1.0") != -1,
						g = a.indexOf("firefox/1.5") != -1,
						h = a.indexOf("firefox/2.0") != -1,
						j = !d && a.indexOf("mozilla") != -1 && a.indexOf("compatible") == -1,
						i = a.indexOf("msie") != -1 && a.indexOf("opera") == -1,
						k = i && b == 4 && a.indexOf("msie 4") != -1,
						i = i && !k,
						l = a.indexOf("opera 5") != -1 || a.indexOf("opera/5") != -1,
						m = a.indexOf("opera 6") != -1 || a.indexOf("opera/6") != -1,
						a = a.indexOf("opera") != -1 && !l && !m,
						o = "1.1";
					d && !e && !f & !g & !h ? o = "1.8" : h ? o = "1.7" : g ? o = "1.6" : e || f || j && b >= 5 || a ? o = "1.5" : c && i || m ? o = "1.4" : i || j && b == 4 || l ? o = "1.3" : k && (o = "1.2");
					return o
				}();
				c.ct = "unknown";
				if(j.body && j.body.addBehavior) try {
					j.body.addBehavior("#default#clientCaps"), c.ct = j.body.Hb || "unknown", j.body.addBehavior("#default#homePage"), c.hp = j.body.Lb(location.href) ? "1" : "0"
				} catch(f) {
					b.I(f)
				}
				var g = 0,
					h = 0;
				if(typeof i.innerWidth == "number") g = i.innerWidth, h = i.innerHeight;
				else if(j.documentElement && (j.documentElement.clientWidth || j.documentElement.clientHeight)) g = j.documentElement.clientWidth, h = j.documentElement.clientHeight;
				else if(j.body && (j.body.clientWidth || j.body.clientHeight)) g = j.body.clientWidth, h = j.body.clientHeight;
				c.bs = g + "x" + h;
				c.fv = function() {
					var a;
					if(i.ActiveXObject)
						for(a = 15; a > 0; a--) try {
							return new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + a), a + ".0"
						} catch(c) {
							b.I(c)
						} else if(k.plugins && k.plugins.length)
							for(a = 0; a < k.plugins.length; a++)
								if(k.plugins[a].name.indexOf("Shockwave Flash") != -1) return k.plugins[a].description.split(" ")[2];
					return "Not enabled"
				}();
				c.slv = function() {
					var a = "Not enabled";
					try {
						k.userAgent.indexOf("MSIE") != -1 ? new ActiveXObject("AgControl.AgControl") && (a = "Unknown") : k.plugins["Silverlight Plug-In"] && (a = "Unknown")
					} catch(c) {
						b.I(c)
					}
					if(a != "Not enabled") {
						var d, e, f;
						if(typeof Silverlight == "object" && typeof Silverlight.qa == "function") {
							for(d = 9; d > 0; d--) {
								e = d;
								if(Silverlight.qa(e + ".0")) break;
								if(a == e) break
							}
							for(d = 9; d >= 0; d--) {
								f = e + "." + d;
								if(Silverlight.qa(f)) {
									a = f;
									break
								}
								if(a == f) break
							}
						}
					}
					return a
				}();
				this.Z && (c.le = typeof j.defaultCharset == "string" ? j.defaultCharset : typeof j.characterSet == "string" ? j.characterSet : "unknown");
				c.tv = d.version;
				c.sp = this.yb;
				c.dl = "0";
				if(d.i && d.i.lb) c.fb_ref = d.i.lb;
				if(d.i && d.i.mb) c.fb_source = d.i.mb;
				c.ssl = l.protocol.indexOf("https:") == 0 ? "1" : "0";
				e.dcsdat = a.getTime();
				e.dcssip = l.hostname;
				e.dcsuri = l.pathname;
				c.es = l.href;
				if(l.search) e.dcsqry = (l.search);
				if(e.dcsqry) {
					a = e.dcsqry.toLowerCase();
					g = this.ua.length ? this.ua.toLowerCase().split(",") : [];
					for(h = 0; h < g.length; h++)
						if(a.indexOf(g[h] + "=") != -1) {
							c.srch = "1";
							break
						}
				}
				if(j.referrer != "" && j.referrer != "-" && !(k.appName == "Microsoft Internet Explorer" && parseInt(k.appVersion) < 4)) e.dcsref = j.referrer;
				e.dcscfg = this.c.R
			},
			Ua: function(a, b) {
				if(b != "") {
					if(a === null || a === n) return "";
					var a = a.toString(),
						c;
					for(c in b) b[c] instanceof RegExp && (a = a.replace(b[c], c));
					return a
				} else return escape(a)
			},
			S: function(a, b) {
				if(this.Z && this.na != "" && !this.na.test(a))
					if(a == "dcsqry") {
						for(var c = "", e = b.substring(1).split("&"), f = 0; f < e.length; f++) {
							var g = e[f],
								h = g.indexOf("=");
							if(h != -1) {
								var i = g.substring(0, h),
									g = g.substring(h + 1);
								f != 0 && (c += "&");
								c += i + "=" + d.fa(g)
							}
						}
						b = b.substring(0, 1) + c
					} else b = d.fa(b);
				return "&" + a + "=" + this.Ua(b, this.va)
			},
			Sa: function(a, b) {
				if(j.images) {
					var c = new Image;
					this.images.push(c);
					if(true) {
						var e = !1;
						if(d.g(b.callback)) f = b.callback;
						else f = function(a, b) {};
						g = this;
						c.onload = function() {
							if(!e) return e = !0, f(g, b), !0
						};
						i.setTimeout(function() {
							if(!e) {
								c.removeAttribute("src");
								return e = !0, f(g, b), !0
							}
						}, d.t)
					}
					c.src = a
				}
			},
			ab: function() {
				var a;
				j.documentElement ? a = j.getElementsByTagName("meta") : j.all && (a = j.all.Ob("meta"));
				if(typeof a != "undefined")
					for(var b = a.length, c = 0; c < b; c++) {
						var d = a.item(c).name,
							f = a.item(c).content;
						a.item(c);
						d.length > 0 && (d = d.toLowerCase(), d.toUpperCase().indexOf("WT.") == 0 ? this.d[d.substring(3)] = f : d.toUpperCase().indexOf("DCSEXT.") == 0 ? this.q[d.substring(7)] = f : d.toUpperCase().indexOf("DCS.") == 0 ? this.j[d.substring(4)] = f : this.ra && this.ra.indexOf(d) != -1 && (this.q["meta_" + d] = f))
					}
			},
			ia: function(a) {
				if(j.cookie.indexOf("WTLOPTOUT=") == -1) {
					var b = this.d,
						c = this.j,
						e = this.q,
						f = this.i18n;
					if(config.sdc_server != n && config.sdc_server instanceof Array) {
						for(var i = 0; i < config.sdc_server.length; i++) {
							if(typeof config.sdc_server[i] === "function" && this.d != n && this.j != n) {
								var wx = config.sdc_server[i](this.d, this.j);
								if(wx != n) {
									var domain = wx[0] || this.domain,
										dcsid = wx[1] || this.dcsid,
										b = wx[2] || this.d;
									c = wx[3] || this.j;
									e = this.q;
									f = this.i18n;
									if(domain != n && dcsid != n) {
										g = "http" + (l.protocol.indexOf("https:") == 0 ? "s" : "") + "://" + domain + (dcsid == "" ? "" : "/" + dcsid) + "/dcs.gif?";
										f && (b.dep = "");
										for(var h in c) {
											c[h] != "" && c[h] != n && typeof c[h] != "function" && (g += this.S(h, c[h]))
										}
										for(h in b) {
											b[h] != "" && b[h] != n && typeof b[h] != "function" && (g += this.S("WT." + h, b[h]))
										}
										for(h in e) {
											if(e[h] != "" && e[h] != n && typeof e[h] != "function") {
												f && (b.dep = b.dep.length == 0 ? h : b.dep + ";" + h), g += this.S(h, e[h])
											}
										}
										f && b.dep.length > 0 && (g += this.S("WT.dep", b.dep));
										d.da && d.da < 9 && g.length > 2048 && (g = g.substring(0, 2040) + "&WT.tu=1");
										this.Sa(g, a);
										this.d.ad = ""
									}
								}
							}
						}
					}
				}
			},
			rb: function() {
				this.fb();
				this.ab();
				this.P && this.P.length > 0 && this.Qa();
				this.sb = !0
			},
			getTime: function() {
				return(new Date).getTime()
			},
			jb: 0,
			ya: function(a) {
				for(var b = this.getTime(); this.getTime() - b < a;) this.jb++
			},
			la: function(a, b) {
				a || (a = "collect");
				this.L.push({
					action: a,
					message: b
				})
			},
			ka: function(a) {
				var b = "action_" + a.action,
					c = a.message;
				this.sb || this.rb();
				c.event && !c.element && (c.element = d.V(c.event, {
					A: 1
				}));
				if(!d.g(c.filter) || !c.filter(this, c)) {
					if(c.args) {
						c.argsa = c.argsa || [];
						for(var e in c.args) c.argsa.push(e, c.args[e])
					}
					c.element && c.element.getAttribute && c.element.getAttribute("data-wtmt") && (c.argsa = c.argsa.concat(c.element.getAttribute("data-wtmt").split(",")));
					q("transform." + a.action, this, c);
					q("transform.all", this, c);
					c.transform && d.g(c.transform) && c.transform(this, c);
					if(this.enabled) {
						this.Va();
						if(d.g(this[b])) this[b](c);
						q("finish." + a.action, this, c);
						q("finish.all", this, c);
						c.finish && d.g(c.finish) && c.finish(this, c)
					}
				}
			},
			Ia: function(a) {
				var b = a && a.argsa && a.argsa.length % 2 == 0;
				b && (this.eb(a.argsa), this.U(a.argsa));
				this.j.dcsdat = this.getTime();
				this.ia(a);
				b && this.bb()
			},
			Ha: function(a) {
				a && a.argsa && a.argsa.length % 2 == 0 && this.U(a.argsa);
				this.ia(a)
			},
			J: function(a) {
				var b = document.createElement("a");
				b.href = a.href;
				a = {};
				a.H = b.hostname ? b.hostname.split(":")[0] : window.location.hostname;
				a.o = b.pathname ? b.pathname.indexOf("/") != 0 ? "/" + b.pathname : b.pathname : "/";
				a.m = b.search ? b.search.substring(b.search.indexOf("?") + 1, b.search.length) : "";
				a.G = i.location;
				return a
			},
			ga: function(a, b) {
				if(a.length > 0) {
					a = a.toLowerCase();
					if(a == window.location.hostname.toLowerCase()) return !0;
					if(d.g(b.test)) return b.test(a);
					else if(b.length > 0)
						for(var c = b.length, e = 0; e < c; e++)
							if(a == b[e]) return !0
				}
				return !1
			},
			ja: function(a, b) {
				for(var c = a.toLowerCase().substring(a.lastIndexOf(".") + 1, a.length), d = b.length, f = 0; f < d; f++)
					if(c == b[f]) return !0;
				return !1
			},
			s: function(a, b) {
				var c = "",
					e = "",
					f = b.length,
					g, h;
				for(g = 0; g < f; g++)
					if(h = b[g], h.length && (e = d.V(a, h), c = e.getAttribute && e.getAttribute("id") ? e.getAttribute("id") : "", e = e.className || "", c.length || e.length)) break;
				return c.length ? c : e
			},
			Y: function(a, b, c) {
				var e = j.all ? b.innerText : b.text,
					a = d.V(a, {
						IMG: 1
					}),
					f;
				if(a && a.alt) f = a.alt;
				else if(e) f = e;
				else if(b.innerHTML) f = b.innerHTML;
				return f ? f : c
			},
			B: function() {
				if(!this.K) this.Da = this.K = !0
			},
			z: function() {
				this.Da = this.K = !1
			},
			O: function(a) {
				var b = !1;
				if(!a) a = window.event;
				a.which ? b = a.which == 3 : a.button && (b = a.button == 2);
				return b
			},
			Ma: function() {
				this.r("a", {
					filter: function(a, b) {
						var c = b.element || {},
							d = b.event || {};
						return c.hostname && !a.ga(c.hostname, a.l) && !a.O(d) ? !1 : !0
					},
					transform: function(a, b) {
						var c = b.event || {},
							d = b.element || {};
						a.B(b);
						d = a.J(d);
						b.argsa.push("DCS.dcssip", d.H, "DCS.dcsuri", d.o, "DCS.dcsqry", d.m, "DCS.dcsref", d.G, "WT.ti", "Offsite:" + d.H + d.o + (d.m.length ? "?" + d.m : ""), "WT.dl", "24", "WT.nv", a.s(c, a.w))
					},
					finish: function(a) {
						a.z()
					}
				})
			},
			Ja: function() {
				this.r("a", {
					filter: function(a, b) {
						var c = b.element || {},
							d = b.event || {};
						return a.ga(c.hostname, a.l) && c.hash && c.hash != "" && c.hash != "#" && !a.O(d) ? !1 : !0
					},
					transform: function(a, b) {
						var c = b.event || {},
							d = b.element || {};
						a.B(b);
						d = a.J(d);
						b.argsa.push("DCS.dcssip", d.H, "DCS.dcsuri", escape(d.o + b.element.hash), "DCS.dcsqry", d.m, "DCS.dcsref", d.G, "WT.ti", escape("Anchor:" + b.element.hash), "WT.nv", a.s(c, a.w), "WT.dl", "21")
					},
					finish: function(a) {
						a.z()
					}
				})
			},
			Ka: function() {
				this.r("a", {
					filter: function(a, b) {
						var c = b.event || {};
						return a.ja((b.element || {}).pathname, a.N) && !a.O(c) ? !1 : !0
					},
					transform: function(a, b) {
						var c = b.event || {},
							d = b.element || {};
						a.B(b);
						var f = a.J(d),
							d = a.Y(c, d, f.o);
						b.argsa.push("DCS.dcssip", f.H, "DCS.dcsuri", f.o, "DCS.dcsqry", f.m, "DCS.dcsref", f.G, "WT.ti", "Download:" + d, "WT.nv", a.s(c, a.w), "WT.dl", "20")
					},
					finish: function(a) {
						a.z()
					}
				})
			},
			Na: function() {
				this.r("a", {
					filter: function(a, b) {
						var c = b.event || {};
						return a.ja((b.element || {}).pathname, a.N) && a.O(c) ? !1 : !0
					},
					transform: function(a, b) {
						var c = b.event || {},
							d = b.element || {};
						a.B(b);
						var f = a.J(d),
							d = a.Y(c, d, f.o);
						b.argsa.push("DCS.dcssip", f.H, "DCS.dcsuri", f.o, "DCS.dcsqry", f.m, "DCS.dcsref", f.G, "WT.ti", "RightClick:" + d, "WT.nv", a.s(c, a.w), "WT.dl", "25")
					},
					finish: function(a) {
						a.z()
					}
				})
			},
			La: function() {
				this.r("a", {
					filter: function(a, b) {
						var c = b.element || {};
						return c.href && c.protocol && c.protocol.toLowerCase() === "javascript:" ? !1 : !0
					},
					transform: function(a, b) {
						var c = b.event || {},
							d = b.element || {};
						a.B(b);
						var f = a.J(d);
						b.argsa.push("DCS.dcssip", i.location.hostname, "DCS.dcsuri", d.href, "DCS.dcsqry", f.m, "DCS.dcsref", f.G, "WT.ti", "JavaScript:" + (d.innerHTML ? d.innerHTML : ""), "WT.dl", "22", "WT.nv", a.s(c, a.w))
					},
					finish: function(a) {
						a.z()
					}
				})
			},
			Qa: function() {
				if(j.links) {
					var a = this.P + "=",
						b = a.length,
						a = RegExp(a, "i"),
						c = j.links.length,
						d = end = -1,
						f = urlp = value = "",
						g, f = j.URL + "",
						d = f.search(a);
					d != -1 && (end = f.indexOf("&", d), urlp = f.substring(d, end != -1 ? end : f.length), g = RegExp(urlp + "(&|#)", "i"));
					for(var h = 0; h < c; h++)
						if(j.links[h].href && (f = j.links[h].href + "", urlp.length > 0 && (f = f.replace(g, "$1")), d = f.search(a), d != -1)) d += b, end = f.indexOf("&", d), value = f.substring(d, end != -1 ? end : f.length), this.d.ad = this.d.ad ? this.d.ad + ";" + value : value
				}
			}
		};
		d.b.prototype.action_multitrack = d.b.prototype.Ia;
		d.b.prototype.action_collect = d.b.prototype.Ha;
		i.dcsMultiTrack = function() {
			for(var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
			d.sa({
				argsa: a
			})
		};
		i.Webtrends = d;
		i.WebTrends = d;
		d.multiTrack = d.sa;
		d.dcs = d.b;
		d.dcss = d.e;
		d.addTransform = d.Q;
		d.bindEvent = d.D;
		d.getQryParams = d.pa;
		d.qryparams = d.i;
		d.dcsdelay = d.t;
		d.find = d.find;
		d.loadJS = d.aa;
		d.registerPlugin = d.ca;
		d.registerPluginCallback = d.vb;
		d.dcsGetCookie = d.T;
		d.b.prototype.init = d.b.prototype.$;
		d.b.prototype.dcsMultiTrack = d.b.prototype.ha;
		d.b.prototype.track = d.b.prototype.Cb;
		d.b.prototype.addSelector = d.b.prototype.r;
		d.b.prototype.dcsGetIdCallback = d.b.prototype.Za;
		d.b.prototype.dcsCleanUp = d.b.prototype.Ra;
		d.b.prototype.dcsGetFPC = d.b.prototype.Xa;
		d.b.prototype.addTransform = d.b.prototype.Q;
		d.b.prototype.dcsGetCookie = d.b.prototype.T;
		d.b.prototype.dcsNavigation = d.b.prototype.s;
		d.b.prototype.getTTL = d.b.prototype.Y;
		d.$()
	}
})(window, window.document, window.navigator, window.location);
if(document.addEventListener) {
	document.addEventListener('DOMContentLoaded', function() {
		var mobile = getMobile();
		var si_n = "";
		get_t_or_f(mobile);
		(document.querySelector("*")).addEventListener("click", function(e) {
			si_n = document.title;
			var si_x = "";
			var e = e.target;
			var t = "",
				j;
			var manCenter = "",
				imgSrc = "";
			manCenter = (Trim_udbac_shaggy(e.getAttribute("class")) ? Trim_udbac_shaggy(e.getAttribute("class")) : "");
			if(e.getElementsByTagName("img").length > 0) {
				imgSrc = getSrc(e.getElementsByTagName("img")[0].getAttribute("src"))
			}
			if(!e.type) {
				var apath = "";
				if(e.href) {
					apath = splitPath(e.href)
				}
				var thisTxt = "";
				if(Trim_udbac_shaggy(e.innerHTML).length > 20) {
					thisTxt = Trim_udbac_shaggy(e.innerHTML).substring(0, 10)
				} else {
					thisTxt = Trim_udbac_shaggy(e.innerHTML)
				}
				si_x = thisTxt;
				t += (e.id ? ("_" + e.id) : "") + (manCenter ? ("_" + manCenter) : "") + (thisTxt ? ("_" + thisTxt) : "") + (imgSrc ? ("_" + imgSrc) : "") + (apath ? ("_" + apath) : "");
				j = "Link"
			} else {
				if(e.value) {
					var thisVal = "";
					if(Trim_udbac_shaggy(e.value).length > 20) {
						thisVal = Trim_udbac_shaggy(e.value).substring(0, 10)
					} else {
						thisVal = Trim_udbac_shaggy(e.value)
					}
					si_x = thisVal;
					t = (e.id ? ("_" + e.id) : "") + (manCenter ? ("_" + manCenter) : "") + (thisVal ? ("_" + thisVal) : "") + (imgSrc ? ("_" + imgSrc) : "") + (e.name ? ("_" + e.name) : "")
				} else {
					var thisText = "";
					if(Trim_udbac_shaggy(e.innerHTML).length > 20) {
						thisText = Trim_udbac_shaggy(e.innerHTML).substring(0, 10)
					} else {
						thisText = Trim_udbac_shaggy(e.innerHTML)
					}
					si_x = thisText;
					t = (e.id ? ("_" + e.id) : "") + (manCenter ? ("_" + manCenter) : "") + (thisText ? ("_" + thisText) : "") + (imgSrc ? ("_" + imgSrc) : "") + (e.name ? ("_" + e.name) : "")
				}
				j = e.type
			}
			if(si_x != "" && si_n != "") {
				if(e.getAttribute("wtEvent")) {
					t = e.getAttribute("wtEvent");
					_tag.dcsMultiTrack("DCS.dcsuri", "/nopv.gif", "WT.event", Trim_udbac_shaggy(t), "WT.nodeId", hex_md5(Trim_udbac_shaggy(t)), "WT.si_n", si_n, "WT.si_x", si_x, "WT.mobile", mobile, "WT.obj", j)
				}
			} else {
				if(e.getAttribute("wtEvent")) {
					t = e.getAttribute("wtEvent");
					_tag.dcsMultiTrack("DCS.dcsuri", "/nopv.gif", "WT.event", Trim_udbac_shaggy(t), "WT.nodeId", hex_md5(Trim_udbac_shaggy(t)), "WT.mobile", mobile, "WT.obj", j)
				}
			}
		})
	})
}