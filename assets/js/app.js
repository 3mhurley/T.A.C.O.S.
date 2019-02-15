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

    
  