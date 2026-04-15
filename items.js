class Item extends GameObject {
  constructor(x, y, name, icon) {
    super(x, y, 16, 16);
    this.name = name;
    this.icon = icon;
  }
  use(player){  }
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
  constructor(x, y,damage,range,icon) {
    super(x, y, "Crossbow", icon);
    this.damage = damage;
    this.range = range;
    this.icon = icon;
  }
  use(player) {
    player.hasCrossbow = true;
    console.log("Crossbow picked up");
  } 
}
