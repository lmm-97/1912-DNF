;
(function($) {
    var $lunbo = $('#lunbo');//整个div
    var $picli = $('#lunbo ul li');//图
    var $btnli = $('.allDiv ol li');//西方小圆圈
    var $left = $('#left');//左箭头
    var $right = $('#right');//右箭头
    var num = 0; //当前点击的索引
    var $piclilength = $picli.size();
    var timer = null;

    $btnli.on('click', function() {
        num = $(this).index();
        tabswitch();
    });

    $right.on('click', function() {
        num++;
        if (num > $piclilength - 1) {
            num = 0;
        }
        tabswitch();
    });


    $left.on('click', function() {
        num--;
        if (num < 0) {
            num = $piclilength - 1;
        }
        tabswitch();
    });

    function tabswitch() {
        $btnli.eq(num).addClass('active').siblings($btnli).removeClass('active');
        $picli.eq(num).animate({ opacity: 1 }).siblings($picli).animate({ opacity: 0 });
    }


    timer = setInterval(function() {
        $right.click();
    }, 3000);

    $lunbo.hover(function() {
        clearInterval(timer);
    }, function() {
        timer = setInterval(function() {
            $right.click();
        }, 3000);
    });

})(jQuery);