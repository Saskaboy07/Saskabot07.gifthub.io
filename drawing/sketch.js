// Project Title
// Jordan
// 9/19/2024


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
 myBackground();
 myForeground();
}



function myBackground(){
  let rectHeight = 1;
    noStroke();
    for(let y = 0; y < height; y+= rectHeight){
    let value = map(y,0,width,0,255)
    fill(0, 0, value);
    rect(0, y, width, rectHeight);
    


  }
 

}



function myForeground(){
  // loop var , condition  ; var modification

  //x; 0  40  80  120
  for(let x = 0; x < mouseX; x = x + 40){  
    fill(0);
    circle(x, height/2, 40);
    fill(255);
    text(x, x,height/2);
  }



  randomSeed(999);
  let starcount = 0;
  fill(255, 0, 0);
  while(starcount < 100){
    let x = random(0, width);
    let y = random(0, height);
    circle(x, y, 10);

    starcount++;

  }
}
