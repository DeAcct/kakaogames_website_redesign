$(document).ready(function() {
    $('header').hover(function() {
        $('nav').toggleClass('open');
        $('header').toggleClass('on');
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