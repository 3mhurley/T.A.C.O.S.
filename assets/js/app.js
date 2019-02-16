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
//end of sidebar


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


  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
            $("form").append('<p id="guac">HOLY GUACAMOLE! Fill out the form to find a taco!</p>');
            
          } else {
            
          }
        }, false);
      });
    }, false);
  })();

  //onclick lucky button - random location - no user input 
  $("#smallButton").on("click", function(event) {
    event.preventDefault(); 

    //redirect to page 2 
    $(location).attr('href', 'page2a.html');

  //end onclick
  });
 
  //clears elements
  $("#hugeButton").on("click", function(event) {
    event.preventDefault(); 
      $("#validationCustom01").val(""),
      $("#validationCustom02").val(""),
      $("#validationCustom03").val("");
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

// EHHHHHHHHHHH

// Object
var taco = {
    map: 'taco.com',
    foursquare_clientID: 'D0HCALZZRSU3MQSBUY0E1AS4PKXFOIPTIO5UP11JMKEN3YSJ',
    foursquare_clientSecret: 'PGOTQALEY5RLYXXTV0XRG3WOU3MFT52BXJLPUC232LONJ3FM',
    gcp_jma_key: 'AIzaSyAfQ3fFasbNNaSb6Y8SSK16iDsh4_rvvRU',
    pos: [],
}

// Aye, Jacks! 4 Square ahead! Yar
var city = 'Denver, CO'; //&near=Denver, CO
var address = '1701 WYNKOOP DENVER, CO 80202'; // Union
var now = '20190212'; //&v=YYYYMMDD
var qLocation = '39.7,105.0'; //&ll=40.7,-74
var query = 'tacos';
var qPrice = '1,2,3,4';
var queryURL = 'https://api.foursquare.com/v2/venues/explore?'
    // + 'll=' + qLocation;
    + 'near=' + city
    + '&radius=' + '5000'
    // + '&section=' + 'Taco Place' // Taco Place
    + '&query=' + query
    + '&limit=' + '10'
    + '&openNow=' + '1'
    + '&sortByDistance=' + '1'
    + '&price=' + qPrice
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

// Map
