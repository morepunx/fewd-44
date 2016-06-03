//Notes from class
//1. Get data: -text input to X  -total 
//2. Total + x | total = total + x
//3. Update page | 1. total textContent
// | 2. add item to list, hit return, crete an li | .createElement() .appendChild()


	console.log("JS loaded");

// Structure
// ------------------------------------------------
	var item = document.querySelector(".item");

// Setup
// ------------------------------------------------
	

// Events
// ------------------------------------------------
	item.addEventListener("keyup", detectEnter);

// Event handler functions
// -----addEventListener-------------------------------------------

	function detectEnter (e) {
		console.log("running detectEnter");
		    if (e.keyCode == 13) {
        console.log("Detecting enter");
    	}
	}

// Update page functions
// ------------------------------------------------

	
// Utility functions
// ------------------------------------------------
