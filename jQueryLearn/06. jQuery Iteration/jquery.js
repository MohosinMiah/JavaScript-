jQuery(document).ready(function($) {

    // implicit iteration
    $('#one li').css('color','orange');

    // explicit iteration
    $("#two li").each(function(i) {

    	var el = $(this);
    	var text = el.text();
    	var charLength = text.length;

    	el.text(
    		text + charLength
    	)
    	
    });
	
});