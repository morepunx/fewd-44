console.log("js loaded");

var body = document.querySelector("body");

var honeydew = document.querySelector(".honeydew");
var thistle = document.querySelector(".thistle");


function bodyColorChanger () {
	body.className = "thistle";
}


function bodyColorChangerParam(color) {
	body.className = color;
}