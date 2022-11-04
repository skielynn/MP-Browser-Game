var canvas;
var ctx;

var gameLoop;
var player;

window.onload = function() {
canvas = document.getElementById("gamescreen")
ctx = canvas.getContext("2d");


player = new Player(100, 400);

gameLoop = setInterval(step, 1000/40);

}

function step() {
    console.log("step");
}