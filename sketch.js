var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="green"
  movingRect=createSprite(400, 200, 80, 50);
  movingRect.shapeColor="green"
}

function draw() {
  background(255,255,255);  
movingRect.y= World.mouseY;
movingRect.x= World.mouseX;
console.log(movingRect.x-fixedRect.x)

if(movingRect.x-fixedRect.x <fixedRect.width/2 + movingRect.width/2 && fixedRect.x-movingRect.x <fixedRect.width/2 + movingRect.width/2){
  fixedRect.shapeColor="red"
  movingRect.shapeColor="red"
}
else{
  fixedRect.shapeColor="green"
  movingRect.shapeColor="green"
}

  drawSprites();
}