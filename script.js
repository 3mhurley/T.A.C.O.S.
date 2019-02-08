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



  //form with three inputs -- location, distance range, price
  //three form fields
  //on submit button, store submissions in object  

  //lucky button - random array of cities 
  //on click - random selection 

  //page 2
  //search results in nav bar 
  //pre-populate with input 
  //search button 

  //ajax call  -

  //back from request 
  //fill the map (replace the anchor or image)
  //store the response in the card
  //dynamically append with additional data 

  //on click card - dynamically create the nav bar 