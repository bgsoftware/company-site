(function() {
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {

    /* Get dynamic height of navigation bar. */
    let navHeight = $('#navigation-bar').css("height");
    $( window ).on("resize", function() {
       navHeight = $('#navigation-bar').css("height");
    });


    const currentScrollPos = window.pageYOffset;

    /* If scrolling up or the current scroll position is at or above 0, show
       navigation bar. */
    if (prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
      document.getElementById("navigation-bar").style.top = "0";
    }
    /* Else, place navigation bar the number of px of its height above 0. */
    else {
      document.getElementById("navigation-bar").style.top = "-" + navHeight;
    }

    prevScrollpos = currentScrollPos;
  }
})();