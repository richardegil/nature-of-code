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
    // a random chance to follow the mouse direction

    let r = random(1);
    if (r < 0.5) {
      if (r < 0.25) {
        if (this.x < mouseX) {
          this.x++;
        } else {
          this.x--;
        }
      } else {
        if (this.y < mouseY) {
          this.y++;
        } else {
          this.y--;
        }
      }
    } else {
      let choice = floor(random(4))
      if (choice === 0) {
        this.x++;
      } else if (choice === 1) {
        this.x--;
      } else if (choice === 2) {
        this.y++;
      } else {
        this.y--;
      }
    }
  }
    
}