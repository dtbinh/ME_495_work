
/*
 * Functions
 */
var toGalleryItem = function($target, maxScrollPosition) {
	if($target.length) {

		var newPosition = $target.position().left;

		if(newPosition <= maxScrollPosition) {
			$target.addClass('active');
			$target.siblings().removeClass('active');

			$('main#home section#recent-projects div#slider-wrapper ul').animate({
				left : - newPosition
			});
		}
		else {
			$('main#home section#recent-projects div#slider-wrapper ul').animate({
				left : -maxScrollPosition
			});
		}
		setSliderText();
	}
};

var setSliderText = function() {
	$('main#home section#recent-projects div#slider-info h2').html($('main#home section#recent-projects div#slider-wrapper ul li.active a h2').html());
	$('main#home section#recent-projects div#slider-info p').html($('main#home section#recent-projects div#slider-wrapper ul li.active a p').html());
}


$(window).load(function() {

	var totalWidth = 0;

	$('main#home section#recent-projects div#slider-wrapper ul li').each(function() {
		totalWidth += $(this).outerWidth(true);
	});

	var maxScrollPosition = totalWidth - $('main#home section#recent-projects div#slider-wrapper').outerWidth();

	$('main#home section#recent-projects div#slider-wrapper ul').width(totalWidth);
	$('main#home section#recent-projects div#slider-wrapper ul li:first').addClass('active');
	setSliderText();
	$('main#home section#recent-projects div#slider-wrapper button#slider-prev').click(function() {
		var $target = $('main#home section#recent-projects div#slider-wrapper ul li.active').prev();
		toGalleryItem($target, maxScrollPosition);
	});
	$('main#home section#recent-projects div#slider-wrapper button#slider-next').click(function() {
		var $target = $('main#home section#recent-projects div#slider-wrapper ul li.active').next();
		toGalleryItem($target, maxScrollPosition);
	});


});