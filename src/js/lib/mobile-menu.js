import $ from 'jquery';

$( document ).ready(function() {

  $( '.cross' ).hide();
  $( '.hamburger' ).click(function() {
    $( '.nav-mobile' ).slideToggle( 'slow', function() {
      $( '.hamburger' ).hide();
      $( '.cross' ).show();
    });
  });

  $( '.cross' ).click(function() {
    $( '.nav-mobile' ).slideToggle( 'slow', function() {
      $( '.cross' ).hide();
      $( '.hamburger' ).show();
    });

  });
});
