/* Name: Natania Ma
Title: Phase of Sun and Moon

Concept:
Inspired by Harper Woodpeckers by Ivan Rudnicki.
Using the sun and moon to create a interaction based on their phases.

Instructions:
Move the mouse up and down to change the position of the sun and moon. 
Move the mouse left and right to change the phase of the sun and moon. 
Click the mouse to create random stars in the background.
*/
let x = 0;
let y = 300;

function setup() {
  createCanvas(600, 700);
  noStroke();
}

function draw() {
  background(1, 9, 28);

if (mouseIsPressed) { //STARS RANDOM
    fill("yellow");
    ellipse(random(width), random(height), 12, 12);
    fill("white");
    ellipse(random(width), random(height), 15, 15);
  }

  fill(56, 57, 67); // MIDDLE LINE GRAY
  rect(width / 2 - 150 / 2, 0, 150, 700);

if (mouseY < height / 2) { //SUN  
  if (mouseX < width / 2) { // NORMAL
  fill('yellow');
  ellipse(300, mouseY, 100, 100)
  }
  else { // ECLIPSE
  fill('orange');
  ellipse(300, mouseY, 100, 100)
  fill('black');
  ellipse(300, mouseY, 95, 95)
  }
}

else { // MOON
  if (mouseX < width / 3) { // WAXING CRESCENT
  fill('lightyellow');
  ellipse(300, mouseY, 100, 100)
  fill(56, 57, 67);
  ellipse(280, mouseY, 100, 100)
  }
  else if (mouseX < (width / 3) * 2) { //FULL MOON
  fill('lightyellow');
  ellipse(300, mouseY, 100, 100)
  }
  else { // WANING CRESCENT
  fill('lightyellow');
  ellipse(300, mouseY, 100, 100)
  fill(56, 57, 67);
  ellipse(320, mouseY, 100, 100)
  }
}
}
