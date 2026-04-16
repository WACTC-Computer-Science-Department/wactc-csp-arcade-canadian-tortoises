// ============================================
// UI — Your name here!
// Draws menus, HUD, and game over screen.
// Uses the game manager for data.
// ============================================

function drawMenu(gm) {
  fill('#ffffff');
  textAlign(CENTER, CENTER);
  textSize(32);
  text('YOUR GAME NAME', width / 2, height / 3);
  textSize(16);
  text('Press SPACE or ENTER to start', width / 2, height / 2);

  if (gm.highScore > 0) {
    text('High Score: ' + gm.highScore, width / 2, height * 2 / 3);
  }

  // TODO: Add instructions, credits, game art, etc.
}

function drawHUD(gm) {
  fill('#ffffff');
  textAlign(LEFT, TOP);
  textSize(14);
  text('Score: ' + gm.score, 715, 10);
  text('Wave: ' + gm.wave, 715, 50);
  text('Health: ' + gm.player.health, 10, 70);
  text('Enemies: ' + gm.enemies.length, 715, 30);
  text('Stamina: ' + Math.floor(gm.player.stamina), 10, 110);
  text("Money: " + money, 10, 150);

  // TODO: Add more HUD elements
  // Ideas: health bar, minimap, wave progress, combo counter
}

function drawGameOver(gm) {
  fill('#ffffff');
  textAlign(CENTER, CENTER);
  textSize(32);
  text('GAME OVER', width / 2, height / 3);
  textSize(20);
  text('Score: ' + gm.score, width / 2, height / 2 - 15);
  text('Wave: ' + gm.wave, width / 2, height / 2 + 15);
  textSize(14);
  text('Press R to return to menu', width / 2, height * 2 / 3);

  // TODO: Add game over art, stats summary, etc.
}
