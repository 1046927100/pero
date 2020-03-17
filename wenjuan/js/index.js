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
	
	//其它按钮点击出现文本框
	
	var a11 = [];
	var b11 = null;
	for (var i = 0; i <= big4.length-1; i++) {	
	  a11[i] = big4[i];	
	  big4[i].onclick = function () {
	    b11 = a11.indexOf(this)+1 ;
	    $(".list2").hide();
	    console.log("点击了第" + b11 + "个选项。");
		var bbq = $(".big41").prop("checked");
	    	if(bbq==true){
	    		console.log("2")
				$(".alone").addClass("animated fadeInRight").show();
			}else{
				$(".alone").hide();
				$('.danger').hide();
			}
	    }
	  }
	
	var a12 = [];
	var b12 = null;
	for (var i = 0; i <= son5.length-1; i++) {	
	  a12[i] = son5[i];	
	  son5[i].onclick = function () {
	    b12 = a12.indexOf(this)+1 ;
	    $(".list5").hide();
	    console.log("点击了第" + b12 + "个选项。");
		var bbq = $(".son55").prop("checked");
	    	if(bbq==true){
	    		console.log("2")
				$(".alone").addClass("animated fadeInRight").show();
			}else{
				$(".alone").hide();
				$('.danger').hide();
			}
	    }
	  }
	

	
	
//	问题1
	var arry = [];
	var nowIndex = null;
	for (var i = 0; i <= ques.length-1; i++) {	
	  arry[i] = ques[i];	
	  ques[i].onclick = function () {
	    nowIndex = arry.indexOf(this)+1 ;
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
	    	//如果选大学
	    	if(b1==4){
	    		$(".app1").html('网易公开课');
	    		$(".app2").html('腾讯课堂');
	    		$(".app3").html('小猿搜题');
	    		$(".app4").html('喜马拉雅');
	    		$(".app5").html('新东方');
	    		$(".app6").html('得到');
	    		$(".app7").html('知乎');
	    	} 	
	  }
	}
	
	//大人问题3
	var startX,//触摸时的坐标
	    startY,
	    x, //滑动的距离
	    y,
	    aboveY=0; //设一个全局变量记录上一次内部块滑动的位置 
	 function touchStart(e){//触摸
//              e.preventDefault();
                var touch=e.touches[0];
                startY = touch.pageY;   //刚触摸时的坐标            
            }
	
	function touchMove(e){//滑动          
                 var len4=$("input[name='radio3']:checked()");		
	                var  touch = e.touches[0];               
	                 y = touch.pageY - startY;//滑动的距离
	//              inner.style.top=aboveY+y+"px"; //这一句中的aboveY是inner上次滑动后的位置       
					if(y<=-50){
						if(len4.length>0){
   							$(".sec3").hide();
		    				$(".sec4").addClass("animated fadeInUp").show();
						}else{
							$(".list1").addClass("animated fadeInRight").show();
						}		
					}                
           }
	
		var a2 = [];
		var b2 = null;
		for (var i = 0; i <= big3.length-1; i++) {
		  a2[i] = big3[i];
		  big3[i].onclick = function () {
		    b2 = a2.indexOf(this)+1 ;
		    console.log("点击了第" + b2 + "个选项。");
		    	$(".list1").hide();
		  }
		}
	
	
	document.getElementsByClassName("sec3")[0].addEventListener('touchstart',touchStart,false);
	document.getElementsByClassName("sec3")[0].addEventListener('touchmove',touchMove,false);
	
	//大人问题4
	function touchMove1(e){//滑动          
                 var len5=$("input[name='radio4']:checked()");		
	                var  touch = e.touches[0];               
	                 y = touch.pageY - startY;//滑动的距离
	//              inner.style.top=aboveY+y+"px"; //这一句中的aboveY是inner上次滑动后的位置       
					if(y<=-50){
						if(len5.length>0){
							var bbq = $(".big41").prop("checked")
							if(bbq == true){
								if($(".alone")[0].value ==''){
									$(".danger").addClass("animated fadeInRight").show();
								}else{
									$(".danger").hide();
									$(".sec4").hide();
		    						$(".sec7").addClass("animated fadeInUp").show();
								}
							}else if(bbq == false){
								$(".sec4").hide();
		    					$(".sec7").addClass("animated fadeInUp").show();
							}	
						}else{
							$(".list2").addClass("animated fadeInRight").show();
						}		
					}                 
          }
	
	
	document.getElementsByClassName("sec4")[0].addEventListener('touchstart',touchStart,false);
	document.getElementsByClassName("sec4")[0].addEventListener('touchmove',touchMove1,false);
	
	//大人问题4.1
