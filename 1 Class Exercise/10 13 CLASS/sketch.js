let img;
let x;
let y;
let ms;
let seconds;

//runs before setup and draw, used to load images, fonts, etc
//runs before setup, to load our images and assets
function preload() {
img = loadImage('images/eevee.jpg');
// myFont = loadfont(myfont.otf); replace filename with your font file
}

function setup() {
  createCanvas(600, 600);
  x= 0;
  y= 0;
}

function draw() {
  background(220);

  ms = millis () // the number of ,illisseconds since starting the sketchs
  seconds = ms / 1000; 

  image(img, x, y, 200,200);
  //need to change the numbers to x and y
  x++; // X= X+1
  y++; // Y = Y+1

  // text() with extra commands for changing attributes
  textSize(32);
  // textFont(myFont); // replace myFont with your font variable
  textFont('New times Roman');
  textAlign(CENTER);
  fill("brown");

  if (ms > 3000) { // 3000 = 3 secs
  text('Eevee', width/2, height-50);
  }



}
