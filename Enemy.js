// dschermele test============================================
// ENEMY — Your name here!
// ============================================
// ENEMY — nicolas reggiani
//(//propetiys)
// Extends GameObject with AI behavior.
// Create subclasses for different enemy types!
// ============================================

class Enemy extends GameObject {
  constructor(x, y, size, speed) {
    super(x, y, size || 12);
    this.speed = speed || 2;
    this.health = 30;
    this.maxHealth = this.health;
    this.damage = 10;
    this.color = "#C82626";
    this.target = null; 
  }

  update() {
    // TODO: Add AI behavior
    // Example: Move toward the player
    if (!this.target) return;
    let dx = this.target.x - this.x;
    let dy = this.target.y - this.y;
    let distance = dist(this.x, this.y, this.target.x, this.target.y);
    if (distance > 0) {
      this.x += (dx / distance) * this.speed;
      this.y += (dy / distance) * this.speed;
    }
  }
    
  draw() {
    fill(this.color);
    ellipse(this.x, this.y, this.size * 2);
    let barWidth = 50;
    let enemyHealthPercent = constrain(this.health / this.maxHealth, 0, 1);

    fill(100);
    rect(this.x - barWidth/2, this.y - this.size - 10, barWidth, 4);
    
    fill(0, 255, 100);
    rect(this.x - barWidth/2, this.y - this.size - 10, barWidth * enemyHealthPercent, 4);
  }

  takeDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.health = 0;
      this.alive = false;
    }
  }
  //TODO: Add enemy-specific methods
  // Examples: patrol(), attack(), dropLoot()
}

class FastEnemy extends Enemy {
  constructor(x, y) {
    super(x, y, 8, 4);  // smaller, faster
    this.color = '#ff8800';
    this.health = 15;
    this.maxHealth = this.health;
    this.damage = 5;
  }
}

class TankEnemy extends Enemy {
  constructor(x, y) {
    super(x, y, 20, 1);  // bigger, slower
    this.color = '#cc0000';
    this.health = 100;
    this.maxHealth = this.health;
    this.damage = 25;
  }
}

class BossEnemy extends Enemy {
  constructor(x, y) {
    super(x, y, 30, 0.5);
    this.color = '#9900ff';
    this.health = 500;
    this.maxHealth = this.health;
    this.damage = 40;
    this.phase = 1;
  }
}

class miteEnemy extends Enemy {
  constructor(x, y) {
    super(x, y, 8, 4); // smaller, faster
    this.color = "#2ba76f";
    this.health = 3;
    this.maxHealth = this.health;
    this.damage = 1;
  }
}
class sniperEnemy extends Enemy {
  constructor(x, y) {
    super(x, y, 12, 2); // normal size, normal speed
    this.color = "#0000ff";
    this.health = 20;
    this.maxHealth = this.health;
    this.damage = 15;
    this.range = 200; 
    this.shootCooldown = 0;
    this.target = null;
  }  
  update(gameManager) {
    super.update(gameManager);
    if (this.target) {
      let distance = dist(this.x, this.y, this.target.x, this.target.y);
      if (distance <= this.range && this.shootCooldown <= 0) {
        gameManager.enemyShoot(this, this.target.x, this.target.y);
        this.shootCooldown = 60; // shoot every 60 frames (1 second at 60fps)
      }
      if (this.shootCooldown > 0) {
        this.shootCooldown--;
      }
    }
  }

