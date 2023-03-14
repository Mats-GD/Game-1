let player;
let pImg;
let oImg;
let bImg;

function preload() {
  pImg = loadImage('../images/player.png');
  oImg = loadImage('../images/obstacle.png');
  bImg = loadImage('../images/backgrnd.png');

}
function setup() {
  createCanvas(800, 450);
  player = new Player();

}

function keyPressed() {
  if (key == ' ') {
    player.jump();
  }
}


function draw() {
  background(bImg);
  player.show();
  player.move();
}
