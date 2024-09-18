// events (moudse and keyboard)
// jordan
// 9/12/24
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tSize = 40;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  let position = mouseX + ", " + mouseY;
  textSize(tSize);
  text(position, mouseX, mouseY);
}

fill(2)
function mousePressed(){
  tSize = random(20, 200);
}


