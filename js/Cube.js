var cube = function(cube) {
  let pointA,
    pointB,
    x1 = -150,
    y1 = -150,
    z1 = 10,
    x2 = 200,
    y2 = 200,
    z2 = 10;

  cube.setup = function() {
    var canvas = createCanvas(401, 401, WEBGL);
    canvas.parent("Cube");
  };

  cube.draw = function() {
    background(51);
    mouseDragged();
    box(150);
  };

  cube.mouseDragged = function() {
    rotateX(radians(-mouseY) * 0.5);
    rotateY(radians(-mouseX) * 0.5);
  };
};
var Cube  = new p5(cube);
