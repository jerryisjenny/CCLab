
let assets = [];
let generatedImage;
let capturedPixels;
function preload() {
    // assets.push(loadImage('assets/example1.jpg'));
    // assets.push(loadImage('assets/example2.jpg'));
    // assets.push(loadImage('assets/example3.jpg'));
    assets.push(loadImage('assets/childhood1.jpg'));
    assets.push(loadImage('assets/childhood2.JPG'));
    assets.push(loadImage('assets/childhood3.JPG'));
    assets.push(loadImage('assets/childhood4.JPG'));
    assets.push(loadImage('assets/childhood5.JPG'));
}
function setup() {
    createCanvas(397, 404);
    capturedPixels = JSON.parse(localStorage.getItem('capturedPixels'));
    if (capturedPixels) {
        generate();
    }
    // generatedImage = createImage(397,404);
    // generatedImage.loadPixels();
    // //canvas.parent("script2-container")
    // background(255);
}

function generate() {
    generatedImage = createImage(397, 404);
    generatedImage.loadPixels();
    let Pixels = [];
    for (let i = 0; i < assets.length; i++) {
        assets[i].loadPixels();
        for (let j = 0; j < assets[i].pixels.length; j++) {
            Pixels.push(assets[i].pixels[j]);
        }
    }
    if (capturedPixels) {
        for (let i = 0; i < capturedPixels.length; i++) {
            Pixels.push(capturedPixels[i]);
        }
    }
    for (let i = 0; i < 6000000; i++) {
        Pixels.push(255, 255, 255, 255);
    }
    for (let y = 0; y < generatedImage.height; y++) {
        for (let x = 0; x < generatedImage.width; x++) {
            let index = (x + y * generatedImage.width) * 4;
            let randomIndex = floor(random(Pixels.length / 4)) * 4;

            generatedImage.pixels[index] = Pixels[randomIndex];
            generatedImage.pixels[index + 1] = Pixels[randomIndex + 1];
            generatedImage.pixels[index + 2] = Pixels[randomIndex + 2];
            generatedImage.pixels[index + 3] = Pixels[randomIndex + 3];
        }
    }
    generatedImage.updatePixels();
    localStorage.setItem('generatedImage', generatedImage.canvas.toDataURL('image/jpeg', 0.5));
}
function draw() {
    background(255);
    if (generatedImage) {
        image(generatedImage, 0, 0, width, height);
    }
}