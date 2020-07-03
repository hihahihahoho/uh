//===================BOOTSTRAP DATEPICKER INIT=================//
var select2Timeout;
$(function () {
   if ($(window).width() > 0) {
      $('.timepicker').datetimepicker({
         format: 'LT',
         ignoreReadonly: true,
         // debug: true,
         widgetParent: $(window).width() > 480 ? null : '.calendar-container',
      }).on('dp.show', function () {
         if ($(window).width() > 480) {
            $(this).closest('[data-content]').css('overflow', 'visible');
         }
         else {
            $('.calendar-container').addClass('open');
            BNS.on();
         }
      }).on('dp.hide', function () {
         if ($(window).width() > 480) {
            $(this).closest('[data-content]').css('overflow', 'visible');
         }
         else {
            $('.calendar-container').removeClass('open');
            if (!$('.modal').hasClass('in')) {
               BNS.off();
            }
         }
      });
      $(".calendar-inline").datetimepicker({
         format: 'L',
         locale: 'vi',
         ignoreReadonly: true,
         inline: true,
      });
      $(".calendar").datetimepicker({
         format: 'L',
         locale: 'vi',
         ignoreReadonly: true,
         //debug: true,
         widgetParent: $(window).width() > 480 ? null : '.calendar-container',
      }).on('dp.show', function () {
         if ($(window).width() > 480) {
            $(this).closest('[data-content]').css('overflow', 'visible');
         }
         else {
            $('.calendar-container').addClass('open');
            $('body > .select2-container .select2-dropdown').addClass('top-0');
            BNS.on();
         }
      }).on('dp.hide', function () {
         if ($(window).width() > 480) {
            $(this).closest('[data-content]').css('overflow', 'visible');
         }
         else {
            $('.calendar-container').removeClass('open');
            if (!$('.modal').hasClass('in')) {
               BNS.off();
            }
         }
      });
   }
});

$(document).ready(function () {
   if ($(window).width() <= 480) {
      $(".calendar").prop('readonly', 'true');
      $(".timepicker").prop('readonly', 'true')
   }
   if ($(window).width() <= 0) {
      $(".calendar").prop('type', 'date').removeClass('calendar')
   }
});

//====================ENDBOOTSTRAP DATEPICKER INIT=================//