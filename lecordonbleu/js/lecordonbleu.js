


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
  
  $(".mcampus").hide();
  $(".mcampusbutton").click(function () {
    $(this).next().slideToggle();
    $(".mcampus").not(this).next().hide();
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
    $(".quickmenu").hide();

  });
  $(".mX").click(function () {
    $("nav").removeClass("on");
    $(".top").show();
    $(".quickmenu").show();

  });


  $(".menu > li > a").click(function () {
    $(this).next().toggleClass("on");
    $(".menu > li > a").not(this).next().removeClass("on");
    return false;
  });
 

  //퀵메뉴
  var iw = window.innerWidth;
  if (iw < 641) {
    $(".quickmenu > a").hide();
    $(".quickmenu > div").click(function () {
      $(".quickmenu > a").slideToggle();
    });
  }
  


  // visual section
  var swiper1 = new Swiper('.swiper-container.visual', {
    spaceBetween: 30,
    effect: 'fade',
    autoplay: true,
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



//프로그램
if (iw > 640) {
  $(".prgbox > div").hover(function () {
    $(".prgbox > div").toggleClass("on");
    $(".prgbox > div").not(this).removeClass("on");
  });
}else{
    $(".prgbox > div").click(function () {
      $(".prgbox > div").toggleClass("on");
      $(".mremove").hide(); 
      $(".prgbox > div").not(this).removeClass("on");
    }
)};

if (iw > 640) {
  $(".pbutton").hover(function () {
    $(".pbutton").toggleClass("on");
  });
}

  // top버튼
  $(".top").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > $("header").height()) {
      $(".top").fadeIn("swing");
    } else {
      $(".top").fadeOut("swing");
    }
  });

  $( '.top' ).click( function() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 1000 );
    return false;
  } );


  var lastWidth = $(window).width();
  $(window).resize(function () {
    if ($(window).width() != lastWidth) {
      location.reload();
      lastWidth = $(window).width();
      return false;
    }
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

$(".se5 .online").click(function () {
  $(".se5 .open, .se5 .formopen").toggleClass("on");
  $(".personal").find(".pb").removeClass("on");
});

$(".se5 .pb").click(function () {
  $(this).toggleClass("on");
  $(".se5 .pb").not(this).removeClass("on");
  return false;
});









// 유효성 검사

var email = RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i);
var pass = RegExp(/^\d{3}-\d{3,4}-\d{4}$/);
var named = RegExp(/^[가-힣]+$/);


$("#name").keyup(function () {
  // 이름 공백 확인
  if ($("#name").val() == "") {
      $("#namelog").text("이름을 입력해주세요");
      $("#name").focus();
      return false;
  }    //이름 유효성 검사
  else if (!named.test($("#name").val())) {
      $("#namelog").text("이름형식에 맞게 입력해주세요");
      $("#name").focus();
      return false;
  }
  else { // 합당한 경우
    $("#namelog").text("");
}
});

// 전화번호 유효성 검사
$("#tel").keyup(function () {
  // 전화번호 공백 확인
  if ($("#tel").val() == "") {
      $("#tellog").text("전화번호를 입력해주세요");
      $("#tel").focus();
      return false;
  }
  // 전화번호 정규식으로 테스트
  else if (!pass.test($("#tel").val())) {
      $("#tellog").text("형식에 맞게 입력해주세요");
      $("#tel").focus();
      return false;
  } else { // 합당한 경우
      $("#tellog").text("");
  }
});


//이메일 유효성 검사
$("#email").keyup(function () {
  //이메일 공백 검사
  if ($("#email").val() == "") {
      $("#emaillog").text("이메일을 입력 해주세요");
      $("#email").focus();
      return false;
  }
  //이메일 유효성 검사
  else if (!email.test($("#email").val())) {
      $("#emaillog").text("이메일형식에 맞게 입력해주세요");
      $("#email").focus();
      return false;
  } else { // 서로 맞는경우
      $("#emaillog").text("");
  }
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