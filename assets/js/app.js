// Object
var taco = {
    map: 'taco.com',
    foursquare_clientID: 'D0HCALZZRSU3MQSBUY0E1AS4PKXFOIPTIO5UP11JMKEN3YSJ',
    foursquare_clientSecret: 'PGOTQALEY5RLYXXTV0XRG3WOU3MFT52BXJLPUC232LONJ3FM',
    gcp_jma_key: 'AIzaSyAfQ3fFasbNNaSb6Y8SSK16iDsh4_rvvRU',
    pos: [],
}

// LOCATION LOCATION LOCATION
function getLocation(callback) {
  return new Promise(function(resolve, reject) {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
              function(position){
                  resolve("@" + position.coords.latitude + "," + position.coords.longitude)
              }
          );
      } else {
        reject("Unknown");
      }
  });
}



// // -Declare vars and initialize function
// var mapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAfQ3fFasbNNaSb6Y8SSK16iDsh4_rvvRU&callback=initMap"
// var map, infoWindow, pos;
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: -34.397, lng: 150.644}, // Sydney
//         zoom: 12 // default zoom to local area <5mi
//     });
// infoWindow = new google.maps.InfoWindow;

// // -Geocode current position
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//         pos = {
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
//         console.log("SAY YES!");
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

$(document).ready(function() {

// Aye, Jacks! 4 Square ahead! Yar
var city = 'Denver, CO'; //&near=Denver, CO
var address = '1701 WYNKOOP DENVER, CO 80202'; // Union
var now = '20190212'; //&v=YYYYMMDD
var location = '39.7,105.0'; //&ll=40.7,-74
var query = 'tacos';
var price = '1,2,3,4';
var queryURL = 'https://api.foursquare.com/v2/venues/explore?'
    // + 'll=' + location;
    + 'near=' + city
    + '&radius=' + '5000'
    // + '&section=' + 'Taco Place' // Taco Place
    + '&query=' + query
    + '&limit=' + '10'
    + '&openNow=' + '1'
    + '&sortByDistance=' + '1'
    + '&price=' + price
    + '&client_id=' + taco.foursquare_clientID
    + '&client_secret=' + taco.foursquare_clientSecret
    + '&v=' + now;
console.log(queryURL);

function getList(val) {
  var queryURL = val
  $.ajax({
      url: queryURL,
      method: "GET",
  }).then(function(rsp) {
      console.log(rsp.response);
      console.log(rsp.response.groups[0].items[0].venue.id);
      getDeets(rsp.response.groups[0].items[0].venue.id);
  });
}

function getDeets(val) {

  var venueID = val;
  var queryURL = 'https://api.foursquare.com/v2/venues/'
    + venueID + '?'
    + '&client_id=' + taco.foursquare_clientID
    + '&client_secret=' + taco.foursquare_clientSecret
    + '&v=' + now;
  $.ajax({
      url: queryURL,
      method: "GET",
  }).then(function(rsp) {
      console.log(rsp.response.venue);
      console.log(rsp.response.venue.name);
      console.log(rsp.response.venue.attributes.groups[0].summary);
      console.log(rsp.response.venue.contact.formattedPhone);
      console.log(rsp.response.venue.url);
      console.log(rsp.response.venue.rating);
      console.log(rsp.response.venue.description);
  });
}
});
//title anime  
var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });
//end of anime

//sidebar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

getList(queryURL);


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