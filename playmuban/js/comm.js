/*设计图为750 计算参数为100*/
function changefontsize(){

	var html = document.getElementsByTagName('html')[0];

	var screenWitdh = html.offsetWidth >= 750 ? 750 : html.offsetWidth;

	html.style.fontSize = screenWitdh * 100 / 750 + "px";
}
changefontsize();

window.onresize = changefontsize;

// 判断设备
function system() {
    var u = window.navigator.userAgent;
    var res = {
        mobile: !!u.match(/AppleWebKit.*Mobile.*/),
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1,
        iPhone: u.indexOf("iPhone") > -1,
        iPad: u.indexOf("iPad") > -1
    };
    return res;
}

// 屏幕自适应
function pageSize(json) {
	var parentObj = $(window);

	var parentHeight = parentObj.outerHeight();
	var parentWidth = parentObj.outerWidth() > json.width ? json.width : parentObj.outerWidth();

	var pageHeight = parentWidth * json.height / json.width;
	var scale = 1;
	if(parentHeight < pageHeight) {
		scale = parentHeight / pageHeight;
	}
	
	if(json.success && typeof json.success == 'function') {
		json.success({
			scaleX: scale,
			scaleY: parentHeight / pageHeight,
			pageWidth: parentWidth,
			pageHeight: parentHeight,
		})
	}
}

// css前缀匹配
function cssPrefix() {
	var _d = document.createElement('div');
    var _prefixes = ['Webkit', 'Moz', 'Ms', 'O'];
    var prefix = '';

    for (var i in _prefixes) {
        if ((_prefixes[i] + 'Transform') in _d.style) {
            prefix = _prefixes[i];
        }
    }
    return prefix;
}

// 图片加载
function load(data, callback) {

	var sourceArr = data;
	var imgLength = 0;
	for (var i in sourceArr) {
		if(sourceArr[i].src) {
			sourceArr[i].src = sourceArr[i].src;
			imgLength ++;
		}
		if(sourceArr[i].items) {
			for(var j in sourceArr[i].items) {
				if(sourceArr[i].items[j].src) {
					sourceArr[i].items[j].src = sourceArr[i].items[j].src;
					imgLength ++;
				}
			}
		}
	}
	function loadImage(path, callback){
		var img = new Image();
		img.onload = function(){
			img.onload = null;
			img.style.width = img.width / 100 + 'rem';
			path.image = img;
			callback(path);
		};
		img.src = path.src;
	};
	function imgLoader(imgs, callback){
		var k = 0;
		for(var i in imgs){
			if(!imgs[i].image) {
				if(imgs[i].src) {
					loadImage(imgs[i], function(path){
						callback(path, ++k, imgLength);
					});
				}
				if(imgs[i].items) {
					for(var j in imgs[i].items) {
						if(imgs[i].items[j].src) {
							loadImage(imgs[i].items[j], function(path){
								callback(path, ++k, imgLength);
							});
						}
					}
				}
			} else {
				callback(imgs[i], ++k, imgLength);
			}
		}
	};
	imgLoader(sourceArr, function(path, curNum, total){
		var percent = curNum / total;

		typeof callback == 'function' && callback(percent)
	});
};

// 显示页面
function pageShow(id, callback) {
	$('#' + id).show(0, function() {
		typeof callback == 'function' && callback();
	}).siblings('.wrap').hide();
}

// 显示弹窗
function popShow(id, callback) {
	var popObj
	if(!id) {
		popObj = $('.pop-mask');
		popObj.show();
	} else {
		popObj = $('#' + id);
		popObj.show().siblings('.pop-mask').hide();
	}

	popObj.find('.pop-hide').unbind().on('click', function() {
		var _this = $(this);
		_this.parents('.pop-mask').hide();
		if(callback && typeof callback == 'function') {
			callback();
		}
	});
	return popObj;
}

// 显示提示框
function popPromptShow(text, callback) {
	var popObj = popShow('popPrompt');
	popObj.find('.pop-prompt-text').html(text);
	setTimeout(function() {
		popObj.hide().find('.pop-prompt-text').html('');
		typeof callback == 'function' && callback();
	}, 2000);
}

// 链接参数
var getRequest = function() {
    var url = location.search;
    var theRequest = {};
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0,
                 len = strs.length; i < len; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    return theRequest;
};
var request = getRequest();

// 文本提示
function promptShow(text) {
	if ($('.pop-prompt-item').length > 0) return;
	var promptObj = $('<div class="pop-prompt-item">'+ text +'</div>');
	$(document.body).append(promptObj);
	setTimeout(function() {
		$('.pop-prompt-item').remove();
	}, 2000);
}

// 数字补全
function numShow(num) {
	if(num < 10) {
		num = '0' + num;
	}
	return num;
}

