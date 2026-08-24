window.ACT_DATA = window.ACT_DATA || {};

window.ACT_DATA.test1_english = {
  id: "test1_english",
  name: "English",
  timeMinutes: 35,
  units: [
    {
      title: "Passage I — The Cartographer of Small Places",
      html: "<p>When I was nine, my grandfather handed me a drafting pen and a roll of butcher paper and told me to map the block where we lived. The block was <u data-q='1'>ordinary, mapping</u> it turned out to be surprisingly hard.</p><p>I started at the curb. Every driveway had <u data-q='2'>its own individual</u> width, and I measured each one by pacing heel to toe. My grandfather checked my work from his porch chair, where a stack of old road atlases <u data-q='3'>was</u> always within reach. He believed that a map was a promise: it told a stranger what to expect.</p><p>By the second week the drawing filled the paper. <u data-q='4'>Its</u> corners curled from the damp, and I taped them flat. My grandfather <u data-q='5'>teaches</u> me to add a compass rose before I finished, so that anyone could orient the page. <u data-q='6'>For example</u>, the finished map was not accurate in the way a satellite image is accurate. It recorded what a nine-year-old noticed at eye level. <span class='qmark' data-q='8'></span></p><p><u data-q='7'>Folded into my pocket for years, I carried the map</u> until the creases wore through. My grandfather, <u data-q='9'>who never left our county</u> believed that a map was a kind of travel. He had memorized routes he would never drive, and he handed those routes to me one square of paper at a time.</p>",
      questions: [
        {
          n: 1,
          prompt: "",
          choices: ["NO CHANGE", "ordinary, but mapping", "ordinary mapping", "ordinary; but mapping"],
          answer: 1,
          topic: "Comma splices",
          explanation: "<p>A comma alone cannot join two independent clauses. 'The block was ordinary' and 'mapping it turned out to be surprisingly hard' can each stand alone, so the comma creates a splice.</p><p>Adding the coordinating conjunction 'but' fixes it and marks the contrast. The semicolon option would work only without a conjunction, and here the sentence needs 'but' to signal surprise.</p>"
        },
        {
          n: 2,
          prompt: "",
          choices: ["NO CHANGE", "its own uniquely individual", "its own", "its own personal individual"],
          answer: 2,
          topic: "Redundancy",
          explanation: "<p>'Own' and 'individual' say the same thing, so pairing them is redundant. The shortest option that keeps the meaning is best.</p><p>'Its own' is complete by itself; piling on 'personal' and 'individual' only repeats the idea.</p>"
        },
        {
          n: 3,
          prompt: "",
          choices: ["NO CHANGE", "were", "have been", "are"],
          answer: 0,
          topic: "Subject-verb agreement",
          explanation: "<p>The subject is the singular 'stack,' not the plural 'atlases' in the intervening phrase, so the singular 'was' is correct.</p><p>'Were' and 'are' are traps that agree with 'atlases,' but a prepositional phrase never controls the verb.</p>"
        },
        {
          n: 4,
          prompt: "",
          choices: ["NO CHANGE", "It's", "Its'", "Their"],
          answer: 0,
          topic: "Apostrophes",
          explanation: "<p>Possessive 'its' takes no apostrophe, and here it correctly shows the corners belonging to the drawing.</p><p>'It's' means 'it is,' 'Its'' is not a word, and 'Their' has no plural antecedent, so 'Its' is right.</p>"
        },
        {
          n: 5,
          prompt: "",
          choices: ["NO CHANGE", "teaching", "has taught", "taught"],
          answer: 3,
          topic: "Verb tense",
          explanation: "<p>The passage narrates a childhood memory in the past tense ('curled,' 'taped,' 'finished'), so the past-tense 'taught' keeps the sequence consistent.</p><p>The present-tense 'teaches' clashes with the surrounding past-tense verbs.</p>"
        },
        {
          n: 6,
          prompt: "",
          choices: ["NO CHANGE", "Still", "In addition", "Therefore"],
          answer: 1,
          topic: "Transitions",
          explanation: "<p>The sentence contrasts the map's limits with the effort just described, so a contrast word is needed. 'Still' signals that concession.</p><p>'For example' and 'In addition' promise more of the same, and 'Therefore' promises a result, none of which fits the reversal.</p>"
        },
        {
          n: 7,
          prompt: "",
          choices: ["NO CHANGE", "Folding into my pocket for years, the map", "I carried the map, folded into my pocket for years,", "Folded into my pocket for years, the creases in the map"],
          answer: 2,
          topic: "Dangling modifiers",
          explanation: "<p>'Folded into my pocket for years' must describe the map, not the writer, so the noun right after the phrase should be 'the map.' Putting 'I' there says the writer was folded into a pocket.</p><p>The correct version makes 'the map' the subject and tucks the modifier beside it; the other choices leave the phrase dangling or create a fragment.</p>"
        },
        {
          n: 8,
          prompt: "Which choice, if added here, most effectively reinforces the idea that the map reflected a child's particular point of view?",
          choices: ["The city later published an official survey of the same neighborhood.", "Satellite mapping would not become common for decades.", "My grandfather kept his atlases in alphabetical order by state.", "A rusted drainage grate mattered more to me than any street name did."],
          answer: 3,
          topic: "Purpose questions",
          explanation: "<p>The sentence must show the map recording what a child, not an adult surveyor, cared about. Valuing a drainage grate over a street name captures that eye-level, personal view.</p><p>The other options add outside facts about surveys, satellites, or the grandfather's habits, none of which show the writer's own childhood perspective.</p>"
        },
        {
          n: 9,
          prompt: "",
          choices: ["NO CHANGE", "who never left our county,", "whom never left our county", "who never left our county;"],
          answer: 1,
          topic: "Nonrestrictive clauses",
          explanation: "<p>The clause 'who never left our county' is nonrestrictive extra information, so it needs a comma on both sides; the opening comma is already there, so a closing comma is required.</p><p>'Whom' is the wrong case for a subject, and a semicolon cannot close an interrupter mid-sentence.</p>"
        },
        {
          n: 10,
          prompt: "Suppose the writer's goal had been to write an essay showing how a childhood project shaped the way the writer sees the world. Would this essay accomplish that goal?",
          choices: ["No, because it focuses only on the technical steps of drafting a map.", "No, because it never explains why the grandfather assigned the task.", "Yes, because it shows how mapping taught the writer to notice and value small, personal details.", "Yes, because it gives measurements a reader could use to redraw the block."],
          answer: 2,
          topic: "Essay goal questions",
          explanation: "<p>The essay traces how the mapping project trained the writer to see ordinary places closely, which matches the stated goal.</p><p>The 'No' answers misdescribe the essay, and the other 'Yes' answer praises precise measurements the essay never actually provides.</p>"
        }
      ]
    },
    {
      title: "Passage II — How Fireflies Keep Time",
      html: "<p>On humid summer nights in parts of the American South, thousands of fireflies blink in near-perfect unison. A single firefly's lantern requires three <u data-q='11'>things,</u> oxygen, a pigment called luciferin, and an enzyme that triggers the glow. The timing of the flashes, along with the pauses between them, <u data-q='12'>is</u> controlled by an internal clock.</p><p>Researchers study the insects by filming their displays, <u data-q='13'>to record</u> the intervals, and mapping where each flash begins. Each male flashes <u data-q='14'>at regular intervals</u> before going dark again. The enzyme, <u data-q='15'>which is called luciferase</u> speeds up the reaction that produces light. The flashes repeat <u data-q='16'>again and again in a repeating cycle</u> for hours after dusk.</p><p>A firefly controls the oxygen to <u data-q='17'>their</u> lantern with tiny tubes, opening and closing them like valves. Scientists once doubted that the synchrony was real. <u data-q='18'>However</u>, high-speed cameras have now captured it frame by frame. <u data-q='19'>Blinking together across an entire hillside. The swarm looks</u> like a single breathing organism. <span class='qmark' data-q='20'></span></p>",
      questions: [
        {
          n: 11,
          prompt: "",
          choices: ["NO CHANGE", "things;", "things.", "things:"],
          answer: 3,
          topic: "Colons",
          explanation: "<p>The words before the punctuation form a complete clause, and what follows is a list that explains 'three things,' so a colon is the correct introducer.</p><p>A comma blurs the boundary, a semicolon must join two clauses, and a period would strand the list as a fragment.</p>"
        },
        {
          n: 12,
          prompt: "",
          choices: ["NO CHANGE", "are", "are being", "have been"],
          answer: 0,
          topic: "Subject-verb agreement",
          explanation: "<p>The subject is the singular 'timing'; the phrase 'along with the pauses' is not part of the subject and does not make it plural, so 'is' is correct.</p><p>'Are' is a trap that agrees with the nearby 'pauses,' but 'along with' never creates a compound subject.</p>"
        },
        {
          n: 13,
          prompt: "",
          choices: ["NO CHANGE", "recording", "record", "and to record"],
          answer: 1,
          topic: "Parallelism",
          explanation: "<p>The three items in the list must share the same form: 'filming,' 'recording,' and 'mapping.' Switching to 'to record' breaks the parallel structure.</p><p>'Record' and 'and to record' also fail to match the -ing pattern set by the other two verbs.</p>"
        },
        {
          n: 14,
          prompt: "Which choice most specifically conveys the timing of the flashes?",
          choices: ["at regular intervals", "in a striking way", "about once each second", "from time to time"],
          answer: 2,
          topic: "Word choice",
          explanation: "<p>The question asks for specific timing, and 'about once each second' gives a concrete rate a reader can picture.</p><p>'At regular intervals' and 'from time to time' are vague, and 'in a striking way' describes impression, not timing.</p>"
        },
        {
          n: 15,
          prompt: "",
          choices: ["NO CHANGE", "that is called luciferase", "which is called luciferase;", "which is called luciferase,"],
          answer: 3,
          topic: "Nonrestrictive clauses",
          explanation: "<p>The clause is nonrestrictive and already has an opening comma after 'enzyme,' so it needs a closing comma before the main verb 'speeds.'</p><p>Dropping to 'that' would signal a restrictive clause with no commas, and a semicolon cannot close an interrupter.</p>"
        },
        {
          n: 16,
          prompt: "",
          choices: ["NO CHANGE", "again and again", "in a cycle that repeats over and over", "again and again repeatedly"],
          answer: 1,
          topic: "Redundancy",
          explanation: "<p>'Repeat' already contains the idea of recurrence, so 'in a repeating cycle' doubles it. The concise 'again and again' carries the meaning without repetition.</p><p>The other options restate 'repeat' with 'cycle,' 'over and over,' or 'repeatedly,' compounding the redundancy.</p>"
        },
        {
          n: 17,
          prompt: "",
          choices: ["NO CHANGE", "it's", "its", "there"],
          answer: 2,
          topic: "Pronoun agreement",
          explanation: "<p>The antecedent 'a firefly' is singular, so the possessive pronoun must be the singular 'its.'</p><p>'Their' is plural, 'it's' means 'it is,' and 'there' is not possessive at all.</p>"
        },
        {
          n: 18,
          prompt: "",
          choices: ["NO CHANGE", "Similarly", "In addition", "Therefore"],
          answer: 0,
          topic: "Transitions",
          explanation: "<p>The sentence reverses the earlier doubt with new evidence, so a contrast word is required; 'However' provides it.</p><p>'Similarly' and 'In addition' signal more of the same, and 'Therefore' signals a result, none of which matches the shift from doubt to proof.</p>"
        },
        {
          n: 19,
          prompt: "",
          choices: ["NO CHANGE", "hillside, the swarm looking", "hillside; the swarm looks", "hillside, the swarm looks"],
          answer: 3,
          topic: "Fragments",
          explanation: "<p>'Blinking together across an entire hillside' is a modifying phrase, not a sentence, so ending it with a period leaves a fragment. Attaching it to the main clause with a comma repairs it.</p><p>'The swarm looking' removes the main verb, and a semicolon must separate two full clauses, which the participial phrase is not.</p>"
        },
        {
          n: 20,
          prompt: "The writer wants to end the essay by connecting the fireflies' behavior to a broader scientific idea. Which choice best accomplishes this?",
          choices: ["Fireflies live on every continent except Antarctica.", "Many tourists travel to see the display each June.", "The synchronized flash shows how even simple creatures can produce astonishing collective order.", "The forest was silent except for the distant sound of a river."],
          answer: 2,
          topic: "Purpose questions",
          explanation: "<p>A closing that ties the fireflies to a larger lesson about collective order fulfills the stated goal.</p><p>The facts about range, tourism, and forest sounds are details that do not draw the broader scientific conclusion the prompt asks for.</p>"
        }
      ]
    },
    {
      title: "Passage III — The Inventor Who Sold Safety",
      html: "<p>Garrett Morgan was born in Kentucky in 1877, the son of formerly enslaved parents. As a young man he moved north to Cleveland, Ohio, where he <u data-q='21'>finds</u> work repairing sewing machines. Morgan had little formal schooling, yet the improvements he made to everyday machines had a real <u data-q='22'>affect</u> on the safety of the people who used them.</p><p>In 1914 he patented a breathing device he called a safety hood, <u data-q='23'>who</u> protected firefighters from smoke. Two years later the hood was tested during a disaster. Trapped workers were stranded in a tunnel beneath Lake Erie after an explosion, and Morgan raced to help. He earned a gold medal for the invention, <u data-q='24'>it saved lives</u> that day. Working through the night, <u data-q='25'>the trapped workers were reached by Morgan and his brother</u>.</p><p>Morgan also developed an early traffic signal <u data-q='26'>that had the ability to stop</u> cars in more than one direction. He sold the rights to the design <u data-q='27'>to</u> a large company, and versions of his idea spread to intersections around the world. <span class='qmark' data-q='28'></span> Cleveland winters can be severe, with heavy snow blowing off the lake. Morgan filled several <u data-q='29'>roles in Cleveland,</u> tailor, mechanic, and newspaper publisher, but he is remembered most for making dangerous work a little less deadly.</p>",
      questions: [
        {
          n: 21,
          prompt: "",
          choices: ["NO CHANGE", "found", "has found", "was finding"],
          answer: 1,
          topic: "Verb tense",
          explanation: "<p>The passage recounts Morgan's life in the past tense ('was born,' 'moved'), so the past-tense 'found' keeps the sequence consistent.</p><p>The present-tense 'finds' clashes with the surrounding narration, and 'has found' and 'was finding' distort the simple completed action.</p>"
        },
        {
          n: 22,
          prompt: "",
          choices: ["NO CHANGE", "affects", "effect", "effects"],
          answer: 2,
          topic: "Commonly confused words",
          explanation: "<p>The sentence needs the noun 'effect,' meaning a result, after 'a real.' 'Affect' is normally a verb, so it cannot follow the article here.</p><p>'Affects' and 'effects' are plural or verb forms that do not fit the singular noun slot 'a real ___ on.'</p>"
        },
        {
          n: 23,
          prompt: "",
          choices: ["NO CHANGE", "that", "whom", "which"],
          answer: 3,
          topic: "Pronoun case",
          explanation: "<p>The relative pronoun refers to the 'safety hood,' a thing, not a person, so 'who' and 'whom' are wrong; and because a comma precedes it, the nonrestrictive 'which' is correct.</p><p>'That' would introduce a restrictive clause with no comma, which conflicts with the comma already in place.</p>"
        },
        {
          n: 24,
          prompt: "",
          choices: ["NO CHANGE", "invention. It saved", "invention, saving", "invention it saved"],
          answer: 1,
          topic: "Comma splices",
          explanation: "<p>'He earned a gold medal for the invention' and 'it saved lives that day' are both independent clauses, so joining them with only a comma is a splice. A period cleanly separates them.</p><p>'Invention, saving' changes the meaning by making the medal, not the hood, save lives, and 'invention it saved' fuses the clauses with no punctuation.</p>"
        },
        {
          n: 25,
          prompt: "",
          choices: ["NO CHANGE", "Morgan and his brother, reaching the trapped workers,", "Morgan and his brother reached the trapped workers", "the reaching of the trapped workers was done by Morgan"],
          answer: 2,
          topic: "Misplaced modifiers",
          explanation: "<p>'Working through the night' must describe the people doing the work, so the noun after it should be 'Morgan and his brother,' not 'the trapped workers.' The original says the workers were working.</p><p>The correct version makes Morgan and his brother the subject in the active voice; the other choices keep the dangling modifier or bury the actors in a wordy phrase.</p>"
        },
        {
          n: 26,
          prompt: "",
          choices: ["NO CHANGE", "that could stop", "with an ability for stopping", "that had an ability of stopping"],
          answer: 1,
          topic: "Concision",
          explanation: "<p>'That had the ability to stop' is a wordy way of saying 'that could stop.' The concise verb 'could' says it all.</p><p>The other options keep the bulky 'ability' phrasing and add awkward prepositions.</p>"
        },
        {
          n: 27,
          prompt: "",
          choices: ["NO CHANGE", "with", "for", "by"],
          answer: 0,
          topic: "Idioms & prepositions",
          explanation: "<p>The idiom is 'sold the rights to a company,' where 'to' marks the buyer. 'To' is already in place, so no change is needed.</p><p>'With,' 'for,' and 'by' all break the standard idiom for selling something to someone.</p>"
        },
        {
          n: 28,
          prompt: "The writer is considering deleting the sentence that follows (about Cleveland winters). Should it be kept or deleted?",
          choices: ["Kept, because it explains why Morgan invented the traffic signal.", "Kept, because it adds vivid detail about Morgan's daily life.", "Deleted, because it interrupts the discussion of Morgan's inventions with an unrelated detail.", "Deleted, because the essay has already described Cleveland's weather."],
          answer: 2,
          topic: "Relevance of detail",
          explanation: "<p>The paragraph is about Morgan's traffic signal and its spread, so a sentence about snow off the lake is off topic and should go.</p><p>It does not explain the signal, the essay has not mentioned the weather before, and 'vivid detail' is not a reason to keep an irrelevant sentence.</p>"
        },
        {
          n: 29,
          prompt: "",
          choices: ["NO CHANGE", "roles in Cleveland;", "roles, in Cleveland", "roles in Cleveland:"],
          answer: 3,
          topic: "Colons",
          explanation: "<p>The words before the punctuation form a complete clause, and the list of jobs that follows explains 'several roles,' so a colon is correct.</p><p>A comma is too weak to introduce the list, a semicolon must link two clauses, and a comma after 'roles' wrongly splits the phrase.</p>"
        },
        {
          n: 30,
          prompt: "Suppose the writer had intended to show that Morgan's inventions were driven by a concern for public safety. Would this essay fulfill that intention?",
          choices: ["Yes, because the essay lists the exact dates of all of Morgan's patents.", "Yes, because both the safety hood and the traffic signal were designed to protect people from harm.", "No, because the essay focuses mainly on Morgan's childhood in Kentucky.", "No, because the essay argues that Morgan cared more about profit than safety."],
          answer: 1,
          topic: "Essay goal questions",
          explanation: "<p>The essay presents two inventions, both aimed at protecting people, which directly supports the safety theme.</p><p>The essay does not dwell on his childhood or claim he valued profit over safety, and merely listing dates would not prove the point about motive.</p>"
        }
      ]
    },
    {
      title: "Passage IV — The Return of the Hand-Painted Sign",
      html: "<p>For most of the twentieth century, storefront lettering was painted by hand. Then vinyl and computers took over, and the trade nearly vanished. Lately, though, hand-painted signs <u data-q='33'>has</u> returned to city streets. A hand-painted sign <u data-q='31'>which glows under a fresh coat of enamel</u> can outlast a printed banner by years.</p><p>Today <u data-q='32'>fewer</u> shops can afford a full-time letterer, so many hire freelancers for a single project. Vinyl is faster to produce. <u data-q='34'>Even so</u>, many customers now prefer the warmth of a brushstroke to the flat gloss of a decal. A skilled painter can finish a large window in <u data-q='35'>a certain amount of time</u>.</p><p>The letters look <u data-q='36'>simple they require</u> years of practice to draw freehand. Several <u data-q='37'>painters'</u> guilds have reopened to train apprentices. An apprentice must learn to move the brush <u data-q='38'>confident and smooth</u>, keeping the line steady across glass. The revival is <u data-q='39'>growing and expanding in size</u> as young artists discover the craft. <span class='qmark' data-q='40'></span></p>",
      questions: [
        {
          n: 31,
          prompt: "",
          choices: ["NO CHANGE", "which glows under a fresh coat of enamel,", "- which glows under a fresh coat of enamel -", "which glows under a fresh coat of enamel -"],
          answer: 2,
          topic: "Dashes",
          explanation: "<p>The clause is a nonrestrictive interrupter and must be set off on both sides by matching punctuation. A pair of dashes closes it correctly.</p><p>The no-punctuation original runs the interrupter into the sentence, and the single-comma and single-dash options fail to close the pair.</p>"
        },
        {
          n: 32,
          prompt: "",
          choices: ["NO CHANGE", "less", "lesser", "little"],
          answer: 0,
          topic: "Commonly confused words",
          explanation: "<p>'Shops' are countable, so the correct word is 'fewer,' which is already in place; no change is needed.</p><p>'Less,' 'lesser,' and 'little' are used for uncountable quantities and cannot modify a count noun like 'shops.'</p>"
        },
        {
          n: 33,
          prompt: "",
          choices: ["NO CHANGE", "was", "is", "have"],
          answer: 3,
          topic: "Subject-verb agreement",
          explanation: "<p>The subject 'signs' is plural, so it takes the plural verb 'have returned.'</p><p>'Has,' 'was,' and 'is' are all singular and disagree with the plural subject.</p>"
        },
        {
          n: 34,
          prompt: "",
          choices: ["NO CHANGE", "Likewise", "For instance", "As a result"],
          answer: 0,
          topic: "Transitions",
          explanation: "<p>Vinyl being faster would predict that customers choose it, but they choose the brushstroke instead, so a contrast word is needed; 'Even so' is already correct.</p><p>'Likewise' and 'For instance' add similarity or examples, and 'As a result' claims a cause-effect that reverses the actual logic.</p>"
        },
        {
          n: 35,
          prompt: "Which choice most specifically describes how quickly a skilled painter works?",
          choices: ["a certain amount of time", "a single afternoon", "some time", "a while"],
          answer: 1,
          topic: "Word choice",
          explanation: "<p>The question calls for a concrete measure of speed, and 'a single afternoon' gives one.</p><p>'A certain amount of time,' 'some time,' and 'a while' are all vague and tell the reader nothing about the pace.</p>"
        },
        {
          n: 36,
          prompt: "",
          choices: ["NO CHANGE", "simple, they require", "simple, but they require", "simple; but they require"],
          answer: 2,
          topic: "Run-ons",
          explanation: "<p>'The letters look simple' and 'they require years of practice' are both independent clauses fused with no punctuation. A comma plus 'but' both separates them and signals the contrast.</p><p>A comma alone creates a splice, and a semicolon should not be followed by the coordinating conjunction 'but.'</p>"
        },
        {
          n: 37,
          prompt: "",
          choices: ["NO CHANGE", "painter's", "painters", "painters's"],
          answer: 0,
          topic: "Apostrophes",
          explanation: "<p>Several guilds belong to painters, so the plural possessive 'painters'' is correct and already in place.</p><p>'Painter's' is singular possessive, 'painters' lacks the needed possessive, and 'painters's' is not standard for a regular plural.</p>"
        },
        {
          n: 38,
          prompt: "",
          choices: ["NO CHANGE", "confident and smoothly", "confidently and smooth", "confidently and smoothly"],
          answer: 3,
          topic: "Adjective vs adverb",
          explanation: "<p>Both words modify the verb 'move,' so both must be adverbs: 'confidently and smoothly.'</p><p>The other options mix an adjective with an adverb, which cannot describe how the brush moves.</p>"
        },
        {
          n: 39,
          prompt: "",
          choices: ["NO CHANGE", "growing", "growing and getting larger", "expanding and growing in size"],
          answer: 1,
          topic: "Redundancy",
          explanation: "<p>'Growing' already means increasing, so 'expanding in size' repeats it. The single word 'growing' is enough.</p><p>The other options pair 'growing' with 'expanding,' 'getting larger,' or 'in size,' all of which restate the same idea.</p>"
        },
        {
          n: 40,
          prompt: "The writer wants to end the essay by suggesting that the hand-painted sign has a future, not just a past. Which choice best accomplishes this goal?",
          choices: ["The first painted signs appeared thousands of years ago.", "Vinyl remains cheaper for very large jobs.", "Today a new generation of letterers is filling sketchbooks and storefronts alike.", "Some old painters retired without training anyone."],
          answer: 2,
          topic: "Purpose questions",
          explanation: "<p>A closing about a new generation carrying the craft forward points to the future, matching the goal.</p><p>The origins of signage look backward, the vinyl fact undercuts the revival, and the retirement detail suggests decline rather than a future.</p>"
        }
      ]
    },
    {
      title: "Passage V — How to Run a Repair Cafe",
      html: "<p><span class='pnum'>1</span> A repair cafe is a free community event where volunteers help neighbors mend broken belongings instead of tossing them out. The volunteers who staff the <u data-q='41'>tables, arrive</u> an hour early to set up the room.</p><p><span class='pnum'>2</span> When a visitor signs in, a greeter writes <u data-q='42'>their</u> name on a waiting list. A volunteer then examines the item, <u data-q='43'>tests it, and is trying</u> to name the problem. Most breakdowns come from one of a few <u data-q='45'>causes:</u> a loose wire, a worn belt, or a single missing screw.</p><p><span class='pnum'>3</span> Last spring our library <u data-q='44'>hosted</u> its first repair cafe, and forty people came through the door. Some items could not be saved. <u data-q='46'>Therefore</u>, volunteers still showed each owner what had gone wrong, so the visit was never wasted.</p><p><span class='pnum'>4</span> The cafe works best when the space is <u data-q='47'>arranged in an organized and orderly arrangement</u>. <span class='qmark' data-q='48'></span> The idea is <u data-q='49'>old; however,</u> the format feels new to everyone who tries it.</p>",
      questions: [
        {
          n: 41,
          prompt: "",
          choices: ["NO CHANGE", "tables; arrive", "tables, they arrive", "tables arrive"],
          answer: 3,
          topic: "Unnecessary commas",
          explanation: "<p>Nothing should separate the subject 'volunteers ... who staff the tables' from its verb 'arrive,' so the comma is intrusive and should be removed.</p><p>A semicolon needs two clauses, and adding 'they' creates a new subject that the sentence does not need.</p>"
        },
        {
          n: 42,
          prompt: "",
          choices: ["NO CHANGE", "his or her", "they're", "its"],
          answer: 1,
          topic: "Pronoun agreement",
          explanation: "<p>The antecedent 'a visitor' is singular, so the pronoun must be singular: 'his or her.'</p><p>'Their' is plural, 'they're' means 'they are,' and 'its' would treat a person as a thing.</p>"
        },
        {
          n: 43,
          prompt: "",
          choices: ["NO CHANGE", "testing it, and trying", "tests it, and tries", "tests it, trying"],
          answer: 2,
          topic: "Parallelism",
          explanation: "<p>The verbs describing the volunteer must match: 'examines,' 'tests,' and 'tries.' The shift to 'is trying' breaks the parallel present-tense list.</p><p>'Testing ... trying' abandons the finite verbs, and 'tests it, trying' drops the needed conjunction and parallel form.</p>"
        },
        {
          n: 44,
          prompt: "",
          choices: ["NO CHANGE", "hosts", "has hosted", "was hosting"],
          answer: 0,
          topic: "Verb tense",
          explanation: "<p>'Last spring' and the paired verb 'came' set the sentence in the simple past, so 'hosted' is correct and needs no change.</p><p>'Hosts' is present, and 'has hosted' and 'was hosting' do not match the completed, dated action.</p>"
        },
        {
          n: 45,
          prompt: "",
          choices: ["NO CHANGE", "causes,", "causes;", "causes."],
          answer: 0,
          topic: "Colons",
          explanation: "<p>A complete clause precedes the punctuation, and a list explaining 'a few causes' follows, so the colon already in place is correct.</p><p>A comma is too weak, a semicolon must join two clauses, and a period would break the list off as a fragment.</p>"
        },
        {
          n: 46,
          prompt: "",
          choices: ["NO CHANGE", "As a result", "In addition", "Even so"],
          answer: 3,
          topic: "Transitions",
          explanation: "<p>The volunteers help even though the item could not be fixed, so a contrast word is needed; 'Even so' fits.</p><p>'Therefore' and 'As a result' claim the failed repair caused the explanation, and 'In addition' merely adds, missing the concession.</p>"
        },
        {
          n: 47,
          prompt: "",
          choices: ["NO CHANGE", "organized", "orderly and organized in its arrangement", "arranged in an orderly arrangement"],
          answer: 1,
          topic: "Concision",
          explanation: "<p>'Arranged,' 'organized,' 'orderly,' and 'arrangement' all repeat the same idea. The single word 'organized' says it cleanly.</p><p>The other options keep two or more of the overlapping words and stay wordy.</p>"
        },
        {
          n: 48,
          prompt: "Which choice, if added here, best supports the paragraph's focus on arranging the space?",
          choices: ["Some volunteers have repaired radios for decades.", "Coffee and cookies usually sit near the entrance.", "Tables should be spaced so visitors can watch a repair without crowding the volunteer.", "The library closes early on Sundays."],
          answer: 2,
          topic: "Relevance of detail",
          explanation: "<p>The paragraph is about setting up the room, so advice on spacing the tables directly supports its focus.</p><p>The volunteers' experience, the refreshments, and the library's hours are unrelated to how the space is arranged.</p>"
        },
        {
          n: 49,
          prompt: "",
          choices: ["NO CHANGE", "old, however,", "old however,", "old: however,"],
          answer: 0,
          topic: "Semicolons",
          explanation: "<p>'The idea is old' and 'the format feels new' are independent clauses joined by the conjunctive adverb 'however,' which requires a semicolon before it; the original is correct.</p><p>A comma before 'however' creates a splice, no punctuation makes a run-on, and a colon does not fit two balanced clauses.</p>"
        },
        {
          n: 50,
          prompt: "For the sake of the logical flow of this how-to essay, Paragraph 3 (the account of last spring's event) should be placed:",
          choices: ["where it is now.", "before Paragraph 1.", "before Paragraph 2.", "after Paragraph 4."],
          answer: 3,
          topic: "Paragraph order",
          explanation: "<p>Paragraphs 1, 2, and 4 explain how to set up and run the cafe, while Paragraph 3 is a finished-example success story that works best as the closing illustration.</p><p>Moving it before the how-to paragraphs would interrupt the instructions, so placing it after Paragraph 4 gives the essay a natural, example-driven ending.</p>"
        }
      ]
    }
  ]
};

