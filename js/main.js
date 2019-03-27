/*global $, location, window, document*/
$(function () {
    'use strict';
    
//Centering the content of the Slider (hero)
    $('.slider div').each(function () {
        $(this).css('paddingTop', ($('header').height() - $('.slider div h1').height()) / 2);
    });
    
//Adjust portfolio navlist section height and width
    $('#portfolio .fuck').height($('#portfolio  img').height());
    if ($(window).width() <= 768) {$('#portfolio .fuck').css('height', '100%');                                 }
    
//for my edit to work on rezing window
    //Centering the content of the Slider (hero)
    $(window).resize(function () {
        $('.slider div').each(function () {
            $(this).css('paddingTop', ($('header').height() - $('.slider div h1').height()) / 2);
        });
        
    //Adjust portfolio navlist section height and width
        $('#portfolio .fuck').height($('#portfolio  img').height());
        if ($(window).width() <= 768) {$('#portfolio .fuck').css('height', '100%');                                 }
        
    //Setting Affix offset to header height
        $(".navbar").affix({offset: {top: $("header").outerHeight(true)} });
    });
    
    //setting overlay parent position to relative
    $('#portfolio .overlay').parent().css("position", "relative");
    
    //Setting Affix offset to header height
    $(".navbar").affix({offset: {top: $("header").outerHeight(true)} });
    
    //portfolio navList active link changer
    $('#mycats li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
//Trigger bxSlider
    $('.slider').bxSlider({
        controls: false,
        auto: true,
        pause: 5000
    });
//Trigger Nice Scroll
    $('body').niceScroll({
        cursorcolor: "#2ecc71",
        cursorwidth: "8px",
        cursorborder: "1px solid #2d2d2d"
    });
//Trigger Tool Tip
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    
// Smooth Scroll Start  
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
    // On-page links
            if (
                location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                    // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');         // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    });
                }
            }
        });
// Smooth Scroll End 
});




















