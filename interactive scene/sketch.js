// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let currentBack = 0;
let currentColor = "cyan";
let movenment = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() { 
  mouseClicked()
  background(currentColor);
  turnNight();
  sun();
  clouds();
  sand();
  artistMark();
  moon();
  move();
  fill("white");
  ellipse(movenment, 600, 70, 20);
}

function sun(){
  //thus is for my
  fill("yellow");
  circle(50,40,60)
}

function clouds(){
  //this is for my clouds
  fill("white");
  circle(50,50,50);
  circle(70,60,40);
  circle(90,50,50);
  circle(70,40,40);
  
}
  
function artistMark(){
  //this is my name
  fill("Black");
  textSize(20);
  text("Jordan", 860, 460);
}

function sand(){
  //this is for the ground
  fill("Tan");
  rect(0, 300, width, 800);
}

function moon(){
  //this is for the moon
  fill("gray");
  circle(695, 40 ,50);
  fill("cyan");
  
}



function turnNight(){
   //change background to black
  if(currentBack === 0){
    currentColor = "cyan";
  }
    
  if(currentBack === 1){
    currentColor = "black";
  }
  
  if(currentBack === 2){
    currentColor = "red";
  }
  if(currentBack === 3){
    currentColor = "pink";
  }

}
  
function mouseClicked(){
  if(mouseButton === LEFT && currentBack < 3){
    currentBack += 1;
  
  }
  else currentBack = 0;

}

