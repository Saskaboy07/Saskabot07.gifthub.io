// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = 25
let y = 25
let movement = 5
let size = 25

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  //square
  fill(0,0,0);
  rectMode(CENTER);
  rect(x,y, size, size);

  //make square move
  if (x < windowWidth - 25 && y <= 25){
    x=x+movement;
  }
  if (y < windowHeight - 25 && x >= windowWidth -25){
    y=y+movement;
  }
  if (y >= windowHeight - 25 && x > 25){
    x=x-movement;
  }
  if (y >25 && x <= 25){
    y=y-movement;
  }

}

function keyPressed(){
  console.log("buttonpress")
  if (key==="a" && size > 5){
    size = size - 5
  }
  if (key==="d" && size < 50){
    size = size + 5
  }
  if (key==="s" && movement >1){
    movement = movement - 1
  }
  if (key=== "w" && size < 30){
    movement = movement + 1
  }
}
