	function sleep (time) {
		return new Promise((resolve) => setTimeout(resolve, time));
	};
	var all = $(".all")[0];
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
	var nanjing = $(".nanjing")[0];
	var black = document.getElementsByClassName("black")[0];
	//预加载
	document.addEventListener("touchstart",function(){
		$(".yancheng").attr("autobuffer","autobuffer");
		$(".huaian").attr("autobuffer","autobuffer");
		$(".lianyungan").attr("autobuffer","autobuffer");
		$(".nantong").attr("autobuffer","autobuffer");
		$(".xuzhou").attr("autobuffer","autobuffer");
		$(".taizhou").attr("autobuffer","autobuffer");
		$(".suzhou").attr("autobuffer","autobuffer");
		$(".wuxi").attr("autobuffer","autobuffer");
		$(".yanzhou").attr("autobuffer","autobuffer");
		$(".zhenjiang").attr("autobuffer","autobuffer");
		$(".changzhou").attr("autobuffer","autobuffer");
		$(".suqian").attr("autobuffer","autobuffer");
		$(".nanjing").attr("autobuffer","autobuffer");
	})
	//解决背景音乐播放的BUG
	function audioAutoPlay(){
		var all = $(".all")[0];
		play =function(){
				all.play();
				window.removeEventListener("touchstart",play,false);
			};
				play();
		window.addEventListener("WeixinJSBridgeReady",function() {
			play();
		},false);
		window.addEventListener('YixinJSBridgeReady',function() {
			play();
		},false);
		window.addEventListener("touchstart",play,false);
	}
	audioAutoPlay();
	
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
	}(window, document))
	
	
