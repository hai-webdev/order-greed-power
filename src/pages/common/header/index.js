// 头部的js代码
import "./index.less";
import "swiper/css/swiper.min.css";
import {WOW} from "wowjs";
import "wowjs/css/libs/animate.css";

$(".top-box .menu").on("click", function () {
  $(".m-header .nav-container").slideToggle();
  $(".head-mask").fadeToggle();
});

new WOW().init();