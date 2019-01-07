var nodes = []; //an Array of cartesian nodes

function genNodes() {
  stroke(111);
  strokeWeight(1);

  for (let i = 0; i < width / 2; i += unit) {
    for (let j = 0; j < height / 2; j += unit) {
      if (i == 0 && j != 0) {
        point(0, Xpi(j)); //+y axis
        nodes.push(createVector(0, Xpi(j)));
        
        point(0, Xpi(-j)); //-y axis
        nodes.push(createVector(0, Xpi(-j)));
      }
      if (j == 0 && i != 0) {
        point(i, 0); //+x axis
        nodes.push(createVector(i, Xpi(0)));

        point(-i, 0); //-x axis
        nodes.push(createVector(-i, Xpi(0)));
      }
      if (i != 0 && j != 0) {
        point(i, Xpi(j)); //1st qd
        nodes.push(createVector(i, Xpi(j)));

        point(-i, Xpi(j)); //2nd qd
        nodes.push(createVector(-i, Xpi(j)));

        point(-i, Xpi(-j)); //3rd qd
        nodes.push(createVector(-i, Xpi(-j)));

        point(i, Xpi(-j)); //4th qd
        nodes.push(createVector(i, Xpi(-j)));
      }
      if (i == 0 && j == 0) { //origin
        stroke(255);
        strokeWeight(3);
        point(0, 0);
        nodes.push(createVector(0, 0));
      }
    } //end of il
  } //end of ol
} //end of fn

