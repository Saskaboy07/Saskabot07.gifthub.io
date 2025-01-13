class game{
    constructor(){
        this.cannonAngle = 60;
        this.cannonPower = 10;
        this.shots = [];
        this.target = new Target();
        this.targetHits = 0
        this.shotsCount = 20
        this.explosions = [];
       

        //declare target
       
  }

 
play(){
    if(this.shotsCount > 0 || this.shots.length > 0){
    //called once per frame (acts like draw)
    imageMode(CORNER);
    image(backImage, 0, 0);

    imageMode(CENTER);
    //process and draw every cannonball
    for(let i = 0; i < this.shots.length; i++){
        let b = this.shots[i];
       b.move();
       b.display();
       b.checkGroundCollision();
       b.checkTargetCollision();
       //check the target collision
       if(b.getAlive()===false){
          if(b.getCollisionType()===1){
            //ground collision case
            //create/spawn a bunch of smoke particles
            this.shots.splice(i, 1);
            i--;
          }
          else{
            this.shots.splice(i, 1);
            i--;

          }

       }
    }
    }
    //reporting screen
    else{
      imageMode(CORNER);
      image(backImageReport, 0, 0);
      imageMode(CENTER);
      if(songStart=== false){
        songGame.play();
        songStart = true;
       


      }
      
      //display some text telling them how they did
      textAlign(CENTER);
      textSize(30);
      text("You Got " + currentGame.targetHits + " Targets", 510, 350);
      this.targetHits/20 * 100
      //check for the user preesing enter to play again  key/isDown()
      //set shotscount to 20
      
      textAlign(CENTER);
      textSize(30);
      text("Press Enter To Play Again",  510,520);
      if(keyIsDown(ENTER)){
        this.shotsCount = 20
        this.targetHits = 0
        
   
        
      }


    }
 //draw target
    this.target.display();
    

 
    //process and draw every smoke particle


 //process and draw every explosion that is active
 for(let i = 0; i < this.explosions.length; i++){
  let b = this.explosions[i];
   b.display();
   if(b.active === false){
    this.explosions.splice(i, 1);
            i--;
    
   }

 }




    


  //draw the correct image for number of shots left and targets hit
  this.displayAmmo();
  


  //
  this.displayTargets();
  

 

  
    
  //draw the cannon
    this.displayCannon();
    this.displayPower();

  }

  displayAmmo(){
    image(shotsRemainImages[this.shotsCount], 520,65)
  }

  displayTargets(){
    image(targetsHitImages[this.targetHits], 885,65)

  }


  createShot(){
    if(currentGame.shotsCount > 0 ){
      let v = createVector(this.cannonPower * cos(radians(this.cannonAngle)),
      this.cannonPower * sin(radians(this.cannonAngle)*-1));
      this.shots.push(new Ball(v));
      currentGame.shotsCount -=1 
    }
  }

  displayCannon(){
    imageMode(CENTER);
    push();
    translate(73, 535);
    push();
    rotate(radians(360 - this.cannonAngle));
    image(barrelImage,0,0);
    pop();
    image(baseImage,0,0);
    pop();

  }
  
  displayPower(){
    rectMode(CORNER);
    fill(0);
    rect(0,50,this.cannonPower * 10 - 50, 45);
  }





    changePower(increase){
      //if increase is true - getting larger power
      if(increase){
        if(this.cannonPower < 20) this.cannonPower += 0.15;
      }
      else{
        if(this.cannonPower > 5) this.cannonPower -= 0.15;
      }

    }






    changeAngle(increase){
      //if increase is true - getting larger angle
      if(increase){
        if(this.cannonAngle < 90) this.cannonAngle += 2;
      }
      else{
        if(this.cannonAngle > 0) this.cannonAngle -= 2;
      }
    }








}
