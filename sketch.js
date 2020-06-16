var fixedRect, movingRect;

function setup() {
  createCanvas(400, 400);
  fixedRect = createSprite(300,200,25,40);
  movingRect = createSprite(100, 200, 40, 25);

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "blue";

  movingRect.velocityX = 3;
}

//Remember: m.x - f.x < f.w/2 + m.w/2

function bounceOff(object1, object2){
  if(object1.x - object2.x <= object1.width/2 + object2.width/2 &&
    object2.x - object1.x <= object1.width/2 + object2.width/2 &&
    object1.y - object2.y <= object1.height/2 + object2.height/2 &&
    object2.y - object1.y <= object1.height/2 + object2.height/2){
      object1.velocityX *= -1;
      object1.velocityY *= -1;
  }
}

function bounce(object1, object2){
  if(object1.x - object2.x <= object1.width/2 + object2.width/2 &&
    object2.x - object1.x <= object1.width/2 + object2.width/2 &&
    object1.y - object2.y <= object1.height/2 + object2.height/2 &&
    object2.y - object1.y <= object1.height/2 + object2.height/2){
      object2.velocityX = object1.velocityX;
      object2.velocityY = object1.velocityY;
      object1.velocityX *= -1;
      object1.velocityY *= -1;
  }
}

function collide(object1, object2){
  if(object1.x - object2.x <= object1.width/2 + object2.width/2 &&
    object2.x - object1.x <= object1.width/2 + object2.width/2 &&
    object1.y - object2.y <= object1.height/2 + object2.height/2 &&
    object2.y - object1.y <= object1.height/2 + object2.height/2){
      object1.velocityX = 0;
      object1.velocityY = 0;
  }
}

function draw() {
  background(220);
  drawSprites();

  collide(movingRect, fixedRect);
}