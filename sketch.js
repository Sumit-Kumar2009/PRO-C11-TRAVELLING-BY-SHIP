var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
//Choose the correct option by uncommenting the right line to load the animation for ship.
  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");

}

function setup(){
  createCanvas(1600,700);
  background("blue");

  // Moving background
  sea=createSprite(200,200);
  sea.addImage(seaImg);
  sea.width=15;
  sea.height=0.25;

  
  ship = createSprite(200,300,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.35;
  
}

function draw() {
  background(0);
  
//Uncomment the correct line to make the background move to create a forward moving effect for the boat.
  sea.velocityX = -3;
  

  
    
  drawSprites();
}
