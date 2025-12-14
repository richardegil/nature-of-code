let stuff = [1, 1, 2, 3, 3];
let probability = 0.1;

function setup() {
  createCanvas(400, 400);
  let value = random(stuff);
  let r = random(1);
  let num = random(1);

  print(value)

  if (r < probability) {
    print("sing!");
  }

  if (num < 0.6) {
    print("Sing!");
  } else if (num < 0.7) {
    print("Dance!");
  } else {
    print("Sleep!");
  }

}

function draw() {
  background(220);
}
