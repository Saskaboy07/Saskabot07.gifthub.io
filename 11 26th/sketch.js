// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let start = false;
let pos; let vel;
let totalbounce = 0;

function setup() {
  createCanvas(300, 200);
  pos = createVector(width/2, height/2);
  vel = createVector(5,3);
  textSize(30);
  textAlign(CENTER);
  if(localStorage.getItem("bounce") === null){
    localStorage.setItem("bounce", 0)

  }
}

function draw() {
  background(220);
  if(started === false){
    text("click to begin", width/2, height/2);
    if(mouseIsPressed){
      started = true;
    }
  }
 else{
  updatebell();
  text(totalbounce, width/2, height/2)
}
}

function updatebell(){
  pos.add(vel);
  if (pos.X < 0 || pos.x > width) {
    totalbounces++;
    vel.x *= 1;
    localStorage.setItem("bounce", totalbounces)

  }
  if (pos.Y < 0 || pos.Y > width) {
    totalbounces++;
    vel.Y *= 1;
    localStorage.setItem("bounce", totalbounces)

  circle(pos.X, pos.Y, 20);
  }
}