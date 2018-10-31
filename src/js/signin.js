 radom();

 $(".kuang p .txt ").focus(function(){
 	  $(this).parent().css("border","1px solid #4496ee");
 	  $(this).prev().css("background","#f3f3f3 url(img/ren2.png) no-repeat center");
 })
  $(".kuang p .txt ").focusout(function(){
 	  $(this).parent().css("border","1px solid #d9d9d9");
 	  $(this).prev().css("background","#f3f3f3 url(img/ren1.png) no-repeat center");
 })
   $(".kuang p .psd ").focus(function(){
 	  $(this).parent().css("border","1px solid #4496ee");
 	  $(this).prev().css("background","#f3f3f3 url(img/suo2.png) no-repeat center");
 })
  $(".kuang p .psd ").focusout(function(){
 	  $(this).parent().css("border","1px solid #d9d9d9");
 	  $(this).prev().css("background","#f3f3f3 url(img/suo1.png) no-repeat center");
 })
     $(".kuang p .yan ").focus(function(){
 	  $(this).parent().css("border","1px solid #4496ee");
 	  $(this).prev().css("background","#f3f3f3 url(img/suo2.png) no-repeat center");
 })
  $(".kuang p .yan ").focusout(function(){
 	  $(this).parent().css("border","1px solid #d9d9d9");
 	  $(this).prev().css("background","#f3f3f3 url(img/suo1.png) no-repeat center");
 })
$(".btn").click(function(){
			 var str= '';
   for(var i=0;i<4;i++){
			var num = radomnum(48,123);
			if(num>=58&&num<=64||num>=91&&num<=96){
			         i--;
			}else{
			          str +=String.fromCharCode(num);
			}


       }
       $(".kuang .bianhua").html(str);
});


function  radom(){
     var str= '';
    for(var i=0;i<4;i++){
    	var num = radomnum(48,123);
    	if(num>=58&&num<=64||num>=91&&num<=96){
    		i--;
    	}else{
    		str +=String.fromCharCode(num);
    	}


     }
 $(".kuang .bianhua").html(str);
}

  //获取cookie
        let cookieStr = $.cookie('user') ;
        //转对象
        let cookieObj = convertCookieStrToCookieObj(cookieStr);
       
         let  num = $(".bianhua").html();
$(".sub").click(function(){
        
      if(($(".txt").val() == cookieObj.name && $(".psd").val() == cookieObj.password && $(".yan").val() == num)|| ($(".txt").val() == cookieObj.tel && $(".psd").val() == cookieObj.password && $(".yan").val() == num)){
              alert("登录成功");
              $(location).attr('href', 'index.html');
              
      }

});
  
function convertCookieStrToCookieObj(str){
        if(!str){
          return {};
        }
        return JSON.parse(str);
       }
