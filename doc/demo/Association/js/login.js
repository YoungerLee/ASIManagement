$(function(){
	$(".List").hover(function(){
		$(this).children("ul").css({"display":"block","animation":"flipOutY 2s ease"});
	},function(){
		$(this).children("ul").css("display","none");
	})
});
