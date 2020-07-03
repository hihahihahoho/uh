var deviceIsMobile = false; //At the beginning we set this flag as false. If we can detect the device is a mobile device in the next line, then we set it as true.
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
   /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
   deviceIsMobile = true;
}

var getScrollbarWidth = function () {
   var div, width = getScrollbarWidth.width;
   if (width === undefined) {
      div = document.createElement('div');
      div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
      div = div.firstChild;
      document.body.appendChild(div);
      width = getScrollbarWidth.width = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
   }
   return width;
};
var bannerSettings = {
   getPositionChangeOpacityPara: 2,
   menuHeight: 56,
   opacitySpeed: 100
}

var menuSettings = {
   breakpoint: 1200, //breakpoint of menu
   iscrollMenuEnable: false, //Enable iscroll for menu;
   itemsAnimationDelay: 50,//Item tranision ios
   menuChange: true,
}
$.fn.isolatedScroll = function () {
   this.bind('mousewheel DOMMouseScroll', function (e) {
      var delta = e.wheelDelta || (e.originalEvent && e.originalEvent.wheelDelta) || -e.detail,
         bottomOverflow = this.scrollTop + $(this).outerHeight() - this.scrollHeight >= 0,
         topOverflow = this.scrollTop <= 0;

      if ((delta < 0 && bottomOverflow) || (delta > 0 && topOverflow)) {
         e.preventDefault();
      }
   });
   return this;
};

//gumnshoe

smoothScroll.init({
   offset: 0,
   header: '.menu'
});

gumshoe.init({
   offset: 56
});

Chart.defaults.global.defaultFontFamily = '"SF Pro Display","Helvetica Neue","Helvetica","Roboto","Arial",sans-serif';
Chart.defaults.global.tooltips.backgroundColor = '#121F3E';
Chart.defaults.global.tooltips.bodyFontSize = 14;
Chart.defaults.global.tooltips.titleFontStyle = 'normal';
Chart.defaults.global.tooltips.bodyFontStyle = 'bold';
Chart.defaults.global.tooltips.titleFontSize = 12;
Chart.defaults.global.tooltips.titleFontColor = '#B7C0CD';
Chart.defaults.global.tooltips.bodyFontColor = '#ffffff';
Chart.defaults.global.tooltips.xPadding = 10;
Chart.defaults.global.tooltips.yPadding = 10;
Chart.defaults.global.tooltips.cornerRadius = 4;
Chart.defaults.global.tooltips.displayColors = false;
Chart.defaults.global.tooltips.footerMarginTop = 4;
Chart.defaults.global.cornerRadius = 4;
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.global.responsive = true;
Chart.defaults.global.defaultFontColor = "#B7C0CD";
Chart.defaults.global.elements.rectangle.borderColor = '#fff';
Chart.defaults.bar.scales.xAxes[0].gridLines.display = false;
Chart.defaults.bar.scales.xAxes[0].gridLines.drawTicks = false;
Chart.defaults.bar.scales.xAxes[0].gridLines.drawBorder = false;
Chart.defaults.global.hover.animationDuration = 200;

//file pond
$(function () {

   // First register any plugins
   $.fn.filepond.registerPlugin(FilePondPluginImagePreview);
   $.fn.filepond.registerPlugin(FilePondPluginFileValidateSize);

   // Turn input element into a pond

   // Set allowMultiple property to true
   $('.filepond').filepond({
      dropOnPage: true,
      'labelIdle': 'Kéo và thả file vào đây hoặc <span class="filepond--label-action"> Chọn file </span>'
   });

   // Listen for addfile event
   $('.filepond').on('FilePond:addfile', function (e) { });

   // Manually add a file using the addfile method

});

