$(document).ready(function(e){
        $(".arrow.right").click(function(){
            var $next = $(".focus").removeClass("focus").next("div",".slides");
            if ($next.length){
                $next.addClass("focus");
            }else{
                $("div:first",".slides").addClass("focus");
            }
        });
        $(".arrow.left").click(function(){
            var $prev = $(".focus").removeClass("focus").prev("div",".slides");
            if ($prev.length){
                $prev.addClass("focus");
            }else{
                $("div:last",".slides").addClass("focus");
            }
        });
});
