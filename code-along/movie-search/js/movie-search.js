// structure 
var results = document.querySelector(".results");
var input = document.querySelector("input");
var form = document.querySelector("form")


//event listener
form.addEventListener("submit", submitForm);

// Event handler 
function submitForm(e) {
	e.preventDefault();
	getMovies();
}


function getMovies(e) {

	//building the api url string
	
	var url = "http://www.omdbapi.com/?s=" + input.value;


	//Two JSON techniques:
	//1. use AJAX with getJSON 
	$.getJSON(url, updateMovies);
}

function updateMovies(json) {
		console.log("up")
		console.log(json);

		//clear it out 
		results.textContent = "";
		json.Search.forEach(createMovie);

}

function createMovie(movie) {
	//Step 1: create markup
	var li = document.createElement("li");
	var h2 = document.createElement("h2");
	var p = document.createElement("p");



	//step2: add content/attributes
	h2.textContent = movie.Title;
	p.textContent = movie.Year;

	

	//step3: append
	results.appendChild(li);
	li.appendChild(h2);
	li.appendChild(p);
	li.appendChild(p);

}