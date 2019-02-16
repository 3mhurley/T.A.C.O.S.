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
function openNav(i) {
  document.getElementById("mySidenav").style.width = "250px";
  //document.getElementById("main").style.marginLeft = "250px";

  $("#sbName").text(taco.venues[i][0]);
  $("#sbRP").text(taco.venues[i][1] + " / " + taco.venues[i][4] + " Stars!");
  $("#sbURL").text(taco.venues[i][3]);
  $("#sbPh").text("Phone: " + taco.venues[i][2]);
  $("#sbDesc").text("Who we are: " + taco.venues[i][5]);
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  //document.getElementById("main").style.marginLeft= "0";
}
//end of sidebar

  //initial values 
  var locationInput = "";
  var distanceInput = 0;
  var priceInput = "";

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
            $('#taco-form')[0].reset();
            $("form").append('<p id="guac">HOLY GUACAMOLE! Fill out the form to find a taco!</p>');
          } else {
            // Store values
          locationInput = $('#location').val().trim();
          distanceInput = $('#distance').val().trim();
          priceInput = $('#price').val().trim();

          sessionStorage.clear();
          sessionStorage.setItem('location', location);
          sessionStorage.setItem('distance', distance);
          sessionStorage.setItem('price', price);
          }
        }, false);
      });
    }, false);
  })();

  //onclick lucky button - random location - no user input 
  $("#smallButton").on("click", function(event) {
    event.preventDefault(); 
    $(location).attr('href', 'page2a.html');
  });
 
  
  //EHHHHHHHHHHH

  // Object
  var taco = {
      map: 'taco.com',
      foursquare_clientID: 'D0HCALZZRSU3MQSBUY0E1AS4PKXFOIPTIO5UP11JMKEN3YSJ',
      foursquare_clientSecret: 'PGOTQALEY5RLYXXTV0XRG3WOU3MFT52BXJLPUC232LONJ3FM',
      gcp_jma_key: 'AIzaSyAfQ3fFasbNNaSb6Y8SSK16iDsh4_rvvRU',
      geolocated: false,
      pos: [39.74,-104.99],
      posFmt: {},
      venues: [
        ["TacoHut","$$$$","(303)-438-8226","https://www.taco.com/","2.0","TACOOOOOOS","39.7365,-104.9896"],
        ["EnTACOlly The Best Option","$","(303)-438-8226","https://www.taco.com/","5.0","TACOOOOOOS","39.7392,-104.9903"],
        ["Hey Tony, Owa Bouta Taco","$$","(303)-438-8226","https://www.taco.com/","4.0","TACOOOOOOS","39.7365,-104.9924"],
        ["Mmmm","$$$$","(303)-438-8226","https://www.taco.com/","3.0","TACOOOOOOS","39.7379,-104.9949"],
        ["T is food for tacos","$$$","(303)-438-8226","https://www.taco.com/","5.0","TACOOOOOOS","39.7397,-104.9879"],
      ],
  }
  var map, infoWindow, marker, pos;
  var markersArray = [];
  var now = '20190215';
  
  // Get Location
  function getLoc() {
    if (!taco.geolocated) {
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          taco.pos = [pos.lat,pos.lng];
          taco.posFmt = pos;
  
          var val = pos;
          getList(pos);
          return val;
  
        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
    }
  }
  
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    // infoWindow.setPosition(pos);
    // infoWindow.setContent(browserHasGeolocation ?
    //                       'Error: The Geolocation service failed.' :
    //                       'Error: Your browser doesn\'t support geolocation.');
    // infoWindow.open(map);
    pos = {
      lat: taco.pos[0],
      lng: taco.pos[1],
    };
  }
  
  // Get Foursquare -- Aye, Jacks! 4 Square ahead! Yar
  function getList(val) {

    // Var it up!
    var city = 'Denver, CO'; //&near=Denver, CO
    // var now = '20190215'; //&v=YYYYMMDD
    var qLocation = val["lat"] + "," + val["lng"]; //&ll=39.7392,104.9903
    var query = 'tacos';
    var qPrice = '1,2,3,4';
    var distance = '10000';
  
    if (sessionStorage.getItem('location') != null) {
      // Output all of the new information into the relevant HTML sections
      city = sessionStorage.getItem('location');
      distance = sessionStorage.getItem('distance');
      price = sessionStorage.getItem('price');
    }
  
    var queryURL = 'https://api.foursquare.com/v2/venues/explore?'
      //+ 'll=' + qLocation
      + 'near=' + city
      + '&radius=' + distance
      // + '&section=' + 'Taco Place' // Taco Place
      + '&query=' + query
      + '&limit=' + '5'
      + '&openNow=' + '1'
      + '&sortByDistance=' + '1'
      + '&price=' + qPrice
      + '&client_id=' + taco.foursquare_clientID
      + '&client_secret=' + taco.foursquare_clientSecret
      + '&v=' + now;
  
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function(rsp) {
      //console.log(rsp.response);
      var venueList = rsp.response.groups[0].items;
      //console.log(venueList);
      venueList.forEach((ele,i) => {
        getDeets(ele.venue.id,i);
        cardIt(ele.venue.id,i,now);
      });
    }).then(function(){
      updMap();
    });
  }
  
  function getDeets(val,i) {
  
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
        //console.log(rsp.response.venue);
        var venueDeets = rsp.response.venue;
        taco.venues[i].push(venueDeets.name);
        taco.venues[i].push(venueDeets.attributes.groups[0].summary);
        taco.venues[i].push(venueDeets.contact.formattedPhone);
        taco.venues[i].push(venueDeets.url);
        taco.venues[i].push(venueDeets.rating);
        taco.venues[i].push(venueDeets.description);
    });
  
  }
  
  function cardIt(val,i) {
    // console.log("card");
    var rCard =  '<tr>' +
                      '<td>' +
                        '<div class="card">' + 
                          '<div class="row">' +
                            '<div class="col-md-4">' +
                              '<img src="assets/images/taco.jpg"class="w-100">' +
                            '</div>' +
                            '<div class="col-md-8 px-3">' +
                              '<div class="card-block px-3">' +
                                '<h4 class="card-title">' +
                                  'Name: ' + taco.venues[i][0] +
                                '</h4>' +
                                '<p class="card-text">' +
                                  'Rating: ' + taco.venues[i][4] + ' Stars' +
                                '</p>' +
                                '<p class="card-text">' +
                                  'Price Level: ' + taco.venues[i][1] +
                                '</p>' +
                                '<span style="font-size:30px;cursor:pointer" venNum="' + i + '"onclick="openNav(' + i + ')">&#9776; TACOS</span>' +
                              '</div>' +
                            '</div>' +
                          '</div>' +
                        '</div>' +
                      '</td>' +
                    '</tr>';
    $("tbody").append(rCard);
  
  }
  
  // Get Map
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 39.7392, lng: -104.9903}, // Denver
      zoom: 14,
    });
    infoWindow = new google.maps.InfoWindow;
    // infoWindow.setPosition(pos);
    // infoWindow.setContent('Location found.');
    // infoWindow.open(map);
    getLoc();
  }
  
  function updMap() {
    console.log("mpupdate");
    console.log(taco.venues);
    map.setCenter(taco.posFmt);
    marker = new google.maps.Marker({
      position: taco.posFmt,
      map: map,
      icon: {                             
        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
      }
    });
    console.log(taco.venues[0][6]);
    // var cord = taco.venues[0][6].split(',');
    // var coord = {lat: cord[0], lng: cord[1]};
    // console.log(coord);
  
    taco.venues.forEach((ele,i) => {
      var cord = ele[6].split(',');
      var coord = {lat: parseFloat(cord[0]), lng: parseFloat(cord[1])};
      console.log(coord);
      addMarker(coord,"red");
    });
  }
  
  function addMarker(latLng, color) {
    let url = "http://maps.google.com/mapfiles/ms/icons/";
    url += color + "-dot.png";
    
    let marker = new google.maps.Marker({
      map: map,
      position: latLng,
      icon: {
        url: url,
        //scaledSize: new google.maps.Size(38, 38)
      }
    });
    //store the marker object drawn in global array
    markersArray.push(marker);
  }
