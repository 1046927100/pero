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
		}else{
			lj[i].style.top = 586+452.5*i+"px"
		}
	}
	for(var i=0;i<lj2.length;i++){
		if(i==0){
			lj2[i].style.top = 586+"px"
		}else if(i>=20&i<=30){
			lj2[i].style.top = 586+453.8*i+"px"
		}else if(i==40||i==41){
			lj2[i].style.top = 586+453.5*i+"px"
		}
		else{
			lj2[i].style.top = 586+453.1*i+"px"
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
redictSrcId(651293385)
	};
	lj[8].onclick = function(){
redictSrcId(624310090)
	};
	lj[9].onclick = function(){
redictSrcId(630099172)
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
redictSrcId(624310276)
	};
	lj[17].onclick = function(){
redictSrcId(621951749)
	};
	lj[18].onclick = function(){
redictSrcId(636523269)
	};
	lj[19].onclick = function(){
redictSrcId(623622602)
	};
	lj[20].onclick=function(){	
redictSrcId(636526577)
	};
	lj[21].onclick = function(){
redictSrcId(651597690)
	};
	lj[22].onclick = function(){
redictSrcId(621872972)
	};
	lj[23].onclick = function(){
redictSrcId(615995999)
	};
	lj[24].onclick = function(){
redictSrcId(621952283)
	};
	lj[25].onclick = function(){
redictSrcId(635995587)
	};
	lj[26].onclick = function(){
redictSrcId(649118258)
	};
	lj[27].onclick = function(){
redictSrcId(627102592)
	};
	lj[28].onclick = function(){
redictSrcId(651825301)
	};
	lj[29].onclick = function(){
redictSrcId(627509776)
	};
	lj[30].onclick=function(){	
redictSrcId(645755029)
	};
	lj[31].onclick = function(){
redictSrcId(621395744)
	};
	lj[32].onclick = function(){
redictSrcId(623362318)
	};
	lj[33].onclick = function(){
redictSrcId(608616399)
	};
	lj[34].onclick = function(){
redictSrcId(624310258)
	};
	lj[35].onclick = function(){
redictSrcId(623494616)
	};
	lj[36].onclick = function(){
redictSrcId(621951784)
	};
	lj[37].onclick = function(){
redictSrcId(651583489)
	};
	lj[38].onclick = function(){
redictSrcId(621952304)
	};
	lj[39].onclick = function(){
redictSrcId(624315002)
	};
	lj[40].onclick=function(){	
redictSrcId(624310295)
	};
	lj[41].onclick = function(){
redictSrcId(651546219)
	};
	lj[42].onclick = function(){
redictSrcId(623997496)
	};
	lj[43].onclick = function(){
redictSrcId(646933459)
	};
	lj[44].onclick = function(){
redictSrcId(651590987)
	};
	lj[45].onclick = function(){
redictSrcId(624310284)
	};
	lj[46].onclick = function(){
redictSrcId(636526748)
	};
	lj[47].onclick = function(){
redictSrcId(638650448)
	};
	lj[48].onclick = function(){
redictSrcId(651991547)
	};
	lj[49].onclick = function(){
redictSrcId(651825285)
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
	lj2[20].onclick = function(){
redictSrcId(647215228)
	};
	lj2[21].onclick = function(){
redictSrcId(652730954)
	};
	lj2[22].onclick = function(){
redictSrcId(624125005)
	};
	lj2[23].onclick = function(){
redictSrcId(651913658)
	};
	lj2[24].onclick = function(){
redictSrcId(627413519)
	};
	lj2[25].onclick = function(){
redictSrcId(628671826)
	};
	lj2[26].onclick = function(){
redictSrcId(643704802)
	};
	lj2[27].onclick = function(){
redictSrcId(651744371)
	};
	lj2[28].onclick = function(){
redictSrcId(628933886)
	};
	lj2[29].onclick = function(){
redictSrcId(651781642)
	};
	lj2[30].onclick = function(){
redictSrcId(615633793)
	};
	lj2[31].onclick = function(){
redictSrcId(650220807)
	};
	lj2[32].onclick = function(){
redictSrcId(628298267)
	};
	lj2[33].onclick = function(){
redictSrcId(645656380)
	};
	lj2[34].onclick = function(){
redictSrcId(630030370)
	};
	lj2[35].onclick = function(){
redictSrcId(652090666)
	};
	lj2[36].onclick = function(){
redictSrcId(649998776)
	};
	lj2[37].onclick = function(){
redictSrcId(636810877)
	};
	lj2[38].onclick = function(){
redictSrcId(623480639)
	};
	lj2[39].onclick = function(){
redictSrcId(649988119)
	};
	lj2[40].onclick = function(){
redictSrcId(649978915)
	};
	lj2[41].onclick = function(){
redictSrcId(646116829)
	};
	lj2[42].onclick = function(){
redictSrcId(608615359)
	};
	lj2[43].onclick = function(){
redictSrcId(652761572)
	};
	lj2[44].onclick = function(){
redictSrcId(630060864)
	};
	lj2[45].onclick = function(){
redictSrcId(628802080)
	};
	lj2[46].onclick = function(){
redictSrcId(649978707)
	};
	lj2[47].onclick = function(){
redictSrcId(652752974)
	};
	lj2[48].onclick = function(){
redictSrcId(638405158)
	};
	lj2[49].onclick = function(){
redictSrcId(648816715)
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
	            if(ownHeight<=(hasSorollTop+wHeight+800)){
	                 //当图片在屏幕滚动时，距离可视区域500像素时加载此图片，
	                // 以保证查看此图时，下面的一张以提前加载完成
	                 $(this).attr('src',$(this).attr('data-original'));
	             }
	        });
	   });