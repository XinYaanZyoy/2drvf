var can;
var unitslider;
var drops = [];

var inpt, btn; 

function setup() {
  //canvas ready
  readyCan();
  //zooming slider ready
  readySlider();

  // xinpt = createInput();
  // xinpt.position(100,100);
  // xinpt.value('x');

  // yinpt = createInput();
  // yinpt.position(100,120);
  // yinpt.value('y')

  // btn = createButton('Assign');
  // btn.position(260,110);
  // btn.mousePressed(equsn)

  //generate and define initial nodes and field
  genNodes();
  defField();
}

function draw() {
  //default cartesian lattice space origin
  
  background(0);
  for(let i in drops){
    drops[i].formit();
    drops[i].letit();
  }

  translate(width / 2, height / 2);

  ans = isUnitSliderChanged();
  if (ans) {
    proced();
  }

  //display the field
  dispField();
 //diss the unit
  showUnit();

}//end of draw



function readyCan() {
  can = createCanvas(windowWidth - 100, windowHeight - 150);
  can.position(0, 125);
  can.style('z-index', '-1');
  can.class('can');
}

function readySlider() {
  unitslider = createSlider(10, 500, 100, 0);
  unitslider.class('unitslider');
  unitslider.style('height', '20px');
  unitslider.style('width', '500px');
  unitslider.position(width - 220, height - 150);
}

function isUnitSliderChanged() {
  //chacker for chnage of unitslider
  pval = unit;
  unit = unitslider.value();
  return !(unit == pval);
}


//for deleting the nodes
function delNodes() {
  nodes.length = 0;
}

function proced() {
  //delete unneccessary vecs
  delNodes();
  //mkae new nodes
  genNodes();
  //clear past field
  clearfield();
  //generate new field
  defField();
}

function showUnit(){
fill(200, 30, 255);
rectMode(CENTER);
textAlign(CENTER, CENTER)
textSize(30);
text(floor(unit), -width / 2 + 30, -height / 2 + 30);
}


// function mousePressed(){
//   var posv=createVector(mouseX-width/2,mouseY-height/2);
//   var velv;

//   for(let i in field){
//     var isx = posv.x<=field[i][0].x+unit && posv.x>=field[i][0].x-unit;
//     var isy = posv.y<=field[i][0].y+unit && posv.x>=field[i][0].y-unit;
//     if(isx && isy)
//     velv=field[i][1].normalize();
//   }

//   var tempd=new Droplet(posv,velv);
//   drops.push(tempd);
// }