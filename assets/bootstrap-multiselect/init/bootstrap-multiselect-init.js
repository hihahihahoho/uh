//====================BOOTSTRAP MULTISELCET INIT=================//
$(document).ready(function () {
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
});
//====================END BOOTSTRAP MULTISELCET INIT=================//