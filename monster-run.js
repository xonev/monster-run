let img;
let x = 100;
let y = 100;

function setup() {
    createCanvas(1000, 600);
    img = loadImage('art/sprite.png',8,8);
}

function draw() {
    if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
        img = loadImage('art/sprite-5.png',8,8);
    }

    if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
        img = loadImage('art/sprite-4.png',8,8);
    }

    if (keyIsDown(UP_ARROW)) {
        y -= 5;
        img = loadImage('art/sprite-1.png',8,8);
    }

    if (keyIsDown(DOWN_ARROW)) {
        y += 5;
    }

    clear();
    background(100, 100, 250);
    image(img, x, y);
}