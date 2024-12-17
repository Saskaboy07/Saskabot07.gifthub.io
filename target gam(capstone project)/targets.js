class Target{
    

    constructor(){
        this.x = 80
        this.y = 60
        this.img =   loadImage("assets/target.png");
    }


    display(){
        image(this.img, this.x, this.y);
}



}