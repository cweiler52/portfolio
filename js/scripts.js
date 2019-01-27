$(function () {
	
	// DOCUMENT READY
    $(document).ready(function () {
        init_topCheck();
        int_introHeight();
    });
    
    // PRELOADER ROTATER
    window.onload = function () {
        init_topCheck();
        int_introHeight();

        // Site Preloader
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    }
	
	// ON SCROLL - CHECK FOR WINDOW TOP
	window.onscroll = function () {
		if ($(window).scrollTop() === 0) {
			$(".navr").addClass('navr_trans_bkg').removeClass('sticky').fadeIn();
		} else {
			$(".navr").addClass('sticky').fadeIn();
		}
	}
	
	// RESIZE WINDOW HEIGHT VALUE
    $(window).resize(function () {
        int_introHeight();
        //int_nav_menu_height();
    });
	
	// ON CLICK - MENU - SCROLLING TO SECTION
	$(document).on('click', 'a.smooth-scroll', function (e) { 
		var thisSection = $(this).attr("id");	
		console.log('target: '+thisSection);
	
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('section#'+thisSection).offset().top
		}, 1500, "swing");
	});
	
	// TOP OF WINDOW CHECK
	function init_topCheck () {
		if ($(window).scrollTop() === 0) {
			$(".navr").addClass('navr_trans_bkg').fadeIn();
		} else {
			$(".navr").addClass('sticky').fadeIn();
		}
	}
	
	// INTRO HEIGHT	
	function int_introHeight () {
        var windiwHeight = $(window).height();
        $('.fullscreen_height').css('height', windiwHeight);
    };
});