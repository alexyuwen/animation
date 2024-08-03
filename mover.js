let radius = 25;

let photoScaling = 0.24;

class Mover {
    constructor(x, y, emilyFlag) {
      this.position = createVector(x, y);
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
      this.emilyFlag = emilyFlag;
    }
  
    applyForce(force) {
      this.acceleration.add(force);
    }
  
    update() {
      if (millis() < 6666 && this.position.y + radius >= surfaceY) {
        // Bounce up
        this.position.y = surfaceY - radius;
        this.velocity.y *= -1;
      }

      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }

    show() {
      if (this.emilyFlag) {
        image(emily, this.position.x, this.position.y, photoScaling * emily.width, photoScaling * emily.height);
      } else {
        stroke(100);
        strokeWeight(2);
        fill(100);
        circle(this.position.x, this.position.y, 2 * radius);
      }
    }
  }