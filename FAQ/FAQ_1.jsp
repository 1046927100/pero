<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/common/taglibs-wml.jsp"%>
<%
request.setAttribute("userId", session.getAttribute("aaaUserId"));
request.setAttribute("mobile", session.getAttribute("mobile"));
%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
		<title>多屏互动常见问题</title>
		<style>
			*{
				margin:0;
				padding:0;
			}
			body{
				width:100%;
				height:110%;
				font-family: "黑体";
				font-size:13.125px;
				color:#3e3a39;
				line-height:25px;
			}
			.banner3{
				width:84%;
				margin:0 auto;
			}
			.one{
				overflow: hidden;
			}
			.no1{
				float:left;
				width:30%;
				border: 0 none;
				margin:10px 5px;
			}
			.biaoti{
				padding-bottom: 10px;
				border-bottom: 1px solid #ccc;
				position: relative;
			}
			h2{
				margin: 10px 0;
				font-size:16px;
			}
			h3{
				font-size: 13.125px;
				margin:10px 0;
				
			}
			span{
				display: block;
			}
			.return{
				display: inline-block;
				width:30px;
				height:50px;
				background: url(img/FAQ_left.png) no-repeat center;
				background-size: 30% 30%;
				margin-right: 5px;
				text-decoration: none;
				transform: translateY(19px);
			}
			.max{
				width:100%;
				border: 0 none;
				position: absolute;
				top:50%;
				transform: translateY(-50%);
				display: none;
			}
			.zhezhao{
				width:100%;
				height:100%;
				background: white;
				position: fixed;
				left:0;
				top:0;
				display: none;
			}
			.spc{
				display: inline-block;
				text-align: center;
				line-height: 30px;
				width:100px;
				height:30px;
				background: #626666;
				position: fixed;
				right:10%;
				color:white;
				transform: translateY(29px);
				/*font-family: "宋体";*/
			}
			.spc1{
				width:45%;
				border: 0 none;
			}
			.spc2{
				margin-left:5%;
			}
		</style>
	</head>
	<body>
		<div class="banner3">
			
			<h2 class='biaoti'><a class='return'></a>扫码绑定入口 <a class='spc'>前往绑定>></a> </h2>
			<h3>未来</h3>
			<span>
				1、首页顶部菜单栏，打有“用户”角标，进入到用户中心。<br>2、选择“家庭成员”，点击“+”添加成员。<br>3、展示二维码，使用咪咕视频客户端扫码绑定。
			</span>
			<div class="one">
				<img src="img/FAQ_ques2_2.png" alt="" class='no1 no22'/>
				<img src="img/FAQ_ques2_1.png" alt="" class='no1 no11'/>	
				<img src="img/FAQ_ques2_3.png" alt="" class='no1 no33'/>
			</div>
			<h3>银河</h3>
			<span>
				1、首页右上角位置，打有“双屏专区”角标图片，图片会不定期更换。<br>2、进入到双屏专区，点击“扫码绑定”按钮。如用户第一次使用，会提示安装“咪视通”，安装完成后需退出首页再次从首页-双屏专区入口进入。<br>3、选择“+”图标添加用户，展示二维码，使用咪咕视频客户端扫码绑定。
			</span>
			<div class="one">
				<img src="img/FAQ_ques2_4.png" alt="" class='no1 no44'/>
				<img src="img/FAQ_ques2_5.png" alt="" class='no1 no55'/>
				<img src="img/FAQ_ques2_6.png" alt="" class='no1 no66'/>
			</div>
		</div>
		<div class="zhezhao" >
			<img src="img/FAQ_ques2_1.png" class='max max1' />
			<img src="img/FAQ_ques2_2.png" class='max max2' />
			<img src="img/FAQ_ques2_3.png" class='max max3' />
			<img src="img/FAQ_ques2_4.png" class='max max4' />
			<img src="img/FAQ_ques2_5.png" class='max max5' />
			<img src="img/FAQ_ques2_6.png" class='max max6' />
		</div>
		<div class="banner3">
