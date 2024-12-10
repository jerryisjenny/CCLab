let images = [];
let mouseWheelup = 0;
let clicks = 0;
let rectX, rectY;
let showRect = false;
let img1Des = false;
let img2Des = false;
let img3Des = false;
let img4Des = false;
let img5Des = false;
let preloadedImages = [];
let img1Array = [];
let img2Array = [];
let img3Array = [];
let img4Array = [];
let img5Array = [];
let img1Ys = [];
let targetY1s = [];
let img2Ys = [];
let targetY2s = [];
let img3Ys = [];
let targetY3s = [];
let img4Ys = [];
let targetY4s = [];
let img5Ys = [];
let targetY5s = [];
let imgDes = [false, false, false, false, false];
let img1Sizes = [
    { width: 96, height: 96 },
    { width: 102, height: 76 },
    { width: 115, height: 86 },
    { width: 100, height: 66 }
];

let img2Sizes = [
    { width: 96, height: 96 },
    { width: 102, height: 76 },
    { width: 115, height: 86 },
    { width: 100, height: 66 },
    { width: 100, height: 66 }
];

let img3Sizes = [
    { width: 96, height: 96 },
    { width: 102, height: 76 },
    { width: 115, height: 86 },
    { width: 66, height: 66 },
];
let img4Sizes = [
    { width: 100, height: 74 },
    { width: 59, height: 91 },
];
let img5Sizes = [
    { width: 96, height: 96 },
    { width: 102, height: 76 },
    { width: 115, height: 86 },
    { width: 100, height: 66 },
    { width: 100, height: 66 }
];
function preload() {
    preloadedImages[0] = loadImage("assets/childhood1.jpg");
    preloadedImages[1] = loadImage("assets/childhood2.JPG");
    preloadedImages[2] = loadImage("assets/childhood3.JPG");
    preloadedImages[3] = loadImage("assets/childhood4.JPG");
    preloadedImages[4] = loadImage("assets/childhood5.JPG");
    img1Array.push(loadImage("assets/c11.JPG"));
    img1Array.push(loadImage("assets/c12.JPG"));
    img1Array.push(loadImage("assets/c13.JPG"));
    img1Array.push(loadImage("assets/c14.JPG"));
    img2Array.push(loadImage("assets/c21.JPG"));
    img2Array.push(loadImage("assets/c22.JPG"));
    img2Array.push(loadImage("assets/c23.JPG"));
    img2Array.push(loadImage("assets/c24.JPG"));
    img2Array.push(loadImage("assets/c25.JPG"));
    img3Array.push(loadImage("assets/c31.JPG"));
    img3Array.push(loadImage("assets/c32.JPG"));
    img3Array.push(loadImage("assets/c33.JPG"));
    img3Array.push(loadImage("assets/c34.JPG"));
    img4Array.push(loadImage("assets/c41.JPG"));
    img4Array.push(loadImage("assets/c42.JPG"));
    img5Array.push(loadImage("assets/c51.JPG"));
    img5Array.push(loadImage("assets/c52.JPG"));
    img5Array.push(loadImage("assets/c53.JPG"));
    img5Array.push(loadImage("assets/c54.JPG"));
    img5Array.push(loadImage("assets/c55.JPG"));
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("container1");
    images.push(new photo(0, 80, 150, 1, 1, 368, 368));
    images.push(new photo(1, 0, 400, 0.5, -1, 504, 336));
    images.push(new photo(2, 800, 700, -1, -1, 415, 554));
    images.push(new photo(3, 1000, 929, 1, -0.5, 500, 666));
    images.push(new photo(4, 1500, 100, -1, 1, 383, 287));


    for (let i = 0; i < img1Array.length; i++) {
        img1Ys[i] = 650;
        targetY1s[i] = img1Ys[i];
    }
    for (let i = 0; i < img2Array.length; i++) {
        img2Ys[i] = 650;
        targetY2s[i] = img2Ys[i];
    }
    for (let i = 0; i < img3Array.length; i++) {
        img3Ys[i] = 650;
        targetY3s[i] = img3Ys[i];
    }
    for (let i = 0; i < img4Array.length; i++) {
        img4Ys[i] = 650;
        targetY4s[i] = img4Ys[i];
    }
    for (let i = 0; i < img5Array.length; i++) {
        img5Ys[i] = 650;
        targetY5s[i] = img5Ys[i];
    }
}

