$('.scrollup').click(function () {
    $('body,html').animate({ scrollTop: 0}, 800); 
});

$(window).scroll(function() { 
    let scrolled = $(window).scrollTop(); 

    if(scrolled > 350) { 
        $('.scrollup').addClass('active');
    } else {
        $('.scrollup').removeClass('active');
    }
});