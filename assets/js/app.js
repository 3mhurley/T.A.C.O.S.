// Object
var taco = {
    map: 'taco.com',
    foursquare_clientID: 'D0HCALZZRSU3MQSBUY0E1AS4PKXFOIPTIO5UP11JMKEN3YSJ',
    foursquare_clientSecret: 'PGOTQALEY5RLYXXTV0XRG3WOU3MFT52BXJLPUC232LONJ3FM',
}

$(document).ready(function() {

"https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
var mapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk&callback=initMap&region=US"

function initMap() {
    var map = new google.maps.Map(mapURL, {
        zoom: 8,
        center: {lat: 35.717, lng: 139.731}
    });
}

// Aye, Jacks! 4 Square ahead! Yar
var city = 'near=' + 'Denver, CO';
var address = '1701 WYNKOOP DENVER, CO 80202' // Union
var location;
var query = 'query=' + 'tacos'
var queryURL = 'https://api.foursquare.com/v2/venues/search?' + 'client_id=' + taco.foursquare_clientID + '&client_secret=' + taco.foursquare_clientSecret + '&intent=checkin' + '&' + query + '&' + city + '&radius=50' + '&limit=10';
console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET",
}).then(function(response) {
    console.log(response);

});

});

// Google Map with Geolocation
// -Declare vars and initialize function
var map, infoWindow;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644}, // Sydney
        zoom: 12 // default zoom to local area <5mi
    });
infoWindow = new google.maps.InfoWindow;

// -Geocode current position
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        infoWindow.setPosition(pos); // set position of infoWindow on geocode
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos); // center map
    }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
    });
    } else {
        // --If browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}
// -Error handling
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}