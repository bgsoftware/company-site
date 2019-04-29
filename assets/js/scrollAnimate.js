(function(){
  const numMs = 800; /* Number of ms it takes to scroll to the specified area. */

  $(".nav-link").on('click', function(event) {
    /* Make sure this.hash has a value before overriding default behavior. */
    if (this.hash !== "") {
      /* Prevent default click behavior. */
      event.preventDefault();

      /* Store hash. */
      const hash = this.hash;

      /* Using jQuery's animate() method to add smooth page scroll. */
      $('html, body').animate({ scrollTop: $(hash).offset().top }, numMs);
    }
  });

  /* Scroll animation for clicking the scroll up button. */
  $("#scroll-up-button").on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({ scrollTop: 0 }, numMs);
  })


  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      $('#navigation-bar')[0].style.top = "0";
    } else {
      $('#navigation-bar')[0].style.top = "-500px";
    }

    prevScrollpos = currentScrollPos;
  }
})();