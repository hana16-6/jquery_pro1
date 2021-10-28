/* global $, alert, console*/
$(function(){
 'use strict';
    //adjust headerheight
    var myheader = $('.header'),
        myslider= $('.slider')
    myheader.height($(window).height());
    $(window).resize(function () {
        myheader.height($(window).height());
        myslider.each(function (){
         $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);  
        
      });
    });
    // links add active class
    $('.links li a').click(function () {
      $(this).parent().addClass('active').siblings().removeClass('active');
        
    });
    //adjust bxslider list item center
   myslider.each(function (){
      $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);  
        
      });
    //trigger the bx slider
    myslider.bxSlider({
        pager: false
    });
    // smooth scroll to div
    $('.links li a').click(function () {
      $('html ,body').animate({
        scrollTop: $('#' + $(this).data('value')).offset().top   
          
      },1000)  
    });
    //our Auto slider code
    (function autoSlider(){
        $('.myslider .active').each(function () {
         if (!$(this).is(':last-child')) {
          $(this).delay(3000).fadeOut(1000, function(){
            $(this).removeClass('active').next().addClass('active').fadeIn();
              autoSlider();
          });
         } else{
             $(this).delay(3000).fadeOut(1000, function(){
               $(this).removeClass('active');
                 $('.myslider div').eq(0).addClass('active').fadeIn();
                  autoSlider();
             });
         }
        });
    }());
    //trigger mixitUp
     $('#Container').mixItUp();
    //adjust shuffle links
    $('.shuffle li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected')
    });
    //trigger nice scroll
    $("body").niceScroll({
  cursorcolor:"#1abc9c",
  cursorwidth:"16px",
  cursorborder:"1px solid #1abc9c"
});
});