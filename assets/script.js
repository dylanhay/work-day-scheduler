// display currrent date on webpage

let dateDisplay = document.getElementById("currentDay");

let today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

dateDisplay.innerHTML = today;


// define current hour as t1 var
var t1 = new Date().getHours();

// generate array of time stamp blocks from HTML
var array = $('.time-stamp').toArray();


// loop to determine and assign background colour for custom event divs

for (var i = 0; i < array.length; i++) {
    
var eventHourStr = array[i].innerHTML;
var eventHourNum = Number(eventHourStr);

var tb = 0;

twelveHrConverter();


// generate array of custom event div blocks from HTML
var colourman = $('.custom-event').toArray();


// background colour display function
function backColouring() {
    
    if (tb > t1) {
        colourman[i].style.backgroundColor = "#77dd77";
    }
    else if (tb < t1) {
        colourman[i].style.backgroundColor = "#d3d3d3";
    }
    else {
        colourman[i].style.backgroundColor = "#ff6961";
    }

}

backColouring();

}


// 12 hour converter function
function twelveHrConverter () {

    
    if (eventHourNum < 7) {
        tb = eventHourNum + 12;
    }
    else if (eventHourNum > 7) {
        tb = eventHourNum;
    }

}






