function setup() {

    // let canvas = createCanvas(397, 404)
    let canvas = createCanvas(397, 404)
    // const canvas = document.getElementById("s2");

    // canvas.addEventListener('click', function () {

    //     window.location.href = 'present.html';
    // });
    canvas.mousePressed(() => {
        window.parent.location.href = 'present.html';
    });
    background(255);
}

function draw() {

    // noStroke();
    // fill(0);
    // circle(mouseX, mouseY, 10)
    stroke(0);
    strokeWeight(2);
    line(pmouseX, pmouseY, mouseX, mouseY);
}