//	window.onload = function(){
		
	//食物逐个呈现	
			$(".eight").addClass("show").fadeIn(500,function(){
				$(".four").addClass("show").fadeIn(500,function(){
					$(".f").addClass("show").fadeIn(500,function(){
						$(".three").addClass("show").fadeIn(500,function(){
							$(".two").addClass("show").fadeIn(500,function(){
								$(".two").addClass("show").fadeIn(500,function(){
									$(".c").addClass("show").fadeIn(500,function(){
										$(".a").addClass("show").fadeIn(500,function(){
											$(".d").addClass("show").fadeIn(500,function(){
												$(".nine").addClass("show").fadeIn(500,function(){
													$(".e").addClass("show").fadeIn(500,function(){
														$(".ele").addClass("show").fadeIn(500,function(){
															$(".five").addClass("show").fadeIn(500,function(){
																$(".six").addClass("show").fadeIn(500,function(){
																	$(".ten").addClass("show").fadeIn(500)
																})
															})
														})
													})
												})
											})
										})
									})
								})
							})
						})
					})
				})
			});
		
		//点击弹窗，延时1s
			// 用法
		$(".ziyuan").addClass("flipInX");
		$(".start").addClass("flipInX");
		$(".two").on("click",function(){
			$(".alert").show();
			$(".bb").show();
			$(".no2").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			all.volume = 0.1;
			yancheng.play();
			yancheng.addEventListener("ended",function(){
				all.volume = 1;
			})
		});
		$(".three").on("click",function(){
			$(".alert").show();
			$(".mm").show();
			$(".no13").show();
			huaian.play();
			sleep(400).then(()=>{
				$(".black").show()
			});
			all.volume = 0.1;
			huaian.addEventListener("ended",function(){
				all.volume = 1;
			})
    	});
		$(".four").on("click",function(){
			$(".alert").show();
			$(".dd").show();
			$(".no4").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			all.volume = 0.1;
			lianyungan.play();
			lianyungan.addEventListener("ended",function(){
				all.volume = 1;
			})
		});
		$(".five").on("click",function(){
			$(".alert").show();
			$(".aa").show();
			$(".no1").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			all.volume = 0.1;
			nantong.play();
			nantong.addEventListener("ended",function(){
				all.volume = 1;
			})
		});
		$(".eight").on("click",function(){
			$(".alert").show();
			$(".ee").show();
			$(".no5").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			all.volume = 0.1;
			xuzhou.play();
			xuzhou.addEventListener("ended",function(){
				all.volume = 1;
			})
		});
		$(".nine").on("click",function(){
			$(".alert").show();
			$(".cc").show();
			$(".no3").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			all.volume = 0.1;
			taizhou.play();
			taizhou.addEventListener("ended",function(){
				all.volume = 1;
			})
		});
		$(".ten").on("click",function(){
			$(".alert").show();
			$(".jj").show();
			$(".no10").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			all.volume = 0.1;
			suzhou.play();
			suzhou.addEventListener("ended",function(){
				all.volume = 1;
			})
		});
		$(".ele").on("click",function(){
			$(".alert").show();
			$(".ff").show();
			$(".no6").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			all.volume = 0.1;
			wuxi.play();
			wuxi.addEventListener("ended",function(){
				all.volume = 1;
			})
		});
		$(".a").on("click",function(){
			$(".alert").show();
			$(".ll").show();
			$(".no12").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			all.volume = 0.1;
			nanjing.play();
			nanjing.addEventListener("ended",function(){
				all.volume = 1;
			})
		});
		
		
		$(".c").on("click",function(){
			$(".alert").show();
			$(".gg").show();
			$(".no7").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			yangzhou.play();
			all.volume = 0.1;
			yangzhou.addEventListener("ended",function(){
				all.volume = 1;
			})
		});
		$(".d").on("click",function(){
			$(".alert").show();
			$(".kk").show();
			$(".no11").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			all.volume = 0.1;
			zhenjiang.play();
			zhenjiang.addEventListener("ended",function(){
				all.volume = 1;
			})
		});
		$(".e").on("click",function(){
			$(".alert").show();
			$(".ii").show();
			$(".no9").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			all.volume = 0.1;
			changzhou.play();
			changzhou.addEventListener("ended",function(){
				all.volume = 1;
			})
		});
		$(".f").on("click",function(){
			$(".alert").show();
			$(".hh").show();
			$(".no8").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			all.volume = 0.1;
			suqian.play();
			suqian.addEventListener("ended",function(){
				all.volume = 1;
			})
		});
		//点击弹窗的播放按钮
		$(".no1").on("click",function(){
			all.volume = 0.1;
			nantong.currentTime = 0;
			nantong.play();
			$(".start").attr("src","img/1x(1)/播放语音@3x.png");
			nantong.addEventListener("ended",function(){
				all.volume = 1;
				$(".start").attr("src","img/1x(1)/播放语音1@3x.png");
			})
		});
		$(".no2").on("click",function(){
			all.volume = 0.1;
			yancheng.currentTime = 0;
			yancheng.play();
			$(".start").attr("src","img/1x(1)/播放语音@3x.png");
			yancheng.addEventListener("ended",function(){
				all.volume = 1;
				$(".start").attr("src","img/1x(1)/播放语音1@3x.png");
			})
		});
		$(".no3").on("click",function(){
			all.volume = 0.1;
			taizhou.currentTime = 0;
			taizhou.play();
			$(".start").attr("src","img/1x(1)/播放语音@3x.png");
			taizhou.addEventListener("ended",function(){
				all.volume = 1;
				$(".start").attr("src","img/1x(1)/播放语音1@3x.png");
			})
		});
		$(".no4").on("click",function(){
			all.volume = 0.1;
			lianyungan.currentTime = 0;
			lianyungan.play();
			$(".start").attr("src","img/1x(1)/播放语音@3x.png");
			lianyungan.addEventListener("ended",function(){
				all.volume = 1;
				$(".start").attr("src","img/1x(1)/播放语音1@3x.png");
			})
		});
		$(".no5").on("click",function(){
			all.volume = 0.1;
			xuzhou.currentTime = 0;
			xuzhou.play();
			$(".start").attr("src","img/1x(1)/播放语音@3x.png");
			xuzhou.addEventListener("ended",function(){
				all.volume = 1;
				$(".start").attr("src","img/1x(1)/播放语音1@3x.png");
			})
		});
		$(".no6").on("click",function(){
			all.volume = 0.1;
			wuxi.currentTime = 0;
			wuxi.play();
			$(".start").attr("src","img/1x(1)/播放语音@3x.png");
			wuxi.addEventListener("ended",function(){
				all.volume = 1;
				$(".start").attr("src","img/1x(1)/播放语音1@3x.png");
			})
		});
		$(".no7").on("click",function(){
			all.volume = 0.1;
			yangzhou.currentTime = 0;
			yangzhou.play();
			$(".start").attr("src","img/1x(1)/播放语音@3x.png");
			yangzhou.addEventListener("ended",function(){
				all.volume = 1;
				$(".start").attr("src","img/1x(1)/播放语音1@3x.png");
			})
		});
		$(".no8").on("click",function(){
			all.volume = 0.1;
			suqian.currentTime = 0;
			suqian.play();
			$(".start").attr("src","img/1x(1)/播放语音@3x.png");
			suqian.addEventListener("ended",function(){
				all.volume = 1;
				$(".start").attr("src","img/1x(1)/播放语音1@3x.png");
			})
		});
		$(".no9").on("click",function(){
			all.volume = 0.1;
			changzhou.currentTime = 0;
			changzhou.play();
			$(".start").attr("src","img/1x(1)/播放语音@3x.png");
			changzhou.addEventListener("ended",function(){
				all.volume = 1;
				$(".start").attr("src","img/1x(1)/播放语音1@3x.png");
			})
		});
		$(".no10").on("click",function(){
			all.volume = 0.1;
			suzhou.currentTime = 0;
			suzhou.play();
			$(".start").attr("src","img/1x(1)/播放语音@3x.png");
			suzhou.addEventListener("ended",function(){
				all.volume = 1;
				$(".start").attr("src","img/1x(1)/播放语音1@3x.png");
			})
		});
		$(".no11").on("click",function(){
			all.volume = 0.1;
			zhenjiang.currentTime = 0;
			zhenjiang.play();
			$(".start").attr("src","img/1x(1)/播放语音@3x.png");
			zhenjiang.addEventListener("ended",function(){
				all.volume = 1;
				$(".start").attr("src","img/1x(1)/播放语音1@3x.png");
			})
		});
		$(".no12").on("click",function(){
			all.volume = 0.1;
			nanjing.currentTime = 0;
			nanjing.play();
			$(".start").attr("src","img/1x(1)/播放语音@3x.png");
			nanjing.addEventListener("ended",function(){
				all.volume = 1;
				$(".start").attr("src","img/1x(1)/播放语音1@3x.png");
			})
		});
		$(".no13").on("click",function(){
			all.volume = 0.1;
			huaian.currentTime = 0;
			huaian.play();
			$(".start").attr("src","img/1x(1)/播放语音@3x.png");
			huaian.addEventListener("ended",function(){
				all.volume = 1;
				$(".start").attr("src","img/1x(1)/播放语音1@3x.png");
			})
		});
		//点击关闭按钮
		$(".close").on("click",function(){
			$(".alert").hide();
			$(".ziyuan").hide();
			$(".start").hide();
			$(".black").hide();
			$(".start").attr("src","img/1x(1)/播放语音1@3x.png");
			all.volume = 1;
			yancheng.pause();yancheng.currentTime = 0;huaian.pause();huaian.currentTime = 0;
			lianyungan.pause();lianyungan.currentTime = 0;nantong.pause();nantong.currentTime = 0;
			xuzhou.pause();xuzhou.currentTime = 0;changzhou.pause();changzhou.currentTime = 0;
			taizhou.pause();taizhou.currentTime = 0;suzhou.pause();suzhou.currentTime = 0;
			wuxi.pause();wuxi.currentTime = 0;yangzhou.pause();yangzhou.currentTime = 0;
			zhenjiang.pause();zhenjiang.currentTime = 0;suqian.pause();suqian.currentTime = 0;
			
		})
		//点击分享方块
		$(".squre").on("click",function(){
			$(".share").show();
			$(".black2").show();
		})
		$(".black2").on("click",function(){
			$(".black2").hide();
			$(".share").hide();
		})
		$(".share").on("click",function(){
			$(".share").hide();$(".black2").hide();
		})
		
	//每隔10s取1-13之间的随机数
		var timer = setInterval(function(){
			var randoms = [];
			
			while(true){
				var flag = false;
				var num=Math.floor(Math.random()*13+1);
				for (var i = 0; i<randoms.length; i++) {
		        if (num === num[i]) {
		            flag = true;
		            break;
		        }
		       }
			    // 如果不存在，则添加进去
			    if (!randoms[num]) 
			        randoms.push(num);
			    // 如果有3位随机数了，就跳出
			    if (randoms.length === 5)
			        break;
			};
				$(".food").eq(randoms[0]).removeClass("show").toggleClass("big");
				$(".food").eq(randoms[1]).removeClass("show").toggleClass("big");
				$(".food").eq(randoms[2]).removeClass("show").toggleClass("big");
			},5000)

		
		
//	}