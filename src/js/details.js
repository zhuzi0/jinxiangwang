  var user = $.cookie("loginedUsers") ? $.cookie("loginedUsers") : "";
           if(user){
                
               $(".huan").html("欢迎，" + user );

           }else{
               $(".huan").html("欢迎进入我的金象网&gt;");
           }
 let cookieStr = $.cookie('cart') ? $.cookie('cart') : '';
        //转对象
        let cookieObj = convertCookieStrToCookieObj(cookieStr);
    var num = 0;
    for(let key in cookieObj){
          var sp = cookieObj[key];
           num += Number(sp.num);
    }
        $(".sele a").eq(0).find("b").html("购物车 " + num);
        $(".cart a u").html(num).css("color","#fff");
$(".classify").hover(function(){
	$(this).find("dl").css("display","block");
},function(){
	$(this).find("dl").css("display","none");
});

$('.small').css("width",($('.small img').eq(0).outerWidth() + 20) * $('.small img').length );

var count=0;
function qian(){
	  if(count==0){
	  	count =0
	  }else{
	  	count--
	  }
	   $('.small').css("left" , -count *($('.small img').eq(0).outerWidth() + 20) );
}
function hou(){
	  if(count>=$('.small img').length-4){
	  	count=$('.small img').length-4;
	  }else{
	  	count++;
	  }
	  $('.small').css("left" , -count *($('.small img').eq(0).outerWidth() + 20) );
}
 $('.s1').click(function(){
	qian();
}) 
$('.s2').click(function(){
	hou();
})
for(let j = 0 ; j < $('.small img').length ; j++){
	 $('.small img').eq(j).mouseover(function(){
         $('.show .showsmall').attr("src","images/O"+(j+1)+".jpg") ;
	})
}
$('.show').mouseover(function(){
	 $('.show .showbig').attr("src",$('.show .showsmall').attr("src"));
	 $('.filter').css("display","block");
     $('.big').css("display","block");
})
  $('.show').mouseleave(function(){
	
	 $('.filter').css("display","none");
     $('.big').css("display","none");
})


$('.show').mousemove(function(evt){
	        var l = evt.pageX - $(this).offset().left -$('.filter').width()/2;
var t = evt.pageY - $(this).offset().top - $('.filter').height()/2;
l = l < 0 ? 0 :(l >  210 ? 210  : l );
    	t = t < 0 ? 0 :(t >  210 ? 210  : t );
	$('.filter').css({left : l,top : t});

      $('.show .showbig').css({"height":840,"left": - 2 * l,"top":-2*t,"width":840});

})

  
$(window).scroll(function(){
if($(this).scrollTop() > 882){
	$(".nv").css({"position":"fixed","top":20,"left":275});
}else{
	$(".nv").css({"position":"absolute","top":0,"left":0});
}

  if($(this).scrollTop() > 924){
  	$(".product").css({"position":"fixed","top":40,"left":1074.5});
   }else{
   	$(".product").css({"position":"absolute","top":0,"left":802});
   }
  
   if($(this).scrollTop()>=6678){
   	$(".product").css({"position":"absolute","top":0,"left":802});
   }
}) 
$(".nv ul li").each(function(){
	     $(this).hover(function(){
	     	$(this).css({"background":"#4496ee","color" :"#fff"});
	     },function(){
	     	$(this).css({"background":"#eee","color" :"#333"});
	     	$(".nv ul li").eq(0).css({"background":"#4496ee","color":"#fff"})
	     })
})



$(function(){
  var n = parseInt($(".shu input").val());
   $(".num .jishu .bttn .button1").click(function(){
       var num = $(".shu input").val();
          if($(".shu input").val()>=46){
            $(".shu input").val("46");
          }else{
             num++;

          }
          $(".shu input").val(num);
          n = parseInt($(".shu input").val());
})
  $(".num .jishu .bttn .button2").click(function(){
       var num = $(".shu input").val();
          if($(".shu input").val()<=1){
             $(".shu input").val("1");
          }else{
             num--;             

          }
          $(".shu input").val(num);
          n = parseInt($(".shu input").val());

})
   init();
   $(".order .cart").click(function(){
    window.location = 'cart.html';
   })
   //加入购物车按钮
   var $btn = $(".add");
   
   $btn.click(function(event){
   		//alert(event.pageX + ':' + event.pageY)
         let goodId = $(this).parent('.good-c').attr('data-good-id');
         let goodSrc = $(".show .showsmall").attr("src");
         let goodName= $(".tit").html();
    
          let goodPrice = parseInt($(".p2").find("span").html());
        
     
         //获取当前cookie
         let cookieStr = $.cookie('cart') ? $.cookie('cart') : '';
         //alert(cookieStr);
         //转对象
         let cookieObj = convertCookieStrToCookieObj(cookieStr);
         //

         if(goodId in cookieObj){
           cookieObj[goodId].num =  cookieObj[goodId].num + n;
         }else{
           cookieObj[goodId] = {
             "src" : goodSrc,
             "name" : goodName,
             "price" : goodPrice,
             "num" : 1
           }
         }
          //创建cookie
         $.cookie('cart',JSON.stringify(cookieObj),{expires : 7,path : '/'});
         let $img =  $(".show .showsmall").clone().css({width:50,height:50});
          // alert(event.pageX + ':' + event.pageY)
         
           $img.fly({
          start: {
            left: event.clientX,//抛物体起点横坐标
            top: event.clientY   //抛物体起点纵坐标
          },
          end: {
            left: $(".order .cart").offset().left ,//抛物体终点横坐标
            top: $(".order .cart").offset().top - $(window).scrollTop() , //抛物体终点纵坐标
            width : 0,
            height : 0
          },
          autoPlay:true,
          onEnd: function() {
            $img.remove();
            var num = parseInt( $(".order .cart").find("span").html());
            var num1= parseInt(/(\d+)/.exec($(".sele a").eq(0).find("b").html())) ;
           
            //alert(num);
            $(".order .cart").find("span").html(num + n);
            $(".sele a").eq(0).find("b").html("购物车(" + (num1 + n) + ")");
          }
        });
       
   })
           
})
//初始化购物车
  function init(){
    let cookieStr = $.cookie('cart') ? $.cookie('cart') : '';
    let cookieObj = convertCookieStrToCookieObj(cookieStr);
    var num = 0;
    for(var key in cookieObj){
      num += cookieObj[key].num;
    }
    $(".sele a").eq(0).find("b").html("购物车(" + num + ")");
     $(".order .cart").find("span").html(num);
  }
  //将json字符串转为json对象
  function convertCookieStrToCookieObj(cookieStr){
    if(!cookieStr){
      return {};
    }
    return JSON.parse(cookieStr);
  }
  
$("#hanging a").eq(0).hover(function(){
  
             $(this).find(".xin").css("display","block");
},function(){
               $(this).find(".xin").css("display","none");
})
      
$("#hanging a").eq(2).hover(function(){
  
             $(this).find(".xiaowei").css("display","block");
},function(){
               $(this).find(".xiaowei").css("display","none");
})
$("#hanging a").eq(3).click(function(){
  
             $("html,body").animate({"scrollTop": '0px'}, 1000);
})    



