// jordan the 3rd
//map and txt
// .split()  spread syntax

let grid, img, ros, cols, colorMap, textFile;

function preload(){
  img = loadStrings("assets/colorImage.txt");
  textFile =("assets/info.txt");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  processText();
}

function draw() {
  background(220);
}



function processText(){
  // print("SPLIT INTO WORDS");
  // let splitWords = textFile(0).split(" ");
  // print(splitWordswords)

  // print("SPLIT INTO CHARACTERS");
  // let splitChars = textFile[1].split(" ");
  // print(splitChars);

  print("SPREAD INTO CHARACTERS");
  let spreadChars =[...textFile[2]];
  print(spreadChars);


}