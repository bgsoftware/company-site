function toggleText(idText, open) {
  var openButtonEl = document.getElementById(idText + '-open');
  var closeButtonEl = document.getElementById(idText + '-close');
  /* If opening, show close button and hide open button. */
  if (open) {
    openButtonEl.classList.add('d-none');
    openButtonEl.classList.remove('d-inline');
    closeButtonEl.classList.add('d-inline');
    closeButtonEl.classList.remove('d-none');
  }
  /* If closing, show open button and hide close button. */
  else {
    openButtonEl.classList.add('d-inline');
    openButtonEl.classList.remove('d-none');
    closeButtonEl.classList.add('d-none');
    closeButtonEl.classList.remove('d-inline');
  }
}
