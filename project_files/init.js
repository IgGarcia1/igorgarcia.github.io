/*
 * Copyright (c) 2018 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	project_hamburger();
	project_imgtosvg();
	project_jarallax();
	project_list_height();
	project_portfolio();
	project_anchor();
	project_animate_text();
	project_projects();
	project_miniboxes();
	project_isotope();
	project_totop();
	project_totop_myhide();
	project_animate_text();
	project_popup_blog();
	project_popupscroll();
	project_kenburn_slider();
	project_ripple();
	project_switcher();
	project_data_images();
	
	
	jQuery(window).on('scroll',function(){
		//e.preventDefault();
		project_totop_myhide();
		
	});
	
	jQuery(window).on('resize',function(){
		project_miniboxes();
		project_isotope();
		
	});
	
	jQuery(window).load('body', function(){
		setTimeout(function(){
        jQuery('.project_preloader').addClass('loaded');
    }, 1000);
	});
	
});

// -----------------------------------------------------
// --------------------  FUNCTIONS  --------------------
// -----------------------------------------------------


// -----------------------------------------------------
// ---------------  HAMBURGER  -------------------------
// -----------------------------------------------------

function project_hamburger(){
	
	"use strict";
	
	var hamburger 		= jQuery('.hamburger');
	var mobileMenu		= jQuery('.project_mobile_menu_wrap');
	
	hamburger.on('click',function(){
		var element 	= jQuery(this);
		
		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function project_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function project_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
			automaticResize: true
		});
	});
}

// -------------------------------------------------
// ---------    PERSONAL LIST HEIGHT    ------------
// -------------------------------------------------

function project_list_height(){
	
	"use strict";
	
	var div			= jQuery('.about_short_contact_wrap');
	var list		= div.find('li:nth-of-type(2n)');
	
	list.after("<div class='clearfix'></div>");
}


// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 

function project_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.project_portfolio_list');
		var filter		 = jQuery('.project_portfolio_filter');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}

function project_projects() {
	
	"use strict";
	
	jQuery('.project_portfolio_animation_wrap').each(function() {
		jQuery(this).on('mouseenter', function() {
			if (jQuery(this).data('title')) {
				jQuery('.project_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
				jQuery('.project_portfolio_titles').addClass('visible');
			}

			jQuery(document).on('mousemove', function(e) {
				jQuery('.project_portfolio_titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function() {
			jQuery('.project_portfolio_titles').removeClass('visible');
		});
	});
}


// -----------------------------------------------------
// ------------    ANCHOR NAVIGATION    ----------------
// -----------------------------------------------------

function project_anchor(){
	
	"use strict";
	
	jQuery('.anchor_nav').onePageNav();
	
	var scrollOffset = 0;
	
	jQuery(".anchor a").on('click', function(evn){
		evn.preventDefault();
		jQuery('html,body').scrollTo(this.hash, this.hash, {
			gap: { y: -scrollOffset-85 },
			animation:{
				duration: 1500,
				easing: "easeInOutExpo"
			}
		});
		return false;	
	});
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -----------------------------------------------------
// -----------------    PROGRESS BAR    ----------------
// -----------------------------------------------------

function tdProgress(container){

	"use strict";

	container.find('.project_progress').each(function(i) {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.project_bar_wrap');
		var pBar 			= progress.find('.project_bar');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');},(i*500));
	});
}
jQuery('.project_progress_wrap').each(function() {
	"use strict";
	var pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
});

// -----------------------------------------------------
// -----------------    MINI BOXES    ------------------
// -----------------------------------------------------

 function project_miniboxes(){
	 
  "use strict";
	 
  var el 			= jQuery('.project_miniboxes');
	 
  if(el.length){
   el.each(function(index, element) {
         
    var child		= jQuery(element).find('.project_minibox');
    
    child.css({height:'auto'});
    // Get an array of all element heights
    
    var W 		= jQuery(window).width();
    if(W > 480){
     var elementHeights = child.map(function() {return jQuery(this).outerHeight();}).get();
    
     // Math.max takes a variable number of arguments
     // `apply` is equivalent to passing each height as an argument
     var maxHeight 		= Math.max.apply(null, elementHeights);
     
     // Set each height to the max height
     child.css({height:maxHeight+'px'}); 
    }
   });  
  }
 }

// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function project_isotope(){
	
	"use strict";
	
	jQuery('.masonry').isotope({
		itemSelector: '.masonry_item',
		masonry: {
			
		}
	});
}

// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------

function project_totop(){
	
	"use strict";
	
	jQuery(".project_totop").on('click', function(e) {
		e.preventDefault();		
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}

function project_totop_myhide(){
	
	"use strict";
	
	var toTop		=jQuery(".project_totop");
	if(toTop.length){
		var topOffSet 	=toTop.offset().top;
		
		if(topOffSet > 1000){
			toTop.addClass('opened');	
		}else{
			toTop.removeClass('opened');
		}
	}
}
// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

function project_animate_text(){
	
	"use strict";
	
	var animateSpan			= jQuery('.project_animation_text_word');
	
		animateSpan.typed({
			strings: ["Back-end", "Front-end", "Web Developer", "App Developer", "Freelancer"], // "UI/UX Designer"
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
}

// -----------------------------------------------------
// -------------------    POPUP BLOG    ----------------
// -----------------------------------------------------

function project_popup_blog(){
	"use strict";
	var li				= jQuery('.project_list_wrap.blog_list .inner_list');
	var popupBox		= jQuery('#project_popup_blog');
	var popupInner		= popupBox.find('.inner_popup');
	var closePopup		= popupBox.find('.close');
	
	li.each(function(){
		var element		= jQuery(this);
		var button		= element.find('.read_more a,.title_holder a,.link_news');
		var html		= element.html();
		var mainImage	= element.find('.news_image');
		var imgData		= mainImage.data('url');
		var title		= element.find('.title_holder h3');
		var titleHref	= element.find('.title_holder h3 a').html();
		
		mainImage.css({backgroundImage: 'url('+imgData+')'});
		button.on('click',function(){
			popupBox.addClass('opened');
			popupInner.html(html);
			mainImage = popupInner.find('.news_image');
			mainImage.css({backgroundImage: 'url('+imgData+')'});
			title = popupInner.find('.title_holder h3');
			title.html(titleHref);
			return false;
		});
	});
	closePopup.on('click',function(){
		popupBox.removeClass('opened');
		popupInner.html('');
		return false;
	});
}

// -----------------------------------------------------
// -------------    WIDGET MENU SCROLL -----------------
// -----------------------------------------------------

function project_popupscroll(){
	
	"use strict";
	
	var H				= jQuery(window).height();
	var scrollable		= jQuery('.scrollable');
	
	var popupBox		= jQuery('.project_popup_blog .inner_popup');
	
	popupBox.css({height:H-100});
	
	scrollable.each(function(){
		var element		= jQuery(this);
		var wH			= jQuery(window).height();
		
		element.css({height: wH-100});
		
		element.niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #fff"
		});
	});
}

// -------------------------------------------------
// -------------  SLIDER KENBURN  ------------------
// -------------------------------------------------

function project_kenburn_slider(){
	
	"use strict";
	
		jQuery(function() {
			jQuery('.project_hero_header_wrap .overlay_slider').vegas({
			timer:false,	
			animation: [ 'kenburnsUp',  'kenburnsLeft', 'kenburnsRight'],
			delay:7000,

			slides: [
				{ src: 'img/hero/1.jpg' },
				/*{ src: 'img/hero/2.jpg' },*/
				{ src: 'project_files/IMG-20190826-WA0077'},
				{ src: 'img/hero/3.jpg' },
			]

		});
	});
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function project_ripple(){
	
	"use strict";
	
	jQuery('#ripple').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
	jQuery('#ripple_testimonial').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
}


