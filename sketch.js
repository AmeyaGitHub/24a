const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperObj

function preload(){
	
  }

function setup() {
	createCanvas(1500, 700);
	


	engine = Engine.create();
	world = engine.world;
	paperObj=new paper(600,600,50)
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
paperObj.display()
  groundObject.display();
  dustbinObj.display();

}
function keyPressed(){
if (keyCode===UP_ARROW){
Matter.body.applyForce(paparObj.body,paperObj.body.position,{x:85,y:85})
}
}




