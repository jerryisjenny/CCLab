let images = [];
let mouseWheelup = 0;
let clicks = 0;
let showRect = false;
let rectX, rectY;
let img1Des = false;
function preload() {
}

function setup() {

    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("container1");
    images.push(new photo("assets/example1.jpg", 80, 150, 1, 1));
    images.push(new photo("assets/example2.jpg", 0, 400, 0.5, -1));
    images.push(new photo("assets/example3.jpg", 800, 700, -1, -1));
    images.push(new photo("assets/example4.jpg", 1500, 929, -1, 0.5));
    // console.log(images);
}

function mousePressed() {
    for (i = 0; i < 4; i += 1) {
        if (images[i].x - 400 < mouseX && mouseX < images[i].x + 400 && images[i].y - 250 < mouseY && mouseY < images[i].y + 250) {
            clicks += 1;
            rectMode(CENTER);
            fill(255)
            // rect(images[i].x, images[i].y, 1200, 800);
            showRect = true;
        }
        if (mouseX > width / 2 + 520 && mouseX < width / 2 + 580 && mouseY > height / 2 - 380 && mouseY < height / 2 - 320) {
            showRect = false;
            img1Des = false;
        }

        if (images[0].x - 400 < mouseX && mouseX < images[0].x + 400 && images[0].y - 250 < mouseY && mouseY < images[0].y + 250) {
            img1Des = true;
        }
    }

}

function draw() {
    background(0);
    mouseWheelup = 0;
    for (i = 0; i < 4; i += 1) {
        images[i].display();
        images[i].move1();
        if (mouseWheelup != 1) {
            images[i].xSpeed = images[i].xiniSpeed;
            images[i].ySpeed = images[i].yiniSpeed;
        }

        if (0 <= images[i].x + 400 && images[i].x - 400 <= 1500 && 0 <= images[i].y + 250 && images[i].y - 250 <= 1000) {

        } else {
            // console.log(i, "i");
            images[i].xSpeed *= -1;
            images[i].ySpeed *= -1;
            images[i].xiniSpeed = images[i].xSpeed;
            images[i].yiniSpeed = images[i].ySpeed;
        }

        if (showRect) {
            rectMode(CENTER);
            noStroke();
            fill(255);
            rect(width / 2, height / 2, 1200, 800);
            fill(255, 0, 0);
            circle(width / 2 + 550, height / 2 - 350, 30);
        }

        // console.log(i, images[i].x, 'x', images[i].xSpeed);
        // console.log(i, images[i].y, 'y', images[i].ySpeed, images[i].yiniSpeed);
    }
    if (img1Des) {
        fill(0);
        textSize(100);
        text('hi', 400, 400);
    }

}

function mouseWheel(event) {
    for (i = 0; i < 4; i += 1) {
        images[i].xSpeed = event.delta * images[i].xiniSpeed;
        images[i].ySpeed = event.delta * images[i].yiniSpeed;
    }

    mouseWheelup = 1;
    // console.log(mouseWheelup);
}



class photo {
    constructor(image, x, y, xSpeed, ySpeed) {
        this.img = loadImage(image);
        this.x = x;
        this.y = y;
        this.xiniSpeed = xSpeed;
        this.yiniSpeed = ySpeed;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }
    move1() {
        this.x += this.xSpeed
        this.y += this.ySpeed

    }

    display() {
        push();
        translate(this.x, this.y)
        imageMode(CENTER);
        image(this.img, 0, 0, 800, 500)
        pop();
    }

}