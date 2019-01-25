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
	}(window, document))
	
	//页面加载后执行的函数
	window.load= (function aa(){
		var all = $(".all")[0];
		all.play(); 
		var yancheng = $(".yancheng")[0];
		var huaian = $(".huaian")[0];
		var lianyungan = $(".lianyungan")[0];
		var nantong = $(".nantong")[0];
		var xuzhou = $(".xuzhou")[0];
		var taizhou = $(".taizhou")[0];
		var suzhou = $(".suzhou")[0];
		var wuxi = $(".wuxi")[0];
		var yangzhou = $(".yanzhou")[0];
		var zhenjiang = $(".zhenjiang")[0];
		var changzhou = $(".changzhou")[0];
		var suqian = $(".suqian")[0];
		$(".food").fadeIn(2000).addClass("show");
		//点击弹窗
		$(".ziyuan").addClass("flipInX");
		$(".start").addClass("flipInX");
		$(".two").on("click",function(){
			$(".alert").show();
			$(".bb").show();
			yancheng.play();
		});
		$(".three").on("click",function(){
			$(".alert").show();
			$(".mm").show();
			huaian.play();
			if (huaian.paused) {
        		huaian.play(); 
    		}else{
	        	huaian.pause();
			}
    		});
		$(".four").on("click",function(){
			$(".alert").show();
			$(".dd").show();
			lianyungan.play();
		});
		$(".five").on("click",function(){
			$(".alert").show();
			$(".aa").show();
			nantong.play();
		});
		$(".eight").on("click",function(){
			$(".alert").show();
			$(".ee").show();
			xuzhou.play();
		});
		$(".nine").on("click",function(){
			$(".alert").show();
			$(".cc").show();
			taizhou.play();
		});
		$(".ten").on("click",function(){
			$(".alert").show();
			$(".jj").show();
			suzhou.play();
		});
		$(".ele").on("click",function(){
			$(".alert").show();
			$(".ff").show();
			wuxi.play();
		});
		$(".a").on("click",function(){
			$(".alert").show();
			$(".ll").show();
			
		});
		$(".c").on("click",function(){
			$(".alert").show();
			$(".gg").show();
			yangzhou.play();
		});
		$(".d").on("click",function(){
			$(".alert").show();
			$(".kk").show();
			zhenjiang.play();
		});
		$(".e").on("click",function(){
			$(".alert").show();
			$(".ii").show();
			changzhou.play();
		});
		$(".f").on("click",function(){
			$(".alert").show();
			$(".hh").show();
			suqian.play();
		});
		//
		var ale = document.getElementsByClassName("alert")[0];
		if($(".alert").css("display") == "none"){
			$(".black").hide();
			console.log(111)
		}else{
			$(".black").show();
		}
		//点击播放按钮
		/*$(".start").on("click",function(){
			if($(".start").css("src") == "img/1x(1)/播放语音1@3x.png"){
				 $(".start").css("src","img/1x(1)/播放语音@3x.png")
			}else{
				$(".start").css("src","img/1x(1)/播放语音1@3x.png")
			}
		});*/
		$(".no1").on("click",function(){
	
		});
		$(".no2").on("click",function(){
			$(".lianyungan").play();
		});
		//点击关闭按钮
		$(".close").on("click",function(){
			$(".alert").hide();
			$(".ziyuan").hide();
		})
		
		
	})()
	