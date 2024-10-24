//transition
let sceneControl = 0;
let scene1Time;
let scene2Time;
let mouseclick = 0;
//sketch1
let gearRadius = [];
let gearX = [];
let gearY = [];
let gearTeeth = [];
let gearToothDepth = [20];
let gearClicked = [];
let gearRotateangle = [];
let coin = [];
let coinSlotDist;
let fillOpa = 255;
let strokeOpa = 255;
let a = [];
let gearNum;
let overlapping;

let ballBoolean = [];
let lerpBool = 0;
let ballX = [];
let ballY = [];

//sketch2
let petalsPerLayer = 6;
let layers = [];
let maxLayers = 10;
let firstScale = 0.4;
let scaleIncrement = 0.15;
let firstLayerGrowthSpeed = 0.05;
let baseGrowthSpeed = 0.02;
let layerAddInterval = 30;
let baseRotationSpeed = 0.5; // 基础旋转速度
let isFullyGrown = false;
let shouldRotate = false;

//sketch3
let i;
let count = 0;
let inc = 0;
let dia = [10, 30, 50, 70, 90];

let centerX = 400;
let centerY = 250;
let m = [];
let n = [];
let mSpd = [];
let nSpd = [];
let diam = [];
let fruitOpa = 1;
let boom = false;
let fruitScale = 0;

function preload() {
    coinsound = loadSound("js/coin.wav");
    music = loadSound("js/Joep Beving - Paris s'enflamme.mp3")
}
function setup() {
    music.play()
    let canvas = createCanvas(800, 500);
    canvas.parent("p5-canvas-container");
    colorMode(HSB);
    angleMode(DEGREES);
    gearNum = 6;
    let attempts = 0;
    while (gearX.length < gearNum && attempts < 100) {
        overlapping = false;
        let newGearX = random(325, 700);
        let newGearY = random(100, 500);
        let newGearTeeth = random([12, 14, 16, 18]);
        let newGearRadius = random(75, 150);

        for (let j = 0; j < gearX.length; j++) {
            let d = dist(newGearX, newGearY, gearX[j], gearY[j]) + 50;
            if (d < newGearRadius + gearRadius[j]) {
                overlapping = true;
                break;
            }
        }
        if (!overlapping) {
            gearX.push(newGearX);
            gearY.push(newGearY);
            gearTeeth.push(newGearTeeth);
            gearRadius.push(newGearRadius);
            gearRotateangle.push(0);
            gearClicked.push(false);
        }
        attempts++;
    }

    gearNum = gearX.length;

    for (let i = 0; i < gearNum; i++) {
        ballBoolean.push(0);
    }
    for (let i = 0; i < gearNum; i++) {
        ballX.push(-50);
        ballY.push(-50);
    }

    for (let i = 0; i < 3000; i++) {
        m[i] = width / 2;
        n[i] = height / 2;
        mSpd[i] = random(-1.5, 1.5);
        nSpd[i] = random(-1.7, 1.7);
        diam[i] = random(5, 50);
    }
}

function draw() {
    background(0, 0, 0);

    if (sceneControl == 0 || sceneControl == 1) {
        drawScene1();
        if (sceneControl == 1) {
            background(0, 0, 0, (frameCount - scene1Time) / 50);
            fill(255);
            noStroke();
            circle(400, 250, 10);
            if (frameCount >= scene1Time + 50) {
                sceneControl = 2;
            }
        }
    } else if (sceneControl == 2 || sceneControl == 2.5) {
        push();
        translate(400, 250);
        fill(255);
        circle(0, 0, 10);
        for (let w = 0; w < 60; w++) {
            noFill();
            stroke(255, sin(w * 6 + (frameCount % 360)) / 9);
            circle(0, 0, 200 - sin(w) * 200);
        }

        if (!isFullyGrown && mouseIsPressed) {
            growAndRotateFlower();
            shouldRotate = true;
            scene2Time = frameCount;
        } else if (isFullyGrown && !mouseIsPressed) {
            rotateFlower();
            sceneControl = 2.5;
        } else {
            scene2Time = frameCount;
            rotateFlower();
        }

        drawCurrentFlowerState();

        pop();

        if (sceneControl == 2.5 && frameCount - scene2Time < 50) {
            background(0, 0, 0, (frameCount - scene2Time) / 50);
            mouseclick = 0;
        } else if (sceneControl == 2.5) {
            background(0);
            sceneControl = 3;
            drawScene3();
        }
    } else if (sceneControl == 3) {
        drawScene3();
    }
}

