//	适配移动端页面大小的方法
	var a = document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
	var scale = 1 / devicePixelRatio;
	document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + 1 + ', maximum-scale=' + 1 + ', minimum-scale=' + 1 + ', user-scalable=no');
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
	
	
	//用户选定事件
	var ques = document.getElementsByClassName("one");
	var big1 = document.getElementsByClassName("big1");
	var big2 = document.getElementsByClassName("big2");
	var big3 = document.getElementsByClassName("big3");
	var big4 = document.getElementsByClassName("big4");
	var big5 = document.getElementsByClassName("big5");
	var big6 = document.getElementsByClassName("big6");
	var big7 = document.getElementsByClassName("big7");
	var big8 = document.getElementsByClassName("big8");
	var son1 = document.getElementsByClassName("son1");
	var son2 = document.getElementsByClassName("son2");
	var son3 = document.getElementsByClassName("son3");
	var son4 = document.getElementsByClassName("son4");
	var son5 = document.getElementsByClassName("son5");
	var son6 = document.getElementsByClassName("son6");
	
//	问题1
	var arry = [];
	var nowIndex = null;
	for (var i = 0; i <= ques.length-1; i++) {	
	  arry[i] = ques[i];	
	  ques[i].onclick = function () {
	    nowIndex = arry.indexOf(this)+1 ;
	    console.log(this)
	    console.log("点击了第" + nowIndex + "个选项。");
	    if(nowIndex==1||nowIndex==2||nowIndex==4){
	    	$(".first").hide();
	    	$(".sec").addClass("animated fadeInUp").show();
	    }else if(nowIndex==3){
	    	$(".first").hide();
	    	$(".thr4").addClass("animated fadeInUp").show();
//	    }else{
//	    	$(".first").hide();
//	    	$(".last").addClass("animated fadeInUp").show();
	    }
	  }
	}
	