//	var oTxt = document.getElementsByClassName("text1")[0];
//	var btn = document.getElementsByClassName("btn")[0];
//	function isnull(val) {
//      var str = val.replace(/(^\s*)|(\s*$)/g, '');//去除空格;
//      var han = val.replace(/^[A-Za-z0-9\u4e00-\u9fa5]/);
//      if (str == '' || str == undefined || str == null){
//          //return true;
////          console.log('空');
//          $(".btn").css("background","skyblue")
//      } else if(str = han){
//          //return false;
////          console.log('非空');
//          $(".btn").css("background","blue")
//          
//      }
//  }
//	$('.text1').bind('keyup', function () {
//		isnull(oTxt.value)
//	})
//	$(".btn").on("click",function(){
//		if(btn.style.background == "blue"){
//			$(".sec41").hide();
//	   		$(".sec7").addClass("animated fadeInUp").show();
//		}else{
//			return
//		}
//	})

	
	//大人问题5
	function touchMove2(e){//滑动          
	                var len6=$("input[name='radio7']:checked()");		
	                var  touch = e.touches[0];               
	                 y = touch.pageY - startY;//滑动的距离
	//              inner.style.top=aboveY+y+"px"; //这一句中的aboveY是inner上次滑动后的位置       
					if(y<=-50){
						if(len6.length>0){
   							$(".sec7").hide();
		    				$(".sec8").addClass("animated fadeInUp").show();
						}else{
							$(".list3").addClass("animated fadeInRight").show();
						}		
					}                  
	           }
	
		var a4 = [];
		var b4 = null;
		for (var i = 0; i <= big7.length-1; i++) {
		  a4[i] = big7[i];
		  big7[i].onclick = function () {
		    b4= a4.indexOf(this)+1 ;
		    console.log("点击了第" + b4 + "个选项。");
		    	$(".list3").hide();
		  }
		}
		document.getElementsByClassName("sec7")[0].addEventListener('touchstart',touchStart,false);
		document.getElementsByClassName("sec7")[0].addEventListener('touchmove',touchMove2,false);
		
	//大人问题6
	function touchMove3(e){//滑动          
	                 var len8=$("input[name='radio8']:checked()");		
	                var  touch = e.touches[0];               
	                 y = touch.pageY - startY;//滑动的距离
	//              inner.style.top=aboveY+y+"px"; //这一句中的aboveY是inner上次滑动后的位置       
					if(y<=-50){
						if(len8.length>0){
   							$(".sec8").hide();
		    				$(".last").addClass("animated fadeInUp").show();
						}else{
							$(".list4").addClass("animated fadeInRight").show();
						}		
					}                  
	           }
	
		var a7 = [];
		var b7 = null;
		for (var i = 0; i <= big8.length-1; i++) {
		  a7[i] = big8[i];
		  big8[i].onclick = function () {
		    b7= a7.indexOf(this)+1 ;
		    console.log("点击了第" + b7 + "个选项。");
		    	$(".list4").hide();
		  }
		}
		document.getElementsByClassName("sec8")[0].addEventListener('touchstart',touchStart,false);
		document.getElementsByClassName("sec8")[0].addEventListener('touchmove',touchMove3,false);
	
	
	
	
	
	
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
			//如果选大学
	    	if(b8==4){
	    		$(".app1").html('网易公开课');
	    		$(".app2").html('腾讯课堂');
	    		$(".app3").html('小猿搜题');
	    		$(".app4").html('喜马拉雅');
	    		$(".app5").html('新东方');
	    		$(".app6").html('得到');
	    		$(".app7").html('知乎');
	    	}
	  }
	}
	
