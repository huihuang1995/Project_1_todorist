var config = {
  apiKey: "AIzaSyB_dPIX-YH1RY19eOxbvzaTS5jUe7Osohg",
  authDomain: "fir-test-8a1b6.firebaseapp.com",
  databaseURL: "https://fir-test-8a1b6.firebaseio.com",
  projectId: "fir-test-8a1b6",
  storageBucket: "fir-test-8a1b6.appspot.com",
  messagingSenderId: "1061566650910"
};
firebase.initializeApp(config);
var database = firebase.database();
var results;
$(document).ready(function () {
  $("#main").css("display", "none");
  $("#start").css("height", "100%");

  $(".signIn").on('click', function () {
    $('.fold').toggleClass("active")
  });
  

});

function writeUserData(name, email, city) {
  database.ref('users').push({
    username: name,
    email: email,
    city: city,
  });
}



$('#submit').on('click', function (e) {
  e.preventDefault();
  var username = $('#name').val();
  var email = $('#email').val();
  var city = $('#city').val();
  

  if (username === " " || email === " " || city === "") {
    return false;
  } else {
    $("#main").show("slow");
    $("#start").hide('fast');
    writeUserData(username, email, city);
    $('#name').val('');
    $('#email').val('');
    $('#city').val('');

    $.ajax({
      url: "https://api.eventful.com/json/events/search?app_key=g8Gs5ZhQz7pJNfkr&location=Miami&within=10&sort_order=popularity",
      dataType: 'jsonp',
      success: function (results) {
        console.log(results);
        // results = results;
    

      //  results = results;


        var img1 = $("<img>");
        var img2 = $("<img>");
        var img3 = $("<img>");
        var img4 = $("<img>");

        $("#image1").append(img1.attr('src', "https:" + results.events.event[0].image.medium.url));
        $("#image2").append(img2.attr('src', "https:" + results.events.event[1].image.medium.url));
        $("#image3").append(img3.attr('src', "https:" + results.events.event[2].image.medium.url));
        $("#image4").append(img4.attr('src', "https:" + results.events.event[3].image.medium.url));


        
        // $("#image1").append(img.attr('src', "https:" + results.events.event[0].image.medium.url));
        // $("#image2").append(img.attr('src', "https:" + results.events.event[1].image.medium.url));
        // $("#image3").append(img.attr('src', "https:" + results.events.event[2].image.medium.url));
        

        console.log(results.events.event[0].image.medium.url);
        console.log(results.events.event[1].image.medium.url);
        console.log(results.events.event[2].image.medium.url);
        console.log(results.events.event[3].image.medium.url);


        $("#detail1").append(results.events.event[0].title);
        $("#detail2").append(results.events.event[1].title);
        $("#detail3").append(results.events.event[2].title);
        $("#detail4").append(results.events.event[3].title);
      }
    });
  }
});
  


// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 25.761681, lng: -80.191788 },
    zoom: 10

  });
  console.log(google.maps.Map);
  infoWindow = new google.maps.InfoWindow;
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log(pos);
      infoWindow.setPosition(pos);
      infoWindow.setContent('Your Location.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}
// function show_alert()
// {
//   var oArgs = {
//             app_key:"g8Gs5ZhQz7pJNfkr",
//             id: "20218701",
//             page_size: 25 ,


//   };
//   EVDB.API.call("/events/get", oArgs, function(oData) {
// Note: this relies on the custom toString() methods below
// console.log(oData);
//     });
// }
// function show_alert2()
// {
//    var oArgs = {
//       app_key: "g8Gs5ZhQz7pJNfkr",
//       q: "events",
//       where:  "Miami" , 
// "date": "2013061000-2015062000",
//     page_size: 5,
//     sort_order: "popularity",


//  };
//  EVDB.API.call("/events/search", oArgs, function(oData) {


// console.log(oData);
// Note: this relies on the custom toString() methods below
// var data = Object.keys(oData);
// console.log(data);

//     console.log(oData);
//     var Obj = oData.parse ;
//     console.log(Obj);
//     for ( i=0 ; i < 5 ; i ++ ){ 
//       console.log(Obj.events.event[i])
//     }
//   });
// }
// data = JSON.parse(this);
// console.log(data);
// news = data.events.event.val();
// console.log(news)
endpoint = 'live'
access_key = 'cda6704133c6271830fb68ca06c8c76b';
// get the most recent exchange rates via the "live" endpoint:
$.ajax({
  url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key,
  dataType: 'jsonp',
  success: function (json) {
    console.log(json);
    // exchange rata data is stored in json.quotes
    console.log(json.quotes.USDGBP);
    console.log(json.quotes.USDEUR);
    $("#euro").append("1 USD =" + json.quotes.USDEUR + "Euro");
    $("#gbp").append("1 USD =" + json.quotes.USDGBP + "GBP");
    $("#jpn").append("1 USD =" + json.quotes.USDJPY + "JPY");



    // source currency is stored in json.source
    // alert(json.source);

    // timestamp can be accessed in json.timestamp
    // alert(json.timestamp);


  }
});
// $.ajax({
//   url: "https://api.weatherunlocked.com/api/current/51.5,-0.1?app_id=39e1bf89&app_key=55602d3b044aa4c4ad6859b59a5dd680",
//   type: "GET",
//   success: function (parsedResponse, statusText, jqXhr) {
//     console.log(parsedResponse);
//   },
//   error: function (error) {
//     console.log(error);
//   }
// });