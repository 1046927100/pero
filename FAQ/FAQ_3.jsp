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
			<h2><a class='return'></a>我是否可使用多用互动业务？</h2>
			<span>1、未来牌照方版本：未来6712、未来6714、未来8.0（判断方式 请用户进入家庭成员界面 ，点击添加用户，调出二维码界面，确保界面没有“和TV”字样（如下图），则为未来6712、未来6714或8.0版本，支持多屏功能；如果二维码界面有“和TV”字样，不支持多屏功能）<br>2、银河牌照方版本：银河2.0、银河3.0<br>3、咪咕视频版本：ios现网最新版本、安卓现网最新版本</span>
			<img src="img/FAQ_ques1.png" alt="" />
		</div>
	</body>
</html>
<script src='js/jquery.js'></script>
<script>
	$(".return").on("click",function(){
		window.location.href = 'FAQ_index.jsp'
	})
	
</script>
