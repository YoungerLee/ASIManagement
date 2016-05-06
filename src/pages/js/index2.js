$(function(){
  var index = {
    //变量声明，只用一次的jq对象不要用变量
    index: 1,
    alt: 1,
    animated: false,
    timer: 0,
    list : $(".listImage"),
    //绑定事件都放在这里
    _bindEvent: function(){
      var self = this
      $("#next").bind("click",function(){
        if(!self.animated){
          self.index == 4? 1:self.index + 1;
          self.alt == 4? 1: self.alt + 1;
          
          self._showButtons();
          self._showTitle();
          self._animate(-1348);
        }
	    });
      $("#prv").bind("click",function(){
        if(!self.animated){
          self.index == 1? 4: self.index - 1;
          self.alt == 1? 4:self.alt - 1;
          
          self._showButtons();
          self._showTitle();
          self._animate(1348);
        }
	    });
      $(".Buttons>span").each(function(){
        $(this).bind("click",function(){
          if($(".listImage").is(":animated") || $(this).attr("class") == "on"){
            return;
          }
          var myIndex = parseInt($(this).attr("index"));
          var offset = -1348 * (myIndex - self.index);
          if(!self.animated){
            self._animate(offset);
          }
          self.index = myIndex;
          self.alt = myIndex;
          self._showButtons();
          self._showTitle();
        })
      });
    },
    //初始化，唯一入口
    init: function(){
      var self = this;
      self._bindEvent()
      $(function(){
        self._ready();
      })
    },
    //页面加载完成后的工作
    _ready: function(){
      $(".head_up").css("max-width",1348 + "px");
      $(".head_middle").css("max-width",1348 + "px");
      $(".head_bottom").css("max-width",1348 + "px");
      
      $(".container_3").hover(this._stop,this._play);
      this._play();
    },
    //其他方法
    _animate: function(offset){
      var self = this;
      self._animated = true; 
      var newleft = parseInt($(".listImage").css("left")) + offset;
      var left = parseInt($(".listImage").css("left")) + offset + "px" ;
      var time = 300;//总的位移时间
      var interval = 10;//每次位移的时间
      var speed = offset / (time / interval);//每次的位移
      function go(){
        if((speed < 0 && parseInt($(".listImage").css("left")) > newleft) || (speed > 0 && parseInt($(".listImage").css("left")) < newleft)){
          self.list.css("left",parseInt(self.list.css("left")) + speed + "px");
          setTimeout(go,interval);
        }else{
          self.animated = false;
          $(".listImage").css("left",left);
          if(newleft > -1348){
            self.list.css("left",-5392 + "px"); 
          }
          if(newleft < -5392){
            self.list.css("left",-1348 + "px");
          }
        }
      }
      go();
    },
    _play: function(){
      this.timer = setInterval(function(){
			  next.click();
		  },3000);
    },
    _stop: function(){
      clearInterval(this.timer);
    },
    _showButtons: function(){
      $(".Buttons>span").eq(this.index - 1).addClass("on").siblings().removeClass("on");
    },
    _showTitle: function(){
      var content = $(".image>img").eq(this.alt - 1).attr("data");
		  $(".title>p").text(content);
    }
  }
  //程序从这里开始执行
  index.init()
});