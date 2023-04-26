// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/banner";
import "../common/footer";

$(".faq-item").on("click", function(){
    if($(this).find(".cont").css("display") === "block"){
        return;
    }
    $(".faq-item").find(".cont").slideUp();
    $(this).find(".cont").slideDown();
})