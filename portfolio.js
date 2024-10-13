/* nicescroll customization */
var nice = function () {
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

$(document).ready(function () {
  nice();

  /* close navbar collapse after click in mobile */
  $('.navbar-collapse ul li a').click(function () {
      $('.navbar-toggle:visible').click();
  });

  /* Initializing all tooltips on the page */
  $('[data-toggle=tooltip]').tooltip();

  /* Form submission logic */
  const form = document.forms['submit-to-google-sheet'];
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwPSmvROTebywXux6Q7keSUTiJuW8o478oRy0DGh6GC1gcxADkVWSVYWF0PZR0J8zo/exec';
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
      e.preventDefault(); // Prevent default form submission

      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => {
              msg.innerHTML = "Request Sent"; // Show "Request Sent" message
              form.reset(); // Clear form fields

              // Remove the message after 3 seconds
              setTimeout(() => {
                  msg.innerHTML = "";
              }, 3000);
          })
          .catch(error => console.error('Error!', error.message));
  });
});
