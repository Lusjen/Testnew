import $ from 'jquery';
$('.js-inner-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  pauseOnHover: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
  	{
      breakpoint: 1220,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3
      }
    },
    {
  	 breakpoint: 768,
  		settings: {
  			slidesToShow: 1,
  	}
    },
  ],
});
