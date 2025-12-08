// An array to keeo track of how often random numbers are picked
let randomCounts = [];
// The total number of counts
let total = 20;

function setup() {
  createCanvas(640, 200);
  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(255);

  // Pick a random number and increase the count
  let index = floor(random(randomCounts.length));
  randomCounts[index]++

  stroke(0);
  fill(127);
  let w = width / randomCounts.length;

  // Draw a graph of the results
  for(let x = 0; x < randomCounts.length; x++) {
    rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
  }
}
