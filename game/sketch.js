let player;
let pImg;
let oImg;
let bImg;
let obstacles = [];

function preload() {
  pImg = loadImage('../images/player.png');
  oImg = loadImage('../images/obstacle.png');
  bImg = loadImage('../images/backgrnd.png');

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key == ' ') {
    player.jump();
  }
}


function draw() {
  if (random(1) < 0.005) {
    obstacles.push(new Obstacle());
  }


  background(bImg);

  for (let o of obstacles) {
    o.move();
    o.show();
    if (player.hits(o)) {
      console.log('game over');
      noLoop();
    }
  }

  player.show();
  player.move();
}
