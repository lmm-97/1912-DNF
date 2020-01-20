    class Details {
        constructor() {
            this.sid = location.search.substring(1).split('=')[1];//获取的sid
            // console.log(this.sid);
            this.spic = $('#spic');//小图
            this.spic = $('#spic');//小图
            this.bpic = $('#bpic');//大图
            this.sf = $('#sf');//小放
            this.bf = $('#bf');//大放
            this.list = $('#list');//小图列表
            this.list_ul = $('#list ul');//小图列表中ul
            this.count = $('#count');//购物车里面的数字
        }
        init(){
         $.ajax({
             url:'http://10.31.152.18/DNF/php/getsid.php',
             data:{//把sid传到后端
                 sid:this .sid
             },
             dataType:'json'
         }).done((detailsdata)=>{
            $('#spic img').attr('src', detailsdata.picurl);
            $('#bpic').attr('src', detailsdata.picurl);
            $('.loadtitle').html(detailsdata.title);
            $('.loadpcp').html(detailsdata.price);
            $('.miaoshu').html(detailsdata.description);
            //大图下方轮播小图
            let piclist=detailsdata.urls.split(',');//数组
            let $strhtml='';
            $.each(piclist,function(index,value){
                $strhtml+=`
                <li><img src="${value}"></li>
                `
            });
            this.list_ul.html($strhtml)
         });
         this.addcart();
        }

        addcart(){//购物车操作
            let goodsnum=[];//商品数量
            let goodsid=[];//商品sid
            function getcookie(){
                if(localStorage.getItem('cartnum')&&localStorage.getItem('cartsid')){//本地存储数量和编号
                    goodsnum=localStorage.getItem('cartnum').split(',');//变成数组
                    goodsid=localStorage.getItem('cartsid').split(',');
                }
            }
            $('.push a').on('click',()=>{
                getcookie();//执行
                if($.inArray(this.sid,goodsid)===-1){//数组中不存在，第一次添加
                goodsid.push(this.sid);
                localStorage.setItem('cartsid',goodsid);//存入sid
                goodsnum.push(this.count.val());
                localStorage.setItem('cartnum', goodsnum); //存入数量
                }else{//多次添加
                    let index = $.inArray(this.sid, goodsid); //当前sid在数组中对应的位置
                    let newnum = parseInt(goodsnum[index]) + parseInt(this.count.val());//原来存储的值+当前的值
                    goodsnum[index] = newnum; //新的数量
                    localStorage.setItem('cartnum', goodsnum); //存入数量
                }
            });
        }
    }
export{
    Details
}