let x=  0;
let y = 300;

let speed = 10;

let r;
let g;
let b;


function setup() {
  createCanvas(600, 600);
  r = 10;
  g = 50;
  b = 150;
}

function draw() {
background(220);
fill (r, g, b);
ellipse(x, y, 100);
x = x + speed;

// || = OR operator,  && AND operator
if (x>600 || x<0 ) {
  //speed = speed * -1; back and forth

  // dont work speed = random (1, 5) * -1;
  speed =   - 1 * random (0.5,5.5);
  if ( speed > 10 || x <0  ){
    speed = 1;
  }

print("X" + x);
print("speed" + speed);
}

if (keyIsPressed) {
  r= random ( 255);
  g= random ( 255);
  b= random ( 255);
}



}


function mousePressed() {
  x = 0;
}
 function keyPressed() {
r= random ( 255);
g= random ( 255);
b= random ( 255);

 }

/*if (x<0) {
  speed = speed * -1;

}


}


/*if (mouseX > (height/3)*2) {
    fill(150, 0, 200);
}
else if  (mouseX> (height/3)) {
  fill("green");
}

else { 
  fill(225)}
  ellipse(300, 300, 100); */

/*
=== EQUAL TO 
!== NOT EQUAL TO */
