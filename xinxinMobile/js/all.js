$(function() {

    //顶部菜单
    $('#J-topMenuTri').on('touchstart', function() {
        $('#J-topMenu').show();
        return false;

    })
    $('body').on('touchstart', function() {
        $('#J-topMenu').hide();

    })

    // 字号
    function placeholderPic() {
        var w = document.documentElement.offsetWidth;
        document.documentElement.style.fontSize = w / 20 + 'px';
    }
    placeholderPic();
    window.onresize = function() {
        placeholderPic();
    }
})
