// target game
// jordan
// 12/4/2024

//images to load
let backImage, backImageReport, barrelImage;
let baseImage, cannonballImage, targetImage;
let explosionImages = [];
let shotsRemainImages = [];
let targetsHitImages = [];
let songStart = false
let currentGame;


function setup() {
  createCanvas(1068, 600);
  currentGame = new game();
}

function draw() {
 currentGame.play();
 quickInput();
}

function keyPressed(){
  if (key === " "){
    currentGame.createShot();
  }
}




function quickInput(){
  if(keyIsDown(LEFT_ARROW)){
    currentGame.changeAngle(true);
  }
  if(keyIsDown(RIGHT_ARROW)){
    currentGame.changeAngle(false);
  }
  if(keyIsDown(UP_ARROW)){
    currentGame.changePower(true);
  }
  if(keyIsDown(DOWN_ARROW)){
    currentGame.changePower(false);
  }
}
