var menu = ['HOME', '존슨즈 신념', '존슨즈 안전성', '제품 소개', '구매하기'];
var swiper = new Swiper('.horizon', {
    slidesPerView: 1,
    mousewheel: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    scrollbar: {
        el: '.horizon > .swiper-scrollbar',
        hide: true,
    },
    pagination: {
        el: '.horizon > .swiper-pagination',
              clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },
});

//로고 클릭시 스와이퍼 원하는 페이지로 이동

$('.logo').click(function(){
    swiper.slideTo(0);
    //index넘버링으로 처리
});



var swiper = new Swiper(".copy", {
    speed: 600,
    parallax: true,
    autoplay: true,
    
    pagination: {
      el: ".copy .swiper-pagination",
      clickable: true,

    },
    // navigation: {
    //   nextEl: ".copy .swiper-button-next",
    //   prevEl: ".copy .swiper-button-prev",
    // },
});



$(".sec04 > div").click(function(){
    $(this).addClass('on').siblings().removeClass('on');
});
