
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

    //clears elements
    $("#location").val(""),
    $("#distance").val(""),
    $("#price").val("");

    //taco location info for firebase
    var newTaco = {
      locationInput: locationInput,
      distanceInput: distanceInput,
      priceInput: priceInput,
    };

    //push to firebase
    dataRef.ref().push(newTaco);

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

    //no user input necessary 

    //add AJAX call

    //redirect to page 2
    //window.location.href = "/page2a.html";

  //end onclick
  });

  //firebase watcher + initial loader
  dataRef.ref().on("child_added", function(childSnapshot) {

    var fireLocation = childSnapshot.val().locationInput;
    var fireDistance = childSnapshot.val().distanceInput;
    var firePrice = childSnapshot.val().priceInput;

    //output of result - into results table 
    //need to specify results parameters as variables 
    $("#resultsTable").append("<tr><td>" + locationInput + "</td><td>" + distanceInput + "</td><td>" + priceInput + "</td></tr>");


  });

  

  //pre-populate page 1 user input into page 2 user input
  //NOT FUNCTIONAL 
  $(document).ready(function(autofill) {
    $("hugeButton").click(function() {
      $("#location").val().trim();
    });
  });

  //placeholder value -pre-populate with input 
  
    //output of random result - into results table 
    



  //page 2
  //search results in nav bar 
  