$(document).ready(function() {
    slider_num=1;
    
    $('header').hover(function() {
        $('nav').toggleClass('open');
        $('header > div').toggleClass('on');
    })
    
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $('header > div').addClass('scroll');
        }
        else {
            $("header > div").removeClass('scroll');
        }
    })
    
});
