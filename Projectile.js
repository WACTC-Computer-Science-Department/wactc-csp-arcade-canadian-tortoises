// ============================================
// PROJECTILE — Your name here!
// Extends GameObject for bullets, spells, etc.
// ============================================

class Projectile extends GameObject {
  constructor(x, y, dirX, dirY, speed, damage) {
    super(x, y, 4);  // size = 4
    this.speed = speed || 8;
    this.damage = damage || 10;
    this.color = '#ffff00';

    // Normalize direction
    let len = Math.sqrt(dirX * dirX + dirY * dirY);
    if (len > 0) {
      this.velX = (dirX / len) * this.speed;
      this.velY = (dirY / len) * this.speed;
    } else {
      this.velX = 0;
      this.velY = -this.speed;
    }

    // Who fired this? Prevents self-damage
    this.owner = null;  // set to 'player' or 'enemy' after creation
  }

  update() {
    this.x += this.velX;
    this.y += this.velY;

    // Remove if off-screen
    if (this.isOffScreen()) {
      this.alive = false;
    }
  }

  draw() {
    fill(this.color);
    ellipse(this.x, this.y, this.size * 2);
  }

  // TODO: Create projectile subclasses for variety
  // Examples: class Missile extends Projectile (homing)
  //           class Laser extends Projectile (instant, no travel)
  //           class Spell extends Projectile (area damage)
}

class StrongBow extends Projectile {
  constructor(x, y, dirX, dirY) {
    super(x, y, dirX, dirY, 5, 20);
    this.color = '#3562c4';
  }
}

class Lazer extends Projectile {
  constructor(x, y, dirX, dirY) {
    super(x, y, dirX, dirY, 20, 5);
    this.color = '#9b0000';
  }
}

class Homing extends Projectile {
  constructor(x, y, dirX, dirY) {
    super(x, y, dirX, dirY, 8, 15);
    this.color = '#285e49';
  }
}
class BigBullet extends Projectile {
  constructor(x, y, dirX, dirY) {
    super(x, y, dirX, dirY, 4, 25);  // Normal speed
    this.size = 20;  // Make it bigger than the default size of 4
    this.color = '#ff0000';  // Bright red for visibility
  }
}

