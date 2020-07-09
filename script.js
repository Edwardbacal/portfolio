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


$("#ceButton").on("click", function () {
  console.log('yep');
  $("#ceArt").fadeIn();
});

$("#bulldogButton").on("click", function () {
  console.log('yep');
  $("#bulldogBook").fadeIn();
});

$("#beerButton").on("click", function () {
  console.log('yep');
  $("#beer").fadeIn();
});

$("#psdButton").on("click", function () {
  $("#psd").fadeIn();
});


const portfolio = {
  "ce": `<div class="projectTitle">
          <h5>CE Art Trace</h5>
          <i class="fab fa-react"></i>
          <a href=""><i class="fas fa-external-link-alt"></i></a>
        </div>
          <p class="clearP">An interactive interface for digital publications, presenting a more user-friendly alternative to
          traditional e-texts.
          </p>`,
  "bulldog": "Bulldoggies!",
  "beer": "burr",
  "psd": "psddddddd",
};


$(".projectButton").on("click", function () {
  const project = $(this).attr("id");
  console.log(project);
  $('.projectBox').empty();
  $('.projectBox').fadeIn();
  for (let projectTitle in portfolio) {
    if (project === projectTitle) {
      $('.projectBox').append("<h1>" + (portfolio[projectTitle]) + "</h1>");
    }
  }
});

// $(".footnote").on("click", function () {
//   const number = $(this).attr("id");
//   $('.note').empty();
//   $('.note').toggle();
//   for (let footnote in cite) {
//     if (number === footnote) {
//       $('.note').append("<p>" + (cite[footnote]) + "</p>");
//     }
//   }
// });



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



