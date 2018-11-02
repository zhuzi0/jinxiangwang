 var user = $.cookie("loginedUsers") ? $.cookie("loginedUsers") : "";
     if(user){
     	    var obj = convertStrToObj(user);
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

    $('#inquiry .inform .inform-t h5').eq(0).hover(function(){
	$(this).css('borderBottom','2px solid #4998eb');
	$('#inquiry .inform .inform-b').css('display','block');
	$('#inquiry .inform .inform-d').css('display','none');
	$(this).next().css('borderBottom','0');
})
$('#inquiry .inform .inform-t h5').eq(1).hover(function(){
	$(this).css('borderBottom','2px solid #4998eb');
	$('#inquiry .inform .inform-d').css('display','block');
	$('#inquiry .inform .inform-b').css('display','none');
	$(this).prev().css('borderBottom','0');
})

     setInterval(function(){
     	  var  expiredate = new Date('2018-11-25 00:00:00');
          var  d         = new Date();
          var ms          =expiredate.getTime()-d.getTime();
          var year        =parseInt(ms/(365*24*60*60*1000));
          var day         =parseInt(ms%(365*24*60*60*1000)/(24*60*60*1000))
   	      var hours       =parseInt(ms%(365*24*60*60*1000)%(24*60*60*1000)/(60*60*1000));
   	      var minutes     =parseInt(ms%(365*24*60*60*1000)%(24*60*60*1000)%(60*60*1000)/(60*1000));
   	      var seconds     =parseInt(ms%(365*24*60*60*1000)%(24*60*60*1000)%(60*60*1000)%(60*1000)/1000);
                hours = mendZero(hours);
                minutes = mendZero(minutes);
                seconds = mendZero(seconds);
   	       $('main .rush .rush-t .rush-t-l .date .datee').eq(0).html(hours);
           $('main .rush .rush-t .rush-t-l .date .datee').eq(1).html(minutes);
           $('main .rush .rush-t .rush-t-l .date .datee').eq(2).html(seconds);
     },1000);

 $.get("ajax/ajax1.txt", function(data){
       var arr = JSON.parse(data);
      $.each(arr,function(i,value){
		      	   $(`<li>
		      	           <div class="li-l">
	                             	 <h4>${value.effect}</h4>
	                             	 <h5>${value.sample}</h5>
	                             	 <p>
		                             	 <span>${value.newmoney}</span>
		                             	 <s>${value.oldmoney}</s>
	                             	 </p>
	                          </div>
	                            <a href="#">
	                                <img src="${value.img}"/> 
	                            </a>
                      </li>`).appendTo("main .rush .rush-t .rush-t-r .ru");
		      
      })
      	
})

$.get("ajax/ajax2.txt",function(data){
	 var  object = JSON.parse(data);
	 var  arr1   = object.ws;
	 $.each(arr1,function(i,v){
	 	     $(` <li>
                   	   <img src="${v.img}">
                   	   <p>${v.show}</p>
                   	   <div class="money">
                   	   <span>${v.newmoney}</span>
                   	   <s>${v.oldmoney}</s>
                   	   </div>
				   </li>`).appendTo("main .caw .title .title-r .zxyp ul");
	 })

});

$.get("ajax/ajax2.txt",function(data){
	 var  object = JSON.parse(data);
	 var  arr2   =object.fkyy;
	 $.each(arr2,function(i,v){
	 	     $(` <li>
                   	   <img src="${v.img}">
                   	   <p>${v.show}</p>
                   	   <div class="money">
                   	   <span>${v.newmoney}</span>
                   	   <s>${v.oldmoney}</s>
                   	   </div>
				   </li>`).appendTo("main .caw .title .title-r .fkyy ul");
	 })

});
$.get("ajax/ajax2.txt",function(data){
	 var  object = JSON.parse(data);
	 var  arr3   =object.gmyy;
	 $.each(arr3,function(i,v){
	 	     $(` <li>
                   	   <img src="${v.img}">
                   	   <p>${v.show}</p>
                   	   <div class="money">
                   	   <span>${v.newmoney}</span>
                   	   <s>${v.oldmoney}</s>
                   	   </div>
				   </li>`).appendTo("main .caw .title .title-r .gmyy ul");
	 })

});
$.get("ajax/ajax2.txt",function(data){
	 var  object = JSON.parse(data);
	 var  arr4   =object.guke;
	 $.each(arr4,function(i,v){
	 	     $(` <li>
                   	   <img src="${v.img}">
                   	   <p>${v.show}</p>
                   	   <div class="money">
                   	   <span>${v.newmoney}</span>
                   	   <s>${v.oldmoney}</s>
                   	   </div>
				   </li>`).appendTo("main .caw .title .title-r .guke ul");
	 })

});
$.get("ajax/ajax2.txt",function(data){
	 var  object = JSON.parse(data);
	 var  arr5   =object.pifu;
	 $.each(arr5,function(i,v){
	 	     $(` <li>
                   	   <img src="${v.img}">
                   	   <p>${v.show}</p>
                   	   <div class="money">
                   	   <span>${v.newmoney}</span>
                   	   <s>${v.oldmoney}</s>
                   	   </div>
				   </li>`).appendTo("main .caw .title .title-r .pifu ul");
	 })

});
$.get("ajax/ajax2.txt",function(data){
	 var  object = JSON.parse(data);
	 var  arr6   =object.changwei;
	 $.each(arr6,function(i,v){
	 	     $(` <li>
                   	   <img src="${v.img}">
                   	   <p>${v.show}</p>
                   	   <div class="money">
                   	   <span>${v.newmoney}</span>
                   	   <s>${v.oldmoney}</s>
                   	   </div>
				   </li>`).appendTo("main .caw .title .title-r .changwei ul");
	 })

});
$.get("ajax/ajax2.txt",function(data){
	 var  object = JSON.parse(data);
	 var  arr7   =object.wuguan;
	 $.each(arr7,function(i,v){
	 	     $(` <li>
                   	   <img src="${v.img}">
                   	   <p>${v.show}</p>
                   	   <div class="money">
                   	   <span>${v.newmoney}</span>
                   	   <s>${v.oldmoney}</s>
                   	   </div>
				   </li>`).appendTo("main .caw .title .title-r .wuguan ul");
	 })

});
for(var m = 0 ; m < 6 ; m++){
		$("main .caw").eq(m).find(" .title .title-r a").eq(0).hover(function(){
			$(this).find(".zxyp").css('display',"block");
			$(this).addClass("te");
			$(this).siblings().removeClass("te");
			$(this).siblings().find(".fkyy , .gmyy ,.guke, .pifu , .changwei ,.wuguan ").css("display","none");
		});
		$("main .caw").eq(m).find(" .title .title-r a").eq(1).hover(function(){
			$(this).find(".fkyy").css("display","block");
			$(this).addClass("te");
			$(this).siblings().removeClass("te");
			$(this).siblings().find(".zxyp , .gmyy ,.guke, .pifu , .changwei ,.wuguan ").css("display","none");
		});
		$("main .caw").eq(m).find(" .title .title-r a").eq(2).hover(function(){
			$(this).find(".gmyy").css("display","block");
			$(this).addClass("te");
			$(this).siblings().removeClass("te");
			$(this).siblings().find(".fkyy , .zxyp ,.guke, .pifu , .changwei ,.wuguan ").css("display","none");
		});
		$("main .caw").eq(m).find(" .title .title-r a").eq(3).hover(function(){
			$(this).find(".guke").css("display","block");
			$(this).addClass("te");
			$(this).siblings().removeClass("te");
			$(this).siblings().find(".fkyy , .gmyy ,.zxyp, .pifu , .changwei ,.wuguan ").css("display","none");
		});
		$("main .caw").eq(m).find(" .title .title-r a").eq(4).hover(function(){
			$(this).find(".pifu").css("display","block");
			$(this).addClass("te");
			$(this).siblings().removeClass("te");
			$(this).siblings().find(".fkyy , .gmyy ,.guke, .zxyp , .changwei ,.wuguan ").css("display","none");
		});

		$("main .caw").eq(m).find(" .title .title-r a").eq(5).hover(function(){
			$(this).find(".changwei").css("display","block");
			$(this).addClass("te");
			$(this).siblings().removeClass("te");
			$(this).siblings().find(".fkyy , .gmyy ,.guke, .pifu , .zxyp ,.wuguan ").css("display","none");
		});
		$("main .caw").eq(m).find(" .title .title-r a").eq(6).hover(function(){
			$(this).find(".wuguan").css("display","block");
			$(this).addClass("te");
			$(this).siblings().removeClass("te");
			$(this).siblings().find(".fkyy , .gmyy ,.guke, .pifu , .changwei ,.zxyp ").css("display","none");
		});

}

$("#LoutiNav ul li").hover(function() {
				//鼠标滑上去
				$(this).addClass("hover");
			}, function() {
				//鼠标移开
				$(this).removeClass("hover");
			});
			 //鼠标点击
			var mark = 1;
			$("#LoutiNav ul li").click(function() {
				mark = 2; //改变标记
				$("#LoutiNav ul li").find("span").removeClass("active");
				$(this).find("span").addClass("active");
				//点击左边导航 然后跳到指定的楼层
				var $index = $(this).index(); //找到了对应的序列号
				//alert($index);
				var $top = $("main .Louti").eq($index).offset().top; //获取制定Louti与浏览器上面的距离
				//alert($top);
				$("body,html").animate({
					scrollTop: $top
				}, 500, function() {
					mark = 1;
				}); //浏览器滚动的高度
			});
			 //浏览器窗口滚动事件
		

			  $(window).scroll(function() {
				if (mark == 1) {
					var $t = $(this).scrollTop(); //获取滚动条滚动的高度
					//document.title = $t;
					if ($t > 1000) { //通过滚动条来判断
						$("#LoutiNav").fadeIn(); //淡入 导航慢慢显示出来
					} else {
						$("#LoutiNav").fadeOut(); //淡出 导航慢慢消失
					}
					var $obj = $("#main .Louti");
					//循环每一个Louti 然后找到最先满足条件的那个 Louti
					$obj.each(function() {
						var $index = $(this).index();
						//楼层与浏览器上面的高度
						var $height = $obj.eq($index).offset().top + $(this).height() / 2;
						//alert($height) 
						//document.title = $t + "--" + $height;
						if ($t < $height) {
							$("#LoutiNav ul li").find("span").removeClass("active")
							$("#LoutiNav ul li").eq($index).find("span").addClass("active");
							return false;
						}
					});
				}
				
               if($(this).scrollTop()>=1796&&$(this).scrollTop()<2400){
               	      $("#LoutiNav ul li").find("span").removeClass("active");
				      $("#LoutiNav ul li").find("span").eq(0).addClass("active");    
               }else{
          	         $("#LoutiNav ul li").find("span").eq(0).removeClass("active");
				     
               }
              if($(this).scrollTop()>=2400&&$(this).scrollTop()<2900){
               	      $("#LoutiNav ul li").find("span").removeClass("active");
				      $("#LoutiNav ul li").find("span").eq(1).addClass("active");    
               }else{
          	         $("#LoutiNav ul li").find("span").eq(1).removeClass("active");
				     
               }
               if($(this).scrollTop()>=2900&&$(this).scrollTop()<3467){
               	      $("#LoutiNav ul li").find("span").removeClass("active");
				      $("#LoutiNav ul li").find("span").eq(2).addClass("active");    
               }else{
          	         $("#LoutiNav ul li").find("span").eq(2).removeClass("active");
				     
               }
               if($(this).scrollTop()>=3467&&$(this).scrollTop()<4198){
               	      $("#LoutiNav ul li").find("span").removeClass("active");
				      $("#LoutiNav ul li").find("span").eq(3).addClass("active");    
               }else{
          	         $("#LoutiNav ul li").find("span").eq(3).removeClass("active");
				     
               }
               if($(this).scrollTop()>=4198&&$(this).scrollTop()<4788){
               	      $("#LoutiNav ul li").find("span").removeClass("active");
				      $("#LoutiNav ul li").find("span").eq(4).addClass("active");    
               }else{
          	         $("#LoutiNav ul li").find("span").eq(4).removeClass("active");
				     
               }
               if($(this).scrollTop()>=4788&&$(this).scrollTop()<=5368){
               	      $("#LoutiNav ul li").find("span").removeClass("active");
				      $("#LoutiNav ul li").find("span").eq(5).addClass("active");    
               }else{
          	         $("#LoutiNav ul li").find("span").eq(5).removeClass("active");
				     
               }
			
			});
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

function mendZero(n){
		if(n < 10){
			return '0' + n;
		}else{
			return n;
		}
	}
//将字符串转为对象
function convertStrToObj(str){
	if(!str){
		return {};
	}
	var users = str.split(":");
	var obj = {};
	for(var i = 0; i < users.length; i ++){
		var data = users[i].split(",");
		obj[data[0]] = data[1];
	}
	return obj;
}
//将对象转化为字符串
function convertObjToStr(obj){
	var str = "";
	for(var usn in obj){
		var pwd = obj[usn];
		if(str){
			str += ":";
		}
		str += usn + "," + pwd;
	}
	return str;
}
function convertCookieStrToCookieObj(str){
    if(!str){
	         return {};
    }
     return JSON.parse(str);
}
