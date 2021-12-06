$(document).ready(function(){
	
	// вывод svg в html
	if($('.js-svg-img').length){
		$('.js-svg-img').each(function(){
			
			var $img = $(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');
			
			$.get(imgURL, function(data) {
				var $svg = $(data).find('svg');
				
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

	// бургер-меню 
	$('.js-burger').click(function(event) {
		$('.js-burger, .js-nav').toggleClass('active');
		$('body').toggleClass('lock');
	});


	// кнопка copy
	let copyText = $('.js-copy-text');
	let btn = $('.js-copy');
	let input = $('.js-text');

	btn.click(function() {
		input.select();
		document.execCommand('copy');
		copyText.addClass('active');
		window.getSelection().removeAllRanges();
		setTimeout(function() {
			copyText.removeClass('active');
		}, 2500);
	});
	
	// инициализация слайдера swiper js
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

	// слайдер slick js
	$('.js-img-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.js-second-slider'
	});

	$('.js-second-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.js-img-slider',
		centerMode: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
		]
	});

	 // закрепление header
	 $(window).scroll(function () {
    const scr = $(this).scrollTop();
    if ($('.header').length > 0) {
      const need_height = $('.header').offset().top;

      if (scr > need_height) {
        $('.header-fixed').addClass('active');
      }
      else {
        $('.header-fixed').removeClass('active');
      }
    }
  });

	 
	 // выпадающие блоки
	 $('.js-search-btn').click(function() {
		 $('.js-search-form').toggle(400);
		 $('.js-search-arrow').toggleClass('search-arrow-active');
		 return false;
	 });
	 $('.js-price-btn').click(function() {
		$('.js-price-form').toggle(400);
		$('.js-price-arrow').toggleClass('price-arrow-active');
		return false;
	});

	// noUI-slider
	let rangeSlider = document.getElementById('range-slider');
	const input0 = document.getElementById('input-0');
	const input1 = document.getElementById('input-1');
	const inputs = [input0, input1];

	noUiSlider.create(rangeSlider, {
  start: [0, 999999],
  connect: true,
	step: 1,
  range: {
    'min': [0],
    'max': [10000]
    }
	});	

	rangeSlider.noUiSlider.on('update', function(values, handle) {
		inputs[handle].value = Math.round(values[handle]);
	});
		
	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setRangeSlider(index, e.currentTarget.value);
		});
	});

});