window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-top").style.visibility = "visible";
    document.getElementById("scroll-top").style.opacity = "1";
  } else {
    document.getElementById("scroll-top").style.visibility = "hidden";
    document.getElementById("scroll-top").style.opacity = "0";
  }
}

function scrollToTop(scrollDuration) {
  var scrollHeight = window.scrollY;
  var scrollStep = Math.PI / (scrollDuration / 15);
  var cosParameter = scrollHeight / 2;
  var scrollCount = 0;
  var scrollMargin;
  var scrollInterval = setInterval(function() {
    if (window.scrollY != 0) {
      scrollCount = scrollCount + 1;
      scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
      window.scrollTo(0, (scrollHeight - scrollMargin));
    }
    else {
      clearInterval(scrollInterval);
    }
  }, 15);
}