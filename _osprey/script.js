$(".page2").on("click", function () {
  $('.page2').not(this).each(function(){
    $(this).removeClass("open");
  });
  $(".page").toggleClass("hide");
  $(this).toggleClass("open centre");
  $(this).find("p").toggleClass("hide");
  $(this).find("img").toggleClass("hide");
});


$(".page").on("click", function () {

  $('.page').not(this).each(function(){
    $(this).removeClass("open").toggleClass("hide");
  });
  $(".page2").toggleClass("hide");
  $(this).toggleClass("open centre");
  $(this).find("p").toggleClass("hide");
  $(this).find("img").toggleClass("hide");
});


// Populating the text box

$(".page").on("click", function () {
  const number = $(this).attr("id");
  $(".textBox").toggleClass("hide wide");
  $("#text").empty();
  for (let page in letter) {
    if  (number === page) {
      $('#text').append((letter[page]));
      $("#text").toggleClass("anim")
    }
  }
});


$(".page2").on("click", function () {
  const number = $(this).attr("id");
  $(".textBox").toggleClass("hide wide");
  $("#text").empty();
  for (let page in letter) {
    if  (number === page) {
      $('#text').append((letter[page]));
      $("#text").toggleClass("anim")

      }
  }
});

$("#o").on("click", function () {
  $(".text").toggleClass("small");
  $(".textBox").toggleClass("big");
});

$("#y").on("click", function () {
  $(".text").toggleClass("small");
  $(".textBox").toggleClass("big");
});



const letter = {
  "cover":`"Welcome to the online edition of Osprey. Please peruse!`,
  "a": `Osprey ardently appreciates Afghan artisanry.`,
  "b": `Between Belgium’s bicycles and beer, Osprey bets on what’s best.`,
  "c": `Clearly, Osprey clamours for Colombian coffee.`,
  "d": `Osprey decidedly delights in Danish design,`,
  "e": `Osprey evidently enjoys Ethiopian and Eritrean eats.`,
  "f": `Osprey is a formidable fan of French philosophy.`,
  "g": `Osprey gets that Ghanaian garb is gorgeous.`,
  "h": `As a hobby, Osprey hones his history, homing in on Haiti.`,
  "i": `Osprey finds inspiration in the ingenuity of Indian inventions.`,
  "j": `Osprey joneses for Japanese jazz joints.`,
  "k": `In the kitchen, Osprey is kooky for Korean Kimchi.`,
  "l": `Osprey likes to leaf through Lebanese literature.`,
  "m": `Osprey marvels at the magnificence of Mexican murals.`,
  "n": `Osprey goes nuts for Norwegian novelists.`,
  "o": `Our Osprey is an outspoken observer of culture, both obvious and obscure, from all over Occident and Orient. <br> Of your obsessions, Os’, would you oblige to offer opinions on outstanding ones?`,
  "p": `Portuguese prose pleases Osprey.`,
  "r": `Osprey is always ready to rolick to rare Romanian house records`,
  "s": `Osprey savours the sensations of Senegalese cinema.`,
  "t": `Osprey tirelessly treasures Thai temples.`,
  "u": `Osprey understands the United Kingdom’s universities are unique.`,
  "v": `Osprey is veritably voracious for Vietnamese vermicelli.`,
  "w": `Osprey goes wild for West Indian Writers`,
  "y": `Yowza! That’s a yawning range of interests. What’s that Os’, you have a question for the reader?`,
  "z": `Osprey is zany for Zambian zamrock`,
};