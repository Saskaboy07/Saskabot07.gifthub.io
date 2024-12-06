// target game
// jordan
// 12/4/2024

//images to load
let backImage, backImageReport, barrelImage;
let baseImage, cannonballImage, targetImage;
let explosionImages = [];
let shotsRemainImages = [];
let targetsHitImages = [];

let currentGame;


function setup() {
  createCanvas(windowWidth, windowHeight);
  currentGame = new game();
}

function draw() {
 currentGame.play();
}


// video 2 9:24