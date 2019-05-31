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
			.spc{
				padding-bottom: 10px;
				border-bottom: 1px solid #ccc;
				font-size: 16px;
			}
			span{
				display: block;
				margin:10px 0;
			}
			h3{
				display: block;
				margin:10px 0;
				font-size: 14px;
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
			<h3 class='spc'><a class='return'></a>为什么电视端播放的视频，在手机端观看记录中显示灰色，点击后提示“由于版权原因，请去电视端观看”？</h3>
			<h3>此时，请您在手机端用搜索该片：</h3>
			<span>1、如您在手机端搜索不到该片，说明此片不在手机端的内容库中，无法跨屏观看，如您想在手机端观看，请尝试拉屏功能。<br>2、如果您可以在端搜索到该片，说明该片还没有完成电视端和手机端的内容兑换，请联系技术做进一步处理。</span>
		</div>
	</body>
</html>
<script src='js/jquery.js'></script>
<script>
	$(".return").on("click",function(){
		window.location.href = 'FAQ_index.jsp#go1'
	})
	
</script>

