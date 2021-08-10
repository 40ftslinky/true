function initMap() {
// Styles a map in night mode.
var map = new google.maps.Map(document.getElementById('map'), {
center: {lat: -33.83112, lng: 151.20360},
zoom: 17,
scrollwheel: false,
draggable: false,
styles: [
        {"featureType": "all", "elementType": "labels.text", "stylers": [{"color": "#e6e6e6"}]},
        {"featureType": "all", "elementType": "labels.text.fill", "stylers": [{"color": "#464646"}]},
        {"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"}]},
        {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"}]},
        {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]},
        {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100},{"lightness": 45}]},
        {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"}]},
        {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]},
        {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]},
        {"featureType": "water", "elementType": "all", "stylers": [{"color": "#e5e5e5"},{"visibility": "on"}]}
      ]
    });

var image = {
anchor: new google.maps.Point(21, 51.5),
size: new google.maps.Size(100, 100),     // original size you defined in the SVG file
scaledSize: new google.maps.Size(50, 50), // desired display size
url: "data:image/svg+xml;utf-8, \
<svg x='0px' y='0px' width='39px' height='51.5px' viewBox='0 0 39 51.5' xmlns='http://www.w3.org/2000/svg' version='1.1'> \
<g><g><path fill='#094183' stroke='none' d='M19.5,51.5c0,0,19.5-21.2,19.5-32S30.3,0,19.5,0S0,8.7,0,19.5S19.5,51.5,19.5,51.5'></path> \
<path fill='#FFFFFF' stroke='none' d='M19.5,26c3.6,0,6.5-2.9,6.5-6.5S23.1,13,19.5,13S13,15.9,13,19.5S15.9,26,19.5,26'></path> \
</g></g></svg>",
url: "./gmap/marker.svg" // SITE/wp-content/themes/theme/library/gmap/marker.svg
};

var contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">-33.8311393</h1>'+
  '<div id="bodyContent">'+
  '<p>204/349 Pacific Hwy, North Sydney NSW 2060</p>'+
  '<p><a href="https://www.google.com/maps/dir//True+Sydney,+204%2F349+Pacific+Hwy,+North+Sydney+NSW+2060/@-33.8311393,151.2014169,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x6b12aee94c302beb:0xf3b8a0c5d670ddcc!2m2!1d151.2036042!2d-33.8311369!3e0">Get directions</a></p>'+
  '</div>'+
  '</div>';
var infoWindow = new google.maps.InfoWindow({
content: contentString
});
var mapMarker = new google.maps.Marker({
  position: {lat: -33.83112, lng: 151.20360}, // -33.83112,151.20360
map: map,
icon: image,
title: 'True Sydney',
clickable: true,
draggable: false
});

mapMarker.addListener('click', function() {
infoWindow.open(map, mapMarker);
});

}
