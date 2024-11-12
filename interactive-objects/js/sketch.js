let particles = [];
let button;

function preload() {
  sound = loadSound("assets/beat.mp3")
}

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  button = new Button(width / 2, height / 2, 50)

}

function draw() {

  background(0);
  button.display();
  button.checkMouse();
  let x = mouseX;
  let y = mouseY;
  let dia = random(20, 30);
  let ball = new Ball(x, y, dia);
  particles.push(ball);
  if (button.hover == true) {
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.move();
      p.speedUp();
      p.display();
      p.checkOutOfCanvas();
    }
  }



  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    if (p.isDone == true || button.hover == false) {
      particles.splice(i, 1);
    }
  }
  fill(255, 255, 0)
  text("num of objects: " + particles.length, 10, 30)
  //
}

function mousePressed() {
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.explode();
  }
  sound.rate(random(0.1, 1.2));
  sound.play();
}

function keyPressed() {
  if (key == " ") {
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.changeColor();
    }
  }
}

class Ball {
  constructor(x, y, dia) {
    this.x = x
    this.y = y
    this.dia = dia
    this.r = 255
    this.g = 255
    this.b = 255

    this.xSpeed = random(-0.1, 0.1)
    this.ySpeed = random(-0.1, 0.1)

    this.isDone = false;
  }
  move() {
    this.x += this.xSpeed
    this.y += this.ySpeed
  }
  speedUp() {
    this.xSpeed *= 1.025;
    this.ySpeed *= 1.025;
  }
  explode() {
    this.xSpeed *= 10;
    this.ySpeed *= 10;
    sound.rate(random(0.1, 0.5));
    sound.play();
  }
  changeColor() {
    this.r = random(255)
    this.g = random(255)
    this.b = random(255)
  }
  checkOutOfCanvas() {
    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      this.isDone = true;


    }
  }
  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.r, this.g, this.b, 100);
    circle(0, 0, this.dia);
    pop();
  }
}

class Button {
  constructor(x, y, dia) {
    this.x = x
    this.y = y
    this.dia = dia
    this.r = 255
    this.g = 255
    this.b = 255
    this.hover = false
  }
  checkMouse() {
    let distance = dist(this.x, this.y, mouseX, mouseY)
    if (distance < this.dia) {
      this.b = 0
      this.hover = true

    } else {
      this.b = 255;
      this.hover = false;
    }
    fill(0, 0, 255)
    text(distance, this.x, this.y)
  }
  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.r, this.g, this.b);
    circle(0, 0, this.dia * 2);
    pop();
  }
}