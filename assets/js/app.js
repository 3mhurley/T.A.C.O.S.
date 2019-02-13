// // Object
// var taco = {
//     map: 'taco.com',
//     foursquare_clientID: 'D0HCALZZRSU3MQSBUY0E1AS4PKXFOIPTIO5UP11JMKEN3YSJ',
//     foursquare_clientSecret: 'PGOTQALEY5RLYXXTV0XRG3WOU3MFT52BXJLPUC232LONJ3FM',
// }

// $(document).ready(function() {

// "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
// var mapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk&callback=initMap&region=US"

// function initMap() {
//     var map = new google.maps.Map(mapURL, {
//         zoom: 8,
//         center: {lat: 35.717, lng: 139.731}
//     });
// }

// // Aye, Jacks! 4 Square ahead! Yar
// var city = 'near=' + 'Denver, CO';
// var address = '1701 WYNKOOP DENVER, CO 80202' // Union
// var location;
// var query = 'query=' + 'tacos'
// var queryURL = 'https://api.foursquare.com/v2/venues/search?' + 'client_id=' + taco.foursquare_clientID + '&client_secret=' + taco.foursquare_clientSecret + '&intent=checkin' + '&' + query + '&' + city + '&radius=50' + '&limit=10';
// console.log(queryURL);

// $.ajax({
//     url: queryURL,
//     method: "GET",
// }).then(function(response) {
//     console.log(response);

// });

// });

// // Google Map with Geolocation
// // -Declare vars and initialize function
// var map, infoWindow;
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: -34.397, lng: 150.644}, // Sydney
//         zoom: 12 // default zoom to local area <5mi
//     });
// infoWindow = new google.maps.InfoWindow;

// // -Geocode current position
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//         var pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//         };

//         infoWindow.setPosition(pos); // set position of infoWindow on geocode
//         infoWindow.setContent('Location found.');
//         infoWindow.open(map);
//         map.setCenter(pos); // center map
//     }, function() {
//         handleLocationError(true, infoWindow, map.getCenter());
//     });
//     } else {
//         // --If browser doesn't support Geolocation
//         handleLocationError(false, infoWindow, map.getCenter());
//     }
// }
// // -Error handling
// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(browserHasGeolocation ?
//                           'Error: The Geolocation service failed.' :
//                           'Error: Your browser doesn\'t support geolocation.');
//     infoWindow.open(map);
// }
// // Object
// var taco = {
//     map: 'taco.com',
//     foursquare_clientID: 'D0HCALZZRSU3MQSBUY0E1AS4PKXFOIPTIO5UP11JMKEN3YSJ',
//     foursquare_clientSecret: 'PGOTQALEY5RLYXXTV0XRG3WOU3MFT52BXJLPUC232LONJ3FM',
// }

// $(document).ready(function() {

// "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
// var mapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk&callback=initMap&region=US"

// function initMap() {
//     var map = new google.maps.Map(mapURL, {
//         zoom: 8,
//         center: {lat: 35.717, lng: 139.731}
//     });
// }

// // Aye, Jacks! 4 Square ahead! Yar
// var city = 'Denver, CO' //&near=Denver, CO
// var address = '1701 WYNKOOP DENVER, CO 80202' // Union
// var now = '20190212' //&v=YYYYMMDD
// var location = '39.7,105.0' //&ll=40.7,-74
// var query = 'tacos'
// var queryURL = 'https://api.foursquare.com/v2/venues/search?'
//     // + 'll=' + location;
//     + 'near=' + city
//     + '&intent=' + 'checkin'
//     + '&radius=' + '50'
//     + '&query=' + query
//     + '&limit=' + '10'
//     + '&client_id=' + taco.foursquare_clientID
//     + '&client_secret=' + taco.foursquare_clientSecret
//     + '&v=' + now;
// console.log(queryURL);

// $.ajax({
//     url: queryURL,
//     method: "GET",
// }).then(function(response) {
//     console.log(response);

// });

// });

// // Google Map with Geolocation
// // -Declare vars and initialize function
// var map, infoWindow;
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: -34.397, lng: 150.644}, // Sydney
//         zoom: 12 // default zoom to local area <5mi
//     });
// infoWindow = new google.maps.InfoWindow;

// // -Geocode current position
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//         var pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//         };

//         infoWindow.setPosition(pos); // set position of infoWindow on geocode
//         infoWindow.setContent('Location found.');
//         infoWindow.open(map);
//         map.setCenter(pos); // center map
//     }, function() {
//         handleLocationError(true, infoWindow, map.getCenter());
//     });
//     } else {
//         // --If browser doesn't support Geolocation
//         handleLocationError(false, infoWindow, map.getCenter());
//     }
// }
// // -Error handling
// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(browserHasGeolocation ?
//                           'Error: The Geolocation service failed.' :
//                           'Error: Your browser doesn\'t support geolocation.');
//     infoWindow.open(map);
// }



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAWaxQsuC6CYjJfPa8mWtmEBzF7ItJszck",
    authDomain: "gimme-a-taco.firebaseapp.com",
    databaseURL: "https://gimme-a-taco.firebaseio.com",
    projectId: "gimme-a-taco",
    storageBucket: "gimme-a-taco.appspot.com",
    messagingSenderId: "547195454042"
  };
  firebase.initializeApp(config);

  var dataRef = firebase.database();

  //initial values 
  var locationInput = "";
  var distanceInput = 0;
  var priceInput = 0;

  //onclick event of submit button on page 1 and 2
  $("#hugeButton").on("click", function(event) {
    event.preventDefault(); 

    //grabbing user input
    locationInput = $("#location").val().trim();
    distanceInput = $("#distance").val().trim();
    priceInput = $("#price").val().trim();

    console.log(locationInput);
    console.log(distanceInput);
    console.log(priceInput);

    //taco location info for firebase
    var newTaco = {
      fireLocation: locationInput,
      fireDistance: distanceInput,
      firePrice: priceInput,
    };

    //push to firebase
    dataRef.ref().push(newTaco);

    //clears elements
    $("#location").val(""),
    $("#distance").val(""),
    $("#price").val("");

    //add AJAX call function

    //redirect to page 2
    $(location).attr('href', 'page2a.html');

  //end onclick
  });

  //onclick lucky button - random location - no user input 
  $("#smallButton").on("click", function(event) {
    event.preventDefault(); 

    //add AJAX call function

    //redirect to page 2 
    $(location).attr('href', 'page2a.html');

  //end onclick
  });

  //firebase watcher + initial loader
  dataRef.ref().on("child_added", function(childSnapshot) {

    var fireLocation = "string";
    var fireDistance = childSnapshot.val().distanceInput;
    var firePrice = childSnapshot.val().priceInput;

//     use page 1 form input as placeholder in page 2 form
    $("#location").attr("placeholder", fireLocation);
    $("#distance").attr("placeholder", fireDistance);
    $("#price").attr("placeholder", firePrice);


});

  
  //search results in nav bar 
  
  