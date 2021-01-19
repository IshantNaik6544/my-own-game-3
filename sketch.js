var carlo,carloimage;
var andy,andyimage;
var mountain,mountainimage;
var bg,bgimage;
var ground;
var volcano,volcanoimage;

function preload(){
 carloimage=loadAnimation("carlo.gif")   
 bgimage=loadImage("background3.jpg") 
 mountainimage=loadImage("mountain3.png")      
 volcano=loadAnimattion("volcano2.gif")          
 
}

function setup() {
  createCanvas(800,400);
  bg=createSprite(400,200)
  bg.addImage(bgimage)
  bg.sc
carlo=createSprite(150,270)
carlo.scale=0.40
carlo.addAnimation("running",carloimage)
ground=createSprite(400,350,800,20)



}





function draw() {
  
  background(0);
  
  drawSprites(); 
  fill ("white")
 text(mouseX+","+mouseY,mouseX,mouseY)
 if(keyDown("space") && carlo.y >= 159) {
  carlo.velocityY = -12;}
  carlo.velocityY = carlo.velocityY + 0.8
  carlo.collide(ground)
  spawnmountains()
}

function spawnmountains(){
if(frameCount%400===0){
mountain=createSprite(800,320,10,10)
mountain.addImage(mountainimage)
mountain.velocityX=-3
mountain.scale=0.09
}
}
if(frameCount%81===0){
volcano=createSprite(800,320,10,10)
volcano.addAnimation(volcano)
volcano.velocityX=-3
volcano.scale=0.09

}


