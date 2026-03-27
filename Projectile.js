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
}
  // TODO: Create projectile subclasses for variety
  // Examples: class Missile extends Projectile (homing)
  //           class Laser extends Projectile (instant, no travel)
  //           class Spell extends Projectile (area damage)
<<<<<<< HEAD
  
  class StrongBow extends Projectile {
    constructor(x, y, dirX, dirY, speed, damage) {
    super(x, y, 4);  // size = 4
    this.speed = speed || 8;
    this.damage = damage || 10;
    this.color = '#3562c4';
    }
  }

  class Lazer extends Projectile {
    constructor(x, y, dirX, dirY, speed, damage) {
    super(x, y, 4);  // size = 4
    this.speed = speed || 8;
    this.damage = damage || 10;
    this.color = '#3562c4';
    }
  }

  class Spell extends Projectile {
    constructor(x, y, dirX, dirY, speed, damage) {
    super(x, y, 4);  // size = 4
    this.speed = speed || 8;
    this.damage = damage || 10;
    this.color = '#3562c4';
    }
  }

}
=======
  class Laser extends Projectile{

  } 

>>>>>>> 53d55c4fa11251a01b9de72f61d70e4cae5fc391
