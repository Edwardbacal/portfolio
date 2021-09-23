// Open Modal
$(".item").on("click", function () {
  $('.modal').addClass('show');
});


$(".back").on({
  mouseenter: function () {
    $('.chevrons').css({animation: "left 1.3s ease-in-out infinite"});
  },
  mouseleave: function () {
    $('.chevrons').css({animation: "none"});
  }
});

$("li").on({
  mouseenter: function () {
    $(this).find('span').css({opacity: "0"});
  },
  mouseleave: function () {
    $('span').css({opacity: ".5"});
    $('li').animate({scrollTop:0}, 300);
  }
});




//  Append Article

$(".item").on("click", function () {
  const article = $(this).attr("id");
  for (let articleTitle in articleList) {
    if (article === articleTitle) {
      $('.content').empty();
      setTimeout(function () {
        $(articleList[articleTitle]).hide().appendTo('.content').fadeIn(500)
      }, 400);
    }
  }
});


// Go Back
$(".back").on("click", function () {
  $('.modal').removeClass('show');
});


const articleList = {
    "stevenson":`
      <div class="column">
      <div class="colImg"><img src="https://fonderiedarling.org/assets/components/phpthumbof/cache/SStevenson_BeforeTheStorm_2021_36_lowres.701ffd2a5a1586280508fa4385eb8579.jpg" alt="">
      </div>
      <div class="title">
        <h3>SARAH STEVENSON: BEFORE THE STORM</h3>
        <h3>JEANETTE JOHNS:  OF THINGS AS THEY HAPPEN TO BE</h3>
        <h3>fonderie darling: april 22, 2021 - august 22, 2021</h3>
      </div>

    </div>

    <article>
      <p>Since galleries reopened this year, two of the more engaging exhibitions I’ve visited have been at the Fonderie Darling in Montreal. “Before the Storm,” a collection of Sarah Stevenson’s skeletal, wireframe structures, is featured alongside “Of Things as they Happen to be,” a display of Jeanette Johns’ textile abstractions. While quite different in scale and style, these shows complement each other in the way they explore a similar artistic method, using thread-based material to outline quasi-figurative shapes. On another level, this pairing speaks to how visual technologies, retrospectively seen through different historical lenses, shape how we imagine basic basic properties like shape and structure.</p>
      <p>
      Almost before we Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aspernatur porro earum vitae adipisci, minima ad quas temporibus voluptas illo! Nulla blanditiis odit commodi voluptatibus ea, vitae modi, architecto tempora ratione magnam eius error quos ipsam laudantium cupiditate esse illum, corrupti eaque. Blanditiis et non cupiditate, dolor tenetur accusamus vero iste animi mollitia esse voluptates, illum perferendis dicta velit facilis autem, vitae distinctio numquam sequi labore. Odio quaerat, ipsa placeat est dolorum quidem minus incidunt molestiae nemo aperiam enim ex repudiandae, quisquam ipsum! Quam, tenetur ullam amet nostrum, placeat facere aut illo ab distinctio id cum magni veniam voluptatum quaerat odio saepe sunt magnam tempore impedit officiis. Nisi nam, in impedit optio quos maiores eos aspernatur placeat ex dolores nostrum animi voluptate harum ratione soluta iure dolorem minima ut voluptas exercitationem doloribus ad iste beatae. Velit ipsa aut voluptatum expedita eligendi quas sit doloremque cumque in at? Dicta labore molestias optio esse porro sed sapiente at ratione similique maiores eum iure doloremque laudantium quasi officia, magnam nobis officiis ex in ab tempora velit consequuntur recusandae exercitationem. Tempore est molestiae voluptate aliquid porro amet magni. Sit quidem quod impedit dolorum, quaerat doloremque quos! Nihil blanditiis tempora, ad tenetur natus impedit ipsam molestiae saepe illo nemo. Corporis nam nisi est porro reiciendis deserunt voluptates sit at assumenda voluptate alias dignissimos aliquid error consequuntur, quos adipisci, ab optio recusandae quas sed ea quam! Deleniti eius est, voluptas id minima nobis reiciendis, deserunt repudiandae voluptatum dolore fugiat maiores cum, natus itaque error enim alias animi eos similique inventore necessitatibus? Veritatis laboriosam a rerum aperiam illo aliquam natus deleniti ipsa, sed dolore quidem delectus cum perferendis voluptas numquam facilis, tempora incidunt vitae quibusdam impedit qui error? Similique necessitatibus alias quaerat fugit maxime sint aut ducimus, quo a praesentium debitis voluptatibus optio suscipit tempora voluptates! Nostrum tenetur ratione nisi voluptatum esse labore totam odio eius error, at molestiae aperiam dolores obcaecati architecto voluptates enim repudiandae recusandae consequatur, deleniti, harum nihil autem. Veritatis, repellendus tenetur quibusdam voluptate excepturi eligendi cupiditate ipsa voluptates assumenda non voluptatum aspernatur, dolor a soluta quo illo, magni quis placeat possimus nulla architecto quaerat debitis nesciunt. Nostrum accusantium voluptatem soluta qui perferendis dolorum minima ut facilis aliquid delectus deserunt aut, neque sequi libero odio ullam. Cumque iure omnis nulla, deserunt perspiciatis nesciunt possimus! Ea harum perferendis vero, dolor neque doloribus ab voluptates voluptate tenetur nesciunt iusto labore laudantium, id, eius quae. Dolorum quo repellendus laboriosam dolorem eveniet nisi iusto! Explicabo voluptate aliquid aut ab consequuntur voluptatum, voluptates ipsam cumque inventore, debitis, esse vitae dolor temporibus minima corrupti! Tenetur dolor officia et quia enim, nostrum culpa harum fuga, sapiente illum minus, aliquam porro nobis. Praesentium quae tempore, corrupti doloribus, deserunt molestiae est quaerat quos illum quam alias? Delectus dolorum doloremque incidunt. Ipsa et nulla placeat debitis deleniti! Ratione unde ea, alias non voluptatem quae modi. Nulla laudantium, praesentium placeat dicta reprehenderit dolorem consequatur est, sequi corrupti commodi at ea. Repudiandae incidunt omnis labore repellendus, error eveniet voluptatum, saepe placeat, veniam pariatur reiciendis deserunt. Minima maiores fuga explicabo excepturi eius, at alias voluptates, ratione quasi voluptas doloremque aperiam molestias numquam. Nam commodi quisquam iusto id labore eius provident, a eligendi adipisci ea, ducimus dolore placeat voluptatem ipsum repudiandae. Maiores repellat omnis minima maxime sequi quia, dolores suscipit eligendi consequuntur praesentium ipsa iure reprehenderit vero obcaecati nisi cumque error eaque quod ipsum qui! Officiis vitae dolores expedita. Impedit amet dolores rerum illum tempora corporis perferendis ducimus eveniet dolorem ipsam inventore corrupti id, adipisci facilis doloremque accusantium vero numquam dicta alias nostrum? Accusantium maiores impedit ut enim ratione unde assumenda ab quo! Corrupti voluptatem tempore consequatur? Vero!</p>
    </article>`,
  };

  $(".back").on("click", function () {
    console.log('back');
    $('.modal').removeClass('show');
  });