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
				height:100%;
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
				width:45%;
				border: 0 none;
			}
			.spc1{
				margin-left:5%;
			}
			h2{
				padding-bottom: 10px;
				border-bottom: 1px solid #ccc;
				font-size:16px;
			}
			h3{
				margin: 10px 0;
				font-size:14px;
			}
			span{
				display: block;
				margin:10px 0;
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
		</style>
	</head>
	<body>
		<div class="banner3">
			<h2><a class='return'></a>使用手机端如何绑定设备</h2>
			<h3>有三种方式可以绑定设备：</h3>
			<span>1.点击首页右上角的TV按钮，点击设备下拉菜单，选择扫码添加云端设备即可绑定。</span>
			<img src="img/FAQ_ques3_1.png" alt="" />
			<img src="img/FAQ_ques3_2.png" alt="" class='spc1'/><br>
			<span>2.打开咪咕视频APP，点击右下角“我的”，在我的界面的左上角，点击扫一扫图标，扫码即可绑定。</span>
			<img src="img/FAQ_ques3_3.png" alt="" class='spc'/><br>
			<span>3.屏幕右下角选中“我的”，选择投电视，扫码添加设备，即可绑定。</span>
			<img src="img/FAQ_ques3_4.png" alt="" class='spc'/>
		</div>
	</body>
</html>
<script src='js/jquery.js'></script>
<script>
	$(".return").on("click",function(){
		window.location.href = 'FAQ_index.jsp'
	})
	
</script>
