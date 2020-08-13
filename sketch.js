var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 300, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(800, 300,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityX = -3;
  fixedRect.velocityX = +3;

  fixedRect1 = createSprite(600, 300, 50, 80);
  fixedRect1.shapeColor = "pink";
  fixedRect1.debug = true;
}

function draw() {
  background(0,0,0);  

 bounceOff(movingRect,fixedRect);
 if(isTouching(movingRect,fixedRect1)){
  fixedRect1.shapeColor = "yellow";
  movingRect.shapeColor = "brown";
 }else{
  fixedRect1.shapeColor = "pink";
  movingRect.shapeColor = "green";
 }
  drawSprites();
}
