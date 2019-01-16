/**
 * Created by shaoxiaolai on 2018/5/29 0029.
 */

$(function(){
  //加载提示浏览器打开下载方法
  jumpClientCommon.loadBrowserTip();
  //获取promotionWay参数
  promotionPlug.initPromotionWayValue();
})
//promotionWay
var promotionPlug = {
  //promotion key值
  "promotionWayKey": "promotionWay",
  //promotion key值对应的value值
  "promotionWayValue": "",
  //promotion是否已经初始化
  "hasInit": false,
  //存h5_sdk
  "sdk": "",
  //存promotionId
  "promotionId": "",
  //存放入剪切板json串
  "clipboardJson": "",
  //初始化promotion的值
  initPromotionWayValue : function () {
    this.promotionWayValue = encodeURIComponent(decodeURIComponent(jumpClientCommon.getUrlParam(this.promotionWayKey)));
  },
  //初始化h5_sdk和剪切板
  "initPromotionSDK": function(){
    //初始化h5_sdk
    this.sdk = init('miguVideo', 'm.miguvideo.com');
    //获取promotionId
    this.promotionId = this.sdk.getPromotionId();
    //获取放入剪切板json串
    this.clipboardJson = this.sdk.getClipboardJSON();
    //初始化剪切板
    this.sdk.createClipborad4Document(document.getElementsByClassName("openClient"),"m.miguvideo.com", "openClient");
  },
  //上报事件
  "logEventFun": function(obj){
    var _this = this;
    //如果没有初始化promotionSDK
    if(!promotionPlug.hasInit){
      promotionPlug.init();
    }
    //已经初始化promotionSDK
    if(promotionPlug.hasInit){
      switch (obj.eventType) {
        case "pageVisitEvent": //页面初始化时上报
          _migudata.logEvent(obj.eventType,
            {
              'timestamp': _this.getNowFormatDate(),   //事件发生时间，格式为yyyy-MM-dd HH:mm:ss
              'promotionId': _this.promotionId,    //推广方式
              'product': 'miguvideo',
              'parameter1': '',
              'parameter2': '',
              'parameter3': ''
            });
          break;
        case "appDownloadClickEvent": //点击下载时上报
          _migudata.logEvent(obj.eventType,
            {
              'timestamp': _this.getNowFormatDate(),   //事件发生时间，格式为yyyy-MM-dd HH:mm:ss
              'promotionId': _this.promotionId,    //推广方式
              'product': 'miguvideo',
              'parameter1': '',
              'parameter2': '',
              'parameter3': ''
            });
          break;
        case "videoPlayEvent": //视频播放时上报
          _migudata.logEvent(obj.eventType,
            {
              'timestamp': _this.getNowFormatDate(),   //事件发生时间，格式为yyyy-MM-dd HH:mm:ss
              'contentId': obj.contentId,    //节目ID
              'promotionId': _this.promotionId,    //推广方式
              'product': 'miguvideo',
              'parameter1': '',
              'parameter2': '',
              'parameter3': ''
            });
          break;
        default:
      }
    }else{
      console.log("promotionSDK初始化失败")
    }
  },
  //获取当前时间
  "getNowFormatDate": function () {
    var date = new Date();
    var seperator = "-";
    var seperator1 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator + month + seperator + strDate
      + " " + date.getHours() + seperator1 + date.getMinutes()
      + seperator1 + date.getSeconds();
    return currentdate;
  },
  //初始化
  "init": function(){
    if(this.promotionWayValue){
      if(!$(".openClient").length){
        //为了防止因找不到openClient类而导致初始化剪切板报错
        $("body").append("<div class='openClient' style='display: none!important;'></div>");
      }
      try {
        //初始化promotionSDK
        promotionPlug.initPromotionSDK();
        //promotion是否已经初始化
        promotionPlug.hasInit = true;
      }catch (e){
        console.log(e)
      }
    }
  },
  //页面访问次数上报
  "PV" : function () {
    promotionPlug.logEventFun({
      eventType : "pageVisitEvent"
    })
  },
  //点击下载的统计
  "downloadUV" : function () {
    promotionPlug.logEventFun({
      eventType : "appDownloadClickEvent"
    })
  },
  //视屏播放统计
  "videoUV" : function (contentId) {
    promotionPlug.logEventFun({
      eventType : "videoPlayEvent",
      contentId : contentId
    })
  }
}

