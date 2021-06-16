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

  var $slider_wrap = $(".slider_wrap");
  $(".next").click(function () {
    $slider_wrap.animate(
      {
        opacity: 0,
      },
      500
    );
    slider_n++;
    if (slider_n == 3) {
      slider_n = 0;
    }
    $(".banner_wrap").animate(
      {
        left: -win_w * slider_n,
      },
      500,
      function () {
        if (slider_n == 1) {
          $slider_wrap
            .find("h2")
            .html("다양한<p>게임을</p><span>선보입니다</span>");
          $(".slider_wrap >p").html(
            "우리의 목적은 단순한 이윤추구가 아닙니다. <span>성장성이 있는 인디 개발사의 안정적 시장 정착 또한 우리의 목표이기 때문이죠.</span>"
          );
          $slider_wrap
            .animate(
              {
                opacity: 1,
              },
              500
            )
            .css({
              color: "#fff",
            });
          $slider_wrap
            .find(".btn")
            .css({
              color: "#fff",
              border: "1px solid #fff",
            })
            .text("전체 사업");
        } else if (slider_n == 2) {
          $slider_wrap.find("h2").html("One Step to<span>New World</span>");
          $(".slider_wrap > p").html(
            "게임을 켤 때마다 <span>새로운 세상으로 한 발자국 내딛는 듯한</span><span>새로움을 느끼실 수 있도록 노력하겠습니다</span>"
          );
          $slider_wrap
            .animate(
              {
                opacity: 1,
              },
              500
            )
            .css({
              color: "#000",
            });
          $(".slider_wrap .btn")
            .css({
              border: "1px solid #2a2b38",
              color: "#2a2b38",
            })
            .text("전체 사업");
        } else {
          $slider_wrap
            .find("h2")
            .html("Global<p>User-Friendly</p><span>Game Company</span>");
          $(".slider_wrap > p").html(
            "카카오게임즈는 자체 개발 역량 강화를 통해 <span>유저 친화적 게임 경험을 제공하기 위해 노력해왔습니다.</span>"
          );
          $slider_wrap.animate(
            {
              opacity: 1,
            },
            500
          );
          $slider_wrap.find(".btn").text("전체 서비스");
        }
      }
    );
  });

  var n = 0;
  setInterval(function () {
    n++;
    if (n == 4) {
      n = 0;
    }
    $(".mockup_wrap")
      .delay(2000)
      .animate(
        {
          left: -520 * n,
        },
        1000
      );
  }, 3000);
});
