//= resuire picturefill/picturefill.js
//= require svg4everybody/dist/svg4everybody.js
//= require vendors/_debounce.js
//= require_self
//= require front/_modernizr.js
//= require front/_header.js
//= require front/_locator.js
//= require front/_pointer.js
//= require front/_reference.js
//= require front/_scrollto.js

var $win = $(window),
    $doc = $(document),
    $html = $('html'),
    $body = $('body');

svg4everybody();

$doc.ready(function() {
  $body.addClass('is-ready');
});

$win.load(function() {
  $body.addClass('is-loaded');
});
