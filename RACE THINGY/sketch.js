// Project Title
// Your Name
// Date
//

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(let i = 0; i < POINTS.length; i++){
    points[i].display();
  }
}

function mouseClicked(){
  point.push(new MiniPoint(mouseX, mouseY));
}


class MiniPoint{
    constructor(x, y){
    this.x = x;
    this.y = y;
    this.c = color(random(255), random(255), random(269));
    this.S = 20;

  }

display(){
  fill(this.c);
  noStroke();
  ellipse(this.x, this.y, this.S, this.s);
}

move(){
  let xSpeed = map(noise(this.noiseX),0,1,-this_MAX_SPEED,this.MAX)

}
}
