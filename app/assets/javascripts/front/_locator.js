// Locator
// Locator with or without Google Maps
$(function() {
  'use strict';

  var $locator  = $('.js-locator'),
      $map      = $('#' + $locator.data('map')),
      $list     = $('#' + $locator.data('list')),
      $close    = $('<button type="button" class="c-locator__close">&times;</button>'),
      $window   = $(window),
      $document = $(document),
      markers   = [],
      googleMapsKey = "AIzaSyBaNjilkhkvnpdH4MAOuq3a4P6C40pVhqE",
      map, zoomChangeBoundsListener;

  // Add markers on map
  var addMarkers = function() {

    // List markers
    var $items = $list.find('.js-locator-item[data-latitude][data-longitude]');
    $items.each(function(index) {
      var $item     = $(this),
          latitude  = $item.data('latitude'),
          longitude = $item.data('longitude');

      // Create marker
      var position = new google.maps.LatLng(latitude, longitude);
      var marker = new google.maps.Marker({
        position: position,
        animation: google.maps.Animation.DROP
      });

      // Add to map and register events
      marker.setMap(map);

      // Store marker
      markers.push(marker);
    });

    centerMap();
  };

  // Create map
  var createMap = function() {
    map = new google.maps.Map($map[0], {
      center: { lat: 48.8434649, lng: 2.3148515999999972 },
      zoom: 14,
      disableDefaultUI: true,
      zoomControl: true,
      styles: googleMapsStyle
    });

    // Markers
    addMarkers();

    // Center map is resized
    google.maps.event.addListener(map, 'resize', function() {
      centerMap();
    });

    // Trigger map resize if window is resized
    $window.on('resize', debounce(function(e) {
      google.maps.event.trigger(map, 'resize');
      }, 200)
    );
  };

  // Center map depending of number of markers
  var centerMap = function () {
    var paddings = {
      top: 50,
      right: 50,
      bottom: 50,
      left: 50
    };

    if(zoomChangeBoundsListener) {
      google.maps.event.removeListener(zoomChangeBoundsListener);
    }

    // Force setZoom to 14 once after fitBounds
    zoomChangeBoundsListener = google.maps.event.addListener(map, 'bounds_changed', function(event) {
      if (this.getZoom() > 18) {
        this.setZoom(18);
      }
    });
  };

  // Load Google Maps once with callback
  var googleMapsLoader = function (callback) {
    var params = [].slice.call(arguments, 1);

    if (window.google && window.google.maps) {
      callback.apply(null, params);
    } else {
      var callbackName = 'callback_' + Math.floor((1 + Math.random()) * 0x10000).toString(16);
      window[callbackName] = function () {
        return callback.apply(null, params);
      };
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://maps.googleapis.com/maps/api/js?callback=' + callbackName + '&key=' + googleMapsKey + '&libraries=places';
      document.body.appendChild(script);
    }
  };

  // Default Google Maps Style
  var googleMapsStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e4eaff"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6884fe"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dae0ff"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#5d7aff"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#d5dcff"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#95a9ff"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c8d1ff"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#b4c2ff"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ];

  // Create map once only when visible
  var checkResize = function (e) {
    googleMapsLoader(createMap);
    $window.off('debouncedresize', checkResize);
  };
  $window.on('debouncedresize', checkResize);
  checkResize();

});