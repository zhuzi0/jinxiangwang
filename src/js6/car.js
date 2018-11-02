"use strict";

$(function () {
  var user = $.cookie("loginedUsers") ? $.cookie("loginedUsers") : "";

  if (user) {
    $(".huan").html("欢迎，" + user);
  } else {
    $(".huan").html("欢迎进入我的金象网&gt;");
  } //获取cookie


  var cookieStr = $.cookie('cart') ? $.cookie('cart') : ''; //转对象

  var cookieObj = convertCookieStrToCookieObj(cookieStr); //遍历对象

  if ($.isEmptyObject(cookieObj)) {
    $(".blank").css("display", "block");
  } else {
    $(".blank").css("display", "none");
    var st = " <h2>\u5168\u90E8\u5546\u54C1<span>1</span></h2>\n\t                           <table>\n\t\t\t\t\t\t  \t    <tr>\n\t\t\t\t\t\t  \t        <td><input type=\"checkbox\" class=\"all\"/>\u5168\u9009</td>\n\t\t\t\t\t\t  \t        <td>\u5546\u54C1\u540D\u79F0</td>\n\t\t\t\t\t\t  \t        <td>\u5546\u54C1\u7F16\u53F7</td>\n\t\t\t\t\t\t  \t        <td>\u751F\u4EA7\u5382\u5BB6</td>\n\t\t\t\t\t\t  \t        <td>\u91D1\u8C61\u4EF7</td>\n\t\t\t\t\t\t  \t        <td>\u6570\u91CF</td>\n\t\t\t\t\t\t  \t        <td>\u5546\u54C1\u5408\u8BA1</td>\n\t\t\t\t\t\t  \t        <td>\u64CD\u4F5C</td>\n\t\t\t\t\t\t  \t    </tr>\n\t\t  \t                     <tr></tr>\n\t\t  \t                     </table>\n\t\t  \t                      ";
    $("main .margin").append(st);
    var zongshu = 0;

    for (var key in cookieObj) {
      var sp = cookieObj[key];
      var str = "\n\t\t  \t         \t      <tr class=\"goodInfo\" data-good-id=\"".concat(key, "\">\n\t\t\t\t\t  \t        <td><input type=\"checkbox\"/><img width=\"100px\" height=\"100px\" src=\"").concat(sp.src, "\" /></td>\n\t\t\t\t\t  \t        <td>").concat(sp.name, "</td>\n\t\t\t\t\t  \t        <td>55016</td>\n\t\t\t\t\t  \t        <td>\u5317\u4EAC\u540C\u4EC1\u5802\u80A1\u4EFD\u6709\u9650\u516C\u53F8\u5236\u836F\u5382</td>\n\t\t\t\t\t  \t        <td>").concat(sp.price, "</td>\n\t\t\t\t\t  \t        <td class=\"num\"><a href=\"javascript:;\" class=\"minus\" style=\"float:left;width:16px;height:20px;border:1px solid #cacbcb;border-right:0;margin-left:35px;line-height:20px;\">-</a>\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" id=\"\" value=\"").concat(sp.num, "\" style=\"width:50px;height:20px;text-align:center;float:left;border:1px solid #cacbcb;\"/>\n\t\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"plus\" style=\"float:left;width:16px;height:20px;border:1px solid #cacbcb;border-left:0;line-height:20px;\">+</a></td>\n\t\t\t\t\t  \t        <td class=\"total\">").concat(sp.price * sp.num, "</td>\n\t\t\t\t\t  \t        <td><a href=\"javascript:;\" class=\"del\">\u5220\u9664</a></td>\n\t\t  \t                 </tr>\n\t\t  \t         \t ");
      zongshu = zongshu + sp.num;
      $('main .margin table').append(str);
    }

    $(".sele a").eq(0).find("b").html("购物车(" + zongshu + ")");
    var stt = "<ul class=\"zong\">\n                        \t           <li><input type=\"checkbox\" class=\"all1\"/>\u5168\u9009</li>\n                        \t           <li class=\"batch\">\u6279\u91CF\u5220\u9664</li>\n                        \t           <li>\u6E05\u7A7A\u8D2D\u7269\u8F66</li>\n                        \t           <li><a href=\"male.html\">&lt;&lt;\u7EE7\u7EED\u8D2D\u7269</a></li>\n                        \t           <li>\u5546\u54C1\u603B\u4EF7(\u4E0D\u542B\u8FD0\u8D39)\uFF1A<span>\uFFE5".concat($('.total').html(), "</span></li>\n                        \t           </ul>\n                        \t           <div class=\"jiesuan\">\n\t\t\t\t\t\t\t\t      <button>\u53BB\u7ED3\u7B97</button>\n\t\t\t\t\t\t\t\t  </div>");
    $('main .margin').append(stt);
    $('.goodInfo .num .minus').click(function () {
      //找到当前商品的id
      var id = $(this).parents('.goodInfo').attr('data-good-id'); //获取cookie

      var cookieStr = $.cookie('cart') ? $.cookie('cart') : ""; //转对象

      var cookieObj = convertCookieStrToCookieObj(cookieStr); //数量大于1的时候减

      if (cookieObj[id].num > 1) {
        cookieObj[id].num--;
        zongshu--;
      } //加入cookie


      $.cookie('cart', JSON.stringify(cookieObj), {
        expires: 7,
        path: '/'
      });
      $(this).next().val(cookieObj[id].num); //文本框中的数量
      //合计

      $(this).parent().next().html(cookieObj[id].price * cookieObj[id].num);
      $(".sele a").eq(0).find("b").html("购物车(" + zongshu + ")");
      $(".zong li").eq(4).find("span").html("￥" + cookieObj[id].price * cookieObj[id].num);
    }); // 	//加号

    $('.goodInfo .num .plus').click(function () {
      //找到当前商品的id
      var id = $(this).parents('.goodInfo').attr('data-good-id'); //获取cookie

      var cookieStr = $.cookie('cart') ? $.cookie('cart') : ""; //转对象

      var cookieObj = convertCookieStrToCookieObj(cookieStr);
      cookieObj[id].num++;
      zongshu++; //加入cookie

      $.cookie('cart', JSON.stringify(cookieObj), {
        expires: 7,
        path: '/'
      });
      $(this).prev().val(cookieObj[id].num); //文本框中的数量
      //合计

      $(this).parent().next().html(cookieObj[id].price * cookieObj[id].num);
      $(".sele a").eq(0).find("b").html("购物车(" + zongshu + ")");
      $(".zong li").eq(4).find("span").html("￥" + cookieObj[id].price * cookieObj[id].num);
    }); // 	//文本框

    $('.goodInfo .num input').blur(function () {
      var id = $(this).parents('.goodInfo').attr('data-good-id'); //获取cookie

      var cookieStr = $.cookie('cart') ? $.cookie('cart') : ""; //转对象

      var cookieObj = convertCookieStrToCookieObj(cookieStr);
      var num = $(this).val();

      if (!(/^\d+$/.test(num) && num > 1)) {
        num = 1;
      }

      cookieObj[id].num = num; //加入cookie

      $.cookie('cart', JSON.stringify(cookieObj), {
        expires: 7,
        path: '/'
      });
      $(this).val(cookieObj[id].num); //文本框中的数量
      //合计

      $(this).parent().next().html(cookieObj[id].price * cookieObj[id].num);
    });
    $('.goodInfo .del').click(function () {
      var id = $(this).parents('.goodInfo').remove().attr('data-good-id'); //获取cookie

      var cookieStr = $.cookie('cart') ? $.cookie('cart') : ""; //转对象

      var cookieObj = convertCookieStrToCookieObj(cookieStr); //删除对象指定的属性

      delete cookieObj[id]; //加入cookie

      $.cookie('cart', JSON.stringify(cookieObj), {
        expires: 7,
        path: '/'
      });
      window.location.reload();
    });
    $('.zong li').eq(2).click(function () {
      var id = $('.goodInfo .del').parents('.goodInfo').remove().attr('data-good-id'); //获取cookie

      var cookieStr = $.cookie('cart') ? $.cookie('cart') : ""; //转对象

      var cookieObj = convertCookieStrToCookieObj(cookieStr); //删除对象指定的属性

      delete cookieObj[id]; //加入cookie

      $.cookie('cart', JSON.stringify(cookieObj), {
        expires: 7,
        path: '/'
      });
      window.location.reload();
    });
  }

  $(".all").click(function () {
    if ($(".all").is(':checked')) {
      $("input[type='checkbox']").prop("checked", true);
    } else {
      $("input[type='checkbox']").prop("checked", false);
    }
  });
  $(".all1").click(function () {
    if ($(".all1").is(':checked')) {
      $("input[type='checkbox']").prop("checked", true);
    } else {
      $("input[type='checkbox']").prop("checked", false);
    }
  });
  $(".batch").click(function () {
    if ($("input[type='checkbox']").is(':checked')) {
      var id = $('.goodInfo .del').parents('.goodInfo').remove().attr('data-good-id'); //获取cookie

      var _cookieStr = $.cookie('cart') ? $.cookie('cart') : ""; //转对象


      var _cookieObj = convertCookieStrToCookieObj(_cookieStr); //删除对象指定的属性


      delete _cookieObj[id]; //加入cookie

      $.cookie('cart', JSON.stringify(_cookieObj), {
        expires: 7,
        path: '/'
      });
      window.location.reload();
    }
  });
});

function convertCookieStrToCookieObj(str) {
  if (!str) {
    return {};
  }

  return JSON.parse(str);
}