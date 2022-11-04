var canvas;
var ctx;

var upKey;
var rightKey;
var downKey;
var leftKey;

var gameLoop;
var player;

function Player(x, y) {
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    this.yspeed = 0;
    this.active = true;
    this.friction = 0.6;
    this.maxSpeed = 10;
    this.width = 50;
    this.height = 100;

    this.step = function() {
 
    if (this.active) {

    if (!leftKey && !rightKey || leftKey && rightKey ) {

        this.xspeed *= this.friction;
    } else if (rightKey) {
        
        this.xspeed ++
    } else if (leftKey) {

        this.xspeed --;
    }

    this.x += this.xspeed;
    this.y += this.yspeed;
  }
}

    this.draw = function() {
        ctx.fillStyle = "blue"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

window.onload = function() {
canvas = document.getElementById("gamescreen")
ctx = canvas.getContext("2d");

setupInputs();

player = new Player(100, 400);

gameLoop = setInterval(step, 1000/40);

}

function step() {

    player.step();

    draw();
}

function draw() {
   ctx.fillStyle = "white";
   ctx.fillRect(0,0,900,550);

   player.draw();
}

function setupInputs() {
    document.addEventListener("keydown", function(event) {
      if (event.key === "ArrowUp") {
        upKey = true;
      } else if (event.key === "ArrowLeft") {
        leftKey = true;
      } else if (event.key === "ArrowDown") {
        downKey = true;
      } else if (event.key === "ArrowRight") {
        rightKey = true;
      }
    });
    document.addEventListener("keyup", function(event) {
        if (event.key === "ArrowUp") {
          upKey = false;
        } else if (event.key === "ArrowLeft") {
          leftKey = false;
        } else if (event.key === "ArrowDown") {
          downKey = false;
        } else if (event.key === "ArrowRight") {
          rightKey = false;
        }
      });
}