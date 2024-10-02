// interactive scene
// jordan cartwright
// 10/2/2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let currentBack = 0;
let currentColor = "cyan";
let xPos = 50
let yPos = 50

function setup() {
  //this makes the screen
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  //this makes the code run
  changeColor();
  background(currentColor);
  sun();
  clouds();
  sand();
  artistMark();
  pyramid();
}

function sun() {
  //thus is for my
  fill("yellow");
  circle(50, 40, 60)
}

function clouds() {
  //this is for my clouds
  fill("white");
  circle(xPos + 50, yPos, 50);
  circle(xPos + 30, yPos - 10, 50);
  circle(xPos + 3, yPos - 10, 50);
  circle(xPos + 30, yPos + 15, 50);
  circle(xPos + 5, yPos + 15, 50);
  circle(xPos + 10, yPos, 50);
  circle(xPos - 20, yPos, 50);

}

function artistMark() {
  //this is my name
  fill("Black");
  textSize(20);
  text("Jordan", 860, 460);
}

function sand() {
  //this is for the ground
  fill("Tan");
  rect(0, 300, width, 800);
}




function changeColor() {
  //change background to black
  if (currentBack === 0) {
    currentColor = "cyan";
  }

  if (currentBack === 1) {
    currentColor = "limegreen";
  }

  if (currentBack === 2) {
    currentColor = "red";

  }
  if (currentBack === 3) {
    currentColor = "magenta";
  }

}

function mouseClicked() {
  //this changes the background to different colors
  if (mouseButton === LEFT && currentBack < 3) {
    currentBack += 1;

  }
  else currentBack = 0;

}

function keyPressed() {
  // this moves the cloud left and right
  if (key === "d") {
    xPos += 10;
  }

  if (key === "a") {
    xPos -= 10;
  }

  if (xPos > width || xPos < 0) {
    xPos = 50;
  }
}

function pyramid(){
  fill(204,131,78);
  triangle(450,100,300,300,600,300);
  





}