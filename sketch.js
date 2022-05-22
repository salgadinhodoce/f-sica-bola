
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var bodies;
var world;
var bola;
var retangulo;
var parede1;
var parede2;




function setup() {
	createCanvas(600,600);


	engine = Engine.create();
	world = engine.world;

	var propriedadesdabola={


	frictionAir:0.02,
	density:1,
	restitution:2
	}

	var propriedadesdoretangulo={

	isStatic:true
 		
	}

    bola=Bodies.circle(100,200,20,propriedadesdabola);
	World.add(world,bola);

	retangulo=Bodies.rectangle(200,550,800,10,propriedadesdoretangulo);
	World.add(world,retangulo);

	var propriedadesdaparede1={

		isStatic:true
	
	}

	var propriedadesdaparede2={

		isStatic:true
	
	}
	
	

	parede1=Bodies.rectangle(400,485,20,120,propriedadesdaparede1)
	World.add(world,parede1)

	parede2=Bodies.rectangle(500,485,20,120,propriedadesdaparede2)
	World.add(world,parede2)


	


    


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  

  


  ellipse(bola.position.x,bola.position.y,20);
  rect(retangulo.position.x,retangulo.position.y,800,10)
  rect(parede1.position.x,parede1.position.y,20,120)
  rect(parede2.position.x,parede2.position.y,20,120)

}



function keyPressed(){

if(keyCode===UP_ARROW){

Matter.Body.applyForce(bola,{x:0,y:0},{x:5,y:-5})



}

if(keyCode===LEFT_ARROW){


Matter.Body.applyForce(bola,{x:0,y:0},{x:-5,y:-5})
	
}

}