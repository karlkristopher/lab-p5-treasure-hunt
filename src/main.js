const game = new Game();

function preload () {
  game.init();
}


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.setup();

}


function draw() {
  clear();
  game.display();

}


function keyPressed() {

  if (keyCode === 40) {
    game.player.moveDown();
  }

  if (keyCode === 38) {
    game.player.moveUp();
  }

  if (keyCode === 39) {
    game.player.moveRight();
  }

  if (keyCode === 37) {
    game.player.moveLeft();
  }
}

