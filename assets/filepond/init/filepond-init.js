//====================FILEPOND INIT=================//
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

//====================END FILEPOND INIT=================//