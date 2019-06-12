/**
 * POINTER
 ********************************* */

$(function() {


  /**
   * VARIABLES
   *********************** */
  var $pointer  = $('.js-pointer'),
      $referent = $('.js-pointer-referent'),
      $next     = $('.js-next');


  /**
   * ACTIONS
   *********************** */
  $referent.on('mousemove', function(event) {
    $pointer.css({
       left:  event.pageX,
       top:   event.pageY
    });
  });

  $next.hover(function() {
    $pointer.hide();
  }, function() {
    $pointer.show();
  });

});
