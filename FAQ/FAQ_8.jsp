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
			h3{
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
			<h3><a class='return'></a>为什么语音搜索会提示“暂不支持该功能”、“频道列表不存在”或者“获取不到频道信息”？</h3>
			<span>初次登陆机顶盒需要对搜索和视频点播功能进行下载激活，语音搜索功能才可以正常使用，具体方法：分别点击首页中的【电视台】【电影】【搜索】完成电视台、点播节目和搜索功能的下载。<br>请重启机顶盒，再次尝试，如问题依然存在，请报给相关技术人员进行处理。</span>
		</div>
	</body>
</html>
<script src='js/jquery.js'></script>
<script>
	$(".return").on("click",function(){
		window.location.href = 'FAQ_index.jsp#go2'
	})
	
</script>
