$(function () { 

   // Active links scroll
   $('.top-nav a').click(function(e) {
    e.preventDefault();
    var linkId = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(linkId).offset().top
    }, 700);
    
  });

  $(window).scroll(function () { 
    
    var wScroll = $(this).scrollTop();
    var menuPos = $('.top-nav').offset().top;

    // fixin` menu
    if(wScroll > menuPos) {
      $('.top-nav').addClass('fixed');
      
    } else if (wScroll < $('.about').offset().top){
      $('.top-nav').removeClass('fixed');
    }
    
   
    // Fade elements
    if(wScroll > $('.our-team').offset().top - $(window).height() / 1.3) {
      $('.our-team .member').each(function(i) {
        setTimeout(function() {
          $('.our-team .member').eq(i).addClass('showing');
        }, 250 * (i+1));
      });
    }

    if(wScroll > $('.posts-wrapper').offset().top - $(window).height() / 1.3) {
      $('.posts-wrapper .post').each(function(i) {
        setTimeout(function() {
          $('.posts-wrapper .post').eq(i).addClass('active');
        }, 250 * (i+1));
      });
      
    }

  });
});