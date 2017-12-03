import $ from 'jquery';
import 'slick-carousel';
$('.js-gallery-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.js-gallery',
  centerMode: true,
  focusOnSelect: true,
  vertical: true,
  centerPadding: '0px'

});
$('.js-gallery').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // adaptiveHeight: true,
  adaptiveHeight: true,
  centerMode: true,
  fade: true,
  asNavFor: '.js-gallery-nav',
  responsive: [
    {
      breakpoint: 700,
      settings: {
        dots: true
      }

    }
  ]
});

