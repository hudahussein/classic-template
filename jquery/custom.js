/*global $, window, document, mixitup*/

$(function () {
    
    'use strict';
    
    //trigger nice scroll blugin
	
	$('html').niceScroll({
        cursorcolor: '#1abc9c',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: 0
        
    });
    
    
    //adjust header hight
    
    $('.header').height($(window).height());
    
    $(window).resize(function () {
        
        $('.header').height($(window).height());
        
        $('.classic').each(function () {
        
            $(this).css('paddingTop', ($(window).height() - $('.classic').height()) / 2);
        });
        
    });
    
    
    //add active class to links
    
    $('.links li a').click(function () {
        
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
    });
    
    
    // Initialize the slider trigger
    
    $(document).ready(function () {
        
        $('.slider').bxSlider();
        
    });
    
   
    //bx slider center
    
    $('.classic').each(function () {
        
        $(this).css('paddingTop', ($(window).height() - $('.classic').height()) / 2);
    });
    
    
    //smoth scrol to div
    
    
    $('.links li a').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top + 1
            
        }, 1000);
        
    });
    
    
    //our auto slider code
    
    (function autoSlider() {
        
        $('.slide .slide-active').each(function () {
           
            if (!$(this).is(':last-child')) {
             
                $(this).delay(2000).fadeOut(1000, function () {
               
                    $(this).removeClass('slide-active').next().addClass('slide-active').fadeIn();
                 
                    autoSlider();
                 
                });
             
            } else {
             
                $(this).delay(2000).fadeOut(1000, function () {
               
                    $(this).removeClass('slide-active');
                  
                    $('.slide div').eq(0).addClass('slide-active').fadeIn();
                 
                    autoSlider();
                });
             
            }
        });
       
    }());
    
    
    
    
    
    //trigger for mix it up
      
    var mixer = mixitup('.container', {
        
            controls: {
                
                toggleDefault: 'none'
            }
        });

    //adjust trigger links
    
    $('.all-buttons button').click(function () {
        
        $(this).addClass('selected').siblings().removeClass('selected');
        
    });
   
    
    //scroll top
    
    $(window).scroll(function () {
    
        if ($(window).scrollTop() >= 1000)
           
            {$(".scroll-to-top").fadeIn(400); }
        
            else {$(".scroll-to-top").fadeOut(400); } 
        
        
    });
});