// 自制滚动条
function scrollInit(json) {
	var scrollObj = json.object;
	var planObj = json.parent.find('.scroll-plan');
	var planItemObj = planObj.find('i');
	var scrollH = scrollObj.outerHeight();
	var childH = scrollObj[0].scrollHeight;
	var planItemH = 0;
	var movePar = 1;
	var moveNum = 0;

	// if(scrollObj.attr('data-scroll')) return;
	// scrollObj.attr('data-scroll', 1);
	var startTop = 0, endTop = 0;
	var scrollTop;

	if(childH <= scrollH) return;

	scrollObj.css({'padding-right': '.1rem'});
	json.parent.find('.item-nav').css({'padding-right': '.3rem'});
	planObj.show();

	var planH = planObj.outerHeight();
	var planTop = scrollObj.scrollTop() / childH * planH;
	planItemObj.css('top', planTop).attr('data-top', planTop);

	var planTouchType = false;

	planItemH = scrollH / childH * planH;
	planItemObj.css('height', planItemH);
	scrollObj.unbind().on('scroll', function() {
		var _this = $(this);
		if(planTouchType) return;
		planTop = _this.scrollTop() / childH * planH;
		if(planTop <= 0) planTop = 0;
		if(planTop >= childH - scrollH) planTop = childH - scrollH;
		planItemObj.css('top', planTop).attr('data-top', planTop);
	});

	planItemObj.unbind().on('touchstart', function() {
		event.preventDefault();
		var touch = event.touches[0];
		startTop = touch.pageY;
		scrollTop = $(this).attr('data-top') ? parseInt($(this).attr('data-top')) : 0;

		planTouchType = true;
	});

	planItemObj.on('touchmove', function() {
		event.preventDefault();
		var touch = event.touches[0];
		endTop = touch.pageY;

		scrollTop += (endTop - startTop);
		if(scrollTop <= 0) {
			scrollTop = 0;
		}
		if(scrollTop >= planH - planItemH) {
			scrollTop = planH - planItemH
		}
		planItemObj.css({'top': scrollTop}).attr('data-top', scrollTop);
		scrollObj.scrollTop(scrollTop / planH * childH);

		startTop = endTop;
	});

	planItemObj.on('touchend', function() {
		planTouchType = false;
        
	})
}

// 验证码倒计时
function times (obj, t, text) {
	if(obj.attr('data-stop')) return;
	obj.attr('data-stop', 1).html('还剩' + t + '秒');
	var time = setInterval(function() {
		t --;
		obj.html('还剩' + t + '秒');
		if(t == 0) {
			clearInterval(time);
			obj.removeAttr('data-stop').html(text);
		}
	}, 1000);
}

// 显示提示
function alertMsg(text, callback) {
	var msgHtml = '<div class="pop-mask" id="popPromptText" style="display: none"><div class="main-box"><div class="pop-content pop-prompt"><a href="javascript:" class="pop-close sprite-pop sprite_pop_close pop-hide"></a><div class="pop-item"><p class="pop-text">'+ text +'</p></div></div></div></div>';

	$(document.body).append(msgHtml);

	popShow('popPromptText', function() {
		typeof callback == 'function' && callback();
		$('#popPromptText').remove();
	});
}

// 计算字符串实际长度
function getLength(str) {
	return str.replace(/[\u0391-\uFFE5]/g,"aa").length;
}
// 手机号码隐藏中间四位数处理
function mobileManage(str) {
	return str.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
}

// 手机号码格式判断
var isMobile = function(str) {
    var t1 = /0?(13|14|15|17|18)[0-9]{9}/;
    var t2 = /^1\d{10}$/;
    return t1.test(str) && t2.test(str);
};

// 处理提交内容
function itemHandling(thi) {
	var val = $(thi).val();
	var newVal = val.replace(/\s/g, "");
	// console.log(newVal.length);
	var varArr = [];
	for(var i=0; i<newVal.length; i++) {
		if(parseInt(newVal[i]) || newVal[i] == 0 || newVal[i] == '+'){
			varArr.push(newVal[i]);
		}
	}
	for(var i=0; i<varArr.length; i++) {
		if(varArr[i] == '+') {
			varArr.splice(i, 3);
		}
	}
	$(thi).val(varArr.join(''));
	console.log(varArr.join(''));
}


$(function(){
	var page;
    var url = document.URL;
    if(url.indexOf('activity') > 0){
        page = 1;
	}else if(url.indexOf('result') > 0){
        page = 2;
	}else{
        page = 0;
        console.log('index.html');
	}

	$.get('pageLog.do?r=' + Math.random() + '&page=' +page);
})


function nowStart() {
    window.location.href = 'activity.html';
    $.get('pageLog.do?r=' + Math.random() + '&page=3');
    _hmt.push(['_trackEvent', '首页', '按钮', '立即开启按钮']);
}