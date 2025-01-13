// cars! cars! cars!
// jordan Cartwright
// oct 22nd 2024

let car
let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(1000, 1000);
  car = new Vehicle(width/2, height/2);
}

function draw() {
  background("green");
  drawRoad(); 
 
  car.spawn();
 
}


function drawRoad(){ //draws the road
  fill(0);
  rectMode(CENTER);
  rect(0,height/2, 2000,500);
  stroke(255);
  drawingContext.setLineDash([20,20]);
  line(0, height/2, 900, height/2); //makes the line in the middle of the road
  noStroke();

}

class Vehicle{
  //constructor
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.c = color(random(255), random(255), random(255));
    
  }
  spawn(){ //spawns the cars
    fill("red");
    rect(this.x, this.y, 80, 50);
    fill("white")
    rect(this.x+35, this.y+30, 10, 10)
    rect(this.x-35, this.y+30, 10, 10)
    rect(this.x-35, this.y-30, 10, 10)
    rect(this.x+35, this.y-30, 10, 10)
  }
}
