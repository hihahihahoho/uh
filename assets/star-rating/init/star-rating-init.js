//====================STAR RATING INIT=================//
$(document).ready(function () {
   $(".rating").starRating({
      starSize: 18,
      emptyColor: "#c4c4c4",
      useGradient: false,
      strokeWidth: 0,
      activeColor: "#FC5446",
      hoverColor: "#FC5446",
      ratedColor: "#FC5446",
      disableAfterRate: false,
      starShape: "rounded",
      onHover: function (currentIndex, currentRating, $el) {
         $el.siblings('.rating__live').text(currentIndex);
      },
      onLeave: function (currentIndex, currentRating, $el) {
         $el.siblings('.rating__live').text(currentRating);
      }
   });
   $(".rating-white").starRating({
      starSize: 18,
      emptyColor: "#c4c4c4",
      useGradient: false,
      strokeWidth: 0,
      activeColor: "#FFFFFF",
      hoverColor: "#FFFFFF",
      ratedColor: "#FFFFFF",
      disableAfterRate: false,
      starShape: "rounded",
      onHover: function (currentIndex, currentRating, $el) {
         $el.siblings('.rating__live').text(currentIndex);
      },
      onLeave: function (currentIndex, currentRating, $el) {
         $el.siblings('.rating__live').text(currentRating);
      }
   });
    $(".rating-readonly").starRating({
      starSize: 18,
      emptyColor: "#c4c4c4",
      useGradient: false,
      strokeWidth: 0,
      activeColor: "#FC5446",
      hoverColor: "#FC5446",
      ratedColor: "#FC5446",
      disableAfterRate: false,
      starShape: "rounded",
      readOnly: true
   });
   $(".rating-readonly-white").starRating({
      starSize: 18,
      emptyColor: "#99a3ae",
      useGradient: false,
      strokeWidth: 0,
      activeColor: "#ffffff",
      hoverColor: "#ffffff",
      ratedColor: "#ffffff",
      disableAfterRate: false,
      starShape: "rounded",
      readOnly: true
   });
});
//====================END STAR RATING INIT=================//