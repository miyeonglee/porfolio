//캠퍼스
$(".campus").hide();
$(".campusbutton").click(function () {
  $(".campus").fadeToggle();
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