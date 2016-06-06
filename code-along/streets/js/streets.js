console.log("JS LOADED");

//Structure
var input = document.querySelector("input");
var button = document.querySelector("button");
var directions = document.querySelector(".directions");

//setup 
var streets = [];

//Event listener
button.addEventListener("click", addStreet);


//Event handler functions
function addStreet(e) {

	console.log("add street function");
	console.log(e);
	//Prevent default event to submit form
	e.preventDefault();

	//error validation - return early if blank
	if (input.value == "") {
		return;
	}

	createStreet(input.value);

	//clean up form
	input.value = "";

	streets.push(input.value);
}

function createStreet(name) {
	var li = document.createElement("li");
	li.textContent = name;
	directions.appendChild(li);

}