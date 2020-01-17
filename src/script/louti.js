; (function ($) {
    class louti {
        constructor() {
            
        }
        init() {
            //点击楼梯，移到楼层
            $("#loutinav li").not('.last').on('click', function () {
                $(this).addClass('active').siblings('li').removeClass('active');
                let $top = $('.louceng').eq($(this).index()).offset().top;
                $('html').animate({
                    scrollTop: $top
                });
            });
            // 点击返回顶部，回到顶部
            $('.last').on('click', function () {
                $('html').animate({
                    scrollTop: 0
                });
            });
            //页面刷新滚动条大于150px，显示楼梯
            let $top = $(window).scrollTop();
            if ($top >= 150) {
                $('#loutinav').show();
            } else {
                $('#loutinav').hide();
            }
            //给window添加点击事件
            $(window).on('scroll', function () {
                let $top = $(window).scrollTop();
                if ($top >= 150) {
                    $('#loutinav').show();
                } else {
                    $('#loutinav').hide();
                }
                //滚动滚动条，随着滚动条的改变，楼梯也在改变
                $('.louceng').each(function (index, element) {
                    let $loucengTop = $('.louceng').eq(index).offset().top;
                    if ($loucengTop > $top) {
                        $('#loutinav li').not('.last').removeClass('active');
                        $('#loutinav li').not('.last').eq(index).addClass('active');
                        return false;
                    }
                });
            });
        }
    }
    new louti().init();
})(jQuery);