function closeSelect() {
   $('.select-2').select2('close');
}
function select2_search(term) {
   var $search = $('.select2-container--open').siblings(".select-2[multiple]").data('select2').dropdown.$search || $('.select2-container--open').siblings(".select-2[multiple]").data('select2').selection.$search;
   $search.val(term);
   $search.trigger('keyup');
}
function deselectAll() {
   if ($(".select2-results__options").children(".select2-results__message").length > 0) {
      closeSelect();
   }
   $('.select2-container--open').siblings(".select-2[multiple]").find("option").prop("selected", false);
   $('.select2-container--open').siblings(".select-2[multiple]").find("option").find('option').prop('selected', false);
   $('.select2-container--open').siblings(".select-2[multiple]").trigger("change");
   $("li.select2-results__option").attr('aria-selected', 'false');
}
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
      $(".calendar").datetimepicker({
         format: 'L',
         locale: 'vi',
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
   }
});
function closeProgress() {
   $('.progress-backdrop').addClass('out');
   $('.progress-wrap').addClass('out');
   setTimeout(function () {
      $('.progress-backdrop').remove();
      $('.progress-wrap').remove();
   }, 500)
}
$.fn.DataTable.ext.pager.numbers_length = 5;

function progressMove() {
   var elem = $('.progress-bar');
   var width = 0;
   var id = setInterval(frame, 5);
   function frame() {
      if (width >= 100) {
         closeProgress();
         clearInterval(id);
      } else {
         width++;
         elem.css('width', width + '%')
      }
   }
}
function progressMoveError() {
   var elem = $('.progress-bar');
   var width = 0;
   var id = setInterval(frame, 5);
   function frame() {
      if (width >= 70) {
         clearInterval(id);
         $('.progress-wrap').addClass('error');
         $('#modal-alert').modal('show')
      } else {
         width++;
         elem.css('width', width + '%')
      }
   }
}
var progressRunHtml =
   '<div class="progress-backdrop"></div>' +
   '<div class="progress-wrap">' +
   '   <div class="progress-bg">' +
   '      <div class="progress-bar"></div>' +
   '   </div>'
'</div>'

function radioShow() {
   $('.radio-control > input[type=radio],.radio-control > input[type=checkbox]').each(function () {
      if ($(this).is(':checked')) {
         $(this).closest('.radio-show').addClass('show')
      }
      else {
         $(this).closest('.radio-show').removeClass('show')
      }
   })
}

