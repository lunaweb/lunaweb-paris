// Header

$(function() {
  'use strict';

  var $header = $('.js-header'),
      didScroll = true,
      lastScrollTop = 0, 
      headerTop = 0;
      
  $win.on('scroll', function () {
    didScroll = true;
  });

  (function loop() {
    requestAnimationFrame(loop);
    
    if (didScroll) {
      var scrollTop = $win.scrollTop(),
          scrollDiff = lastScrollTop - scrollTop,
          headerOffset = parseInt($header.css('padding-top')) || 0,
          headerHeight = $header.outerHeight();

      if (scrollTop <= 0) {
        // At top (show nav)
        headerTop = 0;
        $body.removeClass('is-not-at-top');
      } else {
        $body.addClass('is-not-at-top');

        if(scrollDiff > 0) {
          // Scrolling up (show nav)
          headerTop = Math.min(- Math.min(scrollTop, headerOffset), headerTop + scrollDiff);
        } else if(scrollDiff < 0 ) {
          // Scrolling down (hide nav)
          headerTop = Math.max(- headerHeight, headerTop + scrollDiff);
        }
      }
      
      $header.css('position', 'fixed');
      $header.css(Modernizr.prefixed('transform'), 'translateY(' + headerTop + 'px)');
      
      lastScrollTop = scrollTop;
      
      didScroll = false;
    }
  })();

});
