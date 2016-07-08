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
var friendButton = document.querySelector(".friend-button");
var foeButton = document.querySelector(".foe-button");
var pedestalList = document.querySelector(".pedestal-list");
var hatePitList = document.querySelector(".hate-pit-list");
var moreInfo = document.querySelector(".more-info");
var differentThing = document.querySelector(".different-thing");
var makeOwn = document.querySelector(".make-own");
var modal = document.getElementById('myModal');
var closeIt = document.getElementsByClassName("close")[0];
var thingToLoad;



//create glory/hatepit array 
var gloryPedestal = [];
var hatePit = [];



//event handlers 
proForm.addEventListener("submit",submitProForm);
conForm.addEventListener("submit",submitConForm);
friendButton.addEventListener("click",sendToGlory);
foeButton.addEventListener("click",sendToHatePit);
makeOwn.addEventListener("click",openModal);
closeIt.addEventListener("click",closeModal);
differentThing.addEventListener("click", loadThing)



window.addEventListener("load", pullFromGloryPedestal);
window.addEventListener("load", pullFromHatePit);
window.addEventListener("load",loadThing);



//load glory pedestal from local storage 
function pullFromGloryPedestal(){
	if (localStorage.getItem("gloryPedestal") == null) {
		localStorage.setItem("gloryPedestal", JSON.stringify(gloryPedestal));
		console.log("setting glory Pedestal");
	}
	gloryPedestal = JSON.parse(localStorage.getItem('gloryPedestal'));
	gloryPedestal.forEach(loadGloryPedestal);
}

function pullFromHatePit(){

	if (localStorage.getItem("hatePit") == null) {
		localStorage.setItem("hatePit", JSON.stringify(hatePit));
		console.log("setting hate pit");
	}  

	hatePit = JSON.parse(localStorage.getItem('hatePit'));
	hatePit.forEach(loadHatePit);
}


//opens modal for adding own thing 
function openModal(){
	modal.style.display = "block";
}

