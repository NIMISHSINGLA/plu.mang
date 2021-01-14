
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gground;
var ttree;
var sstone;
var bboy;
var mango1,mango2,mango3,mango4,mango5,mango6;
var mango7,mango8,mango9;
var chain1;

function preload()
{
	
}

function setup() {
	createCanvas(850, 625);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     gground = new ground(600,height,1200,20);
     ttree = new tree(640,405);
     sstone = new stone();
     bboy = new boy(150,550)
     mango1 = new mango(650,230,50)
     mango2 = new mango(700,240,50)
     mango3 = new mango(750,280,50)
     mango4 = new mango(600,240,50)
     mango5 = new mango(550,290,50)
     mango6 = new mango(610,310,50)
     mango7 = new mango(680,320,50)
     mango8 = new mango(560,360,50)
     mango9 = new mango(770,350,40)
     chain1 = new chain(sstone.body,{x:110,y:500});
     
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");


  

  gground.display();
  ttree.display();
  bboy.display();
  sstone.display();
  mango1.display();
  mango2.display();
  mango3 .display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display()
  mango9.display();
  chain1.display();

 

  detectCollision(sstone,mango1);
  detectCollision(sstone,mango2);
  detectCollision(sstone,mango3);
  detectCollision(sstone,mango4);
  detectCollision(sstone,mango5);
  detectCollision(sstone,mango6);
  detectCollision(sstone,mango7);
  detectCollision(sstone,mango8);
  detectCollision(sstone,mango9);

  
  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(sstone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
   chain1.fly()
}



function detectCollision(Nstone,Nmango){
mangoBodyPosition = Nmango.body.position;
 stoneBodyPosition = Nstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=Nmango.r+Nstone.r){
    Matter.Body.setStatic(Nmango.body,false);
  }



}




