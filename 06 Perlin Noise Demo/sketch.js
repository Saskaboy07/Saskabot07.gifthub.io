// thing ken carson
// jordan
// 9/27/24
//random() vs noise()
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cTime = 5; // current "noise"
let cIterval = 0.02;

function setup() {
  createCanvas(windowWidth, windowHeight);
 // frameRate(2);
}

function draw() {
  background(220);
  line(width / 2, 0, width / 2, height);



  ///draw with random()
  randomCircle();
  ///draw with noise()
  perlinCircle()

  staircase()
  

}



function perlinCircle(){

// draw a circle using noise() width
// unpredictable size (later,color)
let cSize = noise(cTime); //0-1
cSize = map(cSize, 0, 1, 1, 255);
let r = noise(cTime);
let g = noise(cTime+2);
let b = noise(cTime+5);

r = map(r, 0, 1, 0, 255);
g = map(g, 0, 1, 0, 255);
b = map(b, 0, 1, 0, 255);

fill(r,g,b);

circle(width * 0.75, height/2, cSize)
text(round(cSize),width * 0.75, height/2);
cTime += cIterval;



}





function randomCircle() {
  // draw a cricle that uses random()
  //unpredictable size (later, color)
  let cSize = random(10, 200);
  fill(cSize, 255-cSize, cSize/2);
  textAlign(CENTER, CENTER);
  circle(width * 0.25, height / 2, cSize);
  text(round(cSize), width*0.25, height/2);
  
  




}

function staircase(){
  //draw a staircase using loops
  for(let x = 0; x < width; x += 20){
    noFill();
    rect(x, height, 20,;
    




  } 
  





}
