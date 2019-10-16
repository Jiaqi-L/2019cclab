let seekers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < 50; i++) {
    seekers[i] = new Seeker();
  }
}

  function draw() {
  background(100);
  

  for (var i = 0; i < seekers.length; i++) {
    seekers[i].update();
    seekers[i].display();	
  }
  

}

function mouseReleased() {
  for (var i = 0; i < seekers.length; i++) {
    var explode = createVector(random(-width, width), random(-height, height));
    console.log(explode);
    explode.mag(10);
    seekers[i].seek(explode);
  }

}

function Seeker() {

  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-2, 2), random(-2, 2));
  this.acc = createVector(0, 0);
  this.sz = 10;
  this.maxSpeed = random(5, 8);
  this.maxForce = random(0.025, 0.75);
  this.trail = [];

  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.sz, this.sz);

    for (var i = 0; i < this.trail.length; i++) {
      var pos = this.trail[i];

      noStroke();
      fill(200, i);
      ellipse(pos.x, pos.y, this.sz, this.sz);
    }
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    this.x = constrain(this.x, 0, windowWidth);
    this.y = constrain(this.y, 0, windowHeight);

    if (this.trail.length > 100) {
      this.trail.splice(0, 1);
    }

    var v = createVector(this.pos.x, this.pos.y);
    this.trail.push(v);
  }

  }