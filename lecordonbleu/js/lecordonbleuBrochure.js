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
    result += el.value + '<br><br>';
  });

  // 출력
  document.getElementById('result').innerHTML
    = result;

}

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


//전송버튼 유효성



$('.button').click(function () {

  var chkd = $(".bc input").is(":checked");
  if (!chkd) {
    $("#buttonlog").text("안내 책자를 선택해주세요");
  } else if ($("#name").val() == "") {
    $("#buttonlog").text("이름을 입력 해주세요");
    $("#name").focus();
}  else if ($("#tel").val() == "") {
  $("#buttonlog").text("전화번호를 입력 해주세요");
  $("#tel").focus();
}else if ($("#email").val() == "") {
  $("#buttonlog").text("이메일을 입력 해주세요");
  $("#email").focus();
} else{
  $("#buttonlog").text("");
}

});