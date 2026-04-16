// ============================================
// PLAYER — Your name here!
// Extends GameObject with player controls.
// =======================================

let timer = 0; 
let regenRate = 0.2; 
let money = 0;

class Player extends GameObject {
  constructor(x, y, img) {
    super(x, y, 15);  // size = 15
    this.speed = 5;
    this.health = 100;
    this.maxHealth = 100;
    this.stamina = 100;
    this.maxStamina = 100;
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

     
    if (this.stamina > 0 && (keyIsDown(SHIFT) || keyIsDown(16))) {
      this.speed = 5;
      this.stamina -= .8 ; // Decrease stamina while sprinting
    
    } else {
      this.speed = 3; // Reduce speed if stamina is depleted
    }
    
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
    
    if (this.stamina < this.maxStamina) {
      this.stamina += regenRate;
    }
    if (this.stamina <= 0) {
      timer++;
      console.log(timer);
      regenRate = 0;
      
      if (timer > 120) { // 2 second cooldown
        this.stamina++;
        timer = 0;
        regenRate = 0.2;
      }
    }
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
    let barWidth = 150;
    let barHeight = 10;
    let healthPercent = this.health / this.maxHealth;
    fill(100);
    rect(55 - barWidth/3, 90, barWidth, barHeight);
    fill(0, 255, 100);
    rect(55 - barWidth/3, 90, barWidth * healthPercent, barHeight);
    strokeWeight(2);
    stroke(0);
    rect(55 - barWidth/3, 90, barWidth * healthPercent, barHeight);


    // STAMINA BAR
    let staminaPercent = this.stamina / this.maxStamina;
    fill(100);
    rect(55 - barWidth/3, 125, barWidth, barHeight);
    fill(255, 165, 0);
    rect(55 - barWidth/3, 125, barWidth * staminaPercent, barHeight);
    strokeWeight(2);
    stroke(0);
    rect(55 - barWidth/3, 125, barWidth * staminaPercent, barHeight);
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

