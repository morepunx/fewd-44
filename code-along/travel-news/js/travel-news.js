function createItem (){

	var parent = document.querySelector(".sponsored-articles");

//Step 1: Create
	var child = document.createElement("li");

//Step 2: bedazzle (Add content  and Attributes)
	child.textContent = "Trump wins 37 states! New USA PRESIDENT!"
	"Trump wins 37 states! New USA PRESIDENT!";
	child.classList.add("new");
	child.setAttribute("src","img/logo.jpg")

//Step 3: Add to DOM tree
	parent.appendChild(child);
}