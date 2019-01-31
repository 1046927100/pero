	function sleep (time) {
		return new Promise((resolve) => setTimeout(resolve, time));
	};

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
	var bgmusic = $(".bgmusic")[0];
	var black = document.getElementsByClassName("black")[0];
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
	
	
	window.onload = function(){
	//背景音乐播放	
			bgmusic.play();
			function audioAutoPlay(){
				play =function(){
					bgmusic.play();
					window.removeEventListener("touchstart",play,false);
				};
				window.addEventListener('YixinJSBridgeReady',function() {
					bgmusic.play();
				},false);
				window.addEventListener("touchstart",play,false);
			}
			audioAutoPlay();
	//食物逐个呈现	
			$(".eight").addClass("show").fadeIn(333,function(){
				$(".four").addClass("show").fadeIn(333,function(){
					$(".f").addClass("show").fadeIn(333,function(){
						$(".three").addClass("show").fadeIn(333,function(){
							$(".two").addClass("show").fadeIn(333,function(){
								$(".two").addClass("show").fadeIn(333,function(){
									$(".c").addClass("show").fadeIn(333,function(){
										$(".a").addClass("show").fadeIn(333,function(){
											$(".d").addClass("show").fadeIn(333,function(){
												$(".nine").addClass("show").fadeIn(333,function(){
													$(".e").addClass("show").fadeIn(333,function(){
														$(".ele").addClass("show").fadeIn(333,function(){
															$(".five").addClass("show").fadeIn(333,function(){
																$(".six").addClass("show").fadeIn(333,function(){
																	$(".ten").addClass("show").fadeIn(333)
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
		//控制背景音乐
		$(".music").on("click",function(){
			$(".music").toggleClass("round")
			if(bgmusic.paused){
				bgmusic.play();
			}else{
				bgmusic.pause();
			}
		});
		//点击弹窗，延时
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
			yancheng.play();
			yancheng.addEventListener("ended",function(){
				$(".start").attr("src","img/1x(1)/11@3x.png");
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
			huaian.addEventListener("ended",function(){
			$(".start").attr("src","img/1x(1)/11@3x.png");
			})
    	});
		$(".four").on("click",function(){
			$(".alert").show();
			$(".dd").show();
			$(".no4").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			lianyungan.play();
			lianyungan.addEventListener("ended",function(){
			$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".five").on("click",function(){
			$(".alert").show();
			$(".aa").show();
			$(".no1").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			nantong.play();
			nantong.addEventListener("ended",function(){
			$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".eight").on("click",function(){
			$(".alert").show();
			$(".ee").show();
			$(".no5").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			xuzhou.play();
			xuzhou.addEventListener("ended",function(){
			$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".nine").on("click",function(){
			$(".alert").show();
			$(".cc").show();
			$(".no3").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			taizhou.play();
			taizhou.addEventListener("ended",function(){
			$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".ten").on("click",function(){
			$(".alert").show();
			$(".jj").show();
			$(".no10").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			suzhou.play();
			suzhou.addEventListener("ended",function(){
			$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".ele").on("click",function(){
			$(".alert").show();
			$(".ff").show();
			$(".no6").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			wuxi.play();
			wuxi.addEventListener("ended",function(){
			$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".a").on("click",function(){
			$(".alert").show();
			$(".ll").show();
			$(".no12").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			nanjing.play();
			nanjing.addEventListener("ended",function(){
			$(".start").attr("src","img/1x(1)/11@3x.png");
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
			yangzhou.addEventListener("ended",function(){
			$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".d").on("click",function(){
			$(".alert").show();
			$(".kk").show();
			$(".no11").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			zhenjiang.play();
			zhenjiang.addEventListener("ended",function(){
			$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".e").on("click",function(){
			$(".alert").show();
			$(".ii").show();
			$(".no9").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			changzhou.play();
			changzhou.addEventListener("ended",function(){
			$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".f").on("click",function(){
			$(".alert").show();
			$(".hh").show();
			$(".no8").show();
			sleep(400).then(()=>{
				$(".black").show()
			})
			suqian.play();
			suqian.addEventListener("ended",function(){
			$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		//点击弹窗的播放按钮
		$(".no1").on("click",function(){
			nantong.currentTime = 0;
			nantong.play();
			$(".start").attr("src","img/1x(1)/1@3x.png");
			nantong.addEventListener("ended",function(){
				$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".no2").on("click",function(){
			yancheng.currentTime = 0;
			yancheng.play();
			$(".start").attr("src","img/1x(1)/1@3x.png");
			yancheng.addEventListener("ended",function(){
				$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".no3").on("click",function(){
			taizhou.currentTime = 0;
			taizhou.play();
			$(".start").attr("src","img/1x(1)/1@3x.png");
			taizhou.addEventListener("ended",function(){

				$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".no4").on("click",function(){
			lianyungan.currentTime = 0;
			lianyungan.play();
			$(".start").attr("src","img/1x(1)/1@3x.png");
			lianyungan.addEventListener("ended",function(){

				$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".no5").on("click",function(){

			xuzhou.currentTime = 0;
			xuzhou.play();
			$(".start").attr("src","img/1x(1)/1@3x.png");
			xuzhou.addEventListener("ended",function(){

				$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".no6").on("click",function(){

			wuxi.currentTime = 0;
			wuxi.play();
			$(".start").attr("src","img/1x(1)/1@3x.png");
			wuxi.addEventListener("ended",function(){

				$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".no7").on("click",function(){

			yangzhou.currentTime = 0;
			yangzhou.play();
			$(".start").attr("src","img/1x(1)/1@3x.png");
			yangzhou.addEventListener("ended",function(){

				$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".no8").on("click",function(){

			suqian.currentTime = 0;
			suqian.play();
			$(".start").attr("src","img/1x(1)/1@3x.png");
			suqian.addEventListener("ended",function(){

				$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".no9").on("click",function(){

			changzhou.currentTime = 0;
			changzhou.play();
			$(".start").attr("src","img/1x(1)/1@3x.png");
			changzhou.addEventListener("ended",function(){

				$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".no10").on("click",function(){

			suzhou.currentTime = 0;
			suzhou.play();
			$(".start").attr("src","img/1x(1)/1@3x.png");
			suzhou.addEventListener("ended",function(){

				$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".no11").on("click",function(){

			zhenjiang.currentTime = 0;
			zhenjiang.play();
			$(".start").attr("src","img/1x(1)/1@3x.png");
			zhenjiang.addEventListener("ended",function(){

				$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".no12").on("click",function(){

			nanjing.currentTime = 0;
			nanjing.play();
			$(".start").attr("src","img/1x(1)/1@3x.png");
			nanjing.addEventListener("ended",function(){

				$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		$(".no13").on("click",function(){

			huaian.currentTime = 0;
			huaian.play();
			$(".start").attr("src","img/1x(1)/1@3x.png");
			huaian.addEventListener("ended",function(){

				$(".start").attr("src","img/1x(1)/11@3x.png");
			})
		});
		//点击关闭按钮
		$(".close").on("click",function(){
			$(".alert").hide();
			$(".ziyuan").hide();
			$(".start").hide();
			$(".black").hide();
			$(".start").attr("src","img/1x(1)/11@3x.png");

			yancheng.pause();yancheng.currentTime = 0;huaian.pause();huaian.currentTime = 0;
			lianyungan.pause();lianyungan.currentTime = 0;nantong.pause();nantong.currentTime = 0;
			xuzhou.pause();xuzhou.currentTime = 0;changzhou.pause();changzhou.currentTime = 0;
			taizhou.pause();taizhou.currentTime = 0;suzhou.pause();suzhou.currentTime = 0;
			wuxi.pause();wuxi.currentTime = 0;yangzhou.pause();yangzhou.currentTime = 0;
			zhenjiang.pause();zhenjiang.currentTime = 0;suqian.pause();suqian.currentTime = 0;
			nanjing.pause();nanjing.currentTime =0;
			
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
			$(".share").hide();
			$(".black2").hide();
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
			    if (randoms.indexOf(num,0) == -1) 
			        randoms.push(num);
			    // 如果有3位随机数了，就跳出
			    if (randoms.length ===7)
			        break;
			        
			};
				$(".food").eq(randoms[0]).removeClass("show").toggleClass("big");
				$(".food").eq(randoms[1]).removeClass("show").toggleClass("big");
				$(".food").eq(randoms[2]).removeClass("show").toggleClass("big");
				$(".food").eq(randoms[3]).removeClass("show").toggleClass("big");
				$(".food").eq(randoms[4]).removeClass("show").toggleClass("big");
				$(".food").eq(randoms[5]).removeClass("show").toggleClass("big");
				$(".food").eq(randoms[6]).removeClass("show").toggleClass("big");
				
			},5000)
	

	
	   // 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
		onBridgeReady = function(){
			bgmusic.play();
			}
	   document.addEventListener('WeixinJSBridgeReady',onBridgeReady, false);
	    
	   
	};
	
	
	
	$(function(){
		//微信分享好友
	   var link = location.href;
		$(function(){
		    var url = location.href.split('#').toString();//url不能写死	    
		    $.ajax({
		        type : "get",
		        url : "http://dga6tc.natappfree.cc",
		        dataType : "json",
		        async : false,
		        data:{url:url},
		        success : function(data) {
		        	console.log(data)
		            wx.config({
		                debug: false,////生产环境需要关闭debug模式
		                appId: data.appid,//appId通过微信服务号后台查看
		                timestamp: data.timestamp,//生成签名的时间戳
		                nonceStr: data.nonceStr,//生成签名的随机字符串
		                signature: data.signature,//签名
		                jsApiList: [//需要调用的JS接口列表
		                    'checkJsApi',//判断当前客户端版本是否支持指定JS接口
		                    'onMenuShareTimeline',//分享给好友
		                    'onMenuShareAppMessage'//分享到朋友圈
		                ]
		            });
		        },
		        error: function(xhr, status, error) {
		            //alert(status);
		            //alert(xhr.responseText);
		        }
		    })
		});
	   
	   wx.ready(function () {
	        var link = window.location.href;
	        var host = window.location.host;
	        //分享朋友圈
	        wx.onMenuShareTimeline({
	            title: '家乡的味道',
	            link: link,
	            imgUrl: "img/pic300.jpg",// 自定义图标
	            trigger: function (res) {
	                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回.
	                //alert('click shared');
	            },
	            success: function (res) {
	                //alert('shared success');
	                //some thing you should do
	            },
	            cancel: function (res) {
	                //alert('shared cancle');
	            },
	            fail: function (res) {
	                //alert(JSON.stringify(res));
	            }
	        });
	        //分享给好友
	        wx.onMenuShareAppMessage({
	            title: '家乡的味道！', // 分享标题
	            desc: '家的味道我知道！', // 分享描述
	            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
	            imgUrl: 'img/pic300.jpg', // 自定义图标
	            type: 'link', // 分享类型,music、video或link，不填默认为link
	            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
	            success: function () {
	                // 用户确认分享后执行的回调函数
	            },
	            cancel: function () {
	                // 用户取消分享后执行的回调函数
	            }
	        });
	        wx.error(function (res) {
	            alert(res.errMsg);
	        });
	    });
	});