function drawScene1() {
    fill(197, 0, 90);
    //noStroke();
    rect(75, 100, 10, 100);
    strokeWeight(2);
    stroke(255);
    //noStroke();
    line(150, 0, 150, 500);
    noStroke();
    for (let n = 0; n < gearX.length; n++) {
        push();
        translate(gearX[n], gearY[n]);
        rotate(frameCount * gearRotateangle[n]);
        let angleStep = 360 / gearTeeth[n];
        fill(197, 12, 100, 0.4);
        beginShape();

        //noStroke();
        for (let i = 0; i < 360; i += angleStep) {
            let angle3 = i;
            let angle4 = i + angleStep / 2;
            let x1 = cos(angle3) * (gearRadius[n] + gearToothDepth[0]);
            let y1 = sin(angle3) * (gearRadius[n] + gearToothDepth[0]);
            let x2 = cos(angle4) * gearRadius[n];
            let y2 = sin(angle4) * gearRadius[n];
            vertex(x1, y1);
            vertex(x2, y2);
        }
        endShape(CLOSE);
        // stroke(0)
        // strokeWeight(2);
        fill(197, 20, 100, 0.15);
        //noFill()

        ellipse(0, 0, gearRadius[n], gearRadius[n]);
        pop();
    }

    coinSlotDist = dist(mouseX, mouseY, 100, 100);
    drawCoin(mouseX, mouseY, fillOpa, strokeOpa);

    for (let i = 0; i < gearNum; i++) {
        if (ballBoolean[i] != 0 && lerpBool < gearNum) {
            ballX[i] = gearX[i];
            ballY[i] = gearY[i];
            if (ballBoolean[i] == 1) {
                lerpBool += ballBoolean[i];
                ballBoolean[i] += 1;
            }
        }

        if (lerpBool == gearNum) {
            ballX[i] = lerp(ballX[i], width / 2, 0.05);
            ballY[i] = lerp(ballY[i], height / 2, 0.05);
            sceneControl = 1;
            if (dist(ballX[i], ballY[i], width / 2, height / 2) > 1) {
                sceneControl = 0;
                scene1Time = frameCount;
            }
        }

        ball(ballX[i], ballY[i]);
    }
}

function mouseClicked() {
    if (coinSlotDist < 100 && gearRotateangle[0] == 0) {
        fillOpa = 0;
        strokeOpa = 0;
        coinsound.play();
        for (let i = 0; i < gearNum; i++) {
            gearRotateangle[i] = random(0.5, 1);
        }
    }
    for (let i = 0; i < gearNum; i++) {
        let distance = dist(mouseX, mouseY, gearX[i], gearY[i]);
        if (distance < 100 && gearRotateangle[0]) {
            ballBoolean[i] = 1;
        }
    }
    mouseclick += 1;
}

function ball(x, y) {
    push();
    circle(x, y, 10);
    pop();
}

function drawCoin(x, y, fillOpa, strokeOpa) {
    push();
    translate(x, y);
    stroke(0, strokeOpa);
    noStroke();
    fill(197, 0, 90, fillOpa);
    circle(0, 0, 50);
    textAlign(CENTER);
    strokeWeight(0.2);
    textSize(50);
    fill(0, fillOpa);
    text("S", 0, 20);
    textSize(60);
    text("l", 0, 22);
    pop();
}

function growAndRotateFlower() {
    if (frameCount % layerAddInterval == 0 && layers.length < maxLayers) {
        let s = firstScale + scaleIncrement * layers.length;
        let newLayer = {
            s: s,
            currentScale: 0,
            petalChange: random(360 / petalsPerLayer),
            rotation: 0,
        };
        layers.push(newLayer);
    }

    let isStillGrowing = false;

    for (let i = layers.length - 1; i >= 0; i -= 1) {
        let layer = layers[i];
        if (i === 0) {
            growthSpeed = firstLayerGrowthSpeed;
        } else {
            growthSpeed = baseGrowthSpeed;
        }
        if (layer.currentScale < layer.s - 0.1) {
            layer.currentScale += (layer.s - layer.currentScale) * growthSpeed;
            isStillGrowing = true;
        }

        rotateLayer(layer, i);
    }
    if (!isStillGrowing && layers.length === maxLayers) {
        isFullyGrown = true;
    }
}

function rotateFlower() {
    for (let i = layers.length - 1; i >= 0; i -= 1) {
        let layer = layers[i];
        rotateLayer(layer, i);
    }
}

function rotateLayer(layer, index) {
    let rotationSpeed =
        (baseRotationSpeed * (layers.length - index)) / (index + 1);
    layer.rotation += rotationSpeed;
}

function drawCurrentFlowerState() {
    for (let i = 0; i < layers.length; i++) {
        let layer = layers[i];
        drawLayer(layer.currentScale, layer.petalChange, layer.rotation);
    }
}

