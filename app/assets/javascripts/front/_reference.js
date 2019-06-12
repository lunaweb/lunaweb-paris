/**
 * REFERENCE
 ********************************* */

$(function() {


  /**
   * VARIABLES
   *********************** */
  var $link = $('.js-reference-link'),
      $back = $('.js-reference-back');


  /**
   * ACTIONS
   *********************** */
  $('#main').on('click', function(event) {

    if(!$(event.target).hasClass('js-reference-link') && $(event.target).parents('.js-reference-link').length == 0) {

      if($body.hasClass('is-overlayed')) {
        $body.removeClass('is-overlayed');
      }
    }
  });


  $back.on('click', function(event) {
    event.preventDefault();

    $body.removeClass('is-overlayed');
  });


  $link.on('click', function(event) {
    event.preventDefault();

    var $this = $(this),
        $reference = $this.parents('.js-reference'),
        id = $reference.attr('data-target');

    if(!$body.hasClass('is-overlayed')) {
      $body.addClass('is-overlayed');
      $('.js-reference-target').hide();
      $('.js-reference-target[data-id=' + id + ']').show();
    }
  });

});
