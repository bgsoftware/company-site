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

  $("#scroll-up-button").on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({ scrollTop: 0 }, numMs);
  })
})();