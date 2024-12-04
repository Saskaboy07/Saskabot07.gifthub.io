// target game
// jordan
// 12/4/2024

//images to load
let backImage, backImageReport, barrelImage;
let baseImage, cannonballImage, targetImage;
let explosionImages = [];
let shotsRemainImages = [];
let targetsHitImages = [];


function preload(){
  backImage = loadImage("assets/background");
  backImageReport = loadImage("assets/backgroundReport.png");
  barrelImage = loadImage("assets/barrel.png");
  cannonballImage = loadImage("assets/cannonball.png");
  targetImage = loadImage("assets/target.png");

  for(let i = 0; i < 6; i++){
    explosionImages[i] = loadImage("assets/ex"+i+"png");

  }

  for(let i = 0; i < 21; i++){
    shotsRemainImages[i] = loadImage("assets/shots"+i+"png");

  }

  for(let i = 0; i < 21; i++){
    shotsRemainImages[i] = loadImage("assets/shots"+i+"png");

  }
}



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(backImage,0,0);
}
