var angle = 10
var scalar = 200
var speed = 0.03

let offsetX
let offsetY


function setup() {
    createCanvas(windowWidth, windowHeight)
    background(255, 200, 0)
    fill(255, 200, 0)
    stroke(255, 100, 0)
    strokeWeight(2)
    offsetX = windowWidth / 2
    offsetY = windowHeight / 2
}

function draw() {
    var x = offsetX + cos(angle) * scalar
    var y = offsetY + sin(angle) * scalar

    rect(x, y, 40, 40)
    fill(255, 200, 0)
    stroke(255, 100, 0)
    strokeWeight(2)

    angle += speed
}
