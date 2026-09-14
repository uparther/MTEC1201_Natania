/* Name: Natania Ma
Title: Sunny Day
Concept: Mimicking a children's drawing */

function setup() {
  createCanvas(1000, 500);
}

function draw() {
  background("lightblue");
 
  
  fill("yellow");
  circle(0, 10, 250);

  //cordinates {x1, y1, x2, y2}//
  line( 50, 150, 100, 250);
  line( 100, 120, 200, 200);
  line( 150, 60, 280, 100);

  fill("green");
  rect(-10, 400, 1020, 150);

  fill("white");
  ellipse(650, 150, 250, 80);
  ellipse(500, 100, 250, 100);

  strokeWeight(5)
}
