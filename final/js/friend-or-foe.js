//

//Setup

var thingName = document.querySelector('.thing-name');
var thingDescription = document.querySelector('.thing-description')
var body = document.querySelector("body");
var proForm = document.querySelector(".pro-form");
var proInput = document.querySelector(".pro-input");
var proList = document.querySelector(".pro-list");
var conForm = document.querySelector(".con-form");
var conInput = document.querySelector(".con-input");
var conList = document.querySelector(".con-list");

//decide what thing to load
var randomThing = json.thing[Math.floor(Math.random() * json.thing.length)];

//event handlers 
proForm.addEventListener("submit",submitProForm);
conForm.addEventListener("submit",submitConForm);
addEventListener("load",loadThing(randomThing));

function submitProForm(e) {
	console.log("fn submitProForm");
	e.preventDefault();

	json.thing[2].pros.push(proInput.value);

	buildProList();
	proInput.value = "";
}


function submitConForm(e) {
	console.log("fn submitConForm");
	e.preventDefault();

	//sun.cons.push(conInput.value);

	buildConList();
	conInput.value = "";
}

//update functions

function loadThing(thing) {
	thingName.textContent= thing.name;
	thingDescription.textContent= thing.description;
	body.style.backgroundImage = thing.image_url;

	thing.pros.forEach(buildProList);
	thing.cons.forEach(buildConList);
}


function buildProList() {
	
	console.log("fn buildProList");

	//create li 
	li = document.createElement("li");
	li.textContent = proInput.value;

	proList.appendChild(li);
}

function buildConList(){
	console.log("fn buildConList");
	//create li 
	li = document.createElement("li");
	li.textContent = conInput.value;

	conList.appendChild(li);
}


