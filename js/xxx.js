console.log("hello");



//$(document).ready(function(){
//
//    $( ".boxtag" ).fadeOut();
//    $( ".xtag01" ).fadeOut();
//     });

//MENU A LATO SLIDE

$(document).ready(function(){
  $(".workslide").click(function(){
    $(".sidemenu").slideToggle("slow");
  });
}); 



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
    stroke(130,254,214);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
// switch immagini numeri...



// jQuery methods go here...