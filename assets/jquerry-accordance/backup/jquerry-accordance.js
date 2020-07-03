//====================ACCORDANCE INIT=================//
(function ($) {
   $.fn.isOnScreen = function (x_offset, y_offset) {
      if (x_offset == null || typeof x_offset == 'undefined') x_offset = 1;
      if (y_offset == null || typeof y_offset == 'undefined') y_offset = 1;

      var win = $(window),
         viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
         },
         height = this.outerHeight(),
         width = this.outerWidth(),
         bounds = this.offset(),
         visible,
         deltas;

      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();

      if (!width || !height) return false;

      bounds.right = bounds.left + width;
      bounds.bottom = bounds.top + height;

      visible = (
         !(viewport.right < bounds.left ||
            viewport.left > bounds.right ||
            viewport.bottom < bounds.top ||
            viewport.top > bounds.bottom)
      );

      if (!visible) return false;

      deltas = {
         top: Math.min(1, (bounds.bottom - viewport.top) / height),
         bottom: Math.min(1, (viewport.bottom - bounds.top) / height),
         left: Math.min(1, (bounds.right - viewport.left) / width),
         right: Math.min(1, (viewport.right - bounds.left) / width)
      };

      return (deltas.left * deltas.right) >= x_offset && (deltas.top * deltas.bottom) >= y_offset;
   };
})(jQuery);

$(document).ready(function () {
   $('[data-content]').on('change', function () {
      $(this).closest('[data-accordion]').trigger('resize');
   })
   $('[data-accordion]').accordion({
      "transitionSpeed": 200
   });
   $('[data-accordion]').trigger('resize');
   $('[data-control]').on('click', function () {
      $(this).closest('[data-accordion]').trigger('accordion.close')
   });
   //snap to top
   $('.accordion-snap [data-accordion]').on('accordion.close', function () {
      if (!$(this).find('[data-control]').isOnScreen()) {
         $('html,body').animate({
            scrollTop: $(this).offset().top - 0
         }, 200);
      };
   });
});
//====================END ACCORDANCE INIT=================//