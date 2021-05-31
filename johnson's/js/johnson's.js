<<<<<<< HEAD
var menu = ['존슨즈 신념', '존슨즈 안전성', '제품 소개', '구매하기'];
=======
var menu = ['HOME', '존슨즈 신념', '존슨즈 안전성', '제품 소개', '구매하기'];
>>>>>>> a02d911dd294ce97ba476c835092aa5d15098223
var swiper = new Swiper('.horizon', {
    slidesPerView: 1,
    mousewheel: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    scrollbar: {
<<<<<<< HEAD
        el: '.swiper-scrollbar',
        hide: true,
    },
    pagination: {
        el: '.swiper-pagination',
=======
        el: '.horizon > .swiper-scrollbar',
        hide: true,
    },
    pagination: {
        el: '.horizon > .swiper-pagination',
>>>>>>> a02d911dd294ce97ba476c835092aa5d15098223
              clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },
});

//로고 클릭시 스와이퍼 원하는 페이지로 이동
<<<<<<< HEAD
jQuery(document).ready(function(){
    $('.logo').click(function(){
        swiper.slideTo(0);
        //index넘버링으로 처리
    });
=======

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
>>>>>>> a02d911dd294ce97ba476c835092aa5d15098223
});
