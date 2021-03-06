"use strict";

var user = $.cookie("loginedUsers") ? $.cookie("loginedUsers") : "";

if (user) {
  $(".huan").html("欢迎，" + user);
} else {
  $(".huan").html("欢迎进入我的金象网&gt;");
}

var cookieStr = $.cookie('cart') ? $.cookie('cart') : ''; //转对象

var cookieObj = convertCookieStrToCookieObj(cookieStr);
var num = 0;

for (var key in cookieObj) {
  var sp = cookieObj[key];
  num += Number(sp.num);
}

$(".sele a").eq(0).find("b").html("购物车 " + num);
$(".cart a u").html(num).css("color", "#fff");
$(".classify").hover(function () {
  $(this).find("dl").css("display", "block");
}, function () {
  $(this).find("dl").css("display", "none");
});
$(".bannera ul li").eq(0).find("button").click(function () {
  $(location).attr('href', 'goods.html');
});
$("#hanging a").eq(0).hover(function () {
  $(this).find(".xin").css("display", "block");
}, function () {
  $(this).find(".xin").css("display", "none");
});
$("#hanging a").eq(2).hover(function () {
  $(this).find(".xiaowei").css("display", "block");
}, function () {
  $(this).find(".xiaowei").css("display", "none");
});
$("#hanging a").eq(3).click(function () {
  $("html,body").animate({
    "scrollTop": '0px'
  }, 1000);
});
$(".medic div").each(function () {
  $(this).find("div").each(function () {
    $(this).hover(function () {
      $(this).parent().find("div").eq(0).find("div").stop().animate({
        "height": "0"
      }, "fast").find("a,p").css("display", "none");
      $(this).find("div").stop().animate({
        "height": "95"
      }, "fast").find("a,p").css("display", "block");
    }, function () {
      $(this).find("div").stop().animate({
        "height": "0"
      }, "fast").find("a,p").css("display", "none");
      $(this).parent().find("div").eq(0).find("div").stop().animate({
        "height": "95"
      }, "fast").find("a,p").css("display", "block");
    });
  });
});
$(".medic1 div").each(function () {
  $(this).find("div").each(function () {
    $(this).hover(function () {
      $(this).parent().find("div").eq(0).find("div").stop().animate({
        "height": "0"
      }, "fast").find("a,p").css("display", "none");
      $(this).find("div").stop().animate({
        "height": "95"
      }, "fast").find("a,p").css("display", "block");
    }, function () {
      $(this).find("div").stop().animate({
        "height": "0"
      }, "fast").find("a,p").css("display", "none");
      $(this).parent().find("div").eq(0).find("div").stop().animate({
        "height": "95"
      }, "fast").find("a,p").css("display", "block");
    });
  });
});
$(".medic2 div").each(function () {
  $(this).find("div").each(function () {
    $(this).hover(function () {
      $(this).parent().find("div").eq(0).find("div").stop().animate({
        "height": "0"
      }, "fast").find("a,p").css("display", "none");
      $(this).find("div").stop().animate({
        "height": "95"
      }, "fast").find("a,p").css("display", "block");
    }, function () {
      $(this).find("div").stop().animate({
        "height": "0"
      }, "fast").find("a,p").css("display", "none");
      $(this).parent().find("div").eq(0).find("div").stop().animate({
        "height": "95"
      }, "fast").find("a,p").css("display", "block");
    });
  });
});
$(".medic3 div").each(function () {
  $(this).find("div").each(function () {
    $(this).hover(function () {
      $(this).parent().find("div").eq(0).find("div").stop().animate({
        "height": "0"
      }, "fast").find("a,p").css("display", "none");
      $(this).find("div").stop().animate({
        "height": "95"
      }, "fast").find("a,p").css("display", "block");
    }, function () {
      $(this).find("div").stop().animate({
        "height": "0"
      }, "fast").find("a,p").css("display", "none");
      $(this).parent().find("div").eq(0).find("div").stop().animate({
        "height": "95"
      }, "fast").find("a,p").css("display", "block");
    });
  });
});
$(".medic4 div").each(function () {
  $(this).find("div").each(function () {
    $(this).hover(function () {
      $(this).parent().find("div").eq(0).find("div").stop().animate({
        "height": "0"
      }, "fast").find("a,p").css("display", "none");
      $(this).find("div").stop().animate({
        "height": "95"
      }, "fast").find("a,p").css("display", "block");
    }, function () {
      $(this).find("div").stop().animate({
        "height": "0"
      }, "fast").find("a,p").css("display", "none");
      $(this).parent().find("div").eq(0).find("div").stop().animate({
        "height": "95"
      }, "fast").find("a,p").css("display", "block");
    });
  });
});

function convertCookieStrToCookieObj(str) {
  if (!str) {
    return {};
  }

  return JSON.parse(str);
}