var jumpClientCommon = (function ($,window) {
  var jumpClientPlug = {
    //生成deepLink
    "getDeepLink": function (obj) {
      //传参实例
      /*obj = {
       action: "", //拉起客户端的action
       mgdbId: "", //比赛Id
       pageId: "", //跳转指定pageId的页面
       contentId: "", //节目Id
       type: "" //0或者不传: 拉起点播详情 1: 拉起直播详情
       }*/
      var deepLink, obj = obj || {}, appHostUrl = "miguvideo://miguvideo";

      if(obj.action){
        if(obj.contentId){
          deepLink = appHostUrl+"?path=detail&contentId=" + obj.contentId + "&objType=video&action="+ encodeURIComponent(JSON.stringify(obj.action));
        }else {
          var deepLink = appHostUrl+"?action="+ encodeURIComponent(JSON.stringify(obj.action));
        }
      }else if(obj.mgdbId){
        var action = {
          "type": "JUMP_INNER_NEW_PAGE",
          "params": {
            "frameID": "default-frame",
            "pageID": "WORLDCUP_DETAIL",
            "location": "h5_share",
            "extra":{
              "mgdbID": obj.mgdbId
            }
          }
        }
        var deepLink = appHostUrl+"?action="+ encodeURIComponent(JSON.stringify(action));
      }else if(obj.pageId){
        var action = {
          "type": "JUMP_INNER_NEW_PAGE",
          "params": {
            "path": "",
            "frameID": "default-frame",
            "contentID": "",
            "location": "WEB_VIEW_H5",
            "pageID": obj.pageId
          }
        }
        var deepLink = appHostUrl+"?action="+ encodeURIComponent(JSON.stringify(action));

      } else if(obj.contentId){
        var pageId;
        if(obj.type && obj.type == "1"){
          pageId = "296ff8a4b07d457cb15b6f9e5f433cc0";
        }else{
          pageId = "61fb7b0ec4c745bb97b90eb2b14b83c7";
        }
        var action = {
          "type": "JUMP_DETAIL_PAGE",
          "params": {
            "path": "",
            "frameID": "",
            "contentID": obj.contentId,
            "location": "WEB_VIEW_H5",
            "pageID": pageId
          }
        }
        var deepLink = appHostUrl+"?path=detail&contentId=" + obj.contentId + "&objType=video&action="+ encodeURIComponent(JSON.stringify(action));
      }else{
        var deepLink = appHostUrl;
      }
      return deepLink;
    },
    //生成ApkUrl
    "getApkUrl": function(packId){
       var apkUrl = 'http://apk.miguvideo.com/apk/MiguVideo-Menhu.apk';
       if(packId){
           apkUrl = 'http://apk.miguvideo.com/apk/'+ packId +'.apk';
       }
      return apkUrl;
    },
    //处理打开客户端逻辑
    "downloadClient": function(obj){
      //传参实例
      /*obj = {
           appUrl: {
                 action: "", //拉起客户端的action
                 mgdbId: "", //比赛Id
                 pageId: "", //跳转指定pageId的页面
                 contentId: "", //节目Id
                 type: "", //0或者不传: 拉起点播详情 1: 拉起直播详情
                 pkgId: "" //包名称
            }, //客户端deepLink
            downUrl: "", //应用宝链接
            redirectUrl: "", //重定向链接
            isNeedPromotion: false //false或者没有这个   属性表示不需要promotion,否则需要
            isNotValid: true //重定向链接是否有效（本落地页必传,给出调用的不必传）
       }*/
      //注：downUrl和appStoreUrl、apkUrl和redirectUrl互斥
      var obj = obj || {};
      jumpClientCommon.jumpClient(obj);
    },
    "jumpClient": function(obj){
      var obj = obj || {};
      
      //alse或者没有这个属性表示不需要promotion,否则需要
      var isNeedPromotion = obj.isNeedPromotion || false;

      //判断传的redirectUrl是否有效
      if(!obj.isNotValid){
        if(obj.redirectUrl){
          if(isNeedPromotion && obj.redirectUrl.indexOf("promotionWay") == -1){
            if(obj.redirectUrl.indexOf("&") == -1){
              obj.redirectUrl = obj.redirectUrl+"?promotionWay="+promotionPlug.promotionWayValue;
            }else{
              obj.redirectUrl = obj.redirectUrl+"&promotionWay="+promotionPlug.promotionWayValue;
            }
          }else{
            obj.redirectUrl = obj.redirectUrl;
          }
        }else{
          obj.redirectUrl = "/wap/resource/migu/worldCup/downloadClientCommon.jsp?nodeId=70057403&promotionWay="+promotionPlug.promotionWayValue;
        }
      }else{
        obj.redirectUrl = "";
      }

      if(obj.appUrl &&　typeof obj.appUrl == 'object'){
          //获取apkUrl
        obj.apkUrl = jumpClientCommon.getApkUrl(obj.appUrl.pkgId);
        console.log(obj.apkUrl);

        //获取完整deepLink
        obj.appUrl = jumpClientCommon.getDeepLink(obj.appUrl);
        console.log(obj.appUrl);
      }

      if(isNeedPromotion&&promotionPlug.promotionWayValue) {
        //如果没有初始化promotionSDK
        if (!promotionPlug.hasInit) {
          promotionPlug.init();
        }
        //已经初始化promotionSDK
        if (promotionPlug.hasInit) {
          try {
            //该方法在deepLink后拼promotion参数
            obj.appUrl = promotionPlug.sdk.getDeepLink(obj.appUrl);
            //app安装包下载点击事件
            promotionPlug.logEventFun({
              eventType : "appDownloadClickEvent"
            })
          } catch (e) {
            console.log(e);
          }
        }
        else {
          console.log("promotion初始化失败")
        }
      }
      //拉起客户端处理逻辑方法
      jumpClientCommon.loadDat(obj);
    },
    //尝试打开客户端的方法
    "loadDat": function(obj){
      obj.appStoreUrl = "https://itunes.apple.com/cn/app/id787130974?mt=8";
      var e = (new Date).getTime();
      //传参实例
      /*obj = {
       appUrl: "", //客户端deepLink
       downUrl: "", //应用宝链接
       appStoreUrl: "", //appStore链接
       apkUrl: "", //安卓下载APK
       redirectUrl: "" //重定向链接
       }*/

      var ifr = document.createElement('iframe');
      ifr.style.display= "none";
      //deepLink和应用宝地址
      if(obj.appUrl && obj.downUrl){
        if (jumpClientPlug.iswixin()) {
          var loadDateTime = new Date();
          window.setTimeout(function () {
            var timeOutDateTime = new Date();
            if (timeOutDateTime - loadDateTime < 10000) {
              if (jumpClientPlug.isAndroid()) {
                var android_schema = encodeURIComponent(obj.appUrl);
                window.location.href = obj.downUrl + "&android_schema=" + android_schema;
              } else {
                window.location.href = obj.downUrl;
              }
            } else {
              window.close()
            }
          }, 2000);
        } else {
          try {
            if (jumpClientPlug.isAndroid()) {
              document.body.appendChild(ifr);
              ifr.src = obj.appUrl;
            } else {
              window.location.href = obj.appUrl;
            }
          } catch (e) {
            e.error()
          }
          window.setTimeout(function () {
            window.location.href = obj.downUrl;
          }, 2000);
        }
      }

      //deepLink和AppStoreUrl和androidAPK
      if(obj.appUrl && obj.appStoreUrl && obj.apkUrl){
        if(jumpClientPlug.isAndroid()){
          if(jumpClientPlug.iswixin()){
            document.body.appendChild(ifr);
            ifr.src = obj.appUrl;
            window.setTimeout(function () {
              if ($(".broswerTip").length) {
                $(".broswerTip").show();

                $(".broswerTip").unbind("click").on("click", function () {
                  $(".broswerTip").hide();
                })
              }
            }, 2000);
          }else{
            document.body.appendChild(ifr);
            ifr.src = obj.appUrl;
            window.setTimeout(function () {
              window.location.href = obj.apkUrl;
            }, 3000);
          }
        }else{ 
            ifr.setAttribute("src", obj.appUrl);
            top.window.location.href = obj.appUrl;
            var k = window.setTimeout(function () {
                clearTimeout(k),
                    (new Date).getTime() - e < 2000 &&
                    obj.appStoreUrl && setTimeout(function () {
                        top.window.location.href = obj.appStoreUrl;
                    }, 200)
            }, 1000)  
          
          //window.setTimeout(function () {
            //window.location.href = obj.appStoreUrl;
          //}, 3000);
        }
      }

    
      //deepLink和跳转Url
      if(obj.appUrl && obj.redirectUrl){
        if(jumpClientPlug.isAndroid()){
          document.body.appendChild(ifr);
          ifr.src = obj.appUrl;
          window.setTimeout(function () {
            window.location.href = obj.redirectUrl;
          }, 3000);
        }else{
          window.location.href = obj.appUrl;
          window.setTimeout(function () {
            window.location.href = obj.redirectUrl;
          }, 2000);
        }
      }
    },
    //提示浏览器打开下载
    "loadBrowserTip": function (wrapStyle, imgStyle) {
      // style = style || {};
      var def = {
        display: "none",
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, .5)",
        "z-index": 1000,
        "text-align": "right"
      }

      var imgdef = {
        width: "50%",
        marginLeft: "50%"
      }

      var wrapCss = $.extend(def, wrapStyle)
      var imgCss = $.extend(imgdef, imgStyle)

      var ele = $("<div>").addClass("broswerTip").css(wrapCss)

      var img = $("<img>").attr("src", "/wap/resource/migu/miguH5/img/broserTip.png").addClass("broswerTipPic")
      img.css(imgCss)

      ele.append(img);

      $("body").append(ele);
    },
    //判断是不是微信
    "iswixin": function () {
      var ua = window.navigator.userAgent.toLowerCase();
      //mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
      if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
      } else {
        return false;
      }
    },
    //判断是否为安卓
    "isAndroid": function () {
      var u = navigator.userAgent.toLowerCase(),
        isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        isAndroid = u.indexOf('android') > -1 || u.indexOf('adr') > -1 || u.indexOf('linux')>-1;

      return isAndroid;
    },
    //从url中获取参数
    "getUrlParam": function (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return decodeURI(r[2]);
      return null
    },
    //页面初始化统计
    "PV" : promotionPlug.PV,
    //视频播放时统计
    "videoUV" : promotionPlug.videoUV,
    //点击下载时统计
    "downloadUV" : promotionPlug.downloadUV
  }
  return jumpClientPlug;
})($,window)