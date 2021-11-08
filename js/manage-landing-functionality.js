
$(document).ready(function() {
    //Initialize popover component
    $(function () {
        $('[data-toggle="popover"]').popover();
    });


    $(".flipper").click(function() {
        var target = $( event.target );

        if ( target.is("a") ) {
          //follow that link
          return true;
        } else {
          $(this).toggleClass("flip");
        }
        
        return false;
      });

    $(".v-flipper").click(function() {		        
        $(this).toggleClass("v-flip");
    });

    //Set the date we're counting down to
    var utcCountDownDate = new Date("11/18/2021 14:00:00 UTC");
    var localCountDownDate = utcCountDownDate.toString();
    const countDownDate = Date.parse(localCountDownDate);

    //Update the count down every 1 second
    var run = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        //alert(distance);
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        //Outputs the result
        $(".days").html(days);
        $(".hours").html(hours);
        $(".minutes").html(minutes);
        $(".seconds").html(seconds);

        // If the count down is over, write counter to 0 
        if (distance < 0) {
            clearInterval(run);
                
            $(".days").html(0);
            $(".hours").html(0);
            $(".minutes").html(0);
            $(".seconds").html(0);
        }
    }, 1000);

    //Navbar fixed on scroll
});

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 
