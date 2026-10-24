/*
Name : Natania Ma
Title: Bullet Sun's Paradise

Concept:
This a midterm project interactive work,
based on the theme SS3_NataniaM (Phase of Sun and Moon).
It should be option 2: Expanded Short Study.
**This game is heavily inspired by the game (Undertale).**

Instructions:
This is a very short game.
This game has Bullet Hell elements. 
A mouse is recommended.
- (Click) / (ENTER) to Enter / Restart the game. 
- (Click) to interact / continue all the dialogues.
- (ENTER) can skip only the beginning. 
Please try not to (Reload) the page.
_________________________________________________________________________
If you feel adventurous,
you can try to change the font from ('Courier New') to (Geist_Pixel).

Warning! 
Change the font from ('Courier New') to (Geist_Pixel) will slow down the frame rate.
_________________________________________________________________________
!!SPOILERS!!
In preGame you can drag the mouse to the bottom to pull the moon down.
Moving left or right will create the WAXING or WANING CRESCENT.

This game have Metagaming elements:
If you died on your first try, you will encounter a different dialogue.
Both dialogues will lead to the same ending.

A tiny design:
If you restart the game, you mouse position should (maybe not) interact with the Moon,
instead of the Sun.
*/

// setup
let boundaryX;
let boundaryY;
let state = 'preGame';
let Geist_Pixel; // Font


// game 
let SunY = 200;
let dialogue1 = 0;
let dialogue2 = 0;
let dialogue3 = 0;
let Sunstop = false;

let SunBossY = -350;
gameOvercount = 0;

//Danger Zone
let ZoneX = 425;
let ZoneW = 0;

function preload() {
  Geist_Pixel = loadFont("assets/GeistPixel-Regular-VariableFont_ELSH.ttf");
}
function setup() {
  createCanvas(851, 790); // 425, 395
  //noStroke();
  textAlign(CENTER, CENTER);
  textFont('Courier New'); //Geist_Pixel
}

function draw() {
  if (state === "preGame"){
    preGame();
  } else if (state === "stageOne"){
    stageOne();
  } else if (state === "gameOver"){
    gameOver();
  } else if (state === "ending"){
    ending();
  }
}

function preGame(){
  strokeWeight(0);
  if (mouseY < 590){
    background(179, 250, 252)  // light blue for sky
    fill('yellow');
    ellipse(width/2, 790 - 625, 100, 100)
    fill('black');

  } else if (mouseY >= 590){ // dark mode
    background(8, 47, 66);
    // SUN 
    fill('lightyellow');
    ellipse(width/2, mouseY - 625, 100, 100)

    ellipse(random(width), random(height), 15, 15);
    let moonEatX = width - mouseX;
    fill(8, 47, 66); //eat  // color background
    if (mouseX < 425){
      ellipse(moonEatX - 425, mouseY - 625, 125, 125) ;
    } else if (mouseX > 425 && mouseX < 855){
      ellipse(moonEatX + 425, mouseY - 625, 125, 125) ;
    } else if (mouseX > 850 || mouseX < 1){ // WHEN OUTSIDE CANVAS
      ellipse(width/2, mouseY - 625, 125, 125);
    }
    fill('lightyellow'); // MAKE THE PRE TEXT YELLOW 
  }  
  
  textSize(100);
  // rect (0, 200 - 150/2, 851 , 150) // black line behind the sun
  text("Bullet Sun's ", width/2, height/2); // Midterm Game
  text('Paradise', width/2, height/2 + 100); // Demo 1
  textSize(50);
  text('"Click" To Start', width/2, height/2 + 220);
}

function stageOne(){
  background('darkblue');
  fill('white');

  boundaryX = mouseX;
  boundaryY = mouseY;

  //rect(283 - 75, 263 + 150, 283 + 150, 263)// The boundary box
  rect(208, 413, 433, 263) ;

  if (boundaryX < 208 + 25){
    boundaryX = 208 + 25 ;
  } else if (boundaryX > 641 - 25){
    boundaryX = 641 - 25 ;
  }

  if (boundaryY < 413 + 25){
    boundaryY = 413 + 25 ;
  } else if (boundaryY > 676 - 25){
    boundaryY = 676 - 25 ;
  }

  if (dialogue1 < 10){
    fill('black'); // FOR BOX
    rect(208, 413, 433, 263);
    fill('white') // FOR SKIP TEXT
    textSize(15);
    text('Press (ENTER) To Skip', 625, 706 );
    text('(Click) To Continue', 625, 706 + 20 );
  }
  else if (dialogue1 === 10){
    if (SunY < 960){
      fill(255, 219, 219);
      rect(ZoneX, 413, ZoneW, 263); // Danger Zone
      if (ZoneW <= 320){
        ZoneW = ZoneW + 6 ;
        ZoneX = ZoneX - 3 ;
      }
    }

    player();

    if (SunY > 150 && Sunstop === false){  // SUN GOES UP
      SunY = SunY - 1 ;

      //attack
      if (SunY <= 150){
        Sunstop = true;
      }
    }
    else if (SunY >= 150 && Sunstop === true && SunY < 960){ // SUN DROP
      SunY = SunY + 15;
      // doc test
      let d = dist(width / 2, SunY, boundaryX, boundaryY);
      
      // sun 160 + player 25 = 185
      if (d <= 180) {
        state = "gameOver";
        gameOvercount += 1;
      }
    }
  }
  SUN();

  if (SunY >= 960 ){ // SUN BOSS
    fill('yellow');
    ellipse(width/2, SunBossY, 700, 700);
    if (SunBossY < 50){
      SunBossY = SunBossY + 3;
    } else if (SunBossY > 50 && dialogue2 === 0){
        dialogue2 = dialogue2 + 1 ;
    } else if (SunBossY > 50 && dialogue3 === 0){
        dialogue3 += 1 ;
    }
  }
  story1();
}

