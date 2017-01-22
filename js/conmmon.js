	$(function(){
		 var oPic=$('.slider-pic');
         var oImg=oPic.find('li');
         var oLen=oImg.length;
         var oLi=oImg.width();

         oPic.width(oLen*oLi);//计算总长度
         var iNow=0;
         $(".btn-prve").click(function(){
              if(iNow>0){ 
               iNow--;
              }
             ClickScroll();
         })
         $(".btn-next").click(function(){
             if(iNow<oLen-1){
                 iNow++;
             }
             ClickScroll();
         })

         function ClickScroll(){
             oPic.animate({left:-iNow*oLi},500)
        }
	})
	$(function(){
		var menu=$(".clearfix>li");
		menu.each(function(){
			$(this).mouseenter(function(){
				var el=$(this).children(".nav-sub-drop").find("li");
				var h=el.height();
				var len=el.length;
				autoH=h * len + len + 1;
//				console.log(autoH);
				$(this).children(".nav-sub-drop").animate({
					"height": autoH
				}, 400).css("display","block");
			})
			$(this).mouseleave(function(){
				$(this).siblings().prevAll().find(".nav-sub-drop").hide().css("height","0");
				$(this).siblings().nextAll().find(".nav-sub-drop").hide().css("height","0");
				$(this).children(".nav-sub-drop").css("height",autoH);
			})
		})
		$(".nav-main").mouseleave(function(){
			$(".nav-sub-drop").hide().css("height","0");
		})
/*//		var menu=$(".clearfix>li");
//		$(".nav-sub-drop").hide();
//		menu.each(function(){
//			$(this).mouseenter(function(){
//				$(".nav-sub-drop").hide();
//				$(this).children(".nav-sub-drop").slideDown();
//			})
//			$(this).mouseleave(function(){
//				$(".nav-sub-drop").hide();
//				$(this).children(".nav-sub-drop").hide();
//			})
//		})*/
		$(".drop-menu").mouseenter(function(){
			$(this).children("ul").slideDown();
		})
		$(".drop-menu").mouseleave(function(){
			$(this).children("ul").hide();
		})
		
		$(".about").mouseenter(function(){
			$(this).children("ul").slideDown();
		})
		$(".about").mouseleave(function(){
			$(this).children("ul").hide();
		})
	})
	