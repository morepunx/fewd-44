console.log("js loaded");

var body = document.querySelector("body");
var ul = document.querySelector("ul");
var currentTheme = document.querySelector(".current-theme");




//EVENTS
ul.addEventListener("click",changeTheme);
window.addEventListener("load",reloadPage);
//on page load get the them from local storage 



//honeydew.addEventListener("click", changeTheme);
//thistle.addEventListener("click", changeTheme);
//lightsalmon.addEventListener("click", changeTheme);
//darkkhaki.addEventListener("click", changeTheme);
//greenyellow.addEventListener("click", changeTheme);


//FUNCTIONS
function reloadPage(e) {
	//get theme from local storage 
	var theme = localStorage.getItem("theme");	

	updatePage(theme);

} 

function changeTheme(e) {
	//return early if li wasn't clicked 
	if (e.target.tagName != "LI"){
		return; 
	}

	updatePage(e.target.className);

	//Save theme to local storage 
	localStorage.setItem("theme",e.target.className);

}
	//Get them from local storage 

function updatePage(theme) {
	console.log("fn updatePage", theme);

	body.className = theme;
	currentTheme.textContent = theme;
}

