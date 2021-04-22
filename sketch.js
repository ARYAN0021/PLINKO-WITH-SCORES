const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine,world

var plinkos = [];

var divisions = [];
var divisionHeight=300
var score=0;
var particle;
var count=0;

var gameState ="play";

function preload(){
  
}


function setup() {
  createCanvas(500,780);


  engine = Engine.create();
  world = engine.world;
 
  for(var k = 10;k <= width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 20; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 30; j <=width-50; j=j+50){
    plinkos.push(new Plinko(j,185));
  }

  for(var j = 20; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,295));
  }

  for(var j = 30; j <=width-50; j=j+50){
    plinkos.push(new Plinko(j,395));
  }

  
  


  
  ground = new Ground(240,775,800,10)
  
}

function draw() {
  background("black");
  Engine.update(engine);

  

  for(var k = 0;k < divisions.length; k++){
    divisions[k].display();
  }
  for(var j = 0;j < plinkos.length; j++){
    plinkos[j].display();
  }

if(particle!=null){
  particle.display();

  if(particle.body.position.y>760)
  {
    if (particle.body.position.x < 170){
      score=score+500
      particle=null;
      if ( count >= 5) gameState ="end";      
    }
  }
}
 
if(particle!=null){
  particle.display();

  if(particle.body.position.y>760)
  {
    if (particle.body.position.x < 340){
      score=score+200
      particle=null;
      if ( count>= 5) gameState ="end";      
    }
  }
}
if(particle!=null){
  particle.display();

  if(particle.body.position.y>760)
  {
    if (particle.body.position.x < 510){
      score=score+100
      particle=null;
      if ( count>= 5) gameState ="end";      
    }
  }
}
  ground.display();

  
    
  

textSize(30);
fill ("orange")
text("PLINKO FOX GAME",80,250)
textSize(30);
fill (random(0,255),random(0,255),random(0,255))
text("Score : " + score,20,40)
textSize(35)
text(" 500 ", 12, 550);
text(" 500 ", 90, 550);
text(" 200 ", 170, 550);
text(" 200 ", 250, 550);
text(" 100 ", 330, 550);
text(" 100 ", 410, 550);

  //drawSprites();
}

function mousePressed(){
  if(gameState!=="end"){
    particle=new Particles(mouseX,10,10,10)
    count++
    console.log("fgfg")
  }
}