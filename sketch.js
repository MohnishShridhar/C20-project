var movingRect;

function setup() {
  createCanvas(800,400);
  fill("red");
  movingRect= createSprite(400, 200, 80, 30);
  movingRect.draw= function(){
    ellipse(0, 0, 40, 40);
  }
}

function draw() {
  background(0, 0, 0);
  
  movingRect.x= World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x> 600 && movingRect.y>200){
    background("yellow")
  }
  if(movingRect.x> 600 && movingRect.y<200){
    background("orange")
  }


  if(movingRect.x< 600 && movingRect.x>400 && movingRect.y>200){
    background("red")
  }
  if(movingRect.x< 600 && movingRect.x>400 && movingRect.y<200){
    background("maroon")
  }


  if(movingRect.x< 200 && movingRect.y>200){
    background("blue")
  }
  if(movingRect.x< 200 && movingRect.y<200){
    background("green")
  }


  if(movingRect.x< 400 && movingRect.x>200 && movingRect.y>200){
    background("pink")
  }
  if(movingRect.x< 400 && movingRect.x>200 && movingRect.y<200){
    background("purple")
  }
  

  

  drawSprites();
}