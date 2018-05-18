// Initialize Firebase
var config = {
    // apiKey: "AIzaSyAGROH6-U67pLuqWwrXj1yeJrX3FvOYtaE",
    // authDomain: "report-90bc2.firebaseapp.com",
    // databaseURL: "https://report-90bc2.firebaseio.com",
    // projectId: "report-90bc2",
    // storageBucket: "report-90bc2.appspot.com",
    // messagingSenderId: "592265876787"
};
firebase.initializeApp(config);

var fbRef = firebase.database();

fbRef.ref('report-1').on('value', function(snapshot){
    console.log(snapshot.val());
});

// redo the db... name it the report name and then the next node should be a number, then add the name value keys
