/*



GLOBAL VARIABLES



*/

let canvas;
let mover;
let gravity;

/*



MAIN FUNCTIONS



*/

function preload() {
  // emily = loadImage("media/emily.JPG");
}

function setup() {
  getAudioContext().suspend();
  frameRate(60);

  canvasWidth = windowWidth;
  canvasHeight = windowHeight;
  canvas = createCanvas(canvasWidth, canvasHeight);
  
  canvas.mousePressed(startAudio);

  mover = new Mover(400, 100);
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