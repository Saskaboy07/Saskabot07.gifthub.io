// // terrain challenge
// // jordan cartwright
// // oct 8th

let noiseVar = 0;
let rectHeight = 0;
let rectWidth = 10;
let tallestRect = 0;
let tallestRectX = 0



function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(2);
}

function draw() {
  background(220)

  resetNoise();

  generateTerrain();

  drawFlag(tallestRectX, height - tallestRect);
}

function generateTerrain() {
  randomSeed(69420);

  let localNoiseVar = noiseVar;
  // makes the height
  for (let x = 0; x < width; x += rectWidth) {
    rectHeight = noise(localNoiseVar);
    rectHeight = map(rectHeight, 0, 1, 0, height);

    rect(x, height, rectWidth, -rectHeight);

    localNoiseVar += 0.01;
  }
}


function resetNoise(){
  noiseVar += 0.01;
}

function keyPressed(){
  if(keyCode === LEFT_ARROW && rectWidth > 1){
    rectWidth -=1;


  }

  if(keyCode === RIGHT_ARROW){
    rectWidth +=1;
  }
}

function drawFlag(x,y){
  fill("red");
  rect(x,y -45, 10, 45);
  fill("red");
  triangle(x + 10,y -45, x + 10, y - 20, x + 35, y -20);
  fill("white");
}



