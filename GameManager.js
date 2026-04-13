// ============================================
// GAME MANAGER — Your name here!
// Manages all game objects, spawning, and collisions.
// This is the brain of the game.
// ============================================

class GameManager {
  constructor() {
    this.player = null;
    this.enemies = [];
    this.projectiles = [];
    this.score = 0;
    this.highScore = 0;
    this.wave = 1;
    this.spawnTimer = 0;
    this.spawnRate = 90;  // frames between spawns
    this.gameState = 'menu';  // 'menu', 'playing', 'gameover'
    let tileSize = 40;
    let cols = floor(width / tileSize);
    let rows = floor(height / tileSize); // Fit canvas exactly
    this.terrain = new Terrain(cols, rows, tileSize);
  }

  startGame(img) {
    this.player = new Player(width / 2, height / 2, img);
    this.terrain.clearArea(this.player.x, this.player.y, 1);
    this.enemies = [];
    this.projectiles = [];
    this.score = 0;
    this.wave = 1;
    this.spawnTimer = 0;
    this.spawnRate = 90;
    this.gameState = 'playing';
  }

  update() {
    if (this.gameState !== 'playing') return;

    // Update player with terrain collision
    this.player.update(this.terrain);

    // Spawn enemies
    this.spawnTimer++;
    if (this.spawnTimer >= this.spawnRate) {
      this.spawnEnemy();
      this.spawnTimer = 0;
    }

    // TODO: Update all enemies (polymorphic — works for any Enemy subclass!)
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].update(this);
    }

    // TODO: Update all projectiles
    for (let i = 0; i < this.projectiles.length; i++) {
      this.projectiles[i].update();
    }

    // Check collisions
    this.checkCollisions();

    // Remove dead objects (backward loop!)
    this.cleanup();
  }

  draw() {
    if (this.gameState !== 'playing') return;

    // Draw terrain first so game objects appear on top
    this.terrain.draw();

    // TODO: Draw all game objects (polymorphic — each draws itself!)
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].draw();
    }

    // Draw player before projectiles so bullets appear on top
    this.player.draw();

    for (let i = 0; i < this.projectiles.length; i++) {
      this.projectiles[i].draw();
    }
  }

  spawnEnemy() {
    // Spawn enemies at random positions around screen edges
    let side = floor(random(4));  // 0=top, 1=right, 2=bottom, 3=left
    let x, y;
    if (side === 0) { x = random(width); y = -20; }
    else if (side === 1) { x = width + 20; y = random(height); }
    else if (side === 2) { x = random(width); y = height + 20; }
    else { x = -20; y = random(height); }
    
    let enemy;
    let r = random();
    if (r < 0.5) enemy = new Enemy(x, y);  // 50% normal
    else if (r < 0.7) enemy = new FastEnemy(x, y);  // 20% fast
    else if (r < 0.85) enemy = new TankEnemy(x, y); // 15% tank
    else if (r < 0.95) enemy = new BossEnemy(x, y); // 10% boss
    else enemy = new sniperEnemy(x, y); // 5% sniper

    enemy.target = this.player;
    this.enemies.push(enemy);
  }

  checkCollisions() {
    // TODO: Check projectile-enemy collisions
    // The beauty of OOP: collidesWith() works for ANY subclass!
    for (let i = 0; i < this.projectiles.length; i++) {
      for (let j = 0; j < this.enemies.length; j++) {
        if (this.projectiles[i].owner === 'player' && this.projectiles[i].collidesWith(this.enemies[j])) {
          this.enemies[j].takeDamage(this.projectiles[i].damage);
          this.projectiles[i].alive = false;
          if (!this.enemies[j].alive) {
            this.score += 10;
          }
        }
      }
    }

    // Check projectile-player collisions
    for (let i = 0; i < this.projectiles.length; i++) {
      if (this.projectiles[i].owner === 'enemy' && this.projectiles[i].collidesWith(this.player)) {
        this.player.takeDamage(this.projectiles[i].damage);
        this.projectiles[i].alive = false;
        if (!this.player.alive) {
          this.gameOver();
        }
      }
    }

    // TODO: Check player-enemy collisions
    for (let i = 0; i < this.enemies.length; i++) {
      if (this.player.collidesWith(this.enemies[i])) {
        this.player.takeDamage(this.enemies[i].damage);
        this.enemies[i].alive = false;
        if (!this.player.alive) {
          this.gameOver();
        }
      }
    }
  }
  cleanup() {
    // Remove dead enemies (backward loop!)
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      if (!this.enemies[i].alive) {
        this.enemies.splice(i, 1);
      }
    }

    // Remove dead projectiles
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      if (!this.projectiles[i].alive) {
        this.projectiles.splice(i, 1);
      }
    }
  }

  playerShoot(targetX, targetY) {
    // Create a projectile aimed at the target
    let dirX = targetX - this.player.x;
    let dirY = targetY - this.player.y;
    let p = new Projectile(this.player.x, this.player.y, dirX, dirY);
    p.owner = 'player';
    this.projectiles.push(p);
  }

  playerShoot_bigbullet(targetX, targetY) {
    // Create a projectile aimed at the target
    let dirX = targetX - this.player.x;
    let dirY = targetY - this.player.y;
    let bigBullet = new BigBullet(this.player.x, this.player.y, dirX, dirY);
    bigBullet.owner = 'player';
    this.projectiles.push(bigBullet);
    console.log('Big bullet created at', this.player.x, this.player.y, 'towards', targetX, targetY);
  }

  enemyShoot(enemy, targetX, targetY) {
    // Create a projectile aimed at the target from enemy position
    let dirX = targetX - enemy.x;
    let dirY = targetY - enemy.y;
    let p = new Projectile(enemy.x, enemy.y, dirX, dirY);
    p.owner = 'enemy';
    this.projectiles.push(p);
  }

  gameOver() {
    if (this.score > this.highScore) {
      this.highScore = this.score;
    }
    this.gameState = 'gameover';
  }
}
