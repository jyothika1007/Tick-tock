

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 

 angleMode(DEGREES);
}

function draw() {
  background(0);  

  translate(200,200);
  rotate(-9);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

//drawing the seconds line
  push();
  rotate(scAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //drawing the minute line
  push();
  rotate(mnAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  
//drawing the hour line
  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,50,0);
  pop();
 
  strokeWeight(10);
  noFill();
  stroke("blue");
  arc(0,0,300,300,0,scAngle);

  stroke("green");
  arc(0,0,280,280,0,mnAngle);

  stroke("red");
  arc(0,0,260,260,0,hrAngle);

  drawSprites();
}