//小孩问题2
	function touchMove4(e){//滑动          
	                var len3=$("input[name='radio4']:checked()");		
	                var  touch = e.touches[0];               
	                 y = touch.pageY - startY;//滑动的距离
	//              inner.style.top=aboveY+y+"px"; //这一句中的aboveY是inner上次滑动后的位置       
					if(y<=-50){
						if(len3.length>0){
							var bbq = $(".son55").prop("checked")
							console.log(bbq)
							if(bbq == true){
								if($(".alone")[1].value ==''){
									$(".danger").addClass("animated fadeInRight").show();
								}else{
									$(".danger").hide();
									$(".thr5").hide();
		    						$(".thr6").addClass("animated fadeInUp").show();
								}
							}else if(bbq == false){
								$(".thr5").hide();
		    					$(".thr6").addClass("animated fadeInUp").show();
							}	
						}else{
							$(".list5").addClass("animated fadeInRight").show();
						}		
					}                   
	           }
		document.getElementsByClassName("thr5")[0].addEventListener('touchstart',touchStart,false);
		document.getElementsByClassName("thr5")[0].addEventListener('touchmove',touchMove4,false);
		
//小孩问题2.1
	
	
//小孩问题3
	var a6 = [];
	var b6 = null;
	for (var i = 0; i <= son6.length-1; i++) {
	  a6[i] = son6[i];
	  son6[i].onclick = function () {
	    b6 = a6.indexOf(this)+1 ;
	    console.log("点击了第" + b6 + "个选项。");
	    	$(".thr6").hide();
	    	$(".thr").addClass("animated fadeInUp").show();
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


	function touchMove5(e){//滑动          
					var len=$("input[name='radio71']:checked()");		
	                 var  touch = e.touches[0];               
	                 y = touch.pageY - startY;//滑动的距离
	//              inner.style.top=aboveY+y+"px"; //这一句中的aboveY是inner上次滑动后的位置       
					if(y<=-50){
						if(len.length>0){
   							$(".thr2").hide();
		    				$(".thr3").addClass("animated fadeInUp").show();
						}else{
							$(".list6").addClass("animated fadeInRight").show();
						}		
					}                 
	           }
		document.getElementsByClassName("thr2")[0].addEventListener('touchstart',touchStart,false);
		document.getElementsByClassName("thr2")[0].addEventListener('touchmove',touchMove5,false);
		var a9 = [];
		var b9 = null;
		for (var i = 0; i <= son2.length-1; i++) {
		  a9[i] = son2[i];
		  son2[i].onclick = function () {
		    b9= a9.indexOf(this)+1 ;
		    console.log("点击了第" + b9 + "个选项。");
		    	$(".list6").hide();
		  }
		}
	
	//小孩问题6
	
	function touchMove6(e){//滑动          
					var len2=$("input[name='radio8']:checked()");
	                 var  touch = e.touches[0];               
	                 y = touch.pageY - startY;//滑动的距离
	//              inner.style.top=aboveY+y+"px"; //这一句中的aboveY是inner上次滑动后的位置       
					if(y<=-50){
						if(len2.length>0){
   							$(".thr3").hide();
		    				$(".last").addClass("animated fadeInUp").show();
						}else{		
							$(".list7").addClass("animated fadeInRight").show();
						}					
					}                 
	           }
		document.getElementsByClassName("thr3")[0].addEventListener('touchstart',touchStart,false);
		document.getElementsByClassName("thr3")[0].addEventListener('touchmove',touchMove6,false);
		var a10 = [];
		var b10 = null;
		for (var i = 0; i <= son3.length-1; i++) {
		  a10[i] = son3[i];
		  son3[i].onclick = function () {
		    b10= a10.indexOf(this)+1 ;
		    console.log("点击了第" + b10 + "个选项。");
		    	$(".list7").hide();
		  }
		}
		
		
//文本框点击值消失
	$(".alone").on("click",function(){
		$(".danger").hide();
	})
	
