$(function() {

    $('#J-topMenuTri').on('click', function() {
        $('#J-topMenu').show();
        return false;

    })
    $(document).on('click', function() {
            $('#J-topMenu').hide();

        })
        // 分页调用
    $(".tcdPageCode").createPage({
        pageCount: 5,
        current: 1,
        backFn: function(p) {
            console.log(p);
        }
    });

})
