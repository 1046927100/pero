//所有的事件类型
var allEventType = {
    videoUv: {
        name: "视频播放",
        value: "videoPlayEvent",
        id: 1
    },
    pagePv: {
        name: "页面访问",
        value: "pageVisitEvent",
        id: 2
    },
    blockUv: {
        name: "区块埋点",
        value: "pageBlockExposureEvent",
        id: 3
    },
    clickPv: {
        name: "点击的埋点",
        value: "pagePositionClickEvent",
        id: 4
    },
    videoOnline: {
        name: "播放时长",
        value: "playHeartEvent",
        id: 5
    },
    funcClick: {
        name: "功能点击",
        value: "functionClickEvent",
        id: 6

    }
};

//继承对象
var extendObj = function () {
    var length = arguments.length;
    var target = arguments[0] || {};
    if (typeof target != "object" && typeof target != "function") {
        target = {};
    }

    for (var i = 1; i < length; i++) {
        var source = arguments[i];
        for (var key in source) {
            // 使用for in会遍历数组所有的可枚举属性，包括原型。
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
//科升类class
var KeShengEntry = function (param) {
    this._init(param);
};
//静态变量
//sdk url
KeShengEntry.url = "//webcrystal.miguvideo.com/web/script/migusdk.js?v=0.1.20180415";
//上报固定参数的设置
KeShengEntry.staticParam = {};
//静态方法
//设置固定参数
KeShengEntry.setStaticParam = function (param) {
    if (param) {
        try {
            KeShengEntry.staticParam || (KeShengEntry.staticParam = {});
            extendObj(KeShengEntry.staticParam, param);
        } catch (e) {
            console.log(e);
        }
    }
    return KeShengEntry.staticParam;
};
//节流器
KeShengEntry.throttle = function (fn, delay) {
    var timer = null;

    return function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn();
        }, delay);
    };
};
//获取cookie
KeShengEntry.getCookie = function (name) {
    var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if ((arr = document.cookie.match(reg))) return decodeURIComponent(arr[2]);
    else return null;
};

//获取终端的操作系统类型
KeShengEntry.terminalType = function () {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        return 'AD';
    } else if (isiOS) {
        return 'iOS';
    } else {
        return ''
    }
}

//生成sessionId
KeShengEntry.createSession = function () {
    var getCharAt = function (count) {
        var $charAt = '',
            ALPHA_CHARS = "0123456789abcdef";
        for (var i = 0; i < count; i++) {
            $charAt += ALPHA_CHARS.charAt(Math.random() * (ALPHA_CHARS.length - 1) >> 0);
        }
        return $charAt;
    }
    var arr = [];
    arr.push(getCharAt(8));
    for (var i = 0; i < 3; i++) {
        arr.push(getCharAt(4));
    }
    var time = new Date().getTime();
    arr.push(("0000000" + time.toString(16)).substr(-8) + getCharAt(4));
    return arr.join('');
}

