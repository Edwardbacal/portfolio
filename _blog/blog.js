// Open Modal

$(".item").on("click", function () {
  $('.modal').addClass('show');
  $('ul').addClass('none');
});

// Back button

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
  $(this).children('.footnote').toggleClass("block");
});

// email obfuscation

$("#gmoil").on("click", function (e) {
  e.preventDefault();
  window.location.href = $(this).attr("href").replace("gmoil", "edwarddbacal@gmail");
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

// Content

const articleList = {
  "stevenson":`
    <div class="column">
      <div class="colImg"><img src="https://fonderiedarling.org/assets/components/phpthumbof/cache/SStevenson_BeforeTheStorm_2021_36_lowres.701ffd2a5a1586280508fa4385eb8579.jpg" alt="">
      </div>
      <div class="title">
        <h3 class="uc">SARAH STEVENSON: BEFORE THE STORM</h3>
        <h3class="uc">JEANETTE JOHNS:  OF THINGS AS THEY HAPPEN TO BE</h3>
        <h3class="lc">fonderie darling: april 22, 2021 - august 22, 2021</h3>
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
      While most of John's works are conventionally hung parallel to the wall, there are two notable exceptions: <em>Folded Curtain</em> and <em>Shadow Stairs Reflected</em> give textiles depth and volume by folding over brass, wall-mounted bars, forming triangular shapes that jut into the viewer's space. These textiles avoid their implicit flatness, presenting themselves as material that's formed by, and works around, its physical supports. In the more dynamic of the two, <em>Shadow Stairs Reflected</em>, a long rectangular panel wraps over and under a series of bars, whose uneven spacing and height results in a zig-zagging waveform that resembles a printing press as well as a loom. These associations are not incidental, as Johns' work reflects on the format, processes, and structure of image-making technologies. By invoking the mechanics of such devices, the artist draws on their creative properties to play with the values and associations they carry.
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

  "blockbuster":`
  <div class="column">
  <div class="colImg"><img src="_blog/assets/002-warhol1.jpeg" alt="Andy Warhol exhibition view">
  </div>
  <div class="title">
    <h3 class="uc">MORE OF THE SAME</h3>
    <h3 class="lc">ANDY WARHOL AT THE AGO</h3>
    <h3 class="lc">JEAN-PAUL RIOPELLE AT THE MABM</h3>
    <h3></h3>
  </div>
</div>

<article id="top">
<p>
  At the Art Gallery of Ontario and Musée des Beaux Arts, Montreal, retrospectives of familiar names raise questions about the different ways exhibitions can stay relevant.  
</p>

<p>
  I'm rarely excited by exhibitions at the Art Gallery of Ontario or the Musée des Beaux Arts, Montreal, which regularly play it safe with their big-ticket shows<sup>*<span class="footnote">I know it’s not fair to blame public institutions that presumably lack the financial security and audience base to make more adventurous programming viable, a difficult situation the pandemic can only have exacerbated</span></sup>. I’m grateful to visit these museums again, but am never thrilled when museums operate on the classic-rock-radio station model: playing a recurring cycle of known hits to patrons seeking familiarity. I can't but shrug when these museums dedicate yet-more space to household names like Andy Warhol and (in Quebec households) Jean-Paul Riopelle. That said, it's worth considering what these exhibitions do differently in showing more of the same, and how they respond to changing attitudes about the diversity of arts programming.
</p>

<h4><em>Andy Warhol</em> at the AGO</h4>

<p>
  This retrospective comes fifteen years after the AGO’s last Warhol show, “Supernova: Stars, Deaths and Disasters,” which I remember as a standard-fare survey that distinguished itself only by featuring David Cronenberg as curator. Time has come again for another standard-fare survey, simply titled “Andy Warhol”, without a nominal theme or curatorial gimmick. It's a textbook retrospective that follows the artist’s oeuvre along chronological and biographical lines; however, two qualities stand out. 1) the exhibition focuses on a notably wide range of media and practices, giving more attention to "minor" works than I expected: I’m thinking of his early drawings, stitched photographs, TV appearances, and drag queens portraits. I appreciated this variety. 2) The exhibition emphasizes Warhol’s queerness and working class, immigrant background throughout. While the artist’s campy sexuality is unavoidable anywhere, this exhibition doesn’t feel like it’s tip-toeing around it, relative to a long history of museums sanitizing queerness.
</p>

<div class="imgR">
  <img src="_blog/assets/002-warhol2.jpg" alt="Andy Warhol Exhibition Review">
  <p>
    <em>Andy Warhol</em>, exhibition view.
  </p>
</div>

<p>
  In these ways, the exhibition doesn’t say anything new about Warhol, but speaks to what’s changed since “Supernova” (a lot has changed since 2006, by the way). In a post <em>Drag-Race</em>, post </em><a href="https://npg.si.edu/exhibition/hideseek-difference-and-desire-american-portraiture">Hide/Seek</a></em> world, there's considerably more interest in sexual and gender diversity at a public-ish level, and more pressure on cultural institutions to not just reiterate the normativity of the Western canon. This makes for greater interest in, say, Warhol’s early homoerotic drawings and more obscure works like his drag queen portraits. Perhaps we're at a point where Marsha P Johnson now attracts comparable interest to Warhol's classic subjects? It's great the AGO is highlighting this material and engaging with current discourse around sex, race, and gender, however, the way it frames Warhol’s marginality/proximity to the marginal points to some contradictions. I feel like the exhibition  elaborates Warhol’s working-class upbringing (nevermind his later wealth and enormous social capital) and queerness as a way of deflecting the fact this is ultimately <em>another</em> hagiographic retrospective of a <em>Great Artist</em>, arguably the most represented modern artist next to Picasso (naturally, the AGO is following this show with a Picasso one). At times it feels like the exhibtion positions Warhol as vaguely non-establishment, despite his larger-than-life status within the art market, museum industry, and popular culture. It's true that Warhol always had one foot on the outside, and the exhibition documents the influence of his eccentric coterie while addressing the problems of, say, selling portraits of unknown Black drag queens. That said, I’m not sure if the AGO is leveraging Warhol’s status to bring those eccentricities to the fore, or leveraging those eccentricities to validate the exhibition's relevance. Is it trying to adjust the popular perspective on Warhol, away from giftshop posters with decontextualized quotes and toward his complex social reality? Or is it giving mass-culture Warhol a superficial coat of 2020s social criticism while reiterating the art historical status quo? 
</p>


<h4><em>Riopelle: The Call of Northern Landscapes and Indigenous Cultures</em> at the MBA, Montreal, 11/25/2020 – 09/12/2021</h4>

<div class="img">
  <img src="_blog/assets/002-rio1.jpeg" alt="View of the exhibition Riopelle: The Call of Northern Landscapes and Indigenous Cultures. Photo MMFA, Denis Farley">
  <p>Riopelle: The Call of Northern Landscapes and Indigenous Cultures. Exhibition View. Photo MMFA, Denis Farley</p>
</div>

<p>
  My experience of seeing art in Montreal has been synonymous with Jean-Paul Riopelle and his body of distinct abstract paintings. Riopelle’s innovative abstract work has made him an eminent symbol of cultural modernity in Canada and, especially, Quebec. As such, his work is unavoidable at venues like the Musée Des Beaux Arts, which dedicated a solo retrospective to him this past summer. More than a standard-fare survey, this exhibition shifts away from the usual narratives of Riopelle’s career, which focus on his participation in the Quebec avant-garde and work in France, located among hermetic, urban communities of artists and writers. Instead, the exhibition considers Riopelle’s experience in Canada’s Northern Territories and his interest in the region’s landscape and Indigenous cultures. This curatorial focus does two significant things: it highlights a different narrative of Riopelle’s career and it incorporates the influence of Indigenous cultures in the lands he worked on. 
</p>
  
<p>
  By framing the exhibition around the Indigenous influence on the artist’s oeuvre—and by proxy, Canadian art history—the MABM follows longstanding shifts in attitude and practice around the inclusion and curation of Indigenous content in Canadian art. Cultural institutions in Canada have worked to keep pace with broad social concern for Indigenous sovereignty and culture, and this exhibition is an example of how they have made tangible steps forward while also, however, making avoidable missteps. This exhibition does its part to acknowledge the contribution of Indigenous creators in terms other than derivative, inferior, or exotic. Moreover, it addresses the history of European avant-gardes fetishizing Indigenous cultures, and how those Eurocentric perspectives have shaped art history throughout the twentieth century. However, the exhibition is still very much tethered to grand narratives of <em>Great White Artists</em> who are already ubiquitous in Canadian art history. In other words, it presents difference only as it pertains to the same.
</p>
  
<p>
  Depending on your sympathies, this curatorial approach may read as an concrete effort to feature Indigenous communities in Canadian art history or a cynical bid to demonstrate concern for Indigeneity while reaffirming a Eurocentric canon. Tacking on Indigenous content to yet <em>more</em> Riopelle content feels like an uninspired response to calls for better inclusion. It may be unfair to position this exhibition as a conscious response to such calls, when the museum could have easily done nothing. Even still, the exhibition lands in the difficult middle space of well intentioned doing-something and a more malign not-doing-enough-of-something. In that regard, it feels like an underwhelming measure to protect the relevance of canonical work. Like with the AGO’s Warhol exhibition, it points to underrepresented cultures while continuing to commit solo shows to arguably overrepresented artists.
</p>

<div class="imgL">
  <img src="_blog/assets/002-DL.jpeg" alt="Duane Linklater, A Gift from Doreen">
  <p>
    Duane Linklater, <em>A Gift from Doreen, 2016-2019</em>. Photo MMFA, Christine Guest
  </p>
</div>

<p>
  To the MBAM's credit, the exhibition also includes several pieces by contemporary Indigenous artists, along with various historical examples of the art and craft that influenced Riopelle. To highlight one new piece I appreciated, Duane Linklater's <em>A Gift from Doreen</em> features a large, undecorated canvas that is mounted on the wall, where it hangs and softly drapes onto the floor. This "blank canvas" bears the natural marks and colourations it absorbed over its life as a teepee cover, including imprints of the teepee's frame, smoke from fires made inside it, and the effects of weather. Linklater's neighbour gifted him this canvas after her teepee was damaged by a storm, and as such this fabric presents a real index of lived experience on Nippising First Nation. Moreover, the canvas indexes a social relation that begins with the end of the object's functional use, dovetailing with the act of giving; it becomes a document of generosity among neighbours that, Linklater states, "points at an 'uninterefered' exchange among Indigenous people...." 
</p>

<p>
  I'm a fan of anything that imbues Minimalist aesthetics with the material indices of concrete social experiences, and this work is a great example. It uses a minimum of visual mediation to draw out its material qualities, emphasizing the canvas as the work's formal substance and centre of meaning. While the canvas is stark in its scale and rawness, it is also disarming in the way it gently folds onto the floor, as if to say, this is not the taut surface of a stretched painting hung parallel to the wall. Lapping onto the floor and into the viewer's space, the canvas presents itself as material from the world, used, exchanged, and now displayed for visitors to consider. This canvas is not a ground on which to represent meaning, rather, it contains its own meaning in the abstract marks of its specificity—to its environment, to its users, and to the kind of ethics of uninterfered exchange Linklater describes. As a supplement to the Riopelle exhibition, it is a rich elboaration on what abstraction (and arguably, painting) can do in a contemporary, socially and culturally conscious, contexts. 
</p>

  <p class="name">edward bacal. october 18, 2021</p>
        
  <a href="#top"><button class="top">RETURN TO TOP</button></a>

  </article>`,

  "plastic":`
  <div class="column">
  <div class="colImg"><img src="_blog/assets/003-plastic.jpeg" alt="sheet of plastic with the word plastic on it - iain baxter's work still life. "></div>
  <div class="title">
    <h3 class="uc">Plastic Heart: Surface All the Way Through</h3>
    <h3 class="lc">Art Museum at University of Toronto</h3>
    <h3 class="lc">September 8, 2021–November 20, 2021</h3>
  </div>
</div>

<article id="top">
  <p>
  At the Art Museum of Toronto, <em>Plastic Heart</em> surveys the many different aesthetic, physical, and social forms that plastics take, examining the possibilities and myraid problems of a ubiquitous substance.
  </p>
  
  <p>
  <em>Plastic Heart</em>, on view at UTAC, is an extensive group show that confronts the environmental and social crises related to plastic production and waste. As a gallery show, it also addresses the ecological problems that conventional exhibition formats entail, demonstrating less resource intensive approaches to displaying art. The result is “an experimental exhibition that examines plastic as art material, cultural object, geologic process, petrochemical product, and a synthetic substance fully entangled with the human body.” In other words, the exhibition surveys the manifold practical and symbolic applications of plastic, charting the material’s inextricability with our experience of simply living in this world. <em>Plastic Heart</em> is therefore broad in scope, matching the mandate of its organizer, <a href=“https://syntheticcollective.org/“>The Synthetic Collective</a>, “an interdisciplinary collaboration between visual artists, cultural workers and scientists [… who] sample, map, understand, and visualize the complexities of plastics and micro-plastics pollution in the Great Lakes Region.” By examining the many forms and functions plastic takes, the exhibition works to denaturalize the material’s ubiquity in almost all aspects of life and, in doing so, to divest our reliance on it.
  </p>
    
  <p>
  In its curatorial scope, <em>Plastic Heart</em> features a wide variety of media that incorporate plastic in its many different forms. Featured works include industrially fabricated sculptures, videos portraying plastics, images printed on curtains, immersive installations, and compositions of readymade objects. These works also range from didactic research projects to formalist experiments, but mostly combine attention to the materiality and aesthetics of plastic with a concern for its social and ecological consequences. For instance, in Meghan Price’s relief, <em>New Balance</em>, the artist cuts up and glues together sneaker soles to form quasi-geologic strata of flowing shapes and colours. She recycles the refuse of a consumer economy built on unsustainable resources and, in doing so, points to the topographic scale of waste comprising landfills and trash flotillas. 
  </p>

  <div class="img">
    <img src="_blog/assets/003-newBal.jpg" alt="Andy Warhol Exhibition Review">
    <p>
      Meghan Price, <em>New Balance</em>, 2020.
    </p>
  </div>

  <p>
  Other works are, on one hand, more direct in addressing similar issues. For example, Skye Morét’s <em>Thank You to our Industrial Partners</em> uses common, non-recyclable materials to create a diagrammatic map of plastic pollution throughout the Great Lakes, emphasizing the banality of single-use plastics while charting the impact of their cumulative waste. On the other hand, certain pieces are overtly formal, demonstrating the innovative qualities plastic has enabled in art, as well as the challenges of preserving those qualities. Most notably, Naum Gabo’s 1936 sculpture, <em>Construction of Space: ‘Two Cones’</em> (reconstructed in 1968), points to how the modernness of plastic influenced the development of avant-garde abstraction. While Gabo experiments with plastic’s transparency, malleability, and uniform surface, his work also reveals the material’s liability to decompose. <em>Two Cones</em>, along with a selection of Hannah Wilke’s famously decaying works, reminds us that plastic is impermanent, contrary to appearances and conservation efforts. We get a sense of plastic, then, not as a timeless, infinite resource, but as a highly tenuous product.
  </p>
    

  <div class="imgR">
    <img src="_blog/assets/003-gabo.jpg" alt="Naum Gabo two cones exhibtion view">
    <p>
      Photo of Naum Gabo, <em>Construction of Space: ‘Two Cones’</em> 1936. Exhibition view. Photo via <a href="https://twitter.com/artmuseumuoft/status/1451215941375860740/photo/1">@artmuseumuoft</a>
    </p>
  </div>

  <p>
  While most works on display are fairly contemporary, made in awareness of current ecological crises, the pieces that stuck with me were from the generation of Canadian conceptual art of the 1960s and 70s. Works by IAIN BAXTER&, Les Levine, Joyce Weiland, and General Idea approach plastic in ways that are witty and conceptually inventive. Given plastic’s novel ubiquity in post-WWII consumer culture, these artists adopt industrial plastics as both the symbolic and material substance of artistic creation. For example, IAIN BAXTER&’s 1965 <em>Still Life</em>’s (see title image) embodies plasticity in both form and concept, as if to literalize the conventional notion of "plastic arts.” Here, the word PLASTIC is molded into a sheet of transparent plastic, fusing linguistic sign with its formal referent. As a self-referential presentation of plastic rendered in plastic, it functions as both a diagram of the object and a description of its inherent qualities: the panel’s curving edges, the transparent and translucent surface that casts shadows on the rear wall, and the malleability with which the word plastic is itself moulded. In playing with the concept of plastic itself, BAXTER& et al. touch on both the plainness and strangeness of the material itself. They embrace its most synthetic qualities at a time when "plastic" connoted mass-produced conformity—the age of tupperware and Gil Scott Heron singing about "plastic people with plastic minds [...] on their way to plastic homes." Looking at these works now, the low-aesthetic pop-appeal of plastic is no longer very fresh, but helps to historicize plastic's spread into the everyday on both industrial and symbolic levels.     
  </p>


  </p>
  What feels like the exhibition's most important component is not the work but the infrastructure, which demonstrates the ways it seeks to limit its ecological footprint. Some of these methods are concrete, like incorporating solar panels to power video monitors, while others feel more symbolic, like using natural, locally-sourced ink for all wall text, which is also laboriously handwritten. Others methods are, I think, more interesting in altering the typically unseen logistics of exhibition preparation, including the resources involved in shipping, storing, and installing works, down to cleaning and climatizing the gallery. Among the art on display are bags containing all the plastic waste used in the process of installing the exhibition. Likewise, the architectural layout of the previous exhibition remains unchanged, such that a wall painting from the prior exhibition is still visible. I'm all for these gestures, though they often feel more cute than critical; in any case, I think that making these processes and structures more transparent is generally a welcome move, with potential for greater integration into curatorial practice.   
  <p>

    <div class="imgL">
      <img src="_blog/assets/003-card.jpeg" alt="exhibition card reading "these ipads are running on portable batteries designed to be powered by modular solar panels. due to the construction underway, the panels are not currently in operation, and the batteries are charged by grid power.">
      <p>
        wall card, exhibition view.
      </p>
    </div>
  

<p>
  My feeling in taking in this exhibition is that it’s challenging to address the catastrophic scale of plastic production and disposal head on, not for a lack of things to say and do, but because it’s difficult to square my passive engagement as a gallery viewer with the anxiety and rage the subject produces. I don’t feel like I left the gallery having necessarily gained or learned all that much, beyond an increased sense of the destructive and violent hubris of neo-colonial corporate extractivism, mass consumerism, and corresponding radical social inequities and environmental destruction. Nonetheless, I think <em>Plastic Heart</em> is valuable as a model of applicable strategies to limit the ecological footprint of artistic production and exhibition practices, while recognizing that the most practical measures still don’t approach the scale of collective transformation required to simply change our dependance on plastics. It models these strategies in ways that feel more creative than prescriptive, building them into the curatorial process itself; however, I also left feeling like I had thought more about the framework of the exhibition than engaging with the work. At times it felt like the exhibition could undermine itself, as if it were pointing to something radically different from a gallery exhibition, but from the vantage of a gallery exhibition. 
  <p>

  <p class="name">edward bacal. november 2, 2021</p>
        
  <a href="#top"><button class="top">RETURN TO TOP</button></a>
</article>`,

  "tvtv": `
  <div class="column">
  <div class="colImg"><img src="_blog/assets/004-cover.jpg" alt="Alternate Convention, exhibition view"></div>
  <div class="title">
    <h3 class="uc">Alternative Convention: Top Value Television’s Four More Years</h3>
    <h3 class="lc">Art Museum at University of Toronto</h3>
    <h3 class="lc">September 7, 2021–October 9, 2021</h3>
  </div>
</div>

<article id="top">
<p>
<em>Alternative Convention</em> exhibits a selection of videos and related documents by countercultural video group Top Value Television. Centred around the quasi-documentary <em>Four More Years</em>, the exhibition records the intersections of media, technology, and politics in the early-70s.
</p>

<p>
Earlier this fall at U of T Art Museum, one could find a pair of vintage TV sets filling the room with televisual cacophony. Footage of the 1972 Republican National Convention, punctuated by ordinary commercials and, less ordinarily, interviews with antiwar protestors, volleyed between the opposite-facing TVs. As official network news, commercial advertising, and point-and-shoot video competed for attention, they illustrated the points of fracture underlying the 1970s American media landscape. This mix of content comprises <em>Four More Years</em> by Top Value Television (TVTV), a loose collective of young filmmakers taking creative advantage of video technology that had become newly accessible to non-professionals. A work of tactical filmmaking<sup>*<span class="footnote">I’m using tactical in place of “guerrilla", an overstated metaphor that, to me, is a trite bastardization of its referent.</span></sup>, it presents an alternate to official coverage of the convention, aiming away from the main event to focus on the wider spectacle, including elements of the media machine within it and of protesters on its outer fringes. In short, <em>Four More Years</em> is a kind of sociological portrait of the American political establishment in the Vietnam Era, where power, capital, and war coalesce in dominant popular media. At the same time, it is also a document of creative opposition to conservative media hegemony, providing an object lesson on how power and resistance cycle through the evolution of information technology.
</p>

<div class="imgR">
<img src="_blog/assets/004-still.jpg" alt="Four More Years still">
<p>
  TVTV <em>Four More Years</em> still, 1972. Courtesy Electronic Arts Intermix.
</p>
</div>

<p>
In addition to <em>Four More Years</em>, the gallery features reproductions of TVTV’s <em>Four More Years</em> scrapbook, an eclectic collage of newspaper clippings overlain with scattered notes and photos. These combine vaguely Rauschenberg collage aesthetic with a manic survey of pop culture and political imagery, which accents TVTV's cheeky aesthetic and attitude. Given its slapdash style, the notebooks and videos signal an emphasis on non-professional and unpolished creativity, in contradistinction to the kinds of high-end production reserved for corporate media. A core aspect of TVTV's work, evidently, is this impulse to explode the solidified aesthetics of hegemonic media to create something different from the rubble. Meanwhile, on the other side of the gallery, a range of additional video and print documents flesh out the wider story around TVTV's work. These items—more serious than slapdash–include films TVTV members would go on to make, along with pieces from adjacent groups, such as the Radical Software manual, a kind of high-tech cousin of the Whole Earth Catalog. These items situate TVTV within a wider world of technologically savvy 70s counterculture groups interested in exploring the emerging aesthetics and social functions of video. 
</p>

<p>
My sense is that these pieces comprise an exhibition of artifacts from a time that has recently become “old” in new ways. The exhibition feels very much like a time capsule, capturing the styles, conflicts, and technologies of the mid-70s, along with the new possibilities for creative production TVTV was exploring. As much as this exhibition is about the practical novelties of the Portapak camera and the visual rhetoric of broadcasting in the McLuhan age, it portrays a horizontally-organized collective working against dominant institutions. This was a time when the dematerialization of the art object and the exploration of non-traditional media coincided with new methods of production, eschewing authorial individuality in favour of collectivity and collaboration. Many of these groups have been subsumed back into art history (for instance, I think of recent interest in Food, the restaurant/gallery/studio associated with Gordon Matta-Clark), so it makes sense to see this exhibition today, within a gallery setting. The exhibition feels timely, then, in that the work outlines cultural tendencies that run through the present, but we can see more clearly with the benefit of historical oversight. 
</p>

<div class="img">
<img src="_blog/assets/004-journal.jpg" alt="Four More Years Scrapbook">
<p>
  TVTV <em>Four More Years</em> scrapbook, 1972. Courtesy Berkeley Art Museum Pacific Film Archive.
</p>
</div>

<div class="imgL">
<img src="_blog/assets/004-radicalsoftware.jpeg" alt="Cover of Radical Software">
<p>
  Cover of Radical Software.
</p>
</div>

<p>
In the last ten years, production and dissemination of video has become only more streamlined, and video’s role as an politically and ideologically active medium is much more imbricated. I visited the gallery shortly in mid-September, just after the twentieth anniversary of the September 11th attacks and the withdrawal of US troops in Afghanistan. It’s hard to not to view these documents in the wake of this twenty-year span, which began with the hyper-televised representation of the twin towers and the invasions of Iraq and Afghanistan. Within twenty years, network news would cede its hegemony to digital media while electoral politics would become only more insidious, exploiting the fault lines of social media and smart technologies. Today, TV coverage of the 1975 RNC looks relatively quaint, while 2010s talk about the ostensible "democratization" of media looks increasingly naive. The clarity of historical distance shows how the cycle of resistance and recuperation that comes with new media forms are only accelerating, and the distinctions between power and subjects is increasingly diffuse. In my own experience of learning more about digital content strategy and web media, I feel like there's shrinking room for critical engagement; instead, there is simply better ways of creating an illusion of agency from the top down. I personally feel more trapped than ever, knowing that whatever visual content I may produce and share, even if explicitly critical, will most like vanish into an oversaturated mediasphere run on the commodification of data and curated selfhood. From this trap, it's easy to be nostalgic for the milieu of TVTV, when there was more room for critical engagement through collaborative production of visual media. Hopefully that nostalgia might motivate contemporary energy for critical, creative production strategies.
</p>
  
<p class="name">edward bacal. november 17, 2021</p>
      
<a href="#top"><button class="top">RETURN TO TOP</button></a>
</article>
`,

  };