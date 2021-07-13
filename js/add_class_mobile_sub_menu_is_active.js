// add_class_mobile_sub_menu_is_active.js

jQuery(document).ready(function( $ ) {

    $(document).delegate(".menu_item .menu-link", "click", function () {
        // $(this).toggleClass('is-active').next().toggleClass('is-active');
        $(this).toggleClass('is-active');
        $(".menu-link.is-active").not(this).removeClass("is-active").next().toggleClass('is-active');
        $(".menu_dropdown").slideToggle();
    });

});

// $(".menu-link").click(function(){
            //     $(".menu_dropdown").toggleClass("is-active");
            // });
            // $(".menu-link").click(function(){
                // $(".menu_dropdown.is-active").not(this).removeClass("is-active");
                // $(".menu_dropdown").toggleClass("is-active");
                // 
            //     $(this).children.toggleClass('is-active');                    
            // });  

// $('.panel-control').click(function(e) {
//     var panelID = $(this).attr("id");
//     $(this).addClass('active').siblings('.active').toggleClass('active');
//     if ($('#' + panelID + '-display').hasClass('active')) {
//       // do nothing
//     } else {
//       $('#' + panelID + '-display').toggleClass('active').siblings('.active').removeClass('active');
//     }
// });