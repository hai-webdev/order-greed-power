// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
import Swiper from "swiper";
const bannerSwiper = new Swiper(".banner-swiper",{
    loop:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true
    }
})