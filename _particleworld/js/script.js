// CCLab Mini Project - 9.R Particle World Template
// Decide the initial number of particles.
let NUM_OF_PARTICLES = 2000;
let particles = [];
let particleR = 20;
function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");
  angleMode(DEGREES)
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(i, i % 50 + 1);
  }
}

function draw() {
  background(0);
  if (mouseIsPressed) {
    particleR -= 0.05
  }
  if (particleR <= 0) {
    particleR = 20;
  }

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }
}

class Particle {
  // constructor function
  constructor(count, layer) {
    // properties (variables): particle's characteristics
    this.layer = layer;
    this.count = count;
    this.x = width / 2;
    this.y = height / 2;
    this.dia = 1;
    // this.speedX = particleR * sin(frameCount % 360);
    // this.speedY = particleR * cos(frameCount % 360);

  }
  // methods (functions): particle's behaviors
  update() {
    // this.x += this.speedX;
    // this.y += this.speedY;
    console.log(this.count ^ 0.1)
    this.x = width / 2 + sin(frameCount % 360 + this.count * 2) * (this.count ^ 0.1) / particleR;
    this.y = height / 2 + cos(frameCount % 360 + this.count * 2) * (this.count ^ 0.1) / particleR;
    // stroke(255);
    // circle(this.x + 10 * sin(frameCount % 360), this.y + 10 * cos(frameCount % 360), 1)
  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    // stroke(255);
    noStroke();
    fill(0 + 255 * this.count * 0.001, 255, 255, this.count * 2)
    circle(0, 0, 1.2);

    pop();
  }
}
