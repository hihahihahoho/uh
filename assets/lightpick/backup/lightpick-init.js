//====================LIGHT GALLERY INIT=================//
[].forEach.call(document.querySelectorAll('.light-pick-full'), function (el) {
   var getEl = $(el).prop("tagName") == 'input' ? el : $(el).find('input.input')[0];
   new Lightpick({
      field: el,
      numberOfColumns: 1,
      numberOfMonths: $(window).width() > 480 ? 1 : 4,
      autoclose: true,
      autoJumpMonths: $(window).width() > 480 ? true : false,
      onOpen: function () {
         if ($(window).width() <= 480) {
            BNS.on();
         }
      },
      onClose: function () {
         if ($(window).width() <= 480) {
            BNS.off();
         }
      }
   })
});

[].forEach.call(document.querySelectorAll('.light-pick-range-full'), function (el) {
   var getEl = $(el).prop("tagName") == 'input' ? el : $(el).find('input.input')[0];
   new Lightpick({
      field: el,
      singleDate: false,
      numberOfColumns: 1,
      numberOfMonths: $(window).width() > 480 ? 2 : 4,
      autoclose: false,
      autoJumpMonths: $(window).width() > 480 ? true : false,
      onOpen: function () {
         if ($(window).width() <= 480) {
            BNS.on();
         }
      },
      onClose: function () {
         if ($(window).width() <= 480) {
            BNS.off();
         }
      }
   })
});

[].forEach.call(document.querySelectorAll('.light-pick'), function (el) {
   var getEl = $(el).prop("tagName") == 'input' ? el : $(el).find('input.input')[0];
   new Lightpick({
      field: el,
      numberOfColumns: 1,
      numberOfMonths: $(window).width() > 480 ? 1 : 1,
      autoclose: true,
      autoJumpMonths: true,
      onOpen: function () {
         $($(this)[0]._opts.field).addClass('light-pick-focus');
         if ($(window).width() <= 480) {
            BNS.on();
            if ($($(this)[0].el).find('.lp-mobile-header').length ==0) {
               $($(this)[0].el).prepend('<div class="lp-mobile-header"><button type="button" class="lightpick__close-action">Đóng</button></div>');
            }
            $('.lp-backdrop').addClass('show');
         }
      },
      onSelect: function() {
         $($(this)[0]._opts.field).trigger('change');
      },
      onClose: function () {
         $($(this)[0]._opts.field).removeClass('light-pick-focus');
         if ($(window).width() <= 480) {
            BNS.off();
            $('.lp-backdrop').removeClass('show');
         }
      }
   })
});

[].forEach.call(document.querySelectorAll('.light-pick-inline'), function (el) {
   var getEl = $(el).prop("tagName") == 'input' ? el : $(el).find('input.input')[0];
   new Lightpick({
      field: el,
      numberOfColumns: 1,
      numberOfMonths: $(window).width() > 480 ? 1 : 1,
      autoclose: false,
      autoJumpMonths: true,
      parentEl: '.light-pick-inline-contener',
      hideOnBodyClick: false,
      onSelect: function () {
         var getDate = $(this)[0]._opts.startDate;
         $(this)[0].gotoDate(getDate);
      }
   })
});

[].forEach.call(document.querySelectorAll('.light-pick-range'), function (el) {
   var getEl = $(el).prop("tagName") == 'input' ? el : $(el).find('input.input')[0];
   new Lightpick({
      field: el,
      singleDate: false,
      numberOfColumns: 2,
      numberOfMonths: $(window).width() > 768 ? 2 : 1,
      autoclose: false,
      autoJumpMonths: true,
      footer: $(window).width() > 480 ? true : false,
      locale: {
         buttons: {
            prev: '',
            next: '',
            close: '',
            reset: 'Khôi phục',
            apply: 'Áp dụng'
         },
         tooltip: {
            one: 'ngày',
            other: 'ngày'
         },
         tooltipOnDisabled: null,
         pluralize: function (i, locale) {
            if (typeof i === "string") i = parseInt(i, 10);

            if (i === 1 && 'one' in locale) return locale.one;
            if ('other' in locale) return locale.other;

            return '';
         }
      },
      onSelect: function () {
         $($(this)[0].el).find('.lp-mobile-header-range').html($(this)[0].toString($(this)[0]._opts.format))
         $($(this)[0]._opts.field).trigger('change');
      },
      onOpen: function () {
         $($(this)[0]._opts.field).addClass('light-pick-focus');
         if ($(window).width() <= 480) {
            BNS.on();
            console.log($(this)[0])
            $($(this)[0].el).addClass('light-pick-range');
            if ($($(this)[0].el).find('.lp-mobile-header').length ==0) {
               $($(this)[0].el).prepend('<div class="lp-mobile-header"><button type="button" class="lightpick__close-action">Đóng</button><button type="button" class="lightpick__apply-action">Áp dụng</button></div><div class="lp-mobile-header-range">Từ - Đến</div>');
            }
            $('.lp-backdrop').addClass('show');
         }
      },
      onClose: function () {
         $($(this)[0]._opts.field).removeClass('light-pick-focus');
         if ($(window).width() <= 480) {
            BNS.off();
            $('.lp-backdrop').removeClass('show');
         }
      }
   })
});

$(document).ready(function () {
   if ($(window).width() <= 480) {
      if ($('body').has('.light-pick')) {
         $('body').append('<button class="lp-backdrop lightpick__apply-action"></button>')
      }
   }
   else {
      $('.lightpick:not(.is-hidden)')
   }
   
});
//====================END LIGHT GALLERY INIT=================//

