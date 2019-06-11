var headlineVideoOverlay = document.getElementsByClassName('headline__video-overlay')[0];
var headlineVideo = document.getElementsByClassName('headline__video')[0];

headlineVideoOverlay.addEventListener('click', (function () {
  if(headlineVideo.paused){
    headlineVideo.play();
    headlineVideoOverlay.style.opacity = 1;
    fadeOut(headlineVideoOverlay, 40);
  }
}));