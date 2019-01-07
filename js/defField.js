var vx, vy; //field vectors
var field = []; //a vec with each pos vec
var u;

function defField() {
  //for each node there will be a vector
  for (let i = 0; i < nodes.length; i++) {
    //shifting origin to ith node
    push();
    translate(nodes[i].x, nodes[i].y);

    //defining field vectors by X() and Y()
    vx = X(nodes[i].x, nodes[i].y);
    vy = Y(nodes[i].x, nodes[i].y);

    //hense v the ith field vector
    v = createVector(vx, vy);

    //store them
    u = [nodes[i], v];
    field.push(u);

    pop();
  }
}

function dispField() {

  for (let i = 0; i < field.length; i++) {

    push();
    //translating to the node
    translate(field[i][0].x,field[i][0].y);

    //properties of the vec ass with that node
    vu=field[i][1].normalize();
    vr=field[i][1].mag();
    vmax=abs(sqrt(field[i][1].x*field[i][1].x + field[i][1].y*field[i][1].y))

    //vd an actual vec to display
    vd = vu.mult(unit / 2); //vec to draw

    //vector line and clr
    // var n = map(vr, -vmax, vmax, 0, 255);
    // var clr1 = abs(n);
    stroke(99);
    // console.log(clr1)
    strokeWeight(2);
    line(0, 0, vd.x, vd.y);

    //vector arrow and color
    if (vr != 0) {
      rotate(field[i][1].heading());
      var a = unit / 5;
      stroke(99);
      fill(0);
      translate(vd.mag() - a, 0);
      triangle(0, a / 2, 0, -a / 2, a, 0);

    }

    pop();
  }
}


//for clearing or deleting the field array
function clearfield(){
  field.length = 0;
}