
function setup(){
  createCanvas(800, 400); 
  r = 40;
  ballpos = 240;
  score = 0;
}

function draw(){
	background(0,153,0);
	textAlign(CENTER);
	text("Current break = " + score, width/2, 300);
	RedBall();
	YellowBall();
	GreenBall();
	BrownBall();
	BlueBall();
	PinkBall();
	BlackBall();
}

function RedBall(){
  	fill(200,0,0);
  	stroke(200, 0, 0);  
  	ellipse(width/8*1, ballpos, r);
	}

function YellowBall(){
  	fill(200,200,0);  
  	stroke(200,200,0);
  	ellipse(width/8*2, ballpos, r);
	}

function GreenBall(){
  	fill(0,100,0);  
  	stroke(0,100,0);
  	ellipse(width/8*3, ballpos, r);
	}

function BrownBall(){
  	fill(100,50,0);  
  	stroke(100,50,0);
  	ellipse(width/8*4, ballpos, r);
	}

function BlueBall(){
  	fill(0,0,150);
  	stroke(0,0,150);  
  	ellipse(width/8*5, ballpos, r);
	}

function PinkBall(){
  	fill(255,100,178);  
  	stroke(255,100,178);
  	ellipse(width/8*6, ballpos, r);
	}

function BlackBall(){
  	fill(0,0,0);  
  	stroke(0,0,0);
  	ellipse(width/8*7, ballpos, r);
	}

function mousePressed(){
	let red = dist(mouseX, mouseY, width/8, ballpos);
	if(red<r){
		score += 1;
	}
	let yellow = dist(mouseX, mouseY, width/8*2, ballpos);
	if(yellow<r){
		score += 2;
	}
	let green = dist(mouseX, mouseY, width/8*3, ballpos);
	if(green<r){
		score += 3;
	}
	let brown = dist(mouseX, mouseY, width/8*4, ballpos);
	if(brown<r){
		score += 4;
	}
	let blue = dist(mouseX, mouseY, width/8*5, ballpos);
	if(blue<r){
		score += 5;
	}
	let pink = dist(mouseX, mouseY, width/8*6, ballpos);
	if(pink<r){
		score += 6;
	}
	let black = dist(mouseX, mouseY, width/8*7, ballpos);
	if(black<r){
		score += 7;
	}
}
	
