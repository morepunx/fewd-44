console.log("JS loaded");

// Structure
// ------------------------------------------------
	var taskName = document.querySelector(".task-name");
	var date = document.querySelector(".date");
	var button = document.querySelector(".button");
	var entries = document.querySelector(".entries");
	var completedTasks = [];


// Events
// ------------------------------------------------
	button.addEventListener("click", addTask);


// Event handler functions
//-------------------------------------------------
	function addTask(e) {

		e.preventDefault();
		console.log("fn addTask")

		//Create Ul and add it to div 
		var  ul = document.createElement("ul");
		ul.className = "task-entry";
		entries.appendChild(ul);

		//create checkbox 
		var inputCheckbox = document.createElement("input");
		inputCheckbox.type = "checkbox";
		inputCheckbox.className = "task-checkbox";

		//Create checkbox, task name, and date LIs
		var checkboxLi = document.createElement("li");
		var taskNameLi = document.createElement("li");
		var dateLi	= document.createElement("li");

		

		//Update li contet 
		taskNameLi.textContent = taskName.value;
		dateLi.textContent = date.value;

		//update the page with li content
		ul.appendChild(checkboxLi);
		checkboxLi.appendChild(inputCheckbox);
	
		ul.appendChild(taskNameLi);
		ul.appendChild(dateLi);

		taskCheckbox = document.querySelector(".task-checkbox");
		taskCheckbox.addEventListener("click",completeTask);
	}

	function completeTask(e) {

		console.log("fn completeTask");
		taskCheckbox.addEventListener("click",completeTask);

		var isChecked = taskCheckbox.checked; 

		if (isChecked == true) {
			console.log(e.target.parentNode.parentNode);
			e.target.parentNode.parentNode.className = "completed-task-entry";
		}

		if (isChecked == false) {
			e.target.parentNode.parentNode.className = "task-entry";
		}

	}





