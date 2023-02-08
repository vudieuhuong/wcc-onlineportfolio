let myEasyCam;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("sketch-container-2");

  myEasyCam = createEasyCam();
  myEasyCam.getDistance(10);
}

function draw() {
  background(255);

  drawGrid(40, 40, 50);
}

function drawGrid(rows, cols, sz){
  push();
  stroke(0);
  strokeWeight(0.5);
  // move to negative edge of the grid
  translate(-rows*0.5*sz,-cols*0.5*sz );

  // draw the rows
  for(let i = 0; i < rows+1; i++){
    line(i *sz, 0 ,i*sz, cols*sz);
  }
  // draw the columns
  for(let j = 0; j < cols+1; j++){
    line(0,j *sz, rows*sz ,j*sz);
  }

  pop();
}