let img;
let x = 100;
let y = 100;
let idleImage;
let jumpImage;
let rightImage;
let leftImage;
const SPACE = 32;
const floor = 400;

const canvasHeight = 600;
const canvasWidth = 1000;

function setup() {
    createCanvas(1000, 600);
    idleImage = loadImage('art/sprite.png');
    leftImage = loadImage('art/sprite-5.png');
    rightImage = loadImage('art/sprite-4.png');
    jumpImage = loadImage('art/sprite-1.png');
}

function draw() {

    if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
        img = leftImage;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
        img = rightImage;
    }
    else if (keyIsDown(UP_ARROW)) {
        y -= 10;
        img = jumpImage;
    }
    else {
        img = idleImage;
    }

    if (y < 400) {
        y += 5;
        img = jumpImage;
    }

    clear();
    background(100, 100, 250);

    fill(20, 200, 100);
    noStroke();
    rect(0, floor, canvasWidth, canvasHeight - floor);

    image(img, x, y, 80, 80);
}