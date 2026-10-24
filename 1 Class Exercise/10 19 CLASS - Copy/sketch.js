// need to watch back the note online

let ballX = 0;
let ballY = 300;
let speedX = 2;
let speedY = 3;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  





function move(speedX, speedY){ // NEW
  ballX += speedX
  ballY += speedY
}

function bounce(ballX, ballY, speedX, speedY){
  if (ballX >  height || ballX < 0){
  speedX = speedX * -1;
  }
S
  if (ballY >  height || ballY < 0){
  speedY = speedY * -1;
  }
}

function display(r, g, b, ballX, ballY){
  strokeWeight(5)
  fill(200, 10, 130);
  ellipse(ballX, ballY, 50, 50)
}

function bouncingBall(ballX, ballY)
}

// || // OR 
// && // AND
