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
  $('#info').toggleClass("hide");
});

$("i").on("click", function () {
  console.log('heeeey');
  $(this).next('div').toggleClass("show");
  $('#info').toggleClass("hide");
});



// // Email obfuscation (thanks, Robert Duhig!)

//   $("#gmoil").on("click", function (e) {
//     e.preventDefault();
//     window.location.href = $(this).attr("href").replace("xgmoil", "@gmail");
//   });



