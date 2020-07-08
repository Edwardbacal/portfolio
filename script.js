// accordion menu for design/illustration sections

$("#expand").on("click", function () {
  $(".toggle").slideDown();
  $(".arrow").addClass("rotate");
});

$("#collapse").on("click", function () {
  $(".toggle").slideUp();
  $(".arrow").removeClass("rotate");
});

$(".click").on("click", function () {
  $(this).next('div').slideToggle();
  $(this).children(".arrow").toggleClass("rotate");
});

// $(".box img").on("mouseenter", function () {
//   $(this).css("width", "100%");
//   $(this).css("display", "block");
// });

// $(".box img").on("mouseleave", function () {
//   $(this).css("width", "48%");
// });


// nav sidebar 

$(window).scroll(function () {
  const hT = $('#scroll').offset().top,
    hH = $('#scroll').outerHeight(),
    wS = $(this).scrollTop();
  if (wS > hH) {
    $(".sideBarNav").fadeIn();
  } else {
      $(".sideBarNav").fadeOut();
    }
});



