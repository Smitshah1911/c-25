
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
paper = new paper(400,400,50,50);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
  
  drawSprites();
 
}



