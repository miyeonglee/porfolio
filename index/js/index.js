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



// 타이핑 효과
  function autoType(elementClass, typingSpeed){
    var thhis = $(elementClass);
    thhis = thhis.find(".typing");
    
    var text = thhis.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";
    setTimeout(function(){
        for(var i = 0; i < amntOfChars; i++){
            (function(i,char){
                setTimeout(function() {        
                    newString += char;
                    thhis.text(newString);
                },i*typingSpeed);
            })(i+1,text[i]);
        }
    },1500);
}

$(document).ready(function(){
    autoType(".main", 150);
});

