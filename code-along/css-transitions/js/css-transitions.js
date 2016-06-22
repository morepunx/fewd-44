console.log("js loaded")

var square = document.querySelector('.square');
var circle = document.querySelector('.circle');
var blogTab = document.querySelector('.blog-tab');
var blogContent = document.querySelector('.blog-content');
var wheel = document.querySelector('.wheel');
var cover = document.querySelector('.cover');


square.addEventListener('click',roundIt);
circle.addEventListener('click',ovalIt);
blogTab.addEventListener('click',showBlogTab);
wheel.addEventListener('click',spin);

function spin(){
	cover.classList.toggle('spin');

}

function roundIt() {
	console.log("fn roundIt");
	square.classList.add('green');
}


function ovalIt() {
	console.log("fn squareIt");
	circle.classList.toggle('oval');	
}

function showBlogTab() {
	blogContent.classList.toggle('close');
}