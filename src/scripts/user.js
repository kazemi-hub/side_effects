$(function() {
// navigator button Effects
  var icon0=$("#icon1");
  var icon1=$(".icon2");
  var icon2=$(".icon3");
  var icon3=$(".icon4");
  var icon4=$(".icon5");
  var icon5=$(".icon6");
  var icon6=$(".icon7");
  var icon7=$(".icon8");
  $(".sidebar").show();
  var tll= new TimelineLite();
  tll
    .from(icon1,0.5,{y:200,autoAlpha:0,ease:Power1.bonus, opacity:0},5)
    .from(icon0,0.2,{y:250,autoAlpha:0,ease:Power2.easeOut, opacity:0})
    .from(icon2,0.2,{y:300,autoAlpha:0,ease:Power2.easeOut, opacity:0})
    .from(icon3,0.2,{y:350,autoAlpha:0,ease:Power2.easeOut, opacity:0})
    .from(icon4,0.2,{y:400,autoAlpha:0,ease:Power2.easeOut, opacity:0})
    .from(icon5,0.2,{y:450,autoAlpha:0,ease:Power2.easeOut, opacity:0})
    .from(icon6,0.2,{y:500,autoAlpha:0,ease:Power2.easeOut, opacity:0})
    .from(icon7,0.5,{y:550,autoAlpha:0,ease:Power2.easeOut, opacity:0})
    
  //welcome Slide
    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 4000);
    }

    //scroll to top 
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50 ) {
          $('.scrolltop:hidden').stop(true, true).fadeIn();
      } else {
          $('.scrolltop').stop(true, true).fadeOut(5000);
      }
  });
  $(function(){$(".scroll").click(function(){
    $("html,body").animate({
      scrollTop:$("#header").offset().top
    },"1000");
    return false})
  });

  //Planet Slide
    $(".slide").hiSlide();

    console.log("it worked..")
  });

   //Dark-Mode
   function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
   };