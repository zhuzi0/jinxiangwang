$(function(){
				//获取cookie
				let cookieStr = $.cookie('cart') ? $.cookie('cart') : '';
				//转对象
				let cookieObj = convertCookieStrToCookieObj(cookieStr);
				
  
				//遍历对象
				if($.isEmptyObject(cookieObj)){
					$(".blank").css("display","block");	
				}else{
					$(".blank").css("display","none");
					var  st =` <h2>全部商品<span>1</span></h2>
	                           <table>
						  	    <tr>
						  	        <td><input type="checkbox"/>全选</td>
						  	        <td>商品名称</td>
						  	        <td>商品编号</td>
						  	        <td>生产厂家</td>
						  	        <td>金象价</td>
						  	        <td>数量</td>
						  	        <td>商品合计</td>
						  	        <td>操作</td>
						  	    </tr>
		  	                     <tr></tr>
		  	                     </table>
		  	                      `;
		  	            $("main .margin").append(st);
		  	          var zongshu = 0;
		  	         for(let key in cookieObj){
		  	         	var sp = cookieObj[key];
		  	         	var str =`
		  	         	      <tr class="goodInfo" data-good-id="${key}">
					  	        <td><input type="checkbox"/>全选 <img width="100px" height="100px" src="${sp.src}" /></td>
					  	        <td>${sp.name}</td>
					  	        <td>55016</td>
					  	        <td>北京同仁堂股份有限公司制药厂</td>
					  	        <td>${sp.price}</td>
					  	        <td class="num"><a href="javascript:;" class="minus" style="float:left;width:16px;height:20px;border:1px solid #cacbcb;border-right:0;margin-left:35px;line-height:20px;">-</a>
								<input type="text" name="" id="" value="${sp.num}" style="width:50px;height:20px;text-align:center;float:left;border:1px solid #cacbcb;"/>
								<a href="javascript:;" class="plus" style="float:left;width:16px;height:20px;border:1px solid #cacbcb;border-left:0;line-height:20px;">+</a></td>
					  	        <td class="total">${sp.price * sp.num}</td>
					  	        <td><a href="javascript:;" class="del">删除</a></td>
		  	                 </tr>
		  	         	 `;
		  	         	    zongshu = zongshu + sp.num;
                        	$('main .margin table').append(str);
                        }
                          
                          $(".sele a").eq(0).find("b").html("购物车(" + zongshu + ")");
                        	var stt = `<ul class="zong">
                        	           <li><input type="checkbox"/>全选</li>
                        	           <li>批量删除</li>
                        	           <li>清空购物车</li>
                        	           <li><a href="male.html">&lt;&lt;继续购物</a></li>
                        	           <li>商品总价(不含运费)：<span>￥${$('.total').html()}</span></li>
                        	           </ul>
                        	           <div class="jiesuan">
								      <button>去结算</button>
								  </div>`;

            	   $('main .margin').append(stt);
            	   $('.goodInfo .num .minus').click(function(){
					//找到当前商品的id
					let id = $(this).parents('.goodInfo').attr('data-good-id');
					//获取cookie
					let cookieStr = $.cookie('cart') ? $.cookie('cart') : "";
					//转对象
					let cookieObj = convertCookieStrToCookieObj(cookieStr);
					//数量大于1的时候减
					if(cookieObj[id].num > 1){
						cookieObj[id].num --;
						zongshu--;
					}
					//加入cookie
					$.cookie('cart',JSON.stringify(cookieObj),{expires : 7,path : '/'});
					$(this).next().val(cookieObj[id].num); //文本框中的数量
					//合计
					$(this).parent().next().html(cookieObj[id].price * cookieObj[id].num);
					$(".sele a").eq(0).find("b").html("购物车(" + zongshu + ")");
                    $(".zong li").eq(4).find("span").html("￥"+cookieObj[id].price * cookieObj[id].num);
				})
			// 	//加号
				$('.goodInfo .num .plus').click(function(){
					//找到当前商品的id
					let id = $(this).parents('.goodInfo').attr('data-good-id');
					//获取cookie
					let cookieStr = $.cookie('cart') ? $.cookie('cart') : "";
					//转对象
					let cookieObj = convertCookieStrToCookieObj(cookieStr);
					cookieObj[id].num ++;
					zongshu++;
					//加入cookie
					$.cookie('cart',JSON.stringify(cookieObj),{expires : 7,path : '/'});
					$(this).prev().val(cookieObj[id].num); //文本框中的数量
					//合计
					$(this).parent().next().html(cookieObj[id].price * cookieObj[id].num);
					 
                      $(".sele a").eq(0).find("b").html("购物车(" + zongshu + ")");
                      $(".zong li").eq(4).find("span").html("￥"+cookieObj[id].price * cookieObj[id].num);
				})
			// 	//文本框
				$('.goodInfo .num input').blur(function(){
					let id = $(this).parents('.goodInfo').attr('data-good-id');
					//获取cookie
					let cookieStr = $.cookie('cart') ? $.cookie('cart') : "";
					//转对象
					let cookieObj = convertCookieStrToCookieObj(cookieStr);
					let num = $(this).val()
					if(!(/^\d+$/.test(num) && num > 1)){
						num = 1;
					}
					cookieObj[id].num = num;
					//加入cookie
					$.cookie('cart',JSON.stringify(cookieObj),{expires : 7,path : '/'});
					$(this).val(cookieObj[id].num); //文本框中的数量
					//合计
					$(this).parent().next().html(cookieObj[id].price * cookieObj[id].num);
				})
				$('.goodInfo .del').click(function(){
					let id = $(this).parents('.goodInfo').remove().attr('data-good-id');
					//获取cookie
					let cookieStr = $.cookie('cart') ? $.cookie('cart') : "";
					//转对象
					let cookieObj = convertCookieStrToCookieObj(cookieStr);
					//删除对象指定的属性
					delete cookieObj[id];
					//加入cookie
					$.cookie('cart',JSON.stringify(cookieObj),{expires : 7,path : '/'});
					window.location.reload();
				})
					$('.zong li').eq(2).click(function(){
					let id = $('.goodInfo .del').parents('.goodInfo').remove().attr('data-good-id');
					//获取cookie
					let cookieStr = $.cookie('cart') ? $.cookie('cart') : "";
					//转对象
					let cookieObj = convertCookieStrToCookieObj(cookieStr);
					//删除对象指定的属性
					delete cookieObj[id];
					//加入cookie
					$.cookie('cart',JSON.stringify(cookieObj),{expires : 7,path : '/'});
					window.location.reload();
				})
		  }
		  	         
	})			
		
		
				
			
			function convertCookieStrToCookieObj(str){
				if(!str){
					return {};
				}
				return JSON.parse(str);
			 }