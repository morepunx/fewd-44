//Notes from class
//1. Get data: -text input to X  -total 
//2. Total + x | total = total + x
//3. Update page | 1. total textContent
// | 2. add item to list, hit return, crete an li | .createElement() .appendChild()


	console.log("JS loaded");

// Structure
// ------------------------------------------------
	var item = document.querySelector(".item");
	var button = document.querySelector("button");
	var entries = document.querySelector(".entries");
	var total = document.querySelector(".total");
	var totalValue = 0; 

// Setup
// ------------------------------------------------
	

// Events
// ------------------------------------------------
	button.addEventListener("click", addItem);

// Event handler functions
	function addItem(e) {
		
		//Prevent default event to submit form
		e.preventDefault();

		//detect if input is Not a Number
		if (isNaN(item.value) == true) {
			console.log("running if for NaN");
			
			//clean up form
			item.value = "";
			return;
		}

		//detect if input is empty
		if (item.value == "") {
			console.log("running if for empty input");
			
			//clean up form
			item.value = "";
			return;
		}

		//run cash register 
		else {
			createItem(item.value);
			calculateTotal(item.value);

			//clean up form
			item.value = "";
		}

		
	}


	function calculateTotal(x) {

		x = parseFloat(x);	
		totalValue = totalValue + x; 
		createTotal(totalValue.toFixed(2));
	}


// Update page functions
// ------------------------------------------------
	function createItem(entry) {
		console.log("fn createItem");

		var li = document.createElement("li");
		li.textContent = parseFloat(entry).toFixed(2);
		entries.appendChild(li);


	}


	function createTotal(y) {
		total.textContent = y;
	}
	
// Utility functions
// ------------------------------------------------
