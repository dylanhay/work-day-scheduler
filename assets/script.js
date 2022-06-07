let dateDisplay = document.getElementById("currentDay");

let today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

dateDisplay.innerHTML = today;

const t1 = new Date().getHours();

console.log(t1);


