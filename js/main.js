// Initialize Firebase
var config = {

    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""

};
firebase.initializeApp(config);

var fbRef = firebase.database();

fbRef.ref('report-1').on('value', function(snapshot){
    console.log(snapshot.val());
});

// redo the db... name it the report name and then the next node should be a number, then add the name value keys
