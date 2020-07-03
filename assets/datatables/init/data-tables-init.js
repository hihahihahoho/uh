//====================DATATABLES INIT=================//
$.fn.DataTable.ext.pager.numbers_length = 5;
$(document).ready(function () {
   $('th input[type=checkbox]').on('change', function () {
      var cells = table.cells().nodes();
      $(cells).find(':checkbox').prop('checked', $(this).is(':checked'));
   })
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
});
//====================END DATATABLES INIT=================//