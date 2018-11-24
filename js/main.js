/* =================================
------------------------------------
	Civic - CV Resume
	Version: 1.0
 ------------------------------------ 
 ====================================*/



'use strict';


$(window).on('load', function() { 
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});


(function($) {

	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	$('.review-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 1,
		autoplay: true
	});



	$('.progress-bar-style').each(function() {
		var progress = $(this).data("progress");
		var prog_width = progress + '%';
		if (progress <= 100) {
			$(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
		}
		else {
			$(this).append('<div class="bar-inner" style="width:100%"><span>' + prog_width + '</span></div>');
		}
	});


	$('.lan-prog').each(function() {
		var progress = $(this).data("lanprogesss");
		var ele      = '<span></span>';
		var ele_fade = '<span class="fade-ele"></span>';
		
		for (var i = 1; i <= 5; i++) {
			if(i <= progress){
				$(this).append(ele);
			} else {
				$(this).append(ele_fade);
			}
		}
	});


	/*------------------
		Popup
	--------------------*/
	$(".portfolio-item").on('click',function(e){
		var gallery = $(this).attr('href');
		$(gallery).magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true
			}
		}).magnificPopup('open');
		e.preventDefault();
	})

	/*------------------
		Hamburger
	-------------------*/ 
	var trigger = $('.hamburger'),
		overlay = $('.overlay'),
		isClosed = false;

	trigger.click(function () {
		hamburger_cross();
	});

var trigger = $('.hamburger'),
	overlay = $('.overlay'),
	isClosed = false;

trigger.click(function () {
	hamburger_cross();
});

function hamburger_cross() {

	if (isClosed == true) {
		overlay.hide();
		trigger.removeClass('is-open');
		trigger.addClass('is-closed');
		isClosed = false;
	} else {
		overlay.show();
		trigger.removeClass('is-closed');
		trigger.addClass('is-open');
		isClosed = true;
	}
}

$('[data-toggle="offcanvas"]').click(function () {
	$('#wrapper').toggleClass('toggled');
});
	
if($().circleProgress){

	$('#progress1').circleProgress({
		value: 0.7,
		size: 170,
		fill: {
			color: '#ffa500'
		}
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
	});
	
	$('#progress2').circleProgress({
		value: 0.7,
		size: 170,
		fill: "#009fff"
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
	});

	$('#progress3').circleProgress({
		value: 0.7,
		size: 170,
		fill: {
			color: '#ffa500'
		}
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
	});

	$('#progress4').circleProgress({
		value: 0.7,
		size: 170,
		fill: "#009fff"
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
	});

}

})(jQuery);

