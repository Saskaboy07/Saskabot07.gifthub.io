class Ball{

    constructor(v_){
        this.pos = createVector(73, 535);
        this.velocity = v_;
        this.gravity = createVector(0, 0.2);
        this.alive = true;
        this.collisionType = 0; //1 - GROUND  2 - TARGET
                                //0 - NO COLLISION
    }

    move(){
        this.pos.add(this.velocity);
        this.velocity.add(this.gravity);
    }

    display(){
        push();
        translate(this.pos.x, this.pos.y);
        image(cannonballImage, 0, 0);
        pop();

    }

    getAlive(){
       return this.alive;

    }

    getCollisionType(){
        return this.collisionType;
    }

    checkGroundCollision(){
        //546
        if(this.pos.y > 546){
            this.alive = false;
            this.collisionType = 1;
        }
    }

    checkTargetCollision(){
        //this.pos.x  this.pos.y  cannonball location 
        //currentGame.target.x   currentGame.target.y   target loc
        if (dist(this.pos.x, this.pos.y, currentGame.target.x, currentGame.target.y) < 30 ){
            print("hit")
            this.alive = false;
            this.collisionType = 2;
            currentGame.target.moveTarget();
            currentGame.targetHits +=1
        }

    }





}