var pointA, pointB;
var x1 = -150,
  y1 = -150,
  z1 = 10,
  x2 = 200,
  y2 = 200,
  z2 = 10;

function setup() {
  var canvas = createCanvas(401, 401, WEBGL);
  canvas.parent("Cube");
}

function draw() {
  background(51);
  mouseDragged();
  box(150);
}

function mouseDragged() {
  rotateX(radians(-mouseY) * 0.5);
  rotateY(radians(-mouseX) * 0.5);
}
