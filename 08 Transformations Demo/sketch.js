// Basic Transformations Sandbox


let originalSpacing = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
   background(255);
   drawBasicGrid(220);
   
   //transformation one: TRANSLATION

 

  //add push()  pop()
  // push();
  // translate(120,120);
  // drawBasicGrid(100);
  // rectangleRed(0,0);
  // pop();





  //transformation two: SCALE
  // push();
  // rectMode(CENTER);
  // rectangleRed(40,0);
  // //scale Factor:
  // // 1+ to change <1+ smaller >1>→ larger
  // let scaleAmout = 2.5;
  // scaleAmout = map(mouseX, 0, width, 0, 4      )
  // scale(scaleAmout);
  // drawBasicGrid(180);
  // rectangleBlue(100,100);

  // pop();





  //transformation three: ROTATION
  //reminder: rotations are measured in radians, not degrees! Functions can help with the conversion...
  // angleMode(DEGREES);
  // push();
  // rectangleRed(20,20);


  // translate(100,0);
  // rotate(frameCount);
  // drawBasicGrid(100);
  // face(0,0); 


  //Combinations of Transformations
  // push();
  // scale(5);
  // rotate(45);
  // drawBasicGrid();
  // translate(100,100);
  // face(0,0);

  // pop();


  //indiv challenge
  push();
  translate(200,200);
  circle(0,0,150);
for (let i= 0; < numspokes; i++){
  line(0,0,75,0)
    rotate(360/numspokesS);
  
}
  
  pop();

}


function face(x, y) {
  //draw a face at x,y
  push();
  translate(x,y);
  ellipseMode(CENTER);
  fill(200,200,0);
  stroke(0);
  ellipse(0,0,80,80);
  fill(90, 140, 30, 220);
  triangle(-20, 20, 20, 20, 0, 30);
  fill(0);
  ellipse(-25,0,10,10);
  ellipse(25,0,10,10);
  strokeWeight(5);
  line(-30,-10,30,-10);
  strokeWeight(1);
  pop();

}

function rectangleRed() {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(255, 0, 0, 150);
  rect(50, 50, 50);

}

function rectangleBlue(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(0, 0, 255, 150);
  rect(100, 50, 50);

}

function drawBasicGrid(shade) {
  //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
  stroke(shade);
  for (let x = 0; x < width; x += 20) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += 20) {
    line(0, y, width, y);
  }

  //Draw "X" at the origin
  strokeWeight(3);
  stroke(0);
  line(-5,0,5,0);
  line(0,5,0,-5);
  strokeWeight(1);
}