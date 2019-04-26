<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/common/taglibs-wml.jsp"%>
<%
request.setAttribute("userId", session.getAttribute("aaaUserId"));
request.setAttribute("mobile", session.getAttribute("mobile"));
%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
		<title>咪咕视频</title>
		<link rel="stylesheet" href="css/hunter.css"/>
	</head>
	<body>
		<!---->
		<div>
			<img src="img//hunter_1.png" class='one'/>
			<video src="https://1046927100.github.io/pero/HUNTER/1.mp4" class="shiping" poster="img//hunter_3.jpg" controls="controls" webkit-playsinline x5-playsinline playsinline autoplay  loop></video>
			<img src="img//hunter_2.png" class='start' />
			<a href="http://s.miguvideo.com/qQ36jiy" class='spc'></a>
			<a href="http://s.miguvideo.com/vQb6rqm" class='two'></a>
			<a href="http://s.miguvideo.com/zyi6Brm" class='three'></a>
			<a href="http://wap.js.10086.cn/hyl/CAC/actMGNewSpring/act2.do?isMigu=0" class='no1'></a>
			<a href="http://wap.js.10086.cn/hyl/CAC/actMGNewSpring/act1.do?isMigu=0" class='no2'></a>
			<a href="http://wap.js.10086.cn/hyl/CAC/actMGNewSpring/act3.do?isMigu=0" class='no3'></a>
		</div>
	</body>
</html>
<script src='js/jquery.js'></script>
<script src='js/hunter.js'></script>
<script src='http://webcrystal.miguvideo.com/web/script/migusdk.js?v=1.5.20190228'></script>
<script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script src="/wap/resource/migu/script/plugins/weixinSecondShare.js"></script>
<script>
	// 1.使用 HTTPS 通道上报数据：
	let _logger = MiGuSDK.Logger.build();
	//2.上报数据
	$(".no1").on("click",function(){
		_logger.submit("pagePositionClickEvent",{
			//点击
			positionName:"新人领2元话费",
			pageName:"生而热血为爱封神",
		});
	});
	$(".no2").on("click",function(){
		_logger.submit("pagePositionClickEvent",{
			//点击
			positionName:"达人有礼送话费抽大奖",
			pageName:"生而热血为爱封神"
		});
	});
	$(".no3").on("click",function(){
		_logger.submit("pagePositionClickEvent",{
			//点击
			positionName:"送30GB定向流量30天体验会员",
			pageName:"生而热血为爱封神"
		});
	});
	$(".start").on("click",function(){
		_logger.submit("pagePositionClickEvent",{
			//点击
			positionName:"播放按钮",
			pageName:"生而热血为爱封神"
		});
	});
	$(".spc").on("click",function(){
		_logger.submit("pagePositionClickEvent",{
			//点击
			positionName:"点击观看全集",
			pageName:"生而热血为爱封神"
		});
	});
	$(".two").on("click",function(){
		_logger.submit("pagePositionClickEvent",{
			//点击
			positionName:"山海经之赤影传说",
			pageName:"生而热血为爱封神"
		});
	});
	$(".three").on("click",function(){
		_logger.submit("pagePositionClickEvent",{
			//点击
			positionName:"秦时明月",
			pageName:"生而热血为爱封神"
		});
	});
	//3.验证数据
	//pv
	window.onload = function(){
		_logger.submit("pageVisitEvent",{
			pageName:"生而热血为爱封神",
		})
	}
	
	//分享样式
	var weChatShare = function(){
	 $.ajax({
	        url: "./data/hunter_data.jsp",
	        type: "get",
	        dataType: "json",
	        async: true,
	        success: function(data){
	            console.log(data.shareInfo);
	            var title = data.shareInfo.title;
	            var subTitle = data.shareInfo.subTitle;
	            var imgUrl = data.shareInfo.img;
	            var shareUrl = location.href;
	            $.weixinSecondShare(title,subTitle,imgUrl,shareUrl)
	                
	        }
	 });
	}
	
weChatShare();

</script>