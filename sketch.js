var wall, thickness ;
var speed,weight,bullet;
var bulletRightEdge,wallLeftEdge,bulletLeftEdge;

function setup() {
  createCanvas(1600,400);
  
  speed = random(100,200);
  weight = random(30,52);

   thickness = random(22,83);

  bullet = createSprite(50, 200, 10, 50);
  wall = createSprite(1200, 200,  thickness , height/2);
  
  bullet.velocityX = speed;

  bullet.shapeColor = color(255);
  wall.shapeColor = color(80,80,80);

  
  
}

function draw() {
  background("green"); 

  if (hasCollided(bullet,wall)){
 
    bullet.velocityX = 0;
    var damage = (0.5 * bulletWeight * bulletSpeed * bulletSpeed) / ( thickness *  thickness * thickness);
  if (damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }
  
  if (damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }

  }

  
  drawSprites();
}

function hasCollided(lbullet, lwall){
 
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge >= bulletLeftEdge){
    return true;
  }
 
 return false;
}