window.ACT_DATA.test2_english = {
  id: "test2_english",
  name: "English",
  timeMinutes: 35,
  units: [
    {
      title: "Passage I — Learning to Listen at the Diner",
      html: "<p>The diner my grandmother ran sat on a corner two blocks from the highway. The building was <u data-q='1'>small, it fed</u> half the town before nine in the morning. She opened the grill at <u data-q='2'>6 a.m. in the morning</u>, long before the first customer arrived. A tray of chipped mugs <u data-q='3'>sits</u> by the register, ready for the regulars. <u data-q='4'>Its</u> steam fogged the window on cold days.</p><p>My grandmother <u data-q='5'>runs</u> the grill for thirty years before she taught me how to work the counter. I thought waiting tables would be dull. <u data-q='6'>In addition</u>, it taught me to read a room in seconds. Refilling coffee at dawn, <u data-q='7'>the regulars told me their news</u> between sips. <span class='qmark' data-q='8'></span></p><p>My grandmother, <u data-q='9'>who trusted almost no one</u> believed the counter was a kind of confessional. People said things there they would not say anywhere else, and I learned to hold those things carefully.</p>",
      questions: [
        {
          n: 1,
          prompt: "",
          choices: ["NO CHANGE", "small, but it fed", "small it fed", "small; but it fed"],
          answer: 1,
          topic: "Comma splices",
          explanation: "<p>'The building was small' and 'it fed half the town' are both independent clauses, so a comma alone creates a splice. Adding 'but' both joins them and marks the contrast in size.</p><p>'Small it fed' fuses the clauses, and a semicolon should not be paired with the conjunction 'but.'</p>"
        },
        {
          n: 2,
          prompt: "",
          choices: ["NO CHANGE", "6 a.m. sharp in the morning", "6 a.m.", "early morning at 6 a.m."],
          answer: 2,
          topic: "Redundancy",
          explanation: "<p>'A.m.' already means morning, so 'in the morning' repeats it. The concise '6 a.m.' says everything needed.</p><p>The other choices keep both 'a.m.' and 'morning,' repeating the same information.</p>"
        },
        {
          n: 3,
          prompt: "",
          choices: ["NO CHANGE", "sit", "are sitting", "have sat"],
          answer: 0,
          topic: "Subject-verb agreement",
          explanation: "<p>The subject is the singular 'tray,' not the plural 'mugs' in the phrase 'of chipped mugs,' so the singular 'sits' is correct.</p><p>'Sit' and 'are sitting' agree with 'mugs,' but the object of a preposition never controls the verb.</p>"
        },
        {
          n: 4,
          prompt: "",
          choices: ["NO CHANGE", "It's", "Its'", "Their"],
          answer: 0,
          topic: "Apostrophes",
          explanation: "<p>Possessive 'its' takes no apostrophe and correctly shows the steam belonging to the coffee, so no change is needed.</p><p>'It's' means 'it is,' 'Its'' is not a word, and 'Their' has no plural antecedent.</p>"
        },
        {
          n: 5,
          prompt: "",
          choices: ["NO CHANGE", "runs", "was running", "had run"],
          answer: 3,
          topic: "Verb tense",
          explanation: "<p>Her running the grill happened before she taught the writer, so the past perfect 'had run' correctly marks the earlier action.</p><p>The present-tense 'runs' clashes with the past narration, and 'was running' fails to show that the running preceded the teaching.</p>"
        },
        {
          n: 6,
          prompt: "",
          choices: ["NO CHANGE", "Instead", "Likewise", "For example"],
          answer: 1,
          topic: "Transitions",
          explanation: "<p>The writer expected dullness but got a lesson, so a contrast word is needed; 'Instead' captures the reversal.</p><p>'In addition' and 'Likewise' add similar ideas, and 'For example' promises an illustration, none of which fits the surprise.</p>"
        },
        {
          n: 7,
          prompt: "",
          choices: ["NO CHANGE", "their news was told to me by the regulars", "I heard the regulars share their news", "the news of the regulars was shared"],
          answer: 2,
          topic: "Dangling modifiers",
          explanation: "<p>'Refilling coffee at dawn' must describe the person doing the refilling, so the noun right after it should be 'I,' not 'the regulars.' The original says the regulars were refilling coffee.</p><p>The passive rewrites keep the modifier dangling; only the version beginning with 'I' fixes the logic.</p>"
        },
        {
          n: 8,
          prompt: "Which choice, if added here, best illustrates the specific way the writer learned to listen?",
          choices: ["The diner served pancakes and eggs all day long.", "My grandmother rarely raised her voice at anyone.", "The town had only one traffic light back then.", "I learned to hear the worry hiding under a customer's small talk about the weather."],
          answer: 3,
          topic: "Purpose questions",
          explanation: "<p>The paragraph is about learning to listen, so a concrete example of hearing unspoken worry fulfills that purpose.</p><p>The menu, the grandmother's manner, and the traffic light are unrelated details that do not show the listening skill.</p>"
        },
        {
          n: 9,
          prompt: "",
          choices: ["NO CHANGE", "who trusted almost no one,", "whom trusted almost no one", "who trusted almost no one;"],
          answer: 1,
          topic: "Nonrestrictive clauses",
          explanation: "<p>'Who trusted almost no one' is nonrestrictive and already has an opening comma, so it needs a closing comma before the verb 'believed.'</p><p>'Whom' is the wrong case for a subject, and a semicolon cannot close an interrupter mid-sentence.</p>"
        },
        {
          n: 10,
          prompt: "Suppose the writer's goal had been to show how an ordinary job taught an unexpected skill. Would this essay accomplish that goal?",
          choices: ["No, because it only lists the foods the diner served.", "No, because it never names the skill the writer gained.", "Yes, because it shows how serving customers taught the writer to listen closely.", "Yes, because it explains how to run a profitable diner."],
          answer: 2,
          topic: "Essay goal questions",
          explanation: "<p>The essay shows a routine counter job teaching the writer to listen, which is exactly the unexpected skill the goal describes.</p><p>The essay does name the skill and is not a menu or a business guide, so the other options misread it.</p>"
        }
      ]
    },
    {
      title: "Passage II — Why Bridges Are Built to Move",
      html: "<p>A long steel bridge looks perfectly still, yet it is always shifting by tiny amounts. A span this size must survive three <u data-q='11'>forces,</u> heat, wind, and the steady weight of traffic. The gap between the two roadway sections <u data-q='12'>is</u> bridged by a set of interlocking steel fingers called an expansion joint.</p><p>Engineers design these joints by measuring the steel, testing the load, and <u data-q='13'>to predict</u> its expansion. On a hot afternoon a steel span can grow <u data-q='14'>by a noticeable amount</u>. The expansion joint, <u data-q='15'>which sits between the spans</u> is easy for a driver to overlook. The joints let the bridge flex <u data-q='16'>back and forth in both directions</u> without cracking.</p><p>Each bridge adjusts <u data-q='17'>their</u> length as the temperature climbs and falls. Concrete and steel expand when heated. <u data-q='18'>Therefore</u>, engineers leave gaps so the material has somewhere to go. <u data-q='19'>Stretching across the river in a single leap. The bridge hides</u> its cleverest feature in plain sight. <span class='qmark' data-q='20'></span></p>",
      questions: [
        {
          n: 11,
          prompt: "",
          choices: ["NO CHANGE", "forces;", "forces.", "forces:"],
          answer: 3,
          topic: "Colons",
          explanation: "<p>A complete clause precedes the punctuation, and a list naming the three forces follows, so a colon is the correct introducer.</p><p>A comma is too weak, a semicolon must join two clauses, and a period would strand the list as a fragment.</p>"
        },
        {
          n: 12,
          prompt: "",
          choices: ["NO CHANGE", "are", "were", "have been"],
          answer: 0,
          topic: "Subject-verb agreement",
          explanation: "<p>The subject is the singular 'gap,' not the plural 'sections' in the intervening phrase, so 'is' is correct.</p><p>'Are' and 'were' agree with 'sections,' but the object of the preposition never controls the verb.</p>"
        },
        {
          n: 13,
          prompt: "",
          choices: ["NO CHANGE", "predicting", "predict", "and to predict"],
          answer: 1,
          topic: "Parallelism",
          explanation: "<p>The list must be parallel: 'measuring,' 'testing,' and 'predicting.' Switching to 'to predict' breaks the -ing pattern.</p><p>'Predict' and 'and to predict' also fail to match the form of the first two items.</p>"
        },
        {
          n: 14,
          prompt: "Which choice most specifically conveys how much the span grows?",
          choices: ["by a noticeable amount", "quite a bit", "by nearly a foot over its length", "somewhat"],
          answer: 2,
          topic: "Word choice",
          explanation: "<p>The question asks for a specific quantity, and 'by nearly a foot over its length' gives one the reader can picture.</p><p>'A noticeable amount,' 'quite a bit,' and 'somewhat' are all vague and give no measure.</p>"
        },
        {
          n: 15,
          prompt: "",
          choices: ["NO CHANGE", "that sits between the spans", "which sits between the spans;", "which sits between the spans,"],
          answer: 3,
          topic: "Nonrestrictive clauses",
          explanation: "<p>The clause is nonrestrictive and already has an opening comma after 'joint,' so it needs a closing comma before 'is.'</p><p>Dropping to 'that' would make it restrictive with no commas, and a semicolon cannot close an interrupter.</p>"
        },
        {
          n: 16,
          prompt: "",
          choices: ["NO CHANGE", "back and forth", "in two directions on both sides", "back and forth both ways"],
          answer: 1,
          topic: "Redundancy",
          explanation: "<p>'Back and forth' already means in both directions, so adding 'in both directions' repeats it. The short phrase is enough.</p><p>The other options restate the same motion with 'both sides,' 'two directions,' or 'both ways.'</p>"
        },
        {
          n: 17,
          prompt: "",
          choices: ["NO CHANGE", "it's", "its", "there"],
          answer: 2,
          topic: "Pronoun agreement",
          explanation: "<p>The antecedent 'each bridge' is singular, so the possessive must be the singular 'its.'</p><p>'Their' is plural, 'it's' means 'it is,' and 'there' is not possessive.</p>"
        },
        {
          n: 18,
          prompt: "",
          choices: ["NO CHANGE", "However", "In contrast", "Instead"],
          answer: 0,
          topic: "Transitions",
          explanation: "<p>The expansion of the material is the reason engineers leave gaps, a cause-and-effect link, so 'Therefore' is correct as written.</p><p>'However,' 'In contrast,' and 'Instead' all signal opposition, which contradicts the cause-effect relationship.</p>"
        },
        {
          n: 19,
          prompt: "",
          choices: ["NO CHANGE", "leap, the bridge hiding", "leap; the bridge hides", "leap, the bridge hides"],
          answer: 3,
          topic: "Fragments",
          explanation: "<p>'Stretching across the river in a single leap' is a modifying phrase, not a sentence, so ending it with a period leaves a fragment. A comma attaches it to the main clause.</p><p>'The bridge hiding' has no main verb, and a semicolon must separate two full clauses, which the phrase is not.</p>"
        },
        {
          n: 20,
          prompt: "The writer wants to end the essay by making a broader point about good engineering. Which choice best accomplishes this?",
          choices: ["Many northern rivers freeze solid in the winter.", "Tourists often stop to photograph the bridge at sunset.", "The best structures are built to bend a little so that they will not break.", "Steel was first mass-produced in the nineteenth century."],
          answer: 2,
          topic: "Purpose questions",
          explanation: "<p>A closing about structures bending so they will not break draws the broad engineering lesson the prompt requests.</p><p>The facts about ice, tourists, and steel history are details that do not state a principle of good design.</p>"
        }
      ]
    },
    {
      title: "Passage III — The Aviator Who Crossed an Ocean to Fly",
      html: "<p>Bessie Coleman grew up in Texas, one of thirteen children, and dreamed of flying long before any school would take her. In 1919 Coleman <u data-q='21'>applies</u> to flight schools across the United States, and every one turned her down. She was more determined <u data-q='22'>then</u> most of the people who doubted her. The instructor <u data-q='23'>who</u> she finally found taught in France.</p><p>American schools turned her <u data-q='24'>away, she sailed</u> to Paris to learn the trade. Earning her license in 1921, <u data-q='25'>the skies over two continents were soon opened to Coleman</u>. She performed daring stunts in air shows <u data-q='26'>that were exciting to watch and thrilling</u>. Coleman refused to perform <u data-q='27'>for</u> segregated audiences, and she said so plainly.</p><p><span class='qmark' data-q='28'></span> Paris is famous for its cafes and its museums. Coleman never opened her <u data-q='29'>school, her example</u> opened doors for the aviators who followed her.</p>",
      questions: [
        {
          n: 21,
          prompt: "",
          choices: ["NO CHANGE", "applied", "has applied", "was applying"],
          answer: 1,
          topic: "Verb tense",
          explanation: "<p>The passage tells Coleman's story in the past tense ('grew up,' 'turned her down'), so the past-tense 'applied' keeps the sequence consistent.</p><p>The present-tense 'applies' clashes with the narration, and 'has applied' and 'was applying' distort the single completed action.</p>"
        },
        {
          n: 22,
          prompt: "",
          choices: ["NO CHANGE", "then,", "than", "then than"],
          answer: 2,
          topic: "Commonly confused words",
          explanation: "<p>The sentence makes a comparison ('more determined ___ most'), which calls for 'than.' 'Then' refers to time and cannot signal comparison.</p><p>'Then,' and 'then than' keep or double the wrong word.</p>"
        },
        {
          n: 23,
          prompt: "",
          choices: ["NO CHANGE", "which", "that,", "whom"],
          answer: 3,
          topic: "Pronoun case",
          explanation: "<p>The pronoun is the object of 'she finally found,' so the objective 'whom' is correct: she found whom.</p><p>'Who' is subjective, 'which' cannot refer to a person, and 'that,' adds a wrong comma while still using the wrong form.</p>"
        },
        {
          n: 24,
          prompt: "",
          choices: ["NO CHANGE", "away. She sailed", "away, sailing", "away she sailed"],
          answer: 1,
          topic: "Comma splices",
          explanation: "<p>'American schools turned her away' and 'she sailed to Paris' are both independent clauses, so a comma alone splices them. A period cleanly separates them.</p><p>'Away, sailing' changes who sails, and 'away she sailed' fuses the clauses with no punctuation.</p>"
        },
        {
          n: 25,
          prompt: "",
          choices: ["NO CHANGE", "two continents soon watched Coleman fly", "Coleman soon flew over two continents", "the flying was soon done by Coleman"],
          answer: 2,
          topic: "Misplaced modifiers",
          explanation: "<p>'Earning her license in 1921' must describe the person who earned it, so the noun after it should be 'Coleman,' not 'the skies.' The original says the skies earned a license.</p><p>Only the choice that makes 'Coleman' the subject fixes the modifier; the others keep it dangling.</p>"
        },
        {
          n: 26,
          prompt: "",
          choices: ["NO CHANGE", "that thrilled huge crowds", "that were exciting as well as thrilling to see", "that were thrilling and also exciting"],
          answer: 1,
          topic: "Concision",
          explanation: "<p>'Exciting to watch and thrilling' says one idea twice. 'That thrilled huge crowds' is tighter and even adds useful information.</p><p>The other options keep both 'exciting' and 'thrilling,' repeating the same reaction.</p>"
        },
        {
          n: 27,
          prompt: "",
          choices: ["NO CHANGE", "to", "at", "with"],
          answer: 0,
          topic: "Idioms & prepositions",
          explanation: "<p>The idiom is 'perform for an audience,' where 'for' marks the people watching, so no change is needed.</p><p>'Perform to,' 'perform at,' and 'perform with' an audience all break the standard idiom.</p>"
        },
        {
          n: 28,
          prompt: "The writer is considering deleting the sentence that follows (about Paris cafes and museums). Should it be kept or deleted?",
          choices: ["Kept, because it explains why Coleman chose France.", "Kept, because it adds cultural background to the essay.", "Deleted, because it drifts from Coleman's career into unrelated tourism.", "Deleted, because the essay has already described Paris."],
          answer: 2,
          topic: "Relevance of detail",
          explanation: "<p>The paragraph concerns Coleman's career and legacy, so a tourist note about cafes and museums is off topic and should be cut.</p><p>It does not explain her choice of France, the essay has not described Paris before, and 'background' is not a reason to keep an irrelevant sentence.</p>"
        },
        {
          n: 29,
          prompt: "",
          choices: ["NO CHANGE", "school her example", "school - her example,", "school; her example"],
          answer: 3,
          topic: "Semicolons",
          explanation: "<p>'Coleman never opened her school' and 'her example opened doors' are both independent clauses, so a comma alone splices them. A semicolon correctly links two closely related clauses.</p><p>Removing punctuation makes a run-on, and the dash-plus-comma option misplaces the break.</p>"
        },
        {
          n: 30,
          prompt: "Suppose the writer wanted to show that Coleman's influence outlasted her own flying career. Would this essay accomplish that goal?",
          choices: ["Yes, because it lists every air show she ever performed in.", "Yes, because it shows her example opening doors for the aviators who came after her.", "No, because it focuses only on her childhood in Texas.", "No, because it claims she never faced any obstacles."],
          answer: 1,
          topic: "Essay goal questions",
          explanation: "<p>The ending shows Coleman's example inspiring later aviators, which is exactly the lasting influence the goal describes.</p><p>The essay does not merely list shows, dwell only on her childhood, or deny her obstacles, so the other options misread it.</p>"
        }
      ]
    },
    {
      title: "Passage IV — The Slow Craft of Stop-Motion",
      html: "<p>Stop-motion animation is the oldest trick in film, and it is still one of the most demanding. A single second of film <u data-q='31'>which contains twenty-four frames</u> can take a full day to shoot. Stop-motion studios hire <u data-q='32'>fewer</u> animators than big computer studios do, but each one does painstaking work. A row of tiny clay figures <u data-q='33'>wait</u> on the lit set between takes.</p><p>Computer animation is faster and cheaper. <u data-q='34'>Even so</u>, some directors still choose clay for its handmade texture. Moving a puppet's arm <u data-q='35'>a small distance</u> for each frame, an animator slowly builds a gesture. The work is <u data-q='36'>slow the results feel</u> uniquely alive.</p><p>The <u data-q='37'>animators'</u> patience shows in every frame of the finished film. A puppet must be posed <u data-q='38'>careful and exact</u> so that the motion reads smoothly on screen. The final film is <u data-q='39'>a collaboration made together by many hands</u>, built one frame at a time. <span class='qmark' data-q='40'></span></p>",
      questions: [
        {
          n: 31,
          prompt: "",
          choices: ["NO CHANGE", "which contains twenty-four frames,", "- which contains twenty-four frames -", "which contains twenty-four frames -"],
          answer: 2,
          topic: "Dashes",
          explanation: "<p>The clause is a nonrestrictive interrupter and must be set off on both sides by matching punctuation; a pair of dashes closes it correctly.</p><p>The original leaves it unpunctuated, while the single-comma and single-dash options fail to complete the pair.</p>"
        },
        {
          n: 32,
          prompt: "",
          choices: ["NO CHANGE", "less", "lesser", "little"],
          answer: 0,
          topic: "Commonly confused words",
          explanation: "<p>'Animators' are countable, so 'fewer' is the correct word and is already in place; no change is needed.</p><p>'Less,' 'lesser,' and 'little' modify uncountable amounts, not a count noun like 'animators.'</p>"
        },
        {
          n: 33,
          prompt: "",
          choices: ["NO CHANGE", "are waiting", "have waited", "waits"],
          answer: 3,
          topic: "Subject-verb agreement",
          explanation: "<p>The subject is the singular 'row,' not the plural 'figures' in the phrase 'of tiny clay figures,' so the singular 'waits' is correct.</p><p>'Wait' and 'are waiting' agree with 'figures,' but the object of a preposition never controls the verb.</p>"
        },
        {
          n: 34,
          prompt: "",
          choices: ["NO CHANGE", "As a result", "Likewise", "For example"],
          answer: 0,
          topic: "Transitions",
          explanation: "<p>Computer animation being faster and cheaper would predict directors abandoning clay, but some still choose it, so a contrast word is needed; 'Even so' is correct.</p><p>'As a result' claims the opposite cause-effect, and 'Likewise' and 'For example' do not signal the concession.</p>"
        },
        {
          n: 35,
          prompt: "Which choice most specifically conveys how far the arm moves for each frame?",
          choices: ["a small distance", "only a few millimeters", "a bit", "some way"],
          answer: 1,
          topic: "Word choice",
          explanation: "<p>The question asks for a specific distance, and 'only a few millimeters' provides a concrete measure.</p><p>'A small distance,' 'a bit,' and 'some way' are all vague and give the reader no scale.</p>"
        },
        {
          n: 36,
          prompt: "",
          choices: ["NO CHANGE", "slow, the results feel", "slow, yet the results feel", "slow; yet the results feel"],
          answer: 2,
          topic: "Run-ons",
          explanation: "<p>'The work is slow' and 'the results feel uniquely alive' are both independent clauses fused with no punctuation. A comma plus 'yet' separates them and marks the contrast.</p><p>A comma alone makes a splice, and a semicolon should not be followed by the coordinating conjunction 'yet.'</p>"
        },
        {
          n: 37,
          prompt: "",
          choices: ["NO CHANGE", "animator's", "animators", "animators's"],
          answer: 0,
          topic: "Apostrophes",
          explanation: "<p>The patience belongs to more than one animator, so the plural possessive 'animators'' is correct and already in place.</p><p>'Animator's' is singular possessive, 'animators' lacks the possessive, and 'animators's' is not standard for a regular plural.</p>"
        },
        {
          n: 38,
          prompt: "",
          choices: ["NO CHANGE", "careful and exactly", "carefully and exact", "carefully and exactly"],
          answer: 3,
          topic: "Adjective vs adverb",
          explanation: "<p>Both words describe how the puppet is 'posed,' so both must be adverbs: 'carefully and exactly.'</p><p>The other options mix an adjective with an adverb, which cannot modify the verb.</p>"
        },
        {
          n: 39,
          prompt: "",
          choices: ["NO CHANGE", "a collaboration of many hands", "a joint collaboration of many hands together", "a team collaboration made jointly"],
          answer: 1,
          topic: "Redundancy",
          explanation: "<p>'Collaboration' already means working together, so 'made together' repeats it. 'A collaboration of many hands' is clean.</p><p>The other options pile on 'joint,' 'together,' or 'team,' all restating the same idea.</p>"
        },
        {
          n: 40,
          prompt: "The writer wants a closing sentence that captures why these artists accept such a slow process. Which choice best accomplishes this?",
          choices: ["Clay puppets are cheaper than a large rendering farm.", "Many studios have switched entirely to computers.", "For these artists the patience is the point, because it leaves a human fingerprint on every frame.", "Stop-motion dates back to the earliest days of film."],
          answer: 2,
          topic: "Purpose questions",
          explanation: "<p>A closing that ties the slow process to a human fingerprint explains why the artists accept it, matching the goal.</p><p>The cost, the industry shift, and the history are facts that do not give the artists' reason for embracing the slowness.</p>"
        }
      ]
    },
    {
      title: "Passage V — Starting a Neighborhood Seed Library",
      html: "<p><span class='pnum'>1</span> A seed library lends seeds instead of books: gardeners borrow a packet in spring and return fresh seeds at harvest. The gardeners who donate the most <u data-q='41'>seeds, volunteer</u> to sort and label the collection too.</p><p><span class='pnum'>2</span> Each borrower promises to return seeds from <u data-q='42'>their</u> best plants. Running the library means labeling envelopes, tracking the loans, and <u data-q='43'>you record</u> each new variety. A good seed library needs three <u data-q='45'>things:</u> dry storage, clear labels, and a few patient volunteers.</p><p><span class='pnum'>3</span> Last fall the garden co-op <u data-q='44'>opened</u> its first seed library, and dozens of gardeners joined in a single week. Some donated seeds never sprout. <u data-q='46'>Therefore</u>, the library still lists them so growers can learn which varieties struggled.</p><p><span class='pnum'>4</span> The shelves should be <u data-q='47'>kept in a neat and tidy orderly state</u>. <span class='qmark' data-q='48'></span> The concept is <u data-q='49'>simple; still,</u> it takes steady care to keep a collection alive from one season to the next.</p>",
      questions: [
        {
          n: 41,
          prompt: "",
          choices: ["NO CHANGE", "seeds; volunteer", "seeds, they volunteer", "seeds volunteer"],
          answer: 3,
          topic: "Unnecessary commas",
          explanation: "<p>Nothing should separate the subject 'gardeners who donate the most seeds' from its verb 'volunteer,' so the comma is intrusive and should be removed.</p><p>A semicolon needs two clauses, and inserting 'they' adds a subject the sentence does not need.</p>"
        },
        {
          n: 42,
          prompt: "",
          choices: ["NO CHANGE", "his or her", "they're", "its"],
          answer: 1,
          topic: "Pronoun agreement",
          explanation: "<p>The antecedent 'each borrower' is singular, so the pronoun must be singular: 'his or her.'</p><p>'Their' is plural, 'they're' means 'they are,' and 'its' would treat a person as a thing.</p>"
        },
        {
          n: 43,
          prompt: "",
          choices: ["NO CHANGE", "to record", "recording", "record"],
          answer: 2,
          topic: "Parallelism",
          explanation: "<p>The list of tasks must be parallel: 'labeling,' 'tracking,' and 'recording.' The switch to 'you record' breaks the -ing pattern and shifts to a new subject.</p><p>'To record' and 'record' also fail to match the form set by the first two items.</p>"
        },
        {
          n: 44,
          prompt: "",
          choices: ["NO CHANGE", "opens", "has opened", "was opening"],
          answer: 0,
          topic: "Verb tense",
          explanation: "<p>'Last fall' and the paired verb 'joined' set the sentence in the simple past, so 'opened' is correct as written.</p><p>'Opens' is present, and 'has opened' and 'was opening' do not match the completed, dated event.</p>"
        },
        {
          n: 45,
          prompt: "",
          choices: ["NO CHANGE", "things,", "things;", "things."],
          answer: 0,
          topic: "Colons",
          explanation: "<p>A complete clause precedes the punctuation, and a list explaining 'three things' follows, so the colon already in place is correct.</p><p>A comma is too weak, a semicolon must join two clauses, and a period would break the list off as a fragment.</p>"
        },
        {
          n: 46,
          prompt: "",
          choices: ["NO CHANGE", "As a result", "In addition", "Even so"],
          answer: 3,
          topic: "Transitions",
          explanation: "<p>The library lists the seeds even though they failed, so a contrast word is needed; 'Even so' fits the concession.</p><p>'Therefore' and 'As a result' claim the failure caused the listing, and 'In addition' merely adds, missing the contrast.</p>"
        },
        {
          n: 47,
          prompt: "",
          choices: ["NO CHANGE", "tidy", "neat and orderly and tidy", "kept tidy in an orderly arrangement"],
          answer: 1,
          topic: "Concision",
          explanation: "<p>'Neat,' 'tidy,' and 'orderly' all mean the same thing, so stacking them is redundant. The single word 'tidy' says it cleanly.</p><p>The other options keep two or more of the overlapping words and stay wordy.</p>"
        },
        {
          n: 48,
          prompt: "Which choice, if added here, best supports the paragraph's focus on organizing the collection?",
          choices: ["Tomatoes are among the most popular seeds to borrow.", "Our town holds a farmers market every Saturday.", "Seeds should be sorted by plant type and by the season in which they are sown.", "Gardening is a relaxing hobby for many people."],
          answer: 2,
          topic: "Relevance of detail",
          explanation: "<p>The paragraph is about keeping the collection orderly, so advice on sorting seeds by type and season directly supports its focus.</p><p>The popularity of tomatoes, the farmers market, and the appeal of gardening are unrelated to organizing the shelves.</p>"
        },
        {
          n: 49,
          prompt: "",
          choices: ["NO CHANGE", "simple, still,", "simple still,", "simple: still,"],
          answer: 0,
          topic: "Semicolons",
          explanation: "<p>'The concept is simple' and 'it takes steady care' are independent clauses joined by the conjunctive adverb 'still,' which requires a semicolon before it; the original is correct.</p><p>A comma before 'still' creates a splice, no punctuation makes a run-on, and a colon does not fit two balanced clauses.</p>"
        },
        {
          n: 50,
          prompt: "For the sake of the logical flow of this how-to essay, Paragraph 3 (the account of last fall) should be placed:",
          choices: ["where it is now.", "before Paragraph 1.", "before Paragraph 2.", "after Paragraph 4."],
          answer: 3,
          topic: "Paragraph order",
          explanation: "<p>Paragraphs 1, 2, and 4 explain what a seed library is and how to run it, while Paragraph 3 is a finished success story that works best as the closing example.</p><p>Moving it ahead of the how-to paragraphs would interrupt the instructions, so placing it after Paragraph 4 gives the essay a natural, example-driven ending.</p>"
        }
      ]
    }
  ]
};

