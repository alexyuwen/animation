/*



GLOBAL VARIABLES



*/

let canvas;
let mover;
let gravity;

/*



MAIN FUNCTIONS



*/

function setup() {
  getAudioContext().suspend();
  canvas = createCanvas(1000, 500);
  frameRate(60);
  canvas.mousePressed(startAudio);

  mover = new Mover(400, 400);
  gravity = createVector(0, 0.1);
}

function draw() {
  background(0);

  mover.applyForce(gravity);
  mover.show();
  mover.update();
}

function startAudio() {
  userStartAudio();
}