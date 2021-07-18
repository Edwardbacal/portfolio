// $(window).scroll(function() {
//     const bioTop = $('#bio').offset().top,
//         bioHeight = $('#bio').outerHeight(),
//         resTop = $('#res').offset().top,
//         resHeight = $('#res').outerHeight(),
//         wH = $(window).height(),
//         wS = $(this).scrollBottom();
//         if (wS > (bioTop+bioHeight-wH - 500)){
//             $(".bio").addClass("expand");
//         }
//             else {
//             $(".bio").removeClass("expand");
//         }
//             if (wS > (resTop+resHeight-wH)){
//             $(".res").addClass("expand");
//             $(".bio").removeClass("expand");
//         }
//             else {
//             $(".res").removeClass("expand");
//         }
// });

$(window).scroll(function() {
  const   wS = $(window).scrollTop() + ($(window).height() / 2);
          bioTop = $('#bio').offset().top,
          resTop = $('#res').offset().top;
      if (wS > bioTop){
          $(".bio").addClass("expand");
      }
          else {
          $(".bio").removeClass("expand");
      }
          if (wS > resTop){
          $(".res").addClass("expand");
          $(".bio").removeClass("expand");
      }
          else {
          $(".res").removeClass("expand");
      }
});




const resume = { 
  experience: `
    <div class="resBlock"><div class="innerBlock"><span class="year3">2020 — pres <br>MRM: digital production developer </span><p>I work on the creative team of a global marketing agency, where I create websites, social media content, banners, newsletters, and videos (clients include General Motors, Lysol, Sanofi, etc).</p></div></div>

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
    <h4>education</h4>

    <div class="resBlock"><div class="innerBlock"><span class="degree">PhD</span><p>university of toronto<br>department of art history<br>2018</p></div></div>

    <div class="resBlock"><div class="innerBlock"><span class="degree">MA (distinction)</span><p>university college london<br>department of history of art<br>2012</p></div></div>

    <div class="resBlock"><div class="innerBlock"><span class="degree">BA hons (distinction)</span><p>university of toronto<br>major: art history, minors: cinema studies, philosophy<br>2011
    </p></div></div>

    <h4 class="right">professional training</h4>

    <div class="trainBlock"><div class="innerBlock"><p>juno college of technology<br>2020</p><span class="training">front-end development bootcamp<br>(certificate)</span></div></div>

    <div class="trainBlock"><div class="innerBlock"><p>Centre for Community Partnerships, University of Toronto<br>2018</p><span class="training">Community Engaged Learning Seminar for Doctoral Students<br>(program completion)</span></div></div>

    <div class="trainBlock"><div class="innerBlock"><p>Centre for Teaching Support & Innovation, University of Toronto<br>2018</p><span class="training">Advanced University Teaching Preparation<br>(certificate)</span></div></div>

    <div class="trainBlock"><div class="innerBlock"><p>School of Graduate Studies, University of Toronto<br>2018</p><span class="training">Graduate Professional Skills Program<br>(certificate)</span></div></div>

    <div class="trainBlock"><div class="innerBlock"><p>Woodsworth College, University of Toronto<br>2017</p><span class="training">Teaching in Higher Education 500<br>(program completion)</span></div></div>

    <div class="trainBlock"><div class="innerBlock"><p>Graduate Centre for Academic Communication, University of Toronto<br>2016</p><span class="training">Becoming a Better Editor of your own Writing<br>(course completion)</span></div></div>

    <div class="trainBlock"><div class="innerBlock"><p>Graduate Centre for Academic Communication, University of Toronto<br>2016</p><span class="training">Oral Presentation Skills<br>(course completion)</span></div></div>
    `,
    skills: `
      <h4 class="skill">core skills</h4>
      <ul class="skills">
        <li>writing / editing</li>
        <li>visual design</li>
        <li>digital media</li>
        <li>content strategy</li>
        <li>research</li>
        <li>teaching</li>
      </ul>
    
      <h4 class="skill">design tools</h4>
      <ul class="skills">
        <li>adobe photoshop</li>
        <li>adobe illustrator</li>
        <li>adobe xd <br>(web design)</li>
        <li>adobe after effects <br>(motion & animation design)</li>
        <li>adobe premiere <br>(video editing)</li>
        <li>adobe inDesign <br>(print and document design)</li>
        <li>sketch <br>(web design)</li>
        <li>figma <br>(web & graphic design)</li>
      </ul>

      <h4 class="skill">web media</h4>
      <ul class="skills">
        <li>HTML5</li>
        <li>CSS3 / SCSS</li>
        <li>javascript / jQuery</li>
        <li>wordpress</li>
        <li>WCAG / AODA <br>web accessibility standards</li>
        <li>responsive design</li>
        <li>user experience theory</li>
        <li>social media</li>
        <li>SEO / analytics</li>
      </ul>
    </div>



    `

}

$(".resButton").on("click", function () {
    const category = $(this).attr("id");
    console.log(category);
    $('.resBody').empty();
    
    for (let categoryContent in resume) {
      if (category === categoryContent) {
        $('.resBody').append((resume[categoryContent])).addClass("fade");
        $('.resBody').addClass("fade");
      }
    }
  });

  $(".resButton").on("click", function () {
    $('.resButton').not(this).each(function(){
        $(this).removeClass("capital");
      });
    $(this).addClass("capital");
  });



  