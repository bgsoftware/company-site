function openChallenge(number) {
  var challengeString = 'challenge-' + number;
  var openButtonEl = document.getElementById(challengeString + '-open');
  var closeButtonEl = document.getElementById(challengeString + '-close');
  openButtonEl.setAttribute('style', 'display: none');
  closeButtonEl.setAttribute('style', 'display: inline');
}

function closeChallenge(number) {
  var challengeString = 'challenge-' + number;
  var openButtonEl = document.getElementById(challengeString + '-open');
  var closeButtonEl = document.getElementById(challengeString + '-close');
  openButtonEl.setAttribute('style', 'display: inline');
  closeButtonEl.setAttribute('style', 'display: none');
}