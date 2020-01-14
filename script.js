var matrix = [

]

var side = 15;
var grassArr = [];
var xotakerArr = [];
var vagrArr = [];
var lionArr = [];
var dragonArr = [];

function setup() {
  for (var z = 0; z < 50; z++) {
    matrix[z] = [];
    for (k = 0; k < 50; k++) {
      matrix[z][k] = Math.round(random(0, 5));
    }
  }
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        var gr = new Grass(x, y, 1)
        grassArr.push(gr)
      }
      else if (matrix[y][x] == 2) {
        var xt = new Xotaker(x, y, 2)
        xotakerArr.push(xt)
      }
      else if (matrix[y][x] == 3) {
        var vr = new Vagr(x, y, 3)
        vagrArr.push(vr)
      }
      else if (matrix[y][x] == 4) {
        var ar = new Lion(x, y, 4)
        lionArr.push(ar)
      }
      else if (matrix[y][x] == 5) {
        var dr = new Dragon(x, y, 5)
        dragonArr.push(dr)
      }
    }
  }

  frameRate(5);
  createCanvas(matrix[0].length * side, matrix.length * side);
  background('#acacac');
}




function draw() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("green");
        rect(x * side, y * side, side, side)
      }
      else if (matrix[y][x] == 2) {
        fill("yellow");
        rect(x * side, y * side, side, side)
      }
      else if (matrix[y][x] == 0) {
        fill("#acacac");
        rect(x * side, y * side, side, side)
      }
      else if (matrix[y][x] == 3) {
        fill("red");
        rect(x * side, y * side, side, side)
      }
      else if (matrix[y][x] == 4) {
        fill("orange");
        rect(x * side, y * side, side, side)
      }
      else if (matrix[y][x] == 5) {
        fill("##0B0A0A ");
        rect(x * side, y * side, side, side)
      }



      /*fill("blue")
          text(x + " " + y, x * side + side / 2, y * side + side / 2)
      */
    }
  }

  for (var i in grassArr) {
    grassArr[i].mult()
  }


  for (var i in xotakerArr) {
    xotakerArr[i].eat();
    xotakerArr[i].move();
    xotakerArr[i].mult();
    xotakerArr[i].die();
  }
  for (var i in vagrArr) {
    vagrArr[i].move();
    vagrArr[i].move2();
    vagrArr[i].eat();
    vagrArr[i].mult();
    vagrArr[i].die();

  }
  for (var i in lionArr) {
    lionArr[i].move();
    lionArr[i].mult();
    lionArr[i].eat();
    lionArr[i].die();
  }

  for (var i in dragonArr) {
    dragonArr[i].move();
    dragonArr[i].move2();
    dragonArr[i].mult();
    dragonArr[i].eat();
    dragonArr[i].die();
  }
}




