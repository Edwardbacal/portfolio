// Open Modal

$(".item").on("click", function () {
  $('.modal').addClass('show');
  $('ul').addClass('none');
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
  $('ul').removeClass('none')
});

// Hover effects

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

// footnotes

$('body').on('click', 'sup', function () {
  $(this).children('.footnote').toggle();
});

$("#gmoil").on("click", function (e) {
  e.preventDefault();
  window.location.href = $(this).attr("href").replace("gmoil", "edwarddbacal@gmail");
});



// Content

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

    <article id="top">
      <p>
        At the Fonderie Darling this past summer, solo shows by Sarah Stevenson and Jeanette Johns juxtapose techniques and technologies of crafting thread-based art, offering different perspectives through which to view geometric abstraction.
      </p>

      <p>
        This past August I visited the Fonderie Darling in Montreal for the first time. More than just seeing this new-ish gallery (a space worth seeing, to be sure), it was the first time I left the Greater Toronto Area since 2019, and the value of experiencing art installations IRL, in novel settings, was not lost on me. Taking in the FD’s exhibitions—<em>Before the Storm</em>, a selection of Sarah Stevenson’s skeletal, wireframe structures, and <em>Of Things as they Happen to be</em>, featuring Jeanette Johns’ textile abstractions—was the first time in recent memory I was compelled to write about an exhibition. I felt something like that spark—part ideational, part sensorial—of being struck by what I was seeing, of experiencing something <em>different</em> that I wanted to pin down. In making good on that feeling (and to revive my art writing practice that has decidedly languished over the pandemic), I’ve established this blog to document contemporary art programming in Toronto (ironically beginning with a pair of now-past exhibitions in another city).
      </p>

      <p>
        Though quite different in scale and style, Stevenson and Johns’ exhibits complement each other in the way they explore a similar artistic method, using thread-based material to outline barely-tangible forms. In both shows, viewers engage with the physicality of geometric abstraction, rendered differently through each artist’s technique and treatment of materials. On another level, this pairing speaks to how visual technologies, seen through different historical lenses, shape how we may imagine properties like shape and structure. Invoking technologies as different as fifteenth-century looms and twenty-first century computer graphics, these shows bring together different ways of crafting and viewing not-altogether-different artworks.
      </p>
        
      <p>
        Stevenson's six exhibited works hang from the tall ceilings of the gallery's main hall, a classic instance of repurposed industrial architecture qua contemporary art space. This open, airy setting brings out the scale and lightness of the works, which rise between three and five metres high and hover as low as a few inches above the floor, taking up significant space while occupying minimal physical volume. These vaguely Constructivist structures—not quite sculptures but, perhaps, something like sculptural line drawings—trace polygonal shapes via strands of fishing wire wrapped around skeletal metal hoops. Thin, colourful threads outline empty interiors, giving an ethereal quality to buouyant frames that emphasize the transparency and lightness at their core. Throughout, forms variously ebb and flow into bulbs, bells, and crescents, both in undulating movements and more subtle curves that create dynamic, elegant shapes. In several works, distinct figures flow through the same overlapping space: threads follow a shared surface before diverging into different shapes or else move through each other in more dramatic intersections. From this "trick" of combining distinct structures, these works dissolve implied form into negative space, summoning the immateriality of shapes that are capable of occupying the same volume.
      </p>

      <div class="imgR">
        <img src="_blog/assets/001-stevensonIV.jpg" alt="Before the storm installation view">
        <p>Installation view, photo from https://fonderiedarling.org, Yvon Monette, 2021</p>
      </div>
      
      <p>
       At the same time Stevenson plays with this "trick" of outlining immaterial volumes, her art still makes its structure and construction clear. Where works appear fluid and ethereal from afar, they become more concrete and planar as one gets close enough to see their joins. The almost virtual quality of fine colourful threads becomes something more material, exhibiting the physicality and precision of bare wire and thread. Moreover, one can discern fine details like the subtle patterning in the fishing line and the minute vibrations that run through it. Attention shifts from form and shape to material and structure; the substance of the work becomes its outline, closing the margin between surface and skeleton - I would argue this also includes incidental details like the ballast stones at the foot of these works, and the additional metal frames and thread that support these works that are, themselves, composed of metal frames and thread.
      </p>

      <p> 
        These works are certainly impressive in their craft and design, or to put it more directly, they <em>look cool</em> in a very immediate way. I feel like they run the risk of being too instagrammable, overtly presentational and photogenic in ways that elide the constructivist techniques that make them interesting as spatial objects, even if they may be flashy. It can be easy to overlook how these works sit in and move through space, while reciprocally allowing space to pass through them. Predictably, many visitors seemed most interested in posing in front of works, though I also watched another visitor who, after some time in the gallery, approached one piece before laughing out loud. There’s nothing evidently funny about these works, and the visitor’s tone didn’t suggest mockery or sarcasm, so I can't say what made them laugh. But there is something about these structures that might produce a kind of amused reaction. There’s something about the simplicity of these complex works, which perform their "trick" of shaping space and transposing shapes in such a plainly evident way, that might be inexplicably funny, though in a deadpan way. In their emphatic transparency, these works disclose everything about themselves; in grasping that, laughing (not necessarily at or with anything, but just laughing as acknowledgement) might be an appropriate response?
      </p>

      <div class="img">
        <img src="_blog/assets/001-johnsIV.jpg" alt="Of things as they happen to be installation view">
        <p>Installation view, photo from https://fonderiedarling.org, Simon Belleau, 2021</p>
      </div>
      
      <p>
        In contrast to <em>Before the Storm</em>, Jeanette Johns' work is noticeably less spectacular in scale, form, and presentation. Her bi-chromatic textiles, along with a series of repeated prints depicting an abstract linenfold pattern, are mounted along the walls of the FD's more compact, conventionally white-cube gallery.
        The works are mostly straightforward, opting for subdued, minimal abstractions that bury nebulous figures under subtle details. These are unassuming works, born of a slow gaze and the methodical process of translating mundane figures (for instance, a set of windows or a staircase) into pared down graphic patterns. Partly motivated by spending so much time in her home and studio during the pandemic, Johns focuses on the details that blend into the familiarity of domestic space; in doing so, she creates images of what becomes hidden in plain sight, preserving that visual reticence in designs that are analogously unforthcoming.
      </p>
      
      <p>
        One work that stuck with me is <em>Shadow Windows</em>, a diptych of textiles that, at roughly 3x2 metres each, approximates a life-size diagram of a window pane. The pair of cotton panels outline a grid of windows by shifting the direction and alignment of simple linear patterns, tracing out what are already pared down shapes. Hung from wall-mounted rods, the panels resemble translucent curtains screening light as it passes through a window lattice. Nonetheless, the opaque panels are densely woven from patterns of vertical and horizontal weaves that combine black, white, and purple thread that moves through subtle colour gradations. The flow of these intermingling colours and lines produces a soft, almost vibrating quality that holds attention on the work's surface and texture. 
      </p>

      <div class="img">
        <img src="_blog/assets/001-johnswindow.jpg" alt="Shadow Window">
        <p>Shadow Window, photo from https://fonderiedarling.org, Simon Belleau, 2021</p>
      </div>
      <div class="img">
        <img src="_blog/assets/001-johns.jpg" alt="Folded Curtain">
        <p>Folded Curtain, photo from https://fonderiedarling.org, Simon Belleau, 2021</p>
      </div>
      
      <p>
        While most of John's works are conventionally hung parallel to the wall, there are two notable exceptions: <em>Folded Curtain</em> and <em>Shadow Stairs Reflected</em> give textiles depth and volume by folding them over brass, wall-mounted bars, forming triangular shapes that jut into the viewer's space. These textiles avoid their implicit flatness, presenting themselves as material that's formed by, and works around, its physical supports. In the more dynamic of the two, <em>Shadow Stairs Reflected</em>, a long rectangular panel wrap through a series of bars that, given their uneven spacing and height, results in a zig-zagging waveform that  resembles a printing press as well as a loom. These associations are not incidental, as Johns' work reflects on the format, processes, and structure of image-making technologies. By invoking the mechanics of such devices, the artist draws on their creative properties to play with the values and associations they carry.
      </p>
      
      <p>
        Johns' own use of a loom is particularly significant. Unlike the printing press, which mechanized the reproduction of visual media, looms entail a different mode of creating and communicating content - they document information in their own way, relative to the time and energy the format requires. The visual simplicity of Johns' textiles belies the laborious process of manually weaving them, as well as her alleged use of "complex geometric models" and software for designing weaving patterns.<sup>1<span class="footnote">Exhibition Text by Milly-Alexandra Dery: <a href="https://fonderiedarling.org/en/Of-Things-As-They-Happen-To-Be">https://fonderiedarling.org/en/Of-Things-As-They-Happen-To-Be</a></span></sup> That Johns combines strikingly different technologies in her textiles is interesting, if only because this combination remains abstract in the work itself. Despite imbuing textiles with complex patterns of digitized information, such details are not really discernible, there is a layer of data we cannot read. The textiles double down on their reticence, concealing what they contain, while adding a conceptual level to how we understand them. 
      </p>
      
      <p>
        As part of a renewed interest in the artistic possibilities of textiles, Johns builds on the medium by reconceptualizing what it is and does. Where textile craft has historically been maligned under phallocractic aesthetic hierachies—i.e. neglected on account of its association with domestic, "soft", and traditionally feminine labour—contemporary artists and writers have sought to vindicate the medium. In Johns' case this entails foregrounding her material (cotton) and methods (hand weaving with a loom) while also shifting the context around them. Through the mediation of the computer aided design, her work is neither either a revival nor transformation of traditional craft, but the product of intersecting technologies and media, rejecting the perception that her work has a unitary material identity.
      </p>

      <div class="imgL">
        <img src="_blog/assets/001lg.jpeg" alt="Laurent garnier laboratoire mix cover">
        <p>Laurent Garnier - Laboratoire Mix (React, 1996)</p>
      </div>

      <p>
        In presenting abstract objects through the fragmented lens of historically varied technology and media, Johns' work circles back to Stevenson, whose hand-crafted objects also invoke digital technology. Stevenson begun making wireframe structures in 1997, and her work bears a strong resemblance to computer graphics of the time. It's hard not to see the echoes of late-90s video games and early 3D models in her colourful polygons and fragmented shapes. I can't stop thinking of the cover of Laurent Garnier's 1996 "Laboratoire Mix", a document of mid-90s techno that exemplifies a contemporaneous taste for hi-tech digital aesthetics. The mine-shaped object on the cover, in which triangular panels form a geodesic sphere covered with polygonal cones, signals that this mix CD is decidedly future-oriented, situating itself at the front of rapidly evolving aesthetic forms. As such, this design now looks quite dated; its pixelated lines and clunky shapes seem primitive, but also quaintly charming in a nostalgic way.
      </p>

      <p>
        I'd be lying if I said this nostalgic charm wasn't part of what I enjoyed in seeing Stevenson's work, even if it's not really a quality of the art itself. I can't say if Stevenson has ever been interested in computer graphics, much less strived for any kind of hi-tech digital aesthetic, but it's interesting to view her work through this lens: how does my appreciation of these works pivot around technological associations whose character has dramatically changed over the last twenty-five years? How would I would have seen these works in the late 90s, compared to 2021, when 3D polygons look quaint and "wireframe" signifies something different. Indeed, the other side of this association with digital aesthetics is the current notion of wireframe, from user experience design, which refers to the blueprint of websites and apps. A wireframe is a bare graphic outline that, in addition to laying out the visible elements of a site of app, organizes the flow of content and guides the user's experience. As the skeleton under the on-screen skin, the wireframe remains invisible but present in mediating the user's experience of online content. 
      </p>

      <p>
        Stevenson's wireframes are different in a crucial respect, however; they're not made to show skin but to draw attention to its skeleton and the empty space it outlines, its structure is its content. In this way, her work also differs from Johns' textiles, where the design is organized through digital software whose properties are not apparent in the work. Johns' work is not really about obscuring its internal composition, though. In drawing attention to its skin, Johns highlights the mechanics and labour of weaving it, details that are manifest in the textur and pattern of her surfaces. For both artists, then, the dynamic between digital design and manual craft, proves to be an interesting conceptual lens. In thinking about the tools and techniques that undergird the visual, material, and structural compositions of their work, Johns and Stevenson's offer striking contemporary perspectives on geometric abstraction today.          
      </p>

      <p class="name">edward bacal. october 8, 2021</p>
        
      <a href="#top"><button class="top">RETURN TO TOP</button></a>
      
    </article>`,
  };