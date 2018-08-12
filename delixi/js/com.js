var fnOdsCom = {
    /*提示弹层*/
    showCpnTip: function(msg, time) {
        $('body').append($('<div id="J-cpnTips" class="m-cpnTip"><p class="J-tipMsg txt">' + msg + '</p></div>'));
        // $('#J-cpnTips').find('.J-tipMsg').html(msg).end().addClass('show');
        var iTime = time ? time : 2000;
        setTimeout(function() {
            $('#J-cpnTips').remove();
        }, iTime)
    },
    getQueryStringByName: function(name) {
        var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
        if (result == null || result.length < 1)
            return "";
        else
            return result[1];
    },
}

$.extend({
    // 覆盖在整个页面的loading动画
    showLoadingFullPage: function() {
        var oFragmeng = document.createDocumentFragment();
        $(oFragmeng).append('<div id="J-loadingFullPage" class="m-discountLoading m-discountLoadingFullPage"><div class="loader-inner line-scale-pulse-out"><i></i><i></i><i></i><i></i><i></i></i></div>');
        $('body').append(oFragmeng);
    },
    // 移除覆盖在整个页面的loading动画
    removeLoadingFullPage: function() {
        $('#J-loadingFullPage').remove();
    }
})