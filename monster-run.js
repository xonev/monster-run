let img;
let x = 100;
let y = 100;
let idleImage;
let jumpImage;
let rightImage;
let leftImage;

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
        y -= 5;
        img = jumpImage;
    }
    else if (keyIsDown(DOWN_ARROW)) {
        y += 5;
        img = idleImage;
    }
    else {
        img = idleImage;
    }

    clear();
    background(100, 100, 250);
    image(img, x, y, 80, 80);
}