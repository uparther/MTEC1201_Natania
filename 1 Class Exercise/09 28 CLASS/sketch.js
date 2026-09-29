// CREATE VARIABLES FOR THE CIRCLE'S POSITION//
let x = 600; // x-position of the circle// //Left/Right//
let y = 0; // y-position of the circle// //Up/Down//

function setup() {
  createCanvas(600, 600);
}

function draw() {
 // blue circle //  
  background(220);
  fill(0, 0, 255);
  circle(x, y, 50);
  x = x + 10; // the circle moves right by 1 pixel each frame//
  y = y + 10; // the circle moves down by 1 pixel each frame//

   /*stroke(200, 100, 100);
  strokeWeight(20); */

 /* USING MATHEMATIC OPERATIONS
  x= x + 10;
  x +=5;
  x++;// incrementing by 1//  
  */

  /* y = y - 1; 
  the negative number makes the circle move up, 
  the positive number makes it move down*/
  // the bigger the number, the faster the circle moves//


  /* BUTLT-IN VARIABLES
  line(pmouseX, pmouseY, mouseX, mouseY);
  */
  
}


function mousePressed() {
  x = 0;
  y = 0;
  }

function keyPressed() {
  x = 0;
  y = 0;
  }
  
 