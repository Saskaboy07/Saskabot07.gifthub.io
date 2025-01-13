function preload(){
    backImage = loadImage("assets/background.png");
    backImageReport = loadImage("assets/backgroundReport.png");
    barrelImage = loadImage("assets/barrel.png");
    baseImage = loadImage("assets/base.png");
    cannonballImage = loadImage("assets/cannonball.png");
    targetImage = loadImage("assets/target.png");
    songGame = loadSound("assets/goodjob.mp3");
  
    for(let i = 0; i < 6; i++){
      explosionImages[i] = loadImage("assets/ex"+(i+1)+".png");
  
    }
  
    for(let i = 0; i < 21; i++){
      shotsRemainImages[i] = loadImage("assets/shots"+i+".png");
  
    }
  
    for(let i = 0; i < 21; i++){
      targetsHitImages[i] = loadImage("assets/target"+i+".png");
  
    }
  }
  
  