// cars! cars! cars!
// jordan Cartwright
// oct 22nd 2024

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background("green");
  drawRoad(); 
}


function drawRoad(){
  fill(0);
  rectMode(CENTER);
  rect(0,height/2, 2000,500);
  stroke(255);
  drawingContext.setLineDash([20,20]);
  line(0, height/2, 900, height/2);
  noStroke();

}

class Vehicle{
  //constructor
  constructor(x, y, dir){
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.c = color(random(255), random(255), random(255));
  }
}

