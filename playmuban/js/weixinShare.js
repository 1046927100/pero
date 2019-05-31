/* 微信分享 */
var imgUrl = getWebPath() + "images/share.jpg";
var shareTitle = '厉害了！原来互联网电视可以这样神操作！';  //分享title
var descContenShareTimeline = '厉害了！原来互联网电视可以这样神操作！';
var descContentAppMessage = '开宝箱，赢好礼！2GB流量、5元话费都送你！';
var link = getWebPath() + "index.do"; // 分享跳转链接
var currentLink=window.location.href;
document.write("<script src='http://res.wx.qq.com/open/js/jweixin-1.0.0.js'></script>");
function initwx() {
    var syscode = "jshlwds";

    /** 10086 分享**/
    var accountId = "835c0f29-92e5-4fbd-8fae-47826c17b8c3";
    var appId = "wx43a850f87498127d";

    /** 10085 分享**/
    if (document.domain === 'wx.10085.cn') {
        accountId = "5109afce-6b8f-4e9f-b706-36e7bf3e2f39";
        appId = "wx2e7288fdd5f458b7";
        link = getWebPath() + "index.do";
    }

    $.ajax({
        type: 'POST',
        url: 'share.do',
        dataType: 'json',
        data: {
            "currentLink":currentLink,
            "syscode": syscode,
            "accountId": accountId,
        },
        //timeout: 60000,
        context: $('body'),
        success: function(result){
            initWeChatShareConfig(appId, result.data.timeStamp, result.data.nonceStr, result.data.signature);
        },
        error: function(){
            toErrorPage();
        }
    });
}

function initWeChatShareConfig(appId, timestamp, nonceStr, signature) {
    wx.config({
        debug: false,
        appId: appId,
        timestamp: timestamp,
        nonceStr: nonceStr,
        signature: signature,
        jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
    });
    wx.ready(function () {
        initShareMessage();
    });
    //微信操作回调
    wx.error(function (res) {
    });
}

function initShareMessage() {
    //朋友圈分享
    wx.onMenuShareTimeline({
        title: descContenShareTimeline,// 分享标题
        link: link,				  // 分享链接
        imgUrl: imgUrl, 		  // 分享图标
        success: function () {
            share();			  // 用户确认分享后执行的回调函数
        },
        cancel: function () {	  // 用户取消分享后执行的回调函数
        }
    });
    //分享给一个朋友
    wx.onMenuShareAppMessage({
        title: shareTitle, 		// 分享标题
        desc: descContentAppMessage, 		// 分享描述
        link: link, 				// 分享链接
        imgUrl: imgUrl,			// 分享图标
        type: '', 					// 分享类型,music、video或link，不填默认为link
        dataUrl: '', 				// 如果type是music或video，则要提供数据链接，默认为空
        success: function (data) {		// 用户确认分享后执行的回调函数
            console.log("success");
            share();
        },
        cancel: function () {
            console.error("error");// 用户取消分享后执行的回调函数
        }
    });
    //QQ分享
    wx.onMenuShareQQ({
        title: shareTitle, 		// 分享标题
        desc: descContentAppMessage, 		// 分享描述
        link: link, 				// 分享链接
        imgUrl: imgUrl, 			// 分享图标
        success: function () {		// 用户确认分享后执行的回调函数
            share();
        },
        cancel: function () {		// 用户取消分享后执行的回调函数
        }
    });
    //微博分享
    wx.onMenuShareWeibo({
        title: shareTitle, 		// 分享标题
        desc: descContentAppMessage, 		// 分享描述
        link: link, 				// 分享链接
        imgUrl: imgUrl, 			// 分享图标
        success: function () {		// 用户确认分享后执行的回调函数
            share();
        },
        cancel: function () {		// 用户取消分享后执行的回调函数
        }
    });

    //微信分享后台回调,调用接口,重构链接
    function share() {
        $.ajax("shareLog.do?" + Math.random(), {
            timeout: 60000, //超时时间设置，单位毫秒
            cache: false,
            dataType: "JSON",
            type: 'POST',
            async: true,
            success: function (dataObj) {
                window.location.href = "index.html";
            },
            error: function (jqXHR, textStatus, errorThrown) {
                var busyStr = ("weixin:shareLog方法中,jqXHR.responseText=" + jqXHR.responseText + ",jqXHR.status=" + jqXHR.status + ",jqXHR.readyState" +
                    "=" + jqXHR.readyState + ",jqXHR.statusText=" + jqXHR.statusText + ",textStatus=" + textStatus +
                    ",errorThrown=" + errorThrown);
                //错误记录方法处理
                showBusyMethodFun(busyStr);
            }
        });
    }
}

//微信初始化
$(function () {
    document.addEventListener('WeixinJSBridgeReady',function onBridgeReady(){
        initwx();
    });
})