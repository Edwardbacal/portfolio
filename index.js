// nav actions

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

// design animation

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

// resume content

const resume = { 
  experience:`
  <div class="resBlock"><div class="innerBlock"><span class="year3">2022 —  <br>camh: communications associate </span><p>Within the office of Healthy Equity, I design and develop e-learning and web media for the Immigrant and Refugee Mental Health Project.</p></div></div>
  
  <div class="resBlock"><div class="innerBlock"><span class="year3">2016 — 2024 <br>university of toronto: course instructor</span><p>I independently lead undergraduate courses in art history, for which I design and deliver original curricula, manage course operations, oversee class-wide communications (including online content), and report on student outcomes.
  </p></div></div>
  
  <div class="resBlock"><div class="innerBlock"><span class="year3">2020 — 2022 <br>mrm: digital production developer </span><p>On the creative team of a global marketing agency, I created websites, social media content, banners, newsletters, and videos (clients include general motors, lysol, air wick, sanofi, etc).</p></div></div>
  
  <div class="resBlock"><div class="innerBlock"><span class="year3">2012 — 2018 <br>university of toronto: teaching assistant</span><p>I led undergraduate tutorials, evaluated large volumes of coursework, liaised with students and staff, and performed administrative tasks.
  </p></div></div>
  
  <div class="resBlock"><div class="innerBlock"><span class="year3">2016 — present <br>freelance / volunteer designer</span><p>I design and edit websites, visual reports, social media content, and logos for independent clients.
  </p></div></div>
  
  <div class="resBlock"><div class="innerBlock"><span class="year3">2014 — present <br>independent writing / research</span><p>I have published twelve articles for print and online venues, presented twenty academic papers at insitutions across North America and Europe, and chaired research panels at conventions for the Universities Arts Association of Canada and the Association for Art History (UK).
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
  
  <div class="trainBlock"><div class="innerBlock"><p>university of toronto<br>school of continuing studies<br>2021</p><span class="training">foundations of digital communications strategy & social media</span></div></div>
  
  <div class="trainBlock"><div class="innerBlock"><p>juno college of technology<br>2020</p><span class="training">WordPress & Shopify Development</span></div></div>
  
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
  <li>shopify</li>
  <li>wcag / aoda <br>web accessibility</li>
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
  `,
  writings: `

  <div class="writingBlock2">
  <div class="innerBlock"><h3 class="year">WRITING</h3><p>edward d bacal writes mostly on modern & contemporary art / visual culture from north america, latin america, and europe. he is particularly interested in abstract and conceptual art since the 1960s, with emphasis on work that explores the political implications of formal innovations.</p></div>
</div>

<div class="writingBlock">
  <h5>Bodies Withdrawn: The Ethics of Abstraction in Contemporary Post-Minimal Art</h5> 
    <a href="https://edwardbacal.files.wordpress.com/2018/08/bacal_edward_d_201806_phd_thesis.pdf" class="pub">
      <p>PhD Thesis (2018)</p>
      <i class="fas fa-file-pdf"></i>
    </a>
</div>

<div class="writingBlock">
  <h5>Review: Toronto Biennial of Art: The Shoreline Dilemma</h5>
    <a href="http://asapjournal.com/toronto-biennial-of-art-the-shoreline-dilemma-edward-bacal/" class="pub">
      <p>ASAPJournal.com (December 17, 2019)</p>
      <i class="fas fa-file-pdf"></i>
    </a>
</div>

<div class="writingBlock">
  <h5>Review: Muscled Rose at Scrap Metal Gallery</h5>
    <a href="https://canadianart.ca/reviews/muscled-rose" class="pub">
      <p>CanadianArt.ca (August 14, 2019)</p>
      <i class="fas fa-file-pdf"></i>
    </a>
</div>

<div class="writingBlock">
  <h5>pervasive death: teresa margolles and the space of the corpse</h5>
    <a href="https://edwardbacal.files.wordpress.com/2018/08/hrv-article.pdf" class="pub">
      <p>human remains and violence 4/1 (2018)</p>
      <i class="fas fa-file-pdf"></i>
    </a>
</div>

<div class="writingBlock">
  <h5>The Concrete and the Abstract: On Doris Salcedo, Teresa Margolles and Santiago Sierra’s Tenuous Bodies</h5>
    <a href="https://edwardbacal.files.wordpress.com/2018/08/bacal-writing-sample-concrete-and-abstract.pdf" class="pub">
      <p>Parallax 76 (2016)</p>  
      <i class="fas fa-file-pdf"></i>
    </a>
</div>

<div class="writingBlock">
  <h5>Up, Down, Left, Right: Some Thoughts on the Inverse, Reverse, and Double</h5>
    <a href="https://edwardbacal.files.wordpress.com/2018/08/framework-4-16.pdf" class="pub">
      <p>FrameWork 4-16 (2015)</p>
      <i class="fas fa-file-pdf"></i>
    </a>
</div>

<div class="writingBlock">
  <h5>Sharon Lockhart and Steve McQueen: Inside the Frame of Structural Film</h5>
    <a href="https://edwardbacal.files.wordpress.com/2018/08/edward-bacal-sharon_lockhart_and_steve_mcqueen_inside-the-frame-of-structural-film.pdf" class="pub">
      <p>CineAction (2014)</p>
      <i class="fas fa-file-pdf"></i>
    </a>
</div>

<div class="writingBlock">
  <h5>Capitalism and Contemporaneity: On Jeremy Deller’s The Battle of Orgreave</h5>
    <a href="https://edwardbacal.files.wordpress.com/2018/08/edward-bacal-capitalism_and_contemporaneity_on_jeremy-dellers-battle-of-orgreave.pdf" class="pub">
      <p>Kapsula (2014)</p>
      <i class="fas fa-file-pdf"></i>
    </a>
</div>
  `
}

// resume actions

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

// back buttons

document.getElementById("bioEnd").addEventListener("click", function() {
  document.getElementById("bioStart").scrollLeft = 0;
}); 

document.getElementById("gi").addEventListener("click", function() {
  document.getElementById("G1").scrollLeft = 0;
}); 

document.getElementById("gii").addEventListener("click", function() {
  document.getElementById("G2").scrollLeft = 0;
}); 

document.getElementById("giii").addEventListener("click", function() {
  document.getElementById("G3").scrollLeft = 0;
}); 

document.getElementById("giv").addEventListener("click", function() {
  document.getElementById("G4").scrollLeft = 0;
}); 


