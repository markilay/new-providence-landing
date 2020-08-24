const burgerBtn = document.querySelector(".burger");
const modalMenu = document.querySelector(".modal-window");

function closeMenuByEscape(e) {
  if (e.key === "Escape" && burgerBtn.classList.contains("open")) {
    burgerBtn.classList.remove("open");
    modalMenu.classList.remove("open");
  }
}

function closeMenuByClick(e) {
  if (
    modalMenu.classList.contains("open") &&
    !e.target.classList.contains("mobile-menu__link")
  ) {
    burgerBtn.classList.remove("open");
    modalMenu.classList.remove("open");
  }
}

function openMobileMenu() {
  if (!burgerBtn.classList.contains("open")) {
    burgerBtn.classList.add("open");
    modalMenu.classList.add("open");
  }
}
burgerBtn.addEventListener("click", openMobileMenu);
window.addEventListener("keyup", closeMenuByEscape);
modalMenu.addEventListener("click", closeMenuByClick);

$(document).ready(function () {
  $(".slider-box").slick({
    centerMode: true,
    touchMove: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoSpeed: 10000,
    variableWidth: !0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(".header__video").click(function () {
  $(this).addClass("wobble infinite");
});

$("a.load__btn-app").hover(function () {
  $("#load__span-app").toggleClass("color");
});

$(".slider-card").slick();

$(".slider-nav").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  arrows: true,
  centerMode: true,
  focusOnSelect: true,
  variableWidth: !0,
  prevArrow:
    '<i class="fa slider__arrow fa-angle-left" aria-hidden="true"></i>',
  nextArrow:
    '<i class="fa slider__arrow fa-angle-right" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        variableWidth: !0,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: !1,
  asNavFor: ".slider-nav",
});

// ANIMATIOIN WHEN SCROLL
$(window).scroll(function () {
  $(".props-block").each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 600) {
      $(this).addClass("bounceInLeft");
    }
  });
  $(".props-block_two").each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 600) {
      $(this).addClass("bounceInRight");
    }
  });
});

// CHANGING CARDS
$(".plan-choice__btn").click(function () {
  $(".plan-mode_two").toggleClass("active-mode");
});
$(".plan-choice__btn").click(function () {
  $(".plan-mode").toggleClass("active-mode");
});

//CHANGING CARDS
$(".plan-choice__btn").on("click", function () {
  if (!$(this).hasClass("btnToggle")) {
    // doesn't have .btnToggle

    $(this).addClass("btnToggle");
    $(this).removeClass("btnToggleBack");
  } else {
    $(this).removeClass("btnToggle");
    $(this).addClass("btnToggleBack");
  }
});

// Scroll Menu
$(window).scroll(function () {
  $(this).scrollTop() > 56
    ? $(".nav-header").addClass("fixed")
    : $(this).scrollTop() < 56 && $(".nav-header").removeClass("fixed");
});

function screenClass() {
  if ($(window).innerWidth() <= 992) {
    $(function () {
      $(".hamburger").click(function () {
        $(".small-menu").fadeToggle(1000);
      });
    });
  }
}
screenClass();
