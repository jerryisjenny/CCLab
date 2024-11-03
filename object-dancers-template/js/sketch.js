/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  angleMode(DEGREES)
  // ...except to adjust the dancer's name on the next line:
  dancer = new Jerry(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class Jerry {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.flowermoveRight = false;
    this.leave = 0;
    //this.flowermoveUp = false;
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    if (this.flowermoveRight) {
      this.x += 0.15;
      this.leave += 0.05
      if (this.x > width / 2 + 15) {
        this.flowermoveRight = false;
      }
    } else {
      this.x -= 0.15;
      this.leave -= 0.05
      if (this.x < width / 2 - 15) {
        this.flowermoveRight = true;
      }
    }

    // if (this.flowermoveUp) {
    //   this.y += 0.1;
    //   if (this.y > height / 2 + 10) {
    //     this.flowermoveUp = false;
    //   }
    // } else {
    //   this.y -= 0.1;
    //   if (this.y < height / 2 - 10) {
    //     this.flowermoveUp = true;
    //   }
    // }
  }

  // update properties here to achieve
  // your dancer's desired moves and behaviour

  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(width / 2, height / 2);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    noFill();
    stroke(68, 187, 25)
    strokeWeight(5)
    beginShape();
    vertex(this.x - width / 2, 0)
    bezierVertex(-30 + this.x - width / 2, 35, -10, 85, 3, 83)
    endShape();

    fill(68, 187, 25)
    stroke(0)
    strokeWeight(1)
    beginShape();
    curveVertex(0, 85)
    curveVertex(-7, 75 + this.leave)
    curveVertex(-20, 72 + this.leave)
    curveVertex(-40, 80 + this.leave)
    curveVertex(-50, 95 + this.leave)
    curveVertex(-40, 90 + this.leave)
    curveVertex(-15, 95 + this.leave)
    curveVertex(0, 85)
    endShape(CLOSE)

    beginShape();
    curveVertex(-3, 85)
    //curveVertex(5, 77 + this.leave)
    curveVertex(7, 75 + this.leave)
    curveVertex(20, 72 + this.leave)
    curveVertex(40, 80 + this.leave)
    curveVertex(50, 95 + this.leave)
    curveVertex(40, 90 + this.leave)
    curveVertex(15, 95 + this.leave)
    curveVertex(-3, 85)
    endShape(CLOSE)

    push();
    translate(this.x - width / 2, this.y - height / 2)

    stroke(0)
    strokeWeight(1)
    for (let i = 0; i < 360; i += 1) {
      fill(246, 213, 39)
      if (345 == i || i == 0 || i == 15) {
        push();
        rotate(i)
        ellipse(0, 0, 130, 20)
        pop();
      }
      if (325 == i || i == 35) {
        push();
        rotate(i)
        ellipse(0, 0, 115, 20)
        pop();
      }
      if (300 == i || i == 60) {
        push();
        rotate(i)
        ellipse(0, 0, 100, 20)
        pop();
      }
      if (270 == i) {
        push();
        rotate(i)
        ellipse(0, 0, 90, 20)
        pop();
      }
    }

    fill(150, 89, 43)
    ellipse(0, 0, 100, 60)
    fill(0)
    ellipse(-18, -7, 10, 17)
    ellipse(18, -7, 10, 16)
    fill(255)
    circle(-19, -11, 4)
    circle(17, -11, 4)

    noFill();
    strokeWeight(1.5)
    beginShape();
    vertex(-25, 10)
    bezierVertex(-10, 20, 30, 15, 30, 5)
    endShape();
    pop();

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/