!function ($) {
    class log {
        constructor() {
            this.username = $(".yonghuming");
            this.password = $(".mima");
            this.login = $(".denglu");
        }
        init() {
            this.login.on("click", () => {
                $.ajax({
                    type: "post",
                    url: "http://10.31.152.18/DNF/php/login.php",
                    data: {
                        user: this.username.val(),
                        pass: this.password.val()
                    }
                }).done((result) => {
                    console.log("aaa" + result + "aaa")
                    if (result) { //匹配成功
                        location.href = '../src/index1.html';
                        localStorage.setItem('username', this.username.val());
                    } else { //匹配失败
                        this.password.val('');
                        alert('用户名或者密码错误');
                    }
                });
            });
        }
    }
    new log().init();
}(jQuery)