$(document).ready(function () {
   if ($(window).width() <= menuSettings.breakpoint) {
      $('.sidebarswipe').sidenav();
      $('.sidenav-trigger').removeAttr('for');
   }
   //siddbar-swipe

   //mega menu
   if ($(window).width() <= menuSettings.breakpoint) {
      $('[mega-menu-control]').each(function () {
         $(this).on('click', function () {
            $(this).closest('[mega-menu-wrap]').addClass('menu__mega--active');
         })
      })
      $('[mega-menu-back]').each(function () {
         $(this).on('click', function () {
            $(this).closest('[mega-menu-wrap]').removeClass('menu__mega--active');
         })
      })
      $("#menu-trigger").on('change', function () {
         $('[mega-menu-wrap]').removeClass('menu__mega--active');
      })
      $('[data-scroll]').on('click', function () {
         $('#menu-trigger').prop('checked', false);
         $('#menu-trigger').trigger('change');
      })
   }
   //input-upload
   $('.input-upload-input').on('change', function () {
      var inputVal = $(this).val().replace(/^.*[\\\/]/, '');
      $(this).siblings('.input-upload').find('.ellipsis').html(inputVal).addClass('color-black').removeClass('color-grey');
   })
   //mobiscroll
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
   //t-datepicker
   $('.t-datepicker-range').tDatePicker({
   }).on('afterShowDay', function () {
      $('.t-check-inner').removeClass('active');
      $('.t-datepicker-day').parent('.t-check-inner').addClass('active');
   }).on('toggleAfterHideDay', function () {
      $('.t-check-inner').removeClass('active');
   }).on('eventClickDay', function (e, dataDate) {
      $('.t-check-inner').removeClass('active');
      setTimeout(function () {
         $('.t-datepicker-day').parent('.t-check-inner').addClass('active');
      }, 1)
   });
   $('.check-in-trigger').on('click', function () {
      $('.t-date-check-in').trigger('click');
   });
   $('.check-out-trigger').on('click', function () {
      $('.t-date-check-out').trigger('click');
   })
   //Cleave
   if (('.cleave-birthday').length) {
      $('.cleave-birthday').toArray().forEach(function (field) {
         new Cleave(field, {
            date: true,
            datePattern: ['d', 'm', 'Y']
         });
      })
   }
   //Bootstrap multi select
   $('.multiselect').multiselect({
      enableFiltering: true,
      enableClickableOptGroups: true,
      includeSelectAllOption: true,
      selectAllText: 'Chọn tất cả',
      nonSelectedText: 'Chọn',
      filterPlaceholder: 'Tìm kiếm...',
      nSelectedText: 'Đã chọn',
      allSelectedText: 'Đã chọn tất cả',
      templates: {
         filter: '<li class="multiselect-item filter"><div class="input-group"><input type="text" class="input input-sm input-ic-sm input-multiselect-search" placeholder="Tìm kiếm"><div class="input-ic input-ic-sm"><img src="images/base/icons/search/square/base.svg" class="ic-md alt=""></div></div></li>',
      }
      // optionLabel: function (element) {
      //    return '<img src="' + $(element).attr('data-img') + '"> ' + $(element).text();
      // },
   });
   $('.input-group .btn-group').on('show.bs.dropdown', function (event) {
      if ($(window).width() <= 480) {
         BNS.on();
      }
   });
   $('.input-group .btn-group').on('hide.bs.dropdown', function (event) {
      if ($(window).width() <= 480) {
         BNS.off();
      }
   });
   //select 2 fix
   $(document).on('focus', '.select2.select2-container', function (e) {
      // only open on original attempt - close focus event should not fire open
      if (e.originalEvent && $(this).find(".select2-selection--single").length > 0) {
         $(this).siblings('select:enabled').select2('open')
      }
   });
   //Input material
   $('.select-2').each(function () {
      if ($(this).val().length == 0) {
         $(this).removeClass('input-hadval');
      } else {
         $(this).addClass('input-hadval');
      }
   })
   $('.select-2').change(function () {
      if ($(this).val().length == 0) {
         $(this).removeClass('input-hadval');
      } else {
         $(this).addClass('input-hadval');
      }
   })
   $('.input-material:not(.static)').each(function () {
      if ($(this).val().length == 0) {
         $(this).removeClass('input-hadval');
      } else {
         $(this).addClass('input-hadval');
      }
      $(this).on('blur change', function () {
         if ($(this).val().length == 0) {
            $(this).removeClass('input-hadval');
         } else {
            $(this).addClass('input-hadval');
         }
      })
   })
   //select-2

   var select2Timeout;
   if ($(window).width() <= 768) {
      if ($('body .select-2').hasClass('select-2')) {
         $('body').append('<div class="select-2-backdrop"></div>')
      }
   }
   $('.select-2-backdrop').on('click', function () {
      $('.select-2').select2('close');
   })
   $('.select-2:not([multiple])').select2({
      width: '100%',
      closeOnSelect: $(window).width() < 768 ? false : true,
   }).on("select2:opening", function () {
      if ($(window).width() <= 768) {
         BNS.off();
         clearTimeout(select2Timeout);
      }
   }).on("select2:open", function () {
      $(".select2-search--dropdown .select2-search__field").attr("placeholder", "Tìm kiếm...");
      $('.select2-search input').prop('focus', false);
      if ($(window).width() <= 768) {
         clearTimeout(select2Timeout);
         BNS.on();
         $('.close-select').remove();
         var x = $(this).eq(0).attr('header-text');
         $('body > .select2-container .select2-dropdown').prepend('<div class="close-select"><div class="close-select__btn" href="javascript:void(0)" onclick="closeSelect()">Đóng</div>' + x + '</div>');
         $('body > .select2-container .select2-dropdown').addClass('top-0');
         $('.select-2-backdrop').addClass('show');
      }
   }).on("select2:closing", function () {
      $('.select-2-backdrop').removeClass('show');
      if ($(window).width() <= 768) {
         BNS.off();
         $('body > .select2-container .select2-dropdown').removeClass('top-0');
      }
   }).on("select2:select", function () {
      if ($(window).width() <= 768) {
         $('.select-2-backdrop').removeClass('show');
         $('body > .select2-container .select2-dropdown').removeClass('top-0');
         select2Timeout = setTimeout(function () {
            $('.select-2').select2('close');
         }, 320)
      }
   });
   $('.select-2[multiple]').select2({
      width: '100%',
      closeOnSelect: false
   }).on("select2:opening", function () {
      if ($(window).width() <= 768) {
         BNS.off();
         clearTimeout(select2Timeout);
      }
   }).on("select2:open", function () {
      $(".select2-search--dropdown .select2-search__field").attr("placeholder", "Tìm kiếm...");
      $('.select2-search input').prop('focus', false);
      if ($(window).width() <= 768) {
         clearTimeout(select2Timeout);
         BNS.on();
         $('.close-select').remove();
         $('.unselect-all').remove();
         $('.select2-search-container').remove();
         var x = $(this).eq(0).attr('header-text');
         $('body > .select2-container .select2-dropdown').prepend('<div class="close-select close-select--multiple"><div class="close-select__done" href="javascript:void(0)" onclick="closeSelect()">Xong</div>' + x + '</div><span class="no-padding-bottom select2-search select2-search-container select2-search--dropdown"><input id="select-2-search-multiple" class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox"><div class="unselect-all" onclick="deselectAll()">Bỏ chọn tất cả</div></span>');
         $('body > .select2-container .select2-dropdown').addClass('top-0');
         $('.select-2-backdrop').addClass('show');
         $("#select-2-search-multiple").keyup(function () {
            console.log('a');
            select2_search($("#select-2-search-multiple").val());
         });
      }
   }).on("select2:closing", function () {
      $('.select-2-backdrop').removeClass('show');
      if ($(window).width() <= 768) {
         BNS.off();
         $('body > .select2-container .select2-dropdown').removeClass('top-0');
      }
   });

   //show - hide password
   $('.hide-password').each(function () {
      $(this).on('change', function () {
         if ($(this).is(':checked')) {
            $(this).closest('.input-group').find('input[type=password]').prop('type', 'text');
            $(this).siblings('.mdi-eye').removeClass('mdi-eye').addClass('mdi-eye-off')
         }
         else {
            $(this).closest('.input-group').find('input[type=text]').prop('type', 'password');
            $(this).siblings('.mdi-eye-off').removeClass('mdi-eye-off').addClass('mdi-eye')
         }
      })
   })

   //end show - hide password
   //word-count
   $('.word-count').each(function () {
      $(this).closest('.form-group').find('.word-feedback').html($(this).val().length + '/' + $(this).prop('maxlength'));
      $(this).on('keydown', function () {
         var textLength = $(this).val().length;
         var maxLength = $(this).prop('maxlength');
         $(this).closest('.form-group').find('.word-feedback').html(textLength + '/' + maxLength);
      })
   })
   //end word-count
   //radio-show
   radioShow();
   $('.radio-control > input[type=radio],.radio-control > input[type=checkbox]').on('change', function () {
      radioShow();
   });
   //end radio-show
   //live-search
   var accentMap = { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ω": "ω", "ς": "σ" };
   String.prototype.latinise = function () { return this.replace(/[^A-Za-z0-9\[\] ]/g, function (a) { return accentMap[a] || a }) };
   $('.live-search-list li').each(function () {
      $(this).attr('data-search-term', $(this).text().trim().toLowerCase().latinise());
   });
   $('.select-all').on('change', function () {
      if ($(this).is(':checked')) {
         $(this).closest('.select-recive').find('.live-search-list input[type="checkbox"]').prop('checked', true);
      }
      else {
         $(this).closest('.select-recive').find('.live-search-list input[type="checkbox"]').prop('checked', false);
      }
   })
   $('.live-search-box').on('keyup', function () {
      var searchTerm = $(this).val().toLowerCase().latinise();
      $(this).closest('.tree').find('li').each(function () {
         if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
            $(this).show();
            $(this).closest('.tree-group').show();
            $(this).closest('.tree-group').addClass('has-result');
         } else {
            $(this).hide();
            if (!$(this).closest('.tree-group').hasClass('has-result')) {
               $(this).closest('.tree-group').hide();
            }
         }
      });
      $('.tree-group').removeClass('has-result')
   });
   //end live-search

   //checkbox toggle
   $('[data-checkbox=big]').on('change', function () {
      if ($(this).is(':checked')) {
         $(this).closest('.tree-group').find('input[type="checkbox"]').prop('checked', true);
      }
      else {
         $(this).closest('.tree-group').find('input[type="checkbox"]').prop('checked', false);
      }
   })
   //end checkbox toggle

   //progress-bar
   $('.progress-run').on('click', function () {
      $('body').append(progressRunHtml);
      progressMove()
   })
   $('.progress-run-error').on('click', function () {
      $('body').append(progressRunHtml);
      progressMoveError();
   })
   $('.close-progress').on('click', function () {
      closeProgress();
   })
   //end progress-bar

   $('[data-tooltip]').tooltip();
   var table = $('.data-table').DataTable({
      "searching": false,
      "dom": '<"table-wraper"t><"bottom"<"table"<"td"<"table"<"td"i><"td"l>">><"td"p>>><"clear">',
      "pagingType": "full_numbers",
      "language": {
         "lengthMenu": "Hiển thị: _MENU_",
         "info": "<b>_START_ - _END_</b> của <b>_TOTAL_</b>",
         "paginate": {
            "next": "",
            "last": "",
            "first": "",
            "previous": "",
         }
      },
   });
   $('th input[type=checkbox]').on('change', function () {
      var cells = table.cells().nodes();
      $(cells).find(':checkbox').prop('checked', $(this).is(':checked'));
   })
   if ($(window).width() <= 480) {
      $(".calendar").prop('readonly', 'true');
      $(".timepicker").prop('readonly', 'true')
   }
   if ($(window).width() <= 0) {
      $(".calendar").prop('type', 'date').removeClass('calendar')
   }
   $('.modal').on('show.bs.modal', function (e) {
      BNS.on();
      $('#modalNotify,#modalEvent').on('click', function (e) {
         e.stopPropagation();
      });
   });
   $('[data-content]').on('change', function () {
      $(this).closest('[data-accordion]').trigger('resize');
   })
   //modal
   $('.modal').on('show.bs.modal', function (e) {
      BNS.on();
      $('header').css('padding-right', getScrollbarWidth());
      var currentScrollPosition = $(window).scrollTop();
   });
   $('.modal').on('shown.bs.modal', function (e) {
      $('header').css('padding-right', getScrollbarWidth());
      $('body').css('padding-right', getScrollbarWidth());
   })
   $('.modal').on('hidden.bs.modal', function (e) {
      if (!$('#dropdownElement').isActive()) {
         if (!$('.modal').hasClass('in')) {
            BNS.off();
         }
      }
      if (!$('.modal').hasClass('in')) {
         BNS.off();
         $('body').css('padding-right', '');
         $('header').css('padding-right', '');
      }
      else {
         $('ldp-header').css('padding-right', getScrollbarWidth());
         $('body').css('padding-right', getScrollbarWidth());
      }
   })
   //end modal
   $('.mark-close').on('click', function () {
      $('.section-mark').css('display', 'none');
   });
   if ($(window).width() <= 600) {
      $('.header__item').on('show.bs.dropdown', function (e) {
         BNS.on();
      })
      $('.header__item').on('hide.bs.dropdown', function (e) {
         BNS.off();
      })
      $(window).on('scroll', function () {
         if ($(window).scrollTop() >= 56) {
            $('.header').addClass('header-hide-top');
         }
         else {
            if (!$('#sidebar-trigger').is(':checked') && !$('.header__item').hasClass('open') && !$('.calendar-container').hasClass('open')) {
               $('.header').removeClass('header-hide-top')
            }
         }
      })
   }
   $('.isolated-scroll').isolatedScroll();
   if ($(window).width() <= menuSettings.breakpoint) {
      $("#sidebar-trigger").on('change', function () {
         if ($(this).is(':checked')) {
            BNS.on();
         }
         else {
            BNS.off();
         }
      })
   }
   $(document).on('click', '.dropdown-click', function (e) {
      e.stopPropagation();
   })
   $('.dropdown-notify').on('shown.bs.dropdown', function (e) {
      $(this).removeClass('active-nofify')
   })
   $(".ripple-radio").ripple({
      maxDiameter: "230%",
   });
   $(".ripple").ripple({

   });
   $(".ripple-100").ripple({
      maxDiameter: "100%",
      touchDelay: 150
   });
   $('.prev').ripple();
   $('[data-accordion]').accordion({
      "transitionSpeed": 200
   });
   $('[data-accordion]').trigger('resize');
   $('[data-control]').on('click', function () {
      $(this).closest('[data-accordion]').trigger('accordion.close')
   })
   var opacityChangeClass = $('.banner__overlay');
   menuBannerScroll();
   window.addEventListener('resize', function (event) {
      menu();
   });
   menu();

   window.onscroll = function () {
      if (!$("#menu-trigger").is(':checked')) {
         menuBannerScroll();
      }
   }
   $('.menu__item').each(function (index, element) {
      $(this).attr({
         'style': 'transition-delay:' + menuSettings.itemsAnimationDelay * (index + 1) + 'ms,' + menuSettings.itemsAnimationDelay * (index + 1) + 'ms;-webkit-transition-delay:'
            + menuSettings.itemsAnimationDelay * (index + 1) + 'ms,' + menuSettings.itemsAnimationDelay * (index + 1) + 'ms;'
      })
   })
});

