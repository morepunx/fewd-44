// 
console.log("JS Loaded")

//Structure 
var farenheitValue = document.querySelector(".farenheit-value");
var convertFarenheit = document.querySelector(".convert-farenheit");
var celsiusValue = document.querySelector(".celsius-value");
var convertCelsius = document.querySelector(".convert-celsius");
var roundValues = document.querySelector(".round-values");



//Events 
convertFarenheit.addEventListener("click", farenheitToCelsius);
convertCelsius.addEventListener("click", celsiusToFarenheit);
roundValues.addEventListener("click", roundAllNumbers);

//Event handeler 
function farenheitToCelsius() {
	console.log("running farenheitToCelsius");
	
	//get farenheit value and store it 
	var x = parseInt(farenheitValue.value);
 	console.log("x is: ", x);

 	//do conversion 
 	z = ((x - 32)*5)/9;

 	//update the page 
 	celsiusValue.value = z;
}



function celsiusToFarenheit() {
console.log("Running Celsius to farenheit function");

	//get Celsius value and store it 
	var cx = parseInt(celsiusValue.value);
 	console.log("cx is: ", cx);

 	//do conversion 
 	cz = ((cx*9)/5)+32;

 	//update the page 
 	farenheitValue.value = cz;
}


function roundAllNumbers() {
	
	var isChecked = roundValues.checked;

	// find out of checkbox is checked
	if (isChecked == true) {

	//round all values
		roundedFarenheit = Math.round(farenheitValue.value);
		roundedCelsius = Math.round(celsiusValue.value);
	//update values 
		farenheitValue.value = roundedFarenheit;
		celsiusValue.value = roundedCelsius;

	}
}














