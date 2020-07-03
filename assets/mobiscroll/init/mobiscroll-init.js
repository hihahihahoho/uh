//====================MOBISCROLL INIT=================//
$(document).ready(function () {
   var mobiscrollSelect = $('.mbsc-select').mobiscroll().select({
      theme: 'ios',
      lang: 'vi',
      minWidth: 200,
      display: $(window).width() < 480 ? 'bottom' : 'bubble',
      showScrollArrows: true,
      filter: true,
      maxWidth: 300,
      buttons: [{
         text: 'Đóng',
         handler: 'cancel',
      }],
      onItemTap: function (event, inst) {
         $(this).mobiscroll('hide');
      },
      onInit: function (event, inst) {
         $(this).siblings('.mbsc-control ').addClass($(this).eq(0).attr('class'));
         inst.settings.headerText = $(this).eq(0).attr('data-header-text');
      },
      onShow: function (event, inst) {
         if ($(window).width() > 480) {
            $('body').append('<div class="mbs-overlay"></div>')
         }
      },
      onHide: function (event, inst) {
         if ($(window).width() > 480) {
            $('.mbs-overlay').remove();
         }
      }
   });
   var mobiscrollSlider = $('.mbsc-slider').mobiscroll().slider({
      theme: 'material'
   })
   $(document).on('click', '.mbs-overlay', function () {
      $('.mbsc-fr-btn-e').trigger('click')
   })
});
//====================END MOBISCROLL INIT=================//