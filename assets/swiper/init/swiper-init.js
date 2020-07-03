//swiper
$(document).ready(function () {
   var swiper1 = new Swiper('.swiper-1', {
      navigation: {
         nextEl: '.swiper-next',
         prevEl: '.swiper-prev',
      },
   });
   var swiper4 = new Swiper('.swiper-4', {
      slidesPerView: 4,
      spaceBetween: 15,
      navigation: {
         nextEl: '.swiper-next',
         prevEl: '.swiper-prev',
      },
      breakpoints: {
         480: {
            slidesPerView: 1,
            spaceBetween: 10
         },
         // when window width is <= 480px
         768: {
            slidesPerView: 2,
            spaceBetween: 15
         }
      }
   });
});
//end swiper