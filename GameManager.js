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
  }

  startGame() {
    this.player = new Player(width / 2, height / 2);
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

    // Update player
    this.player.update();

    // Spawn enemies
    this.spawnTimer++;
    if (this.spawnTimer >= this.spawnRate) {
      this.spawnEnemy();
      this.spawnTimer = 0;
    }

    // TODO: Update all enemies (polymorphic — works for any Enemy subclass!)
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].update();
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

    // TODO: Draw all game objects (polymorphic — each draws itself!)
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].draw();
    }

    for (let i = 0; i < this.projectiles.length; i++) {
      this.projectiles[i].draw();
    }

    // Draw player last (on top)
    this.player.draw();
  }

  spawnEnemy() {
    // TODO: Spawn enemies at random positions
    // Use different Enemy subclasses for variety!
    //
    // Example:
    let side = floor(random(4));  // 0=top, 1=right, 2=bottom, 3=left
    let x, y;
    if (side === 0) { x = random(width); y = -20; }
    else if (side === 1) { x = width + 20; y = random(height); }
    else if (side === 2) { x = random(width); y = height + 20; }
    else { x = -20; y = random(height); }
    
    this.enemies.push(new Enemy(x, y));
  }

  checkCollisions() {
    // TODO: Check projectile-enemy collisions
    // The beauty of OOP: collidesWith() works for ANY subclass!
    for (let i = 0; i < this.projectiles.length; i++) {
      for (let j = 0; j < this.enemies.length; j++) {
        if (this.projectiles[i].collidesWith(this.enemies[j])) {
          this.enemies[j].takeDamage(this.projectiles[i].damage);
          this.projectiles[i].alive = false;
          if (!this.enemies[j].alive) {
            this.score += 10;
          }
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

  gameOver() {
    if (this.score > this.highScore) {
      this.highScore = this.score;
    }
    this.gameState = 'gameover';
  }
}

let score = 0;
let img1;
let i = 0;
let a = i + 10;
let j = 1;
let Creatures_Array = [];
let count = 0;
let tempVx = 0;
let tempVy = 0;

function preload() {
  img1 = loadImage("buddy.png");
}
class Creature {
  constructor(x, y, img1) {
    this.x = x; // x position
    this.y = y; // y position
    this.color = color(random(255), random(255), random(255));
    this.speed = 5;
    this.size = 100;
    this.img1 = img1;
  }
  contains(px, py) {
    return px > this.x && px < this.x + 100 && py > this.y && py < this.y + 100;
  }

  display() {
    fill(this.color);
    noStroke();
    //circle(this.x, this.y,this.size);
    image(this.img1, this.x, this.y, 100, 100);
  }

  move() {
    this.x -= this.speed;
    this.y -= this.speed;

    if (this.x >= 785) {
      this.speed *= -1;
    } else if (this.x <= 10) {
      this.speed *= -1;
    }

    if (this.y <= 0) {
      this.speed *= -1;
    } else if (this.y >= 415) {
      this.speed *= -1;
    }
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return d < 80;
  }
}
function setup() {
  createCanvas(800, 500);
  Creatures_Array.push(new Creature(random(0, 500), random(0, 400), img1));
}

function draw() {
  background(200, 220, 255);
  fill("0");
  textSize(30);
  text("Score: " + score, 15, 35);
  for(let i = 0; i <= Creatures_Array.length-1; i++) {
      Creatures_Array[i].display();
      Creatures_Array[i].move();
      
    for (let j = i+1; j <= Creatures_Array.length - 1; j++) {
      console.log("hello")
      if (Creatures_Array[i].intersects(Creatures_Array[j])) {
        console.log("hit");
        Creatures_Array[j].speed *= -1;
        Creatures_Array[i].speed *= -1;
      }
    }
  }
}
function mouseClicked() {
  for (let Creature_Object of Creatures_Array) {
    if (Creature_Object.contains(mouseX, mouseY)) {
      console.log("Clicked");
      console.log(a);
      score++;
      Creatures_Array.splice(Creatures_Array.length - 1, 1);
    }
  }
}

function keyPressed() {
  if (key === "c") {
    console.log(Creatures_Array);
    Creature_Object = new Creature(50, 50, img1);
    Creature_Object.x = mouseX;
    Creature_Object.y = mouseY;
    image(img1, mouseX, mouseY, 100, 100);
    Creatures_Array.push(Creature_Object);
  }
}

function spawn() {
  Creatures_Array.push(new Creature(random(0, 500), random(0, 400), img1));
}
