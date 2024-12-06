class game{
    constructor(){
        this.connanangle = 45;
        this.connanpower = 10;
        this.shots = [];
  }

  play(){
    //called once per frame (acts like draw)
    imageMode(CENTER);
    image(backImage,0,0);

    //process and fraw every cannonball

    //process and draw every stroke particle

    //draw the cannon
    this.displayCannon();

  }

  displayCannon(){
    imageMode(CENTER);
    push();
    translate(73, 535);
    push();
    rotate(radians(360 - this.connanangle));
    image(barrelImage,0,0);
    image(baseImage,0,0);
    pop();

  }
}