$(document).ready(function(e){
    
        $(".right").click(function(e){
            var $next = $(this).parent().prev().find(".focus").removeClass("focus").next("div");
            if ($next.length){
                $next.addClass("focus");
            }else{
               $(this).parent().prev().children().first().addClass("focus");
            }
        });

        $(".left").click(function(e){
            var $prev = $(this).parent().prev().find(".focus").removeClass("focus").prev("div");
            if ($prev.length){
                $prev.addClass("focus");
            }else{
                $(this).parent().prev().children().last().addClass("focus");
            }
        });
});