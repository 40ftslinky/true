  function popped(){
	jQuery(".post-scrim").addClass("is-visible");
		var from_top = jQuery(document).scrollTop();
		var win_height =jQuery( window ).height();
		var header_height =jQuery( "header" ).height();
		var main_top =jQuery( "main" ).offset().top;
	jQuery("#pop_up").addClass("popped");
		var pop_up_height = jQuery("#pop_up").outerHeight();
		var new_top = from_top   + ((win_height - pop_up_height)/2);
	jQuery("#pop_up").css({ top: new_top+'px' });
}

	jQuery(document).ready(function($){
		  jQuery(".post-scrim").click(function(){
			  jQuery("#pop_up").removeClass("popped");
			  jQuery(".post-scrim").removeClass("is-visible");
			});
			jQuery("#close").click(function(){
				jQuery("#pop_up").removeClass("popped");
				jQuery(".post-scrim").removeClass("is-visible");
		  });
	});

jQuery(document).ready(function($){
	jQuery(".btn-cta").click(function(){
		popped();
	});
});