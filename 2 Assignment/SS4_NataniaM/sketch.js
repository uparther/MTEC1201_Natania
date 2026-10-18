/* Name: Natania Ma
Title: Choo-Choo Train Countdown Animation

Concept: 
Using millis() to build a countdown.
My first draft's color palettes (blue, grey and black color) reminds me of Thomas the Tank Engine， 
therefore making whole theme inspiration by the cartoon.
Attention: Pictures and Sound are all from **Thomas the Tank Engine**.

Instructions:
Click anywhere on the canvas to start the count down.
Then just wait for the countdown ends.
--Notice:
  The songs will play for 25 seconds.
  You need to refresh the whole page for retry.
*/

let song;
let img;
let x = 851;
let show = false; // Show the next page
let songPlayed = false; // Make the song appear once only
let timeStart = 0;
let speed = -5; // img speed here to adjust
let ms;

function preload(){
  song = loadSound('assets/Thomas Theme Song.mp3')
  img = loadImage('assets/Thomas.jpg')
}

function setup() {
  createCanvas(851, 790); // half window size // 425 395
}

function draw() {
  background(4, 55, 194); // blue

  fill("red");
  textAlign(CENTER, CENTER);// both height and width
  strokeWeight(0);
  textSize(125);
  textFont('Verdana');
  textStyle(BOLD);

  // after click me 
  if (show === true){ 
// THE WHOLE TRAIN ITSELF -- START
    fill(41, 85, 186);// BOX SHADE LIGHT BLUE
    rect(225-40, 70, 480, 320); 
    fill(4, 35, 107);// BOX BLUE
    rect(225-40, 130, 480, 320); 

    fill(158, 8, 8) // red coat FOR THE FACE
    ellipse( width/2, height/2 - 50, 420, 420) ;

    stroke(32, 32, 36); // SHADE FOR THE FACE
    strokeWeight(20) ;
    fill(32, 32, 36)  ; // DARK GREY
    ellipse( width/2, height/2 - 40, 400, 400) ;

    strokeWeight(0) ; // TURN BACK TO 0
    fill(79, 79, 79); // GREY
    ellipse(425-5, 43 , 130, 75); // ADD PIPE CAP shade
    
    fill('BLACK');
    ellipse(425-5, 50 , 130, 80); // PIPE CAP
    rect(425 - 70, 50, 130, 200);  // PIPE
    
    fill(43, 43, 43); //PIPE BAR (boolean)
    rect(425 - 70, 50, 130, 5); 

    stroke('grey'); // TIMER FACE
    strokeWeight(20) ;
    fill('black')  ;
    ellipse( width/2, height/2, 400, 400) ;

    strokeWeight(0) ;// TURN BACK TO 0

    fill(181, 80, 80); // shade of red bar
    rect(225-20, 395+143, 440, 60); 

    fill(158, 8, 8); // red bar
    rect(225-20, 395+150, 440, 60);

    fill(79, 79, 79); // button shade
    ellipse(425 - 110, 395+197 ,60, 60);
    ellipse(425 + 110, 395+197 ,60, 60);

    fill('black'); // button
    ellipse(425 - 110, 395+200 ,60, 60);
    ellipse(425 + 110, 395+200 ,60, 60);

    fill("red"); // TEXT INSIDE THE TRAIN
    textAlign(CENTER, CENTER);// both height and width
    strokeWeight(0);
    textSize(125);
    textFont('Verdana');
    textStyle(BOLD);
// THE WHOLE TRAIN ITSELF -- END 

    if (songPlayed === false){ //Strictly equivalent to ===
    song.play(); // delete
    songPlayed = true;
    }

    let ms = millis() - timeStart; // repeat continuously

    if(ms > 5000){ // img appear after 5 sec 
      textSize(150);
      text('🕪', width/2, height/2)

      imageMode(CENTER)
      image(img, x, height / 2 , 300, 300)

      //Bounceing the img
      x = x + speed;
      if (x > 851 || x < 0 ){ 
      speed = speed * -1;
      }
    }
    else if (ms > 4000){
      textSize(40);
      text('HERE COMES!', width/2, height/2 - 60);
      text('THE!', width/2, height/2 - 10);
      text('CHOO-CHOO!', width/2, height/2  + 40);
      text('TRAIN!', width/2, height/2  + 90);
    }
    else if (ms > 3500) { 
    textSize(40);
    text('HERE COMES!', width/2, height/2 - 60);
    text('HERE COMES!', width/2, height/2 - 60);
    text('THE!', width/2, height/2 - 10);
    text('CHOO-CHOO!', width/2, height/2  + 40);
  }   
    else if (ms > 3000) { 
    textSize(40);
    text('HERE COMES!', width/2, height/2 - 60);
    text('THE!', width/2, height/2 - 10);
    } 
    else if (ms > 2000) {
    text('1', width/2, height/2); 
  } 
    else if (ms > 1000) {
    text('2', width/2, height/2);
  } 
    else { 
    text('3', width/2, height/2); 
  }

  }
    else {
    text('click me', width/2, height/2); // NEED TO CLICK THE WEB FOR THE SOUND 
  }
  
}

function mousePressed(){
  if (show === false){
  show = true;
  timeStart = millis();
  }
}