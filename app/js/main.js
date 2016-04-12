$(document).ready(function() {

	"use strict";
	if($('form').length) {
		new FormSubmit({
		  element: $('.js-assotiation-form')
		});
		new FormSubmit({
		  element: $('.js-subscribe-form')
		});
		new FormSubmit({
		  element: $('.js-contacts-form')
		});
	}

	new MainMenuOpen();

	$('.main-slider').slick({
		autoplay: false,
		dots: true,
		slidesToShow: 1,
  	slidesToScroll: 1
	});

	$('.js-article').on('click', function(e) {
		e.preventDefault();
		var $this = $(this);
		var thisNumber = $('.js-article').index($(this));

		$('.articles__item, .js-article-list').removeClass('js-active');
		$this.closest('.articles__item').addClass('js-active');

		$('.js-article-list').eq(thisNumber).addClass('js-active');
	})

	$('.partners-slider').slick({
		autoplay: false,
		dots: true,
		slidesToShow: 6,
  	slidesToScroll: 6,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 740,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false
				}
			}
		]
	});

	if($('#map').length) {
		google.maps.event.addDomListener(window, 'load', initialize);
	}

	$('.contacts').click(function() {
  	$('.contacts #map').css("pointer-events", "auto");
  });

	$('.js-contacts-form-title').on('click', function() {
		if($(window).width() > 740) {
			$('.js-contacts-block').slideToggle();
			$('.js-contacts-form-title').toggleClass('js-active')
		}
	})

	$('.gallery-nav').slick({
		autoplay: false,
		slidesToShow: 3,
  	slidesToScroll: 1,
		vertical: true,
		asNavFor: '.gallery-for',
		centerMode: true,
		focusOnSelect: true
	});

	$('.gallery-for').slick({
		autoplay: false,
		slidesToShow: 1,
  	slidesToScroll: 1,
		fade: true,
		asNavFor: '.gallery-nav',
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					fade: false
				}
			}
		]
	});

	$('.js-up').on('click', function() {
		$('html, body').animate({scrollTop: 0}, 1000);
	})

}); // end ready
