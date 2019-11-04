<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/common/taglibs-wml.jsp"%>
<%
request.setAttribute("userId", session.getAttribute("aaaUserId"));
request.setAttribute("mobile", session.getAttribute("mobile"));
%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
		<title></title>
		<style>
			*{
				margin:0;
				padding:0;
			}
			body{
				width:100%;
			}
			html{
				width:100%;
			}
			.toutu{
				width:100%;
			}
			img{
				width:100%;
				border:0 none;
			}
			.shiping{
				width:8.6rem;
				height:4.55rem;
				position: absolute;
				left:0.72rem;
				top:1.8533rem;	
				background: black;			
			}
			.shiping video{		
				width:100%;
				height:100%;
				display: block;
				object-fit: fill;
			}
			.huodong span{
				display: block;
				width:6.867rem;
				height:0.746rem;
				position: absolute;
				top:14.4rem;
				left:1.44rem;
			}
			.huodong .more{
				top:15.4rem;
			}
			.huodong .seven{
				top:16.36rem;
			}
			.play{
				width:1.2rem;
				height:1.2rem;
				position: absolute;
				left:50%;
				top:50%;
				transform: translate(-50%,-50%);
			}
			.yuyue span{
				display: block;
				width: 7.893rem;
				height:0.95rem;
				position: absolute;
				left:1.17rem;
				top:11.2rem;
			}
			.yuyue .mancheng{
				top:12.4rem;
			}
		</style>
	</head>
	<body>
		<div class='toutu'>
			<img src="img/foot_banner.jpg" alt="" />
			<div class="shiping">
				<video id="videoMain" src="http://117.131.18.44/depository_sjq/asset/zhengshi/1003/702/847/1003702847/media/1003702847_1016126733_91.mp4" x5-playsinline playsinline  webkit-playsinline x-webkit-airplay="allow" preload="true" poster="img/foot_poster.png" >
					
				</video>
				<div class='play'>
					<img src="img/foot_play.png" alt="" />
				</div>
			</div>
			<div class='huodong'>
				<span class='span2'></span>
				<span class='more'></span>
				<span class='seven'></span>
			</div>
			<div class='yuyue'>
				<span class='wolf'></span>
				<span class='mancheng'></span>
			</div>
		</div>
	</body>
</html>
<script src='js/jquery.js'></script>
<script>
	//	适配移动端页面大小的方法
	var a = document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
	var scale = 1 / devicePixelRatio;
	document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + 1 + ', maximum-scale=' + 1 + ', minimum-scale=' + 1 + ', user-scalable=no');
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
	
	//起播
	var mainVideoObj = $('#videoMain');
	$(".play").on("click",function(){
		mainVideoObj[0].play();
	})
	
	//控制台消失展现
	mainVideoObj.on('play', function(){
        $(this).attr('controls', 'controls');
		$('.play').hide();
	});
    mainVideoObj.on('pause', function(){
        $(this).removeAttr('controls');
        $('.play').show();
    });
    
    //预约
    $(".wolf").on("click",function(){
    	window.location.href = 'https://m.miguvideo.com/mgs/share/living_share/prd/home.html?channelid=10010001004&mgdbid=120000085587'
    });
    $(".mancheng").on("click",function(){
    	window.location.href = 'https://m.miguvideo.com/mgs/share/living_share/prd/home.html?channelid=10010001004&mgdbid=120000085586'
    });
    
    //活动
    $(".seven").on("click",function(){
    	window.location.href = 'http://wap.js.10086.cn/hyl/CAC/actMGNewSpring/act4.do?isMigu=0&platform=PLATFORM'
    });
    $(".span2").on("click",function(){
    	window.location.href = 'http://m.miguvideo.com/mgs/common/miguPromotion/prd/provinceRouter.html?pageId=df7aaf7945ed4e8b88f81d76fec676c0&mver=stable_version&platform=PLATFORM#/'
    });
    $(".more").on("click",function(){
    	window.location.href = 'http://wap.js.10086.cn/hyl/CAC/actMGNewSpring/act5.do?isMigu=0&platform=PLATFORM'
    });
</script>