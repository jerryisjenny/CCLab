let particles = [];


function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");



}

function draw() {
  //
  background(0);
  // for (let i = 0; i < x.length; i++) {
  //   x[i] += xSpeed[i];
  //   y[i] += ySpeed[i];
  //   circle(x[i], y[i], dia[i]);
  // }

  let x = mouseX;
  let y = mouseY;
  let dia = random(20, 30);
  let ball = new Ball(x, y, dia);
  particles.push(ball);
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.display();

  }

}

class Ball {
  constructor(x, y, dia) {
    this.x = x
    this.y = y
    this.dia = random(20, 30)
    this.xSpeed = random(-2, 2)
    this.ySpeed = random(-2, 2)
  }
  move() {
    this.x += this.xSpeed
    this.y += this.ySpeed
  }
  display() {
    push();
    translate(this.x, this.y);
    circle(0, 0, this.dia);
    pop();
  }
}