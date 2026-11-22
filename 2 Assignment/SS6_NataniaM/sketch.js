/*
Name: Natania Ma

Title: Bubbles

Concept: 
Creating a project where player clicks to create bubbles that rise.

Instructions:
Click to create bubbles that rise. 
You can also turn on the spray mode to create bubbles by holding down the mouse button. 
You can clear the screen by clicking the clear button.
*/

// ARRAY for The Bubbles
let xPos = [];
let yPos = [];
let sizes = [];
let speeds = [];

let sprayButton;
let clearButton;
let spray = false;

function setup() {
  createCanvas(800, 790);
  sprayButton = createButton('Spray ON/OFF')
  sprayButton.size(100, 50)
  sprayButton.position(800, 650)
  sprayButton.mousePressed(LetsSpray) // true

  clearButton = createButton('CLEAR')
  clearButton.size(100, 50)
  clearButton.position(800, 700)
  clearButton.mousePressed(LetsClear) // true
}

function draw() {
  background(0, 39, 117); //  Dark Blue

  

  for (let i = 0; i < xPos.length; i++){
    fill(255, 255, 255, 80) // Transparent Fill(80)
    stroke(255, 255, 255, 80) // Transparent Outline(80)
    circle(xPos[i], yPos[i], sizes[i])

    yPos[i] -= speeds[i];
  }

 if(spray === true && mouseIsPressed){
    xPos.push(mouseX); 
    yPos.push(mouseY);
    sizes.push(random(15, 80))
    speeds.push(random(1, 4))
 }
}

function LetsSpray(){
  spray = !spray
}

function LetsClear(){
  xPos = [];
  yPos = [];
  sizes = [];
  speeds = [];
}

function mousePressed() { // spawn bubble when click 
  xPos.push(mouseX); 
  yPos.push(mouseY);
  sizes.push(random(15, 80))
  speeds.push(random(1, 4))
}