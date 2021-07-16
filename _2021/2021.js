$(window).scroll(function() {
    const bioTop = $('#bio').offset().top,
        bioHeight = $('#bio').outerHeight(),
        resTop = $('#res').offset().top,
        resHeight = $('#res').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
        if (wS > (bioTop+bioHeight-wH - 500)){
            $(".bio").addClass("expand");
        }
            else {
            $(".bio").removeClass("expand");
        }
            if (wS > (resTop+resHeight-wH - 500)){
            $(".res").addClass("expand");
            $(".bio").removeClass("expand");
        }
            else {
            $(".res").removeClass("expand");
        }
});




//  $(window).scroll(function() {
    //     const wS = $(this).scrollTop(),
    //     bio = 600,
    //     res = 1400;
    //     if (wS > (bio)){
    //        $(".bio").addClass("expand");
    //    }
    //        else {
    //         $(".bio").removeClass("expand");
    //    }
    //    if (wS > (res)){
    //     $(".res").addClass("expand");
    //     $(".bio").removeClass("expand");
    // }
    //     else {
    //      $(".res").removeClass("expand");
    // }
    // });