// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let pilot; //p5.image  .width   .height


function preload(){
  pilot = loadImage("assets/aviator.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}


function drawCharacter(x,y,avg){
  //draw a letter (light color) to represent 
  // an average intensity
  fill(255);
  if(avg > 200) textStyle("&", x, y);
  else if(avg > 140) text("%", x, y);
  else if(avg > 100) text("$", x, y);
  else if(avg > 40) text("@", x, y);
}


function draw() {
  image(pilot,0,0)
  loadPixels();
  background(0);
  for(let x  = 0; x < width; x+=10){
    for(let y = 0; y < height; y+=10){
      let loc = (y*pilot.width + x)*4
      let avg = avgPixel(loc);
      drawCharacter(x,y, avg);
    }
  }












//for(let i = 0; i < pixels.length; i+=4){
   //greyscale
   //let avg = avgpixel(i);
  // pixels[i] = avg;
  // pixels[i+1] = avg;
 //  pixels[i+2] = avg;






   
    //brighting filter
   //  let boost = map(mouseX, 0, width, -150, 150);
   // let r = pixels[i] + boost;
   // let g = pixels[i+1] + boost;
   // let b = pixels[i+2] = boost;
   //  setPixelsColor(i, r, g, b);
   // }
  
 //  updatePixels();
//}
}

function avgPixel(pos){
  let sum = pixels[pos] + pixels[pos+1] + pixels[pos+2];
  return sum/3;
}


function setPixelColor(pos, r, g, b){
  pixels[200*4] = 255; //R
  pixels[200*4+1] = 0; //G
  pixels[200*4+2] = 0; //B


}