function gameOver(){
  fill('red');
  textSize(125);
  text('GAME OVER', width/2, height/2);
  textSize(50);
  text('Click to restart', width/2, height/2 + 130);
}

function ending(){
  background(1, 9, 28); //background(8, 47, 66);
  textSize(125);
  fill('white')
  ellipse(random(width), random(height), 15, 15);

  text('You win', width/2, height/2 + 100);
  textSize(50);
  text('Click to restart', width/2, height/2 + 230);

  fill('orange');
  ellipse(width/2, 50, 700, 700);
  fill('black');
  ellipse(width/2, 50, 650, 650);

  fill('gray');
  textSize(20);
  text('Watch out for your shadows...', 650, 420);
}
//
function player(){
  fill('green');
  ellipse(boundaryX, boundaryY, 50, 50);
}

function SUN(){
  fill('yellow');
  ellipse(width/2, SunY, 320, 320);
}

function story1(){
  fill('white')
  textSize(23);
  strokeWeight(0);
  if (dialogue1 === 1){
    text('{CLICK TO INTERACT}', width/2, 413 + 263/2);
  } else if (dialogue1 === 2){
    text('Oh...', width/2, 413 + 263/2);
  } else if (dialogue1 === 3){
    text('How rare. A living soul.', width/2, 413 + 263/2);
  } else if (dialogue1 === 4){
    text('Where did you come from', width/2, 413 + 263/2 - 20);
    text('little one?', width/2, 413 + 263/2 + 20);
  } else if (dialogue1 === 5){
    text('Either way', width/2, 413 + 263/2 - 20);
    text('you should leave this ga...', width/2, 413 + 263/2 + 20);
  } else if (dialogue1 === 6){
    text('I mean...', width/2, 413 + 263/2 - 20);
    text('place...', width/2, 413 + 263/2 + 20);
  } else if (dialogue1 === 7){
    text("It's no longer fit for anyone.", width/2, 413 + 263/2);
  } else if (dialogue1 === 8){
    text('And well, my time has come.', width/2, 413 + 263/2);
  } else if (dialogue1 === 9){
    text('How tiring...', width/2, 413 + 263/2 );
  }
  
  fill('black')
  if (gameOvercount === 0){
    if (dialogue2 === 1 ){
      text('I see...', width/2, 150);
    } else if (dialogue2 === 2){
      text('Dodging my attack on the very first try?', width/2, 150);
    } else if (dialogue2 === 3){
      text('It seems I underestimated you.', width/2, 150);
    } else if (dialogue2 === 4){
      text('Fine...', width/2, 150 - 20);
      text('You win this round.', width/2, 150 + 20);
    } else if (dialogue2 === 5){
      state = "ending" ;
    }
    if (dialogue2 > 0 && dialogue2 < 5){
      fill('white') // FOR SKIP TEXT
      textSize(15);
      text('(Click) To Continue', 625, 706 );
    }
  }
  if (gameOvercount > 0){
    if (dialogue3 === 1){
      text('How pathetic!', width/2, 150);
    } else if (dialogue3 === 2 ){
      text('So you had to restart just to dodge my attack?', width/2, 150);
    } else if (dialogue3 === 3 ){
      text('What a Miserable ANT! ', width/2, 150 - 20);
      text("Who ignores my WARNING!", width/2, 150 + 20);
    } else if (dialogue3 === 4 ){
      text("Go on and STRUGGLE!", width/2, 150);
    } else if (dialogue3 === 5 ){
      text("RUN and ENTERTAIN me!", width/2, 150);
    } else if (dialogue3 === 6){
      state = "ending" ;
    }
    if (dialogue3 > 0 && dialogue2 < 6){
      fill('white') // FOR SKIP TEXT
      textSize(15);
      text('(Click) To Continue', 625, 706 );
    }
  }
}

function mousePressed(){
  if (state === 'preGame'){
    state = 'stageOne';
  } else if (state === 'gameOver' || state === 'ending'){
    // restart // DEL let
    SunY = 200;
    dialogue1 = 0;
    dialogue2 = 0;
    dialogue3 = 0;
    Sunstop = false;
    SunBossY = -350;
    ZoneX = 425;
    ZoneW = 0;
    if (state === 'ending'){gameOvercount = 0;}
    state = 'preGame'
  }
  if (dialogue1 < 10){
    dialogue1 = dialogue1 + 1;
  }
  if (dialogue2 < (4 + 1) && dialogue1 === 10 && SunBossY > 50){ //branch 1
    dialogue2 = dialogue2 + 1;
    
  }
  if (dialogue3 < (5 + 1) && gameOvercount > 0 && dialogue1 === 10 && SunBossY > 50){// branch 2
    dialogue3 = dialogue3 + 1;
  }
}

function keyPressed(){
  if (key === 'Enter' ){
    if (state === 'stageOne'){
      dialogue1 = 10 ;
  } else if (state === 'preGame'){
      state = 'stageOne';
      dialogue1 = 1 ;
  } else if (state === 'gameOver' || state === 'ending'){
      // restart // DEL let
      SunY = 200;
      dialogue1 = 0;
      dialogue2 = 0;
      dialogue3 = 0;
      Sunstop = false;
      SunBossY = -350;
      ZoneX = 425;
      ZoneW = 0;
    if (state === 'ending'){gameOvercount = 0;}
      state = 'preGame'
    }
  }
}
