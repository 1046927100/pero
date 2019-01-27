(function () {  
        // 获取进度条 div  
        var $progress = document.getElementById('spc');  
        // 初始进度，1%  
        var progress = 1;  
  
        // 生成随机数  
        var random = function(min, max){  
            return Math.floor(Math.random() * (max - min + 1) + min);  
        };  
  
        // 跑进度  
        var onprogress = function () {  
            // 随机时间  
            var timeout = random(50, 80);  
			// 随机进度  
			progress = random(1, 5)+progress; 
            var progress2 = progress/(100/56)
			
			// 随机进度不能超过 98%，以免页面还没加载完毕，进度已经 100% 了  
			if(progress > 98){  
				progress = 98;  
			}  
			$progress.style.width = progress + '%'; 
            setTimeout(function () {  
                // 如果页面加载完毕，则直接进度到 100%  
                if(window.loaded){  		
					$progress.style.width = '100%'; 
					return;  
                }  
                onprogress();  
            }, timeout);  
        };  
  
        // 开始跑进度  
        onprogress();  
  
        window.onload = function(){  
			window.loaded = true;
				$('.jindutiao').hide();
    		    $('.content').show();
			}  
    	})();