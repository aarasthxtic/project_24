
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var base;
var side1;
var side2;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper (200,600,70);
ground = new Ground(400 , 680,800,20);
base = new Dustbin (610,660,100,20);
side1 = new Dustbin (550,620,20,100);
side2 = new Dustbin (670,620,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  
  paper.display();
  ground.display();
  base.display();
  side1.display();
  side2.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		 Matter.Body.applyForce(paper.body, paper.body.position,{x:85, y:-85});
	}
}

