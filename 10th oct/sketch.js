// Project Title
// jordan
// oct 3rd, 2024
//
//
let NUM_CIRCLES =40;
let seed; //to stabilize random number


function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(100);
}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles = Circles();
}




function drawCircles(){
// draw NUM_CIRCLES cricles on the screen
// with random x,y and diameter.
noFill();
for(let i = 0; i<NUM_CIRCLES; i++)[
  let x = random(0, width);
  ley y = random(0; height);
  let d = random(20,60);
  if(d < smallest){
    smallest = d;



  }
  circle(x,y,d);


]




}