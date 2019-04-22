(function(){
  $(".nav-link").on('click', function(event) {
    const numMs = 800; /* Number of ms it takes to scroll to the specified area. */

    /* Make sure this.hash has a value before overriding default behavior. */
    if (this.hash !== "") {
      /* Prevent default click behavior. */
      event.preventDefault();

      /* Store hash. */
      const hash = this.hash;

      /* Using jQuery's animate() method to add smooth page scroll. */
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, numMs, function() {

        /* Add hash (#) to URL when done scrolling (default click behavior). */
        window.location.hash = hash;
      });
    }
  });
})();