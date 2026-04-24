$(document).ready(function(){

	$('.rslides').responsiveSlides();

	// Global Variables
	var toggle_primary_button    = $('.nav-toggle-button'),
		toggle_primary_icon    	 = $('.nav-toggle-button i'),
		toggle_secondary_button  = $('nav li span'),
		toggle_secondary_icon    = $('nav li span i'),
		primary_menu        	 = $('nav'),
		secondary_menu   		 = $('nav ul ul'),
		window_width			 = $(window).width();


	//Multi-line Tab
	toggle_secondary_button.each(function(){
		$(this).click(function(){
			$(this).parent("li").children("ul").slideToggle();
			$(this).children().toggleClass("fa-caret-up").toggleClass("fa-caret-down");;
		});
	});

	// Basic functionality for nav-toggle-button
	$(toggle_primary_button).click(function(){
		primary_menu.toggle();
		toggle_primary_icon.toggleClass("fa-times").toggleClass("fa-navicon");
	});

	// Add class to tab having drop down
	$( "nav li:has(ul)").find('span i').addClass("fa-caret-down");

	// Reset all configs when width > 760
	$(window).resize(function(){

		if(window_width > 760 && primary_menu.is(':visible') || primary_menu.is(':hidden') || secondary_menu.is(':visible') || secondary_menu.is(':hidden')) {
			primary_menu.removeAttr('style');
			toggle_primary_icon.removeClass("fa-times").addClass("fa-navicon");

			secondary_menu.removeAttr('style');
			toggle_secondary_icon.removeClass("fa-caret-up").addClass("fa-caret-down");
		}
	});

	$('.dropdown ul li .fa-caret-up').on('click touchend', function(e) {
		$(this).parent().next().toggle();
	});

	// COMMENTS STYLE PLUGIN //
	$('.commentlist li:last-child').css('background','none');
	$('.commentlist li ul li').css('background','none');
	$('.commentlist li ul li:last-child').css('border-bottom','none');
	
	var priceUl = 0;
	setInterval(function(){
		if(priceUl == 0){
			$('#prices ul').css({
			'transform':'translatex(0)',
			'transition':'1s',
			'-webkit-transition':'1s'
			});
			priceUl++;
		}else if(priceUl == 1){
			$('#prices ul li').css({
				'transition':'none',
				'-webkit-transition':'none',
				'transform':'translatex(280px)'
			});
			priceUl++;
		}else if(priceUl == 2){
			$('#prices ul li:first-child').css({
			'transform':'translatex(0)',
			'transition':'1s',
			'-webkit-transition':'1s'
			});
			priceUl++;
		}else if(priceUl == 3){
			$('#prices ul li:nth-child(2)').css({
			'transform':'translatex(0)',
			'transition':'1s',
			'-webkit-transition':'1s'
			});
			priceUl++;
		}else if(priceUl == 4){
			$('#prices ul li:nth-child(3)').css({
			'transform':'translatex(0)',
			'transition':'1s',
			'-webkit-transition':'1s'
			});
			priceUl++;
		}else if(priceUl == 5){
			$('#prices ul li:nth-child(4)').css({
			'transform':'translatex(0)',
			'transition':'1s',
			'-webkit-transition':'1s'
			});
			priceUl++;
		}else if(priceUl == 6){
			$('#prices ul li:nth-child(5)').css({
			'transform':'translatex(0)',
			'transition':'1s',
			'-webkit-transition':'1s'
			});
			priceUl++;
		}else if(priceUl == 7){
			$('#prices ul li:nth-child(6)').css({
			'transform':'translatex(0)',
			'transition':'1s',
			'-webkit-transition':'1s'
			});
			priceUl++;
		}else if(priceUl == 8){
			$('#prices ul li:nth-child(7)').css({
			'transform':'translatex(0)',
			'transition':'1s',
			'-webkit-transition':'1s'
			});
			priceUl++;
		}else if(priceUl == 9){
			$('#prices ul').css({
				'transition':'none',
				'-webkit-transition':'none',
				'transform':'translatex(280px)'
			});
			priceUl = 0;
		}
	}, 1500);
	
});