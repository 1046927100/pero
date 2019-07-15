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
		<title>多屏互动常见问题</title>
		<meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
		<style type="text/css">
			*{
				margin:0;
				padding:0;
			}
			img{
				border: 0 none;
				width:100%;
			}
			body{
				/*background: #ccc;*/
				font-family: "黑体";
				color:#3e3a39;
			}
			.banner{
				width:100%
			}
			.banner img{
				width:100%;
			}
			.content p{
				height:1rem;
				font-size: 0.35rem;
				margin:0.3rem 0 0 0;
				white-space:normal;
				/*text-overflow:ellipsis;*/
				/*overflow:hidden;*/
				border-bottom: 0.5px solid #e6e6e6;
			}
			.content .lianghang{
				margin:0.3rem 0 0 0;		
				padding-bottom: 0.35rem;	
			}
			.content .sanhang{
				margin:0.3rem 0 0 0;	
				padding-bottom: 0.7rem;
			}
			span{
				font-size: 0.18rem;
				display: block;
				text-align: center;
				margin-top:0.1rem;
			}
			.left,.right{
				float:left;
			}
			.right{
				width:75%;
			}
			.left{
				width:25%;
			}
			i{
				display: block;
				width:0.7rem;
				height:0.7rem;
				background: url(img/FAQ_5.png) no-repeat  ;
				background-size: 100%;
				margin:0.6rem auto 0;
			}
			s{
				display: block;
				width:0.2rem;
				height:0.2rem;
				background: url(img/up.png) no-repeat  ;
				background-size: 100%;
				margin:0.2rem auto 0;
			}
			.i2{
				background: url(img/FAQ_4.png) no-repeat  ;
				background-size: 100%;
			}
			.i3{
				background: url(img/FAQ_3.png) no-repeat  ;
				background-size: 100% 100%;
			}
			.i4{
				background: url(img/FAQ_2.png) no-repeat  ;
				background-size: 100%;
			}
			.br{
				width:100%;
				height:0.1rem;
				background: #efefef;
				
			}
			.slide{
				display: block;
			}
			.open{
				
			}
		</style>
	</head>
	<body>
		<div class='banner1'>
			<img src="img/FAQ_1.png"/>
		</div>
		<div class='content'>
			<div class="icon1 icon">
				<div class="left left1" id='go3' data-to='go3'>
					<i class='i1' data-to='go3'></i>
					<span data-to='go3'>使用之前</span>
					<s class='s1 open' data-to='go3'></s>
				</div>
				<div class="right right1">
					<p class='tiaozhuan1'>我是否可使用多屏互动业务？</p>
					<p class='tiaozhuan2'>如何绑定魔百和</p>
					<!--<div class="slide slide1">
						<p class='tiaozhuan3'>使用手机端如何绑定设备？</p>
					</div>-->
				</div>
			</div>
			<div class='br'></div>
			
			<div class="icon2 icon">
				<div class="left left2" id='go2' data-to='go2'>
					<i class='i2' data-to='go2'></i>
					<span data-to='go2'>绑定问题</span>
					<s class='s2' data-to='go2'></s>
				</div>
				<div class="right right2">
					<p class='tiaozhuan4'>为什么二维码加载不出来？</p>
					<p class='tiaozhuan5'>扫描二维码后手机端为什么提示“绑定失败”？</p>
					<div class="slide slide2">
						<p class='sce tiaozhuan6 lianghang' >为什么家庭成员选项中没有显示家庭成员列表和主人信息？</p>
						<p class='tiaozhuan7'>为什么绑定成功后 手机虚拟遥控器无法操控？</p>
					</div>
				</div>
			</div>
			<div class='br'></div>	
			
			<div class="icon3 icon">
				<div class="left left3" id='go1' data-to='go1'> 
					<i class='i3' data-to='go1'></i>
					<span data-to='go1'>语音搜索问题</span>
					<s class='s3' data-to='go1'></s>
				</div>
				<div class="right right3">
					<p class='sce tiaozhuan8 lianghang'>为什么语音搜索会提示“暂不支持该功能”、“频道列表不存在”或者“获取不到频道信息”？</p>
					<p class='tiaozhuan9'>为什么语音搜索时电视端无任何提示？</p>
					<div class="slide slide3">
						<p class='tiaozhuan12 lianghang'>为什么有些热播剧语音搜索不出来或语音识别错误？</p>
					</div>
				</div>
			</div>
			<div class='br'></div>	
			
			<div class="icon4 icon" >
				<div class="left left4" id='go' data-to='go'>
					<i class='i4' data-to='go'></i>
					<span data-to='go'>播放问题</span>
					<s class='s4' data-to='go'></s>
				</div>
				<div class="right right4">
					<p class='sce tiaozhuan10 lianghang'>为什么手机端播放的视频，在电视端的观看记录中显示“已下线”？</p>
					<p class='sce2 tiaozhuan11 sanhang'>为什么电视端播放的视频，在手机端观看记录中显示灰色，点击后提示“由于版权原因，请去电视端观看”？</p>
					<div class="slide slide4">
						<p class='sce tiaozhuan13 lianghang'>为什么有些节目投屏或拉屏时会提示“投屏失败”或“拉屏失败”？</p>
						<p class='sce2 tiaozhuan14 sanhang'>为什么手机端播放的视频在电视端没有留下观看记录，反之，在电视端播放的视频在手机端也没有观看记录？</p>
						<p class='sce tiaozhuan15'>江苏多屏互动报障模板</p>
					</div>
				</div>
			</div>
		</div>
			
	</body>
