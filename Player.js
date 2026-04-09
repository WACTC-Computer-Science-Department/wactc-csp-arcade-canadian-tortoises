// ============================================
// PLAYER — Your name here!
// Extends GameObject with player controls.
// =======================================

class Player extends GameObject {
  constructor(x, y, img) {
    super(x, y, 15);  // size = 15
    this.speed = 5;
    this.health = 100;
    this.maxHealth = 100;
    this.color = color(0,2,44);
    this.img_up = img;
    this.img_down = img;
    this.img_left = img;
    this.img_right = img;

    // TODO: Add any additional properties your player needs
    // Examples: this.abilities = [], this.score = 0, this.direction = 0
  }

  update(terrain) {
    let nextX = this.x;
    let nextY = this.y;

    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) nextX -= this.speed;
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) nextX += this.speed;
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) nextY -= this.speed;
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) nextY += this.speed;

    if (keyIsDown(SHIFT) || keyIsDown(16)) this.speed = 5;
    else this.speed = 3;

    if (!terrain || !terrain.isBlockedAt(nextX, this.y, this.size)) {
      this.x = nextX;
    }
    if (!terrain || !terrain.isBlockedAt(this.x, nextY, this.size)) {
      this.y = nextY;
    }

    this.x = constrain(this.x, this.size, width - this.size);
    this.y = constrain(this.y, this.size, height - this.size);
  }
  
  draw() {
    // TODO: Draw the player
    if (this.img_up) {
      image(this.img_up, this.x - this.size, this.y - this.size, this.size * 3, this.size * 3);
    } else {
      fill(this.color);
      ellipse(this.x, this.y, this.size * 2);
    }

    // TODO: Draw health bar above player
    let barWidth = 50;
    let healthPercent = this.health / this.maxHealth;
    fill(100);
    rect(this.x - barWidth/3, this.y - this.size - 10, barWidth, 4);
    fill(0, 255, 100);
    rect(this.x - barWidth/3, this.y - this.size - 10, barWidth * healthPercent, 4);
  }

  takeDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.health = 0;
      this.alive = false;
    }
    // TODO: Add visual feedback (flash red, knockback, etc.)
  }
  // TODO: Add player-specific methods
  // Examples: shoot(), dash(), useAbility(), heal()

}

