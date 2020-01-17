//数据接口:http://10.31.152.18/DNF/php/dnfbig.php
; (function ($) {
    class renbig {
        constructor() {
            this.bigAd = $('#bigAd');
        }
        init() {
            $.ajax({
                url: "http://10.31.152.18/DNF/php/dnfbig.php",
                dataType: 'json'
            }).done(
                (data) => {
                    let value = data[0];
                    //字符串拼接
                    let $strbig = '';
                    $strbig += `
                    <a href="http://10.31.152.18/DNF/src/details.html?=${value.sid}" class="biga">
                    <img src="${value.picurl}" alt="">
                </a>
                    `
                    this.bigAd.html($strbig);
                })
        }
    }
    new renbig().init();

    //左右
    class renzuo {
        constructor() {
            this.section_2 = $('#section_2');
        }
        init() {
            $.ajax({
                url: "http://10.31.152.18/DNF/php/dnfbig.php",
                dataType: 'json'
            }).done(
                (data) => {
                    let value1 = data[1];
                    let value2 = data[2];
                    let $stra1 = '';
                    //字符串拼接
                    $stra1 += `
                    <a href="http://10.31.152.18/DNF/src/details.html?=${value1.sid}" class="zuo">
                    <img src="${value1.picurl}" alt="">
                </a>
                    <a href="http://10.31.152.18/DNF/src/details.html?=${value2.sid}" class="you">
                    <img src="${value2.picurl}" alt="">
                </a>
                    `
                    this.section_2.html($stra1);
                })
        }
    }
    new renzuo().init();

})(jQuery);