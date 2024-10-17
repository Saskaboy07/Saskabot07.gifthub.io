// Project Title
// Your Name
// Date

let names = ["jordan", "kyle", "xander"] 

function setup() {
  createCanvas(windowWidth, windowHeight);
  print(names);
  names.push("Liam");
  print(names);

  let Lastname = names.pop();
  print(lastname);
  print(names);

  let firstname = names.shift();
  print(firstname);
  print(names);


  names.push("lyle menendez")
  names.push("kyle")
  names.push("p diddy")
  names.push("jeffrey dahmer")
  names.push("erik menendez")

  for(n of names){
    print(n)
  }
}



function draw() {
  background(220);
}