window.ACT_DATA.test3_english = {
  id: "test3_english",
  name: "English",
  timeMinutes: 35,
  units: [
    {
      title: "Passage I — Reading the Tide",
      html: "<p>The mudflats behind our rented cottage looked empty at low tide, but they were <u data-q='1'>crowded, you</u> just had to know where to dig. Our neighbor Doreen taught me to work the flats each morning at <u data-q='2'>dawn, when the sun first came up</u>. A cluster of tiny air holes <u data-q='3'>marks</u> the spot where a clam is hiding. A clam pulls in <u data-q='4'>its</u> siphon the instant a shadow crosses the sand.</p><p>By the end of July I <u data-q='5'>learn</u> to spot the holes without slowing my step. The work looked simple from the porch. <u data-q='6'>Similarly</u>, my first hour on the flats left me muddy and empty-handed. Kneeling in the cold muck, <u data-q='7'>the clams stayed just out of my reach</u>. <span class='qmark' data-q='8'></span></p><p>Doreen, <u data-q='9'>who could read the mud like a page</u> never came home with an empty bucket. She showed me how to dig fast and gently at once, and by August I could fill a pail before the tide turned. The flats were never empty; I had only needed to learn their language.</p>",
      questions: [
        {
          n: 1,
          prompt: "",
          choices: ["NO CHANGE", "crowded, but you", "crowded you", "crowded; but you"],
          answer: 1,
          topic: "Comma splices",
          explanation: "<p>'They were crowded' and 'you just had to know where to dig' are both independent clauses, so a comma alone creates a splice. Adding 'but' joins them and marks the contrast with 'looked empty.'</p><p>'Crowded you' fuses the clauses, and a semicolon should not be paired with the conjunction 'but.'</p>"
        },
        {
          n: 2,
          prompt: "",
          choices: ["NO CHANGE", "dawn, as the sun rose at sunrise", "dawn", "dawn in the early morning when the sun rose"],
          answer: 2,
          topic: "Redundancy",
          explanation: "<p>'Dawn' already means the moment the sun first appears, so any clause about the sun coming up repeats it. The single word 'dawn' is enough.</p><p>Each other choice pairs 'dawn' with 'sunrise,' 'the sun rose,' or 'early morning,' restating the same time.</p>"
        },
        {
          n: 3,
          prompt: "",
          choices: ["NO CHANGE", "mark", "are marking", "have marked"],
          answer: 0,
          topic: "Subject-verb agreement",
          explanation: "<p>The subject is the singular 'cluster,' not the plural 'holes' in the phrase 'of tiny air holes,' so the singular 'marks' is correct.</p><p>'Mark' and 'are marking' agree with 'holes,' but the object of a preposition never controls the verb.</p>"
        },
        {
          n: 4,
          prompt: "",
          choices: ["NO CHANGE", "it's", "its'", "their"],
          answer: 0,
          topic: "Apostrophes",
          explanation: "<p>Possessive 'its' takes no apostrophe and correctly shows the siphon belonging to the clam, so no change is needed.</p><p>'It's' means 'it is,' 'its'' is not a word, and 'their' has no plural antecedent.</p>"
        },
        {
          n: 5,
          prompt: "",
          choices: ["NO CHANGE", "learning", "have learned", "had learned"],
          answer: 3,
          topic: "Verb tense",
          explanation: "<p>The learning was complete 'by the end of July,' a point in the past, so the past perfect 'had learned' correctly places it before the rest of the past narration.</p><p>The present 'learn' and 'learning' clash with the past account, and the present perfect 'have learned' cannot pair with a finished past time.</p>"
        },
        {
          n: 6,
          prompt: "",
          choices: ["NO CHANGE", "In truth", "Likewise", "For instance"],
          answer: 1,
          topic: "Transitions",
          explanation: "<p>The task looked simple, but the reality was muddy failure, so a contrast word is needed; 'In truth' signals that the reality differed from the appearance.</p><p>'Similarly' and 'Likewise' claim agreement, and 'For instance' promises an example, none of which fits the reversal.</p>"
        },
        {
          n: 7,
          prompt: "",
          choices: ["NO CHANGE", "my reach could not close on the clams", "I found the clams just out of reach", "the clams sat out of my reach anyway"],
          answer: 2,
          topic: "Dangling modifiers",
          explanation: "<p>'Kneeling in the cold muck' must describe the person kneeling, so the noun after it should be 'I,' not 'the clams.' The original says the clams were kneeling.</p><p>Only the choice beginning with 'I' attaches the modifier correctly; the others leave 'the clams' or 'my reach' doing the kneeling.</p>"
        },
        {
          n: 8,
          prompt: "Which choice, if added here, most vividly conveys the physical difficulty of learning to dig?",
          choices: ["Clams are a kind of mollusk found on many coasts.", "Doreen had been digging these flats for forty years.", "The cottage rent was due at the end of the month.", "By noon my fingers ached and my knuckles were scraped raw from the buried shells."],
          answer: 3,
          topic: "Purpose questions",
          explanation: "<p>The paragraph is about the hard, clumsy start, so a concrete image of aching fingers and scraped knuckles makes the difficulty vivid.</p><p>The clam fact, Doreen's experience, and the rent are unrelated to the physical strain of the work.</p>"
        },
        {
          n: 9,
          prompt: "",
          choices: ["NO CHANGE", "who could read the mud like a page,", "whom could read the mud like a page", "who could read the mud like a page;"],
          answer: 1,
          topic: "Nonrestrictive clauses",
          explanation: "<p>'Who could read the mud like a page' is nonrestrictive and already has an opening comma, so it needs a closing comma before the verb 'never came.'</p><p>'Whom' is the wrong case for a subject, and a semicolon cannot close an interrupter mid-sentence.</p>"
        },
        {
          n: 10,
          prompt: "Suppose the writer's goal had been to show how a patient mentor turned a frustrating task into a real skill. Would this essay accomplish that goal?",
          choices: ["No, because it focuses only on the biology of clams.", "No, because it never mentions anyone who helped the writer.", "Yes, because it shows Doreen guiding the writer from muddy failure to a genuine skill.", "Yes, because it gives step-by-step instructions for digging clams."],
          answer: 2,
          topic: "Essay goal questions",
          explanation: "<p>The essay moves from the writer's early failure to real competence under Doreen's guidance, which matches the goal exactly.</p><p>The essay does mention Doreen and is not a clam-biology piece or a how-to manual, so the other options misread it.</p>"
        }
      ]
    },
    {
      title: "Passage II — How Noise-Canceling Headphones Work",
      html: "<p>The headphones fight steady noise with three cooperating <u data-q='11'>parts,</u> a microphone, a small processor, and the speaker itself. A microphone mounted on the outer shell <u data-q='12'>listens</u> to the world before any sound reaches your ear. The processor works without pause, sampling the sound, reversing its shape, and <u data-q='13'>to feed</u> the mirror image to the speaker.</p><p>The mirror-image wave cancels the roar because <u data-q='14'>it does the opposite of the original</u>. The processor, <u data-q='15'>which never rests</u> adjusts the signal thousands of times a second. Because the sound is analyzed so often, the system can react as the noise around you <u data-q='16'>constantly and without ever stopping</u> shifts.</p><p>Each pair of headphones tunes <u data-q='17'>their</u> filter to the shape of the wearer's ears. <u data-q='18'>However,</u> the trick works best against low, even sounds. A jet engine produces a steady roar. <u data-q='19'>A sound that the system silences with ease.</u> <span class='qmark' data-q='20'></span></p>",
      questions: [
        {
          n: 11,
          prompt: "",
          choices: ["NO CHANGE", "parts;", "parts.", "parts:"],
          answer: 3,
          topic: "Colons",
          explanation: "<p>A complete clause precedes the punctuation, and a list naming the three parts follows, so a colon is the correct introducer.</p><p>A comma is too weak, a semicolon must join two clauses, and a period would strand the list as a fragment.</p>"
        },
        {
          n: 12,
          prompt: "",
          choices: ["NO CHANGE", "listen", "are listening", "have listened"],
          answer: 0,
          topic: "Subject-verb agreement",
          explanation: "<p>The singular subject 'microphone' controls the verb, not the plural 'shell' or 'world,' so the singular 'listens' is correct.</p><p>'Listen' and 'are listening' would need a plural subject, and the present perfect 'have listened' misstates the ongoing action.</p>"
        },
        {
          n: 13,
          prompt: "",
          choices: ["NO CHANGE", "feeding", "feeds", "it feeds"],
          answer: 1,
          topic: "Parallelism",
          explanation: "<p>The series lists 'sampling,' 'reversing,' and a third action, so parallelism requires the -ing form 'feeding.'</p><p>'To feed,' 'feeds,' and 'it feeds' all break the pattern set by the first two items.</p>"
        },
        {
          n: 14,
          prompt: "Which choice most specifically explains how the reversed wave cancels the noise?",
          choices: ["NO CHANGE", "it works against the sound in some way", "each peak of the noise meets an equal trough, and the two flatten to near silence", "it is remarkably good at its job"],
          answer: 2,
          topic: "Purpose questions",
          explanation: "<p>The prompt asks for the mechanism, and only the choice describing peaks meeting equal troughs explains why the waves cancel.</p><p>'Does the opposite,' 'works against the sound,' and 'good at its job' restate the effect without explaining it.</p>"
        },
        {
          n: 15,
          prompt: "",
          choices: ["NO CHANGE", "that never rests", "which never rests;", "which never rests,"],
          answer: 3,
          topic: "Nonrestrictive clauses",
          explanation: "<p>The clause is nonrestrictive and already opens with a comma, so it must close with a comma before 'adjusts.'</p><p>'That' cannot begin a nonrestrictive clause, a semicolon cannot close an interrupter, and dropping the comma fuses the aside to the verb.</p>"
        },
        {
          n: 16,
          prompt: "",
          choices: ["NO CHANGE", "constantly", "constantly and all the time", "constantly, without pause,"],
          answer: 1,
          topic: "Redundancy",
          explanation: "<p>'Constantly' already means without stopping, so any added phrase about never stopping repeats it. The single adverb is enough.</p><p>Each other choice pairs 'constantly' with 'without ever stopping,' 'all the time,' or 'without pause.'</p>"
        },
        {
          n: 17,
          prompt: "",
          choices: ["NO CHANGE", "there", "its", "it's"],
          answer: 2,
          topic: "Pronoun agreement",
          explanation: "<p>The antecedent 'each pair' is singular, so the singular possessive 'its' is required.</p><p>'Their' is plural, 'there' shows place, and 'it's' means 'it is.'</p>"
        },
        {
          n: 18,
          prompt: "",
          choices: ["NO CHANGE", "Therefore,", "For example,", "In addition,"],
          answer: 0,
          topic: "Transitions",
          explanation: "<p>The essay has praised the system's precision, and this sentence introduces its limit, so the contrast word 'However' fits.</p><p>'Therefore' and 'In addition' signal agreement, and 'For example' promises an instance of the prior point.</p>"
        },
        {
          n: 19,
          prompt: "",
          choices: ["NO CHANGE", "A sound, that the system silences with ease.", "A sound that the system silences with ease;", "The system silences this sound with ease."],
          answer: 3,
          topic: "Fragments",
          explanation: "<p>'A sound that the system silences with ease' has no main verb for its subject, so it is a fragment; rewriting it as 'The system silences this sound with ease' makes a complete sentence.</p><p>Adding a comma or a semicolon leaves the fragment a fragment.</p>"
        },
        {
          n: 20,
          prompt: "Which choice, if added at the end of the essay, best identifies a limitation of the technology described?",
          choices: ["The headphones come in several colors.", "Most listeners find the fit comfortable.", "Because it cannot predict a slamming door or a shouted word, the system lets those sudden sounds slip through.", "Battery life keeps improving with each new model."],
          answer: 2,
          topic: "Purpose questions",
          explanation: "<p>The passage says the trick works best on steady sound, so the note about unpredictable slams and shouts names the real limitation.</p><p>Color, comfort, and battery life are features, not limits on the noise-canceling itself.</p>"
        }
      ]
    },
    {
      title: "Passage III — The Fossil Hunter of Lyme Regis",
      html: "<p>In 1811, a winter storm <u data-q='21'>exposes</u> the skull of a strange creature in the cliffs near Lyme Regis, on the English coast. The discovery had a lasting <u data-q='22'>affect</u> on the young science of paleontology. Mary Anning, <u data-q='23'>who</u> collectors relied on for their finest specimens, rarely received public credit for her work.</p><p>Anning had little formal <u data-q='24'>schooling, she taught</u> herself geology and anatomy. She learned by doing, chipping fragile bones from the rock with a sure hand. Displayed in glass cases across Europe, <u data-q='25'>collectors admired Anning's fossils</u>. She spent long, dangerous hours <u data-q='26'>in the careful process of digging out</u> fossils before the tides returned.</p><p>Wealthy collectors <u data-q='27'>competed for</u> the specimens she pulled from the cliffs, sometimes paying enough to feed her family through a hard winter. <span class='qmark' data-q='28'></span> Anning's findings reshaped the young field of <u data-q='29'>geology, the Geological Society</u> still barred women from its meetings for decades after her death.</p>",
      questions: [
        {
          n: 21,
          prompt: "",
          choices: ["NO CHANGE", "exposed", "has exposed", "exposing"],
          answer: 1,
          topic: "Verb tense",
          explanation: "<p>The date '1811' and the surrounding past-tense narration require the simple past 'exposed.'</p><p>The present 'exposes' clashes with the past setting, the present perfect 'has exposed' cannot pair with a finished date, and 'exposing' leaves the sentence without a main verb.</p>"
        },
        {
          n: 22,
          prompt: "",
          choices: ["NO CHANGE", "affects", "effect", "effects"],
          answer: 2,
          topic: "Commonly confused words",
          explanation: "<p>The sentence needs a noun after 'a lasting,' and the noun is 'effect,' meaning result. 'Affect' is normally a verb.</p><p>'Affects' and 'effects' are plural or verb forms that cannot follow the singular article 'a.'</p>"
        },
        {
          n: 23,
          prompt: "",
          choices: ["NO CHANGE", "that", "which", "whom"],
          answer: 3,
          topic: "Pronoun case",
          explanation: "<p>The pronoun is the object of 'relied on' ('collectors relied on ___'), so the objective 'whom' is correct.</p><p>'Who' is subjective, and 'that' and 'which' cannot refer to a named person in this nonrestrictive aside.</p>"
        },
        {
          n: 24,
          prompt: "",
          choices: ["NO CHANGE", "schooling. She taught", "schooling she taught", "schooling; but she taught"],
          answer: 1,
          topic: "Comma splices",
          explanation: "<p>'Anning had little formal schooling' and 'she taught herself geology and anatomy' are both independent, so a comma alone splices them; a period correctly separates them.</p><p>Dropping punctuation fuses the clauses, and a semicolon should not be paired with 'but.'</p>"
        },
        {
          n: 25,
          prompt: "",
          choices: ["NO CHANGE", "the admiration of collectors met Anning's fossils", "Anning's fossils drew admiring crowds of collectors", "there were collectors who admired Anning's fossils"],
          answer: 2,
          topic: "Misplaced modifiers",
          explanation: "<p>'Displayed in glass cases across Europe' must describe the fossils, so 'Anning's fossils' should follow the modifier, not 'collectors' or 'admiration.'</p><p>Only the choice that puts 'Anning's fossils' right after the phrase attaches the modifier correctly.</p>"
        },
        {
          n: 26,
          prompt: "",
          choices: ["NO CHANGE", "digging out", "involved in the careful digging out of", "at work carefully digging out"],
          answer: 1,
          topic: "Concision",
          explanation: "<p>'Digging out' carries the full meaning; 'in the careful process of' adds nothing the sentence needs.</p><p>The other choices restate 'process' or 'at work' and are wordier than the plain verb.</p>"
        },
        {
          n: 27,
          prompt: "",
          choices: ["NO CHANGE", "competed to", "competed by", "competed from"],
          answer: 0,
          topic: "Idioms & prepositions",
          explanation: "<p>The idiom is 'competed for' something, so 'competed for the specimens' is correct.</p><p>'Competed to,' 'competed by,' and 'competed from' are not the standard preposition for this verb.</p>"
        },
        {
          n: 28,
          prompt: "The writer is considering deleting the following sentence: 'Today Lyme Regis draws tourists who hunt for fossils on the same beaches.' Should it be kept or deleted?",
          choices: ["Kept, because it explains how Anning found her first fossil.", "Kept, because it details the scientific method Anning used.", "Deleted, because it shifts to modern tourism and interrupts the account of Anning's life and work.", "Deleted, because it contradicts the claim that she was overlooked."],
          answer: 2,
          topic: "Relevance of detail",
          explanation: "<p>The paragraph stays with Anning's era and reputation, so a jump to present-day tourism breaks that focus and should be deleted.</p><p>The sentence neither explains her first find nor her method, and it does not contradict the point about her being overlooked.</p>"
        },
        {
          n: 29,
          prompt: "",
          choices: ["NO CHANGE", "geology the Geological Society", "geology, but the Geological Society;", "geology; the Geological Society"],
          answer: 3,
          topic: "Semicolons",
          explanation: "<p>Two independent clauses set in contrast need a semicolon or period between them, so 'geology; the Geological Society' is correct.</p><p>A comma alone splices them, no punctuation fuses them, and placing the semicolon after 'Society' misplaces the break.</p>"
        },
        {
          n: 30,
          prompt: "Suppose the writer wanted an essay showing how a self-taught woman shaped a science that still denied her recognition. Would this essay meet that goal?",
          choices: ["No, because it focuses on the geology of Lyme Regis rather than on Anning.", "Yes, because it shows Anning's self-taught discoveries advancing paleontology even as institutions withheld credit.", "Yes, because it lists the scientific societies that welcomed her as a member.", "No, because it argues that Anning received all the recognition she deserved."],
          answer: 1,
          topic: "Essay goal questions",
          explanation: "<p>The essay presents a self-taught Anning whose finds reshaped the field while the Geological Society shut her out, matching the goal.</p><p>It is not a geology-of-the-town piece, no society welcomed her, and it never claims she was fully recognized.</p>"
        }
      ]
    },
    {
      title: "Passage IV — How a Pipe Organ Gets Its Voice",
      html: "<p>When a new pipe organ leaves the workshop, it cannot yet make music. Each pipe <u data-q='31'>which is really a finely tuned whistle</u> must be adjusted by hand before it will sing. A stop with <u data-q='32'>fewer</u> pipes produces a quieter, gentler sound. A rank of hundreds of pipes <u data-q='33'>arrive</u> from the shop raw and unvoiced.</p><p>A worker called a voicer shapes each note. Each pipe can be tuned in minutes. <u data-q='34'>Even so,</u> a full organ holds thousands of pipes and can take months to finish. To brighten a pipe, the voicer <u data-q='35'>changes it a little</u>. The wind supply must stay <u data-q='36'>steady, otherwise the pitch wavers</u> and the note sours.</p><p>The <u data-q='37'>voicers'</u> tools include thin knives, small files, and a soft mallet. A skilled voicer works <u data-q='38'>patient and precise</u>, listening after every cut. Voicing an entire organ is <u data-q='39'>a slow process that takes a long time</u> to complete, but the reward is an instrument with a voice all its own. <span class='qmark' data-q='40'></span></p>",
      questions: [
        {
          n: 31,
          prompt: "",
          choices: ["NO CHANGE", ", which is really a finely tuned whistle", "\u2014 which is really a finely tuned whistle \u2014", "which is really a finely tuned whistle,"],
          answer: 2,
          topic: "Dashes",
          explanation: "<p>The aside interrupts 'Each pipe ... must be adjusted,' so it needs matching punctuation on both sides; paired dashes close the interrupter cleanly.</p><p>No punctuation fuses the aside, and the single-comma versions open or close the interrupter without a matching mark.</p>"
        },
        {
          n: 32,
          prompt: "",
          choices: ["NO CHANGE", "less", "lesser", "least"],
          answer: 0,
          topic: "Commonly confused words",
          explanation: "<p>'Pipes' are countable, so the countable comparative 'fewer' is correct.</p><p>'Less' is for uncountable amounts, and 'lesser' and 'least' change the meaning entirely.</p>"
        },
        {
          n: 33,
          prompt: "",
          choices: ["NO CHANGE", "have arrived", "are arriving", "arrives"],
          answer: 3,
          topic: "Subject-verb agreement",
          explanation: "<p>The subject is the singular 'rank,' not the plural 'pipes' in the phrase 'of hundreds of pipes,' so 'arrives' is correct.</p><p>The other forms agree with 'pipes,' but the object of a preposition never controls the verb.</p>"
        },
        {
          n: 34,
          prompt: "",
          choices: ["NO CHANGE", "As a result,", "For example,", "Likewise,"],
          answer: 0,
          topic: "Transitions",
          explanation: "<p>One pipe is quick, yet the whole job takes months, so the concessive 'Even so' correctly marks the contrast between the small task and the large one.</p><p>'As a result' and 'Likewise' signal agreement, and 'For example' promises an instance.</p>"
        },
        {
          n: 35,
          prompt: "Which choice most specifically describes what the voicer physically does to brighten a pipe's tone?",
          choices: ["NO CHANGE", "widens the slot where the air escapes and files the lip smooth", "makes an adjustment to improve things", "does whatever the music seems to require"],
          answer: 1,
          topic: "Purpose questions",
          explanation: "<p>The prompt asks for the concrete action, and only the choice about widening the air slot and filing the lip names what the voicer does.</p><p>'Changes it a little,' 'makes an adjustment,' and 'does whatever the music requires' stay vague.</p>"
        },
        {
          n: 36,
          prompt: "",
          choices: ["NO CHANGE", "steady otherwise the pitch wavers", "steady; otherwise, the pitch wavers", "steady, otherwise, the pitch wavers"],
          answer: 2,
          topic: "Run-ons",
          explanation: "<p>'The wind supply must stay steady' and 'the pitch wavers' are independent clauses joined by the adverb 'otherwise,' which needs a semicolon before it.</p><p>A comma alone or added commas still splice the clauses, and dropping punctuation fuses them.</p>"
        },
        {
          n: 37,
          prompt: "",
          choices: ["NO CHANGE", "voicer's", "voicers", "voicers's"],
          answer: 0,
          topic: "Apostrophes",
          explanation: "<p>The tools belong to more than one voicer, so the plural possessive 'voicers'' with the apostrophe after the s is correct.</p><p>'Voicer's' is singular, 'voicers' shows no possession, and 'voicers's' is not a standard form for a plural ending in s.</p>"
        },
        {
          n: 38,
          prompt: "",
          choices: ["NO CHANGE", "patient and precisely", "patiently and precise", "patiently and precisely"],
          answer: 3,
          topic: "Adjective vs adverb",
          explanation: "<p>The words modify the verb 'works,' so both must be adverbs: 'patiently and precisely.'</p><p>Each other choice keeps at least one adjective, which cannot describe how the voicer works.</p>"
        },
        {
          n: 39,
          prompt: "",
          choices: ["NO CHANGE", "a slow process", "a slow process that is lengthy", "a slow and time-consuming, lengthy process"],
          answer: 1,
          topic: "Redundancy",
          explanation: "<p>'A slow process' already conveys that it takes a long time, so any added phrase about length repeats it.</p><p>Each other choice pairs 'slow' with 'takes a long time,' 'lengthy,' or 'time-consuming.'</p>"
        },
        {
          n: 40,
          prompt: "Which choice, if added at the end of the essay, best reinforces the idea that voicing is an art guided by the ear?",
          choices: ["Modern organs often include electric blowers to supply the wind.", "The largest organs can fill an entire cathedral with sound.", "No meter can replace the voicer's trained ear, which alone decides when a pipe finally sings true.", "Organ building has a history that stretches back many centuries."],
          answer: 2,
          topic: "Purpose questions",
          explanation: "<p>The essay stresses hand work and listening, so the note that the trained ear, not a meter, makes the final call reinforces that idea.</p><p>Blowers, cathedral volume, and history are related facts that do not speak to voicing as an art of the ear.</p>"
        }
      ]
    },
    {
      title: "Passage V — Coordinating a Community Blood Drive",
      html: "<p><span class='pnum'>1</span>Organizing a community blood drive begins weeks before anyone gives blood. Our club reserves the gymnasium and recruits a dozen <u data-q='41'>volunteers,</u> to greet and guide the donors. Careful planning is what turns a crowded room into a calm one.</p><p><span class='pnum'>2</span>Every volunteer signs up for <u data-q='42'>their</u> own two-hour shift. The scheduler spends the week calling donors, confirming times, and <u data-q='43'>she reminds</u> them to eat a full meal first. A good check-in table holds three essential <u data-q='45'>things:</u> a sign-in sheet, a cup of pens, and a bowl of stickers.</p><p><span class='pnum'>3</span>Last winter our club <u data-q='44'>hosted</u> its very first drive, and forty neighbors showed up before noon. We had worried that no one would come. <u data-q='46'>As expected,</u> the line stretched out the door by nine o'clock, and we knew the club had found its purpose.</p><p><span class='pnum'>4</span>After giving blood, donors rest for ten minutes while volunteers <u data-q='47'>keep the area calm, quiet, and free of noise and commotion</u>. <span class='qmark' data-q='48'></span> By the third hour the steps become <u data-q='49'>routine; however,</u> every donor still deserves a warm welcome.</p>",
      questions: [
        {
          n: 41,
          prompt: "",
          choices: ["NO CHANGE", "volunteers;", "volunteers:", "volunteers"],
          answer: 3,
          topic: "Unnecessary commas",
          explanation: "<p>The infinitive phrase 'to greet and guide the donors' explains what the volunteers do and should not be cut off from 'volunteers,' so no punctuation belongs there.</p><p>A comma, semicolon, or colon all wrongly separate the noun from the phrase that modifies it.</p>"
        },
        {
          n: 42,
          prompt: "",
          choices: ["NO CHANGE", "his or her", "its", "they're"],
          answer: 1,
          topic: "Pronoun agreement",
          explanation: "<p>'Every volunteer' is singular, so the singular 'his or her' is the correct match.</p><p>'Their' is plural, 'its' is for things, and 'they're' means 'they are.'</p>"
        },
        {
          n: 43,
          prompt: "",
          choices: ["NO CHANGE", "to remind", "reminding", "reminds"],
          answer: 2,
          topic: "Parallelism",
          explanation: "<p>The series lists 'calling,' 'confirming,' and a third action, so parallelism requires the -ing form 'reminding.'</p><p>'She reminds,' 'to remind,' and 'reminds' all break the pattern set by the first two verbs.</p>"
        },
        {
          n: 44,
          prompt: "",
          choices: ["NO CHANGE", "hosts", "has hosted", "will host"],
          answer: 0,
          topic: "Verb tense",
          explanation: "<p>'Last winter' places the action firmly in the past, so the simple past 'hosted' is correct.</p><p>The present 'hosts,' the present perfect 'has hosted,' and the future 'will host' all clash with the past time marker.</p>"
        },
        {
          n: 45,
          prompt: "",
          choices: ["NO CHANGE", "things,", "things;", "things."],
          answer: 0,
          topic: "Colons",
          explanation: "<p>A complete clause precedes the punctuation, and a list naming the three items follows, so the colon already in place is correct.</p><p>A comma is too weak, a semicolon must join two clauses, and a period would strand the list as a fragment.</p>"
        },
        {
          n: 46,
          prompt: "",
          choices: ["NO CHANGE", "Therefore,", "For instance,", "Even so,"],
          answer: 3,
          topic: "Transitions",
          explanation: "<p>The club feared no one would come, yet a long line formed, so the contrast word 'Even so' fits the reversal.</p><p>'As expected' claims the crowd was foreseen, and 'Therefore' and 'For instance' signal cause or example rather than contrast.</p>"
        },
        {
          n: 47,
          prompt: "",
          choices: ["NO CHANGE", "keep the area calm and quiet", "keep the area calm, quiet, and peaceful, without any loud noise", "make sure the area stays calm and also quiet and hushed"],
          answer: 1,
          topic: "Concision",
          explanation: "<p>'Calm and quiet' already covers the idea, so listing 'free of noise and commotion' or 'peaceful, without any loud noise' repeats it.</p><p>Each longer choice piles synonyms onto 'calm and quiet' without adding meaning.</p>"
        },
        {
          n: 48,
          prompt: "Which choice, if added here, best supports the paragraph's focus on caring for donors after they give blood?",
          choices: ["The gymnasium is also used for basketball practice on weeknights.", "Blood drives are held in many countries around the world.", "Volunteers offer juice and a quiet place to sit until each donor feels steady enough to leave.", "The club has existed for more than twenty years."],
          answer: 2,
          topic: "Relevance of detail",
          explanation: "<p>The paragraph is about aftercare, so the detail about juice and a place to rest until donors feel steady directly supports it.</p><p>The gym's other uses, global drives, and the club's age do not concern caring for donors afterward.</p>"
        },
        {
          n: 49,
          prompt: "",
          choices: ["NO CHANGE", "routine, however,", "routine however", "routine; however"],
          answer: 0,
          topic: "Semicolons",
          explanation: "<p>Two independent clauses joined by 'however' need a semicolon before it and a comma after it, which the original has.</p><p>A comma before 'however' splices the clauses, and dropping the semicolon or the following comma leaves the joint incorrectly punctuated.</p>"
        },
        {
          n: 50,
          prompt: "For the sake of logic and coherence, Paragraph 3 should be placed:",
          choices: ["where it is now.", "before Paragraph 1.", "after Paragraph 1.", "after Paragraph 4, at the end of the essay."],
          answer: 3,
          topic: "Paragraph order",
          explanation: "<p>Paragraphs 1, 2, and 4 walk through the present-day steps of running a drive, while Paragraph 3 is a past-tense reflection on the club's first drive, which reads best as a closing.</p><p>Left in the middle, the anecdote interrupts the how-to sequence; moving it before or just after Paragraph 1 would split the planning steps apart.</p>"
        }
      ]
    }
  ]
};
