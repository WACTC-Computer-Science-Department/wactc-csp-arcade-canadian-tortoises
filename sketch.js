// ============================================
// GAME LOOP — Modify with care!
// Creates the GameManager and runs the loop.
// ============================================

let gm;  // GameManager instance
let playerImg;

function preload() {
  playerImg = loadImage('Assets/charater_up.png');
}

function setup() {
  createCanvas(800, 500);
  textFont('monospace');
  gm = new GameManager();
}

function draw() {
  background('#1c2e1a');
  if (gm.gameState === 'menu') {
    drawMenu(gm);
  } else if (gm.gameState === 'playing') {
    gm.update();
    gm.draw();
    drawHUD(gm);
  } else if (gm.gameState === 'gameover') {
    drawGameOver(gm);
  }

}

function keyPressed() {
  if (!gm) return;
  if (gm.gameState === 'menu' && (key === ' ' || keyCode === ENTER)) {
    gm.startGame(playerImg);
  } else if (gm.gameState === 'gameover' && (key === 'r' || key === 'R')) {
    gm.gameState = 'menu';
  }

  // Game-specific key controls
  if (key === 'c' || key === 'C') {
    console.log('C pressed, gameState:', gm.gameState);
    if (gm.gameState === 'playing') {
      // Example action: shoot or trigger a player ability
      gm.playerShoot_bigbullet(mouseX, mouseY);
    }
  }

  if (key === 'Escape') {
    gm.gameState = 'menu';
  }
}

function mousePressed() {
  if (!gm) return;
  if (gm.gameState === 'playing') {
    gm.playerShoot(mouseX, mouseY);
  }
}
