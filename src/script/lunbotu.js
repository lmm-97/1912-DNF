class lunbotu {
    constructor() {
        this.$lunbo = $('#lunbo');//整个div
        this.$picli = $('#lunbo ul li');//图
        this.$btnli = $('.allDiv ol li');//西方小圆圈
        this.$left = $('#left');//左箭头
        this.$right = $('#right');//右箭头
        this.num = 0; //当前点击的索引
        this.$piclilength = $('#lunbo ul li').length;
        this.timer = null;
    }
    init() {
        let _this = this;
        this.$btnli.on('click', function() {
            _this.num = $(this).index();
            _this.tabswitch();
        });

        this.$right.on('click', function () {
            _this.num++;
            if (_this.num > _this.$piclilength - 1) {
                _this.num = 0;
            }
            _this.tabswitch();
        });
        this.$left.on('click', function () {
            _this.num--;
            if (_this.num < 0) {
                _this.num = _this.$piclilength - 1;
            }
            _this.tabswitch();
        });

        this.timer = setInterval(function () {
            _this.$right.click();
        }, 3000);

        this.$lunbo.hover(function () {
            clearInterval(_this.timer);
        }, function () {
            _this.timer = setInterval(function () {
                _this.$right.click();
            }, 3000);
        });
    }
    tabswitch() {
        this.$btnli.eq(this.num).addClass('active').siblings(this.$btnli).removeClass('active');
        this.$picli.eq(this.num).animate({ opacity: 1 }).siblings(this.$picli).animate({ opacity: 0 });
    }

}
export {
    lunbotu
}
