let img;
let cam;
let isPaused = false;
let capturedFrame;
let speechRec;
let displayedText = "";
let words = ["hi", "cat", "dog", "love", "happy", "sad", "good", "wink", "heartbroken", "yummy", "angry", "hot", "cold", "sleepy", "sick", "scared"];
let emojis = ["👋", "🐱", "🐶", "❤️", "😊", "😭", "👍", "😉", "💔", "😋", "😡", "🥵", "🥶", "🥱", "🤒", "😱"];
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

    cam = createCapture(VIDEO, { flipped: true });
    img = createImage(640, 480);
    cam.hide();
    speechRec = new p5.SpeechRec('en-US', gotSpeech);
    continuous = true;
    interim = false;
    speechRec.start(continuous, interim);
    textSize(18);
    textAlign(LEFT, TOP);
    textWrap(WORD);

}
function draw() {
    background(0);
    fill(255)
    text("Frame a scene through your lens. Let the image rest in stillness while your voice weaves its essence. Speak what it represents — a thought, a feeling, a fragment of now.", 950, 650, 250, 300)
    canvas.parent("container2");
    if (!isPaused) {
        cam.loadPixels();
        img.loadPixels();
        for (let i = 0; i < cam.pixels.length; i++) {
            img.pixels[i] = cam.pixels[i];
        }
        img.updatePixels();
    }

    image(img, 220, 200);
    // speech();
    stroke(255);
    noFill();
    rect(950, 300, 500, 300);
    fill(255);
    noStroke();
    text(displayedText, 950, 300, 480, 180);
    fill(255)
    circle(550, 750, 70)
    noFill();
    stroke(0)
    strokeWeight(2);
    circle(550, 750, 55)
}

function mousePressed() {

    if (!isPaused && 520 <= mouseX && mouseX <= 570 && 720 <= mouseY && mouseY <= 780) {
        // img.pause();
        cam.pause();
        img.get();
        save(img, 'captured_image', 'png');
        localStorage.setItem('capturedImage', img.canvas.toDataURL());
        img.loadPixels();
        let pixelData = Array.from(img.pixels);
        localStorage.setItem('capturedPixels', JSON.stringify(pixelData));

        isPaused = true;
        // console.log("1")
    } else {
        cam.play();
        isPaused = false;
    }
}

function gotSpeech() {
    if (speechRec.resultValue) {
        let spokenText = speechRec.resultString;
        let wordArray = spokenText.split(" ");
        for (let i = 0; i < wordArray.length; i++) {
            let word = wordArray[i];
            let emojiFound = false;
            for (let j = 0; j < words.length; j++) {
                if (word === words[j]) {
                    wordArray[i] = emojis[j];
                    emojiFound = true;
                    break;
                }
            }
            if (!emojiFound) {
                wordArray[i] = word;
            }
        }

        displayedText += wordArray.join(" ") + " ";
    };

}

