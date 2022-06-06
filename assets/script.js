let dateDisplay = document.getElementById("currentDay");

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

dateDisplay.innerHTML = today;



var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

console.log(time);