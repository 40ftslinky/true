
// add class is-current-page .js

jQuery(document).ready(function( $ ) {
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $('#nav a').each(function() {
        if (this.href === path) {
            $(this).addClass('is-current-page');
        }
    });
});