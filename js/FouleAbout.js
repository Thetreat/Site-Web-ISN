let flock = [];
let boundary;
let perceptionRadius = 100;
let trail = 0.45;
let flockSize = 100;
let cap = flockSize / 50;
let sTotal;

function setup() {
  colorMode(HSB, 360, 100, 100, 1);
  createCanvas(600, 400).parent("Flock");

  cols = floor(width / 5);
  rows = floor(height / 5);

  boundary = new Rectangle(width / 2, height / 2, width, height);
  for (var i = 0; i < flockSize; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  let qtree = new QuadTree(boundary, cap);
  for (let boid of flock) {
    let p = new Point(boid.position.x, boid.position.y, boid);
    qtree.insert(p);
  }

  background(249, 30, 10, trail);

  let a = 1,
    c = 1,
    s = 1;

  for (let boid of flock) {
    let range = new Circle(boid.position.x, boid.position.y, perceptionRadius);
    let localBoids = qtree.query(range);

    boid.flock(localBoids, a, c, s);
    boid.edges();
    boid.update();
    boid.show();
  }
}
