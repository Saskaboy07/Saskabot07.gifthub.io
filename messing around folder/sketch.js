let textToShow = "I love you Tia";
let index = 0;

function setup() {
    createCanvas(400, 200);
    textAlign(CENTER, CENTER);
    textSize(32);
}

function draw() {
    background(240);
    fill(0);
    text(textToShow.substring(0, index), width / 2, height / 2);
}

function keyPressed() {
    if (key === ' ') {
        if (index < textToShow.length) {
            index++;
        }
    }
}