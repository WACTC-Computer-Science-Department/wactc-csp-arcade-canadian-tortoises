// ============================================
// PLAYER — Your name here!
// Extends GameObject with player controls.
// ============================================

class Player extends GameObject {
  constructor(x, y) {
    super(x, y, 15);  // size = 15
    this.speed = 5;
    this.health = 100;
    this.maxHealth = 100;
    this.color = '#00ff88';

    // TODO: Add any additional properties your player needs
    // Examples: this.abilities = [], this.score = 0, this.direction = 0
  }

  update() {
    // TODO: Handle keyboard input for movement
    // Use keyIsDown(LEFT_ARROW) or keyIsDown(65) for 'A', etc.
    // Don't forget to keep the player inside the canvas!
    //
     // Calculate new position
  if (keyCode == UP_ARROW) this.y -= this.speed;
  if (keyCode == DOWN_ARROW) this.y += this.speed;
  if (keyCode == LEFT_ARROW) this.x -= this.speed;
  if (keyCode == RIGHT_ARROW) this.x += this.speed;
    // Example:
    // if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) this.x -= this.speed;
    // if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) this.x += this.speed;
    // if (keyIsDown(UP_ARROW) || keyIsDown(87)) this.y -= this.speed;
    // if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) this.y += this.speed;
    //
    // Keep in bounds:
    // this.x = constrain(this.x, this.size, width - this.size);
    // this.y = constrain(this.y, this.size, height - this.size);
  }

  draw() {
    // TODO: Draw the player
    fill(this.color);
    ellipse(this.x, this.y, this.size * 2);

    // TODO: Draw health bar above player
    // let barWidth = 30;
    // let healthPercent = this.health / this.maxHealth;
    // fill(100);
    // rect(this.x - barWidth/2, this.y - this.size - 10, barWidth, 4);
    // fill(0, 255, 100);
    // rect(this.x - barWidth/2, this.y - this.size - 10, barWidth * healthPercent, 4);
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
