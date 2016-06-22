console.log("js loaded");

//setup
//-------------------------
var buttonStop = document.querySelector(".button-stop");
var buttonSlow = document.querySelector(".button-slow");
var buttonGo = document.querySelector(".button-go");
var redOff = document.querySelector(".red-off");
var yellowOff = document.querySelector(".yellow-off");
var greenOff = document.querySelector(".green-off");


buttonStop.addEventListener("click", setLight);
buttonSlow.addEventListener("click", setLight);
buttonGo.addEventListener("click", setLight);
window.addEventListener("load",run);

function setLight(e){
	console.log("fn setLight");
	console.log(e.target);

	if (e.target.className == "button-stop"){
		console.log("running buttonStop IF ");
		redOff.style.backgroundColor = "red";
		yellowOff.style.backgroundColor ="black";
		greenOff.style.backgroundColor ="black";
	}

	else if (e.target.className == "button-slow"){
		console.log("running buttonSlow IF ");
		setYellow();
	}

	else if (e.target.className == "button-go"){
		console.log("running button go IF ");
		redOff.style.backgroundColor ="black";
		yellowOff.style.backgroundColor = "black";
		greenOff.style.backgroundColor = "green";
	}

}

function run() {
	setGreen();
}

function setRed() {
		redOff.style.backgroundColor ="red";
		yellowOff.style.backgroundColor = "black";
		greenOff.style.backgroundColor ="black";
		window.setTimeout(setGreen,50);
}

function setYellow() {
		redOff.style.backgroundColor ="black";
		yellowOff.style.backgroundColor = "yellow";
		greenOff.style.backgroundColor ="black";
		window.setTimeout(setRed,50);		
}


function setGreen() {
		redOff.style.backgroundColor ="black";
		yellowOff.style.backgroundColor = "black";
		greenOff.style.backgroundColor ="green";
		window.setTimeout(setYellow,50);
}


function setBlack() {
		redOff.style.backgroundColor ="black";
		yellowOff.style.backgroundColor = "black";
		greenOff.style.backgroundColor ="black";
}


