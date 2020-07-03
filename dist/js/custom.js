$(document).ready(function () {
   $('.steps').each(function () {
      var stepItem = $(this).find('.steps__item');
      var stepItemLength = stepItem.length;
      var stepItemActive = $(this).find('.steps__item--active');
      var stepItemActiveLength = stepItemActive.length;
      $(stepItemActive).eq(stepItemActiveLength - 1).addClass('steps__item--active--last');
      var itemSpace = (100 / (stepItemLength - 1)) * (stepItemActiveLength - 1);
      console.log($(stepItemActive).eq(stepItemActiveLength));
      $(this).find('.steps__progress').css('width', itemSpace + '%')
   });
   $('.table-wraper-size').scroll(function (e) {
      var _this = this;
      if (_this.scrollWidth === (_this.scrollLeft + _this.clientWidth)) {
         $(_this).parent('.table-wraper-inner').addClass('right-none');
      }
      else {
         $(_this).parent('.table-wraper-inner').removeClass('right-none');
      };

      if (_this.scrollLeft === 0) {
         $(_this).parent('.table-wraper-inner').addClass('left-none');
      }
      else {
         $(_this).parent('.table-wraper-inner').removeClass('left-none');
      };
   }).scroll();
   function sidebarScroll() {
      var el = $('.sidebar > .active');
      var elOffset = el.offset().top;
      var elHeight = el.height();
      var windowHeight = $(window).height();
      var offset;

      if (elHeight < windowHeight) {
         offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
      }
      else {
         offset = elOffset;
      }
      var speed = 700;
      $('.sidebar').animate({ scrollTop: offset }, speed);
   }
   sidebarScroll()
});