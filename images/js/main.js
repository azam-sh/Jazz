$(document).ready(function(){
	
	
	if($('.js-svg-img').length){
		$('.js-svg-img').each(function(){
			
			var $img = $(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');
			
			console.log(imgURL);
			
			$.get(imgURL, function(data) {
				var $svg = $(data).find('svg');
				
				console.log($svg);
				
				
				if(typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}
				$svg = $svg.removeAttr('xmlns:a');
				if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}
				$img.replaceWith($svg);
				$svg.addClass('ready');

			}, 'xml');
		});
	}
	
	
	$('.js-title-height').matchHeight();
	
	
	

    let catalogSlider = $(".catalog__slider");

    catalogSlider.slick({
        infinite: true, // если элементы заканчиваются - они повторяются заново
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false, // чтобы затемнялись отзывы
        arrows: true,
    });

    let reviewsSlider = $(".reviews__slider");

    reviewsSlider.slick({
        infinite: true, // если элементы заканчиваются - они повторяются заново
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false, // чтобы затемнялись отзывы
        arrows: true,
        dots: true,
    });



});