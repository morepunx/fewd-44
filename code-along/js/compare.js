//Structure

var firstNumber = document.querySelector(".first-number");
var secondNumber  = document.querySelector(".second-number");
var sign = document.querySelector(".sign");
var compare  = document.querySelector(".compare");

//EVENTS 
compare.addEventListener('click',compareNumbers);


//EVENT HANDLERS
function compareNumbers() {
	sign.textContent = 'Friday';
}