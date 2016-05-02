$(function () {
  function specific(m){
          $("#right>div:eq("+m+")").removeClass();
          $("#right>div:eq("+m+")").addClass("on");
                  switch(m){
                    case 0:$("#right>p span").html("科协");
                           break;
                    case 1:$("#right>p span").html("主席团");
                           break;
                    case 2:$("#right>p span").html("学术部");
                           break;
                    case 3:$("#right>p span").html("培训部");
                           break;
                    case 4:$("#right>p span").html("宣传部");
                           break;
                    case 5:$("#right>p span").html("秘书部");
                           break;
                    case 6:$("#right>p span").html("外事部");
                           break;
                    case 7:$("#right>p span").html("竞赛管理部");
                           break;
                    default:$("#right>p span").html("科技活动部");
                           break;
                  }
          }

    $("#right>div:eq(0)").removeClass();
    $("#right>div:eq(0)").addClass("on");
      
    for(var s = 0;s < 9;s++){
		     $(".others:eq("+s+")").bind("click",function (){
                  
  		     	  for (var i = 0;i<9;i++)
  		     	  {
  		           $(".others:eq("+i+")").css({"background-color":"#fff"});
                     $("#right").children("div").removeClass();
                     $("#right").children("div").addClass("hide");
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