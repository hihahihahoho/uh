//====================FLICKITY INIT=================//
$(document).ready(function () {
   var $carousel = $('.flickity').flickity({
      imagesLoaded: true,
      percentPosition: false,
      contain: true,
      // freeScroll: true,
   });
   var $carouselParallax = $('.flickity-parralax').flickity({
      imagesLoaded: true,
      percentPosition: false,
      contain: true,
      // freeScroll: true,
   });
   $carousel.on('dragStart.flickity', function (event, pointer) {
      document.ontouchmove = function (e) {
         e.preventDefault();
      }
   });
   $carousel.on('dragEnd.flickity', function (event, pointer) {
      document.ontouchmove = function (e) {
         return true;
      }
   });
   $carouselParallax.on('dragStart.flickity', function (event, pointer) {
      document.ontouchmove = function (e) {
         e.preventDefault();
      }
   });
   $carouselParallax.on('dragEnd.flickity', function (event, pointer) {
      document.ontouchmove = function (e) {
         return true;
      }
   });
   $('.flickity-btn-back').on('click', function () {
      $(this).parents('.flickity-wrap').find('.flickity').flickity('previous');
      $(this).parents('.flickity-wrap').find('.flickity-parralax').flickity('previous');
   });
   // next
   $('.flickity-btn-next').on('click', function () {
      $(this).parents('.flickity-wrap').find('.flickity').flickity('next');
      $(this).parents('.flickity-wrap').find('.flickity-parralax').flickity('next');
   });
   
   $carousel.on('cellSelect.flickity', function () {
      var flkty = $(this).data('flickity');
      console.log(flkty);
      if (!flkty.cells[flkty.selectedIndex - 1]) {
         $(this).parents('.flickity-wrap').find('.flickity-btn-back').attr('disabled', 'disabled');
         $(this).parents('.flickity-wrap').find('.flickity-btn-next').removeAttr('disabled');
         
      } else if (!flkty.cells[flkty.selectedIndex + 1]) {
         $(this).parents('.flickity-wrap').find('.flickity-btn-next').attr('disabled', 'disabled');
         $(this).parents('.flickity-wrap').find('.flickity-btn-back').removeAttr('disabled');
      } else {
         $(this).parents('.flickity-wrap').find('.flickity-btn-back').removeAttr('disabled');
         $(this).parents('.flickity-wrap').find('.flickity-btn-next').removeAttr('disabled');
      }
   });

   $carouselParallax.on('cellSelect.flickity', function () {
      var flkty = $(this).data('flickity');
      console.log(flkty);
      if (!flkty.cells[flkty.selectedIndex - 1]) {
         $(this).parents('.flickity-wrap').find('.flickity-btn-back').attr('disabled', 'disabled');
         $(this).parents('.flickity-wrap').find('.flickity-btn-next').removeAttr('disabled');
         
      } else if (!flkty.cells[flkty.selectedIndex + 1]) {
         $(this).parents('.flickity-wrap').find('.flickity-btn-next').attr('disabled', 'disabled');
         $(this).parents('.flickity-wrap').find('.flickity-btn-back').removeAttr('disabled');
      } else {
         $(this).parents('.flickity-wrap').find('.flickity-btn-back').removeAttr('disabled');
         $(this).parents('.flickity-wrap').find('.flickity-btn-next').removeAttr('disabled');
      }
   });

   var $imgs = $carouselParallax.find('.carousel-cell img');
   // get transform property
   var docStyle = document.documentElement.style;
   var transformProp = typeof docStyle.transform == 'string' ?
      'transform' : 'WebkitTransform';
   // get Flickity instance
   var flkty = $carouselParallax.data('flickity');

   $carouselParallax.on('scroll.flickity', function () {
      flkty.slides.forEach(function (slide, i) {
         var img = $imgs[i];
         var x = (slide.target + flkty.x) * -1 / 3;
         img.style[transformProp] = 'translateX(' + x + 'px)';
      });
   });
});
//====================END FLICKITY INIT=================//