//	适配移动端页面大小的方法
	var a = document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
	var scale = 1 / devicePixelRatio;
	document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
	(function flexible (window, document) {
	  var docEl = document.documentElement
	  var dpr = window.devicePixelRatio || 1
	  // adjust body font size
	  function setBodyFontSize () {
	    if (document.body) {
	      document.body.style.fontSize = (12 * dpr) + 'px'
	    }
	    else {
	      document.addEventListener('DOMContentLoaded', setBodyFontSize)
	    }
	  }
	  setBodyFontSize();
	  // set 1rem = viewWidth / 10
	  function setRemUnit () {
	    var rem = docEl.clientWidth / 10
	    docEl.style.fontSize = rem + 'px'
	  }
	  setRemUnit()
	  // reset rem unit on page resize
	  window.addEventListener('resize', setRemUnit)
	  window.addEventListener('pageshow', function (e) {
	    if (e.persisted) {
	      setRemUnit()
	    }
	  })
	
	  // detect 0.5px supports
	  if (dpr >= 2) {
	    var fakeBody = document.createElement('body')
	    var testElement = document.createElement('div')
	    testElement.style.border = '.5px solid transparent'
	    fakeBody.appendChild(testElement)
	    docEl.appendChild(fakeBody)
	    if (testElement.offsetHeight === 1) {
	      docEl.classList.add('hairlines')
	    }
	    docEl.removeChild(fakeBody)
	  }
	}(window, document));
	
//监听视频是否播放
	var vdo = document.getElementsByTagName("video")[0];
	$(".shiping").on('timeupdate',function(){
		$(".start").hide();
	});
	//点击播放
	$(".start").on("click",function(){
		vdo.play();
	})
	//微信自动播放
	$(function(){
		vdo.play();
			function audioAutoPlay(){
				play =function(){
					vdo.play();
					window.removeEventListener("touchstart",play,false);
				};
				window.addEventListener('YixinJSBridgeReady',function() {
					vdo.play();
				},false);
				window.addEventListener("touchstart",play,false);
				window.addEventListener('WeixinJSBridgeReady',play,false);
			}
			audioAutoPlay();
	})

//切换静音
$(".shengyin1").on("click",function(){
	$(".shengyin1").hide();
	$(".jingyin").show();
	vdo.muted = true;
});
//开启声音
$(".jingyin").on("click",function(){
	$(".jingyin").hide();
	$(".shengyin1").show();
	vdo.muted = false;
});
//图标同步声音
if(vdo.muted ==true){
	$(".jingyin").show();
	$(".shengyin1").hide();
}else{
	$(".jingyin").hide();
	$(".shengyin1").show();
}

//判断用户是否是安卓
var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {         //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
        var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
                //安卓在微信中打开
                
        }
        if (ua.match(/WeiBo/i) == "weibo") {
                //在新浪微博客户端打开
        }
        if (ua.match(/QQ/i) == "qq") {
                //在QQ空间打开
        }
        if (browser.versions.ios) {
                //是否在IOS浏览器打开
        } 
        if (browser.versions.android){
                //是否在安卓浏览器打开
                $(".shengyin").css("display","block")
        } 
		} else {
		        //否则就是PC浏览器打开
		}