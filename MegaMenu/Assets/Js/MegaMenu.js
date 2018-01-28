// JavaScript Document
$(".list-group-item").click(function(e) {
		
		if($(window).width()<768){
			$(".list-content[data-Show]").css("display","none").removeAttr("data-Show");
			if($(this).children(".desc").html()==""){
				$(".list-group-item .desc").html("");
				$(this).children(".desc").html($(".list-content").eq($(this).index()).html())
			}else{
				$(".list-group-item .desc").html("");
			}
		}else{
			
			
			if($(".list-content").eq($(this).index()).attr("data-Show")!="true"){
				$(".list-content[data-Show]").css("display","none").removeAttr("data-Show");
				
				$(".list-content").eq($(this).index()).css("display","block");
				$(".list-content").eq($(this).index()).attr("data-Show","true")
				
			}else{
				$(".list-content[data-Show]").css("display","none").removeAttr("data-Show");
			}
		}
        e.stopPropagation();
    	e.preventDefault();
		
    });
	$(window).resize(function(e) {
        if($(window).width()<768){
			$(".list-content").css("display","none");
			
		}else{
			
			$(".list-group-item .desc").html("");
		}
    });