
let song;
let img;
let x = 851;
let show = false; // change to next page
let songPlayed = false; // Make the song appear once only
let timeStart = 0;
let speed = -5; // img speed here to adjust
let ms;

function preload(){
  song = loadSound('assets/Thomas Theme Song.mp3')
  img = loadImage('assets/Thomas.jpg')
}

function setup() {
  createCanvas(851, 790); // My half window size // 425 395
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
   fill(41, 85, 186);// box 
  rect(225-40, 70, 480, 320); 
  fill(4, 35, 107);//
  rect(225-40, 130, 480, 320); 

    fill(158, 8, 8) // red coat
     ellipse( width/2, height/2 - 50, 420, 420) ;//  

   stroke(32, 32, 36); //add
   strokeWeight(20) ;//
    fill(32, 32, 36)  ;//
    ellipse( width/2, height/2 - 40, 400, 400) ;//
    
    strokeWeight(0) ;//
    fill(79, 79, 79); //add 
    ellipse(425-5, 40 , 130, 75); // ADD top shade
    rect(425 - 70, 38, 130, 200); //add
    fill('BLACK');
    ellipse(425-5, 50 , 130, 80); // ADD top
    rect(425 - 70, 50, 130, 200);
    fill(43, 43,43); //add 
    rect(425 - 70, 50, 130, 10); //add bar

    stroke('grey');
   strokeWeight(20) ;
    fill('black')  ;
    ellipse( width/2, height/2, 400, 400) ;

    fill("red");
    textAlign(CENTER, CENTER);// both height and width
    strokeWeight(0);
//425 395

    fill(181, 80, 80); // shade of red bar
    rect(225-20, 395+143, 440, 60); 

    fill(158, 8, 8);// red bar
    rect(225-20, 395+150, 440, 60);

    fill(79, 79, 79); // button shade
    ellipse(425 - 110, 395+197 ,60, 60);
    ellipse(425 + 110, 395+197 ,60, 60);

    fill('black'); // button
    ellipse(425 - 110, 395+200 ,60, 60);
    ellipse(425 + 110, 395+200 ,60, 60);


    textFont('Verdana');
    textStyle(BOLD);
    textSize(150);
      fill('red')
      text('🕪', width/2, height/2)
/*
    textSize(40);
    


    text('HERE COMES!', width/2, height/2 - 60)
    text('THE!', width/2, height/2 - 10)
      text('CHOO-CHOO!', width/2, height/2  + 40)
     text('TRAIN!', width/2, height/2  + 90)



    fill('BLACK'); // 3. THE BLACK SMOKESTACK 
    rect(425 - 70, 50, 130, 200);

    stroke('grey');  // 4. THE FACE 
   strokeWeight(20) ;
    fill('black')  ;
    ellipse( width/2, height/2, 400, 400) ;

      strokeWeight(0)
      fill(168,168,168) //inside face 
      ellipse( width/2, height/2, 340, 340) ;


      fill('193, 191, 185') //eye
      ellipse( width/2 - 65, height/2 - 25, 80, 80) ;
      ellipse( width/2 + 65, height/2 - 25, 80, 80) ;

      fill('black') //eye
      ellipse( width/2 - 65 -19, height/2 - 25 +5, 40, 40) ;
      ellipse( width/2 + 65 -19, height/2 - 25 +5, 40, 40) ;
      
      fill('white') //eye
      ellipse( width/2 - 65 -5, height/2 - 25 , 10, 10) ;
      ellipse( width/2 + 65 -5, height/2 - 25 , 10, 10) ;
  



  strokeWeight(4);
  line(width/2 - 70, height/2 - 45 - 25, width/2 - 25, height/2 - 40 -25);
  line(width/2 + 70, height/2 - 45 - 25, width/2 + 25, height/2 - 40 -25);

 */

}
