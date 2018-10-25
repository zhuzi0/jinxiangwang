//生成随机数
function radomnum(max,min){
	return parseInt(Math.random()*(max-min)+min);
}
//冒泡排序
function orderarr(arr){
	for(var i = 0 ;i <arr.length-1;i++){
       	  for(var j = 0;j<arr.length-1-i;j++){
       	  	 if(arr[j]>arr[j+1]){
       	  	 	var temp = arr[j];
       	  	 	    arr[j]=arr[j+1];
       	  	 	    arr[j+1]=temp;
       	  	 }
       	  }
       }
   return arr;
}
//选择排序
function orderselect(){
	for(var i=0 ;i<arr.length-1;i++){
         	for(var j=i+1;j<arr.length-1;j++){
         		if(arr[i]>arr[j]){
       	  	 	var temp = arr[i];
       	  	 	    arr[i]=arr[j];
       	  	 	    arr[j]=temp;
       	  	   }
         	}
         }
         return arr;
}
//删除重复的数字
//用选择排序删除重复
 function orderchong(){    
  for(var i = 0 ; i < arr.length-1;i++){
  	 for(var j=i+1;j<arr.length;j++){
  	 	if (arr[i]==arr[j]) {
  	 		arr.splice(j,1);
  	 		j--;
  	 	}
  	 }
     
  }
  return arr;
}
//生成随机颜色 document.body.style.background=randomcolor();
function randomcolor(){
     var str='0123456789abcdef';
     var s = '#';
     for(var i = 0;i<6;i++){
      s+= str.charAt(parseInt(Math.random()*16));
     }
   return  s;
  }   

  //产生日期
   function  showdate(date,sign){
              if(!sign){
                sign = '-';
              }
              var  
                  year = date.getFullYear(),
                   month=date.getMonth();
                   d= date.getDate();
                   hours=date.getHours();
                   minutes = date.getMinutes();
                   seconds = date.getSeconds();

               return  year +sign +buling(month) +sign+ buling(d)+' '+buling(hours)+':'+buling(minutes)+':'+buling(seconds);   
             }
  //补零
function buling(n){
              if(n<10){
                    return '0'+n;
              }else{
                return n;
             }

   } 

 //获取非行间样式的不兼容
function  huoqucss(biaoqian,shuxingzhi){
          if(biaoqian.currentStyle){
            return biaoqian.currentStyle[shuxingzhi];
          }else{
            return getComputedStyle(biaoqian,null)[shuxingzhi];
          }

       }
//阻止浏览器默认行为
function preventDefault(e){
           return e.preventDefault ? e.preventDefault():e.returnValue = false;
       }
//封装阻止事件冒泡
function stopPropagation(e){
          return e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
         }

//设置cookie
function  setcookie(cname,cvalue,ctime){
      var  d = new Date();
      d.setDate(d.getDate() + Number(ctime));
      document.cookie=cname +'='+cvalue+';path=/;expires='+d.toGMTString();
     }
     

//读取cookie数据
  function radcookie(cname){
      var  allcookie = document.cookie;
       var  arrcookie = allcookie.split('; ');
       for(var i = 0 ;i <arrcookie.length;i++){
        var item = arrcookie[i].split('=');
        if(cname == item[0]){
          return item[1];
        }
        
       }   

     }
     // console.log(radcookie('sex'));
//读取cookie数据
function getCookie(cName){
            var allcookie = document.cookie;
            var reg = new RegExp('(^|\\s)'+cName+'=([^;]+)');
            var arrcookie =reg.exec(allcookie);
            return arrcookie[2];
          }
     //删除cookie数据，只需将cookie时间设置过期
function deletecookie(cname,cvalue,ctime){
        setcookie(cname,null,-1);
     }
       // deletecookie('name');

//封装添加新的class名字
 function  addclass(ele,xinname){
                    var  allclass = ele.getAttribute('class');
                    var  reg = new RegExp('(^|\\s)'+xinname+'(\\s|$)');
                    if(!reg.test(allclass)){
                   ele.className += ' '+xinname;
                 }

              }
//自己封装的添加新的class名字
                // 自己包装的
               function  addclassname(ele,jiuname,xinname){
                    var str  ='xinname';
                   // var reg  =/(\s|^)'+jiuname+'(\s|$)/;      //是错的 ，字面量形式创建是禁止存在变量的
                   var reg = new RegExp('(^|\\s)'+attr+'(\\s|$)');
                   if(reg.test(str)){
                        ele.className = jiuname;
                   }else{
                         ele.className += ' '+xinname;
                   }
                }
               //  addclassname(odiv,'box','con');
//用来封装缓冲运动的，ele为标签节点。attr为属性，iTarget是你要设置的最后显示的值
 function  moremove(ele,attr,iTarget){
           clearInterval(ele.timer);
           ele.timer  = setInterval(function(){
            var  icur  = huoqucss(ele,attr);
            if(attr =='opacity'){
                icur  = icur * 100;
            }else{
                icur  = parseInt(icur);
            }
            var  speed = (iTarget - icur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
             if(icur == iTarget){
              clearInterval(ele.timer);
             }else{
                  if(attr =='opacity'){
                    ele.style[attr] = (icur + speed) /100;
                    ele.style.filter ='alpha(opacity='+(icur + speed)+')' ; 
                 }else{
                              ele.style[attr] = icur + speed + 'px';
                 }
             }            
           },30)
       } 




//获取非行间样式
        function getstyle(ele,attr){
          if(ele.currentStyle){
            return ele.currentStyle[attr];
          }else{
            return getComputedStyle(ele,null)[attr];
          }
        }
        //三个参数  ele是节点  ，json是对象 储存属性以及目标值，调用回调函数
        function move(ele,json,fn){
          //先关闭定时器
          clearInterval(ele.timer);

          //开启定时器
          ele.timer = setInterval(function(){
            //设置一个开关为的是多个属性传入时，一个属性达到目标值时，另一个属性没有到时，不关闭定时器
            var ostop = true;
            //遍历对象里的所有属性值
            for(attr in json){
            //获取属性的初始值，if判断是否是透明
              icur = getstyle(ele,attr);
              if(attr == 'opacity'){
                icur = icur * 100;
              }else{
                icur = parseInt(icur);
              }
            //设置速度为的是缓冲效果
            var speed = (json[attr] - icur) / 8;
            //调整speed
              speed = speed>0?Math.ceil(speed):Math.floor(speed);
            //判定这个开关是开启还是关闭 判断终止条件 (如果所有属性运动不完，把bStop = false);
              if(icur !=json[attr] ){
                ostop=false;
              }
            //最后设置调整后的样式
              if(attr == 'opacity'){
                ele.style.opacity = (icur + speed) /100;
                ele.style.filter  = 'alpha(opacity='+(icur + speed)+')';
              }else{
                ele.style[attr] = icur + speed +'px';
              }
            }
            //判断该开关是开启还是关闭，来设置定时器是否关闭
                       if(ostop){
                        clearInterval(ele.timer);
                        if(fn){
                          //做回调函数的判断（链式运动）
                          fn();
                        }
                       }
          },30)
        }