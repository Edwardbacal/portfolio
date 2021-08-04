$(window).scroll(function() {
  const   wS = $(window).scrollTop() + ($(window).height() / 2);
          bioTop = $('#bio').offset().top,
          resTop = $('#res').offset().top;
          writTop = $('#writing').offset().top;
          desTop = $('#design').offset().top;
          moreTop = $('#more').offset().top;
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
        if (wS > writTop){
          $(".writ").addClass("expand");
          $(".res").removeClass("expand");
      }
          else {
          $(".writ").removeClass("expand");
      }
        if (wS > desTop){
          $(".des").addClass("expand");
          $(".writ").removeClass("expand");
      }
          else {
          $(".des").removeClass("expand");
      }
        if (wS > moreTop){
        $(".more").addClass("expand");
        $(".des").removeClass("expand");
    }
        else {
        $(".more").removeClass("expand");
    }
});

$(window).scroll(function() {
  const   wS = $(window).scrollTop() + ($(window).height() / 2);
          linesTop = $('#lines').offset().top;
      if (wS > linesTop){
          $(".lines").addClass("glimmer");
      }
          else {
          $(".lines").removeClass("glimmer");
      }
});

const resume = { 
  experience: `
    <div class="resBlock"><div class="innerBlock"><span class="year3">2020 — pres <br>mrm: digital production developer </span><p>I work on the creative team of a global marketing agency, where I create websites, social media content, banners, newsletters, and videos (clients include general motors, lysol, air wick, sanofi, etc).</p></div></div>

    <div class="resBlock"><div class="innerBlock"><span class="year3">2016 — 2020 <br>university of toronto: course instructor</span><p>I independently led undergraduate courses in art history. I designed and delivered original curricula, managed course operations, oversaw class-wide communications (including online content and course sites), and reported on student outcomes.
    </p></div></div>

    <div class="resBlock"><div class="innerBlock"><span class="year3">2012 — 2018 <br>university of toronto: teaching assistant</span><p>I led undergraduate tutorials, evaluated large volumes of coursework, liaised with students and staff, and performed administrative tasks.
    </p></div></div>

    <div class="resBlock"><div class="innerBlock"><span class="year3">2016 — present <br>freelance / volunteer designer</span><p>I design and edit websites, visual reports, social media content, and logos for independent clients.
    </p></div></div>

    <div class="resBlock"><div class="innerBlock"><span class="year3">2014 — 2017 <br>graduate union of students of art: president</span><p>In the university of toronto’s art history department, I led the graduate union’s direction, programming, communications, and strategy; advocated for student interests; led meetings; and liaised with students, faculty, and staff.
    </p></div></div>

    <div class="resBlock"><div class="innerBlock"><span class="year3">2013 <br>the power plant contemporary art gallery: curatorial intern</span><p>I conducted research in support of public events, contributed copy writing and editing for exhibition literature, curated research texts, and organized images and information for the gallery’s records.
    </p></div></div>`,

  education: `
    <h4>education</h4>

    <div class="resBlock"><div class="innerBlock"><span class="degree">PhD</span><p>university of toronto<br>department of art history<br>2018</p></div></div>

    <div class="resBlock"><div class="innerBlock"><span class="degree">MA (distinction)</span><p>university college london<br>department of history of art<br>2012</p></div></div>

    <div class="resBlock"><div class="innerBlock"><span class="degree">BA hons (distinction)</span><p>university of toronto<br>major: art history, minors: cinema studies, philosophy<br>2011
    </p></div></div>

    <h4 class="right">professional training</h4>

    <div class="trainBlock"><div class="innerBlock"><p>juno college of technology<br>2020</p><span class="training">front-end development bootcamp<br>(certificate)</span></div></div>

    <div class="trainBlock"><div class="innerBlock"><p>centre for community partnerships<br> university of toronto<br>2018</p><span class="training">community engaged learning seminar for doctoral students<br>(program completion)</span></div></div>

    <div class="trainBlock"><div class="innerBlock"><p>centre for teaching support & innovation<br> university of toronto<br>2018</p><span class="training">advanced university teaching preparation<br>(certificate)</span></div></div>

    <div class="trainBlock"><div class="innerBlock"><p>school of graduate studies<br> university of toronto<br>2018</p><span class="training">graduate professional skills program<br>(certificate)</span></div></div>

    <div class="trainBlock"><div class="innerBlock"><p>woodsworth college<br> university of toronto<br>2017</p><span class="training">teaching in higher education 500<br>(program completion)</span></div></div>

    <div class="trainBlock"><div class="innerBlock"><p>graduate centre for academic communication<br> university of toronto<br>2016</p><span class="training">becoming a better editor of your own writing<br>(course completion)</span></div></div>

    <div class="trainBlock"><div class="innerBlock"><p>graduate centre for academic communication<br> university of toronto<br>2016</p><span class="training">oral presentation skills<br>(course completion)</span></div></div>
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
        <li>adobe after effects <br>(motion / animation design)</li>
        <li>adobe premiere <br>(video editing)</li>
        <li>adobe inDesign <br>(print / document design)</li>
        <li>sketch <br>(web design)</li>
        <li>figma <br>(web & graphic design)</li>
      </ul>

      <h4 class="skill">web media</h4>
      <ul class="skills">
        <li>html5</li>
        <li>css3 / scss</li>
        <li>javascript / jQuery</li>
        <li>wordpress</li>
        <li>wcag / aoda <br>web accessibility standards</li>
        <li>responsive design</li>
        <li>user experience theory</li>
        <li>social media</li>
        <li>seo / analytics</li>
      </ul>
    </div>

    <h4 class="skill">professional tools</h4>
    <ul class="skills">
      <li>microsoft office<br>
      (word, excel, powerpoint)</li>
      <li>google workspace</li>
      <li>mac osx</li>
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

    
  $(".desRow li").on("click", function () {
    $(this).next('div').slideToggle().css("display", "grid");
    $(this).find(".fa-plus").slideToggle("fast");
  });

  $("#gmoil").on("click", function (e) {
    e.preventDefault();
    window.location.href = $(this).attr("href").replace("xgmoil", "@gmail");
  });