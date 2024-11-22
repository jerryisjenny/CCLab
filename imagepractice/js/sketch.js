let img;
let cam;

function preload() {
  img = loadImage("https://cdn.gamerch.com/contents/wiki/1168/entry/VitgyEH9.png")
}
function setup() {
  let canvas = createCanvas(500, 400);
  img = createImage(640, 480)
  //background(220);
  createCapture(VIDEO);
  cam.size(640, 480)
  cam.hide();
}

function draw() {
  cam.loadPixels();
  img.loadPixels();
  let gridSize = 15;
  for (let y = 0; y < img.height; y += gridSize) {
    for (let x = 0; x < img.width; x += gridSize) {
      let index = (x + y * img.width) * 4;
      let r = cam.pixels[index];
      let g = cam.pixels[index + 1]
      let b = cam.pixels[index + 2]

      fill(r, g, b)
      ellipse(x, y, gridSize, gridSize)

    }
  }
  // image(cam, 0, 0)
  // background(0)

  // img.resize(200, 200);
  // image(img, 0, 0)
  // let c = img.get(mouseX, mouseY)
  // fill(c);
  // circle(mouseX, mouseY, 50)

  // imageMode(CENTER)
  // let r = map(mouseX, 0, width, 0, 255)
  // let b = map(mouseY, 0, height, 0, 255)
  // tint(r, 0, b)

  //
}