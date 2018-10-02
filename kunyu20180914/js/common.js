var fn = {
    handleScroll: function() {
        $('.J-scrollCnt').each(function() {
            if ($(window).scrollTop() >= ($(this).offset().top - $(window).height() / 1.5)) {
                if (!$(this).hasClass('scrollActive')) {
                    $(this).addClass('scrollActive');
                }
            }
        })
    }
}
$(function() {
    $('#J-wrapper')
        .on('click', '#J-naviBar', function() {
            $(this).toggleClass('active');
            $('#J-navMod').toggleClass('show');
        })
        .on('click', '#J-btn-closePop', function() {
            $('#J-layer-pop').hide();
        })
        .on('click', '#contactBtn', function() {
            $(this).parents('.morph-button').addClass('open');
            $('.contactOverlay').addClass('show');

        })
                .on('click', '.J-toggleRec', function() {
                    $(this).toggleClass('active').parents('li').toggleClass('active');
                })
        .on('click', '#J-closeMorph', function() {
            $(this).parents('.morph-button').removeClass('open');
            $('.contactOverlay').removeClass('show');
        })
        .on('click', '#contactBtn', function() {
            $(this).parents('.morph-button').addClass('open');
            $('.contactOverlay').addClass('show');

        })
        .on('click', '#J-closeMorph', function() {
            $(this).parents('.morph-button').removeClass('open');
            $('.contactOverlay').removeClass('show');
        })

    var $root = $('html, body');
    $('.J-tabHd li').each(function(i) {
        var index = $(this).index();
        $(this).on('click', function() {
            $(this).addClass('cur').siblings('li').removeClass('cur');
            $('#J-tabCnt .J-cnt').eq(index).addClass('cur').siblings('.J-cnt').removeClass('cur');

            $root.animate({
                scrollTop: $('#J-tabCnt .J-cnt').eq(index).offset().top
            }, 1000);
        })
    })

    $('#J-tabHd li').each(function(i) {
        $(this).on('click', function() {
            $(this).addClass('cur').siblings('li').removeClass('cur');
            $('#J-tabCnt .J-cnt').eq(i).addClass('cur').siblings('.J-cnt').removeClass('cur');

            $root.animate({
                scrollTop: $('#J-tabCnt .J-cnt').eq(i).offset().top
            }, 1000);
        })
    })
    if ($('.morph-content').length) {
        $('.morph-content').css({ 'left': $('#contactBtn').offset().left, 'top': $('#contactBtn').offset().top });
    }
})
window.onload = function() {
    $('#J-loading-prev').addClass('hide');
    setTimeout(function() {
        fn.handleScroll();
    }, 800);
    $(window).scroll(function() {
        fn.handleScroll();
    })

    setTimeout(function() {
        $('#J-layer-pop').show();
    }, 3000);
}