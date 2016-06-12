console.log("js loaded");

var body = document.querySelector("body");
var ul = document.querySelector("ul");

var honeydew = document.querySelector(".honeydew");
var thistle = document.querySelector(".thistle");
var lightsalmon = document.querySelector(".lightsalmon");
var darkkhaki = document.querySelector(".darkkhaki");
var greenyellow = document.querySelector(".greenyellow");
var currentTheme = document.querySelector(".current-theme");




//EVENTS
ul.addEventListener("click",changeTheme);


//honeydew.addEventListener("click", changeTheme);
//thistle.addEventListener("click", changeTheme);
//lightsalmon.addEventListener("click", changeTheme);
//darkkhaki.addEventListener("click", changeTheme);
//greenyellow.addEventListener("click", changeTheme);


//FUNCTIONS
function bodyColorChanger () {
	body.className = "thistle";
}


function changeTheme(e) {
	console.log(e.target,e.type);

	//return early if li wasn't clicked 
	if (e.target.tagName != "LI"){
		return; 
	}

	body.className = e.target.className;
	currentTheme.textContent = e.target.className;
}




//UPDATE Current color theme



