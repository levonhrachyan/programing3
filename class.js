class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;

    }

    mult() {
        var empty = random(this.chooseCell(0))
        this.multiply++
        if (empty && this.multiply > 3) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}




class Xotaker {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.index = index;
        this.directions = [
        ]
    }

    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;

    }

    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            var xt = new Xotaker(newX, newY, this.index)
            xotakerArr.push(xt)
            this.energy = 5;
        }
    }

    move() {
        var empty = random(this.chooseCell(0))

        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = this.index
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
            this.energy--;
        }
    }

    eat() {
        var food = random(this.chooseCell(1))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (grassArr[i].x === newX && grassArr[i].y === newY) {
                    grassArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in xotakerArr) {
                if (xotakerArr[i].x === this.x && xotakerArr[i].y === this.y) {
                    xotakerArr.splice(i, 1)
                }
            }
        }
    }
}

//////////////////////////////////////////////////////////////
class Vagr {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 10;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 2, this.y + 2],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x -2, this.y + 2],
            [this.x - 1, this.y],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y],
            [this.x + 2, this.y + 2],
            [this.x - 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 1]
        ]
    }
    chooseCell(character) {
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;
    }
    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 13) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            var vr = new Vagr(newX, newY, this.index)
            vagrArr.push(vr)
        }
    }
//     move() {
//         var empty = random(this.chooseCell(0))
        
//         if (empty) {
//             var newX = empty[0]
//             var newY = empty[1]
//             matrix[newY][newX] = 3
//             matrix[this.y][this.x] = 0
// console.log(this.chooseCell(0))
//             this.x = newX
//             this.y = newY
//             this.energy--;
//         }
//     }
    move() {

        var newCell = random(this.chooseCell(0))

        if (newCell) {
            // console.log(newCell)
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;
            this.x = newX;
            this.y = newY;
            this.energy -= 1;
        }
    }
    move2() {
        var empty = random(this.chooseCell(1))

        if (empty) {
            var newX = empty[0]
            var newY = empty[1]

            matrix[newY][newX] = this.index
            matrix[this.y][this.x] = 1

            this.x = newX
            this.y = newY
            this.energy--;
        }
    }

    eat() {
        var food = random(this.chooseCell(2))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = this.index
            matrix[this.y][this.x] = 0

            for (var i in xotakerArr) {
                if (xotakerArr[i].x === newX && xotakerArr[i].y === newY) {
                    xotakerArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 3
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in vagrArr) {
                if (vagrArr[i].x == this.x && vagrArr[i].y == this.y) {
                    vagrArr.splice(i, 1)
                }
            }
        }
    }
}



class Lion {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 16;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 1],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y],
            [this.x + 2, this.y - 2],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 1]
        ]
    }
    chooseCell(character) {
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;
    }
    move() {
        var empty = random(this.chooseCell(0))

        if (empty) {
            var newX = empty[0]
            var newY = empty[1]

            matrix[newY][newX] = this.index
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
            this.energy--;
        }
    }
    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 15) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = this.index
            var ar = new Lion(newX, newY, this.index)
            lionArr.push(ar)
        }
    }
    eat() {
        var food = random(this.chooseCell(3))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = this.index
            matrix[this.y][this.x] = 0

            for (var i in vagrArr) {
                if (vagrArr[i].x === newX && vagrArr[i].y === newY) {
                    vagrArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy++
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in lionArr) {
                if (lionArr[i].x === this.x && lionArr[i].y === this.y) {
                    lionArr.splice(i, 1)
                }
            }
        }
    }
}

class Dragon {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 16;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    chooseCell(character,character1) {
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character||matrix[y][x] == character1) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;
    }
    move() {
        var empty = random(this.chooseCell(0))

        if (empty) {
            var newX = empty[0]
            var newY = empty[1]

            matrix[newY][newX] = this.index
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
            this.energy--;
        }
    
    }
    move2() {
        var empty = random(this.chooseCell(1))

        if (empty) {
            var newX = empty[0]
            var newY = empty[1]

            matrix[newY][newX] = this.index
            matrix[this.y][this.x] = 1

            this.x = newX
            this.y = newY
            this.energy--;
        }
    }
    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 18) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = this.index
            var dr = new Dragon(newX, newY, this.index)
            dragonArr.push(dr)
        }
    }
    eat() {
        var food = random(this.chooseCell(4,3))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = this.index
            matrix[this.y][this.x] = 0

            if(matrix[newY][newX]==3){
            for (var i in vagrArr) {
                if (vagrArr[i].x === newX && vagrArr[i].y === newY) {
                    vagrArr.splice(i, 1)
                }
            }
        }

            for (var i in lionArr) {
                if (lionArr[i].x === newX && lionArr[i].y === newY) {
                    lionArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy++
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in dragonArr) {
                if (dragonArr[i].x === this.x && dragonArr[i].y === this.y) {
                    dragonArr.splice(i, 1)
                }
            }
        }
    }
}
