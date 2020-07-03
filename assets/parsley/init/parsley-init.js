//====================PARSLEY INIT=================//
$(function () {
   var parsleyConfig = {
      errorsContainer: function (pEle) {
         var $err = pEle.$element.parents().closest('.form-group').children('.errorBlock');
         return $err;
      }
   }
   $('.form').each(function(){
      $(this).parsley(parsleyConfig);
   })
});
$(document).ready(function () {
   $(document).on('change','[data-parsley-id]', function(){
      $(this).parsley().validate();
   })
   $('.form-group').append('<div class="errorBlock"></div>');
});
//====================END PARSLEY INIT=================//