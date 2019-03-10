 
jQuery(document).ready(function ($) {

 
	// карусель
	$('.s-gal__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 600,
		infinite: true,
		loop: true,
		arrows: false,
		mobileFirst: true,
		 
	});

	$('.s-gal__slider,'+
	' .s-project__slider--js ,'+
	' .slider-for ,'+
	' .slider-for2 ')
.on('lazyLoaded', function(event, slick, image, imageSource){
	 image.parent().css('background-image', 'url(' + image.attr('src') + ')');
});
	 
});
 