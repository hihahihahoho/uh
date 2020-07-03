//====================LIGHTSLIDER INIT=================//
$('.light-slider').lightSlider({
      gallery: true,
      item: 1,
      loop: false,
      thumbItem: 7,
      slideMargin: 0,
      enableDrag: false,
      enableTouch: false,
      onSliderLoad: function (el) {
         $('.lsvideo').each(function () {
            var index = $(this).index();
            $('.lSPager').addClass(index + '')
            $(this).parents('.lSSlideOuter').find('.lSPager li').eq(index).addClass('lsvideo-thumb');
         })
      }
   });

   //====================END LIGHTSLIDER INIT=================//