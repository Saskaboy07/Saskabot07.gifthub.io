// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y, d = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2; y = height / 2;
  noFill();
}

function draw() {
  background(220);
  x = lerp(x, mouseX, 0.15);
  x = mouseX; y = mouseY;


  let r = map(x, 0, width, 0, 255);
  let g = map(x, 0, height, 0, 255);
  let b = map(x, 0, width,  255, 0);
  stroke(r,g,b);



  circle(x,y,d);
}

function mousewheel(event) {
  print(event.delta);
  if (event.delta > 0) {
    d -= 10;
    if (d < 10) d = 10;
  }
  else {
    d += 10;

  }

}
