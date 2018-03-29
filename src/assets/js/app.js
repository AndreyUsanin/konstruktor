import $ from 'jquery';
import whatInput from 'what-input';

window.jQuery = $;
window.$ = $;


var datepicker = require('../../../node_modules/air-datepicker/dist/js/datepicker.js');
var parallax = require('../../../node_modules/jquery-parallax.js/parallax.js');
var lightcase = require('../../../node_modules/lightcase/src/js/lightcase.js');
var isotope = require('../../../node_modules/isotope-layout/dist/isotope.pkgd.js');
var waypoint = require('../../../node_modules//waypoints/lib/jquery.waypoints.js');

// VENDORS FOLDER

var counterUp = require('./vendors/jquery.counterup.js');
var countdown = require('./vendors/jquery.countdown.js');
var verticalTimeline = require('./vendors/vertical-timeline.js');

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


import slick from 'slick-carousel';





// TABS

// H-TABS


if ($(".h-tabs")[0]){

	var target = document.getElementById("h-tabs");
	var options = {
	  "linkClass": "h-tabs__title"
	};

	var elem = new Foundation.Tabs($(target), options);


    } else {
    console.log('h-tabs не существует');
}

// LI-TABS
if ($(".li-tabs")[0]){
	var target = document.getElementById("li-tabs");
	var options = {
	  "linkClass": "li-tabs__item"
	};

	var elem = new Foundation.Tabs($(target), options);
}

// NA-TABS

if ($(".na-tabs")[0]){
	var target = document.getElementById("na-tabs");
	var options = {
	  "linkClass": "na-tabs__item"
	};

	var elem = new Foundation.Tabs($(target), options);
}



// SLICK-SLIDER

// SLICK-HERO


$('.single-item').slick({
    dots: true,
    arrows: false,
   autoplay: true
});

// PROMO Slider

$('.promo-slider').slick({
    dots: true,
    arrows: false,
   autoplay: true
});


// SLICK-TABS

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
    arrows: false,
  // centerMode: true,
  focusOnSelect: true,


  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: false
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]

});

// SLIDER RENAME IT

$('.sld').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  appendArrows: '.sld__nav',

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// REVEAL тоглер костылики





 $(document).on('open.zf.reveal', function()
  {
	var burger = document.querySelector('.flatnav-rvl-burger__icon');
	burger.classList.remove('icon-menu');
	burger.classList.add('icon-cross2');

  });

 $(document).on('closed.zf.reveal', function()
  {
	var burger = document.querySelector('.flatnav-rvl-burger__icon');
	burger.classList.remove('icon-cross2');
	burger.classList.add('icon-menu');
  });


	// AIR Datepicker
	//
	var disabledDays = [0, 6];

	$('.form__date').datepicker({
	      autoClose: true,
	    onRenderCell: function (date, cellType) {
	        if (cellType == 'day') {
	            var day = date.getDay(),
	                isDisabled = disabledDays.indexOf(day) != -1;

	            return {
	                disabled: isDisabled
	            }
	        }
	    }
	})

	$('.iconform__date').datepicker({
	      autoClose: true,
	    onRenderCell: function (date, cellType) {
	        if (cellType == 'day') {
	            var day = date.getDay(),
	                isDisabled = disabledDays.indexOf(day) != -1;

	            return {
	                disabled: isDisabled
	            }
	        }
	    }
	})

	$('.h-iconform__date').datepicker({
	      autoClose: true,
	    onRenderCell: function (date, cellType) {
	        if (cellType == 'day') {
	            var day = date.getDay(),
	                isDisabled = disabledDays.indexOf(day) != -1;

	            return {
	                disabled: isDisabled
	            }
	        }
	    }
	})



// ПИДОРАСИТ
//
// // PARALLAX INIT
//
$('.parallax-hero').parallax({imageSrc: '../assets/img/hero-bkg-01.jpg'});
$('.parallax-container').parallax({imageSrc: '../assets/img/img__sqr__01.jpg'});

// GALLERY

$('.gallery__link').on('click', function() {
  $('#main-image').attr('src', $(this).data('image'));
})



// ISOTOPE INIT

// external js: isotope.pkgd.js

// init Isotope

var $grid = $('.isogrid').isotope({
  itemSelector: '.isogrid__item',
  layoutMode: 'fitRows'
});

$grid.isotope({ filter: '.best' });
// filter functions
var filterFns = {
  // show if number is greater than 50
  // numberGreaterThan50: function() {
  //   var number = $(this).find('.number').text();
  //   return parseInt( number, 10 ) > 50;
  // },
  // show if name ends with -ium
  // ium: function() {
  //   var name = $(this).find('.name').text();
  //   return name.match( /ium$/ );
  // }
};



// bind filter button click
$('.filters-knob-group').on( 'click', 'a', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.knob-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'a', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});




// LIGHTCASE gallery

jQuery(document).ready(function($) {
	$('a[data-rel^=lightcase]').lightcase({
          	transition: 'scrollHorizontal',
          	showSequenceInfo: false,
          	showTitle: false
      });
});


// CountDownTimer

var now = new Date();
		var day = now.getDate();
		var month = now.getMonth() + 1;
		var year = now.getFullYear() + 1;
		var nextyear = month + '/' + day + '/' + year + ' 07:07:07';
		$('.countdown-timer').countdown({
			date: nextyear, // TODO Date format: 07/27/2017 17:00:00
			offset: +2, // TODO Your Timezone Offset
			day: 'День',
			days: 'Дней',
			hour: 'Час',
			hours: 'Часа',
		}, function () {
			alert('Done!');
		});



// COUNT UP
$('.count__number').counterUp({
    delay: 10,
    time: 1000
});


// REVEAL тоглер костылики





 $(document).on('open.zf.reveal', function()
  {
	var burger = document.querySelector('.flatnav-rvl-burger__icon');
	burger.classList.remove('icon-menu');
	burger.classList.add('icon-cross2');

  });

 $(document).on('closed.zf.reveal', function()
  {
	var burger = document.querySelector('.flatnav-rvl-burger__icon');
	burger.classList.remove('icon-cross2');
	burger.classList.add('icon-menu');
  });


	// VERTICAL Timeline

	$('.vert-timeline').verticalTimeline({
    startLeft: false,
    alternate: true,
    animate: "fade",
    arrows: false
});


// H-ACCORDION


// var options = {
//
// };


var hAccordion = new Foundation.Accordion($('h-accordion'), {

	// options не работают

	slideSpeed: 3500,
	multiExpand: true
});

// responsive MENU

//
var dnav = new Foundation.ResponsiveMenu($('#dnav'), {
	// dataResponsiveMenu: 'accordion medium-dropdown',
	// clickOpen: false
});

// var remenuToggle = new Foundation.ResponsiveToggle($('remenu__toggle'));





$(document).foundation();
