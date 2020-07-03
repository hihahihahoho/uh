//====================SCROLLSPY INIT=================//
smoothScroll.init({
   offset: 0,
   header: '.menu'
});

gumshoe.init({
   offset: 56
});
$(document).ready(function () {
   $('[data-scroll]').on('click', function () {
      $('#menu-trigger').prop('checked', false);
      $('#menu-trigger').trigger('change');
   });
});
//====================END SCROLLSPY INIT=================//