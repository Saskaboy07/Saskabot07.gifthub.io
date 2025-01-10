class Explosion{
    constructor(x,y){
        this.currentFrame = 0
        this.x = x
        this.y = y
        this.active = true
        
        

    }

display(){
    image(explosionImages [this.currentFrame], this.x, this.y);
    this.currentFrame ++
    if(this.currentFrame > 5){
        this.active = false

    }
}







}