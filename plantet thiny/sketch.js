// Project Title
// Your Name
// Date

function setup() {
  createCanvas(windowWidth, windowHeight);
  myPlanet = new Planet(width/2,height/2);

}

function draw() {
  background(0);
  myPlanet.display();
}


function mouseClicked(){
  if(keyIsPressed && keyCode === SHIFT){
    myPlanet = new Planet(mouseX, mouseY)
  }
  else {
    myPlanet.createMoon();
  }
}

class Planet{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.r = 50; 
    this.moons = [];
  }

display(){
  circle(this.x, this.y, this.r);
  for(let n of this.moons);
  n.update();
}

}



class Moon{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = 5
    this.steps = 10
  }

createMoon(){
  this.moons.push (new Moon(this.x, this.y));
}

update(){
  this.x += this.speed;
  this.steps--;
  if(this.steps === 0){
    this.steps = 20
    this.speed = -1;
  }
  circle(this.x, this.y, this,r);
}
}