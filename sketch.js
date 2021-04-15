var  h1,h2,h3,s1,s2,s3,s4,s5;
var g1,g2,g3,g4,g5
var gameState
gameState = 0
function preload(){
  h1 = loadImage("main1.png") 
h2 = loadImage("main2.png")
s1 = loadAnimation("space1.png","spaceship4.png")
s2 = loadAnimation("spaceship1.png")
s3 = loadImage("al1.jpg")
s4 = loadImage("al2.jpg")


}
function setup() {

  createCanvas(displayWidth,displayHeight);
  human1 = createSprite(displayWidth/5,displayHeight/2+100 );
  human1.addImage(h1)
  human1.scale = 0.5
  g2 = createSprite(displayWidth,displayHeight/9)
  g2.addAnimation("abc",s1)
  g2.scale = 0.25

  g2.setVelocity(-2,4)
  g2.addAnimation("gfd",s2)
  g3 = createSprite(displayWidth/2+300, displayHeight/2+300,displayWidth,20)
//g3.visible = false
g4 = createSprite(displayWidth/2+280, displayHeight/2+280,displayWidth,20)
g4.addImage("fghd",s3)
g4.scale = 0.25
g5 = createSprite(displayWidth/2+100, displayHeight/2+280,displayWidth,20)
g5.addImage("fgh",s4)
g5.scale = 0.15
g4.visible = false
g5.visible = false
}

function draw() {
  background(0);  
  
  if(gameState == 0){
camera.position.x = human1.x

  if(g2.isTouching(g3)){
    g2.setVelocity(0,0)
    g2.changeAnimation("gfd",s2)
   human1.setVelocity(-3,0)
   g4.visible = true
   g4.setVelocity(-5,0)
   
  
  
   g5.visible = true
   g5.setVelocity(-5,0)

  }if(human1.isTouching(g2)){
    human1.setVelocity(0,0)
   
  }
  if(human1.isTouching(g2)){
    human1.setVelocity(0,0)
    

  }
  
}
  drawSprites();
}