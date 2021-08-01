// add class is-active .js

jQuery(document).ready(function( $ ) {
    //  desktop accordian
    $("[class*='_list_title']").click(function(){
        $(this).parent().toggleClass("is-active");
        $(this).next("p").slideToggle();
        $(this).next("div").slideToggle();
        // if (jQuery(this).hasClass("is-active")){
        //     $(this).next("p").slideDown();	 
        // }
        // else {
        //     $(this).next("p").slideUp();
        // }
    });

    $("#quiz .btn").click(function(){
        $(this).parent().toggleClass("is-active");
        // $(".is-active .false").css("display : none")
    });

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
        $(this).next(".menu_dropdown").slideToggle();
        $(this).toggleClass("is-active");
        
		var count_active = 0;			
		// loops through all a links in menu
		var list_links = jQuery("#nav .menu_list .menu_item .menu-link");
		list_links.each(function(id, a_link) {
			 // if this menus open? is- active
			if (jQuery(a_link).hasClass("is-active")){
                // add to counter
                count_active++;	 
			}
		});	   
	   // if all are closed remove is-active class
	   if(count_active==0){
		   jQuery(".menu-icons").removeClass("is-active");
	   } else {
		// else add is-active class
		 jQuery(".menu-icons").addClass("is-active");
	   }
	   // end Ross changes 
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

