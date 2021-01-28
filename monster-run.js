let img;
let x = 100;
let y = 100;
let idleImage;
let jumpImage;
let rightImage;
let leftImage;
var isJumping = false;
var jumpAccelerationY = 0;
var velocityY = 0;
var gravityAccelerationY = 2;
const SPACE = 32;
const floor = 400;
let time = 0;
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
    time++;

    if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
        img = leftImage;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
        img = rightImage;
    }
    else if (keyIsDown(UP_ARROW)) {
            img = jumpImage;
            
    }
    else {
        img = idleImage;
    }

    if (y < 400) {
        img = jumpImage;
    }

    // If the up arrow is pressed, then we want to continue up unless we've reached the upper limit, which is zero. 
    // If the up arrow is not pressed, but we jumped recently, then we free fall at a specific rate.
    if (keyIsDown(UP_ARROW)) {
        if (!isJumping) {
            jumpAccelerationY = -20;
            time = 0;
        }
        isJumping = true;
        jumpAccelerationY -= 1;
    }
    time += 1;
    jumpAccelerationY += gravityAccelerationY;
    velocityY += jumpAccelerationY;
    y += velocityY;
    
    if (y >= floor) {
        isJumping = false;
        y = floor; 
        velocityY = 0;
    }
     
    

    clear();
    background(100, 100, 250);

    fill(20, 200, 100);
    noStroke();
    rect(0, floor, canvasWidth, canvasHeight - floor);

    image(img, x, y, 80, 80);
}