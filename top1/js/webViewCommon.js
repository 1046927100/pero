/**
 * Created by shaoxiaolai on 2017/11/29 0029.
 */

//跳转到客户端和h5的处理逻辑
//contentId: 内容Id type: 直播、点播、专题（0：点播 1：直播 2：专题 3：App新页面）imgUrl:图片路径 extra:其他携带到客户端的信息
function jumpPath(contentId, type, url, imgUrl, extra) {
    var imgUrl = imgUrl ? imgUrl : "";
    var extra = extra ? extra : {};
    var platform = $.getUrlParam("platform");
    //if (contentId != "") {
    if (platform == "android" || platform == "ios") {
        if (type == "0" || type == "1") {
            $.playDetail(contentId, type, imgUrl, extra); //contentId: 内容Id  type: 播放类型（0：点播 1：直播）
        } else if (type == "3") {
            $.jumpBlankPage(contentId, type, url); //contentId: pageId
        } else {
            //判断是内嵌到android还是ios
            if(window.mnWebMain.isAndroid()){
                window.location.href = url + "&platform=android"; //webview中打开h5地址
            }else{
                window.location.href = url + "&platform=ios"; //webview中打开h5地址
            }
        }
    } else {
        if(contentId && contentId.length > 9){
            var appHostUrl = "miguvideo://miguvideo";
            var action = {
                "type": "JUMP_INNER_NEW_PAGE",
                "params": {
                  "frameID": "default-frame",
                  "pageID": "WORLDCUP_DETAIL",
                  "location": "h5_share",
                  "extra":{
                    "mgdbID": contentId
                  }
                }
              }
              var deepLink = appHostUrl+"?action="+ encodeURIComponent(JSON.stringify(action));
              var downloadUrl = "http://a.app.qq.com/o/simple.jsp?pkgname=com.cmcc.cmvideo";
              $.loadDat(deepLink, downloadUrl);

        }else{
            window.location.href = url; //跳转到h5地址
        }
    }
    //}
}

window.mnWebMain = {
    init: function (cb) {
        var _this = this;
        this.cb = cb;
        if(_this.isAndroid()){
            this.connectWebViewJavascriptBridge();
        }else{
            this.setupWebViewJavascriptBridge(function (bridge) {
                _this.cb && _this.cb(bridge);
                _this.hasInit = true;
            });
        }
    },
    connectWebViewJavascriptBridge: function () {
        var _this = this;

        if (window.WebViewJavascriptBridge) {
            this.callback(WebViewJavascriptBridge)
        } else {
            document.addEventListener(
                'WebViewJavascriptBridgeReady'
                , function () {
                    _this.callback(WebViewJavascriptBridge)
                },
                false
            );
        }
    },
    callback: function (bridge) {
        var _this = this;
        bridge.init(function (message, responseCallback) {
            console.log('JS got a message', message);
            var data = {
                'Javascript Responds': '测试中文!'
            };
            console.log('JS responding with', data);
            responseCallback(data);
        });
        _this.cb && _this.cb(bridge);
        _this.hasInit = true;
    },
    setupWebViewJavascriptBridge: function (callback) {
        if (window.WebViewJavascriptBridge) {
            return callback(WebViewJavascriptBridge);
        }
        if (window.WVJBCallbacks) {
            return window.WVJBCallbacks.push(callback);
        }
        window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'https://__bridge_loaded__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function() {
            document.documentElement.removeChild(WVJBIframe)
        }, 0)
    },
    isAndroid: function () {
        //判断是否为安卓
        var u = navigator.userAgent,
            isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;

        return isAndroid;
    }
}

