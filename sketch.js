// Mike Glover 23 April 2017
// Code taken from https://github.com/bashmohandes/Javascript

var board;
var CELL_SIZE = 50;
var DIFFICULTY = 0.4;


function setup() {
  var canvas = createCanvas(CELL_SIZE * 9, CELL_SIZE * 9)
  canvas.parent("canvas")
  board = new Board();
  board.build();
  createMenu();
}

function draw() {
  background(255);
  board.draw()
}

function createMenu() {
  // Level buttons
  var printButton = createButton('Print');
  var easyButton = createButton('Easy');
  var normalButton = createButton('Normal');
  var hardButton = createButton('Hard');
  easyButton.mousePressed(function() {level("easy");});
  easyButton.position(innerWidth/2 -200, CELL_SIZE * 9 + 50);
  normalButton.mousePressed(function() {level("norm");});
  normalButton.position(innerWidth/2 -30, CELL_SIZE * 9 + 50);
  hardButton.mousePressed(function() {level("hard");});
  hardButton.position(innerWidth/2 +150, CELL_SIZE * 9 + 50);


  // Print Button
  printButton.position(innerWidth/2 -23, CELL_SIZE * 9 + 90);
  printButton.mousePressed(printPage);

}

function level(level) {
  var levelname = select('#level');
  if (level == "easy") {
    levelname.html('Easy');
    DIFFICULTY = 0.2;
    board = new Board();
    board.build();
  } else if (level == "norm") {
    DIFFICULTY = 0.4;
    board = new Board();
    board.build();
    levelname.html('Normal');
  } else if (level == "hard") {
    DIFFICULTY = 0.6;
    board = new Board();
    board.build();
    levelname.html('Hard');
  }
}

function printPage() {
  window.print();
}
