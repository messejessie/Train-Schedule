//Fire base 
var config = {
    apiKey: "AIzaSyAmCTuledvIkabYehpYQkBXgWrh_FH8oYU",
    authDomain: "train-schedule-6b2c5.firebaseapp.com",
    databaseURL: "https://train-schedule-6b2c5.firebaseio.com",
    projectId: "train-schedule-6b2c5",
    storageBucket: "train-schedule-6b2c5.appspot.com",
    messagingSenderId: "663362220920"
};
firebase.initializeApp(config);


var database = firebase.database();

// adding Trains 
$('#add-train-btn').on("click", function (event) {
    event.preventDefault();

    //User Input
    var trainName = $('#train-name-input').val().trim();
    var destination = $('#destination-input').val().trim();
    var firstTime = $('#start-input').val().trim()
    var tFrequency = $('#frequency-input').val().trim()

//New trains to the data base : 
var newTrain = {
    trainName: trainName,
    destination: destination,
    firstTime: firstTime,
    tFrequency: tFrequency
  };
  // uploads to data base
  database.ref().push(newTrain);

  console.log(newTrain.trainName);
  console.log(newTrain.destination);
  console.log(newTrain.firstTime);
  console.log(newTrain.tFrequency);

    // First Time 
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


});