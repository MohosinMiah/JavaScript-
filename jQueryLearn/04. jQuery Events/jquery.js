/*
 During a event (click,scroll etc.):
	a) event.preventDefault() - removes the default browser behaviour
	b) return false - doesn't let the browser perform it's default function 
	   (a combination of event.preventDefault() and event.stopPropagation)
	c) event.stopPropagation() - prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
*/

jQuery(document).ready(function($) {

	$("[href='#our_text']").on('click', function(event) {

		$('p').slideToggle();
		
		event.preventDefault(); // removes the default behaviour of browser
	
	});

	$('nav a').on('click', function() {

		$('nav a').removeClass('active');
		$(this).addClass('active');

	});

	$("[href='#norm_txt']").on('click', function(event) {
		return false;
	});
	
});