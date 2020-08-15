$(document).ready(function() {
    $('header').hover(function() {
        $('nav').toggleClass('open');
        $('header > div').toggleClass('on');
    });
});

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
	if (scroll >= 1) {
		$("header").addClass('scroll');
	} 
    else {
		$("header").removeClass('scroll');
	}
})