// cars! cars! cars!
// jordan cartwright
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
  line(0,height/2);  


}