/* Name: Natania Ma
Title: DVD Screensaver But Not Bouncing

Concept:
Finally! 
Instead of waiting for the logo to bounce all the way to the corner by itself forever, 
you can finally control it and move it wherever you want, as many times as you like!
And when you find the perfect spot, click to leave a stamp!

Instructions:
Move the mouse to control the logo.
Click to leave a stamp. 
The canvas can display one stamp at a time only.*/

let x = 0;
let y = 0;

let stampX = 0;
let stampY = 0;

let bgX = 0;

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background('black');
  strokeWeight(0);
  x = mouseX;
  y = mouseY;

  bgX = bgX + 5;

  // Blue Disk Text
    fill("blue");
    textSize(100);
    textAlign(CENTER, CENTER);
    textFont("Arial Black");
    textStyle(BOLDITALIC);
    text("DVD", bgX, height/2 - 55);

    //Blue Disk
    fill("blue"); 
    ellipse(bgX, height/2 , 200, 50);
  
    fill("black");
    ellipse(bgX, height/2, 60, 10);

  // Stamp Text
    fill("orange");
    textSize(100);
    textAlign(CENTER, CENTER);
    textFont("Arial Black");
    textStyle(BOLDITALIC);
    text("DVD", stampX, stampY - 55);

    //OrangeDisk
    fill("orange"); 
    ellipse(stampX, stampY , 200, 50);
  
    fill("black");
    ellipse(stampX, stampY, 60, 10);
   
// Pink Disk
    fill("magenta"); 
    ellipse(x, y , 200, 50);
  
    //center
    fill("black");
    ellipse(x, y, 60, 10);
  
  // DVD Text
  fill("magenta");
  textSize(100);
  textAlign(CENTER, CENTER);
  textFont("Arial Black");
  textStyle(BOLDITALIC);
  text("DVD", x, y - 55);
}

function mousePressed() {
  stampX = mouseX;
  stampY = mouseY;
}

function keyPressed() {
  bgX = 0;
}