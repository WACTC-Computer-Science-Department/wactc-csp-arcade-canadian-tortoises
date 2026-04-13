class Cell {
  constructor(row, col, size) {
    this.row = row;
    this.col = col;
    this.size = size;
    this.isWall = false;
    this.color = [80, 180, 140]; // default floor color
  }

  display() {
    fill(this.color[0], this.color[1], this.color[2]);
    noStroke();
    rect(this.col * this.size, this.row * this.size, this.size, this.size);
  }
}

class Terrain {
  constructor(cols, rows, cellSize) {
    this.cols = cols;
    this.rows = rows;
    this.cellSize = cellSize;
    this.grid = [];
    this.generate();
  }

  generate() {
    this.grid = [];
    for (let row = 0; row < this.rows; row++) {
      let rowCells = [];
      for (let col = 0; col < this.cols; col++) {
        let cell = new Cell(row, col, this.cellSize);
        if (row === 0 || col === 0 || row === this.rows - 1 || col === this.cols - 1) {
          cell.isWall = true;
          cell.color = [0, 0, 0]; // Black for borders
        } else {
          cell.isWall = random(1) < 0.20;
          if (cell.isWall) {
            cell.color = [255, 0, 0]; // Red for walls
          } else {
            cell.color = [80 + random(30), 140 + random(40), 120 + random(40)]; // Greenish floor colors
          }
        }
        rowCells.push(cell);
      }
      this.grid.push(rowCells);
    }
  }

  draw() {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        this.grid[row][col].display();
      }
    }
  }

  isWallAt(col, row) {
    if (row < 0 || col < 0 || row >= this.rows || col >= this.cols) return false;
    return this.grid[row][col].isWall;
  }

  isBlockedAt(x, y, objectSize) {
    let left = x - objectSize;
    let right = x + objectSize;
    let top = y - objectSize;
    let bottom = y + objectSize;

    let startCol = floor(constrain(left / this.cellSize, 0, this.cols - 1));
    let endCol = floor(constrain(right / this.cellSize, 0, this.cols - 1));
    let startRow = floor(constrain(top / this.cellSize, 0, this.rows - 1));
    let endRow = floor(constrain(bottom / this.cellSize, 0, this.rows - 1));

    for (let row = startRow; row <= endRow; row++) {
      for (let col = startCol; col <= endCol; col++) {
        if (this.isWallAt(col, row)) {
          return true;
        }
      }
    }
    return false;
  }

  clearArea(centerX, centerY, radiusCells) {
    let centerCol = floor(centerX / this.cellSize);
    let centerRow = floor(centerY / this.cellSize);
    for (let row = centerRow - radiusCells; row <= centerRow + radiusCells; row++) {
      for (let col = centerCol - radiusCells; col <= centerCol + radiusCells; col++) {
        if (row >= 0 && col >= 0 && row < this.rows && col < this.cols) {
          this.grid[row][col].isWall = false;
        }
      }
    }
  }
}
