$(function(){
	var container = $(".container_3");
	var list = $(".listImage");
	var title = $(".image>img");
	var buttons = $(".Buttons>span");
	var prv = $("#prv");
	var next = $("#next");
	var index = 1;
	var alt = 1;
	var animated = false;
	var timer;
	
	var index_1 = {
		_init:function(){
			//页面初始化
			container.hover(stop,play);
			
			play();
			
			//改变总体的width适应轮播图
			$(".head_up").css("max-width",1348 + "px");
			$(".head_middle").css("max-width",1348 + "px");
			$(".head_bottom").css("max-width",1348 + "px");
		},
		
		_bindEvent:function(){
			//绑定事件
			next.bind("click",function(){
				if(!animated){
					if(index == 4){
						index = 1;
					}
					else{
						index += 1;
					}
					if(alt == 4){
						alt = 1;
					}
					else{
						alt += 1;
					}
					showButtons();
					showTitle();
					animate(-1348);
				}
				
			});
			
			prv.bind("click",function(){
				if(!animated){
					if(index == 1){
						index = 4;
					}
					else{
						index -= 1;
					}
					if(alt == 1){
						alt = 4;
					}
					else{
						alt -= 1;
					}
					showButtons();
					showTitle();
					animate(1348);
				}
				
			});
			
			buttons.each(function(){
				$(this).bind("click",function(){
					if(list.is(":animated") || $(this).attr("class") == "on"){
						return;
					}
					var myIndex = parseInt($(this).attr("index"));
					var offset = -1348 * (myIndex - index);
					if(!animated){
						animate(offset);
					}
					index = myIndex;
					alt = myIndex;
					showButtons();
					showTitle();
				})
			})
		}
	};	
		
			function animate(offset){
				animated = true; 
				var newleft = parseInt($(".listImage").css("left")) + offset;
				var left = parseInt($(".listImage").css("left")) + offset + "px" ;
				var time = 300;//总的位移时间
				var interval = 10;//每次位移的时间
				var speed = offset / (time / interval);//每次的位移
				
				function go(){
					if((speed < 0 && parseInt($(".listImage").css("left")) > newleft) || (speed > 0 && parseInt($(".listImage").css("left")) < newleft)){
						list.css("left",parseInt(list.css("left")) + speed + "px");
						setTimeout(go,interval);
					}
					else{
						animated = false;
						$(".listImage").css("left",left);
						if(newleft > -1348){
							list.css("left",-5392 + "px"); 
						}
						if(newleft < -5392){
							list.css("left",-1348 + "px");
						}
		//				if(alt == 1)
					}
				}
				
				go();
				
			}
			
			function play(){
				timer = setInterval(function(){
					next.click();
				},3000);
			}
			
			function stop(){
				clearInterval(timer);
			}
			
			function showButtons(){
				buttons.eq(index - 1).addClass("on").siblings().removeClass("on");
			}
			
			function showTitle(){
				var content = title.eq(alt - 1).attr("data");
				$(".title>p").text(content);
			}
	
	index_1._init();
	index_1._bindEvent();
});
