let state = "pregame";
let y = 395 + 300; // for the space ship
let bulletX = 0;
let bulletY = 395 + 300;
let Shooting = false;

function setup() {
  createCanvas(851, 790); // 425 395
}

function draw() {

  textAlign(CENTER, CENTER); 
  textSize(125);
  textFont('Verdana');
  textStyle(BOLD);

  if (state === "pregame"){
    pregame();
  }
  else if(state === "game") {
    game();
  }
}

function pregame(){
  background('red');
    fill('black');
    text('click to start', width/2, height/2 );
}

function game(){
  // background
  background('blue');
  fill('black');
  text('hi', width/2, height/2 );

  enemy(); 

  if (mouseIsPressed && !Shooting){ // true
    bulletX = mouseX
    Shooting = true;
  }

  if (Shooting){ // false
    //bullet
    fill('green')
    rect(bulletX - 30/2, bulletY - 50, 30 , 50);
    bulletY = bulletY - 40;

    if (bulletY < 0){
      bulletY = 395 + 300; // reset to the position
      Shooting = false;
    }
  }

  // space ship
  fill('red');
  rect(mouseX - 30/2, y - 50, 30 , 50);
  ellipse(mouseX, y, 300, 30);
}

function mousePressed(){
  if (state === "pregame"){
    state = "game";
  } 
}

function enemy(){
  fill('black')
  rect(width/2 - 60/2, 50, 60, 50)
}

// reference space Invader
/* task list
need to make time count for disappear the text
else if game over
change the bullet size
intermediate: 
press 1 2 3 to transform the spaceship form
lives and point

game over pop out 
if (gameover is true) then it can restart
*/
