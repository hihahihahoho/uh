//====================MATERIALIZE INIT=================//
$(document).ready(function () {
   //siddbar-swipe
   if ($(window).width() <= menuSettings.breakpoint) {
      $('.sidebarswipe').sidenav({
         onOpenStart: function () {
            BNS.on();
         },
         onCloseStart: function () {
            BNS.off();
            console.log($(this))
         },
         preventScrolling: false
      });
      $('.sidenav-trigger').removeAttr('for');
   }
   //End siddbar-swipe

   //tabs
   $('.tabs').tabs();

   //images box
   $('.materialboxed').materialbox();

   //dropdown
   $('.material-dropdown').dropdown({
      constrainWidth: false,
      coverTrigger: false
   });
   $('.material-dropdown-right').dropdown({
      constrainWidth: false,
      alignment: 'right',
      coverTrigger: false,
   });
});
//====================END MATERIALIZE INIT=================//