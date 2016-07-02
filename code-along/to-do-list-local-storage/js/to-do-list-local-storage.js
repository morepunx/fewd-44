
// Structure
// ------------------------------------------------
var input = document.querySelector(".task-item");
var taskButton = document.querySelector("button");
var itemsList = document.querySelector(".items");
var date = document.querySelector(".date");

//setup
var todoList = {
	tasks: []
}


// Events
// ------------------------------------------------
taskButton.addEventListener("click", submitForm);
window.addEventListener("load",reloadPage);




// Event Handlers
// ------------------------------------------------
//rebuild to do list from local storage when page is reloaded
function reloadPage(e){

	//get the save data from local storage, convert to JSON
	//Save back into JSON object 
	todoList = JSON.parse(localStorage.getItem('todoList'));
	createTodoList();
}


//event handler for when user clicks add button
function submitForm(e){

	var task = {
		name: input.value,
		date: date.value,
		complete: false
	};

	todoList.tasks.push(task);

	//save to local storage
	localStorage.setItem("todoList", JSON.stringify(todoList));

	createTodoList();

}

//create entire to do list from JSON data
function createTodoList(){

	//clears out the list 
	itemsList.innerHTML ="";

	//adds new task for each item in the array
	todoList.tasks.forEach(createTask);
}



//create one li on the page from a task object
function createTask(task,e) {

	console.log(task);

	//create markup
	var addLi = document.createElement("li");
	var checkbox = document.createElement("input");
	var labelTask = document.createElement("label");
	var labelDate = document.createElement("label");
	
	//add attributes and content
	checkbox.setAttribute("type", "checkbox");

	if (task.complete == true) {
		console.log("running if statement");
		checkbox.checked = true;
	}

	labelTask.textContent = task.name;
	labelDate.textContent = "(" + task.date + ")";
	labelDate.classList.add("gray");

	//append it to the DOM tree 
	itemsList.appendChild(addLi);
	addLi.appendChild(checkbox);
	addLi.appendChild(labelTask);
	addLi.appendChild(labelDate);


}


