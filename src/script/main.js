import "jquery";
//引入页面css
import '../stylesheets/index1.css';
import '../stylesheets/base.css';
import '../stylesheets/cartlist.css';
import '../stylesheets/details.css';
import '../stylesheets/louti.css';
import '../stylesheets/qq_login.css';
import '../stylesheets/registry.css';
//首页的js
import{//加载模块
    render
}from './index1.js';
new render().init();//使用渲染模块

//首页大图的js
import{//加载模块
    renbig,
    renzuo
}from './indexbig.js';
new renbig().init();//使用渲染模块
new renzuo().init();

//首页楼梯的js
import{//加载模块
    louti
}from './louti.js';
new louti().init();//使用渲染模块

//首页轮播图的js
import{//加载模块
    lunbotu
}from './lunbotu.js';
new lunbotu().init();//使用渲染模块

//购物车详情页的js
import{//加载模块
    Details
}from './details.js';
new Details().init();//使用渲染模块

//购物车详情页放大镜的js
import{//加载模块
    fdj
}from './mag.js';
new fdj().init();//使用渲染模块

//购物车列表的js
import{//加载模块
    Cartlist
}from './cartlist.js';
new Cartlist().init();//使用渲染模块

//注册页面的js
import{//加载模块
    Registry
}from './registry.js';
new Registry().init();//使用渲染模块

//登录页面的js
import{//加载模块
    log
}from './login.js';
new log().init();//使用渲染模块


