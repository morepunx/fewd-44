console.log("js loaded");

var results = document.querySelector('.results');
var input = document.querySelector("input");
var form = document.querySelector("form")
var resultsSection = document.querySelector(".results-section");

//event listener
form.addEventListener("submit", submitForm);


function submitForm(e) {
	e.preventDefault();
	getRestaurants();

}

// Event handler 
function getRestaurants(e) {

	//building the api url string
	var search = "94102";
	var url = "https://api.locu.com/v1_0/venue/search/?api_key=3a05b7a5bd51ccdc6dd6f99d6ac7f82062f1ceaa&postal_code=" + input.value;


	//Two JSON techniques:
	//1. use AJAX with getJSON 
	//$.getJSON(url, updateRestaurants);

	//1. Use JSONP to get JSON data 
	//Create an ew script tage instead of ajax

	url = url + "&callback=updateRestaurants";
	var scriptTag = document.createElement("script");
	scriptTag.src = url; 
	document.body.appendChild(scriptTag);
}


//update page 
function updateRestaurants(json) {
	resultsSection.textContent = "";


	console.log("fn updateRestaurants");
	console.log(json);

	p = document.createElement("p");
	p.textContent = "Results for " + input.value;

	resultsSection.appendChild(p);

	input.value = "";
	//clear it out 
	results.textContent = "";


	json.objects.forEach(createRestaurant);


}




function createRestaurant(restaurant) {


	//Step 1: create markup
	var li = document.createElement("li");
	var h2 = document.createElement("h2");
	var p = document.createElement("p");
	var a = document.createElement("a");

	//step2: add content/attributes
	h2.textContent = restaurant.name;
	p.textContent = restaurant.street_address;
	a.textContent = restaurant.phone;
	a.setAttribute("href", "tel:" + restaurant.phone)

	//step3: append
	results.appendChild(li);
	li.appendChild(h2);
	li.appendChild(p);
	li.appendChild(a);
}


//updateRestaurants(json.objects);