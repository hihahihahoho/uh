//====================STAR RATING INIT=================//
autosize(document.querySelectorAll('.textarea-autosize'));

[].forEach.call(document.querySelectorAll('.textarea-autosize'), function (el, index) {
   el.addEventListener('autosize:resized', function () {
      var elHeight = parseInt(el.style.height);
      console.log(elHeight)
      if (elHeight > 199) {
         if ($(this).hasClass('input-material-2')) {
            $(this).css('padding-top', '0')
            $(this).parent('.input-material-2-wrap').css('padding-top', '30px')
         }
         if ($(this).hasClass('input-material-3')) { 
            $(this).parent('.input').css('padding-top', '10px')
         }
      }
      else {
         if ($(this).hasClass('input-material-2')) {
            $(this).parent('.input-material-2-wrap').css('padding-top', ''); 
            $(this).css('padding-top', '')
         }
         if ($(this).hasClass('input-material-3')) {
            $(this).parent('.input').css('padding-top', '')
         }
      }
   })
})
//====================STAR RATING INIT=================//