//	大人问题1
	var a = [];
	var b = null;
	for (var i = 0; i <= big1.length-1; i++) {
	  a[i] = big1[i];
	  big1[i].onclick = function () {
	    b = a.indexOf(this)+1 ;
	    console.log("点击了第" + b + "个选项。");
	    	$(".sec").hide();
	    	$(".sec2").addClass("animated fadeInUp").show();
	  }
	}
	
	//大人问题2
	var a1 = [];
	var b1 = null;
	for (var i = 0; i <= big2.length-1; i++) {
	  a1[i] = big2[i];
	  big2[i].onclick = function () {
	    b1 = a1.indexOf(this)+1 ;
	    console.log("点击了第" + b1 + "个选项。");
	    	$(".sec2").hide();
	    	$(".sec3").addClass("animated fadeInUp").show();
	  }
	}
	
	//大人问题3
	var a2 = [];
	var b2 = null;
	for (var i = 0; i <= big3.length-1; i++) {
	  a2[i] = big3[i];
	  big3[i].onclick = function () {
	    b2 = a2.indexOf(this)+1 ;
	    console.log("点击了第" + b2 + "个选项。");
	    	$(".sec3").hide();
	    	$(".sec4").addClass("animated fadeInUp").show();
	  }
	}
	
	//大人问题4
	var a3 = [];
	var b3 = null;
	for (var i = 0; i <= big4.length-1; i++) {
	  a3[i] = big4[i];
	  big4[i].onclick = function () {
	    b3 = a3.indexOf(this)+1 ;
	    console.log("点击了第" + b3 + "个选项。");
	    	$(".sec4").hide();
	    	$(".sec5").addClass("animated fadeInUp").show();
	  }
	}
	
	//大人问题5
	var a4 = [];
	var b4 = null;
	for (var i = 0; i <= big5.length-1; i++) {
	  a4[i] = big5[i];
	  big5[i].onclick = function () {
	    b4 = a4.indexOf(this)+1 ;
	    console.log("点击了第" + b4 + "个选项。");
	    	$(".sec5").hide();
			$(".sec6").addClass("animated fadeInUp").show();
	  }
	}
	
	//大人问题6
	var a41 = [];
	var b41 = null;
	for (var i = 0; i <= big6.length-1; i++) {
	  a41[i] = big6[i];
	  big6[i].onclick = function () {
	    b41 = a41.indexOf(this)+1 ;
	    console.log("点击了第" + b41 + "个选项。");
	    	$(".sec6").hide();
			$(".sec7").addClass("animated fadeInUp").show();
	  }
	}
	
	//大人问题7
	var a42 = [];
	var b42 = null;
	for (var i = 0; i <= big7.length-1; i++) {
	  a42[i] = big7[i];
	  big7[i].onclick = function () {
	    b42 = a42.indexOf(this)+1 ;
	    console.log("点击了第" + b42 + "个选项。");
	    	$(".sec7").hide();
			$(".sec8").addClass("animated fadeInUp").show();
	  }
	}
	
	//大人问题8
	var a43 = [];
	var b43 = null;
	for (var i = 0; i <= big8.length-1; i++) {
	  a43[i] = big8[i];
	  big8[i].onclick = function () {
	    b43 = a43.indexOf(this)+1 ;
	    console.log("点击了第" + b43 + "个选项。");
	    	$(".sec8").hide();
			$(".last").addClass("animated fadeInUp").show();
	  }
	}
	
	
	
	
	//小孩问题4
	var a5 = [];
	var b5 = null;
	for (var i = 0; i <= son1.length-1; i++) {
	  a5[i] = son1[i];
	  son1[i].onclick = function () {
	    b5 = a5.indexOf(this)+1 ;
	    console.log("点击了第" + b5 + "个选项。");
	    	$(".thr").hide();
	    	$(".thr2").addClass("animated fadeInUp").show();
	  }
	}
	
	//小孩问题5
	var a6 = [];
	var b6 = null;
	for (var i = 0; i <= son2.length-1; i++) {
	  a6[i] = son2[i];
	  son2[i].onclick = function () {
	    b6 = a6.indexOf(this)+1 ;
	    console.log("点击了第" + b6 + "个选项。");
	    	$(".thr2").hide();
	    	$(".thr3").addClass("animated fadeInUp").show();
	    	
	  }
	}
	
	//小孩问题6
	var a7 = [];
	var b7 = null;
	for (var i = 0; i <= son3.length-1; i++) {
	  a7[i] = son3[i];
	  son3[i].onclick = function () {
	    b7 = a7.indexOf(this)+1 ;
	    console.log("点击了第" + b7 + "个选项。");
	    	$(".thr3").hide();
			$(".last").addClass("animated fadeInUp").show();  	
	  }
	}
	
//小孩问题1
	var a8 = [];
	var b8 = null;
	for (var i = 0; i <= son4.length-1; i++) {
	  a8[i] = son4[i];
	  son4[i].onclick = function () {
	    b8 = a8.indexOf(this)+1 ;
	    console.log("点击了第" + b8 + "个选项。");
	    	$(".thr4").hide();
			$(".thr5").addClass("animated fadeInUp").show();  	
	  }
	}
	
//小孩问题2
	var a9 = [];
	var b9 = null;
	for (var i = 0; i <= son5.length-1; i++) {
	  a9[i] = son5[i];
	  son5[i].onclick = function () {
	    b9 = a9.indexOf(this)+1 ;
	    console.log("点击了第" + b9 + "个选项。");
	    	$(".thr5").hide();
			$(".thr6").addClass("animated fadeInUp").show();  	
	  }
	}
	
//小孩问题3
	var a10 = [];
	var b10 = null;
	for (var i = 0; i <= son6.length-1; i++) {
	  a10[i] = son6[i];
	  son6[i].onclick = function () {
	    b10 = a10.indexOf(this)+1 ;
	    console.log("点击了第" + b10 + "个选项。");
	    	$(".thr6").hide();
			$(".thr").addClass("animated fadeInUp").show();  	
	  }
	}