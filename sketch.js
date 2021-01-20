
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var engine, world
var ground1, tree1, stone1, boy1, mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var launchingForce=100;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground1=new ground(780,680, 1800, 20)

	tree1=new tree(1050,580)



	boy1=new boy(100,600,0,10)
	
	stone1=new stone(150,100,30)

  mango1=new mango(700,300,30);
  mango2=new mango(600,250,30);
	mango3=new mango(500,350,30);
	mango4=new mango(580,350,30);
	mango5=new mango(620,380,30);
	mango6=new mango(450,390,30);
	mango7=new mango(780,350,40);
	//Create the Bodies Here.
	sling1=new sling(stone1.body, {x:30,y:530})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  ground1.display()
  boy1.display()
 
  tree1.display()
  stone1.display()
  mango1.display() 
  mango2.display() 
  mango3.display() 
  mango4.display() 
  mango5.display() 
  mango6.display() 
  mango7.display() 

  sling1.display()
  

  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
 
  
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY})
}

function mouseReleased() {
    sling1.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:235, y:420}) 
	  sling1.attach(stone1.body);
	}
  }

  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
     
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
