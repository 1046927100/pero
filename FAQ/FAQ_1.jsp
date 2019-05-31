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
			img{
				width:30%;
				border: 0 none;
				margin:10px 5px;
			}
			.one{
				overflow: hidden;
			}
			.no1{
				float:left;
			}
			.biaoti{
				padding-bottom: 10px;
				border-bottom: 1px solid #ccc;
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
			a{
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
		</style>
	</head>
	<body>
		<div class="banner3">
			<h2 class='biaoti'><a class='return'></a>扫码绑定入口</h2>
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
