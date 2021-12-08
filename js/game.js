var cvs = document.getElementById('canvas');

var ctx = cvs.getContex('2d');

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bird.src = 'img/bird.png';
bg.src = 'img/bg.png';
fg.src = 'img/fg.png';
pipeUp.src = 'img/pipeNorth.png';
pipeBottom.src = 'img/pipeSouth.png';