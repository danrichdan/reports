// Initialize Firebase
var config = {
    apiKey: "AIzaSyAGROH6-U67pLuqWwrXj1yeJrX3FvOYtaE",
    authDomain: "report-90bc2.firebaseapp.com",
    databaseURL: "https://report-90bc2.firebaseio.com",
    projectId: "report-90bc2",
    storageBucket: "report-90bc2.appspot.com",
    messagingSenderId: "592265876787"
};
firebase.initializeApp(config);

var fbRef = firebase.database();

//retrieve data from firebase
fbRef.ref('us-ac-report').on('value', function(snapshot){
    var data = snapshot.val();
    console.log(data[1].time);
    addValuesToDom(data);
});

//create dom elements
function addValuesToDom(data) {
    var $table = $('table');
    var $tableRow = $('<tr>');
    var $date = $('<td>', {
        class: 'date',
        text: data[1].date
    });
    $tableRow.append($date);
    $tableRow.appendTo($table);
};


// consider more functions... one for appending, the other for creating dom elements
// also consider an array of objects .. or an object of arrays