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
			<h2><a class='return'></a>扫描二维码后手机端为什么提示“绑定失败”？</h2>
			<span>建议您确认手机和机顶盒的网络环境是否稳定，例如：手机端是否链接WIFI或4G网络，WIFI和4G功能不要同时打开；在机顶盒的【设置】中，查看机顶盒是否连接宽带或移动网络。</span>
			<img src="img/FAQ_ques4.png" alt="" />
		</div>
	</body>
</html>
<script src='js/jquery.js'></script>
<script>
	$(".return").on("click",function(){
		window.location.href = 'FAQ_index.jsp'
	})
	
</script>
