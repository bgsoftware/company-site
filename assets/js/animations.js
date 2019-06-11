/**
 * fades an element out by changing opacity.
 * @param element     {object}    - The DOM element to be faded.
 * @param animationMs { integer } - The time(ms) it takes for the opacity to drop by 0.1.
 */
function fadeOut(element, animationMs) {
  (element.style.opacity -= .1) < 0 ?
    element.style.display="none" : setTimeout(function() { fadeOut(element, animationMs) }, animationMs);
}

