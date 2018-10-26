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
function mendZero(n){
		if(n < 10){
			return '0' + n;
		}else{
			return n;
		}
	}
 setInterval(function(){
     	var  expiredate = new Date('2018-11-25 00:00:00');
          var  d          = new Date();
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
     },1000)

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
      	
});