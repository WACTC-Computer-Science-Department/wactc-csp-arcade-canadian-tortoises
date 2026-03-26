// ============================================
// GAME OBJECT — Base Class
// All game objects extend this class.
// Edit carefully — changes affect ALL subclasses!
// ===========================================

class GameObject {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.alive = true;
  }

  // Override this in subclasses to add movement, AI, etc.
  update() {
    // Base class does nothing — subclasses add behavior
  }

  // Override this in subclasses to draw different shapes/sprites
  draw() {
    // Default: draw a circle
    fill(200);
    ellipse(this.x, this.y, this.size * 2);
  }

  // Check if this object overlaps with another GameObject
  collidesWith(other) {
    if (!this.alive || !other.alive) return false;
    let d = dist(this.x, this.y, other.x, other.y);
    return d < this.size + other.size;
  }

  // Check if this object is off-screen
  isOffScreen() {
    return (
      this.x < -this.size ||
      this.x > width + this.size ||
      this.y < -this.size ||
      this.y > height + this.size
    );
  }

  // TODO: Add any shared methods your game needs
  // Examples: takeDamage(amount), respawn(), getCenter(), etc.
}
