'use strict';

$('.slider').slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slideToScroll: 1,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  {
    breakpoint: 426,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }  
  ]
});