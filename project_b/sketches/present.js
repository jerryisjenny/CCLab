let img;
let cam;
let isPaused = false;
function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    cam = createCapture(VIDEO);
    img = createImage(640, 480);
}
function draw() {
    background(0);

    canvas.parent("container2");
    if (!isPaused) {
        cam.loadPixels();
        img.loadPixels();
        for (let i = 0; i < cam.pixels.length; i++) {
            img.pixels[i] = cam.pixels[i];
        }
        img.updatePixels();
    }

    image(img, 0, 0);

}
function mouseClicked() {
    // cam.pause();
    if (!isPaused) {
        cam.pause();
        isPaused = true;
        saveCanvas('captured_image', 'png');
    } else {
        cam.play();
        isPaused = false;
    }
}