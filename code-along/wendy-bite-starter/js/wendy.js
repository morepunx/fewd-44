console.log("jsloaded");


var image = document.querySelector("img");

TweenMax.staggerFrom("*", 2, {y:100, scaleY: 0, alpha: 0, cycle:{rotation:[10,10,50,50,100,100]}, ease:Bounce.easeOut}, 0.05);