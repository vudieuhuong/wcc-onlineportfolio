let myCam;
let myEasyCam;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("sketch-container");

  myEasyCam = createEasyCam();
  myEasyCam.getDistance(10);

  myCam = createCapture(VIDEO);
  myCam.hide();
}

function draw() {
  background(255);

  drawGrid(40, 40, 50);
  // drawAxis();

  
  push();
  fill(255, 0, 0);
  texture(myCam);
  rotateY(135);
  sphere(200, 200, 200, 220);
  pop();

}

function drawAxis(){
  push();
  strokeWeight(3);
  let sz = 300;
  // draw the lines
  stroke(255,0,0); // R
  line(0,0,0,sz,0,0); // X
  stroke(0,255,0); // G
  line(0,0,0,0,sz,0); // Y
  stroke(0,0,255); //B
  line(0,0,0,0,0,sz); // Z

  // draw the tips
  strokeWeight(12);
  stroke(255,0,0); // R
  point(sz,0,0); // X
  stroke(0,255,0); // G
  point(0,sz,0); // Y
  stroke(0,0,255); //B
  point(0,0,sz); // Z

  pop();
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