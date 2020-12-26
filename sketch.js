const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player,web
var Score=0;


function preload(){
  usa = loadImage("World.jpg")

}

function setup() {
 
  createCanvas(windowWidth,windowHeight);
 

  engine = Engine.create();
  world = engine.world;

  player = new Bananaman(width/2,height/2)

  web = new Web(player.body,{x:player.body.position.x,y:player.body.position.y})

  roof = newWall(400,0,100000,height*0.01);

  base1 = newWall(400,height*1.5,100000,height*0.1)

  base = newWall(width/5,height*0.75,width,height*0.1)

 
  wall =newWall(0,height/2,100,height*5)

  for(let i =1;i<500;i+=2){
    newWall(i*200+random(200,400),random(height*2/3,height*4/5),random(100,300),random(50,height/5))
  }
  
  for(let i =1;i<500;i+=2){
    newWall(i*200+random(200,400),50,random(height*0.1,height*0.3),random(height*0.05,height*0.15))
  }

  web.fly()

  lose =new GameLost();
}
var gameState = 0

function draw() {
  
  background(usa,width*5,height); 

  image(usa,camera.position.x*18,height/2, width, height) 
  
  Engine.update(engine);
  



  player.display();
  web.display()
 drawWalls()
  drawSprites();



 
    camera.position.x = player.body.position.x;
  
  MyScore()
  if(gameState==1){
    lose.display()
  }
  
  if(player.body.position.y>height){
    gameState=1
  }
}




function MyScore(){
  push()
  translate((camera.position.x - width/2),(camera.position.y - height/2))
  if(player.body.position.x>Score){Score = player.body.position.x}
   
   textSize(30)
  textAlign(CENTER);
  textStyle(BOLD);
  fill("Orange")
  text("Score: "+int(Score/690),width/1.2,height/1.04)

  fill("Red")
  textSize(30)
  textStyle(BOLD);
  text("Click on the Block to Swing there",width/3.5,height*0.90)

  fill("Yellow");
  textSize(50);
  textStyle(BOLD);
  text("AKSHAY'S BANANA MAN 2020",700,70);
  pop()
}

function mouseClicked(){

  if(gameState==0)
 { for(let i =0;i<walls.length;i++) {
    if(walls[i].isCliked()==true){
      web.join(player.body)
      web.setTarget(mouseX+(camera.position.x - width/2),mouseY+(camera.position.y - height/2))

    }
  }
  }
}

function  keyPressed(){

  if(gameState==0)
  {if(keyCode == 40){
    web.fly()
  }
  
}
}


function move(pos){

  switch (pos) {
    case "left":
      Matter.Body.applyForce(player.body, player.body.position, {x:-55,y:0})      
      break;
    case "right":
      Matter.Body.applyForce(player.body, player.body.position, {x:55,y:0})      
      break;
    case "up":
      if(player.body.velocity.y<5){
        Matter.Body.applyForce(player.body, player.body.position, {x:0,y:-65})
      }
      else if(player.body.velocity.y>5){
        Matter.Body.applyForce(player.body, player.body.position, {x:0,y:-30})
      }    
      break;  
  
    default:
      break;
  }
}


