let radius = 25;

class Mover {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  applyForce(force) {
    
  }

  applyGravity() {
    this.acceleration.add(gravity);
  }

  applyFriction() {
    friction = this.velocity.copy();
    friction.mult(-1);
    friction.setMag(2.4);
    this.acceleration.add(friction);
  }

  update() {
    if (millis() < 7666 && this.position.y + radius >= surfaceY) {
      // Bounce up
      this.position.y = surfaceY - radius; // Reset ball to surface
      this.velocity.y *= -1;
      this.applyFriction();
    }

    this.applyGravity();

    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  show() {
    stroke(100);
    strokeWeight(2);
    fill(100);
    circle(this.position.x, this.position.y, 2 * radius);
  }
}