</html>
<script src='js/jquery.js'></script>
<script type="text/javascript">
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
	
	
//跳转事件
	$(".tiaozhuan1").on("click",function(){
		window.location.href = 'FAQ_3.jsp'
	});
	$(".tiaozhuan2").on("click",function(){
		window.location.href = 'FAQ_1.jsp'
	});
	$(".tiaozhuan3").on("click",function(){
		window.location.href = 'FAQ_2.jsp'
	});
	$(".tiaozhuan4").on("click",function(){
		window.location.href = 'FAQ_4.jsp'
	});
	$(".tiaozhuan5").on("click",function(){
		window.location.href = 'FAQ_5.jsp'
	});
	$(".tiaozhuan6").on("click",function(){
		window.location.href = 'FAQ_6.jsp'
	});
	$(".tiaozhuan7").on("click",function(){
		window.location.href = 'FAQ_7.jsp'
	});
	$(".tiaozhuan8").on("click",function(){
		window.location.href = 'FAQ_8.jsp'
	});
	$(".tiaozhuan9").on("click",function(){
		window.location.href = 'FAQ_9.jsp'
	});
	$(".tiaozhuan10").on("click",function(){
		window.location.href = 'FAQ_10.jsp'
	});
	$(".tiaozhuan11").on("click",function(){
		window.location.href = 'FAQ_11.jsp'
	});
	$(".tiaozhuan12").on("click",function(){
		window.location.href = 'FAQ_12.jsp'
	});
	$(".tiaozhuan13").on("click",function(){
		window.location.href = 'FAQ_13.jsp'
	});
	$(".tiaozhuan14").on("click",function(){
		window.location.href = 'FAQ_14.jsp'
	});
	$(".tiaozhuan15").on("click",function(){
		window.location.href = 'FAQ_15.jsp'
	});
	
	var ins = document.getElementsByTagName("i");
	var ins2 = document.getElementsByTagName("s");
	var hei11 = $(".right1").height()-0.5+"px";
	var hei22 = $(".right2").height()-0.5+"px";
	var hei33 = $(".right3").height()-0.5+"px";
	var hei44 = $(".right4").height()-0.5+"px";
	window.onload = function(){
		$(".icon1").css("height",hei11);
		$(".icon2").css("height",hei22);
		$(".icon3").css("height",hei33);
		$(".icon4").css("height",hei44);
	}
	$(".left1").on("click",function(){
//		$(".slide1").toggle();
//		var hei1 = $(".right1").height()-1+"px";
//		$(".icon1").css("height",hei1);
//		if($(".slide1")[0].style.display == "none"){
//			$(".s1").css("background","url(img/down.png) no-repeat");
//			$(".s1").css("backgroundSize","100%");
//		}else{
//			$(".s1").css("background","url(img/up.png) no-repeat");
//			$(".s1").css("backgroundSize","100%");
//		}	
		if($(".s1").hasClass("open")){
			$(".s1").css("background","url(img/down.png) no-repeat");
			$(".s1").css("backgroundSize","100%");
			$(".s1").removeClass("open")
		}else{
			$(".s1").css("background","url(img/up.png) no-repeat");
			$(".s1").css("backgroundSize","100%");
			$(".s1").addClass("open")
		}
	});
	$(".left2").on("click",function(){
		$(".slide2").slideToggle();
		var hei2 = $(".right2").height()-1+"px";
		$(".icon2").css("height",hei2);
		if($(".slide2")[0].style.display == "none"){
			$(".s2").css("background","url(img/down.png) no-repeat");
			$(".s2").css("backgroundSize","100%");
		}else{
			$(".s2").css("background","url(img/up.png) no-repeat");
			$(".s2").css("backgroundSize","100%");
		}	
	});
	$(".left3").on("click",function(e){
		$(".slide3").toggle();
		var hei3 = $(".right3").height()-1+"px";
		$(".icon3").css("height",hei3);
		if($(".slide3")[0].style.display == "none"){
			$(".s3").css("background","url(img/down.png) no-repeat");
			$(".s3").css("backgroundSize","100%");
		}else{
			$(".s3").css("background","url(img/up.png) no-repeat");
			$(".s3").css("backgroundSize","100%");
		};
		var target = e.target;
//		console.log(target);
        var id = $(target).data("to");
//      console.log(id);
        $('html,body').animate({scrollTop:$('#'+id).offset().top}, 800);
	});
	$(".left4").on("click",function(e){
		$(".slide4").toggle()	;
		var hei4 = $(".right4").height()-1+"px";
		$(".icon4").css("height",hei4);
		if($(".slide4")[0].style.display == "none"){
			$(".s4").css("background","url(img/down.png) no-repeat");
			$(".s4").css("backgroundSize","100%");
		}else{
			$(".s4").css("background","url(img/up.png) no-repeat");
			$(".s4").css("backgroundSize","100%");
		};
		var target = e.target;
//		console.log(target);
        var id = $(target).data("to");
//      console.log(id);
        $('html,body').animate({scrollTop:$('#'+id).offset().top}, 800);
		
	});
	$(".banner1").on("click",function(){
		window.location.href = 'http://m.miguvideo.com/mgs/share/multi_screen/prd/home.html'
	})
</script>
