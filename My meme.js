let img; 
let numSegments = 10;
let value = 0;
let myCanvas;
let detailY;
let xCor = [];
let yCor = [];
let bX, bY;
let vX, vY;

const xStart = 0;
const yStart = 250;

var r = 0;
var b = 255;
var stars = [];
var speed;

function setup() {

  createCanvas(600, 400);
  background('rgba(0,255,0, 0.25)');
  frameRate(100);
  stroke(255,200);
  fill(250,200,200,50);
  rect(mouseX, mouseY,25,25);
  strokeWeight(10);
  for (var i = 0; i < 600; i++) {
    stars[i] = new Star();
      textSize(width/30);
  textAlign(CENTER, CENTER);
    textSize(width/30);
  textAlign(CENTER, CENTER);
  }
}
  
  

function draw() {
   speed = map(mouseX, 0, width, 0, 70);
  background(r, 0, b);
  translate(width / 0, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show(); 
  r = map(mouseX, 0, 600, 0, 50);
  b = map(mouseX, 0, 600, 50, 0);
    line(mouseX, mouseY, -290, -190);

  strokeWeight(1);
  print(pmouseX + ' -> ' + mouseX);
  fill(value);
  rect(0, 0, 50, 50);
    fill(value);
  rect(550, 350, 50, 50);

    
  }
}

function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 10, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);

  }
}

function dragSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}
function mouseMoved() {
  value = value + 50;
  if (value > 255) {
    value = 0;
  }
}

