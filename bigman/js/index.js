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
	//控制台
	//获取视频对象 H5写法
		var myVideo = document.querySelector("#myVideo");
 
		//播放或暂停
//		document.querySelector('.switch').addEventListener("click",function(){
//			//切换播放样式 jq写法
//			$('.switch').toggleClass("fa-play fa-pause");
// 
//			//判断当前视频是否暂停
//			if(myVideo.paused){
//				myVideo.play();//播放
//			}else{
//				myVideo.pause();//暂停
//			}
//		});
 
		//全屏
		function goFullScreen() {
		    element = document.getElementById('myVideo');
		    if (element.requestFullscreen) { //w3c
		        element.requestFullscreen();
		    } else if (element.mozRequestFullScreen) { //moz Firefox
		        element.mozRequestFullScreen();
		    } else if (element.msRequestFullscreen) { //IE
		        element.msRequestFullscreen();
		    } else if (element.oRequestFullscreen) { //Opera
		        element.oRequestFullscreen();
		    } else if (element.webkitRequestFullscreen) { //webkit内核 Chrome Safari
		        element.webkitRequestFullScreen();
		    } else {
		        var docHtml = document.documentElement;
		        var docBody = document.body;
		        var cssText = 'width:100%;height:100%;overflow:hidden;';
		        docHtml.style.cssText = cssText;
		        docBody.style.cssText = cssText;
		        element.style.cssText = cssText + ';' + 'margin:0px;padding:0px;';
		        document.IsFullScreen = true;
		    }
		}
		//退出全屏
		function exitFullscreen() {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.oCancelFullScreen) {
				document.oCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else {
				var docHtml = document.documentElement;
				var docBody = document.body;
				var videobox = document.getElementById('videobox');
				docHtml.style.cssText = "";
				docBody.style.cssText = "";
		        videobox.style.cssText = "";
		        document.IsFullScreen = false;
		    }
		}
		//判断是否全屏
		function isFullScreen(){
			return  document.fullscreen ||
			 document.msFullscreenElement ||
			 document.msFullscreenElement ||
			 document.mozFullScreen ||
			 document.oFullScreen ||
			 document.webkitIsFullScreen;
		}
 
		//全屏和退出全屏
		$(".expend").on("click",function(){
			//切换样式
			$(".expend").toggleClass("fa-expand fa-compress")
			if(isFullScreen()){
				exitFullscreen();
			}else{
				goFullScreen();
			}
		});		
		
		//静音
		$(".shengyin").on("click",function(){
			$(".shengyin").hide();
			$(".jingyin").show();
			$(".shiping").attr("muted","muted");
			vdo.volume = 0;
		});
		//开启声音
		$(".jingyin").on("click",function(){
			$(".jingyin").hide();
			$(".shengyin").show();
			$(".shiping").removeAttr("muted")
			vdo.volume = 1;
		});
		
		//播放
		$(".play").on("click",function(){
			$(".play").hide();
			$(".pause").show();
			vdo.pause();
		});
		$(".pause").on("click",function(){
			$(".pause").hide();
			$(".play").show();
			vdo.play();
		})
