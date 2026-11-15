/*Name: Natania Ma
Title: No gravity Connect Four

Concept: 
This is a simple connect four game.
Using (while) for decorations, and (for) to create the game board.

Instructions: 
Click the exact location to change the color of the circles.
The color will alternate between red and yellow.
Press [SPACE] to restart the game.
*/

let rows = 6;
let columns = 7;
let cell = 75

let playerColor = 'red'

function setup() {
  createCanvas(600, windowHeight);
  textAlign(CENTER,CENTER)
  textFont('Georgia')
  game();
}

function draw() { // roll colums cell
  
}

function game(){
  background(0, 39, 117);
  //rgb(0, 39, 117)
// fill('black')
// rect(0, 600,width, height)
  
  // BOARD
  for (let r = 0; r < rows; r = r + 1) { 
    for (let c = 0; c < columns; c = c + 1) {
      fill(255);
      stroke(0);
      ellipse(c * cell + 67.5, r * cell + 200, 60, 60);
    }
  }

  fill('white')
  textSize(15)
  text('press [SPACE] to restart', width/2 + 150, height/2 + 220)
  textSize(40)
  text('CONNECT FOUR', width/2, 120)

  let i = 0;
  while (i < 6) { // amount
    noStroke();
    fill(255, 255, 255, 30);
    text('◡◠◡', i * 100 + 50, 770);
    text('◠◡◠', i * 100 + 50, 800); //30
    text('◡◠◡', i * 100 + 50, 30);
    text('◠◡◠', i * 100 + 50, 60);
    i++;
  }
}

function mousePressed(){ 
  for (let r = 0; r < rows; r = r + 1) {
    for (let c = 0; c < columns; c = c + 1) {

      let distance = dist(mouseX, mouseY, c * cell + 67.5, r * cell + 200)
      if (distance < 32) {
        fill(playerColor);
        stroke(0);
        ellipse(c * cell + 67.5, r * cell + 200, 60, 60);
      
        textSize(50)
        if (playerColor === 'red'){
        fill('yellow')
        playerColor = 'yellow'
        text('NEXT COLOR  ⬤', width / 2, height / 2 + 280);
        } else if (playerColor === 'yellow'){
        playerColor = 'red'
        fill('red')
        text('NEXT COLOR  ⬤', width / 2, height / 2 + 280);
        }
      }
    }
  }
}

function keyPressed(){ //RESTART
  if(key === ' '){
    playerColor = 'red'
    game()
  }
}