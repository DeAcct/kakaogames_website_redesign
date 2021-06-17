$(document).ready(function () {
  var slider_n = 0;
  var win_w = $(window).innerWidth();

  var $nav = $("nav");
  $(".nav_btn").click(function () {
    if ($nav.hasClass("on")) {
      $nav.find(".nav_cont").animate(
        {
          right: "-100vw",
        },
        300
      );
      $nav.removeClass("on");
      return;
    }
    $nav.addClass("on");
    $nav.find(".nav_cont").animate(
      {
        right: 0,
      },
      300
    );
  });

  $(".top").click(function () {
    $("html,body").animate({
      scrollTop: 0,
    });
  });

  var $banner_wrap = $(".banner_wrap");
  $banner_wrap.width(win_w * 3);
  $banner_wrap.find("li").width(win_w);

  $(window).resize(function () {
    win_w = $(this).innerWidth();
    $banner_wrap.find("li").width(win_w);
    $banner_wrap.css({
      left: -win_w * slider_n,
      width: win_w * 3,
    });
  });

  var $slide_container = $(".slide_container");
  var slides = $slide_container.children().length - 1;
  var now = 0;
  setInterval(function () {
    now++;
    if (now > slides) {
      now = 0;
    }
    $slide_container.css({
      transform: "translateX(-" + now * 100 + "vw)",
    });
  }, 3000);

  var n = 0;
  setInterval(function () {
    n++;
    if (n == 4) {
      n = 0;
    }
    $(".mockup_wrap").animate(
      {
        left: -520 * n,
      },
      1000
    );
  }, 3000);
});