function menuBannerScroll() {
   var opacityChangeClass = $('.banner__overlay');
   var pos = $('.menu').height() * 0;
   var currentScrollPosition = $(window).scrollTop();
   var getPositionChangeOpacity = screen.height - $('.menu').height() * bannerSettings.getPositionChangeOpacityPara;
   opacityChangeClass.css("opacity", ($(window).scrollTop()) / (opacityChangeClass.height() - pos));
   if (menuSettings == true) {
      if ($(window).height() < currentScrollPosition + bannerSettings.menuHeight * 2) {
         $('.menu').removeClass('menu--change');
      } else {
         $('.menu').addClass('menu--change');
      }
      if (currentScrollPosition == screen.height) {
         $('.menu').removeClass('menu--change');
      }
   }
   // console.log("getPositionChangeOpacity: " + getPositionChangeOpacity);
   // if ((currentScrollPosition <= screen.height) && (currentScrollPosition >= getPositionChangeOpacity)) {
   //     var opacityNumber = (currentScrollPosition - getPositionChangeOpacity) / ($('.menu').height() * getPositionChangeOpacityPara);
   //     console.log("opacityNumber: " + (currentScrollPosition - getPositionChangeOpacity));
   //     opacityChangeClass.css('opacity', opacityNumber);
   // }
}

