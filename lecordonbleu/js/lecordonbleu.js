
$(document).ready(function () {


  // 공지 팝업창
  $('.btn_close').click(function () {

    var chkd = $("#pop_day").is(":checked");
    if (chkd) {
      $.cookie('popup', 'hidden', { expires: 1 });
    }
    $('.notice').css('display', 'none');
  });

  if ($.cookie('popup') == 'hidden') {
    $('.notice').css('display', 'none');
  } else {
    $('.notice').css('display', 'flex');
  }
  $('#closeCheck').click(function () {
    $('.notice').css('display', 'none');
  });

  $("#draggable").draggable();


//캠퍼스
  $(".campus").hide();
  $(".showmap").click(function () {
    $(".campus").slideToggle();
  });
  

  $(".closemap").click(function () {
    $(".campusGate").hide();
    $(".campus").hide();
  });

  $(".campusbutton").click(function () {
    $(".campus").fadeToggle();
  });

  //nav
  $(".mMenu").click(function () {
    $("nav").addClass("on");
    $(".top").hide();
  });
  $(".mX").click(function () {
    $("nav").removeClass("on");
    $(".top").show();
  });


  $(".menu > li > a").click(function () {
    $(this).next().toggleClass("on");
    $(".menu > li > a").not(this).next().removeClass("on");
    return false;
  });
 

  // visual section
  var swiper1 = new Swiper('.swiper-container.visual', {
    spaceBetween: 30,
    effect: 'fade',
    autoplay: true,
  });


  $(".se1 > .youtube").click(function () {
    $(".se1 > iframe").toggleClass("on");
  });

  $(".se5 .online").click(function () {
    $(".se5 .open, .se5 .formopen").toggleClass("on");
    $(".personal").find(".pb").removeClass("on");
  });

  $(".se5 .pb").click(function () {
    $(this).toggleClass("on");
    $(".se5 .pb").not(this).removeClass("on");
    return false;
  });





  $(".ffoo > li > div").click(function () {
    $(this).next().toggleClass("on");
    $(".ffoo > li > div").not(this).next().removeClass("on");
    $(".fo").find("span").removeClass("on");
    return false;
  });

  $(".fo > div").click(function () {
    $(this).siblings().toggleClass("on");
    $(".ffoo").find(".sub").removeClass("on");
    return false;
  });





  $(".pprg > div").hover(function () {
    $(this).toggleClass("on");
    $(".pprg > div").not(this).removeClass("on");
  });

  $(window).resize(function () {
    if ($(window).width() < 641) {
      $(".pprg > div").click(function () {
        $(this).children(".firstp").toggleClass("on");
        $(".pprg > div").not(this).children(".firstp").removeClass("on");
      });
    }
  });

  // top버튼
  $(".top").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > $("header").height()) {
      $(".top").fadeIn("swing");
    } else {
      $(".top").fadeOut("swing");
    }
  });







  var lastWidth = $(window).width();
  $(window).resize(function () {
    if ($(window).width() != lastWidth) {
      location.reload();
      lastWidth = $(window).width();
      return false;
    }
  });




  var embed = $('#youtubeplayer'); //동영상 코드

  $('.youtube').on('click', function () { //레이어 열때
    var path = $(this).attr('href');
    $('.iy').append(embed);
    $(path).show();
  })

  $('.close').on('click', function () { //레이어 닫을때
    $(this).parents('#pop').hide();
    $('.iy').empty();
  })


});









// 스와이퍼


var swiper2 = new Swiper('.swiper-container.pswiper', {
  autoplay: true,
});

var swiper3 = new Swiper('.swiper-container.inews', {
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    }
  },
});






