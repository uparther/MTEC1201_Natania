// First Sketch {09/14} by Professor Max Addae
/* Muti_line Comment everything between the two slashes is a comment*/

function setup() {
  // createCanvas{} two arguments {width, height}
  createCanvas(400, 400);
}

function draw() {
  // background() -- sets the background color of the canvas
  background(200);

  //strokeWeight() -- sets the thickness of the stroke
  strokeWeight(10);
  //noStroke(10);//

  // line - draws set of cordinates {x1, y1, x2, y2}
  //point(40, 80);//
  line(50, 50, 100, 200);

  line(300, 10, 40, 100);

  line(600, 600, 810, 700);

  fill("red");
  rect(300 , 150, 50, 200);

  fill("blue")
  circle(40, 40, 50)

  quad()
}

//fill if count{1}, then fill all under it
// if count{n+1}, then fill all under it besides separate 
// important, the fill must be infront of the shapes //