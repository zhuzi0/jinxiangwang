radom();
$(".btn").click (function(){
			 var str= '';
   for(var i=0;i<4;i++){
			var num = radomnum(48,123);
			if(num>=58&&num<=64||num>=91&&num<=96){
			         i--;
			}else{
			          str +=String.fromCharCode(num);
			}


       }
       $(" .bianhua").html(str);
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
 $(" .bianhua").html(str);
}
