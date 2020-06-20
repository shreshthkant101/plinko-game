const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var peg1,peg2,peg3,peg4,peg8,peg9,peg10;
var b;
var balls = [];
var x;
var particle;
function setup(){
    var canvas = createCanvas(700,680);
    engine = Engine.create();
    world = engine.world;   
    peg1 = new peg(100,150,20);
    peg2 = new peg(200,150,20);
    peg3 = new peg(300,150,20);
    peg4 = new peg(400,150,20);
    peg5 = new peg(500,150,20);
    peg6 = new peg(600,150,20);

    peg7 = new peg(100,250,20);
    peg8 = new peg(200,250,20);
    peg9 = new peg(300,250,20);
    peg10 = new peg(400,250,20);
    peg11 = new peg(500,250,20);
    peg12 = new peg(600,250,20);

    peg13 = new peg(100,350,20);
    peg14= new peg(200,350,20);
    peg15 = new peg(300,350,20);
    peg16 = new peg(400,350,20);
    peg17 = new peg(500,350,20);
    peg18 = new peg(600,350,20);

    b1 = new bar(150,600,20,200);
    b2 = new bar(250,600,20,200);
    b3 = new bar(350,600,20,200);
    b4 = new bar(450,600,20,200);
    b5 = new bar(580,600,20,200);
    b6 = new bar(10,600,20,200);
    b7 = new bar(685,600,20,200);

    ground = new Ground(350,670,700,20);
   
    
}
function draw(){
    background(0);
  
    Engine.update(engine);
    peg1.display();
    peg2.display();
    peg3.display();
    peg4.display();
    peg5.display();
    peg6.display();

    peg7.display();
    peg8.display();
    peg9.display();
    peg10.display();
    peg11.display();
    peg12.display();

    peg13.display();
    peg14.display();
    peg15.display();
    peg16.display();
    peg17.display();
    peg18.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();

    ground.display();   
    if(frameCount % 60 == 0){
        balls.push(new ball(random(0,700),10,10));
    }
   for(var j = 0;j<balls.length;j++){
       balls[j].display();
   }
}