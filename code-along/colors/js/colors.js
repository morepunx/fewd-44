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

//Event handler functions 
//-------------------------
function bodyColorChanger () {
	body.className = "thistle";
}


function changeThemeHoneydew(event) {
	console.log(event.target,event.type);

	body.className = "honeydew";
	currentTheme.textContent= "honeydew";
}


function changeThemeThistle(event) {
	console.log(event.target,event.type);
	body.className = "thistle";
	currentTheme.textContent= "thistle";
}


function changeThemeLightsalmon(event) {
	console.log(event.target,event.type);
	body.className = "lightsalmon";
	currentTheme.textContent= "lightsalmon";
}


function changeThemeDarkkhaki(event) {
	console.log(event.target,event.type);
	body.className = "darkkhaki";
	currentTheme.textContent= "darkkhaki";
}


function changeThemeGreenyellow(event) {
	console.log(event.target,event.type);
	body.className = "greenyellow";
	currentTheme.textContent= "greenyellow";
}

//UPDATE Current color theme



