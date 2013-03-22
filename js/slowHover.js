(function( $ ){
	$.fn.slowHover = function(hover_image_src) {
		this.each(function() {
			$(this).css({'position': 'absolute'});
			var hover_image_element = $('<img>').attr('src', hover_image_src).css({'position': 'absolute', 'opacity': '0'});
			$(this).after(hover_image_element);
			$(this).next().hover(function(){
				$(this).animate({opacity: 1}, 1000);
			},function(){
				$(this).animate({opacity: 0}, 1000);
			});
		});
	};
})( jQuery );