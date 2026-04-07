class Cell {
  constructor(row, col, size) {
    this.row = row;
    this.col = col;
    this.size = size;
    this.isWall = random(1) < 0.5;
  }

  display() {
    if (this.isWall) {
      fill(40, 40, 60);
    } else {
      fill(180, 200, 220);
    }
    noStroke();
    rect(this.col * this.size, this.row * this.size, this.size - 1, this.size - 1);
  }
}
