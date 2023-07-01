

// Mobile Menu
$('.show').click(function(){
    $('.none-hdr').slideToggle();
});




$('.mobile-hide li a').click(function(){
    $('.none-hdr').slideToggle();
});





jQuery(document).ready(function($) {
       // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });



    $('.tomas-one').owlCarousel({
        loop: true,
        margin: 15,
        items: 2,
        dots: true,
        dotsEach: 1,
        smartSpeed: 1000,
        autoHeight: false,
        autoplay: false,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
        0:{
            items:1,
            nav:true
        },
        576:{
            items:1,
            nav:true
        },
        768:{
            items:1,
            nav:true
        },
        992:{
            items:2,
            nav:true,
            loop:true
        }
      }
  })


    // BARFILLER
    $('#html').barfiller({

        // color of bar
        barColor: '#ff8c05',
      
        // shows a tooltip
        tooltip: true,
      
        // duration in ms
        duration: 2000,
      
        // re-animate on resize
        animateOnResize: true,
      
        // custom symbol
        symbol: "%"
        
      });
    $('#css').barfiller({

        // color of bar
        barColor: '#1abc9c',
      
        // shows a tooltip
        tooltip: true,
      
        // duration in ms
        duration: 2000,
      
        // re-animate on resize
        animateOnResize: true,
      
        // custom symbol
        symbol: "%"
        
      });
    
    $('#jquery').barfiller({

        // color of bar
        barColor: '#2980b9',
      
        // shows a tooltip
        tooltip: true,
      
        // duration in ms
        duration: 2000,
      
        // re-animate on resize
        animateOnResize: true,
      
        // custom symbol
        symbol: "%"
        
      });
      $('#bootstrap').barfiller({

        // color of bar
        barColor: '#8e44ad',
      
        // shows a tooltip
        tooltip: true,
      
        // duration in ms
        duration: 2000,
      
        // re-animate on resize
        animateOnResize: true,
      
        // custom symbol
        symbol: "%"
        
      });
      $('#java').barfiller({

        // color of bar
        barColor: '#c0392b',
      
        // shows a tooltip
        tooltip: true,
      
        // duration in ms
        duration: 2000,
      
        // re-animate on resize
        animateOnResize: true,
      
        // custom symbol
        symbol: "%"
        
      });





        //   ISOTOP
    // init Isotope
    var $grid = $('.portfolio-items').isotope({
        // options
        });
        // filter items on button click
        $('.portfolio-menu').on( 'click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        $('.portfolio-menu ul li').click(function(){
            $('.portfolio-menu ul li').removeClass(active);
            $('.portfolio-menu ul li').addClass(active);
        });
        $(".portfolio-menu").on('click','li',function(){
            $(".portfolio-menu li.active").removeClass("active");
            $(this).addClass("active");
        });
    
   


      

});




// Dark mood java Script Start 

const body = document.querySelector("body"),
    modeToggle = document.querySelector(".darklight");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
    body.classList.add("dark");
}

modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
    } else {
        localStorage.setItem("mode", "dark-mode");
    }
});

// Dark mood java Script End



// TYPE JS
var typed5 = new Typed('.typed', {
    strings: ['Designer', 'Developer'],
    typeSpeed: 30,
    backSpeed: 30,
    cursorChar: '.',
    shuffle: true,
    smartBackspace: false,
    loop: true,
  });



    // scrol spy

  $(document).ready(function(){

    var sectionIds = $('a.nav-link');
  
      $(document).scroll(function(){
          sectionIds.each(function(){
  
              var container = $(this).attr('href');
              var containerOffset = $(container).offset().top;
              var containerHeight = $(container).outerHeight();
              var containerBottom = containerOffset + containerHeight;
              var scrollPosition = $(document).scrollTop();
      
              if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                  $(this).addClass('active');
              } else{
                  $(this).removeClass('active');
              }
      
      
          });
      });


  
  
  });

    
 // PRELODER
 $(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').delay(550).fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(550).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(550).css({'overflow':'visible'});
  });

