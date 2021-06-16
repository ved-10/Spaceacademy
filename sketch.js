var bg;
var iss,issImg;
var shuttle,shuttleStill,shuttleLeft,shuttleRight,shuttleUp;
var scott,scottImg , mesageImg,mesage;
function preload(){

  
  
  bg = loadImage("spacebg.jpg")
  issImg = loadImage("iss.png");

  shuttleStill = loadImage("spacecraft1.png");
  shuttleUp = loadImage("spacecraft2.png");
  shuttleLeft = loadImage("spacecraft3.png");
  shuttleRight = loadImage("spacecraft4.png");
  
scottImg = loadImage("scottkelly.png")
mesageImg = loadImage("mesage.png")


}

function setup() {

  createCanvas(displayWidth,displayHeight);

  iss = createSprite(400, 150, 50, 50);
  iss.addImage("iss",issImg);
  iss.scale = 2
  //iss.debug = true;
  iss.setCollider("rectangle",-1,20,20,20)

  shuttle = createSprite(1200,700,20,20);
  shuttle.addImage("still",shuttleStill);
  shuttle.addImage("up",shuttleUp);
  shuttle.addImage("left",shuttleLeft);
  shuttle.addImage("right",shuttleRight);
  shuttle.scale = 0.3;
  //shuttle.debug = true;
  shuttle.setCollider("rectangle",0,-200,50,20);



scott = createSprite(1250,190,50,50)
scott.addImage("scott",scottImg)


mesage = createSprite(1000,190,50,50);
mesage.addImage("mesage",mesageImg);


}

function draw() {
  background(bg);  

  

  if(keyDown("up")){
    shuttle.velocityY = -3;
    shuttle.changeAnimation("up",shuttleUp);
    
  }else{
    shuttle.velocityY = 0;
    shuttle.changeAnimation("still",shuttleStill);
    
  }
  
  if(keyDown("left")){
    shuttle.velocityX = -3;
    shuttle.changeAnimation("left",shuttleLeft);
  }else{
    shuttle.velocityX = 0;
  }

  if(keyDown("right")){
    shuttle.velocityX = 3;
    shuttle.changeAnimation("right",shuttleRight);
  }

  if(keyDown("down")){
    shuttle.velocityY = 3;
    shuttle.changeAnimation("down",shuttleUp);
  }


  if(shuttle.isTouching(iss)){
    shuttle.velocityX = 0;
    shuttle.velocityY = 0;
    shuttle.changeAnimation("still",shuttleStill);
      
  }

  
  



  drawSprites();

  if(shuttle.isTouching(iss)){
    stroke("blue");
    strokeWeight(15);
    fill("white");
    textSize(55);
    text("Docking Successful !",750,220);
  }

}