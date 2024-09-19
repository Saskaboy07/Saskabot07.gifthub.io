// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas( windowWidth, windowHeight);
}

function draw() {
  background("cyan");
  
  


  

   night();
   sun();
   clouds();
   sand();
   name();
   moon();
}

function sun(){
  fill("yellow");
  circle(50,40,60)
  



}

function clouds(){
  fill("white");
  circle(50,50,50);
  circle(70,60,40);
  circle(90,50,50);
  circle(70,40,40);
  noStroke();

}
  
function name(){
  fill("Black");
  textSize(20);
  text("Jordan", 680, 380);


}

function sand(){
  fill("Tan");
  square(0, 250, 800, 0);
  noStroke();



}

function moon(){
  fill("gray");
  circle(695, 40 ,50);
  fill("cyan");
  circle(675, 40, 50);

}
function night(){
  if(keyIsPressed === "w"){
 background("");
  }


}