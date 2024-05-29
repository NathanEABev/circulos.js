var cor;
var cx
var cy;

function setup() {
  createCanvas(400, 400);
  background(color(random(0, 100), 0, 0));
  cor = color(random(100, 255), random(0, 255), random(0, 255));
  cx = [0, 0, 0];
  cy = [random(height), random(height), random(height)]
}

function draw() {
  fill(cor);
  for(let contador in cx) {
  circle(cx[0], cy[0], 50);
  circle(cx[1], cy[1], 50);
  circle(cx[2], cy[2], 50);
    
  if(cx[contador] >= width){
  cx[contador] = 0;
  cy[contador] = random(height);
}

  }
  
  cx[0]+= random(0, 3)
  cx[1]+= random(0, 3)
  cx[2]+= random(0, 3)
  
  cy[0]+= random(-3, 3)
  cy[1]+= random(-3, 3)
  cy[2]+= random(-3, 3)
  

  if(mouseIsPressed){
      cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
    }
}