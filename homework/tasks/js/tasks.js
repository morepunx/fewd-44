console.log("JS loaded");

// Structure
// ------------------------------------------------
	var taskName = document.querySelector(".task-name");
	var date = document.querySelector(".date");
	var button = document.querySelector(".button");
	var entries = document.querySelector(".entries");


// Events
// ------------------------------------------------
	button.addEventListener("click", submitTask);


// Event handler functions
//-------------------------------------------------
	function submitTask(e) {
		e.preventDefault();
		console.log("fn submitTask")

		if (taskName.value == ""){
			return;
		}


		createTask();
	}

	function createTask() {

		//Create Ul and add it to div 
		var  ul = document.createElement("ul");
		ul.className = "task-entry";
		

		//create checkbox 
		var inputCheckbox = document.createElement("input");
		inputCheckbox.type = "checkbox";
		inputCheckbox.className = "task-checkbox";

		//Create checkbox, task name, and date LIs
		var checkboxLi = document.createElement("li");
		var taskNameLi = document.createElement("li");
		var dateLi	= document.createElement("li");


		//Update li contet 
		taskNameLi.textContent = taskName.value ;
		dateLi.textContent = date.value;

		//update the page with li content
		entries.appendChild(ul);
		ul.appendChild(checkboxLi);
		checkboxLi.appendChild(inputCheckbox);
	
		ul.appendChild(taskNameLi);
		ul.appendChild(dateLi);

		var taskCheckbox = inputCheckbox;
		taskCheckbox.addEventListener("click", completeTask);


	}

	function completeTask(e) {

		console.log("fn completeTask");

		var checkbox = e.target;
		var li = checkbox.parentNode.parentNode;

		var isChecked = checkbox.checked; 

		if (isChecked == true) {
			console.log(li);
			li.className = "completed-task-entry";
		} else {
			li.className = "task-entry";
		}

	}






