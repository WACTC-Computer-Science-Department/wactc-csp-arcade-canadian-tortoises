class Item extends GameObject {
  constructor(x, y, name, icon) {
    super(x, y, 16, 16);
    this.name = name;
    this.icon = icon;
  }
  use(player) { }
  draw() {
    fill(200, 200, 0);
    rectMode(CENTER);
    noStroke();
    rect(this.x, this.y, this.size * 1.5, this.size * 1.5);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(10);
    text(this.name.charAt(0), this.x, this.y);
  }
}

class HealthPotion extends Item {
  constructor(x, y) {
    super(x, y, "Health Potion", null);
  }
  use(player) {
    player.health = Math.min(player.maxHealth, player.health + 20);
    console.log("Health potion used");
  }
}
class Crossbow extends Item {
  constructor(x, y, damage, range, icon) {
    super(x, y, "Crossbow", icon);
    this.damage = damage;
    this.range = range;
    this.icon = icon;
  }
  use(player) {
    player.hasCrossbow = true;
    console.log("Crossbow picked up");
  }
  draw() {
    fill(150, 75, 0);
    rectMode(CENTER);
    noStroke();
    rect(this.x, this.y, this.size * 1.8, this.size * 0.7);
    fill(100);
    ellipse(this.x - this.size * 0.7, this.y, this.size * 0.7, this.size * 0.7);
    ellipse(this.x + this.size * 0.7, this.y, this.size * 0.7, this.size * 0.7);
  }
}
