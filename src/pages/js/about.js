$(function(){
	var about = {

       //绑定事件都放在这里
	   bindEvent: function(){
	    ///使用data-code绑定事件
	        $("li[data-code='tab']").bind("click",function(){

		            $("li[data-code='tab']").css({"background-color":"#fff"});
			        $(this).css({"background-color":"#f2f2f2"});
			        $("#right").children("div").removeClass();
			        $("#right").children("div").addClass("hide");
			        var oindex=$(this).index()-1;
			        about.specific(oindex);

		    })
	    },
	
        //初始化，唯一入口
	    init:function(){
		    about.bindEvent();
		    $(function(){
	        about.ready();
    	    });
	    },

        //页面加载完成后的工作
	    ready: function(){
	    	$("#right>div:eq(0)").removeClass();
	        $("#right>div:eq(0)").addClass("on");
	    },

	    specific: function(m){
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
                      case 8:$("#right>p span").html("科技活动部");
                             break;
                      default:alert("error");
                    }
	    }

    }
    //程序从这里开始执行
     about.init();
});