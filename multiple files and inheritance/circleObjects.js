//child class 1
// extends in

class CircleObjects extends AnimatedObject{
    constructor(){
        super(random(width), random(height));

    }
    display(){
        strokeWeight(2);
        let d = dist(this.x, this.y,mouseX, mouseY);
        if(d <= this.size/2) fill(255,0,0);
        else fill(255);

        circle(this.x, this.y, this.size);
    }

    
}