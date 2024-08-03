/*



GLOBAL VARIABLES



*/

let canvas;
let mover;
let mover2;
let G = 1.0;
let gravity;
let surfaceY = 600;
let emily;

/*



MAIN FUNCTIONS



*/

function preload() {
  emily = loadImage("media/emily.JPG");
}

function setup() {
  getAudioContext().suspend();
  frameRate(60);

  canvas = createCanvas(windowWidth, windowHeight);
  
  canvas.mousePressed(startAudio);

  mover = new Mover(200, 50, false);
  mover2 = new Mover(700, 50, true);
  gravity = createVector(0, G);
}

function draw() {
  background(0);

  mover.applyForce(gravity);
  mover.show();
  mover.update();

  mover2.applyForce(gravity);
  mover2.show();
  mover2.update();
}

function startAudio() {
  userStartAudio();
}