let walker;

function setup() {
  createCanvas(640, 240);
  walker = new Walker();
  // setting the background color to white and only doing it once so the walker path shows
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
    // Adding a weighted probability to the random movement (moving to the right more often)
    // Change of moving up 20%
    // Change of moving down 20%
    // Change of moving left 20%
    // Change of moving right 40%

    let r = random(1);
    if (r < 0.4) {
      this.x++;
    } else if (r < 0.6) {
      this.x--;
    } else if (r < 0.8) {
      this.y++;
    } else {
      this.y--;
    }
  }
}