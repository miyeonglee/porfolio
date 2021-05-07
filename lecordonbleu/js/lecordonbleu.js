$(function() {
  $('.btn_close').click(function() {

      var chkd = $("#pop_day").is(":checked");
      if(chkd){
          $.cookie('popup', 'hidden', {expires : 1});
      }
      $('.cpopup').css('display', 'none');
  });

  if($.cookie('popup') == 'hidden'){
      $('.cpopup').css('display', 'none');
  }else{
      $('.cpopup').css('display', 'flex');
  }


  $('#coronaClose').click(function() {
      $('.cpopup').css('display', 'none');
  });
  
  $( "#draggable" ).draggable();
});





var swiper1 = new Swiper('.swiper-container.visual', {
  spaceBetween: 30,
  effect: 'fade',
  autoplay: true,
});

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


$(function(){
  var lastWidth = $(window).width();
  $(window).resize(function () {
      if ($(window).width() != lastWidth) {
          location.reload();
          lastWidth = $(window).width();
          return false;
      }
  });
});


$(function(){
  
	var embed = $('#youtubeplayer'); //동영상 코드
  
	$('.youtube').on('click', function(){ //레이어 열때
		var path = $(this).attr('href');
		$('.iy').append(embed);
		$(path).show();
	})
  
	$('.close').on('click', function(){ //레이어 닫을때
		$(this).parents('#pop').hide();
		$('.iy').empty();
	})
  
});





  //-----------------------------스크롤버튼
  $(".scroll span").each(function(){
      var thisOffset = $("."+$(this).data('id')).offset().top;

      $(this).click(function(){
          $("html, body").animate({
              scrollTop : thisOffset
          }, 1000);
          $(this).addClass('on');
      });
  });



//----------------------------섹션이동 시 리모콘에 하이라이트
$(document).scroll(function(){
  var scrolltop = $(window).scrollTop();
  $("header, section, footer").each(function(){
      if(scrolltop >= $(this).offset().top){
          $("span[data-id="+$(this).attr('class')+"]").addClass('on').siblings().removeClass('on');
      }
      else if(scrolltop >= $(".section7").offset().top +130){
          $("span[data-id=footer]").addClass('on').siblings().removeClass('on');
      }
  });
});

//이페이지에 적용된 스크롤리모콘은 각영역의 top = $(window).scrollTop()일때를 구현, 미리 켜지는 경우는 따로따로 값을 입력해야한다.
