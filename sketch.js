var bullet,speed,weight;
var wall,thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  wieght=random(400,1500);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 40, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);

  //if(hasCollided(bullet,wall))
  //{
  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;

  var damage = 0.5 * wieght * speed * speed/thickness*thickness*thickness;
  if(damage > 10){
    wall.shapeColor = color(255,0,0);
  }
  if(damage < 10){
    bullet.shapeColor = color(0,255,0);
  }
  
}  
  drawSprites();
}

//function hasCollided(1bullet,1wall){
  //bulletRightEdge=1bullet.x+1bullet.width;
  //wallLeftEdge=1wall.x;
  //if(bulletRightEdge>=wallLeftEdge)
  //{
   // return true;
  //}
  //return false;
//}