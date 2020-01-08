console.log("hello");


$(document).ready(function(){
    $(".works").hide();
  });


//MENU A LATO SLIDE

$(document).ready(function(){
  $(".workslide").click(function(){
    $(".sidemenu").slideToggle("slow");
  });
}); 

//SCROLL UP


$(document).ready(function() {
$(".titlesection").click(function() {
     $('html, body').animate({
         scrollTop: $(".topp").offset().top
     }, 1000);
 });
});

//SCROLL DOWN

$(document).ready(function() {
$(".scrolling").click(function() {
     $('html, body').animate({
         scrollTop: $(".scrolling2").offset().top
     }, 1500);
 });
});


$(document).ready(function() {
    $(".scroll1").click(function() {
        $(".works").hide();
    $(".work1").slideDown("slow");
    });
    });

$(document).ready(function() {
    $(".scroll2").click(function() {
        $(".works").hide();
    $(".work2").slideDown("slow");
    });
    });

$(document).ready(function() {
    $(".scroll3").click(function() {
        $(".works").hide();
    $(".work3").slideDown("slow");
    });
    });

$(document).ready(function() {
    $(".scroll4").click(function() {
        $(".works").hide();
    $(".work4").slideDown("slow");
    });
    });

$(document).ready(function() {
    $(".scroll5").click(function() {
        $(".works").hide();
    $(".work5").slideDown("slow");
    });
    });

$(document).ready(function() {
    $(".scroll6").click(function() {
        $(".works").hide();
    $(".work6").slideDown("slow");
    });
    });

$(document).ready(function() {
    $(".scroll7").click(function() {
        $(".works").hide();
    $(".work7").slideDown("slow");
    });
    });

$(document).ready(function() {
    $(".scroll8").click(function() {
        $(".works").hide();
    $(".work8").slideDown("slow");
    });
    });

$(document).ready(function() {
    $(".scroll9").click(function() {
        $(".works").hide();
    $(".work9").slideDown("slow");
    });
    });

$(document).ready(function() {
    $(".scroll10").click(function() {
        $(".works").hide();
    $(".work10").slideDown("slow");
    });
    });

//TESTO HOVER

$(document).ready(function () {
        $('.w1').mousemove(function (e) {
            $('.ww1')
                .show()
                .text('kinematics typo')
                .css({ fontFamily:'karla',fontSize:'2em', position: 'absolute', color: '#000', zIndex:'100',
                    left: e.pageX/9, top: e.pageY/1.5
            });
        });
     $('.w1').mouseleave(function (e) {
            $('.ww1').hide()
                
        });
     
    });

$(document).ready(function () {
        $('.w2').mousemove(function (e) {
            $('.ww2')
                .show()
                .text('cromina')
                .css({ fontFamily:'karla',fontSize:'2em', position: 'absolute', color: '#000', zIndex:'100',
                    left: e.pageX/9, top: e.pageY/2
            });
        });
     $('.w2').mouseleave(function (e) {
            $('.ww2').hide()
                
        });
     
    });
$(document).ready(function () {
        $('.w3').mousemove(function (e) {
            $('.ww3')
                .show()
                .text('digital journalism')
                .css({ fontFamily:'karla',fontSize:'2em', position: 'absolute', color: '#000', zIndex:'100',
                    left: e.pageX/9, top: e.pageY/2
            });
        });
     $('.w3').mouseleave(function (e) {
            $('.ww3').hide()
                
        });
     
    });
$(document).ready(function () {
        $('.w4').mousemove(function (e) {
            $('.ww4')
                .show()
                .text('echo')
                .css({ fontFamily:'karla',fontSize:'2em', position: 'absolute', color: '#000', zIndex:'100',
                    left: e.pageX/9, top: e.pageY/2
            });
        });
     $('.w4').mouseleave(function (e) {
            $('.ww4').hide()
                
        });
     
    });
$(document).ready(function () {
        $('.w5').mousemove(function (e) {
            $('.ww5')
                .show()
                .text('surfing in Porto')
                .css({ fontFamily:'karla',fontSize:'2em', position: 'absolute', color: '#000', zIndex:'100',
                    left: e.pageX/25, top: e.pageY/2
            });
        });
     $('.w5').mouseleave(function (e) {
            $('.ww5').hide()
                
        });
     
    });
$(document).ready(function () {
        $('.w6').mousemove(function (e) {
            $('.ww6')
                .show()
                .text('rustic')
                .css({ fontFamily:'karla',fontSize:'2em', position: 'absolute', color: '#000', zIndex:'100',
                    left: e.pageX/9, top: e.pageY/3.2
            });
        });
     $('.w6').mouseleave(function (e) {
            $('.ww6').hide()
                
        });
     
    });
$(document).ready(function () {
        $('.w7').mousemove(function (e) {
            $('.ww7')
                .show()
                .text('privacy international')
                .css({ fontFamily:'karla',fontSize:'2em', position: 'absolute', color: '#000', zIndex:'100',
                    left: e.pageX/9, top: e.pageY/3.2
            });
        });
     $('.w7').mouseleave(function (e) {
            $('.ww7').hide()
                
        });
     
    });
$(document).ready(function () {
        $('.w8').mousemove(function (e) {
            $('.ww8')
                .show()
                .text('sociologia del rischio')
                .css({ fontFamily:'karla',fontSize:'2em', position: 'absolute', color: '#000', zIndex:'100',
                    left: e.pageX/9, top: e.pageY/3.2
            });
        });
     $('.w8').mouseleave(function (e) {
            $('.ww8').hide()
                
        });
     
    });
$(document).ready(function () {
        $('.w9').mousemove(function (e) {
            $('.ww9')
                .show()
                .text('')
                .css({ fontFamily:'karla',fontSize:'2em', position: 'absolute', color: '#000', zIndex:'100',
                    left: e.pageX/9, top: e.pageY/4
            });
        });
     $('.w9').mouseleave(function (e) {
            $('.ww9').hide()
                
        });
     
    });
$(document).ready(function () {
        $('.w10').mousemove(function (e) {
            $('.ww10')
                .show()
                .text('')
                .css({ fontFamily:'karla',fontSize:'2em', position: 'absolute', color: '#000', zIndex:'100',
                    left: e.pageX/9, top: e.pageY/6
            });
        });
     $('.xxx').mouseleave(function (e) {
            $('.hoverill08').hide()
                
        });
     
    });