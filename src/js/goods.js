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
	     console.log($(this).scrollTop());
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