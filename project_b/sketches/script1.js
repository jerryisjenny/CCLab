// let r = 150;
let circles = [];
let cols;
let rows;
let size = 10;
let r = size / 2;
let k = 20;

// let angle = 0;
function setup() {
    createCanvas(397, 404);
    cols = width / size;
    rows = height / size;
    for (let i = 0; i < cols; i++) {
        circles[i] = [];
        for (let j = 0; j < rows; j++) {
            let x = size / 2 + i * size;
            let y = size / 2 + j * size;
            let d = dist(x, y, width / 2, height / 2);
            let angle = d / k;
            circles[i][j] = new Circle(x, y, angle);
        }
    }
    // c = new Circle(width/2,height/2);
    //canvas.parent("script1-container")

}

function draw() {
    //circle(0, 0, 50)
    background(255);
    for (let i = 0; i < cols; i++) {
        // console.log(mouseX, mouseY)
        for (let j = 0; j < rows; j++) {
            circles[i][j].display();

            circles[i][j].move(0.05);

        }
    }
    // c.display();
    // c.move(0.01);


}
class Circle {
    constructor(cx, cy, angle) {
        this.angle = angle;
        this.cx = cx;
        this.cy = cy;
    }
    display() {
        push();
        translate(this.cx, this.cy);
        noFill();
        // ellipse(0, 0, r * 2, r * 2);
        // angle=map(mouseX,0,width,0,TWO_PI);
        let x = r * cos(this.angle);
        let y = r * sin(this.angle);

        fill(0);
        // ellipse(x, y, 5, 5);
        arc(x, y, size, size, this.angle, this.angle + PI / 2)
        pop();
    }
    move(speed) {
        this.angle += speed;
    }
}