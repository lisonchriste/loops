
let steps;

let size    = 10;
let direction = 1;

const speed = 0.9;

const numberOfCircles = 5;


function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    background(0,0,0);

    steps =  width / numberOfCircles;
}

function draw() {

    background(0,0,0);

    size += speed * direction; // pareil que size = size + speed;

    for(let x = steps / 2; x < width; x = x + steps) {
        ellipse( x, height/2, size, size);
        //noStroke();
        strokeWeight(20);
        stroke(255, 200, 100);
        fill(255,255,0);
    }


    if (size > width / numberOfCircles) {
        direction = -direction;
    } else if(size < 1) {
        direction = -direction;
    }

}
