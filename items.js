class Item extends GameObject {
  constructor(x, y, name, icon) {
    super(x, y, 16, 16);
    this.name = name;
    this.icon = icon;
  }
  use(player) {
    // Override in subclass!
    console.log("Item used");
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