$(window).scroll(function(){
    var scroll = $(window).scrollTop();
	if (scroll >= 1) {
        $('header > div').addClass('scroll');
	}
    else {
		$("header > div").removeClass('scroll');
	}
})

$(document).ready(function() {
    $('header').hover(function() {
        $('nav').toggleClass('open');
        $('header > div').toggleClass('on');
    });
});
