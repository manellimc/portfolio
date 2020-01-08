//p5.js


function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  // Assigns a CSS selector class 'small'
  // to the canvas element.
  cnv.class('small');
}

function draw() {
  if (mouseIsPressed) {
    stroke(130,254,214);
  } else {
    stroke(242,15,72);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
 