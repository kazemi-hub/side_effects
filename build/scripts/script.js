$(function(){var o=$("#icon1"),e=$(".icon2"),a=$(".icon3"),t=$(".icon4"),n=$(".icon5"),i=$(".icon6"),s=$(".icon7"),l=$(".icon8");$(".sidebar").show(),(new TimelineLite).from(e,.5,{y:200,autoAlpha:0,ease:Power1.bonus,opacity:0},5).from(o,.2,{y:250,autoAlpha:0,ease:Power2.easeOut,opacity:0}).from(a,.2,{y:300,autoAlpha:0,ease:Power2.easeOut,opacity:0}).from(t,.2,{y:350,autoAlpha:0,ease:Power2.easeOut,opacity:0}).from(n,.2,{y:400,autoAlpha:0,ease:Power2.easeOut,opacity:0}).from(i,.2,{y:450,autoAlpha:0,ease:Power2.easeOut,opacity:0}).from(s,.2,{y:500,autoAlpha:0,ease:Power2.easeOut,opacity:0}).from(l,.5,{y:550,autoAlpha:0,ease:Power2.easeOut,opacity:0});var c=0;!function o(){var e;var a=document.getElementsByClassName("mySlides");for(e=0;e<a.length;e++)a[e].style.display="none";c++;c>a.length&&(c=1);a[c-1].style.display="block";setTimeout(o,4e3)}(),$(window).scroll(function(){50<$(this).scrollTop()?$(".scrolltop:hidden").stop(!0,!0).fadeIn():$(".scrolltop").stop(!0,!0).fadeOut(5e3)}),$(function(){$(".scroll").click(function(){return $("html,body").animate({scrollTop:$("#header").offset().top},"1000"),!1})}),$(".slide").hiSlide(),$(".nav-button").click(function(){$("body").toggleClass("nav-open")}),$(".nav-item").click(function(){$(".nav-open").toggleClass("nav-open")})});