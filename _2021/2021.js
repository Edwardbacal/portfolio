$(window).scroll(function() {
   const hT = $('#bio').offset().top,
       hH = $('#bio').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       console.log('H1 on the view!');
       $(".bio").addClass("expand");
   }
       else {
        $(".bio").removeClass("expand");
   }
});






// $(window).scroll(function() {
//   const hT = $('#header').offset().top,
//       hH = $('#header').outerHeight(),
//       wH = $(window).height(),
//       wS = $(this).scrollTop();
//   if (wS > (hT+hH-wH)){
//       console.log('Header on the view!');
//       $(".bio").removeClass("expand");
//   }
// });