var fixedRect,movingRect
var fixedRect1;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(200,200,80,50);
  fixedRect1 = createSprite(200, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect1.shapeColor = "green";
  movingRect.shapeColor = "blue";
}

function draw() {
  background(0);
  movingRect.x = World.mouseX;
   movingRect.y = World.mouseY; 
   if (isTouching(movingRect,fixedRect)){

    fixedRect.shapeColor = "pink";
    movingRect.shapeColor = "red";
   }else   if(isTouching(movingRect,fixedRect1)){
    fixedRect1.shapeColor = "yellow";
    movingRect.shapeColor = "brown";
   }else{
    fixedRect1.shapeColor = "green";
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "green";
   }
  drawSprites();
}

