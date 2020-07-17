// Hamburger Menu

$(".hamburger").on("click", function () {
  $(".hamburgerMenu").toggleClass("hamburgerOpen");
});

$(".ham").on("click", function () {
  $(".hamburgerMenu").toggleClass("hamburgerOpen");
});


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

const portfolio = {
  "ce": `<div class="projectTitle">
              <h5>CE Art Trace</h5>
              <div class="iconMap">
                <i class="fab fa-react"></i>
                <i class="fab fa-css3-alt"></i>     
                <div class="pngIconBox">
                  <img src="./assets/icons/apiOrange.png" alt="API" >
                </div>
                <a href=""><i class="fas fa-external-link-alt"></i></a>   
              </div>
            </div>        

            <img src="./assets/ceArtTrace.jpg" alt="screenshot of CE Art Trace page" class="projectBoxImg">
            <p>This interactive React app displays semi-random selections from the Harvard Art Museums'         collection of over
              230,000 items. When users select a medium, the app will call the institution's API and return a randomly selected
              object that matches that classification, displaying an image, title, name, date. As an art historian, I've often
              needed to find new examples of art in a certain medium and from a certain time and place. I developed this app as
              a way to do that, to discover new work and broaden
            </p>
            <p>
              NB: I am currently expanding this app to allow users to search according to criteria and region in addition to
              medium.
            </p>`,
  "bulldog":`<div class="projectTitle">
              <h5>Bulldog Book Club</h5>
              <div class="iconMap">
                <i class="fab fa-html5"></i>
                <i class="fab fa-sass"></i>
                <div class="pngIconBox">
                  <img src="./assets/icons/jqueryOrange.png" alt="jquery">
                </div>
                <a href=""><i class="fas fa-external-link-alt"></i></a>
              </div>
            </div>       
                <img src="./assets/BBC.jpg" class="projectBoxImg" alt="screenshot of Bulldog Book Club page">
                <p>
                  This app models an dynamic interface for digital publications, using jQuery methods and a simple design to achieve a more user-friendly alternative to traditional e-texts. As an academic, I found that most publishers overlook UI and UX concerns by sticking to traditional print layouts. From my frustration with the blank pdf/ebook format, I sought to develop front-end solutions for long-form texts and volumes, which benefit from the in-browser experience.  
                </p>
                <p>
                  This app features...
                <p>    
                <p>
                  • An accordion menu that allows users to easily condense and expand contents;
                </p>
                <p>
                  • Dynamically generated endnotes, which allows to view easily access notes directly
                </p>
                <p>
                  • Buttons to enlarge and minimize text size.
                </p>
                <p>
                  • In progress: highlight buttons and a bibliographic citation generator.
                </p>`,
  "beer": `<div class="projectTitle">
              <h5>Buds for Suds</h5>     
              <div class="iconMap">
                <i class="fab fa-html5"></i>
                <i class="fab fa-sass"></i>
                <div class="pngIconBox">
                  <img src="./assets/icons/jqueryOrange.png" alt="API">
                </div>
                <div class="pngIconBox">
                  <img src="./assets/icons/apiOrange.png" alt="API">
                </div>   
              <a href=""><p class="visuallyHidden">external link to live site</p><i class="fas fa-external-link-alt"></i></a>
              </div>
            </div>

                <img src="./assets/budsSuds.jpg" class="projectBoxImg" alt="screenshot of Beer Matchmaker page">

                <p>This interactive app serves as a beer companion app that draws on a REST api to pair craft beer selections with a complimentary food choice. Users can submit a food-related term and receive a list of appropriate results, displaying the name, label, and description of each beer. 
              </p>
              <p>
                Developed in collaboration with <a href="" class="normalizeText orangeTwo">Vigyan Kayastha</a>
              </p>`,
};

// Project display

$(".projectButton").on("click", function () {
  const project = $(this).attr("id");
  console.log(project);
  $('.projectBox').empty();
  $('.projectBox').fadeIn("slow");
  $('.projectModal').css("min-height", "680px").css("background-image", "none");
  for (let projectTitle in portfolio) {
    if (project === projectTitle) {
      $('.projectBox').append((portfolio[projectTitle]));
    }
  }
});

// Email obfuscation (thanks, Robert Duhig!)

  $("#gmoil").on("click", function (e) {
    e.preventDefault();
    window.location.href = $(this).attr("href").replace("xgmoil", "@gmail");
  });




// $(".box img").on("mouseenter", function () {
//   $(this).css("width", "100%");
//   $(this).css("display", "block");
// });

// $(".box img").on("mouseleave", function () {
//   $(this).css("width", "48%");
// });


