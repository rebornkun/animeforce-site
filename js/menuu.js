$(function() {

    $(".toggle").on("click", function(){

        if($(".item").hasClass("active")){
            $(".item").removeClass("active")
            document.getElementById("menuu").src = "images/hamburger.png";
        }
        else
        {
            $(".item").addClass("active")
            document.getElementById("menuu").src = "images/close.png";
        }
    })
});