//实例方法
KeShengEntry.prototype = {
    _init: function (param) {
        this.param = param || {};
        this.instanceConstParam = {};
        return this;
    },
    setInstanceConstParam: function (param) {
        extendObj(this.instanceConstParam, param);
        return this.instanceConstParam;
    },
    _initInstance: function () {
        try {
            if (location.protocol == "https:") {
                this.sdk = MiGuSDK.Logger.https(this.param);
            } else {
                this.sdk = MiGuSDK.Logger.build(this.param);
            }
        } catch (e) {
            this.sdk = MiGuSDK.Logger.build(this.param);
            console.log(e);
        }

        return this;
    },
    _formatDateTime: function (timeString) {
        // timeString 为时间戳格式
        var dateStr = timeString || new Date().getTime();
        return new Date(dateStr + 2.88e7)
            .toISOString()
            .substring(0, 16)
            .replace("T", " ");
    },
    _triggerWrap: function (type, extra, sync) {
        var _this = this;
        var timeStr = this._formatDateTime();
        var cookieId = document ? document.cookie : "";
        var obj = {
            timestamp: timeStr, //事件发生时间
            os: KeShengEntry.terminalType(), //终端的操作系统类型：AD : Android iOS: iOS
            contentId: "",
            promotionId: "",
            product: "miguvideo",
            //parameter1 存放客户端的location字段
            parameter1: KeShengEntry.getCookie('location'),
            "ks-udid": KeShengEntry.getCookie('ks-udid'), //科升udid（如果通过app跳入H5，客户端将科升的UDID传给H5，H5上报该参数）
            "ks-sessionid": KeShengEntry.getCookie('ks-sessionid'), //科升session_id（如果通过app跳入H5，客户端将科升的sessionid传给H5，H5上报该参数）
            parameter2: "",
            parameter3: "",
            referer: "", //访问页面来源
            app_from: "miguvideo",
            pageId: "",
            channelId: "",
            account: "",
            userId: "",
            mainsite: "", //是否主站，1代表是，0代表否
            browser: _this._browser(), //浏览器名称
            sessionId: "",
            platform: _this._isInApp() ? 1 : 0 //1代表app内打开，0代表app外打开
        }

        var staticParam = KeShengEntry.staticParam || {};

        extendObj(obj, staticParam, this.instanceConstParam, extra);

        this._trigger(type, obj, sync);
    },
    _trigger: function (type, extra, sync) {
        // sync = (sync === ""||sync === undefined)?true:sync;

        if (!this.sdk) {
            this._initInstance();
        }

        if (!this.sdk) {
            console.log("初始化sdk失败");
        } else {
            try {
                this.sdk.submit(type, extra);
            } catch (e) {
                console.log("sdk内部错误");
            }
        }
    },
    //浏览器类型
    _browser: function () {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
        var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
        var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
        var isChrome = userAgent.indexOf("Chrome") > -1; //判断是否Chrome浏览器
        var IE6 = false;
        var IE7 = false;
        var IE8 = false;
        var IE9 = false;
        var IE10 = false;
        var IE11 = false;
        if (isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            IE6 = fIEVersion == 6;
            IE7 = fIEVersion == 7;
            IE8 = fIEVersion == 8;
            IE9 = fIEVersion == 9;
            IE10 = fIEVersion == 10;
            IE11 = fIEVersion == 11;
        }//isIE end
        var browserType = '';
        switch (true) {
            case isOpera:
                browserType = 'Opera';
                break;
            case isFF:
                browserType = 'FF';
                break;
            case isChrome:
                browserType = 'Chrome';
                break;
            case isSafari:
                browserType = 'Safari';
                break;
            case IE6:
                browserType = 'IE6';
                break;
            case IE7:
                browserType = 'IE7';
                break;
            case IE8:
                browserType = 'IE8';
                break;
            case IE9:
                browserType = 'IE9';
                break;
            case IE10:
                browserType = 'IE10';
                break;
            case IE11:
                browserType = 'IE11';
                break;

            default:
                break;
        }
        return browserType;
    },
    //端内端外
    _isInApp: function() {
        var platform = this._getUrlParam('platform');
        return ( platform === 'android' || platform === 'ios');
    },
    //截取url参数
    _getUrlParam: function(name) {
        var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
        if (reg.test(window.location.search)) {
            return decodeURIComponent(RegExp.$2.replace(/\+/g, " "));
        }
        return null;
    },

    /**
     * 参数详情：http://confluence.cmvideo.cn/confluence/pages/viewpage.action?pageId=10424974
     * 页面pv
     * 参数 ：{pageId : "",channelId : ""
     * account : "",userId : "" ,mgdbId : ""}
     * @constructor
     */
    PV: function (extra) {
        this._triggerWrap(allEventType.pagePv.value, extra);
    },
    /**
     * 参数详情：http://confluence.cmvideo.cn/confluence/pages/viewpage.action?pageId=10442903
     * obj = { blockName : "",pageName : "  ",blockId : ""，pageId : "",channelId : ""
     * account : "",userId : "" }
     * 区块曝光
     */
    block: function (extra) {
        this._triggerWrap(allEventType.blockUv.value, extra);
    },
    /**
     * 参数详情：http://confluence.cmvideo.cn/confluence/pages/viewpage.action?pageId=10442915
     * sync 默认为延时，点击后5秒 如果设置为true 则点击的时候就会立即上报
     * extra = { blockName : "",blockId : "",pageName : "  " ,positionId : "",positionIndex : "",
     * positionName : "",targetProgramId : "",targetPageName : "", contentId : ""，pageId : "",channelId : ""
     * account : "",userId : ""}
     */
    click: function (extra, sync) {
        this._triggerWrap(allEventType.clickPv.value, extra, sync);
    },
    /**
     * @param extra
     * 参数详情：http://confluence.cmvideo.cn/confluence/pages/viewpage.action?pageId=10424995
     * extra ={ contentId : "",currentPageName : "",lastPageName : "",currentPageId : "",lastPageId : ""
     * playSessionId : "",videoType : "",channelId : ""
     * account : "",userId : ""}
     */
    play: function (extra) {
        this._triggerWrap(allEventType.videoUv.value, extra);
    },
    /**
     * @param extra
     * extra ={ program_id : "",currentPageName : "",lastPageName : "" }
     */
    playTime: function (extra) {
        this._triggerWrap(allEventType.videoOnline.value, extra);
    },
    /**
     * @param extra
     * extra ={ program_id : "",currentPageName : "",lastPageName : "" }
     */
    functionClick: function(extra) {
        this._triggerWrap(allEventType.funcClick.value, extra);
    },
    /**
     * 上报promotion
     */
    createPromotion: function(promotion){
        this._trigger("createPromotion",{
			product: 'miguVideo',
			promotion:JSON.stringify(promotion).replace(/"/g,'\\"'),
			timestamp:(new Date).getTime(),
			sdk_version:"2.0.0"});
    }
};

export default KeShengEntry;
