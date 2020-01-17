//数据接口:http://10.31.152.18/DNF/php/dnfdata.php
; (function ($) {
    class render {
        constructor() {
            this.section_1 = $('#section_1');
        }
        init() {
            $.ajax({
                url: "http://10.31.152.18/DNF/php/dnfdata.php",
                dataType: 'json'
            }).done(
                (data) => {
                    let $strhtml = '<ul>';
                    $.each(data, function (index, value) {//sid指的是传到后端的sid
                        $strhtml += `
                        <li>
                        <a href="http://10.31.152.18/DNF/src/details.html?sid=${value.sid}">
                        <img src="${value.picurl}">
                        <a class="linkTitle">${value.title}</a>
                        <span class="price">${value.price}元</span>
                        </a>
                        </li>
                        `
                    });
                    $strhtml += '</ul>';
                    this.section_1.html($strhtml);
                });
        }
    }
    new render().init();
})(jQuery);