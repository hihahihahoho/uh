//====================RIPPLE INIT=================//
$(document).ready(function () {
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
});
//====================END RIPPLE INIT=================//