// setup
let boundaryX;
let boundaryY;
let state = 'preGame';
let Geist_Pixel; // Font

// game 
let SunY = 200;
let dialogue = 0;
let Sunstop = false;


function preload() {
  Geist_Pixel = loadFont("asset/GeistPixel-Regular-VariableFont_ELSH.ttf");
}
function setup() {
  createCanvas(851, 790); // 425, 395
  //noStroke();
  textAlign(CENTER, CENTER);
  textFont(Geist_Pixel)
  
}

function draw() {
  if (state === "preGame"){
    preGame();
  } else if (state === "stageOne"){
    stageOne();
  }
}

function preGame(){
  background('red')
  fill('black')
  textSize(100);
  text('game test', width/2, height/2, )
}

function stageOne(){
  background('blue');
  fill('white')

  boundaryX = mouseX;
  boundaryY = mouseY;

  //rect(283 - 75, 263 + 150, 283 + 150, 263)// The boundary box
  rect(208, 413, 433, 263)

  if (boundaryX < 208 + 25){
    boundaryX = 208 + 25
  } else if (boundaryX > 641 - 25){
    boundaryX = 641 - 25
  }

  if (boundaryY < 413 + 25){
    boundaryY = 413 + 25
  } else if (boundaryY > 676 - 25){
    boundaryY = 676 - 25
  }

  SUN();

  if (dialogue < 7){
    /*stroke('white')
    strokeWeight(10) */
    fill('black')
    rect(208, 413, 433, 263)
  }
  else if (dialogue === 7){
    player();
    
    if (SunY > 150 && Sunstop === false){
      SunY = SunY - 1
      if (SunY <= 150){
        Sunstop = true;
      }
    }
    else if (SunY >= 150 && Sunstop === true && SunY < 960){
      SunY = SunY + 7;
      if (SunY >= 350 && boundaryY <= 350 + 160 && Sunstop === true ){ // still need to fix
        gameOver();
      }
    }
  }
  storyOne();
}

function gameOver(){
  fill('red');
  textSize(125);
  text(' GAME OVER', width/2, height/2);
}
//
function player(){
  fill('green')
  ellipse(boundaryX, boundaryY, 50, 50)
}

//

function SUN(){
  fill('yellow');
  ellipse(width/2, SunY, 320, 320)
}


function storyOne(){
  fill('blue')
  textSize(25)
  strokeWeight(0)
  if (dialogue === 1){
    text('How rare. A living soul.', width/2, 413 + 263/2)
  } else if (dialogue === 2){
    text('Where did you come from', width/2, 413 + 263/2 - 20)
    text('little one?', width/2, 413 + 263/2 + 20)
  } else if (dialogue === 3){
    text('Either way', width/2, 413 + 263/2 - 20)
    text('you should leave this ga...', width/2, 413 + 263/2 + 20)
  } else if (dialogue === 4){
    text('I mean...', width/2, 413 + 263/2 - 20)
    text('place...', width/2, 413 + 263/2 + 20)
  } else if (dialogue === 5){
    text("It's no longer fit for anyone.", width/2, 413 + 263/2)
  } else if (dialogue === 6){
    text('And well, my time has come.', width/2, 413 + 263/2 - 20)
    text('How tiring...', width/2, 413 + 263/2 + 20)
  }

  /* How rare. A living soul.
  Where did you come from, little one?
  Either way, you should leave this ga... I mean... place...
  It's no longer fit for anyone.
  And well, my time has come.
  How tiring...
  */
}

function mousePressed(){
  if (state === 'preGame'){
    state = 'stageOne';
  }
  if (dialogue < 7){
    dialogue = dialogue + 1
  }
}

function keyPressed(){
  if (key === 'p'){
    dialogue = 7
  }
}

