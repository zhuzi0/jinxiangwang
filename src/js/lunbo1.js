//定义全局变量和定时器
var j = 0 ;
var timer1;
 
$(document).ready(function(){
  clearInterval(timer1);
  //用jquery方法设置第一张图片显示，其余隐藏
  $('.lz').eq(0).show().siblings('.lz').hide();
  $('.lunz').hover(function(){
      
        clearInterval(timer1);

  },function(){
           
       
         showTime1();
  })

       

  //调用showTime()函数（轮播函数）
  showTime1();
   
  //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
  $('.tb').hover(function(){
    //获取当前i的值，并显示，同时还要清除定时器
    j = $(this).index();
    Show1();
    clearInterval(timer1);
  },function(){
    //
    showTime1();
  });
   
   
});
 
 
//创建一个showTime函数
function showTime1(){
  clearInterval(timer1);
  //定时器
  timer1 = setInterval(function(){
    //调用一个Show()函数
    Show1();
    j++;
    //当图片是最后一张的后面时，设置图片为第一张
    if(j==3){
      j=0;
    }
  },2000);
}
 
 
//创建一个Show函数
function Show1(){
  //在这里可以用其他jquery的动画
  $('.lz').eq(j).fadeIn(300).siblings('.lz').fadeOut(300);
   
  //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
  $('.tb').eq(j).addClass('bg1').siblings('.tb').removeClass('bg1');

  
  
}