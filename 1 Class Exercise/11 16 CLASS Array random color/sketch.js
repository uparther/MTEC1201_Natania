let xPos = [];
let yPos = [];

let color = [];

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  for (let i = 0; i < xPos.length; i++) {
    // fill('red');                                            // instead of putting the color in draw, we put the color in mousePressed
    // fill(color(random(255), random(255), random(255)))     // if use this, the color will change every frame, so we need to put it in mousePressed
    fill(color[i]);                                          // instead of using a single color, we can use the color at index i in the color array
    circle(xPos[i], yPos[i], 50);
  }
}

function mousePressed() {
  xPos.push(mouseX);  // push means adding new element to the list
  yPos.push(mouseY);

  color.push(color(random(255), random(255), random(255)));
}