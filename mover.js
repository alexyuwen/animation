class Mover {
    constructor(x, y, m = 10) {
      this.mass = m;
      this.position = createVector(x, y);
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
    }
  
    applyForce(force) {
      let f = p5.Vector.div(force, this.mass);
      this.acceleration.add(f);
    }
  
    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
    }

    show() {
        stroke(100);
        strokeWeight(2);
        fill(100);
        circle(this.position.x, this.position.y, 40);
    }
  }