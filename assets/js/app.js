<script src="https://www.gstatic.com/firebasejs/5.8.2/firebase.js"></script>

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