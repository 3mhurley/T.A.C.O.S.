var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.yelp.com/v3/businesses/search?text=coffee&latitude=37.786882&longitude=-122.399972",
    "method": "GET",
    "headers": {
      "Authorization": "Bearer <4G-Nx0Twq2at_e2GY6Swc_JJAYupPol7xRHsr2H3vF6N1lseLBUkX-u8fPIPXYjog5KvpICCZubXfWIBiKzZyk2coilpWeVA3xrojcIjwrQdEJsqLQLfKL37_kZaXHYx>",
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });


  //initial values 
  var location = "";
  var distance = 0;
  var price = 0;

  //onclick event of submit button -- this event will be applied in page 1 and page 2
  $("submit").on("click", function() {
    event.preventDefault();

    //grabbing user input
    location = $("#location").val().trim();
    distance = $("#distance").val().trim();
    price = $("#price").val().trim();
    
    //add AJAX call

    //output of result - into results table 
    //need to specify results parameters as variables 
    $("#resultsTable").append 

  });

  //onclick event for lucky button
  $("lucky-submit").on("click", function() {
    event.preventDefault();

    //add AJAX call 

    //output of random result - into results table 
    //need to specify results parameters as variables 
    $("#resultsTable").append 

  });

    


  //page 2
  //search results in nav bar 
  //pre-populate with input 
  //search button 

  //back from request 
  //fill the map (replace the anchor or image)
  //store the response in the card
  //dynamically append with additional data 

  //on click card - dynamically create the nav bar 