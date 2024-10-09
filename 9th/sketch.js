// drawing with nested loops
// jordan
// 10/9/2024


//global var
let gridspaceing = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rendergrid();
}

function loopReview(){
  //quickly recap single and nested loops
  for(let x = 0; x <= 40; x = x+20){ //0, 20, 40
    for(let y = 0; y <= 40; y += 20){
      print(x,y)
    }
  }
  


}

function roundDist(x1, y1, x2, y2){
  // takes 2 coordinate pairs and returns the dist
  // betwen, but reounded
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(sq(a) + sq(b));
  return round(c);
}

 function rendergrid(){
  //use nested loop to draw objects in
  // a grid arrangement
  for(let x = 0; x < width; x += gridspaceing){
    for(let y = 0; y < height; y += gridspaceing){
      let d = roundDist(x,y,mouseX,mouseY)
      if(d > 150) fill(0);
      else fill(100, 50, 250);
      circle(x,y,gridspaceing);
      fill(250, 150);
      textAlign(CENTER, CENTER);
      text(d, x,y);

    }

  }

 }



function draw() {
  background(220);
  rendergrid();
}
