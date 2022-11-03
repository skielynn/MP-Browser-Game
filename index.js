// character 
character = new Character(100, 200)

//constructor : called when object created w new keyword
function Character(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;

    this.walk = function() {

    }
}

// The setInterval() method calls a function at specified intervals (in milliseconds). 1 second = 1000 milliseconds.  W3SCHOOLS
setInterval(walk, 1000/30);

function walk() {
 console.log("walk")
}