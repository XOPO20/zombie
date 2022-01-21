var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
 
  bgImg = loadImage("assests/bg3.jpg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  



}

function draw() {
  background(0); 





drawSprites();

}
