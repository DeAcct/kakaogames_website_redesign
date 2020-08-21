$(document).ready(function() {
    
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
    var n=0;
    
    setInterval(function(){
        n++;
        if(n==4){
            n=0;
        }
        $('.mockup_wrap').delay(2000).animate({
            left:-520*n
        },1000);
    },3000)
    
});
