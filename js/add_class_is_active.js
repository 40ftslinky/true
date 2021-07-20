// add class is-active .js

jQuery(document).ready(function( $ ) {
    $("#burger-check").change(function(){
        if($(this).is(":checked")) {
            $("#nav").addClass("is-active");
            $(".pre-scrim").addClass("is-active");
            $("body").addClass("no_scroll");
                  
        } else {
            $("#nav").removeClass("is-active");
            $(".pre-scrim").removeClass("is-active");
            $("body").removeClass("no_scroll");
            $(".menu_dropdown").removeClass("is-active");
            $(".menu-link").removeClass("is-active");
            $(".menu-icons").remove("is-active");
        }
    }); 
    
    $(".menu_list .menu-link").on("click", function() {
        $(this).find(".menu_dropdown").slideToggle();
        // $(".menu-link").find(".is-active").remove("is-active");
        $(this).toggleClass("is-active");
        // $(".menu-icons").find(".is-active").remove("is-active");
        $(".menu-icons").toggleClass("is-active");
    });
    
    $(".pre-scrim").click(function(e){
        $("#burger-check").prop( "checked", false );
        $("#nav").removeClass("is-active");
        $(".pre-scrim").removeClass("is-active");
        $("body").removeClass("no_scroll");
        $(".menu_dropdown").removeClass("is-active");
        $(".menu-link").removeClass("is-active");
        $(".menu-icons").remove("is-active");

    });

});

