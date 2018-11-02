"use strict";

radom();
$(".btn").click(function () {
  var str = '';

  for (var i = 0; i < 4; i++) {
    var num = radomnum(48, 123);

    if (num >= 58 && num <= 64 || num >= 91 && num <= 96) {
      i--;
    } else {
      str += String.fromCharCode(num);
    }
  }

  $(" .bianhua").html(str);
});

function radom() {
  var str = '';

  for (var i = 0; i < 4; i++) {
    var num = radomnum(48, 123);

    if (num >= 58 && num <= 64 || num >= 91 && num <= 96) {
      i--;
    } else {
      str += String.fromCharCode(num);
    }
  }

  $(" .bianhua").html(str);
}

$("form p").eq(0).find("input").focusout(function () {
  var str = $("form p").eq(0).find("input").val();
  var reg = /^[\w\u4e00-\u9fa5-]{4,20}$/;

  if (reg.test(str)) {
    $("form p").eq(0).find("input").attr("style", "background:#f3f3f3 url(img/ddu.png) no-repeat  250px ;");
    $(".sb1").css("display", "none");
  } else {
    $(".sb1").css("display", "block");
    $("form p").eq(0).find("input").attr("style", "background:#f3f3f3 url(img/ren1.png) no-repeat  250px ;");
  }
});
$("form p").eq(1).find("input").focusout(function () {
  var str = $("form p").eq(1).find("input").val();
  var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)(?![.]+$)[0-9A-Za-z.]{6,20}$/;

  if (reg.test(str)) {
    $("form p").eq(1).find("input").attr("style", "background:#f3f3f3 url(img/ddu.png) no-repeat  250px ;");
    $(".sb2").css("display", "none");
  } else {
    $(".sb2").css("display", "block");
    $("form p").eq(1).find("input").attr("style", "background:#f3f3f3 url(img/suo1.png) no-repeat  250px ;");
  }
});
$("form p").eq(2).find("input").focusout(function () {
  var str1 = $("form p").eq(1).find("input").val();
  var str2 = $("form p").eq(2).find("input").val();

  if (str2 == '') {
    $(".sb3").css("display", "block");
    $("form p").eq(2).find("input").attr("style", "background:#f3f3f3 url(img/suo1.png) no-repeat  250px ;");
  } else {
    if (str1 == str2) {
      $("form p").eq(2).find("input").attr("style", "background:#f3f3f3 url(img/ddu.png) no-repeat  250px ;");
      $(".sb3").css("display", "none");
    } else {
      $(".sb3").css("display", "block");
      $("form p").eq(2).find("input").attr("style", "background:#f3f3f3 url(img/suo1.png) no-repeat  250px ;");
    }
  }
});
$("form p").eq(3).find("input").focusout(function () {
  var str = $("form p").eq(3).find("input").val();
  var reg = /0?(13|14|15|18|17)[0-9]{9}$/;

  if (reg.test(str)) {
    $("form p").eq(3).find("input").attr("style", "background:#f3f3f3 url(img/ddu.png) no-repeat  250px ;");
    $(".sb4").css("display", "none");
  } else {
    $(".sb4").css("display", "block");
    $("form p").eq(3).find("input").attr("style", "background:#f3f3f3 url(img/suo1.png) no-repeat  250px ;");
  }
});
var kai1 = false;
$("form p").eq(4).find("input").focusout(function () {
  var str = $("form p").eq(4).find("input").val();
  var str1 = $(".bianhua").html();

  if (str == str1) {
    kai1 = true;
    $(".sb5").css("display", "none");
  } else {
    kai1 = false;
    $(".sb5").css("display", "block");
  }
});
var kai2 = false;
$("form p").eq(5).find("input").focusout(function () {
  var str = $("form p").eq(5).find("input").val();
  var reg = /^[0-9]{4}$/;

  if (reg.test(str)) {
    kai2 = true;
    $(".sb6").css("display", "none");
  } else {
    kai2 = false;
    $(".sb6").css("display", "block");
  }
});
$(".read input").click(function () {
  if ($(".read input").is(':checked')) {
    $(".sb7").css("display", "none");
  } else {
    $(".sb7").css("display", "block");
  }
});
$(".register input").click(function () {
  var name = $(".user").val();
  var psd = $(".psd1").val();
  var tel = $(".phone").val(); //获取cookie

  var users = $.cookie('registerUsers') ? $.cookie('registerUsers') : ''; //转对象

  users = convertCookieStrToCookieObj(users);

  if ($(".read input").is(':checked')) {
    $(".sb7").css("display", "none");
    var str = $("form p").eq(5).find("input").val();
    var reg = /^[0-9]{4}$/;

    if (reg.test(str)) {
      kai2 = true;
      $(".sb6").css("display", "none");
    } else {
      kai2 = false;
      $(".sb6").css("display", "block");
    }

    if (kai1 && kai2) {
      if (name in users) {
        alert("用户名已被注册");
        window.location.href = "signin.html";
      } else {
        users[name] = psd;
        userStr = JSON.stringify(users);
        $.cookie("registerUsers", userStr, {
          expires: 7,
          path: "/"
        });
        alert("注册成功");
        window.location.href = "signin.html";
      }
    } else {
      if ($("form p").eq(4).find("input").val() != $(".bianhua").html()) {
        $(".sb5").css("display", "block");
      }
    }
  } else {
    $(".sb7").css("display", "block");
  }
});

function convertCookieStrToCookieObj(cookieStr) {
  if (!cookieStr) {
    return {};
  }

  return JSON.parse(cookieStr);
}