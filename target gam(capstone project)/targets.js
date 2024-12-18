class Target{
    

    constructor(){
        this.x = random(200, 1000);
        this.y = random(200, 500);
        this.img =   loadImage("assets/target.png");
    }


    display(){
        print("x: " + this.x);
        print("y: " + this.y);
        image(this.img, this.x, this.y);
}




}