// -----------------------------------------------------
// -----------------    SWITCHER    --------------------
// -----------------------------------------------------

function project_switcher(){
	
	"use strict";
	
	var switcherOpener				= jQuery('.project_resize');
	var switcherIcon				= jQuery('.project_leftpart_wrap .project_resize svg');
	var leftPart					= jQuery('.project_leftpart_wrap');
	var rightPart					= jQuery('.project_rightpart');
	
	switcherOpener.on('click',function(){
		if(switcherOpener.hasClass('opened')){
			switcherOpener.removeClass('opened');
			switcherIcon.removeClass('opened');
			leftPart.removeClass('opened');
			rightPart.removeClass('opened');
		}else{
			switcherOpener.addClass('opened');
			switcherIcon.addClass('opened');
			leftPart.addClass('opened');
			rightPart.addClass('opened');
		}
		setTimeout(function(){jQuery('#ripple').ripples('updateSize');},101);
		setTimeout(function(){jQuery('#ripple').ripples('updateSize');},201);
		setTimeout(function(){jQuery('#ripple').ripples('updateSize');},301);
		
		if(jQuery('.jarallax').length){
			jQuery('.jarallax').jarallax('destroy');
			setTimeout(function(){project_jarallax();},300);
		
		}
		return false;
		
	});
	

}

// -----------------------------------------------------
// -------------------    COUNTER    -------------------
// -----------------------------------------------------

jQuery('.project_counter').each(function() {

	"use strict";

	var el		= jQuery(this);
	el.waypoint({
		handler: function(){

			if(!el.hasClass('stop')){
				el.addClass('stop').countTo({
					refreshInterval: 50,
					formatter: function (value, options) {
						return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
					},	
				});
			}
		},offset:'80%'	
	});
});

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function project_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}


