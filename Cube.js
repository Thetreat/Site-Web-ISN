var pointA, pointB;
var x1 = -150,
  y1 = -150,
  z1 = 10,
  x2 = 200,
  y2 = 200,
  z2 = 10;

function setup() {
  var canvas = createCanvas(601, 601, WEBGL);
  canvas.parent('sketch-holder');
  background(255, 0, 100);
}

function draw() {
  background(200);
  mouseDragged();
  box(300);
}

function mouseDragged() {
  rotateX(radians(-mouseY) * 0.5);
  rotateY(radians(-mouseX) * 0.5);
}