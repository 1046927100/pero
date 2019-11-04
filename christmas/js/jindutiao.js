(function (doc, win) {
        var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
            console.log(docEl)
        };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);

	(function () {  
        // 获取进度条 div  
        var $progress = document.getElementById('spc');  
        var $img = document.getElementById('img');
		console.log($progress.style.width)
        // 初始进度，1%  
        var progress = 1;  
  
        // 生成随机数  
        var random = function(min, max){  
            return Math.floor(Math.random() * (max - min + 1) + min);  
        };  
  
        // 跑进度  
        var onprogress = function () {  
            // 随机时间  
            var timeout = random(150,151);  
			// 随机进度  
			progress = random(1, 5)+progress; 
            var progress2 = progress/(100/56)
			
			// 随机进度不能超过 98%，以免页面还没加载完毕，进度已经 100% 了  
			if(progress > 98){  
				progress = 98;  
			}  
			$progress.style.width = progress + '%'; 
			$img.style.left = progress2 + '%';

            setTimeout(function () {  
                // 如果页面加载完毕，则直接进度到 100%  
                if(window.loaded){  		
					$progress.style.width = '100%'; 
					$img.style.left = '56%';
					return;  
                }  
                onprogress();  
            }, timeout);  
        };  
  
        // 开始跑进度  
        onprogress();  
  
        window.onload = function(){  
        	function sleep (time) {
					return new Promise((resolve) => setTimeout(resolve, time));
				}
				// 用法
				sleep(1500).then(() => {
					// 这里写sleep之后需要去做的事情
					window.loaded = true;
					sleep(1500).then(()=>{
						$('.container').hide();
		    		    $('.content').show();
					})
				}) 
        };  
        
    	})();