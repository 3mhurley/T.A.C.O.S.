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
  var promise = new Promise(function(resolve, reject) {
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

  return promise;
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

getList(queryURL);

}); // Close document.ready


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

    //clears elements
    $("#location").val(""),
    $("#distance").val(""),
    $("#price").val("");

    //add AJAX call

    //redirect to page 2
    //window.location.href = "page2a.html"; 
    //$(location).attr('href', 'page2a.html');
    window.location.assign("page2a.html");
  

  //end onclick
  });

  //onclick lucky button - random location
  $("#smallButton").on("click", function(event) {
    event.preventDefault(); 

    //add AJAX call

    //redirect to page 2
    //window.location.href = "/page2a.html";

  //end onclick
  });


  //output of result - into results table 
  //need to specify results parameters as variables 
    $("#resultsTable").append("<tr><td>" + locationInput + "</td><td>" + distanceInput + "</td><td>" + priceInput + "</td></tr>");

  //pre-populate page 1 user input into page 2 user input
  //NOT FUNCTIONAL 
  $(document).ready(function(autofill) {
    $("hugeButton").click(function() {
      $("#location").val().trim();
    });
  });

  //placeholder value 
  
    //output of random result - into results table 
    //need to specify results parameters as variables 
    //$("#resultsTable").append("<tr><td>" + location + "</td><td>" + distance + "</td><td>" + price + "</td></tr>");



  //page 2
  //search results in nav bar 
  //pre-populate with input 
  //search button 

  //back from request 
  //fill the map (replace the anchor or image)
  //store the response in the card
  //dynamically append with additional data 

  //on click card - dynamically create the nav bar 
