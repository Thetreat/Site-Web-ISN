var cube = function(cube) {
  let pointA,
    pointB,
    img,
    imgloaded,
    x1 = -150,
    y1 = -150,
    z1 = 10,
    x2 = 200,
    y2 = 200,
    z2 = 10;

  cube.setup = function() {
    img = loadImage("../src/HarryPotter.png");
    cube.createCanvas(401, 401, "webgl").parent("Cube");
  };

  cube.draw = function() {
    cube.background(51);
    cube.mouseDragged();
    cube.box(150);
  };
  cube.mouseClicked = function() {
    if (imgloaded) {
      cube.texture(img);
      imgloaded = false;
    } else {
      cube.texture(rgb(0, 0, 0));
      imgloaded = true;
    }
  };
  cube.mouseDragged = function() {
    cube.rotateX(cube.radians(-cube.mouseY) * 0.5);
    cube.rotateY(cube.radians(-cube.mouseX) * 0.5);
  };
};
var Cube = new p5(cube);

var foule = function(flock) {
  let flocks = [],
    boundary,
    perceptionRadius = 100,
    trail = 0.45,
    flockSize = 100,
    cap = flockSize / 50;

  flock.setup = function() {
    colorMode("hsb", 360, 100, 100, 1);
    createCanvas(600, 400).parent("Flock");
    document.getElementById("defaultCanvas2").remove();

    cols = flock.floor(flock.width / 5);
    rows = flock.floor(flock.height / 5);

    boundary = new Rectangle(width / 2, height / 2, width, height);
    for (var i = 0; i < flockSize; i++) {
      flocks.push(new Boid());
    }
  };

  flock.draw = function() {
    let qtree = new QuadTree(boundary, cap);
    for (let boid of flocks) {
      let p = new Point(boid.position.x, boid.position.y, boid);
      qtree.insert(p);
    }

    background(249, 30, 10, trail);

    let a = 1,
      c = 1,
      s = 1;

    for (let boid of flocks) {
      let range = new Circle(
        boid.position.x,
        boid.position.y,
        perceptionRadius
      );
      let localBoids = qtree.query(range);

      boid.flock(localBoids, a, c, s);
      boid.edges();
      boid.update();
      boid.show();
    }
  };
};
var Flock = new p5(foule);
