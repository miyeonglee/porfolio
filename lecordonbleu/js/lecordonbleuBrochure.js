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

//체크박스

function getCheckboxValue()  {
  // 선택된 목록 가져오기
  const query = 'input[name="brochure"]:checked';
  const selectedEls = 
      document.querySelectorAll(query);
  
  // 선택된 목록에서 value 찾기
  let result = '';
  selectedEls.forEach((el) => {
    result += el.value + ' ';
  });
  
  // 출력
  document.getElementById('result').innerText
    = result;
}



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
      // $("#email").val("");
      $("#email").focus();
      return false;
  } else { // 서로 맞는경우
      $("#emaillog").text("");
  }
});

//이름 유효성 검사
$("#name").keyup(function () {
  //이름 공백 검사
  if ($("#name").val() == "") {
      $("#namelog").text("이름을 입력해주세요");
      $("#name").focus();
      return false;
  }
  //이름 유효성 검사
  else if (!named.test($("#name").val())) {
      $("#namelog").text("이름형식에 맞게 입력해주세요");
      // $("#name").val("");
      $("#name").focus();
      return false;
  } else { // 서로 맞는경우
      $("#namelog").text("");
  }
});

// 모든폼에 입력을 다하면(유효성검사 완료) 전송하기 버튼 출력
$('#postBt').hide();
function showPostBt(){
    var allLogClear = $('#join input');
    if(allLogClear.val() !== ""){
        $('#postBt').show();
    }
}
