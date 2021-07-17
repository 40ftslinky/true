// .swap_state onclick add class state_on state_off .js

jQuery(document).ready(function( $ ) {
        
    // $(".swap_state").on("click", function() {
    //     $("div.state_off").addClass("state_on");
    //     $("div.state_on").removeClass("state_on").addClass("state_off");
    // });

    $(".swap_state_on").click(function(){
        $("div.state_on").fadeOut();
        $(".case_study_brand_wrap.state_on").fadeOut();
        $(".case_study_brand_wrap.state_off").fadeIn();
        // change btn state
        $(this).removeClass('btn-outline-white green-OL-txt').addClass('btn-white blue-txt');
        $(".swap_state_off").removeClass('btn-white green-txt').addClass('btn-outline-white blue-OL-txt');
    });
    $(".swap_state_off").click(function(){
        $("div.state_on").fadeIn();
        $(".case_study_brand_wrap.state_on").fadeIn();
        $(".case_study_brand_wrap.state_off").fadeOut();
        // change btn state
        $(this).removeClass('btn-outline-white blue-OL-txt').addClass('btn-white green-txt');
        $(".swap_state_on").removeClass('btn-white blue-txt').addClass('btn-outline-white green-OL-txt');
        
    });

});
