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
		<meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
		<title>我是否可使用多屏互动业务</title>
	</head>
	<body>
		<div class="banner2">
			<p>·未来牌照方版本：未来6712、未来6714、未来8.0（判断方式 请用户进入家庭成员界面 ，点击添加用户，调出二维码界面，确保界面没有“和TV”字样（如下图），则为未来6712、未来6714或8.0版本，支持多屏功能；如果二维码界面有“和TV”字样，不支持多屏功能）</p>
			<p>·银河牌照方版本：银河2.0、银河3.0</p>
			<p>·咪咕视频版本：ios现网最新版本、安卓现网最新版本</p>
			<img src="img/FAQ_ques1.png" alt="" />
		</div>
	</body>
</html>
<script type="text/javascript">
	//	适配移动端页面大小的方法
	var a = document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
	var scale = 1 / devicePixelRatio;
	document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
	(function flexible (window, document) {
	  var docEl = document.documentElement
	  var dpr = window.devicePixelRatio || 1
	  // adjust body font size
	  function setBodyFontSize () {
	    if (document.body) {
	      document.body.style.fontSize = (12 * dpr) + 'px'
	    }
	    else {
	      document.addEventListener('DOMContentLoaded', setBodyFontSize)
	    }
	  }
	  setBodyFontSize();
	  // set 1rem = viewWidth / 10
	  function setRemUnit () {
	    var rem = docEl.clientWidth / 10
	    docEl.style.fontSize = rem + 'px'
	  }
	  setRemUnit()
	  // reset rem unit on page resize
	  window.addEventListener('resize', setRemUnit)
	  window.addEventListener('pageshow', function (e) {
	    if (e.persisted) {
	      setRemUnit()
	    }
	  })
	
	  // detect 0.5px supports
	  if (dpr >= 2) {
	    var fakeBody = document.createElement('body')
	    var testElement = document.createElement('div')
	    testElement.style.border = '.5px solid transparent'
	    fakeBody.appendChild(testElement)
	    docEl.appendChild(fakeBody)
	    if (testElement.offsetHeight === 1) {
	      docEl.classList.add('hairlines')
	    }
	    docEl.removeChild(fakeBody)
	  }
	}(window, document));
</script>