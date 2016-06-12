console.log("JS loaded");

// Structure
// ------------------------------------------------
	var taskName = document.querySelector(".task-name");
	var date = document.querySelector(".date");
	var button = document.querySelector(".button");
	var entries = document.querySelector(".entries");


// Setup
// ------------------------------------------------





// Events
// ------------------------------------------------
	button.addEventListener("click", addTask);





// Event handler functions
//-------------------------------------------------
	function addTask(e) {

		e.preventDefault();
		console.log("fn addTask")

		var  ul = document.createElement("ul");
		ul.className = "task-entry";
		entries.appendChild(ul);

		var taskNameLi = document.createElement("li");
		var dateLi	= document.createElement("li");

		taskNameLi.textContent = taskName.value;
		dateLi.textContent = date.value;

		ul.appendChild(taskNameLi);
		ul.appendChild(dateLi);
	
	}