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
   
   function writeUserData(name, email, city) {
    database.ref('users').push({
      username: name,
      email: email,
      city: city,
    });
   }
   
   $('#submit').on('click', function () {
    var username = $('#name').val();
    var email = $('#email').val();
    var city = $('#city').val();
    writeUserData(username, email, city);
    $('#name').val('');
    $('#email').val('');
    $('#city').val('');
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
   
   function show_alert()
   
   {
   
    var oArgs = {
   
              app_key:"g8Gs5ZhQz7pJNfkr",
   
              id: "20218701",
   
              page_size: 25 ,
   
   
   
    };
   
    EVDB.API.call("/events/get", oArgs, function(oData) {
   
        // Note: this relies on the custom toString() methods below
      console.log(oData);
      });
   
   }
   
   
   
   function show_alert2()
   
   {
   
     var oArgs = {
   
        app_key: "g8Gs5ZhQz7pJNfkr",
   
        q: "music",
   
        where: "Miami",
   
          // "date": "2013061000-2015062000",
   
        page_size: 5,
   
        sort_order: "popularity",
   
     };
   
     EVDB.API.call("/events/search", oArgs, function(oData) {
      console.log(oData);
   
        // Note: this relies on the custom toString() methods below
        var data = JSON.parse(oData);
   
        var imageLink = data.Last_item.events.event.image.url;
        $("img").attr('src', imageLink);
      });
   
   
   
   }