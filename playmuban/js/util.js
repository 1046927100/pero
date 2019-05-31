function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r !== null) return unescape(r[2]);
    return '';
}

function toOfflinePage() {
    window.location.href = "http://gddqres.richworks.cn/dqtg/wap/1810/851016/over.html";
}
function toIndexPage() {
    var index = getWebPath() + "index.do";
    window.location.href = index;
}
/** web  路径**/
function getWebPath() {
    var webName = window.location.protocol;
    webName += "//" + window.location.hostname
    var pathName = document.location.pathname;
    var index = pathName.lastIndexOf("/");
    var result = pathName.substr(0, index + 1);
    return webName + result;
}
function handleResult(code) {
    if(code == 1001){
        toOfflinePage()
    }else if (code == 2002){
        toIndexPage();
    }else {
        toErrorPage();
    }
}

function toErrorPage() {
    window.location.href = "http://gddqres.richworks.cn/dqtg/wap/1511/451106/congestion/index.html";
}

var parserDate = function (date) {
    var t = Date.parse(date);
    if (!isNaN(t)) {
        return new Date(Date.parse(date.replace(/-/g, "/")));
    } else {
        return new Date();
    }
};

var formatDate = function (date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    var second= date.getSeconds();
    second = minute < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+ second;
};





