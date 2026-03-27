// ============================================
// GAME LOOP — Modify with care!
// Creates the GameManager and runs the loop.
// ============================================

let gm;  // GameManager instance

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
  if (gm.gameState === 'menu' && (key === ' ' || keyCode === ENTER)) {
    gm.startGame();
  } else if (gm.gameState === 'gameover' && (key === 'r' || key === 'R')) {
    gm.gameState = 'menu';
  }
  // TODO: Add game-specific key controls
  // Example: if (key === ' ' && gm.gameState === 'playing') { gm.playerShoot(mouseX, mouseY); }
}

function mousePressed() {
  if (gm.gameState === 'playing') {
    gm.playerShoot(mouseX, mouseY);
  }
}
