//====================CLEAVE INIT=================//
$(document).ready(function () {
   //Cleave
   if (('.cleave-birthday').length) {
      $('.cleave-birthday').toArray().forEach(function (field) {
         new Cleave(field, {
            date: true,
            datePattern: ['d', 'm', 'Y']
         });
      })
   }
});
//====================END CLEAVE INIT=================//