function Cell(x, y) {
    this.x = x
    this.y = y
    this.val = undefined
    this.fixed = true
    this.valid = true


    this.draw = function() {
        push()
        translate(this.x * CELL_SIZE, this.y * CELL_SIZE)
        stroke(0)
        rect(0, 0, CELL_SIZE, CELL_SIZE)
        textAlign(CENTER)
        textSize(this.fixed ? 20 : 40)
        if(this.val) {
            if(this.fixed) {
                fill(0)
            } else {
                fill(this.valid ? 'BLUE' : 'RED')
            }
            text(this.val, CELL_SIZE / 2, CELL_SIZE / 2 + (this.fixed ? 10 : 15))
        }
        pop()
    }

}
