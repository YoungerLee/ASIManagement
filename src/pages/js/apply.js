$(function () {
  function specific(m){
          $(".right>div:eq("+m+")").removeClass();
          $(".right>div:eq("+m+")").addClass("on");
                  switch(m){
                    case 0:$(".right>p span").html("比赛在线报名");
                           break;
                    case 1:$(".right>p span").html("查询获奖信息");
                           break;
                    default:$(".right>p span").html("申请实验室");
                           break;
                  }
          }

    $(".right>div:eq(0)").removeClass();
    $(".right>div:eq(0)").addClass("on");
      
    for(var s = 0;s < 3;s++){
		     $(".others:eq("+s+")").bind("click",function (){
                  
  		     	  for (var i = 0;i<3;i++)
  		     	  {
  		           $(".others:eq("+i+")").css({"background-color":"#fff"});
                     $(".right").children("div").removeClass();
                     $(".right").children("div").addClass("hide");
  		     	  }
				
    				  $(this).css({"background-color":"#f2f2f2"});

              var oindex=$(this).index()-1;
              specific(oindex);


		     })
    }

    // for(var s = 0;s < 9;s++){
    //      $(".others:eq("+s+")").hover(function (){
    //               $(this).css({"background-color":"#f2f2f2"});
    //      },function (){
    //       $(this).css({"background-color":"#fff"});
    //     })
    // }

 });