function menu() {
   var closedCSS = { 'max-height': 0, 'overflow': 'hidden' };
   if ((deviceIsMobile) || ($(window).width() <= menuSettings.breakpoint)) {
      if (menuSettings.iscrollMenuEnable) {
         var myScroll = new IScroll('.menu__content', {
            mouseWheel: true,
            scrollbars: false,
            disableMouse: false,
            click: false,
            preventDefaultException: { className: /(^|\s)menu__item__block(\s|$)/ } // add Class here to enable click
         });
         new ResizeSensor(document.querySelector('.menu__content'), function () {
            myScroll.refresh();
         });
         new ResizeSensor(document.querySelector('.menu__content__wrap'), function () {
            myScroll.refresh();
         });
      }
      $("#menu-trigger").on('change', function () {
         if ((this.checked) && (menuSettings.iscrollMenuEnable == false)) {
            BNS.on();
            $(".menu__content").scrollTop(0);
         } else {
            BNS.off();
            // $('[data-accordion]:not(.active)').removeClass('open');
            // $('[data-content]').css(closedCSS);
         }
      });
      $('.only-one [data-accordion]:not(.active)').accordion();
   };
   if ($(window).width() > menuSettings.breakpoint) {
      $('#menu-trigger').prop('checked', false);
      BNS.off();
      // $('[data-accordion]:not(.active)').removeClass('open');
      // $('[data-accordion]:not(.active) [data-content]').removeAttr("style");
   };
};

(function ($) {
   $.fn.isActive = function () {
      return $(this.get(0)).hasClass('open')
   }
})(jQuery)