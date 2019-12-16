let x = 200;
let y = 200;
let FrogCanvas;

function setup() {
  createCanvas(400, 400);
  FrogCanvas = createGraphics(400, 400);
  FrogCanvas.clear();
  background(0);
}

function draw() {
  
  background(0);
  x += random(-5, 5);
  y += random(-5, 5);
	
  if (mouseIsPressed) {
    FrogCanvas.fill(47,157,39);
    FrogCanvas.noStroke();
    FrogCanvas.ellipse(mouseX, mouseY, 60, 60);
  }
  
  image(FrogCanvas, 0, 0);
    fill(255, 0, 0);
  stroke(255);
  rectMode(CENTER);
  rect(x, y, 20, 20);

  //frogggg.jpg
  
}
