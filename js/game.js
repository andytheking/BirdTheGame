var cvs = document.getElementById('canvas');

var ctx = cvs.getContext('2d');

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bird.src = 'img/bird.png';
bg.src = 'img/bg.png';
fg.src = 'img/fg.png';
pipeUp.src = 'img/pipeUp.png';
pipeBottom.src = 'img/pipeBottom.png';

var gap = 90;

function draw() {
  ctx.drawImage(bg, 0, 0);

  ctx.drawImage(pipeUp, 100, 0);
  ctx.drawImage(pipeBottom, 100, 0 + pipeUp.height + gap);

  ctx.drawImage(fg, 0, cvs.height - fg.height);
  
  ctx.drawImage(bird, 10, 150);
}

pipeBottom.onload = draw;