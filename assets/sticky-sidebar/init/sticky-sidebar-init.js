//====================STICKY SIDEBAR INIT=================//
if ($(window).width() > 992) {
   $('.sticky-sidebar').stickySidebar({
      innerWrapperSelector: '.sticky-sidebar__inner',
      topSpacing: 60
   });
   // $('.sticky-sidebar').stickySidebar('updateSticky');
}
//====================END STICKY SIDEBAR INIT=================//