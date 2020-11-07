let ball = [];


function setup() {
  cnv = createCanvas(1000, 1000);

  for (let i = 0; i < 300; i++) {
    ball[i] = new Ball(random(width),random(height),random(30, 70),i,ball);
  }
    fill(random(0,255),random(0,255),random(0,255));
}

function draw() {
  background(220);

  let gravity = createVector(0,0.1);
   for (let i = 0; i < ball.length; i++) {
  ball[i].applyForce(gravity);
  ball[i].update();
  ball[i].show();
  ball[i].box();

if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    ball[i].applyForce(wind);
  }
}
}


class Ball{
  constructor(){
    this.pos = createVector(random(width),random(height));
    this.vel = createVector (0,0);
    this.acc = createVector (0,0);
    this.mass = 50;
  }

  applyForce(force) {
    let f = force.copy();
    this.acc.add(f);
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show(){
    ellipse(this.pos.x,this.pos.y,this.mass,this.mass);
  }

  box() {
    if (this.pos.x > width) {
      this.pos.x = width;
      this.vel.x *= -0.3;
    } else if (this.pos.x < 0) {
      this.vel.x *= -0.3;
      this.pos.x = width;
    }
    if (this.pos.y > height) {
      this.vel.y *= -0.3;
      this.pos.y = height;
    }
  }
}
