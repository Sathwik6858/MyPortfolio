/* nicescroll customization */
var nice = function (){
    $('body').niceScroll({
  cursorcolor: '#148914',
  cursorwidth: '8px',
  cursorborder: '1px solid #115111',                
  scrollspeed: 100,
  autohidemode: false,
  horizrailenabled: false,
  cursorborderradius: 3,
  zindex: 1060
});
};
$(document).ready(function(){
    nice();
});

/* close navbar collapse after click in mobile */
  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });

/* Initializing all tooltips on the page */
$(function () {
  $('[data-toggle=tooltip]').tooltip();
});