<!--			<h2>使用手机端如何绑定设备</h2>-->
			<h3>有三种方式可以绑定设备：</h3>
			<span>1.点击首页右上角的TV按钮，点击设备下拉菜单，选择扫码添加云端设备即可绑定。</span>
			<img src="img/FAQ_ques3_1.png" alt="" class='spc1'/>
			<img src="img/FAQ_ques3_2.png" alt="" class='spc1 spc2'/><br>
			<span>2.打开咪咕视频APP，点击右下角“我的”，在我的界面的左上角，点击扫一扫图标，扫码即可绑定。</span>
			<img src="img/FAQ_ques3_3.png" alt="" class='spc1'/><br>
			<span>3.屏幕右下角选中“我的”，选择投电视，扫码添加设备，即可绑定。</span>
			<img src="img/FAQ_ques3_4.png" alt="" class='spc1'/>
		</div>

	</body>
</html>
<script src='js/jquery.js'></script>
<script>
	$(".return").on("click",function(){
		window.location.href = 'FAQ_index.jsp'
	});
	$(".no11").on("click",function(){
		$(".zhezhao").show();
		$(".max1").show();
	});
	$(".no22").on("click",function(){
		$(".zhezhao").show();
		$(".max2").show();
	});
	$(".no33").on("click",function(){
		$(".zhezhao").show();
		$(".max3").show();
	});
	$(".no44").on("click",function(){
		$(".zhezhao").show();
		$(".max4").show();
	});
	$(".no55").on("click",function(){
		$(".zhezhao").show();
		$(".max5").show();
	});
	$(".no66").on("click",function(){
		$(".zhezhao").show();
		$(".max6").show();
	});
	$(".zhezhao").on("click",function(){
		xiaoshi()
	});
	$(".max").on("click",function(){
		xiaoshi()
	});
	//遮罩都消失
	function xiaoshi(){
		$(".max").hide();
		$(".zhezhao").hide();
	}
</script>
<script type="text/javascript" src="//m.miguvideo.com/mgs/common/miguvendor/prd/vue_mgvendor.js"></script>
<script type="text/javascript" src="//m.miguvideo.com/mgs/common/migugeneral/prd/general.js"></script>
<script type="text/javascript" src="//m.miguvideo.com/mgs/common/migujsbridge/prd/mgv-jsbridge.js"></script>
<script type="text/javascript" src="//res.wx.qq.com/open/js/jweixin-1.4.0.js"></script>
<script type="text/javascript" src="//webcrystal.miguvideo.com/web/script/migusdk.js?v=0.1.20180911"></script>
<script type="text/javascript" src="//m.miguvideo.com/mgs/common/miguplayer/prd/commonPlayer.js"></script>
<script type="text/javascript" src="//m.miguvideo.com/mgs/common/migu_udbac/prd/dist/mg_sdc_load.js"></script>
<script type="text/javascript" charset="UTF-8" src="http://m.miguvideo.com/mgs/player/prd/v_20190613174427_3c9bdd9d/dist/pcPlayer.js"></script>
<script type="text/javascript" src="v_20190615141336_8378d644/dist/index.js"></script>
<script>
	window.onload = function(){
		function connectWebViewJavascriptBridge(callback) {
				if (window.WebViewJavascriptBridge) {
				callback(WebViewJavascriptBridge)
				} else {
				document.addEventListener(
				'WebViewJavascriptBridgeReady'
				, function() {
				callback(WebViewJavascriptBridge)
				},
				false
				);
				}
			}
		connectWebViewJavascriptBridge(function(bridge) {
			bridge.init(function(message, responseCallback) {
			console.log('JS got a message', message);
			var data = {
			'Javascript Responds': '测试中文!'
			};
			console.log('JS responding with', data);
			responseCallback(data);
			});
			bridge.registerHandler("functionInJs", function(data, responseCallback) {
			document.getElementById("show").innerHTML = ("data from Java: = " + data);
			var responseData = "Javascript Says Right back aka!";
			responseCallback(responseData);
			});
		})
	}
	
	var action={
		"name": "TOPIC_ITEM_CLICK",
		"type": "JUMP_INNER_NEW_PAGE",
		"params": {
			"path": "",
			"frameID": "default-frame",
			"location": "WEB_VIEW_H5",
			"pageID": "MY_REMOTE_CONTROL", //电影、电视剧、综艺pageId
			}
		}
	var div = document.getElementsByClassName("spc")[0];
	div.addEventListener("click",function(){
		window.MGBridge.jumpActivityView(action,function(res){
			console.log(res);
		});
	})
</script>
