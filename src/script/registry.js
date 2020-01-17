;
(function ($) {
    class Registry {
        constructor() {
            this.name = $('.name');//用户名框
            this.pass = $('.pass');//密码框
            this.sub = $('.btn');//提交按钮
            this.nameHint = $('.nameHint')//用户框下提示
            this.passHint = $('.passHint')//密码框下提示
            //标记
            this.userflag = true;
            this.passwordflag = true;
        }
        init() {
            //获得焦点
            this.name.on('focus', () => {
                this.nameHint.html('请输入5到11位数字');
            });
            //失去焦点
            this.name.on('blur', () => {
                //内容为空
                if (this.name.val() !== "") {
                    let reg =/\d{5,11}/;
                    if (reg.test(this.name.val())) {
                        this.nameHint.html('√');
                        this.nameHint.css({
                            color: 'green',
                        });
                        this.userflag = ture;
                    } else {
                        this.nameHint.html('用户名不符合条件');
                        this.nameHint.css({
                            color: 'red',
                        });
                        this.userflag = false;
                    }
                } else {
                    this.nameHint.html('用户名不能为空');
                    this.nameHint.css({
                        color: 'red',
                    });
                    this.userflag = false;
                }
            });
            //密码
            //获得焦点
            this.pass.on('focus', () => {
                this.passHint.html('请输入密码');
            });
            //输入密码
            this.pass.on('input', () => {
                let reg = /^[\w_-]{6,16}$/;
                if (reg.test(this.pass.val())) {
                    this.passHint.html('√');
                    this.passHint.css({
                        color: 'green',
                    });
                    this.passwordflag = true;
                } else {
                    this.passHint.css("color", 'red');
                    this.passwordflag = false;
                }
            });
            //失去焦点
            this.pass.on('blur', () => {
                if (this.pass.val() !== "") {
                    this.passHint.html('√');
                    this.passHint.css({
                        color: 'green',
                    });
                } else {
                    this.passHint.html('密码不能为空');
                    this.passHint.css({
                        color: 'red',
                    });
                    this.passwordflag = false;
                }
            });
            this.sub.on('submit', () => {
                if (this.name.val() === "") {
                    this.nameHint.html("用户名不能为空");
                    this.nameHint.css({
                        color: "red",
                    });
                    this.userflag = false;
                }
                if (this.pass.val() === "") {
                    this.passHint.html("密码不能为空");
                    this.passHint.css({
                        color: "red",
                    });
                    this.passwordflag = false;
                }
                if (!this.userfalg || !this.passwordflag) {
                    return false;
                }
            });
        }
    }
    new Registry().init();
})(jQuery);






