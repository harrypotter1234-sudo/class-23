const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,BOX2,ground123;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    BOX2 = new Box(220,200,50,50);
ground123 = new Ground();
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   BOX2.display();
   ground123.display();
}