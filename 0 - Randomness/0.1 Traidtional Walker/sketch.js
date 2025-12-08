let walker;

function setup() {
  createCanvas(640, 240);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.step();
  walker.show();
}


class Walker {
  constructor () {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(0);
    point(this.x,this.y);
  }

  step() {
    // Randomly chooses an integer from 0 to 3, using floor() to round down
    let choice = floor(random(4));

    if  (choice === 0) {
      // Move to the right
      this.x++;
    } else if (choice === 1) {
      // Move to the left
      this.x--;
    } else if (choice === 2) {
      // Move down
      this.y++;
    } else {
      // Move up
      this.y--;
    }
  }
}