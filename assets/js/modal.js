$(document).ready(function() {
  $('a[href$="#capabilities-modal"]').on( "click", function() {
     $('#capabilities-modal').modal('show');
  });

  $('a[href$="#case-studies-modal"]').on( "click", function() {
     $('#case-studies-modal').modal('show');
  });
});