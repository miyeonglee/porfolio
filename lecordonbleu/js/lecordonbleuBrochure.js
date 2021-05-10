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
    result += el.value + '<br>';
  });
  
  // 출력
  document.getElementById('result').innerHTML
    = result;
}



// 유효성 검사
$("#first-name").keyup(function () {
  // 성 공백 확인
  if ($("#first-name").val() == "") {
      $("#firstnamelog").text("성을 입력해주세요");
      $("#first-name").focus();
      return false;
  }else { // 합당한 경우
    $("#pwlog").text("");
}
});
$("#name").keyup(function () {
  // 이름 공백 확인
  if ($("#name").val() == "") {
      $("#namelog").text("이름을 입력해주세요");
      $("#name").focus();
      return false;
  }else { // 합당한 경우
    $("#pwlog").text("");
}
});






// 비밀번호 유효성 검사
$("#pw").keyup(function () {
  // 비밀번호 공백 확인
  if ($("#pw").val() == "") {
      $("#pwlog").text("비밀번호를 입력해주세요");
      $("#pw").focus();
      return false;
  }
  // 아이디와 비밀번호를 동일하게 쓴 경우
  else if ($("#id").val() == $("#pw").val()) {
      $("#pwlog").text("아이디와 비밀번호가 같습니다");
      $("#pw").val("");
      $("#pw").focus();
      return false;
  }
  // 비밀번호 정규식으로 테스트
  else if (!pass.test($("#pw").val())) {
      $("#pwlog").text("형식에 맞게 입력해주세요");
      $("#pw").focus();
      return false;
  } else { // 합당한 경우
      $("#pwlog").text("");
  }
});
// 비밀번호 확인란 유효성 검사
$("#checkpw").keyup(function () {
  // 비밀번호 확인란 공백 확인
  if ($("#checkpw").val() == "") {
      $("#checkpwlog").text("비밀번호 확인란을 입력해주세요");
      $("#checkpw").focus();
      return false;
  }
  // 비밀번호 서로확인
  else if ($("#pw").val() != $("#checkpw").val()) {
      $("#checkpwlog").text("비밀번호가 상이합니다");
      // $("#checkpw").val("");
      $("#checkpw").focus();
      return false;
  } else { // 서로 맞는경우
      $("#checkpwlog").text("");
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