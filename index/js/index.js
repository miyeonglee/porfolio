var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    mousewheel: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  $(".mMenu").click(function () {
    $(".menu").toggleClass('on');
  });


  $(".box").click(function () {
    $(this).toggleClass('on');
    $(".box").not(this).removeClass("on");
  });