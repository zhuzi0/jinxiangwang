$(".classify").hover(function(){
	$(this).find("dl").css("display","block");
},function(){
	$(this).find("dl").css("display","none");
});
$(".bannera ul li").eq(0).find("button").click(function(){
       $(location).attr('href', 'goods.html');
});