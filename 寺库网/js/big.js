$(document).ready(function(){
	$("#zoomspan").mouseenter(function(){
		$("#float_layer").show();
		$("#big_pic").show();
})
	$("#zoomspan").mouseleave(function(){
		$("#float_layer").hide();
		$("#big_pic").hide();
})
		$("#zoomspan").mousemove(function(e){
			
			var left = e.pageX  - $("#small_pic").offset().left - $("#float_layer").width() /2;
			var top = e.pageY - $("#small_pic").offset().top - $("small_pic").height() / 2;
			
//			边界
   if(left <= 0){
   	left = 0;
   }else if(left >= $(this).width() - $("#float_layer").width()){
						left =$(this).width() - $("#float_layer").width();
					}
   if(top <= 0){
						top = 0;
					}else if(top >= $(this).height() - $("#float_layer").height()){
						top = $(this).height() - $("#float_layer").height();
					}
					$('#float_layer').css({"left" : left + "px"});
					$("#float_layer").css({"top" : top + 'px'});
					var pX = left / ($("#zoomspan").width() - $("#float_layer").width());
					var pY = top / ($("#zoomspan").height() - $("#float_layer").height());
					
					//设置大图的坐标值
					$("#big_pic img").css({"left" : - pX * ($("#big_pic img").width() - $("#big_pic").width()),
					"top ":- pY * ($("#big_pic img").height() - $("#big_pic").height()) 
					});
					console.log(top);
				})
	})
