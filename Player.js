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
    this.color = color(255, 255, 255);
    this.img_up = img;
    this.img_down = img;
    this.img_left = img;
    this.img_right = img;
    this.direction = 'down';  // current facing direction
  }

  update(terrain) {
    let nextX = this.x;
    let nextY = this.y;

    if (keyIsDown(LEFT_ARROW) || keyIsDown(65))  { nextX -= this.speed; this.direction = 'left'; }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) { nextX += this.speed; this.direction = 'right'; }
    if (keyIsDown(UP_ARROW) || keyIsDown(87))    { nextY -= this.speed; this.direction = 'up'; }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83))  { nextY += this.speed; this.direction = 'down'; }

    if (keyIsDown(SHIFT) || keyIsDown(16)) this.speed = 5;
    else this.speed = 3;

    if (!terrain || !terrain.isBlockedAt(nextX, this.y, this.size)) {
      this.x = nextX;
    }
    if (!terrain || !terrain.isBlockedAt(this.x, nextY, this.size)) {
      this.y = nextY;
    }

    this.x = constrain(this.x, this.size * 2, width - this.size * 2);
    this.y = constrain(this.y, this.size * 2, height - this.size * 2);
  }
  
  draw() {
    // Pick sprite based on facing direction
    let img = this.img_down;
    if (this.direction === 'up') img = this.img_up;
    else if (this.direction === 'left') img = this.img_left;
    else if (this.direction === 'right') img = this.img_right;

    push();
    if (img) {
      // If all images are the same sprite, rotate it to face the direction
      if (this.img_up === this.img_down) {
        translate(this.x, this.y);
        if (this.direction === 'up') rotate(PI);
        else if (this.direction === 'left') rotate(HALF_PI);
        else if (this.direction === 'right') rotate(-HALF_PI);
        else rotate(0);  // down
        image(img, -this.size, -this.size, this.size * 3, this.size * 3);
      } else {
        image(img, this.x - this.size, this.y - this.size, this.size * 3, this.size * 3);
      }
    } else {
      fill(this.color);
      ellipse(this.x, this.y, this.size * 2);
    }
    pop();

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

