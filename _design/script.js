console.log('hi');

// // Hamburger Menu

// $(".hamburger").on("click", function () {
//   $(".hamburgerMenu").toggleClass("hamburgerOpen");
// });

// $(".ham").on("click", function () {
//   $(".hamburgerMenu").toggleClass("hamburgerOpen");
// });



$(".box").on("click", function () {
  $(this).prev('div').toggleClass("show");
  $('.desc').removeClass("hide");
});

$(".over").on("click", function () {
  $(this).removeClass("show");
});


$("i").on("click", function () {
  $(this).parent('div').toggleClass("show");
  $(this).next('p').removeClass("hide");
});

$("#info").on("click", function () {
  $(this).next('div').toggleClass("show");
  $('#info').toggleClass("hide");
  $('.desc').removeClass("hide");
});

$("#gmoil").on("click", function (e) {
  e.preventDefault();
  window.location.href = $(this).attr("href").replace("xgmoil", "@gmail");
});


