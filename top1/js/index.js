// 初始化
$(function () {
    if($.getUrlParam("platform") == "android" || $.getUrlParam("platform") == "ios"){
        window.isWebView = true;
    }
    if(window.isWebView){
        window.mnWebMain.init(function () {
            
        })
    }
  
}) 


//定位链接
	var lj = document.getElementsByClassName("lianjie");
	var lj2 = document.getElementsByClassName("lianjie2");
	for(var i=0;i<lj.length;i++){
		if(i==0){
			lj[i].style.top = 586+"px"
		}else if(i>=10&i<15){
			lj[i].style.top = 586+453*i+"px"
		}else if(i==15){
			lj[i].style.top = 7432+"px"
		}else if(i==16){
			lj[i].style.top = 7940+"px"
		}else if(i==17){
			lj[i].style.top = 8450+"px"
		}else if(i==18){
			lj[i].style.top = 8970+"px"
		}else if(i==19){
			lj[i].style.top = 9493+"px"
		}
		else{
			lj[i].style.top = 586+451*i+"px"
		}
	}
	for(var i=0;i<lj2.length;i++){
		if(i==0){
			lj2[i].style.top = 586+"px"
		}else if(i>=10){
			lj2[i].style.top = 586+453*i+"px"
		}else{
			lj2[i].style.top = 586+451*i+"px"
		}
	}
       
        if($.getUrlParam("platform") == "android" || $.getUrlParam("platform") == "ios"){
        window.isWebView = true;
         }
	//跳转
	redictSrcId = function(val){
            
		if (window.isWebView) {
			$.playDetail(val, 0)
		} else {
		window.location.href = "/wap/resource/migu/miguH5/detail/detail.jsp?platform=PLATFORM&cid=" + val
		}
	
        }
	//window.location.href = 'http://m.miguvideo.com/wap/resource/migu/miguH5/detail/detail.jsp?cid=627652225'
	//给地址						
	lj[0].onclick=function(){	
		redictSrcId(627652225)
	};
	lj[1].onclick = function(){
		redictSrcId(651293202)
	};
	lj[2].onclick = function(){
redictSrcId(625948925)
	};
	lj[3].onclick = function(){
redictSrcId(651514424)
	};
	lj[4].onclick = function(){
redictSrcId(649359392)
	};
	lj[5].onclick = function(){
redictSrcId(624311489)
	};
	lj[6].onclick = function(){
redictSrcId(651233367)
	};
	lj[7].onclick = function(){
redictSrcId(624310276)
	};
	lj[8].onclick = function(){
redictSrcId(621951749)
	};
	lj[9].onclick = function(){
redictSrcId(651293385)
	};
	lj[10].onclick = function(){
redictSrcId(651090877)
	};
	lj[11].onclick = function(){
redictSrcId(623953967)
	};
	lj[12].onclick = function(){
redictSrcId(608616397)
	};
	lj[13].onclick = function(){
redictSrcId(640123289)
	};
	lj[14].onclick = function(){
redictSrcId(624994837)
	};
	lj[15].onclick = function(){
redictSrcId(621951764)
	};
	lj[16].onclick = function(){
redictSrcId(623622602)
	};
	lj[17].onclick = function(){
redictSrcId(636526577)
	};
	lj[18].onclick = function(){
redictSrcId(649118258)
	};
	lj[19].onclick = function(){
redictSrcId(627102592)
	};
	//top20电视剧
	lj2[0].onclick = function(){
redictSrcId(648815118)
	};
	lj2[1].onclick = function(){
redictSrcId(647628663)
	};
	lj2[2].onclick = function(){
redictSrcId(640841430)
	};
	lj2[3].onclick = function(){
redictSrcId(643289208)
	};
	lj2[4].onclick = function(){
redictSrcId(648818073)
	};
	lj2[5].onclick = function(){
redictSrcId(627087228)
	};
	lj2[6].onclick = function(){
redictSrcId(648278854)
	};
	lj2[7].onclick = function(){
redictSrcId(651746049)
	};
	lj2[8].onclick = function(){
redictSrcId(651914767)
	};
	lj2[9].onclick = function(){
redictSrcId(629350172)
	};
	lj2[10].onclick = function(){
redictSrcId(645887240)
	};
	lj2[11].onclick = function(){
redictSrcId(629220336)
	};
	lj2[12].onclick = function(){
redictSrcId(648398063)
	};
	lj2[13].onclick = function(){
redictSrcId(617172261)
	};
	lj2[14].onclick = function(){
redictSrcId(649996018)
	};
	lj2[15].onclick = function(){
redictSrcId(629241094)
	};
	lj2[16].onclick = function(){
redictSrcId(629119970)
	};
	lj2[17].onclick = function(){
redictSrcId(628289649)
	};
	lj2[18].onclick = function(){
redictSrcId(651263288)
	};
	lj2[19].onclick = function(){
redictSrcId(652091176)
	};
	//返回顶部
		//封装卷曲的高度
		function getScroll(){
	        return {
	//              left:window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft,
	                top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
	        }
		}
		window.onscroll = function(){
			var gao = getScroll().top;
			if(gao>700){
				$(".return").show();
			}else{
				$(".return").hide();
			}
		}
	
	$('.return').on('click',function(){
        //设置一个定时器
        timer = setInterval(function(){
            //获取滚动条的滚动高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            //用于设置速度差，产生缓动的效果
            var speed = Math.floor(-osTop/1.5);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            isTop =true;  //用于阻止滚动事件清除定时器
            if(osTop == 0){
                clearInterval(timer);
            }
        },30);
	})
	
	//导航栏切换
	$(".btn1").on('click',function(){
		$('.one').show().addClass("slideInLeft");
		$('.two').hide();
		$(".btn1").css("background","linear-gradient(135deg, #e570e7 0%,#79f1fc 100%)");
		$(".btn2").css("background","white");
	})
	$(".btn2").on('click',function(){
		$('.two').show().addClass("slideInRight");
		$('.one').hide();
		$(".btn1").css("background","white");
		$(".btn2").css("background","linear-gradient(135deg, #e570e7 0%,#79f1fc 100%)");
	})
	
//图片懒加载
	var wHeight=$(window).height(); //获取屏幕可视高度
		$('img').each(function(){     //对图片进行循环
			var ownHeight=$(this).offset().top;     //获取当前图片在文档中的位置
			if(ownHeight<=wHeight){     //如果当前图片位置在屏幕可视范围之内加载此图片
		$(this).attr('src',$(this).attr('data-original'));
		}
	});
	
	 $(window).on('scroll',function(){       //添加屏幕滚动事件
	      $('img').each(function(){
	            var hasSorollTop=$(window).scrollTop();     //获取屏幕已滚动高度
	            var ownHeight=$(this).offset().top;
	            if(ownHeight<=(hasSorollTop+wHeight+500)){
	                 //当图片在屏幕滚动时，距离可视区域500像素时加载此图片，
	                // 以保证查看此图时，下面的一张以提前加载完成
	                 $(this).attr('src',$(this).attr('data-original'));
	             }
	        });
	   });