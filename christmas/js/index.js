//封装卷曲的高度
	function getScroll(){
        return {
//              left:window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft,
                top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
        }
	}
	
	window.onscroll = function(){
		var gao = getScroll().top
		console.log(gao)
		if(gao>=20&gao<=500){
			var h = gao+620;
			$('.people').show().css({left:"400px",top:""+ h +"px"});
		}
		if(gao>500&gao<=1300){
			var h = gao+620;
			$(".three").stop().fadeIn();	
			$(".people").show();
			if(gao<=620){
				var l1 = 340-(gao-520)/1.3;
				$(".people").css({left:""+l1+"px",top:""+ h +"px"});
			}else if(gao>620&gao<=854){
				var l2 = 295+(gao-620)/1.3;
				$(".people").css({left:""+l2+"px",top:""+ h +"px"});
			}else if(gao>854&gao<=1014){
				var l3 = 453-(gao-854)/1.3;
				$(".people").css({left:""+l3+"px",top:""+ h +"px"});
			}else{
				$(".people").stop().fadeOut();
			}
		}else{
			$(".three").stop().fadeOut();
		}
		
		if(gao>1300&gao<=2100){
			var h = gao+550;
			$(".four").stop().fadeIn();
			$(".people").show();
			if(gao<=1420){
				var l1 = 51-(gao-1300)/1.5;
				$(".people").css({left:""+l1+"px",top:""+ h +"px"});
			}else if(gao>1420&gao<=1654){
				var l2 = (gao-1420)/1.5;
				$(".people").css({left:""+l2+"px",top:""+ h +"px"});
			}else if(gao>1654&gao<=1814){
				var l3 = 140-(gao-1654)/1.5;
				$(".people").css({left:""+l3+"px",top:""+ h +"px"});
			}else{
				$(".people").stop().fadeOut()
			}
		}else{
			$(".four").stop().fadeOut();
		}
		
		if(gao>2100&gao<=2800){
			var h = gao+460
			$(".five").stop().fadeIn();
			$(".people").show();
			if(gao<=2220){
				var l1 = 370-(gao-2100)/1.5;
				$(".people").css({left:""+l1+"px",top:""+ h +"px"});
			}else if(gao>2200&gao<=2434){
				var l2 = 310+(gao-2200)/1.4;
				$(".people").css({left:""+l2+"px",top:""+ h +"px"});
			}else if(gao>2434&gao<=2594){
				var l3 = 483-(gao-2434)/1.5;
				$(".people").css({left:""+l3+"px",top:""+ h +"px"});
			}else{
				$(".people").stop().fadeOut()
			}
		}else{
			$(".five").stop().fadeOut();
		}
		
		if(gao>2800&gao<=3500){
			var h = gao+467
			$(".six").stop().fadeIn();
			$(".people").show();
			if(gao<=2920){
				var l1 = 30-(gao-2800)/1.6;
				$(".people").css({left:""+l1+"px",top:""+ h +"px"});
			}else if(gao>2920&gao<=3154){
				var l2 = -10+(gao-2920)/1.4;
				$(".people").css({left:""+l2+"px",top:""+ h +"px"});
			}else if(gao>3154&gao<=3314){
				var l3 = 140-(gao-3154)/1.3;
				$(".people").css({left:""+l3+"px",top:""+ h +"px"});
			}else{
				$(".people").stop().fadeOut()
			}
		}else{
			$(".six").stop().fadeOut();
		}
		
		if(gao>3500&gao<=4200){
			var h = gao+494
			$(".seven").stop().fadeIn();
			$(".people").show();
			if(gao<=3620){
				var l1 = 364+(gao-3500)/1.5;
				$(".people").css({left:""+l1+"px",top:""+ h +"px"});
			}else if(gao>3620&gao<=3854){
				var l2 = 420-(gao-3620)/1.25;
				$(".people").css({left:""+l2+"px",top:""+ h +"px"});
			}else if(gao>3854&gao<=4014){
				var l3 = 240+(gao-3854)/1.1;
				$(".people").css({left:""+l3+"px",top:""+ h +"px"});
			}else{
				$(".people").stop().fadeOut()
			}
		}else{
			$(".seven").stop().fadeOut();
		}
		
		if(gao>4200&gao<=4900){
			var h = gao+505
			$(".eight").stop().fadeIn();
			$(".people").show();
			if(gao<=4320){
				var l1 = 126-(gao-4200)/1.5;
				$(".people").css({left:""+l1+"px",top:""+ h +"px"});
			}else if(gao>4320&gao<=4554){
				var l2 = 76+(gao-4320)/1.3;
				$(".people").css({left:""+l2+"px",top:""+ h +"px"});
			}else if(gao>4554&gao<=4714){
				var l3 = 250-(gao-4554)/1.1;
				$(".people").css({left:""+l3+"px",top:""+ h +"px"});
			}else{
				$(".people").stop().fadeOut()
			}	
		}else{
			$(".eight").stop().fadeOut();
		}
		
		if(gao>4900&gao<=5600){
			var h = gao+523
			$(".nine").stop().fadeIn();
			$(".people").show();
			if(gao<=5020){
				var l1 = 295+(gao-4900)/1.5;
				$(".people").css({left:""+l1+"px",top:""+ h +"px"});
			}else if(gao>5020&gao<=5254){
				var l2 = 350-(gao-5020)/1.3;
				$(".people").css({left:""+l2+"px",top:""+ h +"px"});
			}else if(gao>5254&gao<=5600){
				var l3 = 177+(gao-5254)/1.1;
				$(".people").css({left:""+l3+"px",top:""+ h +"px"});
			}
		}else{
			$(".nine").stop().fadeOut();
		}
		if(gao>5600&gao<=6300){
			var h = gao+523
			$(".people").stop().fadeIn();
			$(".people").css({left:"520px",top:""+ h +"px"});
			$(".ten").stop().fadeIn();	
			if(gao>5800)
			$('.ele').stop().fadeIn();
		}else{
			$(".ten").stop().fadeOut();
			$(".ele").stop().fadeOut()
		}
	}
	
	$('.huigu').on('click',function(){
        //设置一个定时器
        timer = setInterval(function(){
            //获取滚动条的滚动高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            //用于设置速度差，产生缓动的效果
            var speed = Math.floor(-osTop/3);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            isTop =true;  //用于阻止滚动事件清除定时器
            if(osTop == 0){
                clearInterval(timer);
            }
        },30);
	})
	
	window._bd_share_config = {
			"common": {
				"bdSnsKey": {},
				"bdText": "回顾2018",
				"bdMini": "2",
				"bdMiniList": false,
				"bdPic": "",
				"bdStyle": "0",
				"bdSize": "24"
			},
			"share": {}
		};
		with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
	
	
	$('.zhanwang').on('click',function(){
		$('.zhezhao').show();
		$('#share').show().removeClass('animated fadeOutDownBig').addClass('animated fadeInUpBig').css({animation:'fadeInUpBig 0.2s '});
		$('.content').css({touchAction:'none'})
	})
	$('.btn').on('click',function(){
		$('.zhezhao').hide();
		$('#share').hide().removeClass('animated fadeInUpBig').addClass('animated fadeOutDownBig').css({animation:'fadeOutDownBig 0.2s '})
		$('.content').css({touchAction:'auto'})
	})
	$('.zhezhao').on('click',function(){	
		$('.zhezhao').hide();
		$('#share').hide().removeClass('animated fadeInUpBig').addClass('animated fadeOutDownBig').css({animation:'fadeOutDownBig 0.2s '})
		$('.content').css({touchAction:'auto'})
	})
