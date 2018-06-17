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

// redo the db... name it the report name and then the next node should be a number, then add the name value keys

