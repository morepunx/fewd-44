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
		//error validation - return early if blank

		
		//Prevent default event to submit form
		e.preventDefault();

		createItem(item.value);
		calculateTotal(item.value);

		//clean up form
		item.value = "";
		}


	function calculateTotal(x) {
		console.log("fn calculateTotal");
		x = parseFloat(x);
		console.log(x);	

		totalValue = totalValue + x; 
		createTotal(totalValue);
	}


// Update page functions
// ------------------------------------------------
	function createItem(entry) {
		console.log("fn createItem");

		var li = document.createElement("li");
		li.textContent = entry;
		entries.appendChild(li);

		
	}


	function createTotal(y) {
		total.textContent = totalValue;
	}
	
// Utility functions
// ------------------------------------------------
