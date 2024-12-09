// let assetsImages = [];
// let capturedImage;
// let generatedImage;
// let allImages = [];
// let currentImageIndex = 0;
// let z = 1000;
// let isComplete = false;
// let fadeAlpha = [];

// function preload() {
//     assetsImages.push(loadImage('assets/example1.jpg'));
//     assetsImages.push(loadImage('assets/example2.jpg'));
// }

// function setup() {
//     createCanvas(windowWidth, windowHeight);

//     let capturedImageData = localStorage.getItem('capturedImage');
//     if (capturedImageData) {
//         loadImage(capturedImageData, img => {
//             capturedImage = img;
//             initImages();
//         });
//     }

//     let generatedImageData = localStorage.getItem('generatedImage');
//     if (generatedImageData) {
//         loadImage(generatedImageData, img => {
//             generatedImage = img;
//             initImages();
//         });
//     }
// }

// function initImages() {
//     allImages = [...assetsImages];
//     if (capturedImage) allImages.push(capturedImage);
//     if (generatedImage) allImages.push(generatedImage);
//     fadeAlpha = new Array(allImages.length).fill(255);
// }

// function draw() {
//     if (isComplete) return;

//     background(0);
//     translate(width / 2, height / 2);

//     // 移动当前图片
//     z -= map(z, 1000, 1, 2, 15);

//     // 更早开始淡出，更快的淡出速度
//     if (z < 800 && currentImageIndex > 0) {
//         // 在更短的距离内完成淡出
//         fadeAlpha[currentImageIndex - 1] = map(z, 800, 790, 255, 0);
//     }

//     if (z <= 1) {
//         z = 1000;
//         if (currentImageIndex > 0) {
//             fadeAlpha[currentImageIndex - 1] = 0;
//         }
//         currentImageIndex++;

//         if (currentImageIndex >= allImages.length) {
//             isComplete = true;
//         }
//     }

//     for (let i = 0; i <= currentImageIndex && i < allImages.length; i++) {
//         let currentZ = i === currentImageIndex ? z : 1;

//         let progress = map(currentZ, 1000, 1, 0, 1);
//         let scaleVal = map(pow(progress, 3), 0, 1, 0.1, 2.5);

//         push();
//         scale(scaleVal);
//         imageMode(CENTER);

//         let baseWidth = width / 2;
//         let baseHeight = height / 2;

//         // 确保透明度不会小于0或大于255
//         let alpha = constrain(fadeAlpha[i], 0, 255);
//         tint(255, alpha);

//         image(allImages[i], 0, 0, baseWidth, baseHeight);
//         pop();
//     }
// }

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }

let spd = 0;
let acc = 0.15;
let offset = 50;
let rectX, rectSize;
let img;

function preload() {
    img = loadImage("assets/example1.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    imageMode(CENTER);
}

function draw() {
    background(0);

    spd += acc;
    rectX = width / 2 + offset;
    rectSize = (width / 4) * spd;
    // offset -= 5;

    if (rectX < width / 2 + 100) {
        offset += 5;
    } else {
        offset -= 5;
        acc = 0.05;
    }

    if (rectSize <= width * 3) {
        // rect(width / 2 + offset, height / 2, (width / 4) * spd);
        image(img, rectX, height / 2, (width / 4) * spd, (width / 4) * spd)
    }

}

function generateImg() {

}