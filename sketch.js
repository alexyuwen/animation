/*



GLOBAL VARIABLES



*/

let canvas;
let mover;
let surfaceY = 600;
let G = 0.3;
let gravity;
let friction;
/*



MAIN FUNCTIONS



*/

function setup() {
  getAudioContext().suspend();
  frameRate(60);

  canvas = createCanvas(windowWidth, windowHeight);
  
  canvas.mousePressed(startAudio);

  mover = new Mover((200), 50);
  gravity = createVector(0, G);
  
}

function draw() {
  background(255);

  mover.applyGravity();
  mover.update();
  mover.show();
}

function startAudio() {
  userStartAudio();
}

/*



RECORDING FUNCTIONS



*/