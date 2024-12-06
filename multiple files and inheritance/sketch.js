// multiple files and inheritance
// jordan
// dec 6th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let objects = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=10; i>0; i--){
    objects.push(new AnimatedObject(random(width), 400))
    objects.push(new CircleObjects());
    objects.push(new LineObject());
  }
}

function draw() {
  background(220);
  for (let o of objects){
    o.move();
    o.display();
  }
}
