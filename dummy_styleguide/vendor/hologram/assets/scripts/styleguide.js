//=require hologram-github-theme/scripts/vendor/jquery.waypoints.min.js
//=require hologram-github-theme/scripts/vendor/sticky.min.js
//=require hologram-github-theme/scripts/vendor/infinite.min.js
//=require hologram-github-theme/scripts/hgt.js
//=require iframify/iframify.js

(function () {
  'use strict';


  $(function() {
    // Init iframify
    $('.iframify').each(function () {
      var $element  = $(this),
          width     = parseInt($element.data('width')) || 320;

      var iframe    = iframify($element[0], {
        headExtra: '<style>body{padding:10px;margin:0;background-color:transparent;}</style>',
        bodyExtra: '<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>',
        sizingTimeout: 5000
      });

      iframe.width  = width;
    });


    // Show Color Hexa
    $('.js-background').each(function() {
      $(this).text(rgb2hex($(this).css('background-color')));
      if(isBright($(this).css('background-color'))) {
        $(this).addClass('bright');
      }
    });

    $('.js-background').on('click', function(event) {
      if($('#alert__clipboard').length < 1) {
        copyToClipboard(this);
        $('body').append('<div class="alert__clipboard" id="alert__clipboard"><span class="alert__clipboard-text">Copied to clipboard</div>');

        setTimeout(function() {
          $('#alert__clipboard').addClass('alert__clipboard--showed');
        }, 300);
        setTimeout(function() {
          $('#alert__clipboard').removeClass('alert__clipboard--showed');
        }, 2700);
        setTimeout(function() {
          $('#alert__clipboard').remove();
        }, 3000);
      }
    });
  });

  function hex(x) {
    var hexDigits = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
  }

  //Function to convert hex format to a rgb color
  function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }

  function isBright(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    var brightness = Math.round(((parseInt(rgb[1]) * 299) + (parseInt(rgb[2]) * 587) + (parseInt(rgb[3]) * 114)) /1000);
    var bright = false;
    if(brightness > 160) {
      bright = true;
    }
    return bright;
  }

  function copyToClipboard(element) {
    var doc = document,
        range,
        selection;

    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    document.execCommand('copy');

    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {
        window.getSelection().removeAllRanges();
      }
    } else if (document.selection) {
      document.selection.empty();
    }
  }

})();
