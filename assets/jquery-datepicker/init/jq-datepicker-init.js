//====================JQ DATEPICKER INIT=================//
$(document).ready(function () {
   var datepicker = {
      dateFormat: "dd/mm/yy",
      showAnim: '',
      dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
      monthNames: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
      nextText: '',
      prevText: '',
      firstDay: 1,
      showButtonPanel: false,
      showOtherMonths: true,
      beforeShow: function () {
         if ($(this).hasClass('lunar')) {
            $('#ui-datepicker-div').addClass('lunar-ui');
         }
         if ($(window).width() <= 480) {
            BNS.on();
            $('#ui-datepicker-div').addClass('open');
            $('.jq-calendar').blur();
            $('.jq-calendar').attr('disabled', 'disabled');
         }
      },
      onClose: function () {
         $('#ui-datepicker-div').removeClass('lunar-ui');
         if ($(window).width() <= 480) {
            BNS.off();
            $('#ui-datepicker-div').removeClass('open');
            $('.jq-calendar').removeAttr('disabled', 'disabled');
         }
      },
      onSelect: function (dateText, inst) {
         if ($(window).width() <= 480) {
            BNS.off();
         }
         var date = $(this).val();
         $(this).datepicker("setDate", date);
         return date;
      }
      // showMonthAfterYear: true
   };
   // $('.jq-calendar').removeAttr('disabled', 'disabled').blur(function (e) { $(this).datepicker("hide"); });;
   $(".jq-calendar").datepicker($.extend(datepicker)).datepicker("setDate", "0");
   if ($(window).width() <= 480) {
      $('#ui-datepicker-div').after('<div class="jq-datepicker-overlay"></div>');
   }
});
//====================END JQ DATEPICKER INIT=================//