console.log("js loaded");

var body = document.querySelector("body");

var honeydew = document.querySelector(".honeydew");
var thistle = document.querySelector(".thistle");
var lightsalmon = document.querySelector(".lightsalmon");
var darkkhaki = document.querySelector(".darkkhaki");
var greenyellow = document.querySelector(".greenyellow");
var currentTheme = document.querySelector(".current-theme");




//EVENTS
honeydew.addEventListener("click", changeThemeHoneydew);
thistle.addEventListener("click", changeThemeThistle);
lightsalmon.addEventListener("click", changeThemeLightsalmon);
darkkhaki.addEventListener("click", changeThemeDarkkhaki);
greenyellow.addEventListener("click", changeThemeGreenyellow);


//FUNCTIONS
function bodyColorChanger () {
	body.className = "thistle";
}


function changeThemeHoneydew() {
	console.log("change theme running");
	body.className = "honeydew";
	currentTheme.textContent= "honeydew";
}


function changeThemeThistle() {
	console.log("change theme running");
	body.className = "thistle";
	currentTheme.textContent= "thistle";
}


function changeThemeLightsalmon() {
	console.log("change theme running");
	body.className = "lightsalmon";
	currentTheme.textContent= "lightsalmon";
}


function changeThemeDarkkhaki() {
	console.log("change theme running");
	body.className = "darkkhaki";
	currentTheme.textContent= "darkkhaki";
}


function changeThemeGreenyellow() {
	console.log("change theme running");
	body.className = "greenyellow";
	currentTheme.textContent= "greenyellow";
}

//UPDATE Current color theme



