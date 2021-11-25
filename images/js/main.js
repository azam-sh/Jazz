$(document).ready(function(){
	
	// вывод svg в html
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

	// инициализация слайдера
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	 // закрепление header
	 const header = $(".header"); 
	 const logoImg = $(".logo-image")
	 let scrollPos = $(window).scrollTop(); 

	 $(window).on("scroll load resize", function () {
			 headerHeight = header.innerHeight();
			 scrollPos = $(this).scrollTop();

			 if (scrollPos > headerHeight) {
					 header.addClass("fixed"); // 
					 logoImg.addClass("fixed");
			 } else {
					 header.removeClass("fixed");
					 logoImg.removeClass("fixed");  
			 }
	 });

	 // выпадение блоков
	 

});