function mousePressed() {
    for (let i = 0; i < 5; i++) {
        if (images[i].x - 400 < mouseX && mouseX < images[i].x + 400 && images[i].y - 250 < mouseY && mouseY < images[i].y + 250) {
            clicks += 1;
            showRect = true;
            // imgDes[i] = true;
            // return;
            // if (clicks >= 10) {
            //     showRect = false;
            //     img1Des = false;
            //     img2Des = false;
            //     img3Des = false;
            //     img4Des = false;
            //     img5Des = false;
            //     console.log('1');
            // }
        }
        if (mouseX > width / 2 + 520 && mouseX < width / 2 + 580 && mouseY > height / 2 - 380 && mouseY < height / 2 - 320) {
            showRect = false;
            img1Des = false;
            img2Des = false;
            img3Des = false;
            img4Des = false;
            img5Des = false;
            // imgDes.fill(false);
        }

        if (images[0].x - 400 < mouseX && mouseX < images[0].x + 400 && images[0].y - 250 < mouseY && mouseY < images[0].y + 250) {
            img1Des = true;
            img2Des = false;
            img3Des = false;
            img4Des = false;
            img5Des = false;
        }
        if (images[1].x - 400 < mouseX && mouseX < images[1].x + 400 && images[1].y - 250 < mouseY && mouseY < images[1].y + 250) {
            img2Des = true;
            img1Des = false;
            img3Des = false;
            img4Des = false;
            img5Des = false;
        }
        if (images[2].x - 400 < mouseX && mouseX < images[2].x + 400 && images[2].y - 250 < mouseY && mouseY < images[2].y + 250) {
            img3Des = true;
            img1Des = false;
            img2Des = false;
            img4Des = false;
            img5Des = false;
        }
        if (images[3].x - 400 < mouseX && mouseX < images[3].x + 400 && images[3].y - 250 < mouseY && mouseY < images[3].y + 250) {
            img4Des = true;
            img1Des = false;
            img2Des = false;
            img3Des = false;
            img5Des = false;
        }
        if (images[4].x - 400 < mouseX && mouseX < images[4].x + 400 && images[4].y - 250 < mouseY && mouseY < images[4].y + 250) {
            img5Des = true;
            img1Des = false;
            img2Des = false;
            img3Des = false;
            img4Des = false;
        }
    }
}

