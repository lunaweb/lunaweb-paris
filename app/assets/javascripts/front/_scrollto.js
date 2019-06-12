/**
 * SCROLLTO
 ********************************* */

$(function() {


  /**
   * ACTIONS
   *********************** */
  $('.js-scrollto').on('click', function(event) {
    event.preventDefault();

    var $this = $(this),
        target = $this.attr('href');

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });

});
