var fixed,moving,green,blue;
function setup() 
{
  createCanvas(800,400);
  fixed=createSprite(100, 200, 50, 50);
  fixed.shapeColor="red";
  moving=createSprite(100, 400, 40, 35);
  moving.shapeColor="red";
  green=createSprite(350, 250, 50, 50);
  green.shapeColor="green";
  blue=createSprite(300, 200, 40, 35);
  blue.shapeColor="blue";
  moving.velocityY=-2;
  fixed.velocityY=2;
  fixed.debug=true;
  moving.debug=true;
}

function draw() 
{
  background(0,0,0);
  //moving.x=World.mouseX;
  //moving.y=World.mouseY;
  blue.x=World.mouseX;
  blue.y=World.mouseY;

console.log(fixed.x-moving.x);

bounceOff(moving,fixed);
 if(isTouching(green,blue))
 {
   green.shapeColor="yellow";
   blue.shapeColor="purple";
 }
 else
 {
  green.shapeColor="green";
  blue.shapeColor="blue";
 }
  drawSprites();
}

