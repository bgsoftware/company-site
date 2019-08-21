function toggleText(number, open) {
  var idText = 'amc-text-' + number;
  var openButtonEl = document.getElementById(idText + '-open');
  var closeButtonEl = document.getElementById(idText + '-close');

  var displayNone = 'display: none';
  var displayInline = 'display: inline';

  openButtonEl.setAttribute('style', open ? displayNone : displayInline);
  closeButtonEl.setAttribute('style', open ? displayInline : displayNone);
}
