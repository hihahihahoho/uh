Dropzone.options.dropzoneFront = {
   addRemoveLinks: true,
   maxFiles: 1,
   init: function () {
      this.on('addedfile', function (file) {
         if (this.files.length > 1) {
            this.removeFile(this.files[0]);
         }
      });
   },
   thumbnailWidth: 250,
   thumbnailHeight: 200,
   acceptedFiles: ".jpg,.png,.jpeg,.pdf",
   removedfile: function (file) {
      var _ref;
      return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
   }
};
Dropzone.options.dropzoneImgsm = {
   addRemoveLinks: true,
   maxFiles: 8,
   acceptedFiles: ".jpg,.png,.jpeg,.pdf",
   removedfile: function (file) {
      var _ref;
      return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
   }
};
$('#dropzoneImgsm').each(function (i, e) {
   var sortable = Sortable.create(e, {
      animation: 150,
      ghostClass: 'blue-background-class'
   });
});