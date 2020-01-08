// js home



////p5.js
//
//
//function setup() {
//  var cnv = createCanvas(windowWidth, windowHeight);
//  // Assigns a CSS selector class 'small'
//  // to the canvas element.
//  cnv.class('small');
//}
//
//function draw() {
//  if (mouseIsPressed) {
//    stroke(130,254,214);
//  } else {
//    stroke(242,15,72);
//  }
//  ellipse(mouseX, mouseY, 80, 80);
//}
// 
//scroll down


$(document).ready(function() {
$(".scrolling").click(function() {
     $('html, body').animate({
         scrollTop: $(".scrolling2").offset().top
     }, 1500);
 });
});




//function setup() {
//  createCanvas(640, 480);
//}
//
//function draw() {
//  if (mouseIsPressed) {
//    fill(145,178,120);
//  } else {
//    fill(255);
//  }
//  ellipse(mouseX, mouseY, 80, 80);
//}
//  new p5(sketch, 'provapj');



//MENU A LATO SLIDE

$(document).ready(function(){
  $(".workslide").click(function(){
    $(".sidemenu").slideToggle("slow");
  });
});

//// HOVERILL
//
//console.log("hello");
//
//$(document).ready(function () {
//
//    $(".ill").mouseenter(function () {
// $(".hoverill01").css("opacity","1");
//        });
//$(".ill").mouseleave(function () {
// $(".hoverill01").css("opacity","0");
//    });
//
//    
//    $(".pub").mouseenter(function () {
// $(".hoverill02").css("opacity","1");
//        });
//$(".pub").mouseleave(function () {
// $(".hoverill02").css("opacity","0");
//    });
//    
//    $(".pho").mouseenter(function () {
// $(".hoverill03").css("opacity","1");
//        });
//$(".pho").mouseleave(function () {
// $(".hoverill03").css("opacity","0");
//    });
//    
//    $(".vid").mouseenter(function () {
// $(".hoverill04").css("opacity","1");
//        });
//$(".vid").mouseleave(function () {
// $(".hoverill04").css("opacity","0");
//    });
//    
//    $(".ani").mouseenter(function () {
// $(".hoverill05").css("opacity","1");
//        });
//$(".ani").mouseleave(function () {
// $(".hoverill05").css("opacity","0");
//    });
//    
//    $(".web").mouseenter(function () {
// $(".hoverill06").css("opacity","1");
//        });
//$(".web").mouseleave(function () {
// $(".hoverill06").css("opacity","0");
//    });
//    $(".ins").mouseenter(function () {
// $(".hoverill07").css("opacity","1");
//        });
//$(".ins").mouseleave(function () {
// $(".hoverill07").css("opacity","0");
//    });
//    
//    
//    $(".xxx").mouseenter(function () {
// $(".hoverill08").css("opacity","1");
//        });
//$(".xxx").mouseleave(function () {
// $(".hoverill08").css("opacity","0");
//    });
//});


 $(document).ready(function () {
        $('.ill').mousemove(function (e) {
            $('.hoverill01')
                .show()
                .text('illustrations')
                .css({ fontFamily:'karla', position: 'absolute', color: '#000',
                    left: e.pageX/2, top: e.pageY+100
            });
        });
     $('.ill').mouseleave(function (e) {
            $('.hoverill01').hide()
                
        });
     
    });

 $(document).ready(function () {
        $('.pub').mousemove(function (e) {
            $('.hoverill02')
                .show()
                .text('publishing')
                .css({ fontFamily:'karla', position: 'absolute', color: '#000',
                    left: e.pageX/6, top: e.pageY+100
            });
        });
     $('.pub').mouseleave(function (e) {
            $('.hoverill02').hide()
                
        });
     
    });
 $(document).ready(function () {
        $('.pho').mousemove(function (e) {
            $('.hoverill03')
                .show()
                .text('photography')
                .css({ fontFamily:'karla', position: 'absolute', color: '#000',
                    left: e.pageX/2, top: e.pageY/3
            });
        });
     $('.pho').mouseleave(function (e) {
            $('.hoverill03').hide()
                
        });
     
    });
$(document).ready(function () {
        $('.vid').mousemove(function (e) {
            $('.hoverill04')
                .show()
                .text('video')
                .css({ fontFamily:'karla', position: 'absolute', color: '#000',
                    left: e.pageX/2, top: e.pageY/4
            });
        });
     $('.vid').mouseleave(function (e) {
            $('.hoverill04').hide()
                
        });
     
    });
$(document).ready(function () {
        $('.ani').mousemove(function (e) {
            $('.hoverill05')
                .show()
                .text('animation')
                .css({ fontFamily:'karla', position: 'absolute', color: '#000',
                    left: e.pageX/4, top: e.pageY/2
            });
        });
     $('.ani').mouseleave(function (e) {
            $('.hoverill05').hide()
                
        });
     
    });
$(document).ready(function () {
        $('.web').mousemove(function (e) {
            $('.hoverill06')
                .show()
                .text('web data app')
                .css({ fontFamily:'karla', position: 'absolute', color: '#000',
                    left: e.pageX/50, top: e.pageY/10
            });
        });
     $('.web').mouseleave(function (e) {
            $('.hoverill06').hide()
                
        });
     
    });
$(document).ready(function () {
        $('.ins').mousemove(function (e) {
            $('.hoverill07')
                .show()
                .text('installation / events')
                .css({ fontFamily:'karla', position: 'absolute', color: '#000',
                    left: e.pageX/2, top: e.pageY/6
            });
        });
     $('.ins').mouseleave(function (e) {
            $('.hoverill07').hide()
                
        });
     
    });

$(document).ready(function () {
        $('.xxx').mousemove(function (e) {
            $('.hoverill08')
                .show()
                .text('other')
                .css({ fontFamily:'karla', position: 'absolute', color: '#000',
                    left: e.pageX/9, top: e.pageY/6
            });
        });
     $('.xxx').mouseleave(function (e) {
            $('.hoverill08').hide()
                
        });
     
    });







