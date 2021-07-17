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




const resume = { 
    experience: `<div class="resBlock"><div class="innerBlock"><span class="year3">2020 — pres <br>MRM: digital production developer </span><p>I work on the creative team of a global marketing agency, where I create websites, social media content, banners, newsletters, and videos (clients include General Motors, Lysol, Sanofi, etc).
</p></div></div>

<div class="resBlock"><div class="innerBlock"><span class="year3">2016 — 2020 <br>University of Toronto: Course Instructor</span><p>I independently led undergraduate courses in art history. I designed and delivered original curricula, managed course operations, oversaw class-wide communications (including online content and course sites), and reported on student outcomes.
</p></div></div>

<div class="resBlock"><div class="innerBlock"><span class="year3">2012 — 2018 <br>University of Toronto: teaching assistant</span><p>I led undergraduate tutorials, evaluated large volumes of coursework, liaised with students and staff, and performed administrative tasks.
</p></div></div>

<div class="resBlock"><div class="innerBlock"><span class="year3">2016 — present <br>freelance / volunteer designer</span><p>I design and edit websites, visual reports, social media content, and logos for independent clients.
</p></div></div>

<div class="resBlock"><div class="innerBlock"><span class="year3">2014 — 2017 <br>Graduate Union of Students of Art: President</span><p>In the University of Toronto’s Art History Department, I led the graduate union’s direction, programming, communications, and strategy; advocated for student interests; led meetings; and liaised with students, faculty, and staff.
</p></div></div>

<div class="resBlock"><div class="innerBlock"><span class="year3">2013 <br>The Power Plant Contemporary Art Gallery: Curatorial Intern</span><p>I conducted research in support of public events, contributed copy writing and editing for exhibition literature, curated research texts, and organized images and information for the gallery’s records.
</p></div></div>`,

education: `

<div class="resBlock"><div class="innerBlock"><span class="year3">2020</span><p>front-end development bootcamp<br>juno college of technology</p></div></div>

<div class="resBlock"><div class="innerBlock"><span class="year3">2012-2018</span><p>PhD<br>university of toronto, department of art history</p></div></div>

<div class="resBlock"><div class="innerBlock"><span class="year3">2011-2012</span><p>MA (distinction)<br> university college london, department of history of art</p></div></div>

<div class="resBlock"><div class="innerBlock"><span class="year3">2006-2011</span><p>BA hons (distinction)<br>university of toronto<br>major: art history, minors: cinema studies, philosophy.
</p></div></div>`
}

$(".resButton").on("click", function () {
    const category = $(this).attr("id");
    console.log(category);
    $('.resBody').empty();
    $('.resBody').fadeIn("slow");
    for (let categoryContent in resume) {
      if (category === categoryContent) {
        $('.resBody').append((resume[categoryContent]));
      }
    }
  });

  $(".resButton").on("click", function () {
    $('.resButton').not(this).each(function(){
        $(this).removeClass("capital");
      });
    $(this).addClass("capital");
  });

  