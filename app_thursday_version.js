var config = {
    apiKey: "AIzaSyChA31BgFDmYsShvrd92YyRrbfdJPIthn8",
    authDomain: "todorist-42bb8.firebaseapp.com",
    databaseURL: "https://todorist-42bb8.firebaseio.com",
    projectId: "todorist-42bb8",
    storageBucket: "todorist-42bb8.appspot.com",
    messagingSenderId: "321494065018"
};
firebase.initializeApp(config);

var database = firebase.database();

function writeUserData(name, email, city) {
    database.ref('guests').push({
        username: name,
        email: email,
        city: city,
    });
}

$("#submit").on('click', function () {
    var username = $("#name").val().trim();
    var email = $("#email").val().trim();
    var city = $("#city").val().trim();
    writeUserData(username, email, city)
    $("#name").val('');
    $("#email").val('');
    $("#city").val('');

});



