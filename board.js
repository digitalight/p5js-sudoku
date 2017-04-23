function Board() {
  this.cells = [];
  this.builder = new Builder(this);

  // Makes the cells for the board
  for (var x = 0; x < 9; x++) {
    this.cells[x] = []
    for (var y = 0; y < 9; y++) {
      this.cells[x][y] = new Cell(x, y)
    }
  }

  this.draw = function() {
    for (var x = 0; x < 9; x++) {
      for (var y = 0; y < 9; y++) {
        this.cells[x][y].valid = this.isValid(x, y);
        this.cells[x][y].draw();
      }
    }
    push();
    strokeWeight(4);
    stroke(0);
    for (var i = 0; i <= 3; i++) {
      line(3 * CELL_SIZE * i, 0, 3 * CELL_SIZE * i, height);
      line(0, 3 * CELL_SIZE * i, width, 3 * CELL_SIZE * i);
    }
    pop();
  }

  this.next = function(x, y) {
      if(x === 8 && y === 8) {
          return [0, 0]
      }

      if(x + 1 > 8) {
          return [0, y + 1]
      }

      return [x + 1, y]
  }

  this.isValid = function(x, y) {
      for(var i = 0; i<9; i++) {
          if(i == y) continue
          if(this.cells[x][i].val === this.cells[x][y].val) {
              return false
          }
      }

      for(i = 0; i< 9; i++) {
          if(i === x) continue
          if(this.cells[i][y].val === this.cells[x][y].val) {
              return false
          }
      }

      var row = Math.floor(x / 3) * 3
      var col = Math.floor(y / 3) * 3
      for(var i = 0; i< 3; i++) {
          for(var j = 0; j< 3; j++) {
              var r = i + row
              var c = j + col
              if(r === x && c === y) continue
              if(this.cells[r][c].val === this.cells[x][y].val) {
                  return false
              }
          }
      }

      return true
  }
  
  this.build = function() {
      this.builder.build()
  }
}