function closeModal(){
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//submits pro list items 
function submitProForm(e) {
	console.log("fn submitProForm");
	e.preventDefault();

	thingToLoad.pros.push(proInput.value);

	buildProList();
	proInput.value = "";
}

//submits con list items
function submitConForm(e) {
	console.log("fn submitConForm");
	e.preventDefault();

	thingToLoad.cons.push(conInput.value);

	buildConList();
	conInput.value = "";
}

//Load a new thing



function loadThing() {

	//decide what thing to load
	thingToLoad = json.thing[Math.floor(Math.random() * json.thing.length)];
	
	hatePit.forEach(checkIfInHatePit);

	function checkIfInHatePit(thing){

		if (thingToLoad.name == thing.name) {
			loadThing();
		}
	}

	gloryPedestal.forEach(checkIfInGloryPedestal);
	function checkIfInGloryPedestal(thing){

		if (thingToLoad.name == thing.name) {
			loadThing();
		}
	}



	var thing = thingToLoad;

	thingName.textContent= thing.name;
	thingDescription.textContent= thing.description;
	body.style.backgroundImage = thing.image_url;
	moreInfo.setAttribute("href", thing.more_info_url);

	proList.innerHTML = "";
	conList.innerHTML = "";

	thing.pros.forEach(loadPros);
	thing.cons.forEach(loadCons);
	proInput.value = "";
	conInput.value = "";

}

function loadSpecificThing(thing) {
	console.log("fn load loadSpecificThing");

	thingName.textContent = thing.name;
	thingDescription.textContent= thing.description;
	body.style.backgroundImage = thing.image_url;
	moreInfo.setAttribute("href", thing.more_info_url);

	proList.innerHTML = "";
	conList.innerHTML = "";

	thing.pros.forEach(loadPros);
	thing.cons.forEach(loadCons);

	proInput.value = "";
	conInput.value = "";
	
}


//Loads any pros stored in the array
function loadPros(proItem) {
	li = document.createElement("li");
	li.textContent = proItem;
	proList.appendChild(li);

}

//Loads any cons stored in the array
function loadCons(conItem){
	li = document.createElement("li");
	li.textContent = conItem;
	conList.appendChild(li);

}

function loadGloryPedestal(thing) {

	//create li
	li = document.createElement("li");
	li.textContent = thing.name;
	li.classList = thing.name;
	pedestalList.appendChild(li);

	//add dropdown
	dropdown = document.createElement("div");
	dropdown.classList.add("dropdown");
	li.appendChild(dropdown);


	//add vertical ellipsis 
	vEllipsis = document.createElement("i"); 
	vEllipsis.classList.add("fa");
	vEllipsis.classList.add("fa-ellipsis-v");
	vEllipsis.setAttribute("aria-hidden","true");
	dropdown.appendChild(vEllipsis);

	//add content menu
	dropdownContent = document.createElement("div");
	dropdownContent.classList.add("dropdown-content");
	dropdown.appendChild(dropdownContent);

	//add links 
	aLinkReload = document.createElement("a");
	aLinkReload.classList.add("reload");
	aLinkReload.textContent = "Restart";
	dropdownContent.appendChild(aLinkReload);


	aLinkRemove = document.createElement("a");
	aLinkRemove.classList.add("remove");
	aLinkRemove.textContent = "Remove";
	dropdownContent.appendChild(aLinkRemove);


	aLinkReload.addEventListener("click", restartThing);
	aLinkRemove.addEventListener("click", removeThing);
}

function loadHatePit(thing) {

	//create li
	li = document.createElement("li");
	li.textContent = thing.name;
	li.classList = thing.name;
	hatePitList.appendChild(li);

	//add dropdown
	dropdown = document.createElement("div");
	dropdown.classList.add("dropdown");
	li.appendChild(dropdown);


	//add vertical ellipsis 
	vEllipsis = document.createElement("i"); 
	vEllipsis.classList.add("fa");
	vEllipsis.classList.add("fa-ellipsis-v");
	vEllipsis.setAttribute("aria-hidden","true");
	dropdown.appendChild(vEllipsis);

	//add content menu
	dropdownContent = document.createElement("div");
	dropdownContent.classList.add("dropdown-content");
	dropdown.appendChild(dropdownContent);

	//add links 
	aLinkReload = document.createElement("a");
	aLinkReload.classList.add("reload");
	aLinkReload.textContent = "Restart";
	dropdownContent.appendChild(aLinkReload);


	aLinkRemove = document.createElement("a");
	aLinkRemove.classList.add("remove");
	aLinkRemove.textContent = "Remove";
	dropdownContent.appendChild(aLinkRemove);

	aLinkReload.addEventListener("click",restartThing);
	aLinkRemove.addEventListener("click", removeThing);
}

//Adds newly created pros to the list
function buildProList() {
	
	console.log("fn buildProList");

	//create li 
	li = document.createElement("li");
	li.textContent = proInput.value;

	proList.appendChild(li);
}

//Adds newly created cons to the list
function buildConList(){
	console.log("fn buildConList");
	//create li 
	li = document.createElement("li");
	li.textContent = conInput.value;

	conList.appendChild(li);
}

//Load glory items stored in glory array 

function sendToGlory(){
	console.log("fn send to glory");  
	thingToLoad.friend_status = true;

	gloryPedestal.push(thingToLoad);

	localStorage.setItem('gloryPedestal', JSON.stringify(gloryPedestal));

	proInput.value = "";
	conInput.value = "";
	proList.innerHTML = "";
	conList.innerHTML = "";
	//proList.textContent = "";
	//conList.textContent = "";

	buildGloryPedestal();
	loadThing();

}

function sendToHatePit() {
	console.log("fn send to hate pit");
	thingToLoad.foe_status = true;
	hatePit.push(thingToLoad);

	localStorage.setItem("hatePit", JSON.stringify(hatePit));

	proInput.value = "";
	conInput.value = "";
	proList.innerHTML = "";
	conList.innerHTML = "";
	//proList.textContent = "";
	//conList.textContent = "";

	buildHatePit();
	loadThing();

}

//build glory list 
function buildGloryPedestal() {
	console.log("fn buildGloryPedestal");

	//create li
	li = document.createElement("li");
	li.textContent = thingToLoad.name;
	li.classList = thingToLoad.name;
	pedestalList.appendChild(li);

	//add dropdown
	dropdown = document.createElement("div");
	dropdown.classList.add("dropdown");
	li.appendChild(dropdown);


	//add vertical ellipsis 
	vEllipsis = document.createElement("i"); 
	vEllipsis.classList.add("fa");
	vEllipsis.classList.add("fa-ellipsis-v");
	vEllipsis.setAttribute("aria-hidden","true");
	dropdown.appendChild(vEllipsis);

	//add content menu
	dropdownContent = document.createElement("div");
	dropdownContent.classList.add("dropdown-content");
	dropdown.appendChild(dropdownContent);

	//add links 
	aLinkReload = document.createElement("a");
	aLinkReload.classList.add("reload");
	aLinkReload.textContent = "Restart";
	dropdownContent.appendChild(aLinkReload);


	aLinkRemove = document.createElement("a");
	aLinkRemove.classList.add("remove");
	aLinkRemove.textContent = "Remove";
	dropdownContent.appendChild(aLinkRemove);

	aLinkReload.addEventListener("click",restartThing);
	aLinkRemove.addEventListener("click", removeThing);

	console.log(thingToLoad.friend_status);

}

function buildHatePit(){
	//create li
	li = document.createElement("li");
	li.textContent = thingToLoad.name;
	li.classList = thingToLoad.name;
	hatePitList.appendChild(li);

	//add dropdown
	dropdown = document.createElement("div");
	dropdown.classList.add("dropdown");
	li.appendChild(dropdown);

	//add vertical ellipsis 
	vEllipsis = document.createElement("i"); 
	vEllipsis.classList.add("fa");
	vEllipsis.classList.add("fa-ellipsis-v");
	vEllipsis.setAttribute("aria-hidden","true");
	dropdown.appendChild(vEllipsis);

	//add content menu
	dropdownContent = document.createElement("div");
	dropdownContent.classList.add("dropdown-content");
	dropdown.appendChild(dropdownContent);

	//add links 
	aLinkReload = document.createElement("a");
	aLinkReload.classList.add("reload");
	aLinkReload.textContent = "Restart";
	dropdownContent.appendChild(aLinkReload);


	aLinkRemove = document.createElement("a");
	aLinkRemove.classList.add("remove");
	aLinkRemove.textContent = "Remove";
	dropdownContent.appendChild(aLinkRemove);

	aLinkReload.addEventListener("click",restartThing);
	aLinkRemove.addEventListener("click", removeThing);
   
	console.log(thingToLoad.foe_status);
}


function restartThing(e){
	console.log("Coming soon");

}


function removeThing(e){
	console.log("fn removeThing");
	console.log("fn removeThing", e.target.parentNode.parentNode.parentNode.parentNode.classList.value);
	var target = e.target.parentNode.parentNode.parentNode.classList.value;
	var whichList = e.target.parentNode.parentNode.parentNode.parentNode.classList.value;

	if (whichList = "hate-pit-list") {

		hatePit.forEach(identifyThingToRemove);

		function identifyThingToRemove(thing){

			if (target == thing.name){
				console.log("yippie",thing);

				friend_status = false;
				foe_status = false;

				hatePit.pop(thing);
				localStorage.setItem("hatePit", JSON.stringify(hatePit));
				
				hatePitList.innerHTML = "";
				pullFromHatePit();
			}  

		}
	}

	if (whichList = "pedestal-list") {

		gloryPedestal.forEach(identifyFriendToRemove);

		function identifyFriendToRemove(thing){

			if (target == thing.name){
				console.log("fn identifyFriendToRemove");

				friend_status = false;
				foe_status = false;

				gloryPedestal.pop(thing);
				localStorage.setItem("gloryPedestal", JSON.stringify(gloryPedestal));
				
				pedestalList.innerHTML = "";
				pullFromGloryPedestal();
			}  

		}

	}




}


