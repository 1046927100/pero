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
				width:100%;
				border: 0 none;
			}
			h2{
				padding-bottom: 10px;
				border-bottom: 1px solid #ccc;
				font-size: 16px;
				margin-top:30px;
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
			<h2>为什么语音搜索时电视端无任何提示？</h2>
			<span>中兴厂家的盒子需要在【设置】中将智能语音功能开启，进入盒子【设置】页面-【语言和输入法】开启智能语音功能。</span>
			<img src='img/FAQ_ques8.png'></img>
		</div>
	</body>
</html>
<script src='js/jquery.js'></script>
