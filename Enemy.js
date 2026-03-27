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
    this.damage = 10;
    this.color = "#C82626";
    this.target = null; 
  }

  update() {
    // TODO: Add AI behavior
    // Example: Move toward the player
    //
    // To chase a target:
    // let dx = target.x - this.x;
    // let dy = target.y - this.y;
    // let distance = dist(this.x, this.y, target.x, target.y);
    // if (distance > 0) {
    //   this.x += (dx / distance) * this.speed;
    //   this.y += (dy / distance) * this.speed;
    // }
  }

  draw() {
    fill(this.color);
    ellipse(this.x, this.y, this.size * 2);
  }

  takeDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.alive = false;
    }
  }


  //TODO: Add enemy-specific methods
  // Examples: patrol(), attack(), dropLoot()
}

// ============================================
// ENEMY SUBCLASSES — Create different enemy types!
// ============================================

// TODO: Create enemy subclasses with different behaviors

class FastEnemy extends Enemy {
  constructor(x, y) {
    super(x, y, 8, 4);  // smaller, faster
    this.color = '#ff8800';
    this.health = 15;
    this.damage = 5;
  }
}

class TankEnemy extends Enemy {
  constructor(x, y) {
    super(x, y, 20, 1);  // bigger, slower
    this.color = '#cc0000';
    this.health = 100;
    this.damage = 25;
  }
}

class BossEnemy extends Enemy {
  constructor(x, y) {
    super(x, y, 30, 0.5);
    this.color = '#9900ff';
    this.health = 500;
    this.damage = 40;
    this.phase = 1;
  }

  update() {
    super.update();  // call parent AI
    // Add boss-specific behavior based on this.phase
  }
}