;(function ($, window, document) {
    $.extend({
        //获取版本号 responseData = "ANDROID" 、"IOS"
        "getPlatForm": function (callBack) {
            var url = location.href;

            try {
                window.WebViewJavascriptBridge.callHandler(
                    'CallNative'
                    , {
                        "type": "GET_APP_INFO",
                        "params": {
                            "path": "",
                            "frameID": "",
                            "contentID": "",
                            "location": "WEB_VIEW_H5",
                            "pageID": "",
                            "url": url
                        }
                    }
                    , function (responseData) {
                        callBack && callBack(responseData);
                    }
                );
            } catch (err) {
                throw new Error(err.message)
            }
        },
        //获取用户信息
        "getUserInfo": function (callBack) {
            var url = location.href;

            try {
                window.WebViewJavascriptBridge.callHandler(
                    'CallNative'
                    , {
                        "type": "GET_USER_INFO",
                        "params": {
                            "path": "",
                            "frameID": "",
                            "contentID": "",
                            "location": "WEB_VIEW_H5",
                            "pageID": "",
                            "url": url
                        }
                    }
                    , function (responseData) {
                        //alert(responseData);
                        callBack && callBack(responseData)
                    }
                );
            } catch (err) {
                throw new Error(err.message)
            }
        },
        //跳转详情页
        //contentId：内容Id  type: 播放类型（0：点播 1：直播）
        "playDetail": function (contentId, type, imgUrl, extra) {
            var url = location.href;

            if (type == "0") {
                var pageID = "61fb7b0ec4c745bb97b90eb2b14b83c7";
            } else {
                var pageID = "296ff8a4b07d457cb15b6f9e5f433cc0";
            }
            try {
                window.WebViewJavascriptBridge.callHandler(
                    'CallNative'
                    , {
                        "type": "JUMP_DETAIL_PAGE",
                        "params": {
                            "path": "",
                            "frameID": "",
                            "contentID": contentId,
                            "location": "WEB_VIEW_H5",
                            "imgUrl": imgUrl,
                            "pageID": pageID,
                            "url": url,
                            "extra": extra
                        }
                    }
                    , function (responseData) {
                        //alert("responseData: " + responseData);
                    }
                );
            } catch (err) {
                throw new Error(err.message)
            }
        },
        //分享
        //shareTitle：主标题 shareSubTitle：副标题 imgUrl: 图片路径(绝对地址) shareUrl：返回路径 contentId：内容Id contentType: 内容类型（直播、点播）
        "shareInfomation": function (shareTitle, shareSubTitle, imgUrl, shareUrl, contentId, contentType) {
            var url = location.href;
            var shareTitle = shareTitle || '', shareTitle = shareTitle || '', imgUrl = imgUrl || '',
                shareUrl = $.funcUrlDel(shareUrl, "platform") || '', contentId = contentId || '',
                contentType = contentType || '';

            try {
                window.WebViewJavascriptBridge.callHandler(
                    'CallNative'
                    , {
                        "type": "USER_INTERACTION_SHARE",
                        "params": {
                            "path": "",
                            "frameID": "",
                            "contentID": "",
                            "location": "WEB_VIEW_H5",
                            "pageID": "",
                            "url": url,
                            extra: {
                                'shareUrl': shareUrl,
                                'shareTitle': shareTitle,
                                'shareSubTitle': shareSubTitle,
                                'imgUrl': imgUrl,
                                'contentId': contentId,
                                'contentType': contentType
                            }
                        }
                    }
                    , function (responseData) {
                        //alert(responseData);
                    }
                );
            } catch (err) {
                throw new Error(err.message)
            }
        },
        //注册分享
        //shareTitle：主标题 shareSubTitle：副标题 imgUrl: 图片路径(绝对路径) shareUrl：返回路径 contentId：内容Id contentType: 内容类型（直播、点播）
        "getShareInfoForNative": function (shareTitle, shareSubTitle, imgUrl, shareUrl, contentId, contentType) {
            var shareTitle = shareTitle || '', shareTitle = shareTitle || '', imgUrl = imgUrl || '',
                shareUrl = $.funcUrlDel(shareUrl, "platform") || '', contentId = contentId || '',
                contentType = contentType || '';

            try {
                window.WebViewJavascriptBridge.registerHandler("getShareInfoForNative", function (data, responseCallback) {
                    responseData = {
                        'shareUrl': shareUrl,
                        'shareTitle': shareTitle,
                        'shareSubTitle': shareSubTitle,
                        'imgUrl': imgUrl,
                        'contentId': contentId,
                        'contentType': contentType
                    };
                    responseData = JSON.stringify(responseData);
                    responseCallback(responseData);
                });
            } catch (err) {
                throw new Error(err.message)
            }
        },
        //客户端分享成功后执行的回调
        "getShareInfoForNative_callBack": function (callBack) {
            try {
                window.WebViewJavascriptBridge.registerHandler("getShareInfoForNative_callBack", function (data, responseCallback) {
                    callBack && callBack(data);
                });
            } catch (err) {
                throw new Error(err.message)
            }
        },
        // 客户端页面返回h5页面后执行的回调
        "viewbackNotifyForNative":function(callBack){
            try {
                window.WebViewJavascriptBridge.registerHandler("viewbackNotifyForNative", function (data, responseCallback) {
                    callBack && callBack(data);
                });
            } catch (err) {
                throw new Error(err.message)
            }
        },
        //登录
        "startLogin": function (callBack) {
            var url = location.href;

            try {
                window.WebViewJavascriptBridge.callHandler(
                    'CallNative'
                    , {
                        "type": "USER_LOGIN",
                        "params": {
                            "path": "",
                            "frameID": "",
                            "contentID": "",
                            "location": "WEB_VIEW_H5",
                            "pageID": "",
                            "url": url
                        }
                    }
                    , function (responseData) {
                        //alert(responseData);
                        callBack && callBack(responseData);
                    }
                );
            } catch (err) {
                throw new Error(err.message)
            }
        },
        //跳转到App新页面
        "jumpBlankPage": function (pageId, type, url) {
            if (type == "3") {
                var jumpType = "JUMP_INNER_NEW_PAGE";
                var url = location.href;
                var frameID = "default-frame";
                var pageId = pageId;
            } else if (type == "4") {
                var jumpType = "JUMP_H5_BY_WEB_VIEW";
                var url = "http://m.miguvideo.com" + url + "&platform=PLATFORM" || "";
                var frameID = "";
                var pageId = "";
            }else{
                var jumpType = "JUMP_H5_BY_WEB_VIEW";
                var url = url;
                var frameID = "";
                var pageId = "";
            }

            try {
                window.WebViewJavascriptBridge.callHandler(
                    'CallNative'
                    , {
                        "type": jumpType,
                        "params": {
                            "path": "",
                            "frameID": frameID,
                            "contentID": "",
                            "location": "WEB_VIEW_H5",
                            "pageID": pageId,
                            "url": url,

                        }
                    }
                    , function (responseData) {
                        //alert(responseData);
                    }
                );
            } catch (err) {
                throw new Error(err.message)
            }
        },
        //页面渲染完计算高度
        "pageRenderingEnd": function () {
            var url = location.href;
            try {
                window.WebViewJavascriptBridge.callHandler(
                    'CallNative'
                    , {
                        "type": "CALCULATE_HEIGHT",
                        "params": {
                            "path": "",
                            "frameID": "",
                            "contentID": "",
                            "location": "WEB_VIEW_H5",
                            "url": url,
                        }
                    }
                    , function (responseData) {
                        //alert(responseData);
                    }
                );
            } catch (err) {
                throw new Error(err.message)
            }
        },
        //通过客户端发送网络请求
        "networkRequest": function (reqUrl, reqParams, reqType, callBack) {
            if(reqType.toLowerCase()=="post"){
                var reqMethod = "H5_POST_DATA";
            }else if(reqType.toLowerCase()=="get"){
                var reqMethod = "H5_GET_DATA";
            }
            try {
                window.WebViewJavascriptBridge.callHandler(
                    'CallNative'
                    , {
                        "type": reqMethod,
                        "params": {
                            "path": "",
                            "frameID": "",
                            "contentID": "",
                            "location": "WEB_VIEW_H5",
                            "pageID": "",
                            "url": reqUrl,
                            extra: reqParams
                        }
                    }
                    , function (responseData) {
                        //alert("responseData:"+responseData);
                        callBack&&callBack(responseData);
                    }
                );
            } catch (err) {
                throw new Error(err.message)
            }
        },
        // 删除url中某个参数,并返回url
        "funcUrlDel": function (url, ref) {
            var str = "";

            if (url.indexOf('?') != -1)
                str = url.substr(url.indexOf('?') + 1);
            else
                return url;
            var arr = "";
            var returnurl = "";
            var setparam = "";
            if (str.indexOf('&') != -1) {
                arr = str.split('&');
                for (i in arr) {
                    if (arr[i].split('=')[0] != ref) {
                        returnurl = returnurl + arr[i].split('=')[0] + "=" + arr[i].split('=')[1] + "&";
                    }
                }
                return url.substr(0, url.indexOf('?')) + "?" + returnurl.substr(0, returnurl.length - 1);
            }
            else {
                arr = str.split('=');
                if (arr[0] == ref)
                    return url.substr(0, url.indexOf('?'));
                else
                    return url;
            }
        },
        //从url中获取参数
        "getUrlParam": function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURI(r[2]);
            return null
        }
    })
})(jQuery, window, document);