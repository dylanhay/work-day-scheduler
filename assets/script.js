let dateDisplay = document.getElementById("currentDay");

let today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

dateDisplay.innerHTML = today;

const t1 = new Date().getHours();

console.log(t1);

let eventHour = document.getElementById("eight");
let eventHourQuant = eventHour.innerHTML

let eventHourQuantNum = Number(eventHourQuant);


console.log(eventHourQuant);
// console.log(eventHourQuantNum);


let t2=0;

function twelveHrConvert () {

    
    if (eventHourQuant < 7) {
        t2 = eventHourQuantNum + 12;
    }
    else if (eventHourQuantNum > 7) {
        t2 = eventHourQuantNum;
    }

}

twelveHrConvert();

console.log(t2);


function bgcolouring() {
    if (t2 > t1) {
        console.log('green');
    }
    else if (t2 < t1) {
        console.log('grey');
    }
    else {
        console.log ('red');
    }
}

bgcolouring();