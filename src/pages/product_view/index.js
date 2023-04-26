// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
import Swiper from "swiper";

const thumbSwiper = new Swiper(".thumb-swiper", {
  //   loop: true,
  spaceBetween: 5,
  slidesPerView: 5,
  breakpoints: {
    768: {
      spaceBetween: 10,
      slidesPerView: 5,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //   freeMode: true,
  watchSlidesProgress: true,
});

const productSwiper = new Swiper(".product-swiper", {
  //   loop: true,
  spaceBetween: 10,

  thumbs: {
    swiper: thumbSwiper,
  },
});

$(".tab-item").on("click", function () {
  $(this).addClass("on").siblings().removeClass("on");
  const index = $(this).index();
  $(".cont-item").eq(index).show().siblings().hide();
});
