var microfone;
var canvas;

function canvasCentro() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.parent('bola')
  microfone = new p5.AudioIn();
  microfone.start();
}

function draw() {
  fill(135,206,250);
  //background(38, 50, 56);
  background(232);
  //background(255); bramco
  noStroke();
  var volume = microfone.getLevel();
  var bolat = (volume*300)+ 50;
  ellipse(150, 150, bolat, bolat);

  fill(30,144,255);
  noStroke();
  ellipse(150, 150, 50, 50)
}

function windowResized() {
  canvasCentro();
}
