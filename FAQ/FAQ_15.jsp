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
			<h2>为江苏多屏互动报障模板：</h2>
			<span>【故障发生时间】：2018年10月20日12：00<br>【影响范围】：江苏南京<br>【盒子牌照方】：未来电视/银河<br>【网络环境】：移动宽带有线/无线/4G/热点<br>【故障终端】：MGV2000<br>【机顶盒STBID】：ABCD1234EFGH5678IJKL90<br>【机顶盒账号】：139xxxxxxx<br>【手机型号】：IPHONE X<br>【手机客户端版本号】：咪咕视频V5.4.3<br>【手机客户端登录账号】：139xxxxxxxxx<br>【故障节目类型】：点播/直播/回看<br>【故障节目名称】：cctv1直播<br>【故障现象】：直播投屏失败<br>【手机遥控器界面截屏】：xx</span>
		</div>
	</body>
</html>
<script src='js/jquery.js'></script>