function drawLayer(s, layerPetalChange, layerRotation) {
    push();
    rotate(layerRotation);
    for (let n = 0; n < 360; n += 360 / petalsPerLayer) {
        push();
        rotate(n + layerPetalChange);
        drawPetal(s);
        pop();
    }
    pop();
}

function drawPetal(s) {
    push();
    scale(s);
    strokeWeight(2);
    fill(197, 20, 100, 0.15);
    beginShape();
    vertex(0, 0);
    vertex(-40, -50);
    vertex(-55, -100);
    vertex(-40, -125);
    vertex(-10, -140);
    vertex(0, -130);
    vertex(10, -140);
    vertex(40, -125);
    vertex(55, -100);
    vertex(40, -50);
    vertex(0, 0);
    endShape();
    pop();
}

function drawScene3() {
    push();
    translate(400, 250);
    noStroke();
    fill(197, 20, 100, fruitOpa);
    if (fruitScale < 1) {
        fruitScale += 0.01;
    }
    scale(fruitScale);
    beginShape();
    for (var a = 0; a < 360; a += 0.1) {
        let xoff = cos(a) + 1;
        let yoff = sin(a) + 1;
        let scl1 = map(sin(inc), -1, 1, 20, 30);
        let scl2 = map(sin(inc), -1, 1, 40, 50);
        let r = map(noise(xoff + inc, yoff + inc), 0, 1, scl1, scl2);
        let x = r * cos(a);
        let y = r * sin(a);

        vertex(x, y);
    }
    endShape(CLOSE);

    inc += 0.01;
    pop();
    if (mouseclick >= 1) {
        boom = true;
    }
    if (boom) {
        sceneControl = 0;
        for (let i = 0; i < 300; i++) {
            m[i] += mSpd[i] * 10;
            n[i] += nSpd[i] * 10;
            fill(random(359), random(50, 100), random(50, 100));
            noStroke();
            circle(m[i], n[i], diam[i]);
            fruitOpa -= 0.05;
            if (
                0 < m[i] + diam[i] / 2 &&
                m[i] - diam[i] / 2 < width &&
                0 < n[i] + diam[i] / 2 &&
                n[i] - diam[i] / 2 < height
            ) {
                sceneControl = 3;
            }
        }
        if (sceneControl == 0) {
            clearReset();
        }
    }
}
//transition
function clearReset() {
    sceneControl = 0;

    mouseclick = 0;
    //sketch1
    gearRadius = [];
    gearX = [];
    gearY = [];
    gearTeeth = [];
    gearToothDepth = [20];
    gearClicked = [];
    gearRotateangle = [];
    coin = [];

    fillOpa = 255;
    strokeOpa = 255;
    a = [];

    ballBoolean = [];
    lerpBool = 0;
    ballX = [];
    ballY = [];

    //sketch2
    petalsPerLayer = 6;
    layers = [];
    maxLayers = 10;
    firstScale = 0.4;
    scaleIncrement = 0.15;
    firstLayerGrowthSpeed = 0.05;
    baseGrowthSpeed = 0.02;
    layerAddInterval = 30;
    baseRotationSpeed = 0.5; // 基础旋转速度
    isFullyGrown = false;
    shouldRotate = false;

    //sketch3

    count = 0;
    inc = 0;
    dia = [10, 30, 50, 70, 90];

    centerX = 400;
    centerY = 250;
    m = [];
    n = [];
    mSpd = [];
    nSpd = [];
    diam = [];
    fruitOpa = 1;
    boom = false;
    fruitScale = 0;
    gearNum = 6;
    attempts = 0;
    while (gearX.length < gearNum && attempts < 100) {
        overlapping = false;
        newGearX = random(325, 700);
        newGearY = random(100, 500);
        newGearTeeth = random([12, 14, 16, 18]);
        newGearRadius = random(75, 150);

        for (let j = 0; j < gearX.length; j++) {
            d = dist(newGearX, newGearY, gearX[j], gearY[j]) + 50;
            if (d < newGearRadius + gearRadius[j]) {
                overlapping = true;
                break;
            }
        }
        if (!overlapping) {
            gearX.push(newGearX);
            gearY.push(newGearY);
            gearTeeth.push(newGearTeeth);
            gearRadius.push(newGearRadius);
            gearRotateangle.push(0);
            gearClicked.push(false);
        }
        attempts++;
    }

    gearNum = gearX.length;

    for (let i = 0; i < gearNum; i++) {
        ballBoolean.push(0);
    }
    for (let i = 0; i < gearNum; i++) {
        ballX.push(-50);
        ballY.push(-50);
    }

    for (let i = 0; i < 3000; i++) {
        m[i] = width / 2;
        n[i] = height / 2;
        mSpd[i] = random(-1.5, 1.5);
        nSpd[i] = random(-1.7, 1.7);
        diam[i] = random(5, 50);
    }
}
