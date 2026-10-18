let ms;
let song;
let img;
let x = 851;
let songPlayed = false; // Make the song appear once only
let speed = -3; // img speed

function preload(){
  song = loadSound('assets/Thomas Theme Song.mp3')
  img = loadImage('assets/Thomas.jpg')
}

function setup() {
  createCanvas(851, 790); // My half window size
}

function draw() {
  background('blue');

  stroke('grey')
  strokeWeight(20) 
  fill('black')  
  ellipse( width/2, height/2, 400, 400)

  fill("red")
  textAlign(CENTER)
  strokeWeight(0)
  textSize(50)
  textFont('new times roman')

  text('12', width/2, height/2 - 150 + 25)
  text('6', width/2, height/2 + 150 + 10)

  text('3', width/2 + 150, height/2 + 20)
  text('9', width/2 - 150, height/2 + 20)


  ellipse( width/2, height/2, 25, 25)

  strokeWeight(20)
 
  ms = millis() // repeat continuously
  
   if (ms > 3000) { 
    stroke('purple');
    line(width/2, height/2, 425 - 95 , height/2); // left

    if(ms > 8000){ // img appear after 5  sec (3+5=8)
      imageMode(CENTER)
      image(img, x, height / 2 , 300, 300)
      //Bounceing the img
      x = x + speed;
      if (x > 851 || x < 0 ){ 
      speed = speed * -1
      }
    }

    if (songPlayed === false){ //Strictly equivalent to ===
    song.play();
    songPlayed = true;
    }
  } 
  else if (ms > 2000) {
    stroke('blue');
    line(width/2, height/2, width/2, 300 + 95 * 2); // bottom
  } 
  else if (ms > 1000) {
    stroke('green');
    line(width/2, height/2, 425 + 95, height/2); // right
  } 
  else { 
    stroke('yellow');
    line(width/2, height/2, width/2, 300); // top
  }
}