function draw() {
    background(0);
    mouseWheelup = 0;
    for (let i = 0; i < 5; i++) {
        images[i].display();
        images[i].move1();
        if (mouseWheelup != 1) {
            images[i].xSpeed = images[i].xiniSpeed;
            images[i].ySpeed = images[i].yiniSpeed;
        }

        if (0 > images[i].x + 400 || images[i].x - 400 > 1500 || 0 > images[i].y + 250 || images[i].y - 250 > 1000) {
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
    }
    if (img1Des) {
        fill(0);
        textSize(25);
        text("When I was a child, I often begged my mother to take me into the play area during our shopping trips. She always said it was too dirty, so we rarely went inside. Only with friends and their parents could I sneak into that world of colored balls. We would toss them at each other — they never hurt, though lying on them was never quite comfortable. Still, I always wished I could sink beneath them, hidden and weightless, wrapped in that fleeting joy", 800, 700, 600, height / 2 + 400);
        for (let i = 0; i < img1Array.length; i++) {
            image(img1Array[i], 1000 + i * 80, img1Ys[i], img1Sizes[i].width, img1Sizes[i].height);
        }
    }


    if (img2Des) {
        fill(0);
        textSize(25);
        text("When I was little, my grandparents often took me for walks in the park. I knew almost every staff member there by name. Looking back now, there was not much that was truly exciting — just the same paths, the same trees. But back then, joy bloomed effortlessly, simple and unexplained, like sunlight filtering through leaves on a quiet afternoon.", 800, 700, 600, height / 2 + 400);
        for (let i = 0; i < img2Array.length; i++) {
            image(img2Array[i], 1000 + i * 80, img2Ys[i], img2Sizes[i].width, img2Sizes[i].height);
        }
    }

    if (img3Des) {
        fill(0);
        textSize(25);
        text("The bookstore back then always felt a bit old, and the air conditioning inside was very cool. After my tutoring classes, since I did not have a phone, I would go to the bookstore to read and pass the time while waiting for my parents to pick me up. It was during this time that I got to read some books I was not usually allowed to.", 800, 700, 600, height / 2 + 400);
        for (let i = 0; i < img3Array.length; i++) {
            image(img3Array[i], 1000 + i * 80, img3Ys[i], img3Sizes[i].width, img3Sizes[i].height);
        }
    }

    if (img4Des) {
        fill(0);
        textSize(25);
        text("Back then, I could not indulge in too many junk foods, but what I truly looked forward to at KFC was the small play area. The slide was not high, nor was it big, but in my imagination, it was my castle.", 800, 700, 600, height / 2 + 400);
        for (let i = 0; i < img4Array.length; i++) {
            image(img4Array[i], 1000 + i * 80, img4Ys[i], img4Sizes[i].width, img4Sizes[i].height);
        }
    }
    if (img5Des) {
        fill(0);
        textSize(25);
        text("The habit of taking afternoon naps was probably something I picked up in kindergarten. When the teacher led us to the sleeping area, I was not sleepy at all. I would close my eyes and pretend to be asleep, but in reality, my mind was wandering. Yet, perhaps the blankets were just too comfortable, and before I knew it, I fell asleep.", 800, 700, 600, height / 2 + 400);
        for (let i = 0; i < img5Array.length; i++) {
            image(img5Array[i], 1000 + i * 80, img5Ys[i], img5Sizes[i].width, img5Sizes[i].height);
        }
    }

    for (let i = 0; i < img1Array.length; i++) {
        img1Ys[i] = lerp(img1Ys[i], targetY1s[i], 0.1);
    }
    for (let i = 0; i < img2Array.length; i++) {
        img2Ys[i] = lerp(img2Ys[i], targetY2s[i], 0.1);
    }
    for (let i = 0; i < img3Array.length; i++) {
        img3Ys[i] = lerp(img3Ys[i], targetY3s[i], 0.1);
    }
    for (let i = 0; i < img4Array.length; i++) {
        img4Ys[i] = lerp(img4Ys[i], targetY4s[i], 0.1);
    }
    for (let i = 0; i < img5Array.length; i++) {
        img5Ys[i] = lerp(img5Ys[i], targetY5s[i], 0.1);
    }
}

function mouseWheel(event) {
    for (let i = 0; i < 5; i++) {
        images[i].xSpeed = event.delta * images[i].xiniSpeed * 0.7;
        images[i].ySpeed = event.delta * images[i].yiniSpeed * 0.7;
    }
}

function mouseMoved() {

    for (let i = 0; i < img1Array.length; i++) {
        if (mouseX > 1000 + i * 80 && mouseX < 1000 + i * 80 + img1Sizes[i].width && mouseY > img1Ys[i] && mouseY < img1Ys[i] + img1Sizes[i].height) {
            targetY1s[i] = 640;
        } else {
            targetY1s[i] = 650;
        }
    }

    for (let i = 0; i < img2Array.length; i++) {
        if (mouseX > 1000 + i * 80 && mouseX < 1000 + i * 80 + img2Sizes[i].width && mouseY > img2Ys[i] && mouseY < img2Ys[i] + img2Sizes[i].height) {
            targetY2s[i] = 640;
        } else {
            targetY2s[i] = 650;
        }
    }
    for (let i = 0; i < img3Array.length; i++) {
        if (mouseX > 1000 + i * 80 && mouseX < 1000 + i * 80 + img3Sizes[i].width && mouseY > img3Ys[i] && mouseY < img3Ys[i] + img3Sizes[i].height) {
            targetY3s[i] = 640;
        } else {
            targetY3s[i] = 650;
        }
    }
    for (let i = 0; i < img4Array.length; i++) {
        if (mouseX > 1000 + i * 80 && mouseX < 1000 + i * 80 + img4Sizes[i].width && mouseY > img4Ys[i] && mouseY < img4Ys[i] + img4Sizes[i].height) {
            targetY4s[i] = 640;
        } else {
            targetY4s[i] = 650;
        }
    }
    for (let i = 0; i < img5Array.length; i++) {
        if (mouseX > 1000 + i * 80 && mouseX < 1000 + i * 80 + img5Sizes[i].width && mouseY > img5Ys[i] && mouseY < img5Ys[i] + img5Sizes[i].height) {
            targetY5s[i] = 640;
        } else {
            targetY5s[i] = 650;
        }
    }

}
class photo {
    constructor(imageIndex, x, y, xSpeed, ySpeed, sizex, sizey) {
        this.img = preloadedImages[imageIndex];
        this.blurImg = createGraphics(sizex, sizey);
        this.blurImg.image(this.img, 0, 0, sizex, sizey);
        this.blurImg.filter(BLUR, 2);
        this.x = x;
        this.y = y;
        this.xiniSpeed = xSpeed;
        this.yiniSpeed = ySpeed;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.sizex = sizex;
        this.sizey = sizey;
    }

    move1() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    display() {
        push();
        translate(this.x, this.y);
        imageMode(CENTER);
        image(this.blurImg, 0, 0, this.sizex, this.sizey);
        pop();
    }
}