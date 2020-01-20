   class fdj {
        constructor() {
            this.wrap = $('.wrap');//最外层div
            this.spic = $('#spic');//小图
            this.sf = $('#sf');//小放
            this.bf = $('#bf');//大放
            this.bpic = $('#bpic');//大图
            this.left = $('#leftkey');//运动列表的左按键
            this.right = $('#rightkey');//运动列表的右按键
            this.ulmove = $('#list ul');//列表的ul
            this.list = $('#list ul li');//列表下面的ul下面的li(一张图代表一个li)
            this.ulist = $('#ulist');
        }
        init() {
            // console.log(1);
            let _this = this;
            this.spic.hover(() => {
                $('#sf,#bf').css('visibility', 'visible');
                this.sf.css({//求小放的尺寸
                    width: this.bf.outerWidth() * this.spic.outerWidth() / this.bpic.outerWidth(),
                    height: this.bf.outerHeight() * this.spic.outerHeight() / this.bpic.outerHeight(),
                });
                //先存一下比例
                this.bili = this.bpic.outerWidth() / this.spic.outerWidth();
                //移入spic,鼠标在小图上移动,小放随着鼠标移动
                this.spic.on('mousemove', (e) => {
                    let $left = e.pageX - this.wrap.offset().left - this.sf.width() / 2;
                    let $top = e.pageY - this.wrap.offset().top - this.sf.height() / 2;

                    //设定范围
                    if ($left < 0) {
                        $left = 0;
                    } else if ($left > this.spic.outerWidth() - this.sf.outerWidth()) {
                        $left = this.spic.outerWidth() - this.sf.outerWidth();
                    }
                    if ($top < 0) {
                        $top = 0;
                    } else if ($top > this.spic.outerHeight() - this.sf.outerHeight()) {
                        $top = this.spic.outerHeight() - this.sf.outerHeight();
                    }
                    //给小放位置赋值
                    this.sf.css({
                        left: $left,
                        top: $top
                    })
                    //给大图位置赋值
                    this.bpic.css({
                        left: -$left * this.bili,
                        top: -$top * this.bili,
                    })
                })
            }, () => {
                $('#sf,#bf').css('visibility', 'hidden');//小放和大放显示
            });
            //点击每一个li，放大镜里面的图片就切换成li里面的图片
            this.ulmove.on('click', 'li', function () {//参数2表示的是委托的这个l
                let $imgurl = $(this).find('img').attr('src');//找到li里面的图片的src
                //$(this)表示的是ul
                _this.spic.find('img').attr('src', $imgurl);//将小图里面的地址换成li里面图片的地址
                _this.bpic.attr('src', $imgurl);//将大图里面的地址换成li里面图片的地址
            });
            //点击左右箭头，图片进行运动

            //每次刷新给箭头添加点击事件
            $(document).on('ready', function () {
                $('#rightkey').click();
                $('#leftkey').click();
            })
            //点击右箭头
            let $num=6;

            this.ulist.on('click', "#rightkey", function () {
                // console.log($(this).siblings('#list').find('ul li').length);
                //li的个数
                let $linum = $(this).siblings('#list').find('ul li').length;
                //一个li的宽度
                let $liwidth = $(this).siblings('#list').find('ul li').eq(0).outerWidth(true);
                if ($linum > $num) {
                    $num++;
                    _this.ulmove.animate({
                        left: -($num - 6) * $liwidth
                    });
                }
            });
            //点击左箭头
            this.ulist.on('click', "#leftkey", function () {
                let $linum = $(this).siblings('#list').find('ul li').length;
                let $liwidth = $(this).siblings('#list').find('ul li').eq(0).outerWidth(true);
                
                if ($num > 6) {
                    $num--;
                    _this.ulmove.animate({
                        left: -($num - 6) * $liwidth
                    });
                }
            });

        }
    }
    export{
        fdj
    }